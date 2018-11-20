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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isI)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
if(a1==="l"){processStatics(init.statics[b2]=b3.l,b4)
delete b3.l}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dT"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dT"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dT(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dU=function(){}
var dart=[["","",,H,{"^":"",ma:{"^":"a;a"}}],["","",,J,{"^":"",
dZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c5:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dW==null){H.lK()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.fr("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d5()]
if(v!=null)return v
v=H.lP(a)
if(v!=null)return v
if(typeof a=="function")return C.N
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$d5(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
I:{"^":"a;",
v:function(a,b){return a===b},
gY:function(a){return H.bF(a)},
i:["f8",function(a){return"Instance of '"+H.be(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
ib:{"^":"I;",
i:function(a){return String(a)},
gY:function(a){return a?519018:218159},
$isX:1},
eA:{"^":"I;",
v:function(a,b){return null==b},
i:function(a){return"null"},
gY:function(a){return 0},
$isA:1},
d6:{"^":"I;",
gY:function(a){return 0},
i:["f9",function(a){return String(a)}]},
iY:{"^":"d6;"},
cA:{"^":"d6;"},
by:{"^":"d6;",
i:function(a){var z=a[$.$get$ej()]
if(z==null)return this.f9(a)
return"JavaScript function for "+H.i(J.ao(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isd3:1},
b_:{"^":"I;$ti",
h:function(a,b){H.w(b,H.r(a,0))
if(!!a.fixed$length)H.o(P.a9("add"))
a.push(b)},
O:function(a,b){var z
if(!!a.fixed$length)H.o(P.a9("remove"))
for(z=0;z<a.length;++z)if(J.R(a[z],b)){a.splice(z,1)
return!0}return!1},
aZ:function(a,b){var z,y
H.d(b,"$isk",[H.r(a,0)],"$ask")
if(!!a.fixed$length)H.o(P.a9("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.z)(b),++y)a.push(b[y])},
a8:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.bu(a))}},
C:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a_(z,y,H.i(a[y]))
return z.join(b)},
jw:function(a){return this.C(a,"")},
ag:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
f7:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.aj(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.aj(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.r(a,0)])
return H.c(a.slice(b,c),[H.r(a,0)])},
gd_:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.i8())},
f4:function(a,b,c,d,e){var z,y,x
z=H.r(a,0)
H.d(d,"$isk",[z],"$ask")
if(!!a.immutable$list)H.o(P.a9("setRange"))
P.dh(b,c,a.length,null,null,null)
y=c-b
if(y===0)return
H.d(d,"$isb",[z],"$asb")
z=J.c3(d)
if(e+y>z.gp(d))throw H.h(H.i9())
if(e<b)for(x=y-1;x>=0;--x)a[b+x]=z.j(d,e+x)
else for(x=0;x<y;++x)a[b+x]=z.j(d,e+x)},
bv:function(a,b,c,d){return this.f4(a,b,c,d,0)},
b2:function(a,b){var z
for(z=0;z<a.length;++z)if(J.R(a[z],b))return!0
return!1},
i:function(a){return P.d4(a,"[","]")},
gP:function(a){return new J.ap(a,a.length,0,[H.r(a,0)])},
gY:function(a){return H.bF(a)},
gp:function(a){return a.length},
sp:function(a,b){if(!!a.fixed$length)H.o(P.a9("set length"))
if(b<0)throw H.h(P.aj(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.h(H.b6(a,b))
return a[b]},
a_:function(a,b,c){H.w(c,H.r(a,0))
if(!!a.immutable$list)H.o(P.a9("indexed set"))
if(b>=a.length||b<0)throw H.h(H.b6(a,b))
a[b]=c},
n:function(a,b){var z,y
z=[H.r(a,0)]
H.d(b,"$isb",z,"$asb")
y=C.f.n(a.length,b.gp(b))
z=H.c([],z)
this.sp(z,y)
this.bv(z,0,a.length,a)
this.bv(z,a.length,y,b)
return z},
$isk:1,
$isb:1,
l:{
ia:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.cP(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.aj(a,0,4294967295,"length",null))
return J.ex(new Array(a),b)},
ex:function(a,b){return J.cl(H.c(a,[b]))},
cl:function(a){H.cJ(a)
a.fixed$length=Array
return a}}},
m9:{"^":"b_;$ti"},
ap:{"^":"a;a,b,c,0d,$ti",
sdm:function(a){this.d=H.w(a,H.r(this,0))},
gI:function(){return this.d},
B:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.z(z))
x=this.c
if(x>=y){this.sdm(null)
return!1}this.sdm(z[x]);++this.c
return!0},
$isaD:1},
bV:{"^":"I;",
cO:function(a,b){var z
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=C.f.gc2(b)
if(this.gc2(a)===z)return 0
if(this.gc2(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc2:function(a){return a===0?1/a<0:a<0},
k9:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.a9(""+a+".toInt()"))},
cX:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.a9(""+a+".floor()"))},
at:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.a9(""+a+".round()"))},
j1:function(a,b,c){if(C.f.cO(b,c)>0)throw H.h(H.am(b))
if(this.cO(a,b)<0)return b
if(this.cO(a,c)>0)return c
return a},
eL:function(a,b){var z
if(b>20)throw H.h(P.aj(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gc2(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gY:function(a){return a&0x1FFFFFFF},
n:function(a,b){if(typeof b!=="number")throw H.h(H.am(b))
return a+b},
f2:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fb:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dR(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.dR(a,b)},
dR:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.a9("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
bI:function(a,b){var z
if(a>0)z=this.i9(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
i9:function(a,b){return b>31?0:a>>>b},
Z:function(a,b){if(typeof b!=="number")throw H.h(H.am(b))
return a<b},
b7:function(a,b){if(typeof b!=="number")throw H.h(H.am(b))
return a>=b},
$isx:1,
$isan:1},
ez:{"^":"bV;",$isy:1},
ey:{"^":"bV;"},
bW:{"^":"I;",
bf:function(a,b){if(b<0)throw H.h(H.b6(a,b))
if(b>=a.length)H.o(H.b6(a,b))
return a.charCodeAt(b)},
aR:function(a,b){if(b>=a.length)throw H.h(H.b6(a,b))
return a.charCodeAt(b)},
n:function(a,b){H.H(b)
if(typeof b!=="string")throw H.h(P.cP(b,null,null))
return a+b},
bw:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.ct(b,null,null))
if(b>c)throw H.h(P.ct(b,null,null))
if(c>a.length)throw H.h(P.ct(c,null,null))
return a.substring(b,c)},
cc:function(a,b){return this.bw(a,b,null)},
eM:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.aR(z,0)===133){x=J.ic(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.bf(z,w)===133?J.id(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.A)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
jL:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
aj:function(a,b){return this.jL(a,b," ")},
jt:function(a,b,c){var z
if(c>a.length)throw H.h(P.aj(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
js:function(a,b){return this.jt(a,b,0)},
jy:function(a,b,c){var z
c=a.length
z=b.length
if(c+z>c)c-=z
return a.lastIndexOf(b,c)},
jx:function(a,b){return this.jy(a,b,null)},
j8:function(a,b,c){if(c>a.length)throw H.h(P.aj(c,0,a.length,null,null))
return H.hf(a,b,c)},
i:function(a){return a},
gY:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gp:function(a){return a.length},
j:function(a,b){if(b>=a.length||!1)throw H.h(H.b6(a,b))
return a[b]},
$iseQ:1,
$isu:1,
l:{
eB:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ic:function(a,b){var z,y
for(z=a.length;b<z;){y=C.i.aR(a,b)
if(y!==32&&y!==13&&!J.eB(y))break;++b}return b},
id:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.i.bf(a,z)
if(y!==32&&y!==13&&!J.eB(y))break}return b}}}}],["","",,H,{"^":"",
i8:function(){return new P.dm("No element")},
i9:function(){return new P.dm("Too few elements")},
a0:{"^":"k6;a",
gp:function(a){return this.a.length},
j:function(a,b){return C.i.bf(this.a,b)},
$asfs:function(){return[P.y]},
$asS:function(){return[P.y]},
$ask:function(){return[P.y]},
$asb:function(){return[P.y]}},
hO:{"^":"k;"},
eG:{"^":"a;a,b,c,0d,$ti",
sba:function(a){this.d=H.w(a,H.r(this,0))},
gI:function(){return this.d},
B:function(){var z,y,x,w
z=this.a
y=J.c3(z)
x=y.gp(z)
if(this.b!==x)throw H.h(P.bu(z))
w=this.c
if(w>=x){this.sba(null)
return!1}this.sba(y.ag(z,w));++this.c
return!0},
$isaD:1},
iB:{"^":"k;a,b,$ti",
gP:function(a){return new H.iC(J.c9(this.a),this.b,this.$ti)},
gp:function(a){return J.aH(this.a)},
ag:function(a,b){return this.b.$1(J.e4(this.a,b))},
$ask:function(a,b){return[b]}},
iC:{"^":"aD;0a,b,c,$ti",
sba:function(a){this.a=H.w(a,H.r(this,1))},
B:function(){var z=this.b
if(z.B()){this.sba(this.c.$1(z.gI()))
return!0}this.sba(null)
return!1},
gI:function(){return this.a},
$asaD:function(a,b){return[b]}},
kl:{"^":"k;a,b,$ti",
gP:function(a){return new H.km(J.c9(this.a),this.b,this.$ti)}},
km:{"^":"aD;a,b,$ti",
B:function(){var z,y
for(z=this.a,y=this.b;z.B();)if(y.$1(z.gI()))return!0
return!1},
gI:function(){return this.a.gI()}},
cj:{"^":"a;$ti"},
fs:{"^":"a;$ti"},
k6:{"^":"cp+fs;"}}],["","",,H,{"^":"",
bs:function(a){var z,y
z=H.H(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
lF:function(a){return init.types[H.U(a)]},
lN:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.N(a).$isaL},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ao(a)
if(typeof z!=="string")throw H.h(H.am(a))
return z},
bF:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
j7:function(a,b){var z,y
if(typeof a!=="string")H.o(H.am(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.H(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
j6:function(a){var z,y
if(typeof a!=="string")H.o(H.am(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.cO(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
be:function(a){return H.iZ(a)+H.dQ(H.b7(a),0,null)},
iZ:function(a){var z,y,x,w,v,u,t,s,r
z=J.N(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.F||!!z.$iscA){u=C.v(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bs(w.length>1&&C.i.aR(w,0)===36?C.i.cc(w,1):w)},
eW:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
j9:function(a){var z,y,x,w
z=H.c([],[P.y])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.am(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.bI(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.am(w))}return H.eW(z)},
eX:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.am(x))
if(x<0)throw H.h(H.am(x))
if(x>65535)return H.j9(a)}return H.eW(a)},
j8:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.bI(z,10))>>>0,56320|z&1023)}throw H.h(P.aj(a,0,1114111,null,null))},
bd:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
j5:function(a){var z=H.bd(a).getFullYear()+0
return z},
j3:function(a){var z=H.bd(a).getMonth()+1
return z},
j_:function(a){var z=H.bd(a).getDate()+0
return z},
j0:function(a){var z=H.bd(a).getHours()+0
return z},
j2:function(a){var z=H.bd(a).getMinutes()+0
return z},
j4:function(a){var z=H.bd(a).getSeconds()+0
return z},
j1:function(a){var z=H.bd(a).getMilliseconds()+0
return z},
n:function(a){throw H.h(H.am(a))},
f:function(a,b){if(a==null)J.aH(a)
throw H.h(H.b6(a,b))},
b6:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aX(!0,b,"index",null)
z=H.U(J.aH(a))
if(!(b<0)){if(typeof z!=="number")return H.n(z)
y=b>=z}else y=!0
if(y)return P.bx(b,a,"index",null,z)
return P.ct(b,"index",null)},
ly:function(a,b,c){if(a>c)return new P.cs(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cs(a,c,!0,b,"end","Invalid value")
return new P.aX(!0,b,"end",null)},
am:function(a){return new P.aX(!0,a,null,null)},
lt:function(a){if(typeof a!=="number")throw H.h(H.am(a))
return a},
h:function(a){var z
if(a==null)a=new P.de()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hh})
z.name=""}else z.toString=H.hh
return z},
hh:function(){return J.ao(this.dartException)},
o:function(a){throw H.h(a)},
z:function(a){throw H.h(P.bu(a))},
a8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lZ(a)
if(a==null)return
if(a instanceof H.d0)return z.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.bI(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d7(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eP(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fg()
u=$.$get$fh()
t=$.$get$fi()
s=$.$get$fj()
r=$.$get$fn()
q=$.$get$fo()
p=$.$get$fl()
$.$get$fk()
o=$.$get$fq()
n=$.$get$fp()
m=v.ai(y)
if(m!=null)return z.$1(H.d7(H.H(y),m))
else{m=u.ai(y)
if(m!=null){m.method="call"
return z.$1(H.d7(H.H(y),m))}else{m=t.ai(y)
if(m==null){m=s.ai(y)
if(m==null){m=r.ai(y)
if(m==null){m=q.ai(y)
if(m==null){m=p.ai(y)
if(m==null){m=s.ai(y)
if(m==null){m=o.ai(y)
if(m==null){m=n.ai(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eP(H.H(y),m))}}return z.$1(new H.k5(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f5()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aX(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f5()
return a},
b8:function(a){var z
if(a instanceof H.d0)return a.b
if(a==null)return new H.fP(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fP(a)},
lD:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a_(0,a[y],a[x])}return b},
lM:function(a,b,c,d,e,f){H.j(a,"$isd3")
switch(H.U(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.m("Unsupported number of arguments for wrapped closure"))},
bo:function(a,b){var z
H.U(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lM)
a.$identity=z
return z},
hy:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.N(d).$isb){z.$reflectionInfo=d
x=H.je(z).r}else x=d
w=e?Object.create(new H.jC().constructor.prototype):Object.create(new H.cR(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aC
if(typeof u!=="number")return u.n()
$.aC=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.ee(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.lF,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.e9:H.cS
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.h("Error in reflectionInfo.")
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
hv:function(a,b,c,d){var z=H.cS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ee:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hx(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hv(y,!w,z,b)
if(y===0){w=$.aC
if(typeof w!=="number")return w.n()
$.aC=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bt
if(v==null){v=H.cc("self")
$.bt=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aC
if(typeof w!=="number")return w.n()
$.aC=w+1
t+=w
w="return function("+t+"){return this."
v=$.bt
if(v==null){v=H.cc("self")
$.bt=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
hw:function(a,b,c,d){var z,y
z=H.cS
y=H.e9
switch(b?-1:a){case 0:throw H.h(H.jn("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hx:function(a,b){var z,y,x,w,v,u,t,s
z=$.bt
if(z==null){z=H.cc("self")
$.bt=z}y=$.e8
if(y==null){y=H.cc("receiver")
$.e8=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hw(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.aC
if(typeof y!=="number")return y.n()
$.aC=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.aC
if(typeof y!=="number")return y.n()
$.aC=y+1
return new Function(z+y+"}")()},
dT:function(a,b,c,d,e,f,g){return H.hy(a,b,H.U(c),d,!!e,!!f,g)},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.az(a,"String"))},
my:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.az(a,"double"))},
lT:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.az(a,"num"))},
h4:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.az(a,"bool"))},
U:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.az(a,"int"))},
e0:function(a,b){throw H.h(H.az(a,H.bs(H.H(b).substring(3))))},
lV:function(a,b){throw H.h(H.hu(a,H.bs(H.H(b).substring(3))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.N(a)[b])return a
H.e0(a,b)},
e:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else z=!0
if(z)return a
H.lV(a,b)},
mB:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.N(a)[b])return a
H.e0(a,b)},
cJ:function(a){if(a==null)return a
if(!!J.N(a).$isb)return a
throw H.h(H.az(a,"List<dynamic>"))},
lO:function(a,b){var z
if(a==null)return a
z=J.N(a)
if(!!z.$isb)return a
if(z[b])return a
H.e0(a,b)},
h5:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.U(z)]
else return a.$S()}return},
c2:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.h5(J.N(a))
if(z==null)return!1
return H.fU(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.dN)return a
$.dN=!0
try{if(H.c2(a,b))return a
z=H.cL(b)
y=H.az(a,z)
throw H.h(y)}finally{$.dN=!1}},
bq:function(a,b){if(a!=null&&!H.dS(a,b))H.o(H.az(a,H.cL(b)))
return a},
h_:function(a){var z,y
z=J.N(a)
if(!!z.$isq){y=H.h5(z)
if(y!=null)return H.cL(y)
return"Closure"}return H.be(a)},
lY:function(a){throw H.h(new P.hE(H.H(a)))},
h8:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b7:function(a){if(a==null)return
return a.$ti},
mz:function(a,b,c){return H.br(a["$as"+H.i(c)],H.b7(b))},
c6:function(a,b,c,d){var z
H.H(c)
H.U(d)
z=H.br(a["$as"+H.i(c)],H.b7(b))
return z==null?null:z[d]},
ag:function(a,b,c){var z
H.H(b)
H.U(c)
z=H.br(a["$as"+H.i(b)],H.b7(a))
return z==null?null:z[c]},
r:function(a,b){var z
H.U(b)
z=H.b7(a)
return z==null?null:z[b]},
cL:function(a){return H.b5(a,null)},
b5:function(a,b){var z,y
H.d(b,"$isb",[P.u],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bs(a[0].builtin$cls)+H.dQ(a,1,b)
if(typeof a=="function")return H.bs(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.U(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.i(b[y])}if('func' in a)return H.lg(a,b)
if('futureOr' in a)return"FutureOr<"+H.b5("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lg:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.u]
H.d(b,"$isb",z,"$asb")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.i.n(t,b[r])
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
for(z=H.lC(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.H(z[l])
n=n+m+H.b5(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dQ:function(a,b,c){var z,y,x,w,v,u
H.d(c,"$isb",[P.u],"$asb")
if(a==null)return""
z=new P.c0("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b5(u,c)}return"<"+z.i(0)+">"},
br:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aW:function(a,b,c,d){var z,y
H.H(b)
H.cJ(c)
H.H(d)
if(a==null)return!1
z=H.b7(a)
y=J.N(a)
if(y[b]==null)return!1
return H.h2(H.br(y[d],z),null,c,null)},
d:function(a,b,c,d){H.H(b)
H.cJ(c)
H.H(d)
if(a==null)return a
if(H.aW(a,b,c,d))return a
throw H.h(H.az(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bs(b.substring(3))+H.dQ(c,0,null),init.mangledGlobalNames)))},
h2:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ax(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ax(a[y],b,c[y],d))return!1
return!0},
mw:function(a,b,c){return a.apply(b,H.br(J.N(b)["$as"+H.i(c)],H.b7(b)))},
hb:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="A"||a===-1||a===-2||H.hb(z)}return!1},
dS:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="A"||b===-1||b===-2||H.hb(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dS(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c2(a,b)}z=J.N(a).constructor
y=H.b7(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.ax(z,null,b,null)},
w:function(a,b){if(a!=null&&!H.dS(a,b))throw H.h(H.az(a,H.cL(b)))
return a},
ax:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ax(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="A")return!0
if('func' in c)return H.fU(a,b,c,d)
if('func' in a)return c.builtin$cls==="d3"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ax("type" in a?a.type:null,b,x,d)
else if(H.ax(a,b,x,d))return!0
else{if(!('$is'+"ah" in y.prototype))return!1
w=y.prototype["$as"+"ah"]
v=H.br(w,z?a.slice(1):null)
return H.ax(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.h2(H.br(r,z),b,u,d)},
fU:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ax(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ax(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ax(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ax(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.lS(m,b,l,d)},
lS:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ax(c[w],d,a[w],b))return!1}return!0},
mx:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
lP:function(a){var z,y,x,w,v,u
z=H.H($.ha.$1(a))
y=$.cH[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cI[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.H($.h1.$2(a,z))
if(z!=null){y=$.cH[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cI[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cK(x)
$.cH[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cI[z]=x
return x}if(v==="-"){u=H.cK(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hd(a,x)
if(v==="*")throw H.h(P.fr(z))
if(init.leafTags[z]===true){u=H.cK(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hd(a,x)},
hd:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dZ(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cK:function(a){return J.dZ(a,!1,null,!!a.$isaL)},
lR:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cK(z)
else return J.dZ(z,c,null,null)},
lK:function(){if(!0===$.dW)return
$.dW=!0
H.lL()},
lL:function(){var z,y,x,w,v,u,t,s
$.cH=Object.create(null)
$.cI=Object.create(null)
H.lG()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.he.$1(v)
if(u!=null){t=H.lR(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lG:function(){var z,y,x,w,v,u,t
z=C.K()
z=H.bn(C.H,H.bn(C.M,H.bn(C.u,H.bn(C.u,H.bn(C.L,H.bn(C.I,H.bn(C.J(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ha=new H.lH(v)
$.h1=new H.lI(u)
$.he=new H.lJ(t)},
bn:function(a,b){return a(b)||b},
hf:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hg:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
jd:{"^":"a;a,b,c,d,e,f,r,0x",l:{
je:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cl(z)
y=z[0]
x=z[1]
return new H.jd(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jU:{"^":"a;a,b,c,d,e,f",
ai:function(a){var z,y,x
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
l:{
aG:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.u])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jU(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cz:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fm:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iS:{"^":"Y;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
l:{
eP:function(a,b){return new H.iS(a,b==null?null:b.method)}}},
ih:{"^":"Y;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
l:{
d7:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ih(a,y,z?null:b.receiver)}}},
k5:{"^":"Y;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
d0:{"^":"a;a,b"},
lZ:{"^":"q:15;a",
$1:function(a){if(!!J.N(a).$isY)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fP:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa6:1},
q:{"^":"a;",
i:function(a){return"Closure '"+H.be(this).trim()+"'"},
geR:function(){return this},
$isd3:1,
geR:function(){return this}},
f7:{"^":"q;"},
jC:{"^":"f7;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bs(z)+"'"}},
cR:{"^":"f7;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cR))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gY:function(a){var z,y
z=this.c
if(z==null)y=H.bF(this.a)
else y=typeof z!=="object"?J.b9(z):H.bF(z)
return(y^H.bF(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.be(z)+"'")},
l:{
cS:function(a){return a.a},
e9:function(a){return a.c},
cc:function(a){var z,y,x,w,v
z=new H.cR("self","target","receiver","name")
y=J.cl(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jV:{"^":"Y;a",
i:function(a){return this.a},
l:{
az:function(a,b){return new H.jV("TypeError: "+H.i(P.ci(a))+": type '"+H.h_(a)+"' is not a subtype of type '"+b+"'")}}},
ht:{"^":"Y;a",
i:function(a){return this.a},
l:{
hu:function(a,b){return new H.ht("CastError: "+H.i(P.ci(a))+": type '"+H.h_(a)+"' is not a subtype of type '"+b+"'")}}},
jm:{"^":"Y;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
l:{
jn:function(a){return new H.jm(a)}}},
b0:{"^":"iy;a,0b,0c,0d,0e,0f,r,$ti",
gp:function(a){return this.a},
e4:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dw(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dw(y,a)}else return this.ju(a)},
ju:function(a){var z=this.d
if(z==null)return!1
return this.cY(this.cn(z,J.b9(a)&0x3ffffff),a)>=0},
aZ:function(a,b){H.d(b,"$isV",this.$ti,"$asV").a8(0,new H.ig(this))},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bz(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bz(w,b)
x=y==null?null:y.b
return x}else return this.jv(b)},
jv:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cn(z,J.b9(a)&0x3ffffff)
x=this.cY(y,a)
if(x<0)return
return y[x].b},
a_:function(a,b,c){var z,y,x,w,v,u
H.w(b,H.r(this,0))
H.w(c,H.r(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cr()
this.b=z}this.dq(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cr()
this.c=y}this.dq(y,b,c)}else{x=this.d
if(x==null){x=this.cr()
this.d=x}w=J.b9(b)&0x3ffffff
v=this.cn(x,w)
if(v==null)this.cC(x,w,[this.cs(b,c)])
else{u=this.cY(v,b)
if(u>=0)v[u].b=c
else v.push(this.cs(b,c))}}},
a8:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.bu(this))
z=z.c}},
dq:function(a,b,c){var z
H.w(b,H.r(this,0))
H.w(c,H.r(this,1))
z=this.bz(a,b)
if(z==null)this.cC(a,b,this.cs(b,c))
else z.b=c},
cs:function(a,b){var z,y
z=new H.iq(H.w(a,H.r(this,0)),H.w(b,H.r(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
cY:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
i:function(a){return P.eI(this)},
bz:function(a,b){return a[b]},
cn:function(a,b){return a[b]},
cC:function(a,b,c){a[b]=c},
fX:function(a,b){delete a[b]},
dw:function(a,b){return this.bz(a,b)!=null},
cr:function(){var z=Object.create(null)
this.cC(z,"<non-identifier-key>",z)
this.fX(z,"<non-identifier-key>")
return z},
$iseF:1},
ig:{"^":"q;a",
$2:function(a,b){var z=this.a
z.a_(0,H.w(a,H.r(z,0)),H.w(b,H.r(z,1)))},
$S:function(){var z=this.a
return{func:1,ret:P.A,args:[H.r(z,0),H.r(z,1)]}}},
iq:{"^":"a;a,b,0c,0d"},
ir:{"^":"hO;a,$ti",
gp:function(a){return this.a.a},
gP:function(a){var z,y
z=this.a
y=new H.is(z,z.r,this.$ti)
y.c=z.e
return y}},
is:{"^":"a;a,b,0c,0d,$ti",
sdn:function(a){this.d=H.w(a,H.r(this,0))},
gI:function(){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bu(z))
else{z=this.c
if(z==null){this.sdn(null)
return!1}else{this.sdn(z.a)
this.c=this.c.c
return!0}}},
$isaD:1},
lH:{"^":"q:15;a",
$1:function(a){return this.a(a)}},
lI:{"^":"q:30;a",
$2:function(a,b){return this.a(a,b)}},
lJ:{"^":"q:33;a",
$1:function(a){return this.a(H.H(a))}},
ie:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
ghn:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.eC(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
jo:function(a){var z=this.b.exec(a)
if(z==null)return
return new H.fK(this,z)},
h2:function(a,b){var z,y
z=this.ghn()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.fK(this,y)},
$iseQ:1,
l:{
eC:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(P.d1("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
fK:{"^":"a;a,b",
j:function(a,b){return C.a.j(this.b,b)},
$iseJ:1},
ko:{"^":"a;a,b,c,0d",
gI:function(){return this.d},
B:function(){var z,y,x,w
z=this.b
if(z==null)return!1
y=this.c
if(y<=z.length){x=this.a.h2(z,y)
if(x!=null){this.d=x
z=x.b
y=z.index
w=y+z[0].length
this.c=y===w?w+1:w
return!0}}this.d=null
this.b=null
return!1},
$isaD:1,
$asaD:function(){return[P.eJ]}}}],["","",,H,{"^":"",
lC:function(a){return J.ex(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
lU:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bM:function(a){return a},
bL:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.b6(b,a))},
lf:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.ly(a,b,c))
return b},
iQ:{"^":"I;",$ismm:1,"%":";ArrayBufferView;dd|fL|fM|iP|fN|fO|bB"},
dd:{"^":"iQ;",
gp:function(a){return a.length},
$isaL:1,
$asaL:I.dU},
iP:{"^":"fM;",
j:function(a,b){H.bL(b,a,a.length)
return a[b]},
$ascj:function(){return[P.x]},
$asS:function(){return[P.x]},
$isk:1,
$ask:function(){return[P.x]},
$isb:1,
$asb:function(){return[P.x]},
"%":"Float32Array"},
bB:{"^":"fO;",
$ascj:function(){return[P.y]},
$asS:function(){return[P.y]},
$isk:1,
$ask:function(){return[P.y]},
$isb:1,
$asb:function(){return[P.y]}},
mb:{"^":"bB;",
j:function(a,b){H.bL(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mc:{"^":"bB;",
j:function(a,b){H.bL(b,a,a.length)
return a[b]},
"%":"Int32Array"},
md:{"^":"bB;",
j:function(a,b){H.bL(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
me:{"^":"bB;",
gp:function(a){return a.length},
j:function(a,b){H.bL(b,a,a.length)
return a[b]},
$ismn:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
mf:{"^":"bB;",
gp:function(a){return a.length},
j:function(a,b){H.bL(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
fL:{"^":"dd+S;"},
fM:{"^":"fL+cj;"},
fN:{"^":"dd+S;"},
fO:{"^":"fN+cj;"}}],["","",,P,{"^":"",
ks:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lq()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bo(new P.ku(z),1)).observe(y,{childList:true})
return new P.kt(z,y,x)}else if(self.setImmediate!=null)return P.lr()
return P.ls()},
mq:[function(a){self.scheduleImmediate(H.bo(new P.kv(H.l(a,{func:1,ret:-1})),0))},"$1","lq",4,0,8],
mr:[function(a){self.setImmediate(H.bo(new P.kw(H.l(a,{func:1,ret:-1})),0))},"$1","lr",4,0,8],
ms:[function(a){P.dw(C.n,H.l(a,{func:1,ret:-1}))},"$1","ls",4,0,8],
dw:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.f.a3(a.a,1000)
return P.l4(z<0?0:z,b)},
fd:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bf]})
z=C.f.a3(a.a,1000)
return P.l5(z<0?0:z,b)},
ae:function(a){return new P.fC(new P.l3(new P.aa(0,$.E,[a]),[a]),!1,[a])},
ad:function(a,b){H.l(a,{func:1,ret:-1,args:[P.y,,]})
H.j(b,"$isfC")
a.$2(0,null)
b.b=!0
return b.a.a},
a3:function(a,b){P.lc(a,H.l(b,{func:1,ret:-1,args:[P.y,,]}))},
ac:function(a,b){H.j(b,"$isd_").aJ(0,a)},
ab:function(a,b){H.j(b,"$isd_").bg(H.a8(a),H.b8(a))},
lc:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.y,,]})
z=new P.ld(b)
y=new P.le(b)
x=J.N(a)
if(!!x.$isaa)a.cE(H.l(z,{func:1,ret:{futureOr:1},args:[,]}),y,null)
else{w={func:1,ret:{futureOr:1},args:[,]}
if(!!x.$isah)a.c5(H.l(z,w),y,null)
else{v=new P.aa(0,$.E,[null])
H.w(a,null)
v.a=4
v.c=a
v.cE(H.l(z,w),null,null)}}},
af:function(a){var z=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(y){e=y
d=c}}}(a,1)
return $.E.eH(new P.lp(z),P.A,P.y,null)},
ll:function(a,b){if(H.c2(a,{func:1,args:[P.a,P.a6]}))return b.eH(a,null,P.a,P.a6)
if(H.c2(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.cP(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
li:function(){var z,y
for(;z=$.bl,z!=null;){$.bO=null
y=z.b
$.bl=y
if(y==null)$.bN=null
z.a.$0()}},
mv:[function(){$.dO=!0
try{P.li()}finally{$.bO=null
$.dO=!1
if($.bl!=null)$.$get$dL().$1(P.h3())}},"$0","h3",0,0,2],
fX:function(a){var z=new P.fD(H.l(a,{func:1,ret:-1}))
if($.bl==null){$.bN=z
$.bl=z
if(!$.dO)$.$get$dL().$1(P.h3())}else{$.bN.b=z
$.bN=z}},
lo:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bl
if(z==null){P.fX(a)
$.bO=$.bN
return}y=new P.fD(a)
x=$.bO
if(x==null){y.b=z
$.bO=y
$.bl=y}else{y.b=x.b
x.b=y
$.bO=y
if(y.b==null)$.bN=y}},
e1:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.E
if(C.k===y){P.bm(null,null,C.k,a)
return}y.toString
P.bm(null,null,y,H.l(y.cJ(a),z))},
mi:function(a,b){return new P.l2(H.d(a,"$isdp",[b],"$asdp"),!1,[b])},
dv:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.E
if(y===C.k){y.toString
return P.dw(a,b)}return P.dw(a,H.l(y.cJ(b),z))},
jR:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bf]}
H.l(b,z)
y=$.E
if(y===C.k){y.toString
return P.fd(a,b)}x=y.dY(b,P.bf)
$.E.toString
return P.fd(a,H.l(x,z))},
cF:function(a,b,c,d,e){var z={}
z.a=d
P.lo(new P.lm(z,e))},
fV:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.E
if(y===c)return d.$0()
$.E=c
z=y
try{y=d.$0()
return y}finally{$.E=z}},
fW:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.w(e,g)
y=$.E
if(y===c)return d.$1(e)
$.E=c
z=y
try{y=d.$1(e)
return y}finally{$.E=z}},
ln:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
y=$.E
if(y===c)return d.$2(e,f)
$.E=c
z=y
try{y=d.$2(e,f)
return y}finally{$.E=z}},
bm:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.k!==c
if(z)d=!(!z||!1)?c.cJ(d):c.iY(d,-1)
P.fX(d)},
ku:{"^":"q:16;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kt:{"^":"q:28;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kv:{"^":"q:1;a",
$0:function(){this.a.$0()}},
kw:{"^":"q:1;a",
$0:function(){this.a.$0()}},
fQ:{"^":"a;a,0b,c",
fD:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bo(new P.l7(this,b),0),a)
else throw H.h(P.a9("`setTimeout()` not found."))},
fE:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bo(new P.l6(this,a,Date.now(),b),0),a)
else throw H.h(P.a9("Periodic timer."))},
$isbf:1,
l:{
l4:function(a,b){var z=new P.fQ(!0,0)
z.fD(a,b)
return z},
l5:function(a,b){var z=new P.fQ(!1,0)
z.fE(a,b)
return z}}},
l7:{"^":"q:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
l6:{"^":"q:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.fb(w,x)}z.c=y
this.d.$1(z)}},
fC:{"^":"a;a,b,$ti",
aJ:function(a,b){var z
H.bq(b,{futureOr:1,type:H.r(this,0)})
if(this.b)this.a.aJ(0,b)
else if(H.aW(b,"$isah",this.$ti,"$asah")){z=this.a
b.c5(z.gj6(z),z.ge3(),-1)}else P.e1(new P.kq(this,b))},
bg:function(a,b){if(this.b)this.a.bg(a,b)
else P.e1(new P.kp(this,a,b))},
$isd_:1},
kq:{"^":"q:1;a,b",
$0:function(){this.a.a.aJ(0,this.b)}},
kp:{"^":"q:1;a,b,c",
$0:function(){this.a.a.bg(this.b,this.c)}},
ld:{"^":"q:29;a",
$1:function(a){return this.a.$2(0,a)}},
le:{"^":"q:35;a",
$2:function(a,b){this.a.$2(1,new H.d0(a,H.j(b,"$isa6")))}},
lp:{"^":"q:37;a",
$2:function(a,b){this.a(H.U(a),b)}},
fE:{"^":"a;$ti",
bg:[function(a,b){H.j(b,"$isa6")
if(a==null)a=new P.de()
if(this.a.a!==0)throw H.h(P.dn("Future already completed"))
$.E.toString
this.aC(a,b)},function(a){return this.bg(a,null)},"j7","$2","$1","ge3",4,2,39],
$isd_:1},
kr:{"^":"fE;a,$ti",
aJ:function(a,b){var z
H.bq(b,{futureOr:1,type:H.r(this,0)})
z=this.a
if(z.a!==0)throw H.h(P.dn("Future already completed"))
z.fH(b)},
aC:function(a,b){this.a.fI(a,b)}},
l3:{"^":"fE;a,$ti",
aJ:[function(a,b){var z
H.bq(b,{futureOr:1,type:H.r(this,0)})
z=this.a
if(z.a!==0)throw H.h(P.dn("Future already completed"))
z.cj(b)},function(a){return this.aJ(a,null)},"kT","$1","$0","gj6",1,2,40],
aC:function(a,b){this.a.aC(a,b)}},
bj:{"^":"a;0a,b,c,d,e,$ti",
jD:function(a){if(this.c!==6)return!0
return this.b.b.d5(H.l(this.d,{func:1,ret:P.X,args:[P.a]}),a.a,P.X,P.a)},
jr:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.r(this,1)}
w=this.b.b
if(H.c2(z,{func:1,args:[P.a,P.a6]}))return H.bq(w.k5(z,a.a,a.b,null,y,P.a6),x)
else return H.bq(w.d5(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aa:{"^":"a;dQ:a<,b,0i3:c<,$ti",
c5:function(a,b,c){var z,y
z=H.r(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.E
if(y!==C.k){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ll(b,y)}return this.cE(a,b,c)},
ak:function(a,b){return this.c5(a,null,b)},
cE:function(a,b,c){var z,y,x
z=H.r(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=new P.aa(0,$.E,[c])
x=b==null?1:3
this.dr(new P.bj(y,x,a,b,[z,c]))
return y},
dr:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isbj")
this.c=a}else{if(z===2){y=H.j(this.c,"$isaa")
z=y.a
if(z<4){y.dr(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bm(null,null,z,H.l(new P.kD(this,a),{func:1,ret:-1}))}},
dK:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isbj")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isaa")
y=u.a
if(y<4){u.dK(a)
return}this.a=y
this.c=u.c}z.a=this.bF(a)
y=this.b
y.toString
P.bm(null,null,y,H.l(new P.kK(z,this),{func:1,ret:-1}))}},
bE:function(){var z=H.j(this.c,"$isbj")
this.c=null
return this.bF(z)},
bF:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cj:function(a){var z,y,x
z=H.r(this,0)
H.bq(a,{futureOr:1,type:z})
y=this.$ti
if(H.aW(a,"$isah",y,"$asah"))if(H.aW(a,"$isaa",y,null))P.cC(a,this)
else P.fG(a,this)
else{x=this.bE()
H.w(a,z)
this.a=4
this.c=a
P.bk(this,x)}},
aC:function(a,b){var z
H.j(b,"$isa6")
z=this.bE()
this.a=8
this.c=new P.aq(a,b)
P.bk(this,z)},
fH:function(a){var z
H.bq(a,{futureOr:1,type:H.r(this,0)})
if(H.aW(a,"$isah",this.$ti,"$asah")){this.fQ(a)
return}this.a=1
z=this.b
z.toString
P.bm(null,null,z,H.l(new P.kF(this,a),{func:1,ret:-1}))},
fQ:function(a){var z=this.$ti
H.d(a,"$isah",z,"$asah")
if(H.aW(a,"$isaa",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.bm(null,null,z,H.l(new P.kJ(this,a),{func:1,ret:-1}))}else P.cC(a,this)
return}P.fG(a,this)},
fI:function(a,b){var z
this.a=1
z=this.b
z.toString
P.bm(null,null,z,H.l(new P.kE(this,a,b),{func:1,ret:-1}))},
$isah:1,
l:{
fG:function(a,b){var z,y,x
b.a=1
try{a.c5(new P.kG(b),new P.kH(b),null)}catch(x){z=H.a8(x)
y=H.b8(x)
P.e1(new P.kI(b,z,y))}},
cC:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isaa")
if(z>=4){y=b.bE()
b.a=a.a
b.c=a.c
P.bk(b,y)}else{y=H.j(b.c,"$isbj")
b.a=2
b.c=a
a.dK(y)}},
bk:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.j(y.c,"$isaq")
y=y.b
u=v.a
t=v.b
y.toString
P.cF(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bk(z.a,b)}y=z.a
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
if(p){H.j(r,"$isaq")
y=y.b
u=r.a
t=r.b
y.toString
P.cF(null,null,y,u,t)
return}o=$.E
if(o==null?q!=null:o!==q)$.E=q
else o=null
y=b.c
if(y===8)new P.kN(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kM(x,b,r).$0()}else if((y&2)!==0)new P.kL(z,x,b).$0()
if(o!=null)$.E=o
y=x.b
if(!!J.N(y).$isah){if(y.a>=4){n=H.j(t.c,"$isbj")
t.c=null
b=t.bF(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.cC(y,t)
return}}m=b.b
n=H.j(m.c,"$isbj")
m.c=null
b=m.bF(n)
y=x.a
u=x.b
if(!y){H.w(u,H.r(m,0))
m.a=4
m.c=u}else{H.j(u,"$isaq")
m.a=8
m.c=u}z.a=m
y=m}}}},
kD:{"^":"q:1;a,b",
$0:function(){P.bk(this.a,this.b)}},
kK:{"^":"q:1;a,b",
$0:function(){P.bk(this.b,this.a.a)}},
kG:{"^":"q:16;a",
$1:function(a){var z=this.a
z.a=0
z.cj(a)}},
kH:{"^":"q:42;a",
$2:function(a,b){this.a.aC(a,H.j(b,"$isa6"))},
$1:function(a){return this.$2(a,null)}},
kI:{"^":"q:1;a,b,c",
$0:function(){this.a.aC(this.b,this.c)}},
kF:{"^":"q:1;a,b",
$0:function(){var z,y,x
z=this.a
y=H.w(this.b,H.r(z,0))
x=z.bE()
z.a=4
z.c=y
P.bk(z,x)}},
kJ:{"^":"q:1;a,b",
$0:function(){P.cC(this.b,this.a)}},
kE:{"^":"q:1;a,b,c",
$0:function(){this.a.aC(this.b,this.c)}},
kN:{"^":"q:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eJ(H.l(w.d,{func:1}),null)}catch(v){y=H.a8(v)
x=H.b8(v)
if(this.d){w=H.j(this.a.a.c,"$isaq").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isaq")
else u.b=new P.aq(y,x)
u.a=!0
return}if(!!J.N(z).$isah){if(z instanceof P.aa&&z.gdQ()>=4){if(z.gdQ()===8){w=this.b
w.b=H.j(z.gi3(),"$isaq")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ak(new P.kO(t),null)
w.a=!1}}},
kO:{"^":"q:43;a",
$1:function(a){return this.a}},
kM:{"^":"q:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.r(x,0)
v=H.w(this.c,w)
u=H.r(x,1)
this.a.b=x.b.b.d5(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a8(t)
y=H.b8(t)
x=this.a
x.b=new P.aq(z,y)
x.a=!0}}},
kL:{"^":"q:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isaq")
w=this.c
if(w.jD(z)&&w.e!=null){v=this.b
v.b=w.jr(z)
v.a=!1}}catch(u){y=H.a8(u)
x=H.b8(u)
w=H.j(this.a.a.c,"$isaq")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.aq(y,x)
s.a=!0}}},
fD:{"^":"a;a,0b"},
dp:{"^":"a;$ti",
gp:function(a){var z,y,x,w
z={}
y=new P.aa(0,$.E,[P.y])
z.a=0
x=H.r(this,0)
w=H.l(new P.jE(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.jF(z,y),{func:1,ret:-1})
W.Q(this.a,this.b,w,!1,x)
return y}},
jE:{"^":"q;a,b",
$1:function(a){H.w(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.A,args:[H.r(this.b,0)]}}},
jF:{"^":"q:1;a,b",
$0:function(){this.b.cj(this.a.a)}},
dq:{"^":"a;$ti"},
jD:{"^":"a;"},
l2:{"^":"a;0a,b,c,$ti"},
bf:{"^":"a;"},
aq:{"^":"a;a,b",
i:function(a){return H.i(this.a)},
$isY:1},
lb:{"^":"a;",$ismp:1},
lm:{"^":"q:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.de()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.i(0)
throw x}},
kZ:{"^":"lb;",
k6:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.k===$.E){a.$0()
return}P.fV(null,null,this,a,-1)}catch(x){z=H.a8(x)
y=H.b8(x)
P.cF(null,null,this,z,H.j(y,"$isa6"))}},
k7:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.k===$.E){a.$1(b)
return}P.fW(null,null,this,a,b,-1,c)}catch(x){z=H.a8(x)
y=H.b8(x)
P.cF(null,null,this,z,H.j(y,"$isa6"))}},
iY:function(a,b){return new P.l0(this,H.l(a,{func:1,ret:b}),b)},
cJ:function(a){return new P.l_(this,H.l(a,{func:1,ret:-1}))},
dY:function(a,b){return new P.l1(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
j:function(a,b){return},
eJ:function(a,b){H.l(a,{func:1,ret:b})
if($.E===C.k)return a.$0()
return P.fV(null,null,this,a,b)},
d5:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.E===C.k)return a.$1(b)
return P.fW(null,null,this,a,b,c,d)},
k5:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.E===C.k)return a.$2(b,c)
return P.ln(null,null,this,a,b,c,d,e,f)},
eH:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
l0:{"^":"q;a,b,c",
$0:function(){return this.a.eJ(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l_:{"^":"q:2;a,b",
$0:function(){return this.a.k6(this.b)}},
l1:{"^":"q;a,b,c",
$1:function(a){var z=this.c
return this.a.k7(this.b,H.w(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
it:function(a,b,c){H.cJ(a)
return H.d(H.lD(a,new H.b0(0,0,[b,c])),"$iseF",[b,c],"$aseF")},
iu:function(a,b,c,d){return new P.kT(0,0,[d])},
i7:function(a,b,c){var z,y
if(P.dP(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bP()
C.a.h(y,a)
try{P.lh(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.f6(b,H.lO(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
d4:function(a,b,c){var z,y,x
if(P.dP(a))return b+"..."+c
z=new P.c0(b)
y=$.$get$bP()
C.a.h(y,a)
try{x=z
x.a=P.f6(x.gaS(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaS()+c
y=z.gaS()
return y.charCodeAt(0)==0?y:y},
dP:function(a){var z,y
for(z=0;y=$.$get$bP(),z<y.length;++z)if(a===y[z])return!0
return!1},
lh:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gP(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.B())return
w=H.i(z.gI())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.B()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gI();++x
if(!z.B()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gI();++x
for(;z.B();t=s,s=r){r=z.gI();++x
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
eI:function(a){var z,y,x
z={}
if(P.dP(a))return"{...}"
y=new P.c0("")
try{C.a.h($.$get$bP(),a)
x=y
x.a=x.gaS()+"{"
z.a=!0
a.a8(0,new P.iz(z,y))
z=y
z.a=z.gaS()+"}"}finally{z=$.$get$bP()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaS()
return z.charCodeAt(0)==0?z:z},
kT:{"^":"kP;a,0b,0c,0d,0e,0f,r,$ti",
gP:function(a){return P.fI(this,this.r,H.r(this,0))},
gp:function(a){return this.a},
h:function(a,b){var z
H.w(b,H.r(this,0))
if(typeof b==="number"&&(b&0x3ffffff)===b){z=this.c
if(z==null){z=P.fJ()
this.c=z}return this.fT(z,b)}else return this.fS(b)},
fS:function(a){var z,y,x
H.w(a,H.r(this,0))
z=this.d
if(z==null){z=P.fJ()
this.d=z}y=this.du(a)
x=z[y]
if(x==null)z[y]=[this.ci(a)]
else{if(this.dC(x,a)>=0)return!1
x.push(this.ci(a))}return!0},
O:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.hZ(this.c,b)
else return this.hY(b)},
hY:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.h8(z,a)
x=this.dC(y,a)
if(x<0)return!1
this.dS(y.splice(x,1)[0])
return!0},
fT:function(a,b){H.w(b,H.r(this,0))
if(H.j(a[b],"$isdM")!=null)return!1
a[b]=this.ci(b)
return!0},
hZ:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$isdM")
if(z==null)return!1
this.dS(z)
delete a[b]
return!0},
dF:function(){this.r=this.r+1&67108863},
ci:function(a){var z,y
z=new P.dM(H.w(a,H.r(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dF()
return z},
dS:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dF()},
du:function(a){return J.b9(a)&0x3ffffff},
h8:function(a,b){return a[this.du(b)]},
dC:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(a[y].a==b)return y
return-1},
l:{
fJ:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dM:{"^":"a;a,0b,0c"},
kU:{"^":"a;a,b,0c,0d,$ti",
sdt:function(a){this.d=H.w(a,H.r(this,0))},
gI:function(){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bu(z))
else{z=this.c
if(z==null){this.sdt(null)
return!1}else{this.sdt(H.w(z.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
$isaD:1,
l:{
fI:function(a,b,c){var z=new P.kU(a,b,[c])
z.c=a.e
return z}}},
kP:{"^":"jo;"},
cp:{"^":"kV;",$isk:1,$isb:1},
S:{"^":"a;$ti",
gP:function(a){return new H.eG(a,this.gp(a),0,[H.c6(this,a,"S",0)])},
ag:function(a,b){return this.j(a,b)},
kb:function(a,b){var z,y
z=H.c([],[H.c6(this,a,"S",0)])
C.a.sp(z,this.gp(a))
for(y=0;y<this.gp(a);++y)C.a.a_(z,y,this.j(a,y))
return z},
ka:function(a){return this.kb(a,!0)},
n:function(a,b){var z,y
z=[H.c6(this,a,"S",0)]
H.d(b,"$isb",z,"$asb")
y=H.c([],z)
C.a.sp(y,C.f.n(this.gp(a),b.gp(b)))
C.a.bv(y,0,this.gp(a),a)
C.a.bv(y,this.gp(a),y.length,b)
return y},
i:function(a){return P.d4(a,"[","]")}},
iy:{"^":"iA;"},
iz:{"^":"q:14;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
iA:{"^":"a;$ti",
gp:function(a){return this.a},
i:function(a){return P.eI(this)},
$isV:1},
jq:{"^":"a;$ti",
i:function(a){return P.d4(this,"{","}")},
ag:function(a,b){var z,y,x
if(b<0)H.o(P.aj(b,0,null,"index",null))
for(z=P.fI(this,this.r,H.r(this,0)),y=0;z.B();){x=z.d
if(b===y)return x;++y}throw H.h(P.bx(b,this,"index",null,y))},
$isk:1,
$isf1:1},
jo:{"^":"jq;"},
kV:{"^":"a+S;"}}],["","",,P,{"^":"",cX:{"^":"a;$ti"},eh:{"^":"jD;$ti"},hQ:{"^":"cX;",
$ascX:function(){return[P.u,[P.b,P.y]]}},ka:{"^":"hQ;a"},kb:{"^":"eh;",
ja:function(a,b,c){var z,y,x,w
z=a.length
P.dh(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.la(0,0,x)
if(w.h7(a,b,z)!==z)w.dT(C.i.bf(a,z-1),0)
return new Uint8Array(x.subarray(0,H.lf(0,w.b,x.length)))},
j9:function(a){return this.ja(a,0,null)},
$aseh:function(){return[P.u,[P.b,P.y]]}},la:{"^":"a;a,b,c",
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
h7:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.bf(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.aR(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dT(w,C.i.aR(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
dX:function(a,b,c){var z
H.H(a)
z=H.j7(a,c)
if(z!=null)return z
throw H.h(P.d1(a,null,null))},
lB:function(a,b){var z=H.j6(a)
if(z!=null)return z
throw H.h(P.d1("Invalid double",a,null))},
hS:function(a){if(a instanceof H.q)return a.i(0)
return"Instance of '"+H.be(a)+"'"},
iv:function(a,b,c,d){var z,y
H.w(b,d)
z=J.ia(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a_(z,y,b)
return H.d(z,"$isb",[d],"$asb")},
iw:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gP(a);x.B();)C.a.h(y,H.w(x.gI(),c))
if(b)return y
return H.d(J.cl(y),"$isb",z,"$asb")},
dr:function(a,b,c){var z,y
z=P.y
H.d(a,"$isk",[z],"$ask")
if(a.constructor===Array){H.d(a,"$isb_",[z],"$asb_")
y=a.length
c=P.dh(b,c,y,null,null,null)
return H.eX(b>0||c<y?C.a.f7(a,b,c):a)}return P.jG(a,b,c)},
jG:function(a,b,c){var z,y,x
H.d(a,"$isk",[P.y],"$ask")
z=J.c9(a)
for(y=0;y<b;++y)if(!z.B())throw H.h(P.aj(b,0,y,null,null))
x=[]
for(;z.B();)x.push(z.gI())
return H.eX(x)},
di:function(a,b,c){return new H.ie(a,H.eC(a,!1,!0,!1))},
fT:function(a,b,c,d){var z,y,x,w,v,u
H.d(a,"$isb",[P.y],"$asb")
if(c===C.q){z=$.$get$fS().b
z=z.test(b)}else z=!1
if(z)return b
y=C.B.j9(H.w(b,H.ag(c,"cX",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.j8(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
ci:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ao(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hS(a)},
m:function(a){return new P.fF(a)},
c7:function(a){H.lU(a)},
X:{"^":"a;"},
"+bool":0,
aJ:{"^":"a;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aJ))return!1
return this.a===b.a&&!0},
gY:function(a){var z=this.a
return(z^C.f.bI(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.hF(H.j5(this))
y=P.bQ(H.j3(this))
x=P.bQ(H.j_(this))
w=P.bQ(H.j0(this))
v=P.bQ(H.j2(this))
u=P.bQ(H.j4(this))
t=P.hG(H.j1(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
l:{
hF:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hG:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bQ:function(a){if(a>=10)return""+a
return"0"+a}}},
x:{"^":"an;"},
"+double":0,
ba:{"^":"a;a",
n:function(a,b){return new P.ba(C.f.n(this.a,b.gfZ()))},
Z:function(a,b){return C.f.Z(this.a,H.j(b,"$isba").a)},
b7:function(a,b){return C.f.b7(this.a,b.gfZ())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.ba))return!1
return this.a===b.a},
gY:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hL()
y=this.a
if(y<0)return"-"+new P.ba(0-y).i(0)
x=z.$1(C.f.a3(y,6e7)%60)
w=z.$1(C.f.a3(y,1e6)%60)
v=new P.hK().$1(y%1e6)
return""+C.f.a3(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
l:{
er:function(a,b,c,d,e,f){return new P.ba(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hK:{"^":"q:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hL:{"^":"q:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Y:{"^":"a;"},
de:{"^":"Y;",
i:function(a){return"Throw of null."}},
aX:{"^":"Y;a,b,c,d",
gcl:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gck:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gcl()+y+x
if(!this.a)return w
v=this.gck()
u=P.ci(this.b)
return w+v+": "+H.i(u)},
l:{
hl:function(a){return new P.aX(!1,null,null,a)},
cP:function(a,b,c){return new P.aX(!0,a,b,c)}}},
cs:{"^":"aX;e,f,a,b,c,d",
gcl:function(){return"RangeError"},
gck:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
l:{
ct:function(a,b,c){return new P.cs(null,null,!0,a,b,"Value not in range")},
aj:function(a,b,c,d,e){return new P.cs(b,c,!0,a,d,"Invalid value")},
dh:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.aj(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.h(P.aj(b,a,c,"end",f))
return b}return c}}},
i6:{"^":"aX;e,p:f>,a,b,c,d",
gcl:function(){return"RangeError"},
gck:function(){if(J.cM(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
l:{
bx:function(a,b,c,d,e){var z=H.U(e!=null?e:J.aH(b))
return new P.i6(b,z,!0,a,c,"Index out of range")}}},
k7:{"^":"Y;a",
i:function(a){return"Unsupported operation: "+this.a},
l:{
a9:function(a){return new P.k7(a)}}},
k4:{"^":"Y;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
l:{
fr:function(a){return new P.k4(a)}}},
dm:{"^":"Y;a",
i:function(a){return"Bad state: "+this.a},
l:{
dn:function(a){return new P.dm(a)}}},
hB:{"^":"Y;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.ci(z))+"."},
l:{
bu:function(a){return new P.hB(a)}}},
iU:{"^":"a;",
i:function(a){return"Out of Memory"},
$isY:1},
f5:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isY:1},
hE:{"^":"Y;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fF:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hX:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.i(z):"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.i.bw(x,0,75)+"..."
return y+"\n"+x},
l:{
d1:function(a,b,c){return new P.hX(a,b,c)}}},
y:{"^":"an;"},
"+int":0,
k:{"^":"a;$ti",
gp:function(a){var z,y
z=this.gP(this)
for(y=0;z.B();)++y
return y},
ag:function(a,b){var z,y,x
if(b<0)H.o(P.aj(b,0,null,"index",null))
for(z=this.gP(this),y=0;z.B();){x=z.gI()
if(b===y)return x;++y}throw H.h(P.bx(b,this,"index",null,y))},
i:function(a){return P.i7(this,"(",")")}},
aD:{"^":"a;$ti"},
b:{"^":"a;$ti",$isk:1},
"+List":0,
V:{"^":"a;$ti"},
A:{"^":"a;",
gY:function(a){return P.a.prototype.gY.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
an:{"^":"a;"},
"+num":0,
a:{"^":";",
v:function(a,b){return this===b},
gY:function(a){return H.bF(this)},
i:function(a){return"Instance of '"+H.be(this)+"'"},
toString:function(){return this.i(this)}},
eJ:{"^":"a;"},
a6:{"^":"a;"},
u:{"^":"a;",$iseQ:1},
"+String":0,
c0:{"^":"a;aS:a<",
gp:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
l:{
f6:function(a,b,c){var z=J.c9(b)
if(!z.B())return a
if(c.length===0){do a+=H.i(z.gI())
while(z.B())}else{a+=H.i(z.gI())
for(;z.B();)a=a+c+H.i(z.gI())}return a}}}}],["","",,W,{"^":"",
hk:function(a){var z=document.createElement("a")
return z},
cV:function(a,b){var z=document.createElement("canvas")
return z},
hP:function(a){H.j(a,"$isbR")
return"wheel"},
eu:function(a,b,c){return W.i3(a,null,null,b,null,null,null,c).ak(new W.i2(),P.u)},
i3:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=W.bw
y=new P.aa(0,$.E,[z])
x=new P.kr(y,[z])
w=new XMLHttpRequest()
C.E.jK(w,"GET",a,!0)
z=W.c_
v={func:1,ret:-1,args:[z]}
W.Q(w,"load",H.l(new W.i4(w,x),v),!1,z)
W.Q(w,"error",H.l(x.ge3(),v),!1,z)
w.send()
return y},
ew:function(a,b,c){var z=document.createElement("img")
z.src=b
return z},
cD:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fH:function(a,b,c,d){var z,y
z=W.cD(W.cD(W.cD(W.cD(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
h0:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.E
if(z===C.k)return a
return z.dY(a,b)},
aK:{"^":"a1;","%":"HTMLBRElement|HTMLBaseElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
m0:{"^":"aK;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
m1:{"^":"aK;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
hr:{"^":"aK;","%":"HTMLBodyElement"},
cU:{"^":"aK;",
ca:function(a,b,c){if(c!=null)return this.h9(a,b,P.lu(c,null))
return this.ha(a,b)},
eW:function(a,b){return this.ca(a,b,null)},
h9:function(a,b,c){return a.getContext(b,c)},
ha:function(a,b){return a.getContext(b)},
$iscU:1,
$isec:1,
"%":"HTMLCanvasElement"},
cW:{"^":"I;",
hb:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jk:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$iscW:1,
"%":"CanvasRenderingContext2D"},
m4:{"^":"O;0p:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
m6:{"^":"kz;0p:length=",
eZ:function(a,b){var z=this.hc(a,this.fN(a,b))
return z==null?"":z},
fN:function(a,b){var z,y
z=$.$get$ei()
y=z[b]
if(typeof y==="string")return y
y=this.ic(a,b)
z[b]=y
return y},
ic:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hH()+b
if(z in a)return z
return b},
hc:function(a,b){return a.getPropertyValue(b)},
gcK:function(a){return a.bottom},
gbi:function(a){return a.height},
gb4:function(a){return a.left},
gbo:function(a){return a.right},
gbs:function(a){return a.top},
gbu:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hD:{"^":"a;",
gb4:function(a){return this.eZ(a,"left")}},
eq:{"^":"aK;",$iseq:1,"%":"HTMLDivElement"},
hI:{"^":"O;",
eX:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
m7:{"^":"I;",
i:function(a){return String(a)},
"%":"DOMException"},
hJ:{"^":"I;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
v:function(a,b){var z
if(b==null)return!1
if(!H.aW(b,"$isaP",[P.an],"$asaP"))return!1
z=J.c4(b)
return a.left===z.gb4(b)&&a.top===z.gbs(b)&&a.width===z.gbu(b)&&a.height===z.gbi(b)},
gY:function(a){return W.fH(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcK:function(a){return a.bottom},
gbi:function(a){return a.height},
gb4:function(a){return a.left},
gbo:function(a){return a.right},
gbs:function(a){return a.top},
gbu:function(a){return a.width},
$isaP:1,
$asaP:function(){return[P.an]},
"%":";DOMRectReadOnly"},
ky:{"^":"cp;a,b",
gp:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.f(z,b)
return H.j(z[b],"$isa1")},
h:function(a,b){J.e3(this.a,b)
return b},
gP:function(a){var z=this.ka(this)
return new J.ap(z,z.length,0,[H.r(z,0)])},
$asS:function(){return[W.a1]},
$ask:function(){return[W.a1]},
$asb:function(){return[W.a1]}},
a1:{"^":"O;",
ge0:function(a){return new W.ky(a,a.children)},
ge2:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.Z()
if(x<0)x=-x*0
if(typeof w!=="number")return w.Z()
if(w<0)w=-w*0
return new P.aP(z,y,x,w,[P.an])},
i:function(a){return a.localName},
$isa1:1,
"%":";Element"},
Z:{"^":"I;",$isZ:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
bR:{"^":"I;",
fG:function(a,b,c,d){return a.addEventListener(b,H.bo(H.l(c,{func:1,args:[W.Z]}),1),!1)},
$isbR:1,
"%":";EventTarget"},
m8:{"^":"aK;0p:length=","%":"HTMLFormElement"},
i_:{"^":"kR;",
gp:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bx(b,a,null,null,null))
return a[b]},
ag:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isaL:1,
$asaL:function(){return[W.O]},
$asS:function(){return[W.O]},
$isk:1,
$ask:function(){return[W.O]},
$isb:1,
$asb:function(){return[W.O]},
$isi_:1,
$asaZ:function(){return[W.O]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
i0:{"^":"hI;","%":"HTMLDocument"},
bw:{"^":"i1;",
l2:function(a,b,c,d,e,f){return a.open(b,c)},
jK:function(a,b,c,d){return a.open(b,c,d)},
$isbw:1,
"%":"XMLHttpRequest"},
i2:{"^":"q:23;",
$1:function(a){return H.j(a,"$isbw").responseText}},
i4:{"^":"q:24;a,b",
$1:function(a){var z,y,x,w,v
H.j(a,"$isc_")
z=this.a
y=z.status
if(typeof y!=="number")return y.b7()
x=y>=200&&y<300
w=y>307&&y<400
y=x||y===0||y===304||w
v=this.b
if(y)v.aJ(0,z)
else v.j7(a)}},
i1:{"^":"bR;","%":";XMLHttpRequestEventTarget"},
ck:{"^":"I;0e6:data=",$isck:1,"%":"ImageData"},
ev:{"^":"aK;",$isev:1,$isec:1,"%":"HTMLImageElement"},
bz:{"^":"dz;",$isbz:1,"%":"KeyboardEvent"},
iM:{"^":"aK;","%":"HTMLAudioElement;HTMLMediaElement"},
ay:{"^":"dz;",$isay:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kx:{"^":"cp;a",
gP:function(a){var z=this.a.childNodes
return new W.es(z,z.length,-1,[H.c6(C.O,z,"aZ",0)])},
gp:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asS:function(){return[W.O]},
$ask:function(){return[W.O]},
$asb:function(){return[W.O]}},
O:{"^":"bR;",
i:function(a){var z=a.nodeValue
return z==null?this.f8(a):z},
X:function(a,b){return a.appendChild(b)},
$isO:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
iR:{"^":"kX;",
gp:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bx(b,a,null,null,null))
return a[b]},
ag:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isaL:1,
$asaL:function(){return[W.O]},
$asS:function(){return[W.O]},
$isk:1,
$ask:function(){return[W.O]},
$isb:1,
$asb:function(){return[W.O]},
$asaZ:function(){return[W.O]},
"%":"NodeList|RadioNodeList"},
c_:{"^":"Z;",$isc_:1,"%":"ProgressEvent|ResourceProgressEvent"},
mg:{"^":"aK;0p:length=","%":"HTMLSelectElement"},
bH:{"^":"I;",$isbH:1,"%":"Touch"},
bg:{"^":"dz;",$isbg:1,"%":"TouchEvent"},
ml:{"^":"l9;",
gp:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bx(b,a,null,null,null))
return a[b]},
ag:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isaL:1,
$asaL:function(){return[W.bH]},
$asS:function(){return[W.bH]},
$isk:1,
$ask:function(){return[W.bH]},
$isb:1,
$asb:function(){return[W.bH]},
$asaZ:function(){return[W.bH]},
"%":"TouchList"},
dz:{"^":"Z;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mo:{"^":"iM;",$isec:1,"%":"HTMLVideoElement"},
bK:{"^":"ay;",
gjg:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.a9("deltaY is not supported"))},
gjf:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.a9("deltaX is not supported"))},
$isbK:1,
"%":"WheelEvent"},
kn:{"^":"bR;",
i0:function(a,b){return a.requestAnimationFrame(H.bo(H.l(b,{func:1,ret:-1,args:[P.an]}),1))},
h0:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mt:{"^":"hJ;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
v:function(a,b){var z
if(b==null)return!1
if(!H.aW(b,"$isaP",[P.an],"$asaP"))return!1
z=J.c4(b)
return a.left===z.gb4(b)&&a.top===z.gbs(b)&&a.width===z.gbu(b)&&a.height===z.gbi(b)},
gY:function(a){return W.fH(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbi:function(a){return a.height},
gbu:function(a){return a.width},
"%":"ClientRect|DOMRect"},
kA:{"^":"dp;a,b,c,$ti"},
mu:{"^":"kA;a,b,c,$ti"},
kB:{"^":"dq;a,b,c,d,e,$ti",
iq:function(){var z,y
z=this.d
y=z!=null
if(y&&this.a<=0){H.l(z,{func:1,args:[W.Z]})
if(y)J.hi(this.b,this.c,z,!1)}},
l:{
Q:function(a,b,c,d,e){var z=W.h0(new W.kC(c),W.Z)
z=new W.kB(0,a,b,z,!1,[e])
z.iq()
return z}}},
kC:{"^":"q:25;a",
$1:function(a){return this.a.$1(H.j(a,"$isZ"))}},
aZ:{"^":"a;$ti",
gP:function(a){return new W.es(a,this.gp(a),-1,[H.c6(this,a,"aZ",0)])}},
es:{"^":"a;a,b,c,0d,$ti",
sdB:function(a){this.d=H.w(a,H.r(this,0))},
B:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdB(J.K(this.a,z))
this.c=z
return!0}this.sdB(null)
this.c=y
return!1},
gI:function(){return this.d},
$isaD:1},
kz:{"^":"I+hD;"},
kQ:{"^":"I+S;"},
kR:{"^":"kQ+aZ;"},
kW:{"^":"I+S;"},
kX:{"^":"kW+aZ;"},
l8:{"^":"I+S;"},
l9:{"^":"l8+aZ;"}}],["","",,P,{"^":"",
lx:function(a){var z,y
z=J.N(a)
if(!!z.$isck){y=z.ge6(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fR(a.data,a.height,a.width)},
lw:function(a){if(a instanceof P.fR)return{data:a.a,height:a.b,width:a.c}
return a},
lu:function(a,b){var z={}
a.a8(0,new P.lv(z))
return z},
eo:function(){var z=$.en
if(z==null){z=J.cN(window.navigator.userAgent,"Opera",0)
$.en=z}return z},
hH:function(){var z,y
z=$.ek
if(z!=null)return z
y=$.el
if(y==null){y=J.cN(window.navigator.userAgent,"Firefox",0)
$.el=y}if(y)z="-moz-"
else{y=$.em
if(y==null){y=!P.eo()&&J.cN(window.navigator.userAgent,"Trident/",0)
$.em=y}if(y)z="-ms-"
else z=P.eo()?"-o-":"-webkit-"}$.ek=z
return z},
fR:{"^":"a;e6:a>,b,c",$isck:1},
lv:{"^":"q:14;a",
$2:function(a,b){this.a[a]=b}},
hU:{"^":"cp;a,b",
gco:function(){var z,y,x
z=this.b
y=H.ag(z,"S",0)
x=W.a1
return new H.iB(new H.kl(z,H.l(new P.hV(),{func:1,ret:P.X,args:[y]}),[y]),H.l(new P.hW(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){J.e3(this.b.a,b)},
gp:function(a){return J.aH(this.gco().a)},
j:function(a,b){var z=this.gco()
return z.b.$1(J.e4(z.a,b))},
gP:function(a){var z=P.iw(this.gco(),!1,W.a1)
return new J.ap(z,z.length,0,[H.r(z,0)])},
$asS:function(){return[W.a1]},
$ask:function(){return[W.a1]},
$asb:function(){return[W.a1]}},
hV:{"^":"q:26;",
$1:function(a){return!!J.N(H.j(a,"$isO")).$isa1}},
hW:{"^":"q:27;",
$1:function(a){return H.e(H.j(a,"$isO"),"$isa1")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cE:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kS:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kY:{"^":"a;$ti",
gbo:function(a){var z=this.a
if(typeof z!=="number")return z.n()
return H.w(z+this.c,H.r(this,0))},
gcK:function(a){var z=this.b
if(typeof z!=="number")return z.n()
return H.w(z+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.aW(b,"$isaP",[P.an],"$asaP"))return!1
z=this.a
y=J.c4(b)
x=y.gb4(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbs(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.n()
w=H.r(this,0)
if(H.w(z+this.c,w)===y.gbo(b)){if(typeof x!=="number")return x.n()
z=H.w(x+this.d,w)===y.gcK(b)}else z=!1}else z=!1}else z=!1
return z},
gY:function(a){var z,y,x,w,v
z=this.a
y=J.b9(z)
x=this.b
w=J.b9(x)
if(typeof z!=="number")return z.n()
v=H.r(this,0)
z=H.w(z+this.c,v)
if(typeof x!=="number")return x.n()
v=H.w(x+this.d,v)
return P.kS(P.cE(P.cE(P.cE(P.cE(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aP:{"^":"kY;b4:a>,bs:b>,bu:c>,bi:d>,$ti"}}],["","",,P,{"^":"",mj:{"^":"a1;",
ge0:function(a){return new P.hU(a,new W.kx(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",hs:{"^":"I;",$ishs:1,"%":"WebGLBuffer"},hY:{"^":"I;",$ishY:1,"%":"WebGLFramebuffer"},ja:{"^":"I;",$isja:1,"%":"WebGLProgram"},dj:{"^":"I;",
bL:function(a,b){return a.activeTexture(b)},
dX:function(a,b,c){return a.attachShader(b,c)},
ax:function(a,b,c){return a.bindBuffer(b,c)},
iZ:function(a,b,c){return a.bindFramebuffer(b,c)},
a4:function(a,b,c){return a.bindTexture(b,c)},
j_:function(a,b,c){return a.blendFunc(b,c)},
dZ:function(a,b,c,d){return a.bufferData(b,c,d)},
j2:function(a,b){return a.clear(b)},
j3:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
j4:function(a,b){return a.clearDepth(b)},
j5:function(a,b){return a.compileShader(b)},
jb:function(a,b){return a.createShader(b)},
jd:function(a,b){return a.deleteProgram(b)},
je:function(a,b){return a.deleteShader(b)},
jh:function(a,b){return a.depthFunc(b)},
ji:function(a,b){return a.disable(b)},
e8:function(a,b){return a.disableVertexAttribArray(b)},
jj:function(a,b,c,d,e){return a.drawElements(b,c,H.U(d),H.U(e))},
cQ:function(a,b){return a.enable(b)},
ea:function(a,b){return a.enableVertexAttribArray(b)},
eS:function(a,b){return a.generateMipmap(b)},
eT:function(a,b,c){return a.getActiveAttrib(b,c)},
eU:function(a,b,c){return a.getActiveUniform(b,c)},
eV:function(a,b,c){return a.getAttribLocation(b,c)},
d9:function(a,b){return a.getParameter(b)},
eY:function(a,b){return a.getProgramInfoLog(b)},
cb:function(a,b,c){return a.getProgramParameter(b,c)},
f_:function(a,b){return a.getShaderInfoLog(b)},
f0:function(a,b,c){return a.getShaderParameter(b,c)},
f1:function(a,b,c){return a.getUniformLocation(b,c)},
jA:function(a,b){return a.linkProgram(b)},
eG:function(a,b,c){return a.pixelStorei(b,c)},
f6:function(a,b,c){return a.shaderSource(b,c)},
k8:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.N(g)
if(!!z.$isck)y=!0
else y=!1
if(y){this.ig(a,b,c,d,e,f,P.lw(g))
return}if(!!z.$isev)z=!0
else z=!1
if(z){this.ih(a,b,c,d,e,f,g)
return}throw H.h(P.hl("Incorrect number or type of arguments"))},
eK:function(a,b,c,d,e,f,g){return this.k8(a,b,c,d,e,f,g,null,null,null)},
ig:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ih:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aA:function(a,b,c,d){return a.texParameteri(b,c,d)},
G:function(a,b,c){return a.uniform1f(b,c)},
H:function(a,b,c){return a.uniform1i(b,c)},
u:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eN:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eO:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
d7:function(a,b){return a.useProgram(b)},
ke:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kg:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isdj:1,
"%":"WebGLRenderingContext"},jr:{"^":"I;",$isjr:1,"%":"WebGLShader"},jH:{"^":"I;",$isjH:1,"%":"WebGLTexture"},k2:{"^":"I;",$isk2:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",M:{"^":"a;0a,0b,0c,0d,$ti",
shh:function(a){this.a=H.d(a,"$isb",[H.ag(this,"M",0)],"$asb")},
sdI:function(a){this.b=H.l(a,{func:1,ret:P.X,args:[[P.k,H.ag(this,"M",0)]]})},
sdG:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.y,[P.k,H.ag(this,"M",0)]]})},
sdJ:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.y,[P.k,H.ag(this,"M",0)]]})},
bx:function(a){this.shh(H.c([],[a]))
this.sdI(null)
this.sdG(null)
this.sdJ(null)},
da:function(a,b,c){var z=H.ag(this,"M",0)
H.l(b,{func:1,ret:P.X,args:[[P.k,z]]})
z={func:1,ret:-1,args:[P.y,[P.k,z]]}
H.l(a,z)
H.l(c,z)
this.sdI(b)
this.sdG(a)
this.sdJ(c)},
b8:function(a,b){return this.da(a,null,b)},
aG:function(a){var z
H.d(a,"$isk",[H.ag(this,"M",0)],"$ask")
z=this.b
if(z!=null)return z.$1(a)
return!0},
di:function(a,b){var z
H.d(b,"$isk",[H.ag(this,"M",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gp:function(a){return this.a.length},
gP:function(a){var z=this.a
return new J.ap(z,z.length,0,[H.r(z,0)])},
ag:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ag(this,"M",0)
H.w(b,z)
z=[z]
if(this.aG(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.di(x,H.c([b],z))}},
aZ:function(a,b){var z,y
H.d(b,"$isk",[H.ag(this,"M",0)],"$ask")
if(this.aG(b)){z=this.a
y=z.length
C.a.aZ(z,b)
this.di(y,b)}},
j:function(a,b){var z=this.a
if(b>=z.length)return H.f(z,b)
return z[b]},
$isk:1,
l:{
cY:function(a){var z=new O.M([a])
z.bx(a)
return z}}},d9:{"^":"a;0a,0b",
scp:function(a){this.a=H.d(a,"$isb",[V.ai],"$asb")},
gp:function(a){return this.a.length},
gq:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
fq:function(a){var z=this.b
if(!(z==null))z.F(a)},
aQ:function(){return this.fq(null)},
gN:function(){var z=this.a
if(z.length>0)return C.a.gd_(z)
else return V.b1()},
c4:function(a){var z=this.a
if(a==null)C.a.h(z,V.b1())
else C.a.h(z,a)
this.aQ()},
aN:function(){var z=this.a
if(z.length>0){z.pop()
this.aQ()}}}}],["","",,E,{"^":"",cQ:{"^":"a;"},L:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0am:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sfs:function(a,b){this.y=H.d(b,"$isM",[E.L],"$asM")},
sam:function(a){this.z=H.j(a,"$isbv")},
ad:function(a,b,c,d,e,f){this.a=d
this.b=!0
this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.sfs(0,O.cY(E.L))
this.y.b8(this.gjE(),this.gjG())
this.z=null
this.Q=null
this.ch=null
this.cx=null
this.cy=null
this.db=null
this.dx=null
this.dy=null
this.fr=null
this.fx=null
this.sac(0,e)
this.sa2(f)
this.sc3(c)},
ds:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.ap(z,z.length,0,[H.r(z,0)]);z.B();){y=z.d
if(y.f==null)y.ds()}},
sac:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gq().O(0,this.geE())
y=this.c
if(y!=null)y.gq().h(0,this.geE())
x=new D.B("shape",z,this.c,this,[F.f2])
x.b=!0
this.a9(x)}},
sa2:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gq().O(0,this.geF())
y=this.f
this.f=a
if(a!=null)a.gq().h(0,this.geF())
this.ds()
x=new D.B("technique",y,this.f,this,[O.bG])
x.b=!0
this.a9(x)}},
sc3:function(a){var z,y
if(!J.R(this.r,a)){z=this.r
if(z!=null)z.gq().O(0,this.geD())
if(a!=null)a.gq().h(0,this.geD())
this.r=a
y=new D.B("mover",z,a,this,[U.at])
y.b=!0
this.a9(y)}},
aB:function(a){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.R(y,this.x)){x=this.x
this.x=y
w=new D.B("matrix",x,y,this,[V.ai])
w.b=!0
this.a9(w)}z=this.f
if(z!=null)z.aB(a)
for(z=this.y.a,z=new J.ap(z,z.length,0,[H.r(z,0)]);z.B();)z.d.aB(a)},
aa:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gN())
else C.a.h(z.a,y.k(0,z.gN()))
z.aQ()
a.d4(this.f)
z=a.dy
x=(z&&C.a).gd_(z)
if(x!=null&&this.d!=null)x.eI(a,this)
for(z=this.y.a,z=new J.ap(z,z.length,0,[H.r(z,0)]);z.B();)z.d.aa(a)
a.d3()
a.dx.aN()},
gq:function(){var z=this.z
if(z==null){z=D.F()
this.z=z}return z},
a9:function(a){var z=this.z
if(!(z==null))z.F(a)},
a5:function(){return this.a9(null)},
jI:[function(a){H.j(a,"$isv")
this.e=null
this.a9(a)},function(){return this.jI(null)},"l0","$1","$0","geE",0,2,0],
jJ:[function(a){this.a9(H.j(a,"$isv"))},function(){return this.jJ(null)},"l1","$1","$0","geF",0,2,0],
jH:[function(a){this.a9(H.j(a,"$isv"))},function(){return this.jH(null)},"l_","$1","$0","geD",0,2,0],
jF:[function(a){this.a9(H.j(a,"$isv"))},function(){return this.jF(null)},"kY","$1","$0","geC",0,2,0],
kX:[function(a,b){var z,y,x,w,v,u,t
H.d(b,"$isk",[E.L],"$ask")
for(z=b.length,y=this.geC(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gam()==null){t=new D.bv()
t.sae(null)
t.sbB(null)
t.c=null
t.d=0
u.sam(t)}t=u.gam()
t.toString
H.l(y,x)
if(t.a==null)t.sae(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a5()},"$2","gjE",8,0,6],
kZ:[function(a,b){var z,y
H.d(b,"$isk",[E.L],"$ask")
for(z=b.gP(b),y=this.geC();z.B();)z.gI().gq().O(0,y)
this.a5()},"$2","gjG",8,0,6],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaE:1,
l:{
ar:function(a,b,c,d,e,f){var z=new E.L()
z.ad(a,!0,c,d,e,f)
return z}}},jf:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
sie:function(a){this.dy=H.d(a,"$isb",[O.bG],"$asb")},
si8:function(a){this.fr=H.d(a,"$isV",[P.u,A.cw],"$asV")},
fl:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.aJ(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d9()
y=[V.ai]
z.scp(H.c([],y))
z.b=null
z.gq().h(0,new E.jh(this))
this.cy=z
z=new O.d9()
z.scp(H.c([],y))
z.b=null
z.gq().h(0,new E.ji(this))
this.db=z
z=new O.d9()
z.scp(H.c([],y))
z.b=null
z.gq().h(0,new E.jj(this))
this.dx=z
this.sie(H.c([],[O.bG]))
z=this.dy;(z&&C.a).h(z,null)
this.si8(new H.b0(0,0,[P.u,A.cw]))},
gjX:function(){var z=this.z
if(z==null){z=this.cy.gN().k(0,this.db.gN())
this.z=z}return z},
d4:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gd_(z):a;(z&&C.a).h(z,y)},
d3:function(){var z=this.dy
if(z.length>1)z.pop()},
dW:function(a){var z=a.b
if(z.length===0)throw H.h(P.m("May not cache a shader with no name."))
if(this.fr.e4(z))throw H.h(P.m('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.a_(0,z,a)},
l:{
jg:function(a,b){var z=new E.jf(a,b)
z.fl(a,b)
return z}}},jh:{"^":"q:9;a",
$1:function(a){var z
H.j(a,"$isv")
z=this.a
z.z=null
z.ch=null}},ji:{"^":"q:9;a",
$1:function(a){var z
H.j(a,"$isv")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jj:{"^":"q:9;a",
$1:function(a){var z
H.j(a,"$isv")
z=this.a
z.ch=null
z.cx=null}},jM:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0am:x<,0y,0z,0Q,0ch,0cx,0cy",
sam:function(a){this.x=H.j(a,"$isbv")},
fu:[function(a){H.j(a,"$isv")
this.k_()},function(){return this.fu(null)},"ft","$1","$0","gdj",0,2,0],
gjq:function(){var z,y,x
z=Date.now()
y=C.f.a3(P.er(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.aJ(z,!1)
return x/y},
dL:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.n(z)
x=C.j.cX(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.j.cX(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.dv(C.n,this.gjZ())}},
k_:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.jO(this),{func:1,ret:-1,args:[P.an]})
C.z.h0(z)
C.z.i0(z,W.h0(y,P.an))}},"$0","gjZ",0,0,2],
jY:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dL()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aJ(w,!1)
x.y=P.er(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sp(w.a,0)
w.aQ()
w=x.db
C.a.sp(w.a,0)
w.aQ()
w=x.dx
C.a.sp(w.a,0)
w.aQ()
w=x.dy;(w&&C.a).sp(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aa(this.e)}}catch(v){z=H.a8(v)
y=H.b8(v)
P.c7("Error: "+H.i(z))
P.c7("Stack: "+H.i(y))
throw H.h(z)}},
l:{
jN:function(a,b,c,d,e){var z,y,x,w
z=J.N(a)
if(!!z.$iscU)return E.fc(a,!0,!0,!0,!1)
y=W.cV(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.ge0(a).h(0,y)
w=E.fc(y,!0,!0,!0,!1)
w.a=a
return w},
fc:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jM()
y=P.it(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.u,null)
x=C.m.ca(a,"webgl",y)
x=H.j(x==null?C.m.ca(a,"experimental-webgl",y):x,"$isdj")
if(x==null)H.o(P.m("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jg(x,a)
w=new T.jJ(x)
w.b=H.U((x&&C.b).d9(x,3379))
w.c=H.U(C.b.d9(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.k8(a)
v=new X.ii()
v.c=new X.b2(!1,!1,!1)
v.shU(P.iu(null,null,null,P.y))
w.b=v
v=new X.iN(w)
v.f=0
v.r=V.aO()
v.x=V.aO()
v.Q=1
v.ch=1
w.c=v
v=new X.ix(w)
v.r=0
v.x=V.aO()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jT(w)
v.e=0
v.f=V.aO()
v.r=V.aO()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sh1(H.c([],[[P.dq,P.a]]))
v=w.z
u=document
t=W.ay
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.Q(u,"contextmenu",H.l(w.ghw(),s),!1,t))
v=w.z
r=W.Z
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Q(a,"focus",H.l(w.ghz(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Q(a,"blur",H.l(w.ght(),q),!1,r))
v=w.z
p=W.bz
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Q(u,"keyup",H.l(w.ghB(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Q(u,"keydown",H.l(w.ghA(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Q(a,"mousedown",H.l(w.ghE(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Q(a,"mouseup",H.l(w.ghG(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Q(a,"mousemove",H.l(w.ghF(),s),!1,t))
p=w.z
o=W.bK;(p&&C.a).h(p,W.Q(a,H.H(W.hP(a)),H.l(w.ghH(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Q(u,"mousemove",H.l(w.ghx(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Q(u,"mouseup",H.l(w.ghy(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Q(u,"pointerlockchange",H.l(w.ghI(),q),!1,r))
r=w.z
q=W.bg
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Q(a,"touchstart",H.l(w.ghQ(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Q(a,"touchend",H.l(w.ghO(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Q(a,"touchmove",H.l(w.ghP(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aJ(Date.now(),!1)
z.cy=0
z.dL()
return z}}},jO:{"^":"q:31;a",
$1:function(a){var z
H.lT(a)
z=this.a
if(z.ch){z.ch=!1
z.jY()}}}}],["","",,Z,{"^":"",fA:{"^":"a;a,b",$ism2:1,l:{
dK:function(a,b,c){var z
H.d(c,"$isb",[P.y],"$asb")
z=a.createBuffer()
C.b.ax(a,b,z)
C.b.dZ(a,b,new Int16Array(H.bM(c)),35044)
C.b.ax(a,b,null)
return new Z.fA(b,z)}}},ea:{"^":"cQ;a,b,c,d,e",
S:function(a){var z,y,x
try{y=a.a
C.b.ea(y,this.e)
C.b.ke(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.a8(x)
y=P.m('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(z))
throw H.h(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},fB:{"^":"a;a",$ism3:1},cT:{"^":"a;a,0b,c,d",
shd:function(a){this.b=H.d(a,"$isb",[Z.bS],"$asb")},
aM:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
S:function(a){var z,y
z=this.a
C.b.ax(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].S(a)},
au:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.e8(x,z[y].e)
C.b.ax(x,this.a.a,null)},
aa:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
w=v.c
u=w.a
C.b.ax(y,u,w.b)
C.b.jj(y,v.a,v.b,5123,0)
C.b.ax(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.u]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ao(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(y,", ")+"\nAttrs:   "+C.a.C(u,", ")},
$ismk:1},bS:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.be(this.c)+"'")+"]"}},bh:{"^":"a;a",
gdd:function(a){var z,y
z=this.a
y=(z&$.$get$aB().a)!==0?3:0
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$aT().a)!==0)y+=2
if((z&$.$get$aU().a)!==0)y+=3
if((z&$.$get$bI().a)!==0)y+=3
if((z&$.$get$bJ().a)!==0)y+=4
if((z&$.$get$bi().a)!==0)++y
return(z&$.$get$aQ().a)!==0?y+4:y},
iW:function(a){var z,y,x
z=$.$get$aB()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bi()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fz()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bh))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.u])
y=this.a
if((y&$.$get$aB().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aU().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bI().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bJ().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bi().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.C(z,"|")},
l:{
aw:function(a){return new Z.bh(a)}}}}],["","",,D,{"^":"",ed:{"^":"a;"},bv:{"^":"a;0a,0b,0c,0d",
sae:function(a){this.a=H.d(a,"$isb",[{func:1,ret:-1,args:[D.v]}],"$asb")},
sbB:function(a){this.b=H.d(a,"$isb",[{func:1,ret:-1,args:[D.v]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.v]}
H.l(b,z)
if(this.a==null)this.sae(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
O:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.v]})
z=this.a
z=z==null?null:C.a.b2(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).O(z,b)||!1}else y=!1
return y},
F:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.v(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.a8(y,new D.hT(z))
return!0},
e9:function(){return this.F(null)},
k0:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.F(y)}}},
b6:function(){return this.k0(!0,!1)},
l:{
F:function(){var z=new D.bv()
z.sae(null)
z.sbB(null)
z.c=null
z.d=0
return z}}},hT:{"^":"q:32;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.v]})
z=this.a.a
z.b
a.$1(z)}},v:{"^":"a;a,0b"},bT:{"^":"v;c,d,a,0b,$ti"},bU:{"^":"v;c,d,a,0b,$ti"},B:{"^":"v;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,O,{"^":"",
h9:function(a){var z=C.i.jx(a,"/")
if(z<=0)return a
return C.i.bw(a,0,z)},
fZ:function(a){var z,y,x
z=P.di("([^\\s]+)",!0,!1)
$.fY=z
y=z.jo(a)
if(y==null)return H.c([],[P.u])
z=y.b
if(1>=z.length)return H.f(z,1)
x=z[1]
return H.c([x,C.i.eM(C.i.cc(a,x.length))],[P.u])},
cG:function(a){var z,y,x
z=H.c([],[P.u])
y=P.di("([^\\s]+)",!0,!1)
$.fY=y
y=new H.ko(y,a,0)
for(;y.B();){x=y.d.b
if(1>=x.length)return H.f(x,1)
C.a.h(z,x[1])}return z},
aV:function(a){var z,y,x,w
z=O.cG(a)
y=H.c([],[P.x])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
C.a.h(y,P.lB(z[w],null))}return y},
bZ:function(a,b,c){return O.iO(a,b,!1)},
iO:function(a,b,c){var z=0,y=P.ae([P.V,P.u,O.aM]),x,w=2,v,u=[],t,s,r,q,p,o,n,m
var $async$bZ=P.af(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:w=4
t=O.h9(a)
p=new O.lj(b)
p.saV(new H.b0(0,0,[P.u,O.aM]))
p.c=null
s=p
z=7
return P.a3(W.eu(a,null,null),$async$bZ)
case 7:r=e
z=8
return P.a3(s.as(r,t,!1),$async$bZ)
case 8:o=s.gaV()
x=o
z=1
break
w=2
z=6
break
case 4:w=3
m=v
q=H.a8(m)
P.c7(a+": "+H.i(q))
o=P.m(a+": "+H.i(q))
throw H.h(o)
z=6
break
case 3:z=2
break
case 6:case 1:return P.ac(x,y)
case 2:return P.ab(v,y)}})
return P.ad($async$bZ,y)},
au:function(a,b,c,d,e){return O.iT(a,b,c,d,!1)},
iT:function(a,b,c,d,e){var z=0,y=P.ae(E.L),x,w=2,v,u=[],t,s,r,q,p,o,n,m,l
var $async$au=P.af(function(f,g){if(f===1){v=g
z=w}while(true)switch(z){case 0:w=4
t=O.h9(a)
p=new O.lk(b)
p.shT(H.c([],[O.dR]))
p.sii(H.c([],[V.T]))
p.sho(H.c([],[V.G]))
p.saV(new H.b0(0,0,[P.u,O.aM]))
p.f=d
p.r=""
o=O.as()
n=o.r
n.st(0,new V.t(0.35,0.35,0.35))
n=o.x
n.st(0,new V.t(0.65,0.65,0.65))
p.x=o
p.y=null
p.z=null
p.Q=E.ar(null,!0,null,"",null,null)
p.bJ()
s=p
z=7
return P.a3(W.eu(a,null,null),$async$au)
case 7:r=g
z=8
return P.a3(s.as(r,t,!1),$async$au)
case 8:o=s.gjm()
x=o
z=1
break
w=2
z=6
break
case 4:w=3
l=v
q=H.a8(l)
P.c7(a+": "+H.i(q))
o=P.m(a+": "+H.i(q))
throw H.h(o)
z=6
break
case 3:z=2
break
case 6:case 1:return P.ac(x,y)
case 2:return P.ab(v,y)}})
return P.ad($async$au,y)},
lj:{"^":"a;a,0aV:b<,0c",
saV:function(a){this.b=H.d(a,"$isV",[P.u,O.aM],"$asV")},
as:function(a,b,c){var z=0,y=P.ae(null),x=this
var $async$as=P.af(function(d,e){if(d===1)return P.ab(e,y)
while(true)switch(z){case 0:z=2
return P.a3(x.ar(H.c(a.split("\n"),[P.u]),b,!1),$async$as)
case 2:return P.ac(null,y)}})
return P.ad($async$as,y)},
ar:function(a,b,c){H.d(a,"$isb",[P.u],"$asb")
return this.jV(a,b,!1)},
jV:function(a,b,c){var z=0,y=P.ae(null),x=1,w,v=[],u=this,t,s,r,q,p
var $async$ar=P.af(function(d,e){if(d===1){w=e
z=x}while(true)switch(z){case 0:t=0
case 2:if(!J.cM(t,a.length)){z=4
break}x=6
z=9
return P.a3(u.a1(C.a.j(a,t),b,!1),$async$ar)
case 9:x=1
z=8
break
case 6:x=5
p=w
s=H.a8(p)
q=P.m("Line "+H.i(J.c8(t,1))+": "+H.i(s))
throw H.h(q)
z=8
break
case 5:z=1
break
case 8:case 3:t=J.c8(t,1)
z=2
break
case 4:return P.ac(null,y)
case 1:return P.ab(w,y)}})
return P.ad($async$ar,y)},
a1:function(a,b,c){H.H(a)
return this.jT(a,b,!1)},
jT:function(a,b,c){var z=0,y=P.ae(null),x,w=2,v,u=[],t=this,s,r,q,p,o,n,m,l
var $async$a1=P.af(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:w=4
s=J.e5(a,"#")
if(J.e2(s,0))a=J.e6(a,0,s)
a=J.cO(a)
if(J.aH(a)<=0){z=1
break}r=O.fZ(a)
if(J.aH(r)<1){z=1
break}case 7:switch(J.K(r,0)){case"newmtl":z=9
break
case"Ka":z=10
break
case"Kd":z=11
break
case"Ks":z=12
break
case"Ns":z=13
break
case"d":z=14
break
case"Tr":z=15
break
case"map_Ka":z=16
break
case"map_Kd":z=17
break
case"map_Ks":z=18
break
case"map_d":z=19
break
case"map_bump":z=20
break
case"bump":z=21
break
default:z=22
break}break
case 9:p=J.K(r,1)
o=O.as()
t.c=o
t.b.a_(0,p,o)
z=1
break
case 10:n=O.aV(J.K(r,1))
t.c.r.st(0,V.cZ(n))
z=1
break
case 11:n=O.aV(J.K(r,1))
t.c.x.st(0,V.cZ(n))
z=1
break
case 12:n=O.aV(J.K(r,1))
t.c.z.st(0,V.cZ(n))
z=1
break
case 13:n=O.aV(J.K(r,1))
p=n.length
if(p!==1)H.o(P.m("Shininess may only have 1 number."))
o=t.c.z
if(0>=p){x=H.f(n,0)
z=1
break}o.sa7(n[0])
z=1
break
case 14:n=O.aV(J.K(r,1))
p=n.length
if(p!==1)H.o(P.m("Alpha may only have 1 number."))
o=t.c.db
if(0>=p){x=H.f(n,0)
z=1
break}o.seP(0,n[0])
z=1
break
case 15:n=O.aV(J.K(r,1))
p=n.length
if(p!==1)H.o(P.m("Alpha may only have 1 number."))
o=t.c.db
if(0>=p){x=H.f(n,0)
z=1
break}p=n[0]
if(typeof p!=="number"){x=H.n(p)
z=1
break}o.seP(0,1-p)
z=1
break
case 16:z=23
return P.a3(t.cv(J.K(r,1),b),$async$a1)
case 23:z=1
break
case 17:z=24
return P.a3(t.cw(J.K(r,1),b),$async$a1)
case 24:z=1
break
case 18:z=25
return P.a3(t.cz(J.K(r,1),b),$async$a1)
case 25:z=1
break
case 19:z=26
return P.a3(t.cu(J.K(r,1),b),$async$a1)
case 26:z=1
break
case 20:z=27
return P.a3(t.bC(J.K(r,1),b),$async$a1)
case 27:z=1
break
case 21:z=28
return P.a3(t.bC(J.K(r,1),b),$async$a1)
case 28:z=1
break
case 22:z=1
break
case 8:w=2
z=6
break
case 4:w=3
l=v
q=H.a8(l)
p=P.m('Line: "'+H.i(a)+'": '+H.i(q))
throw H.h(p)
z=6
break
case 3:z=2
break
case 6:case 1:return P.ac(x,y)
case 2:return P.ab(v,y)}})
return P.ad($async$a1,y)},
cv:function(a,b){var z=0,y=P.ae(null),x=this,w
var $async$cv=P.af(function(c,d){if(c===1)return P.ab(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.r.sa6(x.a.ap(w))
return P.ac(null,y)}})
return P.ad($async$cv,y)},
cw:function(a,b){var z=0,y=P.ae(null),x=this,w
var $async$cw=P.af(function(c,d){if(c===1)return P.ab(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.x.sa6(x.a.ap(w))
return P.ac(null,y)}})
return P.ad($async$cw,y)},
cz:function(a,b){var z=0,y=P.ae(null),x=this,w
var $async$cz=P.af(function(c,d){if(c===1)return P.ab(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.z.sa6(x.a.ap(w))
return P.ac(null,y)}})
return P.ad($async$cz,y)},
cu:function(a,b){var z=0,y=P.ae(null),x=this,w
var $async$cu=P.af(function(c,d){if(c===1)return P.ab(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.db.sa6(x.a.ap(w))
return P.ac(null,y)}})
return P.ad($async$cu,y)},
bC:function(a,b){var z=0,y=P.ae(null),x=this,w
var $async$bC=P.af(function(c,d){if(c===1)return P.ab(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.Q.sa6(x.a.ap(w))
return P.ac(null,y)}})
return P.ad($async$bC,y)}},
dR:{"^":"a;a,0b",
skf:function(a){this.b=H.d(a,"$isb",[F.al],"$asb")}},
lk:{"^":"a;a,0b,0c,0d,0aV:e<,0f,0r,0x,0y,0z,0Q",
shT:function(a){this.b=H.d(a,"$isb",[O.dR],"$asb")},
sii:function(a){this.c=H.d(a,"$isb",[V.T],"$asb")},
sho:function(a){this.d=H.d(a,"$isb",[V.G],"$asb")},
saV:function(a){this.e=H.d(a,"$isV",[P.u,O.aM],"$asV")},
gjm:function(){var z,y,x
z=this.Q
y=z.y.a
x=y.length
if(x===1){if(0>=x)return H.f(y,0)
return y[0]}return z},
as:function(a,b,c){var z=0,y=P.ae(null),x=this
var $async$as=P.af(function(d,e){if(d===1)return P.ab(e,y)
while(true)switch(z){case 0:z=2
return P.a3(x.ar(H.c(a.split("\n"),[P.u]),b,!1),$async$as)
case 2:return P.ac(null,y)}})
return P.ad($async$as,y)},
ar:function(a,b,c){H.d(a,"$isb",[P.u],"$asb")
return this.jW(a,b,!1)},
jW:function(a,b,c){var z=0,y=P.ae(null),x=1,w,v=[],u=this,t,s,r,q,p
var $async$ar=P.af(function(d,e){if(d===1){w=e
z=x}while(true)switch(z){case 0:t=0
case 2:if(!J.cM(t,a.length)){z=4
break}x=6
z=9
return P.a3(u.a1(C.a.j(a,t),b,!1),$async$ar)
case 9:x=1
z=8
break
case 6:x=5
p=w
s=H.a8(p)
q=P.m("Line "+H.i(J.c8(t,1))+": "+H.i(s))
throw H.h(q)
z=8
break
case 5:z=1
break
case 8:case 3:t=J.c8(t,1)
z=2
break
case 4:return P.ac(null,y)
case 1:return P.ab(w,y)}})
return P.ad($async$ar,y)},
a1:function(a,b,c){H.H(a)
return this.jU(a,b,!1)},
jU:function(a,b,c){var z=0,y=P.ae(null),x,w=2,v,u=[],t=this,s,r,q,p,o,n,m,l,k,j
var $async$a1=P.af(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:w=4
s=J.e5(a,"#")
if(J.e2(s,0))a=J.e6(a,0,s)
a=J.cO(a)
if(J.aH(a)<=0){z=1
break}r=O.fZ(a)
if(J.aH(r)<1){z=1
break}case 7:switch(J.K(r,0)){case"v":z=9
break
case"vt":z=10
break
case"vn":z=11
break
case"p":z=12
break
case"l":z=13
break
case"f":z=14
break
case"mtllib":z=15
break
case"usemtl":z=16
break
case"g":z=17
break
case"o":z=18
break
default:z=19
break}break
case 9:p=O.aV(J.K(r,1))
o=p.length
if(o<3)H.o(P.m("Positions must have at least 3 numbers."))
if(o>4)H.o(P.m("Positions must have at most than 4 numbers."))
if(o===4){if(3>=o){x=H.f(p,3)
z=1
break}o=p[3]
if(!$.p.$2(o,1))H.o(P.m("Currently, non-one w values in positions are not supported."))}o=t.b
n=p.length
if(0>=n){x=H.f(p,0)
z=1
break}m=p[0]
if(1>=n){x=H.f(p,1)
z=1
break}l=p[1]
if(2>=n){x=H.f(p,2)
z=1
break}l=[m,l,p[2]]
l=new O.dR(new V.a5(l[0],l[1],l[2]))
l.skf(H.c([],[F.al]))
C.a.h(o,l)
z=1
break
case 10:p=O.aV(J.K(r,1))
o=p.length
if(o<2)H.o(P.m("Textures must have at least 2 numbers."))
if(o>3)H.o(P.m("Textures must have at most than 3 numbers."))
if(o===3){if(2>=o){x=H.f(p,2)
z=1
break}o=p[2]
if(!$.p.$2(o,0))H.o(P.m("Currently, non-zero z values in textures are not supported."))}o=t.c
n=p.length
if(0>=n){x=H.f(p,0)
z=1
break}m=p[0]
if(1>=n){x=H.f(p,1)
z=1
break}m=[m,p[1]]
C.a.h(o,new V.T(m[0],m[1]))
z=1
break
case 11:p=O.aV(J.K(r,1))
o=p.length
if(o!==3)H.o(P.m("Normals must have exactly 3 numbers."))
n=t.d
if(0>=o){x=H.f(p,0)
z=1
break}m=p[0]
if(1>=o){x=H.f(p,1)
z=1
break}l=p[1]
if(2>=o){x=H.f(p,2)
z=1
break}C.a.h(n,new V.G(m,l,p[2]))
z=1
break
case 12:t.hX(J.K(r,1))
z=1
break
case 13:t.hW(J.K(r,1))
z=1
break
case 14:t.hV(J.K(r,1))
z=1
break
case 15:z=20
return P.a3(t.bD(J.K(r,1),b,!1),$async$a1)
case 20:z=1
break
case 16:o=J.K(r,1)
t.x=H.j(t.e.j(0,o),"$isaM")
t.bJ()
z=1
break
case 17:t.r=H.H(J.K(r,1))
t.bJ()
z=1
break
case 18:t.r=H.H(J.K(r,1))
t.bJ()
z=1
break
case 19:z=1
break
case 8:w=2
z=6
break
case 4:w=3
j=v
q=H.a8(j)
o=P.m('Line: "'+H.i(a)+'": '+H.i(q))
throw H.h(o)
z=6
break
case 3:z=2
break
case 6:case 1:return P.ac(x,y)
case 2:return P.ab(v,y)}})
return P.ad($async$a1,y)},
bJ:function(){var z,y,x
if(this.z==null||this.y.a.c.length!==0){z=F.dk()
this.y=z
z=E.ar(null,!0,null,"",z,null)
this.z=z
this.Q.y.h(0,z)
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)C.a.sp(z[x].b,0)}this.z.sa2(this.x)
this.z.a=this.r},
cf:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=a.split("/")
y=z.length
if(0>=y)return H.f(z,0)
x=P.dX(z[0],null,null)
w=this.b.length
if(typeof x!=="number")return x.Z()
if(x<-w||x>w||x===0)throw H.h(P.m("The position index, "+x+", was out of range [-"+w+".."+w+"] or 0."))
if(x<0)x=w+x+1;--x
if(y>1){v=z[1]
if(v!=null&&v.length>0){u=P.dX(v,null,null)
t=this.c
w=t.length
if(typeof u!=="number")return u.Z()
if(u<-w||u>w||u===0)throw H.h(P.m("The texture index, "+u+", was out of range [-"+w+".."+w+"] or 0."))
if(u<0)u=w+u+1
s=u-1
if(s<0||s>=w)return H.f(t,s)
r=t[s]}else r=null}else r=null
if(y>2){v=z[2]
if(v!=null&&v.length>0){q=P.dX(v,null,null)
y=this.d
w=y.length
if(typeof q!=="number")return q.Z()
if(q<-w||q>w||q===0)throw H.h(P.m("The normal index, "+q+", was out of range [-"+w+".."+w+"] or 0."))
if(q<0)q=w+q+1
t=q-1
if(t<0||t>=w)return H.f(y,t)
p=y[t]}else p=null}else p=null
y=this.b
if(x<0||x>=y.length)return H.f(y,x)
o=y[x]
for(y=o.b,t=y.length,n=0;n<y.length;y.length===t||(0,H.z)(y),++n){m=y[n]
if(J.R(m.y,r)&&J.R(m.r,p))return m}m=F.dJ(null,null,null,null,null,null,null,null,0)
y=o.a
if(!J.R(m.f,y)){m.f=y
y=m.a
if(y!=null)y.a5()}if(!J.R(m.y,r)){m.y=r
y=m.a
if(y!=null)y.a5()}p=p==null?null:p.w(0,Math.sqrt(p.E(p)))
if(!J.R(m.r,p)){m.r=p
y=m.a
if(y!=null)y.a5()}this.y.a.h(0,m)
C.a.h(o.b,m)
return m},
hX:function(a){var z,y,x,w
z=O.cG(a)
y=H.c([],[F.al])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
C.a.h(y,this.cf(z[w]))}this.y.b.iU(y)},
hW:function(a){var z,y,x,w
z=O.cG(a)
y=H.c([],[F.al])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
C.a.h(y,this.cf(z[w]))}this.y.c.iT(y)},
hV:function(a){var z,y,x,w
z=O.cG(a)
y=H.c([],[F.al])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
C.a.h(y,this.cf(z[w]))}this.y.d.cF(y)},
bD:function(a,b,c){var z=0,y=P.ae(null),x=this,w
var $async$bD=P.af(function(d,e){if(d===1)return P.ab(e,y)
while(true)switch(z){case 0:z=2
return P.a3(O.bZ(b+"/"+a,x.a,!1),$async$bD)
case 2:w=e
x.e.aZ(0,w)
return P.ac(null,y)}})
return P.ad($async$bD,y)}}}],["","",,X,{"^":"",eb:{"^":"a;a,b",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eb))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},eD:{"^":"a;a,b",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eD))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},ii:{"^":"a;0a,0b,0c,0d",
shU:function(a){this.d=H.d(a,"$isf1",[P.y],"$asf1")},
jQ:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jM:function(a){this.c=a.b
this.d.O(0,a.a)
return!1}},eH:{"^":"dg;x,y,c,d,e,a,0b"},ix:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
bb:function(a,b){var z,y,x,w,v,u,t,s,r
z=new P.aJ(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=y.a
if(typeof t!=="number")return t.n()
y=y.b
if(typeof y!=="number")return y.n()
s=new V.T(t+x*w,y+v*u)
u=this.a.gbN()
r=new X.bY(a,V.aO(),this.x,this.y,this.z,u,s,z,this)
r.b=!0
this.z=z
this.x=s
return r},
d2:function(a,b){this.r=a.a
return!1},
bm:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.f3()
if(typeof z!=="number")return z.eQ()
this.r=(z&~y)>>>0
return!1},
bl:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.bb(a,b))
return!0},
jR:function(a){return!1},
hD:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aJ(Date.now(),!1)
y=this.f
x=new X.eH(c,a,this.a.gbN(),b,z,this)
x.b=!0
y.F(x)
this.y=z
this.x=V.aO()}},b2:{"^":"a;a,b,c",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.b2))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bY:{"^":"dg;x,y,z,Q,ch,c,d,e,a,0b"},iN:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
cm:function(a,b,c){var z,y,x
z=new P.aJ(Date.now(),!1)
y=this.a.gbN()
x=new X.bY(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
d2:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.F(this.cm(a,b,!0))
return!0},
bm:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.f3()
if(typeof z!=="number")return z.eQ()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.F(this.cm(a,b,!0))
return!0},
bl:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.cm(a,b,!1))
return!0},
jS:function(a,b){return!1}},dg:{"^":"v;"},ff:{"^":"dg;x,y,z,Q,ch,c,d,e,a,0b"},jT:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
bb:function(a,b){var z,y,x,w
H.d(a,"$isb",[V.T],"$asb")
z=new P.aJ(Date.now(),!1)
y=a.length>0?a[0]:V.aO()
x=this.a.gbN()
w=new X.ff(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
jP:function(a){var z
H.d(a,"$isb",[V.T],"$asb")
z=this.b
if(z==null)return!1
z.F(this.bb(a,!0))
return!0},
jN:function(a){var z
H.d(a,"$isb",[V.T],"$asb")
z=this.c
if(z==null)return!1
z.F(this.bb(a,!0))
return!0},
jO:function(a){var z
H.d(a,"$isb",[V.T],"$asb")
z=this.d
if(z==null)return!1
z.F(this.bb(a,!1))
return!0}},k8:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sh1:function(a){this.z=H.d(a,"$isb",[[P.dq,P.a]],"$asb")},
gbN:function(){var z=this.a
return V.f_(0,0,C.m.ge2(z).c,C.m.ge2(z).d)},
dz:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eD(z,new X.b2(y,a.altKey,a.shiftKey))},
aY:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b2(y,a.altKey,a.shiftKey)},
cD:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b2(y,a.altKey,a.shiftKey)},
aH:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.D()
v=z.top
if(typeof x!=="number")return x.D()
return new V.T(y-w,x-v)},
bd:function(a){return new V.W(a.movementX,a.movementY)},
cA:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.T])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.j.at(u.pageX)
C.j.at(u.pageY)
s=z.left
C.j.at(u.pageX)
C.a.h(y,new V.T(t-s,C.j.at(u.pageY)-z.top))}return y},
aD:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.eb(z,new X.b2(y,a.altKey,a.shiftKey))},
cq:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.D()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.D()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
kx:[function(a){this.f=!0},"$1","ghz",4,0,10],
kr:[function(a){this.f=!1},"$1","ght",4,0,10],
ku:[function(a){H.j(a,"$isay")
if(this.f&&this.cq(a))a.preventDefault()},"$1","ghw",4,0,5],
kz:[function(a){var z
H.j(a,"$isbz")
if(!this.f)return
z=this.dz(a)
this.b.jQ(z)},"$1","ghB",4,0,17],
ky:[function(a){var z
H.j(a,"$isbz")
if(!this.f)return
z=this.dz(a)
this.b.jM(z)},"$1","ghA",4,0,17],
kB:[function(a){var z,y,x,w
H.j(a,"$isay")
z=this.a
z.focus()
this.f=!0
this.aY(a)
if(this.x){y=this.aD(a)
x=this.bd(a)
if(this.d.d2(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aD(a)
w=this.aH(a)
if(this.c.d2(y,w))a.preventDefault()},"$1","ghE",4,0,5],
kD:[function(a){var z,y,x
H.j(a,"$isay")
this.aY(a)
z=this.aD(a)
if(this.x){y=this.bd(a)
if(this.d.bm(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.bm(z,x))a.preventDefault()},"$1","ghG",4,0,5],
kw:[function(a){var z,y,x
H.j(a,"$isay")
if(!this.cq(a)){this.aY(a)
z=this.aD(a)
if(this.x){y=this.bd(a)
if(this.d.bm(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.bm(z,x))a.preventDefault()}},"$1","ghy",4,0,5],
kC:[function(a){var z,y,x
H.j(a,"$isay")
this.aY(a)
z=this.aD(a)
if(this.x){y=this.bd(a)
if(this.d.bl(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.bl(z,x))a.preventDefault()},"$1","ghF",4,0,5],
kv:[function(a){var z,y,x
H.j(a,"$isay")
if(!this.cq(a)){this.aY(a)
z=this.aD(a)
if(this.x){y=this.bd(a)
if(this.d.bl(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.bl(z,x))a.preventDefault()}},"$1","ghx",4,0,5],
kE:[function(a){var z,y
H.j(a,"$isbK")
this.aY(a)
z=new V.W((a&&C.y).gjf(a),C.y.gjg(a)).w(0,180)
if(this.x){if(this.d.jR(z))a.preventDefault()
return}if(this.r)return
y=this.aH(a)
if(this.c.jS(z,y))a.preventDefault()},"$1","ghH",4,0,44],
kF:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aD(this.y)
x=this.aH(this.y)
this.d.hD(y,x,z)}},"$1","ghI",4,0,10],
kN:[function(a){var z
H.j(a,"$isbg")
this.a.focus()
this.f=!0
this.cD(a)
z=this.cA(a)
if(this.e.jP(z))a.preventDefault()},"$1","ghQ",4,0,11],
kL:[function(a){var z
H.j(a,"$isbg")
this.cD(a)
z=this.cA(a)
if(this.e.jN(z))a.preventDefault()},"$1","ghO",4,0,11],
kM:[function(a){var z
H.j(a,"$isbg")
this.cD(a)
z=this.cA(a)
if(this.e.jO(z))a.preventDefault()},"$1","ghP",4,0,11]}}],["","",,D,{"^":"",cf:{"^":"a;0a,0b,0c,0d",
gq:function(){var z=this.d
if(z==null){z=D.F()
this.d=z}return z},
by:function(a){var z
H.j(a,"$isv")
z=this.d
if(!(z==null))z.F(a)},
st:function(a,b){var z,y
if(b==null)b=new V.t(1,1,1)
if(!this.c.v(0,b)){z=this.c
this.c=b
y=new D.B("color",z,b,this,[V.t])
y.b=!0
this.by(y)}},
$isa_:1,
$isaE:1,
l:{
ep:function(a,b){var z=new D.cf()
z.c=new V.t(1,1,1)
z.a=V.kc()
z.st(0,a)
return z}}},a_:{"^":"a;",$isaE:1},io:{"^":"M;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sfv:function(a){this.e=H.d(a,"$isb",[D.cf],"$asb")},
sfw:function(a){this.f=H.d(a,"$isb",[D.eU],"$asb")},
sfz:function(a){this.r=H.d(a,"$isb",[D.f4],"$asb")},
sfA:function(a){this.x=H.d(a,"$isb",[D.f9],"$asb")},
sfB:function(a){this.y=H.d(a,"$isb",[D.fa],"$asb")},
sfC:function(a){this.z=H.d(a,"$isb",[D.fb],"$asb")},
gq:function(){var z=this.Q
if(z==null){z=D.F()
this.Q=z}return z},
by:function(a){var z=this.Q
if(!(z==null))z.F(a)},
hC:[function(a){var z
H.j(a,"$isv")
z=this.ch
if(!(z==null))z.F(a)},function(){return this.hC(null)},"kA","$1","$0","gdH",0,2,0],
kG:[function(a){var z,y,x
H.d(a,"$isk",[D.a_],"$ask")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.fU(x))return!1}return!0},"$1","ghJ",4,0,36],
ko:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a_
H.d(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gdH(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.j(b[u],"$isa_")
if(t instanceof D.cf)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bv()
s.sae(null)
s.sbB(null)
s.c=null
s.d=0
t.d=s}H.l(x,w)
if(s.a==null)s.sae(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.bT(a,b,this,[z])
z.b=!0
this.by(z)},"$2","ghq",8,0,18],
kI:[function(a,b){var z,y,x,w
z=D.a_
H.d(b,"$isk",[z],"$ask")
for(y=b.gP(b),x=this.gdH();y.B();){w=y.gI()
C.a.O(this.e,w)
w.gq().O(0,x)}z=new D.bU(a,b,this,[z])
z.b=!0
this.by(z)},"$2","ghL",8,0,18],
fU:function(a){var z=C.a.b2(this.e,a)
return z},
$ask:function(){return[D.a_]},
$asM:function(){return[D.a_]}},eU:{"^":"a;",$isa_:1,$isaE:1},f4:{"^":"a;",$isa_:1,$isaE:1},f9:{"^":"a;",$isa_:1,$isaE:1},fa:{"^":"a;",$isa_:1,$isaE:1},fb:{"^":"a;",$isa_:1,$isaE:1}}],["","",,V,{"^":"",
m5:[function(a,b){if(typeof b!=="number")return b.D()
if(typeof a!=="number")return H.n(a)
return Math.abs(b-a)<=1e-9},"$2","iL",8,0,34],
m_:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.f2(a-b,z)
return(a<0?a+z:a)+b},
J:function(a,b,c){if(a==null)return C.i.aj("null",c)
return C.i.aj(C.j.eL($.p.$2(a,0)?0:a,b),c+b+1)},
bp:function(a,b,c){var z,y,x,w,v,u
H.d(a,"$isb",[P.x],"$asb")
z=H.c([],[P.u])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.J(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.a_(z,u,C.i.aj(z[u],x))}return z},
e_:function(a,b){return C.j.k9(Math.pow(b,C.G.cX(Math.log(H.lt(a))/Math.log(b))))},
t:{"^":"a;a,b,c",
n:function(a,b){var z,y,x
z=C.j.n(this.a,b.gb5())
y=C.j.n(this.b,b.gaO())
x=C.j.n(this.c,b.gb0())
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.t(z,y,x)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.t))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"},
l:{
cZ:function(a){var z,y,x
H.d(a,"$isb",[P.x],"$asb")
z=a.length
if(0>=z)return H.f(a,0)
y=a[0]
if(1>=z)return H.f(a,1)
x=a[1]
if(2>=z)return H.f(a,2)
z=a[2]
if(typeof y!=="number")return y.Z()
if(y<0)y=0
else if(y>1)y=1
if(typeof x!=="number")return x.Z()
if(x<0)x=0
else if(x>1)x=1
if(typeof z!=="number")return z.Z()
if(z<0)z=0
else if(z>1)z=1
return new V.t(y,x,z)}}},
aI:{"^":"a;a,b,c,d",
n:function(a,b){var z,y,x,w
z=C.j.n(this.a,b.gb5())
y=C.j.n(this.b,b.gaO())
x=C.j.n(this.c,b.gb0())
w=C.j.n(this.d,b.gkS(b))
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
if(w<0)w=0
else if(w>1)w=1
return new V.aI(z,y,x,w)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aI))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}},
eM:{"^":"a;a,b,c,d,e,f,r,x,y",
ab:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.x])
return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eM))return!1
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
z=[P.x]
y=V.bp(H.c([this.a,this.d,this.r],z),3,0)
x=V.bp(H.c([this.b,this.e,this.x],z),3,0)
w=V.bp(H.c([this.c,this.f,this.y],z),3,0)
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
ai:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ab:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.x])
return z},
cZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.n(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.n(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.n(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
q=this.d
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
h=l*k-j*i
g=this.db
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
c=this.ch
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.p.$2(a2,0))return V.b1()
a3=1/a2
a4=-w
a5=-i
return V.aN((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.n(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.n(u)
t=this.d
s=a7.cx
r=a7.b
if(typeof r!=="number")return H.n(r)
q=a7.f
if(typeof q!=="number")return H.n(q)
p=a7.z
if(typeof p!=="number")return H.n(p)
o=a7.cy
n=a7.c
if(typeof n!=="number")return H.n(n)
m=a7.r
if(typeof m!=="number")return H.n(m)
l=a7.Q
if(typeof l!=="number")return H.n(l)
k=a7.db
j=a7.d
i=a7.x
h=a7.ch
g=a7.dx
f=this.e
if(typeof f!=="number")return f.k()
e=this.f
if(typeof e!=="number")return e.k()
d=this.r
if(typeof d!=="number")return d.k()
c=this.x
b=this.y
if(typeof b!=="number")return b.k()
a=this.z
if(typeof a!=="number")return a.k()
a0=this.Q
if(typeof a0!=="number")return a0.k()
a1=this.ch
a2=this.cx
a3=this.cy
a4=this.db
a5=this.dx
return V.aN(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
d6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.n(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.n(u)
t=this.e
if(typeof t!=="number")return t.k()
s=this.f
if(typeof s!=="number")return s.k()
r=this.r
if(typeof r!=="number")return r.k()
q=this.y
if(typeof q!=="number")return q.k()
p=this.z
if(typeof p!=="number")return p.k()
o=this.Q
if(typeof o!=="number")return o.k()
return new V.G(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bt:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.n(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.n(u)
t=this.e
if(typeof t!=="number")return t.k()
s=this.f
if(typeof s!=="number")return s.k()
r=this.r
if(typeof r!=="number")return r.k()
q=this.y
if(typeof q!=="number")return q.k()
p=this.z
if(typeof p!=="number")return p.k()
o=this.Q
if(typeof o!=="number")return o.k()
return new V.a5(z*y+x*w+v*u+this.d,t*y+s*w+r*u+this.x,q*y+p*w+o*u+this.ch)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ai))return!1
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
i:function(a){return this.J()},
ex:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.x]
y=V.bp(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bp(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bp(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bp(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
J:function(){return this.ex("",3,0)},
A:function(a){return this.ex(a,3,0)},
l:{
b1:function(){var z=$.eO
if(z==null){z=V.aN(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eO=z}return z},
aN:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bX:function(a,b,c){return V.aN(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
dc:function(a,b,c,d){return V.aN(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eN:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aN(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
db:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aN(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
da:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.w(0,Math.sqrt(c.E(c)))
y=b.bh(z)
x=y.w(0,Math.sqrt(y.E(y)))
w=z.bh(x)
v=new V.G(a.a,a.b,a.c)
u=x.K(0).E(v)
t=w.K(0).E(v)
s=z.K(0).E(v)
return V.aN(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
T:{"^":"a;a,b",
n:function(a,b){var z,y,x,w
z=this.a
y=b.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.n(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.n(w)
return new V.T(z+y,x+w)},
D:function(a,b){var z,y,x,w
z=this.a
y=b.a
if(typeof z!=="number")return z.D()
if(typeof y!=="number")return H.n(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.D()
if(typeof w!=="number")return H.n(w)
return new V.T(z-y,x-w)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"},
l:{
aO:function(){var z=$.eV
if(z==null){z=new V.T(0,0)
$.eV=z}return z}}},
a5:{"^":"a;a,b,c",
n:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.n(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.n(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.n()
if(typeof u!=="number")return H.n(u)
return new V.a5(z+y,x+w,v+u)},
D:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.D()
if(typeof y!=="number")return H.n(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.D()
if(typeof w!=="number")return H.n(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.D()
if(typeof u!=="number")return H.n(u)
return new V.a5(z-y,x-w,v-u)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"},
l:{
df:function(){var z=$.bE
if(z==null){z=new V.a5(0,0,0)
$.bE=z}return z}}},
b4:{"^":"a;a,b,c,d",
n:function(a,b){return new V.b4(C.f.n(this.a,b.gc7(b)),C.f.n(this.b,b.gc8(b)),C.f.n(this.c,b.gc9(b)),C.f.n(this.d,b.gl5()))},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b4))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}},
eZ:{"^":"a;a,b,c,d",
gaz:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eZ))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"},
l:{
f_:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eZ(a,b,c,d)}}},
W:{"^":"a;a,b",
jz:[function(a){return Math.sqrt(this.E(this))},"$0","gp",1,0,19],
E:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.n(w)
return z*y+x*w},
n:function(a,b){var z,y,x
z=this.a
y=b.gaK(b)
if(typeof z!=="number")return z.n()
y=C.j.n(z,y)
z=this.b
x=b.gaL(b)
if(typeof z!=="number")return z.n()
return new V.W(y,C.j.n(z,x))},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.W(z*b,y*b)},
w:function(a,b){var z,y
if($.p.$2(b,0)){z=$.ft
if(z==null){z=new V.W(0,0)
$.ft=z}return z}z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.W(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}},
G:{"^":"a;a,b,c",
jz:[function(a){return Math.sqrt(this.E(this))},"$0","gp",1,0,19],
E:function(a){var z,y,x,w,v,u
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.n(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.n(u)
return z*y+x*w+v*u},
bh:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.n(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.n(w)
v=a.a
if(typeof v!=="number")return H.n(v)
u=this.a
if(typeof u!=="number")return u.k()
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
n:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.n(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.n(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.n()
if(typeof u!=="number")return H.n(u)
return new V.G(z+y,x+w,v+u)},
K:function(a){var z,y,x
z=this.a
if(typeof z!=="number")return z.K()
y=this.b
if(typeof y!=="number")return y.K()
x=this.c
if(typeof x!=="number")return x.K()
return new V.G(-z,-y,-x)},
w:function(a,b){var z,y,x
if($.p.$2(b,0))return V.c1()
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
x=this.c
if(typeof x!=="number")return x.w()
return new V.G(z/b,y/b,x/b)},
ez:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"},
l:{
c1:function(){var z=$.fw
if(z==null){z=new V.G(0,0,0)
$.fw=z}return z},
dI:function(){var z=$.fv
if(z==null){z=new V.G(0,1,0)
$.fv=z}return z},
kc:function(){var z=$.cB
if(z==null){z=new V.G(0,0,1)
$.cB=z}return z}}}}],["","",,U,{"^":"",hz:{"^":"ed;0a,0b,0c,0d,0e,0f,0r,0x,0y",
cg:function(a){var z,y,x
z=this.a
y=this.c
x=this.b
if(z)return V.m_(a,y,x)
else{if(a<y)z=y
else z=a>x?x:a
return z}},
gq:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
W:function(a){var z=this.y
if(!(z==null))z.F(a)},
sd8:function(a,b){var z=this.a
if(z!==b){this.a=b
z=new D.B("wrap",z,b,this,[P.X])
z.b=!0
this.W(z)}},
sd0:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.cg(z)}z=new D.B("maximumLocation",y,this.b,this,[P.x])
z.b=!0
this.W(z)}},
sd1:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.cg(z)}z=new D.B("minimumLocation",y,this.c,this,[P.x])
z.b=!0
this.W(z)}},
saq:function(a,b){var z,y
b=this.cg(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.B("location",y,b,this,[P.x])
z.b=!0
this.W(z)}},
seB:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.B("maximumVelocity",y,a,this,[P.x])
z.b=!0
this.W(z)}},
sT:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.B("velocity",x,a,this,[P.x])
z.b=!0
this.W(z)}},
se5:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.B("dampening",y,a,this,[P.x])
z.b=!0
this.W(z)}},
aB:function(a){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.saq(0,this.d+y*a)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sT(y)}},
l:{
ef:function(){var z=new U.hz()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},eg:{"^":"at;0a,0b",
gq:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
sN:function(a){var z,y,x
if(a==null)a=V.b1()
if(!J.R(this.a,a)){z=this.a
this.a=a
y=new D.B("matrix",z,a,this,[V.ai])
y.b=!0
x=this.b
if(!(x==null))x.F(y)}},
c6:function(a,b){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eg))return!1
return J.R(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")},
l:{
aY:function(a){var z=new U.eg()
z.sN(a)
return z}}},et:{"^":"M;0e,0f,0r,0a,0b,0c,0d",
gq:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
W:[function(a){var z
H.j(a,"$isv")
z=this.e
if(!(z==null))z.F(a)},function(){return this.W(null)},"aW","$1","$0","gbA",0,2,0],
kn:[function(a,b){var z,y,x,w,v,u,t,s
z=U.at
H.d(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gbA(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){s=t.gq()
s.toString
H.l(x,w)
if(s.a==null)s.sae(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bT(a,b,this,[z])
z.b=!0
this.W(z)},"$2","ghp",8,0,20],
kH:[function(a,b){var z,y,x
z=U.at
H.d(b,"$isk",[z],"$ask")
for(y=b.gP(b),x=this.gbA();y.B();)y.gI().gq().O(0,x)
z=new D.bU(a,b,this,[z])
z.b=!0
this.W(z)},"$2","ghK",8,0,20],
c6:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.Z()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ap(z,z.length,0,[H.r(z,0)]),x=null;z.B();){y=z.d
if(y!=null){w=y.c6(a,b)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.b1():x
z=this.e
if(!(z==null))z.b6()}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.et))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.R(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ask:function(){return[U.at]},
$asM:function(){return[U.at]},
$isat:1},at:{"^":"ed;"},k9:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gq:function(){var z=this.fx
if(z==null){z=D.F()
this.fx=z}return z},
W:[function(a){var z
H.j(a,"$isv")
z=this.fx
if(!(z==null))z.F(a)},function(){return this.W(null)},"aW","$1","$0","gbA",0,2,0],
iX:function(a){var z,y
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.F()
z.b=y
z=y}else z=y
z.h(0,this.ghk())
z=this.a.c
y=z.d
if(y==null){y=D.F()
z.d=y
z=y}else z=y
z.h(0,this.ghl())
z=this.a.c
y=z.c
if(y==null){y=D.F()
z.c=y
z=y}else z=y
z.h(0,this.ghm())
z=this.a.d
y=z.f
if(y==null){y=D.F()
z.f=y
z=y}else z=y
z.h(0,this.ghi())
z=this.a.d
y=z.d
if(y==null){y=D.F()
z.d=y
z=y}else z=y
z.h(0,this.ghj())
z=this.a.e
y=z.b
if(y==null){y=D.F()
z.b=y
z=y}else z=y
z.h(0,this.gio())
z=this.a.e
y=z.d
if(y==null){y=D.F()
z.d=y
z=y}else z=y
z.h(0,this.gim())
z=this.a.e
y=z.c
if(y==null){y=D.F()
z.c=y
z=y}else z=y
z.h(0,this.gil())
return!0},
aw:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.K()
z=-z}if(this.r){if(typeof y!=="number")return y.K()
y=-y}return new V.W(z,y)},
kk:[function(a){a=H.e(H.j(a,"$isv"),"$isbY")
if(!J.R(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghk",4,0,3],
kl:[function(a){var z,y,x,w,v,u,t
a=H.e(H.j(a,"$isv"),"$isbY")
if(!this.cx)return
if(this.ch){z=a.d.D(0,a.y)
z=new V.W(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.D(0,a.y)
z=this.aw(new V.W(y.a,y.b).k(0,2).w(0,z.gaz()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.D(0,a.y)
w=this.aw(new V.W(x.a,x.b).k(0,2).w(0,z.gaz()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.saq(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.saq(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.D(0,a.z)
this.dx=this.aw(new V.W(y.a,y.b).k(0,2).w(0,z.gaz()))}this.aW()},"$1","ghl",4,0,3],
km:[function(a){var z,y,x
H.j(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sT(-y*10*z)
this.aW()}},"$1","ghm",4,0,3],
ki:[function(a){if(H.e(H.j(a,"$isv"),"$iseH").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ghi",4,0,3],
kj:[function(a){var z,y,x,w,v,u,t
a=H.e(H.j(a,"$isv"),"$isbY")
if(!J.R(this.d,a.x.b))return
z=a.c
y=a.d
x=y.D(0,a.y)
w=this.aw(new V.W(x.a,x.b).k(0,2).w(0,z.gaz()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.saq(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.saq(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.D(0,a.z)
this.dx=this.aw(new V.W(y.a,y.b).k(0,2).w(0,z.gaz()))
this.aW()},"$1","ghj",4,0,3],
kR:[function(a){H.j(a,"$isv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gio",4,0,3],
kQ:[function(a){var z,y,x,w,v,u,t
a=H.e(H.j(a,"$isv"),"$isff")
if(!this.cx)return
if(this.ch){z=a.d.D(0,a.y)
z=new V.W(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.D(0,a.y)
z=this.aw(new V.W(y.a,y.b).k(0,2).w(0,z.gaz()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.D(0,a.y)
w=this.aw(new V.W(x.a,x.b).k(0,2).w(0,z.gaz()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.saq(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.saq(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.D(0,a.z)
this.dx=this.aw(new V.W(y.a,y.b).k(0,2).w(0,z.gaz()))}this.aW()},"$1","gim",4,0,3],
kP:[function(a){var z,y,x
H.j(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sT(-y*10*z)
this.aW()}},"$1","gil",4,0,3],
c6:function(a,b){var z,y,x
z=this.dy
y=a.e
if(typeof z!=="number")return z.Z()
if(z<y){this.dy=y
x=a.y
this.c.aB(x)
this.b.aB(x)
this.fr=V.eN(this.b.d).k(0,V.db(this.c.d))}return this.fr},
$isat:1}}],["","",,M,{"^":"",hA:{"^":"M;0e,0f,0a,0b,0c,0d",
gq:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
a0:[function(a){var z
H.j(a,"$isv")
z=this.f
if(!(z==null))z.F(a)},function(){return this.a0(null)},"dk","$1","$0","gU",0,2,0],
kJ:[function(a,b){var z,y,x,w,v,u,t,s
z=M.aF
H.d(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){s=t.gq()
s.toString
H.l(x,w)
if(s.a==null)s.sae(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bT(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","ghM",8,0,21],
kK:[function(a,b){var z,y,x
z=M.aF
H.d(b,"$isk",[z],"$ask")
for(y=b.gP(b),x=this.gU();y.B();)y.gI().gq().O(0,x)
z=new D.bU(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","ghN",8,0,21],
aa:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ap(z,z.length,0,[H.r(z,0)]);z.B();){y=z.d
if(!(y==null))y.aa(a)}this.e=!1},
$ask:function(){return[M.aF]},
$asM:function(){return[M.aF]},
$isaF:1},hC:{"^":"a;0a,0b,0c,0d,0e,0f",
gq:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
a0:[function(a){var z
H.j(a,"$isv")
z=this.f
if(!(z==null))z.F(a)},function(){return this.a0(null)},"dk","$1","$0","gU",0,2,0],
sbe:function(a){var z,y
if(a==null)a=new X.i5()
z=this.a
if(z!==a){if(z!=null)z.gq().O(0,this.gU())
y=this.a
this.a=a
a.gq().h(0,this.gU())
z=new D.B("camera",y,this.a,this,[X.cd])
z.b=!0
this.a0(z)}},
sbp:function(a,b){var z,y
if(b==null)b=X.d2(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gq().O(0,this.gU())
y=this.b
this.b=b
b.gq().h(0,this.gU())
z=new D.B("target",y,this.b,this,[X.ds])
z.b=!0
this.a0(z)}},
sa2:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gq().O(0,this.gU())
y=this.c
this.c=a
if(a!=null)a.gq().h(0,this.gU())
z=new D.B("technique",y,this.c,this,[O.bG])
z.b=!0
this.a0(z)}},
aa:function(a){a.d4(this.c)
this.b.S(a)
this.a.S(a)
this.d.aB(a)
this.d.aa(a)
this.a.au(a)
this.b.toString
a.d3()},
$isaF:1},hR:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sfR:function(a,b){this.d=H.d(b,"$isM",[E.L],"$asM")},
a0:[function(a){var z
H.j(a,"$isv")
z=this.x
if(!(z==null))z.F(a)},function(){return this.a0(null)},"dk","$1","$0","gU",0,2,0],
ks:[function(a,b){var z,y,x,w,v,u,t,s
z=E.L
H.d(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gam()==null){s=new D.bv()
s.sae(null)
s.sbB(null)
s.c=null
s.d=0
t.sam(s)}s=t.gam()
s.toString
H.l(x,w)
if(s.a==null)s.sae(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bT(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","ghu",8,0,6],
kt:[function(a,b){var z,y,x
z=E.L
H.d(b,"$isk",[z],"$ask")
for(y=b.gP(b),x=this.gU();y.B();)y.gI().gq().O(0,x)
z=new D.bU(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","ghv",8,0,6],
sbe:function(a){var z,y
if(a==null)a=X.eS(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gq().O(0,this.gU())
y=this.a
this.a=a
a.gq().h(0,this.gU())
z=new D.B("camera",y,this.a,this,[X.cd])
z.b=!0
this.a0(z)}},
sbp:function(a,b){var z,y
if(b==null)b=X.d2(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gq().O(0,this.gU())
y=this.b
this.b=b
b.gq().h(0,this.gU())
z=new D.B("target",y,this.b,this,[X.ds])
z.b=!0
this.a0(z)}},
gq:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
aa:function(a){var z
a.d4(this.c)
this.b.S(a)
this.a.S(a)
for(z=this.d.a,z=new J.ap(z,z.length,0,[H.r(z,0)]);z.B();)z.d.aB(a)
for(z=this.d.a,z=new J.ap(z,z.length,0,[H.r(z,0)]);z.B();)z.d.aa(a)
this.a.toString
a.cy.aN()
a.db.aN()
this.b.toString
a.d3()},
$isaF:1},aF:{"^":"a;"}}],["","",,A,{"^":"",e7:{"^":"a;a,b,c"},hm:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
jl:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
C.b.ea(w.a,w.c)}},
e7:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
C.b.e8(w.a,w.c)}}},eL:{"^":"cw;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ay,0ao,0bO,0eb,0bP,0bQ,0ec,0ed,0bR,0bS,0ee,0ef,0bT,0bU,0eg,0eh,0bV,0ei,0ej,0bW,0ek,0el,0bX,0bY,0bZ,0em,0en,0c_,0c0,0eo,0ep,0c1,0eq,0cR,0er,0cS,0es,0cT,0eu,0cU,0ev,0cV,0ew,0cW,a,b,0c,0d,0e,0f,0r,0x,0y",
sfL:function(a){this.r1=H.d(a,"$isb",[A.aA],"$asb")},
sfY:function(a){this.cR=H.d(a,"$isb",[A.dB],"$asb")},
shS:function(a){this.cS=H.d(a,"$isb",[A.dD],"$asb")},
sia:function(a){this.cT=H.d(a,"$isb",[A.dE],"$asb")},
sir:function(a){this.cU=H.d(a,"$isb",[A.dF],"$asb")},
sis:function(a){this.cV=H.d(a,"$isb",[A.dG],"$asb")},
sit:function(a){this.cW=H.d(a,"$isb",[A.dH],"$asb")},
fh:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.c0("")
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
a1.ix(z)
a1.iE(z)
a1.iy(z)
a1.iM(z)
a1.iN(z)
a1.iG(z)
a1.iR(z)
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
z=new P.c0("")
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
v.iB(z)
v.iw(z)
v.iz(z)
v.iC(z)
v.iK(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.iI(z)
v.iJ(z)}v.iF(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.h){r+="uniform int nullAlphaTxt;\n"
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
case C.h:r+="   return alpha;\n"
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
p=H.c([],[P.u])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.C(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.iA(z)
v.iH(z)
v.iL(z)
v.iO(z)
v.iP(z)
v.iQ(z)
v.iD(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.u])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(v.c!==C.c)z.a+="   setDiffuseColor();\n"
if(v.d!==C.c)z.a+="   setInvDiffuseColor();\n"
if(v.e!==C.c)z.a+="   setSpecularColor();\n"
if(v.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(v.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(v.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(v.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(v.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(v.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(v.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(v.a!==C.c)C.a.h(o,"emission()")
if(v.r!==C.c)C.a.h(o,"reflect(refl)")
if(v.x!==C.c)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.C(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.ey(x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.e(this.y.m(0,"invViewMat"),"$isaA")
if(y)this.dy=H.e(this.y.m(0,"objMat"),"$isaA")
if(w)this.fr=H.e(this.y.m(0,"viewObjMat"),"$isaA")
this.fy=H.e(this.y.m(0,"projViewObjMat"),"$isaA")
if(a1.x2)this.k1=H.e(this.y.m(0,"txt2DMat"),"$isdC")
if(a1.y1)this.k2=H.e(this.y.m(0,"txtCubeMat"),"$isaA")
if(a1.y2)this.k3=H.e(this.y.m(0,"colorMat"),"$isaA")
this.sfL(H.c([],[A.aA]))
y=a1.ay
if(y>0){this.k4=H.j(this.y.m(0,"bendMatCount"),"$isD")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.o(P.m("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.e(l,"$isaA"))}}y=a1.a
if(y!==C.c){this.r2=H.e(this.y.m(0,"emissionClr"),"$isC")
switch(y){case C.c:break
case C.h:break
case C.d:this.rx=H.e(this.y.m(0,"emissionTxt"),"$isav")
this.x1=H.e(this.y.m(0,"nullEmissionTxt"),"$isD")
break
case C.e:this.ry=H.e(this.y.m(0,"emissionTxt"),"$isak")
this.x1=H.e(this.y.m(0,"nullEmissionTxt"),"$isD")
break}}y=a1.b
if(y!==C.c){this.x2=H.e(this.y.m(0,"ambientClr"),"$isC")
switch(y){case C.c:break
case C.h:break
case C.d:this.y1=H.e(this.y.m(0,"ambientTxt"),"$isav")
this.ay=H.e(this.y.m(0,"nullAmbientTxt"),"$isD")
break
case C.e:this.y2=H.e(this.y.m(0,"ambientTxt"),"$isak")
this.ay=H.e(this.y.m(0,"nullAmbientTxt"),"$isD")
break}}y=a1.c
if(y!==C.c){this.ao=H.e(this.y.m(0,"diffuseClr"),"$isC")
switch(y){case C.c:break
case C.h:break
case C.d:this.bO=H.e(this.y.m(0,"diffuseTxt"),"$isav")
this.bP=H.e(this.y.m(0,"nullDiffuseTxt"),"$isD")
break
case C.e:this.eb=H.e(this.y.m(0,"diffuseTxt"),"$isak")
this.bP=H.e(this.y.m(0,"nullDiffuseTxt"),"$isD")
break}}y=a1.d
if(y!==C.c){this.bQ=H.e(this.y.m(0,"invDiffuseClr"),"$isC")
switch(y){case C.c:break
case C.h:break
case C.d:this.ec=H.e(this.y.m(0,"invDiffuseTxt"),"$isav")
this.bR=H.e(this.y.m(0,"nullInvDiffuseTxt"),"$isD")
break
case C.e:this.ed=H.e(this.y.m(0,"invDiffuseTxt"),"$isak")
this.bR=H.e(this.y.m(0,"nullInvDiffuseTxt"),"$isD")
break}}y=a1.e
if(y!==C.c){this.bU=H.e(this.y.m(0,"shininess"),"$isP")
this.bS=H.e(this.y.m(0,"specularClr"),"$isC")
switch(y){case C.c:break
case C.h:break
case C.d:this.ee=H.e(this.y.m(0,"specularTxt"),"$isav")
this.bT=H.e(this.y.m(0,"nullSpecularTxt"),"$isD")
break
case C.e:this.ef=H.e(this.y.m(0,"specularTxt"),"$isak")
this.bT=H.e(this.y.m(0,"nullSpecularTxt"),"$isD")
break}}switch(a1.f){case C.c:break
case C.h:break
case C.d:this.eg=H.e(this.y.m(0,"bumpTxt"),"$isav")
this.bV=H.e(this.y.m(0,"nullBumpTxt"),"$isD")
break
case C.e:this.eh=H.e(this.y.m(0,"bumpTxt"),"$isak")
this.bV=H.e(this.y.m(0,"nullBumpTxt"),"$isD")
break}if(a1.dy){this.ei=H.e(this.y.m(0,"envSampler"),"$isak")
this.ej=H.e(this.y.m(0,"nullEnvTxt"),"$isD")
y=a1.r
if(y!==C.c){this.bW=H.e(this.y.m(0,"reflectClr"),"$isC")
switch(y){case C.c:break
case C.h:break
case C.d:this.ek=H.e(this.y.m(0,"reflectTxt"),"$isav")
this.bX=H.e(this.y.m(0,"nullReflectTxt"),"$isD")
break
case C.e:this.el=H.e(this.y.m(0,"reflectTxt"),"$isak")
this.bX=H.e(this.y.m(0,"nullReflectTxt"),"$isD")
break}}y=a1.x
if(y!==C.c){this.bY=H.e(this.y.m(0,"refraction"),"$isP")
this.bZ=H.e(this.y.m(0,"refractClr"),"$isC")
switch(y){case C.c:break
case C.h:break
case C.d:this.em=H.e(this.y.m(0,"refractTxt"),"$isav")
this.c_=H.e(this.y.m(0,"nullRefractTxt"),"$isD")
break
case C.e:this.en=H.e(this.y.m(0,"refractTxt"),"$isak")
this.c_=H.e(this.y.m(0,"nullRefractTxt"),"$isD")
break}}}y=a1.y
if(y!==C.c){this.c0=H.e(this.y.m(0,"alpha"),"$isP")
switch(y){case C.c:break
case C.h:break
case C.d:this.eo=H.e(this.y.m(0,"alphaTxt"),"$isav")
this.c1=H.e(this.y.m(0,"nullAlphaTxt"),"$isD")
break
case C.e:this.ep=H.e(this.y.m(0,"alphaTxt"),"$isak")
this.c1=H.e(this.y.m(0,"nullAlphaTxt"),"$isD")
break}}this.sfY(H.c([],[A.dB]))
this.shS(H.c([],[A.dD]))
this.sia(H.c([],[A.dE]))
this.sir(H.c([],[A.dF]))
this.sis(H.c([],[A.dG]))
this.sit(H.c([],[A.dH]))
if(a1.k2){y=a1.z
if(y>0){this.eq=H.j(this.y.m(0,"dirLightCount"),"$isD")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isC")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isC")
x=this.cR;(x&&C.a).h(x,new A.dB(m,l,k))}}y=a1.Q
if(y>0){this.er=H.j(this.y.m(0,"pntLightCount"),"$isD")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isC")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isC")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isC")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isP")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isP")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isP")
x=this.cS;(x&&C.a).h(x,new A.dD(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.es=H.j(this.y.m(0,"spotLightCount"),"$isD")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isC")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isC")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isC")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isC")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isP")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isP")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isP")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isP")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isP")
x=this.cT;(x&&C.a).h(x,new A.dE(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.eu=H.j(this.y.m(0,"txtDirLightCount"),"$isD")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isC")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isC")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isC")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isC")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isC")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isD")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isav")
x=this.cU;(x&&C.a).h(x,new A.dF(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.ev=H.j(this.y.m(0,"txtPntLightCount"),"$isD")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isC")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isC")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isdC")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isC")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isP")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isP")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isP")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isak")
x=this.cV;(x&&C.a).h(x,new A.dG(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.ew=H.j(this.y.m(0,"txtSpotLightCount"),"$isD")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isC")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isC")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isC")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isC")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isC")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isD")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isC")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isP")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isP")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isP")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(b,"$isP")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a,"$isP")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a0,"$isav")
x=this.cW;(x&&C.a).h(x,new A.dH(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
an:function(a,b,c){if(c==null||!c.d)C.b.H(b.a,b.d,1)
else{a.f5(c)
C.b.H(b.a,b.d,0)}},
af:function(a,b,c){if(c==null||c.d<6)C.b.H(b.a,b.d,1)
else{a.dc(c)
C.b.H(b.a,b.d,0)}},
l:{
iD:function(a,b){var z,y
z=a.ao
y=new A.eL(b,z)
y.dh(b,z)
y.fh(a,b)
return y}}},iG:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ay,ao,bO",
ix:function(a){var z,y,x
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
iE:function(a){var z
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
iy:function(a){var z
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
iM:function(a){var z,y
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
iN:function(a){var z,y
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
iG:function(a){var z
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
iR:function(a){var z
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
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cc(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
iB:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aE(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.h:z=y+"   return emissionClr;\n"
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
iw:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aE(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.h:z=y+"   return ambientClr;\n"
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
iz:function(a){var z,y
z=this.c
if(z===C.c)return
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
switch(z){case C.c:z=y
break
case C.h:z=y+"   diffuseColor = diffuseClr;\n"
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
iC:function(a){var z,y
z=this.d
if(z===C.c)return
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
switch(z){case C.c:z=y
break
case C.h:z=y+"   invDiffuseColor = invDiffuseClr;\n"
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
iK:function(a){var z,y
z=this.e
if(z===C.c)return
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
switch(z){case C.c:z=y
break
case C.h:z=y+"   specularColor = specularClr;\n"
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
iF:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.h:break
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
case C.h:z+="   return normalize(normalVec);\n"
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
iI:function(a){var z,y
z=this.r
if(z===C.c)return
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
switch(z){case C.c:z=y
break
case C.h:z=y+"   vec3 scalar = reflectClr;\n"
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
iJ:function(a){var z,y
z=this.x
if(z===C.c)return
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
switch(z){case C.c:z=y
break
case C.h:z=y+"   vec3 scalar = refractClr;\n"
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
iA:function(a){var z,y
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
iH:function(a){var z,y
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
iL:function(a){var z,y
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
iO:function(a){var z,y,x
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
iP:function(a){var z,y,x
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
iQ:function(a){var z,y,x
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
iD:function(a){var z
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
i:function(a){return this.ao}},dB:{"^":"a;a,b,c"},dF:{"^":"a;a,b,c,d,e,f,r,x"},dD:{"^":"a;a,b,c,d,e,f,r"},dG:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dE:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dH:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cw:{"^":"cQ;",
dh:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
ey:function(a,b){var z,y,x
this.c=a
this.d=b
this.e=this.dA(a,35633)
this.f=this.dA(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
C.b.dX(z,y,this.e)
C.b.dX(z,this.r,this.f)
C.b.jA(z,this.r)
if(!H.h4(C.b.cb(z,this.r,35714))){x=C.b.eY(z,this.r)
C.b.jd(z,this.r)
H.o(P.m("Failed to link shader: "+H.i(x)))}this.i5()
this.i7()},
S:function(a){C.b.d7(a.a,this.r)
this.x.jl()},
dA:function(a,b){var z,y,x
z=this.a
y=C.b.jb(z,b)
C.b.f6(z,y,a)
C.b.j5(z,y)
if(!H.h4(C.b.f0(z,y,35713))){x=C.b.f_(z,y)
C.b.je(z,y)
throw H.h(P.m("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
i5:function(){var z,y,x,w,v,u
z=H.c([],[A.e7])
y=this.a
x=H.U(C.b.cb(y,this.r,35721))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=C.b.eT(y,this.r,w)
u=C.b.eV(y,this.r,v.name)
C.a.h(z,new A.e7(y,v.name,u))}this.x=new A.hm(z)},
i7:function(){var z,y,x,w,v,u
z=H.c([],[A.a7])
y=this.a
x=H.U(C.b.cb(y,this.r,35718))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=C.b.eU(y,this.r,w)
u=C.b.f1(y,this.r,v.name)
C.a.h(z,this.jc(v.type,v.size,v.name,u))}this.y=new A.k1(z)},
aT:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.D(z,y,b,c)
else return A.dA(z,y,b,a,c)},
fV:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.av(z,y,b,c)
else return A.dA(z,y,b,a,c)},
fW:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ak(z,y,b,c)
else return A.dA(z,y,b,a,c)},
bK:function(a,b){return new P.fF(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
jc:function(a,b,c,d){switch(a){case 5120:return this.aT(b,c,d)
case 5121:return this.aT(b,c,d)
case 5122:return this.aT(b,c,d)
case 5123:return this.aT(b,c,d)
case 5124:return this.aT(b,c,d)
case 5125:return this.aT(b,c,d)
case 5126:return new A.P(this.a,this.r,c,d)
case 35664:return new A.jX(this.a,this.r,c,d)
case 35665:return new A.C(this.a,this.r,c,d)
case 35666:return new A.k_(this.a,this.r,c,d)
case 35667:return new A.jY(this.a,this.r,c,d)
case 35668:return new A.jZ(this.a,this.r,c,d)
case 35669:return new A.k0(this.a,this.r,c,d)
case 35674:return new A.k3(this.a,this.r,c,d)
case 35675:return new A.dC(this.a,this.r,c,d)
case 35676:return new A.aA(this.a,this.r,c,d)
case 35678:return this.fV(b,c,d)
case 35680:return this.fW(b,c,d)
case 35670:throw H.h(this.bK("BOOL",c))
case 35671:throw H.h(this.bK("BOOL_VEC2",c))
case 35672:throw H.h(this.bK("BOOL_VEC3",c))
case 35673:throw H.h(this.bK("BOOL_VEC4",c))
default:throw H.h(P.m("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},ce:{"^":"a;a,b",
i:function(a){return this.b}},f3:{"^":"cw;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},a7:{"^":"a;"},k1:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.h(P.m("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.J()},
jp:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
J:function(){return this.jp("\n")}},D:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},jY:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},jZ:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},k0:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},jW:{"^":"a7;0e,0f,a,b,c,d",
siu:function(a){this.e=H.d(a,"$isb",[P.y],"$asb")},
i:function(a){return"Uniform1iv: "+H.i(this.c)},
l:{
dA:function(a,b,c,d,e){var z=new A.jW(a,b,c,e)
z.f=d
z.siu(P.iv(d,0,!1,P.y))
return z}}},P:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},jX:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},C:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},k_:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},k3:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},dC:{"^":"a7;a,b,c,d",
al:function(a){var z=new Float32Array(H.bM(H.d(a,"$isb",[P.x],"$asb")))
C.b.eN(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},aA:{"^":"a7;a,b,c,d",
al:function(a){var z=new Float32Array(H.bM(H.d(a,"$isb",[P.x],"$asb")))
C.b.eO(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},av:{"^":"a7;a,b,c,d",
f5:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)C.b.H(y,x,0)
else C.b.H(y,x,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},ak:{"^":"a7;a,b,c,d",
dc:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)C.b.H(y,x,0)
else C.b.H(y,x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
lz:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
e=new F.lA()
if(f<3)return
z=F.dk()
y=-6.283185307179586/f
x=H.c([],[F.al])
w=z.a
v=new V.G(0,0,1)
v=v.w(0,Math.sqrt(v.E(v)))
C.a.h(x,w.iV(new V.b4(a,-1,-1,-1),new V.aI(1,1,1,1),new V.a5(0,0,d),new V.G(0,0,1),new V.T(0.5,0.5),v))
for(u=0;u<=f;++u){t=y*u
s=Math.sin(t)
r=Math.cos(t)
q=e.$1(u/f)
w=z.a
if(typeof q!=="number")return H.n(q)
v=new V.G(s,r,1).w(0,Math.sqrt(s*s+r*r+1))
if(s<0)p=0
else p=s>1?1:s
o=r<0
if(o)n=0
else n=r>1?1:r
if(o)o=0
else o=r>1?1:r
w.toString
m=F.dJ(new V.b4(a,-1,-1,-1),null,new V.aI(p,n,o,1),new V.a5(s*q,r*q,d),new V.G(0,0,1),new V.T(s*0.5+0.5,r*0.5+0.5),v,null,0)
w.h(0,m)
C.a.h(x,m)}z.d.cF(x)
return z},
lA:{"^":"q:38;",
$1:function(a){return 1}},
a4:{"^":"a;0a,0b,0c,0d,0e",
fK:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.c1()
if(y!=null)v=v.n(0,y)
if(x!=null)v=v.n(0,x)
if(w!=null)v=v.n(0,w)
if(v.ez())return
return v.w(0,Math.sqrt(v.E(v)))},
fP:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.D(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.E(z)))
z=w.D(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.bh(z.w(0,Math.sqrt(z.E(z))))
return z.w(0,Math.sqrt(z.E(z)))},
cN:function(){if(this.d!=null)return!0
var z=this.fK()
if(z==null){z=this.fP()
if(z==null)return!1}this.d=z
this.a.a.a5()
return!0},
fJ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.c1()
if(y!=null)v=v.n(0,y)
if(x!=null)v=v.n(0,x)
if(w!=null)v=v.n(0,w)
if(v.ez())return
return v.w(0,Math.sqrt(v.E(v)))},
fO:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(typeof z!=="number")return z.D()
if(typeof y!=="number")return H.n(y)
n=z-y
if($.p.$2(n,0)){z=r.D(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.E(z)))
z=o.a
p=p.a
if(typeof z!=="number")return z.D()
if(typeof p!=="number")return H.n(p)
if(z-p<0)m=m.K(0)}else{y=q.b
if(typeof y!=="number")return H.n(y)
l=(z-y)/n
y=r.D(0,u)
z=y.a
if(typeof z!=="number")return z.k()
w=y.b
if(typeof w!=="number")return w.k()
y=y.c
if(typeof y!=="number")return y.k()
v=u.a
if(typeof v!=="number")return H.n(v)
t=u.b
if(typeof t!=="number")return H.n(t)
s=u.c
if(typeof s!=="number")return H.n(s)
s=new V.a5(z*l+v,w*l+t,y*l+s).D(0,x)
s=new V.G(s.a,s.b,s.c)
m=s.w(0,Math.sqrt(s.E(s)))
o=o.a
p=p.a
if(typeof o!=="number")return o.D()
if(typeof p!=="number")return H.n(p)
q=q.a
if(typeof q!=="number")return H.n(q)
if((o-p)*l+p-q<0)m=m.K(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.E(z)))
z=k.bh(m)
z=z.w(0,Math.sqrt(z.E(z))).bh(k)
m=z.w(0,Math.sqrt(z.E(z)))}return m},
cL:function(){if(this.e!=null)return!0
var z=this.fJ()
if(z==null){z=this.fO()
if(z==null)return!1}this.e=z
this.a.a.a5()
return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var z,y
z=this.a
if(z==null||this.b==null||this.c==null)return a+"disposed"
y=a+C.i.aj(J.ao(z.e),0)+", "+C.i.aj(J.ao(this.b.e),0)+", "+C.i.aj(J.ao(this.c.e),0)+" {"
z=this.d
y=z!=null?y+(z.i(0)+", "):y+"-, "
z=this.e
return z!=null?y+(z.i(0)+"}"):y+"-}"},
J:function(){return this.A("")}},
bb:{"^":"a;0a,0b",
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var z=this.a
if(z==null||this.b==null)return a+"disposed"
return a+C.i.aj(J.ao(z.e),0)+", "+C.i.aj(J.ao(this.b.e),0)},
J:function(){return this.A("")},
l:{
ip:function(a,b){var z,y,x
z=new F.bb()
y=a.a
if(y==null)H.o(P.m("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.o(P.m("May not create a line with vertices attached to different shapes."))
z.a=a
C.a.h(a.c.b,z)
z.b=b
C.a.h(b.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.a5()
return z}}},
bD:{"^":"a;0a",
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.aj(J.ao(z.e),0)},
J:function(){return this.A("")}},
f2:{"^":"a;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
b1:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.b1()||!1
if(!this.a.b1())y=!1
z=this.e
if(!(z==null))z.b6()
return y},
e_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aB()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$aU().a)!==0)++w
if((x&$.$get$bI().a)!==0)++w
if((x&$.$get$bJ().a)!==0)++w
if((x&$.$get$bi().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
v=b.gdd(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.x
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.ea])
for(r=0,q=0;q<w;++q){p=b.iW(q)
o=p.gdd(p)
C.a.a_(s,q,new Z.ea(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].jB(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a_(t,l,m[k]);++l}}r+=o}H.d(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.ax(y,34962,j)
C.b.dZ(y,34962,new Float32Array(H.bM(t)),35044)
C.b.ax(y,34962,null)
i=new Z.cT(new Z.fA(34962,j),s,b)
i.shd(H.c([],[Z.bS]))
if(this.b.b.length!==0){x=P.y
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.aI()
C.a.h(h,g.e)}f=Z.dK(y,34963,H.d(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bS(0,h.length,f))}if(this.c.b.length!==0){x=P.y
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.aI()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.aI()
C.a.h(h,g.e)}f=Z.dK(y,34963,H.d(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bS(1,h.length,f))}if(this.d.b.length!==0){x=P.y
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.aI()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.aI()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.aI()
C.a.h(h,g.e)}f=Z.dK(y,34963,H.d(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bS(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.u])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.C(z,"\n")},
a9:function(a){var z=this.e
if(!(z==null))z.F(a)},
a5:function(){return this.a9(null)},
$ismh:1,
l:{
dk:function(){var z,y
z=new F.f2()
y=new F.kd(z)
y.b=!1
y.siv(H.c([],[F.al]))
z.a=y
y=new F.ju(z)
y.sct(H.c([],[F.bD]))
z.b=y
y=new F.jt(z)
y.she(H.c([],[F.bb]))
z.c=y
y=new F.js(z)
y.sh3(H.c([],[F.a4]))
z.d=y
z.e=null
return z}}},
js:{"^":"a;a,0b",
sh3:function(a){this.b=H.d(a,"$isb",[F.a4],"$asb")},
cF:function(a){var z,y,x,w,v,u,t,s,r,q
H.d(a,"$isb",[F.al],"$asb")
z=H.c([],[F.a4])
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
s=new F.a4()
r=x.a
if(r==null)H.o(P.m("May not create a face with a first vertex which is not attached to a shape."))
q=u.a
if(r==null?q==null:r===q){q=t.a
q=r==null?q!=null:r!==q
r=q}else r=!0
if(r)H.o(P.m("May not create a face with vertices attached to different shapes."))
s.a=x
C.a.h(x.d.b,s)
s.b=u
C.a.h(u.d.c,s)
s.c=t
C.a.h(t.d.d,s)
C.a.h(s.a.a.d.b,s)
u=s.a.a.e
if(!(u==null))u.F(null)
C.a.h(z,s)}}return z},
gp:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>=z.length)return H.f(z,b)
return z[b]},
b1:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cN())x=!1
return x},
cM:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cL())x=!1
return x},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.c([],[P.u])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
jt:{"^":"a;a,0b",
she:function(a){this.b=H.d(a,"$isb",[F.bb],"$asb")},
iT:function(a){var z,y,x,w,v,u
H.d(a,"$isb",[F.al],"$asb")
z=H.c([],[F.bb])
y=a.length
for(x=this.a,w=1;w<y;w+=2){v=w-1
u=a.length
if(v>=u)return H.f(a,v)
v=a[v]
if(w>=u)return H.f(a,w)
u=a[w]
x.a.h(0,v)
x.a.h(0,u)
C.a.h(z,F.ip(v,u))}return z},
gp:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>=z.length)return H.f(z,b)
return z[b]},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.c([],[P.u])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.C(z,"\n")},
J:function(){return this.A("")}},
ju:{"^":"a;a,0b",
sct:function(a){this.b=H.d(a,"$isb",[F.bD],"$asb")},
iU:function(a){var z,y,x,w,v,u
H.d(a,"$isb",[F.al],"$asb")
z=H.c([],[F.bD])
y=a.length
for(x=this.a,w=0;w<y;++w){if(w>=a.length)return H.f(a,w)
v=a[w]
x.a.h(0,v)
u=new F.bD()
if(v.a==null)H.o(P.m("May not create a point with a vertex which is not attached to a shape."))
u.a=v
C.a.h(v.b.b,u)
C.a.h(u.a.a.b.b,u)
v=u.a.a.e
if(!(v==null))v.F(null)
C.a.h(z,u)}return z},
gp:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>=z.length)return H.f(z,b)
return z[b]},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.c([],[P.u])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
al:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
jB:function(a){var z,y
if(a.v(0,$.$get$aB())){z=this.f
y=[P.x]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$aS())){z=this.r
y=[P.x]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$aR())){z=this.x
y=[P.x]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$aT())){z=this.y
y=[P.x]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.v(0,$.$get$aU())){z=this.z
y=[P.x]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$bI())){z=this.Q
y=[P.x]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$bJ())){z=this.Q
y=[P.x]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.v(0,$.$get$bi()))return H.c([this.ch],[P.x])
else if(a.v(0,$.$get$aQ())){z=this.cx
y=[P.x]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.x])},
cN:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.c1()
this.d.a8(0,new F.kk(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.a5()
z=this.a.e
if(!(z==null))z.b6()}return!0},
cL:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.c1()
this.d.a8(0,new F.kj(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.a5()
z=this.a.e
if(!(z==null))z.b6()}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var z,y,x
z=H.c([],[P.u])
C.a.h(z,C.i.aj(J.ao(this.e),0))
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
C.a.h(z,V.J(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.C(z,", ")
return a+"{"+x+"}"},
J:function(){return this.A("")},
l:{
dJ:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.al()
y=new F.ki(z)
y.sct(H.c([],[F.bD]))
z.b=y
y=new F.kh(z)
x=[F.bb]
y.shf(H.c([],x))
y.shg(H.c([],x))
z.c=y
y=new F.ke(z)
x=[F.a4]
y.sh4(H.c([],x))
y.sh5(H.c([],x))
y.sh6(H.c([],x))
z.d=y
h=$.$get$fx()
z.e=0
y=$.$get$aB()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aS().a)!==0?e:null
z.x=(x&$.$get$aR().a)!==0?b:null
z.y=(x&$.$get$aT().a)!==0?f:null
z.z=(x&$.$get$aU().a)!==0?g:null
z.Q=(x&$.$get$fy().a)!==0?c:null
z.ch=(x&$.$get$bi().a)!==0?i:0
z.cx=(x&$.$get$aQ().a)!==0?a:null
return z}}},
kk:{"^":"q:7;a",
$1:function(a){var z,y
H.j(a,"$isa4")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.n(0,z)}}},
kj:{"^":"q:7;a",
$1:function(a){var z,y
H.j(a,"$isa4")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.n(0,z)}}},
kd:{"^":"a;a,0b,0c",
siv:function(a){this.c=H.d(a,"$isb",[F.al],"$asb")},
aI:function(){},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.h(P.m("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a5()
return!0},
dV:function(a,b,c,d,e,f,g,h,i){var z=F.dJ(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bM:function(a,b,c,d,e,f){return this.dV(a,null,b,c,null,d,e,f,0)},
iV:function(a,b,c,d,e,f){return this.dV(a,null,b,c,d,e,f,null,0)},
gp:function(a){return this.c.length},
j:function(a,b){var z=this.c
if(b>=z.length)return H.f(z,b)
return z[b]},
b1:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cN()
return!0},
cM:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cL()
return!0},
j0:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
if(typeof u!=="number")return u.k()
t=v.b
if(typeof t!=="number")return t.k()
s=v.c
if(typeof s!=="number")return s.k()
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.R(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.F(null)}}}}return!0},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
this.aI()
z=H.c([],[P.u])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
ke:{"^":"a;a,0b,0c,0d",
sh4:function(a){this.b=H.d(a,"$isb",[F.a4],"$asb")},
sh5:function(a){this.c=H.d(a,"$isb",[F.a4],"$asb")},
sh6:function(a){this.d=H.d(a,"$isb",[F.a4],"$asb")},
gp:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y
z=this.b.length
if(b.Z(0,z))return C.a.j(this.b,b)
b=b.D(0,z)
y=this.c.length
if(b.Z(0,y))return C.a.j(this.c,b)
b=b.D(0,y)
return C.a.j(this.d,b)},
a8:function(a,b){H.l(b,{func:1,ret:-1,args:[F.a4]})
C.a.a8(this.b,b)
C.a.a8(this.c,new F.kf(this,b))
C.a.a8(this.d,new F.kg(this,b))},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.c([],[P.u])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
kf:{"^":"q:7;a,b",
$1:function(a){H.j(a,"$isa4")
if(!J.R(a.a,this.a))this.b.$1(a)}},
kg:{"^":"q:7;a,b",
$1:function(a){var z
H.j(a,"$isa4")
z=this.a
if(!J.R(a.a,z)&&!J.R(a.b,z))this.b.$1(a)}},
kh:{"^":"a;a,0b,0c",
shf:function(a){this.b=H.d(a,"$isb",[F.bb],"$asb")},
shg:function(a){this.c=H.d(a,"$isb",[F.bb],"$asb")},
gp:function(a){return this.b.length+this.c.length},
j:function(a,b){var z=this.b.length
if(b.b7(0,z))return C.a.j(this.c,b.D(0,z))
else return C.a.j(this.b,b)},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.c([],[P.u])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
ki:{"^":"a;a,0b",
sct:function(a){this.b=H.d(a,"$isb",[F.bD],"$asb")},
gp:function(a){return this.b.length},
j:function(a,b){return C.a.j(this.b,b)},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.c([],[P.u])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}}}],["","",,O,{"^":"",aM:{"^":"bG;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sfM:function(a){this.e=H.d(a,"$isM",[V.ai],"$asM")},
gq:function(){var z=this.dy
if(z==null){z=D.F()
this.dy=z}return z},
M:[function(a){var z
H.j(a,"$isv")
z=this.dy
if(!(z==null))z.F(a)},function(){return this.M(null)},"dl","$1","$0","gav",0,2,0],
i2:[function(a){H.j(a,"$isv")
this.a=null
this.M(a)},function(){return this.i2(null)},"kO","$1","$0","gi1",0,2,0],
kp:[function(a,b){var z=V.ai
z=new D.bT(a,H.d(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.M(z)},"$2","ghr",8,0,22],
kq:[function(a,b){var z=V.ai
z=new D.bU(a,H.d(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.M(z)},"$2","ghs",8,0,22],
sah:function(a){var z,y
z=this.ch
if(z==null?a!=null:z!==a){if(z!=null)z.gq().O(0,this.gav())
y=this.ch
this.ch=a
if(a!=null)a.gq().h(0,this.gav())
z=new D.B("environment",y,this.ch,this,[T.dt])
z.b=!0
this.M(z)}},
dv:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.f.a3(z.e.length+3,4)*4
x=C.f.a3(z.f.length+3,4)*4
w=C.f.a3(z.r.length+3,4)*4
v=C.f.a3(z.x.length+3,4)*4
u=C.f.a3(z.y.length+3,4)*4
t=C.f.a3(z.z.length+3,4)*4
s=C.f.a3(this.e.a.length+3,4)*4
z=this.f.c
r=this.r.c
q=this.x.c
p=this.y.c
o=this.z.c
n=this.Q.c
m=this.cx.c
l=this.cy.c
k=this.db.c
j="MaterialLight_"+C.f.i(z.a)+C.f.i(r.a)+C.f.i(q.a)+C.f.i(p.a)+C.f.i(o.a)+C.f.i(n.a)+C.f.i(m.a)+C.f.i(l.a)+C.f.i(k.a)
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
a2=$.$get$aB()
if(e){g=$.$get$aS()
a2=new Z.bh(a2.a|g.a)}if(d){g=$.$get$aR()
a2=new Z.bh(a2.a|g.a)}if(c){g=$.$get$aT()
a2=new Z.bh(a2.a|g.a)}if(b){g=$.$get$aU()
a2=new Z.bh(a2.a|g.a)}if(a0){g=$.$get$aQ()
a2=new Z.bh(a2.a|g.a)}return new A.iG(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
R:function(a,b){H.d(a,"$isb",[T.cx],"$asb")
if(b!=null)if(!C.a.b2(a,b)){b.sbj(0,a.length)
C.a.h(a,b)}},
aB:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.ap(z,z.length,0,[H.r(z,0)]);z.B();){y=z.d
y.toString
x=$.cB
if(x==null){x=new V.G(0,0,1)
$.cB=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.d6(x)}}},
eI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dv()
y=H.j(a.fr.j(0,z.ao),"$iseL")
if(y==null){y=A.iD(z,a.a)
a.dW(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bO
z=b.e
if(!(z instanceof Z.cT)){b.e=null
z=null}if(z==null||!z.d.v(0,w)){z=x.r1
if(z)b.d.b1()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cM()
u.a.cM()
u=u.e
if(!(u==null))u.b6()}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.j0()
t=t.e
if(!(t==null))t.b6()}r=b.d.e_(new Z.fB(a.a),w)
r.aM($.$get$aB()).e=this.a.Q.c
if(z)r.aM($.$get$aS()).e=this.a.cx.c
if(v)r.aM($.$get$aR()).e=this.a.ch.c
if(x.rx)r.aM($.$get$aT()).e=this.a.cy.c
if(u)r.aM($.$get$aU()).e=this.a.db.c
if(x.x1)r.aM($.$get$aQ()).e=this.a.dx.c
b.e=r}z=T.cx
q=H.c([],[z])
this.a.S(a)
if(x.fx){v=this.a
u=a.dx.gN()
v=v.dy
v.toString
v.al(u.ab(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db.gN().k(0,a.dx.gN())
a.cx=u}v=v.fr
v.toString
v.al(u.ab(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gjX().k(0,a.dx.gN())
a.ch=u}v=v.fy
v.toString
v.al(u.ab(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.al(C.o.ab(u,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.al(C.o.ab(u,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.al(C.o.ab(u,!0))}if(x.ay>0){p=this.e.a.length
v=this.a.k4
C.b.H(v.a,v.d,p)
for(v=[P.x],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.f(t,o)
t=t[o]
u.toString
H.j(t,"$isai")
u=u.r1
if(o>=u.length)return H.f(u,o)
u=u[o]
n=new Float32Array(H.bM(H.d(t.ab(0,!0),"$isb",v,"$asb")))
C.b.eO(u.a,u.d,!1,n)}}switch(x.a){case C.c:break
case C.h:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
C.b.u(v.a,v.d,t,s,u)
break
case C.d:this.R(q,this.f.d)
v=this.a
u=this.f.d
v.an(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
C.b.u(u.a,u.d,t,s,v)
break
case C.e:this.R(q,this.f.e)
v=this.a
u=this.f.e
v.af(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
C.b.u(u.a,u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.h:v=this.a
u=this.r.f
v=v.x2
v.toString
t=u.a
s=u.b
u=u.c
C.b.u(v.a,v.d,t,s,u)
break
case C.d:this.R(q,this.r.d)
v=this.a
u=this.r.d
v.an(v.y1,v.ay,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.u(u.a,u.d,t,s,v)
break
case C.e:this.R(q,this.r.e)
v=this.a
u=this.r.e
v.af(v.y2,v.ay,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.u(u.a,u.d,t,s,v)
break}switch(x.c){case C.c:break
case C.h:v=this.a
u=this.x.f
v=v.ao
v.toString
t=u.a
s=u.b
u=u.c
C.b.u(v.a,v.d,t,s,u)
break
case C.d:this.R(q,this.x.d)
v=this.a
u=this.x.d
v.an(v.bO,v.bP,u)
u=this.a
v=this.x.f
u=u.ao
u.toString
t=v.a
s=v.b
v=v.c
C.b.u(u.a,u.d,t,s,v)
break
case C.e:this.R(q,this.x.e)
v=this.a
u=this.x.e
v.af(v.eb,v.bP,u)
u=this.a
v=this.x.f
u=u.ao
u.toString
t=v.a
s=v.b
v=v.c
C.b.u(u.a,u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.h:v=this.a
u=this.y.f
v=v.bQ
v.toString
t=u.a
s=u.b
u=u.c
C.b.u(v.a,v.d,t,s,u)
break
case C.d:this.R(q,this.y.d)
v=this.a
u=this.y.d
v.an(v.ec,v.bR,u)
u=this.a
v=this.y.f
u=u.bQ
u.toString
t=v.a
s=v.b
v=v.c
C.b.u(u.a,u.d,t,s,v)
break
case C.e:this.R(q,this.y.e)
v=this.a
u=this.y.e
v.af(v.ed,v.bR,u)
u=this.a
v=this.y.f
u=u.bQ
u.toString
t=v.a
s=v.b
v=v.c
C.b.u(u.a,u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.h:v=this.a
u=this.z.f
v=v.bS
v.toString
t=u.a
s=u.b
u=u.c
C.b.u(v.a,v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bU
C.b.G(u.a,u.d,s)
break
case C.d:this.R(q,this.z.d)
v=this.a
u=this.z.d
v.an(v.ee,v.bT,u)
u=this.a
v=this.z.f
u=u.bS
u.toString
t=v.a
s=v.b
v=v.c
C.b.u(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bU
C.b.G(v.a,v.d,s)
break
case C.e:this.R(q,this.z.e)
v=this.a
u=this.z.e
v.af(v.ef,v.bT,u)
u=this.a
v=this.z.f
u=u.bS
u.toString
t=v.a
s=v.b
v=v.c
C.b.u(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bU
C.b.G(v.a,v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.eq
C.b.H(v.a,v.d,p)
m=a.db.gN()
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.cR
if(l>=t.length)return H.f(t,l)
i=t[l]
t=m.d6(j.a)
s=t.a
if(typeof s!=="number")return s.k()
h=t.b
if(typeof h!=="number")return h.k()
g=t.c
if(typeof g!=="number")return g.k()
g=t.w(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
s=g.a
t=g.b
g=g.c
C.b.u(h.a,h.d,s,t,g)
g=j.c
t=i.c
C.b.u(t.a,t.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.er
C.b.H(v.a,v.d,p)
m=a.db.gN()
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.cS
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbn(j)
s=i.b
h=t.gc7(t)
g=t.gc8(t)
t=t.gc9(t)
C.b.u(s.a,s.d,h,g,t)
t=m.bt(j.gbn(j))
g=i.c
C.b.u(g.a,g.d,t.a,t.b,t.c)
t=j.gt(j)
g=i.d
h=t.gb5()
s=t.gaO()
t=t.gb0()
C.b.u(g.a,g.d,h,s,t)
t=j.gcG()
s=i.e
C.b.G(s.a,s.d,t)
t=j.gcH()
s=i.f
C.b.G(s.a,s.d,t)
t=j.gcI()
s=i.r
C.b.G(s.a,s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.es
C.b.H(v.a,v.d,p)
m=a.db.gN()
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.cT
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbn(j)
s=i.b
h=t.gc7(t)
g=t.gc8(t)
t=t.gc9(t)
C.b.u(s.a,s.d,h,g,t)
t=j.gcP(j).kW()
g=i.c
h=t.gaK(t)
s=t.gaL(t)
t=t.gb3()
C.b.u(g.a,g.d,h,s,t)
t=m.bt(j.gbn(j))
s=i.d
C.b.u(s.a,s.d,t.a,t.b,t.c)
t=j.gt(j)
s=i.e
h=t.gb5()
g=t.gaO()
t=t.gb0()
C.b.u(s.a,s.d,h,g,t)
t=j.gkV()
g=i.f
C.b.G(g.a,g.d,t)
t=j.gkU()
g=i.r
C.b.G(g.a,g.d,t)
t=j.gcG()
g=i.x
C.b.G(g.a,g.d,t)
t=j.gcH()
g=i.y
C.b.G(g.a,g.d,t)
t=j.gcI()
g=i.z
C.b.G(g.a,g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.eu
C.b.H(v.a,v.d,p)
m=a.db.gN()
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
s=this.a.cU
if(l>=s.length)return H.f(s,l)
i=s[l]
s=j.gbq()
H.d(q,"$isb",t,"$asb")
if(!C.a.b2(q,s)){s.sbj(0,q.length)
C.a.h(q,s)}s=j.gcP(j)
h=i.d
g=s.gaK(s)
f=s.gaL(s)
s=s.gb3()
C.b.u(h.a,h.d,g,f,s)
s=j.gkd()
f=i.b
g=s.gaK(s)
h=s.gaL(s)
s=s.gb3()
C.b.u(f.a,f.d,g,h,s)
s=j.gbo(j)
h=i.c
g=s.gaK(s)
f=s.gaL(s)
s=s.gb3()
C.b.u(h.a,h.d,g,f,s)
s=m.d6(j.gcP(j))
f=s.a
if(typeof f!=="number")return f.k()
g=s.b
if(typeof g!=="number")return g.k()
h=s.c
if(typeof h!=="number")return h.k()
h=s.w(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
f=h.a
s=h.b
h=h.c
C.b.u(g.a,g.d,f,s,h)
h=j.gt(j)
s=i.f
f=h.gb5()
g=h.gaO()
h=h.gb0()
C.b.u(s.a,s.d,f,g,h)
h=j.gbq()
s=h.geA(h)
if(!s){s=i.x
C.b.H(s.a,s.d,1)}else{s=i.r
g=h.gdE()
f=s.a
s=s.d
if(!g)C.b.H(f,s,0)
else C.b.H(f,s,h.gdD())
s=i.x
C.b.H(s.a,s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.ev
C.b.H(v.a,v.d,p)
m=a.db.gN()
for(v=this.dx.y,u=v.length,t=[P.x],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
h=this.a.cV
if(l>=h.length)return H.f(h,l)
i=h[l]
h=j.gbq()
H.d(q,"$isb",s,"$asb")
if(!C.a.b2(q,h)){h.sbj(0,q.length)
C.a.h(q,h)}e=m.k(0,j.gN())
h=j.gN()
g=$.bE
if(g==null){g=new V.a5(0,0,0)
$.bE=g}g=h.bt(g)
h=i.b
f=g.gc7(g)
d=g.gc8(g)
g=g.gc9(g)
C.b.u(h.a,h.d,f,d,g)
h=$.bE
if(h==null){h=new V.a5(0,0,0)
$.bE=h}h=e.bt(h)
g=i.c
C.b.u(g.a,g.d,h.a,h.b,h.c)
h=e.cZ()
g=i.d
n=new Float32Array(H.bM(H.d(new V.eM(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ab(0,!0),"$isb",t,"$asb")))
C.b.eN(g.a,g.d,!1,n)
g=j.gt(j)
h=i.e
f=g.gb5()
d=g.gaO()
g=g.gb0()
C.b.u(h.a,h.d,f,d,g)
g=j.gbq()
h=g.geA(g)
if(!h){h=i.r
C.b.H(h.a,h.d,1)}else{h=i.f
f=g.gdE()
d=h.a
h=h.d
if(!(f>=6))C.b.H(d,h,0)
else C.b.H(d,h,g.gdD())
h=i.r
C.b.H(h.a,h.d,0)}h=j.gcG()
g=i.x
C.b.G(g.a,g.d,h)
h=j.gcH()
g=i.y
C.b.G(g.a,g.d,h)
h=j.gcI()
g=i.z
C.b.G(g.a,g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.ew
C.b.H(v.a,v.d,p)
m=a.db.gN()
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.cW
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbq()
H.d(q,"$isb",z,"$asb")
if(!C.a.b2(q,t)){t.sbj(0,q.length)
C.a.h(q,t)}t=j.gbn(j)
s=i.b
h=t.gc7(t)
g=t.gc8(t)
t=t.gc9(t)
C.b.u(s.a,s.d,h,g,t)
t=j.gcP(j)
g=i.c
h=t.gaK(t)
s=t.gaL(t)
t=t.gb3()
C.b.u(g.a,g.d,h,s,t)
t=j.gkd()
s=i.d
h=t.gaK(t)
g=t.gaL(t)
t=t.gb3()
C.b.u(s.a,s.d,h,g,t)
t=j.gbo(j)
g=i.e
h=t.gaK(t)
s=t.gaL(t)
t=t.gb3()
C.b.u(g.a,g.d,h,s,t)
t=m.bt(j.gbn(j))
s=i.f
C.b.u(s.a,s.d,t.a,t.b,t.c)
t=j.gbq()
s=t.geA(t)
if(!s){t=i.x
C.b.H(t.a,t.d,1)}else{s=i.r
h=t.gdE()
g=s.a
s=s.d
if(!h)C.b.H(g,s,0)
else C.b.H(g,s,t.gdD())
t=i.x
C.b.H(t.a,t.d,0)}t=j.gt(j)
s=i.y
h=t.gb5()
g=t.gaO()
t=t.gb0()
C.b.u(s.a,s.d,h,g,t)
t=j.gl3()
g=i.z
C.b.G(g.a,g.d,t)
t=j.gl4()
g=i.Q
C.b.G(g.a,g.d,t)
t=j.gcG()
g=i.ch
C.b.G(g.a,g.d,t)
t=j.gcH()
g=i.cx
C.b.G(g.a,g.d,t)
t=j.gcI()
g=i.cy
C.b.G(g.a,g.d,t);++l}}}switch(x.f){case C.c:break
case C.h:break
case C.d:this.R(q,this.Q.d)
z=this.a
v=this.Q.d
z.an(z.eg,z.bV,v)
break
case C.e:this.R(q,this.Q.e)
z=this.a
v=this.Q.e
z.af(z.eh,z.bV,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db.gN().cZ()
a.Q=v}z=z.id
z.toString
z.al(v.ab(0,!0))}if(x.dy){this.R(q,this.ch)
z=this.a
v=this.ch
z.af(z.ei,z.ej,v)
switch(x.r){case C.c:break
case C.h:z=this.a
v=this.cx.f
z=z.bW
z.toString
u=v.a
t=v.b
v=v.c
C.b.u(z.a,z.d,u,t,v)
break
case C.d:this.R(q,this.cx.d)
z=this.a
v=this.cx.d
z.an(z.ek,z.bX,v)
v=this.a
z=this.cx.f
v=v.bW
v.toString
u=z.a
t=z.b
z=z.c
C.b.u(v.a,v.d,u,t,z)
break
case C.e:this.R(q,this.cx.e)
z=this.a
v=this.cx.e
z.af(z.el,z.bX,v)
v=this.a
z=this.cx.f
v=v.bW
v.toString
u=z.a
t=z.b
z=z.c
C.b.u(v.a,v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.h:z=this.a
v=this.cy.f
z=z.bZ
z.toString
u=v.a
t=v.b
v=v.c
C.b.u(z.a,z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bY
C.b.G(v.a,v.d,t)
break
case C.d:this.R(q,this.cy.d)
z=this.a
v=this.cy.d
z.an(z.em,z.c_,v)
v=this.a
z=this.cy.f
v=v.bZ
v.toString
u=z.a
t=z.b
z=z.c
C.b.u(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bY
C.b.G(z.a,z.d,t)
break
case C.e:this.R(q,this.cy.e)
z=this.a
v=this.cy.e
z.af(z.en,z.c_,v)
v=this.a
z=this.cy.f
v=v.bZ
v.toString
u=z.a
t=z.b
z=z.c
C.b.u(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bY
C.b.G(z.a,z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.h:z=this.a
u=this.db.f
z=z.c0
C.b.G(z.a,z.d,u)
break
case C.d:this.R(q,this.db.d)
z=this.a
u=this.db.d
z.an(z.eo,z.c1,u)
u=this.a
z=this.db.f
u=u.c0
C.b.G(u.a,u.d,z)
break
case C.e:this.R(q,this.db.e)
z=this.a
u=this.db.e
z.af(z.ep,z.c1,u)
u=this.a
z=this.db.f
u=u.c0
C.b.G(u.a,u.d,z)
break}z=a.a
C.b.cQ(z,3042)
C.b.j_(z,770,771)}for(o=0;o<q.length;++o)q[o].S(a)
z=b.e
z.S(a)
z.aa(a)
z.au(a)
if(v)C.b.ji(a.a,3042)
for(o=0;o<q.length;++o)q[o].au(a)
z=this.a
z.toString
C.b.d7(a.a,null)
z.x.e7()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dv().ao},
l:{
as:function(){var z,y,x
z=new O.aM()
z.sfM(O.cY(V.ai))
z.e.b8(z.ghr(),z.ghs())
y=new O.bc(z,"emission")
y.c=C.c
y.f=new V.t(0,0,0)
z.f=y
y=new O.bc(z,"ambient")
y.c=C.c
y.f=new V.t(0,0,0)
z.r=y
y=new O.bc(z,"diffuse")
y.c=C.c
y.f=new V.t(0,0,0)
z.x=y
y=new O.bc(z,"invDiffuse")
y.c=C.c
y.f=new V.t(0,0,0)
z.y=y
y=new O.iI(z,"specular")
y.c=C.c
y.f=new V.t(0,0,0)
y.ch=100
z.z=y
y=new O.iF(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.bc(z,"reflect")
y.c=C.c
y.f=new V.t(0,0,0)
z.cx=y
y=new O.iH(z,"refract")
y.c=C.c
y.f=new V.t(0,0,0)
y.ch=1
z.cy=y
y=new O.iE(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.io()
y.bx(D.a_)
y.sfv(H.c([],[D.cf]))
y.sfw(H.c([],[D.eU]))
y.sfz(H.c([],[D.f4]))
y.sfA(H.c([],[D.f9]))
y.sfB(H.c([],[D.fa]))
y.sfC(H.c([],[D.fb]))
y.Q=null
y.ch=null
y.da(y.ghq(),y.ghJ(),y.ghL())
z.dx=y
x=y.Q
if(x==null){x=D.F()
y.Q=x
y=x}else y=x
y.h(0,z.gi1())
y=z.dx
x=y.ch
if(x==null){x=D.F()
y.ch=x
y=x}else y=x
y.h(0,z.gav())
z.dy=null
return z}}},iE:{"^":"d8;0f,a,b,0c,0d,0e",
bG:function(a){var z,y
z=this.f
if(!$.p.$2(z,a)){y=this.f
this.f=a
z=new D.B(this.b,y,a,this,[P.x])
z.b=!0
this.a.M(z)}},
bc:function(){this.df()
this.bG(1)},
aX:function(){this.cd()
this.bG(1)},
seP:function(a,b){var z
if(b==null)b=1
if(b<=0)this.e1(0)
else if(this.c===C.c){this.c=C.h
this.cd()
this.bG(1)
z=this.a
z.a=null
z.M(null)}this.bG(b)}},d8:{"^":"a;",
M:[function(a){this.a.M(H.j(a,"$isv"))},function(){return this.M(null)},"dl","$1","$0","gav",0,2,0],
bc:["df",function(){}],
aX:["cd",function(){}],
dO:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gq().O(0,this.gav())
y=this.d
this.d=a
if(a!=null)a.gq().h(0,this.gav())
z=new D.B(this.b+".texture2D",y,this.d,this,[T.f8])
z.b=!0
this.a.M(z)}},
dP:function(a){},
e1:function(a){var z
if(this.c!==C.c){this.c=C.c
z=this.a
z.a=null
z.M(null)}this.bc()
this.dO(null)
this.dP(null)
this.a.M(null)},
sa6:function(a){var z=this.c
if(z!==C.d){if(z===C.c)this.aX()
this.c=C.d
this.dP(null)
z=this.a
z.a=null
z.M(null)}this.dO(a)}},iF:{"^":"d8;a,b,0c,0d,0e"},bc:{"^":"d8;0f,a,b,0c,0d,0e",
cB:function(a){var z,y
if(!J.R(this.f,a)){z=this.f
this.f=a
y=new D.B(this.b+".color",z,a,this,[V.t])
y.b=!0
this.a.M(y)}},
bc:["dg",function(){this.df()
this.cB(new V.t(0,0,0))}],
aX:["ce",function(){this.cd()
this.cB(new V.t(1,1,1))}],
st:function(a,b){var z
if(this.c===C.c){this.c=C.h
this.aX()
z=this.a
z.a=null
z.M(null)}this.cB(b)}},iH:{"^":"bc;0ch,0f,a,b,0c,0d,0e",
dN:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".refraction",y,a,this,[P.x])
z.b=!0
this.a.M(z)}},
bc:function(){this.dg()
this.dN(1)},
aX:function(){this.ce()
this.dN(1)}},iI:{"^":"bc;0ch,0f,a,b,0c,0d,0e",
bH:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".shininess",y,a,this,[P.x])
z.b=!0
this.a.M(z)}},
bc:function(){this.dg()
this.bH(100)},
aX:function(){this.ce()
this.bH(100)},
sa7:function(a){var z
if(a==null)a=100
if(a<=0)this.e1(0)
else if(this.c===C.c){this.c=C.h
this.ce()
this.bH(100)
z=this.a
z.a=null
z.M(null)}this.bH(a)}},jz:{"^":"bG;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
M:[function(a){var z
H.j(a,"$isv")
z=this.e
if(!(z==null))z.F(a)},function(){return this.M(null)},"dl","$1","$0","gav",0,2,0],
eI:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.j(a.fr.j(0,"Skybox"),"$isf3")
if(z==null){y=a.a
z=new A.f3(y,"Skybox")
z.dh(y,"Skybox")
z.ey($.jB,$.jA)
z.z=z.x.j(0,"posAttr")
z.Q=H.e(z.y.j(0,"fov"),"$isP")
z.ch=H.e(z.y.j(0,"ratio"),"$isP")
z.cx=H.e(z.y.j(0,"boxClr"),"$isC")
z.cy=H.e(z.y.j(0,"boxTxt"),"$isak")
z.db=H.e(z.y.j(0,"viewMat"),"$isaA")
a.dW(z)}this.a=z}if(b.e==null){y=b.d.e_(new Z.fB(a.a),$.$get$aB())
y.aM($.$get$aB()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.S(a)}y=a.d
x=a.c
w=this.a
w.S(a)
v=this.b
u=w.Q
C.b.G(u.a,u.d,v)
v=w.ch
C.b.G(v.a,v.d,y/x)
x=this.c
w.cy.dc(x)
x=this.d
y=w.cx
C.b.u(y.a,y.d,x.a,x.b,x.c)
x=a.db.gN().cZ()
w=w.db
w.toString
w.al(x.ab(0,!0))
y=b.e
if(y instanceof Z.cT){y.S(a)
y.aa(a)
y.au(a)}else b.e=null
y=this.a
y.toString
C.b.d7(a.a,null)
y.x.e7()
y=this.c
if(y!=null)y.au(a)}},bG:{"^":"a;"}}],["","",,T,{"^":"",cx:{"^":"cQ;"},f8:{"^":"cx;"},jI:{"^":"f8;0a,0b,0c,0d,0e,0f,0r,0x,0y",
sbj:function(a,b){this.a=b
return b},
gq:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
S:function(a){var z
if(!this.c&&this.d){this.c=!0
z=a.a
C.b.bL(z,33984+this.a)
C.b.a4(z,3553,this.b)}},
au:function(a){var z
if(this.c){this.c=!1
z=a.a
C.b.bL(z,33984+this.a)
C.b.a4(z,3553,null)}}},dt:{"^":"cx;0a,0b,0c,0d,0e",
sbj:function(a,b){this.a=b
return b},
gq:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
S:function(a){var z
if(!this.c&&this.d>=6){this.c=!0
z=a.a
C.b.bL(z,33984+this.a)
C.b.a4(z,34067,this.b)}},
au:function(a){var z
if(this.c){this.c=!1
z=a.a
C.b.bL(z,33984+this.a)
C.b.a4(z,34067,null)}}},jJ:{"^":"a;a,0b,0c,0d,0e",
jC:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
C.b.a4(z,3553,y)
C.b.aA(z,3553,10242,33071)
C.b.aA(z,3553,10243,33071)
C.b.aA(z,3553,10241,9729)
C.b.aA(z,3553,10240,9729)
C.b.a4(z,3553,null);++this.d
x=W.ew(null,a,null)
w=new T.jI()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.Z
W.Q(x,"load",H.l(new T.jL(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
ap:function(a){return this.jC(a,!1,!1,!1,!1)},
aU:function(a,b,c,d,e,f){var z,y
z=W.ew(null,c,null);++this.d
y=W.Z
W.Q(z,"load",H.l(new T.jK(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
dM:function(a,b,c){var z,y,x,w
b=V.e_(b,2)
z=V.e_(a.width,2)
y=V.e_(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cV(null,null)
x.width=z
x.height=y
w=H.j(C.m.eW(x,"2d"),"$iscW")
w.imageSmoothingEnabled=!1;(w&&C.t).jk(w,a,0,0,x.width,x.height)
return P.lx(C.t.hb(w,0,0,x.width,x.height))}}},jL:{"^":"q:12;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.dM(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
C.b.a4(y,3553,this.e)
C.b.eG(y,37440,this.f?1:0)
C.b.eK(y,3553,0,6408,6408,5121,w)
if(this.r)C.b.eS(y,3553)
C.b.a4(y,3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.e9()}++x.e}},jK:{"^":"q:12;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.dM(this.b,z.c,this.c)
x=z.a
C.b.a4(x,34067,this.d)
C.b.eG(x,37440,this.e?1:0)
C.b.eK(x,this.f,0,6408,6408,5121,y)
C.b.a4(x,34067,null)
x=this.r
if(++x.d>=6){x=x.e
if(!(x==null))x.e9()}++z.e}}}],["","",,V,{"^":"",hj:{"^":"a;",
bk:function(a){return!0},
i:function(a){return"all"},
$isbA:1},bA:{"^":"a;"},eK:{"^":"a;0a",
saF:function(a){this.a=H.d(a,"$isb",[V.bA],"$asb")},
bk:["fa",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)if(z[x].bk(a))return!0
return!1}],
i:["de",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbA:1},bC:{"^":"eK;0a",
bk:function(a){return!this.fa(a)},
i:function(a){return"!["+this.de(0)+"]"}},jp:{"^":"a;0a",
si4:function(a){this.a=H.d(a,"$isV",[P.y,P.X],"$asV")},
fn:function(a){var z,y
if(a.a.length<=0)throw H.h(P.m("May not create a SetMatcher with zero characters."))
z=new H.b0(0,0,[P.y,P.X])
for(y=new H.eG(a,a.gp(a),0,[H.ag(a,"S",0)]);y.B();)z.a_(0,y.d,!0)
this.si4(z)},
bk:function(a){return this.a.e4(a)},
i:function(a){var z=this.a
return P.dr(new H.ir(z,[H.r(z,0)]),0,null)},
$isbA:1,
l:{
a2:function(a){var z=new V.jp()
z.fn(a)
return z}}},dl:{"^":"a;a,b,0c,0d",
sip:function(a){this.c=H.d(a,"$isb",[V.dy],"$asb")},
C:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dy(this.a.L(0,b))
w.saF(H.c([],[V.bA]))
w.c=!1
C.a.h(this.c,w)
return w},
jn:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.bk(a))return w}return},
i:function(a){return this.b}},fe:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.hg(this.b,"\n","\\n")
y=H.hg(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},dx:{"^":"a;a,b,0c",
si_:function(a){var z=P.u
this.c=H.d(a,"$isV",[z,z],"$asV")},
i:function(a){return this.b}},jS:{"^":"a;0a,0b,0c",
sib:function(a){this.a=H.d(a,"$isV",[P.u,V.dl],"$asV")},
sik:function(a){this.b=H.d(a,"$isV",[P.u,V.dx],"$asV")},
L:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.dl(this,b)
z.sip(H.c([],[V.dy]))
z.d=null
this.a.a_(0,b,z)}return z},
br:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.dx(this,a)
y=P.u
z.si_(new H.b0(0,0,[y,y]))
this.b.a_(0,a,z)}return z},
kc:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fe])
y=this.c
x=[P.y]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.aR(a,t)
r=y.jn(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.dr(w,0,null)
throw H.h(P.m("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.dr(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.fe(o==null?p.b:o,q,t)}++t}}}},dy:{"^":"eK;b,0c,0a",
i:function(a){return this.b.b+": "+this.de(0)}}}],["","",,X,{"^":"",cd:{"^":"a;",$isaE:1},hZ:{"^":"ds;0a,0b,0c,0d,0e,0f,0r,0x",
gq:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
S:function(a){var z,y,x,w,v,u,t,s
z=a.a
C.b.iZ(z,36160,null)
C.b.cQ(z,2884)
C.b.cQ(z,2929)
C.b.jh(z,513)
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
v=w.a
if(typeof y!=="number")return H.n(y)
u=C.j.at(v*y)
v=w.b
if(typeof x!=="number")return H.n(x)
t=C.j.at(v*x)
v=C.j.at(w.c*y)
a.c=v
w=C.j.at(w.d*x)
a.d=w
C.b.kg(z,u,t,v,w)
C.b.j4(z,this.c)
if(this.b){w=this.a
C.b.j3(z,w.a,w.b,w.c,w.d)
s=16640}else s=256
C.b.j2(z,s)},
l:{
d2:function(a,b,c,d,e,f,g){var z,y
z=new X.hZ()
y=new V.aI(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=$.f0
if(y==null){y=V.f_(0,0,1,1)
$.f0=y}z.r=y
return z}}},i5:{"^":"a;0a,0b",
gq:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
S:function(a){var z
a.cy.c4(V.b1())
z=V.b1()
a.db.c4(z)},
au:function(a){a.cy.aN()
a.db.aN()},
$isaE:1,
$iscd:1},iX:{"^":"a;0a,0b,0c,0d,0e,0f",
gq:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
b9:[function(a){var z
H.j(a,"$isv")
z=this.f
if(!(z==null))z.F(a)},function(){return this.b9(null)},"kh","$1","$0","gfF",0,2,0],
S:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aN(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.c4(s)
z=$.eT
if(z==null){z=V.df()
y=V.dI()
x=$.fu
if(x==null){x=new V.G(0,0,-1)
$.fu=x}x=V.da(z,y,x)
$.eT=x
r=x}else r=z
z=this.b
if(z!=null){q=z.c6(a,this)
if(q!=null)r=q.k(0,r)}a.db.c4(r)},
au:function(a){a.cy.aN()
a.db.aN()},
$isaE:1,
$iscd:1,
l:{
eS:function(a,b,c,d,e){var z,y,x
z=new X.iX()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gq().h(0,z.gfF())
x=new D.B("mover",y,z.b,z,[U.at])
x.b=!0
z.b9(x)}x=z.c
if(!$.p.$2(x,b)){y=z.c
z.c=b
x=new D.B("fov",y,b,z,[P.x])
x.b=!0
z.b9(x)}x=z.d
if(!$.p.$2(x,d)){y=z.d
z.d=d
x=new D.B("near",y,d,z,[P.x])
x.b=!0
z.b9(x)}x=z.e
if(!$.p.$2(x,a)){y=z.e
z.e=a
x=new D.B("far",y,a,z,[P.x])
x.b=!0
z.b9(x)}return z}}},ds:{"^":"a;"}}],["","",,V,{"^":"",
lW:function(a){P.jR(C.C,new V.lX(a))},
lX:{"^":"q:41;a",
$1:function(a){H.j(a,"$isbf")
P.c7(C.j.eL(this.a.gjq(),2)+" fps")}},
jv:{"^":"a;0a,0b",
fo:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.r).X(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.r.X(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.l.X(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.l.X(v,u)}t=z.createElement("div")
this.a=t
C.l.X(v,t)
this.b=null
t=W.Z
W.Q(z,"scroll",H.l(new V.jy(x),{func:1,ret:-1,args:[t]}),!1,t)},
iS:function(a,b,c){var z,y,x,w
a=H.U(C.f.j1(a,0,4))
if(c.length===0)c=P.fT(C.w,b,C.q,!1)
z=document.createElement("div")
z.className="textHeader"
z.id=c
y=z.style
x=""+(28-a*3)+"px"
y.fontSize=x
w=W.hk(null)
w.href="#"+c
w.textContent=b
C.l.X(z,w)
C.l.X(this.a,z)},
dU:function(a,b){return this.iS(a,b,"")},
b_:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.d(a,"$isb",[P.u],"$asb")
this.i6()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.kc(C.a.jw(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.l.X(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.l.X(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.l.X(y,t)
break
case"Link":s=u.b
if(H.hf(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=H.H(r[1])
q.textContent=H.H(r[0])
C.l.X(y,q)}else{p=P.fT(C.w,s,C.q,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
C.l.X(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.l.X(y,t)
break}}C.l.X(this.a,y)},
i6:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jS()
y=P.u
z.sib(new H.b0(0,0,[y,V.dl]))
z.sik(new H.b0(0,0,[y,V.dx]))
z.c=null
z.c=z.L(0,"Start")
y=z.L(0,"Start").C(0,"Bold")
x=V.a2(new H.a0("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Bold").C(0,"Bold")
x=new V.bC()
w=[V.bA]
x.saF(H.c([],w))
C.a.h(y.a,x)
y=V.a2(new H.a0("*"))
C.a.h(x.a,y)
y=z.L(0,"Bold").C(0,"BoldEnd")
x=V.a2(new H.a0("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").C(0,"Italic")
x=V.a2(new H.a0("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Italic").C(0,"Italic")
x=new V.bC()
x.saF(H.c([],w))
C.a.h(y.a,x)
y=V.a2(new H.a0("_"))
C.a.h(x.a,y)
y=z.L(0,"Italic").C(0,"ItalicEnd")
x=V.a2(new H.a0("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").C(0,"Code")
x=V.a2(new H.a0("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Code").C(0,"Code")
x=new V.bC()
x.saF(H.c([],w))
C.a.h(y.a,x)
y=V.a2(new H.a0("`"))
C.a.h(x.a,y)
y=z.L(0,"Code").C(0,"CodeEnd")
x=V.a2(new H.a0("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").C(0,"LinkHead")
x=V.a2(new H.a0("["))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"LinkHead").C(0,"LinkTail")
x=V.a2(new H.a0("|"))
C.a.h(y.a,x)
x=z.L(0,"LinkHead").C(0,"LinkEnd")
y=V.a2(new H.a0("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkHead").C(0,"LinkHead")
y=new V.bC()
y.saF(H.c([],w))
C.a.h(x.a,y)
x=V.a2(new H.a0("|]"))
C.a.h(y.a,x)
x=z.L(0,"LinkTail").C(0,"LinkEnd")
y=V.a2(new H.a0("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkTail").C(0,"LinkTail")
y=new V.bC()
y.saF(H.c([],w))
C.a.h(x.a,y)
x=V.a2(new H.a0("|]"))
C.a.h(y.a,x)
C.a.h(z.L(0,"Start").C(0,"Other").a,new V.hj())
x=z.L(0,"Other").C(0,"Other")
y=new V.bC()
y.saF(H.c([],w))
C.a.h(x.a,y)
x=V.a2(new H.a0("*_`["))
C.a.h(y.a,x)
x=z.L(0,"BoldEnd")
x.d=x.a.br("Bold")
x=z.L(0,"ItalicEnd")
x.d=x.a.br("Italic")
x=z.L(0,"CodeEnd")
x.d=x.a.br("Code")
x=z.L(0,"LinkEnd")
x.d=x.a.br("Link")
x=z.L(0,"Other")
x.d=x.a.br("Other")
this.b=z},
l:{
jw:function(a,b){var z=new V.jv()
z.fo(a,!0)
return z}}},
jy:{"^":"q:12;a",
$1:function(a){P.dv(C.n,new V.jx(this.a))}},
jx:{"^":"q:1;a",
$0:function(){var z,y,x
z=C.j.at(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}}}],["","",,L,{"^":"",
hc:function(){var z,y,x
z=V.jw("3Dart Chess",!0)
y=[P.u]
z.b_(H.c(["This example is in development and may still have a few issues and glitches."],y))
x=W.cV(null,null)
x.className="pageLargeCanvas"
x.id="targetCanvas"
C.l.X(z.a,x)
z.dU(1,"About")
z.b_(H.c(["Just started (WIP). Currently you can rotate the camera but game piece selection ","and movement have not been implemented yet. Click and drag with mouse to see the board from ","different angles."],y))
z.b_(H.c(["3Dart Chess is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create simple browser driven video games. ","This example has no server backing it so currently there is no networked two player mode. ","It would take very little to turn this into a simple online game."],y))
z.b_(H.c(["\xab[Back to Examples List|../../]"],y))
z.dU(1,"Help wanted")
z.b_(H.c(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want ","to learn more about it, check out the ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/chess]."],y))
z.b_(H.c(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],y))
P.dv(C.n,L.lQ())},
mA:[function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=C.D.eX(document,"targetCanvas")
if(z==null)H.o(P.m("Failed to find an element with the identifier, targetCanvas."))
y=E.jN(z,!0,!0,!0,!1)
x=y.r
w=new U.k9()
v=U.ef()
v.sd8(0,!0)
v.sd0(6.283185307179586)
v.sd1(0)
v.saq(0,0)
v.seB(100)
v.sT(0)
v.se5(0.5)
w.b=v
u=w.gbA()
v.gq().h(0,u)
v=U.ef()
v.sd8(0,!0)
v.sd0(6.283185307179586)
v.sd1(0)
v.saq(0,0)
v.seB(100)
v.sT(0)
v.se5(0.5)
w.c=v
v.gq().h(0,u)
w.d=null
w.e=!1
w.f=!1
w.r=!1
w.x=2.5
w.y=2.5
w.z=2
w.Q=4
w.cx=!1
w.ch=!1
w.cy=0
w.db=0
w.dx=null
w.dy=0
w.fr=null
w.fx=null
t=new X.b2(!1,!1,!1)
s=w.d
w.d=t
v=new D.B("modifiers",s,t,w,[X.b2])
v.b=!0
w.W(v)
v=w.f
if(v!==!1){w.f=!1
v=new D.B("invertX",v,!1,w,[P.X])
v.b=!0
w.W(v)}v=w.r
if(v!==!1){w.r=!1
v=new D.B("invertY",v,!1,w,[P.X])
v.b=!0
w.W(v)}w.iX(x)
w.b.sd1(-1.5707963267948966)
w.b.sd0(0)
w.b.sd8(0,!1)
x=U.at
w=H.c([w,U.aY(V.dc(1.75,1.75,1.75,1)),U.aY(V.bX(0,0,15))],[x])
v=new U.et()
v.bx(x)
v.b8(v.ghp(),v.ghK())
v.aZ(0,w)
v.e=null
v.f=V.b1()
v.r=0
r=X.eS(2000,1.0471975511965976,v,0.1,null)
q=X.d2(!0,!0,!1,null,2000,null,0)
if(q.b){q.b=!1
x=new D.B("clearColor",!0,!1,q,[P.X])
x.b=!0
w=q.x
if(!(w==null))w.F(x)}p=L.hq(y)
x=p.id.a
o=new M.hC()
o.sbe(null)
o.sbp(0,null)
o.sa2(null)
w=E.ar(null,!0,null,"",null,null)
n=F.dk()
v=n.a
u=new V.G(-1,-1,1)
u=u.w(0,Math.sqrt(u.E(u)))
m=v.bM(new V.b4(1,2,4,6),new V.aI(1,0,0,1),new V.a5(-1,-1,0),new V.T(0,1),u,null)
v=n.a
u=new V.G(1,-1,1)
u=u.w(0,Math.sqrt(u.E(u)))
l=v.bM(new V.b4(0,3,4,6),new V.aI(0,0,1,1),new V.a5(1,-1,0),new V.T(1,1),u,null)
v=n.a
u=new V.G(1,1,1)
u=u.w(0,Math.sqrt(u.E(u)))
k=v.bM(new V.b4(0,2,5,6),new V.aI(0,1,0,1),new V.a5(1,1,0),new V.T(1,0),u,null)
v=n.a
u=V.aO()
j=new V.G(-1,1,1)
j=j.w(0,Math.sqrt(j.E(j)))
i=v.bM(new V.b4(0,2,4,7),new V.aI(1,1,0,1),new V.a5(-1,1,0),u,j,null)
n.d.cF(H.c([m,l,k,i],[F.al]))
n.b1()
w.sac(0,n)
o.d=w
o.e=null
w=new O.jz()
w.b=1.0471975511965976
w.d=new V.t(1,1,1)
if(null!=x){s=w.c
w.c=x
x.gq().h(0,w.gav())
x=new D.B("boxTexture",s,w.c,w,[T.dt])
x.b=!0
w.M(x)}o.sa2(w)
o.sbp(0,q)
o.sbe(r)
h=new M.hR()
h.sfR(0,O.cY(E.L))
h.d.b8(h.ghu(),h.ghv())
h.e=null
h.f=null
h.r=null
h.x=null
h.sbe(null)
h.sbp(0,null)
h.sbp(0,q)
h.sbe(r)
h.d.h(0,p)
x=M.aF
w=H.c([o,h],[x])
v=new M.hA()
v.bx(x)
v.e=!1
v.f=null
v.b8(v.ghM(),v.ghN())
v.aZ(0,w)
x=y.d
if(x!==v){if(x!=null)x.gq().O(0,y.gdj())
y.d=v
v.gq().h(0,y.gdj())
y.ft()}V.lW(y)},"$0","lQ",0,0,2],
hn:{"^":"b3;fy,go,id,k1,0k2,k3,k4,0r1,0r2,0rx,0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
fc:function(a,b,c,d,e,f,g){var z
if($.cb==null){$.cb=E.ar(null,!0,null,"bishop shape",null,null)
O.au("./resources/bishop.obj",a.f,null,null,!1).ak(new L.ho(),null)}z=this.k4?"white":"black"
this.a=z+(" bishop "+this.go)
this.y.h(0,$.cb)},
l:{
ca:function(a,b,c,d,e,f,g){var z=new L.hn(d,e,f,g,b,c)
z.ad(null,!0,null,"",null,null)
z.aP(b,c,d,e,f,g)
z.fc(a,b,c,d,e,f,g)
return z}}},
ho:{"^":"q:4;",
$1:function(a){H.j(a,"$isL")
$.cb.sac(0,a.c)}},
hp:{"^":"L;0fy,0go,0id,0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
shR:function(a){this.fy=H.d(a,"$isb",[L.b3],"$asb")},
sij:function(a){this.go=H.d(a,"$isb",[L.du],"$asb")},
fd:function(a){var z,y,x,w,v,u,t,s,r
this.shR(H.c([],[L.b3]))
this.sij(H.c([],[L.du]))
this.id=L.iK(a)
this.a="board"
for(z=1;z<=8;++z)for(y=1;y<=8;++y){x=L.jP(a,this,(z+y)%2===0,z,y)
w=this.go;(w&&C.a).h(w,x)
w=this.y
v=H.r(w,0)
H.w(x,v)
u=[v]
if(w.aG(H.c([x],u))){t=w.a
s=t.length
C.a.h(t,x)
v=H.d(H.c([x],u),"$isk",[v],"$ask")
w=w.c
if(w!=null)w.$2(s,v)}}for(z=1;z<=8;++z){w=L.eR(a,this,!0,2,z,0,0.7)
v=this.fy;(v&&C.a).h(v,w)
v=this.y
u=H.r(v,0)
H.w(w,u)
t=[u]
if(v.aG(H.c([w],t))){r=v.a
s=r.length
C.a.h(r,w)
u=H.d(H.c([w],t),"$isk",[u],"$ask")
w=v.c
if(w!=null)w.$2(s,u)}w=L.eR(a,this,!1,7,z,0,0.7)
v=this.fy;(v&&C.a).h(v,w)
v=this.y
u=H.r(v,0)
H.w(w,u)
t=[u]
if(v.aG(H.c([w],t))){r=v.a
s=r.length
C.a.h(r,w)
u=H.d(H.c([w],t),"$isk",[u],"$ask")
w=v.c
if(w!=null)w.$2(s,u)}}this.V(L.cu(a,this,!0,1,1,0,0.7))
this.V(L.cu(a,this,!0,1,8,0,0.7))
this.V(L.cu(a,this,!1,8,1,0,0.7))
this.V(L.cu(a,this,!1,8,8,0,0.7))
this.V(L.cn(a,this,!0,1,2,0,0.7))
this.V(L.cn(a,this,!0,1,7,3.141592653589793,0.7))
this.V(L.cn(a,this,!1,8,2,0,0.7))
this.V(L.cn(a,this,!1,8,7,3.141592653589793,0.7))
this.V(L.ca(a,this,!0,1,3,-1.5707963267948966,0.8))
this.V(L.ca(a,this,!0,1,6,1.5707963267948966,0.8))
this.V(L.ca(a,this,!1,8,3,-1.5707963267948966,0.8))
this.V(L.ca(a,this,!1,8,6,1.5707963267948966,0.8))
this.V(L.eY(a,this,!0,1,4,0,1))
this.V(L.eE(a,this,!0,1,5,1.5707963267948966,0.9))
this.V(L.eY(a,this,!1,8,4,0,1))
this.V(L.eE(a,this,!1,8,5,1.5707963267948966,0.9))
this.y.h(0,L.cg(a,this,0,0,0,0))
this.y.h(0,L.cg(a,this,8,0,1.5707963267948966,1))
this.y.h(0,L.cg(a,this,8,8,3.141592653589793,2))
this.y.h(0,L.cg(a,this,0,8,4.71238898038469,3))
w=this.y
v=F.lz(-1,!1,!1,0,null,30)
u=this.id.Q
w.h(0,E.ar(null,!0,U.aY(V.bX(0,-0.5,0).k(0,V.eN(-1.5707963267948966)).k(0,V.dc(12,12,12,1))),"",v,u))},
V:function(a){var z=this.fy;(z&&C.a).h(z,a)
this.y.h(0,a)},
l:{
hq:function(a){var z=new L.hp()
z.ad(null,!0,null,"",null,null)
z.fd(a)
return z}}},
hM:{"^":"L;fy,0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
fe:function(a,b,c,d,e,f){var z
if($.ch==null){$.ch=E.ar(null,!0,null,"edge shape",null,null)
O.au("./resources/edge.obj",a.f,null,null,!1).ak(new L.hN(),null)}this.sc3(U.aY(V.bX(c-4,0,d-4).k(0,V.db(e))))
this.a="edge"
this.y.h(0,$.ch)
z=this.fy.id.z
if(f>=z.length)return H.f(z,f)
this.sa2(z[f])},
l:{
cg:function(a,b,c,d,e,f){var z=new L.hM(b)
z.ad(null,!0,null,"",null,null)
z.fe(a,b,c,d,e,f)
return z}}},
hN:{"^":"q:4;",
$1:function(a){H.j(a,"$isL")
$.ch.sac(0,a.c)}},
ij:{"^":"b3;fy,go,id,k1,0k2,k3,k4,0r1,0r2,0rx,0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
ff:function(a,b,c,d,e,f,g){var z
if($.cm==null){$.cm=E.ar(null,!0,null,"king shape",null,null)
O.au("./resources/king.obj",a.f,null,null,!1).ak(new L.ik(),null)}z=this.k4?"white":"black"
this.a=z+(" king "+this.go)
this.y.h(0,$.cm)},
l:{
eE:function(a,b,c,d,e,f,g){var z=new L.ij(d,e,f,g,b,c)
z.ad(null,!0,null,"",null,null)
z.aP(b,c,d,e,f,g)
z.ff(a,b,c,d,e,f,g)
return z}}},
ik:{"^":"q:4;",
$1:function(a){H.j(a,"$isL")
$.cm.sac(0,a.c)}},
il:{"^":"b3;fy,go,id,k1,0k2,k3,k4,0r1,0r2,0rx,0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
fg:function(a,b,c,d,e,f,g){var z
if($.co==null){$.co=E.ar(null,!0,null,"knight shape",null,null)
O.au("./resources/knight.obj",a.f,null,null,!1).ak(new L.im(),null)}z=this.k4?"white":"black"
this.a=z+(" knight "+this.go)
this.y.h(0,$.co)},
l:{
cn:function(a,b,c,d,e,f,g){var z=new L.il(d,e,f,g,b,c)
z.ad(null,!0,null,"",null,null)
z.aP(b,c,d,e,f,g)
z.fg(a,b,c,d,e,f,g)
return z}}},
im:{"^":"q:4;",
$1:function(a){H.j(a,"$isL")
$.co.sac(0,a.c)}},
iJ:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q",
sh_:function(a){this.z=H.d(a,"$isb",[O.aM],"$asb")},
fi:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=a.f
y=z.a
x=y.createTexture()
C.b.a4(y,34067,x)
C.b.aA(y,34067,10242,10497)
C.b.aA(y,34067,10243,10497)
C.b.aA(y,34067,10241,9729)
C.b.aA(y,34067,10240,9729)
C.b.a4(y,34067,null)
w=new T.dt()
w.a=0
w.b=x
w.c=!1
w.d=0
z.aU(w,x,"resources/posx.png",34069,!1,!1)
z.aU(w,x,"resources/negx.png",34070,!1,!1)
z.aU(w,x,"resources/posy.png",34071,!1,!1)
z.aU(w,x,"resources/negy.png",34072,!1,!1)
z.aU(w,x,"resources/posz.png",34073,!1,!1)
z.aU(w,x,"resources/negz.png",34074,!1,!1)
this.a=w
v=D.ep(null,null)
v.st(0,new V.t(1,0.9,0.8))
v.b=U.aY(V.da(V.df(),V.dI(),new V.G(0,-1,-0.25)))
u=D.ep(null,null)
u.st(0,new V.t(0,0.1,0.3))
u.b=U.aY(V.da(V.df(),V.dI(),new V.G(0,1,0.25)))
t=new V.t(0.15,0.15,0.15)
z=O.as()
y=z.x
y.st(0,new V.t(0.6,0.6,0.6))
y=z.r
y.st(0,new V.t(0.4,0.4,0.4))
z.z.st(0,new V.t(1,1,1))
z.z.sa7(60)
z.sah(this.a)
z.cx.st(0,t)
z.dx.h(0,v)
z.dx.h(0,u)
this.b=z
z=O.as()
y=z.x
y.st(0,new V.t(0.2,0.2,0.2))
y=z.r
y.st(0,new V.t(0.1,0.1,0.1))
z.z.st(0,new V.t(1,1,1))
z.z.sa7(60)
z.sah(this.a)
z.cx.st(0,t)
z.dx.h(0,v)
z.dx.h(0,u)
this.c=z
z=O.as()
y=z.x
y.st(0,new V.t(0.6,0,0))
y=z.r
y.st(0,new V.t(0.8,0,0))
z.z.st(0,new V.t(1,1,1))
z.z.sa7(100)
z.sah(this.a)
z.cx.st(0,t)
z.dx.h(0,v)
z.dx.h(0,u)
this.d=z
z=O.as()
y=z.x
y.st(0,new V.t(0.2,0,0))
y=z.r
y.st(0,new V.t(0.6,0,0))
z.z.st(0,new V.t(1,1,1))
z.z.sa7(100)
z.sah(this.a)
z.cx.st(0,t)
z.dx.h(0,v)
z.dx.h(0,u)
this.e=z
s=new V.t(0.075,0.075,0.075)
z=O.as()
y=z.x
y.st(0,new V.t(0.6,0.6,0.6))
y=z.r
y.st(0,new V.t(0.4,0.4,0.4))
z.z.st(0,new V.t(1,1,1))
z.z.sa7(60)
z.sah(this.a)
z.cx.st(0,s)
z.dx.h(0,v)
z.dx.h(0,u)
this.f=z
z=O.as()
y=z.x
y.st(0,new V.t(0.2,0.2,0.2))
y=z.r
y.st(0,new V.t(0.1,0.1,0.1))
z.z.st(0,new V.t(1,1,1))
z.z.sa7(60)
z.sah(this.a)
z.cx.st(0,s)
z.dx.h(0,v)
z.dx.h(0,u)
this.r=z
z=O.as()
y=z.x
y.st(0,new V.t(0.6,0,0))
y=z.r
y.st(0,new V.t(0.8,0,0))
z.z.st(0,new V.t(1,1,1))
z.z.sa7(100)
z.sah(this.a)
z.cx.st(0,s)
z.dx.h(0,v)
z.dx.h(0,u)
this.x=z
z=O.as()
y=z.x
y.st(0,new V.t(0.2,0,0))
y=z.r
y.st(0,new V.t(0.6,0,0))
z.z.st(0,new V.t(1,1,1))
z.z.sa7(100)
z.sah(this.a)
z.cx.st(0,s)
z.dx.h(0,v)
z.dx.h(0,u)
this.y=z
this.sh_(H.c([],[O.aM]))
for(r=0;r<4;++r){q=a.f.ap("resources/edge"+r+".png")
z=this.z
y=O.as()
p=y.x
p.st(0,new V.t(0.6,0.6,0.6))
y.x.sa6(q)
p=y.r
p.st(0,new V.t(0.4,0.4,0.4))
y.r.sa6(q)
y.z.st(0,new V.t(1,1,1))
y.z.sa7(80)
y.sah(this.a)
p=y.cx
p.st(0,new V.t(0.1,0.1,0.1))
p=y.dx
p.toString
o=H.ag(p,"M",0)
H.w(v,o)
n=[o]
if(p.aG(H.c([v],n))){m=p.a
l=m.length
C.a.h(m,v)
o=H.d(H.c([v],n),"$isk",[o],"$ask")
p=p.c
if(p!=null)p.$2(l,o)}p=y.dx
p.toString
o=H.ag(p,"M",0)
H.w(u,o)
n=[o]
if(p.aG(H.c([u],n))){m=p.a
l=m.length
C.a.h(m,u)
o=H.d(H.c([u],n),"$isk",[o],"$ask")
p=p.c
if(p!=null)p.$2(l,o)}(z&&C.a).h(z,y)}k=a.f.ap("resources/tableColor.png")
j=a.f.ap("resources/tableSpec.png")
z=O.as()
y=z.x
y.st(0,new V.t(0.6,0.6,0.6))
z.x.sa6(k)
y=z.r
y.st(0,new V.t(0.4,0.4,0.4))
z.r.sa6(k)
z.z.st(0,new V.t(1,1,1))
z.z.sa7(80)
z.z.sa6(j)
z.sah(this.a)
z.cx.sa6(j)
z.Q.sa6(a.f.ap("resources/tableNormal.png"))
z.dx.h(0,v)
z.dx.h(0,u)
this.Q=z},
l:{
iK:function(a){var z=new L.iJ()
z.fi(a)
return z}}},
iV:{"^":"b3;fy,go,id,k1,0k2,k3,k4,0r1,0r2,0rx,0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
fj:function(a,b,c,d,e,f,g){var z
if($.cq==null){$.cq=E.ar(null,!0,null,"pawn shape",null,null)
O.au("./resources/pawn.obj",a.f,null,null,!1).ak(new L.iW(),null)}z=this.k4?"white":"black"
this.a=z+(" pawn "+this.go)
this.y.h(0,$.cq)},
l:{
eR:function(a,b,c,d,e,f,g){var z=new L.iV(d,e,f,g,b,c)
z.ad(null,!0,null,"",null,null)
z.aP(b,c,d,e,f,g)
z.fj(a,b,c,d,e,f,g)
return z}}},
iW:{"^":"q:4;",
$1:function(a){H.j(a,"$isL")
$.cq.sac(0,a.c)}},
b3:{"^":"L;",
aP:function(a,b,c,d,e,f){var z,y
z=U.aY(null)
this.k2=z
this.sc3(z)
this.r1=!1
this.r2=!1
this.rx=!1
z=this.k1
this.k2.sN(V.bX(this.fy-4.5,0,this.go-4.5).k(0,V.db(this.id)).k(0,V.dc(z,z,z,1)))
if(this.k4){z=this.rx
y=this.k3.id
if(z)this.sa2(y.d)
else this.sa2(y.b)}else{z=this.rx
y=this.k3.id
if(z)this.sa2(y.e)
else this.sa2(y.c)}}},
jb:{"^":"b3;fy,go,id,k1,0k2,k3,k4,0r1,0r2,0rx,0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
fk:function(a,b,c,d,e,f,g){var z
if($.cr==null){$.cr=E.ar(null,!0,null,"queen shape",null,null)
O.au("./resources/queen.obj",a.f,null,null,!1).ak(new L.jc(),null)}z=this.k4?"white":"black"
this.a=z+(" queen "+this.go)
this.y.h(0,$.cr)},
l:{
eY:function(a,b,c,d,e,f,g){var z=new L.jb(d,e,f,g,b,c)
z.ad(null,!0,null,"",null,null)
z.aP(b,c,d,e,f,g)
z.fk(a,b,c,d,e,f,g)
return z}}},
jc:{"^":"q:4;",
$1:function(a){H.j(a,"$isL")
$.cr.sac(0,a.c)}},
jk:{"^":"b3;fy,go,id,k1,0k2,k3,k4,0r1,0r2,0rx,0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
fm:function(a,b,c,d,e,f,g){var z
if($.cv==null){$.cv=E.ar(null,!0,null,"rook shape",null,null)
O.au("./resources/rook.obj",a.f,null,null,!1).ak(new L.jl(),null)}z=this.k4?"white":"black"
this.a=z+(" rook "+this.go)
this.y.h(0,$.cv)},
l:{
cu:function(a,b,c,d,e,f,g){var z=new L.jk(d,e,f,g,b,c)
z.ad(null,!0,null,"",null,null)
z.aP(b,c,d,e,f,g)
z.fm(a,b,c,d,e,f,g)
return z}}},
jl:{"^":"q:4;",
$1:function(a){H.j(a,"$isL")
$.cv.sac(0,a.c)}},
du:{"^":"L;fy,go,0id,k1,k2,0k3,0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
fp:function(a,b,c,d,e){var z,y,x,w
if($.cy==null){$.cy=E.ar(null,!0,null,"tile shape",null,null)
O.au("./resources/tile.obj",a.f,null,null,!1).ak(new L.jQ(),null)}z=this.fy
y=this.go
this.sc3(U.aY(V.bX(z-4.5,0,y-4.5)))
this.k3=!1
x=this.k2
w=x?"white":"black"
this.a=w+(" tile "+z+" "+y)
this.y.h(0,$.cy)
if(x){z=this.k3
y=this.k1.id
if(z)this.sa2(y.x)
else this.sa2(y.f)}else{z=this.k3
y=this.k1.id
if(z)this.sa2(y.y)
else this.sa2(y.r)}},
l:{
jP:function(a,b,c,d,e){var z=new L.du(d,e,b,c)
z.ad(null,!0,null,"",null,null)
z.fp(a,b,c,d,e)
return z}}},
jQ:{"^":"q:4;",
$1:function(a){H.j(a,"$isL")
$.cy.sac(0,a.c)}}},1]]
setupProgram(dart,0,0)
J.N=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ez.prototype
return J.ey.prototype}if(typeof a=="string")return J.bW.prototype
if(a==null)return J.eA.prototype
if(typeof a=="boolean")return J.ib.prototype
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.a)return a
return J.c5(a)}
J.lE=function(a){if(typeof a=="number")return J.bV.prototype
if(typeof a=="string")return J.bW.prototype
if(a==null)return a
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.a)return a
return J.c5(a)}
J.c3=function(a){if(typeof a=="string")return J.bW.prototype
if(a==null)return a
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.a)return a
return J.c5(a)}
J.h6=function(a){if(a==null)return a
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.a)return a
return J.c5(a)}
J.h7=function(a){if(typeof a=="number")return J.bV.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cA.prototype
return a}
J.dV=function(a){if(typeof a=="string")return J.bW.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cA.prototype
return a}
J.c4=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.a)return a
return J.c5(a)}
J.c8=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.lE(a).n(a,b)}
J.R=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).v(a,b)}
J.e2=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.h7(a).b7(a,b)}
J.cM=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.h7(a).Z(a,b)}
J.K=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lN(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c3(a).j(a,b)}
J.hi=function(a,b,c,d){return J.c4(a).fG(a,b,c,d)}
J.e3=function(a,b){return J.c4(a).X(a,b)}
J.cN=function(a,b,c){return J.c3(a).j8(a,b,c)}
J.e4=function(a,b){return J.h6(a).ag(a,b)}
J.b9=function(a){return J.N(a).gY(a)}
J.c9=function(a){return J.h6(a).gP(a)}
J.aH=function(a){return J.c3(a).gp(a)}
J.e5=function(a,b){return J.dV(a).js(a,b)}
J.e6=function(a,b,c){return J.dV(a).bw(a,b,c)}
J.ao=function(a){return J.N(a).i(a)}
J.cO=function(a){return J.dV(a).eM(a)}
I.dY=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.hr.prototype
C.m=W.cU.prototype
C.t=W.cW.prototype
C.l=W.eq.prototype
C.D=W.i0.prototype
C.E=W.bw.prototype
C.F=J.I.prototype
C.a=J.b_.prototype
C.G=J.ey.prototype
C.f=J.ez.prototype
C.o=J.eA.prototype
C.j=J.bV.prototype
C.i=J.bW.prototype
C.N=J.by.prototype
C.O=W.iR.prototype
C.x=J.iY.prototype
C.b=P.dj.prototype
C.p=J.cA.prototype
C.y=W.bK.prototype
C.z=W.kn.prototype
C.A=new P.iU()
C.B=new P.kb()
C.k=new P.kZ()
C.c=new A.ce(0,"ColorSourceType.None")
C.h=new A.ce(1,"ColorSourceType.Solid")
C.d=new A.ce(2,"ColorSourceType.Texture2D")
C.e=new A.ce(3,"ColorSourceType.TextureCube")
C.n=new P.ba(0)
C.C=new P.ba(5e6)
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.I=function(hooks) {
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

C.J=function(getTagFallback) {
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
C.K=function() {
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
C.L=function(hooks) {
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
C.M=function(hooks) {
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
C.w=H.c(I.dY([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.q=new P.ka(!1)
$.aC=0
$.bt=null
$.e8=null
$.dN=!1
$.ha=null
$.h1=null
$.he=null
$.cH=null
$.cI=null
$.dW=null
$.bl=null
$.bN=null
$.bO=null
$.dO=!1
$.E=C.k
$.en=null
$.em=null
$.el=null
$.ek=null
$.fY=null
$.p=V.iL()
$.eO=null
$.eV=null
$.bE=null
$.f0=null
$.ft=null
$.fw=null
$.fv=null
$.cB=null
$.fu=null
$.jB="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.jA="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.eT=null
$.cb=null
$.ch=null
$.cm=null
$.co=null
$.cq=null
$.cr=null
$.cv=null
$.cy=null
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
I.$lazy(y,x,w)}})(["ej","$get$ej",function(){return H.h8("_$dart_dartClosure")},"d5","$get$d5",function(){return H.h8("_$dart_js")},"fg","$get$fg",function(){return H.aG(H.cz({
toString:function(){return"$receiver$"}}))},"fh","$get$fh",function(){return H.aG(H.cz({$method$:null,
toString:function(){return"$receiver$"}}))},"fi","$get$fi",function(){return H.aG(H.cz(null))},"fj","$get$fj",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fn","$get$fn",function(){return H.aG(H.cz(void 0))},"fo","$get$fo",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fl","$get$fl",function(){return H.aG(H.fm(null))},"fk","$get$fk",function(){return H.aG(function(){try{null.$method$}catch(z){return z.message}}())},"fq","$get$fq",function(){return H.aG(H.fm(void 0))},"fp","$get$fp",function(){return H.aG(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dL","$get$dL",function(){return P.ks()},"bP","$get$bP",function(){return[]},"fS","$get$fS",function(){return P.di("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"ei","$get$ei",function(){return{}},"fz","$get$fz",function(){return Z.aw(0)},"fx","$get$fx",function(){return Z.aw(511)},"aB","$get$aB",function(){return Z.aw(1)},"aS","$get$aS",function(){return Z.aw(2)},"aR","$get$aR",function(){return Z.aw(4)},"aT","$get$aT",function(){return Z.aw(8)},"aU","$get$aU",function(){return Z.aw(16)},"bI","$get$bI",function(){return Z.aw(32)},"bJ","$get$bJ",function(){return Z.aw(64)},"fy","$get$fy",function(){return Z.aw(96)},"bi","$get$bi",function(){return Z.aw(128)},"aQ","$get$aQ",function(){return Z.aw(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.v]},{func:1,ret:P.A},{func:1,ret:-1},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.A,args:[E.L]},{func:1,ret:-1,args:[W.ay]},{func:1,ret:-1,args:[P.y,[P.k,E.L]]},{func:1,ret:P.A,args:[F.a4]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.A,args:[D.v]},{func:1,ret:-1,args:[W.Z]},{func:1,ret:-1,args:[W.bg]},{func:1,ret:P.A,args:[W.Z]},{func:1,ret:P.u,args:[P.y]},{func:1,ret:P.A,args:[,,]},{func:1,args:[,]},{func:1,ret:P.A,args:[,]},{func:1,ret:-1,args:[W.bz]},{func:1,ret:-1,args:[P.y,[P.k,D.a_]]},{func:1,ret:P.x},{func:1,ret:-1,args:[P.y,[P.k,U.at]]},{func:1,ret:-1,args:[P.y,[P.k,M.aF]]},{func:1,ret:-1,args:[P.y,[P.k,V.ai]]},{func:1,ret:P.u,args:[W.bw]},{func:1,ret:P.A,args:[W.c_]},{func:1,args:[W.Z]},{func:1,ret:P.X,args:[W.O]},{func:1,ret:W.a1,args:[W.O]},{func:1,ret:P.A,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[,]},{func:1,args:[,P.u]},{func:1,ret:P.A,args:[P.an]},{func:1,ret:P.A,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,args:[P.u]},{func:1,ret:P.X,args:[P.x,P.x]},{func:1,ret:P.A,args:[,P.a6]},{func:1,ret:P.X,args:[[P.k,D.a_]]},{func:1,ret:P.A,args:[P.y,,]},{func:1,ret:P.x,args:[P.x]},{func:1,ret:-1,args:[P.a],opt:[P.a6]},{func:1,ret:-1,opt:[P.a]},{func:1,ret:P.A,args:[P.bf]},{func:1,ret:P.A,args:[,],opt:[,]},{func:1,ret:[P.aa,,],args:[,]},{func:1,ret:-1,args:[W.bK]}]
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
if(x==y)H.lY(d||a)
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
Isolate.dY=a.dY
Isolate.dU=a.dU
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
if(typeof dartMainRunner==="function")dartMainRunner(L.hc,[])
else L.hc([])})})()
//# sourceMappingURL=main.dart.js.map
