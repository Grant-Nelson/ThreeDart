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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dy(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dz=function(){}
var dart=[["","",,H,{"^":"",lD:{"^":"a;a"}}],["","",,J,{"^":"",
dE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cv:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dD==null){H.lb()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.f7("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cT()]
if(v!=null)return v
v=H.lg(a)
if(v!=null)return v
if(typeof a=="function")return C.V
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.$get$cT(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
G:{"^":"a;",
u:function(a,b){return a===b},
ga_:function(a){return H.bw(a)},
i:["eW",function(a){return"Instance of '"+H.b5(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
hR:{"^":"G;",
i:function(a){return String(a)},
ga_:function(a){return a?519018:218159},
$isI:1},
ed:{"^":"G;",
u:function(a,b){return null==b},
i:function(a){return"null"},
ga_:function(a){return 0},
$isJ:1},
cU:{"^":"G;",
ga_:function(a){return 0},
i:["eY",function(a){return String(a)}]},
it:{"^":"cU;"},
ck:{"^":"cU;"},
bR:{"^":"cU;",
i:function(a){var z=a[$.$get$dX()]
if(z==null)return this.eY(a)
return"JavaScript function for "+H.f(J.a7(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbN:1},
b0:{"^":"G;$ti",
h:function(a,b){H.z(b,H.v(a,0))
if(!!a.fixed$length)H.p(P.aa("add"))
a.push(b)},
R:function(a,b){var z
if(!!a.fixed$length)H.p(P.aa("remove"))
for(z=0;z<a.length;++z)if(J.U(a[z],b)){a.splice(z,1)
return!0}return!1},
a6:function(a,b){var z,y
H.i(b,"$isk",[H.v(a,0)],"$ask")
if(!!a.fixed$length)H.p(P.aa("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.x)(b),++y)a.push(b[y])},
a3:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.v(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.aR(a))}},
k:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.X(z,y,H.f(a[y]))
return z.join(b)},
jb:function(a){return this.k(a,"")},
j4:function(a,b,c){var z,y,x
H.j(b,{func:1,ret:P.I,args:[H.v(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.h(P.aR(a))}throw H.h(H.cS())},
j3:function(a,b){return this.j4(a,b,null)},
a7:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
eV:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.a8(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.a8(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.v(a,0)])
return H.c(a.slice(b,c),[H.v(a,0)])},
gbM:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.cS())},
dN:function(a,b){var z,y
H.j(b,{func:1,ret:P.I,args:[H.v(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.h(P.aR(a))}return!1},
T:function(a,b){var z
for(z=0;z<a.length;++z)if(J.U(a[z],b))return!0
return!1},
i:function(a){return P.cR(a,"[","]")},
gN:function(a){return new J.ak(a,a.length,0,[H.v(a,0)])},
ga_:function(a){return H.bw(a)},
gq:function(a){return a.length},
sq:function(a,b){if(!!a.fixed$length)H.p(P.aa("set length"))
if(b<0)throw H.h(P.a8(b,0,null,"newLength",null))
a.length=b},
X:function(a,b,c){H.z(c,H.v(a,0))
if(!!a.immutable$list)H.p(P.aa("indexed set"))
if(b>=a.length||b<0)throw H.h(H.bL(a,b))
a[b]=c},
$isk:1,
$isb:1,
n:{
hQ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.cE(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.a8(a,0,4294967295,"length",null))
return J.ea(new Array(a),b)},
ea:function(a,b){return J.c7(H.c(a,[b]))},
c7:function(a){H.cy(a)
a.fixed$length=Array
return a}}},
lC:{"^":"b0;$ti"},
ak:{"^":"a;a,b,c,0d,$ti",
sdq:function(a){this.d=H.z(a,H.v(this,0))},
gF:function(){return this.d},
v:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.x(z))
x=this.c
if(x>=y){this.sdq(null)
return!1}this.sdq(z[x]);++this.c
return!0},
$isaT:1},
c8:{"^":"G;",
jJ:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.aa(""+a+".toInt()"))},
cI:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.aa(""+a+".floor()"))},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.aa(""+a+".round()"))},
ex:function(a,b){var z,y
if(b>20)throw H.h(P.a8(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga_:function(a){return a&0x1FFFFFFF},
eO:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
f0:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dH(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.dH(a,b)},
dH:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.aa("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
bs:function(a,b){var z
if(a>0)z=this.hQ(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hQ:function(a,b){return b>31?0:a>>>b},
ap:function(a,b){if(typeof b!=="number")throw H.h(H.aV(b))
return a<b},
$isw:1,
$isab:1},
ec:{"^":"c8;",$isy:1},
eb:{"^":"c8;"},
c9:{"^":"G;",
cv:function(a,b){if(b<0)throw H.h(H.bL(a,b))
if(b>=a.length)H.p(H.bL(a,b))
return a.charCodeAt(b)},
aJ:function(a,b){if(b>=a.length)throw H.h(H.bL(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.F(b)
if(typeof b!=="string")throw H.h(P.cE(b,null,null))
return a+b},
eU:function(a,b,c){var z
if(c>a.length)throw H.h(P.a8(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bW:function(a,b){return this.eU(a,b,0)},
bn:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.cf(b,null,null))
if(b>c)throw H.h(P.cf(b,null,null))
if(c>a.length)throw H.h(P.cf(c,null,null))
return a.substring(b,c)},
bm:function(a,b){return this.bn(a,b,null)},
jM:function(a){return a.toLowerCase()},
B:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.H)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
jm:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.B(c,z)+a},
af:function(a,b){return this.jm(a,b," ")},
iK:function(a,b,c){if(c>a.length)throw H.h(P.a8(c,0,a.length,null,null))
return H.fT(a,b,c)},
i:function(a){return a},
ga_:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gq:function(a){return a.length},
$iset:1,
$isn:1}}],["","",,H,{"^":"",
cS:function(){return new P.d4("No element")},
hP:function(){return new P.d4("Too many elements")},
q:{"^":"jA;a",
gq:function(a){return this.a.length},
l:function(a,b){return C.i.cv(this.a,b)},
$asf8:function(){return[P.y]},
$asT:function(){return[P.y]},
$ask:function(){return[P.y]},
$asb:function(){return[P.y]}},
e3:{"^":"k;"},
cb:{"^":"e3;$ti",
gN:function(a){return new H.cW(this,this.gq(this),0,[H.Z(this,"cb",0)])},
cW:function(a,b){return this.eX(0,H.j(b,{func:1,ret:P.I,args:[H.Z(this,"cb",0)]}))}},
cW:{"^":"a;a,b,c,0d,$ti",
sb2:function(a){this.d=H.z(a,H.v(this,0))},
gF:function(){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.cu(z)
x=y.gq(z)
if(this.b!==x)throw H.h(P.aR(z))
w=this.c
if(w>=x){this.sb2(null)
return!1}this.sb2(y.a7(z,w));++this.c
return!0},
$isaT:1},
i6:{"^":"k;a,b,$ti",
gN:function(a){return new H.i7(J.bi(this.a),this.b,this.$ti)},
gq:function(a){return J.aZ(this.a)},
a7:function(a,b){return this.b.$1(J.cC(this.a,b))},
$ask:function(a,b){return[b]}},
i7:{"^":"aT;0a,b,c,$ti",
sb2:function(a){this.a=H.z(a,H.v(this,1))},
v:function(){var z=this.b
if(z.v()){this.sb2(this.c.$1(z.gF()))
return!0}this.sb2(null)
return!1},
gF:function(){return this.a},
$asaT:function(a,b){return[b]}},
i8:{"^":"cb;a,b,$ti",
gq:function(a){return J.aZ(this.a)},
a7:function(a,b){return this.b.$1(J.cC(this.a,b))},
$ascb:function(a,b){return[b]},
$ask:function(a,b){return[b]}},
dn:{"^":"k;a,b,$ti",
gN:function(a){return new H.jR(J.bi(this.a),this.b,this.$ti)}},
jR:{"^":"aT;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gF()))return!0
return!1},
gF:function(){return this.a.gF()}},
c5:{"^":"a;$ti"},
f8:{"^":"a;$ti"},
jA:{"^":"ca+f8;"}}],["","",,H,{"^":"",
bh:function(a){var z,y
z=H.F(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
l4:function(a){return init.types[H.a_(a)]},
le:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.O(a).$isan},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a7(a)
if(typeof z!=="string")throw H.h(H.aV(a))
return z},
bw:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b5:function(a){return H.iv(a)+H.dv(H.aW(a),0,null)},
iv:function(a){var z,y,x,w,v,u,t,s,r
z=J.O(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.N||!!z.$isck){u=C.B(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bh(w.length>1&&C.i.aJ(w,0)===36?C.i.bm(w,1):w)},
ez:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iD:function(a){var z,y,x,w
z=H.c([],[P.y])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aV(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.bs(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aV(w))}return H.ez(z)},
eA:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aV(x))
if(x<0)throw H.h(H.aV(x))
if(x>65535)return H.iD(a)}return H.ez(a)},
d0:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.bs(z,10))>>>0,56320|z&1023)}throw H.h(P.a8(a,0,1114111,null,null))},
b4:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iC:function(a){var z=H.b4(a).getFullYear()+0
return z},
iA:function(a){var z=H.b4(a).getMonth()+1
return z},
iw:function(a){var z=H.b4(a).getDate()+0
return z},
ix:function(a){var z=H.b4(a).getHours()+0
return z},
iz:function(a){var z=H.b4(a).getMinutes()+0
return z},
iB:function(a){var z=H.b4(a).getSeconds()+0
return z},
iy:function(a){var z=H.b4(a).getMilliseconds()+0
return z},
B:function(a){throw H.h(H.aV(a))},
l:function(a,b){if(a==null)J.aZ(a)
throw H.h(H.bL(a,b))},
bL:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
z=H.a_(J.aZ(a))
if(!(b<0)){if(typeof z!=="number")return H.B(z)
y=b>=z}else y=!0
if(y)return P.b_(b,a,"index",null,z)
return P.cf(b,"index",null)},
l0:function(a,b,c){if(a>c)return new P.ce(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ce(a,c,!0,b,"end","Invalid value")
return new P.aE(!0,b,"end",null)},
aV:function(a){return new P.aE(!0,a,null,null)},
kW:function(a){if(typeof a!=="number")throw H.h(H.aV(a))
return a},
h:function(a){var z
if(a==null)a=new P.es()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fU})
z.name=""}else z.toString=H.fU
return z},
fU:function(){return J.a7(this.dartException)},
p:function(a){throw H.h(a)},
x:function(a){throw H.h(P.aR(a))},
ac:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ls(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.bs(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cV(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.er(H.f(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eX()
u=$.$get$eY()
t=$.$get$eZ()
s=$.$get$f_()
r=$.$get$f3()
q=$.$get$f4()
p=$.$get$f1()
$.$get$f0()
o=$.$get$f6()
n=$.$get$f5()
m=v.ae(y)
if(m!=null)return z.$1(H.cV(H.F(y),m))
else{m=u.ae(y)
if(m!=null){m.method="call"
return z.$1(H.cV(H.F(y),m))}else{m=t.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=r.ae(y)
if(m==null){m=q.ae(y)
if(m==null){m=p.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=o.ae(y)
if(m==null){m=n.ae(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.er(H.F(y),m))}}return z.$1(new H.jz(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eK()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aE(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eK()
return a},
bf:function(a){var z
if(a==null)return new H.fv(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fv(a)},
l2:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.X(0,a[y],a[x])}return b},
ld:function(a,b,c,d,e,f){H.e(a,"$isbN")
switch(H.a_(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.o("Unsupported number of arguments for wrapped closure"))},
bd:function(a,b){var z
H.a_(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ld)
a.$identity=z
return z},
hb:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.O(d).$isb){z.$reflectionInfo=d
x=H.iI(z).r}else x=d
w=e?Object.create(new H.j5().constructor.prototype):Object.create(new H.cG(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.au
if(typeof u!=="number")return u.G()
$.au=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dT(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.l4,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dO:H.cH
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.h("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dT(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
h8:function(a,b,c,d){var z=H.cH
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dT:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ha(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.h8(y,!w,z,b)
if(y===0){w=$.au
if(typeof w!=="number")return w.G()
$.au=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bk
if(v==null){v=H.bZ("self")
$.bk=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.au
if(typeof w!=="number")return w.G()
$.au=w+1
t+=w
w="return function("+t+"){return this."
v=$.bk
if(v==null){v=H.bZ("self")
$.bk=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
h9:function(a,b,c,d){var z,y
z=H.cH
y=H.dO
switch(b?-1:a){case 0:throw H.h(H.iQ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ha:function(a,b){var z,y,x,w,v,u,t,s
z=$.bk
if(z==null){z=H.bZ("self")
$.bk=z}y=$.dN
if(y==null){y=H.bZ("receiver")
$.dN=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.h9(w,!u,x,b)
if(w===1){z="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
y=$.au
if(typeof y!=="number")return y.G()
$.au=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
y=$.au
if(typeof y!=="number")return y.G()
$.au=y+1
return new Function(z+y+"}")()},
dy:function(a,b,c,d,e,f,g){return H.hb(a,b,H.a_(c),d,!!e,!!f,g)},
F:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.ar(a,"String"))},
m4:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.ar(a,"double"))},
lk:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.ar(a,"num"))},
dw:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.ar(a,"bool"))},
a_:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.ar(a,"int"))},
fR:function(a,b){throw H.h(H.ar(a,H.bh(H.F(b).substring(3))))},
lm:function(a,b){throw H.h(H.h7(a,H.bh(H.F(b).substring(3))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.fR(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else z=!0
if(z)return a
H.lm(a,b)},
cy:function(a){if(a==null)return a
if(!!J.O(a).$isb)return a
throw H.h(H.ar(a,"List<dynamic>"))},
lf:function(a,b){var z
if(a==null)return a
z=J.O(a)
if(!!z.$isb)return a
if(z[b])return a
H.fR(a,b)},
fL:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a_(z)]
else return a.$S()}return},
bW:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fL(J.O(a))
if(z==null)return!1
return H.fC(z,null,b,null)},
j:function(a,b){var z,y
if(a==null)return a
if($.ds)return a
$.ds=!0
try{if(H.bW(a,b))return a
z=H.cA(b)
y=H.ar(a,z)
throw H.h(y)}finally{$.ds=!1}},
dA:function(a,b){if(a!=null&&!H.dx(a,b))H.p(H.ar(a,H.cA(b)))
return a},
fG:function(a){var z,y
z=J.O(a)
if(!!z.$ist){y=H.fL(z)
if(y!=null)return H.cA(y)
return"Closure"}return H.b5(a)},
lr:function(a){throw H.h(new P.hh(H.F(a)))},
fM:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aW:function(a){if(a==null)return
return a.$ti},
m5:function(a,b,c){return H.bg(a["$as"+H.f(c)],H.aW(b))},
cw:function(a,b,c,d){var z
H.F(c)
H.a_(d)
z=H.bg(a["$as"+H.f(c)],H.aW(b))
return z==null?null:z[d]},
Z:function(a,b,c){var z
H.F(b)
H.a_(c)
z=H.bg(a["$as"+H.f(b)],H.aW(a))
return z==null?null:z[c]},
v:function(a,b){var z
H.a_(b)
z=H.aW(a)
return z==null?null:z[b]},
cA:function(a){return H.aU(a,null)},
aU:function(a,b){var z,y
H.i(b,"$isb",[P.n],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bh(a[0].builtin$cls)+H.dv(a,1,b)
if(typeof a=="function")return H.bh(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a_(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.l(b,y)
return H.f(b[y])}if('func' in a)return H.kM(a,b)
if('futureOr' in a)return"FutureOr<"+H.aU("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
if(r<0)return H.l(b,r)
t=C.i.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aU(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aU(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aU(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aU(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.l1(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.F(z[l])
n=n+m+H.aU(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dv:function(a,b,c){var z,y,x,w,v,u
H.i(c,"$isb",[P.n],"$asb")
if(a==null)return""
z=new P.bx("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aU(u,c)}return"<"+z.i(0)+">"},
bg:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bK:function(a,b,c,d){var z,y
H.F(b)
H.cy(c)
H.F(d)
if(a==null)return!1
z=H.aW(a)
y=J.O(a)
if(y[b]==null)return!1
return H.fJ(H.bg(y[d],z),null,c,null)},
i:function(a,b,c,d){H.F(b)
H.cy(c)
H.F(d)
if(a==null)return a
if(H.bK(a,b,c,d))return a
throw H.h(H.ar(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bh(b.substring(3))+H.dv(c,0,null),init.mangledGlobalNames)))},
fJ:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aj(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aj(a[y],b,c[y],d))return!1
return!0},
m2:function(a,b,c){return a.apply(b,H.bg(J.O(b)["$as"+H.f(c)],H.aW(b)))},
fO:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="J"||a===-1||a===-2||H.fO(z)}return!1},
dx:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="J"||b===-1||b===-2||H.fO(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bW(a,b)}z=J.O(a).constructor
y=H.aW(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.aj(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.dx(a,b))throw H.h(H.ar(a,H.cA(b)))
return a},
aj:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aj(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="J")return!0
if('func' in c)return H.fC(a,b,c,d)
if('func' in a)return c.builtin$cls==="bN"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aj("type" in a?a.type:null,b,x,d)
else if(H.aj(a,b,x,d))return!0
else{if(!('$is'+"bp" in y.prototype))return!1
w=y.prototype["$as"+"bp"]
v=H.bg(w,z?a.slice(1):null)
return H.aj(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fJ(H.bg(r,z),b,u,d)},
fC:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.lj(m,b,l,d)},
lj:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aj(c[w],d,a[w],b))return!1}return!0},
m3:function(a,b,c){Object.defineProperty(a,H.F(b),{value:c,enumerable:false,writable:true,configurable:true})},
lg:function(a){var z,y,x,w,v,u
z=H.F($.fN.$1(a))
y=$.ct[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cx[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.F($.fI.$2(a,z))
if(z!=null){y=$.ct[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cx[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cz(x)
$.ct[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cx[z]=x
return x}if(v==="-"){u=H.cz(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fQ(a,x)
if(v==="*")throw H.h(P.f7(z))
if(init.leafTags[z]===true){u=H.cz(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fQ(a,x)},
fQ:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dE(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cz:function(a){return J.dE(a,!1,null,!!a.$isan)},
li:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cz(z)
else return J.dE(z,c,null,null)},
lb:function(){if(!0===$.dD)return
$.dD=!0
H.lc()},
lc:function(){var z,y,x,w,v,u,t,s
$.ct=Object.create(null)
$.cx=Object.create(null)
H.l7()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fS.$1(v)
if(u!=null){t=H.li(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
l7:function(){var z,y,x,w,v,u,t
z=C.S()
z=H.bc(C.P,H.bc(C.U,H.bc(C.A,H.bc(C.A,H.bc(C.T,H.bc(C.Q,H.bc(C.R(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fN=new H.l8(v)
$.fI=new H.l9(u)
$.fS=new H.la(t)},
bc:function(a,b){return a(b)||b},
fT:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dH:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
iH:{"^":"a;a,b,c,d,e,f,r,0x",n:{
iI:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c7(z)
y=z[0]
x=z[1]
return new H.iH(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jn:{"^":"a;a,b,c,d,e,f",
ae:function(a){var z,y,x
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
aC:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jn(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cj:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
f2:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iq:{"^":"X;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
n:{
er:function(a,b){return new H.iq(a,b==null?null:b.method)}}},
hU:{"^":"X;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
n:{
cV:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hU(a,y,z?null:b.receiver)}}},
jz:{"^":"X;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ls:{"^":"t:13;a",
$1:function(a){if(!!J.O(a).$isX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fv:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaI:1},
t:{"^":"a;",
i:function(a){return"Closure '"+H.b5(this).trim()+"'"},
geC:function(){return this},
$isbN:1,
geC:function(){return this}},
eN:{"^":"t;"},
j5:{"^":"eN;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bh(z)+"'"}},
cG:{"^":"eN;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cG))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga_:function(a){var z,y
z=this.c
if(z==null)y=H.bw(this.a)
else y=typeof z!=="object"?J.aY(z):H.bw(z)
return(y^H.bw(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.b5(z)+"'")},
n:{
cH:function(a){return a.a},
dO:function(a){return a.c},
bZ:function(a){var z,y,x,w,v
z=new H.cG("self","target","receiver","name")
y=J.c7(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jo:{"^":"X;a",
i:function(a){return this.a},
n:{
ar:function(a,b){return new H.jo("TypeError: "+H.f(P.c3(a))+": type '"+H.fG(a)+"' is not a subtype of type '"+b+"'")}}},
h6:{"^":"X;a",
i:function(a){return this.a},
n:{
h7:function(a,b){return new H.h6("CastError: "+H.f(P.c3(a))+": type '"+H.fG(a)+"' is not a subtype of type '"+b+"'")}}},
iP:{"^":"X;a",
i:function(a){return"RuntimeError: "+H.f(this.a)},
n:{
iQ:function(a){return new H.iP(a)}}},
b1:{"^":"ej;a,0b,0c,0d,0e,0f,r,$ti",
gq:function(a){return this.a},
gaA:function(){return new H.eg(this,[H.v(this,0)])},
dV:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dl(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dl(y,a)}else return this.j9(a)},
j9:function(a){var z=this.d
if(z==null)return!1
return this.cJ(this.c4(z,J.aY(a)&0x3ffffff),a)>=0},
l:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bq(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bq(w,b)
x=y==null?null:y.b
return x}else return this.ja(b)},
ja:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c4(z,J.aY(a)&0x3ffffff)
x=this.cJ(y,a)
if(x<0)return
return y[x].b},
X:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.v(this,0))
H.z(c,H.v(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cd()
this.b=z}this.dc(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cd()
this.c=y}this.dc(y,b,c)}else{x=this.d
if(x==null){x=this.cd()
this.d=x}w=J.aY(b)&0x3ffffff
v=this.c4(x,w)
if(v==null)this.ck(x,w,[this.bZ(b,c)])
else{u=this.cJ(v,b)
if(u>=0)v[u].b=c
else v.push(this.bZ(b,c))}}},
a3:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.aR(this))
z=z.c}},
dc:function(a,b,c){var z
H.z(b,H.v(this,0))
H.z(c,H.v(this,1))
z=this.bq(a,b)
if(z==null)this.ck(a,b,this.bZ(b,c))
else z.b=c},
fm:function(){this.r=this.r+1&67108863},
bZ:function(a,b){var z,y
z=new H.hY(H.z(a,H.v(this,0)),H.z(b,H.v(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fm()
return z},
cJ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.U(a[y].a,b))return y
return-1},
i:function(a){return P.ek(this)},
bq:function(a,b){return a[b]},
c4:function(a,b){return a[b]},
ck:function(a,b,c){a[b]=c},
fE:function(a,b){delete a[b]},
dl:function(a,b){return this.bq(a,b)!=null},
cd:function(){var z=Object.create(null)
this.ck(z,"<non-identifier-key>",z)
this.fE(z,"<non-identifier-key>")
return z},
$isef:1},
hY:{"^":"a;a,b,0c,0d"},
eg:{"^":"e3;a,$ti",
gq:function(a){return this.a.a},
gN:function(a){var z,y
z=this.a
y=new H.hZ(z,z.r,this.$ti)
y.c=z.e
return y}},
hZ:{"^":"a;a,b,0c,0d,$ti",
sdd:function(a){this.d=H.z(a,H.v(this,0))},
gF:function(){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.aR(z))
else{z=this.c
if(z==null){this.sdd(null)
return!1}else{this.sdd(z.a)
this.c=this.c.c
return!0}}},
$isaT:1},
l8:{"^":"t:13;a",
$1:function(a){return this.a(a)}},
l9:{"^":"t:32;a",
$2:function(a,b){return this.a(a,b)}},
la:{"^":"t:33;a",
$1:function(a){return this.a(H.F(a))}},
hS:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iset:1,
n:{
hT:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.hC("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
l1:function(a){return J.ea(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
ll:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bG:function(a){return a},
bF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bL(b,a))},
kL:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.l0(a,b,c))
return b},
il:{"^":"G;",$islP:1,"%":";ArrayBufferView;d_|fr|fs|ik|ft|fu|bt"},
d_:{"^":"il;",
gq:function(a){return a.length},
$isan:1,
$asan:I.dz},
ik:{"^":"fs;",
l:function(a,b){H.bF(b,a,a.length)
return a[b]},
$asc5:function(){return[P.w]},
$asT:function(){return[P.w]},
$isk:1,
$ask:function(){return[P.w]},
$isb:1,
$asb:function(){return[P.w]},
"%":"Float32Array"},
bt:{"^":"fu;",
$asc5:function(){return[P.y]},
$asT:function(){return[P.y]},
$isk:1,
$ask:function(){return[P.y]},
$isb:1,
$asb:function(){return[P.y]}},
lE:{"^":"bt;",
l:function(a,b){H.bF(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lF:{"^":"bt;",
l:function(a,b){H.bF(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lG:{"^":"bt;",
l:function(a,b){H.bF(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lH:{"^":"bt;",
gq:function(a){return a.length},
l:function(a,b){H.bF(b,a,a.length)
return a[b]},
$islQ:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
lI:{"^":"bt;",
gq:function(a){return a.length},
l:function(a,b){H.bF(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
fr:{"^":"d_+T;"},
fs:{"^":"fr+c5;"},
ft:{"^":"d_+T;"},
fu:{"^":"ft+c5;"}}],["","",,P,{"^":"",
jT:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kT()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bd(new P.jV(z),1)).observe(y,{childList:true})
return new P.jU(z,y,x)}else if(self.setImmediate!=null)return P.kU()
return P.kV()},
lU:[function(a){self.scheduleImmediate(H.bd(new P.jW(H.j(a,{func:1,ret:-1})),0))},"$1","kT",4,0,8],
lV:[function(a){self.setImmediate(H.bd(new P.jX(H.j(a,{func:1,ret:-1})),0))},"$1","kU",4,0,8],
lW:[function(a){P.da(C.q,H.j(a,{func:1,ret:-1}))},"$1","kV",4,0,8],
da:function(a,b){var z
H.j(b,{func:1,ret:-1})
z=C.h.a2(a.a,1000)
return P.kz(z<0?0:z,b)},
eU:function(a,b){var z
H.j(b,{func:1,ret:-1,args:[P.b6]})
z=C.h.a2(a.a,1000)
return P.kA(z<0?0:z,b)},
kP:function(a,b){if(H.bW(a,{func:1,args:[P.a,P.aI]}))return H.j(a,{func:1,ret:null,args:[P.a,P.aI]})
if(H.bW(a,{func:1,args:[P.a]}))return H.j(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.cE(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kO:function(){var z,y
for(;z=$.bb,z!=null;){$.bI=null
y=z.b
$.bb=y
if(y==null)$.bH=null
z.a.$0()}},
m1:[function(){$.dt=!0
try{P.kO()}finally{$.bI=null
$.dt=!1
if($.bb!=null)$.$get$dp().$1(P.fK())}},"$0","fK",0,0,3],
fF:function(a){var z=new P.fj(H.j(a,{func:1,ret:-1}))
if($.bb==null){$.bH=z
$.bb=z
if(!$.dt)$.$get$dp().$1(P.fK())}else{$.bH.b=z
$.bH=z}},
kS:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.bb
if(z==null){P.fF(a)
$.bI=$.bH
return}y=new P.fj(a)
x=$.bI
if(x==null){y.b=z
$.bI=y
$.bb=y}else{y.b=x.b
x.b=y
$.bI=y
if(y.b==null)$.bH=y}},
ln:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.N
if(C.l===y){P.cs(null,null,C.l,a)
return}y.toString
P.cs(null,null,y,H.j(y.cq(a),z))},
eT:function(a,b){var z,y
z={func:1,ret:-1}
H.j(b,z)
y=$.N
if(y===C.l){y.toString
return P.da(a,b)}return P.da(a,H.j(y.cq(b),z))},
jk:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b6]}
H.j(b,z)
y=$.N
if(y===C.l){y.toString
return P.eU(a,b)}x=y.dP(b,P.b6)
$.N.toString
return P.eU(a,H.j(x,z))},
cr:function(a,b,c,d,e){var z={}
z.a=d
P.kS(new P.kQ(z,e))},
fD:function(a,b,c,d,e){var z,y
H.j(d,{func:1,ret:e})
y=$.N
if(y===c)return d.$0()
$.N=c
z=y
try{y=d.$0()
return y}finally{$.N=z}},
fE:function(a,b,c,d,e,f,g){var z,y
H.j(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.N
if(y===c)return d.$1(e)
$.N=c
z=y
try{y=d.$1(e)
return y}finally{$.N=z}},
kR:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.N
if(y===c)return d.$2(e,f)
$.N=c
z=y
try{y=d.$2(e,f)
return y}finally{$.N=z}},
cs:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.cq(d):c.iC(d,-1)
P.fF(d)},
jV:{"^":"t:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jU:{"^":"t:31;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jW:{"^":"t:2;a",
$0:function(){this.a.$0()}},
jX:{"^":"t:2;a",
$0:function(){this.a.$0()}},
fx:{"^":"a;a,0b,c",
fj:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bd(new P.kC(this,b),0),a)
else throw H.h(P.aa("`setTimeout()` not found."))},
fk:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bd(new P.kB(this,a,Date.now(),b),0),a)
else throw H.h(P.aa("Periodic timer."))},
$isb6:1,
n:{
kz:function(a,b){var z=new P.fx(!0,0)
z.fj(a,b)
return z},
kA:function(a,b){var z=new P.fx(!1,0)
z.fk(a,b)
return z}}},
kC:{"^":"t:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kB:{"^":"t:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.f0(w,x)}z.c=y
this.d.$1(z)}},
ba:{"^":"a;0a,b,c,d,e,$ti",
jg:function(a){if(this.c!==6)return!0
return this.b.b.cT(H.j(this.d,{func:1,ret:P.I,args:[P.a]}),a.a,P.I,P.a)},
j7:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.v(this,1)}
w=this.b.b
if(H.bW(z,{func:1,args:[P.a,P.aI]}))return H.dA(w.jC(z,a.a,a.b,null,y,P.aI),x)
else return H.dA(w.cT(H.j(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aO:{"^":"a;dG:a<,b,0hE:c<,$ti",
ew:function(a,b,c){var z,y,x,w
z=H.v(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.N
if(y!==C.l){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kP(b,y)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aO(0,$.N,[c])
w=b==null?1:3
this.df(new P.ba(x,w,a,b,[z,c]))
return x},
jI:function(a,b){return this.ew(a,null,b)},
df:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isba")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaO")
z=y.a
if(z<4){y.df(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cs(null,null,z,H.j(new P.k4(this,a),{func:1,ret:-1}))}},
dD:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isba")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaO")
y=u.a
if(y<4){u.dD(a)
return}this.a=y
this.c=u.c}z.a=this.br(a)
y=this.b
y.toString
P.cs(null,null,y,H.j(new P.k9(z,this),{func:1,ret:-1}))}},
ci:function(){var z=H.e(this.c,"$isba")
this.c=null
return this.br(z)},
br:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dh:function(a){var z,y,x
z=H.v(this,0)
H.dA(a,{futureOr:1,type:z})
y=this.$ti
if(H.bK(a,"$isbp",y,"$asbp"))if(H.bK(a,"$isaO",y,null))P.fm(a,this)
else P.k5(a,this)
else{x=this.ci()
H.z(a,z)
this.a=4
this.c=a
P.bD(this,x)}},
di:function(a,b){var z
H.e(b,"$isaI")
z=this.ci()
this.a=8
this.c=new P.ad(a,b)
P.bD(this,z)},
$isbp:1,
n:{
k5:function(a,b){var z,y,x
b.a=1
try{a.ew(new P.k6(b),new P.k7(b),null)}catch(x){z=H.ac(x)
y=H.bf(x)
P.ln(new P.k8(b,z,y))}},
fm:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaO")
if(z>=4){y=b.ci()
b.a=a.a
b.c=a.c
P.bD(b,y)}else{y=H.e(b.c,"$isba")
b.a=2
b.c=a
a.dD(y)}},
bD:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isad")
y=y.b
u=v.a
t=v.b
y.toString
P.cr(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bD(z.a,b)}y=z.a
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
P.cr(null,null,y,u,t)
return}o=$.N
if(o==null?q!=null:o!==q)$.N=q
else o=null
y=b.c
if(y===8)new P.kc(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kb(x,b,r).$0()}else if((y&2)!==0)new P.ka(z,x,b).$0()
if(o!=null)$.N=o
y=x.b
if(!!J.O(y).$isbp){if(y.a>=4){n=H.e(t.c,"$isba")
t.c=null
b=t.br(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fm(y,t)
return}}m=b.b
n=H.e(m.c,"$isba")
m.c=null
b=m.br(n)
y=x.a
u=x.b
if(!y){H.z(u,H.v(m,0))
m.a=4
m.c=u}else{H.e(u,"$isad")
m.a=8
m.c=u}z.a=m
y=m}}}},
k4:{"^":"t:2;a,b",
$0:function(){P.bD(this.a,this.b)}},
k9:{"^":"t:2;a,b",
$0:function(){P.bD(this.b,this.a.a)}},
k6:{"^":"t:15;a",
$1:function(a){var z=this.a
z.a=0
z.dh(a)}},
k7:{"^":"t:34;a",
$2:function(a,b){this.a.di(a,H.e(b,"$isaI"))},
$1:function(a){return this.$2(a,null)}},
k8:{"^":"t:2;a,b,c",
$0:function(){this.a.di(this.b,this.c)}},
kc:{"^":"t:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ev(H.j(w.d,{func:1}),null)}catch(v){y=H.ac(v)
x=H.bf(v)
if(this.d){w=H.e(this.a.a.c,"$isad").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isad")
else u.b=new P.ad(y,x)
u.a=!0
return}if(!!J.O(z).$isbp){if(z instanceof P.aO&&z.gdG()>=4){if(z.gdG()===8){w=this.b
w.b=H.e(z.ghE(),"$isad")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.jI(new P.kd(t),null)
w.a=!1}}},
kd:{"^":"t:35;a",
$1:function(a){return this.a}},
kb:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.v(x,0)
v=H.z(this.c,w)
u=H.v(x,1)
this.a.b=x.b.b.cT(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ac(t)
y=H.bf(t)
x=this.a
x.b=new P.ad(z,y)
x.a=!0}}},
ka:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isad")
w=this.c
if(w.jg(z)&&w.e!=null){v=this.b
v.b=w.j7(z)
v.a=!1}}catch(u){y=H.ac(u)
x=H.bf(u)
w=H.e(this.a.a.c,"$isad")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ad(y,x)
s.a=!0}}},
fj:{"^":"a;a,0b"},
j6:{"^":"a;$ti",
gq:function(a){var z,y,x,w
z={}
y=new P.aO(0,$.N,[P.y])
z.a=0
x=H.v(this,0)
w=H.j(new P.j8(z,this),{func:1,ret:-1,args:[x]})
H.j(new P.j9(z,y),{func:1,ret:-1})
W.W(this.a,this.b,w,!1,x)
return y}},
j8:{"^":"t;a,b",
$1:function(a){H.z(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.v(this.b,0)]}}},
j9:{"^":"t:2;a,b",
$0:function(){this.b.dh(this.a.a)}},
d5:{"^":"a;$ti"},
j7:{"^":"a;"},
b6:{"^":"a;"},
ad:{"^":"a;a,b",
i:function(a){return H.f(this.a)},
$isX:1},
kH:{"^":"a;",$islT:1},
kQ:{"^":"t:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.es()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.i(0)
throw x}},
ko:{"^":"kH;",
jD:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.l===$.N){a.$0()
return}P.fD(null,null,this,a,-1)}catch(x){z=H.ac(x)
y=H.bf(x)
P.cr(null,null,this,z,H.e(y,"$isaI"))}},
jE:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.l===$.N){a.$1(b)
return}P.fE(null,null,this,a,b,-1,c)}catch(x){z=H.ac(x)
y=H.bf(x)
P.cr(null,null,this,z,H.e(y,"$isaI"))}},
iC:function(a,b){return new P.kq(this,H.j(a,{func:1,ret:b}),b)},
cq:function(a){return new P.kp(this,H.j(a,{func:1,ret:-1}))},
dP:function(a,b){return new P.kr(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
ev:function(a,b){H.j(a,{func:1,ret:b})
if($.N===C.l)return a.$0()
return P.fD(null,null,this,a,b)},
cT:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.N===C.l)return a.$1(b)
return P.fE(null,null,this,a,b,c,d)},
jC:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.N===C.l)return a.$2(b,c)
return P.kR(null,null,this,a,b,c,d,e,f)}},
kq:{"^":"t;a,b,c",
$0:function(){return this.a.ev(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kp:{"^":"t:3;a,b",
$0:function(){return this.a.jD(this.b)}},
kr:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.jE(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i0:function(a,b,c){H.cy(a)
return H.i(H.l2(a,new H.b1(0,0,[b,c])),"$isef",[b,c],"$asef")},
i_:function(a,b){return new H.b1(0,0,[a,b])},
bS:function(a,b,c,d){return new P.ki(0,0,[d])},
hO:function(a,b,c){var z,y
if(P.du(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bJ()
C.a.h(y,a)
try{P.kN(a,z)}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=P.eM(b,H.lf(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
cR:function(a,b,c){var z,y,x
if(P.du(a))return b+"..."+c
z=new P.bx(b)
y=$.$get$bJ()
C.a.h(y,a)
try{x=z
x.a=P.eM(x.gaK(),a,", ")}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=z
y.a=y.gaK()+c
y=z.gaK()
return y.charCodeAt(0)==0?y:y},
du:function(a){var z,y
for(z=0;y=$.$get$bJ(),z<y.length;++z)if(a===y[z])return!0
return!1},
kN:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gN(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.v())return
w=H.f(z.gF())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.v()){if(x<=5)return
if(0>=b.length)return H.l(b,-1)
v=b.pop()
if(0>=b.length)return H.l(b,-1)
u=b.pop()}else{t=z.gF();++x
if(!z.v()){if(x<=4){C.a.h(b,H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.l(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gF();++x
for(;z.v();t=s,s=r){r=z.gF();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.l(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.f(t)
v=H.f(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.l(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
eh:function(a,b){var z,y,x
z=P.bS(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x)z.h(0,H.z(a[x],b))
return z},
ek:function(a){var z,y,x
z={}
if(P.du(a))return"{...}"
y=new P.bx("")
try{C.a.h($.$get$bJ(),a)
x=y
x.a=x.gaK()+"{"
z.a=!0
a.a3(0,new P.i5(z,y))
z=y
z.a=z.gaK()+"}"}finally{z=$.$get$bJ()
if(0>=z.length)return H.l(z,-1)
z.pop()}z=y.gaK()
return z.charCodeAt(0)==0?z:z},
ki:{"^":"ke;a,0b,0c,0d,0e,0f,r,$ti",
gN:function(a){var z=new P.fq(this,this.r,this.$ti)
z.c=this.e
return z},
gq:function(a){return this.a},
T:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscp")!=null}else{y=this.fA(b)
return y}},
fA:function(a){var z=this.d
if(z==null)return!1
return this.c2(this.ds(z,a),a)>=0},
h:function(a,b){var z,y
H.z(b,H.v(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dr()
this.b=z}return this.de(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dr()
this.c=y}return this.de(y,b)}else return this.fn(b)},
fn:function(a){var z,y,x
H.z(a,H.v(this,0))
z=this.d
if(z==null){z=P.dr()
this.d=z}y=this.dj(a)
x=z[y]
if(x==null)z[y]=[this.ce(a)]
else{if(this.c2(x,a)>=0)return!1
x.push(this.ce(a))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.hy(this.c,b)
else return this.hv(b)},
hv:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.ds(z,a)
x=this.c2(y,a)
if(x<0)return!1
this.dI(y.splice(x,1)[0])
return!0},
de:function(a,b){H.z(b,H.v(this,0))
if(H.e(a[b],"$iscp")!=null)return!1
a[b]=this.ce(b)
return!0},
hy:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscp")
if(z==null)return!1
this.dI(z)
delete a[b]
return!0},
du:function(){this.r=this.r+1&67108863},
ce:function(a){var z,y
z=new P.cp(H.z(a,H.v(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.du()
return z},
dI:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.du()},
dj:function(a){return J.aY(a)&0x3ffffff},
ds:function(a,b){return a[this.dj(b)]},
c2:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.U(a[y].a,b))return y
return-1},
n:{
dr:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cp:{"^":"a;a,0b,0c"},
fq:{"^":"a;a,b,0c,0d,$ti",
sdg:function(a){this.d=H.z(a,H.v(this,0))},
gF:function(){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.aR(z))
else{z=this.c
if(z==null){this.sdg(null)
return!1}else{this.sdg(H.z(z.a,H.v(this,0)))
this.c=this.c.b
return!0}}},
$isaT:1,
n:{
kj:function(a,b,c){var z=new P.fq(a,b,[c])
z.c=a.e
return z}}},
ke:{"^":"iR;"},
ca:{"^":"kk;",$isk:1,$isb:1},
T:{"^":"a;$ti",
gN:function(a){return new H.cW(a,this.gq(a),0,[H.cw(this,a,"T",0)])},
a7:function(a,b){return this.l(a,b)},
jL:function(a,b){var z,y
z=H.c([],[H.cw(this,a,"T",0)])
C.a.sq(z,this.gq(a))
for(y=0;y<this.gq(a);++y)C.a.X(z,y,this.l(a,y))
return z},
jK:function(a){return this.jL(a,!0)},
i:function(a){return P.cR(a,"[","]")}},
ej:{"^":"cc;"},
i5:{"^":"t:17;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.f(a)
z.a=y+": "
z.a+=H.f(b)}},
cc:{"^":"a;$ti",
a3:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.Z(this,"cc",0),H.Z(this,"cc",1)]})
for(z=J.bi(this.gaA());z.v();){y=z.gF()
b.$2(y,this.l(0,y))}},
gq:function(a){return J.aZ(this.gaA())},
i:function(a){return P.ek(this)},
$isae:1},
iT:{"^":"a;$ti",
a6:function(a,b){var z
for(z=J.bi(H.i(b,"$isk",this.$ti,"$ask"));z.v();)this.h(0,z.gF())},
i:function(a){return P.cR(this,"{","}")},
a7:function(a,b){var z,y,x
if(b<0)H.p(P.a8(b,0,null,"index",null))
for(z=P.kj(this,this.r,H.v(this,0)),y=0;z.v();){x=z.d
if(b===y)return x;++y}throw H.h(P.b_(b,this,"index",null,y))},
$isk:1,
$iseG:1},
iR:{"^":"iT;"},
kk:{"^":"a+T;"}}],["","",,P,{"^":"",cM:{"^":"a;$ti"},c1:{"^":"j7;$ti"},hu:{"^":"cM;",
$ascM:function(){return[P.n,[P.b,P.y]]}},hL:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},hK:{"^":"c1;a",
fB:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.l(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.bx("")
if(w>b)v.a+=C.i.bn(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.h0(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asc1:function(){return[P.n,P.n]}},jG:{"^":"hu;a"},jH:{"^":"c1;",
iM:function(a,b,c){var z,y,x,w
z=a.length
P.eB(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kF(0,0,x)
if(w.fM(a,b,z)!==z)w.dJ(C.i.cv(a,z-1),0)
return new Uint8Array(x.subarray(0,H.kL(0,w.b,x.length)))},
iL:function(a){return this.iM(a,0,null)},
$asc1:function(){return[P.n,[P.b,P.y]]}},kF:{"^":"a;a,b,c",
dJ:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.l(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.l(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.l(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.l(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.l(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.l(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.l(z,y)
z[y]=128|a&63
return!1}},
fM:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.cv(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.aJ(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dJ(w,C.i.aJ(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.l(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.l(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.l(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.l(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
hw:function(a){if(a instanceof H.t)return a.i(0)
return"Instance of '"+H.b5(a)+"'"},
i1:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hQ(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.X(z,y,b)
return H.i(z,"$isb",[d],"$asb")},
i2:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gN(a);x.v();)C.a.h(y,H.z(x.gF(),c))
if(b)return y
return H.i(J.c7(y),"$isb",z,"$asb")},
d6:function(a,b,c){var z,y
z=P.y
H.i(a,"$isk",[z],"$ask")
if(a.constructor===Array){H.i(a,"$isb0",[z],"$asb0")
y=a.length
c=P.eB(b,c,y,null,null,null)
return H.eA(b>0||c<y?C.a.eV(a,b,c):a)}return P.ja(a,b,c)},
ja:function(a,b,c){var z,y,x
H.i(a,"$isk",[P.y],"$ask")
z=J.bi(a)
for(y=0;y<b;++y)if(!z.v())throw H.h(P.a8(b,0,y,null,null))
x=[]
for(;z.v();)x.push(z.gF())
return H.eA(x)},
iJ:function(a,b,c){return new H.hS(a,H.hT(a,!1,!0,!1))},
fA:function(a,b,c,d){var z,y,x,w,v,u
H.i(a,"$isb",[P.y],"$asb")
if(c===C.x){z=$.$get$fz().b
z=z.test(b)}else z=!1
if(z)return b
y=C.I.iL(H.z(b,H.Z(c,"cM",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.l(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.d0(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c3:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a7(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hw(a)},
o:function(a){return new P.fl(a)},
dG:function(a){H.ll(a)},
I:{"^":"a;"},
"+bool":0,
al:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.al))return!1
return this.a===b.a&&!0},
ga_:function(a){var z=this.a
return(z^C.h.bs(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.hj(H.iC(this))
y=P.bM(H.iA(this))
x=P.bM(H.iw(this))
w=P.bM(H.ix(this))
v=P.bM(H.iz(this))
u=P.bM(H.iB(this))
t=P.hk(H.iy(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
n:{
hj:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hk:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bM:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"ab;"},
"+double":0,
bl:{"^":"a;a",
ap:function(a,b){return C.h.ap(this.a,H.e(b,"$isbl").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bl))return!1
return this.a===b.a},
ga_:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hq()
y=this.a
if(y<0)return"-"+new P.bl(0-y).i(0)
x=z.$1(C.h.a2(y,6e7)%60)
w=z.$1(C.h.a2(y,1e6)%60)
v=new P.hp().$1(y%1e6)
return""+C.h.a2(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
n:{
e2:function(a,b,c,d,e,f){return new P.bl(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hp:{"^":"t:21;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hq:{"^":"t:21;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
X:{"^":"a;"},
es:{"^":"X;",
i:function(a){return"Throw of null."}},
aE:{"^":"X;a,b,c,d",
gc1:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc0:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.f(z)
w=this.gc1()+y+x
if(!this.a)return w
v=this.gc0()
u=P.c3(this.b)
return w+v+": "+H.f(u)},
n:{
h3:function(a){return new P.aE(!1,null,null,a)},
cE:function(a,b,c){return new P.aE(!0,a,b,c)}}},
ce:{"^":"aE;e,f,a,b,c,d",
gc1:function(){return"RangeError"},
gc0:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
n:{
cf:function(a,b,c){return new P.ce(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.ce(b,c,!0,a,d,"Invalid value")},
eB:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.a8(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.h(P.a8(b,a,c,"end",f))
return b}return c}}},
hN:{"^":"aE;e,q:f>,a,b,c,d",
gc1:function(){return"RangeError"},
gc0:function(){if(J.fV(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.f(z)},
n:{
b_:function(a,b,c,d,e){var z=H.a_(e!=null?e:J.aZ(b))
return new P.hN(b,z,!0,a,c,"Index out of range")}}},
jB:{"^":"X;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
aa:function(a){return new P.jB(a)}}},
jy:{"^":"X;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
f7:function(a){return new P.jy(a)}}},
d4:{"^":"X;a",
i:function(a){return"Bad state: "+this.a},
n:{
eL:function(a){return new P.d4(a)}}},
he:{"^":"X;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.c3(z))+"."},
n:{
aR:function(a){return new P.he(a)}}},
ir:{"^":"a;",
i:function(a){return"Out of Memory"},
$isX:1},
eK:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isX:1},
hh:{"^":"X;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fl:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hC:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bn(x,0,75)+"..."
return y+"\n"+x}},
bN:{"^":"a;"},
y:{"^":"ab;"},
"+int":0,
k:{"^":"a;$ti",
cW:["eX",function(a,b){var z=H.Z(this,"k",0)
return new H.dn(this,H.j(b,{func:1,ret:P.I,args:[z]}),[z])}],
gq:function(a){var z,y
z=this.gN(this)
for(y=0;z.v();)++y
return y},
gaF:function(a){var z,y
z=this.gN(this)
if(!z.v())throw H.h(H.cS())
y=z.gF()
if(z.v())throw H.h(H.hP())
return y},
a7:function(a,b){var z,y,x
if(b<0)H.p(P.a8(b,0,null,"index",null))
for(z=this.gN(this),y=0;z.v();){x=z.gF()
if(b===y)return x;++y}throw H.h(P.b_(b,this,"index",null,y))},
i:function(a){return P.hO(this,"(",")")}},
aT:{"^":"a;$ti"},
b:{"^":"a;$ti",$isk:1},
"+List":0,
J:{"^":"a;",
ga_:function(a){return P.a.prototype.ga_.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ab:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
ga_:function(a){return H.bw(this)},
i:function(a){return"Instance of '"+H.b5(this)+"'"},
toString:function(){return this.i(this)}},
aI:{"^":"a;"},
n:{"^":"a;",$iset:1},
"+String":0,
bx:{"^":"a;aK:a<",
gq:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
eM:function(a,b,c){var z=J.bi(b)
if(!z.v())return a
if(c.length===0){do a+=H.f(z.gF())
while(z.v())}else{a+=H.f(z.gF())
for(;z.v();)a=a+c+H.f(z.gF())}return a}}}}],["","",,W,{"^":"",
dK:function(a){var z=document.createElement("a")
return z},
cK:function(a,b){var z=document.createElement("canvas")
return z},
hr:function(a,b,c){var z,y
z=document.body
y=(z&&C.n).al(z,a,b,c)
y.toString
z=W.A
z=new H.dn(new W.ai(y),H.j(new W.hs(),{func:1,ret:P.I,args:[z]}),[z])
return H.e(z.gaF(z),"$isP")},
ht:function(a){H.e(a,"$isc4")
return"wheel"},
bm:function(a){var z,y,x
z="element tag unavailable"
try{y=J.h_(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ac(x)}return z},
cn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fp:function(a,b,c,d){var z,y
z=W.cn(W.cn(W.cn(W.cn(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fH:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.N
if(z===C.l)return a
return z.dP(a,b)},
a1:{"^":"P;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
h2:{"^":"a1;",
i:function(a){return String(a)},
$ish2:1,
"%":"HTMLAnchorElement"},
lu:{"^":"a1;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
dM:{"^":"a1;",$isdM:1,"%":"HTMLBaseElement"},
bY:{"^":"a1;",$isbY:1,"%":"HTMLBodyElement"},
cJ:{"^":"a1;",
bT:function(a,b,c){if(c!=null)return this.fN(a,b,P.kX(c,null))
return this.fO(a,b)},
eH:function(a,b){return this.bT(a,b,null)},
fN:function(a,b,c){return a.getContext(b,c)},
fO:function(a,b){return a.getContext(b)},
$iscJ:1,
$isdR:1,
"%":"HTMLCanvasElement"},
cL:{"^":"G;",
fP:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
j_:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$iscL:1,
"%":"CanvasRenderingContext2D"},
lx:{"^":"A;0q:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lz:{"^":"k_;0q:length=",
eK:function(a,b){var z=this.fQ(a,this.fu(a,b))
return z==null?"":z},
fu:function(a,b){var z,y
z=$.$get$dW()
y=z[b]
if(typeof y==="string")return y
y=this.hT(a,b)
z[b]=y
return y},
hT:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hl()+b
if(z in a)return z
return b},
fQ:function(a,b){return a.getPropertyValue(b)},
gcr:function(a){return a.bottom},
gba:function(a){return a.height},
gaV:function(a){return a.left},
gbe:function(a){return a.right},
gbi:function(a){return a.top},
gbk:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hg:{"^":"a;",
gaV:function(a){return this.eK(a,"left")}},
aS:{"^":"a1;",$isaS:1,"%":"HTMLDivElement"},
hm:{"^":"A;",
iy:function(a,b){return a.adoptNode(b)},
eI:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
lA:{"^":"G;",
i:function(a){return String(a)},
"%":"DOMException"},
hn:{"^":"G;",
iQ:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
ho:{"^":"G;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bK(b,"$isaH",[P.ab],"$asaH"))return!1
z=J.a5(b)
return a.left===z.gaV(b)&&a.top===z.gbi(b)&&a.width===z.gbk(b)&&a.height===z.gba(b)},
ga_:function(a){return W.fp(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcr:function(a){return a.bottom},
gba:function(a){return a.height},
gaV:function(a){return a.left},
gbe:function(a){return a.right},
gbi:function(a){return a.top},
gbk:function(a){return a.width},
$isaH:1,
$asaH:function(){return[P.ab]},
"%":";DOMRectReadOnly"},
jZ:{"^":"ca;dr:a<,b",
gq:function(a){return this.b.length},
l:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.l(z,b)
return H.e(z[b],"$isP")},
h:function(a,b){J.dI(this.a,b)
return b},
gN:function(a){var z=this.jK(this)
return new J.ak(z,z.length,0,[H.v(z,0)])},
$asT:function(){return[W.P]},
$ask:function(){return[W.P]},
$asb:function(){return[W.P]}},
P:{"^":"A;0jF:tagName=",
giB:function(a){return new W.k0(a)},
gdS:function(a){return new W.jZ(a,a.children)},
gdU:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.ap()
if(x<0)x=-x*0
if(typeof w!=="number")return w.ap()
if(w<0)w=-w*0
return new P.aH(z,y,x,w,[P.ab])},
i:function(a){return a.localName},
al:["bX",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.e5
if(z==null){z=H.c([],[W.aA])
y=new W.eq(z)
C.a.h(z,W.fn(null))
C.a.h(z,W.fw())
$.e5=y
d=y}else d=z
z=$.e4
if(z==null){z=new W.fB(d)
$.e4=z
c=z}else{z.a=d
c=z}}if($.aF==null){z=document
y=z.implementation
y=(y&&C.J).iQ(y,"")
$.aF=y
$.cP=y.createRange()
y=$.aF
y.toString
y=y.createElement("base")
H.e(y,"$isdM")
y.href=z.baseURI
z=$.aF.head;(z&&C.L).C(z,y)}z=$.aF
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$isbY")}z=$.aF
if(!!this.$isbY)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aF.body;(z&&C.n).C(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.T(C.X,a.tagName)){z=$.cP;(z&&C.E).eQ(z,x)
z=$.cP
w=(z&&C.E).iO(z,b)}else{x.innerHTML=b
w=$.aF.createDocumentFragment()
for(z=J.a5(w);y=x.firstChild,y!=null;)z.C(w,y)}z=$.aF.body
if(x==null?z!=null:x!==z)J.dJ(x)
c.d1(w)
C.z.iy(document,w)
return w},function(a,b,c){return this.al(a,b,c,null)},"iP",null,null,"gku",5,5,null],
eS:function(a,b,c,d){a.textContent=null
this.C(a,this.al(a,b,c,d))},
eR:function(a,b){return this.eS(a,b,null,null)},
b_:function(a,b){return a.getAttribute(b)},
hw:function(a,b){return a.removeAttribute(b)},
$isP:1,
"%":";Element"},
hs:{"^":"t:25;",
$1:function(a){return!!J.O(H.e(a,"$isA")).$isP}},
a3:{"^":"G;",$isa3:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
c4:{"^":"G;",
fo:function(a,b,c,d){return a.addEventListener(b,H.bd(H.j(c,{func:1,args:[W.a3]}),1),!1)},
$isc4:1,
"%":";EventTarget"},
lB:{"^":"a1;0q:length=","%":"HTMLFormElement"},
hH:{"^":"a1;","%":"HTMLHeadElement"},
hI:{"^":"kg;",
gq:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.b_(b,a,null,null,null))
return a[b]},
a7:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isan:1,
$asan:function(){return[W.A]},
$asT:function(){return[W.A]},
$isk:1,
$ask:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]},
$ishI:1,
$asav:function(){return[W.A]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hJ:{"^":"hm;","%":"HTMLDocument"},
c6:{"^":"G;0dW:data=",$isc6:1,"%":"ImageData"},
e9:{"^":"a1;",$ise9:1,$isdR:1,"%":"HTMLImageElement"},
bq:{"^":"dd;",$isbq:1,"%":"KeyboardEvent"},
i3:{"^":"G;",
i:function(a){return String(a)},
$isi3:1,
"%":"Location"},
ii:{"^":"a1;","%":"HTMLAudioElement;HTMLMediaElement"},
ap:{"^":"dd;",$isap:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ai:{"^":"ca;a",
gaF:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.h(P.eL("No elements"))
if(y>1)throw H.h(P.eL("More than one element"))
return z.firstChild},
a6:function(a,b){var z,y,x,w,v
H.i(b,"$isk",[W.A],"$ask")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.a5(y),v=0;v<x;++v)w.C(y,z.firstChild)
return},
gN:function(a){var z=this.a.childNodes
return new W.e7(z,z.length,-1,[H.cw(C.Z,z,"av",0)])},
gq:function(a){return this.a.childNodes.length},
l:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.l(z,b)
return z[b]},
$asT:function(){return[W.A]},
$ask:function(){return[W.A]},
$asb:function(){return[W.A]}},
A:{"^":"c4;0jv:previousSibling=",
jx:function(a){var z=a.parentNode
if(z!=null)J.bX(z,a)},
i:function(a){var z=a.nodeValue
return z==null?this.eW(a):z},
C:function(a,b){return a.appendChild(b)},
hx:function(a,b){return a.removeChild(b)},
$isA:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
im:{"^":"km;",
gq:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.b_(b,a,null,null,null))
return a[b]},
a7:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isan:1,
$asan:function(){return[W.A]},
$asT:function(){return[W.A]},
$isk:1,
$ask:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]},
$asav:function(){return[W.A]},
"%":"NodeList|RadioNodeList"},
iF:{"^":"G;",
iO:function(a,b){return a.createContextualFragment(b)},
eQ:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lK:{"^":"a1;0q:length=","%":"HTMLSelectElement"},
jb:{"^":"a1;","%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
jc:{"^":"a1;",
al:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bX(a,b,c,d)
z=W.hr("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ai(y).a6(0,new W.ai(z))
return y},
"%":"HTMLTableElement"},
jd:{"^":"a1;",
al:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bX(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.p.al(z.createElement("table"),b,c,d)
z.toString
z=new W.ai(z)
x=z.gaF(z)
x.toString
z=new W.ai(x)
w=z.gaF(z)
y.toString
w.toString
new W.ai(y).a6(0,new W.ai(w))
return y},
"%":"HTMLTableRowElement"},
lM:{"^":"a1;",
al:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bX(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.p.al(z.createElement("table"),b,c,d)
z.toString
z=new W.ai(z)
x=z.gaF(z)
y.toString
x.toString
new W.ai(y).a6(0,new W.ai(x))
return y},
"%":"HTMLTableSectionElement"},
eO:{"^":"a1;",$iseO:1,"%":"HTMLTemplateElement"},
bz:{"^":"G;",$isbz:1,"%":"Touch"},
b7:{"^":"dd;",$isb7:1,"%":"TouchEvent"},
lO:{"^":"kE;",
gq:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.b_(b,a,null,null,null))
return a[b]},
a7:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isan:1,
$asan:function(){return[W.bz]},
$asT:function(){return[W.bz]},
$isk:1,
$ask:function(){return[W.bz]},
$isb:1,
$asb:function(){return[W.bz]},
$asav:function(){return[W.bz]},
"%":"TouchList"},
dd:{"^":"a3;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lS:{"^":"ii;",$isdR:1,"%":"HTMLVideoElement"},
bC:{"^":"ap;",
giW:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.aa("deltaY is not supported"))},
giV:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.aa("deltaX is not supported"))},
$isbC:1,
"%":"WheelEvent"},
jS:{"^":"c4;",
hA:function(a,b){return a.requestAnimationFrame(H.bd(H.j(b,{func:1,ret:-1,args:[P.ab]}),1))},
fG:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fk:{"^":"A;",$isfk:1,"%":"Attr"},
lX:{"^":"ho;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bK(b,"$isaH",[P.ab],"$asaH"))return!1
z=J.a5(b)
return a.left===z.gaV(b)&&a.top===z.gbi(b)&&a.width===z.gbk(b)&&a.height===z.gba(b)},
ga_:function(a){return W.fp(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gba:function(a){return a.height},
gbk:function(a){return a.width},
"%":"ClientRect|DOMRect"},
m0:{"^":"kJ;",
gq:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.b_(b,a,null,null,null))
return a[b]},
a7:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isan:1,
$asan:function(){return[W.A]},
$asT:function(){return[W.A]},
$isk:1,
$ask:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]},
$asav:function(){return[W.A]},
"%":"MozNamedAttrMap|NamedNodeMap"},
jY:{"^":"ej;dr:a<",
a3:function(a,b){var z,y,x,w,v,u
H.j(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=this.gaA(),y=z.length,x=this.a,w=J.a5(x),v=0;v<z.length;z.length===y||(0,H.x)(z),++v){u=z[v]
b.$2(u,w.b_(x,u))}},
gaA:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.n])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.l(z,w)
v=H.e(z[w],"$isfk")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$ascc:function(){return[P.n,P.n]},
$asae:function(){return[P.n,P.n]}},
k0:{"^":"jY;a",
l:function(a,b){return J.cD(this.a,H.F(b))},
gq:function(a){return this.gaA().length}},
k1:{"^":"j6;a,b,c,$ti"},
lY:{"^":"k1;a,b,c,$ti"},
k2:{"^":"d5;a,b,c,d,e,$ti",n:{
W:function(a,b,c,d,e){var z,y
z=W.fH(new W.k3(c),W.a3)
y=z!=null
if(y&&!0){H.j(z,{func:1,args:[W.a3]})
if(y)J.fX(a,b,z,!1)}return new W.k2(0,a,b,z,!1,[e])}}},
k3:{"^":"t:27;a",
$1:function(a){return this.a.$1(H.e(a,"$isa3"))}},
bV:{"^":"a;a",
f9:function(a){var z,y
z=$.$get$dq()
if(z.a===0){for(y=0;y<262;++y)z.X(0,C.W[y],W.l5())
for(y=0;y<12;++y)z.X(0,C.u[y],W.l6())}},
aQ:function(a){return $.$get$fo().T(0,W.bm(a))},
aw:function(a,b,c){var z,y,x
z=W.bm(a)
y=$.$get$dq()
x=y.l(0,H.f(z)+"::"+b)
if(x==null)x=y.l(0,"*::"+b)
if(x==null)return!1
return H.dw(x.$4(a,b,c,this))},
$isaA:1,
n:{
fn:function(a){var z,y
z=W.dK(null)
y=window.location
z=new W.bV(new W.ks(z,y))
z.f9(a)
return z},
lZ:[function(a,b,c,d){H.e(a,"$isP")
H.F(b)
H.F(c)
H.e(d,"$isbV")
return!0},"$4","l5",16,0,26],
m_:[function(a,b,c,d){var z,y,x
H.e(a,"$isP")
H.F(b)
H.F(c)
z=H.e(d,"$isbV").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","l6",16,0,26]}},
av:{"^":"a;$ti",
gN:function(a){return new W.e7(a,this.gq(a),-1,[H.cw(this,a,"av",0)])}},
eq:{"^":"a;a",
aQ:function(a){return C.a.dN(this.a,new W.ip(a))},
aw:function(a,b,c){return C.a.dN(this.a,new W.io(a,b,c))},
$isaA:1},
ip:{"^":"t:12;a",
$1:function(a){return H.e(a,"$isaA").aQ(this.a)}},
io:{"^":"t:12;a,b,c",
$1:function(a){return H.e(a,"$isaA").aw(this.a,this.b,this.c)}},
kt:{"^":"a;",
fi:function(a,b,c,d){var z,y,x
this.a.a6(0,c)
z=b.cW(0,new W.ku())
y=b.cW(0,new W.kv())
this.b.a6(0,z)
x=this.c
x.a6(0,C.Y)
x.a6(0,y)},
aQ:function(a){return this.a.T(0,W.bm(a))},
aw:["f_",function(a,b,c){var z,y
z=W.bm(a)
y=this.c
if(y.T(0,H.f(z)+"::"+b))return this.d.iz(c)
else if(y.T(0,"*::"+b))return this.d.iz(c)
else{y=this.b
if(y.T(0,H.f(z)+"::"+b))return!0
else if(y.T(0,"*::"+b))return!0
else if(y.T(0,H.f(z)+"::*"))return!0
else if(y.T(0,"*::*"))return!0}return!1}],
$isaA:1},
ku:{"^":"t:11;",
$1:function(a){return!C.a.T(C.u,H.F(a))}},
kv:{"^":"t:11;",
$1:function(a){return C.a.T(C.u,H.F(a))}},
kx:{"^":"kt;e,a,b,c,d",
aw:function(a,b,c){if(this.f_(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cD(a,"template")==="")return this.e.T(0,b)
return!1},
n:{
fw:function(){var z,y,x,w,v
z=P.n
y=P.eh(C.t,z)
x=H.v(C.t,0)
w=H.j(new W.ky(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.kx(y,P.bS(null,null,null,z),P.bS(null,null,null,z),P.bS(null,null,null,z),null)
y.fi(null,new H.i8(C.t,w,[x,z]),v,null)
return y}}},
ky:{"^":"t:28;",
$1:function(a){return"TEMPLATE::"+H.f(H.F(a))}},
kw:{"^":"a;",
aQ:function(a){var z=J.O(a)
if(!!z.$iseF)return!1
z=!!z.$isd7
if(z&&W.bm(a)==="foreignObject")return!1
if(z)return!0
return!1},
aw:function(a,b,c){if(b==="is"||C.i.bW(b,"on"))return!1
return this.aQ(a)},
$isaA:1},
e7:{"^":"a;a,b,c,0d,$ti",
sdt:function(a){this.d=H.z(a,H.v(this,0))},
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdt(J.fW(this.a,z))
this.c=z
return!0}this.sdt(null)
this.c=y
return!1},
gF:function(){return this.d},
$isaT:1},
aA:{"^":"a;"},
ks:{"^":"a;a,b",$islR:1},
fB:{"^":"a;a",
d1:function(a){new W.kG(this).$2(a,null)},
b6:function(a,b){if(b==null)J.dJ(a)
else J.bX(b,a)},
hG:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fY(a)
x=J.cD(y.gdr(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ac(t)}v="element unprintable"
try{v=J.a7(a)}catch(t){H.ac(t)}try{u=W.bm(a)
this.hF(H.e(a,"$isP"),b,z,v,u,H.e(y,"$isae"),H.F(x))}catch(t){if(H.ac(t) instanceof P.aE)throw t
else{this.b6(a,b)
window
s="Removing corrupted element "+H.f(v)
if(typeof console!="undefined")window.console.warn(s)}}},
hF:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.b6(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aQ(a)){this.b6(a,b)
window
z="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aw(a,"is",g)){this.b6(a,b)
window
z="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaA()
y=H.c(z.slice(0),[H.v(z,0)])
for(x=f.gaA().length-1,z=f.a,w=J.a5(z);x>=0;--x){if(x>=y.length)return H.l(y,x)
v=y[x]
if(!this.a.aw(a,J.h1(v),w.b_(z,v))){window
u="Removing disallowed attribute <"+H.f(e)+" "+v+'="'+H.f(w.b_(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.b_(z,v)
w.hw(z,v)}}if(!!J.O(a).$iseO)this.d1(a.content)},
$islJ:1},
kG:{"^":"t:29;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.hG(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b6(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fZ(z)}catch(w){H.ac(w)
v=H.e(z,"$isA")
if(x){u=v.parentNode
if(u!=null)J.bX(u,v)}else J.bX(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isA")}}},
k_:{"^":"G+hg;"},
kf:{"^":"G+T;"},
kg:{"^":"kf+av;"},
kl:{"^":"G+T;"},
km:{"^":"kl+av;"},
kD:{"^":"G+T;"},
kE:{"^":"kD+av;"},
kI:{"^":"G+T;"},
kJ:{"^":"kI+av;"}}],["","",,P,{"^":"",
l_:function(a){var z,y
z=J.O(a)
if(!!z.$isc6){y=z.gdW(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fy(a.data,a.height,a.width)},
kZ:function(a){if(a instanceof P.fy)return{data:a.a,height:a.b,width:a.c}
return a},
kX:function(a,b){var z={}
a.a3(0,new P.kY(z))
return z},
e1:function(){var z=$.e0
if(z==null){z=J.cB(window.navigator.userAgent,"Opera",0)
$.e0=z}return z},
hl:function(){var z,y
z=$.dY
if(z!=null)return z
y=$.dZ
if(y==null){y=J.cB(window.navigator.userAgent,"Firefox",0)
$.dZ=y}if(y)z="-moz-"
else{y=$.e_
if(y==null){y=!P.e1()&&J.cB(window.navigator.userAgent,"Trident/",0)
$.e_=y}if(y)z="-ms-"
else z=P.e1()?"-o-":"-webkit-"}$.dY=z
return z},
fy:{"^":"a;dW:a>,b,c",$isc6:1},
kY:{"^":"t:17;a",
$2:function(a,b){this.a[a]=b}},
hz:{"^":"ca;a,b",
gc6:function(){var z,y,x
z=this.b
y=H.Z(z,"T",0)
x=W.P
return new H.i6(new H.dn(z,H.j(new P.hA(),{func:1,ret:P.I,args:[y]}),[y]),H.j(new P.hB(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){J.dI(this.b.a,b)},
gq:function(a){return J.aZ(this.gc6().a)},
l:function(a,b){var z=this.gc6()
return z.b.$1(J.cC(z.a,b))},
gN:function(a){var z=P.i2(this.gc6(),!1,W.P)
return new J.ak(z,z.length,0,[H.v(z,0)])},
$asT:function(){return[W.P]},
$ask:function(){return[W.P]},
$asb:function(){return[W.P]}},
hA:{"^":"t:25;",
$1:function(a){return!!J.O(H.e(a,"$isA")).$isP}},
hB:{"^":"t:30;",
$1:function(a){return H.d(H.e(a,"$isA"),"$isP")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
co:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kh:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kn:{"^":"a;$ti",
gbe:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.z(z+this.c,H.v(this,0))},
gcr:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.z(z+this.d,H.v(this,0))},
i:function(a){return"Rectangle ("+H.f(this.a)+", "+H.f(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bK(b,"$isaH",[P.ab],"$asaH"))return!1
z=this.a
y=J.a5(b)
x=y.gaV(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbi(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.v(this,0)
if(H.z(z+this.c,w)===y.gbe(b)){if(typeof x!=="number")return x.G()
z=H.z(x+this.d,w)===y.gcr(b)}else z=!1}else z=!1}else z=!1
return z},
ga_:function(a){var z,y,x,w,v
z=this.a
y=J.aY(z)
x=this.b
w=J.aY(x)
if(typeof z!=="number")return z.G()
v=H.v(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.z(x+this.d,v)
return P.kh(P.co(P.co(P.co(P.co(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aH:{"^":"kn;aV:a>,bi:b>,bk:c>,ba:d>,$ti"}}],["","",,P,{"^":"",eF:{"^":"d7;",$iseF:1,"%":"SVGScriptElement"},d7:{"^":"P;",
gdS:function(a){return new P.hz(a,new W.ai(a))},
al:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aA])
C.a.h(z,W.fn(null))
C.a.h(z,W.fw())
C.a.h(z,new W.kw())
c=new W.fB(new W.eq(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.n).iP(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ai(w)
u=z.gaF(z)
for(z=J.a5(v);x=u.firstChild,x!=null;)z.C(v,x)
return v},
$isd7:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",h5:{"^":"G;",$ish5:1,"%":"WebGLBuffer"},hD:{"^":"G;",$ishD:1,"%":"WebGLFramebuffer"},iE:{"^":"G;",$isiE:1,"%":"WebGLProgram"},d1:{"^":"G;",
cm:function(a,b){return a.activeTexture(b)},
dO:function(a,b,c){return a.attachShader(b,c)},
ar:function(a,b,c){return a.bindBuffer(b,c)},
iD:function(a,b,c){return a.bindFramebuffer(b,c)},
ax:function(a,b,c){return a.bindTexture(b,c)},
iE:function(a,b,c){return a.blendFunc(b,c)},
dQ:function(a,b,c,d){return a.bufferData(b,c,d)},
iG:function(a,b){return a.clear(b)},
iH:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
iI:function(a,b){return a.clearDepth(b)},
iJ:function(a,b){return a.compileShader(b)},
iR:function(a,b){return a.createShader(b)},
iT:function(a,b){return a.deleteProgram(b)},
iU:function(a,b){return a.deleteShader(b)},
iX:function(a,b){return a.depthFunc(b)},
iY:function(a,b){return a.disable(b)},
dY:function(a,b){return a.disableVertexAttribArray(b)},
iZ:function(a,b,c,d,e){return a.drawElements(b,c,H.a_(d),H.a_(e))},
cB:function(a,b){return a.enable(b)},
e_:function(a,b){return a.enableVertexAttribArray(b)},
eD:function(a,b,c){return a.getActiveAttrib(b,c)},
eE:function(a,b,c){return a.getActiveUniform(b,c)},
eF:function(a,b,c){return a.getAttribLocation(b,c)},
d0:function(a,b){return a.getParameter(b)},
eJ:function(a,b){return a.getProgramInfoLog(b)},
bU:function(a,b,c){return a.getProgramParameter(b,c)},
eL:function(a,b){return a.getShaderInfoLog(b)},
eM:function(a,b,c){return a.getShaderParameter(b,c)},
eN:function(a,b,c){return a.getUniformLocation(b,c)},
jd:function(a,b){return a.linkProgram(b)},
ju:function(a,b,c){return a.pixelStorei(b,c)},
eT:function(a,b,c){return a.shaderSource(b,c)},
jH:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.O(g)
if(!!z.$isc6)y=!0
else y=!1
if(y){this.hV(a,b,c,d,e,f,P.kZ(g))
return}if(!!z.$ise9)z=!0
else z=!1
if(z){this.hW(a,b,c,d,e,f,g)
return}throw H.h(P.h3("Incorrect number or type of arguments"))},
jG:function(a,b,c,d,e,f,g){return this.jH(a,b,c,d,e,f,g,null,null,null)},
hV:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
hW:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bR:function(a,b,c,d){return a.texParameteri(b,c,d)},
H:function(a,b,c){return a.uniform1f(b,c)},
M:function(a,b,c){return a.uniform1i(b,c)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ez:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eA:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cV:function(a,b){return a.useProgram(b)},
jN:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jO:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isd1:1,
"%":"WebGLRenderingContext"},iU:{"^":"G;",$isiU:1,"%":"WebGLShader"},je:{"^":"G;",$isje:1,"%":"WebGLTexture"},jw:{"^":"G;",$isjw:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",R:{"^":"a;0a,0b,0c,0d,$ti",
sfV:function(a){this.a=H.i(a,"$isb",[H.Z(this,"R",0)],"$asb")},
sdB:function(a){this.b=H.j(a,{func:1,ret:P.I,args:[[P.k,H.Z(this,"R",0)]]})},
sdv:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.y,[P.k,H.Z(this,"R",0)]]})},
sdC:function(a){this.d=H.j(a,{func:1,ret:-1,args:[P.y,[P.k,H.Z(this,"R",0)]]})},
bp:function(a){this.sfV(H.c([],[a]))
this.sdB(null)
this.sdv(null)
this.sdC(null)},
d2:function(a,b,c){var z=H.Z(this,"R",0)
H.j(b,{func:1,ret:P.I,args:[[P.k,z]]})
z={func:1,ret:-1,args:[P.y,[P.k,z]]}
H.j(a,z)
H.j(c,z)
this.sdB(b)
this.sdv(a)
this.sdC(c)},
b0:function(a,b){return this.d2(a,null,b)},
dA:function(a){var z
H.i(a,"$isk",[H.Z(this,"R",0)],"$ask")
z=this.b
if(z!=null)return z.$1(a)
return!0},
d8:function(a,b){var z
H.i(b,"$isk",[H.Z(this,"R",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gq:function(a){return this.a.length},
gN:function(a){var z=this.a
return new J.ak(z,z.length,0,[H.v(z,0)])},
a7:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.l(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.Z(this,"R",0)
H.z(b,z)
z=[z]
if(this.dA(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.d8(x,H.c([b],z))}},
a6:function(a,b){var z,y
H.i(b,"$isk",[H.Z(this,"R",0)],"$ask")
if(this.dA(b)){z=this.a
y=z.length
C.a.a6(z,b)
this.d8(y,b)}},
$isk:1,
n:{
cN:function(a){var z=new O.R([a])
z.bp(a)
return z}}},cY:{"^":"a;0a,0b",
sc8:function(a){this.a=H.i(a,"$isb",[V.ao],"$asb")},
gq:function(a){return this.a.length},
gp:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
f5:function(a){var z=this.b
if(!(z==null))z.D(a)},
aG:function(){return this.f5(null)},
gZ:function(){var z=this.a
if(z.length>0)return C.a.gbM(z)
else return V.b3()},
bP:function(a){var z=this.a
if(a==null)C.a.h(z,V.b3())
else C.a.h(z,a)
this.aG()},
aB:function(){var z=this.a
if(z.length>0){z.pop()
this.aG()}}}}],["","",,E,{"^":"",cF:{"^":"a;"},am:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0ai:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sf6:function(a,b){this.y=H.i(b,"$isR",[E.am],"$asR")},
sai:function(a){this.z=H.e(a,"$isbn")},
sbV:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gp().R(0,this.ger())
y=this.c
if(y!=null)y.gp().h(0,this.ger())
x=new D.D("shape",z,this.c,this,[F.eH])
x.b=!0
this.aX(x)}},
ao:function(a){var z
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.v(z,0)]);z.v();)z.d.ao(a)},
aa:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gZ())
z.aG()
a.cS(this.f)
z=a.dy
y=(z&&C.a).gbM(z)
if(y!=null&&this.d!=null)y.eu(a,this)
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.v(z,0)]);z.v();)z.d.aa(a)
a.cR()
a.dx.aB()},
gp:function(){var z=this.z
if(z==null){z=D.C()
this.z=z}return z},
aX:function(a){var z=this.z
if(!(z==null))z.D(a)},
a4:function(){return this.aX(null)},
jl:[function(a){H.e(a,"$isu")
this.e=null
this.aX(a)},function(){return this.jl(null)},"kA","$1","$0","ger",0,2,0],
jj:[function(a){this.aX(H.e(a,"$isu"))},function(){return this.jj(null)},"ky","$1","$0","geq",0,2,0],
kx:[function(a,b){var z,y,x,w,v,u,t
H.i(b,"$isk",[E.am],"$ask")
for(z=b.length,y=this.geq(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gai()==null){t=new D.bn()
t.sac(null)
t.sb4(null)
t.c=null
t.d=0
u.sai(t)}t=u.gai()
t.toString
H.j(y,x)
if(t.a==null)t.sac(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a4()},"$2","gji",8,0,6],
kz:[function(a,b){var z,y
H.i(b,"$isk",[E.am],"$ask")
for(z=b.gN(b),y=this.geq();z.v();)z.gF().gp().R(0,y)
this.a4()},"$2","gjk",8,0,6],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaz:1,
n:{
e6:function(a,b,c,d,e,f){var z=new E.am()
z.a=d
z.b=!0
z.sf6(0,O.cN(E.am))
z.y.b0(z.gji(),z.gjk())
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
z.sbV(0,e)
return z}}},iK:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
shU:function(a){this.dy=H.i(a,"$isb",[O.by],"$asb")},
shP:function(a){this.fr=H.i(a,"$isae",[P.n,A.cg],"$asae")},
f2:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.al(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cY()
y=[V.ao]
z.sc8(H.c([],y))
z.b=null
z.gp().h(0,new E.iM(this))
this.cy=z
z=new O.cY()
z.sc8(H.c([],y))
z.b=null
z.gp().h(0,new E.iN(this))
this.db=z
z=new O.cY()
z.sc8(H.c([],y))
z.b=null
z.gp().h(0,new E.iO(this))
this.dx=z
this.shU(H.c([],[O.by]))
z=this.dy;(z&&C.a).h(z,null)
this.shP(new H.b1(0,0,[P.n,A.cg]))},
gjw:function(){var z=this.z
if(z==null){z=this.cy.gZ().B(0,this.db.gZ())
this.z=z}return z},
cS:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbM(z):a;(z&&C.a).h(z,y)},
cR:function(){var z=this.dy
if(z.length>1)z.pop()},
dM:function(a){var z=a.b
if(z.length===0)throw H.h(P.o("May not cache a shader with no name."))
if(this.fr.dV(z))throw H.h(P.o('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.X(0,z,a)},
n:{
iL:function(a,b){var z=new E.iK(a,b)
z.f2(a,b)
return z}}},iM:{"^":"t:7;a",
$1:function(a){var z
H.e(a,"$isu")
z=this.a
z.z=null
z.ch=null}},iN:{"^":"t:7;a",
$1:function(a){var z
H.e(a,"$isu")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iO:{"^":"t:7;a",
$1:function(a){var z
H.e(a,"$isu")
z=this.a
z.ch=null
z.cx=null}},jh:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0ai:x<,0y,0z,0Q,0ch,0cx,0cy",
sai:function(a){this.x=H.e(a,"$isbn")},
f8:[function(a){H.e(a,"$isu")
this.jA()},function(){return this.f8(null)},"f7","$1","$0","gd9",0,2,0],
gj6:function(){var z,y,x
z=Date.now()
y=C.h.a2(P.e2(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.al(z,!1)
return x/y},
dE:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.B()
if(typeof z!=="number")return H.B(z)
x=C.k.cI(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.B()
w=C.k.cI(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.eT(C.q,this.gjz())}},
jA:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.j(new E.jj(this),{func:1,ret:-1,args:[P.ab]})
C.G.fG(z)
C.G.hA(z,W.fH(y,P.ab))}},"$0","gjz",0,0,3],
jy:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dE()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.al(w,!1)
x.y=P.e2(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sq(w.a,0)
w.aG()
w=x.db
C.a.sq(w.a,0)
w.aG()
w=x.dx
C.a.sq(w.a,0)
w.aG()
w=x.dy;(w&&C.a).sq(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aa(this.e)}x=this.z
if(!(x==null))x.D(null)}catch(v){z=H.ac(v)
y=H.bf(v)
P.dG("Error: "+H.f(z))
P.dG("Stack: "+H.f(y))
throw H.h(z)}},
n:{
ji:function(a,b,c,d,e){var z,y,x,w
z=J.O(a)
if(!!z.$iscJ)return E.eS(a,!0,!0,!0,!1)
y=W.cK(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdS(a).h(0,y)
w=E.eS(y,!0,!0,!0,!1)
w.a=a
return w},
eS:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jh()
y=P.i0(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.o.bT(a,"webgl",y)
x=H.e(x==null?C.o.bT(a,"experimental-webgl",y):x,"$isd1")
if(x==null)H.p(P.o("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iL(x,a)
w=new T.jf(x)
w.b=H.a_((x&&C.b).d0(x,3379))
w.c=H.a_(C.b.d0(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.jC(a)
v=new X.hV()
v.c=new X.ay(!1,!1,!1)
v.shu(P.bS(null,null,null,P.y))
w.b=v
v=new X.ij(w)
v.f=0
v.r=V.aG()
v.x=V.aG()
v.Q=1
v.ch=1
w.c=v
v=new X.i4(w)
v.r=0
v.x=V.aG()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jm(w)
v.e=0
v.f=V.aG()
v.r=V.aG()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sfH(H.c([],[[P.d5,P.a]]))
v=w.z
u=document
t=W.ap
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.W(u,"contextmenu",H.j(w.gh8(),s),!1,t))
v=w.z
r=W.a3
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.W(a,"focus",H.j(w.ghb(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.W(a,"blur",H.j(w.gh5(),q),!1,r))
v=w.z
p=W.bq
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.W(u,"keyup",H.j(w.ghd(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.W(u,"keydown",H.j(w.ghc(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.W(a,"mousedown",H.j(w.ghg(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mouseup",H.j(w.ghi(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mousemove",H.j(w.ghh(),s),!1,t))
p=w.z
o=W.bC;(p&&C.a).h(p,W.W(a,H.F(W.ht(a)),H.j(w.ghj(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.W(u,"mousemove",H.j(w.gh9(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.W(u,"mouseup",H.j(w.gha(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.W(u,"pointerlockchange",H.j(w.ghk(),q),!1,r))
r=w.z
q=W.b7
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.W(a,"touchstart",H.j(w.ghs(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchend",H.j(w.ghq(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchmove",H.j(w.ghr(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.al(Date.now(),!1)
z.cy=0
z.dE()
return z}}},jj:{"^":"t:42;a",
$1:function(a){var z
H.lk(a)
z=this.a
if(z.ch){z.ch=!1
z.jy()}}}}],["","",,Z,{"^":"",fh:{"^":"a;a,b",$islv:1,n:{
dm:function(a,b,c){var z
H.i(c,"$isb",[P.y],"$asb")
z=a.createBuffer()
C.b.ar(a,b,z)
C.b.dQ(a,b,new Int16Array(H.bG(c)),35044)
C.b.ar(a,b,null)
return new Z.fh(b,z)}}},dP:{"^":"cF;a,b,c,d,e",
Y:function(a){var z,y,x
try{y=a.a
C.b.e_(y,this.e)
C.b.jN(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.ac(x)
y=P.o('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.f(z))
throw H.h(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.f(this.e)+"]"}},fi:{"^":"a;a",$islw:1},cI:{"^":"a;a,0b,c,d",
sfR:function(a){this.b=H.i(a,"$isb",[Z.bO],"$asb")},
az:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
Y:function(a){var z,y
z=this.a
C.b.ar(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].Y(a)},
aE:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.dY(x,z[y].e)
C.b.ar(x,this.a.a,null)},
aa:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.l(w,x)
v=w[x]
w=v.c
u=w.a
C.b.ar(y,u,w.b)
C.b.iZ(y,v.a,v.b,5123,0)
C.b.ar(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.n]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a7(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(y,", ")+"\nAttrs:   "+C.a.k(u,", ")},
$islN:1},bO:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b5(this.c)+"'")+"]"}},b8:{"^":"a;a",
gd4:function(a){var z,y
z=this.a
y=(z&$.$get$at().a)!==0?3:0
if((z&$.$get$aL().a)!==0)y+=3
if((z&$.$get$aK().a)!==0)y+=3
if((z&$.$get$aM().a)!==0)y+=2
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$bA().a)!==0)y+=3
if((z&$.$get$bB().a)!==0)y+=4
if((z&$.$get$b9().a)!==0)++y
return(z&$.$get$aJ().a)!==0?y+4:y},
iA:function(a){var z,y,x
z=$.$get$at()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b9()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fg()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b8))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.n])
y=this.a
if((y&$.$get$at().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aL().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aK().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aN().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bA().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bB().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b9().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.k(z,"|")},
n:{
ah:function(a){return new Z.b8(a)}}}}],["","",,D,{"^":"",dS:{"^":"a;"},bn:{"^":"a;0a,0b,0c,0d",
sac:function(a){this.a=H.i(a,"$isb",[{func:1,ret:-1,args:[D.u]}],"$asb")},
sb4:function(a){this.b=H.i(a,"$isb",[{func:1,ret:-1,args:[D.u]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.u]}
H.j(b,z)
if(this.a==null)this.sac(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
R:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[D.u]})
z=this.a
z=z==null?null:C.a.T(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).R(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.T(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).R(z,b)||y}return y},
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
return!0}if(!x)C.a.a3(y,new D.hx(z))
y=this.b
if(!(y==null))C.a.a3(y,new D.hy(z))
z=this.b
if(!(z==null))C.a.sq(z,0)
return!0},
j0:function(){return this.D(null)},
jB:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.D(y)}}},
aD:function(){return this.jB(!0,!1)},
n:{
C:function(){var z=new D.bn()
z.sac(null)
z.sb4(null)
z.c=null
z.d=0
return z}}},hx:{"^":"t:14;a",
$1:function(a){var z
H.j(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},hy:{"^":"t:14;a",
$1:function(a){var z
H.j(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},u:{"^":"a;a,0b"},bP:{"^":"u;c,d,a,0b,$ti"},bQ:{"^":"u;c,d,a,0b,$ti"},D:{"^":"u;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}}],["","",,X,{"^":"",dQ:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dQ))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},ee:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ee))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},hV:{"^":"a;0a,0b,0c,0d",
shu:function(a){this.d=H.i(a,"$iseG",[P.y],"$aseG")},
jr:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jn:function(a){this.c=a.b
this.d.R(0,a.a)
return!1}},ei:{"^":"cd;x,y,c,d,e,a,0b"},i4:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
b3:function(a,b){var z,y,x,w,v,u,t,s
z=new P.al(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.B()
v=b.b
u=this.ch
if(typeof v!=="number")return v.B()
t=new V.a2(y.a+x*w,y.b+v*u)
u=this.a.gaR()
s=new X.bs(a,V.aG(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cQ:function(a,b){this.r=a.a
return!1},
bc:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eP()
if(typeof z!=="number")return z.eB()
this.r=(z&~y)>>>0
return!1},
bb:function(a,b){var z=this.d
if(z==null)return!1
z.D(this.b3(a,b))
return!0},
js:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaR()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.B()
t=a.b
s=this.cy
if(typeof t!=="number")return t.B()
w=new X.cZ(new V.Q(v*u,t*s),y,x,new P.al(w,!1),this)
w.b=!0
z.D(w)
return!0},
hf:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.al(Date.now(),!1)
y=this.f
x=new X.ei(c,a,this.a.gaR(),b,z,this)
x.b=!0
y.D(x)
this.y=z
this.x=V.aG()}},ay:{"^":"a;a,b,c",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ay))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bs:{"^":"cd;x,y,z,Q,ch,c,d,e,a,0b"},ij:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c3:function(a,b,c){var z,y,x
z=new P.al(Date.now(),!1)
y=this.a.gaR()
x=new X.bs(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cQ:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.D(this.c3(a,b,!0))
return!0},
bc:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eP()
if(typeof z!=="number")return z.eB()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.D(this.c3(a,b,!0))
return!0},
bb:function(a,b){var z=this.d
if(z==null)return!1
z.D(this.c3(a,b,!1))
return!0},
jt:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaR()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.B()
u=a.b
t=this.ch
if(typeof u!=="number")return u.B()
x=new X.cZ(new V.Q(w*v,u*t),y,b,new P.al(x,!1),this)
x.b=!0
z.D(x)
return!0},
gdZ:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
gbS:function(){var z=this.c
if(z==null){z=D.C()
this.c=z}return z},
gep:function(){var z=this.d
if(z==null){z=D.C()
this.d=z}return z}},cZ:{"^":"cd;x,c,d,e,a,0b"},cd:{"^":"u;"},eW:{"^":"cd;x,y,z,Q,ch,c,d,e,a,0b"},jm:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
b3:function(a,b){var z,y,x,w
H.i(a,"$isb",[V.a2],"$asb")
z=new P.al(Date.now(),!1)
y=a.length>0?a[0]:V.aG()
x=this.a.gaR()
w=new X.eW(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
jq:function(a){var z
H.i(a,"$isb",[V.a2],"$asb")
z=this.b
if(z==null)return!1
z.D(this.b3(a,!0))
return!0},
jo:function(a){var z
H.i(a,"$isb",[V.a2],"$asb")
z=this.c
if(z==null)return!1
z.D(this.b3(a,!0))
return!0},
jp:function(a){var z
H.i(a,"$isb",[V.a2],"$asb")
z=this.d
if(z==null)return!1
z.D(this.b3(a,!1))
return!0}},jC:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sfH:function(a){this.z=H.i(a,"$isb",[[P.d5,P.a]],"$asb")},
gaR:function(){var z=this.a
return V.eD(0,0,C.o.gdU(z).c,C.o.gdU(z).d)},
dm:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ee(z,new X.ay(y,a.altKey,a.shiftKey))},
aP:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ay(y,a.altKey,a.shiftKey)},
cl:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ay(y,a.altKey,a.shiftKey)},
av:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.J()
v=z.top
if(typeof x!=="number")return x.J()
return new V.a2(y-w,x-v)},
b5:function(a){return new V.Q(a.movementX,a.movementY)},
cg:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.a2])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.k.an(u.pageX)
C.k.an(u.pageY)
s=z.left
C.k.an(u.pageX)
C.a.h(y,new V.a2(t-s,C.k.an(u.pageY)-z.top))}return y},
at:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dQ(z,new X.ay(y,a.altKey,a.shiftKey))},
c9:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.J()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.J()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
k8:[function(a){this.f=!0},"$1","ghb",4,0,9],
jZ:[function(a){this.f=!1},"$1","gh5",4,0,9],
k5:[function(a){H.e(a,"$isap")
if(this.f&&this.c9(a))a.preventDefault()},"$1","gh8",4,0,4],
ka:[function(a){var z
H.e(a,"$isbq")
if(!this.f)return
z=this.dm(a)
this.b.jr(z)},"$1","ghd",4,0,16],
k9:[function(a){var z
H.e(a,"$isbq")
if(!this.f)return
z=this.dm(a)
this.b.jn(z)},"$1","ghc",4,0,16],
kc:[function(a){var z,y,x,w
H.e(a,"$isap")
z=this.a
z.focus()
this.f=!0
this.aP(a)
if(this.x){y=this.at(a)
x=this.b5(a)
if(this.d.cQ(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.at(a)
w=this.av(a)
if(this.c.cQ(y,w))a.preventDefault()},"$1","ghg",4,0,4],
ke:[function(a){var z,y,x
H.e(a,"$isap")
this.aP(a)
z=this.at(a)
if(this.x){y=this.b5(a)
if(this.d.bc(z,y))a.preventDefault()
return}if(this.r)return
x=this.av(a)
if(this.c.bc(z,x))a.preventDefault()},"$1","ghi",4,0,4],
k7:[function(a){var z,y,x
H.e(a,"$isap")
if(!this.c9(a)){this.aP(a)
z=this.at(a)
if(this.x){y=this.b5(a)
if(this.d.bc(z,y))a.preventDefault()
return}if(this.r)return
x=this.av(a)
if(this.c.bc(z,x))a.preventDefault()}},"$1","gha",4,0,4],
kd:[function(a){var z,y,x
H.e(a,"$isap")
this.aP(a)
z=this.at(a)
if(this.x){y=this.b5(a)
if(this.d.bb(z,y))a.preventDefault()
return}if(this.r)return
x=this.av(a)
if(this.c.bb(z,x))a.preventDefault()},"$1","ghh",4,0,4],
k6:[function(a){var z,y,x
H.e(a,"$isap")
if(!this.c9(a)){this.aP(a)
z=this.at(a)
if(this.x){y=this.b5(a)
if(this.d.bb(z,y))a.preventDefault()
return}if(this.r)return
x=this.av(a)
if(this.c.bb(z,x))a.preventDefault()}},"$1","gh9",4,0,4],
kf:[function(a){var z,y
H.e(a,"$isbC")
this.aP(a)
z=new V.Q((a&&C.F).giV(a),C.F.giW(a)).w(0,180)
if(this.x){if(this.d.js(z))a.preventDefault()
return}if(this.r)return
y=this.av(a)
if(this.c.jt(z,y))a.preventDefault()},"$1","ghj",4,0,36],
kg:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.at(this.y)
x=this.av(this.y)
this.d.hf(y,x,z)}},"$1","ghk",4,0,9],
ko:[function(a){var z
H.e(a,"$isb7")
this.a.focus()
this.f=!0
this.cl(a)
z=this.cg(a)
if(this.e.jq(z))a.preventDefault()},"$1","ghs",4,0,10],
km:[function(a){var z
H.e(a,"$isb7")
this.cl(a)
z=this.cg(a)
if(this.e.jo(z))a.preventDefault()},"$1","ghq",4,0,10],
kn:[function(a){var z
H.e(a,"$isb7")
this.cl(a)
z=this.cg(a)
if(this.e.jp(z))a.preventDefault()},"$1","ghr",4,0,10]}}],["","",,D,{"^":"",c2:{"^":"a;0a,0b,0c,0d",
gp:function(){var z=this.d
if(z==null){z=D.C()
this.d=z}return z},
aH:[function(a){var z
H.e(a,"$isu")
z=this.d
if(!(z==null))z.D(a)},function(){return this.aH(null)},"jP","$1","$0","gfb",0,2,0],
$isY:1,
$isaz:1},Y:{"^":"a;",$isaz:1},hW:{"^":"R;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sfF:function(a){this.e=H.i(a,"$isb",[D.c2],"$asb")},
sht:function(a){this.f=H.i(a,"$isb",[D.ew],"$asb")},
shR:function(a){this.r=H.i(a,"$isb",[D.eJ],"$asb")},
si1:function(a){this.x=H.i(a,"$isb",[D.eP],"$asb")},
si2:function(a){this.y=H.i(a,"$isb",[D.eQ],"$asb")},
si3:function(a){this.z=H.i(a,"$isb",[D.eR],"$asb")},
gp:function(){var z=this.Q
if(z==null){z=D.C()
this.Q=z}return z},
aH:function(a){var z=this.Q
if(!(z==null))z.D(a)},
he:[function(a){var z
H.e(a,"$isu")
z=this.ch
if(!(z==null))z.D(a)},function(){return this.he(null)},"kb","$1","$0","gdz",0,2,0],
kh:[function(a){var z,y,x
H.i(a,"$isk",[D.Y],"$ask")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.fa(x))return!1}return!0},"$1","ghl",4,0,39],
jW:[function(a,b){var z,y,x,w,v,u,t,s
z=D.Y
H.i(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gdz(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.e(b[u],"$isY")
if(t instanceof D.c2)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bn()
s.sac(null)
s.sb4(null)
s.c=null
s.d=0
t.d=s}H.j(x,w)
if(s.a==null)s.sac(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.bP(a,b,this,[z])
z.b=!0
this.aH(z)},"$2","gh2",8,0,18],
kj:[function(a,b){var z,y,x,w
z=D.Y
H.i(b,"$isk",[z],"$ask")
for(y=b.gN(b),x=this.gdz();y.v();){w=y.gF()
C.a.R(this.e,w)
w.gp().R(0,x)}z=new D.bQ(a,b,this,[z])
z.b=!0
this.aH(z)},"$2","ghn",8,0,18],
fa:function(a){var z=C.a.T(this.e,a)
return z},
$ask:function(){return[D.Y]},
$asR:function(){return[D.Y]}},ew:{"^":"a;",$isY:1,$isaz:1},eJ:{"^":"a;",$isY:1,$isaz:1},eP:{"^":"a;",$isY:1,$isaz:1},eQ:{"^":"a;",$isY:1,$isaz:1},eR:{"^":"a;",$isY:1,$isaz:1}}],["","",,V,{"^":"",
ly:[function(a,b){if(typeof b!=="number")return b.J()
if(typeof a!=="number")return H.B(a)
return Math.abs(b-a)<=1e-9},"$2","ih",8,0,37],
lt:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.k.eO(a-b,z)
return(a<0?a+z:a)+b},
K:function(a,b,c){if(a==null)return C.i.af("null",c)
return C.i.af(C.k.ex($.m.$2(a,0)?0:a,b),c+b+1)},
be:function(a,b,c){var z,y,x,w,v,u
H.i(a,"$isb",[P.w],"$asb")
z=H.c([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.K(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.l(z,u)
C.a.X(z,u,C.i.af(z[u],x))}return z},
dF:function(a,b){return C.k.jJ(Math.pow(b,C.O.cI(Math.log(H.kW(a))/Math.log(b))))},
V:{"^":"a;a,b,c",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
aQ:{"^":"a;a,b,c,d",
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
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
en:{"^":"a;a,b,c,d,e,f,r,x,y",
ab:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.en))return!1
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
y=V.be(H.c([this.a,this.d,this.r],z),3,0)
x=V.be(H.c([this.b,this.e,this.x],z),3,0)
w=V.be(H.c([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.l(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.l(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.l(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.l(y,1)
s=" "+y[1]+", "
if(1>=u)return H.l(x,1)
s=s+x[1]+", "
if(1>=t)return H.l(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.l(y,2)
z=" "+y[2]+", "
if(2>=u)return H.l(x,2)
z=z+x[2]+", "
if(2>=t)return H.l(w,2)
return s+(z+w[2]+"]")}},
ao:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ab:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
cK:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.m.$2(a2,0))return V.b3()
a3=1/a2
a4=-w
a5=-i
return V.ax((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
B:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
return V.ax(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cU:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.L(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
bj:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.af(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
u:function(a,b){var z
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
i:function(a){return this.K()},
el:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.be(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.be(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.be(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.be(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.l(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.l(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.l(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.l(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.l(y,1)
q=q+y[1]+", "
if(1>=t)return H.l(x,1)
q=q+x[1]+", "
if(1>=s)return H.l(w,1)
q=q+w[1]+", "
if(1>=r)return H.l(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.l(y,2)
u=u+y[2]+", "
if(2>=t)return H.l(x,2)
u=u+x[2]+", "
if(2>=s)return H.l(w,2)
u=u+w[2]+", "
if(2>=r)return H.l(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.l(y,3)
q=q+y[3]+", "
if(3>=t)return H.l(x,3)
q=q+x[3]+", "
if(3>=s)return H.l(w,3)
q=q+w[3]+", "
if(3>=r)return H.l(v,3)
return u+(q+v[3]+"]")},
K:function(){return this.el("",3,0)},
A:function(a){return this.el(a,3,0)},
n:{
b3:function(){var z=$.ep
if(z==null){z=V.ax(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.ep=z}return z},
ax:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eo:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.w(0,Math.sqrt(c.E(c)))
y=b.b9(z)
x=y.w(0,Math.sqrt(y.E(y)))
w=z.b9(x)
v=new V.L(a.a,a.b,a.c)
u=x.O(0).E(v)
t=w.O(0).E(v)
s=z.O(0).E(v)
return V.ax(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
a2:{"^":"a;a,b",
J:function(a,b){return new V.a2(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"},
n:{
aG:function(){var z=$.ex
if(z==null){z=new V.a2(0,0)
$.ex=z}return z}}},
af:{"^":"a;a,b,c",
J:function(a,b){return new V.af(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.af))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"},
n:{
ey:function(){var z=$.bu
if(z==null){z=new V.af(0,0,0)
$.bu=z}return z}}},
bv:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bv))return!1
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
eC:{"^":"a;a,b,c,d",
ga9:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eC))return!1
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
n:{
eD:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eC(a,b,c,d)}}},
Q:{"^":"a;a,b",
jc:[function(a){return Math.sqrt(this.E(this))},"$0","gq",1,0,19],
E:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.B()
if(typeof y!=="number")return H.B(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.B()
if(typeof w!=="number")return H.B(w)
return z*y+x*w},
B:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
return new V.Q(z*b,y*b)},
w:function(a,b){var z,y
if($.m.$2(b,0)){z=$.f9
if(z==null){z=new V.Q(0,0)
$.f9=z}return z}z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.Q(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
L:{"^":"a;a,b,c",
jc:[function(a){return Math.sqrt(this.E(this))},"$0","gq",1,0,19],
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cL:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.L(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
b9:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.L(z*y-x*w,x*v-u*y,u*w-z*v)},
G:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.L(-this.a,-this.b,-this.c)},
w:function(a,b){if($.m.$2(b,0))return V.bU()
return new V.L(this.a/b,this.b/b,this.c/b)},
en:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"},
n:{
bU:function(){var z=$.fc
if(z==null){z=new V.L(0,0,0)
$.fc=z}return z},
fd:function(){var z=$.fb
if(z==null){z=new V.L(0,1,0)
$.fb=z}return z},
jI:function(){var z=$.cl
if(z==null){z=new V.L(0,0,1)
$.cl=z}return z}}}}],["","",,U,{"^":"",hc:{"^":"dS;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c_:function(a){var z=V.lt(a,this.c,this.b)
return z},
gp:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
P:function(a){var z=this.y
if(!(z==null))z.D(a)},
scX:function(a,b){},
scN:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c_(z)}z=new D.D("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.P(z)}},
scP:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c_(z)}z=new D.D("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.P(z)}},
sa8:function(a,b){var z,y
b=this.c_(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.D("location",y,b,this,[P.w])
z.b=!0
this.P(z)}},
scO:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.D("maximumVelocity",y,a,this,[P.w])
z.b=!0
this.P(z)}},
sS:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.D("velocity",x,a,this,[P.w])
z.b=!0
this.P(z)}},
scz:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.D("dampening",y,a,this,[P.w])
z.b=!0
this.P(z)}},
ao:function(a){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa8(0,this.d+y*a)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sS(y)}},
n:{
cO:function(){var z=new U.hc()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dU:{"^":"a6;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
aZ:function(a,b){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dU))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")},
n:{
dV:function(a){var z=new U.dU()
z.a=a
return z}}},e8:{"^":"R;0e,0f,0r,0a,0b,0c,0d",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
P:[function(a){var z
H.e(a,"$isu")
z=this.e
if(!(z==null))z.D(a)},function(){return this.P(null)},"ah","$1","$0","gaI",0,2,0],
jV:[function(a,b){var z,y,x,w,v,u,t,s
z=U.a6
H.i(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaI(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){s=t.gp()
s.toString
H.j(x,w)
if(s.a==null)s.sac(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.P(z)},"$2","gh1",8,0,20],
ki:[function(a,b){var z,y,x
z=U.a6
H.i(b,"$isk",[z],"$ask")
for(y=b.gN(b),x=this.gaI();y.v();)y.gF().gp().R(0,x)
z=new D.bQ(a,b,this,[z])
z.b=!0
this.P(z)},"$2","ghm",8,0,20],
aZ:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.ap()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ak(z,z.length,0,[H.v(z,0)]),x=null;z.v();){y=z.d
if(y!=null){w=y.aZ(a,b)
if(w!=null)x=x==null?w:w.B(0,x)}}this.f=x==null?V.b3():x
z=this.e
if(!(z==null))z.aD()}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e8))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.l(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.l(w,y)
if(!J.U(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ask:function(){return[U.a6]},
$asR:function(){return[U.a6]},
$isa6:1},a6:{"^":"dS;"},jD:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gp:function(){var z=this.cy
if(z==null){z=D.C()
this.cy=z}return z},
P:[function(a){var z
H.e(a,"$isu")
z=this.cy
if(!(z==null))z.D(a)},function(){return this.P(null)},"ah","$1","$0","gaI",0,2,0],
b7:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdZ().h(0,this.gca())
this.a.c.gep().h(0,this.gcb())
this.a.c.gbS().h(0,this.gcc())
return!0},
fY:[function(a){H.e(a,"$isu")
if(!J.U(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gca",4,0,1],
fZ:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isu"),"$isbs")
if(!this.y)return
if(this.x){z=a.d.J(0,a.y)
z=new V.Q(z.a,z.b)
z=z.E(z)
y=this.r
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.J(0,a.y)
z=new V.Q(y.a,y.b).B(0,2).w(0,z.ga9())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.B()
x=this.e
if(typeof x!=="number")return H.B(x)
y.sS(z*10*x)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=new V.Q(x.a,x.b).B(0,2).w(0,z.ga9())
x=this.b
v=w.a
if(typeof v!=="number")return v.O()
u=this.e
if(typeof u!=="number")return H.B(u)
t=this.z
if(typeof t!=="number")return H.B(t)
x.sa8(0,-v*u+t)
this.b.sS(0)
y=y.J(0,a.z)
this.Q=new V.Q(y.a,y.b).B(0,2).w(0,z.ga9())}this.ah()},"$1","gcb",4,0,1],
h_:[function(a){var z,y,x
H.e(a,"$isu")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.E(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.B()
x=this.e
if(typeof x!=="number")return H.B(x)
z.sS(y*10*x)
this.ah()}},"$1","gcc",4,0,1],
aZ:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.ap()
if(z<y){this.ch=y
x=a.y
this.b.ao(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ax(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa6:1},jE:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gp:function(){var z=this.fx
if(z==null){z=D.C()
this.fx=z}return z},
P:[function(a){var z
H.e(a,"$isu")
z=this.fx
if(!(z==null))z.D(a)},function(){return this.P(null)},"ah","$1","$0","gaI",0,2,0],
b7:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdZ().h(0,this.gca())
this.a.c.gep().h(0,this.gcb())
this.a.c.gbS().h(0,this.gcc())
z=this.a.d
y=z.f
if(y==null){y=D.C()
z.f=y
z=y}else z=y
z.h(0,this.gfW())
z=this.a.d
y=z.d
if(y==null){y=D.C()
z.d=y
z=y}else z=y
z.h(0,this.gfX())
z=this.a.e
y=z.b
if(y==null){y=D.C()
z.b=y
z=y}else z=y
z.h(0,this.gi_())
z=this.a.e
y=z.d
if(y==null){y=D.C()
z.d=y
z=y}else z=y
z.h(0,this.ghZ())
z=this.a.e
y=z.c
if(y==null){y=D.C()
z.c=y
z=y}else z=y
z.h(0,this.ghY())
return!0},
aq:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.O()
z=-z}if(this.r){if(typeof y!=="number")return y.O()
y=-y}return new V.Q(z,y)},
fY:[function(a){a=H.d(H.e(a,"$isu"),"$isbs")
if(!J.U(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gca",4,0,1],
fZ:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isu"),"$isbs")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.Q(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.aq(new V.Q(y.a,y.b).B(0,2).w(0,z.ga9()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.aq(new V.Q(x.a,x.b).B(0,2).w(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa8(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa8(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.J(0,a.z)
this.dx=this.aq(new V.Q(y.a,y.b).B(0,2).w(0,z.ga9()))}this.ah()},"$1","gcb",4,0,1],
h_:[function(a){var z,y,x
H.e(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sS(-y*10*z)
this.ah()}},"$1","gcc",4,0,1],
jS:[function(a){if(H.d(H.e(a,"$isu"),"$isei").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfW",4,0,1],
jT:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isu"),"$isbs")
if(!J.U(this.d,a.x.b))return
z=a.c
y=a.d
x=y.J(0,a.y)
w=this.aq(new V.Q(x.a,x.b).B(0,2).w(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa8(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa8(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.J(0,a.z)
this.dx=this.aq(new V.Q(y.a,y.b).B(0,2).w(0,z.ga9()))
this.ah()},"$1","gfX",4,0,1],
ks:[function(a){H.e(a,"$isu")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gi_",4,0,1],
kr:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isu"),"$iseW")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.Q(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.aq(new V.Q(y.a,y.b).B(0,2).w(0,z.ga9()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.aq(new V.Q(x.a,x.b).B(0,2).w(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa8(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa8(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.J(0,a.z)
this.dx=this.aq(new V.Q(y.a,y.b).B(0,2).w(0,z.ga9()))}this.ah()},"$1","ghZ",4,0,1],
kq:[function(a){var z,y,x
H.e(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sS(-y*10*z)
this.ah()}},"$1","ghY",4,0,1],
aZ:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.ap()
if(z<y){this.dy=y
x=a.y
this.c.ao(x)
this.b.ao(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.ax(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.B(0,V.ax(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa6:1},jF:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gp:function(){var z=this.r
if(z==null){z=D.C()
this.r=z}return z},
P:function(a){var z=this.r
if(!(z==null))z.D(a)},
b7:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.C()
z.e=y
z=y}else z=y
y=this.gh0()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.C()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
jU:[function(a){var z,y,x,w
H.e(a,"$isu")
if(!J.U(this.b,this.a.b.c))return
H.d(a,"$iscZ")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.B()
w=z+y*x
if(z!==w){this.d=w
z=new D.D("zoom",z,w,this,[P.w])
z.b=!0
this.P(z)}},"$1","gh0",4,0,1],
aZ:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ax(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa6:1}}],["","",,M,{"^":"",hd:{"^":"R;0e,0f,0a,0b,0c,0d",
gp:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
a0:[function(a){var z
H.e(a,"$isu")
z=this.f
if(!(z==null))z.D(a)},function(){return this.a0(null)},"da","$1","$0","gW",0,2,0],
kk:[function(a,b){var z,y,x,w,v,u,t,s
z=M.aB
H.i(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gW(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){s=t.gp()
s.toString
H.j(x,w)
if(s.a==null)s.sac(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","gho",8,0,22],
kl:[function(a,b){var z,y,x
z=M.aB
H.i(b,"$isk",[z],"$ask")
for(y=b.gN(b),x=this.gW();y.v();)y.gF().gp().R(0,x)
z=new D.bQ(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","ghp",8,0,22],
aa:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ak(z,z.length,0,[H.v(z,0)]);z.v();){y=z.d
if(!(y==null))y.aa(a)}this.e=!1},
$ask:function(){return[M.aB]},
$asR:function(){return[M.aB]},
$isaB:1},hf:{"^":"a;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
a0:[function(a){var z
H.e(a,"$isu")
z=this.f
if(!(z==null))z.D(a)},function(){return this.a0(null)},"da","$1","$0","gW",0,2,0],
sb8:function(a){var z,y
if(a==null)a=new X.hM()
z=this.a
if(z!==a){if(z!=null)z.gp().R(0,this.gW())
y=this.a
this.a=a
a.gp().h(0,this.gW())
z=new D.D("camera",y,this.a,this,[X.c_])
z.b=!0
this.a0(z)}},
sbf:function(a,b){var z,y
if(b==null)b=X.cQ(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gp().R(0,this.gW())
y=this.b
this.b=b
b.gp().h(0,this.gW())
z=new D.D("target",y,this.b,this,[X.d8])
z.b=!0
this.a0(z)}},
sbg:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gp().R(0,this.gW())
y=this.c
this.c=a
if(a!=null)a.gp().h(0,this.gW())
z=new D.D("technique",y,this.c,this,[O.by])
z.b=!0
this.a0(z)}},
aa:function(a){a.cS(this.c)
this.b.Y(a)
this.a.Y(a)
this.d.ao(a)
this.d.aa(a)
this.a.aE(a)
this.b.toString
a.cR()},
$isaB:1},hv:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sfz:function(a,b){this.d=H.i(b,"$isR",[E.am],"$asR")},
a0:[function(a){var z
H.e(a,"$isu")
z=this.x
if(!(z==null))z.D(a)},function(){return this.a0(null)},"da","$1","$0","gW",0,2,0],
k_:[function(a,b){var z,y,x,w,v,u,t,s
z=E.am
H.i(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gW(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gai()==null){s=new D.bn()
s.sac(null)
s.sb4(null)
s.c=null
s.d=0
t.sai(s)}s=t.gai()
s.toString
H.j(x,w)
if(s.a==null)s.sac(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","gh6",8,0,6],
k0:[function(a,b){var z,y,x
z=E.am
H.i(b,"$isk",[z],"$ask")
for(y=b.gN(b),x=this.gW();y.v();)y.gF().gp().R(0,x)
z=new D.bQ(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","gh7",8,0,6],
sb8:function(a){var z,y
if(a==null)a=X.eu(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gp().R(0,this.gW())
y=this.a
this.a=a
a.gp().h(0,this.gW())
z=new D.D("camera",y,this.a,this,[X.c_])
z.b=!0
this.a0(z)}},
sbf:function(a,b){var z,y
if(b==null)b=X.cQ(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gp().R(0,this.gW())
y=this.b
this.b=b
b.gp().h(0,this.gW())
z=new D.D("target",y,this.b,this,[X.d8])
z.b=!0
this.a0(z)}},
sbg:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gp().R(0,this.gW())
y=this.c
this.c=a
if(a!=null)a.gp().h(0,this.gW())
z=new D.D("technique",y,this.c,this,[O.by])
z.b=!0
this.a0(z)}},
gp:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
aa:function(a){var z
a.cS(this.c)
this.b.Y(a)
this.a.Y(a)
z=this.c
if(z!=null)z.ao(a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.v(z,0)]);z.v();)z.d.ao(a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.v(z,0)]);z.v();)z.d.aa(a)
this.a.toString
a.cy.aB()
a.db.aB()
this.b.toString
a.cR()},
$isaB:1},aB:{"^":"a;"}}],["","",,A,{"^":"",dL:{"^":"a;a,b,c"},h4:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
j1:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
C.b.e_(w.a,w.c)}},
dX:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
C.b.dY(w.a,w.c)}}},em:{"^":"cg;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0as,0am,0bx,0e0,0by,0bz,0e1,0e2,0bA,0bB,0e3,0e4,0bC,0bD,0e5,0e6,0bE,0e7,0e8,0bF,0e9,0ea,0bG,0bH,0bI,0eb,0ec,0bJ,0bK,0ed,0ee,0bL,0ef,0cC,0eg,0cD,0eh,0cE,0ei,0cF,0ej,0cG,0ek,0cH,a,b,0c,0d,0e,0f,0r,0x,0y",
sfs:function(a){this.r1=H.i(a,"$isb",[A.as],"$asb")},
sfc:function(a){this.cC=H.i(a,"$isb",[A.df],"$asb")},
sfd:function(a){this.cD=H.i(a,"$isb",[A.dh],"$asb")},
sfe:function(a){this.cE=H.i(a,"$isb",[A.di],"$asb")},
sff:function(a){this.cF=H.i(a,"$isb",[A.dj],"$asb")},
sfg:function(a){this.cG=H.i(a,"$isb",[A.dk],"$asb")},
sfh:function(a){this.cH=H.i(a,"$isb",[A.dl],"$asb")},
f1:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.bx("")
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
a1.i7(z)
a1.ig(z)
a1.i8(z)
a1.ip(z)
a1.iq(z)
a1.ii(z)
a1.iu(z)
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
z=new P.bx("")
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
v.ib(z)
v.i6(z)
v.i9(z)
v.ic(z)
v.im(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.ik(z)
v.il(z)}v.ih(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.f){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.e){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.d){r+="uniform samplerCube alphaTxt;\n"
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
case C.e:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.d:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.c([],[P.n])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.k(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.ia(z)
v.ij(z)
v.io(z)
v.ir(z)
v.is(z)
v.it(z)
v.ie(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.n])
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
n="vec4("+C.a.k(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.em(x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.l(0,"posAttr")
this.cx=this.x.l(0,"normAttr")
this.ch=this.x.l(0,"binmAttr")
this.cy=this.x.l(0,"txt2DAttr")
this.db=this.x.l(0,"txtCubeAttr")
this.dx=this.x.l(0,"bendAttr")
if(a1.fr)this.id=H.d(this.y.m(0,"invViewMat"),"$isas")
if(y)this.dy=H.d(this.y.m(0,"objMat"),"$isas")
if(w)this.fr=H.d(this.y.m(0,"viewObjMat"),"$isas")
this.fy=H.d(this.y.m(0,"projViewObjMat"),"$isas")
if(a1.x2)this.k1=H.d(this.y.m(0,"txt2DMat"),"$isdg")
if(a1.y1)this.k2=H.d(this.y.m(0,"txtCubeMat"),"$isas")
if(a1.y2)this.k3=H.d(this.y.m(0,"colorMat"),"$isas")
this.sfs(H.c([],[A.as]))
y=a1.as
if(y>0){this.k4=H.e(this.y.m(0,"bendMatCount"),"$isH")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.l(0,v)
if(l==null)H.p(P.o("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(l,"$isas"))}}y=a1.a
if(y!==C.c){this.r2=H.d(this.y.m(0,"emissionClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.e:this.rx=H.d(this.y.m(0,"emissionTxt"),"$isag")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$isH")
break
case C.d:this.ry=H.d(this.y.m(0,"emissionTxt"),"$isa9")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$isH")
break}}y=a1.b
if(y!==C.c){this.x2=H.d(this.y.m(0,"ambientClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.e:this.y1=H.d(this.y.m(0,"ambientTxt"),"$isag")
this.as=H.d(this.y.m(0,"nullAmbientTxt"),"$isH")
break
case C.d:this.y2=H.d(this.y.m(0,"ambientTxt"),"$isa9")
this.as=H.d(this.y.m(0,"nullAmbientTxt"),"$isH")
break}}y=a1.c
if(y!==C.c){this.am=H.d(this.y.m(0,"diffuseClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.e:this.bx=H.d(this.y.m(0,"diffuseTxt"),"$isag")
this.by=H.d(this.y.m(0,"nullDiffuseTxt"),"$isH")
break
case C.d:this.e0=H.d(this.y.m(0,"diffuseTxt"),"$isa9")
this.by=H.d(this.y.m(0,"nullDiffuseTxt"),"$isH")
break}}y=a1.d
if(y!==C.c){this.bz=H.d(this.y.m(0,"invDiffuseClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.e:this.e1=H.d(this.y.m(0,"invDiffuseTxt"),"$isag")
this.bA=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$isH")
break
case C.d:this.e2=H.d(this.y.m(0,"invDiffuseTxt"),"$isa9")
this.bA=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$isH")
break}}y=a1.e
if(y!==C.c){this.bD=H.d(this.y.m(0,"shininess"),"$isS")
this.bB=H.d(this.y.m(0,"specularClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.e:this.e3=H.d(this.y.m(0,"specularTxt"),"$isag")
this.bC=H.d(this.y.m(0,"nullSpecularTxt"),"$isH")
break
case C.d:this.e4=H.d(this.y.m(0,"specularTxt"),"$isa9")
this.bC=H.d(this.y.m(0,"nullSpecularTxt"),"$isH")
break}}switch(a1.f){case C.c:break
case C.f:break
case C.e:this.e5=H.d(this.y.m(0,"bumpTxt"),"$isag")
this.bE=H.d(this.y.m(0,"nullBumpTxt"),"$isH")
break
case C.d:this.e6=H.d(this.y.m(0,"bumpTxt"),"$isa9")
this.bE=H.d(this.y.m(0,"nullBumpTxt"),"$isH")
break}if(a1.dy){this.e7=H.d(this.y.m(0,"envSampler"),"$isa9")
this.e8=H.d(this.y.m(0,"nullEnvTxt"),"$isH")
y=a1.r
if(y!==C.c){this.bF=H.d(this.y.m(0,"reflectClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.e:this.e9=H.d(this.y.m(0,"reflectTxt"),"$isag")
this.bG=H.d(this.y.m(0,"nullReflectTxt"),"$isH")
break
case C.d:this.ea=H.d(this.y.m(0,"reflectTxt"),"$isa9")
this.bG=H.d(this.y.m(0,"nullReflectTxt"),"$isH")
break}}y=a1.x
if(y!==C.c){this.bH=H.d(this.y.m(0,"refraction"),"$isS")
this.bI=H.d(this.y.m(0,"refractClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.e:this.eb=H.d(this.y.m(0,"refractTxt"),"$isag")
this.bJ=H.d(this.y.m(0,"nullRefractTxt"),"$isH")
break
case C.d:this.ec=H.d(this.y.m(0,"refractTxt"),"$isa9")
this.bJ=H.d(this.y.m(0,"nullRefractTxt"),"$isH")
break}}}y=a1.y
if(y!==C.c){this.bK=H.d(this.y.m(0,"alpha"),"$isS")
switch(y){case C.c:break
case C.f:break
case C.e:this.ed=H.d(this.y.m(0,"alphaTxt"),"$isag")
this.bL=H.d(this.y.m(0,"nullAlphaTxt"),"$isH")
break
case C.d:this.ee=H.d(this.y.m(0,"alphaTxt"),"$isa9")
this.bL=H.d(this.y.m(0,"nullAlphaTxt"),"$isH")
break}}this.sfc(H.c([],[A.df]))
this.sfd(H.c([],[A.dh]))
this.sfe(H.c([],[A.di]))
this.sff(H.c([],[A.dj]))
this.sfg(H.c([],[A.dk]))
this.sfh(H.c([],[A.dl]))
if(a1.k2){y=a1.z
if(y>0){this.ef=H.e(this.y.m(0,"dirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.l(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isE")
x=this.y
w="dirLights["+m+"].color"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.cC;(x&&C.a).h(x,new A.df(m,l,k))}}y=a1.Q
if(y>0){this.eg=H.e(this.y.m(0,"pntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.l(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isE")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="pntLights["+m+"].color"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.y
w="pntLights["+m+"].att0"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isS")
x=this.y
w="pntLights["+m+"].att1"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isS")
x=this.y
w="pntLights["+m+"].att2"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isS")
x=this.cD;(x&&C.a).h(x,new A.dh(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.eh=H.e(this.y.m(0,"spotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.l(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isE")
x=this.y
w="spotLights["+m+"].objDir"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.y
w="spotLights["+m+"].color"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isS")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isS")
x=this.y
w="spotLights["+m+"].att0"
f=x.l(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isS")
x=this.y
w="spotLights["+m+"].att1"
e=x.l(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isS")
x=this.y
w="spotLights["+m+"].att2"
d=x.l(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isS")
x=this.cE;(x&&C.a).h(x,new A.di(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.ei=H.e(this.y.m(0,"txtDirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.l(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isE")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.y
w="txtDirLights["+m+"].color"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isE")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isH")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.l(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isag")
x=this.cF;(x&&C.a).h(x,new A.dj(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.ej=H.e(this.y.m(0,"txtPntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.l(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isE")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isdg")
x=this.y
w="txtPntLights["+m+"].color"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isH")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isS")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.l(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isS")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.l(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isS")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.l(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isa9")
x=this.cG;(x&&C.a).h(x,new A.dk(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.ek=H.e(this.y.m(0,"txtSpotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.l(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isE")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isE")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isH")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.l(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isE")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.l(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isS")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.l(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isS")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.l(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isS")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.l(0,w)
if(b==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isS")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.l(0,w)
if(a==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isS")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.l(0,w)
if(a0==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isag")
x=this.cH;(x&&C.a).h(x,new A.dl(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
aj:function(a,b,c){C.b.M(b.a,b.d,1)},
ad:function(a,b,c){if(c==null||c.d<6)C.b.M(b.a,b.d,1)
else{a.d3(c)
C.b.M(b.a,b.d,0)}},
n:{
ia:function(a,b){var z,y
z=a.am
y=new A.em(b,z)
y.d7(b,z)
y.f1(a,b)
return y}}},id:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,as,am,bx",
i7:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.as+"];\n"
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
ig:function(a){var z
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
i8:function(a){var z
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
ip:function(a){var z,y
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
iq:function(a){var z,y
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
ii:function(a){var z
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
iu:function(a){var z
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
au:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.l(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.bm(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
ib:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.au(a,z,"emission")
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
case C.e:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
i6:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.au(a,z,"ambient")
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
case C.e:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
i9:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.au(a,z,"diffuse")
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
case C.e:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
ic:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.au(a,z,"invDiffuse")
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
case C.e:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
im:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.au(a,z,"specular")
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
case C.e:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
ih:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.f:break
case C.e:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.d:z+="uniform samplerCube bumpTxt;\n"
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
case C.d:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
ik:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.au(a,z,"reflect")
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
case C.e:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
il:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.au(a,z,"refract")
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
case C.e:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
ia:function(a){var z,y
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
ij:function(a){var z,y
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
io:function(a){var z,y
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
ir:function(a){var z,y,x
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
is:function(a){var z,y,x
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
it:function(a){var z,y,x
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
ie:function(a){var z
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
i:function(a){return this.am}},df:{"^":"a;a,b,c"},dj:{"^":"a;a,b,c,d,e,f,r,x"},dh:{"^":"a;a,b,c,d,e,f,r"},dk:{"^":"a;a,b,c,d,e,f,r,x,y,z"},di:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dl:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cg:{"^":"cF;",
d7:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
em:function(a,b){var z,y,x
this.c=a
this.d=b
this.e=this.dn(a,35633)
this.f=this.dn(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
C.b.dO(z,y,this.e)
C.b.dO(z,this.r,this.f)
C.b.jd(z,this.r)
if(!H.dw(C.b.bU(z,this.r,35714))){x=C.b.eJ(z,this.r)
C.b.iT(z,this.r)
H.p(P.o("Failed to link shader: "+H.f(x)))}this.hM()
this.hO()},
Y:function(a){C.b.cV(a.a,this.r)
this.x.j1()},
dn:function(a,b){var z,y,x
z=this.a
y=C.b.iR(z,b)
C.b.eT(z,y,a)
C.b.iJ(z,y)
if(!H.dw(C.b.eM(z,y,35713))){x=C.b.eL(z,y)
C.b.iU(z,y)
throw H.h(P.o("Error compiling shader '"+H.f(y)+"': "+H.f(x)))}return y},
hM:function(){var z,y,x,w,v,u
z=H.c([],[A.dL])
y=this.a
x=H.a_(C.b.bU(y,this.r,35721))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.eD(y,this.r,w)
u=C.b.eF(y,this.r,v.name)
C.a.h(z,new A.dL(y,v.name,u))}this.x=new A.h4(z)},
hO:function(){var z,y,x,w,v,u
z=H.c([],[A.a4])
y=this.a
x=H.a_(C.b.bU(y,this.r,35718))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.eE(y,this.r,w)
u=C.b.eN(y,this.r,v.name)
C.a.h(z,this.iS(v.type,v.size,v.name,u))}this.y=new A.jv(z)},
aL:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.H(z,y,b,c)
else return A.de(z,y,b,a,c)},
fC:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ag(z,y,b,c)
else return A.de(z,y,b,a,c)},
fD:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.a9(z,y,b,c)
else return A.de(z,y,b,a,c)},
bt:function(a,b){return new P.fl(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
iS:function(a,b,c,d){switch(a){case 5120:return this.aL(b,c,d)
case 5121:return this.aL(b,c,d)
case 5122:return this.aL(b,c,d)
case 5123:return this.aL(b,c,d)
case 5124:return this.aL(b,c,d)
case 5125:return this.aL(b,c,d)
case 5126:return new A.S(this.a,this.r,c,d)
case 35664:return new A.jq(this.a,this.r,c,d)
case 35665:return new A.E(this.a,this.r,c,d)
case 35666:return new A.jt(this.a,this.r,c,d)
case 35667:return new A.jr(this.a,this.r,c,d)
case 35668:return new A.js(this.a,this.r,c,d)
case 35669:return new A.ju(this.a,this.r,c,d)
case 35674:return new A.jx(this.a,this.r,c,d)
case 35675:return new A.dg(this.a,this.r,c,d)
case 35676:return new A.as(this.a,this.r,c,d)
case 35678:return this.fC(b,c,d)
case 35680:return this.fD(b,c,d)
case 35670:throw H.h(this.bt("BOOL",c))
case 35671:throw H.h(this.bt("BOOL_VEC2",c))
case 35672:throw H.h(this.bt("BOOL_VEC3",c))
case 35673:throw H.h(this.bt("BOOL_VEC4",c))
default:throw H.h(P.o("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}},c0:{"^":"a;a,b",
i:function(a){return this.b}},eI:{"^":"cg;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},a4:{"^":"a;"},jv:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.l(0,b)
if(z==null)throw H.h(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.K()},
j5:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
K:function(){return this.j5("\n")}},H:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1i: "+H.f(this.c)}},jr:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform2i: "+H.f(this.c)}},js:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform3i: "+H.f(this.c)}},ju:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform4i: "+H.f(this.c)}},jp:{"^":"a4;0e,0f,a,b,c,d",
si4:function(a){this.e=H.i(a,"$isb",[P.y],"$asb")},
i:function(a){return"Uniform1iv: "+H.f(this.c)},
n:{
de:function(a,b,c,d,e){var z=new A.jp(a,b,c,e)
z.f=d
z.si4(P.i1(d,0,!1,P.y))
return z}}},S:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1f: "+H.f(this.c)}},jq:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform2f: "+H.f(this.c)}},E:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform3f: "+H.f(this.c)}},jt:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform4f: "+H.f(this.c)}},jx:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}},dg:{"^":"a4;a,b,c,d",
ag:function(a){var z=new Float32Array(H.bG(H.i(a,"$isb",[P.w],"$asb")))
C.b.ez(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.f(this.c)}},as:{"^":"a4;a,b,c,d",
ag:function(a){var z=new Float32Array(H.bG(H.i(a,"$isb",[P.w],"$asb")))
C.b.eA(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.f(this.c)}},ag:{"^":"a4;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.f(this.c)}},a9:{"^":"a4;a,b,c,d",
d3:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)C.b.M(y,x,0)
else C.b.M(y,x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}}],["","",,F,{"^":"",
cq:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bE:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.L(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.L(t+h,s+f,r+g)
z.b=q
p=new V.L(t-h,s-f,r-g)
z.c=p
o=new V.L(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cq(y)
k=F.cq(z.b)
j=F.lq(d,e,new F.kK(z,F.cq(z.c),F.cq(z.d),k,l,c),b)
if(j!=null)a.jh(j)},
lq:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(c,{func:1,ret:-1,args:[F.aD,P.w,P.w]})
if(a<1)return
if(b<1)return
z=F.d2()
y=H.c([],[F.aD])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cm(null,null,new V.aQ(u,0,0,1),null,null,new V.a2(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cw(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cm(null,null,new V.aQ(o,n,m,1),null,null,new V.a2(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cw(d))}}z.d.iw(a+1,b+1,y)
return z},
kK:{"^":"t:38;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cL(z.b,b).cL(z.d.cL(z.c,b),c)
z=new V.af(y.a,y.b,y.c)
if(!J.U(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a4()}a.saY(y.w(0,Math.sqrt(y.E(y))))
z=1-b
x=1-c
x=new V.bv(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.U(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a4()}}},
a0:{"^":"a;0a,0b,0c,0d,0e",
fq:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bU()
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.en())return
return v.w(0,Math.sqrt(v.E(v)))},
fw:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.J(0,y)
z=new V.L(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.E(z)))
z=w.J(0,y)
z=new V.L(z.a,z.b,z.c)
z=v.b9(z.w(0,Math.sqrt(z.E(z))))
return z.w(0,Math.sqrt(z.E(z)))},
cu:function(){if(this.d!=null)return!0
var z=this.fq()
if(z==null){z=this.fw()
if(z==null)return!1}this.d=z
this.a.a.a4()
return!0},
fp:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bU()
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.en())return
return v.w(0,Math.sqrt(v.E(v)))},
fv:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.J(0,u)
z=new V.L(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.E(z)))
if(o.a-p.a<0)m=m.O(0)}else{l=(z-q.b)/n
z=r.J(0,u)
z=new V.af(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).J(0,x)
z=new V.L(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.E(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.O(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.E(z)))
z=k.b9(m)
z=z.w(0,Math.sqrt(z.E(z))).b9(k)
m=z.w(0,Math.sqrt(z.E(z)))}return m},
cs:function(){if(this.e!=null)return!0
var z=this.fp()
if(z==null){z=this.fv()
if(z==null)return!1}this.e=z
this.a.a.a4()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var z,y
z=this.a
if(z==null||this.b==null||this.c==null)return a+"disposed"
y=a+C.i.af(J.a7(z.e),0)+", "+C.i.af(J.a7(this.b.e),0)+", "+C.i.af(J.a7(this.c.e),0)+" {"
z=this.d
y=z!=null?y+(z.i(0)+", "):y+"-, "
z=this.e
return z!=null?y+(z.i(0)+"}"):y+"-}"},
K:function(){return this.A("")},
n:{
bo:function(a,b,c){var z,y,x
z=new F.a0()
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
z.a.a.a4()
return z}}},
br:{"^":"a;0a,0b",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var z=this.a
if(z==null||this.b==null)return a+"disposed"
return a+C.i.af(J.a7(z.e),0)+", "+C.i.af(J.a7(this.b.e),0)},
K:function(){return this.A("")},
n:{
hX:function(a,b){var z,y,x
z=new F.br()
y=a.a
if(y==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.p(P.o("May not create a line with vertices attached to different shapes."))
z.a=a
C.a.h(a.c.b,z)
z.b=b
C.a.h(b.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.a4()
return z}}},
bT:{"^":"a;0a",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.af(J.a7(z.e),0)},
K:function(){return this.A("")}},
eH:{"^":"a;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
jh:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.a1()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.iN())}this.a.a1()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.a1()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.l(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.bT()
if(r.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.D(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.a1()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.l(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.a1()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.l(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.hX(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.a1()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.l(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.a1()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.l(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.a1()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.l(t,s)
m=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,m)
F.bo(p,o,m)}z=this.e
if(!(z==null))z.aD()},
ay:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.ay()||!1
if(!this.a.ay())y=!1
z=this.e
if(!(z==null))z.aD()
return y},
dR:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$at()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aL().a)!==0)++w
if((x&$.$get$aK().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$bA().a)!==0)++w
if((x&$.$get$bB().a)!==0)++w
if((x&$.$get$b9().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
v=b.gd4(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dP])
for(r=0,q=0;q<w;++q){p=b.iA(q)
o=p.gd4(p)
C.a.X(s,q,new Z.dP(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.l(y,n)
m=y[n].je(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.X(t,l,m[k]);++l}}r+=o}H.i(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.ar(y,34962,j)
C.b.dQ(y,34962,new Float32Array(H.bG(t)),35044)
C.b.ar(y,34962,null)
i=new Z.cI(new Z.fh(34962,j),s,b)
i.sfR(H.c([],[Z.bO]))
if(this.b.b.length!==0){x=P.y
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.a1()
C.a.h(h,g.e)}f=Z.dm(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bO(0,h.length,f))}if(this.c.b.length!==0){x=P.y
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.a1()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.l(g,q)
g=g[q].b
g.a.a.a1()
C.a.h(h,g.e)}f=Z.dm(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bO(1,h.length,f))}if(this.d.b.length!==0){x=P.y
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.a1()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.l(g,q)
g=g[q].b
g.a.a.a1()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.l(g,q)
g=g[q].c
g.a.a.a1()
C.a.h(h,g.e)}f=Z.dm(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bO(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.k(z,"\n")},
aX:function(a){var z=this.e
if(!(z==null))z.D(a)},
a4:function(){return this.aX(null)},
$islL:1,
n:{
d2:function(){var z,y
z=new F.eH()
y=new F.jJ(z)
y.b=!1
y.si5(H.c([],[F.aD]))
z.a=y
y=new F.iX(z)
y.scf(H.c([],[F.bT]))
z.b=y
y=new F.iW(z)
y.sfS(H.c([],[F.br]))
z.c=y
y=new F.iV(z)
y.sfI(H.c([],[F.a0]))
z.d=y
z.e=null
return z}}},
iV:{"^":"a;a,0b",
sfI:function(a){this.b=H.i(a,"$isb",[F.a0],"$asb")},
iv:function(a){var z,y,x,w,v,u
H.i(a,"$isb",[F.aD],"$asb")
z=H.c([],[F.a0])
y=a[0]
for(x=this.a,w=2;w<4;++w){v=a[w-1]
u=a[w]
x.a.h(0,y)
x.a.h(0,v)
x.a.h(0,u)
C.a.h(z,F.bo(y,v,u))}return z},
iw:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.i(c,"$isb",[F.aD],"$asb")
z=H.c([],[F.a0])
for(y=this.a,x=b,w=0,v=!1,u=1;u<a;++u,++w,++x){for(t=v,s=1;s<b;++s,x=o){r=c.length
if(w<0||w>=r)return H.l(c,w)
q=c[w];++w
if(w>=r)return H.l(c,w)
p=c[w]
o=x+1
if(o<0||o>=r)return H.l(c,o)
n=c[o]
if(x<0||x>=r)return H.l(c,x)
m=c[x]
r=y.a
if(t){r.h(0,q)
y.a.h(0,p)
y.a.h(0,n)
C.a.h(z,F.bo(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bo(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bo(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bo(p,m,q))}t=!t}v=!v}return z},
gq:function(a){return this.b.length},
ay:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].cu())x=!1
return x},
ct:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].cs())x=!1
return x},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.k(z,"\n")},
K:function(){return this.A("")}},
iW:{"^":"a;a,0b",
sfS:function(a){this.b=H.i(a,"$isb",[F.br],"$asb")},
gq:function(a){return this.b.length},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.c([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.l(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.k(z,"\n")},
K:function(){return this.A("")}},
iX:{"^":"a;a,0b",
scf:function(a){this.b=H.i(a,"$isb",[F.bT],"$asb")},
gq:function(a){return this.b.length},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.k(z,"\n")},
K:function(){return this.A("")}},
aD:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cw:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cm(this.cx,x,u,z,y,w,v,a,t)},
iN:function(){return this.cw(null)},
saY:function(a){var z
if(!J.U(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a4()}},
je:function(a){var z,y
if(a.u(0,$.$get$at())){z=this.f
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aL())){z=this.r
y=[P.w]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aK())){z=this.x
y=[P.w]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aM())){z=this.y
y=[P.w]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.u(0,$.$get$aN())){z=this.z
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bA())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bB())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.u(0,$.$get$b9()))return H.c([this.ch],[P.w])
else if(a.u(0,$.$get$aJ())){z=this.cx
y=[P.w]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.w])},
cu:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bU()
this.d.a3(0,new F.jQ(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.aD()}return!0},
cs:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bU()
this.d.a3(0,new F.jP(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.aD()}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var z,y,x
z=H.c([],[P.n])
C.a.h(z,C.i.af(J.a7(this.e),0))
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
K:function(){return this.A("")},
n:{
cm:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aD()
y=new F.jO(z)
y.scf(H.c([],[F.bT]))
z.b=y
y=new F.jN(z)
x=[F.br]
y.sfT(H.c([],x))
y.sfU(H.c([],x))
z.c=y
y=new F.jK(z)
x=[F.a0]
y.sfJ(H.c([],x))
y.sfK(H.c([],x))
y.sfL(H.c([],x))
z.d=y
h=$.$get$fe()
z.e=0
y=$.$get$at()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aL().a)!==0?e:null
z.x=(x&$.$get$aK().a)!==0?b:null
z.y=(x&$.$get$aM().a)!==0?f:null
z.z=(x&$.$get$aN().a)!==0?g:null
z.Q=(x&$.$get$ff().a)!==0?c:null
z.ch=(x&$.$get$b9().a)!==0?i:0
z.cx=(x&$.$get$aJ().a)!==0?a:null
return z}}},
jQ:{"^":"t:5;a",
$1:function(a){var z,y
H.e(a,"$isa0")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
jP:{"^":"t:5;a",
$1:function(a){var z,y
H.e(a,"$isa0")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
jJ:{"^":"a;a,0b,0c",
si5:function(a){this.c=H.i(a,"$isb",[F.aD],"$asb")},
a1:function(){},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.h(P.o("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a4()
return!0},
ix:function(a,b,c,d,e,f,g,h,i){var z=F.cm(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bu:function(a,b,c,d,e,f){return this.ix(a,null,b,c,null,d,e,f,0)},
gq:function(a){return this.c.length},
ay:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].cu()
return!0},
ct:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].cs()
return!0},
iF:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.U(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.D(null)}}}}return!0},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
this.a1()
z=H.c([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.k(z,"\n")},
K:function(){return this.A("")}},
jK:{"^":"a;a,0b,0c,0d",
sfJ:function(a){this.b=H.i(a,"$isb",[F.a0],"$asb")},
sfK:function(a){this.c=H.i(a,"$isb",[F.a0],"$asb")},
sfL:function(a){this.d=H.i(a,"$isb",[F.a0],"$asb")},
gq:function(a){return this.b.length+this.c.length+this.d.length},
a3:function(a,b){H.j(b,{func:1,ret:-1,args:[F.a0]})
C.a.a3(this.b,b)
C.a.a3(this.c,new F.jL(this,b))
C.a.a3(this.d,new F.jM(this,b))},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.k(z,"\n")},
K:function(){return this.A("")}},
jL:{"^":"t:5;a,b",
$1:function(a){H.e(a,"$isa0")
if(!J.U(a.a,this.a))this.b.$1(a)}},
jM:{"^":"t:5;a,b",
$1:function(a){var z
H.e(a,"$isa0")
z=this.a
if(!J.U(a.a,z)&&!J.U(a.b,z))this.b.$1(a)}},
jN:{"^":"a;a,0b,0c",
sfT:function(a){this.b=H.i(a,"$isb",[F.br],"$asb")},
sfU:function(a){this.c=H.i(a,"$isb",[F.br],"$asb")},
gq:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.k(z,"\n")},
K:function(){return this.A("")}},
jO:{"^":"a;a,0b",
scf:function(a){this.b=H.i(a,"$isb",[F.bT],"$asb")},
gq:function(a){return this.b.length},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.k(z,"\n")},
K:function(){return this.A("")}}}],["","",,O,{"^":"",i9:{"^":"by;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sft:function(a){this.e=H.i(a,"$isR",[V.ao],"$asR")},
gp:function(){var z=this.dy
if(z==null){z=D.C()
this.dy=z}return z},
V:[function(a){var z
H.e(a,"$isu")
z=this.dy
if(!(z==null))z.D(a)},function(){return this.V(null)},"dw","$1","$0","gaN",0,2,0],
hC:[function(a){H.e(a,"$isu")
this.a=null
this.V(a)},function(){return this.hC(null)},"kp","$1","$0","ghB",0,2,0],
jX:[function(a,b){var z=V.ao
z=new D.bP(a,H.i(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.V(z)},"$2","gh3",8,0,23],
jY:[function(a,b){var z=V.ao
z=new D.bQ(a,H.i(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.V(z)},"$2","gh4",8,0,23],
dk:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.a2(z.e.length+3,4)*4
x=C.h.a2(z.f.length+3,4)*4
w=C.h.a2(z.r.length+3,4)*4
v=C.h.a2(z.x.length+3,4)*4
u=C.h.a2(z.y.length+3,4)*4
t=C.h.a2(z.z.length+3,4)*4
s=C.h.a2(this.e.a.length+3,4)*4
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
c=z===C.e||r===C.e||q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e
b=z===C.d||r===C.d||q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d
a=x+u+v+w+t>0
a0=s>0
a1=e||!g||f
a2=$.$get$at()
if(e){g=$.$get$aL()
a2=new Z.b8(a2.a|g.a)}if(d){g=$.$get$aK()
a2=new Z.b8(a2.a|g.a)}if(c){g=$.$get$aM()
a2=new Z.b8(a2.a|g.a)}if(b){g=$.$get$aN()
a2=new Z.b8(a2.a|g.a)}if(a0){g=$.$get$aJ()
a2=new Z.b8(a2.a|g.a)}return new A.id(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
U:function(a,b){H.i(a,"$isb",[T.d9],"$asb")
if(b!=null)if(!C.a.T(a,b)){b.a=a.length
C.a.h(a,b)}},
ao:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.ak(z,z.length,0,[H.v(z,0)]);z.v();){y=z.d
y.toString
x=$.cl
if(x==null){x=new V.L(0,0,1)
$.cl=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cU(x)}}},
eu:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dk()
y=H.e(a.fr.l(0,z.am),"$isem")
if(y==null){y=A.ia(z,a.a)
a.dM(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bx
z=b.e
if(!(z instanceof Z.cI)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.ay()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.ct()
u.a.ct()
u=u.e
if(!(u==null))u.aD()}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.iF()
t=t.e
if(!(t==null))t.aD()}r=b.d.dR(new Z.fi(a.a),w)
r.az($.$get$at()).e=this.a.Q.c
if(z)r.az($.$get$aL()).e=this.a.cx.c
if(v)r.az($.$get$aK()).e=this.a.ch.c
if(x.rx)r.az($.$get$aM()).e=this.a.cy.c
if(u)r.az($.$get$aN()).e=this.a.db.c
if(x.x1)r.az($.$get$aJ()).e=this.a.dx.c
b.e=r}z=T.d9
q=H.c([],[z])
this.a.Y(a)
if(x.fx){v=this.a
u=a.dx.gZ()
v=v.dy
v.toString
v.ag(u.ab(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db.gZ().B(0,a.dx.gZ())
a.cx=u}v=v.fr
v.toString
v.ag(u.ab(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gjw().B(0,a.dx.gZ())
a.ch=u}v=v.fy
v.toString
v.ag(u.ab(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.ag(C.r.ab(u,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.ag(C.r.ab(u,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.ag(C.r.ab(u,!0))}if(x.as>0){p=this.e.a.length
v=this.a.k4
C.b.M(v.a,v.d,p)
for(v=[P.w],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.l(t,o)
t=t[o]
u.toString
H.e(t,"$isao")
u=u.r1
if(o>=u.length)return H.l(u,o)
u=u[o]
n=new Float32Array(H.bG(H.i(t.ab(0,!0),"$isb",v,"$asb")))
C.b.eA(u.a,u.d,!1,n)}}switch(x.a){case C.c:break
case C.f:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
C.b.t(v.a,v.d,t,s,u)
break
case C.e:this.U(q,this.f.d)
v=this.a
u=this.f.d
v.aj(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break
case C.d:this.U(q,this.f.e)
v=this.a
u=this.f.e
v.ad(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.f:v=this.a
u=this.r.f
v=v.x2
v.toString
t=u.a
s=u.b
u=u.c
C.b.t(v.a,v.d,t,s,u)
break
case C.e:this.U(q,this.r.d)
v=this.a
u=this.r.d
v.aj(v.y1,v.as,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break
case C.d:this.U(q,this.r.e)
v=this.a
u=this.r.e
v.ad(v.y2,v.as,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break}switch(x.c){case C.c:break
case C.f:v=this.a
u=this.x.f
v=v.am
v.toString
t=u.a
s=u.b
u=u.c
C.b.t(v.a,v.d,t,s,u)
break
case C.e:this.U(q,this.x.d)
v=this.a
u=this.x.d
v.aj(v.bx,v.by,u)
u=this.a
v=this.x.f
u=u.am
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break
case C.d:this.U(q,this.x.e)
v=this.a
u=this.x.e
v.ad(v.e0,v.by,u)
u=this.a
v=this.x.f
u=u.am
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.f:v=this.a
u=this.y.f
v=v.bz
v.toString
t=u.a
s=u.b
u=u.c
C.b.t(v.a,v.d,t,s,u)
break
case C.e:this.U(q,this.y.d)
v=this.a
u=this.y.d
v.aj(v.e1,v.bA,u)
u=this.a
v=this.y.f
u=u.bz
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break
case C.d:this.U(q,this.y.e)
v=this.a
u=this.y.e
v.ad(v.e2,v.bA,u)
u=this.a
v=this.y.f
u=u.bz
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.f:v=this.a
u=this.z.f
v=v.bB
v.toString
t=u.a
s=u.b
u=u.c
C.b.t(v.a,v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bD
C.b.H(u.a,u.d,s)
break
case C.e:this.U(q,this.z.d)
v=this.a
u=this.z.d
v.aj(v.e3,v.bC,u)
u=this.a
v=this.z.f
u=u.bB
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bD
C.b.H(v.a,v.d,s)
break
case C.d:this.U(q,this.z.e)
v=this.a
u=this.z.e
v.ad(v.e4,v.bC,u)
u=this.a
v=this.z.f
u=u.bB
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bD
C.b.H(v.a,v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.ef
C.b.M(v.a,v.d,p)
m=a.db.gZ()
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.cC
if(l>=t.length)return H.l(t,l)
i=t[l]
t=m.cU(j.a)
s=t.a
h=t.b
g=t.c
g=t.w(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
s=g.a
t=g.b
g=g.c
C.b.t(h.a,h.d,s,t,g)
g=j.c
t=i.c
C.b.t(t.a,t.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.eg
C.b.M(v.a,v.d,p)
m=a.db.gZ()
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.cD
if(l>=t.length)return H.l(t,l)
i=t[l]
t=j.gbd(j)
s=i.b
h=t.gcY(t)
g=t.gcZ(t)
t=t.gd_(t)
C.b.t(s.a,s.d,h,g,t)
t=m.bj(j.gbd(j))
g=i.c
C.b.t(g.a,g.d,t.a,t.b,t.c)
t=j.gak(j)
g=i.d
h=t.gbQ()
s=t.gbl()
t=t.gbv()
C.b.t(g.a,g.d,h,s,t)
t=j.gcn()
s=i.e
C.b.H(s.a,s.d,t)
t=j.gco()
s=i.f
C.b.H(s.a,s.d,t)
t=j.gcp()
s=i.r
C.b.H(s.a,s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.eh
C.b.M(v.a,v.d,p)
m=a.db.gZ()
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.cE
if(l>=t.length)return H.l(t,l)
i=t[l]
t=j.gbd(j)
s=i.b
h=t.gcY(t)
g=t.gcZ(t)
t=t.gd_(t)
C.b.t(s.a,s.d,h,g,t)
t=j.gcA(j).kw()
g=i.c
h=t.gaS(t)
s=t.gaT(t)
t=t.gaU()
C.b.t(g.a,g.d,h,s,t)
t=m.bj(j.gbd(j))
s=i.d
C.b.t(s.a,s.d,t.a,t.b,t.c)
t=j.gak(j)
s=i.e
h=t.gbQ()
g=t.gbl()
t=t.gbv()
C.b.t(s.a,s.d,h,g,t)
t=j.gkv()
g=i.f
C.b.H(g.a,g.d,t)
t=j.gkt()
g=i.r
C.b.H(g.a,g.d,t)
t=j.gcn()
g=i.x
C.b.H(g.a,g.d,t)
t=j.gco()
g=i.y
C.b.H(g.a,g.d,t)
t=j.gcp()
g=i.z
C.b.H(g.a,g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.ei
C.b.M(v.a,v.d,p)
m=a.db.gZ()
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
s=this.a.cF
if(l>=s.length)return H.l(s,l)
i=s[l]
s=j.gbh()
H.i(q,"$isb",t,"$asb")
if(!C.a.T(q,s)){s.sc5(q.length)
C.a.h(q,s)}s=j.gcA(j)
h=i.d
g=s.gaS(s)
f=s.gaT(s)
s=s.gaU()
C.b.t(h.a,h.d,g,f,s)
s=j.gbS()
f=i.b
g=s.gaS(s)
h=s.gaT(s)
s=s.gaU()
C.b.t(f.a,f.d,g,h,s)
s=j.gbe(j)
h=i.c
g=s.gaS(s)
f=s.gaT(s)
s=s.gaU()
C.b.t(h.a,h.d,g,f,s)
s=m.cU(j.gcA(j))
f=s.a
g=s.b
h=s.c
h=s.w(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
f=h.a
s=h.b
h=h.c
C.b.t(g.a,g.d,f,s,h)
h=j.gak(j)
s=i.f
f=h.gbQ()
g=h.gbl()
h=h.gbv()
C.b.t(s.a,s.d,f,g,h)
h=j.gbh()
s=h.gbN(h)
if(!s){s=i.x
C.b.M(s.a,s.d,1)}else{s=i.r
g=h.gbN(h)
f=s.a
s=s.d
if(!g)C.b.M(f,s,0)
else C.b.M(f,s,h.gj8(h))
s=i.x
C.b.M(s.a,s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.ej
C.b.M(v.a,v.d,p)
m=a.db.gZ()
for(v=this.dx.y,u=v.length,t=[P.w],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
h=this.a.cG
if(l>=h.length)return H.l(h,l)
i=h[l]
h=j.gbh()
H.i(q,"$isb",s,"$asb")
if(!C.a.T(q,h)){h.sc5(q.length)
C.a.h(q,h)}e=m.B(0,j.gZ())
h=j.gZ()
g=$.bu
if(g==null){g=new V.af(0,0,0)
$.bu=g}g=h.bj(g)
h=i.b
f=g.gcY(g)
d=g.gcZ(g)
g=g.gd_(g)
C.b.t(h.a,h.d,f,d,g)
h=$.bu
if(h==null){h=new V.af(0,0,0)
$.bu=h}h=e.bj(h)
g=i.c
C.b.t(g.a,g.d,h.a,h.b,h.c)
h=e.cK()
g=i.d
n=new Float32Array(H.bG(H.i(new V.en(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ab(0,!0),"$isb",t,"$asb")))
C.b.ez(g.a,g.d,!1,n)
g=j.gak(j)
h=i.e
f=g.gbQ()
d=g.gbl()
g=g.gbv()
C.b.t(h.a,h.d,f,d,g)
g=j.gbh()
h=g.gbN(g)
if(!h){h=i.r
C.b.M(h.a,h.d,1)}else{h=i.f
f=g.gjR()
d=h.a
h=h.d
if(!(f>=6))C.b.M(d,h,0)
else C.b.M(d,h,g.gc5())
h=i.r
C.b.M(h.a,h.d,0)}h=j.gcn()
g=i.x
C.b.H(g.a,g.d,h)
h=j.gco()
g=i.y
C.b.H(g.a,g.d,h)
h=j.gcp()
g=i.z
C.b.H(g.a,g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.ek
C.b.M(v.a,v.d,p)
m=a.db.gZ()
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.cH
if(l>=t.length)return H.l(t,l)
i=t[l]
t=j.gbh()
H.i(q,"$isb",z,"$asb")
if(!C.a.T(q,t)){t.sc5(q.length)
C.a.h(q,t)}t=j.gbd(j)
s=i.b
h=t.gcY(t)
g=t.gcZ(t)
t=t.gd_(t)
C.b.t(s.a,s.d,h,g,t)
t=j.gcA(j)
g=i.c
h=t.gaS(t)
s=t.gaT(t)
t=t.gaU()
C.b.t(g.a,g.d,h,s,t)
t=j.gbS()
s=i.d
h=t.gaS(t)
g=t.gaT(t)
t=t.gaU()
C.b.t(s.a,s.d,h,g,t)
t=j.gbe(j)
g=i.e
h=t.gaS(t)
s=t.gaT(t)
t=t.gaU()
C.b.t(g.a,g.d,h,s,t)
t=m.bj(j.gbd(j))
s=i.f
C.b.t(s.a,s.d,t.a,t.b,t.c)
t=j.gbh()
s=t.gbN(t)
if(!s){t=i.x
C.b.M(t.a,t.d,1)}else{s=i.r
h=t.gbN(t)
g=s.a
s=s.d
if(!h)C.b.M(g,s,0)
else C.b.M(g,s,t.gj8(t))
t=i.x
C.b.M(t.a,t.d,0)}t=j.gak(j)
s=i.y
h=t.gbQ()
g=t.gbl()
t=t.gbv()
C.b.t(s.a,s.d,h,g,t)
t=j.gkB()
g=i.z
C.b.H(g.a,g.d,t)
t=j.gkC()
g=i.Q
C.b.H(g.a,g.d,t)
t=j.gcn()
g=i.ch
C.b.H(g.a,g.d,t)
t=j.gco()
g=i.cx
C.b.H(g.a,g.d,t)
t=j.gcp()
g=i.cy
C.b.H(g.a,g.d,t);++l}}}switch(x.f){case C.c:break
case C.f:break
case C.e:this.U(q,this.Q.d)
z=this.a
v=this.Q.d
z.aj(z.e5,z.bE,v)
break
case C.d:this.U(q,this.Q.e)
z=this.a
v=this.Q.e
z.ad(z.e6,z.bE,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db.gZ().cK()
a.Q=v}z=z.id
z.toString
z.ag(v.ab(0,!0))}if(x.dy){this.U(q,this.ch)
z=this.a
v=this.ch
z.ad(z.e7,z.e8,v)
switch(x.r){case C.c:break
case C.f:z=this.a
v=this.cx.f
z=z.bF
z.toString
u=v.a
t=v.b
v=v.c
C.b.t(z.a,z.d,u,t,v)
break
case C.e:this.U(q,this.cx.d)
z=this.a
v=this.cx.d
z.aj(z.e9,z.bG,v)
v=this.a
z=this.cx.f
v=v.bF
v.toString
u=z.a
t=z.b
z=z.c
C.b.t(v.a,v.d,u,t,z)
break
case C.d:this.U(q,this.cx.e)
z=this.a
v=this.cx.e
z.ad(z.ea,z.bG,v)
v=this.a
z=this.cx.f
v=v.bF
v.toString
u=z.a
t=z.b
z=z.c
C.b.t(v.a,v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.f:z=this.a
v=this.cy.f
z=z.bI
z.toString
u=v.a
t=v.b
v=v.c
C.b.t(z.a,z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bH
C.b.H(v.a,v.d,t)
break
case C.e:this.U(q,this.cy.d)
z=this.a
v=this.cy.d
z.aj(z.eb,z.bJ,v)
v=this.a
z=this.cy.f
v=v.bI
v.toString
u=z.a
t=z.b
z=z.c
C.b.t(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bH
C.b.H(z.a,z.d,t)
break
case C.d:this.U(q,this.cy.e)
z=this.a
v=this.cy.e
z.ad(z.ec,z.bJ,v)
v=this.a
z=this.cy.f
v=v.bI
v.toString
u=z.a
t=z.b
z=z.c
C.b.t(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bH
C.b.H(z.a,z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.f:z=this.a
u=this.db.f
z=z.bK
C.b.H(z.a,z.d,u)
break
case C.e:this.U(q,this.db.d)
z=this.a
u=this.db.d
z.aj(z.ed,z.bL,u)
u=this.a
z=this.db.f
u=u.bK
C.b.H(u.a,u.d,z)
break
case C.d:this.U(q,this.db.e)
z=this.a
u=this.db.e
z.ad(z.ee,z.bL,u)
u=this.a
z=this.db.f
u=u.bK
C.b.H(u.a,u.d,z)
break}z=a.a
C.b.cB(z,3042)
C.b.iE(z,770,771)}for(o=0;o<q.length;++o)q[o].Y(a)
z=b.e
z.Y(a)
z.aa(a)
z.aE(a)
if(v)C.b.iY(a.a,3042)
for(z=a.a,o=0;o<q.length;++o){v=q[o]
if(v.c){v.c=!1
C.b.cm(z,33984+v.a)
C.b.ax(z,34067,null)}}v=this.a
v.toString
C.b.cV(z,null)
v.x.dX()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dk().am}},ib:{"^":"cX;0f,a,b,0c,0d,0e",
hI:function(a){var z,y
z=this.f
if(!$.m.$2(z,a)){y=this.f
this.f=a
z=new D.D(this.b,y,a,this,[P.w])
z.b=!0
this.a.V(z)}},
aO:function(){this.d6()
this.hI(1)}},cX:{"^":"a;",
V:[function(a){this.a.V(H.e(a,"$isu"))},function(){return this.V(null)},"dw","$1","$0","gaN",0,2,0],
aO:["d6",function(){}],
hK:function(a){},
hL:function(a){var z,y
z=this.e
if(z==null?a!=null:z!==a){if(z!=null)z.gp().R(0,this.gaN())
y=this.e
this.e=a
if(a!=null)a.gp().h(0,this.gaN())
z=new D.D(this.b+".textureCube",y,this.e,this,[T.ch])
z.b=!0
this.a.V(z)}},
saY:function(a){var z=this.c
if(z!==C.d){if(z===C.c)this.aO()
this.c=C.d
this.hK(null)
z=this.a
z.a=null
z.V(null)}this.hL(a)}},ic:{"^":"cX;a,b,0c,0d,0e"},b2:{"^":"cX;0f,a,b,0c,0d,0e",
dF:function(a){var z,y
if(!J.U(this.f,a)){z=this.f
this.f=a
y=new D.D(this.b+".color",z,a,this,[V.V])
y.b=!0
this.a.V(y)}},
aO:["bY",function(){this.d6()
this.dF(new V.V(1,1,1))}],
sak:function(a,b){var z
if(this.c===C.c){this.c=C.f
this.aO()
z=this.a
z.a=null
z.V(null)}this.dF(b)}},ie:{"^":"b2;0ch,0f,a,b,0c,0d,0e",
hJ:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.D(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.V(z)}},
aO:function(){this.bY()
this.hJ(1)}},ig:{"^":"b2;0ch,0f,a,b,0c,0d,0e",
cj:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.D(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.V(z)}},
aO:function(){this.bY()
this.cj(100)}},j2:{"^":"by;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
V:[function(a){var z
H.e(a,"$isu")
z=this.e
if(!(z==null))z.D(a)},function(){return this.V(null)},"dw","$1","$0","gaN",0,2,0],
eu:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.e(a.fr.l(0,"Skybox"),"$iseI")
if(z==null){y=a.a
z=new A.eI(y,"Skybox")
z.d7(y,"Skybox")
z.em($.j4,$.j3)
z.z=z.x.l(0,"posAttr")
z.Q=H.d(z.y.l(0,"fov"),"$isS")
z.ch=H.d(z.y.l(0,"ratio"),"$isS")
z.cx=H.d(z.y.l(0,"boxClr"),"$isE")
z.cy=H.d(z.y.l(0,"boxTxt"),"$isa9")
z.db=H.d(z.y.l(0,"viewMat"),"$isas")
a.dM(z)}this.a=z}if(b.e==null){y=b.d.dR(new Z.fi(a.a),$.$get$at())
y.az($.$get$at()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.Y(a)}y=a.d
x=a.c
w=this.a
w.Y(a)
v=this.b
u=w.Q
C.b.H(u.a,u.d,v)
v=w.ch
C.b.H(v.a,v.d,y/x)
x=this.c
w.cy.d3(x)
x=this.d
y=w.cx
C.b.t(y.a,y.d,x.a,x.b,x.c)
x=a.db.gZ().cK()
w=w.db
w.toString
w.ag(x.ab(0,!0))
y=b.e
if(y instanceof Z.cI){y.Y(a)
y.aa(a)
y.aE(a)}else b.e=null
y=this.a
y.toString
C.b.cV(a.a,null)
y.x.dX()
y=this.c
if(y!=null)y.aE(a)}},by:{"^":"a;"}}],["","",,T,{"^":"",d9:{"^":"cF;"},ch:{"^":"d9;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
Y:function(a){var z
if(!this.c&&this.d>=6){this.c=!0
z=a.a
C.b.cm(z,33984+this.a)
C.b.ax(z,34067,this.b)}},
aE:function(a){var z
if(this.c){this.c=!1
z=a.a
C.b.cm(z,33984+this.a)
C.b.ax(z,34067,null)}}},jf:{"^":"a;a,0b,0c,0d,0e",
eo:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
z=a+"/"+d+"posx"+b
y=a+"/"+d+"posy"+b
x=a+"/"+d+"posz"+b
w=a+"/"+d+"negx"+b
v=a+"/"+d+"negy"+b
u=a+"/"+d+"negz"+b
t=this.a
s=t.createTexture()
C.b.ax(t,34067,s)
C.b.bR(t,34067,10242,10497)
C.b.bR(t,34067,10243,10497)
C.b.bR(t,34067,10241,9729)
C.b.bR(t,34067,10240,9729)
C.b.ax(t,34067,null)
r=new T.ch()
r.a=0
r.b=s
r.c=!1
r.d=0
this.aM(r,s,z,34069,!1,!1)
this.aM(r,s,w,34070,!1,!1)
this.aM(r,s,y,34071,!1,!1)
this.aM(r,s,v,34072,!1,!1)
this.aM(r,s,x,34073,!1,!1)
this.aM(r,s,u,34074,!1,!1)
return r},
jf:function(a,b){return this.eo(a,b,!1,"")},
cM:function(a){return this.eo(a,".png",!1,"")},
aM:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a3
W.W(z,"load",H.j(new T.jg(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
hD:function(a,b,c){var z,y,x,w
b=V.dF(b,2)
z=V.dF(a.width,2)
y=V.dF(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cK(null,null)
x.width=z
x.height=y
w=H.e(C.o.eH(x,"2d"),"$iscL")
w.imageSmoothingEnabled=!1;(w&&C.y).j_(w,a,0,0,x.width,x.height)
return P.l_(C.y.fP(w,0,0,x.width,x.height))}}},jg:{"^":"t:24;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.hD(this.b,z.c,this.c)
x=z.a
C.b.ax(x,34067,this.d)
C.b.ju(x,37440,this.e?1:0)
C.b.jG(x,this.f,0,6408,6408,5121,y)
C.b.ax(x,34067,null)
x=this.r
if(++x.d>=6){x=x.e
if(!(x==null))x.j0()}++z.e}}}],["","",,V,{"^":"",bj:{"^":"a;",
aW:function(a){return!0},
i:function(a){return"all"},
$isaw:1},aw:{"^":"a;"},el:{"^":"a;0a",
sa5:function(a){this.a=H.i(a,"$isb",[V.aw],"$asb")},
aW:["eZ",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aW(a))return!0
return!1}],
i:["d5",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaw:1},aq:{"^":"el;0a",
aW:function(a){return!this.eZ(a)},
i:function(a){return"!["+this.d5(0)+"]"}},iG:{"^":"a;0a,0b",
aW:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.d0(this.a)
y=H.d0(this.b)
return z+".."+y},
$isaw:1,
n:{
M:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.h(P.o("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.i.aJ(a,0)
y=C.i.aJ(b,0)
x=new V.iG()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},iS:{"^":"a;0a",
shH:function(a){this.a=H.i(a,"$isae",[P.y,P.I],"$asae")},
f3:function(a){var z,y
if(a.a.length<=0)throw H.h(P.o("May not create a SetMatcher with zero characters."))
z=new H.b1(0,0,[P.y,P.I])
for(y=new H.cW(a,a.gq(a),0,[H.Z(a,"T",0)]);y.v();)z.X(0,y.d,!0)
this.shH(z)},
aW:function(a){return this.a.dV(a)},
i:function(a){var z=this.a
return P.d6(new H.eg(z,[H.v(z,0)]),0,null)},
$isaw:1,
n:{
r:function(a){var z=new V.iS()
z.f3(a)
return z}}},d3:{"^":"a;a,b,0c,0d",
si0:function(a){this.c=H.i(a,"$isb",[V.dc],"$asb")},
k:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dc(this.a.j(0,b))
w.sa5(H.c([],[V.aw]))
w.c=!1
C.a.h(this.c,w)
return w},
j2:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aW(a))return w}return},
i:function(a){return this.b}},eV:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.dH(this.b,"\n","\\n")
y=H.dH(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},db:{"^":"a;a,b,0c",
shz:function(a){var z=P.n
this.c=H.i(a,"$isae",[z,z],"$asae")},
aC:function(a,b,c){var z,y,x
H.i(c,"$isb",[P.n],"$asb")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.x)(c),++y){x=c[y]
this.c.X(0,x,b)}},
i:function(a){return this.b}},jl:{"^":"a;0a,0b,0c",
shS:function(a){this.a=H.i(a,"$isae",[P.n,V.d3],"$asae")},
shX:function(a){this.b=H.i(a,"$isae",[P.n,V.db],"$asae")},
j:function(a,b){var z=this.a.l(0,b)
if(z==null){z=new V.d3(this,b)
z.si0(H.c([],[V.dc]))
z.d=null
this.a.X(0,b,z)}return z},
L:function(a){var z,y
z=this.b.l(0,a)
if(z==null){z=new V.db(this,a)
y=P.n
z.shz(new H.b1(0,0,[y,y]))
this.b.X(0,a,z)}return z},
ey:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eV])
y=this.c
x=[P.y]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.aJ(a,t)
r=y.j2(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.d6(w,0,null)
throw H.h(P.o("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.d6(w,0,null)
p=y.d
o=p.c.l(0,q)
u=new V.eV(o==null?p.b:o,q,t)}++t}}},
n:{
ci:function(){var z,y
z=new V.jl()
y=P.n
z.shS(new H.b1(0,0,[y,V.d3]))
z.shX(new H.b1(0,0,[y,V.db]))
z.c=null
return z}}},dc:{"^":"el;b,0c,0a",
i:function(a){return this.b.b+": "+this.d5(0)}}}],["","",,X,{"^":"",c_:{"^":"a;",$isaz:1},hE:{"^":"d8;0a,0b,0c,0d,0e,0f,0r,0x",
gp:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
sdT:function(a,b){var z,y
if(this.b){this.b=!1
z=new D.D("clearColor",!0,!1,this,[P.I])
z.b=!0
y=this.x
if(!(y==null))y.D(z)}},
Y:function(a){var z,y,x,w,v,u,t,s
z=a.a
C.b.iD(z,36160,null)
C.b.cB(z,2884)
C.b.cB(z,2929)
C.b.iX(z,513)
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
v=w.a
if(typeof y!=="number")return H.B(y)
u=C.k.an(v*y)
v=w.b
if(typeof x!=="number")return H.B(x)
t=C.k.an(v*x)
v=C.k.an(w.c*y)
a.c=v
w=C.k.an(w.d*x)
a.d=w
C.b.jO(z,u,t,v,w)
C.b.iI(z,this.c)
if(this.b){w=this.a
C.b.iH(z,w.a,w.b,w.c,w.d)
s=16640}else s=256
C.b.iG(z,s)},
n:{
cQ:function(a,b,c,d,e,f,g){var z,y
z=new X.hE()
y=new V.aQ(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=$.eE
if(y==null){y=V.eD(0,0,1,1)
$.eE=y}z.r=y
return z}}},hM:{"^":"a;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
Y:function(a){var z
a.cy.bP(V.b3())
z=V.b3()
a.db.bP(z)},
aE:function(a){a.cy.aB()
a.db.aB()},
$isaz:1,
$isc_:1},is:{"^":"a;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
b1:[function(a){var z
H.e(a,"$isu")
z=this.f
if(!(z==null))z.D(a)},function(){return this.b1(null)},"jQ","$1","$0","gfl",0,2,0],
Y:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.ax(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bP(s)
z=$.ev
if(z==null){z=V.ey()
y=V.fd()
x=$.fa
if(x==null){x=new V.L(0,0,-1)
$.fa=x}x=V.eo(z,y,x)
$.ev=x
r=x}else r=z
z=this.b
if(z!=null){q=z.aZ(a,this)
if(q!=null)r=q.B(0,r)}a.db.bP(r)},
aE:function(a){a.cy.aB()
a.db.aB()},
$isaz:1,
$isc_:1,
n:{
eu:function(a,b,c,d,e){var z,y,x
z=new X.is()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gp().h(0,z.gfl())
x=new D.D("mover",y,z.b,z,[U.a6])
x.b=!0
z.b1(x)}x=z.c
if(!$.m.$2(x,b)){y=z.c
z.c=b
x=new D.D("fov",y,b,z,[P.w])
x.b=!0
z.b1(x)}x=z.d
if(!$.m.$2(x,d)){y=z.d
z.d=d
x=new D.D("near",y,d,z,[P.w])
x.b=!0
z.b1(x)}x=z.e
if(!$.m.$2(x,a)){y=z.e
z.e=a
x=new D.D("far",y,a,z,[P.w])
x.b=!0
z.b1(x)}return z}}},d8:{"^":"a;"}}],["","",,V,{"^":"",
lo:function(a){P.jk(C.K,new V.lp(a))},
aP:{"^":"a;0d",
sc7:function(a){this.d=H.i(a,"$isb",[[P.b,W.aS]],"$asb")},
bo:function(a){this.b=new P.hK(C.M)
this.c=null
this.sc7(H.c([],[[P.b,W.aS]]))},
I:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.aS]))
y=a.split("\n")
for(z=y.length,x=[W.aS],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.F(u)
s=this.b.fB(u,0,u.length)
r=s==null?u:s
C.j.eR(t,H.dH(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gbM(this.d),t)}},
es:function(a){var z,y,x,w
H.i(a,"$isb",[P.n],"$asb")
this.sc7(H.c([],[[P.b,W.aS]]))
z=C.a.k(a,"\n")
y=this.c
if(y==null){y=this.bw()
this.c=y}for(y=y.ey(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)this.bO(y[w])}},
lp:{"^":"t:40;a",
$1:function(a){H.e(a,"$isb6")
P.dG(C.k.ex(this.a.gj6(),2)+" fps")}},
hi:{"^":"aP;a,0b,0c,0d",
bO:function(a){switch(a.a){case"Class":this.I(a.b,"#551")
break
case"Comment":this.I(a.b,"#777")
break
case"Id":this.I(a.b,"#111")
break
case"Num":this.I(a.b,"#191")
break
case"Reserved":this.I(a.b,"#119")
break
case"String":this.I(a.b,"#171")
break
case"Symbol":this.I(a.b,"#616")
break
case"Type":this.I(a.b,"#B11")
break
case"Whitespace":this.I(a.b,"#111")
break}},
bw:function(){var z,y,x,w
z=V.ci()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
x=V.M("a","z")
C.a.h(y.a,x)
x=V.M("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.r(new H.q("_"))
C.a.h(x.a,y)
y=V.M("0","9")
C.a.h(x.a,y)
y=V.M("a","z")
C.a.h(x.a,y)
y=V.M("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.M("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.M("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.r(new H.q("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.M("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.M("0","9")
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
C.a.h(z.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.bj())
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
C.a.h(z.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.bj())
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
x=new V.aq()
w=[V.aw]
x.sa5(H.c([],w))
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
x=new V.aq()
x.sa5(H.c([],w))
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
x.d=x.a.L("Num")
x=z.j(0,"Float")
x.d=x.a.L("Num")
x=z.j(0,"Sym")
x.d=x.a.L("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.L("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.L("String")
x=z.j(0,"EndComment")
x.d=x.a.L("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.L("Whitespace")
x=z.j(0,"Id")
y=x.a.L("Id")
x.d=y
x=[P.n]
y.aC(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aC(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aC(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
hF:{"^":"aP;a,0b,0c,0d",
bO:function(a){switch(a.a){case"Builtin":this.I(a.b,"#411")
break
case"Comment":this.I(a.b,"#777")
break
case"Id":this.I(a.b,"#111")
break
case"Num":this.I(a.b,"#191")
break
case"Preprocess":this.I(a.b,"#737")
break
case"Reserved":this.I(a.b,"#119")
break
case"Symbol":this.I(a.b,"#611")
break
case"Type":this.I(a.b,"#171")
break
case"Whitespace":this.I(a.b,"#111")
break}},
bw:function(){var z,y,x,w
z=V.ci()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
x=V.M("a","z")
C.a.h(y.a,x)
x=V.M("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.r(new H.q("_"))
C.a.h(x.a,y)
y=V.M("0","9")
C.a.h(x.a,y)
y=V.M("a","z")
C.a.h(x.a,y)
y=V.M("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.M("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.M("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.r(new H.q("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.M("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.M("0","9")
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
C.a.h(z.j(0,"Slash").k(0,"Sym").a,new V.bj())
x=z.j(0,"Comment").k(0,"EndComment")
y=V.r(new H.q("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.aq()
w=[V.aw]
x.sa5(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Preprocess")
x=V.r(new H.q("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"Preprocess")
y=new V.aq()
y.sa5(H.c([],w))
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
y.d=y.a.L("Num")
y=z.j(0,"Float")
y.d=y.a.L("Num")
y=z.j(0,"Sym")
y.d=y.a.L("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.L("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.L("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.L("Whitespace")
y=z.j(0,"Id")
x=y.a.L("Id")
y.d=x
y=[P.n]
x.aC(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aC(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aC(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
hG:{"^":"aP;a,0b,0c,0d",
bO:function(a){switch(a.a){case"Attr":this.I(a.b,"#911")
this.I("=","#111")
break
case"Id":this.I(a.b,"#111")
break
case"Other":this.I(a.b,"#111")
break
case"Reserved":this.I(a.b,"#119")
break
case"String":this.I(a.b,"#171")
break
case"Symbol":this.I(a.b,"#616")
break}},
bw:function(){var z,y,x
z=V.ci()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
x=V.M("a","z")
C.a.h(y.a,x)
x=V.M("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.r(new H.q("_"))
C.a.h(x.a,y)
y=V.M("0","9")
C.a.h(x.a,y)
y=V.M("a","z")
C.a.h(x.a,y)
y=V.M("A","Z")
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
C.a.h(z.j(0,"OpenStr").k(0,"OpenStr").a,new V.bj())
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.bj())
y=z.j(0,"Other").k(0,"Other")
x=new V.aq()
x.sa5(H.c([],[V.aw]))
C.a.h(y.a,x)
y=V.r(new H.q('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.M("a","z")
C.a.h(x.a,y)
y=V.M("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.L("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.L("String")
y=z.j(0,"Id")
x=y.a.L("Id")
y.d=x
x.aC(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.n]))
x=z.j(0,"Attr")
x.d=x.a.L("Attr")
x=z.j(0,"Other")
x.d=x.a.L("Other")
return z}},
iu:{"^":"aP;a,0b,0c,0d",
es:function(a){H.i(a,"$isb",[P.n],"$asb")
this.sc7(H.c([],[[P.b,W.aS]]))
this.I(C.a.k(a,"\n"),"#111")},
bO:function(a){},
bw:function(){return}},
iY:{"^":"a;0a,0b",
f4:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.n).C(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.n.C(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.j.C(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.j.C(v,u)}t=z.createElement("div")
this.a=t
C.j.C(v,t)
this.b=null
t=W.a3
W.W(z,"scroll",H.j(new V.j0(x),{func:1,ret:-1,args:[t]}),!1,t)},
dL:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.i(a,"$isb",[P.n],"$asb")
this.hN()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ey(C.a.jb(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.j.C(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.j.C(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.j.C(y,t)
break
case"Link":s=u.b
if(H.fT(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.l(r,1)
q.href=H.F(r[1])
q.textContent=H.F(r[0])
C.j.C(y,q)}else{p=P.fA(C.C,s,C.x,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
C.j.C(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.j.C(y,t)
break}}C.j.C(this.a,y)},
eG:function(a){var z,y,x,w
z=new V.hi("dart")
z.bo("dart")
y=new V.hF("glsl")
y.bo("glsl")
x=new V.hG("html")
x.bo("html")
w=C.a.j3(H.c([z,y,x],[V.aP]),new V.j1(a))
if(w!=null)return w
z=new V.iu("plain")
z.bo("plain")
return z},
dK:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.i(a2,"$isb",[P.n],"$asb")
z=H.c([],[P.y])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.dC(w).bW(w,"+")){C.a.X(a2,x,C.i.bm(w,1))
C.a.h(z,1)
y=!0}else if(C.i.bW(w,"-")){C.a.X(a2,x,C.i.bm(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.eG(a0)
v.es(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.j.C(t,s)
C.j.C(this.a,t)
r=P.fA(C.C,a,C.x,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.dK(null)
n.href="#"+r
n.textContent=a
C.j.C(o,n)
C.v.C(p,o)
C.m.C(q,p)
C.p.C(s,q)
if(y)for(m=a1,l=m,x=0;k=v.d,x<k.length;++x){w=k[x]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums codeLineLight"
h=u.createElement("td")
h.className="codeLineNums"
if(x>=z.length)return H.l(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.x)(w),++e)C.v.C(f,w[e])
C.m.C(j,i)
C.m.C(j,h)
C.m.C(j,f)
C.p.C(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.x)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gN(w);b.v();)C.v.C(h,b.gF())
C.m.C(j,i)
C.m.C(j,h)
C.p.C(s,j)}},
hN:function(){var z,y,x,w
if(this.b!=null)return
z=V.ci()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Bold")
x=V.r(new H.q("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").k(0,"Bold")
x=new V.aq()
w=[V.aw]
x.sa5(H.c([],w))
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
x=new V.aq()
x.sa5(H.c([],w))
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
x=new V.aq()
x.sa5(H.c([],w))
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
y=new V.aq()
y.sa5(H.c([],w))
C.a.h(x.a,y)
x=V.r(new H.q("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").k(0,"LinkEnd")
y=V.r(new H.q("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").k(0,"LinkTail")
y=new V.aq()
y.sa5(H.c([],w))
C.a.h(x.a,y)
x=V.r(new H.q("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.bj())
x=z.j(0,"Other").k(0,"Other")
y=new V.aq()
y.sa5(H.c([],w))
C.a.h(x.a,y)
x=V.r(new H.q("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.L("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.L("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.L("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.L("Link")
x=z.j(0,"Other")
x.d=x.a.L("Other")
this.b=z},
n:{
iZ:function(a,b){var z=new V.iY()
z.f4(a,!0)
return z}}},
j0:{"^":"t:24;a",
$1:function(a){P.eT(C.q,new V.j_(this.a))}},
j_:{"^":"t:2;a",
$0:function(){var z,y,x
z=C.k.an(document.documentElement.scrollTop)
y=this.a.style
x=H.f(-0.01*z)+"px"
y.top=x}},
j1:{"^":"t:41;a",
$1:function(a){return H.e(a,"$isaP").a===this.a}}}],["","",,X,{"^":"",
fP:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.iZ("Test 016",!0)
y=W.cK(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.j.C(z.a,y)
x=[P.n]
z.dL(H.c(["A test of the Material Lighting shader with cube texturing, ","bump mapping, and a color directional light."],x))
z.dL(H.c(["\xab[Back to Tests|../]"],x))
w=C.z.eI(document,"testCanvas")
if(w==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
v=E.ji(w,!0,!0,!0,!1)
u=X.cQ(!0,!0,!1,null,2000,null,0)
u.sdT(0,!1)
t=E.e6(null,!0,null,"",null,null)
s=F.d2()
F.bE(s,null,null,1,1,1,0,0,1)
F.bE(s,null,null,1,1,0,1,0,3)
F.bE(s,null,null,1,1,0,0,1,2)
F.bE(s,null,null,1,1,-1,0,0,0)
F.bE(s,null,null,1,1,0,-1,0,0)
F.bE(s,null,null,1,1,0,0,-1,3)
s.ay()
t.sbV(0,s)
r=v.f.jf("../resources/maskonaive",".jpg")
q=v.f.cM("../resources/diceColor")
p=new O.i9()
p.sft(O.cN(V.ao))
p.e.b0(p.gh3(),p.gh4())
x=new O.b2(p,"emission")
x.c=C.c
x.f=new V.V(0,0,0)
p.f=x
x=new O.b2(p,"ambient")
x.c=C.c
x.f=new V.V(0,0,0)
p.r=x
x=new O.b2(p,"diffuse")
x.c=C.c
x.f=new V.V(0,0,0)
p.x=x
x=new O.b2(p,"invDiffuse")
x.c=C.c
x.f=new V.V(0,0,0)
p.y=x
x=new O.ig(p,"specular")
x.c=C.c
x.f=new V.V(0,0,0)
x.ch=100
p.z=x
x=new O.ic(p,"bump")
x.c=C.c
p.Q=x
p.ch=null
x=new O.b2(p,"reflect")
x.c=C.c
x.f=new V.V(0,0,0)
p.cx=x
x=new O.ie(p,"refract")
x.c=C.c
x.f=new V.V(0,0,0)
x.ch=1
p.cy=x
x=new O.ib(p,"alpha")
x.c=C.c
x.f=1
p.db=x
x=new D.hW()
x.bp(D.Y)
x.sfF(H.c([],[D.c2]))
x.sht(H.c([],[D.ew]))
x.shR(H.c([],[D.eJ]))
x.si1(H.c([],[D.eP]))
x.si2(H.c([],[D.eQ]))
x.si3(H.c([],[D.eR]))
x.Q=null
x.ch=null
x.d2(x.gh2(),x.ghl(),x.ghn())
p.dx=x
o=x.Q
if(o==null){o=D.C()
x.Q=o
x=o}else x=o
x.h(0,p.ghB())
x=p.dx
o=x.ch
if(o==null){o=D.C()
x.ch=o
x=o}else x=o
o=p.gaN()
x.h(0,o)
p.dy=null
x=p.dx
n=V.fd()
m=U.dV(V.eo(V.ey(),n,new V.L(1,-1,-3)))
l=new V.V(1,1,1)
k=new D.c2()
k.c=new V.V(1,1,1)
k.a=V.jI()
j=k.b
k.b=m
m.gp().h(0,k.gfb())
m=new D.D("mover",j,k.b,k,[U.a6])
m.b=!0
k.aH(m)
if(!k.c.u(0,l)){j=k.c
k.c=l
m=new D.D("color",j,l,k,[V.V])
m.b=!0
k.aH(m)}x.h(0,k)
x=p.r
x.sak(0,new V.V(0.2,0.2,0.2))
x=p.x
x.sak(0,new V.V(0.7,0.7,0.7))
x=p.z
x.sak(0,new V.V(0.7,0.7,0.7))
p.r.saY(q)
p.x.saY(q)
p.z.saY(v.f.cM("../resources/diceSpecular"))
x=p.z
if(x.c===C.c){x.c=C.f
x.bY()
x.cj(100)
m=x.a
m.a=null
m.V(null)}x.cj(10)
p.Q.saY(v.f.cM("../resources/diceBumpMap"))
x=p.ch
if(x!==r){if(x!=null)x.gp().R(0,o)
j=p.ch
p.ch=r
r.gp().h(0,o)
x=new D.D("environment",j,p.ch,p,[T.ch])
x.b=!0
p.V(x)}x=p.cx
x.sak(0,new V.V(0.3,0.3,0.3))
i=new U.e8()
i.bp(U.a6)
i.b0(i.gh1(),i.ghm())
i.e=null
i.f=V.b3()
i.r=0
x=v.r
o=new U.jE()
m=U.cO()
m.scX(0,!0)
m.scN(6.283185307179586)
m.scP(0)
m.sa8(0,0)
m.scO(100)
m.sS(0)
m.scz(0.5)
o.b=m
k=o.gaI()
m.gp().h(0,k)
m=U.cO()
m.scX(0,!0)
m.scN(6.283185307179586)
m.scP(0)
m.sa8(0,0)
m.scO(100)
m.sS(0)
m.scz(0.5)
o.c=m
m.gp().h(0,k)
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
h=new X.ay(!1,!1,!1)
j=o.d
o.d=h
m=[X.ay]
k=new D.D("modifiers",j,h,o,m)
k.b=!0
o.P(k)
k=o.f
if(k!==!1){o.f=!1
k=new D.D("invertX",k,!1,o,[P.I])
k.b=!0
o.P(k)}k=o.r
if(k!==!1){o.r=!1
k=new D.D("invertY",k,!1,o,[P.I])
k.b=!0
o.P(k)}o.b7(x)
i.h(0,o)
x=v.r
o=new U.jD()
k=U.cO()
k.scX(0,!0)
k.scN(6.283185307179586)
k.scP(0)
k.sa8(0,0)
k.scO(100)
k.sS(0)
k.scz(0.2)
o.b=k
k.gp().h(0,o.gaI())
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
h=new X.ay(!0,!1,!1)
j=o.c
o.c=h
k=new D.D("modifiers",j,h,o,m)
k.b=!0
o.P(k)
o.b7(x)
i.h(0,o)
x=v.r
o=new U.jF()
o.c=0.01
o.d=0
o.e=0
h=new X.ay(!1,!1,!1)
o.b=h
m=new D.D("modifiers",null,h,o,m)
m.b=!0
o.P(m)
o.b7(x)
i.h(0,o)
i.h(0,U.dV(V.ax(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
g=X.eu(2000,1.0471975511965976,i,0.1,null)
f=new M.hf()
f.sb8(null)
f.sbf(0,null)
f.sbg(null)
x=E.e6(null,!0,null,"",null,null)
s=F.d2()
o=s.a
m=new V.L(-1,-1,1)
m=m.w(0,Math.sqrt(m.E(m)))
e=o.bu(new V.bv(1,2,4,6),new V.aQ(1,0,0,1),new V.af(-1,-1,0),new V.a2(0,1),m,null)
o=s.a
m=new V.L(1,-1,1)
m=m.w(0,Math.sqrt(m.E(m)))
d=o.bu(new V.bv(0,3,4,6),new V.aQ(0,0,1,1),new V.af(1,-1,0),new V.a2(1,1),m,null)
o=s.a
m=new V.L(1,1,1)
m=m.w(0,Math.sqrt(m.E(m)))
c=o.bu(new V.bv(0,2,5,6),new V.aQ(0,1,0,1),new V.af(1,1,0),new V.a2(1,0),m,null)
o=s.a
m=V.aG()
k=new V.L(-1,1,1)
k=k.w(0,Math.sqrt(k.E(k)))
b=o.bu(new V.bv(0,2,4,7),new V.aQ(1,1,0,1),new V.af(-1,1,0),m,k,null)
s.d.iv(H.c([e,d,c,b],[F.aD]))
s.ay()
x.sbV(0,s)
f.d=x
f.e=null
x=new O.j2()
x.b=1.0471975511965976
x.d=new V.V(1,1,1)
j=x.c
x.c=r
r.gp().h(0,x.gaN())
o=new D.D("boxTexture",j,x.c,x,[T.ch])
o.b=!0
x.V(o)
f.sbg(x)
f.sbf(0,u)
f.sb8(g)
a=new M.hv()
a.sfz(0,O.cN(E.am))
a.d.b0(a.gh6(),a.gh7())
a.e=null
a.f=null
a.r=null
a.x=null
a.sb8(null)
a.sbf(0,null)
a.sbg(null)
a.sb8(g)
a.sbg(p)
a.sbf(0,u)
a.d.h(0,t)
a.b.sdT(0,!1)
x=M.aB
o=H.c([f,a],[x])
m=new M.hd()
m.bp(x)
m.e=!1
m.f=null
m.b0(m.gho(),m.ghp())
m.a6(0,o)
x=v.d
if(x!==m){if(x!=null)x.gp().R(0,v.gd9())
v.d=m
m.gp().h(0,v.gd9())
v.f7()}x=v.z
if(x==null){x=D.C()
v.z=x}o={func:1,ret:-1,args:[D.u]}
m=H.j(new X.lh(z,p),o)
if(x.b==null)x.sb4(H.c([],[o]))
x=x.b;(x&&C.a).h(x,m)
V.lo(v)},
lh:{"^":"t:7;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isu")
z=this.a
y=this.b
x=y.a
w=[P.n]
z.dK("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dK("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.O=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ec.prototype
return J.eb.prototype}if(typeof a=="string")return J.c9.prototype
if(a==null)return J.ed.prototype
if(typeof a=="boolean")return J.hR.prototype
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cv(a)}
J.cu=function(a){if(typeof a=="string")return J.c9.prototype
if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cv(a)}
J.dB=function(a){if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cv(a)}
J.l3=function(a){if(typeof a=="number")return J.c8.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ck.prototype
return a}
J.dC=function(a){if(typeof a=="string")return J.c9.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ck.prototype
return a}
J.a5=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cv(a)}
J.U=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).u(a,b)}
J.fV=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.l3(a).ap(a,b)}
J.fW=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.le(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cu(a).l(a,b)}
J.fX=function(a,b,c,d){return J.a5(a).fo(a,b,c,d)}
J.bX=function(a,b){return J.a5(a).hx(a,b)}
J.dI=function(a,b){return J.a5(a).C(a,b)}
J.cB=function(a,b,c){return J.cu(a).iK(a,b,c)}
J.cC=function(a,b){return J.dB(a).a7(a,b)}
J.fY=function(a){return J.a5(a).giB(a)}
J.aY=function(a){return J.O(a).ga_(a)}
J.bi=function(a){return J.dB(a).gN(a)}
J.aZ=function(a){return J.cu(a).gq(a)}
J.fZ=function(a){return J.a5(a).gjv(a)}
J.h_=function(a){return J.a5(a).gjF(a)}
J.cD=function(a,b){return J.a5(a).b_(a,b)}
J.dJ=function(a){return J.dB(a).jx(a)}
J.h0=function(a,b,c){return J.dC(a).bn(a,b,c)}
J.h1=function(a){return J.dC(a).jM(a)}
J.a7=function(a){return J.O(a).i(a)}
I.aX=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.n=W.bY.prototype
C.o=W.cJ.prototype
C.y=W.cL.prototype
C.j=W.aS.prototype
C.J=W.hn.prototype
C.L=W.hH.prototype
C.z=W.hJ.prototype
C.N=J.G.prototype
C.a=J.b0.prototype
C.O=J.eb.prototype
C.h=J.ec.prototype
C.r=J.ed.prototype
C.k=J.c8.prototype
C.i=J.c9.prototype
C.V=J.bR.prototype
C.Z=W.im.prototype
C.D=J.it.prototype
C.E=W.iF.prototype
C.b=P.d1.prototype
C.v=W.jb.prototype
C.p=W.jc.prototype
C.m=W.jd.prototype
C.w=J.ck.prototype
C.F=W.bC.prototype
C.G=W.jS.prototype
C.H=new P.ir()
C.I=new P.jH()
C.l=new P.ko()
C.c=new A.c0(0,"ColorSourceType.None")
C.f=new A.c0(1,"ColorSourceType.Solid")
C.e=new A.c0(2,"ColorSourceType.Texture2D")
C.d=new A.c0(3,"ColorSourceType.TextureCube")
C.q=new P.bl(0)
C.K=new P.bl(5e6)
C.M=new P.hL("element",!0,!1,!1,!1)
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
C.W=H.c(I.aX(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.X=H.c(I.aX(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.n])
C.Y=H.c(I.aX([]),[P.n])
C.C=H.c(I.aX([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.t=H.c(I.aX(["bind","if","ref","repeat","syntax"]),[P.n])
C.u=H.c(I.aX(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.x=new P.jG(!1)
$.au=0
$.bk=null
$.dN=null
$.ds=!1
$.fN=null
$.fI=null
$.fS=null
$.ct=null
$.cx=null
$.dD=null
$.bb=null
$.bH=null
$.bI=null
$.dt=!1
$.N=C.l
$.aF=null
$.cP=null
$.e5=null
$.e4=null
$.e0=null
$.e_=null
$.dZ=null
$.dY=null
$.m=V.ih()
$.ep=null
$.ex=null
$.bu=null
$.eE=null
$.f9=null
$.fc=null
$.fb=null
$.cl=null
$.fa=null
$.j4="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.j3="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.ev=null
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
I.$lazy(y,x,w)}})(["dX","$get$dX",function(){return H.fM("_$dart_dartClosure")},"cT","$get$cT",function(){return H.fM("_$dart_js")},"eX","$get$eX",function(){return H.aC(H.cj({
toString:function(){return"$receiver$"}}))},"eY","$get$eY",function(){return H.aC(H.cj({$method$:null,
toString:function(){return"$receiver$"}}))},"eZ","$get$eZ",function(){return H.aC(H.cj(null))},"f_","$get$f_",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"f3","$get$f3",function(){return H.aC(H.cj(void 0))},"f4","$get$f4",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"f1","$get$f1",function(){return H.aC(H.f2(null))},"f0","$get$f0",function(){return H.aC(function(){try{null.$method$}catch(z){return z.message}}())},"f6","$get$f6",function(){return H.aC(H.f2(void 0))},"f5","$get$f5",function(){return H.aC(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dp","$get$dp",function(){return P.jT()},"bJ","$get$bJ",function(){return[]},"fz","$get$fz",function(){return P.iJ("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dW","$get$dW",function(){return{}},"fo","$get$fo",function(){return P.eh(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.n)},"dq","$get$dq",function(){return P.i_(P.n,P.bN)},"fg","$get$fg",function(){return Z.ah(0)},"fe","$get$fe",function(){return Z.ah(511)},"at","$get$at",function(){return Z.ah(1)},"aL","$get$aL",function(){return Z.ah(2)},"aK","$get$aK",function(){return Z.ah(4)},"aM","$get$aM",function(){return Z.ah(8)},"aN","$get$aN",function(){return Z.ah(16)},"bA","$get$bA",function(){return Z.ah(32)},"bB","$get$bB",function(){return Z.ah(64)},"ff","$get$ff",function(){return Z.ah(96)},"b9","$get$b9",function(){return Z.ah(128)},"aJ","$get$aJ",function(){return Z.ah(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.ap]},{func:1,ret:P.J,args:[F.a0]},{func:1,ret:-1,args:[P.y,[P.k,E.am]]},{func:1,ret:P.J,args:[D.u]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.a3]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:P.I,args:[P.n]},{func:1,ret:P.I,args:[W.aA]},{func:1,args:[,]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:P.J,args:[,]},{func:1,ret:-1,args:[W.bq]},{func:1,ret:P.J,args:[,,]},{func:1,ret:-1,args:[P.y,[P.k,D.Y]]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.y,[P.k,U.a6]]},{func:1,ret:P.n,args:[P.y]},{func:1,ret:-1,args:[P.y,[P.k,M.aB]]},{func:1,ret:-1,args:[P.y,[P.k,V.ao]]},{func:1,ret:P.J,args:[W.a3]},{func:1,ret:P.I,args:[W.A]},{func:1,ret:P.I,args:[W.P,P.n,P.n,W.bV]},{func:1,args:[W.a3]},{func:1,ret:P.n,args:[P.n]},{func:1,ret:-1,args:[W.A,W.A]},{func:1,ret:W.P,args:[W.A]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,ret:P.J,args:[,],opt:[,]},{func:1,ret:[P.aO,,],args:[,]},{func:1,ret:-1,args:[W.bC]},{func:1,ret:P.I,args:[P.w,P.w]},{func:1,ret:P.J,args:[F.aD,P.w,P.w]},{func:1,ret:P.I,args:[[P.k,D.Y]]},{func:1,ret:P.J,args:[P.b6]},{func:1,ret:P.I,args:[V.aP]},{func:1,ret:P.J,args:[P.ab]}]
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
if(x==y)H.lr(d||a)
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
Isolate.aX=a.aX
Isolate.dz=a.dz
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
if(typeof dartMainRunner==="function")dartMainRunner(X.fP,[])
else X.fP([])})})()
//# sourceMappingURL=test.dart.js.map
