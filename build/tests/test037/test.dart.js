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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.du"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.du"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.du(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dv=function(){}
var dart=[["","",,H,{"^":"",mV:{"^":"a;a"}}],["","",,J,{"^":"",
dA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ct:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dz==null){H.m5()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.ci("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cN()]
if(v!=null)return v
v=H.mb(a)
if(v!=null)return v
if(typeof a=="function")return C.X
y=Object.getPrototypeOf(a)
if(y==null)return C.G
if(y===Object.prototype)return C.G
if(typeof w=="function"){Object.defineProperty(w,$.$get$cN(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
H:{"^":"a;",
t:function(a,b){return a===b},
gV:function(a){return H.bs(a)},
i:["f0",function(a){return"Instance of '"+H.b0(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
hO:{"^":"H;",
i:function(a){return String(a)},
gV:function(a){return a?519018:218159},
$isa3:1},
e9:{"^":"H;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gV:function(a){return 0},
$isz:1},
cO:{"^":"H;",
gV:function(a){return 0},
i:["f1",function(a){return String(a)}]},
ix:{"^":"cO;"},
bX:{"^":"cO;"},
bR:{"^":"cO;",
i:function(a){var z=a[$.$get$dT()]
if(z==null)return this.f1(a)
return"JavaScript function for "+H.i(J.ab(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscK:1},
aX:{"^":"H;$ti",
h:function(a,b){H.w(b,H.t(a,0))
if(!!a.fixed$length)H.p(P.S("add"))
a.push(b)},
jA:function(a,b){var z
if(!!a.fixed$length)H.p(P.S("removeAt"))
z=a.length
if(b>=z)throw H.e(P.bV(b,null,null))
return a.splice(b,1)[0]},
K:function(a,b){var z
if(!!a.fixed$length)H.p(P.S("remove"))
for(z=0;z<a.length;++z)if(J.D(a[z],b)){a.splice(z,1)
return!0}return!1},
S:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.aN(a))}},
D:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.p(z,y,H.i(a[y]))
return z.join(b)},
jb:function(a){return this.D(a,"")},
j3:function(a,b,c,d){var z,y,x
H.w(b,d)
H.l(c,{func:1,ret:d,args:[d,H.t(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.e(P.aN(a))}return y},
ab:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
f_:function(a,b,c){if(b<0||b>a.length)throw H.e(P.X(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.X(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.t(a,0)])
return H.c(a.slice(b,c),[H.t(a,0)])},
gj2:function(a){if(a.length>0)return a[0]
throw H.e(H.e5())},
gay:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.e5())},
aZ:function(a,b){var z
for(z=0;z<a.length;++z)if(J.D(a[z],b))return!0
return!1},
i:function(a){return P.cM(a,"[","]")},
gW:function(a){return new J.aq(a,a.length,0,[H.t(a,0)])},
gV:function(a){return H.bs(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.p(P.S("set length"))
if(b<0)throw H.e(P.X(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.e(H.b9(a,b))
return a[b]},
p:function(a,b,c){H.w(c,H.t(a,0))
if(!!a.immutable$list)H.p(P.S("indexed set"))
if(b>=a.length||b<0)throw H.e(H.b9(a,b))
a[b]=c},
$iso:1,
$isb:1,
n:{
hN:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.cB(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.X(a,0,4294967295,"length",null))
return J.e6(new Array(a),b)},
e6:function(a,b){return J.c9(H.c(a,[b]))},
c9:function(a){H.bZ(a)
a.fixed$length=Array
return a}}},
mU:{"^":"aX;$ti"},
aq:{"^":"a;a,b,c,0d,$ti",
sds:function(a){this.d=H.w(a,H.t(this,0))},
gJ:function(){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.y(z))
x=this.c
if(x>=y){this.sds(null)
return!1}this.sds(z[x]);++this.c
return!0},
$isaP:1},
bP:{"^":"H;",
jO:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.e(P.S(""+a+".toInt()"))},
b2:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.S(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.S(""+a+".round()"))},
eG:function(a,b){var z,y
if(b>20)throw H.e(P.X(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bf:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.e(P.X(b,2,36,"radix",null))
z=a.toString(b)
if(C.c.Z(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.p(P.S("Unexpected toString result: "+z))
x=y.length
if(1>=x)return H.d(y,1)
z=y[1]
if(3>=x)return H.d(y,3)
w=+y[3]
x=y[2]
if(x!=null){z+=x
w-=x.length}return z+C.c.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gV:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.e(H.a9(b))
return a*b},
am:function(a,b){var z
if(typeof b!=="number")throw H.e(H.a9(b))
z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
f4:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dM(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.dM(a,b)},
dM:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.S("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
aH:function(a,b){var z
if(a>0)z=this.dK(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hR:function(a,b){if(b<0)throw H.e(H.a9(b))
return this.dK(a,b)},
dK:function(a,b){return b>31?0:a>>>b},
P:function(a,b){if(typeof b!=="number")throw H.e(H.a9(b))
return a<b},
$isr:1,
$isaf:1},
e8:{"^":"bP;",$ism:1},
e7:{"^":"bP;"},
bQ:{"^":"H;",
Z:function(a,b){if(b<0)throw H.e(H.b9(a,b))
if(b>=a.length)H.p(H.b9(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.e(H.b9(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.G(b)
if(typeof b!=="string")throw H.e(P.cB(b,null,null))
return a+b},
aP:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.a9(b))
c=P.aS(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a9:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.a9(c))
if(typeof c!=="number")return c.P()
if(c<0||c>a.length)throw H.e(P.X(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a8:function(a,b){return this.a9(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.a9(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.e(P.bV(b,null,null))
if(b>c)throw H.e(P.bV(b,null,null))
if(c>a.length)throw H.e(P.bV(c,null,null))
return a.substring(b,c)},
az:function(a,b){return this.q(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.M)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
jq:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ad:function(a,b){return this.jq(a,b," ")},
eq:function(a,b,c){var z
if(c<0||c>a.length)throw H.e(P.X(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
ep:function(a,b){return this.eq(a,b,0)},
iK:function(a,b,c){if(c>a.length)throw H.e(P.X(c,0,a.length,null,null))
return H.fU(a,b,c)},
i:function(a){return a},
gV:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$isen:1,
$isn:1}}],["","",,H,{"^":"",
cu:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
e5:function(){return new P.j9("No element")},
Y:{"^":"jM;a",
gm:function(a){return this.a.length},
j:function(a,b){return C.c.Z(this.a,b)},
$asdd:function(){return[P.m]},
$asR:function(){return[P.m]},
$aso:function(){return[P.m]},
$asb:function(){return[P.m]}},
hu:{"^":"o;"},
ed:{"^":"a;a,b,c,0d,$ti",
saT:function(a){this.d=H.w(a,H.t(this,0))},
gJ:function(){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.bb(z)
x=y.gm(z)
if(this.b!==x)throw H.e(P.aN(z))
w=this.c
if(w>=x){this.saT(null)
return!1}this.saT(y.ab(z,w));++this.c
return!0},
$isaP:1},
ib:{"^":"o;a,b,$ti",
gW:function(a){return new H.ic(J.bI(this.a),this.b,this.$ti)},
gm:function(a){return J.aF(this.a)},
ab:function(a,b){return this.b.$1(J.cA(this.a,b))},
$aso:function(a,b){return[b]}},
ic:{"^":"aP;0a,b,c,$ti",
saT:function(a){this.a=H.w(a,H.t(this,1))},
E:function(){var z=this.b
if(z.E()){this.saT(this.c.$1(z.gJ()))
return!0}this.saT(null)
return!1},
gJ:function(){return this.a},
$asaP:function(a,b){return[b]}},
ki:{"^":"o;a,b,$ti",
gW:function(a){return new H.kj(J.bI(this.a),this.b,this.$ti)}},
kj:{"^":"aP;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gJ()))return!0
return!1},
gJ:function(){return this.a.gJ()}},
c6:{"^":"a;$ti"},
dd:{"^":"a;$ti",
p:function(a,b,c){H.w(c,H.ao(this,"dd",0))
throw H.e(P.S("Cannot modify an unmodifiable list"))}},
jM:{"^":"ca+dd;"}}],["","",,H,{"^":"",
hj:function(){throw H.e(P.S("Cannot modify unmodifiable Map"))},
be:function(a){var z,y
z=H.G(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
lZ:function(a){return init.types[H.a4(a)]},
m8:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isaG},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ab(a)
if(typeof z!=="string")throw H.e(H.a9(a))
return z},
bs:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iH:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.G(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.X(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.c.H(w,u)|32)>x)return}return parseInt(a,b)},
b0:function(a){return H.iy(a)+H.ds(H.aW(a),0,null)},
iy:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.P||!!z.$isbX){u=C.B(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.be(w.length>1&&C.c.H(w,0)===36?C.c.az(w,1):w)},
iz:function(){if(!!self.location)return self.location.href
return},
es:function(a){var z,y,x,w,v
H.bZ(a)
z=J.aF(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iI:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.a9(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aH(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.e(H.a9(w))}return H.es(z)},
et:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.a9(x))
if(x<0)throw H.e(H.a9(x))
if(x>65535)return H.iI(a)}return H.es(a)},
iJ:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bU:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aH(z,10))>>>0,56320|z&1023)}}throw H.e(P.X(a,0,1114111,null,null))},
b_:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iG:function(a){var z=H.b_(a).getFullYear()+0
return z},
iE:function(a){var z=H.b_(a).getMonth()+1
return z},
iA:function(a){var z=H.b_(a).getDate()+0
return z},
iB:function(a){var z=H.b_(a).getHours()+0
return z},
iD:function(a){var z=H.b_(a).getMinutes()+0
return z},
iF:function(a){var z=H.b_(a).getSeconds()+0
return z},
iC:function(a){var z=H.b_(a).getMilliseconds()+0
return z},
v:function(a){throw H.e(H.a9(a))},
d:function(a,b){if(a==null)J.aF(a)
throw H.e(H.b9(a,b))},
b9:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aM(!0,b,"index",null)
z=H.a4(J.aF(a))
if(!(b<0)){if(typeof z!=="number")return H.v(z)
y=b>=z}else y=!0
if(y)return P.bl(b,a,"index",null,z)
return P.bV(b,"index",null)},
lT:function(a,b,c){if(a>c)return new P.cd(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cd(a,c,!0,b,"end","Invalid value")
return new P.aM(!0,b,"end",null)},
a9:function(a){return new P.aM(!0,a,null,null)},
lI:function(a){if(typeof a!=="number")throw H.e(H.a9(a))
return a},
e:function(a){var z
if(a==null)a=new P.em()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fW})
z.name=""}else z.toString=H.fW
return z},
fW:function(){return J.ab(this.dartException)},
p:function(a){throw H.e(a)},
y:function(a){throw H.e(P.aN(a))},
ap:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.mJ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aH(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cP(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.el(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eM()
u=$.$get$eN()
t=$.$get$eO()
s=$.$get$eP()
r=$.$get$eT()
q=$.$get$eU()
p=$.$get$eR()
$.$get$eQ()
o=$.$get$eW()
n=$.$get$eV()
m=v.ac(y)
if(m!=null)return z.$1(H.cP(H.G(y),m))
else{m=u.ac(y)
if(m!=null){m.method="call"
return z.$1(H.cP(H.G(y),m))}else{m=t.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=r.ac(y)
if(m==null){m=q.ac(y)
if(m==null){m=p.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=o.ac(y)
if(m==null){m=n.ac(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.el(H.G(y),m))}}return z.$1(new H.jL(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eA()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aM(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eA()
return a},
bc:function(a){var z
if(a==null)return new H.fl(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fl(a)},
lW:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.p(0,a[y],a[x])}return b},
m7:function(a,b,c,d,e,f){H.f(a,"$iscK")
switch(H.a4(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.u("Unsupported number of arguments for wrapped closure"))},
b8:function(a,b){var z
H.a4(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.m7)
a.$identity=z
return z},
hf:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.L(d).$isb){z.$reflectionInfo=d
x=H.iO(z).r}else x=d
w=e?Object.create(new H.ja().constructor.prototype):Object.create(new H.cD(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.au
if(typeof u!=="number")return u.B()
$.au=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dP(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.lZ,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dI:H.cE
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.e("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dP(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
hc:function(a,b,c,d){var z=H.cE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dP:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.he(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hc(y,!w,z,b)
if(y===0){w=$.au
if(typeof w!=="number")return w.B()
$.au=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bg
if(v==null){v=H.c0("self")
$.bg=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.au
if(typeof w!=="number")return w.B()
$.au=w+1
t+=w
w="return function("+t+"){return this."
v=$.bg
if(v==null){v=H.c0("self")
$.bg=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
hd:function(a,b,c,d){var z,y
z=H.cE
y=H.dI
switch(b?-1:a){case 0:throw H.e(H.iX("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
he:function(a,b){var z,y,x,w,v,u,t,s
z=$.bg
if(z==null){z=H.c0("self")
$.bg=z}y=$.dH
if(y==null){y=H.c0("receiver")
$.dH=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hd(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.au
if(typeof y!=="number")return y.B()
$.au=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.au
if(typeof y!=="number")return y.B()
$.au=y+1
return new Function(z+y+"}")()},
du:function(a,b,c,d,e,f,g){return H.hf(a,b,H.a4(c),d,!!e,!!f,g)},
G:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.as(a,"String"))},
lU:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.as(a,"double"))},
mx:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.as(a,"num"))},
fI:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.as(a,"bool"))},
a4:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.as(a,"int"))},
fS:function(a,b){throw H.e(H.as(a,H.be(H.G(b).substring(3))))},
mz:function(a,b){throw H.e(H.hb(a,H.be(H.G(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.fS(a,b)},
h:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.mz(a,b)},
bZ:function(a){if(a==null)return a
if(!!J.L(a).$isb)return a
throw H.e(H.as(a,"List<dynamic>"))},
fP:function(a,b){var z
if(a==null)return a
z=J.L(a)
if(!!z.$isb)return a
if(z[b])return a
H.fS(a,b)},
fK:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a4(z)]
else return a.$S()}return},
bY:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fK(J.L(a))
if(z==null)return!1
return H.fx(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.dp)return a
$.dp=!0
try{if(H.bY(a,b))return a
z=H.cx(b)
y=H.as(a,z)
throw H.e(y)}finally{$.dp=!1}},
dw:function(a,b){if(a!=null&&!H.dt(a,b))H.p(H.as(a,H.cx(b)))
return a},
fD:function(a){var z,y
z=J.L(a)
if(!!z.$isk){y=H.fK(z)
if(y!=null)return H.cx(y)
return"Closure"}return H.b0(a)},
mG:function(a){throw H.e(new P.hm(H.G(a)))},
fM:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aW:function(a){if(a==null)return
return a.$ti},
ni:function(a,b,c){return H.bd(a["$as"+H.i(c)],H.aW(b))},
bF:function(a,b,c,d){var z
H.G(c)
H.a4(d)
z=H.bd(a["$as"+H.i(c)],H.aW(b))
return z==null?null:z[d]},
ao:function(a,b,c){var z
H.G(b)
H.a4(c)
z=H.bd(a["$as"+H.i(b)],H.aW(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.a4(b)
z=H.aW(a)
return z==null?null:z[b]},
cx:function(a){return H.aV(a,null)},
aV:function(a,b){var z,y
H.j(b,"$isb",[P.n],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.be(a[0].builtin$cls)+H.ds(a,1,b)
if(typeof a=="function")return H.be(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a4(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.i(b[y])}if('func' in a)return H.ly(a,b)
if('futureOr' in a)return"FutureOr<"+H.aV("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ly:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.n]
H.j(b,"$isb",z,"$asb")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.d(b,r)
t=C.c.B(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aV(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aV(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aV(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aV(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.lV(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.G(z[l])
n=n+m+H.aV(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
ds:function(a,b,c){var z,y,x,w,v,u
H.j(c,"$isb",[P.n],"$asb")
if(a==null)return""
z=new P.ai("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aV(u,c)}return"<"+z.i(0)+">"},
bd:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bE:function(a,b,c,d){var z,y
H.G(b)
H.bZ(c)
H.G(d)
if(a==null)return!1
z=H.aW(a)
y=J.L(a)
if(y[b]==null)return!1
return H.fG(H.bd(y[d],z),null,c,null)},
j:function(a,b,c,d){H.G(b)
H.bZ(c)
H.G(d)
if(a==null)return a
if(H.bE(a,b,c,d))return a
throw H.e(H.as(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.be(b.substring(3))+H.ds(c,0,null),init.mangledGlobalNames)))},
fG:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.an(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.an(a[y],b,c[y],d))return!1
return!0},
ng:function(a,b,c){return a.apply(b,H.bd(J.L(b)["$as"+H.i(c)],H.aW(b)))},
fO:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="z"||a===-1||a===-2||H.fO(z)}return!1},
dt:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="z"||b===-1||b===-2||H.fO(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dt(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bY(a,b)}z=J.L(a).constructor
y=H.aW(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.an(z,null,b,null)},
w:function(a,b){if(a!=null&&!H.dt(a,b))throw H.e(H.as(a,H.cx(b)))
return a},
an:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.an(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="z")return!0
if('func' in c)return H.fx(a,b,c,d)
if('func' in a)return c.builtin$cls==="cK"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.an("type" in a?a.type:null,b,x,d)
else if(H.an(a,b,x,d))return!0
else{if(!('$is'+"bk" in y.prototype))return!1
w=y.prototype["$as"+"bk"]
v=H.bd(w,z?a.slice(1):null)
return H.an(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fG(H.bd(r,z),b,u,d)},
fx:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.an(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.an(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.an(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.an(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.mw(m,b,l,d)},
mw:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.an(c[w],d,a[w],b))return!1}return!0},
nh:function(a,b,c){Object.defineProperty(a,H.G(b),{value:c,enumerable:false,writable:true,configurable:true})},
mb:function(a){var z,y,x,w,v,u
z=H.G($.fN.$1(a))
y=$.cs[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cv[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.G($.fF.$2(a,z))
if(z!=null){y=$.cs[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cv[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cw(x)
$.cs[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cv[z]=x
return x}if(v==="-"){u=H.cw(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fR(a,x)
if(v==="*")throw H.e(P.ci(z))
if(init.leafTags[z]===true){u=H.cw(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fR(a,x)},
fR:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dA(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cw:function(a){return J.dA(a,!1,null,!!a.$isaG)},
mv:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cw(z)
else return J.dA(z,c,null,null)},
m5:function(){if(!0===$.dz)return
$.dz=!0
H.m6()},
m6:function(){var z,y,x,w,v,u,t,s
$.cs=Object.create(null)
$.cv=Object.create(null)
H.m1()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fT.$1(v)
if(u!=null){t=H.mv(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
m1:function(){var z,y,x,w,v,u,t
z=C.U()
z=H.b7(C.R,H.b7(C.W,H.b7(C.A,H.b7(C.A,H.b7(C.V,H.b7(C.S,H.b7(C.T(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fN=new H.m2(v)
$.fF=new H.m3(u)
$.fT=new H.m4(t)},
b7:function(a,b){return a(b)||b},
fU:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fV:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hi:{"^":"a;$ti",
i:function(a){return P.cQ(this)},
p:function(a,b,c){H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
return H.hj()},
$isF:1},
hk:{"^":"hi;a,b,c,$ti",
gm:function(a){return this.a},
bv:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j:function(a,b){if(!this.bv(b))return
return this.dt(b)},
dt:function(a){return this.b[H.G(a)]},
S:function(a,b){var z,y,x,w,v
z=H.t(this,1)
H.l(b,{func:1,ret:-1,args:[H.t(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.w(this.dt(v),z))}}},
iN:{"^":"a;a,b,c,d,e,f,r,0x",n:{
iO:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c9(z)
y=z[0]
x=z[1]
return new H.iN(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jx:{"^":"a;a,b,c,d,e,f",
ac:function(a){var z,y,x
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
ax:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jx(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ch:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eS:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iu:{"^":"Z;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
n:{
el:function(a,b){return new H.iu(a,b==null?null:b.method)}}},
hR:{"^":"Z;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
n:{
cP:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hR(a,y,z?null:b.receiver)}}},
jL:{"^":"Z;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
mJ:{"^":"k:16;a",
$1:function(a){if(!!J.L(a).$isZ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fl:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaJ:1},
k:{"^":"a;",
i:function(a){return"Closure '"+H.b0(this).trim()+"'"},
geN:function(){return this},
$iscK:1,
geN:function(){return this}},
eD:{"^":"k;"},
ja:{"^":"eD;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.be(z)+"'"}},
cD:{"^":"eD;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cD))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gV:function(a){var z,y
z=this.c
if(z==null)y=H.bs(this.a)
else y=typeof z!=="object"?J.bH(z):H.bs(z)
return(y^H.bs(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.b0(z)+"'")},
n:{
cE:function(a){return a.a},
dI:function(a){return a.c},
c0:function(a){var z,y,x,w,v
z=new H.cD("self","target","receiver","name")
y=J.c9(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jy:{"^":"Z;a",
i:function(a){return this.a},
n:{
as:function(a,b){return new H.jy("TypeError: "+H.i(P.c4(a))+": type '"+H.fD(a)+"' is not a subtype of type '"+b+"'")}}},
ha:{"^":"Z;a",
i:function(a){return this.a},
n:{
hb:function(a,b){return new H.ha("CastError: "+H.i(P.c4(a))+": type '"+H.fD(a)+"' is not a subtype of type '"+b+"'")}}},
iW:{"^":"Z;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
n:{
iX:function(a){return new H.iW(a)}}},
aQ:{"^":"i7;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gcP:function(){return new H.hY(this,[H.t(this,0)])},
bv:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dn(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dn(y,a)}else return this.j8(a)},
j8:function(a){var z=this.d
if(z==null)return!1
return this.cO(this.c4(z,this.cN(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bm(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bm(w,b)
x=y==null?null:y.b
return x}else return this.j9(b)},
j9:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c4(z,this.cN(a))
x=this.cO(y,a)
if(x<0)return
return y[x].b},
p:function(a,b,c){var z,y
H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ca()
this.b=z}this.df(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ca()
this.c=y}this.df(y,b,c)}else this.ja(b,c)},
ja:function(a,b){var z,y,x,w
H.w(a,H.t(this,0))
H.w(b,H.t(this,1))
z=this.d
if(z==null){z=this.ca()
this.d=z}y=this.cN(a)
x=this.c4(z,y)
if(x==null)this.cj(z,y,[this.cb(a,b)])
else{w=this.cO(x,a)
if(w>=0)x[w].b=b
else x.push(this.cb(a,b))}},
S:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aN(this))
z=z.c}},
df:function(a,b,c){var z
H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
z=this.bm(a,b)
if(z==null)this.cj(a,b,this.cb(b,c))
else z.b=c},
cb:function(a,b){var z,y
z=new H.hX(H.w(a,H.t(this,0)),H.w(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
cN:function(a){return J.bH(a)&0x3ffffff},
cO:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.D(a[y].a,b))return y
return-1},
i:function(a){return P.cQ(this)},
bm:function(a,b){return a[b]},
c4:function(a,b){return a[b]},
cj:function(a,b,c){a[b]=c},
fF:function(a,b){delete a[b]},
dn:function(a,b){return this.bm(a,b)!=null},
ca:function(){var z=Object.create(null)
this.cj(z,"<non-identifier-key>",z)
this.fF(z,"<non-identifier-key>")
return z},
$iseb:1},
hX:{"^":"a;a,b,0c,0d"},
hY:{"^":"hu;a,$ti",
gm:function(a){return this.a.a},
gW:function(a){var z,y
z=this.a
y=new H.hZ(z,z.r,this.$ti)
y.c=z.e
return y}},
hZ:{"^":"a;a,b,0c,0d,$ti",
sde:function(a){this.d=H.w(a,H.t(this,0))},
gJ:function(){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aN(z))
else{z=this.c
if(z==null){this.sde(null)
return!1}else{this.sde(z.a)
this.c=this.c.c
return!0}}},
$isaP:1},
m2:{"^":"k:16;a",
$1:function(a){return this.a(a)}},
m3:{"^":"k:52;a",
$2:function(a,b){return this.a(a,b)}},
m4:{"^":"k:46;a",
$1:function(a){return this.a(H.G(a))}},
hP:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isen:1,
$isiP:1,
n:{
hQ:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.e(P.Q("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
lV:function(a){return J.e6(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
my:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
b5:function(a){return a},
iq:function(a){return new Int8Array(a)},
aL:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.b9(b,a))},
ls:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.e(H.lT(a,b,c))
return b},
cV:{"^":"H;",$iscV:1,$isjz:1,"%":";ArrayBufferView;cU|fh|fi|ir|fj|fk|aZ"},
cU:{"^":"cV;",
gm:function(a){return a.length},
$isaG:1,
$asaG:I.dv},
ir:{"^":"fi;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
p:function(a,b,c){H.lU(c)
H.aL(b,a,a.length)
a[b]=c},
$asc6:function(){return[P.r]},
$asR:function(){return[P.r]},
$iso:1,
$aso:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]},
"%":"Float32Array"},
aZ:{"^":"fk;",
p:function(a,b,c){H.a4(c)
H.aL(b,a,a.length)
a[b]=c},
$asc6:function(){return[P.m]},
$asR:function(){return[P.m]},
$iso:1,
$aso:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}},
mW:{"^":"aZ;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mX:{"^":"aZ;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mY:{"^":"aZ;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mZ:{"^":"aZ;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
n_:{"^":"aZ;",
gm:function(a){return a.length},
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
$isn7:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
ek:{"^":"aZ;",
gm:function(a){return a.length},
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
$isek:1,
$isI:1,
"%":";Uint8Array"},
fh:{"^":"cU+R;"},
fi:{"^":"fh+c6;"},
fj:{"^":"cU+R;"},
fk:{"^":"fj+c6;"}}],["","",,P,{"^":"",
kl:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lF()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b8(new P.kn(z),1)).observe(y,{childList:true})
return new P.km(z,y,x)}else if(self.setImmediate!=null)return P.lG()
return P.lH()},
na:[function(a){self.scheduleImmediate(H.b8(new P.ko(H.l(a,{func:1,ret:-1})),0))},"$1","lF",4,0,10],
nb:[function(a){self.setImmediate(H.b8(new P.kp(H.l(a,{func:1,ret:-1})),0))},"$1","lG",4,0,10],
nc:[function(a){P.d1(C.u,H.l(a,{func:1,ret:-1}))},"$1","lH",4,0,10],
d1:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.e.a3(a.a,1000)
return P.kY(z<0?0:z,b)},
eJ:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.b1]})
z=C.e.a3(a.a,1000)
return P.kZ(z<0?0:z,b)},
lB:function(a,b){if(H.bY(a,{func:1,args:[P.a,P.aJ]}))return H.l(a,{func:1,ret:null,args:[P.a,P.aJ]})
if(H.bY(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.cB(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lA:function(){var z,y
for(;z=$.b6,z!=null;){$.bC=null
y=z.b
$.b6=y
if(y==null)$.bB=null
z.a.$0()}},
nf:[function(){$.dq=!0
try{P.lA()}finally{$.bC=null
$.dq=!1
if($.b6!=null)$.$get$dk().$1(P.fH())}},"$0","fH",0,0,3],
fC:function(a){var z=new P.fa(H.l(a,{func:1,ret:-1}))
if($.b6==null){$.bB=z
$.b6=z
if(!$.dq)$.$get$dk().$1(P.fH())}else{$.bB.b=z
$.bB=z}},
lE:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.b6
if(z==null){P.fC(a)
$.bC=$.bB
return}y=new P.fa(a)
x=$.bC
if(x==null){y.b=z
$.bC=y
$.b6=y}else{y.b=x.b
x.b=y
$.bC=y
if(y.b==null)$.bB=y}},
mA:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.N
if(C.k===y){P.cr(null,null,C.k,a)
return}y.toString
P.cr(null,null,y,H.l(y.cs(a),z))},
eI:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.N
if(y===C.k){y.toString
return P.d1(a,b)}return P.d1(a,H.l(y.cs(b),z))},
ju:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b1]}
H.l(b,z)
y=$.N
if(y===C.k){y.toString
return P.eJ(a,b)}x=y.dR(b,P.b1)
$.N.toString
return P.eJ(a,H.l(x,z))},
cq:function(a,b,c,d,e){var z={}
z.a=d
P.lE(new P.lC(z,e))},
fy:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.N
if(y===c)return d.$0()
$.N=c
z=y
try{y=d.$0()
return y}finally{$.N=z}},
fz:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.w(e,g)
y=$.N
if(y===c)return d.$1(e)
$.N=c
z=y
try{y=d.$1(e)
return y}finally{$.N=z}},
lD:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
y=$.N
if(y===c)return d.$2(e,f)
$.N=c
z=y
try{y=d.$2(e,f)
return y}finally{$.N=z}},
cr:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.k!==c
if(z)d=!(!z||!1)?c.cs(d):c.iB(d,-1)
P.fC(d)},
kn:{"^":"k:22;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
km:{"^":"k:41;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ko:{"^":"k:0;a",
$0:function(){this.a.$0()}},
kp:{"^":"k:0;a",
$0:function(){this.a.$0()}},
fn:{"^":"a;a,0b,c",
fm:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b8(new P.l0(this,b),0),a)
else throw H.e(P.S("`setTimeout()` not found."))},
fn:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b8(new P.l_(this,a,Date.now(),b),0),a)
else throw H.e(P.S("Periodic timer."))},
$isb1:1,
n:{
kY:function(a,b){var z=new P.fn(!0,0)
z.fm(a,b)
return z},
kZ:function(a,b){var z=new P.fn(!1,0)
z.fn(a,b)
return z}}},
l0:{"^":"k:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
l_:{"^":"k:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.f4(w,x)}z.c=y
this.d.$1(z)}},
b4:{"^":"a;0a,b,c,d,e,$ti",
jh:function(a){if(this.c!==6)return!0
return this.b.b.d_(H.l(this.d,{func:1,ret:P.a3,args:[P.a]}),a.a,P.a3,P.a)},
j7:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.bY(z,{func:1,args:[P.a,P.aJ]}))return H.dw(w.jI(z,a.a,a.b,null,y,P.aJ),x)
else return H.dw(w.d_(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aK:{"^":"a;dL:a<,b,0hJ:c<,$ti",
eF:function(a,b,c){var z,y,x,w
z=H.t(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.N
if(y!==C.k){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lB(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aK(0,$.N,[c])
w=b==null?1:3
this.dg(new P.b4(x,w,a,b,[z,c]))
return x},
jN:function(a,b){return this.eF(a,null,b)},
dg:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isb4")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaK")
z=y.a
if(z<4){y.dg(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cr(null,null,z,H.l(new P.kx(this,a),{func:1,ret:-1}))}},
dG:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isb4")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaK")
y=u.a
if(y<4){u.dG(a)
return}this.a=y
this.c=u.c}z.a=this.bp(a)
y=this.b
y.toString
P.cr(null,null,y,H.l(new P.kC(z,this),{func:1,ret:-1}))}},
ce:function(){var z=H.f(this.c,"$isb4")
this.c=null
return this.bp(z)},
bp:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dj:function(a){var z,y,x
z=H.t(this,0)
H.dw(a,{futureOr:1,type:z})
y=this.$ti
if(H.bE(a,"$isbk",y,"$asbk"))if(H.bE(a,"$isaK",y,null))P.fd(a,this)
else P.ky(a,this)
else{x=this.ce()
H.w(a,z)
this.a=4
this.c=a
P.bx(this,x)}},
dk:function(a,b){var z
H.f(b,"$isaJ")
z=this.ce()
this.a=8
this.c=new P.ag(a,b)
P.bx(this,z)},
$isbk:1,
n:{
ky:function(a,b){var z,y,x
b.a=1
try{a.eF(new P.kz(b),new P.kA(b),null)}catch(x){z=H.ap(x)
y=H.bc(x)
P.mA(new P.kB(b,z,y))}},
fd:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaK")
if(z>=4){y=b.ce()
b.a=a.a
b.c=a.c
P.bx(b,y)}else{y=H.f(b.c,"$isb4")
b.a=2
b.c=a
a.dG(y)}},
bx:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isag")
y=y.b
u=v.a
t=v.b
y.toString
P.cq(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.f(r,"$isag")
y=y.b
u=r.a
t=r.b
y.toString
P.cq(null,null,y,u,t)
return}o=$.N
if(o==null?q!=null:o!==q)$.N=q
else o=null
y=b.c
if(y===8)new P.kF(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kE(x,b,r).$0()}else if((y&2)!==0)new P.kD(z,x,b).$0()
if(o!=null)$.N=o
y=x.b
if(!!J.L(y).$isbk){if(y.a>=4){n=H.f(t.c,"$isb4")
t.c=null
b=t.bp(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fd(y,t)
return}}m=b.b
n=H.f(m.c,"$isb4")
m.c=null
b=m.bp(n)
y=x.a
u=x.b
if(!y){H.w(u,H.t(m,0))
m.a=4
m.c=u}else{H.f(u,"$isag")
m.a=8
m.c=u}z.a=m
y=m}}}},
kx:{"^":"k:0;a,b",
$0:function(){P.bx(this.a,this.b)}},
kC:{"^":"k:0;a,b",
$0:function(){P.bx(this.b,this.a.a)}},
kz:{"^":"k:22;a",
$1:function(a){var z=this.a
z.a=0
z.dj(a)}},
kA:{"^":"k:53;a",
$2:function(a,b){this.a.dk(a,H.f(b,"$isaJ"))},
$1:function(a){return this.$2(a,null)}},
kB:{"^":"k:0;a,b,c",
$0:function(){this.a.dk(this.b,this.c)}},
kF:{"^":"k:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eD(H.l(w.d,{func:1}),null)}catch(v){y=H.ap(v)
x=H.bc(v)
if(this.d){w=H.f(this.a.a.c,"$isag").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isag")
else u.b=new P.ag(y,x)
u.a=!0
return}if(!!J.L(z).$isbk){if(z instanceof P.aK&&z.gdL()>=4){if(z.gdL()===8){w=this.b
w.b=H.f(z.ghJ(),"$isag")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.jN(new P.kG(t),null)
w.a=!1}}},
kG:{"^":"k:32;a",
$1:function(a){return this.a}},
kE:{"^":"k:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.w(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.d_(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ap(t)
y=H.bc(t)
x=this.a
x.b=new P.ag(z,y)
x.a=!0}}},
kD:{"^":"k:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isag")
w=this.c
if(w.jh(z)&&w.e!=null){v=this.b
v.b=w.j7(z)
v.a=!1}}catch(u){y=H.ap(u)
x=H.bc(u)
w=H.f(this.a.a.c,"$isag")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ag(y,x)
s.a=!0}}},
fa:{"^":"a;a,0b"},
jb:{"^":"a;$ti",
gm:function(a){var z,y,x,w
z={}
y=new P.aK(0,$.N,[P.m])
z.a=0
x=H.t(this,0)
w=H.l(new P.jd(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.je(z,y),{func:1,ret:-1})
W.U(this.a,this.b,w,!1,x)
return y}},
jd:{"^":"k;a,b",
$1:function(a){H.w(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.t(this.b,0)]}}},
je:{"^":"k:0;a,b",
$0:function(){this.b.dj(this.a.a)}},
d_:{"^":"a;$ti"},
jc:{"^":"a;"},
b1:{"^":"a;"},
ag:{"^":"a;a,b",
i:function(a){return H.i(this.a)},
$isZ:1},
lq:{"^":"a;",$isn9:1},
lC:{"^":"k:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.em()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
kR:{"^":"lq;",
jJ:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.k===$.N){a.$0()
return}P.fy(null,null,this,a,-1)}catch(x){z=H.ap(x)
y=H.bc(x)
P.cq(null,null,this,z,H.f(y,"$isaJ"))}},
jK:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.k===$.N){a.$1(b)
return}P.fz(null,null,this,a,b,-1,c)}catch(x){z=H.ap(x)
y=H.bc(x)
P.cq(null,null,this,z,H.f(y,"$isaJ"))}},
iB:function(a,b){return new P.kT(this,H.l(a,{func:1,ret:b}),b)},
cs:function(a){return new P.kS(this,H.l(a,{func:1,ret:-1}))},
dR:function(a,b){return new P.kU(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eD:function(a,b){H.l(a,{func:1,ret:b})
if($.N===C.k)return a.$0()
return P.fy(null,null,this,a,b)},
d_:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.N===C.k)return a.$1(b)
return P.fz(null,null,this,a,b,c,d)},
jI:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.N===C.k)return a.$2(b,c)
return P.lD(null,null,this,a,b,c,d,e,f)}},
kT:{"^":"k;a,b,c",
$0:function(){return this.a.eD(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kS:{"^":"k:3;a,b",
$0:function(){return this.a.jJ(this.b)}},
kU:{"^":"k;a,b,c",
$1:function(a){var z=this.c
return this.a.jK(this.b,H.w(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i_:function(a,b,c,d,e){return new H.aQ(0,0,[d,e])},
i1:function(a,b,c){H.bZ(a)
return H.j(H.lW(a,new H.aQ(0,0,[b,c])),"$iseb",[b,c],"$aseb")},
i0:function(a,b){return new H.aQ(0,0,[a,b])},
i3:function(a,b,c,d){return new P.kL(0,0,[d])},
hM:function(a,b,c){var z,y
if(P.dr(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bD()
C.a.h(y,a)
try{P.lz(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.eB(b,H.fP(z,"$iso"),", ")+c
return y.charCodeAt(0)==0?y:y},
cM:function(a,b,c){var z,y,x
if(P.dr(a))return b+"..."+c
z=new P.ai(b)
y=$.$get$bD()
C.a.h(y,a)
try{x=z
x.a=P.eB(x.gaE(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaE()+c
y=z.gaE()
return y.charCodeAt(0)==0?y:y},
dr:function(a){var z,y
for(z=0;y=$.$get$bD(),z<y.length;++z)if(a===y[z])return!0
return!1},
lz:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gW(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.i(z.gJ())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gJ();++x
if(!z.E()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gJ();++x
for(;z.E();t=s,s=r){r=z.gJ();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.i(t)
v=H.i(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
ec:function(a,b,c){var z=P.i_(null,null,null,b,c)
a.S(0,new P.i2(z,b,c))
return z},
cQ:function(a){var z,y,x
z={}
if(P.dr(a))return"{...}"
y=new P.ai("")
try{C.a.h($.$get$bD(),a)
x=y
x.a=x.gaE()+"{"
z.a=!0
a.S(0,new P.i8(z,y))
z=y
z.a=z.gaE()+"}"}finally{z=$.$get$bD()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaE()
return z.charCodeAt(0)==0?z:z},
kL:{"^":"kH;a,0b,0c,0d,0e,0f,r,$ti",
gW:function(a){return P.ff(this,this.r,H.t(this,0))},
gm:function(a){return this.a},
h:function(a,b){var z
H.w(b,H.t(this,0))
if(typeof b==="number"&&(b&0x3ffffff)===b){z=this.c
if(z==null){z=P.fg()
this.c=z}return this.fB(z,b)}else return this.fo(b)},
fo:function(a){var z,y,x
H.w(a,H.t(this,0))
z=this.d
if(z==null){z=P.fg()
this.d=z}y=this.dl(a)
x=z[y]
if(x==null)z[y]=[this.c0(a)]
else{if(this.du(x,a)>=0)return!1
x.push(this.c0(a))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.hB(this.c,b)
else return this.hA(b)},
hA:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.fO(z,a)
x=this.du(y,a)
if(x<0)return!1
this.dN(y.splice(x,1)[0])
return!0},
fB:function(a,b){H.w(b,H.t(this,0))
if(H.f(a[b],"$isdl")!=null)return!1
a[b]=this.c0(b)
return!0},
hB:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdl")
if(z==null)return!1
this.dN(z)
delete a[b]
return!0},
dB:function(){this.r=this.r+1&67108863},
c0:function(a){var z,y
z=new P.dl(H.w(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dB()
return z},
dN:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dB()},
dl:function(a){return J.bH(a)&0x3ffffff},
fO:function(a,b){return a[this.dl(b)]},
du:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(a[y].a==b)return y
return-1},
n:{
fg:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dl:{"^":"a;a,0b,0c"},
kM:{"^":"a;a,b,0c,0d,$ti",
sdi:function(a){this.d=H.w(a,H.t(this,0))},
gJ:function(){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aN(z))
else{z=this.c
if(z==null){this.sdi(null)
return!1}else{this.sdi(H.w(z.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
$isaP:1,
n:{
ff:function(a,b,c){var z=new P.kM(a,b,[c])
z.c=a.e
return z}}},
kH:{"^":"iY;"},
i2:{"^":"k:6;a,b,c",
$2:function(a,b){this.a.p(0,H.w(a,this.b),H.w(b,this.c))}},
ca:{"^":"kN;",$iso:1,$isb:1},
R:{"^":"a;$ti",
gW:function(a){return new H.ed(a,this.gm(a),0,[H.bF(this,a,"R",0)])},
ab:function(a,b){return this.j(a,b)},
S:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.bF(this,a,"R",0)]})
z=this.gm(a)
for(y=0;y<z;++y){b.$1(this.j(a,y))
if(z!==this.gm(a))throw H.e(P.aN(a))}},
jQ:function(a,b){var z,y
z=H.c([],[H.bF(this,a,"R",0)])
C.a.sm(z,this.gm(a))
for(y=0;y<this.gm(a);++y)C.a.p(z,y,this.j(a,y))
return z},
jP:function(a){return this.jQ(a,!0)},
j0:function(a,b,c,d){var z
H.w(d,H.bF(this,a,"R",0))
P.aS(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.p(a,z,d)},
i:function(a){return P.cM(a,"[","]")}},
i7:{"^":"i9;"},
i8:{"^":"k:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
i9:{"^":"a;$ti",
S:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
for(z=this.gcP(),z=z.gW(z);z.E();){y=z.gJ()
b.$2(y,this.j(0,y))}},
gm:function(a){var z=this.gcP()
return z.gm(z)},
i:function(a){return P.cQ(this)},
$isF:1},
l3:{"^":"a;$ti",
p:function(a,b,c){H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
throw H.e(P.S("Cannot modify unmodifiable map"))}},
ia:{"^":"a;$ti",
j:function(a,b){return this.a.j(0,b)},
p:function(a,b,c){this.a.p(0,H.w(b,H.t(this,0)),H.w(c,H.t(this,1)))},
S:function(a,b){this.a.S(0,H.l(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gm:function(a){var z=this.a
return z.gm(z)},
i:function(a){return J.ab(this.a)},
$isF:1},
eX:{"^":"l4;a,$ti"},
j_:{"^":"a;$ti",
i:function(a){return P.cM(this,"{","}")},
ab:function(a,b){var z,y,x
if(b<0)H.p(P.X(b,0,null,"index",null))
for(z=P.ff(this,this.r,H.t(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.e(P.bl(b,this,"index",null,y))},
$iso:1,
$isey:1},
iY:{"^":"j_;"},
kN:{"^":"a+R;"},
l4:{"^":"ia+l3;$ti"}}],["","",,P,{"^":"",h6:{"^":"bK;a",
jj:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.aS(b,c,a.length,null,null,null)
z=$.$get$fb()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.c.H(a,y)
if(r===37){q=s+2
if(q<=c){p=H.cu(C.c.H(a,s))
o=H.cu(C.c.H(a,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.d(z,n)
m=z[n]
if(m>=0){n=C.c.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ai("")
l=w.a+=C.c.q(a,x,y)
w.a=l+H.bU(r)
x=s
continue}}throw H.e(P.Q("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.c.q(a,x,c)
k=l.length
if(v>=0)P.dG(a,u,c,v,t,k)
else{j=C.e.am(k-1,4)+1
if(j===1)throw H.e(P.Q("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.c.aP(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.dG(a,u,c,v,t,i)
else{j=C.e.am(i,4)
if(j===1)throw H.e(P.Q("Invalid base64 encoding length ",a,c))
if(j>1)a=C.c.aP(a,c,c,j===2?"==":"=")}return a},
$asbK:function(){return[[P.b,P.m],P.n]},
n:{
dG:function(a,b,c,d,e,f){if(C.e.am(f,4)!==0)throw H.e(P.Q("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.Q("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.Q("Invalid base64 padding, more than two '=' characters",a,b))}}},h7:{"^":"bh;a",
$asbh:function(){return[[P.b,P.m],P.n]}},bK:{"^":"a;$ti"},bh:{"^":"jc;$ti"},hw:{"^":"bK;",
$asbK:function(){return[P.n,[P.b,P.m]]}},jZ:{"^":"hw;a",
gj_:function(){return C.N}},k5:{"^":"bh;",
b_:function(a,b,c){var z,y,x,w
z=a.length
P.aS(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lp(0,0,x)
if(w.fN(a,b,z)!==z)w.dO(J.h0(a,z-1),0)
return new Uint8Array(x.subarray(0,H.ls(0,w.b,x.length)))},
cB:function(a){return this.b_(a,0,null)},
$asbh:function(){return[P.n,[P.b,P.m]]}},lp:{"^":"a;a,b,c",
dO:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.d(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.d(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.d(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.d(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.d(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.d(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.d(z,y)
z[y]=128|a&63
return!1}},
fN:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.Z(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dO(w,C.c.H(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.d(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.d(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.d(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.d(z,v)
z[v]=128|w&63}}return x}},k_:{"^":"bh;a",
b_:function(a,b,c){var z,y,x,w,v
H.j(a,"$isb",[P.m],"$asb")
z=P.k0(!1,a,b,c)
if(z!=null)return z
y=J.aF(a)
P.aS(b,c,y,null,null,null)
x=new P.ai("")
w=new P.lm(!1,x,!0,0,0,0)
w.b_(a,b,y)
if(w.e>0){H.p(P.Q("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.bU(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
cB:function(a){return this.b_(a,0,null)},
$asbh:function(){return[[P.b,P.m],P.n]},
n:{
k0:function(a,b,c,d){H.j(b,"$isb",[P.m],"$asb")
if(b instanceof Uint8Array)return P.k1(!1,b,c,d)
return},
k1:function(a,b,c,d){var z,y,x
z=$.$get$f0()
if(z==null)return
y=0===c
if(y&&!0)return P.df(z,b)
x=b.length
d=P.aS(c,d,x,null,null,null)
if(y&&d===x)return P.df(z,b)
return P.df(z,b.subarray(c,d))},
df:function(a,b){if(P.k3(b))return
return P.k4(a,b)},
k4:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ap(y)}return},
k3:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
k2:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ap(y)}return}}},lm:{"^":"a;a,b,c,d,e,f",
b_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(a,"$isb",[P.m],"$asb")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lo(c)
v=new P.ln(this,b,c,a)
$label0$0:for(u=J.bb(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bS()
if((r&192)!==128){q=P.Q("Bad UTF-8 encoding 0x"+C.e.bf(r,16),a,s)
throw H.e(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.D,q)
if(z<=C.D[q]){q=P.Q("Overlong encoding of 0x"+C.e.bf(z,16),a,s-x-1)
throw H.e(q)}if(z>1114111){q=P.Q("Character outside valid Unicode range: 0x"+C.e.bf(z,16),a,s-x-1)
throw H.e(q)}if(!this.c||z!==65279)t.a+=H.bU(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.bW()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.Q("Negative UTF-8 code unit: -0x"+C.e.bf(-r,16),a,n-1)
throw H.e(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.Q("Bad UTF-8 encoding 0x"+C.e.bf(r,16),a,n-1)
throw H.e(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lo:{"^":"k:31;a",
$2:function(a,b){var z,y,x,w
H.j(a,"$isb",[P.m],"$asb")
z=this.a
for(y=J.bb(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bS()
if((w&127)!==w)return x-b}return z-b}},ln:{"^":"k:24;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.bW(this.d,a,b)}}}],["","",,P,{"^":"",
bG:function(a,b,c){var z
H.l(b,{func:1,ret:P.m,args:[P.n]})
z=H.iH(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.e(P.Q(a,null,null))},
hy:function(a){if(a instanceof H.k)return a.i(0)
return"Instance of '"+H.b0(a)+"'"},
i4:function(a,b,c,d){var z,y
H.w(b,d)
z=J.hN(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.p(z,y,b)
return H.j(z,"$isb",[d],"$asb")},
ee:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gW(a);x.E();)C.a.h(y,H.w(x.gJ(),c))
if(b)return y
return H.j(J.c9(y),"$isb",z,"$asb")},
bW:function(a,b,c){var z,y
z=P.m
H.j(a,"$iso",[z],"$aso")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.j(a,"$isaX",[z],"$asaX")
y=a.length
c=P.aS(b,c,y,null,null,null)
return H.et(b>0||c<y?C.a.f_(a,b,c):a)}if(!!J.L(a).$isek)return H.iJ(a,b,P.aS(b,c,a.length,null,null,null))
return P.jf(a,b,c)},
jf:function(a,b,c){var z,y,x,w
H.j(a,"$iso",[P.m],"$aso")
if(b<0)throw H.e(P.X(b,0,J.aF(a),null,null))
z=c==null
if(!z&&c<b)throw H.e(P.X(c,b,J.aF(a),null,null))
y=J.bI(a)
for(x=0;x<b;++x)if(!y.E())throw H.e(P.X(b,0,x,null,null))
w=[]
if(z)for(;y.E();)w.push(y.gJ())
else for(x=b;x<c;++x){if(!y.E())throw H.e(P.X(c,b,x,null,null))
w.push(y.gJ())}return H.et(w)},
iQ:function(a,b,c){return new H.hP(a,H.hQ(a,!1,!0,!1))},
cj:function(){var z=H.iz()
if(z!=null)return P.jR(z,0,null)
throw H.e(P.S("'Uri.base' is not supported"))},
c4:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ab(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hy(a)},
u:function(a){return new P.fc(a)},
i5:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.m]})
z=H.c([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.p(z,y,b.$1(y))
return z},
dC:function(a){H.my(a)},
jR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.c.H(a,b+4)^58)*3|C.c.H(a,b)^100|C.c.H(a,b+1)^97|C.c.H(a,b+2)^116|C.c.H(a,b+3)^97)>>>0
if(y===0)return P.eY(b>0||c<c?C.c.q(a,b,c):a,5,null).geK()
else if(y===32)return P.eY(C.c.q(a,z,c),0,null).geK()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.m])
C.a.p(w,0,0)
x=b-1
C.a.p(w,1,x)
C.a.p(w,2,x)
C.a.p(w,7,x)
C.a.p(w,3,b)
C.a.p(w,4,b)
C.a.p(w,5,c)
C.a.p(w,6,c)
if(P.fA(a,b,c,0,w)>=14)C.a.p(w,7,c)
v=w[1]
if(typeof v!=="number")return v.jY()
if(v>=b)if(P.fA(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.B()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.P()
if(typeof r!=="number")return H.v(r)
if(q<r)r=q
if(typeof s!=="number")return s.P()
if(s<u)s=r
else if(s<=v)s=v+1
if(typeof t!=="number")return t.P()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.P()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.c.a9(a,"..",s)))n=r>s+2&&C.c.a9(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.c.a9(a,"file",b)){if(u<=b){if(!C.c.a9(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.c.q(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.c.aP(a,s,r,"/");++r;++q;++c}else{a=C.c.q(a,b,s)+"/"+C.c.q(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.c.a9(a,"http",b)){if(x&&t+3===s&&C.c.a9(a,"80",t+1))if(b===0&&!0){a=C.c.aP(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.c.q(a,b,t)+C.c.q(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.c.a9(a,"https",b)){if(x&&t+4===s&&C.c.a9(a,"443",t+1))if(b===0&&!0){a=C.c.aP(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.c.q(a,b,t)+C.c.q(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.c.q(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.kV(a,v,u,t,s,r,q,o)}return P.l5(a,b,c,v,u,t,s,r,q,o)},
f_:function(a,b){var z=P.n
return C.a.j3(H.c(a.split("&"),[z]),P.i0(z,z),new P.jU(b),[P.F,P.n,P.n])},
jP:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jQ(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.c.Z(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.bG(C.c.q(a,v,w),null,null)
if(typeof s!=="number")return s.bW()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.bG(C.c.q(a,v,c),null,null)
if(typeof s!=="number")return s.bW()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
eZ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jS(a)
y=new P.jT(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.c.Z(a,w)
if(s===58){if(w===b){++w
if(C.c.Z(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gay(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jP(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.e.aH(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
lt:function(){var z,y,x,w,v
z=P.i5(22,new P.lv(),!0,P.I)
y=new P.lu(z)
x=new P.lw()
w=new P.lx()
v=H.f(y.$2(0,225),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(14,225),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(15,225),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(1,225),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(2,235),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(3,235),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(4,229),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(5,229),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(6,231),"$isI")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(7,231),"$isI")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.f(y.$2(8,8),"$isI"),"]",5)
v=H.f(y.$2(9,235),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(16,235),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(17,235),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(10,235),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(18,235),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(19,235),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(11,235),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(12,236),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.f(y.$2(13,237),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.f(y.$2(20,245),"$isI"),"az",21)
v=H.f(y.$2(21,245),"$isI")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fA:function(a,b,c,d,e){var z,y,x,w,v
H.j(e,"$isb",[P.m],"$asb")
z=$.$get$fB()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.d(z,d)
x=z[d]
w=C.c.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.d(x,w)
v=x[w]
d=v&31
C.a.p(e,v>>>5,y)}return d},
a3:{"^":"a;"},
"+bool":0,
ah:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.ah))return!1
return this.a===b.a&&!0},
gV:function(a){var z=this.a
return(z^C.e.aH(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.hn(H.iG(this))
y=P.bL(H.iE(this))
x=P.bL(H.iA(this))
w=P.bL(H.iB(this))
v=P.bL(H.iD(this))
u=P.bL(H.iF(this))
t=P.ho(H.iC(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
n:{
hn:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
ho:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bL:function(a){if(a>=10)return""+a
return"0"+a}}},
r:{"^":"af;"},
"+double":0,
bi:{"^":"a;a",
P:function(a,b){return C.e.P(this.a,H.f(b,"$isbi").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.bi))return!1
return this.a===b.a},
gV:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ht()
y=this.a
if(y<0)return"-"+new P.bi(0-y).i(0)
x=z.$1(C.e.a3(y,6e7)%60)
w=z.$1(C.e.a3(y,1e6)%60)
v=new P.hs().$1(y%1e6)
return""+C.e.a3(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
n:{
e_:function(a,b,c,d,e,f){return new P.bi(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hs:{"^":"k:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ht:{"^":"k:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Z:{"^":"a;"},
em:{"^":"Z;",
i:function(a){return"Throw of null."}},
aM:{"^":"Z;a,b,c,d",
gc2:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc1:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gc2()+y+x
if(!this.a)return w
v=this.gc1()
u=P.c4(this.b)
return w+v+": "+H.i(u)},
n:{
bJ:function(a){return new P.aM(!1,null,null,a)},
cB:function(a,b,c){return new P.aM(!0,a,b,c)}}},
cd:{"^":"aM;e,f,a,b,c,d",
gc2:function(){return"RangeError"},
gc1:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
n:{
bV:function(a,b,c){return new P.cd(null,null,!0,a,b,"Value not in range")},
X:function(a,b,c,d,e){return new P.cd(b,c,!0,a,d,"Invalid value")},
aS:function(a,b,c,d,e,f){if(typeof a!=="number")return H.v(a)
if(0>a||a>c)throw H.e(P.X(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.X(b,a,c,"end",f))
return b}return c}}},
hK:{"^":"aM;e,m:f>,a,b,c,d",
gc2:function(){return"RangeError"},
gc1:function(){if(J.fX(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
n:{
bl:function(a,b,c,d,e){var z=H.a4(e!=null?e:J.aF(b))
return new P.hK(b,z,!0,a,c,"Index out of range")}}},
jN:{"^":"Z;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
S:function(a){return new P.jN(a)}}},
jK:{"^":"Z;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
ci:function(a){return new P.jK(a)}}},
j9:{"^":"Z;a",
i:function(a){return"Bad state: "+this.a}},
hh:{"^":"Z;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.c4(z))+"."},
n:{
aN:function(a){return new P.hh(a)}}},
iv:{"^":"a;",
i:function(a){return"Out of Memory"},
$isZ:1},
eA:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isZ:1},
hm:{"^":"Z;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fc:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hE:{"^":"a;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.i(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.c.q(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.c.H(w,s)
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
m=""}l=C.c.q(w,o,p)
return y+n+l+m+"\n"+C.c.k(" ",x-o+n.length)+"^\n"},
n:{
Q:function(a,b,c){return new P.hE(a,b,c)}}},
m:{"^":"af;"},
"+int":0,
o:{"^":"a;$ti",
gm:function(a){var z,y
z=this.gW(this)
for(y=0;z.E();)++y
return y},
ab:function(a,b){var z,y,x
if(b<0)H.p(P.X(b,0,null,"index",null))
for(z=this.gW(this),y=0;z.E();){x=z.gJ()
if(b===y)return x;++y}throw H.e(P.bl(b,this,"index",null,y))},
i:function(a){return P.hM(this,"(",")")}},
aP:{"^":"a;$ti"},
b:{"^":"a;$ti",$iso:1},
"+List":0,
F:{"^":"a;$ti"},
z:{"^":"a;",
gV:function(a){return P.a.prototype.gV.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
af:{"^":"a;"},
"+num":0,
a:{"^":";",
t:function(a,b){return this===b},
gV:function(a){return H.bs(this)},
i:function(a){return"Instance of '"+H.b0(this)+"'"},
toString:function(){return this.i(this)}},
aJ:{"^":"a;"},
n:{"^":"a;",$isen:1},
"+String":0,
ai:{"^":"a;aE:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isn3:1,
n:{
eB:function(a,b,c){var z=J.bI(b)
if(!z.E())return a
if(c.length===0){do a+=H.i(z.gJ())
while(z.E())}else{a+=H.i(z.gJ())
for(;z.E();)a=a+c+H.i(z.gJ())}return a}}},
jU:{"^":"k:26;a",
$2:function(a,b){var z,y,x,w
z=P.n
H.j(a,"$isF",[z,z],"$asF")
H.G(b)
y=J.dx(b).ep(b,"=")
if(y===-1){if(b!=="")a.p(0,P.dn(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.c.q(b,0,y)
w=C.c.az(b,y+1)
z=this.a
a.p(0,P.dn(x,0,x.length,z,!0),P.dn(w,0,w.length,z,!0))}return a}},
jQ:{"^":"k:40;a",
$2:function(a,b){throw H.e(P.Q("Illegal IPv4 address, "+a,this.a,b))}},
jS:{"^":"k:28;a",
$2:function(a,b){throw H.e(P.Q("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jT:{"^":"k:27;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.bG(C.c.q(this.b,a,b),null,16)
if(typeof z!=="number")return z.P()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cn:{"^":"a;bX:a<,b,c,d,ez:e>,f,r,0x,0y,0z,0Q,0ch",
shy:function(a){var z=P.n
this.Q=H.j(a,"$isF",[z,z],"$asF")},
geM:function(){return this.b},
gcM:function(a){var z=this.c
if(z==null)return""
if(C.c.a8(z,"["))return C.c.q(z,1,z.length-1)
return z},
gbM:function(a){var z=this.d
if(z==null)return P.fp(this.a)
return z},
gcW:function(){var z=this.f
return z==null?"":z},
gek:function(){var z=this.r
return z==null?"":z},
cZ:function(a,b,c,d,e,f,g,h,i){var z,y,x
H.j(g,"$isF",[P.n,null],"$asF")
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
if(x&&!C.c.a8(c,"/"))c="/"+c
f=P.dm(f,0,0,g)
return new P.cn(h,i,b,e,c,f,this.r)},
cY:function(a){return this.cZ(null,null,null,null,null,null,a,null,null)},
gbc:function(){var z,y
if(this.Q==null){z=this.f
y=P.n
this.shy(new P.eX(P.f_(z==null?"":z,C.m),[y,y]))}return this.Q},
gel:function(){return this.c!=null},
geo:function(){return this.f!=null},
gem:function(){return this.r!=null},
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
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!!J.L(b).$isde){if(this.a==b.gbX())if(this.c!=null===b.gel())if(this.b==b.geM())if(this.gcM(this)==b.gcM(b))if(this.gbM(this)==b.gbM(b))if(this.e===b.gez(b)){z=this.f
y=z==null
if(!y===b.geo()){if(y)z=""
if(z===b.gcW()){z=this.r
y=z==null
if(!y===b.gem()){if(y)z=""
z=z===b.gek()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
gV:function(a){var z=this.z
if(z==null){z=C.c.gV(this.i(0))
this.z=z}return z},
$isde:1,
n:{
co:function(a,b,c,d){var z,y,x,w,v,u
H.j(a,"$isb",[P.m],"$asb")
if(c===C.m){z=$.$get$fu().b
if(typeof b!=="string")H.p(H.a9(b))
z=z.test(b)}else z=!1
if(z)return b
H.w(b,H.ao(c,"bK",0))
y=c.gj_().cB(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bU(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
l5:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lg(a,b,d)
else{if(d===b)P.by(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lh(a,z,e-1):""
x=P.la(a,e,f,!1)
if(typeof f!=="number")return f.B()
w=f+1
if(typeof g!=="number")return H.v(g)
v=w<g?P.ld(P.bG(C.c.q(a,w,g),new P.l6(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lb(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.P()
t=h<i?P.dm(a,h+1,i,null):null
return new P.cn(j,y,x,v,u,t,i<c?P.l9(a,i+1,c):null)},
fp:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
by:function(a,b,c){throw H.e(P.Q(c,a,b))},
ld:function(a,b){if(a!=null&&a===P.fp(b))return
return a},
la:function(a,b,c,d){var z,y
if(b===c)return""
if(C.c.Z(a,b)===91){if(typeof c!=="number")return c.G()
z=c-1
if(C.c.Z(a,z)!==93)P.by(a,b,"Missing end `]` to match `[` in host")
P.eZ(a,b+1,z)
return C.c.q(a,b,c).toLowerCase()}if(typeof c!=="number")return H.v(c)
y=b
for(;y<c;++y)if(C.c.Z(a,y)===58){P.eZ(a,b,c)
return"["+a+"]"}return P.lj(a,b,c)},
lj:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.v(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.c.Z(a,z)
if(v===37){u=P.fw(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ai("")
s=C.c.q(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.c.q(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.d(C.E,t)
t=(C.E[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ai("")
if(y<z){x.a+=C.c.q(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.p,t)
t=(C.p[t]&1<<(v&15))!==0}else t=!1
if(t)P.by(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.c.Z(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ai("")
s=C.c.q(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fq(v)
z+=q
y=z}}}}if(x==null)return C.c.q(a,b,c)
if(y<c){s=C.c.q(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lg:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fs(C.c.H(a,b)))P.by(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.c.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.r,w)
w=(C.r[w]&1<<(x&15))!==0}else w=!1
if(!w)P.by(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.c.q(a,b,c)
return P.l7(y?a.toLowerCase():a)},
l7:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lh:function(a,b,c){return P.bz(a,b,c,C.Z,!1)},
lb:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bz(a,b,c,C.F,!0):C.o.kE(d,new P.lc(),P.n).D(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.c.a8(w,"/"))w="/"+w
return P.li(w,e,f)},
li:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.c.a8(a,"/"))return P.lk(a,!z||c)
return P.ll(a)},
dm:function(a,b,c,d){var z,y
z={}
H.j(d,"$isF",[P.n,null],"$asF")
if(a!=null){if(d!=null)throw H.e(P.bJ("Both query and queryParameters specified"))
return P.bz(a,b,c,C.q,!0)}if(d==null)return
y=new P.ai("")
z.a=""
d.S(0,new P.le(new P.lf(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
l9:function(a,b,c){return P.bz(a,b,c,C.q,!0)},
fw:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.c.Z(a,b+1)
x=C.c.Z(a,z)
w=H.cu(y)
v=H.cu(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.aH(u,4)
if(z>=8)return H.d(C.t,z)
z=(C.t[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bU(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.c.q(a,b,b+3).toUpperCase()
return},
fq:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.m])
C.a.p(y,0,37)
C.a.p(y,1,C.c.H("0123456789ABCDEF",a>>>4))
C.a.p(y,2,C.c.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.e.hR(a,6*w)&63|x
C.a.p(y,v,37)
C.a.p(y,v+1,C.c.H("0123456789ABCDEF",u>>>4))
C.a.p(y,v+2,C.c.H("0123456789ABCDEF",u&15))
v+=3}}return P.bW(y,0,null)},
bz:function(a,b,c,d,e){var z=P.fv(a,b,c,H.j(d,"$isb",[P.m],"$asb"),e)
return z==null?C.c.q(a,b,c):z},
fv:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.j(d,"$isb",[P.m],"$asb")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.P()
if(typeof c!=="number")return H.v(c)
if(!(y<c))break
c$0:{v=C.c.Z(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.d(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fw(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.p,u)
u=(C.p[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.by(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.c.Z(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fq(v)}}if(w==null)w=new P.ai("")
w.a+=C.c.q(a,x,y)
w.a+=H.i(t)
if(typeof s!=="number")return H.v(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.P()
if(x<c)w.a+=C.c.q(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
ft:function(a){if(C.c.a8(a,"."))return!0
return C.c.ep(a,"/.")!==-1},
ll:function(a){var z,y,x,w,v,u,t
if(!P.ft(a))return a
z=H.c([],[P.n])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.D(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.D(z,"/")},
lk:function(a,b){var z,y,x,w,v,u
if(!P.ft(a))return!b?P.fr(a):a
z=H.c([],[P.n])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gay(z)!==".."){if(0>=z.length)return H.d(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.d(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gay(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.d(z,0)
C.a.p(z,0,P.fr(z[0]))}return C.a.D(z,"/")},
fr:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fs(J.h_(a,0)))for(y=1;y<z;++y){x=C.c.H(a,y)
if(x===58)return C.c.q(a,0,y)+"%3A"+C.c.az(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.r,w)
w=(C.r[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
l8:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.c.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.e(P.bJ("Invalid URL encoding"))}}return z},
dn:function(a,b,c,d,e){var z,y,x,w,v
y=b
while(!0){if(!(y<c)){z=!0
break}x=C.c.H(a,y)
if(x<=127)if(x!==37)w=x===43
else w=!0
else w=!0
if(w){z=!1
break}++y}if(z){if(C.m!==d)w=!1
else w=!0
if(w)return C.c.q(a,b,c)
else v=new H.Y(C.c.q(a,b,c))}else{v=H.c([],[P.m])
for(w=a.length,y=b;y<c;++y){x=C.c.H(a,y)
if(x>127)throw H.e(P.bJ("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.e(P.bJ("Truncated URI"))
C.a.h(v,P.l8(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.j(v,"$isb",[P.m],"$asb")
return new P.k_(!1).cB(v)},
fs:function(a){var z=a|32
return 97<=z&&z<=122}}},
l6:{"^":"k:23;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.B()
throw H.e(P.Q("Invalid port",this.a,z+1))}},
lc:{"^":"k:33;",
$1:function(a){return P.co(C.a0,a,C.m,!1)}},
lf:{"^":"k:37;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.i(P.co(C.t,a,C.m,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.i(P.co(C.t,b,C.m,!0))}}},
le:{"^":"k:38;a",
$2:function(a,b){var z,y
H.G(a)
if(b==null||typeof b==="string")this.a.$2(a,H.G(b))
else for(z=J.bI(H.fP(b,"$iso")),y=this.a;z.E();)y.$2(a,H.G(z.gJ()))}},
jO:{"^":"a;a,b,c",
geK:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.c.eq(y,"?",z)
w=y.length
if(x>=0){v=P.bz(y,x+1,w,C.q,!1)
w=x}else v=null
z=new P.kt(this,"data",null,null,null,P.bz(y,z,w,C.F,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
n:{
eY:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.c.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.e(P.Q("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.e(P.Q("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.c.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gay(z)
if(v!==44||x!==t+7||!C.c.a9(a,"base64",t+1))throw H.e(P.Q("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.K.jj(a,s,y)
else{r=P.fv(a,s,y,C.q,!0)
if(r!=null)a=C.c.aP(a,s,y,r)}return new P.jO(a,z,c)}}},
lv:{"^":"k:39;",
$1:function(a){return new Uint8Array(96)}},
lu:{"^":"k:42;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.h1(z,0,96,b)
return z}},
lw:{"^":"k;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.c.H(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
lx:{"^":"k;",
$3:function(a,b,c){var z,y,x
for(z=C.c.H(b,0),y=C.c.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
kV:{"^":"a;a,b,c,d,e,f,r,x,0y",
gel:function(){return this.c>0},
gen:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.B()
y=this.e
if(typeof y!=="number")return H.v(y)
y=z+1<y
z=y}else z=!1
return z},
geo:function(){var z=this.f
if(typeof z!=="number")return z.P()
return z<this.r},
gem:function(){return this.r<this.a.length},
gdz:function(){return this.b===4&&C.c.a8(this.a,"http")},
gdA:function(){return this.b===5&&C.c.a8(this.a,"https")},
gbX:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdz()){this.x="http"
z="http"}else if(this.gdA()){this.x="https"
z="https"}else if(z===4&&C.c.a8(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.c.a8(this.a,"package")){this.x="package"
z="package"}else{z=C.c.q(this.a,0,z)
this.x=z}return z},
geM:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.c.q(this.a,y,z-1):""},
gcM:function(a){var z=this.c
return z>0?C.c.q(this.a,z,this.d):""},
gbM:function(a){var z
if(this.gen()){z=this.d
if(typeof z!=="number")return z.B()
return P.bG(C.c.q(this.a,z+1,this.e),null,null)}if(this.gdz())return 80
if(this.gdA())return 443
return 0},
gez:function(a){return C.c.q(this.a,this.e,this.f)},
gcW:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.P()
return z<y?C.c.q(this.a,z+1,y):""},
gek:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.c.az(y,z+1):""},
gbc:function(){var z=this.f
if(typeof z!=="number")return z.P()
if(z>=this.r)return C.a1
z=P.n
return new P.eX(P.f_(this.gcW(),C.m),[z,z])},
cZ:function(a,b,c,d,e,f,g,h,i){var z,y,x
H.j(g,"$isF",[P.n,null],"$asF")
h=this.gbX()
z=h==="file"
y=this.c
i=y>0?C.c.q(this.a,this.b+3,y):""
e=this.gen()?this.gbM(this):null
y=this.c
if(y>0)b=C.c.q(this.a,y,this.d)
else if(i.length!==0||e!=null||z)b=""
y=this.a
c=C.c.q(y,this.e,this.f)
if(!z)x=b!=null&&c.length!==0
else x=!0
if(x&&!C.c.a8(c,"/"))c="/"+c
f=P.dm(f,0,0,g)
x=this.r
if(x<y.length)a=C.c.az(y,x+1)
return new P.cn(h,i,b,e,c,f,a)},
cY:function(a){return this.cZ(null,null,null,null,null,null,a,null,null)},
gV:function(a){var z=this.y
if(z==null){z=C.c.gV(this.a)
this.y=z}return z},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.L(b).$isde)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$isde:1},
kt:{"^":"cn;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cG:function(a,b){var z=document.createElement("canvas")
return z},
hv:function(a){H.f(a,"$isc5")
return"wheel"},
e3:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
hL:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$ise4")
try{J.h3(z,a)}catch(x){H.ap(x)}return z},
cl:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fe:function(a,b,c,d){var z,y
z=W.cl(W.cl(W.cl(W.cl(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fE:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.N
if(z===C.k)return a
return z.dR(a,b)},
aa:{"^":"O;","%":"HTMLBRElement|HTMLBaseElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
mL:{"^":"aa;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
mM:{"^":"aa;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
h8:{"^":"aa;","%":"HTMLBodyElement"},
cF:{"^":"aa;",
bT:function(a,b,c){if(c!=null)return this.fP(a,b,P.lJ(c,null))
return this.fQ(a,b)},
eS:function(a,b){return this.bT(a,b,null)},
fP:function(a,b,c){return a.getContext(b,c)},
fQ:function(a,b){return a.getContext(b)},
$iscF:1,
$isdN:1,
"%":"HTMLCanvasElement"},
cH:{"^":"H;",
fR:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
iX:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$iscH:1,
"%":"CanvasRenderingContext2D"},
mP:{"^":"M;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
mR:{"^":"ks;0m:length=",
eU:function(a,b){var z=this.fS(a,this.fv(a,b))
return z==null?"":z},
fv:function(a,b){var z,y
z=$.$get$dS()
y=z[b]
if(typeof y==="string")return y
y=this.hU(a,b)
z[b]=y
return y},
hU:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hp()+b
if(z in a)return z
return b},
fS:function(a,b){return a.getPropertyValue(b)},
gcu:function(a){return a.bottom},
gb3:function(a){return a.height},
gaN:function(a){return a.left},
gbd:function(a){return a.right},
gbh:function(a){return a.top},
gbj:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hl:{"^":"a;",
gaN:function(a){return this.eU(a,"left")}},
dZ:{"^":"aa;",$isdZ:1,"%":"HTMLDivElement"},
hq:{"^":"M;",
bU:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
mS:{"^":"H;",
i:function(a){return String(a)},
"%":"DOMException"},
hr:{"^":"H;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
t:function(a,b){var z
if(b==null)return!1
if(!H.bE(b,"$isaI",[P.af],"$asaI"))return!1
z=J.aE(b)
return a.left===z.gaN(b)&&a.top===z.gbh(b)&&a.width===z.gbj(b)&&a.height===z.gb3(b)},
gV:function(a){return W.fe(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcu:function(a){return a.bottom},
gb3:function(a){return a.height},
gaN:function(a){return a.left},
gbd:function(a){return a.right},
gbh:function(a){return a.top},
gbj:function(a){return a.width},
$isaI:1,
$asaI:function(){return[P.af]},
"%":";DOMRectReadOnly"},
kr:{"^":"ca;a,b",
gm:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.d(z,b)
return H.f(z[b],"$isO")},
p:function(a,b,c){var z
H.f(c,"$isO")
z=this.b
if(b<0||b>=z.length)return H.d(z,b)
J.cy(this.a,c,z[b])},
h:function(a,b){J.dE(this.a,b)
return b},
gW:function(a){var z=this.jP(this)
return new J.aq(z,z.length,0,[H.t(z,0)])},
$asR:function(){return[W.O]},
$aso:function(){return[W.O]},
$asb:function(){return[W.O]}},
O:{"^":"M;",
gcA:function(a){return new W.kr(a,a.children)},
gdT:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.P()
if(x<0)x=-x*0
if(typeof w!=="number")return w.P()
if(w<0)w=-w*0
return new P.aI(z,y,x,w,[P.af])},
i:function(a){return a.localName},
$isO:1,
"%":";Element"},
a1:{"^":"H;",$isa1:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
c5:{"^":"H;",
fp:function(a,b,c,d){return a.addEventListener(b,H.b8(H.l(c,{func:1,args:[W.a1]}),1),!1)},
$isc5:1,
"%":";EventTarget"},
mT:{"^":"aa;0m:length=","%":"HTMLFormElement"},
hH:{"^":"H;0m:length=",
dH:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
hI:{"^":"kJ;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bl(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.f(c,"$isM")
throw H.e(P.S("Cannot assign element of immutable List."))},
ab:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isaG:1,
$asaG:function(){return[W.M]},
$asR:function(){return[W.M]},
$iso:1,
$aso:function(){return[W.M]},
$isb:1,
$asb:function(){return[W.M]},
$ishI:1,
$asaO:function(){return[W.M]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hJ:{"^":"hq;","%":"HTMLDocument"},
bN:{"^":"H;0dU:data=",$isbN:1,"%":"ImageData"},
cL:{"^":"aa;",$iscL:1,$isdN:1,"%":"HTMLImageElement"},
e4:{"^":"aa;0type",
sjV:function(a,b){a.type=H.G(b)},
$ise4:1,
"%":"HTMLInputElement"},
bm:{"^":"d4;",$isbm:1,"%":"KeyboardEvent"},
hT:{"^":"aa;","%":"HTMLLabelElement"},
io:{"^":"aa;","%":"HTMLAudioElement;HTMLMediaElement"},
a6:{"^":"d4;",$isa6:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kq:{"^":"ca;a",
p:function(a,b,c){var z,y
H.f(c,"$isM")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.d(y,b)
J.cy(z,c,y[b])},
gW:function(a){var z=this.a.childNodes
return new W.e1(z,z.length,-1,[H.bF(C.a2,z,"aO",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.d(z,b)
return z[b]},
$asR:function(){return[W.M]},
$aso:function(){return[W.M]},
$asb:function(){return[W.M]}},
M:{"^":"c5;",
jE:function(a,b){var z,y
try{z=a.parentNode
J.cy(z,b,a)}catch(y){H.ap(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.f0(a):z},
Y:function(a,b){return a.appendChild(b)},
hE:function(a,b,c){return a.replaceChild(b,c)},
$isM:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
is:{"^":"kP;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bl(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.f(c,"$isM")
throw H.e(P.S("Cannot assign element of immutable List."))},
ab:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isaG:1,
$asaG:function(){return[W.M]},
$asR:function(){return[W.M]},
$iso:1,
$aso:function(){return[W.M]},
$isb:1,
$asb:function(){return[W.M]},
$asaO:function(){return[W.M]},
"%":"NodeList|RadioNodeList"},
n1:{"^":"aa;0m:length=","%":"HTMLSelectElement"},
cf:{"^":"aa;",$iscf:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
jg:{"^":"aa;",
fU:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
jh:{"^":"aa;",
dw:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
b2:{"^":"H;",$isb2:1,"%":"Touch"},
b3:{"^":"d4;",$isb3:1,"%":"TouchEvent"},
n6:{"^":"l2;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bl(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.f(c,"$isb2")
throw H.e(P.S("Cannot assign element of immutable List."))},
ab:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isaG:1,
$asaG:function(){return[W.b2]},
$asR:function(){return[W.b2]},
$iso:1,
$aso:function(){return[W.b2]},
$isb:1,
$asb:function(){return[W.b2]},
$asaO:function(){return[W.b2]},
"%":"TouchList"},
d4:{"^":"a1;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
n8:{"^":"io;",$isdN:1,"%":"HTMLVideoElement"},
bw:{"^":"a6;",
giS:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.S("deltaY is not supported"))},
giR:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.S("deltaX is not supported"))},
$isbw:1,
"%":"WheelEvent"},
kk:{"^":"c5;",
hF:function(a,b){return a.requestAnimationFrame(H.b8(H.l(b,{func:1,ret:-1,args:[P.af]}),1))},
fH:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
nd:{"^":"hr;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
t:function(a,b){var z
if(b==null)return!1
if(!H.bE(b,"$isaI",[P.af],"$asaI"))return!1
z=J.aE(b)
return a.left===z.gaN(b)&&a.top===z.gbh(b)&&a.width===z.gbj(b)&&a.height===z.gb3(b)},
gV:function(a){return W.fe(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gb3:function(a){return a.height},
gbj:function(a){return a.width},
"%":"ClientRect|DOMRect"},
ku:{"^":"jb;a,b,c,$ti"},
ne:{"^":"ku;a,b,c,$ti"},
kv:{"^":"d_;a,b,c,d,e,$ti",n:{
U:function(a,b,c,d,e){var z,y
z=W.fE(new W.kw(c),W.a1)
y=z!=null
if(y&&!0){H.l(z,{func:1,args:[W.a1]})
if(y)J.fZ(a,b,z,!1)}return new W.kv(0,a,b,z,!1,[e])}}},
kw:{"^":"k:44;a",
$1:function(a){return this.a.$1(H.f(a,"$isa1"))}},
aO:{"^":"a;$ti",
gW:function(a){return new W.e1(a,this.gm(a),-1,[H.bF(this,a,"aO",0)])}},
e1:{"^":"a;a,b,c,0d,$ti",
sdv:function(a){this.d=H.w(a,H.t(this,0))},
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdv(J.fY(this.a,z))
this.c=z
return!0}this.sdv(null)
this.c=y
return!1},
gJ:function(){return this.d},
$isaP:1},
ks:{"^":"H+hl;"},
kI:{"^":"H+R;"},
kJ:{"^":"kI+aO;"},
kO:{"^":"H+R;"},
kP:{"^":"kO+aO;"},
l1:{"^":"H+R;"},
l2:{"^":"l1+aO;"}}],["","",,P,{"^":"",
lM:function(a){var z,y
z=J.L(a)
if(!!z.$isbN){y=z.gdU(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fo(a.data,a.height,a.width)},
lL:function(a){if(a instanceof P.fo)return{data:a.a,height:a.b,width:a.c}
return a},
lJ:function(a,b){var z={}
a.S(0,new P.lK(z))
return z},
dY:function(){var z=$.dX
if(z==null){z=J.cz(window.navigator.userAgent,"Opera",0)
$.dX=z}return z},
hp:function(){var z,y
z=$.dU
if(z!=null)return z
y=$.dV
if(y==null){y=J.cz(window.navigator.userAgent,"Firefox",0)
$.dV=y}if(y)z="-moz-"
else{y=$.dW
if(y==null){y=!P.dY()&&J.cz(window.navigator.userAgent,"Trident/",0)
$.dW=y}if(y)z="-ms-"
else z=P.dY()?"-o-":"-webkit-"}$.dU=z
return z},
kW:{"^":"a;",
ei:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
bR:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.L(a)
if(!!y.$isah)return new Date(a.a)
if(!!y.$isiP)throw H.e(P.ci("structured clone of RegExp"))
if(!!y.$isbN)return a
if(!!y.$iscV)return a
if(!!y.$isF){x=this.ei(a)
y=this.b
if(x>=y.length)return H.d(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.p(y,x,w)
a.S(0,new P.kX(z,this))
return z.a}if(!!y.$isb){x=this.ei(a)
z=this.b
if(x>=z.length)return H.d(z,x)
w=z[x]
if(w!=null)return w
return this.iM(a,x)}throw H.e(P.ci("structured clone of other type"))},
iM:function(a,b){var z,y,x,w
z=J.bb(a)
y=z.gm(a)
x=new Array(y)
C.a.p(this.b,b,x)
for(w=0;w<y;++w)C.a.p(x,w,this.bR(z.j(a,w)))
return x}},
kX:{"^":"k:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.bR(b)}},
fo:{"^":"a;dU:a>,b,c",$isbN:1},
lK:{"^":"k:6;a",
$2:function(a,b){this.a[a]=b}},
fm:{"^":"kW;a,b"},
hB:{"^":"ca;a,b",
gaV:function(){var z,y,x
z=this.b
y=H.ao(z,"R",0)
x=W.O
return new H.ib(new H.ki(z,H.l(new P.hC(),{func:1,ret:P.a3,args:[y]}),[y]),H.l(new P.hD(),{func:1,ret:x,args:[y]}),[y,x])},
S:function(a,b){H.l(b,{func:1,ret:-1,args:[W.O]})
C.a.S(P.ee(this.gaV(),!1,W.O),b)},
p:function(a,b,c){var z
H.f(c,"$isO")
z=this.gaV()
J.h2(z.b.$1(J.cA(z.a,b)),c)},
h:function(a,b){J.dE(this.b.a,b)},
gm:function(a){return J.aF(this.gaV().a)},
j:function(a,b){var z=this.gaV()
return z.b.$1(J.cA(z.a,b))},
gW:function(a){var z=P.ee(this.gaV(),!1,W.O)
return new J.aq(z,z.length,0,[H.t(z,0)])},
$asR:function(){return[W.O]},
$aso:function(){return[W.O]},
$asb:function(){return[W.O]}},
hC:{"^":"k:45;",
$1:function(a){return!!J.L(H.f(a,"$isM")).$isO}},
hD:{"^":"k:25;",
$1:function(a){return H.h(H.f(a,"$isM"),"$isO")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cm:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kK:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kQ:{"^":"a;$ti",
gbd:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.w(z+this.c,H.t(this,0))},
gcu:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.w(z+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bE(b,"$isaI",[P.af],"$asaI"))return!1
z=this.a
y=J.aE(b)
x=y.gaN(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbh(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.t(this,0)
if(H.w(z+this.c,w)===y.gbd(b)){if(typeof x!=="number")return x.B()
z=H.w(x+this.d,w)===y.gcu(b)}else z=!1}else z=!1}else z=!1
return z},
gV:function(a){var z,y,x,w,v
z=this.a
y=J.bH(z)
x=this.b
w=J.bH(x)
if(typeof z!=="number")return z.B()
v=H.t(this,0)
z=H.w(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.w(x+this.d,v)
return P.kK(P.cm(P.cm(P.cm(P.cm(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aI:{"^":"kQ;aN:a>,bh:b>,bj:c>,b3:d>,$ti"}}],["","",,P,{"^":"",n4:{"^":"O;",
gcA:function(a){return new P.hB(a,new W.kq(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"}}],["","",,P,{"^":"",I:{"^":"a;",$iso:1,
$aso:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$isjz:1}}],["","",,P,{"^":""}],["","",,P,{"^":"",h9:{"^":"H;",$ish9:1,"%":"WebGLBuffer"},hF:{"^":"H;",$ishF:1,"%":"WebGLFramebuffer"},iK:{"^":"H;",$isiK:1,"%":"WebGLProgram"},cW:{"^":"H;",
dQ:function(a,b,c){return a.attachShader(b,c)},
ap:function(a,b,c){return a.bindBuffer(b,c)},
ct:function(a,b,c){return a.bindFramebuffer(b,c)},
bt:function(a,b,c){return a.bindTexture(b,c)},
iC:function(a,b,c){return a.blendFunc(b,c)},
dS:function(a,b,c,d){return a.bufferData(b,c,d)},
iF:function(a,b){return a.clear(b)},
iG:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
iH:function(a,b){return a.clearDepth(b)},
iJ:function(a,b){return a.compileShader(b)},
iN:function(a,b){return a.createShader(b)},
iP:function(a,b){return a.deleteProgram(b)},
iQ:function(a,b){return a.deleteShader(b)},
iT:function(a,b){return a.depthFunc(b)},
iU:function(a,b){return a.disable(b)},
dV:function(a,b){return a.disableVertexAttribArray(b)},
iW:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cF:function(a,b){return a.enable(b)},
dX:function(a,b){return a.enableVertexAttribArray(b)},
j6:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
eO:function(a,b){return a.generateMipmap(b)},
eP:function(a,b,c){return a.getActiveAttrib(b,c)},
eQ:function(a,b,c){return a.getActiveUniform(b,c)},
eR:function(a,b,c){return a.getAttribLocation(b,c)},
d6:function(a,b){return a.getParameter(b)},
eT:function(a,b){return a.getProgramInfoLog(b)},
bV:function(a,b,c){return a.getProgramParameter(b,c)},
eV:function(a,b){return a.getShaderInfoLog(b)},
eW:function(a,b,c){return a.getShaderParameter(b,c)},
eX:function(a,b,c){return a.getUniformLocation(b,c)},
jd:function(a,b){return a.linkProgram(b)},
jy:function(a,b,c){return a.pixelStorei(b,c)},
hz:function(a,b,c,d,e,f,g,h){return a.readPixels(b,c,d,e,f,g,h)},
eZ:function(a,b,c){return a.shaderSource(b,c)},
jM:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.L(g)
if(!!z.$isbN)y=!0
else y=!1
if(y){this.hW(a,b,c,d,e,f,P.lL(g))
return}if(!!z.$iscL)z=!0
else z=!1
if(z){this.hX(a,b,c,d,e,f,g)
return}throw H.e(P.bJ("Incorrect number or type of arguments"))},
jL:function(a,b,c,d,e,f,g){return this.jM(a,b,c,d,e,f,g,null,null,null)},
hW:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
hX:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bP:function(a,b,c,d){return a.texParameteri(b,c,d)},
M:function(a,b,c){return a.uniform1f(b,c)},
T:function(a,b,c){return a.uniform1i(b,c)},
u:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eI:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eJ:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
eL:function(a,b){return a.useProgram(b)},
jW:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jX:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscW:1,
"%":"WebGLRenderingContext"},j0:{"^":"H;",$isj0:1,"%":"WebGLShader"},ji:{"^":"H;",$isji:1,"%":"WebGLTexture"},jI:{"^":"H;",$isjI:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",V:{"^":"a;0a,0b,0c,0d,$ti",
sfY:function(a){this.a=H.j(a,"$isb",[H.ao(this,"V",0)],"$asb")},
sdE:function(a){this.b=H.l(a,{func:1,ret:P.a3,args:[[P.o,H.ao(this,"V",0)]]})},
sdC:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.m,[P.o,H.ao(this,"V",0)]]})},
sdF:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.m,[P.o,H.ao(this,"V",0)]]})},
bZ:function(a){this.sfY(H.c([],[a]))
this.sdE(null)
this.sdC(null)
this.sdF(null)},
d7:function(a,b,c){var z=H.ao(this,"V",0)
H.l(b,{func:1,ret:P.a3,args:[[P.o,z]]})
z={func:1,ret:-1,args:[P.m,[P.o,z]]}
H.l(a,z)
H.l(c,z)
this.sdE(b)
this.sdC(a)
this.sdF(c)},
bl:function(a,b){return this.d7(a,null,b)},
hp:function(a){var z
H.j(a,"$iso",[H.ao(this,"V",0)],"$aso")
z=this.b
if(z!=null)return z.$1(a)
return!0},
fa:function(a,b){var z
H.j(b,"$iso",[H.ao(this,"V",0)],"$aso")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
gW:function(a){var z=this.a
return new J.aq(z,z.length,0,[H.t(z,0)])},
ab:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ao(this,"V",0)
H.w(b,z)
z=[z]
if(this.hp(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.fa(x,H.c([b],z))}},
$iso:1,
n:{
cI:function(a){var z=new O.V([a])
z.bZ(a)
return z}}},cS:{"^":"a;0a,0b",
sc5:function(a){this.a=H.j(a,"$isb",[V.ac],"$asb")},
gm:function(a){return this.a.length},
gA:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
fb:function(a){var z=this.b
if(!(z==null))z.I(a)},
aA:function(){return this.fb(null)},
ga0:function(){var z=this.a
if(z.length>0)return C.a.gay(z)
else return V.bS()},
eB:function(a){var z=this.a
if(a==null)C.a.h(z,V.bS())
else C.a.h(z,a)
this.aA()},
cV:function(){var z=this.a
if(z.length>0){z.pop()
this.aA()}}}}],["","",,E,{"^":"",cC:{"^":"a;"},ar:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0ag:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sfc:function(a,b){this.y=H.j(b,"$isV",[E.ar],"$asV")},
sag:function(a){this.z=H.f(a,"$isbj")},
dh:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.aq(z,z.length,0,[H.t(z,0)]);z.E();){y=z.d
if(y.f==null)y.dh()}},
sd8:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gA().K(0,this.gex())
y=this.c
if(y!=null)y.gA().h(0,this.gex())
x=new D.J("shape",z,this.c,this,[F.ce])
x.b=!0
this.a6(x)}},
seE:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gA().K(0,this.gey())
y=this.f
this.f=a
if(a!=null)a.gA().h(0,this.gey())
this.dh()
x=new D.J("technique",y,this.f,this,[O.cg])
x.b=!0
this.a6(x)}},
sb8:function(a){var z,y
if(!J.D(this.r,a)){z=this.r
if(z!=null)z.gA().K(0,this.gew())
if(a!=null)a.gA().h(0,this.gew())
this.r=a
y=new D.J("mover",z,a,this,[U.a7])
y.b=!0
this.a6(y)}},
as:function(a){var z,y,x,w
z=this.r
y=z!=null?z.aQ(a,this):null
if(!J.D(y,this.x)){x=this.x
this.x=y
w=new D.J("matrix",x,y,this,[V.ac])
w.b=!0
this.a6(w)}z=this.f
if(z!=null)z.as(a)
for(z=this.y.a,z=new J.aq(z,z.length,0,[H.t(z,0)]);z.E();)z.d.as(a)},
aO:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga0())
else C.a.h(z.a,y.k(0,z.ga0()))
z.aA()
a.eC(this.f)
z=a.dy
x=(z&&C.a).gay(z)
if(x!=null&&this.d!=null)x.jD(a,this)
for(z=this.y.a,z=new J.aq(z,z.length,0,[H.t(z,0)]);z.E();)z.d.aO(a)
a.eA()
a.dx.cV()},
gA:function(){var z=this.z
if(z==null){z=D.E()
this.z=z}return z},
a6:function(a){var z=this.z
if(!(z==null))z.I(a)},
a2:function(){return this.a6(null)},
jo:[function(a){H.f(a,"$isx")
this.e=null
this.a6(a)},function(){return this.jo(null)},"kK","$1","$0","gex",0,2,1],
jp:[function(a){this.a6(H.f(a,"$isx"))},function(){return this.jp(null)},"kL","$1","$0","gey",0,2,1],
jn:[function(a){this.a6(H.f(a,"$isx"))},function(){return this.jn(null)},"kJ","$1","$0","gew",0,2,1],
jl:[function(a){this.a6(H.f(a,"$isx"))},function(){return this.jl(null)},"kH","$1","$0","gev",0,2,1],
kG:[function(a,b){var z,y,x,w,v,u,t
H.j(b,"$iso",[E.ar],"$aso")
for(z=b.length,y=this.gev(),x={func:1,ret:-1,args:[D.x]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.gag()==null){t=new D.bj()
t.sah(null)
t.sbo(null)
t.c=null
t.d=0
u.sag(t)}t=u.gag()
t.toString
H.l(y,x)
if(t.a==null)t.sah(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a2()},"$2","gjk",8,0,8],
kI:[function(a,b){var z,y
H.j(b,"$iso",[E.ar],"$aso")
for(z=b.gW(b),y=this.gev();z.E();)z.gJ().gA().K(0,y)
this.a2()},"$2","gjm",8,0,8],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaH:1,
n:{
e0:function(a,b,c,d,e,f){var z=new E.ar()
z.a=d
z.b=!0
z.sfc(0,O.cI(E.ar))
z.y.bl(z.gjk(),z.gjm())
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
z.sd8(0,e)
z.seE(f)
z.sb8(c)
return z}}},iR:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
shV:function(a){this.dy=H.j(a,"$isb",[O.cg],"$asb")},
shQ:function(a){this.fr=H.j(a,"$isF",[P.n,A.cX],"$asF")},
f6:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.ah(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cS()
y=[V.ac]
z.sc5(H.c([],y))
z.b=null
z.gA().h(0,new E.iT(this))
this.cy=z
z=new O.cS()
z.sc5(H.c([],y))
z.b=null
z.gA().h(0,new E.iU(this))
this.db=z
z=new O.cS()
z.sc5(H.c([],y))
z.b=null
z.gA().h(0,new E.iV(this))
this.dx=z
this.shV(H.c([],[O.cg]))
z=this.dy;(z&&C.a).h(z,null)
this.shQ(new H.aQ(0,0,[P.n,A.cX]))},
gjz:function(){var z=this.z
if(z==null){z=this.cy.ga0().k(0,this.db.ga0())
this.z=z}return z},
eC:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gay(z):a;(z&&C.a).h(z,y)},
eA:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
iS:function(a,b){var z=new E.iR(a,b)
z.f6(a,b)
return z}}},iT:{"^":"k:7;a",
$1:function(a){var z
H.f(a,"$isx")
z=this.a
z.z=null
z.ch=null}},iU:{"^":"k:7;a",
$1:function(a){var z
H.f(a,"$isx")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iV:{"^":"k:7;a",
$1:function(a){var z
H.f(a,"$isx")
z=this.a
z.ch=null
z.cx=null}},jr:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0ag:x<,0y,0z,0Q,0ch,0cx,0cy",
sag:function(a){this.x=H.f(a,"$isbj")},
fe:[function(a){H.f(a,"$isx")
this.jG()},function(){return this.fe(null)},"fd","$1","$0","gdc",0,2,1],
gj5:function(){var z,y,x
z=Date.now()
y=C.e.a3(P.e_(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ah(z,!1)
return x/y},
dI:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.v(z)
x=C.j.b2(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.j.b2(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.eI(C.u,this.gjF())}},
jG:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.jt(this),{func:1,ret:-1,args:[P.af]})
C.J.fH(z)
C.J.hF(z,W.fE(y,P.af))}},"$0","gjF",0,0,3],
jC:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dI()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ah(w,!1)
x.y=P.e_(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aA()
w=x.db
C.a.sm(w.a,0)
w.aA()
w=x.dx
C.a.sm(w.a,0)
w.aA()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aO(this.e)}}catch(v){z=H.ap(v)
y=H.bc(v)
P.dC("Error: "+H.i(z))
P.dC("Stack: "+H.i(y))
throw H.e(z)}},
n:{
js:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$iscF)return E.eH(a,!0,!0,!0,!1)
y=W.cG(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcA(a).h(0,y)
w=E.eH(y,!0,!0,!0,!1)
w.a=a
return w},
eH:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jr()
y=P.i1(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.n.bT(a,"webgl",y)
x=H.f(x==null?C.n.bT(a,"experimental-webgl",y):x,"$iscW")
if(x==null)H.p(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iS(x,a)
w=new T.jo(x)
w.b=H.a4((x&&C.b).d6(x,3379))
w.c=H.a4(C.b.d6(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.jV(a)
v=new X.hS()
v.c=new X.aw(!1,!1,!1)
v.shx(P.i3(null,null,null,P.m))
w.b=v
v=new X.ip(w)
v.f=0
v.r=V.aR()
v.x=V.aR()
v.Q=1
v.ch=1
w.c=v
v=new X.i6(w)
v.r=0
v.x=V.aR()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jw(w)
v.e=0
v.f=V.aR()
v.r=V.aR()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sfI(H.c([],[[P.d_,P.a]]))
v=w.z
u=document
t=W.a6
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.U(u,"contextmenu",H.l(w.ghc(),s),!1,t))
v=w.z
r=W.a1
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.U(a,"focus",H.l(w.ghf(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.U(a,"blur",H.l(w.gh8(),q),!1,r))
v=w.z
p=W.bm
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.U(u,"keyup",H.l(w.ghh(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.U(u,"keydown",H.l(w.ghg(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.U(a,"mousedown",H.l(w.ghk(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.U(a,"mouseup",H.l(w.ghm(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.U(a,"mousemove",H.l(w.ghl(),s),!1,t))
p=w.z
o=W.bw;(p&&C.a).h(p,W.U(a,H.G(W.hv(a)),H.l(w.ghn(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.U(u,"mousemove",H.l(w.ghd(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.U(u,"mouseup",H.l(w.ghe(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.U(u,"pointerlockchange",H.l(w.gho(),q),!1,r))
r=w.z
q=W.b3
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.U(a,"touchstart",H.l(w.ghv(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.U(a,"touchend",H.l(w.ght(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.U(a,"touchmove",H.l(w.ghu(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ah(Date.now(),!1)
z.cy=0
z.dI()
return z}}},jt:{"^":"k:29;a",
$1:function(a){var z
H.mx(a)
z=this.a
if(z.ch){z.ch=!1
z.jC()}}}}],["","",,Z,{"^":"",f9:{"^":"a;a,b",$ismN:1,n:{
dj:function(a,b,c){var z
H.j(c,"$isb",[P.m],"$asb")
z=a.createBuffer()
C.b.ap(a,b,z)
C.b.dS(a,b,new Int16Array(H.b5(c)),35044)
C.b.ap(a,b,null)
return new Z.f9(b,z)}}},dJ:{"^":"cC;a,b,c,d,e",
bs:function(a){var z,y,x
try{y=a.a
C.b.dX(y,this.e)
C.b.jW(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.ap(x)
y=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(z))
throw H.e(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},kh:{"^":"a;a",$ismO:1},dK:{"^":"a;a,0b,c,d",
sfT:function(a){this.b=H.j(a,"$isb",[Z.bO],"$asb")},
aM:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bs:function(a){var z,y
z=this.a
C.b.ap(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bs(a)},
eH:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.dV(x,z[y].e)
C.b.ap(x,this.a.a,null)},
aO:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
w=v.c
u=w.a
C.b.ap(y,u,w.b)
C.b.iW(y,v.a,v.b,5123,0)
C.b.ap(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.n]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ab(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(y,", ")+"\nAttrs:   "+C.a.D(u,", ")},
$isn5:1},bO:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b0(this.c)+"'")+"]"}},aT:{"^":"a;a",
gd9:function(a){var z,y
z=this.a
y=(z&$.$get$aB().a)!==0?3:0
if((z&$.$get$at().a)!==0)y+=3
if((z&$.$get$aA().a)!==0)y+=3
if((z&$.$get$aC().a)!==0)y+=2
if((z&$.$get$aD().a)!==0)y+=3
if((z&$.$get$bu().a)!==0)y+=3
if((z&$.$get$bv().a)!==0)y+=4
if((z&$.$get$aU().a)!==0)++y
return(z&$.$get$az().a)!==0?y+4:y},
iA:function(a){var z,y,x
z=$.$get$aB()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$at()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bu()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bv()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f8()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aT))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.n])
y=this.a
if((y&$.$get$aB().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$at().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aD().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bu().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bv().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aU().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$az().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.D(z,"|")},
n:{
am:function(a){return new Z.aT(a)}}}}],["","",,D,{"^":"",dO:{"^":"a;"},bj:{"^":"a;0a,0b,0c,0d",
sah:function(a){this.a=H.j(a,"$isb",[{func:1,ret:-1,args:[D.x]}],"$asb")},
sbo:function(a){this.b=H.j(a,"$isb",[{func:1,ret:-1,args:[D.x]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.x]}
H.l(b,z)
if(this.a==null)this.sah(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.x]})
z=this.a
z=z==null?null:C.a.aZ(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).K(z,b)||!1}else y=!1
return y},
I:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.x(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.S(y,new D.hz(z))
return!0},
iY:function(){return this.I(null)},
jH:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.I(y)}}},
a7:function(){return this.jH(!0,!1)},
n:{
E:function(){var z=new D.bj()
z.sah(null)
z.sbo(null)
z.c=null
z.d=0
return z}}},hz:{"^":"k:30;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.x]})
z=this.a.a
z.b
a.$1(z)}},x:{"^":"a;a,0b"},c7:{"^":"x;c,d,a,0b,$ti"},c8:{"^":"x;c,d,a,0b,$ti"},J:{"^":"x;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",dL:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dL))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},ea:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ea))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},hS:{"^":"a;0a,0b,0c,0d",
shx:function(a){this.d=H.j(a,"$isey",[P.m],"$asey")},
jv:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jr:function(a){this.c=a.b
this.d.K(0,a.a)
return!1}},ef:{"^":"cc;x,y,c,d,e,a,0b"},i6:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aU:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ah(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.ad(y.a+x*w,y.b+v*u)
u=this.a.gaI()
s=new X.bp(a,V.aR(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cU:function(a,b){this.r=a.a
return!1},
ba:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eY()
if(typeof z!=="number")return z.bS()
this.r=(z&~y)>>>0
return!1},
b9:function(a,b){var z=this.d
if(z==null)return!1
z.I(this.aU(a,b))
return!0},
jw:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaI()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.cT(new V.P(v*u,t*s),y,x,new P.ah(w,!1),this)
w.b=!0
z.I(w)
return!0},
hj:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ah(Date.now(),!1)
y=this.f
x=new X.ef(c,a,this.a.gaI(),b,z,this)
x.b=!0
y.I(x)
this.y=z
this.x=V.aR()}},aw:{"^":"a;a,b,c",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aw))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bp:{"^":"cc;x,y,z,Q,ch,c,d,e,a,0b"},ip:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c3:function(a,b,c){var z,y,x
z=new P.ah(Date.now(),!1)
y=this.a.gaI()
x=new X.bp(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cU:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.I(this.c3(a,b,!0))
return!0},
ba:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eY()
if(typeof z!=="number")return z.bS()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.I(this.c3(a,b,!0))
return!0},
b9:function(a,b){var z=this.d
if(z==null)return!1
z.I(this.c3(a,b,!1))
return!0},
jx:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaI()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.cT(new V.P(w*v,u*t),y,b,new P.ah(x,!1),this)
x.b=!0
z.I(x)
return!0},
gdW:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
gbQ:function(){var z=this.c
if(z==null){z=D.E()
this.c=z}return z},
geu:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z}},cT:{"^":"cc;x,c,d,e,a,0b"},cc:{"^":"x;"},eL:{"^":"cc;x,y,z,Q,ch,c,d,e,a,0b"},jw:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aU:function(a,b){var z,y,x,w
H.j(a,"$isb",[V.ad],"$asb")
z=new P.ah(Date.now(),!1)
y=a.length>0?a[0]:V.aR()
x=this.a.gaI()
w=new X.eL(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
ju:function(a){var z
H.j(a,"$isb",[V.ad],"$asb")
z=this.b
if(z==null)return!1
z.I(this.aU(a,!0))
return!0},
js:function(a){var z
H.j(a,"$isb",[V.ad],"$asb")
z=this.c
if(z==null)return!1
z.I(this.aU(a,!0))
return!0},
jt:function(a){var z
H.j(a,"$isb",[V.ad],"$asb")
z=this.d
if(z==null)return!1
z.I(this.aU(a,!1))
return!0}},jV:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sfI:function(a){this.z=H.j(a,"$isb",[[P.d_,P.a]],"$asb")},
gaI:function(){var z=this.a
return V.ew(0,0,C.n.gdT(z).c,C.n.gdT(z).d)},
dq:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ea(z,new X.aw(y,a.altKey,a.shiftKey))},
aG:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aw(y,a.altKey,a.shiftKey)},
ck:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aw(y,a.altKey,a.shiftKey)},
aw:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=z.top
if(typeof x!=="number")return x.G()
return new V.ad(y-w,x-v)},
aW:function(a){return new V.P(a.movementX,a.movementY)},
cd:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.ad])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
t=C.j.al(u.pageX)
C.j.al(u.pageY)
s=z.left
C.j.al(u.pageX)
C.a.h(y,new V.ad(t-s,C.j.al(u.pageY)-z.top))}return y},
at:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dL(z,new X.aw(y,a.altKey,a.shiftKey))},
c6:function(a){var z,y,x,w,v,u
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
kj:[function(a){this.f=!0},"$1","ghf",4,0,13],
kc:[function(a){this.f=!1},"$1","gh8",4,0,13],
kg:[function(a){H.f(a,"$isa6")
if(this.f&&this.c6(a))a.preventDefault()},"$1","ghc",4,0,5],
kl:[function(a){var z
H.f(a,"$isbm")
if(!this.f)return
z=this.dq(a)
this.b.jv(z)},"$1","ghh",4,0,18],
kk:[function(a){var z
H.f(a,"$isbm")
if(!this.f)return
z=this.dq(a)
this.b.jr(z)},"$1","ghg",4,0,18],
kn:[function(a){var z,y,x,w
H.f(a,"$isa6")
z=this.a
z.focus()
this.f=!0
this.aG(a)
if(this.x){y=this.at(a)
x=this.aW(a)
if(this.d.cU(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.at(a)
w=this.aw(a)
if(this.c.cU(y,w))a.preventDefault()},"$1","ghk",4,0,5],
kp:[function(a){var z,y,x
H.f(a,"$isa6")
this.aG(a)
z=this.at(a)
if(this.x){y=this.aW(a)
if(this.d.ba(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.ba(z,x))a.preventDefault()},"$1","ghm",4,0,5],
ki:[function(a){var z,y,x
H.f(a,"$isa6")
if(!this.c6(a)){this.aG(a)
z=this.at(a)
if(this.x){y=this.aW(a)
if(this.d.ba(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.ba(z,x))a.preventDefault()}},"$1","ghe",4,0,5],
ko:[function(a){var z,y,x
H.f(a,"$isa6")
this.aG(a)
z=this.at(a)
if(this.x){y=this.aW(a)
if(this.d.b9(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.b9(z,x))a.preventDefault()},"$1","ghl",4,0,5],
kh:[function(a){var z,y,x
H.f(a,"$isa6")
if(!this.c6(a)){this.aG(a)
z=this.at(a)
if(this.x){y=this.aW(a)
if(this.d.b9(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.b9(z,x))a.preventDefault()}},"$1","ghd",4,0,5],
kq:[function(a){var z,y
H.f(a,"$isbw")
this.aG(a)
z=new V.P((a&&C.I).giR(a),C.I.giS(a)).v(0,180)
if(this.x){if(this.d.jw(z))a.preventDefault()
return}if(this.r)return
y=this.aw(a)
if(this.c.jx(z,y))a.preventDefault()},"$1","ghn",4,0,34],
kr:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.at(this.y)
x=this.aw(this.y)
this.d.hj(y,x,z)}},"$1","gho",4,0,13],
kx:[function(a){var z
H.f(a,"$isb3")
this.a.focus()
this.f=!0
this.ck(a)
z=this.cd(a)
if(this.e.ju(z))a.preventDefault()},"$1","ghv",4,0,14],
kv:[function(a){var z
H.f(a,"$isb3")
this.ck(a)
z=this.cd(a)
if(this.e.js(z))a.preventDefault()},"$1","ght",4,0,14],
kw:[function(a){var z
H.f(a,"$isb3")
this.ck(a)
z=this.cd(a)
if(this.e.jt(z))a.preventDefault()},"$1","ghu",4,0,14]}}],["","",,D,{"^":"",c3:{"^":"a;0a,0b,0c,0d",
gA:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z},
aB:[function(a){var z
H.f(a,"$isx")
z=this.d
if(!(z==null))z.I(a)},function(){return this.aB(null)},"jZ","$1","$0","gff",0,2,1],
$isa_:1,
$isaH:1},a_:{"^":"a;",$isaH:1},hU:{"^":"V;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sfG:function(a){this.e=H.j(a,"$isb",[D.c3],"$asb")},
shw:function(a){this.f=H.j(a,"$isb",[D.ep],"$asb")},
shS:function(a){this.r=H.j(a,"$isb",[D.ez],"$asb")},
si2:function(a){this.x=H.j(a,"$isb",[D.eE],"$asb")},
si3:function(a){this.y=H.j(a,"$isb",[D.eF],"$asb")},
si4:function(a){this.z=H.j(a,"$isb",[D.eG],"$asb")},
gA:function(){var z=this.Q
if(z==null){z=D.E()
this.Q=z}return z},
aB:function(a){var z=this.Q
if(!(z==null))z.I(a)},
hi:[function(a){var z
H.f(a,"$isx")
z=this.ch
if(!(z==null))z.I(a)},function(){return this.hi(null)},"km","$1","$0","gdD",0,2,1],
ks:[function(a){var z,y,x
H.j(a,"$iso",[D.a_],"$aso")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.y)(a),++y){x=a[y]
if(x==null||this.fC(x))return!1}return!0},"$1","ghq",4,0,36],
k9:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a_
H.j(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gdD(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.f(b[u],"$isa_")
if(t instanceof D.c3)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bj()
s.sah(null)
s.sbo(null)
s.c=null
s.d=0
t.d=s}H.l(x,w)
if(s.a==null)s.sah(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.c7(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","gh5",8,0,19],
ku:[function(a,b){var z,y,x,w
z=D.a_
H.j(b,"$iso",[z],"$aso")
for(y=b.gW(b),x=this.gdD();y.E();){w=y.gJ()
C.a.K(this.e,w)
w.gA().K(0,x)}z=new D.c8(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","ghs",8,0,19],
fC:function(a){var z=C.a.aZ(this.e,a)
return z},
$aso:function(){return[D.a_]},
$asV:function(){return[D.a_]}},ep:{"^":"a;",$isa_:1,$isaH:1},ez:{"^":"a;",$isa_:1,$isaH:1},eE:{"^":"a;",$isa_:1,$isaH:1},eF:{"^":"a;",$isa_:1,$isaH:1},eG:{"^":"a;",$isa_:1,$isaH:1}}],["","",,V,{"^":"",
mQ:[function(a,b){if(typeof b!=="number")return b.G()
if(typeof a!=="number")return H.v(a)
return Math.abs(b-a)<=1e-9},"$2","im",8,0,35],
mK:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.am(a-b,z)
return(a<0?a+z:a)+b},
K:function(a,b,c){if(a==null)return C.c.ad("null",c)
return C.c.ad(C.j.eG($.q.$2(a,0)?0:a,b),c+b+1)},
ba:function(a,b,c){var z,y,x,w,v,u
H.j(a,"$isb",[P.r],"$asb")
z=H.c([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.y)(a),++w){v=V.K(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.p(z,u,C.c.ad(z[u],x))}return z},
dB:function(a,b){return C.j.jO(Math.pow(b,C.Q.b2(Math.log(H.lI(a))/Math.log(b))))},
a0:{"^":"a;a,b,c",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
c1:{"^":"a;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c1))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
eh:{"^":"a;a,b,c,d,e,f,r,x,y",
ae:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.r])
return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eh))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
z=b.e
if(!$.q.$2(z,this.e))return!1
z=b.f
if(!$.q.$2(z,this.f))return!1
z=b.r
if(!$.q.$2(z,this.r))return!1
z=b.x
if(!$.q.$2(z,this.x))return!1
z=b.y
if(!$.q.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.r]
y=V.ba(H.c([this.a,this.d,this.r],z),3,0)
x=V.ba(H.c([this.b,this.e,this.x],z),3,0)
w=V.ba(H.c([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.d(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.d(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.d(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.d(y,1)
s=" "+y[1]+", "
if(1>=u)return H.d(x,1)
s=s+x[1]+", "
if(1>=t)return H.d(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.d(y,2)
z=" "+y[2]+", "
if(2>=u)return H.d(x,2)
z=z+x[2]+", "
if(2>=t)return H.d(w,2)
return s+(z+w[2]+"]")}},
ac:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ae:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return z},
er:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.q.$2(a2,0))return V.bS()
a3=1/a2
a4=-w
a5=-i
return V.av((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isac")
z=this.a
y=a7.a
x=this.b
w=a7.e
v=this.c
u=a7.y
if(typeof u!=="number")return H.v(u)
t=this.d
s=a7.cx
r=a7.b
q=a7.f
p=a7.z
if(typeof p!=="number")return H.v(p)
o=a7.cy
n=a7.c
m=a7.r
l=a7.Q
if(typeof l!=="number")return H.v(l)
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
return V.av(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
d1:function(a){var z,y,x,w,v,u
z=a.a
y=a.b
x=a.c
if(typeof x!=="number")return H.v(x)
w=this.y
if(typeof w!=="number")return w.k()
v=this.z
if(typeof v!=="number")return v.k()
u=this.Q
if(typeof u!=="number")return u.k()
return new V.C(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,w*z+v*y+u*x)},
bi:function(a){var z,y,x,w,v,u
z=a.a
y=a.b
x=a.c
if(typeof x!=="number")return H.v(x)
w=this.y
if(typeof w!=="number")return w.k()
v=this.z
if(typeof v!=="number")return v.k()
u=this.Q
if(typeof u!=="number")return u.k()
return new V.W(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,w*z+v*y+u*x+this.ch)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
z=b.e
if(!$.q.$2(z,this.e))return!1
z=b.f
if(!$.q.$2(z,this.f))return!1
z=b.r
if(!$.q.$2(z,this.r))return!1
z=b.x
if(!$.q.$2(z,this.x))return!1
z=b.y
if(!$.q.$2(z,this.y))return!1
z=b.z
if(!$.q.$2(z,this.z))return!1
z=b.Q
if(!$.q.$2(z,this.Q))return!1
z=b.ch
if(!$.q.$2(z,this.ch))return!1
z=b.cx
if(!$.q.$2(z,this.cx))return!1
z=b.cy
if(!$.q.$2(z,this.cy))return!1
z=b.db
if(!$.q.$2(z,this.db))return!1
z=b.dx
if(!$.q.$2(z,this.dx))return!1
return!0},
i:function(a){return this.L()},
ej:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.r]
y=V.ba(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.ba(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.ba(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.ba(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.d(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.d(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.d(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.d(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.d(y,1)
q=q+y[1]+", "
if(1>=t)return H.d(x,1)
q=q+x[1]+", "
if(1>=s)return H.d(w,1)
q=q+w[1]+", "
if(1>=r)return H.d(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.d(y,2)
u=u+y[2]+", "
if(2>=t)return H.d(x,2)
u=u+x[2]+", "
if(2>=s)return H.d(w,2)
u=u+w[2]+", "
if(2>=r)return H.d(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.d(y,3)
q=q+y[3]+", "
if(3>=t)return H.d(x,3)
q=q+x[3]+", "
if(3>=s)return H.d(w,3)
q=q+w[3]+", "
if(3>=r)return H.d(v,3)
return u+(q+v[3]+"]")},
L:function(){return this.ej("",3,0)},
C:function(a){return this.ej(a,3,0)},
n:{
bS:function(){var z=$.ej
if(z==null){z=V.av(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.ej=z}return z},
av:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ac(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ei:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.v(0,Math.sqrt(c.F(c)))
y=b.ax(z)
x=y.v(0,Math.sqrt(y.F(y)))
w=z.ax(x)
v=new V.C(a.a,a.b,a.c)
u=x.O(0).F(v)
t=w.O(0).F(v)
s=z.O(0).F(v)
return V.av(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
ad:{"^":"a;a,b",
G:function(a,b){return new V.ad(this.a-b.a,this.b-b.b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"},
n:{
aR:function(){var z=$.eq
if(z==null){z=new V.ad(0,0)
$.eq=z}return z}}},
W:{"^":"a;a,b,c",
B:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.B()
if(typeof w!=="number")return H.v(w)
return new V.W(this.a+z,this.b+y,x+w)},
G:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.G()
if(typeof w!=="number")return H.v(w)
return new V.W(this.a-z,this.b-y,x-w)},
k:function(a,b){var z=this.c
if(typeof z!=="number")return z.k()
return new V.W(this.a*b,this.b*b,z*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"},
n:{
er:function(){var z=$.br
if(z==null){z=new V.W(0,0,0)
$.br=z}return z}}},
cb:{"^":"a;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cb))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
ev:{"^":"a;a,b,c,d",
ga5:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ev))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"},
n:{
ew:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ev(a,b,c,d)}}},
P:{"^":"a;a,b",
jc:[function(a){return Math.sqrt(this.F(this))},"$0","gm",1,0,20],
F:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.v(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.v(w)
return z*y+x*w},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.P(z*b,y*b)},
v:function(a,b){var z,y
if($.q.$2(b,0)){z=$.f1
if(z==null){z=new V.P(0,0)
$.f1=z}return z}z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.P(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
C:{"^":"a;a,b,c",
jc:[function(a){return Math.sqrt(this.F(this))},"$0","gm",1,0,20],
F:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.v(y)
return this.a*a.a+this.b*a.b+z*y},
cQ:function(a,b){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=a.c
if(typeof w!=="number")return w.G()
if(typeof x!=="number")return H.v(x)
return new V.C(z+b*(a.a-z),y+b*(a.b-y),x+b*(w-x))},
ax:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.v(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.k()
v=a.a
u=this.a
return new V.C(z*y-x*w,x*v-u*y,u*w-z*v)},
B:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.B()
if(typeof w!=="number")return H.v(w)
return new V.C(this.a+z,this.b+y,x+w)},
O:function(a){var z=this.c
if(typeof z!=="number")return z.O()
return new V.C(-this.a,-this.b,-z)},
k:function(a,b){var z=this.c
if(typeof z!=="number")return z.k()
return new V.C(this.a*b,this.b*b,z*b)},
v:function(a,b){var z
if($.q.$2(b,0))return V.bt()
z=this.c
if(typeof z!=="number")return z.v()
return new V.C(this.a/b,this.b/b,z/b)},
es:function(){if(!$.q.$2(0,this.a))return!1
if(!$.q.$2(0,this.b))return!1
if(!$.q.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.C))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"},
n:{
bt:function(){var z=$.f5
if(z==null){z=new V.C(0,0,0)
$.f5=z}return z},
f6:function(){var z=$.f4
if(z==null){z=new V.C(0,1,0)
$.f4=z}return z},
f7:function(){var z=$.ck
if(z==null){z=new V.C(0,0,1)
$.ck=z}return z}}}}],["","",,U,{"^":"",hg:{"^":"dO;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c_:function(a){var z=V.mK(a,this.c,this.b)
return z},
gA:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z},
R:function(a){var z=this.y
if(!(z==null))z.I(a)},
sd2:function(a,b){},
scR:function(a){var z,y
z=this.b
if(!$.q.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c_(z)}z=new D.J("maximumLocation",y,this.b,this,[P.r])
z.b=!0
this.R(z)}},
scT:function(a){var z,y
z=this.c
if(!$.q.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c_(z)}z=new D.J("minimumLocation",y,this.c,this,[P.r])
z.b=!0
this.R(z)}},
sa_:function(a,b){var z,y
b=this.c_(b)
z=this.d
if(!$.q.$2(z,b)){y=this.d
this.d=b
z=new D.J("location",y,b,this,[P.r])
z.b=!0
this.R(z)}},
scS:function(a){var z,y,x
z=this.e
if(!$.q.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.J("maximumVelocity",y,a,this,[P.r])
z.b=!0
this.R(z)}},
sU:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.q.$2(z,a)){x=this.f
this.f=a
z=new D.J("velocity",x,a,this,[P.r])
z.b=!0
this.R(z)}},
scD:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.q.$2(z,a)){y=this.x
this.x=a
z=new D.J("dampening",y,a,this,[P.r])
z.b=!0
this.R(z)}},
as:function(a){var z,y,x,w
z=this.f
if($.q.$2(z,0)){z=this.r
z=!$.q.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa_(0,this.d+y*a)
z=this.x
if(!$.q.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sU(y)}},
n:{
cJ:function(){var z=new U.hg()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dQ:{"^":"a7;0a,0b",
gA:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
aQ:function(a,b){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dQ))return!1
return J.D(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")},
n:{
dR:function(a){var z=new U.dQ()
z.a=a
return z}}},e2:{"^":"V;0e,0f,0r,0a,0b,0c,0d",
gA:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
R:[function(a){var z
H.f(a,"$isx")
z=this.e
if(!(z==null))z.I(a)},function(){return this.R(null)},"af","$1","$0","gaC",0,2,1],
k8:[function(a,b){var z,y,x,w,v,u,t,s
z=U.a7
H.j(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gaC(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){s=t.gA()
s.toString
H.l(x,w)
if(s.a==null)s.sah(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c7(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gh4",8,0,21],
kt:[function(a,b){var z,y,x
z=U.a7
H.j(b,"$iso",[z],"$aso")
for(y=b.gW(b),x=this.gaC();y.E();)y.gJ().gA().K(0,x)
z=new D.c8(a,b,this,[z])
z.b=!0
this.R(z)},"$2","ghr",8,0,21],
aQ:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.P()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aq(z,z.length,0,[H.t(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aQ(a,b)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.bS():x
z=this.e
if(!(z==null))z.a7()}return this.f},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e2))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.D(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$aso:function(){return[U.a7]},
$asV:function(){return[U.a7]},
$isa7:1},a7:{"^":"dO;"},jW:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gA:function(){var z=this.cy
if(z==null){z=D.E()
this.cy=z}return z},
R:[function(a){var z
H.f(a,"$isx")
z=this.cy
if(!(z==null))z.I(a)},function(){return this.R(null)},"af","$1","$0","gaC",0,2,1],
aY:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdW().h(0,this.gc7())
this.a.c.geu().h(0,this.gc8())
this.a.c.gbQ().h(0,this.gc9())
return!0},
h0:[function(a){H.f(a,"$isx")
if(!J.D(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc7",4,0,2],
h1:[function(a){var z,y,x,w,v,u,t
a=H.h(H.f(a,"$isx"),"$isbp")
if(!this.y)return
if(this.x){z=a.d.G(0,a.y)
z=new V.P(z.a,z.b)
z=z.F(z)
y=this.r
if(typeof y!=="number")return H.v(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.G(0,a.y)
z=new V.P(y.a,y.b).k(0,2).v(0,z.ga5())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.v(x)
y.sU(z*10*x)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=new V.P(x.a,x.b).k(0,2).v(0,z.ga5())
x=this.b
v=w.a
if(typeof v!=="number")return v.O()
u=this.e
if(typeof u!=="number")return H.v(u)
t=this.z
if(typeof t!=="number")return H.v(t)
x.sa_(0,-v*u+t)
this.b.sU(0)
y=y.G(0,a.z)
this.Q=new V.P(y.a,y.b).k(0,2).v(0,z.ga5())}this.af()},"$1","gc8",4,0,2],
h2:[function(a){var z,y,x
H.f(a,"$isx")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.F(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.v(x)
z.sU(y*10*x)
this.af()}},"$1","gc9",4,0,2],
aQ:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.P()
if(z<y){this.ch=y
x=a.y
this.b.as(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.av(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa7:1},jX:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gA:function(){var z=this.fx
if(z==null){z=D.E()
this.fx=z}return z},
R:[function(a){var z
H.f(a,"$isx")
z=this.fx
if(!(z==null))z.I(a)},function(){return this.R(null)},"af","$1","$0","gaC",0,2,1],
aY:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdW().h(0,this.gc7())
this.a.c.geu().h(0,this.gc8())
this.a.c.gbQ().h(0,this.gc9())
z=this.a.d
y=z.f
if(y==null){y=D.E()
z.f=y
z=y}else z=y
z.h(0,this.gfZ())
z=this.a.d
y=z.d
if(y==null){y=D.E()
z.d=y
z=y}else z=y
z.h(0,this.gh_())
z=this.a.e
y=z.b
if(y==null){y=D.E()
z.b=y
z=y}else z=y
z.h(0,this.gi0())
z=this.a.e
y=z.d
if(y==null){y=D.E()
z.d=y
z=y}else z=y
z.h(0,this.gi_())
z=this.a.e
y=z.c
if(y==null){y=D.E()
z.c=y
z=y}else z=y
z.h(0,this.ghZ())
return!0},
ao:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.O()
z=-z}if(this.r){if(typeof y!=="number")return y.O()
y=-y}return new V.P(z,y)},
h0:[function(a){a=H.h(H.f(a,"$isx"),"$isbp")
if(!J.D(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc7",4,0,2],
h1:[function(a){var z,y,x,w,v,u,t
a=H.h(H.f(a,"$isx"),"$isbp")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.P(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.v(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.ao(new V.P(y.a,y.b).k(0,2).v(0,z.ga5()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.v(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.v(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ao(new V.P(x.a,x.b).k(0,2).v(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.v(u)
t=this.cy
if(typeof t!=="number")return H.v(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.v(v)
x=this.db
if(typeof x!=="number")return H.v(x)
t.sa_(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.G(0,a.z)
this.dx=this.ao(new V.P(y.a,y.b).k(0,2).v(0,z.ga5()))}this.af()},"$1","gc8",4,0,2],
h2:[function(a){var z,y,x
H.f(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.v(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.v(z)
x.sU(-y*10*z)
this.af()}},"$1","gc9",4,0,2],
k5:[function(a){if(H.h(H.f(a,"$isx"),"$isef").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfZ",4,0,2],
k6:[function(a){var z,y,x,w,v,u,t
a=H.h(H.f(a,"$isx"),"$isbp")
if(!J.D(this.d,a.x.b))return
z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ao(new V.P(x.a,x.b).k(0,2).v(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.v(u)
t=this.cy
if(typeof t!=="number")return H.v(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.v(v)
x=this.db
if(typeof x!=="number")return H.v(x)
t.sa_(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.G(0,a.z)
this.dx=this.ao(new V.P(y.a,y.b).k(0,2).v(0,z.ga5()))
this.af()},"$1","gh_",4,0,2],
kB:[function(a){H.f(a,"$isx")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gi0",4,0,2],
kA:[function(a){var z,y,x,w,v,u,t
a=H.h(H.f(a,"$isx"),"$iseL")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.P(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.v(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.ao(new V.P(y.a,y.b).k(0,2).v(0,z.ga5()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.v(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.v(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ao(new V.P(x.a,x.b).k(0,2).v(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.v(u)
t=this.cy
if(typeof t!=="number")return H.v(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.v(v)
x=this.db
if(typeof x!=="number")return H.v(x)
t.sa_(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.G(0,a.z)
this.dx=this.ao(new V.P(y.a,y.b).k(0,2).v(0,z.ga5()))}this.af()},"$1","gi_",4,0,2],
kz:[function(a){var z,y,x
H.f(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.v(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.v(z)
x.sU(-y*10*z)
this.af()}},"$1","ghZ",4,0,2],
aQ:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.P()
if(z<y){this.dy=y
x=a.y
this.c.as(x)
this.b.as(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.av(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.av(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa7:1},jY:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gA:function(){var z=this.r
if(z==null){z=D.E()
this.r=z}return z},
R:function(a){var z=this.r
if(!(z==null))z.I(a)},
aY:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.E()
z.e=y
z=y}else z=y
y=this.gh3()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.E()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
k7:[function(a){var z,y,x,w
H.f(a,"$isx")
if(!J.D(this.b,this.a.b.c))return
H.h(a,"$iscT")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.J("zoom",z,w,this,[P.r])
z.b=!0
this.R(z)}},"$1","gh3",4,0,2],
aQ:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.av(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa7:1}}],["","",,M,{"^":"",hx:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sfA:function(a,b){this.d=H.j(b,"$isV",[E.ar],"$asV")},
aR:[function(a){var z
H.f(a,"$isx")
z=this.x
if(!(z==null))z.I(a)},function(){return this.aR(null)},"k_","$1","$0","gaD",0,2,1],
ke:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ar
H.j(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gaD(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.gag()==null){s=new D.bj()
s.sah(null)
s.sbo(null)
s.c=null
s.d=0
t.sag(s)}s=t.gag()
s.toString
H.l(x,w)
if(s.a==null)s.sah(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c7(a,b,this,[z])
z.b=!0
this.aR(z)},"$2","gha",8,0,8],
kf:[function(a,b){var z,y,x
z=E.ar
H.j(b,"$iso",[z],"$aso")
for(y=b.gW(b),x=this.gaD();y.E();)y.gJ().gA().K(0,x)
z=new D.c8(a,b,this,[z])
z.b=!0
this.aR(z)},"$2","ghb",8,0,8],
gA:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
aO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.eC(this.c)
z=this.b
z.toString
y=a.a
C.b.ct(y,36160,null)
C.b.cF(y,2884)
C.b.cF(y,2929)
C.b.iT(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.v(x)
t=C.j.al(u*x)
u=v.b
if(typeof w!=="number")return H.v(w)
s=C.j.al(u*w)
u=C.j.al(v.c*x)
a.c=u
v=C.j.al(v.d*w)
a.d=v
C.b.jX(y,t,s,u,v)
C.b.iH(y,z.c)
z=z.a
C.b.iG(y,z.a,z.b,z.c,z.d)
C.b.iF(y,16640)
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
a.cy.eB(n)
y=$.eo
if(y==null){y=V.er()
v=V.f6()
u=$.f2
if(u==null){u=new V.C(0,0,-1)
$.f2=u}u=V.ei(y,v,u)
$.eo=u
m=u}else m=y
z=z.b
if(z!=null){l=z.a
if(l!=null)m=l.k(0,m)}a.db.eB(m)
for(z=this.d.a,z=new J.aq(z,z.length,0,[H.t(z,0)]);z.E();)z.d.as(a)
for(z=this.d.a,z=new J.aq(z,z.length,0,[H.t(z,0)]);z.E();)z.d.aO(a)
this.a.toString
a.cy.cV()
a.db.cV()
this.b.toString
a.eA()},
$isn0:1}}],["","",,A,{"^":"",dF:{"^":"a;a,b,c"},h5:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
iZ:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
C.b.dX(w.a,w.c)}},
iV:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
C.b.dV(w.a,w.c)}}},ig:{"^":"cX;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ar,0ak,0bw,0dY,0bx,0by,0dZ,0e_,0bz,0bA,0e0,0e1,0bB,0bC,0e2,0e3,0bD,0e4,0e5,0bE,0e6,0e7,0bF,0bG,0bH,0e8,0e9,0bI,0bJ,0ea,0eb,0bK,0ec,0cG,0ed,0cH,0ee,0cI,0ef,0cJ,0eg,0cK,0eh,0cL,a,b,0c,0d,0e,0f,0r,0x,0y",
sft:function(a){this.r1=H.j(a,"$isb",[A.ay],"$asb")},
sfg:function(a){this.cG=H.j(a,"$isb",[A.d6],"$asb")},
sfh:function(a){this.cH=H.j(a,"$isb",[A.d8],"$asb")},
sfi:function(a){this.cI=H.j(a,"$isb",[A.d9],"$asb")},
sfj:function(a){this.cJ=H.j(a,"$isb",[A.da],"$asb")},
sfk:function(a){this.cK=H.j(a,"$isb",[A.db],"$asb")},
sfl:function(a){this.cL=H.j(a,"$isb",[A.dc],"$asb")},
f5:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.ai("")
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
a2.i8(z)
a2.ih(z)
a2.i9(z)
a2.iq(z)
a2.ir(z)
a2.ij(z)
a2.iv(z)
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
z=new P.ai("")
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
x.ic(z)
x.i7(z)
x.ia(z)
x.ie(z)
x.io(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.il(z)
x.im(z)}x.ii(z)
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
p=H.c([],[P.n])
if(x.b!==C.d)C.a.h(p,"ambient()")
if(x.c!==C.d)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.d)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.d)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.D(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.ib(z)
x.ik(z)
x.ip(z)
x.is(z)
x.it(z)
x.iu(z)
x.ig(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.D(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.dr(s,35633)
this.f=this.dr(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
C.b.dQ(x,v,this.e)
C.b.dQ(x,this.r,this.f)
C.b.jd(x,this.r)
if(!H.fI(C.b.bV(x,this.r,35714))){m=C.b.eT(x,this.r)
C.b.iP(x,this.r)
H.p(P.u("Failed to link shader: "+H.i(m)))}this.hN()
this.hP()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a2.fr)this.id=H.h(this.y.l(0,"invViewMat"),"$isay")
if(y)this.dy=H.h(this.y.l(0,"objMat"),"$isay")
if(w)this.fr=H.h(this.y.l(0,"viewObjMat"),"$isay")
this.fy=H.h(this.y.l(0,"projViewObjMat"),"$isay")
if(a2.x2)this.k1=H.h(this.y.l(0,"txt2DMat"),"$isd7")
if(a2.y1)this.k2=H.h(this.y.l(0,"txtCubeMat"),"$isay")
if(a2.y2)this.k3=H.h(this.y.l(0,"colorMat"),"$isay")
this.sft(H.c([],[A.ay]))
y=a2.ar
if(y>0){this.k4=H.f(this.y.l(0,"bendMatCount"),"$isB")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.p(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.h(k,"$isay"))}}y=a2.a
if(y!==C.d){this.r2=H.h(this.y.l(0,"emissionClr"),"$isA")
switch(y){case C.d:break
case C.i:break
case C.f:this.rx=H.h(this.y.l(0,"emissionTxt"),"$isaj")
this.x1=H.h(this.y.l(0,"nullEmissionTxt"),"$isB")
break
case C.h:this.ry=H.h(this.y.l(0,"emissionTxt"),"$isak")
this.x1=H.h(this.y.l(0,"nullEmissionTxt"),"$isB")
break}}y=a2.b
if(y!==C.d){this.x2=H.h(this.y.l(0,"ambientClr"),"$isA")
switch(y){case C.d:break
case C.i:break
case C.f:this.y1=H.h(this.y.l(0,"ambientTxt"),"$isaj")
this.ar=H.h(this.y.l(0,"nullAmbientTxt"),"$isB")
break
case C.h:this.y2=H.h(this.y.l(0,"ambientTxt"),"$isak")
this.ar=H.h(this.y.l(0,"nullAmbientTxt"),"$isB")
break}}y=a2.c
if(y!==C.d){this.ak=H.h(this.y.l(0,"diffuseClr"),"$isA")
switch(y){case C.d:break
case C.i:break
case C.f:this.bw=H.h(this.y.l(0,"diffuseTxt"),"$isaj")
this.bx=H.h(this.y.l(0,"nullDiffuseTxt"),"$isB")
break
case C.h:this.dY=H.h(this.y.l(0,"diffuseTxt"),"$isak")
this.bx=H.h(this.y.l(0,"nullDiffuseTxt"),"$isB")
break}}y=a2.d
if(y!==C.d){this.by=H.h(this.y.l(0,"invDiffuseClr"),"$isA")
switch(y){case C.d:break
case C.i:break
case C.f:this.dZ=H.h(this.y.l(0,"invDiffuseTxt"),"$isaj")
this.bz=H.h(this.y.l(0,"nullInvDiffuseTxt"),"$isB")
break
case C.h:this.e_=H.h(this.y.l(0,"invDiffuseTxt"),"$isak")
this.bz=H.h(this.y.l(0,"nullInvDiffuseTxt"),"$isB")
break}}y=a2.e
if(y!==C.d){this.bC=H.h(this.y.l(0,"shininess"),"$isT")
this.bA=H.h(this.y.l(0,"specularClr"),"$isA")
switch(y){case C.d:break
case C.i:break
case C.f:this.e0=H.h(this.y.l(0,"specularTxt"),"$isaj")
this.bB=H.h(this.y.l(0,"nullSpecularTxt"),"$isB")
break
case C.h:this.e1=H.h(this.y.l(0,"specularTxt"),"$isak")
this.bB=H.h(this.y.l(0,"nullSpecularTxt"),"$isB")
break}}switch(a2.f){case C.d:break
case C.i:break
case C.f:this.e2=H.h(this.y.l(0,"bumpTxt"),"$isaj")
this.bD=H.h(this.y.l(0,"nullBumpTxt"),"$isB")
break
case C.h:this.e3=H.h(this.y.l(0,"bumpTxt"),"$isak")
this.bD=H.h(this.y.l(0,"nullBumpTxt"),"$isB")
break}if(a2.dy){this.e4=H.h(this.y.l(0,"envSampler"),"$isak")
this.e5=H.h(this.y.l(0,"nullEnvTxt"),"$isB")
y=a2.r
if(y!==C.d){this.bE=H.h(this.y.l(0,"reflectClr"),"$isA")
switch(y){case C.d:break
case C.i:break
case C.f:this.e6=H.h(this.y.l(0,"reflectTxt"),"$isaj")
this.bF=H.h(this.y.l(0,"nullReflectTxt"),"$isB")
break
case C.h:this.e7=H.h(this.y.l(0,"reflectTxt"),"$isak")
this.bF=H.h(this.y.l(0,"nullReflectTxt"),"$isB")
break}}y=a2.x
if(y!==C.d){this.bG=H.h(this.y.l(0,"refraction"),"$isT")
this.bH=H.h(this.y.l(0,"refractClr"),"$isA")
switch(y){case C.d:break
case C.i:break
case C.f:this.e8=H.h(this.y.l(0,"refractTxt"),"$isaj")
this.bI=H.h(this.y.l(0,"nullRefractTxt"),"$isB")
break
case C.h:this.e9=H.h(this.y.l(0,"refractTxt"),"$isak")
this.bI=H.h(this.y.l(0,"nullRefractTxt"),"$isB")
break}}}y=a2.y
if(y!==C.d){this.bJ=H.h(this.y.l(0,"alpha"),"$isT")
switch(y){case C.d:break
case C.i:break
case C.f:this.ea=H.h(this.y.l(0,"alphaTxt"),"$isaj")
this.bK=H.h(this.y.l(0,"nullAlphaTxt"),"$isB")
break
case C.h:this.eb=H.h(this.y.l(0,"alphaTxt"),"$isak")
this.bK=H.h(this.y.l(0,"nullAlphaTxt"),"$isB")
break}}this.sfg(H.c([],[A.d6]))
this.sfh(H.c([],[A.d8]))
this.sfi(H.c([],[A.d9]))
this.sfj(H.c([],[A.da]))
this.sfk(H.c([],[A.db]))
this.sfl(H.c([],[A.dc]))
if(a2.k2){y=a2.z
if(y>0){this.ec=H.f(this.y.l(0,"dirLightCount"),"$isB")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isA")
x=this.y
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isA")
x=this.cG;(x&&C.a).h(x,new A.d6(l,k,j))}}y=a2.Q
if(y>0){this.ed=H.f(this.y.l(0,"pntLightCount"),"$isB")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isA")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isA")
x=this.y
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isA")
x=this.y
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isT")
x=this.y
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isT")
x=this.y
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isT")
x=this.cH;(x&&C.a).h(x,new A.d8(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.ee=H.f(this.y.l(0,"spotLightCount"),"$isB")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isA")
x=this.y
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isA")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isA")
x=this.y
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isA")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isT")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isT")
x=this.y
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isT")
x=this.y
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isT")
x=this.y
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isT")
x=this.cI;(x&&C.a).h(x,new A.d9(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.ef=H.f(this.y.l(0,"txtDirLightCount"),"$isB")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isA")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isA")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isA")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isA")
x=this.y
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isA")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isB")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isaj")
x=this.cJ;(x&&C.a).h(x,new A.da(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.eg=H.f(this.y.l(0,"txtPntLightCount"),"$isB")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isA")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isA")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isd7")
x=this.y
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isA")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isB")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isT")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isT")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isT")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isak")
x=this.cK;(x&&C.a).h(x,new A.db(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.eh=H.f(this.y.l(0,"txtSpotLightCount"),"$isB")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isA")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isA")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isA")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isA")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isA")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isB")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isA")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isT")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isT")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(b,"$isT")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a,"$isT")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a0,"$isT")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a1,"$isaj")
x=this.cL;(x&&C.a).h(x,new A.dc(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
aj:function(a,b,c){C.b.T(b.a,b.d,1)},
aa:function(a,b,c){C.b.T(b.a,b.d,1)},
n:{
ie:function(a,b){var z,y
z=a.ak
y=new A.ig(b,z)
y.f8(b,z)
y.f5(a,b)
return y}}},ij:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ar,ak,bw",
i8:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ar+"];\n"
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
ih:function(a){var z
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
i9:function(a){var z
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
iq:function(a){var z,y
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
ir:function(a){var z,y
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
ij:function(a){var z
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
iv:function(a){var z
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
if(b===C.d)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.d(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.c.az(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
ic:function(a){var z,y
z=this.a
if(z===C.d)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.au(a,z,"emission")
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
i7:function(a){var z,y
z=this.b
if(z===C.d)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.au(a,z,"ambient")
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
ia:function(a){var z,y
z=this.c
if(z===C.d)return
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
ie:function(a){var z,y
z=this.d
if(z===C.d)return
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
io:function(a){var z,y
z=this.e
if(z===C.d)return
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
ii:function(a){var z,y
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
il:function(a){var z,y
z=this.r
if(z===C.d)return
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
im:function(a){var z,y
z=this.x
if(z===C.d)return
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
ib:function(a){var z,y
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
ik:function(a){var z,y
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
ip:function(a){var z,y
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
is:function(a){var z,y,x
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
it:function(a){var z,y,x
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
iu:function(a){var z,y,x
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
ig:function(a){var z
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
i:function(a){return this.ak}},d6:{"^":"a;a,b,c"},da:{"^":"a;a,b,c,d,e,f,r,x"},d8:{"^":"a;a,b,c,d,e,f,r"},db:{"^":"a;a,b,c,d,e,f,r,x,y,z"},d9:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dc:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cX:{"^":"cC;",
f8:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dr:function(a,b){var z,y,x
z=this.a
y=C.b.iN(z,b)
C.b.eZ(z,y,a)
C.b.iJ(z,y)
if(!H.fI(C.b.eW(z,y,35713))){x=C.b.eV(z,y)
C.b.iQ(z,y)
throw H.e(P.u("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
hN:function(){var z,y,x,w,v,u
z=H.c([],[A.dF])
y=this.a
x=H.a4(C.b.bV(y,this.r,35721))
if(typeof x!=="number")return H.v(x)
w=0
for(;w<x;++w){v=C.b.eP(y,this.r,w)
u=C.b.eR(y,this.r,v.name)
C.a.h(z,new A.dF(y,v.name,u))}this.x=new A.h5(z)},
hP:function(){var z,y,x,w,v,u
z=H.c([],[A.a8])
y=this.a
x=H.a4(C.b.bV(y,this.r,35718))
if(typeof x!=="number")return H.v(x)
w=0
for(;w<x;++w){v=C.b.eQ(y,this.r,w)
u=C.b.eX(y,this.r,v.name)
C.a.h(z,this.iO(v.type,v.size,v.name,u))}this.y=new A.jH(z)},
aF:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.B(z,y,b,c)
else return A.d5(z,y,b,a,c)},
fD:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aj(z,y,b,c)
else return A.d5(z,y,b,a,c)},
fE:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ak(z,y,b,c)
else return A.d5(z,y,b,a,c)},
bq:function(a,b){return new P.fc(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
iO:function(a,b,c,d){switch(a){case 5120:return this.aF(b,c,d)
case 5121:return this.aF(b,c,d)
case 5122:return this.aF(b,c,d)
case 5123:return this.aF(b,c,d)
case 5124:return this.aF(b,c,d)
case 5125:return this.aF(b,c,d)
case 5126:return new A.T(this.a,this.r,c,d)
case 35664:return new A.jC(this.a,this.r,c,d)
case 35665:return new A.A(this.a,this.r,c,d)
case 35666:return new A.jF(this.a,this.r,c,d)
case 35667:return new A.jD(this.a,this.r,c,d)
case 35668:return new A.jE(this.a,this.r,c,d)
case 35669:return new A.jG(this.a,this.r,c,d)
case 35674:return new A.jJ(this.a,this.r,c,d)
case 35675:return new A.d7(this.a,this.r,c,d)
case 35676:return new A.ay(this.a,this.r,c,d)
case 35678:return this.fD(b,c,d)
case 35680:return this.fE(b,c,d)
case 35670:throw H.e(this.bq("BOOL",c))
case 35671:throw H.e(this.bq("BOOL_VEC2",c))
case 35672:throw H.e(this.bq("BOOL_VEC3",c))
case 35673:throw H.e(this.bq("BOOL_VEC4",c))
default:throw H.e(P.u("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},c2:{"^":"a;a,b",
i:function(a){return this.b}},a8:{"^":"a;"},jH:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
l:function(a,b){var z=this.j(0,b)
if(z==null)throw H.e(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.L()},
j4:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w)x+=z[w].i(0)+a
return x},
L:function(){return this.j4("\n")}},B:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},jD:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},jE:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},jG:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},jB:{"^":"a8;0e,0f,a,b,c,d",
si5:function(a){this.e=H.j(a,"$isb",[P.m],"$asb")},
i:function(a){return"Uniform1iv: "+H.i(this.c)},
n:{
d5:function(a,b,c,d,e){var z=new A.jB(a,b,c,e)
z.f=d
z.si5(P.i4(d,0,!1,P.m))
return z}}},T:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},jC:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},A:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},jF:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},jJ:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},d7:{"^":"a8;a,b,c,d",
an:function(a){var z=new Float32Array(H.b5(H.j(a,"$isb",[P.r],"$asb")))
C.b.eI(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},ay:{"^":"a8;a,b,c,d",
an:function(a){var z=new Float32Array(H.b5(H.j(a,"$isb",[P.r],"$asb")))
C.b.eJ(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},aj:{"^":"a8;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},ak:{"^":"a8;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
fJ:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.al,P.r,P.r]})
z=F.cY()
F.bA(z,b,c,d,a,1,0,0,1)
F.bA(z,b,c,d,a,0,1,0,3)
F.bA(z,b,c,d,a,0,0,1,2)
F.bA(z,b,c,d,a,-1,0,0,0)
F.bA(z,b,c,d,a,0,-1,0,0)
F.bA(z,b,c,d,a,0,0,-1,3)
z.a4()
return z},
cp:function(a){var z,y
z=a.a>0?1:0
if(a.b>0)z+=2
y=a.c
if(typeof y!=="number")return y.bW()
return(y>0?z+4:z)*2},
bA:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.al,P.r,P.r]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.C(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.C(t+h,s+f,r+g)
z.b=q
p=new V.C(t-h,s-f,r-g)
z.c=p
o=new V.C(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cp(y)
k=F.cp(z.b)
j=F.c_(d,e,new F.lr(z,F.cp(z.c),F.cp(z.d),k,l,c),b)
if(j!=null)a.bL(j)},
lN:function(a,b,c,d,e,f){return F.lP(!1,!1,d,new F.lO(a,f),e)},
lP:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
z=F.c_(c,e,new F.lS(d),null)
if(z==null)return
z.a4()
z.br()
return z},
m9:function(a,b){var z=F.c_(a,b,new F.ma(),null)
z.d.bO()
z.a4()
z.br()
return z},
mD:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.mE()
y=F.fJ(a,null,new F.mF(z,c),d)
y.br()
return y},
mH:function(a,b,c,d){return F.lQ(c,a,d,b,new F.mI())},
lQ:function(a,b,c,d,e){var z=F.c_(a,b,new F.lR(H.l(e,{func:1,ret:V.W,args:[P.r]}),d,b,c),null)
if(z==null)return
z.a4()
z.br()
return z},
dy:function(a,b,c){var z={}
z.a=b
z.a=new F.m_()
return F.c_(c,a,new F.m0(z),null)},
c_:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.al,P.r,P.r]})
if(a<1)return
if(b<1)return
z=F.cY()
y=H.c([],[F.al])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.dg(null,null,new V.c1(u,0,0,1),null,null,new V.ad(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cC(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.dg(null,null,new V.c1(o,n,m,1),null,null,new V.ad(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cC(d))}}z.d.ix(a+1,b+1,y)
return z},
lr:{"^":"k:4;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cQ(z.b,b).cQ(z.d.cQ(z.c,b),c)
a.sa_(0,new V.W(y.a,y.b,y.c))
a.sd0(y.v(0,Math.sqrt(y.F(y))))
z=1-b
x=1-c
a.scr(new V.cb(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
lO:{"^":"k:12;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
lS:{"^":"k:4;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.v(v)
y=-y*v
u=x*v
a.sa_(0,new V.W(y,u,w))
u=new V.C(y,u,w)
a.sd0(u.v(0,Math.sqrt(u.F(u))))
a.scr(new V.cb(1-c,2+c,-1,-1))}},
ma:{"^":"k:4;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.C(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.v(0,Math.sqrt(w.F(w)))
a.sa_(0,new V.W(x.a,x.b,x.c))}},
mE:{"^":"k:12;",
$2:function(a,b){return 0}},
mF:{"^":"k:4;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.v(z)
y=a.f
x=new V.C(y.a,y.b,y.c)
z=x.v(0,Math.sqrt(x.F(x))).k(0,this.b+z)
a.sa_(0,new V.W(z.a,z.b,z.c))}},
mI:{"^":"k:43;",
$1:function(a){return new V.W(Math.cos(a),Math.sin(a),0)}},
lR:{"^":"k:4;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dD(y.$1(z),x)
x=J.dD(y.$1(z+3.141592653589793/this.c),x).G(0,w)
x=new V.C(x.a,x.b,x.c)
v=x.v(0,Math.sqrt(x.F(x)))
y=$.f3
if(y==null){y=new V.C(1,0,0)
$.f3=y
u=y}else u=y
y=v.ax(!J.D(v,u)?V.f7():u)
t=y.v(0,Math.sqrt(y.F(y)))
y=t.ax(v)
u=y.v(0,Math.sqrt(y.F(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
r=y.c
q=x.c
if(typeof r!=="number")return r.G()
if(typeof q!=="number")return H.v(q)
a.sa_(0,w.B(0,new V.W(y.a-x.a,y.b-x.b,r-q)))}},
m_:{"^":"k:12;",
$2:function(a,b){return 0}},
m0:{"^":"k:4;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
a.sa_(0,new V.W(z,y,this.a.a.$2(b,c)))
x=new V.C(z,y,1)
a.sd0(x.v(0,Math.sqrt(x.F(x))))
x=1-b
w=1-c
a.scr(new V.cb(b*c,2+x*c,4+b*w,6+x*w))}},
a5:{"^":"a;0a,0b,0c,0d,0e",
b0:function(){if(!this.gb1()){C.a.K(this.a.a.d.b,this)
this.a.a.a2()}this.cf()
this.cg()
this.hC()},
cl:function(a){this.a=a
C.a.h(a.d.b,this)},
cm:function(a){this.b=a
C.a.h(a.d.c,this)},
hM:function(a){this.c=a
C.a.h(a.d.d,this)},
cf:function(){var z=this.a
if(z!=null){C.a.K(z.d.b,this)
this.a=null}},
cg:function(){var z=this.b
if(z!=null){C.a.K(z.d.c,this)
this.b=null}},
hC:function(){var z=this.c
if(z!=null){C.a.K(z.d.d,this)
this.c=null}},
gb1:function(){return this.a==null||this.b==null||this.c==null},
fs:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bt()
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.es())return
return v.v(0,Math.sqrt(v.F(v)))},
fz:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.G(0,y)
z=new V.C(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.F(z)))
z=w.G(0,y)
z=new V.C(z.a,z.b,z.c)
z=v.ax(z.v(0,Math.sqrt(z.F(z))))
return z.v(0,Math.sqrt(z.F(z)))},
cz:function(){if(this.d!=null)return!0
var z=this.fs()
if(z==null){z=this.fz()
if(z==null)return!1}this.d=z
this.a.a.a2()
return!0},
fq:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bt()
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.es())return
return v.v(0,Math.sqrt(v.F(v)))},
fw:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.q.$2(n,0)){z=r.G(0,u)
z=new V.C(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.F(z)))
if(o.a-p.a<0)m=m.O(0)}else{l=(z-q.b)/n
z=r.G(0,u).k(0,l).B(0,u).G(0,x)
z=new V.C(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.F(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.O(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.F(z)))
z=k.ax(m)
z=z.v(0,Math.sqrt(z.F(z))).ax(k)
m=z.v(0,Math.sqrt(z.F(z)))}return m},
cv:function(){if(this.e!=null)return!0
var z=this.fq()
if(z==null){z=this.fw()
if(z==null)return!1}this.e=z
this.a.a.a2()
return!0},
giI:function(){if(J.D(this.a,this.b))return!0
if(J.D(this.b,this.c))return!0
if(J.D(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var z,y
if(this.gb1())return a+"disposed"
z=a+C.c.ad(J.ab(this.a.e),0)+", "+C.c.ad(J.ab(this.b.e),0)+", "+C.c.ad(J.ab(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
L:function(){return this.C("")},
n:{
bM:function(a,b,c){var z,y,x
z=new F.a5()
y=a.a
if(y==null)H.p(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.u("May not create a face with vertices attached to different shapes."))
z.cl(a)
z.cm(b)
z.hM(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a2()
return z}}},
hA:{"^":"a;"},
j8:{"^":"hA;",
b7:function(a,b,c){var z,y
z=b.a
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
if(z==y.e){z=b.b
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
if(z==y.e){z=b.c
z.a.a.w()
z=z.e
y=c.c
y.a.a.w()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
if(z==y.e){z=b.b
z.a.a.w()
z=z.e
y=c.c
y.a.a.w()
if(z==y.e){z=b.c
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.w()
z=z.e
y=c.c
y.a.a.w()
if(z==y.e){z=b.b
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
if(z==y.e){z=b.c
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=z==y.e
z=y}else z=!1
return z}else return!1}}}},
bn:{"^":"a;0a,0b",
b0:function(){if(!this.gb1()){C.a.K(this.a.a.c.b,this)
this.a.a.a2()}this.cf()
this.cg()},
cl:function(a){this.a=a
C.a.h(a.c.b,this)},
cm:function(a){this.b=a
C.a.h(a.c.c,this)},
cf:function(){var z=this.a
if(z!=null){C.a.K(z.c.b,this)
this.a=null}},
cg:function(){var z=this.b
if(z!=null){C.a.K(z.c.c,this)
this.b=null}},
gb1:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){if(this.gb1())return a+"disposed"
return a+C.c.ad(J.ab(this.a.e),0)+", "+C.c.ad(J.ab(this.b.e),0)},
L:function(){return this.C("")},
n:{
hV:function(a,b){var z,y,x
z=new F.bn()
y=a.a
if(y==null)H.p(P.u("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.p(P.u("May not create a line with vertices attached to different shapes."))
z.cl(a)
z.cm(b)
C.a.h(z.a.a.c.b,z)
z.a.a.a2()
return z}}},
hW:{"^":"a;"},
jA:{"^":"hW;",
b7:function(a,b,c){var z,y
z=b.a
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
if(z==y.e){z=b.b
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
return z==y.e}else{z=b.a
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
if(z==y.e){z=b.b
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
return z==y.e}else return!1}}},
bT:{"^":"a;0a",
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.c.ad(J.ab(z.e),0)},
L:function(){return this.C("")}},
ce:{"^":"a;0a,0b,0c,0d,0e",
gA:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
bL:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.w()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){v=z[w]
this.a.h(0,v.iL())}this.a.w()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.bT()
if(r.a==null)H.p(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.I(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.w()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.hV(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.w()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
m=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,m)
F.bM(p,o,m)}z=this.e
if(!(z==null))z.a7()},
a4:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.a4()||!1
if(!this.a.a4())y=!1
z=this.e
if(!(z==null))z.a7()
return y},
iz:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=a.b,x=a.a,w=x.length,v=a.c,u=z-1;y>=0;--y){t=this.a.c
if(y>=t.length)return H.d(t,y)
s=t[y]
t=s.y
r=C.j.b2(t.a*u)
t=t.b
if(typeof v!=="number")return v.G()
q=C.j.b2(t*(v-1))
r=r>=0?C.e.am(r,z):z+C.e.am(r,z)
p=(r+(q>=0?C.e.am(q,v):v+C.e.am(q,v))*z)*4
if(p<0||p>=w)return H.d(x,p)
t=x[p]/255
o=p+1
if(o>=w)return H.d(x,o)
o=x[o]/255
n=p+2
if(n>=w)return H.d(x,n)
n=x[n]/255
m=p+3
if(m>=w)return H.d(x,m)
m=x[m]/255
if(t<0)t=0
else if(t>1)t=1
if(o<0)o=0
else if(o>1)o=1
if(n<0)n=0
else if(n>1)n=1
if(!(m<0))if(m>1)m=1
l=(t+o+n)*b/3
t=s.f
o=s.r
n=o.a
m=o.b
o=o.c
if(typeof o!=="number")return o.k()
k=t.a
j=t.b
i=t.c
if(typeof i!=="number")return i.B()
o=new V.W(k+n*l,j+m*l,i+o*l)
if(!J.D(t,o)){s.f=o
t=s.a
if(t!=null){t=t.e
if(!(t==null))t.I(null)}}}z=this.e
if(!(z==null))z.a7()},
jU:function(a){var z,y,x,w,v
z=this.e
if(!(z==null))++z.d
for(z=this.a,y=z.c.length-1,x=a.a;y>=0;--y){w=z.c
if(y>=w.length)return H.d(w,y)
v=w[y]
if((x&$.$get$aB().a)===0)v.f=null
if((x&$.$get$at().a)===0)v.r=null
if((x&$.$get$aA().a)===0)v.x=null
if((x&$.$get$aC().a)===0)v.y=null
if((x&$.$get$aD().a)===0)v.z=null
if((x&$.$get$di().a)===0)v.Q=null
if((x&$.$get$aU().a)===0)v.ch=0
if((x&$.$get$az().a)===0)v.cx=null}z=this.e
if(!(z==null))z.a7()},
jT:function(a,b){var z,y,x,w
z=this.e
if(!(z==null))++z.d
for(z=this.d,y=z.b.length-1;y>=0;--y){x=z.b
if(y>=x.length)return H.d(x,y)
w=x[y]
w.d=null}z=this.e
if(!(z==null))z.a7()},
jS:function(a){return this.jT(!0,a)},
ji:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.t(z,0)])
for(z=[F.al];y.length!==0;){x=C.a.gj2(y)
C.a.jA(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.y)(y),++u){t=y[u]
if(t!=null&&a.b7(0,x,t)){C.a.h(w,t)
C.a.K(y,t)}}if(w.length>1)b.bL(w)}}this.a.w()
this.c.bO()
this.d.bO()
this.b.jB()
this.c.cX(new F.jA())
this.d.cX(new F.j8())
z=this.e
if(!(z==null))z.a7()},
iy:function(a){this.ji(new F.kb(),new F.it())},
br:function(){return this.iy(null)},
iD:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aB()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$at().a)!==0)++w
if((x&$.$get$aA().a)!==0)++w
if((x&$.$get$aC().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$bu().a)!==0)++w
if((x&$.$get$bv().a)!==0)++w
if((x&$.$get$aU().a)!==0)++w
if((x&$.$get$az().a)!==0)++w
v=b.gd9(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.r
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dJ])
for(r=0,q=0;q<w;++q){p=b.iA(q)
o=p.gd9(p)
C.a.p(s,q,new Z.dJ(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].je(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.p(t,l,m[k]);++l}}r+=o}H.j(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.ap(y,34962,j)
C.b.dS(y,34962,new Float32Array(H.b5(t)),35044)
C.b.ap(y,34962,null)
i=new Z.dK(new Z.f9(34962,j),s,b)
i.sfT(H.c([],[Z.bO]))
if(this.b.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)}f=Z.dj(y,34963,H.j(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bO(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)}f=Z.dj(y,34963,H.j(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bO(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].c
g.a.a.w()
C.a.h(h,g.e)}f=Z.dj(y,34963,H.j(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bO(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.D(z,"\n")},
a6:function(a){var z=this.e
if(!(z==null))z.I(a)},
a2:function(){return this.a6(null)},
$isn2:1,
n:{
cY:function(){var z,y
z=new F.ce()
y=new F.k6(z)
y.b=!1
y.si6(H.c([],[F.al]))
z.a=y
y=new F.j3(z)
y.scc(H.c([],[F.bT]))
z.b=y
y=new F.j2(z)
y.sfV(H.c([],[F.bn]))
z.c=y
y=new F.j1(z)
y.sfJ(H.c([],[F.a5]))
z.d=y
z.e=null
return z}}},
j1:{"^":"a;a,0b",
sfJ:function(a){this.b=H.j(a,"$isb",[F.a5],"$asb")},
ix:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(c,"$isb",[F.al],"$asb")
z=H.c([],[F.a5])
for(y=this.a,x=b,w=0,v=!1,u=1;u<a;++u,++w,++x){for(t=v,s=1;s<b;++s,x=o){r=c.length
if(w<0||w>=r)return H.d(c,w)
q=c[w];++w
if(w>=r)return H.d(c,w)
p=c[w]
o=x+1
if(o<0||o>=r)return H.d(c,o)
n=c[o]
if(x<0||x>=r)return H.d(c,x)
m=c[x]
r=y.a
if(t){r.h(0,q)
y.a.h(0,p)
y.a.h(0,n)
C.a.h(z,F.bM(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bM(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bM(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bM(p,m,q))}t=!t}v=!v}return z},
gm:function(a){return this.b.length},
cX:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.d(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.j(0,v)
for(t=v-1;t>=0;--t){s=w.d.j(0,t)
if(a.b7(0,u,s)){u.b0()
break}}}}},
bO:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.giI()
if(y)x.b0()}},
a4:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].cz())x=!1
return x},
cw:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].cv())x=!1
return x},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
L:function(){return this.C("")}},
j2:{"^":"a;a,0b",
sfV:function(a){this.b=H.j(a,"$isb",[F.bn],"$asb")},
gm:function(a){return this.b.length},
cX:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.d(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.j(0,v)
for(t=v-1;t>=0;--t){s=w.c.j(0,t)
if(a.b7(0,u,s)){u.b0()
break}}}}},
bO:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.D(x.a,x.b)
if(y)x.b0()}},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.c([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.D(z,"\n")},
L:function(){return this.C("")}},
j3:{"^":"a;a,0b",
scc:function(a){this.b=H.j(a,"$isb",[F.bT],"$asb")},
gm:function(a){return this.b.length},
jB:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
x=y.a
if(x.b.b.length>1){if(x!=null){C.a.K(x.a.b.b,y)
x=y.a.a.e
if(!(x==null))x.I(null)}x=y.a
if(x!=null){C.a.K(x.b.b,y)
y.a=null}}}},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
L:function(){return this.C("")}},
al:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cC:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.dg(this.cx,x,u,z,y,w,v,a,t)},
iL:function(){return this.cC(null)},
sa_:function(a,b){var z
if(!J.D(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a2()}},
sd0:function(a){var z
if(!J.D(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a2()}},
scr:function(a){var z
if(!J.D(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a2()}},
je:function(a){var z,y
if(a.t(0,$.$get$aB())){z=this.f
y=[P.r]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.t(0,$.$get$at())){z=this.r
y=[P.r]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.t(0,$.$get$aA())){z=this.x
y=[P.r]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.t(0,$.$get$aC())){z=this.y
y=[P.r]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.t(0,$.$get$aD())){z=this.z
y=[P.r]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.t(0,$.$get$bu())){z=this.Q
y=[P.r]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.t(0,$.$get$bv())){z=this.Q
y=[P.r]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.t(0,$.$get$aU()))return H.c([this.ch],[P.r])
else if(a.t(0,$.$get$az())){z=this.cx
y=[P.r]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.r])},
cz:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bt()
this.d.S(0,new F.kg(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.a2()
z=this.a.e
if(!(z==null))z.a7()}return!0},
cv:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bt()
this.d.S(0,new F.kf(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.a2()
z=this.a.e
if(!(z==null))z.a7()}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var z,y,x
z=H.c([],[P.n])
C.a.h(z,C.c.ad(J.ab(this.e),0))
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
x=C.a.D(z,", ")
return a+"{"+x+"}"},
L:function(){return this.C("")},
n:{
dg:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.al()
y=new F.ke(z)
y.scc(H.c([],[F.bT]))
z.b=y
y=new F.ka(z)
x=[F.bn]
y.sfW(H.c([],x))
y.sfX(H.c([],x))
z.c=y
y=new F.k7(z)
x=[F.a5]
y.sfK(H.c([],x))
y.sfL(H.c([],x))
y.sfM(H.c([],x))
z.d=y
h=$.$get$dh()
z.e=0
y=$.$get$aB()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$at().a)!==0?e:null
z.x=(x&$.$get$aA().a)!==0?b:null
z.y=(x&$.$get$aC().a)!==0?f:null
z.z=(x&$.$get$aD().a)!==0?g:null
z.Q=(x&$.$get$di().a)!==0?c:null
z.ch=(x&$.$get$aU().a)!==0?i:0
z.cx=(x&$.$get$az().a)!==0?a:null
return z}}},
kg:{"^":"k:9;a",
$1:function(a){var z,y
H.f(a,"$isa5")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
kf:{"^":"k:9;a",
$1:function(a){var z,y
H.f(a,"$isa5")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
k6:{"^":"a;a,0b,0c",
si6:function(a){this.c=H.j(a,"$isb",[F.al],"$asb")},
w:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.d(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.e(P.u("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a2()
return!0},
gm:function(a){return this.c.length},
a4:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].cz()
return!0},
cw:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].cv()
return!0},
iE:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
if(typeof s!=="number")return s.k()
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.D(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.I(null)}}}}return!0},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
this.w()
z=H.c([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
L:function(){return this.C("")}},
k7:{"^":"a;a,0b,0c,0d",
sfK:function(a){this.b=H.j(a,"$isb",[F.a5],"$asb")},
sfL:function(a){this.c=H.j(a,"$isb",[F.a5],"$asb")},
sfM:function(a){this.d=H.j(a,"$isb",[F.a5],"$asb")},
gm:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.d(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.d(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.d(z,b)
return z[b]},
S:function(a,b){H.l(b,{func:1,ret:-1,args:[F.a5]})
C.a.S(this.b,b)
C.a.S(this.c,new F.k8(this,b))
C.a.S(this.d,new F.k9(this,b))},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
L:function(){return this.C("")}},
k8:{"^":"k:9;a,b",
$1:function(a){H.f(a,"$isa5")
if(!J.D(a.a,this.a))this.b.$1(a)}},
k9:{"^":"k:9;a,b",
$1:function(a){var z
H.f(a,"$isa5")
z=this.a
if(!J.D(a.a,z)&&!J.D(a.b,z))this.b.$1(a)}},
ka:{"^":"a;a,0b,0c",
sfW:function(a){this.b=H.j(a,"$isb",[F.bn],"$asb")},
sfX:function(a){this.c=H.j(a,"$isb",[F.bn],"$asb")},
gm:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.d(z,x)
return z[x]}else{if(b<0)return H.d(z,b)
return z[b]}},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
L:function(){return this.C("")}},
kc:{"^":"a;"},
kb:{"^":"kc;",
b7:function(a,b,c){return J.D(b.f,c.f)}},
kd:{"^":"a;"},
it:{"^":"kd;",
bL:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.j(a,"$isb",[F.al],"$asb")
z=V.bt()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null){v=z.a
u=w.a
t=z.b
s=w.b
r=z.c
w=w.c
if(typeof r!=="number")return r.B()
if(typeof w!=="number")return H.v(w)
z=new V.C(v+u,t+s,r+w)}}z=z.v(0,Math.sqrt(z.F(z)))
for(y=a.length,w=z==null,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){q=a[x]
if(w)p=null
else{v=z.a
u=z.b
t=z.c
if(typeof t!=="number")return t.k()
p=z.v(0,Math.sqrt(v*v+u*u+t*t))}if(!J.D(q.r,p)){q.r=p
v=q.a
if(v!=null){v=v.e
if(!(v==null))v.I(null)}}}return}},
ke:{"^":"a;a,0b",
scc:function(a){this.b=H.j(a,"$isb",[F.bT],"$asb")},
gm:function(a){return this.b.length},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
L:function(){return this.C("")}}}],["","",,O,{"^":"",id:{"^":"cg;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sfu:function(a){this.e=H.j(a,"$isV",[V.ac],"$asV")},
gA:function(){var z=this.dy
if(z==null){z=D.E()
this.dy=z}return z},
ai:[function(a){var z
H.f(a,"$isx")
z=this.dy
if(!(z==null))z.I(a)},function(){return this.ai(null)},"kd","$1","$0","gh9",0,2,1],
hH:[function(a){H.f(a,"$isx")
this.a=null
this.ai(a)},function(){return this.hH(null)},"ky","$1","$0","ghG",0,2,1],
ka:[function(a,b){var z=V.ac
z=new D.c7(a,H.j(b,"$iso",[z],"$aso"),this,[z])
z.b=!0
this.ai(z)},"$2","gh6",8,0,15],
kb:[function(a,b){var z=V.ac
z=new D.c8(a,H.j(b,"$iso",[z],"$aso"),this,[z])
z.b=!0
this.ai(z)},"$2","gh7",8,0,15],
dm:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.e.a3(z.e.length+3,4)*4
x=C.e.a3(z.f.length+3,4)*4
w=C.e.a3(z.r.length+3,4)*4
v=C.e.a3(z.x.length+3,4)*4
u=C.e.a3(z.y.length+3,4)*4
t=C.e.a3(z.z.length+3,4)*4
s=C.e.a3(this.e.a.length+3,4)*4
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
a2=$.$get$aB()
if(e){g=$.$get$at()
a2=new Z.aT(a2.a|g.a)}if(d){g=$.$get$aA()
a2=new Z.aT(a2.a|g.a)}if(c){g=$.$get$aC()
a2=new Z.aT(a2.a|g.a)}if(b){g=$.$get$aD()
a2=new Z.aT(a2.a|g.a)}if(a0){g=$.$get$az()
a2=new Z.aT(a2.a|g.a)}return new A.ij(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
X:function(a,b){H.j(a,"$isb",[T.d0],"$asb")},
as:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.aq(z,z.length,0,[H.t(z,0)]);z.E();){y=z.d
y.toString
x=$.ck
if(x==null){x=new V.C(0,0,1)
$.ck=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.d1(x)}}},
jD:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=this.a
if(z==null){z=this.dm()
y=a.fr.j(0,z.ak)
if(y==null){y=A.ie(z,a.a)
x=y.b
if(x.length===0)H.p(P.u("May not cache a shader with no name."))
if(a.fr.bv(x))H.p(P.u('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.p(0,x,y)}this.a=y
a0.e=null
z=y}w=z.z
v=w.bw
z=a0.e
if(!(z instanceof Z.dK)){a0.e=null
z=null}if(z==null||!z.d.t(0,v)){z=w.r1
if(z)a0.d.a4()
u=w.r2
if(u){t=a0.d
s=t.e
if(!(s==null))++s.d
t.d.cw()
t.a.cw()
t=t.e
if(!(t==null))t.a7()}t=w.ry
if(t){s=a0.d
r=s.e
if(!(r==null))++r.d
s.a.iE()
s=s.e
if(!(s==null))s.a7()}q=a0.d.iD(new Z.kh(a.a),v)
q.aM($.$get$aB()).e=this.a.Q.c
if(z)q.aM($.$get$at()).e=this.a.cx.c
if(u)q.aM($.$get$aA()).e=this.a.ch.c
if(w.rx)q.aM($.$get$aC()).e=this.a.cy.c
if(t)q.aM($.$get$aD()).e=this.a.db.c
if(w.x1)q.aM($.$get$az()).e=this.a.dx.c
a0.e=q}z=T.d0
p=H.c([],[z])
u=this.a
t=a.a
C.b.eL(t,u.r)
u.x.iZ()
if(w.fx){u=this.a
s=a.dx.ga0()
u=u.dy
u.toString
u.an(s.ae(0,!0))}if(w.fy){u=this.a
s=a.cx
if(s==null){s=a.db.ga0().k(0,a.dx.ga0())
a.cx=s}u=u.fr
u.toString
u.an(s.ae(0,!0))}u=this.a
s=a.ch
if(s==null){s=a.gjz().k(0,a.dx.ga0())
a.ch=s}u=u.fy
u.toString
u.an(s.ae(0,!0))
if(w.x2){u=this.a
s=this.b
u=u.k1
u.toString
u.an(C.o.ae(s,!0))}if(w.y1){u=this.a
s=this.c
u=u.k2
u.toString
u.an(C.o.ae(s,!0))}if(w.y2){u=this.a
s=this.d
u=u.k3
u.toString
u.an(C.o.ae(s,!0))}if(w.ar>0){o=this.e.a.length
u=this.a.k4
C.b.T(u.a,u.d,o)
for(u=[P.r],n=0;n<o;++n){s=this.a
r=this.e.a
if(n>=r.length)return H.d(r,n)
r=r[n]
s.toString
H.f(r,"$isac")
s=s.r1
if(n>=s.length)return H.d(s,n)
s=s[n]
m=new Float32Array(H.b5(H.j(r.ae(0,!0),"$isb",u,"$asb")))
C.b.eJ(s.a,s.d,!1,m)}}switch(w.a){case C.d:break
case C.i:u=this.a
s=this.f.f
u=u.r2
u.toString
r=s.a
l=s.b
s=s.c
C.b.u(u.a,u.d,r,l,s)
break
case C.f:this.X(p,this.f.d)
u=this.a
s=this.f.d
u.aj(u.rx,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
s.toString
r=u.a
l=u.b
u=u.c
C.b.u(s.a,s.d,r,l,u)
break
case C.h:this.X(p,this.f.e)
u=this.a
s=this.f.e
u.aa(u.ry,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
s.toString
r=u.a
l=u.b
u=u.c
C.b.u(s.a,s.d,r,l,u)
break}if(w.k2){switch(w.b){case C.d:break
case C.i:u=this.a
s=this.r.f
u=u.x2
u.toString
r=s.a
l=s.b
s=s.c
C.b.u(u.a,u.d,r,l,s)
break
case C.f:this.X(p,this.r.d)
u=this.a
s=this.r.d
u.aj(u.y1,u.ar,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.b.u(s.a,s.d,r,l,u)
break
case C.h:this.X(p,this.r.e)
u=this.a
s=this.r.e
u.aa(u.y2,u.ar,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.b.u(s.a,s.d,r,l,u)
break}switch(w.c){case C.d:break
case C.i:u=this.a
s=this.x.f
u=u.ak
u.toString
r=s.a
l=s.b
s=s.c
C.b.u(u.a,u.d,r,l,s)
break
case C.f:this.X(p,this.x.d)
u=this.a
s=this.x.d
u.aj(u.bw,u.bx,s)
s=this.a
u=this.x.f
s=s.ak
s.toString
r=u.a
l=u.b
u=u.c
C.b.u(s.a,s.d,r,l,u)
break
case C.h:this.X(p,this.x.e)
u=this.a
s=this.x.e
u.aa(u.dY,u.bx,s)
s=this.a
u=this.x.f
s=s.ak
s.toString
r=u.a
l=u.b
u=u.c
C.b.u(s.a,s.d,r,l,u)
break}switch(w.d){case C.d:break
case C.i:u=this.a
s=this.y.f
u=u.by
u.toString
r=s.a
l=s.b
s=s.c
C.b.u(u.a,u.d,r,l,s)
break
case C.f:this.X(p,this.y.d)
u=this.a
s=this.y.d
u.aj(u.dZ,u.bz,s)
s=this.a
u=this.y.f
s=s.by
s.toString
r=u.a
l=u.b
u=u.c
C.b.u(s.a,s.d,r,l,u)
break
case C.h:this.X(p,this.y.e)
u=this.a
s=this.y.e
u.aa(u.e_,u.bz,s)
s=this.a
u=this.y.f
s=s.by
s.toString
r=u.a
l=u.b
u=u.c
C.b.u(s.a,s.d,r,l,u)
break}switch(w.e){case C.d:break
case C.i:u=this.a
s=this.z.f
u=u.bA
u.toString
r=s.a
l=s.b
s=s.c
C.b.u(u.a,u.d,r,l,s)
s=this.a
l=this.z.ch
s=s.bC
C.b.M(s.a,s.d,l)
break
case C.f:this.X(p,this.z.d)
u=this.a
s=this.z.d
u.aj(u.e0,u.bB,s)
s=this.a
u=this.z.f
s=s.bA
s.toString
r=u.a
l=u.b
u=u.c
C.b.u(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bC
C.b.M(u.a,u.d,l)
break
case C.h:this.X(p,this.z.e)
u=this.a
s=this.z.e
u.aa(u.e1,u.bB,s)
s=this.a
u=this.z.f
s=s.bA
s.toString
r=u.a
l=u.b
u=u.c
C.b.u(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bC
C.b.M(u.a,u.d,l)
break}if(w.z>0){o=this.dx.e.length
u=this.a.ec
C.b.T(u.a,u.d,o)
k=a.db.ga0()
for(u=this.dx.e,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cG
if(j>=r.length)return H.d(r,j)
g=r[j]
r=k.d1(h.a)
l=r.a
f=r.b
e=r.c
if(typeof e!=="number")return e.k()
e=r.v(0,Math.sqrt(l*l+f*f+e*e))
f=g.b
l=e.a
r=e.b
e=e.c
C.b.u(f.a,f.d,l,r,e)
e=h.c
r=g.c
C.b.u(r.a,r.d,e.a,e.b,e.c);++j}}if(w.Q>0){o=this.dx.f.length
u=this.a.ed
C.b.T(u.a,u.d,o)
k=a.db.ga0()
for(u=this.dx.f,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cH
if(j>=r.length)return H.d(r,j)
g=r[j]
r=h.gbb(h)
l=g.b
f=r.gd3(r)
e=r.gd4(r)
r=r.gd5(r)
C.b.u(l.a,l.d,f,e,r)
r=k.bi(h.gbb(h))
e=g.c
C.b.u(e.a,e.d,r.a,r.b,r.c)
r=h.gaq(h)
e=g.d
f=r.gbN()
l=r.gbk()
r=r.gbu()
C.b.u(e.a,e.d,f,l,r)
r=h.gco()
l=g.e
C.b.M(l.a,l.d,r)
r=h.gcp()
l=g.f
C.b.M(l.a,l.d,r)
r=h.gcq()
l=g.r
C.b.M(l.a,l.d,r);++j}}if(w.ch>0){o=this.dx.r.length
u=this.a.ee
C.b.T(u.a,u.d,o)
k=a.db.ga0()
for(u=this.dx.r,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cI
if(j>=r.length)return H.d(r,j)
g=r[j]
r=h.gbb(h)
l=g.b
f=r.gd3(r)
e=r.gd4(r)
r=r.gd5(r)
C.b.u(l.a,l.d,f,e,r)
r=h.gcE(h).kF()
e=g.c
f=r.gaJ(r)
l=r.gaK(r)
r=r.gaL()
C.b.u(e.a,e.d,f,l,r)
r=k.bi(h.gbb(h))
l=g.d
C.b.u(l.a,l.d,r.a,r.b,r.c)
r=h.gaq(h)
l=g.e
f=r.gbN()
e=r.gbk()
r=r.gbu()
C.b.u(l.a,l.d,f,e,r)
r=h.gkD()
e=g.f
C.b.M(e.a,e.d,r)
r=h.gkC()
e=g.r
C.b.M(e.a,e.d,r)
r=h.gco()
e=g.x
C.b.M(e.a,e.d,r)
r=h.gcp()
e=g.y
C.b.M(e.a,e.d,r)
r=h.gcq()
e=g.z
C.b.M(e.a,e.d,r);++j}}if(w.cx>0){o=this.dx.x.length
u=this.a.ef
C.b.T(u.a,u.d,o)
k=a.db.ga0()
for(u=this.dx.x,s=u.length,r=[z],j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
l=this.a.cJ
if(j>=l.length)return H.d(l,j)
g=l[j]
l=h.gbe()
H.j(p,"$isb",r,"$asb")
if(!C.a.aZ(p,l)){l.sb4(0,p.length)
C.a.h(p,l)}l=h.gcE(h)
f=g.d
e=l.gaJ(l)
d=l.gaK(l)
l=l.gaL()
C.b.u(f.a,f.d,e,d,l)
l=h.gbQ()
d=g.b
e=l.gaJ(l)
f=l.gaK(l)
l=l.gaL()
C.b.u(d.a,d.d,e,f,l)
l=h.gbd(h)
f=g.c
e=l.gaJ(l)
d=l.gaK(l)
l=l.gaL()
C.b.u(f.a,f.d,e,d,l)
l=k.d1(h.gcE(h))
d=l.a
e=l.b
f=l.c
if(typeof f!=="number")return f.k()
f=l.v(0,Math.sqrt(d*d+e*e+f*f))
e=g.e
d=f.a
l=f.b
f=f.c
C.b.u(e.a,e.d,d,l,f)
f=h.gaq(h)
l=g.f
d=f.gbN()
e=f.gbk()
f=f.gbu()
C.b.u(l.a,l.d,d,e,f)
f=h.gbe()
l=f.gb5(f)
if(!l){l=g.x
C.b.T(l.a,l.d,1)}else{l=g.r
e=f.gb5(f)
d=l.a
l=l.d
if(!e)C.b.T(d,l,0)
else C.b.T(d,l,f.gb4(f))
l=g.x
C.b.T(l.a,l.d,0)}++j}}if(w.cy>0){o=this.dx.y.length
u=this.a.eg
C.b.T(u.a,u.d,o)
k=a.db.ga0()
for(u=this.dx.y,s=u.length,r=[P.r],l=[z],j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
f=this.a.cK
if(j>=f.length)return H.d(f,j)
g=f[j]
f=h.gbe()
H.j(p,"$isb",l,"$asb")
if(!C.a.aZ(p,f)){f.sb4(0,p.length)
C.a.h(p,f)}c=k.k(0,h.ga0())
f=h.ga0()
e=$.br
if(e==null){e=new V.W(0,0,0)
$.br=e}e=f.bi(e)
f=g.b
d=e.gd3(e)
b=e.gd4(e)
e=e.gd5(e)
C.b.u(f.a,f.d,d,b,e)
f=$.br
if(f==null){f=new V.W(0,0,0)
$.br=f}f=c.bi(f)
e=g.c
C.b.u(e.a,e.d,f.a,f.b,f.c)
f=c.er()
e=g.d
m=new Float32Array(H.b5(H.j(new V.eh(f.a,f.b,f.c,f.e,f.f,f.r,f.y,f.z,f.Q).ae(0,!0),"$isb",r,"$asb")))
C.b.eI(e.a,e.d,!1,m)
e=h.gaq(h)
f=g.e
d=e.gbN()
b=e.gbk()
e=e.gbu()
C.b.u(f.a,f.d,d,b,e)
e=h.gbe()
f=e.gb5(e)
if(!f){f=g.r
C.b.T(f.a,f.d,1)}else{f=g.f
d=e.gb5(e)
b=f.a
f=f.d
if(!d)C.b.T(b,f,0)
else C.b.T(b,f,e.gb4(e))
f=g.r
C.b.T(f.a,f.d,0)}f=h.gco()
e=g.x
C.b.M(e.a,e.d,f)
f=h.gcp()
e=g.y
C.b.M(e.a,e.d,f)
f=h.gcq()
e=g.z
C.b.M(e.a,e.d,f);++j}}if(w.db>0){o=this.dx.z.length
u=this.a.eh
C.b.T(u.a,u.d,o)
k=a.db.ga0()
for(u=this.dx.z,s=u.length,z=[z],j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cL
if(j>=r.length)return H.d(r,j)
g=r[j]
r=h.gbe()
H.j(p,"$isb",z,"$asb")
if(!C.a.aZ(p,r)){r.sb4(0,p.length)
C.a.h(p,r)}r=h.gbb(h)
l=g.b
f=r.gd3(r)
e=r.gd4(r)
r=r.gd5(r)
C.b.u(l.a,l.d,f,e,r)
r=h.gcE(h)
e=g.c
f=r.gaJ(r)
l=r.gaK(r)
r=r.gaL()
C.b.u(e.a,e.d,f,l,r)
r=h.gbQ()
l=g.d
f=r.gaJ(r)
e=r.gaK(r)
r=r.gaL()
C.b.u(l.a,l.d,f,e,r)
r=h.gbd(h)
e=g.e
f=r.gaJ(r)
l=r.gaK(r)
r=r.gaL()
C.b.u(e.a,e.d,f,l,r)
r=k.bi(h.gbb(h))
l=g.f
C.b.u(l.a,l.d,r.a,r.b,r.c)
r=h.gbe()
l=r.gb5(r)
if(!l){r=g.x
C.b.T(r.a,r.d,1)}else{l=g.r
f=r.gb5(r)
e=l.a
l=l.d
if(!f)C.b.T(e,l,0)
else C.b.T(e,l,r.gb4(r))
r=g.x
C.b.T(r.a,r.d,0)}r=h.gaq(h)
l=g.y
f=r.gbN()
e=r.gbk()
r=r.gbu()
C.b.u(l.a,l.d,f,e,r)
r=h.gkM()
e=g.z
C.b.M(e.a,e.d,r)
r=h.gkN()
e=g.Q
C.b.M(e.a,e.d,r)
r=h.gco()
e=g.ch
C.b.M(e.a,e.d,r)
r=h.gcp()
e=g.cx
C.b.M(e.a,e.d,r)
r=h.gcq()
e=g.cy
C.b.M(e.a,e.d,r);++j}}}switch(w.f){case C.d:break
case C.i:break
case C.f:this.X(p,this.Q.d)
z=this.a
u=this.Q.d
z.aj(z.e2,z.bD,u)
break
case C.h:this.X(p,this.Q.e)
z=this.a
u=this.Q.e
z.aa(z.e3,z.bD,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db.ga0().er()
a.Q=u}z=z.id
z.toString
z.an(u.ae(0,!0))}if(w.dy){this.X(p,this.ch)
z=this.a
u=this.ch
z.aa(z.e4,z.e5,u)
switch(w.r){case C.d:break
case C.i:z=this.a
u=this.cx.f
z=z.bE
z.toString
s=u.a
r=u.b
u=u.c
C.b.u(z.a,z.d,s,r,u)
break
case C.f:this.X(p,this.cx.d)
z=this.a
u=this.cx.d
z.aj(z.e6,z.bF,u)
u=this.a
z=this.cx.f
u=u.bE
u.toString
s=z.a
r=z.b
z=z.c
C.b.u(u.a,u.d,s,r,z)
break
case C.h:this.X(p,this.cx.e)
z=this.a
u=this.cx.e
z.aa(z.e7,z.bF,u)
u=this.a
z=this.cx.f
u=u.bE
u.toString
s=z.a
r=z.b
z=z.c
C.b.u(u.a,u.d,s,r,z)
break}switch(w.x){case C.d:break
case C.i:z=this.a
u=this.cy.f
z=z.bH
z.toString
s=u.a
r=u.b
u=u.c
C.b.u(z.a,z.d,s,r,u)
u=this.a
r=this.cy.ch
u=u.bG
C.b.M(u.a,u.d,r)
break
case C.f:this.X(p,this.cy.d)
z=this.a
u=this.cy.d
z.aj(z.e8,z.bI,u)
u=this.a
z=this.cy.f
u=u.bH
u.toString
s=z.a
r=z.b
z=z.c
C.b.u(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bG
C.b.M(z.a,z.d,r)
break
case C.h:this.X(p,this.cy.e)
z=this.a
u=this.cy.e
z.aa(z.e9,z.bI,u)
u=this.a
z=this.cy.f
u=u.bH
u.toString
s=z.a
r=z.b
z=z.c
C.b.u(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bG
C.b.M(z.a,z.d,r)
break}}z=w.y
u=z!==C.d
if(u){switch(z){case C.d:break
case C.i:z=this.a
s=this.db.f
z=z.bJ
C.b.M(z.a,z.d,s)
break
case C.f:this.X(p,this.db.d)
z=this.a
s=this.db.d
z.aj(z.ea,z.bK,s)
s=this.a
z=this.db.f
s=s.bJ
C.b.M(s.a,s.d,z)
break
case C.h:this.X(p,this.db.e)
z=this.a
s=this.db.e
z.aa(z.eb,z.bK,s)
s=this.a
z=this.db.f
s=s.bJ
C.b.M(s.a,s.d,z)
break}C.b.cF(t,3042)
C.b.iC(t,770,771)}for(n=0;n<p.length;++n)p[n].bs(a)
z=a0.e
z.bs(a)
z.aO(a)
z.eH(a)
if(u)C.b.iU(t,3042)
for(n=0;n<p.length;++n)p[n].eH(a)
z=this.a
z.toString
C.b.eL(t,null)
z.x.iV()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dm().ak}},ih:{"^":"cR;0f,a,b,0c,0d,0e"},cR:{"^":"a;",
bn:["f3",function(){}]},ii:{"^":"cR;a,b,0c,0d,0e"},aY:{"^":"cR;0f,a,b,0c,0d,0e",
dJ:function(a){var z,y
if(!J.D(this.f,a)){z=this.f
this.f=a
y=new D.J(this.b+".color",z,a,this,[V.a0])
y.b=!0
this.a.ai(y)}},
bn:["bY",function(){this.f3()
this.dJ(new V.a0(1,1,1))}],
saq:function(a,b){var z
if(this.c===C.d){this.c=C.i
this.bn()
z=this.a
z.a=null
z.ai(null)}this.dJ(b)}},ik:{"^":"aY;0ch,0f,a,b,0c,0d,0e",
hL:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.J(this.b+".refraction",y,a,this,[P.r])
z.b=!0
this.a.ai(z)}},
bn:function(){this.bY()
this.hL(1)}},il:{"^":"aY;0ch,0f,a,b,0c,0d,0e",
ci:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.J(this.b+".shininess",y,a,this,[P.r])
z.b=!0
this.a.ai(z)}},
bn:function(){this.bY()
this.ci(100)}},cg:{"^":"a;"}}],["","",,T,{"^":"",d0:{"^":"cC;"},jj:{"^":"d0;"},jn:{"^":"jj;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gA:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z}},jo:{"^":"a;a,0b,0c,0d,0e",
jg:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
C.b.bt(z,3553,y)
C.b.bP(z,3553,10242,33071)
C.b.bP(z,3553,10243,33071)
C.b.bP(z,3553,10241,9729)
C.b.bP(z,3553,10240,9729)
C.b.bt(z,3553,null);++this.d
x=W.e3(null,a,null)
w=new T.jn()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.a1
W.U(x,"load",H.l(new T.jp(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
jf:function(a){return this.jg(a,!1,!1,!1,!1)},
hI:function(a,b,c){var z,y,x,w
b=V.dB(b,2)
z=V.dB(a.width,2)
y=V.dB(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cG(null,null)
x.width=z
x.height=y
w=H.f(C.n.eS(x,"2d"),"$iscH")
w.imageSmoothingEnabled=!1;(w&&C.y).iX(w,a,0,0,x.width,x.height)
return P.lM(C.y.fR(w,0,0,x.width,x.height))}}},jp:{"^":"k:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.hI(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
C.b.bt(y,3553,this.e)
C.b.jy(y,37440,this.f?1:0)
C.b.jL(y,3553,0,6408,6408,5121,w)
if(this.r)C.b.eO(y,3553)
C.b.bt(y,3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.iY()}++x.e}},jq:{"^":"a;a,b,c"}}],["","",,V,{"^":"",h4:{"^":"a;",
b6:function(a){return!0},
i:function(a){return"all"},
$isbo:1},bo:{"^":"a;"},eg:{"^":"a;0a",
sav:function(a){this.a=H.j(a,"$isb",[V.bo],"$asb")},
b6:["f2",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)if(z[x].b6(a))return!0
return!1}],
i:["da",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbo:1},bq:{"^":"eg;0a",
b6:function(a){return!this.f2(a)},
i:function(a){return"!["+this.da(0)+"]"}},iZ:{"^":"a;0a",
shK:function(a){this.a=H.j(a,"$isF",[P.m,P.a3],"$asF")},
f7:function(a){var z,y
if(a.a.length<=0)throw H.e(P.u("May not create a SetMatcher with zero characters."))
z=new H.aQ(0,0,[P.m,P.a3])
for(y=new H.ed(a,a.gm(a),0,[H.ao(a,"R",0)]);y.E();)z.p(0,y.d,!0)
this.shK(z)},
b6:function(a){return this.a.bv(a)},
i:function(a){return P.bW(this.a.gcP(),0,null)},
$isbo:1,
n:{
a2:function(a){var z=new V.iZ()
z.f7(a)
return z}}},cZ:{"^":"a;a,b,0c,0d",
si1:function(a){this.c=H.j(a,"$isb",[V.d3],"$asb")},
D:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.d3(this.a.N(0,b))
w.sav(H.c([],[V.bo]))
w.c=!1
C.a.h(this.c,w)
return w},
j1:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.b6(a))return w}return},
i:function(a){return this.b}},eK:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fV(this.b,"\n","\\n")
y=H.fV(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},d2:{"^":"a;a,b,0c",
shD:function(a){var z=P.n
this.c=H.j(a,"$isF",[z,z],"$asF")},
i:function(a){return this.b}},jv:{"^":"a;0a,0b,0c",
shT:function(a){this.a=H.j(a,"$isF",[P.n,V.cZ],"$asF")},
shY:function(a){this.b=H.j(a,"$isF",[P.n,V.d2],"$asF")},
N:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.cZ(this,b)
z.si1(H.c([],[V.d3]))
z.d=null
this.a.p(0,b,z)}return z},
bg:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.d2(this,a)
y=P.n
z.shD(new H.aQ(0,0,[y,y]))
this.b.p(0,a,z)}return z},
jR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eK])
y=this.c
x=[P.m]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.H(a,t)
r=y.j1(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.bW(w,0,null)
throw H.e(P.u("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.bW(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eK(o==null?p.b:o,q,t)}++t}}}},d3:{"^":"eg;b,0c,0a",
i:function(a){return this.b.b+": "+this.da(0)}}}],["","",,X,{"^":"",dM:{"^":"a;",$isaH:1},hG:{"^":"eC;0a,0b,0c,0d,0e,0f,0r,0x",
gA:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z}},iw:{"^":"a;0a,0b,0c,0d,0e,0f",
gA:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
aS:[function(a){var z
H.f(a,"$isx")
z=this.f
if(!(z==null))z.I(a)},function(){return this.aS(null)},"k0","$1","$0","gdd",0,2,1],
sb8:function(a){var z,y
if(!J.D(this.b,a)){z=this.b
if(z!=null)z.gA().K(0,this.gdd())
y=this.b
this.b=a
if(a!=null)a.gA().h(0,this.gdd())
z=new D.J("mover",y,this.b,this,[U.a7])
z.b=!0
this.aS(z)}},
$isaH:1,
$isdM:1},eC:{"^":"a;"}}],["","",,V,{"^":"",
mB:function(a){P.ju(C.O,new V.mC(a))},
mC:{"^":"k:47;a",
$1:function(a){H.f(a,"$isb1")
P.dC(C.j.eG(this.a.gj5(),2)+" fps")}},
iL:{"^":"a;a,b,0c",
cn:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.cj().gbc().j(0,H.i(z))
if(y==null)if(d){c.$0()
this.aX(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.bf(this.c).h(0,v)
t=W.hL("radio")
t.checked=x
t.name=z
z=W.a1
W.U(t,"change",H.l(new V.iM(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
C.C.Y(v,t)
s=w.createElement("span")
s.textContent=b
C.C.Y(v,s)
J.bf(this.c).h(0,w.createElement("br"))},
a1:function(a,b,c){return this.cn(a,b,c,!1)},
aX:function(a){var z,y,x,w,v
z=P.cj()
y=P.n
x=P.ec(z.gbc(),y,y)
x.p(0,this.a,a)
w=z.cY(x)
y=window.history
v=w.i(0)
y.toString;(y&&C.z).dH(y,new P.fm([],[]).bR(""),"",v)},
n:{
eu:function(a,b){var z,y
z=new V.iL(a,!0)
y=C.v.bU(document,a)
z.c=y
if(y==null)H.p("Failed to find "+a+" for RadioGroup")
return z}}},
iM:{"^":"k:11;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.aX(this.d)}}},
j4:{"^":"a;0a,0b",
f9:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.x).Y(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.x.Y(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.l.Y(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.l.Y(v,u)}t=z.createElement("div")
this.a=t
C.l.Y(v,t)
this.b=null
t=W.a1
W.U(z,"scroll",H.l(new V.j7(x),{func:1,ret:-1,args:[t]}),!1,t)},
dP:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.j(a,"$isb",[P.n],"$asb")
this.hO()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.jR(C.a.jb(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.l.Y(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.l.Y(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.l.Y(y,t)
break
case"Link":s=u.b
if(H.fU(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.d(r,1)
q.href=H.G(r[1])
q.textContent=H.G(r[0])
C.l.Y(y,q)}else{p=P.co(C.a_,s,C.m,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.i(p)
q.textContent=s
C.l.Y(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.l.Y(y,t)
break}}C.l.Y(this.a,y)},
iw:function(a){var z,y,x,w,v,u,t
H.j(a,"$isb",[P.n],"$asb")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
C.l.Y(this.a,y)
w=C.a4.fU(y,-1)
x=H.f((w&&C.H).dw(w,-1),"$iscf").style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
for(v=0;v<3;++v){u=z.createElement("div")
u.id=a[v]
x=u.style
x.textAlign="left"
x=u.style
x.verticalAlign="top"
t=H.f(C.H.dw(w,-1),"$iscf")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.a3).Y(t,u)}},
hO:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jv()
y=P.n
z.shT(new H.aQ(0,0,[y,V.cZ]))
z.shY(new H.aQ(0,0,[y,V.d2]))
z.c=null
z.c=z.N(0,"Start")
y=z.N(0,"Start").D(0,"Bold")
x=V.a2(new H.Y("*"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Bold").D(0,"Bold")
x=new V.bq()
w=[V.bo]
x.sav(H.c([],w))
C.a.h(y.a,x)
y=V.a2(new H.Y("*"))
C.a.h(x.a,y)
y=z.N(0,"Bold").D(0,"BoldEnd")
x=V.a2(new H.Y("*"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").D(0,"Italic")
x=V.a2(new H.Y("_"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Italic").D(0,"Italic")
x=new V.bq()
x.sav(H.c([],w))
C.a.h(y.a,x)
y=V.a2(new H.Y("_"))
C.a.h(x.a,y)
y=z.N(0,"Italic").D(0,"ItalicEnd")
x=V.a2(new H.Y("_"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").D(0,"Code")
x=V.a2(new H.Y("`"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Code").D(0,"Code")
x=new V.bq()
x.sav(H.c([],w))
C.a.h(y.a,x)
y=V.a2(new H.Y("`"))
C.a.h(x.a,y)
y=z.N(0,"Code").D(0,"CodeEnd")
x=V.a2(new H.Y("`"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").D(0,"LinkHead")
x=V.a2(new H.Y("["))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"LinkHead").D(0,"LinkTail")
x=V.a2(new H.Y("|"))
C.a.h(y.a,x)
x=z.N(0,"LinkHead").D(0,"LinkEnd")
y=V.a2(new H.Y("]"))
C.a.h(x.a,y)
x.c=!0
x=z.N(0,"LinkHead").D(0,"LinkHead")
y=new V.bq()
y.sav(H.c([],w))
C.a.h(x.a,y)
x=V.a2(new H.Y("|]"))
C.a.h(y.a,x)
x=z.N(0,"LinkTail").D(0,"LinkEnd")
y=V.a2(new H.Y("]"))
C.a.h(x.a,y)
x.c=!0
x=z.N(0,"LinkTail").D(0,"LinkTail")
y=new V.bq()
y.sav(H.c([],w))
C.a.h(x.a,y)
x=V.a2(new H.Y("|]"))
C.a.h(y.a,x)
C.a.h(z.N(0,"Start").D(0,"Other").a,new V.h4())
x=z.N(0,"Other").D(0,"Other")
y=new V.bq()
y.sav(H.c([],w))
C.a.h(x.a,y)
x=V.a2(new H.Y("*_`["))
C.a.h(y.a,x)
x=z.N(0,"BoldEnd")
x.d=x.a.bg("Bold")
x=z.N(0,"ItalicEnd")
x.d=x.a.bg("Italic")
x=z.N(0,"CodeEnd")
x.d=x.a.bg("Code")
x=z.N(0,"LinkEnd")
x.d=x.a.bg("Link")
x=z.N(0,"Other")
x.d=x.a.bg("Other")
this.b=z},
n:{
j5:function(a,b){var z=new V.j4()
z.f9(a,!0)
return z}}},
j7:{"^":"k:11;a",
$1:function(a){P.eI(C.u,new V.j6(this.a))}},
j6:{"^":"k:0;a",
$0:function(){var z,y,x
z=C.j.al(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}},
jk:{"^":"a;a,b,0c,d",
a1:function(a,b,c){var z,y,x,w,v
z=W.e3(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=J.bf(this.c)
x=y.gm(y)
y=W.a6
W.U(z,"click",H.l(new V.jm(this,z,b,x),{func:1,ret:-1,args:[y]}),!1,y)
J.bf(this.c).h(0,z)
J.bf(this.c).h(0,document.createElement("br"))
w=P.cj().gbc().j(0,H.i(this.a))
if(w==null){this.aX(x)
v=c}else v=P.bG(w,null,null)===x
if(v)z.click()},
h:function(a,b){return this.a1(a,b,!1)},
aX:function(a){var z,y,x,w,v
z=P.cj()
y=P.n
x=P.ec(z.gbc(),y,y)
x.p(0,this.a,""+a)
w=z.cY(x)
y=window.history
v=w.i(0)
y.toString;(y&&C.z).dH(y,new P.fm([],[]).bR(""),"",v)}},
jm:{"^":"k:48;a,b,c,d",
$1:function(a){var z,y
H.f(a,"$isa6")
z=this.a
y=J.bf(z.c)
y.S(y,new V.jl())
y=this.b.style
y.border="solid 2px black"
z.d.$1(this.c)
z.aX(this.d)}},
jl:{"^":"k:49;",
$1:function(a){var z
H.f(a,"$isO")
if(!!J.L(a).$iscL){z=a.style
z.border="solid 2px white"}}}}],["","",,K,{"^":"",
fQ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z={}
y=V.j5("Test 037",!0)
x=W.cG(null,null)
x.className="pageLargeCanvas"
x.id="testCanvas"
C.l.Y(y.a,x)
w=[P.n]
y.dP(H.c(["A test of applying a height map to an image. ","Some shapes will take a bit to calculate depending on quality of mapping."],w))
y.iw(H.c(["heightMaps","shapes","scalars"],w))
y.dP(H.c(["\xab[Back to Tests|../]"],w))
w=document
v=C.v.bU(w,"testCanvas")
if(v==null)H.p(P.u("Failed to find an element with the identifier, testCanvas."))
u=E.js(v,!0,!0,!0,!1)
t=new O.id()
t.sfu(O.cI(V.ac))
t.e.bl(t.gh6(),t.gh7())
y=new O.aY(t,"emission")
y.c=C.d
y.f=new V.a0(0,0,0)
t.f=y
y=new O.aY(t,"ambient")
y.c=C.d
y.f=new V.a0(0,0,0)
t.r=y
y=new O.aY(t,"diffuse")
y.c=C.d
y.f=new V.a0(0,0,0)
t.x=y
y=new O.aY(t,"invDiffuse")
y.c=C.d
y.f=new V.a0(0,0,0)
t.y=y
y=new O.il(t,"specular")
y.c=C.d
y.f=new V.a0(0,0,0)
y.ch=100
t.z=y
y=new O.ii(t,"bump")
y.c=C.d
t.Q=y
t.ch=null
y=new O.aY(t,"reflect")
y.c=C.d
y.f=new V.a0(0,0,0)
t.cx=y
y=new O.ik(t,"refract")
y.c=C.d
y.f=new V.a0(0,0,0)
y.ch=1
t.cy=y
y=new O.ih(t,"alpha")
y.c=C.d
y.f=1
t.db=y
y=new D.hU()
y.bZ(D.a_)
y.sfG(H.c([],[D.c3]))
y.shw(H.c([],[D.ep]))
y.shS(H.c([],[D.ez]))
y.si2(H.c([],[D.eE]))
y.si3(H.c([],[D.eF]))
y.si4(H.c([],[D.eG]))
y.Q=null
y.ch=null
y.d7(y.gh5(),y.ghq(),y.ghs())
t.dx=y
s=y.Q
if(s==null){s=D.E()
y.Q=s
y=s}else y=s
y.h(0,t.ghG())
y=t.dx
s=y.ch
if(s==null){s=D.E()
y.ch=s
y=s}else y=s
y.h(0,t.gh9())
t.dy=null
y=t.dx
r=V.f6()
s=U.dR(V.ei(V.er(),r,new V.C(1,1,-3)))
q=new V.a0(1,1,1)
p=new D.c3()
p.c=new V.a0(1,1,1)
p.a=V.f7()
o=p.b
p.b=s
s.gA().h(0,p.gff())
s=new D.J("mover",o,p.b,p,[U.a7])
s.b=!0
p.aB(s)
if(!p.c.t(0,q)){o=p.c
p.c=q
s=new D.J("color",o,q,p,[V.a0])
s.b=!0
p.aB(s)}y.h(0,p)
y=t.r
y.saq(0,new V.a0(0,0,1))
y=t.x
y.saq(0,new V.a0(0,1,0))
y=t.z
y.saq(0,new V.a0(1,0,0))
y=t.z
if(y.c===C.d){y.c=C.i
y.bY()
y.ci(100)
s=y.a
s.a=null
s.ai(null)}y.ci(10)
n=E.e0(null,!0,null,"",null,null)
n.seE(t)
m=E.e0(null,!0,null,"",null,null)
m.y.h(0,n)
y=new U.e2()
y.bZ(U.a7)
y.bl(y.gh4(),y.ghr())
y.e=null
y.f=V.bS()
y.r=0
s=u.r
p=new U.jX()
l=U.cJ()
l.sd2(0,!0)
l.scR(6.283185307179586)
l.scT(0)
l.sa_(0,0)
l.scS(100)
l.sU(0)
l.scD(0.5)
p.b=l
k=p.gaC()
l.gA().h(0,k)
l=U.cJ()
l.sd2(0,!0)
l.scR(6.283185307179586)
l.scT(0)
l.sa_(0,0)
l.scS(100)
l.sU(0)
l.scD(0.5)
p.c=l
l.gA().h(0,k)
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
j=new X.aw(!1,!1,!1)
o=p.d
p.d=j
l=[X.aw]
k=new D.J("modifiers",o,j,p,l)
k.b=!0
p.R(k)
k=p.f
if(k!==!1){p.f=!1
k=new D.J("invertX",k,!1,p,[P.a3])
k.b=!0
p.R(k)}k=p.r
if(k!==!1){p.r=!1
k=new D.J("invertY",k,!1,p,[P.a3])
k.b=!0
p.R(k)}p.aY(s)
y.h(0,p)
s=u.r
p=new U.jW()
k=U.cJ()
k.sd2(0,!0)
k.scR(6.283185307179586)
k.scT(0)
k.sa_(0,0)
k.scS(100)
k.sU(0)
k.scD(0.2)
p.b=k
k.gA().h(0,p.gaC())
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
j=new X.aw(!0,!1,!1)
o=p.c
p.c=j
k=new D.J("modifiers",o,j,p,l)
k.b=!0
p.R(k)
p.aY(s)
y.h(0,p)
s=u.r
p=new U.jY()
p.c=0.01
p.d=0
p.e=0
j=new X.aw(!1,!1,!1)
p.b=j
l=new D.J("modifiers",null,j,p,l)
l.b=!0
p.R(l)
p.aY(s)
y.h(0,p)
m.sb8(y)
y=new M.hx()
y.sfA(0,O.cI(E.ar))
y.d.bl(y.gha(),y.ghb())
y.e=null
y.f=null
y.r=null
y.x=null
i=new X.iw()
i.c=1.0471975511965976
i.d=0.1
i.e=2000
i.sb8(null)
s=i.c
if(!$.q.$2(s,1.0471975511965976)){o=i.c
i.c=1.0471975511965976
s=new D.J("fov",o,1.0471975511965976,i,[P.r])
s.b=!0
i.aS(s)}s=i.d
if(!$.q.$2(s,0.1)){o=i.d
i.d=0.1
s=new D.J("near",o,0.1,i,[P.r])
s.b=!0
i.aS(s)}s=i.e
if(!$.q.$2(s,2000)){o=i.e
i.e=2000
s=new D.J("far",o,2000,i,[P.r])
s.b=!0
i.aS(s)}s=y.a
if(s!==i){if(s!=null)s.gA().K(0,y.gaD())
o=y.a
y.a=i
i.gA().h(0,y.gaD())
s=new D.J("camera",o,y.a,y,[X.dM])
s.b=!0
y.aR(s)}h=new X.hG()
s=new V.c1(0,0,0,1)
h.a=s
h.b=!0
h.c=2000
h.d=!0
h.e=0
h.f=!1
s=$.ex
if(s==null){s=V.ew(0,0,1,1)
$.ex=s}h.r=s
s=y.b
if(s!==h){if(s!=null)s.gA().K(0,y.gaD())
o=y.b
y.b=h
h.gA().h(0,y.gaD())
s=new D.J("target",o,y.b,y,[X.eC])
s.b=!0
y.aR(s)}y.d.h(0,m)
y.a.sb8(U.dR(V.av(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
s=u.d
if(s!==y){if(s!=null)s.gA().K(0,u.gdc())
u.d=y
y.gA().h(0,u.gdc())
u.fd()}z.a=null
z.b=""
z.c=1
g=new K.md(z,u,n)
y=new V.jk("heightMaps",!0,new K.me(z,g))
w=C.v.bU(w,"heightMaps")
y.c=w
if(w==null)H.p("Failed to find heightMaps for Texture2DGroup")
y.a1(0,"../resources/HeightMap1.png",!0)
y.h(0,"../resources/HeightMap2.png")
y.h(0,"../resources/HeightMap3.png")
y.h(0,"../resources/ScrewHeightMap.png")
f=new K.mf(z,g)
y=V.eu("shapes",!0)
y.a1(0,"Cuboid",new K.mn(f))
y.a1(0,"Cylinder",new K.mo(f))
y.a1(0,"LatLonSphere",new K.mp(f))
y.a1(0,"Sphere",new K.mq(f))
y.a1(0,"Toroid",new K.mr(f))
y.a1(0,"Grid Small",new K.ms(f))
y.cn(0,"Grid Medium",new K.mt(f),!0)
y.a1(0,"Grid Large",new K.mu(f))
e=new K.mg(z,g)
z=V.eu("scalars",!0)
z.a1(0,"0.1",new K.mh(e))
z.a1(0,"0.2",new K.mi(e))
z.a1(0,"0.4",new K.mj(e))
z.cn(0,"0.6",new K.mk(e),!0)
z.a1(0,"0.8",new K.ml(e))
z.a1(0,"1.0",new K.mm(e))
V.mB(u)},
md:{"^":"k:0;a,b,c",
$0:function(){var z,y,x,w
z=this.a
if(z.a!=null&&z.b.length!==0){y=this.b
x=y.f.jf(z.b)
w=x.y
if(w==null){w=D.E()
x.y=w}w.h(0,new K.mc(z,y,x,this.c))}}},
mc:{"^":"k:7;a,b,c,d",
$1:function(a){var z,y,x,w,v,u
H.f(a,"$isx")
z=this.b.f
y=this.c
x=y.r
w=y.x
z=z.a
C.b.ct(z,36160,z.createFramebuffer())
C.b.j6(z,36160,36064,3553,y.b,0)
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.v(w)
v=new Uint8Array(x*w*4)
C.b.hz(z,0,0,x,w,6408,5121,v)
C.b.ct(z,36160,null)
z=this.a
y=z.a
u=F.cY()
u.bL(y)
u.a4()
u.iz(new T.jq(v,x,w),z.c)
z=$.$get$at()
z.toString
u.jU(new Z.aT($.$get$dh().a&~z.a))
u.jS(!1)
u.a4()
this.d.sd8(0,u)}},
me:{"^":"k:23;a,b",
$1:function(a){this.a.b=a
this.b.$0()}},
mf:{"^":"k:50;a,b",
$1:function(a){this.a.a=a
this.b.$0()}},
mn:{"^":"k:0;a",
$0:function(){this.a.$1(F.fJ(50,null,null,50))}},
mo:{"^":"k:0;a",
$0:function(){this.a.$1(F.lN(1,!1,!1,80,80,1))}},
mp:{"^":"k:0;a",
$0:function(){this.a.$1(F.m9(80,80))}},
mq:{"^":"k:0;a",
$0:function(){this.a.$1(F.mD(50,null,1,50))}},
mr:{"^":"k:0;a",
$0:function(){this.a.$1(F.mH(50,1,50,0.5))}},
ms:{"^":"k:0;a",
$0:function(){this.a.$1(F.dy(50,null,50))}},
mt:{"^":"k:0;a",
$0:function(){this.a.$1(F.dy(100,null,100))}},
mu:{"^":"k:0;a",
$0:function(){this.a.$1(F.dy(150,null,150))}},
mg:{"^":"k:51;a,b",
$1:function(a){this.a.c=a
this.b.$0()}},
mh:{"^":"k:0;a",
$0:function(){this.a.$1(0.1)}},
mi:{"^":"k:0;a",
$0:function(){this.a.$1(0.2)}},
mj:{"^":"k:0;a",
$0:function(){this.a.$1(0.4)}},
mk:{"^":"k:0;a",
$0:function(){this.a.$1(0.6)}},
ml:{"^":"k:0;a",
$0:function(){this.a.$1(0.8)}},
mm:{"^":"k:0;a",
$0:function(){this.a.$1(1)}}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e8.prototype
return J.e7.prototype}if(typeof a=="string")return J.bQ.prototype
if(a==null)return J.e9.prototype
if(typeof a=="boolean")return J.hO.prototype
if(a.constructor==Array)return J.aX.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.ct(a)}
J.bb=function(a){if(typeof a=="string")return J.bQ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aX.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.ct(a)}
J.fL=function(a){if(a==null)return a
if(a.constructor==Array)return J.aX.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.ct(a)}
J.lX=function(a){if(typeof a=="number")return J.bP.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bX.prototype
return a}
J.lY=function(a){if(typeof a=="number")return J.bP.prototype
if(typeof a=="string")return J.bQ.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bX.prototype
return a}
J.dx=function(a){if(typeof a=="string")return J.bQ.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bX.prototype
return a}
J.aE=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.ct(a)}
J.D=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).t(a,b)}
J.fX=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lX(a).P(a,b)}
J.dD=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lY(a).k(a,b)}
J.fY=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m8(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bb(a).j(a,b)}
J.fZ=function(a,b,c,d){return J.aE(a).fp(a,b,c,d)}
J.h_=function(a,b){return J.dx(a).H(a,b)}
J.cy=function(a,b,c){return J.aE(a).hE(a,b,c)}
J.dE=function(a,b){return J.aE(a).Y(a,b)}
J.h0=function(a,b){return J.dx(a).Z(a,b)}
J.cz=function(a,b,c){return J.bb(a).iK(a,b,c)}
J.cA=function(a,b){return J.fL(a).ab(a,b)}
J.h1=function(a,b,c,d){return J.aE(a).j0(a,b,c,d)}
J.bf=function(a){return J.aE(a).gcA(a)}
J.bH=function(a){return J.L(a).gV(a)}
J.bI=function(a){return J.fL(a).gW(a)}
J.aF=function(a){return J.bb(a).gm(a)}
J.h2=function(a,b){return J.aE(a).jE(a,b)}
J.h3=function(a,b){return J.aE(a).sjV(a,b)}
J.ab=function(a){return J.L(a).i(a)}
I.ae=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.x=W.h8.prototype
C.n=W.cF.prototype
C.y=W.cH.prototype
C.l=W.dZ.prototype
C.z=W.hH.prototype
C.v=W.hJ.prototype
C.P=J.H.prototype
C.a=J.aX.prototype
C.Q=J.e7.prototype
C.e=J.e8.prototype
C.o=J.e9.prototype
C.j=J.bP.prototype
C.c=J.bQ.prototype
C.X=J.bR.prototype
C.C=W.hT.prototype
C.a2=W.is.prototype
C.G=J.ix.prototype
C.b=P.cW.prototype
C.a3=W.cf.prototype
C.a4=W.jg.prototype
C.H=W.jh.prototype
C.w=J.bX.prototype
C.I=W.bw.prototype
C.J=W.kk.prototype
C.L=new P.h7(!1)
C.K=new P.h6(C.L)
C.M=new P.iv()
C.N=new P.k5()
C.k=new P.kR()
C.d=new A.c2(0,"ColorSourceType.None")
C.i=new A.c2(1,"ColorSourceType.Solid")
C.f=new A.c2(2,"ColorSourceType.Texture2D")
C.h=new A.c2(3,"ColorSourceType.TextureCube")
C.u=new P.bi(0)
C.O=new P.bi(5e6)
C.R=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.S=function(hooks) {
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

C.T=function(getTagFallback) {
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
C.U=function() {
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
C.V=function(hooks) {
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
C.W=function(hooks) {
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
C.D=H.c(I.ae([127,2047,65535,1114111]),[P.m])
C.p=H.c(I.ae([0,0,32776,33792,1,10240,0,0]),[P.m])
C.q=H.c(I.ae([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.r=H.c(I.ae([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.Z=H.c(I.ae([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.a_=H.c(I.ae([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.t=H.c(I.ae([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.E=H.c(I.ae([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.a0=H.c(I.ae([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.F=H.c(I.ae([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.Y=H.c(I.ae([]),[P.n])
C.a1=new H.hk(0,{},C.Y,[P.n,P.n])
C.m=new P.jZ(!1)
$.au=0
$.bg=null
$.dH=null
$.dp=!1
$.fN=null
$.fF=null
$.fT=null
$.cs=null
$.cv=null
$.dz=null
$.b6=null
$.bB=null
$.bC=null
$.dq=!1
$.N=C.k
$.dX=null
$.dW=null
$.dV=null
$.dU=null
$.q=V.im()
$.ej=null
$.eq=null
$.br=null
$.ex=null
$.f1=null
$.f5=null
$.f3=null
$.f4=null
$.ck=null
$.f2=null
$.eo=null
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
I.$lazy(y,x,w)}})(["dT","$get$dT",function(){return H.fM("_$dart_dartClosure")},"cN","$get$cN",function(){return H.fM("_$dart_js")},"eM","$get$eM",function(){return H.ax(H.ch({
toString:function(){return"$receiver$"}}))},"eN","$get$eN",function(){return H.ax(H.ch({$method$:null,
toString:function(){return"$receiver$"}}))},"eO","$get$eO",function(){return H.ax(H.ch(null))},"eP","$get$eP",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eT","$get$eT",function(){return H.ax(H.ch(void 0))},"eU","$get$eU",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eR","$get$eR",function(){return H.ax(H.eS(null))},"eQ","$get$eQ",function(){return H.ax(function(){try{null.$method$}catch(z){return z.message}}())},"eW","$get$eW",function(){return H.ax(H.eS(void 0))},"eV","$get$eV",function(){return H.ax(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dk","$get$dk",function(){return P.kl()},"bD","$get$bD",function(){return[]},"f0","$get$f0",function(){return P.k2()},"fb","$get$fb",function(){return H.iq(H.b5(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fu","$get$fu",function(){return P.iQ("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fB","$get$fB",function(){return P.lt()},"dS","$get$dS",function(){return{}},"f8","$get$f8",function(){return Z.am(0)},"dh","$get$dh",function(){return Z.am(511)},"aB","$get$aB",function(){return Z.am(1)},"at","$get$at",function(){return Z.am(2)},"aA","$get$aA",function(){return Z.am(4)},"aC","$get$aC",function(){return Z.am(8)},"aD","$get$aD",function(){return Z.am(16)},"bu","$get$bu",function(){return Z.am(32)},"bv","$get$bv",function(){return Z.am(64)},"di","$get$di",function(){return Z.am(96)},"aU","$get$aU",function(){return Z.am(128)},"az","$get$az",function(){return Z.am(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.z},{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:-1},{func:1,ret:P.z,args:[F.al,P.r,P.r]},{func:1,ret:-1,args:[W.a6]},{func:1,ret:P.z,args:[,,]},{func:1,ret:P.z,args:[D.x]},{func:1,ret:-1,args:[P.m,[P.o,E.ar]]},{func:1,ret:P.z,args:[F.a5]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[W.a1]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:-1,args:[W.a1]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:-1,args:[P.m,[P.o,V.ac]]},{func:1,args:[,]},{func:1,ret:P.n,args:[P.m]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:-1,args:[P.m,[P.o,D.a_]]},{func:1,ret:P.r},{func:1,ret:-1,args:[P.m,[P.o,U.a7]]},{func:1,ret:P.z,args:[,]},{func:1,ret:P.z,args:[P.n]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:W.O,args:[W.M]},{func:1,ret:[P.F,P.n,P.n],args:[[P.F,P.n,P.n],P.n]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.n],opt:[,]},{func:1,ret:P.z,args:[P.af]},{func:1,ret:P.z,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:P.m,args:[[P.b,P.m],P.m]},{func:1,ret:[P.aK,,],args:[,]},{func:1,ret:P.n,args:[P.n]},{func:1,ret:-1,args:[W.bw]},{func:1,ret:P.a3,args:[P.r,P.r]},{func:1,ret:P.a3,args:[[P.o,D.a_]]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:P.z,args:[P.n,,]},{func:1,ret:P.I,args:[P.m]},{func:1,ret:-1,args:[P.n,P.m]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[,,]},{func:1,ret:V.W,args:[P.r]},{func:1,args:[W.a1]},{func:1,ret:P.a3,args:[W.M]},{func:1,args:[P.n]},{func:1,ret:P.z,args:[P.b1]},{func:1,ret:P.z,args:[W.a6]},{func:1,ret:P.z,args:[W.O]},{func:1,ret:P.z,args:[F.ce]},{func:1,ret:P.z,args:[P.r]},{func:1,args:[,P.n]},{func:1,ret:P.z,args:[,],opt:[,]}]
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
if(x==y)H.mG(d||a)
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
Isolate.ae=a.ae
Isolate.dv=a.dv
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
if(typeof dartMainRunner==="function")dartMainRunner(K.fQ,[])
else K.fQ([])})})()
//# sourceMappingURL=test.dart.js.map
