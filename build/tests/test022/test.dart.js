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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isH)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dV=function(){}
var dart=[["","",,H,{"^":"",nL:{"^":"a;a"}}],["","",,J,{"^":"",
dZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cL:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dY==null){H.nb()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.cC("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d6()]
if(v!=null)return v
v=H.nh(a)
if(v!=null)return v
if(typeof a=="function")return C.a6
y=Object.getPrototypeOf(a)
if(y==null)return C.M
if(y===Object.prototype)return C.M
if(typeof w=="function"){Object.defineProperty(w,$.$get$d6(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
H:{"^":"a;",
w:function(a,b){return a===b},
gZ:function(a){return H.bE(a)},
i:["fA",function(a){return"Instance of '"+H.b9(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
iL:{"^":"H;",
i:function(a){return String(a)},
gZ:function(a){return a?519018:218159},
$isN:1},
eE:{"^":"H;",
w:function(a,b){return null==b},
i:function(a){return"null"},
gZ:function(a){return 0},
$isF:1},
d7:{"^":"H;",
gZ:function(a){return 0},
i:["fC",function(a){return String(a)}]},
ju:{"^":"d7;"},
c7:{"^":"d7;"},
c0:{"^":"d7;",
i:function(a){var z=a[$.$get$em()]
if(z==null)return this.fC(a)
return"JavaScript function for "+H.i(J.af(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbW:1},
b5:{"^":"H;$ti",
h:function(a,b){H.x(b,H.t(a,0))
if(!!a.fixed$length)H.r(P.V("add"))
a.push(b)},
kx:function(a,b){var z
if(!!a.fixed$length)H.r(P.V("removeAt"))
z=a.length
if(b>=z)throw H.e(P.c4(b,null,null))
return a.splice(b,1)[0]},
K:function(a,b){var z
if(!!a.fixed$length)H.r(P.V("remove"))
for(z=0;z<a.length;++z)if(J.K(a[z],b)){a.splice(z,1)
return!0}return!1},
a0:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.aI(a))}},
k:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.q(z,y,H.i(a[y]))
return z.join(b)},
k8:function(a){return this.k(a,"")},
jW:function(a,b,c,d){var z,y,x
H.x(b,d)
H.l(c,{func:1,ret:d,args:[d,H.t(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.e(P.aI(a))}return y},
jV:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.N,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.e(P.aI(a))}throw H.e(H.cq())},
jU:function(a,b){return this.jV(a,b,null)},
a9:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fz:function(a,b,c){if(b<0||b>a.length)throw H.e(P.a0(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.a0(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.t(a,0)])
return H.c(a.slice(b,c),[H.t(a,0)])},
gjT:function(a){if(a.length>0)return a[0]
throw H.e(H.cq())},
gaG:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.cq())},
e2:function(a,b){var z,y
H.l(b,{func:1,ret:P.N,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.e(P.aI(a))}return!1},
Y:function(a,b){var z
for(z=0;z<a.length;++z)if(J.K(a[z],b))return!0
return!1},
i:function(a){return P.d5(a,"[","]")},
gW:function(a){return new J.at(a,a.length,0,[H.t(a,0)])},
gZ:function(a){return H.bE(a)},
gp:function(a){return a.length},
sp:function(a,b){if(!!a.fixed$length)H.r(P.V("set length"))
if(b<0)throw H.e(P.a0(b,0,null,"newLength",null))
a.length=b},
l:function(a,b){if(b>=a.length||b<0)throw H.e(H.bl(a,b))
return a[b]},
q:function(a,b,c){H.x(c,H.t(a,0))
if(!!a.immutable$list)H.r(P.V("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bl(a,b))
a[b]=c},
$isp:1,
$isb:1,
n:{
iK:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.cU(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.a0(a,0,4294967295,"length",null))
return J.eB(new Array(a),b)},
eB:function(a,b){return J.cr(H.c(a,[b]))},
cr:function(a){H.ce(a)
a.fixed$length=Array
return a}}},
nK:{"^":"b5;$ti"},
at:{"^":"a;a,b,c,0d,$ti",
sdD:function(a){this.d=H.x(a,H.t(this,0))},
gL:function(){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.z(z))
x=this.c
if(x>=y){this.sdD(null)
return!1}this.sdD(z[x]);++this.c
return!0},
$isaY:1},
bZ:{"^":"H;",
kM:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.e(P.V(""+a+".toInt()"))},
cS:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.V(""+a+".floor()"))},
at:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.V(""+a+".round()"))},
f2:function(a,b){var z,y
if(b>20)throw H.e(P.a0(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bp:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.e(P.a0(b,2,36,"radix",null))
z=a.toString(b)
if(C.c.a1(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.V("Unexpected toString result: "+z))
x=y.length
if(1>=x)return H.f(y,1)
z=y[1]
if(3>=x)return H.f(y,3)
w=+y[3]
x=y[2]
if(x!=null){z+=x
w-=x.length}return z+C.c.t("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gZ:function(a){return a&0x1FFFFFFF},
t:function(a,b){if(typeof b!=="number")throw H.e(H.ai(b))
return a*b},
bu:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fG:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dV(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.dV(a,b)},
dV:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.V("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
aV:function(a,b){var z
if(a>0)z=this.dT(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
iB:function(a,b){if(b<0)throw H.e(H.ai(b))
return this.dT(a,b)},
dT:function(a,b){return b>31?0:a>>>b},
U:function(a,b){if(typeof b!=="number")throw H.e(H.ai(b))
return a<b},
$isq:1,
$isak:1},
eD:{"^":"bZ;",$ism:1},
eC:{"^":"bZ;"},
c_:{"^":"H;",
a1:function(a,b){if(b<0)throw H.e(H.bl(a,b))
if(b>=a.length)H.r(H.bl(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.e(H.bl(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.D(b)
if(typeof b!=="string")throw H.e(P.cU(b,null,null))
return a+b},
b3:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ai(b))
c=P.b0(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ad:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ai(c))
if(typeof c!=="number")return c.U()
if(c<0||c>a.length)throw H.e(P.a0(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a6:function(a,b){return this.ad(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ai(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.U()
if(b<0)throw H.e(P.c4(b,null,null))
if(b>c)throw H.e(P.c4(b,null,null))
if(c>a.length)throw H.e(P.c4(c,null,null))
return a.substring(b,c)},
ax:function(a,b){return this.v(a,b,null)},
kP:function(a){return a.toLowerCase()},
t:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.S)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
kl:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.t(c,z)+a},
ah:function(a,b){return this.kl(a,b," ")},
eJ:function(a,b,c){var z
if(c<0||c>a.length)throw H.e(P.a0(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
eI:function(a,b){return this.eJ(a,b,0)},
jx:function(a,b,c){if(c>a.length)throw H.e(P.a0(c,0,a.length,null,null))
return H.hA(a,b,c)},
i:function(a){return a},
gZ:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gp:function(a){return a.length},
$iseW:1,
$ish:1}}],["","",,H,{"^":"",
cM:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
cq:function(){return new P.dl("No element")},
iJ:function(){return new P.dl("Too many elements")},
v:{"^":"kH;a",
gp:function(a){return this.a.length},
l:function(a,b){return C.c.a1(this.a,b)},
$asdD:function(){return[P.m]},
$asU:function(){return[P.m]},
$asp:function(){return[P.m]},
$asb:function(){return[P.m]}},
eu:{"^":"p;"},
ct:{"^":"eu;$ti",
gW:function(a){return new H.d9(this,this.gp(this),0,[H.a5(this,"ct",0)])},
da:function(a,b){return this.fB(0,H.l(b,{func:1,ret:P.N,args:[H.a5(this,"ct",0)]}))}},
d9:{"^":"a;a,b,c,0d,$ti",
sb6:function(a){this.d=H.x(a,H.t(this,0))},
gL:function(){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.bn(z)
x=y.gp(z)
if(this.b!==x)throw H.e(P.aI(z))
w=this.c
if(w>=x){this.sb6(null)
return!1}this.sb6(y.a9(z,w));++this.c
return!0},
$isaY:1},
j7:{"^":"p;a,b,$ti",
gW:function(a){return new H.j8(J.b3(this.a),this.b,this.$ti)},
gp:function(a){return J.as(this.a)},
a9:function(a,b){return this.b.$1(J.cg(this.a,b))},
$asp:function(a,b){return[b]}},
j8:{"^":"aY;0a,b,c,$ti",
sb6:function(a){this.a=H.x(a,H.t(this,1))},
D:function(){var z=this.b
if(z.D()){this.sb6(this.c.$1(z.gL()))
return!0}this.sb6(null)
return!1},
gL:function(){return this.a},
$asaY:function(a,b){return[b]}},
j9:{"^":"ct;a,b,$ti",
gp:function(a){return J.as(this.a)},
a9:function(a,b){return this.b.$1(J.cg(this.a,b))},
$asct:function(a,b){return[b]},
$asp:function(a,b){return[b]}},
dH:{"^":"p;a,b,$ti",
gW:function(a){return new H.ld(J.b3(this.a),this.b,this.$ti)}},
ld:{"^":"aY;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gL()))return!0
return!1},
gL:function(){return this.a.gL()}},
cn:{"^":"a;$ti"},
dD:{"^":"a;$ti",
q:function(a,b,c){H.x(c,H.a5(this,"dD",0))
throw H.e(P.V("Cannot modify an unmodifiable list"))}},
kH:{"^":"cs+dD;"}}],["","",,H,{"^":"",
i4:function(){throw H.e(P.V("Cannot modify unmodifiable Map"))},
bq:function(a){var z,y
z=H.D(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
n4:function(a){return init.types[H.ac(a)]},
ne:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.O(a).$isav},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.af(a)
if(typeof z!=="string")throw H.e(H.ai(a))
return z},
bE:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jG:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.D(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.a0(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.c.I(w,u)|32)>x)return}return parseInt(a,b)},
b9:function(a){return H.jx(a)+H.dQ(H.b2(a),0,null)},
jx:function(a){var z,y,x,w,v,u,t,s,r
z=J.O(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.Z||!!z.$isc7){u=C.F(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bq(w.length>1&&C.c.I(w,0)===36?C.c.ax(w,1):w)},
jy:function(){if(!!self.location)return self.location.href
return},
f_:function(a){var z,y,x,w,v
H.ce(a)
z=J.as(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jH:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.ai(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.aV(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.e(H.ai(w))}return H.f_(z)},
f0:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.ai(x))
if(x<0)throw H.e(H.ai(x))
if(x>65535)return H.jH(a)}return H.f_(a)},
jI:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
ba:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.aV(z,10))>>>0,56320|z&1023)}}throw H.e(P.a0(a,0,1114111,null,null))},
b8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jF:function(a){var z=H.b8(a).getFullYear()+0
return z},
jD:function(a){var z=H.b8(a).getMonth()+1
return z},
jz:function(a){var z=H.b8(a).getDate()+0
return z},
jA:function(a){var z=H.b8(a).getHours()+0
return z},
jC:function(a){var z=H.b8(a).getMinutes()+0
return z},
jE:function(a){var z=H.b8(a).getSeconds()+0
return z},
jB:function(a){var z=H.b8(a).getMilliseconds()+0
return z},
A:function(a){throw H.e(H.ai(a))},
f:function(a,b){if(a==null)J.as(a)
throw H.e(H.bl(a,b))},
bl:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,"index",null)
z=H.ac(J.as(a))
if(!(b<0)){if(typeof z!=="number")return H.A(z)
y=b>=z}else y=!0
if(y)return P.b4(b,a,"index",null,z)
return P.c4(b,"index",null)},
mZ:function(a,b,c){if(a>c)return new P.cx(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cx(a,c,!0,b,"end","Invalid value")
return new P.aH(!0,b,"end",null)},
ai:function(a){return new P.aH(!0,a,null,null)},
mO:function(a){if(typeof a!=="number")throw H.e(H.ai(a))
return a},
e:function(a){var z
if(a==null)a=new P.eV()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hB})
z.name=""}else z.toString=H.hB
return z},
hB:function(){return J.af(this.dartException)},
r:function(a){throw H.e(a)},
z:function(a){throw H.e(P.aI(a))},
a7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nB(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.aV(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d8(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eU(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fm()
u=$.$get$fn()
t=$.$get$fo()
s=$.$get$fp()
r=$.$get$ft()
q=$.$get$fu()
p=$.$get$fr()
$.$get$fq()
o=$.$get$fw()
n=$.$get$fv()
m=v.ag(y)
if(m!=null)return z.$1(H.d8(H.D(y),m))
else{m=u.ag(y)
if(m!=null){m.method="call"
return z.$1(H.d8(H.D(y),m))}else{m=t.ag(y)
if(m==null){m=s.ag(y)
if(m==null){m=r.ag(y)
if(m==null){m=q.ag(y)
if(m==null){m=p.ag(y)
if(m==null){m=s.ag(y)
if(m==null){m=o.ag(y)
if(m==null){m=n.ag(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eU(H.D(y),m))}}return z.$1(new H.kG(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f9()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aH(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f9()
return a},
bo:function(a){var z
if(a==null)return new H.h_(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h_(a)},
n1:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.q(0,a[y],a[x])}return b},
nd:function(a,b,c,d,e,f){H.d(a,"$isbW")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.u("Unsupported number of arguments for wrapped closure"))},
bk:function(a,b){var z
H.ac(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nd)
a.$identity=z
return z},
i0:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.O(d).$isb){z.$reflectionInfo=d
x=H.jP(z).r}else x=d
w=e?Object.create(new H.kb().constructor.prototype):Object.create(new H.cW(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.az
if(typeof u!=="number")return u.G()
$.az=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.ej(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.n4,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.ec:H.cX
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.e("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ej(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
hY:function(a,b,c,d){var z=H.cX
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ej:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.i_(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hY(y,!w,z,b)
if(y===0){w=$.az
if(typeof w!=="number")return w.G()
$.az=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bs
if(v==null){v=H.ci("self")
$.bs=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.az
if(typeof w!=="number")return w.G()
$.az=w+1
t+=w
w="return function("+t+"){return this."
v=$.bs
if(v==null){v=H.ci("self")
$.bs=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
hZ:function(a,b,c,d){var z,y
z=H.cX
y=H.ec
switch(b?-1:a){case 0:throw H.e(H.jY("Intercepted function with no arguments."))
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
z=$.bs
if(z==null){z=H.ci("self")
$.bs=z}y=$.eb
if(y==null){y=H.ci("receiver")
$.eb=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hZ(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.az
if(typeof y!=="number")return y.G()
$.az=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.az
if(typeof y!=="number")return y.G()
$.az=y+1
return new Function(z+y+"}")()},
dT:function(a,b,c,d,e,f,g){return H.i0(a,b,H.ac(c),d,!!e,!!f,g)},
D:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ay(a,"String"))},
n_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ay(a,"double"))},
nr:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ay(a,"num"))},
dR:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ay(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ay(a,"int"))},
hx:function(a,b){throw H.e(H.ay(a,H.bq(H.D(b).substring(3))))},
nt:function(a,b){throw H.e(H.hX(a,H.bq(H.D(b).substring(3))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.hx(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else z=!0
if(z)return a
H.nt(a,b)},
ce:function(a){if(a==null)return a
if(!!J.O(a).$isb)return a
throw H.e(H.ay(a,"List<dynamic>"))},
hu:function(a,b){var z
if(a==null)return a
z=J.O(a)
if(!!z.$isb)return a
if(z[b])return a
H.hx(a,b)},
hq:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.ac(z)]
else return a.$S()}return},
cb:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hq(J.O(a))
if(z==null)return!1
return H.hc(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.dN)return a
$.dN=!0
try{if(H.cb(a,b))return a
z=H.cP(b)
y=H.ay(a,z)
throw H.e(y)}finally{$.dN=!1}},
dW:function(a,b){if(a!=null&&!H.dS(a,b))H.r(H.ay(a,H.cP(b)))
return a},
hi:function(a){var z,y
z=J.O(a)
if(!!z.$isn){y=H.hq(z)
if(y!=null)return H.cP(y)
return"Closure"}return H.b9(a)},
nz:function(a){throw H.e(new P.i7(H.D(a)))},
hr:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b2:function(a){if(a==null)return
return a.$ti},
od:function(a,b,c){return H.bp(a["$as"+H.i(c)],H.b2(b))},
cc:function(a,b,c,d){var z
H.D(c)
H.ac(d)
z=H.bp(a["$as"+H.i(c)],H.b2(b))
return z==null?null:z[d]},
a5:function(a,b,c){var z
H.D(b)
H.ac(c)
z=H.bp(a["$as"+H.i(b)],H.b2(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.ac(b)
z=H.b2(a)
return z==null?null:z[b]},
cP:function(a){return H.b1(a,null)},
b1:function(a,b){var z,y
H.k(b,"$isb",[P.h],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bq(a[0].builtin$cls)+H.dQ(a,1,b)
if(typeof a=="function")return H.bq(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.i(b[y])}if('func' in a)return H.mE(a,b)
if('futureOr' in a)return"FutureOr<"+H.b1("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mE:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.h]
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
t=C.c.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.b1(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b1(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b1(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b1(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.n0(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.D(z[l])
n=n+m+H.b1(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dQ:function(a,b,c){var z,y,x,w,v,u
H.k(c,"$isb",[P.h],"$asb")
if(a==null)return""
z=new P.aj("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b1(u,c)}return"<"+z.i(0)+">"},
bp:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bQ:function(a,b,c,d){var z,y
H.D(b)
H.ce(c)
H.D(d)
if(a==null)return!1
z=H.b2(a)
y=J.O(a)
if(y[b]==null)return!1
return H.hl(H.bp(y[d],z),null,c,null)},
k:function(a,b,c,d){H.D(b)
H.ce(c)
H.D(d)
if(a==null)return a
if(H.bQ(a,b,c,d))return a
throw H.e(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bq(b.substring(3))+H.dQ(c,0,null),init.mangledGlobalNames)))},
hl:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ar(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ar(a[y],b,c[y],d))return!1
return!0},
ob:function(a,b,c){return a.apply(b,H.bp(J.O(b)["$as"+H.i(c)],H.b2(b)))},
ht:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="F"||a===-1||a===-2||H.ht(z)}return!1},
dS:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="F"||b===-1||b===-2||H.ht(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dS(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cb(a,b)}z=J.O(a).constructor
y=H.b2(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.ar(z,null,b,null)},
x:function(a,b){if(a!=null&&!H.dS(a,b))throw H.e(H.ay(a,H.cP(b)))
return a},
ar:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ar(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.hc(a,b,c,d)
if('func' in a)return c.builtin$cls==="bW"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ar("type" in a?a.type:null,b,x,d)
else if(H.ar(a,b,x,d))return!0
else{if(!('$is'+"by" in y.prototype))return!1
w=y.prototype["$as"+"by"]
v=H.bp(w,z?a.slice(1):null)
return H.ar(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hl(H.bp(r,z),b,u,d)},
hc:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ar(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ar(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ar(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ar(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.nq(m,b,l,d)},
nq:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ar(c[w],d,a[w],b))return!1}return!0},
oc:function(a,b,c){Object.defineProperty(a,H.D(b),{value:c,enumerable:false,writable:true,configurable:true})},
nh:function(a){var z,y,x,w,v,u
z=H.D($.hs.$1(a))
y=$.cK[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cN[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.D($.hk.$2(a,z))
if(z!=null){y=$.cK[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cN[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cO(x)
$.cK[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cN[z]=x
return x}if(v==="-"){u=H.cO(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hw(a,x)
if(v==="*")throw H.e(P.cC(z))
if(init.leafTags[z]===true){u=H.cO(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hw(a,x)},
hw:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dZ(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cO:function(a){return J.dZ(a,!1,null,!!a.$isav)},
np:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cO(z)
else return J.dZ(z,c,null,null)},
nb:function(){if(!0===$.dY)return
$.dY=!0
H.nc()},
nc:function(){var z,y,x,w,v,u,t,s
$.cK=Object.create(null)
$.cN=Object.create(null)
H.n7()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hy.$1(v)
if(u!=null){t=H.np(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
n7:function(){var z,y,x,w,v,u,t
z=C.a3()
z=H.bj(C.a0,H.bj(C.a5,H.bj(C.E,H.bj(C.E,H.bj(C.a4,H.bj(C.a1,H.bj(C.a2(C.F),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hs=new H.n8(v)
$.hk=new H.n9(u)
$.hy=new H.na(t)},
bj:function(a,b){return a(b)||b},
hA:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
e1:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i3:{"^":"a;$ti",
i:function(a){return P.da(this)},
q:function(a,b,c){H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
return H.i4()},
$isI:1},
i5:{"^":"i3;a,b,c,$ti",
gp:function(a){return this.a},
bD:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
l:function(a,b){if(!this.bD(b))return
return this.dF(b)},
dF:function(a){return this.b[H.D(a)]},
a0:function(a,b){var z,y,x,w,v
z=H.t(this,1)
H.l(b,{func:1,ret:-1,args:[H.t(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.x(this.dF(v),z))}}},
jO:{"^":"a;a,b,c,d,e,f,r,0x",n:{
jP:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cr(z)
y=z[0]
x=z[1]
return new H.jO(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ks:{"^":"a;a,b,c,d,e,f",
ag:function(a){var z,y,x
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
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ks(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cB:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fs:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jr:{"^":"a3;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
n:{
eU:function(a,b){return new H.jr(a,b==null?null:b.method)}}},
iO:{"^":"a3;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
n:{
d8:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iO(a,y,z?null:b.receiver)}}},
kG:{"^":"a3;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nB:{"^":"n:18;a",
$1:function(a){if(!!J.O(a).$isa3)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h_:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaM:1},
n:{"^":"a;",
i:function(a){return"Closure '"+H.b9(this).trim()+"'"},
gfe:function(){return this},
$isbW:1,
gfe:function(){return this}},
fd:{"^":"n;"},
kb:{"^":"fd;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bq(z)+"'"}},
cW:{"^":"fd;a,b,c,d",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cW))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gZ:function(a){var z,y
z=this.c
if(z==null)y=H.bE(this.a)
else y=typeof z!=="object"?J.bS(z):H.bE(z)
return(y^H.bE(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.b9(z)+"'")},
n:{
cX:function(a){return a.a},
ec:function(a){return a.c},
ci:function(a){var z,y,x,w,v
z=new H.cW("self","target","receiver","name")
y=J.cr(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kt:{"^":"a3;a",
i:function(a){return this.a},
n:{
ay:function(a,b){return new H.kt("TypeError: "+H.i(P.cl(a))+": type '"+H.hi(a)+"' is not a subtype of type '"+b+"'")}}},
hW:{"^":"a3;a",
i:function(a){return this.a},
n:{
hX:function(a,b){return new H.hW("CastError: "+H.i(P.cl(a))+": type '"+H.hi(a)+"' is not a subtype of type '"+b+"'")}}},
jX:{"^":"a3;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
n:{
jY:function(a){return new H.jX(a)}}},
aZ:{"^":"eK;a,0b,0c,0d,0e,0f,r,$ti",
gp:function(a){return this.a},
gk7:function(a){return this.a===0},
gaF:function(){return new H.iV(this,[H.t(this,0)])},
bD:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dA(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dA(y,a)}else return this.k0(a)},
k0:function(a){var z=this.d
if(z==null)return!1
return this.cV(this.cd(z,this.cU(a)),a)>=0},
l:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.by(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.by(w,b)
x=y==null?null:y.b
return x}else return this.k5(b)},
k5:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cd(z,this.cU(a))
x=this.cV(y,a)
if(x<0)return
return y[x].b},
q:function(a,b,c){var z,y
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cl()
this.b=z}this.dm(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cl()
this.c=y}this.dm(y,b,c)}else this.k6(b,c)},
k6:function(a,b){var z,y,x,w
H.x(a,H.t(this,0))
H.x(b,H.t(this,1))
z=this.d
if(z==null){z=this.cl()
this.d=z}y=this.cU(a)
x=this.cd(z,y)
if(x==null)this.ct(z,y,[this.c7(a,b)])
else{w=this.cV(x,a)
if(w>=0)x[w].b=b
else x.push(this.c7(a,b))}},
a0:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aI(this))
z=z.c}},
dm:function(a,b,c){var z
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
z=this.by(a,b)
if(z==null)this.ct(a,b,this.c7(b,c))
else z.b=c},
h2:function(){this.r=this.r+1&67108863},
c7:function(a,b){var z,y
z=new H.iU(H.x(a,H.t(this,0)),H.x(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.h2()
return z},
cU:function(a){return J.bS(a)&0x3ffffff},
cV:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].a,b))return y
return-1},
i:function(a){return P.da(this)},
by:function(a,b){return a[b]},
cd:function(a,b){return a[b]},
ct:function(a,b,c){a[b]=c},
hh:function(a,b){delete a[b]},
dA:function(a,b){return this.by(a,b)!=null},
cl:function(){var z=Object.create(null)
this.ct(z,"<non-identifier-key>",z)
this.hh(z,"<non-identifier-key>")
return z},
$iseG:1},
iU:{"^":"a;a,b,0c,0d"},
iV:{"^":"eu;a,$ti",
gp:function(a){return this.a.a},
gW:function(a){var z,y
z=this.a
y=new H.iW(z,z.r,this.$ti)
y.c=z.e
return y}},
iW:{"^":"a;a,b,0c,0d,$ti",
sdn:function(a){this.d=H.x(a,H.t(this,0))},
gL:function(){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aI(z))
else{z=this.c
if(z==null){this.sdn(null)
return!1}else{this.sdn(z.a)
this.c=this.c.c
return!0}}},
$isaY:1},
n8:{"^":"n:18;a",
$1:function(a){return this.a(a)}},
n9:{"^":"n:54;a",
$2:function(a,b){return this.a(a,b)}},
na:{"^":"n:53;a",
$1:function(a){return this.a(H.D(a))}},
iM:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseW:1,
$isjQ:1,
n:{
iN:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.e(P.W("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
n0:function(a){return J.eB(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
ns:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bh:function(a){return a},
jl:function(a){return new Int8Array(a)},
aU:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bl(b,a))},
my:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.e(H.mZ(a,b,c))
return b},
dg:{"^":"H;",$isdg:1,$isku:1,"%":";ArrayBufferView;df|fW|fX|jm|fY|fZ|b7"},
df:{"^":"dg;",
gp:function(a){return a.length},
$isav:1,
$asav:I.dV},
jm:{"^":"fX;",
l:function(a,b){H.aU(b,a,a.length)
return a[b]},
q:function(a,b,c){H.n_(c)
H.aU(b,a,a.length)
a[b]=c},
$ascn:function(){return[P.q]},
$asU:function(){return[P.q]},
$isp:1,
$asp:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]},
"%":"Float32Array"},
b7:{"^":"fZ;",
q:function(a,b,c){H.ac(c)
H.aU(b,a,a.length)
a[b]=c},
$ascn:function(){return[P.m]},
$asU:function(){return[P.m]},
$isp:1,
$asp:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}},
nM:{"^":"b7;",
l:function(a,b){H.aU(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nN:{"^":"b7;",
l:function(a,b){H.aU(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nO:{"^":"b7;",
l:function(a,b){H.aU(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nP:{"^":"b7;",
l:function(a,b){H.aU(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nQ:{"^":"b7;",
gp:function(a){return a.length},
l:function(a,b){H.aU(b,a,a.length)
return a[b]},
$isnZ:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
eS:{"^":"b7;",
gp:function(a){return a.length},
l:function(a,b){H.aU(b,a,a.length)
return a[b]},
$iseS:1,
$isP:1,
"%":";Uint8Array"},
fW:{"^":"df+U;"},
fX:{"^":"fW+cn;"},
fY:{"^":"df+U;"},
fZ:{"^":"fY+cn;"}}],["","",,P,{"^":"",
lf:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mL()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bk(new P.lh(z),1)).observe(y,{childList:true})
return new P.lg(z,y,x)}else if(self.setImmediate!=null)return P.mM()
return P.mN()},
o2:[function(a){self.scheduleImmediate(H.bk(new P.li(H.l(a,{func:1,ret:-1})),0))},"$1","mL",4,0,10],
o3:[function(a){self.setImmediate(H.bk(new P.lj(H.l(a,{func:1,ret:-1})),0))},"$1","mM",4,0,10],
o4:[function(a){P.dr(C.y,H.l(a,{func:1,ret:-1}))},"$1","mN",4,0,10],
dr:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.h.a7(a.a,1000)
return P.m0(z<0?0:z,b)},
fj:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bb]})
z=C.h.a7(a.a,1000)
return P.m1(z<0?0:z,b)},
mH:function(a,b){if(H.cb(a,{func:1,args:[P.a,P.aM]}))return H.l(a,{func:1,ret:null,args:[P.a,P.aM]})
if(H.cb(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.cU(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mG:function(){var z,y
for(;z=$.bi,z!=null;){$.bO=null
y=z.b
$.bi=y
if(y==null)$.bN=null
z.a.$0()}},
oa:[function(){$.dO=!0
try{P.mG()}finally{$.bO=null
$.dO=!1
if($.bi!=null)$.$get$dI().$1(P.hm())}},"$0","hm",0,0,3],
hh:function(a){var z=new P.fN(H.l(a,{func:1,ret:-1}))
if($.bi==null){$.bN=z
$.bi=z
if(!$.dO)$.$get$dI().$1(P.hm())}else{$.bN.b=z
$.bN=z}},
mK:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bi
if(z==null){P.hh(a)
$.bO=$.bN
return}y=new P.fN(a)
x=$.bO
if(x==null){y.b=z
$.bO=y
$.bi=y}else{y.b=x.b
x.b=y
$.bO=y
if(y.b==null)$.bN=y}},
nu:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.S
if(C.l===y){P.cJ(null,null,C.l,a)
return}y.toString
P.cJ(null,null,y,H.l(y.cB(a),z))},
fi:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.S
if(y===C.l){y.toString
return P.dr(a,b)}return P.dr(a,H.l(y.cB(b),z))},
kp:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bb]}
H.l(b,z)
y=$.S
if(y===C.l){y.toString
return P.fj(a,b)}x=y.e8(b,P.bb)
$.S.toString
return P.fj(a,H.l(x,z))},
cI:function(a,b,c,d,e){var z={}
z.a=d
P.mK(new P.mI(z,e))},
hd:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.S
if(y===c)return d.$0()
$.S=c
z=y
try{y=d.$0()
return y}finally{$.S=z}},
he:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.S
if(y===c)return d.$1(e)
$.S=c
z=y
try{y=d.$1(e)
return y}finally{$.S=z}},
mJ:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.S
if(y===c)return d.$2(e,f)
$.S=c
z=y
try{y=d.$2(e,f)
return y}finally{$.S=z}},
cJ:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.cB(d):c.jn(d,-1)
P.hh(d)},
lh:{"^":"n:29;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
lg:{"^":"n:50;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
li:{"^":"n:1;a",
$0:function(){this.a.$0()}},
lj:{"^":"n:1;a",
$0:function(){this.a.$0()}},
h1:{"^":"a;a,0b,c",
h0:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bk(new P.m3(this,b),0),a)
else throw H.e(P.V("`setTimeout()` not found."))},
h1:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bk(new P.m2(this,a,Date.now(),b),0),a)
else throw H.e(P.V("Periodic timer."))},
$isbb:1,
n:{
m0:function(a,b){var z=new P.h1(!0,0)
z.h0(a,b)
return z},
m1:function(a,b){var z=new P.h1(!1,0)
z.h1(a,b)
return z}}},
m3:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
m2:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.fG(w,x)}z.c=y
this.d.$1(z)}},
bg:{"^":"a;0a,b,c,d,e,$ti",
kc:function(a){if(this.c!==6)return!0
return this.b.b.d7(H.l(this.d,{func:1,ret:P.N,args:[P.a]}),a.a,P.N,P.a)},
jZ:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.cb(z,{func:1,args:[P.a,P.aM]}))return H.dW(w.kF(z,a.a,a.b,null,y,P.aM),x)
else return H.dW(w.d7(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aT:{"^":"a;dU:a<,b,0ip:c<,$ti",
f1:function(a,b,c){var z,y,x,w
z=H.t(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.S
if(y!==C.l){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mH(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aT(0,$.S,[c])
w=b==null?1:3
this.dr(new P.bg(x,w,a,b,[z,c]))
return x},
kL:function(a,b){return this.f1(a,null,b)},
dr:function(a){var z,y
z=this.a
if(z<=1){a.a=H.d(this.c,"$isbg")
this.c=a}else{if(z===2){y=H.d(this.c,"$isaT")
z=y.a
if(z<4){y.dr(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cJ(null,null,z,H.l(new P.ls(this,a),{func:1,ret:-1}))}},
dQ:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.d(this.c,"$isbg")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.d(this.c,"$isaT")
y=u.a
if(y<4){u.dQ(a)
return}this.a=y
this.c=u.c}z.a=this.bA(a)
y=this.b
y.toString
P.cJ(null,null,y,H.l(new P.lx(z,this),{func:1,ret:-1}))}},
cp:function(){var z=H.d(this.c,"$isbg")
this.c=null
return this.bA(z)},
bA:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
du:function(a){var z,y,x
z=H.t(this,0)
H.dW(a,{futureOr:1,type:z})
y=this.$ti
if(H.bQ(a,"$isby",y,"$asby"))if(H.bQ(a,"$isaT",y,null))P.fR(a,this)
else P.lt(a,this)
else{x=this.cp()
H.x(a,z)
this.a=4
this.c=a
P.bJ(this,x)}},
dv:function(a,b){var z
H.d(b,"$isaM")
z=this.cp()
this.a=8
this.c=new P.al(a,b)
P.bJ(this,z)},
$isby:1,
n:{
lt:function(a,b){var z,y,x
b.a=1
try{a.f1(new P.lu(b),new P.lv(b),null)}catch(x){z=H.a7(x)
y=H.bo(x)
P.nu(new P.lw(b,z,y))}},
fR:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.d(a.c,"$isaT")
if(z>=4){y=b.cp()
b.a=a.a
b.c=a.c
P.bJ(b,y)}else{y=H.d(b.c,"$isbg")
b.a=2
b.c=a
a.dQ(y)}},
bJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.d(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.cI(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bJ(z.a,b)}y=z.a
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
if(p){H.d(r,"$isal")
y=y.b
u=r.a
t=r.b
y.toString
P.cI(null,null,y,u,t)
return}o=$.S
if(o==null?q!=null:o!==q)$.S=q
else o=null
y=b.c
if(y===8)new P.lA(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lz(x,b,r).$0()}else if((y&2)!==0)new P.ly(z,x,b).$0()
if(o!=null)$.S=o
y=x.b
if(!!J.O(y).$isby){if(y.a>=4){n=H.d(t.c,"$isbg")
t.c=null
b=t.bA(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fR(y,t)
return}}m=b.b
n=H.d(m.c,"$isbg")
m.c=null
b=m.bA(n)
y=x.a
u=x.b
if(!y){H.x(u,H.t(m,0))
m.a=4
m.c=u}else{H.d(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
ls:{"^":"n:1;a,b",
$0:function(){P.bJ(this.a,this.b)}},
lx:{"^":"n:1;a,b",
$0:function(){P.bJ(this.b,this.a.a)}},
lu:{"^":"n:29;a",
$1:function(a){var z=this.a
z.a=0
z.du(a)}},
lv:{"^":"n:49;a",
$2:function(a,b){this.a.dv(a,H.d(b,"$isaM"))},
$1:function(a){return this.$2(a,null)}},
lw:{"^":"n:1;a,b,c",
$0:function(){this.a.dv(this.b,this.c)}},
lA:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.f_(H.l(w.d,{func:1}),null)}catch(v){y=H.a7(v)
x=H.bo(v)
if(this.d){w=H.d(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.d(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.O(z).$isby){if(z instanceof P.aT&&z.gdU()>=4){if(z.gdU()===8){w=this.b
w.b=H.d(z.gip(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.kL(new P.lB(t),null)
w.a=!1}}},
lB:{"^":"n:48;a",
$1:function(a){return this.a}},
lz:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.x(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.d7(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a7(t)
y=H.bo(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
ly:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.d(this.a.a.c,"$isal")
w=this.c
if(w.kc(z)&&w.e!=null){v=this.b
v.b=w.jZ(z)
v.a=!1}}catch(u){y=H.a7(u)
x=H.bo(u)
w=H.d(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fN:{"^":"a;a,0b"},
kc:{"^":"a;$ti",
gp:function(a){var z,y,x,w
z={}
y=new P.aT(0,$.S,[P.m])
z.a=0
x=H.t(this,0)
w=H.l(new P.ke(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.kf(z,y),{func:1,ret:-1})
W.a1(this.a,this.b,w,!1,x)
return y}},
ke:{"^":"n;a,b",
$1:function(a){H.x(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.t(this.b,0)]}}},
kf:{"^":"n:1;a,b",
$0:function(){this.b.du(this.a.a)}},
dm:{"^":"a;$ti"},
kd:{"^":"a;"},
bb:{"^":"a;"},
al:{"^":"a;a,b",
i:function(a){return H.i(this.a)},
$isa3:1},
mu:{"^":"a;",$iso1:1},
mI:{"^":"n:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eV()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
lM:{"^":"mu;",
kG:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.l===$.S){a.$0()
return}P.hd(null,null,this,a,-1)}catch(x){z=H.a7(x)
y=H.bo(x)
P.cI(null,null,this,z,H.d(y,"$isaM"))}},
kH:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.l===$.S){a.$1(b)
return}P.he(null,null,this,a,b,-1,c)}catch(x){z=H.a7(x)
y=H.bo(x)
P.cI(null,null,this,z,H.d(y,"$isaM"))}},
jn:function(a,b){return new P.lO(this,H.l(a,{func:1,ret:b}),b)},
cB:function(a){return new P.lN(this,H.l(a,{func:1,ret:-1}))},
e8:function(a,b){return new P.lP(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
f_:function(a,b){H.l(a,{func:1,ret:b})
if($.S===C.l)return a.$0()
return P.hd(null,null,this,a,b)},
d7:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.S===C.l)return a.$1(b)
return P.he(null,null,this,a,b,c,d)},
kF:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.S===C.l)return a.$2(b,c)
return P.mJ(null,null,this,a,b,c,d,e,f)}},
lO:{"^":"n;a,b,c",
$0:function(){return this.a.f_(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lN:{"^":"n:3;a,b",
$0:function(){return this.a.kG(this.b)}},
lP:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.kH(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iX:function(a,b,c,d,e){return new H.aZ(0,0,[d,e])},
iY:function(a,b,c){H.ce(a)
return H.k(H.n1(a,new H.aZ(0,0,[b,c])),"$iseG",[b,c],"$aseG")},
eH:function(a,b){return new H.aZ(0,0,[a,b])},
c1:function(a,b,c,d){return new P.lG(0,0,[d])},
iI:function(a,b,c){var z,y
if(P.dP(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bP()
C.a.h(y,a)
try{P.mF(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.fb(b,H.hu(z,"$isp"),", ")+c
return y.charCodeAt(0)==0?y:y},
d5:function(a,b,c){var z,y,x
if(P.dP(a))return b+"..."+c
z=new P.aj(b)
y=$.$get$bP()
C.a.h(y,a)
try{x=z
x.a=P.fb(x.gaQ(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaQ()+c
y=z.gaQ()
return y.charCodeAt(0)==0?y:y},
dP:function(a){var z,y
for(z=0;y=$.$get$bP(),z<y.length;++z)if(a===y[z])return!0
return!1},
mF:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gW(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.i(z.gL())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gL();++x
if(!z.D()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gL();++x
for(;z.D();t=s,s=r){r=z.gL();++x
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
iZ:function(a,b,c){var z=P.iX(null,null,null,b,c)
a.a0(0,new P.j_(z,b,c))
return z},
eI:function(a,b){var z,y,x
z=P.c1(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x)z.h(0,H.x(a[x],b))
return z},
da:function(a){var z,y,x
z={}
if(P.dP(a))return"{...}"
y=new P.aj("")
try{C.a.h($.$get$bP(),a)
x=y
x.a=x.gaQ()+"{"
z.a=!0
a.a0(0,new P.j5(z,y))
z=y
z.a=z.gaQ()+"}"}finally{z=$.$get$bP()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaQ()
return z.charCodeAt(0)==0?z:z},
lG:{"^":"lC;a,0b,0c,0d,0e,0f,r,$ti",
gW:function(a){var z=new P.fV(this,this.r,this.$ti)
z.c=this.e
return z},
gp:function(a){return this.a},
Y:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.d(z[b],"$iscF")!=null}else{y=this.hd(b)
return y}},
hd:function(a){var z=this.d
if(z==null)return!1
return this.cb(this.dG(z,a),a)>=0},
h:function(a,b){var z,y
H.x(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dK()
this.b=z}return this.dq(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dK()
this.c=y}return this.dq(y,b)}else return this.h3(b)},
h3:function(a){var z,y,x
H.x(a,H.t(this,0))
z=this.d
if(z==null){z=P.dK()
this.d=z}y=this.dw(a)
x=z[y]
if(x==null)z[y]=[this.cm(a)]
else{if(this.cb(x,a)>=0)return!1
x.push(this.cm(a))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.ie(this.c,b)
else return this.ia(b)},
ia:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.dG(z,a)
x=this.cb(y,a)
if(x<0)return!1
this.dW(y.splice(x,1)[0])
return!0},
dq:function(a,b){H.x(b,H.t(this,0))
if(H.d(a[b],"$iscF")!=null)return!1
a[b]=this.cm(b)
return!0},
ie:function(a,b){var z
if(a==null)return!1
z=H.d(a[b],"$iscF")
if(z==null)return!1
this.dW(z)
delete a[b]
return!0},
dL:function(){this.r=this.r+1&67108863},
cm:function(a){var z,y
z=new P.cF(H.x(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dL()
return z},
dW:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dL()},
dw:function(a){return J.bS(a)&0x3ffffff},
dG:function(a,b){return a[this.dw(b)]},
cb:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].a,b))return y
return-1},
n:{
dK:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cF:{"^":"a;a,0b,0c"},
fV:{"^":"a;a,b,0c,0d,$ti",
sdt:function(a){this.d=H.x(a,H.t(this,0))},
gL:function(){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aI(z))
else{z=this.c
if(z==null){this.sdt(null)
return!1}else{this.sdt(H.x(z.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
$isaY:1,
n:{
lH:function(a,b,c){var z=new P.fV(a,b,[c])
z.c=a.e
return z}}},
lC:{"^":"jZ;"},
j_:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.q(0,H.x(a,this.b),H.x(b,this.c))}},
cs:{"^":"lI;",$isp:1,$isb:1},
U:{"^":"a;$ti",
gW:function(a){return new H.d9(a,this.gp(a),0,[H.cc(this,a,"U",0)])},
a9:function(a,b){return this.l(a,b)},
kO:function(a,b){var z,y
z=H.c([],[H.cc(this,a,"U",0)])
C.a.sp(z,this.gp(a))
for(y=0;y<this.gp(a);++y)C.a.q(z,y,this.l(a,y))
return z},
kN:function(a){return this.kO(a,!0)},
jR:function(a,b,c,d){var z
H.x(d,H.cc(this,a,"U",0))
P.b0(b,c,this.gp(a),null,null,null)
for(z=b;z<c;++z)this.q(a,z,d)},
i:function(a){return P.d5(a,"[","]")}},
eK:{"^":"cu;"},
j5:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
cu:{"^":"a;$ti",
a0:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.a5(this,"cu",0),H.a5(this,"cu",1)]})
for(z=J.b3(this.gaF());z.D();){y=z.gL()
b.$2(y,this.l(0,y))}},
gp:function(a){return J.as(this.gaF())},
i:function(a){return P.da(this)},
$isI:1},
m6:{"^":"a;$ti",
q:function(a,b,c){H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
throw H.e(P.V("Cannot modify unmodifiable map"))}},
j6:{"^":"a;$ti",
l:function(a,b){return this.a.l(0,b)},
q:function(a,b,c){this.a.q(0,H.x(b,H.t(this,0)),H.x(c,H.t(this,1)))},
a0:function(a,b){this.a.a0(0,H.l(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gp:function(a){var z=this.a
return z.gp(z)},
i:function(a){return J.af(this.a)},
$isI:1},
fx:{"^":"m7;a,$ti"},
k0:{"^":"a;$ti",
aA:function(a,b){var z
for(z=J.b3(H.k(b,"$isp",this.$ti,"$asp"));z.D();)this.h(0,z.gL())},
i:function(a){return P.d5(this,"{","}")},
a9:function(a,b){var z,y,x
if(b<0)H.r(P.a0(b,0,null,"index",null))
for(z=P.lH(this,this.r,H.t(this,0)),y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.e(P.b4(b,this,"index",null,y))},
$isp:1,
$isf6:1},
jZ:{"^":"k0;"},
lI:{"^":"a+U;"},
m7:{"^":"j6+m6;$ti"}}],["","",,P,{"^":"",hT:{"^":"bU;a",
ke:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.b0(b,c,a.length,null,null,null)
z=$.$get$fP()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.c.I(a,y)
if(r===37){q=s+2
if(q<=c){p=H.cM(C.c.I(a,s))
o=H.cM(C.c.I(a,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.c.a1("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aj("")
l=w.a+=C.c.v(a,x,y)
w.a=l+H.ba(r)
x=s
continue}}throw H.e(P.W("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.c.v(a,x,c)
k=l.length
if(v>=0)P.e9(a,u,c,v,t,k)
else{j=C.h.bu(k-1,4)+1
if(j===1)throw H.e(P.W("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.c.b3(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.e9(a,u,c,v,t,i)
else{j=C.h.bu(i,4)
if(j===1)throw H.e(P.W("Invalid base64 encoding length ",a,c))
if(j>1)a=C.c.b3(a,c,c,j===2?"==":"=")}return a},
$asbU:function(){return[[P.b,P.m],P.h]},
n:{
e9:function(a,b,c,d,e,f){if(C.h.bu(f,4)!==0)throw H.e(P.W("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.W("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.W("Invalid base64 padding, more than two '=' characters",a,b))}}},hU:{"^":"aW;a",
$asaW:function(){return[[P.b,P.m],P.h]}},bU:{"^":"a;$ti"},aW:{"^":"kd;$ti"},il:{"^":"bU;",
$asbU:function(){return[P.h,[P.b,P.m]]}},iF:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},iE:{"^":"aW;a",
he:function(a,b,c){var z,y,x,w,v,u
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
default:u=null}if(u!=null){if(v==null)v=new P.aj("")
if(w>b)v.a+=C.c.v(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hP(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asaW:function(){return[P.h,P.h]}},kU:{"^":"il;a",
gjQ:function(){return C.T}},l0:{"^":"aW;",
be:function(a,b,c){var z,y,x,w
z=a.length
P.b0(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.ms(0,0,x)
if(w.hp(a,b,z)!==z)w.dY(J.hH(a,z-1),0)
return new Uint8Array(x.subarray(0,H.my(0,w.b,x.length)))},
cH:function(a){return this.be(a,0,null)},
$asaW:function(){return[P.h,[P.b,P.m]]}},ms:{"^":"a;a,b,c",
dY:function(a,b){var z,y,x,w,v
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
hp:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.a1(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.I(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dY(w,C.c.I(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kV:{"^":"aW;a",
be:function(a,b,c){var z,y,x,w,v
H.k(a,"$isb",[P.m],"$asb")
z=P.kW(!1,a,b,c)
if(z!=null)return z
y=J.as(a)
P.b0(b,c,y,null,null,null)
x=new P.aj("")
w=new P.mp(!1,x,!0,0,0,0)
w.be(a,b,y)
if(w.e>0){H.r(P.W("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.ba(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
cH:function(a){return this.be(a,0,null)},
$asaW:function(){return[[P.b,P.m],P.h]},
n:{
kW:function(a,b,c,d){H.k(b,"$isb",[P.m],"$asb")
if(b instanceof Uint8Array)return P.kX(!1,b,c,d)
return},
kX:function(a,b,c,d){var z,y,x
z=$.$get$fC()
if(z==null)return
y=0===c
if(y&&!0)return P.dF(z,b)
x=b.length
d=P.b0(c,d,x,null,null,null)
if(y&&d===x)return P.dF(z,b)
return P.dF(z,b.subarray(c,d))},
dF:function(a,b){if(P.kZ(b))return
return P.l_(a,b)},
l_:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.a7(y)}return},
kZ:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kY:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.a7(y)}return}}},mp:{"^":"a;a,b,c,d,e,f",
be:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(a,"$isb",[P.m],"$asb")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mr(c)
v=new P.mq(this,b,c,a)
$label0$0:for(u=J.bn(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.l(a,s)
if(typeof r!=="number")return r.c_()
if((r&192)!==128){q=P.W("Bad UTF-8 encoding 0x"+C.h.bp(r,16),a,s)
throw H.e(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.H,q)
if(z<=C.H[q]){q=P.W("Overlong encoding of 0x"+C.h.bp(z,16),a,s-x-1)
throw H.e(q)}if(z>1114111){q=P.W("Character outside valid Unicode range: 0x"+C.h.bp(z,16),a,s-x-1)
throw H.e(q)}if(!this.c||z!==65279)t.a+=H.ba(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.df()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.l(a,o)
if(typeof r!=="number")return r.U()
if(r<0){m=P.W("Negative UTF-8 code unit: -0x"+C.h.bp(-r,16),a,n-1)
throw H.e(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.W("Bad UTF-8 encoding 0x"+C.h.bp(r,16),a,n-1)
throw H.e(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mr:{"^":"n:47;a",
$2:function(a,b){var z,y,x,w
H.k(a,"$isb",[P.m],"$asb")
z=this.a
for(y=J.bn(a),x=b;x<z;++x){w=y.l(a,x)
if(typeof w!=="number")return w.c_()
if((w&127)!==w)return x-b}return z-b}},mq:{"^":"n:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c5(this.d,a,b)}}}],["","",,P,{"^":"",
cd:function(a,b,c){var z
H.l(b,{func:1,ret:P.m,args:[P.h]})
z=H.jG(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.e(P.W(a,null,null))},
io:function(a){if(a instanceof H.n)return a.i(0)
return"Instance of '"+H.b9(a)+"'"},
j0:function(a,b,c,d){var z,y
H.x(b,d)
z=J.iK(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.q(z,y,b)
return H.k(z,"$isb",[d],"$asb")},
j1:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gW(a);x.D();)C.a.h(y,H.x(x.gL(),c))
if(b)return y
return H.k(J.cr(y),"$isb",z,"$asb")},
c5:function(a,b,c){var z,y
z=P.m
H.k(a,"$isp",[z],"$asp")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$isb5",[z],"$asb5")
y=a.length
c=P.b0(b,c,y,null,null,null)
return H.f0(b>0||c<y?C.a.fz(a,b,c):a)}if(!!J.O(a).$iseS)return H.jI(a,b,P.b0(b,c,a.length,null,null,null))
return P.kg(a,b,c)},
kg:function(a,b,c){var z,y,x,w
H.k(a,"$isp",[P.m],"$asp")
if(b<0)throw H.e(P.a0(b,0,J.as(a),null,null))
z=c==null
if(!z&&c<b)throw H.e(P.a0(c,b,J.as(a),null,null))
y=J.b3(a)
for(x=0;x<b;++x)if(!y.D())throw H.e(P.a0(b,0,x,null,null))
w=[]
if(z)for(;y.D();)w.push(y.gL())
else for(x=b;x<c;++x){if(!y.D())throw H.e(P.a0(c,b,x,null,null))
w.push(y.gL())}return H.f0(w)},
jR:function(a,b,c){return new H.iM(a,H.iN(a,!1,!0,!1))},
fz:function(){var z=H.jy()
if(z!=null)return P.kM(z,0,null)
throw H.e(P.V("'Uri.base' is not supported"))},
cl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.af(a)
if(typeof a==="string")return JSON.stringify(a)
return P.io(a)},
u:function(a){return new P.fQ(a)},
j2:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.m]})
z=H.c([],[d])
C.a.sp(z,a)
for(y=0;y<a;++y)C.a.q(z,y,b.$1(y))
return z},
e0:function(a){H.ns(a)},
kM:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.c.I(a,b+4)^58)*3|C.c.I(a,b)^100|C.c.I(a,b+1)^97|C.c.I(a,b+2)^116|C.c.I(a,b+3)^97)>>>0
if(y===0)return P.fy(b>0||c<c?C.c.v(a,b,c):a,5,null).gf7()
else if(y===32)return P.fy(C.c.v(a,z,c),0,null).gf7()}x=new Array(8)
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
if(P.hf(a,b,c,0,w)>=14)C.a.q(w,7,c)
v=w[1]
if(typeof v!=="number")return v.kU()
if(v>=b)if(P.hf(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.G()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.U()
if(typeof r!=="number")return H.A(r)
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
p=!1}else{if(!(r<c&&r===s+2&&C.c.ad(a,"..",s)))n=r>s+2&&C.c.ad(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.c.ad(a,"file",b)){if(u<=b){if(!C.c.ad(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.c.b3(a,s,r,"/");++r;++q;++c}else{a=C.c.v(a,b,s)+"/"+C.c.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.c.ad(a,"http",b)){if(x&&t+3===s&&C.c.ad(a,"80",t+1))if(b===0&&!0){a=C.c.b3(a,t,s,"")
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
else if(v===z&&C.c.ad(a,"https",b)){if(x&&t+4===s&&C.c.ad(a,"443",t+1))if(b===0&&!0){a=C.c.b3(a,t,s,"")
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
q-=b}return new P.lU(a,v,u,t,s,r,q,o)}return P.m8(a,b,c,v,u,t,s,r,q,o)},
fB:function(a,b){var z=P.h
return C.a.jW(H.c(a.split("&"),[z]),P.eH(z,z),new P.kP(b),[P.I,P.h,P.h])},
kK:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kL(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.c.a1(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cd(C.c.v(a,v,w),null,null)
if(typeof s!=="number")return s.df()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cd(C.c.v(a,v,c),null,null)
if(typeof s!=="number")return s.df()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kN(a)
y=new P.kO(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.c.a1(a,w)
if(s===58){if(w===b){++w
if(C.c.a1(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaG(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kK(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.h.aV(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
mz:function(){var z,y,x,w,v
z=P.j2(22,new P.mB(),!0,P.P)
y=new P.mA(z)
x=new P.mC()
w=new P.mD()
v=H.d(y.$2(0,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(14,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(15,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(1,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(2,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(3,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(4,229),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(5,229),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(6,231),"$isP")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(7,231),"$isP")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.d(y.$2(8,8),"$isP"),"]",5)
v=H.d(y.$2(9,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(16,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(17,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(10,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(18,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(19,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(11,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(12,236),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.d(y.$2(13,237),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.d(y.$2(20,245),"$isP"),"az",21)
v=H.d(y.$2(21,245),"$isP")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hf:function(a,b,c,d,e){var z,y,x,w,v
H.k(e,"$isb",[P.m],"$asb")
z=$.$get$hg()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.c.I(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.q(e,v>>>5,y)}return d},
N:{"^":"a;"},
"+bool":0,
am:{"^":"a;a,b",
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.am))return!1
return this.a===b.a&&!0},
gZ:function(a){var z=this.a
return(z^C.h.aV(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.i9(H.jF(this))
y=P.bV(H.jD(this))
x=P.bV(H.jz(this))
w=P.bV(H.jA(this))
v=P.bV(H.jC(this))
u=P.bV(H.jE(this))
t=P.ia(H.jB(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
n:{
i9:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
ia:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bV:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"ak;"},
"+double":0,
bu:{"^":"a;a",
U:function(a,b){return C.h.U(this.a,H.d(b,"$isbu").a)},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.bu))return!1
return this.a===b.a},
gZ:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ih()
y=this.a
if(y<0)return"-"+new P.bu(0-y).i(0)
x=z.$1(C.h.a7(y,6e7)%60)
w=z.$1(C.h.a7(y,1e6)%60)
v=new P.ig().$1(y%1e6)
return""+C.h.a7(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
n:{
et:function(a,b,c,d,e,f){return new P.bu(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ig:{"^":"n:24;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ih:{"^":"n:24;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a3:{"^":"a;"},
eV:{"^":"a3;",
i:function(a){return"Throw of null."}},
aH:{"^":"a3;a,b,c,d",
gca:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc9:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gca()+y+x
if(!this.a)return w
v=this.gc9()
u=P.cl(this.b)
return w+v+": "+H.i(u)},
n:{
bT:function(a){return new P.aH(!1,null,null,a)},
cU:function(a,b,c){return new P.aH(!0,a,b,c)}}},
cx:{"^":"aH;e,f,a,b,c,d",
gca:function(){return"RangeError"},
gc9:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
n:{
c4:function(a,b,c){return new P.cx(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.cx(b,c,!0,a,d,"Invalid value")},
b0:function(a,b,c,d,e,f){if(typeof a!=="number")return H.A(a)
if(0>a||a>c)throw H.e(P.a0(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.a0(b,a,c,"end",f))
return b}return c}}},
iG:{"^":"aH;e,p:f>,a,b,c,d",
gca:function(){return"RangeError"},
gc9:function(){if(J.hD(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
n:{
b4:function(a,b,c,d,e){var z=H.ac(e!=null?e:J.as(b))
return new P.iG(b,z,!0,a,c,"Index out of range")}}},
kI:{"^":"a3;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
V:function(a){return new P.kI(a)}}},
kF:{"^":"a3;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
cC:function(a){return new P.kF(a)}}},
dl:{"^":"a3;a",
i:function(a){return"Bad state: "+this.a},
n:{
fa:function(a){return new P.dl(a)}}},
i2:{"^":"a3;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.cl(z))+"."},
n:{
aI:function(a){return new P.i2(a)}}},
js:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa3:1},
f9:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa3:1},
i7:{"^":"a3;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fQ:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
iv:{"^":"a;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.i(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.c.v(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.c.I(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.c.a1(w,s)
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
return y+n+l+m+"\n"+C.c.t(" ",x-o+n.length)+"^\n"},
n:{
W:function(a,b,c){return new P.iv(a,b,c)}}},
bW:{"^":"a;"},
m:{"^":"ak;"},
"+int":0,
p:{"^":"a;$ti",
da:["fB",function(a,b){var z=H.a5(this,"p",0)
return new H.dH(this,H.l(b,{func:1,ret:P.N,args:[z]}),[z])}],
gp:function(a){var z,y
z=this.gW(this)
for(y=0;z.D();)++y
return y},
gaN:function(a){var z,y
z=this.gW(this)
if(!z.D())throw H.e(H.cq())
y=z.gL()
if(z.D())throw H.e(H.iJ())
return y},
a9:function(a,b){var z,y,x
if(b<0)H.r(P.a0(b,0,null,"index",null))
for(z=this.gW(this),y=0;z.D();){x=z.gL()
if(b===y)return x;++y}throw H.e(P.b4(b,this,"index",null,y))},
i:function(a){return P.iI(this,"(",")")}},
aY:{"^":"a;$ti"},
b:{"^":"a;$ti",$isp:1},
"+List":0,
I:{"^":"a;$ti"},
F:{"^":"a;",
gZ:function(a){return P.a.prototype.gZ.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ak:{"^":"a;"},
"+num":0,
a:{"^":";",
w:function(a,b){return this===b},
gZ:function(a){return H.bE(this)},
i:function(a){return"Instance of '"+H.b9(this)+"'"},
toString:function(){return this.i(this)}},
aM:{"^":"a;"},
h:{"^":"a;",$iseW:1},
"+String":0,
aj:{"^":"a;aQ:a<",
gp:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isnV:1,
n:{
fb:function(a,b,c){var z=J.b3(b)
if(!z.D())return a
if(c.length===0){do a+=H.i(z.gL())
while(z.D())}else{a+=H.i(z.gL())
for(;z.D();)a=a+c+H.i(z.gL())}return a}}},
kP:{"^":"n:44;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.k(a,"$isI",[z,z],"$asI")
H.D(b)
y=J.bR(b).eI(b,"=")
if(y===-1){if(b!=="")a.q(0,P.dM(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.c.v(b,0,y)
w=C.c.ax(b,y+1)
z=this.a
a.q(0,P.dM(x,0,x.length,z,!0),P.dM(w,0,w.length,z,!0))}return a}},
kL:{"^":"n:43;a",
$2:function(a,b){throw H.e(P.W("Illegal IPv4 address, "+a,this.a,b))}},
kN:{"^":"n:42;a",
$2:function(a,b){throw H.e(P.W("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kO:{"^":"n:41;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cd(C.c.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.U()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cG:{"^":"a;c2:a<,b,c,d,eT:e>,f,r,0x,0y,0z,0Q,0ch",
si9:function(a){var z=P.h
this.Q=H.k(a,"$isI",[z,z],"$asI")},
gf9:function(){return this.b},
gcT:function(a){var z=this.c
if(z==null)return""
if(C.c.a6(z,"["))return C.c.v(z,1,z.length-1)
return z},
gbV:function(a){var z=this.d
if(z==null)return P.h3(this.a)
return z},
gd2:function(){var z=this.f
return z==null?"":z},
geD:function(){var z=this.r
return z==null?"":z},
d6:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.k(h,"$isI",[P.h,null],"$asI")
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
if(x&&!C.c.a6(d,"/"))d="/"+d
g=P.dL(g,0,0,h)
return new P.cG(i,j,c,f,d,g,this.r)},
eY:function(a,b){return this.d6(a,null,null,null,null,null,null,b,null,null)},
gd3:function(){var z,y
if(this.Q==null){z=this.f
y=P.h
this.si9(new P.fx(P.fB(z==null?"":z,C.m),[y,y]))}return this.Q},
geE:function(){return this.c!=null},
geH:function(){return this.f!=null},
geF:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.i(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.i(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.i(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!!J.O(b).$isdE){if(this.a==b.gc2())if(this.c!=null===b.geE())if(this.b==b.gf9())if(this.gcT(this)==b.gcT(b))if(this.gbV(this)==b.gbV(b))if(this.e===b.geT(b)){z=this.f
y=z==null
if(!y===b.geH()){if(y)z=""
if(z===b.gd2()){z=this.r
y=z==null
if(!y===b.geF()){if(y)z=""
z=z===b.geD()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
gZ:function(a){var z=this.z
if(z==null){z=C.c.gZ(this.i(0))
this.z=z}return z},
$isdE:1,
n:{
ca:function(a,b,c,d){var z,y,x,w,v,u
H.k(a,"$isb",[P.m],"$asb")
if(c===C.m){z=$.$get$h8().b
if(typeof b!=="string")H.r(H.ai(b))
z=z.test(b)}else z=!1
if(z)return b
H.x(b,H.a5(c,"bU",0))
y=c.gjQ().cH(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.ba(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
m8:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mj(a,b,d)
else{if(d===b)P.bK(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mk(a,z,e-1):""
x=P.md(a,e,f,!1)
if(typeof f!=="number")return f.G()
w=f+1
if(typeof g!=="number")return H.A(g)
v=w<g?P.mg(P.cd(C.c.v(a,w,g),new P.m9(a,f),null),j):null}else{y=""
x=null
v=null}u=P.me(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.U()
t=h<i?P.dL(a,h+1,i,null):null
return new P.cG(j,y,x,v,u,t,i<c?P.mc(a,i+1,c):null)},
h3:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bK:function(a,b,c){throw H.e(P.W(c,a,b))},
mg:function(a,b){if(a!=null&&a===P.h3(b))return
return a},
md:function(a,b,c,d){var z,y
if(b===c)return""
if(C.c.a1(a,b)===91){if(typeof c!=="number")return c.N()
z=c-1
if(C.c.a1(a,z)!==93)P.bK(a,b,"Missing end `]` to match `[` in host")
P.fA(a,b+1,z)
return C.c.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.A(c)
y=b
for(;y<c;++y)if(C.c.a1(a,y)===58){P.fA(a,b,c)
return"["+a+"]"}return P.mm(a,b,c)},
mm:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.A(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.c.a1(a,z)
if(v===37){u=P.ha(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.aj("")
s=C.c.v(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.c.v(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.K,t)
t=(C.K[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aj("")
if(y<z){x.a+=C.c.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.t,t)
t=(C.t[t]&1<<(v&15))!==0}else t=!1
if(t)P.bK(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.c.a1(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aj("")
s=C.c.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h4(v)
z+=q
y=z}}}}if(x==null)return C.c.v(a,b,c)
if(y<c){s=C.c.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mj:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.h6(C.c.I(a,b)))P.bK(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.c.I(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bK(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.c.v(a,b,c)
return P.ma(y?a.toLowerCase():a)},
ma:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mk:function(a,b,c){return P.bL(a,b,c,C.a9,!1)},
me:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bL(a,b,c,C.L,!0):C.r.lw(d,new P.mf(),P.h).k(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.c.a6(w,"/"))w="/"+w
return P.ml(w,e,f)},
ml:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.c.a6(a,"/"))return P.mn(a,!z||c)
return P.mo(a)},
dL:function(a,b,c,d){var z,y
z={}
H.k(d,"$isI",[P.h,null],"$asI")
if(a!=null){if(d!=null)throw H.e(P.bT("Both query and queryParameters specified"))
return P.bL(a,b,c,C.u,!0)}if(d==null)return
y=new P.aj("")
z.a=""
d.a0(0,new P.mh(new P.mi(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mc:function(a,b,c){return P.bL(a,b,c,C.u,!0)},
ha:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.c.a1(a,b+1)
x=C.c.a1(a,z)
w=H.cM(y)
v=H.cM(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.h.aV(u,4)
if(z>=8)return H.f(C.w,z)
z=(C.w[z]&1<<(u&15))!==0}else z=!1
if(z)return H.ba(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.c.v(a,b,b+3).toUpperCase()
return},
h4:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.m])
C.a.q(y,0,37)
C.a.q(y,1,C.c.I("0123456789ABCDEF",a>>>4))
C.a.q(y,2,C.c.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.h.iB(a,6*w)&63|x
C.a.q(y,v,37)
C.a.q(y,v+1,C.c.I("0123456789ABCDEF",u>>>4))
C.a.q(y,v+2,C.c.I("0123456789ABCDEF",u&15))
v+=3}}return P.c5(y,0,null)},
bL:function(a,b,c,d,e){var z=P.h9(a,b,c,H.k(d,"$isb",[P.m],"$asb"),e)
return z==null?C.c.v(a,b,c):z},
h9:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.k(d,"$isb",[P.m],"$asb")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.U()
if(typeof c!=="number")return H.A(c)
if(!(y<c))break
c$0:{v=C.c.a1(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.ha(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.t,u)
u=(C.t[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bK(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.c.a1(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h4(v)}}if(w==null)w=new P.aj("")
w.a+=C.c.v(a,x,y)
w.a+=H.i(t)
if(typeof s!=="number")return H.A(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.U()
if(x<c)w.a+=C.c.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
h7:function(a){if(C.c.a6(a,"."))return!0
return C.c.eI(a,"/.")!==-1},
mo:function(a){var z,y,x,w,v,u,t
if(!P.h7(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.K(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.k(z,"/")},
mn:function(a,b){var z,y,x,w,v,u
if(!P.h7(a))return!b?P.h5(a):a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaG(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaG(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.q(z,0,P.h5(z[0]))}return C.a.k(z,"/")},
h5:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.h6(J.hG(a,0)))for(y=1;y<z;++y){x=C.c.I(a,y)
if(x===58)return C.c.v(a,0,y)+"%3A"+C.c.ax(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mb:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.c.I(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.e(P.bT("Invalid URL encoding"))}}return z},
dM:function(a,b,c,d,e){var z,y,x,w,v
y=b
while(!0){if(!(y<c)){z=!0
break}x=C.c.I(a,y)
if(x<=127)if(x!==37)w=x===43
else w=!0
else w=!0
if(w){z=!1
break}++y}if(z){if(C.m!==d)w=!1
else w=!0
if(w)return C.c.v(a,b,c)
else v=new H.v(C.c.v(a,b,c))}else{v=H.c([],[P.m])
for(w=a.length,y=b;y<c;++y){x=C.c.I(a,y)
if(x>127)throw H.e(P.bT("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.e(P.bT("Truncated URI"))
C.a.h(v,P.mb(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.k(v,"$isb",[P.m],"$asb")
return new P.kV(!1).cH(v)},
h6:function(a){var z=a|32
return 97<=z&&z<=122}}},
m9:{"^":"n:40;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.G()
throw H.e(P.W("Invalid port",this.a,z+1))}},
mf:{"^":"n:14;",
$1:function(a){return P.ca(C.aa,a,C.m,!1)}},
mi:{"^":"n:38;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.i(P.ca(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.i(P.ca(C.w,b,C.m,!0))}}},
mh:{"^":"n:35;a",
$2:function(a,b){var z,y
H.D(a)
if(b==null||typeof b==="string")this.a.$2(a,H.D(b))
else for(z=J.b3(H.hu(b,"$isp")),y=this.a;z.D();)y.$2(a,H.D(z.gL()))}},
kJ:{"^":"a;a,b,c",
gf7:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.c.eJ(y,"?",z)
w=y.length
if(x>=0){v=P.bL(y,x+1,w,C.u,!1)
w=x}else v=null
z=new P.ln(this,"data",null,null,null,P.bL(y,z,w,C.L,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
n:{
fy:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.c.I(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.e(P.W("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.e(P.W("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.c.I(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaG(z)
if(v!==44||x!==t+7||!C.c.ad(a,"base64",t+1))throw H.e(P.W("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.Q.ke(a,s,y)
else{r=P.h9(a,s,y,C.u,!0)
if(r!=null)a=C.c.b3(a,s,y,r)}return new P.kJ(a,z,c)}}},
mB:{"^":"n:34;",
$1:function(a){return new Uint8Array(96)}},
mA:{"^":"n:33;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hI(z,0,96,b)
return z}},
mC:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.c.I(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mD:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.c.I(b,0),y=C.c.I(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
lU:{"^":"a;a,b,c,d,e,f,r,x,0y",
geE:function(){return this.c>0},
geG:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.G()
y=this.e
if(typeof y!=="number")return H.A(y)
y=z+1<y
z=y}else z=!1
return z},
geH:function(){var z=this.f
if(typeof z!=="number")return z.U()
return z<this.r},
geF:function(){return this.r<this.a.length},
gdJ:function(){return this.b===4&&C.c.a6(this.a,"http")},
gdK:function(){return this.b===5&&C.c.a6(this.a,"https")},
gc2:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdJ()){this.x="http"
z="http"}else if(this.gdK()){this.x="https"
z="https"}else if(z===4&&C.c.a6(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.c.a6(this.a,"package")){this.x="package"
z="package"}else{z=C.c.v(this.a,0,z)
this.x=z}return z},
gf9:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.c.v(this.a,y,z-1):""},
gcT:function(a){var z=this.c
return z>0?C.c.v(this.a,z,this.d):""},
gbV:function(a){var z
if(this.geG()){z=this.d
if(typeof z!=="number")return z.G()
return P.cd(C.c.v(this.a,z+1,this.e),null,null)}if(this.gdJ())return 80
if(this.gdK())return 443
return 0},
geT:function(a){return C.c.v(this.a,this.e,this.f)},
gd2:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.U()
return z<y?C.c.v(this.a,z+1,y):""},
geD:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.c.ax(y,z+1):""},
gd3:function(){var z=this.f
if(typeof z!=="number")return z.U()
if(z>=this.r)return C.ab
z=P.h
return new P.fx(P.fB(this.gd2(),C.m),[z,z])},
d6:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.k(h,"$isI",[P.h,null],"$asI")
i=this.gc2()
z=i==="file"
y=this.c
j=y>0?C.c.v(this.a,this.b+3,y):""
f=this.geG()?this.gbV(this):null
y=this.c
if(y>0)c=C.c.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.c.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.c.a6(d,"/"))d="/"+d
g=P.dL(g,0,0,h)
x=this.r
if(x<y.length)b=C.c.ax(y,x+1)
return new P.cG(i,j,c,f,d,g,b)},
eY:function(a,b){return this.d6(a,null,null,null,null,null,null,b,null,null)},
gZ:function(a){var z=this.y
if(z==null){z=C.c.gZ(this.a)
this.y=z}return z},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.O(b).$isdE)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$isdE:1},
ln:{"^":"cG;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e7:function(a){var z=document.createElement("a")
return z},
cZ:function(a,b){var z=document.createElement("canvas")
return z},
ii:function(a,b,c){var z,y
z=document.body
y=(z&&C.p).ao(z,a,b,c)
y.toString
z=W.B
z=new H.dH(new W.aq(y),H.l(new W.ij(),{func:1,ret:P.N,args:[z]}),[z])
return H.d(z.gaN(z),"$isQ")},
ik:function(a){H.d(a,"$iscm")
return"wheel"},
bv:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hL(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a7(x)}return z},
iH:function(a){var z,y,x
y=document.createElement("input")
z=H.d(y,"$iseA")
try{J.hN(z,a)}catch(x){H.a7(x)}return z},
cD:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fU:function(a,b,c,d){var z,y
z=W.cD(W.cD(W.cD(W.cD(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hj:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.S
if(z===C.l)return a
return z.e8(a,b)},
a2:{"^":"Q;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
hR:{"^":"a2;",
i:function(a){return String(a)},
$ishR:1,
"%":"HTMLAnchorElement"},
nC:{"^":"a2;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
ea:{"^":"a2;",$isea:1,"%":"HTMLBaseElement"},
ch:{"^":"a2;",$isch:1,"%":"HTMLBodyElement"},
cY:{"^":"a2;",
c0:function(a,b,c){if(c!=null)return this.hq(a,b,P.mP(c,null))
return this.hr(a,b)},
fj:function(a,b){return this.c0(a,b,null)},
hq:function(a,b,c){return a.getContext(b,c)},
hr:function(a,b){return a.getContext(b)},
$iscY:1,
$iseh:1,
"%":"HTMLCanvasElement"},
d_:{"^":"H;",
hs:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jN:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$isd_:1,
"%":"CanvasRenderingContext2D"},
nF:{"^":"B;0p:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nH:{"^":"lm;0p:length=",
fl:function(a,b){var z=this.ht(a,this.h9(a,b))
return z==null?"":z},
h9:function(a,b){var z,y
z=$.$get$el()
y=z[b]
if(typeof y==="string")return y
y=this.iE(a,b)
z[b]=y
return y},
iE:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ib()+b
if(z in a)return z
return b},
ht:function(a,b){return a.getPropertyValue(b)},
gcC:function(a){return a.bottom},
gbh:function(a){return a.height},
gb_:function(a){return a.left},
gbn:function(a){return a.right},
gbq:function(a){return a.top},
gbs:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
i6:{"^":"a;",
gb_:function(a){return this.fl(a,"left")}},
aX:{"^":"a2;",$isaX:1,"%":"HTMLDivElement"},
ic:{"^":"B;",
jj:function(a,b){return a.adoptNode(b)},
dd:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
nI:{"^":"H;",
i:function(a){return String(a)},
"%":"DOMException"},
id:{"^":"H;",
jC:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
ie:{"^":"H;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
w:function(a,b){var z
if(b==null)return!1
if(!H.bQ(b,"$isaL",[P.ak],"$asaL"))return!1
z=J.X(b)
return a.left===z.gb_(b)&&a.top===z.gbq(b)&&a.width===z.gbs(b)&&a.height===z.gbh(b)},
gZ:function(a){return W.fU(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcC:function(a){return a.bottom},
gbh:function(a){return a.height},
gb_:function(a){return a.left},
gbn:function(a){return a.right},
gbq:function(a){return a.top},
gbs:function(a){return a.width},
$isaL:1,
$asaL:function(){return[P.ak]},
"%":";DOMRectReadOnly"},
ll:{"^":"cs;dE:a<,b",
gp:function(a){return this.b.length},
l:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.f(z,b)
return H.d(z[b],"$isQ")},
q:function(a,b,c){var z
H.d(c,"$isQ")
z=this.b
if(b<0||b>=z.length)return H.f(z,b)
J.cR(this.a,c,z[b])},
h:function(a,b){J.e4(this.a,b)
return b},
gW:function(a){var z=this.kN(this)
return new J.at(z,z.length,0,[H.t(z,0)])},
$asU:function(){return[W.Q]},
$asp:function(){return[W.Q]},
$asb:function(){return[W.Q]}},
Q:{"^":"B;0kI:tagName=",
gjm:function(a){return new W.lo(a)},
gcG:function(a){return new W.ll(a,a.children)},
gea:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.U()
if(x<0)x=-x*0
if(typeof w!=="number")return w.U()
if(w<0)w=-w*0
return new P.aL(z,y,x,w,[P.ak])},
i:function(a){return a.localName},
ao:["c3",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.ew
if(z==null){z=H.c([],[W.aE])
y=new W.eT(z)
C.a.h(z,W.fS(null))
C.a.h(z,W.h0())
$.ew=y
d=y}else d=z
z=$.ev
if(z==null){z=new W.hb(d)
$.ev=z
c=z}else{z.a=d
c=z}}if($.aJ==null){z=document
y=z.implementation
y=(y&&C.U).jC(y,"")
$.aJ=y
$.d2=y.createRange()
y=$.aJ
y.toString
y=y.createElement("base")
H.d(y,"$isea")
y.href=z.baseURI
z=$.aJ.head;(z&&C.W).E(z,y)}z=$.aJ
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.d(y,"$isch")}z=$.aJ
if(!!this.$isch)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aJ.body;(z&&C.p).E(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.Y(C.a8,a.tagName)){z=$.d2;(z&&C.N).fq(z,x)
z=$.d2
w=(z&&C.N).jA(z,b)}else{x.innerHTML=b
w=$.aJ.createDocumentFragment()
for(z=J.X(w);y=x.firstChild,y!=null;)z.E(w,y)}z=$.aJ.body
if(x==null?z!=null:x!==z)J.e6(x)
c.dg(w)
C.z.jj(document,w)
return w},function(a,b,c){return this.ao(a,b,c,null)},"jB",null,null,"glu",5,5,null],
fu:function(a,b,c,d){a.textContent=null
this.E(a,this.ao(a,b,c,d))},
ft:function(a,b){return this.fu(a,b,null,null)},
b4:function(a,b){return a.getAttribute(b)},
ib:function(a,b){return a.removeAttribute(b)},
fs:function(a,b,c){return a.setAttribute(b,c)},
$isQ:1,
"%":";Element"},
ij:{"^":"n:23;",
$1:function(a){return!!J.O(H.d(a,"$isB")).$isQ}},
a9:{"^":"H;",$isa9:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
cm:{"^":"H;",
h4:function(a,b,c,d){return a.addEventListener(b,H.bk(H.l(c,{func:1,args:[W.a9]}),1),!1)},
$iscm:1,
"%":";EventTarget"},
nJ:{"^":"a2;0p:length=","%":"HTMLFormElement"},
iA:{"^":"a2;","%":"HTMLHeadElement"},
iB:{"^":"H;0p:length=",
ij:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
iC:{"^":"lE;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b4(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isB")
throw H.e(P.V("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.B]},
$asU:function(){return[W.B]},
$isp:1,
$asp:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]},
$isiC:1,
$asaA:function(){return[W.B]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
iD:{"^":"ic;","%":"HTMLDocument"},
bX:{"^":"H;0eb:data=",$isbX:1,"%":"ImageData"},
ez:{"^":"a2;",$isez:1,$iseh:1,"%":"HTMLImageElement"},
eA:{"^":"a2;0type",
skQ:function(a,b){a.type=H.D(b)},
$iseA:1,
"%":"HTMLInputElement"},
bz:{"^":"du;",$isbz:1,"%":"KeyboardEvent"},
iQ:{"^":"a2;","%":"HTMLLabelElement"},
j3:{"^":"H;",
i:function(a){return String(a)},
$isj3:1,
"%":"Location"},
jj:{"^":"a2;","%":"HTMLAudioElement;HTMLMediaElement"},
aw:{"^":"du;",$isaw:1,"%":"PointerEvent;DragEvent|MouseEvent"},
aq:{"^":"cs;a",
gaN:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.e(P.fa("No elements"))
if(y>1)throw H.e(P.fa("More than one element"))
return z.firstChild},
aA:function(a,b){var z,y,x,w,v
H.k(b,"$isp",[W.B],"$asp")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.X(y),v=0;v<x;++v)w.E(y,z.firstChild)
return},
q:function(a,b,c){var z,y
H.d(c,"$isB")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.f(y,b)
J.cR(z,c,y[b])},
gW:function(a){var z=this.a.childNodes
return new W.ex(z,z.length,-1,[H.cc(C.ac,z,"aA",0)])},
gp:function(a){return this.a.childNodes.length},
l:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asU:function(){return[W.B]},
$asp:function(){return[W.B]},
$asb:function(){return[W.B]}},
B:{"^":"cm;0ku:previousSibling=",
kw:function(a){var z=a.parentNode
if(z!=null)J.cf(z,a)},
kB:function(a,b){var z,y
try{z=a.parentNode
J.cR(z,b,a)}catch(y){H.a7(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.fA(a):z},
E:function(a,b){return a.appendChild(H.d(b,"$isB"))},
ic:function(a,b){return a.removeChild(b)},
ii:function(a,b,c){return a.replaceChild(b,c)},
$isB:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
jn:{"^":"lK;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b4(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isB")
throw H.e(P.V("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.B]},
$asU:function(){return[W.B]},
$isp:1,
$asp:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]},
$asaA:function(){return[W.B]},
"%":"NodeList|RadioNodeList"},
jM:{"^":"H;",
jA:function(a,b){return a.createContextualFragment(b)},
fq:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
nT:{"^":"a2;0p:length=","%":"HTMLSelectElement"},
cy:{"^":"a2;",$iscy:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
kh:{"^":"a2;",
ao:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.c3(a,b,c,d)
z=W.ii("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.aq(y).aA(0,new W.aq(z))
return y},
hw:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
ki:{"^":"a2;",
ao:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.c3(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.ao(z.createElement("table"),b,c,d)
z.toString
z=new W.aq(z)
x=z.gaN(z)
x.toString
z=new W.aq(x)
w=z.gaN(z)
y.toString
w.toString
new W.aq(y).aA(0,new W.aq(w))
return y},
dI:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
nW:{"^":"a2;",
ao:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.c3(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.ao(z.createElement("table"),b,c,d)
z.toString
z=new W.aq(z)
x=z.gaN(z)
y.toString
x.toString
new W.aq(y).aA(0,new W.aq(x))
return y},
"%":"HTMLTableSectionElement"},
fe:{"^":"a2;",$isfe:1,"%":"HTMLTemplateElement"},
bc:{"^":"H;",$isbc:1,"%":"Touch"},
bd:{"^":"du;",$isbd:1,"%":"TouchEvent"},
nY:{"^":"m5;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b4(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isbc")
throw H.e(P.V("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.bc]},
$asU:function(){return[W.bc]},
$isp:1,
$asp:function(){return[W.bc]},
$isb:1,
$asb:function(){return[W.bc]},
$asaA:function(){return[W.bc]},
"%":"TouchList"},
du:{"^":"a9;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
o0:{"^":"jj;",$iseh:1,"%":"HTMLVideoElement"},
bI:{"^":"aw;",
gjI:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.V("deltaY is not supported"))},
gjH:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.V("deltaX is not supported"))},
$isbI:1,
"%":"WheelEvent"},
le:{"^":"cm;",
ik:function(a,b){return a.requestAnimationFrame(H.bk(H.l(b,{func:1,ret:-1,args:[P.ak]}),1))},
hj:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fO:{"^":"B;",$isfO:1,"%":"Attr"},
o5:{"^":"ie;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
w:function(a,b){var z
if(b==null)return!1
if(!H.bQ(b,"$isaL",[P.ak],"$asaL"))return!1
z=J.X(b)
return a.left===z.gb_(b)&&a.top===z.gbq(b)&&a.width===z.gbs(b)&&a.height===z.gbh(b)},
gZ:function(a){return W.fU(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbh:function(a){return a.height},
gbs:function(a){return a.width},
"%":"ClientRect|DOMRect"},
o9:{"^":"mw;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b4(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isB")
throw H.e(P.V("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.B]},
$asU:function(){return[W.B]},
$isp:1,
$asp:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]},
$asaA:function(){return[W.B]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lk:{"^":"eK;dE:a<",
a0:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.gaF(),y=z.length,x=this.a,w=J.X(x),v=0;v<z.length;z.length===y||(0,H.z)(z),++v){u=z[v]
b.$2(u,w.b4(x,u))}},
gaF:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.d(z[w],"$isfO")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$ascu:function(){return[P.h,P.h]},
$asI:function(){return[P.h,P.h]}},
lo:{"^":"lk;a",
l:function(a,b){return J.cT(this.a,H.D(b))},
q:function(a,b,c){J.hO(this.a,b,c)},
gp:function(a){return this.gaF().length}},
lp:{"^":"kc;a,b,c,$ti"},
o6:{"^":"lp;a,b,c,$ti"},
lq:{"^":"dm;a,b,c,d,e,$ti",n:{
a1:function(a,b,c,d,e){var z,y
z=W.hj(new W.lr(c),W.a9)
y=z!=null
if(y&&!0){H.l(z,{func:1,args:[W.a9]})
if(y)J.hF(a,b,z,!1)}return new W.lq(0,a,b,z,!1,[e])}}},
lr:{"^":"n:31;a",
$1:function(a){return this.a.$1(H.d(a,"$isa9"))}},
c9:{"^":"a;a",
fQ:function(a){var z,y
z=$.$get$dJ()
if(z.gk7(z)){for(y=0;y<262;++y)z.q(0,C.a7[y],W.n5())
for(y=0;y<12;++y)z.q(0,C.B[y],W.n6())}},
aW:function(a){return $.$get$fT().Y(0,W.bv(a))},
aK:function(a,b,c){var z,y,x
z=W.bv(a)
y=$.$get$dJ()
x=y.l(0,H.i(z)+"::"+b)
if(x==null)x=y.l(0,"*::"+b)
if(x==null)return!1
return H.dR(x.$4(a,b,c,this))},
$isaE:1,
n:{
fS:function(a){var z,y
z=W.e7(null)
y=window.location
z=new W.c9(new W.lQ(z,y))
z.fQ(a)
return z},
o7:[function(a,b,c,d){H.d(a,"$isQ")
H.D(b)
H.D(c)
H.d(d,"$isc9")
return!0},"$4","n5",16,0,19],
o8:[function(a,b,c,d){var z,y,x
H.d(a,"$isQ")
H.D(b)
H.D(c)
z=H.d(d,"$isc9").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","n6",16,0,19]}},
aA:{"^":"a;$ti",
gW:function(a){return new W.ex(a,this.gp(a),-1,[H.cc(this,a,"aA",0)])}},
eT:{"^":"a;a",
aW:function(a){return C.a.e2(this.a,new W.jp(a))},
aK:function(a,b,c){return C.a.e2(this.a,new W.jo(a,b,c))},
$isaE:1},
jp:{"^":"n:25;a",
$1:function(a){return H.d(a,"$isaE").aW(this.a)}},
jo:{"^":"n:25;a,b,c",
$1:function(a){return H.d(a,"$isaE").aK(this.a,this.b,this.c)}},
lR:{"^":"a;",
fZ:function(a,b,c,d){var z,y,x
this.a.aA(0,c)
z=b.da(0,new W.lS())
y=b.da(0,new W.lT())
this.b.aA(0,z)
x=this.c
x.aA(0,C.I)
x.aA(0,y)},
aW:function(a){return this.a.Y(0,W.bv(a))},
aK:["fF",function(a,b,c){var z,y
z=W.bv(a)
y=this.c
if(y.Y(0,H.i(z)+"::"+b))return this.d.jk(c)
else if(y.Y(0,"*::"+b))return this.d.jk(c)
else{y=this.b
if(y.Y(0,H.i(z)+"::"+b))return!0
else if(y.Y(0,"*::"+b))return!0
else if(y.Y(0,H.i(z)+"::*"))return!0
else if(y.Y(0,"*::*"))return!0}return!1}],
$isaE:1},
lS:{"^":"n:26;",
$1:function(a){return!C.a.Y(C.B,H.D(a))}},
lT:{"^":"n:26;",
$1:function(a){return C.a.Y(C.B,H.D(a))}},
lZ:{"^":"lR;e,a,b,c,d",
aK:function(a,b,c){if(this.fF(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cT(a,"template")==="")return this.e.Y(0,b)
return!1},
n:{
h0:function(){var z,y,x,w,v
z=P.h
y=P.eI(C.A,z)
x=H.t(C.A,0)
w=H.l(new W.m_(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.lZ(y,P.c1(null,null,null,z),P.c1(null,null,null,z),P.c1(null,null,null,z),null)
y.fZ(null,new H.j9(C.A,w,[x,z]),v,null)
return y}}},
m_:{"^":"n:14;",
$1:function(a){return"TEMPLATE::"+H.i(H.D(a))}},
lY:{"^":"a;",
aW:function(a){var z=J.O(a)
if(!!z.$isf5)return!1
z=!!z.$isdn
if(z&&W.bv(a)==="foreignObject")return!1
if(z)return!0
return!1},
aK:function(a,b,c){if(b==="is"||C.c.a6(b,"on"))return!1
return this.aW(a)},
$isaE:1},
ex:{"^":"a;a,b,c,0d,$ti",
sdH:function(a){this.d=H.x(a,H.t(this,0))},
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdH(J.hE(this.a,z))
this.c=z
return!0}this.sdH(null)
this.c=y
return!1},
gL:function(){return this.d},
$isaY:1},
aE:{"^":"a;"},
lQ:{"^":"a;a,b",$iso_:1},
hb:{"^":"a;a",
dg:function(a){new W.mt(this).$2(a,null)},
bb:function(a,b){if(b==null)J.e6(a)
else J.cf(b,a)},
ir:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hJ(a)
x=J.cT(y.gdE(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a7(t)}v="element unprintable"
try{v=J.af(a)}catch(t){H.a7(t)}try{u=W.bv(a)
this.iq(H.d(a,"$isQ"),b,z,v,u,H.d(y,"$isI"),H.D(x))}catch(t){if(H.a7(t) instanceof P.aH)throw t
else{this.bb(a,b)
window
s="Removing corrupted element "+H.i(v)
if(typeof console!="undefined")window.console.warn(s)}}},
iq:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.bb(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aW(a)){this.bb(a,b)
window
z="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aK(a,"is",g)){this.bb(a,b)
window
z="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaF()
y=H.c(z.slice(0),[H.t(z,0)])
for(x=f.gaF().length-1,z=f.a,w=J.X(z);x>=0;--x){if(x>=y.length)return H.f(y,x)
v=y[x]
if(!this.a.aK(a,J.hQ(v),w.b4(z,v))){window
u="Removing disallowed attribute <"+H.i(e)+" "+v+'="'+H.i(w.b4(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.b4(z,v)
w.ib(z,v)}}if(!!J.O(a).$isfe)this.dg(a.content)},
$isnR:1},
mt:{"^":"n:46;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.ir(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.bb(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hK(z)}catch(w){H.a7(w)
v=H.d(z,"$isB")
if(x){u=v.parentNode
if(u!=null)J.cf(u,v)}else J.cf(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.d(y,"$isB")}}},
lm:{"^":"H+i6;"},
lD:{"^":"H+U;"},
lE:{"^":"lD+aA;"},
lJ:{"^":"H+U;"},
lK:{"^":"lJ+aA;"},
m4:{"^":"H+U;"},
m5:{"^":"m4+aA;"},
mv:{"^":"H+U;"},
mw:{"^":"mv+aA;"}}],["","",,P,{"^":"",
mS:function(a){var z,y
z=J.O(a)
if(!!z.$isbX){y=z.geb(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h2(a.data,a.height,a.width)},
mR:function(a){if(a instanceof P.h2)return{data:a.a,height:a.b,width:a.c}
return a},
mP:function(a,b){var z={}
a.a0(0,new P.mQ(z))
return z},
er:function(){var z=$.eq
if(z==null){z=J.cS(window.navigator.userAgent,"Opera",0)
$.eq=z}return z},
ib:function(){var z,y
z=$.en
if(z!=null)return z
y=$.eo
if(y==null){y=J.cS(window.navigator.userAgent,"Firefox",0)
$.eo=y}if(y)z="-moz-"
else{y=$.ep
if(y==null){y=!P.er()&&J.cS(window.navigator.userAgent,"Trident/",0)
$.ep=y}if(y)z="-ms-"
else z=P.er()?"-o-":"-webkit-"}$.en=z
return z},
lV:{"^":"a;",
eB:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
d9:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.O(a)
if(!!y.$isam)return new Date(a.a)
if(!!y.$isjQ)throw H.e(P.cC("structured clone of RegExp"))
if(!!y.$isbX)return a
if(!!y.$isdg)return a
if(!!y.$isI){x=this.eB(a)
y=this.b
if(x>=y.length)return H.f(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.q(y,x,w)
a.a0(0,new P.lX(z,this))
return z.a}if(!!y.$isb){x=this.eB(a)
z=this.b
if(x>=z.length)return H.f(z,x)
w=z[x]
if(w!=null)return w
return this.jz(a,x)}throw H.e(P.cC("structured clone of other type"))},
jz:function(a,b){var z,y,x,w
z=J.bn(a)
y=z.gp(a)
x=new Array(y)
C.a.q(this.b,b,x)
for(w=0;w<y;++w)C.a.q(x,w,this.d9(z.l(a,w)))
return x}},
lX:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.d9(b)}},
h2:{"^":"a;eb:a>,b,c",$isbX:1},
mQ:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
lW:{"^":"lV;a,b"},
is:{"^":"cs;a,b",
gbz:function(){var z,y,x
z=this.b
y=H.a5(z,"U",0)
x=W.Q
return new H.j7(new H.dH(z,H.l(new P.it(),{func:1,ret:P.N,args:[y]}),[y]),H.l(new P.iu(),{func:1,ret:x,args:[y]}),[y,x])},
q:function(a,b,c){var z
H.d(c,"$isQ")
z=this.gbz()
J.hM(z.b.$1(J.cg(z.a,b)),c)},
h:function(a,b){J.e4(this.b.a,b)},
gp:function(a){return J.as(this.gbz().a)},
l:function(a,b){var z=this.gbz()
return z.b.$1(J.cg(z.a,b))},
gW:function(a){var z=P.j1(this.gbz(),!1,W.Q)
return new J.at(z,z.length,0,[H.t(z,0)])},
$asU:function(){return[W.Q]},
$asp:function(){return[W.Q]},
$asb:function(){return[W.Q]}},
it:{"^":"n:23;",
$1:function(a){return!!J.O(H.d(a,"$isB")).$isQ}},
iu:{"^":"n:55;",
$1:function(a){return H.j(H.d(a,"$isB"),"$isQ")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cE:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lF:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lL:{"^":"a;$ti",
gbn:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.x(z+this.c,H.t(this,0))},
gcC:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.x(z+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
w:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bQ(b,"$isaL",[P.ak],"$asaL"))return!1
z=this.a
y=J.X(b)
x=y.gb_(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbq(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.t(this,0)
if(H.x(z+this.c,w)===y.gbn(b)){if(typeof x!=="number")return x.G()
z=H.x(x+this.d,w)===y.gcC(b)}else z=!1}else z=!1}else z=!1
return z},
gZ:function(a){var z,y,x,w,v
z=this.a
y=J.bS(z)
x=this.b
w=J.bS(x)
if(typeof z!=="number")return z.G()
v=H.t(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.x(x+this.d,v)
return P.lF(P.cE(P.cE(P.cE(P.cE(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aL:{"^":"lL;b_:a>,bq:b>,bs:c>,bh:d>,$ti"}}],["","",,P,{"^":"",f5:{"^":"dn;",$isf5:1,"%":"SVGScriptElement"},dn:{"^":"Q;",
gcG:function(a){return new P.is(a,new W.aq(a))},
ao:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aE])
C.a.h(z,W.fS(null))
C.a.h(z,W.h0())
C.a.h(z,new W.lY())
c=new W.hb(new W.eT(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).jB(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.aq(w)
u=z.gaN(z)
for(z=J.X(v);x=u.firstChild,x!=null;)z.E(v,x)
return v},
$isdn:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":"",P:{"^":"a;",$isp:1,
$asp:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$isku:1}}],["","",,P,{"^":""}],["","",,P,{"^":"",hV:{"^":"H;",$ishV:1,"%":"WebGLBuffer"},iw:{"^":"H;",$isiw:1,"%":"WebGLFramebuffer"},jJ:{"^":"H;",$isjJ:1,"%":"WebGLProgram"},dh:{"^":"H;",
dZ:function(a,b){return a.activeTexture(b)},
e3:function(a,b,c){return a.attachShader(b,c)},
aB:function(a,b,c){return a.bindBuffer(b,c)},
jo:function(a,b,c){return a.bindFramebuffer(b,c)},
aX:function(a,b,c){return a.bindTexture(b,c)},
jp:function(a,b,c){return a.blendFunc(b,c)},
e9:function(a,b,c,d){return a.bufferData(b,c,d)},
js:function(a,b){return a.clear(b)},
jt:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
ju:function(a,b){return a.clearDepth(b)},
jw:function(a,b){return a.compileShader(b)},
jD:function(a,b){return a.createShader(b)},
jF:function(a,b){return a.deleteProgram(b)},
jG:function(a,b){return a.deleteShader(b)},
jJ:function(a,b){return a.depthFunc(b)},
jK:function(a,b){return a.disable(b)},
ec:function(a,b){return a.disableVertexAttribArray(b)},
jM:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cK:function(a,b){return a.enable(b)},
ee:function(a,b){return a.enableVertexAttribArray(b)},
ff:function(a,b,c){return a.getActiveAttrib(b,c)},
fg:function(a,b,c){return a.getActiveUniform(b,c)},
fh:function(a,b,c){return a.getAttribLocation(b,c)},
de:function(a,b){return a.getParameter(b)},
fk:function(a,b){return a.getProgramInfoLog(b)},
c1:function(a,b,c){return a.getProgramParameter(b,c)},
fm:function(a,b){return a.getShaderInfoLog(b)},
fn:function(a,b,c){return a.getShaderParameter(b,c)},
fo:function(a,b,c){return a.getUniformLocation(b,c)},
ka:function(a,b){return a.linkProgram(b)},
kt:function(a,b,c){return a.pixelStorei(b,c)},
fw:function(a,b,c){return a.shaderSource(b,c)},
kK:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.O(g)
if(!!z.$isbX)y=!0
else y=!1
if(y){this.iG(a,b,c,d,e,f,P.mR(g))
return}if(!!z.$isez)z=!0
else z=!1
if(z){this.iH(a,b,c,d,e,f,g)
return}throw H.e(P.bT("Incorrect number or type of arguments"))},
kJ:function(a,b,c,d,e,f,g){return this.kK(a,b,c,d,e,f,g,null,null,null)},
iG:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
iH:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bY:function(a,b,c,d){return a.texParameteri(b,c,d)},
S:function(a,b,c){return a.uniform1f(b,c)},
T:function(a,b,c){return a.uniform1i(b,c)},
A:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
f5:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
f6:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
f8:function(a,b){return a.useProgram(b)},
kS:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kT:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isdh:1,
"%":"WebGLRenderingContext"},k1:{"^":"H;",$isk1:1,"%":"WebGLShader"},kj:{"^":"H;",$iskj:1,"%":"WebGLTexture"},kD:{"^":"H;",$iskD:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",Z:{"^":"a;0a,0b,0c,0d,$ti",
shA:function(a){this.a=H.k(a,"$isb",[H.a5(this,"Z",0)],"$asb")},
sdO:function(a){this.b=H.l(a,{func:1,ret:P.N,args:[[P.p,H.a5(this,"Z",0)]]})},
sdM:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.m,[P.p,H.a5(this,"Z",0)]]})},
sdP:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.m,[P.p,H.a5(this,"Z",0)]]})},
c5:function(a){this.shA(H.c([],[a]))
this.sdO(null)
this.sdM(null)
this.sdP(null)},
dh:function(a,b,c){var z=H.a5(this,"Z",0)
H.l(b,{func:1,ret:P.N,args:[[P.p,z]]})
z={func:1,ret:-1,args:[P.m,[P.p,z]]}
H.l(a,z)
H.l(c,z)
this.sdO(b)
this.sdM(a)
this.sdP(c)},
bv:function(a,b){return this.dh(a,null,b)},
i0:function(a){var z
H.k(a,"$isp",[H.a5(this,"Z",0)],"$asp")
z=this.b
if(z!=null)return z.$1(a)
return!0},
hH:function(a,b){var z
H.k(b,"$isp",[H.a5(this,"Z",0)],"$asp")
z=this.c
if(z!=null)z.$2(a,b)},
gp:function(a){return this.a.length},
gW:function(a){var z=this.a
return new J.at(z,z.length,0,[H.t(z,0)])},
a9:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.a5(this,"Z",0)
H.x(b,z)
z=[z]
if(this.i0(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.hH(x,H.c([b],z))}},
$isp:1,
n:{
d0:function(a){var z=new O.Z([a])
z.c5(a)
return z}}},dc:{"^":"a;0a,0b",
scf:function(a){this.a=H.k(a,"$isb",[V.ag],"$asb")},
gp:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.L()
this.b=z}return z},
fM:function(a){var z=this.b
if(!(z==null))z.J(a)},
aO:function(){return this.fM(null)},
ga4:function(){var z=this.a
if(z.length>0)return C.a.gaG(z)
else return V.bB()},
eW:function(a){var z=this.a
if(a==null)C.a.h(z,V.bB())
else C.a.h(z,a)
this.aO()},
d1:function(){var z=this.a
if(z.length>0){z.pop()
this.aO()}}}}],["","",,E,{"^":"",cV:{"^":"a;"},au:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0ak:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sfN:function(a,b){this.y=H.k(b,"$isZ",[E.au],"$asZ")},
sak:function(a){this.z=H.d(a,"$isbw")},
ds:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.D();){y=z.d
if(y.f==null)y.ds()}},
sac:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gu().K(0,this.geQ())
y=this.c
if(y!=null)y.gu().h(0,this.geQ())
x=new D.C("shape",z,this.c,this,[F.f7])
x.b=!0
this.ab(x)}},
sbo:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gu().K(0,this.geR())
y=this.f
this.f=a
if(a!=null)a.gu().h(0,this.geR())
this.ds()
x=new D.C("technique",y,this.f,this,[O.c6])
x.b=!0
this.ab(x)}},
sb1:function(a){var z,y
if(!J.K(this.r,a)){z=this.r
if(z!=null)z.gu().K(0,this.geP())
if(a!=null)a.gu().h(0,this.geP())
this.r=a
y=new D.C("mover",z,a,this,[U.ab])
y.b=!0
this.ab(y)}},
au:function(a){var z,y,x,w
z=this.r
y=z!=null?z.av(a,this):null
if(!J.K(y,this.x)){x=this.x
this.x=y
w=new D.C("matrix",x,y,this,[V.ag])
w.b=!0
this.ab(w)}z=this.f
if(z!=null)z.au(a)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.D();)z.d.au(a)},
b2:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga4())
else C.a.h(z.a,y.t(0,z.ga4()))
z.aO()
a.eX(this.f)
z=a.dy
x=(z&&C.a).gaG(z)
if(x!=null&&this.d!=null)x.kA(a,this)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.D();)z.d.b2(a)
a.eV()
a.dx.d1()},
gu:function(){var z=this.z
if(z==null){z=D.L()
this.z=z}return z},
ab:function(a){var z=this.z
if(!(z==null))z.J(a)},
a3:function(){return this.ab(null)},
kj:[function(a){H.d(a,"$isy")
this.e=null
this.ab(a)},function(){return this.kj(null)},"lC","$1","$0","geQ",0,2,0],
kk:[function(a){this.ab(H.d(a,"$isy"))},function(){return this.kk(null)},"lD","$1","$0","geR",0,2,0],
ki:[function(a){this.ab(H.d(a,"$isy"))},function(){return this.ki(null)},"lB","$1","$0","geP",0,2,0],
kg:[function(a){this.ab(H.d(a,"$isy"))},function(){return this.kg(null)},"lz","$1","$0","geO",0,2,0],
ly:[function(a,b){var z,y,x,w,v,u,t
H.k(b,"$isp",[E.au],"$asp")
for(z=b.length,y=this.geO(),x={func:1,ret:-1,args:[D.y]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gak()==null){t=new D.bw()
t.sal(null)
t.sb9(null)
t.c=null
t.d=0
u.sak(t)}t=u.gak()
t.toString
H.l(y,x)
if(t.a==null)t.sal(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a3()},"$2","gkf",8,0,9],
lA:[function(a,b){var z,y
H.k(b,"$isp",[E.au],"$asp")
for(z=b.gW(b),y=this.geO();z.D();)z.gL().gu().K(0,y)
this.a3()},"$2","gkh",8,0,9],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaK:1,
n:{
d3:function(a,b,c,d,e,f){var z=new E.au()
z.a=d
z.b=!0
z.sfN(0,O.d0(E.au))
z.y.bv(z.gkf(),z.gkh())
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
z.sac(0,e)
z.sbo(f)
z.sb1(c)
return z}}},jS:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
siF:function(a){this.dy=H.k(a,"$isb",[O.c6],"$asb")},
siA:function(a){this.fr=H.k(a,"$isI",[P.h,A.di],"$asI")},
fI:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.am(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dc()
y=[V.ag]
z.scf(H.c([],y))
z.b=null
z.gu().h(0,new E.jU(this))
this.cy=z
z=new O.dc()
z.scf(H.c([],y))
z.b=null
z.gu().h(0,new E.jV(this))
this.db=z
z=new O.dc()
z.scf(H.c([],y))
z.b=null
z.gu().h(0,new E.jW(this))
this.dx=z
this.siF(H.c([],[O.c6]))
z=this.dy;(z&&C.a).h(z,null)
this.siA(new H.aZ(0,0,[P.h,A.di]))},
gkv:function(){var z=this.z
if(z==null){z=this.cy.ga4().t(0,this.db.ga4())
this.z=z}return z},
eX:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaG(z):a;(z&&C.a).h(z,y)},
eV:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
jT:function(a,b){var z=new E.jS(a,b)
z.fI(a,b)
return z}}},jU:{"^":"n:8;a",
$1:function(a){var z
H.d(a,"$isy")
z=this.a
z.z=null
z.ch=null}},jV:{"^":"n:8;a",
$1:function(a){var z
H.d(a,"$isy")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jW:{"^":"n:8;a",
$1:function(a){var z
H.d(a,"$isy")
z=this.a
z.ch=null
z.cx=null}},km:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0ak:x<,0y,0z,0Q,0ch,0cx,0cy",
sak:function(a){this.x=H.d(a,"$isbw")},
fP:[function(a){H.d(a,"$isy")
this.kD()},function(){return this.fP(null)},"fO","$1","$0","gdk",0,2,0],
gjY:function(){var z,y,x
z=Date.now()
y=C.h.a7(P.et(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.am(z,!1)
return x/y},
dR:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.t()
if(typeof z!=="number")return H.A(z)
x=C.j.cS(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.t()
w=C.j.cS(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.fi(C.y,this.gkC())}},
kD:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.ko(this),{func:1,ret:-1,args:[P.ak]})
C.P.hj(z)
C.P.ik(z,W.hj(y,P.ak))}},"$0","gkC",0,0,3],
kz:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dR()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.am(w,!1)
x.y=P.et(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sp(w.a,0)
w.aO()
w=x.db
C.a.sp(w.a,0)
w.aO()
w=x.dx
C.a.sp(w.a,0)
w.aO()
w=x.dy;(w&&C.a).sp(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.b2(this.e)}x=this.z
if(!(x==null))x.J(null)}catch(v){z=H.a7(v)
y=H.bo(v)
P.e0("Error: "+H.i(z))
P.e0("Stack: "+H.i(y))
throw H.e(z)}},
n:{
kn:function(a,b,c,d,e){var z,y,x,w
z=J.O(a)
if(!!z.$iscY)return E.fh(a,!0,!0,!0,!1)
y=W.cZ(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcG(a).h(0,y)
w=E.fh(y,!0,!0,!0,!1)
w.a=a
return w},
fh:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.km()
y=P.iY(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.q.c0(a,"webgl",y)
x=H.d(x==null?C.q.c0(a,"experimental-webgl",y):x,"$isdh")
if(x==null)H.r(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jT(x,a)
w=new T.kk(x)
w.b=H.ac((x&&C.b).de(x,3379))
w.c=H.ac(C.b.de(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.kQ(a)
v=new X.iP()
v.c=new X.aD(!1,!1,!1)
v.si8(P.c1(null,null,null,P.m))
w.b=v
v=new X.jk(w)
v.f=0
v.r=V.b_()
v.x=V.b_()
v.Q=1
v.ch=1
w.c=v
v=new X.j4(w)
v.r=0
v.x=V.b_()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kr(w)
v.e=0
v.f=V.b_()
v.r=V.b_()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.shk(H.c([],[[P.dm,P.a]]))
v=w.z
u=document
t=W.aw
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.a1(u,"contextmenu",H.l(w.ghO(),s),!1,t))
v=w.z
r=W.a9
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a1(a,"focus",H.l(w.ghR(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a1(a,"blur",H.l(w.ghL(),q),!1,r))
v=w.z
p=W.bz
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a1(u,"keyup",H.l(w.ghT(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a1(u,"keydown",H.l(w.ghS(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousedown",H.l(w.ghW(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mouseup",H.l(w.ghY(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousemove",H.l(w.ghX(),s),!1,t))
p=w.z
o=W.bI;(p&&C.a).h(p,W.a1(a,H.D(W.ik(a)),H.l(w.ghZ(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a1(u,"mousemove",H.l(w.ghP(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a1(u,"mouseup",H.l(w.ghQ(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a1(u,"pointerlockchange",H.l(w.gi_(),q),!1,r))
r=w.z
q=W.bd
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a1(a,"touchstart",H.l(w.gi6(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchend",H.l(w.gi4(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchmove",H.l(w.gi5(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.am(Date.now(),!1)
z.cy=0
z.dR()
return z}}},ko:{"^":"n:32;a",
$1:function(a){var z
H.nr(a)
z=this.a
if(z.ch){z.ch=!1
z.kz()}}}}],["","",,Z,{"^":"",fM:{"^":"a;a,b",$isnD:1,n:{
dG:function(a,b,c){var z
H.k(c,"$isb",[P.m],"$asb")
z=a.createBuffer()
C.b.aB(a,b,z)
C.b.e9(a,b,new Int16Array(H.bh(c)),35044)
C.b.aB(a,b,null)
return new Z.fM(b,z)}}},ed:{"^":"cV;a,b,c,d,e",
cA:function(a){var z,y,x
try{y=a.a
C.b.ee(y,this.e)
C.b.kS(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.a7(x)
y=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(z))
throw H.e(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},lc:{"^":"a;a",$isnE:1},ee:{"^":"a;a,0b,c,d",
shv:function(a){this.b=H.k(a,"$isb",[Z.bY],"$asb")},
aZ:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
cA:function(a){var z,y
z=this.a
C.b.aB(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].cA(a)},
kR:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.ec(x,z[y].e)
C.b.aB(x,this.a.a,null)},
b2:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
w=v.c
u=w.a
C.b.aB(y,u,w.b)
C.b.jM(y,v.a,v.b,5123,0)
C.b.aB(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.h]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.af(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(y,", ")+"\nAttrs:   "+C.a.k(u,", ")},
$isnX:1},bY:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b9(this.c)+"'")+"]"}},be:{"^":"a;a",
gdi:function(a){var z,y
z=this.a
y=(z&$.$get$aQ().a)!==0?3:0
if((z&$.$get$aP().a)!==0)y+=3
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=2
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$bG().a)!==0)y+=3
if((z&$.$get$bH().a)!==0)y+=4
if((z&$.$get$bf().a)!==0)++y
return(z&$.$get$aN().a)!==0?y+4:y},
jl:function(a){var z,y,x
z=$.$get$aQ()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bf()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fL()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.be))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aS().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bG().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bH().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bf().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.k(z,"|")},
n:{
ap:function(a){return new Z.be(a)}}}}],["","",,D,{"^":"",ei:{"^":"a;"},bw:{"^":"a;0a,0b,0c,0d",
sal:function(a){this.a=H.k(a,"$isb",[{func:1,ret:-1,args:[D.y]}],"$asb")},
sb9:function(a){this.b=H.k(a,"$isb",[{func:1,ret:-1,args:[D.y]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.y]}
H.l(b,z)
if(this.a==null)this.sal(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.y]})
z=this.a
z=z==null?null:C.a.Y(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).K(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.Y(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).K(z,b)||y}return y},
J:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.y(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.a0(y,new D.ip(z))
y=this.b
if(!(y==null))C.a.a0(y,new D.iq(z))
z=this.b
if(!(z==null))C.a.sp(z,0)
return!0},
jO:function(){return this.J(null)},
kE:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.J(y)}}},
ai:function(){return this.kE(!0,!1)},
n:{
L:function(){var z=new D.bw()
z.sal(null)
z.sb9(null)
z.c=null
z.d=0
return z}}},ip:{"^":"n:22;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.y]})
z=this.a.a
z.b
a.$1(z)}},iq:{"^":"n:22;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.y]})
z=this.a.a
z.b
a.$1(z)}},y:{"^":"a;a,0b"},co:{"^":"y;c,d,a,0b,$ti"},cp:{"^":"y;c,d,a,0b,$ti"},C:{"^":"y;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",ef:{"^":"a;a,b",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ef))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},eF:{"^":"a;a,b",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eF))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},iP:{"^":"a;0a,0b,0c,0d",
si8:function(a){this.d=H.k(a,"$isf6",[P.m],"$asf6")},
kq:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
km:function(a){this.c=a.b
this.d.K(0,a.a)
return!1}},eJ:{"^":"cw;x,y,c,d,e,a,0b"},j4:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
b7:function(a,b){var z,y,x,w,v,u,t,s
z=new P.am(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.t()
v=b.b
u=this.ch
if(typeof v!=="number")return v.t()
t=new V.ad(y.a+x*w,y.b+v*u)
u=this.a.gaY()
s=new X.bC(a,V.b_(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
d0:function(a,b){this.r=a.a
return!1},
bl:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.fp()
if(typeof z!=="number")return z.c_()
this.r=(z&~y)>>>0
return!1},
bk:function(a,b){var z=this.d
if(z==null)return!1
z.J(this.b7(a,b))
return!0},
kr:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaY()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.t()
t=a.b
s=this.cy
if(typeof t!=="number")return t.t()
w=new X.de(new V.T(v*u,t*s),y,x,new P.am(w,!1),this)
w.b=!0
z.J(w)
return!0},
hV:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.am(Date.now(),!1)
y=this.f
x=new X.eJ(c,a,this.a.gaY(),b,z,this)
x.b=!0
y.J(x)
this.y=z
this.x=V.b_()}},aD:{"^":"a;a,b,c",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aD))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bC:{"^":"cw;x,y,z,Q,ch,c,d,e,a,0b"},jk:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
cc:function(a,b,c){var z,y,x
z=new P.am(Date.now(),!1)
y=this.a.gaY()
x=new X.bC(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
d0:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.J(this.cc(a,b,!0))
return!0},
bl:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.fp()
if(typeof z!=="number")return z.c_()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.J(this.cc(a,b,!0))
return!0},
bk:function(a,b){var z=this.d
if(z==null)return!1
z.J(this.cc(a,b,!1))
return!0},
ks:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaY()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.t()
u=a.b
t=this.ch
if(typeof u!=="number")return u.t()
x=new X.de(new V.T(w*v,u*t),y,b,new P.am(x,!1),this)
x.b=!0
z.J(x)
return!0},
ged:function(){var z=this.b
if(z==null){z=D.L()
this.b=z}return z},
gbZ:function(){var z=this.c
if(z==null){z=D.L()
this.c=z}return z},
geM:function(){var z=this.d
if(z==null){z=D.L()
this.d=z}return z}},de:{"^":"cw;x,c,d,e,a,0b"},cw:{"^":"y;"},fl:{"^":"cw;x,y,z,Q,ch,c,d,e,a,0b"},kr:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
b7:function(a,b){var z,y,x,w
H.k(a,"$isb",[V.ad],"$asb")
z=new P.am(Date.now(),!1)
y=a.length>0?a[0]:V.b_()
x=this.a.gaY()
w=new X.fl(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
kp:function(a){var z
H.k(a,"$isb",[V.ad],"$asb")
z=this.b
if(z==null)return!1
z.J(this.b7(a,!0))
return!0},
kn:function(a){var z
H.k(a,"$isb",[V.ad],"$asb")
z=this.c
if(z==null)return!1
z.J(this.b7(a,!0))
return!0},
ko:function(a){var z
H.k(a,"$isb",[V.ad],"$asb")
z=this.d
if(z==null)return!1
z.J(this.b7(a,!1))
return!0}},kQ:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
shk:function(a){this.z=H.k(a,"$isb",[[P.dm,P.a]],"$asb")},
gaY:function(){var z=this.a
return V.f2(0,0,C.q.gea(z).c,C.q.gea(z).d)},
dB:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eF(z,new X.aD(y,a.altKey,a.shiftKey))},
aU:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aD(y,a.altKey,a.shiftKey)},
cu:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aD(y,a.altKey,a.shiftKey)},
aJ:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.N()
v=z.top
if(typeof x!=="number")return x.N()
return new V.ad(y-w,x-v)},
ba:function(a){return new V.T(a.movementX,a.movementY)},
co:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.ad])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.j.at(u.pageX)
C.j.at(u.pageY)
s=z.left
C.j.at(u.pageX)
C.a.h(y,new V.ad(t-s,C.j.at(u.pageY)-z.top))}return y},
aH:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ef(z,new X.aD(y,a.altKey,a.shiftKey))},
cg:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.N()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.N()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
la:[function(a){this.f=!0},"$1","ghR",4,0,13],
l4:[function(a){this.f=!1},"$1","ghL",4,0,13],
l7:[function(a){H.d(a,"$isaw")
if(this.f&&this.cg(a))a.preventDefault()},"$1","ghO",4,0,4],
lc:[function(a){var z
H.d(a,"$isbz")
if(!this.f)return
z=this.dB(a)
this.b.kq(z)},"$1","ghT",4,0,27],
lb:[function(a){var z
H.d(a,"$isbz")
if(!this.f)return
z=this.dB(a)
this.b.km(z)},"$1","ghS",4,0,27],
le:[function(a){var z,y,x,w
H.d(a,"$isaw")
z=this.a
z.focus()
this.f=!0
this.aU(a)
if(this.x){y=this.aH(a)
x=this.ba(a)
if(this.d.d0(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aH(a)
w=this.aJ(a)
if(this.c.d0(y,w))a.preventDefault()},"$1","ghW",4,0,4],
lg:[function(a){var z,y,x
H.d(a,"$isaw")
this.aU(a)
z=this.aH(a)
if(this.x){y=this.ba(a)
if(this.d.bl(z,y))a.preventDefault()
return}if(this.r)return
x=this.aJ(a)
if(this.c.bl(z,x))a.preventDefault()},"$1","ghY",4,0,4],
l9:[function(a){var z,y,x
H.d(a,"$isaw")
if(!this.cg(a)){this.aU(a)
z=this.aH(a)
if(this.x){y=this.ba(a)
if(this.d.bl(z,y))a.preventDefault()
return}if(this.r)return
x=this.aJ(a)
if(this.c.bl(z,x))a.preventDefault()}},"$1","ghQ",4,0,4],
lf:[function(a){var z,y,x
H.d(a,"$isaw")
this.aU(a)
z=this.aH(a)
if(this.x){y=this.ba(a)
if(this.d.bk(z,y))a.preventDefault()
return}if(this.r)return
x=this.aJ(a)
if(this.c.bk(z,x))a.preventDefault()},"$1","ghX",4,0,4],
l8:[function(a){var z,y,x
H.d(a,"$isaw")
if(!this.cg(a)){this.aU(a)
z=this.aH(a)
if(this.x){y=this.ba(a)
if(this.d.bk(z,y))a.preventDefault()
return}if(this.r)return
x=this.aJ(a)
if(this.c.bk(z,x))a.preventDefault()}},"$1","ghP",4,0,4],
lh:[function(a){var z,y
H.d(a,"$isbI")
this.aU(a)
z=new V.T((a&&C.O).gjH(a),C.O.gjI(a)).B(0,180)
if(this.x){if(this.d.kr(z))a.preventDefault()
return}if(this.r)return
y=this.aJ(a)
if(this.c.ks(z,y))a.preventDefault()},"$1","ghZ",4,0,37],
li:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aH(this.y)
x=this.aJ(this.y)
this.d.hV(y,x,z)}},"$1","gi_",4,0,13],
lo:[function(a){var z
H.d(a,"$isbd")
this.a.focus()
this.f=!0
this.cu(a)
z=this.co(a)
if(this.e.kp(z))a.preventDefault()},"$1","gi6",4,0,12],
lm:[function(a){var z
H.d(a,"$isbd")
this.cu(a)
z=this.co(a)
if(this.e.kn(z))a.preventDefault()},"$1","gi4",4,0,12],
ln:[function(a){var z
H.d(a,"$isbd")
this.cu(a)
z=this.co(a)
if(this.e.ko(z))a.preventDefault()},"$1","gi5",4,0,12]}}],["","",,D,{"^":"",es:{"^":"a;",$isa4:1,$isaK:1},a4:{"^":"a;",$isaK:1},iR:{"^":"Z;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sfS:function(a){this.e=H.k(a,"$isb",[D.es],"$asb")},
sfT:function(a){this.f=H.k(a,"$isb",[D.eY],"$asb")},
sfU:function(a){this.r=H.k(a,"$isb",[D.f8],"$asb")},
sfV:function(a){this.x=H.k(a,"$isb",[D.ff],"$asb")},
sfW:function(a){this.y=H.k(a,"$isb",[D.cz],"$asb")},
sfX:function(a){this.z=H.k(a,"$isb",[D.fg],"$asb")},
gu:function(){var z=this.Q
if(z==null){z=D.L()
this.Q=z}return z},
ae:function(a){var z=this.Q
if(!(z==null))z.J(a)},
hU:[function(a){var z
H.d(a,"$isy")
z=this.ch
if(!(z==null))z.J(a)},function(){return this.hU(null)},"ld","$1","$0","gdN",0,2,0],
lj:[function(a){var z,y,x
H.k(a,"$isp",[D.a4],"$asp")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.fR(x))return!1}return!0},"$1","gi1",4,0,39],
l1:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a4
H.k(b,"$isp",[z],"$asp")
for(y=b.length,x=this.gdN(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.d(b[u],"$isa4")
if(t instanceof D.cz)C.a.h(this.y,t)
s=t.x
if(s==null){s=new D.bw()
s.sal(null)
s.sb9(null)
s.c=null
s.d=0
t.x=s}H.l(x,w)
if(s.a==null)s.sal(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.co(a,b,this,[z])
z.b=!0
this.ae(z)},"$2","ghI",8,0,17],
ll:[function(a,b){var z,y,x,w
z=D.a4
H.k(b,"$isp",[z],"$asp")
for(y=b.gW(b),x=this.gdN();y.D();){w=y.gL()
C.a.K(this.e,w)
w.gu().K(0,x)}z=new D.cp(a,b,this,[z])
z.b=!0
this.ae(z)},"$2","gi3",8,0,17],
fR:function(a){var z=C.a.Y(this.y,a)
return z},
$asp:function(){return[D.a4]},
$asZ:function(){return[D.a4]}},eY:{"^":"a;",$isa4:1,$isaK:1},f8:{"^":"a;",$isa4:1,$isaK:1},ff:{"^":"a;",$isa4:1,$isaK:1},cz:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.L()
this.x=z}return z},
ae:[function(a){var z
H.d(a,"$isy")
z=this.x
if(!(z==null))z.J(a)},function(){return this.ae(null)},"kV","$1","$0","gc6",0,2,0],
$isa4:1,
$isaK:1},fg:{"^":"a;",$isa4:1,$isaK:1}}],["","",,V,{"^":"",
nG:[function(a,b){if(typeof b!=="number")return b.N()
if(typeof a!=="number")return H.A(a)
return Math.abs(b-a)<=1e-9},"$2","ji",8,0,36],
cQ:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.bu(a-b,z)
return(a<0?a+z:a)+b},
G:function(a,b,c){if(a==null)return C.c.ah("null",c)
return C.c.ah(C.j.f2($.o.$2(a,0)?0:a,b),c+b+1)},
bm:function(a,b,c){var z,y,x,w,v,u
H.k(a,"$isb",[P.q],"$asb")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.G(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.q(z,u,C.c.ah(z[u],x))}return z},
e_:function(a,b){return C.j.kM(Math.pow(b,C.a_.cS(Math.log(H.mO(a))/Math.log(b))))},
a8:{"^":"a;a,b,c",
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}},
bt:{"^":"a;a,b,c,d",
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bt))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}},
eN:{"^":"a;a,b,c,d,e,f,r,x,y",
aj:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eN))return!1
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
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.q]
y=V.bm(H.c([this.a,this.d,this.r],z),3,0)
x=V.bm(H.c([this.b,this.e,this.x],z),3,0)
w=V.bm(H.c([this.c,this.f,this.y],z),3,0)
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
ag:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
aj:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
eK:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.o.$2(a2,0))return V.bB()
a3=1/a2
a4=-w
a5=-i
return V.aC((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
t:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.d(a7,"$isag")
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
return V.aC(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
f4:function(a){return new V.E(C.j.t(this.a,a.gap(a))+C.j.t(this.b,a.gaq(a))+C.j.t(this.c,a.gar()),C.j.t(this.e,a.gap(a))+C.j.t(this.f,a.gaq(a))+C.j.t(this.r,a.gar()),C.j.t(this.y,a.gap(a))+C.j.t(this.z,a.gaq(a))+C.j.t(this.Q,a.gar()))},
br:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.a_(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
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
i:function(a){return this.P()},
eC:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
y=V.bm(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bm(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bm(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bm(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
P:function(){return this.eC("",3,0)},
F:function(a){return this.eC(a,3,0)},
n:{
bB:function(){var z=$.cv
if(z==null){z=V.aC(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.cv=z}return z},
aC:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ag(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eR:function(a,b,c){return V.aC(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
dd:function(a,b,c,d){return V.aC(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eO:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aC(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
eP:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aC(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
eQ:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aC(z,-y,0,0,y,z,0,0,0,0,1,0,0,0,0,1)}}},
ad:{"^":"a;a,b",
N:function(a,b){return new V.ad(this.a-b.a,this.b-b.b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"},
n:{
b_:function(){var z=$.eZ
if(z==null){z=new V.ad(0,0)
$.eZ=z}return z}}},
a_:{"^":"a;a,b,c",
G:function(a,b){return new V.a_(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a,b){return new V.a_(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){return new V.a_(this.a*b,this.b*b,this.c*b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"},
n:{
jw:function(){var z=$.bD
if(z==null){z=new V.a_(0,0,0)
$.bD=z}return z}}},
c3:{"^":"a;a,b,c,d",
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c3))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}},
f1:{"^":"a;a,b,c,d",
gaa:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f1))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"},
n:{
f2:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f1(a,b,c,d)}}},
T:{"^":"a;a,b",
k9:[function(a){return Math.sqrt(this.H(this))},"$0","gp",1,0,16],
H:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.t()
if(typeof y!=="number")return H.A(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.t()
if(typeof w!=="number")return H.A(w)
return z*y+x*w},
t:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.t()
y=this.b
if(typeof y!=="number")return y.t()
return new V.T(z*b,y*b)},
B:function(a,b){var z,y
if($.o.$2(b,0)){z=$.fD
if(z==null){z=new V.T(0,0)
$.fD=z}return z}z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
return new V.T(z/b,y/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}},
E:{"^":"a;a,b,c",
k9:[function(a){return Math.sqrt(this.H(this))},"$0","gp",1,0,16],
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cW:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.E(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aL:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.E(z*y-x*w,x*v-u*y,u*w-z*v)},
G:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
V:function(a){return new V.E(-this.a,-this.b,-this.c)},
t:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
B:function(a,b){if($.o.$2(b,0))return V.bF()
return new V.E(this.a/b,this.b/b,this.c/b)},
eL:function(){if(!$.o.$2(0,this.a))return!1
if(!$.o.$2(0,this.b))return!1
if(!$.o.$2(0,this.c))return!1
return!0},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"},
n:{
bF:function(){var z=$.fI
if(z==null){z=new V.E(0,0,0)
$.fI=z}return z}}}}],["","",,U,{"^":"",i1:{"^":"ei;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c8:function(a){var z=V.cQ(a,this.c,this.b)
return z},
gu:function(){var z=this.y
if(z==null){z=D.L()
this.y=z}return z},
M:function(a){var z=this.y
if(!(z==null))z.J(a)},
sdc:function(a,b){},
scY:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c8(z)}z=new D.C("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.M(z)}},
sd_:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c8(z)}z=new D.C("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.M(z)}},
sa2:function(a,b){var z,y
b=this.c8(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.C("location",y,b,this,[P.q])
z.b=!0
this.M(z)}},
scZ:function(a){var z,y,x
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.C("maximumVelocity",y,a,this,[P.q])
z.b=!0
this.M(z)}},
sX:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.o.$2(z,a)){x=this.f
this.f=a
z=new D.C("velocity",x,a,this,[P.q])
z.b=!0
this.M(z)}},
scJ:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.C("dampening",y,a,this,[P.q])
z.b=!0
this.M(z)}},
au:function(a){var z,y,x,w
z=this.f
if($.o.$2(z,0)){z=this.r
z=!$.o.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa2(0,this.d+y*a)
z=this.x
if(!$.o.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sX(y)}},
n:{
d1:function(){var z=new U.i1()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ek:{"^":"ab;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.L()
this.b=z}return z},
av:function(a,b){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ek))return!1
return J.K(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")},
n:{
ck:function(a){var z=new U.ek()
z.a=a
return z}}},ey:{"^":"Z;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.L()
this.e=z}return z},
M:[function(a){var z
H.d(a,"$isy")
z=this.e
if(!(z==null))z.J(a)},function(){return this.M(null)},"am","$1","$0","gaT",0,2,0],
kW:[function(a,b){var z,y,x,w,v,u,t,s
z=U.ab
H.k(b,"$isp",[z],"$asp")
for(y=b.length,x=this.gaT(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){s=t.gu()
s.toString
H.l(x,w)
if(s.a==null)s.sal(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.co(a,b,this,[z])
z.b=!0
this.M(z)},"$2","gfY",8,0,15],
lk:[function(a,b){var z,y,x
z=U.ab
H.k(b,"$isp",[z],"$asp")
for(y=b.gW(b),x=this.gaT();y.D();)y.gL().gu().K(0,x)
z=new D.cp(a,b,this,[z])
z.b=!0
this.M(z)},"$2","gi2",8,0,15],
av:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.U()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.at(z,z.length,0,[H.t(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.av(a,b)
if(w!=null)x=x==null?w:w.t(0,x)}}this.f=x==null?V.bB():x
z=this.e
if(!(z==null))z.ai()}return this.f},
w:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ey))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.K(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asp:function(){return[U.ab]},
$asZ:function(){return[U.ab]},
$isab:1,
n:{
d4:function(a){var z=new U.ey()
z.c5(U.ab)
z.bv(z.gfY(),z.gi2())
z.e=null
z.f=V.bB()
z.r=0
return z}}},ab:{"^":"ei;"},f4:{"^":"ab;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gu:function(){var z=this.y
if(z==null){z=D.L()
this.y=z}return z},
M:function(a){var z=this.y
if(!(z==null))z.J(a)},
sfc:function(a){var z,y
a=V.cQ(a,0,6.283185307179586)
z=this.a
if(!$.o.$2(z,a)){y=this.a
this.a=a
z=new D.C("yaw",y,a,this,[P.q])
z.b=!0
this.M(z)}},
seU:function(a){var z,y
a=V.cQ(a,0,6.283185307179586)
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
z=new D.C("pitch",y,a,this,[P.q])
z.b=!0
this.M(z)}},
seZ:function(a){var z,y
a=V.cQ(a,0,6.283185307179586)
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
z=new D.C("roll",y,a,this,[P.q])
z.b=!0
this.M(z)}},
av:function(a,b){var z,y
z=this.r
y=a.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.sfc(this.a+this.d*a.y)
this.seU(this.b+this.e*a.y)
this.seZ(this.c+this.f*a.y)
this.x=V.eQ(this.c).t(0,V.eP(this.b)).t(0,V.eO(this.a))
z=this.y
if(!(z==null))z.ai()}return this.x},
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.f4))return!1
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
i:function(a){return"Rotater: ["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"], ["+V.G(this.d,3,0)+", "+V.G(this.e,3,0)+", "+V.G(this.f,3,0)+"]"}},kR:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.cy
if(z==null){z=D.L()
this.cy=z}return z},
M:[function(a){var z
H.d(a,"$isy")
z=this.cy
if(!(z==null))z.J(a)},function(){return this.M(null)},"am","$1","$0","gaT",0,2,0],
bd:function(a){if(this.a!=null)return!1
this.a=a
a.c.ged().h(0,this.gci())
this.a.c.geM().h(0,this.gcj())
this.a.c.gbZ().h(0,this.gck())
return!0},
hD:[function(a){H.d(a,"$isy")
if(!J.K(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gci",4,0,2],
hE:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isy"),"$isbC")
if(!this.y)return
if(this.x){z=a.d.N(0,a.y)
z=new V.T(z.a,z.b)
z=z.H(z)
y=this.r
if(typeof y!=="number")return H.A(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.N(0,a.y)
z=new V.T(y.a,y.b).t(0,2).B(0,z.gaa())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.t()
x=this.e
if(typeof x!=="number")return H.A(x)
y.sX(z*10*x)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=new V.T(x.a,x.b).t(0,2).B(0,z.gaa())
x=this.b
v=w.a
if(typeof v!=="number")return v.V()
u=this.e
if(typeof u!=="number")return H.A(u)
t=this.z
if(typeof t!=="number")return H.A(t)
x.sa2(0,-v*u+t)
this.b.sX(0)
y=y.N(0,a.z)
this.Q=new V.T(y.a,y.b).t(0,2).B(0,z.gaa())}this.am()},"$1","gcj",4,0,2],
hF:[function(a){var z,y,x
H.d(a,"$isy")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.H(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.t()
x=this.e
if(typeof x!=="number")return H.A(x)
z.sX(y*10*x)
this.am()}},"$1","gck",4,0,2],
av:function(a,b){var z,y,x
z=this.ch
y=a.e
if(typeof z!=="number")return z.U()
if(z<y){this.ch=y
x=a.y
this.b.au(x)
this.cx=V.eQ(this.b.d)}return this.cx},
$isab:1},kS:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.L()
this.fx=z}return z},
M:[function(a){var z
H.d(a,"$isy")
z=this.fx
if(!(z==null))z.J(a)},function(){return this.M(null)},"am","$1","$0","gaT",0,2,0],
bd:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.ged().h(0,this.gci())
this.a.c.geM().h(0,this.gcj())
this.a.c.gbZ().h(0,this.gck())
z=this.a.d
y=z.f
if(y==null){y=D.L()
z.f=y
z=y}else z=y
z.h(0,this.ghB())
z=this.a.d
y=z.d
if(y==null){y=D.L()
z.d=y
z=y}else z=y
z.h(0,this.ghC())
z=this.a.e
y=z.b
if(y==null){y=D.L()
z.b=y
z=y}else z=y
z.h(0,this.giL())
z=this.a.e
y=z.d
if(y==null){y=D.L()
z.d=y
z=y}else z=y
z.h(0,this.giK())
z=this.a.e
y=z.c
if(y==null){y=D.L()
z.c=y
z=y}else z=y
z.h(0,this.giJ())
return!0},
az:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.V()
z=-z}if(this.r){if(typeof y!=="number")return y.V()
y=-y}return new V.T(z,y)},
hD:[function(a){a=H.j(H.d(a,"$isy"),"$isbC")
if(!J.K(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gci",4,0,2],
hE:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isy"),"$isbC")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.T(z.a,z.b)
z=z.H(z)
y=this.Q
if(typeof y!=="number")return H.A(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.az(new V.T(y.a,y.b).t(0,2).B(0,z.gaa()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.V()
x=this.y
if(typeof x!=="number")return H.A(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.V()
y=this.x
if(typeof y!=="number")return H.A(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.az(new V.T(x.a,x.b).t(0,2).B(0,z.gaa()))
x=this.c
v=w.a
if(typeof v!=="number")return v.V()
u=this.y
if(typeof u!=="number")return H.A(u)
t=this.cy
if(typeof t!=="number")return H.A(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.V()
v=this.x
if(typeof v!=="number")return H.A(v)
x=this.db
if(typeof x!=="number")return H.A(x)
t.sa2(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.N(0,a.z)
this.dx=this.az(new V.T(y.a,y.b).t(0,2).B(0,z.gaa()))}this.am()},"$1","gcj",4,0,2],
hF:[function(a){var z,y,x
H.d(a,"$isy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.H(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.V()
x=this.y
if(typeof x!=="number")return H.A(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.V()
z=this.x
if(typeof z!=="number")return H.A(z)
x.sX(-y*10*z)
this.am()}},"$1","gck",4,0,2],
kZ:[function(a){if(H.j(H.d(a,"$isy"),"$iseJ").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ghB",4,0,2],
l_:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isy"),"$isbC")
if(!J.K(this.d,a.x.b))return
z=a.c
y=a.d
x=y.N(0,a.y)
w=this.az(new V.T(x.a,x.b).t(0,2).B(0,z.gaa()))
x=this.c
v=w.a
if(typeof v!=="number")return v.V()
u=this.y
if(typeof u!=="number")return H.A(u)
t=this.cy
if(typeof t!=="number")return H.A(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.V()
v=this.x
if(typeof v!=="number")return H.A(v)
x=this.db
if(typeof x!=="number")return H.A(x)
t.sa2(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.N(0,a.z)
this.dx=this.az(new V.T(y.a,y.b).t(0,2).B(0,z.gaa()))
this.am()},"$1","ghC",4,0,2],
ls:[function(a){H.d(a,"$isy")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","giL",4,0,2],
lr:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isy"),"$isfl")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.T(z.a,z.b)
z=z.H(z)
y=this.Q
if(typeof y!=="number")return H.A(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.az(new V.T(y.a,y.b).t(0,2).B(0,z.gaa()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.V()
x=this.y
if(typeof x!=="number")return H.A(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.V()
y=this.x
if(typeof y!=="number")return H.A(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.az(new V.T(x.a,x.b).t(0,2).B(0,z.gaa()))
x=this.c
v=w.a
if(typeof v!=="number")return v.V()
u=this.y
if(typeof u!=="number")return H.A(u)
t=this.cy
if(typeof t!=="number")return H.A(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.V()
v=this.x
if(typeof v!=="number")return H.A(v)
x=this.db
if(typeof x!=="number")return H.A(x)
t.sa2(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.N(0,a.z)
this.dx=this.az(new V.T(y.a,y.b).t(0,2).B(0,z.gaa()))}this.am()},"$1","giK",4,0,2],
lq:[function(a){var z,y,x
H.d(a,"$isy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.H(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.V()
x=this.y
if(typeof x!=="number")return H.A(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.V()
z=this.x
if(typeof z!=="number")return H.A(z)
x.sX(-y*10*z)
this.am()}},"$1","giJ",4,0,2],
av:function(a,b){var z,y,x
z=this.dy
y=a.e
if(typeof z!=="number")return z.U()
if(z<y){this.dy=y
x=a.y
this.c.au(x)
this.b.au(x)
this.fr=V.eO(this.b.d).t(0,V.eP(this.c.d))}return this.fr},
$isab:1},kT:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.L()
this.r=z}return z},
M:function(a){var z=this.r
if(!(z==null))z.J(a)},
bd:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.L()
z.e=y
z=y}else z=y
y=this.ghG()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.L()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
l0:[function(a){var z,y,x,w
H.d(a,"$isy")
if(!J.K(this.b,this.a.b.c))return
H.j(a,"$isde")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.t()
w=z+y*x
if(z!==w){this.d=w
z=new D.C("zoom",z,w,this,[P.q])
z.b=!0
this.M(z)}},"$1","ghG",4,0,2],
av:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.dd(x,x,x,1)}return this.f},
$isab:1}}],["","",,M,{"^":"",im:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
shc:function(a,b){this.d=H.k(b,"$isZ",[E.au],"$asZ")},
aP:[function(a){var z
H.d(a,"$isy")
z=this.x
if(!(z==null))z.J(a)},function(){return this.aP(null)},"kX","$1","$0","gay",0,2,0],
l5:[function(a,b){var z,y,x,w,v,u,t,s
z=E.au
H.k(b,"$isp",[z],"$asp")
for(y=b.length,x=this.gay(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gak()==null){s=new D.bw()
s.sal(null)
s.sb9(null)
s.c=null
s.d=0
t.sak(s)}s=t.gak()
s.toString
H.l(x,w)
if(s.a==null)s.sal(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.co(a,b,this,[z])
z.b=!0
this.aP(z)},"$2","ghM",8,0,9],
l6:[function(a,b){var z,y,x
z=E.au
H.k(b,"$isp",[z],"$asp")
for(y=b.gW(b),x=this.gay();y.D();)y.gL().gu().K(0,x)
z=new D.cp(a,b,this,[z])
z.b=!0
this.aP(z)},"$2","ghN",8,0,9],
sbo:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gu().K(0,this.gay())
y=this.c
this.c=a
if(a!=null)a.gu().h(0,this.gay())
z=new D.C("technique",y,this.c,this,[O.c6])
z.b=!0
this.aP(z)}},
gu:function(){var z=this.x
if(z==null){z=D.L()
this.x=z}return z},
b2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
a.eX(this.c)
z=this.b
z.toString
y=a.a
C.b.jo(y,36160,null)
C.b.cK(y,2884)
C.b.cK(y,2929)
C.b.jJ(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.A(x)
t=C.j.at(u*x)
u=v.b
if(typeof w!=="number")return H.A(w)
s=C.j.at(u*w)
u=C.j.at(v.c*x)
a.c=u
v=C.j.at(v.d*w)
a.d=v
C.b.kT(y,t,s,u,v)
C.b.ju(y,z.c)
z=z.a
C.b.jt(y,z.a,z.b,z.c,z.d)
C.b.js(y,16640)
z=this.a
y=a.c
v=a.d
u=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(u*0.5)
n=V.aC(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.eW(n)
y=$.eX
if(y==null){y=V.jw()
v=$.fG
if(v==null){v=new V.E(0,1,0)
$.fG=v}u=$.fE
if(u==null){u=new V.E(0,0,-1)
$.fE=u}m=u.B(0,Math.sqrt(u.H(u)))
v=v.aL(m)
l=v.B(0,Math.sqrt(v.H(v)))
k=m.aL(l)
j=new V.E(y.a,y.b,y.c)
i=l.V(0).H(j)
h=k.V(0).H(j)
g=m.V(0).H(j)
y=V.aC(l.a,k.a,m.a,i,l.b,k.b,m.b,h,l.c,k.c,m.c,g,0,0,0,1)
$.eX=y
f=y}else f=y
y=z.b
if(y!=null){e=y.av(a,z)
if(e!=null)f=e.t(0,f)}a.db.eW(f)
z=this.c
if(z!=null)z.au(a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.D();)z.d.au(a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.D();)z.d.b2(a)
this.a.toString
a.cy.d1()
a.db.d1()
this.b.toString
a.eV()},
$isnS:1}}],["","",,A,{"^":"",e8:{"^":"a;a,b,c"},hS:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
jP:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
C.b.ee(w.a,w.c)}},
jL:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
C.b.ec(w.a,w.c)}}},ja:{"^":"di;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aE,0as,0bG,0ef,0bH,0bI,0eg,0eh,0bJ,0bK,0ei,0ej,0bL,0bM,0ek,0el,0bN,0em,0en,0bO,0eo,0ep,0bP,0bQ,0bR,0eq,0er,0bS,0bT,0es,0eu,0bU,0ev,0cL,0ew,0cM,0ex,0cN,0ey,0cO,0ez,0cP,0eA,0cQ,a,b,0c,0d,0e,0f,0r,0x,0y",
sh7:function(a){this.r1=H.k(a,"$isb",[A.aG],"$asb")},
shi:function(a){this.cL=H.k(a,"$isb",[A.dw],"$asb")},
si7:function(a){this.cM=H.k(a,"$isb",[A.dy],"$asb")},
siC:function(a){this.cN=H.k(a,"$isb",[A.dz],"$asb")},
siN:function(a){this.cO=H.k(a,"$isb",[A.dA],"$asb")},
siO:function(a){this.cP=H.k(a,"$isb",[A.dB],"$asb")},
siP:function(a){this.cQ=H.k(a,"$isb",[A.dC],"$asb")},
fH:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.aj("")
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
a2.iT(z)
a2.j_(z)
a2.iU(z)
a2.j7(z)
a2.j8(z)
a2.j1(z)
a2.jc(z)
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
z=new P.aj("")
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
x.iX(z)
x.iS(z)
x.iV(z)
x.iY(z)
x.j5(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.j3(z)
x.j4(z)}x.j0(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
if(q!==C.d){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.f){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.e){r+="uniform samplerCube alphaTxt;\n"
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
p=H.c([],[P.h])
if(x.b!==C.d)C.a.h(p,"ambient()")
if(x.c!==C.d)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.d)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.d)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.k(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.iW(z)
x.j2(z)
x.j6(z)
x.j9(z)
x.ja(z)
x.jb(z)
x.iZ(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.h])
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
n="vec4("+C.a.k(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.dC(s,35633)
this.f=this.dC(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
C.b.e3(x,v,this.e)
C.b.e3(x,this.r,this.f)
C.b.ka(x,this.r)
if(!H.dR(C.b.c1(x,this.r,35714))){m=C.b.fk(x,this.r)
C.b.jF(x,this.r)
H.r(P.u("Failed to link shader: "+H.i(m)))}this.ix()
this.iz()
this.Q=this.x.l(0,"posAttr")
this.cx=this.x.l(0,"normAttr")
this.ch=this.x.l(0,"binmAttr")
this.cy=this.x.l(0,"txt2DAttr")
this.db=this.x.l(0,"txtCubeAttr")
this.dx=this.x.l(0,"bendAttr")
if(a2.fr)this.id=H.j(this.y.m(0,"invViewMat"),"$isaG")
if(y)this.dy=H.j(this.y.m(0,"objMat"),"$isaG")
if(w)this.fr=H.j(this.y.m(0,"viewObjMat"),"$isaG")
this.fy=H.j(this.y.m(0,"projViewObjMat"),"$isaG")
if(a2.x2)this.k1=H.j(this.y.m(0,"txt2DMat"),"$isdx")
if(a2.y1)this.k2=H.j(this.y.m(0,"txtCubeMat"),"$isaG")
if(a2.y2)this.k3=H.j(this.y.m(0,"colorMat"),"$isaG")
this.sh7(H.c([],[A.aG]))
y=a2.aE
if(y>0){this.k4=H.d(this.y.m(0,"bendMatCount"),"$isM")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.l(0,v)
if(k==null)H.r(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(k,"$isaG"))}}y=a2.a
if(y!==C.d){this.r2=H.j(this.y.m(0,"emissionClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.f:this.rx=H.j(this.y.m(0,"emissionTxt"),"$isan")
this.x1=H.j(this.y.m(0,"nullEmissionTxt"),"$isM")
break
case C.e:this.ry=H.j(this.y.m(0,"emissionTxt"),"$isao")
this.x1=H.j(this.y.m(0,"nullEmissionTxt"),"$isM")
break}}y=a2.b
if(y!==C.d){this.x2=H.j(this.y.m(0,"ambientClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.f:this.y1=H.j(this.y.m(0,"ambientTxt"),"$isan")
this.aE=H.j(this.y.m(0,"nullAmbientTxt"),"$isM")
break
case C.e:this.y2=H.j(this.y.m(0,"ambientTxt"),"$isao")
this.aE=H.j(this.y.m(0,"nullAmbientTxt"),"$isM")
break}}y=a2.c
if(y!==C.d){this.as=H.j(this.y.m(0,"diffuseClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.f:this.bG=H.j(this.y.m(0,"diffuseTxt"),"$isan")
this.bH=H.j(this.y.m(0,"nullDiffuseTxt"),"$isM")
break
case C.e:this.ef=H.j(this.y.m(0,"diffuseTxt"),"$isao")
this.bH=H.j(this.y.m(0,"nullDiffuseTxt"),"$isM")
break}}y=a2.d
if(y!==C.d){this.bI=H.j(this.y.m(0,"invDiffuseClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.f:this.eg=H.j(this.y.m(0,"invDiffuseTxt"),"$isan")
this.bJ=H.j(this.y.m(0,"nullInvDiffuseTxt"),"$isM")
break
case C.e:this.eh=H.j(this.y.m(0,"invDiffuseTxt"),"$isao")
this.bJ=H.j(this.y.m(0,"nullInvDiffuseTxt"),"$isM")
break}}y=a2.e
if(y!==C.d){this.bM=H.j(this.y.m(0,"shininess"),"$isY")
this.bK=H.j(this.y.m(0,"specularClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.f:this.ei=H.j(this.y.m(0,"specularTxt"),"$isan")
this.bL=H.j(this.y.m(0,"nullSpecularTxt"),"$isM")
break
case C.e:this.ej=H.j(this.y.m(0,"specularTxt"),"$isao")
this.bL=H.j(this.y.m(0,"nullSpecularTxt"),"$isM")
break}}switch(a2.f){case C.d:break
case C.i:break
case C.f:this.ek=H.j(this.y.m(0,"bumpTxt"),"$isan")
this.bN=H.j(this.y.m(0,"nullBumpTxt"),"$isM")
break
case C.e:this.el=H.j(this.y.m(0,"bumpTxt"),"$isao")
this.bN=H.j(this.y.m(0,"nullBumpTxt"),"$isM")
break}if(a2.dy){this.em=H.j(this.y.m(0,"envSampler"),"$isao")
this.en=H.j(this.y.m(0,"nullEnvTxt"),"$isM")
y=a2.r
if(y!==C.d){this.bO=H.j(this.y.m(0,"reflectClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.f:this.eo=H.j(this.y.m(0,"reflectTxt"),"$isan")
this.bP=H.j(this.y.m(0,"nullReflectTxt"),"$isM")
break
case C.e:this.ep=H.j(this.y.m(0,"reflectTxt"),"$isao")
this.bP=H.j(this.y.m(0,"nullReflectTxt"),"$isM")
break}}y=a2.x
if(y!==C.d){this.bQ=H.j(this.y.m(0,"refraction"),"$isY")
this.bR=H.j(this.y.m(0,"refractClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.f:this.eq=H.j(this.y.m(0,"refractTxt"),"$isan")
this.bS=H.j(this.y.m(0,"nullRefractTxt"),"$isM")
break
case C.e:this.er=H.j(this.y.m(0,"refractTxt"),"$isao")
this.bS=H.j(this.y.m(0,"nullRefractTxt"),"$isM")
break}}}y=a2.y
if(y!==C.d){this.bT=H.j(this.y.m(0,"alpha"),"$isY")
switch(y){case C.d:break
case C.i:break
case C.f:this.es=H.j(this.y.m(0,"alphaTxt"),"$isan")
this.bU=H.j(this.y.m(0,"nullAlphaTxt"),"$isM")
break
case C.e:this.eu=H.j(this.y.m(0,"alphaTxt"),"$isao")
this.bU=H.j(this.y.m(0,"nullAlphaTxt"),"$isM")
break}}this.shi(H.c([],[A.dw]))
this.si7(H.c([],[A.dy]))
this.siC(H.c([],[A.dz]))
this.siN(H.c([],[A.dA]))
this.siO(H.c([],[A.dB]))
this.siP(H.c([],[A.dC]))
if(a2.k2){y=a2.z
if(y>0){this.ev=H.d(this.y.m(0,"dirLightCount"),"$isM")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isJ")
x=this.y
w="dirLights["+l+"].color"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isJ")
x=this.cL;(x&&C.a).h(x,new A.dw(l,k,j))}}y=a2.Q
if(y>0){this.ew=H.d(this.y.m(0,"pntLightCount"),"$isM")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isJ")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isJ")
x=this.y
w="pntLights["+l+"].color"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isJ")
x=this.y
w="pntLights["+l+"].att0"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isY")
x=this.y
w="pntLights["+l+"].att1"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isY")
x=this.y
w="pntLights["+l+"].att2"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isY")
x=this.cM;(x&&C.a).h(x,new A.dy(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.ex=H.d(this.y.m(0,"spotLightCount"),"$isM")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isJ")
x=this.y
w="spotLights["+l+"].objDir"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isJ")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isJ")
x=this.y
w="spotLights["+l+"].color"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isJ")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isY")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isY")
x=this.y
w="spotLights["+l+"].att0"
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isY")
x=this.y
w="spotLights["+l+"].att1"
d=x.l(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isY")
x=this.y
w="spotLights["+l+"].att2"
c=x.l(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isY")
x=this.cN;(x&&C.a).h(x,new A.dz(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.ey=H.d(this.y.m(0,"txtDirLightCount"),"$isM")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isJ")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isJ")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isJ")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isJ")
x=this.y
w="txtDirLights["+l+"].color"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isJ")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isM")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isan")
x=this.cO;(x&&C.a).h(x,new A.dA(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.ez=H.d(this.y.m(0,"txtPntLightCount"),"$isM")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isJ")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isJ")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isdx")
x=this.y
w="txtPntLights["+l+"].color"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isJ")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isM")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isY")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isY")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.l(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isY")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.l(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isao")
x=this.cP;(x&&C.a).h(x,new A.dB(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.eA=H.d(this.y.m(0,"txtSpotLightCount"),"$isM")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isJ")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isJ")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isJ")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isJ")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isJ")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isM")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isJ")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.l(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isY")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.l(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isY")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.l(0,w)
if(b==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isY")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.l(0,w)
if(a==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isY")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.l(0,w)
if(a0==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isY")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.l(0,w)
if(a1==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a1,"$isan")
x=this.cQ;(x&&C.a).h(x,new A.dC(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
an:function(a,b,c){C.b.T(b.a,b.d,1)},
af:function(a,b,c){if(c==null||c.d<6)C.b.T(b.a,b.d,1)
else{a.fv(c)
C.b.T(b.a,b.d,0)}},
n:{
jb:function(a,b){var z,y
z=a.as
y=new A.ja(b,z)
y.fK(b,z)
y.fH(a,b)
return y}}},jf:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aE,as,bG",
iT:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aE+"];\n"
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
j_:function(a){var z
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
iU:function(a){var z
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
j7:function(a){var z,y
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
j8:function(a){var z,y
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
j1:function(a){var z
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
jc:function(a){var z
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
aI:function(a,b,c){var z
if(b===C.d)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.c.ax(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
iX:function(a){var z,y
z=this.a
if(z===C.d)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aI(a,z,"emission")
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
case C.e:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
iS:function(a){var z,y
z=this.b
if(z===C.d)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aI(a,z,"ambient")
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
case C.e:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
iV:function(a){var z,y
z=this.c
if(z===C.d)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aI(a,z,"diffuse")
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
iY:function(a){var z,y
z=this.d
if(z===C.d)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aI(a,z,"invDiffuse")
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
j5:function(a){var z,y
z=this.e
if(z===C.d)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aI(a,z,"specular")
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
j0:function(a){var z,y
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
j3:function(a){var z,y
z=this.r
if(z===C.d)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aI(a,z,"reflect")
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
j4:function(a){var z,y
z=this.x
if(z===C.d)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aI(a,z,"refract")
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
iW:function(a){var z,y
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
j2:function(a){var z,y
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
j6:function(a){var z,y
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
j9:function(a){var z,y,x
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
ja:function(a){var z,y,x
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
jb:function(a){var z,y,x
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
iZ:function(a){var z
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
i:function(a){return this.as}},dw:{"^":"a;a,b,c"},dA:{"^":"a;a,b,c,d,e,f,r,x"},dy:{"^":"a;a,b,c,d,e,f,r"},dB:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dz:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dC:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},di:{"^":"cV;",
fK:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dC:function(a,b){var z,y,x
z=this.a
y=C.b.jD(z,b)
C.b.fw(z,y,a)
C.b.jw(z,y)
if(!H.dR(C.b.fn(z,y,35713))){x=C.b.fm(z,y)
C.b.jG(z,y)
throw H.e(P.u("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
ix:function(){var z,y,x,w,v,u
z=H.c([],[A.e8])
y=this.a
x=H.ac(C.b.c1(y,this.r,35721))
if(typeof x!=="number")return H.A(x)
w=0
for(;w<x;++w){v=C.b.ff(y,this.r,w)
u=C.b.fh(y,this.r,v.name)
C.a.h(z,new A.e8(y,v.name,u))}this.x=new A.hS(z)},
iz:function(){var z,y,x,w,v,u
z=H.c([],[A.ae])
y=this.a
x=H.ac(C.b.c1(y,this.r,35718))
if(typeof x!=="number")return H.A(x)
w=0
for(;w<x;++w){v=C.b.fg(y,this.r,w)
u=C.b.fo(y,this.r,v.name)
C.a.h(z,this.jE(v.type,v.size,v.name,u))}this.y=new A.kC(z)},
aR:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.M(z,y,b,c)
else return A.dv(z,y,b,a,c)},
hf:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.an(z,y,b,c)
else return A.dv(z,y,b,a,c)},
hg:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ao(z,y,b,c)
else return A.dv(z,y,b,a,c)},
bB:function(a,b){return new P.fQ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
jE:function(a,b,c,d){switch(a){case 5120:return this.aR(b,c,d)
case 5121:return this.aR(b,c,d)
case 5122:return this.aR(b,c,d)
case 5123:return this.aR(b,c,d)
case 5124:return this.aR(b,c,d)
case 5125:return this.aR(b,c,d)
case 5126:return new A.Y(this.a,this.r,c,d)
case 35664:return new A.kx(this.a,this.r,c,d)
case 35665:return new A.J(this.a,this.r,c,d)
case 35666:return new A.kA(this.a,this.r,c,d)
case 35667:return new A.ky(this.a,this.r,c,d)
case 35668:return new A.kz(this.a,this.r,c,d)
case 35669:return new A.kB(this.a,this.r,c,d)
case 35674:return new A.kE(this.a,this.r,c,d)
case 35675:return new A.dx(this.a,this.r,c,d)
case 35676:return new A.aG(this.a,this.r,c,d)
case 35678:return this.hf(b,c,d)
case 35680:return this.hg(b,c,d)
case 35670:throw H.e(this.bB("BOOL",c))
case 35671:throw H.e(this.bB("BOOL_VEC2",c))
case 35672:throw H.e(this.bB("BOOL_VEC3",c))
case 35673:throw H.e(this.bB("BOOL_VEC4",c))
default:throw H.e(P.u("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},cj:{"^":"a;a,b",
i:function(a){return this.b}},ae:{"^":"a;"},kC:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.l(0,b)
if(z==null)throw H.e(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.P()},
jX:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
P:function(){return this.jX("\n")}},M:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},ky:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},kz:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},kB:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},kw:{"^":"ae;0e,0f,a,b,c,d",
siQ:function(a){this.e=H.k(a,"$isb",[P.m],"$asb")},
i:function(a){return"Uniform1iv: "+H.i(this.c)},
n:{
dv:function(a,b,c,d,e){var z=new A.kw(a,b,c,e)
z.f=d
z.siQ(P.j0(d,0,!1,P.m))
return z}}},Y:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},kx:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},J:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},kA:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},kE:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},dx:{"^":"ae;a,b,c,d",
aw:function(a){var z=new Float32Array(H.bh(H.k(a,"$isb",[P.q],"$asb")))
C.b.f5(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},aG:{"^":"ae;a,b,c,d",
aw:function(a){var z=new Float32Array(H.bh(H.k(a,"$isb",[P.q],"$asb")))
C.b.f6(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},an:{"^":"ae;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},ao:{"^":"ae;a,b,c,d",
fv:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)C.b.T(y,x,0)
else C.b.T(y,x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
dU:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.ah,P.q,P.q]})
z=F.dj()
F.bM(z,b,c,d,a,1,0,0,1)
F.bM(z,b,c,d,a,0,1,0,3)
F.bM(z,b,c,d,a,0,0,1,2)
F.bM(z,b,c,d,a,-1,0,0,0)
F.bM(z,b,c,d,a,0,-1,0,0)
F.bM(z,b,c,d,a,0,0,-1,3)
z.aC()
return z},
cH:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bM:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.ah,P.q,P.q]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.E(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.E(t+h,s+f,r+g)
z.b=q
p=new V.E(t-h,s-f,r-g)
z.c=p
o=new V.E(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cH(y)
k=F.cH(z.b)
j=F.e2(d,e,new F.mx(z,F.cH(z.c),F.cH(z.d),k,l,c),b)
if(j!=null)a.bj(j)},
hp:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.q,args:[P.q]})
if(f<3)return
z=F.dj()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.ah])
v=z.a
u=new V.E(0,0,y)
u=u.B(0,Math.sqrt(u.H(u)))
C.a.h(w,v.jg(new V.c3(a,-1,-1,-1),new V.bt(1,1,1,1),new V.a_(0,0,d),new V.E(0,0,y),new V.ad(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.A(p)
o=new V.E(r,q,y).B(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.c8(new V.c3(a,-1,-1,-1),null,new V.bt(n,l,m,1),new V.a_(r*p,q*p,d),new V.E(0,0,y),new V.ad(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.je(w)
return z},
hn:function(a,b,c,d,e,f){return F.mU(!0,c,d,new F.mT(a,f),e)},
mU:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.e2(c,e,new F.mW(d),null)
if(z==null)return
z.aC()
z.cz()
if(b)z.bj(F.hp(3,!1,!1,1,new F.mX(d),e))
z.bj(F.hp(1,!0,!1,-1,new F.mY(d),e))
return z},
hz:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.nx()
y=F.dU(a,null,new F.ny(z,c),d)
y.cz()
return y},
hC:function(a,b,c,d){return F.ho(c,a,d,b,new F.nA())},
nf:function(a,b,c,d,e,f){return F.ho(d,a,e,b,new F.ng(f,c))},
ho:function(a,b,c,d,e){var z=F.e2(a,b,new F.mV(H.l(e,{func:1,ret:V.a_,args:[P.q]}),d,b,c),null)
if(z==null)return
z.aC()
z.cz()
return z},
e2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.ah,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.dj()
y=H.c([],[F.ah])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.c8(null,null,new V.bt(u,0,0,1),null,null,new V.ad(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cI(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.c8(null,null,new V.bt(o,n,m,1),null,null,new V.ad(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cI(d))}}z.d.jf(a+1,b+1,y)
return z},
mx:{"^":"n:7;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cW(z.b,b).cW(z.d.cW(z.c,b),c)
a.sa2(0,new V.a_(y.a,y.b,y.c))
a.sf0(y.B(0,Math.sqrt(y.H(y))))
z=1-b
x=1-c
a.se7(new V.c3(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mT:{"^":"n:21;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mW:{"^":"n:7;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.A(v)
y=-y*v
u=x*v
a.sa2(0,new V.a_(y,u,w))
u=new V.E(y,u,w)
a.sf0(u.B(0,Math.sqrt(u.H(u))))
a.se7(new V.c3(1-c,2+c,-1,-1))}},
mX:{"^":"n:30;a",
$1:function(a){return this.a.$2(a,1)}},
mY:{"^":"n:30;a",
$1:function(a){return this.a.$2(1-a,0)}},
nx:{"^":"n:21;",
$2:function(a,b){return 0}},
ny:{"^":"n:7;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.A(z)
y=a.f
x=new V.E(y.a,y.b,y.c)
z=x.B(0,Math.sqrt(x.H(x))).t(0,this.b+z)
a.sa2(0,new V.a_(z.a,z.b,z.c))}},
nA:{"^":"n:20;",
$1:function(a){return new V.a_(Math.cos(a),Math.sin(a),0)}},
ng:{"^":"n:20;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.a_(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mV:{"^":"n:7;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.e3(y.$1(z),x)
x=J.e3(y.$1(z+3.141592653589793/this.c),x).N(0,w)
x=new V.E(x.a,x.b,x.c)
v=x.B(0,Math.sqrt(x.H(x)))
y=$.fF
if(y==null){y=new V.E(1,0,0)
$.fF=y
u=y}else u=y
if(!J.K(v,u)){y=$.fH
if(y==null){y=new V.E(0,0,1)
$.fH=y
u=y}else u=y}y=v.aL(u)
t=y.B(0,Math.sqrt(y.H(y)))
y=t.aL(v)
u=y.B(0,Math.sqrt(y.H(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.t(0,y*x)
x=t.t(0,r*x)
a.sa2(0,w.G(0,new V.a_(y.a-x.a,y.b-x.b,y.c-x.c)))}},
aa:{"^":"a;0a,0b,0c,0d,0e",
bf:function(){if(!this.gbg()){C.a.K(this.a.a.d.b,this)
this.a.a.a3()}this.cq()
this.cr()
this.ig()},
cv:function(a){this.a=a
C.a.h(a.d.b,this)},
cw:function(a){this.b=a
C.a.h(a.d.c,this)},
iw:function(a){this.c=a
C.a.h(a.d.d,this)},
cq:function(){var z=this.a
if(z!=null){C.a.K(z.d.b,this)
this.a=null}},
cr:function(){var z=this.b
if(z!=null){C.a.K(z.d.c,this)
this.b=null}},
ig:function(){var z=this.c
if(z!=null){C.a.K(z.d.d,this)
this.c=null}},
gbg:function(){return this.a==null||this.b==null||this.c==null},
h6:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bF()
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.eL())return
return v.B(0,Math.sqrt(v.H(v)))},
hb:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.N(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.B(0,Math.sqrt(z.H(z)))
z=w.N(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.aL(z.B(0,Math.sqrt(z.H(z))))
return z.B(0,Math.sqrt(z.H(z)))},
cF:function(){if(this.d!=null)return!0
var z=this.h6()
if(z==null){z=this.hb()
if(z==null)return!1}this.d=z
this.a.a.a3()
return!0},
h5:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bF()
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.eL())return
return v.B(0,Math.sqrt(v.H(v)))},
ha:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.o.$2(n,0)){z=r.N(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.B(0,Math.sqrt(z.H(z)))
if(o.a-p.a<0)m=m.V(0)}else{l=(z-q.b)/n
z=r.N(0,u).t(0,l).G(0,u).N(0,x)
z=new V.E(z.a,z.b,z.c)
m=z.B(0,Math.sqrt(z.H(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.V(0)}z=this.d
if(z!=null){k=z.B(0,Math.sqrt(z.H(z)))
z=k.aL(m)
z=z.B(0,Math.sqrt(z.H(z))).aL(k)
m=z.B(0,Math.sqrt(z.H(z)))}return m},
cD:function(){if(this.e!=null)return!0
var z=this.h5()
if(z==null){z=this.ha()
if(z==null)return!1}this.e=z
this.a.a.a3()
return!0},
gjv:function(a){if(J.K(this.a,this.b))return!0
if(J.K(this.b,this.c))return!0
if(J.K(this.c,this.a))return!0
return!1},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var z,y
if(this.gbg())return a+"disposed"
z=a+C.c.ah(J.af(this.a.e),0)+", "+C.c.ah(J.af(this.b.e),0)+", "+C.c.ah(J.af(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
P:function(){return this.F("")},
n:{
bx:function(a,b,c){var z,y,x
z=new F.aa()
y=a.a
if(y==null)H.r(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.u("May not create a face with vertices attached to different shapes."))
z.cv(a)
z.cw(b)
z.iw(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a3()
return z}}},
ir:{"^":"a;"},
ka:{"^":"ir;",
bi:function(a,b,c){var z,y
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
bA:{"^":"a;0a,0b",
bf:function(){if(!this.gbg()){C.a.K(this.a.a.c.b,this)
this.a.a.a3()}this.cq()
this.cr()},
cv:function(a){this.a=a
C.a.h(a.c.b,this)},
cw:function(a){this.b=a
C.a.h(a.c.c,this)},
cq:function(){var z=this.a
if(z!=null){C.a.K(z.c.b,this)
this.a=null}},
cr:function(){var z=this.b
if(z!=null){C.a.K(z.c.c,this)
this.b=null}},
gbg:function(){return this.a==null||this.b==null},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){if(this.gbg())return a+"disposed"
return a+C.c.ah(J.af(this.a.e),0)+", "+C.c.ah(J.af(this.b.e),0)},
P:function(){return this.F("")},
n:{
iS:function(a,b){var z,y,x
z=new F.bA()
y=a.a
if(y==null)H.r(P.u("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.u("May not create a line with vertices attached to different shapes."))
z.cv(a)
z.cw(b)
C.a.h(z.a.a.c.b,z)
z.a.a.a3()
return z}}},
iT:{"^":"a;"},
kv:{"^":"iT;",
bi:function(a,b,c){var z,y
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
return z==y.e}else{z=b.a
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
if(z==y.e){z=b.b
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
return z==y.e}else return!1}}},
c2:{"^":"a;0a",
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.c.ah(J.af(z.e),0)},
P:function(){return this.F("")}},
f7:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.L()
this.e=z}return z},
bj:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.C()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){v=z[w]
this.a.h(0,v.jy())}this.a.C()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.c2()
if(r.a==null)H.r(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.J(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.iS(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
m=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,m)
F.bx(p,o,m)}z=this.e
if(!(z==null))z.ai()},
aC:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aC()||!1
if(!this.a.aC())y=!1
z=this.e
if(!(z==null))z.ai()
return y},
kd:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.t(z,0)])
for(z=[F.ah];y.length!==0;){x=C.a.gjT(y)
C.a.kx(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.z)(y),++u){t=y[u]
if(t!=null&&a.bi(0,x,t)){C.a.h(w,t)
C.a.K(y,t)}}if(w.length>1)b.bj(w)}}this.a.C()
this.c.d4()
this.d.d4()
this.b.ky()
this.c.d5(new F.kv())
this.d.d5(new F.ka())
z=this.e
if(!(z==null))z.ai()},
ji:function(a){this.kd(new F.l6(),new F.jq())},
cz:function(){return this.ji(null)},
cR:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.d
this.d.cR()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.f(z,y)
x=z[y]
z=x.r
if(z!=null)x.seN(new V.E(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.E(w,v,z).B(0,Math.sqrt(w*w+v*v+z*z))
if(!J.K(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.J(null)}}}}z=this.e
if(!(z==null))z.ai()},
jq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aQ()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$bG().a)!==0)++w
if((x&$.$get$bH().a)!==0)++w
if((x&$.$get$bf().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
v=b.gdi(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.ed])
for(r=0,q=0;q<w;++q){p=b.jl(q)
o=p.gdi(p)
C.a.q(s,q,new Z.ed(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].kb(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.q(t,l,m[k]);++l}}r+=o}H.k(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.aB(y,34962,j)
C.b.e9(y,34962,new Float32Array(H.bh(t)),35044)
C.b.aB(y,34962,null)
i=new Z.ee(new Z.fM(34962,j),s,b)
i.shv(H.c([],[Z.bY]))
if(this.b.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)}f=Z.dG(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bY(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)}f=Z.dG(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bY(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.C()
C.a.h(h,g.e)}f=Z.dG(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bY(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.F("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.F("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.F("   "))}return C.a.k(z,"\n")},
ab:function(a){var z=this.e
if(!(z==null))z.J(a)},
a3:function(){return this.ab(null)},
$isnU:1,
n:{
dj:function(){var z,y
z=new F.f7()
y=new F.l1(z)
y.b=!1
y.siR(H.c([],[F.ah]))
z.a=y
y=new F.k4(z)
y.scn(H.c([],[F.c2]))
z.b=y
y=new F.k3(z)
y.shx(H.c([],[F.bA]))
z.c=y
y=new F.k2(z)
y.shl(H.c([],[F.aa]))
z.d=y
z.e=null
return z}}},
k2:{"^":"a;a,0b",
shl:function(a){this.b=H.k(a,"$isb",[F.aa],"$asb")},
je:function(a){var z,y,x,w,v,u,t
H.k(a,"$isb",[F.ah],"$asb")
z=H.c([],[F.aa])
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
C.a.h(z,F.bx(x,u,t))}}return z},
jf:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,"$isb",[F.ah],"$asb")
z=H.c([],[F.aa])
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
C.a.h(z,F.bx(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bx(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bx(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bx(p,m,q))}t=!t}v=!v}return z},
gp:function(a){return this.b.length},
d5:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.l(0,v)
for(t=v-1;t>=0;--t){s=w.d.l(0,t)
if(a.bi(0,u,s)){u.bf()
break}}}}},
d4:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.gjv(x)
if(y)x.bf()}},
aC:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cF())x=!1
return x},
cE:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cD())x=!1
return x},
cR:function(){var z,y,x,w,v,u
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
v=w.b
w.b=w.c
w.c=v
u=w.d
if(u!=null)w.d=new V.E(-u.a,-u.b,-u.c)
u=w.e
if(u!=null)w.e=new V.E(-u.a,-u.b,-u.c)
u=w.a.a.e
if(!(u==null))u.J(null)}},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
P:function(){return this.F("")}},
k3:{"^":"a;a,0b",
shx:function(a){this.b=H.k(a,"$isb",[F.bA],"$asb")},
gp:function(a){return this.b.length},
d5:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.l(0,v)
for(t=v-1;t>=0;--t){s=w.c.l(0,t)
if(a.bi(0,u,s)){u.bf()
break}}}}},
d4:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.K(x.a,x.b)
if(y)x.bf()}},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].F(a+(""+x+". ")))}return C.a.k(z,"\n")},
P:function(){return this.F("")}},
k4:{"^":"a;a,0b",
scn:function(a){this.b=H.k(a,"$isb",[F.c2],"$asb")},
gp:function(a){return this.b.length},
ky:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
x=y.a
if(x.b.b.length>1){if(x!=null){C.a.K(x.a.b.b,y)
x=y.a.a.e
if(!(x==null))x.J(null)}x=y.a
if(x!=null){C.a.K(x.b.b,y)
y.a=null}}}},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
P:function(){return this.F("")}},
ah:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cI:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.c8(this.cx,x,u,z,y,w,v,a,t)},
jy:function(){return this.cI(null)},
sa2:function(a,b){var z
if(!J.K(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a3()}},
seN:function(a){var z
a=a==null?null:a.B(0,Math.sqrt(a.H(a)))
if(!J.K(this.r,a)){this.r=a
z=this.a
if(z!=null)z.a3()}},
sf0:function(a){var z
if(!J.K(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a3()}},
se7:function(a){var z
if(!J.K(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a3()}},
kb:function(a){var z,y
if(a.w(0,$.$get$aQ())){z=this.f
y=[P.q]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.w(0,$.$get$aP())){z=this.r
y=[P.q]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.w(0,$.$get$aO())){z=this.x
y=[P.q]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.w(0,$.$get$aR())){z=this.y
y=[P.q]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.w(0,$.$get$aS())){z=this.z
y=[P.q]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.w(0,$.$get$bG())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.w(0,$.$get$bH())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.w(0,$.$get$bf()))return H.c([this.ch],[P.q])
else if(a.w(0,$.$get$aN())){z=this.cx
y=[P.q]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.q])},
cF:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bF()
this.d.a0(0,new F.lb(z))
z=z.a
this.r=z.B(0,Math.sqrt(z.H(z)))
z=this.a
if(z!=null){z.a3()
z=this.a.e
if(!(z==null))z.ai()}return!0},
cD:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bF()
this.d.a0(0,new F.la(z))
z=z.a
this.x=z.B(0,Math.sqrt(z.H(z)))
z=this.a
if(z!=null){z.a3()
z=this.a.e
if(!(z==null))z.ai()}return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.c.ah(J.af(this.e),0))
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
C.a.h(z,V.G(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.k(z,", ")
return a+"{"+x+"}"},
P:function(){return this.F("")},
n:{
c8:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ah()
y=new F.l9(z)
y.scn(H.c([],[F.c2]))
z.b=y
y=new F.l5(z)
x=[F.bA]
y.shy(H.c([],x))
y.shz(H.c([],x))
z.c=y
y=new F.l2(z)
x=[F.aa]
y.shm(H.c([],x))
y.shn(H.c([],x))
y.sho(H.c([],x))
z.d=y
h=$.$get$fJ()
z.e=0
y=$.$get$aQ()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aP().a)!==0?e:null
z.x=(x&$.$get$aO().a)!==0?b:null
z.y=(x&$.$get$aR().a)!==0?f:null
z.z=(x&$.$get$aS().a)!==0?g:null
z.Q=(x&$.$get$fK().a)!==0?c:null
z.ch=(x&$.$get$bf().a)!==0?i:0
z.cx=(x&$.$get$aN().a)!==0?a:null
return z}}},
lb:{"^":"n:5;a",
$1:function(a){var z,y
H.d(a,"$isaa")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
la:{"^":"n:5;a",
$1:function(a){var z,y
H.d(a,"$isaa")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
l1:{"^":"a;a,0b,0c",
siR:function(a){this.c=H.k(a,"$isb",[F.ah],"$asb")},
C:function(){var z,y,x,w
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
y.a3()
return!0},
jh:function(a,b,c,d,e,f,g,h,i){var z=F.c8(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
jg:function(a,b,c,d,e,f){return this.jh(a,null,b,c,d,e,f,null,0)},
gp:function(a){return this.c.length},
aC:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cF()
return!0},
cE:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cD()
return!0},
jr:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.B(0,Math.sqrt(u*u+t*t+s*s))
if(!J.K(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.J(null)}}}}return!0},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
this.C()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
P:function(){return this.F("")}},
l2:{"^":"a;a,0b,0c,0d",
shm:function(a){this.b=H.k(a,"$isb",[F.aa],"$asb")},
shn:function(a){this.c=H.k(a,"$isb",[F.aa],"$asb")},
sho:function(a){this.d=H.k(a,"$isb",[F.aa],"$asb")},
gp:function(a){return this.b.length+this.c.length+this.d.length},
l:function(a,b){var z,y,x
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
a0:function(a,b){H.l(b,{func:1,ret:-1,args:[F.aa]})
C.a.a0(this.b,b)
C.a.a0(this.c,new F.l3(this,b))
C.a.a0(this.d,new F.l4(this,b))},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
P:function(){return this.F("")}},
l3:{"^":"n:5;a,b",
$1:function(a){H.d(a,"$isaa")
if(!J.K(a.a,this.a))this.b.$1(a)}},
l4:{"^":"n:5;a,b",
$1:function(a){var z
H.d(a,"$isaa")
z=this.a
if(!J.K(a.a,z)&&!J.K(a.b,z))this.b.$1(a)}},
l5:{"^":"a;a,0b,0c",
shy:function(a){this.b=H.k(a,"$isb",[F.bA],"$asb")},
shz:function(a){this.c=H.k(a,"$isb",[F.bA],"$asb")},
gp:function(a){return this.b.length+this.c.length},
l:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
P:function(){return this.F("")}},
l7:{"^":"a;"},
l6:{"^":"l7;",
bi:function(a,b,c){return J.K(b.f,c.f)}},
l8:{"^":"a;"},
jq:{"^":"l8;",
bj:function(a){var z,y,x,w
H.k(a,"$isb",[F.ah],"$asb")
z=V.bF()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.E(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.B(0,Math.sqrt(z.H(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x)a[x].seN(z)
return}},
l9:{"^":"a;a,0b",
scn:function(a){this.b=H.k(a,"$isb",[F.c2],"$asb")},
gp:function(a){return this.b.length},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
P:function(){return this.F("")}}}],["","",,O,{"^":"",jc:{"^":"c6;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sh8:function(a){this.e=H.k(a,"$isZ",[V.ag],"$asZ")},
gu:function(){var z=this.dy
if(z==null){z=D.L()
this.dy=z}return z},
a5:[function(a){var z
H.d(a,"$isy")
z=this.dy
if(!(z==null))z.J(a)},function(){return this.a5(null)},"h_","$1","$0","gbx",0,2,0],
im:[function(a){H.d(a,"$isy")
this.a=null
this.a5(a)},function(){return this.im(null)},"lp","$1","$0","gil",0,2,0],
l2:[function(a,b){var z=V.ag
z=new D.co(a,H.k(b,"$isp",[z],"$asp"),this,[z])
z.b=!0
this.a5(z)},"$2","ghJ",8,0,28],
l3:[function(a,b){var z=V.ag
z=new D.cp(a,H.k(b,"$isp",[z],"$asp"),this,[z])
z.b=!0
this.a5(z)},"$2","ghK",8,0,28],
dz:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.a7(z.e.length+3,4)*4
x=C.h.a7(z.f.length+3,4)*4
w=C.h.a7(z.r.length+3,4)*4
v=C.h.a7(z.x.length+3,4)*4
u=C.h.a7(z.y.length+3,4)*4
t=C.h.a7(z.z.length+3,4)*4
s=C.h.a7(this.e.a.length+3,4)*4
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
i=m!==C.d||l!==C.d
h=r!==C.d||q!==C.d||p!==C.d||o!==C.d
g=o===C.d
f=!g||i
e=q!==C.d||p!==C.d||!g||n!==C.d||i
g=n===C.d
d=!g
c=z===C.f||r===C.f||q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f
b=z===C.e||r===C.e||q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e
a=x+u+v+w+t>0
a0=s>0
a1=e||!g||f
a2=$.$get$aQ()
if(e){g=$.$get$aP()
a2=new Z.be(a2.a|g.a)}if(d){g=$.$get$aO()
a2=new Z.be(a2.a|g.a)}if(c){g=$.$get$aR()
a2=new Z.be(a2.a|g.a)}if(b){g=$.$get$aS()
a2=new Z.be(a2.a|g.a)}if(a0){g=$.$get$aN()
a2=new Z.be(a2.a|g.a)}return new A.jf(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
a_:function(a,b){H.k(a,"$isb",[T.dp],"$asb")
if(b!=null)if(!C.a.Y(a,b)){b.a=a.length
C.a.h(a,b)}},
au:function(a){var z,y,x
for(z=this.dx.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.D();){y=z.d
y.toString
x=$.cv
if(x==null){x=new V.ag(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.cv=x}y.a=x
x=y.b
if(x!=null)y.a=x.av(a,y)}},
kA:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=this.a
if(z==null){z=this.dz()
y=a.fr.l(0,z.as)
if(y==null){y=A.jb(z,a.a)
x=y.b
if(x.length===0)H.r(P.u("May not cache a shader with no name."))
if(a.fr.bD(x))H.r(P.u('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.q(0,x,y)}this.a=y
a0.e=null
z=y}w=z.z
v=w.bG
z=a0.e
if(!(z instanceof Z.ee)){a0.e=null
z=null}if(z==null||!z.d.w(0,v)){z=w.r1
if(z)a0.d.aC()
u=w.r2
if(u){t=a0.d
s=t.e
if(!(s==null))++s.d
t.d.cE()
t.a.cE()
t=t.e
if(!(t==null))t.ai()}t=w.ry
if(t){s=a0.d
r=s.e
if(!(r==null))++r.d
s.a.jr()
s=s.e
if(!(s==null))s.ai()}q=a0.d.jq(new Z.lc(a.a),v)
q.aZ($.$get$aQ()).e=this.a.Q.c
if(z)q.aZ($.$get$aP()).e=this.a.cx.c
if(u)q.aZ($.$get$aO()).e=this.a.ch.c
if(w.rx)q.aZ($.$get$aR()).e=this.a.cy.c
if(t)q.aZ($.$get$aS()).e=this.a.db.c
if(w.x1)q.aZ($.$get$aN()).e=this.a.dx.c
a0.e=q}z=T.dp
p=H.c([],[z])
u=this.a
t=a.a
C.b.f8(t,u.r)
u.x.jP()
if(w.fx){u=this.a
s=a.dx.ga4()
u=u.dy
u.toString
u.aw(s.aj(0,!0))}if(w.fy){u=this.a
s=a.cx
if(s==null){s=a.db.ga4().t(0,a.dx.ga4())
a.cx=s}u=u.fr
u.toString
u.aw(s.aj(0,!0))}u=this.a
s=a.ch
if(s==null){s=a.gkv().t(0,a.dx.ga4())
a.ch=s}u=u.fy
u.toString
u.aw(s.aj(0,!0))
if(w.x2){u=this.a
s=this.b
u=u.k1
u.toString
u.aw(C.r.aj(s,!0))}if(w.y1){u=this.a
s=this.c
u=u.k2
u.toString
u.aw(C.r.aj(s,!0))}if(w.y2){u=this.a
s=this.d
u=u.k3
u.toString
u.aw(C.r.aj(s,!0))}if(w.aE>0){o=this.e.a.length
u=this.a.k4
C.b.T(u.a,u.d,o)
for(u=[P.q],n=0;n<o;++n){s=this.a
r=this.e.a
if(n>=r.length)return H.f(r,n)
r=r[n]
s.toString
H.d(r,"$isag")
s=s.r1
if(n>=s.length)return H.f(s,n)
s=s[n]
m=new Float32Array(H.bh(H.k(r.aj(0,!0),"$isb",u,"$asb")))
C.b.f6(s.a,s.d,!1,m)}}switch(w.a){case C.d:break
case C.i:u=this.a
s=this.f.f
u=u.r2
u.toString
r=s.a
l=s.b
s=s.c
C.b.A(u.a,u.d,r,l,s)
break
case C.f:this.a_(p,this.f.d)
u=this.a
s=this.f.d
u.an(u.rx,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
s.toString
r=u.a
l=u.b
u=u.c
C.b.A(s.a,s.d,r,l,u)
break
case C.e:this.a_(p,this.f.e)
u=this.a
s=this.f.e
u.af(u.ry,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
s.toString
r=u.a
l=u.b
u=u.c
C.b.A(s.a,s.d,r,l,u)
break}if(w.k2){switch(w.b){case C.d:break
case C.i:u=this.a
s=this.r.f
u=u.x2
u.toString
r=s.a
l=s.b
s=s.c
C.b.A(u.a,u.d,r,l,s)
break
case C.f:this.a_(p,this.r.d)
u=this.a
s=this.r.d
u.an(u.y1,u.aE,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.b.A(s.a,s.d,r,l,u)
break
case C.e:this.a_(p,this.r.e)
u=this.a
s=this.r.e
u.af(u.y2,u.aE,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.b.A(s.a,s.d,r,l,u)
break}switch(w.c){case C.d:break
case C.i:u=this.a
s=this.x.f
u=u.as
u.toString
r=s.a
l=s.b
s=s.c
C.b.A(u.a,u.d,r,l,s)
break
case C.f:this.a_(p,this.x.d)
u=this.a
s=this.x.d
u.an(u.bG,u.bH,s)
s=this.a
u=this.x.f
s=s.as
s.toString
r=u.a
l=u.b
u=u.c
C.b.A(s.a,s.d,r,l,u)
break
case C.e:this.a_(p,this.x.e)
u=this.a
s=this.x.e
u.af(u.ef,u.bH,s)
s=this.a
u=this.x.f
s=s.as
s.toString
r=u.a
l=u.b
u=u.c
C.b.A(s.a,s.d,r,l,u)
break}switch(w.d){case C.d:break
case C.i:u=this.a
s=this.y.f
u=u.bI
u.toString
r=s.a
l=s.b
s=s.c
C.b.A(u.a,u.d,r,l,s)
break
case C.f:this.a_(p,this.y.d)
u=this.a
s=this.y.d
u.an(u.eg,u.bJ,s)
s=this.a
u=this.y.f
s=s.bI
s.toString
r=u.a
l=u.b
u=u.c
C.b.A(s.a,s.d,r,l,u)
break
case C.e:this.a_(p,this.y.e)
u=this.a
s=this.y.e
u.af(u.eh,u.bJ,s)
s=this.a
u=this.y.f
s=s.bI
s.toString
r=u.a
l=u.b
u=u.c
C.b.A(s.a,s.d,r,l,u)
break}switch(w.e){case C.d:break
case C.i:u=this.a
s=this.z.f
u=u.bK
u.toString
r=s.a
l=s.b
s=s.c
C.b.A(u.a,u.d,r,l,s)
s=this.a
l=this.z.ch
s=s.bM
C.b.S(s.a,s.d,l)
break
case C.f:this.a_(p,this.z.d)
u=this.a
s=this.z.d
u.an(u.ei,u.bL,s)
s=this.a
u=this.z.f
s=s.bK
s.toString
r=u.a
l=u.b
u=u.c
C.b.A(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bM
C.b.S(u.a,u.d,l)
break
case C.e:this.a_(p,this.z.e)
u=this.a
s=this.z.e
u.af(u.ej,u.bL,s)
s=this.a
u=this.z.f
s=s.bK
s.toString
r=u.a
l=u.b
u=u.c
C.b.A(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bM
C.b.S(u.a,u.d,l)
break}if(w.z>0){o=this.dx.e.length
u=this.a.ev
C.b.T(u.a,u.d,o)
k=a.db.ga4()
for(u=this.dx.e,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
r=this.a.cL
if(j>=r.length)return H.f(r,j)
g=r[j]
r=k.f4(h.gbF(h))
l=r.a
f=r.b
e=r.c
e=r.B(0,Math.sqrt(l*l+f*f+e*e))
f=g.b
l=e.a
r=e.b
e=e.c
C.b.A(f.a,f.d,l,r,e)
e=h.gaD(h)
r=g.c
l=e.gbX()
f=e.gbt()
e=e.gbC()
C.b.A(r.a,r.d,l,f,e);++j}}if(w.Q>0){o=this.dx.f.length
u=this.a.ew
C.b.T(u.a,u.d,o)
k=a.db.ga4()
for(u=this.dx.f,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
r=this.a.cM
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.gbm(h)
l=g.b
f=r.gfa(r)
e=r.gfb(r)
r=r.gfd(r)
C.b.A(l.a,l.d,f,e,r)
r=k.br(h.gbm(h))
e=g.c
C.b.A(e.a,e.d,r.a,r.b,r.c)
r=h.gaD(h)
e=g.d
f=r.gbX()
l=r.gbt()
r=r.gbC()
C.b.A(e.a,e.d,f,l,r)
r=h.ge4()
l=g.e
C.b.S(l.a,l.d,r)
r=h.ge5()
l=g.f
C.b.S(l.a,l.d,r)
r=h.ge6()
l=g.r
C.b.S(l.a,l.d,r);++j}}if(w.ch>0){o=this.dx.r.length
u=this.a.ex
C.b.T(u.a,u.d,o)
k=a.db.ga4()
for(u=this.dx.r,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
r=this.a.cN
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.gbm(h)
l=g.b
f=r.gfa(r)
e=r.gfb(r)
r=r.gfd(r)
C.b.A(l.a,l.d,f,e,r)
r=h.gbF(h).lx()
e=g.c
f=r.gap(r)
l=r.gaq(r)
r=r.gar()
C.b.A(e.a,e.d,f,l,r)
r=k.br(h.gbm(h))
l=g.d
C.b.A(l.a,l.d,r.a,r.b,r.c)
r=h.gaD(h)
l=g.e
f=r.gbX()
e=r.gbt()
r=r.gbC()
C.b.A(l.a,l.d,f,e,r)
r=h.glv()
e=g.f
C.b.S(e.a,e.d,r)
r=h.glt()
e=g.r
C.b.S(e.a,e.d,r)
r=h.ge4()
e=g.x
C.b.S(e.a,e.d,r)
r=h.ge5()
e=g.y
C.b.S(e.a,e.d,r)
r=h.ge6()
e=g.z
C.b.S(e.a,e.d,r);++j}}if(w.cx>0){o=this.dx.x.length
u=this.a.ey
C.b.T(u.a,u.d,o)
k=a.db.ga4()
for(u=this.dx.x,s=u.length,r=[z],j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
l=this.a.cO
if(j>=l.length)return H.f(l,j)
g=l[j]
l=h.gd8()
H.k(p,"$isb",r,"$asb")
if(!C.a.Y(p,l)){l.shu(p.length)
C.a.h(p,l)}l=h.gbF(h)
f=g.d
e=l.gap(l)
d=l.gaq(l)
l=l.gar()
C.b.A(f.a,f.d,e,d,l)
l=h.gbZ()
d=g.b
e=l.gap(l)
f=l.gaq(l)
l=l.gar()
C.b.A(d.a,d.d,e,f,l)
l=h.gbn(h)
f=g.c
e=l.gap(l)
d=l.gaq(l)
l=l.gar()
C.b.A(f.a,f.d,e,d,l)
l=k.f4(h.gbF(h))
d=l.a
e=l.b
f=l.c
f=l.B(0,Math.sqrt(d*d+e*e+f*f))
e=g.e
d=f.a
l=f.b
f=f.c
C.b.A(e.a,e.d,d,l,f)
f=h.gaD(h)
l=g.f
d=f.gbX()
e=f.gbt()
f=f.gbC()
C.b.A(l.a,l.d,d,e,f)
f=h.gd8()
l=f.gcX(f)
if(!l){l=g.x
C.b.T(l.a,l.d,1)}else{l=g.r
e=f.gcX(f)
d=l.a
l=l.d
if(!e)C.b.T(d,l,0)
else C.b.T(d,l,f.gk_(f))
l=g.x
C.b.T(l.a,l.d,0)}++j}}if(w.cy>0){o=this.dx.y.length
u=this.a.ez
C.b.T(u.a,u.d,o)
k=a.db.ga4()
for(u=this.dx.y,s=u.length,r=[P.q],l=[z],j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
f=this.a.cP
if(j>=f.length)return H.f(f,j)
g=f[j]
f=h.d
H.k(p,"$isb",l,"$asb")
if(f!=null)if(!C.a.Y(p,f)){f.a=p.length
C.a.h(p,f)}c=k.t(0,h.a)
f=h.a
e=$.bD
if(e==null){e=new V.a_(0,0,0)
$.bD=e}e=f.br(e)
f=g.b
C.b.A(f.a,f.d,e.a,e.b,e.c)
f=$.bD
if(f==null){f=new V.a_(0,0,0)
$.bD=f}f=c.br(f)
e=g.c
C.b.A(e.a,e.d,f.a,f.b,f.c)
f=c.eK()
e=g.d
m=new Float32Array(H.bh(H.k(new V.eN(f.a,f.b,f.c,f.e,f.f,f.r,f.y,f.z,f.Q).aj(0,!0),"$isb",r,"$asb")))
C.b.f5(e.a,e.d,!1,m)
e=h.c
f=g.e
C.b.A(f.a,f.d,e.a,e.b,e.c)
e=h.d
f=e!=null
if(!f||e.d<6){f=g.r
C.b.T(f.a,f.d,1)}else{d=g.f
f=!f||e.d<6
b=d.a
d=d.d
if(f)C.b.T(b,d,0)
else C.b.T(b,d,e.a)
f=g.r
C.b.T(f.a,f.d,0)}f=h.e
e=g.x
C.b.S(e.a,e.d,f)
f=h.f
e=g.y
C.b.S(e.a,e.d,f)
f=h.r
e=g.z
C.b.S(e.a,e.d,f);++j}}if(w.db>0){o=this.dx.z.length
u=this.a.eA
C.b.T(u.a,u.d,o)
k=a.db.ga4()
for(u=this.dx.z,s=u.length,z=[z],j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
r=this.a.cQ
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.gd8()
H.k(p,"$isb",z,"$asb")
if(!C.a.Y(p,r)){r.shu(p.length)
C.a.h(p,r)}r=h.gbm(h)
l=g.b
f=r.gfa(r)
e=r.gfb(r)
r=r.gfd(r)
C.b.A(l.a,l.d,f,e,r)
r=h.gbF(h)
e=g.c
f=r.gap(r)
l=r.gaq(r)
r=r.gar()
C.b.A(e.a,e.d,f,l,r)
r=h.gbZ()
l=g.d
f=r.gap(r)
e=r.gaq(r)
r=r.gar()
C.b.A(l.a,l.d,f,e,r)
r=h.gbn(h)
e=g.e
f=r.gap(r)
l=r.gaq(r)
r=r.gar()
C.b.A(e.a,e.d,f,l,r)
r=k.br(h.gbm(h))
l=g.f
C.b.A(l.a,l.d,r.a,r.b,r.c)
r=h.gd8()
l=r.gcX(r)
if(!l){r=g.x
C.b.T(r.a,r.d,1)}else{l=g.r
f=r.gcX(r)
e=l.a
l=l.d
if(!f)C.b.T(e,l,0)
else C.b.T(e,l,r.gk_(r))
r=g.x
C.b.T(r.a,r.d,0)}r=h.gaD(h)
l=g.y
f=r.gbX()
e=r.gbt()
r=r.gbC()
C.b.A(l.a,l.d,f,e,r)
r=h.glE()
e=g.z
C.b.S(e.a,e.d,r)
r=h.glF()
e=g.Q
C.b.S(e.a,e.d,r)
r=h.ge4()
e=g.ch
C.b.S(e.a,e.d,r)
r=h.ge5()
e=g.cx
C.b.S(e.a,e.d,r)
r=h.ge6()
e=g.cy
C.b.S(e.a,e.d,r);++j}}}switch(w.f){case C.d:break
case C.i:break
case C.f:this.a_(p,this.Q.d)
z=this.a
u=this.Q.d
z.an(z.ek,z.bN,u)
break
case C.e:this.a_(p,this.Q.e)
z=this.a
u=this.Q.e
z.af(z.el,z.bN,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db.ga4().eK()
a.Q=u}z=z.id
z.toString
z.aw(u.aj(0,!0))}if(w.dy){this.a_(p,this.ch)
z=this.a
u=this.ch
z.af(z.em,z.en,u)
switch(w.r){case C.d:break
case C.i:z=this.a
u=this.cx.f
z=z.bO
z.toString
s=u.a
r=u.b
u=u.c
C.b.A(z.a,z.d,s,r,u)
break
case C.f:this.a_(p,this.cx.d)
z=this.a
u=this.cx.d
z.an(z.eo,z.bP,u)
u=this.a
z=this.cx.f
u=u.bO
u.toString
s=z.a
r=z.b
z=z.c
C.b.A(u.a,u.d,s,r,z)
break
case C.e:this.a_(p,this.cx.e)
z=this.a
u=this.cx.e
z.af(z.ep,z.bP,u)
u=this.a
z=this.cx.f
u=u.bO
u.toString
s=z.a
r=z.b
z=z.c
C.b.A(u.a,u.d,s,r,z)
break}switch(w.x){case C.d:break
case C.i:z=this.a
u=this.cy.f
z=z.bR
z.toString
s=u.a
r=u.b
u=u.c
C.b.A(z.a,z.d,s,r,u)
u=this.a
r=this.cy.ch
u=u.bQ
C.b.S(u.a,u.d,r)
break
case C.f:this.a_(p,this.cy.d)
z=this.a
u=this.cy.d
z.an(z.eq,z.bS,u)
u=this.a
z=this.cy.f
u=u.bR
u.toString
s=z.a
r=z.b
z=z.c
C.b.A(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bQ
C.b.S(z.a,z.d,r)
break
case C.e:this.a_(p,this.cy.e)
z=this.a
u=this.cy.e
z.af(z.er,z.bS,u)
u=this.a
z=this.cy.f
u=u.bR
u.toString
s=z.a
r=z.b
z=z.c
C.b.A(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bQ
C.b.S(z.a,z.d,r)
break}}z=w.y
u=z!==C.d
if(u){switch(z){case C.d:break
case C.i:z=this.a
s=this.db.f
z=z.bT
C.b.S(z.a,z.d,s)
break
case C.f:this.a_(p,this.db.d)
z=this.a
s=this.db.d
z.an(z.es,z.bU,s)
s=this.a
z=this.db.f
s=s.bT
C.b.S(s.a,s.d,z)
break
case C.e:this.a_(p,this.db.e)
z=this.a
s=this.db.e
z.af(z.eu,z.bU,s)
s=this.a
z=this.db.f
s=s.bT
C.b.S(s.a,s.d,z)
break}C.b.cK(t,3042)
C.b.jp(t,770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d>=6){z.c=!0
C.b.dZ(t,33984+z.a)
C.b.aX(t,34067,z.b)}}z=a0.e
z.cA(a)
z.b2(a)
z.kR(a)
if(u)C.b.jK(t,3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
C.b.dZ(t,33984+z.a)
C.b.aX(t,34067,null)}}z=this.a
z.toString
C.b.f8(t,null)
z.x.jL()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dz().as},
n:{
eM:function(){var z,y,x
z=new O.jc()
z.sh8(O.d0(V.ag))
z.e.bv(z.ghJ(),z.ghK())
y=new O.b6(z,"emission")
y.c=C.d
y.f=new V.a8(0,0,0)
z.f=y
y=new O.b6(z,"ambient")
y.c=C.d
y.f=new V.a8(0,0,0)
z.r=y
y=new O.b6(z,"diffuse")
y.c=C.d
y.f=new V.a8(0,0,0)
z.x=y
y=new O.b6(z,"invDiffuse")
y.c=C.d
y.f=new V.a8(0,0,0)
z.y=y
y=new O.jh(z,"specular")
y.c=C.d
y.f=new V.a8(0,0,0)
y.ch=100
z.z=y
y=new O.je(z,"bump")
y.c=C.d
z.Q=y
z.ch=null
y=new O.b6(z,"reflect")
y.c=C.d
y.f=new V.a8(0,0,0)
z.cx=y
y=new O.jg(z,"refract")
y.c=C.d
y.f=new V.a8(0,0,0)
y.ch=1
z.cy=y
y=new O.jd(z,"alpha")
y.c=C.d
y.f=1
z.db=y
y=new D.iR()
y.c5(D.a4)
y.sfS(H.c([],[D.es]))
y.sfT(H.c([],[D.eY]))
y.sfU(H.c([],[D.f8]))
y.sfV(H.c([],[D.ff]))
y.sfW(H.c([],[D.cz]))
y.sfX(H.c([],[D.fg]))
y.Q=null
y.ch=null
y.dh(y.ghI(),y.gi1(),y.gi3())
z.dx=y
x=y.Q
if(x==null){x=D.L()
y.Q=x
y=x}else y=x
y.h(0,z.gil())
y=z.dx
x=y.ch
if(x==null){x=D.L()
y.ch=x
y=x}else y=x
y.h(0,z.gbx())
z.dy=null
return z}}},jd:{"^":"db;0f,a,b,0c,0d,0e"},db:{"^":"a;",
a5:[function(a){this.a.a5(H.d(a,"$isy"))},function(){return this.a5(null)},"h_","$1","$0","gbx",0,2,0],
b8:["fE",function(){}],
iu:function(a){},
iv:function(a){var z,y
z=this.e
if(z==null?a!=null:z!==a){if(z!=null)z.gu().K(0,this.gbx())
y=this.e
this.e=a
if(a!=null)a.gu().h(0,this.gbx())
z=new D.C(this.b+".textureCube",y,this.e,this,[T.dq])
z.b=!0
this.a.a5(z)}}},je:{"^":"db;a,b,0c,0d,0e"},b6:{"^":"db;0f,a,b,0c,0d,0e",
dS:function(a){var z,y
if(!J.K(this.f,a)){z=this.f
this.f=a
y=new D.C(this.b+".color",z,a,this,[V.a8])
y.b=!0
this.a.a5(y)}},
b8:["c4",function(){this.fE()
this.dS(new V.a8(1,1,1))}],
saD:function(a,b){var z
if(this.c===C.d){this.c=C.i
this.b8()
z=this.a
z.a=null
z.a5(null)}this.dS(b)}},jg:{"^":"b6;0ch,0f,a,b,0c,0d,0e",
it:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.C(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.a5(z)}},
b8:function(){this.c4()
this.it(1)}},jh:{"^":"b6;0ch,0f,a,b,0c,0d,0e",
cs:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.C(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.a5(z)}},
b8:function(){this.c4()
this.cs(100)}},c6:{"^":"a;"}}],["","",,T,{"^":"",dp:{"^":"cV;"},dq:{"^":"dp;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.L()
this.e=z}return z}},kk:{"^":"a;a,0b,0c,0d,0e",
aS:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a9
W.a1(z,"load",H.l(new T.kl(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
io:function(a,b,c){var z,y,x,w
b=V.e_(b,2)
z=V.e_(a.width,2)
y=V.e_(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cZ(null,null)
x.width=z
x.height=y
w=H.d(C.q.fj(x,"2d"),"$isd_")
w.imageSmoothingEnabled=!1;(w&&C.D).jN(w,a,0,0,x.width,x.height)
return P.mS(C.D.hs(w,0,0,x.width,x.height))}}},kl:{"^":"n:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.io(this.b,z.c,this.c)
x=z.a
C.b.aX(x,34067,this.d)
C.b.kt(x,37440,this.e?1:0)
C.b.kJ(x,this.f,0,6408,6408,5121,y)
C.b.aX(x,34067,null)
x=this.r
if(++x.d>=6){x=x.e
if(!(x==null))x.jO()}++z.e}}}],["","",,V,{"^":"",br:{"^":"a;",
b0:function(a){return!0},
i:function(a){return"all"},
$isaB:1},aB:{"^":"a;"},eL:{"^":"a;0a",
sa8:function(a){this.a=H.k(a,"$isb",[V.aB],"$asb")},
b0:["fD",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)if(z[x].b0(a))return!0
return!1}],
i:["dj",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaB:1},ax:{"^":"eL;0a",
b0:function(a){return!this.fD(a)},
i:function(a){return"!["+this.dj(0)+"]"}},jN:{"^":"a;0a,0b",
b0:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.ba(this.a)
y=H.ba(this.b)
return z+".."+y},
$isaB:1,
n:{
R:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.e(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.c.I(a,0)
y=C.c.I(b,0)
x=new V.jN()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},k_:{"^":"a;0a",
sis:function(a){this.a=H.k(a,"$isI",[P.m,P.N],"$asI")},
fJ:function(a){var z,y
if(a.a.length<=0)throw H.e(P.u("May not create a SetMatcher with zero characters."))
z=new H.aZ(0,0,[P.m,P.N])
for(y=new H.d9(a,a.gp(a),0,[H.a5(a,"U",0)]);y.D();)z.q(0,y.d,!0)
this.sis(z)},
b0:function(a){return this.a.bD(a)},
i:function(a){return P.c5(this.a.gaF(),0,null)},
$isaB:1,
n:{
w:function(a){var z=new V.k_()
z.fJ(a)
return z}}},dk:{"^":"a;a,b,0c,0d",
siM:function(a){this.c=H.k(a,"$isb",[V.dt],"$asb")},
k:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dt(this.a.j(0,b))
w.sa8(H.c([],[V.aB]))
w.c=!1
C.a.h(this.c,w)
return w},
jS:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.b0(a))return w}return},
i:function(a){return this.b}},fk:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.e1(this.b,"\n","\\n")
y=H.e1(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ds:{"^":"a;a,b,0c",
sih:function(a){var z=P.h
this.c=H.k(a,"$isI",[z,z],"$asI")},
aM:function(a,b,c){var z,y,x
H.k(c,"$isb",[P.h],"$asb")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.z)(c),++y){x=c[y]
this.c.q(0,x,b)}},
i:function(a){return this.b}},kq:{"^":"a;0a,0b,0c",
siD:function(a){this.a=H.k(a,"$isI",[P.h,V.dk],"$asI")},
siI:function(a){this.b=H.k(a,"$isI",[P.h,V.ds],"$asI")},
j:function(a,b){var z=this.a.l(0,b)
if(z==null){z=new V.dk(this,b)
z.siM(H.c([],[V.dt]))
z.d=null
this.a.q(0,b,z)}return z},
R:function(a){var z,y
z=this.b.l(0,a)
if(z==null){z=new V.ds(this,a)
y=P.h
z.sih(new H.aZ(0,0,[y,y]))
this.b.q(0,a,z)}return z},
f3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fk])
y=this.c
x=[P.m]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.I(a,t)
r=y.jS(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c5(w,0,null)
throw H.e(P.u("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c5(w,0,null)
p=y.d
o=p.c.l(0,q)
u=new V.fk(o==null?p.b:o,q,t)}++t}}},
n:{
cA:function(){var z,y
z=new V.kq()
y=P.h
z.siD(new H.aZ(0,0,[y,V.dk]))
z.siI(new H.aZ(0,0,[y,V.ds]))
z.c=null
return z}}},dt:{"^":"eL;b,0c,0a",
i:function(a){return this.b.b+": "+this.dj(0)}}}],["","",,X,{"^":"",eg:{"^":"a;",$isaK:1},ix:{"^":"fc;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.L()
this.x=z}return z}},jt:{"^":"a;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.L()
this.f=z}return z},
b5:[function(a){var z
H.d(a,"$isy")
z=this.f
if(!(z==null))z.J(a)},function(){return this.b5(null)},"kY","$1","$0","gdl",0,2,0],
sb1:function(a){var z,y
if(!J.K(this.b,a)){z=this.b
if(z!=null)z.gu().K(0,this.gdl())
y=this.b
this.b=a
if(a!=null)a.gu().h(0,this.gdl())
z=new D.C("mover",y,this.b,this,[U.ab])
z.b=!0
this.b5(z)}},
$isaK:1,
$iseg:1},fc:{"^":"a;"}}],["","",,V,{"^":"",
nv:function(a){P.kp(C.V,new V.nw(a))},
aV:{"^":"a;0d",
sce:function(a){this.d=H.k(a,"$isb",[[P.b,W.aX]],"$asb")},
bw:function(a){this.b=new P.iE(C.Y)
this.c=null
this.sce(H.c([],[[P.b,W.aX]]))},
O:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.aX]))
y=a.split("\n")
for(z=y.length,x=[W.aX],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.D(u)
s=this.b.he(u,0,u.length)
r=s==null?u:s
C.k.ft(t,H.e1(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaG(this.d),t)}},
eS:function(a){var z,y,x,w
H.k(a,"$isb",[P.h],"$asb")
this.sce(H.c([],[[P.b,W.aX]]))
z=C.a.k(a,"\n")
y=this.c
if(y==null){y=this.bE()
this.c=y}for(y=y.f3(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)this.bW(y[w])}},
nw:{"^":"n:51;a",
$1:function(a){H.d(a,"$isbb")
P.e0(C.j.f2(this.a.gjY(),2)+" fps")}},
i8:{"^":"aV;a,0b,0c,0d",
bW:function(a){switch(a.a){case"Class":this.O(a.b,"#551")
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
bE:function(){var z,y,x,w
z=V.cA()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
x=V.R("a","z")
C.a.h(y.a,x)
x=V.R("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=V.R("0","9")
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.w(new H.v("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Sym")
y=V.w(new H.v("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").k(0,"Sym")
x=V.w(new H.v("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"OpenDoubleStr")
y=V.w(new H.v('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
x=V.w(new H.v('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
y=V.w(new H.v("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
x=V.w(new H.v('"'))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.br())
x=z.j(0,"Start").k(0,"OpenSingleStr")
y=V.w(new H.v("'"))
C.a.h(x.a,y)
y=z.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
x=V.w(new H.v("'"))
C.a.h(y.a,x)
x=z.j(0,"OpenSingleStr").k(0,"EscSingleStr")
y=V.w(new H.v("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscSingleStr").k(0,"OpenSingleStr")
x=V.w(new H.v("'"))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.br())
x=z.j(0,"Start").k(0,"Slash")
y=V.w(new H.v("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"Comment")
x=V.w(new H.v("/"))
C.a.h(y.a,x)
x=z.j(0,"Comment").k(0,"EndComment")
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.ax()
w=[V.aB]
x.sa8(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"MLComment")
x=V.w(new H.v("*"))
C.a.h(y.a,x)
x=z.j(0,"MLComment").k(0,"MLCStar")
y=V.w(new H.v("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").k(0,"MLComment")
x=new V.ax()
x.sa8(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").k(0,"EndComment")
x=V.w(new H.v("/"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Whitespace")
y=V.w(new H.v(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Whitespace").k(0,"Whitespace")
x=V.w(new H.v(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Int")
x.d=x.a.R("Num")
x=z.j(0,"Float")
x.d=x.a.R("Num")
x=z.j(0,"Sym")
x.d=x.a.R("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.R("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.R("String")
x=z.j(0,"EndComment")
x.d=x.a.R("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.R("Whitespace")
x=z.j(0,"Id")
y=x.a.R("Id")
x.d=y
x=[P.h]
y.aM(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aM(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aM(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iy:{"^":"aV;a,0b,0c,0d",
bW:function(a){switch(a.a){case"Builtin":this.O(a.b,"#411")
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
bE:function(){var z,y,x,w
z=V.cA()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
x=V.R("a","z")
C.a.h(y.a,x)
x=V.R("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=V.R("0","9")
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.w(new H.v("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Sym")
y=V.w(new H.v("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").k(0,"Sym")
x=V.w(new H.v("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Slash")
y=V.w(new H.v("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"Comment")
x=V.w(new H.v("/"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Slash").k(0,"Sym").a,new V.br())
x=z.j(0,"Comment").k(0,"EndComment")
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.ax()
w=[V.aB]
x.sa8(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Preprocess")
x=V.w(new H.v("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"Preprocess")
y=new V.ax()
y.sa8(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("\n"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"EndPreprocess")
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Whitespace")
x=V.w(new H.v(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Whitespace").k(0,"Whitespace")
y=V.w(new H.v(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Int")
y.d=y.a.R("Num")
y=z.j(0,"Float")
y.d=y.a.R("Num")
y=z.j(0,"Sym")
y.d=y.a.R("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.R("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.R("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.R("Whitespace")
y=z.j(0,"Id")
x=y.a.R("Id")
y.d=x
y=[P.h]
x.aM(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aM(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aM(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iz:{"^":"aV;a,0b,0c,0d",
bW:function(a){switch(a.a){case"Attr":this.O(a.b,"#911")
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
bE:function(){var z,y,x
z=V.cA()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
x=V.R("a","z")
C.a.h(y.a,x)
x=V.R("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=V.R("0","9")
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Id").k(0,"Attr")
x=V.w(new H.v("="))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Sym")
x=V.w(new H.v("</\\-!>="))
C.a.h(y.a,x)
x=z.j(0,"Sym").k(0,"Sym")
y=V.w(new H.v("</\\-!>="))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"OpenStr")
x=V.w(new H.v('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenStr").k(0,"CloseStr")
y=V.w(new H.v('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenStr").k(0,"EscStr")
x=V.w(new H.v("\\"))
C.a.h(y.a,x)
x=z.j(0,"EscStr").k(0,"OpenStr")
y=V.w(new H.v('"'))
C.a.h(x.a,y)
C.a.h(z.j(0,"OpenStr").k(0,"OpenStr").a,new V.br())
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.br())
y=z.j(0,"Other").k(0,"Other")
x=new V.ax()
x.sa8(H.c([],[V.aB]))
C.a.h(y.a,x)
y=V.w(new H.v('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.R("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.R("String")
y=z.j(0,"Id")
x=y.a.R("Id")
y.d=x
x.aM(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.j(0,"Attr")
x.d=x.a.R("Attr")
x=z.j(0,"Other")
x.d=x.a.R("Other")
return z}},
jv:{"^":"aV;a,0b,0c,0d",
eS:function(a){H.k(a,"$isb",[P.h],"$asb")
this.sce(H.c([],[[P.b,W.aX]]))
this.O(C.a.k(a,"\n"),"#111")},
bW:function(a){},
bE:function(){return}},
jK:{"^":"a;a,b,0c",
e_:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fz().gd3().l(0,H.i(z))
if(y==null)if(d){c.$0()
this.dX(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.e5(this.c).h(0,v)
t=W.iH("radio")
t.checked=x
t.name=z
z=W.a9
W.a1(t,"change",H.l(new V.jL(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
C.G.E(v,t)
s=w.createElement("span")
s.textContent=b
C.G.E(v,s)
J.e5(this.c).h(0,w.createElement("br"))},
bc:function(a,b,c){return this.e_(a,b,c,!1)},
dX:function(a){var z,y,x,w,v
z=P.fz()
y=P.h
x=P.iZ(z.gd3(),y,y)
x.q(0,this.a,a)
w=z.eY(0,x)
y=window.history
v=w.i(0)
y.toString;(y&&C.X).ij(y,new P.lW([],[]).d9(""),"",v)}},
jL:{"^":"n:11;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dX(this.d)}}},
k5:{"^":"a;0a,0b",
fL:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.p).E(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.p.E(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.k.E(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.k.E(v,u)}t=z.createElement("div")
this.a=t
C.k.E(v,t)
this.b=null
t=W.a9
W.a1(z,"scroll",H.l(new V.k8(x),{func:1,ret:-1,args:[t]}),!1,t)},
e1:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.k(a,"$isb",[P.h],"$asb")
this.iy()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.f3(C.a.k8(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.k.E(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.k.E(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.k.E(y,t)
break
case"Link":s=u.b
if(H.hA(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=H.D(r[1])
q.textContent=H.D(r[0])
C.k.E(y,q)}else{p=P.ca(C.J,s,C.m,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.i(p)
q.textContent=s
C.k.E(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.k.E(y,t)
break}}C.k.E(this.a,y)},
fi:function(a){var z,y,x,w
z=new V.i8("dart")
z.bw("dart")
y=new V.iy("glsl")
y.bw("glsl")
x=new V.iz("html")
x.bw("html")
w=C.a.jU(H.c([z,y,x],[V.aV]),new V.k9(a))
if(w!=null)return w
z=new V.jv("plain")
z.bw("plain")
return z},
e0:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.k(a2,"$isb",[P.h],"$asb")
z=H.c([],[P.m])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.bR(w).a6(w,"+")){C.a.q(a2,x,C.c.ax(w,1))
C.a.h(z,1)
y=!0}else if(C.c.a6(w,"-")){C.a.q(a2,x,C.c.ax(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.fi(a0)
v.eS(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.k.E(t,s)
C.k.E(this.a,t)
r=P.ca(C.J,a,C.m,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.e7(null)
n.href="#"+H.i(r)
n.textContent=a
C.k.E(o,n)
C.x.E(p,o)
C.n.E(q,p)
C.o.E(s,q)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.z)(w),++e)C.x.E(f,w[e])
C.n.E(j,i)
C.n.E(j,h)
C.n.E(j,f)
C.o.E(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.z)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gW(w);b.D();)C.x.E(h,b.gL())
C.n.E(j,i)
C.n.E(j,h)
C.o.E(s,j)}},
jd:function(a){var z,y,x,w,v,u,t
H.k(a,"$isb",[P.h],"$asb")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
C.k.E(this.a,y)
w=C.o.hw(y,-1)
x=H.d((w&&C.n).dI(w,-1),"$iscy").style
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
t=H.d(C.n.dI(w,-1),"$iscy")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.x).E(t,u)}},
iy:function(){var z,y,x,w
if(this.b!=null)return
z=V.cA()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Bold")
x=V.w(new H.v("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").k(0,"Bold")
x=new V.ax()
w=[V.aB]
x.sa8(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("*"))
C.a.h(x.a,y)
y=z.j(0,"Bold").k(0,"BoldEnd")
x=V.w(new H.v("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Italic")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Italic").k(0,"Italic")
x=new V.ax()
x.sa8(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=z.j(0,"Italic").k(0,"ItalicEnd")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Code")
x=V.w(new H.v("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Code").k(0,"Code")
x=new V.ax()
x.sa8(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("`"))
C.a.h(x.a,y)
y=z.j(0,"Code").k(0,"CodeEnd")
x=V.w(new H.v("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"LinkHead")
x=V.w(new H.v("["))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"LinkHead").k(0,"LinkTail")
x=V.w(new H.v("|"))
C.a.h(y.a,x)
x=z.j(0,"LinkHead").k(0,"LinkEnd")
y=V.w(new H.v("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkHead").k(0,"LinkHead")
y=new V.ax()
y.sa8(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").k(0,"LinkEnd")
y=V.w(new H.v("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").k(0,"LinkTail")
y=new V.ax()
y.sa8(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.br())
x=z.j(0,"Other").k(0,"Other")
y=new V.ax()
y.sa8(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.R("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.R("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.R("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.R("Link")
x=z.j(0,"Other")
x.d=x.a.R("Other")
this.b=z},
n:{
k6:function(a,b){var z=new V.k5()
z.fL(a,!0)
return z}}},
k8:{"^":"n:11;a",
$1:function(a){P.fi(C.y,new V.k7(this.a))}},
k7:{"^":"n:1;a",
$0:function(){var z,y,x
z=C.j.at(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}},
k9:{"^":"n:52;a",
$1:function(a){return H.d(a,"$isaV").a===this.a}}}],["","",,T,{"^":"",
hv:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=V.k6("Test 022",!0)
y=W.cZ(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.k.E(z.a,y)
x=[P.h]
z.e1(H.c(["Test of the Material Lighting shader with a textured point light."],x))
z.jd(H.c(["shapes"],x))
z.e1(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=C.z.dd(x,"testCanvas")
if(w==null)H.r(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.kn(w,!0,!0,!0,!1)
u=v.f
t=u.a
s=t.createTexture()
C.b.aX(t,34067,s)
C.b.bY(t,34067,10242,10497)
C.b.bY(t,34067,10243,10497)
C.b.bY(t,34067,10241,9729)
C.b.bY(t,34067,10240,9729)
C.b.aX(t,34067,null)
r=new T.dq()
r.a=0
r.b=s
r.c=!1
r.d=0
u.aS(r,s,"../resources/earthColor/posx.png",34069,!1,!1)
u.aS(r,s,"../resources/earthColor/negx.png",34070,!1,!1)
u.aS(r,s,"../resources/earthColor/posy.png",34071,!1,!1)
u.aS(r,s,"../resources/earthColor/negy.png",34072,!1,!1)
u.aS(r,s,"../resources/earthColor/posz.png",34073,!1,!1)
u.aS(r,s,"../resources/earthColor/negz.png",34074,!1,!1)
q=U.d4(null)
q.h(0,U.ck(V.eR(0,0,2)))
u=new U.f4()
u.a=0
u.b=0
u.c=0
u.d=0
u.e=0
u.f=0
u.r=0
u.sfc(0)
u.seU(0)
u.seZ(0)
t=u.d
if(!$.o.$2(t,0.5)){p=u.d
u.d=0.5
t=new D.C("deltaYaw",p,0.5,u,[P.q])
t.b=!0
u.M(t)}t=u.e
if(!$.o.$2(t,0.5)){p=u.e
u.e=0.5
t=new D.C("deltaPitch",p,0.5,u,[P.q])
t.b=!0
u.M(t)}t=u.f
if(!$.o.$2(t,0)){p=u.f
u.f=0
t=new D.C("deltaRoll",p,0,u,[P.q])
t.b=!0
u.M(t)}q.h(0,u)
o=E.d3(null,!0,null,"",null,null)
u=U.d4(null)
u.h(0,U.ck(V.dd(0.2,0.2,0.2,1)))
u.h(0,q)
o.sb1(u)
o.sac(0,F.hz(8,null,1,8))
u=O.eM()
t=u.f
n=t.c
if(n!==C.e){if(n===C.d)t.b8()
t.c=C.e
t.iu(null)
n=t.a
n.a=null
n.a5(null)}t.iv(r)
o.sbo(u)
m=new D.cz()
m.c=new V.a8(1,1,1)
m.e=1
m.f=0
m.r=0
m.a=V.bB()
p=m.b
m.b=q
q.gu().h(0,m.gc6())
u=new D.C("mover",p,m.b,m,[U.ab])
u.b=!0
m.ae(u)
l=new V.a8(1,1,1)
if(!m.c.w(0,l)){p=m.c
m.c=l
u=new D.C("color",p,l,m,[V.a8])
u.b=!0
m.ae(u)}u=m.d
if(u!==r){if(u!=null)u.gu().K(0,m.gc6())
p=m.d
m.d=r
r.gu().h(0,m.gc6())
u=new D.C("texture",p,m.d,m,[T.dq])
u.b=!0
m.ae(u)}u=m.e
if(!$.o.$2(u,1)){p=m.e
m.e=1
u=new D.C("attenuation0",p,1,m,[P.q])
u.b=!0
m.ae(u)}u=m.f
if(!$.o.$2(u,0.15)){p=m.f
m.f=0.15
u=new D.C("attenuation1",p,0.15,m,[P.q])
u.b=!0
m.ae(u)}u=m.r
if(!$.o.$2(u,0.05)){p=m.r
m.r=0.05
u=new D.C("attenuation2",p,0.05,m,[P.q])
u.b=!0
m.ae(u)}k=O.eM()
k.dx.h(0,m)
u=k.r
u.saD(0,new V.a8(0.2,0.2,0.2))
u=k.x
u.saD(0,new V.a8(1,1,1))
u=k.z
u.saD(0,new V.a8(1,1,1))
u=k.z
if(u.c===C.d){u.c=C.i
u.c4()
u.cs(100)
t=u.a
t.a=null
t.a5(null)}u.cs(100)
j=E.d3(null,!0,null,"",null,null)
j.sb1(U.ck(V.dd(3,3,3,1)))
u=F.dU(1,null,null,1)
u.cR()
j.sac(0,u)
i=E.d3(null,!0,null,"",null,null)
i.sac(0,F.hC(30,1,15,0.5))
h=U.d4(null)
u=v.r
t=new U.kS()
n=U.d1()
n.sdc(0,!0)
n.scY(6.283185307179586)
n.sd_(0)
n.sa2(0,0)
n.scZ(100)
n.sX(0)
n.scJ(0.5)
t.b=n
g=t.gaT()
n.gu().h(0,g)
n=U.d1()
n.sdc(0,!0)
n.scY(6.283185307179586)
n.sd_(0)
n.sa2(0,0)
n.scZ(100)
n.sX(0)
n.scJ(0.5)
t.c=n
n.gu().h(0,g)
t.d=null
t.e=!1
t.f=!1
t.r=!1
t.x=2.5
t.y=2.5
t.z=2
t.Q=4
t.cx=!1
t.ch=!1
t.cy=0
t.db=0
t.dx=null
t.dy=0
t.fr=null
t.fx=null
f=new X.aD(!1,!1,!1)
p=t.d
t.d=f
n=[X.aD]
g=new D.C("modifiers",p,f,t,n)
g.b=!0
t.M(g)
g=t.f
if(g!==!1){t.f=!1
g=new D.C("invertX",g,!1,t,[P.N])
g.b=!0
t.M(g)}g=t.r
if(g!==!1){t.r=!1
g=new D.C("invertY",g,!1,t,[P.N])
g.b=!0
t.M(g)}t.bd(u)
h.h(0,t)
u=v.r
t=new U.kR()
g=U.d1()
g.sdc(0,!0)
g.scY(6.283185307179586)
g.sd_(0)
g.sa2(0,0)
g.scZ(100)
g.sX(0)
g.scJ(0.2)
t.b=g
g.gu().h(0,t.gaT())
t.c=null
t.d=!1
t.e=2.5
t.f=2
t.r=4
t.y=!1
t.x=!1
t.z=0
t.Q=null
t.ch=0
t.cx=null
t.cy=null
f=new X.aD(!0,!1,!1)
p=t.c
t.c=f
g=new D.C("modifiers",p,f,t,n)
g.b=!0
t.M(g)
t.bd(u)
h.h(0,t)
u=v.r
t=new U.kT()
t.c=0.01
t.d=0
t.e=0
f=new X.aD(!1,!1,!1)
t.b=f
n=new D.C("modifiers",null,f,t,n)
n.b=!0
t.M(n)
t.bd(u)
h.h(0,t)
h.h(0,U.ck(V.eR(0,0,5)))
e=new M.im()
e.shc(0,O.d0(E.au))
e.d.bv(e.ghM(),e.ghN())
e.e=null
e.f=null
e.r=null
e.x=null
d=new X.jt()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.sb1(null)
u=d.c
if(!$.o.$2(u,1.0471975511965976)){p=d.c
d.c=1.0471975511965976
u=new D.C("fov",p,1.0471975511965976,d,[P.q])
u.b=!0
d.b5(u)}u=d.d
if(!$.o.$2(u,0.1)){p=d.d
d.d=0.1
u=new D.C("near",p,0.1,d,[P.q])
u.b=!0
d.b5(u)}u=d.e
if(!$.o.$2(u,2000)){p=d.e
d.e=2000
u=new D.C("far",p,2000,d,[P.q])
u.b=!0
d.b5(u)}u=e.a
if(u!==d){if(u!=null)u.gu().K(0,e.gay())
p=e.a
e.a=d
d.gu().h(0,e.gay())
u=new D.C("camera",p,e.a,e,[X.eg])
u.b=!0
e.aP(u)}c=new X.ix()
u=new V.bt(0,0,0,1)
c.a=u
c.b=!0
c.c=2000
c.d=!0
c.e=0
c.f=!1
u=$.f3
if(u==null){u=V.f2(0,0,1,1)
$.f3=u}c.r=u
u=e.b
if(u!==c){if(u!=null)u.gu().K(0,e.gay())
p=e.b
e.b=c
c.gu().h(0,e.gay())
u=new D.C("target",p,e.b,e,[X.fc])
u.b=!0
e.aP(u)}e.sbo(null)
e.sbo(k)
e.d.h(0,j)
e.d.h(0,i)
e.d.h(0,o)
e.a.sb1(h)
u=v.d
if(u!==e){if(u!=null)u.gu().K(0,v.gdk())
v.d=e
e.gu().h(0,v.gdk())
v.fO()}u=new V.jK("shapes",!0)
x=C.z.dd(x,"shapes")
u.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
u.bc(0,"Cube",new T.ni(i))
u.bc(0,"Cylinder",new T.nj(i))
u.bc(0,"Cone",new T.nk(i))
u.bc(0,"Sphere",new T.nl(i))
u.e_(0,"Toroid",new T.nm(i),!0)
u.bc(0,"Knot",new T.nn(i))
x=v.z
if(x==null){x=D.L()
v.z=x}u={func:1,ret:-1,args:[D.y]}
t=H.l(new T.no(z,k),u)
if(x.b==null)x.sb9(H.c([],[u]))
x=x.b;(x&&C.a).h(x,t)
V.nv(v)},
ni:{"^":"n:1;a",
$0:function(){this.a.sac(0,F.dU(1,null,null,1))}},
nj:{"^":"n:1;a",
$0:function(){this.a.sac(0,F.hn(1,!0,!0,1,40,1))}},
nk:{"^":"n:1;a",
$0:function(){this.a.sac(0,F.hn(1,!0,!1,1,40,0))}},
nl:{"^":"n:1;a",
$0:function(){this.a.sac(0,F.hz(6,null,1,6))}},
nm:{"^":"n:1;a",
$0:function(){this.a.sac(0,F.hC(30,1,15,0.5))}},
nn:{"^":"n:1;a",
$0:function(){this.a.sac(0,F.nf(120,1,2,12,0.3,3))}},
no:{"^":"n:8;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isy")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.e0("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.e0("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.O=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eD.prototype
return J.eC.prototype}if(typeof a=="string")return J.c_.prototype
if(a==null)return J.eE.prototype
if(typeof a=="boolean")return J.iL.prototype
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.a)return a
return J.cL(a)}
J.bn=function(a){if(typeof a=="string")return J.c_.prototype
if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.a)return a
return J.cL(a)}
J.dX=function(a){if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.a)return a
return J.cL(a)}
J.n2=function(a){if(typeof a=="number")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c7.prototype
return a}
J.n3=function(a){if(typeof a=="number")return J.bZ.prototype
if(typeof a=="string")return J.c_.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c7.prototype
return a}
J.bR=function(a){if(typeof a=="string")return J.c_.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c7.prototype
return a}
J.X=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.a)return a
return J.cL(a)}
J.K=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).w(a,b)}
J.hD=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.n2(a).U(a,b)}
J.e3=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n3(a).t(a,b)}
J.hE=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ne(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bn(a).l(a,b)}
J.hF=function(a,b,c,d){return J.X(a).h4(a,b,c,d)}
J.hG=function(a,b){return J.bR(a).I(a,b)}
J.cf=function(a,b){return J.X(a).ic(a,b)}
J.cR=function(a,b,c){return J.X(a).ii(a,b,c)}
J.e4=function(a,b){return J.X(a).E(a,b)}
J.hH=function(a,b){return J.bR(a).a1(a,b)}
J.cS=function(a,b,c){return J.bn(a).jx(a,b,c)}
J.cg=function(a,b){return J.dX(a).a9(a,b)}
J.hI=function(a,b,c,d){return J.X(a).jR(a,b,c,d)}
J.hJ=function(a){return J.X(a).gjm(a)}
J.e5=function(a){return J.X(a).gcG(a)}
J.bS=function(a){return J.O(a).gZ(a)}
J.b3=function(a){return J.dX(a).gW(a)}
J.as=function(a){return J.bn(a).gp(a)}
J.hK=function(a){return J.X(a).gku(a)}
J.hL=function(a){return J.X(a).gkI(a)}
J.cT=function(a,b){return J.X(a).b4(a,b)}
J.e6=function(a){return J.dX(a).kw(a)}
J.hM=function(a,b){return J.X(a).kB(a,b)}
J.hN=function(a,b){return J.X(a).skQ(a,b)}
J.hO=function(a,b,c){return J.X(a).fs(a,b,c)}
J.hP=function(a,b,c){return J.bR(a).v(a,b,c)}
J.hQ=function(a){return J.bR(a).kP(a)}
J.af=function(a){return J.O(a).i(a)}
I.a6=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.ch.prototype
C.q=W.cY.prototype
C.D=W.d_.prototype
C.k=W.aX.prototype
C.U=W.id.prototype
C.W=W.iA.prototype
C.X=W.iB.prototype
C.z=W.iD.prototype
C.Z=J.H.prototype
C.a=J.b5.prototype
C.a_=J.eC.prototype
C.h=J.eD.prototype
C.r=J.eE.prototype
C.j=J.bZ.prototype
C.c=J.c_.prototype
C.a6=J.c0.prototype
C.G=W.iQ.prototype
C.ac=W.jn.prototype
C.M=J.ju.prototype
C.N=W.jM.prototype
C.b=P.dh.prototype
C.x=W.cy.prototype
C.o=W.kh.prototype
C.n=W.ki.prototype
C.C=J.c7.prototype
C.O=W.bI.prototype
C.P=W.le.prototype
C.R=new P.hU(!1)
C.Q=new P.hT(C.R)
C.S=new P.js()
C.T=new P.l0()
C.l=new P.lM()
C.d=new A.cj(0,"ColorSourceType.None")
C.i=new A.cj(1,"ColorSourceType.Solid")
C.f=new A.cj(2,"ColorSourceType.Texture2D")
C.e=new A.cj(3,"ColorSourceType.TextureCube")
C.y=new P.bu(0)
C.V=new P.bu(5e6)
C.Y=new P.iF("element",!0,!1,!1,!1)
C.a0=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.a1=function(hooks) {
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

C.a2=function(getTagFallback) {
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
C.a3=function() {
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
C.a4=function(hooks) {
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
C.a5=function(hooks) {
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
C.H=H.c(I.a6([127,2047,65535,1114111]),[P.m])
C.t=H.c(I.a6([0,0,32776,33792,1,10240,0,0]),[P.m])
C.a7=H.c(I.a6(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.u=H.c(I.a6([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.v=H.c(I.a6([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.a8=H.c(I.a6(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.I=H.c(I.a6([]),[P.h])
C.a9=H.c(I.a6([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.J=H.c(I.a6([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.w=H.c(I.a6([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.K=H.c(I.a6([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.aa=H.c(I.a6([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.L=H.c(I.a6([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.A=H.c(I.a6(["bind","if","ref","repeat","syntax"]),[P.h])
C.B=H.c(I.a6(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.ab=new H.i5(0,{},C.I,[P.h,P.h])
C.m=new P.kU(!1)
$.az=0
$.bs=null
$.eb=null
$.dN=!1
$.hs=null
$.hk=null
$.hy=null
$.cK=null
$.cN=null
$.dY=null
$.bi=null
$.bN=null
$.bO=null
$.dO=!1
$.S=C.l
$.aJ=null
$.d2=null
$.ew=null
$.ev=null
$.eq=null
$.ep=null
$.eo=null
$.en=null
$.o=V.ji()
$.cv=null
$.eZ=null
$.bD=null
$.f3=null
$.fD=null
$.fI=null
$.fF=null
$.fG=null
$.fH=null
$.fE=null
$.eX=null
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
I.$lazy(y,x,w)}})(["em","$get$em",function(){return H.hr("_$dart_dartClosure")},"d6","$get$d6",function(){return H.hr("_$dart_js")},"fm","$get$fm",function(){return H.aF(H.cB({
toString:function(){return"$receiver$"}}))},"fn","$get$fn",function(){return H.aF(H.cB({$method$:null,
toString:function(){return"$receiver$"}}))},"fo","$get$fo",function(){return H.aF(H.cB(null))},"fp","$get$fp",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ft","$get$ft",function(){return H.aF(H.cB(void 0))},"fu","$get$fu",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fr","$get$fr",function(){return H.aF(H.fs(null))},"fq","$get$fq",function(){return H.aF(function(){try{null.$method$}catch(z){return z.message}}())},"fw","$get$fw",function(){return H.aF(H.fs(void 0))},"fv","$get$fv",function(){return H.aF(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dI","$get$dI",function(){return P.lf()},"bP","$get$bP",function(){return[]},"fC","$get$fC",function(){return P.kY()},"fP","$get$fP",function(){return H.jl(H.bh(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"h8","$get$h8",function(){return P.jR("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hg","$get$hg",function(){return P.mz()},"el","$get$el",function(){return{}},"fT","$get$fT",function(){return P.eI(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dJ","$get$dJ",function(){return P.eH(P.h,P.bW)},"fL","$get$fL",function(){return Z.ap(0)},"fJ","$get$fJ",function(){return Z.ap(511)},"aQ","$get$aQ",function(){return Z.ap(1)},"aP","$get$aP",function(){return Z.ap(2)},"aO","$get$aO",function(){return Z.ap(4)},"aR","$get$aR",function(){return Z.ap(8)},"aS","$get$aS",function(){return Z.ap(16)},"bG","$get$bG",function(){return Z.ap(32)},"bH","$get$bH",function(){return Z.ap(64)},"fK","$get$fK",function(){return Z.ap(96)},"bf","$get$bf",function(){return Z.ap(128)},"aN","$get$aN",function(){return Z.ap(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.y]},{func:1,ret:P.F},{func:1,ret:-1,args:[D.y]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aw]},{func:1,ret:P.F,args:[F.aa]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.F,args:[F.ah,P.q,P.q]},{func:1,ret:P.F,args:[D.y]},{func:1,ret:-1,args:[P.m,[P.p,E.au]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[W.a9]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:-1,args:[W.a9]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.m,[P.p,U.ab]]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.m,[P.p,D.a4]]},{func:1,args:[,]},{func:1,ret:P.N,args:[W.Q,P.h,P.h,W.c9]},{func:1,ret:V.a_,args:[P.q]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:P.N,args:[W.B]},{func:1,ret:P.h,args:[P.m]},{func:1,ret:P.N,args:[W.aE]},{func:1,ret:P.N,args:[P.h]},{func:1,ret:-1,args:[W.bz]},{func:1,ret:-1,args:[P.m,[P.p,V.ag]]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.q,args:[P.q]},{func:1,args:[W.a9]},{func:1,ret:P.F,args:[P.ak]},{func:1,ret:P.P,args:[,,]},{func:1,ret:P.P,args:[P.m]},{func:1,ret:P.F,args:[P.h,,]},{func:1,ret:P.N,args:[P.q,P.q]},{func:1,ret:-1,args:[W.bI]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.N,args:[[P.p,D.a4]]},{func:1,ret:P.F,args:[P.h]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.m]},{func:1,ret:[P.I,P.h,P.h],args:[[P.I,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:-1,args:[W.B,W.B]},{func:1,ret:P.m,args:[[P.b,P.m],P.m]},{func:1,ret:[P.aT,,],args:[,]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[P.bb]},{func:1,ret:P.N,args:[V.aV]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:W.Q,args:[W.B]}]
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
if(x==y)H.nz(d||a)
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
Isolate.a6=a.a6
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
if(typeof dartMainRunner==="function")dartMainRunner(T.hv,[])
else T.hv([])})})()
//# sourceMappingURL=test.dart.js.map
