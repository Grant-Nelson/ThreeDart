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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.d3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.d3(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d4=function(){}
var dart=[["","",,H,{"^":"",l2:{"^":"a;a"}}],["","",,J,{"^":"",
d9:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cb:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d8==null){H.kB()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.eI("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cw()]
if(v!=null)return v
v=H.kG(a)
if(v!=null)return v
if(typeof a=="function")return C.U
y=Object.getPrototypeOf(a)
if(y==null)return C.C
if(y===Object.prototype)return C.C
if(typeof w=="function"){Object.defineProperty(w,$.$get$cw(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
A:{"^":"a;",
n:function(a,b){return a===b},
gP:function(a){return H.bd(a)},
i:["dn",function(a){return"Instance of '"+H.aQ(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
hm:{"^":"A;",
i:function(a){return String(a)},
gP:function(a){return a?519018:218159},
$isC:1},
hn:{"^":"A;",
n:function(a,b){return null==b},
i:function(a){return"null"},
gP:function(a){return 0},
$isB:1},
cx:{"^":"A;",
gP:function(a){return 0},
i:["dr",function(a){return String(a)}]},
hS:{"^":"cx;"},
c1:{"^":"cx;"},
bw:{"^":"cx;",
i:function(a){var z=a[$.$get$dv()]
if(z==null)return this.dr(a)
return"JavaScript function for "+H.d(J.a1(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbu:1},
aN:{"^":"A;$ti",
h:function(a,b){H.u(b,H.q(a,0))
if(!!a.fixed$length)H.Q(P.a8("add"))
a.push(b)},
R:function(a,b){var z
if(!!a.fixed$length)H.Q(P.a8("remove"))
for(z=0;z<a.length;++z)if(J.M(a[z],b)){a.splice(z,1)
return!0}return!1},
T:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.aB(a))}},
k:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.N(z,y,H.d(a[y]))
return z.join(b)},
fP:function(a){return this.k(a,"")},
fJ:function(a,b,c){var z,y,x
H.h(b,{func:1,ret:P.C,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.e(P.aB(a))}throw H.e(H.cv())},
fI:function(a,b){return this.fJ(a,b,null)},
V:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
dm:function(a,b,c){var z=a.length
if(b>z)throw H.e(P.a3(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.a3(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.q(a,0)])
return H.b(a.slice(b,c),[H.q(a,0)])},
gb0:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.cv())},
cv:function(a,b){var z,y
H.h(b,{func:1,ret:P.C,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.e(P.aB(a))}return!1},
O:function(a,b){var z
for(z=0;z<a.length;++z)if(J.M(a[z],b))return!0
return!1},
i:function(a){return P.cu(a,"[","]")},
gL:function(a){return new J.ap(a,a.length,0,[H.q(a,0)])},
gP:function(a){return H.bd(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.Q(P.a8("set length"))
if(b<0)throw H.e(P.a3(b,0,null,"newLength",null))
a.length=b},
N:function(a,b,c){H.u(c,H.q(a,0))
if(!!a.immutable$list)H.Q(P.a8("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bq(a,b))
a[b]=c},
$iso:1,
$isc:1,
m:{
hl:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.ck(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.a3(a,0,4294967295,"length",null))
return J.dL(new Array(a),b)},
dL:function(a,b){return J.bO(H.b(a,[b]))},
bO:function(a){H.ce(a)
a.fixed$length=Array
return a}}},
l1:{"^":"aN;$ti"},
ap:{"^":"a;a,b,c,0d,$ti",
scb:function(a){this.d=H.u(a,H.q(this,0))},
gF:function(){return this.d},
v:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.v(z))
x=this.c
if(x>=y){this.scb(null)
return!1}this.scb(z[x]);++this.c
return!0},
$isaD:1},
bP:{"^":"A;",
hn:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.e(P.a8(""+a+".toInt()"))},
bE:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.a8(""+a+".floor()"))},
a4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.a8(""+a+".round()"))},
cX:function(a,b){var z,y
if(b>20)throw H.e(P.a3(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gP:function(a){return a&0x1FFFFFFF},
de:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
du:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cp(a,b)},
as:function(a,b){return(a|0)===a?a/b|0:this.cp(a,b)},
cp:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.a8("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
aY:function(a,b){var z
if(a>0)z=this.eW(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
eW:function(a,b){return b>31?0:a>>>b},
a5:function(a,b){if(typeof b!=="number")throw H.e(H.aH(b))
return a<b},
$ist:1,
$isa4:1},
dN:{"^":"bP;",$isx:1},
dM:{"^":"bP;"},
bQ:{"^":"A;",
bB:function(a,b){if(b<0)throw H.e(H.bq(a,b))
if(b>=a.length)H.Q(H.bq(a,b))
return a.charCodeAt(b)},
am:function(a,b){if(b>=a.length)throw H.e(H.bq(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.z(b)
if(typeof b!=="string")throw H.e(P.ck(b,null,null))
return a+b},
dl:function(a,b,c){var z
if(c>a.length)throw H.e(P.a3(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
b7:function(a,b){return this.dl(a,b,0)},
aT:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.bW(b,null,null))
if(b>c)throw H.e(P.bW(b,null,null))
if(c>a.length)throw H.e(P.bW(c,null,null))
return a.substring(b,c)},
b8:function(a,b){return this.aT(a,b,null)},
hq:function(a){return a.toLowerCase()},
t:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.G)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
h_:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.t(c,z)+a},
a_:function(a,b){return this.h_(a,b," ")},
fl:function(a,b,c){if(c>a.length)throw H.e(P.a3(c,0,a.length,null,null))
return H.fr(a,b,c)},
i:function(a){return a},
gP:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$ise3:1,
$isj:1}}],["","",,H,{"^":"",
cv:function(){return new P.cH("No element")},
hk:function(){return new P.cH("Too many elements")},
m:{"^":"j_;a",
gl:function(a){return this.a.length},
w:function(a,b){return C.c.bB(this.a,b)},
$aseJ:function(){return[P.x]},
$asL:function(){return[P.x]},
$aso:function(){return[P.x]},
$asc:function(){return[P.x]}},
dC:{"^":"o;"},
bS:{"^":"dC;$ti",
gL:function(a){return new H.cz(this,this.gl(this),0,[H.T(this,"bS",0)])},
bO:function(a,b){return this.dq(0,H.h(b,{func:1,ret:P.C,args:[H.T(this,"bS",0)]}))}},
cz:{"^":"a;a,b,c,0d,$ti",
saE:function(a){this.d=H.u(a,H.q(this,0))},
gF:function(){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.ca(z)
x=y.gl(z)
if(this.b!==x)throw H.e(P.aB(z))
w=this.c
if(w>=x){this.saE(null)
return!1}this.saE(y.V(z,w));++this.c
return!0},
$isaD:1},
hB:{"^":"o;a,b,$ti",
gL:function(a){return new H.hC(J.b2(this.a),this.b,this.$ti)},
gl:function(a){return J.aL(this.a)},
V:function(a,b){return this.b.$1(J.ci(this.a,b))},
$aso:function(a,b){return[b]}},
hC:{"^":"aD;0a,b,c,$ti",
saE:function(a){this.a=H.u(a,H.q(this,1))},
v:function(){var z=this.b
if(z.v()){this.saE(this.c.$1(z.gF()))
return!0}this.saE(null)
return!1},
gF:function(){return this.a},
$asaD:function(a,b){return[b]}},
hD:{"^":"bS;a,b,$ti",
gl:function(a){return J.aL(this.a)},
V:function(a,b){return this.b.$1(J.ci(this.a,b))},
$asbS:function(a,b){return[b]},
$aso:function(a,b){return[b]}},
cU:{"^":"o;a,b,$ti",
gL:function(a){return new H.jg(J.b2(this.a),this.b,this.$ti)}},
jg:{"^":"aD;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gF()))return!0
return!1},
gF:function(){return this.a.gF()}},
bM:{"^":"a;$ti"},
eJ:{"^":"a;$ti"},
j_:{"^":"bR+eJ;"}}],["","",,H,{"^":"",
b1:function(a){var z,y
z=H.z(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
ku:function(a){return init.types[H.a_(a)]},
kE:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.G(a).$isad},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a1(a)
if(typeof z!=="string")throw H.e(H.aH(a))
return z},
bd:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aQ:function(a){return H.hU(a)+H.d0(H.aI(a),0,null)},
hU:function(a){var z,y,x,w,v,u,t,s,r
z=J.G(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.M||!!z.$isc1){u=C.A(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.b1(w.length>1&&C.c.am(w,0)===36?C.c.b8(w,1):w)},
e8:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
i1:function(a){var z,y,x,w
z=H.b([],[P.x])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.v)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.aH(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.aY(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.e(H.aH(w))}return H.e8(z)},
e9:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.aH(x))
if(x<0)throw H.e(H.aH(x))
if(x>65535)return H.i1(a)}return H.e8(a)},
cD:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.aY(z,10))>>>0,56320|z&1023)}throw H.e(P.a3(a,0,1114111,null,null))},
aP:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i0:function(a){var z=H.aP(a).getFullYear()+0
return z},
hZ:function(a){var z=H.aP(a).getMonth()+1
return z},
hV:function(a){var z=H.aP(a).getDate()+0
return z},
hW:function(a){var z=H.aP(a).getHours()+0
return z},
hY:function(a){var z=H.aP(a).getMinutes()+0
return z},
i_:function(a){var z=H.aP(a).getSeconds()+0
return z},
hX:function(a){var z=H.aP(a).getMilliseconds()+0
return z},
y:function(a){throw H.e(H.aH(a))},
i:function(a,b){if(a==null)J.aL(a)
throw H.e(H.bq(a,b))},
bq:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ao(!0,b,"index",null)
z=H.a_(J.aL(a))
if(!(b<0)){if(typeof z!=="number")return H.y(z)
y=b>=z}else y=!0
if(y)return P.aM(b,a,"index",null,z)
return P.bW(b,"index",null)},
kq:function(a,b,c){if(a>c)return new P.bV(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bV(a,c,!0,b,"end","Invalid value")
return new P.ao(!0,b,"end",null)},
aH:function(a){return new P.ao(!0,a,null,null)},
kl:function(a){if(typeof a!=="number")throw H.e(H.aH(a))
return a},
e:function(a){var z
if(a==null)a=new P.e2()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fs})
z.name=""}else z.toString=H.fs
return z},
fs:function(){return J.a1(this.dartException)},
Q:function(a){throw H.e(a)},
v:function(a){throw H.e(P.aB(a))},
a5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kS(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.aY(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cy(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e1(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eu()
u=$.$get$ev()
t=$.$get$ew()
s=$.$get$ex()
r=$.$get$eB()
q=$.$get$eC()
p=$.$get$ez()
$.$get$ey()
o=$.$get$eE()
n=$.$get$eD()
m=v.Z(y)
if(m!=null)return z.$1(H.cy(H.z(y),m))
else{m=u.Z(y)
if(m!=null){m.method="call"
return z.$1(H.cy(H.z(y),m))}else{m=t.Z(y)
if(m==null){m=s.Z(y)
if(m==null){m=r.Z(y)
if(m==null){m=q.Z(y)
if(m==null){m=p.Z(y)
if(m==null){m=s.Z(y)
if(m==null){m=o.Z(y)
if(m==null){m=n.Z(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e1(H.z(y),m))}}return z.$1(new H.iZ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ei()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ao(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ei()
return a},
b_:function(a){var z
if(a==null)return new H.f3(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.f3(a)},
ks:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.N(0,a[y],a[x])}return b},
kD:function(a,b,c,d,e,f){H.f(a,"$isbu")
switch(H.a_(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.N("Unsupported number of arguments for wrapped closure"))},
aY:function(a,b){var z
H.a_(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kD)
a.$identity=z
return z},
fK:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.G(d).$isc){z.$reflectionInfo=d
x=H.i6(z).r}else x=d
w=e?Object.create(new H.it().constructor.prototype):Object.create(new H.cm(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ah
if(typeof u!=="number")return u.C()
$.ah=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dr(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.ku,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dj:H.cn
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.e("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dr(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
fH:function(a,b,c,d){var z=H.cn
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dr:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fJ(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fH(y,!w,z,b)
if(y===0){w=$.ah
if(typeof w!=="number")return w.C()
$.ah=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b4
if(v==null){v=H.bH("self")
$.b4=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ah
if(typeof w!=="number")return w.C()
$.ah=w+1
t+=w
w="return function("+t+"){return this."
v=$.b4
if(v==null){v=H.bH("self")
$.b4=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
fI:function(a,b,c,d){var z,y
z=H.cn
y=H.dj
switch(b?-1:a){case 0:throw H.e(H.ie("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fJ:function(a,b){var z,y,x,w,v,u,t,s
z=$.b4
if(z==null){z=H.bH("self")
$.b4=z}y=$.di
if(y==null){y=H.bH("receiver")
$.di=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fI(w,!u,x,b)
if(w===1){z="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
y=$.ah
if(typeof y!=="number")return y.C()
$.ah=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
y=$.ah
if(typeof y!=="number")return y.C()
$.ah=y+1
return new Function(z+y+"}")()},
d3:function(a,b,c,d,e,f,g){return H.fK(a,b,H.a_(c),d,!!e,!!f,g)},
z:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ag(a,"String"))},
lv:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ag(a,"double"))},
kK:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ag(a,"num"))},
d1:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ag(a,"bool"))},
a_:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ag(a,"int"))},
fp:function(a,b){throw H.e(H.ag(a,H.b1(H.z(b).substring(3))))},
kM:function(a,b){throw H.e(H.fG(a,H.b1(H.z(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.G(a)[b])return a
H.fp(a,b)},
U:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.G(a)[b]
else z=!0
if(z)return a
H.kM(a,b)},
ce:function(a){if(a==null)return a
if(!!J.G(a).$isc)return a
throw H.e(H.ag(a,"List<dynamic>"))},
kF:function(a,b){var z
if(a==null)return a
z=J.G(a)
if(!!z.$isc)return a
if(z[b])return a
H.fp(a,b)},
fj:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a_(z)]
else return a.$S()}return},
bE:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fj(J.G(a))
if(z==null)return!1
return H.fa(z,null,b,null)},
h:function(a,b){var z,y
if(a==null)return a
if($.cY)return a
$.cY=!0
try{if(H.bE(a,b))return a
z=H.cg(b)
y=H.ag(a,z)
throw H.e(y)}finally{$.cY=!1}},
d5:function(a,b){if(a!=null&&!H.d2(a,b))H.Q(H.ag(a,H.cg(b)))
return a},
fe:function(a){var z,y
z=J.G(a)
if(!!z.$isp){y=H.fj(z)
if(y!=null)return H.cg(y)
return"Closure"}return H.aQ(a)},
kR:function(a){throw H.e(new P.fO(H.z(a)))},
fk:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aI:function(a){if(a==null)return
return a.$ti},
lw:function(a,b,c){return H.b0(a["$as"+H.d(c)],H.aI(b))},
cc:function(a,b,c,d){var z
H.z(c)
H.a_(d)
z=H.b0(a["$as"+H.d(c)],H.aI(b))
return z==null?null:z[d]},
T:function(a,b,c){var z
H.z(b)
H.a_(c)
z=H.b0(a["$as"+H.d(b)],H.aI(a))
return z==null?null:z[c]},
q:function(a,b){var z
H.a_(b)
z=H.aI(a)
return z==null?null:z[b]},
cg:function(a){return H.aG(a,null)},
aG:function(a,b){var z,y
H.k(b,"$isc",[P.j],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.b1(a[0].builtin$cls)+H.d0(a,1,b)
if(typeof a=="function")return H.b1(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a_(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.d(b[y])}if('func' in a)return H.kb(a,b)
if('futureOr' in a)return"FutureOr<"+H.aG("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kb:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
if(r<0)return H.i(b,r)
t=C.c.C(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aG(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aG(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aG(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aG(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kr(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.z(z[l])
n=n+m+H.aG(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d0:function(a,b,c){var z,y,x,w,v,u
H.k(c,"$isc",[P.j],"$asc")
if(a==null)return""
z=new P.bX("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aG(u,c)}return"<"+z.i(0)+">"},
b0:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bp:function(a,b,c,d){var z,y
H.z(b)
H.ce(c)
H.z(d)
if(a==null)return!1
z=H.aI(a)
y=J.G(a)
if(y[b]==null)return!1
return H.fh(H.b0(y[d],z),null,c,null)},
k:function(a,b,c,d){H.z(b)
H.ce(c)
H.z(d)
if(a==null)return a
if(H.bp(a,b,c,d))return a
throw H.e(H.ag(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.b1(b.substring(3))+H.d0(c,0,null),init.mangledGlobalNames)))},
fh:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ab(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ab(a[y],b,c[y],d))return!1
return!0},
lt:function(a,b,c){return a.apply(b,H.b0(J.G(b)["$as"+H.d(c)],H.aI(b)))},
fm:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="B"||a===-1||a===-2||H.fm(z)}return!1},
d2:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="B"||b===-1||b===-2||H.fm(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.d2(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bE(a,b)}z=J.G(a).constructor
y=H.aI(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.ab(z,null,b,null)},
u:function(a,b){if(a!=null&&!H.d2(a,b))throw H.e(H.ag(a,H.cg(b)))
return a},
ab:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ab(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="B")return!0
if('func' in c)return H.fa(a,b,c,d)
if('func' in a)return c.builtin$cls==="bu"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ab("type" in a?a.type:null,b,x,d)
else if(H.ab(a,b,x,d))return!0
else{if(!('$is'+"b8" in y.prototype))return!1
w=y.prototype["$as"+"b8"]
v=H.b0(w,z?a.slice(1):null)
return H.ab(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fh(H.b0(r,z),b,u,d)},
fa:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ab(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ab(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ab(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ab(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kJ(m,b,l,d)},
kJ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ab(c[w],d,a[w],b))return!1}return!0},
lu:function(a,b,c){Object.defineProperty(a,H.z(b),{value:c,enumerable:false,writable:true,configurable:true})},
kG:function(a){var z,y,x,w,v,u
z=H.z($.fl.$1(a))
y=$.c9[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cd[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.z($.fg.$2(a,z))
if(z!=null){y=$.c9[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cd[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cf(x)
$.c9[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cd[z]=x
return x}if(v==="-"){u=H.cf(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fo(a,x)
if(v==="*")throw H.e(P.eI(z))
if(init.leafTags[z]===true){u=H.cf(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fo(a,x)},
fo:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d9(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cf:function(a){return J.d9(a,!1,null,!!a.$isad)},
kI:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cf(z)
else return J.d9(z,c,null,null)},
kB:function(){if(!0===$.d8)return
$.d8=!0
H.kC()},
kC:function(){var z,y,x,w,v,u,t,s
$.c9=Object.create(null)
$.cd=Object.create(null)
H.kx()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fq.$1(v)
if(u!=null){t=H.kI(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kx:function(){var z,y,x,w,v,u,t
z=C.R()
z=H.aX(C.O,H.aX(C.T,H.aX(C.z,H.aX(C.z,H.aX(C.S,H.aX(C.P,H.aX(C.Q(C.A),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fl=new H.ky(v)
$.fg=new H.kz(u)
$.fq=new H.kA(t)},
aX:function(a,b){return a(b)||b},
fr:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dc:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i5:{"^":"a;a,b,c,d,e,f,r,0x",m:{
i6:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bO(z)
y=z[0]
x=z[1]
return new H.i5(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iL:{"^":"a;a,b,c,d,e,f",
Z:function(a){var z,y,x
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
an:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iL(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c_:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eA:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hP:{"^":"R;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
m:{
e1:function(a,b){return new H.hP(a,b==null?null:b.method)}}},
hq:{"^":"R;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
m:{
cy:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hq(a,y,z?null:b.receiver)}}},
iZ:{"^":"R;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kS:{"^":"p:17;a",
$1:function(a){if(!!J.G(a).$isR)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
f3:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isat:1},
p:{"^":"a;",
i:function(a){return"Closure '"+H.aQ(this).trim()+"'"},
gd1:function(){return this},
$isbu:1,
gd1:function(){return this}},
em:{"^":"p;"},
it:{"^":"em;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.b1(z)+"'"}},
cm:{"^":"em;a,b,c,d",
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cm))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gP:function(a){var z,y
z=this.c
if(z==null)y=H.bd(this.a)
else y=typeof z!=="object"?J.aK(z):H.bd(z)
return(y^H.bd(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.aQ(z)+"'")},
m:{
cn:function(a){return a.a},
dj:function(a){return a.c},
bH:function(a){var z,y,x,w,v
z=new H.cm("self","target","receiver","name")
y=J.bO(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iM:{"^":"R;a",
i:function(a){return this.a},
m:{
ag:function(a,b){return new H.iM("TypeError: "+H.d(P.bK(a))+": type '"+H.fe(a)+"' is not a subtype of type '"+b+"'")}}},
fF:{"^":"R;a",
i:function(a){return this.a},
m:{
fG:function(a,b){return new H.fF("CastError: "+H.d(P.bK(a))+": type '"+H.fe(a)+"' is not a subtype of type '"+b+"'")}}},
id:{"^":"R;a",
i:function(a){return"RuntimeError: "+H.d(this.a)},
m:{
ie:function(a){return new H.id(a)}}},
aO:{"^":"dT;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gaf:function(){return new H.dQ(this,[H.q(this,0)])},
cD:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.c8(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.c8(y,a)}else return this.fN(a)},
fN:function(a){var z=this.d
if(z==null)return!1
return this.bF(this.bg(z,J.aK(a)&0x3ffffff),a)>=0},
w:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aV(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aV(w,b)
x=y==null?null:y.b
return x}else return this.fO(b)},
fO:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bg(z,J.aK(a)&0x3ffffff)
x=this.bF(y,a)
if(x<0)return
return y[x].b},
N:function(a,b,c){var z,y,x,w,v,u
H.u(b,H.q(this,0))
H.u(c,H.q(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bo()
this.b=z}this.c_(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bo()
this.c=y}this.c_(y,b,c)}else{x=this.d
if(x==null){x=this.bo()
this.d=x}w=J.aK(b)&0x3ffffff
v=this.bg(x,w)
if(v==null)this.bt(x,w,[this.ba(b,c)])
else{u=this.bF(v,b)
if(u>=0)v[u].b=c
else v.push(this.ba(b,c))}}},
T:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aB(this))
z=z.c}},
c_:function(a,b,c){var z
H.u(b,H.q(this,0))
H.u(c,H.q(this,1))
z=this.aV(a,b)
if(z==null)this.bt(a,b,this.ba(b,c))
else z.b=c},
dL:function(){this.r=this.r+1&67108863},
ba:function(a,b){var z,y
z=new H.hs(H.u(a,H.q(this,0)),H.u(b,H.q(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.dL()
return z},
bF:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
i:function(a){return P.dU(this)},
aV:function(a,b){return a[b]},
bg:function(a,b){return a[b]},
bt:function(a,b,c){a[b]=c},
dY:function(a,b){delete a[b]},
c8:function(a,b){return this.aV(a,b)!=null},
bo:function(){var z=Object.create(null)
this.bt(z,"<non-identifier-key>",z)
this.dY(z,"<non-identifier-key>")
return z},
$isdP:1},
hs:{"^":"a;a,b,0c,0d"},
dQ:{"^":"dC;a,$ti",
gl:function(a){return this.a.a},
gL:function(a){var z,y
z=this.a
y=new H.ht(z,z.r,this.$ti)
y.c=z.e
return y}},
ht:{"^":"a;a,b,0c,0d,$ti",
sc0:function(a){this.d=H.u(a,H.q(this,0))},
gF:function(){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aB(z))
else{z=this.c
if(z==null){this.sc0(null)
return!1}else{this.sc0(z.a)
this.c=this.c.c
return!0}}},
$isaD:1},
ky:{"^":"p:17;a",
$1:function(a){return this.a(a)}},
kz:{"^":"p:37;a",
$2:function(a,b){return this.a(a,b)}},
kA:{"^":"p:36;a",
$1:function(a){return this.a(H.z(a))}},
ho:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$ise3:1,
m:{
hp:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.e(new P.h8("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kr:function(a){return J.dL(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kL:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
c6:function(a){return a},
bl:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bq(b,a))},
ka:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.e(H.kq(a,b,c))
return b},
hI:{"^":"A;",$islf:1,"%":";ArrayBufferView;cC|f_|f0|hH|f1|f2|bc"},
cC:{"^":"hI;",
gl:function(a){return a.length},
$isad:1,
$asad:I.d4},
hH:{"^":"f0;",
w:function(a,b){H.bl(b,a,a.length)
return a[b]},
$asbM:function(){return[P.t]},
$asL:function(){return[P.t]},
$iso:1,
$aso:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]},
"%":"Float32Array"},
bc:{"^":"f2;",
$asbM:function(){return[P.x]},
$asL:function(){return[P.x]},
$iso:1,
$aso:function(){return[P.x]},
$isc:1,
$asc:function(){return[P.x]}},
l3:{"^":"bc;",
w:function(a,b){H.bl(b,a,a.length)
return a[b]},
"%":"Int16Array"},
l4:{"^":"bc;",
w:function(a,b){H.bl(b,a,a.length)
return a[b]},
"%":"Int32Array"},
l5:{"^":"bc;",
w:function(a,b){H.bl(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
l6:{"^":"bc;",
gl:function(a){return a.length},
w:function(a,b){H.bl(b,a,a.length)
return a[b]},
$islg:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
l7:{"^":"bc;",
gl:function(a){return a.length},
w:function(a,b){H.bl(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
f_:{"^":"cC+L;"},
f0:{"^":"f_+bM;"},
f1:{"^":"cC+L;"},
f2:{"^":"f1+bM;"}}],["","",,P,{"^":"",
ji:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ki()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aY(new P.jk(z),1)).observe(y,{childList:true})
return new P.jj(z,y,x)}else if(self.setImmediate!=null)return P.kj()
return P.kk()},
lk:[function(a){self.scheduleImmediate(H.aY(new P.jl(H.h(a,{func:1,ret:-1})),0))},"$1","ki",4,0,8],
ll:[function(a){self.setImmediate(H.aY(new P.jm(H.h(a,{func:1,ret:-1})),0))},"$1","kj",4,0,8],
lm:[function(a){P.cM(C.q,H.h(a,{func:1,ret:-1}))},"$1","kk",4,0,8],
cM:function(a,b){var z
H.h(b,{func:1,ret:-1})
z=C.h.as(a.a,1000)
return P.jZ(z<0?0:z,b)},
er:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.aR]})
z=C.h.as(a.a,1000)
return P.k_(z<0?0:z,b)},
ke:function(a,b){if(H.bE(a,{func:1,args:[P.a,P.at]}))return H.h(a,{func:1,ret:null,args:[P.a,P.at]})
if(H.bE(a,{func:1,args:[P.a]}))return H.h(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.ck(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kd:function(){var z,y
for(;z=$.aW,z!=null;){$.bn=null
y=z.b
$.aW=y
if(y==null)$.bm=null
z.a.$0()}},
ls:[function(){$.cZ=!0
try{P.kd()}finally{$.bn=null
$.cZ=!1
if($.aW!=null)$.$get$cV().$1(P.fi())}},"$0","fi",0,0,3],
fd:function(a){var z=new P.eS(H.h(a,{func:1,ret:-1}))
if($.aW==null){$.bm=z
$.aW=z
if(!$.cZ)$.$get$cV().$1(P.fi())}else{$.bm.b=z
$.bm=z}},
kh:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.aW
if(z==null){P.fd(a)
$.bn=$.bm
return}y=new P.eS(a)
x=$.bn
if(x==null){y.b=z
$.bn=y
$.aW=y}else{y.b=x.b
x.b=y
$.bn=y
if(y.b==null)$.bm=y}},
kN:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.F
if(C.f===y){P.c8(null,null,C.f,a)
return}y.toString
P.c8(null,null,y,H.h(y.bw(a),z))},
eq:function(a,b){var z,y
z={func:1,ret:-1}
H.h(b,z)
y=$.F
if(y===C.f){y.toString
return P.cM(a,b)}return P.cM(a,H.h(y.bw(b),z))},
iI:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aR]}
H.h(b,z)
y=$.F
if(y===C.f){y.toString
return P.er(a,b)}x=y.cz(b,P.aR)
$.F.toString
return P.er(a,H.h(x,z))},
c7:function(a,b,c,d,e){var z={}
z.a=d
P.kh(new P.kf(z,e))},
fb:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.F
if(y===c)return d.$0()
$.F=c
z=y
try{y=d.$0()
return y}finally{$.F=z}},
fc:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.u(e,g)
y=$.F
if(y===c)return d.$1(e)
$.F=c
z=y
try{y=d.$1(e)
return y}finally{$.F=z}},
kg:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.u(e,h)
H.u(f,i)
y=$.F
if(y===c)return d.$2(e,f)
$.F=c
z=y
try{y=d.$2(e,f)
return y}finally{$.F=z}},
c8:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.f!==c
if(z)d=!(!z||!1)?c.bw(d):c.fd(d,-1)
P.fd(d)},
jk:{"^":"p:12;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jj:{"^":"p:33;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jl:{"^":"p:2;a",
$0:function(){this.a.$0()}},
jm:{"^":"p:2;a",
$0:function(){this.a.$0()}},
f5:{"^":"a;a,0b,c",
dJ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aY(new P.k1(this,b),0),a)
else throw H.e(P.a8("`setTimeout()` not found."))},
dK:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aY(new P.k0(this,a,Date.now(),b),0),a)
else throw H.e(P.a8("Periodic timer."))},
$isaR:1,
m:{
jZ:function(a,b){var z=new P.f5(!0,0)
z.dJ(a,b)
return z},
k_:function(a,b){var z=new P.f5(!1,0)
z.dK(a,b)
return z}}},
k1:{"^":"p:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
k0:{"^":"p:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.du(w,x)}z.c=y
this.d.$1(z)}},
aV:{"^":"a;0a,b,c,d,e,$ti",
fT:function(a){if(this.c!==6)return!0
return this.b.b.bN(H.h(this.d,{func:1,ret:P.C,args:[P.a]}),a.a,P.C,P.a)},
fM:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.q(this,1)}
w=this.b.b
if(H.bE(z,{func:1,args:[P.a,P.at]}))return H.d5(w.hf(z,a.a,a.b,null,y,P.at),x)
else return H.d5(w.bN(H.h(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
az:{"^":"a;co:a<,b,0eO:c<,$ti",
cW:function(a,b,c){var z,y,x,w
z=H.q(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.F
if(y!==C.f){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ke(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.az(0,$.F,[c])
w=b==null?1:3
this.c2(new P.aV(x,w,a,b,[z,c]))
return x},
hm:function(a,b){return this.cW(a,null,b)},
c2:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaV")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaz")
z=y.a
if(z<4){y.c2(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.c8(null,null,z,H.h(new P.ju(this,a),{func:1,ret:-1}))}},
ck:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaV")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaz")
y=u.a
if(y<4){u.ck(a)
return}this.a=y
this.c=u.c}z.a=this.aX(a)
y=this.b
y.toString
P.c8(null,null,y,H.h(new P.jz(z,this),{func:1,ret:-1}))}},
bs:function(){var z=H.f(this.c,"$isaV")
this.c=null
return this.aX(z)},
aX:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
c5:function(a){var z,y,x
z=H.q(this,0)
H.d5(a,{futureOr:1,type:z})
y=this.$ti
if(H.bp(a,"$isb8",y,"$asb8"))if(H.bp(a,"$isaz",y,null))P.eV(a,this)
else P.jv(a,this)
else{x=this.bs()
H.u(a,z)
this.a=4
this.c=a
P.bj(this,x)}},
c6:function(a,b){var z
H.f(b,"$isat")
z=this.bs()
this.a=8
this.c=new P.a6(a,b)
P.bj(this,z)},
$isb8:1,
m:{
jv:function(a,b){var z,y,x
b.a=1
try{a.cW(new P.jw(b),new P.jx(b),null)}catch(x){z=H.a5(x)
y=H.b_(x)
P.kN(new P.jy(b,z,y))}},
eV:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaz")
if(z>=4){y=b.bs()
b.a=a.a
b.c=a.c
P.bj(b,y)}else{y=H.f(b.c,"$isaV")
b.a=2
b.c=a
a.ck(y)}},
bj:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isa6")
y=y.b
u=v.a
t=v.b
y.toString
P.c7(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bj(z.a,b)}y=z.a
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
if(p){H.f(r,"$isa6")
y=y.b
u=r.a
t=r.b
y.toString
P.c7(null,null,y,u,t)
return}o=$.F
if(o==null?q!=null:o!==q)$.F=q
else o=null
y=b.c
if(y===8)new P.jC(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jB(x,b,r).$0()}else if((y&2)!==0)new P.jA(z,x,b).$0()
if(o!=null)$.F=o
y=x.b
if(!!J.G(y).$isb8){if(y.a>=4){n=H.f(t.c,"$isaV")
t.c=null
b=t.aX(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eV(y,t)
return}}m=b.b
n=H.f(m.c,"$isaV")
m.c=null
b=m.aX(n)
y=x.a
u=x.b
if(!y){H.u(u,H.q(m,0))
m.a=4
m.c=u}else{H.f(u,"$isa6")
m.a=8
m.c=u}z.a=m
y=m}}}},
ju:{"^":"p:2;a,b",
$0:function(){P.bj(this.a,this.b)}},
jz:{"^":"p:2;a,b",
$0:function(){P.bj(this.b,this.a.a)}},
jw:{"^":"p:12;a",
$1:function(a){var z=this.a
z.a=0
z.c5(a)}},
jx:{"^":"p:32;a",
$2:function(a,b){this.a.c6(a,H.f(b,"$isat"))},
$1:function(a){return this.$2(a,null)}},
jy:{"^":"p:2;a,b,c",
$0:function(){this.a.c6(this.b,this.c)}},
jC:{"^":"p:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.cT(H.h(w.d,{func:1}),null)}catch(v){y=H.a5(v)
x=H.b_(v)
if(this.d){w=H.f(this.a.a.c,"$isa6").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isa6")
else u.b=new P.a6(y,x)
u.a=!0
return}if(!!J.G(z).$isb8){if(z instanceof P.az&&z.gco()>=4){if(z.gco()===8){w=this.b
w.b=H.f(z.geO(),"$isa6")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hm(new P.jD(t),null)
w.a=!1}}},
jD:{"^":"p:30;a",
$1:function(a){return this.a}},
jB:{"^":"p:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.q(x,0)
v=H.u(this.c,w)
u=H.q(x,1)
this.a.b=x.b.b.bN(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a5(t)
y=H.b_(t)
x=this.a
x.b=new P.a6(z,y)
x.a=!0}}},
jA:{"^":"p:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isa6")
w=this.c
if(w.fT(z)&&w.e!=null){v=this.b
v.b=w.fM(z)
v.a=!1}}catch(u){y=H.a5(u)
x=H.b_(u)
w=H.f(this.a.a.c,"$isa6")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a6(y,x)
s.a=!0}}},
eS:{"^":"a;a,0b"},
iu:{"^":"a;$ti",
gl:function(a){var z,y,x,w
z={}
y=new P.az(0,$.F,[P.x])
z.a=0
x=H.q(this,0)
w=H.h(new P.iw(z,this),{func:1,ret:-1,args:[x]})
H.h(new P.ix(z,y),{func:1,ret:-1})
W.P(this.a,this.b,w,!1,x)
return y}},
iw:{"^":"p;a,b",
$1:function(a){H.u(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.B,args:[H.q(this.b,0)]}}},
ix:{"^":"p:2;a,b",
$0:function(){this.b.c5(this.a.a)}},
cI:{"^":"a;$ti"},
iv:{"^":"a;"},
aR:{"^":"a;"},
a6:{"^":"a;a,b",
i:function(a){return H.d(this.a)},
$isR:1},
k6:{"^":"a;",$islj:1},
kf:{"^":"p:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e2()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
jO:{"^":"k6;",
hg:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.f===$.F){a.$0()
return}P.fb(null,null,this,a,-1)}catch(x){z=H.a5(x)
y=H.b_(x)
P.c7(null,null,this,z,H.f(y,"$isat"))}},
hh:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.u(b,c)
try{if(C.f===$.F){a.$1(b)
return}P.fc(null,null,this,a,b,-1,c)}catch(x){z=H.a5(x)
y=H.b_(x)
P.c7(null,null,this,z,H.f(y,"$isat"))}},
fd:function(a,b){return new P.jQ(this,H.h(a,{func:1,ret:b}),b)},
bw:function(a){return new P.jP(this,H.h(a,{func:1,ret:-1}))},
cz:function(a,b){return new P.jR(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
cT:function(a,b){H.h(a,{func:1,ret:b})
if($.F===C.f)return a.$0()
return P.fb(null,null,this,a,b)},
bN:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.u(b,d)
if($.F===C.f)return a.$1(b)
return P.fc(null,null,this,a,b,c,d)},
hf:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.u(b,e)
H.u(c,f)
if($.F===C.f)return a.$2(b,c)
return P.kg(null,null,this,a,b,c,d,e,f)}},
jQ:{"^":"p;a,b,c",
$0:function(){return this.a.cT(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jP:{"^":"p:3;a,b",
$0:function(){return this.a.hg(this.b)}},
jR:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.hh(this.b,H.u(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hv:function(a,b,c){H.ce(a)
return H.k(H.ks(a,new H.aO(0,0,[b,c])),"$isdP",[b,c],"$asdP")},
hu:function(a,b){return new H.aO(0,0,[a,b])},
bx:function(a,b,c,d){return new P.jI(0,0,[d])},
hj:function(a,b,c){var z,y
if(P.d_(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bo()
C.a.h(y,a)
try{P.kc(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.ek(b,H.kF(z,"$iso"),", ")+c
return y.charCodeAt(0)==0?y:y},
cu:function(a,b,c){var z,y,x
if(P.d_(a))return b+"..."+c
z=new P.bX(b)
y=$.$get$bo()
C.a.h(y,a)
try{x=z
x.a=P.ek(x.gan(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gan()+c
y=z.gan()
return y.charCodeAt(0)==0?y:y},
d_:function(a){var z,y
for(z=0;y=$.$get$bo(),z<y.length;++z)if(a===y[z])return!0
return!1},
kc:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gL(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.v())return
w=H.d(z.gF())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.v()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gF();++x
if(!z.v()){if(x<=4){C.a.h(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gF();++x
for(;z.v();t=s,s=r){r=z.gF();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dR:function(a,b){var z,y,x
z=P.bx(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.v)(a),++x)z.h(0,H.u(a[x],b))
return z},
dU:function(a){var z,y,x
z={}
if(P.d_(a))return"{...}"
y=new P.bX("")
try{C.a.h($.$get$bo(),a)
x=y
x.a=x.gan()+"{"
z.a=!0
a.T(0,new P.hA(z,y))
z=y
z.a=z.gan()+"}"}finally{z=$.$get$bo()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gan()
return z.charCodeAt(0)==0?z:z},
jI:{"^":"jE;a,0b,0c,0d,0e,0f,r,$ti",
gL:function(a){var z=new P.eZ(this,this.r,this.$ti)
z.c=this.e
return z},
gl:function(a){return this.a},
O:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isc4")!=null}else{y=this.dU(b)
return y}},
dU:function(a){var z=this.d
if(z==null)return!1
return this.be(this.cd(z,a),a)>=0},
h:function(a,b){var z,y
H.u(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cX()
this.b=z}return this.c1(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cX()
this.c=y}return this.c1(y,b)}else return this.dM(b)},
dM:function(a){var z,y,x
H.u(a,H.q(this,0))
z=this.d
if(z==null){z=P.cX()
this.d=z}y=this.c7(a)
x=z[y]
if(x==null)z[y]=[this.bp(a)]
else{if(this.be(x,a)>=0)return!1
x.push(this.bp(a))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.eK(this.c,b)
else return this.eH(b)},
eH:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.cd(z,a)
x=this.be(y,a)
if(x<0)return!1
this.cq(y.splice(x,1)[0])
return!0},
c1:function(a,b){H.u(b,H.q(this,0))
if(H.f(a[b],"$isc4")!=null)return!1
a[b]=this.bp(b)
return!0},
eK:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isc4")
if(z==null)return!1
this.cq(z)
delete a[b]
return!0},
cf:function(){this.r=this.r+1&67108863},
bp:function(a){var z,y
z=new P.c4(H.u(a,H.q(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cf()
return z},
cq:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cf()},
c7:function(a){return J.aK(a)&0x3ffffff},
cd:function(a,b){return a[this.c7(b)]},
be:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
m:{
cX:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
c4:{"^":"a;a,0b,0c"},
eZ:{"^":"a;a,b,0c,0d,$ti",
sc4:function(a){this.d=H.u(a,H.q(this,0))},
gF:function(){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aB(z))
else{z=this.c
if(z==null){this.sc4(null)
return!1}else{this.sc4(H.u(z.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
$isaD:1,
m:{
jJ:function(a,b,c){var z=new P.eZ(a,b,[c])
z.c=a.e
return z}}},
jE:{"^":"ig;"},
bR:{"^":"jK;",$iso:1,$isc:1},
L:{"^":"a;$ti",
gL:function(a){return new H.cz(a,this.gl(a),0,[H.cc(this,a,"L",0)])},
V:function(a,b){return this.w(a,b)},
hp:function(a,b){var z,y
z=H.b([],[H.cc(this,a,"L",0)])
C.a.sl(z,this.gl(a))
for(y=0;y<this.gl(a);++y)C.a.N(z,y,this.w(a,y))
return z},
ho:function(a){return this.hp(a,!0)},
i:function(a){return P.cu(a,"[","]")}},
dT:{"^":"bT;"},
hA:{"^":"p:13;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
bT:{"^":"a;$ti",
T:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.T(this,"bT",0),H.T(this,"bT",1)]})
for(z=J.b2(this.gaf());z.v();){y=z.gF()
b.$2(y,this.w(0,y))}},
gl:function(a){return J.aL(this.gaf())},
i:function(a){return P.dU(this)},
$isa7:1},
ii:{"^":"a;$ti",
a8:function(a,b){var z
for(z=J.b2(H.k(b,"$iso",this.$ti,"$aso"));z.v();)this.h(0,z.gF())},
i:function(a){return P.cu(this,"{","}")},
V:function(a,b){var z,y,x
if(b<0)H.Q(P.a3(b,0,null,"index",null))
for(z=P.jJ(this,this.r,H.q(this,0)),y=0;z.v();){x=z.d
if(b===y)return x;++y}throw H.e(P.aM(b,this,"index",null,y))},
$iso:1,
$isef:1},
ig:{"^":"ii;"},
jK:{"^":"a+L;"}}],["","",,P,{"^":"",cr:{"^":"a;$ti"},bJ:{"^":"iv;$ti"},h0:{"^":"cr;",
$ascr:function(){return[P.j,[P.c,P.x]]}},hh:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},hg:{"^":"bJ;a",
dV:function(a,b,c){var z,y,x,w,v,u
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
default:u=null}if(u!=null){if(v==null)v=new P.bX("")
if(w>b)v.a+=C.c.aT(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.fz(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asbJ:function(){return[P.j,P.j]}},j5:{"^":"h0;a"},j6:{"^":"bJ;",
fn:function(a,b,c){var z,y,x,w
z=a.length
P.ea(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.k4(0,0,x)
if(w.e4(a,b,z)!==z)w.cr(C.c.bB(a,z-1),0)
return new Uint8Array(x.subarray(0,H.ka(0,w.b,x.length)))},
fm:function(a){return this.fn(a,0,null)},
$asbJ:function(){return[P.j,[P.c,P.x]]}},k4:{"^":"a;a,b,c",
cr:function(a,b){var z,y,x,w,v
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
e4:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.bB(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.am(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cr(w,C.c.am(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
h2:function(a){if(a instanceof H.p)return a.i(0)
return"Instance of '"+H.aQ(a)+"'"},
hw:function(a,b,c,d){var z,y
H.u(b,d)
z=J.hl(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.N(z,y,b)
return H.k(z,"$isc",[d],"$asc")},
hx:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gL(a);x.v();)C.a.h(y,H.u(x.gF(),c))
if(b)return y
return H.k(J.bO(y),"$isc",z,"$asc")},
cJ:function(a,b,c){var z,y
z=P.x
H.k(a,"$iso",[z],"$aso")
if(a.constructor===Array){H.k(a,"$isaN",[z],"$asaN")
y=a.length
c=P.ea(b,c,y,null,null,null)
return H.e9(b>0||c<y?C.a.dm(a,b,c):a)}return P.iy(a,b,c)},
iy:function(a,b,c){var z,y,x
H.k(a,"$iso",[P.x],"$aso")
z=J.b2(a)
for(y=0;y<b;++y)if(!z.v())throw H.e(P.a3(b,0,y,null,null))
x=[]
for(;z.v();)x.push(z.gF())
return H.e9(x)},
i7:function(a,b,c){return new H.ho(a,H.hp(a,!1,!0,!1))},
f8:function(a,b,c,d){var z,y,x,w,v,u
H.k(a,"$isc",[P.x],"$asc")
if(c===C.w){z=$.$get$f7().b
z=z.test(b)}else z=!1
if(z)return b
y=C.H.fm(H.u(b,H.T(c,"cr",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cD(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bK:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a1(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h2(a)},
N:function(a){return new P.eU(a)},
db:function(a){H.kL(a)},
C:{"^":"a;"},
"+bool":0,
ac:{"^":"a;a,b",
n:function(a,b){if(b==null)return!1
if(!(b instanceof P.ac))return!1
return this.a===b.a&&!0},
gP:function(a){var z=this.a
return(z^C.h.aY(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.fQ(H.i0(this))
y=P.br(H.hZ(this))
x=P.br(H.hV(this))
w=P.br(H.hW(this))
v=P.br(H.hY(this))
u=P.br(H.i_(this))
t=P.fR(H.hX(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
m:{
fQ:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fR:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
br:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"a4;"},
"+double":0,
b6:{"^":"a;a",
a5:function(a,b){return C.h.a5(this.a,H.f(b,"$isb6").a)},
n:function(a,b){if(b==null)return!1
if(!(b instanceof P.b6))return!1
return this.a===b.a},
gP:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fX()
y=this.a
if(y<0)return"-"+new P.b6(0-y).i(0)
x=z.$1(C.h.as(y,6e7)%60)
w=z.$1(C.h.as(y,1e6)%60)
v=new P.fW().$1(y%1e6)
return""+C.h.as(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
m:{
dB:function(a,b,c,d,e,f){return new P.b6(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fW:{"^":"p:14;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fX:{"^":"p:14;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
R:{"^":"a;"},
e2:{"^":"R;",
i:function(a){return"Throw of null."}},
ao:{"^":"R;a,b,c,d",
gbd:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbc:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.d(z)
w=this.gbd()+y+x
if(!this.a)return w
v=this.gbc()
u=P.bK(this.b)
return w+v+": "+H.d(u)},
m:{
fC:function(a){return new P.ao(!1,null,null,a)},
ck:function(a,b,c){return new P.ao(!0,a,b,c)}}},
bV:{"^":"ao;e,f,a,b,c,d",
gbd:function(){return"RangeError"},
gbc:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
m:{
bW:function(a,b,c){return new P.bV(null,null,!0,a,b,"Value not in range")},
a3:function(a,b,c,d,e){return new P.bV(b,c,!0,a,d,"Invalid value")},
ea:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.a3(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.a3(b,a,c,"end",f))
return b}return c}}},
hi:{"^":"ao;e,l:f>,a,b,c,d",
gbd:function(){return"RangeError"},
gbc:function(){if(J.ft(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.d(z)},
m:{
aM:function(a,b,c,d,e){var z=H.a_(e!=null?e:J.aL(b))
return new P.hi(b,z,!0,a,c,"Index out of range")}}},
j0:{"^":"R;a",
i:function(a){return"Unsupported operation: "+this.a},
m:{
a8:function(a){return new P.j0(a)}}},
iY:{"^":"R;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
m:{
eI:function(a){return new P.iY(a)}}},
cH:{"^":"R;a",
i:function(a){return"Bad state: "+this.a},
m:{
ej:function(a){return new P.cH(a)}}},
fM:{"^":"R;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.bK(z))+"."},
m:{
aB:function(a){return new P.fM(a)}}},
hQ:{"^":"a;",
i:function(a){return"Out of Memory"},
$isR:1},
ei:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isR:1},
fO:{"^":"R;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eU:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
h8:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.c.aT(x,0,75)+"..."
return y+"\n"+x}},
bu:{"^":"a;"},
x:{"^":"a4;"},
"+int":0,
o:{"^":"a;$ti",
bO:["dq",function(a,b){var z=H.T(this,"o",0)
return new H.cU(this,H.h(b,{func:1,ret:P.C,args:[z]}),[z])}],
gl:function(a){var z,y
z=this.gL(this)
for(y=0;z.v();)++y
return y},
gaj:function(a){var z,y
z=this.gL(this)
if(!z.v())throw H.e(H.cv())
y=z.gF()
if(z.v())throw H.e(H.hk())
return y},
V:function(a,b){var z,y,x
if(b<0)H.Q(P.a3(b,0,null,"index",null))
for(z=this.gL(this),y=0;z.v();){x=z.gF()
if(b===y)return x;++y}throw H.e(P.aM(b,this,"index",null,y))},
i:function(a){return P.hj(this,"(",")")}},
aD:{"^":"a;$ti"},
c:{"^":"a;$ti",$iso:1},
"+List":0,
B:{"^":"a;",
gP:function(a){return P.a.prototype.gP.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a4:{"^":"a;"},
"+num":0,
a:{"^":";",
n:function(a,b){return this===b},
gP:function(a){return H.bd(this)},
i:function(a){return"Instance of '"+H.aQ(this)+"'"},
toString:function(){return this.i(this)}},
at:{"^":"a;"},
j:{"^":"a;",$ise3:1},
"+String":0,
bX:{"^":"a;an:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
m:{
ek:function(a,b,c){var z=J.b2(b)
if(!z.v())return a
if(c.length===0){do a+=H.d(z.gF())
while(z.v())}else{a+=H.d(z.gF())
for(;z.v();)a=a+c+H.d(z.gF())}return a}}}}],["","",,W,{"^":"",
df:function(a){var z=document.createElement("a")
return z},
cp:function(a,b){var z=document.createElement("canvas")
return z},
fY:function(a,b,c){var z,y
z=document.body
y=(z&&C.l).a2(z,a,b,c)
y.toString
z=W.w
z=new H.cU(new W.aa(y),H.h(new W.fZ(),{func:1,ret:P.C,args:[z]}),[z])
return H.f(z.gaj(z),"$isJ")},
h_:function(a){H.f(a,"$isbL")
return"wheel"},
b7:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fy(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a5(x)}return z},
c2:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eY:function(a,b,c,d){var z,y
z=W.c2(W.c2(W.c2(W.c2(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ff:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.F
if(z===C.f)return a
return z.cz(a,b)},
S:{"^":"J;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
fB:{"^":"S;",
i:function(a){return String(a)},
$isfB:1,
"%":"HTMLAnchorElement"},
kU:{"^":"S;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
dh:{"^":"S;",$isdh:1,"%":"HTMLBaseElement"},
bG:{"^":"S;",$isbG:1,"%":"HTMLBodyElement"},
co:{"^":"S;",
b3:function(a,b,c){if(c!=null)return this.e5(a,b,P.km(c,null))
return this.e6(a,b)},
d6:function(a,b){return this.b3(a,b,null)},
e5:function(a,b,c){return a.getContext(b,c)},
e6:function(a,b){return a.getContext(b)},
$isco:1,
$isdp:1,
"%":"HTMLCanvasElement"},
cq:{"^":"A;",
e7:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
fE:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$iscq:1,
"%":"CanvasRenderingContext2D"},
kX:{"^":"w;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kZ:{"^":"jp;0l:length=",
d9:function(a,b){var z=this.e8(a,this.dQ(a,b))
return z==null?"":z},
dQ:function(a,b){var z,y
z=$.$get$du()
y=z[b]
if(typeof y==="string")return y
y=this.eY(a,b)
z[b]=y
return y},
eY:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fS()+b
if(z in a)return z
return b},
e8:function(a,b){return a.getPropertyValue(b)},
gbx:function(a){return a.bottom},
gaL:function(a){return a.height},
gax:function(a){return a.left},
gbM:function(a){return a.right},
gaQ:function(a){return a.top},
gaS:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fN:{"^":"a;",
gax:function(a){return this.d9(a,"left")}},
aC:{"^":"S;",$isaC:1,"%":"HTMLDivElement"},
fT:{"^":"w;",
f9:function(a,b){return a.adoptNode(b)},
d7:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
l_:{"^":"A;",
i:function(a){return String(a)},
"%":"DOMException"},
fU:{"^":"A;",
fs:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
fV:{"^":"A;",
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
n:function(a,b){var z
if(b==null)return!1
if(!H.bp(b,"$isas",[P.a4],"$asas"))return!1
z=J.Z(b)
return a.left===z.gax(b)&&a.top===z.gaQ(b)&&a.width===z.gaS(b)&&a.height===z.gaL(b)},
gP:function(a){return W.eY(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbx:function(a){return a.bottom},
gaL:function(a){return a.height},
gax:function(a){return a.left},
gbM:function(a){return a.right},
gaQ:function(a){return a.top},
gaS:function(a){return a.width},
$isas:1,
$asas:function(){return[P.a4]},
"%":";DOMRectReadOnly"},
jo:{"^":"bR;cc:a<,b",
gl:function(a){return this.b.length},
w:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.i(z,b)
return H.f(z[b],"$isJ")},
h:function(a,b){J.dd(this.a,b)
return b},
gL:function(a){var z=this.ho(this)
return new J.ap(z,z.length,0,[H.q(z,0)])},
$asL:function(){return[W.J]},
$aso:function(){return[W.J]},
$asc:function(){return[W.J]}},
J:{"^":"w;0hi:tagName=",
gfc:function(a){return new W.jq(a)},
gcB:function(a){return new W.jo(a,a.children)},
gcC:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.a5()
if(x<0)x=-x*0
if(typeof w!=="number")return w.a5()
if(w<0)w=-w*0
return new P.as(z,y,x,w,[P.a4])},
i:function(a){return a.localName},
a2:["b9",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dE
if(z==null){z=H.b([],[W.am])
y=new W.e_(z)
C.a.h(z,W.eW(null))
C.a.h(z,W.f4())
$.dE=y
d=y}else d=z
z=$.dD
if(z==null){z=new W.f9(d)
$.dD=z
c=z}else{z.a=d
c=z}}if($.aq==null){z=document
y=z.implementation
y=(y&&C.I).fs(y,"")
$.aq=y
$.ct=y.createRange()
y=$.aq
y.toString
y=y.createElement("base")
H.f(y,"$isdh")
y.href=z.baseURI
z=$.aq.head;(z&&C.K).u(z,y)}z=$.aq
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbG")}z=$.aq
if(!!this.$isbG)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aq.body;(z&&C.l).u(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.O(C.W,a.tagName)){z=$.ct;(z&&C.D).dg(z,x)
z=$.ct
w=(z&&C.D).fp(z,b)}else{x.innerHTML=b
w=$.aq.createDocumentFragment()
for(z=J.Z(w);y=x.firstChild,y!=null;)z.u(w,y)}z=$.aq.body
if(x==null?z!=null:x!==z)J.de(x)
c.bR(w)
C.y.f9(document,w)
return w},function(a,b,c){return this.a2(a,b,c,null)},"fq",null,null,"ghX",5,5,null],
dj:function(a,b,c,d){a.textContent=null
this.u(a,this.a2(a,b,c,d))},
di:function(a,b){return this.dj(a,b,null,null)},
aC:function(a,b){return a.getAttribute(b)},
eI:function(a,b){return a.removeAttribute(b)},
$isJ:1,
"%":";Element"},
fZ:{"^":"p:15;",
$1:function(a){return!!J.G(H.f(a,"$isw")).$isJ}},
W:{"^":"A;",$isW:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
bL:{"^":"A;",
dN:function(a,b,c,d){return a.addEventListener(b,H.aY(H.h(c,{func:1,args:[W.W]}),1),!1)},
$isbL:1,
"%":";EventTarget"},
l0:{"^":"S;0l:length=","%":"HTMLFormElement"},
hd:{"^":"S;","%":"HTMLHeadElement"},
he:{"^":"jG;",
gl:function(a){return a.length},
w:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.aM(b,a,null,null,null))
return a[b]},
V:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isad:1,
$asad:function(){return[W.w]},
$asL:function(){return[W.w]},
$iso:1,
$aso:function(){return[W.w]},
$isc:1,
$asc:function(){return[W.w]},
$ishe:1,
$asaj:function(){return[W.w]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hf:{"^":"fT;","%":"HTMLDocument"},
bN:{"^":"A;0cE:data=",$isbN:1,"%":"ImageData"},
dI:{"^":"S;",$isdI:1,$isdp:1,"%":"HTMLImageElement"},
b9:{"^":"cP;",$isb9:1,"%":"KeyboardEvent"},
hy:{"^":"A;",
i:function(a){return String(a)},
$ishy:1,
"%":"Location"},
hF:{"^":"S;","%":"HTMLAudioElement;HTMLMediaElement"},
ae:{"^":"cP;",$isae:1,"%":"PointerEvent;DragEvent|MouseEvent"},
aa:{"^":"bR;a",
gaj:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.e(P.ej("No elements"))
if(y>1)throw H.e(P.ej("More than one element"))
return z.firstChild},
a8:function(a,b){var z,y,x,w,v
H.k(b,"$iso",[W.w],"$aso")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.Z(y),v=0;v<x;++v)w.u(y,z.firstChild)
return},
gL:function(a){var z=this.a.childNodes
return new W.dF(z,z.length,-1,[H.cc(C.Y,z,"aj",0)])},
gl:function(a){return this.a.childNodes.length},
w:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.i(z,b)
return z[b]},
$asL:function(){return[W.w]},
$aso:function(){return[W.w]},
$asc:function(){return[W.w]}},
w:{"^":"bL;0h8:previousSibling=",
h9:function(a){var z=a.parentNode
if(z!=null)J.bF(z,a)},
i:function(a){var z=a.nodeValue
return z==null?this.dn(a):z},
u:function(a,b){return a.appendChild(b)},
eJ:function(a,b){return a.removeChild(b)},
$isw:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hJ:{"^":"jM;",
gl:function(a){return a.length},
w:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.aM(b,a,null,null,null))
return a[b]},
V:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isad:1,
$asad:function(){return[W.w]},
$asL:function(){return[W.w]},
$iso:1,
$aso:function(){return[W.w]},
$isc:1,
$asc:function(){return[W.w]},
$asaj:function(){return[W.w]},
"%":"NodeList|RadioNodeList"},
i3:{"^":"A;",
fp:function(a,b){return a.createContextualFragment(b)},
dg:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
la:{"^":"S;0l:length=","%":"HTMLSelectElement"},
iz:{"^":"S;","%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
iA:{"^":"S;",
a2:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.b9(a,b,c,d)
z=W.fY("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.aa(y).a8(0,new W.aa(z))
return y},
"%":"HTMLTableElement"},
iB:{"^":"S;",
a2:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.b9(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.a2(z.createElement("table"),b,c,d)
z.toString
z=new W.aa(z)
x=z.gaj(z)
x.toString
z=new W.aa(x)
w=z.gaj(z)
y.toString
w.toString
new W.aa(y).a8(0,new W.aa(w))
return y},
"%":"HTMLTableRowElement"},
lc:{"^":"S;",
a2:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.b9(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.a2(z.createElement("table"),b,c,d)
z.toString
z=new W.aa(z)
x=z.gaj(z)
y.toString
x.toString
new W.aa(y).a8(0,new W.aa(x))
return y},
"%":"HTMLTableSectionElement"},
en:{"^":"S;",$isen:1,"%":"HTMLTemplateElement"},
be:{"^":"A;",$isbe:1,"%":"Touch"},
aS:{"^":"cP;",$isaS:1,"%":"TouchEvent"},
le:{"^":"k3;",
gl:function(a){return a.length},
w:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.aM(b,a,null,null,null))
return a[b]},
V:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isad:1,
$asad:function(){return[W.be]},
$asL:function(){return[W.be]},
$iso:1,
$aso:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asaj:function(){return[W.be]},
"%":"TouchList"},
cP:{"^":"W;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
li:{"^":"hF;",$isdp:1,"%":"HTMLVideoElement"},
bi:{"^":"ae;",
gfA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.a8("deltaY is not supported"))},
gfz:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.a8("deltaX is not supported"))},
$isbi:1,
"%":"WheelEvent"},
jh:{"^":"bL;",
eM:function(a,b){return a.requestAnimationFrame(H.aY(H.h(b,{func:1,ret:-1,args:[P.a4]}),1))},
dZ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
eT:{"^":"w;",$iseT:1,"%":"Attr"},
ln:{"^":"fV;",
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
n:function(a,b){var z
if(b==null)return!1
if(!H.bp(b,"$isas",[P.a4],"$asas"))return!1
z=J.Z(b)
return a.left===z.gax(b)&&a.top===z.gaQ(b)&&a.width===z.gaS(b)&&a.height===z.gaL(b)},
gP:function(a){return W.eY(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaL:function(a){return a.height},
gaS:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lr:{"^":"k8;",
gl:function(a){return a.length},
w:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.aM(b,a,null,null,null))
return a[b]},
V:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isad:1,
$asad:function(){return[W.w]},
$asL:function(){return[W.w]},
$iso:1,
$aso:function(){return[W.w]},
$isc:1,
$asc:function(){return[W.w]},
$asaj:function(){return[W.w]},
"%":"MozNamedAttrMap|NamedNodeMap"},
jn:{"^":"dT;cc:a<",
T:function(a,b){var z,y,x,w,v,u
H.h(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=this.gaf(),y=z.length,x=this.a,w=J.Z(x),v=0;v<z.length;z.length===y||(0,H.v)(z),++v){u=z[v]
b.$2(u,w.aC(x,u))}},
gaf:function(){var z,y,x,w,v
z=this.a.attributes
y=H.b([],[P.j])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.i(z,w)
v=H.f(z[w],"$iseT")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asbT:function(){return[P.j,P.j]},
$asa7:function(){return[P.j,P.j]}},
jq:{"^":"jn;a",
w:function(a,b){return J.cj(this.a,H.z(b))},
gl:function(a){return this.gaf().length}},
jr:{"^":"iu;a,b,c,$ti"},
lo:{"^":"jr;a,b,c,$ti"},
js:{"^":"cI;a,b,c,d,e,$ti",m:{
P:function(a,b,c,d,e){var z,y
z=W.ff(new W.jt(c),W.W)
y=z!=null
if(y&&!0){H.h(z,{func:1,args:[W.W]})
if(y)J.fv(a,b,z,!1)}return new W.js(0,a,b,z,!1,[e])}}},
jt:{"^":"p:29;a",
$1:function(a){return this.a.$1(H.f(a,"$isW"))}},
bD:{"^":"a;a",
dF:function(a){var z,y
z=$.$get$cW()
if(z.a===0){for(y=0;y<262;++y)z.N(0,C.V[y],W.kv())
for(y=0;y<12;++y)z.N(0,C.t[y],W.kw())}},
at:function(a){return $.$get$eX().O(0,W.b7(a))},
ae:function(a,b,c){var z,y,x
z=W.b7(a)
y=$.$get$cW()
x=y.w(0,H.d(z)+"::"+b)
if(x==null)x=y.w(0,"*::"+b)
if(x==null)return!1
return H.d1(x.$4(a,b,c,this))},
$isam:1,
m:{
eW:function(a){var z,y
z=W.df(null)
y=window.location
z=new W.bD(new W.jS(z,y))
z.dF(a)
return z},
lp:[function(a,b,c,d){H.f(a,"$isJ")
H.z(b)
H.z(c)
H.f(d,"$isbD")
return!0},"$4","kv",16,0,21],
lq:[function(a,b,c,d){var z,y,x
H.f(a,"$isJ")
H.z(b)
H.z(c)
z=H.f(d,"$isbD").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kw",16,0,21]}},
aj:{"^":"a;$ti",
gL:function(a){return new W.dF(a,this.gl(a),-1,[H.cc(this,a,"aj",0)])}},
e_:{"^":"a;a",
at:function(a){return C.a.cv(this.a,new W.hL(a))},
ae:function(a,b,c){return C.a.cv(this.a,new W.hK(a,b,c))},
$isam:1},
hL:{"^":"p:23;a",
$1:function(a){return H.f(a,"$isam").at(this.a)}},
hK:{"^":"p:23;a,b,c",
$1:function(a){return H.f(a,"$isam").ae(this.a,this.b,this.c)}},
jT:{"^":"a;",
dH:function(a,b,c,d){var z,y,x
this.a.a8(0,c)
z=b.bO(0,new W.jU())
y=b.bO(0,new W.jV())
this.b.a8(0,z)
x=this.c
x.a8(0,C.X)
x.a8(0,y)},
at:function(a){return this.a.O(0,W.b7(a))},
ae:["dt",function(a,b,c){var z,y
z=W.b7(a)
y=this.c
if(y.O(0,H.d(z)+"::"+b))return this.d.fa(c)
else if(y.O(0,"*::"+b))return this.d.fa(c)
else{y=this.b
if(y.O(0,H.d(z)+"::"+b))return!0
else if(y.O(0,"*::"+b))return!0
else if(y.O(0,H.d(z)+"::*"))return!0
else if(y.O(0,"*::*"))return!0}return!1}],
$isam:1},
jU:{"^":"p:18;",
$1:function(a){return!C.a.O(C.t,H.z(a))}},
jV:{"^":"p:18;",
$1:function(a){return C.a.O(C.t,H.z(a))}},
jX:{"^":"jT;e,a,b,c,d",
ae:function(a,b,c){if(this.dt(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cj(a,"template")==="")return this.e.O(0,b)
return!1},
m:{
f4:function(){var z,y,x,w,v
z=P.j
y=P.dR(C.r,z)
x=H.q(C.r,0)
w=H.h(new W.jY(),{func:1,ret:z,args:[x]})
v=H.b(["TEMPLATE"],[z])
y=new W.jX(y,P.bx(null,null,null,z),P.bx(null,null,null,z),P.bx(null,null,null,z),null)
y.dH(null,new H.hD(C.r,w,[x,z]),v,null)
return y}}},
jY:{"^":"p:28;",
$1:function(a){return"TEMPLATE::"+H.d(H.z(a))}},
jW:{"^":"a;",
at:function(a){var z=J.G(a)
if(!!z.$isee)return!1
z=!!z.$iscK
if(z&&W.b7(a)==="foreignObject")return!1
if(z)return!0
return!1},
ae:function(a,b,c){if(b==="is"||C.c.b7(b,"on"))return!1
return this.at(a)},
$isam:1},
dF:{"^":"a;a,b,c,0d,$ti",
sce:function(a){this.d=H.u(a,H.q(this,0))},
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sce(J.fu(this.a,z))
this.c=z
return!0}this.sce(null)
this.c=y
return!1},
gF:function(){return this.d},
$isaD:1},
am:{"^":"a;"},
jS:{"^":"a;a,b",$islh:1},
f9:{"^":"a;a",
bR:function(a){new W.k5(this).$2(a,null)},
aH:function(a,b){if(b==null)J.de(a)
else J.bF(b,a)},
eQ:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fw(a)
x=J.cj(y.gcc(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a5(t)}v="element unprintable"
try{v=J.a1(a)}catch(t){H.a5(t)}try{u=W.b7(a)
this.eP(H.f(a,"$isJ"),b,z,v,u,H.f(y,"$isa7"),H.z(x))}catch(t){if(H.a5(t) instanceof P.ao)throw t
else{this.aH(a,b)
window
s="Removing corrupted element "+H.d(v)
if(typeof console!="undefined")window.console.warn(s)}}},
eP:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.aH(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.at(a)){this.aH(a,b)
window
z="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.ae(a,"is",g)){this.aH(a,b)
window
z="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaf()
y=H.b(z.slice(0),[H.q(z,0)])
for(x=f.gaf().length-1,z=f.a,w=J.Z(z);x>=0;--x){if(x>=y.length)return H.i(y,x)
v=y[x]
if(!this.a.ae(a,J.fA(v),w.aC(z,v))){window
u="Removing disallowed attribute <"+H.d(e)+" "+v+'="'+H.d(w.aC(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.aC(z,v)
w.eI(z,v)}}if(!!J.G(a).$isen)this.bR(a.content)},
$isl8:1},
k5:{"^":"p:27;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.eQ(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aH(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fx(z)}catch(w){H.a5(w)
v=H.f(z,"$isw")
if(x){u=v.parentNode
if(u!=null)J.bF(u,v)}else J.bF(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$isw")}}},
jp:{"^":"A+fN;"},
jF:{"^":"A+L;"},
jG:{"^":"jF+aj;"},
jL:{"^":"A+L;"},
jM:{"^":"jL+aj;"},
k2:{"^":"A+L;"},
k3:{"^":"k2+aj;"},
k7:{"^":"A+L;"},
k8:{"^":"k7+aj;"}}],["","",,P,{"^":"",
kp:function(a){var z,y
z=J.G(a)
if(!!z.$isbN){y=z.gcE(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.f6(a.data,a.height,a.width)},
ko:function(a){if(a instanceof P.f6)return{data:a.a,height:a.b,width:a.c}
return a},
km:function(a,b){var z={}
a.T(0,new P.kn(z))
return z},
dA:function(){var z=$.dz
if(z==null){z=J.ch(window.navigator.userAgent,"Opera",0)
$.dz=z}return z},
fS:function(){var z,y
z=$.dw
if(z!=null)return z
y=$.dx
if(y==null){y=J.ch(window.navigator.userAgent,"Firefox",0)
$.dx=y}if(y)z="-moz-"
else{y=$.dy
if(y==null){y=!P.dA()&&J.ch(window.navigator.userAgent,"Trident/",0)
$.dy=y}if(y)z="-ms-"
else z=P.dA()?"-o-":"-webkit-"}$.dw=z
return z},
f6:{"^":"a;cE:a>,b,c",$isbN:1},
kn:{"^":"p:13;a",
$2:function(a,b){this.a[a]=b}},
h5:{"^":"bR;a,b",
gbh:function(){var z,y,x
z=this.b
y=H.T(z,"L",0)
x=W.J
return new H.hB(new H.cU(z,H.h(new P.h6(),{func:1,ret:P.C,args:[y]}),[y]),H.h(new P.h7(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){J.dd(this.b.a,b)},
gl:function(a){return J.aL(this.gbh().a)},
w:function(a,b){var z=this.gbh()
return z.b.$1(J.ci(z.a,b))},
gL:function(a){var z=P.hx(this.gbh(),!1,W.J)
return new J.ap(z,z.length,0,[H.q(z,0)])},
$asL:function(){return[W.J]},
$aso:function(){return[W.J]},
$asc:function(){return[W.J]}},
h6:{"^":"p:15;",
$1:function(a){return!!J.G(H.f(a,"$isw")).$isJ}},
h7:{"^":"p:24;",
$1:function(a){return H.U(H.f(a,"$isw"),"$isJ")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
c3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jH:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jN:{"^":"a;$ti",
gbM:function(a){var z=this.a
if(typeof z!=="number")return z.C()
return H.u(z+this.c,H.q(this,0))},
gbx:function(a){var z=this.b
if(typeof z!=="number")return z.C()
return H.u(z+this.d,H.q(this,0))},
i:function(a){return"Rectangle ("+H.d(this.a)+", "+H.d(this.b)+") "+this.c+" x "+this.d},
n:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bp(b,"$isas",[P.a4],"$asas"))return!1
z=this.a
y=J.Z(b)
x=y.gax(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaQ(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.C()
w=H.q(this,0)
if(H.u(z+this.c,w)===y.gbM(b)){if(typeof x!=="number")return x.C()
z=H.u(x+this.d,w)===y.gbx(b)}else z=!1}else z=!1}else z=!1
return z},
gP:function(a){var z,y,x,w,v
z=this.a
y=J.aK(z)
x=this.b
w=J.aK(x)
if(typeof z!=="number")return z.C()
v=H.q(this,0)
z=H.u(z+this.c,v)
if(typeof x!=="number")return x.C()
v=H.u(x+this.d,v)
return P.jH(P.c3(P.c3(P.c3(P.c3(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
as:{"^":"jN;ax:a>,aQ:b>,aS:c>,aL:d>,$ti"}}],["","",,P,{"^":"",ee:{"^":"cK;",$isee:1,"%":"SVGScriptElement"},cK:{"^":"J;",
gcB:function(a){return new P.h5(a,new W.aa(a))},
a2:function(a,b,c,d){var z,y,x,w,v,u
z=H.b([],[W.am])
C.a.h(z,W.eW(null))
C.a.h(z,W.f4())
C.a.h(z,new W.jW())
c=new W.f9(new W.e_(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.l).fq(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.aa(w)
u=z.gaj(z)
for(z=J.Z(v);x=u.firstChild,x!=null;)z.u(v,x)
return v},
$iscK:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",fE:{"^":"A;",$isfE:1,"%":"WebGLBuffer"},h9:{"^":"A;",$ish9:1,"%":"WebGLFramebuffer"},i2:{"^":"A;",$isi2:1,"%":"WebGLProgram"},cE:{"^":"A;",
cs:function(a,b){return a.activeTexture(b)},
cw:function(a,b,c){return a.attachShader(b,c)},
a9:function(a,b,c){return a.bindBuffer(b,c)},
fe:function(a,b,c){return a.bindFramebuffer(b,c)},
au:function(a,b,c){return a.bindTexture(b,c)},
cA:function(a,b,c,d){return a.bufferData(b,c,d)},
fh:function(a,b){return a.clear(b)},
fi:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
fj:function(a,b){return a.clearDepth(b)},
fk:function(a,b){return a.compileShader(b)},
ft:function(a,b){return a.createShader(b)},
fv:function(a,b){return a.deleteProgram(b)},
fw:function(a,b){return a.deleteShader(b)},
fB:function(a,b){return a.depthFunc(b)},
cF:function(a,b){return a.disableVertexAttribArray(b)},
fD:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cH:function(a,b){return a.enable(b)},
cI:function(a,b){return a.enableVertexAttribArray(b)},
d2:function(a,b,c){return a.getActiveAttrib(b,c)},
d3:function(a,b,c){return a.getActiveUniform(b,c)},
d4:function(a,b,c){return a.getAttribLocation(b,c)},
bQ:function(a,b){return a.getParameter(b)},
d8:function(a,b){return a.getProgramInfoLog(b)},
b4:function(a,b,c){return a.getProgramParameter(b,c)},
da:function(a,b){return a.getShaderInfoLog(b)},
dc:function(a,b,c){return a.getShaderParameter(b,c)},
dd:function(a,b,c){return a.getUniformLocation(b,c)},
fR:function(a,b){return a.linkProgram(b)},
h7:function(a,b,c){return a.pixelStorei(b,c)},
dk:function(a,b,c){return a.shaderSource(b,c)},
hk:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.G(g)
if(!!z.$isbN)y=!0
else y=!1
if(y){this.f_(a,b,c,d,e,f,P.ko(g))
return}if(!!z.$isdI)z=!0
else z=!1
if(z){this.f0(a,b,c,d,e,f,g)
return}throw H.e(P.fC("Incorrect number or type of arguments"))},
hj:function(a,b,c,d,e,f,g){return this.hk(a,b,c,d,e,f,g,null,null,null)},
f_:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
f0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b2:function(a,b,c,d){return a.texParameteri(b,c,d)},
aR:function(a,b,c){return a.uniform1i(b,c)},
hs:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ht:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
d_:function(a,b){return a.useProgram(b)},
hu:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
hv:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscE:1,
"%":"WebGLRenderingContext"},ij:{"^":"A;",$isij:1,"%":"WebGLShader"},iC:{"^":"A;",$isiC:1,"%":"WebGLTexture"},iW:{"^":"A;",$isiW:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",V:{"^":"a;0a,0b,0c,0d,$ti",
sed:function(a){this.a=H.k(a,"$isc",[H.T(this,"V",0)],"$asc")},
sci:function(a){this.b=H.h(a,{func:1,ret:P.C,args:[[P.o,H.T(this,"V",0)]]})},
scg:function(a){this.c=H.h(a,{func:1,ret:-1,args:[P.x,[P.o,H.T(this,"V",0)]]})},
scj:function(a){this.d=H.h(a,{func:1,ret:-1,args:[P.x,[P.o,H.T(this,"V",0)]]})},
bV:function(a){this.sed(H.b([],[a]))
this.sci(null)
this.scg(null)
this.scj(null)},
dh:function(a,b,c){var z={func:1,ret:-1,args:[P.x,[P.o,H.T(this,"V",0)]]}
H.h(a,z)
H.h(c,z)
this.sci(b)
this.scg(a)
this.scj(c)},
b5:function(a,b){return this.dh(a,null,b)},
eB:function(a){H.k(a,"$iso",[H.T(this,"V",0)],"$aso")
return!0},
dB:function(a,b){var z
H.k(b,"$iso",[H.T(this,"V",0)],"$aso")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gL:function(a){var z=this.a
return new J.ap(z,z.length,0,[H.q(z,0)])},
V:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.T(this,"V",0)
H.u(b,z)
z=[z]
if(this.eB(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dB(x,H.b([b],z))}},
$iso:1,
m:{
ds:function(a){var z=new O.V([a])
z.bV(a)
return z}}},cA:{"^":"a;0a,0b",
sbj:function(a){this.a=H.k(a,"$isc",[V.by],"$asc")},
gl:function(a){return this.a.length},
gp:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
dC:function(a){var z=this.b
if(!(z==null))z.B(a)},
ak:function(){return this.dC(null)},
gag:function(){var z=this.a
if(z.length>0)return C.a.gb0(z)
else return V.bz()},
cR:function(a){var z=this.a
if(a==null)C.a.h(z,V.bz())
else C.a.h(z,a)
this.ak()},
bL:function(){var z=this.a
if(z.length>0){z.pop()
this.ak()}}}}],["","",,E,{"^":"",cl:{"^":"a;"},ai:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a0:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sdT:function(a,b){this.y=H.k(b,"$isV",[E.ai],"$asV")},
sa0:function(a){this.z=H.f(a,"$isbs")},
sbS:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gp().R(0,this.gcO())
y=this.c
if(y!=null)y.gp().h(0,this.gcO())
x=new D.H("shape",z,this.c,this,[F.eg])
x.b=!0
this.a3(x)}},
saM:function(a){var z,y
if(!J.M(this.r,a)){z=this.r
if(z!=null)z.gp().R(0,this.gcN())
if(a!=null)a.gp().h(0,this.gcN())
this.r=a
y=new D.H("mover",z,a,this,[U.a0])
y.b=!0
this.a3(y)}},
aA:function(a){var z,y,x,w
z=this.r
y=z!=null?z.aB(a,this):null
if(!J.M(y,this.x)){x=this.x
this.x=y
w=new D.H("matrix",x,y,this,[V.by])
w.b=!0
this.a3(w)}for(z=this.y.a,z=new J.ap(z,z.length,0,[H.q(z,0)]);z.v();)z.d.aA(a)},
az:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gag())
else C.a.h(z.a,y.t(0,z.gag()))
z.ak()
a.cS(this.f)
z=a.dy
x=(z&&C.a).gb0(z)
if(x!=null&&this.d!=null)x.hb(a,this)
for(z=this.y.a,z=new J.ap(z,z.length,0,[H.q(z,0)]);z.v();)z.d.az(a)
a.cQ()
a.dx.bL()},
gp:function(){var z=this.z
if(z==null){z=D.D()
this.z=z}return z},
a3:function(a){var z=this.z
if(!(z==null))z.B(a)},
W:function(){return this.a3(null)},
fZ:[function(a){H.f(a,"$isr")
this.e=null
this.a3(a)},function(){return this.fZ(null)},"i1","$1","$0","gcO",0,2,1],
fY:[function(a){this.a3(H.f(a,"$isr"))},function(){return this.fY(null)},"i0","$1","$0","gcN",0,2,1],
fW:[function(a){this.a3(H.f(a,"$isr"))},function(){return this.fW(null)},"hZ","$1","$0","gcM",0,2,1],
hY:[function(a,b){var z,y,x,w,v,u,t
H.k(b,"$iso",[E.ai],"$aso")
for(z=b.length,y=this.gcM(),x={func:1,ret:-1,args:[D.r]},w=[x],v=0;v<b.length;b.length===z||(0,H.v)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.bs()
t.sac(null)
t.saW(null)
t.c=null
t.d=0
u.sa0(t)}t=u.ga0()
t.toString
H.h(y,x)
if(t.a==null)t.sac(H.b([],w))
t=t.a;(t&&C.a).h(t,y)}}this.W()},"$2","gfV",8,0,5],
i_:[function(a,b){var z,y
H.k(b,"$iso",[E.ai],"$aso")
for(z=b.gL(b),y=this.gcM();z.v();)z.gF().gp().R(0,y)
this.W()},"$2","gfX",8,0,5],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isdZ:1},i8:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
seZ:function(a){this.dy=H.k(a,"$isc",[O.bY],"$asc")},
seV:function(a){this.fr=H.k(a,"$isa7",[P.j,A.cF],"$asa7")},
dv:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.ac(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cA()
y=[V.by]
z.sbj(H.b([],y))
z.b=null
z.gp().h(0,new E.ia(this))
this.cy=z
z=new O.cA()
z.sbj(H.b([],y))
z.b=null
z.gp().h(0,new E.ib(this))
this.db=z
z=new O.cA()
z.sbj(H.b([],y))
z.b=null
z.gp().h(0,new E.ic(this))
this.dx=z
this.seZ(H.b([],[O.bY]))
z=this.dy;(z&&C.a).h(z,null)
this.seV(new H.aO(0,0,[P.j,A.cF]))},
cS:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gb0(z):a;(z&&C.a).h(z,y)},
cQ:function(){var z=this.dy
if(z.length>1)z.pop()},
m:{
i9:function(a,b){var z=new E.i8(a,b)
z.dv(a,b)
return z}}},ia:{"^":"p:7;a",
$1:function(a){var z
H.f(a,"$isr")
z=this.a
z.z=null
z.ch=null}},ib:{"^":"p:7;a",
$1:function(a){var z
H.f(a,"$isr")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},ic:{"^":"p:7;a",
$1:function(a){var z
H.f(a,"$isr")
z=this.a
z.ch=null
z.cx=null}},iF:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a0:x<,0y,0z,0Q,0ch,0cx,0cy",
sa0:function(a){this.x=H.f(a,"$isbs")},
dE:[function(a){H.f(a,"$isr")
this.hd()},function(){return this.dE(null)},"dD","$1","$0","gbW",0,2,1],
gfL:function(){var z,y,x
z=Date.now()
y=C.h.as(P.dB(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ac(z,!1)
return x/y},
cl:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.t()
if(typeof z!=="number")return H.y(z)
x=C.e.bE(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.t()
w=C.e.bE(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.eq(C.q,this.ghc())}},
hd:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.h(new E.iH(this),{func:1,ret:-1,args:[P.a4]})
C.F.dZ(z)
C.F.eM(z,W.ff(y,P.a4))}},"$0","ghc",0,0,3],
ha:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.cl()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ac(w,!1)
x.y=P.dB(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.ak()
w=x.db
C.a.sl(w.a,0)
w.ak()
w=x.dx
C.a.sl(w.a,0)
w.ak()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.az(this.e)}x=this.z
if(!(x==null))x.B(null)}catch(v){z=H.a5(v)
y=H.b_(v)
P.db("Error: "+H.d(z))
P.db("Stack: "+H.d(y))
throw H.e(z)}},
m:{
iG:function(a,b,c,d,e){var z,y,x,w
z=J.G(a)
if(!!z.$isco)return E.ep(a,!0,!0,!0,!1)
y=W.cp(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcB(a).h(0,y)
w=E.ep(y,!0,!0,!0,!1)
w.a=a
return w},
ep:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iF()
y=P.hv(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.m.b3(a,"webgl",y)
x=H.f(x==null?C.m.b3(a,"experimental-webgl",y):x,"$iscE")
if(x==null)H.Q(P.N("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.i9(x,a)
w=new T.iD(x)
w.b=H.a_((x&&C.b).bQ(x,3379))
w.c=H.a_(C.b.bQ(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.j1(a)
v=new X.hr()
v.c=new X.al(!1,!1,!1)
v.seG(P.bx(null,null,null,P.x))
w.b=v
v=new X.hG(w)
v.f=0
v.r=V.aE()
v.x=V.aE()
v.Q=1
v.ch=1
w.c=v
v=new X.hz(w)
v.r=0
v.x=V.aE()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iK(w)
v.e=0
v.f=V.aE()
v.r=V.aE()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.se_(H.b([],[[P.cI,P.a]]))
v=w.z
u=document
t=W.ae
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.P(u,"contextmenu",H.h(w.geo(),s),!1,t))
v=w.z
r=W.W
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.P(a,"focus",H.h(w.ger(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.P(a,"blur",H.h(w.gel(),q),!1,r))
v=w.z
p=W.b9
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.P(u,"keyup",H.h(w.geu(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.P(u,"keydown",H.h(w.ges(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.P(a,"mousedown",H.h(w.gew(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.P(a,"mouseup",H.h(w.gey(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.P(a,"mousemove",H.h(w.gex(),s),!1,t))
p=w.z
o=W.bi;(p&&C.a).h(p,W.P(a,H.z(W.h_(a)),H.h(w.gez(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.P(u,"mousemove",H.h(w.gep(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.P(u,"mouseup",H.h(w.geq(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.P(u,"pointerlockchange",H.h(w.geA(),q),!1,r))
r=w.z
q=W.aS
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.P(a,"touchstart",H.h(w.geF(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.P(a,"touchend",H.h(w.geD(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.P(a,"touchmove",H.h(w.geE(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ac(Date.now(),!1)
z.cy=0
z.cl()
return z}}},iH:{"^":"p:38;a",
$1:function(a){var z
H.kK(a)
z=this.a
if(z.ch){z.ch=!1
z.ha()}}}}],["","",,Z,{"^":"",eR:{"^":"a;a,b",$iskV:1,m:{
cT:function(a,b,c){var z
H.k(c,"$isc",[P.x],"$asc")
z=a.createBuffer()
C.b.a9(a,b,z)
C.b.cA(a,b,new Int16Array(H.c6(c)),35044)
C.b.a9(a,b,null)
return new Z.eR(b,z)}}},dk:{"^":"cl;a,b,c,d,e",
bv:function(a){var z,y,x
try{y=a.a
C.b.cI(y,this.e)
C.b.hu(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.a5(x)
y=P.N('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.d(z))
throw H.e(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.d(this.e)+"]"}},jf:{"^":"a;a",$iskW:1},dl:{"^":"a;a,0b,c,d",
se9:function(a){this.b=H.k(a,"$isc",[Z.bv],"$asc")},
aK:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bv:function(a){var z,y
z=this.a
C.b.a9(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bv(a)},
hr:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.cF(x,z[y].e)
C.b.a9(x,this.a.a,null)},
az:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.i(w,x)
v=w[x]
w=v.c
u=w.a
C.b.a9(y,u,w.b)
C.b.fD(y,v.a,v.b,5123,0)
C.b.a9(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.j]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.v)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a1(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(y,", ")+"\nAttrs:   "+C.a.k(u,", ")},
$isld:1},bv:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aQ(this.c)+"'")+"]"}},bf:{"^":"a;a",
gbT:function(a){var z,y
z=this.a
y=(z&$.$get$aw().a)!==0?3:0
if((z&$.$get$av().a)!==0)y+=3
if((z&$.$get$au().a)!==0)y+=3
if((z&$.$get$ax().a)!==0)y+=2
if((z&$.$get$ay().a)!==0)y+=3
if((z&$.$get$bg().a)!==0)y+=3
if((z&$.$get$bh().a)!==0)y+=4
if((z&$.$get$aU().a)!==0)++y
return(z&$.$get$aT().a)!==0?y+4:y},
fb:function(a){var z,y,x
z=$.$get$aw()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$av()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$au()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ax()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ay()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bg()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bh()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eQ()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bf))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.j])
y=this.a
if((y&$.$get$aw().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$av().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$au().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$ax().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$ay().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bg().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bh().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aU().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.k(z,"|")},
m:{
a9:function(a){return new Z.bf(a)}}}}],["","",,D,{"^":"",dq:{"^":"a;"},bs:{"^":"a;0a,0b,0c,0d",
sac:function(a){this.a=H.k(a,"$isc",[{func:1,ret:-1,args:[D.r]}],"$asc")},
saW:function(a){this.b=H.k(a,"$isc",[{func:1,ret:-1,args:[D.r]}],"$asc")},
h:function(a,b){var z={func:1,ret:-1,args:[D.r]}
H.h(b,z)
if(this.a==null)this.sac(H.b([],[z]))
z=this.a;(z&&C.a).h(z,b)},
R:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[D.r]})
z=this.a
z=z==null?null:C.a.O(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).R(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.O(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).R(z,b)||y}return y},
B:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.r(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.T(y,new D.h3(z))
y=this.b
if(!(y==null))C.a.T(y,new D.h4(z))
z=this.b
if(!(z==null))C.a.sl(z,0)
return!0},
fF:function(){return this.B(null)},
he:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.B(y)}}},
ai:function(){return this.he(!0,!1)},
m:{
D:function(){var z=new D.bs()
z.sac(null)
z.saW(null)
z.c=null
z.d=0
return z}}},h3:{"^":"p:22;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.r]})
z=this.a.a
z.b
a.$1(z)}},h4:{"^":"p:22;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.r]})
z=this.a.a
z.b
a.$1(z)}},r:{"^":"a;a,0b"},dJ:{"^":"r;c,d,a,0b,$ti"},dK:{"^":"r;c,d,a,0b,$ti"},H:{"^":"r;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}}],["","",,X,{"^":"",dm:{"^":"a;a,b",
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dm))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}},dO:{"^":"a;a,b",
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dO))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}},hr:{"^":"a;0a,0b,0c,0d",
seG:function(a){this.d=H.k(a,"$isef",[P.x],"$asef")},
h4:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
h0:function(a){this.c=a.b
this.d.R(0,a.a)
return!1}},dS:{"^":"bU;x,y,c,d,e,a,0b"},hz:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aF:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ac(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.t()
v=b.b
u=this.ch
if(typeof v!=="number")return v.t()
t=new V.a2(y.a+x*w,y.b+v*u)
u=this.a.gaw()
s=new X.bb(a,V.aE(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
bK:function(a,b){this.r=a.a
return!1},
aO:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.df()
if(typeof z!=="number")return z.d0()
this.r=(z&~y)>>>0
return!1},
aN:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.aF(a,b))
return!0},
h5:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaw()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.t()
t=a.b
s=this.cy
if(typeof t!=="number")return t.t()
w=new X.cB(new V.K(v*u,t*s),y,x,new P.ac(w,!1),this)
w.b=!0
z.B(w)
return!0},
ev:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ac(Date.now(),!1)
y=this.f
x=new X.dS(c,a,this.a.gaw(),b,z,this)
x.b=!0
y.B(x)
this.y=z
this.x=V.aE()}},al:{"^":"a;a,b,c",
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.al))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bb:{"^":"bU;x,y,z,Q,ch,c,d,e,a,0b"},hG:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bf:function(a,b,c){var z,y,x
z=new P.ac(Date.now(),!1)
y=this.a.gaw()
x=new X.bb(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
bK:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.B(this.bf(a,b,!0))
return!0},
aO:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.df()
if(typeof z!=="number")return z.d0()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.bf(a,b,!0))
return!0},
aN:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.bf(a,b,!1))
return!0},
h6:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaw()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.t()
u=a.b
t=this.ch
if(typeof u!=="number")return u.t()
x=new X.cB(new V.K(w*v,u*t),y,b,new P.ac(x,!1),this)
x.b=!0
z.B(x)
return!0},
gcG:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
gcZ:function(){var z=this.c
if(z==null){z=D.D()
this.c=z}return z},
gcL:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z}},cB:{"^":"bU;x,c,d,e,a,0b"},bU:{"^":"r;"},et:{"^":"bU;x,y,z,Q,ch,c,d,e,a,0b"},iK:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aF:function(a,b){var z,y,x,w
H.k(a,"$isc",[V.a2],"$asc")
z=new P.ac(Date.now(),!1)
y=a.length>0?a[0]:V.aE()
x=this.a.gaw()
w=new X.et(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
h3:function(a){var z
H.k(a,"$isc",[V.a2],"$asc")
z=this.b
if(z==null)return!1
z.B(this.aF(a,!0))
return!0},
h1:function(a){var z
H.k(a,"$isc",[V.a2],"$asc")
z=this.c
if(z==null)return!1
z.B(this.aF(a,!0))
return!0},
h2:function(a){var z
H.k(a,"$isc",[V.a2],"$asc")
z=this.d
if(z==null)return!1
z.B(this.aF(a,!1))
return!0}},j1:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
se_:function(a){this.z=H.k(a,"$isc",[[P.cI,P.a]],"$asc")},
gaw:function(){var z=this.a
return V.ec(0,0,C.m.gcC(z).c,C.m.gcC(z).d)},
c9:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dO(z,new X.al(y,a.altKey,a.shiftKey))},
ar:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.al(y,a.altKey,a.shiftKey)},
bu:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.al(y,a.altKey,a.shiftKey)},
ad:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=z.top
if(typeof x!=="number")return x.G()
return new V.a2(y-w,x-v)},
aG:function(a){return new V.K(a.movementX,a.movementY)},
br:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.a2])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.v)(x),++v){u=x[v]
t=C.e.a4(u.pageX)
C.e.a4(u.pageY)
s=z.left
C.e.a4(u.pageX)
C.a.h(y,new V.a2(t-s,C.e.a4(u.pageY)-z.top))}return y},
ab:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dm(z,new X.al(y,a.altKey,a.shiftKey))},
bk:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.G()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
hI:[function(a){this.f=!0},"$1","ger",4,0,10],
hC:[function(a){this.f=!1},"$1","gel",4,0,10],
hF:[function(a){H.f(a,"$isae")
if(this.f&&this.bk(a))a.preventDefault()},"$1","geo",4,0,4],
hK:[function(a){var z
H.f(a,"$isb9")
if(!this.f)return
z=this.c9(a)
this.b.h4(z)},"$1","geu",4,0,11],
hJ:[function(a){var z
H.f(a,"$isb9")
if(!this.f)return
z=this.c9(a)
this.b.h0(z)},"$1","ges",4,0,11],
hL:[function(a){var z,y,x,w
H.f(a,"$isae")
z=this.a
z.focus()
this.f=!0
this.ar(a)
if(this.x){y=this.ab(a)
x=this.aG(a)
if(this.d.bK(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ab(a)
w=this.ad(a)
if(this.c.bK(y,w))a.preventDefault()},"$1","gew",4,0,4],
hN:[function(a){var z,y,x
H.f(a,"$isae")
this.ar(a)
z=this.ab(a)
if(this.x){y=this.aG(a)
if(this.d.aO(z,y))a.preventDefault()
return}if(this.r)return
x=this.ad(a)
if(this.c.aO(z,x))a.preventDefault()},"$1","gey",4,0,4],
hH:[function(a){var z,y,x
H.f(a,"$isae")
if(!this.bk(a)){this.ar(a)
z=this.ab(a)
if(this.x){y=this.aG(a)
if(this.d.aO(z,y))a.preventDefault()
return}if(this.r)return
x=this.ad(a)
if(this.c.aO(z,x))a.preventDefault()}},"$1","geq",4,0,4],
hM:[function(a){var z,y,x
H.f(a,"$isae")
this.ar(a)
z=this.ab(a)
if(this.x){y=this.aG(a)
if(this.d.aN(z,y))a.preventDefault()
return}if(this.r)return
x=this.ad(a)
if(this.c.aN(z,x))a.preventDefault()},"$1","gex",4,0,4],
hG:[function(a){var z,y,x
H.f(a,"$isae")
if(!this.bk(a)){this.ar(a)
z=this.ab(a)
if(this.x){y=this.aG(a)
if(this.d.aN(z,y))a.preventDefault()
return}if(this.r)return
x=this.ad(a)
if(this.c.aN(z,x))a.preventDefault()}},"$1","gep",4,0,4],
hO:[function(a){var z,y
H.f(a,"$isbi")
this.ar(a)
z=new V.K((a&&C.E).gfz(a),C.E.gfA(a)).A(0,180)
if(this.x){if(this.d.h5(z))a.preventDefault()
return}if(this.r)return
y=this.ad(a)
if(this.c.h6(z,y))a.preventDefault()},"$1","gez",4,0,26],
hP:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.ab(this.y)
x=this.ad(this.y)
this.d.ev(y,x,z)}},"$1","geA",4,0,10],
hT:[function(a){var z
H.f(a,"$isaS")
this.a.focus()
this.f=!0
this.bu(a)
z=this.br(a)
if(this.e.h3(z))a.preventDefault()},"$1","geF",4,0,9],
hR:[function(a){var z
H.f(a,"$isaS")
this.bu(a)
z=this.br(a)
if(this.e.h1(z))a.preventDefault()},"$1","geD",4,0,9],
hS:[function(a){var z
H.f(a,"$isaS")
this.bu(a)
z=this.br(a)
if(this.e.h2(z))a.preventDefault()},"$1","geE",4,0,9]}}],["","",,V,{"^":"",
kY:[function(a,b){if(typeof b!=="number")return b.G()
if(typeof a!=="number")return H.y(a)
return Math.abs(b-a)<=1e-9},"$2","hE",8,0,25],
kT:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.de(a-b,z)
return(a<0?a+z:a)+b},
I:function(a,b,c){if(a==null)return C.c.a_("null",c)
return C.c.a_(C.e.cX($.l.$2(a,0)?0:a,b),c+b+1)},
aZ:function(a,b,c){var z,y,x,w,v,u
H.k(a,"$isc",[P.t],"$asc")
z=H.b([],[P.j])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.v)(a),++w){v=V.I(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.N(z,u,C.c.a_(z[u],x))}return z},
da:function(a,b){return C.e.hn(Math.pow(b,C.N.bE(Math.log(H.kl(a))/Math.log(b))))},
b5:{"^":"a;a,b,c,d",
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b5))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
dW:{"^":"a;a,b,c,d,e,f,r,x,y",
aP:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dW))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
z=b.e
if(!$.l.$2(z,this.e))return!1
z=b.f
if(!$.l.$2(z,this.f))return!1
z=b.r
if(!$.l.$2(z,this.r))return!1
z=b.x
if(!$.l.$2(z,this.x))return!1
z=b.y
if(!$.l.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.t]
y=V.aZ(H.b([this.a,this.d,this.r],z),3,0)
x=V.aZ(H.b([this.b,this.e,this.x],z),3,0)
w=V.aZ(H.b([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.i(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.i(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.i(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.i(y,1)
s=" "+y[1]+", "
if(1>=u)return H.i(x,1)
s=s+x[1]+", "
if(1>=t)return H.i(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.i(y,2)
z=" "+y[2]+", "
if(2>=u)return H.i(x,2)
z=z+x[2]+", "
if(2>=t)return H.i(w,2)
return s+(z+w[2]+"]")}},
by:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
aP:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
t:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
return V.ar(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.by))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
z=b.e
if(!$.l.$2(z,this.e))return!1
z=b.f
if(!$.l.$2(z,this.f))return!1
z=b.r
if(!$.l.$2(z,this.r))return!1
z=b.x
if(!$.l.$2(z,this.x))return!1
z=b.y
if(!$.l.$2(z,this.y))return!1
z=b.z
if(!$.l.$2(z,this.z))return!1
z=b.Q
if(!$.l.$2(z,this.Q))return!1
z=b.ch
if(!$.l.$2(z,this.ch))return!1
z=b.cx
if(!$.l.$2(z,this.cx))return!1
z=b.cy
if(!$.l.$2(z,this.cy))return!1
z=b.db
if(!$.l.$2(z,this.db))return!1
z=b.dx
if(!$.l.$2(z,this.dx))return!1
return!0},
i:function(a){return this.H()},
cJ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.aZ(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.aZ(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.aZ(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.aZ(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
H:function(){return this.cJ("",3,0)},
q:function(a){return this.cJ(a,3,0)},
m:{
bz:function(){var z=$.dY
if(z==null){z=V.ar(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.dY=z}return z},
ar:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.by(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)}}},
a2:{"^":"a;a,b",
G:function(a,b){return new V.a2(this.a-b.a,this.b-b.b)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"},
m:{
aE:function(){var z=$.e5
if(z==null){z=new V.a2(0,0)
$.e5=z}return z}}},
bB:{"^":"a;a,b,c",
G:function(a,b){return new V.bB(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bB))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
e7:{"^":"a;a,b,c,d",
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e7))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
eb:{"^":"a;a,b,c,d",
gY:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eb))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"},
m:{
ec:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eb(a,b,c,d)}}},
K:{"^":"a;a,b",
fQ:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,19],
D:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.t()
if(typeof y!=="number")return H.y(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.t()
if(typeof w!=="number")return H.y(w)
return z*y+x*w},
t:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.t()
y=this.b
if(typeof y!=="number")return y.t()
return new V.K(z*b,y*b)},
A:function(a,b){var z,y
if($.l.$2(b,0)){z=$.eK
if(z==null){z=new V.K(0,0)
$.eK=z}return z}z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.K(z/b,y/b)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
O:{"^":"a;a,b,c",
fQ:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,19],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bG:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.O(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aJ:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.O(z*y-x*w,x*v-u*y,u*w-z*v)},
C:function(a,b){return new V.O(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a){return new V.O(-this.a,-this.b,-this.c)},
A:function(a,b){if($.l.$2(b,0))return V.bC()
return new V.O(this.a/b,this.b/b,this.c/b)},
cK:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"},
m:{
bC:function(){var z=$.eN
if(z==null){z=new V.O(0,0,0)
$.eN=z}return z}}}}],["","",,U,{"^":"",fL:{"^":"dq;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bb:function(a){var z=V.kT(a,this.c,this.b)
return z},
gp:function(){var z=this.y
if(z==null){z=D.D()
this.y=z}return z},
K:function(a){var z=this.y
if(!(z==null))z.B(a)},
sbP:function(a,b){},
sbH:function(a){var z,y
z=this.b
if(!$.l.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bb(z)}z=new D.H("maximumLocation",y,this.b,this,[P.t])
z.b=!0
this.K(z)}},
sbJ:function(a){var z,y
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bb(z)}z=new D.H("minimumLocation",y,this.c,this,[P.t])
z.b=!0
this.K(z)}},
sX:function(a,b){var z,y
b=this.bb(b)
z=this.d
if(!$.l.$2(z,b)){y=this.d
this.d=b
z=new D.H("location",y,b,this,[P.t])
z.b=!0
this.K(z)}},
sbI:function(a){var z,y,x
z=this.e
if(!$.l.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.H("maximumVelocity",y,a,this,[P.t])
z.b=!0
this.K(z)}},
sM:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.l.$2(z,a)){x=this.f
this.f=a
z=new D.H("velocity",x,a,this,[P.t])
z.b=!0
this.K(z)}},
sbD:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.l.$2(z,a)){y=this.x
this.x=a
z=new D.H("dampening",y,a,this,[P.t])
z.b=!0
this.K(z)}},
aA:function(a){var z,y,x,w
z=this.f
if($.l.$2(z,0)){z=this.r
z=!$.l.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sX(0,this.d+y*a)
z=this.x
if(!$.l.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sM(y)}},
m:{
cs:function(){var z=new U.fL()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dt:{"^":"a0;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
aB:function(a,b){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dt))return!1
return J.M(this.a,b.a)},
i:function(a){return"Constant: "+this.a.q("          ")}},dH:{"^":"V;0e,0f,0r,0a,0b,0c,0d",
gp:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
K:[function(a){var z
H.f(a,"$isr")
z=this.e
if(!(z==null))z.B(a)},function(){return this.K(null)},"a1","$1","$0","gaq",0,2,1],
hB:[function(a,b){var z,y,x,w,v,u,t,s
z=U.a0
H.k(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gaq(),w={func:1,ret:-1,args:[D.r]},v=[w],u=0;u<b.length;b.length===y||(0,H.v)(b),++u){t=b[u]
if(t!=null){s=t.gp()
s.toString
H.h(x,w)
if(s.a==null)s.sac(H.b([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.dJ(a,b,this,[z])
z.b=!0
this.K(z)},"$2","gek",8,0,16],
hQ:[function(a,b){var z,y,x
z=U.a0
H.k(b,"$iso",[z],"$aso")
for(y=b.gL(b),x=this.gaq();y.v();)y.gF().gp().R(0,x)
z=new D.dK(a,b,this,[z])
z.b=!0
this.K(z)},"$2","geC",8,0,16],
aB:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.a5()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ap(z,z.length,0,[H.q(z,0)]),x=null;z.v();){y=z.d
if(y!=null){w=y.aB(a,b)
if(w!=null)x=x==null?w:w.t(0,x)}}this.f=x==null?V.bz():x
z=this.e
if(!(z==null))z.ai()}return this.f},
n:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dH))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.M(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$aso:function(){return[U.a0]},
$asV:function(){return[U.a0]},
$isa0:1},a0:{"^":"dq;"},j2:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gp:function(){var z=this.cy
if(z==null){z=D.D()
this.cy=z}return z},
K:[function(a){var z
H.f(a,"$isr")
z=this.cy
if(!(z==null))z.B(a)},function(){return this.K(null)},"a1","$1","$0","gaq",0,2,1],
aI:function(a){if(this.a!=null)return!1
this.a=a
a.c.gcG().h(0,this.gbl())
this.a.c.gcL().h(0,this.gbm())
this.a.c.gcZ().h(0,this.gbn())
return!0},
eg:[function(a){H.f(a,"$isr")
if(!J.M(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbl",4,0,0],
eh:[function(a){var z,y,x,w,v,u,t
a=H.U(H.f(a,"$isr"),"$isbb")
if(!this.y)return
if(this.x){z=a.d.G(0,a.y)
z=new V.K(z.a,z.b)
z=z.D(z)
y=this.r
if(typeof y!=="number")return H.y(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.G(0,a.y)
z=new V.K(y.a,y.b).t(0,2).A(0,z.gY())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.t()
x=this.e
if(typeof x!=="number")return H.y(x)
y.sM(z*10*x)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=new V.K(x.a,x.b).t(0,2).A(0,z.gY())
x=this.b
v=w.a
if(typeof v!=="number")return v.J()
u=this.e
if(typeof u!=="number")return H.y(u)
t=this.z
if(typeof t!=="number")return H.y(t)
x.sX(0,-v*u+t)
this.b.sM(0)
y=y.G(0,a.z)
this.Q=new V.K(y.a,y.b).t(0,2).A(0,z.gY())}this.a1()},"$1","gbm",4,0,0],
ei:[function(a){var z,y,x
H.f(a,"$isr")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.D(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.t()
x=this.e
if(typeof x!=="number")return H.y(x)
z.sM(y*10*x)
this.a1()}},"$1","gbn",4,0,0],
aB:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.a5()
if(z<y){this.ch=y
x=a.y
this.b.aA(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ar(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa0:1},j3:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gp:function(){var z=this.fx
if(z==null){z=D.D()
this.fx=z}return z},
K:[function(a){var z
H.f(a,"$isr")
z=this.fx
if(!(z==null))z.B(a)},function(){return this.K(null)},"a1","$1","$0","gaq",0,2,1],
aI:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gcG().h(0,this.gbl())
this.a.c.gcL().h(0,this.gbm())
this.a.c.gcZ().h(0,this.gbn())
z=this.a.d
y=z.f
if(y==null){y=D.D()
z.f=y
z=y}else z=y
z.h(0,this.gee())
z=this.a.d
y=z.d
if(y==null){y=D.D()
z.d=y
z=y}else z=y
z.h(0,this.gef())
z=this.a.e
y=z.b
if(y==null){y=D.D()
z.b=y
z=y}else z=y
z.h(0,this.gf4())
z=this.a.e
y=z.d
if(y==null){y=D.D()
z.d=y
z=y}else z=y
z.h(0,this.gf3())
z=this.a.e
y=z.c
if(y==null){y=D.D()
z.c=y
z=y}else z=y
z.h(0,this.gf2())
return!0},
a7:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.J()
z=-z}if(this.r){if(typeof y!=="number")return y.J()
y=-y}return new V.K(z,y)},
eg:[function(a){a=H.U(H.f(a,"$isr"),"$isbb")
if(!J.M(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbl",4,0,0],
eh:[function(a){var z,y,x,w,v,u,t
a=H.U(H.f(a,"$isr"),"$isbb")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.K(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.y(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.a7(new V.K(y.a,y.b).t(0,2).A(0,z.gY()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.J()
x=this.y
if(typeof x!=="number")return H.y(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.J()
y=this.x
if(typeof y!=="number")return H.y(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.a7(new V.K(x.a,x.b).t(0,2).A(0,z.gY()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.y(u)
t=this.cy
if(typeof t!=="number")return H.y(t)
x.sX(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.y(v)
x=this.db
if(typeof x!=="number")return H.y(x)
t.sX(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.G(0,a.z)
this.dx=this.a7(new V.K(y.a,y.b).t(0,2).A(0,z.gY()))}this.a1()},"$1","gbm",4,0,0],
ei:[function(a){var z,y,x
H.f(a,"$isr")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.J()
x=this.y
if(typeof x!=="number")return H.y(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.J()
z=this.x
if(typeof z!=="number")return H.y(z)
x.sM(-y*10*z)
this.a1()}},"$1","gbn",4,0,0],
hy:[function(a){if(H.U(H.f(a,"$isr"),"$isdS").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gee",4,0,0],
hz:[function(a){var z,y,x,w,v,u,t
a=H.U(H.f(a,"$isr"),"$isbb")
if(!J.M(this.d,a.x.b))return
z=a.c
y=a.d
x=y.G(0,a.y)
w=this.a7(new V.K(x.a,x.b).t(0,2).A(0,z.gY()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.y(u)
t=this.cy
if(typeof t!=="number")return H.y(t)
x.sX(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.y(v)
x=this.db
if(typeof x!=="number")return H.y(x)
t.sX(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.G(0,a.z)
this.dx=this.a7(new V.K(y.a,y.b).t(0,2).A(0,z.gY()))
this.a1()},"$1","gef",4,0,0],
hW:[function(a){H.f(a,"$isr")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gf4",4,0,0],
hV:[function(a){var z,y,x,w,v,u,t
a=H.U(H.f(a,"$isr"),"$iset")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.K(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.y(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.a7(new V.K(y.a,y.b).t(0,2).A(0,z.gY()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.J()
x=this.y
if(typeof x!=="number")return H.y(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.J()
y=this.x
if(typeof y!=="number")return H.y(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.a7(new V.K(x.a,x.b).t(0,2).A(0,z.gY()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.y(u)
t=this.cy
if(typeof t!=="number")return H.y(t)
x.sX(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.y(v)
x=this.db
if(typeof x!=="number")return H.y(x)
t.sX(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.G(0,a.z)
this.dx=this.a7(new V.K(y.a,y.b).t(0,2).A(0,z.gY()))}this.a1()},"$1","gf3",4,0,0],
hU:[function(a){var z,y,x
H.f(a,"$isr")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.J()
x=this.y
if(typeof x!=="number")return H.y(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.J()
z=this.x
if(typeof z!=="number")return H.y(z)
x.sM(-y*10*z)
this.a1()}},"$1","gf2",4,0,0],
aB:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.a5()
if(z<y){this.dy=y
x=a.y
this.c.aA(x)
this.b.aA(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.ar(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.t(0,V.ar(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa0:1},j4:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gp:function(){var z=this.r
if(z==null){z=D.D()
this.r=z}return z},
K:function(a){var z=this.r
if(!(z==null))z.B(a)},
aI:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.D()
z.e=y
z=y}else z=y
y=this.gej()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.D()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
hA:[function(a){var z,y,x,w
H.f(a,"$isr")
if(!J.M(this.b,this.a.b.c))return
H.U(a,"$iscB")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.t()
w=z+y*x
if(z!==w){this.d=w
z=new D.H("zoom",z,w,this,[P.t])
z.b=!0
this.K(z)}},"$1","gej",4,0,0],
aB:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ar(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa0:1}}],["","",,M,{"^":"",h1:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sdG:function(a,b){this.d=H.k(b,"$isV",[E.ai],"$asV")},
al:[function(a){var z
H.f(a,"$isr")
z=this.x
if(!(z==null))z.B(a)},function(){return this.al(null)},"hw","$1","$0","ga6",0,2,1],
hD:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ai
H.k(b,"$iso",[z],"$aso")
for(y=b.length,x=this.ga6(),w={func:1,ret:-1,args:[D.r]},v=[w],u=0;u<b.length;b.length===y||(0,H.v)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.bs()
s.sac(null)
s.saW(null)
s.c=null
s.d=0
t.sa0(s)}s=t.ga0()
s.toString
H.h(x,w)
if(s.a==null)s.sac(H.b([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.dJ(a,b,this,[z])
z.b=!0
this.al(z)},"$2","gem",8,0,5],
hE:[function(a,b){var z,y,x
z=E.ai
H.k(b,"$iso",[z],"$aso")
for(y=b.gL(b),x=this.ga6();y.v();)y.gF().gp().R(0,x)
z=new D.dK(a,b,this,[z])
z.b=!0
this.al(z)},"$2","gen",8,0,5],
scU:function(a,b){var z,y
if(b==null)b=X.dG(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gp().R(0,this.ga6())
y=this.b
this.b=b
b.gp().h(0,this.ga6())
z=new D.H("target",y,this.b,this,[X.el])
z.b=!0
this.al(z)}},
scV:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gp().R(0,this.ga6())
y=this.c
this.c=a
if(a!=null)a.gp().h(0,this.ga6())
z=new D.H("technique",y,this.c,this,[O.bY])
z.b=!0
this.al(z)}},
gp:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
az:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
a.cS(this.c)
z=this.b
z.toString
y=a.a
C.b.fe(y,36160,null)
C.b.cH(y,2884)
C.b.cH(y,2929)
C.b.fB(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.y(x)
t=C.e.a4(u*x)
u=v.b
if(typeof w!=="number")return H.y(w)
s=C.e.a4(u*w)
u=C.e.a4(v.c*x)
a.c=u
v=C.e.a4(v.d*w)
a.d=v
C.b.hv(y,t,s,u,v)
C.b.fj(y,z.c)
z=z.a
C.b.fi(y,z.a,z.b,z.c,z.d)
C.b.fh(y,16640)
z=this.a
y=a.c
v=a.d
u=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(u*0.5)
n=V.ar(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.cR(n)
y=$.e4
if(y==null){y=$.e6
if(y==null){y=new V.bB(0,0,0)
$.e6=y}v=$.eM
if(v==null){v=new V.O(0,1,0)
$.eM=v}u=$.eL
if(u==null){u=new V.O(0,0,-1)
$.eL=u}m=u.A(0,Math.sqrt(u.D(u)))
v=v.aJ(m)
l=v.A(0,Math.sqrt(v.D(v)))
k=m.aJ(l)
j=new V.O(y.a,y.b,y.c)
i=l.J(0).D(j)
h=k.J(0).D(j)
g=m.J(0).D(j)
y=V.ar(l.a,k.a,m.a,i,l.b,k.b,m.b,h,l.c,k.c,m.c,g,0,0,0,1)
$.e4=y
f=y}else f=y
z=z.b
if(z!=null){e=z.a
if(e!=null)f=e.t(0,f)}a.db.cR(f)
for(z=this.d.a,z=new J.ap(z,z.length,0,[H.q(z,0)]);z.v();)z.d.aA(a)
for(z=this.d.a,z=new J.ap(z,z.length,0,[H.q(z,0)]);z.v();)z.d.az(a)
this.a.toString
a.cy.bL()
a.db.bL()
this.b.toString
a.cQ()},
$isl9:1}}],["","",,A,{"^":"",dg:{"^":"a;a,b,c"},fD:{"^":"a;a",
w:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fG:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x){w=z[x]
C.b.cI(w.a,w.c)}},
fC:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x){w=z[x]
C.b.cF(w.a,w.c)}}},hN:{"^":"cF;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,a,b,0c,0d,0e,0f,0r,0x,0y"},hO:{"^":"a;a,b,c,d,e,f",
i:function(a){return this.e},
m:{
e0:function(a){var z,y,x,w,v,u,t
z=a!==C.i
y=a===C.n
x=a===C.j
w="Normal_"+C.h.i(a.a)
v=$.$get$aw()
u=$.$get$av()
u=v.a|u.a
t=new Z.bf(u)
if(z)t=new Z.bf(u|$.$get$au().a)
if(y)t=new Z.bf(t.a|$.$get$ax().a)
return new A.hO(a,z,y,x,w,x?new Z.bf(t.a|$.$get$ay().a):t)}}},cF:{"^":"cl;",
dz:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
ca:function(a,b){var z,y,x
z=this.a
y=C.b.ft(z,b)
C.b.dk(z,y,a)
C.b.fk(z,y)
if(!H.d1(C.b.dc(z,y,35713))){x=C.b.da(z,y)
C.b.fw(z,y)
throw H.e(P.N("Error compiling shader '"+H.d(y)+"': "+H.d(x)))}return y},
eS:function(){var z,y,x,w,v,u
z=H.b([],[A.dg])
y=this.a
x=H.a_(C.b.b4(y,this.r,35721))
if(typeof x!=="number")return H.y(x)
w=0
for(;w<x;++w){v=C.b.d2(y,this.r,w)
u=C.b.d4(y,this.r,v.name)
C.a.h(z,new A.dg(y,v.name,u))}this.x=new A.fD(z)},
eU:function(){var z,y,x,w,v,u
z=H.b([],[A.Y])
y=this.a
x=H.a_(C.b.b4(y,this.r,35718))
if(typeof x!=="number")return H.y(x)
w=0
for(;w<x;++w){v=C.b.d3(y,this.r,w)
u=C.b.dd(y,this.r,v.name)
C.a.h(z,this.fu(v.type,v.size,v.name,u))}this.y=new A.iV(z)},
ao:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.cQ(z,y,b,c)
else return A.cR(z,y,b,a,c)},
dW:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.eG(z,y,b,c)
else return A.cR(z,y,b,a,c)},
dX:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.eH(z,y,b,c)
else return A.cR(z,y,b,a,c)},
aZ:function(a,b){return new P.eU(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
fu:function(a,b,c,d){switch(a){case 5120:return this.ao(b,c,d)
case 5121:return this.ao(b,c,d)
case 5122:return this.ao(b,c,d)
case 5123:return this.ao(b,c,d)
case 5124:return this.ao(b,c,d)
case 5125:return this.ao(b,c,d)
case 5126:return new A.iN(this.a,this.r,c,d)
case 35664:return new A.iP(this.a,this.r,c,d)
case 35665:return new A.iR(this.a,this.r,c,d)
case 35666:return new A.iT(this.a,this.r,c,d)
case 35667:return new A.iQ(this.a,this.r,c,d)
case 35668:return new A.iS(this.a,this.r,c,d)
case 35669:return new A.iU(this.a,this.r,c,d)
case 35674:return new A.iX(this.a,this.r,c,d)
case 35675:return new A.eF(this.a,this.r,c,d)
case 35676:return new A.c0(this.a,this.r,c,d)
case 35678:return this.dW(b,c,d)
case 35680:return this.dX(b,c,d)
case 35670:throw H.e(this.aZ("BOOL",c))
case 35671:throw H.e(this.aZ("BOOL_VEC2",c))
case 35672:throw H.e(this.aZ("BOOL_VEC3",c))
case 35673:throw H.e(this.aZ("BOOL_VEC4",c))
default:throw H.e(P.N("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}},bI:{"^":"a;a,b",
i:function(a){return this.b}},Y:{"^":"a;"},iV:{"^":"a;a",
w:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
aa:function(a,b){var z=this.w(0,b)
if(z==null)throw H.e(P.N("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.H()},
fK:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.v)(z),++w)x+=z[w].i(0)+a
return x},
H:function(){return this.fK("\n")}},cQ:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform1i: "+H.d(this.c)}},iQ:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform2i: "+H.d(this.c)}},iS:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform3i: "+H.d(this.c)}},iU:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform4i: "+H.d(this.c)}},iO:{"^":"Y;0e,0f,a,b,c,d",
sf6:function(a){this.e=H.k(a,"$isc",[P.x],"$asc")},
i:function(a){return"Uniform1iv: "+H.d(this.c)},
m:{
cR:function(a,b,c,d,e){var z=new A.iO(a,b,c,e)
z.f=d
z.sf6(P.hw(d,0,!1,P.x))
return z}}},iN:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform1f: "+H.d(this.c)}},iP:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform2f: "+H.d(this.c)}},iR:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform3f: "+H.d(this.c)}},iT:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform4f: "+H.d(this.c)}},iX:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}},eF:{"^":"Y;a,b,c,d",
i:function(a){return"UniformMat3: "+H.d(this.c)}},c0:{"^":"Y;a,b,c,d",
b6:function(a){var z=new Float32Array(H.c6(H.k(a,"$isc",[P.t],"$asc")))
C.b.ht(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.d(this.c)}},eG:{"^":"Y;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.d(this.c)}},eH:{"^":"Y;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}}],["","",,F,{"^":"",
c5:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bk:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.O(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.O(t+h,s+f,r+g)
z.b=q
p=new V.O(t-h,s-f,r-g)
z.c=p
o=new V.O(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.c5(y)
k=F.c5(z.b)
j=F.kQ(d,e,new F.k9(z,F.c5(z.c),F.c5(z.d),k,l,c),b)
if(j!=null)a.fU(j)},
kQ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.aF,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.eh()
y=H.b([],[F.aF])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cS(null,null,new V.b5(u,0,0,1),null,null,new V.a2(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bC(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cS(null,null,new V.b5(o,n,m,1),null,null,new V.a2(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bC(d))}}z.d.f8(a+1,b+1,y)
return z},
k9:{"^":"p:31;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.bG(z.b,b).bG(z.d.bG(z.c,b),c)
z=new V.bB(y.a,y.b,y.c)
if(!J.M(a.f,z)){a.f=z
z=a.a
if(z!=null)z.W()}a.shl(y.A(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
x=new V.e7(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.M(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.W()}}},
X:{"^":"a;0a,0b,0c,0d,0e",
dP:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bC()
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.cK())return
return v.A(0,Math.sqrt(v.D(v)))},
dS:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.G(0,y)
z=new V.O(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.D(z)))
z=w.G(0,y)
z=new V.O(z.a,z.b,z.c)
z=v.aJ(z.A(0,Math.sqrt(z.D(z))))
return z.A(0,Math.sqrt(z.D(z)))},
bA:function(){if(this.d!=null)return!0
var z=this.dP()
if(z==null){z=this.dS()
if(z==null)return!1}this.d=z
this.a.a.W()
return!0},
dO:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bC()
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.cK())return
return v.A(0,Math.sqrt(v.D(v)))},
dR:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.l.$2(n,0)){z=r.G(0,u)
z=new V.O(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.J(0)}else{l=(z-q.b)/n
z=r.G(0,u)
z=new V.bB(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).G(0,x)
z=new V.O(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.J(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.D(z)))
z=k.aJ(m)
z=z.A(0,Math.sqrt(z.D(z))).aJ(k)
m=z.A(0,Math.sqrt(z.D(z)))}return m},
by:function(){if(this.e!=null)return!0
var z=this.dO()
if(z==null){z=this.dR()
if(z==null)return!1}this.e=z
this.a.a.W()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
q:function(a){var z,y
z=this.a
if(z==null||this.b==null||this.c==null)return a+"disposed"
y=a+C.c.a_(J.a1(z.e),0)+", "+C.c.a_(J.a1(this.b.e),0)+", "+C.c.a_(J.a1(this.c.e),0)+" {"
z=this.d
y=z!=null?y+(z.i(0)+", "):y+"-, "
z=this.e
return z!=null?y+(z.i(0)+"}"):y+"-}"},
H:function(){return this.q("")},
m:{
bt:function(a,b,c){var z,y,x
z=new F.X()
y=a.a
if(y==null)H.Q(P.N("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.Q(P.N("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.W()
return z}}},
ba:{"^":"a;0a,0b",
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
q:function(a){var z=this.a
if(z==null||this.b==null)return a+"disposed"
return a+C.c.a_(J.a1(z.e),0)+", "+C.c.a_(J.a1(this.b.e),0)},
H:function(){return this.q("")}},
bA:{"^":"a;0a",
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
q:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.c.a_(J.a1(z.e),0)},
H:function(){return this.q("")}},
eg:{"^":"a;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
fU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
a.a.S()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.v)(z),++w){v=z[w]
this.a.h(0,v.fo())}this.a.S()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.v)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.S()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.bA()
if(r.a==null)H.Q(P.N("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.B(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.v)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.S()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.S()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
t=new F.ba()
s=p.a
if(s==null)H.Q(P.N("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.Q(P.N("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.B(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.v)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.S()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.S()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.S()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
l=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,l)
F.bt(p,o,l)}z=this.e
if(!(z==null))z.ai()},
av:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.av()||!1
if(!this.a.av())y=!1
z=this.e
if(!(z==null))z.ai()
return y},
ff:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
y=b.a
x=(y&$.$get$aw().a)!==0?1:0
if((y&$.$get$av().a)!==0)++x
if((y&$.$get$au().a)!==0)++x
if((y&$.$get$ax().a)!==0)++x
if((y&$.$get$ay().a)!==0)++x
if((y&$.$get$bg().a)!==0)++x
if((y&$.$get$bh().a)!==0)++x
if((y&$.$get$aU().a)!==0)++x
if((y&$.$get$aT().a)!==0)++x
w=b.gbT(b)
v=w*4
y=new Array(z*w)
y.fixed$length=Array
u=P.t
t=H.b(y,[u])
y=new Array(x)
y.fixed$length=Array
s=H.b(y,[Z.dk])
for(r=0,q=0;q<x;++q){p=b.fb(q)
o=p.gbT(p)
C.a.N(s,q,new Z.dk(p,o,r*4,v,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].fS(p)
l=r+n*w
for(k=0;k<m.length;++k){C.a.N(t,l,m[k]);++l}}r+=o}H.k(t,"$isc",[u],"$asc")
y=a.a
j=y.createBuffer()
C.b.a9(y,34962,j)
C.b.cA(y,34962,new Float32Array(H.c6(t)),35044)
C.b.a9(y,34962,null)
i=new Z.dl(new Z.eR(34962,j),s,b)
i.se9(H.b([],[Z.bv]))
if(this.b.b.length!==0){u=P.x
h=H.b([],[u])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.S()
C.a.h(h,g.e)}f=Z.cT(y,34963,H.k(h,"$isc",[u],"$asc"))
C.a.h(i.b,new Z.bv(0,h.length,f))}if(this.c.b.length!==0){u=P.x
h=H.b([],[u])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.S()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.S()
C.a.h(h,g.e)}f=Z.cT(y,34963,H.k(h,"$isc",[u],"$asc"))
C.a.h(i.b,new Z.bv(1,h.length,f))}if(this.d.b.length!==0){u=P.x
h=H.b([],[u])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.S()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.S()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.S()
C.a.h(h,g.e)}f=Z.cT(y,34963,H.k(h,"$isc",[u],"$asc"))
C.a.h(i.b,new Z.bv(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.q("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.q("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.q("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.q("   "))}return C.a.k(z,"\n")},
a3:function(a){var z=this.e
if(!(z==null))z.B(a)},
W:function(){return this.a3(null)},
$islb:1,
m:{
eh:function(){var z,y
z=new F.eg()
y=new F.j7(z)
y.b=!1
y.sf7(H.b([],[F.aF]))
z.a=y
y=new F.im(z)
y.sbq(H.b([],[F.bA]))
z.b=y
y=new F.il(z)
y.sea(H.b([],[F.ba]))
z.c=y
y=new F.ik(z)
y.se0(H.b([],[F.X]))
z.d=y
z.e=null
return z}}},
ik:{"^":"a;a,0b",
se0:function(a){this.b=H.k(a,"$isc",[F.X],"$asc")},
f8:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,"$isc",[F.aF],"$asc")
z=H.b([],[F.X])
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
C.a.h(z,F.bt(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bt(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bt(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bt(p,m,q))}t=!t}v=!v}return z},
gl:function(a){return this.b.length},
av:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.v)(z),++w)if(!z[w].bA())x=!1
return x},
bz:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.v)(z),++w)if(!z[w].by())x=!1
return x},
i:function(a){return this.H()},
q:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].q(a))
return C.a.k(z,"\n")},
H:function(){return this.q("")}},
il:{"^":"a;a,0b",
sea:function(a){this.b=H.k(a,"$isc",[F.ba],"$asc")},
gl:function(a){return this.b.length},
i:function(a){return this.H()},
q:function(a){var z,y,x,w
z=H.b([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].q(a+(""+x+". ")))}return C.a.k(z,"\n")},
H:function(){return this.q("")}},
im:{"^":"a;a,0b",
sbq:function(a){this.b=H.k(a,"$isc",[F.bA],"$asc")},
gl:function(a){return this.b.length},
i:function(a){return this.H()},
q:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].q(a))
return C.a.k(z,"\n")},
H:function(){return this.q("")}},
aF:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bC:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cS(this.cx,x,u,z,y,w,v,a,t)},
fo:function(){return this.bC(null)},
shl:function(a){var z
if(!J.M(this.z,a)){this.z=a
z=this.a
if(z!=null)z.W()}},
fS:function(a){var z,y
if(a.n(0,$.$get$aw())){z=this.f
y=[P.t]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.n(0,$.$get$av())){z=this.r
y=[P.t]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.n(0,$.$get$au())){z=this.x
y=[P.t]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.n(0,$.$get$ax())){z=this.y
y=[P.t]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(a.n(0,$.$get$ay())){z=this.z
y=[P.t]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.n(0,$.$get$bg())){z=this.Q
y=[P.t]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.n(0,$.$get$bh())){z=this.Q
y=[P.t]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(a.n(0,$.$get$aU()))return H.b([this.ch],[P.t])
else if(a.n(0,$.$get$aT())){z=this.cx
y=[P.t]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.t])},
bA:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bC()
this.d.T(0,new F.je(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.ai()}return!0},
by:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bC()
this.d.T(0,new F.jd(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.ai()}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
q:function(a){var z,y,x
z=H.b([],[P.j])
C.a.h(z,C.c.a_(J.a1(this.e),0))
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
x=C.a.k(z,", ")
return a+"{"+x+"}"},
H:function(){return this.q("")},
m:{
cS:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aF()
y=new F.jc(z)
y.sbq(H.b([],[F.bA]))
z.b=y
y=new F.jb(z)
x=[F.ba]
y.seb(H.b([],x))
y.sec(H.b([],x))
z.c=y
y=new F.j8(z)
x=[F.X]
y.se1(H.b([],x))
y.se2(H.b([],x))
y.se3(H.b([],x))
z.d=y
h=$.$get$eO()
z.e=0
y=$.$get$aw()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$av().a)!==0?e:null
z.x=(x&$.$get$au().a)!==0?b:null
z.y=(x&$.$get$ax().a)!==0?f:null
z.z=(x&$.$get$ay().a)!==0?g:null
z.Q=(x&$.$get$eP().a)!==0?c:null
z.ch=(x&$.$get$aU().a)!==0?i:0
z.cx=(x&$.$get$aT().a)!==0?a:null
return z}}},
je:{"^":"p:6;a",
$1:function(a){var z,y
H.f(a,"$isX")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
jd:{"^":"p:6;a",
$1:function(a){var z,y
H.f(a,"$isX")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
j7:{"^":"a;a,0b,0c",
sf7:function(a){this.c=H.k(a,"$isc",[F.aF],"$asc")},
S:function(){},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.e(P.N("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.W()
return!0},
gl:function(a){return this.c.length},
av:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x)z[x].bA()
return!0},
bz:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x)z[x].by()
return!0},
fg:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.M(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.B(null)}}}}return!0},
i:function(a){return this.H()},
q:function(a){var z,y,x,w
this.S()
z=H.b([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].q(a))
return C.a.k(z,"\n")},
H:function(){return this.q("")}},
j8:{"^":"a;a,0b,0c,0d",
se1:function(a){this.b=H.k(a,"$isc",[F.X],"$asc")},
se2:function(a){this.c=H.k(a,"$isc",[F.X],"$asc")},
se3:function(a){this.d=H.k(a,"$isc",[F.X],"$asc")},
gl:function(a){return this.b.length+this.c.length+this.d.length},
T:function(a,b){H.h(b,{func:1,ret:-1,args:[F.X]})
C.a.T(this.b,b)
C.a.T(this.c,new F.j9(this,b))
C.a.T(this.d,new F.ja(this,b))},
i:function(a){return this.H()},
q:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].q(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].q(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].q(a))
return C.a.k(z,"\n")},
H:function(){return this.q("")}},
j9:{"^":"p:6;a,b",
$1:function(a){H.f(a,"$isX")
if(!J.M(a.a,this.a))this.b.$1(a)}},
ja:{"^":"p:6;a,b",
$1:function(a){var z
H.f(a,"$isX")
z=this.a
if(!J.M(a.a,z)&&!J.M(a.b,z))this.b.$1(a)}},
jb:{"^":"a;a,0b,0c",
seb:function(a){this.b=H.k(a,"$isc",[F.ba],"$asc")},
sec:function(a){this.c=H.k(a,"$isc",[F.ba],"$asc")},
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.H()},
q:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].q(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].q(a))
return C.a.k(z,"\n")},
H:function(){return this.q("")}},
jc:{"^":"a;a,0b",
sbq:function(a){this.b=H.k(a,"$isc",[F.bA],"$asc")},
gl:function(a){return this.b.length},
i:function(a){return this.H()},
q:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].q(a))
return C.a.k(z,"\n")},
H:function(){return this.q("")}}}],["","",,O,{"^":"",hM:{"^":"bY;0a,0b,0c,0d,0e,0f,0r",
gp:function(){var z=this.r
if(z==null){z=D.D()
this.r=z}return z},
bY:[function(a){var z
H.f(a,"$isr")
z=this.r
if(!(z==null))z.B(a)},function(){return this.bY(null)},"dI","$1","$0","gbX",0,2,1],
cm:function(a){},
cn:function(a){var z,y
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gp().R(0,this.gbX())
y=this.f
this.f=a
if(a!=null)a.gp().h(0,this.gbX())
z=new D.H("bumpyTextureCube",y,this.f,this,[T.eo])
z.b=!0
this.bY(z)}},
c3:function(a,b){H.k(a,"$isc",[T.cL],"$asc")
if(b!=null)if(!C.a.O(a,b)){b.a=a.length
C.a.h(a,b)}},
hb:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
if(z==null){y=A.e0(this.d)
z=y.e
x=a.fr.w(0,z)
if(x==null){w=a.a
x=new A.hN(w,z)
x.dz(w,z)
x.z=y
v=y.c
u=v?"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n":"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n"
t=y.d
u=(t?u+"uniform mat4 txtCubeMat;\n":u)+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
s=y.b
if(s)u+="attribute vec3 binmAttr;\n"
if(v)u+="attribute vec2 txt2DAttr;\n"
u=(t?u+"attribute vec3 txtCubeAttr;\n":u)+"\nvarying vec3 normalVec;\n"
if(s)u+="varying vec3 binormalVec;\n"
if(v)u+="varying vec2 txt2D;\n"
u=(t?u+"varying vec3 txtCube;\n":u)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(s)u+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
if(v)u+="   txt2D = (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
u=(t?u+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":u)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
r=u.charCodeAt(0)==0?u:u
u=s?"precision mediump float;\n\nvarying vec3 normalVec;\nvarying vec3 binormalVec;\n":"precision mediump float;\n\nvarying vec3 normalVec;\n"
if(v)u+="varying vec2 txt2D;\n"
u=(t?u+"varying vec3 txtCube;\n":u)+"\n"
s=y.a
switch(s){case C.i:break
case C.p:break
case C.n:u+="uniform sampler2D bumpTxt;\nuniform int nullBumpTxt;\n"
break
case C.j:u+="uniform samplerCube bumpTxt;\nuniform int nullBumpTxt;\n"
break}u+="\nvec3 normal()\n{\n"
if(s===C.i||s===C.p)u+="   return normalize(normalVec);\n"
else{u+="   if(nullBumpTxt > 0) return normalVec;\n"
u=(s===C.n?u+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":u+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"}u+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
x.c=r
x.d=u.charCodeAt(0)==0?u:u
x.e=x.ca(r,35633)
x.f=x.ca(x.d,35632)
u=w.createProgram()
x.r=u
C.b.cw(w,u,x.e)
C.b.cw(w,x.r,x.f)
C.b.fR(w,x.r)
if(!H.d1(C.b.b4(w,x.r,35714))){q=C.b.d8(w,x.r)
C.b.fv(w,x.r)
H.Q(P.N("Failed to link shader: "+H.d(q)))}x.eS()
x.eU()
x.Q=x.x.w(0,"posAttr")
x.cx=x.x.w(0,"normAttr")
x.ch=x.x.w(0,"binmAttr")
x.cy=x.x.w(0,"txt2DAttr")
x.db=x.x.w(0,"txtCubeAttr")
x.dx=H.U(x.y.aa(0,"viewObjMat"),"$isc0")
x.dy=H.U(x.y.aa(0,"projViewObjMat"),"$isc0")
if(v)x.fr=H.U(x.y.aa(0,"txt2DMat"),"$iseF")
if(t)x.fx=H.U(x.y.aa(0,"txtCubeMat"),"$isc0")
switch(s){case C.i:break
case C.p:break
case C.n:x.fy=H.U(x.y.aa(0,"bumpTxt"),"$iseG")
x.id=H.U(x.y.aa(0,"nullBumpTxt"),"$iscQ")
break
case C.j:x.go=H.U(x.y.aa(0,"bumpTxt"),"$iseH")
x.id=H.U(x.y.aa(0,"nullBumpTxt"),"$iscQ")
break}if(z.length===0)H.Q(P.N("May not cache a shader with no name."))
if(a.fr.cD(z))H.Q(P.N('Shader cache already contains a shader by the name "'+z+'".'))
a.fr.N(0,z,x)}this.a=x
b.e=null
z=x}y=z.z
p=y.f
z=b.e
if(!(z instanceof Z.dl)){b.e=null
z=null}if(z==null||!z.d.n(0,p)){b.d.av()
z=y.b
if(z){v=b.d
u=v.e
if(!(u==null))++u.d
v.d.bz()
v.a.bz()
v=v.e
if(!(v==null))v.ai()}v=y.d
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.a.fg()
u=u.e
if(!(u==null))u.ai()}o=b.d.ff(new Z.jf(a.a),p)
o.aK($.$get$aw()).e=this.a.Q.c
o.aK($.$get$av()).e=this.a.cx.c
if(z)o.aK($.$get$au()).e=this.a.ch.c
if(y.c)o.aK($.$get$ax()).e=this.a.cy.c
if(v)o.aK($.$get$ay()).e=this.a.db.c
b.e=o}n=H.b([],[T.cL])
z=this.a
v=a.a
C.b.d_(v,z.r)
z.x.fG()
z=this.a
u=a.cx
if(u==null){u=a.db.gag().t(0,a.dx.gag())
a.cx=u}z=z.dx
z.toString
z.b6(u.aP(0,!0))
u=this.a
z=a.ch
if(z==null){z=a.z
if(z==null){z=a.cy.gag().t(0,a.db.gag())
a.z=z}z=z.t(0,a.dx.gag())
a.ch=z}u=u.dy
u.toString
u.b6(z.aP(0,!0))
if(y.c){z=this.a
u=this.b
z=z.fr
z.toString
m=new Float32Array(H.c6(H.k(u.aP(0,!0),"$isc",[P.t],"$asc")))
C.b.hs(z.a,z.d,!1,m)}if(y.d){z=this.a
u=this.c
z=z.fx
z.toString
z.b6(u.aP(0,!0))}switch(y.a){case C.i:break
case C.p:break
case C.n:this.c3(n,this.e)
z=this.a.id
C.b.aR(z.a,z.d,1)
break
case C.j:this.c3(n,this.f)
z=this.a
u=this.f
t=z.go
z=z.id
s=u!=null
if(!s||u.d<6)C.b.aR(z.a,z.d,1)
else{t.toString
if(!s||u.d<6)C.b.aR(t.a,t.d,0)
else{u=u.a
C.b.aR(t.a,t.d,u)}C.b.aR(z.a,z.d,0)}break}for(l=0;l<n.length;++l){z=n[l]
if(!z.c&&z.d>=6){z.c=!0
C.b.cs(v,33984+z.a)
C.b.au(v,34067,z.b)}}z=b.e
z.bv(a)
z.az(a)
z.hr(a)
for(l=0;l<n.length;++l){z=n[l]
if(z.c){z.c=!1
C.b.cs(v,33984+z.a)
C.b.au(v,34067,null)}}z=this.a
z.toString
C.b.d_(v,null)
z.x.fC()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return A.e0(this.d).e}},bY:{"^":"a;"}}],["","",,T,{"^":"",cL:{"^":"cl;"},eo:{"^":"cL;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z}},iD:{"^":"a;a,0b,0c,0d,0e",
ap:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.W
W.P(z,"load",H.h(new T.iE(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
eN:function(a,b,c){var z,y,x,w
b=V.da(b,2)
z=V.da(a.width,2)
y=V.da(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cp(null,null)
x.width=z
x.height=y
w=H.f(C.m.d6(x,"2d"),"$iscq")
w.imageSmoothingEnabled=!1;(w&&C.x).fE(w,a,0,0,x.width,x.height)
return P.kp(C.x.e7(w,0,0,x.width,x.height))}}},iE:{"^":"p:20;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.eN(this.b,z.c,this.c)
x=z.a
C.b.au(x,34067,this.d)
C.b.h7(x,37440,this.e?1:0)
C.b.hj(x,this.f,0,6408,6408,5121,y)
C.b.au(x,34067,null)
x=this.r
if(++x.d>=6){x=x.e
if(!(x==null))x.fF()}++z.e}}}],["","",,V,{"^":"",b3:{"^":"a;",
ay:function(a){return!0},
i:function(a){return"all"},
$isak:1},ak:{"^":"a;"},dV:{"^":"a;0a",
sU:function(a){this.a=H.k(a,"$isc",[V.ak],"$asc")},
ay:["ds",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x)if(z[x].ay(a))return!0
return!1}],
i:["bU",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.v)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isak:1},af:{"^":"dV;0a",
ay:function(a){return!this.ds(a)},
i:function(a){return"!["+this.bU(0)+"]"}},i4:{"^":"a;0a,0b",
ay:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.cD(this.a)
y=H.cD(this.b)
return z+".."+y},
$isak:1,
m:{
E:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.e(P.N("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.c.am(a,0)
y=C.c.am(b,0)
x=new V.i4()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},ih:{"^":"a;0a",
seR:function(a){this.a=H.k(a,"$isa7",[P.x,P.C],"$asa7")},
dw:function(a){var z,y
if(a.a.length<=0)throw H.e(P.N("May not create a SetMatcher with zero characters."))
z=new H.aO(0,0,[P.x,P.C])
for(y=new H.cz(a,a.gl(a),0,[H.T(a,"L",0)]);y.v();)z.N(0,y.d,!0)
this.seR(z)},
ay:function(a){return this.a.cD(a)},
i:function(a){var z=this.a
return P.cJ(new H.dQ(z,[H.q(z,0)]),0,null)},
$isak:1,
m:{
n:function(a){var z=new V.ih()
z.dw(a)
return z}}},cG:{"^":"a;a,b,0c,0d",
sf5:function(a){this.c=H.k(a,"$isc",[V.cO],"$asc")},
k:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.cO(this.a.j(0,b))
w.sU(H.b([],[V.ak]))
w.c=!1
C.a.h(this.c,w)
return w},
fH:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x){w=z[x]
if(w.ay(a))return w}return},
i:function(a){return this.b}},es:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.dc(this.b,"\n","\\n")
y=H.dc(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},cN:{"^":"a;a,b,0c",
seL:function(a){var z=P.j
this.c=H.k(a,"$isa7",[z,z],"$asa7")},
ah:function(a,b,c){var z,y,x
H.k(c,"$isc",[P.j],"$asc")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.v)(c),++y){x=c[y]
this.c.N(0,x,b)}},
i:function(a){return this.b}},iJ:{"^":"a;0a,0b,0c",
seX:function(a){this.a=H.k(a,"$isa7",[P.j,V.cG],"$asa7")},
sf1:function(a){this.b=H.k(a,"$isa7",[P.j,V.cN],"$asa7")},
j:function(a,b){var z=this.a.w(0,b)
if(z==null){z=new V.cG(this,b)
z.sf5(H.b([],[V.cO]))
z.d=null
this.a.N(0,b,z)}return z},
I:function(a){var z,y
z=this.b.w(0,a)
if(z==null){z=new V.cN(this,a)
y=P.j
z.seL(new H.aO(0,0,[y,y]))
this.b.N(0,a,z)}return z},
cY:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.es])
y=this.c
x=[P.x]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.am(a,t)
r=y.fH(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cJ(w,0,null)
throw H.e(P.N("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cJ(w,0,null)
p=y.d
o=p.c.w(0,q)
u=new V.es(o==null?p.b:o,q,t)}++t}}},
m:{
bZ:function(){var z,y
z=new V.iJ()
y=P.j
z.seX(new H.aO(0,0,[y,V.cG]))
z.sf1(new H.aO(0,0,[y,V.cN]))
z.c=null
return z}}},cO:{"^":"dV;b,0c,0a",
i:function(a){return this.b.b+": "+this.bU(0)}}}],["","",,X,{"^":"",dn:{"^":"a;",$isdZ:1},ha:{"^":"el;0a,0b,0c,0d,0e,0f,0r,0x",
gp:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
m:{
dG:function(a,b,c,d,e,f,g){var z,y
z=new X.ha()
y=new V.b5(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=$.ed
if(y==null){y=V.ec(0,0,1,1)
$.ed=y}z.r=y
return z}}},hR:{"^":"a;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
aD:[function(a){var z
H.f(a,"$isr")
z=this.f
if(!(z==null))z.B(a)},function(){return this.aD(null)},"hx","$1","$0","gbZ",0,2,1],
saM:function(a){var z,y
if(!J.M(this.b,a)){z=this.b
if(z!=null)z.gp().R(0,this.gbZ())
y=this.b
this.b=a
if(a!=null)a.gp().h(0,this.gbZ())
z=new D.H("mover",y,this.b,this,[U.a0])
z.b=!0
this.aD(z)}},
$isdZ:1,
$isdn:1},el:{"^":"a;"}}],["","",,V,{"^":"",
kO:function(a){P.iI(C.J,new V.kP(a))},
aA:{"^":"a;0d",
sbi:function(a){this.d=H.k(a,"$isc",[[P.c,W.aC]],"$asc")},
aU:function(a){this.b=new P.hg(C.L)
this.c=null
this.sbi(H.b([],[[P.c,W.aC]]))},
E:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.b([],[W.aC]))
y=a.split("\n")
for(z=y.length,x=[W.aC],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.b([],x))
t=document.createElement("div")
t.className="codePart"
H.z(u)
s=this.b.dV(u,0,u.length)
r=s==null?u:s
C.d.di(t,H.dc(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gb0(this.d),t)}},
cP:function(a){var z,y,x,w
H.k(a,"$isc",[P.j],"$asc")
this.sbi(H.b([],[[P.c,W.aC]]))
z=C.a.k(a,"\n")
y=this.c
if(y==null){y=this.b_()
this.c=y}for(y=y.cY(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)this.b1(y[w])}},
kP:{"^":"p:34;a",
$1:function(a){H.f(a,"$isaR")
P.db(C.e.cX(this.a.gfL(),2)+" fps")}},
fP:{"^":"aA;a,0b,0c,0d",
b1:function(a){switch(a.a){case"Class":this.E(a.b,"#551")
break
case"Comment":this.E(a.b,"#777")
break
case"Id":this.E(a.b,"#111")
break
case"Num":this.E(a.b,"#191")
break
case"Reserved":this.E(a.b,"#119")
break
case"String":this.E(a.b,"#171")
break
case"Symbol":this.E(a.b,"#616")
break
case"Type":this.E(a.b,"#B11")
break
case"Whitespace":this.E(a.b,"#111")
break}},
b_:function(){var z,y,x,w
z=V.bZ()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.n(new H.m("_"))
C.a.h(y.a,x)
x=V.E("a","z")
C.a.h(y.a,x)
x=V.E("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.n(new H.m("_"))
C.a.h(x.a,y)
y=V.E("0","9")
C.a.h(x.a,y)
y=V.E("a","z")
C.a.h(x.a,y)
y=V.E("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.E("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.E("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.n(new H.m("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.E("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.E("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Sym")
y=V.n(new H.m("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").k(0,"Sym")
x=V.n(new H.m("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"OpenDoubleStr")
y=V.n(new H.m('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
x=V.n(new H.m('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
y=V.n(new H.m("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
x=V.n(new H.m('"'))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.b3())
x=z.j(0,"Start").k(0,"OpenSingleStr")
y=V.n(new H.m("'"))
C.a.h(x.a,y)
y=z.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
x=V.n(new H.m("'"))
C.a.h(y.a,x)
x=z.j(0,"OpenSingleStr").k(0,"EscSingleStr")
y=V.n(new H.m("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscSingleStr").k(0,"OpenSingleStr")
x=V.n(new H.m("'"))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.b3())
x=z.j(0,"Start").k(0,"Slash")
y=V.n(new H.m("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"Comment")
x=V.n(new H.m("/"))
C.a.h(y.a,x)
x=z.j(0,"Comment").k(0,"EndComment")
y=V.n(new H.m("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.af()
w=[V.ak]
x.sU(H.b([],w))
C.a.h(y.a,x)
y=V.n(new H.m("\n"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"MLComment")
x=V.n(new H.m("*"))
C.a.h(y.a,x)
x=z.j(0,"MLComment").k(0,"MLCStar")
y=V.n(new H.m("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").k(0,"MLComment")
x=new V.af()
x.sU(H.b([],w))
C.a.h(y.a,x)
y=V.n(new H.m("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").k(0,"EndComment")
x=V.n(new H.m("/"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Whitespace")
y=V.n(new H.m(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Whitespace").k(0,"Whitespace")
x=V.n(new H.m(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Int")
x.d=x.a.I("Num")
x=z.j(0,"Float")
x.d=x.a.I("Num")
x=z.j(0,"Sym")
x.d=x.a.I("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.I("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.I("String")
x=z.j(0,"EndComment")
x.d=x.a.I("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.I("Whitespace")
x=z.j(0,"Id")
y=x.a.I("Id")
x.d=y
x=[P.j]
y.ah(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.ah(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.ah(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
hb:{"^":"aA;a,0b,0c,0d",
b1:function(a){switch(a.a){case"Builtin":this.E(a.b,"#411")
break
case"Comment":this.E(a.b,"#777")
break
case"Id":this.E(a.b,"#111")
break
case"Num":this.E(a.b,"#191")
break
case"Preprocess":this.E(a.b,"#737")
break
case"Reserved":this.E(a.b,"#119")
break
case"Symbol":this.E(a.b,"#611")
break
case"Type":this.E(a.b,"#171")
break
case"Whitespace":this.E(a.b,"#111")
break}},
b_:function(){var z,y,x,w
z=V.bZ()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.n(new H.m("_"))
C.a.h(y.a,x)
x=V.E("a","z")
C.a.h(y.a,x)
x=V.E("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.n(new H.m("_"))
C.a.h(x.a,y)
y=V.E("0","9")
C.a.h(x.a,y)
y=V.E("a","z")
C.a.h(x.a,y)
y=V.E("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.E("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.E("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.n(new H.m("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.E("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.E("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Sym")
y=V.n(new H.m("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").k(0,"Sym")
x=V.n(new H.m("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Slash")
y=V.n(new H.m("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"Comment")
x=V.n(new H.m("/"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Slash").k(0,"Sym").a,new V.b3())
x=z.j(0,"Comment").k(0,"EndComment")
y=V.n(new H.m("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.af()
w=[V.ak]
x.sU(H.b([],w))
C.a.h(y.a,x)
y=V.n(new H.m("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Preprocess")
x=V.n(new H.m("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"Preprocess")
y=new V.af()
y.sU(H.b([],w))
C.a.h(x.a,y)
x=V.n(new H.m("\n"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"EndPreprocess")
y=V.n(new H.m("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Whitespace")
x=V.n(new H.m(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Whitespace").k(0,"Whitespace")
y=V.n(new H.m(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Int")
y.d=y.a.I("Num")
y=z.j(0,"Float")
y.d=y.a.I("Num")
y=z.j(0,"Sym")
y.d=y.a.I("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.I("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.I("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.I("Whitespace")
y=z.j(0,"Id")
x=y.a.I("Id")
y.d=x
y=[P.j]
x.ah(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.ah(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.ah(0,"Builtin",H.b(["gl_FragColor","gl_Position"],y))
return z}},
hc:{"^":"aA;a,0b,0c,0d",
b1:function(a){switch(a.a){case"Attr":this.E(a.b,"#911")
this.E("=","#111")
break
case"Id":this.E(a.b,"#111")
break
case"Other":this.E(a.b,"#111")
break
case"Reserved":this.E(a.b,"#119")
break
case"String":this.E(a.b,"#171")
break
case"Symbol":this.E(a.b,"#616")
break}},
b_:function(){var z,y,x
z=V.bZ()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.n(new H.m("_"))
C.a.h(y.a,x)
x=V.E("a","z")
C.a.h(y.a,x)
x=V.E("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.n(new H.m("_"))
C.a.h(x.a,y)
y=V.E("0","9")
C.a.h(x.a,y)
y=V.E("a","z")
C.a.h(x.a,y)
y=V.E("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Id").k(0,"Attr")
x=V.n(new H.m("="))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Sym")
x=V.n(new H.m("</\\-!>="))
C.a.h(y.a,x)
x=z.j(0,"Sym").k(0,"Sym")
y=V.n(new H.m("</\\-!>="))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"OpenStr")
x=V.n(new H.m('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenStr").k(0,"CloseStr")
y=V.n(new H.m('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenStr").k(0,"EscStr")
x=V.n(new H.m("\\"))
C.a.h(y.a,x)
x=z.j(0,"EscStr").k(0,"OpenStr")
y=V.n(new H.m('"'))
C.a.h(x.a,y)
C.a.h(z.j(0,"OpenStr").k(0,"OpenStr").a,new V.b3())
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.b3())
y=z.j(0,"Other").k(0,"Other")
x=new V.af()
x.sU(H.b([],[V.ak]))
C.a.h(y.a,x)
y=V.n(new H.m('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.E("a","z")
C.a.h(x.a,y)
y=V.E("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.I("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.I("String")
y=z.j(0,"Id")
x=y.a.I("Id")
y.d=x
x.ah(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.j]))
x=z.j(0,"Attr")
x.d=x.a.I("Attr")
x=z.j(0,"Other")
x.d=x.a.I("Other")
return z}},
hT:{"^":"aA;a,0b,0c,0d",
cP:function(a){H.k(a,"$isc",[P.j],"$asc")
this.sbi(H.b([],[[P.c,W.aC]]))
this.E(C.a.k(a,"\n"),"#111")},
b1:function(a){},
b_:function(){return}},
io:{"^":"a;0a,0b",
dA:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.l).u(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.l.u(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.d.u(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.d.u(v,u)}t=z.createElement("div")
this.a=t
C.d.u(v,t)
this.b=null
t=W.W
W.P(z,"scroll",H.h(new V.ir(x),{func:1,ret:-1,args:[t]}),!1,t)},
cu:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.k(a,"$isc",[P.j],"$asc")
this.eT()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.cY(C.a.fP(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.v)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.d.u(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.d.u(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.d.u(y,t)
break
case"Link":s=u.b
if(H.fr(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=H.z(r[1])
q.textContent=H.z(r[0])
C.d.u(y,q)}else{p=P.f8(C.B,s,C.w,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
C.d.u(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.d.u(y,t)
break}}C.d.u(this.a,y)},
d5:function(a){var z,y,x,w
z=new V.fP("dart")
z.aU("dart")
y=new V.hb("glsl")
y.aU("glsl")
x=new V.hc("html")
x.aU("html")
w=C.a.fI(H.b([z,y,x],[V.aA]),new V.is(a))
if(w!=null)return w
z=new V.hT("plain")
z.aU("plain")
return z},
ct:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.k(a2,"$isc",[P.j],"$asc")
z=H.b([],[P.x])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.d7(w).b7(w,"+")){C.a.N(a2,x,C.c.b8(w,1))
C.a.h(z,1)
y=!0}else if(C.c.b7(w,"-")){C.a.N(a2,x,C.c.b8(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.d5(a0)
v.cP(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.d.u(t,s)
C.d.u(this.a,t)
r=P.f8(C.B,a,C.w,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.df(null)
n.href="#"+r
n.textContent=a
C.d.u(o,n)
C.u.u(p,o)
C.k.u(q,p)
C.o.u(s,q)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.v)(w),++e)C.u.u(f,w[e])
C.k.u(j,i)
C.k.u(j,h)
C.k.u(j,f)
C.o.u(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.v)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gL(w);b.v();)C.u.u(h,b.gF())
C.k.u(j,i)
C.k.u(j,h)
C.o.u(s,j)}},
eT:function(){var z,y,x,w
if(this.b!=null)return
z=V.bZ()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Bold")
x=V.n(new H.m("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").k(0,"Bold")
x=new V.af()
w=[V.ak]
x.sU(H.b([],w))
C.a.h(y.a,x)
y=V.n(new H.m("*"))
C.a.h(x.a,y)
y=z.j(0,"Bold").k(0,"BoldEnd")
x=V.n(new H.m("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Italic")
x=V.n(new H.m("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Italic").k(0,"Italic")
x=new V.af()
x.sU(H.b([],w))
C.a.h(y.a,x)
y=V.n(new H.m("_"))
C.a.h(x.a,y)
y=z.j(0,"Italic").k(0,"ItalicEnd")
x=V.n(new H.m("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Code")
x=V.n(new H.m("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Code").k(0,"Code")
x=new V.af()
x.sU(H.b([],w))
C.a.h(y.a,x)
y=V.n(new H.m("`"))
C.a.h(x.a,y)
y=z.j(0,"Code").k(0,"CodeEnd")
x=V.n(new H.m("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"LinkHead")
x=V.n(new H.m("["))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"LinkHead").k(0,"LinkTail")
x=V.n(new H.m("|"))
C.a.h(y.a,x)
x=z.j(0,"LinkHead").k(0,"LinkEnd")
y=V.n(new H.m("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkHead").k(0,"LinkHead")
y=new V.af()
y.sU(H.b([],w))
C.a.h(x.a,y)
x=V.n(new H.m("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").k(0,"LinkEnd")
y=V.n(new H.m("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").k(0,"LinkTail")
y=new V.af()
y.sU(H.b([],w))
C.a.h(x.a,y)
x=V.n(new H.m("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.b3())
x=z.j(0,"Other").k(0,"Other")
y=new V.af()
y.sU(H.b([],w))
C.a.h(x.a,y)
x=V.n(new H.m("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.I("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.I("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.I("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.I("Link")
x=z.j(0,"Other")
x.d=x.a.I("Other")
this.b=z},
m:{
ip:function(a,b){var z=new V.io()
z.dA(a,!0)
return z}}},
ir:{"^":"p:20;a",
$1:function(a){P.eq(C.q,new V.iq(this.a))}},
iq:{"^":"p:2;a",
$0:function(){var z,y,x
z=C.e.a4(document.documentElement.scrollTop)
y=this.a.style
x=H.d(-0.01*z)+"px"
y.top=x}},
is:{"^":"p:35;a",
$1:function(a){return H.f(a,"$isaA").a===this.a}}}],["","",,D,{"^":"",
fn:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=V.ip("Test 030",!0)
y=W.cp(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.d.u(z.a,y)
x=[P.j]
z.cu(H.b(["A test of the Normal shader for dynamically rendering normal maps."],x))
z.cu(H.b(["\xab[Back to Tests|../]"],x))
w=C.y.d7(document,"testCanvas")
if(w==null)H.Q(P.N("Failed to find an element with the identifier, testCanvas."))
v=E.iG(w,!0,!0,!0,!1)
u=new E.ai()
u.a=""
u.b=!0
x=E.ai
u.sdT(0,O.ds(x))
u.y.b5(u.gfV(),u.gfX())
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
u.sbS(0,null)
u.saM(null)
t=F.eh()
F.bk(t,null,null,1,1,1,0,0,1)
F.bk(t,null,null,1,1,0,1,0,3)
F.bk(t,null,null,1,1,0,0,1,2)
F.bk(t,null,null,1,1,-1,0,0,0)
F.bk(t,null,null,1,1,0,-1,0,0)
F.bk(t,null,null,1,1,0,0,-1,3)
t.av()
u.sbS(0,t)
s=new U.dH()
s.bV(U.a0)
s.b5(s.gek(),s.geC())
s.e=null
s.f=V.bz()
s.r=0
r=v.r
q=new U.j3()
p=U.cs()
p.sbP(0,!0)
p.sbH(6.283185307179586)
p.sbJ(0)
p.sX(0,0)
p.sbI(100)
p.sM(0)
p.sbD(0.5)
q.b=p
o=q.gaq()
p.gp().h(0,o)
p=U.cs()
p.sbP(0,!0)
p.sbH(6.283185307179586)
p.sbJ(0)
p.sX(0,0)
p.sbI(100)
p.sM(0)
p.sbD(0.5)
q.c=p
p.gp().h(0,o)
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
n=new X.al(!1,!1,!1)
m=q.d
q.d=n
p=[X.al]
o=new D.H("modifiers",m,n,q,p)
o.b=!0
q.K(o)
o=q.f
if(o!==!1){q.f=!1
o=new D.H("invertX",o,!1,q,[P.C])
o.b=!0
q.K(o)}o=q.r
if(o!==!1){q.r=!1
o=new D.H("invertY",o,!1,q,[P.C])
o.b=!0
q.K(o)}q.aI(r)
s.h(0,q)
r=v.r
q=new U.j2()
o=U.cs()
o.sbP(0,!0)
o.sbH(6.283185307179586)
o.sbJ(0)
o.sX(0,0)
o.sbI(100)
o.sM(0)
o.sbD(0.2)
q.b=o
o.gp().h(0,q.gaq())
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
n=new X.al(!0,!1,!1)
m=q.c
q.c=n
o=new D.H("modifiers",m,n,q,p)
o.b=!0
q.K(o)
q.aI(r)
s.h(0,q)
r=v.r
q=new U.j4()
q.c=0.01
q.d=0
q.e=0
n=new X.al(!1,!1,!1)
q.b=n
p=new D.H("modifiers",null,n,q,p)
p.b=!0
q.K(p)
q.aI(r)
s.h(0,q)
u.saM(s)
l=new O.hM()
s=$.dX
if(s==null){s=new V.dW(1,0,0,0,1,0,0,0,1)
$.dX=s}l.b=s
l.c=V.bz()
l.d=C.i
l.cm(null)
l.cn(null)
l.dI()
l.r=null
s=v.f
r=s.a
k=r.createTexture()
C.b.au(r,34067,k)
C.b.b2(r,34067,10242,10497)
C.b.b2(r,34067,10243,10497)
C.b.b2(r,34067,10241,9729)
C.b.b2(r,34067,10240,9729)
C.b.au(r,34067,null)
j=new T.eo()
j.a=0
j.b=k
j.c=!1
j.d=0
s.ap(j,k,"../resources/diceBumpMap/posx.png",34069,!1,!1)
s.ap(j,k,"../resources/diceBumpMap/negx.png",34070,!1,!1)
s.ap(j,k,"../resources/diceBumpMap/posy.png",34071,!1,!1)
s.ap(j,k,"../resources/diceBumpMap/negy.png",34072,!1,!1)
s.ap(j,k,"../resources/diceBumpMap/posz.png",34073,!1,!1)
s.ap(j,k,"../resources/diceBumpMap/negz.png",34074,!1,!1)
if(l.d!==C.j){l.d=C.j
l.cm(null)
l.a=null}l.cn(j)
i=X.dG(!0,!0,!1,null,2000,null,0)
h=new V.b5(0.5,0.5,1,1)
if(!i.a.n(0,h)){m=i.a
i.a=h
s=new D.H("color",m,h,i,[V.b5])
s.b=!0
r=i.x
if(!(r==null))r.B(s)}g=new M.h1()
g.sdG(0,O.ds(x))
g.d.b5(g.gem(),g.gen())
g.e=null
g.f=null
g.r=null
g.x=null
f=new X.hR()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.saM(null)
x=f.c
if(!$.l.$2(x,1.0471975511965976)){m=f.c
f.c=1.0471975511965976
x=new D.H("fov",m,1.0471975511965976,f,[P.t])
x.b=!0
f.aD(x)}x=f.d
if(!$.l.$2(x,0.1)){m=f.d
f.d=0.1
x=new D.H("near",m,0.1,f,[P.t])
x.b=!0
f.aD(x)}x=f.e
if(!$.l.$2(x,2000)){m=f.e
f.e=2000
x=new D.H("far",m,2000,f,[P.t])
x.b=!0
f.aD(x)}x=g.a
if(x!==f){if(x!=null)x.gp().R(0,g.ga6())
m=g.a
g.a=f
f.gp().h(0,g.ga6())
x=new D.H("camera",m,g.a,g,[X.dn])
x.b=!0
g.al(x)}g.scU(0,null)
g.scV(null)
g.scV(l)
g.scU(0,i)
g.d.h(0,u)
x=g.a
e=V.ar(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
s=new U.dt()
s.a=e
x.saM(s)
x=v.d
if(x!==g){if(x!=null)x.gp().R(0,v.gbW())
v.d=g
g.gp().h(0,v.gbW())
v.dD()}x=v.z
if(x==null){x=D.D()
v.z=x}s={func:1,ret:-1,args:[D.r]}
r=H.h(new D.kH(z,l),s)
if(x.b==null)x.saW(H.b([],[s]))
x=x.b;(x&&C.a).h(x,r)
V.kO(v)},
kH:{"^":"p:7;a,b",
$1:function(a){var z,y,x,w
H.f(a,"$isr")
z=this.a
y=this.b
x=y.a
w=[P.j]
z.ct("Vertex Shader","glsl",0,H.b((x==null?null:x.c).split("\n"),w))
y=y.a
z.ct("Fragment Shader","glsl",0,H.b((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.G=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dN.prototype
return J.dM.prototype}if(typeof a=="string")return J.bQ.prototype
if(a==null)return J.hn.prototype
if(typeof a=="boolean")return J.hm.prototype
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.a)return a
return J.cb(a)}
J.ca=function(a){if(typeof a=="string")return J.bQ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.a)return a
return J.cb(a)}
J.d6=function(a){if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.a)return a
return J.cb(a)}
J.kt=function(a){if(typeof a=="number")return J.bP.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c1.prototype
return a}
J.d7=function(a){if(typeof a=="string")return J.bQ.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c1.prototype
return a}
J.Z=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.a)return a
return J.cb(a)}
J.M=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.G(a).n(a,b)}
J.ft=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kt(a).a5(a,b)}
J.fu=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kE(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ca(a).w(a,b)}
J.fv=function(a,b,c,d){return J.Z(a).dN(a,b,c,d)}
J.bF=function(a,b){return J.Z(a).eJ(a,b)}
J.dd=function(a,b){return J.Z(a).u(a,b)}
J.ch=function(a,b,c){return J.ca(a).fl(a,b,c)}
J.ci=function(a,b){return J.d6(a).V(a,b)}
J.fw=function(a){return J.Z(a).gfc(a)}
J.aK=function(a){return J.G(a).gP(a)}
J.b2=function(a){return J.d6(a).gL(a)}
J.aL=function(a){return J.ca(a).gl(a)}
J.fx=function(a){return J.Z(a).gh8(a)}
J.fy=function(a){return J.Z(a).ghi(a)}
J.cj=function(a,b){return J.Z(a).aC(a,b)}
J.de=function(a){return J.d6(a).h9(a)}
J.fz=function(a,b,c){return J.d7(a).aT(a,b,c)}
J.fA=function(a){return J.d7(a).hq(a)}
J.a1=function(a){return J.G(a).i(a)}
I.aJ=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.bG.prototype
C.m=W.co.prototype
C.x=W.cq.prototype
C.d=W.aC.prototype
C.I=W.fU.prototype
C.K=W.hd.prototype
C.y=W.hf.prototype
C.M=J.A.prototype
C.a=J.aN.prototype
C.N=J.dM.prototype
C.h=J.dN.prototype
C.e=J.bP.prototype
C.c=J.bQ.prototype
C.U=J.bw.prototype
C.Y=W.hJ.prototype
C.C=J.hS.prototype
C.D=W.i3.prototype
C.b=P.cE.prototype
C.u=W.iz.prototype
C.o=W.iA.prototype
C.k=W.iB.prototype
C.v=J.c1.prototype
C.E=W.bi.prototype
C.F=W.jh.prototype
C.G=new P.hQ()
C.H=new P.j6()
C.f=new P.jO()
C.i=new A.bI(0,"ColorSourceType.None")
C.p=new A.bI(1,"ColorSourceType.Solid")
C.n=new A.bI(2,"ColorSourceType.Texture2D")
C.j=new A.bI(3,"ColorSourceType.TextureCube")
C.q=new P.b6(0)
C.J=new P.b6(5e6)
C.L=new P.hh("element",!0,!1,!1,!1)
C.O=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.P=function(hooks) {
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

C.Q=function(getTagFallback) {
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
C.R=function() {
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
C.S=function(hooks) {
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
C.T=function(hooks) {
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
C.V=H.b(I.aJ(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.j])
C.W=H.b(I.aJ(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.j])
C.X=H.b(I.aJ([]),[P.j])
C.B=H.b(I.aJ([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.r=H.b(I.aJ(["bind","if","ref","repeat","syntax"]),[P.j])
C.t=H.b(I.aJ(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.j])
C.w=new P.j5(!1)
$.ah=0
$.b4=null
$.di=null
$.cY=!1
$.fl=null
$.fg=null
$.fq=null
$.c9=null
$.cd=null
$.d8=null
$.aW=null
$.bm=null
$.bn=null
$.cZ=!1
$.F=C.f
$.aq=null
$.ct=null
$.dE=null
$.dD=null
$.dz=null
$.dy=null
$.dx=null
$.dw=null
$.l=V.hE()
$.dX=null
$.dY=null
$.e5=null
$.e6=null
$.ed=null
$.eK=null
$.eN=null
$.eM=null
$.eL=null
$.e4=null
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
I.$lazy(y,x,w)}})(["dv","$get$dv",function(){return H.fk("_$dart_dartClosure")},"cw","$get$cw",function(){return H.fk("_$dart_js")},"eu","$get$eu",function(){return H.an(H.c_({
toString:function(){return"$receiver$"}}))},"ev","$get$ev",function(){return H.an(H.c_({$method$:null,
toString:function(){return"$receiver$"}}))},"ew","$get$ew",function(){return H.an(H.c_(null))},"ex","$get$ex",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eB","$get$eB",function(){return H.an(H.c_(void 0))},"eC","$get$eC",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ez","$get$ez",function(){return H.an(H.eA(null))},"ey","$get$ey",function(){return H.an(function(){try{null.$method$}catch(z){return z.message}}())},"eE","$get$eE",function(){return H.an(H.eA(void 0))},"eD","$get$eD",function(){return H.an(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cV","$get$cV",function(){return P.ji()},"bo","$get$bo",function(){return[]},"f7","$get$f7",function(){return P.i7("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"du","$get$du",function(){return{}},"eX","$get$eX",function(){return P.dR(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.j)},"cW","$get$cW",function(){return P.hu(P.j,P.bu)},"eQ","$get$eQ",function(){return Z.a9(0)},"eO","$get$eO",function(){return Z.a9(511)},"aw","$get$aw",function(){return Z.a9(1)},"av","$get$av",function(){return Z.a9(2)},"au","$get$au",function(){return Z.a9(4)},"ax","$get$ax",function(){return Z.a9(8)},"ay","$get$ay",function(){return Z.a9(16)},"bg","$get$bg",function(){return Z.a9(32)},"bh","$get$bh",function(){return Z.a9(64)},"eP","$get$eP",function(){return Z.a9(96)},"aU","$get$aU",function(){return Z.a9(128)},"aT","$get$aT",function(){return Z.a9(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,args:[D.r]},{func:1,ret:-1,opt:[D.r]},{func:1,ret:P.B},{func:1,ret:-1},{func:1,ret:-1,args:[W.ae]},{func:1,ret:-1,args:[P.x,[P.o,E.ai]]},{func:1,ret:P.B,args:[F.X]},{func:1,ret:P.B,args:[D.r]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aS]},{func:1,ret:-1,args:[W.W]},{func:1,ret:-1,args:[W.b9]},{func:1,ret:P.B,args:[,]},{func:1,ret:P.B,args:[,,]},{func:1,ret:P.j,args:[P.x]},{func:1,ret:P.C,args:[W.w]},{func:1,ret:-1,args:[P.x,[P.o,U.a0]]},{func:1,args:[,]},{func:1,ret:P.C,args:[P.j]},{func:1,ret:P.t},{func:1,ret:P.B,args:[W.W]},{func:1,ret:P.C,args:[W.J,P.j,P.j,W.bD]},{func:1,ret:P.B,args:[{func:1,ret:-1,args:[D.r]}]},{func:1,ret:P.C,args:[W.am]},{func:1,ret:W.J,args:[W.w]},{func:1,ret:P.C,args:[P.t,P.t]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:-1,args:[W.w,W.w]},{func:1,ret:P.j,args:[P.j]},{func:1,args:[W.W]},{func:1,ret:[P.az,,],args:[,]},{func:1,ret:P.B,args:[F.aF,P.t,P.t]},{func:1,ret:P.B,args:[,],opt:[,]},{func:1,ret:P.B,args:[{func:1,ret:-1}]},{func:1,ret:P.B,args:[P.aR]},{func:1,ret:P.C,args:[V.aA]},{func:1,args:[P.j]},{func:1,args:[,P.j]},{func:1,ret:P.B,args:[P.a4]}]
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
if(x==y)H.kR(d||a)
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
Isolate.aJ=a.aJ
Isolate.d4=a.d4
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
if(typeof dartMainRunner==="function")dartMainRunner(D.fn,[])
else D.fn([])})})()
//# sourceMappingURL=test.dart.js.map
