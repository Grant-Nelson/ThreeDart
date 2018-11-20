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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isD)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
if(a1==="p"){processStatics(init.statics[b2]=b3.p,b4)
delete b3.p}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dq(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dr=function(){}
var dart=[["","",,H,{"^":"",ls:{"^":"a;a"}}],["","",,J,{"^":"",
dw:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cp:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dv==null){H.l0()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.f1("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cL()]
if(v!=null)return v
v=H.l5(a)
if(v!=null)return v
if(typeof a=="function")return C.V
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.$get$cL(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
D:{"^":"a;",
u:function(a,b){return a===b},
gX:function(a){return H.br(a)},
i:["eJ",function(a){return"Instance of '"+H.b2(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
hH:{"^":"D;",
i:function(a){return String(a)},
gX:function(a){return a?519018:218159},
$isJ:1},
e6:{"^":"D;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gX:function(a){return 0},
$isH:1},
cM:{"^":"D;",
gX:function(a){return 0},
i:["eL",function(a){return String(a)}]},
ii:{"^":"cM;"},
cf:{"^":"cM;"},
bK:{"^":"cM;",
i:function(a){var z=a[$.$get$dR()]
if(z==null)return this.eL(a)
return"JavaScript function for "+H.f(J.a6(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbI:1},
aZ:{"^":"D;$ti",
h:function(a,b){H.y(b,H.v(a,0))
if(!!a.fixed$length)H.p(P.ag("add"))
a.push(b)},
U:function(a,b){var z
if(!!a.fixed$length)H.p(P.ag("remove"))
for(z=0;z<a.length;++z)if(J.R(a[z],b)){a.splice(z,1)
return!0}return!1},
a0:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.v(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.aM(a))}},
k:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.V(z,y,H.f(a[y]))
return z.join(b)},
j_:function(a){return this.k(a,"")},
iU:function(a,b,c){var z,y,x
H.j(b,{func:1,ret:P.J,args:[H.v(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.h(P.aM(a))}throw H.h(H.cK())},
iT:function(a,b){return this.iU(a,b,null)},
a2:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
eI:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.a8(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.a8(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.v(a,0)])
return H.c(a.slice(b,c),[H.v(a,0)])},
gbE:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.cK())},
dv:function(a,b){var z,y
H.j(b,{func:1,ret:P.J,args:[H.v(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.h(P.aM(a))}return!1},
S:function(a,b){var z
for(z=0;z<a.length;++z)if(J.R(a[z],b))return!0
return!1},
i:function(a){return P.cJ(a,"[","]")},
gO:function(a){return new J.ap(a,a.length,0,[H.v(a,0)])},
gX:function(a){return H.br(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.p(P.ag("set length"))
if(b<0)throw H.h(P.a8(b,0,null,"newLength",null))
a.length=b},
V:function(a,b,c){H.y(c,H.v(a,0))
if(!!a.immutable$list)H.p(P.ag("indexed set"))
if(b>=a.length||b<0)throw H.h(H.bF(a,b))
a[b]=c},
$isl:1,
$isb:1,
p:{
hG:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.cy(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.a8(a,0,4294967295,"length",null))
return J.e3(new Array(a),b)},
e3:function(a,b){return J.c3(H.c(a,[b]))},
c3:function(a){H.cs(a)
a.fixed$length=Array
return a}}},
lr:{"^":"aZ;$ti"},
ap:{"^":"a;a,b,c,0d,$ti",
sd9:function(a){this.d=H.y(a,H.v(this,0))},
gF:function(){return this.d},
A:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.x(z))
x=this.c
if(x>=y){this.sd9(null)
return!1}this.sd9(z[x]);++this.c
return!0},
$isaO:1},
c4:{"^":"D;",
jA:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.ag(""+a+".toInt()"))},
cw:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.ag(""+a+".floor()"))},
ah:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ag(""+a+".round()"))},
eg:function(a,b){var z,y
if(b>20)throw H.h(P.a8(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gX:function(a){return a&0x1FFFFFFF},
eA:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eO:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dn(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.dn(a,b)},
dn:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.ag("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
bl:function(a,b){var z
if(a>0)z=this.hF(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hF:function(a,b){return b>31?0:a>>>b},
ai:function(a,b){if(typeof b!=="number")throw H.h(H.aT(b))
return a<b},
$isw:1,
$isa9:1},
e5:{"^":"c4;",$isz:1},
e4:{"^":"c4;"},
c5:{"^":"D;",
cl:function(a,b){if(b<0)throw H.h(H.bF(a,b))
if(b>=a.length)H.p(H.bF(a,b))
return a.charCodeAt(b)},
aC:function(a,b){if(b>=a.length)throw H.h(H.bF(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.C(b)
if(typeof b!=="string")throw H.h(P.cy(b,null,null))
return a+b},
eH:function(a,b,c){var z
if(c>a.length)throw H.h(P.a8(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bM:function(a,b){return this.eH(a,b,0)},
bf:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.cb(b,null,null))
if(b>c)throw H.h(P.cb(b,null,null))
if(c>a.length)throw H.h(P.cb(c,null,null))
return a.substring(b,c)},
be:function(a,b){return this.bf(a,b,null)},
jD:function(a){return a.toLowerCase()},
v:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.H)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
jb:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.v(c,z)+a},
a8:function(a,b){return this.jb(a,b," ")},
iy:function(a,b,c){if(c>a.length)throw H.h(P.a8(c,0,a.length,null,null))
return H.fM(a,b,c)},
i:function(a){return a},
gX:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gn:function(a){return a.length},
$isel:1,
$isn:1}}],["","",,H,{"^":"",
cK:function(){return new P.cX("No element")},
hF:function(){return new P.cX("Too many elements")},
q:{"^":"jo;a",
gn:function(a){return this.a.length},
l:function(a,b){return C.i.cl(this.a,b)},
$asf2:function(){return[P.z]},
$asS:function(){return[P.z]},
$asl:function(){return[P.z]},
$asb:function(){return[P.z]}},
dY:{"^":"l;"},
c7:{"^":"dY;$ti",
gO:function(a){return new H.cO(this,this.gn(this),0,[H.a_(this,"c7",0)])},
cK:function(a,b){return this.eK(0,H.j(b,{func:1,ret:P.J,args:[H.a_(this,"c7",0)]}))}},
cO:{"^":"a;a,b,c,0d,$ti",
saW:function(a){this.d=H.y(a,H.v(this,0))},
gF:function(){return this.d},
A:function(){var z,y,x,w
z=this.a
y=J.co(z)
x=y.gn(z)
if(this.b!==x)throw H.h(P.aM(z))
w=this.c
if(w>=x){this.saW(null)
return!1}this.saW(y.a2(z,w));++this.c
return!0},
$isaO:1},
hW:{"^":"l;a,b,$ti",
gO:function(a){return new H.hX(J.bf(this.a),this.b,this.$ti)},
gn:function(a){return J.aX(this.a)},
a2:function(a,b){return this.b.$1(J.cw(this.a,b))},
$asl:function(a,b){return[b]}},
hX:{"^":"aO;0a,b,c,$ti",
saW:function(a){this.a=H.y(a,H.v(this,1))},
A:function(){var z=this.b
if(z.A()){this.saW(this.c.$1(z.gF()))
return!0}this.saW(null)
return!1},
gF:function(){return this.a},
$asaO:function(a,b){return[b]}},
hY:{"^":"c7;a,b,$ti",
gn:function(a){return J.aX(this.a)},
a2:function(a,b){return this.b.$1(J.cw(this.a,b))},
$asc7:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
df:{"^":"l;a,b,$ti",
gO:function(a){return new H.jG(J.bf(this.a),this.b,this.$ti)}},
jG:{"^":"aO;a,b,$ti",
A:function(){var z,y
for(z=this.a,y=this.b;z.A();)if(y.$1(z.gF()))return!0
return!1},
gF:function(){return this.a.gF()}},
c_:{"^":"a;$ti"},
f2:{"^":"a;$ti"},
jo:{"^":"c6+f2;"}}],["","",,H,{"^":"",
be:function(a){var z,y
z=H.C(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kU:function(a){return init.types[H.a4(a)]},
l3:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.N(a).$isal},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a6(a)
if(typeof z!=="string")throw H.h(H.aT(a))
return z},
br:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b2:function(a){return H.ik(a)+H.dm(H.aU(a),0,null)},
ik:function(a){var z,y,x,w,v,u,t,s,r
z=J.N(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.N||!!z.$iscf){u=C.B(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.be(w.length>1&&C.i.aC(w,0)===36?C.i.be(w,1):w)},
er:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
it:function(a){var z,y,x,w
z=H.c([],[P.z])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aT(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.bl(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aT(w))}return H.er(z)},
es:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aT(x))
if(x<0)throw H.h(H.aT(x))
if(x>65535)return H.it(a)}return H.er(a)},
cT:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.bl(z,10))>>>0,56320|z&1023)}throw H.h(P.a8(a,0,1114111,null,null))},
b1:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
is:function(a){var z=H.b1(a).getFullYear()+0
return z},
iq:function(a){var z=H.b1(a).getMonth()+1
return z},
il:function(a){var z=H.b1(a).getDate()+0
return z},
im:function(a){var z=H.b1(a).getHours()+0
return z},
ip:function(a){var z=H.b1(a).getMinutes()+0
return z},
ir:function(a){var z=H.b1(a).getSeconds()+0
return z},
io:function(a){var z=H.b1(a).getMilliseconds()+0
return z},
B:function(a){throw H.h(H.aT(a))},
k:function(a,b){if(a==null)J.aX(a)
throw H.h(H.bF(a,b))},
bF:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.az(!0,b,"index",null)
z=H.a4(J.aX(a))
if(!(b<0)){if(typeof z!=="number")return H.B(z)
y=b>=z}else y=!0
if(y)return P.aY(b,a,"index",null,z)
return P.cb(b,"index",null)},
kQ:function(a,b,c){if(a>c)return new P.ca(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ca(a,c,!0,b,"end","Invalid value")
return new P.az(!0,b,"end",null)},
aT:function(a){return new P.az(!0,a,null,null)},
kL:function(a){if(typeof a!=="number")throw H.h(H.aT(a))
return a},
h:function(a){var z
if(a==null)a=new P.ek()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fN})
z.name=""}else z.toString=H.fN
return z},
fN:function(){return J.a6(this.dartException)},
p:function(a){throw H.h(a)},
x:function(a){throw H.h(P.aM(a))},
aa:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lh(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.bl(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cN(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ej(H.f(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eR()
u=$.$get$eS()
t=$.$get$eT()
s=$.$get$eU()
r=$.$get$eY()
q=$.$get$eZ()
p=$.$get$eW()
$.$get$eV()
o=$.$get$f0()
n=$.$get$f_()
m=v.a7(y)
if(m!=null)return z.$1(H.cN(H.C(y),m))
else{m=u.a7(y)
if(m!=null){m.method="call"
return z.$1(H.cN(H.C(y),m))}else{m=t.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=r.a7(y)
if(m==null){m=q.a7(y)
if(m==null){m=p.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=o.a7(y)
if(m==null){m=n.a7(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ej(H.C(y),m))}}return z.$1(new H.jn(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eC()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.az(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eC()
return a},
bc:function(a){var z
if(a==null)return new H.fo(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fo(a)},
kS:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.V(0,a[y],a[x])}return b},
l2:function(a,b,c,d,e,f){H.e(a,"$isbI")
switch(H.a4(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.o("Unsupported number of arguments for wrapped closure"))},
ba:function(a,b){var z
H.a4(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.l2)
a.$identity=z
return z},
h4:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.N(d).$isb){z.$reflectionInfo=d
x=H.iy(z).r}else x=d
w=e?Object.create(new H.iT().constructor.prototype):Object.create(new H.cA(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aq
if(typeof u!=="number")return u.E()
$.aq=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dN(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kU,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dG:H.cB
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.h("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dN(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
h1:function(a,b,c,d){var z=H.cB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dN:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.h3(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.h1(y,!w,z,b)
if(y===0){w=$.aq
if(typeof w!=="number")return w.E()
$.aq=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bh
if(v==null){v=H.bT("self")
$.bh=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aq
if(typeof w!=="number")return w.E()
$.aq=w+1
t+=w
w="return function("+t+"){return this."
v=$.bh
if(v==null){v=H.bT("self")
$.bh=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
h2:function(a,b,c,d){var z,y
z=H.cB
y=H.dG
switch(b?-1:a){case 0:throw H.h(H.iG("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
h3:function(a,b){var z,y,x,w,v,u,t,s
z=$.bh
if(z==null){z=H.bT("self")
$.bh=z}y=$.dF
if(y==null){y=H.bT("receiver")
$.dF=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.h2(w,!u,x,b)
if(w===1){z="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
y=$.aq
if(typeof y!=="number")return y.E()
$.aq=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
y=$.aq
if(typeof y!=="number")return y.E()
$.aq=y+1
return new Function(z+y+"}")()},
dq:function(a,b,c,d,e,f,g){return H.h4(a,b,H.a4(c),d,!!e,!!f,g)},
C:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.ao(a,"String"))},
lV:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.ao(a,"double"))},
l9:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.ao(a,"num"))},
dn:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.ao(a,"bool"))},
a4:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.ao(a,"int"))},
fK:function(a,b){throw H.h(H.ao(a,H.be(H.C(b).substring(3))))},
lb:function(a,b){throw H.h(H.h0(a,H.be(H.C(b).substring(3))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.N(a)[b])return a
H.fK(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else z=!0
if(z)return a
H.lb(a,b)},
cs:function(a){if(a==null)return a
if(!!J.N(a).$isb)return a
throw H.h(H.ao(a,"List<dynamic>"))},
l4:function(a,b){var z
if(a==null)return a
z=J.N(a)
if(!!z.$isb)return a
if(z[b])return a
H.fK(a,b)},
fE:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a4(z)]
else return a.$S()}return},
bQ:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fE(J.N(a))
if(z==null)return!1
return H.fv(z,null,b,null)},
j:function(a,b){var z,y
if(a==null)return a
if($.dj)return a
$.dj=!0
try{if(H.bQ(a,b))return a
z=H.cu(b)
y=H.ao(a,z)
throw H.h(y)}finally{$.dj=!1}},
ds:function(a,b){if(a!=null&&!H.dp(a,b))H.p(H.ao(a,H.cu(b)))
return a},
fz:function(a){var z,y
z=J.N(a)
if(!!z.$ist){y=H.fE(z)
if(y!=null)return H.cu(y)
return"Closure"}return H.b2(a)},
lg:function(a){throw H.h(new P.h8(H.C(a)))},
fF:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aU:function(a){if(a==null)return
return a.$ti},
lW:function(a,b,c){return H.bd(a["$as"+H.f(c)],H.aU(b))},
cq:function(a,b,c,d){var z
H.C(c)
H.a4(d)
z=H.bd(a["$as"+H.f(c)],H.aU(b))
return z==null?null:z[d]},
a_:function(a,b,c){var z
H.C(b)
H.a4(c)
z=H.bd(a["$as"+H.f(b)],H.aU(a))
return z==null?null:z[c]},
v:function(a,b){var z
H.a4(b)
z=H.aU(a)
return z==null?null:z[b]},
cu:function(a){return H.aS(a,null)},
aS:function(a,b){var z,y
H.i(b,"$isb",[P.n],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.be(a[0].builtin$cls)+H.dm(a,1,b)
if(typeof a=="function")return H.be(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a4(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.f(b[y])}if('func' in a)return H.kB(a,b)
if('futureOr' in a)return"FutureOr<"+H.aS("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kB:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.n]
H.i(b,"$isb",z,"$asb")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.i.E(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aS(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aS(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aS(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aS(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kR(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.C(z[l])
n=n+m+H.aS(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dm:function(a,b,c){var z,y,x,w,v,u
H.i(c,"$isb",[P.n],"$asb")
if(a==null)return""
z=new P.bs("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aS(u,c)}return"<"+z.i(0)+">"},
bd:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bE:function(a,b,c,d){var z,y
H.C(b)
H.cs(c)
H.C(d)
if(a==null)return!1
z=H.aU(a)
y=J.N(a)
if(y[b]==null)return!1
return H.fC(H.bd(y[d],z),null,c,null)},
i:function(a,b,c,d){H.C(b)
H.cs(c)
H.C(d)
if(a==null)return a
if(H.bE(a,b,c,d))return a
throw H.h(H.ao(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.be(b.substring(3))+H.dm(c,0,null),init.mangledGlobalNames)))},
fC:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aj(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aj(a[y],b,c[y],d))return!1
return!0},
lT:function(a,b,c){return a.apply(b,H.bd(J.N(b)["$as"+H.f(c)],H.aU(b)))},
fH:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="H"||a===-1||a===-2||H.fH(z)}return!1},
dp:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="H"||b===-1||b===-2||H.fH(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dp(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bQ(a,b)}z=J.N(a).constructor
y=H.aU(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.aj(z,null,b,null)},
y:function(a,b){if(a!=null&&!H.dp(a,b))throw H.h(H.ao(a,H.cu(b)))
return a},
aj:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aj(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.fv(a,b,c,d)
if('func' in a)return c.builtin$cls==="bI"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aj("type" in a?a.type:null,b,x,d)
else if(H.aj(a,b,x,d))return!0
else{if(!('$is'+"bl" in y.prototype))return!1
w=y.prototype["$as"+"bl"]
v=H.bd(w,z?a.slice(1):null)
return H.aj(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fC(H.bd(r,z),b,u,d)},
fv:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aj(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aj(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aj(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aj(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.l8(m,b,l,d)},
l8:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aj(c[w],d,a[w],b))return!1}return!0},
lU:function(a,b,c){Object.defineProperty(a,H.C(b),{value:c,enumerable:false,writable:true,configurable:true})},
l5:function(a){var z,y,x,w,v,u
z=H.C($.fG.$1(a))
y=$.cn[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cr[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.C($.fB.$2(a,z))
if(z!=null){y=$.cn[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cr[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.ct(x)
$.cn[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cr[z]=x
return x}if(v==="-"){u=H.ct(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fJ(a,x)
if(v==="*")throw H.h(P.f1(z))
if(init.leafTags[z]===true){u=H.ct(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fJ(a,x)},
fJ:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dw(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
ct:function(a){return J.dw(a,!1,null,!!a.$isal)},
l7:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.ct(z)
else return J.dw(z,c,null,null)},
l0:function(){if(!0===$.dv)return
$.dv=!0
H.l1()},
l1:function(){var z,y,x,w,v,u,t,s
$.cn=Object.create(null)
$.cr=Object.create(null)
H.kX()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fL.$1(v)
if(u!=null){t=H.l7(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kX:function(){var z,y,x,w,v,u,t
z=C.S()
z=H.b9(C.P,H.b9(C.U,H.b9(C.A,H.b9(C.A,H.b9(C.T,H.b9(C.Q,H.b9(C.R(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fG=new H.kY(v)
$.fB=new H.kZ(u)
$.fL=new H.l_(t)},
b9:function(a,b){return a(b)||b},
fM:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dz:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ix:{"^":"a;a,b,c,d,e,f,r,0x",p:{
iy:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c3(z)
y=z[0]
x=z[1]
return new H.ix(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jb:{"^":"a;a,b,c,d,e,f",
a7:function(a){var z,y,x
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
p:{
ax:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jb(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ce:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eX:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ie:{"^":"W;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
ej:function(a,b){return new H.ie(a,b==null?null:b.method)}}},
hK:{"^":"W;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
p:{
cN:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hK(a,y,z?null:b.receiver)}}},
jn:{"^":"W;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lh:{"^":"t:16;a",
$1:function(a){if(!!J.N(a).$isW)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
$isaD:1},
t:{"^":"a;",
i:function(a){return"Closure '"+H.b2(this).trim()+"'"},
gem:function(){return this},
$isbI:1,
gem:function(){return this}},
eG:{"^":"t;"},
iT:{"^":"eG;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.be(z)+"'"}},
cA:{"^":"eG;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cA))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gX:function(a){var z,y
z=this.c
if(z==null)y=H.br(this.a)
else y=typeof z!=="object"?J.aW(z):H.br(z)
return(y^H.br(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.b2(z)+"'")},
p:{
cB:function(a){return a.a},
dG:function(a){return a.c},
bT:function(a){var z,y,x,w,v
z=new H.cA("self","target","receiver","name")
y=J.c3(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jc:{"^":"W;a",
i:function(a){return this.a},
p:{
ao:function(a,b){return new H.jc("TypeError: "+H.f(P.bY(a))+": type '"+H.fz(a)+"' is not a subtype of type '"+b+"'")}}},
h_:{"^":"W;a",
i:function(a){return this.a},
p:{
h0:function(a,b){return new H.h_("CastError: "+H.f(P.bY(a))+": type '"+H.fz(a)+"' is not a subtype of type '"+b+"'")}}},
iF:{"^":"W;a",
i:function(a){return"RuntimeError: "+H.f(this.a)},
p:{
iG:function(a){return new H.iF(a)}}},
b_:{"^":"ec;a,0b,0c,0d,0e,0f,r,$ti",
gn:function(a){return this.a},
gav:function(){return new H.e9(this,[H.v(this,0)])},
dD:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.d6(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.d6(y,a)}else return this.iY(a)},
iY:function(a){var z=this.d
if(z==null)return!1
return this.cz(this.bW(z,J.aW(a)&0x3ffffff),a)>=0},
l:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bi(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bi(w,b)
x=y==null?null:y.b
return x}else return this.iZ(b)},
iZ:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bW(z,J.aW(a)&0x3ffffff)
x=this.cz(y,a)
if(x<0)return
return y[x].b},
V:function(a,b,c){var z,y,x,w,v,u
H.y(b,H.v(this,0))
H.y(c,H.v(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c3()
this.b=z}this.cY(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c3()
this.c=y}this.cY(y,b,c)}else{x=this.d
if(x==null){x=this.c3()
this.d=x}w=J.aW(b)&0x3ffffff
v=this.bW(x,w)
if(v==null)this.c9(x,w,[this.bQ(b,c)])
else{u=this.cz(v,b)
if(u>=0)v[u].b=c
else v.push(this.bQ(b,c))}}},
a0:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.aM(this))
z=z.c}},
cY:function(a,b,c){var z
H.y(b,H.v(this,0))
H.y(c,H.v(this,1))
z=this.bi(a,b)
if(z==null)this.c9(a,b,this.bQ(b,c))
else z.b=c},
fb:function(){this.r=this.r+1&67108863},
bQ:function(a,b){var z,y
z=new H.hN(H.y(a,H.v(this,0)),H.y(b,H.v(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fb()
return z},
cz:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
i:function(a){return P.ed(this)},
bi:function(a,b){return a[b]},
bW:function(a,b){return a[b]},
c9:function(a,b,c){a[b]=c},
fq:function(a,b){delete a[b]},
d6:function(a,b){return this.bi(a,b)!=null},
c3:function(){var z=Object.create(null)
this.c9(z,"<non-identifier-key>",z)
this.fq(z,"<non-identifier-key>")
return z},
$ise8:1},
hN:{"^":"a;a,b,0c,0d"},
e9:{"^":"dY;a,$ti",
gn:function(a){return this.a.a},
gO:function(a){var z,y
z=this.a
y=new H.hO(z,z.r,this.$ti)
y.c=z.e
return y}},
hO:{"^":"a;a,b,0c,0d,$ti",
scZ:function(a){this.d=H.y(a,H.v(this,0))},
gF:function(){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.aM(z))
else{z=this.c
if(z==null){this.scZ(null)
return!1}else{this.scZ(z.a)
this.c=this.c.c
return!0}}},
$isaO:1},
kY:{"^":"t:16;a",
$1:function(a){return this.a(a)}},
kZ:{"^":"t:40;a",
$2:function(a,b){return this.a(a,b)}},
l_:{"^":"t:39;a",
$1:function(a){return this.a(H.C(a))}},
hI:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isel:1,
p:{
hJ:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.ht("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kR:function(a){return J.e3(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
la:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bA:function(a){return a},
bz:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bF(b,a))},
kA:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.kQ(a,b,c))
return b},
ia:{"^":"D;",$islF:1,"%":";ArrayBufferView;cS|fk|fl|i9|fm|fn|bp"},
cS:{"^":"ia;",
gn:function(a){return a.length},
$isal:1,
$asal:I.dr},
i9:{"^":"fl;",
l:function(a,b){H.bz(b,a,a.length)
return a[b]},
$asc_:function(){return[P.w]},
$asS:function(){return[P.w]},
$isl:1,
$asl:function(){return[P.w]},
$isb:1,
$asb:function(){return[P.w]},
"%":"Float32Array"},
bp:{"^":"fn;",
$asc_:function(){return[P.z]},
$asS:function(){return[P.z]},
$isl:1,
$asl:function(){return[P.z]},
$isb:1,
$asb:function(){return[P.z]}},
lt:{"^":"bp;",
l:function(a,b){H.bz(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lu:{"^":"bp;",
l:function(a,b){H.bz(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lv:{"^":"bp;",
l:function(a,b){H.bz(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lw:{"^":"bp;",
gn:function(a){return a.length},
l:function(a,b){H.bz(b,a,a.length)
return a[b]},
$islG:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
lx:{"^":"bp;",
gn:function(a){return a.length},
l:function(a,b){H.bz(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
fk:{"^":"cS+S;"},
fl:{"^":"fk+c_;"},
fm:{"^":"cS+S;"},
fn:{"^":"fm+c_;"}}],["","",,P,{"^":"",
jI:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kI()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.ba(new P.jK(z),1)).observe(y,{childList:true})
return new P.jJ(z,y,x)}else if(self.setImmediate!=null)return P.kJ()
return P.kK()},
lK:[function(a){self.scheduleImmediate(H.ba(new P.jL(H.j(a,{func:1,ret:-1})),0))},"$1","kI",4,0,8],
lL:[function(a){self.setImmediate(H.ba(new P.jM(H.j(a,{func:1,ret:-1})),0))},"$1","kJ",4,0,8],
lM:[function(a){P.d1(C.q,H.j(a,{func:1,ret:-1}))},"$1","kK",4,0,8],
d1:function(a,b){var z
H.j(b,{func:1,ret:-1})
z=C.h.a_(a.a,1000)
return P.ko(z<0?0:z,b)},
eO:function(a,b){var z
H.j(b,{func:1,ret:-1,args:[P.b3]})
z=C.h.a_(a.a,1000)
return P.kp(z<0?0:z,b)},
kE:function(a,b){if(H.bQ(a,{func:1,args:[P.a,P.aD]}))return H.j(a,{func:1,ret:null,args:[P.a,P.aD]})
if(H.bQ(a,{func:1,args:[P.a]}))return H.j(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.cy(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kD:function(){var z,y
for(;z=$.b8,z!=null;){$.bC=null
y=z.b
$.b8=y
if(y==null)$.bB=null
z.a.$0()}},
lS:[function(){$.dk=!0
try{P.kD()}finally{$.bC=null
$.dk=!1
if($.b8!=null)$.$get$dg().$1(P.fD())}},"$0","fD",0,0,3],
fy:function(a){var z=new P.fc(H.j(a,{func:1,ret:-1}))
if($.b8==null){$.bB=z
$.b8=z
if(!$.dk)$.$get$dg().$1(P.fD())}else{$.bB.b=z
$.bB=z}},
kH:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.b8
if(z==null){P.fy(a)
$.bC=$.bB
return}y=new P.fc(a)
x=$.bC
if(x==null){y.b=z
$.bC=y
$.b8=y}else{y.b=x.b
x.b=y
$.bC=y
if(y.b==null)$.bB=y}},
lc:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.M
if(C.l===y){P.cm(null,null,C.l,a)
return}y.toString
P.cm(null,null,y,H.j(y.cf(a),z))},
eN:function(a,b){var z,y
z={func:1,ret:-1}
H.j(b,z)
y=$.M
if(y===C.l){y.toString
return P.d1(a,b)}return P.d1(a,H.j(y.cf(b),z))},
j8:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b3]}
H.j(b,z)
y=$.M
if(y===C.l){y.toString
return P.eO(a,b)}x=y.dz(b,P.b3)
$.M.toString
return P.eO(a,H.j(x,z))},
cl:function(a,b,c,d,e){var z={}
z.a=d
P.kH(new P.kF(z,e))},
fw:function(a,b,c,d,e){var z,y
H.j(d,{func:1,ret:e})
y=$.M
if(y===c)return d.$0()
$.M=c
z=y
try{y=d.$0()
return y}finally{$.M=z}},
fx:function(a,b,c,d,e,f,g){var z,y
H.j(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.M
if(y===c)return d.$1(e)
$.M=c
z=y
try{y=d.$1(e)
return y}finally{$.M=z}},
kG:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.M
if(y===c)return d.$2(e,f)
$.M=c
z=y
try{y=d.$2(e,f)
return y}finally{$.M=z}},
cm:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.cf(d):c.ip(d,-1)
P.fy(d)},
jK:{"^":"t:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jJ:{"^":"t:36;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jL:{"^":"t:2;a",
$0:function(){this.a.$0()}},
jM:{"^":"t:2;a",
$0:function(){this.a.$0()}},
fq:{"^":"a;a,0b,c",
f9:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ba(new P.kr(this,b),0),a)
else throw H.h(P.ag("`setTimeout()` not found."))},
fa:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.ba(new P.kq(this,a,Date.now(),b),0),a)
else throw H.h(P.ag("Periodic timer."))},
$isb3:1,
p:{
ko:function(a,b){var z=new P.fq(!0,0)
z.f9(a,b)
return z},
kp:function(a,b){var z=new P.fq(!1,0)
z.fa(a,b)
return z}}},
kr:{"^":"t:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kq:{"^":"t:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.eO(w,x)}z.c=y
this.d.$1(z)}},
b7:{"^":"a;0a,b,c,d,e,$ti",
j4:function(a){if(this.c!==6)return!0
return this.b.b.cI(H.j(this.d,{func:1,ret:P.J,args:[P.a]}),a.a,P.J,P.a)},
iX:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.v(this,1)}
w=this.b.b
if(H.bQ(z,{func:1,args:[P.a,P.aD]}))return H.ds(w.js(z,a.a,a.b,null,y,P.aD),x)
else return H.ds(w.cI(H.j(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aK:{"^":"a;dm:a<,b,0ht:c<,$ti",
ef:function(a,b,c){var z,y,x,w
z=H.v(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.M
if(y!==C.l){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kE(b,y)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aK(0,$.M,[c])
w=b==null?1:3
this.d0(new P.b7(x,w,a,b,[z,c]))
return x},
jz:function(a,b){return this.ef(a,null,b)},
d0:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isb7")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaK")
z=y.a
if(z<4){y.d0(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cm(null,null,z,H.j(new P.jU(this,a),{func:1,ret:-1}))}},
dj:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isb7")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaK")
y=u.a
if(y<4){u.dj(a)
return}this.a=y
this.c=u.c}z.a=this.bk(a)
y=this.b
y.toString
P.cm(null,null,y,H.j(new P.jZ(z,this),{func:1,ret:-1}))}},
c7:function(){var z=H.e(this.c,"$isb7")
this.c=null
return this.bk(z)},
bk:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d2:function(a){var z,y,x
z=H.v(this,0)
H.ds(a,{futureOr:1,type:z})
y=this.$ti
if(H.bE(a,"$isbl",y,"$asbl"))if(H.bE(a,"$isaK",y,null))P.ff(a,this)
else P.jV(a,this)
else{x=this.c7()
H.y(a,z)
this.a=4
this.c=a
P.bx(this,x)}},
d3:function(a,b){var z
H.e(b,"$isaD")
z=this.c7()
this.a=8
this.c=new P.ab(a,b)
P.bx(this,z)},
$isbl:1,
p:{
jV:function(a,b){var z,y,x
b.a=1
try{a.ef(new P.jW(b),new P.jX(b),null)}catch(x){z=H.aa(x)
y=H.bc(x)
P.lc(new P.jY(b,z,y))}},
ff:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaK")
if(z>=4){y=b.c7()
b.a=a.a
b.c=a.c
P.bx(b,y)}else{y=H.e(b.c,"$isb7")
b.a=2
b.c=a
a.dj(y)}},
bx:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isab")
y=y.b
u=v.a
t=v.b
y.toString
P.cl(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bx(z.a,b)}y=z.a
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
if(p){H.e(r,"$isab")
y=y.b
u=r.a
t=r.b
y.toString
P.cl(null,null,y,u,t)
return}o=$.M
if(o==null?q!=null:o!==q)$.M=q
else o=null
y=b.c
if(y===8)new P.k1(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.k0(x,b,r).$0()}else if((y&2)!==0)new P.k_(z,x,b).$0()
if(o!=null)$.M=o
y=x.b
if(!!J.N(y).$isbl){if(y.a>=4){n=H.e(t.c,"$isb7")
t.c=null
b=t.bk(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ff(y,t)
return}}m=b.b
n=H.e(m.c,"$isb7")
m.c=null
b=m.bk(n)
y=x.a
u=x.b
if(!y){H.y(u,H.v(m,0))
m.a=4
m.c=u}else{H.e(u,"$isab")
m.a=8
m.c=u}z.a=m
y=m}}}},
jU:{"^":"t:2;a,b",
$0:function(){P.bx(this.a,this.b)}},
jZ:{"^":"t:2;a,b",
$0:function(){P.bx(this.b,this.a.a)}},
jW:{"^":"t:15;a",
$1:function(a){var z=this.a
z.a=0
z.d2(a)}},
jX:{"^":"t:34;a",
$2:function(a,b){this.a.d3(a,H.e(b,"$isaD"))},
$1:function(a){return this.$2(a,null)}},
jY:{"^":"t:2;a,b,c",
$0:function(){this.a.d3(this.b,this.c)}},
k1:{"^":"t:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ed(H.j(w.d,{func:1}),null)}catch(v){y=H.aa(v)
x=H.bc(v)
if(this.d){w=H.e(this.a.a.c,"$isab").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isab")
else u.b=new P.ab(y,x)
u.a=!0
return}if(!!J.N(z).$isbl){if(z instanceof P.aK&&z.gdm()>=4){if(z.gdm()===8){w=this.b
w.b=H.e(z.ght(),"$isab")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.jz(new P.k2(t),null)
w.a=!1}}},
k2:{"^":"t:35;a",
$1:function(a){return this.a}},
k0:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.v(x,0)
v=H.y(this.c,w)
u=H.v(x,1)
this.a.b=x.b.b.cI(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aa(t)
y=H.bc(t)
x=this.a
x.b=new P.ab(z,y)
x.a=!0}}},
k_:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isab")
w=this.c
if(w.j4(z)&&w.e!=null){v=this.b
v.b=w.iX(z)
v.a=!1}}catch(u){y=H.aa(u)
x=H.bc(u)
w=H.e(this.a.a.c,"$isab")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ab(y,x)
s.a=!0}}},
fc:{"^":"a;a,0b"},
iU:{"^":"a;$ti",
gn:function(a){var z,y,x,w
z={}
y=new P.aK(0,$.M,[P.z])
z.a=0
x=H.v(this,0)
w=H.j(new P.iW(z,this),{func:1,ret:-1,args:[x]})
H.j(new P.iX(z,y),{func:1,ret:-1})
W.V(this.a,this.b,w,!1,x)
return y}},
iW:{"^":"t;a,b",
$1:function(a){H.y(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.v(this.b,0)]}}},
iX:{"^":"t:2;a,b",
$0:function(){this.b.d2(this.a.a)}},
cY:{"^":"a;$ti"},
iV:{"^":"a;"},
b3:{"^":"a;"},
ab:{"^":"a;a,b",
i:function(a){return H.f(this.a)},
$isW:1},
kw:{"^":"a;",$islJ:1},
kF:{"^":"t:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ek()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.i(0)
throw x}},
kd:{"^":"kw;",
jt:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.l===$.M){a.$0()
return}P.fw(null,null,this,a,-1)}catch(x){z=H.aa(x)
y=H.bc(x)
P.cl(null,null,this,z,H.e(y,"$isaD"))}},
ju:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.l===$.M){a.$1(b)
return}P.fx(null,null,this,a,b,-1,c)}catch(x){z=H.aa(x)
y=H.bc(x)
P.cl(null,null,this,z,H.e(y,"$isaD"))}},
ip:function(a,b){return new P.kf(this,H.j(a,{func:1,ret:b}),b)},
cf:function(a){return new P.ke(this,H.j(a,{func:1,ret:-1}))},
dz:function(a,b){return new P.kg(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
ed:function(a,b){H.j(a,{func:1,ret:b})
if($.M===C.l)return a.$0()
return P.fw(null,null,this,a,b)},
cI:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.M===C.l)return a.$1(b)
return P.fx(null,null,this,a,b,c,d)},
js:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.M===C.l)return a.$2(b,c)
return P.kG(null,null,this,a,b,c,d,e,f)}},
kf:{"^":"t;a,b,c",
$0:function(){return this.a.ed(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ke:{"^":"t:3;a,b",
$0:function(){return this.a.jt(this.b)}},
kg:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.ju(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hQ:function(a,b,c){H.cs(a)
return H.i(H.kS(a,new H.b_(0,0,[b,c])),"$ise8",[b,c],"$ase8")},
hP:function(a,b){return new H.b_(0,0,[a,b])},
bL:function(a,b,c,d){return new P.k7(0,0,[d])},
hE:function(a,b,c){var z,y
if(P.dl(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bD()
C.a.h(y,a)
try{P.kC(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.eE(b,H.l4(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
cJ:function(a,b,c){var z,y,x
if(P.dl(a))return b+"..."+c
z=new P.bs(b)
y=$.$get$bD()
C.a.h(y,a)
try{x=z
x.a=P.eE(x.gaD(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gaD()+c
y=z.gaD()
return y.charCodeAt(0)==0?y:y},
dl:function(a){var z,y
for(z=0;y=$.$get$bD(),z<y.length;++z)if(a===y[z])return!0
return!1},
kC:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gO(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.A())return
w=H.f(z.gF())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.A()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gF();++x
if(!z.A()){if(x<=4){C.a.h(b,H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gF();++x
for(;z.A();t=s,s=r){r=z.gF();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.f(t)
v=H.f(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
ea:function(a,b){var z,y,x
z=P.bL(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x)z.h(0,H.y(a[x],b))
return z},
ed:function(a){var z,y,x
z={}
if(P.dl(a))return"{...}"
y=new P.bs("")
try{C.a.h($.$get$bD(),a)
x=y
x.a=x.gaD()+"{"
z.a=!0
a.a0(0,new P.hV(z,y))
z=y
z.a=z.gaD()+"}"}finally{z=$.$get$bD()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gaD()
return z.charCodeAt(0)==0?z:z},
k7:{"^":"k3;a,0b,0c,0d,0e,0f,r,$ti",
gO:function(a){var z=new P.fj(this,this.r,this.$ti)
z.c=this.e
return z},
gn:function(a){return this.a},
S:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscj")!=null}else{y=this.fm(b)
return y}},
fm:function(a){var z=this.d
if(z==null)return!1
return this.bU(this.dc(z,a),a)>=0},
h:function(a,b){var z,y
H.y(b,H.v(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.di()
this.b=z}return this.d_(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.di()
this.c=y}return this.d_(y,b)}else return this.fc(b)},
fc:function(a){var z,y,x
H.y(a,H.v(this,0))
z=this.d
if(z==null){z=P.di()
this.d=z}y=this.d4(a)
x=z[y]
if(x==null)z[y]=[this.c4(a)]
else{if(this.bU(x,a)>=0)return!1
x.push(this.c4(a))}return!0},
U:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.hn(this.c,b)
else return this.hk(b)},
hk:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.dc(z,a)
x=this.bU(y,a)
if(x<0)return!1
this.dq(y.splice(x,1)[0])
return!0},
d_:function(a,b){H.y(b,H.v(this,0))
if(H.e(a[b],"$iscj")!=null)return!1
a[b]=this.c4(b)
return!0},
hn:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscj")
if(z==null)return!1
this.dq(z)
delete a[b]
return!0},
de:function(){this.r=this.r+1&67108863},
c4:function(a){var z,y
z=new P.cj(H.y(a,H.v(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.de()
return z},
dq:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.de()},
d4:function(a){return J.aW(a)&0x3ffffff},
dc:function(a,b){return a[this.d4(b)]},
bU:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
p:{
di:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cj:{"^":"a;a,0b,0c"},
fj:{"^":"a;a,b,0c,0d,$ti",
sd1:function(a){this.d=H.y(a,H.v(this,0))},
gF:function(){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.aM(z))
else{z=this.c
if(z==null){this.sd1(null)
return!1}else{this.sd1(H.y(z.a,H.v(this,0)))
this.c=this.c.b
return!0}}},
$isaO:1,
p:{
k8:function(a,b,c){var z=new P.fj(a,b,[c])
z.c=a.e
return z}}},
k3:{"^":"iH;"},
c6:{"^":"k9;",$isl:1,$isb:1},
S:{"^":"a;$ti",
gO:function(a){return new H.cO(a,this.gn(a),0,[H.cq(this,a,"S",0)])},
a2:function(a,b){return this.l(a,b)},
jC:function(a,b){var z,y
z=H.c([],[H.cq(this,a,"S",0)])
C.a.sn(z,this.gn(a))
for(y=0;y<this.gn(a);++y)C.a.V(z,y,this.l(a,y))
return z},
jB:function(a){return this.jC(a,!0)},
i:function(a){return P.cJ(a,"[","]")}},
ec:{"^":"c8;"},
hV:{"^":"t:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.f(a)
z.a=y+": "
z.a+=H.f(b)}},
c8:{"^":"a;$ti",
a0:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.a_(this,"c8",0),H.a_(this,"c8",1)]})
for(z=J.bf(this.gav());z.A();){y=z.gF()
b.$2(y,this.l(0,y))}},
gn:function(a){return J.aX(this.gav())},
i:function(a){return P.ed(this)},
$isac:1},
iJ:{"^":"a;$ti",
am:function(a,b){var z
for(z=J.bf(H.i(b,"$isl",this.$ti,"$asl"));z.A();)this.h(0,z.gF())},
i:function(a){return P.cJ(this,"{","}")},
a2:function(a,b){var z,y,x
if(b<0)H.p(P.a8(b,0,null,"index",null))
for(z=P.k8(this,this.r,H.v(this,0)),y=0;z.A();){x=z.d
if(b===y)return x;++y}throw H.h(P.aY(b,this,"index",null,y))},
$isl:1,
$isey:1},
iH:{"^":"iJ;"},
k9:{"^":"a+S;"}}],["","",,P,{"^":"",cF:{"^":"a;$ti"},bW:{"^":"iV;$ti"},hl:{"^":"cF;",
$ascF:function(){return[P.n,[P.b,P.z]]}},hC:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},hB:{"^":"bW;a",
fn:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.k(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.bs("")
if(w>b)v.a+=C.i.bf(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.fU(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asbW:function(){return[P.n,P.n]}},ju:{"^":"hl;a"},jv:{"^":"bW;",
iA:function(a,b,c){var z,y,x,w
z=a.length
P.et(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.ku(0,0,x)
if(w.fB(a,b,z)!==z)w.dr(C.i.cl(a,z-1),0)
return new Uint8Array(x.subarray(0,H.kA(0,w.b,x.length)))},
iz:function(a){return this.iA(a,0,null)},
$asbW:function(){return[P.n,[P.b,P.z]]}},ku:{"^":"a;a,b,c",
dr:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.k(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.k(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.k(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.k(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.k(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.k(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.k(z,y)
z[y]=128|a&63
return!1}},
fB:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.cl(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.aC(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dr(w,C.i.aC(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.k(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.k(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.k(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.k(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
hn:function(a){if(a instanceof H.t)return a.i(0)
return"Instance of '"+H.b2(a)+"'"},
hR:function(a,b,c,d){var z,y
H.y(b,d)
z=J.hG(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.V(z,y,b)
return H.i(z,"$isb",[d],"$asb")},
hS:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gO(a);x.A();)C.a.h(y,H.y(x.gF(),c))
if(b)return y
return H.i(J.c3(y),"$isb",z,"$asb")},
cZ:function(a,b,c){var z,y
z=P.z
H.i(a,"$isl",[z],"$asl")
if(a.constructor===Array){H.i(a,"$isaZ",[z],"$asaZ")
y=a.length
c=P.et(b,c,y,null,null,null)
return H.es(b>0||c<y?C.a.eI(a,b,c):a)}return P.iY(a,b,c)},
iY:function(a,b,c){var z,y,x
H.i(a,"$isl",[P.z],"$asl")
z=J.bf(a)
for(y=0;y<b;++y)if(!z.A())throw H.h(P.a8(b,0,y,null,null))
x=[]
for(;z.A();)x.push(z.gF())
return H.es(x)},
iz:function(a,b,c){return new H.hI(a,H.hJ(a,!1,!0,!1))},
ft:function(a,b,c,d){var z,y,x,w,v,u
H.i(a,"$isb",[P.z],"$asb")
if(c===C.x){z=$.$get$fs().b
z=z.test(b)}else z=!1
if(z)return b
y=C.I.iz(H.y(b,H.a_(c,"cF",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.k(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cT(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bY:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a6(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hn(a)},
o:function(a){return new P.fe(a)},
dy:function(a){H.la(a)},
J:{"^":"a;"},
"+bool":0,
ak:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ak))return!1
return this.a===b.a&&!0},
gX:function(a){var z=this.a
return(z^C.h.bl(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.ha(H.is(this))
y=P.bG(H.iq(this))
x=P.bG(H.il(this))
w=P.bG(H.im(this))
v=P.bG(H.ip(this))
u=P.bG(H.ir(this))
t=P.hb(H.io(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
p:{
ha:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hb:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bG:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"a9;"},
"+double":0,
bi:{"^":"a;a",
ai:function(a,b){return C.h.ai(this.a,H.e(b,"$isbi").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bi))return!1
return this.a===b.a},
gX:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hh()
y=this.a
if(y<0)return"-"+new P.bi(0-y).i(0)
x=z.$1(C.h.a_(y,6e7)%60)
w=z.$1(C.h.a_(y,1e6)%60)
v=new P.hg().$1(y%1e6)
return""+C.h.a_(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
p:{
dX:function(a,b,c,d,e,f){return new P.bi(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hg:{"^":"t:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hh:{"^":"t:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
W:{"^":"a;"},
ek:{"^":"W;",
i:function(a){return"Throw of null."}},
az:{"^":"W;a,b,c,d",
gbT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbS:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.f(z)
w=this.gbT()+y+x
if(!this.a)return w
v=this.gbS()
u=P.bY(this.b)
return w+v+": "+H.f(u)},
p:{
fX:function(a){return new P.az(!1,null,null,a)},
cy:function(a,b,c){return new P.az(!0,a,b,c)}}},
ca:{"^":"az;e,f,a,b,c,d",
gbT:function(){return"RangeError"},
gbS:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
p:{
cb:function(a,b,c){return new P.ca(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.ca(b,c,!0,a,d,"Invalid value")},
et:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.a8(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.h(P.a8(b,a,c,"end",f))
return b}return c}}},
hD:{"^":"az;e,n:f>,a,b,c,d",
gbT:function(){return"RangeError"},
gbS:function(){if(J.fO(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.f(z)},
p:{
aY:function(a,b,c,d,e){var z=H.a4(e!=null?e:J.aX(b))
return new P.hD(b,z,!0,a,c,"Index out of range")}}},
jp:{"^":"W;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
ag:function(a){return new P.jp(a)}}},
jm:{"^":"W;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
f1:function(a){return new P.jm(a)}}},
cX:{"^":"W;a",
i:function(a){return"Bad state: "+this.a},
p:{
eD:function(a){return new P.cX(a)}}},
h6:{"^":"W;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.bY(z))+"."},
p:{
aM:function(a){return new P.h6(a)}}},
ig:{"^":"a;",
i:function(a){return"Out of Memory"},
$isW:1},
eC:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isW:1},
h8:{"^":"W;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fe:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
ht:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bf(x,0,75)+"..."
return y+"\n"+x}},
bI:{"^":"a;"},
z:{"^":"a9;"},
"+int":0,
l:{"^":"a;$ti",
cK:["eK",function(a,b){var z=H.a_(this,"l",0)
return new H.df(this,H.j(b,{func:1,ret:P.J,args:[z]}),[z])}],
gn:function(a){var z,y
z=this.gO(this)
for(y=0;z.A();)++y
return y},
gay:function(a){var z,y
z=this.gO(this)
if(!z.A())throw H.h(H.cK())
y=z.gF()
if(z.A())throw H.h(H.hF())
return y},
a2:function(a,b){var z,y,x
if(b<0)H.p(P.a8(b,0,null,"index",null))
for(z=this.gO(this),y=0;z.A();){x=z.gF()
if(b===y)return x;++y}throw H.h(P.aY(b,this,"index",null,y))},
i:function(a){return P.hE(this,"(",")")}},
aO:{"^":"a;$ti"},
b:{"^":"a;$ti",$isl:1},
"+List":0,
H:{"^":"a;",
gX:function(a){return P.a.prototype.gX.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a9:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gX:function(a){return H.br(this)},
i:function(a){return"Instance of '"+H.b2(this)+"'"},
toString:function(){return this.i(this)}},
aD:{"^":"a;"},
n:{"^":"a;",$isel:1},
"+String":0,
bs:{"^":"a;aD:a<",
gn:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
eE:function(a,b,c){var z=J.bf(b)
if(!z.A())return a
if(c.length===0){do a+=H.f(z.gF())
while(z.A())}else{a+=H.f(z.gF())
for(;z.A();)a=a+c+H.f(z.gF())}return a}}}}],["","",,W,{"^":"",
dC:function(a){var z=document.createElement("a")
return z},
cD:function(a,b){var z=document.createElement("canvas")
return z},
hi:function(a,b,c){var z,y
z=document.body
y=(z&&C.n).ae(z,a,b,c)
y.toString
z=W.A
z=new H.df(new W.ai(y),H.j(new W.hj(),{func:1,ret:P.J,args:[z]}),[z])
return H.e(z.gay(z),"$isO")},
hk:function(a){H.e(a,"$isbZ")
return"wheel"},
bj:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fT(a)
if(typeof y==="string")z=a.tagName}catch(x){H.aa(x)}return z},
ch:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fi:function(a,b,c,d){var z,y
z=W.ch(W.ch(W.ch(W.ch(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fA:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.M
if(z===C.l)return a
return z.dz(a,b)},
Z:{"^":"O;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
fW:{"^":"Z;",
i:function(a){return String(a)},
$isfW:1,
"%":"HTMLAnchorElement"},
lj:{"^":"Z;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
dE:{"^":"Z;",$isdE:1,"%":"HTMLBaseElement"},
bS:{"^":"Z;",$isbS:1,"%":"HTMLBodyElement"},
cC:{"^":"Z;",
bK:function(a,b,c){if(c!=null)return this.fC(a,b,P.kM(c,null))
return this.fD(a,b)},
es:function(a,b){return this.bK(a,b,null)},
fC:function(a,b,c){return a.getContext(b,c)},
fD:function(a,b){return a.getContext(b)},
$iscC:1,
$isdL:1,
"%":"HTMLCanvasElement"},
cE:{"^":"D;",
fE:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
iP:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$iscE:1,
"%":"CanvasRenderingContext2D"},
lm:{"^":"A;0n:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lo:{"^":"jP;0n:length=",
ew:function(a,b){var z=this.fF(a,this.fi(a,b))
return z==null?"":z},
fi:function(a,b){var z,y
z=$.$get$dQ()
y=z[b]
if(typeof y==="string")return y
y=this.hI(a,b)
z[b]=y
return y},
hI:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hc()+b
if(z in a)return z
return b},
fF:function(a,b){return a.getPropertyValue(b)},
gcg:function(a){return a.bottom},
gb2:function(a){return a.height},
gaQ:function(a){return a.left},
gb7:function(a){return a.right},
gb9:function(a){return a.top},
gbb:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
h7:{"^":"a;",
gaQ:function(a){return this.ew(a,"left")}},
aN:{"^":"Z;",$isaN:1,"%":"HTMLDivElement"},
hd:{"^":"A;",
ik:function(a,b){return a.adoptNode(b)},
eu:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
lp:{"^":"D;",
i:function(a){return String(a)},
"%":"DOMException"},
he:{"^":"D;",
iE:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
hf:{"^":"D;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bE(b,"$isaC",[P.a9],"$asaC"))return!1
z=J.a3(b)
return a.left===z.gaQ(b)&&a.top===z.gb9(b)&&a.width===z.gbb(b)&&a.height===z.gb2(b)},
gX:function(a){return W.fi(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcg:function(a){return a.bottom},
gb2:function(a){return a.height},
gaQ:function(a){return a.left},
gb7:function(a){return a.right},
gb9:function(a){return a.top},
gbb:function(a){return a.width},
$isaC:1,
$asaC:function(){return[P.a9]},
"%":";DOMRectReadOnly"},
jO:{"^":"c6;da:a<,b",
gn:function(a){return this.b.length},
l:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.k(z,b)
return H.e(z[b],"$isO")},
h:function(a,b){J.dA(this.a,b)
return b},
gO:function(a){var z=this.jB(this)
return new J.ap(z,z.length,0,[H.v(z,0)])},
$asS:function(){return[W.O]},
$asl:function(){return[W.O]},
$asb:function(){return[W.O]}},
O:{"^":"A;0jv:tagName=",
gio:function(a){return new W.jQ(a)},
gdB:function(a){return new W.jO(a,a.children)},
gdC:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.ai()
if(x<0)x=-x*0
if(typeof w!=="number")return w.ai()
if(w<0)w=-w*0
return new P.aC(z,y,x,w,[P.a9])},
i:function(a){return a.localName},
ae:["bN",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.e_
if(z==null){z=H.c([],[W.aw])
y=new W.ei(z)
C.a.h(z,W.fg(null))
C.a.h(z,W.fp())
$.e_=y
d=y}else d=z
z=$.dZ
if(z==null){z=new W.fu(d)
$.dZ=z
c=z}else{z.a=d
c=z}}if($.aA==null){z=document
y=z.implementation
y=(y&&C.J).iE(y,"")
$.aA=y
$.cI=y.createRange()
y=$.aA
y.toString
y=y.createElement("base")
H.e(y,"$isdE")
y.href=z.baseURI
z=$.aA.head;(z&&C.L).B(z,y)}z=$.aA
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$isbS")}z=$.aA
if(!!this.$isbS)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aA.body;(z&&C.n).B(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.S(C.X,a.tagName)){z=$.cI;(z&&C.E).eC(z,x)
z=$.cI
w=(z&&C.E).iC(z,b)}else{x.innerHTML=b
w=$.aA.createDocumentFragment()
for(z=J.a3(w);y=x.firstChild,y!=null;)z.B(w,y)}z=$.aA.body
if(x==null?z!=null:x!==z)J.dB(x)
c.cQ(w)
C.z.ik(document,w)
return w},function(a,b,c){return this.ae(a,b,c,null)},"iD",null,null,"gkk",5,5,null],
eE:function(a,b,c,d){a.textContent=null
this.B(a,this.ae(a,b,c,d))},
eD:function(a,b){return this.eE(a,b,null,null)},
aU:function(a,b){return a.getAttribute(b)},
hl:function(a,b){return a.removeAttribute(b)},
$isO:1,
"%":";Element"},
hj:{"^":"t:14;",
$1:function(a){return!!J.N(H.e(a,"$isA")).$isO}},
a0:{"^":"D;",$isa0:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
bZ:{"^":"D;",
fd:function(a,b,c,d){return a.addEventListener(b,H.ba(H.j(c,{func:1,args:[W.a0]}),1),!1)},
$isbZ:1,
"%":";EventTarget"},
lq:{"^":"Z;0n:length=","%":"HTMLFormElement"},
hy:{"^":"Z;","%":"HTMLHeadElement"},
hz:{"^":"k5;",
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.aY(b,a,null,null,null))
return a[b]},
a2:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isal:1,
$asal:function(){return[W.A]},
$asS:function(){return[W.A]},
$isl:1,
$asl:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]},
$ishz:1,
$asas:function(){return[W.A]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hA:{"^":"hd;","%":"HTMLDocument"},
c0:{"^":"D;0dE:data=",$isc0:1,"%":"ImageData"},
e2:{"^":"Z;",$ise2:1,$isdL:1,"%":"HTMLImageElement"},
bm:{"^":"d4;",$isbm:1,"%":"KeyboardEvent"},
hT:{"^":"D;",
i:function(a){return String(a)},
$ishT:1,
"%":"Location"},
i7:{"^":"Z;","%":"HTMLAudioElement;HTMLMediaElement"},
am:{"^":"d4;",$isam:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ai:{"^":"c6;a",
gay:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.h(P.eD("No elements"))
if(y>1)throw H.h(P.eD("More than one element"))
return z.firstChild},
am:function(a,b){var z,y,x,w,v
H.i(b,"$isl",[W.A],"$asl")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.a3(y),v=0;v<x;++v)w.B(y,z.firstChild)
return},
gO:function(a){var z=this.a.childNodes
return new W.e0(z,z.length,-1,[H.cq(C.Z,z,"as",0)])},
gn:function(a){return this.a.childNodes.length},
l:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.k(z,b)
return z[b]},
$asS:function(){return[W.A]},
$asl:function(){return[W.A]},
$asb:function(){return[W.A]}},
A:{"^":"bZ;0jk:previousSibling=",
jm:function(a){var z=a.parentNode
if(z!=null)J.bR(z,a)},
i:function(a){var z=a.nodeValue
return z==null?this.eJ(a):z},
B:function(a,b){return a.appendChild(b)},
hm:function(a,b){return a.removeChild(b)},
$isA:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
ib:{"^":"kb;",
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.aY(b,a,null,null,null))
return a[b]},
a2:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isal:1,
$asal:function(){return[W.A]},
$asS:function(){return[W.A]},
$isl:1,
$asl:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]},
$asas:function(){return[W.A]},
"%":"NodeList|RadioNodeList"},
iv:{"^":"D;",
iC:function(a,b){return a.createContextualFragment(b)},
eC:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lA:{"^":"Z;0n:length=","%":"HTMLSelectElement"},
iZ:{"^":"Z;","%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
j_:{"^":"Z;",
ae:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bN(a,b,c,d)
z=W.hi("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ai(y).am(0,new W.ai(z))
return y},
"%":"HTMLTableElement"},
j0:{"^":"Z;",
ae:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bN(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.p.ae(z.createElement("table"),b,c,d)
z.toString
z=new W.ai(z)
x=z.gay(z)
x.toString
z=new W.ai(x)
w=z.gay(z)
y.toString
w.toString
new W.ai(y).am(0,new W.ai(w))
return y},
"%":"HTMLTableRowElement"},
lC:{"^":"Z;",
ae:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bN(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.p.ae(z.createElement("table"),b,c,d)
z.toString
z=new W.ai(z)
x=z.gay(z)
y.toString
x.toString
new W.ai(y).am(0,new W.ai(x))
return y},
"%":"HTMLTableSectionElement"},
eH:{"^":"Z;",$iseH:1,"%":"HTMLTemplateElement"},
bt:{"^":"D;",$isbt:1,"%":"Touch"},
b4:{"^":"d4;",$isb4:1,"%":"TouchEvent"},
lE:{"^":"kt;",
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.aY(b,a,null,null,null))
return a[b]},
a2:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isal:1,
$asal:function(){return[W.bt]},
$asS:function(){return[W.bt]},
$isl:1,
$asl:function(){return[W.bt]},
$isb:1,
$asb:function(){return[W.bt]},
$asas:function(){return[W.bt]},
"%":"TouchList"},
d4:{"^":"a0;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lI:{"^":"i7;",$isdL:1,"%":"HTMLVideoElement"},
bw:{"^":"am;",
giK:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ag("deltaY is not supported"))},
giJ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ag("deltaX is not supported"))},
$isbw:1,
"%":"WheelEvent"},
jH:{"^":"bZ;",
hp:function(a,b){return a.requestAnimationFrame(H.ba(H.j(b,{func:1,ret:-1,args:[P.a9]}),1))},
ft:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fd:{"^":"A;",$isfd:1,"%":"Attr"},
lN:{"^":"hf;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bE(b,"$isaC",[P.a9],"$asaC"))return!1
z=J.a3(b)
return a.left===z.gaQ(b)&&a.top===z.gb9(b)&&a.width===z.gbb(b)&&a.height===z.gb2(b)},
gX:function(a){return W.fi(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gb2:function(a){return a.height},
gbb:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lR:{"^":"ky;",
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.aY(b,a,null,null,null))
return a[b]},
a2:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isal:1,
$asal:function(){return[W.A]},
$asS:function(){return[W.A]},
$isl:1,
$asl:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]},
$asas:function(){return[W.A]},
"%":"MozNamedAttrMap|NamedNodeMap"},
jN:{"^":"ec;da:a<",
a0:function(a,b){var z,y,x,w,v,u
H.j(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=this.gav(),y=z.length,x=this.a,w=J.a3(x),v=0;v<z.length;z.length===y||(0,H.x)(z),++v){u=z[v]
b.$2(u,w.aU(x,u))}},
gav:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.n])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.k(z,w)
v=H.e(z[w],"$isfd")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asc8:function(){return[P.n,P.n]},
$asac:function(){return[P.n,P.n]}},
jQ:{"^":"jN;a",
l:function(a,b){return J.cx(this.a,H.C(b))},
gn:function(a){return this.gav().length}},
jR:{"^":"iU;a,b,c,$ti"},
lO:{"^":"jR;a,b,c,$ti"},
jS:{"^":"cY;a,b,c,d,e,$ti",p:{
V:function(a,b,c,d,e){var z,y
z=W.fA(new W.jT(c),W.a0)
y=z!=null
if(y&&!0){H.j(z,{func:1,args:[W.a0]})
if(y)J.fQ(a,b,z,!1)}return new W.jS(0,a,b,z,!1,[e])}}},
jT:{"^":"t:32;a",
$1:function(a){return this.a.$1(H.e(a,"$isa0"))}},
bP:{"^":"a;a",
eY:function(a){var z,y
z=$.$get$dh()
if(z.a===0){for(y=0;y<262;++y)z.V(0,C.W[y],W.kV())
for(y=0;y<12;++y)z.V(0,C.u[y],W.kW())}},
aI:function(a){return $.$get$fh().S(0,W.bj(a))},
au:function(a,b,c){var z,y,x
z=W.bj(a)
y=$.$get$dh()
x=y.l(0,H.f(z)+"::"+b)
if(x==null)x=y.l(0,"*::"+b)
if(x==null)return!1
return H.dn(x.$4(a,b,c,this))},
$isaw:1,
p:{
fg:function(a){var z,y
z=W.dC(null)
y=window.location
z=new W.bP(new W.kh(z,y))
z.eY(a)
return z},
lP:[function(a,b,c,d){H.e(a,"$isO")
H.C(b)
H.C(c)
H.e(d,"$isbP")
return!0},"$4","kV",16,0,24],
lQ:[function(a,b,c,d){var z,y,x
H.e(a,"$isO")
H.C(b)
H.C(c)
z=H.e(d,"$isbP").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kW",16,0,24]}},
as:{"^":"a;$ti",
gO:function(a){return new W.e0(a,this.gn(a),-1,[H.cq(this,a,"as",0)])}},
ei:{"^":"a;a",
aI:function(a){return C.a.dv(this.a,new W.id(a))},
au:function(a,b,c){return C.a.dv(this.a,new W.ic(a,b,c))},
$isaw:1},
id:{"^":"t:25;a",
$1:function(a){return H.e(a,"$isaw").aI(this.a)}},
ic:{"^":"t:25;a,b,c",
$1:function(a){return H.e(a,"$isaw").au(this.a,this.b,this.c)}},
ki:{"^":"a;",
f7:function(a,b,c,d){var z,y,x
this.a.am(0,c)
z=b.cK(0,new W.kj())
y=b.cK(0,new W.kk())
this.b.am(0,z)
x=this.c
x.am(0,C.Y)
x.am(0,y)},
aI:function(a){return this.a.S(0,W.bj(a))},
au:["eN",function(a,b,c){var z,y
z=W.bj(a)
y=this.c
if(y.S(0,H.f(z)+"::"+b))return this.d.il(c)
else if(y.S(0,"*::"+b))return this.d.il(c)
else{y=this.b
if(y.S(0,H.f(z)+"::"+b))return!0
else if(y.S(0,"*::"+b))return!0
else if(y.S(0,H.f(z)+"::*"))return!0
else if(y.S(0,"*::*"))return!0}return!1}],
$isaw:1},
kj:{"^":"t:17;",
$1:function(a){return!C.a.S(C.u,H.C(a))}},
kk:{"^":"t:17;",
$1:function(a){return C.a.S(C.u,H.C(a))}},
km:{"^":"ki;e,a,b,c,d",
au:function(a,b,c){if(this.eN(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cx(a,"template")==="")return this.e.S(0,b)
return!1},
p:{
fp:function(){var z,y,x,w,v
z=P.n
y=P.ea(C.t,z)
x=H.v(C.t,0)
w=H.j(new W.kn(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.km(y,P.bL(null,null,null,z),P.bL(null,null,null,z),P.bL(null,null,null,z),null)
y.f7(null,new H.hY(C.t,w,[x,z]),v,null)
return y}}},
kn:{"^":"t:31;",
$1:function(a){return"TEMPLATE::"+H.f(H.C(a))}},
kl:{"^":"a;",
aI:function(a){var z=J.N(a)
if(!!z.$isex)return!1
z=!!z.$isd_
if(z&&W.bj(a)==="foreignObject")return!1
if(z)return!0
return!1},
au:function(a,b,c){if(b==="is"||C.i.bM(b,"on"))return!1
return this.aI(a)},
$isaw:1},
e0:{"^":"a;a,b,c,0d,$ti",
sdd:function(a){this.d=H.y(a,H.v(this,0))},
A:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdd(J.fP(this.a,z))
this.c=z
return!0}this.sdd(null)
this.c=y
return!1},
gF:function(){return this.d},
$isaO:1},
aw:{"^":"a;"},
kh:{"^":"a;a,b",$islH:1},
fu:{"^":"a;a",
cQ:function(a){new W.kv(this).$2(a,null)},
b_:function(a,b){if(b==null)J.dB(a)
else J.bR(b,a)},
hv:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fR(a)
x=J.cx(y.gda(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.aa(t)}v="element unprintable"
try{v=J.a6(a)}catch(t){H.aa(t)}try{u=W.bj(a)
this.hu(H.e(a,"$isO"),b,z,v,u,H.e(y,"$isac"),H.C(x))}catch(t){if(H.aa(t) instanceof P.az)throw t
else{this.b_(a,b)
window
s="Removing corrupted element "+H.f(v)
if(typeof console!="undefined")window.console.warn(s)}}},
hu:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.b_(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aI(a)){this.b_(a,b)
window
z="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.au(a,"is",g)){this.b_(a,b)
window
z="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gav()
y=H.c(z.slice(0),[H.v(z,0)])
for(x=f.gav().length-1,z=f.a,w=J.a3(z);x>=0;--x){if(x>=y.length)return H.k(y,x)
v=y[x]
if(!this.a.au(a,J.fV(v),w.aU(z,v))){window
u="Removing disallowed attribute <"+H.f(e)+" "+v+'="'+H.f(w.aU(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.aU(z,v)
w.hl(z,v)}}if(!!J.N(a).$iseH)this.cQ(a.content)},
$isly:1},
kv:{"^":"t:30;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.hv(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b_(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fS(z)}catch(w){H.aa(w)
v=H.e(z,"$isA")
if(x){u=v.parentNode
if(u!=null)J.bR(u,v)}else J.bR(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isA")}}},
jP:{"^":"D+h7;"},
k4:{"^":"D+S;"},
k5:{"^":"k4+as;"},
ka:{"^":"D+S;"},
kb:{"^":"ka+as;"},
ks:{"^":"D+S;"},
kt:{"^":"ks+as;"},
kx:{"^":"D+S;"},
ky:{"^":"kx+as;"}}],["","",,P,{"^":"",
kP:function(a){var z,y
z=J.N(a)
if(!!z.$isc0){y=z.gdE(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fr(a.data,a.height,a.width)},
kO:function(a){if(a instanceof P.fr)return{data:a.a,height:a.b,width:a.c}
return a},
kM:function(a,b){var z={}
a.a0(0,new P.kN(z))
return z},
dW:function(){var z=$.dV
if(z==null){z=J.cv(window.navigator.userAgent,"Opera",0)
$.dV=z}return z},
hc:function(){var z,y
z=$.dS
if(z!=null)return z
y=$.dT
if(y==null){y=J.cv(window.navigator.userAgent,"Firefox",0)
$.dT=y}if(y)z="-moz-"
else{y=$.dU
if(y==null){y=!P.dW()&&J.cv(window.navigator.userAgent,"Trident/",0)
$.dU=y}if(y)z="-ms-"
else z=P.dW()?"-o-":"-webkit-"}$.dS=z
return z},
fr:{"^":"a;dE:a>,b,c",$isc0:1},
kN:{"^":"t:12;a",
$2:function(a,b){this.a[a]=b}},
hq:{"^":"c6;a,b",
gbX:function(){var z,y,x
z=this.b
y=H.a_(z,"S",0)
x=W.O
return new H.hW(new H.df(z,H.j(new P.hr(),{func:1,ret:P.J,args:[y]}),[y]),H.j(new P.hs(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){J.dA(this.b.a,b)},
gn:function(a){return J.aX(this.gbX().a)},
l:function(a,b){var z=this.gbX()
return z.b.$1(J.cw(z.a,b))},
gO:function(a){var z=P.hS(this.gbX(),!1,W.O)
return new J.ap(z,z.length,0,[H.v(z,0)])},
$asS:function(){return[W.O]},
$asl:function(){return[W.O]},
$asb:function(){return[W.O]}},
hr:{"^":"t:14;",
$1:function(a){return!!J.N(H.e(a,"$isA")).$isO}},
hs:{"^":"t:29;",
$1:function(a){return H.d(H.e(a,"$isA"),"$isO")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
ci:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k6:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kc:{"^":"a;$ti",
gb7:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.y(z+this.c,H.v(this,0))},
gcg:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.y(z+this.d,H.v(this,0))},
i:function(a){return"Rectangle ("+H.f(this.a)+", "+H.f(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bE(b,"$isaC",[P.a9],"$asaC"))return!1
z=this.a
y=J.a3(b)
x=y.gaQ(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb9(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.v(this,0)
if(H.y(z+this.c,w)===y.gb7(b)){if(typeof x!=="number")return x.E()
z=H.y(x+this.d,w)===y.gcg(b)}else z=!1}else z=!1}else z=!1
return z},
gX:function(a){var z,y,x,w,v
z=this.a
y=J.aW(z)
x=this.b
w=J.aW(x)
if(typeof z!=="number")return z.E()
v=H.v(this,0)
z=H.y(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.y(x+this.d,v)
return P.k6(P.ci(P.ci(P.ci(P.ci(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aC:{"^":"kc;aQ:a>,b9:b>,bb:c>,b2:d>,$ti"}}],["","",,P,{"^":"",ex:{"^":"d_;",$isex:1,"%":"SVGScriptElement"},d_:{"^":"O;",
gdB:function(a){return new P.hq(a,new W.ai(a))},
ae:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aw])
C.a.h(z,W.fg(null))
C.a.h(z,W.fp())
C.a.h(z,new W.kl())
c=new W.fu(new W.ei(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.n).iD(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ai(w)
u=z.gay(z)
for(z=J.a3(v);x=u.firstChild,x!=null;)z.B(v,x)
return v},
$isd_:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",fZ:{"^":"D;",$isfZ:1,"%":"WebGLBuffer"},hu:{"^":"D;",$ishu:1,"%":"WebGLFramebuffer"},iu:{"^":"D;",$isiu:1,"%":"WebGLProgram"},cU:{"^":"D;",
ds:function(a,b){return a.activeTexture(b)},
dw:function(a,b,c){return a.attachShader(b,c)},
an:function(a,b,c){return a.bindBuffer(b,c)},
iq:function(a,b,c){return a.bindFramebuffer(b,c)},
aJ:function(a,b,c){return a.bindTexture(b,c)},
ir:function(a,b,c){return a.blendFunc(b,c)},
dA:function(a,b,c,d){return a.bufferData(b,c,d)},
iu:function(a,b){return a.clear(b)},
iv:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
iw:function(a,b){return a.clearDepth(b)},
ix:function(a,b){return a.compileShader(b)},
iF:function(a,b){return a.createShader(b)},
iH:function(a,b){return a.deleteProgram(b)},
iI:function(a,b){return a.deleteShader(b)},
iL:function(a,b){return a.depthFunc(b)},
iM:function(a,b){return a.disable(b)},
dF:function(a,b){return a.disableVertexAttribArray(b)},
iO:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cp:function(a,b){return a.enable(b)},
dH:function(a,b){return a.enableVertexAttribArray(b)},
en:function(a,b){return a.generateMipmap(b)},
eo:function(a,b,c){return a.getActiveAttrib(b,c)},
ep:function(a,b,c){return a.getActiveUniform(b,c)},
eq:function(a,b,c){return a.getAttribLocation(b,c)},
cP:function(a,b){return a.getParameter(b)},
ev:function(a,b){return a.getProgramInfoLog(b)},
bL:function(a,b,c){return a.getProgramParameter(b,c)},
ex:function(a,b){return a.getShaderInfoLog(b)},
ey:function(a,b,c){return a.getShaderParameter(b,c)},
ez:function(a,b,c){return a.getUniformLocation(b,c)},
j1:function(a,b){return a.linkProgram(b)},
jj:function(a,b,c){return a.pixelStorei(b,c)},
eG:function(a,b,c){return a.shaderSource(b,c)},
jx:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.N(g)
if(!!z.$isc0)y=!0
else y=!1
if(y){this.hK(a,b,c,d,e,f,P.kO(g))
return}if(!!z.$ise2)z=!0
else z=!1
if(z){this.hL(a,b,c,d,e,f,g)
return}throw H.h(P.fX("Incorrect number or type of arguments"))},
jw:function(a,b,c,d,e,f,g){return this.jx(a,b,c,d,e,f,g,null,null,null)},
hK:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
hL:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bH:function(a,b,c,d){return a.texParameteri(b,c,d)},
L:function(a,b,c){return a.uniform1f(b,c)},
M:function(a,b,c){return a.uniform1i(b,c)},
q:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ei:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ej:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ek:function(a,b){return a.useProgram(b)},
jF:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jG:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscU:1,
"%":"WebGLRenderingContext"},iK:{"^":"D;",$isiK:1,"%":"WebGLShader"},j1:{"^":"D;",$isj1:1,"%":"WebGLTexture"},jk:{"^":"D;",$isjk:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",U:{"^":"a;0a,0b,0c,0d,$ti",
sfK:function(a){this.a=H.i(a,"$isb",[H.a_(this,"U",0)],"$asb")},
sdh:function(a){this.b=H.j(a,{func:1,ret:P.J,args:[[P.l,H.a_(this,"U",0)]]})},
sdf:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.z,[P.l,H.a_(this,"U",0)]]})},
sdi:function(a){this.d=H.j(a,{func:1,ret:-1,args:[P.z,[P.l,H.a_(this,"U",0)]]})},
bP:function(a){this.sfK(H.c([],[a]))
this.sdh(null)
this.sdf(null)
this.sdi(null)},
cR:function(a,b,c){var z=H.a_(this,"U",0)
H.j(b,{func:1,ret:P.J,args:[[P.l,z]]})
z={func:1,ret:-1,args:[P.z,[P.l,z]]}
H.j(a,z)
H.j(c,z)
this.sdh(b)
this.sdf(a)
this.sdi(c)},
bd:function(a,b){return this.cR(a,null,b)},
hb:function(a){var z
H.i(a,"$isl",[H.a_(this,"U",0)],"$asl")
z=this.b
if(z!=null)return z.$1(a)
return!0},
eU:function(a,b){var z
H.i(b,"$isl",[H.a_(this,"U",0)],"$asl")
z=this.c
if(z!=null)z.$2(a,b)},
gn:function(a){return this.a.length},
gO:function(a){var z=this.a
return new J.ap(z,z.length,0,[H.v(z,0)])},
a2:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.k(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.a_(this,"U",0)
H.y(b,z)
z=[z]
if(this.hb(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.eU(x,H.c([b],z))}},
$isl:1,
p:{
cG:function(a){var z=new O.U([a])
z.bP(a)
return z}}},cQ:{"^":"a;0a,0b",
sbZ:function(a){this.a=H.i(a,"$isb",[V.ad],"$asb")},
gn:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
eV:function(a){var z=this.b
if(!(z==null))z.D(a)},
az:function(){return this.eV(null)},
gW:function(){var z=this.a
if(z.length>0)return C.a.gbE(z)
else return V.bM()},
eb:function(a){var z=this.a
if(a==null)C.a.h(z,V.bM())
else C.a.h(z,a)
this.az()},
cH:function(){var z=this.a
if(z.length>0){z.pop()
this.az()}}}}],["","",,E,{"^":"",cz:{"^":"a;"},ar:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0aa:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sfl:function(a,b){this.y=H.i(b,"$isU",[E.ar],"$asU")},
saa:function(a){this.z=H.e(a,"$isbk")},
scS:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gt().U(0,this.ge8())
y=this.c
if(y!=null)y.gt().h(0,this.ge8())
x=new D.I("shape",z,this.c,this,[F.ez])
x.b=!0
this.ag(x)}},
sb3:function(a){var z,y
if(!J.R(this.r,a)){z=this.r
if(z!=null)z.gt().U(0,this.ge7())
if(a!=null)a.gt().h(0,this.ge7())
this.r=a
y=new D.I("mover",z,a,this,[U.a5])
y.b=!0
this.ag(y)}},
aq:function(a){var z,y,x,w
z=this.r
y=z!=null?z.aT(a,this):null
if(!J.R(y,this.x)){x=this.x
this.x=y
w=new D.I("matrix",x,y,this,[V.ad])
w.b=!0
this.ag(w)}for(z=this.y.a,z=new J.ap(z,z.length,0,[H.v(z,0)]);z.A();)z.d.aq(a)},
aS:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gW())
else C.a.h(z.a,y.v(0,z.gW()))
z.az()
a.ec(this.f)
z=a.dy
x=(z&&C.a).gbE(z)
if(x!=null&&this.d!=null)x.jo(a,this)
for(z=this.y.a,z=new J.ap(z,z.length,0,[H.v(z,0)]);z.A();)z.d.aS(a)
a.ea()
a.dx.cH()},
gt:function(){var z=this.z
if(z==null){z=D.G()
this.z=z}return z},
ag:function(a){var z=this.z
if(!(z==null))z.D(a)},
a3:function(){return this.ag(null)},
ja:[function(a){H.e(a,"$isu")
this.e=null
this.ag(a)},function(){return this.ja(null)},"ks","$1","$0","ge8",0,2,0],
j9:[function(a){this.ag(H.e(a,"$isu"))},function(){return this.j9(null)},"kr","$1","$0","ge7",0,2,0],
j7:[function(a){this.ag(H.e(a,"$isu"))},function(){return this.j7(null)},"kp","$1","$0","ge6",0,2,0],
ko:[function(a,b){var z,y,x,w,v,u,t
H.i(b,"$isl",[E.ar],"$asl")
for(z=b.length,y=this.ge6(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gaa()==null){t=new D.bk()
t.sab(null)
t.saY(null)
t.c=null
t.d=0
u.saa(t)}t=u.gaa()
t.toString
H.j(y,x)
if(t.a==null)t.sab(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a3()},"$2","gj6",8,0,7],
kq:[function(a,b){var z,y
H.i(b,"$isl",[E.ar],"$asl")
for(z=b.gO(b),y=this.ge6();z.A();)z.gF().gt().U(0,y)
this.a3()},"$2","gj8",8,0,7],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaB:1},iA:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
shJ:function(a){this.dy=H.i(a,"$isb",[O.cc],"$asb")},
shE:function(a){this.fr=H.i(a,"$isac",[P.n,A.cV],"$asac")},
eQ:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.ak(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cQ()
y=[V.ad]
z.sbZ(H.c([],y))
z.b=null
z.gt().h(0,new E.iC(this))
this.cy=z
z=new O.cQ()
z.sbZ(H.c([],y))
z.b=null
z.gt().h(0,new E.iD(this))
this.db=z
z=new O.cQ()
z.sbZ(H.c([],y))
z.b=null
z.gt().h(0,new E.iE(this))
this.dx=z
this.shJ(H.c([],[O.cc]))
z=this.dy;(z&&C.a).h(z,null)
this.shE(new H.b_(0,0,[P.n,A.cV]))},
gjl:function(){var z=this.z
if(z==null){z=this.cy.gW().v(0,this.db.gW())
this.z=z}return z},
ec:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbE(z):a;(z&&C.a).h(z,y)},
ea:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
iB:function(a,b){var z=new E.iA(a,b)
z.eQ(a,b)
return z}}},iC:{"^":"t:6;a",
$1:function(a){var z
H.e(a,"$isu")
z=this.a
z.z=null
z.ch=null}},iD:{"^":"t:6;a",
$1:function(a){var z
H.e(a,"$isu")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iE:{"^":"t:6;a",
$1:function(a){var z
H.e(a,"$isu")
z=this.a
z.ch=null
z.cx=null}},j5:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0aa:x<,0y,0z,0Q,0ch,0cx,0cy",
saa:function(a){this.x=H.e(a,"$isbk")},
eX:[function(a){H.e(a,"$isu")
this.jq()},function(){return this.eX(null)},"eW","$1","$0","gcW",0,2,0],
giW:function(){var z,y,x
z=Date.now()
y=C.h.a_(P.dX(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ak(z,!1)
return x/y},
dk:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.v()
if(typeof z!=="number")return H.B(z)
x=C.k.cw(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.v()
w=C.k.cw(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.eN(C.q,this.gjp())}},
jq:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.j(new E.j7(this),{func:1,ret:-1,args:[P.a9]})
C.G.ft(z)
C.G.hp(z,W.fA(y,P.a9))}},"$0","gjp",0,0,3],
jn:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dk()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ak(w,!1)
x.y=P.dX(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sn(w.a,0)
w.az()
w=x.db
C.a.sn(w.a,0)
w.az()
w=x.dx
C.a.sn(w.a,0)
w.az()
w=x.dy;(w&&C.a).sn(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aS(this.e)}x=this.z
if(!(x==null))x.D(null)}catch(v){z=H.aa(v)
y=H.bc(v)
P.dy("Error: "+H.f(z))
P.dy("Stack: "+H.f(y))
throw H.h(z)}},
p:{
j6:function(a,b,c,d,e){var z,y,x,w
z=J.N(a)
if(!!z.$iscC)return E.eM(a,!0,!0,!0,!1)
y=W.cD(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdB(a).h(0,y)
w=E.eM(y,!0,!0,!0,!1)
w.a=a
return w},
eM:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.j5()
y=P.hQ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.o.bK(a,"webgl",y)
x=H.e(x==null?C.o.bK(a,"experimental-webgl",y):x,"$iscU")
if(x==null)H.p(P.o("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iB(x,a)
w=new T.j3(x)
w.b=H.a4((x&&C.b).cP(x,3379))
w.c=H.a4(C.b.cP(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.jq(a)
v=new X.hL()
v.c=new X.av(!1,!1,!1)
v.shj(P.bL(null,null,null,P.z))
w.b=v
v=new X.i8(w)
v.f=0
v.r=V.aP()
v.x=V.aP()
v.Q=1
v.ch=1
w.c=v
v=new X.hU(w)
v.r=0
v.x=V.aP()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ja(w)
v.e=0
v.f=V.aP()
v.r=V.aP()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sfu(H.c([],[[P.cY,P.a]]))
v=w.z
u=document
t=W.am
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.V(u,"contextmenu",H.j(w.gfZ(),s),!1,t))
v=w.z
r=W.a0
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.V(a,"focus",H.j(w.gh1(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.V(a,"blur",H.j(w.gfW(),q),!1,r))
v=w.z
p=W.bm
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.V(u,"keyup",H.j(w.gh3(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.V(u,"keydown",H.j(w.gh2(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.V(a,"mousedown",H.j(w.gh6(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mouseup",H.j(w.gh8(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mousemove",H.j(w.gh7(),s),!1,t))
p=w.z
o=W.bw;(p&&C.a).h(p,W.V(a,H.C(W.hk(a)),H.j(w.gh9(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.V(u,"mousemove",H.j(w.gh_(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.V(u,"mouseup",H.j(w.gh0(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.V(u,"pointerlockchange",H.j(w.gha(),q),!1,r))
r=w.z
q=W.b4
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.V(a,"touchstart",H.j(w.ghh(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchend",H.j(w.ghf(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchmove",H.j(w.ghg(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ak(Date.now(),!1)
z.cy=0
z.dk()
return z}}},j7:{"^":"t:41;a",
$1:function(a){var z
H.l9(a)
z=this.a
if(z.ch){z.ch=!1
z.jn()}}}}],["","",,Z,{"^":"",fb:{"^":"a;a,b",$islk:1,p:{
de:function(a,b,c){var z
H.i(c,"$isb",[P.z],"$asb")
z=a.createBuffer()
C.b.an(a,b,z)
C.b.dA(a,b,new Int16Array(H.bA(c)),35044)
C.b.an(a,b,null)
return new Z.fb(b,z)}}},dH:{"^":"cz;a,b,c,d,e",
ce:function(a){var z,y,x
try{y=a.a
C.b.dH(y,this.e)
C.b.jF(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.aa(x)
y=P.o('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.f(z))
throw H.h(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.f(this.e)+"]"}},jF:{"^":"a;a",$isll:1},dI:{"^":"a;a,0b,c,d",
sfG:function(a){this.b=H.i(a,"$isb",[Z.bJ],"$asb")},
aP:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
ce:function(a){var z,y
z=this.a
C.b.an(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].ce(a)},
jE:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.dF(x,z[y].e)
C.b.an(x,this.a.a,null)},
aS:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.k(w,x)
v=w[x]
w=v.c
u=w.a
C.b.an(y,u,w.b)
C.b.iO(y,v.a,v.b,5123,0)
C.b.an(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.n]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a6(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(y,", ")+"\nAttrs:   "+C.a.k(u,", ")},
$islD:1},bJ:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b2(this.c)+"'")+"]"}},b5:{"^":"a;a",
gcT:function(a){var z,y
z=this.a
y=(z&$.$get$aH().a)!==0?3:0
if((z&$.$get$aG().a)!==0)y+=3
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$aI().a)!==0)y+=2
if((z&$.$get$aJ().a)!==0)y+=3
if((z&$.$get$bu().a)!==0)y+=3
if((z&$.$get$bv().a)!==0)y+=4
if((z&$.$get$b6().a)!==0)++y
return(z&$.$get$aE().a)!==0?y+4:y},
im:function(a){var z,y,x
z=$.$get$aH()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bu()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bv()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b6()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fa()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b5))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.n])
y=this.a
if((y&$.$get$aH().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aI().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bu().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bv().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b6().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.k(z,"|")},
p:{
ah:function(a){return new Z.b5(a)}}}}],["","",,D,{"^":"",dM:{"^":"a;"},bk:{"^":"a;0a,0b,0c,0d",
sab:function(a){this.a=H.i(a,"$isb",[{func:1,ret:-1,args:[D.u]}],"$asb")},
saY:function(a){this.b=H.i(a,"$isb",[{func:1,ret:-1,args:[D.u]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.u]}
H.j(b,z)
if(this.a==null)this.sab(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
U:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[D.u]})
z=this.a
z=z==null?null:C.a.S(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).U(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.S(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).U(z,b)||y}return y},
D:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.u(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.a0(y,new D.ho(z))
y=this.b
if(!(y==null))C.a.a0(y,new D.hp(z))
z=this.b
if(!(z==null))C.a.sn(z,0)
return!0},
iQ:function(){return this.D(null)},
jr:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.D(y)}}},
ax:function(){return this.jr(!0,!1)},
p:{
G:function(){var z=new D.bk()
z.sab(null)
z.saY(null)
z.c=null
z.d=0
return z}}},ho:{"^":"t:23;a",
$1:function(a){var z
H.j(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},hp:{"^":"t:23;a",
$1:function(a){var z
H.j(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},u:{"^":"a;a,0b"},c1:{"^":"u;c,d,a,0b,$ti"},c2:{"^":"u;c,d,a,0b,$ti"},I:{"^":"u;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}}],["","",,X,{"^":"",dJ:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dJ))return!1
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
i:function(a){return this.b.i(0)+H.f(this.a)}},hL:{"^":"a;0a,0b,0c,0d",
shj:function(a){this.d=H.i(a,"$isey",[P.z],"$asey")},
jg:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jc:function(a){this.c=a.b
this.d.U(0,a.a)
return!1}},eb:{"^":"c9;x,y,c,d,e,a,0b"},hU:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aX:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ak(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.v()
v=b.b
u=this.ch
if(typeof v!=="number")return v.v()
t=new V.a7(y.a+x*w,y.b+v*u)
u=this.a.gaL()
s=new X.bo(a,V.aP(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cG:function(a,b){this.r=a.a
return!1},
b5:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eB()
if(typeof z!=="number")return z.el()
this.r=(z&~y)>>>0
return!1},
b4:function(a,b){var z=this.d
if(z==null)return!1
z.D(this.aX(a,b))
return!0},
jh:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaL()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.v()
t=a.b
s=this.cy
if(typeof t!=="number")return t.v()
w=new X.cR(new V.P(v*u,t*s),y,x,new P.ak(w,!1),this)
w.b=!0
z.D(w)
return!0},
h5:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ak(Date.now(),!1)
y=this.f
x=new X.eb(c,a,this.a.gaL(),b,z,this)
x.b=!0
y.D(x)
this.y=z
this.x=V.aP()}},av:{"^":"a;a,b,c",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.av))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bo:{"^":"c9;x,y,z,Q,ch,c,d,e,a,0b"},i8:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bV:function(a,b,c){var z,y,x
z=new P.ak(Date.now(),!1)
y=this.a.gaL()
x=new X.bo(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cG:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.D(this.bV(a,b,!0))
return!0},
b5:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eB()
if(typeof z!=="number")return z.el()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.D(this.bV(a,b,!0))
return!0},
b4:function(a,b){var z=this.d
if(z==null)return!1
z.D(this.bV(a,b,!1))
return!0},
ji:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaL()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.v()
u=a.b
t=this.ch
if(typeof u!=="number")return u.v()
x=new X.cR(new V.P(w*v,u*t),y,b,new P.ak(x,!1),this)
x.b=!0
z.D(x)
return!0},
gdG:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
gbJ:function(){var z=this.c
if(z==null){z=D.G()
this.c=z}return z},
ge5:function(){var z=this.d
if(z==null){z=D.G()
this.d=z}return z}},cR:{"^":"c9;x,c,d,e,a,0b"},c9:{"^":"u;"},eQ:{"^":"c9;x,y,z,Q,ch,c,d,e,a,0b"},ja:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aX:function(a,b){var z,y,x,w
H.i(a,"$isb",[V.a7],"$asb")
z=new P.ak(Date.now(),!1)
y=a.length>0?a[0]:V.aP()
x=this.a.gaL()
w=new X.eQ(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
jf:function(a){var z
H.i(a,"$isb",[V.a7],"$asb")
z=this.b
if(z==null)return!1
z.D(this.aX(a,!0))
return!0},
jd:function(a){var z
H.i(a,"$isb",[V.a7],"$asb")
z=this.c
if(z==null)return!1
z.D(this.aX(a,!0))
return!0},
je:function(a){var z
H.i(a,"$isb",[V.a7],"$asb")
z=this.d
if(z==null)return!1
z.D(this.aX(a,!1))
return!0}},jq:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sfu:function(a){this.z=H.i(a,"$isb",[[P.cY,P.a]],"$asb")},
gaL:function(){var z=this.a
return V.ev(0,0,C.o.gdC(z).c,C.o.gdC(z).d)},
d7:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.e7(z,new X.av(y,a.altKey,a.shiftKey))},
aH:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.av(y,a.altKey,a.shiftKey)},
ca:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.av(y,a.altKey,a.shiftKey)},
at:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=z.top
if(typeof x!=="number")return x.I()
return new V.a7(y-w,x-v)},
aZ:function(a){return new V.P(a.movementX,a.movementY)},
c6:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.a7])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.k.ah(u.pageX)
C.k.ah(u.pageY)
s=z.left
C.k.ah(u.pageX)
C.a.h(y,new V.a7(t-s,C.k.ah(u.pageY)-z.top))}return y},
ar:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dJ(z,new X.av(y,a.altKey,a.shiftKey))},
c_:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.I()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jX:[function(a){this.f=!0},"$1","gh1",4,0,10],
jR:[function(a){this.f=!1},"$1","gfW",4,0,10],
jU:[function(a){H.e(a,"$isam")
if(this.f&&this.c_(a))a.preventDefault()},"$1","gfZ",4,0,4],
jZ:[function(a){var z
H.e(a,"$isbm")
if(!this.f)return
z=this.d7(a)
this.b.jg(z)},"$1","gh3",4,0,22],
jY:[function(a){var z
H.e(a,"$isbm")
if(!this.f)return
z=this.d7(a)
this.b.jc(z)},"$1","gh2",4,0,22],
k0:[function(a){var z,y,x,w
H.e(a,"$isam")
z=this.a
z.focus()
this.f=!0
this.aH(a)
if(this.x){y=this.ar(a)
x=this.aZ(a)
if(this.d.cG(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ar(a)
w=this.at(a)
if(this.c.cG(y,w))a.preventDefault()},"$1","gh6",4,0,4],
k6:[function(a){var z,y,x
H.e(a,"$isam")
this.aH(a)
z=this.ar(a)
if(this.x){y=this.aZ(a)
if(this.d.b5(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b5(z,x))a.preventDefault()},"$1","gh8",4,0,4],
jW:[function(a){var z,y,x
H.e(a,"$isam")
if(!this.c_(a)){this.aH(a)
z=this.ar(a)
if(this.x){y=this.aZ(a)
if(this.d.b5(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b5(z,x))a.preventDefault()}},"$1","gh0",4,0,4],
k5:[function(a){var z,y,x
H.e(a,"$isam")
this.aH(a)
z=this.ar(a)
if(this.x){y=this.aZ(a)
if(this.d.b4(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b4(z,x))a.preventDefault()},"$1","gh7",4,0,4],
jV:[function(a){var z,y,x
H.e(a,"$isam")
if(!this.c_(a)){this.aH(a)
z=this.ar(a)
if(this.x){y=this.aZ(a)
if(this.d.b4(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b4(z,x))a.preventDefault()}},"$1","gh_",4,0,4],
k7:[function(a){var z,y
H.e(a,"$isbw")
this.aH(a)
z=new V.P((a&&C.F).giJ(a),C.F.giK(a)).C(0,180)
if(this.x){if(this.d.jh(z))a.preventDefault()
return}if(this.r)return
y=this.at(a)
if(this.c.ji(z,y))a.preventDefault()},"$1","gh9",4,0,26],
k8:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.ar(this.y)
x=this.at(this.y)
this.d.h5(y,x,z)}},"$1","gha",4,0,10],
ke:[function(a){var z
H.e(a,"$isb4")
this.a.focus()
this.f=!0
this.ca(a)
z=this.c6(a)
if(this.e.jf(z))a.preventDefault()},"$1","ghh",4,0,9],
kc:[function(a){var z
H.e(a,"$isb4")
this.ca(a)
z=this.c6(a)
if(this.e.jd(z))a.preventDefault()},"$1","ghf",4,0,9],
kd:[function(a){var z
H.e(a,"$isb4")
this.ca(a)
z=this.c6(a)
if(this.e.je(z))a.preventDefault()},"$1","ghg",4,0,9]}}],["","",,D,{"^":"",bX:{"^":"a;0a,0b,0c,0d",
gt:function(){var z=this.d
if(z==null){z=D.G()
this.d=z}return z},
aA:[function(a){var z
H.e(a,"$isu")
z=this.d
if(!(z==null))z.D(a)},function(){return this.aA(null)},"jH","$1","$0","gf_",0,2,0],
$isX:1,
$isaB:1},X:{"^":"a;",$isaB:1},hM:{"^":"U;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sfs:function(a){this.e=H.i(a,"$isb",[D.bX],"$asb")},
shi:function(a){this.f=H.i(a,"$isb",[D.en],"$asb")},
shG:function(a){this.r=H.i(a,"$isb",[D.eB],"$asb")},
shR:function(a){this.x=H.i(a,"$isb",[D.eJ],"$asb")},
shS:function(a){this.y=H.i(a,"$isb",[D.eK],"$asb")},
shT:function(a){this.z=H.i(a,"$isb",[D.eL],"$asb")},
gt:function(){var z=this.Q
if(z==null){z=D.G()
this.Q=z}return z},
aA:function(a){var z=this.Q
if(!(z==null))z.D(a)},
h4:[function(a){var z
H.e(a,"$isu")
z=this.ch
if(!(z==null))z.D(a)},function(){return this.h4(null)},"k_","$1","$0","gdg",0,2,0],
k9:[function(a){var z,y,x
H.i(a,"$isl",[D.X],"$asl")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.eZ(x))return!1}return!0},"$1","ghc",4,0,28],
jO:[function(a,b){var z,y,x,w,v,u,t,s
z=D.X
H.i(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gdg(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.e(b[u],"$isX")
if(t instanceof D.bX)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bk()
s.sab(null)
s.saY(null)
s.c=null
s.d=0
t.d=s}H.j(x,w)
if(s.a==null)s.sab(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.c1(a,b,this,[z])
z.b=!0
this.aA(z)},"$2","gfT",8,0,20],
kb:[function(a,b){var z,y,x,w
z=D.X
H.i(b,"$isl",[z],"$asl")
for(y=b.gO(b),x=this.gdg();y.A();){w=y.gF()
C.a.U(this.e,w)
w.gt().U(0,x)}z=new D.c2(a,b,this,[z])
z.b=!0
this.aA(z)},"$2","ghe",8,0,20],
eZ:function(a){var z=C.a.S(this.e,a)
return z},
$asl:function(){return[D.X]},
$asU:function(){return[D.X]}},en:{"^":"a;",$isX:1,$isaB:1},eB:{"^":"a;",$isX:1,$isaB:1},eJ:{"^":"a;",$isX:1,$isaB:1},eK:{"^":"a;",$isX:1,$isaB:1},eL:{"^":"a;",$isX:1,$isaB:1}}],["","",,V,{"^":"",
ln:[function(a,b){if(typeof b!=="number")return b.I()
if(typeof a!=="number")return H.B(a)
return Math.abs(b-a)<=1e-9},"$2","i6",8,0,27],
li:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.k.eA(a-b,z)
return(a<0?a+z:a)+b},
K:function(a,b,c){if(a==null)return C.i.a8("null",c)
return C.i.a8(C.k.eg($.m.$2(a,0)?0:a,b),c+b+1)},
bb:function(a,b,c){var z,y,x,w,v,u
H.i(a,"$isb",[P.w],"$asb")
z=H.c([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.K(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.k(z,u)
C.a.V(z,u,C.i.a8(z[u],x))}return z},
dx:function(a,b){return C.k.jA(Math.pow(b,C.O.cw(Math.log(H.kL(a))/Math.log(b))))},
Y:{"^":"a;a,b,c",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
bU:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bU))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
ef:{"^":"a;a,b,c,d,e,f,r,x,y",
a9:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ef))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
z=b.e
if(!$.m.$2(z,this.e))return!1
z=b.f
if(!$.m.$2(z,this.f))return!1
z=b.r
if(!$.m.$2(z,this.r))return!1
z=b.x
if(!$.m.$2(z,this.x))return!1
z=b.y
if(!$.m.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.w]
y=V.bb(H.c([this.a,this.d,this.r],z),3,0)
x=V.bb(H.c([this.b,this.e,this.x],z),3,0)
w=V.bb(H.c([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.k(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.k(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.k(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.k(y,1)
s=" "+y[1]+", "
if(1>=u)return H.k(x,1)
s=s+x[1]+", "
if(1>=t)return H.k(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.k(y,2)
z=" "+y[2]+", "
if(2>=u)return H.k(x,2)
z=z+x[2]+", "
if(2>=t)return H.k(w,2)
return s+(z+w[2]+"]")}},
ad:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a9:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
e3:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.m.$2(a2,0))return V.bM()
a3=1/a2
a4=-w
a5=-i
return V.au((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
v:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
return V.au(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cJ:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.Q(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
ba:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.aQ(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
z=b.e
if(!$.m.$2(z,this.e))return!1
z=b.f
if(!$.m.$2(z,this.f))return!1
z=b.r
if(!$.m.$2(z,this.r))return!1
z=b.x
if(!$.m.$2(z,this.x))return!1
z=b.y
if(!$.m.$2(z,this.y))return!1
z=b.z
if(!$.m.$2(z,this.z))return!1
z=b.Q
if(!$.m.$2(z,this.Q))return!1
z=b.ch
if(!$.m.$2(z,this.ch))return!1
z=b.cx
if(!$.m.$2(z,this.cx))return!1
z=b.cy
if(!$.m.$2(z,this.cy))return!1
z=b.db
if(!$.m.$2(z,this.db))return!1
z=b.dx
if(!$.m.$2(z,this.dx))return!1
return!0},
i:function(a){return this.J()},
e2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.bb(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bb(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bb(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bb(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.k(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.k(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.k(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.k(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.k(y,1)
q=q+y[1]+", "
if(1>=t)return H.k(x,1)
q=q+x[1]+", "
if(1>=s)return H.k(w,1)
q=q+w[1]+", "
if(1>=r)return H.k(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.k(y,2)
u=u+y[2]+", "
if(2>=t)return H.k(x,2)
u=u+x[2]+", "
if(2>=s)return H.k(w,2)
u=u+w[2]+", "
if(2>=r)return H.k(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.k(y,3)
q=q+y[3]+", "
if(3>=t)return H.k(x,3)
q=q+x[3]+", "
if(3>=s)return H.k(w,3)
q=q+w[3]+", "
if(3>=r)return H.k(v,3)
return u+(q+v[3]+"]")},
J:function(){return this.e2("",3,0)},
w:function(a){return this.e2(a,3,0)},
p:{
bM:function(){var z=$.eh
if(z==null){z=V.au(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eh=z}return z},
au:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ad(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eg:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.C(0,Math.sqrt(c.G(c)))
y=b.b1(z)
x=y.C(0,Math.sqrt(y.G(y)))
w=z.b1(x)
v=new V.Q(a.a,a.b,a.c)
u=x.N(0).G(v)
t=w.N(0).G(v)
s=z.N(0).G(v)
return V.au(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
a7:{"^":"a;a,b",
I:function(a,b){return new V.a7(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"},
p:{
aP:function(){var z=$.eo
if(z==null){z=new V.a7(0,0)
$.eo=z}return z}}},
aQ:{"^":"a;a,b,c",
I:function(a,b){return new V.aQ(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aQ))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"},
p:{
ep:function(){var z=$.bq
if(z==null){z=new V.aQ(0,0,0)
$.bq=z}return z}}},
eq:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eq))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
eu:{"^":"a;a,b,c,d",
ga5:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eu))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"},
p:{
ev:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eu(a,b,c,d)}}},
P:{"^":"a;a,b",
j0:[function(a){return Math.sqrt(this.G(this))},"$0","gn",1,0,19],
G:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.v()
if(typeof y!=="number")return H.B(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.v()
if(typeof w!=="number")return H.B(w)
return z*y+x*w},
v:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.P(z*b,y*b)},
C:function(a,b){var z,y
if($.m.$2(b,0)){z=$.f3
if(z==null){z=new V.P(0,0)
$.f3=z}return z}z=this.a
if(typeof z!=="number")return z.C()
y=this.b
if(typeof y!=="number")return y.C()
return new V.P(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
Q:{"^":"a;a,b,c",
j0:[function(a){return Math.sqrt(this.G(this))},"$0","gn",1,0,19],
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cA:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.Q(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
b1:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.Q(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.Q(-this.a,-this.b,-this.c)},
C:function(a,b){if($.m.$2(b,0))return V.bO()
return new V.Q(this.a/b,this.b/b,this.c/b)},
e4:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"},
p:{
bO:function(){var z=$.f6
if(z==null){z=new V.Q(0,0,0)
$.f6=z}return z},
f7:function(){var z=$.f5
if(z==null){z=new V.Q(0,1,0)
$.f5=z}return z},
jw:function(){var z=$.cg
if(z==null){z=new V.Q(0,0,1)
$.cg=z}return z}}}}],["","",,U,{"^":"",h5:{"^":"dM;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bR:function(a){var z=V.li(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.G()
this.y=z}return z},
P:function(a){var z=this.y
if(!(z==null))z.D(a)},
scL:function(a,b){},
scD:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bR(z)}z=new D.I("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.P(z)}},
scF:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bR(z)}z=new D.I("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.P(z)}},
sa4:function(a,b){var z,y
b=this.bR(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.I("location",y,b,this,[P.w])
z.b=!0
this.P(z)}},
scE:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.I("maximumVelocity",y,a,this,[P.w])
z.b=!0
this.P(z)}},
sR:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.I("velocity",x,a,this,[P.w])
z.b=!0
this.P(z)}},
scn:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.I("dampening",y,a,this,[P.w])
z.b=!0
this.P(z)}},
aq:function(a){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa4(0,this.d+y*a)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sR(y)}},
p:{
cH:function(){var z=new U.h5()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dO:{"^":"a5;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
aT:function(a,b){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dO))return!1
return J.R(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")},
p:{
dP:function(a){var z=new U.dO()
z.a=a
return z}}},e1:{"^":"U;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
P:[function(a){var z
H.e(a,"$isu")
z=this.e
if(!(z==null))z.D(a)},function(){return this.P(null)},"ac","$1","$0","gaF",0,2,0],
jN:[function(a,b){var z,y,x,w,v,u,t,s
z=U.a5
H.i(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gaF(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.j(x,w)
if(s.a==null)s.sab(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.P(z)},"$2","gfS",8,0,18],
ka:[function(a,b){var z,y,x
z=U.a5
H.i(b,"$isl",[z],"$asl")
for(y=b.gO(b),x=this.gaF();y.A();)y.gF().gt().U(0,x)
z=new D.c2(a,b,this,[z])
z.b=!0
this.P(z)},"$2","ghd",8,0,18],
aT:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.ai()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ap(z,z.length,0,[H.v(z,0)]),x=null;z.A();){y=z.d
if(y!=null){w=y.aT(a,b)
if(w!=null)x=x==null?w:w.v(0,x)}}this.f=x==null?V.bM():x
z=this.e
if(!(z==null))z.ax()}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e1))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.k(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.k(w,y)
if(!J.R(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asl:function(){return[U.a5]},
$asU:function(){return[U.a5]},
$isa5:1},a5:{"^":"dM;"},jr:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.cy
if(z==null){z=D.G()
this.cy=z}return z},
P:[function(a){var z
H.e(a,"$isu")
z=this.cy
if(!(z==null))z.D(a)},function(){return this.P(null)},"ac","$1","$0","gaF",0,2,0],
b0:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdG().h(0,this.gc0())
this.a.c.ge5().h(0,this.gc1())
this.a.c.gbJ().h(0,this.gc2())
return!0},
fO:[function(a){H.e(a,"$isu")
if(!J.R(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc0",4,0,1],
fP:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isu"),"$isbo")
if(!this.y)return
if(this.x){z=a.d.I(0,a.y)
z=new V.P(z.a,z.b)
z=z.G(z)
y=this.r
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.I(0,a.y)
z=new V.P(y.a,y.b).v(0,2).C(0,z.ga5())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.v()
x=this.e
if(typeof x!=="number")return H.B(x)
y.sR(z*10*x)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=new V.P(x.a,x.b).v(0,2).C(0,z.ga5())
x=this.b
v=w.a
if(typeof v!=="number")return v.N()
u=this.e
if(typeof u!=="number")return H.B(u)
t=this.z
if(typeof t!=="number")return H.B(t)
x.sa4(0,-v*u+t)
this.b.sR(0)
y=y.I(0,a.z)
this.Q=new V.P(y.a,y.b).v(0,2).C(0,z.ga5())}this.ac()},"$1","gc1",4,0,1],
fQ:[function(a){var z,y,x
H.e(a,"$isu")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.G(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.v()
x=this.e
if(typeof x!=="number")return H.B(x)
z.sR(y*10*x)
this.ac()}},"$1","gc2",4,0,1],
aT:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.ai()
if(z<y){this.ch=y
x=a.y
this.b.aq(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.au(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa5:1},js:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.G()
this.fx=z}return z},
P:[function(a){var z
H.e(a,"$isu")
z=this.fx
if(!(z==null))z.D(a)},function(){return this.P(null)},"ac","$1","$0","gaF",0,2,0],
b0:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdG().h(0,this.gc0())
this.a.c.ge5().h(0,this.gc1())
this.a.c.gbJ().h(0,this.gc2())
z=this.a.d
y=z.f
if(y==null){y=D.G()
z.f=y
z=y}else z=y
z.h(0,this.gfM())
z=this.a.d
y=z.d
if(y==null){y=D.G()
z.d=y
z=y}else z=y
z.h(0,this.gfN())
z=this.a.e
y=z.b
if(y==null){y=D.G()
z.b=y
z=y}else z=y
z.h(0,this.ghP())
z=this.a.e
y=z.d
if(y==null){y=D.G()
z.d=y
z=y}else z=y
z.h(0,this.ghO())
z=this.a.e
y=z.c
if(y==null){y=D.G()
z.c=y
z=y}else z=y
z.h(0,this.ghN())
return!0},
al:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.N()
z=-z}if(this.r){if(typeof y!=="number")return y.N()
y=-y}return new V.P(z,y)},
fO:[function(a){a=H.d(H.e(a,"$isu"),"$isbo")
if(!J.R(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc0",4,0,1],
fP:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isu"),"$isbo")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.P(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.al(new V.P(y.a,y.b).v(0,2).C(0,z.ga5()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sR(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sR(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.al(new V.P(x.a,x.b).v(0,2).C(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa4(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa4(0,-u*v+x)
this.b.sR(0)
this.c.sR(0)
y=y.I(0,a.z)
this.dx=this.al(new V.P(y.a,y.b).v(0,2).C(0,z.ga5()))}this.ac()},"$1","gc1",4,0,1],
fQ:[function(a){var z,y,x
H.e(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sR(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sR(-y*10*z)
this.ac()}},"$1","gc2",4,0,1],
jK:[function(a){if(H.d(H.e(a,"$isu"),"$iseb").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfM",4,0,1],
jL:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isu"),"$isbo")
if(!J.R(this.d,a.x.b))return
z=a.c
y=a.d
x=y.I(0,a.y)
w=this.al(new V.P(x.a,x.b).v(0,2).C(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa4(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa4(0,-u*v+x)
this.b.sR(0)
this.c.sR(0)
y=y.I(0,a.z)
this.dx=this.al(new V.P(y.a,y.b).v(0,2).C(0,z.ga5()))
this.ac()},"$1","gfN",4,0,1],
ki:[function(a){H.e(a,"$isu")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghP",4,0,1],
kh:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isu"),"$iseQ")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.P(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.al(new V.P(y.a,y.b).v(0,2).C(0,z.ga5()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sR(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sR(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.al(new V.P(x.a,x.b).v(0,2).C(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa4(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa4(0,-u*v+x)
this.b.sR(0)
this.c.sR(0)
y=y.I(0,a.z)
this.dx=this.al(new V.P(y.a,y.b).v(0,2).C(0,z.ga5()))}this.ac()},"$1","ghO",4,0,1],
kg:[function(a){var z,y,x
H.e(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sR(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sR(-y*10*z)
this.ac()}},"$1","ghN",4,0,1],
aT:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.ai()
if(z<y){this.dy=y
x=a.y
this.c.aq(x)
this.b.aq(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.au(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.v(0,V.au(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa5:1},jt:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.G()
this.r=z}return z},
P:function(a){var z=this.r
if(!(z==null))z.D(a)},
b0:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.G()
z.e=y
z=y}else z=y
y=this.gfR()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.G()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
jM:[function(a){var z,y,x,w
H.e(a,"$isu")
if(!J.R(this.b,this.a.b.c))return
H.d(a,"$iscR")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.v()
w=z+y*x
if(z!==w){this.d=w
z=new D.I("zoom",z,w,this,[P.w])
z.b=!0
this.P(z)}},"$1","gfR",4,0,1],
aT:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.au(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa5:1}}],["","",,M,{"^":"",hm:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sf0:function(a,b){this.d=H.i(b,"$isU",[E.ar],"$asU")},
aB:[function(a){var z
H.e(a,"$isu")
z=this.x
if(!(z==null))z.D(a)},function(){return this.aB(null)},"jI","$1","$0","gak",0,2,0],
jS:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ar
H.i(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gak(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gaa()==null){s=new D.bk()
s.sab(null)
s.saY(null)
s.c=null
s.d=0
t.saa(s)}s=t.gaa()
s.toString
H.j(x,w)
if(s.a==null)s.sab(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","gfX",8,0,7],
jT:[function(a,b){var z,y,x
z=E.ar
H.i(b,"$isl",[z],"$asl")
for(y=b.gO(b),x=this.gak();y.A();)y.gF().gt().U(0,x)
z=new D.c2(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","gfY",8,0,7],
see:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gt().U(0,this.gak())
y=this.c
this.c=a
if(a!=null)a.gt().h(0,this.gak())
z=new D.I("technique",y,this.c,this,[O.cc])
z.b=!0
this.aB(z)}},
gt:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
aS:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.ec(this.c)
z=this.b
z.toString
y=a.a
C.b.iq(y,36160,null)
C.b.cp(y,2884)
C.b.cp(y,2929)
C.b.iL(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.B(x)
t=C.k.ah(u*x)
u=v.b
if(typeof w!=="number")return H.B(w)
s=C.k.ah(u*w)
u=C.k.ah(v.c*x)
a.c=u
v=C.k.ah(v.d*w)
a.d=v
C.b.jG(y,t,s,u,v)
C.b.iw(y,z.c)
z=z.a
C.b.iv(y,z.a,z.b,z.c,z.d)
C.b.iu(y,16640)
z=this.a
y=a.c
v=a.d
u=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(u*0.5)
n=V.au(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.eb(n)
y=$.em
if(y==null){y=V.ep()
v=V.f7()
u=$.f4
if(u==null){u=new V.Q(0,0,-1)
$.f4=u}u=V.eg(y,v,u)
$.em=u
m=u}else m=y
z=z.b
if(z!=null){l=z.a
if(l!=null)m=l.v(0,m)}a.db.eb(m)
z=this.c
if(z!=null)z.aq(a)
for(z=this.d.a,z=new J.ap(z,z.length,0,[H.v(z,0)]);z.A();)z.d.aq(a)
for(z=this.d.a,z=new J.ap(z,z.length,0,[H.v(z,0)]);z.A();)z.d.aS(a)
this.a.toString
a.cy.cH()
a.db.cH()
this.b.toString
a.ea()},
$islz:1}}],["","",,A,{"^":"",dD:{"^":"a;a,b,c"},fY:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
iR:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
C.b.dH(w.a,w.c)}},
iN:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
C.b.dF(w.a,w.c)}}},i0:{"^":"cV;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ap,0af,0bp,0dI,0bq,0br,0dJ,0dK,0bs,0bt,0dL,0dM,0bu,0bv,0dN,0dO,0bw,0dP,0dQ,0bx,0dR,0dS,0by,0bz,0bA,0dT,0dU,0bB,0bC,0dV,0dW,0bD,0dX,0cq,0dY,0cr,0dZ,0cs,0e_,0ct,0e0,0cu,0e1,0cv,a,b,0c,0d,0e,0f,0r,0x,0y",
sfg:function(a){this.r1=H.i(a,"$isb",[A.ay],"$asb")},
sf1:function(a){this.cq=H.i(a,"$isb",[A.d6],"$asb")},
sf2:function(a){this.cr=H.i(a,"$isb",[A.d8],"$asb")},
sf3:function(a){this.cs=H.i(a,"$isb",[A.d9],"$asb")},
sf4:function(a){this.ct=H.i(a,"$isb",[A.da],"$asb")},
sf5:function(a){this.cu=H.i(a,"$isb",[A.db],"$asb")},
sf6:function(a){this.cv=H.i(a,"$isb",[A.dc],"$asb")},
eP:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.bs("")
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
a2.hX(z)
a2.i3(z)
a2.hY(z)
a2.ib(z)
a2.ic(z)
a2.i5(z)
a2.ii(z)
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
z=new P.bs("")
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
x.i0(z)
x.hW(z)
x.hZ(z)
x.i1(z)
x.i9(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.i7(z)
x.i8(z)}x.i4(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.f){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.d){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.e){r+="uniform samplerCube alphaTxt;\n"
z.a=r}}r+="\n"
z.a=r}r+="float alphaValue()\n"
z.a=r
r+="{\n"
z.a=r
switch(q){case C.c:r+="   return 1.0;\n"
z.a=r
break
case C.f:r+="   return alpha;\n"
z.a=r
break
case C.d:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.e:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.c([],[P.n])
if(x.b!==C.c)C.a.h(p,"ambient()")
if(x.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.k(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.i_(z)
x.i6(z)
x.ia(z)
x.ie(z)
x.ig(z)
x.ih(z)
x.i2(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.n])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(x.c!==C.c)z.a+="   setDiffuseColor();\n"
if(x.d!==C.c)z.a+="   setInvDiffuseColor();\n"
if(x.e!==C.c)z.a+="   setSpecularColor();\n"
if(x.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(x.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(x.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(x.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(x.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(x.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(x.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(x.a!==C.c)C.a.h(o,"emission()")
if(x.r!==C.c)C.a.h(o,"reflect(refl)")
if(x.x!==C.c)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.k(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.d8(s,35633)
this.f=this.d8(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
C.b.dw(x,v,this.e)
C.b.dw(x,this.r,this.f)
C.b.j1(x,this.r)
if(!H.dn(C.b.bL(x,this.r,35714))){m=C.b.ev(x,this.r)
C.b.iH(x,this.r)
H.p(P.o("Failed to link shader: "+H.f(m)))}this.hB()
this.hD()
this.Q=this.x.l(0,"posAttr")
this.cx=this.x.l(0,"normAttr")
this.ch=this.x.l(0,"binmAttr")
this.cy=this.x.l(0,"txt2DAttr")
this.db=this.x.l(0,"txtCubeAttr")
this.dx=this.x.l(0,"bendAttr")
if(a2.fr)this.id=H.d(this.y.m(0,"invViewMat"),"$isay")
if(y)this.dy=H.d(this.y.m(0,"objMat"),"$isay")
if(w)this.fr=H.d(this.y.m(0,"viewObjMat"),"$isay")
this.fy=H.d(this.y.m(0,"projViewObjMat"),"$isay")
if(a2.x2)this.k1=H.d(this.y.m(0,"txt2DMat"),"$isd7")
if(a2.y1)this.k2=H.d(this.y.m(0,"txtCubeMat"),"$isay")
if(a2.y2)this.k3=H.d(this.y.m(0,"colorMat"),"$isay")
this.sfg(H.c([],[A.ay]))
y=a2.ap
if(y>0){this.k4=H.e(this.y.m(0,"bendMatCount"),"$isF")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.l(0,v)
if(k==null)H.p(P.o("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(k,"$isay"))}}y=a2.a
if(y!==C.c){this.r2=H.d(this.y.m(0,"emissionClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.d:this.rx=H.d(this.y.m(0,"emissionTxt"),"$isae")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$isF")
break
case C.e:this.ry=H.d(this.y.m(0,"emissionTxt"),"$isaf")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$isF")
break}}y=a2.b
if(y!==C.c){this.x2=H.d(this.y.m(0,"ambientClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.d:this.y1=H.d(this.y.m(0,"ambientTxt"),"$isae")
this.ap=H.d(this.y.m(0,"nullAmbientTxt"),"$isF")
break
case C.e:this.y2=H.d(this.y.m(0,"ambientTxt"),"$isaf")
this.ap=H.d(this.y.m(0,"nullAmbientTxt"),"$isF")
break}}y=a2.c
if(y!==C.c){this.af=H.d(this.y.m(0,"diffuseClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.d:this.bp=H.d(this.y.m(0,"diffuseTxt"),"$isae")
this.bq=H.d(this.y.m(0,"nullDiffuseTxt"),"$isF")
break
case C.e:this.dI=H.d(this.y.m(0,"diffuseTxt"),"$isaf")
this.bq=H.d(this.y.m(0,"nullDiffuseTxt"),"$isF")
break}}y=a2.d
if(y!==C.c){this.br=H.d(this.y.m(0,"invDiffuseClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.d:this.dJ=H.d(this.y.m(0,"invDiffuseTxt"),"$isae")
this.bs=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$isF")
break
case C.e:this.dK=H.d(this.y.m(0,"invDiffuseTxt"),"$isaf")
this.bs=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$isF")
break}}y=a2.e
if(y!==C.c){this.bv=H.d(this.y.m(0,"shininess"),"$isT")
this.bt=H.d(this.y.m(0,"specularClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.d:this.dL=H.d(this.y.m(0,"specularTxt"),"$isae")
this.bu=H.d(this.y.m(0,"nullSpecularTxt"),"$isF")
break
case C.e:this.dM=H.d(this.y.m(0,"specularTxt"),"$isaf")
this.bu=H.d(this.y.m(0,"nullSpecularTxt"),"$isF")
break}}switch(a2.f){case C.c:break
case C.f:break
case C.d:this.dN=H.d(this.y.m(0,"bumpTxt"),"$isae")
this.bw=H.d(this.y.m(0,"nullBumpTxt"),"$isF")
break
case C.e:this.dO=H.d(this.y.m(0,"bumpTxt"),"$isaf")
this.bw=H.d(this.y.m(0,"nullBumpTxt"),"$isF")
break}if(a2.dy){this.dP=H.d(this.y.m(0,"envSampler"),"$isaf")
this.dQ=H.d(this.y.m(0,"nullEnvTxt"),"$isF")
y=a2.r
if(y!==C.c){this.bx=H.d(this.y.m(0,"reflectClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.d:this.dR=H.d(this.y.m(0,"reflectTxt"),"$isae")
this.by=H.d(this.y.m(0,"nullReflectTxt"),"$isF")
break
case C.e:this.dS=H.d(this.y.m(0,"reflectTxt"),"$isaf")
this.by=H.d(this.y.m(0,"nullReflectTxt"),"$isF")
break}}y=a2.x
if(y!==C.c){this.bz=H.d(this.y.m(0,"refraction"),"$isT")
this.bA=H.d(this.y.m(0,"refractClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.d:this.dT=H.d(this.y.m(0,"refractTxt"),"$isae")
this.bB=H.d(this.y.m(0,"nullRefractTxt"),"$isF")
break
case C.e:this.dU=H.d(this.y.m(0,"refractTxt"),"$isaf")
this.bB=H.d(this.y.m(0,"nullRefractTxt"),"$isF")
break}}}y=a2.y
if(y!==C.c){this.bC=H.d(this.y.m(0,"alpha"),"$isT")
switch(y){case C.c:break
case C.f:break
case C.d:this.dV=H.d(this.y.m(0,"alphaTxt"),"$isae")
this.bD=H.d(this.y.m(0,"nullAlphaTxt"),"$isF")
break
case C.e:this.dW=H.d(this.y.m(0,"alphaTxt"),"$isaf")
this.bD=H.d(this.y.m(0,"nullAlphaTxt"),"$isF")
break}}this.sf1(H.c([],[A.d6]))
this.sf2(H.c([],[A.d8]))
this.sf3(H.c([],[A.d9]))
this.sf4(H.c([],[A.da]))
this.sf5(H.c([],[A.db]))
this.sf6(H.c([],[A.dc]))
if(a2.k2){y=a2.z
if(y>0){this.dX=H.e(this.y.m(0,"dirLightCount"),"$isF")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="dirLights["+l+"].color"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.cq;(x&&C.a).h(x,new A.d6(l,k,j))}}y=a2.Q
if(y>0){this.dY=H.e(this.y.m(0,"pntLightCount"),"$isF")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.y
w="pntLights["+l+"].color"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.y
w="pntLights["+l+"].att0"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isT")
x=this.y
w="pntLights["+l+"].att1"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isT")
x=this.y
w="pntLights["+l+"].att2"
f=x.l(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isT")
x=this.cr;(x&&C.a).h(x,new A.d8(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dZ=H.e(this.y.m(0,"spotLightCount"),"$isF")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="spotLights["+l+"].objDir"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.y
w="spotLights["+l+"].color"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isE")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isT")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.l(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isT")
x=this.y
w="spotLights["+l+"].att0"
e=x.l(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isT")
x=this.y
w="spotLights["+l+"].att1"
d=x.l(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isT")
x=this.y
w="spotLights["+l+"].att2"
c=x.l(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isT")
x=this.cs;(x&&C.a).h(x,new A.d9(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.e_=H.e(this.y.m(0,"txtDirLightCount"),"$isF")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isE")
x=this.y
w="txtDirLights["+l+"].color"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isE")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.l(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isF")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.l(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isae")
x=this.ct;(x&&C.a).h(x,new A.da(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.e0=H.e(this.y.m(0,"txtPntLightCount"),"$isF")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isd7")
x=this.y
w="txtPntLights["+l+"].color"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isE")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isF")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.l(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isT")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.l(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isT")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.l(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isT")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.l(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isaf")
x=this.cu;(x&&C.a).h(x,new A.db(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.e1=H.e(this.y.m(0,"txtSpotLightCount"),"$isF")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isE")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isE")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.l(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isF")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.l(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isE")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.l(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isT")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.l(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isT")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.l(0,w)
if(b==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isT")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.l(0,w)
if(a==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isT")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.l(0,w)
if(a0==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isT")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.l(0,w)
if(a1==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a1,"$isae")
x=this.cv;(x&&C.a).h(x,new A.dc(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ad:function(a,b,c){if(c==null||!c.d)C.b.M(b.a,b.d,1)
else{a.eF(c)
C.b.M(b.a,b.d,0)}},
a6:function(a,b,c){C.b.M(b.a,b.d,1)},
p:{
i_:function(a,b){var z,y
z=a.af
y=new A.i0(b,z)
y.eS(b,z)
y.eP(a,b)
return y}}},i3:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ap,af,bp",
hX:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ap+"];\n"
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
i3:function(a){var z
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
hY:function(a){var z
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
ib:function(a){var z,y
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
ic:function(a){var z,y
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
i5:function(a){var z
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
ii:function(a){var z
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
as:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.k(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.be(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
i0:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.as(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.f:z=y+"   return emissionClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hW:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.as(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.f:z=y+"   return ambientClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hZ:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.as(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.f:z=y+"   diffuseColor = diffuseClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
i1:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.as(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.f:z=y+"   invDiffuseColor = invDiffuseClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
i9:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.as(a,z,"specular")
y=a.a+="uniform float shininess;\n"
y+="vec3 specularColor;\n"
a.a=y
y+="\n"
a.a=y
y+="void setSpecularColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.f:z=y+"   specularColor = specularClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
i4:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.f:break
case C.d:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.e:z+="uniform samplerCube bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break}z+="vec3 normal()\n"
a.a=z
z+="{\n"
a.a=z
switch(y){case C.c:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.f:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.d:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.e:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
i7:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.as(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.c:z=y
break
case C.f:z=y+"   vec3 scalar = reflectClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
i8:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.as(a,z,"refract")
y=a.a+="uniform float refraction;\n"
y+="\n"
a.a=y
y+="vec3 refract(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.c:z=y
break
case C.f:z=y+"   vec3 scalar = refractClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
i_:function(a){var z,y
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
i6:function(a){var z,y
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
ia:function(a){var z,y
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
ie:function(a){var z,y,x
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
ig:function(a){var z,y,x
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
ih:function(a){var z,y,x
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
i2:function(a){var z
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
i:function(a){return this.af}},d6:{"^":"a;a,b,c"},da:{"^":"a;a,b,c,d,e,f,r,x"},d8:{"^":"a;a,b,c,d,e,f,r"},db:{"^":"a;a,b,c,d,e,f,r,x,y,z"},d9:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dc:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cV:{"^":"cz;",
eS:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
d8:function(a,b){var z,y,x
z=this.a
y=C.b.iF(z,b)
C.b.eG(z,y,a)
C.b.ix(z,y)
if(!H.dn(C.b.ey(z,y,35713))){x=C.b.ex(z,y)
C.b.iI(z,y)
throw H.h(P.o("Error compiling shader '"+H.f(y)+"': "+H.f(x)))}return y},
hB:function(){var z,y,x,w,v,u
z=H.c([],[A.dD])
y=this.a
x=H.a4(C.b.bL(y,this.r,35721))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.eo(y,this.r,w)
u=C.b.eq(y,this.r,v.name)
C.a.h(z,new A.dD(y,v.name,u))}this.x=new A.fY(z)},
hD:function(){var z,y,x,w,v,u
z=H.c([],[A.a2])
y=this.a
x=H.a4(C.b.bL(y,this.r,35718))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.ep(y,this.r,w)
u=C.b.ez(y,this.r,v.name)
C.a.h(z,this.iG(v.type,v.size,v.name,u))}this.y=new A.jj(z)},
aE:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.F(z,y,b,c)
else return A.d5(z,y,b,a,c)},
fo:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ae(z,y,b,c)
else return A.d5(z,y,b,a,c)},
fp:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.af(z,y,b,c)
else return A.d5(z,y,b,a,c)},
bm:function(a,b){return new P.fe(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
iG:function(a,b,c,d){switch(a){case 5120:return this.aE(b,c,d)
case 5121:return this.aE(b,c,d)
case 5122:return this.aE(b,c,d)
case 5123:return this.aE(b,c,d)
case 5124:return this.aE(b,c,d)
case 5125:return this.aE(b,c,d)
case 5126:return new A.T(this.a,this.r,c,d)
case 35664:return new A.je(this.a,this.r,c,d)
case 35665:return new A.E(this.a,this.r,c,d)
case 35666:return new A.jh(this.a,this.r,c,d)
case 35667:return new A.jf(this.a,this.r,c,d)
case 35668:return new A.jg(this.a,this.r,c,d)
case 35669:return new A.ji(this.a,this.r,c,d)
case 35674:return new A.jl(this.a,this.r,c,d)
case 35675:return new A.d7(this.a,this.r,c,d)
case 35676:return new A.ay(this.a,this.r,c,d)
case 35678:return this.fo(b,c,d)
case 35680:return this.fp(b,c,d)
case 35670:throw H.h(this.bm("BOOL",c))
case 35671:throw H.h(this.bm("BOOL_VEC2",c))
case 35672:throw H.h(this.bm("BOOL_VEC3",c))
case 35673:throw H.h(this.bm("BOOL_VEC4",c))
default:throw H.h(P.o("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}},bV:{"^":"a;a,b",
i:function(a){return this.b}},a2:{"^":"a;"},jj:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.l(0,b)
if(z==null)throw H.h(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.J()},
iV:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
J:function(){return this.iV("\n")}},F:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1i: "+H.f(this.c)}},jf:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2i: "+H.f(this.c)}},jg:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3i: "+H.f(this.c)}},ji:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4i: "+H.f(this.c)}},jd:{"^":"a2;0e,0f,a,b,c,d",
shU:function(a){this.e=H.i(a,"$isb",[P.z],"$asb")},
i:function(a){return"Uniform1iv: "+H.f(this.c)},
p:{
d5:function(a,b,c,d,e){var z=new A.jd(a,b,c,e)
z.f=d
z.shU(P.hR(d,0,!1,P.z))
return z}}},T:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1f: "+H.f(this.c)}},je:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2f: "+H.f(this.c)}},E:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3f: "+H.f(this.c)}},jh:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4f: "+H.f(this.c)}},jl:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}},d7:{"^":"a2;a,b,c,d",
aj:function(a){var z=new Float32Array(H.bA(H.i(a,"$isb",[P.w],"$asb")))
C.b.ei(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.f(this.c)}},ay:{"^":"a2;a,b,c,d",
aj:function(a){var z=new Float32Array(H.bA(H.i(a,"$isb",[P.w],"$asb")))
C.b.ej(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.f(this.c)}},ae:{"^":"a2;a,b,c,d",
eF:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)C.b.M(y,x,0)
else C.b.M(y,x,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}},af:{"^":"a2;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}}],["","",,F,{"^":"",
ck:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
by:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.Q(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.Q(t+h,s+f,r+g)
z.b=q
p=new V.Q(t-h,s-f,r-g)
z.c=p
o=new V.Q(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.ck(y)
k=F.ck(z.b)
j=F.lf(d,e,new F.kz(z,F.ck(z.c),F.ck(z.d),k,l,c),b)
if(j!=null)a.j5(j)},
lf:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(c,{func:1,ret:-1,args:[F.aR,P.w,P.w]})
if(a<1)return
if(b<1)return
z=F.eA()
y=H.c([],[F.aR])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.dd(null,null,new V.bU(u,0,0,1),null,null,new V.a7(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cm(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.dd(null,null,new V.bU(o,n,m,1),null,null,new V.a7(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cm(d))}}z.d.ij(a+1,b+1,y)
return z},
kz:{"^":"t:33;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cA(z.b,b).cA(z.d.cA(z.c,b),c)
z=new V.aQ(y.a,y.b,y.c)
if(!J.R(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a3()}a.sjy(y.C(0,Math.sqrt(y.G(y))))
z=1-b
x=1-c
x=new V.eq(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.R(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a3()}}},
a1:{"^":"a;0a,0b,0c,0d,0e",
ff:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bO()
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.e4())return
return v.C(0,Math.sqrt(v.G(v)))},
fk:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.I(0,y)
z=new V.Q(z.a,z.b,z.c)
v=z.C(0,Math.sqrt(z.G(z)))
z=w.I(0,y)
z=new V.Q(z.a,z.b,z.c)
z=v.b1(z.C(0,Math.sqrt(z.G(z))))
return z.C(0,Math.sqrt(z.G(z)))},
ck:function(){if(this.d!=null)return!0
var z=this.ff()
if(z==null){z=this.fk()
if(z==null)return!1}this.d=z
this.a.a.a3()
return!0},
fe:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bO()
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.e4())return
return v.C(0,Math.sqrt(v.G(v)))},
fj:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.I(0,u)
z=new V.Q(z.a,z.b,z.c)
m=z.C(0,Math.sqrt(z.G(z)))
if(o.a-p.a<0)m=m.N(0)}else{l=(z-q.b)/n
z=r.I(0,u)
z=new V.aQ(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).I(0,x)
z=new V.Q(z.a,z.b,z.c)
m=z.C(0,Math.sqrt(z.G(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.N(0)}z=this.d
if(z!=null){k=z.C(0,Math.sqrt(z.G(z)))
z=k.b1(m)
z=z.C(0,Math.sqrt(z.G(z))).b1(k)
m=z.C(0,Math.sqrt(z.G(z)))}return m},
ci:function(){if(this.e!=null)return!0
var z=this.fe()
if(z==null){z=this.fj()
if(z==null)return!1}this.e=z
this.a.a.a3()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z,y
z=this.a
if(z==null||this.b==null||this.c==null)return a+"disposed"
y=a+C.i.a8(J.a6(z.e),0)+", "+C.i.a8(J.a6(this.b.e),0)+", "+C.i.a8(J.a6(this.c.e),0)+" {"
z=this.d
y=z!=null?y+(z.i(0)+", "):y+"-, "
z=this.e
return z!=null?y+(z.i(0)+"}"):y+"-}"},
J:function(){return this.w("")},
p:{
bH:function(a,b,c){var z,y,x
z=new F.a1()
y=a.a
if(y==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.o("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a3()
return z}}},
bn:{"^":"a;0a,0b",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z=this.a
if(z==null||this.b==null)return a+"disposed"
return a+C.i.a8(J.a6(z.e),0)+", "+C.i.a8(J.a6(this.b.e),0)},
J:function(){return this.w("")}},
bN:{"^":"a;0a",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.a8(J.a6(z.e),0)},
J:function(){return this.w("")}},
ez:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
j5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
a.a.Z()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.iB())}this.a.Z()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.Z()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.bN()
if(r.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.D(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.Z()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.Z()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
t=new F.bn()
s=p.a
if(s==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.p(P.o("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.D(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.Z()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.Z()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.Z()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
l=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,l)
F.bH(p,o,l)}z=this.e
if(!(z==null))z.ax()},
aK:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aK()||!1
if(!this.a.aK())y=!1
z=this.e
if(!(z==null))z.ax()
return y},
is:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aH()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
if((x&$.$get$bu().a)!==0)++w
if((x&$.$get$bv().a)!==0)++w
if((x&$.$get$b6().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
v=b.gcT(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dH])
for(r=0,q=0;q<w;++q){p=b.im(q)
o=p.gcT(p)
C.a.V(s,q,new Z.dH(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.k(y,n)
m=y[n].j2(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.V(t,l,m[k]);++l}}r+=o}H.i(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.an(y,34962,j)
C.b.dA(y,34962,new Float32Array(H.bA(t)),35044)
C.b.an(y,34962,null)
i=new Z.dI(new Z.fb(34962,j),s,b)
i.sfG(H.c([],[Z.bJ]))
if(this.b.b.length!==0){x=P.z
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.Z()
C.a.h(h,g.e)}f=Z.de(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bJ(0,h.length,f))}if(this.c.b.length!==0){x=P.z
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.Z()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.Z()
C.a.h(h,g.e)}f=Z.de(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bJ(1,h.length,f))}if(this.d.b.length!==0){x=P.z
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.Z()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.Z()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].c
g.a.a.Z()
C.a.h(h,g.e)}f=Z.de(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bJ(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.w("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.w("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.w("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.w("   "))}return C.a.k(z,"\n")},
ag:function(a){var z=this.e
if(!(z==null))z.D(a)},
a3:function(){return this.ag(null)},
$islB:1,
p:{
eA:function(){var z,y
z=new F.ez()
y=new F.jx(z)
y.b=!1
y.shV(H.c([],[F.aR]))
z.a=y
y=new F.iN(z)
y.sc5(H.c([],[F.bN]))
z.b=y
y=new F.iM(z)
y.sfH(H.c([],[F.bn]))
z.c=y
y=new F.iL(z)
y.sfv(H.c([],[F.a1]))
z.d=y
z.e=null
return z}}},
iL:{"^":"a;a,0b",
sfv:function(a){this.b=H.i(a,"$isb",[F.a1],"$asb")},
ij:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.i(c,"$isb",[F.aR],"$asb")
z=H.c([],[F.a1])
for(y=this.a,x=b,w=0,v=!1,u=1;u<a;++u,++w,++x){for(t=v,s=1;s<b;++s,x=o){r=c.length
if(w<0||w>=r)return H.k(c,w)
q=c[w];++w
if(w>=r)return H.k(c,w)
p=c[w]
o=x+1
if(o<0||o>=r)return H.k(c,o)
n=c[o]
if(x<0||x>=r)return H.k(c,x)
m=c[x]
r=y.a
if(t){r.h(0,q)
y.a.h(0,p)
y.a.h(0,n)
C.a.h(z,F.bH(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bH(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bH(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bH(p,m,q))}t=!t}v=!v}return z},
gn:function(a){return this.b.length},
aK:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].ck())x=!1
return x},
cj:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].ci())x=!1
return x},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.k(z,"\n")},
J:function(){return this.w("")}},
iM:{"^":"a;a,0b",
sfH:function(a){this.b=H.i(a,"$isb",[F.bn],"$asb")},
gn:function(a){return this.b.length},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.k(w,x)
C.a.h(z,w[x].w(a+(""+x+". ")))}return C.a.k(z,"\n")},
J:function(){return this.w("")}},
iN:{"^":"a;a,0b",
sc5:function(a){this.b=H.i(a,"$isb",[F.bN],"$asb")},
gn:function(a){return this.b.length},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.k(z,"\n")},
J:function(){return this.w("")}},
aR:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cm:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.dd(this.cx,x,u,z,y,w,v,a,t)},
iB:function(){return this.cm(null)},
sjy:function(a){var z
if(!J.R(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a3()}},
j2:function(a){var z,y
if(a.u(0,$.$get$aH())){z=this.f
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aG())){z=this.r
y=[P.w]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aF())){z=this.x
y=[P.w]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aI())){z=this.y
y=[P.w]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.u(0,$.$get$aJ())){z=this.z
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bu())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bv())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.u(0,$.$get$b6()))return H.c([this.ch],[P.w])
else if(a.u(0,$.$get$aE())){z=this.cx
y=[P.w]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.w])},
ck:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bO()
this.d.a0(0,new F.jE(z))
z=z.a
this.r=z.C(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.a3()
z=this.a.e
if(!(z==null))z.ax()}return!0},
ci:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bO()
this.d.a0(0,new F.jD(z))
z=z.a
this.x=z.C(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.a3()
z=this.a.e
if(!(z==null))z.ax()}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z,y,x
z=H.c([],[P.n])
C.a.h(z,C.i.a8(J.a6(this.e),0))
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
C.a.h(z,V.K(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.k(z,", ")
return a+"{"+x+"}"},
J:function(){return this.w("")},
p:{
dd:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aR()
y=new F.jC(z)
y.sc5(H.c([],[F.bN]))
z.b=y
y=new F.jB(z)
x=[F.bn]
y.sfI(H.c([],x))
y.sfJ(H.c([],x))
z.c=y
y=new F.jy(z)
x=[F.a1]
y.sfw(H.c([],x))
y.sfz(H.c([],x))
y.sfA(H.c([],x))
z.d=y
h=$.$get$f8()
z.e=0
y=$.$get$aH()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aG().a)!==0?e:null
z.x=(x&$.$get$aF().a)!==0?b:null
z.y=(x&$.$get$aI().a)!==0?f:null
z.z=(x&$.$get$aJ().a)!==0?g:null
z.Q=(x&$.$get$f9().a)!==0?c:null
z.ch=(x&$.$get$b6().a)!==0?i:0
z.cx=(x&$.$get$aE().a)!==0?a:null
return z}}},
jE:{"^":"t:5;a",
$1:function(a){var z,y
H.e(a,"$isa1")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
jD:{"^":"t:5;a",
$1:function(a){var z,y
H.e(a,"$isa1")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
jx:{"^":"a;a,0b,0c",
shV:function(a){this.c=H.i(a,"$isb",[F.aR],"$asb")},
Z:function(){},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.h(P.o("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a3()
return!0},
gn:function(a){return this.c.length},
aK:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].ck()
return!0},
cj:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].ci()
return!0},
it:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.C(0,Math.sqrt(u*u+t*t+s*s))
if(!J.R(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.D(null)}}}}return!0},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
this.Z()
z=H.c([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.k(z,"\n")},
J:function(){return this.w("")}},
jy:{"^":"a;a,0b,0c,0d",
sfw:function(a){this.b=H.i(a,"$isb",[F.a1],"$asb")},
sfz:function(a){this.c=H.i(a,"$isb",[F.a1],"$asb")},
sfA:function(a){this.d=H.i(a,"$isb",[F.a1],"$asb")},
gn:function(a){return this.b.length+this.c.length+this.d.length},
a0:function(a,b){H.j(b,{func:1,ret:-1,args:[F.a1]})
C.a.a0(this.b,b)
C.a.a0(this.c,new F.jz(this,b))
C.a.a0(this.d,new F.jA(this,b))},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.k(z,"\n")},
J:function(){return this.w("")}},
jz:{"^":"t:5;a,b",
$1:function(a){H.e(a,"$isa1")
if(!J.R(a.a,this.a))this.b.$1(a)}},
jA:{"^":"t:5;a,b",
$1:function(a){var z
H.e(a,"$isa1")
z=this.a
if(!J.R(a.a,z)&&!J.R(a.b,z))this.b.$1(a)}},
jB:{"^":"a;a,0b,0c",
sfI:function(a){this.b=H.i(a,"$isb",[F.bn],"$asb")},
sfJ:function(a){this.c=H.i(a,"$isb",[F.bn],"$asb")},
gn:function(a){return this.b.length+this.c.length},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.k(z,"\n")},
J:function(){return this.w("")}},
jC:{"^":"a;a,0b",
sc5:function(a){this.b=H.i(a,"$isb",[F.bN],"$asb")},
gn:function(a){return this.b.length},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.k(z,"\n")},
J:function(){return this.w("")}}}],["","",,O,{"^":"",hZ:{"^":"cc;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sfh:function(a){this.e=H.i(a,"$isU",[V.ad],"$asU")},
gt:function(){var z=this.dy
if(z==null){z=D.G()
this.dy=z}return z},
Y:[function(a){var z
H.e(a,"$isu")
z=this.dy
if(!(z==null))z.D(a)},function(){return this.Y(null)},"f8","$1","$0","gbh",0,2,0],
hr:[function(a){H.e(a,"$isu")
this.a=null
this.Y(a)},function(){return this.hr(null)},"kf","$1","$0","ghq",0,2,0],
jP:[function(a,b){var z=V.ad
z=new D.c1(a,H.i(b,"$isl",[z],"$asl"),this,[z])
z.b=!0
this.Y(z)},"$2","gfU",8,0,11],
jQ:[function(a,b){var z=V.ad
z=new D.c2(a,H.i(b,"$isl",[z],"$asl"),this,[z])
z.b=!0
this.Y(z)},"$2","gfV",8,0,11],
d5:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.a_(z.e.length+3,4)*4
x=C.h.a_(z.f.length+3,4)*4
w=C.h.a_(z.r.length+3,4)*4
v=C.h.a_(z.x.length+3,4)*4
u=C.h.a_(z.y.length+3,4)*4
t=C.h.a_(z.z.length+3,4)*4
s=C.h.a_(this.e.a.length+3,4)*4
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
i=m!==C.c||l!==C.c
h=r!==C.c||q!==C.c||p!==C.c||o!==C.c
g=o===C.c
f=!g||i
e=q!==C.c||p!==C.c||!g||n!==C.c||i
g=n===C.c
d=!g
c=z===C.d||r===C.d||q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d
b=z===C.e||r===C.e||q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e
a=x+u+v+w+t>0
a0=s>0
a1=e||!g||f
a2=$.$get$aH()
if(e){g=$.$get$aG()
a2=new Z.b5(a2.a|g.a)}if(d){g=$.$get$aF()
a2=new Z.b5(a2.a|g.a)}if(c){g=$.$get$aI()
a2=new Z.b5(a2.a|g.a)}if(b){g=$.$get$aJ()
a2=new Z.b5(a2.a|g.a)}if(a0){g=$.$get$aE()
a2=new Z.b5(a2.a|g.a)}return new A.i3(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
T:function(a,b){H.i(a,"$isb",[T.d0],"$asb")
if(b!=null)if(!C.a.S(a,b)){b.a=a.length
C.a.h(a,b)}},
aq:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.ap(z,z.length,0,[H.v(z,0)]);z.A();){y=z.d
y.toString
x=$.cg
if(x==null){x=new V.Q(0,0,1)
$.cg=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cJ(x)}}},
jo:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=this.a
if(z==null){z=this.d5()
y=a.fr.l(0,z.af)
if(y==null){y=A.i_(z,a.a)
x=y.b
if(x.length===0)H.p(P.o("May not cache a shader with no name."))
if(a.fr.dD(x))H.p(P.o('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.V(0,x,y)}this.a=y
a0.e=null
z=y}w=z.z
v=w.bp
z=a0.e
if(!(z instanceof Z.dI)){a0.e=null
z=null}if(z==null||!z.d.u(0,v)){z=w.r1
if(z)a0.d.aK()
u=w.r2
if(u){t=a0.d
s=t.e
if(!(s==null))++s.d
t.d.cj()
t.a.cj()
t=t.e
if(!(t==null))t.ax()}t=w.ry
if(t){s=a0.d
r=s.e
if(!(r==null))++r.d
s.a.it()
s=s.e
if(!(s==null))s.ax()}q=a0.d.is(new Z.jF(a.a),v)
q.aP($.$get$aH()).e=this.a.Q.c
if(z)q.aP($.$get$aG()).e=this.a.cx.c
if(u)q.aP($.$get$aF()).e=this.a.ch.c
if(w.rx)q.aP($.$get$aI()).e=this.a.cy.c
if(t)q.aP($.$get$aJ()).e=this.a.db.c
if(w.x1)q.aP($.$get$aE()).e=this.a.dx.c
a0.e=q}z=T.d0
p=H.c([],[z])
u=this.a
t=a.a
C.b.ek(t,u.r)
u.x.iR()
if(w.fx){u=this.a
s=a.dx.gW()
u=u.dy
u.toString
u.aj(s.a9(0,!0))}if(w.fy){u=this.a
s=a.cx
if(s==null){s=a.db.gW().v(0,a.dx.gW())
a.cx=s}u=u.fr
u.toString
u.aj(s.a9(0,!0))}u=this.a
s=a.ch
if(s==null){s=a.gjl().v(0,a.dx.gW())
a.ch=s}u=u.fy
u.toString
u.aj(s.a9(0,!0))
if(w.x2){u=this.a
s=this.b
u=u.k1
u.toString
u.aj(C.r.a9(s,!0))}if(w.y1){u=this.a
s=this.c
u=u.k2
u.toString
u.aj(C.r.a9(s,!0))}if(w.y2){u=this.a
s=this.d
u=u.k3
u.toString
u.aj(C.r.a9(s,!0))}if(w.ap>0){o=this.e.a.length
u=this.a.k4
C.b.M(u.a,u.d,o)
for(u=[P.w],n=0;n<o;++n){s=this.a
r=this.e.a
if(n>=r.length)return H.k(r,n)
r=r[n]
s.toString
H.e(r,"$isad")
s=s.r1
if(n>=s.length)return H.k(s,n)
s=s[n]
m=new Float32Array(H.bA(H.i(r.a9(0,!0),"$isb",u,"$asb")))
C.b.ej(s.a,s.d,!1,m)}}switch(w.a){case C.c:break
case C.f:u=this.a
s=this.f.f
u=u.r2
u.toString
r=s.a
l=s.b
s=s.c
C.b.q(u.a,u.d,r,l,s)
break
case C.d:this.T(p,this.f.d)
u=this.a
s=this.f.d
u.ad(u.rx,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break
case C.e:this.T(p,this.f.e)
u=this.a
s=this.f.e
u.a6(u.ry,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break}if(w.k2){switch(w.b){case C.c:break
case C.f:u=this.a
s=this.r.f
u=u.x2
u.toString
r=s.a
l=s.b
s=s.c
C.b.q(u.a,u.d,r,l,s)
break
case C.d:this.T(p,this.r.d)
u=this.a
s=this.r.d
u.ad(u.y1,u.ap,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break
case C.e:this.T(p,this.r.e)
u=this.a
s=this.r.e
u.a6(u.y2,u.ap,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break}switch(w.c){case C.c:break
case C.f:u=this.a
s=this.x.f
u=u.af
u.toString
r=s.a
l=s.b
s=s.c
C.b.q(u.a,u.d,r,l,s)
break
case C.d:this.T(p,this.x.d)
u=this.a
s=this.x.d
u.ad(u.bp,u.bq,s)
s=this.a
u=this.x.f
s=s.af
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break
case C.e:this.T(p,this.x.e)
u=this.a
s=this.x.e
u.a6(u.dI,u.bq,s)
s=this.a
u=this.x.f
s=s.af
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break}switch(w.d){case C.c:break
case C.f:u=this.a
s=this.y.f
u=u.br
u.toString
r=s.a
l=s.b
s=s.c
C.b.q(u.a,u.d,r,l,s)
break
case C.d:this.T(p,this.y.d)
u=this.a
s=this.y.d
u.ad(u.dJ,u.bs,s)
s=this.a
u=this.y.f
s=s.br
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break
case C.e:this.T(p,this.y.e)
u=this.a
s=this.y.e
u.a6(u.dK,u.bs,s)
s=this.a
u=this.y.f
s=s.br
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break}switch(w.e){case C.c:break
case C.f:u=this.a
s=this.z.f
u=u.bt
u.toString
r=s.a
l=s.b
s=s.c
C.b.q(u.a,u.d,r,l,s)
s=this.a
l=this.z.ch
s=s.bv
C.b.L(s.a,s.d,l)
break
case C.d:this.T(p,this.z.d)
u=this.a
s=this.z.d
u.ad(u.dL,u.bu,s)
s=this.a
u=this.z.f
s=s.bt
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bv
C.b.L(u.a,u.d,l)
break
case C.e:this.T(p,this.z.e)
u=this.a
s=this.z.e
u.a6(u.dM,u.bu,s)
s=this.a
u=this.z.f
s=s.bt
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bv
C.b.L(u.a,u.d,l)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dX
C.b.M(u.a,u.d,o)
k=a.db.gW()
for(u=this.dx.e,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.x)(u),++i){h=u[i]
r=this.a.cq
if(j>=r.length)return H.k(r,j)
g=r[j]
r=k.cJ(h.a)
l=r.a
f=r.b
e=r.c
e=r.C(0,Math.sqrt(l*l+f*f+e*e))
f=g.b
l=e.a
r=e.b
e=e.c
C.b.q(f.a,f.d,l,r,e)
e=h.c
r=g.c
C.b.q(r.a,r.d,e.a,e.b,e.c);++j}}if(w.Q>0){o=this.dx.f.length
u=this.a.dY
C.b.M(u.a,u.d,o)
k=a.db.gW()
for(u=this.dx.f,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.x)(u),++i){h=u[i]
r=this.a.cr
if(j>=r.length)return H.k(r,j)
g=r[j]
r=h.gb6(h)
l=g.b
f=r.gcM(r)
e=r.gcN(r)
r=r.gcO(r)
C.b.q(l.a,l.d,f,e,r)
r=k.ba(h.gb6(h))
e=g.c
C.b.q(e.a,e.d,r.a,r.b,r.c)
r=h.gao(h)
e=g.d
f=r.gbG()
l=r.gbc()
r=r.gbn()
C.b.q(e.a,e.d,f,l,r)
r=h.gcb()
l=g.e
C.b.L(l.a,l.d,r)
r=h.gcc()
l=g.f
C.b.L(l.a,l.d,r)
r=h.gcd()
l=g.r
C.b.L(l.a,l.d,r);++j}}if(w.ch>0){o=this.dx.r.length
u=this.a.dZ
C.b.M(u.a,u.d,o)
k=a.db.gW()
for(u=this.dx.r,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.x)(u),++i){h=u[i]
r=this.a.cs
if(j>=r.length)return H.k(r,j)
g=r[j]
r=h.gb6(h)
l=g.b
f=r.gcM(r)
e=r.gcN(r)
r=r.gcO(r)
C.b.q(l.a,l.d,f,e,r)
r=h.gco(h).kn()
e=g.c
f=r.gaM(r)
l=r.gaN(r)
r=r.gaO()
C.b.q(e.a,e.d,f,l,r)
r=k.ba(h.gb6(h))
l=g.d
C.b.q(l.a,l.d,r.a,r.b,r.c)
r=h.gao(h)
l=g.e
f=r.gbG()
e=r.gbc()
r=r.gbn()
C.b.q(l.a,l.d,f,e,r)
r=h.gkl()
e=g.f
C.b.L(e.a,e.d,r)
r=h.gkj()
e=g.r
C.b.L(e.a,e.d,r)
r=h.gcb()
e=g.x
C.b.L(e.a,e.d,r)
r=h.gcc()
e=g.y
C.b.L(e.a,e.d,r)
r=h.gcd()
e=g.z
C.b.L(e.a,e.d,r);++j}}if(w.cx>0){o=this.dx.x.length
u=this.a.e_
C.b.M(u.a,u.d,o)
k=a.db.gW()
for(u=this.dx.x,s=u.length,r=[z],j=0,i=0;i<u.length;u.length===s||(0,H.x)(u),++i){h=u[i]
l=this.a.ct
if(j>=l.length)return H.k(l,j)
g=l[j]
l=h.gb8()
H.i(p,"$isb",r,"$asb")
if(!C.a.S(p,l)){l.sbj(p.length)
C.a.h(p,l)}l=h.gco(h)
f=g.d
e=l.gaM(l)
d=l.gaN(l)
l=l.gaO()
C.b.q(f.a,f.d,e,d,l)
l=h.gbJ()
d=g.b
e=l.gaM(l)
f=l.gaN(l)
l=l.gaO()
C.b.q(d.a,d.d,e,f,l)
l=h.gb7(h)
f=g.c
e=l.gaM(l)
d=l.gaN(l)
l=l.gaO()
C.b.q(f.a,f.d,e,d,l)
l=k.cJ(h.gco(h))
d=l.a
e=l.b
f=l.c
f=l.C(0,Math.sqrt(d*d+e*e+f*f))
e=g.e
d=f.a
l=f.b
f=f.c
C.b.q(e.a,e.d,d,l,f)
f=h.gao(h)
l=g.f
d=f.gbG()
e=f.gbc()
f=f.gbn()
C.b.q(l.a,l.d,d,e,f)
f=h.gb8()
l=f.gcC(f)
if(!l){l=g.x
C.b.M(l.a,l.d,1)}else{l=g.r
e=f.gfL()
d=l.a
l=l.d
if(!e)C.b.M(d,l,0)
else C.b.M(d,l,f.gbj())
l=g.x
C.b.M(l.a,l.d,0)}++j}}if(w.cy>0){o=this.dx.y.length
u=this.a.e0
C.b.M(u.a,u.d,o)
k=a.db.gW()
for(u=this.dx.y,s=u.length,r=[P.w],l=[z],j=0,i=0;i<u.length;u.length===s||(0,H.x)(u),++i){h=u[i]
f=this.a.cu
if(j>=f.length)return H.k(f,j)
g=f[j]
f=h.gb8()
H.i(p,"$isb",l,"$asb")
if(!C.a.S(p,f)){f.sbj(p.length)
C.a.h(p,f)}c=k.v(0,h.gW())
f=h.gW()
e=$.bq
if(e==null){e=new V.aQ(0,0,0)
$.bq=e}e=f.ba(e)
f=g.b
d=e.gcM(e)
b=e.gcN(e)
e=e.gcO(e)
C.b.q(f.a,f.d,d,b,e)
f=$.bq
if(f==null){f=new V.aQ(0,0,0)
$.bq=f}f=c.ba(f)
e=g.c
C.b.q(e.a,e.d,f.a,f.b,f.c)
f=c.e3()
e=g.d
m=new Float32Array(H.bA(H.i(new V.ef(f.a,f.b,f.c,f.e,f.f,f.r,f.y,f.z,f.Q).a9(0,!0),"$isb",r,"$asb")))
C.b.ei(e.a,e.d,!1,m)
e=h.gao(h)
f=g.e
d=e.gbG()
b=e.gbc()
e=e.gbn()
C.b.q(f.a,f.d,d,b,e)
e=h.gb8()
f=e.gcC(e)
if(!f){f=g.r
C.b.M(f.a,f.d,1)}else{f=g.f
d=e.gcC(e)
b=f.a
f=f.d
if(!d)C.b.M(b,f,0)
else C.b.M(b,f,e.gkm(e))
f=g.r
C.b.M(f.a,f.d,0)}f=h.gcb()
e=g.x
C.b.L(e.a,e.d,f)
f=h.gcc()
e=g.y
C.b.L(e.a,e.d,f)
f=h.gcd()
e=g.z
C.b.L(e.a,e.d,f);++j}}if(w.db>0){o=this.dx.z.length
u=this.a.e1
C.b.M(u.a,u.d,o)
k=a.db.gW()
for(u=this.dx.z,s=u.length,z=[z],j=0,i=0;i<u.length;u.length===s||(0,H.x)(u),++i){h=u[i]
r=this.a.cv
if(j>=r.length)return H.k(r,j)
g=r[j]
r=h.gb8()
H.i(p,"$isb",z,"$asb")
if(!C.a.S(p,r)){r.sbj(p.length)
C.a.h(p,r)}r=h.gb6(h)
l=g.b
f=r.gcM(r)
e=r.gcN(r)
r=r.gcO(r)
C.b.q(l.a,l.d,f,e,r)
r=h.gco(h)
e=g.c
f=r.gaM(r)
l=r.gaN(r)
r=r.gaO()
C.b.q(e.a,e.d,f,l,r)
r=h.gbJ()
l=g.d
f=r.gaM(r)
e=r.gaN(r)
r=r.gaO()
C.b.q(l.a,l.d,f,e,r)
r=h.gb7(h)
e=g.e
f=r.gaM(r)
l=r.gaN(r)
r=r.gaO()
C.b.q(e.a,e.d,f,l,r)
r=k.ba(h.gb6(h))
l=g.f
C.b.q(l.a,l.d,r.a,r.b,r.c)
r=h.gb8()
l=r.gcC(r)
if(!l){r=g.x
C.b.M(r.a,r.d,1)}else{l=g.r
f=r.gfL()
e=l.a
l=l.d
if(!f)C.b.M(e,l,0)
else C.b.M(e,l,r.gbj())
r=g.x
C.b.M(r.a,r.d,0)}r=h.gao(h)
l=g.y
f=r.gbG()
e=r.gbc()
r=r.gbn()
C.b.q(l.a,l.d,f,e,r)
r=h.gkt()
e=g.z
C.b.L(e.a,e.d,r)
r=h.gku()
e=g.Q
C.b.L(e.a,e.d,r)
r=h.gcb()
e=g.ch
C.b.L(e.a,e.d,r)
r=h.gcc()
e=g.cx
C.b.L(e.a,e.d,r)
r=h.gcd()
e=g.cy
C.b.L(e.a,e.d,r);++j}}}switch(w.f){case C.c:break
case C.f:break
case C.d:this.T(p,this.Q.d)
z=this.a
u=this.Q.d
z.ad(z.dN,z.bw,u)
break
case C.e:this.T(p,this.Q.e)
z=this.a
u=this.Q.e
z.a6(z.dO,z.bw,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db.gW().e3()
a.Q=u}z=z.id
z.toString
z.aj(u.a9(0,!0))}if(w.dy){this.T(p,this.ch)
z=this.a
u=this.ch
z.a6(z.dP,z.dQ,u)
switch(w.r){case C.c:break
case C.f:z=this.a
u=this.cx.f
z=z.bx
z.toString
s=u.a
r=u.b
u=u.c
C.b.q(z.a,z.d,s,r,u)
break
case C.d:this.T(p,this.cx.d)
z=this.a
u=this.cx.d
z.ad(z.dR,z.by,u)
u=this.a
z=this.cx.f
u=u.bx
u.toString
s=z.a
r=z.b
z=z.c
C.b.q(u.a,u.d,s,r,z)
break
case C.e:this.T(p,this.cx.e)
z=this.a
u=this.cx.e
z.a6(z.dS,z.by,u)
u=this.a
z=this.cx.f
u=u.bx
u.toString
s=z.a
r=z.b
z=z.c
C.b.q(u.a,u.d,s,r,z)
break}switch(w.x){case C.c:break
case C.f:z=this.a
u=this.cy.f
z=z.bA
z.toString
s=u.a
r=u.b
u=u.c
C.b.q(z.a,z.d,s,r,u)
u=this.a
r=this.cy.ch
u=u.bz
C.b.L(u.a,u.d,r)
break
case C.d:this.T(p,this.cy.d)
z=this.a
u=this.cy.d
z.ad(z.dT,z.bB,u)
u=this.a
z=this.cy.f
u=u.bA
u.toString
s=z.a
r=z.b
z=z.c
C.b.q(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bz
C.b.L(z.a,z.d,r)
break
case C.e:this.T(p,this.cy.e)
z=this.a
u=this.cy.e
z.a6(z.dU,z.bB,u)
u=this.a
z=this.cy.f
u=u.bA
u.toString
s=z.a
r=z.b
z=z.c
C.b.q(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bz
C.b.L(z.a,z.d,r)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.f:z=this.a
s=this.db.f
z=z.bC
C.b.L(z.a,z.d,s)
break
case C.d:this.T(p,this.db.d)
z=this.a
s=this.db.d
z.ad(z.dV,z.bD,s)
s=this.a
z=this.db.f
s=s.bC
C.b.L(s.a,s.d,z)
break
case C.e:this.T(p,this.db.e)
z=this.a
s=this.db.e
z.a6(z.dW,z.bD,s)
s=this.a
z=this.db.f
s=s.bC
C.b.L(s.a,s.d,z)
break}C.b.cp(t,3042)
C.b.ir(t,770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
C.b.ds(t,33984+z.a)
C.b.aJ(t,3553,z.b)}}z=a0.e
z.ce(a)
z.aS(a)
z.jE(a)
if(u)C.b.iM(t,3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
C.b.ds(t,33984+z.a)
C.b.aJ(t,3553,null)}}z=this.a
z.toString
C.b.ek(t,null)
z.x.iN()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.d5().af}},i1:{"^":"cP;0f,a,b,0c,0d,0e",
hx:function(a){var z,y
z=this.f
if(!$.m.$2(z,a)){y=this.f
this.f=a
z=new D.I(this.b,y,a,this,[P.w])
z.b=!0
this.a.Y(z)}},
aG:function(){this.cV()
this.hx(1)}},cP:{"^":"a;",
Y:[function(a){this.a.Y(H.e(a,"$isu"))},function(){return this.Y(null)},"f8","$1","$0","gbh",0,2,0],
aG:["cV",function(){}],
hz:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gt().U(0,this.gbh())
y=this.d
this.d=a
if(a!=null)a.gt().h(0,this.gbh())
z=new D.I(this.b+".texture2D",y,this.d,this,[T.eI])
z.b=!0
this.a.Y(z)}},
hA:function(a){},
sbI:function(a){var z=this.c
if(z!==C.d){if(z===C.c)this.aG()
this.c=C.d
this.hA(null)
z=this.a
z.a=null
z.Y(null)}this.hz(a)}},i2:{"^":"cP;a,b,0c,0d,0e"},b0:{"^":"cP;0f,a,b,0c,0d,0e",
dl:function(a){var z,y
if(!J.R(this.f,a)){z=this.f
this.f=a
y=new D.I(this.b+".color",z,a,this,[V.Y])
y.b=!0
this.a.Y(y)}},
aG:["bO",function(){this.cV()
this.dl(new V.Y(1,1,1))}],
sao:function(a,b){var z
if(this.c===C.c){this.c=C.f
this.aG()
z=this.a
z.a=null
z.Y(null)}this.dl(b)}},i4:{"^":"b0;0ch,0f,a,b,0c,0d,0e",
hy:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.Y(z)}},
aG:function(){this.bO()
this.hy(1)}},i5:{"^":"b0;0ch,0f,a,b,0c,0d,0e",
c8:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.Y(z)}},
aG:function(){this.bO()
this.c8(100)}},cc:{"^":"a;"}}],["","",,T,{"^":"",d0:{"^":"cz;"},eI:{"^":"d0;"},j2:{"^":"eI;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gt:function(){var z=this.y
if(z==null){z=D.G()
this.y=z}return z}},j3:{"^":"a;a,0b,0c,0d,0e",
j3:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
C.b.aJ(z,3553,y)
C.b.bH(z,3553,10242,33071)
C.b.bH(z,3553,10243,33071)
C.b.bH(z,3553,10241,9729)
C.b.bH(z,3553,10240,9729)
C.b.aJ(z,3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.j2()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.a0
W.V(x,"load",H.j(new T.j4(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
cB:function(a){return this.j3(a,!1,!1,!1,!1)},
hs:function(a,b,c){var z,y,x,w
b=V.dx(b,2)
z=V.dx(a.width,2)
y=V.dx(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cD(null,null)
x.width=z
x.height=y
w=H.e(C.o.es(x,"2d"),"$iscE")
w.imageSmoothingEnabled=!1;(w&&C.y).iP(w,a,0,0,x.width,x.height)
return P.kP(C.y.fE(w,0,0,x.width,x.height))}}},j4:{"^":"t:21;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.hs(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
C.b.aJ(y,3553,this.e)
C.b.jj(y,37440,this.f?1:0)
C.b.jw(y,3553,0,6408,6408,5121,w)
if(this.r)C.b.en(y,3553)
C.b.aJ(y,3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.iQ()}++x.e}}}],["","",,V,{"^":"",bg:{"^":"a;",
aR:function(a){return!0},
i:function(a){return"all"},
$isat:1},at:{"^":"a;"},ee:{"^":"a;0a",
sa1:function(a){this.a=H.i(a,"$isb",[V.at],"$asb")},
aR:["eM",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aR(a))return!0
return!1}],
i:["cU",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isat:1},an:{"^":"ee;0a",
aR:function(a){return!this.eM(a)},
i:function(a){return"!["+this.cU(0)+"]"}},iw:{"^":"a;0a,0b",
aR:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.cT(this.a)
y=H.cT(this.b)
return z+".."+y},
$isat:1,
p:{
L:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.h(P.o("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.i.aC(a,0)
y=C.i.aC(b,0)
x=new V.iw()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},iI:{"^":"a;0a",
shw:function(a){this.a=H.i(a,"$isac",[P.z,P.J],"$asac")},
eR:function(a){var z,y
if(a.a.length<=0)throw H.h(P.o("May not create a SetMatcher with zero characters."))
z=new H.b_(0,0,[P.z,P.J])
for(y=new H.cO(a,a.gn(a),0,[H.a_(a,"S",0)]);y.A();)z.V(0,y.d,!0)
this.shw(z)},
aR:function(a){return this.a.dD(a)},
i:function(a){var z=this.a
return P.cZ(new H.e9(z,[H.v(z,0)]),0,null)},
$isat:1,
p:{
r:function(a){var z=new V.iI()
z.eR(a)
return z}}},cW:{"^":"a;a,b,0c,0d",
shQ:function(a){this.c=H.i(a,"$isb",[V.d3],"$asb")},
k:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.d3(this.a.j(0,b))
w.sa1(H.c([],[V.at]))
w.c=!1
C.a.h(this.c,w)
return w},
iS:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aR(a))return w}return},
i:function(a){return this.b}},eP:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.dz(this.b,"\n","\\n")
y=H.dz(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},d2:{"^":"a;a,b,0c",
sho:function(a){var z=P.n
this.c=H.i(a,"$isac",[z,z],"$asac")},
aw:function(a,b,c){var z,y,x
H.i(c,"$isb",[P.n],"$asb")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.x)(c),++y){x=c[y]
this.c.V(0,x,b)}},
i:function(a){return this.b}},j9:{"^":"a;0a,0b,0c",
shH:function(a){this.a=H.i(a,"$isac",[P.n,V.cW],"$asac")},
shM:function(a){this.b=H.i(a,"$isac",[P.n,V.d2],"$asac")},
j:function(a,b){var z=this.a.l(0,b)
if(z==null){z=new V.cW(this,b)
z.shQ(H.c([],[V.d3]))
z.d=null
this.a.V(0,b,z)}return z},
K:function(a){var z,y
z=this.b.l(0,a)
if(z==null){z=new V.d2(this,a)
y=P.n
z.sho(new H.b_(0,0,[y,y]))
this.b.V(0,a,z)}return z},
eh:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eP])
y=this.c
x=[P.z]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.aC(a,t)
r=y.iS(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cZ(w,0,null)
throw H.h(P.o("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cZ(w,0,null)
p=y.d
o=p.c.l(0,q)
u=new V.eP(o==null?p.b:o,q,t)}++t}}},
p:{
cd:function(){var z,y
z=new V.j9()
y=P.n
z.shH(new H.b_(0,0,[y,V.cW]))
z.shM(new H.b_(0,0,[y,V.d2]))
z.c=null
return z}}},d3:{"^":"ee;b,0c,0a",
i:function(a){return this.b.b+": "+this.cU(0)}}}],["","",,X,{"^":"",dK:{"^":"a;",$isaB:1},hv:{"^":"eF;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z}},ih:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.G()
this.f=z}return z},
aV:[function(a){var z
H.e(a,"$isu")
z=this.f
if(!(z==null))z.D(a)},function(){return this.aV(null)},"jJ","$1","$0","gcX",0,2,0],
sb3:function(a){var z,y
if(!J.R(this.b,a)){z=this.b
if(z!=null)z.gt().U(0,this.gcX())
y=this.b
this.b=a
if(a!=null)a.gt().h(0,this.gcX())
z=new D.I("mover",y,this.b,this,[U.a5])
z.b=!0
this.aV(z)}},
$isaB:1,
$isdK:1},eF:{"^":"a;"}}],["","",,V,{"^":"",
ld:function(a){P.j8(C.K,new V.le(a))},
aL:{"^":"a;0d",
sbY:function(a){this.d=H.i(a,"$isb",[[P.b,W.aN]],"$asb")},
bg:function(a){this.b=new P.hB(C.M)
this.c=null
this.sbY(H.c([],[[P.b,W.aN]]))},
H:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.aN]))
y=a.split("\n")
for(z=y.length,x=[W.aN],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.C(u)
s=this.b.fn(u,0,u.length)
r=s==null?u:s
C.j.eD(t,H.dz(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gbE(this.d),t)}},
e9:function(a){var z,y,x,w
H.i(a,"$isb",[P.n],"$asb")
this.sbY(H.c([],[[P.b,W.aN]]))
z=C.a.k(a,"\n")
y=this.c
if(y==null){y=this.bo()
this.c=y}for(y=y.eh(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)this.bF(y[w])}},
le:{"^":"t:37;a",
$1:function(a){H.e(a,"$isb3")
P.dy(C.k.eg(this.a.giW(),2)+" fps")}},
h9:{"^":"aL;a,0b,0c,0d",
bF:function(a){switch(a.a){case"Class":this.H(a.b,"#551")
break
case"Comment":this.H(a.b,"#777")
break
case"Id":this.H(a.b,"#111")
break
case"Num":this.H(a.b,"#191")
break
case"Reserved":this.H(a.b,"#119")
break
case"String":this.H(a.b,"#171")
break
case"Symbol":this.H(a.b,"#616")
break
case"Type":this.H(a.b,"#B11")
break
case"Whitespace":this.H(a.b,"#111")
break}},
bo:function(){var z,y,x,w
z=V.cd()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
x=V.L("a","z")
C.a.h(y.a,x)
x=V.L("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.r(new H.q("_"))
C.a.h(x.a,y)
y=V.L("0","9")
C.a.h(x.a,y)
y=V.L("a","z")
C.a.h(x.a,y)
y=V.L("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.L("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.L("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.r(new H.q("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.L("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.L("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Sym")
y=V.r(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").k(0,"Sym")
x=V.r(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"OpenDoubleStr")
y=V.r(new H.q('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
x=V.r(new H.q('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
y=V.r(new H.q("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
x=V.r(new H.q('"'))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.bg())
x=z.j(0,"Start").k(0,"OpenSingleStr")
y=V.r(new H.q("'"))
C.a.h(x.a,y)
y=z.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
x=V.r(new H.q("'"))
C.a.h(y.a,x)
x=z.j(0,"OpenSingleStr").k(0,"EscSingleStr")
y=V.r(new H.q("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscSingleStr").k(0,"OpenSingleStr")
x=V.r(new H.q("'"))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.bg())
x=z.j(0,"Start").k(0,"Slash")
y=V.r(new H.q("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"Comment")
x=V.r(new H.q("/"))
C.a.h(y.a,x)
x=z.j(0,"Comment").k(0,"EndComment")
y=V.r(new H.q("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.an()
w=[V.at]
x.sa1(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("\n"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"MLComment")
x=V.r(new H.q("*"))
C.a.h(y.a,x)
x=z.j(0,"MLComment").k(0,"MLCStar")
y=V.r(new H.q("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").k(0,"MLComment")
x=new V.an()
x.sa1(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").k(0,"EndComment")
x=V.r(new H.q("/"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Whitespace")
y=V.r(new H.q(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Whitespace").k(0,"Whitespace")
x=V.r(new H.q(" \n\t"))
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
x=[P.n]
y.aw(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aw(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aw(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
hw:{"^":"aL;a,0b,0c,0d",
bF:function(a){switch(a.a){case"Builtin":this.H(a.b,"#411")
break
case"Comment":this.H(a.b,"#777")
break
case"Id":this.H(a.b,"#111")
break
case"Num":this.H(a.b,"#191")
break
case"Preprocess":this.H(a.b,"#737")
break
case"Reserved":this.H(a.b,"#119")
break
case"Symbol":this.H(a.b,"#611")
break
case"Type":this.H(a.b,"#171")
break
case"Whitespace":this.H(a.b,"#111")
break}},
bo:function(){var z,y,x,w
z=V.cd()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
x=V.L("a","z")
C.a.h(y.a,x)
x=V.L("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.r(new H.q("_"))
C.a.h(x.a,y)
y=V.L("0","9")
C.a.h(x.a,y)
y=V.L("a","z")
C.a.h(x.a,y)
y=V.L("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.L("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.L("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.r(new H.q("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.L("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.L("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Sym")
y=V.r(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").k(0,"Sym")
x=V.r(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Slash")
y=V.r(new H.q("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"Comment")
x=V.r(new H.q("/"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Slash").k(0,"Sym").a,new V.bg())
x=z.j(0,"Comment").k(0,"EndComment")
y=V.r(new H.q("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.an()
w=[V.at]
x.sa1(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Preprocess")
x=V.r(new H.q("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"Preprocess")
y=new V.an()
y.sa1(H.c([],w))
C.a.h(x.a,y)
x=V.r(new H.q("\n"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"EndPreprocess")
y=V.r(new H.q("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Whitespace")
x=V.r(new H.q(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Whitespace").k(0,"Whitespace")
y=V.r(new H.q(" \n\t"))
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
y=[P.n]
x.aw(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aw(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aw(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
hx:{"^":"aL;a,0b,0c,0d",
bF:function(a){switch(a.a){case"Attr":this.H(a.b,"#911")
this.H("=","#111")
break
case"Id":this.H(a.b,"#111")
break
case"Other":this.H(a.b,"#111")
break
case"Reserved":this.H(a.b,"#119")
break
case"String":this.H(a.b,"#171")
break
case"Symbol":this.H(a.b,"#616")
break}},
bo:function(){var z,y,x
z=V.cd()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
x=V.L("a","z")
C.a.h(y.a,x)
x=V.L("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.r(new H.q("_"))
C.a.h(x.a,y)
y=V.L("0","9")
C.a.h(x.a,y)
y=V.L("a","z")
C.a.h(x.a,y)
y=V.L("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Id").k(0,"Attr")
x=V.r(new H.q("="))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Sym")
x=V.r(new H.q("</\\-!>="))
C.a.h(y.a,x)
x=z.j(0,"Sym").k(0,"Sym")
y=V.r(new H.q("</\\-!>="))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"OpenStr")
x=V.r(new H.q('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenStr").k(0,"CloseStr")
y=V.r(new H.q('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenStr").k(0,"EscStr")
x=V.r(new H.q("\\"))
C.a.h(y.a,x)
x=z.j(0,"EscStr").k(0,"OpenStr")
y=V.r(new H.q('"'))
C.a.h(x.a,y)
C.a.h(z.j(0,"OpenStr").k(0,"OpenStr").a,new V.bg())
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.bg())
y=z.j(0,"Other").k(0,"Other")
x=new V.an()
x.sa1(H.c([],[V.at]))
C.a.h(y.a,x)
y=V.r(new H.q('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.L("a","z")
C.a.h(x.a,y)
y=V.L("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.K("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.K("String")
y=z.j(0,"Id")
x=y.a.K("Id")
y.d=x
x.aw(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.n]))
x=z.j(0,"Attr")
x.d=x.a.K("Attr")
x=z.j(0,"Other")
x.d=x.a.K("Other")
return z}},
ij:{"^":"aL;a,0b,0c,0d",
e9:function(a){H.i(a,"$isb",[P.n],"$asb")
this.sbY(H.c([],[[P.b,W.aN]]))
this.H(C.a.k(a,"\n"),"#111")},
bF:function(a){},
bo:function(){return}},
iO:{"^":"a;0a,0b",
eT:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.n).B(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.n.B(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.j.B(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.j.B(v,u)}t=z.createElement("div")
this.a=t
C.j.B(v,t)
this.b=null
t=W.a0
W.V(z,"scroll",H.j(new V.iR(x),{func:1,ret:-1,args:[t]}),!1,t)},
du:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.i(a,"$isb",[P.n],"$asb")
this.hC()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.eh(C.a.j_(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.j.B(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.j.B(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.j.B(y,t)
break
case"Link":s=u.b
if(H.fM(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.k(r,1)
q.href=H.C(r[1])
q.textContent=H.C(r[0])
C.j.B(y,q)}else{p=P.ft(C.C,s,C.x,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
C.j.B(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.j.B(y,t)
break}}C.j.B(this.a,y)},
er:function(a){var z,y,x,w
z=new V.h9("dart")
z.bg("dart")
y=new V.hw("glsl")
y.bg("glsl")
x=new V.hx("html")
x.bg("html")
w=C.a.iT(H.c([z,y,x],[V.aL]),new V.iS(a))
if(w!=null)return w
z=new V.ij("plain")
z.bg("plain")
return z},
dt:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.i(a2,"$isb",[P.n],"$asb")
z=H.c([],[P.z])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.du(w).bM(w,"+")){C.a.V(a2,x,C.i.be(w,1))
C.a.h(z,1)
y=!0}else if(C.i.bM(w,"-")){C.a.V(a2,x,C.i.be(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.er(a0)
v.e9(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.j.B(t,s)
C.j.B(this.a,t)
r=P.ft(C.C,a,C.x,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.dC(null)
n.href="#"+r
n.textContent=a
C.j.B(o,n)
C.v.B(p,o)
C.m.B(q,p)
C.p.B(s,q)
if(y)for(m=a1,l=m,x=0;k=v.d,x<k.length;++x){w=k[x]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums codeLineLight"
h=u.createElement("td")
h.className="codeLineNums"
if(x>=z.length)return H.k(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.x)(w),++e)C.v.B(f,w[e])
C.m.B(j,i)
C.m.B(j,h)
C.m.B(j,f)
C.p.B(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.x)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gO(w);b.A();)C.v.B(h,b.gF())
C.m.B(j,i)
C.m.B(j,h)
C.p.B(s,j)}},
hC:function(){var z,y,x,w
if(this.b!=null)return
z=V.cd()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Bold")
x=V.r(new H.q("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").k(0,"Bold")
x=new V.an()
w=[V.at]
x.sa1(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("*"))
C.a.h(x.a,y)
y=z.j(0,"Bold").k(0,"BoldEnd")
x=V.r(new H.q("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Italic")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Italic").k(0,"Italic")
x=new V.an()
x.sa1(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("_"))
C.a.h(x.a,y)
y=z.j(0,"Italic").k(0,"ItalicEnd")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Code")
x=V.r(new H.q("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Code").k(0,"Code")
x=new V.an()
x.sa1(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("`"))
C.a.h(x.a,y)
y=z.j(0,"Code").k(0,"CodeEnd")
x=V.r(new H.q("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"LinkHead")
x=V.r(new H.q("["))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"LinkHead").k(0,"LinkTail")
x=V.r(new H.q("|"))
C.a.h(y.a,x)
x=z.j(0,"LinkHead").k(0,"LinkEnd")
y=V.r(new H.q("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkHead").k(0,"LinkHead")
y=new V.an()
y.sa1(H.c([],w))
C.a.h(x.a,y)
x=V.r(new H.q("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").k(0,"LinkEnd")
y=V.r(new H.q("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").k(0,"LinkTail")
y=new V.an()
y.sa1(H.c([],w))
C.a.h(x.a,y)
x=V.r(new H.q("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.bg())
x=z.j(0,"Other").k(0,"Other")
y=new V.an()
y.sa1(H.c([],w))
C.a.h(x.a,y)
x=V.r(new H.q("*_`["))
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
p:{
iP:function(a,b){var z=new V.iO()
z.eT(a,!0)
return z}}},
iR:{"^":"t:21;a",
$1:function(a){P.eN(C.q,new V.iQ(this.a))}},
iQ:{"^":"t:2;a",
$0:function(){var z,y,x
z=C.k.ah(document.documentElement.scrollTop)
y=this.a.style
x=H.f(-0.01*z)+"px"
y.top=x}},
iS:{"^":"t:38;a",
$1:function(a){return H.e(a,"$isaL").a===this.a}}}],["","",,E,{"^":"",
fI:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=V.iP("Test 007",!0)
y=W.cD(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.j.B(z.a,y)
x=[P.n]
z.du(H.c(["A test of the Material Lighting shader with bumpy 2D textures and ","a directional light. The lighting and bump is being applied to ","ambient, diffuse, and specular 2D texturing."],x))
z.du(H.c(["\xab[Back to Tests|../]"],x))
w=C.z.eu(document,"testCanvas")
if(w==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
v=E.j6(w,!0,!0,!0,!1)
u=new E.ar()
u.a=""
u.b=!0
x=E.ar
u.sfl(0,O.cG(x))
u.y.bd(u.gj6(),u.gj8())
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
u.scS(0,null)
u.sb3(null)
t=F.eA()
F.by(t,null,null,1,1,1,0,0,1)
F.by(t,null,null,1,1,0,1,0,3)
F.by(t,null,null,1,1,0,0,1,2)
F.by(t,null,null,1,1,-1,0,0,0)
F.by(t,null,null,1,1,0,-1,0,0)
F.by(t,null,null,1,1,0,0,-1,3)
t.aK()
u.scS(0,t)
s=new U.e1()
r=U.a5
s.bP(r)
s.bd(s.gfS(),s.ghd())
s.e=null
s.f=V.bM()
s.r=0
q=v.r
p=new U.js()
o=U.cH()
o.scL(0,!0)
o.scD(6.283185307179586)
o.scF(0)
o.sa4(0,0)
o.scE(100)
o.sR(0)
o.scn(0.5)
p.b=o
n=p.gaF()
o.gt().h(0,n)
o=U.cH()
o.scL(0,!0)
o.scD(6.283185307179586)
o.scF(0)
o.sa4(0,0)
o.scE(100)
o.sR(0)
o.scn(0.5)
p.c=o
o.gt().h(0,n)
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
m=new X.av(!1,!1,!1)
l=p.d
p.d=m
o=[X.av]
n=new D.I("modifiers",l,m,p,o)
n.b=!0
p.P(n)
n=p.f
if(n!==!1){p.f=!1
n=new D.I("invertX",n,!1,p,[P.J])
n.b=!0
p.P(n)}n=p.r
if(n!==!0){p.r=!0
n=new D.I("invertY",n,!0,p,[P.J])
n.b=!0
p.P(n)}p.b0(q)
s.h(0,p)
q=v.r
p=new U.jr()
n=U.cH()
n.scL(0,!0)
n.scD(6.283185307179586)
n.scF(0)
n.sa4(0,0)
n.scE(100)
n.sR(0)
n.scn(0.2)
p.b=n
n.gt().h(0,p.gaF())
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
m=new X.av(!0,!1,!1)
l=p.c
p.c=m
n=new D.I("modifiers",l,m,p,o)
n.b=!0
p.P(n)
p.b0(q)
s.h(0,p)
q=v.r
p=new U.jt()
p.c=0.01
p.d=0
p.e=0
m=new X.av(!1,!1,!1)
p.b=m
o=new D.I("modifiers",null,m,p,o)
o.b=!0
p.P(o)
p.b0(q)
s.h(0,p)
u.sb3(s)
k=v.f.cB("../resources/ScrewColor.png")
j=new O.hZ()
j.sfh(O.cG(V.ad))
j.e.bd(j.gfU(),j.gfV())
s=new O.b0(j,"emission")
s.c=C.c
s.f=new V.Y(0,0,0)
j.f=s
s=new O.b0(j,"ambient")
s.c=C.c
s.f=new V.Y(0,0,0)
j.r=s
s=new O.b0(j,"diffuse")
s.c=C.c
s.f=new V.Y(0,0,0)
j.x=s
s=new O.b0(j,"invDiffuse")
s.c=C.c
s.f=new V.Y(0,0,0)
j.y=s
s=new O.i5(j,"specular")
s.c=C.c
s.f=new V.Y(0,0,0)
s.ch=100
j.z=s
s=new O.i2(j,"bump")
s.c=C.c
j.Q=s
j.ch=null
s=new O.b0(j,"reflect")
s.c=C.c
s.f=new V.Y(0,0,0)
j.cx=s
s=new O.i4(j,"refract")
s.c=C.c
s.f=new V.Y(0,0,0)
s.ch=1
j.cy=s
s=new O.i1(j,"alpha")
s.c=C.c
s.f=1
j.db=s
s=new D.hM()
s.bP(D.X)
s.sfs(H.c([],[D.bX]))
s.shi(H.c([],[D.en]))
s.shG(H.c([],[D.eB]))
s.shR(H.c([],[D.eJ]))
s.shS(H.c([],[D.eK]))
s.shT(H.c([],[D.eL]))
s.Q=null
s.ch=null
s.cR(s.gfT(),s.ghc(),s.ghe())
j.dx=s
q=s.Q
if(q==null){q=D.G()
s.Q=q
s=q}else s=q
s.h(0,j.ghq())
s=j.dx
q=s.ch
if(q==null){q=D.G()
s.ch=q
s=q}else s=q
s.h(0,j.gbh())
j.dy=null
s=j.dx
i=V.f7()
q=U.dP(V.eg(V.ep(),i,new V.Q(0,0,-1)))
h=new V.Y(1,1,1)
p=new D.bX()
p.c=new V.Y(1,1,1)
p.a=V.jw()
l=p.b
p.b=q
q.gt().h(0,p.gf_())
r=new D.I("mover",l,p.b,p,[r])
r.b=!0
p.aA(r)
if(!p.c.u(0,h)){l=p.c
p.c=h
r=new D.I("color",l,h,p,[V.Y])
r.b=!0
p.aA(r)}s.h(0,p)
s=j.r
s.sao(0,new V.Y(0.2,0.2,0.2))
s=j.x
s.sao(0,new V.Y(0.8,0.8,0.8))
j.r.sbI(k)
j.x.sbI(k)
j.Q.sbI(v.f.cB("../resources/ScrewBumpMap.png"))
j.z.sao(0,new V.Y(1,1,1))
j.z.sbI(v.f.cB("../resources/ScrewSpecular.png"))
s=j.z
if(s.c===C.c){s.c=C.f
s.bO()
s.c8(100)
r=s.a
r.a=null
r.Y(null)}s.c8(10)
s=new M.hm()
s.sf0(0,O.cG(x))
s.d.bd(s.gfX(),s.gfY())
s.e=null
s.f=null
s.r=null
s.x=null
g=new X.ih()
g.c=1.0471975511965976
g.d=0.1
g.e=2000
g.sb3(null)
x=g.c
if(!$.m.$2(x,1.0471975511965976)){l=g.c
g.c=1.0471975511965976
x=new D.I("fov",l,1.0471975511965976,g,[P.w])
x.b=!0
g.aV(x)}x=g.d
if(!$.m.$2(x,0.1)){l=g.d
g.d=0.1
x=new D.I("near",l,0.1,g,[P.w])
x.b=!0
g.aV(x)}x=g.e
if(!$.m.$2(x,2000)){l=g.e
g.e=2000
x=new D.I("far",l,2000,g,[P.w])
x.b=!0
g.aV(x)}x=s.a
if(x!==g){if(x!=null)x.gt().U(0,s.gak())
l=s.a
s.a=g
g.gt().h(0,s.gak())
x=new D.I("camera",l,s.a,s,[X.dK])
x.b=!0
s.aB(x)}f=new X.hv()
x=new V.bU(0,0,0,1)
f.a=x
f.b=!0
f.c=2000
f.d=!0
f.e=0
f.f=!1
x=$.ew
if(x==null){x=V.ev(0,0,1,1)
$.ew=x}f.r=x
x=s.b
if(x!==f){if(x!=null)x.gt().U(0,s.gak())
l=s.b
s.b=f
f.gt().h(0,s.gak())
x=new D.I("target",l,s.b,s,[X.eF])
x.b=!0
s.aB(x)}s.see(null)
s.see(j)
s.d.h(0,u)
s.a.sb3(U.dP(V.au(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
x=v.d
if(x!==s){if(x!=null)x.gt().U(0,v.gcW())
v.d=s
s.gt().h(0,v.gcW())
v.eW()}x=v.z
if(x==null){x=D.G()
v.z=x}s={func:1,ret:-1,args:[D.u]}
r=H.j(new E.l6(z,j),s)
if(x.b==null)x.saY(H.c([],[s]))
x=x.b;(x&&C.a).h(x,r)
V.ld(v)},
l6:{"^":"t:6;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isu")
z=this.a
y=this.b
x=y.a
w=[P.n]
z.dt("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dt("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.N=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e5.prototype
return J.e4.prototype}if(typeof a=="string")return J.c5.prototype
if(a==null)return J.e6.prototype
if(typeof a=="boolean")return J.hH.prototype
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.a)return a
return J.cp(a)}
J.co=function(a){if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.a)return a
return J.cp(a)}
J.dt=function(a){if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.a)return a
return J.cp(a)}
J.kT=function(a){if(typeof a=="number")return J.c4.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cf.prototype
return a}
J.du=function(a){if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cf.prototype
return a}
J.a3=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.a)return a
return J.cp(a)}
J.R=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).u(a,b)}
J.fO=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kT(a).ai(a,b)}
J.fP=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.l3(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.co(a).l(a,b)}
J.fQ=function(a,b,c,d){return J.a3(a).fd(a,b,c,d)}
J.bR=function(a,b){return J.a3(a).hm(a,b)}
J.dA=function(a,b){return J.a3(a).B(a,b)}
J.cv=function(a,b,c){return J.co(a).iy(a,b,c)}
J.cw=function(a,b){return J.dt(a).a2(a,b)}
J.fR=function(a){return J.a3(a).gio(a)}
J.aW=function(a){return J.N(a).gX(a)}
J.bf=function(a){return J.dt(a).gO(a)}
J.aX=function(a){return J.co(a).gn(a)}
J.fS=function(a){return J.a3(a).gjk(a)}
J.fT=function(a){return J.a3(a).gjv(a)}
J.cx=function(a,b){return J.a3(a).aU(a,b)}
J.dB=function(a){return J.dt(a).jm(a)}
J.fU=function(a,b,c){return J.du(a).bf(a,b,c)}
J.fV=function(a){return J.du(a).jD(a)}
J.a6=function(a){return J.N(a).i(a)}
I.aV=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.n=W.bS.prototype
C.o=W.cC.prototype
C.y=W.cE.prototype
C.j=W.aN.prototype
C.J=W.he.prototype
C.L=W.hy.prototype
C.z=W.hA.prototype
C.N=J.D.prototype
C.a=J.aZ.prototype
C.O=J.e4.prototype
C.h=J.e5.prototype
C.r=J.e6.prototype
C.k=J.c4.prototype
C.i=J.c5.prototype
C.V=J.bK.prototype
C.Z=W.ib.prototype
C.D=J.ii.prototype
C.E=W.iv.prototype
C.b=P.cU.prototype
C.v=W.iZ.prototype
C.p=W.j_.prototype
C.m=W.j0.prototype
C.w=J.cf.prototype
C.F=W.bw.prototype
C.G=W.jH.prototype
C.H=new P.ig()
C.I=new P.jv()
C.l=new P.kd()
C.c=new A.bV(0,"ColorSourceType.None")
C.f=new A.bV(1,"ColorSourceType.Solid")
C.d=new A.bV(2,"ColorSourceType.Texture2D")
C.e=new A.bV(3,"ColorSourceType.TextureCube")
C.q=new P.bi(0)
C.K=new P.bi(5e6)
C.M=new P.hC("element",!0,!1,!1,!1)
C.P=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.Q=function(hooks) {
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

C.R=function(getTagFallback) {
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
C.S=function() {
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
C.T=function(hooks) {
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
C.U=function(hooks) {
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
C.W=H.c(I.aV(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.X=H.c(I.aV(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.n])
C.Y=H.c(I.aV([]),[P.n])
C.C=H.c(I.aV([0,0,65498,45055,65535,34815,65534,18431]),[P.z])
C.t=H.c(I.aV(["bind","if","ref","repeat","syntax"]),[P.n])
C.u=H.c(I.aV(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.x=new P.ju(!1)
$.aq=0
$.bh=null
$.dF=null
$.dj=!1
$.fG=null
$.fB=null
$.fL=null
$.cn=null
$.cr=null
$.dv=null
$.b8=null
$.bB=null
$.bC=null
$.dk=!1
$.M=C.l
$.aA=null
$.cI=null
$.e_=null
$.dZ=null
$.dV=null
$.dU=null
$.dT=null
$.dS=null
$.m=V.i6()
$.eh=null
$.eo=null
$.bq=null
$.ew=null
$.f3=null
$.f6=null
$.f5=null
$.cg=null
$.f4=null
$.em=null
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
I.$lazy(y,x,w)}})(["dR","$get$dR",function(){return H.fF("_$dart_dartClosure")},"cL","$get$cL",function(){return H.fF("_$dart_js")},"eR","$get$eR",function(){return H.ax(H.ce({
toString:function(){return"$receiver$"}}))},"eS","$get$eS",function(){return H.ax(H.ce({$method$:null,
toString:function(){return"$receiver$"}}))},"eT","$get$eT",function(){return H.ax(H.ce(null))},"eU","$get$eU",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eY","$get$eY",function(){return H.ax(H.ce(void 0))},"eZ","$get$eZ",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eW","$get$eW",function(){return H.ax(H.eX(null))},"eV","$get$eV",function(){return H.ax(function(){try{null.$method$}catch(z){return z.message}}())},"f0","$get$f0",function(){return H.ax(H.eX(void 0))},"f_","$get$f_",function(){return H.ax(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dg","$get$dg",function(){return P.jI()},"bD","$get$bD",function(){return[]},"fs","$get$fs",function(){return P.iz("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dQ","$get$dQ",function(){return{}},"fh","$get$fh",function(){return P.ea(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.n)},"dh","$get$dh",function(){return P.hP(P.n,P.bI)},"fa","$get$fa",function(){return Z.ah(0)},"f8","$get$f8",function(){return Z.ah(511)},"aH","$get$aH",function(){return Z.ah(1)},"aG","$get$aG",function(){return Z.ah(2)},"aF","$get$aF",function(){return Z.ah(4)},"aI","$get$aI",function(){return Z.ah(8)},"aJ","$get$aJ",function(){return Z.ah(16)},"bu","$get$bu",function(){return Z.ah(32)},"bv","$get$bv",function(){return Z.ah(64)},"f9","$get$f9",function(){return Z.ah(96)},"b6","$get$b6",function(){return Z.ah(128)},"aE","$get$aE",function(){return Z.ah(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:P.H},{func:1,ret:-1},{func:1,ret:-1,args:[W.am]},{func:1,ret:P.H,args:[F.a1]},{func:1,ret:P.H,args:[D.u]},{func:1,ret:-1,args:[P.z,[P.l,E.ar]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:-1,args:[W.a0]},{func:1,ret:-1,args:[P.z,[P.l,V.ad]]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.n,args:[P.z]},{func:1,ret:P.J,args:[W.A]},{func:1,ret:P.H,args:[,]},{func:1,args:[,]},{func:1,ret:P.J,args:[P.n]},{func:1,ret:-1,args:[P.z,[P.l,U.a5]]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.z,[P.l,D.X]]},{func:1,ret:P.H,args:[W.a0]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:P.J,args:[W.O,P.n,P.n,W.bP]},{func:1,ret:P.J,args:[W.aw]},{func:1,ret:-1,args:[W.bw]},{func:1,ret:P.J,args:[P.w,P.w]},{func:1,ret:P.J,args:[[P.l,D.X]]},{func:1,ret:W.O,args:[W.A]},{func:1,ret:-1,args:[W.A,W.A]},{func:1,ret:P.n,args:[P.n]},{func:1,args:[W.a0]},{func:1,ret:P.H,args:[F.aR,P.w,P.w]},{func:1,ret:P.H,args:[,],opt:[,]},{func:1,ret:[P.aK,,],args:[,]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[P.b3]},{func:1,ret:P.J,args:[V.aL]},{func:1,args:[P.n]},{func:1,args:[,P.n]},{func:1,ret:P.H,args:[P.a9]}]
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
if(x==y)H.lg(d||a)
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
Isolate.aV=a.aV
Isolate.dr=a.dr
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
if(typeof dartMainRunner==="function")dartMainRunner(E.fI,[])
else E.fI([])})})()
//# sourceMappingURL=test.dart.js.map
