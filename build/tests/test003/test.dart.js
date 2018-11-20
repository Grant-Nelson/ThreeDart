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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dd(this,d,e,f,true,false,a1).prototype
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
var dart=[["","",,H,{"^":"",la:{"^":"a;a"}}],["","",,J,{"^":"",
dj:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cg:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.di==null){H.kI()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.f(P.eJ("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cB()]
if(v!=null)return v
v=H.kN(a)
if(v!=null)return v
if(typeof a=="function")return C.T
y=Object.getPrototypeOf(a)
if(y==null)return C.C
if(y===Object.prototype)return C.C
if(typeof w=="function"){Object.defineProperty(w,$.$get$cB(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
G:{"^":"a;",
t:function(a,b){return a===b},
gT:function(a){return H.bi(a)},
i:["eg",function(a){return"Instance of '"+H.aV(a)+"'"}],
"%":"CanvasRenderingContext2D|DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer|WebGLTexture"},
hp:{"^":"G;",
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isH:1},
dS:{"^":"G;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$isE:1},
cC:{"^":"G;",
gT:function(a){return 0},
i:["ei",function(a){return String(a)}]},
i1:{"^":"cC;"},
bJ:{"^":"cC;"},
bB:{"^":"cC;",
i:function(a){var z=a[$.$get$dF()]
if(z==null)return this.ei(a)
return"JavaScript function for "+H.e(J.ak(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isby:1},
aR:{"^":"G;$ti",
h:function(a,b){H.z(b,H.v(a,0))
if(!!a.fixed$length)H.r(P.aa("add"))
a.push(b)},
iG:function(a,b){var z
if(!!a.fixed$length)H.r(P.aa("removeAt"))
z=a.length
if(b>=z)throw H.f(P.bH(b,null,null))
return a.splice(b,1)[0]},
L:function(a,b){var z
if(!!a.fixed$length)H.r(P.aa("remove"))
for(z=0;z<a.length;++z)if(J.P(a[z],b)){a.splice(z,1)
return!0}return!1},
W:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.v(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.f(P.aI(a))}},
k:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.R(z,y,H.e(a[y]))
return z.join(b)},
ii:function(a){return this.k(a,"")},
ia:function(a,b,c){var z,y,x
H.j(b,{func:1,ret:P.H,args:[H.v(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.f(P.aI(a))}throw H.f(H.c_())},
i9:function(a,b){return this.ia(a,b,null)},
Y:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
ef:function(a,b,c){var z=a.length
if(b>z)throw H.f(P.a4(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.a4(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.v(a,0)])
return H.c(a.slice(b,c),[H.v(a,0)])},
gi8:function(a){if(a.length>0)return a[0]
throw H.f(H.c_())},
gbo:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.f(H.c_())},
d_:function(a,b){var z,y
H.j(b,{func:1,ret:P.H,args:[H.v(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.f(P.aI(a))}return!1},
O:function(a,b){var z
for(z=0;z<a.length;++z)if(J.P(a[z],b))return!0
return!1},
i:function(a){return P.cA(a,"[","]")},
gK:function(a){return new J.at(a,a.length,0,[H.v(a,0)])},
gT:function(a){return H.bi(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.r(P.aa("set length"))
if(b<0)throw H.f(P.a4(b,0,null,"newLength",null))
a.length=b},
R:function(a,b,c){H.z(c,H.v(a,0))
if(!!a.immutable$list)H.r(P.aa("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bu(a,b))
a[b]=c},
$isl:1,
$isb:1,
p:{
ho:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.cp(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.a4(a,0,4294967295,"length",null))
return J.dQ(new Array(a),b)},
dQ:function(a,b){return J.c0(H.c(a,[b]))},
c0:function(a){H.cj(a)
a.fixed$length=Array
return a}}},
l9:{"^":"aR;$ti"},
at:{"^":"a;a,b,c,0d,$ti",
scI:function(a){this.d=H.z(a,H.v(this,0))},
gD:function(){return this.d},
v:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.f(H.w(z))
x=this.c
if(x>=y){this.scI(null)
return!1}this.scI(z[x]);++this.c
return!0},
$isaK:1},
bz:{"^":"G;",
dA:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.f(P.aa(""+a+".floor()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.aa(""+a+".round()"))},
dQ:function(a,b){var z,y
if(b>20)throw H.f(P.a4(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
I:function(a,b){if(typeof b!=="number")throw H.f(H.aM(b))
return a*b},
e8:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
em:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cV(a,b)},
V:function(a,b){return(a|0)===a?a/b|0:this.cV(a,b)},
cV:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.f(P.aa("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
b2:function(a,b){var z
if(a>0)z=this.h5(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
h5:function(a,b){return b>31?0:a>>>b},
bv:function(a,b){if(typeof b!=="number")throw H.f(H.aM(b))
return a<b},
$isu:1,
$isaj:1},
dR:{"^":"bz;",$isy:1},
hq:{"^":"bz;"},
bA:{"^":"G;",
bY:function(a,b){if(b<0)throw H.f(H.bu(a,b))
if(b>=a.length)H.r(H.bu(a,b))
return a.charCodeAt(b)},
au:function(a,b){if(b>=a.length)throw H.f(H.bu(a,b))
return a.charCodeAt(b)},
P:function(a,b){H.B(b)
if(typeof b!=="string")throw H.f(P.cp(b,null,null))
return a+b},
ee:function(a,b,c){var z
if(c>a.length)throw H.f(P.a4(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bx:function(a,b){return this.ee(a,b,0)},
aY:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.bH(b,null,null))
if(b>c)throw H.f(P.bH(b,null,null))
if(c>a.length)throw H.f(P.bH(c,null,null))
return a.substring(b,c)},
aX:function(a,b){return this.aY(a,b,null)},
iV:function(a){return a.toLowerCase()},
I:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.G)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iv:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.I(c,z)+a},
an:function(a,b){return this.iv(a,b," ")},
hR:function(a,b,c){if(c>a.length)throw H.f(P.a4(c,0,a.length,null,null))
return H.fu(a,b,c)},
i:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gn:function(a){return a.length},
$ise5:1,
$ism:1}}],["","",,H,{"^":"",
c_:function(){return new P.cN("No element")},
hn:function(){return new P.cN("Too many elements")},
o:{"^":"j8;a",
gn:function(a){return this.a.length},
l:function(a,b){return C.i.bY(this.a,b)},
$aseK:function(){return[P.y]},
$asM:function(){return[P.y]},
$asl:function(){return[P.y]},
$asb:function(){return[P.y]}},
dM:{"^":"l;"},
c2:{"^":"dM;$ti",
gK:function(a){return new H.cE(this,this.gn(this),0,[H.W(this,"c2",0)])},
cf:function(a,b){return this.eh(0,H.j(b,{func:1,ret:P.H,args:[H.W(this,"c2",0)]}))}},
cE:{"^":"a;a,b,c,0d,$ti",
saK:function(a){this.d=H.z(a,H.v(this,0))},
gD:function(){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.cf(z)
x=y.gn(z)
if(this.b!==x)throw H.f(P.aI(z))
w=this.c
if(w>=x){this.saK(null)
return!1}this.saK(y.Y(z,w));++this.c
return!0},
$isaK:1},
hG:{"^":"l;a,b,$ti",
gK:function(a){return new H.hH(J.b8(this.a),this.b,this.$ti)},
gn:function(a){return J.aP(this.a)},
Y:function(a,b){return this.b.$1(J.cn(this.a,b))},
$asl:function(a,b){return[b]}},
hH:{"^":"aK;0a,b,c,$ti",
saK:function(a){this.a=H.z(a,H.v(this,1))},
v:function(){var z=this.b
if(z.v()){this.saK(this.c.$1(z.gD()))
return!0}this.saK(null)
return!1},
gD:function(){return this.a},
$asaK:function(a,b){return[b]}},
hI:{"^":"c2;a,b,$ti",
gn:function(a){return J.aP(this.a)},
Y:function(a,b){return this.b.$1(J.cn(this.a,b))},
$asc2:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
d3:{"^":"l;a,b,$ti",
gK:function(a){return new H.jq(J.b8(this.a),this.b,this.$ti)}},
jq:{"^":"aK;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gD()))return!0
return!1},
gD:function(){return this.a.gD()}},
bZ:{"^":"a;$ti"},
eK:{"^":"a;$ti"},
j8:{"^":"c1+eK;"}}],["","",,H,{"^":"",
b7:function(a){var z,y
z=H.B(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kB:function(a){return init.types[H.Z(a)]},
kL:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isaf},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ak(a)
if(typeof z!=="string")throw H.f(H.aM(a))
return z},
bi:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aV:function(a){return H.i3(a)+H.da(H.aN(a),0,null)},
i3:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.M||!!z.$isbJ){u=C.A(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.b7(w.length>1&&C.i.au(w,0)===36?C.i.aX(w,1):w)},
ea:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
ib:function(a){var z,y,x,w
z=H.c([],[P.y])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.w)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.f(H.aM(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.b2(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.f(H.aM(w))}return H.ea(z)},
eb:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.f(H.aM(x))
if(x<0)throw H.f(H.aM(x))
if(x>65535)return H.ib(a)}return H.ea(a)},
cJ:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.b2(z,10))>>>0,56320|z&1023)}throw H.f(P.a4(a,0,1114111,null,null))},
aU:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ia:function(a){var z=H.aU(a).getFullYear()+0
return z},
i8:function(a){var z=H.aU(a).getMonth()+1
return z},
i4:function(a){var z=H.aU(a).getDate()+0
return z},
i5:function(a){var z=H.aU(a).getHours()+0
return z},
i7:function(a){var z=H.aU(a).getMinutes()+0
return z},
i9:function(a){var z=H.aU(a).getSeconds()+0
return z},
i6:function(a){var z=H.aU(a).getMilliseconds()+0
return z},
b5:function(a){throw H.f(H.aM(a))},
h:function(a,b){if(a==null)J.aP(a)
throw H.f(H.bu(a,b))},
bu:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
z=H.Z(J.aP(a))
if(!(b<0)){if(typeof z!=="number")return H.b5(z)
y=b>=z}else y=!0
if(y)return P.aQ(b,a,"index",null,z)
return P.bH(b,"index",null)},
kw:function(a,b,c){if(a>c)return new P.c5(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c5(a,c,!0,b,"end","Invalid value")
return new P.aG(!0,b,"end",null)},
aM:function(a){return new P.aG(!0,a,null,null)},
f:function(a){var z
if(a==null)a=new P.e4()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fv})
z.name=""}else z.toString=H.fv
return z},
fv:function(){return J.ak(this.dartException)},
r:function(a){throw H.f(a)},
w:function(a){throw H.f(P.aI(a))},
a5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.b2(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cD(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e3(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ey()
u=$.$get$ez()
t=$.$get$eA()
s=$.$get$eB()
r=$.$get$eF()
q=$.$get$eG()
p=$.$get$eD()
$.$get$eC()
o=$.$get$eI()
n=$.$get$eH()
m=v.a1(y)
if(m!=null)return z.$1(H.cD(H.B(y),m))
else{m=u.a1(y)
if(m!=null){m.method="call"
return z.$1(H.cD(H.B(y),m))}else{m=t.a1(y)
if(m==null){m=s.a1(y)
if(m==null){m=r.a1(y)
if(m==null){m=q.a1(y)
if(m==null){m=p.a1(y)
if(m==null){m=s.a1(y)
if(m==null){m=o.a1(y)
if(m==null){m=n.a1(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e3(H.B(y),m))}}return z.$1(new H.j7(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ek()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aG(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ek()
return a},
b4:function(a){var z
if(a==null)return new H.f7(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.f7(a)},
ky:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.R(0,a[y],a[x])}return b},
kK:function(a,b,c,d,e,f){H.i(a,"$isby")
switch(H.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.p("Unsupported number of arguments for wrapped closure"))},
b2:function(a,b){var z
H.Z(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kK)
a.$identity=z
return z},
fN:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.L(d).$isb){z.$reflectionInfo=d
x=H.ih(z).r}else x=d
w=e?Object.create(new H.iF().constructor.prototype):Object.create(new H.cr(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.al
if(typeof u!=="number")return u.P()
$.al=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dB(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kB,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dv:H.cs
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.f("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dB(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
fK:function(a,b,c,d){var z=H.cs
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dB:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fM(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fK(y,!w,z,b)
if(y===0){w=$.al
if(typeof w!=="number")return w.P()
$.al=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.ba
if(v==null){v=H.bR("self")
$.ba=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.al
if(typeof w!=="number")return w.P()
$.al=w+1
t+=w
w="return function("+t+"){return this."
v=$.ba
if(v==null){v=H.bR("self")
$.ba=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fL:function(a,b,c,d){var z,y
z=H.cs
y=H.dv
switch(b?-1:a){case 0:throw H.f(H.ir("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fM:function(a,b){var z,y,x,w,v,u,t,s
z=$.ba
if(z==null){z=H.bR("self")
$.ba=z}y=$.du
if(y==null){y=H.bR("receiver")
$.du=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fL(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.al
if(typeof y!=="number")return y.P()
$.al=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.al
if(typeof y!=="number")return y.P()
$.al=y+1
return new Function(z+y+"}")()},
dd:function(a,b,c,d,e,f,g){return H.fN(a,b,H.Z(c),d,!!e,!!f,g)},
B:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.ai(a,"String"))},
lz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.ai(a,"double"))},
kR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.ai(a,"num"))},
db:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.ai(a,"bool"))},
Z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.ai(a,"int"))},
fs:function(a,b){throw H.f(H.ai(a,H.b7(H.B(b).substring(3))))},
kT:function(a,b){throw H.f(H.fI(a,H.b7(H.B(b).substring(3))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.fs(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.kT(a,b)},
cj:function(a){if(a==null)return a
if(!!J.L(a).$isb)return a
throw H.f(H.ai(a,"List<dynamic>"))},
kM:function(a,b){var z
if(a==null)return a
z=J.L(a)
if(!!z.$isb)return a
if(z[b])return a
H.fs(a,b)},
fm:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Z(z)]
else return a.$S()}return},
bO:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fm(J.L(a))
if(z==null)return!1
return H.fd(z,null,b,null)},
j:function(a,b){var z,y
if(a==null)return a
if($.d7)return a
$.d7=!0
try{if(H.bO(a,b))return a
z=H.cl(b)
y=H.ai(a,z)
throw H.f(y)}finally{$.d7=!1}},
df:function(a,b){if(a!=null&&!H.dc(a,b))H.r(H.ai(a,H.cl(b)))
return a},
fh:function(a){var z,y
z=J.L(a)
if(!!z.$ist){y=H.fm(z)
if(y!=null)return H.cl(y)
return"Closure"}return H.aV(a)},
kY:function(a){throw H.f(new P.fQ(H.B(a)))},
fn:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aN:function(a){if(a==null)return
return a.$ti},
lA:function(a,b,c){return H.b6(a["$as"+H.e(c)],H.aN(b))},
ch:function(a,b,c,d){var z
H.B(c)
H.Z(d)
z=H.b6(a["$as"+H.e(c)],H.aN(b))
return z==null?null:z[d]},
W:function(a,b,c){var z
H.B(b)
H.Z(c)
z=H.b6(a["$as"+H.e(b)],H.aN(a))
return z==null?null:z[c]},
v:function(a,b){var z
H.Z(b)
z=H.aN(a)
return z==null?null:z[b]},
cl:function(a){return H.aL(a,null)},
aL:function(a,b){var z,y
H.k(b,"$isb",[P.m],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.b7(a[0].builtin$cls)+H.da(a,1,b)
if(typeof a=="function")return H.b7(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.e(b[y])}if('func' in a)return H.ki(a,b)
if('futureOr' in a)return"FutureOr<"+H.aL("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ki:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.m]
H.k(b,"$isb",z,"$asb")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.i.P(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aL(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aL(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aL(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aL(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kx(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.B(z[l])
n=n+m+H.aL(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
da:function(a,b,c){var z,y,x,w,v,u
H.k(c,"$isb",[P.m],"$asb")
if(a==null)return""
z=new P.bj("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aL(u,c)}return"<"+z.i(0)+">"},
b6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bN:function(a,b,c,d){var z,y
H.B(b)
H.cj(c)
H.B(d)
if(a==null)return!1
z=H.aN(a)
y=J.L(a)
if(y[b]==null)return!1
return H.fk(H.b6(y[d],z),null,c,null)},
k:function(a,b,c,d){H.B(b)
H.cj(c)
H.B(d)
if(a==null)return a
if(H.bN(a,b,c,d))return a
throw H.f(H.ai(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.b7(b.substring(3))+H.da(c,0,null),init.mangledGlobalNames)))},
fk:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ad(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ad(a[y],b,c[y],d))return!1
return!0},
lx:function(a,b,c){return a.apply(b,H.b6(J.L(b)["$as"+H.e(c)],H.aN(b)))},
fp:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="E"||a===-1||a===-2||H.fp(z)}return!1},
dc:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="E"||b===-1||b===-2||H.fp(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dc(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bO(a,b)}z=J.L(a).constructor
y=H.aN(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.ad(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.dc(a,b))throw H.f(H.ai(a,H.cl(b)))
return a},
ad:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ad(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="E")return!0
if('func' in c)return H.fd(a,b,c,d)
if('func' in a)return c.builtin$cls==="by"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ad("type" in a?a.type:null,b,x,d)
else if(H.ad(a,b,x,d))return!0
else{if(!('$is'+"be" in y.prototype))return!1
w=y.prototype["$as"+"be"]
v=H.b6(w,z?a.slice(1):null)
return H.ad(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fk(H.b6(r,z),b,u,d)},
fd:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ad(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ad(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ad(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ad(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kQ(m,b,l,d)},
kQ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ad(c[w],d,a[w],b))return!1}return!0},
ly:function(a,b,c){Object.defineProperty(a,H.B(b),{value:c,enumerable:false,writable:true,configurable:true})},
kN:function(a){var z,y,x,w,v,u
z=H.B($.fo.$1(a))
y=$.ce[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ci[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.B($.fj.$2(a,z))
if(z!=null){y=$.ce[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ci[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.ck(x)
$.ce[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ci[z]=x
return x}if(v==="-"){u=H.ck(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fr(a,x)
if(v==="*")throw H.f(P.eJ(z))
if(init.leafTags[z]===true){u=H.ck(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fr(a,x)},
fr:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dj(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
ck:function(a){return J.dj(a,!1,null,!!a.$isaf)},
kP:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.ck(z)
else return J.dj(z,c,null,null)},
kI:function(){if(!0===$.di)return
$.di=!0
H.kJ()},
kJ:function(){var z,y,x,w,v,u,t,s
$.ce=Object.create(null)
$.ci=Object.create(null)
H.kE()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ft.$1(v)
if(u!=null){t=H.kP(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kE:function(){var z,y,x,w,v,u,t
z=C.Q()
z=H.b1(C.N,H.b1(C.S,H.b1(C.z,H.b1(C.z,H.b1(C.R,H.b1(C.O,H.b1(C.P(C.A),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fo=new H.kF(v)
$.fj=new H.kG(u)
$.ft=new H.kH(t)},
b1:function(a,b){return a(b)||b},
fu:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dl:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ig:{"^":"a;a,b,c,d,e,f,r,0x",p:{
ih:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c0(z)
y=z[0]
x=z[1]
return new H.ig(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iV:{"^":"a;a,b,c,d,e,f",
a1:function(a){var z,y,x
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
ar:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.m])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iV(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c8:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eE:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hZ:{"^":"S;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
e3:function(a,b){return new H.hZ(a,b==null?null:b.method)}}},
ht:{"^":"S;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
cD:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ht(a,y,z?null:b.receiver)}}},
j7:{"^":"S;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l0:{"^":"t:17;a",
$1:function(a){if(!!J.L(a).$isS)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
f7:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isax:1},
t:{"^":"a;",
i:function(a){return"Closure '"+H.aV(this).trim()+"'"},
gdY:function(){return this},
$isby:1,
gdY:function(){return this}},
eo:{"^":"t;"},
iF:{"^":"eo;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.b7(z)+"'"}},
cr:{"^":"eo;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cr))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bi(this.a)
else y=typeof z!=="object"?J.bv(z):H.bi(z)
return(y^H.bi(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.aV(z)+"'")},
p:{
cs:function(a){return a.a},
dv:function(a){return a.c},
bR:function(a){var z,y,x,w,v
z=new H.cr("self","target","receiver","name")
y=J.c0(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iW:{"^":"S;a",
i:function(a){return this.a},
p:{
ai:function(a,b){return new H.iW("TypeError: "+H.e(P.bW(a))+": type '"+H.fh(a)+"' is not a subtype of type '"+b+"'")}}},
fH:{"^":"S;a",
i:function(a){return this.a},
p:{
fI:function(a,b){return new H.fH("CastError: "+H.e(P.bW(a))+": type '"+H.fh(a)+"' is not a subtype of type '"+b+"'")}}},
iq:{"^":"S;a",
i:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
ir:function(a){return new H.iq(a)}}},
aS:{"^":"dX;a,0b,0c,0d,0e,0f,r,$ti",
gn:function(a){return this.a},
gam:function(){return new H.dV(this,[H.v(this,0)])},
d5:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.cF(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.cF(y,a)}else return this.ig(a)},
ig:function(a){var z=this.d
if(z==null)return!1
return this.c6(this.bE(z,J.bv(a)&0x3ffffff),a)>=0},
l:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b_(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b_(w,b)
x=y==null?null:y.b
return x}else return this.ih(b)},
ih:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bE(z,J.bv(a)&0x3ffffff)
x=this.c6(y,a)
if(x<0)return
return y[x].b},
R:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.v(this,0))
H.z(c,H.v(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bJ()
this.b=z}this.cu(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bJ()
this.c=y}this.cu(y,b,c)}else{x=this.d
if(x==null){x=this.bJ()
this.d=x}w=J.bv(b)&0x3ffffff
v=this.bE(x,w)
if(v==null)this.bP(x,w,[this.bA(b,c)])
else{u=this.c6(v,b)
if(u>=0)v[u].b=c
else v.push(this.bA(b,c))}}},
W:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.f(P.aI(this))
z=z.c}},
cu:function(a,b,c){var z
H.z(b,H.v(this,0))
H.z(c,H.v(this,1))
z=this.b_(a,b)
if(z==null)this.bP(a,b,this.bA(b,c))
else z.b=c},
eK:function(){this.r=this.r+1&67108863},
bA:function(a,b){var z,y
z=new H.hx(H.z(a,H.v(this,0)),H.z(b,H.v(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eK()
return z},
c6:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
i:function(a){return P.dY(this)},
b_:function(a,b){return a[b]},
bE:function(a,b){return a[b]},
bP:function(a,b,c){a[b]=c},
eZ:function(a,b){delete a[b]},
cF:function(a,b){return this.b_(a,b)!=null},
bJ:function(){var z=Object.create(null)
this.bP(z,"<non-identifier-key>",z)
this.eZ(z,"<non-identifier-key>")
return z},
$isdU:1},
hx:{"^":"a;a,b,0c,0d"},
dV:{"^":"dM;a,$ti",
gn:function(a){return this.a.a},
gK:function(a){var z,y
z=this.a
y=new H.hy(z,z.r,this.$ti)
y.c=z.e
return y}},
hy:{"^":"a;a,b,0c,0d,$ti",
scv:function(a){this.d=H.z(a,H.v(this,0))},
gD:function(){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.aI(z))
else{z=this.c
if(z==null){this.scv(null)
return!1}else{this.scv(z.a)
this.c=this.c.c
return!0}}},
$isaK:1},
kF:{"^":"t:17;a",
$1:function(a){return this.a(a)}},
kG:{"^":"t:39;a",
$2:function(a,b){return this.a(a,b)}},
kH:{"^":"t:38;a",
$1:function(a){return this.a(H.B(a))}},
hr:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$ise5:1,
p:{
hs:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.f(new P.hb("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kx:function(a){return J.dQ(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bq:function(a){return a},
bM:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bu(b,a))},
kh:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.f(H.kw(a,b,c))
return b},
hU:{"^":"G;","%":";ArrayBufferView;cI|f3|f4|hT|f5|f6|bF"},
cI:{"^":"hU;",
gn:function(a){return a.length},
$isaf:1,
$asaf:I.de},
hT:{"^":"f4;",
l:function(a,b){H.bM(b,a,a.length)
return a[b]},
$asbZ:function(){return[P.u]},
$asM:function(){return[P.u]},
$isl:1,
$asl:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]},
"%":"Float32Array"},
bF:{"^":"f6;",
$asbZ:function(){return[P.y]},
$asM:function(){return[P.y]},
$isl:1,
$asl:function(){return[P.y]},
$isb:1,
$asb:function(){return[P.y]}},
lb:{"^":"bF;",
l:function(a,b){H.bM(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lc:{"^":"bF;",
l:function(a,b){H.bM(b,a,a.length)
return a[b]},
"%":"Int32Array"},
ld:{"^":"bF;",
l:function(a,b){H.bM(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
le:{"^":"bF;",
gn:function(a){return a.length},
l:function(a,b){H.bM(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
f3:{"^":"cI+M;"},
f4:{"^":"f3+bZ;"},
f5:{"^":"cI+M;"},
f6:{"^":"f5+bZ;"}}],["","",,P,{"^":"",
js:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kp()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b2(new P.ju(z),1)).observe(y,{childList:true})
return new P.jt(z,y,x)}else if(self.setImmediate!=null)return P.kq()
return P.kr()},
lo:[function(a){self.scheduleImmediate(H.b2(new P.jv(H.j(a,{func:1,ret:-1})),0))},"$1","kp",4,0,7],
lp:[function(a){self.setImmediate(H.b2(new P.jw(H.j(a,{func:1,ret:-1})),0))},"$1","kq",4,0,7],
lq:[function(a){P.cR(C.p,H.j(a,{func:1,ret:-1}))},"$1","kr",4,0,7],
cR:function(a,b){var z
H.j(b,{func:1,ret:-1})
z=C.h.V(a.a,1000)
return P.k6(z<0?0:z,b)},
ew:function(a,b){var z
H.j(b,{func:1,ret:-1,args:[P.aW]})
z=C.h.V(a.a,1000)
return P.k7(z<0?0:z,b)},
kl:function(a,b){if(H.bO(a,{func:1,args:[P.a,P.ax]}))return H.j(a,{func:1,ret:null,args:[P.a,P.ax]})
if(H.bO(a,{func:1,args:[P.a]}))return H.j(a,{func:1,ret:null,args:[P.a]})
throw H.f(P.cp(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kk:function(){var z,y
for(;z=$.b0,z!=null;){$.bs=null
y=z.b
$.b0=y
if(y==null)$.br=null
z.a.$0()}},
lw:[function(){$.d8=!0
try{P.kk()}finally{$.bs=null
$.d8=!1
if($.b0!=null)$.$get$d4().$1(P.fl())}},"$0","fl",0,0,2],
fg:function(a){var z=new P.eW(H.j(a,{func:1,ret:-1}))
if($.b0==null){$.br=z
$.b0=z
if(!$.d8)$.$get$d4().$1(P.fl())}else{$.br.b=z
$.br=z}},
ko:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.b0
if(z==null){P.fg(a)
$.bs=$.br
return}y=new P.eW(a)
x=$.bs
if(x==null){y.b=z
$.bs=y
$.b0=y}else{y.b=x.b
x.b=y
$.bs=y
if(y.b==null)$.br=y}},
kU:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.J
if(C.l===y){P.cd(null,null,C.l,a)
return}y.toString
P.cd(null,null,y,H.j(y.bU(a),z))},
ev:function(a,b){var z,y
z={func:1,ret:-1}
H.j(b,z)
y=$.J
if(y===C.l){y.toString
return P.cR(a,b)}return P.cR(a,H.j(y.bU(b),z))},
iS:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aW]}
H.j(b,z)
y=$.J
if(y===C.l){y.toString
return P.ew(a,b)}x=y.d1(b,P.aW)
$.J.toString
return P.ew(a,H.j(x,z))},
cc:function(a,b,c,d,e){var z={}
z.a=d
P.ko(new P.km(z,e))},
fe:function(a,b,c,d,e){var z,y
H.j(d,{func:1,ret:e})
y=$.J
if(y===c)return d.$0()
$.J=c
z=y
try{y=d.$0()
return y}finally{$.J=z}},
ff:function(a,b,c,d,e,f,g){var z,y
H.j(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.J
if(y===c)return d.$1(e)
$.J=c
z=y
try{y=d.$1(e)
return y}finally{$.J=z}},
kn:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.J
if(y===c)return d.$2(e,f)
$.J=c
z=y
try{y=d.$2(e,f)
return y}finally{$.J=z}},
cd:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.bU(d):c.hI(d,-1)
P.fg(d)},
ju:{"^":"t:19;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jt:{"^":"t:33;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jv:{"^":"t:1;a",
$0:function(){this.a.$0()}},
jw:{"^":"t:1;a",
$0:function(){this.a.$0()}},
f9:{"^":"a;a,0b,c",
eI:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b2(new P.k9(this,b),0),a)
else throw H.f(P.aa("`setTimeout()` not found."))},
eJ:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b2(new P.k8(this,a,Date.now(),b),0),a)
else throw H.f(P.aa("Periodic timer."))},
$isaW:1,
p:{
k6:function(a,b){var z=new P.f9(!0,0)
z.eI(a,b)
return z},
k7:function(a,b){var z=new P.f9(!1,0)
z.eJ(a,b)
return z}}},
k9:{"^":"t:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
k8:{"^":"t:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.em(w,x)}z.c=y
this.d.$1(z)}},
b_:{"^":"a;0a,b,c,d,e,$ti",
im:function(a){if(this.c!==6)return!0
return this.b.b.cc(H.j(this.d,{func:1,ret:P.H,args:[P.a]}),a.a,P.H,P.a)},
ie:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.v(this,1)}
w=this.b.b
if(H.bO(z,{func:1,args:[P.a,P.ax]}))return H.df(w.iO(z,a.a,a.b,null,y,P.ax),x)
else return H.df(w.cc(H.j(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aF:{"^":"a;cU:a<,b,0fU:c<,$ti",
dP:function(a,b,c){var z,y,x,w
z=H.v(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.J
if(y!==C.l){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kl(b,y)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aF(0,$.J,[c])
w=b==null?1:3
this.cz(new P.b_(x,w,a,b,[z,c]))
return x},
iS:function(a,b){return this.dP(a,null,b)},
cz:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isb_")
this.c=a}else{if(z===2){y=H.i(this.c,"$isaF")
z=y.a
if(z<4){y.cz(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cd(null,null,z,H.j(new P.jE(this,a),{func:1,ret:-1}))}},
cR:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isb_")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isaF")
y=u.a
if(y<4){u.cR(a)
return}this.a=y
this.c=u.c}z.a=this.b1(a)
y=this.b
y.toString
P.cd(null,null,y,H.j(new P.jJ(z,this),{func:1,ret:-1}))}},
bN:function(){var z=H.i(this.c,"$isb_")
this.c=null
return this.b1(z)},
b1:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cB:function(a){var z,y,x
z=H.v(this,0)
H.df(a,{futureOr:1,type:z})
y=this.$ti
if(H.bN(a,"$isbe",y,"$asbe"))if(H.bN(a,"$isaF",y,null))P.eZ(a,this)
else P.jF(a,this)
else{x=this.bN()
H.z(a,z)
this.a=4
this.c=a
P.bp(this,x)}},
cC:function(a,b){var z
H.i(b,"$isax")
z=this.bN()
this.a=8
this.c=new P.a6(a,b)
P.bp(this,z)},
$isbe:1,
p:{
jF:function(a,b){var z,y,x
b.a=1
try{a.dP(new P.jG(b),new P.jH(b),null)}catch(x){z=H.a5(x)
y=H.b4(x)
P.kU(new P.jI(b,z,y))}},
eZ:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isaF")
if(z>=4){y=b.bN()
b.a=a.a
b.c=a.c
P.bp(b,y)}else{y=H.i(b.c,"$isb_")
b.a=2
b.c=a
a.cR(y)}},
bp:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isa6")
y=y.b
u=v.a
t=v.b
y.toString
P.cc(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.i(r,"$isa6")
y=y.b
u=r.a
t=r.b
y.toString
P.cc(null,null,y,u,t)
return}o=$.J
if(o==null?q!=null:o!==q)$.J=q
else o=null
y=b.c
if(y===8)new P.jM(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jL(x,b,r).$0()}else if((y&2)!==0)new P.jK(z,x,b).$0()
if(o!=null)$.J=o
y=x.b
if(!!J.L(y).$isbe){if(y.a>=4){n=H.i(t.c,"$isb_")
t.c=null
b=t.b1(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eZ(y,t)
return}}m=b.b
n=H.i(m.c,"$isb_")
m.c=null
b=m.b1(n)
y=x.a
u=x.b
if(!y){H.z(u,H.v(m,0))
m.a=4
m.c=u}else{H.i(u,"$isa6")
m.a=8
m.c=u}z.a=m
y=m}}}},
jE:{"^":"t:1;a,b",
$0:function(){P.bp(this.a,this.b)}},
jJ:{"^":"t:1;a,b",
$0:function(){P.bp(this.b,this.a.a)}},
jG:{"^":"t:19;a",
$1:function(a){var z=this.a
z.a=0
z.cB(a)}},
jH:{"^":"t:30;a",
$2:function(a,b){this.a.cC(a,H.i(b,"$isax"))},
$1:function(a){return this.$2(a,null)}},
jI:{"^":"t:1;a,b,c",
$0:function(){this.a.cC(this.b,this.c)}},
jM:{"^":"t:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dN(H.j(w.d,{func:1}),null)}catch(v){y=H.a5(v)
x=H.b4(v)
if(this.d){w=H.i(this.a.a.c,"$isa6").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isa6")
else u.b=new P.a6(y,x)
u.a=!0
return}if(!!J.L(z).$isbe){if(z instanceof P.aF&&z.gcU()>=4){if(z.gcU()===8){w=this.b
w.b=H.i(z.gfU(),"$isa6")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iS(new P.jN(t),null)
w.a=!1}}},
jN:{"^":"t:29;a",
$1:function(a){return this.a}},
jL:{"^":"t:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.v(x,0)
v=H.z(this.c,w)
u=H.v(x,1)
this.a.b=x.b.b.cc(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a5(t)
y=H.b4(t)
x=this.a
x.b=new P.a6(z,y)
x.a=!0}}},
jK:{"^":"t:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isa6")
w=this.c
if(w.im(z)&&w.e!=null){v=this.b
v.b=w.ie(z)
v.a=!1}}catch(u){y=H.a5(u)
x=H.b4(u)
w=H.i(this.a.a.c,"$isa6")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a6(y,x)
s.a=!0}}},
eW:{"^":"a;a,0b"},
iG:{"^":"a;$ti",
gn:function(a){var z,y,x,w
z={}
y=new P.aF(0,$.J,[P.y])
z.a=0
x=H.v(this,0)
w=H.j(new P.iI(z,this),{func:1,ret:-1,args:[x]})
H.j(new P.iJ(z,y),{func:1,ret:-1})
W.U(this.a,this.b,w,!1,x)
return y}},
iI:{"^":"t;a,b",
$1:function(a){H.z(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.v(this.b,0)]}}},
iJ:{"^":"t:1;a,b",
$0:function(){this.b.cB(this.a.a)}},
cO:{"^":"a;$ti"},
iH:{"^":"a;"},
aW:{"^":"a;"},
a6:{"^":"a;a,b",
i:function(a){return H.e(this.a)},
$isS:1},
ke:{"^":"a;",$isln:1},
km:{"^":"t:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e4()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.f(z)
x=H.f(z)
x.stack=y.i(0)
throw x}},
jW:{"^":"ke;",
iP:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.l===$.J){a.$0()
return}P.fe(null,null,this,a,-1)}catch(x){z=H.a5(x)
y=H.b4(x)
P.cc(null,null,this,z,H.i(y,"$isax"))}},
iQ:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.l===$.J){a.$1(b)
return}P.ff(null,null,this,a,b,-1,c)}catch(x){z=H.a5(x)
y=H.b4(x)
P.cc(null,null,this,z,H.i(y,"$isax"))}},
hI:function(a,b){return new P.jY(this,H.j(a,{func:1,ret:b}),b)},
bU:function(a){return new P.jX(this,H.j(a,{func:1,ret:-1}))},
d1:function(a,b){return new P.jZ(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
dN:function(a,b){H.j(a,{func:1,ret:b})
if($.J===C.l)return a.$0()
return P.fe(null,null,this,a,b)},
cc:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.J===C.l)return a.$1(b)
return P.ff(null,null,this,a,b,c,d)},
iO:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.J===C.l)return a.$2(b,c)
return P.kn(null,null,this,a,b,c,d,e,f)}},
jY:{"^":"t;a,b,c",
$0:function(){return this.a.dN(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jX:{"^":"t:2;a,b",
$0:function(){return this.a.iP(this.b)}},
jZ:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.iQ(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hA:function(a,b,c){H.cj(a)
return H.k(H.ky(a,new H.aS(0,0,[b,c])),"$isdU",[b,c],"$asdU")},
hz:function(a,b){return new H.aS(0,0,[a,b])},
bD:function(a,b,c,d){return new P.jR(0,0,[d])},
hm:function(a,b,c){var z,y
if(P.d9(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bt()
C.a.h(y,a)
try{P.kj(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.em(b,H.kM(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
cA:function(a,b,c){var z,y,x
if(P.d9(a))return b+"..."+c
z=new P.bj(b)
y=$.$get$bt()
C.a.h(y,a)
try{x=z
x.a=P.em(x.gav(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gav()+c
y=z.gav()
return y.charCodeAt(0)==0?y:y},
d9:function(a){var z,y
for(z=0;y=$.$get$bt(),z<y.length;++z)if(a===y[z])return!0
return!1},
kj:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gK(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.v())return
w=H.e(z.gD())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.v()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gD();++x
if(!z.v()){if(x<=4){C.a.h(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gD();++x
for(;z.v();t=s,s=r){r=z.gD();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dW:function(a,b){var z,y,x
z=P.bD(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.w)(a),++x)z.h(0,H.z(a[x],b))
return z},
dY:function(a){var z,y,x
z={}
if(P.d9(a))return"{...}"
y=new P.bj("")
try{C.a.h($.$get$bt(),a)
x=y
x.a=x.gav()+"{"
z.a=!0
a.W(0,new P.hF(z,y))
z=y
z.a=z.gav()+"}"}finally{z=$.$get$bt()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gav()
return z.charCodeAt(0)==0?z:z},
jR:{"^":"jO;a,0b,0c,0d,0e,0f,r,$ti",
gK:function(a){var z=new P.f2(this,this.r,this.$ti)
z.c=this.e
return z},
gn:function(a){return this.a},
O:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.i(z[b],"$iscb")!=null}else{y=this.eV(b)
return y}},
eV:function(a){var z=this.d
if(z==null)return!1
return this.bD(this.cK(z,a),a)>=0},
h:function(a,b){var z,y
H.z(b,H.v(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d6()
this.b=z}return this.cw(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d6()
this.c=y}return this.cw(y,b)}else return this.eL(b)},
eL:function(a){var z,y,x
H.z(a,H.v(this,0))
z=this.d
if(z==null){z=P.d6()
this.d=z}y=this.cD(a)
x=z[y]
if(x==null)z[y]=[this.bK(a)]
else{if(this.bD(x,a)>=0)return!1
x.push(this.bK(a))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.fM(this.c,b)
else return this.fJ(b)},
fJ:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.cK(z,a)
x=this.bD(y,a)
if(x<0)return!1
this.cW(y.splice(x,1)[0])
return!0},
cw:function(a,b){H.z(b,H.v(this,0))
if(H.i(a[b],"$iscb")!=null)return!1
a[b]=this.bK(b)
return!0},
fM:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$iscb")
if(z==null)return!1
this.cW(z)
delete a[b]
return!0},
cM:function(){this.r=this.r+1&67108863},
bK:function(a){var z,y
z=new P.cb(H.z(a,H.v(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cM()
return z},
cW:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cM()},
cD:function(a){return J.bv(a)&0x3ffffff},
cK:function(a,b){return a[this.cD(b)]},
bD:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
p:{
d6:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cb:{"^":"a;a,0b,0c"},
f2:{"^":"a;a,b,0c,0d,$ti",
scA:function(a){this.d=H.z(a,H.v(this,0))},
gD:function(){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.aI(z))
else{z=this.c
if(z==null){this.scA(null)
return!1}else{this.scA(H.z(z.a,H.v(this,0)))
this.c=this.c.b
return!0}}},
$isaK:1,
p:{
jS:function(a,b,c){var z=new P.f2(a,b,[c])
z.c=a.e
return z}}},
jO:{"^":"is;"},
c1:{"^":"jT;",$isl:1,$isb:1},
M:{"^":"a;$ti",
gK:function(a){return new H.cE(a,this.gn(a),0,[H.ch(this,a,"M",0)])},
Y:function(a,b){return this.l(a,b)},
iU:function(a,b){var z,y
z=H.c([],[H.ch(this,a,"M",0)])
C.a.sn(z,this.gn(a))
for(y=0;y<this.gn(a);++y)C.a.R(z,y,this.l(a,y))
return z},
iT:function(a){return this.iU(a,!0)},
i:function(a){return P.cA(a,"[","]")}},
dX:{"^":"c3;"},
hF:{"^":"t:13;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
c3:{"^":"a;$ti",
W:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.W(this,"c3",0),H.W(this,"c3",1)]})
for(z=J.b8(this.gam());z.v();){y=z.gD()
b.$2(y,this.l(0,y))}},
gn:function(a){return J.aP(this.gam())},
i:function(a){return P.dY(this)},
$isa7:1},
iu:{"^":"a;$ti",
ad:function(a,b){var z
for(z=J.b8(H.k(b,"$isl",this.$ti,"$asl"));z.v();)this.h(0,z.gD())},
i:function(a){return P.cA(this,"{","}")},
Y:function(a,b){var z,y,x
if(b<0)H.r(P.a4(b,0,null,"index",null))
for(z=P.jS(this,this.r,H.v(this,0)),y=0;z.v();){x=z.d
if(b===y)return x;++y}throw H.f(P.aQ(b,this,"index",null,y))},
$isl:1,
$iseh:1},
is:{"^":"iu;"},
jT:{"^":"a+M;"}}],["","",,P,{"^":"",cu:{"^":"a;$ti"},bU:{"^":"iH;$ti"},h2:{"^":"cu;",
$ascu:function(){return[P.m,[P.b,P.y]]}},hk:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},hj:{"^":"bU;a",
eW:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.h(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.bj("")
if(w>b)v.a+=C.i.aY(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.fC(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asbU:function(){return[P.m,P.m]}},jb:{"^":"h2;a"},jc:{"^":"bU;",
hT:function(a,b,c){var z,y,x,w
z=a.length
P.ec(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kc(0,0,x)
if(w.f6(a,b,z)!==z)w.cX(C.i.bY(a,z-1),0)
return new Uint8Array(x.subarray(0,H.kh(0,w.b,x.length)))},
hS:function(a){return this.hT(a,0,null)},
$asbU:function(){return[P.m,[P.b,P.y]]}},kc:{"^":"a;a,b,c",
cX:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.h(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.h(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.h(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.h(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.h(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.h(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.h(z,y)
z[y]=128|a&63
return!1}},
f6:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.bY(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.au(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cX(w,C.i.au(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.h(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.h(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.h(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.h(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
h4:function(a){if(a instanceof H.t)return a.i(0)
return"Instance of '"+H.aV(a)+"'"},
hB:function(a,b,c,d){var z,y
H.z(b,d)
z=J.ho(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.R(z,y,b)
return H.k(z,"$isb",[d],"$asb")},
hC:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gK(a);x.v();)C.a.h(y,H.z(x.gD(),c))
if(b)return y
return H.k(J.c0(y),"$isb",z,"$asb")},
cP:function(a,b,c){var z,y
z=P.y
H.k(a,"$isl",[z],"$asl")
if(a.constructor===Array){H.k(a,"$isaR",[z],"$asaR")
y=a.length
c=P.ec(b,c,y,null,null,null)
return H.eb(b>0||c<y?C.a.ef(a,b,c):a)}return P.iK(a,b,c)},
iK:function(a,b,c){var z,y,x
H.k(a,"$isl",[P.y],"$asl")
z=J.b8(a)
for(y=0;y<b;++y)if(!z.v())throw H.f(P.a4(b,0,y,null,null))
x=[]
for(;z.v();)x.push(z.gD())
return H.eb(x)},
ii:function(a,b,c){return new H.hr(a,H.hs(a,!1,!0,!1))},
fb:function(a,b,c,d){var z,y,x,w,v,u
H.k(a,"$isb",[P.y],"$asb")
if(c===C.w){z=$.$get$fa().b
z=z.test(b)}else z=!1
if(z)return b
y=C.H.hS(H.z(b,H.W(c,"cu",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cJ(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bW:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ak(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h4(a)},
p:function(a){return new P.eY(a)},
dk:function(a){H.kS(a)},
H:{"^":"a;"},
"+bool":0,
bw:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.bw))return!1
return this.a===b.a&&!0},
gT:function(a){var z=this.a
return(z^C.h.b2(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.fS(H.ia(this))
y=P.bx(H.i8(this))
x=P.bx(H.i4(this))
w=P.bx(H.i5(this))
v=P.bx(H.i7(this))
u=P.bx(H.i9(this))
t=P.fT(H.i6(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
p:{
fS:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fT:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bx:function(a){if(a>=10)return""+a
return"0"+a}}},
u:{"^":"aj;"},
"+double":0,
bb:{"^":"a;a",
bv:function(a,b){return C.h.bv(this.a,H.i(b,"$isbb").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.bb))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fZ()
y=this.a
if(y<0)return"-"+new P.bb(0-y).i(0)
x=z.$1(C.h.V(y,6e7)%60)
w=z.$1(C.h.V(y,1e6)%60)
v=new P.fY().$1(y%1e6)
return""+C.h.V(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
p:{
dL:function(a,b,c,d,e,f){return new P.bb(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fY:{"^":"t:14;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fZ:{"^":"t:14;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
S:{"^":"a;"},
e4:{"^":"S;",
i:function(a){return"Throw of null."}},
aG:{"^":"S;a,b,c,d",
gbC:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbB:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.e(z)
w=this.gbC()+y+x
if(!this.a)return w
v=this.gbB()
u=P.bW(this.b)
return w+v+": "+H.e(u)},
p:{
cp:function(a,b,c){return new P.aG(!0,a,b,c)}}},
c5:{"^":"aG;e,f,a,b,c,d",
gbC:function(){return"RangeError"},
gbB:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bH:function(a,b,c){return new P.c5(null,null,!0,a,b,"Value not in range")},
a4:function(a,b,c,d,e){return new P.c5(b,c,!0,a,d,"Invalid value")},
ec:function(a,b,c,d,e,f){if(0>a||a>c)throw H.f(P.a4(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.f(P.a4(b,a,c,"end",f))
return b}return c}}},
hl:{"^":"aG;e,n:f>,a,b,c,d",
gbC:function(){return"RangeError"},
gbB:function(){if(J.fw(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.e(z)},
p:{
aQ:function(a,b,c,d,e){var z=H.Z(e!=null?e:J.aP(b))
return new P.hl(b,z,!0,a,c,"Index out of range")}}},
j9:{"^":"S;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
aa:function(a){return new P.j9(a)}}},
j6:{"^":"S;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
eJ:function(a){return new P.j6(a)}}},
cN:{"^":"S;a",
i:function(a){return"Bad state: "+this.a},
p:{
el:function(a){return new P.cN(a)}}},
fO:{"^":"S;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bW(z))+"."},
p:{
aI:function(a){return new P.fO(a)}}},
i_:{"^":"a;",
i:function(a){return"Out of Memory"},
$isS:1},
ek:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isS:1},
fQ:{"^":"S;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eY:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hb:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.aY(x,0,75)+"..."
return y+"\n"+x}},
by:{"^":"a;"},
y:{"^":"aj;"},
"+int":0,
l:{"^":"a;$ti",
cf:["eh",function(a,b){var z=H.W(this,"l",0)
return new H.d3(this,H.j(b,{func:1,ret:P.H,args:[z]}),[z])}],
gn:function(a){var z,y
z=this.gK(this)
for(y=0;z.v();)++y
return y},
gaq:function(a){var z,y
z=this.gK(this)
if(!z.v())throw H.f(H.c_())
y=z.gD()
if(z.v())throw H.f(H.hn())
return y},
Y:function(a,b){var z,y,x
if(b<0)H.r(P.a4(b,0,null,"index",null))
for(z=this.gK(this),y=0;z.v();){x=z.gD()
if(b===y)return x;++y}throw H.f(P.aQ(b,this,"index",null,y))},
i:function(a){return P.hm(this,"(",")")}},
aK:{"^":"a;$ti"},
b:{"^":"a;$ti",$isl:1},
"+List":0,
E:{"^":"a;",
gT:function(a){return P.a.prototype.gT.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
aj:{"^":"a;"},
"+num":0,
a:{"^":";",
t:function(a,b){return this===b},
gT:function(a){return H.bi(this)},
i:function(a){return"Instance of '"+H.aV(this)+"'"},
toString:function(){return this.i(this)}},
ax:{"^":"a;"},
m:{"^":"a;",$ise5:1},
"+String":0,
bj:{"^":"a;av:a<",
gn:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
em:function(a,b,c){var z=J.b8(b)
if(!z.v())return a
if(c.length===0){do a+=H.e(z.gD())
while(z.v())}else{a+=H.e(z.gD())
for(;z.v();)a=a+c+H.e(z.gD())}return a}}}}],["","",,W,{"^":"",
dr:function(a){var z=document.createElement("a")
return z},
dA:function(a,b){var z=document.createElement("canvas")
return z},
h_:function(a,b,c){var z,y
z=document.body
y=(z&&C.n).a6(z,a,b,c)
y.toString
z=W.x
z=new H.d3(new W.ac(y),H.j(new W.h0(),{func:1,ret:P.H,args:[z]}),[z])
return H.i(z.gaq(z),"$isK")},
h1:function(a){H.i(a,"$isbX")
return"wheel"},
bc:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fB(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a5(x)}return z},
ca:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f1:function(a,b,c,d){var z,y
z=W.ca(W.ca(W.ca(W.ca(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fi:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.J
if(z===C.l)return a
return z.d1(a,b)},
a0:{"^":"K;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
fE:{"^":"a0;",
i:function(a){return String(a)},
$isfE:1,
"%":"HTMLAnchorElement"},
l1:{"^":"a0;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
dt:{"^":"a0;",$isdt:1,"%":"HTMLBaseElement"},
bQ:{"^":"a0;",$isbQ:1,"%":"HTMLBodyElement"},
ct:{"^":"a0;",
ck:function(a,b,c){var z=this.f7(a,b,P.ks(c,null))
return z},
f7:function(a,b,c){return a.getContext(b,c)},
$isct:1,
"%":"HTMLCanvasElement"},
l4:{"^":"x;0n:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
l6:{"^":"jz;0n:length=",
e4:function(a,b){var z=this.f8(a,this.eR(a,b))
return z==null?"":z},
eR:function(a,b){var z,y
z=$.$get$dE()
y=z[b]
if(typeof y==="string")return y
y=this.h8(a,b)
z[b]=y
return y},
h8:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fU()+b
if(z in a)return z
return b},
f8:function(a,b){return a.getPropertyValue(b)},
gbn:function(a){return a.height},
gbp:function(a){return a.left},
gcd:function(a){return a.top},
gbt:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fP:{"^":"a;",
gbp:function(a){return this.e4(a,"left")}},
aJ:{"^":"a0;",$isaJ:1,"%":"HTMLDivElement"},
fV:{"^":"x;",
hE:function(a,b){return a.adoptNode(b)},
e2:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
l7:{"^":"G;",
i:function(a){return String(a)},
"%":"DOMException"},
fW:{"^":"G;",
hW:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
fX:{"^":"G;",
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var z
if(b==null)return!1
if(!H.bN(b,"$isbI",[P.aj],"$asbI"))return!1
z=J.a1(b)
return a.left===z.gbp(b)&&a.top===z.gcd(b)&&a.width===z.gbt(b)&&a.height===z.gbn(b)},
gT:function(a){return W.f1(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbn:function(a){return a.height},
gbp:function(a){return a.left},
gcd:function(a){return a.top},
gbt:function(a){return a.width},
$isbI:1,
$asbI:function(){return[P.aj]},
"%":";DOMRectReadOnly"},
jy:{"^":"c1;cJ:a<,b",
gn:function(a){return this.b.length},
l:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.h(z,b)
return H.i(z[b],"$isK")},
h:function(a,b){J.dp(this.a,b)
return b},
gK:function(a){var z=this.iT(this)
return new J.at(z,z.length,0,[H.v(z,0)])},
$asM:function(){return[W.K]},
$asl:function(){return[W.K]},
$asb:function(){return[W.K]}},
K:{"^":"x;0iR:tagName=",
ghH:function(a){return new W.jA(a)},
gd3:function(a){return new W.jy(a,a.children)},
i:function(a){return a.localName},
a6:["by",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dO
if(z==null){z=H.c([],[W.ap])
y=new W.e2(z)
C.a.h(z,W.f_(null))
C.a.h(z,W.f8())
$.dO=y
d=y}else d=z
z=$.dN
if(z==null){z=new W.fc(d)
$.dN=z
c=z}else{z.a=d
c=z}}if($.au==null){z=document
y=z.implementation
y=(y&&C.I).hW(y,"")
$.au=y
$.cw=y.createRange()
y=$.au
y.toString
y=y.createElement("base")
H.i(y,"$isdt")
y.href=z.baseURI
z=$.au.head;(z&&C.K).u(z,y)}z=$.au
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.i(y,"$isbQ")}z=$.au
if(!!this.$isbQ)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.au.body;(z&&C.n).u(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.O(C.V,a.tagName)){z=$.cw;(z&&C.D).ea(z,x)
z=$.cw
w=(z&&C.D).hU(z,b)}else{x.innerHTML=b
w=$.au.createDocumentFragment()
for(z=J.a1(w);y=x.firstChild,y!=null;)z.u(w,y)}z=$.au.body
if(x==null?z!=null:x!==z)J.dq(x)
c.cm(w)
C.y.hE(document,w)
return w},function(a,b,c){return this.a6(a,b,c,null)},"hV",null,null,"gjs",5,5,null],
ec:function(a,b,c,d){a.textContent=null
this.u(a,this.a6(a,b,c,d))},
eb:function(a,b){return this.ec(a,b,null,null)},
aH:function(a,b){return a.getAttribute(b)},
fK:function(a,b){return a.removeAttribute(b)},
$isK:1,
"%":";Element"},
h0:{"^":"t:15;",
$1:function(a){return!!J.L(H.i(a,"$isx")).$isK}},
a_:{"^":"G;",$isa_:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
bX:{"^":"G;",
eM:function(a,b,c,d){return a.addEventListener(b,H.b2(H.j(c,{func:1,args:[W.a_]}),1),!1)},
$isbX:1,
"%":";EventTarget"},
l8:{"^":"a0;0n:length=","%":"HTMLFormElement"},
hg:{"^":"a0;","%":"HTMLHeadElement"},
hh:{"^":"jQ;",
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.aQ(b,a,null,null,null))
return a[b]},
Y:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isaf:1,
$asaf:function(){return[W.x]},
$asM:function(){return[W.x]},
$isl:1,
$asl:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]},
$ishh:1,
$asan:function(){return[W.x]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hi:{"^":"fV;","%":"HTMLDocument"},
bf:{"^":"cU;",$isbf:1,"%":"KeyboardEvent"},
hD:{"^":"G;",
i:function(a){return String(a)},
$ishD:1,
"%":"Location"},
ag:{"^":"cU;",$isag:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ac:{"^":"c1;a",
gaq:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.f(P.el("No elements"))
if(y>1)throw H.f(P.el("More than one element"))
return z.firstChild},
ad:function(a,b){var z,y,x,w,v
H.k(b,"$isl",[W.x],"$asl")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.a1(y),v=0;v<x;++v)w.u(y,z.firstChild)
return},
gK:function(a){var z=this.a.childNodes
return new W.dP(z,z.length,-1,[H.ch(C.X,z,"an",0)])},
gn:function(a){return this.a.childNodes.length},
l:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.h(z,b)
return z[b]},
$asM:function(){return[W.x]},
$asl:function(){return[W.x]},
$asb:function(){return[W.x]}},
x:{"^":"bX;0iD:previousSibling=",
iF:function(a){var z=a.parentNode
if(z!=null)J.bP(z,a)},
i:function(a){var z=a.nodeValue
return z==null?this.eg(a):z},
u:function(a,b){return a.appendChild(b)},
fL:function(a,b){return a.removeChild(b)},
$isx:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hV:{"^":"jV;",
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.aQ(b,a,null,null,null))
return a[b]},
Y:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isaf:1,
$asaf:function(){return[W.x]},
$asM:function(){return[W.x]},
$isl:1,
$asl:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]},
$asan:function(){return[W.x]},
"%":"NodeList|RadioNodeList"},
id:{"^":"G;",
hU:function(a,b){return a.createContextualFragment(b)},
ea:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lh:{"^":"a0;0n:length=","%":"HTMLSelectElement"},
iL:{"^":"a0;","%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
iM:{"^":"a0;",
a6:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
z=W.h_("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ac(y).ad(0,new W.ac(z))
return y},
"%":"HTMLTableElement"},
iN:{"^":"a0;",
a6:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.a6(z.createElement("table"),b,c,d)
z.toString
z=new W.ac(z)
x=z.gaq(z)
x.toString
z=new W.ac(x)
w=z.gaq(z)
y.toString
w.toString
new W.ac(y).ad(0,new W.ac(w))
return y},
"%":"HTMLTableRowElement"},
lj:{"^":"a0;",
a6:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.a6(z.createElement("table"),b,c,d)
z.toString
z=new W.ac(z)
x=z.gaq(z)
y.toString
x.toString
new W.ac(y).ad(0,new W.ac(x))
return y},
"%":"HTMLTableSectionElement"},
ep:{"^":"a0;",$isep:1,"%":"HTMLTemplateElement"},
bk:{"^":"G;",$isbk:1,"%":"Touch"},
aX:{"^":"cU;",$isaX:1,"%":"TouchEvent"},
ll:{"^":"kb;",
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.aQ(b,a,null,null,null))
return a[b]},
Y:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isaf:1,
$asaf:function(){return[W.bk]},
$asM:function(){return[W.bk]},
$isl:1,
$asl:function(){return[W.bk]},
$isb:1,
$asb:function(){return[W.bk]},
$asan:function(){return[W.bk]},
"%":"TouchList"},
cU:{"^":"a_;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
bo:{"^":"ag;",
gi1:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.aa("deltaY is not supported"))},
gi0:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.aa("deltaX is not supported"))},
$isbo:1,
"%":"WheelEvent"},
jr:{"^":"bX;",
fR:function(a,b){return a.requestAnimationFrame(H.b2(H.j(b,{func:1,ret:-1,args:[P.aj]}),1))},
f0:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
eX:{"^":"x;",$iseX:1,"%":"Attr"},
lr:{"^":"fX;",
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var z
if(b==null)return!1
if(!H.bN(b,"$isbI",[P.aj],"$asbI"))return!1
z=J.a1(b)
return a.left===z.gbp(b)&&a.top===z.gcd(b)&&a.width===z.gbt(b)&&a.height===z.gbn(b)},
gT:function(a){return W.f1(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbn:function(a){return a.height},
gbt:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lv:{"^":"kg;",
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.aQ(b,a,null,null,null))
return a[b]},
Y:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isaf:1,
$asaf:function(){return[W.x]},
$asM:function(){return[W.x]},
$isl:1,
$asl:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]},
$asan:function(){return[W.x]},
"%":"MozNamedAttrMap|NamedNodeMap"},
jx:{"^":"dX;cJ:a<",
W:function(a,b){var z,y,x,w,v,u
H.j(b,{func:1,ret:-1,args:[P.m,P.m]})
for(z=this.gam(),y=z.length,x=this.a,w=J.a1(x),v=0;v<z.length;z.length===y||(0,H.w)(z),++v){u=z[v]
b.$2(u,w.aH(x,u))}},
gam:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.m])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.h(z,w)
v=H.i(z[w],"$iseX")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asc3:function(){return[P.m,P.m]},
$asa7:function(){return[P.m,P.m]}},
jA:{"^":"jx;a",
l:function(a,b){return J.co(this.a,H.B(b))},
gn:function(a){return this.gam().length}},
jB:{"^":"iG;a,b,c,$ti"},
ls:{"^":"jB;a,b,c,$ti"},
jC:{"^":"cO;a,b,c,d,e,$ti",p:{
U:function(a,b,c,d,e){var z,y
z=W.fi(new W.jD(c),W.a_)
y=z!=null
if(y&&!0){H.j(z,{func:1,args:[W.a_]})
if(y)J.fy(a,b,z,!1)}return new W.jC(0,a,b,z,!1,[e])}}},
jD:{"^":"t:27;a",
$1:function(a){return this.a.$1(H.i(a,"$isa_"))}},
bL:{"^":"a;a",
ew:function(a){var z,y
z=$.$get$d5()
if(z.a===0){for(y=0;y<262;++y)z.R(0,C.U[y],W.kC())
for(y=0;y<12;++y)z.R(0,C.t[y],W.kD())}},
az:function(a){return $.$get$f0().O(0,W.bc(a))},
ak:function(a,b,c){var z,y,x
z=W.bc(a)
y=$.$get$d5()
x=y.l(0,H.e(z)+"::"+b)
if(x==null)x=y.l(0,"*::"+b)
if(x==null)return!1
return H.db(x.$4(a,b,c,this))},
$isap:1,
p:{
f_:function(a){var z,y
z=W.dr(null)
y=window.location
z=new W.bL(new W.k_(z,y))
z.ew(a)
return z},
lt:[function(a,b,c,d){H.i(a,"$isK")
H.B(b)
H.B(c)
H.i(d,"$isbL")
return!0},"$4","kC",16,0,10],
lu:[function(a,b,c,d){var z,y,x
H.i(a,"$isK")
H.B(b)
H.B(c)
z=H.i(d,"$isbL").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kD",16,0,10]}},
an:{"^":"a;$ti",
gK:function(a){return new W.dP(a,this.gn(a),-1,[H.ch(this,a,"an",0)])}},
e2:{"^":"a;a",
az:function(a){return C.a.d_(this.a,new W.hX(a))},
ak:function(a,b,c){return C.a.d_(this.a,new W.hW(a,b,c))},
$isap:1},
hX:{"^":"t:16;a",
$1:function(a){return H.i(a,"$isap").az(this.a)}},
hW:{"^":"t:16;a,b,c",
$1:function(a){return H.i(a,"$isap").ak(this.a,this.b,this.c)}},
k0:{"^":"a;",
eG:function(a,b,c,d){var z,y,x
this.a.ad(0,c)
z=b.cf(0,new W.k1())
y=b.cf(0,new W.k2())
this.b.ad(0,z)
x=this.c
x.ad(0,C.W)
x.ad(0,y)},
az:function(a){return this.a.O(0,W.bc(a))},
ak:["el",function(a,b,c){var z,y
z=W.bc(a)
y=this.c
if(y.O(0,H.e(z)+"::"+b))return this.d.hF(c)
else if(y.O(0,"*::"+b))return this.d.hF(c)
else{y=this.b
if(y.O(0,H.e(z)+"::"+b))return!0
else if(y.O(0,"*::"+b))return!0
else if(y.O(0,H.e(z)+"::*"))return!0
else if(y.O(0,"*::*"))return!0}return!1}],
$isap:1},
k1:{"^":"t:20;",
$1:function(a){return!C.a.O(C.t,H.B(a))}},
k2:{"^":"t:20;",
$1:function(a){return C.a.O(C.t,H.B(a))}},
k4:{"^":"k0;e,a,b,c,d",
ak:function(a,b,c){if(this.el(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.co(a,"template")==="")return this.e.O(0,b)
return!1},
p:{
f8:function(){var z,y,x,w,v
z=P.m
y=P.dW(C.r,z)
x=H.v(C.r,0)
w=H.j(new W.k5(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.k4(y,P.bD(null,null,null,z),P.bD(null,null,null,z),P.bD(null,null,null,z),null)
y.eG(null,new H.hI(C.r,w,[x,z]),v,null)
return y}}},
k5:{"^":"t:25;",
$1:function(a){return"TEMPLATE::"+H.e(H.B(a))}},
k3:{"^":"a;",
az:function(a){var z=J.L(a)
if(!!z.$iseg)return!1
z=!!z.$iscQ
if(z&&W.bc(a)==="foreignObject")return!1
if(z)return!0
return!1},
ak:function(a,b,c){if(b==="is"||C.i.bx(b,"on"))return!1
return this.az(a)},
$isap:1},
dP:{"^":"a;a,b,c,0d,$ti",
scL:function(a){this.d=H.z(a,H.v(this,0))},
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.scL(J.fx(this.a,z))
this.c=z
return!0}this.scL(null)
this.c=y
return!1},
gD:function(){return this.d},
$isaK:1},
ap:{"^":"a;"},
k_:{"^":"a;a,b",$islm:1},
fc:{"^":"a;a",
cm:function(a){new W.kd(this).$2(a,null)},
aN:function(a,b){if(b==null)J.dq(a)
else J.bP(b,a)},
fW:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fz(a)
x=J.co(y.gcJ(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a5(t)}v="element unprintable"
try{v=J.ak(a)}catch(t){H.a5(t)}try{u=W.bc(a)
this.fV(H.i(a,"$isK"),b,z,v,u,H.i(y,"$isa7"),H.B(x))}catch(t){if(H.a5(t) instanceof P.aG)throw t
else{this.aN(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
fV:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.aN(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.az(a)){this.aN(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.ak(a,"is",g)){this.aN(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gam()
y=H.c(z.slice(0),[H.v(z,0)])
for(x=f.gam().length-1,z=f.a,w=J.a1(z);x>=0;--x){if(x>=y.length)return H.h(y,x)
v=y[x]
if(!this.a.ak(a,J.fD(v),w.aH(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.aH(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.aH(z,v)
w.fK(z,v)}}if(!!J.L(a).$isep)this.cm(a.content)},
$islf:1},
kd:{"^":"t:24;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.fW(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aN(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fA(z)}catch(w){H.a5(w)
v=H.i(z,"$isx")
if(x){u=v.parentNode
if(u!=null)J.bP(u,v)}else J.bP(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.i(y,"$isx")}}},
jz:{"^":"G+fP;"},
jP:{"^":"G+M;"},
jQ:{"^":"jP+an;"},
jU:{"^":"G+M;"},
jV:{"^":"jU+an;"},
ka:{"^":"G+M;"},
kb:{"^":"ka+an;"},
kf:{"^":"G+M;"},
kg:{"^":"kf+an;"}}],["","",,P,{"^":"",
ks:function(a,b){var z={}
a.W(0,new P.kt(z))
return z},
dK:function(){var z=$.dJ
if(z==null){z=J.cm(window.navigator.userAgent,"Opera",0)
$.dJ=z}return z},
fU:function(){var z,y
z=$.dG
if(z!=null)return z
y=$.dH
if(y==null){y=J.cm(window.navigator.userAgent,"Firefox",0)
$.dH=y}if(y)z="-moz-"
else{y=$.dI
if(y==null){y=!P.dK()&&J.cm(window.navigator.userAgent,"Trident/",0)
$.dI=y}if(y)z="-ms-"
else z=P.dK()?"-o-":"-webkit-"}$.dG=z
return z},
kt:{"^":"t:13;a",
$2:function(a,b){this.a[a]=b}},
h8:{"^":"c1;a,b",
gbF:function(){var z,y,x
z=this.b
y=H.W(z,"M",0)
x=W.K
return new H.hG(new H.d3(z,H.j(new P.h9(),{func:1,ret:P.H,args:[y]}),[y]),H.j(new P.ha(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){J.dp(this.b.a,b)},
gn:function(a){return J.aP(this.gbF().a)},
l:function(a,b){var z=this.gbF()
return z.b.$1(J.cn(z.a,b))},
gK:function(a){var z=P.hC(this.gbF(),!1,W.K)
return new J.at(z,z.length,0,[H.v(z,0)])},
$asM:function(){return[W.K]},
$asl:function(){return[W.K]},
$asb:function(){return[W.K]}},
h9:{"^":"t:15;",
$1:function(a){return!!J.L(H.i(a,"$isx")).$isK}},
ha:{"^":"t:23;",
$1:function(a){return H.d(H.i(a,"$isx"),"$isK")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",eg:{"^":"cQ;",$iseg:1,"%":"SVGScriptElement"},cQ:{"^":"K;",
gd3:function(a){return new P.h8(a,new W.ac(a))},
a6:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.ap])
C.a.h(z,W.f_(null))
C.a.h(z,W.f8())
C.a.h(z,new W.k3())
c=new W.fc(new W.e2(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.n).hV(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ac(w)
u=z.gaq(z)
for(z=J.a1(v);x=u.firstChild,x!=null;)z.u(v,x)
return v},
$iscQ:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",fG:{"^":"G;",$isfG:1,"%":"WebGLBuffer"},hc:{"^":"G;",$ishc:1,"%":"WebGLFramebuffer"},ic:{"^":"G;",$isic:1,"%":"WebGLProgram"},cK:{"^":"G;",
d0:function(a,b,c){return a.attachShader(b,c)},
ae:function(a,b,c){return a.bindBuffer(b,c)},
hJ:function(a,b,c){return a.bindFramebuffer(b,c)},
hK:function(a,b,c){return a.blendFunc(b,c)},
d2:function(a,b,c,d){return a.bufferData(b,c,d)},
hN:function(a,b){return a.clear(b)},
hO:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
hP:function(a,b){return a.clearDepth(b)},
hQ:function(a,b){return a.compileShader(b)},
hX:function(a,b){return a.createShader(b)},
hZ:function(a,b){return a.deleteProgram(b)},
i_:function(a,b){return a.deleteShader(b)},
i2:function(a,b){return a.depthFunc(b)},
i3:function(a,b){return a.disable(b)},
d7:function(a,b){return a.disableVertexAttribArray(b)},
i5:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c_:function(a,b){return a.enable(b)},
d9:function(a,b){return a.enableVertexAttribArray(b)},
dZ:function(a,b,c){return a.getActiveAttrib(b,c)},
e_:function(a,b,c){return a.getActiveUniform(b,c)},
e0:function(a,b,c){return a.getAttribLocation(b,c)},
cl:function(a,b){return a.getParameter(b)},
e3:function(a,b){return a.getProgramInfoLog(b)},
bu:function(a,b,c){return a.getProgramParameter(b,c)},
e5:function(a,b){return a.getShaderInfoLog(b)},
e6:function(a,b,c){return a.getShaderParameter(b,c)},
e7:function(a,b,c){return a.getUniformLocation(b,c)},
ik:function(a,b){return a.linkProgram(b)},
ed:function(a,b,c){return a.shaderSource(b,c)},
F:function(a,b,c){return a.uniform1f(b,c)},
M:function(a,b,c){return a.uniform1i(b,c)},
q:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dT:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dU:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dV:function(a,b){return a.useProgram(b)},
iX:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
iY:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscK:1,
"%":"WebGLRenderingContext"},iv:{"^":"G;",$isiv:1,"%":"WebGLShader"},j4:{"^":"G;",$isj4:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",R:{"^":"a;0a,0b,0c,0d,$ti",
sfd:function(a){this.a=H.k(a,"$isb",[H.W(this,"R",0)],"$asb")},
scP:function(a){this.b=H.j(a,{func:1,ret:P.H,args:[[P.l,H.W(this,"R",0)]]})},
scN:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.y,[P.l,H.W(this,"R",0)]]})},
scQ:function(a){this.d=H.j(a,{func:1,ret:-1,args:[P.y,[P.l,H.W(this,"R",0)]]})},
cr:function(a){this.sfd(H.c([],[a]))
this.scP(null)
this.scN(null)
this.scQ(null)},
cn:function(a,b,c){var z=H.W(this,"R",0)
H.j(b,{func:1,ret:P.H,args:[[P.l,z]]})
z={func:1,ret:-1,args:[P.y,[P.l,z]]}
H.j(a,z)
H.j(c,z)
this.scP(b)
this.scN(a)
this.scQ(c)},
bw:function(a,b){return this.cn(a,null,b)},
fB:function(a){var z
H.k(a,"$isl",[H.W(this,"R",0)],"$asl")
z=this.b
if(z!=null)return z.$1(a)
return!0},
fe:function(a,b){var z
H.k(b,"$isl",[H.W(this,"R",0)],"$asl")
z=this.c
if(z!=null)z.$2(a,b)},
gn:function(a){return this.a.length},
gK:function(a){var z=this.a
return new J.at(z,z.length,0,[H.v(z,0)])},
Y:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.W(this,"R",0)
H.z(b,z)
z=[z]
if(this.fB(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.fe(x,H.c([b],z))}},
$isl:1,
p:{
cv:function(a){var z=new O.R([a])
z.cr(a)
return z}}},cG:{"^":"a;0a,0b",
sbH:function(a){this.a=H.k(a,"$isb",[V.a2],"$asb")},
gn:function(a){return this.a.length},
gA:function(){var z=this.b
if(z==null){z=D.ae()
this.b=z}return z},
es:function(a){var z=this.b
if(!(z==null))z.U(a)},
ar:function(){return this.es(null)},
gS:function(){var z=this.a
if(z.length>0)return C.a.gbo(z)
else return V.cH()},
dK:function(a){var z=this.a
if(a==null)C.a.h(z,V.cH())
else C.a.h(z,a)
this.ar()},
c9:function(){var z=this.a
if(z.length>0){z.pop()
this.ar()}}}}],["","",,E,{"^":"",cq:{"^":"a;"},am:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a4:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
seU:function(a,b){this.y=H.k(b,"$isR",[E.am],"$asR")},
sa4:function(a){this.z=H.i(a,"$isbd")},
sco:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gA().L(0,this.gdG())
y=this.c
if(y!=null)y.gA().h(0,this.gdG())
x=new D.N("shape",z,this.c,this,[F.ei])
x.b=!0
this.a8(x)}},
saQ:function(a){var z,y
if(!J.P(this.r,a)){z=this.r
if(z!=null)z.gA().L(0,this.gdF())
if(a!=null)a.gA().h(0,this.gdF())
this.r=a
y=new D.N("mover",z,a,this,[U.bE])
y.b=!0
this.a8(y)}},
bs:function(a){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=a.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.d
z.sdW(z.a+z.d*a.y)
z.sdI(z.b+z.e*a.y)
z.sdM(z.c+z.f*a.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.av(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.I(0,V.av(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.I(0,V.av(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.ap()}u=z.x}else u=null
if(!J.P(u,this.x)){t=this.x
this.x=u
s=new D.N("matrix",t,u,this,[V.a2])
s.b=!0
this.a8(s)}for(z=this.y.a,z=new J.at(z,z.length,0,[H.v(z,0)]);z.v();)z.d.bs(a)},
aG:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gS())
else C.a.h(z.a,y.I(0,z.gS()))
z.ar()
a.dL(this.f)
z=a.dy
x=(z&&C.a).gbo(z)
if(x!=null&&this.d!=null)x.iJ(a,this)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.v(z,0)]);z.v();)z.d.aG(a)
a.dJ()
a.dx.c9()},
a8:function(a){var z=this.z
if(!(z==null))z.U(a)},
a_:function(){return this.a8(null)},
iu:[function(a){H.i(a,"$isA")
this.e=null
this.a8(a)},function(){return this.iu(null)},"jz","$1","$0","gdG",0,2,0],
it:[function(a){this.a8(H.i(a,"$isA"))},function(){return this.it(null)},"jy","$1","$0","gdF",0,2,0],
ir:[function(a){this.a8(H.i(a,"$isA"))},function(){return this.ir(null)},"jw","$1","$0","gdE",0,2,0],
jv:[function(a,b){var z,y,x,w,v,u,t
H.k(b,"$isl",[E.am],"$asl")
for(z=b.length,y=this.gdE(),x={func:1,ret:-1,args:[D.A]},w=[x],v=0;v<b.length;b.length===z||(0,H.w)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.bd()
t.sac(null)
t.saL(null)
t.c=null
t.d=0
u.sa4(t)}t=u.ga4()
t.toString
H.j(y,x)
if(t.a==null)t.sac(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a_()},"$2","giq",8,0,6],
jx:[function(a,b){var z,y
H.k(b,"$isl",[E.am],"$asl")
for(z=b.gK(b),y=this.gdE();z.v();)z.gD().gA().L(0,y)
this.a_()},"$2","gis",8,0,6],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaw:1},ik:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
sh9:function(a){this.dy=H.k(a,"$isb",[O.c6],"$asb")},
sh4:function(a){this.fr=H.k(a,"$isa7",[P.m,A.cL],"$asa7")},
eo:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.bw(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cG()
y=[V.a2]
z.sbH(H.c([],y))
z.b=null
z.gA().h(0,new E.im(this))
this.cy=z
z=new O.cG()
z.sbH(H.c([],y))
z.b=null
z.gA().h(0,new E.io(this))
this.db=z
z=new O.cG()
z.sbH(H.c([],y))
z.b=null
z.gA().h(0,new E.ip(this))
this.dx=z
this.sh9(H.c([],[O.c6]))
z=this.dy;(z&&C.a).h(z,null)
this.sh4(new H.aS(0,0,[P.m,A.cL]))},
giE:function(){var z=this.z
if(z==null){z=this.cy.gS().I(0,this.db.gS())
this.z=z}return z},
dL:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbo(z):a;(z&&C.a).h(z,y)},
dJ:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
il:function(a,b){var z=new E.ik(a,b)
z.eo(a,b)
return z}}},im:{"^":"t:4;a",
$1:function(a){var z
H.i(a,"$isA")
z=this.a
z.z=null
z.ch=null}},io:{"^":"t:4;a",
$1:function(a){var z
H.i(a,"$isA")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},ip:{"^":"t:4;a",
$1:function(a){var z
H.i(a,"$isA")
z=this.a
z.ch=null
z.cx=null}},iP:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a4:x<,0y,0z,0Q,0ch,0cx,0cy",
sa4:function(a){this.x=H.i(a,"$isbd")},
ev:[function(a){H.i(a,"$isA")
this.iL()},function(){return this.ev(null)},"eu","$1","$0","gcs",0,2,0],
gic:function(){var z,y,x
z=Date.now()
y=C.h.V(P.dL(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.bw(z,!1)
return x/y},
cS:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.I()
if(typeof z!=="number")return H.b5(z)
x=C.k.dA(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.I()
w=C.k.dA(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.ev(C.p,this.giK())}},
iL:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.j(new E.iR(this),{func:1,ret:-1,args:[P.aj]})
C.F.f0(z)
C.F.fR(z,W.fi(y,P.aj))}},"$0","giK",0,0,2],
iI:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.cS()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.bw(w,!1)
x.y=P.dL(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sn(w.a,0)
w.ar()
w=x.db
C.a.sn(w.a,0)
w.ar()
w=x.dx
C.a.sn(w.a,0)
w.ar()
w=x.dy;(w&&C.a).sn(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aG(this.e)}x=this.z
if(!(x==null))x.U(null)}catch(v){z=H.a5(v)
y=H.b4(v)
P.dk("Error: "+H.e(z))
P.dk("Stack: "+H.e(y))
throw H.f(z)}},
p:{
iQ:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$isct)return E.eu(a,!0,!0,!0,!1)
y=W.dA(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd3(a).h(0,y)
w=E.eu(y,!0,!0,!0,!1)
w.a=a
return w},
eu:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iP()
y=P.hA(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
x=C.x.ck(a,"webgl",y)
x=H.i(x==null?C.x.ck(a,"experimental-webgl",y):x,"$iscK")
if(x==null)H.r(P.p("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.il(x,a)
w=new T.iO(x)
w.b=H.Z((x&&C.b).cl(x,3379))
w.c=H.Z(C.b.cl(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.ja(a)
v=new X.hu()
v.c=new X.bg(!1,!1,!1)
v.sfI(P.bD(null,null,null,P.y))
w.b=v
v=new X.hS(w)
v.f=0
v.r=V.bG()
v.x=V.bG()
v.Q=1
v.ch=1
w.c=v
v=new X.hE(w)
v.r=0
v.x=V.bG()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iU(w)
v.e=0
v.f=V.bG()
v.r=V.bG()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sf1(H.c([],[[P.cO,P.a]]))
v=w.z
u=document
t=W.ag
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.U(u,"contextmenu",H.j(w.gfl(),s),!1,t))
v=w.z
r=W.a_
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.U(a,"focus",H.j(w.gfo(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.U(a,"blur",H.j(w.gfi(),q),!1,r))
v=w.z
p=W.bf
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.U(u,"keyup",H.j(w.gfq(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.U(u,"keydown",H.j(w.gfp(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.U(a,"mousedown",H.j(w.gfu(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.U(a,"mouseup",H.j(w.gfw(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.U(a,"mousemove",H.j(w.gfv(),s),!1,t))
p=w.z
o=W.bo;(p&&C.a).h(p,W.U(a,H.B(W.h1(a)),H.j(w.gfz(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.U(u,"mousemove",H.j(w.gfm(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.U(u,"mouseup",H.j(w.gfn(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.U(u,"pointerlockchange",H.j(w.gfA(),q),!1,r))
r=w.z
q=W.aX
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.U(a,"touchstart",H.j(w.gfG(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.U(a,"touchend",H.j(w.gfE(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.U(a,"touchmove",H.j(w.gfF(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.bw(Date.now(),!1)
z.cy=0
z.cS()
return z}}},iR:{"^":"t:40;a",
$1:function(a){var z
H.kR(a)
z=this.a
if(z.ch){z.ch=!1
z.iI()}}}}],["","",,Z,{"^":"",eV:{"^":"a;a,b",$isl2:1,p:{
jp:function(a,b,c){var z
H.k(c,"$isb",[P.y],"$asb")
z=a.createBuffer()
C.b.ae(a,b,z)
C.b.d2(a,b,new Int16Array(H.bq(c)),35044)
C.b.ae(a,b,null)
return new Z.eV(b,z)}}},dw:{"^":"cq;a,b,c,d,e",
b4:function(a){var z,y,x
try{y=a.a
C.b.d9(y,this.e)
C.b.iX(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.a5(x)
y=P.p('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.e(z))
throw H.f(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.e(this.e)+"]"}},jo:{"^":"a;a",$isl3:1},dx:{"^":"a;a,0b,c,d",
sf9:function(a){this.b=H.k(a,"$isb",[Z.cx],"$asb")},
aE:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
b4:function(a){var z,y
z=this.a
C.b.ae(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].b4(a)},
dS:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.d7(x,z[y].e)
C.b.ae(x,this.a.a,null)},
aG:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.h(w,x)
v=w[x]
w=v.c
u=w.a
C.b.ae(y,u,w.b)
C.b.i5(y,v.a,v.b,5123,0)
C.b.ae(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.m]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ak(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(y,", ")+"\nAttrs:   "+C.a.k(u,", ")},
$islk:1},cx:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aV(this.c)+"'")+"]"}},aY:{"^":"a;a",
gcp:function(a){var z,y
z=this.a
y=(z&$.$get$aC().a)!==0?3:0
if((z&$.$get$aB().a)!==0)y+=3
if((z&$.$get$aA().a)!==0)y+=3
if((z&$.$get$aD().a)!==0)y+=2
if((z&$.$get$aE().a)!==0)y+=3
if((z&$.$get$bm().a)!==0)y+=3
if((z&$.$get$bn().a)!==0)y+=4
if((z&$.$get$aZ().a)!==0)++y
return(z&$.$get$az().a)!==0?y+4:y},
hG:function(a){var z,y,x
z=$.$get$aC()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bm()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bn()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aZ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eU()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aY))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.m])
y=this.a
if((y&$.$get$aC().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aB().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aE().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bm().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bn().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aZ().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$az().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.k(z,"|")},
p:{
ab:function(a){return new Z.aY(a)}}}}],["","",,D,{"^":"",fJ:{"^":"a;"},bd:{"^":"a;0a,0b,0c,0d",
sac:function(a){this.a=H.k(a,"$isb",[{func:1,ret:-1,args:[D.A]}],"$asb")},
saL:function(a){this.b=H.k(a,"$isb",[{func:1,ret:-1,args:[D.A]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.A]}
H.j(b,z)
if(this.a==null)this.sac(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
L:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[D.A]})
z=this.a
z=z==null?null:C.a.O(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).L(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.O(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).L(z,b)||y}return y},
U:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.A(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.W(y,new D.h5(z))
y=this.b
if(!(y==null))C.a.W(y,new D.h6(z))
z=this.b
if(!(z==null))C.a.sn(z,0)
return!0},
iM:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.U(y)}}},
ap:function(){return this.iM(!0,!1)},
p:{
ae:function(){var z=new D.bd()
z.sac(null)
z.saL(null)
z.c=null
z.d=0
return z}}},h5:{"^":"t:21;a",
$1:function(a){var z
H.j(a,{func:1,ret:-1,args:[D.A]})
z=this.a.a
z.b
a.$1(z)}},h6:{"^":"t:21;a",
$1:function(a){var z
H.j(a,{func:1,ret:-1,args:[D.A]})
z=this.a.a
z.b
a.$1(z)}},A:{"^":"a;a,0b"},cy:{"^":"A;c,d,a,0b,$ti"},cz:{"^":"A;c,d,a,0b,$ti"},N:{"^":"A;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}}],["","",,X,{"^":"",dy:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dy))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}},dT:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dT))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}},hu:{"^":"a;0a,0b,0c,0d",
sfI:function(a){this.d=H.k(a,"$iseh",[P.y],"$aseh")},
iA:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iw:function(a){this.c=a.b
this.d.L(0,a.a)
return!1}},hE:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
c8:function(a,b){this.r=a.a
return!1},
aS:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.e9()
if(typeof z!=="number")return z.dX()
this.r=(z&~y)>>>0
return!1},
aR:function(a,b){return!1},
iB:function(a){return!1},
ft:function(a,b,c){return}},bg:{"^":"a;a,b,c",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bg))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},hS:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c8:function(a,b){this.f=a.a
return!1},
aS:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.e9()
if(typeof z!=="number")return z.dX()
this.f=(z&~y)>>>0
return!1},
aR:function(a,b){return!1},
iC:function(a,b){return!1}},iU:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
iz:function(a){H.k(a,"$isb",[V.aq],"$asb")
return!1},
ix:function(a){H.k(a,"$isb",[V.aq],"$asb")
return!1},
iy:function(a){H.k(a,"$isb",[V.aq],"$asb")
return!1}},ja:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sf1:function(a){this.z=H.k(a,"$isb",[[P.cO,P.a]],"$asb")},
cG:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dT(z,new X.bg(y,a.altKey,a.shiftKey))},
ay:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bg(y,a.altKey,a.shiftKey)},
bQ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bg(y,a.altKey,a.shiftKey)},
aj:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.Z()
v=z.top
if(typeof x!=="number")return x.Z()
return new V.aq(y-w,x-v)},
aM:function(a){return new V.bK(a.movementX,a.movementY)},
bM:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.aq])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v){u=x[v]
t=C.k.a9(u.pageX)
C.k.a9(u.pageY)
s=z.left
C.k.a9(u.pageX)
C.a.h(y,new V.aq(t-s,C.k.a9(u.pageY)-z.top))}return y},
ah:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dy(z,new X.bg(y,a.altKey,a.shiftKey))},
bI:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.Z()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.Z()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jc:[function(a){this.f=!0},"$1","gfo",4,0,9],
j6:[function(a){this.f=!1},"$1","gfi",4,0,9],
j9:[function(a){H.i(a,"$isag")
if(this.f&&this.bI(a))a.preventDefault()},"$1","gfl",4,0,3],
je:[function(a){var z
H.i(a,"$isbf")
if(!this.f)return
z=this.cG(a)
this.b.iA(z)},"$1","gfq",4,0,18],
jd:[function(a){var z
H.i(a,"$isbf")
if(!this.f)return
z=this.cG(a)
this.b.iw(z)},"$1","gfp",4,0,18],
jg:[function(a){var z,y,x,w
H.i(a,"$isag")
z=this.a
z.focus()
this.f=!0
this.ay(a)
if(this.x){y=this.ah(a)
x=this.aM(a)
if(this.d.c8(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ah(a)
w=this.aj(a)
if(this.c.c8(y,w))a.preventDefault()},"$1","gfu",4,0,3],
ji:[function(a){var z,y,x
H.i(a,"$isag")
this.ay(a)
z=this.ah(a)
if(this.x){y=this.aM(a)
if(this.d.aS(z,y))a.preventDefault()
return}if(this.r)return
x=this.aj(a)
if(this.c.aS(z,x))a.preventDefault()},"$1","gfw",4,0,3],
jb:[function(a){var z,y,x
H.i(a,"$isag")
if(!this.bI(a)){this.ay(a)
z=this.ah(a)
if(this.x){y=this.aM(a)
if(this.d.aS(z,y))a.preventDefault()
return}if(this.r)return
x=this.aj(a)
if(this.c.aS(z,x))a.preventDefault()}},"$1","gfn",4,0,3],
jh:[function(a){var z,y,x
H.i(a,"$isag")
this.ay(a)
z=this.ah(a)
if(this.x){y=this.aM(a)
if(this.d.aR(z,y))a.preventDefault()
return}if(this.r)return
x=this.aj(a)
if(this.c.aR(z,x))a.preventDefault()},"$1","gfv",4,0,3],
ja:[function(a){var z,y,x
H.i(a,"$isag")
if(!this.bI(a)){this.ay(a)
z=this.ah(a)
if(this.x){y=this.aM(a)
if(this.d.aR(z,y))a.preventDefault()
return}if(this.r)return
x=this.aj(a)
if(this.c.aR(z,x))a.preventDefault()}},"$1","gfm",4,0,3],
jj:[function(a){var z,y
H.i(a,"$isbo")
this.ay(a)
z=new V.bK((a&&C.E).gi0(a),C.E.gi1(a)).B(0,180)
if(this.x){if(this.d.iB(z))a.preventDefault()
return}if(this.r)return
y=this.aj(a)
if(this.c.iC(z,y))a.preventDefault()},"$1","gfz",4,0,34],
jk:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.ah(this.y)
x=this.aj(this.y)
this.d.ft(y,x,z)}},"$1","gfA",4,0,9],
jp:[function(a){var z
H.i(a,"$isaX")
this.a.focus()
this.f=!0
this.bQ(a)
z=this.bM(a)
if(this.e.iz(z))a.preventDefault()},"$1","gfG",4,0,8],
jn:[function(a){var z
H.i(a,"$isaX")
this.bQ(a)
z=this.bM(a)
if(this.e.ix(z))a.preventDefault()},"$1","gfE",4,0,8],
jo:[function(a){var z
H.i(a,"$isaX")
this.bQ(a)
z=this.bM(a)
if(this.e.iy(z))a.preventDefault()},"$1","gfF",4,0,8]}}],["","",,D,{"^":"",bV:{"^":"a;0a,0b,0c,0d",
as:[function(a){var z
H.i(a,"$isA")
z=this.d
if(!(z==null))z.U(a)},function(){return this.as(null)},"j_","$1","$0","gey",0,2,0],
$isT:1,
$isaw:1},T:{"^":"a;",$isaw:1},hv:{"^":"R;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sf_:function(a){this.e=H.k(a,"$isb",[D.bV],"$asb")},
sfH:function(a){this.f=H.k(a,"$isb",[D.e7],"$asb")},
sh6:function(a){this.r=H.k(a,"$isb",[D.ej],"$asb")},
shc:function(a){this.x=H.k(a,"$isb",[D.er],"$asb")},
shd:function(a){this.y=H.k(a,"$isb",[D.es],"$asb")},
she:function(a){this.z=H.k(a,"$isb",[D.et],"$asb")},
as:function(a){var z=this.Q
if(!(z==null))z.U(a)},
fs:[function(a){var z
H.i(a,"$isA")
z=this.ch
if(!(z==null))z.U(a)},function(){return this.fs(null)},"jf","$1","$0","gcO",0,2,0],
jl:[function(a){var z,y,x
H.k(a,"$isl",[D.T],"$asl")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.w)(a),++y){x=a[y]
if(x==null||this.ex(x))return!1}return!0},"$1","gfC",4,0,28],
j3:[function(a,b){var z,y,x,w,v,u,t,s
z=D.T
H.k(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gcO(),w={func:1,ret:-1,args:[D.A]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=H.i(b[u],"$isT")
if(t instanceof D.bV)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bd()
s.sac(null)
s.saL(null)
s.c=null
s.d=0
t.d=s}H.j(x,w)
if(s.a==null)s.sac(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.cy(a,b,this,[z])
z.b=!0
this.as(z)},"$2","gff",8,0,12],
jm:[function(a,b){var z,y,x,w
z=D.T
H.k(b,"$isl",[z],"$asl")
for(y=b.gK(b),x=this.gcO();y.v();){w=y.gD()
C.a.L(this.e,w)
w.gA().L(0,x)}z=new D.cz(a,b,this,[z])
z.b=!0
this.as(z)},"$2","gfD",8,0,12],
ex:function(a){var z=C.a.O(this.e,a)
return z},
$asl:function(){return[D.T]},
$asR:function(){return[D.T]}},e7:{"^":"a;",$isT:1,$isaw:1},ej:{"^":"a;",$isT:1,$isaw:1},er:{"^":"a;",$isT:1,$isaw:1},es:{"^":"a;",$isT:1,$isaw:1},et:{"^":"a;",$isT:1,$isaw:1}}],["","",,V,{"^":"",
l5:[function(a,b){if(typeof b!=="number")return b.Z()
if(typeof a!=="number")return H.b5(a)
return Math.abs(b-a)<=1e-9},"$2","hR",8,0,26],
dm:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.k.e8(a-b,z)
return(a<0?a+z:a)+b},
F:function(a,b,c){if(a==null)return C.i.an("null",c)
return C.i.an(C.k.dQ($.n.$2(a,0)?0:a,b),c+b+1)},
b3:function(a,b,c){var z,y,x,w,v,u
H.k(a,"$isb",[P.u],"$asb")
z=H.c([],[P.m])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.w)(a),++w){v=V.F(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.R(z,u,C.i.an(z[u],x))}return z},
V:{"^":"a;a,b,c",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}},
bS:{"^":"a;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bS))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}},
e_:{"^":"a;a,b,c,d,e,f,r,x,y",
a2:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.u])
return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e_))return!1
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
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.u]
y=V.b3(H.c([this.a,this.d,this.r],z),3,0)
x=V.b3(H.c([this.b,this.e,this.x],z),3,0)
w=V.b3(H.c([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.h(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.h(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.h(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.h(y,1)
s=" "+y[1]+", "
if(1>=u)return H.h(x,1)
s=s+x[1]+", "
if(1>=t)return H.h(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.h(y,2)
z=" "+y[2]+", "
if(2>=u)return H.h(x,2)
z=z+x[2]+", "
if(2>=t)return H.h(w,2)
return s+(z+w[2]+"]")}},
a2:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a2:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.u])
return z},
dC:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.n.$2(a2,0))return V.cH()
a3=1/a2
a4=-w
a5=-i
return V.av((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
I:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.i(a7,"$isa2")
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
return V.av(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
ce:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.O(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
aV:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.a3(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
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
i:function(a){return this.J()},
dB:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.u]
y=V.b3(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b3(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b3(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b3(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.h(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.h(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.h(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.h(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.h(y,1)
q=q+y[1]+", "
if(1>=t)return H.h(x,1)
q=q+x[1]+", "
if(1>=s)return H.h(w,1)
q=q+w[1]+", "
if(1>=r)return H.h(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.h(y,2)
u=u+y[2]+", "
if(2>=t)return H.h(x,2)
u=u+x[2]+", "
if(2>=s)return H.h(w,2)
u=u+w[2]+", "
if(2>=r)return H.h(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.h(y,3)
q=q+y[3]+", "
if(3>=t)return H.h(x,3)
q=q+x[3]+", "
if(3>=s)return H.h(w,3)
q=q+w[3]+", "
if(3>=r)return H.h(v,3)
return u+(q+v[3]+"]")},
J:function(){return this.dB("",3,0)},
w:function(a){return this.dB(a,3,0)},
p:{
cH:function(){var z=$.e1
if(z==null){z=V.av(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.e1=z}return z},
av:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
e0:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.B(0,Math.sqrt(c.H(c)))
y=b.al(z)
x=y.B(0,Math.sqrt(y.H(y)))
w=z.al(x)
v=new V.O(a.a,a.b,a.c)
u=x.aI(0).H(v)
t=w.aI(0).H(v)
s=z.aI(0).H(v)
return V.av(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
aq:{"^":"a;a,b",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aq))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"},
p:{
bG:function(){var z=$.e8
if(z==null){z=new V.aq(0,0)
$.e8=z}return z}}},
a3:{"^":"a;a,b,c",
P:function(a,b){return new V.a3(this.a+b.a,this.b+b.b,this.c+b.c)},
Z:function(a,b){return new V.a3(this.a-b.a,this.b-b.b,this.c-b.c)},
I:function(a,b){return new V.a3(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"},
p:{
e9:function(){var z=$.bh
if(z==null){z=new V.a3(0,0,0)
$.bh=z}return z}}},
ed:{"^":"a;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ed))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"},
p:{
ij:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ed(a,b,c,d)}}},
bK:{"^":"a;a,b",
ij:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.I()
y=this.b
if(typeof y!=="number")return y.I()
return Math.sqrt(z*z+y*y)},"$0","gn",1,0,11],
B:function(a,b){var z,y
if($.n.$2(b,0)){z=$.eL
if(z==null){z=new V.bK(0,0)
$.eL=z}return z}z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
return new V.bK(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bK))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}},
O:{"^":"a;a,b,c",
ij:[function(a){return Math.sqrt(this.H(this))},"$0","gn",1,0,11],
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
al:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.O(z*y-x*w,x*v-u*y,u*w-z*v)},
P:function(a,b){return new V.O(this.a+b.a,this.b+b.b,this.c+b.c)},
aI:function(a){return new V.O(-this.a,-this.b,-this.c)},
I:function(a,b){return new V.O(this.a*b,this.b*b,this.c*b)},
B:function(a,b){if($.n.$2(b,0))return V.bl()
return new V.O(this.a/b,this.b/b,this.c/b)},
dD:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"},
p:{
bl:function(){var z=$.eP
if(z==null){z=new V.O(0,0,0)
$.eP=z}return z},
eQ:function(){var z=$.eO
if(z==null){z=new V.O(0,1,0)
$.eO=z}return z},
eR:function(){var z=$.c9
if(z==null){z=new V.O(0,0,1)
$.c9=z}return z}}}}],["","",,U,{"^":"",dC:{"^":"bE;0a,0b",
gA:function(){var z=this.b
if(z==null){z=D.ae()
this.b=z}return z},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dC))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")},
p:{
dD:function(a){var z=new U.dC()
z.a=a
return z}}},bE:{"^":"fJ;"},ef:{"^":"bE;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gA:function(){var z=this.y
if(z==null){z=D.ae()
this.y=z}return z},
ax:function(a){var z=this.y
if(!(z==null))z.U(a)},
sdW:function(a){var z,y
a=V.dm(a,0,6.283185307179586)
z=this.a
if(!$.n.$2(z,a)){y=this.a
this.a=a
z=new D.N("yaw",y,a,this,[P.u])
z.b=!0
this.ax(z)}},
sdI:function(a){var z,y
a=V.dm(a,0,6.283185307179586)
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
z=new D.N("pitch",y,a,this,[P.u])
z.b=!0
this.ax(z)}},
sdM:function(a){var z,y
a=V.dm(a,0,6.283185307179586)
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
z=new D.N("roll",y,a,this,[P.u])
z.b=!0
this.ax(z)}},
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ef))return!1
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
i:function(a){return"Rotater: ["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"], ["+V.F(this.d,3,0)+", "+V.F(this.e,3,0)+", "+V.F(this.f,3,0)+"]"}}}],["","",,M,{"^":"",h3:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sez:function(a,b){this.d=H.k(b,"$isR",[E.am],"$asR")},
at:[function(a){var z
H.i(a,"$isA")
z=this.x
if(!(z==null))z.U(a)},function(){return this.at(null)},"j0","$1","$0","gab",0,2,0],
j7:[function(a,b){var z,y,x,w,v,u,t,s
z=E.am
H.k(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gab(),w={func:1,ret:-1,args:[D.A]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.bd()
s.sac(null)
s.saL(null)
s.c=null
s.d=0
t.sa4(s)}s=t.ga4()
s.toString
H.j(x,w)
if(s.a==null)s.sac(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.cy(a,b,this,[z])
z.b=!0
this.at(z)},"$2","gfj",8,0,6],
j8:[function(a,b){var z,y,x
z=E.am
H.k(b,"$isl",[z],"$asl")
for(y=b.gK(b),x=this.gab();y.v();)y.gD().gA().L(0,x)
z=new D.cz(a,b,this,[z])
z.b=!0
this.at(z)},"$2","gfk",8,0,6],
sdO:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gA().L(0,this.gab())
y=this.c
this.c=a
if(a!=null)a.gA().h(0,this.gab())
z=new D.N("technique",y,this.c,this,[O.c6])
z.b=!0
this.at(z)}},
gA:function(){var z=this.x
if(z==null){z=D.ae()
this.x=z}return z},
aG:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.dL(this.c)
z=this.b
z.toString
y=a.a
C.b.hJ(y,36160,null)
C.b.c_(y,2884)
C.b.c_(y,2929)
C.b.i2(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.b5(x)
t=C.k.a9(u*x)
u=v.b
if(typeof w!=="number")return H.b5(w)
s=C.k.a9(u*w)
u=C.k.a9(v.c*x)
a.c=u
v=C.k.a9(v.d*w)
a.d=v
C.b.iY(y,t,s,u,v)
C.b.hP(y,z.c)
z=z.a
C.b.hO(y,z.a,z.b,z.c,z.d)
C.b.hN(y,16640)
z=this.a
y=a.c
v=a.d
u=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(u*0.5)
n=V.av(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.dK(n)
y=$.e6
if(y==null){y=V.e9()
v=V.eQ()
u=$.eM
if(u==null){u=new V.O(0,0,-1)
$.eM=u}u=V.e0(y,v,u)
$.e6=u
m=u}else m=y
z=z.b
if(z!=null){l=z.a
if(l!=null)m=l.I(0,m)}a.db.dK(m)
z=this.c
if(z!=null)z.bs(a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.v(z,0)]);z.v();)z.d.bs(a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.v(z,0)]);z.v();)z.d.aG(a)
this.a.toString
a.cy.c9()
a.db.c9()
this.b.toString
a.dJ()},
$islg:1}}],["","",,A,{"^":"",ds:{"^":"a;a,b,c"},fF:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
i6:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
C.b.d9(w.a,w.c)}},
i4:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
C.b.d7(w.a,w.c)}}},hL:{"^":"cL;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ag,0a7,0b8,0da,0b9,0ba,0dc,0dd,0bb,0bc,0de,0df,0bd,0be,0dg,0dh,0bf,0di,0dj,0bg,0dk,0dl,0bh,0bi,0bj,0dm,0dn,0bk,0bl,0dq,0dr,0bm,0ds,0c0,0dt,0c1,0du,0c2,0dv,0c3,0dw,0c4,0dz,0c5,a,b,0c,0d,0e,0f,0r,0x,0y",
seP:function(a){this.r1=H.k(a,"$isb",[A.as],"$asb")},
seA:function(a){this.c0=H.k(a,"$isb",[A.cW],"$asb")},
seB:function(a){this.c1=H.k(a,"$isb",[A.cY],"$asb")},
seC:function(a){this.c2=H.k(a,"$isb",[A.cZ],"$asb")},
seD:function(a){this.c3=H.k(a,"$isb",[A.d_],"$asb")},
seE:function(a){this.c4=H.k(a,"$isb",[A.d0],"$asb")},
seF:function(a){this.c5=H.k(a,"$isb",[A.d1],"$asb")},
en:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.bj("")
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
a2.hi(z)
a2.hp(z)
a2.hj(z)
a2.hx(z)
a2.hy(z)
a2.hr(z)
a2.hC(z)
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
z=new P.bj("")
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
x.hm(z)
x.hh(z)
x.hk(z)
x.hn(z)
x.hv(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.ht(z)
x.hu(z)}x.hq(z)
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
p=H.c([],[P.m])
if(x.b!==C.c)C.a.h(p,"ambient()")
if(x.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.k(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.hl(z)
x.hs(z)
x.hw(z)
x.hz(z)
x.hA(z)
x.hB(z)
x.ho(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.m])
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
this.e=this.cH(s,35633)
this.f=this.cH(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
C.b.d0(x,v,this.e)
C.b.d0(x,this.r,this.f)
C.b.ik(x,this.r)
if(!H.db(C.b.bu(x,this.r,35714))){m=C.b.e3(x,this.r)
C.b.hZ(x,this.r)
H.r(P.p("Failed to link shader: "+H.e(m)))}this.h1()
this.h3()
this.Q=this.x.l(0,"posAttr")
this.cx=this.x.l(0,"normAttr")
this.ch=this.x.l(0,"binmAttr")
this.cy=this.x.l(0,"txt2DAttr")
this.db=this.x.l(0,"txtCubeAttr")
this.dx=this.x.l(0,"bendAttr")
if(a2.fr)this.id=H.d(this.y.m(0,"invViewMat"),"$isas")
if(y)this.dy=H.d(this.y.m(0,"objMat"),"$isas")
if(w)this.fr=H.d(this.y.m(0,"viewObjMat"),"$isas")
this.fy=H.d(this.y.m(0,"projViewObjMat"),"$isas")
if(a2.x2)this.k1=H.d(this.y.m(0,"txt2DMat"),"$iscX")
if(a2.y1)this.k2=H.d(this.y.m(0,"txtCubeMat"),"$isas")
if(a2.y2)this.k3=H.d(this.y.m(0,"colorMat"),"$isas")
this.seP(H.c([],[A.as]))
y=a2.ag
if(y>0){this.k4=H.i(this.y.m(0,"bendMatCount"),"$isD")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.l(0,v)
if(k==null)H.r(P.p("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(k,"$isas"))}}y=a2.a
if(y!==C.c){this.r2=H.d(this.y.m(0,"emissionClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.rx=H.d(this.y.m(0,"emissionTxt"),"$isa8")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$isD")
break
case C.e:this.ry=H.d(this.y.m(0,"emissionTxt"),"$isa9")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$isD")
break}}y=a2.b
if(y!==C.c){this.x2=H.d(this.y.m(0,"ambientClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.y1=H.d(this.y.m(0,"ambientTxt"),"$isa8")
this.ag=H.d(this.y.m(0,"nullAmbientTxt"),"$isD")
break
case C.e:this.y2=H.d(this.y.m(0,"ambientTxt"),"$isa9")
this.ag=H.d(this.y.m(0,"nullAmbientTxt"),"$isD")
break}}y=a2.c
if(y!==C.c){this.a7=H.d(this.y.m(0,"diffuseClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.b8=H.d(this.y.m(0,"diffuseTxt"),"$isa8")
this.b9=H.d(this.y.m(0,"nullDiffuseTxt"),"$isD")
break
case C.e:this.da=H.d(this.y.m(0,"diffuseTxt"),"$isa9")
this.b9=H.d(this.y.m(0,"nullDiffuseTxt"),"$isD")
break}}y=a2.d
if(y!==C.c){this.ba=H.d(this.y.m(0,"invDiffuseClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.dc=H.d(this.y.m(0,"invDiffuseTxt"),"$isa8")
this.bb=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$isD")
break
case C.e:this.dd=H.d(this.y.m(0,"invDiffuseTxt"),"$isa9")
this.bb=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$isD")
break}}y=a2.e
if(y!==C.c){this.be=H.d(this.y.m(0,"shininess"),"$isQ")
this.bc=H.d(this.y.m(0,"specularClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.de=H.d(this.y.m(0,"specularTxt"),"$isa8")
this.bd=H.d(this.y.m(0,"nullSpecularTxt"),"$isD")
break
case C.e:this.df=H.d(this.y.m(0,"specularTxt"),"$isa9")
this.bd=H.d(this.y.m(0,"nullSpecularTxt"),"$isD")
break}}switch(a2.f){case C.c:break
case C.f:break
case C.d:this.dg=H.d(this.y.m(0,"bumpTxt"),"$isa8")
this.bf=H.d(this.y.m(0,"nullBumpTxt"),"$isD")
break
case C.e:this.dh=H.d(this.y.m(0,"bumpTxt"),"$isa9")
this.bf=H.d(this.y.m(0,"nullBumpTxt"),"$isD")
break}if(a2.dy){this.di=H.d(this.y.m(0,"envSampler"),"$isa9")
this.dj=H.d(this.y.m(0,"nullEnvTxt"),"$isD")
y=a2.r
if(y!==C.c){this.bg=H.d(this.y.m(0,"reflectClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.dk=H.d(this.y.m(0,"reflectTxt"),"$isa8")
this.bh=H.d(this.y.m(0,"nullReflectTxt"),"$isD")
break
case C.e:this.dl=H.d(this.y.m(0,"reflectTxt"),"$isa9")
this.bh=H.d(this.y.m(0,"nullReflectTxt"),"$isD")
break}}y=a2.x
if(y!==C.c){this.bi=H.d(this.y.m(0,"refraction"),"$isQ")
this.bj=H.d(this.y.m(0,"refractClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.dm=H.d(this.y.m(0,"refractTxt"),"$isa8")
this.bk=H.d(this.y.m(0,"nullRefractTxt"),"$isD")
break
case C.e:this.dn=H.d(this.y.m(0,"refractTxt"),"$isa9")
this.bk=H.d(this.y.m(0,"nullRefractTxt"),"$isD")
break}}}y=a2.y
if(y!==C.c){this.bl=H.d(this.y.m(0,"alpha"),"$isQ")
switch(y){case C.c:break
case C.f:break
case C.d:this.dq=H.d(this.y.m(0,"alphaTxt"),"$isa8")
this.bm=H.d(this.y.m(0,"nullAlphaTxt"),"$isD")
break
case C.e:this.dr=H.d(this.y.m(0,"alphaTxt"),"$isa9")
this.bm=H.d(this.y.m(0,"nullAlphaTxt"),"$isD")
break}}this.seA(H.c([],[A.cW]))
this.seB(H.c([],[A.cY]))
this.seC(H.c([],[A.cZ]))
this.seD(H.c([],[A.d_]))
this.seE(H.c([],[A.d0]))
this.seF(H.c([],[A.d1]))
if(a2.k2){y=a2.z
if(y>0){this.ds=H.i(this.y.m(0,"dirLightCount"),"$isD")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.l(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.y
w="dirLights["+l+"].color"
j=x.l(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.c0;(x&&C.a).h(x,new A.cW(l,k,j))}}y=a2.Q
if(y>0){this.dt=H.i(this.y.m(0,"pntLightCount"),"$isD")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.l(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.l(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.y
w="pntLights["+l+"].color"
i=x.l(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.y
w="pntLights["+l+"].att0"
h=x.l(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isQ")
x=this.y
w="pntLights["+l+"].att1"
g=x.l(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isQ")
x=this.y
w="pntLights["+l+"].att2"
f=x.l(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isQ")
x=this.c1;(x&&C.a).h(x,new A.cY(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.du=H.i(this.y.m(0,"spotLightCount"),"$isD")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.l(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.y
w="spotLights["+l+"].objDir"
j=x.l(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.l(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.y
w="spotLights["+l+"].color"
h=x.l(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isC")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.l(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isQ")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.l(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isQ")
x=this.y
w="spotLights["+l+"].att0"
e=x.l(0,w)
if(e==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isQ")
x=this.y
w="spotLights["+l+"].att1"
d=x.l(0,w)
if(d==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isQ")
x=this.y
w="spotLights["+l+"].att2"
c=x.l(0,w)
if(c==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isQ")
x=this.c2;(x&&C.a).h(x,new A.cZ(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dv=H.i(this.y.m(0,"txtDirLightCount"),"$isD")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.l(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.l(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.l(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.l(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isC")
x=this.y
w="txtDirLights["+l+"].color"
g=x.l(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isC")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.l(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isD")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.l(0,w)
if(e==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isa8")
x=this.c3;(x&&C.a).h(x,new A.d_(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dw=H.i(this.y.m(0,"txtPntLightCount"),"$isD")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.l(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.l(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.l(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$iscX")
x=this.y
w="txtPntLights["+l+"].color"
h=x.l(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isC")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.l(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isD")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.l(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isQ")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.l(0,w)
if(e==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isQ")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.l(0,w)
if(d==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isQ")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.l(0,w)
if(c==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isa9")
x=this.c4;(x&&C.a).h(x,new A.d0(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dz=H.i(this.y.m(0,"txtSpotLightCount"),"$isD")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.l(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.l(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.l(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.l(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isC")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.l(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isC")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.l(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isD")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.l(0,w)
if(e==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isC")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.l(0,w)
if(d==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isQ")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.l(0,w)
if(c==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isQ")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.l(0,w)
if(b==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isQ")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.l(0,w)
if(a==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isQ")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.l(0,w)
if(a0==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isQ")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.l(0,w)
if(a1==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a1,"$isa8")
x=this.c5;(x&&C.a).h(x,new A.d1(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a5:function(a,b,c){C.b.M(b.a,b.d,1)},
a0:function(a,b,c){C.b.M(b.a,b.d,1)},
p:{
hK:function(a,b){var z,y
z=a.a7
y=new A.hL(b,z)
y.eq(b,z)
y.en(a,b)
return y}}},hO:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ag,a7,b8",
hi:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ag+"];\n"
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
hp:function(a){var z
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
hj:function(a){var z
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
hx:function(a){var z,y
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
hy:function(a){var z,y
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
hr:function(a){var z
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
hC:function(a){var z
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
ai:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.aX(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hm:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ai(a,z,"emission")
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
hh:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ai(a,z,"ambient")
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
hk:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ai(a,z,"diffuse")
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
hn:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ai(a,z,"invDiffuse")
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
hv:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ai(a,z,"specular")
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
hq:function(a){var z,y
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
ht:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ai(a,z,"reflect")
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
hu:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ai(a,z,"refract")
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
hl:function(a){var z,y
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
hs:function(a){var z,y
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
hw:function(a){var z,y
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
hz:function(a){var z,y,x
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
hA:function(a){var z,y,x
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
hB:function(a){var z,y,x
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
ho:function(a){var z
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
i:function(a){return this.a7}},cW:{"^":"a;a,b,c"},d_:{"^":"a;a,b,c,d,e,f,r,x"},cY:{"^":"a;a,b,c,d,e,f,r"},d0:{"^":"a;a,b,c,d,e,f,r,x,y,z"},cZ:{"^":"a;a,b,c,d,e,f,r,x,y,z"},d1:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cL:{"^":"cq;",
eq:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cH:function(a,b){var z,y,x
z=this.a
y=C.b.hX(z,b)
C.b.ed(z,y,a)
C.b.hQ(z,y)
if(!H.db(C.b.e6(z,y,35713))){x=C.b.e5(z,y)
C.b.i_(z,y)
throw H.f(P.p("Error compiling shader '"+H.e(y)+"': "+H.e(x)))}return y},
h1:function(){var z,y,x,w,v,u
z=H.c([],[A.ds])
y=this.a
x=H.Z(C.b.bu(y,this.r,35721))
if(typeof x!=="number")return H.b5(x)
w=0
for(;w<x;++w){v=C.b.dZ(y,this.r,w)
u=C.b.e0(y,this.r,v.name)
C.a.h(z,new A.ds(y,v.name,u))}this.x=new A.fF(z)},
h3:function(){var z,y,x,w,v,u
z=H.c([],[A.Y])
y=this.a
x=H.Z(C.b.bu(y,this.r,35718))
if(typeof x!=="number")return H.b5(x)
w=0
for(;w<x;++w){v=C.b.e_(y,this.r,w)
u=C.b.e7(y,this.r,v.name)
C.a.h(z,this.hY(v.type,v.size,v.name,u))}this.y=new A.j3(z)},
aw:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.D(z,y,b,c)
else return A.cV(z,y,b,a,c)},
eX:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.a8(z,y,b,c)
else return A.cV(z,y,b,a,c)},
eY:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.a9(z,y,b,c)
else return A.cV(z,y,b,a,c)},
b3:function(a,b){return new P.eY(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hY:function(a,b,c,d){switch(a){case 5120:return this.aw(b,c,d)
case 5121:return this.aw(b,c,d)
case 5122:return this.aw(b,c,d)
case 5123:return this.aw(b,c,d)
case 5124:return this.aw(b,c,d)
case 5125:return this.aw(b,c,d)
case 5126:return new A.Q(this.a,this.r,c,d)
case 35664:return new A.iZ(this.a,this.r,c,d)
case 35665:return new A.C(this.a,this.r,c,d)
case 35666:return new A.j1(this.a,this.r,c,d)
case 35667:return new A.j_(this.a,this.r,c,d)
case 35668:return new A.j0(this.a,this.r,c,d)
case 35669:return new A.j2(this.a,this.r,c,d)
case 35674:return new A.j5(this.a,this.r,c,d)
case 35675:return new A.cX(this.a,this.r,c,d)
case 35676:return new A.as(this.a,this.r,c,d)
case 35678:return this.eX(b,c,d)
case 35680:return this.eY(b,c,d)
case 35670:throw H.f(this.b3("BOOL",c))
case 35671:throw H.f(this.b3("BOOL_VEC2",c))
case 35672:throw H.f(this.b3("BOOL_VEC3",c))
case 35673:throw H.f(this.b3("BOOL_VEC4",c))
default:throw H.f(P.p("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}},bT:{"^":"a;a,b",
i:function(a){return this.b}},Y:{"^":"a;"},j3:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.l(0,b)
if(z==null)throw H.f(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.J()},
ib:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.w)(z),++w)x+=z[w].i(0)+a
return x},
J:function(){return this.ib("\n")}},D:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform1i: "+H.e(this.c)}},j_:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform2i: "+H.e(this.c)}},j0:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform3i: "+H.e(this.c)}},j2:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform4i: "+H.e(this.c)}},iY:{"^":"Y;0e,0f,a,b,c,d",
shf:function(a){this.e=H.k(a,"$isb",[P.y],"$asb")},
i:function(a){return"Uniform1iv: "+H.e(this.c)},
p:{
cV:function(a,b,c,d,e){var z=new A.iY(a,b,c,e)
z.f=d
z.shf(P.hB(d,0,!1,P.y))
return z}}},Q:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform1f: "+H.e(this.c)}},iZ:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform2f: "+H.e(this.c)}},C:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform3f: "+H.e(this.c)}},j1:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform4f: "+H.e(this.c)}},j5:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}},cX:{"^":"Y;a,b,c,d",
aa:function(a){var z=new Float32Array(H.bq(H.k(a,"$isb",[P.u],"$asb")))
C.b.dT(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.e(this.c)}},as:{"^":"Y;a,b,c,d",
aa:function(a){var z=new Float32Array(H.bq(H.k(a,"$isb",[P.u],"$asb")))
C.b.dU(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.e(this.c)}},a8:{"^":"Y;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.e(this.c)}},a9:{"^":"Y;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}}],["","",,F,{"^":"",
kZ:function(a,b,c,d){return F.ku(c,a,d,b,new F.l_())},
ku:function(a,b,c,d,e){var z=F.kX(a,b,new F.kv(H.j(e,{func:1,ret:V.a3,args:[P.u]}),d,b,c),null)
if(z==null)return
z.aA()
z.ip(new F.ji(),new F.hY())
return z},
kX:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(c,{func:1,ret:-1,args:[F.ay,P.u,P.u]})
if(a<1)return
if(b<1)return
z=new F.ei()
y=new F.jd(z)
y.b=!1
x=[F.ay]
y.shg(H.c([],x))
z.a=y
y=new F.iy(z)
y.sbL(H.c([],[F.c4]))
z.b=y
y=new F.ix(z)
y.sfa(H.c([],[F.bC]))
z.c=y
y=new F.iw(z)
y.sf2(H.c([],[F.X]))
z.d=y
z.e=null
w=H.c([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.d2(null,null,new V.bS(x,0,0,1),null,null,new V.aq(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.d6(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.d2(null,null,new V.bS(o,n,m,1),null,null,new V.aq(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.d6(d))}}z.d.hD(a+1,b+1,w)
return z},
l_:{"^":"t:31;",
$1:function(a){return new V.a3(Math.cos(a),Math.sin(a),0)}},
kv:{"^":"t:32;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dn(y.$1(z),x)
x=J.dn(y.$1(z+3.141592653589793/this.c),x).Z(0,w)
x=new V.O(x.a,x.b,x.c)
v=x.B(0,Math.sqrt(x.H(x)))
y=$.eN
if(y==null){y=new V.O(1,0,0)
$.eN=y
u=y}else u=y
y=v.al(!J.P(v,u)?V.eR():u)
t=y.B(0,Math.sqrt(y.H(y)))
y=t.al(v)
u=y.B(0,Math.sqrt(y.H(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.I(0,y*x)
x=t.I(0,r*x)
x=w.P(0,new V.a3(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.P(a.f,x)){a.f=x
y=a.a
if(y!=null)y.a_()}}},
X:{"^":"a;0a,0b,0c,0d,0e",
b7:function(){if(!this.gd8()){C.a.L(this.a.a.d.b,this)
this.a.a.a_()}this.fN()
this.fO()
this.fP()},
fZ:function(a){this.a=a
C.a.h(a.d.b,this)},
h_:function(a){this.b=a
C.a.h(a.d.c,this)},
h0:function(a){this.c=a
C.a.h(a.d.d,this)},
fN:function(){var z=this.a
if(z!=null){C.a.L(z.d.b,this)
this.a=null}},
fO:function(){var z=this.b
if(z!=null){C.a.L(z.d.c,this)
this.b=null}},
fP:function(){var z=this.c
if(z!=null){C.a.L(z.d.d,this)
this.c=null}},
gd8:function(){return this.a==null||this.b==null||this.c==null},
eO:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bl()
if(y!=null)v=v.P(0,y)
if(x!=null)v=v.P(0,x)
if(w!=null)v=v.P(0,w)
if(v.dD())return
return v.B(0,Math.sqrt(v.H(v)))},
eT:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.Z(0,y)
z=new V.O(z.a,z.b,z.c)
v=z.B(0,Math.sqrt(z.H(z)))
z=w.Z(0,y)
z=new V.O(z.a,z.b,z.c)
z=v.al(z.B(0,Math.sqrt(z.H(z))))
return z.B(0,Math.sqrt(z.H(z)))},
bX:function(){if(this.d!=null)return!0
var z=this.eO()
if(z==null){z=this.eT()
if(z==null)return!1}this.d=z
this.a.a.a_()
return!0},
eN:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bl()
if(y!=null)v=v.P(0,y)
if(x!=null)v=v.P(0,x)
if(w!=null)v=v.P(0,w)
if(v.dD())return
return v.B(0,Math.sqrt(v.H(v)))},
eS:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.n.$2(n,0)){z=r.Z(0,u)
z=new V.O(z.a,z.b,z.c)
m=z.B(0,Math.sqrt(z.H(z)))
if(o.a-p.a<0)m=m.aI(0)}else{l=(z-q.b)/n
z=r.Z(0,u).I(0,l).P(0,u).Z(0,x)
z=new V.O(z.a,z.b,z.c)
m=z.B(0,Math.sqrt(z.H(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.aI(0)}z=this.d
if(z!=null){k=z.B(0,Math.sqrt(z.H(z)))
z=k.al(m)
z=z.B(0,Math.sqrt(z.H(z))).al(k)
m=z.B(0,Math.sqrt(z.H(z)))}return m},
bV:function(){if(this.e!=null)return!0
var z=this.eN()
if(z==null){z=this.eS()
if(z==null)return!1}this.e=z
this.a.a.a_()
return!0},
gd4:function(a){if(J.P(this.a,this.b))return!0
if(J.P(this.b,this.c))return!0
if(J.P(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z,y
if(this.gd8())return a+"disposed"
z=a+C.i.an(J.ak(this.a.e),0)+", "+C.i.an(J.ak(this.b.e),0)+", "+C.i.an(J.ak(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
J:function(){return this.w("")},
p:{
bY:function(a,b,c){var z,y,x
z=new F.X()
y=a.a
if(y==null)H.r(P.p("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.p("May not create a face with vertices attached to different shapes."))
z.fZ(a)
z.h_(b)
z.h0(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a_()
return z}}},
h7:{"^":"a;"},
iE:{"^":"h7;",
c7:function(a,b,c){var z,y
z=b.a
z.a.a.G()
z=z.e
y=c.a
y.a.a.G()
if(z==y.e){z=b.b
z.a.a.G()
z=z.e
y=c.b
y.a.a.G()
if(z==y.e){z=b.c
z.a.a.G()
z=z.e
y=c.c
y.a.a.G()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.G()
z=z.e
y=c.b
y.a.a.G()
if(z==y.e){z=b.b
z.a.a.G()
z=z.e
y=c.c
y.a.a.G()
if(z==y.e){z=b.c
z.a.a.G()
z=z.e
y=c.a
y.a.a.G()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.G()
z=z.e
y=c.c
y.a.a.G()
if(z==y.e){z=b.b
z.a.a.G()
z=z.e
y=c.a
y.a.a.G()
if(z==y.e){z=b.c
z.a.a.G()
z=z.e
y=c.b
y.a.a.G()
y=z==y.e
z=y}else z=!1
return z}else return!1}}}},
bC:{"^":"a;"},
hw:{"^":"a;"},
iX:{"^":"hw;"},
c4:{"^":"a;"},
ei:{"^":"a;0a,0b,0c,0d,0e",
gA:function(){var z=this.e
if(z==null){z=D.ae()
this.e=z}return z},
aA:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aA()||!1
if(!this.a.aA())y=!1
z=this.e
if(!(z==null))z.ap()
return y},
ip:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.v(z,0)])
for(z=[F.ay];y.length!==0;){x=C.a.gi8(y)
C.a.iG(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.w)(y),++u){t=y[u]
if(t!=null&&a.c7(0,x,t)){C.a.h(w,t)
C.a.L(y,t)}}if(w.length>1)b.io(w)}}this.a.G()
this.c.ca()
this.d.ca()
this.b.iH()
this.c.cb(new F.iX())
this.d.cb(new F.iE())
z=this.e
if(!(z==null))z.ap()},
hL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aC()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aB().a)!==0)++w
if((x&$.$get$aA().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
if((x&$.$get$bm().a)!==0)++w
if((x&$.$get$bn().a)!==0)++w
if((x&$.$get$aZ().a)!==0)++w
if((x&$.$get$az().a)!==0)++w
v=b.gcp(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.u
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dw])
for(r=0,q=0;q<w;++q){p=b.hG(q)
o=p.gcp(p)
C.a.R(s,q,new Z.dw(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].il(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.R(t,l,m[k]);++l}}r+=o}H.k(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.ae(y,34962,j)
C.b.d2(y,34962,new Float32Array(H.bq(t)),35044)
C.b.ae(y,34962,null)
i=new Z.dx(new Z.eV(34962,j),s,b)
i.sf9(H.c([],[Z.cx]))
this.b.b
this.c.b
if(this.d.b.length!==0){x=P.y
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.G()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.G()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.G()
C.a.h(h,g.e)}f=Z.jp(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.cx(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.m])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.w("   "))}this.b.b
this.c.b
if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.w("   "))}return C.a.k(z,"\n")},
a8:function(a){var z=this.e
if(!(z==null))z.U(a)},
a_:function(){return this.a8(null)},
$isli:1},
iw:{"^":"a;a,0b",
sf2:function(a){this.b=H.k(a,"$isb",[F.X],"$asb")},
hD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,"$isb",[F.ay],"$asb")
z=H.c([],[F.X])
for(y=this.a,x=b,w=0,v=!1,u=1;u<a;++u,++w,++x){for(t=v,s=1;s<b;++s,x=o){r=c.length
if(w<0||w>=r)return H.h(c,w)
q=c[w];++w
if(w>=r)return H.h(c,w)
p=c[w]
o=x+1
if(o<0||o>=r)return H.h(c,o)
n=c[o]
if(x<0||x>=r)return H.h(c,x)
m=c[x]
r=y.a
if(t){r.h(0,q)
y.a.h(0,p)
y.a.h(0,n)
C.a.h(z,F.bY(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bY(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bY(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bY(p,m,q))}t=!t}v=!v}return z},
gn:function(a){return this.b.length},
cb:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.h(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.l(0,v)
for(t=v-1;t>=0;--t){s=w.d.l(0,t)
if(a.c7(0,u,s)){u.b7()
break}}}}},
ca:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.gd4(x)
if(y)x.b7()}},
aA:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.w)(z),++w)if(!z[w].bX())x=!1
return x},
bW:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.w)(z),++w)if(!z[w].bV())x=!1
return x},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].w(a))
return C.a.k(z,"\n")},
J:function(){return this.w("")}},
ix:{"^":"a;a,0b",
sfa:function(a){this.b=H.k(a,"$isb",[F.bC],"$asb")},
gn:function(a){return 0},
cb:function(a){var z,y,x,w,v
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.h(x,y)
w=x[y]
for(w.c.c,v=-1;!1;--v)w.c.l(0,v)}},
ca:function(){var z,y,x
for(z=-1;!1;--z){y=this.b
return H.h(y,z)
x=y[z]
y=x.gd4(x)
if(y)x.b7()}},
i:function(a){return this.J()},
w:function(a){var z,y,x
z=H.c([],[P.m])
for(y=0;!1;++y){x=this.b
if(y>=0)return H.h(x,y)
C.a.h(z,x[y].w(a+(""+y+". ")))}return C.a.k(z,"\n")},
J:function(){return this.w("")}},
iy:{"^":"a;a,0b",
sbL:function(a){this.b=H.k(a,"$isb",[F.c4],"$asb")},
gn:function(a){return 0},
iH:function(){var z,y
for(z=-1;!1;--z){y=this.b
return H.h(y,z)
y=y[z].gjD()
y=y.gjA(y)
if(y.gn(y).iZ(0,1)){y=this.b
return H.h(y,z)
y[z].b7()}}},
i:function(a){return this.J()},
w:function(a){var z,y,x
z=H.c([],[P.m])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.h(y,x)
C.a.h(z,y[x].w(a))}return C.a.k(z,"\n")},
J:function(){return this.w("")}},
ay:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
d6:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.d2(this.cx,x,u,z,y,w,v,a,t)},
il:function(a){var z,y
if(a.t(0,$.$get$aC())){z=this.f
y=[P.u]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.t(0,$.$get$aB())){z=this.r
y=[P.u]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.t(0,$.$get$aA())){z=this.x
y=[P.u]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.t(0,$.$get$aD())){z=this.y
y=[P.u]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.t(0,$.$get$aE())){z=this.z
y=[P.u]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.t(0,$.$get$bm())){z=this.Q
y=[P.u]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.t(0,$.$get$bn())){z=this.Q
y=[P.u]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.t(0,$.$get$aZ()))return H.c([this.ch],[P.u])
else if(a.t(0,$.$get$az())){z=H.c([-1,-1,-1,-1],[P.u])
return z}else return H.c([],[P.u])},
bX:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bl()
this.d.W(0,new F.jn(z))
z=z.a
this.r=z.B(0,Math.sqrt(z.H(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.ap()}return!0},
bV:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bl()
this.d.W(0,new F.jm(z))
z=z.a
this.x=z.B(0,Math.sqrt(z.H(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.ap()}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z,y,x
z=H.c([],[P.m])
C.a.h(z,C.i.an(J.ak(this.e),0))
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
C.a.h(z,V.F(this.ch,3,0))
C.a.h(z,"-")
x=C.a.k(z,", ")
return a+"{"+x+"}"},
J:function(){return this.w("")},
p:{
d2:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ay()
y=new F.jl(z)
y.sbL(H.c([],[F.c4]))
z.b=y
y=new F.jh(z)
x=[F.bC]
y.sfb(H.c([],x))
y.sfc(H.c([],x))
z.c=y
y=new F.je(z)
x=[F.X]
y.sf3(H.c([],x))
y.sf4(H.c([],x))
y.sf5(H.c([],x))
z.d=y
h=$.$get$eS()
z.e=0
y=$.$get$aC()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aB().a)!==0?e:null
z.x=(x&$.$get$aA().a)!==0?b:null
z.y=(x&$.$get$aD().a)!==0?f:null
z.z=(x&$.$get$aE().a)!==0?g:null
z.Q=(x&$.$get$eT().a)!==0?c:null
z.ch=(x&$.$get$aZ().a)!==0?i:0
z.cx=(x&$.$get$az().a)!==0?a:null
return z}}},
jn:{"^":"t:5;a",
$1:function(a){var z,y
H.i(a,"$isX")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.P(0,z)}}},
jm:{"^":"t:5;a",
$1:function(a){var z,y
H.i(a,"$isX")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.P(0,z)}}},
jd:{"^":"a;a,0b,0c",
shg:function(a){this.c=H.k(a,"$isb",[F.ay],"$asb")},
G:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.f(P.p("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a_()
return!0},
gn:function(a){return this.c.length},
aA:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)z[x].bX()
return!0},
bW:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)z[x].bV()
return!0},
hM:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.B(0,Math.sqrt(u*u+t*t+s*s))
if(!J.P(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.U(null)}}}}return!0},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
this.G()
z=H.c([],[P.m])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].w(a))
return C.a.k(z,"\n")},
J:function(){return this.w("")}},
je:{"^":"a;a,0b,0c,0d",
sf3:function(a){this.b=H.k(a,"$isb",[F.X],"$asb")},
sf4:function(a){this.c=H.k(a,"$isb",[F.X],"$asb")},
sf5:function(a){this.d=H.k(a,"$isb",[F.X],"$asb")},
gn:function(a){return this.b.length+this.c.length+this.d.length},
l:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.h(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.h(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.h(z,b)
return z[b]},
W:function(a,b){H.j(b,{func:1,ret:-1,args:[F.X]})
C.a.W(this.b,b)
C.a.W(this.c,new F.jf(this,b))
C.a.W(this.d,new F.jg(this,b))},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].w(a))
return C.a.k(z,"\n")},
J:function(){return this.w("")}},
jf:{"^":"t:5;a,b",
$1:function(a){H.i(a,"$isX")
if(!J.P(a.a,this.a))this.b.$1(a)}},
jg:{"^":"t:5;a,b",
$1:function(a){var z
H.i(a,"$isX")
z=this.a
if(!J.P(a.a,z)&&!J.P(a.b,z))this.b.$1(a)}},
jh:{"^":"a;a,0b,0c",
sfb:function(a){this.b=H.k(a,"$isb",[F.bC],"$asb")},
sfc:function(a){this.c=H.k(a,"$isb",[F.bC],"$asb")},
gn:function(a){return 0},
l:function(a,b){var z,y
if(b>=0){z=this.c
y=b-0
if(y>=0)return H.h(z,y)
return z[y]}else{z=this.b
return H.h(z,b)
return z[b]}},
i:function(a){return this.J()},
w:function(a){var z,y,x
z=H.c([],[P.m])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.h(y,x)
C.a.h(z,y[x].w(a))}for(y=this.c,x=0;!1;++x){if(x>=0)return H.h(y,x)
C.a.h(z,y[x].w(a))}return C.a.k(z,"\n")},
J:function(){return this.w("")}},
jj:{"^":"a;"},
ji:{"^":"jj;",
c7:function(a,b,c){return J.P(b.f,c.f)}},
jk:{"^":"a;"},
hY:{"^":"jk;",
io:function(a){var z,y,x,w,v,u,t,s,r
H.k(a,"$isb",[F.ay],"$asb")
z=V.bl()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.O(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.B(0,Math.sqrt(z.H(z)))
for(y=a.length,w=z==null,x=0;x<a.length;a.length===y||(0,H.w)(a),++x){v=a[x]
if(w)u=null
else{t=z.a
s=z.b
r=z.c
u=z.B(0,Math.sqrt(t*t+s*s+r*r))}if(!J.P(v.r,u)){v.r=u
t=v.a
if(t!=null){t=t.e
if(!(t==null))t.U(null)}}}return}},
jl:{"^":"a;a,0b",
sbL:function(a){this.b=H.k(a,"$isb",[F.c4],"$asb")},
gn:function(a){return 0},
i:function(a){return this.J()},
w:function(a){var z,y,x
z=H.c([],[P.m])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.h(y,x)
C.a.h(z,y[x].w(a))}return C.a.k(z,"\n")},
J:function(){return this.w("")}}}],["","",,O,{"^":"",hJ:{"^":"c6;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
seQ:function(a){this.e=H.k(a,"$isR",[V.a2],"$asR")},
gA:function(){var z=this.dy
if(z==null){z=D.ae()
this.dy=z}return z},
a3:[function(a){var z
H.i(a,"$isA")
z=this.dy
if(!(z==null))z.U(a)},function(){return this.a3(null)},"j1","$1","$0","geH",0,2,0],
fT:[function(a){H.i(a,"$isA")
this.a=null
this.a3(a)},function(){return this.fT(null)},"jq","$1","$0","gfS",0,2,0],
j4:[function(a,b){var z=V.a2
z=new D.cy(a,H.k(b,"$isl",[z],"$asl"),this,[z])
z.b=!0
this.a3(z)},"$2","gfg",8,0,22],
j5:[function(a,b){var z=V.a2
z=new D.cz(a,H.k(b,"$isl",[z],"$asl"),this,[z])
z.b=!0
this.a3(z)},"$2","gfh",8,0,22],
cE:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.V(z.e.length+3,4)*4
x=C.h.V(z.f.length+3,4)*4
w=C.h.V(z.r.length+3,4)*4
v=C.h.V(z.x.length+3,4)*4
u=C.h.V(z.y.length+3,4)*4
t=C.h.V(z.z.length+3,4)*4
s=C.h.V(this.e.a.length+3,4)*4
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
a2=$.$get$aC()
if(e){g=$.$get$aB()
a2=new Z.aY(a2.a|g.a)}if(d){g=$.$get$aA()
a2=new Z.aY(a2.a|g.a)}if(c){g=$.$get$aD()
a2=new Z.aY(a2.a|g.a)}if(b){g=$.$get$aE()
a2=new Z.aY(a2.a|g.a)}if(a0){g=$.$get$az()
a2=new Z.aY(a2.a|g.a)}return new A.hO(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
N:function(a,b){H.k(a,"$isb",[T.eq],"$asb")},
bs:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.at(z,z.length,0,[H.v(z,0)]);z.v();){y=z.d
y.toString
x=$.c9
if(x==null){x=new V.O(0,0,1)
$.c9=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.ce(x)}}},
iJ:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=this.a
if(z==null){z=this.cE()
y=a.fr.l(0,z.a7)
if(y==null){y=A.hK(z,a.a)
x=y.b
if(x.length===0)H.r(P.p("May not cache a shader with no name."))
if(a.fr.d5(x))H.r(P.p('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.R(0,x,y)}this.a=y
a0.e=null
z=y}w=z.z
v=w.b8
z=a0.e
if(!(z instanceof Z.dx)){a0.e=null
z=null}if(z==null||!z.d.t(0,v)){z=w.r1
if(z)a0.d.aA()
u=w.r2
if(u){t=a0.d
s=t.e
if(!(s==null))++s.d
t.d.bW()
t.a.bW()
t=t.e
if(!(t==null))t.ap()}t=w.ry
if(t){s=a0.d
r=s.e
if(!(r==null))++r.d
s.a.hM()
s=s.e
if(!(s==null))s.ap()}q=a0.d.hL(new Z.jo(a.a),v)
q.aE($.$get$aC()).e=this.a.Q.c
if(z)q.aE($.$get$aB()).e=this.a.cx.c
if(u)q.aE($.$get$aA()).e=this.a.ch.c
if(w.rx)q.aE($.$get$aD()).e=this.a.cy.c
if(t)q.aE($.$get$aE()).e=this.a.db.c
if(w.x1)q.aE($.$get$az()).e=this.a.dx.c
a0.e=q}z=T.eq
p=H.c([],[z])
u=this.a
t=a.a
C.b.dV(t,u.r)
u.x.i6()
if(w.fx){u=this.a
s=a.dx.gS()
u=u.dy
u.toString
u.aa(s.a2(0,!0))}if(w.fy){u=this.a
s=a.cx
if(s==null){s=a.db.gS().I(0,a.dx.gS())
a.cx=s}u=u.fr
u.toString
u.aa(s.a2(0,!0))}u=this.a
s=a.ch
if(s==null){s=a.giE().I(0,a.dx.gS())
a.ch=s}u=u.fy
u.toString
u.aa(s.a2(0,!0))
if(w.x2){u=this.a
s=this.b
u=u.k1
u.toString
u.aa(C.q.a2(s,!0))}if(w.y1){u=this.a
s=this.c
u=u.k2
u.toString
u.aa(C.q.a2(s,!0))}if(w.y2){u=this.a
s=this.d
u=u.k3
u.toString
u.aa(C.q.a2(s,!0))}if(w.ag>0){o=this.e.a.length
u=this.a.k4
C.b.M(u.a,u.d,o)
for(u=[P.u],n=0;n<o;++n){s=this.a
r=this.e.a
if(n>=r.length)return H.h(r,n)
r=r[n]
s.toString
H.i(r,"$isa2")
s=s.r1
if(n>=s.length)return H.h(s,n)
s=s[n]
m=new Float32Array(H.bq(H.k(r.a2(0,!0),"$isb",u,"$asb")))
C.b.dU(s.a,s.d,!1,m)}}switch(w.a){case C.c:break
case C.f:u=this.a
s=this.f.f
u=u.r2
u.toString
r=s.a
l=s.b
s=s.c
C.b.q(u.a,u.d,r,l,s)
break
case C.d:this.N(p,this.f.d)
u=this.a
s=this.f.d
u.a5(u.rx,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break
case C.e:this.N(p,this.f.e)
u=this.a
s=this.f.e
u.a0(u.ry,u.x1,s)
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
case C.d:this.N(p,this.r.d)
u=this.a
s=this.r.d
u.a5(u.y1,u.ag,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break
case C.e:this.N(p,this.r.e)
u=this.a
s=this.r.e
u.a0(u.y2,u.ag,s)
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
u=u.a7
u.toString
r=s.a
l=s.b
s=s.c
C.b.q(u.a,u.d,r,l,s)
break
case C.d:this.N(p,this.x.d)
u=this.a
s=this.x.d
u.a5(u.b8,u.b9,s)
s=this.a
u=this.x.f
s=s.a7
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break
case C.e:this.N(p,this.x.e)
u=this.a
s=this.x.e
u.a0(u.da,u.b9,s)
s=this.a
u=this.x.f
s=s.a7
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break}switch(w.d){case C.c:break
case C.f:u=this.a
s=this.y.f
u=u.ba
u.toString
r=s.a
l=s.b
s=s.c
C.b.q(u.a,u.d,r,l,s)
break
case C.d:this.N(p,this.y.d)
u=this.a
s=this.y.d
u.a5(u.dc,u.bb,s)
s=this.a
u=this.y.f
s=s.ba
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break
case C.e:this.N(p,this.y.e)
u=this.a
s=this.y.e
u.a0(u.dd,u.bb,s)
s=this.a
u=this.y.f
s=s.ba
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break}switch(w.e){case C.c:break
case C.f:u=this.a
s=this.z.f
u=u.bc
u.toString
r=s.a
l=s.b
s=s.c
C.b.q(u.a,u.d,r,l,s)
s=this.a
l=this.z.ch
s=s.be
C.b.F(s.a,s.d,l)
break
case C.d:this.N(p,this.z.d)
u=this.a
s=this.z.d
u.a5(u.de,u.bd,s)
s=this.a
u=this.z.f
s=s.bc
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.be
C.b.F(u.a,u.d,l)
break
case C.e:this.N(p,this.z.e)
u=this.a
s=this.z.e
u.a0(u.df,u.bd,s)
s=this.a
u=this.z.f
s=s.bc
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.be
C.b.F(u.a,u.d,l)
break}if(w.z>0){o=this.dx.e.length
u=this.a.ds
C.b.M(u.a,u.d,o)
k=a.db.gS()
for(u=this.dx.e,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.w)(u),++i){h=u[i]
r=this.a.c0
if(j>=r.length)return H.h(r,j)
g=r[j]
r=k.ce(h.a)
l=r.a
f=r.b
e=r.c
e=r.B(0,Math.sqrt(l*l+f*f+e*e))
f=g.b
l=e.a
r=e.b
e=e.c
C.b.q(f.a,f.d,l,r,e)
e=h.c
r=g.c
C.b.q(r.a,r.d,e.a,e.b,e.c);++j}}if(w.Q>0){o=this.dx.f.length
u=this.a.dt
C.b.M(u.a,u.d,o)
k=a.db.gS()
for(u=this.dx.f,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.w)(u),++i){h=u[i]
r=this.a.c1
if(j>=r.length)return H.h(r,j)
g=r[j]
r=h.gaT(h)
l=g.b
f=r.gcg(r)
e=r.gci(r)
r=r.gcj(r)
C.b.q(l.a,l.d,f,e,r)
r=k.aV(h.gaT(h))
e=g.c
C.b.q(e.a,e.d,r.a,r.b,r.c)
r=h.gaf(h)
e=g.d
f=r.gbr()
l=r.gaW()
r=r.gb5()
C.b.q(e.a,e.d,f,l,r)
r=h.gbR()
l=g.e
C.b.F(l.a,l.d,r)
r=h.gbS()
l=g.f
C.b.F(l.a,l.d,r)
r=h.gbT()
l=g.r
C.b.F(l.a,l.d,r);++j}}if(w.ch>0){o=this.dx.r.length
u=this.a.du
C.b.M(u.a,u.d,o)
k=a.db.gS()
for(u=this.dx.r,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.w)(u),++i){h=u[i]
r=this.a.c2
if(j>=r.length)return H.h(r,j)
g=r[j]
r=h.gaT(h)
l=g.b
f=r.gcg(r)
e=r.gci(r)
r=r.gcj(r)
C.b.q(l.a,l.d,f,e,r)
r=h.gbZ(h).ju()
e=g.c
f=r.gaB(r)
l=r.gaC(r)
r=r.gaD()
C.b.q(e.a,e.d,f,l,r)
r=k.aV(h.gaT(h))
l=g.d
C.b.q(l.a,l.d,r.a,r.b,r.c)
r=h.gaf(h)
l=g.e
f=r.gbr()
e=r.gaW()
r=r.gb5()
C.b.q(l.a,l.d,f,e,r)
r=h.gjt()
e=g.f
C.b.F(e.a,e.d,r)
r=h.gjr()
e=g.r
C.b.F(e.a,e.d,r)
r=h.gbR()
e=g.x
C.b.F(e.a,e.d,r)
r=h.gbS()
e=g.y
C.b.F(e.a,e.d,r)
r=h.gbT()
e=g.z
C.b.F(e.a,e.d,r);++j}}if(w.cx>0){o=this.dx.x.length
u=this.a.dv
C.b.M(u.a,u.d,o)
k=a.db.gS()
for(u=this.dx.x,s=u.length,r=[z],j=0,i=0;i<u.length;u.length===s||(0,H.w)(u),++i){h=u[i]
l=this.a.c3
if(j>=l.length)return H.h(l,j)
g=l[j]
l=h.gaU()
H.k(p,"$isb",r,"$asb")
if(!C.a.O(p,l)){l.saO(0,p.length)
C.a.h(p,l)}l=h.gbZ(h)
f=g.d
e=l.gaB(l)
d=l.gaC(l)
l=l.gaD()
C.b.q(f.a,f.d,e,d,l)
l=h.giW()
d=g.b
e=l.gaB(l)
f=l.gaC(l)
l=l.gaD()
C.b.q(d.a,d.d,e,f,l)
l=h.giN(h)
f=g.c
e=l.gaB(l)
d=l.gaC(l)
l=l.gaD()
C.b.q(f.a,f.d,e,d,l)
l=k.ce(h.gbZ(h))
d=l.a
e=l.b
f=l.c
f=l.B(0,Math.sqrt(d*d+e*e+f*f))
e=g.e
d=f.a
l=f.b
f=f.c
C.b.q(e.a,e.d,d,l,f)
f=h.gaf(h)
l=g.f
d=f.gbr()
e=f.gaW()
f=f.gb5()
C.b.q(l.a,l.d,d,e,f)
f=h.gaU()
l=f.gaP(f)
if(!l){l=g.x
C.b.M(l.a,l.d,1)}else{l=g.r
e=f.gaP(f)
d=l.a
l=l.d
if(!e)C.b.M(d,l,0)
else C.b.M(d,l,f.gaO(f))
l=g.x
C.b.M(l.a,l.d,0)}++j}}if(w.cy>0){o=this.dx.y.length
u=this.a.dw
C.b.M(u.a,u.d,o)
k=a.db.gS()
for(u=this.dx.y,s=u.length,r=[P.u],l=[z],j=0,i=0;i<u.length;u.length===s||(0,H.w)(u),++i){h=u[i]
f=this.a.c4
if(j>=f.length)return H.h(f,j)
g=f[j]
f=h.gaU()
H.k(p,"$isb",l,"$asb")
if(!C.a.O(p,f)){f.saO(0,p.length)
C.a.h(p,f)}c=k.I(0,h.gS())
f=h.gS()
e=$.bh
if(e==null){e=new V.a3(0,0,0)
$.bh=e}e=f.aV(e)
f=g.b
d=e.gcg(e)
b=e.gci(e)
e=e.gcj(e)
C.b.q(f.a,f.d,d,b,e)
f=$.bh
if(f==null){f=new V.a3(0,0,0)
$.bh=f}f=c.aV(f)
e=g.c
C.b.q(e.a,e.d,f.a,f.b,f.c)
f=c.dC()
e=g.d
m=new Float32Array(H.bq(H.k(new V.e_(f.a,f.b,f.c,f.e,f.f,f.r,f.y,f.z,f.Q).a2(0,!0),"$isb",r,"$asb")))
C.b.dT(e.a,e.d,!1,m)
e=h.gaf(h)
f=g.e
d=e.gbr()
b=e.gaW()
e=e.gb5()
C.b.q(f.a,f.d,d,b,e)
e=h.gaU()
f=e.gaP(e)
if(!f){f=g.r
C.b.M(f.a,f.d,1)}else{f=g.f
d=e.gaP(e)
b=f.a
f=f.d
if(!d)C.b.M(b,f,0)
else C.b.M(b,f,e.gaO(e))
f=g.r
C.b.M(f.a,f.d,0)}f=h.gbR()
e=g.x
C.b.F(e.a,e.d,f)
f=h.gbS()
e=g.y
C.b.F(e.a,e.d,f)
f=h.gbT()
e=g.z
C.b.F(e.a,e.d,f);++j}}if(w.db>0){o=this.dx.z.length
u=this.a.dz
C.b.M(u.a,u.d,o)
k=a.db.gS()
for(u=this.dx.z,s=u.length,z=[z],j=0,i=0;i<u.length;u.length===s||(0,H.w)(u),++i){h=u[i]
r=this.a.c5
if(j>=r.length)return H.h(r,j)
g=r[j]
r=h.gaU()
H.k(p,"$isb",z,"$asb")
if(!C.a.O(p,r)){r.saO(0,p.length)
C.a.h(p,r)}r=h.gaT(h)
l=g.b
f=r.gcg(r)
e=r.gci(r)
r=r.gcj(r)
C.b.q(l.a,l.d,f,e,r)
r=h.gbZ(h)
e=g.c
f=r.gaB(r)
l=r.gaC(r)
r=r.gaD()
C.b.q(e.a,e.d,f,l,r)
r=h.giW()
l=g.d
f=r.gaB(r)
e=r.gaC(r)
r=r.gaD()
C.b.q(l.a,l.d,f,e,r)
r=h.giN(h)
e=g.e
f=r.gaB(r)
l=r.gaC(r)
r=r.gaD()
C.b.q(e.a,e.d,f,l,r)
r=k.aV(h.gaT(h))
l=g.f
C.b.q(l.a,l.d,r.a,r.b,r.c)
r=h.gaU()
l=r.gaP(r)
if(!l){r=g.x
C.b.M(r.a,r.d,1)}else{l=g.r
f=r.gaP(r)
e=l.a
l=l.d
if(!f)C.b.M(e,l,0)
else C.b.M(e,l,r.gaO(r))
r=g.x
C.b.M(r.a,r.d,0)}r=h.gaf(h)
l=g.y
f=r.gbr()
e=r.gaW()
r=r.gb5()
C.b.q(l.a,l.d,f,e,r)
r=h.gjB()
e=g.z
C.b.F(e.a,e.d,r)
r=h.gjC()
e=g.Q
C.b.F(e.a,e.d,r)
r=h.gbR()
e=g.ch
C.b.F(e.a,e.d,r)
r=h.gbS()
e=g.cx
C.b.F(e.a,e.d,r)
r=h.gbT()
e=g.cy
C.b.F(e.a,e.d,r);++j}}}switch(w.f){case C.c:break
case C.f:break
case C.d:this.N(p,this.Q.d)
z=this.a
u=this.Q.d
z.a5(z.dg,z.bf,u)
break
case C.e:this.N(p,this.Q.e)
z=this.a
u=this.Q.e
z.a0(z.dh,z.bf,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db.gS().dC()
a.Q=u}z=z.id
z.toString
z.aa(u.a2(0,!0))}if(w.dy){this.N(p,this.ch)
z=this.a
u=this.ch
z.a0(z.di,z.dj,u)
switch(w.r){case C.c:break
case C.f:z=this.a
u=this.cx.f
z=z.bg
z.toString
s=u.a
r=u.b
u=u.c
C.b.q(z.a,z.d,s,r,u)
break
case C.d:this.N(p,this.cx.d)
z=this.a
u=this.cx.d
z.a5(z.dk,z.bh,u)
u=this.a
z=this.cx.f
u=u.bg
u.toString
s=z.a
r=z.b
z=z.c
C.b.q(u.a,u.d,s,r,z)
break
case C.e:this.N(p,this.cx.e)
z=this.a
u=this.cx.e
z.a0(z.dl,z.bh,u)
u=this.a
z=this.cx.f
u=u.bg
u.toString
s=z.a
r=z.b
z=z.c
C.b.q(u.a,u.d,s,r,z)
break}switch(w.x){case C.c:break
case C.f:z=this.a
u=this.cy.f
z=z.bj
z.toString
s=u.a
r=u.b
u=u.c
C.b.q(z.a,z.d,s,r,u)
u=this.a
r=this.cy.ch
u=u.bi
C.b.F(u.a,u.d,r)
break
case C.d:this.N(p,this.cy.d)
z=this.a
u=this.cy.d
z.a5(z.dm,z.bk,u)
u=this.a
z=this.cy.f
u=u.bj
u.toString
s=z.a
r=z.b
z=z.c
C.b.q(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bi
C.b.F(z.a,z.d,r)
break
case C.e:this.N(p,this.cy.e)
z=this.a
u=this.cy.e
z.a0(z.dn,z.bk,u)
u=this.a
z=this.cy.f
u=u.bj
u.toString
s=z.a
r=z.b
z=z.c
C.b.q(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bi
C.b.F(z.a,z.d,r)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.f:z=this.a
s=this.db.f
z=z.bl
C.b.F(z.a,z.d,s)
break
case C.d:this.N(p,this.db.d)
z=this.a
s=this.db.d
z.a5(z.dq,z.bm,s)
s=this.a
z=this.db.f
s=s.bl
C.b.F(s.a,s.d,z)
break
case C.e:this.N(p,this.db.e)
z=this.a
s=this.db.e
z.a0(z.dr,z.bm,s)
s=this.a
z=this.db.f
s=s.bl
C.b.F(s.a,s.d,z)
break}C.b.c_(t,3042)
C.b.hK(t,770,771)}for(n=0;n<p.length;++n)p[n].b4(a)
z=a0.e
z.b4(a)
z.aG(a)
z.dS(a)
if(u)C.b.i3(t,3042)
for(n=0;n<p.length;++n)p[n].dS(a)
z=this.a
z.toString
C.b.dV(t,null)
z.x.i4()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cE().a7}},hM:{"^":"cF;0f,a,b,0c,0d,0e"},cF:{"^":"a;",
b0:["ek",function(){}]},hN:{"^":"cF;a,b,0c,0d,0e"},aT:{"^":"cF;0f,a,b,0c,0d,0e",
cT:function(a){var z,y
if(!J.P(this.f,a)){z=this.f
this.f=a
y=new D.N(this.b+".color",z,a,this,[V.V])
y.b=!0
this.a.a3(y)}},
b0:["bz",function(){this.ek()
this.cT(new V.V(1,1,1))}],
saf:function(a,b){var z
if(this.c===C.c){this.c=C.f
this.b0()
z=this.a
z.a=null
z.a3(null)}this.cT(b)}},hP:{"^":"aT;0ch,0f,a,b,0c,0d,0e",
fY:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.N(this.b+".refraction",y,a,this,[P.u])
z.b=!0
this.a.a3(z)}},
b0:function(){this.bz()
this.fY(1)}},hQ:{"^":"aT;0ch,0f,a,b,0c,0d,0e",
bO:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.N(this.b+".shininess",y,a,this,[P.u])
z.b=!0
this.a.a3(z)}},
b0:function(){this.bz()
this.bO(100)}},c6:{"^":"a;"}}],["","",,T,{"^":"",eq:{"^":"cq;"},iO:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",b9:{"^":"a;",
aF:function(a){return!0},
i:function(a){return"all"},
$isao:1},ao:{"^":"a;"},dZ:{"^":"a;0a",
sX:function(a){this.a=H.k(a,"$isb",[V.ao],"$asb")},
aF:["ej",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)if(z[x].aF(a))return!0
return!1}],
i:["cq",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.w)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isao:1},ah:{"^":"dZ;0a",
aF:function(a){return!this.ej(a)},
i:function(a){return"!["+this.cq(0)+"]"}},ie:{"^":"a;0a,0b",
aF:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.cJ(this.a)
y=H.cJ(this.b)
return z+".."+y},
$isao:1,
p:{
I:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.f(P.p("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.i.au(a,0)
y=C.i.au(b,0)
x=new V.ie()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},it:{"^":"a;0a",
sfX:function(a){this.a=H.k(a,"$isa7",[P.y,P.H],"$asa7")},
ep:function(a){var z,y
if(a.a.length<=0)throw H.f(P.p("May not create a SetMatcher with zero characters."))
z=new H.aS(0,0,[P.y,P.H])
for(y=new H.cE(a,a.gn(a),0,[H.W(a,"M",0)]);y.v();)z.R(0,y.d,!0)
this.sfX(z)},
aF:function(a){return this.a.d5(a)},
i:function(a){var z=this.a
return P.cP(new H.dV(z,[H.v(z,0)]),0,null)},
$isao:1,
p:{
q:function(a){var z=new V.it()
z.ep(a)
return z}}},cM:{"^":"a;a,b,0c,0d",
shb:function(a){this.c=H.k(a,"$isb",[V.cT],"$asb")},
k:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.cT(this.a.j(0,b))
w.sX(H.c([],[V.ao]))
w.c=!1
C.a.h(this.c,w)
return w},
i7:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
if(w.aF(a))return w}return},
i:function(a){return this.b}},ex:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.dl(this.b,"\n","\\n")
y=H.dl(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},cS:{"^":"a;a,b,0c",
sfQ:function(a){var z=P.m
this.c=H.k(a,"$isa7",[z,z],"$asa7")},
ao:function(a,b,c){var z,y,x
H.k(c,"$isb",[P.m],"$asb")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.w)(c),++y){x=c[y]
this.c.R(0,x,b)}},
i:function(a){return this.b}},iT:{"^":"a;0a,0b,0c",
sh7:function(a){this.a=H.k(a,"$isa7",[P.m,V.cM],"$asa7")},
sha:function(a){this.b=H.k(a,"$isa7",[P.m,V.cS],"$asa7")},
j:function(a,b){var z=this.a.l(0,b)
if(z==null){z=new V.cM(this,b)
z.shb(H.c([],[V.cT]))
z.d=null
this.a.R(0,b,z)}return z},
E:function(a){var z,y
z=this.b.l(0,a)
if(z==null){z=new V.cS(this,a)
y=P.m
z.sfQ(new H.aS(0,0,[y,y]))
this.b.R(0,a,z)}return z},
dR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.ex])
y=this.c
x=[P.y]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.au(a,t)
r=y.i7(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cP(w,0,null)
throw H.f(P.p("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cP(w,0,null)
p=y.d
o=p.c.l(0,q)
u=new V.ex(o==null?p.b:o,q,t)}++t}}},
p:{
c7:function(){var z,y
z=new V.iT()
y=P.m
z.sh7(new H.aS(0,0,[y,V.cM]))
z.sha(new H.aS(0,0,[y,V.cS]))
z.c=null
return z}}},cT:{"^":"dZ;b,0c,0a",
i:function(a){return this.b.b+": "+this.cq(0)}}}],["","",,X,{"^":"",dz:{"^":"a;",$isaw:1},hd:{"^":"en;0a,0b,0c,0d,0e,0f,0r,0x",
gA:function(){var z=this.x
if(z==null){z=D.ae()
this.x=z}return z}},i0:{"^":"a;0a,0b,0c,0d,0e,0f",
gA:function(){var z=this.f
if(z==null){z=D.ae()
this.f=z}return z},
aJ:[function(a){var z
H.i(a,"$isA")
z=this.f
if(!(z==null))z.U(a)},function(){return this.aJ(null)},"j2","$1","$0","gct",0,2,0],
saQ:function(a){var z,y
if(!J.P(this.b,a)){z=this.b
if(z!=null)z.gA().L(0,this.gct())
y=this.b
this.b=a
if(a!=null)a.gA().h(0,this.gct())
z=new D.N("mover",y,this.b,this,[U.bE])
z.b=!0
this.aJ(z)}},
$isaw:1,
$isdz:1},en:{"^":"a;"}}],["","",,V,{"^":"",
kV:function(a){P.iS(C.J,new V.kW(a))},
aH:{"^":"a;0d",
sbG:function(a){this.d=H.k(a,"$isb",[[P.b,W.aJ]],"$asb")},
aZ:function(a){this.b=new P.hj(C.L)
this.c=null
this.sbG(H.c([],[[P.b,W.aJ]]))},
C:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.aJ]))
y=a.split("\n")
for(z=y.length,x=[W.aJ],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.B(u)
s=this.b.eW(u,0,u.length)
r=s==null?u:s
C.j.eb(t,H.dl(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gbo(this.d),t)}},
dH:function(a){var z,y,x,w
H.k(a,"$isb",[P.m],"$asb")
this.sbG(H.c([],[[P.b,W.aJ]]))
z=C.a.k(a,"\n")
y=this.c
if(y==null){y=this.b6()
this.c=y}for(y=y.dR(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)this.bq(y[w])}},
kW:{"^":"t:35;a",
$1:function(a){H.i(a,"$isaW")
P.dk(C.k.dQ(this.a.gic(),2)+" fps")}},
fR:{"^":"aH;a,0b,0c,0d",
bq:function(a){switch(a.a){case"Class":this.C(a.b,"#551")
break
case"Comment":this.C(a.b,"#777")
break
case"Id":this.C(a.b,"#111")
break
case"Num":this.C(a.b,"#191")
break
case"Reserved":this.C(a.b,"#119")
break
case"String":this.C(a.b,"#171")
break
case"Symbol":this.C(a.b,"#616")
break
case"Type":this.C(a.b,"#B11")
break
case"Whitespace":this.C(a.b,"#111")
break}},
b6:function(){var z,y,x,w
z=V.c7()
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
C.a.h(z.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.b9())
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
C.a.h(z.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.b9())
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
x=new V.ah()
w=[V.ao]
x.sX(H.c([],w))
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
x=new V.ah()
x.sX(H.c([],w))
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
x.d=x.a.E("Num")
x=z.j(0,"Float")
x.d=x.a.E("Num")
x=z.j(0,"Sym")
x.d=x.a.E("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.E("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.E("String")
x=z.j(0,"EndComment")
x.d=x.a.E("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.E("Whitespace")
x=z.j(0,"Id")
y=x.a.E("Id")
x.d=y
x=[P.m]
y.ao(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.ao(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.ao(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
he:{"^":"aH;a,0b,0c,0d",
bq:function(a){switch(a.a){case"Builtin":this.C(a.b,"#411")
break
case"Comment":this.C(a.b,"#777")
break
case"Id":this.C(a.b,"#111")
break
case"Num":this.C(a.b,"#191")
break
case"Preprocess":this.C(a.b,"#737")
break
case"Reserved":this.C(a.b,"#119")
break
case"Symbol":this.C(a.b,"#611")
break
case"Type":this.C(a.b,"#171")
break
case"Whitespace":this.C(a.b,"#111")
break}},
b6:function(){var z,y,x,w
z=V.c7()
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
C.a.h(z.j(0,"Slash").k(0,"Sym").a,new V.b9())
x=z.j(0,"Comment").k(0,"EndComment")
y=V.q(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.ah()
w=[V.ao]
x.sX(H.c([],w))
C.a.h(y.a,x)
y=V.q(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Preprocess")
x=V.q(new H.o("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"Preprocess")
y=new V.ah()
y.sX(H.c([],w))
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
y.d=y.a.E("Num")
y=z.j(0,"Float")
y.d=y.a.E("Num")
y=z.j(0,"Sym")
y.d=y.a.E("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.E("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.E("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.E("Whitespace")
y=z.j(0,"Id")
x=y.a.E("Id")
y.d=x
y=[P.m]
x.ao(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.ao(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.ao(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
hf:{"^":"aH;a,0b,0c,0d",
bq:function(a){switch(a.a){case"Attr":this.C(a.b,"#911")
this.C("=","#111")
break
case"Id":this.C(a.b,"#111")
break
case"Other":this.C(a.b,"#111")
break
case"Reserved":this.C(a.b,"#119")
break
case"String":this.C(a.b,"#171")
break
case"Symbol":this.C(a.b,"#616")
break}},
b6:function(){var z,y,x
z=V.c7()
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
C.a.h(z.j(0,"OpenStr").k(0,"OpenStr").a,new V.b9())
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.b9())
y=z.j(0,"Other").k(0,"Other")
x=new V.ah()
x.sX(H.c([],[V.ao]))
C.a.h(y.a,x)
y=V.q(new H.o('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.E("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.E("String")
y=z.j(0,"Id")
x=y.a.E("Id")
y.d=x
x.ao(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.m]))
x=z.j(0,"Attr")
x.d=x.a.E("Attr")
x=z.j(0,"Other")
x.d=x.a.E("Other")
return z}},
i2:{"^":"aH;a,0b,0c,0d",
dH:function(a){H.k(a,"$isb",[P.m],"$asb")
this.sbG(H.c([],[[P.b,W.aJ]]))
this.C(C.a.k(a,"\n"),"#111")},
bq:function(a){},
b6:function(){return}},
iz:{"^":"a;0a,0b",
er:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.n).u(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.n.u(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.j.u(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.j.u(v,u)}t=z.createElement("div")
this.a=t
C.j.u(v,t)
this.b=null
t=W.a_
W.U(z,"scroll",H.j(new V.iC(x),{func:1,ret:-1,args:[t]}),!1,t)},
cZ:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.k(a,"$isb",[P.m],"$asb")
this.h2()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.dR(C.a.ii(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.j.u(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.j.u(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.j.u(y,t)
break
case"Link":s=u.b
if(H.fu(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=H.B(r[1])
q.textContent=H.B(r[0])
C.j.u(y,q)}else{p=P.fb(C.B,s,C.w,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
C.j.u(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.j.u(y,t)
break}}C.j.u(this.a,y)},
e1:function(a){var z,y,x,w
z=new V.fR("dart")
z.aZ("dart")
y=new V.he("glsl")
y.aZ("glsl")
x=new V.hf("html")
x.aZ("html")
w=C.a.i9(H.c([z,y,x],[V.aH]),new V.iD(a))
if(w!=null)return w
z=new V.i2("plain")
z.aZ("plain")
return z},
cY:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.k(a2,"$isb",[P.m],"$asb")
z=H.c([],[P.y])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.dh(w).bx(w,"+")){C.a.R(a2,x,C.i.aX(w,1))
C.a.h(z,1)
y=!0}else if(C.i.bx(w,"-")){C.a.R(a2,x,C.i.aX(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.e1(a0)
v.dH(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.j.u(t,s)
C.j.u(this.a,t)
r=P.fb(C.B,a,C.w,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.dr(null)
n.href="#"+r
n.textContent=a
C.j.u(o,n)
C.u.u(p,o)
C.m.u(q,p)
C.o.u(s,q)
if(y)for(m=a1,l=m,x=0;k=v.d,x<k.length;++x){w=k[x]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums codeLineLight"
h=u.createElement("td")
h.className="codeLineNums"
if(x>=z.length)return H.h(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.w)(w),++e)C.u.u(f,w[e])
C.m.u(j,i)
C.m.u(j,h)
C.m.u(j,f)
C.o.u(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.w)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gK(w);b.v();)C.u.u(h,b.gD())
C.m.u(j,i)
C.m.u(j,h)
C.o.u(s,j)}},
h2:function(){var z,y,x,w
if(this.b!=null)return
z=V.c7()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Bold")
x=V.q(new H.o("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").k(0,"Bold")
x=new V.ah()
w=[V.ao]
x.sX(H.c([],w))
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
x=new V.ah()
x.sX(H.c([],w))
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
x=new V.ah()
x.sX(H.c([],w))
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
y=new V.ah()
y.sX(H.c([],w))
C.a.h(x.a,y)
x=V.q(new H.o("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").k(0,"LinkEnd")
y=V.q(new H.o("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").k(0,"LinkTail")
y=new V.ah()
y.sX(H.c([],w))
C.a.h(x.a,y)
x=V.q(new H.o("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.b9())
x=z.j(0,"Other").k(0,"Other")
y=new V.ah()
y.sX(H.c([],w))
C.a.h(x.a,y)
x=V.q(new H.o("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.E("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.E("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.E("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.E("Link")
x=z.j(0,"Other")
x.d=x.a.E("Other")
this.b=z},
p:{
iA:function(a,b){var z=new V.iz()
z.er(a,!0)
return z}}},
iC:{"^":"t:36;a",
$1:function(a){P.ev(C.p,new V.iB(this.a))}},
iB:{"^":"t:1;a",
$0:function(){var z,y,x
z=C.k.a9(document.documentElement.scrollTop)
y=this.a.style
x=H.e(-0.01*z)+"px"
y.top=x}},
iD:{"^":"t:37;a",
$1:function(a){return H.i(a,"$isaH").a===this.a}}}],["","",,X,{"^":"",
fq:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=V.iA("Test 003",!0)
y=W.dA(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.j.u(z.a,y)
x=[P.m]
z.cZ(H.c(["A test of the Material Light Shader with a solid color directional lighting."],x))
z.cZ(H.c(["\xab[Back to Tests|../]"],x))
w=new E.am()
w.a=""
w.b=!0
x=E.am
w.seU(0,O.cv(x))
w.y.bw(w.giq(),w.gis())
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
w.sco(0,null)
w.saQ(null)
w.sco(0,F.kZ(30,1,15,0.5))
v=new U.ef()
v.a=0
v.b=0
v.c=0
v.d=0
v.e=0
v.f=0
v.r=0
v.sdW(0)
v.sdI(0)
v.sdM(0)
u=v.d
if(!$.n.$2(u,0.1)){t=v.d
v.d=0.1
u=new D.N("deltaYaw",t,0.1,v,[P.u])
u.b=!0
v.ax(u)}u=v.e
if(!$.n.$2(u,0.21)){t=v.e
v.e=0.21
u=new D.N("deltaPitch",t,0.21,v,[P.u])
u.b=!0
v.ax(u)}u=v.f
if(!$.n.$2(u,0.32)){t=v.f
v.f=0.32
u=new D.N("deltaRoll",t,0.32,v,[P.u])
u.b=!0
v.ax(u)}w.saQ(v)
s=new O.hJ()
s.seQ(O.cv(V.a2))
s.e.bw(s.gfg(),s.gfh())
v=new O.aT(s,"emission")
v.c=C.c
v.f=new V.V(0,0,0)
s.f=v
v=new O.aT(s,"ambient")
v.c=C.c
v.f=new V.V(0,0,0)
s.r=v
v=new O.aT(s,"diffuse")
v.c=C.c
v.f=new V.V(0,0,0)
s.x=v
v=new O.aT(s,"invDiffuse")
v.c=C.c
v.f=new V.V(0,0,0)
s.y=v
v=new O.hQ(s,"specular")
v.c=C.c
v.f=new V.V(0,0,0)
v.ch=100
s.z=v
v=new O.hN(s,"bump")
v.c=C.c
s.Q=v
s.ch=null
v=new O.aT(s,"reflect")
v.c=C.c
v.f=new V.V(0,0,0)
s.cx=v
v=new O.hP(s,"refract")
v.c=C.c
v.f=new V.V(0,0,0)
v.ch=1
s.cy=v
v=new O.hM(s,"alpha")
v.c=C.c
v.f=1
s.db=v
v=new D.hv()
v.cr(D.T)
v.sf_(H.c([],[D.bV]))
v.sfH(H.c([],[D.e7]))
v.sh6(H.c([],[D.ej]))
v.shc(H.c([],[D.er]))
v.shd(H.c([],[D.es]))
v.she(H.c([],[D.et]))
v.Q=null
v.ch=null
v.cn(v.gff(),v.gfC(),v.gfD())
s.dx=v
u=v.Q
if(u==null){u=D.ae()
v.Q=u
v=u}else v=u
v.h(0,s.gfS())
v=s.dx
u=v.ch
if(u==null){u=D.ae()
v.ch=u
v=u}else v=u
v.h(0,s.geH())
s.dy=null
v=s.dx
r=V.eQ()
u=U.dD(V.e0(V.e9(),r,new V.O(1,1,-3)))
q=new V.V(1,1,1)
p=new D.bV()
p.c=new V.V(1,1,1)
p.a=V.eR()
t=p.b
p.b=u
u.gA().h(0,p.gey())
u=new D.N("mover",t,p.b,p,[U.bE])
u.b=!0
p.as(u)
if(!p.c.t(0,q)){t=p.c
p.c=q
u=new D.N("color",t,q,p,[V.V])
u.b=!0
p.as(u)}v.h(0,p)
v=s.r
v.saf(0,new V.V(0,0,1))
v=s.x
v.saf(0,new V.V(0,1,0))
v=s.z
v.saf(0,new V.V(1,0,0))
v=s.z
if(v.c===C.c){v.c=C.f
v.bz()
v.bO(100)
u=v.a
u.a=null
u.a3(null)}v.bO(10)
o=new M.h3()
o.sez(0,O.cv(x))
o.d.bw(o.gfj(),o.gfk())
o.e=null
o.f=null
o.r=null
o.x=null
n=new X.i0()
n.c=1.0471975511965976
n.d=0.1
n.e=2000
n.saQ(null)
x=n.c
if(!$.n.$2(x,1.0471975511965976)){t=n.c
n.c=1.0471975511965976
x=new D.N("fov",t,1.0471975511965976,n,[P.u])
x.b=!0
n.aJ(x)}x=n.d
if(!$.n.$2(x,0.1)){t=n.d
n.d=0.1
x=new D.N("near",t,0.1,n,[P.u])
x.b=!0
n.aJ(x)}x=n.e
if(!$.n.$2(x,2000)){t=n.e
n.e=2000
x=new D.N("far",t,2000,n,[P.u])
x.b=!0
n.aJ(x)}x=o.a
if(x!==n){if(x!=null)x.gA().L(0,o.gab())
t=o.a
o.a=n
n.gA().h(0,o.gab())
x=new D.N("camera",t,o.a,o,[X.dz])
x.b=!0
o.at(x)}m=new X.hd()
x=new V.bS(0,0,0,1)
m.a=x
m.b=!0
m.c=2000
m.d=!0
m.e=0
m.f=!1
x=$.ee
if(x==null){x=V.ij(0,0,1,1)
$.ee=x}m.r=x
x=o.b
if(x!==m){if(x!=null)x.gA().L(0,o.gab())
t=o.b
o.b=m
m.gA().h(0,o.gab())
x=new D.N("target",t,o.b,o,[X.en])
x.b=!0
o.at(x)}o.sdO(null)
o.sdO(s)
o.d.h(0,w)
o.a.saQ(U.dD(V.av(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
l=C.y.e2(document,"testCanvas")
if(l==null)H.r(P.p("Failed to find an element with the identifier, testCanvas."))
k=E.iQ(l,!0,!0,!0,!1)
x=k.d
if(x!==o){if(x!=null)x.gA().L(0,k.gcs())
k.d=o
o.gA().h(0,k.gcs())
k.eu()}x=k.z
if(x==null){x=D.ae()
k.z=x}v={func:1,ret:-1,args:[D.A]}
u=H.j(new X.kO(z,s),v)
if(x.b==null)x.saL(H.c([],[v]))
x=x.b;(x&&C.a).h(x,u)
V.kV(k)},
kO:{"^":"t:4;a,b",
$1:function(a){var z,y,x,w
H.i(a,"$isA")
z=this.a
y=this.b
x=y.a
w=[P.m]
z.cY("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.cY("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dR.prototype
return J.hq.prototype}if(typeof a=="string")return J.bA.prototype
if(a==null)return J.dS.prototype
if(typeof a=="boolean")return J.hp.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.a)return a
return J.cg(a)}
J.cf=function(a){if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.a)return a
return J.cg(a)}
J.dg=function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.a)return a
return J.cg(a)}
J.kz=function(a){if(typeof a=="number")return J.bz.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bJ.prototype
return a}
J.kA=function(a){if(typeof a=="number")return J.bz.prototype
if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bJ.prototype
return a}
J.dh=function(a){if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bJ.prototype
return a}
J.a1=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.a)return a
return J.cg(a)}
J.P=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).t(a,b)}
J.fw=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kz(a).bv(a,b)}
J.dn=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kA(a).I(a,b)}
J.fx=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kL(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cf(a).l(a,b)}
J.fy=function(a,b,c,d){return J.a1(a).eM(a,b,c,d)}
J.bP=function(a,b){return J.a1(a).fL(a,b)}
J.dp=function(a,b){return J.a1(a).u(a,b)}
J.cm=function(a,b,c){return J.cf(a).hR(a,b,c)}
J.cn=function(a,b){return J.dg(a).Y(a,b)}
J.fz=function(a){return J.a1(a).ghH(a)}
J.bv=function(a){return J.L(a).gT(a)}
J.b8=function(a){return J.dg(a).gK(a)}
J.aP=function(a){return J.cf(a).gn(a)}
J.fA=function(a){return J.a1(a).giD(a)}
J.fB=function(a){return J.a1(a).giR(a)}
J.co=function(a,b){return J.a1(a).aH(a,b)}
J.dq=function(a){return J.dg(a).iF(a)}
J.fC=function(a,b,c){return J.dh(a).aY(a,b,c)}
J.fD=function(a){return J.dh(a).iV(a)}
J.ak=function(a){return J.L(a).i(a)}
I.aO=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.n=W.bQ.prototype
C.x=W.ct.prototype
C.j=W.aJ.prototype
C.I=W.fW.prototype
C.K=W.hg.prototype
C.y=W.hi.prototype
C.M=J.G.prototype
C.a=J.aR.prototype
C.h=J.dR.prototype
C.q=J.dS.prototype
C.k=J.bz.prototype
C.i=J.bA.prototype
C.T=J.bB.prototype
C.X=W.hV.prototype
C.C=J.i1.prototype
C.D=W.id.prototype
C.b=P.cK.prototype
C.u=W.iL.prototype
C.o=W.iM.prototype
C.m=W.iN.prototype
C.v=J.bJ.prototype
C.E=W.bo.prototype
C.F=W.jr.prototype
C.G=new P.i_()
C.H=new P.jc()
C.l=new P.jW()
C.c=new A.bT(0,"ColorSourceType.None")
C.f=new A.bT(1,"ColorSourceType.Solid")
C.d=new A.bT(2,"ColorSourceType.Texture2D")
C.e=new A.bT(3,"ColorSourceType.TextureCube")
C.p=new P.bb(0)
C.J=new P.bb(5e6)
C.L=new P.hk("element",!0,!1,!1,!1)
C.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.O=function(hooks) {
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
C.z=function(hooks) { return hooks; }

C.P=function(getTagFallback) {
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
C.Q=function() {
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
C.R=function(hooks) {
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
C.S=function(hooks) {
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
C.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.U=H.c(I.aO(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.V=H.c(I.aO(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.m])
C.W=H.c(I.aO([]),[P.m])
C.B=H.c(I.aO([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.r=H.c(I.aO(["bind","if","ref","repeat","syntax"]),[P.m])
C.t=H.c(I.aO(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.w=new P.jb(!1)
$.al=0
$.ba=null
$.du=null
$.d7=!1
$.fo=null
$.fj=null
$.ft=null
$.ce=null
$.ci=null
$.di=null
$.b0=null
$.br=null
$.bs=null
$.d8=!1
$.J=C.l
$.au=null
$.cw=null
$.dO=null
$.dN=null
$.dJ=null
$.dI=null
$.dH=null
$.dG=null
$.n=V.hR()
$.e1=null
$.e8=null
$.bh=null
$.ee=null
$.eL=null
$.eP=null
$.eN=null
$.eO=null
$.c9=null
$.eM=null
$.e6=null
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
I.$lazy(y,x,w)}})(["dF","$get$dF",function(){return H.fn("_$dart_dartClosure")},"cB","$get$cB",function(){return H.fn("_$dart_js")},"ey","$get$ey",function(){return H.ar(H.c8({
toString:function(){return"$receiver$"}}))},"ez","$get$ez",function(){return H.ar(H.c8({$method$:null,
toString:function(){return"$receiver$"}}))},"eA","$get$eA",function(){return H.ar(H.c8(null))},"eB","$get$eB",function(){return H.ar(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eF","$get$eF",function(){return H.ar(H.c8(void 0))},"eG","$get$eG",function(){return H.ar(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eD","$get$eD",function(){return H.ar(H.eE(null))},"eC","$get$eC",function(){return H.ar(function(){try{null.$method$}catch(z){return z.message}}())},"eI","$get$eI",function(){return H.ar(H.eE(void 0))},"eH","$get$eH",function(){return H.ar(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d4","$get$d4",function(){return P.js()},"bt","$get$bt",function(){return[]},"fa","$get$fa",function(){return P.ii("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dE","$get$dE",function(){return{}},"f0","$get$f0",function(){return P.dW(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.m)},"d5","$get$d5",function(){return P.hz(P.m,P.by)},"eU","$get$eU",function(){return Z.ab(0)},"eS","$get$eS",function(){return Z.ab(511)},"aC","$get$aC",function(){return Z.ab(1)},"aB","$get$aB",function(){return Z.ab(2)},"aA","$get$aA",function(){return Z.ab(4)},"aD","$get$aD",function(){return Z.ab(8)},"aE","$get$aE",function(){return Z.ab(16)},"bm","$get$bm",function(){return Z.ab(32)},"bn","$get$bn",function(){return Z.ab(64)},"eT","$get$eT",function(){return Z.ab(96)},"aZ","$get$aZ",function(){return Z.ab(128)},"az","$get$az",function(){return Z.ab(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.A]},{func:1,ret:P.E},{func:1,ret:-1},{func:1,ret:-1,args:[W.ag]},{func:1,ret:P.E,args:[D.A]},{func:1,ret:P.E,args:[F.X]},{func:1,ret:-1,args:[P.y,[P.l,E.am]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[W.a_]},{func:1,ret:P.H,args:[W.K,P.m,P.m,W.bL]},{func:1,ret:P.u},{func:1,ret:-1,args:[P.y,[P.l,D.T]]},{func:1,ret:P.E,args:[,,]},{func:1,ret:P.m,args:[P.y]},{func:1,ret:P.H,args:[W.x]},{func:1,ret:P.H,args:[W.ap]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:P.E,args:[,]},{func:1,ret:P.H,args:[P.m]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:-1,args:[P.y,[P.l,V.a2]]},{func:1,ret:W.K,args:[W.x]},{func:1,ret:-1,args:[W.x,W.x]},{func:1,ret:P.m,args:[P.m]},{func:1,ret:P.H,args:[P.u,P.u]},{func:1,args:[W.a_]},{func:1,ret:P.H,args:[[P.l,D.T]]},{func:1,ret:[P.aF,,],args:[,]},{func:1,ret:P.E,args:[,],opt:[,]},{func:1,ret:V.a3,args:[P.u]},{func:1,ret:P.E,args:[F.ay,P.u,P.u]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bo]},{func:1,ret:P.E,args:[P.aW]},{func:1,ret:P.E,args:[W.a_]},{func:1,ret:P.H,args:[V.aH]},{func:1,args:[P.m]},{func:1,args:[,P.m]},{func:1,ret:P.E,args:[P.aj]}]
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
if(x==y)H.kY(d||a)
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
Isolate.aO=a.aO
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
if(typeof dartMainRunner==="function")dartMainRunner(X.fq,[])
else X.fq([])})})()
//# sourceMappingURL=test.dart.js.map
