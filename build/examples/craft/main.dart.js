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
b6.$isc=b5
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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isJ)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
var d=supportsDirectProtoAccess&&b2!="c"
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.ej"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.ej"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.ej(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.c3=function(){}
var dart=[["","",,H,{"^":"",ne:{"^":"c;a"}}],["","",,J,{"^":"",
en:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
d3:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.em==null){H.mQ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.cV("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dx()]
if(v!=null)return v
v=H.mU(a)
if(v!=null)return v
if(typeof a=="function")return C.a_
y=Object.getPrototypeOf(a)
if(y==null)return C.F
if(y===Object.prototype)return C.F
if(typeof w=="function"){Object.defineProperty(w,$.$get$dx(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
J:{"^":"c;",
t:function(a,b){return a===b},
gV:function(a){return H.bR(a)},
i:["fL",function(a){return"Instance of '"+H.bm(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
iR:{"^":"J;",
i:function(a){return String(a)},
gV:function(a){return a?519018:218159},
$isa2:1},
eV:{"^":"J;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gV:function(a){return 0},
$isF:1},
dy:{"^":"J;",
gV:function(a){return 0},
i:["fM",function(a){return String(a)}]},
jt:{"^":"dy;"},
cW:{"^":"dy;"},
cm:{"^":"dy;",
i:function(a){var z=a[$.$get$eB()]
if(z==null)return this.fM(a)
return"JavaScript function for "+H.l(J.az(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isds:1},
bg:{"^":"J;$ti",
h:function(a,b){H.y(b,H.r(a,0))
if(!!a.fixed$length)H.t(P.U("add"))
a.push(b)},
Y:function(a,b){var z
if(!!a.fixed$length)H.t(P.U("remove"))
for(z=0;z<a.length;++z)if(J.Y(a[z],b)){a.splice(z,1)
return!0}return!1},
aQ:function(a,b){var z,y
H.d(b,"$isn",[H.r(a,0)],"$asn")
if(!!a.fixed$length)H.t(P.U("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.A)(b),++y)a.push(b[y])},
a5:function(a,b){var z,y
H.o(b,{func:1,ret:-1,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.be(a))}},
C:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.l(z,y,H.l(a[y]))
return z.join(b)},
kp:function(a){return this.C(a,"")},
kj:function(a,b,c,d){var z,y,x
H.y(b,d)
H.o(c,{func:1,ret:d,args:[d,H.r(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.e(P.be(a))}return y},
an:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fK:function(a,b,c){if(b<0||b>a.length)throw H.e(P.a_(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.a_(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.r(a,0)])
return H.b(a.slice(b,c),[H.r(a,0)])},
gaV:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.iP())},
av:function(a,b){var z
for(z=0;z<a.length;++z)if(J.Y(a[z],b))return!0
return!1},
i:function(a){return P.dw(a,"[","]")},
gX:function(a){return new J.au(a,a.length,0,[H.r(a,0)])},
gV:function(a){return H.bR(a)},
gq:function(a){return a.length},
sq:function(a,b){if(!!a.fixed$length)H.t(P.U("set length"))
if(b<0)throw H.e(P.a_(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.aX(a,b))
if(b>=a.length||b<0)throw H.e(H.aX(a,b))
return a[b]},
l:function(a,b,c){H.y(c,H.r(a,0))
if(!!a.immutable$list)H.t(P.U("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.aX(a,b))
if(b>=a.length||b<0)throw H.e(H.aX(a,b))
a[b]=c},
$isan:1,
$asan:I.c3,
$isn:1,
$isa:1,
n:{
iQ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.dd(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.a_(a,0,4294967295,"length",null))
return J.eS(new Array(a),b)},
eS:function(a,b){return J.cM(H.b(a,[b]))},
cM:function(a){H.cz(a)
a.fixed$length=Array
return a}}},
nd:{"^":"bg;$ti"},
au:{"^":"c;a,b,c,0d,$ti",
sdE:function(a){this.d=H.y(a,H.r(this,0))},
gO:function(){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.A(z))
x=this.c
if(x>=y){this.sdE(null)
return!1}this.sdE(z[x]);++this.c
return!0},
$isb5:1},
cN:{"^":"J;",
d_:function(a,b){var z
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=C.e.gce(b)
if(this.gce(a)===z)return 0
if(this.gce(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gce:function(a){return a===0?1/a<0:a<0},
af:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.e(P.U(""+a+".toInt()"))},
bh:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.U(""+a+".floor()"))},
ay:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.U(""+a+".round()"))},
jV:function(a,b,c){if(C.e.d_(b,c)>0)throw H.e(H.ah(b))
if(this.d_(a,b)<0)return b
if(this.d_(a,c)>0)return c
return a},
fk:function(a,b){var z
if(b>20)throw H.e(P.a_(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gce(a))return"-"+z
return z},
bE:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.e(P.a_(b,2,36,"radix",null))
z=a.toString(b)
if(C.c.Z(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.t(P.U("Unexpected toString result: "+z))
x=y.length
if(1>=x)return H.f(y,1)
z=y[1]
if(3>=x)return H.f(y,3)
w=+y[3]
x=y[2]
if(x!=null){z+=x
w-=x.length}return z+C.c.j("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gV:function(a){return a&0x1FFFFFFF},
bk:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fO:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.eh(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.eh(a,b)},
eh:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.U("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
fJ:function(a,b){if(b<0)throw H.e(H.ah(b))
return b>31?0:a<<b>>>0},
b9:function(a,b){var z
if(a>0)z=this.ef(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
j3:function(a,b){if(b<0)throw H.e(H.ah(b))
return this.ef(a,b)},
ef:function(a,b){return b>31?0:a>>>b},
L:function(a,b){if(typeof b!=="number")throw H.e(H.ah(b))
return a<b},
$isx:1,
$isak:1},
eU:{"^":"cN;",
dl:function(a,b){var z=this.fJ(1,b-1)
return((a&z-1)>>>0)-((a&z)>>>0)},
$isj:1},
eT:{"^":"cN;"},
cO:{"^":"J;",
Z:function(a,b){if(b<0)throw H.e(H.aX(a,b))
if(b>=a.length)H.t(H.aX(a,b))
return a.charCodeAt(b)},
J:function(a,b){if(b>=a.length)throw H.e(H.aX(a,b))
return a.charCodeAt(b)},
m:function(a,b){H.N(b)
if(typeof b!=="string")throw H.e(P.dd(b,null,null))
return a+b},
bj:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ah(b))
c=P.b8(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ai:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ah(c))
if(typeof c!=="number")return c.L()
if(c<0||c>a.length)throw H.e(P.a_(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ah:function(a,b){return this.ai(a,b,0)},
w:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ah(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.L()
if(b<0)throw H.e(P.cR(b,null,null))
if(b>c)throw H.e(P.cR(b,null,null))
if(c>a.length)throw H.e(P.cR(c,null,null))
return a.substring(b,c)},
aY:function(a,b){return this.w(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.K)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
kD:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
aW:function(a,b){return this.kD(a,b," ")},
f2:function(a,b,c){var z
if(c<0||c>a.length)throw H.e(P.a_(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
f1:function(a,b){return this.f2(a,b,0)},
k_:function(a,b,c){if(c>a.length)throw H.e(P.a_(c,0,a.length,null,null))
return H.hN(a,b,c)},
i:function(a){return a},
gV:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gq:function(a){return a.length},
$isan:1,
$asan:I.c3,
$isfb:1,
$isp:1}}],["","",,H,{"^":"",
d4:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
iP:function(){return new P.ka("No element")},
a6:{"^":"kG;a",
gq:function(a){return this.a.length},
k:function(a,b){return C.c.Z(this.a,b)},
$ase5:function(){return[P.j]},
$asV:function(){return[P.j]},
$asn:function(){return[P.j]},
$asa:function(){return[P.j]}},
it:{"^":"n;"},
eZ:{"^":"c;a,b,c,0d,$ti",
sbo:function(a){this.d=H.y(a,H.r(this,0))},
gO:function(){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.aH(z)
x=y.gq(z)
if(this.b!==x)throw H.e(P.be(z))
w=this.c
if(w>=x){this.sbo(null)
return!1}this.sbo(y.an(z,w));++this.c
return!0},
$isb5:1},
j7:{"^":"n;a,b,$ti",
gX:function(a){return new H.j8(J.bB(this.a),this.b,this.$ti)},
gq:function(a){return J.aI(this.a)},
an:function(a,b){return this.b.$1(J.db(this.a,b))},
$asn:function(a,b){return[b]}},
j8:{"^":"b5;0a,b,c,$ti",
sbo:function(a){this.a=H.y(a,H.r(this,1))},
D:function(){var z=this.b
if(z.D()){this.sbo(this.c.$1(z.gO()))
return!0}this.sbo(null)
return!1},
gO:function(){return this.a},
$asb5:function(a,b){return[b]}},
l8:{"^":"n;a,b,$ti",
gX:function(a){return new H.l9(J.bB(this.a),this.b,this.$ti)}},
l9:{"^":"b5;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gO()))return!0
return!1},
gO:function(){return this.a.gO()}},
cJ:{"^":"c;$ti"},
e5:{"^":"c;$ti",
l:function(a,b,c){H.y(c,H.ai(this,"e5",0))
throw H.e(P.U("Cannot modify an unmodifiable list"))}},
kG:{"^":"cP+e5;"}}],["","",,H,{"^":"",
ih:function(){throw H.e(P.U("Cannot modify unmodifiable Map"))},
bA:function(a){var z,y
z=H.N(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
mL:function(a){return init.types[H.X(a)]},
mT:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isaL},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.az(a)
if(typeof z!=="string")throw H.e(H.ah(a))
return z},
bR:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
fg:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.N(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.a_(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.c.J(w,u)|32)>x)return}return parseInt(a,b)},
bm:function(a){return H.jx(a)+H.eh(H.bc(a),0,null)},
jx:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.T||!!z.$iscW){u=C.A(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bA(w.length>1&&C.c.J(w,0)===36?C.c.aY(w,1):w)},
jy:function(){if(!!self.location)return self.location.href
return},
ff:function(a){var z,y,x,w,v
H.cz(a)
z=J.aI(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jG:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.ah(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.b9(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.e(H.ah(w))}return H.ff(z)},
fh:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.ah(x))
if(x<0)throw H.e(H.ah(x))
if(x>65535)return H.jG(a)}return H.ff(a)},
jH:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cr:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.b9(z,10))>>>0,56320|z&1023)}}throw H.e(P.a_(a,0,1114111,null,null))},
bl:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jF:function(a){var z=H.bl(a).getFullYear()+0
return z},
jD:function(a){var z=H.bl(a).getMonth()+1
return z},
jz:function(a){var z=H.bl(a).getDate()+0
return z},
jA:function(a){var z=H.bl(a).getHours()+0
return z},
jC:function(a){var z=H.bl(a).getMinutes()+0
return z},
jE:function(a){var z=H.bl(a).getSeconds()+0
return z},
jB:function(a){var z=H.bl(a).getMilliseconds()+0
return z},
i:function(a){throw H.e(H.ah(a))},
f:function(a,b){if(a==null)J.aI(a)
throw H.e(H.aX(a,b))},
aX:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aY(!0,b,"index",null)
z=H.X(J.aI(a))
if(!(b<0)){if(typeof z!=="number")return H.i(z)
y=b>=z}else y=!0
if(y)return P.bK(b,a,"index",null,z)
return P.cR(b,"index",null)},
mH:function(a,b,c){if(a>c)return new P.cs(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cs(a,c,!0,b,"end","Invalid value")
return new P.aY(!0,b,"end",null)},
ah:function(a){return new P.aY(!0,a,null,null)},
mC:function(a){if(typeof a!=="number")throw H.e(H.ah(a))
return a},
e:function(a){var z
if(a==null)a=new P.fa()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hP})
z.name=""}else z.toString=H.hP
return z},
hP:function(){return J.az(this.dartException)},
t:function(a){throw H.e(a)},
A:function(a){throw H.e(P.be(a))},
ay:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.n3(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.b9(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dz(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.f9(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fC()
u=$.$get$fD()
t=$.$get$fE()
s=$.$get$fF()
r=$.$get$fJ()
q=$.$get$fK()
p=$.$get$fH()
$.$get$fG()
o=$.$get$fM()
n=$.$get$fL()
m=v.aq(y)
if(m!=null)return z.$1(H.dz(H.N(y),m))
else{m=u.aq(y)
if(m!=null){m.method="call"
return z.$1(H.dz(H.N(y),m))}else{m=t.aq(y)
if(m==null){m=s.aq(y)
if(m==null){m=r.aq(y)
if(m==null){m=q.aq(y)
if(m==null){m=p.aq(y)
if(m==null){m=s.aq(y)
if(m==null){m=o.aq(y)
if(m==null){m=n.aq(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.f9(H.N(y),m))}}return z.$1(new H.kF(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.fr()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aY(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.fr()
return a},
bx:function(a){var z
if(a==null)return new H.hg(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.hg(a)},
mK:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.l(0,a[y],a[x])}return b},
mS:function(a,b,c,d,e,f){H.h(a,"$isds")
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.u("Unsupported number of arguments for wrapped closure"))},
bv:function(a,b){var z
H.X(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mS)
a.$identity=z
return z},
ic:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.I(d).$isa){z.$reflectionInfo=d
x=H.jL(z).r}else x=d
w=e?Object.create(new H.kc().constructor.prototype):Object.create(new H.df(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aA
if(typeof u!=="number")return u.m()
$.aA=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.ey(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.mL,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.eu:H.dg
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.e("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ey(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
i9:function(a,b,c,d){var z=H.dg
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ey:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ib(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.i9(y,!w,z,b)
if(y===0){w=$.aA
if(typeof w!=="number")return w.m()
$.aA=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bC
if(v==null){v=H.cC("self")
$.bC=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aA
if(typeof w!=="number")return w.m()
$.aA=w+1
t+=w
w="return function("+t+"){return this."
v=$.bC
if(v==null){v=H.cC("self")
$.bC=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
ia:function(a,b,c,d){var z,y
z=H.dg
y=H.eu
switch(b?-1:a){case 0:throw H.e(H.jU("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ib:function(a,b){var z,y,x,w,v,u,t,s
z=$.bC
if(z==null){z=H.cC("self")
$.bC=z}y=$.et
if(y==null){y=H.cC("receiver")
$.et=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ia(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aA
if(typeof y!=="number")return y.m()
$.aA=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aA
if(typeof y!=="number")return y.m()
$.aA=y+1
return new Function(z+y+"}")()},
ej:function(a,b,c,d,e,f,g){return H.ic(a,b,H.X(c),d,!!e,!!f,g)},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aw(a,"String"))},
mI:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aw(a,"double"))},
mY:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aw(a,"num"))},
hC:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aw(a,"bool"))},
X:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aw(a,"int"))},
hL:function(a,b){throw H.e(H.aw(a,H.bA(H.N(b).substring(3))))},
n_:function(a,b){throw H.e(H.i7(a,H.bA(H.N(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.hL(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.n_(a,b)},
cz:function(a){if(a==null)return a
if(!!J.I(a).$isa)return a
throw H.e(H.aw(a,"List<dynamic>"))},
hI:function(a,b){var z
if(a==null)return a
z=J.I(a)
if(!!z.$isa)return a
if(z[b])return a
H.hL(a,b)},
hD:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.X(z)]
else return a.$S()}return},
cw:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hD(J.I(a))
if(z==null)return!1
return H.hr(z,null,b,null)},
o:function(a,b){var z,y
if(a==null)return a
if($.ee)return a
$.ee=!0
try{if(H.cw(a,b))return a
z=H.d7(b)
y=H.aw(a,z)
throw H.e(y)}finally{$.ee=!1}},
ek:function(a,b){if(a!=null&&!H.ei(a,b))H.t(H.aw(a,H.d7(b)))
return a},
hx:function(a){var z,y
z=J.I(a)
if(!!z.$isq){y=H.hD(z)
if(y!=null)return H.d7(y)
return"Closure"}return H.bm(a)},
n2:function(a){throw H.e(new P.ik(H.N(a)))},
hF:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bc:function(a){if(a==null)return
return a.$ti},
nB:function(a,b,c){return H.bz(a["$as"+H.l(c)],H.bc(b))},
cy:function(a,b,c,d){var z
H.N(c)
H.X(d)
z=H.bz(a["$as"+H.l(c)],H.bc(b))
return z==null?null:z[d]},
ai:function(a,b,c){var z
H.N(b)
H.X(c)
z=H.bz(a["$as"+H.l(b)],H.bc(a))
return z==null?null:z[c]},
r:function(a,b){var z
H.X(b)
z=H.bc(a)
return z==null?null:z[b]},
d7:function(a){return H.ba(a,null)},
ba:function(a,b){var z,y
H.d(b,"$isa",[P.p],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bA(a[0].builtin$cls)+H.eh(a,1,b)
if(typeof a=="function")return H.bA(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.X(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.l(b[y])}if('func' in a)return H.mr(a,b)
if('futureOr' in a)return"FutureOr<"+H.ba("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mr:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.p]
H.d(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.c.m(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.ba(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.ba(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.ba(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.ba(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mJ(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.N(z[l])
n=n+m+H.ba(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
eh:function(a,b,c){var z,y,x,w,v,u
H.d(c,"$isa",[P.p],"$asa")
if(a==null)return""
z=new P.ap("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ba(u,c)}return"<"+z.i(0)+">"},
bz:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c2:function(a,b,c,d){var z,y
H.N(b)
H.cz(c)
H.N(d)
if(a==null)return!1
z=H.bc(a)
y=J.I(a)
if(y[b]==null)return!1
return H.hA(H.bz(y[d],z),null,c,null)},
d:function(a,b,c,d){H.N(b)
H.cz(c)
H.N(d)
if(a==null)return a
if(H.c2(a,b,c,d))return a
throw H.e(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bA(b.substring(3))+H.eh(c,0,null),init.mangledGlobalNames)))},
hA:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.at(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.at(a[y],b,c[y],d))return!1
return!0},
nz:function(a,b,c){return a.apply(b,H.bz(J.I(b)["$as"+H.l(c)],H.bc(b)))},
hH:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="F"||a===-1||a===-2||H.hH(z)}return!1},
ei:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="F"||b===-1||b===-2||H.hH(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ei(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cw(a,b)}z=J.I(a).constructor
y=H.bc(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.at(z,null,b,null)},
y:function(a,b){if(a!=null&&!H.ei(a,b))throw H.e(H.aw(a,H.d7(b)))
return a},
at:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.at(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.hr(a,b,c,d)
if('func' in a)return c.builtin$cls==="ds"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.at("type" in a?a.type:null,b,x,d)
else if(H.at(a,b,x,d))return!0
else{if(!('$is'+"bF" in y.prototype))return!1
w=y.prototype["$as"+"bF"]
v=H.bz(w,z?a.slice(1):null)
return H.at(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hA(H.bz(r,z),b,u,d)},
hr:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.at(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.at(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.at(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.at(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.mX(m,b,l,d)},
mX:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.at(c[w],d,a[w],b))return!1}return!0},
nA:function(a,b,c){Object.defineProperty(a,H.N(b),{value:c,enumerable:false,writable:true,configurable:true})},
mU:function(a){var z,y,x,w,v,u
z=H.N($.hG.$1(a))
y=$.d2[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d5[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.N($.hz.$2(a,z))
if(z!=null){y=$.d2[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d5[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.d6(x)
$.d2[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.d5[z]=x
return x}if(v==="-"){u=H.d6(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hK(a,x)
if(v==="*")throw H.e(P.cV(z))
if(init.leafTags[z]===true){u=H.d6(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hK(a,x)},
hK:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.en(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
d6:function(a){return J.en(a,!1,null,!!a.$isaL)},
mW:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.d6(z)
else return J.en(z,c,null,null)},
mQ:function(){if(!0===$.em)return
$.em=!0
H.mR()},
mR:function(){var z,y,x,w,v,u,t,s
$.d2=Object.create(null)
$.d5=Object.create(null)
H.mM()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hM.$1(v)
if(u!=null){t=H.mW(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mM:function(){var z,y,x,w,v,u,t
z=C.X()
z=H.bu(C.U,H.bu(C.Z,H.bu(C.z,H.bu(C.z,H.bu(C.Y,H.bu(C.V,H.bu(C.W(C.A),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hG=new H.mN(v)
$.hz=new H.mO(u)
$.hM=new H.mP(t)},
bu:function(a,b){return a(b)||b},
hN:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hO:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ig:{"^":"c;$ti",
i:function(a){return P.dA(this)},
l:function(a,b,c){H.y(b,H.r(this,0))
H.y(c,H.r(this,1))
return H.ih()},
$isD:1},
ii:{"^":"ig;a,b,c,$ti",
gq:function(a){return this.a},
bZ:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k:function(a,b){if(!this.bZ(b))return
return this.dY(b)},
dY:function(a){return this.b[H.N(a)]},
a5:function(a,b){var z,y,x,w,v
z=H.r(this,1)
H.o(b,{func:1,ret:-1,args:[H.r(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.y(this.dY(v),z))}}},
jK:{"^":"c;a,b,c,d,e,f,r,0x",n:{
jL:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cM(z)
y=z[0]
x=z[1]
return new H.jK(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ks:{"^":"c;a,b,c,d,e,f",
aq:function(a){var z,y,x
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
if(z==null)z=H.b([],[P.p])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ks(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cU:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fI:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jo:{"^":"a7;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
n:{
f9:function(a,b){return new H.jo(a,b==null?null:b.method)}}},
iU:{"^":"a7;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
n:{
dz:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iU(a,y,z?null:b.receiver)}}},
kF:{"^":"a7;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
n3:{"^":"q:21;a",
$1:function(a){if(!!J.I(a).$isa7)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
hg:{"^":"c;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaR:1},
q:{"^":"c;",
i:function(a){return"Closure '"+H.bm(this).trim()+"'"},
gfs:function(){return this},
$isds:1,
gfs:function(){return this}},
fu:{"^":"q;"},
kc:{"^":"fu;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bA(z)+"'"}},
df:{"^":"fu;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.df))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gV:function(a){var z,y
z=this.c
if(z==null)y=H.bR(this.a)
else y=typeof z!=="object"?J.bd(z):H.bR(z)
return(y^H.bR(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bm(z)+"'")},
n:{
dg:function(a){return a.a},
eu:function(a){return a.c},
cC:function(a){var z,y,x,w,v
z=new H.df("self","target","receiver","name")
y=J.cM(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kt:{"^":"a7;a",
i:function(a){return this.a},
n:{
aw:function(a,b){return new H.kt("TypeError: "+H.l(P.cH(a))+": type '"+H.hx(a)+"' is not a subtype of type '"+b+"'")}}},
i6:{"^":"a7;a",
i:function(a){return this.a},
n:{
i7:function(a,b){return new H.i6("CastError: "+H.l(P.cH(a))+": type '"+H.hx(a)+"' is not a subtype of type '"+b+"'")}}},
jT:{"^":"a7;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
n:{
jU:function(a){return new H.jT(a)}}},
aM:{"^":"j3;a,0b,0c,0d,0e,0f,r,$ti",
gq:function(a){return this.a},
bZ:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dU(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dU(y,a)}else return this.kn(a)},
kn:function(a){var z=this.d
if(z==null)return!1
return this.dd(this.cB(z,J.bd(a)&0x3ffffff),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bP(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bP(w,b)
x=y==null?null:y.b
return x}else return this.ko(b)},
ko:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cB(z,J.bd(a)&0x3ffffff)
x=this.dd(y,a)
if(x<0)return
return y[x].b},
l:function(a,b,c){var z,y,x,w,v,u
H.y(b,H.r(this,0))
H.y(c,H.r(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cF()
this.b=z}this.dJ(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cF()
this.c=y}this.dJ(y,b,c)}else{x=this.d
if(x==null){x=this.cF()
this.d=x}w=J.bd(b)&0x3ffffff
v=this.cB(x,w)
if(v==null)this.cL(x,w,[this.cG(b,c)])
else{u=this.dd(v,b)
if(u>=0)v[u].b=c
else v.push(this.cG(b,c))}}},
a5:function(a,b){var z,y
H.o(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.be(this))
z=z.c}},
dJ:function(a,b,c){var z
H.y(b,H.r(this,0))
H.y(c,H.r(this,1))
z=this.bP(a,b)
if(z==null)this.cL(a,b,this.cG(b,c))
else z.b=c},
cG:function(a,b){var z,y
z=new H.iY(H.y(a,H.r(this,0)),H.y(b,H.r(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
dd:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Y(a[y].a,b))return y
return-1},
i:function(a){return P.dA(this)},
bP:function(a,b){return a[b]},
cB:function(a,b){return a[b]},
cL:function(a,b,c){a[b]=c},
hH:function(a,b){delete a[b]},
dU:function(a,b){return this.bP(a,b)!=null},
cF:function(){var z=Object.create(null)
this.cL(z,"<non-identifier-key>",z)
this.hH(z,"<non-identifier-key>")
return z},
$iseW:1},
iY:{"^":"c;a,b,0c,0d"},
eX:{"^":"it;a,$ti",
gq:function(a){return this.a.a},
gX:function(a){var z,y
z=this.a
y=new H.iZ(z,z.r,this.$ti)
y.c=z.e
return y}},
iZ:{"^":"c;a,b,0c,0d,$ti",
sdF:function(a){this.d=H.y(a,H.r(this,0))},
gO:function(){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.be(z))
else{z=this.c
if(z==null){this.sdF(null)
return!1}else{this.sdF(z.a)
this.c=this.c.c
return!0}}},
$isb5:1},
mN:{"^":"q:21;a",
$1:function(a){return this.a(a)}},
mO:{"^":"q:35;a",
$2:function(a,b){return this.a(a,b)}},
mP:{"^":"q:50;a",
$1:function(a){return this.a(H.N(a))}},
iS:{"^":"c;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isfb:1,
$isjM:1,
n:{
iT:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.e(P.T("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mJ:function(a){return J.eS(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mZ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bs:function(a){var z,y,x
z=J.I(a)
if(!!z.$isan)return a
y=new Array(z.gq(a))
y.fixed$length=Array
for(x=0;x<z.gq(a);++x)C.a.l(y,x,z.k(a,x))
return y},
jk:function(a){return new Int8Array(a)},
aW:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.aX(b,a))},
ml:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.e(H.mH(a,b,c))
return b},
dG:{"^":"J;",$isdG:1,$isku:1,"%":";ArrayBufferView;dF|hc|hd|jl|he|hf|bj"},
dF:{"^":"dG;",
gq:function(a){return a.length},
$isan:1,
$asan:I.c3,
$isaL:1,
$asaL:I.c3},
jl:{"^":"hd;",
k:function(a,b){H.aW(b,a,a.length)
return a[b]},
l:function(a,b,c){H.mI(c)
H.aW(b,a,a.length)
a[b]=c},
$ascJ:function(){return[P.x]},
$asV:function(){return[P.x]},
$isn:1,
$asn:function(){return[P.x]},
$isa:1,
$asa:function(){return[P.x]},
"%":"Float32Array"},
bj:{"^":"hf;",
l:function(a,b,c){H.X(c)
H.aW(b,a,a.length)
a[b]=c},
$ascJ:function(){return[P.j]},
$asV:function(){return[P.j]},
$isn:1,
$asn:function(){return[P.j]},
$isa:1,
$asa:function(){return[P.j]}},
nf:{"^":"bj;",
k:function(a,b){H.aW(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ng:{"^":"bj;",
k:function(a,b){H.aW(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nh:{"^":"bj;",
k:function(a,b){H.aW(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ni:{"^":"bj;",
k:function(a,b){H.aW(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nj:{"^":"bj;",
gq:function(a){return a.length},
k:function(a,b){H.aW(b,a,a.length)
return a[b]},
$isnq:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
dH:{"^":"bj;",
gq:function(a){return a.length},
k:function(a,b){H.aW(b,a,a.length)
return a[b]},
$isdH:1,
$isM:1,
"%":";Uint8Array"},
hc:{"^":"dF+V;"},
hd:{"^":"hc+cJ;"},
he:{"^":"dF+V;"},
hf:{"^":"he+cJ;"}}],["","",,P,{"^":"",
ld:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mz()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bv(new P.lf(z),1)).observe(y,{childList:true})
return new P.le(z,y,x)}else if(self.setImmediate!=null)return P.mA()
return P.mB()},
nt:[function(a){self.scheduleImmediate(H.bv(new P.lg(H.o(a,{func:1,ret:-1})),0))},"$1","mz",4,0,9],
nu:[function(a){self.setImmediate(H.bv(new P.lh(H.o(a,{func:1,ret:-1})),0))},"$1","mA",4,0,9],
nv:[function(a){P.dU(C.p,H.o(a,{func:1,ret:-1}))},"$1","mB",4,0,9],
dU:function(a,b){var z
H.o(b,{func:1,ret:-1})
z=C.e.a6(a.a,1000)
return P.lS(z<0?0:z,b)},
fz:function(a,b){var z
H.o(b,{func:1,ret:-1,args:[P.aq]})
z=C.e.a6(a.a,1000)
return P.lT(z<0?0:z,b)},
mv:function(a,b){if(H.cw(a,{func:1,args:[P.c,P.aR]}))return H.o(a,{func:1,ret:null,args:[P.c,P.aR]})
if(H.cw(a,{func:1,args:[P.c]}))return H.o(a,{func:1,ret:null,args:[P.c]})
throw H.e(P.dd(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mu:function(){var z,y
for(;z=$.bt,z!=null;){$.c0=null
y=z.b
$.bt=y
if(y==null)$.c_=null
z.a.$0()}},
ny:[function(){$.ef=!0
try{P.mu()}finally{$.c0=null
$.ef=!1
if($.bt!=null)$.$get$ea().$1(P.hB())}},"$0","hB",0,0,3],
hw:function(a){var z=new P.h5(H.o(a,{func:1,ret:-1}))
if($.bt==null){$.c_=z
$.bt=z
if(!$.ef)$.$get$ea().$1(P.hB())}else{$.c_.b=z
$.c_=z}},
my:function(a){var z,y,x
H.o(a,{func:1,ret:-1})
z=$.bt
if(z==null){P.hw(a)
$.c0=$.c_
return}y=new P.h5(a)
x=$.c0
if(x==null){y.b=z
$.c0=y
$.bt=y}else{y.b=x.b
x.b=y
$.c0=y
if(y.b==null)$.c_=y}},
n0:function(a){var z,y
z={func:1,ret:-1}
H.o(a,z)
y=$.O
if(C.k===y){P.d1(null,null,C.k,a)
return}y.toString
P.d1(null,null,y,H.o(y.cW(a),z))},
dT:function(a,b){var z,y
z={func:1,ret:-1}
H.o(b,z)
y=$.O
if(y===C.k){y.toString
return P.dU(a,b)}return P.dU(a,H.o(y.cW(b),z))},
cT:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aq]}
H.o(b,z)
y=$.O
if(y===C.k){y.toString
return P.fz(a,b)}x=y.en(b,P.aq)
$.O.toString
return P.fz(a,H.o(x,z))},
d0:function(a,b,c,d,e){var z={}
z.a=d
P.my(new P.mw(z,e))},
hs:function(a,b,c,d,e){var z,y
H.o(d,{func:1,ret:e})
y=$.O
if(y===c)return d.$0()
$.O=c
z=y
try{y=d.$0()
return y}finally{$.O=z}},
ht:function(a,b,c,d,e,f,g){var z,y
H.o(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.O
if(y===c)return d.$1(e)
$.O=c
z=y
try{y=d.$1(e)
return y}finally{$.O=z}},
mx:function(a,b,c,d,e,f,g,h,i){var z,y
H.o(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.O
if(y===c)return d.$2(e,f)
$.O=c
z=y
try{y=d.$2(e,f)
return y}finally{$.O=z}},
d1:function(a,b,c,d){var z
H.o(d,{func:1,ret:-1})
z=C.k!==c
if(z)d=!(!z||!1)?c.cW(d):c.jR(d,-1)
P.hw(d)},
lf:{"^":"q:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
le:{"^":"q:26;a,b,c",
$1:function(a){var z,y
this.a.a=H.o(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lg:{"^":"q:2;a",
$0:function(){this.a.$0()}},
lh:{"^":"q:2;a",
$0:function(){this.a.$0()}},
hh:{"^":"c;a,0b,c",
hc:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bv(new P.lV(this,b),0),a)
else throw H.e(P.U("`setTimeout()` not found."))},
hd:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bv(new P.lU(this,a,Date.now(),b),0),a)
else throw H.e(P.U("Periodic timer."))},
$isaq:1,
n:{
lS:function(a,b){var z=new P.hh(!0,0)
z.hc(a,b)
return z},
lT:function(a,b){var z=new P.hh(!1,0)
z.hd(a,b)
return z}}},
lV:{"^":"q:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lU:{"^":"q:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.fO(w,x)}z.c=y
this.d.$1(z)}},
br:{"^":"c;0a,b,c,d,e,$ti",
ku:function(a){if(this.c!==6)return!0
return this.b.b.dk(H.o(this.d,{func:1,ret:P.a2,args:[P.c]}),a.a,P.a2,P.c)},
km:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.r(this,1)}
w=this.b.b
if(H.cw(z,{func:1,args:[P.c,P.aR]}))return H.ek(w.kU(z,a.a,a.b,null,y,P.aR),x)
else return H.ek(w.dk(H.o(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
aV:{"^":"c;eg:a<,b,0iU:c<,$ti",
fj:function(a,b,c){var z,y,x,w
z=H.r(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.O
if(y!==C.k){y.toString
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mv(b,y)}H.o(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aV(0,$.O,[c])
w=b==null?1:3
this.dK(new P.br(x,w,a,b,[z,c]))
return x},
kZ:function(a,b){return this.fj(a,null,b)},
dK:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isbr")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaV")
z=y.a
if(z<4){y.dK(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.d1(null,null,z,H.o(new P.lp(this,a),{func:1,ret:-1}))}},
eb:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isbr")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaV")
y=u.a
if(y<4){u.eb(a)
return}this.a=y
this.c=u.c}z.a=this.bT(a)
y=this.b
y.toString
P.d1(null,null,y,H.o(new P.lu(z,this),{func:1,ret:-1}))}},
cJ:function(){var z=H.h(this.c,"$isbr")
this.c=null
return this.bT(z)},
bT:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dQ:function(a){var z,y,x
z=H.r(this,0)
H.ek(a,{futureOr:1,type:z})
y=this.$ti
if(H.c2(a,"$isbF",y,"$asbF"))if(H.c2(a,"$isaV",y,null))P.h8(a,this)
else P.lq(a,this)
else{x=this.cJ()
H.y(a,z)
this.a=4
this.c=a
P.bX(this,x)}},
dR:function(a,b){var z
H.h(b,"$isaR")
z=this.cJ()
this.a=8
this.c=new P.al(a,b)
P.bX(this,z)},
$isbF:1,
n:{
lq:function(a,b){var z,y,x
b.a=1
try{a.fj(new P.lr(b),new P.ls(b),null)}catch(x){z=H.ay(x)
y=H.bx(x)
P.n0(new P.lt(b,z,y))}},
h8:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaV")
if(z>=4){y=b.cJ()
b.a=a.a
b.c=a.c
P.bX(b,y)}else{y=H.h(b.c,"$isbr")
b.a=2
b.c=a
a.eb(y)}},
bX:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.d0(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bX(z.a,b)}y=z.a
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
if(p){H.h(r,"$isal")
y=y.b
u=r.a
t=r.b
y.toString
P.d0(null,null,y,u,t)
return}o=$.O
if(o==null?q!=null:o!==q)$.O=q
else o=null
y=b.c
if(y===8)new P.lx(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lw(x,b,r).$0()}else if((y&2)!==0)new P.lv(z,x,b).$0()
if(o!=null)$.O=o
y=x.b
if(!!J.I(y).$isbF){if(y.a>=4){n=H.h(t.c,"$isbr")
t.c=null
b=t.bT(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.h8(y,t)
return}}m=b.b
n=H.h(m.c,"$isbr")
m.c=null
b=m.bT(n)
y=x.a
u=x.b
if(!y){H.y(u,H.r(m,0))
m.a=4
m.c=u}else{H.h(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
lp:{"^":"q:2;a,b",
$0:function(){P.bX(this.a,this.b)}},
lu:{"^":"q:2;a,b",
$0:function(){P.bX(this.b,this.a.a)}},
lr:{"^":"q:14;a",
$1:function(a){var z=this.a
z.a=0
z.dQ(a)}},
ls:{"^":"q:49;a",
$2:function(a,b){this.a.dR(a,H.h(b,"$isaR"))},
$1:function(a){return this.$2(a,null)}},
lt:{"^":"q:2;a,b,c",
$0:function(){this.a.dR(this.b,this.c)}},
lx:{"^":"q:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.fi(H.o(w.d,{func:1}),null)}catch(v){y=H.ay(v)
x=H.bx(v)
if(this.d){w=H.h(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.I(z).$isbF){if(z instanceof P.aV&&z.geg()>=4){if(z.geg()===8){w=this.b
w.b=H.h(z.giU(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.kZ(new P.ly(t),null)
w.a=!1}}},
ly:{"^":"q:51;a",
$1:function(a){return this.a}},
lw:{"^":"q:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.r(x,0)
v=H.y(this.c,w)
u=H.r(x,1)
this.a.b=x.b.b.dk(H.o(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ay(t)
y=H.bx(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
lv:{"^":"q:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isal")
w=this.c
if(w.ku(z)&&w.e!=null){v=this.b
v.b=w.km(z)
v.a=!1}}catch(u){y=H.ay(u)
x=H.bx(u)
w=H.h(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
h5:{"^":"c;a,0b"},
kd:{"^":"c;$ti",
gq:function(a){var z,y,x,w
z={}
y=new P.aV(0,$.O,[P.j])
z.a=0
x=H.r(this,0)
w=H.o(new P.kf(z,this),{func:1,ret:-1,args:[x]})
H.o(new P.kg(z,y),{func:1,ret:-1})
W.a5(this.a,this.b,w,!1,x)
return y}},
kf:{"^":"q;a,b",
$1:function(a){H.y(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.r(this.b,0)]}}},
kg:{"^":"q:2;a,b",
$0:function(){this.b.dQ(this.a.a)}},
dR:{"^":"c;$ti"},
ke:{"^":"c;"},
aq:{"^":"c;"},
al:{"^":"c;a,b",
i:function(a){return H.l(this.a)},
$isa7:1},
mk:{"^":"c;",$isns:1},
mw:{"^":"q:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.fa()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
lK:{"^":"mk;",
kV:function(a){var z,y,x
H.o(a,{func:1,ret:-1})
try{if(C.k===$.O){a.$0()
return}P.hs(null,null,this,a,-1)}catch(x){z=H.ay(x)
y=H.bx(x)
P.d0(null,null,this,z,H.h(y,"$isaR"))}},
kW:function(a,b,c){var z,y,x
H.o(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.k===$.O){a.$1(b)
return}P.ht(null,null,this,a,b,-1,c)}catch(x){z=H.ay(x)
y=H.bx(x)
P.d0(null,null,this,z,H.h(y,"$isaR"))}},
jR:function(a,b){return new P.lM(this,H.o(a,{func:1,ret:b}),b)},
cW:function(a){return new P.lL(this,H.o(a,{func:1,ret:-1}))},
en:function(a,b){return new P.lN(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
fi:function(a,b){H.o(a,{func:1,ret:b})
if($.O===C.k)return a.$0()
return P.hs(null,null,this,a,b)},
dk:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.O===C.k)return a.$1(b)
return P.ht(null,null,this,a,b,c,d)},
kU:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.O===C.k)return a.$2(b,c)
return P.mx(null,null,this,a,b,c,d,e,f)}},
lM:{"^":"q;a,b,c",
$0:function(){return this.a.fi(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lL:{"^":"q:3;a,b",
$0:function(){return this.a.kV(this.b)}},
lN:{"^":"q;a,b,c",
$1:function(a){var z=this.c
return this.a.kW(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
eY:function(a,b,c){H.cz(a)
return H.d(H.mK(a,new H.aM(0,0,[b,c])),"$iseW",[b,c],"$aseW")},
j_:function(a,b){return new H.aM(0,0,[a,b])},
j0:function(a,b,c,d){return new P.lE(0,0,[d])},
iO:function(a,b,c){var z,y
if(P.eg(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c1()
C.a.h(y,a)
try{P.mt(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.fs(b,H.hI(z,"$isn"),", ")+c
return y.charCodeAt(0)==0?y:y},
dw:function(a,b,c){var z,y,x
if(P.eg(a))return b+"..."+c
z=new P.ap(b)
y=$.$get$c1()
C.a.h(y,a)
try{x=z
x.a=P.fs(x.gb2(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gb2()+c
y=z.gb2()
return y.charCodeAt(0)==0?y:y},
eg:function(a){var z,y
for(z=0;y=$.$get$c1(),z<y.length;++z)if(a===y[z])return!0
return!1},
mt:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gX(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.l(z.gO())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gO();++x
if(!z.D()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO();++x
for(;z.D();t=s,s=r){r=z.gO();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.l(t)
v=H.l(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dA:function(a){var z,y,x
z={}
if(P.eg(a))return"{...}"
y=new P.ap("")
try{C.a.h($.$get$c1(),a)
x=y
x.a=x.gb2()+"{"
z.a=!0
a.a5(0,new P.j4(z,y))
z=y
z.a=z.gb2()+"}"}finally{z=$.$get$c1()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gb2()
return z.charCodeAt(0)==0?z:z},
lE:{"^":"lz;a,0b,0c,0d,0e,0f,r,$ti",
gX:function(a){return P.ha(this,this.r,H.r(this,0))},
gq:function(a){return this.a},
h:function(a,b){var z
H.y(b,H.r(this,0))
if(typeof b==="number"&&(b&0x3ffffff)===b){z=this.c
if(z==null){z=P.hb()
this.c=z}return this.hC(z,b)}else return this.he(b)},
he:function(a){var z,y,x
H.y(a,H.r(this,0))
z=this.d
if(z==null){z=P.hb()
this.d=z}y=this.dS(a)
x=z[y]
if(x==null)z[y]=[this.ct(a)]
else{if(this.dZ(x,a)>=0)return!1
x.push(this.ct(a))}return!0},
Y:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.iN(this.c,b)
else return this.iM(b)},
iM:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.hR(z,a)
x=this.dZ(y,a)
if(x<0)return!1
this.ei(y.splice(x,1)[0])
return!0},
hC:function(a,b){H.y(b,H.r(this,0))
if(H.h(a[b],"$iseb")!=null)return!1
a[b]=this.ct(b)
return!0},
iN:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$iseb")
if(z==null)return!1
this.ei(z)
delete a[b]
return!0},
e3:function(){this.r=this.r+1&67108863},
ct:function(a){var z,y
z=new P.eb(H.y(a,H.r(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.e3()
return z},
ei:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.e3()},
dS:function(a){return J.bd(a)&0x3ffffff},
hR:function(a,b){return a[this.dS(b)]},
dZ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(a[y].a==b)return y
return-1},
n:{
hb:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
eb:{"^":"c;a,0b,0c"},
lF:{"^":"c;a,b,0c,0d,$ti",
sdO:function(a){this.d=H.y(a,H.r(this,0))},
gO:function(){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.be(z))
else{z=this.c
if(z==null){this.sdO(null)
return!1}else{this.sdO(H.y(z.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
$isb5:1,
n:{
ha:function(a,b,c){var z=new P.lF(a,b,[c])
z.c=a.e
return z}}},
lz:{"^":"jV;"},
cP:{"^":"lG;",$isn:1,$isa:1},
V:{"^":"c;$ti",
gX:function(a){return new H.eZ(a,this.gq(a),0,[H.cy(this,a,"V",0)])},
an:function(a,b){return this.k(a,b)},
l0:function(a,b){var z,y
z=H.b([],[H.cy(this,a,"V",0)])
C.a.sq(z,this.gq(a))
for(y=0;y<this.gq(a);++y)C.a.l(z,y,this.k(a,y))
return z},
l_:function(a){return this.l0(a,!0)},
eU:function(a,b,c,d){var z
H.y(d,H.cy(this,a,"V",0))
P.b8(b,c,this.gq(a),null,null,null)
for(z=b;z<c;++z)this.l(a,z,d)},
i:function(a){return P.dw(a,"[","]")}},
j3:{"^":"j5;"},
j4:{"^":"q:11;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
j5:{"^":"c;$ti",
a5:function(a,b){var z,y
H.o(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
for(z=new H.eX(this,[H.r(this,0)]),z=z.gX(z);z.D();){y=z.d
b.$2(y,this.k(0,y))}},
gq:function(a){return this.a},
i:function(a){return P.dA(this)},
$isD:1},
lY:{"^":"c;$ti",
l:function(a,b,c){H.y(b,H.r(this,0))
H.y(c,H.r(this,1))
throw H.e(P.U("Cannot modify unmodifiable map"))}},
j6:{"^":"c;$ti",
k:function(a,b){return this.a.k(0,b)},
l:function(a,b,c){this.a.l(0,H.y(b,H.r(this,0)),H.y(c,H.r(this,1)))},
a5:function(a,b){this.a.a5(0,H.o(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gq:function(a){var z=this.a
return z.gq(z)},
i:function(a){return J.az(this.a)},
$isD:1},
fN:{"^":"lZ;a,$ti"},
jX:{"^":"c;$ti",
i:function(a){return P.dw(this,"{","}")},
an:function(a,b){var z,y,x
if(b<0)H.t(P.a_(b,0,null,"index",null))
for(z=P.ha(this,this.r,H.r(this,0)),y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.e(P.bK(b,this,"index",null,y))},
$isn:1,
$isfo:1},
jV:{"^":"jX;"},
lG:{"^":"c+V;"},
lZ:{"^":"j6+lY;$ti"}}],["","",,P,{"^":"",i_:{"^":"c6;a",
kw:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.b8(b,c,a.length,null,null,null)
z=$.$get$h6()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.c.J(a,y)
if(r===37){q=s+2
if(q<=c){p=H.d4(C.c.J(a,s))
o=H.d4(C.c.J(a,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.c.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ap("")
l=w.a+=C.c.w(a,x,y)
w.a=l+H.cr(r)
x=s
continue}}throw H.e(P.T("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.c.w(a,x,c)
k=l.length
if(v>=0)P.es(a,u,c,v,t,k)
else{j=C.e.bk(k-1,4)+1
if(j===1)throw H.e(P.T("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.c.bj(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.es(a,u,c,v,t,i)
else{j=C.e.bk(i,4)
if(j===1)throw H.e(P.T("Invalid base64 encoding length ",a,c))
if(j>1)a=C.c.bj(a,c,c,j===2?"==":"=")}return a},
$asc6:function(){return[[P.a,P.j],P.p]},
n:{
es:function(a,b,c,d,e,f){if(C.e.bk(f,4)!==0)throw H.e(P.T("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.T("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.T("Invalid base64 padding, more than two '=' characters",a,b))}}},i0:{"^":"bD;a",
$asbD:function(){return[[P.a,P.j],P.p]}},c6:{"^":"c;$ti"},bD:{"^":"ke;$ti"},iv:{"^":"c6;",
$asc6:function(){return[P.p,[P.a,P.j]]}},kS:{"^":"iv;a",
gkh:function(){return C.L}},kZ:{"^":"bD;",
bu:function(a,b,c){var z,y,x,w
z=a.length
P.b8(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mj(0,0,x)
if(w.hO(a,b,z)!==z)w.ek(J.hU(a,z-1),0)
return new Uint8Array(x.subarray(0,H.ml(0,w.b,x.length)))},
d0:function(a){return this.bu(a,0,null)},
$asbD:function(){return[P.p,[P.a,P.j]]}},mj:{"^":"c;a,b,c",
ek:function(a,b){var z,y,x,w,v
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
hO:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.Z(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.J(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.ek(w,C.c.J(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kT:{"^":"bD;a",
bu:function(a,b,c){var z,y,x,w,v
H.d(a,"$isa",[P.j],"$asa")
z=P.kU(!1,a,b,c)
if(z!=null)return z
y=J.aI(a)
P.b8(b,c,y,null,null,null)
x=new P.ap("")
w=new P.mg(!1,x,!0,0,0,0)
w.bu(a,b,y)
if(w.e>0){H.t(P.T("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.cr(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
d0:function(a){return this.bu(a,0,null)},
$asbD:function(){return[[P.a,P.j],P.p]},
n:{
kU:function(a,b,c,d){H.d(b,"$isa",[P.j],"$asa")
if(b instanceof Uint8Array)return P.kV(!1,b,c,d)
return},
kV:function(a,b,c,d){var z,y,x
z=$.$get$fS()
if(z==null)return
y=0===c
if(y&&!0)return P.e7(z,b)
x=b.length
d=P.b8(c,d,x,null,null,null)
if(y&&d===x)return P.e7(z,b)
return P.e7(z,b.subarray(c,d))},
e7:function(a,b){if(P.kX(b))return
return P.kY(a,b)},
kY:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ay(y)}return},
kX:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kW:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ay(y)}return}}},mg:{"^":"c;a,b,c,d,e,f",
bu:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.d(a,"$isa",[P.j],"$asa")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mi(c)
v=new P.mh(this,b,c,a)
$label0$0:for(u=J.aH(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.bJ()
if((r&192)!==128){q=P.T("Bad UTF-8 encoding 0x"+C.e.bE(r,16),a,s)
throw H.e(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.B,q)
if(z<=C.B[q]){q=P.T("Overlong encoding of 0x"+C.e.bE(z,16),a,s-x-1)
throw H.e(q)}if(z>1114111){q=P.T("Character outside valid Unicode range: 0x"+C.e.bE(z,16),a,s-x-1)
throw H.e(q)}if(!this.c||z!==65279)t.a+=H.cr(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cn()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.L()
if(r<0){m=P.T("Negative UTF-8 code unit: -0x"+C.e.bE(-r,16),a,n-1)
throw H.e(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.T("Bad UTF-8 encoding 0x"+C.e.bE(r,16),a,n-1)
throw H.e(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mi:{"^":"q:48;a",
$2:function(a,b){var z,y,x,w
H.d(a,"$isa",[P.j],"$asa")
z=this.a
for(y=J.aH(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.bJ()
if((w&127)!==w)return x-b}return z-b}},mh:{"^":"q:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.ct(this.d,a,b)}}}],["","",,P,{"^":"",
by:function(a,b,c){var z
H.o(b,{func:1,ret:P.j,args:[P.p]})
z=H.fg(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.e(P.T(a,null,null))},
ix:function(a){if(a instanceof H.q)return a.i(0)
return"Instance of '"+H.bm(a)+"'"},
j1:function(a,b,c,d){var z,y
H.y(b,d)
z=J.iQ(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.l(z,y,b)
return H.d(z,"$isa",[d],"$asa")},
f_:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=J.bB(a);x.D();)C.a.h(y,H.y(x.gO(),c))
if(b)return y
return H.d(J.cM(y),"$isa",z,"$asa")},
ct:function(a,b,c){var z,y
z=P.j
H.d(a,"$isn",[z],"$asn")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(a,"$isbg",[z],"$asbg")
y=a.length
c=P.b8(b,c,y,null,null,null)
return H.fh(b>0||c<y?C.a.fK(a,b,c):a)}if(!!J.I(a).$isdH)return H.jH(a,b,P.b8(b,c,a.length,null,null,null))
return P.kh(a,b,c)},
kh:function(a,b,c){var z,y,x,w
H.d(a,"$isn",[P.j],"$asn")
if(b<0)throw H.e(P.a_(b,0,J.aI(a),null,null))
z=c==null
if(!z&&c<b)throw H.e(P.a_(c,b,J.aI(a),null,null))
y=J.bB(a)
for(x=0;x<b;++x)if(!y.D())throw H.e(P.a_(b,0,x,null,null))
w=[]
if(z)for(;y.D();)w.push(y.gO())
else for(x=b;x<c;++x){if(!y.D())throw H.e(P.a_(c,b,x,null,null))
w.push(y.gO())}return H.fh(w)},
jN:function(a,b,c){return new H.iS(a,H.iT(a,!1,!0,!1))},
fP:function(){var z=H.jy()
if(z!=null)return P.kL(z,0,null)
throw H.e(P.U("'Uri.base' is not supported"))},
cH:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.az(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ix(a)},
u:function(a){return new P.h7(a)},
co:function(a,b,c,d){var z,y
H.o(b,{func:1,ret:d,args:[P.j]})
z=H.b([],[d])
C.a.sq(z,a)
for(y=0;y<a;++y)C.a.l(z,y,b.$1(y))
return z},
ep:function(a){H.mZ(a)},
kL:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.c.J(a,b+4)^58)*3|C.c.J(a,b)^100|C.c.J(a,b+1)^97|C.c.J(a,b+2)^116|C.c.J(a,b+3)^97)>>>0
if(y===0)return P.fO(b>0||c<c?C.c.w(a,b,c):a,5,null).gfn()
else if(y===32)return P.fO(C.c.w(a,z,c),0,null).gfn()}x=new Array(8)
x.fixed$length=Array
w=H.b(x,[P.j])
C.a.l(w,0,0)
x=b-1
C.a.l(w,1,x)
C.a.l(w,2,x)
C.a.l(w,7,x)
C.a.l(w,3,b)
C.a.l(w,4,b)
C.a.l(w,5,c)
C.a.l(w,6,c)
if(P.hu(a,b,c,0,w)>=14)C.a.l(w,7,c)
v=w[1]
if(typeof v!=="number")return v.l9()
if(v>=b)if(P.hu(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.m()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.L()
if(typeof r!=="number")return H.i(r)
if(q<r)r=q
if(typeof s!=="number")return s.L()
if(s<u)s=r
else if(s<=v)s=v+1
if(typeof t!=="number")return t.L()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.L()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.c.ai(a,"..",s)))n=r>s+2&&C.c.ai(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.c.ai(a,"file",b)){if(u<=b){if(!C.c.ai(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.c.bj(a,s,r,"/");++r;++q;++c}else{a=C.c.w(a,b,s)+"/"+C.c.w(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.c.ai(a,"http",b)){if(x&&t+3===s&&C.c.ai(a,"80",t+1))if(b===0&&!0){a=C.c.bj(a,t,s,"")
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
else if(v===z&&C.c.ai(a,"https",b)){if(x&&t+4===s&&C.c.ai(a,"443",t+1))if(b===0&&!0){a=C.c.bj(a,t,s,"")
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
q-=b}return new P.lO(a,v,u,t,s,r,q,o)}return P.m_(a,b,c,v,u,t,s,r,q,o)},
fR:function(a,b){var z=P.p
return C.a.kj(H.b(a.split("&"),[z]),P.j_(z,z),new P.kO(b),[P.D,P.p,P.p])},
kJ:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kK(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.c.Z(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.by(C.c.w(a,v,w),null,null)
if(typeof s!=="number")return s.cn()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.by(C.c.w(a,v,c),null,null)
if(typeof s!=="number")return s.cn()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fQ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kM(a)
y=new P.kN(z,a)
if(a.length<2)z.$1("address is too short")
x=H.b([],[P.j])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.c.Z(a,w)
if(s===58){if(w===b){++w
if(C.c.Z(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaV(x)
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
l+=2}else{i=C.e.b9(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
mm:function(){var z,y,x,w,v
z=P.co(22,new P.mo(),!0,P.M)
y=new P.mn(z)
x=new P.mp()
w=new P.mq()
v=H.h(y.$2(0,225),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(14,225),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(15,225),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(1,225),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(2,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(3,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(4,229),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(5,229),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(6,231),"$isM")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(7,231),"$isM")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.h(y.$2(8,8),"$isM"),"]",5)
v=H.h(y.$2(9,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(16,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(17,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(10,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(18,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(19,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(11,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(12,236),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.h(y.$2(13,237),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.h(y.$2(20,245),"$isM"),"az",21)
v=H.h(y.$2(21,245),"$isM")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hu:function(a,b,c,d,e){var z,y,x,w,v
H.d(e,"$isa",[P.j],"$asa")
z=$.$get$hv()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.c.J(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.l(e,v>>>5,y)}return d},
a2:{"^":"c;"},
"+bool":0,
aB:{"^":"c;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aB))return!1
return this.a===b.a&&!0},
gV:function(a){var z=this.a
return(z^C.e.b9(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.il(H.jF(this))
y=P.ci(H.jD(this))
x=P.ci(H.jz(this))
w=P.ci(H.jA(this))
v=P.ci(H.jC(this))
u=P.ci(H.jE(this))
t=P.im(H.jB(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
n:{
il:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
im:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ci:function(a){if(a>=10)return""+a
return"0"+a}}},
x:{"^":"ak;"},
"+double":0,
aJ:{"^":"c;a",
L:function(a,b){return C.e.L(this.a,H.h(b,"$isaJ").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aJ))return!1
return this.a===b.a},
gV:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.is()
y=this.a
if(y<0)return"-"+new P.aJ(0-y).i(0)
x=z.$1(C.e.a6(y,6e7)%60)
w=z.$1(C.e.a6(y,1e6)%60)
v=new P.ir().$1(y%1e6)
return""+C.e.a6(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
n:{
eI:function(a,b,c,d,e,f){return new P.aJ(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ir:{"^":"q:16;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
is:{"^":"q:16;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a7:{"^":"c;"},
fa:{"^":"a7;",
i:function(a){return"Throw of null."}},
aY:{"^":"a7;a,b,c,d",
gcw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcv:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gcw()+y+x
if(!this.a)return w
v=this.gcv()
u=P.cH(this.b)
return w+v+": "+H.l(u)},
n:{
c4:function(a){return new P.aY(!1,null,null,a)},
dd:function(a,b,c){return new P.aY(!0,a,b,c)}}},
cs:{"^":"aY;e,f,a,b,c,d",
gcw:function(){return"RangeError"},
gcv:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
n:{
jJ:function(a){return new P.cs(null,null,!1,null,null,a)},
cR:function(a,b,c){return new P.cs(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.cs(b,c,!0,a,d,"Invalid value")},
b8:function(a,b,c,d,e,f){if(typeof a!=="number")return H.i(a)
if(0>a||a>c)throw H.e(P.a_(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.a_(b,a,c,"end",f))
return b}return c}}},
iN:{"^":"aY;e,q:f>,a,b,c,d",
gcw:function(){return"RangeError"},
gcv:function(){if(J.hQ(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
n:{
bK:function(a,b,c,d,e){var z=H.X(e!=null?e:J.aI(b))
return new P.iN(b,z,!0,a,c,"Index out of range")}}},
kH:{"^":"a7;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
U:function(a){return new P.kH(a)}}},
kE:{"^":"a7;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
cV:function(a){return new P.kE(a)}}},
ka:{"^":"a7;a",
i:function(a){return"Bad state: "+this.a}},
ie:{"^":"a7;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cH(z))+"."},
n:{
be:function(a){return new P.ie(a)}}},
jr:{"^":"c;",
i:function(a){return"Out of Memory"},
$isa7:1},
fr:{"^":"c;",
i:function(a){return"Stack Overflow"},
$isa7:1},
ik:{"^":"a7;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
h7:{"^":"c;a",
i:function(a){return"Exception: "+this.a}},
iD:{"^":"c;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
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
for(s=x;s<w.length;++s){r=C.c.Z(w,s)
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
return y+n+l+m+"\n"+C.c.j(" ",x-o+n.length)+"^\n"},
n:{
T:function(a,b,c){return new P.iD(a,b,c)}}},
j:{"^":"ak;"},
"+int":0,
n:{"^":"c;$ti",
gq:function(a){var z,y
z=this.gX(this)
for(y=0;z.D();)++y
return y},
an:function(a,b){var z,y,x
if(b<0)H.t(P.a_(b,0,null,"index",null))
for(z=this.gX(this),y=0;z.D();){x=z.gO()
if(b===y)return x;++y}throw H.e(P.bK(b,this,"index",null,y))},
i:function(a){return P.iO(this,"(",")")}},
b5:{"^":"c;$ti"},
a:{"^":"c;$ti",$isn:1},
"+List":0,
D:{"^":"c;$ti"},
F:{"^":"c;",
gV:function(a){return P.c.prototype.gV.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ak:{"^":"c;"},
"+num":0,
c:{"^":";",
t:function(a,b){return this===b},
gV:function(a){return H.bR(this)},
i:function(a){return"Instance of '"+H.bm(this)+"'"},
toString:function(){return this.i(this)}},
aR:{"^":"c;"},
p:{"^":"c;",$isfb:1},
"+String":0,
ap:{"^":"c;b2:a<",
gq:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isnm:1,
n:{
fs:function(a,b,c){var z=J.bB(b)
if(!z.D())return a
if(c.length===0){do a+=H.l(z.gO())
while(z.D())}else{a+=H.l(z.gO())
for(;z.D();)a=a+c+H.l(z.gO())}return a}}},
kO:{"^":"q:44;a",
$2:function(a,b){var z,y,x,w
z=P.p
H.d(a,"$isD",[z,z],"$asD")
H.N(b)
y=J.el(b).f1(b,"=")
if(y===-1){if(b!=="")a.l(0,P.ed(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.c.w(b,0,y)
w=C.c.aY(b,y+1)
z=this.a
a.l(0,P.ed(x,0,x.length,z,!0),P.ed(w,0,w.length,z,!0))}return a}},
kK:{"^":"q:42;a",
$2:function(a,b){throw H.e(P.T("Illegal IPv4 address, "+a,this.a,b))}},
kM:{"^":"q:41;a",
$2:function(a,b){throw H.e(P.T("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kN:{"^":"q:40;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.by(C.c.w(this.b,a,b),null,16)
if(typeof z!=="number")return z.L()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
d_:{"^":"c;co:a<,b,c,d,fa:e>,f,r,0x,0y,0z,0Q,0ch",
siK:function(a){var z=P.p
this.Q=H.d(a,"$isD",[z,z],"$asD")},
gfp:function(){return this.b},
gdc:function(a){var z=this.c
if(z==null)return""
if(C.c.ah(z,"["))return C.c.w(z,1,z.length-1)
return z},
gcg:function(a){var z=this.d
if(z==null)return P.hj(this.a)
return z},
gdi:function(){var z=this.f
return z==null?"":z},
geX:function(){var z=this.r
return z==null?"":z},
dj:function(a,b,c,d,e,f,g,h,i){var z,y,x
H.d(g,"$isD",[P.p,null],"$asD")
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
if(x&&!C.c.ah(c,"/"))c="/"+c
f=P.ec(f,0,0,g)
return new P.d_(h,i,b,e,c,f,this.r)},
fg:function(a){return this.dj(null,null,null,null,null,null,a,null,null)},
gff:function(){var z,y
if(this.Q==null){z=this.f
y=P.p
this.siK(new P.fN(P.fR(z==null?"":z,C.m),[y,y]))}return this.Q},
geY:function(){return this.c!=null},
gf0:function(){return this.f!=null},
geZ:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.l(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.l(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.l(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!!J.I(b).$ise6){if(this.a==b.gco())if(this.c!=null===b.geY())if(this.b==b.gfp())if(this.gdc(this)==b.gdc(b))if(this.gcg(this)==b.gcg(b))if(this.e===b.gfa(b)){z=this.f
y=z==null
if(!y===b.gf0()){if(y)z=""
if(z===b.gdi()){z=this.r
y=z==null
if(!y===b.geZ()){if(y)z=""
z=z===b.geX()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
gV:function(a){var z=this.z
if(z==null){z=C.c.gV(this.i(0))
this.z=z}return z},
$ise6:1,
n:{
cv:function(a,b,c,d){var z,y,x,w,v,u
H.d(a,"$isa",[P.j],"$asa")
if(c===C.m){z=$.$get$ho().b
if(typeof b!=="string")H.t(H.ah(b))
z=z.test(b)}else z=!1
if(z)return b
H.y(b,H.ai(c,"c6",0))
y=c.gkh().d0(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cr(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
m_:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.ma(a,b,d)
else{if(d===b)P.bY(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mb(a,z,e-1):""
x=P.m4(a,e,f,!1)
if(typeof f!=="number")return f.m()
w=f+1
if(typeof g!=="number")return H.i(g)
v=w<g?P.m7(P.by(C.c.w(a,w,g),new P.m0(a,f),null),j):null}else{y=""
x=null
v=null}u=P.m5(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.L()
t=h<i?P.ec(a,h+1,i,null):null
return new P.d_(j,y,x,v,u,t,i<c?P.m3(a,i+1,c):null)},
hj:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bY:function(a,b,c){throw H.e(P.T(c,a,b))},
m7:function(a,b){if(a!=null&&a===P.hj(b))return
return a},
m4:function(a,b,c,d){var z,y
if(b===c)return""
if(C.c.Z(a,b)===91){if(typeof c!=="number")return c.v()
z=c-1
if(C.c.Z(a,z)!==93)P.bY(a,b,"Missing end `]` to match `[` in host")
P.fQ(a,b+1,z)
return C.c.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.i(c)
y=b
for(;y<c;++y)if(C.c.Z(a,y)===58){P.fQ(a,b,c)
return"["+a+"]"}return P.md(a,b,c)},
md:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.i(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.c.Z(a,z)
if(v===37){u=P.hq(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ap("")
s=C.c.w(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.c.w(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.D,t)
t=(C.D[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ap("")
if(y<z){x.a+=C.c.w(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.r,t)
t=(C.r[t]&1<<(v&15))!==0}else t=!1
if(t)P.bY(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.c.Z(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ap("")
s=C.c.w(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.hk(v)
z+=q
y=z}}}}if(x==null)return C.c.w(a,b,c)
if(y<c){s=C.c.w(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
ma:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.hm(C.c.J(a,b)))P.bY(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.c.J(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.u,w)
w=(C.u[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bY(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.c.w(a,b,c)
return P.m1(y?a.toLowerCase():a)},
m1:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mb:function(a,b,c){return P.bZ(a,b,c,C.a1,!1)},
m5:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bZ(a,b,c,C.E,!0):C.q.lZ(d,new P.m6(),P.p).C(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.c.ah(w,"/"))w="/"+w
return P.mc(w,e,f)},
mc:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.c.ah(a,"/"))return P.me(a,!z||c)
return P.mf(a)},
ec:function(a,b,c,d){var z,y
z={}
H.d(d,"$isD",[P.p,null],"$asD")
if(a!=null){if(d!=null)throw H.e(P.c4("Both query and queryParameters specified"))
return P.bZ(a,b,c,C.t,!0)}if(d==null)return
y=new P.ap("")
z.a=""
d.a5(0,new P.m8(new P.m9(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
m3:function(a,b,c){return P.bZ(a,b,c,C.t,!0)},
hq:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.c.Z(a,b+1)
x=C.c.Z(a,z)
w=H.d4(y)
v=H.d4(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.b9(u,4)
if(z>=8)return H.f(C.v,z)
z=(C.v[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cr(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.c.w(a,b,b+3).toUpperCase()
return},
hk:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.b(z,[P.j])
C.a.l(y,0,37)
C.a.l(y,1,C.c.J("0123456789ABCDEF",a>>>4))
C.a.l(y,2,C.c.J("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.b(z,[P.j])
for(v=0;--w,w>=0;x=128){u=C.e.j3(a,6*w)&63|x
C.a.l(y,v,37)
C.a.l(y,v+1,C.c.J("0123456789ABCDEF",u>>>4))
C.a.l(y,v+2,C.c.J("0123456789ABCDEF",u&15))
v+=3}}return P.ct(y,0,null)},
bZ:function(a,b,c,d,e){var z=P.hp(a,b,c,H.d(d,"$isa",[P.j],"$asa"),e)
return z==null?C.c.w(a,b,c):z},
hp:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.d(d,"$isa",[P.j],"$asa")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.L()
if(typeof c!=="number")return H.i(c)
if(!(y<c))break
c$0:{v=C.c.Z(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hq(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.r,u)
u=(C.r[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bY(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.c.Z(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.hk(v)}}if(w==null)w=new P.ap("")
w.a+=C.c.w(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.i(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.L()
if(x<c)w.a+=C.c.w(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
hn:function(a){if(C.c.ah(a,"."))return!0
return C.c.f1(a,"/.")!==-1},
mf:function(a){var z,y,x,w,v,u,t
if(!P.hn(a))return a
z=H.b([],[P.p])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.Y(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.C(z,"/")},
me:function(a,b){var z,y,x,w,v,u
if(!P.hn(a))return!b?P.hl(a):a
z=H.b([],[P.p])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaV(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaV(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.l(z,0,P.hl(z[0]))}return C.a.C(z,"/")},
hl:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.hm(J.hT(a,0)))for(y=1;y<z;++y){x=C.c.J(a,y)
if(x===58)return C.c.w(a,0,y)+"%3A"+C.c.aY(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.u,w)
w=(C.u[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
m2:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.c.J(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.e(P.c4("Invalid URL encoding"))}}return z},
ed:function(a,b,c,d,e){var z,y,x,w,v
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
else v=new H.a6(C.c.w(a,b,c))}else{v=H.b([],[P.j])
for(w=a.length,y=b;y<c;++y){x=C.c.J(a,y)
if(x>127)throw H.e(P.c4("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.e(P.c4("Truncated URI"))
C.a.h(v,P.m2(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.d(v,"$isa",[P.j],"$asa")
return new P.kT(!1).d0(v)},
hm:function(a){var z=a|32
return 97<=z&&z<=122}}},
m0:{"^":"q:43;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.m()
throw H.e(P.T("Invalid port",this.a,z+1))}},
m6:{"^":"q:38;",
$1:function(a){return P.cv(C.a2,a,C.m,!1)}},
m9:{"^":"q:36;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cv(C.v,a,C.m,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cv(C.v,b,C.m,!0))}}},
m8:{"^":"q:34;a",
$2:function(a,b){var z,y
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(z=J.bB(H.hI(b,"$isn")),y=this.a;z.D();)y.$2(a,H.N(z.gO()))}},
kI:{"^":"c;a,b,c",
gfn:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.c.f2(y,"?",z)
w=y.length
if(x>=0){v=P.bZ(y,x+1,w,C.t,!1)
w=x}else v=null
z=new P.ll(this,"data",null,null,null,P.bZ(y,z,w,C.E,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
n:{
fO:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.b([b-1],[P.j])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.c.J(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.e(P.T("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.e(P.T("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.c.J(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaV(z)
if(v!==44||x!==t+7||!C.c.ai(a,"base64",t+1))throw H.e(P.T("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.I.kw(a,s,y)
else{r=P.hp(a,s,y,C.t,!0)
if(r!=null)a=C.c.bj(a,s,y,r)}return new P.kI(a,z,c)}}},
mo:{"^":"q:32;",
$1:function(a){return new Uint8Array(96)}},
mn:{"^":"q:28;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hV(z,0,96,b)
return z}},
mp:{"^":"q;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.c.J(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mq:{"^":"q;",
$3:function(a,b,c){var z,y,x
for(z=C.c.J(b,0),y=C.c.J(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
lO:{"^":"c;a,b,c,d,e,f,r,x,0y",
geY:function(){return this.c>0},
gf_:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.m()
y=this.e
if(typeof y!=="number")return H.i(y)
y=z+1<y
z=y}else z=!1
return z},
gf0:function(){var z=this.f
if(typeof z!=="number")return z.L()
return z<this.r},
geZ:function(){return this.r<this.a.length},
ge1:function(){return this.b===4&&C.c.ah(this.a,"http")},
ge2:function(){return this.b===5&&C.c.ah(this.a,"https")},
gco:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.ge1()){this.x="http"
z="http"}else if(this.ge2()){this.x="https"
z="https"}else if(z===4&&C.c.ah(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.c.ah(this.a,"package")){this.x="package"
z="package"}else{z=C.c.w(this.a,0,z)
this.x=z}return z},
gfp:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.c.w(this.a,y,z-1):""},
gdc:function(a){var z=this.c
return z>0?C.c.w(this.a,z,this.d):""},
gcg:function(a){var z
if(this.gf_()){z=this.d
if(typeof z!=="number")return z.m()
return P.by(C.c.w(this.a,z+1,this.e),null,null)}if(this.ge1())return 80
if(this.ge2())return 443
return 0},
gfa:function(a){return C.c.w(this.a,this.e,this.f)},
gdi:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.L()
return z<y?C.c.w(this.a,z+1,y):""},
geX:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.c.aY(y,z+1):""},
gff:function(){var z=this.f
if(typeof z!=="number")return z.L()
if(z>=this.r)return C.a3
z=P.p
return new P.fN(P.fR(this.gdi(),C.m),[z,z])},
dj:function(a,b,c,d,e,f,g,h,i){var z,y,x
H.d(g,"$isD",[P.p,null],"$asD")
h=this.gco()
z=h==="file"
y=this.c
i=y>0?C.c.w(this.a,this.b+3,y):""
e=this.gf_()?this.gcg(this):null
y=this.c
if(y>0)b=C.c.w(this.a,y,this.d)
else if(i.length!==0||e!=null||z)b=""
y=this.a
c=C.c.w(y,this.e,this.f)
if(!z)x=b!=null&&c.length!==0
else x=!0
if(x&&!C.c.ah(c,"/"))c="/"+c
f=P.ec(f,0,0,g)
x=this.r
if(x<y.length)a=C.c.aY(y,x+1)
return new P.d_(h,i,b,e,c,f,a)},
fg:function(a){return this.dj(null,null,null,null,null,null,a,null,null)},
gV:function(a){var z=this.y
if(z==null){z=C.c.gV(this.a)
this.y=z}return z},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.I(b).$ise6)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$ise6:1},
ll:{"^":"d_;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
hY:function(a){var z=document.createElement("a")
return z},
dj:function(a,b){var z=document.createElement("canvas")
return z},
iu:function(a){H.h(a,"$iscI")
return"wheel"},
cY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
h9:function(a,b,c,d){var z,y
z=W.cY(W.cY(W.cY(W.cY(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hy:function(a,b){var z
H.o(a,{func:1,ret:-1,args:[b]})
z=$.O
if(z===C.k)return a
return z.en(a,b)},
aK:{"^":"a3;","%":"HTMLBRElement|HTMLBaseElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
n4:{"^":"aK;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
n5:{"^":"aK;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
i4:{"^":"aK;","%":"HTMLBodyElement"},
di:{"^":"aK;",
ck:function(a,b,c){if(c!=null)return this.hS(a,b,P.mD(c,null))
return this.hT(a,b)},
fz:function(a,b){return this.ck(a,b,null)},
hS:function(a,b,c){return a.getContext(b,c)},
hT:function(a,b){return a.getContext(b)},
$isdi:1,
$isex:1,
"%":"HTMLCanvasElement"},
dk:{"^":"J;",
hU:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
kf:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$isdk:1,
"%":"CanvasRenderingContext2D"},
n8:{"^":"L;0q:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
na:{"^":"lk;0q:length=",
fC:function(a,b){var z=this.hV(a,this.hx(a,b))
return z==null?"":z},
hx:function(a,b){var z,y
z=$.$get$eA()
y=z[b]
if(typeof y==="string")return y
y=this.j6(a,b)
z[b]=y
return y},
j6:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.io()+b
if(z in a)return z
return b},
hV:function(a,b){return a.getPropertyValue(b)},
gcX:function(a){return a.bottom},
gbw:function(a){return a.height},
gap:function(a){return a.left},
gax:function(a){return a.right},
gbG:function(a){return a.top},
gbI:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ij:{"^":"c;",
gap:function(a){return this.fC(a,"left")}},
eH:{"^":"aK;",$iseH:1,"%":"HTMLDivElement"},
ip:{"^":"L;",
fA:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
nb:{"^":"J;",
i:function(a){return String(a)},
"%":"DOMException"},
iq:{"^":"J;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
t:function(a,b){var z
if(b==null)return!1
if(!H.c2(b,"$isaQ",[P.ak],"$asaQ"))return!1
z=J.bb(b)
return a.left===z.gap(b)&&a.top===z.gbG(b)&&a.width===z.gbI(b)&&a.height===z.gbw(b)},
gV:function(a){return W.h9(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcX:function(a){return a.bottom},
gbw:function(a){return a.height},
gap:function(a){return a.left},
gax:function(a){return a.right},
gbG:function(a){return a.top},
gbI:function(a){return a.width},
$isaQ:1,
$asaQ:function(){return[P.ak]},
"%":";DOMRectReadOnly"},
lj:{"^":"cP;a,b",
gq:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.f(z,b)
return H.h(z[b],"$isa3")},
l:function(a,b,c){var z
H.h(c,"$isa3")
z=this.b
if(b<0||b>=z.length)return H.f(z,b)
J.d9(this.a,c,z[b])},
h:function(a,b){J.eq(this.a,b)
return b},
gX:function(a){var z=this.l_(this)
return new J.au(z,z.length,0,[H.r(z,0)])},
$asV:function(){return[W.a3]},
$asn:function(){return[W.a3]},
$asa:function(){return[W.a3]}},
a3:{"^":"L;",
geq:function(a){return new W.lj(a,a.children)},
ger:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.L()
if(x<0)x=-x*0
if(typeof w!=="number")return w.L()
if(w<0)w=-w*0
return new P.aQ(z,y,x,w,[P.ak])},
i:function(a){return a.localName},
$isa3:1,
"%":";Element"},
ae:{"^":"J;",$isae:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
cI:{"^":"J;",
hg:function(a,b,c,d){return a.addEventListener(b,H.bv(H.o(c,{func:1,args:[W.ae]}),1),!1)},
$iscI:1,
"%":";EventTarget"},
nc:{"^":"aK;0q:length=","%":"HTMLFormElement"},
iK:{"^":"J;0q:length=",
iJ:function(a,b,c,d){return a.pushState(b,c,d)},
"%":"History"},
iL:{"^":"lB;",
gq:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bK(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.h(c,"$isL")
throw H.e(P.U("Cannot assign element of immutable List."))},
an:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isan:1,
$asan:function(){return[W.L]},
$isaL:1,
$asaL:function(){return[W.L]},
$asV:function(){return[W.L]},
$isn:1,
$asn:function(){return[W.L]},
$isa:1,
$asa:function(){return[W.L]},
$isiL:1,
$asb3:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
iM:{"^":"ip;","%":"HTMLDocument"},
cj:{"^":"J;0eu:data=",$iscj:1,"%":"ImageData"},
eQ:{"^":"aK;",$iseQ:1,$isex:1,"%":"HTMLImageElement"},
bM:{"^":"dX;",$isbM:1,"%":"KeyboardEvent"},
ji:{"^":"aK;","%":"HTMLAudioElement;HTMLMediaElement"},
av:{"^":"dX;",$isav:1,"%":"PointerEvent;DragEvent|MouseEvent"},
li:{"^":"cP;a",
l:function(a,b,c){var z,y
H.h(c,"$isL")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.f(y,b)
J.d9(z,c,y[b])},
gX:function(a){var z=this.a.childNodes
return new W.eL(z,z.length,-1,[H.cy(C.a5,z,"b3",0)])},
gq:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asV:function(){return[W.L]},
$asn:function(){return[W.L]},
$asa:function(){return[W.L]}},
L:{"^":"cI;",
kQ:function(a,b){var z,y
try{z=a.parentNode
J.d9(z,b,a)}catch(y){H.ay(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.fL(a):z},
a4:function(a,b){return a.appendChild(b)},
iP:function(a,b,c){return a.replaceChild(b,c)},
$isL:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
jn:{"^":"lI;",
gq:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bK(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.h(c,"$isL")
throw H.e(P.U("Cannot assign element of immutable List."))},
an:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isan:1,
$asan:function(){return[W.L]},
$isaL:1,
$asaL:function(){return[W.L]},
$asV:function(){return[W.L]},
$isn:1,
$asn:function(){return[W.L]},
$isa:1,
$asa:function(){return[W.L]},
$asb3:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
nl:{"^":"aK;0q:length=","%":"HTMLSelectElement"},
b9:{"^":"J;",$isb9:1,"%":"Touch"},
bn:{"^":"dX;",$isbn:1,"%":"TouchEvent"},
np:{"^":"lX;",
gq:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bK(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.h(c,"$isb9")
throw H.e(P.U("Cannot assign element of immutable List."))},
an:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isan:1,
$asan:function(){return[W.b9]},
$isaL:1,
$asaL:function(){return[W.b9]},
$asV:function(){return[W.b9]},
$isn:1,
$asn:function(){return[W.b9]},
$isa:1,
$asa:function(){return[W.b9]},
$asb3:function(){return[W.b9]},
"%":"TouchList"},
dX:{"^":"ae;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
nr:{"^":"ji;",$isex:1,"%":"HTMLVideoElement"},
bW:{"^":"av;",
gka:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.U("deltaY is not supported"))},
gk9:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.U("deltaX is not supported"))},
$isbW:1,
"%":"WheelEvent"},
la:{"^":"cI;",
iQ:function(a,b){return a.requestAnimationFrame(H.bv(H.o(b,{func:1,ret:-1,args:[P.ak]}),1))},
hJ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
nw:{"^":"iq;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
t:function(a,b){var z
if(b==null)return!1
if(!H.c2(b,"$isaQ",[P.ak],"$asaQ"))return!1
z=J.bb(b)
return a.left===z.gap(b)&&a.top===z.gbG(b)&&a.width===z.gbI(b)&&a.height===z.gbw(b)},
gV:function(a){return W.h9(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbw:function(a){return a.height},
gbI:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lm:{"^":"kd;a,b,c,$ti"},
nx:{"^":"lm;a,b,c,$ti"},
ln:{"^":"dR;a,b,c,d,e,$ti",n:{
a5:function(a,b,c,d,e){var z,y
z=W.hy(new W.lo(c),W.ae)
y=z!=null
if(y&&!0){H.o(z,{func:1,args:[W.ae]})
if(y)J.hS(a,b,z,!1)}return new W.ln(0,a,b,z,!1,[e])}}},
lo:{"^":"q:27;a",
$1:function(a){return this.a.$1(H.h(a,"$isae"))}},
b3:{"^":"c;$ti",
gX:function(a){return new W.eL(a,this.gq(a),-1,[H.cy(this,a,"b3",0)])}},
eL:{"^":"c;a,b,c,0d,$ti",
sdX:function(a){this.d=H.y(a,H.r(this,0))},
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdX(J.hR(this.a,z))
this.c=z
return!0}this.sdX(null)
this.c=y
return!1},
gO:function(){return this.d},
$isb5:1},
lk:{"^":"J+ij;"},
lA:{"^":"J+V;"},
lB:{"^":"lA+b3;"},
lH:{"^":"J+V;"},
lI:{"^":"lH+b3;"},
lW:{"^":"J+V;"},
lX:{"^":"lW+b3;"}}],["","",,P,{"^":"",
mG:function(a){var z,y
z=J.I(a)
if(!!z.$iscj){y=z.geu(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.hi(a.data,a.height,a.width)},
mF:function(a){if(a instanceof P.hi)return{data:a.a,height:a.b,width:a.c}
return a},
mD:function(a,b){var z={}
a.a5(0,new P.mE(z))
return z},
eG:function(){var z=$.eF
if(z==null){z=J.da(window.navigator.userAgent,"Opera",0)
$.eF=z}return z},
io:function(){var z,y
z=$.eC
if(z!=null)return z
y=$.eD
if(y==null){y=J.da(window.navigator.userAgent,"Firefox",0)
$.eD=y}if(y)z="-moz-"
else{y=$.eE
if(y==null){y=!P.eG()&&J.da(window.navigator.userAgent,"Trident/",0)
$.eE=y}if(y)z="-ms-"
else z=P.eG()?"-o-":"-webkit-"}$.eC=z
return z},
lP:{"^":"c;",
eV:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
dn:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.I(a)
if(!!y.$isaB)return new Date(a.a)
if(!!y.$isjM)throw H.e(P.cV("structured clone of RegExp"))
if(!!y.$iscj)return a
if(!!y.$isdG)return a
if(!!y.$isD){x=this.eV(a)
y=this.b
if(x>=y.length)return H.f(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.l(y,x,w)
a.a5(0,new P.lR(z,this))
return z.a}if(!!y.$isa){x=this.eV(a)
z=this.b
if(x>=z.length)return H.f(z,x)
w=z[x]
if(w!=null)return w
return this.k0(a,x)}throw H.e(P.cV("structured clone of other type"))},
k0:function(a,b){var z,y,x,w
z=J.aH(a)
y=z.gq(a)
x=new Array(y)
C.a.l(this.b,b,x)
for(w=0;w<y;++w)C.a.l(x,w,this.dn(z.k(a,w)))
return x}},
lR:{"^":"q:11;a,b",
$2:function(a,b){this.a.a[a]=this.b.dn(b)}},
hi:{"^":"c;eu:a>,b,c",$iscj:1},
mE:{"^":"q:11;a",
$2:function(a,b){this.a[a]=b}},
lQ:{"^":"lP;a,b"},
iA:{"^":"cP;a,b",
gbQ:function(){var z,y,x
z=this.b
y=H.ai(z,"V",0)
x=W.a3
return new H.j7(new H.l8(z,H.o(new P.iB(),{func:1,ret:P.a2,args:[y]}),[y]),H.o(new P.iC(),{func:1,ret:x,args:[y]}),[y,x])},
l:function(a,b,c){var z
H.h(c,"$isa3")
z=this.gbQ()
J.hW(z.b.$1(J.db(z.a,b)),c)},
h:function(a,b){J.eq(this.b.a,b)},
gq:function(a){return J.aI(this.gbQ().a)},
k:function(a,b){var z=this.gbQ()
return z.b.$1(J.db(z.a,b))},
gX:function(a){var z=P.f_(this.gbQ(),!1,W.a3)
return new J.au(z,z.length,0,[H.r(z,0)])},
$asV:function(){return[W.a3]},
$asn:function(){return[W.a3]},
$asa:function(){return[W.a3]}},
iB:{"^":"q:24;",
$1:function(a){return!!J.I(H.h(a,"$isL")).$isa3}},
iC:{"^":"q:25;",
$1:function(a){return H.k(H.h(a,"$isL"),"$isa3")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lD:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lC:{"^":"c;",
kv:function(a){if(a<=0||a>4294967296)throw H.e(P.jJ("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}},
lJ:{"^":"c;$ti",
gax:function(a){var z=this.a
if(typeof z!=="number")return z.m()
return H.y(z+this.c,H.r(this,0))},
gcX:function(a){var z=this.b
if(typeof z!=="number")return z.m()
return H.y(z+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.c2(b,"$isaQ",[P.ak],"$asaQ"))return!1
z=this.a
y=J.bb(b)
x=y.gap(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbG(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.m()
w=H.r(this,0)
if(H.y(z+this.c,w)===y.gax(b)){if(typeof x!=="number")return x.m()
z=H.y(x+this.d,w)===y.gcX(b)}else z=!1}else z=!1}else z=!1
return z},
gV:function(a){var z,y,x,w,v
z=this.a
y=J.bd(z)
x=this.b
w=J.bd(x)
if(typeof z!=="number")return z.m()
v=H.r(this,0)
z=H.y(z+this.c,v)
if(typeof x!=="number")return x.m()
v=H.y(x+this.d,v)
return P.lD(P.cZ(P.cZ(P.cZ(P.cZ(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aQ:{"^":"lJ;ap:a>,bG:b>,bI:c>,bw:d>,$ti"}}],["","",,P,{"^":"",nn:{"^":"a3;",
geq:function(a){return new P.iA(a,new W.li(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"}}],["","",,P,{"^":"",M:{"^":"c;",$isn:1,
$asn:function(){return[P.j]},
$isa:1,
$asa:function(){return[P.j]},
$isku:1}}],["","",,P,{"^":""}],["","",,P,{"^":"",i5:{"^":"J;",$isi5:1,"%":"WebGLBuffer"},iE:{"^":"J;",$isiE:1,"%":"WebGLFramebuffer"},jI:{"^":"J;",$isjI:1,"%":"WebGLProgram"},dM:{"^":"J;",
el:function(a,b){return a.activeTexture(b)},
em:function(a,b,c){return a.attachShader(b,c)},
aF:function(a,b,c){return a.bindBuffer(b,c)},
jS:function(a,b,c){return a.bindFramebuffer(b,c)},
bb:function(a,b,c){return a.bindTexture(b,c)},
jT:function(a,b,c){return a.blendFunc(b,c)},
eo:function(a,b,c,d){return a.bufferData(b,c,d)},
jW:function(a,b){return a.clear(b)},
jX:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jY:function(a,b){return a.clearDepth(b)},
jZ:function(a,b){return a.compileShader(b)},
k5:function(a,b){return a.createShader(b)},
k7:function(a,b){return a.deleteProgram(b)},
k8:function(a,b){return a.deleteShader(b)},
kb:function(a,b){return a.depthFunc(b)},
kc:function(a,b){return a.disable(b)},
ev:function(a,b){return a.disableVertexAttribArray(b)},
ke:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
d2:function(a,b){return a.enable(b)},
ex:function(a,b){return a.enableVertexAttribArray(b)},
ft:function(a,b){return a.generateMipmap(b)},
fu:function(a,b,c){return a.getActiveAttrib(b,c)},
fv:function(a,b,c){return a.getActiveUniform(b,c)},
fw:function(a,b,c){return a.getAttribLocation(b,c)},
du:function(a,b){return a.getParameter(b)},
fB:function(a,b){return a.getProgramInfoLog(b)},
cl:function(a,b,c){return a.getProgramParameter(b,c)},
fD:function(a,b){return a.getShaderInfoLog(b)},
fE:function(a,b,c){return a.getShaderParameter(b,c)},
fF:function(a,b,c){return a.getUniformLocation(b,c)},
kr:function(a,b){return a.linkProgram(b)},
kL:function(a,b,c){return a.pixelStorei(b,c)},
fI:function(a,b,c){return a.shaderSource(b,c)},
kY:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$iscj)y=!0
else y=!1
if(y){this.j8(a,b,c,d,e,f,P.mF(g))
return}if(!!z.$iseQ)z=!0
else z=!1
if(z){this.j9(a,b,c,d,e,f,g)
return}throw H.e(P.c4("Incorrect number or type of arguments"))},
kX:function(a,b,c,d,e,f,g){return this.kY(a,b,c,d,e,f,g,null,null,null)},
j8:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
j9:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cj:function(a,b,c,d){return a.texParameteri(b,c,d)},
P:function(a,b,c){return a.uniform1f(b,c)},
T:function(a,b,c){return a.uniform1i(b,c)},
A:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fl:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fm:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
fo:function(a,b){return a.useProgram(b)},
l7:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
l8:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isdM:1,
"%":"WebGLRenderingContext"},jY:{"^":"J;",$isjY:1,"%":"WebGLShader"},ki:{"^":"J;",$iski:1,"%":"WebGLTexture"},kC:{"^":"J;",$iskC:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,L,{"^":"",jp:{"^":"c;a",n:{
jq:function(a){var z,y,x,w,v,u,t,s
z=new Array(256)
z.fixed$length=Array
y=[P.j]
x=H.b(z,y)
z=new Array(256)
z.fixed$length=Array
w=H.b(z,y)
for(v=0;v<256;++v)C.a.l(w,v,v)
u=P.by("6364136223846793005",null,null)
t=P.by("1442695040888963407",null,null)
if(typeof u!=="number")return H.i(u)
if(typeof t!=="number")return H.i(t)
a=C.e.dl(C.e.dl(C.e.dl(a*u+t,64)*u+t,64)*u+t,64)
for(v=255;v>=0;--v){z=a*u+t
a=((z&-1)>>>0)-(z&0)
s=C.e.bk(a+31,v+1)
if(s>=256)return H.f(w,s)
C.a.l(x,v,w[s])
w[s]=w[v]}return new L.jp(x)}}}}],["","",,B,{"^":"",iy:{"^":"c;a,b,c,d,0e",
aj:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z=new B.b6(a,b)
y=this.c.v(0,z).v(0,$.$get$dr().j(0,a+b))
x=y.a
w=y.b
v=2-x*x-w*w
if(v>0){u=v*v
t=this.e
s=this.b.m(0,z)
r=this.a
q=r[C.j.af(s.a)&255]
s=C.j.af(s.b)
if(typeof q!=="number")return q.m()
s=r[q+s&255]
if(typeof s!=="number")return s.bJ()
p=(s&14)>>>1
s=$.$get$eJ()
if(p>=8)return H.f(s,p)
o=s[p]
this.e=t+u*u*(o.a*x+o.b*w)}}},b6:{"^":"c;a,b",
m:function(a,b){return new B.b6(this.a+b.a,this.b+b.b)},
v:function(a,b){return new B.b6(this.a-b.a,this.b-b.b)},
j:function(a,b){return new B.b6(this.a*b,this.b*b)},
i:function(a){return H.l(this.a)+", "+H.l(this.b)},
n:{
aE:function(a,b){return new B.b6(a,b)}}}}],["","",,O,{"^":"",R:{"^":"c;0a,0b,0c,0d,$ti",
si_:function(a){this.a=H.d(a,"$isa",[H.ai(this,"R",0)],"$asa")},
se7:function(a){this.b=H.o(a,{func:1,ret:P.a2,args:[[P.n,H.ai(this,"R",0)]]})},
se5:function(a){this.c=H.o(a,{func:1,ret:-1,args:[P.j,[P.n,H.ai(this,"R",0)]]})},
se8:function(a){this.d=H.o(a,{func:1,ret:-1,args:[P.j,[P.n,H.ai(this,"R",0)]]})},
bM:function(a){this.si_(H.b([],[a]))
this.se7(null)
this.se5(null)
this.se8(null)},
cp:function(a,b,c){var z=H.ai(this,"R",0)
H.o(b,{func:1,ret:P.a2,args:[[P.n,z]]})
z={func:1,ret:-1,args:[P.j,[P.n,z]]}
H.o(a,z)
H.o(c,z)
this.se7(b)
this.se5(a)
this.se8(c)},
bL:function(a,b){return this.cp(a,null,b)},
bp:function(a){var z
H.d(a,"$isn",[H.ai(this,"R",0)],"$asn")
z=this.b
if(z!=null)return z.$1(a)
return!0},
e4:function(a,b){var z
H.d(b,"$isn",[H.ai(this,"R",0)],"$asn")
z=this.c
if(z!=null)z.$2(a,b)},
gq:function(a){return this.a.length},
gX:function(a){var z=this.a
return new J.au(z,z.length,0,[H.r(z,0)])},
an:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ai(this,"R",0)
H.y(b,z)
z=[z]
if(this.bp(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.e4(x,H.b([b],z))}},
aQ:function(a,b){var z,y
H.d(b,"$isn",[H.ai(this,"R",0)],"$asn")
if(this.bp(b)){z=this.a
y=z.length
C.a.aQ(z,b)
this.e4(y,b)}},
$isn:1,
n:{
dm:function(a){var z=new O.R([a])
z.bM(a)
return z}}},dD:{"^":"c;0a,0b",
scD:function(a){this.a=H.d(a,"$isa",[V.ao],"$asa")},
gq:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
fX:function(a){var z=this.b
if(!(z==null))z.E(a)},
aZ:function(){return this.fX(null)},
ga1:function(){var z=this.a
if(z.length>0)return C.a.gaV(z)
else return V.bi()},
fd:function(a){var z=this.a
if(a==null)C.a.h(z,V.bi())
else C.a.h(z,a)
this.aZ()},
dh:function(){var z=this.a
if(z.length>0){z.pop()
this.aZ()}}}}],["","",,E,{"^":"",de:{"^":"c;"},Z:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x,0y,0as:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sfY:function(a,b){this.y=H.d(b,"$isR",[E.Z],"$asR")},
sas:function(a){this.z=H.h(a,"$isbE")},
dM:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.au(z,z.length,0,[H.r(z,0)]);z.D();){y=z.d
if(y.f==null)y.dM()}},
sdw:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){this.c=null
this.d=a
this.e=null
if(z!=null)z.gu().Y(0,this.gcf())
y=this.d
if(y!=null)y.gu().h(0,this.gcf())
x=new D.B("shapeBuilder",z,this.d,this,[F.dO])
x.b=!0
this.a8(x)}},
ag:function(a){var z,y,x,w
z=this.r
y=z!=null?z.aA(a,this):null
if(!J.Y(y,this.x)){x=this.x
this.x=y
w=new D.B("matrix",x,y,this,[V.ao])
w.b=!0
this.a8(w)}z=this.f
if(z!=null)z.ag(a)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.r(z,0)]);z.D();)z.d.ag(a)},
bi:function(a){var z,y,x
if(!this.b)return
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga1())
else C.a.h(z.a,y.j(0,z.ga1()))
z.aZ()
a.fe(this.f)
z=a.dy
x=(z&&C.a).gaV(z)
if(x!=null&&this.d!=null)x.kP(a,this)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.r(z,0)]);z.D();)z.d.bi(a)
a.fc()
a.dx.dh()},
gu:function(){var z=this.z
if(z==null){z=D.C()
this.z=z}return z},
a8:function(a){var z=this.z
if(!(z==null))z.E(a)},
ab:function(){return this.a8(null)},
kB:[function(a){H.h(a,"$isw")
this.e=null
this.a8(a)},function(){return this.kB(null)},"m4","$1","$0","gcf",0,2,1],
kC:[function(a){this.a8(H.h(a,"$isw"))},function(){return this.kC(null)},"m5","$1","$0","gf9",0,2,1],
kA:[function(a){this.a8(H.h(a,"$isw"))},function(){return this.kA(null)},"m3","$1","$0","gf8",0,2,1],
ky:[function(a){this.a8(H.h(a,"$isw"))},function(){return this.ky(null)},"m1","$1","$0","gf7",0,2,1],
m0:[function(a,b){var z,y,x,w,v,u,t
H.d(b,"$isn",[E.Z],"$asn")
for(z=b.length,y=this.gf7(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.gas()==null){t=new D.bE()
t.sat(null)
t.sbS(null)
t.c=null
t.d=0
u.sas(t)}t=u.gas()
t.toString
H.o(y,x)
if(t.a==null)t.sat(H.b([],w))
t=t.a;(t&&C.a).h(t,y)}}this.ab()},"$2","gkx",8,0,8],
m2:[function(a,b){var z,y
H.d(b,"$isn",[E.Z],"$asn")
for(z=b.gX(b),y=this.gf7();z.D();)z.gO().gu().Y(0,y)
this.ab()},"$2","gkz",8,0,8],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaO:1,
n:{
bf:function(a,b,c,d,e,f){var z,y,x,w,v,u
z=new E.Z()
z.a=d
z.b=!0
z.sfY(0,O.dm(E.Z))
z.y.bL(z.gkx(),z.gkz())
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
if(y!=null)y.gu().Y(0,z.gcf())
x=z.c
if(x!=null)x.gu().h(0,z.gcf())
w=new D.B("shape",y,z.c,z,[F.fp])
w.b=!0
z.a8(w)}y=z.f
if(y==null?f!=null:y!==f){if(y!=null)y.gu().Y(0,z.gf9())
v=z.f
z.f=f
if(f!=null)f.gu().h(0,z.gf9())
z.dM()
w=new D.B("technique",v,z.f,z,[O.cS])
w.b=!0
z.a8(w)}if(!J.Y(z.r,c)){u=z.r
if(u!=null)u.gu().Y(0,z.gf8())
if(c!=null)c.gu().h(0,z.gf8())
z.r=c
w=new D.B("mover",u,c,z,[U.a9])
w.b=!0
z.a8(w)}if(a!=null)z.y.aQ(0,a)
return z}}},jO:{"^":"c;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
sj7:function(a){this.dy=H.d(a,"$isa",[O.cS],"$asa")},
sj2:function(a){this.fr=H.d(a,"$isD",[P.p,A.dN],"$asD")},
fS:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.aB(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dD()
y=[V.ao]
z.scD(H.b([],y))
z.b=null
z.gu().h(0,new E.jQ(this))
this.cy=z
z=new O.dD()
z.scD(H.b([],y))
z.b=null
z.gu().h(0,new E.jR(this))
this.db=z
z=new O.dD()
z.scD(H.b([],y))
z.b=null
z.gu().h(0,new E.jS(this))
this.dx=z
this.sj7(H.b([],[O.cS]))
z=this.dy;(z&&C.a).h(z,null)
this.sj2(new H.aM(0,0,[P.p,A.dN]))},
gkM:function(){var z=this.z
if(z==null){z=this.cy.ga1().j(0,this.db.ga1())
this.z=z}return z},
fe:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaV(z):a;(z&&C.a).h(z,y)},
fc:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
jP:function(a,b){var z=new E.jO(a,b)
z.fS(a,b)
return z}}},jQ:{"^":"q:7;a",
$1:function(a){var z
H.h(a,"$isw")
z=this.a
z.z=null
z.ch=null}},jR:{"^":"q:7;a",
$1:function(a){var z
H.h(a,"$isw")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jS:{"^":"q:7;a",
$1:function(a){var z
H.h(a,"$isw")
z=this.a
z.ch=null
z.cx=null}},kb:{"^":"w;c,a,0b"},kn:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0as:x<,0y,0z,0Q,0ch,0cx,0cy",
sas:function(a){this.x=H.h(a,"$isbE")},
h_:[function(a){H.h(a,"$isw")
this.kS()},function(){return this.h_(null)},"fZ","$1","$0","gdB",0,2,1],
gkl:function(){var z,y,x
z=Date.now()
y=C.e.a6(P.eI(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.aB(z,!1)
return x/y},
ec:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.i(z)
x=C.j.bh(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.j.bh(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.dT(C.p,this.gkR())}},
kS:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.o(new E.kp(this),{func:1,ret:-1,args:[P.ak]})
C.H.hJ(z)
C.H.iQ(z,W.hy(y,P.ak))}},"$0","gkR",0,0,3],
kO:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.ec()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aB(w,!1)
x.y=P.eI(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sq(w.a,0)
w.aZ()
w=x.db
C.a.sq(w.a,0)
w.aZ()
w=x.dx
C.a.sq(w.a,0)
w.aZ()
w=x.dy;(w&&C.a).sq(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.bi(this.e)}}catch(v){z=H.ay(v)
y=H.bx(v)
P.ep("Error: "+H.l(z))
P.ep("Stack: "+H.l(y))
throw H.e(z)}},
n:{
ko:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$isdi)return E.fy(a,!0,!0,!0,!1)
y=W.dj(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.geq(a).h(0,y)
w=E.fy(y,!0,!0,!0,!1)
w.a=a
return w},
fy:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kn()
y=P.eY(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.p,null)
x=C.n.ck(a,"webgl",y)
x=H.h(x==null?C.n.ck(a,"experimental-webgl",y):x,"$isdM")
if(x==null)H.t(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jP(x,a)
w=new T.kl(x)
w.b=H.X((x&&C.b).du(x,3379))
w.c=H.X(C.b.du(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.kP(a)
v=new X.iW()
v.c=new X.P(!1,!1,!1)
v.siI(P.j0(null,null,null,P.j))
w.b=v
v=new X.jj(w)
v.f=0
v.r=V.aP()
v.x=V.aP()
v.Q=1
v.ch=1
w.c=v
v=new X.j2(w)
v.r=0
v.x=V.aP()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kr(w)
v.e=0
v.f=V.aP()
v.r=V.aP()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.shK(H.b([],[[P.dR,P.c]]))
v=w.z
u=document
t=W.av
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.a5(u,"contextmenu",H.o(w.gij(),s),!1,t))
v=w.z
r=W.ae
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a5(a,"focus",H.o(w.gim(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a5(a,"blur",H.o(w.gic(),q),!1,r))
v=w.z
p=W.bM
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a5(u,"keyup",H.o(w.gcH(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a5(u,"keydown",H.o(w.gcr(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a5(a,"mousedown",H.o(w.git(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a5(a,"mouseup",H.o(w.giv(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a5(a,"mousemove",H.o(w.giu(),s),!1,t))
p=w.z
o=W.bW;(p&&C.a).h(p,W.a5(a,H.N(W.iu(a)),H.o(w.giw(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a5(u,"mousemove",H.o(w.gik(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a5(u,"mouseup",H.o(w.gil(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a5(u,"pointerlockchange",H.o(w.gix(),q),!1,r))
r=w.z
q=W.bn
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a5(a,"touchstart",H.o(w.giE(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a5(a,"touchend",H.o(w.giC(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a5(a,"touchmove",H.o(w.giD(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aB(Date.now(),!1)
z.cy=0
z.ec()
return z}}},kp:{"^":"q:29;a",
$1:function(a){var z
H.mY(a)
z=this.a
if(z.ch){z.ch=!1
z.kO()}}}}],["","",,Z,{"^":"",h3:{"^":"c;a,b",$isn6:1,n:{
h4:function(a,b,c){var z
H.d(c,"$isa",[P.x],"$asa")
z=a.createBuffer()
C.b.aF(a,b,z)
C.b.eo(a,b,new Float32Array(H.bs(c)),35044)
C.b.aF(a,b,null)
return new Z.h3(b,z)},
cu:function(a,b,c){var z
H.d(c,"$isa",[P.j],"$asa")
z=a.createBuffer()
C.b.aF(a,b,z)
C.b.eo(a,b,new Int16Array(H.bs(c)),35044)
C.b.aF(a,b,null)
return new Z.h3(b,z)}}},c5:{"^":"de;a,b,c,d,e",
aR:function(a){var z,y,x
try{y=a.a
C.b.ex(y,this.e)
C.b.l7(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.ay(x)
y=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.l(z))
throw H.e(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},l7:{"^":"c;a",$isn7:1},dh:{"^":"c;a,0b,c,d",
se0:function(a){this.b=H.d(a,"$isa",[Z.b4],"$asa")},
bg:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aR:function(a){var z,y
z=this.a
C.b.aF(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aR(a)},
bH:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.ev(x,z[y].e)
C.b.aF(x,this.a.a,null)},
bi:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
w=v.c
u=w.a
C.b.aF(y,u,w.b)
C.b.ke(y,v.a,v.b,5123,0)
C.b.aF(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.p]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.az(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(y,", ")+"\nAttrs:   "+C.a.C(u,", ")},
$isno:1},b4:{"^":"c;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bm(this.c)+"'")+"]"}},ac:{"^":"c;a",
ges:function(){var z,y
z=this.a
y=(z&$.$get$a1().a)!==0?1:0
if((z&$.$get$ad().a)!==0)++y
if((z&$.$get$aT().a)!==0)++y
if((z&$.$get$a4().a)!==0)++y
if((z&$.$get$aU().a)!==0)++y
if((z&$.$get$bU().a)!==0)++y
if((z&$.$get$bV().a)!==0)++y
if((z&$.$get$bq().a)!==0)++y
return(z&$.$get$aS().a)!==0?y+1:y},
gbl:function(a){var z,y
z=this.a
y=(z&$.$get$a1().a)!==0?3:0
if((z&$.$get$ad().a)!==0)y+=3
if((z&$.$get$aT().a)!==0)y+=3
if((z&$.$get$a4().a)!==0)y+=2
if((z&$.$get$aU().a)!==0)y+=3
if((z&$.$get$bU().a)!==0)y+=3
if((z&$.$get$bV().a)!==0)y+=4
if((z&$.$get$bq().a)!==0)++y
return(z&$.$get$aS().a)!==0?y+4:y},
cR:function(a){var z,y,x
z=$.$get$a1()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ad()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$a4()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bq()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0)if(x===a)return z
return $.$get$h2()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ac))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.p])
y=this.a
if((y&$.$get$a1().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$ad().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$a4().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aU().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bU().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bV().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bq().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.C(z,"|")},
n:{
ax:function(a){return new Z.ac(a)}}}}],["","",,D,{"^":"",dl:{"^":"c;"},bE:{"^":"c;0a,0b,0c,0d",
sat:function(a){this.a=H.d(a,"$isa",[{func:1,ret:-1,args:[D.w]}],"$asa")},
sbS:function(a){this.b=H.d(a,"$isa",[{func:1,ret:-1,args:[D.w]}],"$asa")},
h:function(a,b){var z={func:1,ret:-1,args:[D.w]}
H.o(b,z)
if(this.a==null)this.sat(H.b([],[z]))
z=this.a;(z&&C.a).h(z,b)},
Y:function(a,b){var z,y
H.o(b,{func:1,ret:-1,args:[D.w]})
z=this.a
z=z==null?null:C.a.av(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).Y(z,b)||!1}else y=!1
return y},
E:function(a){var z,y,x,w
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
return!0}if(!x)C.a.a5(y,new D.iz(z))
return!0},
ew:function(){return this.E(null)},
kT:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.E(y)}}},
aK:function(){return this.kT(!0,!1)},
n:{
C:function(){var z=new D.bE()
z.sat(null)
z.sbS(null)
z.c=null
z.d=0
return z}}},iz:{"^":"q:30;a",
$1:function(a){var z
H.o(a,{func:1,ret:-1,args:[D.w]})
z=this.a.a
z.b
a.$1(z)}},w:{"^":"c;a,0b"},ck:{"^":"w;c,d,a,0b,$ti"},cl:{"^":"w;c,d,a,0b,$ti"},B:{"^":"w;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",ev:{"^":"c;a,b",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ev))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},K:{"^":"c;a,b",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.K))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},bL:{"^":"w;c,a,0b"},iV:{"^":"R;0e,0f,0r,0x,0y,0a,0b,0c,0d",
gao:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
dC:function(a){},
lb:[function(a){var z,y,x
H.d(a,"$isn",[X.K],"$asn")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.A)(a),++y){x=a[y]
if(C.a.av(this.a,x))return!1}return!0},"$1","gh2",4,0,31],
la:[function(a,b){var z=X.K
z=new D.ck(a,H.d(b,"$isn",[z],"$asn"),this,[z])
z.b=!0
this.dC(z)},"$2","gh0",8,0,23],
lc:[function(a,b){var z=X.K
z=new D.cl(a,H.d(b,"$isn",[z],"$asn"),this,[z])
z.b=!0
this.dC(z)},"$2","gh3",8,0,23],
h1:[function(a){var z
H.h(a,"$isw")
if(!this.r&&a instanceof X.bL){z=a.c
if(C.a.av(this.a,z)){this.r=!0
z=this.y
if(!(z==null))z.E(a)}}},"$1","gcr",4,0,0],
iq:[function(a){var z
H.h(a,"$isw")
if(this.r&&a instanceof X.bL){z=a.c
if(C.a.av(this.a,z))this.r=!1}},"$1","gcH",4,0,0],
aa:function(a){var z,y
if(this.f!=null)return!1
this.f=a
z=a.b
y=z.b
if(y==null){y=D.C()
z.b=y}y.h(0,this.gcr())
y=z.a
if(y==null){y=D.C()
z.a=y
z=y}else z=y
z.h(0,this.gcH())
return!0},
$asn:function(){return[X.K]},
$asR:function(){return[X.K]},
n:{
aC:function(){var z=new X.iV()
z.bM(X.K)
z.e=null
z.f=null
z.r=!1
z.x=null
z.y=null
z.cp(z.gh0(),z.gh2(),z.gh3())
return z}}},iW:{"^":"c;0a,0b,0c,0d",
siI:function(a){this.d=H.d(a,"$isfo",[P.j],"$asfo")},
kI:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.bL(a,this)
y.b=!0
return z.E(y)},
kE:function(a){var z,y
this.c=a.b
this.d.Y(0,a.a)
z=this.b
if(z==null)return!1
y=new X.bL(a,this)
y.b=!0
return z.E(y)}},f0:{"^":"dI;x,y,c,d,e,a,0b"},j2:{"^":"c;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
b4:function(a,b){var z,y,x,w,v,u,t,s,r
z=new P.aB(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=y.a
if(typeof t!=="number")return t.m()
y=y.b
if(typeof y!=="number")return y.m()
s=new V.Q(t+x*w,y+v*u)
u=this.a.gbY()
r=new X.bO(a,V.aP(),this.x,this.y,this.z,u,s,z,this)
r.b=!0
this.z=z
this.x=s
return r},
dg:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.E(this.b4(a,b))
return!0},
bA:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.fG()
if(typeof z!=="number")return z.bJ()
this.r=(z&~y)>>>0
return!1},
bz:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.b4(a,b))
return!0},
kJ:function(a){return!1},
is:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aB(Date.now(),!1)
y=this.f
x=new X.f0(c,a,this.a.gbY(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=V.aP()}},P:{"^":"c;a,b,c",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.P))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bO:{"^":"dI;x,y,z,Q,ch,c,d,e,a,0b"},jj:{"^":"c;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
cA:function(a,b,c){var z,y,x
z=new P.aB(Date.now(),!1)
y=this.a.gbY()
x=new X.bO(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
dg:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.cA(a,b,!0))
return!0},
bA:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.fG()
if(typeof z!=="number")return z.bJ()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.cA(a,b,!0))
return!0},
bz:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.cA(a,b,!1))
return!0},
kK:function(a,b){return!1}},dI:{"^":"w;"},fB:{"^":"dI;x,y,z,Q,ch,c,d,e,a,0b"},kr:{"^":"c;a,0b,0c,0d,0e,0f,0r,0x,0y",
b4:function(a,b){var z,y,x,w
H.d(a,"$isa",[V.Q],"$asa")
z=new P.aB(Date.now(),!1)
y=a.length>0?a[0]:V.aP()
x=this.a.gbY()
w=new X.fB(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
kH:function(a){var z
H.d(a,"$isa",[V.Q],"$asa")
z=this.b
if(z==null)return!1
z.E(this.b4(a,!0))
return!0},
kF:function(a){var z
H.d(a,"$isa",[V.Q],"$asa")
z=this.c
if(z==null)return!1
z.E(this.b4(a,!0))
return!0},
kG:function(a){var z
H.d(a,"$isa",[V.Q],"$asa")
z=this.d
if(z==null)return!1
z.E(this.b4(a,!1))
return!0}},kP:{"^":"c;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
shK:function(a){this.z=H.d(a,"$isa",[[P.dR,P.c]],"$asa")},
gbY:function(){var z=this.a
return V.dK(0,0,C.n.ger(z).c,C.n.ger(z).d)},
dV:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.K(z,new X.P(y,a.altKey,a.shiftKey))},
b8:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.P(y,a.altKey,a.shiftKey)},
cM:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.P(y,a.altKey,a.shiftKey)},
aP:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.v()
v=z.top
if(typeof x!=="number")return x.v()
return new V.Q(y-w,x-v)},
br:function(a){return new V.a0(a.movementX,a.movementY)},
cI:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.Q])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
t=C.j.ay(u.pageX)
C.j.ay(u.pageY)
s=z.left
C.j.ay(u.pageX)
C.a.h(y,new V.Q(t-s,C.j.ay(u.pageY)-z.top))}return y},
aL:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ev(z,new X.P(y,a.altKey,a.shiftKey))},
cE:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.v()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.v()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
lB:[function(a){this.f=!0},"$1","gim",4,0,13],
lt:[function(a){this.f=!1},"$1","gic",4,0,13],
ly:[function(a){H.h(a,"$isav")
if(this.f&&this.cE(a))a.preventDefault()},"$1","gij",4,0,4],
iq:[function(a){var z
H.h(a,"$isbM")
if(!this.f)return
z=this.dV(a)
if(this.b.kI(z))a.preventDefault()},"$1","gcH",4,0,22],
h1:[function(a){var z
H.h(a,"$isbM")
if(!this.f)return
z=this.dV(a)
if(this.b.kE(z))a.preventDefault()},"$1","gcr",4,0,22],
lF:[function(a){var z,y,x,w
H.h(a,"$isav")
z=this.a
z.focus()
this.f=!0
this.b8(a)
if(this.x){y=this.aL(a)
x=this.br(a)
if(this.d.dg(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aL(a)
w=this.aP(a)
if(this.c.dg(y,w))a.preventDefault()},"$1","git",4,0,4],
lH:[function(a){var z,y,x
H.h(a,"$isav")
this.b8(a)
z=this.aL(a)
if(this.x){y=this.br(a)
if(this.d.bA(z,y))a.preventDefault()
return}if(this.r)return
x=this.aP(a)
if(this.c.bA(z,x))a.preventDefault()},"$1","giv",4,0,4],
lA:[function(a){var z,y,x
H.h(a,"$isav")
if(!this.cE(a)){this.b8(a)
z=this.aL(a)
if(this.x){y=this.br(a)
if(this.d.bA(z,y))a.preventDefault()
return}if(this.r)return
x=this.aP(a)
if(this.c.bA(z,x))a.preventDefault()}},"$1","gil",4,0,4],
lG:[function(a){var z,y,x
H.h(a,"$isav")
this.b8(a)
z=this.aL(a)
if(this.x){y=this.br(a)
if(this.d.bz(z,y))a.preventDefault()
return}if(this.r)return
x=this.aP(a)
if(this.c.bz(z,x))a.preventDefault()},"$1","giu",4,0,4],
lz:[function(a){var z,y,x
H.h(a,"$isav")
if(!this.cE(a)){this.b8(a)
z=this.aL(a)
if(this.x){y=this.br(a)
if(this.d.bz(z,y))a.preventDefault()
return}if(this.r)return
x=this.aP(a)
if(this.c.bz(z,x))a.preventDefault()}},"$1","gik",4,0,4],
lI:[function(a){var z,y
H.h(a,"$isbW")
this.b8(a)
z=new V.a0((a&&C.G).gk9(a),C.G.gka(a)).B(0,180)
if(this.x){if(this.d.kJ(z))a.preventDefault()
return}if(this.r)return
y=this.aP(a)
if(this.c.kK(z,y))a.preventDefault()},"$1","giw",4,0,37],
lJ:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aL(this.y)
x=this.aP(this.y)
this.d.is(y,x,z)}},"$1","gix",4,0,13],
lQ:[function(a){var z
H.h(a,"$isbn")
this.a.focus()
this.f=!0
this.cM(a)
z=this.cI(a)
if(this.e.kH(z))a.preventDefault()},"$1","giE",4,0,12],
lO:[function(a){var z
H.h(a,"$isbn")
this.cM(a)
z=this.cI(a)
if(this.e.kF(z))a.preventDefault()},"$1","giC",4,0,12],
lP:[function(a){var z
H.h(a,"$isbn")
this.cM(a)
z=this.cI(a)
if(this.e.kG(z))a.preventDefault()},"$1","giD",4,0,12]}}],["","",,D,{"^":"",cG:{"^":"c;0a,0b,0c,0d",
gu:function(){var z=this.d
if(z==null){z=D.C()
this.d=z}return z},
b6:[function(a){var z
H.h(a,"$isw")
z=this.d
if(!(z==null))z.E(a)},function(){return this.b6(null)},"lu","$1","$0","gie",0,2,1],
$isa8:1,
$isaO:1},a8:{"^":"c;",$isaO:1},iX:{"^":"R;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sh4:function(a){this.e=H.d(a,"$isa",[D.cG],"$asa")},
sh5:function(a){this.f=H.d(a,"$isa",[D.fd],"$asa")},
sh6:function(a){this.r=H.d(a,"$isa",[D.fq],"$asa")},
sh7:function(a){this.x=H.d(a,"$isa",[D.fv],"$asa")},
sh8:function(a){this.y=H.d(a,"$isa",[D.fw],"$asa")},
sh9:function(a){this.z=H.d(a,"$isa",[D.fx],"$asa")},
gu:function(){var z=this.Q
if(z==null){z=D.C()
this.Q=z}return z},
b6:function(a){var z=this.Q
if(!(z==null))z.E(a)},
ir:[function(a){var z
H.h(a,"$isw")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.ir(null)},"lE","$1","$0","ge6",0,2,1],
lK:[function(a){var z,y,x
H.d(a,"$isn",[D.a8],"$asn")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.A)(a),++y){x=a[y]
if(x==null||this.hD(x))return!1}return!0},"$1","giy",4,0,39],
lo:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a8
H.d(b,"$isn",[z],"$asn")
for(y=b.length,x=this.ge6(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=H.h(b[u],"$isa8")
if(t instanceof D.cG)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bE()
s.sat(null)
s.sbS(null)
s.c=null
s.d=0
t.d=s}H.o(x,w)
if(s.a==null)s.sat(H.b([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.ck(a,b,this,[z])
z.b=!0
this.b6(z)},"$2","gi7",8,0,20],
lM:[function(a,b){var z,y,x,w
z=D.a8
H.d(b,"$isn",[z],"$asn")
for(y=b.gX(b),x=this.ge6();y.D();){w=y.gO()
C.a.Y(this.e,w)
w.gu().Y(0,x)}z=new D.cl(a,b,this,[z])
z.b=!0
this.b6(z)},"$2","giA",8,0,20],
hD:function(a){var z=C.a.av(this.e,a)
return z},
$asn:function(){return[D.a8]},
$asR:function(){return[D.a8]}},fd:{"^":"c;",$isa8:1,$isaO:1},fq:{"^":"c;",$isa8:1,$isaO:1},fv:{"^":"c;",$isa8:1,$isaO:1},fw:{"^":"c;",$isa8:1,$isaO:1},fx:{"^":"c;",$isa8:1,$isaO:1}}],["","",,V,{"^":"",
n9:[function(a,b){if(typeof b!=="number")return b.v()
if(typeof a!=="number")return H.i(a)
return Math.abs(b-a)<=1e-9},"$2","jh",8,0,33],
d8:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.bk(a-b,z)
return(a<0?a+z:a)+b},
z:function(a,b,c){if(a==null)return C.c.aW("null",c)
return C.c.aW(C.j.fk($.m.$2(a,0)?0:a,b),c+b+1)},
bw:function(a,b,c){var z,y,x,w,v,u
H.d(a,"$isa",[P.x],"$asa")
z=H.b([],[P.p])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.A)(a),++w){v=V.z(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.l(z,u,C.c.aW(z[u],x))}return z},
eo:function(a,b){return C.j.af(Math.pow(b,C.o.bh(Math.log(H.mC(a))/Math.log(b))))},
aa:{"^":"c;a,b,c",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}},
aZ:{"^":"c;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aZ))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+", "+V.z(this.d,3,0)+"]"}},
b0:{"^":"c;a",
t:function(a,b){if(b==null)return!1
if(!(b instanceof V.b0))return!1
return this.a===b.a},
i:function(a){var z,y,x
$.$get$eN()
$.$get$dt()
z=H.b([],[P.p])
y=this.a
x=$.$get$b2().a
if((y&x)===x)C.a.h(z,"XPos")
x=$.$get$du().a
if((y&x)===x)C.a.h(z,"XCenter")
x=$.$get$b1().a
if((y&x)===x)C.a.h(z,"XNeg")
x=$.$get$bH().a
if((y&x)===x)C.a.h(z,"YPos")
x=$.$get$dv().a
if((y&x)===x)C.a.h(z,"YCenter")
x=$.$get$bG().a
if((y&x)===x)C.a.h(z,"YNeg")
x=$.$get$bJ().a
if((y&x)===x)C.a.h(z,"ZPos")
x=$.$get$eP().a
if((y&x)===x)C.a.h(z,"ZCenter")
x=$.$get$bI().a
if((y&x)===x)C.a.h(z,"ZNeg")
if(z.length<=0)return"None"
return C.a.C(z,"|")},
n:{
am:function(a){return new V.b0(a)}}},
cL:{"^":"c;a,b,c,d",
i:function(a){return this.a.i(0)+" <"+this.b.i(0)+"> "+H.l(this.c)+" "+H.l(this.d)}},
aN:{"^":"c;a,b,c,d,e,f,r,x,y",
ar:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.x])
return z},
bx:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=this.e
x=this.y
if(typeof y!=="number")return y.j()
if(typeof x!=="number")return H.i(x)
w=y*x
v=this.f
u=this.x
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.i(u)
if(typeof z!=="number")return z.j()
t=this.d
s=this.b
if(typeof s!=="number")return s.j()
r=s*x
q=this.c
if(typeof q!=="number")return H.i(q)
p=u*q
if(typeof t!=="number")return t.j()
o=this.r
n=s*v-y*q
if(typeof o!=="number")return o.j()
m=z*(w-v*u)-t*(r-p)+o*n
if($.m.$2(m,0)){z=$.f4
if(z==null){z=new V.aN(1,0,0,0,1,0,0,0,1)
$.f4=z}return z}l=1/m
return new V.aN((w-u*v)*l,(p-r)*l,n*l,(o*v-t*x)*l,(z*x-o*q)*l,(t*q-z*v)*l,(t*u-o*y)*l,(o*s-z*u)*l,(z*y-t*s)*l)},
az:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.i(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.i(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.i(u)
t=this.d
if(typeof t!=="number")return t.j()
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return p.j()
o=this.y
if(typeof o!=="number")return o.j()
return new V.E(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
S:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.i(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.i(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.i(u)
t=this.d
if(typeof t!=="number")return t.j()
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return p.j()
o=this.y
if(typeof o!=="number")return o.j()
return new V.v(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aN))return!1
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
z=[P.x]
y=V.bw(H.b([this.a,this.d,this.r],z),3,0)
x=V.bw(H.b([this.b,this.e,this.x],z),3,0)
w=V.bw(H.b([this.c,this.f,this.y],z),3,0)
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
return s+(z+w[2]+"]")},
n:{
f3:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return new V.aN(z,0,-y,0,1,0,y,0,z)}}},
ao:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ar:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.x])
return z},
bx:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.i(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.i(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.i(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
q=this.d
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
h=l*k-j*i
g=this.db
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
c=this.ch
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.m.$2(a2,0))return V.bi()
a3=1/a2
a4=-w
a5=-i
return V.aD((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.i(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.i(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.i(u)
t=this.d
s=a7.cx
r=a7.b
if(typeof r!=="number")return H.i(r)
q=a7.f
if(typeof q!=="number")return H.i(q)
p=a7.z
if(typeof p!=="number")return H.i(p)
o=a7.cy
n=a7.c
if(typeof n!=="number")return H.i(n)
m=a7.r
if(typeof m!=="number")return H.i(m)
l=a7.Q
if(typeof l!=="number")return H.i(l)
k=a7.db
j=a7.d
i=a7.x
h=a7.ch
g=a7.dx
f=this.e
if(typeof f!=="number")return f.j()
e=this.f
if(typeof e!=="number")return e.j()
d=this.r
if(typeof d!=="number")return d.j()
c=this.x
b=this.y
if(typeof b!=="number")return b.j()
a=this.z
if(typeof a!=="number")return a.j()
a0=this.Q
if(typeof a0!=="number")return a0.j()
a1=this.ch
a2=this.cx
a3=this.cy
a4=this.db
a5=this.dx
return V.aD(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
az:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.i(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.i(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.i(u)
t=this.e
if(typeof t!=="number")return t.j()
s=this.f
if(typeof s!=="number")return s.j()
r=this.r
if(typeof r!=="number")return r.j()
q=this.y
if(typeof q!=="number")return q.j()
p=this.z
if(typeof p!=="number")return p.j()
o=this.Q
if(typeof o!=="number")return o.j()
return new V.E(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
S:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.i(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.i(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.i(u)
t=this.e
if(typeof t!=="number")return t.j()
s=this.f
if(typeof s!=="number")return s.j()
r=this.r
if(typeof r!=="number")return r.j()
q=this.y
if(typeof q!=="number")return q.j()
p=this.z
if(typeof p!=="number")return p.j()
o=this.Q
if(typeof o!=="number")return o.j()
return new V.v(z*y+x*w+v*u+this.d,t*y+s*w+r*u+this.x,q*y+p*w+o*u+this.ch)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ao))return!1
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
i:function(a){return this.U()},
eW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.x]
y=V.bw(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bw(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bw(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bw(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
U:function(){return this.eW("",3,0)},
H:function(a){return this.eW(a,3,0)},
n:{
bi:function(){var z=$.f8
if(z==null){z=V.aD(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.f8=z}return z},
aD:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cp:function(a,b,c){return V.aD(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
dE:function(a,b,c,d){return V.aD(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
f6:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aD(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
f7:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aD(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
f5:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.B(0,Math.sqrt(c.G(c)))
y=b.bv(z)
x=y.B(0,Math.sqrt(y.G(y)))
w=z.bv(x)
v=new V.E(a.a,a.b,a.c)
u=x.N(0).G(v)
t=w.N(0).G(v)
s=z.N(0).G(v)
return V.aD(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
Q:{"^":"c;a,b",
v:function(a,b){var z,y,x,w
z=this.a
y=b.a
if(typeof z!=="number")return z.v()
if(typeof y!=="number")return H.i(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.v()
if(typeof w!=="number")return H.i(w)
return new V.Q(z-y,x-w)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"},
n:{
aP:function(){var z=$.fe
if(z==null){z=new V.Q(0,0)
$.fe=z}return z}}},
v:{"^":"c;a,b,c",
m:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.i(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.i(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.m()
if(typeof u!=="number")return H.i(u)
return new V.v(z+y,x+w,v+u)},
v:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.v()
if(typeof y!=="number")return H.i(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.v()
if(typeof w!=="number")return H.i(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.v()
if(typeof u!=="number")return H.i(u)
return new V.v(z-y,x-w,v-u)},
j:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
x=this.c
if(typeof x!=="number")return x.j()
return new V.v(z*b,y*b,x*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.v))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"},
n:{
bk:function(){var z=$.bQ
if(z==null){z=new V.v(0,0,0)
$.bQ=z}return z},
b7:function(a,b,c){return new V.v(a,b,c)}}},
cq:{"^":"c;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cq))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+", "+V.z(this.d,3,0)+"]"}},
fi:{"^":"c;a,b,c,d,e,f",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.fi))return!1
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
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+", "+V.z(this.d,3,0)+", "+V.z(this.e,3,0)+", "+V.z(this.f,3,0)+"]"},
n:{
fj:function(a,b){return new V.fi(a.a,a.b,a.c,b.a,b.b,b.c)}}},
fk:{"^":"c;a,b,c,d",
gaJ:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
f6:function(a){var z,y,x,w,v,u,t
z=$.$get$eO()
y=a.a
x=this.a
if(typeof y!=="number")return y.L()
if(y<x){w=$.$get$b1()
z=new V.b0(z.a|w.a)}else if(y>=x+this.c){w=$.$get$b2()
z=new V.b0(z.a|w.a)}else{w=$.$get$du()
z=new V.b0(z.a|w.a)}w=a.b
v=this.b
if(typeof w!=="number")return w.L()
if(w<v)z=new V.b0(z.a|$.$get$bG().a)
else{u=z.a
z=w>=v+this.d?new V.b0(u|$.$get$bH().a):new V.b0(u|$.$get$dv().a)}u=z.a
t=$.$get$b1().a
if(!((u&t)===t)){t=$.$get$b2().a
if((u&t)===t){y=x+this.c
x=y}else x=y}y=$.$get$bG().a
if(!((u&y)===y)){y=$.$get$bH().a
if((u&y)===y){y=v+this.d
v=y}else v=w}return new V.Q(x,v)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.fk))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+", "+V.z(this.d,3,0)+"]"},
n:{
dK:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.fk(a,b,c,d)}}},
dL:{"^":"c;a,b,c,d,e,f",
kN:function(a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=this.a
if(typeof z!=="number")return z.m()
y=z+this.d
x=this.b
if(typeof x!=="number")return x.m()
w=x+this.e
v=this.c
if(typeof v!=="number")return v.m()
u=v+this.f
t=a1.a
if(typeof t!=="number")return t.L()
if(t<z){s=z-t
r=a1.d
if(typeof r!=="number")return H.i(r)
if(s>r)return
s/=r
q=$.$get$b1()
p=z
o=!1
n=-1}else if(t>y){s=y-t
r=a1.d
if(typeof r!=="number")return H.i(r)
if(s<r)return
s/=r
q=$.$get$b2()
p=y
o=!1
n=1}else{o=!0
s=-1
n=null
p=null
q=null}r=a1.b
if(typeof r!=="number")return r.L()
if(r<x){m=x-r
l=a1.e
if(typeof l!=="number")return H.i(l)
if(m>l)return
m/=l
k=$.$get$bG()
j=x
o=!1
i=-1}else if(r>w){m=w-r
l=a1.e
if(typeof l!=="number")return H.i(l)
if(m<l)return
m/=l
k=$.$get$bH()
j=w
o=!1
i=1}else{m=-1
i=null
j=null
k=null}l=a1.c
if(typeof l!=="number")return l.L()
if(l<v){h=v-l
g=a1.f
if(typeof g!=="number")return H.i(g)
if(h>g)return
h/=g
f=$.$get$bI()
e=v
o=!1
d=-1}else if(l>u){h=u-l
g=a1.f
if(typeof g!=="number")return H.i(g)
if(h<g)return
h/=g
f=$.$get$bJ()
e=u
o=!1
d=1}else{h=-1
d=null
e=null
f=null}if(o){z=new V.E(a1.d,a1.e,a1.f)
return new V.cL(new V.v(t,r,l),z.B(0,Math.sqrt(z.G(z))).N(0),0,$.$get$dt())}if(m>s)c=h>m?2:1
else c=h>s?2:0
switch(c){case 0:z=a1.e
if(typeof z!=="number")return z.j()
b=r+z*s
if(b<x||b>w)return
z=a1.f
if(typeof z!=="number")return z.j()
a=l+z*s
if(a<v||a>u)return
return new V.cL(new V.v(p,b,a),new V.E(n,0,0),s,q)
case 1:x=a1.d
if(typeof x!=="number")return x.j()
a0=t+x*m
if(a0<z||a0>y)return
z=a1.f
if(typeof z!=="number")return z.j()
a=l+z*m
if(a<v||a>u)return
return new V.cL(new V.v(a0,j,a),new V.E(0,i,0),m,k)
default:v=a1.d
if(typeof v!=="number")return v.j()
a0=t+v*h
if(a0<z||a0>y)return
z=a1.e
if(typeof z!=="number")return z.j()
b=r+z*h
if(b<x||b>w)return
return new V.cL(new V.v(a0,b,e),new V.E(0,0,d),h,f)}},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dL))return!1
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
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+", "+V.z(this.d,3,0)+", "+V.z(this.e,3,0)+", "+V.z(this.f,3,0)+"]"},
n:{
fm:function(a,b,c,d,e,f){return new V.dL(a,b,c,d,e,f)}}},
a0:{"^":"c;a,b",
kq:[function(a){return Math.sqrt(this.G(this))},"$0","gq",1,0,19],
G:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.i(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.i(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.a0(z*b,y*b)},
B:function(a,b){var z,y
if($.m.$2(b,0)){z=$.fT
if(z==null){z=new V.a0(0,0)
$.fT=z}return z}z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
return new V.a0(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}},
E:{"^":"c;a,b,c",
kq:[function(a){return Math.sqrt(this.G(this))},"$0","gq",1,0,19],
G:function(a){var z,y,x,w,v,u
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.i(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.i(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.i(u)
return z*y+x*w+v*u},
bv:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.i(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.i(w)
v=a.a
if(typeof v!=="number")return H.i(v)
u=this.a
if(typeof u!=="number")return u.j()
return new V.E(z*y-x*w,x*v-u*y,u*w-z*v)},
m:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.i(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.i(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.m()
if(typeof u!=="number")return H.i(u)
return new V.E(z+y,x+w,v+u)},
N:function(a){var z,y,x
z=this.a
if(typeof z!=="number")return z.N()
y=this.b
if(typeof y!=="number")return y.N()
x=this.c
if(typeof x!=="number")return x.N()
return new V.E(-z,-y,-x)},
B:function(a,b){var z,y,x
if($.m.$2(b,0))return V.bT()
z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
x=this.c
if(typeof x!=="number")return x.B()
return new V.E(z/b,y/b,x/b)},
f3:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"},
n:{
bT:function(){var z=$.fZ
if(z==null){z=new V.E(0,0,0)
$.fZ=z}return z},
h0:function(){var z=$.fY
if(z==null){z=new V.E(0,1,0)
$.fY=z}return z},
e9:function(){var z=$.cX
if(z==null){z=new V.E(0,0,1)
$.cX=z}return z},
h_:function(){var z=$.fW
if(z==null){z=new V.E(0,0,-1)
$.fW=z}return z},
e8:function(a,b,c){return new V.E(a,b,c)}}}}],["","",,U,{"^":"",id:{"^":"dl;0a,0b,0c,0d,0e,0f,0r,0x,0y",
cs:function(a){var z,y,x
z=this.a
y=this.c
x=this.b
if(z)return V.d8(a,y,x)
else{if(a<y)z=y
else z=a>x?x:a
return z}},
gu:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
I:function(a){var z=this.y
if(!(z==null))z.E(a)},
sdq:function(a,b){var z=this.a
if(z!==b){this.a=b
z=new D.B("wrap",z,b,this,[P.a2])
z.b=!0
this.I(z)}},
sde:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.cs(z)}z=new D.B("maximumLocation",y,this.b,this,[P.x])
z.b=!0
this.I(z)}},
sdf:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.cs(z)}z=new D.B("minimumLocation",y,this.c,this,[P.x])
z.b=!0
this.I(z)}},
sa_:function(a,b){var z,y
b=this.cs(b==null?0:b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.B("location",y,b,this,[P.x])
z.b=!0
this.I(z)}},
saI:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.B("maximumVelocity",y,a,this,[P.x])
z.b=!0
this.I(z)}},
sK:function(a){var z,y,x
z=a==null?0:a
y=this.e
a=-y
if(!(z<a))a=z>y?y:z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.B("velocity",x,a,this,[P.x])
z.b=!0
this.I(z)}},
saT:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.B("dampening",y,a,this,[P.x])
z.b=!0
this.I(z)}},
ag:function(a){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa_(0,this.d+y*a)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sK(y)}},
n:{
c7:function(){var z=new U.id()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ez:{"^":"a9;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
aA:function(a,b){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ez))return!1
return J.Y(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")},
n:{
b_:function(a){var z=new U.ez()
z.a=a
return z}}},eM:{"^":"R;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
I:[function(a){var z
H.h(a,"$isw")
z=this.e
if(!(z==null))z.E(a)},function(){return this.I(null)},"aD","$1","$0","gaC",0,2,1],
ld:[function(a,b){var z,y,x,w,v,u,t,s
z=U.a9
H.d(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gaC(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){s=t.gu()
s.toString
H.o(x,w)
if(s.a==null)s.sat(H.b([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.I(z)},"$2","gha",8,0,18],
lL:[function(a,b){var z,y,x
z=U.a9
H.d(b,"$isn",[z],"$asn")
for(y=b.gX(b),x=this.gaC();y.D();)y.gO().gu().Y(0,x)
z=new D.cl(a,b,this,[z])
z.b=!0
this.I(z)},"$2","giz",8,0,18],
aA:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.L()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.au(z,z.length,0,[H.r(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.aA(a,b)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.bi():x
z=this.e
if(!(z==null))z.aK()}return this.f},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eM))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.Y(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asn:function(){return[U.a9]},
$asR:function(){return[U.a9]},
$isa9:1,
n:{
cK:function(a){var z=new U.eM()
z.bM(U.a9)
z.bL(z.gha(),z.giz())
z.aQ(0,a)
z.e=null
z.f=V.bi()
z.r=0
return z}}},eR:{"^":"c;0a,0b,0c,0d",
gu:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
I:[function(a){var z
H.h(a,"$isw")
z=this.b
if(!(z==null))z.E(a)},function(){return this.I(null)},"aD","$1","$0","gaC",0,2,1],
aA:function(a,b){var z,y,x
z=this.d
y=a.e
if(z<y){this.d=y
z=this.b
if(!(z==null))++z.d
z=this.a
z=z==null?null:z.aA(a,b)
x=z==null?null:z.bx()
this.c=x==null?V.bi():x
z=this.b
if(!(z==null))z.aK()}return this.c},
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eR))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
return!0},
i:function(a){return"Invert"},
$isa9:1},a9:{"^":"dl;"},fn:{"^":"a9;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gu:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
I:function(a){var z=this.y
if(!(z==null))z.E(a)},
sfq:function(a){var z,y
a=V.d8(a,0,6.283185307179586)
z=this.a
if(!$.m.$2(z,a)){y=this.a
this.a=a
z=new D.B("yaw",y,a,this,[P.x])
z.b=!0
this.I(z)}},
sfb:function(a){var z,y
a=V.d8(a,0,6.283185307179586)
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
z=new D.B("pitch",y,a,this,[P.x])
z.b=!0
this.I(z)}},
sfh:function(a){var z,y
a=V.d8(a,0,6.283185307179586)
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
z=new D.B("roll",y,a,this,[P.x])
z.b=!0
this.I(z)}},
aA:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.sfq(this.a+this.d*a.y)
this.sfb(this.b+this.e*a.y)
this.sfh(this.c+this.f*a.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
this.x=V.aD(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1).j(0,V.f7(this.b)).j(0,V.f6(this.a))
z=this.y
if(!(z==null))z.aK()}return this.x},
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.fn))return!1
z=this.a
y=b.a
if(!$.m.$2(z,y))return!1
z=this.b
y=b.b
if(!$.m.$2(z,y))return!1
z=this.c
y=b.c
if(!$.m.$2(z,y))return!1
z=this.d
y=b.d
if(!$.m.$2(z,y))return!1
z=this.e
y=b.e
if(!$.m.$2(z,y))return!1
z=this.f
y=b.f
if(!$.m.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"], ["+V.z(this.d,3,0)+", "+V.z(this.e,3,0)+", "+V.z(this.f,3,0)+"]"}},kQ:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.C()
this.fx=z}return z},
I:[function(a){var z
H.h(a,"$isw")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.I(null)},"aD","$1","$0","gaC",0,2,1],
aa:function(a){var z,y
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.C()
z.b=y
z=y}else z=y
z.h(0,this.gi4())
z=this.a.c
y=z.d
if(y==null){y=D.C()
z.d=y
z=y}else z=y
z.h(0,this.gi5())
z=this.a.c
y=z.c
if(y==null){y=D.C()
z.c=y
z=y}else z=y
z.h(0,this.gi6())
z=this.a.d
y=z.f
if(y==null){y=D.C()
z.f=y
z=y}else z=y
z.h(0,this.gi0())
z=this.a.d
y=z.d
if(y==null){y=D.C()
z.d=y
z=y}else z=y
z.h(0,this.gi1())
z=this.a.e
y=z.b
if(y==null){y=D.C()
z.b=y
z=y}else z=y
z.h(0,this.gje())
z=this.a.e
y=z.d
if(y==null){y=D.C()
z.d=y
z=y}else z=y
z.h(0,this.gjd())
z=this.a.e
y=z.c
if(y==null){y=D.C()
z.c=y
z=y}else z=y
z.h(0,this.gjc())
return!0},
aE:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.N()
z=-z}if(this.r){if(typeof y!=="number")return y.N()
y=-y}return new V.a0(z,y)},
ll:[function(a){a=H.k(H.h(a,"$isw"),"$isbO")
if(!J.Y(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gi4",4,0,0],
lm:[function(a){var z,y,x,w,v,u,t
a=H.k(H.h(a,"$isw"),"$isbO")
if(!this.cx)return
if(this.ch){z=a.d.v(0,a.y)
z=new V.a0(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.i(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.v(0,a.y)
z=this.aE(new V.a0(y.a,y.b).j(0,2).B(0,z.gaJ()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.i(x)
y.sK(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.i(y)
x.sK(-z*10*y)}else{z=a.c
y=a.d
x=y.v(0,a.y)
w=this.aE(new V.a0(x.a,x.b).j(0,2).B(0,z.gaJ()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.i(u)
t=this.cy
if(typeof t!=="number")return H.i(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.i(v)
x=this.db
if(typeof x!=="number")return H.i(x)
t.sa_(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.v(0,a.z)
this.dx=this.aE(new V.a0(y.a,y.b).j(0,2).B(0,z.gaJ()))}this.aD()},"$1","gi5",4,0,0],
ln:[function(a){var z,y,x
H.h(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.i(x)
z.sK(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.i(z)
x.sK(-y*10*z)
this.aD()}},"$1","gi6",4,0,0],
lj:[function(a){if(H.k(H.h(a,"$isw"),"$isf0").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gi0",4,0,0],
lk:[function(a){var z,y,x,w,v,u,t
a=H.k(H.h(a,"$isw"),"$isbO")
if(!J.Y(this.d,a.x.b))return
z=a.c
y=a.d
x=y.v(0,a.y)
w=this.aE(new V.a0(x.a,x.b).j(0,2).B(0,z.gaJ()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.i(u)
t=this.cy
if(typeof t!=="number")return H.i(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.i(v)
x=this.db
if(typeof x!=="number")return H.i(x)
t.sa_(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.v(0,a.z)
this.dx=this.aE(new V.a0(y.a,y.b).j(0,2).B(0,z.gaJ()))
this.aD()},"$1","gi1",4,0,0],
lU:[function(a){H.h(a,"$isw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gje",4,0,0],
lT:[function(a){var z,y,x,w,v,u,t
a=H.k(H.h(a,"$isw"),"$isfB")
if(!this.cx)return
if(this.ch){z=a.d.v(0,a.y)
z=new V.a0(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.i(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.v(0,a.y)
z=this.aE(new V.a0(y.a,y.b).j(0,2).B(0,z.gaJ()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.i(x)
y.sK(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.i(y)
x.sK(-z*10*y)}else{z=a.c
y=a.d
x=y.v(0,a.y)
w=this.aE(new V.a0(x.a,x.b).j(0,2).B(0,z.gaJ()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.i(u)
t=this.cy
if(typeof t!=="number")return H.i(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.i(v)
x=this.db
if(typeof x!=="number")return H.i(x)
t.sa_(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.v(0,a.z)
this.dx=this.aE(new V.a0(y.a,y.b).j(0,2).B(0,z.gaJ()))}this.aD()},"$1","gjd",4,0,0],
lS:[function(a){var z,y,x
H.h(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.i(x)
z.sK(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.i(z)
x.sK(-y*10*z)
this.aD()}},"$1","gjc",4,0,0],
aA:function(a,b){var z,y,x
z=this.dy
y=a.e
if(typeof z!=="number")return z.L()
if(z<y){this.dy=y
x=a.y
this.c.ag(x)
this.b.ag(x)
this.fr=V.f6(this.b.d).j(0,V.f7(this.c.d))}return this.fr},
$isa9:1},kR:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sdP:function(a){this.dy=H.o(a,{func:1,ret:V.v,args:[V.v,V.v]})},
gu:function(){var z=this.dx
if(z==null){z=D.C()
this.dx=z}return z},
I:[function(a){var z
H.h(a,"$isw")
z=this.dx
if(!(z==null))z.E(a)},function(){return this.I(null)},"aD","$1","$0","gaC",0,2,1],
sK:function(a){this.r.sK(a.a)
this.x.sK(a.b)
this.y.sK(a.c)},
ga_:function(a){return new V.v(this.r.d,this.x.d,this.y.d)},
sa_:function(a,b){H.h(b,"$isv")
this.r.sa_(0,b.a)
this.x.sa_(0,b.b)
this.y.sa_(0,b.c)},
lD:[function(a){this.I(H.h(a,"$isw"))},"$1","gip",4,0,0],
cO:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.m()
e+=d}else if(b.r){if(typeof e!=="number")return e.v()
e-=d}else{if(typeof e!=="number")return e.cn()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
aA:function(a,b){var z,y,x,w,v,u,t
z=this.cy
y=a.e
if(typeof z!=="number")return z.L()
if(z<y){this.cy=y
x=this.ga_(this)
w=a.y
if(w>0.1)w=0.1
z=this.ch
if(typeof z!=="number")return z.j()
v=z*w
z=this.cx
if(typeof z!=="number")return z.j()
u=z*w
t=new V.E(this.r.f,this.x.f,this.y.f)
z=this.Q
if(z!=null)t=z.az(t)
t=new V.E(this.cO(this.a,this.b,v,u,t.a),this.cO(this.c,this.d,v,u,t.b),this.cO(this.e,this.f,v,u,t.c))
z=this.z
this.sK(z!=null?z.az(t):t)
this.r.ag(w)
this.x.ag(w)
this.y.ag(w)
if(this.dy!=null){z=this.ga_(this)
this.sa_(0,this.dy.$2(x,z))}this.db=V.cp(this.r.d,-this.x.d,this.y.d)}return this.db},
$isa9:1}}],["","",,M,{"^":"",iw:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x",
shA:function(a,b){this.d=H.d(b,"$isR",[E.Z],"$asR")},
bm:[function(a){var z
H.h(a,"$isw")
z=this.x
if(!(z==null))z.E(a)},function(){return this.bm(null)},"le","$1","$0","gb_",0,2,1],
lv:[function(a,b){var z,y,x,w,v,u,t,s
z=E.Z
H.d(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gb_(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.gas()==null){s=new D.bE()
s.sat(null)
s.sbS(null)
s.c=null
s.d=0
t.sas(s)}s=t.gas()
s.toString
H.o(x,w)
if(s.a==null)s.sat(H.b([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.bm(z)},"$2","gig",8,0,8],
lw:[function(a,b){var z,y,x
z=E.Z
H.d(b,"$isn",[z],"$asn")
for(y=b.gX(b),x=this.gb_();y.D();)y.gO().gu().Y(0,x)
z=new D.cl(a,b,this,[z])
z.b=!0
this.bm(z)},"$2","gih",8,0,8],
gu:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
bi:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=new E.kb(a,this)
z.b=!0
y=this.e
if(!(y==null))y.E(z)
a.fe(this.c)
y=this.b
y.toString
x=a.a
C.b.jS(x,36160,null)
C.b.d2(x,2884)
C.b.d2(x,2929)
C.b.kb(x,513)
w=x.drawingBufferWidth
v=x.drawingBufferHeight
u=y.r
t=u.a
if(typeof w!=="number")return H.i(w)
s=C.j.ay(t*w)
t=u.b
if(typeof v!=="number")return H.i(v)
r=C.j.ay(t*v)
t=C.j.ay(u.c*w)
a.c=t
u=C.j.ay(u.d*v)
a.d=u
C.b.l8(x,s,r,t,u)
C.b.jY(x,y.c)
y=y.a
C.b.jX(x,y.a,y.b,y.c,y.d)
C.b.jW(x,16640)
y=this.a
x=a.c
u=a.d
t=y.c
q=y.d
p=y.e
o=p-q
n=1/Math.tan(t*0.5)
m=V.aD(-n/(x/u),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
y.a
a.cy.fd(m)
x=$.fc
if(x==null){x=V.f5(V.bk(),V.h0(),V.h_())
$.fc=x
l=x}else l=x
x=y.b
if(x!=null){k=x.aA(a,y)
if(k!=null)l=k.j(0,l)}a.db.fd(l)
for(y=this.d.a,y=new J.au(y,y.length,0,[H.r(y,0)]);y.D();)y.d.ag(a)
for(y=this.d.a,y=new J.au(y,y.length,0,[H.r(y,0)]);y.D();)y.d.bi(a)
this.a.toString
a.cy.dh()
a.db.dh()
this.b.toString
a.fc()},
$isnk:1}}],["","",,A,{"^":"",er:{"^":"c;a,b,c"},hZ:{"^":"c;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
kg:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
C.b.ex(w.a,w.c)}},
kd:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
C.b.ev(w.a,w.c)}}},ja:{"^":"dN;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aH,0aw,0c_,0ey,0c0,0c1,0ez,0eA,0c2,0c3,0eB,0eC,0c4,0c5,0eD,0eE,0c6,0eF,0eG,0c7,0eH,0eI,0c8,0c9,0ca,0eJ,0eK,0cb,0cc,0eL,0eM,0cd,0eN,0d3,0eO,0d4,0eP,0d5,0eQ,0d6,0eR,0d7,0eS,0d8,a,b,0c,0d,0e,0f,0r,0x,0y",
shu:function(a){this.r1=H.d(a,"$isa",[A.aG],"$asa")},
shI:function(a){this.d3=H.d(a,"$isa",[A.dZ],"$asa")},
siG:function(a){this.d4=H.d(a,"$isa",[A.e0],"$asa")},
sj4:function(a){this.d5=H.d(a,"$isa",[A.e1],"$asa")},
sjk:function(a){this.d6=H.d(a,"$isa",[A.e2],"$asa")},
sjl:function(a){this.d7=H.d(a,"$isa",[A.e3],"$asa")},
sjm:function(a){this.d8=H.d(a,"$isa",[A.e4],"$asa")},
fQ:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.ap("")
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
a2.js(z)
a2.jz(z)
a2.jt(z)
a2.jH(z)
a2.jI(z)
a2.jB(z)
a2.jM(z)
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
z=new P.ap("")
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
x.jw(z)
x.jr(z)
x.ju(z)
x.jx(z)
x.jF(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.jD(z)
x.jE(z)}x.jA(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
if(q!==C.d){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.f){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.h){r+="uniform samplerCube alphaTxt;\n"
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
case C.f:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.h:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.b([],[P.p])
if(x.b!==C.d)C.a.h(p,"ambient()")
if(x.c!==C.d)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.d)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.d)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.C(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.jv(z)
x.jC(z)
x.jG(z)
x.jJ(z)
x.jK(z)
x.jL(z)
x.jy(z)}r=z.a+="// === Main ===\n"
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
o=H.b([],[P.p])
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
n="vec4("+C.a.C(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.dW(s,35633)
this.f=this.dW(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
C.b.em(x,v,this.e)
C.b.em(x,this.r,this.f)
C.b.kr(x,this.r)
if(!H.hC(C.b.cl(x,this.r,35714))){m=C.b.fB(x,this.r)
C.b.k7(x,this.r)
H.t(P.u("Failed to link shader: "+H.l(m)))}this.j_()
this.j1()
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a2.fr)this.id=H.k(this.y.p(0,"invViewMat"),"$isaG")
if(y)this.dy=H.k(this.y.p(0,"objMat"),"$isaG")
if(w)this.fr=H.k(this.y.p(0,"viewObjMat"),"$isaG")
this.fy=H.k(this.y.p(0,"projViewObjMat"),"$isaG")
if(a2.x2)this.k1=H.k(this.y.p(0,"txt2DMat"),"$ise_")
if(a2.y1)this.k2=H.k(this.y.p(0,"txtCubeMat"),"$isaG")
if(a2.y2)this.k3=H.k(this.y.p(0,"colorMat"),"$isaG")
this.shu(H.b([],[A.aG]))
y=a2.aH
if(y>0){this.k4=H.h(this.y.p(0,"bendMatCount"),"$isH")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.t(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaG"))}}y=a2.a
if(y!==C.d){this.r2=H.k(this.y.p(0,"emissionClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.f:this.rx=H.k(this.y.p(0,"emissionTxt"),"$isar")
this.x1=H.k(this.y.p(0,"nullEmissionTxt"),"$isH")
break
case C.h:this.ry=H.k(this.y.p(0,"emissionTxt"),"$isas")
this.x1=H.k(this.y.p(0,"nullEmissionTxt"),"$isH")
break}}y=a2.b
if(y!==C.d){this.x2=H.k(this.y.p(0,"ambientClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.f:this.y1=H.k(this.y.p(0,"ambientTxt"),"$isar")
this.aH=H.k(this.y.p(0,"nullAmbientTxt"),"$isH")
break
case C.h:this.y2=H.k(this.y.p(0,"ambientTxt"),"$isas")
this.aH=H.k(this.y.p(0,"nullAmbientTxt"),"$isH")
break}}y=a2.c
if(y!==C.d){this.aw=H.k(this.y.p(0,"diffuseClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.f:this.c_=H.k(this.y.p(0,"diffuseTxt"),"$isar")
this.c0=H.k(this.y.p(0,"nullDiffuseTxt"),"$isH")
break
case C.h:this.ey=H.k(this.y.p(0,"diffuseTxt"),"$isas")
this.c0=H.k(this.y.p(0,"nullDiffuseTxt"),"$isH")
break}}y=a2.d
if(y!==C.d){this.c1=H.k(this.y.p(0,"invDiffuseClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.f:this.ez=H.k(this.y.p(0,"invDiffuseTxt"),"$isar")
this.c2=H.k(this.y.p(0,"nullInvDiffuseTxt"),"$isH")
break
case C.h:this.eA=H.k(this.y.p(0,"invDiffuseTxt"),"$isas")
this.c2=H.k(this.y.p(0,"nullInvDiffuseTxt"),"$isH")
break}}y=a2.e
if(y!==C.d){this.c5=H.k(this.y.p(0,"shininess"),"$isW")
this.c3=H.k(this.y.p(0,"specularClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.f:this.eB=H.k(this.y.p(0,"specularTxt"),"$isar")
this.c4=H.k(this.y.p(0,"nullSpecularTxt"),"$isH")
break
case C.h:this.eC=H.k(this.y.p(0,"specularTxt"),"$isas")
this.c4=H.k(this.y.p(0,"nullSpecularTxt"),"$isH")
break}}switch(a2.f){case C.d:break
case C.i:break
case C.f:this.eD=H.k(this.y.p(0,"bumpTxt"),"$isar")
this.c6=H.k(this.y.p(0,"nullBumpTxt"),"$isH")
break
case C.h:this.eE=H.k(this.y.p(0,"bumpTxt"),"$isas")
this.c6=H.k(this.y.p(0,"nullBumpTxt"),"$isH")
break}if(a2.dy){this.eF=H.k(this.y.p(0,"envSampler"),"$isas")
this.eG=H.k(this.y.p(0,"nullEnvTxt"),"$isH")
y=a2.r
if(y!==C.d){this.c7=H.k(this.y.p(0,"reflectClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.f:this.eH=H.k(this.y.p(0,"reflectTxt"),"$isar")
this.c8=H.k(this.y.p(0,"nullReflectTxt"),"$isH")
break
case C.h:this.eI=H.k(this.y.p(0,"reflectTxt"),"$isas")
this.c8=H.k(this.y.p(0,"nullReflectTxt"),"$isH")
break}}y=a2.x
if(y!==C.d){this.c9=H.k(this.y.p(0,"refraction"),"$isW")
this.ca=H.k(this.y.p(0,"refractClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.f:this.eJ=H.k(this.y.p(0,"refractTxt"),"$isar")
this.cb=H.k(this.y.p(0,"nullRefractTxt"),"$isH")
break
case C.h:this.eK=H.k(this.y.p(0,"refractTxt"),"$isas")
this.cb=H.k(this.y.p(0,"nullRefractTxt"),"$isH")
break}}}y=a2.y
if(y!==C.d){this.cc=H.k(this.y.p(0,"alpha"),"$isW")
switch(y){case C.d:break
case C.i:break
case C.f:this.eL=H.k(this.y.p(0,"alphaTxt"),"$isar")
this.cd=H.k(this.y.p(0,"nullAlphaTxt"),"$isH")
break
case C.h:this.eM=H.k(this.y.p(0,"alphaTxt"),"$isas")
this.cd=H.k(this.y.p(0,"nullAlphaTxt"),"$isH")
break}}this.shI(H.b([],[A.dZ]))
this.siG(H.b([],[A.e0]))
this.sj4(H.b([],[A.e1]))
this.sjk(H.b([],[A.e2]))
this.sjl(H.b([],[A.e3]))
this.sjm(H.b([],[A.e4]))
if(a2.k2){y=a2.z
if(y>0){this.eN=H.h(this.y.p(0,"dirLightCount"),"$isH")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isG")
x=this.y
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isG")
x=this.d3;(x&&C.a).h(x,new A.dZ(l,k,j))}}y=a2.Q
if(y>0){this.eO=H.h(this.y.p(0,"pntLightCount"),"$isH")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isG")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isG")
x=this.y
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isG")
x=this.y
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isW")
x=this.y
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isW")
x=this.y
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isW")
x=this.d4;(x&&C.a).h(x,new A.e0(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.eP=H.h(this.y.p(0,"spotLightCount"),"$isH")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isG")
x=this.y
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isG")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isG")
x=this.y
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isG")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isW")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isW")
x=this.y
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isW")
x=this.y
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isW")
x=this.y
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isW")
x=this.d5;(x&&C.a).h(x,new A.e1(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.eQ=H.h(this.y.p(0,"txtDirLightCount"),"$isH")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isG")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isG")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isG")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isG")
x=this.y
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isG")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isH")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isar")
x=this.d6;(x&&C.a).h(x,new A.e2(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.eR=H.h(this.y.p(0,"txtPntLightCount"),"$isH")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isG")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isG")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$ise_")
x=this.y
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isG")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isH")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isW")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isW")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isW")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isas")
x=this.d7;(x&&C.a).h(x,new A.e3(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.eS=H.h(this.y.p(0,"txtSpotLightCount"),"$isH")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isG")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isG")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isG")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isG")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isG")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isH")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isG")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isW")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isW")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isW")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isW")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isW")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isar")
x=this.d8;(x&&C.a).h(x,new A.e4(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
au:function(a,b,c){if(c==null||!c.gae(c))C.b.T(b.a,b.d,1)
else{a.fH(c)
C.b.T(b.a,b.d,0)}},
am:function(a,b,c){C.b.T(b.a,b.d,1)},
n:{
j9:function(a,b){var z,y
z=a.aw
y=new A.ja(b,z)
y.fU(b,z)
y.fQ(a,b)
return y}}},jd:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aH,aw,c_",
js:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aH+"];\n"
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
jz:function(a){var z
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
jt:function(a){var z
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
jH:function(a){var z,y
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
jI:function(a){var z,y
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
jB:function(a){var z
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
jM:function(a){var z
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
aN:function(a,b,c){var z
if(b===C.d)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.c.aY(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
jw:function(a){var z,y
z=this.a
if(z===C.d)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aN(a,z,"emission")
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
case C.f:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
jr:function(a){var z,y
z=this.b
if(z===C.d)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aN(a,z,"ambient")
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
case C.f:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
ju:function(a){var z,y
z=this.c
if(z===C.d)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aN(a,z,"diffuse")
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
case C.f:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
jx:function(a){var z,y
z=this.d
if(z===C.d)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aN(a,z,"invDiffuse")
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
case C.f:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
jF:function(a){var z,y
z=this.e
if(z===C.d)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aN(a,z,"specular")
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
case C.f:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
jA:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.d:break
case C.i:break
case C.f:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.h:z+="uniform samplerCube bumpTxt;\n"
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
case C.f:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.h:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
jD:function(a){var z,y
z=this.r
if(z===C.d)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aN(a,z,"reflect")
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
case C.f:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jE:function(a){var z,y
z=this.x
if(z===C.d)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aN(a,z,"refract")
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
case C.f:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jv:function(a){var z,y
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
jC:function(a){var z,y
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
jG:function(a){var z,y
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
jJ:function(a){var z,y,x
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
jK:function(a){var z,y,x
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
jL:function(a){var z,y,x
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
jy:function(a){var z
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
i:function(a){return this.aw}},dZ:{"^":"c;a,b,c"},e2:{"^":"c;a,b,c,d,e,f,r,x"},e0:{"^":"c;a,b,c,d,e,f,r"},e3:{"^":"c;a,b,c,d,e,f,r,x,y,z"},e1:{"^":"c;a,b,c,d,e,f,r,x,y,z"},e4:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dN:{"^":"de;",
fU:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dW:function(a,b){var z,y,x
z=this.a
y=C.b.k5(z,b)
C.b.fI(z,y,a)
C.b.jZ(z,y)
if(!H.hC(C.b.fE(z,y,35713))){x=C.b.fD(z,y)
C.b.k8(z,y)
throw H.e(P.u("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
j_:function(){var z,y,x,w,v,u
z=H.b([],[A.er])
y=this.a
x=H.X(C.b.cl(y,this.r,35721))
if(typeof x!=="number")return H.i(x)
w=0
for(;w<x;++w){v=C.b.fu(y,this.r,w)
u=C.b.fw(y,this.r,v.name)
C.a.h(z,new A.er(y,v.name,u))}this.x=new A.hZ(z)},
j1:function(){var z,y,x,w,v,u
z=H.b([],[A.ag])
y=this.a
x=H.X(C.b.cl(y,this.r,35718))
if(typeof x!=="number")return H.i(x)
w=0
for(;w<x;++w){v=C.b.fv(y,this.r,w)
u=C.b.fF(y,this.r,v.name)
C.a.h(z,this.k6(v.type,v.size,v.name,u))}this.y=new A.kB(z)},
b3:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.H(z,y,b,c)
else return A.dY(z,y,b,a,c)},
hE:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ar(z,y,b,c)
else return A.dY(z,y,b,a,c)},
hF:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.as(z,y,b,c)
else return A.dY(z,y,b,a,c)},
bU:function(a,b){return new P.h7(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
k6:function(a,b,c,d){switch(a){case 5120:return this.b3(b,c,d)
case 5121:return this.b3(b,c,d)
case 5122:return this.b3(b,c,d)
case 5123:return this.b3(b,c,d)
case 5124:return this.b3(b,c,d)
case 5125:return this.b3(b,c,d)
case 5126:return new A.W(this.a,this.r,c,d)
case 35664:return new A.kw(this.a,this.r,c,d)
case 35665:return new A.G(this.a,this.r,c,d)
case 35666:return new A.kz(this.a,this.r,c,d)
case 35667:return new A.kx(this.a,this.r,c,d)
case 35668:return new A.ky(this.a,this.r,c,d)
case 35669:return new A.kA(this.a,this.r,c,d)
case 35674:return new A.kD(this.a,this.r,c,d)
case 35675:return new A.e_(this.a,this.r,c,d)
case 35676:return new A.aG(this.a,this.r,c,d)
case 35678:return this.hE(b,c,d)
case 35680:return this.hF(b,c,d)
case 35670:throw H.e(this.bU("BOOL",c))
case 35671:throw H.e(this.bU("BOOL_VEC2",c))
case 35672:throw H.e(this.bU("BOOL_VEC3",c))
case 35673:throw H.e(this.bU("BOOL_VEC4",c))
default:throw H.e(P.u("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cE:{"^":"c;a,b",
i:function(a){return this.b}},ag:{"^":"c;"},kB:{"^":"c;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
p:function(a,b){var z=this.k(0,b)
if(z==null)throw H.e(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.U()},
kk:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w)x+=z[w].i(0)+a
return x},
U:function(){return this.kk("\n")}},H:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},kx:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},ky:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},kA:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},kv:{"^":"ag;0e,0f,a,b,c,d",
sjp:function(a){this.e=H.d(a,"$isa",[P.j],"$asa")},
i:function(a){return"Uniform1iv: "+H.l(this.c)},
n:{
dY:function(a,b,c,d,e){var z=new A.kv(a,b,c,e)
z.f=d
z.sjp(P.j1(d,0,!1,P.j))
return z}}},W:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},kw:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},G:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},kz:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},kD:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},e_:{"^":"ag;a,b,c,d",
aB:function(a){var z=new Float32Array(H.bs(H.d(a,"$isa",[P.x],"$asa")))
C.b.fl(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aG:{"^":"ag;a,b,c,d",
aB:function(a){var z=new Float32Array(H.bs(H.d(a,"$isa",[P.x],"$asa")))
C.b.fm(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},ar:{"^":"ag;a,b,c,d",
fH:function(a){var z,y,x
z=a==null||!a.gae(a)
y=this.a
x=this.d
if(z)C.b.T(y,x,0)
else C.b.T(y,x,a.gad(a))},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},as:{"^":"ag;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",af:{"^":"c;0a,0b,0c,0d,0e",
ht:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bT()
if(y!=null)v=v.m(0,y)
if(x!=null)v=v.m(0,x)
if(w!=null)v=v.m(0,w)
if(v.f3())return
return v.B(0,Math.sqrt(v.G(v)))},
hz:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.v(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.B(0,Math.sqrt(z.G(z)))
z=w.v(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.bv(z.B(0,Math.sqrt(z.G(z))))
return z.B(0,Math.sqrt(z.G(z)))},
cZ:function(){if(this.d!=null)return!0
var z=this.ht()
if(z==null){z=this.hz()
if(z==null)return!1}this.d=z
this.a.a.ab()
return!0},
hs:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bT()
if(y!=null)v=v.m(0,y)
if(x!=null)v=v.m(0,x)
if(w!=null)v=v.m(0,w)
if(v.f3())return
return v.B(0,Math.sqrt(v.G(v)))},
hy:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
y=o.b
if(typeof z!=="number")return z.v()
if(typeof y!=="number")return H.i(y)
n=z-y
if($.m.$2(n,0)){z=r.v(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.B(0,Math.sqrt(z.G(z)))
z=o.a
p=p.a
if(typeof z!=="number")return z.v()
if(typeof p!=="number")return H.i(p)
if(z-p<0)m=m.N(0)}else{y=q.b
if(typeof y!=="number")return H.i(y)
l=(z-y)/n
y=r.v(0,u).j(0,l).m(0,u).v(0,x)
y=new V.E(y.a,y.b,y.c)
m=y.B(0,Math.sqrt(y.G(y)))
o=o.a
p=p.a
if(typeof o!=="number")return o.v()
if(typeof p!=="number")return H.i(p)
q=q.a
if(typeof q!=="number")return H.i(q)
if((o-p)*l+p-q<0)m=m.N(0)}z=this.d
if(z!=null){k=z.B(0,Math.sqrt(z.G(z)))
z=k.bv(m)
z=z.B(0,Math.sqrt(z.G(z))).bv(k)
m=z.B(0,Math.sqrt(z.G(z)))}return m},
cY:function(){if(this.e!=null)return!0
var z=this.hs()
if(z==null){z=this.hy()
if(z==null)return!1}this.e=z
this.a.a.ab()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.U()},
H:function(a){var z,y
z=this.a
if(z==null||this.b==null||this.c==null)return a+"disposed"
y=a+C.c.aW(J.az(z.e),0)+", "+C.c.aW(J.az(this.b.e),0)+", "+C.c.aW(J.az(this.c.e),0)+" {"
z=this.d
y=z!=null?y+(z.i(0)+", "):y+"-, "
z=this.e
return z!=null?y+(z.i(0)+"}"):y+"-}"},
U:function(){return this.H("")}},cn:{"^":"c;"},cQ:{"^":"c;"},dJ:{"^":"c;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q",
shr:function(a){this.e=H.d(a,"$isa",[Z.c5],"$asa")},
scP:function(a){this.f=H.d(a,"$isa",[P.x],"$asa")},
sbq:function(a){this.r=H.d(a,"$isa",[P.j],"$asa")},
scC:function(a){this.x=H.d(a,"$isa",[P.j],"$asa")},
scz:function(a){this.y=H.d(a,"$isa",[P.j],"$asa")},
gu:function(){var z=this.Q
if(z==null){z=D.C()
this.Q=z}return z},
bt:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
H.d(a,"$isa",[F.bo],"$asa")
z=a.length
y=new Array(z*this.c)
y.fixed$length=Array
x=H.b(y,[P.x])
for(y=this.a,w=0,v=0;v<this.b;++v){u=y.cR(v)
for(t=0;t<z;++t){if(t>=a.length)return H.f(a,t)
s=a[t].f4(u)
r=w+t*this.c
for(q=0;q<s.length;++q){C.a.l(x,r,s[q]);++r}}w+=u.gbl(u)}p=$.$get$a1()
if((y.a&p.a)!==0){y=this.z
if(y==null){if(0>=a.length)return H.f(a,0)
y=a[0].f
y=V.fm(y.a,y.b,y.c,0,0,0)
this.z=y}for(v=z-1;v>=0;--v){if(v>=a.length)return H.f(a,v)
p=a[v].f
o=p.a
n=p.b
p=p.c
m=y.d
l=y.a
if(typeof o!=="number")return o.L()
if(typeof l!=="number")return H.i(l)
if(o<l){m+=l-o
k=o}else{if(o>l+m)m=o-l
k=l}j=y.e
o=y.b
if(typeof n!=="number")return n.L()
if(typeof o!=="number")return H.i(o)
if(n<o){j+=o-n
i=n}else{if(n>o+j)j=n-o
i=o}h=y.f
y=y.c
if(typeof p!=="number")return p.L()
if(typeof y!=="number")return H.i(y)
if(p<y){h+=y-p
g=p}else{if(p>y+h)h=p-y
g=y}y=new V.dL(k,i,g,m,j,h)
this.z=y}}r=this.d
this.d=r+z
C.a.aQ(this.f,x)
this.ab()
return r},
bs:function(a){var z,y,x,w,v,u,t
z=P.j
H.d(a,"$isa",[z],"$asa")
y=a.length
if(y>=3){x=new Array((y-2)*3)
x.fixed$length=Array
w=H.b(x,[z])
if(0>=a.length)return H.f(a,0)
v=a[0]
for(u=2,t=0;u<y;++u,t+=3){C.a.l(w,t,v)
z=u-1
if(z>=a.length)return H.f(a,z)
C.a.l(w,t+1,a[z])
if(u>=a.length)return H.f(a,u)
C.a.l(w,t+2,a[u])}C.a.aQ(this.y,w)
this.ab()}},
jQ:function(a){var z,y,x,w,v,u,t,s,r,q
z=P.j
H.d(a,"$isa",[z],"$asa")
y=a.length
if(y>=3){x=new Array((y-2)*3)
x.fixed$length=Array
w=H.b(x,[z])
for(v=!1,u=2,t=0;u<y;++u,t+=3){z=u-2
x=t+1
s=u-1
r=t+2
q=a.length
if(v){if(z>=q)return H.f(a,z)
C.a.l(w,t,a[z])
if(s>=a.length)return H.f(a,s)
C.a.l(w,x,a[s])
if(u>=a.length)return H.f(a,u)
C.a.l(w,r,a[u])
v=!1}else{if(s>=q)return H.f(a,s)
C.a.l(w,t,a[s])
if(z>=a.length)return H.f(a,z)
C.a.l(w,x,a[z])
if(u>=a.length)return H.f(a,u)
C.a.l(w,r,a[u])
v=!0}}C.a.aQ(this.y,w)
this.ab()}},
a8:function(a){var z=this.Q
if(!(z==null))z.E(a)},
ab:function(){return this.a8(null)},
aS:function(){return!1},
bc:function(){return!1},
bX:function(){return!1},
ep:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.a
if(!J.Y(b,z))throw H.e(P.u("Shape was reduced to "+H.l(z)+" so can not build for "+H.l(b)+"."))
if(this.e==null){y=this.c*4
x=new Array(this.b)
x.fixed$length=Array
this.shr(H.b(x,[Z.c5]))
for(w=0,v=0;v<this.b;++v){u=z.cR(v)
t=u.gbl(u)
x=this.e;(x&&C.a).l(x,v,new Z.c5(u,t,w*4,y,0))
w+=t}}x=a.a
s=new Z.dh(Z.h4(x,34962,H.d(this.f,"$isa",[P.x],"$asa")),this.e,z)
s.se0(H.b([],[Z.b4]))
z=this.r
if(z.length!==0){r=Z.cu(x,34963,H.d(z,"$isa",[P.j],"$asa"))
C.a.h(s.b,new Z.b4(0,this.r.length,r))}z=this.x
if(z.length!==0){r=Z.cu(x,34963,H.d(z,"$isa",[P.j],"$asa"))
C.a.h(s.b,new Z.b4(1,this.x.length,r))}z=this.y
if(z.length!==0){r=Z.cu(x,34963,H.d(z,"$isa",[P.j],"$asa"))
C.a.h(s.b,new Z.b4(4,this.y.length,r))}return s},
$isdO:1},fp:{"^":"c;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
aS:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aS()||!1
if(!this.a.aS())y=!1
z=this.e
if(!(z==null))z.aK()
return y},
bc:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.bc()||!1
if(!this.a.bc())y=!1
z=this.e
if(!(z==null))z.aK()
return y},
bX:function(){var z=this.e
if(!(z==null))++z.d
this.a.bX()
z=this.e
if(!(z==null))z.aK()
return!0},
ep:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.a.c.length
y=b.ges()
x=b.gbl(b)
w=x*4
v=new Array(z*x)
v.fixed$length=Array
u=P.x
t=H.b(v,[u])
v=new Array(y)
v.fixed$length=Array
s=H.b(v,[Z.c5])
for(r=0,q=0;q<y;++q){p=b.cR(q)
o=p.gbl(p)
C.a.l(s,q,new Z.c5(p,o,r*4,w,0))
for(n=0;n<z;++n){v=this.a.c
if(n>=v.length)return H.f(v,n)
m=v[n].f4(p)
l=r+n*x
for(k=0;k<m.length;++k){C.a.l(t,l,m[k]);++l}}r+=o}v=a.a
j=new Z.dh(Z.h4(v,34962,H.d(t,"$isa",[u],"$asa")),s,b)
j.se0(H.b([],[Z.b4]))
this.b.b
if(this.c.b.length!==0){u=P.j
i=H.b([],[u])
for(q=0;h=this.c.b,q<h.length;++q){h=h[q].a
h.a.a.ba()
C.a.h(i,h.e)
h=this.c.b
if(q>=h.length)return H.f(h,q)
h=h[q].b
h.a.a.ba()
C.a.h(i,h.e)}g=Z.cu(v,34963,H.d(i,"$isa",[u],"$asa"))
C.a.h(j.b,new Z.b4(1,i.length,g))}if(this.d.b.length!==0){u=P.j
i=H.b([],[u])
for(q=0;h=this.d.b,q<h.length;++q){h=h[q].a
h.a.a.ba()
C.a.h(i,h.e)
h=this.d.b
if(q>=h.length)return H.f(h,q)
h=h[q].b
h.a.a.ba()
C.a.h(i,h.e)
h=this.d.b
if(q>=h.length)return H.f(h,q)
h=h[q].c
h.a.a.ba()
C.a.h(i,h.e)}g=Z.cu(v,34963,H.d(i,"$isa",[u],"$asa"))
C.a.h(j.b,new Z.b4(4,i.length,g))}return j},
i:function(a){var z=H.b([],[P.p])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.H("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.H("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.H("   "))}return C.a.C(z,"\n")},
a8:function(a){var z=this.e
if(!(z==null))z.E(a)},
ab:function(){return this.a8(null)},
$isdO:1},dO:{"^":"dl;"},jZ:{"^":"c;a,0b",
scz:function(a){this.b=H.d(a,"$isa",[F.af],"$asa")},
jN:function(a){var z,y,x,w,v,u,t,s,r
H.d(a,"$isa",[F.bo],"$asa")
z=H.b([],[F.af])
y=a[0]
for(x=this.a,w=2;w<4;++w){v=a[w-1]
u=a[w]
x.a.h(0,y)
x.a.h(0,v)
x.a.h(0,u)
t=new F.af()
s=y.a
if(s==null)H.t(P.u("May not create a face with a first vertex which is not attached to a shape."))
r=v.a
if(s==null?r==null:s===r){r=u.a
r=s==null?r!=null:s!==r
s=r}else s=!0
if(s)H.t(P.u("May not create a face with vertices attached to different shapes."))
t.a=y
C.a.h(y.d.b,t)
t.b=v
C.a.h(v.d.c,t)
t.c=u
C.a.h(u.d.d,t)
C.a.h(t.a.a.d.b,t)
v=t.a.a.e
if(!(v==null))v.E(null)
C.a.h(z,t)}return z},
gq:function(a){return this.b.length},
aS:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].cZ())x=!1
return x},
bc:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].cY())x=!1
return x},
i:function(a){return this.U()},
H:function(a){var z,y,x,w
z=H.b([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].H(a))
return C.a.C(z,"\n")},
U:function(){return this.H("")}},k_:{"^":"c;a,0b",
scC:function(a){this.b=H.d(a,"$isa",[F.cn],"$asa")},
gq:function(a){return this.b.length},
i:function(a){return this.U()},
H:function(a){var z,y,x,w
z=H.b([],[P.p])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].H(a+(""+x+". ")))}return C.a.C(z,"\n")},
U:function(){return this.H("")}},k0:{"^":"c;a,0b",
sbq:function(a){this.b=H.d(a,"$isa",[F.cQ],"$asa")},
gq:function(a){return 0},
i:function(a){return this.U()},
H:function(a){var z,y,x
z=H.b([],[P.p])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.f(y,x)
C.a.h(z,y[x].H(a))}return C.a.C(z,"\n")},
U:function(){return this.H("")}},bo:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
f4:function(a){var z,y
z=J.I(a)
if(z.t(a,$.$get$a1())){z=this.f
y=[P.x]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$ad())){z=this.r
y=[P.x]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aT())){z=this.x
y=[P.x]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$a4())){z=this.y
y=[P.x]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.t(a,$.$get$aU())){z=this.z
y=[P.x]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bU())){z=this.Q
y=[P.x]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bV())){z=this.Q
y=[P.x]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$bq()))return H.b([this.ch],[P.x])
else if(z.t(a,$.$get$aS())){z=this.cx
y=[P.x]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.x])},
cZ:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bT()
this.d.a5(0,new F.l6(z))
z=z.a
this.r=z.B(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.ab()
z=this.a.e
if(!(z==null))z.aK()}return!0},
cY:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bT()
this.d.a5(0,new F.l5(z))
z=z.a
this.x=z.B(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.ab()
z=this.a.e
if(!(z==null))z.aK()}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.U()},
H:function(a){var z,y,x
z=H.b([],[P.p])
C.a.h(z,C.c.aW(J.az(this.e),0))
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
C.a.h(z,V.z(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.C(z,", ")
return a+"{"+x+"}"},
U:function(){return this.H("")},
n:{
bp:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.bo()
y=new F.l4(z)
y.sbq(H.b([],[F.cQ]))
z.b=y
y=new F.l3(z)
x=[F.cn]
y.shY(H.b([],x))
y.shZ(H.b([],x))
z.c=y
y=new F.l0(z)
x=[F.af]
y.shL(H.b([],x))
y.shM(H.b([],x))
y.shN(H.b([],x))
z.d=y
z.e=0
y=h.a
z.f=(y&$.$get$a1().a)!==0?d:null
z.r=(y&$.$get$ad().a)!==0?e:null
z.x=(y&$.$get$aT().a)!==0?b:null
z.y=(y&$.$get$a4().a)!==0?f:null
z.z=(y&$.$get$aU().a)!==0?g:null
z.Q=(y&$.$get$h1().a)!==0?c:null
z.ch=(y&$.$get$bq().a)!==0?i:0
z.cx=(y&$.$get$aS().a)!==0?a:null
return z}}},l6:{"^":"q:5;a",
$1:function(a){var z,y
H.h(a,"$isaf")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.m(0,z)}}},l5:{"^":"q:5;a",
$1:function(a){var z,y
H.h(a,"$isaf")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.m(0,z)}}},l_:{"^":"c;a,0b,0c",
scP:function(a){this.c=H.d(a,"$isa",[F.bo],"$asa")},
ba:function(){},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.e(P.u("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.ab()
return!0},
jP:function(a,b,c,d,e,f,g,h,i){var z=F.bp(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bV:function(a,b,c,d,e,f){return this.jP(a,null,b,c,null,d,e,f,0)},
gq:function(a){return this.c.length},
aS:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].cZ()
return!0},
bc:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].cY()
return!0},
bX:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
if(typeof u!=="number")return u.j()
t=v.b
if(typeof t!=="number")return t.j()
s=v.c
if(typeof s!=="number")return s.j()
s=v.B(0,Math.sqrt(u*u+t*t+s*s))
if(!J.Y(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
i:function(a){return this.U()},
H:function(a){var z,y,x,w
this.ba()
z=H.b([],[P.p])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].H(a))
return C.a.C(z,"\n")},
U:function(){return this.H("")}},l0:{"^":"c;a,0b,0c,0d",
shL:function(a){this.b=H.d(a,"$isa",[F.af],"$asa")},
shM:function(a){this.c=H.d(a,"$isa",[F.af],"$asa")},
shN:function(a){this.d=H.d(a,"$isa",[F.af],"$asa")},
gq:function(a){return this.b.length+this.c.length+this.d.length},
a5:function(a,b){H.o(b,{func:1,ret:-1,args:[F.af]})
C.a.a5(this.b,b)
C.a.a5(this.c,new F.l1(this,b))
C.a.a5(this.d,new F.l2(this,b))},
i:function(a){return this.U()},
H:function(a){var z,y,x,w
z=H.b([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].H(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].H(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].H(a))
return C.a.C(z,"\n")},
U:function(){return this.H("")}},l1:{"^":"q:5;a,b",
$1:function(a){H.h(a,"$isaf")
if(!J.Y(a.a,this.a))this.b.$1(a)}},l2:{"^":"q:5;a,b",
$1:function(a){var z
H.h(a,"$isaf")
z=this.a
if(!J.Y(a.a,z)&&!J.Y(a.b,z))this.b.$1(a)}},l3:{"^":"c;a,0b,0c",
shY:function(a){this.b=H.d(a,"$isa",[F.cn],"$asa")},
shZ:function(a){this.c=H.d(a,"$isa",[F.cn],"$asa")},
gq:function(a){return this.b.length+this.c.length},
i:function(a){return this.U()},
H:function(a){var z,y,x,w
z=H.b([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].H(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].H(a))
return C.a.C(z,"\n")},
U:function(){return this.H("")}},l4:{"^":"c;a,0b",
sbq:function(a){this.b=H.d(a,"$isa",[F.cQ],"$asa")},
gq:function(a){return 0},
i:function(a){return this.U()},
H:function(a){var z,y,x
z=H.b([],[P.p])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.f(y,x)
C.a.h(z,y[x].H(a))}return C.a.C(z,"\n")},
U:function(){return this.H("")}}}],["","",,O,{"^":"",dB:{"^":"cS;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
shv:function(a){this.e=H.d(a,"$isR",[V.ao],"$asR")},
gu:function(){var z=this.dy
if(z==null){z=D.C()
this.dy=z}return z},
a2:[function(a){var z
H.h(a,"$isw")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.a2(null)},"hb","$1","$0","gbN",0,2,1],
iS:[function(a){H.h(a,"$isw")
this.a=null
this.a2(a)},function(){return this.iS(null)},"lR","$1","$0","giR",0,2,1],
lp:[function(a,b){var z=V.ao
z=new D.ck(a,H.d(b,"$isn",[z],"$asn"),this,[z])
z.b=!0
this.a2(z)},"$2","gi8",8,0,17],
lq:[function(a,b){var z=V.ao
z=new D.cl(a,H.d(b,"$isn",[z],"$asn"),this,[z])
z.b=!0
this.a2(z)},"$2","gi9",8,0,17],
dT:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.e.a6(z.e.length+3,4)*4
x=C.e.a6(z.f.length+3,4)*4
w=C.e.a6(z.r.length+3,4)*4
v=C.e.a6(z.x.length+3,4)*4
u=C.e.a6(z.y.length+3,4)*4
t=C.e.a6(z.z.length+3,4)*4
s=C.e.a6(this.e.a.length+3,4)*4
z=this.f.c
r=this.r.c
q=this.x.c
p=this.y.c
o=this.z.c
n=this.Q.c
m=this.cx.c
l=this.cy.c
k=this.db.c
j="MaterialLight_"+C.e.i(z.a)+C.e.i(r.a)+C.e.i(q.a)+C.e.i(p.a)+C.e.i(o.a)+C.e.i(n.a)+C.e.i(m.a)+C.e.i(l.a)+C.e.i(k.a)
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
c=z===C.f||r===C.f||q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f
b=z===C.h||r===C.h||q===C.h||p===C.h||o===C.h||n===C.h||m===C.h||l===C.h||k===C.h
a=x+u+v+w+t>0
a0=s>0
a1=e||!g||f
a2=$.$get$a1()
if(e){g=$.$get$ad()
a2=new Z.ac(a2.a|g.a)}if(d){g=$.$get$aT()
a2=new Z.ac(a2.a|g.a)}if(c){g=$.$get$a4()
a2=new Z.ac(a2.a|g.a)}if(b){g=$.$get$aU()
a2=new Z.ac(a2.a|g.a)}if(a0){g=$.$get$aS()
a2=new Z.ac(a2.a|g.a)}return new A.jd(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
W:function(a,b){H.d(a,"$isa",[T.dS],"$asa")
if(b!=null)if(!C.a.av(a,b)){b.sad(0,a.length)
C.a.h(a,b)}},
ag:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.au(z,z.length,0,[H.r(z,0)]);z.D();){y=z.d
y.toString
x=$.cX
if(x==null){x=new V.E(0,0,1)
$.cX=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.az(x)}}},
kP:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=this.a
if(z==null){z=this.dT()
y=a.fr.k(0,z.aw)
if(y==null){y=A.j9(z,a.a)
x=y.b
if(x.length===0)H.t(P.u("May not cache a shader with no name."))
if(a.fr.bZ(x))H.t(P.u('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.l(0,x,y)}this.a=y
a0.e=null
z=y}w=z.z
v=w.c_
z=a0.e
if(!(z instanceof Z.dh)){a0.e=null
z=null}if(z==null||!J.Y(z.d,v)){z=w.r1
if(z)a0.d.aS()
u=w.r2
if(u)a0.d.bc()
t=w.ry
if(t)a0.d.bX()
s=a0.d.ep(new Z.l7(a.a),v)
s.bg($.$get$a1()).e=this.a.Q.c
if(z)s.bg($.$get$ad()).e=this.a.cx.c
if(u)s.bg($.$get$aT()).e=this.a.ch.c
if(w.rx)s.bg($.$get$a4()).e=this.a.cy.c
if(t)s.bg($.$get$aU()).e=this.a.db.c
if(w.x1)s.bg($.$get$aS()).e=this.a.dx.c
a0.e=s}z=T.dS
r=H.b([],[z])
u=this.a
t=a.a
C.b.fo(t,u.r)
u.x.kg()
if(w.fx){u=this.a
q=a.dx.ga1()
u=u.dy
u.toString
u.aB(q.ar(0,!0))}if(w.fy){u=this.a
q=a.cx
if(q==null){q=a.db.ga1().j(0,a.dx.ga1())
a.cx=q}u=u.fr
u.toString
u.aB(q.ar(0,!0))}u=this.a
q=a.ch
if(q==null){q=a.gkM().j(0,a.dx.ga1())
a.ch=q}u=u.fy
u.toString
u.aB(q.ar(0,!0))
if(w.x2){u=this.a
q=this.b
u=u.k1
u.toString
u.aB(C.q.ar(q,!0))}if(w.y1){u=this.a
q=this.c
u=u.k2
u.toString
u.aB(C.q.ar(q,!0))}if(w.y2){u=this.a
q=this.d
u=u.k3
u.toString
u.aB(C.q.ar(q,!0))}if(w.aH>0){p=this.e.a.length
u=this.a.k4
C.b.T(u.a,u.d,p)
for(u=[P.x],o=0;o<p;++o){q=this.a
n=this.e.a
if(o>=n.length)return H.f(n,o)
n=n[o]
q.toString
H.h(n,"$isao")
q=q.r1
if(o>=q.length)return H.f(q,o)
q=q[o]
m=new Float32Array(H.bs(H.d(n.ar(0,!0),"$isa",u,"$asa")))
C.b.fm(q.a,q.d,!1,m)}}switch(w.a){case C.d:break
case C.i:u=this.a
q=this.f.f
u=u.r2
u.toString
n=q.a
l=q.b
q=q.c
C.b.A(u.a,u.d,n,l,q)
break
case C.f:this.W(r,this.f.d)
u=this.a
q=this.f.d
u.au(u.rx,u.x1,q)
q=this.a
u=this.f.f
q=q.r2
q.toString
n=u.a
l=u.b
u=u.c
C.b.A(q.a,q.d,n,l,u)
break
case C.h:this.W(r,this.f.e)
u=this.a
q=this.f.e
u.am(u.ry,u.x1,q)
q=this.a
u=this.f.f
q=q.r2
q.toString
n=u.a
l=u.b
u=u.c
C.b.A(q.a,q.d,n,l,u)
break}if(w.k2){switch(w.b){case C.d:break
case C.i:u=this.a
q=this.r.f
u=u.x2
u.toString
n=q.a
l=q.b
q=q.c
C.b.A(u.a,u.d,n,l,q)
break
case C.f:this.W(r,this.r.d)
u=this.a
q=this.r.d
u.au(u.y1,u.aH,q)
q=this.a
u=this.r.f
q=q.x2
q.toString
n=u.a
l=u.b
u=u.c
C.b.A(q.a,q.d,n,l,u)
break
case C.h:this.W(r,this.r.e)
u=this.a
q=this.r.e
u.am(u.y2,u.aH,q)
q=this.a
u=this.r.f
q=q.x2
q.toString
n=u.a
l=u.b
u=u.c
C.b.A(q.a,q.d,n,l,u)
break}switch(w.c){case C.d:break
case C.i:u=this.a
q=this.x.f
u=u.aw
u.toString
n=q.a
l=q.b
q=q.c
C.b.A(u.a,u.d,n,l,q)
break
case C.f:this.W(r,this.x.d)
u=this.a
q=this.x.d
u.au(u.c_,u.c0,q)
q=this.a
u=this.x.f
q=q.aw
q.toString
n=u.a
l=u.b
u=u.c
C.b.A(q.a,q.d,n,l,u)
break
case C.h:this.W(r,this.x.e)
u=this.a
q=this.x.e
u.am(u.ey,u.c0,q)
q=this.a
u=this.x.f
q=q.aw
q.toString
n=u.a
l=u.b
u=u.c
C.b.A(q.a,q.d,n,l,u)
break}switch(w.d){case C.d:break
case C.i:u=this.a
q=this.y.f
u=u.c1
u.toString
n=q.a
l=q.b
q=q.c
C.b.A(u.a,u.d,n,l,q)
break
case C.f:this.W(r,this.y.d)
u=this.a
q=this.y.d
u.au(u.ez,u.c2,q)
q=this.a
u=this.y.f
q=q.c1
q.toString
n=u.a
l=u.b
u=u.c
C.b.A(q.a,q.d,n,l,u)
break
case C.h:this.W(r,this.y.e)
u=this.a
q=this.y.e
u.am(u.eA,u.c2,q)
q=this.a
u=this.y.f
q=q.c1
q.toString
n=u.a
l=u.b
u=u.c
C.b.A(q.a,q.d,n,l,u)
break}switch(w.e){case C.d:break
case C.i:u=this.a
q=this.z.f
u=u.c3
u.toString
n=q.a
l=q.b
q=q.c
C.b.A(u.a,u.d,n,l,q)
q=this.a
l=this.z.ch
q=q.c5
C.b.P(q.a,q.d,l)
break
case C.f:this.W(r,this.z.d)
u=this.a
q=this.z.d
u.au(u.eB,u.c4,q)
q=this.a
u=this.z.f
q=q.c3
q.toString
n=u.a
l=u.b
u=u.c
C.b.A(q.a,q.d,n,l,u)
u=this.a
l=this.z.ch
u=u.c5
C.b.P(u.a,u.d,l)
break
case C.h:this.W(r,this.z.e)
u=this.a
q=this.z.e
u.am(u.eC,u.c4,q)
q=this.a
u=this.z.f
q=q.c3
q.toString
n=u.a
l=u.b
u=u.c
C.b.A(q.a,q.d,n,l,u)
u=this.a
l=this.z.ch
u=u.c5
C.b.P(u.a,u.d,l)
break}if(w.z>0){p=this.dx.e.length
u=this.a.eN
C.b.T(u.a,u.d,p)
k=a.db.ga1()
for(u=this.dx.e,q=u.length,j=0,i=0;i<u.length;u.length===q||(0,H.A)(u),++i){h=u[i]
n=this.a.d3
if(j>=n.length)return H.f(n,j)
g=n[j]
n=k.az(h.a)
l=n.a
if(typeof l!=="number")return l.j()
f=n.b
if(typeof f!=="number")return f.j()
e=n.c
if(typeof e!=="number")return e.j()
e=n.B(0,Math.sqrt(l*l+f*f+e*e))
f=g.b
l=e.a
n=e.b
e=e.c
C.b.A(f.a,f.d,l,n,e)
e=h.c
n=g.c
C.b.A(n.a,n.d,e.a,e.b,e.c);++j}}if(w.Q>0){p=this.dx.f.length
u=this.a.eO
C.b.T(u.a,u.d,p)
k=a.db.ga1()
for(u=this.dx.f,q=u.length,j=0,i=0;i<u.length;u.length===q||(0,H.A)(u),++i){h=u[i]
n=this.a.d4
if(j>=n.length)return H.f(n,j)
g=n[j]
n=h.gbB(h)
l=g.b
f=n.gdr(n)
e=n.gds(n)
n=n.gdt(n)
C.b.A(l.a,l.d,f,e,n)
n=k.S(h.gbB(h))
e=g.c
C.b.A(e.a,e.d,n.a,n.b,n.c)
n=h.gaG(h)
e=g.d
f=n.gci()
l=n.gbK()
n=n.gbW()
C.b.A(e.a,e.d,f,l,n)
n=h.gcS()
l=g.e
C.b.P(l.a,l.d,n)
n=h.gcT()
l=g.f
C.b.P(l.a,l.d,n)
n=h.gcU()
l=g.r
C.b.P(l.a,l.d,n);++j}}if(w.ch>0){p=this.dx.r.length
u=this.a.eP
C.b.T(u.a,u.d,p)
k=a.db.ga1()
for(u=this.dx.r,q=u.length,j=0,i=0;i<u.length;u.length===q||(0,H.A)(u),++i){h=u[i]
n=this.a.d5
if(j>=n.length)return H.f(n,j)
g=n[j]
n=h.gbB(h)
l=g.b
f=n.gdr(n)
e=n.gds(n)
n=n.gdt(n)
C.b.A(l.a,l.d,f,e,n)
n=h.gd1(h).m_()
e=g.c
f=n.gbd(n)
l=n.gbe(n)
n=n.gbf()
C.b.A(e.a,e.d,f,l,n)
n=k.S(h.gbB(h))
l=g.d
C.b.A(l.a,l.d,n.a,n.b,n.c)
n=h.gaG(h)
l=g.e
f=n.gci()
e=n.gbK()
n=n.gbW()
C.b.A(l.a,l.d,f,e,n)
n=h.glY()
e=g.f
C.b.P(e.a,e.d,n)
n=h.glX()
e=g.r
C.b.P(e.a,e.d,n)
n=h.gcS()
e=g.x
C.b.P(e.a,e.d,n)
n=h.gcT()
e=g.y
C.b.P(e.a,e.d,n)
n=h.gcU()
e=g.z
C.b.P(e.a,e.d,n);++j}}if(w.cx>0){p=this.dx.x.length
u=this.a.eQ
C.b.T(u.a,u.d,p)
k=a.db.ga1()
for(u=this.dx.x,q=u.length,n=[z],j=0,i=0;i<u.length;u.length===q||(0,H.A)(u),++i){h=u[i]
l=this.a.d6
if(j>=l.length)return H.f(l,j)
g=l[j]
l=h.gbC()
H.d(r,"$isa",n,"$asa")
if(!C.a.av(r,l)){l.sad(0,r.length)
C.a.h(r,l)}l=h.gd1(h)
f=g.d
e=l.gbd(l)
d=l.gbe(l)
l=l.gbf()
C.b.A(f.a,f.d,e,d,l)
l=h.gl3()
d=g.b
e=l.gbd(l)
f=l.gbe(l)
l=l.gbf()
C.b.A(d.a,d.d,e,f,l)
l=h.gax(h)
f=g.c
e=l.gbd(l)
d=l.gbe(l)
l=l.gbf()
C.b.A(f.a,f.d,e,d,l)
l=k.az(h.gd1(h))
d=l.a
if(typeof d!=="number")return d.j()
e=l.b
if(typeof e!=="number")return e.j()
f=l.c
if(typeof f!=="number")return f.j()
f=l.B(0,Math.sqrt(d*d+e*e+f*f))
e=g.e
d=f.a
l=f.b
f=f.c
C.b.A(e.a,e.d,d,l,f)
f=h.gaG(h)
l=g.f
d=f.gci()
e=f.gbK()
f=f.gbW()
C.b.A(l.a,l.d,d,e,f)
f=h.gbC()
l=f.gae(f)
if(!l){l=g.x
C.b.T(l.a,l.d,1)}else{l=g.r
e=f.gae(f)
d=l.a
l=l.d
if(!e)C.b.T(d,l,0)
else C.b.T(d,l,f.gad(f))
l=g.x
C.b.T(l.a,l.d,0)}++j}}if(w.cy>0){p=this.dx.y.length
u=this.a.eR
C.b.T(u.a,u.d,p)
k=a.db.ga1()
for(u=this.dx.y,q=u.length,n=[P.x],l=[z],j=0,i=0;i<u.length;u.length===q||(0,H.A)(u),++i){h=u[i]
f=this.a.d7
if(j>=f.length)return H.f(f,j)
g=f[j]
f=h.gbC()
H.d(r,"$isa",l,"$asa")
if(!C.a.av(r,f)){f.sad(0,r.length)
C.a.h(r,f)}c=k.j(0,h.ga1())
f=h.ga1()
e=$.bQ
if(e==null){e=new V.v(0,0,0)
$.bQ=e}e=f.S(e)
f=g.b
d=e.gdr(e)
b=e.gds(e)
e=e.gdt(e)
C.b.A(f.a,f.d,d,b,e)
f=$.bQ
if(f==null){f=new V.v(0,0,0)
$.bQ=f}f=c.S(f)
e=g.c
C.b.A(e.a,e.d,f.a,f.b,f.c)
f=c.bx()
e=g.d
m=new Float32Array(H.bs(H.d(new V.aN(f.a,f.b,f.c,f.e,f.f,f.r,f.y,f.z,f.Q).ar(0,!0),"$isa",n,"$asa")))
C.b.fl(e.a,e.d,!1,m)
e=h.gaG(h)
f=g.e
d=e.gci()
b=e.gbK()
e=e.gbW()
C.b.A(f.a,f.d,d,b,e)
e=h.gbC()
f=e.gae(e)
if(!f){f=g.r
C.b.T(f.a,f.d,1)}else{f=g.f
d=e.gae(e)
b=f.a
f=f.d
if(!d)C.b.T(b,f,0)
else C.b.T(b,f,e.gad(e))
f=g.r
C.b.T(f.a,f.d,0)}f=h.gcS()
e=g.x
C.b.P(e.a,e.d,f)
f=h.gcT()
e=g.y
C.b.P(e.a,e.d,f)
f=h.gcU()
e=g.z
C.b.P(e.a,e.d,f);++j}}if(w.db>0){p=this.dx.z.length
u=this.a.eS
C.b.T(u.a,u.d,p)
k=a.db.ga1()
for(u=this.dx.z,q=u.length,z=[z],j=0,i=0;i<u.length;u.length===q||(0,H.A)(u),++i){h=u[i]
n=this.a.d8
if(j>=n.length)return H.f(n,j)
g=n[j]
n=h.gbC()
H.d(r,"$isa",z,"$asa")
if(!C.a.av(r,n)){n.sad(0,r.length)
C.a.h(r,n)}n=h.gbB(h)
l=g.b
f=n.gdr(n)
e=n.gds(n)
n=n.gdt(n)
C.b.A(l.a,l.d,f,e,n)
n=h.gd1(h)
e=g.c
f=n.gbd(n)
l=n.gbe(n)
n=n.gbf()
C.b.A(e.a,e.d,f,l,n)
n=h.gl3()
l=g.d
f=n.gbd(n)
e=n.gbe(n)
n=n.gbf()
C.b.A(l.a,l.d,f,e,n)
n=h.gax(h)
e=g.e
f=n.gbd(n)
l=n.gbe(n)
n=n.gbf()
C.b.A(e.a,e.d,f,l,n)
n=k.S(h.gbB(h))
l=g.f
C.b.A(l.a,l.d,n.a,n.b,n.c)
n=h.gbC()
l=n.gae(n)
if(!l){n=g.x
C.b.T(n.a,n.d,1)}else{l=g.r
f=n.gae(n)
e=l.a
l=l.d
if(!f)C.b.T(e,l,0)
else C.b.T(e,l,n.gad(n))
n=g.x
C.b.T(n.a,n.d,0)}n=h.gaG(h)
l=g.y
f=n.gci()
e=n.gbK()
n=n.gbW()
C.b.A(l.a,l.d,f,e,n)
n=h.gm6()
e=g.z
C.b.P(e.a,e.d,n)
n=h.gm7()
e=g.Q
C.b.P(e.a,e.d,n)
n=h.gcS()
e=g.ch
C.b.P(e.a,e.d,n)
n=h.gcT()
e=g.cx
C.b.P(e.a,e.d,n)
n=h.gcU()
e=g.cy
C.b.P(e.a,e.d,n);++j}}}switch(w.f){case C.d:break
case C.i:break
case C.f:this.W(r,this.Q.d)
z=this.a
u=this.Q.d
z.au(z.eD,z.c6,u)
break
case C.h:this.W(r,this.Q.e)
z=this.a
u=this.Q.e
z.am(z.eE,z.c6,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db.ga1().bx()
a.Q=u}z=z.id
z.toString
z.aB(u.ar(0,!0))}if(w.dy){this.W(r,this.ch)
z=this.a
u=this.ch
z.am(z.eF,z.eG,u)
switch(w.r){case C.d:break
case C.i:z=this.a
u=this.cx.f
z=z.c7
z.toString
q=u.a
n=u.b
u=u.c
C.b.A(z.a,z.d,q,n,u)
break
case C.f:this.W(r,this.cx.d)
z=this.a
u=this.cx.d
z.au(z.eH,z.c8,u)
u=this.a
z=this.cx.f
u=u.c7
u.toString
q=z.a
n=z.b
z=z.c
C.b.A(u.a,u.d,q,n,z)
break
case C.h:this.W(r,this.cx.e)
z=this.a
u=this.cx.e
z.am(z.eI,z.c8,u)
u=this.a
z=this.cx.f
u=u.c7
u.toString
q=z.a
n=z.b
z=z.c
C.b.A(u.a,u.d,q,n,z)
break}switch(w.x){case C.d:break
case C.i:z=this.a
u=this.cy.f
z=z.ca
z.toString
q=u.a
n=u.b
u=u.c
C.b.A(z.a,z.d,q,n,u)
u=this.a
n=this.cy.ch
u=u.c9
C.b.P(u.a,u.d,n)
break
case C.f:this.W(r,this.cy.d)
z=this.a
u=this.cy.d
z.au(z.eJ,z.cb,u)
u=this.a
z=this.cy.f
u=u.ca
u.toString
q=z.a
n=z.b
z=z.c
C.b.A(u.a,u.d,q,n,z)
z=this.a
n=this.cy.ch
z=z.c9
C.b.P(z.a,z.d,n)
break
case C.h:this.W(r,this.cy.e)
z=this.a
u=this.cy.e
z.am(z.eK,z.cb,u)
u=this.a
z=this.cy.f
u=u.ca
u.toString
q=z.a
n=z.b
z=z.c
C.b.A(u.a,u.d,q,n,z)
z=this.a
n=this.cy.ch
z=z.c9
C.b.P(z.a,z.d,n)
break}}z=w.y
u=z!==C.d
if(u){switch(z){case C.d:break
case C.i:z=this.a
q=this.db.f
z=z.cc
C.b.P(z.a,z.d,q)
break
case C.f:this.W(r,this.db.d)
z=this.a
q=this.db.d
z.au(z.eL,z.cd,q)
q=this.a
z=this.db.f
q=q.cc
C.b.P(q.a,q.d,z)
break
case C.h:this.W(r,this.db.e)
z=this.a
q=this.db.e
z.am(z.eM,z.cd,q)
q=this.a
z=this.db.f
q=q.cc
C.b.P(q.a,q.d,z)
break}C.b.d2(t,3042)
C.b.jT(t,770,771)}for(o=0;o<r.length;++o)r[o].aR(a)
z=a0.e
z.aR(a)
z.bi(a)
z.bH(a)
if(u)C.b.kc(t,3042)
for(o=0;o<r.length;++o)r[o].bH(a)
z=this.a
z.toString
C.b.fo(t,null)
z.x.kd()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dT().aw},
n:{
f2:function(){var z,y,x
z=new O.dB()
z.shv(O.dm(V.ao))
z.e.bL(z.gi8(),z.gi9())
y=new O.bh(z,"emission")
y.c=C.d
y.f=new V.aa(0,0,0)
z.f=y
y=new O.bh(z,"ambient")
y.c=C.d
y.f=new V.aa(0,0,0)
z.r=y
y=new O.bh(z,"diffuse")
y.c=C.d
y.f=new V.aa(0,0,0)
z.x=y
y=new O.bh(z,"invDiffuse")
y.c=C.d
y.f=new V.aa(0,0,0)
z.y=y
y=new O.jf(z,"specular")
y.c=C.d
y.f=new V.aa(0,0,0)
y.ch=100
z.z=y
y=new O.jc(z,"bump")
y.c=C.d
z.Q=y
z.ch=null
y=new O.bh(z,"reflect")
y.c=C.d
y.f=new V.aa(0,0,0)
z.cx=y
y=new O.je(z,"refract")
y.c=C.d
y.f=new V.aa(0,0,0)
y.ch=1
z.cy=y
y=new O.jb(z,"alpha")
y.c=C.d
y.f=1
z.db=y
y=new D.iX()
y.bM(D.a8)
y.sh4(H.b([],[D.cG]))
y.sh5(H.b([],[D.fd]))
y.sh6(H.b([],[D.fq]))
y.sh7(H.b([],[D.fv]))
y.sh8(H.b([],[D.fw]))
y.sh9(H.b([],[D.fx]))
y.Q=null
y.ch=null
y.cp(y.gi7(),y.giy(),y.giA())
z.dx=y
x=y.Q
if(x==null){x=D.C()
y.Q=x
y=x}else y=x
y.h(0,z.giR())
y=z.dx
x=y.ch
if(x==null){x=D.C()
y.ch=x
y=x}else y=x
y.h(0,z.gbN())
z.dy=null
return z}}},jb:{"^":"dC;0f,a,b,0c,0d,0e",
iW:function(a){var z,y
z=this.f
if(!$.m.$2(z,a)){y=this.f
this.f=a
z=new D.B(this.b,y,a,this,[P.x])
z.b=!0
this.a.a2(z)}},
b7:function(){this.dA()
this.iW(1)}},dC:{"^":"c;",
a2:[function(a){this.a.a2(H.h(a,"$isw"))},function(){return this.a2(null)},"hb","$1","$0","gbN",0,2,1],
b7:["dA",function(){}],
iY:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gu().Y(0,this.gbN())
y=this.d
this.d=a
if(a!=null)a.gu().h(0,this.gbN())
z=new D.B(this.b+".texture2D",y,this.d,this,[T.bS])
z.b=!0
this.a.a2(z)}},
iZ:function(a){},
sbD:function(a){var z
if(a==null){if(this.c===C.f){this.c=C.i
z=this.a
z.a=null
z.a2(null)}}else{z=this.c
if(z!==C.f){if(z===C.d)this.b7()
this.c=C.f
this.iZ(null)
z=this.a
z.a=null
z.a2(null)}}this.iY(a)}},jc:{"^":"dC;a,b,0c,0d,0e"},bh:{"^":"dC;0f,a,b,0c,0d,0e",
ed:function(a){var z,y
if(!J.Y(this.f,a)){z=this.f
this.f=a
y=new D.B(this.b+".color",z,a,this,[V.aa])
y.b=!0
this.a.a2(y)}},
b7:["cq",function(){this.dA()
this.ed(new V.aa(1,1,1))}],
saG:function(a,b){var z
if(this.c===C.d){this.c=C.i
this.b7()
z=this.a
z.a=null
z.a2(null)}this.ed(b)}},je:{"^":"bh;0ch,0f,a,b,0c,0d,0e",
iX:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".refraction",y,a,this,[P.x])
z.b=!0
this.a.a2(z)}},
b7:function(){this.cq()
this.iX(1)}},jf:{"^":"bh;0ch,0f,a,b,0c,0d,0e",
cK:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".shininess",y,a,this,[P.x])
z.b=!0
this.a.a2(z)}},
b7:function(){this.cq()
this.cK(100)}},cS:{"^":"c;"}}],["","",,T,{"^":"",dS:{"^":"de;"},bS:{"^":"dS;"},kj:{"^":"bS;0a,0b,0c,0d,0e,0f",
sja:function(a){this.e=H.d(a,"$isa",[T.bS],"$asa")},
gad:function(a){return this.a},
sad:function(a,b){this.a=b
return b},
gae:function(a){var z=this.d
z=z==null?null:z.gae(z)
if(z==null){z=this.c
z=z==null?null:z.gae(z)}return z==null?!1:z},
gu:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
aR:function(a){var z
if(this.d==null){z=this.c
this.d=z
if(!(z==null))z.aR(a)}},
bH:function(a){var z=this.d
if(z!=null){z.bH(a)
this.d=null}}},kk:{"^":"bS;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gad:function(a){return this.a},
sad:function(a,b){this.a=b
return b},
gae:function(a){return this.d},
gu:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
aR:function(a){var z
if(!this.c&&this.d){this.c=!0
z=a.a
C.b.el(z,33984+this.a)
C.b.bb(z,3553,this.b)}},
bH:function(a){var z
if(this.c){this.c=!1
z=a.a
C.b.el(z,33984+this.a)
C.b.bb(z,3553,null)}}},kl:{"^":"c;a,0b,0c,0d,0e",
kt:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
C.b.bb(z,3553,y)
C.b.cj(z,3553,10242,33071)
C.b.cj(z,3553,10243,33071)
C.b.cj(z,3553,10241,9987)
C.b.cj(z,3553,10240,9729)
C.b.bb(z,3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.kk()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.ae
W.a5(x,"load",H.o(new T.km(this,w,x,!1,y,!1,!0),{func:1,ret:-1,args:[z]}),!1,z)
return w},
ks:function(a,b,c,d){return this.kt(a,!1,b,c,d)},
iT:function(a,b,c){var z,y,x,w
b=V.eo(b,2)
z=V.eo(a.width,2)
y=V.eo(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.dj(null,null)
x.width=z
x.height=y
w=H.h(C.n.fz(x,"2d"),"$isdk")
w.imageSmoothingEnabled=!1;(w&&C.y).kf(w,a,0,0,x.width,x.height)
return P.mG(C.y.hU(w,0,0,x.width,x.height))}}},km:{"^":"q:15;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.iT(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
C.b.bb(y,3553,this.e)
C.b.kL(y,37440,this.f?1:0)
C.b.kX(y,3553,0,6408,6408,5121,w)
if(this.r)C.b.ft(y,3553)
C.b.bb(y,3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.ew()}++x.e}}}],["","",,V,{"^":"",hX:{"^":"c;",
by:function(a){return!0},
i:function(a){return"all"},
$isbN:1},bN:{"^":"c;"},f1:{"^":"c;0a",
saO:function(a){this.a=H.d(a,"$isa",[V.bN],"$asa")},
by:["fN",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)if(z[x].by(a))return!0
return!1}],
i:["dz",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbN:1},bP:{"^":"f1;0a",
by:function(a){return!this.fN(a)},
i:function(a){return"!["+this.dz(0)+"]"}},jW:{"^":"c;0a",
siV:function(a){this.a=H.d(a,"$isD",[P.j,P.a2],"$asD")},
fT:function(a){var z,y
if(a.a.length<=0)throw H.e(P.u("May not create a SetMatcher with zero characters."))
z=new H.aM(0,0,[P.j,P.a2])
for(y=new H.eZ(a,a.gq(a),0,[H.ai(a,"V",0)]);y.D();)z.l(0,y.d,!0)
this.siV(z)},
by:function(a){return this.a.bZ(a)},
i:function(a){var z=this.a
return P.ct(new H.eX(z,[H.r(z,0)]),0,null)},
$isbN:1,
n:{
ab:function(a){var z=new V.jW()
z.fT(a)
return z}}},dQ:{"^":"c;a,b,0c,0d",
sjg:function(a){this.c=H.d(a,"$isa",[V.dW],"$asa")},
C:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dW(this.a.R(0,b))
w.saO(H.b([],[V.bN]))
w.c=!1
C.a.h(this.c,w)
return w},
ki:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.by(a))return w}return},
i:function(a){return this.b}},fA:{"^":"c;a,b,c",
i:function(a){var z,y
z=H.hO(this.b,"\n","\\n")
y=H.hO(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},dV:{"^":"c;a,b,0c",
siO:function(a){var z=P.p
this.c=H.d(a,"$isD",[z,z],"$asD")},
i:function(a){return this.b}},kq:{"^":"c;0a,0b,0c",
sj5:function(a){this.a=H.d(a,"$isD",[P.p,V.dQ],"$asD")},
sjb:function(a){this.b=H.d(a,"$isD",[P.p,V.dV],"$asD")},
R:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.dQ(this,b)
z.sjg(H.b([],[V.dW]))
z.d=null
this.a.l(0,b,z)}return z},
bF:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.dV(this,a)
y=P.p
z.siO(new H.aM(0,0,[y,y]))
this.b.l(0,a,z)}return z},
l1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.fA])
y=this.c
x=[P.j]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.J(a,t)
r=y.ki(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.ct(w,0,null)
throw H.e(P.u("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.ct(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.fA(o==null?p.b:o,q,t)}++t}}}},dW:{"^":"f1;b,0c,0a",
i:function(a){return this.b.b+": "+this.dz(0)}}}],["","",,X,{"^":"",ew:{"^":"c;",$isaO:1},iF:{"^":"ft;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z}},js:{"^":"c;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
bn:[function(a){var z
H.h(a,"$isw")
z=this.f
if(!(z==null))z.E(a)},function(){return this.bn(null)},"lf","$1","$0","gdD",0,2,1],
sf5:function(a){var z,y
if(!J.Y(this.b,a)){z=this.b
if(z!=null)z.gu().Y(0,this.gdD())
y=this.b
this.b=a
if(a!=null)a.gu().h(0,this.gdD())
z=new D.B("mover",y,this.b,this,[U.a9])
z.b=!0
this.bn(z)}},
$isaO:1,
$isew:1},ft:{"^":"c;"}}],["","",,V,{"^":"",k6:{"^":"c;0a,0b",
fV:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.x).a4(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.x.a4(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.l.a4(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.l.a4(v,u)}t=z.createElement("div")
this.a=t
C.l.a4(v,t)
this.b=null
t=W.ae
W.a5(z,"scroll",H.o(new V.k9(x),{func:1,ret:-1,args:[t]}),!1,t)},
jO:function(a,b,c){var z,y,x,w
a=H.X(C.e.jV(a,0,4))
if(c.length===0)c=P.cv(C.C,b,C.m,!1)
z=document.createElement("div")
z.className="textHeader"
z.id=c
y=z.style
x=""+(28-a*3)+"px"
y.fontSize=x
w=W.hY(null)
w.href="#"+H.l(c)
w.textContent=b
C.l.a4(z,w)
C.l.a4(this.a,z)},
cQ:function(a,b){return this.jO(a,b,"")},
a0:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.d(a,"$isa",[P.p],"$asa")
this.j0()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.l1(C.a.kp(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.l.a4(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.l.a4(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.l.a4(y,t)
break
case"Link":s=u.b
if(H.hN(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=H.N(r[1])
q.textContent=H.N(r[0])
C.l.a4(y,q)}else{p=P.cv(C.C,s,C.m,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.l(p)
q.textContent=s
C.l.a4(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.l.a4(y,t)
break}}C.l.a4(this.a,y)},
j0:function(){var z,y,x,w
if(this.b!=null)return
z=new V.kq()
y=P.p
z.sj5(new H.aM(0,0,[y,V.dQ]))
z.sjb(new H.aM(0,0,[y,V.dV]))
z.c=null
z.c=z.R(0,"Start")
y=z.R(0,"Start").C(0,"Bold")
x=V.ab(new H.a6("*"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Bold").C(0,"Bold")
x=new V.bP()
w=[V.bN]
x.saO(H.b([],w))
C.a.h(y.a,x)
y=V.ab(new H.a6("*"))
C.a.h(x.a,y)
y=z.R(0,"Bold").C(0,"BoldEnd")
x=V.ab(new H.a6("*"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Start").C(0,"Italic")
x=V.ab(new H.a6("_"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Italic").C(0,"Italic")
x=new V.bP()
x.saO(H.b([],w))
C.a.h(y.a,x)
y=V.ab(new H.a6("_"))
C.a.h(x.a,y)
y=z.R(0,"Italic").C(0,"ItalicEnd")
x=V.ab(new H.a6("_"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Start").C(0,"Code")
x=V.ab(new H.a6("`"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Code").C(0,"Code")
x=new V.bP()
x.saO(H.b([],w))
C.a.h(y.a,x)
y=V.ab(new H.a6("`"))
C.a.h(x.a,y)
y=z.R(0,"Code").C(0,"CodeEnd")
x=V.ab(new H.a6("`"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Start").C(0,"LinkHead")
x=V.ab(new H.a6("["))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"LinkHead").C(0,"LinkTail")
x=V.ab(new H.a6("|"))
C.a.h(y.a,x)
x=z.R(0,"LinkHead").C(0,"LinkEnd")
y=V.ab(new H.a6("]"))
C.a.h(x.a,y)
x.c=!0
x=z.R(0,"LinkHead").C(0,"LinkHead")
y=new V.bP()
y.saO(H.b([],w))
C.a.h(x.a,y)
x=V.ab(new H.a6("|]"))
C.a.h(y.a,x)
x=z.R(0,"LinkTail").C(0,"LinkEnd")
y=V.ab(new H.a6("]"))
C.a.h(x.a,y)
x.c=!0
x=z.R(0,"LinkTail").C(0,"LinkTail")
y=new V.bP()
y.saO(H.b([],w))
C.a.h(x.a,y)
x=V.ab(new H.a6("|]"))
C.a.h(y.a,x)
C.a.h(z.R(0,"Start").C(0,"Other").a,new V.hX())
x=z.R(0,"Other").C(0,"Other")
y=new V.bP()
y.saO(H.b([],w))
C.a.h(x.a,y)
x=V.ab(new H.a6("*_`["))
C.a.h(y.a,x)
x=z.R(0,"BoldEnd")
x.d=x.a.bF("Bold")
x=z.R(0,"ItalicEnd")
x.d=x.a.bF("Italic")
x=z.R(0,"CodeEnd")
x.d=x.a.bF("Code")
x=z.R(0,"LinkEnd")
x.d=x.a.bF("Link")
x=z.R(0,"Other")
x.d=x.a.bF("Other")
this.b=z},
n:{
k7:function(a,b){var z=new V.k6()
z.fV(a,!0)
return z}}},k9:{"^":"q:15;a",
$1:function(a){P.dT(C.p,new V.k8(this.a))}},k8:{"^":"q:2;a",
$0:function(){var z,y,x
z=C.j.ay(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,B,{"^":"",
i3:function(a){switch(a){case 0:return"air"
case 1:return"water"
case 100:return"boundary"
case 101:return"dirt"
case 102:return"turf"
case 103:return"rock"
case 104:return"sand"
case 105:return"dryLeaves"
case 106:return"trunk-ud"
case 107:return"trunk-ns"
case 108:return"trunk-ew"
case 109:return"brick"
case 110:return"redShine"
case 111:return"whiteShine"
case 112:return"yellowShine"
case 113:return"blackShine"
case 114:return"leaves"
case 115:return"wood-ud"
case 116:return"wood-ns"
case 117:return"wood-ew"
case 200:return"grass"
case 201:return"fern"
case 202:return"whiteFlower"
case 203:return"blueFlower"
case 204:return"redFlower"
case 205:return"mushroom"}return"undefined"},
i2:function(a,b){if(a===b)return!1
if(b===0)return!0
if(a===1)return b>=200&&b<=205
if(b===1)return!(a>=200&&a<=205)
return!(a>=200&&a<=205)&&b>=200&&b<=205},
hJ:function(){var z,y,x
z=V.k7("3Dart Craft",!0)
y=[P.p]
z.a0(H.b(["This example is in development and may still have a few issues and glitches."],y))
x=W.dj(null,null)
x.className="pageLargeCanvas"
x.id="targetCanvas"
C.l.a4(z.a,x)
z.cQ(1,"About")
z.a0(H.b(["3Dart Craft is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create a [voxel|https://en.wikipedia.org/wiki/Voxel] environment for browser driven video games. ","This example has no server backing it so none of the changes are persisted. It would take very little ","to turn this into a simple online game."],y))
z.a0(H.b(["\xab[Back to Examples List|../../]"],y))
z.cQ(1,"Controls")
z.a0(H.b(["\u2022 _Currently there are no controls for mobile browsers_"],y))
z.a0(H.b(["\u2022 *Esc* to release the mouse capture"],y))
z.a0(H.b(["\u2022 *W* or *Up arrow* to move forward"],y))
z.a0(H.b(["\u2022 *S* or *Down arrow* to move backward"],y))
z.a0(H.b(["\u2022 *A* or *Left arrow* to strife left"],y))
z.a0(H.b(["\u2022 *D* or *Right arror* to strife right"],y))
z.a0(H.b(["\u2022 *Space bar* to jump"],y))
z.a0(H.b(["\u2022 *Tab* cycles the block selected which can be placed"],y))
z.a0(H.b(["\u2022 *Shift-Tab* cycles the selection in the reverse direction"],y))
z.a0(H.b(["\u2022 *Left click* or *Q* removes the currently highlighted block"],y))
z.a0(H.b(["\u2022 *Right click* or *E* places the selected block on the highlighted block"],y))
z.a0(H.b(["\u2022 *O* to return the starting location"],y))
z.cQ(1,"Help wanted")
z.a0(H.b(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want to learn more about it, ","check out the [project page|https://github.com/Grant-Nelson/ThreeDart/projects/1] or ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/craft]."],y))
z.a0(H.b(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],y))
P.dT(C.p,B.mV())},
nC:[function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
z=B.ms()
if(z<0){z=C.M.kv(4294967296)
y=P.fP().fg(P.eY(["seed",""+z],P.p,null))
x=window.history
w=y.i(0)
x.toString;(x&&C.R).iJ(x,new P.lQ([],[]).dn(null),null,w)}v=C.S.fA(document,"targetCanvas")
if(v==null)H.t(P.u("Failed to find an element with the identifier, targetCanvas."))
u=E.ko(v,!0,!0,!0,!1)
t=new B.jg(u)
x=P.j
t.shG(new H.aM(0,0,[x,B.S]))
t.si2(new H.aM(0,0,[x,[P.a,P.j]]))
t.si3(H.b([],[O.dB]))
s=new V.aa(1,1,1)
w=V.bk()
r=V.e9()
q=new V.v(0.5,-1,0.2).v(0,w)
q=U.b_(V.f5(w,r,new V.E(q.a,q.b,q.c)))
r=new D.cG()
r.c=new V.aa(1,1,1)
r.a=V.e9()
p=r.b
r.b=q
q.gu().h(0,r.gie())
w=new D.B("mover",p,r.b,r,[U.a9])
w.b=!0
r.b6(w)
if(!r.c.t(0,s)){p=r.c
r.c=s
w=new D.B("color",p,s,r,[V.aa])
w.b=!0
r.b6(w)}t.e=r
o=t.M(t.F("boundary"),!1)
n=t.M(t.F("brick"),!1)
m=t.M(t.F("dirt"),!1)
l=t.M(t.F("dryLeavesSide"),!1)
k=t.M(t.F("dryLeavesTop"),!1)
j=t.M(t.F("leaves"),!1)
i=t.M(t.F("rock"),!1)
h=t.M(t.F("sand"),!1)
g=t.M(t.F("trunkEnd"),!1)
f=t.M(t.F("trunkSide"),!1)
e=t.M(t.F("trunkTilted"),!1)
d=t.M(t.F("turfSide"),!1)
c=t.M(t.F("turfTop"),!1)
b=t.M(t.F("woodEnd"),!1)
a=t.M(t.F("woodSide"),!1)
a0=t.M(t.F("woodTilted"),!1)
a1=t.M(t.F("blackShine"),!0)
a2=t.M(t.F("redShine"),!0)
a3=t.M(t.F("yellowShine"),!0)
a4=t.M(t.F("whiteShine"),!0)
a5=t.M(t.F("mushroomBottom"),!1)
a6=t.M(t.F("mushroomSide"),!1)
a7=t.M(t.F("mushroomTop"),!1)
a8=t.M(t.F("grass"),!1)
a9=t.M(t.F("fern"),!1)
b0=t.M(t.F("blueFlowers"),!1)
b1=t.M(t.F("redFlowers"),!1)
b2=t.M(t.F("whiteFlowers"),!1)
w=T.bS
r=P.f_([t.F("water1"),t.F("water2"),t.F("water3")],!0,w)
q=new T.kj()
q.a=0
q.b=0
q.sja(H.d(r,"$isa",[w],"$asa"))
q.f=null
t.x=q
b3=t.M(q,!0)
t.b.l(0,100,new B.S(o,o,o,o,o,o))
t.b.l(0,101,new B.S(m,m,m,m,m,m))
t.b.l(0,102,new B.S(c,m,d,d,d,d))
t.b.l(0,103,new B.S(i,i,i,i,i,i))
t.b.l(0,104,new B.S(h,h,h,h,h,h))
t.b.l(0,105,new B.S(k,m,l,l,l,l))
t.b.l(0,106,new B.S(g,g,f,f,f,f))
t.b.l(0,107,new B.S(f,f,e,e,g,g))
t.b.l(0,108,new B.S(e,e,g,g,e,e))
t.b.l(0,109,new B.S(n,n,n,n,n,n))
t.b.l(0,110,new B.S(a2,a2,a2,a2,a2,a2))
t.b.l(0,111,new B.S(a4,a4,a4,a4,a4,a4))
t.b.l(0,112,new B.S(a3,a3,a3,a3,a3,a3))
t.b.l(0,113,new B.S(a1,a1,a1,a1,a1,a1))
t.b.l(0,114,new B.S(j,j,j,j,j,j))
t.b.l(0,115,new B.S(b,b,a,a,a,a))
t.b.l(0,116,new B.S(a,a,a0,a0,b,b))
t.b.l(0,117,new B.S(a0,a0,b,b,a0,a0))
t.b.l(0,1,new B.S(b3,b3,b3,b3,b3,b3))
x=[x]
w=H.d(H.b([a8],x),"$isa",x,"$asa")
t.c.l(0,200,w)
w=H.d(H.b([a9],x),"$isa",x,"$asa")
t.c.l(0,201,w)
w=H.d(H.b([b2],x),"$isa",x,"$asa")
t.c.l(0,202,w)
w=H.d(H.b([b0],x),"$isa",x,"$asa")
t.c.l(0,203,w)
w=H.d(H.b([b1],x),"$isa",x,"$asa")
t.c.l(0,204,w)
x=H.d(H.b([a7,a5,a6],x),"$isa",x,"$asa")
t.c.l(0,205,x)
t.f=t.dI("selection")
t.r=t.dI("crosshair")
b4=B.lc(t,z)
b5=B.jv(u,b4)
b6=new M.iw()
b6.shA(0,O.dm(E.Z))
b6.d.bL(b6.gig(),b6.gih())
b6.e=null
b6.f=null
b6.r=null
b6.x=null
b7=new X.js()
b7.c=1.0471975511965976
b7.d=0.1
b7.e=2000
b7.sf5(null)
x=b7.c
if(!$.m.$2(x,1.0471975511965976)){p=b7.c
b7.c=1.0471975511965976
x=new D.B("fov",p,1.0471975511965976,b7,[P.x])
x.b=!0
b7.bn(x)}x=b7.d
if(!$.m.$2(x,0.1)){p=b7.d
b7.d=0.1
x=new D.B("near",p,0.1,b7,[P.x])
x.b=!0
b7.bn(x)}x=b7.e
if(!$.m.$2(x,2000)){p=b7.e
b7.e=2000
x=new D.B("far",p,2000,b7,[P.x])
x.b=!0
b7.bn(x)}x=b6.a
if(x!==b7){if(x!=null)x.gu().Y(0,b6.gb_())
p=b6.a
b6.a=b7
b7.gu().h(0,b6.gb_())
x=new D.B("camera",p,b6.a,b6,[X.ew])
x.b=!0
b6.bm(x)}b8=new X.iF()
x=new V.aZ(0,0,0,1)
b8.a=x
b8.b=!0
b8.c=2000
b8.d=!0
b8.e=0
b8.f=!1
x=$.fl
if(x==null){x=V.dK(0,0,1,1)
$.fl=x}b8.r=x
x=b6.b
if(x!==b8){if(x!=null)x.gu().Y(0,b6.gb_())
p=b6.b
b6.b=b8
b8.gu().h(0,b6.gb_())
x=new D.B("target",p,b6.b,b6,[X.ft])
x.b=!0
b6.bm(x)}x=b6.e
if(x==null){x=D.C()
b6.e=x}x.h(0,b4.gl4())
b6.a.sf5(b5.r)
for(x=b4.e,w=x.length,b9=0;b9<x.length;x.length===w||(0,H.A)(x),++b9){c0=x[b9]
r=b6.d
q=H.r(r,0)
H.y(c0,q)
c1=[q]
if(r.bp(H.b([c0],c1))){c2=r.a
c3=c2.length
C.a.h(c2,c0)
q=H.d(H.b([c0],c1),"$isn",[q],"$asn")
r=r.c
if(r!=null)r.$2(c3,q)}}b6.d.h(0,b5.cy)
b4.f=b5
x=u.d
if(x!==b6){if(x!=null)x.gu().Y(0,u.gdB())
u.d=b6
b6.gu().h(0,u.gdB())
u.fZ()}b5.dv()
x=b6.b
s=new V.aZ(0.576,0.784,0.929,1)
if(!x.a.t(0,s)){p=x.a
x.a=s
w=new D.B("color",p,s,x,[V.aZ])
w.b=!0
x=x.x
if(!(x==null))x.E(w)}P.cT(C.O,new B.n1(u,b4))},"$0","mV",0,0,3],
ms:function(){var z,y
z=P.fP().gff().k(0,"seed")
if(z==null)return-1
y=H.fg(z,null)
return y==null?-1:y},
i1:{"^":"c;a,b,c,d,e,f",
i:function(a){return H.l(this.f)+".block("+this.a+", "+this.b+", "+this.c+", ("+this.d+", "+this.e+"), "+B.i3(this.gaX(this))+")"},
gaX:function(a){var z=this.f
z=z==null?null:z.a9(this.a,this.b,this.c)
if(z==null)z=this.b<0?100:0
return z}},
jm:{"^":"c;a,b"},
cD:{"^":"c;0a,0b,c,0d,0e,0f,0r,0x",
scu:function(a){this.e=H.d(a,"$isa",[E.Z],"$asa")},
fP:function(a){var z,y,x,w,v,u,t,s,r,q
this.d=new Uint8Array(12288)
this.scu(H.b([],[E.Z]))
for(z=this.c.e,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
v=E.bf(null,!0,null,"",null,null)
u=w.y
t=H.r(u,0)
H.y(v,t)
s=[t]
if(u.bp(H.b([v],s))){r=u.a
q=r.length
C.a.h(r,v)
t=H.d(H.b([v],s),"$isn",[t],"$asn")
u=u.c
if(u!=null)u.$2(q,t)}u=this.e;(u&&C.a).h(u,v)}this.a=0
this.b=0
this.f=!1
this.r=!0
this.x=!0},
i:function(a){return"chunk("+this.a+", "+this.b+")"},
a9:function(a,b,c){var z,y
if(b<0)return 100
if(b>=48)return 0
if(a<0)return 0
if(a>=16)return 0
if(c<0)return 0
if(c>=16)return 0
z=this.d
y=(a*48+b)*16+c
if(y<0||y>=12288)return H.f(z,y)
return z[y]},
bR:function(a,b,c,d){var z=a==null?null:a.cm(b,c,d)
return z==null?0:z},
cm:function(a,b,c){var z,y
if(b<0)return 100
if(b>=48)return 0
if(a<0)return this.bR(this.gap(this),a+16,b,c)
if(a>=16)return this.bR(this.gax(this),a-16,b,c)
if(c<0)return this.bR(this.gcV(this),a,b,c+16)
if(c>=16)return this.bR(this.gda(),a,b,c-16)
z=this.d
y=(a*48+b)*16+c
if(y<0||y>=12288)return H.f(z,y)
return z[y]},
ac:function(a,b,c,d){var z,y
H.X(a)
H.X(b)
if(b<0)return!1
if(b>=48)return!1
if(a<0)return!1
if(a>=16)return!1
if(c<0)return!1
if(c>=16)return!1
z=this.d
y=(a*48+b)*16+c
if(y<0||y>=12288)return H.f(z,y)
z[y]=d
return!0},
gap:function(a){return this.c.aU(this.a-16,this.b)},
gda:function(){return this.c.aU(this.a,this.b+16)},
gax:function(a){return this.c.aU(this.a+16,this.b)},
gcV:function(a){return this.c.aU(this.a,this.b-16)},
dm:function(a,b,c){var z,y
for(z=47;z>=0;--z){y=this.a9(a,z,b)
if(y>=100&&y<=117)return z}return c},
l2:function(a,b){return this.dm(a,b,48)},
l5:function(){if(this.x||!this.r)return
this.r=!1
this.f=!1
var z=B.dP(this.c.a,null)
z.jU(this)
z.d9(0,this.e)},
saM:function(a){var z,y,x
for(z=this.e,y=z.length,x=0;x<y;++x)z[x].b=a},
l6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
if(this.x||this.r){this.saM(!1)
return}z=V.dK(this.a,this.b,16,16)
y=z.f6(a)
x=y.a
w=a.a
if(typeof x!=="number")return x.v()
if(typeof w!=="number")return H.i(w)
v=x-w
x=y.b
u=a.b
if(typeof x!=="number")return x.v()
if(typeof u!=="number")return H.i(u)
t=x-u
if(v*v+t*t<100){this.saM(!0)
return}s=z.f6(b)
x=b.a
if(typeof x!=="number")return x.v()
r=b.b
if(typeof r!=="number")return r.v()
r=new V.a0(x-w,r-u)
q=r.B(0,Math.sqrt(r.G(r)))
r=s.a
if(typeof r!=="number")return r.v()
x=s.b
if(typeof x!=="number")return x.v()
p=new V.a0(r-w,x-u)
o=p.G(p)
if(o>6400){this.saM(!1)
return}this.saM(q.G(p.B(0,o))>0)},
n:{
i8:function(a){var z=new B.cD(a)
z.fP(a)
return z}}},
iG:{"^":"c;0a,0b,0c",
eT:function(a){var z
this.c=a
this.iH()
C.a4.eU(this.c.d,0,12288,0)
this.ji()
this.hp()
this.hn()
this.jh()
this.hi()
this.iF()
this.hf()
this.jf()
a.x=!1
a.f=!0
a.saM(!1)
z=a.gap(a)
if(!(z==null))z.f=!0
z=a.gax(a)
if(!(z==null))z.f=!0
z=a.gda()
if(!(z==null))z.f=!0
z=a.gcV(a)
if(!(z==null))z.f=!0},
al:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=this.a
y=this.c
x=(a+y.a)*c
y=(b+y.b)*c
w=new B.b6(x,y)
v=w.m(0,$.$get$eK().j(0,x+y))
y=Math.floor(v.a)
x=Math.floor(v.b)
u=new B.b6(y,x)
t=u.m(0,$.$get$dr().j(0,y+x))
s=v.v(0,u)
w=new B.iy(z.a,u,w.v(0,t),s)
w.e=0
w.aj(1,0)
w.aj(0,1)
z=s.a
x=s.b
r=z+x
if(r<=1){q=1-r
if(q>z||q>x)if(z>x)w.aj(1,-1)
else w.aj(-1,1)
else w.aj(1,1)
w.aj(0,0)}else{q=2-r
if(q<z||q<x)if(z>x)w.aj(2,0)
else w.aj(0,2)
else w.aj(0,0)
w.aj(1,1)}return w.e/47*0.5+0.5},
cN:function(a,b){var z,y
z=this.b
y=(a+3)*22+(b+3)
if(y<0||y>=484)return H.f(z,y)
return z[y]},
iH:function(){var z,y,x,w,v
for(z=0,y=-3;y<19;++y)for(x=-3;x<19;++x){w=C.j.af(Math.pow(0.6*this.al(y,x,0.001)+0.3*this.al(y,x,0.01)+0.1*this.al(y,x,0.1),2)*48)
if(w>=48)w=47
v=this.b
if(z<0||z>=484)return H.f(v,z)
v[z]=w;++z}},
ji:function(){var z,y
for(z=0;z<16;++z)for(y=0;y<16;++y)this.jj(z,y)},
jj:function(a,b){var z,y,x,w,v
z=this.cN(a,b)
for(y=z-2,x=z<8,w=0;w<=z;++w){if(x)v=y<=w?104:103
else if(z===w)v=102
else v=y<=w?101:103
this.c.ac(a,w,b,v)}},
hp:function(){var z,y
for(z=0;z<16;++z)for(y=0;y<16;++y)this.hq(z,y)},
hq:function(a,b){var z,y
z=this.c.dm(a,b,0)
if(z<8)for(y=8;y>z;--y)this.c.ac(a,y,b,1)},
hn:function(){var z,y
for(z=-1;z<=16;++z)for(y=-1;y<=16;++y)this.ho(z,y)},
ho:function(a,b){var z,y,x,w,v,u
if(this.cN(a,b)<8)for(z=10;z>6;--z)for(y=-1;y<=1;++y)for(x=a+y,w=-1;w<=1;++w){v=b+w
u=this.c.a9(x,z,v)
if(u===102||u===105)this.c.ac(x,z,v,104)}},
jh:function(){var z,y
for(z=-3;z<19;++z)for(y=-3;y<19;++y)if(this.al(z,y,1.5)<0.1)this.hj(z,y)},
hj:function(a,b){var z,y,x,w
z=this.c
y=a+z.a
if(y>=-30)if(y<30){z=b+z.b
z=z>=-30&&z<30}else z=!1
else z=!1
if(z)return
x=this.cN(a,b)
if(x<10)return
for(w=1;w<8;++w)this.c.ac(a,x+w,b,106)
this.hk(a,b)
this.hl(a,x+8,b)},
hk:function(a,b){var z,y,x,w,v,u
for(z=-3;z<=3;++z)for(y=z*z,x=a+z,w=-3;w<=3;++w)if(y+w*w<=10)for(v=b+w,u=47;u>=0;--u)if(this.c.a9(x,u,v)===102){this.c.ac(x,u,v,105)
break}},
hl:function(a,b,c){var z,y,x,w,v,u,t,s
for(z=-3;z<=3;++z)for(y=z*z,x=a+z,w=-3;w<=3;++w)for(v=y+w*w,u=b+w,t=-3;t<=3;++t)if(v+t*t<=12){s=c+t
if(this.c.a9(x,u,s)===0)this.c.ac(x,u,s,114)}},
iF:function(){var z,y,x,w,v
for(z=0;z<16;++z)for(y=z-400,x=z+400,w=0;w<16;++w)if(this.al(z,w,12.5)<0.1)this.b1(z,w,204)
else if(this.al(x,w,12.5)<0.1)this.b1(z,w,203)
else{v=w+400
if(this.al(z,v,12.5)<0.1)this.b1(z,w,202)
else if(this.al(x,v,12.5)<0.15)this.b1(z,w,200)
else if(this.al(y,w,12.5)<0.1)this.b1(z,w,201)
else if(this.al(z,w-400,12.5)<0.08)this.b1(z,w,205)}},
b1:function(a,b,c){var z,y
z=this.c.dm(a,b,0)
y=this.c.a9(a,z,b)
if(y!==102&&y!==105)return
this.c.ac(a,z+1,b,c)},
hi:function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.c
y=z.a
if(y+16>=-30)if(y<=30){z=z.b
z=z+16<-30||z>30}else z=!0
else z=!0
if(z)return
x=new B.iI(this)
for(w=30;w>=0;w-=2){v=30-w+3
for(u=-v,z=w-1,t=u;t<=v;++t)for(s=u;s<=v;++s){x.$4(t,w,s,111)
x.$4(t,z,s,111)}for(y=u-1,r=u-2,q=v+1,p=v+2,o=-2;o<=2;++o){x.$4(y,w,o,109)
x.$4(y,z,o,109)
x.$4(r,z,o,109)
x.$4(q,w,o,109)
x.$4(q,z,o,109)
x.$4(p,z,o,109)
x.$4(o,w,y,109)
x.$4(o,z,y,109)
x.$4(o,z,r,109)
x.$4(o,w,q,109)
x.$4(o,z,q,109)
x.$4(o,z,p,109)}z=w+1
x.$4(y,z,2,109)
x.$4(r,w,2,109)
x.$4(y,z,-2,109)
x.$4(r,w,-2,109)
x.$4(q,z,2,109)
x.$4(p,w,2,109)
x.$4(q,z,-2,109)
x.$4(p,w,-2,109)
x.$4(2,z,y,109)
x.$4(2,w,r,109)
x.$4(-2,z,y,109)
x.$4(-2,w,r,109)
x.$4(2,z,q,109)
x.$4(2,w,p,109)
x.$4(-2,z,q,109)
x.$4(-2,w,p,109)}},
hf:function(){var z,y,x
z=this.c
y=z.a
if(y+16>=-36)if(y<=12){z=z.b
z=z+16<-28||z>-22}else z=!0
else z=!0
if(z)return
x=new B.iH(this,-12,40,-25)
z=[P.j]
x.$5(110,0,0,H.b([0,1,2,3,4,4,3,2,4,4,3,2,1,0],z),H.b([1,0,0,0,1,2,3,3,4,5,6,6,6,5],z))
x.$5(110,6,0,H.b([0,1,2,3,4,4,4,3,2,1,0,0,0,0,0,0],z),H.b([0,0,0,1,2,3,4,5,6,6,6,5,4,3,2,1],z))
x.$5(113,12,0,H.b([0,0,0,0,0,1,2,1,2,3,3,3,3,3],z),H.b([2,3,4,5,6,1,1,4,4,2,3,4,5,6],z))
x.$5(113,17,0,H.b([0,0,0,0,0,0,1,2,1,2,3,3,3,3],z),H.b([1,2,3,4,5,6,1,1,4,4,2,3,5,6],z))
x.$5(113,22,0,H.b([0,2,1,1,1,1,1,1],z),H.b([1,1,1,2,3,4,5,6],z))},
jf:function(){var z,y,x,w,v,u
z=this.c
y=z.a
if(y+16>=-3)if(y<=3){z=z.b
z=z+16<-3||z>3}else z=!0
else z=!0
if(z)return
x=new B.iJ(this)
for(w=-3;w<=3;++w)for(v=0;v<=7;++v)for(z=2+v,u=-3;u<=3;++u)x.$4(w,z,u,0)
x.$4(0,2,0,113)
x.$4(0,3,0,112)
x.$4(0,4,0,112)
x.$4(0,5,0,112)
x.$4(0,6,0,112)}},
iI:{"^":"q;a",
$4:function(a,b,c,d){var z=this.a.c
z.ac(a-z.a,b,c-z.b,d)}},
iH:{"^":"q;a,b,c,d",
$5:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
z=[P.j]
H.d(d,"$isa",z,"$asa")
H.d(e,"$isa",z,"$asa")
for(y=d.length-1,z=this.a,x=this.b+b,w=this.c+c,v=this.d;y>=0;--y){u=z.c
if(y>=d.length)return H.f(d,y)
t=d[y]
if(typeof t!=="number")return H.i(t)
s=u.a
if(y>=e.length)return H.f(e,y)
r=e[y]
if(typeof r!=="number")return H.i(r)
u.ac(x+t-s,w-r,v-u.b,a)}}},
iJ:{"^":"q;a",
$4:function(a,b,c,d){var z=this.a.c
z.ac(a-z.a,b,c-z.b,d)}},
n1:{"^":"q:46;a,b",
$1:function(a){var z
H.h(a,"$isaq")
z=this.b
P.ep(C.j.fk(this.a.gkl(),2)+" fps, "+("chunks: "+z.d.length+", graveyard: "+z.c.length+", player: "+z.f.x.f.S(V.bk()).i(0)))}},
S:{"^":"c;a,b,c,d,e,f"},
jg:{"^":"c;a,0b,0c,0d,0e,0f,0r,0x",
shG:function(a){this.b=H.d(a,"$isD",[P.j,B.S],"$asD")},
si2:function(a){this.c=H.d(a,"$isD",[P.j,[P.a,P.j]],"$asD")},
si3:function(a){this.d=H.d(a,"$isa",[O.dB],"$asa")},
F:function(a){var z="./textures/"+a+".png"
return this.a.f.ks(z,!0,!1,!1)},
M:function(a,b){var z,y,x
z=O.f2()
z.dx.h(0,this.e)
y=z.r
y.saG(0,new V.aa(0.8,0.8,0.8))
y=z.x
y.saG(0,new V.aa(0.4,0.4,0.4))
z.r.sbD(a)
z.x.sbD(a)
z.db.sbD(a)
if(b){y=z.z
y.saG(0,new V.aa(0.5,0.5,0.5))
if(y.c===C.d){y.c=C.i
y.cq()
y.cK(100)
x=y.a
x.a=null
x.a2(null)}y.cK(3)}C.a.h(this.d,z)
return this.d.length-1},
dI:function(a){var z,y
z=this.F(a)
y=O.f2()
y.f.sbD(z)
y.db.sbD(z)
return y}},
ju:{"^":"c;0a,0b,c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
shw:function(a){this.db=H.d(a,"$isa",[E.Z],"$asa")},
fR:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=a.r
z.r=!0
y=z.d
y.Q=0.4
y.ch=0.4
y=new U.kR()
x=X.aC()
x.h(0,new X.K(39,new X.P(!1,!1,!1)))
x.h(0,new X.K(68,new X.P(!1,!1,!1)))
w=y.gip()
x.gao().h(0,w)
y.a=x
x=X.aC()
x.h(0,new X.K(37,new X.P(!1,!1,!1)))
x.h(0,new X.K(65,new X.P(!1,!1,!1)))
x.gao().h(0,w)
y.b=x
x=X.aC()
x.h(0,new X.K(81,new X.P(!1,!1,!1)))
x.gao().h(0,w)
y.c=x
x=X.aC()
x.h(0,new X.K(69,new X.P(!1,!1,!1)))
x.gao().h(0,w)
y.d=x
x=X.aC()
x.h(0,new X.K(40,new X.P(!1,!1,!1)))
x.h(0,new X.K(83,new X.P(!1,!1,!1)))
x.gao().h(0,w)
y.e=x
x=X.aC()
x.h(0,new X.K(38,new X.P(!1,!1,!1)))
x.h(0,new X.K(87,new X.P(!1,!1,!1)))
x.gao().h(0,w)
y.f=x
x=U.c7()
x.saI(30)
x.saT(0)
w=y.gaC()
x.gu().h(0,w)
y.r=x
x=U.c7()
x.saI(30)
x.saT(0)
x.gu().h(0,w)
y.x=x
x=U.c7()
x.saI(30)
x.saT(0)
x.gu().h(0,w)
y.y=x
y.z=null
y.Q=null
y.ch=60
y.cx=15
y.cy=0
y.db=null
y.dx=null
y.sdP(null)
y.a.aa(z)
y.b.aa(z)
y.c.aa(z)
y.d.aa(z)
y.e.aa(z)
y.f.aa(z)
y.r.saI(6)
y.x.saI(60)
z=y.x
x=z.r
if(!$.m.$2(x,-100)){v=z.r
z.r=-100
x=new D.B("acceleration",v,-100,z,[P.x])
x.b=!0
z.I(x)}y.y.saI(6)
y.sdP(H.o(this.ghX(),{func:1,ret:V.v,args:[V.v,V.v]}))
this.a=y
z=a.r
y=new U.kQ()
x=U.c7()
x.sdq(0,!0)
x.sde(6.283185307179586)
x.sdf(0)
x.sa_(0,0)
x.saI(100)
x.sK(0)
x.saT(0.5)
y.b=x
w=y.gaC()
x.gu().h(0,w)
x=U.c7()
x.sdq(0,!0)
x.sde(6.283185307179586)
x.sdf(0)
x.sa_(0,0)
x.saI(100)
x.sK(0)
x.saT(0.5)
y.c=x
x.gu().h(0,w)
y.d=null
y.e=!1
y.f=!1
y.r=!1
y.x=2.5
y.y=2.5
y.z=2
y.Q=4
y.cx=!1
y.ch=!1
y.cy=0
y.db=0
y.dx=null
y.dy=0
y.fr=null
y.fx=null
u=new X.P(!1,!1,!1)
v=y.d
y.d=u
x=new D.B("modifiers",v,u,y,[X.P])
x.b=!0
y.I(x)
x=y.f
if(x!==!1){y.f=!1
x=new D.B("invertX",x,!1,y,[P.a2])
x.b=!0
y.I(x)}x=y.r
if(x!==!1){y.r=!1
x=new D.B("invertY",x,!1,y,[P.a2])
x.b=!0
y.I(x)}y.aa(z)
y.b.sde(1.5707963267948966)
y.b.sdf(-1.5707963267948966)
y.b.saT(1)
y.c.saT(1)
y.b.sdq(0,!1)
this.b=y
y.gu().h(0,new B.jw(this))
z=U.a9
y=[z]
x=U.cK(H.b([this.a,this.b],y))
x.gu().h(0,this.gjn())
this.r=x
x=this.b
w=new U.eR()
w.c=V.bi()
w.d=0
if(null!=x){w.a=x
x.gu().h(0,w.gaC())
z=new D.B("mover",null,w.a,w,[z])
z.b=!0
w.I(z)}this.x=U.cK(H.b([w,this.a,U.b_(V.dE(1,-1,1,1))],y))
z=U.b_(V.cp(-0.5,-0.5,-0.5))
x=new U.fn()
x.a=0
x.b=0
x.c=0
x.d=0
x.e=0
x.f=0
x.r=0
x.sfq(-0.1)
x.sfb(0)
x.sfh(0)
w=x.d
if(!$.m.$2(w,0)){v=x.d
x.d=0
w=new D.B("deltaYaw",v,0,x,[P.x])
w.b=!0
x.I(w)}w=x.e
if(!$.m.$2(w,0.1)){v=x.e
x.e=0.1
w=new D.B("deltaPitch",v,0.1,x,[P.x])
w.b=!0
x.I(w)}w=x.f
if(!$.m.$2(w,0)){v=x.f
x.f=0
w=new D.B("deltaRoll",v,0,x,[P.x])
w.b=!0
x.I(w)}this.y=U.cK(H.b([z,x,U.b_(V.cp(0.5,0.5,0.5)),U.b_(V.dE(0.04,-0.04,0.04,1)),U.b_(V.cp(-0.15,0.06,-0.2)),this.x],y))
this.z=U.cK(H.b([U.b_(V.dE(0.005,-0.005,0.005,1)),U.b_(V.cp(0,0,-0.2)),this.x],y))
z=X.aC()
z.h(0,new X.K(32,new X.P(!1,!1,!1)))
z.aa(a.r)
z.gao().h(0,this.gio())
this.d=!0
z=X.aC()
z.h(0,new X.K(9,new X.P(!1,!1,!1)))
z.h(0,new X.K(9,new X.P(!1,!1,!0)))
z.aa(a.r)
z.gao().h(0,this.gib())
z=X.aC()
z.h(0,new X.K(69,new X.P(!1,!1,!1)))
z.h(0,new X.K(81,new X.P(!1,!1,!1)))
z.aa(a.r)
z.gao().h(0,this.gia())
z=a.r.d
y=z.b
if(y==null){y=D.C()
z.b=y
z=y}else z=y
z.h(0,this.gii())
z=X.aC()
z.h(0,new X.K(79,new X.P(!1,!1,!1)))
z.aa(a.r)
z.gao().h(0,this.giB())
z=this.z
y=$.$get$a1()
x=$.$get$a4()
x=new Z.ac(y.a|x.a)
t=new F.fp()
y=new F.l_(t)
y.b=!1
w=F.bo
y.scP(H.b([],[w]))
t.a=y
y=new F.k0(t)
y.sbq(H.b([],[F.cQ]))
t.b=y
y=new F.k_(t)
y.scC(H.b([],[F.cn]))
t.c=y
y=new F.jZ(t)
y.scz(H.b([],[F.af]))
t.d=y
t.e=null
y=t.a
s=new V.E(-1,-1,1)
s=s.B(0,Math.sqrt(s.G(s)))
r=y.bV(new V.cq(1,2,4,6),new V.aZ(1,0,0,1),new V.v(-1,-1,0),new V.Q(0,1),s,x)
y=t.a
s=new V.E(1,-1,1)
s=s.B(0,Math.sqrt(s.G(s)))
q=y.bV(new V.cq(0,3,4,6),new V.aZ(0,0,1,1),new V.v(1,-1,0),new V.Q(1,1),s,x)
y=t.a
s=new V.E(1,1,1)
s=s.B(0,Math.sqrt(s.G(s)))
p=y.bV(new V.cq(0,2,5,6),new V.aZ(0,1,0,1),new V.v(1,1,0),new V.Q(1,0),s,x)
y=t.a
s=V.aP()
o=new V.E(-1,1,1)
o=o.B(0,Math.sqrt(o.G(o)))
n=y.bV(new V.cq(0,2,4,7),new V.aZ(1,1,0,1),new V.v(-1,1,0),s,o,x)
t.d.jN(H.b([r,q,p,n],[w]))
t.aS()
y=this.c.a
this.Q=E.bf(null,!0,z,"",t,y.r)
this.ch=E.bf(null,!0,this.y,"",null,null)
z=E.Z
this.shw(H.b([],[z]))
for(x=y.d,w=x.length,m=0;m<x.length;x.length===w||(0,H.A)(x),++m){l=E.bf(null,!0,null,"",null,x[m])
s=this.ch.y
o=H.r(s,0)
H.y(l,o)
k=[o]
if(s.bp(H.b([l],k))){j=s.a
i=j.length
C.a.h(j,l)
o=H.d(H.b([l],k),"$isn",[o],"$asn")
s=s.c
if(s!=null)s.$2(i,o)}s=this.db;(s&&C.a).h(s,l)}this.e=0
y=E.bf(null,!0,null,"",null,y.f)
this.cx=y
this.f=null
this.cy=E.bf(H.b([this.Q,this.ch,y],[z]),!0,null,"",null,null)
this.ej()},
dv:function(){var z,y
z=this.c.aU(C.o.af(0.5),C.o.af(0.5))
y=z==null?null:z.l2(C.o.af(0.5),C.o.af(0.5))
if(y==null)y=0
this.a.sa_(0,new V.v(0.5,y+60,0.5))
this.a.sK(V.bT())},
lN:[function(a){H.h(a,"$isw")
this.dv()},"$1","giB",4,0,0],
ak:function(a,b,c){var z,y
z=this.c.a9(a,b,c)
y=z.gaX(z)
return y>=100&&y<=117},
lC:[function(a){H.h(a,"$isw")
if(this.d)this.a.x.sK(30)},"$1","gio",4,0,0],
ls:[function(a){var z,y
a=H.k(H.h(a,"$isw"),"$isbL")
$.$get$cB()
z=a.c
y=this.e
if(z.b.c){if(typeof y!=="number")return y.v()
z=y-1
this.e=z
if(z<0)this.e=19}else{if(typeof y!=="number")return y.m()
z=y+1
this.e=z
if(z>=20)this.e=0}this.ej()},"$1","gib",4,0,0],
lr:[function(a){this.dN(H.k(H.h(a,"$isw"),"$isbL").c.a===69)},"$1","gia",4,0,0],
lx:[function(a){this.dN(H.k(H.h(a,"$isw"),"$isbO").x.a===2)},"$1","gii",4,0,0],
dN:function(a){var z,y,x,w,v,u
z=this.f
if(z==null)return
if(a){y=this.e_(z,this.e9())
this.f=y.a
x=C.a.k($.$get$cB(),this.e)
if(x===106){z=y.b
w=$.$get$b2()
v=$.$get$b1()
w=w.a
v=v.a
z=z.a
if((z&(w|v))!==0)x=108
else{w=$.$get$bJ()
v=$.$get$bI()
if((z&(w.a|v.a))!==0)x=107}}else if(x===115){z=y.b
w=$.$get$b2()
v=$.$get$b1()
w=w.a
v=v.a
z=z.a
if((z&(w|v))!==0)x=117
else{w=$.$get$bJ()
v=$.$get$bI()
if((z&(w.a|v.a))!==0)x=116}}}else x=0
z=this.f
u=z.f
if(u!=null){u.ac(z.a,z.b,z.c,x)
u.r=!0
if(this.f.a<=0){z=u.gap(u)
if(!(z==null))z.r=!0}if(this.f.c<=0){z=u.gcV(u)
if(!(z==null))z.r=!0}if(this.f.a>=15){z=u.gax(u)
if(!(z==null))z.r=!0}if(this.f.c>=15){z=u.gda()
if(!(z==null))z.r=!0}}},
li:[function(a,b){var z,y,x,w,v,u,t,s,r,q
z=b.a
y=b.b
x=b.c
w=J.cA(a.a)+0.5
v=J.cA(a.b)+0.5
u=J.cA(a.c)+0.5
this.d=!1
if(typeof y!=="number")return y.v()
if(this.ak(z,y-0.25,x)){y=v-0.25
this.a.x.sK(0)}if(this.ak(z,y-2+0.25,x)){y=v+0.25
this.a.x.sK(0)
this.d=!0}if(typeof z!=="number")return z.v()
t=z-0.25
s=y-0.5
if(this.ak(t,s,x)||this.ak(t,y-1.5,x)){z=w-0.25
this.a.r.sK(0)}else{t=z+0.25
if(this.ak(t,s,x)||this.ak(t,y-1.5,x)){z=w+0.25
this.a.r.sK(0)}}if(typeof x!=="number")return x.v()
t=x-0.25
if(this.ak(z,s,t)||this.ak(z,y-1.5,t)){x=u-0.25
this.a.y.sK(0)}else{t=x+0.25
if(this.ak(z,s,t)||this.ak(z,y-1.5,t)){x=u+0.25
this.a.y.sK(0)}}t=this.c
while(!0){r=t.a9(z,y-2+0.25,x)
s=r.gaX(r)
if(!(s>=100&&s<=117)){r=t.a9(z,y,x)
s=r.gaX(r)
q=s>=100&&s<=117
s=q}else s=!0
if(!s)break
y=v+0.25;++v
this.a.x.sK(0)
this.d=!0}return new V.v(z,y,x)},"$2","ghX",8,0,47],
e9:function(){var z=this.x.f
return V.fj(z.S(V.bk()),z.az(new V.E(0,0,-6)))},
e_:function(a,b){var z,y,x,w,v,u,t
z=V.fm(a.a+a.d,a.b,a.c+a.e,1,1,1)
y=z.kN(b)
x=z.a
if(typeof x!=="number")return x.m()
w=x+z.d/2
x=z.b
if(typeof x!=="number")return x.m()
v=x+z.e/2
x=z.c
if(typeof x!=="number")return x.m()
u=x+z.f/2
if(y==null)return
else{x=y.d
t=J.I(x)
if(t.t(x,$.$get$b1()))--w
else if(t.t(x,$.$get$b2()))++w
else if(t.t(x,$.$get$bG()))--v
else if(t.t(x,$.$get$bH()))++v
else if(t.t(x,$.$get$bI()))--u
else if(t.t(x,$.$get$bJ()))++u
else return}return new B.jm(this.c.a9(w,v,u),x)},
lV:[function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
H.h(a,"$isw")
z=this.e9()
y=z.a
x=z.d
if(typeof y!=="number")return y.m()
if(typeof x!=="number")return H.i(x)
w=z.b
v=z.e
if(typeof w!=="number")return w.m()
if(typeof v!=="number")return H.i(v)
u=z.c
t=z.f
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.i(t)
s=V.fj(new V.v(y+x,w+v,u+t),new V.E(x,v,t).N(0))
r=this.c.a9(y,w,u)
q=0
while(!0){y=r!=null
if(!(y&&r.gaX(r)===0))break
y=this.e_(r,s)
r=y==null?null:y.a;++q}if(y)y=q<1||r.gaX(r)===0||r.gaX(r)===100
else y=!1
if(y)r=null
this.f=r
if(r==null)this.cx.b=!1
else{y=$.$get$a1()
x=$.$get$a4()
p=B.dP(null,new Z.ac(y.a|x.a))
x=this.f
o=new V.v(x.d+x.a+0.5,x.b+0.5,x.e+x.c+0.5)
n=p.a3(0)
x=$.$get$ca()
y=$.$get$cf()
w=$.$get$cg()
v=$.$get$cb()
p.a7(n,o,x,y,w,v,$.$get$ch(),!0,1.1)
u=$.$get$cd()
t=$.$get$c8()
m=$.$get$c9()
l=$.$get$ce()
p.a7(n,o,u,t,m,l,$.$get$cc(),!0,1.1)
p.a7(n,o,x,t,u,y,$.$get$dp(),!0,1.1)
p.a7(n,o,w,l,m,v,$.$get$dq(),!0,1.1)
p.a7(n,o,y,u,l,w,$.$get$cF(),!0,1.1)
p.a7(n,o,v,m,t,x,$.$get$dn(),!0,1.1)
p.d9(0,H.b([this.cx],[E.Z]))
this.cx.b=!0}},"$1","gjn",4,0,0],
ej:function(){var z=B.dP(this.c.a,null)
z.dG(null,0,0,0,C.a.k($.$get$cB(),this.e),!1,1)
z.d9(0,this.db)},
n:{
jv:function(a,b){var z=new B.ju(b)
z.fR(a,b)
return z}}},
jw:{"^":"q:7;a",
$1:function(a){var z,y,x
H.h(a,"$isw")
z=this.a
y=z.a
z=V.f3(-z.b.c.d)
if(!J.Y(y.z,z)){x=y.z
y.z=z
y.Q=z.bx()
z=new D.B("velocityRotation",x,y.z,y,[V.aN])
z.b=!0
y.I(z)}}},
k1:{"^":"c;a,b,0c",
see:function(a){this.c=H.d(a,"$isa",[F.dJ],"$asa")},
jU:function(a){var z,y,x
for(z=15;z>=0;--z)for(y=47;y>=-1;--y)for(x=15;x>=0;--x)this.dG(a,z,y,x,a.cm(z,y,x),!1,1)},
d9:function(a,b){var z,y,x,w
H.d(b,"$isa",[E.Z],"$asa")
for(z=b.length-1;z>=0;--z){if(z>=b.length)return H.f(b,z)
y=b[z]
x=this.c
if(z>=x.length)return H.f(x,z)
w=x[z]
if(w!=null){y.sdw(w)
y.b=w.f.length!==0}else{y.sdw(null)
y.b=!1}}this.see(null)},
a3:function(a){var z,y
H.X(a)
z=this.c
y=(z&&C.a).k(z,a)
if(y==null){z=this.b
y=new F.dJ(z)
y.b=z.ges()
y.c=z.gbl(z)
y.d=0
y.scP(H.b([],[P.x]))
z=[P.j]
y.sbq(H.b([],z))
y.scC(H.b([],z))
y.scz(H.b([],z))
y.z=null
y.Q=null
z=this.c;(z&&C.a).l(z,a,y)}return y},
dG:function(a,b,c,d,e,f,g){var z,y,x,w
z=new V.v(b,c,d)
if(a!=null){b+=a.a
d+=a.b}y=new V.v(b+0.5,c+0.5,d+0.5)
if(e===0)return
else if(e===1)this.dH(a,y,z,e,!1,g)
else if(e>=200&&e<=205)if(e===201){x=this.a.c.k(0,201)
w=J.aH(x)
this.bO(this.a3(w.k(x,0)),y,0.3141592653589793)
this.bO(this.a3(w.k(x,0)),y,1.7278759594743864)
this.bO(this.a3(w.k(x,0)),y,3.6128315516282616)
this.bO(this.a3(w.k(x,0)),y,5.026548245743669)}else if(e===205)this.hh(y)
else{x=this.a.c.k(0,e)
w=J.aH(x)
this.dL(this.a3(w.k(x,0)),y,0.39269908169872414,!0)
this.dL(this.a3(w.k(x,0)),y,1.9634954084936207,!0)}else if(e>=100&&e<=117)this.dH(a,y,z,e,!1,g)},
b5:function(a,b,c,d){var z,y
z=$.$get$a1()
y=$.$get$a4()
return F.bp(null,null,null,a,b,new V.Q(c,d),null,new Z.ac(z.a|y.a|$.$get$ad().a),0)},
a7:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v
z=a.bt(H.b([this.b5(b.m(0,c.j(0,i)),g,0,0),this.b5(b.m(0,d.j(0,i)),g,0,1),this.b5(b.m(0,e.j(0,i)),g,1,1),this.b5(b.m(0,f.j(0,i)),g,1,0)],[F.bo]))
y=z+1
x=z+2
w=z+3
v=[P.j]
a.bs(H.b([z,y,x,w],v))
if(h)a.bs(H.b([x,y,z,w],v))},
dH:function(a,b,c,d,e,f){var z=this.a.b.k(0,d)
if(this.b0(a,d,c,0,1,0))this.a7(this.a3(z.a),b,$.$get$ca(),$.$get$cf(),$.$get$cg(),$.$get$cb(),$.$get$ch(),!1,f)
if(this.b0(a,d,c,0,-1,0))this.a7(this.a3(z.b),b,$.$get$cd(),$.$get$c8(),$.$get$c9(),$.$get$ce(),$.$get$cc(),!1,f)
if(this.b0(a,d,c,-1,0,0))this.a7(this.a3(z.c),b,$.$get$ca(),$.$get$c8(),$.$get$cd(),$.$get$cf(),$.$get$dp(),!1,f)
if(this.b0(a,d,c,1,0,0))this.a7(this.a3(z.d),b,$.$get$cg(),$.$get$ce(),$.$get$c9(),$.$get$cb(),$.$get$dq(),!1,f)
if(this.b0(a,d,c,0,0,1))this.a7(this.a3(z.e),b,$.$get$cf(),$.$get$cd(),$.$get$ce(),$.$get$cg(),$.$get$cF(),!1,f)
if(this.b0(a,d,c,0,0,-1))this.a7(this.a3(z.f),b,$.$get$cb(),$.$get$c9(),$.$get$c8(),$.$get$ca(),$.$get$dn(),!1,f)},
b0:function(a,b,c,d,e,f){if(a==null)return!0
e+=J.dc(c.b)
if(e<0)return!1
if(e>=48)return!0
return B.i2(b,a.cm(d+J.dc(c.a),e,f+J.dc(c.c)))},
dL:function(a,b,c,d){var z,y,x,w
z=Math.cos(c)*0.5
y=Math.sin(c)*0.5
x=-y
w=-z
this.a7(a,b,new V.v(z,0,x),new V.v(z,-0.5,x),new V.v(w,-0.5,y),new V.v(w,0,y),new V.E(y,0,z),!0,1)},
bO:function(a,b,c){var z=V.f3(c)
this.a7(a,b,z.S(new V.v(0.4,-0.1,-0.4)),z.S(new V.v(0,-0.5,0)),z.S(new V.v(0.4,-0.1,0.4)),z.S(new V.v(0.8,0,0)),$.$get$ch(),!0,1)},
hh:function(a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.a.c.k(0,205)
y=J.aH(z)
x=this.a3(y.k(z,0))
w=this.a3(y.k(z,1))
v=this.a3(y.k(z,2))
z=[F.bo]
u=H.b([],z)
t=H.b([],z)
for(y=a7.a,s=a7.b,r=a7.c,q=0;q<=2;q+=0.25){p=3.141592653589793*q
o=Math.cos(p)
n=Math.sin(p)
m=new V.aN(o,0,-n,0,1,0,n,0,o)
p=m.S(new V.v(0.07,-0.1,0))
l=p.a
if(typeof y!=="number")return y.m()
if(typeof l!=="number")return H.i(l)
k=p.b
if(typeof s!=="number")return s.m()
if(typeof k!=="number")return H.i(k)
p=p.c
if(typeof r!=="number")return r.m()
if(typeof p!=="number")return H.i(p)
j=$.$get$cF()
i=m.az(j)
h=Math.abs(q-1)
g=$.$get$a1()
f=$.$get$a4()
C.a.h(u,F.bp(null,null,null,new V.v(y+l,s+k,r+p),i,new V.Q(h,0),null,new Z.ac(g.a|f.a|$.$get$ad().a),0))
f=m.S(new V.v(0.1,-0.5,0))
g=f.a
if(typeof g!=="number")return H.i(g)
i=f.b
if(typeof i!=="number")return H.i(i)
f=f.c
if(typeof f!=="number")return H.i(f)
j=m.az(j)
p=$.$get$a1()
k=$.$get$a4()
C.a.h(u,F.bp(null,null,null,new V.v(y+g,s+i,r+f),j,new V.Q(h,1),null,new Z.ac(p.a|k.a|$.$get$ad().a),0))
e=m.S(new V.v(0.1,-0.5,0))
d=m.S(new V.v(0.1,0,0))
k=e.a
if(typeof k!=="number")return H.i(k)
p=e.b
if(typeof p!=="number")return H.i(p)
h=e.c
if(typeof h!=="number")return H.i(h)
j=$.$get$cc()
f=d.a
if(typeof f!=="number")return f.m()
i=d.c
if(typeof i!=="number")return i.m()
g=$.$get$a1()
l=$.$get$a4()
C.a.h(t,F.bp(null,null,null,new V.v(y+k,s+p,r+h),j,new V.Q(f+0.5,i+0.5),null,new Z.ac(g.a|l.a|$.$get$ad().a),0))}c=v.bt(u)
b=w.bt(t)
p=P.j
v.jQ(P.co(u.length,new B.k2(c),!0,p))
w.bs(P.co(t.length,new B.k3(b),!0,p))
a=H.b([],z)
a0=H.b([],z)
C.a.h(a,this.b5(a7.m(0,new V.v(0,0.05,0)),$.$get$ch(),0.5,0.5))
C.a.h(a0,this.b5(a7.m(0,new V.v(0,-0.1,0)),$.$get$cc(),0.5,0.5))
for(q=0;q<=1;q+=0.1){z=-6.283185307179586*q
o=Math.cos(z)
n=Math.sin(z)
a1=new V.aN(o,0,-n,0,1,0,n,0,o)
e=a1.S(new V.v(0.4,-0.15,0))
d=a1.S(new V.v(0.5,0,0))
z=e.a
if(typeof y!=="number")return y.m()
if(typeof z!=="number")return H.i(z)
l=e.b
if(typeof s!=="number")return s.m()
if(typeof l!=="number")return H.i(l)
k=e.c
if(typeof r!=="number")return r.m()
if(typeof k!=="number")return H.i(k)
j=d.a
if(typeof j!=="number")return j.m()
i=d.c
if(typeof i!=="number")return i.m()
h=$.$get$a1()
g=$.$get$a4()
C.a.h(a,F.bp(null,null,null,new V.v(y+z,s+l,r+k),null,new V.Q(j+0.5,i+0.5),null,new Z.ac(h.a|g.a|$.$get$ad().a),0))
g=6.283185307179586*q
o=Math.cos(g)
n=Math.sin(g)
a2=new V.aN(o,0,-n,0,1,0,n,0,o)
a3=a2.S(new V.v(0.4,-0.15,0))
a4=a2.S(new V.v(0.5,0,0))
g=a3.a
if(typeof g!=="number")return H.i(g)
h=a3.b
if(typeof h!=="number")return H.i(h)
i=a3.c
if(typeof i!=="number")return H.i(i)
j=a4.a
if(typeof j!=="number")return j.m()
k=a4.c
if(typeof k!=="number")return k.m()
l=$.$get$a1()
z=$.$get$a4()
C.a.h(a0,F.bp(null,null,null,new V.v(y+g,s+h,r+i),null,new V.Q(j+0.5,k+0.5),null,new Z.ac(l.a|z.a|$.$get$ad().a),0))}a5=x.bt(a)
a6=w.bt(a0)
x.bs(P.co(a.length,new B.k4(a5),!0,p))
w.bs(P.co(a0.length,new B.k5(a6),!0,p))},
n:{
dP:function(a,b){var z,y,x
z=new B.k1(a,b)
if(b==null){y=$.$get$a1()
x=$.$get$a4()
z.b=new Z.ac(y.a|x.a|$.$get$ad().a)}y=a==null?null:a.d
y=y==null?null:y.length
if(y==null)y=1
y=new Array(y)
y.fixed$length=Array
z.see(H.b(y,[F.dJ]))
return z}}},
k2:{"^":"q:6;a",
$1:function(a){return this.a+a}},
k3:{"^":"q:6;a",
$1:function(a){return this.a+a}},
k4:{"^":"q:6;a",
$1:function(a){return this.a+a}},
k5:{"^":"q:6;a",
$1:function(a){return this.a+a}},
lb:{"^":"c;a,0b,0c,0d,0e,0f,0r",
shW:function(a){this.c=H.d(a,"$isa",[B.cD],"$asa")},
shB:function(a){this.d=H.d(a,"$isa",[B.cD],"$asa")},
scu:function(a){this.e=H.d(a,"$isa",[E.Z],"$asa")},
fW:function(a,b){var z,y,x,w,v,u,t
z=new B.iG()
z.a=L.jq(b)
z.b=new Uint8Array(484)
this.b=z
z=[B.cD]
this.shW(H.b([],z))
this.shB(H.b([],z))
this.scu(H.b([],[E.Z]))
this.r=null
for(z=this.a.d,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
C.a.h(this.e,E.bf(null,!0,null,"",null,w))}for(v=0;v<140;++v){z=this.c;(z&&C.a).h(z,B.i8(this))}for(u=-32;u<32;u+=16)for(t=-32;t<32;t+=16)this.b.eT(this.ea(u,t))
P.cT(C.Q,this.gjq())
P.cT(C.P,this.ghQ())
P.cT(C.N,this.ghm())},
aU:function(a,b){var z,y,x,w
for(z=this.d,y=z.length,x=0;x<y;++x){w=z[x]
if(w.a===a&&w.b===b)return w}return},
a9:function(a,b,c){var z,y,x,w,v,u
z=C.e.a6(J.cx(a).af(a),16)*16
y=C.e.a6(J.cx(c).af(c),16)*16
if(a<0)z-=16
if(c<0)y-=16
x=this.aU(z,y)
w=C.j.bh(a)-z
v=J.cA(b)
u=C.j.bh(c)-y
if(w<0)w+=16
return new B.i1(w,v,u<0?u+16:u,z,y,x)},
lW:[function(a){H.h(a,"$isaq")
this.jo(this.f.x.f.S(V.bk()))},"$1","gjq",4,0,10],
lh:[function(a){var z
H.h(a,"$isaq")
z=this.f.x.f.S(V.bk())
this.hP(z)
this.iL(z)},"$1","ghQ",4,0,10],
lg:[function(a){var z,y,x,w
H.h(a,"$isaq")
z=this.a.x
y=z.b
x=z.e
w=x.length
y=(y+1)%w
if(y<w){z.b=y
z.c=H.h(x[y],"$isbS")
z=z.f
if(!(z==null))z.ew()}},"$1","ghm",4,0,10],
ea:function(a,b){var z,y
z=this.c
if(0>=z.length)return H.f(z,-1)
y=z.pop()
y.a=a
y.b=b
y.f=!0
y.x=!0
y.saM(!1)
C.a.h(this.d,y)
return y},
jo:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=this.a9(a.a,a.b,a.c)
y=this.r
x=z.f
if(y==null?x!=null:y!==x){this.r=x
y=z.d
w=y-128
v=y+128
x=z.e
u=x-128
t=x+128
for(s=this.d.length-1;s>=0;--s){r=this.d
if(s>=r.length)return H.f(r,s)
q=r[s]
r=q.a
if(w<=r)if(v>r){r=q.b
r=u>r||t<=r}else r=!0
else r=!0
if(r){q.f=!1
q.saM(!1)
q.x=!0
q.r=!1
C.a.Y(this.d,q)
r=this.c;(r&&C.a).h(r,q)}}p=y-64
o=y+64
n=x-64
m=x+64
for(l=p;l<o;l+=16)for(k=n;k<m;k+=16)if(this.aU(l,k)==null)this.ea(l,k)}},
hP:function(a){var z,y,x,w,v,u,t,s,r,q,p
z=a.a
if(typeof z!=="number")return z.v()
y=z-8
z=a.c
if(typeof z!=="number")return z.v()
x=z-8
for(z=this.d,w=z.length,v=null,u=1e-9,t=0;t<w;++t){s=z[t]
if(s.x){r=s.a-y
q=s.b-x
p=r*r+q*q
if(v==null||u>p){u=p
v=s}}}if(v!=null)this.b.eT(v)},
iL:function(a){var z,y,x,w,v,u,t,s,r,q,p
z=a.a
if(typeof z!=="number")return z.v()
y=z-8
z=a.c
if(typeof z!=="number")return z.v()
x=z-8
for(z=this.d,w=z.length,v=null,u=1e-9,t=0;t<w;++t){s=z[t]
if(s.f&&!s.x){r=s.a-y
q=s.b-x
p=r*r+q*q
if(v==null||u>p){u=p
v=s}}}if(v!=null){v.f=!1
v.r=!0}},
ag:[function(a){var z,y,x,w,v,u,t,s,r
H.h(a,"$isw")
z=this.f.x.f
y=z.S(V.bk())
x=z.S(new V.v(0,0,-16))
w=new V.Q(y.a,y.c)
v=new V.Q(x.a,x.c)
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
r.l5()
r.l6(w,v)}},"$1","gl4",4,0,0],
n:{
lc:function(a,b){var z=new B.lb(a)
z.fW(a,b)
return z}}}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eU.prototype
return J.eT.prototype}if(typeof a=="string")return J.cO.prototype
if(a==null)return J.eV.prototype
if(typeof a=="boolean")return J.iR.prototype
if(a.constructor==Array)return J.bg.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cm.prototype
return a}if(a instanceof P.c)return a
return J.d3(a)}
J.aH=function(a){if(typeof a=="string")return J.cO.prototype
if(a==null)return a
if(a.constructor==Array)return J.bg.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cm.prototype
return a}if(a instanceof P.c)return a
return J.d3(a)}
J.hE=function(a){if(a==null)return a
if(a.constructor==Array)return J.bg.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cm.prototype
return a}if(a instanceof P.c)return a
return J.d3(a)}
J.cx=function(a){if(typeof a=="number")return J.cN.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.cW.prototype
return a}
J.el=function(a){if(typeof a=="string")return J.cO.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.cW.prototype
return a}
J.bb=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cm.prototype
return a}if(a instanceof P.c)return a
return J.d3(a)}
J.Y=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).t(a,b)}
J.hQ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.cx(a).L(a,b)}
J.hR=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mT(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aH(a).k(a,b)}
J.hS=function(a,b,c,d){return J.bb(a).hg(a,b,c,d)}
J.hT=function(a,b){return J.el(a).J(a,b)}
J.d9=function(a,b,c){return J.bb(a).iP(a,b,c)}
J.eq=function(a,b){return J.bb(a).a4(a,b)}
J.hU=function(a,b){return J.el(a).Z(a,b)}
J.da=function(a,b,c){return J.aH(a).k_(a,b,c)}
J.db=function(a,b){return J.hE(a).an(a,b)}
J.hV=function(a,b,c,d){return J.bb(a).eU(a,b,c,d)}
J.cA=function(a){return J.cx(a).bh(a)}
J.bd=function(a){return J.I(a).gV(a)}
J.bB=function(a){return J.hE(a).gX(a)}
J.aI=function(a){return J.aH(a).gq(a)}
J.hW=function(a,b){return J.bb(a).kQ(a,b)}
J.dc=function(a){return J.cx(a).af(a)}
J.az=function(a){return J.I(a).i(a)}
I.aj=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.x=W.i4.prototype
C.n=W.di.prototype
C.y=W.dk.prototype
C.l=W.eH.prototype
C.R=W.iK.prototype
C.S=W.iM.prototype
C.T=J.J.prototype
C.a=J.bg.prototype
C.o=J.eT.prototype
C.e=J.eU.prototype
C.q=J.eV.prototype
C.j=J.cN.prototype
C.c=J.cO.prototype
C.a_=J.cm.prototype
C.a4=H.dH.prototype
C.a5=W.jn.prototype
C.F=J.jt.prototype
C.b=P.dM.prototype
C.w=J.cW.prototype
C.G=W.bW.prototype
C.H=W.la.prototype
C.J=new P.i0(!1)
C.I=new P.i_(C.J)
C.K=new P.jr()
C.L=new P.kZ()
C.M=new P.lC()
C.k=new P.lK()
C.d=new A.cE(0,"ColorSourceType.None")
C.i=new A.cE(1,"ColorSourceType.Solid")
C.f=new A.cE(2,"ColorSourceType.Texture2D")
C.h=new A.cE(3,"ColorSourceType.TextureCube")
C.p=new P.aJ(0)
C.N=new P.aJ(25e4)
C.O=new P.aJ(5e6)
C.P=new P.aJ(7e4)
C.Q=new P.aJ(75e4)
C.U=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.V=function(hooks) {
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

C.W=function(getTagFallback) {
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
C.X=function() {
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
C.Y=function(hooks) {
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
C.Z=function(hooks) {
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
C.B=H.b(I.aj([127,2047,65535,1114111]),[P.j])
C.r=H.b(I.aj([0,0,32776,33792,1,10240,0,0]),[P.j])
C.t=H.b(I.aj([0,0,65490,45055,65535,34815,65534,18431]),[P.j])
C.u=H.b(I.aj([0,0,26624,1023,65534,2047,65534,2047]),[P.j])
C.a1=H.b(I.aj([0,0,32722,12287,65534,34815,65534,18431]),[P.j])
C.C=H.b(I.aj([0,0,65498,45055,65535,34815,65534,18431]),[P.j])
C.v=H.b(I.aj([0,0,24576,1023,65534,34815,65534,18431]),[P.j])
C.D=H.b(I.aj([0,0,32754,11263,65534,34815,65534,18431]),[P.j])
C.a2=H.b(I.aj([0,0,32722,12287,65535,34815,65534,18431]),[P.j])
C.E=H.b(I.aj([0,0,65490,12287,65535,34815,65534,18431]),[P.j])
C.a0=H.b(I.aj([]),[P.p])
C.a3=new H.ii(0,{},C.a0,[P.p,P.p])
C.m=new P.kS(!1)
$.aA=0
$.bC=null
$.et=null
$.ee=!1
$.hG=null
$.hz=null
$.hM=null
$.d2=null
$.d5=null
$.em=null
$.bt=null
$.c_=null
$.c0=null
$.ef=!1
$.O=C.k
$.eF=null
$.eE=null
$.eD=null
$.eC=null
$.m=V.jh()
$.f4=null
$.f8=null
$.fe=null
$.bQ=null
$.fl=null
$.fT=null
$.fZ=null
$.fX=null
$.fU=null
$.fY=null
$.fV=null
$.cX=null
$.fW=null
$.fc=null
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
I.$lazy(y,x,w)}})(["eB","$get$eB",function(){return H.hF("_$dart_dartClosure")},"dx","$get$dx",function(){return H.hF("_$dart_js")},"fC","$get$fC",function(){return H.aF(H.cU({
toString:function(){return"$receiver$"}}))},"fD","$get$fD",function(){return H.aF(H.cU({$method$:null,
toString:function(){return"$receiver$"}}))},"fE","$get$fE",function(){return H.aF(H.cU(null))},"fF","$get$fF",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fJ","$get$fJ",function(){return H.aF(H.cU(void 0))},"fK","$get$fK",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fH","$get$fH",function(){return H.aF(H.fI(null))},"fG","$get$fG",function(){return H.aF(function(){try{null.$method$}catch(z){return z.message}}())},"fM","$get$fM",function(){return H.aF(H.fI(void 0))},"fL","$get$fL",function(){return H.aF(function(){try{(void 0).$method$}catch(z){return z.message}}())},"ea","$get$ea",function(){return P.ld()},"c1","$get$c1",function(){return[]},"fS","$get$fS",function(){return P.kW()},"h6","$get$h6",function(){return H.jk(H.bs(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.j])))},"ho","$get$ho",function(){return P.jN("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hv","$get$hv",function(){return P.mm()},"eA","$get$eA",function(){return{}},"eJ","$get$eJ",function(){return H.b([B.aE(5,2),B.aE(2,5),B.aE(-5,2),B.aE(-2,5),B.aE(5,-2),B.aE(2,-5),B.aE(-5,-2),B.aE(-2,-5)],[B.b6])},"eK","$get$eK",function(){return B.aE(-0.211324865405187,-0.211324865405187)},"dr","$get$dr",function(){return B.aE(0.366025403784439,0.366025403784439)},"h2","$get$h2",function(){return Z.ax(0)},"a1","$get$a1",function(){return Z.ax(1)},"ad","$get$ad",function(){return Z.ax(2)},"aT","$get$aT",function(){return Z.ax(4)},"a4","$get$a4",function(){return Z.ax(8)},"aU","$get$aU",function(){return Z.ax(16)},"bU","$get$bU",function(){return Z.ax(32)},"bV","$get$bV",function(){return Z.ax(64)},"h1","$get$h1",function(){return Z.ax(96)},"bq","$get$bq",function(){return Z.ax(128)},"aS","$get$aS",function(){return Z.ax(256)},"eO","$get$eO",function(){return V.am(0)},"eN","$get$eN",function(){return V.am(511)},"b2","$get$b2",function(){return V.am(1)},"du","$get$du",function(){return V.am(2)},"b1","$get$b1",function(){return V.am(4)},"bH","$get$bH",function(){return V.am(8)},"dv","$get$dv",function(){return V.am(16)},"bG","$get$bG",function(){return V.am(32)},"bJ","$get$bJ",function(){return V.am(64)},"eP","$get$eP",function(){return V.am(128)},"bI","$get$bI",function(){return V.am(256)},"dt","$get$dt",function(){return V.am(146)},"cB","$get$cB",function(){return H.b([101,102,103,104,105,106,115,109,110,111,112,113,1,114,200,201,202,203,204,205],[P.j])},"ch","$get$ch",function(){return V.h0()},"cc","$get$cc",function(){var z=$.fV
if(z==null){z=V.e8(0,-1,0)
$.fV=z}return z},"dp","$get$dp",function(){var z=$.fX
if(z==null){z=V.e8(1,0,0)
$.fX=z}return z},"dq","$get$dq",function(){var z=$.fU
if(z==null){z=V.e8(-1,0,0)
$.fU=z}return z},"cF","$get$cF",function(){return V.e9()},"dn","$get$dn",function(){return V.h_()},"cf","$get$cf",function(){return V.b7(-0.5,0.5,0.5)},"cg","$get$cg",function(){return V.b7(0.5,0.5,0.5)},"cd","$get$cd",function(){return V.b7(-0.5,-0.5,0.5)},"ce","$get$ce",function(){return V.b7(0.5,-0.5,0.5)},"ca","$get$ca",function(){return V.b7(-0.5,0.5,-0.5)},"cb","$get$cb",function(){return V.b7(0.5,0.5,-0.5)},"c8","$get$c8",function(){return V.b7(-0.5,-0.5,-0.5)},"c9","$get$c9",function(){return V.b7(0.5,-0.5,-0.5)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,args:[D.w]},{func:1,ret:-1,opt:[D.w]},{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[W.av]},{func:1,ret:P.F,args:[F.af]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:P.F,args:[D.w]},{func:1,ret:-1,args:[P.j,[P.n,E.Z]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.aq]},{func:1,ret:P.F,args:[,,]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[W.ae]},{func:1,ret:P.p,args:[P.j]},{func:1,ret:-1,args:[P.j,[P.n,V.ao]]},{func:1,ret:-1,args:[P.j,[P.n,U.a9]]},{func:1,ret:P.x},{func:1,ret:-1,args:[P.j,[P.n,D.a8]]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bM]},{func:1,ret:-1,args:[P.j,[P.n,X.K]]},{func:1,ret:P.a2,args:[W.L]},{func:1,ret:W.a3,args:[W.L]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,args:[W.ae]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.F,args:[P.ak]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:P.a2,args:[[P.n,X.K]]},{func:1,ret:P.M,args:[P.j]},{func:1,ret:P.a2,args:[P.x,P.x]},{func:1,ret:P.F,args:[P.p,,]},{func:1,args:[,P.p]},{func:1,ret:-1,args:[P.p,P.p]},{func:1,ret:-1,args:[W.bW]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:P.a2,args:[[P.n,D.a8]]},{func:1,ret:P.j,args:[P.j,P.j]},{func:1,ret:-1,args:[P.p],opt:[,]},{func:1,ret:-1,args:[P.p,P.j]},{func:1,ret:P.F,args:[P.p]},{func:1,ret:[P.D,P.p,P.p],args:[[P.D,P.p,P.p],P.p]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:P.F,args:[P.aq]},{func:1,ret:V.v,args:[V.v,V.v]},{func:1,ret:P.j,args:[[P.a,P.j],P.j]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,args:[P.p]},{func:1,ret:[P.aV,,],args:[,]}]
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
if(x==y)H.n2(d||a)
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
Isolate.aj=a.aj
Isolate.c3=a.c3
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
if(typeof dartMainRunner==="function")dartMainRunner(B.hJ,[])
else B.hJ([])})})()
//# sourceMappingURL=main.dart.js.map
