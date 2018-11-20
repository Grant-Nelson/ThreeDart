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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isF)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dU(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dV=function(){}
var dart=[["","",,H,{"^":"",nH:{"^":"a;a"}}],["","",,J,{"^":"",
dZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cR:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dY==null){H.nd()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.cH("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$db()]
if(v!=null)return v
v=H.nh(a)
if(v!=null)return v
if(typeof a=="function")return C.a5
y=Object.getPrototypeOf(a)
if(y==null)return C.L
if(y===Object.prototype)return C.L
if(typeof w=="function"){Object.defineProperty(w,$.$get$db(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
F:{"^":"a;",
A:function(a,b){return a===b},
ga0:function(a){return H.bE(a)},
i:["fP",function(a){return"Instance of '"+H.bd(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo"},
iQ:{"^":"F;",
i:function(a){return String(a)},
ga0:function(a){return a?519018:218159},
$isL:1},
eB:{"^":"F;",
A:function(a,b){return null==b},
i:function(a){return"null"},
ga0:function(a){return 0},
$isD:1},
dc:{"^":"F;",
ga0:function(a){return 0},
i:["fR",function(a){return String(a)}]},
jv:{"^":"dc;"},
cd:{"^":"dc;"},
c5:{"^":"dc;",
i:function(a){var z=a[$.$get$ej()]
if(z==null)return this.fR(a)
return"JavaScript function for "+H.j(J.av(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isc_:1},
b9:{"^":"F;$ti",
h:function(a,b){H.x(b,H.q(a,0))
if(!!a.fixed$length)H.r(P.U("add"))
a.push(b)},
kD:function(a,b){var z
if(!!a.fixed$length)H.r(P.U("removeAt"))
z=a.length
if(b>=z)throw H.e(P.c9(b,null,null))
return a.splice(b,1)[0]},
R:function(a,b){var z
if(!!a.fixed$length)H.r(P.U("remove"))
for(z=0;z<a.length;++z)if(J.O(a[z],b)){a.splice(z,1)
return!0}return!1},
af:function(a,b){var z,y
H.k(b,"$isn",[H.q(a,0)],"$asn")
if(!!a.fixed$length)H.r(P.U("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.A)(b),++y)a.push(b[y])},
S:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.aD(a))}},
l:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.q(z,y,H.j(a[y]))
return z.join(b)},
ke:function(a){return this.l(a,"")},
k0:function(a,b,c,d){var z,y,x
H.x(b,d)
H.l(c,{func:1,ret:d,args:[d,H.q(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.e(P.aD(a))}return y},
k_:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.L,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.e(P.aD(a))}throw H.e(H.cv())},
jZ:function(a,b){return this.k_(a,b,null)},
ag:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fO:function(a,b,c){if(b<0||b>a.length)throw H.e(P.a0(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.a0(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.q(a,0)])
return H.c(a.slice(b,c),[H.q(a,0)])},
gjY:function(a){if(a.length>0)return a[0]
throw H.e(H.cv())},
gaF:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.cv())},
ei:function(a,b){var z,y
H.l(b,{func:1,ret:P.L,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.e(P.aD(a))}return!1},
a_:function(a,b){var z
for(z=0;z<a.length;++z)if(J.O(a[z],b))return!0
return!1},
i:function(a){return P.da(a,"[","]")},
gT:function(a){return new J.aw(a,a.length,0,[H.q(a,0)])},
ga0:function(a){return H.bE(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.r(P.U("set length"))
if(b<0)throw H.e(P.a0(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.e(H.bp(a,b))
return a[b]},
q:function(a,b,c){H.x(c,H.q(a,0))
if(!!a.immutable$list)H.r(P.U("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bp(a,b))
a[b]=c},
$isn:1,
$isb:1,
p:{
iP:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.cZ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.a0(a,0,4294967295,"length",null))
return J.ey(new Array(a),b)},
ey:function(a,b){return J.cw(H.c(a,[b]))},
cw:function(a){H.ch(a)
a.fixed$length=Array
return a}}},
nG:{"^":"b9;$ti"},
aw:{"^":"a;a,b,c,0d,$ti",
sdP:function(a){this.d=H.x(a,H.q(this,0))},
gJ:function(){return this.d},
C:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.A(z))
x=this.c
if(x>=y){this.sdP(null)
return!1}this.sdP(z[x]);++this.c
return!0},
$isb0:1},
c3:{"^":"F;",
kQ:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.e(P.U(""+a+".toInt()"))},
d0:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.U(""+a+".floor()"))},
a5:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.U(""+a+".round()"))},
fk:function(a,b){var z,y
if(b>20)throw H.e(P.a0(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bw:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.e(P.a0(b,2,36,"radix",null))
z=a.toString(b)
if(C.c.a3(z,z.length-1)!==41)return z
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
ga0:function(a){return a&0x1FFFFFFF},
u:function(a,b){if(typeof b!=="number")throw H.e(H.ag(b))
return a*b},
bA:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fV:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.eb(a,b)},
ac:function(a,b){return(a|0)===a?a/b|0:this.eb(a,b)},
eb:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.U("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
b_:function(a,b){var z
if(a>0)z=this.e9(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
iQ:function(a,b){if(b<0)throw H.e(H.ag(b))
return this.e9(a,b)},
e9:function(a,b){return b>31?0:a>>>b},
U:function(a,b){if(typeof b!=="number")throw H.e(H.ag(b))
return a<b},
$isy:1,
$isam:1},
eA:{"^":"c3;",$ism:1},
ez:{"^":"c3;"},
c4:{"^":"F;",
a3:function(a,b){if(b<0)throw H.e(H.bp(a,b))
if(b>=a.length)H.r(H.bp(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.e(H.bp(a,b))
return a.charCodeAt(b)},
K:function(a,b){H.C(b)
if(typeof b!=="string")throw H.e(P.cZ(b,null,null))
return a+b},
b8:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ag(b))
c=P.b3(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ao:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ag(c))
if(typeof c!=="number")return c.U()
if(c<0||c>a.length)throw H.e(P.a0(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ab:function(a,b){return this.ao(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ag(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.U()
if(b<0)throw H.e(P.c9(b,null,null))
if(b>c)throw H.e(P.c9(b,null,null))
if(c>a.length)throw H.e(P.c9(c,null,null))
return a.substring(b,c)},
ay:function(a,b){return this.v(a,b,null)},
kT:function(a){return a.toLowerCase()},
u:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.R)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ks:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.u(c,z)+a},
aO:function(a,b){return this.ks(a,b," ")},
f5:function(a,b,c){var z
if(c<0||c>a.length)throw H.e(P.a0(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
f4:function(a,b){return this.f5(a,b,0)},
jG:function(a,b,c){if(c>a.length)throw H.e(P.a0(c,0,a.length,null,null))
return H.hB(a,b,c)},
i:function(a){return a},
ga0:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gn:function(a){return a.length},
$iseU:1,
$isi:1}}],["","",,H,{"^":"",
cS:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
cv:function(){return new P.dp("No element")},
iO:function(){return new P.dp("Too many elements")},
t:{"^":"kP;a",
gn:function(a){return this.a.length},
j:function(a,b){return C.c.a3(this.a,b)},
$asdE:function(){return[P.m]},
$asT:function(){return[P.m]},
$asn:function(){return[P.m]},
$asb:function(){return[P.m]}},
er:{"^":"n;"},
cy:{"^":"er;$ti",
gT:function(a){return new H.de(this,this.gn(this),0,[H.a2(this,"cy",0)])},
dm:function(a,b){return this.fQ(0,H.l(b,{func:1,ret:P.L,args:[H.a2(this,"cy",0)]}))}},
de:{"^":"a;a,b,c,0d,$ti",
sbd:function(a){this.d=H.x(a,H.q(this,0))},
gJ:function(){return this.d},
C:function(){var z,y,x,w
z=this.a
y=J.br(z)
x=y.gn(z)
if(this.b!==x)throw H.e(P.aD(z))
w=this.c
if(w>=x){this.sbd(null)
return!1}this.sbd(y.ag(z,w));++this.c
return!0},
$isb0:1},
j9:{"^":"n;a,b,$ti",
gT:function(a){return new H.ja(J.b7(this.a),this.b,this.$ti)},
gn:function(a){return J.au(this.a)},
ag:function(a,b){return this.b.$1(J.cj(this.a,b))},
$asn:function(a,b){return[b]}},
ja:{"^":"b0;0a,b,c,$ti",
sbd:function(a){this.a=H.x(a,H.q(this,1))},
C:function(){var z=this.b
if(z.C()){this.sbd(this.c.$1(z.gJ()))
return!0}this.sbd(null)
return!1},
gJ:function(){return this.a},
$asb0:function(a,b){return[b]}},
jb:{"^":"cy;a,b,$ti",
gn:function(a){return J.au(this.a)},
ag:function(a,b){return this.b.$1(J.cj(this.a,b))},
$ascy:function(a,b){return[b]},
$asn:function(a,b){return[b]}},
dI:{"^":"n;a,b,$ti",
gT:function(a){return new H.lk(J.b7(this.a),this.b,this.$ti)}},
lk:{"^":"b0;a,b,$ti",
C:function(){var z,y
for(z=this.a,y=this.b;z.C();)if(y.$1(z.gJ()))return!0
return!1},
gJ:function(){return this.a.gJ()}},
ct:{"^":"a;$ti"},
dE:{"^":"a;$ti",
q:function(a,b,c){H.x(c,H.a2(this,"dE",0))
throw H.e(P.U("Cannot modify an unmodifiable list"))}},
kP:{"^":"cx+dE;"}}],["","",,H,{"^":"",
i5:function(){throw H.e(P.U("Cannot modify unmodifiable Map"))},
bu:function(a){var z,y
z=H.C(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
n6:function(a){return init.types[H.a1(a)]},
ng:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.M(a).$isay},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.av(a)
if(typeof z!=="string")throw H.e(H.ag(a))
return z},
bE:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jG:function(a,b){var z,y,x,w,v,u
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
for(v=w.length,u=0;u<v;++u)if((C.c.G(w,u)|32)>x)return}return parseInt(a,b)},
bd:function(a){return H.jx(a)+H.dR(H.b6(a),0,null)},
jx:function(a){var z,y,x,w,v,u,t,s,r
z=J.M(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.Y||!!z.$iscd){u=C.F(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bu(w.length>1&&C.c.G(w,0)===36?C.c.ay(w,1):w)},
jy:function(){if(!!self.location)return self.location.href
return},
f_:function(a){var z,y,x,w,v
H.ch(a)
z=J.au(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jH:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.ag(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.b_(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.e(H.ag(w))}return H.f_(z)},
f0:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.ag(x))
if(x<0)throw H.e(H.ag(x))
if(x>65535)return H.jH(a)}return H.f_(a)},
jI:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
be:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.b_(z,10))>>>0,56320|z&1023)}}throw H.e(P.a0(a,0,1114111,null,null))},
bc:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jF:function(a){var z=H.bc(a).getFullYear()+0
return z},
jD:function(a){var z=H.bc(a).getMonth()+1
return z},
jz:function(a){var z=H.bc(a).getDate()+0
return z},
jA:function(a){var z=H.bc(a).getHours()+0
return z},
jC:function(a){var z=H.bc(a).getMinutes()+0
return z},
jE:function(a){var z=H.bc(a).getSeconds()+0
return z},
jB:function(a){var z=H.bc(a).getMilliseconds()+0
return z},
z:function(a){throw H.e(H.ag(a))},
f:function(a,b){if(a==null)J.au(a)
throw H.e(H.bp(a,b))},
bp:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aM(!0,b,"index",null)
z=H.a1(J.au(a))
if(!(b<0)){if(typeof z!=="number")return H.z(z)
y=b>=z}else y=!0
if(y)return P.b8(b,a,"index",null,z)
return P.c9(b,"index",null)},
n0:function(a,b,c){if(a>c)return new P.cC(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cC(a,c,!0,b,"end","Invalid value")
return new P.aM(!0,b,"end",null)},
ag:function(a){return new P.aM(!0,a,null,null)},
mU:function(a){if(typeof a!=="number")throw H.e(H.ag(a))
return a},
e:function(a){var z
if(a==null)a=new P.eT()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hC})
z.name=""}else z.toString=H.hC
return z},
hC:function(){return J.av(this.dartException)},
r:function(a){throw H.e(a)},
A:function(a){throw H.e(P.aD(a))},
ac:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nw(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.b_(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dd(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eS(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fp()
u=$.$get$fq()
t=$.$get$fr()
s=$.$get$fs()
r=$.$get$fw()
q=$.$get$fx()
p=$.$get$fu()
$.$get$ft()
o=$.$get$fz()
n=$.$get$fy()
m=v.ar(y)
if(m!=null)return z.$1(H.dd(H.C(y),m))
else{m=u.ar(y)
if(m!=null){m.method="call"
return z.$1(H.dd(H.C(y),m))}else{m=t.ar(y)
if(m==null){m=s.ar(y)
if(m==null){m=r.ar(y)
if(m==null){m=q.ar(y)
if(m==null){m=p.ar(y)
if(m==null){m=s.ar(y)
if(m==null){m=o.ar(y)
if(m==null){m=n.ar(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eS(H.C(y),m))}}return z.$1(new H.kO(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.fb()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aM(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.fb()
return a},
bs:function(a){var z
if(a==null)return new H.h4(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h4(a)},
n3:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.q(0,a[y],a[x])}return b},
nf:function(a,b,c,d,e,f){H.d(a,"$isc_")
switch(H.a1(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.u("Unsupported number of arguments for wrapped closure"))},
bo:function(a,b){var z
H.a1(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nf)
a.$identity=z
return z},
i0:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.M(d).$isb){z.$reflectionInfo=d
x=H.jN(z).r}else x=d
w=e?Object.create(new H.kd().constructor.prototype):Object.create(new H.d0(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aC
if(typeof u!=="number")return u.K()
$.aC=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.ee(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.n6,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.e9:H.d1
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.e("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ee(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
hY:function(a,b,c,d){var z=H.d1
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ee:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.i_(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hY(y,!w,z,b)
if(y===0){w=$.aC
if(typeof w!=="number")return w.K()
$.aC=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bw
if(v==null){v=H.cm("self")
$.bw=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aC
if(typeof w!=="number")return w.K()
$.aC=w+1
t+=w
w="return function("+t+"){return this."
v=$.bw
if(v==null){v=H.cm("self")
$.bw=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
hZ:function(a,b,c,d){var z,y
z=H.d1
y=H.e9
switch(b?-1:a){case 0:throw H.e(H.jX("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
i_:function(a,b){var z,y,x,w,v,u,t,s
z=$.bw
if(z==null){z=H.cm("self")
$.bw=z}y=$.e8
if(y==null){y=H.cm("receiver")
$.e8=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hZ(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aC
if(typeof y!=="number")return y.K()
$.aC=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aC
if(typeof y!=="number")return y.K()
$.aC=y+1
return new Function(z+y+"}")()},
dU:function(a,b,c,d,e,f,g){return H.i0(a,b,H.a1(c),d,!!e,!!f,g)},
C:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aA(a,"String"))},
n1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aA(a,"double"))},
nm:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aA(a,"num"))},
dS:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aA(a,"bool"))},
a1:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aA(a,"int"))},
hz:function(a,b){throw H.e(H.aA(a,H.bu(H.C(b).substring(3))))},
no:function(a,b){throw H.e(H.hX(a,H.bu(H.C(b).substring(3))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.M(a)[b])return a
H.hz(a,b)},
h:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else z=!0
if(z)return a
H.no(a,b)},
ch:function(a){if(a==null)return a
if(!!J.M(a).$isb)return a
throw H.e(H.aA(a,"List<dynamic>"))},
hw:function(a,b){var z
if(a==null)return a
z=J.M(a)
if(!!z.$isb)return a
if(z[b])return a
H.hz(a,b)},
hs:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a1(z)]
else return a.$S()}return},
cg:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hs(J.M(a))
if(z==null)return!1
return H.hh(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.dO)return a
$.dO=!0
try{if(H.cg(a,b))return a
z=H.cV(b)
y=H.aA(a,z)
throw H.e(y)}finally{$.dO=!1}},
dW:function(a,b){if(a!=null&&!H.dT(a,b))H.r(H.aA(a,H.cV(b)))
return a},
hn:function(a){var z,y
z=J.M(a)
if(!!z.$iso){y=H.hs(z)
if(y!=null)return H.cV(y)
return"Closure"}return H.bd(a)},
nt:function(a){throw H.e(new P.i9(H.C(a)))},
ht:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b6:function(a){if(a==null)return
return a.$ti},
o8:function(a,b,c){return H.bt(a["$as"+H.j(c)],H.b6(b))},
bS:function(a,b,c,d){var z
H.C(c)
H.a1(d)
z=H.bt(a["$as"+H.j(c)],H.b6(b))
return z==null?null:z[d]},
a2:function(a,b,c){var z
H.C(b)
H.a1(c)
z=H.bt(a["$as"+H.j(b)],H.b6(a))
return z==null?null:z[c]},
q:function(a,b){var z
H.a1(b)
z=H.b6(a)
return z==null?null:z[b]},
cV:function(a){return H.b5(a,null)},
b5:function(a,b){var z,y
H.k(b,"$isb",[P.i],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bu(a[0].builtin$cls)+H.dR(a,1,b)
if(typeof a=="function")return H.bu(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a1(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.j(b[y])}if('func' in a)return H.mK(a,b)
if('futureOr' in a)return"FutureOr<"+H.b5("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
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
t=C.c.K(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.b5(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b5(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b5(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b5(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.n2(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.C(z[l])
n=n+m+H.b5(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dR:function(a,b,c){var z,y,x,w,v,u
H.k(c,"$isb",[P.i],"$asb")
if(a==null)return""
z=new P.ai("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b5(u,c)}return"<"+z.i(0)+">"},
bt:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bQ:function(a,b,c,d){var z,y
H.C(b)
H.ch(c)
H.C(d)
if(a==null)return!1
z=H.b6(a)
y=J.M(a)
if(y[b]==null)return!1
return H.hq(H.bt(y[d],z),null,c,null)},
k:function(a,b,c,d){H.C(b)
H.ch(c)
H.C(d)
if(a==null)return a
if(H.bQ(a,b,c,d))return a
throw H.e(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bu(b.substring(3))+H.dR(c,0,null),init.mangledGlobalNames)))},
hq:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.at(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.at(a[y],b,c[y],d))return!1
return!0},
o6:function(a,b,c){return a.apply(b,H.bt(J.M(b)["$as"+H.j(c)],H.b6(b)))},
hv:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="D"||a===-1||a===-2||H.hv(z)}return!1},
dT:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="D"||b===-1||b===-2||H.hv(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dT(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cg(a,b)}z=J.M(a).constructor
y=H.b6(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.at(z,null,b,null)},
x:function(a,b){if(a!=null&&!H.dT(a,b))throw H.e(H.aA(a,H.cV(b)))
return a},
at:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.at(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="D")return!0
if('func' in c)return H.hh(a,b,c,d)
if('func' in a)return c.builtin$cls==="c_"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.at("type" in a?a.type:null,b,x,d)
else if(H.at(a,b,x,d))return!0
else{if(!('$is'+"bA" in y.prototype))return!1
w=y.prototype["$as"+"bA"]
v=H.bt(w,z?a.slice(1):null)
return H.at(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hq(H.bt(r,z),b,u,d)},
hh:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.nl(m,b,l,d)},
nl:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.at(c[w],d,a[w],b))return!1}return!0},
o7:function(a,b,c){Object.defineProperty(a,H.C(b),{value:c,enumerable:false,writable:true,configurable:true})},
nh:function(a){var z,y,x,w,v,u
z=H.C($.hu.$1(a))
y=$.cQ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cT[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.C($.hp.$2(a,z))
if(z!=null){y=$.cQ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cT[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cU(x)
$.cQ[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cT[z]=x
return x}if(v==="-"){u=H.cU(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hy(a,x)
if(v==="*")throw H.e(P.cH(z))
if(init.leafTags[z]===true){u=H.cU(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hy(a,x)},
hy:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dZ(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cU:function(a){return J.dZ(a,!1,null,!!a.$isay)},
nk:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cU(z)
else return J.dZ(z,c,null,null)},
nd:function(){if(!0===$.dY)return
$.dY=!0
H.ne()},
ne:function(){var z,y,x,w,v,u,t,s
$.cQ=Object.create(null)
$.cT=Object.create(null)
H.n9()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hA.$1(v)
if(u!=null){t=H.nk(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
n9:function(){var z,y,x,w,v,u,t
z=C.a2()
z=H.bn(C.a_,H.bn(C.a4,H.bn(C.E,H.bn(C.E,H.bn(C.a3,H.bn(C.a0,H.bn(C.a1(C.F),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hu=new H.na(v)
$.hp=new H.nb(u)
$.hA=new H.nc(t)},
bn:function(a,b){return a(b)||b},
hB:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
e0:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i4:{"^":"a;$ti",
i:function(a){return P.df(this)},
q:function(a,b,c){H.x(b,H.q(this,0))
H.x(c,H.q(this,1))
return H.i5()},
$isJ:1},
i6:{"^":"i4;a,b,c,$ti",
gn:function(a){return this.a},
bK:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j:function(a,b){if(!this.bK(b))return
return this.dR(b)},
dR:function(a){return this.b[H.C(a)]},
S:function(a,b){var z,y,x,w,v
z=H.q(this,1)
H.l(b,{func:1,ret:-1,args:[H.q(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.x(this.dR(v),z))}}},
jM:{"^":"a;a,b,c,d,e,f,r,0x",p:{
jN:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cw(z)
y=z[0]
x=z[1]
return new H.jM(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kA:{"^":"a;a,b,c,d,e,f",
ar:function(a){var z,y,x
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
aL:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kA(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cG:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fv:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
js:{"^":"a4;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
eS:function(a,b){return new H.js(a,b==null?null:b.method)}}},
iT:{"^":"a4;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
p:{
dd:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iT(a,y,z?null:b.receiver)}}},
kO:{"^":"a4;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nw:{"^":"o:22;a",
$1:function(a){if(!!J.M(a).$isa4)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h4:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaR:1},
o:{"^":"a;",
i:function(a){return"Closure '"+H.bd(this).trim()+"'"},
gfs:function(){return this},
$isc_:1,
gfs:function(){return this}},
fe:{"^":"o;"},
kd:{"^":"fe;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bu(z)+"'"}},
d0:{"^":"fe;a,b,c,d",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d0))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga0:function(a){var z,y
z=this.c
if(z==null)y=H.bE(this.a)
else y=typeof z!=="object"?J.bV(z):H.bE(z)
return(y^H.bE(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bd(z)+"'")},
p:{
d1:function(a){return a.a},
e9:function(a){return a.c},
cm:function(a){var z,y,x,w,v
z=new H.d0("self","target","receiver","name")
y=J.cw(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kB:{"^":"a4;a",
i:function(a){return this.a},
p:{
aA:function(a,b){return new H.kB("TypeError: "+H.j(P.cr(a))+": type '"+H.hn(a)+"' is not a subtype of type '"+b+"'")}}},
hW:{"^":"a4;a",
i:function(a){return this.a},
p:{
hX:function(a,b){return new H.hW("CastError: "+H.j(P.cr(a))+": type '"+H.hn(a)+"' is not a subtype of type '"+b+"'")}}},
jW:{"^":"a4;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
p:{
jX:function(a){return new H.jW(a)}}},
b1:{"^":"eI;a,0b,0c,0d,0e,0f,r,$ti",
gn:function(a){return this.a},
gkd:function(a){return this.a===0},
gaE:function(){return new H.iY(this,[H.q(this,0)])},
bK:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dM(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dM(y,a)}else return this.ka(a)},
ka:function(a){var z=this.d
if(z==null)return!1
return this.d4(this.co(z,this.d3(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bD(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bD(w,b)
x=y==null?null:y.b
return x}else return this.kb(b)},
kb:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.co(z,this.d3(a))
x=this.d4(y,a)
if(x<0)return
return y[x].b},
q:function(a,b,c){var z,y
H.x(b,H.q(this,0))
H.x(c,H.q(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cv()
this.b=z}this.dD(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cv()
this.c=y}this.dD(y,b,c)}else this.kc(b,c)},
kc:function(a,b){var z,y,x,w
H.x(a,H.q(this,0))
H.x(b,H.q(this,1))
z=this.d
if(z==null){z=this.cv()
this.d=z}y=this.d3(a)
x=this.co(z,y)
if(x==null)this.cD(z,y,[this.ci(a,b)])
else{w=this.d4(x,a)
if(w>=0)x[w].b=b
else x.push(this.ci(a,b))}},
S:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aD(this))
z=z.c}},
dD:function(a,b,c){var z
H.x(b,H.q(this,0))
H.x(c,H.q(this,1))
z=this.bD(a,b)
if(z==null)this.cD(a,b,this.ci(b,c))
else z.b=c},
hg:function(){this.r=this.r+1&67108863},
ci:function(a,b){var z,y
z=new H.iX(H.x(a,H.q(this,0)),H.x(b,H.q(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.hg()
return z},
d3:function(a){return J.bV(a)&0x3ffffff},
d4:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
i:function(a){return P.df(this)},
bD:function(a,b){return a[b]},
co:function(a,b){return a[b]},
cD:function(a,b,c){a[b]=c},
hv:function(a,b){delete a[b]},
dM:function(a,b){return this.bD(a,b)!=null},
cv:function(){var z=Object.create(null)
this.cD(z,"<non-identifier-key>",z)
this.hv(z,"<non-identifier-key>")
return z},
$iseD:1},
iX:{"^":"a;a,b,0c,0d"},
iY:{"^":"er;a,$ti",
gn:function(a){return this.a.a},
gT:function(a){var z,y
z=this.a
y=new H.iZ(z,z.r,this.$ti)
y.c=z.e
return y}},
iZ:{"^":"a;a,b,0c,0d,$ti",
sdE:function(a){this.d=H.x(a,H.q(this,0))},
gJ:function(){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aD(z))
else{z=this.c
if(z==null){this.sdE(null)
return!1}else{this.sdE(z.a)
this.c=this.c.c
return!0}}},
$isb0:1},
na:{"^":"o:22;a",
$1:function(a){return this.a(a)}},
nb:{"^":"o:43;a",
$2:function(a,b){return this.a(a,b)}},
nc:{"^":"o:55;a",
$1:function(a){return this.a(H.C(a))}},
iR:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseU:1,
$isjO:1,
p:{
iS:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.e(P.Y("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
n2:function(a){return J.ey(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nn:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bl:function(a){return a},
jm:function(a){return new Int8Array(a)},
aX:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bp(b,a))},
mE:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.e(H.n0(a,b,c))
return b},
dl:{"^":"F;",$isdl:1,$iskC:1,"%":";ArrayBufferView;dk|h0|h1|jn|h2|h3|bb"},
dk:{"^":"dl;",
gn:function(a){return a.length},
$isay:1,
$asay:I.dV},
jn:{"^":"h1;",
j:function(a,b){H.aX(b,a,a.length)
return a[b]},
q:function(a,b,c){H.n1(c)
H.aX(b,a,a.length)
a[b]=c},
$asct:function(){return[P.y]},
$asT:function(){return[P.y]},
$isn:1,
$asn:function(){return[P.y]},
$isb:1,
$asb:function(){return[P.y]},
"%":"Float32Array"},
bb:{"^":"h3;",
q:function(a,b,c){H.a1(c)
H.aX(b,a,a.length)
a[b]=c},
$asct:function(){return[P.m]},
$asT:function(){return[P.m]},
$isn:1,
$asn:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}},
nI:{"^":"bb;",
j:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nJ:{"^":"bb;",
j:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nK:{"^":"bb;",
j:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nL:{"^":"bb;",
j:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nM:{"^":"bb;",
gn:function(a){return a.length},
j:function(a,b){H.aX(b,a,a.length)
return a[b]},
$isnU:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
eQ:{"^":"bb;",
gn:function(a){return a.length},
j:function(a,b){H.aX(b,a,a.length)
return a[b]},
$iseQ:1,
$isN:1,
"%":";Uint8Array"},
h0:{"^":"dk+T;"},
h1:{"^":"h0+ct;"},
h2:{"^":"dk+T;"},
h3:{"^":"h2+ct;"}}],["","",,P,{"^":"",
lm:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mR()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bo(new P.lo(z),1)).observe(y,{childList:true})
return new P.ln(z,y,x)}else if(self.setImmediate!=null)return P.mS()
return P.mT()},
nY:[function(a){self.scheduleImmediate(H.bo(new P.lp(H.l(a,{func:1,ret:-1})),0))},"$1","mR",4,0,9],
nZ:[function(a){self.setImmediate(H.bo(new P.lq(H.l(a,{func:1,ret:-1})),0))},"$1","mS",4,0,9],
o_:[function(a){P.dt(C.y,H.l(a,{func:1,ret:-1}))},"$1","mT",4,0,9],
dt:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.e.ac(a.a,1000)
return P.m7(z<0?0:z,b)},
fm:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bg]})
z=C.e.ac(a.a,1000)
return P.m8(z<0?0:z,b)},
mN:function(a,b){if(H.cg(a,{func:1,args:[P.a,P.aR]}))return H.l(a,{func:1,ret:null,args:[P.a,P.aR]})
if(H.cg(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.cZ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mM:function(){var z,y
for(;z=$.bm,z!=null;){$.bO=null
y=z.b
$.bm=y
if(y==null)$.bN=null
z.a.$0()}},
o5:[function(){$.dP=!0
try{P.mM()}finally{$.bO=null
$.dP=!1
if($.bm!=null)$.$get$dJ().$1(P.hr())}},"$0","hr",0,0,3],
hm:function(a){var z=new P.fS(H.l(a,{func:1,ret:-1}))
if($.bm==null){$.bN=z
$.bm=z
if(!$.dP)$.$get$dJ().$1(P.hr())}else{$.bN.b=z
$.bN=z}},
mQ:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bm
if(z==null){P.hm(a)
$.bO=$.bN
return}y=new P.fS(a)
x=$.bO
if(x==null){y.b=z
$.bO=y
$.bm=y}else{y.b=x.b
x.b=y
$.bO=y
if(y.b==null)$.bN=y}},
np:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.S
if(C.l===y){P.cP(null,null,C.l,a)
return}y.toString
P.cP(null,null,y,H.l(y.cJ(a),z))},
fl:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.S
if(y===C.l){y.toString
return P.dt(a,b)}return P.dt(a,H.l(y.cJ(b),z))},
kx:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bg]}
H.l(b,z)
y=$.S
if(y===C.l){y.toString
return P.fm(a,b)}x=y.el(b,P.bg)
$.S.toString
return P.fm(a,H.l(x,z))},
cO:function(a,b,c,d,e){var z={}
z.a=d
P.mQ(new P.mO(z,e))},
hi:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.S
if(y===c)return d.$0()
$.S=c
z=y
try{y=d.$0()
return y}finally{$.S=z}},
hj:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.S
if(y===c)return d.$1(e)
$.S=c
z=y
try{y=d.$1(e)
return y}finally{$.S=z}},
mP:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.S
if(y===c)return d.$2(e,f)
$.S=c
z=y
try{y=d.$2(e,f)
return y}finally{$.S=z}},
cP:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.cJ(d):c.jB(d,-1)
P.hm(d)},
lo:{"^":"o:28;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ln:{"^":"o:35;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lp:{"^":"o:2;a",
$0:function(){this.a.$0()}},
lq:{"^":"o:2;a",
$0:function(){this.a.$0()}},
h6:{"^":"a;a,0b,c",
hd:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bo(new P.ma(this,b),0),a)
else throw H.e(P.U("`setTimeout()` not found."))},
he:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bo(new P.m9(this,a,Date.now(),b),0),a)
else throw H.e(P.U("Periodic timer."))},
$isbg:1,
p:{
m7:function(a,b){var z=new P.h6(!0,0)
z.hd(a,b)
return z},
m8:function(a,b){var z=new P.h6(!1,0)
z.he(a,b)
return z}}},
ma:{"^":"o:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
m9:{"^":"o:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.fV(w,x)}z.c=y
this.d.$1(z)}},
bk:{"^":"a;0a,b,c,d,e,$ti",
kk:function(a){if(this.c!==6)return!0
return this.b.b.dj(H.l(this.d,{func:1,ret:P.L,args:[P.a]}),a.a,P.L,P.a)},
k9:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.q(this,1)}
w=this.b.b
if(H.cg(z,{func:1,args:[P.a,P.aR]}))return H.dW(w.kL(z,a.a,a.b,null,y,P.aR),x)
else return H.dW(w.dj(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aW:{"^":"a;ea:a<,b,0iE:c<,$ti",
fj:function(a,b,c){var z,y,x,w
z=H.q(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.S
if(y!==C.l){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mN(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aW(0,$.S,[c])
w=b==null?1:3
this.dG(new P.bk(x,w,a,b,[z,c]))
return x},
kP:function(a,b){return this.fj(a,null,b)},
dG:function(a){var z,y
z=this.a
if(z<=1){a.a=H.d(this.c,"$isbk")
this.c=a}else{if(z===2){y=H.d(this.c,"$isaW")
z=y.a
if(z<4){y.dG(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cP(null,null,z,H.l(new P.lz(this,a),{func:1,ret:-1}))}},
e4:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.d(this.c,"$isbk")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.d(this.c,"$isaW")
y=u.a
if(y<4){u.e4(a)
return}this.a=y
this.c=u.c}z.a=this.bF(a)
y=this.b
y.toString
P.cP(null,null,y,H.l(new P.lE(z,this),{func:1,ret:-1}))}},
cB:function(){var z=H.d(this.c,"$isbk")
this.c=null
return this.bF(z)},
bF:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dI:function(a){var z,y,x
z=H.q(this,0)
H.dW(a,{futureOr:1,type:z})
y=this.$ti
if(H.bQ(a,"$isbA",y,"$asbA"))if(H.bQ(a,"$isaW",y,null))P.fW(a,this)
else P.lA(a,this)
else{x=this.cB()
H.x(a,z)
this.a=4
this.c=a
P.bK(this,x)}},
dJ:function(a,b){var z
H.d(b,"$isaR")
z=this.cB()
this.a=8
this.c=new P.an(a,b)
P.bK(this,z)},
$isbA:1,
p:{
lA:function(a,b){var z,y,x
b.a=1
try{a.fj(new P.lB(b),new P.lC(b),null)}catch(x){z=H.ac(x)
y=H.bs(x)
P.np(new P.lD(b,z,y))}},
fW:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.d(a.c,"$isaW")
if(z>=4){y=b.cB()
b.a=a.a
b.c=a.c
P.bK(b,y)}else{y=H.d(b.c,"$isbk")
b.a=2
b.c=a
a.e4(y)}},
bK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.d(y.c,"$isan")
y=y.b
u=v.a
t=v.b
y.toString
P.cO(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bK(z.a,b)}y=z.a
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
if(p){H.d(r,"$isan")
y=y.b
u=r.a
t=r.b
y.toString
P.cO(null,null,y,u,t)
return}o=$.S
if(o==null?q!=null:o!==q)$.S=q
else o=null
y=b.c
if(y===8)new P.lH(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lG(x,b,r).$0()}else if((y&2)!==0)new P.lF(z,x,b).$0()
if(o!=null)$.S=o
y=x.b
if(!!J.M(y).$isbA){if(y.a>=4){n=H.d(t.c,"$isbk")
t.c=null
b=t.bF(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fW(y,t)
return}}m=b.b
n=H.d(m.c,"$isbk")
m.c=null
b=m.bF(n)
y=x.a
u=x.b
if(!y){H.x(u,H.q(m,0))
m.a=4
m.c=u}else{H.d(u,"$isan")
m.a=8
m.c=u}z.a=m
y=m}}}},
lz:{"^":"o:2;a,b",
$0:function(){P.bK(this.a,this.b)}},
lE:{"^":"o:2;a,b",
$0:function(){P.bK(this.b,this.a.a)}},
lB:{"^":"o:28;a",
$1:function(a){var z=this.a
z.a=0
z.dI(a)}},
lC:{"^":"o:54;a",
$2:function(a,b){this.a.dJ(a,H.d(b,"$isaR"))},
$1:function(a){return this.$2(a,null)}},
lD:{"^":"o:2;a,b,c",
$0:function(){this.a.dJ(this.b,this.c)}},
lH:{"^":"o:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.fg(H.l(w.d,{func:1}),null)}catch(v){y=H.ac(v)
x=H.bs(v)
if(this.d){w=H.d(this.a.a.c,"$isan").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.d(this.a.a.c,"$isan")
else u.b=new P.an(y,x)
u.a=!0
return}if(!!J.M(z).$isbA){if(z instanceof P.aW&&z.gea()>=4){if(z.gea()===8){w=this.b
w.b=H.d(z.giE(),"$isan")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.kP(new P.lI(t),null)
w.a=!1}}},
lI:{"^":"o:49;a",
$1:function(a){return this.a}},
lG:{"^":"o:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.q(x,0)
v=H.x(this.c,w)
u=H.q(x,1)
this.a.b=x.b.b.dj(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ac(t)
y=H.bs(t)
x=this.a
x.b=new P.an(z,y)
x.a=!0}}},
lF:{"^":"o:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.d(this.a.a.c,"$isan")
w=this.c
if(w.kk(z)&&w.e!=null){v=this.b
v.b=w.k9(z)
v.a=!1}}catch(u){y=H.ac(u)
x=H.bs(u)
w=H.d(this.a.a.c,"$isan")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.an(y,x)
s.a=!0}}},
fS:{"^":"a;a,0b"},
ke:{"^":"a;$ti",
gn:function(a){var z,y,x,w
z={}
y=new P.aW(0,$.S,[P.m])
z.a=0
x=H.q(this,0)
w=H.l(new P.kg(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.kh(z,y),{func:1,ret:-1})
W.Z(this.a,this.b,w,!1,x)
return y}},
kg:{"^":"o;a,b",
$1:function(a){H.x(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.q(this.b,0)]}}},
kh:{"^":"o:2;a,b",
$0:function(){this.b.dI(this.a.a)}},
dq:{"^":"a;$ti"},
kf:{"^":"a;"},
bg:{"^":"a;"},
an:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isa4:1},
mB:{"^":"a;",$isnX:1},
mO:{"^":"o:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eT()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
lT:{"^":"mB;",
kM:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.l===$.S){a.$0()
return}P.hi(null,null,this,a,-1)}catch(x){z=H.ac(x)
y=H.bs(x)
P.cO(null,null,this,z,H.d(y,"$isaR"))}},
kN:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.l===$.S){a.$1(b)
return}P.hj(null,null,this,a,b,-1,c)}catch(x){z=H.ac(x)
y=H.bs(x)
P.cO(null,null,this,z,H.d(y,"$isaR"))}},
jB:function(a,b){return new P.lV(this,H.l(a,{func:1,ret:b}),b)},
cJ:function(a){return new P.lU(this,H.l(a,{func:1,ret:-1}))},
el:function(a,b){return new P.lW(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
fg:function(a,b){H.l(a,{func:1,ret:b})
if($.S===C.l)return a.$0()
return P.hi(null,null,this,a,b)},
dj:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.S===C.l)return a.$1(b)
return P.hj(null,null,this,a,b,c,d)},
kL:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.S===C.l)return a.$2(b,c)
return P.mP(null,null,this,a,b,c,d,e,f)}},
lV:{"^":"o;a,b,c",
$0:function(){return this.a.fg(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lU:{"^":"o:3;a,b",
$0:function(){return this.a.kM(this.b)}},
lW:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.kN(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
j_:function(a,b,c,d,e){return new H.b1(0,0,[d,e])},
j0:function(a,b,c){H.ch(a)
return H.k(H.n3(a,new H.b1(0,0,[b,c])),"$iseD",[b,c],"$aseD")},
eE:function(a,b){return new H.b1(0,0,[a,b])},
c7:function(a,b,c,d){return new P.lN(0,0,[d])},
iN:function(a,b,c){var z,y
if(P.dQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bP()
C.a.h(y,a)
try{P.mL(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.fd(b,H.hw(z,"$isn"),", ")+c
return y.charCodeAt(0)==0?y:y},
da:function(a,b,c){var z,y,x
if(P.dQ(a))return b+"..."+c
z=new P.ai(b)
y=$.$get$bP()
C.a.h(y,a)
try{x=z
x.a=P.fd(x.gaV(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaV()+c
y=z.gaV()
return y.charCodeAt(0)==0?y:y},
dQ:function(a){var z,y
for(z=0;y=$.$get$bP(),z<y.length;++z)if(a===y[z])return!0
return!1},
mL:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gT(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.C())return
w=H.j(z.gJ())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.C()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gJ();++x
if(!z.C()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gJ();++x
for(;z.C();t=s,s=r){r=z.gJ();++x
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
j1:function(a,b,c){var z=P.j_(null,null,null,b,c)
a.S(0,new P.j2(z,b,c))
return z},
eF:function(a,b){var z,y,x
z=P.c7(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x)z.h(0,H.x(a[x],b))
return z},
df:function(a){var z,y,x
z={}
if(P.dQ(a))return"{...}"
y=new P.ai("")
try{C.a.h($.$get$bP(),a)
x=y
x.a=x.gaV()+"{"
z.a=!0
a.S(0,new P.j7(z,y))
z=y
z.a=z.gaV()+"}"}finally{z=$.$get$bP()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaV()
return z.charCodeAt(0)==0?z:z},
lN:{"^":"lJ;a,0b,0c,0d,0e,0f,r,$ti",
gT:function(a){var z=new P.h_(this,this.r,this.$ti)
z.c=this.e
return z},
gn:function(a){return this.a},
a_:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.d(z[b],"$iscM")!=null}else{y=this.hr(b)
return y}},
hr:function(a){var z=this.d
if(z==null)return!1
return this.cm(this.dS(z,a),a)>=0},
h:function(a,b){var z,y
H.x(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dL()
this.b=z}return this.dF(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dL()
this.c=y}return this.dF(y,b)}else return this.hh(b)},
hh:function(a){var z,y,x
H.x(a,H.q(this,0))
z=this.d
if(z==null){z=P.dL()
this.d=z}y=this.dK(a)
x=z[y]
if(x==null)z[y]=[this.cw(a)]
else{if(this.cm(x,a)>=0)return!1
x.push(this.cw(a))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.iu(this.c,b)
else return this.ir(b)},
ir:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.dS(z,a)
x=this.cm(y,a)
if(x<0)return!1
this.ec(y.splice(x,1)[0])
return!0},
dF:function(a,b){H.x(b,H.q(this,0))
if(H.d(a[b],"$iscM")!=null)return!1
a[b]=this.cw(b)
return!0},
iu:function(a,b){var z
if(a==null)return!1
z=H.d(a[b],"$iscM")
if(z==null)return!1
this.ec(z)
delete a[b]
return!0},
dZ:function(){this.r=this.r+1&67108863},
cw:function(a){var z,y
z=new P.cM(H.x(a,H.q(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dZ()
return z},
ec:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dZ()},
dK:function(a){return J.bV(a)&0x3ffffff},
dS:function(a,b){return a[this.dK(b)]},
cm:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
p:{
dL:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cM:{"^":"a;a,0b,0c"},
h_:{"^":"a;a,b,0c,0d,$ti",
sdH:function(a){this.d=H.x(a,H.q(this,0))},
gJ:function(){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aD(z))
else{z=this.c
if(z==null){this.sdH(null)
return!1}else{this.sdH(H.x(z.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
$isb0:1,
p:{
lO:function(a,b,c){var z=new P.h_(a,b,[c])
z.c=a.e
return z}}},
lJ:{"^":"jY;"},
j2:{"^":"o:6;a,b,c",
$2:function(a,b){this.a.q(0,H.x(a,this.b),H.x(b,this.c))}},
cx:{"^":"lP;",$isn:1,$isb:1},
T:{"^":"a;$ti",
gT:function(a){return new H.de(a,this.gn(a),0,[H.bS(this,a,"T",0)])},
ag:function(a,b){return this.j(a,b)},
S:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.bS(this,a,"T",0)]})
z=this.gn(a)
for(y=0;y<z;++y){b.$1(this.j(a,y))
if(z!==this.gn(a))throw H.e(P.aD(a))}},
kS:function(a,b){var z,y
z=H.c([],[H.bS(this,a,"T",0)])
C.a.sn(z,this.gn(a))
for(y=0;y<this.gn(a);++y)C.a.q(z,y,this.j(a,y))
return z},
kR:function(a){return this.kS(a,!0)},
jW:function(a,b,c,d){var z
H.x(d,H.bS(this,a,"T",0))
P.b3(b,c,this.gn(a),null,null,null)
for(z=b;z<c;++z)this.q(a,z,d)},
i:function(a){return P.da(a,"[","]")}},
eI:{"^":"cz;"},
j7:{"^":"o:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
cz:{"^":"a;$ti",
S:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.a2(this,"cz",0),H.a2(this,"cz",1)]})
for(z=J.b7(this.gaE());z.C();){y=z.gJ()
b.$2(y,this.j(0,y))}},
gn:function(a){return J.au(this.gaE())},
i:function(a){return P.df(this)},
$isJ:1},
md:{"^":"a;$ti",
q:function(a,b,c){H.x(b,H.q(this,0))
H.x(c,H.q(this,1))
throw H.e(P.U("Cannot modify unmodifiable map"))}},
j8:{"^":"a;$ti",
j:function(a,b){return this.a.j(0,b)},
q:function(a,b,c){this.a.q(0,H.x(b,H.q(this,0)),H.x(c,H.q(this,1)))},
S:function(a,b){this.a.S(0,H.l(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gn:function(a){var z=this.a
return z.gn(z)},
i:function(a){return J.av(this.a)},
$isJ:1},
fA:{"^":"me;a,$ti"},
k_:{"^":"a;$ti",
af:function(a,b){var z
for(z=J.b7(H.k(b,"$isn",this.$ti,"$asn"));z.C();)this.h(0,z.gJ())},
i:function(a){return P.da(this,"{","}")},
ag:function(a,b){var z,y,x
if(b<0)H.r(P.a0(b,0,null,"index",null))
for(z=P.lO(this,this.r,H.q(this,0)),y=0;z.C();){x=z.d
if(b===y)return x;++y}throw H.e(P.b8(b,this,"index",null,y))},
$isn:1,
$isf6:1},
jY:{"^":"k_;"},
lP:{"^":"a+T;"},
me:{"^":"j8+md;$ti"}}],["","",,P,{"^":"",hT:{"^":"bX;a",
kn:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.b3(b,c,a.length,null,null,null)
z=$.$get$fU()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.c.G(a,y)
if(r===37){q=s+2
if(q<=c){p=H.cS(C.c.G(a,s))
o=H.cS(C.c.G(a,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.c.a3("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ai("")
l=w.a+=C.c.v(a,x,y)
w.a=l+H.be(r)
x=s
continue}}throw H.e(P.Y("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.c.v(a,x,c)
k=l.length
if(v>=0)P.e6(a,u,c,v,t,k)
else{j=C.e.bA(k-1,4)+1
if(j===1)throw H.e(P.Y("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.c.b8(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.e6(a,u,c,v,t,i)
else{j=C.e.bA(i,4)
if(j===1)throw H.e(P.Y("Invalid base64 encoding length ",a,c))
if(j>1)a=C.c.b8(a,c,c,j===2?"==":"=")}return a},
$asbX:function(){return[[P.b,P.m],P.i]},
p:{
e6:function(a,b,c,d,e,f){if(C.e.bA(f,4)!==0)throw H.e(P.Y("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.Y("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.Y("Invalid base64 padding, more than two '=' characters",a,b))}}},hU:{"^":"aZ;a",
$asaZ:function(){return[[P.b,P.m],P.i]}},bX:{"^":"a;$ti"},aZ:{"^":"kf;$ti"},ir:{"^":"bX;",
$asbX:function(){return[P.i,[P.b,P.m]]}},iK:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},iJ:{"^":"aZ;a",
hs:function(a,b,c){var z,y,x,w,v,u
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
if(w>b)v.a+=C.c.v(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hO(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asaZ:function(){return[P.i,P.i]}},l1:{"^":"ir;a",
gjV:function(){return C.S}},l8:{"^":"aZ;",
bm:function(a,b,c){var z,y,x,w
z=a.length
P.b3(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mz(0,0,x)
if(w.hD(a,b,z)!==z)w.ee(J.hH(a,z-1),0)
return new Uint8Array(x.subarray(0,H.mE(0,w.b,x.length)))},
cQ:function(a){return this.bm(a,0,null)},
$asaZ:function(){return[P.i,[P.b,P.m]]}},mz:{"^":"a;a,b,c",
ee:function(a,b){var z,y,x,w,v
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
hD:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.a3(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.G(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.ee(w,C.c.G(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},l2:{"^":"aZ;a",
bm:function(a,b,c){var z,y,x,w,v
H.k(a,"$isb",[P.m],"$asb")
z=P.l3(!1,a,b,c)
if(z!=null)return z
y=J.au(a)
P.b3(b,c,y,null,null,null)
x=new P.ai("")
w=new P.mw(!1,x,!0,0,0,0)
w.bm(a,b,y)
if(w.e>0){H.r(P.Y("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.be(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
cQ:function(a){return this.bm(a,0,null)},
$asaZ:function(){return[[P.b,P.m],P.i]},
p:{
l3:function(a,b,c,d){H.k(b,"$isb",[P.m],"$asb")
if(b instanceof Uint8Array)return P.l4(!1,b,c,d)
return},
l4:function(a,b,c,d){var z,y,x
z=$.$get$fF()
if(z==null)return
y=0===c
if(y&&!0)return P.dG(z,b)
x=b.length
d=P.b3(c,d,x,null,null,null)
if(y&&d===x)return P.dG(z,b)
return P.dG(z,b.subarray(c,d))},
dG:function(a,b){if(P.l6(b))return
return P.l7(a,b)},
l7:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ac(y)}return},
l6:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
l5:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ac(y)}return}}},mw:{"^":"a;a,b,c,d,e,f",
bm:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(a,"$isb",[P.m],"$asb")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.my(c)
v=new P.mx(this,b,c,a)
$label0$0:for(u=J.br(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.c6()
if((r&192)!==128){q=P.Y("Bad UTF-8 encoding 0x"+C.e.bw(r,16),a,s)
throw H.e(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.G,q)
if(z<=C.G[q]){q=P.Y("Overlong encoding of 0x"+C.e.bw(z,16),a,s-x-1)
throw H.e(q)}if(z>1114111){q=P.Y("Character outside valid Unicode range: 0x"+C.e.bw(z,16),a,s-x-1)
throw H.e(q)}if(!this.c||z!==65279)t.a+=H.be(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.ca()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.U()
if(r<0){m=P.Y("Negative UTF-8 code unit: -0x"+C.e.bw(-r,16),a,n-1)
throw H.e(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.Y("Bad UTF-8 encoding 0x"+C.e.bw(r,16),a,n-1)
throw H.e(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},my:{"^":"o:48;a",
$2:function(a,b){var z,y,x,w
H.k(a,"$isb",[P.m],"$asb")
z=this.a
for(y=J.br(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.c6()
if((w&127)!==w)return x-b}return z-b}},mx:{"^":"o:44;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cb(this.d,a,b)}}}],["","",,P,{"^":"",
bT:function(a,b,c){var z
H.l(b,{func:1,ret:P.m,args:[P.i]})
z=H.jG(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.e(P.Y(a,null,null))},
it:function(a){if(a instanceof H.o)return a.i(0)
return"Instance of '"+H.bd(a)+"'"},
j3:function(a,b,c,d){var z,y
H.x(b,d)
z=J.iP(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.q(z,y,b)
return H.k(z,"$isb",[d],"$asb")},
eG:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gT(a);x.C();)C.a.h(y,H.x(x.gJ(),c))
if(b)return y
return H.k(J.cw(y),"$isb",z,"$asb")},
cb:function(a,b,c){var z,y
z=P.m
H.k(a,"$isn",[z],"$asn")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$isb9",[z],"$asb9")
y=a.length
c=P.b3(b,c,y,null,null,null)
return H.f0(b>0||c<y?C.a.fO(a,b,c):a)}if(!!J.M(a).$iseQ)return H.jI(a,b,P.b3(b,c,a.length,null,null,null))
return P.ki(a,b,c)},
ki:function(a,b,c){var z,y,x,w
H.k(a,"$isn",[P.m],"$asn")
if(b<0)throw H.e(P.a0(b,0,J.au(a),null,null))
z=c==null
if(!z&&c<b)throw H.e(P.a0(c,b,J.au(a),null,null))
y=J.b7(a)
for(x=0;x<b;++x)if(!y.C())throw H.e(P.a0(b,0,x,null,null))
w=[]
if(z)for(;y.C();)w.push(y.gJ())
else for(x=b;x<c;++x){if(!y.C())throw H.e(P.a0(c,b,x,null,null))
w.push(y.gJ())}return H.f0(w)},
jP:function(a,b,c){return new H.iR(a,H.iS(a,!1,!0,!1))},
fC:function(){var z=H.jy()
if(z!=null)return P.kU(z,0,null)
throw H.e(P.U("'Uri.base' is not supported"))},
cr:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.av(a)
if(typeof a==="string")return JSON.stringify(a)
return P.it(a)},
u:function(a){return new P.fV(a)},
j4:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.m]})
z=H.c([],[d])
C.a.sn(z,a)
for(y=0;y<a;++y)C.a.q(z,y,b.$1(y))
return z},
e_:function(a){H.nn(a)},
kU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.c.G(a,b+4)^58)*3|C.c.G(a,b)^100|C.c.G(a,b+1)^97|C.c.G(a,b+2)^116|C.c.G(a,b+3)^97)>>>0
if(y===0)return P.fB(b>0||c<c?C.c.v(a,b,c):a,5,null).gfo()
else if(y===32)return P.fB(C.c.v(a,z,c),0,null).gfo()}x=new Array(8)
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
if(P.hk(a,b,c,0,w)>=14)C.a.q(w,7,c)
v=w[1]
if(typeof v!=="number")return v.kV()
if(v>=b)if(P.hk(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.K()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.U()
if(typeof r!=="number")return H.z(r)
if(q<r)r=q
if(typeof s!=="number")return s.U()
if(s<u)s=r
else if(s<=v)s=v+1
if(typeof t!=="number")return t.U()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.U()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.c.ao(a,"..",s)))n=r>s+2&&C.c.ao(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.c.ao(a,"file",b)){if(u<=b){if(!C.c.ao(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.c.v(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.c.b8(a,s,r,"/");++r;++q;++c}else{a=C.c.v(a,b,s)+"/"+C.c.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.c.ao(a,"http",b)){if(x&&t+3===s&&C.c.ao(a,"80",t+1))if(b===0&&!0){a=C.c.b8(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.c.v(a,b,t)+C.c.v(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.c.ao(a,"https",b)){if(x&&t+4===s&&C.c.ao(a,"443",t+1))if(b===0&&!0){a=C.c.b8(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.c.v(a,b,t)+C.c.v(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.c.v(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.m0(a,v,u,t,s,r,q,o)}return P.mf(a,b,c,v,u,t,s,r,q,o)},
fE:function(a,b){var z=P.i
return C.a.k0(H.c(a.split("&"),[z]),P.eE(z,z),new P.kX(b),[P.J,P.i,P.i])},
kS:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kT(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.c.a3(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.bT(C.c.v(a,v,w),null,null)
if(typeof s!=="number")return s.ca()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.bT(C.c.v(a,v,c),null,null)
if(typeof s!=="number")return s.ca()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kV(a)
y=new P.kW(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.c.a3(a,w)
if(s===58){if(w===b){++w
if(C.c.a3(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaF(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kS(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.e.b_(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
mF:function(){var z,y,x,w,v
z=P.j4(22,new P.mH(),!0,P.N)
y=new P.mG(z)
x=new P.mI()
w=new P.mJ()
v=H.d(y.$2(0,225),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(14,225),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(15,225),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(1,225),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(2,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(3,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(4,229),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(5,229),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(6,231),"$isN")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(7,231),"$isN")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.d(y.$2(8,8),"$isN"),"]",5)
v=H.d(y.$2(9,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(16,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(17,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(10,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(18,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(19,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(11,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(12,236),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.d(y.$2(13,237),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.d(y.$2(20,245),"$isN"),"az",21)
v=H.d(y.$2(21,245),"$isN")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hk:function(a,b,c,d,e){var z,y,x,w,v
H.k(e,"$isb",[P.m],"$asb")
z=$.$get$hl()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.c.G(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.q(e,v>>>5,y)}return d},
L:{"^":"a;"},
"+bool":0,
ao:{"^":"a;a,b",
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.ao))return!1
return this.a===b.a&&!0},
ga0:function(a){var z=this.a
return(z^C.e.b_(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.ib(H.jF(this))
y=P.bY(H.jD(this))
x=P.bY(H.jz(this))
w=P.bY(H.jA(this))
v=P.bY(H.jC(this))
u=P.bY(H.jE(this))
t=P.ic(H.jB(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
p:{
ib:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
ic:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bY:function(a){if(a>=10)return""+a
return"0"+a}}},
y:{"^":"am;"},
"+double":0,
bx:{"^":"a;a",
U:function(a,b){return C.e.U(this.a,H.d(b,"$isbx").a)},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bx))return!1
return this.a===b.a},
ga0:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.im()
y=this.a
if(y<0)return"-"+new P.bx(0-y).i(0)
x=z.$1(C.e.ac(y,6e7)%60)
w=z.$1(C.e.ac(y,1e6)%60)
v=new P.il().$1(y%1e6)
return""+C.e.ac(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
p:{
eq:function(a,b,c,d,e,f){return new P.bx(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
il:{"^":"o:16;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
im:{"^":"o:16;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a4:{"^":"a;"},
eT:{"^":"a4;",
i:function(a){return"Throw of null."}},
aM:{"^":"a4;a,b,c,d",
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
u=P.cr(this.b)
return w+v+": "+H.j(u)},
p:{
bW:function(a){return new P.aM(!1,null,null,a)},
cZ:function(a,b,c){return new P.aM(!0,a,b,c)}}},
cC:{"^":"aM;e,f,a,b,c,d",
gcl:function(){return"RangeError"},
gck:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
p:{
c9:function(a,b,c){return new P.cC(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.cC(b,c,!0,a,d,"Invalid value")},
b3:function(a,b,c,d,e,f){if(typeof a!=="number")return H.z(a)
if(0>a||a>c)throw H.e(P.a0(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.a0(b,a,c,"end",f))
return b}return c}}},
iM:{"^":"aM;e,n:f>,a,b,c,d",
gcl:function(){return"RangeError"},
gck:function(){if(J.hD(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
p:{
b8:function(a,b,c,d,e){var z=H.a1(e!=null?e:J.au(b))
return new P.iM(b,z,!0,a,c,"Index out of range")}}},
kQ:{"^":"a4;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
U:function(a){return new P.kQ(a)}}},
kN:{"^":"a4;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cH:function(a){return new P.kN(a)}}},
dp:{"^":"a4;a",
i:function(a){return"Bad state: "+this.a},
p:{
fc:function(a){return new P.dp(a)}}},
i3:{"^":"a4;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.cr(z))+"."},
p:{
aD:function(a){return new P.i3(a)}}},
jt:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa4:1},
fb:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa4:1},
i9:{"^":"a4;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fV:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
iA:{"^":"a;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.j(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.c.v(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.c.G(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.c.a3(w,s)
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
m=""}l=C.c.v(w,o,p)
return y+n+l+m+"\n"+C.c.u(" ",x-o+n.length)+"^\n"},
p:{
Y:function(a,b,c){return new P.iA(a,b,c)}}},
c_:{"^":"a;"},
m:{"^":"am;"},
"+int":0,
n:{"^":"a;$ti",
dm:["fQ",function(a,b){var z=H.a2(this,"n",0)
return new H.dI(this,H.l(b,{func:1,ret:P.L,args:[z]}),[z])}],
gn:function(a){var z,y
z=this.gT(this)
for(y=0;z.C();)++y
return y},
gaS:function(a){var z,y
z=this.gT(this)
if(!z.C())throw H.e(H.cv())
y=z.gJ()
if(z.C())throw H.e(H.iO())
return y},
ag:function(a,b){var z,y,x
if(b<0)H.r(P.a0(b,0,null,"index",null))
for(z=this.gT(this),y=0;z.C();){x=z.gJ()
if(b===y)return x;++y}throw H.e(P.b8(b,this,"index",null,y))},
i:function(a){return P.iN(this,"(",")")}},
b0:{"^":"a;$ti"},
b:{"^":"a;$ti",$isn:1},
"+List":0,
J:{"^":"a;$ti"},
D:{"^":"a;",
ga0:function(a){return P.a.prototype.ga0.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
am:{"^":"a;"},
"+num":0,
a:{"^":";",
A:function(a,b){return this===b},
ga0:function(a){return H.bE(this)},
i:function(a){return"Instance of '"+H.bd(this)+"'"},
toString:function(){return this.i(this)}},
aR:{"^":"a;"},
i:{"^":"a;",$iseU:1},
"+String":0,
ai:{"^":"a;aV:a<",
gn:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isnQ:1,
p:{
fd:function(a,b,c){var z=J.b7(b)
if(!z.C())return a
if(c.length===0){do a+=H.j(z.gJ())
while(z.C())}else{a+=H.j(z.gJ())
for(;z.C();)a=a+c+H.j(z.gJ())}return a}}},
kX:{"^":"o:42;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.k(a,"$isJ",[z,z],"$asJ")
H.C(b)
y=J.bR(b).f4(b,"=")
if(y===-1){if(b!=="")a.q(0,P.dN(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.c.v(b,0,y)
w=C.c.ay(b,y+1)
z=this.a
a.q(0,P.dN(x,0,x.length,z,!0),P.dN(w,0,w.length,z,!0))}return a}},
kT:{"^":"o:41;a",
$2:function(a,b){throw H.e(P.Y("Illegal IPv4 address, "+a,this.a,b))}},
kV:{"^":"o:40;a",
$2:function(a,b){throw H.e(P.Y("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kW:{"^":"o:38;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.bT(C.c.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.U()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cN:{"^":"a;cb:a<,b,c,d,fc:e>,f,r,0x,0y,0z,0Q,0ch",
siq:function(a){var z=P.i
this.Q=H.k(a,"$isJ",[z,z],"$asJ")},
gfp:function(){return this.b},
gd1:function(a){var z=this.c
if(z==null)return""
if(C.c.ab(z,"["))return C.c.v(z,1,z.length-1)
return z},
gc0:function(a){var z=this.d
if(z==null)return P.h8(this.a)
return z},
gdd:function(){var z=this.f
return z==null?"":z},
geZ:function(){var z=this.r
return z==null?"":z},
di:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.k(h,"$isJ",[P.i,null],"$asJ")
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
g=P.dM(g,0,0,h)
return new P.cN(i,j,c,f,d,g,this.r)},
ff:function(a,b){return this.di(a,null,null,null,null,null,null,b,null,null)},
gde:function(){var z,y
if(this.Q==null){z=this.f
y=P.i
this.siq(new P.fA(P.fE(z==null?"":z,C.m),[y,y]))}return this.Q},
gf_:function(){return this.c!=null},
gf2:function(){return this.f!=null},
gf0:function(){return this.r!=null},
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
if(!!J.M(b).$isdF){if(this.a==b.gcb())if(this.c!=null===b.gf_())if(this.b==b.gfp())if(this.gd1(this)==b.gd1(b))if(this.gc0(this)==b.gc0(b))if(this.e===b.gfc(b)){z=this.f
y=z==null
if(!y===b.gf2()){if(y)z=""
if(z===b.gdd()){z=this.r
y=z==null
if(!y===b.gf0()){if(y)z=""
z=z===b.geZ()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
ga0:function(a){var z=this.z
if(z==null){z=C.c.ga0(this.i(0))
this.z=z}return z},
$isdF:1,
p:{
cf:function(a,b,c,d){var z,y,x,w,v,u
H.k(a,"$isb",[P.m],"$asb")
if(c===C.m){z=$.$get$hd().b
if(typeof b!=="string")H.r(H.ag(b))
z=z.test(b)}else z=!1
if(z)return b
H.x(b,H.a2(c,"bX",0))
y=c.gjV().cQ(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.be(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mf:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mq(a,b,d)
else{if(d===b)P.bL(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mr(a,z,e-1):""
x=P.mk(a,e,f,!1)
if(typeof f!=="number")return f.K()
w=f+1
if(typeof g!=="number")return H.z(g)
v=w<g?P.mn(P.bT(C.c.v(a,w,g),new P.mg(a,f),null),j):null}else{y=""
x=null
v=null}u=P.ml(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.U()
t=h<i?P.dM(a,h+1,i,null):null
return new P.cN(j,y,x,v,u,t,i<c?P.mj(a,i+1,c):null)},
h8:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bL:function(a,b,c){throw H.e(P.Y(c,a,b))},
mn:function(a,b){if(a!=null&&a===P.h8(b))return
return a},
mk:function(a,b,c,d){var z,y
if(b===c)return""
if(C.c.a3(a,b)===91){if(typeof c!=="number")return c.L()
z=c-1
if(C.c.a3(a,z)!==93)P.bL(a,b,"Missing end `]` to match `[` in host")
P.fD(a,b+1,z)
return C.c.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.z(c)
y=b
for(;y<c;++y)if(C.c.a3(a,y)===58){P.fD(a,b,c)
return"["+a+"]"}return P.mt(a,b,c)},
mt:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.z(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.c.a3(a,z)
if(v===37){u=P.hf(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ai("")
s=C.c.v(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.c.v(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.J,t)
t=(C.J[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ai("")
if(y<z){x.a+=C.c.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.t,t)
t=(C.t[t]&1<<(v&15))!==0}else t=!1
if(t)P.bL(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.c.a3(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ai("")
s=C.c.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h9(v)
z+=q
y=z}}}}if(x==null)return C.c.v(a,b,c)
if(y<c){s=C.c.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mq:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.hb(C.c.G(a,b)))P.bL(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.c.G(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bL(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.c.v(a,b,c)
return P.mh(y?a.toLowerCase():a)},
mh:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mr:function(a,b,c){return P.bM(a,b,c,C.a8,!1)},
ml:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bM(a,b,c,C.K,!0):C.r.ly(d,new P.mm(),P.i).l(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.c.ab(w,"/"))w="/"+w
return P.ms(w,e,f)},
ms:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.c.ab(a,"/"))return P.mu(a,!z||c)
return P.mv(a)},
dM:function(a,b,c,d){var z,y
z={}
H.k(d,"$isJ",[P.i,null],"$asJ")
if(a!=null){if(d!=null)throw H.e(P.bW("Both query and queryParameters specified"))
return P.bM(a,b,c,C.u,!0)}if(d==null)return
y=new P.ai("")
z.a=""
d.S(0,new P.mo(new P.mp(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mj:function(a,b,c){return P.bM(a,b,c,C.u,!0)},
hf:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.c.a3(a,b+1)
x=C.c.a3(a,z)
w=H.cS(y)
v=H.cS(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.b_(u,4)
if(z>=8)return H.f(C.w,z)
z=(C.w[z]&1<<(u&15))!==0}else z=!1
if(z)return H.be(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.c.v(a,b,b+3).toUpperCase()
return},
h9:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.m])
C.a.q(y,0,37)
C.a.q(y,1,C.c.G("0123456789ABCDEF",a>>>4))
C.a.q(y,2,C.c.G("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.e.iQ(a,6*w)&63|x
C.a.q(y,v,37)
C.a.q(y,v+1,C.c.G("0123456789ABCDEF",u>>>4))
C.a.q(y,v+2,C.c.G("0123456789ABCDEF",u&15))
v+=3}}return P.cb(y,0,null)},
bM:function(a,b,c,d,e){var z=P.he(a,b,c,H.k(d,"$isb",[P.m],"$asb"),e)
return z==null?C.c.v(a,b,c):z},
he:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.k(d,"$isb",[P.m],"$asb")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.U()
if(typeof c!=="number")return H.z(c)
if(!(y<c))break
c$0:{v=C.c.a3(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hf(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.t,u)
u=(C.t[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bL(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.c.a3(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h9(v)}}if(w==null)w=new P.ai("")
w.a+=C.c.v(a,x,y)
w.a+=H.j(t)
if(typeof s!=="number")return H.z(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.U()
if(x<c)w.a+=C.c.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
hc:function(a){if(C.c.ab(a,"."))return!0
return C.c.f4(a,"/.")!==-1},
mv:function(a){var z,y,x,w,v,u,t
if(!P.hc(a))return a
z=H.c([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.O(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.l(z,"/")},
mu:function(a,b){var z,y,x,w,v,u
if(!P.hc(a))return!b?P.ha(a):a
z=H.c([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaF(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaF(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.q(z,0,P.ha(z[0]))}return C.a.l(z,"/")},
ha:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.hb(J.hG(a,0)))for(y=1;y<z;++y){x=C.c.G(a,y)
if(x===58)return C.c.v(a,0,y)+"%3A"+C.c.ay(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mi:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.c.G(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.e(P.bW("Invalid URL encoding"))}}return z},
dN:function(a,b,c,d,e){var z,y,x,w,v
y=b
while(!0){if(!(y<c)){z=!0
break}x=C.c.G(a,y)
if(x<=127)if(x!==37)w=x===43
else w=!0
else w=!0
if(w){z=!1
break}++y}if(z){if(C.m!==d)w=!1
else w=!0
if(w)return C.c.v(a,b,c)
else v=new H.t(C.c.v(a,b,c))}else{v=H.c([],[P.m])
for(w=a.length,y=b;y<c;++y){x=C.c.G(a,y)
if(x>127)throw H.e(P.bW("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.e(P.bW("Truncated URI"))
C.a.h(v,P.mi(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.k(v,"$isb",[P.m],"$asb")
return new P.l2(!1).cQ(v)},
hb:function(a){var z=a|32
return 97<=z&&z<=122}}},
mg:{"^":"o:20;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.K()
throw H.e(P.Y("Invalid port",this.a,z+1))}},
mm:{"^":"o:21;",
$1:function(a){return P.cf(C.a9,a,C.m,!1)}},
mp:{"^":"o:29;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.j(P.cf(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.j(P.cf(C.w,b,C.m,!0))}}},
mo:{"^":"o:36;a",
$2:function(a,b){var z,y
H.C(a)
if(b==null||typeof b==="string")this.a.$2(a,H.C(b))
else for(z=J.b7(H.hw(b,"$isn")),y=this.a;z.C();)y.$2(a,H.C(z.gJ()))}},
kR:{"^":"a;a,b,c",
gfo:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.c.f5(y,"?",z)
w=y.length
if(x>=0){v=P.bM(y,x+1,w,C.u,!1)
w=x}else v=null
z=new P.lu(this,"data",null,null,null,P.bM(y,z,w,C.K,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
fB:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.c.G(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.e(P.Y("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.e(P.Y("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.c.G(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaF(z)
if(v!==44||x!==t+7||!C.c.ao(a,"base64",t+1))throw H.e(P.Y("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.P.kn(a,s,y)
else{r=P.he(a,s,y,C.u,!0)
if(r!=null)a=C.c.b8(a,s,y,r)}return new P.kR(a,z,c)}}},
mH:{"^":"o:34;",
$1:function(a){return new Uint8Array(96)}},
mG:{"^":"o:33;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hI(z,0,96,b)
return z}},
mI:{"^":"o;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.c.G(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mJ:{"^":"o;",
$3:function(a,b,c){var z,y,x
for(z=C.c.G(b,0),y=C.c.G(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
m0:{"^":"a;a,b,c,d,e,f,r,x,0y",
gf_:function(){return this.c>0},
gf1:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.K()
y=this.e
if(typeof y!=="number")return H.z(y)
y=z+1<y
z=y}else z=!1
return z},
gf2:function(){var z=this.f
if(typeof z!=="number")return z.U()
return z<this.r},
gf0:function(){return this.r<this.a.length},
gdW:function(){return this.b===4&&C.c.ab(this.a,"http")},
gdX:function(){return this.b===5&&C.c.ab(this.a,"https")},
gcb:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdW()){this.x="http"
z="http"}else if(this.gdX()){this.x="https"
z="https"}else if(z===4&&C.c.ab(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.c.ab(this.a,"package")){this.x="package"
z="package"}else{z=C.c.v(this.a,0,z)
this.x=z}return z},
gfp:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.c.v(this.a,y,z-1):""},
gd1:function(a){var z=this.c
return z>0?C.c.v(this.a,z,this.d):""},
gc0:function(a){var z
if(this.gf1()){z=this.d
if(typeof z!=="number")return z.K()
return P.bT(C.c.v(this.a,z+1,this.e),null,null)}if(this.gdW())return 80
if(this.gdX())return 443
return 0},
gfc:function(a){return C.c.v(this.a,this.e,this.f)},
gdd:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.U()
return z<y?C.c.v(this.a,z+1,y):""},
geZ:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.c.ay(y,z+1):""},
gde:function(){var z=this.f
if(typeof z!=="number")return z.U()
if(z>=this.r)return C.aa
z=P.i
return new P.fA(P.fE(this.gdd(),C.m),[z,z])},
di:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.k(h,"$isJ",[P.i,null],"$asJ")
i=this.gcb()
z=i==="file"
y=this.c
j=y>0?C.c.v(this.a,this.b+3,y):""
f=this.gf1()?this.gc0(this):null
y=this.c
if(y>0)c=C.c.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.c.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.c.ab(d,"/"))d="/"+d
g=P.dM(g,0,0,h)
x=this.r
if(x<y.length)b=C.c.ay(y,x+1)
return new P.cN(i,j,c,f,d,g,b)},
ff:function(a,b){return this.di(a,null,null,null,null,null,null,b,null,null)},
ga0:function(a){var z=this.y
if(z==null){z=C.c.ga0(this.a)
this.y=z}return z},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.M(b).$isdF)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$isdF:1},
lu:{"^":"cN;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e4:function(a){var z=document.createElement("a")
return z},
d3:function(a,b){var z=document.createElement("canvas")
return z},
io:function(a,b,c){var z,y
z=document.body
y=(z&&C.p).av(z,a,b,c)
y.toString
z=W.B
z=new H.dI(new W.as(y),H.l(new W.ip(),{func:1,ret:P.L,args:[z]}),[z])
return H.d(z.gaS(z),"$isK")},
iq:function(a){H.d(a,"$iscs")
return"wheel"},
by:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hL(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ac(x)}return z},
d9:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
cK:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fZ:function(a,b,c,d){var z,y
z=W.cK(W.cK(W.cK(W.cK(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ho:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.S
if(z===C.l)return a
return z.el(a,b)},
aa:{"^":"K;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
hQ:{"^":"aa;",
i:function(a){return String(a)},
$ishQ:1,
"%":"HTMLAnchorElement"},
ny:{"^":"aa;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
e7:{"^":"aa;",$ise7:1,"%":"HTMLBaseElement"},
cl:{"^":"aa;",$iscl:1,"%":"HTMLBodyElement"},
d2:{"^":"aa;",
c7:function(a,b,c){if(c!=null)return this.hE(a,b,P.mV(c,null))
return this.hF(a,b)},
fA:function(a,b){return this.c7(a,b,null)},
hE:function(a,b,c){return a.getContext(b,c)},
hF:function(a,b){return a.getContext(b)},
$isd2:1,
$isec:1,
"%":"HTMLCanvasElement"},
d4:{"^":"F;",
hG:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jT:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$isd4:1,
"%":"CanvasRenderingContext2D"},
nB:{"^":"B;0n:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nD:{"^":"lt;0n:length=",
fC:function(a,b){var z=this.hH(a,this.hn(a,b))
return z==null?"":z},
hn:function(a,b){var z,y
z=$.$get$ei()
y=z[b]
if(typeof y==="string")return y
y=this.iT(a,b)
z[b]=y
return y},
iT:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.id()+b
if(z in a)return z
return b},
hH:function(a,b){return a.getPropertyValue(b)},
gcK:function(a){return a.bottom},
gaD:function(a){return a.height},
gb5:function(a){return a.left},
gbt:function(a){return a.right},
gbx:function(a){return a.top},
gaG:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
i8:{"^":"a;",
gb5:function(a){return this.fC(a,"left")}},
b_:{"^":"aa;",$isb_:1,"%":"HTMLDivElement"},
ii:{"^":"B;",
jx:function(a,b){return a.adoptNode(b)},
dt:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
nE:{"^":"F;",
i:function(a){return String(a)},
"%":"DOMException"},
ij:{"^":"F;",
jK:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
ik:{"^":"F;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
A:function(a,b){var z
if(b==null)return!1
if(!H.bQ(b,"$isaQ",[P.am],"$asaQ"))return!1
z=J.a_(b)
return a.left===z.gb5(b)&&a.top===z.gbx(b)&&a.width===z.gaG(b)&&a.height===z.gaD(b)},
ga0:function(a){return W.fZ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcK:function(a){return a.bottom},
gaD:function(a){return a.height},
gb5:function(a){return a.left},
gbt:function(a){return a.right},
gbx:function(a){return a.top},
gaG:function(a){return a.width},
$isaQ:1,
$asaQ:function(){return[P.am]},
"%":";DOMRectReadOnly"},
ls:{"^":"cx;dQ:a<,b",
gn:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.f(z,b)
return H.d(z[b],"$isK")},
q:function(a,b,c){var z
H.d(c,"$isK")
z=this.b
if(b<0||b>=z.length)return H.f(z,b)
J.cW(this.a,c,z[b])},
h:function(a,b){J.e2(this.a,b)
return b},
gT:function(a){var z=this.kR(this)
return new J.aw(z,z.length,0,[H.q(z,0)])},
$asT:function(){return[W.K]},
$asn:function(){return[W.K]},
$asb:function(){return[W.K]}},
K:{"^":"B;0kO:tagName=",
gjA:function(a){return new W.lv(a)},
gcP:function(a){return new W.ls(a,a.children)},
ges:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.U()
if(x<0)x=-x*0
if(typeof w!=="number")return w.U()
if(w<0)w=-w*0
return new P.aQ(z,y,x,w,[P.am])},
i:function(a){return a.localName},
av:["cd",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.et
if(z==null){z=H.c([],[W.aJ])
y=new W.eR(z)
C.a.h(z,W.fX(null))
C.a.h(z,W.h5())
$.et=y
d=y}else d=z
z=$.es
if(z==null){z=new W.hg(d)
$.es=z
c=z}else{z.a=d
c=z}}if($.aO==null){z=document
y=z.implementation
y=(y&&C.T).jK(y,"")
$.aO=y
$.d7=y.createRange()
y=$.aO
y.toString
y=y.createElement("base")
H.d(y,"$ise7")
y.href=z.baseURI
z=$.aO.head;(z&&C.V).D(z,y)}z=$.aO
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.d(y,"$iscl")}z=$.aO
if(!!this.$iscl)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aO.body;(z&&C.p).D(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.a_(C.a7,a.tagName)){z=$.d7;(z&&C.M).fH(z,x)
z=$.d7
w=(z&&C.M).jI(z,b)}else{x.innerHTML=b
w=$.aO.createDocumentFragment()
for(z=J.a_(w);y=x.firstChild,y!=null;)z.D(w,y)}z=$.aO.body
if(x==null?z!=null:x!==z)J.e3(x)
c.du(w)
C.z.jx(document,w)
return w},function(a,b,c){return this.av(a,b,c,null)},"jJ",null,null,"glw",5,5,null],
fK:function(a,b,c,d){a.textContent=null
this.D(a,this.av(a,b,c,d))},
fJ:function(a,b){return this.fK(a,b,null,null)},
bb:function(a,b){return a.getAttribute(b)},
is:function(a,b){return a.removeAttribute(b)},
fI:function(a,b,c){return a.setAttribute(b,c)},
$isK:1,
"%":";Element"},
ip:{"^":"o:25;",
$1:function(a){return!!J.M(H.d(a,"$isB")).$isK}},
a8:{"^":"F;",$isa8:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
cs:{"^":"F;",
hi:function(a,b,c,d){return a.addEventListener(b,H.bo(H.l(c,{func:1,args:[W.a8]}),1),!1)},
$iscs:1,
"%":";EventTarget"},
nF:{"^":"aa;0n:length=","%":"HTMLFormElement"},
iF:{"^":"aa;","%":"HTMLHeadElement"},
iG:{"^":"F;0n:length=",
iA:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
iH:{"^":"lL;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b8(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isB")
throw H.e(P.U("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isay:1,
$asay:function(){return[W.B]},
$asT:function(){return[W.B]},
$isn:1,
$asn:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]},
$isiH:1,
$asaE:function(){return[W.B]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
iI:{"^":"ii;","%":"HTMLDocument"},
c0:{"^":"F;0ew:data=",$isc0:1,"%":"ImageData"},
d8:{"^":"aa;",$isd8:1,$isec:1,"%":"HTMLImageElement"},
bB:{"^":"dw;",$isbB:1,"%":"KeyboardEvent"},
j5:{"^":"F;",
i:function(a){return String(a)},
$isj5:1,
"%":"Location"},
jk:{"^":"aa;","%":"HTMLAudioElement;HTMLMediaElement"},
ad:{"^":"dw;",$isad:1,"%":"PointerEvent;DragEvent|MouseEvent"},
as:{"^":"cx;a",
gaS:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.e(P.fc("No elements"))
if(y>1)throw H.e(P.fc("More than one element"))
return z.firstChild},
af:function(a,b){var z,y,x,w,v
H.k(b,"$isn",[W.B],"$asn")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.a_(y),v=0;v<x;++v)w.D(y,z.firstChild)
return},
q:function(a,b,c){var z,y
H.d(c,"$isB")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.f(y,b)
J.cW(z,c,y[b])},
gT:function(a){var z=this.a.childNodes
return new W.ev(z,z.length,-1,[H.bS(C.ab,z,"aE",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asT:function(){return[W.B]},
$asn:function(){return[W.B]},
$asb:function(){return[W.B]}},
B:{"^":"cs;0kA:previousSibling=",
kC:function(a){var z=a.parentNode
if(z!=null)J.ci(z,a)},
kH:function(a,b){var z,y
try{z=a.parentNode
J.cW(z,b,a)}catch(y){H.ac(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.fP(a):z},
D:function(a,b){return a.appendChild(H.d(b,"$isB"))},
it:function(a,b){return a.removeChild(b)},
iz:function(a,b,c){return a.replaceChild(b,c)},
$isB:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
jo:{"^":"lR;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b8(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isB")
throw H.e(P.U("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isay:1,
$asay:function(){return[W.B]},
$asT:function(){return[W.B]},
$isn:1,
$asn:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]},
$asaE:function(){return[W.B]},
"%":"NodeList|RadioNodeList"},
jK:{"^":"F;",
jI:function(a,b){return a.createContextualFragment(b)},
fH:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
nO:{"^":"aa;0n:length=","%":"HTMLSelectElement"},
cD:{"^":"aa;",$iscD:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
kj:{"^":"aa;",
av:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.cd(a,b,c,d)
z=W.io("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.as(y).af(0,new W.as(z))
return y},
hJ:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
kk:{"^":"aa;",
av:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.cd(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.av(z.createElement("table"),b,c,d)
z.toString
z=new W.as(z)
x=z.gaS(z)
x.toString
z=new W.as(x)
w=z.gaS(z)
y.toString
w.toString
new W.as(y).af(0,new W.as(w))
return y},
dV:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
nR:{"^":"aa;",
av:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.cd(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.av(z.createElement("table"),b,c,d)
z.toString
z=new W.as(z)
x=z.gaS(z)
y.toString
x.toString
new W.as(y).af(0,new W.as(x))
return y},
"%":"HTMLTableSectionElement"},
ff:{"^":"aa;",$isff:1,"%":"HTMLTemplateElement"},
bh:{"^":"F;",$isbh:1,"%":"Touch"},
bi:{"^":"dw;",$isbi:1,"%":"TouchEvent"},
nT:{"^":"mc;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b8(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isbh")
throw H.e(P.U("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isay:1,
$asay:function(){return[W.bh]},
$asT:function(){return[W.bh]},
$isn:1,
$asn:function(){return[W.bh]},
$isb:1,
$asb:function(){return[W.bh]},
$asaE:function(){return[W.bh]},
"%":"TouchList"},
dw:{"^":"a8;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
nW:{"^":"jk;",$isec:1,"%":"HTMLVideoElement"},
bJ:{"^":"ad;",
gjQ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.U("deltaY is not supported"))},
gjP:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.U("deltaX is not supported"))},
$isbJ:1,
"%":"WheelEvent"},
ll:{"^":"cs;",
iB:function(a,b){return a.requestAnimationFrame(H.bo(H.l(b,{func:1,ret:-1,args:[P.am]}),1))},
hx:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fT:{"^":"B;",$isfT:1,"%":"Attr"},
o0:{"^":"ik;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
A:function(a,b){var z
if(b==null)return!1
if(!H.bQ(b,"$isaQ",[P.am],"$asaQ"))return!1
z=J.a_(b)
return a.left===z.gb5(b)&&a.top===z.gbx(b)&&a.width===z.gaG(b)&&a.height===z.gaD(b)},
ga0:function(a){return W.fZ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaD:function(a){return a.height},
gaG:function(a){return a.width},
"%":"ClientRect|DOMRect"},
o4:{"^":"mD;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b8(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isB")
throw H.e(P.U("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isay:1,
$asay:function(){return[W.B]},
$asT:function(){return[W.B]},
$isn:1,
$asn:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]},
$asaE:function(){return[W.B]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lr:{"^":"eI;dQ:a<",
S:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=this.gaE(),y=z.length,x=this.a,w=J.a_(x),v=0;v<z.length;z.length===y||(0,H.A)(z),++v){u=z[v]
b.$2(u,w.bb(x,u))}},
gaE:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.i])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.d(z[w],"$isfT")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$ascz:function(){return[P.i,P.i]},
$asJ:function(){return[P.i,P.i]}},
lv:{"^":"lr;a",
j:function(a,b){return J.cY(this.a,H.C(b))},
q:function(a,b,c){J.hN(this.a,b,c)},
gn:function(a){return this.gaE().length}},
lw:{"^":"ke;a,b,c,$ti"},
o1:{"^":"lw;a,b,c,$ti"},
lx:{"^":"dq;a,b,c,d,e,$ti",p:{
Z:function(a,b,c,d,e){var z,y
z=W.ho(new W.ly(c),W.a8)
y=z!=null
if(y&&!0){H.l(z,{func:1,args:[W.a8]})
if(y)J.hF(a,b,z,!1)}return new W.lx(0,a,b,z,!1,[e])}}},
ly:{"^":"o:31;a",
$1:function(a){return this.a.$1(H.d(a,"$isa8"))}},
ce:{"^":"a;a",
h3:function(a){var z,y
z=$.$get$dK()
if(z.gkd(z)){for(y=0;y<262;++y)z.q(0,C.a6[y],W.n7())
for(y=0;y<12;++y)z.q(0,C.B[y],W.n8())}},
b0:function(a){return $.$get$fY().a_(0,W.by(a))},
aL:function(a,b,c){var z,y,x
z=W.by(a)
y=$.$get$dK()
x=y.j(0,H.j(z)+"::"+b)
if(x==null)x=y.j(0,"*::"+b)
if(x==null)return!1
return H.dS(x.$4(a,b,c,this))},
$isaJ:1,
p:{
fX:function(a){var z,y
z=W.e4(null)
y=window.location
z=new W.ce(new W.lX(z,y))
z.h3(a)
return z},
o2:[function(a,b,c,d){H.d(a,"$isK")
H.C(b)
H.C(c)
H.d(d,"$isce")
return!0},"$4","n7",16,0,13],
o3:[function(a,b,c,d){var z,y,x
H.d(a,"$isK")
H.C(b)
H.C(c)
z=H.d(d,"$isce").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","n8",16,0,13]}},
aE:{"^":"a;$ti",
gT:function(a){return new W.ev(a,this.gn(a),-1,[H.bS(this,a,"aE",0)])}},
eR:{"^":"a;a",
b0:function(a){return C.a.ei(this.a,new W.jq(a))},
aL:function(a,b,c){return C.a.ei(this.a,new W.jp(a,b,c))},
$isaJ:1},
jq:{"^":"o:26;a",
$1:function(a){return H.d(a,"$isaJ").b0(this.a)}},
jp:{"^":"o:26;a,b,c",
$1:function(a){return H.d(a,"$isaJ").aL(this.a,this.b,this.c)}},
lY:{"^":"a;",
hc:function(a,b,c,d){var z,y,x
this.a.af(0,c)
z=b.dm(0,new W.lZ())
y=b.dm(0,new W.m_())
this.b.af(0,z)
x=this.c
x.af(0,C.H)
x.af(0,y)},
b0:function(a){return this.a.a_(0,W.by(a))},
aL:["fU",function(a,b,c){var z,y
z=W.by(a)
y=this.c
if(y.a_(0,H.j(z)+"::"+b))return this.d.jy(c)
else if(y.a_(0,"*::"+b))return this.d.jy(c)
else{y=this.b
if(y.a_(0,H.j(z)+"::"+b))return!0
else if(y.a_(0,"*::"+b))return!0
else if(y.a_(0,H.j(z)+"::*"))return!0
else if(y.a_(0,"*::*"))return!0}return!1}],
$isaJ:1},
lZ:{"^":"o:27;",
$1:function(a){return!C.a.a_(C.B,H.C(a))}},
m_:{"^":"o:27;",
$1:function(a){return C.a.a_(C.B,H.C(a))}},
m5:{"^":"lY;e,a,b,c,d",
aL:function(a,b,c){if(this.fU(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cY(a,"template")==="")return this.e.a_(0,b)
return!1},
p:{
h5:function(){var z,y,x,w,v
z=P.i
y=P.eF(C.A,z)
x=H.q(C.A,0)
w=H.l(new W.m6(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.m5(y,P.c7(null,null,null,z),P.c7(null,null,null,z),P.c7(null,null,null,z),null)
y.hc(null,new H.jb(C.A,w,[x,z]),v,null)
return y}}},
m6:{"^":"o:21;",
$1:function(a){return"TEMPLATE::"+H.j(H.C(a))}},
m4:{"^":"a;",
b0:function(a){var z=J.M(a)
if(!!z.$isf5)return!1
z=!!z.$isdr
if(z&&W.by(a)==="foreignObject")return!1
if(z)return!0
return!1},
aL:function(a,b,c){if(b==="is"||C.c.ab(b,"on"))return!1
return this.b0(a)},
$isaJ:1},
ev:{"^":"a;a,b,c,0d,$ti",
sdT:function(a){this.d=H.x(a,H.q(this,0))},
C:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdT(J.hE(this.a,z))
this.c=z
return!0}this.sdT(null)
this.c=y
return!1},
gJ:function(){return this.d},
$isb0:1},
aJ:{"^":"a;"},
lX:{"^":"a;a,b",$isnV:1},
hg:{"^":"a;a",
du:function(a){new W.mA(this).$2(a,null)},
bi:function(a,b){if(b==null)J.e3(a)
else J.ci(b,a)},
iG:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hJ(a)
x=J.cY(y.gdQ(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ac(t)}v="element unprintable"
try{v=J.av(a)}catch(t){H.ac(t)}try{u=W.by(a)
this.iF(H.d(a,"$isK"),b,z,v,u,H.d(y,"$isJ"),H.C(x))}catch(t){if(H.ac(t) instanceof P.aM)throw t
else{this.bi(a,b)
window
s="Removing corrupted element "+H.j(v)
if(typeof console!="undefined")window.console.warn(s)}}},
iF:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.bi(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.b0(a)){this.bi(a,b)
window
z="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aL(a,"is",g)){this.bi(a,b)
window
z="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaE()
y=H.c(z.slice(0),[H.q(z,0)])
for(x=f.gaE().length-1,z=f.a,w=J.a_(z);x>=0;--x){if(x>=y.length)return H.f(y,x)
v=y[x]
if(!this.a.aL(a,J.hP(v),w.bb(z,v))){window
u="Removing disallowed attribute <"+H.j(e)+" "+v+'="'+H.j(w.bb(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.bb(z,v)
w.is(z,v)}}if(!!J.M(a).$isff)this.du(a.content)},
$isnN:1},
mA:{"^":"o:30;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.iG(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.bi(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hK(z)}catch(w){H.ac(w)
v=H.d(z,"$isB")
if(x){u=v.parentNode
if(u!=null)J.ci(u,v)}else J.ci(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.d(y,"$isB")}}},
lt:{"^":"F+i8;"},
lK:{"^":"F+T;"},
lL:{"^":"lK+aE;"},
lQ:{"^":"F+T;"},
lR:{"^":"lQ+aE;"},
mb:{"^":"F+T;"},
mc:{"^":"mb+aE;"},
mC:{"^":"F+T;"},
mD:{"^":"mC+aE;"}}],["","",,P,{"^":"",
mY:function(a){var z,y
z=J.M(a)
if(!!z.$isc0){y=z.gew(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h7(a.data,a.height,a.width)},
mX:function(a){if(a instanceof P.h7)return{data:a.a,height:a.b,width:a.c}
return a},
mV:function(a,b){var z={}
a.S(0,new P.mW(z))
return z},
eo:function(){var z=$.en
if(z==null){z=J.cX(window.navigator.userAgent,"Opera",0)
$.en=z}return z},
id:function(){var z,y
z=$.ek
if(z!=null)return z
y=$.el
if(y==null){y=J.cX(window.navigator.userAgent,"Firefox",0)
$.el=y}if(y)z="-moz-"
else{y=$.em
if(y==null){y=!P.eo()&&J.cX(window.navigator.userAgent,"Trident/",0)
$.em=y}if(y)z="-ms-"
else z=P.eo()?"-o-":"-webkit-"}$.ek=z
return z},
m1:{"^":"a;",
eX:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
dl:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.M(a)
if(!!y.$isao)return new Date(a.a)
if(!!y.$isjO)throw H.e(P.cH("structured clone of RegExp"))
if(!!y.$isc0)return a
if(!!y.$isdl)return a
if(!!y.$isJ){x=this.eX(a)
y=this.b
if(x>=y.length)return H.f(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.q(y,x,w)
a.S(0,new P.m3(z,this))
return z.a}if(!!y.$isb){x=this.eX(a)
z=this.b
if(x>=z.length)return H.f(z,x)
w=z[x]
if(w!=null)return w
return this.jH(a,x)}throw H.e(P.cH("structured clone of other type"))},
jH:function(a,b){var z,y,x,w
z=J.br(a)
y=z.gn(a)
x=new Array(y)
C.a.q(this.b,b,x)
for(w=0;w<y;++w)C.a.q(x,w,this.dl(z.j(a,w)))
return x}},
m3:{"^":"o:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.dl(b)}},
h7:{"^":"a;ew:a>,b,c",$isc0:1},
mW:{"^":"o:6;a",
$2:function(a,b){this.a[a]=b}},
m2:{"^":"m1;a,b"},
ix:{"^":"cx;a,b",
gbf:function(){var z,y,x
z=this.b
y=H.a2(z,"T",0)
x=W.K
return new H.j9(new H.dI(z,H.l(new P.iy(),{func:1,ret:P.L,args:[y]}),[y]),H.l(new P.iz(),{func:1,ret:x,args:[y]}),[y,x])},
S:function(a,b){H.l(b,{func:1,ret:-1,args:[W.K]})
C.a.S(P.eG(this.gbf(),!1,W.K),b)},
q:function(a,b,c){var z
H.d(c,"$isK")
z=this.gbf()
J.hM(z.b.$1(J.cj(z.a,b)),c)},
h:function(a,b){J.e2(this.b.a,b)},
gn:function(a){return J.au(this.gbf().a)},
j:function(a,b){var z=this.gbf()
return z.b.$1(J.cj(z.a,b))},
gT:function(a){var z=P.eG(this.gbf(),!1,W.K)
return new J.aw(z,z.length,0,[H.q(z,0)])},
$asT:function(){return[W.K]},
$asn:function(){return[W.K]},
$asb:function(){return[W.K]}},
iy:{"^":"o:25;",
$1:function(a){return!!J.M(H.d(a,"$isB")).$isK}},
iz:{"^":"o:56;",
$1:function(a){return H.h(H.d(a,"$isB"),"$isK")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lM:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lS:{"^":"a;$ti",
gbt:function(a){var z=this.a
if(typeof z!=="number")return z.K()
return H.x(z+this.c,H.q(this,0))},
gcK:function(a){var z=this.b
if(typeof z!=="number")return z.K()
return H.x(z+this.d,H.q(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bQ(b,"$isaQ",[P.am],"$asaQ"))return!1
z=this.a
y=J.a_(b)
x=y.gb5(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbx(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.K()
w=H.q(this,0)
if(H.x(z+this.c,w)===y.gbt(b)){if(typeof x!=="number")return x.K()
z=H.x(x+this.d,w)===y.gcK(b)}else z=!1}else z=!1}else z=!1
return z},
ga0:function(a){var z,y,x,w,v
z=this.a
y=J.bV(z)
x=this.b
w=J.bV(x)
if(typeof z!=="number")return z.K()
v=H.q(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.K()
v=H.x(x+this.d,v)
return P.lM(P.cL(P.cL(P.cL(P.cL(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aQ:{"^":"lS;b5:a>,bx:b>,aG:c>,aD:d>,$ti"}}],["","",,P,{"^":"",f5:{"^":"dr;",$isf5:1,"%":"SVGScriptElement"},dr:{"^":"K;",
gcP:function(a){return new P.ix(a,new W.as(a))},
av:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aJ])
C.a.h(z,W.fX(null))
C.a.h(z,W.h5())
C.a.h(z,new W.m4())
c=new W.hg(new W.eR(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).jJ(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.as(w)
u=z.gaS(z)
for(z=J.a_(v);x=u.firstChild,x!=null;)z.D(v,x)
return v},
$isdr:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":"",N:{"^":"a;",$isn:1,
$asn:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskC:1}}],["","",,P,{"^":""}],["","",,P,{"^":"",hV:{"^":"F;",$ishV:1,"%":"WebGLBuffer"},iB:{"^":"F;",$isiB:1,"%":"WebGLFramebuffer"},jJ:{"^":"F;",$isjJ:1,"%":"WebGLProgram"},jV:{"^":"F;",$isjV:1,"%":"WebGLRenderbuffer"},dm:{"^":"F;",
bH:function(a,b){return a.activeTexture(b)},
ej:function(a,b,c){return a.attachShader(b,c)},
aA:function(a,b,c){return a.bindBuffer(b,c)},
bk:function(a,b,c){return a.bindFramebuffer(b,c)},
ek:function(a,b,c){return a.bindRenderbuffer(b,c)},
a6:function(a,b,c){return a.bindTexture(b,c)},
jC:function(a,b,c){return a.blendFunc(b,c)},
em:function(a,b,c,d){return a.bufferData(b,c,d)},
ep:function(a,b){return a.clear(b)},
eq:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
er:function(a,b){return a.clearDepth(b)},
jF:function(a,b){return a.compileShader(b)},
jL:function(a,b){return a.createShader(b)},
jN:function(a,b){return a.deleteProgram(b)},
jO:function(a,b){return a.deleteShader(b)},
ex:function(a,b){return a.depthFunc(b)},
jR:function(a,b){return a.disable(b)},
ey:function(a,b){return a.disableVertexAttribArray(b)},
jS:function(a,b,c,d,e){return a.drawElements(b,c,H.a1(d),H.a1(e))},
bo:function(a,b){return a.enable(b)},
eB:function(a,b){return a.enableVertexAttribArray(b)},
k7:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
k8:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ft:function(a,b){return a.generateMipmap(b)},
fu:function(a,b,c){return a.getActiveAttrib(b,c)},
fv:function(a,b,c){return a.getActiveUniform(b,c)},
fw:function(a,b,c){return a.getAttribLocation(b,c)},
c8:function(a,b){return a.getParameter(b)},
fB:function(a,b){return a.getProgramInfoLog(b)},
c9:function(a,b,c){return a.getProgramParameter(b,c)},
fD:function(a,b){return a.getShaderInfoLog(b)},
fE:function(a,b,c){return a.getShaderParameter(b,c)},
fF:function(a,b,c){return a.getUniformLocation(b,c)},
kg:function(a,b){return a.linkProgram(b)},
fd:function(a,b,c){return a.pixelStorei(b,c)},
kG:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
fN:function(a,b,c){return a.shaderSource(b,c)},
fi:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.iV(a,b,c,d,e,f,g,h,i,j)
return}y=J.M(g)
if(!!y.$isc0&&h==null&&z&&!0){this.iW(a,b,c,d,e,f,P.mX(g))
return}if(!!y.$isd8&&h==null&&z&&!0){this.iX(a,b,c,d,e,f,g)
return}throw H.e(P.bW("Incorrect number or type of arguments"))},
fh:function(a,b,c,d,e,f,g){return this.fi(a,b,c,d,e,f,g,null,null,null)},
iV:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
iW:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
iX:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ai:function(a,b,c,d){return a.texParameteri(b,c,d)},
M:function(a,b,c){return a.uniform1f(b,c)},
N:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fm:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fn:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c5:function(a,b){return a.useProgram(b)},
kU:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
fq:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isdm:1,
"%":"WebGLRenderingContext"},k0:{"^":"F;",$isk0:1,"%":"WebGLShader"},kl:{"^":"F;",$iskl:1,"%":"WebGLTexture"},kL:{"^":"F;",$iskL:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",W:{"^":"a;0a,0b,0c,0d,$ti",
shN:function(a){this.a=H.k(a,"$isb",[H.a2(this,"W",0)],"$asb")},
se2:function(a){this.b=H.l(a,{func:1,ret:P.L,args:[[P.n,H.a2(this,"W",0)]]})},
se_:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.m,[P.n,H.a2(this,"W",0)]]})},
se3:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.m,[P.n,H.a2(this,"W",0)]]})},
bC:function(a){this.shN(H.c([],[a]))
this.se2(null)
this.se_(null)
this.se3(null)},
dv:function(a,b,c){var z=H.a2(this,"W",0)
H.l(b,{func:1,ret:P.L,args:[[P.n,z]]})
z={func:1,ret:-1,args:[P.m,[P.n,z]]}
H.l(a,z)
H.l(c,z)
this.se2(b)
this.se_(a)
this.se3(c)},
bc:function(a,b){return this.dv(a,null,b)},
e1:function(a){var z
H.k(a,"$isn",[H.a2(this,"W",0)],"$asn")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dA:function(a,b){var z
H.k(b,"$isn",[H.a2(this,"W",0)],"$asn")
z=this.c
if(z!=null)z.$2(a,b)},
gn:function(a){return this.a.length},
gT:function(a){var z=this.a
return new J.aw(z,z.length,0,[H.q(z,0)])},
ag:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.a2(this,"W",0)
H.x(b,z)
z=[z]
if(this.e1(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dA(x,H.c([b],z))}},
af:function(a,b){var z,y
H.k(b,"$isn",[H.a2(this,"W",0)],"$asn")
if(this.e1(b)){z=this.a
y=z.length
C.a.af(z,b)
this.dA(y,b)}},
$isn:1,
p:{
d5:function(a){var z=new O.W([a])
z.bC(a)
return z}}},di:{"^":"a;0a,0b",
scq:function(a){this.a=H.k(a,"$isb",[V.ap],"$asb")},
gn:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
h_:function(a){var z=this.b
if(!(z==null))z.F(a)},
aT:function(){return this.h_(null)},
ga4:function(){var z=this.a
if(z.length>0)return C.a.gaF(z)
else return V.b2()},
c2:function(a){var z=this.a
if(a==null)C.a.h(z,V.b2())
else C.a.h(z,a)
this.aT()},
aP:function(){var z=this.a
if(z.length>0){z.pop()
this.aT()}}}}],["","",,E,{"^":"",d_:{"^":"a;"},ax:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0at:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sh0:function(a,b){this.y=H.k(b,"$isW",[E.ax],"$asW")},
sat:function(a){this.z=H.d(a,"$isbz")},
scc:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gt().R(0,this.gfa())
y=this.c
if(y!=null)y.gt().h(0,this.gfa())
x=new D.I("shape",z,this.c,this,[F.f7])
x.b=!0
this.b7(x)}},
aj:function(a){var z
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.q(z,0)]);z.C();)z.d.aj(a)},
ah:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga4())
z.aT()
a.dc(this.f)
z=a.dy
y=(z&&C.a).gaF(z)
if(y!=null&&this.d!=null)y.dh(a,this)
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.q(z,0)]);z.C();)z.d.ah(a)
a.da()
a.dx.aP()},
gt:function(){var z=this.z
if(z==null){z=D.E()
this.z=z}return z},
b7:function(a){var z=this.z
if(!(z==null))z.F(a)},
am:function(){return this.b7(null)},
kr:[function(a){H.d(a,"$isw")
this.e=null
this.b7(a)},function(){return this.kr(null)},"lD","$1","$0","gfa",0,2,0],
kp:[function(a){this.b7(H.d(a,"$isw"))},function(){return this.kp(null)},"lB","$1","$0","gf9",0,2,0],
lA:[function(a,b){var z,y,x,w,v,u,t
H.k(b,"$isn",[E.ax],"$asn")
for(z=b.length,y=this.gf9(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.gat()==null){t=new D.bz()
t.sap(null)
t.sbg(null)
t.c=null
t.d=0
u.sat(t)}t=u.gat()
t.toString
H.l(y,x)
if(t.a==null)t.sap(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.am()},"$2","gko",8,0,8],
lC:[function(a,b){var z,y
H.k(b,"$isn",[E.ax],"$asn")
for(z=b.gT(b),y=this.gf9();z.C();)z.gJ().gt().R(0,y)
this.am()},"$2","gkq",8,0,8],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaI:1,
p:{
eu:function(a,b,c,d,e,f){var z=new E.ax()
z.a=d
z.b=!0
z.sh0(0,O.d5(E.ax))
z.y.bc(z.gko(),z.gkq())
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
return z}}},jQ:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
siU:function(a){this.dy=H.k(a,"$isb",[O.bf],"$asb")},
siP:function(a){this.fr=H.k(a,"$isJ",[P.i,A.ca],"$asJ")},
fX:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.ao(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.di()
y=[V.ap]
z.scq(H.c([],y))
z.b=null
z.gt().h(0,new E.jS(this))
this.cy=z
z=new O.di()
z.scq(H.c([],y))
z.b=null
z.gt().h(0,new E.jT(this))
this.db=z
z=new O.di()
z.scq(H.c([],y))
z.b=null
z.gt().h(0,new E.jU(this))
this.dx=z
this.siU(H.c([],[O.bf]))
z=this.dy;(z&&C.a).h(z,null)
this.siP(new H.b1(0,0,[P.i,A.ca]))},
gkB:function(){var z=this.z
if(z==null){z=this.cy.ga4().u(0,this.db.ga4())
this.z=z}return z},
gfe:function(){var z=this.ch
if(z==null){z=this.gkB().u(0,this.dx.ga4())
this.ch=z}return z},
dc:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaF(z):a;(z&&C.a).h(z,y)},
da:function(){var z=this.dy
if(z.length>1)z.pop()},
cF:function(a){var z=a.b
if(z.length===0)throw H.e(P.u("May not cache a shader with no name."))
if(this.fr.bK(z))throw H.e(P.u('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.q(0,z,a)},
p:{
jR:function(a,b){var z=new E.jQ(a,b)
z.fX(a,b)
return z}}},jS:{"^":"o:7;a",
$1:function(a){var z
H.d(a,"$isw")
z=this.a
z.z=null
z.ch=null}},jT:{"^":"o:7;a",
$1:function(a){var z
H.d(a,"$isw")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jU:{"^":"o:7;a",
$1:function(a){var z
H.d(a,"$isw")
z=this.a
z.ch=null
z.cx=null}},ku:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0at:x<,0y,0z,0Q,0ch,0cx,0cy",
sat:function(a){this.x=H.d(a,"$isbz")},
h2:[function(a){H.d(a,"$isw")
this.kJ()},function(){return this.h2(null)},"h1","$1","$0","gdB",0,2,0],
gk6:function(){var z,y,x
z=Date.now()
y=C.e.ac(P.eq(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ao(z,!1)
return x/y},
e5:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.u()
if(typeof z!=="number")return H.z(z)
x=C.j.d0(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.u()
w=C.j.d0(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.fl(C.y,this.gkI())}},
kJ:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kw(this),{func:1,ret:-1,args:[P.am]})
C.O.hx(z)
C.O.iB(z,W.ho(y,P.am))}},"$0","gkI",0,0,3],
kF:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.e5()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ao(w,!1)
x.y=P.eq(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sn(w.a,0)
w.aT()
w=x.db
C.a.sn(w.a,0)
w.aT()
w=x.dx
C.a.sn(w.a,0)
w.aT()
w=x.dy;(w&&C.a).sn(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ah(this.e)}x=this.z
if(!(x==null))x.F(null)}catch(v){z=H.ac(v)
y=H.bs(v)
P.e_("Error: "+H.j(z))
P.e_("Stack: "+H.j(y))
throw H.e(z)}},
p:{
kv:function(a,b,c,d,e){var z,y,x,w
z=J.M(a)
if(!!z.$isd2)return E.fk(a,!0,!0,!0,!1)
y=W.d3(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcP(a).h(0,y)
w=E.fk(y,!0,!0,!0,!1)
w.a=a
return w},
fk:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ku()
y=P.j0(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.q.c7(a,"webgl",y)
x=H.d(x==null?C.q.c7(a,"experimental-webgl",y):x,"$isdm")
if(x==null)H.r(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jR(x,a)
w=new T.kr(x)
w.b=H.a1((x&&C.b).c8(x,3379))
w.c=H.a1(C.b.c8(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.kY(a)
v=new X.iU()
v.c=new X.aH(!1,!1,!1)
v.sip(P.c7(null,null,null,P.m))
w.b=v
v=new X.jl(w)
v.f=0
v.r=V.aP()
v.x=V.aP()
v.Q=1
v.ch=1
w.c=v
v=new X.j6(w)
v.r=0
v.x=V.aP()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kz(w)
v.e=0
v.f=V.aP()
v.r=V.aP()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.shy(H.c([],[[P.dq,P.a]]))
v=w.z
u=document
t=W.ad
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.Z(u,"contextmenu",H.l(w.gi0(),s),!1,t))
v=w.z
r=W.a8
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Z(a,"focus",H.l(w.gi3(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Z(a,"blur",H.l(w.ghY(),q),!1,r))
v=w.z
p=W.bB
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Z(u,"keyup",H.l(w.gi5(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Z(u,"keydown",H.l(w.gi4(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Z(a,"mousedown",H.l(w.gi8(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Z(a,"mouseup",H.l(w.gia(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Z(a,"mousemove",H.l(w.gi9(),s),!1,t))
p=w.z
o=W.bJ;(p&&C.a).h(p,W.Z(a,H.C(W.iq(a)),H.l(w.gib(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Z(u,"mousemove",H.l(w.gi1(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Z(u,"mouseup",H.l(w.gi2(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Z(u,"pointerlockchange",H.l(w.gic(),q),!1,r))
r=w.z
q=W.bi
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Z(a,"touchstart",H.l(w.gim(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Z(a,"touchend",H.l(w.gik(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Z(a,"touchmove",H.l(w.gil(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ao(Date.now(),!1)
z.cy=0
z.e5()
return z}}},kw:{"^":"o:32;a",
$1:function(a){var z
H.nm(a)
z=this.a
if(z.ch){z.ch=!1
z.kF()}}}}],["","",,Z,{"^":"",fQ:{"^":"a;a,b",$isnz:1,p:{
fR:function(a,b,c){var z
H.k(c,"$isb",[P.m],"$asb")
z=a.createBuffer()
C.b.aA(a,b,z)
C.b.em(a,b,new Int16Array(H.bl(c)),35044)
C.b.aA(a,b,null)
return new Z.fQ(b,z)}}},ea:{"^":"d_;a,b,c,d,e",
a2:function(a){var z,y,x
try{y=a.a
C.b.eB(y,this.e)
C.b.kU(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.ac(x)
y=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(z))
throw H.e(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},dH:{"^":"a;a",$isnA:1},cn:{"^":"a;a,0b,c,d",
shI:function(a){this.b=H.k(a,"$isb",[Z.cu],"$asb")},
ax:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a2:function(a){var z,y
z=this.a
C.b.aA(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a2(a)},
an:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.ey(x,z[y].e)
C.b.aA(x,this.a.a,null)},
ah:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
w=v.c
u=w.a
C.b.aA(y,u,w.b)
C.b.jS(y,v.a,v.b,5123,0)
C.b.aA(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.av(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(y,", ")+"\nAttrs:   "+C.a.l(u,", ")},
$isnS:1},cu:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bd(this.c)+"'")+"]"}},b4:{"^":"a;a",
gdw:function(a){var z,y
z=this.a
y=(z&$.$get$al().a)!==0?3:0
if((z&$.$get$aU().a)!==0)y+=3
if((z&$.$get$aT().a)!==0)y+=3
if((z&$.$get$aB().a)!==0)y+=2
if((z&$.$get$aV().a)!==0)y+=3
if((z&$.$get$bH().a)!==0)y+=3
if((z&$.$get$bI().a)!==0)y+=4
if((z&$.$get$bj().a)!==0)++y
return(z&$.$get$aS().a)!==0?y+4:y},
jz:function(a){var z,y,x
z=$.$get$al()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bj()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fP()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b4))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.i])
y=this.a
if((y&$.$get$al().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aU().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aB().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aV().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bH().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bI().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bj().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.l(z,"|")},
p:{
ar:function(a){return new Z.b4(a)}}}}],["","",,D,{"^":"",ed:{"^":"a;"},bz:{"^":"a;0a,0b,0c,0d",
sap:function(a){this.a=H.k(a,"$isb",[{func:1,ret:-1,args:[D.w]}],"$asb")},
sbg:function(a){this.b=H.k(a,"$isb",[{func:1,ret:-1,args:[D.w]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.w]}
H.l(b,z)
if(this.a==null)this.sap(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
R:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.w]})
z=this.a
z=z==null?null:C.a.a_(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).R(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.a_(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).R(z,b)||y}return y},
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
if(a==null){a=new D.w(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.S(y,new D.iu(z))
y=this.b
if(!(y==null))C.a.S(y,new D.iv(z))
z=this.b
if(!(z==null))C.a.sn(z,0)
return!0},
cU:function(){return this.F(null)},
kK:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.F(y)}}},
aR:function(){return this.kK(!0,!1)},
p:{
E:function(){var z=new D.bz()
z.sap(null)
z.sbg(null)
z.c=null
z.d=0
return z}}},iu:{"^":"o:24;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.w]})
z=this.a.a
z.b
a.$1(z)}},iv:{"^":"o:24;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.w]})
z=this.a.a
z.b
a.$1(z)}},w:{"^":"a;a,0b"},c1:{"^":"w;c,d,a,0b,$ti"},c2:{"^":"w;c,d,a,0b,$ti"},I:{"^":"w;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",eb:{"^":"a;a,b",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eb))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},eC:{"^":"a;a,b",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eC))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},iU:{"^":"a;0a,0b,0c,0d",
sip:function(a){this.d=H.k(a,"$isf6",[P.m],"$asf6")},
kx:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kt:function(a){this.c=a.b
this.d.R(0,a.a)
return!1}},eH:{"^":"cB;x,y,c,d,e,a,0b"},j6:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
be:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ao(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.u()
v=b.b
u=this.ch
if(typeof v!=="number")return v.u()
t=new V.ab(y.a+x*w,y.b+v*u)
u=this.a.gb1()
s=new X.bC(a,V.aP(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
d9:function(a,b){this.r=a.a
return!1},
br:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.fG()
if(typeof z!=="number")return z.c6()
this.r=(z&~y)>>>0
return!1},
bq:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.be(a,b))
return!0},
ky:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gb1()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.u()
t=a.b
s=this.cy
if(typeof t!=="number")return t.u()
w=new X.dj(new V.V(v*u,t*s),y,x,new P.ao(w,!1),this)
w.b=!0
z.F(w)
return!0},
i7:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ao(Date.now(),!1)
y=this.f
x=new X.eH(c,a,this.a.gb1(),b,z,this)
x.b=!0
y.F(x)
this.y=z
this.x=V.aP()}},aH:{"^":"a;a,b,c",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aH))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bC:{"^":"cB;x,y,z,Q,ch,c,d,e,a,0b"},jl:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
cn:function(a,b,c){var z,y,x
z=new P.ao(Date.now(),!1)
y=this.a.gb1()
x=new X.bC(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
d9:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.F(this.cn(a,b,!0))
return!0},
br:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.fG()
if(typeof z!=="number")return z.c6()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.F(this.cn(a,b,!0))
return!0},
bq:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.cn(a,b,!1))
return!0},
kz:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gb1()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.u()
u=a.b
t=this.ch
if(typeof u!=="number")return u.u()
x=new X.dj(new V.V(w*v,u*t),y,b,new P.ao(x,!1),this)
x.b=!0
z.F(x)
return!0},
geA:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
gc4:function(){var z=this.c
if(z==null){z=D.E()
this.c=z}return z},
gf8:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z}},dj:{"^":"cB;x,c,d,e,a,0b"},cB:{"^":"w;"},fo:{"^":"cB;x,y,z,Q,ch,c,d,e,a,0b"},kz:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
be:function(a,b){var z,y,x,w
H.k(a,"$isb",[V.ab],"$asb")
z=new P.ao(Date.now(),!1)
y=a.length>0?a[0]:V.aP()
x=this.a.gb1()
w=new X.fo(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
kw:function(a){var z
H.k(a,"$isb",[V.ab],"$asb")
z=this.b
if(z==null)return!1
z.F(this.be(a,!0))
return!0},
ku:function(a){var z
H.k(a,"$isb",[V.ab],"$asb")
z=this.c
if(z==null)return!1
z.F(this.be(a,!0))
return!0},
kv:function(a){var z
H.k(a,"$isb",[V.ab],"$asb")
z=this.d
if(z==null)return!1
z.F(this.be(a,!1))
return!0}},kY:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
shy:function(a){this.z=H.k(a,"$isb",[[P.dq,P.a]],"$asb")},
gb1:function(){var z=this.a
return V.f2(0,0,C.q.ges(z).c,C.q.ges(z).d)},
dN:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eC(z,new X.aH(y,a.altKey,a.shiftKey))},
aZ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aH(y,a.altKey,a.shiftKey)},
cE:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aH(y,a.altKey,a.shiftKey)},
aK:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=z.top
if(typeof x!=="number")return x.L()
return new V.ab(y-w,x-v)},
bh:function(a){return new V.V(a.movementX,a.movementY)},
cA:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.ab])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
t=C.j.a5(u.pageX)
C.j.a5(u.pageY)
s=z.left
C.j.a5(u.pageX)
C.a.h(y,new V.ab(t-s,C.j.a5(u.pageY)-z.top))}return y},
aI:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.eb(z,new X.aH(y,a.altKey,a.shiftKey))},
cr:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.L()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
la:[function(a){this.f=!0},"$1","gi3",4,0,12],
l4:[function(a){this.f=!1},"$1","ghY",4,0,12],
l7:[function(a){H.d(a,"$isad")
if(this.f&&this.cr(a))a.preventDefault()},"$1","gi0",4,0,4],
lc:[function(a){var z
H.d(a,"$isbB")
if(!this.f)return
z=this.dN(a)
this.b.kx(z)},"$1","gi5",4,0,23],
lb:[function(a){var z
H.d(a,"$isbB")
if(!this.f)return
z=this.dN(a)
this.b.kt(z)},"$1","gi4",4,0,23],
le:[function(a){var z,y,x,w
H.d(a,"$isad")
z=this.a
z.focus()
this.f=!0
this.aZ(a)
if(this.x){y=this.aI(a)
x=this.bh(a)
if(this.d.d9(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aI(a)
w=this.aK(a)
if(this.c.d9(y,w))a.preventDefault()},"$1","gi8",4,0,4],
lg:[function(a){var z,y,x
H.d(a,"$isad")
this.aZ(a)
z=this.aI(a)
if(this.x){y=this.bh(a)
if(this.d.br(z,y))a.preventDefault()
return}if(this.r)return
x=this.aK(a)
if(this.c.br(z,x))a.preventDefault()},"$1","gia",4,0,4],
l9:[function(a){var z,y,x
H.d(a,"$isad")
if(!this.cr(a)){this.aZ(a)
z=this.aI(a)
if(this.x){y=this.bh(a)
if(this.d.br(z,y))a.preventDefault()
return}if(this.r)return
x=this.aK(a)
if(this.c.br(z,x))a.preventDefault()}},"$1","gi2",4,0,4],
lf:[function(a){var z,y,x
H.d(a,"$isad")
this.aZ(a)
z=this.aI(a)
if(this.x){y=this.bh(a)
if(this.d.bq(z,y))a.preventDefault()
return}if(this.r)return
x=this.aK(a)
if(this.c.bq(z,x))a.preventDefault()},"$1","gi9",4,0,4],
l8:[function(a){var z,y,x
H.d(a,"$isad")
if(!this.cr(a)){this.aZ(a)
z=this.aI(a)
if(this.x){y=this.bh(a)
if(this.d.bq(z,y))a.preventDefault()
return}if(this.r)return
x=this.aK(a)
if(this.c.bq(z,x))a.preventDefault()}},"$1","gi1",4,0,4],
lh:[function(a){var z,y
H.d(a,"$isbJ")
this.aZ(a)
z=new V.V((a&&C.N).gjP(a),C.N.gjQ(a)).B(0,180)
if(this.x){if(this.d.ky(z))a.preventDefault()
return}if(this.r)return
y=this.aK(a)
if(this.c.kz(z,y))a.preventDefault()},"$1","gib",4,0,47],
li:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aI(this.y)
x=this.aK(this.y)
this.d.i7(y,x,z)}},"$1","gic",4,0,12],
lq:[function(a){var z
H.d(a,"$isbi")
this.a.focus()
this.f=!0
this.cE(a)
z=this.cA(a)
if(this.e.kw(z))a.preventDefault()},"$1","gim",4,0,11],
lo:[function(a){var z
H.d(a,"$isbi")
this.cE(a)
z=this.cA(a)
if(this.e.ku(z))a.preventDefault()},"$1","gik",4,0,11],
lp:[function(a){var z
H.d(a,"$isbi")
this.cE(a)
z=this.cA(a)
if(this.e.kv(z))a.preventDefault()},"$1","gil",4,0,11]}}],["","",,D,{"^":"",cq:{"^":"a;0a,0b,0c,0d",
gt:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z},
aU:[function(a){var z
H.d(a,"$isw")
z=this.d
if(!(z==null))z.F(a)},function(){return this.aU(null)},"kW","$1","$0","gh5",0,2,0],
$isa5:1,
$isaI:1},a5:{"^":"a;",$isaI:1},iV:{"^":"W;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
shw:function(a){this.e=H.k(a,"$isb",[D.cq],"$asb")},
sio:function(a){this.f=H.k(a,"$isb",[D.eX],"$asb")},
siR:function(a){this.r=H.k(a,"$isb",[D.fa],"$asb")},
sj2:function(a){this.x=H.k(a,"$isb",[D.fh],"$asb")},
sj3:function(a){this.y=H.k(a,"$isb",[D.fi],"$asb")},
sj4:function(a){this.z=H.k(a,"$isb",[D.fj],"$asb")},
gt:function(){var z=this.Q
if(z==null){z=D.E()
this.Q=z}return z},
aU:function(a){var z=this.Q
if(!(z==null))z.F(a)},
i6:[function(a){var z
H.d(a,"$isw")
z=this.ch
if(!(z==null))z.F(a)},function(){return this.i6(null)},"ld","$1","$0","ge0",0,2,0],
lj:[function(a){var z,y,x
H.k(a,"$isn",[D.a5],"$asn")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.A)(a),++y){x=a[y]
if(x==null||this.h4(x))return!1}return!0},"$1","gie",4,0,39],
l1:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a5
H.k(b,"$isn",[z],"$asn")
for(y=b.length,x=this.ge0(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=H.d(b[u],"$isa5")
if(t instanceof D.cq)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bz()
s.sap(null)
s.sbg(null)
s.c=null
s.d=0
t.d=s}H.l(x,w)
if(s.a==null)s.sap(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.c1(a,b,this,[z])
z.b=!0
this.aU(z)},"$2","ghV",8,0,19],
ll:[function(a,b){var z,y,x,w
z=D.a5
H.k(b,"$isn",[z],"$asn")
for(y=b.gT(b),x=this.ge0();y.C();){w=y.gJ()
C.a.R(this.e,w)
w.gt().R(0,x)}z=new D.c2(a,b,this,[z])
z.b=!0
this.aU(z)},"$2","gih",8,0,19],
h4:function(a){var z=C.a.a_(this.e,a)
return z},
$asn:function(){return[D.a5]},
$asW:function(){return[D.a5]}},eX:{"^":"a;",$isa5:1,$isaI:1},fa:{"^":"a;",$isa5:1,$isaI:1},fh:{"^":"a;",$isa5:1,$isaI:1},fi:{"^":"a;",$isa5:1,$isaI:1},fj:{"^":"a;",$isa5:1,$isaI:1}}],["","",,V,{"^":"",
nC:[function(a,b){if(typeof b!=="number")return b.L()
if(typeof a!=="number")return H.z(a)
return Math.abs(b-a)<=1e-9},"$2","jj",8,0,37],
nx:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.bA(a-b,z)
return(a<0?a+z:a)+b},
P:function(a,b,c){if(a==null)return C.c.aO("null",c)
return C.c.aO(C.j.fk($.p.$2(a,0)?0:a,b),c+b+1)},
bq:function(a,b,c){var z,y,x,w,v,u
H.k(a,"$isb",[P.y],"$asb")
z=H.c([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.A)(a),++w){v=V.P(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.q(z,u,C.c.aO(z[u],x))}return z},
bU:function(a,b){return C.j.kQ(Math.pow(b,C.Z.d0(Math.log(H.mU(a))/Math.log(b))))},
a3:{"^":"a;a,b,c",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
aN:{"^":"a;a,b,c,d",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aN))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
dh:{"^":"a;a,b,c,d,e,f,r,x,y",
a8:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.y])
return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dh))return!1
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
z=[P.y]
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
return s+(z+w[2]+"]")},
p:{
eM:function(){var z=$.eL
if(z==null){z=new V.dh(1,0,0,0,1,0,0,0,1)
$.eL=z}return z}}},
ap:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a8:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.y])
return z},
d5:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.p.$2(a2,0))return V.b2()
a3=1/a2
a4=-w
a5=-i
return V.aG((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
u:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.d(a7,"$isap")
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
return V.aG(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
dk:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.R(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
by:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.a6(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ap))return!1
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
i:function(a){return this.Y()},
eY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.y]
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
Y:function(){return this.eY("",3,0)},
I:function(a){return this.eY(a,3,0)},
p:{
b2:function(){var z=$.eP
if(z==null){z=V.aG(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eP=z}return z},
aG:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ap(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eO:function(a,b,c,d){return V.aG(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eN:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.B(0,Math.sqrt(c.E(c)))
y=b.aN(z)
x=y.B(0,Math.sqrt(y.E(y)))
w=z.aN(x)
v=new V.R(a.a,a.b,a.c)
u=x.V(0).E(v)
t=w.V(0).E(v)
s=z.V(0).E(v)
return V.aG(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
ab:{"^":"a;a,b",
L:function(a,b){return new V.ab(this.a-b.a,this.b-b.b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"},
p:{
aP:function(){var z=$.eY
if(z==null){z=new V.ab(0,0)
$.eY=z}return z}}},
a6:{"^":"a;a,b,c",
K:function(a,b){return new V.a6(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.a6(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.a6(this.a*b,this.b*b,this.c*b)},
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
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"},
p:{
eZ:function(){var z=$.bD
if(z==null){z=new V.a6(0,0,0)
$.bD=z}return z}}},
c8:{"^":"a;a,b,c,d",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c8))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
f1:{"^":"a;a,b,c,d",
gal:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f1))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"},
p:{
f4:function(){var z=$.f3
if(z==null){z=V.f2(0,0,1,1)
$.f3=z}return z},
f2:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f1(a,b,c,d)}}},
V:{"^":"a;a,b",
kf:[function(a){return Math.sqrt(this.E(this))},"$0","gn",1,0,18],
E:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.u()
if(typeof y!=="number")return H.z(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.u()
if(typeof w!=="number")return H.z(w)
return z*y+x*w},
u:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.V(z*b,y*b)},
B:function(a,b){var z,y
if($.p.$2(b,0)){z=$.fG
if(z==null){z=new V.V(0,0)
$.fG=z}return z}z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
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
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
R:{"^":"a;a,b,c",
kf:[function(a){return Math.sqrt(this.E(this))},"$0","gn",1,0,18],
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aN:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.R(z*y-x*w,x*v-u*y,u*w-z*v)},
K:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
V:function(a){return new V.R(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.R(this.a*b,this.b*b,this.c*b)},
B:function(a,b){if($.p.$2(b,0))return V.bG()
return new V.R(this.a/b,this.b/b,this.c/b)},
f6:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"},
p:{
bG:function(){var z=$.fK
if(z==null){z=new V.R(0,0,0)
$.fK=z}return z},
fL:function(){var z=$.fJ
if(z==null){z=new V.R(0,1,0)
$.fJ=z}return z},
fM:function(){var z=$.cI
if(z==null){z=new V.R(0,0,1)
$.cI=z}return z}}}}],["","",,U,{"^":"",i1:{"^":"ed;0a,0b,0c,0d,0e,0f,0r,0x,0y",
cj:function(a){var z=V.nx(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z},
X:function(a){var z=this.y
if(!(z==null))z.F(a)},
sdn:function(a,b){},
sd6:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.cj(z)}z=new D.I("maximumLocation",y,this.b,this,[P.y])
z.b=!0
this.X(z)}},
sd8:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.cj(z)}z=new D.I("minimumLocation",y,this.c,this,[P.y])
z.b=!0
this.X(z)}},
sak:function(a,b){var z,y
b=this.cj(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.I("location",y,b,this,[P.y])
z.b=!0
this.X(z)}},
sd7:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.I("maximumVelocity",y,a,this,[P.y])
z.b=!0
this.X(z)}},
sZ:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.I("velocity",x,a,this,[P.y])
z.b=!0
this.X(z)}},
scR:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.I("dampening",y,a,this,[P.y])
z.b=!0
this.X(z)}},
aj:function(a){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sak(0,this.d+y*a)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sZ(y)}},
p:{
d6:function(){var z=new U.i1()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ef:{"^":"ah;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
ba:function(a,b){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ef))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")},
p:{
eg:function(a){var z=new U.ef()
z.a=a
return z}}},ex:{"^":"W;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
X:[function(a){var z
H.d(a,"$isw")
z=this.e
if(!(z==null))z.F(a)},function(){return this.X(null)},"au","$1","$0","gaY",0,2,0],
l0:[function(a,b){var z,y,x,w,v,u,t,s
z=U.ah
H.k(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gaY(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.l(x,w)
if(s.a==null)s.sap(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.X(z)},"$2","ghU",8,0,17],
lk:[function(a,b){var z,y,x
z=U.ah
H.k(b,"$isn",[z],"$asn")
for(y=b.gT(b),x=this.gaY();y.C();)y.gJ().gt().R(0,x)
z=new D.c2(a,b,this,[z])
z.b=!0
this.X(z)},"$2","gig",8,0,17],
ba:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.U()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aw(z,z.length,0,[H.q(z,0)]),x=null;z.C();){y=z.d
if(y!=null){w=y.ba(a,b)
if(w!=null)x=x==null?w:w.u(0,x)}}this.f=x==null?V.b2():x
z=this.e
if(!(z==null))z.aR()}return this.f},
A:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ex))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.O(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asn:function(){return[U.ah]},
$asW:function(){return[U.ah]},
$isah:1},ah:{"^":"ed;"},kZ:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.cy
if(z==null){z=D.E()
this.cy=z}return z},
X:[function(a){var z
H.d(a,"$isw")
z=this.cy
if(!(z==null))z.F(a)},function(){return this.X(null)},"au","$1","$0","gaY",0,2,0],
bj:function(a){if(this.a!=null)return!1
this.a=a
a.c.geA().h(0,this.gcs())
this.a.c.gf8().h(0,this.gct())
this.a.c.gc4().h(0,this.gcu())
return!0},
hQ:[function(a){H.d(a,"$isw")
if(!J.O(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gcs",4,0,1],
hR:[function(a){var z,y,x,w,v,u,t
a=H.h(H.d(a,"$isw"),"$isbC")
if(!this.y)return
if(this.x){z=a.d.L(0,a.y)
z=new V.V(z.a,z.b)
z=z.E(z)
y=this.r
if(typeof y!=="number")return H.z(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.L(0,a.y)
z=new V.V(y.a,y.b).u(0,2).B(0,z.gal())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.u()
x=this.e
if(typeof x!=="number")return H.z(x)
y.sZ(z*10*x)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=new V.V(x.a,x.b).u(0,2).B(0,z.gal())
x=this.b
v=w.a
if(typeof v!=="number")return v.V()
u=this.e
if(typeof u!=="number")return H.z(u)
t=this.z
if(typeof t!=="number")return H.z(t)
x.sak(0,-v*u+t)
this.b.sZ(0)
y=y.L(0,a.z)
this.Q=new V.V(y.a,y.b).u(0,2).B(0,z.gal())}this.au()},"$1","gct",4,0,1],
hS:[function(a){var z,y,x
H.d(a,"$isw")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.E(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.u()
x=this.e
if(typeof x!=="number")return H.z(x)
z.sZ(y*10*x)
this.au()}},"$1","gcu",4,0,1],
ba:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.U()
if(z<y){this.ch=y
x=a.y
this.b.aj(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aG(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isah:1},l_:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.E()
this.fx=z}return z},
X:[function(a){var z
H.d(a,"$isw")
z=this.fx
if(!(z==null))z.F(a)},function(){return this.X(null)},"au","$1","$0","gaY",0,2,0],
bj:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.geA().h(0,this.gcs())
this.a.c.gf8().h(0,this.gct())
this.a.c.gc4().h(0,this.gcu())
z=this.a.d
y=z.f
if(y==null){y=D.E()
z.f=y
z=y}else z=y
z.h(0,this.ghO())
z=this.a.d
y=z.d
if(y==null){y=D.E()
z.d=y
z=y}else z=y
z.h(0,this.ghP())
z=this.a.e
y=z.b
if(y==null){y=D.E()
z.b=y
z=y}else z=y
z.h(0,this.gj0())
z=this.a.e
y=z.d
if(y==null){y=D.E()
z.d=y
z=y}else z=y
z.h(0,this.gj_())
z=this.a.e
y=z.c
if(y==null){y=D.E()
z.c=y
z=y}else z=y
z.h(0,this.giZ())
return!0},
az:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.V()
z=-z}if(this.r){if(typeof y!=="number")return y.V()
y=-y}return new V.V(z,y)},
hQ:[function(a){a=H.h(H.d(a,"$isw"),"$isbC")
if(!J.O(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gcs",4,0,1],
hR:[function(a){var z,y,x,w,v,u,t
a=H.h(H.d(a,"$isw"),"$isbC")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.V(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.z(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.az(new V.V(y.a,y.b).u(0,2).B(0,z.gal()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.V()
x=this.y
if(typeof x!=="number")return H.z(x)
y.sZ(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.V()
y=this.x
if(typeof y!=="number")return H.z(y)
x.sZ(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.az(new V.V(x.a,x.b).u(0,2).B(0,z.gal()))
x=this.c
v=w.a
if(typeof v!=="number")return v.V()
u=this.y
if(typeof u!=="number")return H.z(u)
t=this.cy
if(typeof t!=="number")return H.z(t)
x.sak(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.V()
v=this.x
if(typeof v!=="number")return H.z(v)
x=this.db
if(typeof x!=="number")return H.z(x)
t.sak(0,-u*v+x)
this.b.sZ(0)
this.c.sZ(0)
y=y.L(0,a.z)
this.dx=this.az(new V.V(y.a,y.b).u(0,2).B(0,z.gal()))}this.au()},"$1","gct",4,0,1],
hS:[function(a){var z,y,x
H.d(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.V()
x=this.y
if(typeof x!=="number")return H.z(x)
z.sZ(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.V()
z=this.x
if(typeof z!=="number")return H.z(z)
x.sZ(-y*10*z)
this.au()}},"$1","gcu",4,0,1],
kY:[function(a){if(H.h(H.d(a,"$isw"),"$iseH").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ghO",4,0,1],
kZ:[function(a){var z,y,x,w,v,u,t
a=H.h(H.d(a,"$isw"),"$isbC")
if(!J.O(this.d,a.x.b))return
z=a.c
y=a.d
x=y.L(0,a.y)
w=this.az(new V.V(x.a,x.b).u(0,2).B(0,z.gal()))
x=this.c
v=w.a
if(typeof v!=="number")return v.V()
u=this.y
if(typeof u!=="number")return H.z(u)
t=this.cy
if(typeof t!=="number")return H.z(t)
x.sak(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.V()
v=this.x
if(typeof v!=="number")return H.z(v)
x=this.db
if(typeof x!=="number")return H.z(x)
t.sak(0,-u*v+x)
this.b.sZ(0)
this.c.sZ(0)
y=y.L(0,a.z)
this.dx=this.az(new V.V(y.a,y.b).u(0,2).B(0,z.gal()))
this.au()},"$1","ghP",4,0,1],
lu:[function(a){H.d(a,"$isw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gj0",4,0,1],
lt:[function(a){var z,y,x,w,v,u,t
a=H.h(H.d(a,"$isw"),"$isfo")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.V(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.z(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.az(new V.V(y.a,y.b).u(0,2).B(0,z.gal()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.V()
x=this.y
if(typeof x!=="number")return H.z(x)
y.sZ(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.V()
y=this.x
if(typeof y!=="number")return H.z(y)
x.sZ(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.az(new V.V(x.a,x.b).u(0,2).B(0,z.gal()))
x=this.c
v=w.a
if(typeof v!=="number")return v.V()
u=this.y
if(typeof u!=="number")return H.z(u)
t=this.cy
if(typeof t!=="number")return H.z(t)
x.sak(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.V()
v=this.x
if(typeof v!=="number")return H.z(v)
x=this.db
if(typeof x!=="number")return H.z(x)
t.sak(0,-u*v+x)
this.b.sZ(0)
this.c.sZ(0)
y=y.L(0,a.z)
this.dx=this.az(new V.V(y.a,y.b).u(0,2).B(0,z.gal()))}this.au()},"$1","gj_",4,0,1],
ls:[function(a){var z,y,x
H.d(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.V()
x=this.y
if(typeof x!=="number")return H.z(x)
z.sZ(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.V()
z=this.x
if(typeof z!=="number")return H.z(z)
x.sZ(-y*10*z)
this.au()}},"$1","giZ",4,0,1],
ba:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.U()
if(z<y){this.dy=y
x=a.y
this.c.aj(x)
this.b.aj(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aG(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.u(0,V.aG(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isah:1},l0:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.E()
this.r=z}return z},
X:function(a){var z=this.r
if(!(z==null))z.F(a)},
bj:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.E()
z.e=y
z=y}else z=y
y=this.ghT()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.E()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
l_:[function(a){var z,y,x,w
H.d(a,"$isw")
if(!J.O(this.b,this.a.b.c))return
H.h(a,"$isdj")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.u()
w=z+y*x
if(z!==w){this.d=w
z=new D.I("zoom",z,w,this,[P.y])
z.b=!0
this.X(z)}},"$1","ghT",4,0,1],
ba:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.eO(x,x,x,1)}return this.f},
$isah:1}}],["","",,M,{"^":"",i2:{"^":"W;0e,0f,0a,0b,0c,0d",
gt:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
a7:[function(a){var z
H.d(a,"$isw")
z=this.f
if(!(z==null))z.F(a)},function(){return this.a7(null)},"dC","$1","$0","ga1",0,2,0],
lm:[function(a,b){var z,y,x,w,v,u,t,s
z=M.aK
H.k(b,"$isn",[z],"$asn")
for(y=b.length,x=this.ga1(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.l(x,w)
if(s.a==null)s.sap(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.a7(z)},"$2","gii",8,0,15],
ln:[function(a,b){var z,y,x
z=M.aK
H.k(b,"$isn",[z],"$asn")
for(y=b.gT(b),x=this.ga1();y.C();)y.gJ().gt().R(0,x)
z=new D.c2(a,b,this,[z])
z.b=!0
this.a7(z)},"$2","gij",8,0,15],
ah:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.aw(z,z.length,0,[H.q(z,0)]);z.C();){y=z.d
if(!(y==null))y.ah(a)}this.e=!1},
$asn:function(){return[M.aK]},
$asW:function(){return[M.aK]},
$isaK:1},i7:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
a7:[function(a){var z
H.d(a,"$isw")
z=this.f
if(!(z==null))z.F(a)},function(){return this.a7(null)},"dC","$1","$0","ga1",0,2,0],
sbl:function(a){var z,y
if(a==null)a=new X.iL()
z=this.a
if(z!==a){if(z!=null)z.gt().R(0,this.ga1())
y=this.a
this.a=a
a.gt().h(0,this.ga1())
z=new D.I("camera",y,this.a,this,[X.co])
z.b=!0
this.a7(z)}},
sbu:function(a,b){var z,y
if(b==null)b=X.ew(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gt().R(0,this.ga1())
y=this.b
this.b=b
b.gt().h(0,this.ga1())
z=new D.I("target",y,this.b,this,[X.cE])
z.b=!0
this.a7(z)}},
sb9:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gt().R(0,this.ga1())
y=this.c
this.c=a
if(a!=null)a.gt().h(0,this.ga1())
z=new D.I("technique",y,this.c,this,[O.bf])
z.b=!0
this.a7(z)}},
ah:function(a){var z
a.dc(this.c)
this.b.a2(a)
this.a.a2(a)
z=this.c
if(z!=null)z.aj(a)
this.d.aj(a)
this.d.ah(a)
this.a.an(a)
this.b.an(a)
a.da()},
$isaK:1,
p:{
eh:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=new M.i7()
z.sbl(a)
z.sbu(0,b)
z.sb9(c)
y=E.eu(null,!0,null,"",null,null)
x=F.f8()
w=x.a
v=new V.R(-1,-1,1)
v=v.B(0,Math.sqrt(v.E(v)))
u=w.bI(new V.c8(1,2,4,6),new V.aN(1,0,0,1),new V.a6(-1,-1,0),new V.ab(0,1),v,null)
w=x.a
v=new V.R(1,-1,1)
v=v.B(0,Math.sqrt(v.E(v)))
t=w.bI(new V.c8(0,3,4,6),new V.aN(0,0,1,1),new V.a6(1,-1,0),new V.ab(1,1),v,null)
w=x.a
v=new V.R(1,1,1)
v=v.B(0,Math.sqrt(v.E(v)))
s=w.bI(new V.c8(0,2,5,6),new V.aN(0,1,0,1),new V.a6(1,1,0),new V.ab(1,0),v,null)
w=x.a
v=V.aP()
r=new V.R(-1,1,1)
r=r.B(0,Math.sqrt(r.E(r)))
q=w.bI(new V.c8(0,2,4,7),new V.aN(1,1,0,1),new V.a6(-1,1,0),v,r,null)
x.d.ju(H.c([u,t,s,q],[F.aq]))
x.aM()
y.scc(0,x)
z.d=y
z.e=null
return z}}},is:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
shq:function(a,b){this.d=H.k(b,"$isW",[E.ax],"$asW")},
a7:[function(a){var z
H.d(a,"$isw")
z=this.x
if(!(z==null))z.F(a)},function(){return this.a7(null)},"dC","$1","$0","ga1",0,2,0],
l5:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ax
H.k(b,"$isn",[z],"$asn")
for(y=b.length,x=this.ga1(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.gat()==null){s=new D.bz()
s.sap(null)
s.sbg(null)
s.c=null
s.d=0
t.sat(s)}s=t.gat()
s.toString
H.l(x,w)
if(s.a==null)s.sap(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.a7(z)},"$2","ghZ",8,0,8],
l6:[function(a,b){var z,y,x
z=E.ax
H.k(b,"$isn",[z],"$asn")
for(y=b.gT(b),x=this.ga1();y.C();)y.gJ().gt().R(0,x)
z=new D.c2(a,b,this,[z])
z.b=!0
this.a7(z)},"$2","gi_",8,0,8],
sbl:function(a){var z,y
if(a==null)a=X.eV(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gt().R(0,this.ga1())
y=this.a
this.a=a
a.gt().h(0,this.ga1())
z=new D.I("camera",y,this.a,this,[X.co])
z.b=!0
this.a7(z)}},
sbu:function(a,b){var z,y
if(b==null)b=X.ew(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gt().R(0,this.ga1())
y=this.b
this.b=b
b.gt().h(0,this.ga1())
z=new D.I("target",y,this.b,this,[X.cE])
z.b=!0
this.a7(z)}},
sb9:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gt().R(0,this.ga1())
y=this.c
this.c=a
if(a!=null)a.gt().h(0,this.ga1())
z=new D.I("technique",y,this.c,this,[O.bf])
z.b=!0
this.a7(z)}},
gt:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
ah:function(a){var z
a.dc(this.c)
this.b.a2(a)
this.a.a2(a)
z=this.c
if(z!=null)z.aj(a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.q(z,0)]);z.C();)z.d.aj(a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.q(z,0)]);z.C();)z.d.ah(a)
this.a.toString
a.cy.aP()
a.db.aP()
this.b.an(a)
a.da()},
$isaK:1},aK:{"^":"a;"}}],["","",,A,{"^":"",e5:{"^":"a;a,b,c"},hR:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
jU:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
C.b.eB(w.a,w.c)}},
cT:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
C.b.ey(w.a,w.c)}}},ep:{"^":"ca;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,a,b,0c,0d,0e,0f,0r,0x,0y",
ae:function(a,b,c){if(c==null||!c.d)C.b.N(b.a,b.d,1)
else{a.fL(c)
C.b.N(b.a,b.d,0)}}},eK:{"^":"ca;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aC,0aw,0bM,0eC,0bN,0bO,0eD,0eE,0bP,0bQ,0eF,0eG,0bR,0bS,0eH,0eI,0bT,0eJ,0eK,0bU,0eL,0eM,0bV,0bW,0bX,0eN,0eO,0bY,0bZ,0eP,0eQ,0c_,0eR,0cV,0eS,0cW,0eT,0cX,0eU,0cY,0eV,0cZ,0eW,0d_,a,b,0c,0d,0e,0f,0r,0x,0y",
shl:function(a){this.r1=H.k(a,"$isb",[A.aj],"$asb")},
sh6:function(a){this.cV=H.k(a,"$isb",[A.dy],"$asb")},
sh7:function(a){this.cW=H.k(a,"$isb",[A.dz],"$asb")},
sh8:function(a){this.cX=H.k(a,"$isb",[A.dA],"$asb")},
sh9:function(a){this.cY=H.k(a,"$isb",[A.dB],"$asb")},
sha:function(a){this.cZ=H.k(a,"$isb",[A.dC],"$asb")},
shb:function(a){this.d_=H.k(a,"$isb",[A.dD],"$asb")},
fW:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
a1.j8(z)
a1.jf(z)
a1.j9(z)
a1.jn(z)
a1.jo(z)
a1.jh(z)
a1.js(z)
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
v.jc(z)
v.j7(z)
v.ja(z)
v.jd(z)
v.jl(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.jj(z)
v.jk(z)}v.jg(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
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
p=H.c([],[P.i])
if(v.b!==C.d)C.a.h(p,"ambient()")
if(v.c!==C.d)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.d)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.d)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.l(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.jb(z)
v.ji(z)
v.jm(z)
v.jp(z)
v.jq(z)
v.jr(z)
v.je(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.i])
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
this.d2(x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.h(this.y.m(0,"invViewMat"),"$isaj")
if(y)this.dy=H.h(this.y.m(0,"objMat"),"$isaj")
if(w)this.fr=H.h(this.y.m(0,"viewObjMat"),"$isaj")
this.fy=H.h(this.y.m(0,"projViewObjMat"),"$isaj")
if(a1.x2)this.k1=H.h(this.y.m(0,"txt2DMat"),"$iscc")
if(a1.y1)this.k2=H.h(this.y.m(0,"txtCubeMat"),"$isaj")
if(a1.y2)this.k3=H.h(this.y.m(0,"colorMat"),"$isaj")
this.shl(H.c([],[A.aj]))
y=a1.aC
if(y>0){this.k4=H.d(this.y.m(0,"bendMatCount"),"$isG")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.r(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.h(l,"$isaj"))}}y=a1.a
if(y!==C.d){this.r2=H.h(this.y.m(0,"emissionClr"),"$isH")
switch(y){case C.d:break
case C.i:break
case C.f:this.rx=H.h(this.y.m(0,"emissionTxt"),"$isaf")
this.x1=H.h(this.y.m(0,"nullEmissionTxt"),"$isG")
break
case C.h:this.ry=H.h(this.y.m(0,"emissionTxt"),"$isak")
this.x1=H.h(this.y.m(0,"nullEmissionTxt"),"$isG")
break}}y=a1.b
if(y!==C.d){this.x2=H.h(this.y.m(0,"ambientClr"),"$isH")
switch(y){case C.d:break
case C.i:break
case C.f:this.y1=H.h(this.y.m(0,"ambientTxt"),"$isaf")
this.aC=H.h(this.y.m(0,"nullAmbientTxt"),"$isG")
break
case C.h:this.y2=H.h(this.y.m(0,"ambientTxt"),"$isak")
this.aC=H.h(this.y.m(0,"nullAmbientTxt"),"$isG")
break}}y=a1.c
if(y!==C.d){this.aw=H.h(this.y.m(0,"diffuseClr"),"$isH")
switch(y){case C.d:break
case C.i:break
case C.f:this.bM=H.h(this.y.m(0,"diffuseTxt"),"$isaf")
this.bN=H.h(this.y.m(0,"nullDiffuseTxt"),"$isG")
break
case C.h:this.eC=H.h(this.y.m(0,"diffuseTxt"),"$isak")
this.bN=H.h(this.y.m(0,"nullDiffuseTxt"),"$isG")
break}}y=a1.d
if(y!==C.d){this.bO=H.h(this.y.m(0,"invDiffuseClr"),"$isH")
switch(y){case C.d:break
case C.i:break
case C.f:this.eD=H.h(this.y.m(0,"invDiffuseTxt"),"$isaf")
this.bP=H.h(this.y.m(0,"nullInvDiffuseTxt"),"$isG")
break
case C.h:this.eE=H.h(this.y.m(0,"invDiffuseTxt"),"$isak")
this.bP=H.h(this.y.m(0,"nullInvDiffuseTxt"),"$isG")
break}}y=a1.e
if(y!==C.d){this.bS=H.h(this.y.m(0,"shininess"),"$isX")
this.bQ=H.h(this.y.m(0,"specularClr"),"$isH")
switch(y){case C.d:break
case C.i:break
case C.f:this.eF=H.h(this.y.m(0,"specularTxt"),"$isaf")
this.bR=H.h(this.y.m(0,"nullSpecularTxt"),"$isG")
break
case C.h:this.eG=H.h(this.y.m(0,"specularTxt"),"$isak")
this.bR=H.h(this.y.m(0,"nullSpecularTxt"),"$isG")
break}}switch(a1.f){case C.d:break
case C.i:break
case C.f:this.eH=H.h(this.y.m(0,"bumpTxt"),"$isaf")
this.bT=H.h(this.y.m(0,"nullBumpTxt"),"$isG")
break
case C.h:this.eI=H.h(this.y.m(0,"bumpTxt"),"$isak")
this.bT=H.h(this.y.m(0,"nullBumpTxt"),"$isG")
break}if(a1.dy){this.eJ=H.h(this.y.m(0,"envSampler"),"$isak")
this.eK=H.h(this.y.m(0,"nullEnvTxt"),"$isG")
y=a1.r
if(y!==C.d){this.bU=H.h(this.y.m(0,"reflectClr"),"$isH")
switch(y){case C.d:break
case C.i:break
case C.f:this.eL=H.h(this.y.m(0,"reflectTxt"),"$isaf")
this.bV=H.h(this.y.m(0,"nullReflectTxt"),"$isG")
break
case C.h:this.eM=H.h(this.y.m(0,"reflectTxt"),"$isak")
this.bV=H.h(this.y.m(0,"nullReflectTxt"),"$isG")
break}}y=a1.x
if(y!==C.d){this.bW=H.h(this.y.m(0,"refraction"),"$isX")
this.bX=H.h(this.y.m(0,"refractClr"),"$isH")
switch(y){case C.d:break
case C.i:break
case C.f:this.eN=H.h(this.y.m(0,"refractTxt"),"$isaf")
this.bY=H.h(this.y.m(0,"nullRefractTxt"),"$isG")
break
case C.h:this.eO=H.h(this.y.m(0,"refractTxt"),"$isak")
this.bY=H.h(this.y.m(0,"nullRefractTxt"),"$isG")
break}}}y=a1.y
if(y!==C.d){this.bZ=H.h(this.y.m(0,"alpha"),"$isX")
switch(y){case C.d:break
case C.i:break
case C.f:this.eP=H.h(this.y.m(0,"alphaTxt"),"$isaf")
this.c_=H.h(this.y.m(0,"nullAlphaTxt"),"$isG")
break
case C.h:this.eQ=H.h(this.y.m(0,"alphaTxt"),"$isak")
this.c_=H.h(this.y.m(0,"nullAlphaTxt"),"$isG")
break}}this.sh6(H.c([],[A.dy]))
this.sh7(H.c([],[A.dz]))
this.sh8(H.c([],[A.dA]))
this.sh9(H.c([],[A.dB]))
this.sha(H.c([],[A.dC]))
this.shb(H.c([],[A.dD]))
if(a1.k2){y=a1.z
if(y>0){this.eR=H.d(this.y.m(0,"dirLightCount"),"$isG")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isH")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isH")
x=this.cV;(x&&C.a).h(x,new A.dy(m,l,k))}}y=a1.Q
if(y>0){this.eS=H.d(this.y.m(0,"pntLightCount"),"$isG")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isH")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isH")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isH")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isX")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isX")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isX")
x=this.cW;(x&&C.a).h(x,new A.dz(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.eT=H.d(this.y.m(0,"spotLightCount"),"$isG")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isH")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isH")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isH")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isH")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isX")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isX")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isX")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isX")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isX")
x=this.cX;(x&&C.a).h(x,new A.dA(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.eU=H.d(this.y.m(0,"txtDirLightCount"),"$isG")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isH")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isH")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isH")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isH")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isH")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isG")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isaf")
x=this.cY;(x&&C.a).h(x,new A.dB(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.eV=H.d(this.y.m(0,"txtPntLightCount"),"$isG")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isH")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isH")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$iscc")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isH")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isG")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isX")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isX")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isX")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isak")
x=this.cZ;(x&&C.a).h(x,new A.dC(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.eW=H.d(this.y.m(0,"txtSpotLightCount"),"$isG")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isH")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isH")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isH")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isH")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isH")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isG")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isH")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isX")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isX")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isX")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(b,"$isX")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a,"$isX")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a0,"$isaf")
x=this.d_;(x&&C.a).h(x,new A.dD(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ae:function(a,b,c){C.b.N(b.a,b.d,1)},
aq:function(a,b,c){C.b.N(b.a,b.d,1)},
p:{
jd:function(a,b){var z,y
z=a.aw
y=new A.eK(b,z)
y.cf(b,z)
y.fW(a,b)
return y}}},jg:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aC,aw,bM",
j8:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aC+"];\n"
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
jf:function(a){var z
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
j9:function(a){var z
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
jn:function(a){var z,y
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
jo:function(a){var z,y
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
jh:function(a){var z
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
js:function(a){var z
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
aJ:function(a,b,c){var z
if(b===C.d)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.c.ay(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
jc:function(a){var z,y
z=this.a
if(z===C.d)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aJ(a,z,"emission")
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
j7:function(a){var z,y
z=this.b
if(z===C.d)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aJ(a,z,"ambient")
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
ja:function(a){var z,y
z=this.c
if(z===C.d)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aJ(a,z,"diffuse")
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
jd:function(a){var z,y
z=this.d
if(z===C.d)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aJ(a,z,"invDiffuse")
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
jl:function(a){var z,y
z=this.e
if(z===C.d)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aJ(a,z,"specular")
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
jg:function(a){var z,y
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
jj:function(a){var z,y
z=this.r
if(z===C.d)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aJ(a,z,"reflect")
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
jk:function(a){var z,y
z=this.x
if(z===C.d)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aJ(a,z,"refract")
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
jb:function(a){var z,y
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
ji:function(a){var z,y
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
jm:function(a){var z,y
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
jp:function(a){var z,y,x
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
jq:function(a){var z,y,x
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
jr:function(a){var z,y,x
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
je:function(a){var z
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
i:function(a){return this.aw}},dy:{"^":"a;a,b,c"},dB:{"^":"a;a,b,c,d,e,f,r,x"},dz:{"^":"a;a,b,c,d,e,f,r"},dC:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dA:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dD:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},ca:{"^":"d_;",
cf:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
d2:function(a,b){var z,y,x
this.c=a
this.d=b
this.e=this.dO(a,35633)
this.f=this.dO(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
C.b.ej(z,y,this.e)
C.b.ej(z,this.r,this.f)
C.b.kg(z,this.r)
if(!H.dS(C.b.c9(z,this.r,35714))){x=C.b.fB(z,this.r)
C.b.jN(z,this.r)
H.r(P.u("Failed to link shader: "+H.j(x)))}this.iM()
this.iO()},
a2:function(a){C.b.c5(a.a,this.r)
this.x.jU()},
dO:function(a,b){var z,y,x
z=this.a
y=C.b.jL(z,b)
C.b.fN(z,y,a)
C.b.jF(z,y)
if(!H.dS(C.b.fE(z,y,35713))){x=C.b.fD(z,y)
C.b.jO(z,y)
throw H.e(P.u("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
iM:function(){var z,y,x,w,v,u
z=H.c([],[A.e5])
y=this.a
x=H.a1(C.b.c9(y,this.r,35721))
if(typeof x!=="number")return H.z(x)
w=0
for(;w<x;++w){v=C.b.fu(y,this.r,w)
u=C.b.fw(y,this.r,v.name)
C.a.h(z,new A.e5(y,v.name,u))}this.x=new A.hR(z)},
iO:function(){var z,y,x,w,v,u
z=H.c([],[A.ae])
y=this.a
x=H.a1(C.b.c9(y,this.r,35718))
if(typeof x!=="number")return H.z(x)
w=0
for(;w<x;++w){v=C.b.fv(y,this.r,w)
u=C.b.fF(y,this.r,v.name)
C.a.h(z,this.jM(v.type,v.size,v.name,u))}this.y=new A.kK(z)},
aW:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.G(z,y,b,c)
else return A.dx(z,y,b,a,c)},
ht:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.af(z,y,b,c)
else return A.dx(z,y,b,a,c)},
hu:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ak(z,y,b,c)
else return A.dx(z,y,b,a,c)},
bG:function(a,b){return new P.fV(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
jM:function(a,b,c,d){switch(a){case 5120:return this.aW(b,c,d)
case 5121:return this.aW(b,c,d)
case 5122:return this.aW(b,c,d)
case 5123:return this.aW(b,c,d)
case 5124:return this.aW(b,c,d)
case 5125:return this.aW(b,c,d)
case 5126:return new A.X(this.a,this.r,c,d)
case 35664:return new A.kF(this.a,this.r,c,d)
case 35665:return new A.H(this.a,this.r,c,d)
case 35666:return new A.kI(this.a,this.r,c,d)
case 35667:return new A.kG(this.a,this.r,c,d)
case 35668:return new A.kH(this.a,this.r,c,d)
case 35669:return new A.kJ(this.a,this.r,c,d)
case 35674:return new A.kM(this.a,this.r,c,d)
case 35675:return new A.cc(this.a,this.r,c,d)
case 35676:return new A.aj(this.a,this.r,c,d)
case 35678:return this.ht(b,c,d)
case 35680:return this.hu(b,c,d)
case 35670:throw H.e(this.bG("BOOL",c))
case 35671:throw H.e(this.bG("BOOL_VEC2",c))
case 35672:throw H.e(this.bG("BOOL_VEC3",c))
case 35673:throw H.e(this.bG("BOOL_VEC4",c))
default:throw H.e(P.u("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},cp:{"^":"a;a,b",
i:function(a){return this.b}},f9:{"^":"ca;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},ae:{"^":"a;"},kK:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.e(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.Y()},
k5:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w)x+=z[w].i(0)+a
return x},
Y:function(){return this.k5("\n")}},G:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},kG:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},kH:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},kJ:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},kE:{"^":"ae;0e,0f,a,b,c,d",
sj5:function(a){this.e=H.k(a,"$isb",[P.m],"$asb")},
i:function(a){return"Uniform1iv: "+H.j(this.c)},
p:{
dx:function(a,b,c,d,e){var z=new A.kE(a,b,c,e)
z.f=d
z.sj5(P.j3(d,0,!1,P.m))
return z}}},X:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},kF:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},H:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},kI:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},kM:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},cc:{"^":"ae;a,b,c,d",
aa:function(a){var z=new Float32Array(H.bl(H.k(a,"$isb",[P.y],"$asb")))
C.b.fm(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},aj:{"^":"ae;a,b,c,d",
aa:function(a){var z=new Float32Array(H.bl(H.k(a,"$isb",[P.y],"$asb")))
C.b.fn(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},af:{"^":"ae;a,b,c,d",
fL:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)C.b.N(y,x,0)
else C.b.N(y,x,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ak:{"^":"ae;a,b,c,d",
fM:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)C.b.N(y,x,0)
else C.b.N(y,x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
nu:function(a,b,c,d){return F.mZ(c,a,d,b,new F.nv())},
mZ:function(a,b,c,d,e){var z=F.ns(a,b,new F.n_(H.l(e,{func:1,ret:V.a6,args:[P.y]}),d,b,c),null)
if(z==null)return
z.aM()
z.km(new F.le(),new F.jr())
return z},
ns:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.aq,P.y,P.y]})
if(a<1)return
if(b<1)return
z=F.f8()
y=H.c([],[F.aq])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cJ(null,null,new V.aN(u,0,0,1),null,null,new V.ab(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.ev(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cJ(null,null,new V.aN(o,n,m,1),null,null,new V.ab(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.ev(d))}}z.d.jv(a+1,b+1,y)
return z},
nv:{"^":"o:45;",
$1:function(a){return new V.a6(Math.cos(a),Math.sin(a),0)}},
n_:{"^":"o:46;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.e1(y.$1(z),x)
x=J.e1(y.$1(z+3.141592653589793/this.c),x).L(0,w)
x=new V.R(x.a,x.b,x.c)
v=x.B(0,Math.sqrt(x.E(x)))
y=$.fI
if(y==null){y=new V.R(1,0,0)
$.fI=y
u=y}else u=y
y=v.aN(!J.O(v,u)?V.fM():u)
t=y.B(0,Math.sqrt(y.E(y)))
y=t.aN(v)
u=y.B(0,Math.sqrt(y.E(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.u(0,y*x)
x=t.u(0,r*x)
x=w.K(0,new V.a6(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.O(a.f,x)){a.f=x
y=a.a
if(y!=null)y.am()}}},
a9:{"^":"a;0a,0b,0c,0d,0e",
bn:function(){if(!this.gez()){C.a.R(this.a.a.d.b,this)
this.a.a.am()}this.iv()
this.iw()
this.ix()},
iJ:function(a){this.a=a
C.a.h(a.d.b,this)},
iK:function(a){this.b=a
C.a.h(a.d.c,this)},
iL:function(a){this.c=a
C.a.h(a.d.d,this)},
iv:function(){var z=this.a
if(z!=null){C.a.R(z.d.b,this)
this.a=null}},
iw:function(){var z=this.b
if(z!=null){C.a.R(z.d.c,this)
this.b=null}},
ix:function(){var z=this.c
if(z!=null){C.a.R(z.d.d,this)
this.c=null}},
gez:function(){return this.a==null||this.b==null||this.c==null},
hk:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bG()
if(y!=null)v=v.K(0,y)
if(x!=null)v=v.K(0,x)
if(w!=null)v=v.K(0,w)
if(v.f6())return
return v.B(0,Math.sqrt(v.E(v)))},
hp:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.L(0,y)
z=new V.R(z.a,z.b,z.c)
v=z.B(0,Math.sqrt(z.E(z)))
z=w.L(0,y)
z=new V.R(z.a,z.b,z.c)
z=v.aN(z.B(0,Math.sqrt(z.E(z))))
return z.B(0,Math.sqrt(z.E(z)))},
cO:function(){if(this.d!=null)return!0
var z=this.hk()
if(z==null){z=this.hp()
if(z==null)return!1}this.d=z
this.a.a.am()
return!0},
hj:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bG()
if(y!=null)v=v.K(0,y)
if(x!=null)v=v.K(0,x)
if(w!=null)v=v.K(0,w)
if(v.f6())return
return v.B(0,Math.sqrt(v.E(v)))},
ho:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.p.$2(n,0)){z=r.L(0,u)
z=new V.R(z.a,z.b,z.c)
m=z.B(0,Math.sqrt(z.E(z)))
if(o.a-p.a<0)m=m.V(0)}else{l=(z-q.b)/n
z=r.L(0,u).u(0,l).K(0,u).L(0,x)
z=new V.R(z.a,z.b,z.c)
m=z.B(0,Math.sqrt(z.E(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.V(0)}z=this.d
if(z!=null){k=z.B(0,Math.sqrt(z.E(z)))
z=k.aN(m)
z=z.B(0,Math.sqrt(z.E(z))).aN(k)
m=z.B(0,Math.sqrt(z.E(z)))}return m},
cM:function(){if(this.e!=null)return!0
var z=this.hj()
if(z==null){z=this.ho()
if(z==null)return!1}this.e=z
this.a.a.am()
return!0},
gjE:function(a){if(J.O(this.a,this.b))return!0
if(J.O(this.b,this.c))return!0
if(J.O(this.c,this.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.Y()},
I:function(a){var z,y
if(this.gez())return a+"disposed"
z=a+C.c.aO(J.av(this.a.e),0)+", "+C.c.aO(J.av(this.b.e),0)+", "+C.c.aO(J.av(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
Y:function(){return this.I("")},
p:{
bZ:function(a,b,c){var z,y,x
z=new F.a9()
y=a.a
if(y==null)H.r(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.u("May not create a face with vertices attached to different shapes."))
z.iJ(a)
z.iK(b)
z.iL(c)
C.a.h(z.a.a.d.b,z)
z.a.a.am()
return z}}},
iw:{"^":"a;"},
k9:{"^":"iw;",
bp:function(a,b,c){var z,y
z=b.a
z.a.a.H()
z=z.e
y=c.a
y.a.a.H()
if(z==y.e){z=b.b
z.a.a.H()
z=z.e
y=c.b
y.a.a.H()
if(z==y.e){z=b.c
z.a.a.H()
z=z.e
y=c.c
y.a.a.H()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.H()
z=z.e
y=c.b
y.a.a.H()
if(z==y.e){z=b.b
z.a.a.H()
z=z.e
y=c.c
y.a.a.H()
if(z==y.e){z=b.c
z.a.a.H()
z=z.e
y=c.a
y.a.a.H()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.H()
z=z.e
y=c.c
y.a.a.H()
if(z==y.e){z=b.b
z.a.a.H()
z=z.e
y=c.a
y.a.a.H()
if(z==y.e){z=b.c
z.a.a.H()
z=z.e
y=c.b
y.a.a.H()
y=z==y.e
z=y}else z=!1
return z}else return!1}}}},
c6:{"^":"a;"},
iW:{"^":"a;"},
kD:{"^":"iW;",
bp:function(a,b,c){var z,y
z=b.a
z.a.a.H()
z=z.e
y=c.a
y.a.a.H()
if(z==y.e){z=b.b
z.a.a.H()
z=z.e
y=c.b
y.a.a.H()
return z==y.e}else{z=b.a
z.a.a.H()
z=z.e
y=c.b
y.a.a.H()
if(z==y.e){z=b.b
z.a.a.H()
z=z.e
y=c.a
y.a.a.H()
return z==y.e}else return!1}}},
cA:{"^":"a;"},
f7:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
aM:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aM()||!1
if(!this.a.aM())y=!1
z=this.e
if(!(z==null))z.aR()
return y},
km:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.q(z,0)])
for(z=[F.aq];y.length!==0;){x=C.a.gjY(y)
C.a.kD(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.A)(y),++u){t=y[u]
if(t!=null&&a.bp(0,x,t)){C.a.h(w,t)
C.a.R(y,t)}}if(w.length>1)b.kl(w)}}this.a.H()
this.c.df()
this.d.df()
this.b.kE()
this.c.dg(new F.kD())
this.d.dg(new F.k9())
z=this.e
if(!(z==null))z.aR()},
cL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$al()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aU().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$aB().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
if((x&$.$get$bH().a)!==0)++w
if((x&$.$get$bI().a)!==0)++w
if((x&$.$get$bj().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
v=b.gdw(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.y
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.ea])
for(r=0,q=0;q<w;++q){p=b.jz(q)
o=p.gdw(p)
C.a.q(s,q,new Z.ea(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].kh(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.q(t,l,m[k]);++l}}r+=o}H.k(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.aA(y,34962,j)
C.b.em(y,34962,new Float32Array(H.bl(t)),35044)
C.b.aA(y,34962,null)
i=new Z.cn(new Z.fQ(34962,j),s,b)
i.shI(H.c([],[Z.cu]))
this.b.b
if(this.c.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.H()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.H()
C.a.h(h,g.e)}f=Z.fR(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.cu(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.H()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.H()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.H()
C.a.h(h,g.e)}f=Z.fR(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.cu(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.I("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.I("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.I("   "))}return C.a.l(z,"\n")},
b7:function(a){var z=this.e
if(!(z==null))z.F(a)},
am:function(){return this.b7(null)},
$isnP:1,
p:{
f8:function(){var z,y
z=new F.f7()
y=new F.l9(z)
y.b=!1
y.sj6(H.c([],[F.aq]))
z.a=y
y=new F.k3(z)
y.scz(H.c([],[F.cA]))
z.b=y
y=new F.k2(z)
y.shK(H.c([],[F.c6]))
z.c=y
y=new F.k1(z)
y.shz(H.c([],[F.a9]))
z.d=y
z.e=null
return z}}},
k1:{"^":"a;a,0b",
shz:function(a){this.b=H.k(a,"$isb",[F.a9],"$asb")},
ju:function(a){var z,y,x,w,v,u
H.k(a,"$isb",[F.aq],"$asb")
z=H.c([],[F.a9])
y=a[0]
for(x=this.a,w=2;w<4;++w){v=a[w-1]
u=a[w]
x.a.h(0,y)
x.a.h(0,v)
x.a.h(0,u)
C.a.h(z,F.bZ(y,v,u))}return z},
jv:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,"$isb",[F.aq],"$asb")
z=H.c([],[F.a9])
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
C.a.h(z,F.bZ(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bZ(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bZ(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bZ(p,m,q))}t=!t}v=!v}return z},
gn:function(a){return this.b.length},
dg:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.j(0,v)
for(t=v-1;t>=0;--t){s=w.d.j(0,t)
if(a.bp(0,u,s)){u.bn()
break}}}}},
df:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.gjE(x)
if(y)x.bn()}},
aM:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].cO())x=!1
return x},
cN:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].cM())x=!1
return x},
i:function(a){return this.Y()},
I:function(a){var z,y,x,w
z=H.c([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].I(a))
return C.a.l(z,"\n")},
Y:function(){return this.I("")}},
k2:{"^":"a;a,0b",
shK:function(a){this.b=H.k(a,"$isb",[F.c6],"$asb")},
gn:function(a){return this.b.length},
dg:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.j(0,v)
for(t=v-1;t>=0;--t){s=w.c.j(0,t)
if(a.bp(0,u,s)){u.bn()
break}}}}},
df:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.O(x.a,x.b)
if(y)x.bn()}},
i:function(a){return this.Y()},
I:function(a){var z,y,x,w
z=H.c([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].I(a+(""+x+". ")))}return C.a.l(z,"\n")},
Y:function(){return this.I("")}},
k3:{"^":"a;a,0b",
scz:function(a){this.b=H.k(a,"$isb",[F.cA],"$asb")},
gn:function(a){return 0},
kE:function(){var z,y
for(z=-1;!1;--z){y=this.b
return H.f(y,z)
y=y[z].glH()
y=y.glE(y)
if(y.gn(y).ca(0,1)){y=this.b
return H.f(y,z)
y[z].bn()}}},
i:function(a){return this.Y()},
I:function(a){var z,y,x
z=H.c([],[P.i])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.f(y,x)
C.a.h(z,y[x].I(a))}return C.a.l(z,"\n")},
Y:function(){return this.I("")}},
aq:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
ev:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cJ(this.cx,x,u,z,y,w,v,a,t)},
kh:function(a){var z,y
if(a.A(0,$.$get$al())){z=this.f
y=[P.y]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$aU())){z=this.r
y=[P.y]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$aT())){z=this.x
y=[P.y]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$aB())){z=this.y
y=[P.y]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.A(0,$.$get$aV())){z=this.z
y=[P.y]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$bH())){z=this.Q
y=[P.y]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$bI())){z=this.Q
y=[P.y]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.A(0,$.$get$bj()))return H.c([this.ch],[P.y])
else if(a.A(0,$.$get$aS())){z=this.cx
y=[P.y]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.y])},
cO:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bG()
this.d.S(0,new F.lj(z))
z=z.a
this.r=z.B(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.am()
z=this.a.e
if(!(z==null))z.aR()}return!0},
cM:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bG()
this.d.S(0,new F.li(z))
z=z.a
this.x=z.B(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.am()
z=this.a.e
if(!(z==null))z.aR()}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.Y()},
I:function(a){var z,y,x
z=H.c([],[P.i])
C.a.h(z,C.c.aO(J.av(this.e),0))
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
C.a.h(z,V.P(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.l(z,", ")
return a+"{"+x+"}"},
Y:function(){return this.I("")},
p:{
cJ:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aq()
y=new F.lh(z)
y.scz(H.c([],[F.cA]))
z.b=y
y=new F.ld(z)
x=[F.c6]
y.shL(H.c([],x))
y.shM(H.c([],x))
z.c=y
y=new F.la(z)
x=[F.a9]
y.shA(H.c([],x))
y.shB(H.c([],x))
y.shC(H.c([],x))
z.d=y
h=$.$get$fN()
z.e=0
y=$.$get$al()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aU().a)!==0?e:null
z.x=(x&$.$get$aT().a)!==0?b:null
z.y=(x&$.$get$aB().a)!==0?f:null
z.z=(x&$.$get$aV().a)!==0?g:null
z.Q=(x&$.$get$fO().a)!==0?c:null
z.ch=(x&$.$get$bj().a)!==0?i:0
z.cx=(x&$.$get$aS().a)!==0?a:null
return z}}},
lj:{"^":"o:5;a",
$1:function(a){var z,y
H.d(a,"$isa9")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.K(0,z)}}},
li:{"^":"o:5;a",
$1:function(a){var z,y
H.d(a,"$isa9")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.K(0,z)}}},
l9:{"^":"a;a,0b,0c",
sj6:function(a){this.c=H.k(a,"$isb",[F.aq],"$asb")},
H:function(){var z,y,x,w
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
y.am()
return!0},
jw:function(a,b,c,d,e,f,g,h,i){var z=F.cJ(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bI:function(a,b,c,d,e,f){return this.jw(a,null,b,c,null,d,e,f,0)},
gn:function(a){return this.c.length},
aM:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].cO()
return!0},
cN:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].cM()
return!0},
jD:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.B(0,Math.sqrt(u*u+t*t+s*s))
if(!J.O(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.F(null)}}}}return!0},
i:function(a){return this.Y()},
I:function(a){var z,y,x,w
this.H()
z=H.c([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].I(a))
return C.a.l(z,"\n")},
Y:function(){return this.I("")}},
la:{"^":"a;a,0b,0c,0d",
shA:function(a){this.b=H.k(a,"$isb",[F.a9],"$asb")},
shB:function(a){this.c=H.k(a,"$isb",[F.a9],"$asb")},
shC:function(a){this.d=H.k(a,"$isb",[F.a9],"$asb")},
gn:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
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
S:function(a,b){H.l(b,{func:1,ret:-1,args:[F.a9]})
C.a.S(this.b,b)
C.a.S(this.c,new F.lb(this,b))
C.a.S(this.d,new F.lc(this,b))},
i:function(a){return this.Y()},
I:function(a){var z,y,x,w
z=H.c([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].I(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].I(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].I(a))
return C.a.l(z,"\n")},
Y:function(){return this.I("")}},
lb:{"^":"o:5;a,b",
$1:function(a){H.d(a,"$isa9")
if(!J.O(a.a,this.a))this.b.$1(a)}},
lc:{"^":"o:5;a,b",
$1:function(a){var z
H.d(a,"$isa9")
z=this.a
if(!J.O(a.a,z)&&!J.O(a.b,z))this.b.$1(a)}},
ld:{"^":"a;a,0b,0c",
shL:function(a){this.b=H.k(a,"$isb",[F.c6],"$asb")},
shM:function(a){this.c=H.k(a,"$isb",[F.c6],"$asb")},
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.Y()},
I:function(a){var z,y,x,w
z=H.c([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].I(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].I(a))
return C.a.l(z,"\n")},
Y:function(){return this.I("")}},
lf:{"^":"a;"},
le:{"^":"lf;",
bp:function(a,b,c){return J.O(b.f,c.f)}},
lg:{"^":"a;"},
jr:{"^":"lg;",
kl:function(a){var z,y,x,w,v,u,t,s,r
H.k(a,"$isb",[F.aq],"$asb")
z=V.bG()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.R(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.B(0,Math.sqrt(z.E(z)))
for(y=a.length,w=z==null,x=0;x<a.length;a.length===y||(0,H.A)(a),++x){v=a[x]
if(w)u=null
else{t=z.a
s=z.b
r=z.c
u=z.B(0,Math.sqrt(t*t+s*s+r*r))}if(!J.O(v.r,u)){v.r=u
t=v.a
if(t!=null){t=t.e
if(!(t==null))t.F(null)}}}return}},
lh:{"^":"a;a,0b",
scz:function(a){this.b=H.k(a,"$isb",[F.cA],"$asb")},
gn:function(a){return 0},
i:function(a){return this.Y()},
I:function(a){var z,y,x
z=H.c([],[P.i])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.f(y,x)
C.a.h(z,y[x].I(a))}return C.a.l(z,"\n")},
Y:function(){return this.I("")}}}],["","",,O,{"^":"",ie:{"^":"bf;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.E()
this.r=z}return z},
a9:function(a){var z=this.r
if(!(z==null))z.F(a)},
aH:function(){return this.a9(null)},
seu:function(a){var z=this.b
if(z==null?a!=null:z!==a){this.b=a
this.aH()}},
seo:function(a){var z=this.c
if(z==null?a!=null:z!==a){this.c=a
this.aH()}},
sen:function(a){var z=a==null?V.b2():a
this.f=z
if(!J.O(z,a)){this.f=a
this.aH()}},
aj:function(a){},
W:function(a,b){H.k(a,"$isb",[T.bF],"$asb")
if(b!=null)if(!C.a.a_(a,b)){b.a=a.length
C.a.h(a,b)}},
dh:function(a,b){var z,y,x,w,v,u,t
if(this.a==null){z=H.d(a.fr.j(0,"Distort"),"$isep")
if(z==null){y=a.a
z=new A.ep(y,"Distort")
z.cf(y,"Distort")
z.d2($.ih,$.ig)
z.z=z.x.j(0,"posAttr")
z.Q=z.x.j(0,"txt2DAttr")
z.ch=H.h(z.y.m(0,"projViewObjMat"),"$isaj")
z.cx=H.h(z.y.m(0,"colorTxt2DMat"),"$iscc")
z.cy=H.h(z.y.m(0,"bumpTxt2DMat"),"$iscc")
z.db=H.h(z.y.m(0,"colorTxt"),"$isaf")
z.dx=H.h(z.y.m(0,"bumpTxt"),"$isaf")
z.dy=H.h(z.y.m(0,"nullColorTxt"),"$isG")
z.fr=H.h(z.y.m(0,"nullBumpTxt"),"$isG")
z.fx=H.h(z.y.m(0,"bumpMat"),"$isaj")
a.cF(z)}this.a=z}if(b.e==null){y=b.d
x=$.$get$al()
w=$.$get$aB()
w=y.cL(new Z.dH(a.a),new Z.b4(x.a|w.a))
w.ax($.$get$al()).e=this.a.z.c
w.ax($.$get$aB()).e=this.a.Q.c
b.e=w}v=H.c([],[T.bF])
this.W(v,this.b)
this.W(v,this.c)
for(y=a.a,u=0;u<v.length;++u){x=v[u]
if(!x.c&&x.d){x.c=!0
C.b.bH(y,33984+x.a)
C.b.a6(y,3553,x.b)}}x=this.a
x.a2(a)
w=this.b
x.ae(x.db,x.dy,w)
w=this.c
x.ae(x.dx,x.fr,w)
w=a.gfe()
t=x.ch
t.toString
t.aa(w.a8(0,!0))
w=this.d
t=x.cx
t.toString
t.aa(w.a8(0,!0))
w=this.e
t=x.cy
t.toString
t.aa(w.a8(0,!0))
w=this.f
x=x.fx
x.toString
x.aa(w.a8(0,!0))
x=b.e
if(x instanceof Z.cn){x.a2(a)
x.ah(a)
x.an(a)}else b.e=null
x=this.a
x.toString
C.b.c5(y,null)
x.x.cT()
for(u=0;u<v.length;++u){x=v[u]
if(x.c){x.c=!1
C.b.bH(y,33984+x.a)
C.b.a6(y,3553,null)}}}},jc:{"^":"bf;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
shm:function(a){this.e=H.k(a,"$isW",[V.ap],"$asW")},
gt:function(){var z=this.dy
if(z==null){z=D.E()
this.dy=z}return z},
a9:[function(a){var z
H.d(a,"$isw")
z=this.dy
if(!(z==null))z.F(a)},function(){return this.a9(null)},"aH","$1","$0","gcg",0,2,0],
iD:[function(a){H.d(a,"$isw")
this.a=null
this.a9(a)},function(){return this.iD(null)},"lr","$1","$0","giC",0,2,0],
l2:[function(a,b){var z=V.ap
z=new D.c1(a,H.k(b,"$isn",[z],"$asn"),this,[z])
z.b=!0
this.a9(z)},"$2","ghW",8,0,14],
l3:[function(a,b){var z=V.ap
z=new D.c2(a,H.k(b,"$isn",[z],"$asn"),this,[z])
z.b=!0
this.a9(z)},"$2","ghX",8,0,14],
dL:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.e.ac(z.e.length+3,4)*4
x=C.e.ac(z.f.length+3,4)*4
w=C.e.ac(z.r.length+3,4)*4
v=C.e.ac(z.x.length+3,4)*4
u=C.e.ac(z.y.length+3,4)*4
t=C.e.ac(z.z.length+3,4)*4
s=C.e.ac(this.e.a.length+3,4)*4
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
a2=$.$get$al()
if(e){g=$.$get$aU()
a2=new Z.b4(a2.a|g.a)}if(d){g=$.$get$aT()
a2=new Z.b4(a2.a|g.a)}if(c){g=$.$get$aB()
a2=new Z.b4(a2.a|g.a)}if(b){g=$.$get$aV()
a2=new Z.b4(a2.a|g.a)}if(a0){g=$.$get$aS()
a2=new Z.b4(a2.a|g.a)}return new A.jg(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
W:function(a,b){H.k(a,"$isb",[T.bF],"$asb")},
aj:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.aw(z,z.length,0,[H.q(z,0)]);z.C();){y=z.d
y.toString
x=$.cI
if(x==null){x=new V.R(0,0,1)
$.cI=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.dk(x)}}},
dh:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dL()
y=H.d(a.fr.j(0,z.aw),"$iseK")
if(y==null){y=A.jd(z,a.a)
a.cF(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bM
z=b.e
if(!(z instanceof Z.cn)){b.e=null
z=null}if(z==null||!z.d.A(0,w)){z=x.r1
if(z)b.d.aM()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cN()
u.a.cN()
u=u.e
if(!(u==null))u.aR()}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.jD()
t=t.e
if(!(t==null))t.aR()}r=b.d.cL(new Z.dH(a.a),w)
r.ax($.$get$al()).e=this.a.Q.c
if(z)r.ax($.$get$aU()).e=this.a.cx.c
if(v)r.ax($.$get$aT()).e=this.a.ch.c
if(x.rx)r.ax($.$get$aB()).e=this.a.cy.c
if(u)r.ax($.$get$aV()).e=this.a.db.c
if(x.x1)r.ax($.$get$aS()).e=this.a.dx.c
b.e=r}z=T.bF
q=H.c([],[z])
this.a.a2(a)
if(x.fx){v=this.a
u=a.dx.ga4()
v=v.dy
v.toString
v.aa(u.a8(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db.ga4().u(0,a.dx.ga4())
a.cx=u}v=v.fr
v.toString
v.aa(u.a8(0,!0))}v=this.a
u=a.gfe()
v=v.fy
v.toString
v.aa(u.a8(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.aa(C.r.a8(u,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.aa(C.r.a8(u,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.aa(C.r.a8(u,!0))}if(x.aC>0){p=this.e.a.length
v=this.a.k4
C.b.N(v.a,v.d,p)
for(v=[P.y],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.f(t,o)
t=t[o]
u.toString
H.d(t,"$isap")
u=u.r1
if(o>=u.length)return H.f(u,o)
u=u[o]
n=new Float32Array(H.bl(H.k(t.a8(0,!0),"$isb",v,"$asb")))
C.b.fn(u.a,u.d,!1,n)}}switch(x.a){case C.d:break
case C.i:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
C.b.w(v.a,v.d,t,s,u)
break
case C.f:this.W(q,this.f.d)
v=this.a
u=this.f.d
v.ae(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
C.b.w(u.a,u.d,t,s,v)
break
case C.h:this.W(q,this.f.e)
v=this.a
u=this.f.e
v.aq(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
C.b.w(u.a,u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.d:break
case C.i:v=this.a
u=this.r.f
v=v.x2
v.toString
t=u.a
s=u.b
u=u.c
C.b.w(v.a,v.d,t,s,u)
break
case C.f:this.W(q,this.r.d)
v=this.a
u=this.r.d
v.ae(v.y1,v.aC,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.w(u.a,u.d,t,s,v)
break
case C.h:this.W(q,this.r.e)
v=this.a
u=this.r.e
v.aq(v.y2,v.aC,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.w(u.a,u.d,t,s,v)
break}switch(x.c){case C.d:break
case C.i:v=this.a
u=this.x.f
v=v.aw
v.toString
t=u.a
s=u.b
u=u.c
C.b.w(v.a,v.d,t,s,u)
break
case C.f:this.W(q,this.x.d)
v=this.a
u=this.x.d
v.ae(v.bM,v.bN,u)
u=this.a
v=this.x.f
u=u.aw
u.toString
t=v.a
s=v.b
v=v.c
C.b.w(u.a,u.d,t,s,v)
break
case C.h:this.W(q,this.x.e)
v=this.a
u=this.x.e
v.aq(v.eC,v.bN,u)
u=this.a
v=this.x.f
u=u.aw
u.toString
t=v.a
s=v.b
v=v.c
C.b.w(u.a,u.d,t,s,v)
break}switch(x.d){case C.d:break
case C.i:v=this.a
u=this.y.f
v=v.bO
v.toString
t=u.a
s=u.b
u=u.c
C.b.w(v.a,v.d,t,s,u)
break
case C.f:this.W(q,this.y.d)
v=this.a
u=this.y.d
v.ae(v.eD,v.bP,u)
u=this.a
v=this.y.f
u=u.bO
u.toString
t=v.a
s=v.b
v=v.c
C.b.w(u.a,u.d,t,s,v)
break
case C.h:this.W(q,this.y.e)
v=this.a
u=this.y.e
v.aq(v.eE,v.bP,u)
u=this.a
v=this.y.f
u=u.bO
u.toString
t=v.a
s=v.b
v=v.c
C.b.w(u.a,u.d,t,s,v)
break}switch(x.e){case C.d:break
case C.i:v=this.a
u=this.z.f
v=v.bQ
v.toString
t=u.a
s=u.b
u=u.c
C.b.w(v.a,v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bS
C.b.M(u.a,u.d,s)
break
case C.f:this.W(q,this.z.d)
v=this.a
u=this.z.d
v.ae(v.eF,v.bR,u)
u=this.a
v=this.z.f
u=u.bQ
u.toString
t=v.a
s=v.b
v=v.c
C.b.w(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bS
C.b.M(v.a,v.d,s)
break
case C.h:this.W(q,this.z.e)
v=this.a
u=this.z.e
v.aq(v.eG,v.bR,u)
u=this.a
v=this.z.f
u=u.bQ
u.toString
t=v.a
s=v.b
v=v.c
C.b.w(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bS
C.b.M(v.a,v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.eR
C.b.N(v.a,v.d,p)
m=a.db.ga4()
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.cV
if(l>=t.length)return H.f(t,l)
i=t[l]
t=m.dk(j.a)
s=t.a
h=t.b
g=t.c
g=t.B(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
s=g.a
t=g.b
g=g.c
C.b.w(h.a,h.d,s,t,g)
g=j.c
t=i.c
C.b.w(t.a,t.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.eS
C.b.N(v.a,v.d,p)
m=a.db.ga4()
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.cW
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbs(j)
s=i.b
h=t.gdq(t)
g=t.gdr(t)
t=t.gds(t)
C.b.w(s.a,s.d,h,g,t)
t=m.by(j.gbs(j))
g=i.c
C.b.w(g.a,g.d,t.a,t.b,t.c)
t=j.gaB(j)
g=i.d
h=t.gc3()
s=t.gbz()
t=t.gbJ()
C.b.w(g.a,g.d,h,s,t)
t=j.gcG()
s=i.e
C.b.M(s.a,s.d,t)
t=j.gcH()
s=i.f
C.b.M(s.a,s.d,t)
t=j.gcI()
s=i.r
C.b.M(s.a,s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.eT
C.b.N(v.a,v.d,p)
m=a.db.ga4()
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.cX
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbs(j)
s=i.b
h=t.gdq(t)
g=t.gdr(t)
t=t.gds(t)
C.b.w(s.a,s.d,h,g,t)
t=j.gcS(j).lz()
g=i.c
h=t.gb2(t)
s=t.gb3(t)
t=t.gb4()
C.b.w(g.a,g.d,h,s,t)
t=m.by(j.gbs(j))
s=i.d
C.b.w(s.a,s.d,t.a,t.b,t.c)
t=j.gaB(j)
s=i.e
h=t.gc3()
g=t.gbz()
t=t.gbJ()
C.b.w(s.a,s.d,h,g,t)
t=j.glx()
g=i.f
C.b.M(g.a,g.d,t)
t=j.glv()
g=i.r
C.b.M(g.a,g.d,t)
t=j.gcG()
g=i.x
C.b.M(g.a,g.d,t)
t=j.gcH()
g=i.y
C.b.M(g.a,g.d,t)
t=j.gcI()
g=i.z
C.b.M(g.a,g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.eU
C.b.N(v.a,v.d,p)
m=a.db.ga4()
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
s=this.a.cY
if(l>=s.length)return H.f(s,l)
i=s[l]
s=j.gbv()
H.k(q,"$isb",t,"$asb")
if(!C.a.a_(q,s)){s.sf3(0,q.length)
C.a.h(q,s)}s=j.gcS(j)
h=i.d
g=s.gb2(s)
f=s.gb3(s)
s=s.gb4()
C.b.w(h.a,h.d,g,f,s)
s=j.gc4()
f=i.b
g=s.gb2(s)
h=s.gb3(s)
s=s.gb4()
C.b.w(f.a,f.d,g,h,s)
s=j.gbt(j)
h=i.c
g=s.gb2(s)
f=s.gb3(s)
s=s.gb4()
C.b.w(h.a,h.d,g,f,s)
s=m.dk(j.gcS(j))
f=s.a
g=s.b
h=s.c
h=s.B(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
f=h.a
s=h.b
h=h.c
C.b.w(g.a,g.d,f,s,h)
h=j.gaB(j)
s=i.f
f=h.gc3()
g=h.gbz()
h=h.gbJ()
C.b.w(s.a,s.d,f,g,h)
h=j.gbv()
s=h.gf7(h)
if(!s){s=i.x
C.b.N(s.a,s.d,1)}else{s=i.r
g=h.gdY()
f=s.a
s=s.d
if(!g)C.b.N(f,s,0)
else C.b.N(f,s,h.gdU())
s=i.x
C.b.N(s.a,s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.eV
C.b.N(v.a,v.d,p)
m=a.db.ga4()
for(v=this.dx.y,u=v.length,t=[P.y],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
h=this.a.cZ
if(l>=h.length)return H.f(h,l)
i=h[l]
h=j.gbv()
H.k(q,"$isb",s,"$asb")
if(!C.a.a_(q,h)){h.sf3(0,q.length)
C.a.h(q,h)}e=m.u(0,j.ga4())
h=j.ga4()
g=$.bD
if(g==null){g=new V.a6(0,0,0)
$.bD=g}g=h.by(g)
h=i.b
f=g.gdq(g)
d=g.gdr(g)
g=g.gds(g)
C.b.w(h.a,h.d,f,d,g)
h=$.bD
if(h==null){h=new V.a6(0,0,0)
$.bD=h}h=e.by(h)
g=i.c
C.b.w(g.a,g.d,h.a,h.b,h.c)
h=e.d5()
g=i.d
n=new Float32Array(H.bl(H.k(new V.dh(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a8(0,!0),"$isb",t,"$asb")))
C.b.fm(g.a,g.d,!1,n)
g=j.gaB(j)
h=i.e
f=g.gc3()
d=g.gbz()
g=g.gbJ()
C.b.w(h.a,h.d,f,d,g)
g=j.gbv()
h=g.gf7(g)
if(!h){h=i.r
C.b.N(h.a,h.d,1)}else{h=i.f
f=g.gdY()
d=h.a
h=h.d
if(!(f>=6))C.b.N(d,h,0)
else C.b.N(d,h,g.gdU())
h=i.r
C.b.N(h.a,h.d,0)}h=j.gcG()
g=i.x
C.b.M(g.a,g.d,h)
h=j.gcH()
g=i.y
C.b.M(g.a,g.d,h)
h=j.gcI()
g=i.z
C.b.M(g.a,g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.eW
C.b.N(v.a,v.d,p)
m=a.db.ga4()
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.d_
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbv()
H.k(q,"$isb",z,"$asb")
if(!C.a.a_(q,t)){t.sf3(0,q.length)
C.a.h(q,t)}t=j.gbs(j)
s=i.b
h=t.gdq(t)
g=t.gdr(t)
t=t.gds(t)
C.b.w(s.a,s.d,h,g,t)
t=j.gcS(j)
g=i.c
h=t.gb2(t)
s=t.gb3(t)
t=t.gb4()
C.b.w(g.a,g.d,h,s,t)
t=j.gc4()
s=i.d
h=t.gb2(t)
g=t.gb3(t)
t=t.gb4()
C.b.w(s.a,s.d,h,g,t)
t=j.gbt(j)
g=i.e
h=t.gb2(t)
s=t.gb3(t)
t=t.gb4()
C.b.w(g.a,g.d,h,s,t)
t=m.by(j.gbs(j))
s=i.f
C.b.w(s.a,s.d,t.a,t.b,t.c)
t=j.gbv()
s=t.gf7(t)
if(!s){t=i.x
C.b.N(t.a,t.d,1)}else{s=i.r
h=t.gdY()
g=s.a
s=s.d
if(!h)C.b.N(g,s,0)
else C.b.N(g,s,t.gdU())
t=i.x
C.b.N(t.a,t.d,0)}t=j.gaB(j)
s=i.y
h=t.gc3()
g=t.gbz()
t=t.gbJ()
C.b.w(s.a,s.d,h,g,t)
t=j.glF()
g=i.z
C.b.M(g.a,g.d,t)
t=j.glG()
g=i.Q
C.b.M(g.a,g.d,t)
t=j.gcG()
g=i.ch
C.b.M(g.a,g.d,t)
t=j.gcH()
g=i.cx
C.b.M(g.a,g.d,t)
t=j.gcI()
g=i.cy
C.b.M(g.a,g.d,t);++l}}}switch(x.f){case C.d:break
case C.i:break
case C.f:this.W(q,this.Q.d)
z=this.a
v=this.Q.d
z.ae(z.eH,z.bT,v)
break
case C.h:this.W(q,this.Q.e)
z=this.a
v=this.Q.e
z.aq(z.eI,z.bT,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db.ga4().d5()
a.Q=v}z=z.id
z.toString
z.aa(v.a8(0,!0))}if(x.dy){this.W(q,this.ch)
z=this.a
v=this.ch
z.aq(z.eJ,z.eK,v)
switch(x.r){case C.d:break
case C.i:z=this.a
v=this.cx.f
z=z.bU
z.toString
u=v.a
t=v.b
v=v.c
C.b.w(z.a,z.d,u,t,v)
break
case C.f:this.W(q,this.cx.d)
z=this.a
v=this.cx.d
z.ae(z.eL,z.bV,v)
v=this.a
z=this.cx.f
v=v.bU
v.toString
u=z.a
t=z.b
z=z.c
C.b.w(v.a,v.d,u,t,z)
break
case C.h:this.W(q,this.cx.e)
z=this.a
v=this.cx.e
z.aq(z.eM,z.bV,v)
v=this.a
z=this.cx.f
v=v.bU
v.toString
u=z.a
t=z.b
z=z.c
C.b.w(v.a,v.d,u,t,z)
break}switch(x.x){case C.d:break
case C.i:z=this.a
v=this.cy.f
z=z.bX
z.toString
u=v.a
t=v.b
v=v.c
C.b.w(z.a,z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bW
C.b.M(v.a,v.d,t)
break
case C.f:this.W(q,this.cy.d)
z=this.a
v=this.cy.d
z.ae(z.eN,z.bY,v)
v=this.a
z=this.cy.f
v=v.bX
v.toString
u=z.a
t=z.b
z=z.c
C.b.w(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bW
C.b.M(z.a,z.d,t)
break
case C.h:this.W(q,this.cy.e)
z=this.a
v=this.cy.e
z.aq(z.eO,z.bY,v)
v=this.a
z=this.cy.f
v=v.bX
v.toString
u=z.a
t=z.b
z=z.c
C.b.w(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bW
C.b.M(z.a,z.d,t)
break}}z=x.y
v=z!==C.d
if(v){switch(z){case C.d:break
case C.i:z=this.a
u=this.db.f
z=z.bZ
C.b.M(z.a,z.d,u)
break
case C.f:this.W(q,this.db.d)
z=this.a
u=this.db.d
z.ae(z.eP,z.c_,u)
u=this.a
z=this.db.f
u=u.bZ
C.b.M(u.a,u.d,z)
break
case C.h:this.W(q,this.db.e)
z=this.a
u=this.db.e
z.aq(z.eQ,z.c_,u)
u=this.a
z=this.db.f
u=u.bZ
C.b.M(u.a,u.d,z)
break}z=a.a
C.b.bo(z,3042)
C.b.jC(z,770,771)}for(o=0;o<q.length;++o)q[o].a2(a)
z=b.e
z.a2(a)
z.ah(a)
z.an(a)
if(v)C.b.jR(a.a,3042)
for(o=0;o<q.length;++o)q[o].an(a)
z=this.a
z.toString
C.b.c5(a.a,null)
z.x.cT()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dL().aw}},je:{"^":"dg;0f,a,b,0c,0d,0e"},dg:{"^":"a;",
bE:["fT",function(){}]},jf:{"^":"dg;a,b,0c,0d,0e"},ba:{"^":"dg;0f,a,b,0c,0d,0e",
e7:function(a){var z,y
if(!J.O(this.f,a)){z=this.f
this.f=a
y=new D.I(this.b+".color",z,a,this,[V.a3])
y.b=!0
this.a.a9(y)}},
bE:["ce",function(){this.fT()
this.e7(new V.a3(1,1,1))}],
saB:function(a,b){var z
if(this.c===C.d){this.c=C.i
this.bE()
z=this.a
z.a=null
z.a9(null)}this.e7(b)}},jh:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
iI:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".refraction",y,a,this,[P.y])
z.b=!0
this.a.a9(z)}},
bE:function(){this.ce()
this.iI(1)}},ji:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
cC:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".shininess",y,a,this,[P.y])
z.b=!0
this.a.a9(z)}},
bE:function(){this.ce()
this.cC(100)}},ka:{"^":"bf;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
a9:[function(a){var z
H.d(a,"$isw")
z=this.e
if(!(z==null))z.F(a)},function(){return this.a9(null)},"aH","$1","$0","gcg",0,2,0],
aj:function(a){},
dh:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.d(a.fr.j(0,"Skybox"),"$isf9")
if(z==null){y=a.a
z=new A.f9(y,"Skybox")
z.cf(y,"Skybox")
z.d2($.kc,$.kb)
z.z=z.x.j(0,"posAttr")
z.Q=H.h(z.y.j(0,"fov"),"$isX")
z.ch=H.h(z.y.j(0,"ratio"),"$isX")
z.cx=H.h(z.y.j(0,"boxClr"),"$isH")
z.cy=H.h(z.y.j(0,"boxTxt"),"$isak")
z.db=H.h(z.y.j(0,"viewMat"),"$isaj")
a.cF(z)}this.a=z}if(b.e==null){y=b.d.cL(new Z.dH(a.a),$.$get$al())
y.ax($.$get$al()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
if(!y.c&&y.d>=6){y.c=!0
x=a.a
C.b.bH(x,33985)
C.b.a6(x,34067,y.b)}}y=a.d
x=a.c
w=this.a
w.a2(a)
v=this.b
u=w.Q
C.b.M(u.a,u.d,v)
v=w.ch
C.b.M(v.a,v.d,y/x)
x=this.c
w.cy.fM(x)
x=this.d
y=w.cx
C.b.w(y.a,y.d,x.a,x.b,x.c)
x=a.db.ga4().d5()
w=w.db
w.toString
w.aa(x.a8(0,!0))
y=b.e
if(y instanceof Z.cn){y.a2(a)
y.ah(a)
y.an(a)}else b.e=null
y=this.a
y.toString
x=a.a
C.b.c5(x,null)
y.x.cT()
y=this.c
if(y!=null)if(y.c){y.c=!1
C.b.bH(x,33984+y.a)
C.b.a6(x,34067,null)}}},bf:{"^":"a;"}}],["","",,T,{"^":"",bF:{"^":"d_;"},km:{"^":"bF;"},kq:{"^":"km;0a,0b,0c,0d,0e,0f,0r,0x,0y",
e8:function(){if(!this.d){this.d=!0
var z=this.y
if(!(z==null))z.cU()}},
gt:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z},
p:{
ds:function(a,b){var z=new T.kq()
z.a=a
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
return z}}},fg:{"^":"bF;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z}},kr:{"^":"a;a,0b,0c,0d,0e",
kj:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
C.b.a6(z,3553,y)
C.b.ai(z,3553,10242,33071)
C.b.ai(z,3553,10243,33071)
C.b.ai(z,3553,10241,9729)
C.b.ai(z,3553,10240,9729)
C.b.a6(z,3553,null);++this.d
x=W.d9(null,a,null)
w=T.ds(0,y)
z=W.a8
W.Z(x,"load",H.l(new T.kt(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
ki:function(a){return this.kj(a,!1,!1,!1,!1)},
aX:function(a,b,c,d,e,f){var z,y
z=W.d9(null,c,null);++this.d
y=W.a8
W.Z(z,"load",H.l(new T.ks(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
e6:function(a,b,c){var z,y,x,w
b=V.bU(b,2)
z=V.bU(a.width,2)
y=V.bU(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d3(null,null)
x.width=z
x.height=y
w=H.d(C.q.fA(x,"2d"),"$isd4")
w.imageSmoothingEnabled=!1;(w&&C.D).jT(w,a,0,0,x.width,x.height)
return P.mY(C.D.hG(w,0,0,x.width,x.height))}}},kt:{"^":"o:10;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.e6(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
C.b.a6(y,3553,this.e)
C.b.fd(y,37440,this.f?1:0)
C.b.fh(y,3553,0,6408,6408,5121,w)
if(this.r)C.b.ft(y,3553)
C.b.a6(y,3553,null)
z.e8();++x.e}},ks:{"^":"o:10;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.e6(this.b,z.c,this.c)
x=z.a
C.b.a6(x,34067,this.d)
C.b.fd(x,37440,this.e?1:0)
C.b.fh(x,this.f,0,6408,6408,5121,y)
C.b.a6(x,34067,null)
x=this.r
if(++x.d>=6){x=x.e
if(!(x==null))x.cU()}++z.e}}}],["","",,V,{"^":"",bv:{"^":"a;",
b6:function(a){return!0},
i:function(a){return"all"},
$isaF:1},aF:{"^":"a;"},eJ:{"^":"a;0a",
sad:function(a){this.a=H.k(a,"$isb",[V.aF],"$asb")},
b6:["fS",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)if(z[x].b6(a))return!0
return!1}],
i:["dz",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaF:1},az:{"^":"eJ;0a",
b6:function(a){return!this.fS(a)},
i:function(a){return"!["+this.dz(0)+"]"}},jL:{"^":"a;0a,0b",
b6:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.be(this.a)
y=H.be(this.b)
return z+".."+y},
$isaF:1,
p:{
Q:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.e(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.c.G(a,0)
y=C.c.G(b,0)
x=new V.jL()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jZ:{"^":"a;0a",
siH:function(a){this.a=H.k(a,"$isJ",[P.m,P.L],"$asJ")},
fY:function(a){var z,y
if(a.a.length<=0)throw H.e(P.u("May not create a SetMatcher with zero characters."))
z=new H.b1(0,0,[P.m,P.L])
for(y=new H.de(a,a.gn(a),0,[H.a2(a,"T",0)]);y.C();)z.q(0,y.d,!0)
this.siH(z)},
b6:function(a){return this.a.bK(a)},
i:function(a){return P.cb(this.a.gaE(),0,null)},
$isaF:1,
p:{
v:function(a){var z=new V.jZ()
z.fY(a)
return z}}},dn:{"^":"a;a,b,0c,0d",
sj1:function(a){this.c=H.k(a,"$isb",[V.dv],"$asb")},
l:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dv(this.a.k(0,b))
w.sad(H.c([],[V.aF]))
w.c=!1
C.a.h(this.c,w)
return w},
jX:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.b6(a))return w}return},
i:function(a){return this.b}},fn:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.e0(this.b,"\n","\\n")
y=H.e0(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},du:{"^":"a;a,b,0c",
siy:function(a){var z=P.i
this.c=H.k(a,"$isJ",[z,z],"$asJ")},
aQ:function(a,b,c){var z,y,x
H.k(c,"$isb",[P.i],"$asb")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.A)(c),++y){x=c[y]
this.c.q(0,x,b)}},
i:function(a){return this.b}},ky:{"^":"a;0a,0b,0c",
siS:function(a){this.a=H.k(a,"$isJ",[P.i,V.dn],"$asJ")},
siY:function(a){this.b=H.k(a,"$isJ",[P.i,V.du],"$asJ")},
k:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.dn(this,b)
z.sj1(H.c([],[V.dv]))
z.d=null
this.a.q(0,b,z)}return z},
P:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.du(this,a)
y=P.i
z.siy(new H.b1(0,0,[y,y]))
this.b.q(0,a,z)}return z},
fl:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fn])
y=this.c
x=[P.m]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.G(a,t)
r=y.jX(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cb(w,0,null)
throw H.e(P.u("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cb(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.fn(o==null?p.b:o,q,t)}++t}}},
p:{
cF:function(){var z,y
z=new V.ky()
y=P.i
z.siS(new H.b1(0,0,[y,V.dn]))
z.siY(new H.b1(0,0,[y,V.du]))
z.c=null
return z}}},dv:{"^":"eJ;b,0c,0a",
i:function(a){return this.b.b+": "+this.dz(0)}}}],["","",,X,{"^":"",hS:{"^":"cE;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
gt:function(){var z=this.fr
if(z==null){z=D.E()
this.fr=z}return z},
as:function(a){var z=this.fr
if(!(z==null))z.F(a)},
saG:function(a,b){var z
if(b<1)b=1
z=this.a
if(z!==b){this.y=null
this.a=b
this.c=b
z=new D.I("width",z,b,this,[P.m])
z.b=!0
this.as(z)}},
saD:function(a,b){var z
if(b<1)b=1
z=this.b
if(z!==b){this.y=null
this.b=b
this.d=b
z=new D.I("height",z,b,this,[P.m])
z.b=!0
this.as(z)}},
a2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
if(this.f){z=a.a
y=z.drawingBufferWidth
x=this.r
if(typeof y!=="number")return y.u()
this.saG(0,C.e.a5(y*x))
z=z.drawingBufferHeight
x=this.x
if(typeof z!=="number")return z.u()
this.saD(0,C.e.a5(z*x))}if(this.y==null){z=a.a
y=this.ch
x=this.a
w=this.b
v=H.a1(C.b.c8(z,3379))
u=V.bU(x,2)
t=V.bU(w,2)
v=V.bU(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
C.b.a6(z,3553,s)
C.b.ai(z,3553,10242,33071)
C.b.ai(z,3553,10243,33071)
C.b.ai(z,3553,10241,9729)
C.b.ai(z,3553,10240,9729)
C.b.fi(z,3553,0,6408,u,t,0,6408,5121,null)
C.b.a6(z,3553,null)
r=T.ds(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
r.e8()
y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=y.y
if(!(y==null))y.cU()
y=this.ch
x=y.b
this.z=x
this.c=y.r
this.d=y.x
C.b.a6(z,3553,x)
y=z.createRenderbuffer()
this.Q=y
C.b.ek(z,36161,y)
C.b.kG(z,36161,33189,this.c,this.d)
y=z.createFramebuffer()
this.y=y
C.b.bk(z,36160,y)
C.b.k8(z,36160,36064,3553,this.z,0)
C.b.k7(z,36160,36096,36161,this.Q)
C.b.a6(z,3553,null)
C.b.ek(z,36161,null)
C.b.bk(z,36160,null)}z=a.a
C.b.bk(z,36160,this.y)
C.b.bo(z,2884)
C.b.bo(z,2929)
C.b.ex(z,513)
y=this.dy
x=y.c
a.c=C.j.a5(x*this.a)
w=y.d
a.d=C.j.a5(w*this.b)
q=y.a
p=this.c
if(typeof p!=="number")return H.z(p)
o=C.j.a5(q*p)
y=y.b
q=this.d
if(typeof q!=="number")return H.z(q)
C.b.fq(z,o,C.j.a5(y*q),C.j.a5(x*p),C.j.a5(w*q))
C.b.er(z,this.db)
if(this.cy){y=this.cx
C.b.eq(z,y.a,y.b,y.c,y.d)
n=16640}else n=256
if(n>0)C.b.ep(z,n)},
an:function(a){C.b.bk(a.a,36160,null)}},co:{"^":"a;",$isaI:1},iC:{"^":"cE;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
a2:function(a){var z,y,x,w,v,u,t
z=a.a
C.b.bk(z,36160,null)
C.b.bo(z,2884)
C.b.bo(z,2929)
C.b.ex(z,513)
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
v=w.a
if(typeof y!=="number")return H.z(y)
u=C.j.a5(v*y)
v=w.b
if(typeof x!=="number")return H.z(x)
t=C.j.a5(v*x)
v=C.j.a5(w.c*y)
a.c=v
w=C.j.a5(w.d*x)
a.d=w
C.b.fq(z,u,t,v,w)
C.b.er(z,this.c)
w=this.a
C.b.eq(z,w.a,w.b,w.c,w.d)
C.b.ep(z,16640)},
an:function(a){},
p:{
ew:function(a,b,c,d,e,f,g){var z,y
z=new X.iC()
y=new V.aN(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.f4()
z.r=y
return z}}},iL:{"^":"a;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
a2:function(a){var z
a.cy.c2(V.b2())
z=V.b2()
a.db.c2(z)},
an:function(a){a.cy.aP()
a.db.aP()},
$isaI:1,
$isco:1},ju:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
as:[function(a){var z
H.d(a,"$isw")
z=this.f
if(!(z==null))z.F(a)},function(){return this.as(null)},"kX","$1","$0","ghf",0,2,0],
a2:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aG(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.c2(s)
z=$.eW
if(z==null){z=V.eZ()
y=V.fL()
x=$.fH
if(x==null){x=new V.R(0,0,-1)
$.fH=x}x=V.eN(z,y,x)
$.eW=x
r=x}else r=z
z=this.b
if(z!=null){q=z.ba(a,this)
if(q!=null)r=q.u(0,r)}a.db.c2(r)},
an:function(a){a.cy.aP()
a.db.aP()},
$isaI:1,
$isco:1,
p:{
eV:function(a,b,c,d,e){var z,y,x
z=new X.ju()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gt().h(0,z.ghf())
x=new D.I("mover",y,z.b,z,[U.ah])
x.b=!0
z.as(x)}x=z.c
if(!$.p.$2(x,b)){y=z.c
z.c=b
x=new D.I("fov",y,b,z,[P.y])
x.b=!0
z.as(x)}x=z.d
if(!$.p.$2(x,d)){y=z.d
z.d=d
x=new D.I("near",y,d,z,[P.y])
x.b=!0
z.as(x)}x=z.e
if(!$.p.$2(x,a)){y=z.e
z.e=a
x=new D.I("far",y,a,z,[P.y])
x.b=!0
z.as(x)}return z}}},cE:{"^":"a;"}}],["","",,V,{"^":"",
nq:function(a){P.kx(C.U,new V.nr(a))},
aY:{"^":"a;0d",
scp:function(a){this.d=H.k(a,"$isb",[[P.b,W.b_]],"$asb")},
bB:function(a){this.b=new P.iJ(C.X)
this.c=null
this.scp(H.c([],[[P.b,W.b_]]))},
O:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.b_]))
y=a.split("\n")
for(z=y.length,x=[W.b_],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.C(u)
s=this.b.hs(u,0,u.length)
r=s==null?u:s
C.k.fJ(t,H.e0(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaF(this.d),t)}},
fb:function(a){var z,y,x,w
H.k(a,"$isb",[P.i],"$asb")
this.scp(H.c([],[[P.b,W.b_]]))
z=C.a.l(a,"\n")
y=this.c
if(y==null){y=this.bL()
this.c=y}for(y=y.fl(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)this.c1(y[w])}},
nr:{"^":"o:50;a",
$1:function(a){H.d(a,"$isbg")
P.e_(C.j.fk(this.a.gk6(),2)+" fps")}},
ia:{"^":"aY;a,0b,0c,0d",
c1:function(a){switch(a.a){case"Class":this.O(a.b,"#551")
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
bL:function(){var z,y,x,w
z=V.cF()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.v(new H.t("_"))
C.a.h(y.a,x)
x=V.Q("a","z")
C.a.h(y.a,x)
x=V.Q("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.v(new H.t("_"))
C.a.h(x.a,y)
y=V.Q("0","9")
C.a.h(x.a,y)
y=V.Q("a","z")
C.a.h(x.a,y)
y=V.Q("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Int")
x=V.Q("0","9")
C.a.h(y.a,x)
x=z.k(0,"Int").l(0,"Int")
y=V.Q("0","9")
C.a.h(x.a,y)
y=z.k(0,"Int").l(0,"FloatDot")
x=V.v(new H.t("."))
C.a.h(y.a,x)
x=z.k(0,"FloatDot").l(0,"Float")
y=V.Q("0","9")
C.a.h(x.a,y)
y=z.k(0,"Float").l(0,"Float")
x=V.Q("0","9")
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Sym")
y=V.v(new H.t("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.k(0,"Sym").l(0,"Sym")
x=V.v(new H.t("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"OpenDoubleStr")
y=V.v(new H.t('"'))
C.a.h(x.a,y)
y=z.k(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
x=V.v(new H.t('"'))
C.a.h(y.a,x)
x=z.k(0,"OpenDoubleStr").l(0,"EscDoubleStr")
y=V.v(new H.t("\\"))
C.a.h(x.a,y)
y=z.k(0,"EscDoubleStr").l(0,"OpenDoubleStr")
x=V.v(new H.t('"'))
C.a.h(y.a,x)
C.a.h(z.k(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.bv())
x=z.k(0,"Start").l(0,"OpenSingleStr")
y=V.v(new H.t("'"))
C.a.h(x.a,y)
y=z.k(0,"OpenSingleStr").l(0,"CloseSingleStr")
x=V.v(new H.t("'"))
C.a.h(y.a,x)
x=z.k(0,"OpenSingleStr").l(0,"EscSingleStr")
y=V.v(new H.t("\\"))
C.a.h(x.a,y)
y=z.k(0,"EscSingleStr").l(0,"OpenSingleStr")
x=V.v(new H.t("'"))
C.a.h(y.a,x)
C.a.h(z.k(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.bv())
x=z.k(0,"Start").l(0,"Slash")
y=V.v(new H.t("/"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"Comment")
x=V.v(new H.t("/"))
C.a.h(y.a,x)
x=z.k(0,"Comment").l(0,"EndComment")
y=V.v(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Comment").l(0,"Comment")
x=new V.az()
w=[V.aF]
x.sad(H.c([],w))
C.a.h(y.a,x)
y=V.v(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"MLComment")
x=V.v(new H.t("*"))
C.a.h(y.a,x)
x=z.k(0,"MLComment").l(0,"MLCStar")
y=V.v(new H.t("*"))
C.a.h(x.a,y)
y=z.k(0,"MLCStar").l(0,"MLComment")
x=new V.az()
x.sad(H.c([],w))
C.a.h(y.a,x)
y=V.v(new H.t("*"))
C.a.h(x.a,y)
y=z.k(0,"MLCStar").l(0,"EndComment")
x=V.v(new H.t("/"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Whitespace")
y=V.v(new H.t(" \n\t"))
C.a.h(x.a,y)
y=z.k(0,"Whitespace").l(0,"Whitespace")
x=V.v(new H.t(" \n\t"))
C.a.h(y.a,x)
x=z.k(0,"Int")
x.d=x.a.P("Num")
x=z.k(0,"Float")
x.d=x.a.P("Num")
x=z.k(0,"Sym")
x.d=x.a.P("Symbol")
x=z.k(0,"CloseDoubleStr")
x.d=x.a.P("String")
x=z.k(0,"CloseSingleStr")
x.d=x.a.P("String")
x=z.k(0,"EndComment")
x.d=x.a.P("Comment")
x=z.k(0,"Whitespace")
x.d=x.a.P("Whitespace")
x=z.k(0,"Id")
y=x.a.P("Id")
x.d=y
x=[P.i]
y.aQ(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aQ(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aQ(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iD:{"^":"aY;a,0b,0c,0d",
c1:function(a){switch(a.a){case"Builtin":this.O(a.b,"#411")
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
bL:function(){var z,y,x,w
z=V.cF()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.v(new H.t("_"))
C.a.h(y.a,x)
x=V.Q("a","z")
C.a.h(y.a,x)
x=V.Q("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.v(new H.t("_"))
C.a.h(x.a,y)
y=V.Q("0","9")
C.a.h(x.a,y)
y=V.Q("a","z")
C.a.h(x.a,y)
y=V.Q("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Int")
x=V.Q("0","9")
C.a.h(y.a,x)
x=z.k(0,"Int").l(0,"Int")
y=V.Q("0","9")
C.a.h(x.a,y)
y=z.k(0,"Int").l(0,"FloatDot")
x=V.v(new H.t("."))
C.a.h(y.a,x)
x=z.k(0,"FloatDot").l(0,"Float")
y=V.Q("0","9")
C.a.h(x.a,y)
y=z.k(0,"Float").l(0,"Float")
x=V.Q("0","9")
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Sym")
y=V.v(new H.t("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.k(0,"Sym").l(0,"Sym")
x=V.v(new H.t("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Slash")
y=V.v(new H.t("/"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"Comment")
x=V.v(new H.t("/"))
C.a.h(y.a,x)
C.a.h(z.k(0,"Slash").l(0,"Sym").a,new V.bv())
x=z.k(0,"Comment").l(0,"EndComment")
y=V.v(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Comment").l(0,"Comment")
x=new V.az()
w=[V.aF]
x.sad(H.c([],w))
C.a.h(y.a,x)
y=V.v(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Preprocess")
x=V.v(new H.t("#"))
C.a.h(y.a,x)
x=z.k(0,"Preprocess").l(0,"Preprocess")
y=new V.az()
y.sad(H.c([],w))
C.a.h(x.a,y)
x=V.v(new H.t("\n"))
C.a.h(y.a,x)
x=z.k(0,"Preprocess").l(0,"EndPreprocess")
y=V.v(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Whitespace")
x=V.v(new H.t(" \n\t"))
C.a.h(y.a,x)
x=z.k(0,"Whitespace").l(0,"Whitespace")
y=V.v(new H.t(" \n\t"))
C.a.h(x.a,y)
y=z.k(0,"Int")
y.d=y.a.P("Num")
y=z.k(0,"Float")
y.d=y.a.P("Num")
y=z.k(0,"Sym")
y.d=y.a.P("Symbol")
y=z.k(0,"EndComment")
y.d=y.a.P("Comment")
y=z.k(0,"EndPreprocess")
y.d=y.a.P("Preprocess")
y=z.k(0,"Whitespace")
y.d=y.a.P("Whitespace")
y=z.k(0,"Id")
x=y.a.P("Id")
y.d=x
y=[P.i]
x.aQ(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aQ(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aQ(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iE:{"^":"aY;a,0b,0c,0d",
c1:function(a){switch(a.a){case"Attr":this.O(a.b,"#911")
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
bL:function(){var z,y,x
z=V.cF()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.v(new H.t("_"))
C.a.h(y.a,x)
x=V.Q("a","z")
C.a.h(y.a,x)
x=V.Q("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.v(new H.t("_"))
C.a.h(x.a,y)
y=V.Q("0","9")
C.a.h(x.a,y)
y=V.Q("a","z")
C.a.h(x.a,y)
y=V.Q("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Id").l(0,"Attr")
x=V.v(new H.t("="))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Sym")
x=V.v(new H.t("</\\-!>="))
C.a.h(y.a,x)
x=z.k(0,"Sym").l(0,"Sym")
y=V.v(new H.t("</\\-!>="))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"OpenStr")
x=V.v(new H.t('"'))
C.a.h(y.a,x)
x=z.k(0,"OpenStr").l(0,"CloseStr")
y=V.v(new H.t('"'))
C.a.h(x.a,y)
y=z.k(0,"OpenStr").l(0,"EscStr")
x=V.v(new H.t("\\"))
C.a.h(y.a,x)
x=z.k(0,"EscStr").l(0,"OpenStr")
y=V.v(new H.t('"'))
C.a.h(x.a,y)
C.a.h(z.k(0,"OpenStr").l(0,"OpenStr").a,new V.bv())
C.a.h(z.k(0,"Start").l(0,"Other").a,new V.bv())
y=z.k(0,"Other").l(0,"Other")
x=new V.az()
x.sad(H.c([],[V.aF]))
C.a.h(y.a,x)
y=V.v(new H.t('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.Q("a","z")
C.a.h(x.a,y)
y=V.Q("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Sym")
y.d=y.a.P("Symbol")
y=z.k(0,"CloseStr")
y.d=y.a.P("String")
y=z.k(0,"Id")
x=y.a.P("Id")
y.d=x
x.aQ(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.i]))
x=z.k(0,"Attr")
x.d=x.a.P("Attr")
x=z.k(0,"Other")
x.d=x.a.P("Other")
return z}},
jw:{"^":"aY;a,0b,0c,0d",
fb:function(a){H.k(a,"$isb",[P.i],"$asb")
this.scp(H.c([],[[P.b,W.b_]]))
this.O(C.a.l(a,"\n"),"#111")},
c1:function(a){},
bL:function(){return}},
k4:{"^":"a;0a,0b",
fZ:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.p).D(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.p.D(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.k.D(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.k.D(v,u)}t=z.createElement("div")
this.a=t
C.k.D(v,t)
this.b=null
t=W.a8
W.Z(z,"scroll",H.l(new V.k7(x),{func:1,ret:-1,args:[t]}),!1,t)},
eh:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.k(a,"$isb",[P.i],"$asb")
this.iN()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.fl(C.a.ke(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.k.D(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.k.D(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.k.D(y,t)
break
case"Link":s=u.b
if(H.hB(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=H.C(r[1])
q.textContent=H.C(r[0])
C.k.D(y,q)}else{p=P.cf(C.I,s,C.m,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.j(p)
q.textContent=s
C.k.D(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.k.D(y,t)
break}}C.k.D(this.a,y)},
fz:function(a){var z,y,x,w
z=new V.ia("dart")
z.bB("dart")
y=new V.iD("glsl")
y.bB("glsl")
x=new V.iE("html")
x.bB("html")
w=C.a.jZ(H.c([z,y,x],[V.aY]),new V.k8(a))
if(w!=null)return w
z=new V.jw("plain")
z.bB("plain")
return z},
eg:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.k(a2,"$isb",[P.i],"$asb")
z=H.c([],[P.m])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.bR(w).ab(w,"+")){C.a.q(a2,x,C.c.ay(w,1))
C.a.h(z,1)
y=!0}else if(C.c.ab(w,"-")){C.a.q(a2,x,C.c.ay(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.fz(a0)
v.fb(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.k.D(t,s)
C.k.D(this.a,t)
r=P.cf(C.I,a,C.m,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.e4(null)
n.href="#"+H.j(r)
n.textContent=a
C.k.D(o,n)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.A)(w),++e)C.x.D(f,w[e])
C.n.D(j,i)
C.n.D(j,h)
C.n.D(j,f)
C.o.D(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.A)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gT(w);b.C();)C.x.D(h,b.gJ())
C.n.D(j,i)
C.n.D(j,h)
C.o.D(s,j)}},
jt:function(a){var z,y,x,w,v,u,t
H.k(a,"$isb",[P.i],"$asb")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
C.k.D(this.a,y)
w=C.o.hJ(y,-1)
x=H.d((w&&C.n).dV(w,-1),"$iscD").style
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
t=H.d(C.n.dV(w,-1),"$iscD")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.x).D(t,u)}},
iN:function(){var z,y,x,w
if(this.b!=null)return
z=V.cF()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Bold")
x=V.v(new H.t("*"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Bold").l(0,"Bold")
x=new V.az()
w=[V.aF]
x.sad(H.c([],w))
C.a.h(y.a,x)
y=V.v(new H.t("*"))
C.a.h(x.a,y)
y=z.k(0,"Bold").l(0,"BoldEnd")
x=V.v(new H.t("*"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Italic")
x=V.v(new H.t("_"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Italic").l(0,"Italic")
x=new V.az()
x.sad(H.c([],w))
C.a.h(y.a,x)
y=V.v(new H.t("_"))
C.a.h(x.a,y)
y=z.k(0,"Italic").l(0,"ItalicEnd")
x=V.v(new H.t("_"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Code")
x=V.v(new H.t("`"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Code").l(0,"Code")
x=new V.az()
x.sad(H.c([],w))
C.a.h(y.a,x)
y=V.v(new H.t("`"))
C.a.h(x.a,y)
y=z.k(0,"Code").l(0,"CodeEnd")
x=V.v(new H.t("`"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"LinkHead")
x=V.v(new H.t("["))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"LinkHead").l(0,"LinkTail")
x=V.v(new H.t("|"))
C.a.h(y.a,x)
x=z.k(0,"LinkHead").l(0,"LinkEnd")
y=V.v(new H.t("]"))
C.a.h(x.a,y)
x.c=!0
x=z.k(0,"LinkHead").l(0,"LinkHead")
y=new V.az()
y.sad(H.c([],w))
C.a.h(x.a,y)
x=V.v(new H.t("|]"))
C.a.h(y.a,x)
x=z.k(0,"LinkTail").l(0,"LinkEnd")
y=V.v(new H.t("]"))
C.a.h(x.a,y)
x.c=!0
x=z.k(0,"LinkTail").l(0,"LinkTail")
y=new V.az()
y.sad(H.c([],w))
C.a.h(x.a,y)
x=V.v(new H.t("|]"))
C.a.h(y.a,x)
C.a.h(z.k(0,"Start").l(0,"Other").a,new V.bv())
x=z.k(0,"Other").l(0,"Other")
y=new V.az()
y.sad(H.c([],w))
C.a.h(x.a,y)
x=V.v(new H.t("*_`["))
C.a.h(y.a,x)
x=z.k(0,"BoldEnd")
x.d=x.a.P("Bold")
x=z.k(0,"ItalicEnd")
x.d=x.a.P("Italic")
x=z.k(0,"CodeEnd")
x.d=x.a.P("Code")
x=z.k(0,"LinkEnd")
x.d=x.a.P("Link")
x=z.k(0,"Other")
x.d=x.a.P("Other")
this.b=z},
p:{
k5:function(a,b){var z=new V.k4()
z.fZ(a,!0)
return z}}},
k7:{"^":"o:10;a",
$1:function(a){P.fl(C.y,new V.k6(this.a))}},
k6:{"^":"o:2;a",
$0:function(){var z,y,x
z=C.j.a5(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}},
k8:{"^":"o:51;a",
$1:function(a){return H.d(a,"$isaY").a===this.a}},
kn:{"^":"a;a,b,0c,d",
ef:function(a,b,c){var z,y,x,w,v
z=W.d9(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=J.ck(this.c)
x=y.gn(y)
y=W.ad
W.Z(z,"click",H.l(new V.kp(this,z,b,x),{func:1,ret:-1,args:[y]}),!1,y)
J.ck(this.c).h(0,z)
J.ck(this.c).h(0,document.createElement("br"))
w=P.fC().gde().j(0,H.j(this.a))
if(w==null){this.ed(x)
v=c}else v=P.bT(w,null,null)===x
if(v)z.click()},
h:function(a,b){return this.ef(a,b,!1)},
ed:function(a){var z,y,x,w,v
z=P.fC()
y=P.i
x=P.j1(z.gde(),y,y)
x.q(0,this.a,""+a)
w=z.ff(0,x)
y=window.history
v=w.i(0)
y.toString;(y&&C.W).iA(y,new P.m2([],[]).dl(""),"",v)}},
kp:{"^":"o:52;a,b,c,d",
$1:function(a){var z,y
H.d(a,"$isad")
z=this.a
y=J.ck(z.c)
y.S(y,new V.ko())
y=this.b.style
y.border="solid 2px black"
z.d.$1(this.c)
z.ed(this.d)}},
ko:{"^":"o:53;",
$1:function(a){var z
H.d(a,"$isK")
if(!!J.M(a).$isd8){z=a.style
z.border="solid 2px white"}}}}],["","",,X,{"^":"",
hx:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.k5("Test 029",!0)
y=W.d3(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.k.D(z.a,y)
x=[P.i]
z.eh(H.c(["Test of bump distort pass. It renders the scene to a back buffer then ","paints that back buffer texture to the front buffer with a distortion."],x))
z.jt(H.c(["bumpMaps"],x))
z.eh(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=C.z.dt(x,"testCanvas")
if(w==null)H.r(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.kv(w,!0,!0,!0,!1)
u=new U.ex()
t=U.ah
u.bC(t)
u.bc(u.ghU(),u.gig())
u.e=null
u.f=V.b2()
u.r=0
s=v.r
r=new U.l_()
q=U.d6()
q.sdn(0,!0)
q.sd6(6.283185307179586)
q.sd8(0)
q.sak(0,0)
q.sd7(100)
q.sZ(0)
q.scR(0.5)
r.b=q
p=r.gaY()
q.gt().h(0,p)
q=U.d6()
q.sdn(0,!0)
q.sd6(6.283185307179586)
q.sd8(0)
q.sak(0,0)
q.sd7(100)
q.sZ(0)
q.scR(0.5)
r.c=q
q.gt().h(0,p)
r.d=null
r.e=!1
r.f=!1
r.r=!1
r.x=2.5
r.y=2.5
r.z=2
r.Q=4
r.cx=!1
r.ch=!1
r.cy=0
r.db=0
r.dx=null
r.dy=0
r.fr=null
r.fx=null
o=new X.aH(!1,!1,!1)
n=r.d
r.d=o
q=[X.aH]
p=new D.I("modifiers",n,o,r,q)
p.b=!0
r.X(p)
p=r.f
if(p!==!1){r.f=!1
p=new D.I("invertX",p,!1,r,[P.L])
p.b=!0
r.X(p)}p=r.r
if(p!==!1){r.r=!1
p=new D.I("invertY",p,!1,r,[P.L])
p.b=!0
r.X(p)}r.bj(s)
u.h(0,r)
s=v.r
r=new U.kZ()
p=U.d6()
p.sdn(0,!0)
p.sd6(6.283185307179586)
p.sd8(0)
p.sak(0,0)
p.sd7(100)
p.sZ(0)
p.scR(0.2)
r.b=p
p.gt().h(0,r.gaY())
r.c=null
r.d=!1
r.e=2.5
r.f=2
r.r=4
r.y=!1
r.x=!1
r.z=0
r.Q=null
r.ch=0
r.cx=null
r.cy=null
o=new X.aH(!0,!1,!1)
n=r.c
r.c=o
p=new D.I("modifiers",n,o,r,q)
p.b=!0
r.X(p)
r.bj(s)
u.h(0,r)
s=v.r
r=new U.l0()
r.c=0.01
r.d=0
r.e=0
o=new X.aH(!1,!1,!1)
r.b=o
q=new D.I("modifiers",null,o,r,q)
q.b=!0
r.X(q)
r.bj(s)
u.h(0,r)
u.h(0,U.eg(V.aG(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
m=X.eV(2000,1.0471975511965976,u,0.1,null)
l=new X.hS()
l.a=512
l.b=512
l.c=512
l.d=512
l.e=!0
l.f=!0
l.r=1
l.x=1
l.ch=T.ds(0,null)
l.cx=new V.aN(0,0,0,1)
l.cy=!0
l.db=2000
l.dx=!0
l.dy=V.f4()
l.saG(0,800)
l.saD(0,600)
if(l.cy){l.cy=!1
s=new D.I("clearColor",!0,!1,l,[P.L])
s.b=!0
l.as(s)}k=E.eu(null,!0,null,"",null,null)
k.scc(0,F.nu(30,1,15,0.5))
j=new O.jc()
j.shm(O.d5(V.ap))
j.e.bc(j.ghW(),j.ghX())
s=new O.ba(j,"emission")
s.c=C.d
s.f=new V.a3(0,0,0)
j.f=s
s=new O.ba(j,"ambient")
s.c=C.d
s.f=new V.a3(0,0,0)
j.r=s
s=new O.ba(j,"diffuse")
s.c=C.d
s.f=new V.a3(0,0,0)
j.x=s
s=new O.ba(j,"invDiffuse")
s.c=C.d
s.f=new V.a3(0,0,0)
j.y=s
s=new O.ji(j,"specular")
s.c=C.d
s.f=new V.a3(0,0,0)
s.ch=100
j.z=s
s=new O.jf(j,"bump")
s.c=C.d
j.Q=s
j.ch=null
s=new O.ba(j,"reflect")
s.c=C.d
s.f=new V.a3(0,0,0)
j.cx=s
s=new O.jh(j,"refract")
s.c=C.d
s.f=new V.a3(0,0,0)
s.ch=1
j.cy=s
s=new O.je(j,"alpha")
s.c=C.d
s.f=1
j.db=s
s=new D.iV()
s.bC(D.a5)
s.shw(H.c([],[D.cq]))
s.sio(H.c([],[D.eX]))
s.siR(H.c([],[D.fa]))
s.sj2(H.c([],[D.fh]))
s.sj3(H.c([],[D.fi]))
s.sj4(H.c([],[D.fj]))
s.Q=null
s.ch=null
s.dv(s.ghV(),s.gie(),s.gih())
j.dx=s
r=s.Q
if(r==null){r=D.E()
s.Q=r
s=r}else s=r
s.h(0,j.giC())
s=j.dx
r=s.ch
if(r==null){r=D.E()
s.ch=r
s=r}else s=r
s.h(0,j.gcg())
j.dy=null
s=j.dx
i=V.fL()
r=U.eg(V.eN(V.eZ(),i,new V.R(0,-1,-1)))
h=new V.a3(1,1,1)
q=new D.cq()
q.c=new V.a3(1,1,1)
q.a=V.fM()
n=q.b
q.b=r
r.gt().h(0,q.gh5())
t=new D.I("mover",n,q.b,q,[t])
t.b=!0
q.aU(t)
if(!q.c.A(0,h)){n=q.c
q.c=h
t=new D.I("color",n,h,q,[V.a3])
t.b=!0
q.aU(t)}s.h(0,q)
t=j.r
t.saB(0,new V.a3(0,0,1))
t=j.x
t.saB(0,new V.a3(0,1,0))
t=j.z
t.saB(0,new V.a3(1,0,0))
t=j.z
if(t.c===C.d){t.c=C.i
t.ce()
t.cC(100)
s=t.a
s.a=null
s.a9(null)}t.cC(10)
t=v.f
s=t.a
g=s.createTexture()
C.b.a6(s,34067,g)
C.b.ai(s,34067,10242,10497)
C.b.ai(s,34067,10243,10497)
C.b.ai(s,34067,10241,9729)
C.b.ai(s,34067,10240,9729)
C.b.a6(s,34067,null)
f=new T.fg()
f.a=0
f.b=g
f.c=!1
f.d=0
t.aX(f,g,"../resources/maskonaive/posx.jpg",34069,!1,!1)
t.aX(f,g,"../resources/maskonaive/negx.jpg",34070,!1,!1)
t.aX(f,g,"../resources/maskonaive/posy.jpg",34071,!1,!1)
t.aX(f,g,"../resources/maskonaive/negy.jpg",34072,!1,!1)
t.aX(f,g,"../resources/maskonaive/posz.jpg",34073,!1,!1)
t.aX(f,g,"../resources/maskonaive/negz.jpg",34074,!1,!1)
e=M.eh(null,null,null)
t=new O.ka()
t.b=1.0471975511965976
t.d=new V.a3(1,1,1)
n=t.c
t.c=f
f.gt().h(0,t.gcg())
s=new D.I("boxTexture",n,t.c,t,[T.fg])
s.b=!0
t.a9(s)
e.sb9(t)
e.sbu(0,l)
e.sbl(m)
d=new M.is()
d.shq(0,O.d5(E.ax))
d.d.bc(d.ghZ(),d.gi_())
d.e=null
d.f=null
d.r=null
d.x=null
d.sbl(null)
d.sbu(0,null)
d.sb9(null)
d.sbl(m)
d.sb9(j)
d.sbu(0,l)
d.d.h(0,k)
c=new O.ie()
c.seu(null)
c.seo(null)
b=V.eM()
if(!J.O(c.d,b)){c.d=b
c.aH()}b=V.eM()
if(!J.O(c.e,b)){c.e=b
c.aH()}c.sen(null)
c.seu(l.ch)
c.sen(V.eO(0.05,0.05,0.05,1))
a=M.eh(null,null,null)
a.sb9(c)
t=M.aK
s=H.c([e,d,a],[t])
r=new M.i2()
r.bC(t)
r.e=!1
r.f=null
r.bc(r.gii(),r.gij())
r.af(0,s)
t=v.d
if(t!==r){if(t!=null)t.gt().R(0,v.gdB())
v.d=r
r.gt().h(0,v.gdB())
v.h1()}t=new V.kn("bumpMaps",!0,new X.ni(c,v))
x=C.z.dt(x,"bumpMaps")
t.c=x
if(x==null)H.r("Failed to find bumpMaps for Texture2DGroup")
t.ef(0,"../resources/BumpMap1.png",!0)
t.h(0,"../resources/BumpMap2.png")
t.h(0,"../resources/BumpMap3.png")
t.h(0,"../resources/BumpMap4.png")
t.h(0,"../resources/BumpMap5.png")
t.h(0,"../resources/ScrewBumpMap.png")
t.h(0,"../resources/CtrlPnlBumpMap.png")
x=v.z
if(x==null){x=D.E()
v.z=x}t={func:1,ret:-1,args:[D.w]}
s=H.l(new X.nj(z,c),t)
if(x.b==null)x.sbg(H.c([],[t]))
x=x.b;(x&&C.a).h(x,s)
V.nq(v)},
ni:{"^":"o:20;a,b",
$1:function(a){this.a.seo(this.b.f.ki(a))}},
nj:{"^":"o:7;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isw")
z=this.a
y=this.b
x=y.a
w=[P.i]
z.eg("Vertex Shader for distort","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.eg("Fragment Shader for distort","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.M=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eA.prototype
return J.ez.prototype}if(typeof a=="string")return J.c4.prototype
if(a==null)return J.eB.prototype
if(typeof a=="boolean")return J.iQ.prototype
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.a)return a
return J.cR(a)}
J.br=function(a){if(typeof a=="string")return J.c4.prototype
if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.a)return a
return J.cR(a)}
J.dX=function(a){if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.a)return a
return J.cR(a)}
J.n4=function(a){if(typeof a=="number")return J.c3.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cd.prototype
return a}
J.n5=function(a){if(typeof a=="number")return J.c3.prototype
if(typeof a=="string")return J.c4.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cd.prototype
return a}
J.bR=function(a){if(typeof a=="string")return J.c4.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cd.prototype
return a}
J.a_=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.a)return a
return J.cR(a)}
J.O=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).A(a,b)}
J.hD=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.n4(a).U(a,b)}
J.e1=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n5(a).u(a,b)}
J.hE=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ng(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.br(a).j(a,b)}
J.hF=function(a,b,c,d){return J.a_(a).hi(a,b,c,d)}
J.hG=function(a,b){return J.bR(a).G(a,b)}
J.ci=function(a,b){return J.a_(a).it(a,b)}
J.cW=function(a,b,c){return J.a_(a).iz(a,b,c)}
J.e2=function(a,b){return J.a_(a).D(a,b)}
J.hH=function(a,b){return J.bR(a).a3(a,b)}
J.cX=function(a,b,c){return J.br(a).jG(a,b,c)}
J.cj=function(a,b){return J.dX(a).ag(a,b)}
J.hI=function(a,b,c,d){return J.a_(a).jW(a,b,c,d)}
J.hJ=function(a){return J.a_(a).gjA(a)}
J.ck=function(a){return J.a_(a).gcP(a)}
J.bV=function(a){return J.M(a).ga0(a)}
J.b7=function(a){return J.dX(a).gT(a)}
J.au=function(a){return J.br(a).gn(a)}
J.hK=function(a){return J.a_(a).gkA(a)}
J.hL=function(a){return J.a_(a).gkO(a)}
J.cY=function(a,b){return J.a_(a).bb(a,b)}
J.e3=function(a){return J.dX(a).kC(a)}
J.hM=function(a,b){return J.a_(a).kH(a,b)}
J.hN=function(a,b,c){return J.a_(a).fI(a,b,c)}
J.hO=function(a,b,c){return J.bR(a).v(a,b,c)}
J.hP=function(a){return J.bR(a).kT(a)}
J.av=function(a){return J.M(a).i(a)}
I.a7=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.cl.prototype
C.q=W.d2.prototype
C.D=W.d4.prototype
C.k=W.b_.prototype
C.T=W.ij.prototype
C.V=W.iF.prototype
C.W=W.iG.prototype
C.z=W.iI.prototype
C.Y=J.F.prototype
C.a=J.b9.prototype
C.Z=J.ez.prototype
C.e=J.eA.prototype
C.r=J.eB.prototype
C.j=J.c3.prototype
C.c=J.c4.prototype
C.a5=J.c5.prototype
C.ab=W.jo.prototype
C.L=J.jv.prototype
C.M=W.jK.prototype
C.b=P.dm.prototype
C.x=W.cD.prototype
C.o=W.kj.prototype
C.n=W.kk.prototype
C.C=J.cd.prototype
C.N=W.bJ.prototype
C.O=W.ll.prototype
C.Q=new P.hU(!1)
C.P=new P.hT(C.Q)
C.R=new P.jt()
C.S=new P.l8()
C.l=new P.lT()
C.d=new A.cp(0,"ColorSourceType.None")
C.i=new A.cp(1,"ColorSourceType.Solid")
C.f=new A.cp(2,"ColorSourceType.Texture2D")
C.h=new A.cp(3,"ColorSourceType.TextureCube")
C.y=new P.bx(0)
C.U=new P.bx(5e6)
C.X=new P.iK("element",!0,!1,!1,!1)
C.a_=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.a0=function(hooks) {
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

C.a1=function(getTagFallback) {
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
C.a2=function() {
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
C.a3=function(hooks) {
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
C.a4=function(hooks) {
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
C.G=H.c(I.a7([127,2047,65535,1114111]),[P.m])
C.t=H.c(I.a7([0,0,32776,33792,1,10240,0,0]),[P.m])
C.a6=H.c(I.a7(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.i])
C.u=H.c(I.a7([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.v=H.c(I.a7([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.a7=H.c(I.a7(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.i])
C.H=H.c(I.a7([]),[P.i])
C.a8=H.c(I.a7([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.I=H.c(I.a7([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.w=H.c(I.a7([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.J=H.c(I.a7([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.a9=H.c(I.a7([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.K=H.c(I.a7([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.A=H.c(I.a7(["bind","if","ref","repeat","syntax"]),[P.i])
C.B=H.c(I.a7(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.i])
C.aa=new H.i6(0,{},C.H,[P.i,P.i])
C.m=new P.l1(!1)
$.aC=0
$.bw=null
$.e8=null
$.dO=!1
$.hu=null
$.hp=null
$.hA=null
$.cQ=null
$.cT=null
$.dY=null
$.bm=null
$.bN=null
$.bO=null
$.dP=!1
$.S=C.l
$.aO=null
$.d7=null
$.et=null
$.es=null
$.en=null
$.em=null
$.el=null
$.ek=null
$.p=V.jj()
$.eL=null
$.eP=null
$.eY=null
$.bD=null
$.f3=null
$.fG=null
$.fK=null
$.fI=null
$.fJ=null
$.cI=null
$.fH=null
$.ih="uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n"
$.ig="precision mediump float;                                 \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D bumpTxt;                               \nuniform int nullColorTxt;                                \nuniform int nullBumpTxt;                                 \nuniform mat4 bumpMat;                                    \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvec2 offset()                                            \n{                                                        \n   if(nullBumpTxt > 0) return vec2(0.0, 0.0);            \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb;       \n   txt2D = normalize(txt2D*2.0 - 1.0);                   \n   return (bumpMat * vec4(txt2D, 1.0)).xy;               \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0) gl_FragColor = vec4(1.0);        \n   else                                                  \n   {                                                     \n      vec2 txt2D = colorTxt2D + offset();                \n      gl_FragColor = texture2D(colorTxt, txt2D);         \n   }                                                     \n}                                                        \n"
$.kc="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.kb="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.eW=null
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
I.$lazy(y,x,w)}})(["ej","$get$ej",function(){return H.ht("_$dart_dartClosure")},"db","$get$db",function(){return H.ht("_$dart_js")},"fp","$get$fp",function(){return H.aL(H.cG({
toString:function(){return"$receiver$"}}))},"fq","$get$fq",function(){return H.aL(H.cG({$method$:null,
toString:function(){return"$receiver$"}}))},"fr","$get$fr",function(){return H.aL(H.cG(null))},"fs","$get$fs",function(){return H.aL(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fw","$get$fw",function(){return H.aL(H.cG(void 0))},"fx","$get$fx",function(){return H.aL(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fu","$get$fu",function(){return H.aL(H.fv(null))},"ft","$get$ft",function(){return H.aL(function(){try{null.$method$}catch(z){return z.message}}())},"fz","$get$fz",function(){return H.aL(H.fv(void 0))},"fy","$get$fy",function(){return H.aL(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dJ","$get$dJ",function(){return P.lm()},"bP","$get$bP",function(){return[]},"fF","$get$fF",function(){return P.l5()},"fU","$get$fU",function(){return H.jm(H.bl(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"hd","$get$hd",function(){return P.jP("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hl","$get$hl",function(){return P.mF()},"ei","$get$ei",function(){return{}},"fY","$get$fY",function(){return P.eF(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.i)},"dK","$get$dK",function(){return P.eE(P.i,P.c_)},"fP","$get$fP",function(){return Z.ar(0)},"fN","$get$fN",function(){return Z.ar(511)},"al","$get$al",function(){return Z.ar(1)},"aU","$get$aU",function(){return Z.ar(2)},"aT","$get$aT",function(){return Z.ar(4)},"aB","$get$aB",function(){return Z.ar(8)},"aV","$get$aV",function(){return Z.ar(16)},"bH","$get$bH",function(){return Z.ar(32)},"bI","$get$bI",function(){return Z.ar(64)},"fO","$get$fO",function(){return Z.ar(96)},"bj","$get$bj",function(){return Z.ar(128)},"aS","$get$aS",function(){return Z.ar(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.w]},{func:1,ret:-1,args:[D.w]},{func:1,ret:P.D},{func:1,ret:-1},{func:1,ret:-1,args:[W.ad]},{func:1,ret:P.D,args:[F.a9]},{func:1,ret:P.D,args:[,,]},{func:1,ret:P.D,args:[D.w]},{func:1,ret:-1,args:[P.m,[P.n,E.ax]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[W.a8]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:-1,args:[W.a8]},{func:1,ret:P.L,args:[W.K,P.i,P.i,W.ce]},{func:1,ret:-1,args:[P.m,[P.n,V.ap]]},{func:1,ret:-1,args:[P.m,[P.n,M.aK]]},{func:1,ret:P.i,args:[P.m]},{func:1,ret:-1,args:[P.m,[P.n,U.ah]]},{func:1,ret:P.y},{func:1,ret:-1,args:[P.m,[P.n,D.a5]]},{func:1,ret:P.D,args:[P.i]},{func:1,ret:P.i,args:[P.i]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bB]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:P.L,args:[W.B]},{func:1,ret:P.L,args:[W.aJ]},{func:1,ret:P.L,args:[P.i]},{func:1,ret:P.D,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[W.B,W.B]},{func:1,args:[W.a8]},{func:1,ret:P.D,args:[P.am]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.N,args:[P.m]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[P.i,,]},{func:1,ret:P.L,args:[P.y,P.y]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.L,args:[[P.n,D.a5]]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,ret:[P.J,P.i,P.i],args:[[P.J,P.i,P.i],P.i]},{func:1,args:[,P.i]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:V.a6,args:[P.y]},{func:1,ret:P.D,args:[F.aq,P.y,P.y]},{func:1,ret:-1,args:[W.bJ]},{func:1,ret:P.m,args:[[P.b,P.m],P.m]},{func:1,ret:[P.aW,,],args:[,]},{func:1,ret:P.D,args:[P.bg]},{func:1,ret:P.L,args:[V.aY]},{func:1,ret:P.D,args:[W.ad]},{func:1,ret:P.D,args:[W.K]},{func:1,ret:P.D,args:[,],opt:[,]},{func:1,args:[P.i]},{func:1,ret:W.K,args:[W.B]}]
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
if(x==y)H.nt(d||a)
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
Isolate.a7=a.a7
Isolate.dV=a.dV
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
if(typeof dartMainRunner==="function")dartMainRunner(X.hx,[])
else X.hx([])})})()
//# sourceMappingURL=test.dart.js.map
