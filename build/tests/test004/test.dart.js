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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isB)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cS(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cT=function(){}
var dart=[["","",,H,{"^":"",kL:{"^":"a;a"}}],["","",,J,{"^":"",
cY:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c3:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cX==null){H.ki()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.ek("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$ck()]
if(v!=null)return v
v=H.kn(a)
if(v!=null)return v
if(typeof a=="function")return C.O
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$ck(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
B:{"^":"a;",
p:function(a,b){return a===b},
gL:function(a){return H.b6(a)},
i:["cU",function(a){return"Instance of '"+H.aG(a)+"'"}],
"%":"CanvasRenderingContext2D|DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer|WebGLTexture"},
h4:{"^":"B;",
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$isE:1},
h6:{"^":"B;",
p:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$isy:1},
cl:{"^":"B;",
gL:function(a){return 0},
i:["cW",function(a){return String(a)}]},
hz:{"^":"cl;"},
bu:{"^":"cl;"},
bn:{"^":"cl;",
i:function(a){var z=a[$.$get$dk()]
if(z==null)return this.cW(a)
return"JavaScript function for "+H.d(J.ac(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbk:1},
aD:{"^":"B;$ti",
h:function(a,b){H.u(b,H.q(a,0))
if(!!a.fixed$length)H.R(P.a1("add"))
a.push(b)},
fu:function(a,b){var z
if(!!a.fixed$length)H.R(P.a1("removeAt"))
z=a.length
if(b>=z)throw H.e(P.bs(b,null,null))
return a.splice(b,1)[0]},
F:function(a,b){var z
if(!!a.fixed$length)H.R(P.a1("remove"))
for(z=0;z<a.length;++z)if(J.I(a[z],b)){a.splice(z,1)
return!0}return!1},
O:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.au(a))}},
k:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.H(z,y,H.d(a[y]))
return z.join(b)},
f7:function(a){return this.k(a,"")},
f0:function(a,b,c){var z,y,x
H.f(b,{func:1,ret:P.E,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.e(P.au(a))}throw H.e(H.bK())},
f_:function(a,b){return this.f0(a,b,null)},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
cT:function(a,b,c){var z=a.length
if(b>z)throw H.e(P.X(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.X(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.q(a,0)])
return H.b(a.slice(b,c),[H.q(a,0)])},
geZ:function(a){if(a.length>0)return a[0]
throw H.e(H.bK())},
gaG:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.bK())},
bV:function(a,b){var z,y
H.f(b,{func:1,ret:P.E,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.e(P.au(a))}return!1},
J:function(a,b){var z
for(z=0;z<a.length;++z)if(J.I(a[z],b))return!0
return!1},
i:function(a){return P.cj(a,"[","]")},
gE:function(a){return new J.aj(a,a.length,0,[H.q(a,0)])},
gL:function(a){return H.b6(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.R(P.a1("set length"))
if(b<0)throw H.e(P.X(b,0,null,"newLength",null))
a.length=b},
H:function(a,b,c){H.u(c,H.q(a,0))
if(!!a.immutable$list)H.R(P.a1("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bf(a,b))
a[b]=c},
$isn:1,
$isc:1,
m:{
h3:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.cc(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.X(a,0,4294967295,"length",null))
return J.dz(new Array(a),b)},
dz:function(a,b){return J.bL(H.b(a,[b]))},
bL:function(a){H.c6(a)
a.fixed$length=Array
return a}}},
kK:{"^":"aD;$ti"},
aj:{"^":"a;a,b,c,0d,$ti",
sbu:function(a){this.d=H.u(a,H.q(this,0))},
gA:function(){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.A(z))
x=this.c
if(x>=y){this.sbu(null)
return!1}this.sbu(z[x]);++this.c
return!0},
$isaw:1},
bl:{"^":"B;",
c9:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.a1(""+a+".floor()"))},
Y:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.a1(""+a+".round()"))},
cq:function(a,b){var z,y
if(b>20)throw H.e(P.X(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL:function(a){return a&0x1FFFFFFF},
G:function(a,b){if(typeof b!=="number")throw H.e(H.ay(b))
return a*b},
cL:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
cZ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bQ(a,b)},
ag:function(a,b){return(a|0)===a?a/b|0:this.bQ(a,b)},
bQ:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.a1("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
aB:function(a,b){var z
if(a>0)z=this.em(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
em:function(a,b){return b>31?0:a>>>b},
au:function(a,b){if(typeof b!=="number")throw H.e(H.ay(b))
return a<b},
$isr:1,
$isab:1},
dA:{"^":"bl;",$isv:1},
h5:{"^":"bl;"},
bm:{"^":"B;",
ba:function(a,b){if(b<0)throw H.e(H.bf(a,b))
if(b>=a.length)H.R(H.bf(a,b))
return a.charCodeAt(b)},
ac:function(a,b){if(b>=a.length)throw H.e(H.bf(a,b))
return a.charCodeAt(b)},
P:function(a,b){H.w(b)
if(typeof b!=="string")throw H.e(P.cc(b,null,null))
return a+b},
cS:function(a,b,c){var z
if(c>a.length)throw H.e(P.X(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
aO:function(a,b){return this.cS(a,b,0)},
av:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.bs(b,null,null))
if(b>c)throw H.e(P.bs(b,null,null))
if(c>a.length)throw H.e(P.bs(c,null,null))
return a.substring(b,c)},
aP:function(a,b){return this.av(a,b,null)},
fJ:function(a){return a.toLowerCase()},
G:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.B)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fj:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.G(c,z)+a},
a7:function(a,b){return this.fj(a,b," ")},
eH:function(a,b,c){if(c>a.length)throw H.e(P.X(c,0,a.length,null,null))
return H.f5(a,b,c)},
i:function(a){return a},
gL:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isdN:1,
$isj:1}}],["","",,H,{"^":"",
bK:function(){return new P.cu("No element")},
h2:function(){return new P.cu("Too many elements")},
l:{"^":"iK;a",
gl:function(a){return this.a.length},
n:function(a,b){return C.c.ba(this.a,b)},
$asel:function(){return[P.v]},
$asH:function(){return[P.v]},
$asn:function(){return[P.v]},
$asc:function(){return[P.v]}},
ds:{"^":"n;"},
bN:{"^":"ds;$ti",
gE:function(a){return new H.cn(this,this.gl(this),0,[H.N(this,"bN",0)])},
bj:function(a,b){return this.cV(0,H.f(b,{func:1,ret:P.E,args:[H.N(this,"bN",0)]}))}},
cn:{"^":"a;a,b,c,0d,$ti",
sam:function(a){this.d=H.u(a,H.q(this,0))},
gA:function(){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.c2(z)
x=y.gl(z)
if(this.b!==x)throw H.e(P.au(z))
w=this.c
if(w>=x){this.sam(null)
return!1}this.sam(y.N(z,w));++this.c
return!0},
$isaw:1},
hl:{"^":"n;a,b,$ti",
gE:function(a){return new H.hm(J.aY(this.a),this.b,this.$ti)},
gl:function(a){return J.aB(this.a)},
N:function(a,b){return this.b.$1(J.ca(this.a,b))},
$asn:function(a,b){return[b]}},
hm:{"^":"aw;0a,b,c,$ti",
sam:function(a){this.a=H.u(a,H.q(this,1))},
t:function(){var z=this.b
if(z.t()){this.sam(this.c.$1(z.gA()))
return!0}this.sam(null)
return!1},
gA:function(){return this.a},
$asaw:function(a,b){return[b]}},
hn:{"^":"bN;a,b,$ti",
gl:function(a){return J.aB(this.a)},
N:function(a,b){return this.b.$1(J.ca(this.a,b))},
$asbN:function(a,b){return[b]},
$asn:function(a,b){return[b]}},
cH:{"^":"n;a,b,$ti",
gE:function(a){return new H.j0(J.aY(this.a),this.b,this.$ti)}},
j0:{"^":"aw;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA()))return!0
return!1},
gA:function(){return this.a.gA()}},
bJ:{"^":"a;$ti"},
el:{"^":"a;$ti"},
iK:{"^":"bM+el;"}}],["","",,H,{"^":"",
aX:function(a){var z,y
z=H.w(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kb:function(a){return init.types[H.Q(a)]},
kl:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.G(a).$isa7},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ac(a)
if(typeof z!=="string")throw H.e(H.ay(a))
return z},
b6:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aG:function(a){return H.hB(a)+H.cP(H.az(a),0,null)},
hB:function(a){var z,y,x,w,v,u,t,s,r
z=J.G(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.H||!!z.$isbu){u=C.v(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aX(w.length>1&&C.c.ac(w,0)===36?C.c.aP(w,1):w)},
dR:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hJ:function(a){var z,y,x,w
z=H.b([],[P.v])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.ay(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.aB(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.e(H.ay(w))}return H.dR(z)},
dS:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.ay(x))
if(x<0)throw H.e(H.ay(x))
if(x>65535)return H.hJ(a)}return H.dR(a)},
cq:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.aB(z,10))>>>0,56320|z&1023)}throw H.e(P.X(a,0,1114111,null,null))},
aF:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hI:function(a){var z=H.aF(a).getFullYear()+0
return z},
hG:function(a){var z=H.aF(a).getMonth()+1
return z},
hC:function(a){var z=H.aF(a).getDate()+0
return z},
hD:function(a){var z=H.aF(a).getHours()+0
return z},
hF:function(a){var z=H.aF(a).getMinutes()+0
return z},
hH:function(a){var z=H.aF(a).getSeconds()+0
return z},
hE:function(a){var z=H.aF(a).getMilliseconds()+0
return z},
aU:function(a){throw H.e(H.ay(a))},
h:function(a,b){if(a==null)J.aB(a)
throw H.e(H.bf(a,b))},
bf:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.as(!0,b,"index",null)
z=H.Q(J.aB(a))
if(!(b<0)){if(typeof z!=="number")return H.aU(z)
y=b>=z}else y=!0
if(y)return P.aC(b,a,"index",null,z)
return P.bs(b,"index",null)},
k6:function(a,b,c){if(a>c)return new P.bR(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bR(a,c,!0,b,"end","Invalid value")
return new P.as(!0,b,"end",null)},
ay:function(a){return new P.as(!0,a,null,null)},
e:function(a){var z
if(a==null)a=new P.dM()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f6})
z.name=""}else z.toString=H.f6
return z},
f6:function(){return J.ac(this.dartException)},
R:function(a){throw H.e(a)},
A:function(a){throw H.e(P.au(a))},
Y:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kB(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.aB(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cm(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dL(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$e9()
u=$.$get$ea()
t=$.$get$eb()
s=$.$get$ec()
r=$.$get$eg()
q=$.$get$eh()
p=$.$get$ee()
$.$get$ed()
o=$.$get$ej()
n=$.$get$ei()
m=v.T(y)
if(m!=null)return z.$1(H.cm(H.w(y),m))
else{m=u.T(y)
if(m!=null){m.method="call"
return z.$1(H.cm(H.w(y),m))}else{m=t.T(y)
if(m==null){m=s.T(y)
if(m==null){m=r.T(y)
if(m==null){m=q.T(y)
if(m==null){m=p.T(y)
if(m==null){m=s.T(y)
if(m==null){m=o.T(y)
if(m==null){m=n.T(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dL(H.w(y),m))}}return z.$1(new H.iJ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e_()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.as(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e_()
return a},
aT:function(a){var z
if(a==null)return new H.eJ(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eJ(a)},
k8:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.H(0,a[y],a[x])}return b},
kk:function(a,b,c,d,e,f){H.i(a,"$isbk")
switch(H.Q(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.T("Unsupported number of arguments for wrapped closure"))},
aS:function(a,b){var z
H.Q(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kk)
a.$identity=z
return z},
fo:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.G(d).$isc){z.$reflectionInfo=d
x=H.hO(z).r}else x=d
w=e?Object.create(new H.ia().constructor.prototype):Object.create(new H.cd(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ad
if(typeof u!=="number")return u.P()
$.ad=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.df(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kb,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.d9:H.ce
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.e("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.df(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
fl:function(a,b,c,d){var z=H.ce
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
df:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fn(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fl(y,!w,z,b)
if(y===0){w=$.ad
if(typeof w!=="number")return w.P()
$.ad=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b_
if(v==null){v=H.bC("self")
$.b_=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ad
if(typeof w!=="number")return w.P()
$.ad=w+1
t+=w
w="return function("+t+"){return this."
v=$.b_
if(v==null){v=H.bC("self")
$.b_=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
fm:function(a,b,c,d){var z,y
z=H.ce
y=H.d9
switch(b?-1:a){case 0:throw H.e(H.hX("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fn:function(a,b){var z,y,x,w,v,u,t,s
z=$.b_
if(z==null){z=H.bC("self")
$.b_=z}y=$.d8
if(y==null){y=H.bC("receiver")
$.d8=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fm(w,!u,x,b)
if(w===1){z="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
y=$.ad
if(typeof y!=="number")return y.P()
$.ad=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
y=$.ad
if(typeof y!=="number")return y.P()
$.ad=y+1
return new Function(z+y+"}")()},
cS:function(a,b,c,d,e,f,g){return H.fo(a,b,H.Q(c),d,!!e,!!f,g)},
w:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aa(a,"String"))},
l9:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aa(a,"double"))},
kr:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aa(a,"num"))},
cQ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aa(a,"bool"))},
Q:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aa(a,"int"))},
f3:function(a,b){throw H.e(H.aa(a,H.aX(H.w(b).substring(3))))},
kt:function(a,b){throw H.e(H.fj(a,H.aX(H.w(b).substring(3))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.G(a)[b])return a
H.f3(a,b)},
aV:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.G(a)[b]
else z=!0
if(z)return a
H.kt(a,b)},
c6:function(a){if(a==null)return a
if(!!J.G(a).$isc)return a
throw H.e(H.aa(a,"List<dynamic>"))},
km:function(a,b){var z
if(a==null)return a
z=J.G(a)
if(!!z.$isc)return a
if(z[b])return a
H.f3(a,b)},
eY:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Q(z)]
else return a.$S()}return},
bz:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eY(J.G(a))
if(z==null)return!1
return H.eP(z,null,b,null)},
f:function(a,b){var z,y
if(a==null)return a
if($.cM)return a
$.cM=!0
try{if(H.bz(a,b))return a
z=H.c8(b)
y=H.aa(a,z)
throw H.e(y)}finally{$.cM=!1}},
cU:function(a,b){if(a!=null&&!H.cR(a,b))H.R(H.aa(a,H.c8(b)))
return a},
eT:function(a){var z,y
z=J.G(a)
if(!!z.$isp){y=H.eY(z)
if(y!=null)return H.c8(y)
return"Closure"}return H.aG(a)},
ky:function(a){throw H.e(new P.fr(H.w(a)))},
eZ:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
az:function(a){if(a==null)return
return a.$ti},
la:function(a,b,c){return H.aW(a["$as"+H.d(c)],H.az(b))},
c4:function(a,b,c,d){var z
H.w(c)
H.Q(d)
z=H.aW(a["$as"+H.d(c)],H.az(b))
return z==null?null:z[d]},
N:function(a,b,c){var z
H.w(b)
H.Q(c)
z=H.aW(a["$as"+H.d(b)],H.az(a))
return z==null?null:z[c]},
q:function(a,b){var z
H.Q(b)
z=H.az(a)
return z==null?null:z[b]},
c8:function(a){return H.ax(a,null)},
ax:function(a,b){var z,y
H.k(b,"$isc",[P.j],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aX(a[0].builtin$cls)+H.cP(a,1,b)
if(typeof a=="function")return H.aX(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Q(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.d(b[y])}if('func' in a)return H.jT(a,b)
if('futureOr' in a)return"FutureOr<"+H.ax("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
H.k(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.c.P(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.ax(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.ax(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.ax(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.ax(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.k7(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.w(z[l])
n=n+m+H.ax(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cP:function(a,b,c){var z,y,x,w,v,u
H.k(c,"$isc",[P.j],"$asc")
if(a==null)return""
z=new P.bS("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ax(u,c)}return"<"+z.i(0)+">"},
aW:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
by:function(a,b,c,d){var z,y
H.w(b)
H.c6(c)
H.w(d)
if(a==null)return!1
z=H.az(a)
y=J.G(a)
if(y[b]==null)return!1
return H.eW(H.aW(y[d],z),null,c,null)},
k:function(a,b,c,d){H.w(b)
H.c6(c)
H.w(d)
if(a==null)return a
if(H.by(a,b,c,d))return a
throw H.e(H.aa(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aX(b.substring(3))+H.cP(c,0,null),init.mangledGlobalNames)))},
eW:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a4(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a4(a[y],b,c[y],d))return!1
return!0},
l7:function(a,b,c){return a.apply(b,H.aW(J.G(b)["$as"+H.d(c)],H.az(b)))},
f0:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="y"||a===-1||a===-2||H.f0(z)}return!1},
cR:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="y"||b===-1||b===-2||H.f0(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cR(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bz(a,b)}z=J.G(a).constructor
y=H.az(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a4(z,null,b,null)},
u:function(a,b){if(a!=null&&!H.cR(a,b))throw H.e(H.aa(a,H.c8(b)))
return a},
a4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a4(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="y")return!0
if('func' in c)return H.eP(a,b,c,d)
if('func' in a)return c.builtin$cls==="bk"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a4("type" in a?a.type:null,b,x,d)
else if(H.a4(a,b,x,d))return!0
else{if(!('$is'+"b2" in y.prototype))return!1
w=y.prototype["$as"+"b2"]
v=H.aW(w,z?a.slice(1):null)
return H.a4(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eW(H.aW(r,z),b,u,d)},
eP:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a4(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a4(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a4(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a4(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kq(m,b,l,d)},
kq:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a4(c[w],d,a[w],b))return!1}return!0},
l8:function(a,b,c){Object.defineProperty(a,H.w(b),{value:c,enumerable:false,writable:true,configurable:true})},
kn:function(a){var z,y,x,w,v,u
z=H.w($.f_.$1(a))
y=$.c0[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c5[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.w($.eV.$2(a,z))
if(z!=null){y=$.c0[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c5[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c7(x)
$.c0[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c5[z]=x
return x}if(v==="-"){u=H.c7(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f2(a,x)
if(v==="*")throw H.e(P.ek(z))
if(init.leafTags[z]===true){u=H.c7(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f2(a,x)},
f2:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cY(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c7:function(a){return J.cY(a,!1,null,!!a.$isa7)},
kp:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c7(z)
else return J.cY(z,c,null,null)},
ki:function(){if(!0===$.cX)return
$.cX=!0
H.kj()},
kj:function(){var z,y,x,w,v,u,t,s
$.c0=Object.create(null)
$.c5=Object.create(null)
H.ke()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f4.$1(v)
if(u!=null){t=H.kp(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ke:function(){var z,y,x,w,v,u,t
z=C.L()
z=H.aR(C.I,H.aR(C.N,H.aR(C.u,H.aR(C.u,H.aR(C.M,H.aR(C.J,H.aR(C.K(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f_=new H.kf(v)
$.eV=new H.kg(u)
$.f4=new H.kh(t)},
aR:function(a,b){return a(b)||b},
f5:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
d_:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hN:{"^":"a;a,b,c,d,e,f,r,0x",m:{
hO:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bL(z)
y=z[0]
x=z[1]
return new H.hN(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
is:{"^":"a;a,b,c,d,e,f",
T:function(a){var z,y,x
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
ai:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.is(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bV:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ef:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hw:{"^":"K;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
m:{
dL:function(a,b){return new H.hw(a,b==null?null:b.method)}}},
h9:{"^":"K;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
m:{
cm:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h9(a,y,z?null:b.receiver)}}},
iJ:{"^":"K;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kB:{"^":"p:16;a",
$1:function(a){if(!!J.G(a).$isK)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eJ:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isao:1},
p:{"^":"a;",
i:function(a){return"Closure '"+H.aG(this).trim()+"'"},
gcA:function(){return this},
$isbk:1,
gcA:function(){return this}},
e3:{"^":"p;"},
ia:{"^":"e3;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aX(z)+"'"}},
cd:{"^":"e3;a,b,c,d",
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cd))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var z,y
z=this.c
if(z==null)y=H.b6(this.a)
else y=typeof z!=="object"?J.bg(z):H.b6(z)
return(y^H.b6(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.aG(z)+"'")},
m:{
ce:function(a){return a.a},
d9:function(a){return a.c},
bC:function(a){var z,y,x,w,v
z=new H.cd("self","target","receiver","name")
y=J.bL(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
it:{"^":"K;a",
i:function(a){return this.a},
m:{
aa:function(a,b){return new H.it("TypeError: "+H.d(P.bG(a))+": type '"+H.eT(a)+"' is not a subtype of type '"+b+"'")}}},
fi:{"^":"K;a",
i:function(a){return this.a},
m:{
fj:function(a,b){return new H.fi("CastError: "+H.d(P.bG(a))+": type '"+H.eT(a)+"' is not a subtype of type '"+b+"'")}}},
hW:{"^":"K;a",
i:function(a){return"RuntimeError: "+H.d(this.a)},
m:{
hX:function(a){return new H.hW(a)}}},
aE:{"^":"dF;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
ga6:function(){return new H.dD(this,[H.q(this,0)])},
c0:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.bD(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.bD(y,a)}else return this.f4(a)},
f4:function(a){var z=this.d
if(z==null)return!1
return this.bb(this.aV(z,J.bg(a)&0x3ffffff),a)>=0},
n:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ax(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ax(w,b)
x=y==null?null:y.b
return x}else return this.f5(b)},
f5:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aV(z,J.bg(a)&0x3ffffff)
x=this.bb(y,a)
if(x<0)return
return y[x].b},
H:function(a,b,c){var z,y,x,w,v,u
H.u(b,H.q(this,0))
H.u(c,H.q(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.b_()
this.b=z}this.bv(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.b_()
this.c=y}this.bv(y,b,c)}else{x=this.d
if(x==null){x=this.b_()
this.d=x}w=J.bg(b)&0x3ffffff
v=this.aV(x,w)
if(v==null)this.b4(x,w,[this.aR(b,c)])
else{u=this.bb(v,b)
if(u>=0)v[u].b=c
else v.push(this.aR(b,c))}}},
O:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.au(this))
z=z.c}},
bv:function(a,b,c){var z
H.u(b,H.q(this,0))
H.u(c,H.q(this,1))
z=this.ax(a,b)
if(z==null)this.b4(a,b,this.aR(b,c))
else z.b=c},
dd:function(){this.r=this.r+1&67108863},
aR:function(a,b){var z,y
z=new H.hc(H.u(a,H.q(this,0)),H.u(b,H.q(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.dd()
return z},
bb:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.I(a[y].a,b))return y
return-1},
i:function(a){return P.dG(this)},
ax:function(a,b){return a[b]},
aV:function(a,b){return a[b]},
b4:function(a,b,c){a[b]=c},
dq:function(a,b){delete a[b]},
bD:function(a,b){return this.ax(a,b)!=null},
b_:function(){var z=Object.create(null)
this.b4(z,"<non-identifier-key>",z)
this.dq(z,"<non-identifier-key>")
return z},
$isdC:1},
hc:{"^":"a;a,b,0c,0d"},
dD:{"^":"ds;a,$ti",
gl:function(a){return this.a.a},
gE:function(a){var z,y
z=this.a
y=new H.hd(z,z.r,this.$ti)
y.c=z.e
return y}},
hd:{"^":"a;a,b,0c,0d,$ti",
sbw:function(a){this.d=H.u(a,H.q(this,0))},
gA:function(){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.au(z))
else{z=this.c
if(z==null){this.sbw(null)
return!1}else{this.sbw(z.a)
this.c=this.c.c
return!0}}},
$isaw:1},
kf:{"^":"p:16;a",
$1:function(a){return this.a(a)}},
kg:{"^":"p:37;a",
$2:function(a,b){return this.a(a,b)}},
kh:{"^":"p:36;a",
$1:function(a){return this.a(H.w(a))}},
h7:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdN:1,
m:{
h8:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.e(new P.fR("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
k7:function(a){return J.dz(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
ks:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
cL:function(a){return a},
bx:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bf(b,a))},
jS:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.e(H.k6(a,b,c))
return b},
hr:{"^":"B;","%":";ArrayBufferView;cp|eF|eG|hq|eH|eI|bq"},
cp:{"^":"hr;",
gl:function(a){return a.length},
$isa7:1,
$asa7:I.cT},
hq:{"^":"eG;",
n:function(a,b){H.bx(b,a,a.length)
return a[b]},
$asbJ:function(){return[P.r]},
$asH:function(){return[P.r]},
$isn:1,
$asn:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]},
"%":"Float32Array"},
bq:{"^":"eI;",
$asbJ:function(){return[P.v]},
$asH:function(){return[P.v]},
$isn:1,
$asn:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]}},
kM:{"^":"bq;",
n:function(a,b){H.bx(b,a,a.length)
return a[b]},
"%":"Int16Array"},
kN:{"^":"bq;",
n:function(a,b){H.bx(b,a,a.length)
return a[b]},
"%":"Int32Array"},
kO:{"^":"bq;",
n:function(a,b){H.bx(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
kP:{"^":"bq;",
gl:function(a){return a.length},
n:function(a,b){H.bx(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eF:{"^":"cp+H;"},
eG:{"^":"eF+bJ;"},
eH:{"^":"cp+H;"},
eI:{"^":"eH+bJ;"}}],["","",,P,{"^":"",
j2:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.k_()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aS(new P.j4(z),1)).observe(y,{childList:true})
return new P.j3(z,y,x)}else if(self.setImmediate!=null)return P.k0()
return P.k1()},
kZ:[function(a){self.scheduleImmediate(H.aS(new P.j5(H.f(a,{func:1,ret:-1})),0))},"$1","k_",4,0,6],
l_:[function(a){self.setImmediate(H.aS(new P.j6(H.f(a,{func:1,ret:-1})),0))},"$1","k0",4,0,6],
l0:[function(a){P.cy(C.l,H.f(a,{func:1,ret:-1}))},"$1","k1",4,0,6],
cy:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.h.ag(a.a,1000)
return P.jH(z<0?0:z,b)},
e7:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.aH]})
z=C.h.ag(a.a,1000)
return P.jI(z<0?0:z,b)},
jW:function(a,b){if(H.bz(a,{func:1,args:[P.a,P.ao]}))return H.f(a,{func:1,ret:null,args:[P.a,P.ao]})
if(H.bz(a,{func:1,args:[P.a]}))return H.f(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.cc(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jV:function(){var z,y
for(;z=$.aQ,z!=null;){$.bd=null
y=z.b
$.aQ=y
if(y==null)$.bc=null
z.a.$0()}},
l6:[function(){$.cN=!0
try{P.jV()}finally{$.bd=null
$.cN=!1
if($.aQ!=null)$.$get$cI().$1(P.eX())}},"$0","eX",0,0,2],
eS:function(a){var z=new P.ex(H.f(a,{func:1,ret:-1}))
if($.aQ==null){$.bc=z
$.aQ=z
if(!$.cN)$.$get$cI().$1(P.eX())}else{$.bc.b=z
$.bc=z}},
jZ:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.aQ
if(z==null){P.eS(a)
$.bd=$.bc
return}y=new P.ex(a)
x=$.bd
if(x==null){y.b=z
$.bd=y
$.aQ=y}else{y.b=x.b
x.b=y
$.bd=y
if(y.b==null)$.bc=y}},
ku:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.D
if(C.f===y){P.c_(null,null,C.f,a)
return}y.toString
P.c_(null,null,y,H.f(y.b7(a),z))},
e6:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.D
if(y===C.f){y.toString
return P.cy(a,b)}return P.cy(a,H.f(y.b7(b),z))},
ip:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aH]}
H.f(b,z)
y=$.D
if(y===C.f){y.toString
return P.e7(a,b)}x=y.bX(b,P.aH)
$.D.toString
return P.e7(a,H.f(x,z))},
bZ:function(a,b,c,d,e){var z={}
z.a=d
P.jZ(new P.jX(z,e))},
eQ:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.D
if(y===c)return d.$0()
$.D=c
z=y
try{y=d.$0()
return y}finally{$.D=z}},
eR:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.u(e,g)
y=$.D
if(y===c)return d.$1(e)
$.D=c
z=y
try{y=d.$1(e)
return y}finally{$.D=z}},
jY:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.u(e,h)
H.u(f,i)
y=$.D
if(y===c)return d.$2(e,f)
$.D=c
z=y
try{y=d.$2(e,f)
return y}finally{$.D=z}},
c_:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.f!==c
if(z)d=!(!z||!1)?c.b7(d):c.eA(d,-1)
P.eS(d)},
j4:{"^":"p:18;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j3:{"^":"p:32;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j5:{"^":"p:0;a",
$0:function(){this.a.$0()}},
j6:{"^":"p:0;a",
$0:function(){this.a.$0()}},
eL:{"^":"a;a,0b,c",
da:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aS(new P.jK(this,b),0),a)
else throw H.e(P.a1("`setTimeout()` not found."))},
dc:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aS(new P.jJ(this,a,Date.now(),b),0),a)
else throw H.e(P.a1("Periodic timer."))},
$isaH:1,
m:{
jH:function(a,b){var z=new P.eL(!0,0)
z.da(a,b)
return z},
jI:function(a,b){var z=new P.eL(!1,0)
z.dc(a,b)
return z}}},
jK:{"^":"p:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jJ:{"^":"p:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.cZ(w,x)}z.c=y
this.d.$1(z)}},
aP:{"^":"a;0a,b,c,d,e,$ti",
fb:function(a){if(this.c!==6)return!0
return this.b.b.bh(H.f(this.d,{func:1,ret:P.E,args:[P.a]}),a.a,P.E,P.a)},
f3:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.q(this,1)}
w=this.b.b
if(H.bz(z,{func:1,args:[P.a,P.ao]}))return H.cU(w.fC(z,a.a,a.b,null,y,P.ao),x)
else return H.cU(w.bh(H.f(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
ar:{"^":"a;bP:a<,b,0eb:c<,$ti",
co:function(a,b,c){var z,y,x,w
z=H.q(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.D
if(y!==C.f){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jW(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ar(0,$.D,[c])
w=b==null?1:3
this.by(new P.aP(x,w,a,b,[z,c]))
return x},
fG:function(a,b){return this.co(a,null,b)},
by:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isaP")
this.c=a}else{if(z===2){y=H.i(this.c,"$isar")
z=y.a
if(z<4){y.by(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.c_(null,null,z,H.f(new P.je(this,a),{func:1,ret:-1}))}},
bN:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isaP")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isar")
y=u.a
if(y<4){u.bN(a)
return}this.a=y
this.c=u.c}z.a=this.aA(a)
y=this.b
y.toString
P.c_(null,null,y,H.f(new P.jj(z,this),{func:1,ret:-1}))}},
b3:function(){var z=H.i(this.c,"$isaP")
this.c=null
return this.aA(z)},
aA:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
bA:function(a){var z,y,x
z=H.q(this,0)
H.cU(a,{futureOr:1,type:z})
y=this.$ti
if(H.by(a,"$isb2",y,"$asb2"))if(H.by(a,"$isar",y,null))P.eA(a,this)
else P.jf(a,this)
else{x=this.b3()
H.u(a,z)
this.a=4
this.c=a
P.bb(this,x)}},
bB:function(a,b){var z
H.i(b,"$isao")
z=this.b3()
this.a=8
this.c=new P.Z(a,b)
P.bb(this,z)},
$isb2:1,
m:{
jf:function(a,b){var z,y,x
b.a=1
try{a.co(new P.jg(b),new P.jh(b),null)}catch(x){z=H.Y(x)
y=H.aT(x)
P.ku(new P.ji(b,z,y))}},
eA:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isar")
if(z>=4){y=b.b3()
b.a=a.a
b.c=a.c
P.bb(b,y)}else{y=H.i(b.c,"$isaP")
b.a=2
b.c=a
a.bN(y)}},
bb:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isZ")
y=y.b
u=v.a
t=v.b
y.toString
P.bZ(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bb(z.a,b)}y=z.a
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
if(p){H.i(r,"$isZ")
y=y.b
u=r.a
t=r.b
y.toString
P.bZ(null,null,y,u,t)
return}o=$.D
if(o==null?q!=null:o!==q)$.D=q
else o=null
y=b.c
if(y===8)new P.jm(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jl(x,b,r).$0()}else if((y&2)!==0)new P.jk(z,x,b).$0()
if(o!=null)$.D=o
y=x.b
if(!!J.G(y).$isb2){if(y.a>=4){n=H.i(t.c,"$isaP")
t.c=null
b=t.aA(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eA(y,t)
return}}m=b.b
n=H.i(m.c,"$isaP")
m.c=null
b=m.aA(n)
y=x.a
u=x.b
if(!y){H.u(u,H.q(m,0))
m.a=4
m.c=u}else{H.i(u,"$isZ")
m.a=8
m.c=u}z.a=m
y=m}}}},
je:{"^":"p:0;a,b",
$0:function(){P.bb(this.a,this.b)}},
jj:{"^":"p:0;a,b",
$0:function(){P.bb(this.b,this.a.a)}},
jg:{"^":"p:18;a",
$1:function(a){var z=this.a
z.a=0
z.bA(a)}},
jh:{"^":"p:29;a",
$2:function(a,b){this.a.bB(a,H.i(b,"$isao"))},
$1:function(a){return this.$2(a,null)}},
ji:{"^":"p:0;a,b,c",
$0:function(){this.a.bB(this.b,this.c)}},
jm:{"^":"p:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.cm(H.f(w.d,{func:1}),null)}catch(v){y=H.Y(v)
x=H.aT(v)
if(this.d){w=H.i(this.a.a.c,"$isZ").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isZ")
else u.b=new P.Z(y,x)
u.a=!0
return}if(!!J.G(z).$isb2){if(z instanceof P.ar&&z.gbP()>=4){if(z.gbP()===8){w=this.b
w.b=H.i(z.geb(),"$isZ")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.fG(new P.jn(t),null)
w.a=!1}}},
jn:{"^":"p:28;a",
$1:function(a){return this.a}},
jl:{"^":"p:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.q(x,0)
v=H.u(this.c,w)
u=H.q(x,1)
this.a.b=x.b.b.bh(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.Y(t)
y=H.aT(t)
x=this.a
x.b=new P.Z(z,y)
x.a=!0}}},
jk:{"^":"p:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isZ")
w=this.c
if(w.fb(z)&&w.e!=null){v=this.b
v.b=w.f3(z)
v.a=!1}}catch(u){y=H.Y(u)
x=H.aT(u)
w=H.i(this.a.a.c,"$isZ")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.Z(y,x)
s.a=!0}}},
ex:{"^":"a;a,0b"},
ib:{"^":"a;$ti",
gl:function(a){var z,y,x,w
z={}
y=new P.ar(0,$.D,[P.v])
z.a=0
x=H.q(this,0)
w=H.f(new P.id(z,this),{func:1,ret:-1,args:[x]})
H.f(new P.ie(z,y),{func:1,ret:-1})
W.L(this.a,this.b,w,!1,x)
return y}},
id:{"^":"p;a,b",
$1:function(a){H.u(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.y,args:[H.q(this.b,0)]}}},
ie:{"^":"p:0;a,b",
$0:function(){this.b.bA(this.a.a)}},
cv:{"^":"a;$ti"},
ic:{"^":"a;"},
aH:{"^":"a;"},
Z:{"^":"a;a,b",
i:function(a){return H.d(this.a)},
$isK:1},
jP:{"^":"a;",$iskY:1},
jX:{"^":"p:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dM()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
jw:{"^":"jP;",
fD:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.f===$.D){a.$0()
return}P.eQ(null,null,this,a,-1)}catch(x){z=H.Y(x)
y=H.aT(x)
P.bZ(null,null,this,z,H.i(y,"$isao"))}},
fE:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.u(b,c)
try{if(C.f===$.D){a.$1(b)
return}P.eR(null,null,this,a,b,-1,c)}catch(x){z=H.Y(x)
y=H.aT(x)
P.bZ(null,null,this,z,H.i(y,"$isao"))}},
eA:function(a,b){return new P.jy(this,H.f(a,{func:1,ret:b}),b)},
b7:function(a){return new P.jx(this,H.f(a,{func:1,ret:-1}))},
bX:function(a,b){return new P.jz(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
cm:function(a,b){H.f(a,{func:1,ret:b})
if($.D===C.f)return a.$0()
return P.eQ(null,null,this,a,b)},
bh:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.u(b,d)
if($.D===C.f)return a.$1(b)
return P.eR(null,null,this,a,b,c,d)},
fC:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.u(b,e)
H.u(c,f)
if($.D===C.f)return a.$2(b,c)
return P.jY(null,null,this,a,b,c,d,e,f)}},
jy:{"^":"p;a,b,c",
$0:function(){return this.a.cm(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jx:{"^":"p:2;a,b",
$0:function(){return this.a.fD(this.b)}},
jz:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.fE(this.b,H.u(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hf:function(a,b,c){H.c6(a)
return H.k(H.k8(a,new H.aE(0,0,[b,c])),"$isdC",[b,c],"$asdC")},
he:function(a,b){return new H.aE(0,0,[a,b])},
bp:function(a,b,c,d){return new P.jr(0,0,[d])},
h1:function(a,b,c){var z,y
if(P.cO(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$be()
C.a.h(y,a)
try{P.jU(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.e1(b,H.km(z,"$isn"),", ")+c
return y.charCodeAt(0)==0?y:y},
cj:function(a,b,c){var z,y,x
if(P.cO(a))return b+"..."+c
z=new P.bS(b)
y=$.$get$be()
C.a.h(y,a)
try{x=z
x.a=P.e1(x.gad(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gad()+c
y=z.gad()
return y.charCodeAt(0)==0?y:y},
cO:function(a){var z,y
for(z=0;y=$.$get$be(),z<y.length;++z)if(a===y[z])return!0
return!1},
jU:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gE(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.d(z.gA())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gA();++x
if(!z.t()){if(x<=4){C.a.h(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA();++x
for(;z.t();t=s,s=r){r=z.gA();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dE:function(a,b){var z,y,x
z=P.bp(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x)z.h(0,H.u(a[x],b))
return z},
dG:function(a){var z,y,x
z={}
if(P.cO(a))return"{...}"
y=new P.bS("")
try{C.a.h($.$get$be(),a)
x=y
x.a=x.gad()+"{"
z.a=!0
a.O(0,new P.hk(z,y))
z=y
z.a=z.gad()+"}"}finally{z=$.$get$be()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gad()
return z.charCodeAt(0)==0?z:z},
jr:{"^":"jo;a,0b,0c,0d,0e,0f,r,$ti",
gE:function(a){var z=new P.eE(this,this.r,this.$ti)
z.c=this.e
return z},
gl:function(a){return this.a},
J:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.i(z[b],"$isbY")!=null}else{y=this.dk(b)
return y}},
dk:function(a){var z=this.d
if(z==null)return!1
return this.aU(this.bH(z,a),a)>=0},
h:function(a,b){var z,y
H.u(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cK()
this.b=z}return this.bx(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cK()
this.c=y}return this.bx(y,b)}else return this.de(b)},
de:function(a){var z,y,x
H.u(a,H.q(this,0))
z=this.d
if(z==null){z=P.cK()
this.d=z}y=this.bC(a)
x=z[y]
if(x==null)z[y]=[this.b0(a)]
else{if(this.aU(x,a)>=0)return!1
x.push(this.b0(a))}return!0},
F:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.e5(this.c,b)
else return this.e2(b)},
e2:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.bH(z,a)
x=this.aU(y,a)
if(x<0)return!1
this.bR(y.splice(x,1)[0])
return!0},
bx:function(a,b){H.u(b,H.q(this,0))
if(H.i(a[b],"$isbY")!=null)return!1
a[b]=this.b0(b)
return!0},
e5:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isbY")
if(z==null)return!1
this.bR(z)
delete a[b]
return!0},
bJ:function(){this.r=this.r+1&67108863},
b0:function(a){var z,y
z=new P.bY(H.u(a,H.q(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.bJ()
return z},
bR:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.bJ()},
bC:function(a){return J.bg(a)&0x3ffffff},
bH:function(a,b){return a[this.bC(b)]},
aU:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.I(a[y].a,b))return y
return-1},
m:{
cK:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bY:{"^":"a;a,0b,0c"},
eE:{"^":"a;a,b,0c,0d,$ti",
sbz:function(a){this.d=H.u(a,H.q(this,0))},
gA:function(){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.au(z))
else{z=this.c
if(z==null){this.sbz(null)
return!1}else{this.sbz(H.u(z.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
$isaw:1,
m:{
js:function(a,b,c){var z=new P.eE(a,b,[c])
z.c=a.e
return z}}},
jo:{"^":"hY;"},
bM:{"^":"jt;",$isn:1,$isc:1},
H:{"^":"a;$ti",
gE:function(a){return new H.cn(a,this.gl(a),0,[H.c4(this,a,"H",0)])},
N:function(a,b){return this.n(a,b)},
fI:function(a,b){var z,y
z=H.b([],[H.c4(this,a,"H",0)])
C.a.sl(z,this.gl(a))
for(y=0;y<this.gl(a);++y)C.a.H(z,y,this.n(a,y))
return z},
fH:function(a){return this.fI(a,!0)},
i:function(a){return P.cj(a,"[","]")}},
dF:{"^":"bO;"},
hk:{"^":"p:13;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
bO:{"^":"a;$ti",
O:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.N(this,"bO",0),H.N(this,"bO",1)]})
for(z=J.aY(this.ga6());z.t();){y=z.gA()
b.$2(y,this.n(0,y))}},
gl:function(a){return J.aB(this.ga6())},
i:function(a){return P.dG(this)},
$isa_:1},
i_:{"^":"a;$ti",
a0:function(a,b){var z
for(z=J.aY(H.k(b,"$isn",this.$ti,"$asn"));z.t();)this.h(0,z.gA())},
i:function(a){return P.cj(this,"{","}")},
N:function(a,b){var z,y,x
if(b<0)H.R(P.X(b,0,null,"index",null))
for(z=P.js(this,this.r,H.q(this,0)),y=0;z.t();){x=z.d
if(b===y)return x;++y}throw H.e(P.aC(b,this,"index",null,y))},
$isn:1,
$isdY:1},
hY:{"^":"i_;"},
jt:{"^":"a+H;"}}],["","",,P,{"^":"",cg:{"^":"a;$ti"},bF:{"^":"ic;$ti"},fI:{"^":"cg;",
$ascg:function(){return[P.j,[P.c,P.v]]}},h_:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},fZ:{"^":"bF;a",
dl:function(a,b,c){var z,y,x,w,v,u
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
default:u=null}if(u!=null){if(v==null)v=new P.bS("")
if(w>b)v.a+=C.c.av(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.fd(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asbF:function(){return[P.j,P.j]}},iN:{"^":"fI;a"},iO:{"^":"bF;",
eJ:function(a,b,c){var z,y,x,w
z=a.length
P.dT(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.jN(0,0,x)
if(w.dz(a,b,z)!==z)w.bS(C.c.ba(a,z-1),0)
return new Uint8Array(x.subarray(0,H.jS(0,w.b,x.length)))},
eI:function(a){return this.eJ(a,0,null)},
$asbF:function(){return[P.j,[P.c,P.v]]}},jN:{"^":"a;a,b,c",
bS:function(a,b){var z,y,x,w,v
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
dz:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.ba(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.ac(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.bS(w,C.c.ac(a,u)))x=u}else if(w<=2047){v=this.b
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
fK:function(a){if(a instanceof H.p)return a.i(0)
return"Instance of '"+H.aG(a)+"'"},
hg:function(a,b,c,d){var z,y
H.u(b,d)
z=J.h3(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.H(z,y,b)
return H.k(z,"$isc",[d],"$asc")},
hh:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gE(a);x.t();)C.a.h(y,H.u(x.gA(),c))
if(b)return y
return H.k(J.bL(y),"$isc",z,"$asc")},
cw:function(a,b,c){var z,y
z=P.v
H.k(a,"$isn",[z],"$asn")
if(a.constructor===Array){H.k(a,"$isaD",[z],"$asaD")
y=a.length
c=P.dT(b,c,y,null,null,null)
return H.dS(b>0||c<y?C.a.cT(a,b,c):a)}return P.ig(a,b,c)},
ig:function(a,b,c){var z,y,x
H.k(a,"$isn",[P.v],"$asn")
z=J.aY(a)
for(y=0;y<b;++y)if(!z.t())throw H.e(P.X(b,0,y,null,null))
x=[]
for(;z.t();)x.push(z.gA())
return H.dS(x)},
hP:function(a,b,c){return new H.h7(a,H.h8(a,!1,!0,!1))},
eN:function(a,b,c,d){var z,y,x,w,v,u
H.k(a,"$isc",[P.v],"$asc")
if(c===C.q){z=$.$get$eM().b
z=z.test(b)}else z=!1
if(z)return b
y=C.C.eI(H.u(b,H.N(c,"cg",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cq(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ac(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fK(a)},
T:function(a){return new P.ez(a)},
cZ:function(a){H.ks(a)},
E:{"^":"a;"},
"+bool":0,
bh:{"^":"a;a,b",
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.bh))return!1
return this.a===b.a&&!0},
gL:function(a){var z=this.a
return(z^C.h.aB(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.ft(H.hI(this))
y=P.bi(H.hG(this))
x=P.bi(H.hC(this))
w=P.bi(H.hD(this))
v=P.bi(H.hF(this))
u=P.bi(H.hH(this))
t=P.fu(H.hE(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
m:{
ft:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fu:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bi:function(a){if(a>=10)return""+a
return"0"+a}}},
r:{"^":"ab;"},
"+double":0,
b0:{"^":"a;a",
au:function(a,b){return C.h.au(this.a,H.i(b,"$isb0").a)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.b0))return!1
return this.a===b.a},
gL:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fE()
y=this.a
if(y<0)return"-"+new P.b0(0-y).i(0)
x=z.$1(C.h.ag(y,6e7)%60)
w=z.$1(C.h.ag(y,1e6)%60)
v=new P.fD().$1(y%1e6)
return""+C.h.ag(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
m:{
dr:function(a,b,c,d,e,f){return new P.b0(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fD:{"^":"p:14;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fE:{"^":"p:14;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
K:{"^":"a;"},
dM:{"^":"K;",
i:function(a){return"Throw of null."}},
as:{"^":"K;a,b,c,d",
gaT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaS:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.d(z)
w=this.gaT()+y+x
if(!this.a)return w
v=this.gaS()
u=P.bG(this.b)
return w+v+": "+H.d(u)},
m:{
cc:function(a,b,c){return new P.as(!0,a,b,c)}}},
bR:{"^":"as;e,f,a,b,c,d",
gaT:function(){return"RangeError"},
gaS:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
m:{
bs:function(a,b,c){return new P.bR(null,null,!0,a,b,"Value not in range")},
X:function(a,b,c,d,e){return new P.bR(b,c,!0,a,d,"Invalid value")},
dT:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.X(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.X(b,a,c,"end",f))
return b}return c}}},
h0:{"^":"as;e,l:f>,a,b,c,d",
gaT:function(){return"RangeError"},
gaS:function(){if(J.f7(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.d(z)},
m:{
aC:function(a,b,c,d,e){var z=H.Q(e!=null?e:J.aB(b))
return new P.h0(b,z,!0,a,c,"Index out of range")}}},
iL:{"^":"K;a",
i:function(a){return"Unsupported operation: "+this.a},
m:{
a1:function(a){return new P.iL(a)}}},
iI:{"^":"K;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
m:{
ek:function(a){return new P.iI(a)}}},
cu:{"^":"K;a",
i:function(a){return"Bad state: "+this.a},
m:{
e0:function(a){return new P.cu(a)}}},
fp:{"^":"K;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.bG(z))+"."},
m:{
au:function(a){return new P.fp(a)}}},
hx:{"^":"a;",
i:function(a){return"Out of Memory"},
$isK:1},
e_:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isK:1},
fr:{"^":"K;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ez:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fR:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.c.av(x,0,75)+"..."
return y+"\n"+x}},
bk:{"^":"a;"},
v:{"^":"ab;"},
"+int":0,
n:{"^":"a;$ti",
bj:["cV",function(a,b){var z=H.N(this,"n",0)
return new H.cH(this,H.f(b,{func:1,ret:P.E,args:[z]}),[z])}],
gl:function(a){var z,y
z=this.gE(this)
for(y=0;z.t();)++y
return y},
ga9:function(a){var z,y
z=this.gE(this)
if(!z.t())throw H.e(H.bK())
y=z.gA()
if(z.t())throw H.e(H.h2())
return y},
N:function(a,b){var z,y,x
if(b<0)H.R(P.X(b,0,null,"index",null))
for(z=this.gE(this),y=0;z.t();){x=z.gA()
if(b===y)return x;++y}throw H.e(P.aC(b,this,"index",null,y))},
i:function(a){return P.h1(this,"(",")")}},
aw:{"^":"a;$ti"},
c:{"^":"a;$ti",$isn:1},
"+List":0,
y:{"^":"a;",
gL:function(a){return P.a.prototype.gL.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ab:{"^":"a;"},
"+num":0,
a:{"^":";",
p:function(a,b){return this===b},
gL:function(a){return H.b6(this)},
i:function(a){return"Instance of '"+H.aG(this)+"'"},
toString:function(){return this.i(this)}},
ao:{"^":"a;"},
j:{"^":"a;",$isdN:1},
"+String":0,
bS:{"^":"a;ad:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
m:{
e1:function(a,b,c){var z=J.aY(b)
if(!z.t())return a
if(c.length===0){do a+=H.d(z.gA())
while(z.t())}else{a+=H.d(z.gA())
for(;z.t();)a=a+c+H.d(z.gA())}return a}}}}],["","",,W,{"^":"",
d4:function(a){var z=document.createElement("a")
return z},
de:function(a,b){var z=document.createElement("canvas")
return z},
fF:function(a,b,c){var z,y
z=document.body
y=(z&&C.j).V(z,a,b,c)
y.toString
z=W.t
z=new H.cH(new W.a3(y),H.f(new W.fG(),{func:1,ret:P.E,args:[z]}),[z])
return H.i(z.ga9(z),"$isF")},
fH:function(a){H.i(a,"$isbH")
return"wheel"},
b1:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fc(a)
if(typeof y==="string")z=a.tagName}catch(x){H.Y(x)}return z},
bX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eD:function(a,b,c,d){var z,y
z=W.bX(W.bX(W.bX(W.bX(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eU:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.D
if(z===C.f)return a
return z.bX(a,b)},
V:{"^":"F;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ff:{"^":"V;",
i:function(a){return String(a)},
$isff:1,
"%":"HTMLAnchorElement"},
kC:{"^":"V;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
d6:{"^":"V;",$isd6:1,"%":"HTMLBaseElement"},
bB:{"^":"V;",$isbB:1,"%":"HTMLBodyElement"},
cf:{"^":"V;",
bk:function(a,b,c){var z=this.dA(a,b,P.k2(c,null))
return z},
dA:function(a,b,c){return a.getContext(b,c)},
$iscf:1,
"%":"HTMLCanvasElement"},
kF:{"^":"t;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kH:{"^":"j9;0l:length=",
cH:function(a,b){var z=this.dB(a,this.dh(a,b))
return z==null?"":z},
dh:function(a,b){var z,y
z=$.$get$dj()
y=z[b]
if(typeof y==="string")return y
y=this.eo(a,b)
z[b]=y
return y},
eo:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fz()+b
if(z in a)return z
return b},
dB:function(a,b){return a.getPropertyValue(b)},
gaF:function(a){return a.height},
gaH:function(a){return a.left},
gbi:function(a){return a.top},
gaK:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fq:{"^":"a;",
gaH:function(a){return this.cH(a,"left")}},
av:{"^":"V;",$isav:1,"%":"HTMLDivElement"},
fA:{"^":"t;",
ew:function(a,b){return a.adoptNode(b)},
cF:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
kI:{"^":"B;",
i:function(a){return String(a)},
"%":"DOMException"},
fB:{"^":"B;",
eM:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
fC:{"^":"B;",
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
p:function(a,b){var z
if(b==null)return!1
if(!H.by(b,"$isbt",[P.ab],"$asbt"))return!1
z=J.W(b)
return a.left===z.gaH(b)&&a.top===z.gbi(b)&&a.width===z.gaK(b)&&a.height===z.gaF(b)},
gL:function(a){return W.eD(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaF:function(a){return a.height},
gaH:function(a){return a.left},
gbi:function(a){return a.top},
gaK:function(a){return a.width},
$isbt:1,
$asbt:function(){return[P.ab]},
"%":";DOMRectReadOnly"},
j8:{"^":"bM;bG:a<,b",
gl:function(a){return this.b.length},
n:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.h(z,b)
return H.i(z[b],"$isF")},
h:function(a,b){J.d2(this.a,b)
return b},
gE:function(a){var z=this.fH(this)
return new J.aj(z,z.length,0,[H.q(z,0)])},
$asH:function(){return[W.F]},
$asn:function(){return[W.F]},
$asc:function(){return[W.F]}},
F:{"^":"t;0fF:tagName=",
gez:function(a){return new W.ja(a)},
gbZ:function(a){return new W.j8(a,a.children)},
i:function(a){return a.localName},
V:["aQ",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.du
if(z==null){z=H.b([],[W.ag])
y=new W.dK(z)
C.a.h(z,W.eB(null))
C.a.h(z,W.eK())
$.du=y
d=y}else d=z
z=$.dt
if(z==null){z=new W.eO(d)
$.dt=z
c=z}else{z.a=d
c=z}}if($.ak==null){z=document
y=z.implementation
y=(y&&C.D).eM(y,"")
$.ak=y
$.ch=y.createRange()
y=$.ak
y.toString
y=y.createElement("base")
H.i(y,"$isd6")
y.href=z.baseURI
z=$.ak.head;(z&&C.F).q(z,y)}z=$.ak
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.i(y,"$isbB")}z=$.ak
if(!!this.$isbB)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ak.body;(z&&C.j).q(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.J(C.Q,a.tagName)){z=$.ch;(z&&C.y).cN(z,x)
z=$.ch
w=(z&&C.y).eK(z,b)}else{x.innerHTML=b
w=$.ak.createDocumentFragment()
for(z=J.W(w);y=x.firstChild,y!=null;)z.q(w,y)}z=$.ak.body
if(x==null?z!=null:x!==z)J.d3(x)
c.bm(w)
C.t.ew(document,w)
return w},function(a,b,c){return this.V(a,b,c,null)},"eL",null,null,"gha",5,5,null],
cQ:function(a,b,c,d){a.textContent=null
this.q(a,this.V(a,b,c,d))},
cP:function(a,b){return this.cQ(a,b,null,null)},
ak:function(a,b){return a.getAttribute(b)},
e3:function(a,b){return a.removeAttribute(b)},
$isF:1,
"%":";Element"},
fG:{"^":"p:15;",
$1:function(a){return!!J.G(H.i(a,"$ist")).$isF}},
S:{"^":"B;",$isS:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
bH:{"^":"B;",
df:function(a,b,c,d){return a.addEventListener(b,H.aS(H.f(c,{func:1,args:[W.S]}),1),!1)},
$isbH:1,
"%":";EventTarget"},
kJ:{"^":"V;0l:length=","%":"HTMLFormElement"},
fW:{"^":"V;","%":"HTMLHeadElement"},
fX:{"^":"jq;",
gl:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.aC(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa7:1,
$asa7:function(){return[W.t]},
$asH:function(){return[W.t]},
$isn:1,
$asn:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isfX:1,
$asae:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fY:{"^":"fA;","%":"HTMLDocument"},
b3:{"^":"cB;",$isb3:1,"%":"KeyboardEvent"},
hi:{"^":"B;",
i:function(a){return String(a)},
$ishi:1,
"%":"Location"},
a8:{"^":"cB;",$isa8:1,"%":"PointerEvent;DragEvent|MouseEvent"},
a3:{"^":"bM;a",
ga9:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.e(P.e0("No elements"))
if(y>1)throw H.e(P.e0("More than one element"))
return z.firstChild},
a0:function(a,b){var z,y,x,w,v
H.k(b,"$isn",[W.t],"$asn")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.W(y),v=0;v<x;++v)w.q(y,z.firstChild)
return},
gE:function(a){var z=this.a.childNodes
return new W.dv(z,z.length,-1,[H.c4(C.S,z,"ae",0)])},
gl:function(a){return this.a.childNodes.length},
n:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.h(z,b)
return z[b]},
$asH:function(){return[W.t]},
$asn:function(){return[W.t]},
$asc:function(){return[W.t]}},
t:{"^":"bH;0fs:previousSibling=",
ft:function(a){var z=a.parentNode
if(z!=null)J.bA(z,a)},
i:function(a){var z=a.nodeValue
return z==null?this.cU(a):z},
q:function(a,b){return a.appendChild(b)},
e4:function(a,b){return a.removeChild(b)},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hs:{"^":"jv;",
gl:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.aC(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa7:1,
$asa7:function(){return[W.t]},
$asH:function(){return[W.t]},
$isn:1,
$asn:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$asae:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
hL:{"^":"B;",
eK:function(a,b){return a.createContextualFragment(b)},
cN:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
kS:{"^":"V;0l:length=","%":"HTMLSelectElement"},
ih:{"^":"V;","%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
ii:{"^":"V;",
V:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aQ(a,b,c,d)
z=W.fF("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a3(y).a0(0,new W.a3(z))
return y},
"%":"HTMLTableElement"},
ij:{"^":"V;",
V:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aQ(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.k.V(z.createElement("table"),b,c,d)
z.toString
z=new W.a3(z)
x=z.ga9(z)
x.toString
z=new W.a3(x)
w=z.ga9(z)
y.toString
w.toString
new W.a3(y).a0(0,new W.a3(w))
return y},
"%":"HTMLTableRowElement"},
kU:{"^":"V;",
V:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aQ(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.k.V(z.createElement("table"),b,c,d)
z.toString
z=new W.a3(z)
x=z.ga9(z)
y.toString
x.toString
new W.a3(y).a0(0,new W.a3(x))
return y},
"%":"HTMLTableSectionElement"},
e4:{"^":"V;",$ise4:1,"%":"HTMLTemplateElement"},
b7:{"^":"B;",$isb7:1,"%":"Touch"},
aI:{"^":"cB;",$isaI:1,"%":"TouchEvent"},
kW:{"^":"jM;",
gl:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.aC(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa7:1,
$asa7:function(){return[W.b7]},
$asH:function(){return[W.b7]},
$isn:1,
$asn:function(){return[W.b7]},
$isc:1,
$asc:function(){return[W.b7]},
$asae:function(){return[W.b7]},
"%":"TouchList"},
cB:{"^":"S;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
ba:{"^":"a8;",
geS:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.a1("deltaY is not supported"))},
geR:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.a1("deltaX is not supported"))},
$isba:1,
"%":"WheelEvent"},
j1:{"^":"bH;",
ea:function(a,b){return a.requestAnimationFrame(H.aS(H.f(b,{func:1,ret:-1,args:[P.ab]}),1))},
dr:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
ey:{"^":"t;",$isey:1,"%":"Attr"},
l1:{"^":"fC;",
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
p:function(a,b){var z
if(b==null)return!1
if(!H.by(b,"$isbt",[P.ab],"$asbt"))return!1
z=J.W(b)
return a.left===z.gaH(b)&&a.top===z.gbi(b)&&a.width===z.gaK(b)&&a.height===z.gaF(b)},
gL:function(a){return W.eD(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaF:function(a){return a.height},
gaK:function(a){return a.width},
"%":"ClientRect|DOMRect"},
l5:{"^":"jR;",
gl:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.aC(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa7:1,
$asa7:function(){return[W.t]},
$asH:function(){return[W.t]},
$isn:1,
$asn:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$asae:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
j7:{"^":"dF;bG:a<",
O:function(a,b){var z,y,x,w,v,u
H.f(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=this.ga6(),y=z.length,x=this.a,w=J.W(x),v=0;v<z.length;z.length===y||(0,H.A)(z),++v){u=z[v]
b.$2(u,w.ak(x,u))}},
ga6:function(){var z,y,x,w,v
z=this.a.attributes
y=H.b([],[P.j])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.h(z,w)
v=H.i(z[w],"$isey")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asbO:function(){return[P.j,P.j]},
$asa_:function(){return[P.j,P.j]}},
ja:{"^":"j7;a",
n:function(a,b){return J.cb(this.a,H.w(b))},
gl:function(a){return this.ga6().length}},
jb:{"^":"ib;a,b,c,$ti"},
l2:{"^":"jb;a,b,c,$ti"},
jc:{"^":"cv;a,b,c,d,e,$ti",m:{
L:function(a,b,c,d,e){var z,y
z=W.eU(new W.jd(c),W.S)
y=z!=null
if(y&&!0){H.f(z,{func:1,args:[W.S]})
if(y)J.f9(a,b,z,!1)}return new W.jc(0,a,b,z,!1,[e])}}},
jd:{"^":"p:27;a",
$1:function(a){return this.a.$1(H.i(a,"$isS"))}},
bw:{"^":"a;a",
d8:function(a){var z,y
z=$.$get$cJ()
if(z.a===0){for(y=0;y<262;++y)z.H(0,C.P[y],W.kc())
for(y=0;y<12;++y)z.H(0,C.n[y],W.kd())}},
ah:function(a){return $.$get$eC().J(0,W.b1(a))},
a5:function(a,b,c){var z,y,x
z=W.b1(a)
y=$.$get$cJ()
x=y.n(0,H.d(z)+"::"+b)
if(x==null)x=y.n(0,"*::"+b)
if(x==null)return!1
return H.cQ(x.$4(a,b,c,this))},
$isag:1,
m:{
eB:function(a){var z,y
z=W.d4(null)
y=window.location
z=new W.bw(new W.jA(z,y))
z.d8(a)
return z},
l3:[function(a,b,c,d){H.i(a,"$isF")
H.w(b)
H.w(c)
H.i(d,"$isbw")
return!0},"$4","kc",16,0,10],
l4:[function(a,b,c,d){var z,y,x
H.i(a,"$isF")
H.w(b)
H.w(c)
z=H.i(d,"$isbw").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kd",16,0,10]}},
ae:{"^":"a;$ti",
gE:function(a){return new W.dv(a,this.gl(a),-1,[H.c4(this,a,"ae",0)])}},
dK:{"^":"a;a",
ah:function(a){return C.a.bV(this.a,new W.hu(a))},
a5:function(a,b,c){return C.a.bV(this.a,new W.ht(a,b,c))},
$isag:1},
hu:{"^":"p:21;a",
$1:function(a){return H.i(a,"$isag").ah(this.a)}},
ht:{"^":"p:21;a,b,c",
$1:function(a){return H.i(a,"$isag").a5(this.a,this.b,this.c)}},
jB:{"^":"a;",
d9:function(a,b,c,d){var z,y,x
this.a.a0(0,c)
z=b.bj(0,new W.jC())
y=b.bj(0,new W.jD())
this.b.a0(0,z)
x=this.c
x.a0(0,C.R)
x.a0(0,y)},
ah:function(a){return this.a.J(0,W.b1(a))},
a5:["cY",function(a,b,c){var z,y
z=W.b1(a)
y=this.c
if(y.J(0,H.d(z)+"::"+b))return this.d.ex(c)
else if(y.J(0,"*::"+b))return this.d.ex(c)
else{y=this.b
if(y.J(0,H.d(z)+"::"+b))return!0
else if(y.J(0,"*::"+b))return!0
else if(y.J(0,H.d(z)+"::*"))return!0
else if(y.J(0,"*::*"))return!0}return!1}],
$isag:1},
jC:{"^":"p:17;",
$1:function(a){return!C.a.J(C.n,H.w(a))}},
jD:{"^":"p:17;",
$1:function(a){return C.a.J(C.n,H.w(a))}},
jF:{"^":"jB;e,a,b,c,d",
a5:function(a,b,c){if(this.cY(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cb(a,"template")==="")return this.e.J(0,b)
return!1},
m:{
eK:function(){var z,y,x,w,v
z=P.j
y=P.dE(C.m,z)
x=H.q(C.m,0)
w=H.f(new W.jG(),{func:1,ret:z,args:[x]})
v=H.b(["TEMPLATE"],[z])
y=new W.jF(y,P.bp(null,null,null,z),P.bp(null,null,null,z),P.bp(null,null,null,z),null)
y.d9(null,new H.hn(C.m,w,[x,z]),v,null)
return y}}},
jG:{"^":"p:24;",
$1:function(a){return"TEMPLATE::"+H.d(H.w(a))}},
jE:{"^":"a;",
ah:function(a){var z=J.G(a)
if(!!z.$isdX)return!1
z=!!z.$iscx
if(z&&W.b1(a)==="foreignObject")return!1
if(z)return!0
return!1},
a5:function(a,b,c){if(b==="is"||C.c.aO(b,"on"))return!1
return this.ah(a)},
$isag:1},
dv:{"^":"a;a,b,c,0d,$ti",
sbI:function(a){this.d=H.u(a,H.q(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbI(J.f8(this.a,z))
this.c=z
return!0}this.sbI(null)
this.c=y
return!1},
gA:function(){return this.d},
$isaw:1},
ag:{"^":"a;"},
jA:{"^":"a;a,b",$iskX:1},
eO:{"^":"a;a",
bm:function(a){new W.jO(this).$2(a,null)},
ao:function(a,b){if(b==null)J.d3(a)
else J.bA(b,a)},
ed:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fa(a)
x=J.cb(y.gbG(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.Y(t)}v="element unprintable"
try{v=J.ac(a)}catch(t){H.Y(t)}try{u=W.b1(a)
this.ec(H.i(a,"$isF"),b,z,v,u,H.i(y,"$isa_"),H.w(x))}catch(t){if(H.Y(t) instanceof P.as)throw t
else{this.ao(a,b)
window
s="Removing corrupted element "+H.d(v)
if(typeof console!="undefined")window.console.warn(s)}}},
ec:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.ao(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.ah(a)){this.ao(a,b)
window
z="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a5(a,"is",g)){this.ao(a,b)
window
z="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.ga6()
y=H.b(z.slice(0),[H.q(z,0)])
for(x=f.ga6().length-1,z=f.a,w=J.W(z);x>=0;--x){if(x>=y.length)return H.h(y,x)
v=y[x]
if(!this.a.a5(a,J.fe(v),w.ak(z,v))){window
u="Removing disallowed attribute <"+H.d(e)+" "+v+'="'+H.d(w.ak(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.ak(z,v)
w.e3(z,v)}}if(!!J.G(a).$ise4)this.bm(a.content)},
$iskQ:1},
jO:{"^":"p:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.ed(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ao(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fb(z)}catch(w){H.Y(w)
v=H.i(z,"$ist")
if(x){u=v.parentNode
if(u!=null)J.bA(u,v)}else J.bA(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.i(y,"$ist")}}},
j9:{"^":"B+fq;"},
jp:{"^":"B+H;"},
jq:{"^":"jp+ae;"},
ju:{"^":"B+H;"},
jv:{"^":"ju+ae;"},
jL:{"^":"B+H;"},
jM:{"^":"jL+ae;"},
jQ:{"^":"B+H;"},
jR:{"^":"jQ+ae;"}}],["","",,P,{"^":"",
k2:function(a,b){var z={}
a.O(0,new P.k3(z))
return z},
dq:function(){var z=$.dp
if(z==null){z=J.c9(window.navigator.userAgent,"Opera",0)
$.dp=z}return z},
fz:function(){var z,y
z=$.dl
if(z!=null)return z
y=$.dm
if(y==null){y=J.c9(window.navigator.userAgent,"Firefox",0)
$.dm=y}if(y)z="-moz-"
else{y=$.dn
if(y==null){y=!P.dq()&&J.c9(window.navigator.userAgent,"Trident/",0)
$.dn=y}if(y)z="-ms-"
else z=P.dq()?"-o-":"-webkit-"}$.dl=z
return z},
k3:{"^":"p:13;a",
$2:function(a,b){this.a[a]=b}},
fO:{"^":"bM;a,b",
gaW:function(){var z,y,x
z=this.b
y=H.N(z,"H",0)
x=W.F
return new H.hl(new H.cH(z,H.f(new P.fP(),{func:1,ret:P.E,args:[y]}),[y]),H.f(new P.fQ(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){J.d2(this.b.a,b)},
gl:function(a){return J.aB(this.gaW().a)},
n:function(a,b){var z=this.gaW()
return z.b.$1(J.ca(z.a,b))},
gE:function(a){var z=P.hh(this.gaW(),!1,W.F)
return new J.aj(z,z.length,0,[H.q(z,0)])},
$asH:function(){return[W.F]},
$asn:function(){return[W.F]},
$asc:function(){return[W.F]}},
fP:{"^":"p:15;",
$1:function(a){return!!J.G(H.i(a,"$ist")).$isF}},
fQ:{"^":"p:22;",
$1:function(a){return H.aV(H.i(a,"$ist"),"$isF")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",dX:{"^":"cx;",$isdX:1,"%":"SVGScriptElement"},cx:{"^":"F;",
gbZ:function(a){return new P.fO(a,new W.a3(a))},
V:function(a,b,c,d){var z,y,x,w,v,u
z=H.b([],[W.ag])
C.a.h(z,W.eB(null))
C.a.h(z,W.eK())
C.a.h(z,new W.jE())
c=new W.eO(new W.dK(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.j).eL(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a3(w)
u=z.ga9(z)
for(z=J.W(v);x=u.firstChild,x!=null;)z.q(v,x)
return v},
$iscx:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",fh:{"^":"B;",$isfh:1,"%":"WebGLBuffer"},fS:{"^":"B;",$isfS:1,"%":"WebGLFramebuffer"},hK:{"^":"B;",$ishK:1,"%":"WebGLProgram"},cr:{"^":"B;",
bW:function(a,b,c){return a.attachShader(b,c)},
a1:function(a,b,c){return a.bindBuffer(b,c)},
eB:function(a,b,c){return a.bindFramebuffer(b,c)},
bY:function(a,b,c,d){return a.bufferData(b,c,d)},
eD:function(a,b){return a.clear(b)},
eE:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
eF:function(a,b){return a.clearDepth(b)},
eG:function(a,b){return a.compileShader(b)},
eN:function(a,b){return a.createShader(b)},
eP:function(a,b){return a.deleteProgram(b)},
eQ:function(a,b){return a.deleteShader(b)},
eT:function(a,b){return a.depthFunc(b)},
c5:function(a,b){return a.disableVertexAttribArray(b)},
eV:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c7:function(a,b){return a.enable(b)},
c8:function(a,b){return a.enableVertexAttribArray(b)},
cB:function(a,b,c){return a.getActiveAttrib(b,c)},
cC:function(a,b,c){return a.getActiveUniform(b,c)},
cD:function(a,b,c){return a.getAttribLocation(b,c)},
bl:function(a,b){return a.getParameter(b)},
cG:function(a,b){return a.getProgramInfoLog(b)},
aL:function(a,b,c){return a.getProgramParameter(b,c)},
cI:function(a,b){return a.getShaderInfoLog(b)},
cJ:function(a,b,c){return a.getShaderParameter(b,c)},
cK:function(a,b,c){return a.getUniformLocation(b,c)},
f9:function(a,b){return a.linkProgram(b)},
cR:function(a,b,c){return a.shaderSource(b,c)},
cs:function(a,b,c){return a.uniform1f(b,c)},
ct:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fL:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cv:function(a,b){return a.useProgram(b)},
fM:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
fN:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscr:1,
"%":"WebGLRenderingContext"},i0:{"^":"B;",$isi0:1,"%":"WebGLShader"},iD:{"^":"B;",$isiD:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",O:{"^":"a;0a,0b,0c,0d,$ti",
sdG:function(a){this.a=H.k(a,"$isc",[H.N(this,"O",0)],"$asc")},
sbL:function(a){this.b=H.f(a,{func:1,ret:P.E,args:[[P.n,H.N(this,"O",0)]]})},
sbK:function(a){this.c=H.f(a,{func:1,ret:-1,args:[P.v,[P.n,H.N(this,"O",0)]]})},
sbM:function(a){this.d=H.f(a,{func:1,ret:-1,args:[P.v,[P.n,H.N(this,"O",0)]]})},
bq:function(a){this.sdG(H.b([],[a]))
this.sbL(null)
this.sbK(null)
this.sbM(null)},
cO:function(a,b,c){var z={func:1,ret:-1,args:[P.v,[P.n,H.N(this,"O",0)]]}
H.f(a,z)
H.f(c,z)
this.sbL(b)
this.sbK(a)
this.sbM(c)},
aN:function(a,b){return this.cO(a,null,b)},
dX:function(a){H.k(a,"$isn",[H.N(this,"O",0)],"$asn")
return!0},
d3:function(a,b){var z
H.k(b,"$isn",[H.N(this,"O",0)],"$asn")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gE:function(a){var z=this.a
return new J.aj(z,z.length,0,[H.q(z,0)])},
N:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.N(this,"O",0)
H.u(b,z)
z=[z]
if(this.dX(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.d3(x,H.b([b],z))}},
$isn:1,
m:{
dg:function(a){var z=new O.O([a])
z.bq(a)
return z}}},co:{"^":"a;0a,0b",
saY:function(a){this.a=H.k(a,"$isc",[V.b4],"$asc")},
gl:function(a){return this.a.length},
gv:function(){var z=this.b
if(z==null){z=D.a6()
this.b=z}return z},
d4:function(a){var z=this.b
if(!(z==null))z.R(a)},
aa:function(){return this.d4(null)},
gaq:function(){var z=this.a
if(z.length>0)return C.a.gaG(z)
else return V.bP()},
cj:function(a){var z=this.a
if(a==null)C.a.h(z,V.bP())
else C.a.h(z,a)
this.aa()},
be:function(){var z=this.a
if(z.length>0){z.pop()
this.aa()}}}}],["","",,E,{"^":"",d7:{"^":"a;"},a5:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0U:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sd5:function(a,b){this.y=H.k(b,"$isO",[E.a5],"$asO")},
sU:function(a){this.z=H.i(a,"$isbj")},
cu:function(a){var z,y,x,w
z=this.r
y=z!=null?z.aJ(a,this):null
if(!J.I(y,this.x)){x=this.x
this.x=y
w=new D.J("matrix",x,y,this,[V.b4])
w.b=!0
this.X(w)}for(z=this.y.a,z=new J.aj(z,z.length,0,[H.q(z,0)]);z.t();)z.d.cu(a)},
aj:function(a){var z,y,x,w,v,u,t,s,r
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gaq())
else C.a.h(z.a,y.G(0,z.gaq()))
z.aa()
a.ck(this.f)
z=a.dy
x=(z&&C.a).gaG(z)
if(x!=null&&this.d!=null){z=x.a
if(z==null){w=a.fr.n(0,"Depth")
if(w==null){z=a.a
w=new A.fw(z,"Depth")
w.d1(z,"Depth")
y=$.fy
v=$.fx
w.c=y
w.d=v
w.e=w.bF(y,35633)
w.f=w.bF(w.d,35632)
y=z.createProgram()
w.r=y
C.b.bW(z,y,w.e)
C.b.bW(z,w.r,w.f)
C.b.f9(z,w.r)
if(!H.cQ(C.b.aL(z,w.r,35714))){u=C.b.cG(z,w.r)
C.b.eP(z,w.r)
H.R(P.T("Failed to link shader: "+H.d(u)))}w.ei()
w.ek()
w.z=w.x.n(0,"posAttr")
w.Q=H.aV(w.y.n(0,"objClr"),"$iscE")
w.ch=H.aV(w.y.n(0,"fogClr"),"$iscE")
w.cx=H.aV(w.y.n(0,"fogStart"),"$iscC")
w.cy=H.aV(w.y.n(0,"fogStop"),"$iscC")
w.db=H.aV(w.y.n(0,"viewObjMat"),"$iscF")
w.dx=H.aV(w.y.n(0,"projMat"),"$iscF")
if(a.fr.c0("Depth"))H.R(P.T('Shader cache already contains a shader by the name "Depth".'))
a.fr.H(0,"Depth",w)}x.a=w
z=w}y=this.e
if(!(y instanceof Z.db)){this.e=null
y=null}if(y==null){z=this.d.eC(new Z.iZ(a.a),$.$get$aq())
y=z.eX($.$get$aq())
v=x.a
y.e=v.z.c
this.e=z
z=v}y=a.a
C.b.cv(y,z.r)
z.x.eW()
v=x.b
t=z.Q
t.toString
s=v.a
r=v.b
v=v.c
C.b.ct(t.a,t.d,s,r,v)
v=x.c
r=z.ch
r.toString
s=v.a
t=v.b
v=v.c
C.b.ct(r.a,r.d,s,t,v)
v=x.d
t=z.cx
C.b.cs(t.a,t.d,v)
v=x.e
t=z.cy
C.b.cs(t.a,t.d,v)
v=a.cy.gaq()
t=z.dx
t.toString
t.bn(v.cp(0,!0))
v=a.cx
if(v==null){v=a.db.gaq().G(0,a.dx.gaq())
a.cx=v}z=z.db
z.toString
z.bn(v.cp(0,!0))
v=this.e
v.b6(a)
v.aj(a)
v.fK(a)
v=x.a
v.toString
C.b.cv(y,null)
v.x.eU()}for(z=this.y.a,z=new J.aj(z,z.length,0,[H.q(z,0)]);z.t();)z.d.aj(a)
a.ci()
a.dx.be()},
gv:function(){var z=this.z
if(z==null){z=D.a6()
this.z=z}return z},
X:function(a){var z=this.z
if(!(z==null))z.R(a)},
W:function(){return this.X(null)},
fi:[function(a){H.i(a,"$isx")
this.e=null
this.X(a)},function(){return this.fi(null)},"hf","$1","$0","gce",0,2,1],
fh:[function(a){this.X(H.i(a,"$isx"))},function(){return this.fh(null)},"he","$1","$0","gcd",0,2,1],
ff:[function(a){this.X(H.i(a,"$isx"))},function(){return this.ff(null)},"hc","$1","$0","gcc",0,2,1],
hb:[function(a,b){var z,y,x,w,v,u,t
H.k(b,"$isn",[E.a5],"$asn")
for(z=b.length,y=this.gcc(),x={func:1,ret:-1,args:[D.x]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.gU()==null){t=new D.bj()
t.sa3(null)
t.saz(null)
t.c=null
t.d=0
u.sU(t)}t=u.gU()
t.toString
H.f(y,x)
if(t.a==null)t.sa3(H.b([],w))
t=t.a;(t&&C.a).h(t,y)}}this.W()},"$2","gfe",8,0,4],
hd:[function(a,b){var z,y
H.k(b,"$isn",[E.a5],"$asn")
for(z=b.gE(b),y=this.gcc();z.t();)z.gA().gv().F(0,y)
this.W()},"$2","gfg",8,0,4],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isdJ:1,
m:{
al:function(a,b,c,d,e,f){var z,y,x,w,v
z=new E.a5()
z.a=d
z.b=!0
z.sd5(0,O.dg(E.a5))
z.y.aN(z.gfe(),z.gfg())
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
y=z.c
if(y==null?e!=null:y!==e){z.c=e
z.d=e
z.e=null
if(y!=null)y.gv().F(0,z.gce())
x=z.c
if(x!=null)x.gv().h(0,z.gce())
w=new D.J("shape",y,z.c,z,[F.dZ])
w.b=!0
z.X(w)}if(!J.I(z.r,c)){v=z.r
if(v!=null)v.gv().F(0,z.gcd())
c.gv().h(0,z.gcd())
z.r=c
w=new D.J("mover",v,c,z,[U.a0])
w.b=!0
z.X(w)}return z}}},hR:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
sep:function(a){this.dy=H.k(a,"$isc",[O.bT],"$asc")},
sel:function(a){this.fr=H.k(a,"$isa_",[P.j,A.cs],"$asa_")},
d_:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.bh(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.co()
y=[V.b4]
z.saY(H.b([],y))
z.b=null
z.gv().h(0,new E.hT(this))
this.cy=z
z=new O.co()
z.saY(H.b([],y))
z.b=null
z.gv().h(0,new E.hU(this))
this.db=z
z=new O.co()
z.saY(H.b([],y))
z.b=null
z.gv().h(0,new E.hV(this))
this.dx=z
this.sep(H.b([],[O.bT]))
z=this.dy;(z&&C.a).h(z,null)
this.sel(new H.aE(0,0,[P.j,A.cs]))},
ck:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaG(z):a;(z&&C.a).h(z,y)},
ci:function(){var z=this.dy
if(z.length>1)z.pop()},
m:{
hS:function(a,b){var z=new E.hR(a,b)
z.d_(a,b)
return z}}},hT:{"^":"p:5;a",
$1:function(a){var z
H.i(a,"$isx")
z=this.a
z.z=null
z.ch=null}},hU:{"^":"p:5;a",
$1:function(a){var z
H.i(a,"$isx")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hV:{"^":"p:5;a",
$1:function(a){var z
H.i(a,"$isx")
z=this.a
z.ch=null
z.cx=null}},il:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0U:x<,0y,0z,0Q,0ch,0cx,0cy",
sU:function(a){this.x=H.i(a,"$isbj")},
d7:[function(a){H.i(a,"$isx")
this.fA()},function(){return this.d7(null)},"d6","$1","$0","gbr",0,2,1],
gf2:function(){var z,y,x
z=Date.now()
y=C.h.ag(P.dr(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.bh(z,!1)
return x/y},
bO:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.G()
if(typeof z!=="number")return H.aU(z)
x=C.e.c9(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.G()
w=C.e.c9(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.e6(C.l,this.gfz())}},
fA:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.f(new E.io(this),{func:1,ret:-1,args:[P.ab]})
C.A.dr(z)
C.A.ea(z,W.eU(y,P.ab))}},"$0","gfz",0,0,2],
fw:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.bO()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.bh(w,!1)
x.y=P.dr(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aa()
w=x.db
C.a.sl(w.a,0)
w.aa()
w=x.dx
C.a.sl(w.a,0)
w.aa()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aj(this.e)}x=this.z
if(!(x==null))x.R(null)}catch(v){z=H.Y(v)
y=H.aT(v)
P.cZ("Error: "+H.d(z))
P.cZ("Stack: "+H.d(y))
throw H.e(z)}},
m:{
im:function(a,b,c,d,e){var z,y,x,w
z=J.G(a)
if(!!z.$iscf)return E.e5(a,!0,!0,!0,!1)
y=W.de(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbZ(a).h(0,y)
w=E.e5(y,!0,!0,!0,!1)
w.a=a
return w},
e5:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.il()
y=P.hf(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.r.bk(a,"webgl",y)
x=H.i(x==null?C.r.bk(a,"experimental-webgl",y):x,"$iscr")
if(x==null)H.R(P.T("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hS(x,a)
w=new T.ik(x)
w.b=H.Q((x&&C.b).bl(x,3379))
w.c=H.Q(C.b.bl(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.iM(a)
v=new X.ha()
v.c=new X.b5(!1,!1,!1)
v.se1(P.bp(null,null,null,P.v))
w.b=v
v=new X.hp(w)
v.f=0
v.r=V.br()
v.x=V.br()
v.Q=1
v.ch=1
w.c=v
v=new X.hj(w)
v.r=0
v.x=V.br()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ir(w)
v.e=0
v.f=V.br()
v.r=V.br()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sds(H.b([],[[P.cv,P.a]]))
v=w.z
u=document
t=W.a8
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.L(u,"contextmenu",H.f(w.gdL(),s),!1,t))
v=w.z
r=W.S
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.L(a,"focus",H.f(w.gdO(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.L(a,"blur",H.f(w.gdI(),q),!1,r))
v=w.z
p=W.b3
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.L(u,"keyup",H.f(w.gdQ(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.L(u,"keydown",H.f(w.gdP(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.L(a,"mousedown",H.f(w.gdS(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.L(a,"mouseup",H.f(w.gdU(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.L(a,"mousemove",H.f(w.gdT(),s),!1,t))
p=w.z
o=W.ba;(p&&C.a).h(p,W.L(a,H.w(W.fH(a)),H.f(w.gdV(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.L(u,"mousemove",H.f(w.gdM(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.L(u,"mouseup",H.f(w.gdN(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.L(u,"pointerlockchange",H.f(w.gdW(),q),!1,r))
r=w.z
q=W.aI
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.L(a,"touchstart",H.f(w.ge0(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.L(a,"touchend",H.f(w.gdZ(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.L(a,"touchmove",H.f(w.ge_(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.bh(Date.now(),!1)
z.cy=0
z.bO()
return z}}},io:{"^":"p:38;a",
$1:function(a){var z
H.kr(a)
z=this.a
if(z.ch){z.ch=!1
z.fw()}}}}],["","",,Z,{"^":"",ew:{"^":"a;a,b",$iskD:1,m:{
j_:function(a,b,c){var z
H.k(c,"$isc",[P.v],"$asc")
z=a.createBuffer()
C.b.a1(a,b,z)
C.b.bY(a,b,new Int16Array(H.cL(c)),35044)
C.b.a1(a,b,null)
return new Z.ew(b,z)}}},da:{"^":"d7;a,b,c,d,e",
b6:function(a){var z,y,x
try{y=a.a
C.b.c8(y,this.e)
C.b.fM(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.Y(x)
y=P.T('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.d(z))
throw H.e(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.d(this.e)+"]"}},iZ:{"^":"a;a",$iskE:1},db:{"^":"a;a,0b,c,d",
sdC:function(a){this.b=H.k(a,"$isc",[Z.ci],"$asc")},
eX:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
b6:function(a){var z,y
z=this.a
C.b.a1(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].b6(a)},
fK:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.c5(x,z[y].e)
C.b.a1(x,this.a.a,null)},
aj:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.h(w,x)
v=w[x]
w=v.c
u=w.a
C.b.a1(y,u,w.b)
C.b.eV(y,v.a,v.b,5123,0)
C.b.a1(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.j]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ac(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(y,", ")+"\nAttrs:   "+C.a.k(u,", ")},
$iskV:1},ci:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aG(this.c)+"'")+"]"}},es:{"^":"a;a",
gbo:function(a){var z,y
z=this.a
y=(z&$.$get$aq().a)!==0?3:0
if((z&$.$get$aL().a)!==0)y+=3
if((z&$.$get$aK().a)!==0)y+=3
if((z&$.$get$aM().a)!==0)y+=2
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$b8().a)!==0)y+=3
if((z&$.$get$b9().a)!==0)y+=4
if((z&$.$get$aO().a)!==0)++y
return(z&$.$get$aJ().a)!==0?y+4:y},
ey:function(a){var z,y,x
z=$.$get$aq()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b8()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b9()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0)if(x===a)return z
return $.$get$ev()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.es))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.j])
y=this.a
if((y&$.$get$aq().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aL().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aK().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aN().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$b8().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$b9().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.k(z,"|")},
m:{
a2:function(a){return new Z.es(a)}}}}],["","",,D,{"^":"",fk:{"^":"a;"},bj:{"^":"a;0a,0b,0c,0d",
sa3:function(a){this.a=H.k(a,"$isc",[{func:1,ret:-1,args:[D.x]}],"$asc")},
saz:function(a){this.b=H.k(a,"$isc",[{func:1,ret:-1,args:[D.x]}],"$asc")},
h:function(a,b){var z={func:1,ret:-1,args:[D.x]}
H.f(b,z)
if(this.a==null)this.sa3(H.b([],[z]))
z=this.a;(z&&C.a).h(z,b)},
F:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[D.x]})
z=this.a
z=z==null?null:C.a.J(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).F(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.J(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).F(z,b)||y}return y},
R:function(a){var z,y,x,w
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
return!0}if(!x)C.a.O(y,new D.fL(z))
y=this.b
if(!(y==null))C.a.O(y,new D.fM(z))
z=this.b
if(!(z==null))C.a.sl(z,0)
return!0},
fB:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.R(y)}}},
at:function(){return this.fB(!0,!1)},
m:{
a6:function(){var z=new D.bj()
z.sa3(null)
z.saz(null)
z.c=null
z.d=0
return z}}},fL:{"^":"p:19;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.x]})
z=this.a.a
z.b
a.$1(z)}},fM:{"^":"p:19;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.x]})
z=this.a.a
z.b
a.$1(z)}},x:{"^":"a;a,0b"},dx:{"^":"x;c,d,a,0b,$ti"},dy:{"^":"x;c,d,a,0b,$ti"},J:{"^":"x;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}}],["","",,X,{"^":"",dc:{"^":"a;a,b",
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dc))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}},dB:{"^":"a;a,b",
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dB))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}},ha:{"^":"a;0a,0b,0c,0d",
se1:function(a){this.d=H.k(a,"$isdY",[P.v],"$asdY")},
fo:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
fk:function(a){this.c=a.b
this.d.F(0,a.a)
return!1}},hj:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
bd:function(a,b){this.r=a.a
return!1},
as:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.cM()
if(typeof z!=="number")return z.cz()
this.r=(z&~y)>>>0
return!1},
ar:function(a,b){return!1},
fp:function(a){return!1},
dR:function(a,b,c){return}},b5:{"^":"a;a,b,c",
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.b5))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},hp:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bd:function(a,b){this.f=a.a
return!1},
as:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.cM()
if(typeof z!=="number")return z.cz()
this.f=(z&~y)>>>0
return!1},
ar:function(a,b){return!1},
fq:function(a,b){return!1}},ir:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
fn:function(a){H.k(a,"$isc",[V.ah],"$asc")
return!1},
fl:function(a){H.k(a,"$isc",[V.ah],"$asc")
return!1},
fm:function(a){H.k(a,"$isc",[V.ah],"$asc")
return!1}},iM:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sds:function(a){this.z=H.k(a,"$isc",[[P.cv,P.a]],"$asc")},
bE:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dB(z,new X.b5(y,a.altKey,a.shiftKey))},
af:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b5(y,a.altKey,a.shiftKey)},
b5:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b5(y,a.altKey,a.shiftKey)},
a4:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.Z()
v=z.top
if(typeof x!=="number")return x.Z()
return new V.ah(y-w,x-v)},
an:function(a){return new V.bv(a.movementX,a.movementY)},
b2:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.ah])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
t=C.e.Y(u.pageX)
C.e.Y(u.pageY)
s=z.left
C.e.Y(u.pageX)
C.a.h(y,new V.ah(t-s,C.e.Y(u.pageY)-z.top))}return y},
a2:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dc(z,new X.b5(y,a.altKey,a.shiftKey))},
aZ:function(a){var z,y,x,w,v,u
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
fZ:[function(a){this.f=!0},"$1","gdO",4,0,8],
fT:[function(a){this.f=!1},"$1","gdI",4,0,8],
fW:[function(a){H.i(a,"$isa8")
if(this.f&&this.aZ(a))a.preventDefault()},"$1","gdL",4,0,3],
h0:[function(a){var z
H.i(a,"$isb3")
if(!this.f)return
z=this.bE(a)
this.b.fo(z)},"$1","gdQ",4,0,20],
h_:[function(a){var z
H.i(a,"$isb3")
if(!this.f)return
z=this.bE(a)
this.b.fk(z)},"$1","gdP",4,0,20],
h1:[function(a){var z,y,x,w
H.i(a,"$isa8")
z=this.a
z.focus()
this.f=!0
this.af(a)
if(this.x){y=this.a2(a)
x=this.an(a)
if(this.d.bd(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.a2(a)
w=this.a4(a)
if(this.c.bd(y,w))a.preventDefault()},"$1","gdS",4,0,3],
h3:[function(a){var z,y,x
H.i(a,"$isa8")
this.af(a)
z=this.a2(a)
if(this.x){y=this.an(a)
if(this.d.as(z,y))a.preventDefault()
return}if(this.r)return
x=this.a4(a)
if(this.c.as(z,x))a.preventDefault()},"$1","gdU",4,0,3],
fY:[function(a){var z,y,x
H.i(a,"$isa8")
if(!this.aZ(a)){this.af(a)
z=this.a2(a)
if(this.x){y=this.an(a)
if(this.d.as(z,y))a.preventDefault()
return}if(this.r)return
x=this.a4(a)
if(this.c.as(z,x))a.preventDefault()}},"$1","gdN",4,0,3],
h2:[function(a){var z,y,x
H.i(a,"$isa8")
this.af(a)
z=this.a2(a)
if(this.x){y=this.an(a)
if(this.d.ar(z,y))a.preventDefault()
return}if(this.r)return
x=this.a4(a)
if(this.c.ar(z,x))a.preventDefault()},"$1","gdT",4,0,3],
fX:[function(a){var z,y,x
H.i(a,"$isa8")
if(!this.aZ(a)){this.af(a)
z=this.a2(a)
if(this.x){y=this.an(a)
if(this.d.ar(z,y))a.preventDefault()
return}if(this.r)return
x=this.a4(a)
if(this.c.ar(z,x))a.preventDefault()}},"$1","gdM",4,0,3],
h4:[function(a){var z,y
H.i(a,"$isba")
this.af(a)
z=new V.bv((a&&C.z).geR(a),C.z.geS(a)).I(0,180)
if(this.x){if(this.d.fp(z))a.preventDefault()
return}if(this.r)return
y=this.a4(a)
if(this.c.fq(z,y))a.preventDefault()},"$1","gdV",4,0,26],
h5:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.a2(this.y)
x=this.a4(this.y)
this.d.dR(y,x,z)}},"$1","gdW",4,0,8],
h9:[function(a){var z
H.i(a,"$isaI")
this.a.focus()
this.f=!0
this.b5(a)
z=this.b2(a)
if(this.e.fn(z))a.preventDefault()},"$1","ge0",4,0,7],
h7:[function(a){var z
H.i(a,"$isaI")
this.b5(a)
z=this.b2(a)
if(this.e.fl(z))a.preventDefault()},"$1","gdZ",4,0,7],
h8:[function(a){var z
H.i(a,"$isaI")
this.b5(a)
z=this.b2(a)
if(this.e.fm(z))a.preventDefault()},"$1","ge_",4,0,7]}}],["","",,V,{"^":"",
kG:[function(a,b){if(typeof b!=="number")return b.Z()
if(typeof a!=="number")return H.aU(a)
return Math.abs(b-a)<=1e-9},"$2","ho",8,0,25],
d0:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.cL(a-b,z)
return(a<0?a+z:a)+b},
z:function(a,b,c){if(a==null)return C.c.a7("null",c)
return C.c.a7(C.e.cq($.o.$2(a,0)?0:a,b),c+b+1)},
c1:function(a,b,c){var z,y,x,w,v
H.k(a,"$isc",[P.r],"$asc")
z=H.b([],[P.j])
for(y=0,x=0;x<4;++x){w=V.z(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.h(z,v)
C.a.H(z,v,C.c.a7(z[v],y))}return z},
bD:{"^":"a;a,b,c",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bD))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}},
bE:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bE))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+", "+V.z(this.d,3,0)+"]"}},
b4:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
cp:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return z},
G:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.i(a7,"$isb4")
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
return V.am(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b4))return!1
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
i:function(a){return this.D()},
ca:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.r]
y=V.c1(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.c1(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.c1(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.c1(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
D:function(){return this.ca("",3,0)},
u:function(a){return this.ca(a,3,0)},
m:{
bP:function(){var z=$.dI
if(z==null){z=V.am(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.dI=z}return z},
am:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)}}},
ah:{"^":"a;a,b",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ah))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"},
m:{
br:function(){var z=$.dP
if(z==null){z=new V.ah(0,0)
$.dP=z}return z}}},
an:{"^":"a;a,b,c",
Z:function(a,b){return new V.an(this.a-b.a,this.b-b.b,this.c-b.c)},
G:function(a,b){return new V.an(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.an))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}},
dU:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dU))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+", "+V.z(this.d,3,0)+"]"},
m:{
hQ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dU(a,b,c,d)}}},
bv:{"^":"a;a,b",
f8:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.G()
y=this.b
if(typeof y!=="number")return y.G()
return Math.sqrt(z*z+y*y)},"$0","gl",1,0,12],
I:function(a,b){var z,y
if($.o.$2(b,0)){z=$.em
if(z==null){z=new V.bv(0,0)
$.em=z}return z}z=this.a
if(typeof z!=="number")return z.I()
y=this.b
if(typeof y!=="number")return y.I()
return new V.bv(z/b,y/b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bv))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}},
M:{"^":"a;a,b,c",
f8:[function(a){return Math.sqrt(this.K(this))},"$0","gl",1,0,12],
K:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ap:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.M(z*y-x*w,x*v-u*y,u*w-z*v)},
P:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
aM:function(a){return new V.M(-this.a,-this.b,-this.c)},
G:function(a,b){return new V.M(this.a*b,this.b*b,this.c*b)},
I:function(a,b){if($.o.$2(b,0))return V.bW()
return new V.M(this.a/b,this.b/b,this.c/b)},
f6:function(){if(!$.o.$2(0,this.a))return!1
if(!$.o.$2(0,this.b))return!1
if(!$.o.$2(0,this.c))return!1
return!0},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"},
m:{
bW:function(){var z=$.er
if(z==null){z=new V.M(0,0,0)
$.er=z}return z}}}}],["","",,U,{"^":"",dh:{"^":"a0;0a,0b",
gv:function(){var z=this.b
if(z==null){z=D.a6()
this.b=z}return z},
aJ:function(a,b){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dh))return!1
return J.I(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")},
m:{
di:function(a){var z=new U.dh()
z.a=a
return z}}},dw:{"^":"O;0e,0f,0r,0a,0b,0c,0d",
gv:function(){var z=this.e
if(z==null){z=D.a6()
this.e=z}return z},
S:[function(a){var z
H.i(a,"$isx")
z=this.e
if(!(z==null))z.R(a)},function(){return this.S(null)},"fP","$1","$0","gbs",0,2,1],
fS:[function(a,b){var z,y,x,w,v,u,t,s
z=U.a0
H.k(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gbs(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){s=t.gv()
s.toString
H.f(x,w)
if(s.a==null)s.sa3(H.b([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.dx(a,b,this,[z])
z.b=!0
this.S(z)},"$2","gdH",8,0,11],
h6:[function(a,b){var z,y,x
z=U.a0
H.k(b,"$isn",[z],"$asn")
for(y=b.gE(b),x=this.gbs();y.t();)y.gA().gv().F(0,x)
z=new D.dy(a,b,this,[z])
z.b=!0
this.S(z)},"$2","gdY",8,0,11],
aJ:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.au()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aj(z,z.length,0,[H.q(z,0)]),x=null;z.t();){y=z.d
if(y!=null){w=y.aJ(a,b)
if(w!=null)x=x==null?w:w.G(0,x)}}this.f=x==null?V.bP():x
z=this.e
if(!(z==null))z.at()}return this.f},
p:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dw))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.I(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asn:function(){return[U.a0]},
$asO:function(){return[U.a0]},
$isa0:1},a0:{"^":"fk;"},dW:{"^":"a0;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gv:function(){var z=this.y
if(z==null){z=D.a6()
this.y=z}return z},
S:function(a){var z=this.y
if(!(z==null))z.R(a)},
scw:function(a){var z,y
a=V.d0(a,0,6.283185307179586)
z=this.a
if(!$.o.$2(z,a)){y=this.a
this.a=a
z=new D.J("yaw",y,a,this,[P.r])
z.b=!0
this.S(z)}},
scg:function(a){var z,y
a=V.d0(a,0,6.283185307179586)
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
z=new D.J("pitch",y,a,this,[P.r])
z.b=!0
this.S(z)}},
scl:function(a){var z,y
a=V.d0(a,0,6.283185307179586)
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
z=new D.J("roll",y,a,this,[P.r])
z.b=!0
this.S(z)}},
sc4:function(a){var z,y
z=this.d
if(!$.o.$2(z,a)){y=this.d
this.d=a
z=new D.J("deltaYaw",y,a,this,[P.r])
z.b=!0
this.S(z)}},
sc2:function(a){var z,y
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=new D.J("deltaPitch",y,a,this,[P.r])
z.b=!0
this.S(z)}},
sc3:function(a){var z,y
z=this.f
if(!$.o.$2(z,a)){y=this.f
this.f=a
z=new D.J("deltaRoll",y,a,this,[P.r])
z.b=!0
this.S(z)}},
aJ:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.scw(this.a+this.d*a.y)
this.scg(this.b+this.e*a.y)
this.scl(this.c+this.f*a.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
z=V.am(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1)
y=this.b
x=Math.cos(y)
w=Math.sin(y)
z=z.G(0,V.am(x,0,-w,0,0,1,0,0,w,0,x,0,0,0,0,1))
y=this.a
x=Math.cos(y)
w=Math.sin(y)
this.x=z.G(0,V.am(1,0,0,0,0,x,-w,0,0,w,x,0,0,0,0,1))
z=this.y
if(!(z==null))z.at()}return this.x},
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dW))return!1
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
i:function(a){return"Rotater: ["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"], ["+V.z(this.d,3,0)+", "+V.z(this.e,3,0)+", "+V.z(this.f,3,0)+"]"}}}],["","",,M,{"^":"",fJ:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sdj:function(a,b){this.d=H.k(b,"$isO",[E.a5],"$asO")},
ab:[function(a){var z
H.i(a,"$isx")
z=this.x
if(!(z==null))z.R(a)},function(){return this.ab(null)},"fQ","$1","$0","ga_",0,2,1],
fU:[function(a,b){var z,y,x,w,v,u,t,s
z=E.a5
H.k(b,"$isn",[z],"$asn")
for(y=b.length,x=this.ga_(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.gU()==null){s=new D.bj()
s.sa3(null)
s.saz(null)
s.c=null
s.d=0
t.sU(s)}s=t.gU()
s.toString
H.f(x,w)
if(s.a==null)s.sa3(H.b([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.dx(a,b,this,[z])
z.b=!0
this.ab(z)},"$2","gdJ",8,0,4],
fV:[function(a,b){var z,y,x
z=E.a5
H.k(b,"$isn",[z],"$asn")
for(y=b.gE(b),x=this.ga_();y.t();)y.gA().gv().F(0,x)
z=new D.dy(a,b,this,[z])
z.b=!0
this.ab(z)},"$2","gdK",8,0,4],
scn:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gv().F(0,this.ga_())
y=this.c
this.c=a
if(a!=null)a.gv().h(0,this.ga_())
z=new D.J("technique",y,this.c,this,[O.bT])
z.b=!0
this.ab(z)}},
gv:function(){var z=this.x
if(z==null){z=D.a6()
this.x=z}return z},
aj:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
a.ck(this.c)
z=this.b
z.toString
y=a.a
C.b.eB(y,36160,null)
C.b.c7(y,2884)
C.b.c7(y,2929)
C.b.eT(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.aU(x)
t=C.e.Y(u*x)
u=v.b
if(typeof w!=="number")return H.aU(w)
s=C.e.Y(u*w)
u=C.e.Y(v.c*x)
a.c=u
v=C.e.Y(v.d*w)
a.d=v
C.b.fN(y,t,s,u,v)
C.b.eF(y,z.c)
z=z.a
C.b.eE(y,z.a,z.b,z.c,z.d)
C.b.eD(y,16640)
z=this.a
y=a.c
v=a.d
u=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(u*0.5)
n=V.am(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.cj(n)
y=$.dO
if(y==null){y=$.dQ
if(y==null){y=new V.an(0,0,0)
$.dQ=y}v=$.ep
if(v==null){v=new V.M(0,1,0)
$.ep=v}u=$.en
if(u==null){u=new V.M(0,0,-1)
$.en=u}m=u.I(0,Math.sqrt(u.K(u)))
v=v.ap(m)
l=v.I(0,Math.sqrt(v.K(v)))
k=m.ap(l)
j=new V.M(y.a,y.b,y.c)
i=l.aM(0).K(j)
h=k.aM(0).K(j)
g=m.aM(0).K(j)
y=V.am(l.a,k.a,m.a,i,l.b,k.b,m.b,h,l.c,k.c,m.c,g,0,0,0,1)
$.dO=y
f=y}else f=y
z=z.b
if(z!=null){e=z.a
if(e!=null)f=e.G(0,f)}a.db.cj(f)
for(z=this.d.a,z=new J.aj(z,z.length,0,[H.q(z,0)]);z.t();)z.d.cu(a)
for(z=this.d.a,z=new J.aj(z,z.length,0,[H.q(z,0)]);z.t();)z.d.aj(a)
this.a.toString
a.cy.be()
a.db.be()
this.b.toString
a.ci()},
$iskR:1}}],["","",,A,{"^":"",d5:{"^":"a;a,b,c"},fg:{"^":"a;a",
n:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
eW:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
C.b.c8(w.a,w.c)}},
eU:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
C.b.c5(w.a,w.c)}}},fw:{"^":"cs;0z,0Q,0ch,0cx,0cy,0db,0dx,a,b,0c,0d,0e,0f,0r,0x,0y"},cs:{"^":"d7;",
d1:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bF:function(a,b){var z,y,x
z=this.a
y=C.b.eN(z,b)
C.b.cR(z,y,a)
C.b.eG(z,y)
if(!H.cQ(C.b.cJ(z,y,35713))){x=C.b.cI(z,y)
C.b.eQ(z,y)
throw H.e(P.T("Error compiling shader '"+H.d(y)+"': "+H.d(x)))}return y},
ei:function(){var z,y,x,w,v,u
z=H.b([],[A.d5])
y=this.a
x=H.Q(C.b.aL(y,this.r,35721))
if(typeof x!=="number")return H.aU(x)
w=0
for(;w<x;++w){v=C.b.cB(y,this.r,w)
u=C.b.cD(y,this.r,v.name)
C.a.h(z,new A.d5(y,v.name,u))}this.x=new A.fg(z)},
ek:function(){var z,y,x,w,v,u
z=H.b([],[A.P])
y=this.a
x=H.Q(C.b.aL(y,this.r,35718))
if(typeof x!=="number")return H.aU(x)
w=0
for(;w<x;++w){v=C.b.cC(y,this.r,w)
u=C.b.cK(y,this.r,v.name)
C.a.h(z,this.eO(v.type,v.size,v.name,u))}this.y=new A.iC(z)},
ae:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.iv(z,y,b,c)
else return A.cD(z,y,b,a,c)},
dm:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.iG(z,y,b,c)
else return A.cD(z,y,b,a,c)},
dn:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.iH(z,y,b,c)
else return A.cD(z,y,b,a,c)},
aC:function(a,b){return new P.ez(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
eO:function(a,b,c,d){switch(a){case 5120:return this.ae(b,c,d)
case 5121:return this.ae(b,c,d)
case 5122:return this.ae(b,c,d)
case 5123:return this.ae(b,c,d)
case 5124:return this.ae(b,c,d)
case 5125:return this.ae(b,c,d)
case 5126:return new A.cC(this.a,this.r,c,d)
case 35664:return new A.ix(this.a,this.r,c,d)
case 35665:return new A.cE(this.a,this.r,c,d)
case 35666:return new A.iA(this.a,this.r,c,d)
case 35667:return new A.iy(this.a,this.r,c,d)
case 35668:return new A.iz(this.a,this.r,c,d)
case 35669:return new A.iB(this.a,this.r,c,d)
case 35674:return new A.iE(this.a,this.r,c,d)
case 35675:return new A.iF(this.a,this.r,c,d)
case 35676:return new A.cF(this.a,this.r,c,d)
case 35678:return this.dm(b,c,d)
case 35680:return this.dn(b,c,d)
case 35670:throw H.e(this.aC("BOOL",c))
case 35671:throw H.e(this.aC("BOOL_VEC2",c))
case 35672:throw H.e(this.aC("BOOL_VEC3",c))
case 35673:throw H.e(this.aC("BOOL_VEC4",c))
default:throw H.e(P.T("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}},P:{"^":"a;"},iC:{"^":"a;a",
n:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.D()},
f1:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w)x+=z[w].i(0)+a
return x},
D:function(){return this.f1("\n")}},iv:{"^":"P;a,b,c,d",
i:function(a){return"Uniform1i: "+H.d(this.c)}},iy:{"^":"P;a,b,c,d",
i:function(a){return"Uniform2i: "+H.d(this.c)}},iz:{"^":"P;a,b,c,d",
i:function(a){return"Uniform3i: "+H.d(this.c)}},iB:{"^":"P;a,b,c,d",
i:function(a){return"Uniform4i: "+H.d(this.c)}},iw:{"^":"P;0e,0f,a,b,c,d",
ses:function(a){this.e=H.k(a,"$isc",[P.v],"$asc")},
i:function(a){return"Uniform1iv: "+H.d(this.c)},
m:{
cD:function(a,b,c,d,e){var z=new A.iw(a,b,c,e)
z.f=d
z.ses(P.hg(d,0,!1,P.v))
return z}}},cC:{"^":"P;a,b,c,d",
i:function(a){return"Uniform1f: "+H.d(this.c)}},ix:{"^":"P;a,b,c,d",
i:function(a){return"Uniform2f: "+H.d(this.c)}},cE:{"^":"P;a,b,c,d",
i:function(a){return"Uniform3f: "+H.d(this.c)}},iA:{"^":"P;a,b,c,d",
i:function(a){return"Uniform4f: "+H.d(this.c)}},iE:{"^":"P;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}},iF:{"^":"P;a,b,c,d",
i:function(a){return"UniformMat3: "+H.d(this.c)}},cF:{"^":"P;a,b,c,d",
bn:function(a){var z=new Float32Array(H.cL(H.k(a,"$isc",[P.r],"$asc")))
C.b.fL(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.d(this.c)}},iG:{"^":"P;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.d(this.c)}},iH:{"^":"P;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}}],["","",,F,{"^":"",
kz:function(a,b,c,d){return F.k4(c,a,d,b,new F.kA())},
k4:function(a,b,c,d,e){var z,y
z=F.kx(a,b,new F.k5(H.f(e,{func:1,ret:V.an,args:[P.r]}),d,b,c),null)
if(z==null)return
y=z.e
if(!(y==null))++y.d
z.d.b9()
z.a.b9()
y=z.e
if(!(y==null))y.at()
z.fd(new F.iU(),new F.hv())
return z},
kx:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.ap,P.r,P.r]})
if(a<1)return
if(b<1)return
z=new F.dZ()
y=new F.iP(z)
y.b=!1
x=[F.ap]
y.seu(H.b([],x))
z.a=y
y=new F.i3(z)
y.sb1(H.b([],[F.bQ]))
z.b=y
y=new F.i2(z)
y.sdD(H.b([],[F.bo]))
z.c=y
y=new F.i1(z)
y.sdt(H.b([],[F.U]))
z.d=y
z.e=null
w=H.b([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.cG(null,null,new V.bE(x,0,0,1),null,null,new V.ah(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.c1(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.cG(null,null,new V.bE(o,n,m,1),null,null,new V.ah(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.c1(d))}}z.d.ev(a+1,b+1,w)
return z},
kA:{"^":"p:30;",
$1:function(a){return new V.an(Math.cos(a),Math.sin(a),0)}},
k5:{"^":"p:31;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.d1(y.$1(z),x)
x=J.d1(y.$1(z+3.141592653589793/this.c),x).Z(0,w)
x=new V.M(x.a,x.b,x.c)
v=x.I(0,Math.sqrt(x.K(x)))
y=$.eo
if(y==null){y=new V.M(1,0,0)
$.eo=y
u=y}else u=y
if(!J.I(v,u)){y=$.eq
if(y==null){y=new V.M(0,0,1)
$.eq=y
u=y}else u=y}y=v.ap(u)
t=y.I(0,Math.sqrt(y.K(y)))
y=t.ap(v)
u=y.I(0,Math.sqrt(y.K(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.G(0,y*x)
x=t.G(0,r*x)
x=new V.an(w.a+(y.a-x.a),w.b+(y.b-x.b),w.c+(y.c-x.c))
if(!J.I(a.f,x)){a.f=x
y=a.a
if(y!=null)y.W()}}},
U:{"^":"a;0a,0b,0c,0d,0e",
aE:function(){if(!this.gc6()){C.a.F(this.a.a.d.b,this)
this.a.a.W()}this.e6()
this.e7()
this.e8()},
ef:function(a){this.a=a
C.a.h(a.d.b,this)},
eg:function(a){this.b=a
C.a.h(a.d.c,this)},
eh:function(a){this.c=a
C.a.h(a.d.d,this)},
e6:function(){var z=this.a
if(z!=null){C.a.F(z.d.b,this)
this.a=null}},
e7:function(){var z=this.b
if(z!=null){C.a.F(z.d.c,this)
this.b=null}},
e8:function(){var z=this.c
if(z!=null){C.a.F(z.d.d,this)
this.c=null}},
gc6:function(){return this.a==null||this.b==null||this.c==null},
dg:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bW()
if(y!=null)v=v.P(0,y)
if(x!=null)v=v.P(0,x)
if(w!=null)v=v.P(0,w)
if(v.f6())return
return v.I(0,Math.sqrt(v.K(v)))},
di:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.Z(0,y)
z=new V.M(z.a,z.b,z.c)
v=z.I(0,Math.sqrt(z.K(z)))
z=w.Z(0,y)
z=new V.M(z.a,z.b,z.c)
z=v.ap(z.I(0,Math.sqrt(z.K(z))))
return z.I(0,Math.sqrt(z.K(z)))},
b8:function(){if(this.d!=null)return!0
var z=this.dg()
if(z==null){z=this.di()
if(z==null)return!1}this.d=z
this.a.a.W()
return!0},
gc_:function(a){if(J.I(this.a,this.b))return!0
if(J.I(this.b,this.c))return!0
if(J.I(this.c,this.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
u:function(a){var z,y
if(this.gc6())return a+"disposed"
z=a+C.c.a7(J.ac(this.a.e),0)+", "+C.c.a7(J.ac(this.b.e),0)+", "+C.c.a7(J.ac(this.c.e),0)+" {"
y=this.d
z=(y!=null?z+(y.i(0)+", "):z+"-, ")+"-}"
return z},
D:function(){return this.u("")},
m:{
bI:function(a,b,c){var z,y,x
z=new F.U()
y=a.a
if(y==null)H.R(P.T("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.R(P.T("May not create a face with vertices attached to different shapes."))
z.ef(a)
z.eg(b)
z.eh(c)
C.a.h(z.a.a.d.b,z)
z.a.a.W()
return z}}},
fN:{"^":"a;"},
i9:{"^":"fN;",
bc:function(a,b,c){var z,y
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
bo:{"^":"a;"},
hb:{"^":"a;"},
iu:{"^":"hb;"},
bQ:{"^":"a;"},
dZ:{"^":"a;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.a6()
this.e=z}return z},
fd:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.b(z.slice(0),[H.q(z,0)])
for(z=[F.ap];y.length!==0;){x=C.a.geZ(y)
C.a.fu(y,0)
if(x!=null){w=H.b([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.A)(y),++u){t=y[u]
if(t!=null&&a.bc(0,x,t)){C.a.h(w,t)
C.a.F(y,t)}}if(w.length>1)b.fc(w)}}this.a.C()
this.c.bf()
this.d.bf()
this.b.fv()
this.c.bg(new F.iu())
this.d.bg(new F.i9())
z=this.e
if(!(z==null))z.at()},
eC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aq()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aL().a)!==0)++w
if((x&$.$get$aK().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$b8().a)!==0)++w
if((x&$.$get$b9().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
v=b.gbo(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.r
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.da])
for(r=0,q=0;q<w;++q){p=b.ey(q)
o=p.gbo(p)
C.a.H(s,q,new Z.da(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].fa(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.H(t,l,m[k]);++l}}r+=o}H.k(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
C.b.a1(y,34962,j)
C.b.bY(y,34962,new Float32Array(H.cL(t)),35044)
C.b.a1(y,34962,null)
i=new Z.db(new Z.ew(34962,j),s,b)
i.sdC(H.b([],[Z.ci]))
this.b.b
this.c.b
if(this.d.b.length!==0){x=P.v
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.C()
C.a.h(h,g.e)}f=Z.j_(y,34963,H.k(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ci(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.u("   "))}this.b.b
this.c.b
if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.u("   "))}return C.a.k(z,"\n")},
X:function(a){var z=this.e
if(!(z==null))z.R(a)},
W:function(){return this.X(null)},
$iskT:1},
i1:{"^":"a;a,0b",
sdt:function(a){this.b=H.k(a,"$isc",[F.U],"$asc")},
ev:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,"$isc",[F.ap],"$asc")
z=H.b([],[F.U])
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
C.a.h(z,F.bI(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bI(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bI(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bI(p,m,q))}t=!t}v=!v}return z},
gl:function(a){return this.b.length},
bg:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.h(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.n(0,v)
for(t=v-1;t>=0;--t){s=w.d.n(0,t)
if(a.bc(0,u,s)){u.aE()
break}}}}},
bf:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.gc_(x)
if(y)x.aE()}},
b9:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].b8())x=!1
return x},
i:function(a){return this.D()},
u:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].u(a))
return C.a.k(z,"\n")},
D:function(){return this.u("")}},
i2:{"^":"a;a,0b",
sdD:function(a){this.b=H.k(a,"$isc",[F.bo],"$asc")},
gl:function(a){return 0},
bg:function(a){var z,y,x,w,v
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.h(x,y)
w=x[y]
for(w.c.c,v=-1;!1;--v)w.c.n(0,v)}},
bf:function(){var z,y,x
for(z=-1;!1;--z){y=this.b
return H.h(y,z)
x=y[z]
y=x.gc_(x)
if(y)x.aE()}},
i:function(a){return this.D()},
u:function(a){var z,y,x
z=H.b([],[P.j])
for(y=0;!1;++y){x=this.b
if(y>=0)return H.h(x,y)
C.a.h(z,x[y].u(a+(""+y+". ")))}return C.a.k(z,"\n")},
D:function(){return this.u("")}},
i3:{"^":"a;a,0b",
sb1:function(a){this.b=H.k(a,"$isc",[F.bQ],"$asc")},
gl:function(a){return 0},
fv:function(){var z,y
for(z=-1;!1;--z){y=this.b
return H.h(y,z)
y=y[z].ghh()
y=y.ghg(y)
if(y.gl(y).fO(0,1)){y=this.b
return H.h(y,z)
y[z].aE()}}},
i:function(a){return this.D()},
u:function(a){var z,y,x
z=H.b([],[P.j])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.h(y,x)
C.a.h(z,y[x].u(a))}return C.a.k(z,"\n")},
D:function(){return this.u("")}},
ap:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c1:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cG(this.cx,x,u,z,y,w,v,a,t)},
fa:function(a){var z,y
if(a.p(0,$.$get$aq())){z=this.f
y=[P.r]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.p(0,$.$get$aL())){z=this.r
y=[P.r]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.p(0,$.$get$aK())){z=H.b([0,0,1],[P.r])
return z}else if(a.p(0,$.$get$aM())){z=this.y
y=[P.r]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(a.p(0,$.$get$aN())){z=H.b([0,0,0],[P.r])
return z}else if(a.p(0,$.$get$b8())){z=this.Q
y=[P.r]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.p(0,$.$get$b9())){z=this.Q
y=[P.r]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(a.p(0,$.$get$aO()))return H.b([this.ch],[P.r])
else if(a.p(0,$.$get$aJ())){z=H.b([-1,-1,-1,-1],[P.r])
return z}else return H.b([],[P.r])},
b8:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bW()
this.d.O(0,new F.iY(z))
z=z.a
this.r=z.I(0,Math.sqrt(z.K(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.at()}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
u:function(a){var z,y,x
z=H.b([],[P.j])
C.a.h(z,C.c.a7(J.ac(this.e),0))
y=this.f
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
y=this.r
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,"-")
y=this.y
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,"-")
y=this.Q
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,V.z(this.ch,3,0))
C.a.h(z,"-")
x=C.a.k(z,", ")
return a+"{"+x+"}"},
D:function(){return this.u("")},
m:{
cG:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ap()
y=new F.iX(z)
y.sb1(H.b([],[F.bQ]))
z.b=y
y=new F.iT(z)
x=[F.bo]
y.sdE(H.b([],x))
y.sdF(H.b([],x))
z.c=y
y=new F.iQ(z)
x=[F.U]
y.sdu(H.b([],x))
y.sdv(H.b([],x))
y.sdw(H.b([],x))
z.d=y
h=$.$get$et()
z.e=0
y=$.$get$aq()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aL().a)!==0?e:null
z.x=(x&$.$get$aK().a)!==0?b:null
z.y=(x&$.$get$aM().a)!==0?f:null
z.z=(x&$.$get$aN().a)!==0?g:null
z.Q=(x&$.$get$eu().a)!==0?c:null
z.ch=(x&$.$get$aO().a)!==0?i:0
z.cx=(x&$.$get$aJ().a)!==0?a:null
return z}}},
iY:{"^":"p:9;a",
$1:function(a){var z,y
H.i(a,"$isU")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.P(0,z)}}},
iP:{"^":"a;a,0b,0c",
seu:function(a){this.c=H.k(a,"$isc",[F.ap],"$asc")},
C:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.e(P.T("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.W()
return!0},
gl:function(a){return this.c.length},
b9:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].b8()
return!0},
i:function(a){return this.D()},
u:function(a){var z,y,x,w
this.C()
z=H.b([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].u(a))
return C.a.k(z,"\n")},
D:function(){return this.u("")}},
iQ:{"^":"a;a,0b,0c,0d",
sdu:function(a){this.b=H.k(a,"$isc",[F.U],"$asc")},
sdv:function(a){this.c=H.k(a,"$isc",[F.U],"$asc")},
sdw:function(a){this.d=H.k(a,"$isc",[F.U],"$asc")},
gl:function(a){return this.b.length+this.c.length+this.d.length},
n:function(a,b){var z,y,x
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
O:function(a,b){H.f(b,{func:1,ret:-1,args:[F.U]})
C.a.O(this.b,b)
C.a.O(this.c,new F.iR(this,b))
C.a.O(this.d,new F.iS(this,b))},
i:function(a){return this.D()},
u:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].u(a))
return C.a.k(z,"\n")},
D:function(){return this.u("")}},
iR:{"^":"p:9;a,b",
$1:function(a){H.i(a,"$isU")
if(!J.I(a.a,this.a))this.b.$1(a)}},
iS:{"^":"p:9;a,b",
$1:function(a){var z
H.i(a,"$isU")
z=this.a
if(!J.I(a.a,z)&&!J.I(a.b,z))this.b.$1(a)}},
iT:{"^":"a;a,0b,0c",
sdE:function(a){this.b=H.k(a,"$isc",[F.bo],"$asc")},
sdF:function(a){this.c=H.k(a,"$isc",[F.bo],"$asc")},
gl:function(a){return 0},
n:function(a,b){var z,y
if(b>=0){z=this.c
y=b-0
if(y>=0)return H.h(z,y)
return z[y]}else{z=this.b
return H.h(z,b)
return z[b]}},
i:function(a){return this.D()},
u:function(a){var z,y,x
z=H.b([],[P.j])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.h(y,x)
C.a.h(z,y[x].u(a))}for(y=this.c,x=0;!1;++x){if(x>=0)return H.h(y,x)
C.a.h(z,y[x].u(a))}return C.a.k(z,"\n")},
D:function(){return this.u("")}},
iV:{"^":"a;"},
iU:{"^":"iV;",
bc:function(a,b,c){return J.I(b.f,c.f)}},
iW:{"^":"a;"},
hv:{"^":"iW;",
fc:function(a){var z,y,x,w,v,u,t,s,r
H.k(a,"$isc",[F.ap],"$asc")
z=V.bW()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.M(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.I(0,Math.sqrt(z.K(z)))
for(y=a.length,w=z==null,x=0;x<a.length;a.length===y||(0,H.A)(a),++x){v=a[x]
if(w)u=null
else{t=z.a
s=z.b
r=z.c
u=z.I(0,Math.sqrt(t*t+s*s+r*r))}if(!J.I(v.r,u)){v.r=u
t=v.a
if(t!=null){t=t.e
if(!(t==null))t.R(null)}}}return}},
iX:{"^":"a;a,0b",
sb1:function(a){this.b=H.k(a,"$isc",[F.bQ],"$asc")},
gl:function(a){return 0},
i:function(a){return this.D()},
u:function(a){var z,y,x
z=H.b([],[P.j])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.h(y,x)
C.a.h(z,y[x].u(a))}return C.a.k(z,"\n")},
D:function(){return this.u("")}}}],["","",,O,{"^":"",fv:{"^":"bT;0a,0b,0c,0d,0e,0f",
gv:function(){var z=this.f
if(z==null){z=D.a6()
this.f=z}return z},
ay:function(a){var z=this.f
if(!(z==null))z.R(a)}},bT:{"^":"a;"}}],["","",,T,{"^":"",ik:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",aZ:{"^":"a;",
ai:function(a){return!0},
i:function(a){return"all"},
$isaf:1},af:{"^":"a;"},dH:{"^":"a;0a",
sM:function(a){this.a=H.k(a,"$isc",[V.af],"$asc")},
ai:["cX",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)if(z[x].ai(a))return!0
return!1}],
i:["bp",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaf:1},a9:{"^":"dH;0a",
ai:function(a){return!this.cX(a)},
i:function(a){return"!["+this.bp(0)+"]"}},hM:{"^":"a;0a,0b",
ai:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.cq(this.a)
y=H.cq(this.b)
return z+".."+y},
$isaf:1,
m:{
C:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.e(P.T("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.c.ac(a,0)
y=C.c.ac(b,0)
x=new V.hM()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},hZ:{"^":"a;0a",
see:function(a){this.a=H.k(a,"$isa_",[P.v,P.E],"$asa_")},
d0:function(a){var z,y
if(a.a.length<=0)throw H.e(P.T("May not create a SetMatcher with zero characters."))
z=new H.aE(0,0,[P.v,P.E])
for(y=new H.cn(a,a.gl(a),0,[H.N(a,"H",0)]);y.t();)z.H(0,y.d,!0)
this.see(z)},
ai:function(a){return this.a.c0(a)},
i:function(a){var z=this.a
return P.cw(new H.dD(z,[H.q(z,0)]),0,null)},
$isaf:1,
m:{
m:function(a){var z=new V.hZ()
z.d0(a)
return z}}},ct:{"^":"a;a,b,0c,0d",
ser:function(a){this.c=H.k(a,"$isc",[V.cA],"$asc")},
k:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.cA(this.a.j(0,b))
w.sM(H.b([],[V.af]))
w.c=!1
C.a.h(this.c,w)
return w},
eY:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.ai(a))return w}return},
i:function(a){return this.b}},e8:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.d_(this.b,"\n","\\n")
y=H.d_(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},cz:{"^":"a;a,b,0c",
se9:function(a){var z=P.j
this.c=H.k(a,"$isa_",[z,z],"$asa_")},
a8:function(a,b,c){var z,y,x
H.k(c,"$isc",[P.j],"$asc")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.A)(c),++y){x=c[y]
this.c.H(0,x,b)}},
i:function(a){return this.b}},iq:{"^":"a;0a,0b,0c",
sen:function(a){this.a=H.k(a,"$isa_",[P.j,V.ct],"$asa_")},
seq:function(a){this.b=H.k(a,"$isa_",[P.j,V.cz],"$asa_")},
j:function(a,b){var z=this.a.n(0,b)
if(z==null){z=new V.ct(this,b)
z.ser(H.b([],[V.cA]))
z.d=null
this.a.H(0,b,z)}return z},
B:function(a){var z,y
z=this.b.n(0,a)
if(z==null){z=new V.cz(this,a)
y=P.j
z.se9(new H.aE(0,0,[y,y]))
this.b.H(0,a,z)}return z},
cr:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.e8])
y=this.c
x=[P.v]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.ac(a,t)
r=y.eY(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cw(w,0,null)
throw H.e(P.T("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cw(w,0,null)
p=y.d
o=p.c.n(0,q)
u=new V.e8(o==null?p.b:o,q,t)}++t}}},
m:{
bU:function(){var z,y
z=new V.iq()
y=P.j
z.sen(new H.aE(0,0,[y,V.ct]))
z.seq(new H.aE(0,0,[y,V.cz]))
z.c=null
return z}}},cA:{"^":"dH;b,0c,0a",
i:function(a){return this.b.b+": "+this.bp(0)}}}],["","",,X,{"^":"",dd:{"^":"a;",$isdJ:1},fT:{"^":"e2;0a,0b,0c,0d,0e,0f,0r,0x",
gv:function(){var z=this.x
if(z==null){z=D.a6()
this.x=z}return z}},hy:{"^":"a;0a,0b,0c,0d,0e,0f",
gv:function(){var z=this.f
if(z==null){z=D.a6()
this.f=z}return z},
al:[function(a){var z
H.i(a,"$isx")
z=this.f
if(!(z==null))z.R(a)},function(){return this.al(null)},"fR","$1","$0","gbt",0,2,1],
scb:function(a){var z,y
if(!J.I(this.b,a)){z=this.b
if(z!=null)z.gv().F(0,this.gbt())
y=this.b
this.b=a
if(a!=null)a.gv().h(0,this.gbt())
z=new D.J("mover",y,this.b,this,[U.a0])
z.b=!0
this.al(z)}},
$isdJ:1,
$isdd:1},e2:{"^":"a;"}}],["","",,V,{"^":"",
kv:function(a){P.ip(C.E,new V.kw(a))},
at:{"^":"a;0d",
saX:function(a){this.d=H.k(a,"$isc",[[P.c,W.av]],"$asc")},
aw:function(a){this.b=new P.fZ(C.G)
this.c=null
this.saX(H.b([],[[P.c,W.av]]))},
w:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.b([],[W.av]))
y=a.split("\n")
for(z=y.length,x=[W.av],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.b([],x))
t=document.createElement("div")
t.className="codePart"
H.w(u)
s=this.b.dl(u,0,u.length)
r=s==null?u:s
C.d.cP(t,H.d_(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaG(this.d),t)}},
cf:function(a){var z,y,x,w
H.k(a,"$isc",[P.j],"$asc")
this.saX(H.b([],[[P.c,W.av]]))
z=C.a.k(a,"\n")
y=this.c
if(y==null){y=this.aD()
this.c=y}for(y=y.cr(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)this.aI(y[w])}},
kw:{"^":"p:33;a",
$1:function(a){H.i(a,"$isaH")
P.cZ(C.e.cq(this.a.gf2(),2)+" fps")}},
fs:{"^":"at;a,0b,0c,0d",
aI:function(a){switch(a.a){case"Class":this.w(a.b,"#551")
break
case"Comment":this.w(a.b,"#777")
break
case"Id":this.w(a.b,"#111")
break
case"Num":this.w(a.b,"#191")
break
case"Reserved":this.w(a.b,"#119")
break
case"String":this.w(a.b,"#171")
break
case"Symbol":this.w(a.b,"#616")
break
case"Type":this.w(a.b,"#B11")
break
case"Whitespace":this.w(a.b,"#111")
break}},
aD:function(){var z,y,x,w
z=V.bU()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.m(new H.l("_"))
C.a.h(y.a,x)
x=V.C("a","z")
C.a.h(y.a,x)
x=V.C("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.m(new H.l("_"))
C.a.h(x.a,y)
y=V.C("0","9")
C.a.h(x.a,y)
y=V.C("a","z")
C.a.h(x.a,y)
y=V.C("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.C("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.C("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.m(new H.l("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.C("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.C("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Sym")
y=V.m(new H.l("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").k(0,"Sym")
x=V.m(new H.l("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"OpenDoubleStr")
y=V.m(new H.l('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
x=V.m(new H.l('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
y=V.m(new H.l("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
x=V.m(new H.l('"'))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.aZ())
x=z.j(0,"Start").k(0,"OpenSingleStr")
y=V.m(new H.l("'"))
C.a.h(x.a,y)
y=z.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
x=V.m(new H.l("'"))
C.a.h(y.a,x)
x=z.j(0,"OpenSingleStr").k(0,"EscSingleStr")
y=V.m(new H.l("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscSingleStr").k(0,"OpenSingleStr")
x=V.m(new H.l("'"))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.aZ())
x=z.j(0,"Start").k(0,"Slash")
y=V.m(new H.l("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"Comment")
x=V.m(new H.l("/"))
C.a.h(y.a,x)
x=z.j(0,"Comment").k(0,"EndComment")
y=V.m(new H.l("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.a9()
w=[V.af]
x.sM(H.b([],w))
C.a.h(y.a,x)
y=V.m(new H.l("\n"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"MLComment")
x=V.m(new H.l("*"))
C.a.h(y.a,x)
x=z.j(0,"MLComment").k(0,"MLCStar")
y=V.m(new H.l("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").k(0,"MLComment")
x=new V.a9()
x.sM(H.b([],w))
C.a.h(y.a,x)
y=V.m(new H.l("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").k(0,"EndComment")
x=V.m(new H.l("/"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Whitespace")
y=V.m(new H.l(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Whitespace").k(0,"Whitespace")
x=V.m(new H.l(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Int")
x.d=x.a.B("Num")
x=z.j(0,"Float")
x.d=x.a.B("Num")
x=z.j(0,"Sym")
x.d=x.a.B("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.B("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.B("String")
x=z.j(0,"EndComment")
x.d=x.a.B("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.B("Whitespace")
x=z.j(0,"Id")
y=x.a.B("Id")
x.d=y
x=[P.j]
y.a8(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.a8(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.a8(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
fU:{"^":"at;a,0b,0c,0d",
aI:function(a){switch(a.a){case"Builtin":this.w(a.b,"#411")
break
case"Comment":this.w(a.b,"#777")
break
case"Id":this.w(a.b,"#111")
break
case"Num":this.w(a.b,"#191")
break
case"Preprocess":this.w(a.b,"#737")
break
case"Reserved":this.w(a.b,"#119")
break
case"Symbol":this.w(a.b,"#611")
break
case"Type":this.w(a.b,"#171")
break
case"Whitespace":this.w(a.b,"#111")
break}},
aD:function(){var z,y,x,w
z=V.bU()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.m(new H.l("_"))
C.a.h(y.a,x)
x=V.C("a","z")
C.a.h(y.a,x)
x=V.C("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.m(new H.l("_"))
C.a.h(x.a,y)
y=V.C("0","9")
C.a.h(x.a,y)
y=V.C("a","z")
C.a.h(x.a,y)
y=V.C("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.C("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.C("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.m(new H.l("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.C("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.C("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Sym")
y=V.m(new H.l("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").k(0,"Sym")
x=V.m(new H.l("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Slash")
y=V.m(new H.l("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"Comment")
x=V.m(new H.l("/"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Slash").k(0,"Sym").a,new V.aZ())
x=z.j(0,"Comment").k(0,"EndComment")
y=V.m(new H.l("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.a9()
w=[V.af]
x.sM(H.b([],w))
C.a.h(y.a,x)
y=V.m(new H.l("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Preprocess")
x=V.m(new H.l("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"Preprocess")
y=new V.a9()
y.sM(H.b([],w))
C.a.h(x.a,y)
x=V.m(new H.l("\n"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"EndPreprocess")
y=V.m(new H.l("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Whitespace")
x=V.m(new H.l(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Whitespace").k(0,"Whitespace")
y=V.m(new H.l(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Int")
y.d=y.a.B("Num")
y=z.j(0,"Float")
y.d=y.a.B("Num")
y=z.j(0,"Sym")
y.d=y.a.B("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.B("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.B("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.B("Whitespace")
y=z.j(0,"Id")
x=y.a.B("Id")
y.d=x
y=[P.j]
x.a8(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.a8(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.a8(0,"Builtin",H.b(["gl_FragColor","gl_Position"],y))
return z}},
fV:{"^":"at;a,0b,0c,0d",
aI:function(a){switch(a.a){case"Attr":this.w(a.b,"#911")
this.w("=","#111")
break
case"Id":this.w(a.b,"#111")
break
case"Other":this.w(a.b,"#111")
break
case"Reserved":this.w(a.b,"#119")
break
case"String":this.w(a.b,"#171")
break
case"Symbol":this.w(a.b,"#616")
break}},
aD:function(){var z,y,x
z=V.bU()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.m(new H.l("_"))
C.a.h(y.a,x)
x=V.C("a","z")
C.a.h(y.a,x)
x=V.C("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.m(new H.l("_"))
C.a.h(x.a,y)
y=V.C("0","9")
C.a.h(x.a,y)
y=V.C("a","z")
C.a.h(x.a,y)
y=V.C("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Id").k(0,"Attr")
x=V.m(new H.l("="))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Sym")
x=V.m(new H.l("</\\-!>="))
C.a.h(y.a,x)
x=z.j(0,"Sym").k(0,"Sym")
y=V.m(new H.l("</\\-!>="))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"OpenStr")
x=V.m(new H.l('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenStr").k(0,"CloseStr")
y=V.m(new H.l('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenStr").k(0,"EscStr")
x=V.m(new H.l("\\"))
C.a.h(y.a,x)
x=z.j(0,"EscStr").k(0,"OpenStr")
y=V.m(new H.l('"'))
C.a.h(x.a,y)
C.a.h(z.j(0,"OpenStr").k(0,"OpenStr").a,new V.aZ())
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.aZ())
y=z.j(0,"Other").k(0,"Other")
x=new V.a9()
x.sM(H.b([],[V.af]))
C.a.h(y.a,x)
y=V.m(new H.l('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.C("a","z")
C.a.h(x.a,y)
y=V.C("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.B("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.B("String")
y=z.j(0,"Id")
x=y.a.B("Id")
y.d=x
x.a8(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.j]))
x=z.j(0,"Attr")
x.d=x.a.B("Attr")
x=z.j(0,"Other")
x.d=x.a.B("Other")
return z}},
hA:{"^":"at;a,0b,0c,0d",
cf:function(a){H.k(a,"$isc",[P.j],"$asc")
this.saX(H.b([],[[P.c,W.av]]))
this.w(C.a.k(a,"\n"),"#111")},
aI:function(a){},
aD:function(){return}},
i4:{"^":"a;0a,0b",
d2:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.j).q(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.j.q(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.d.q(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.d.q(v,u)}t=z.createElement("div")
this.a=t
C.d.q(v,t)
this.b=null
t=W.S
W.L(z,"scroll",H.f(new V.i7(x),{func:1,ret:-1,args:[t]}),!1,t)},
bU:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.k(a,"$isc",[P.j],"$asc")
this.ej()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.cr(C.a.f7(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.d.q(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.d.q(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.d.q(y,t)
break
case"Link":s=u.b
if(H.f5(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=H.w(r[1])
q.textContent=H.w(r[0])
C.d.q(y,q)}else{p=P.eN(C.w,s,C.q,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
C.d.q(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.d.q(y,t)
break}}C.d.q(this.a,y)},
cE:function(a){var z,y,x,w
z=new V.fs("dart")
z.aw("dart")
y=new V.fU("glsl")
y.aw("glsl")
x=new V.fV("html")
x.aw("html")
w=C.a.f_(H.b([z,y,x],[V.at]),new V.i8(a))
if(w!=null)return w
z=new V.hA("plain")
z.aw("plain")
return z},
bT:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.k(a2,"$isc",[P.j],"$asc")
z=H.b([],[P.v])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.cW(w).aO(w,"+")){C.a.H(a2,x,C.c.aP(w,1))
C.a.h(z,1)
y=!0}else if(C.c.aO(w,"-")){C.a.H(a2,x,C.c.aP(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.cE(a0)
v.cf(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.d.q(t,s)
C.d.q(this.a,t)
r=P.eN(C.w,a,C.q,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.d4(null)
n.href="#"+r
n.textContent=a
C.d.q(o,n)
C.o.q(p,o)
C.i.q(q,p)
C.k.q(s,q)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.A)(w),++e)C.o.q(f,w[e])
C.i.q(j,i)
C.i.q(j,h)
C.i.q(j,f)
C.k.q(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.A)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gE(w);b.t();)C.o.q(h,b.gA())
C.i.q(j,i)
C.i.q(j,h)
C.k.q(s,j)}},
ej:function(){var z,y,x,w
if(this.b!=null)return
z=V.bU()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Bold")
x=V.m(new H.l("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").k(0,"Bold")
x=new V.a9()
w=[V.af]
x.sM(H.b([],w))
C.a.h(y.a,x)
y=V.m(new H.l("*"))
C.a.h(x.a,y)
y=z.j(0,"Bold").k(0,"BoldEnd")
x=V.m(new H.l("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Italic")
x=V.m(new H.l("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Italic").k(0,"Italic")
x=new V.a9()
x.sM(H.b([],w))
C.a.h(y.a,x)
y=V.m(new H.l("_"))
C.a.h(x.a,y)
y=z.j(0,"Italic").k(0,"ItalicEnd")
x=V.m(new H.l("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Code")
x=V.m(new H.l("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Code").k(0,"Code")
x=new V.a9()
x.sM(H.b([],w))
C.a.h(y.a,x)
y=V.m(new H.l("`"))
C.a.h(x.a,y)
y=z.j(0,"Code").k(0,"CodeEnd")
x=V.m(new H.l("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"LinkHead")
x=V.m(new H.l("["))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"LinkHead").k(0,"LinkTail")
x=V.m(new H.l("|"))
C.a.h(y.a,x)
x=z.j(0,"LinkHead").k(0,"LinkEnd")
y=V.m(new H.l("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkHead").k(0,"LinkHead")
y=new V.a9()
y.sM(H.b([],w))
C.a.h(x.a,y)
x=V.m(new H.l("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").k(0,"LinkEnd")
y=V.m(new H.l("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").k(0,"LinkTail")
y=new V.a9()
y.sM(H.b([],w))
C.a.h(x.a,y)
x=V.m(new H.l("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.aZ())
x=z.j(0,"Other").k(0,"Other")
y=new V.a9()
y.sM(H.b([],w))
C.a.h(x.a,y)
x=V.m(new H.l("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.B("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.B("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.B("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.B("Link")
x=z.j(0,"Other")
x.d=x.a.B("Other")
this.b=z},
m:{
i5:function(a,b){var z=new V.i4()
z.d2(a,!0)
return z}}},
i7:{"^":"p:34;a",
$1:function(a){P.e6(C.l,new V.i6(this.a))}},
i6:{"^":"p:0;a",
$0:function(){var z,y,x
z=C.e.Y(document.documentElement.scrollTop)
y=this.a.style
x=H.d(-0.01*z)+"px"
y.top=x}},
i8:{"^":"p:35;a",
$1:function(a){return H.i(a,"$isat").a===this.a}}}],["","",,R,{"^":"",
f1:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=V.i5("Test 004",!0)
y=W.de(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.d.q(z.a,y)
x=[P.j]
z.bU(H.b(["Test of repeat use of a single mover and shape. There are 9 rings ","moving at the same speed, however the second one is attached to ","the first, the third to the second, and so on."],x))
z.bU(H.b(["\xab[Back to Tests|../]"],x))
w=new U.dW()
w.a=0
w.b=0
w.c=0
w.d=0
w.e=0
w.f=0
w.r=0
w.scw(0)
w.scg(0)
w.scl(0)
w.sc4(0.1)
w.sc2(0.21)
w.sc3(0.32)
w.sc4(0.51)
w.sc2(0.71)
w.sc3(0.92)
v=new U.dw()
v.bq(U.a0)
v.aN(v.gdH(),v.gdY())
v.e=null
v.f=V.bP()
v.r=0
v.h(0,U.di(V.am(0.8,0,0,0,0,0.8,0,0,0,0,0.8,0,0,0,0,1)))
v.h(0,w)
u=F.kz(30,2,15,0.2)
t=E.al(null,!0,v,"",u,null)
s=E.al(null,!0,v,"",u,null)
s.y.h(0,t)
r=E.al(null,!0,v,"",u,null)
r.y.h(0,s)
q=E.al(null,!0,v,"",u,null)
q.y.h(0,r)
p=E.al(null,!0,v,"",u,null)
p.y.h(0,q)
o=E.al(null,!0,v,"",u,null)
o.y.h(0,p)
n=E.al(null,!0,v,"",u,null)
n.y.h(0,o)
m=E.al(null,!0,v,"",u,null)
m.y.h(0,n)
l=E.al(null,!0,v,"",u,null)
l.y.h(0,m)
k=new O.fv()
k.d=1
k.e=10
j=new V.bD(1,1,1)
k.b=j
x=[V.bD]
i=new D.J("objectColor",null,j,k,x)
i.b=!0
k.ay(i)
j=new V.bD(0,0,0)
if(!J.I(k.c,j)){h=k.c
k.c=j
x=new D.J("fogColor",h,j,k,x)
x.b=!0
k.ay(x)}x=k.d
if(!$.o.$2(x,3)){h=k.d
k.d=3
x=new D.J("fogStart",h,3,k,[P.r])
x.b=!0
k.ay(x)}x=k.e
if(!$.o.$2(x,6)){h=k.e
k.e=6
x=new D.J("fogStop",h,6,k,[P.r])
x.b=!0
k.ay(x)}g=new M.fJ()
g.sdj(0,O.dg(E.a5))
g.d.aN(g.gdJ(),g.gdK())
g.e=null
g.f=null
g.r=null
g.x=null
f=new X.hy()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.scb(null)
x=f.c
if(!$.o.$2(x,1.0471975511965976)){h=f.c
f.c=1.0471975511965976
x=new D.J("fov",h,1.0471975511965976,f,[P.r])
x.b=!0
f.al(x)}x=f.d
if(!$.o.$2(x,0.1)){h=f.d
f.d=0.1
x=new D.J("near",h,0.1,f,[P.r])
x.b=!0
f.al(x)}x=f.e
if(!$.o.$2(x,2000)){h=f.e
f.e=2000
x=new D.J("far",h,2000,f,[P.r])
x.b=!0
f.al(x)}x=g.a
if(x!==f){if(x!=null)x.gv().F(0,g.ga_())
h=g.a
g.a=f
f.gv().h(0,g.ga_())
x=new D.J("camera",h,g.a,g,[X.dd])
x.b=!0
g.ab(x)}e=new X.fT()
x=new V.bE(0,0,0,1)
e.a=x
e.b=!0
e.c=2000
e.d=!0
e.e=0
e.f=!1
x=$.dV
if(x==null){x=V.hQ(0,0,1,1)
$.dV=x}e.r=x
x=g.b
if(x!==e){if(x!=null)x.gv().F(0,g.ga_())
h=g.b
g.b=e
e.gv().h(0,g.ga_())
x=new D.J("target",h,g.b,g,[X.e2])
x.b=!0
g.ab(x)}g.scn(null)
g.scn(k)
g.d.h(0,l)
g.a.scb(U.di(V.am(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
d=C.t.cF(document,"testCanvas")
if(d==null)H.R(P.T("Failed to find an element with the identifier, testCanvas."))
c=E.im(d,!0,!0,!0,!1)
x=c.d
if(x!==g){if(x!=null)x.gv().F(0,c.gbr())
c.d=g
g.gv().h(0,c.gbr())
c.d6()}x=c.z
if(x==null){x=D.a6()
c.z=x}i={func:1,ret:-1,args:[D.x]}
b=H.f(new R.ko(z,k),i)
if(x.b==null)x.saz(H.b([],[i]))
x=x.b;(x&&C.a).h(x,b)
V.kv(c)},
ko:{"^":"p:5;a,b",
$1:function(a){var z,y,x,w
H.i(a,"$isx")
z=this.a
y=this.b
x=y.a
w=[P.j]
z.bT("Vertex Shader","glsl",0,H.b((x==null?null:x.c).split("\n"),w))
y=y.a
z.bT("Fragment Shader","glsl",0,H.b((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.G=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dA.prototype
return J.h5.prototype}if(typeof a=="string")return J.bm.prototype
if(a==null)return J.h6.prototype
if(typeof a=="boolean")return J.h4.prototype
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.a)return a
return J.c3(a)}
J.c2=function(a){if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.a)return a
return J.c3(a)}
J.cV=function(a){if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.a)return a
return J.c3(a)}
J.k9=function(a){if(typeof a=="number")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bu.prototype
return a}
J.ka=function(a){if(typeof a=="number")return J.bl.prototype
if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bu.prototype
return a}
J.cW=function(a){if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bu.prototype
return a}
J.W=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.a)return a
return J.c3(a)}
J.I=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.G(a).p(a,b)}
J.f7=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k9(a).au(a,b)}
J.d1=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ka(a).G(a,b)}
J.f8=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kl(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c2(a).n(a,b)}
J.f9=function(a,b,c,d){return J.W(a).df(a,b,c,d)}
J.bA=function(a,b){return J.W(a).e4(a,b)}
J.d2=function(a,b){return J.W(a).q(a,b)}
J.c9=function(a,b,c){return J.c2(a).eH(a,b,c)}
J.ca=function(a,b){return J.cV(a).N(a,b)}
J.fa=function(a){return J.W(a).gez(a)}
J.bg=function(a){return J.G(a).gL(a)}
J.aY=function(a){return J.cV(a).gE(a)}
J.aB=function(a){return J.c2(a).gl(a)}
J.fb=function(a){return J.W(a).gfs(a)}
J.fc=function(a){return J.W(a).gfF(a)}
J.cb=function(a,b){return J.W(a).ak(a,b)}
J.d3=function(a){return J.cV(a).ft(a)}
J.fd=function(a,b,c){return J.cW(a).av(a,b,c)}
J.fe=function(a){return J.cW(a).fJ(a)}
J.ac=function(a){return J.G(a).i(a)}
I.aA=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.j=W.bB.prototype
C.r=W.cf.prototype
C.d=W.av.prototype
C.D=W.fB.prototype
C.F=W.fW.prototype
C.t=W.fY.prototype
C.H=J.B.prototype
C.a=J.aD.prototype
C.h=J.dA.prototype
C.e=J.bl.prototype
C.c=J.bm.prototype
C.O=J.bn.prototype
C.S=W.hs.prototype
C.x=J.hz.prototype
C.y=W.hL.prototype
C.b=P.cr.prototype
C.o=W.ih.prototype
C.k=W.ii.prototype
C.i=W.ij.prototype
C.p=J.bu.prototype
C.z=W.ba.prototype
C.A=W.j1.prototype
C.B=new P.hx()
C.C=new P.iO()
C.f=new P.jw()
C.l=new P.b0(0)
C.E=new P.b0(5e6)
C.G=new P.h_("element",!0,!1,!1,!1)
C.I=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.J=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.K=function(getTagFallback) {
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
C.L=function() {
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
C.M=function(hooks) {
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
C.N=function(hooks) {
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
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.P=H.b(I.aA(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.j])
C.Q=H.b(I.aA(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.j])
C.R=H.b(I.aA([]),[P.j])
C.w=H.b(I.aA([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.m=H.b(I.aA(["bind","if","ref","repeat","syntax"]),[P.j])
C.n=H.b(I.aA(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.j])
C.q=new P.iN(!1)
$.ad=0
$.b_=null
$.d8=null
$.cM=!1
$.f_=null
$.eV=null
$.f4=null
$.c0=null
$.c5=null
$.cX=null
$.aQ=null
$.bc=null
$.bd=null
$.cN=!1
$.D=C.f
$.ak=null
$.ch=null
$.du=null
$.dt=null
$.dp=null
$.dn=null
$.dm=null
$.dl=null
$.o=V.ho()
$.dI=null
$.dP=null
$.dQ=null
$.dV=null
$.em=null
$.er=null
$.eo=null
$.ep=null
$.eq=null
$.en=null
$.fy="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.fx="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.dO=null
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
I.$lazy(y,x,w)}})(["dk","$get$dk",function(){return H.eZ("_$dart_dartClosure")},"ck","$get$ck",function(){return H.eZ("_$dart_js")},"e9","$get$e9",function(){return H.ai(H.bV({
toString:function(){return"$receiver$"}}))},"ea","$get$ea",function(){return H.ai(H.bV({$method$:null,
toString:function(){return"$receiver$"}}))},"eb","$get$eb",function(){return H.ai(H.bV(null))},"ec","$get$ec",function(){return H.ai(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eg","$get$eg",function(){return H.ai(H.bV(void 0))},"eh","$get$eh",function(){return H.ai(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ee","$get$ee",function(){return H.ai(H.ef(null))},"ed","$get$ed",function(){return H.ai(function(){try{null.$method$}catch(z){return z.message}}())},"ej","$get$ej",function(){return H.ai(H.ef(void 0))},"ei","$get$ei",function(){return H.ai(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cI","$get$cI",function(){return P.j2()},"be","$get$be",function(){return[]},"eM","$get$eM",function(){return P.hP("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dj","$get$dj",function(){return{}},"eC","$get$eC",function(){return P.dE(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.j)},"cJ","$get$cJ",function(){return P.he(P.j,P.bk)},"ev","$get$ev",function(){return Z.a2(0)},"et","$get$et",function(){return Z.a2(511)},"aq","$get$aq",function(){return Z.a2(1)},"aL","$get$aL",function(){return Z.a2(2)},"aK","$get$aK",function(){return Z.a2(4)},"aM","$get$aM",function(){return Z.a2(8)},"aN","$get$aN",function(){return Z.a2(16)},"b8","$get$b8",function(){return Z.a2(32)},"b9","$get$b9",function(){return Z.a2(64)},"eu","$get$eu",function(){return Z.a2(96)},"aO","$get$aO",function(){return Z.a2(128)},"aJ","$get$aJ",function(){return Z.a2(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.y},{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a8]},{func:1,ret:-1,args:[P.v,[P.n,E.a5]]},{func:1,ret:P.y,args:[D.x]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aI]},{func:1,ret:-1,args:[W.S]},{func:1,ret:P.y,args:[F.U]},{func:1,ret:P.E,args:[W.F,P.j,P.j,W.bw]},{func:1,ret:-1,args:[P.v,[P.n,U.a0]]},{func:1,ret:P.r},{func:1,ret:P.y,args:[,,]},{func:1,ret:P.j,args:[P.v]},{func:1,ret:P.E,args:[W.t]},{func:1,args:[,]},{func:1,ret:P.E,args:[P.j]},{func:1,ret:P.y,args:[,]},{func:1,ret:P.y,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.E,args:[W.ag]},{func:1,ret:W.F,args:[W.t]},{func:1,ret:-1,args:[W.t,W.t]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:P.E,args:[P.r,P.r]},{func:1,ret:-1,args:[W.ba]},{func:1,args:[W.S]},{func:1,ret:[P.ar,,],args:[,]},{func:1,ret:P.y,args:[,],opt:[,]},{func:1,ret:V.an,args:[P.r]},{func:1,ret:P.y,args:[F.ap,P.r,P.r]},{func:1,ret:P.y,args:[{func:1,ret:-1}]},{func:1,ret:P.y,args:[P.aH]},{func:1,ret:P.y,args:[W.S]},{func:1,ret:P.E,args:[V.at]},{func:1,args:[P.j]},{func:1,args:[,P.j]},{func:1,ret:P.y,args:[P.ab]}]
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
if(x==y)H.ky(d||a)
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
Isolate.aA=a.aA
Isolate.cT=a.cT
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
if(typeof dartMainRunner==="function")dartMainRunner(R.f1,[])
else R.f1([])})})()
//# sourceMappingURL=test.dart.js.map
