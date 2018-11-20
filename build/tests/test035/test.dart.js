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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isL)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dr(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ds=function(){}
var dart=[["","",,H,{"^":"",mA:{"^":"a;a"}}],["","",,J,{"^":"",
dw:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ct:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dv==null){H.lW()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.cj("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cN()]
if(v!=null)return v
v=H.m1(a)
if(v!=null)return v
if(typeof a=="function")return C.V
y=Object.getPrototypeOf(a)
if(y==null)return C.E
if(y===Object.prototype)return C.E
if(typeof w=="function"){Object.defineProperty(w,$.$get$cN(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
L:{"^":"a;",
q:function(a,b){return a===b},
gU:function(a){return H.bw(a)},
i:["eX",function(a){return"Instance of '"+H.b0(a)+"'"}],
"%":"CanvasRenderingContext2D|DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer|WebGLTexture"},
hM:{"^":"L;",
i:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isa5:1},
e1:{"^":"L;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gU:function(a){return 0},
$isz:1},
cO:{"^":"L;",
gU:function(a){return 0},
i:["eY",function(a){return String(a)}]},
ix:{"^":"cO;"},
bX:{"^":"cO;"},
bS:{"^":"cO;",
i:function(a){var z=a[$.$get$dO()]
if(z==null)return this.eY(a)
return"JavaScript function for "+H.i(J.ab(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscK:1},
aY:{"^":"L;$ti",
h:function(a,b){H.w(b,H.t(a,0))
if(!!a.fixed$length)H.r(P.U("add"))
a.push(b)},
jl:function(a,b){var z
if(!!a.fixed$length)H.r(P.U("removeAt"))
z=a.length
if(b>=z)throw H.e(P.bV(b,null,null))
return a.splice(b,1)[0]},
K:function(a,b){var z
if(!!a.fixed$length)H.r(P.U("remove"))
for(z=0;z<a.length;++z)if(J.F(a[z],b)){a.splice(z,1)
return!0}return!1},
Y:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.aW(a))}},
D:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.i(a[y]))
return z.join(b)},
j0:function(a){return this.D(a,"")},
iU:function(a,b,c,d){var z,y,x
H.w(b,d)
H.k(c,{func:1,ret:d,args:[d,H.t(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.e(P.aW(a))}return y},
a9:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
eW:function(a,b,c){if(b<0||b>a.length)throw H.e(P.V(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.V(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.t(a,0)])
return H.c(a.slice(b,c),[H.t(a,0)])},
giT:function(a){if(a.length>0)return a[0]
throw H.e(H.dZ())},
gaz:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.dZ())},
aX:function(a,b){var z
for(z=0;z<a.length;++z)if(J.F(a[z],b))return!0
return!1},
i:function(a){return P.cM(a,"[","]")},
ga0:function(a){return new J.as(a,a.length,0,[H.t(a,0)])},
gU:function(a){return H.bw(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.r(P.U("set length"))
if(b<0)throw H.e(P.V(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.e(H.bb(a,b))
return a[b]},
m:function(a,b,c){H.w(c,H.t(a,0))
if(!!a.immutable$list)H.r(P.U("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bb(a,b))
a[b]=c},
$isq:1,
$isb:1,
p:{
hL:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.cD(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.V(a,0,4294967295,"length",null))
return J.e_(new Array(a),b)},
e_:function(a,b){return J.ca(H.c(a,[b]))},
ca:function(a){H.c1(a)
a.fixed$length=Array
return a}}},
mz:{"^":"aY;$ti"},
as:{"^":"a;a,b,c,0d,$ti",
sdi:function(a){this.d=H.w(a,H.t(this,0))},
gR:function(){return this.d},
H:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.y(z))
x=this.c
if(x>=y){this.sdi(null)
return!1}this.sdi(z[x]);++this.c
return!0},
$isaP:1},
bQ:{"^":"L;",
ed:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.U(""+a+".floor()"))},
ak:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.U(""+a+".round()"))},
eD:function(a,b){var z,y
if(b>20)throw H.e(P.V(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bc:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.e(P.V(b,2,36,"radix",null))
z=a.toString(b)
if(C.c.X(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.U("Unexpected toString result: "+z))
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
gU:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.e(H.ad(b))
return a*b},
bi:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
f0:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dF(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.dF(a,b)},
dF:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.U("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
aI:function(a,b){var z
if(a>0)z=this.dD(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hI:function(a,b){if(b<0)throw H.e(H.ad(b))
return this.dD(a,b)},
dD:function(a,b){return b>31?0:a>>>b},
P:function(a,b){if(typeof b!=="number")throw H.e(H.ad(b))
return a<b},
$isp:1,
$isag:1},
e0:{"^":"bQ;",$isl:1},
hN:{"^":"bQ;"},
bR:{"^":"L;",
X:function(a,b){if(b<0)throw H.e(H.bb(a,b))
if(b>=a.length)H.r(H.bb(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.e(H.bb(a,b))
return a.charCodeAt(b)},
A:function(a,b){H.I(b)
if(typeof b!=="string")throw H.e(P.cD(b,null,null))
return a+b},
aR:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ad(b))
c=P.aS(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a7:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ad(c))
if(typeof c!=="number")return c.P()
if(c<0||c>a.length)throw H.e(P.V(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a6:function(a,b){return this.a7(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ad(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.e(P.bV(b,null,null))
if(b>c)throw H.e(P.bV(b,null,null))
if(c>a.length)throw H.e(P.bV(c,null,null))
return a.substring(b,c)},
aA:function(a,b){return this.t(a,b,null)},
k:function(a,b){var z,y
H.a0(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.K)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
jc:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ab:function(a,b){return this.jc(a,b," ")},
el:function(a,b,c){var z
if(c<0||c>a.length)throw H.e(P.V(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
ek:function(a,b){return this.el(a,b,0)},
iC:function(a,b,c){if(c>a.length)throw H.e(P.V(c,0,a.length,null,null))
return H.fS(a,b,c)},
i:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gn:function(a){return a.length},
$isef:1,
$isn:1}}],["","",,H,{"^":"",
cu:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
dZ:function(){return new P.j9("No element")},
Z:{"^":"jD;a",
gn:function(a){return this.a.length},
j:function(a,b){return C.c.X(this.a,b)},
$asdd:function(){return[P.l]},
$asR:function(){return[P.l]},
$asq:function(){return[P.l]},
$asb:function(){return[P.l]}},
hs:{"^":"q;"},
e4:{"^":"a;a,b,c,0d,$ti",
saT:function(a){this.d=H.w(a,H.t(this,0))},
gR:function(){return this.d},
H:function(){var z,y,x,w
z=this.a
y=J.bd(z)
x=y.gn(z)
if(this.b!==x)throw H.e(P.aW(z))
w=this.c
if(w>=x){this.saT(null)
return!1}this.saT(y.a9(z,w));++this.c
return!0},
$isaP:1},
ic:{"^":"q;a,b,$ti",
ga0:function(a){return new H.id(J.bL(this.a),this.b,this.$ti)},
gn:function(a){return J.aA(this.a)},
a9:function(a,b){return this.b.$1(J.cC(this.a,b))},
$asq:function(a,b){return[b]}},
id:{"^":"aP;0a,b,c,$ti",
saT:function(a){this.a=H.w(a,H.t(this,1))},
H:function(){var z=this.b
if(z.H()){this.saT(this.c.$1(z.gR()))
return!0}this.saT(null)
return!1},
gR:function(){return this.a},
$asaP:function(a,b){return[b]}},
k9:{"^":"q;a,b,$ti",
ga0:function(a){return new H.ka(J.bL(this.a),this.b,this.$ti)}},
ka:{"^":"aP;a,b,$ti",
H:function(){var z,y
for(z=this.a,y=this.b;z.H();)if(y.$1(z.gR()))return!0
return!1},
gR:function(){return this.a.gR()}},
c7:{"^":"a;$ti"},
dd:{"^":"a;$ti",
m:function(a,b,c){H.w(c,H.ae(this,"dd",0))
throw H.e(P.U("Cannot modify an unmodifiable list"))}},
jD:{"^":"cb+dd;"}}],["","",,H,{"^":"",
hh:function(){throw H.e(P.U("Cannot modify unmodifiable Map"))},
bg:function(a){var z,y
z=H.I(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
lO:function(a){return init.types[H.a0(a)]},
lZ:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.N(a).$isaC},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ab(a)
if(typeof z!=="string")throw H.e(H.ad(a))
return z},
bw:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iH:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.I(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.V(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.c.F(w,u)|32)>x)return}return parseInt(a,b)},
b0:function(a){return H.iy(a)+H.dp(H.aV(a),0,null)},
iy:function(a){var z,y,x,w,v,u,t,s,r
z=J.N(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.O||!!z.$isbX){u=C.z(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bg(w.length>1&&C.c.F(w,0)===36?C.c.aA(w,1):w)},
iz:function(){if(!!self.location)return self.location.href
return},
ek:function(a){var z,y,x,w,v
H.c1(a)
z=J.aA(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iI:function(a){var z,y,x,w
z=H.c([],[P.l])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.ad(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.aI(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.e(H.ad(w))}return H.ek(z)},
el:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.ad(x))
if(x<0)throw H.e(H.ad(x))
if(x>65535)return H.iI(a)}return H.ek(a)},
iJ:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bU:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.aI(z,10))>>>0,56320|z&1023)}}throw H.e(P.V(a,0,1114111,null,null))},
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
v:function(a){throw H.e(H.ad(a))},
d:function(a,b){if(a==null)J.aA(a)
throw H.e(H.bb(a,b))},
bb:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aN(!0,b,"index",null)
z=H.a0(J.aA(a))
if(!(b<0)){if(typeof z!=="number")return H.v(z)
y=b>=z}else y=!0
if(y)return P.bn(b,a,"index",null,z)
return P.bV(b,"index",null)},
lI:function(a,b,c){if(a>c)return new P.ce(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ce(a,c,!0,b,"end","Invalid value")
return new P.aN(!0,b,"end",null)},
ad:function(a){return new P.aN(!0,a,null,null)},
e:function(a){var z
if(a==null)a=new P.ee()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fU})
z.name=""}else z.toString=H.fU
return z},
fU:function(){return J.ab(this.dartException)},
r:function(a){throw H.e(a)},
y:function(a){throw H.e(P.aW(a))},
ap:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.mp(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.aI(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cP(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ed(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eG()
u=$.$get$eH()
t=$.$get$eI()
s=$.$get$eJ()
r=$.$get$eN()
q=$.$get$eO()
p=$.$get$eL()
$.$get$eK()
o=$.$get$eQ()
n=$.$get$eP()
m=v.aa(y)
if(m!=null)return z.$1(H.cP(H.I(y),m))
else{m=u.aa(y)
if(m!=null){m.method="call"
return z.$1(H.cP(H.I(y),m))}else{m=t.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=r.aa(y)
if(m==null){m=q.aa(y)
if(m==null){m=p.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=o.aa(y)
if(m==null){m=n.aa(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ed(H.I(y),m))}}return z.$1(new H.jC(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.es()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aN(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.es()
return a},
be:function(a){var z
if(a==null)return new H.fi(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fi(a)},
lL:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
lY:function(a,b,c,d,e,f){H.f(a,"$iscK")
switch(H.a0(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.u("Unsupported number of arguments for wrapped closure"))},
ba:function(a,b){var z
H.a0(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lY)
a.$identity=z
return z},
hd:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.N(d).$isb){z.$reflectionInfo=d
x=H.iO(z).r}else x=d
w=e?Object.create(new H.ja().constructor.prototype):Object.create(new H.cF(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.at
if(typeof u!=="number")return u.A()
$.at=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dL(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.lO,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dE:H.cG
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.e("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dL(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
ha:function(a,b,c,d){var z=H.cG
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dL:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hc(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ha(y,!w,z,b)
if(y===0){w=$.at
if(typeof w!=="number")return w.A()
$.at=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bh
if(v==null){v=H.c3("self")
$.bh=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.at
if(typeof w!=="number")return w.A()
$.at=w+1
t+=w
w="return function("+t+"){return this."
v=$.bh
if(v==null){v=H.c3("self")
$.bh=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
hb:function(a,b,c,d){var z,y
z=H.cG
y=H.dE
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
hc:function(a,b){var z,y,x,w,v,u,t,s
z=$.bh
if(z==null){z=H.c3("self")
$.bh=z}y=$.dD
if(y==null){y=H.c3("receiver")
$.dD=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hb(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.at
if(typeof y!=="number")return y.A()
$.at=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.at
if(typeof y!=="number")return y.A()
$.at=y+1
return new Function(z+y+"}")()},
dr:function(a,b,c,d,e,f,g){return H.hd(a,b,H.a0(c),d,!!e,!!f,g)},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ar(a,"String"))},
lJ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ar(a,"double"))},
md:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ar(a,"num"))},
fD:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ar(a,"bool"))},
a0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ar(a,"int"))},
fQ:function(a,b){throw H.e(H.ar(a,H.bg(H.I(b).substring(3))))},
mf:function(a,b){throw H.e(H.h9(a,H.bg(H.I(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.N(a)[b])return a
H.fQ(a,b)},
h:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else z=!0
if(z)return a
H.mf(a,b)},
c1:function(a){if(a==null)return a
if(!!J.N(a).$isb)return a
throw H.e(H.ar(a,"List<dynamic>"))},
fN:function(a,b){var z
if(a==null)return a
z=J.N(a)
if(!!z.$isb)return a
if(z[b])return a
H.fQ(a,b)},
fI:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a0(z)]
else return a.$S()}return},
bZ:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fI(J.N(a))
if(z==null)return!1
return H.fs(z,null,b,null)},
k:function(a,b){var z,y
if(a==null)return a
if($.dl)return a
$.dl=!0
try{if(H.bZ(a,b))return a
z=H.cx(b)
y=H.ar(a,z)
throw H.e(y)}finally{$.dl=!1}},
dt:function(a,b){if(a!=null&&!H.dq(a,b))H.r(H.ar(a,H.cx(b)))
return a},
fy:function(a){var z,y
z=J.N(a)
if(!!z.$ism){y=H.fI(z)
if(y!=null)return H.cx(y)
return"Closure"}return H.b0(a)},
mm:function(a){throw H.e(new P.hk(H.I(a)))},
fK:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aV:function(a){if(a==null)return
return a.$ti},
mV:function(a,b,c){return H.bf(a["$as"+H.i(c)],H.aV(b))},
c_:function(a,b,c,d){var z
H.I(c)
H.a0(d)
z=H.bf(a["$as"+H.i(c)],H.aV(b))
return z==null?null:z[d]},
ae:function(a,b,c){var z
H.I(b)
H.a0(c)
z=H.bf(a["$as"+H.i(b)],H.aV(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.a0(b)
z=H.aV(a)
return z==null?null:z[b]},
cx:function(a){return H.aU(a,null)},
aU:function(a,b){var z,y
H.j(b,"$isb",[P.n],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bg(a[0].builtin$cls)+H.dp(a,1,b)
if(typeof a=="function")return H.bg(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a0(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.i(b[y])}if('func' in a)return H.lq(a,b)
if('futureOr' in a)return"FutureOr<"+H.aU("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
t=C.c.A(t,b[r])
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
for(z=H.lK(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.I(z[l])
n=n+m+H.aU(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dp:function(a,b,c){var z,y,x,w,v,u
H.j(c,"$isb",[P.n],"$asb")
if(a==null)return""
z=new P.ak("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aU(u,c)}return"<"+z.i(0)+">"},
bf:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bJ:function(a,b,c,d){var z,y
H.I(b)
H.c1(c)
H.I(d)
if(a==null)return!1
z=H.aV(a)
y=J.N(a)
if(y[b]==null)return!1
return H.fB(H.bf(y[d],z),null,c,null)},
j:function(a,b,c,d){H.I(b)
H.c1(c)
H.I(d)
if(a==null)return a
if(H.bJ(a,b,c,d))return a
throw H.e(H.ar(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bg(b.substring(3))+H.dp(c,0,null),init.mangledGlobalNames)))},
fB:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ao(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ao(a[y],b,c[y],d))return!1
return!0},
mT:function(a,b,c){return a.apply(b,H.bf(J.N(b)["$as"+H.i(c)],H.aV(b)))},
fM:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="z"||a===-1||a===-2||H.fM(z)}return!1},
dq:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="z"||b===-1||b===-2||H.fM(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dq(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bZ(a,b)}z=J.N(a).constructor
y=H.aV(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.ao(z,null,b,null)},
w:function(a,b){if(a!=null&&!H.dq(a,b))throw H.e(H.ar(a,H.cx(b)))
return a},
ao:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ao(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="z")return!0
if('func' in c)return H.fs(a,b,c,d)
if('func' in a)return c.builtin$cls==="cK"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ao("type" in a?a.type:null,b,x,d)
else if(H.ao(a,b,x,d))return!0
else{if(!('$is'+"bm" in y.prototype))return!1
w=y.prototype["$as"+"bm"]
v=H.bf(w,z?a.slice(1):null)
return H.ao(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fB(H.bf(r,z),b,u,d)},
fs:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ao(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ao(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ao(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ao(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.mc(m,b,l,d)},
mc:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ao(c[w],d,a[w],b))return!1}return!0},
mU:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
m1:function(a){var z,y,x,w,v,u
z=H.I($.fL.$1(a))
y=$.cs[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cv[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.I($.fA.$2(a,z))
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
return u.i}if(v==="+")return H.fP(a,x)
if(v==="*")throw H.e(P.cj(z))
if(init.leafTags[z]===true){u=H.cw(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fP(a,x)},
fP:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dw(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cw:function(a){return J.dw(a,!1,null,!!a.$isaC)},
mb:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cw(z)
else return J.dw(z,c,null,null)},
lW:function(){if(!0===$.dv)return
$.dv=!0
H.lX()},
lX:function(){var z,y,x,w,v,u,t,s
$.cs=Object.create(null)
$.cv=Object.create(null)
H.lS()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fR.$1(v)
if(u!=null){t=H.mb(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lS:function(){var z,y,x,w,v,u,t
z=C.S()
z=H.b9(C.P,H.b9(C.U,H.b9(C.y,H.b9(C.y,H.b9(C.T,H.b9(C.Q,H.b9(C.R(C.z),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fL=new H.lT(v)
$.fA=new H.lU(u)
$.fR=new H.lV(t)},
b9:function(a,b){return a(b)||b},
fS:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fT:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hg:{"^":"a;$ti",
i:function(a){return P.cQ(this)},
m:function(a,b,c){H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
return H.hh()},
$isH:1},
hi:{"^":"hg;a,b,c,$ti",
gn:function(a){return this.a},
br:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j:function(a,b){if(!this.br(b))return
return this.dj(b)},
dj:function(a){return this.b[H.I(a)]},
Y:function(a,b){var z,y,x,w,v
z=H.t(this,1)
H.k(b,{func:1,ret:-1,args:[H.t(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.w(this.dj(v),z))}}},
iN:{"^":"a;a,b,c,d,e,f,r,0x",p:{
iO:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ca(z)
y=z[0]
x=z[1]
return new H.iN(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jp:{"^":"a;a,b,c,d,e,f",
aa:function(a){var z,y,x
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
return new H.jp(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ci:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eM:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iu:{"^":"a_;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
ed:function(a,b){return new H.iu(a,b==null?null:b.method)}}},
hQ:{"^":"a_;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
p:{
cP:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hQ(a,y,z?null:b.receiver)}}},
jC:{"^":"a_;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
mp:{"^":"m:16;a",
$1:function(a){if(!!J.N(a).$isa_)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fi:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaF:1},
m:{"^":"a;",
i:function(a){return"Closure '"+H.b0(this).trim()+"'"},
geL:function(){return this},
$iscK:1,
geL:function(){return this}},
ew:{"^":"m;"},
ja:{"^":"ew;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bg(z)+"'"}},
cF:{"^":"ew;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cF))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.bw(this.a)
else y=typeof z!=="object"?J.bK(z):H.bw(z)
return(y^H.bw(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.b0(z)+"'")},
p:{
cG:function(a){return a.a},
dE:function(a){return a.c},
c3:function(a){var z,y,x,w,v
z=new H.cF("self","target","receiver","name")
y=J.ca(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jq:{"^":"a_;a",
i:function(a){return this.a},
p:{
ar:function(a,b){return new H.jq("TypeError: "+H.i(P.c5(a))+": type '"+H.fy(a)+"' is not a subtype of type '"+b+"'")}}},
h8:{"^":"a_;a",
i:function(a){return this.a},
p:{
h9:function(a,b){return new H.h8("CastError: "+H.i(P.c5(a))+": type '"+H.fy(a)+"' is not a subtype of type '"+b+"'")}}},
iW:{"^":"a_;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
p:{
iX:function(a){return new H.iW(a)}}},
aQ:{"^":"i8;a,0b,0c,0d,0e,0f,r,$ti",
gn:function(a){return this.a},
gcE:function(){return new H.hX(this,[H.t(this,0)])},
br:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.df(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.df(y,a)}else return this.iY(a)},
iY:function(a){var z=this.d
if(z==null)return!1
return this.cD(this.bV(z,this.cC(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bk(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bk(w,b)
x=y==null?null:y.b
return x}else return this.iZ(b)},
iZ:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bV(z,this.cC(a))
x=this.cD(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c0()
this.b=z}this.d7(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c0()
this.c=y}this.d7(y,b,c)}else this.j_(b,c)},
j_:function(a,b){var z,y,x,w
H.w(a,H.t(this,0))
H.w(b,H.t(this,1))
z=this.d
if(z==null){z=this.c0()
this.d=z}y=this.cC(a)
x=this.bV(z,y)
if(x==null)this.c8(z,y,[this.c1(a,b)])
else{w=this.cD(x,a)
if(w>=0)x[w].b=b
else x.push(this.c1(a,b))}},
Y:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aW(this))
z=z.c}},
d7:function(a,b,c){var z
H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
z=this.bk(a,b)
if(z==null)this.c8(a,b,this.c1(b,c))
else z.b=c},
c1:function(a,b){var z,y
z=new H.hW(H.w(a,H.t(this,0)),H.w(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
cC:function(a){return J.bK(a)&0x3ffffff},
cD:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.F(a[y].a,b))return y
return-1},
i:function(a){return P.cQ(this)},
bk:function(a,b){return a[b]},
bV:function(a,b){return a[b]},
c8:function(a,b,c){a[b]=c},
fB:function(a,b){delete a[b]},
df:function(a,b){return this.bk(a,b)!=null},
c0:function(){var z=Object.create(null)
this.c8(z,"<non-identifier-key>",z)
this.fB(z,"<non-identifier-key>")
return z},
$ise3:1},
hW:{"^":"a;a,b,0c,0d"},
hX:{"^":"hs;a,$ti",
gn:function(a){return this.a.a},
ga0:function(a){var z,y
z=this.a
y=new H.hY(z,z.r,this.$ti)
y.c=z.e
return y}},
hY:{"^":"a;a,b,0c,0d,$ti",
sd6:function(a){this.d=H.w(a,H.t(this,0))},
gR:function(){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aW(z))
else{z=this.c
if(z==null){this.sd6(null)
return!1}else{this.sd6(z.a)
this.c=this.c.c
return!0}}},
$isaP:1},
lT:{"^":"m:16;a",
$1:function(a){return this.a(a)}},
lU:{"^":"m:27;a",
$2:function(a,b){return this.a(a,b)}},
lV:{"^":"m:28;a",
$1:function(a){return this.a(H.I(a))}},
hO:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isef:1,
$isiP:1,
p:{
hP:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.e(P.P("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
lK:function(a){return J.e_(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
me:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
b7:function(a){return a},
iq:function(a){return new Int8Array(a)},
aT:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bb(b,a))},
lk:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.e(H.lI(a,b,c))
return b},
cW:{"^":"L;",$iscW:1,"%":";ArrayBufferView;cV|fe|ff|ir|fg|fh|bs"},
cV:{"^":"cW;",
gn:function(a){return a.length},
$isaC:1,
$asaC:I.ds},
ir:{"^":"ff;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
m:function(a,b,c){H.lJ(c)
H.aT(b,a,a.length)
a[b]=c},
$asc7:function(){return[P.p]},
$asR:function(){return[P.p]},
$isq:1,
$asq:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
"%":"Float32Array"},
bs:{"^":"fh;",
m:function(a,b,c){H.a0(c)
H.aT(b,a,a.length)
a[b]=c},
$asc7:function(){return[P.l]},
$asR:function(){return[P.l]},
$isq:1,
$asq:function(){return[P.l]},
$isb:1,
$asb:function(){return[P.l]}},
mB:{"^":"bs;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mC:{"^":"bs;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mD:{"^":"bs;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mE:{"^":"bs;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
ec:{"^":"bs;",
gn:function(a){return a.length},
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
$isec:1,
$isJ:1,
"%":";Uint8Array"},
fe:{"^":"cV+R;"},
ff:{"^":"fe+c7;"},
fg:{"^":"cV+R;"},
fh:{"^":"fg+c7;"}}],["","",,P,{"^":"",
kc:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lx()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.ba(new P.ke(z),1)).observe(y,{childList:true})
return new P.kd(z,y,x)}else if(self.setImmediate!=null)return P.ly()
return P.lz()},
mN:[function(a){self.scheduleImmediate(H.ba(new P.kf(H.k(a,{func:1,ret:-1})),0))},"$1","lx",4,0,10],
mO:[function(a){self.setImmediate(H.ba(new P.kg(H.k(a,{func:1,ret:-1})),0))},"$1","ly",4,0,10],
mP:[function(a){P.d1(C.u,H.k(a,{func:1,ret:-1}))},"$1","lz",4,0,10],
d1:function(a,b){var z
H.k(b,{func:1,ret:-1})
z=C.h.a3(a.a,1000)
return P.kQ(z<0?0:z,b)},
eD:function(a,b){var z
H.k(b,{func:1,ret:-1,args:[P.b1]})
z=C.h.a3(a.a,1000)
return P.kR(z<0?0:z,b)},
lt:function(a,b){if(H.bZ(a,{func:1,args:[P.a,P.aF]}))return H.k(a,{func:1,ret:null,args:[P.a,P.aF]})
if(H.bZ(a,{func:1,args:[P.a]}))return H.k(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.cD(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ls:function(){var z,y
for(;z=$.b8,z!=null;){$.bH=null
y=z.b
$.b8=y
if(y==null)$.bG=null
z.a.$0()}},
mS:[function(){$.dm=!0
try{P.ls()}finally{$.bH=null
$.dm=!1
if($.b8!=null)$.$get$dh().$1(P.fC())}},"$0","fC",0,0,3],
fx:function(a){var z=new P.f7(H.k(a,{func:1,ret:-1}))
if($.b8==null){$.bG=z
$.b8=z
if(!$.dm)$.$get$dh().$1(P.fC())}else{$.bG.b=z
$.bG=z}},
lw:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.b8
if(z==null){P.fx(a)
$.bH=$.bG
return}y=new P.f7(a)
x=$.bH
if(x==null){y.b=z
$.bH=y
$.b8=y}else{y.b=x.b
x.b=y
$.bH=y
if(y.b==null)$.bG=y}},
mg:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.M
if(C.k===y){P.cr(null,null,C.k,a)
return}y.toString
P.cr(null,null,y,H.k(y.ci(a),z))},
eC:function(a,b){var z,y
z={func:1,ret:-1}
H.k(b,z)
y=$.M
if(y===C.k){y.toString
return P.d1(a,b)}return P.d1(a,H.k(y.ci(b),z))},
jm:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b1]}
H.k(b,z)
y=$.M
if(y===C.k){y.toString
return P.eD(a,b)}x=y.dM(b,P.b1)
$.M.toString
return P.eD(a,H.k(x,z))},
cq:function(a,b,c,d,e){var z={}
z.a=d
P.lw(new P.lu(z,e))},
ft:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.M
if(y===c)return d.$0()
$.M=c
z=y
try{y=d.$0()
return y}finally{$.M=z}},
fu:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.w(e,g)
y=$.M
if(y===c)return d.$1(e)
$.M=c
z=y
try{y=d.$1(e)
return y}finally{$.M=z}},
lv:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
y=$.M
if(y===c)return d.$2(e,f)
$.M=c
z=y
try{y=d.$2(e,f)
return y}finally{$.M=z}},
cr:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.k!==c
if(z)d=!(!z||!1)?c.ci(d):c.is(d,-1)
P.fx(d)},
ke:{"^":"m:23;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kd:{"^":"m:44;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kf:{"^":"m:0;a",
$0:function(){this.a.$0()}},
kg:{"^":"m:0;a",
$0:function(){this.a.$0()}},
fj:{"^":"a;a,0b,c",
fi:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ba(new P.kT(this,b),0),a)
else throw H.e(P.U("`setTimeout()` not found."))},
fj:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.ba(new P.kS(this,a,Date.now(),b),0),a)
else throw H.e(P.U("Periodic timer."))},
$isb1:1,
p:{
kQ:function(a,b){var z=new P.fj(!0,0)
z.fi(a,b)
return z},
kR:function(a,b){var z=new P.fj(!1,0)
z.fj(a,b)
return z}}},
kT:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kS:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.f0(w,x)}z.c=y
this.d.$1(z)}},
b6:{"^":"a;0a,b,c,d,e,$ti",
j4:function(a){if(this.c!==6)return!0
return this.b.b.cQ(H.k(this.d,{func:1,ret:P.a5,args:[P.a]}),a.a,P.a5,P.a)},
iX:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.bZ(z,{func:1,args:[P.a,P.aF]}))return H.dt(w.jt(z,a.a,a.b,null,y,P.aF),x)
else return H.dt(w.cQ(H.k(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aM:{"^":"a;dE:a<,b,0hA:c<,$ti",
eC:function(a,b,c){var z,y,x,w
z=H.t(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.M
if(y!==C.k){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lt(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aM(0,$.M,[c])
w=b==null?1:3
this.d8(new P.b6(x,w,a,b,[z,c]))
return x},
jw:function(a,b){return this.eC(a,null,b)},
d8:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isb6")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaM")
z=y.a
if(z<4){y.d8(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cr(null,null,z,H.k(new P.ko(this,a),{func:1,ret:-1}))}},
dA:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isb6")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaM")
y=u.a
if(y<4){u.dA(a)
return}this.a=y
this.c=u.c}z.a=this.bn(a)
y=this.b
y.toString
P.cr(null,null,y,H.k(new P.kt(z,this),{func:1,ret:-1}))}},
c4:function(){var z=H.f(this.c,"$isb6")
this.c=null
return this.bn(z)},
bn:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
da:function(a){var z,y,x
z=H.t(this,0)
H.dt(a,{futureOr:1,type:z})
y=this.$ti
if(H.bJ(a,"$isbm",y,"$asbm"))if(H.bJ(a,"$isaM",y,null))P.fa(a,this)
else P.kp(a,this)
else{x=this.c4()
H.w(a,z)
this.a=4
this.c=a
P.bC(this,x)}},
dc:function(a,b){var z
H.f(b,"$isaF")
z=this.c4()
this.a=8
this.c=new P.ah(a,b)
P.bC(this,z)},
$isbm:1,
p:{
kp:function(a,b){var z,y,x
b.a=1
try{a.eC(new P.kq(b),new P.kr(b),null)}catch(x){z=H.ap(x)
y=H.be(x)
P.mg(new P.ks(b,z,y))}},
fa:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaM")
if(z>=4){y=b.c4()
b.a=a.a
b.c=a.c
P.bC(b,y)}else{y=H.f(b.c,"$isb6")
b.a=2
b.c=a
a.dA(y)}},
bC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isah")
y=y.b
u=v.a
t=v.b
y.toString
P.cq(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bC(z.a,b)}y=z.a
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
if(p){H.f(r,"$isah")
y=y.b
u=r.a
t=r.b
y.toString
P.cq(null,null,y,u,t)
return}o=$.M
if(o==null?q!=null:o!==q)$.M=q
else o=null
y=b.c
if(y===8)new P.kw(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kv(x,b,r).$0()}else if((y&2)!==0)new P.ku(z,x,b).$0()
if(o!=null)$.M=o
y=x.b
if(!!J.N(y).$isbm){if(y.a>=4){n=H.f(t.c,"$isb6")
t.c=null
b=t.bn(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fa(y,t)
return}}m=b.b
n=H.f(m.c,"$isb6")
m.c=null
b=m.bn(n)
y=x.a
u=x.b
if(!y){H.w(u,H.t(m,0))
m.a=4
m.c=u}else{H.f(u,"$isah")
m.a=8
m.c=u}z.a=m
y=m}}}},
ko:{"^":"m:0;a,b",
$0:function(){P.bC(this.a,this.b)}},
kt:{"^":"m:0;a,b",
$0:function(){P.bC(this.b,this.a.a)}},
kq:{"^":"m:23;a",
$1:function(a){var z=this.a
z.a=0
z.da(a)}},
kr:{"^":"m:31;a",
$2:function(a,b){this.a.dc(a,H.f(b,"$isaF"))},
$1:function(a){return this.$2(a,null)}},
ks:{"^":"m:0;a,b,c",
$0:function(){this.a.dc(this.b,this.c)}},
kw:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eA(H.k(w.d,{func:1}),null)}catch(v){y=H.ap(v)
x=H.be(v)
if(this.d){w=H.f(this.a.a.c,"$isah").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isah")
else u.b=new P.ah(y,x)
u.a=!0
return}if(!!J.N(z).$isbm){if(z instanceof P.aM&&z.gdE()>=4){if(z.gdE()===8){w=this.b
w.b=H.f(z.ghA(),"$isah")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.jw(new P.kx(t),null)
w.a=!1}}},
kx:{"^":"m:51;a",
$1:function(a){return this.a}},
kv:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.w(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.cQ(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ap(t)
y=H.be(t)
x=this.a
x.b=new P.ah(z,y)
x.a=!0}}},
ku:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isah")
w=this.c
if(w.j4(z)&&w.e!=null){v=this.b
v.b=w.iX(z)
v.a=!1}}catch(u){y=H.ap(u)
x=H.be(u)
w=H.f(this.a.a.c,"$isah")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ah(y,x)
s.a=!0}}},
f7:{"^":"a;a,0b"},
jb:{"^":"a;$ti",
gn:function(a){var z,y,x,w
z={}
y=new P.aM(0,$.M,[P.l])
z.a=0
x=H.t(this,0)
w=H.k(new P.jd(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.je(z,y),{func:1,ret:-1})
W.Y(this.a,this.b,w,!1,x)
return y}},
jd:{"^":"m;a,b",
$1:function(a){H.w(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.t(this.b,0)]}}},
je:{"^":"m:0;a,b",
$0:function(){this.b.da(this.a.a)}},
d0:{"^":"a;$ti"},
jc:{"^":"a;"},
b1:{"^":"a;"},
ah:{"^":"a;a,b",
i:function(a){return H.i(this.a)},
$isa_:1},
li:{"^":"a;",$ismM:1},
lu:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ee()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
kI:{"^":"li;",
ju:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.k===$.M){a.$0()
return}P.ft(null,null,this,a,-1)}catch(x){z=H.ap(x)
y=H.be(x)
P.cq(null,null,this,z,H.f(y,"$isaF"))}},
jv:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.k===$.M){a.$1(b)
return}P.fu(null,null,this,a,b,-1,c)}catch(x){z=H.ap(x)
y=H.be(x)
P.cq(null,null,this,z,H.f(y,"$isaF"))}},
is:function(a,b){return new P.kK(this,H.k(a,{func:1,ret:b}),b)},
ci:function(a){return new P.kJ(this,H.k(a,{func:1,ret:-1}))},
dM:function(a,b){return new P.kL(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
eA:function(a,b){H.k(a,{func:1,ret:b})
if($.M===C.k)return a.$0()
return P.ft(null,null,this,a,b)},
cQ:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.M===C.k)return a.$1(b)
return P.fu(null,null,this,a,b,c,d)},
jt:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.M===C.k)return a.$2(b,c)
return P.lv(null,null,this,a,b,c,d,e,f)}},
kK:{"^":"m;a,b,c",
$0:function(){return this.a.eA(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kJ:{"^":"m:3;a,b",
$0:function(){return this.a.ju(this.b)}},
kL:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.jv(this.b,H.w(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hZ:function(a,b,c,d,e){return new H.aQ(0,0,[d,e])},
i0:function(a,b,c){H.c1(a)
return H.j(H.lL(a,new H.aQ(0,0,[b,c])),"$ise3",[b,c],"$ase3")},
i_:function(a,b){return new H.aQ(0,0,[a,b])},
i3:function(a,b,c,d){return new P.kC(0,0,[d])},
hK:function(a,b,c){var z,y
if(P.dn(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bI()
C.a.h(y,a)
try{P.lr(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.eu(b,H.fN(z,"$isq"),", ")+c
return y.charCodeAt(0)==0?y:y},
cM:function(a,b,c){var z,y,x
if(P.dn(a))return b+"..."+c
z=new P.ak(b)
y=$.$get$bI()
C.a.h(y,a)
try{x=z
x.a=P.eu(x.gaF(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaF()+c
y=z.gaF()
return y.charCodeAt(0)==0?y:y},
dn:function(a){var z,y
for(z=0;y=$.$get$bI(),z<y.length;++z)if(a===y[z])return!0
return!1},
lr:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga0(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.H())return
w=H.i(z.gR())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.H()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gR();++x
if(!z.H()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gR();++x
for(;z.H();t=s,s=r){r=z.gR();++x
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
i1:function(a,b,c){var z=P.hZ(null,null,null,b,c)
a.Y(0,new P.i2(z,b,c))
return z},
cQ:function(a){var z,y,x
z={}
if(P.dn(a))return"{...}"
y=new P.ak("")
try{C.a.h($.$get$bI(),a)
x=y
x.a=x.gaF()+"{"
z.a=!0
a.Y(0,new P.i9(z,y))
z=y
z.a=z.gaF()+"}"}finally{z=$.$get$bI()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaF()
return z.charCodeAt(0)==0?z:z},
kC:{"^":"ky;a,0b,0c,0d,0e,0f,r,$ti",
ga0:function(a){return P.fc(this,this.r,H.t(this,0))},
gn:function(a){return this.a},
h:function(a,b){var z
H.w(b,H.t(this,0))
if(typeof b==="number"&&(b&0x3ffffff)===b){z=this.c
if(z==null){z=P.fd()
this.c=z}return this.fv(z,b)}else return this.fk(b)},
fk:function(a){var z,y,x
H.w(a,H.t(this,0))
z=this.d
if(z==null){z=P.fd()
this.d=z}y=this.dd(a)
x=z[y]
if(x==null)z[y]=[this.bR(a)]
else{if(this.dk(x,a)>=0)return!1
x.push(this.bR(a))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.hs(this.c,b)
else return this.hr(b)},
hr:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.fK(z,a)
x=this.dk(y,a)
if(x<0)return!1
this.dG(y.splice(x,1)[0])
return!0},
fv:function(a,b){H.w(b,H.t(this,0))
if(H.f(a[b],"$isdi")!=null)return!1
a[b]=this.bR(b)
return!0},
hs:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdi")
if(z==null)return!1
this.dG(z)
delete a[b]
return!0},
dr:function(){this.r=this.r+1&67108863},
bR:function(a){var z,y
z=new P.di(H.w(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dr()
return z},
dG:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dr()},
dd:function(a){return J.bK(a)&0x3ffffff},
fK:function(a,b){return a[this.dd(b)]},
dk:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(a[y].a==b)return y
return-1},
p:{
fd:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
di:{"^":"a;a,0b,0c"},
kD:{"^":"a;a,b,0c,0d,$ti",
sd9:function(a){this.d=H.w(a,H.t(this,0))},
gR:function(){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aW(z))
else{z=this.c
if(z==null){this.sd9(null)
return!1}else{this.sd9(H.w(z.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
$isaP:1,
p:{
fc:function(a,b,c){var z=new P.kD(a,b,[c])
z.c=a.e
return z}}},
ky:{"^":"iY;"},
i2:{"^":"m:6;a,b,c",
$2:function(a,b){this.a.m(0,H.w(a,this.b),H.w(b,this.c))}},
cb:{"^":"kE;",$isq:1,$isb:1},
R:{"^":"a;$ti",
ga0:function(a){return new H.e4(a,this.gn(a),0,[H.c_(this,a,"R",0)])},
a9:function(a,b){return this.j(a,b)},
jy:function(a,b){var z,y
z=H.c([],[H.c_(this,a,"R",0)])
C.a.sn(z,this.gn(a))
for(y=0;y<this.gn(a);++y)C.a.m(z,y,this.j(a,y))
return z},
jx:function(a){return this.jy(a,!0)},
iR:function(a,b,c,d){var z
H.w(d,H.c_(this,a,"R",0))
P.aS(b,c,this.gn(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cM(a,"[","]")}},
i8:{"^":"ia;"},
i9:{"^":"m:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
ia:{"^":"a;$ti",
Y:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
for(z=this.gcE(),z=z.ga0(z);z.H();){y=z.gR()
b.$2(y,this.j(0,y))}},
gn:function(a){var z=this.gcE()
return z.gn(z)},
i:function(a){return P.cQ(this)},
$isH:1},
kW:{"^":"a;$ti",
m:function(a,b,c){H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
throw H.e(P.U("Cannot modify unmodifiable map"))}},
ib:{"^":"a;$ti",
j:function(a,b){return this.a.j(0,b)},
m:function(a,b,c){this.a.m(0,H.w(b,H.t(this,0)),H.w(c,H.t(this,1)))},
Y:function(a,b){this.a.Y(0,H.k(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gn:function(a){var z=this.a
return z.gn(z)},
i:function(a){return J.ab(this.a)},
$isH:1},
eR:{"^":"kX;a,$ti"},
j_:{"^":"a;$ti",
i:function(a){return P.cM(this,"{","}")},
a9:function(a,b){var z,y,x
if(b<0)H.r(P.V(b,0,null,"index",null))
for(z=P.fc(this,this.r,H.t(this,0)),y=0;z.H();){x=z.d
if(b===y)return x;++y}throw H.e(P.bn(b,this,"index",null,y))},
$isq:1,
$iseq:1},
iY:{"^":"j_;"},
kE:{"^":"a+R;"},
kX:{"^":"ib+kW;$ti"}}],["","",,P,{"^":"",h4:{"^":"bM;a",
j6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.aS(b,c,a.length,null,null,null)
z=$.$get$f8()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.c.F(a,y)
if(r===37){q=s+2
if(q<=c){p=H.cu(C.c.F(a,s))
o=H.cu(C.c.F(a,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.d(z,n)
m=z[n]
if(m>=0){n=C.c.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ak("")
l=w.a+=C.c.t(a,x,y)
w.a=l+H.bU(r)
x=s
continue}}throw H.e(P.P("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.c.t(a,x,c)
k=l.length
if(v>=0)P.dC(a,u,c,v,t,k)
else{j=C.h.bi(k-1,4)+1
if(j===1)throw H.e(P.P("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.c.aR(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.dC(a,u,c,v,t,i)
else{j=C.h.bi(i,4)
if(j===1)throw H.e(P.P("Invalid base64 encoding length ",a,c))
if(j>1)a=C.c.aR(a,c,c,j===2?"==":"=")}return a},
$asbM:function(){return[[P.b,P.l],P.n]},
p:{
dC:function(a,b,c,d,e,f){if(C.h.bi(f,4)!==0)throw H.e(P.P("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.P("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.P("Invalid base64 padding, more than two '=' characters",a,b))}}},h5:{"^":"bj;a",
$asbj:function(){return[[P.b,P.l],P.n]}},bM:{"^":"a;$ti"},bj:{"^":"jc;$ti"},hu:{"^":"bM;",
$asbM:function(){return[P.n,[P.b,P.l]]}},jQ:{"^":"hu;a",
giQ:function(){return C.L}},jX:{"^":"bj;",
aY:function(a,b,c){var z,y,x,w
z=a.length
P.aS(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lh(0,0,x)
if(w.fJ(a,b,z)!==z)w.dI(J.fZ(a,z-1),0)
return new Uint8Array(x.subarray(0,H.lk(0,w.b,x.length)))},
co:function(a){return this.aY(a,0,null)},
$asbj:function(){return[P.n,[P.b,P.l]]}},lh:{"^":"a;a,b,c",
dI:function(a,b){var z,y,x,w,v
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
fJ:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.X(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.F(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dI(w,C.c.F(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},jR:{"^":"bj;a",
aY:function(a,b,c){var z,y,x,w,v
H.j(a,"$isb",[P.l],"$asb")
z=P.jS(!1,a,b,c)
if(z!=null)return z
y=J.aA(a)
P.aS(b,c,y,null,null,null)
x=new P.ak("")
w=new P.le(!1,x,!0,0,0,0)
w.aY(a,b,y)
if(w.e>0){H.r(P.P("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.bU(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
co:function(a){return this.aY(a,0,null)},
$asbj:function(){return[[P.b,P.l],P.n]},
p:{
jS:function(a,b,c,d){H.j(b,"$isb",[P.l],"$asb")
if(b instanceof Uint8Array)return P.jT(!1,b,c,d)
return},
jT:function(a,b,c,d){var z,y,x
z=$.$get$eW()
if(z==null)return
y=0===c
if(y&&!0)return P.df(z,b)
x=b.length
d=P.aS(c,d,x,null,null,null)
if(y&&d===x)return P.df(z,b)
return P.df(z,b.subarray(c,d))},
df:function(a,b){if(P.jV(b))return
return P.jW(a,b)},
jW:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ap(y)}return},
jV:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
jU:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ap(y)}return}}},le:{"^":"a;a,b,c,d,e,f",
aY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(a,"$isb",[P.l],"$asb")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lg(c)
v=new P.lf(this,b,c,a)
$label0$0:for(u=J.bd(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bK()
if((r&192)!==128){q=P.P("Bad UTF-8 encoding 0x"+C.h.bc(r,16),a,s)
throw H.e(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.B,q)
if(z<=C.B[q]){q=P.P("Overlong encoding of 0x"+C.h.bc(z,16),a,s-x-1)
throw H.e(q)}if(z>1114111){q=P.P("Character outside valid Unicode range: 0x"+C.h.bc(z,16),a,s-x-1)
throw H.e(q)}if(!this.c||z!==65279)t.a+=H.bU(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.bM()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.P("Negative UTF-8 code unit: -0x"+C.h.bc(-r,16),a,n-1)
throw H.e(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.P("Bad UTF-8 encoding 0x"+C.h.bc(r,16),a,n-1)
throw H.e(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lg:{"^":"m:40;a",
$2:function(a,b){var z,y,x,w
H.j(a,"$isb",[P.l],"$asb")
z=this.a
for(y=J.bd(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bK()
if((w&127)!==w)return x-b}return z-b}},lf:{"^":"m:41;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.bW(this.d,a,b)}}}],["","",,P,{"^":"",
c0:function(a,b,c){var z
H.k(b,{func:1,ret:P.l,args:[P.n]})
z=H.iH(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.e(P.P(a,null,null))},
hw:function(a){if(a instanceof H.m)return a.i(0)
return"Instance of '"+H.b0(a)+"'"},
i4:function(a,b,c,d){var z,y
H.w(b,d)
z=J.hL(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.j(z,"$isb",[d],"$asb")},
i5:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.ga0(a);x.H();)C.a.h(y,H.w(x.gR(),c))
if(b)return y
return H.j(J.ca(y),"$isb",z,"$asb")},
bW:function(a,b,c){var z,y
z=P.l
H.j(a,"$isq",[z],"$asq")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.j(a,"$isaY",[z],"$asaY")
y=a.length
c=P.aS(b,c,y,null,null,null)
return H.el(b>0||c<y?C.a.eW(a,b,c):a)}if(!!J.N(a).$isec)return H.iJ(a,b,P.aS(b,c,a.length,null,null,null))
return P.jf(a,b,c)},
jf:function(a,b,c){var z,y,x,w
H.j(a,"$isq",[P.l],"$asq")
if(b<0)throw H.e(P.V(b,0,J.aA(a),null,null))
z=c==null
if(!z&&c<b)throw H.e(P.V(c,b,J.aA(a),null,null))
y=J.bL(a)
for(x=0;x<b;++x)if(!y.H())throw H.e(P.V(b,0,x,null,null))
w=[]
if(z)for(;y.H();)w.push(y.gR())
else for(x=b;x<c;++x){if(!y.H())throw H.e(P.V(c,b,x,null,null))
w.push(y.gR())}return H.el(w)},
iQ:function(a,b,c){return new H.hO(a,H.hP(a,!1,!0,!1))},
eT:function(){var z=H.iz()
if(z!=null)return P.jI(z,0,null)
throw H.e(P.U("'Uri.base' is not supported"))},
c5:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ab(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hw(a)},
u:function(a){return new P.f9(a)},
i6:function(a,b,c,d){var z,y
H.k(b,{func:1,ret:d,args:[P.l]})
z=H.c([],[d])
C.a.sn(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dx:function(a){H.me(a)},
jI:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.c.F(a,b+4)^58)*3|C.c.F(a,b)^100|C.c.F(a,b+1)^97|C.c.F(a,b+2)^116|C.c.F(a,b+3)^97)>>>0
if(y===0)return P.eS(b>0||c<c?C.c.t(a,b,c):a,5,null).geH()
else if(y===32)return P.eS(C.c.t(a,z,c),0,null).geH()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.l])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fv(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.jD()
if(v>=b)if(P.fv(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.A()
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
p=!1}else{if(!(r<c&&r===s+2&&C.c.a7(a,"..",s)))n=r>s+2&&C.c.a7(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.c.a7(a,"file",b)){if(u<=b){if(!C.c.a7(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.c.t(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.c.aR(a,s,r,"/");++r;++q;++c}else{a=C.c.t(a,b,s)+"/"+C.c.t(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.c.a7(a,"http",b)){if(x&&t+3===s&&C.c.a7(a,"80",t+1))if(b===0&&!0){a=C.c.aR(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.c.t(a,b,t)+C.c.t(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.c.a7(a,"https",b)){if(x&&t+4===s&&C.c.a7(a,"443",t+1))if(b===0&&!0){a=C.c.aR(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.c.t(a,b,t)+C.c.t(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.c.t(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.kM(a,v,u,t,s,r,q,o)}return P.kY(a,b,c,v,u,t,s,r,q,o)},
eV:function(a,b){var z=P.n
return C.a.iU(H.c(a.split("&"),[z]),P.i_(z,z),new P.jL(b),[P.H,P.n,P.n])},
jG:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jH(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.c.X(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.c0(C.c.t(a,v,w),null,null)
if(typeof s!=="number")return s.bM()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.c0(C.c.t(a,v,c),null,null)
if(typeof s!=="number")return s.bM()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
eU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jJ(a)
y=new P.jK(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.l])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.c.X(a,w)
if(s===58){if(w===b){++w
if(C.c.X(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaz(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jG(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.h.aI(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
ll:function(){var z,y,x,w,v
z=P.i6(22,new P.ln(),!0,P.J)
y=new P.lm(z)
x=new P.lo()
w=new P.lp()
v=H.f(y.$2(0,225),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(14,225),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(15,225),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(1,225),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(2,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(3,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(4,229),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(5,229),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(6,231),"$isJ")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(7,231),"$isJ")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.f(y.$2(8,8),"$isJ"),"]",5)
v=H.f(y.$2(9,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(16,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(17,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(10,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(18,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(19,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(11,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(12,236),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.f(y.$2(13,237),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.f(y.$2(20,245),"$isJ"),"az",21)
v=H.f(y.$2(21,245),"$isJ")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fv:function(a,b,c,d,e){var z,y,x,w,v
H.j(e,"$isb",[P.l],"$asb")
z=$.$get$fw()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.d(z,d)
x=z[d]
w=C.c.F(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.d(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
a5:{"^":"a;"},
"+bool":0,
ai:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.ai))return!1
return this.a===b.a&&!0},
gU:function(a){var z=this.a
return(z^C.h.aI(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.hl(H.iG(this))
y=P.bN(H.iE(this))
x=P.bN(H.iA(this))
w=P.bN(H.iB(this))
v=P.bN(H.iD(this))
u=P.bN(H.iF(this))
t=P.hm(H.iC(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
p:{
hl:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hm:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bN:function(a){if(a>=10)return""+a
return"0"+a}}},
p:{"^":"ag;"},
"+double":0,
bk:{"^":"a;a",
P:function(a,b){return C.h.P(this.a,H.f(b,"$isbk").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.bk))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hr()
y=this.a
if(y<0)return"-"+new P.bk(0-y).i(0)
x=z.$1(C.h.a3(y,6e7)%60)
w=z.$1(C.h.a3(y,1e6)%60)
v=new P.hq().$1(y%1e6)
return""+C.h.a3(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
p:{
dV:function(a,b,c,d,e,f){return new P.bk(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hq:{"^":"m:19;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hr:{"^":"m:19;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a_:{"^":"a;"},
ee:{"^":"a_;",
i:function(a){return"Throw of null."}},
aN:{"^":"a_;a,b,c,d",
gbT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbS:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gbT()+y+x
if(!this.a)return w
v=this.gbS()
u=P.c5(this.b)
return w+v+": "+H.i(u)},
p:{
c2:function(a){return new P.aN(!1,null,null,a)},
cD:function(a,b,c){return new P.aN(!0,a,b,c)}}},
ce:{"^":"aN;e,f,a,b,c,d",
gbT:function(){return"RangeError"},
gbS:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
p:{
bV:function(a,b,c){return new P.ce(null,null,!0,a,b,"Value not in range")},
V:function(a,b,c,d,e){return new P.ce(b,c,!0,a,d,"Invalid value")},
aS:function(a,b,c,d,e,f){if(typeof a!=="number")return H.v(a)
if(0>a||a>c)throw H.e(P.V(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.V(b,a,c,"end",f))
return b}return c}}},
hI:{"^":"aN;e,n:f>,a,b,c,d",
gbT:function(){return"RangeError"},
gbS:function(){if(J.fV(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
p:{
bn:function(a,b,c,d,e){var z=H.a0(e!=null?e:J.aA(b))
return new P.hI(b,z,!0,a,c,"Index out of range")}}},
jE:{"^":"a_;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
U:function(a){return new P.jE(a)}}},
jB:{"^":"a_;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cj:function(a){return new P.jB(a)}}},
j9:{"^":"a_;a",
i:function(a){return"Bad state: "+this.a}},
hf:{"^":"a_;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.c5(z))+"."},
p:{
aW:function(a){return new P.hf(a)}}},
iv:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa_:1},
es:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa_:1},
hk:{"^":"a_;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
f9:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hC:{"^":"a;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.i(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.c.t(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.c.F(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.c.X(w,s)
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
m=""}l=C.c.t(w,o,p)
return y+n+l+m+"\n"+C.c.k(" ",x-o+n.length)+"^\n"},
p:{
P:function(a,b,c){return new P.hC(a,b,c)}}},
l:{"^":"ag;"},
"+int":0,
q:{"^":"a;$ti",
gn:function(a){var z,y
z=this.ga0(this)
for(y=0;z.H();)++y
return y},
a9:function(a,b){var z,y,x
if(b<0)H.r(P.V(b,0,null,"index",null))
for(z=this.ga0(this),y=0;z.H();){x=z.gR()
if(b===y)return x;++y}throw H.e(P.bn(b,this,"index",null,y))},
i:function(a){return P.hK(this,"(",")")}},
aP:{"^":"a;$ti"},
b:{"^":"a;$ti",$isq:1},
"+List":0,
H:{"^":"a;$ti"},
z:{"^":"a;",
gU:function(a){return P.a.prototype.gU.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ag:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gU:function(a){return H.bw(this)},
i:function(a){return"Instance of '"+H.b0(this)+"'"},
toString:function(){return this.i(this)}},
aF:{"^":"a;"},
n:{"^":"a;",$isef:1},
"+String":0,
ak:{"^":"a;aF:a<",
gn:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$ismI:1,
p:{
eu:function(a,b,c){var z=J.bL(b)
if(!z.H())return a
if(c.length===0){do a+=H.i(z.gR())
while(z.H())}else{a+=H.i(z.gR())
for(;z.H();)a=a+c+H.i(z.gR())}return a}}},
jL:{"^":"m:45;a",
$2:function(a,b){var z,y,x,w
z=P.n
H.j(a,"$isH",[z,z],"$asH")
H.I(b)
y=J.du(b).ek(b,"=")
if(y===-1){if(b!=="")a.m(0,P.dk(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.c.t(b,0,y)
w=C.c.aA(b,y+1)
z=this.a
a.m(0,P.dk(x,0,x.length,z,!0),P.dk(w,0,w.length,z,!0))}return a}},
jH:{"^":"m:38;a",
$2:function(a,b){throw H.e(P.P("Illegal IPv4 address, "+a,this.a,b))}},
jJ:{"^":"m:26;a",
$2:function(a,b){throw H.e(P.P("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jK:{"^":"m:48;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.c0(C.c.t(this.b,a,b),null,16)
if(typeof z!=="number")return z.P()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cn:{"^":"a;bN:a<,b,c,d,es:e>,f,r,0x,0y,0z,0Q,0ch",
shq:function(a){var z=P.n
this.Q=H.j(a,"$isH",[z,z],"$asH")},
geJ:function(){return this.b},
gcB:function(a){var z=this.c
if(z==null)return""
if(C.c.a6(z,"["))return C.c.t(z,1,z.length-1)
return z},
gbH:function(a){var z=this.d
if(z==null)return P.fk(this.a)
return z},
gcL:function(){var z=this.f
return z==null?"":z},
gef:function(){var z=this.r
return z==null?"":z},
cP:function(a,b,c,d,e,f,g,h,i){var z,y,x
H.j(g,"$isH",[P.n,null],"$asH")
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
if(x&&!C.c.a6(c,"/"))c="/"+c
f=P.dj(f,0,0,g)
return new P.cn(h,i,b,e,c,f,this.r)},
ey:function(a){return this.cP(null,null,null,null,null,null,a,null,null)},
gcM:function(){var z,y
if(this.Q==null){z=this.f
y=P.n
this.shq(new P.eR(P.eV(z==null?"":z,C.m),[y,y]))}return this.Q},
geg:function(){return this.c!=null},
gej:function(){return this.f!=null},
geh:function(){return this.r!=null},
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
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!!J.N(b).$isde){if(this.a==b.gbN())if(this.c!=null===b.geg())if(this.b==b.geJ())if(this.gcB(this)==b.gcB(b))if(this.gbH(this)==b.gbH(b))if(this.e===b.ges(b)){z=this.f
y=z==null
if(!y===b.gej()){if(y)z=""
if(z===b.gcL()){z=this.r
y=z==null
if(!y===b.geh()){if(y)z=""
z=z===b.gef()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
gU:function(a){var z=this.z
if(z==null){z=C.c.gU(this.i(0))
this.z=z}return z},
$isde:1,
p:{
co:function(a,b,c,d){var z,y,x,w,v,u
H.j(a,"$isb",[P.l],"$asb")
if(c===C.m){z=$.$get$fp().b
if(typeof b!=="string")H.r(H.ad(b))
z=z.test(b)}else z=!1
if(z)return b
H.w(b,H.ae(c,"bM",0))
y=c.giQ().co(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bU(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
kY:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.l8(a,b,d)
else{if(d===b)P.bD(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.l9(a,z,e-1):""
x=P.l2(a,e,f,!1)
if(typeof f!=="number")return f.A()
w=f+1
if(typeof g!=="number")return H.v(g)
v=w<g?P.l5(P.c0(C.c.t(a,w,g),new P.kZ(a,f),null),j):null}else{y=""
x=null
v=null}u=P.l3(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.P()
t=h<i?P.dj(a,h+1,i,null):null
return new P.cn(j,y,x,v,u,t,i<c?P.l1(a,i+1,c):null)},
fk:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bD:function(a,b,c){throw H.e(P.P(c,a,b))},
l5:function(a,b){if(a!=null&&a===P.fk(b))return
return a},
l2:function(a,b,c,d){var z,y
if(b===c)return""
if(C.c.X(a,b)===91){if(typeof c!=="number")return c.I()
z=c-1
if(C.c.X(a,z)!==93)P.bD(a,b,"Missing end `]` to match `[` in host")
P.eU(a,b+1,z)
return C.c.t(a,b,c).toLowerCase()}if(typeof c!=="number")return H.v(c)
y=b
for(;y<c;++y)if(C.c.X(a,y)===58){P.eU(a,b,c)
return"["+a+"]"}return P.lb(a,b,c)},
lb:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.v(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.c.X(a,z)
if(v===37){u=P.fr(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ak("")
s=C.c.t(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.c.t(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.d(C.C,t)
t=(C.C[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ak("")
if(y<z){x.a+=C.c.t(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.p,t)
t=(C.p[t]&1<<(v&15))!==0}else t=!1
if(t)P.bD(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.c.X(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ak("")
s=C.c.t(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fl(v)
z+=q
y=z}}}}if(x==null)return C.c.t(a,b,c)
if(y<c){s=C.c.t(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
l8:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fn(C.c.F(a,b)))P.bD(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.c.F(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.r,w)
w=(C.r[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bD(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.c.t(a,b,c)
return P.l_(y?a.toLowerCase():a)},
l_:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
l9:function(a,b,c){return P.bE(a,b,c,C.X,!1)},
l3:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bE(a,b,c,C.D,!0):C.o.kj(d,new P.l4(),P.n).D(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.c.a6(w,"/"))w="/"+w
return P.la(w,e,f)},
la:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.c.a6(a,"/"))return P.lc(a,!z||c)
return P.ld(a)},
dj:function(a,b,c,d){var z,y
z={}
H.j(d,"$isH",[P.n,null],"$asH")
if(a!=null){if(d!=null)throw H.e(P.c2("Both query and queryParameters specified"))
return P.bE(a,b,c,C.q,!0)}if(d==null)return
y=new P.ak("")
z.a=""
d.Y(0,new P.l6(new P.l7(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
l1:function(a,b,c){return P.bE(a,b,c,C.q,!0)},
fr:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.c.X(a,b+1)
x=C.c.X(a,z)
w=H.cu(y)
v=H.cu(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.h.aI(u,4)
if(z>=8)return H.d(C.t,z)
z=(C.t[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bU(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.c.t(a,b,b+3).toUpperCase()
return},
fl:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.l])
C.a.m(y,0,37)
C.a.m(y,1,C.c.F("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.c.F("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.l])
for(v=0;--w,w>=0;x=128){u=C.h.hI(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.c.F("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.c.F("0123456789ABCDEF",u&15))
v+=3}}return P.bW(y,0,null)},
bE:function(a,b,c,d,e){var z=P.fq(a,b,c,H.j(d,"$isb",[P.l],"$asb"),e)
return z==null?C.c.t(a,b,c):z},
fq:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.j(d,"$isb",[P.l],"$asb")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.P()
if(typeof c!=="number")return H.v(c)
if(!(y<c))break
c$0:{v=C.c.X(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.d(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fr(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.p,u)
u=(C.p[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bD(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.c.X(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fl(v)}}if(w==null)w=new P.ak("")
w.a+=C.c.t(a,x,y)
w.a+=H.i(t)
if(typeof s!=="number")return H.v(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.P()
if(x<c)w.a+=C.c.t(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fo:function(a){if(C.c.a6(a,"."))return!0
return C.c.ek(a,"/.")!==-1},
ld:function(a){var z,y,x,w,v,u,t
if(!P.fo(a))return a
z=H.c([],[P.n])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.F(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.D(z,"/")},
lc:function(a,b){var z,y,x,w,v,u
if(!P.fo(a))return!b?P.fm(a):a
z=H.c([],[P.n])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaz(z)!==".."){if(0>=z.length)return H.d(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.d(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaz(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.d(z,0)
C.a.m(z,0,P.fm(z[0]))}return C.a.D(z,"/")},
fm:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fn(J.fY(a,0)))for(y=1;y<z;++y){x=C.c.F(a,y)
if(x===58)return C.c.t(a,0,y)+"%3A"+C.c.aA(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.r,w)
w=(C.r[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
l0:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.c.F(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.e(P.c2("Invalid URL encoding"))}}return z},
dk:function(a,b,c,d,e){var z,y,x,w,v
y=b
while(!0){if(!(y<c)){z=!0
break}x=C.c.F(a,y)
if(x<=127)if(x!==37)w=x===43
else w=!0
else w=!0
if(w){z=!1
break}++y}if(z){if(C.m!==d)w=!1
else w=!0
if(w)return C.c.t(a,b,c)
else v=new H.Z(C.c.t(a,b,c))}else{v=H.c([],[P.l])
for(w=a.length,y=b;y<c;++y){x=C.c.F(a,y)
if(x>127)throw H.e(P.c2("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.e(P.c2("Truncated URI"))
C.a.h(v,P.l0(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.j(v,"$isb",[P.l],"$asb")
return new P.jR(!1).co(v)},
fn:function(a){var z=a|32
return 97<=z&&z<=122}}},
kZ:{"^":"m:43;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.A()
throw H.e(P.P("Invalid port",this.a,z+1))}},
l4:{"^":"m:46;",
$1:function(a){return P.co(C.Z,a,C.m,!1)}},
l7:{"^":"m:42;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.i(P.co(C.t,a,C.m,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.i(P.co(C.t,b,C.m,!0))}}},
l6:{"^":"m:39;a",
$2:function(a,b){var z,y
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(z=J.bL(H.fN(b,"$isq")),y=this.a;z.H();)y.$2(a,H.I(z.gR()))}},
jF:{"^":"a;a,b,c",
geH:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.c.el(y,"?",z)
w=y.length
if(x>=0){v=P.bE(y,x+1,w,C.q,!1)
w=x}else v=null
z=new P.kk(this,"data",null,null,null,P.bE(y,z,w,C.D,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
eS:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.l])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.c.F(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.e(P.P("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.e(P.P("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.c.F(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaz(z)
if(v!==44||x!==t+7||!C.c.a7(a,"base64",t+1))throw H.e(P.P("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.I.j6(a,s,y)
else{r=P.fq(a,s,y,C.q,!0)
if(r!=null)a=C.c.aR(a,s,y,r)}return new P.jF(a,z,c)}}},
ln:{"^":"m:50;",
$1:function(a){return new Uint8Array(96)}},
lm:{"^":"m:37;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.h_(z,0,96,b)
return z}},
lo:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.c.F(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
lp:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.c.F(b,0),y=C.c.F(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
kM:{"^":"a;a,b,c,d,e,f,r,x,0y",
geg:function(){return this.c>0},
gei:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.A()
y=this.e
if(typeof y!=="number")return H.v(y)
y=z+1<y
z=y}else z=!1
return z},
gej:function(){var z=this.f
if(typeof z!=="number")return z.P()
return z<this.r},
geh:function(){return this.r<this.a.length},
gdn:function(){return this.b===4&&C.c.a6(this.a,"http")},
gdq:function(){return this.b===5&&C.c.a6(this.a,"https")},
gbN:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdn()){this.x="http"
z="http"}else if(this.gdq()){this.x="https"
z="https"}else if(z===4&&C.c.a6(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.c.a6(this.a,"package")){this.x="package"
z="package"}else{z=C.c.t(this.a,0,z)
this.x=z}return z},
geJ:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.c.t(this.a,y,z-1):""},
gcB:function(a){var z=this.c
return z>0?C.c.t(this.a,z,this.d):""},
gbH:function(a){var z
if(this.gei()){z=this.d
if(typeof z!=="number")return z.A()
return P.c0(C.c.t(this.a,z+1,this.e),null,null)}if(this.gdn())return 80
if(this.gdq())return 443
return 0},
ges:function(a){return C.c.t(this.a,this.e,this.f)},
gcL:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.P()
return z<y?C.c.t(this.a,z+1,y):""},
gef:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.c.aA(y,z+1):""},
gcM:function(){var z=this.f
if(typeof z!=="number")return z.P()
if(z>=this.r)return C.a_
z=P.n
return new P.eR(P.eV(this.gcL(),C.m),[z,z])},
cP:function(a,b,c,d,e,f,g,h,i){var z,y,x
H.j(g,"$isH",[P.n,null],"$asH")
h=this.gbN()
z=h==="file"
y=this.c
i=y>0?C.c.t(this.a,this.b+3,y):""
e=this.gei()?this.gbH(this):null
y=this.c
if(y>0)b=C.c.t(this.a,y,this.d)
else if(i.length!==0||e!=null||z)b=""
y=this.a
c=C.c.t(y,this.e,this.f)
if(!z)x=b!=null&&c.length!==0
else x=!0
if(x&&!C.c.a6(c,"/"))c="/"+c
f=P.dj(f,0,0,g)
x=this.r
if(x<y.length)a=C.c.aA(y,x+1)
return new P.cn(h,i,b,e,c,f,a)},
ey:function(a){return this.cP(null,null,null,null,null,null,a,null,null)},
gU:function(a){var z=this.y
if(z==null){z=C.c.gU(this.a)
this.y=z}return z},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.N(b).$isde)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$isde:1},
kk:{"^":"cn;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
dJ:function(a,b){var z=document.createElement("canvas")
return z},
ht:function(a){H.f(a,"$isc6")
return"wheel"},
hJ:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$isdY")
try{J.h1(z,a)}catch(x){H.ap(x)}return z},
cl:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fb:function(a,b,c,d){var z,y
z=W.cl(W.cl(W.cl(W.cl(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fz:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.M
if(z===C.k)return a
return z.dM(a,b)},
aj:{"^":"W;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
mq:{"^":"aj;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
mr:{"^":"aj;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
h6:{"^":"aj;","%":"HTMLBodyElement"},
cH:{"^":"aj;",
cY:function(a,b,c){var z=this.fL(a,b,P.lA(c,null))
return z},
fL:function(a,b,c){return a.getContext(b,c)},
$iscH:1,
"%":"HTMLCanvasElement"},
mu:{"^":"K;0n:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
mw:{"^":"kj;0n:length=",
eQ:function(a,b){var z=this.fM(a,this.fq(a,b))
return z==null?"":z},
fq:function(a,b){var z,y
z=$.$get$dN()
y=z[b]
if(typeof y==="string")return y
y=this.hL(a,b)
z[b]=y
return y},
hL:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hn()+b
if(z in a)return z
return b},
fM:function(a,b){return a.getPropertyValue(b)},
gcj:function(a){return a.bottom},
gb0:function(a){return a.height},
gaP:function(a){return a.left},
gba:function(a){return a.right},
gbe:function(a){return a.top},
gbg:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hj:{"^":"a;",
gaP:function(a){return this.eQ(a,"left")}},
dU:{"^":"aj;",$isdU:1,"%":"HTMLDivElement"},
ho:{"^":"K;",
cZ:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
mx:{"^":"L;",
i:function(a){return String(a)},
"%":"DOMException"},
hp:{"^":"L;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
q:function(a,b){var z
if(b==null)return!1
if(!H.bJ(b,"$isaE",[P.ag],"$asaE"))return!1
z=J.az(b)
return a.left===z.gaP(b)&&a.top===z.gbe(b)&&a.width===z.gbg(b)&&a.height===z.gb0(b)},
gU:function(a){return W.fb(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcj:function(a){return a.bottom},
gb0:function(a){return a.height},
gaP:function(a){return a.left},
gba:function(a){return a.right},
gbe:function(a){return a.top},
gbg:function(a){return a.width},
$isaE:1,
$asaE:function(){return[P.ag]},
"%":";DOMRectReadOnly"},
ki:{"^":"cb;a,b",
gn:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.d(z,b)
return H.f(z[b],"$isW")},
m:function(a,b,c){var z
H.f(c,"$isW")
z=this.b
if(b<0||b>=z.length)return H.d(z,b)
J.cA(this.a,c,z[b])},
h:function(a,b){J.dz(this.a,b)
return b},
ga0:function(a){var z=this.jx(this)
return new J.as(z,z.length,0,[H.t(z,0)])},
$asR:function(){return[W.W]},
$asq:function(){return[W.W]},
$asb:function(){return[W.W]}},
W:{"^":"K;",
gcn:function(a){return new W.ki(a,a.children)},
gdO:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.P()
if(x<0)x=-x*0
if(typeof w!=="number")return w.P()
if(w<0)w=-w*0
return new P.aE(z,y,x,w,[P.ag])},
i:function(a){return a.localName},
$isW:1,
"%":";Element"},
a6:{"^":"L;",$isa6:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
c6:{"^":"L;",
fl:function(a,b,c,d){return a.addEventListener(b,H.ba(H.k(c,{func:1,args:[W.a6]}),1),!1)},
$isc6:1,
"%":";EventTarget"},
my:{"^":"aj;0n:length=","%":"HTMLFormElement"},
hF:{"^":"L;0n:length=",
hw:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
hG:{"^":"kA;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bn(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.f(c,"$isK")
throw H.e(P.U("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isaC:1,
$asaC:function(){return[W.K]},
$asR:function(){return[W.K]},
$isq:1,
$asq:function(){return[W.K]},
$isb:1,
$asb:function(){return[W.K]},
$ishG:1,
$asaO:function(){return[W.K]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hH:{"^":"ho;","%":"HTMLDocument"},
dY:{"^":"aj;0type",
sjA:function(a,b){a.type=H.I(b)},
$isdY:1,
"%":"HTMLInputElement"},
bo:{"^":"d4;",$isbo:1,"%":"KeyboardEvent"},
hS:{"^":"aj;","%":"HTMLLabelElement"},
aq:{"^":"d4;",$isaq:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kh:{"^":"cb;a",
m:function(a,b,c){var z,y
H.f(c,"$isK")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.d(y,b)
J.cA(z,c,y[b])},
ga0:function(a){var z=this.a.childNodes
return new W.dW(z,z.length,-1,[H.c_(C.a0,z,"aO",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.d(z,b)
return z[b]},
$asR:function(){return[W.K]},
$asq:function(){return[W.K]},
$asb:function(){return[W.K]}},
K:{"^":"c6;",
jp:function(a,b){var z,y
try{z=a.parentNode
J.cA(z,b,a)}catch(y){H.ap(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eX(a):z},
W:function(a,b){return a.appendChild(b)},
hv:function(a,b,c){return a.replaceChild(b,c)},
$isK:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
is:{"^":"kG;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bn(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.f(c,"$isK")
throw H.e(P.U("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isaC:1,
$asaC:function(){return[W.K]},
$asR:function(){return[W.K]},
$isq:1,
$asq:function(){return[W.K]},
$isb:1,
$asb:function(){return[W.K]},
$asaO:function(){return[W.K]},
"%":"NodeList|RadioNodeList"},
mG:{"^":"aj;0n:length=","%":"HTMLSelectElement"},
cg:{"^":"aj;",$iscg:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
jg:{"^":"aj;",
fO:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
jh:{"^":"aj;",
dm:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
b2:{"^":"L;",$isb2:1,"%":"Touch"},
b3:{"^":"d4;",$isb3:1,"%":"TouchEvent"},
mL:{"^":"kV;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bn(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.f(c,"$isb2")
throw H.e(P.U("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isaC:1,
$asaC:function(){return[W.b2]},
$asR:function(){return[W.b2]},
$isq:1,
$asq:function(){return[W.b2]},
$isb:1,
$asb:function(){return[W.b2]},
$asaO:function(){return[W.b2]},
"%":"TouchList"},
d4:{"^":"a6;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
bB:{"^":"aq;",
giK:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.U("deltaY is not supported"))},
giJ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.U("deltaX is not supported"))},
$isbB:1,
"%":"WheelEvent"},
kb:{"^":"c6;",
hx:function(a,b){return a.requestAnimationFrame(H.ba(H.k(b,{func:1,ret:-1,args:[P.ag]}),1))},
fD:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mQ:{"^":"hp;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
q:function(a,b){var z
if(b==null)return!1
if(!H.bJ(b,"$isaE",[P.ag],"$asaE"))return!1
z=J.az(b)
return a.left===z.gaP(b)&&a.top===z.gbe(b)&&a.width===z.gbg(b)&&a.height===z.gb0(b)},
gU:function(a){return W.fb(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gb0:function(a){return a.height},
gbg:function(a){return a.width},
"%":"ClientRect|DOMRect"},
kl:{"^":"jb;a,b,c,$ti"},
mR:{"^":"kl;a,b,c,$ti"},
km:{"^":"d0;a,b,c,d,e,$ti",p:{
Y:function(a,b,c,d,e){var z,y
z=W.fz(new W.kn(c),W.a6)
y=z!=null
if(y&&!0){H.k(z,{func:1,args:[W.a6]})
if(y)J.fX(a,b,z,!1)}return new W.km(0,a,b,z,!1,[e])}}},
kn:{"^":"m:35;a",
$1:function(a){return this.a.$1(H.f(a,"$isa6"))}},
aO:{"^":"a;$ti",
ga0:function(a){return new W.dW(a,this.gn(a),-1,[H.c_(this,a,"aO",0)])}},
dW:{"^":"a;a,b,c,0d,$ti",
sdl:function(a){this.d=H.w(a,H.t(this,0))},
H:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdl(J.fW(this.a,z))
this.c=z
return!0}this.sdl(null)
this.c=y
return!1},
gR:function(){return this.d},
$isaP:1},
kj:{"^":"L+hj;"},
kz:{"^":"L+R;"},
kA:{"^":"kz+aO;"},
kF:{"^":"L+R;"},
kG:{"^":"kF+aO;"},
kU:{"^":"L+R;"},
kV:{"^":"kU+aO;"}}],["","",,P,{"^":"",
lA:function(a,b){var z={}
a.Y(0,new P.lB(z))
return z},
dT:function(){var z=$.dS
if(z==null){z=J.cB(window.navigator.userAgent,"Opera",0)
$.dS=z}return z},
hn:function(){var z,y
z=$.dP
if(z!=null)return z
y=$.dQ
if(y==null){y=J.cB(window.navigator.userAgent,"Firefox",0)
$.dQ=y}if(y)z="-moz-"
else{y=$.dR
if(y==null){y=!P.dT()&&J.cB(window.navigator.userAgent,"Trident/",0)
$.dR=y}if(y)z="-ms-"
else z=P.dT()?"-o-":"-webkit-"}$.dP=z
return z},
kN:{"^":"a;",
ec:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cT:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.N(a)
if(!!y.$isai)return new Date(a.a)
if(!!y.$isiP)throw H.e(P.cj("structured clone of RegExp"))
if(!!y.$iscW)return a
if(!!y.$isH){x=this.ec(a)
y=this.b
if(x>=y.length)return H.d(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.m(y,x,w)
a.Y(0,new P.kP(z,this))
return z.a}if(!!y.$isb){x=this.ec(a)
z=this.b
if(x>=z.length)return H.d(z,x)
w=z[x]
if(w!=null)return w
return this.iE(a,x)}throw H.e(P.cj("structured clone of other type"))},
iE:function(a,b){var z,y,x,w
z=J.bd(a)
y=z.gn(a)
x=new Array(y)
C.a.m(this.b,b,x)
for(w=0;w<y;++w)C.a.m(x,w,this.cT(z.j(a,w)))
return x}},
kP:{"^":"m:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cT(b)}},
lB:{"^":"m:6;a",
$2:function(a,b){this.a[a]=b}},
kO:{"^":"kN;a,b"},
hz:{"^":"cb;a,b",
gbl:function(){var z,y,x
z=this.b
y=H.ae(z,"R",0)
x=W.W
return new H.ic(new H.k9(z,H.k(new P.hA(),{func:1,ret:P.a5,args:[y]}),[y]),H.k(new P.hB(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.f(c,"$isW")
z=this.gbl()
J.h0(z.b.$1(J.cC(z.a,b)),c)},
h:function(a,b){J.dz(this.b.a,b)},
gn:function(a){return J.aA(this.gbl().a)},
j:function(a,b){var z=this.gbl()
return z.b.$1(J.cC(z.a,b))},
ga0:function(a){var z=P.i5(this.gbl(),!1,W.W)
return new J.as(z,z.length,0,[H.t(z,0)])},
$asR:function(){return[W.W]},
$asq:function(){return[W.W]},
$asb:function(){return[W.W]}},
hA:{"^":"m:32;",
$1:function(a){return!!J.N(H.f(a,"$isK")).$isW}},
hB:{"^":"m:25;",
$1:function(a){return H.h(H.f(a,"$isK"),"$isW")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cm:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kB:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kH:{"^":"a;$ti",
gba:function(a){var z=this.a
if(typeof z!=="number")return z.A()
return H.w(z+this.c,H.t(this,0))},
gcj:function(a){var z=this.b
if(typeof z!=="number")return z.A()
return H.w(z+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bJ(b,"$isaE",[P.ag],"$asaE"))return!1
z=this.a
y=J.az(b)
x=y.gaP(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbe(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.A()
w=H.t(this,0)
if(H.w(z+this.c,w)===y.gba(b)){if(typeof x!=="number")return x.A()
z=H.w(x+this.d,w)===y.gcj(b)}else z=!1}else z=!1}else z=!1
return z},
gU:function(a){var z,y,x,w,v
z=this.a
y=J.bK(z)
x=this.b
w=J.bK(x)
if(typeof z!=="number")return z.A()
v=H.t(this,0)
z=H.w(z+this.c,v)
if(typeof x!=="number")return x.A()
v=H.w(x+this.d,v)
return P.kB(P.cm(P.cm(P.cm(P.cm(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aE:{"^":"kH;aP:a>,be:b>,bg:c>,b0:d>,$ti"}}],["","",,P,{"^":"",mJ:{"^":"W;",
gcn:function(a){return new P.hz(a,new W.kh(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"}}],["","",,P,{"^":"",J:{"^":"a;",$isq:1,
$asq:function(){return[P.l]},
$isb:1,
$asb:function(){return[P.l]}}}],["","",,P,{"^":""}],["","",,P,{"^":"",h7:{"^":"L;",$ish7:1,"%":"WebGLBuffer"},hD:{"^":"L;",$ishD:1,"%":"WebGLFramebuffer"},iK:{"^":"L;",$isiK:1,"%":"WebGLProgram"},cX:{"^":"L;",
dL:function(a,b,c){return a.attachShader(b,c)},
ap:function(a,b,c){return a.bindBuffer(b,c)},
it:function(a,b,c){return a.bindFramebuffer(b,c)},
iu:function(a,b,c){return a.blendFunc(b,c)},
dN:function(a,b,c,d){return a.bufferData(b,c,d)},
ix:function(a,b){return a.clear(b)},
iy:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
iz:function(a,b){return a.clearDepth(b)},
iB:function(a,b){return a.compileShader(b)},
iF:function(a,b){return a.createShader(b)},
iH:function(a,b){return a.deleteProgram(b)},
iI:function(a,b){return a.deleteShader(b)},
iL:function(a,b){return a.depthFunc(b)},
iM:function(a,b){return a.disable(b)},
dP:function(a,b){return a.disableVertexAttribArray(b)},
iO:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cs:function(a,b){return a.enable(b)},
dR:function(a,b){return a.enableVertexAttribArray(b)},
eM:function(a,b,c){return a.getActiveAttrib(b,c)},
eN:function(a,b,c){return a.getActiveUniform(b,c)},
eO:function(a,b,c){return a.getAttribLocation(b,c)},
d_:function(a,b){return a.getParameter(b)},
eP:function(a,b){return a.getProgramInfoLog(b)},
bL:function(a,b,c){return a.getProgramParameter(b,c)},
eR:function(a,b){return a.getShaderInfoLog(b)},
eS:function(a,b,c){return a.getShaderParameter(b,c)},
eT:function(a,b,c){return a.getUniformLocation(b,c)},
j2:function(a,b){return a.linkProgram(b)},
eV:function(a,b,c){return a.shaderSource(b,c)},
M:function(a,b,c){return a.uniform1f(b,c)},
S:function(a,b,c){return a.uniform1i(b,c)},
v:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eF:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eG:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
eI:function(a,b){return a.useProgram(b)},
jB:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jC:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscX:1,
"%":"WebGLRenderingContext"},j0:{"^":"L;",$isj0:1,"%":"WebGLShader"},jz:{"^":"L;",$isjz:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",Q:{"^":"a;0a,0b,0c,0d,$ti",
sfS:function(a){this.a=H.j(a,"$isb",[H.ae(this,"Q",0)],"$asb")},
sdw:function(a){this.b=H.k(a,{func:1,ret:P.a5,args:[[P.q,H.ae(this,"Q",0)]]})},
sdt:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.l,[P.q,H.ae(this,"Q",0)]]})},
sdz:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.l,[P.q,H.ae(this,"Q",0)]]})},
bP:function(a){this.sfS(H.c([],[a]))
this.sdw(null)
this.sdt(null)
this.sdz(null)},
d0:function(a,b,c){var z=H.ae(this,"Q",0)
H.k(b,{func:1,ret:P.a5,args:[[P.q,z]]})
z={func:1,ret:-1,args:[P.l,[P.q,z]]}
H.k(a,z)
H.k(c,z)
this.sdw(b)
this.sdt(a)
this.sdz(c)},
bj:function(a,b){return this.d0(a,null,b)},
dv:function(a){var z
H.j(a,"$isq",[H.ae(this,"Q",0)],"$asq")
z=this.b
if(z!=null)return z.$1(a)
return!0},
ds:function(a,b){var z
H.j(b,"$isq",[H.ae(this,"Q",0)],"$asq")
z=this.c
if(z!=null)z.$2(a,b)},
gn:function(a){return this.a.length},
ga0:function(a){var z=this.a
return new J.as(z,z.length,0,[H.t(z,0)])},
a9:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ae(this,"Q",0)
H.w(b,z)
z=[z]
if(this.dv(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.ds(x,H.c([b],z))}},
m:function(a,b,c){var z,y,x,w
z=H.ae(this,"Q",0)
H.w(c,z)
y=this.a
if(b>=y.length)return H.d(y,b)
x=y[b]
if(!J.F(x,c)&&this.dv(H.c([c],[z]))){C.a.m(this.a,b,c)
y=[z]
z=H.j(H.c([x],y),"$isq",[z],"$asq")
w=this.d
if(w!=null)w.$2(b,z)
this.ds(b,H.c([c],y))}},
$isq:1,
p:{
cI:function(a){var z=new O.Q([a])
z.bP(a)
return z}}},cS:{"^":"a;0a,0b",
sbW:function(a){this.a=H.j(a,"$isb",[V.ac],"$asb")},
gn:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
f6:function(a){var z=this.b
if(!(z==null))z.G(a)},
aB:function(){return this.f6(null)},
ga_:function(){var z=this.a
if(z.length>0)return C.a.gaz(z)
else return V.a9()},
ew:function(a){var z=this.a
if(a==null)C.a.h(z,V.a9())
else C.a.h(z,a)
this.aB()},
cK:function(){var z=this.a
if(z.length>0){z.pop()
this.aB()}}}}],["","",,E,{"^":"",cE:{"^":"a;"},au:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a1:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sfu:function(a,b){this.y=H.j(b,"$isQ",[E.au],"$asQ")},
sa1:function(a){this.z=H.f(a,"$isaB")},
sd1:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gB().K(0,this.ger())
y=this.c
if(y!=null)y.gB().h(0,this.ger())
x=new D.A("shape",z,this.c,this,[F.cf])
x.b=!0
this.ai(x)}},
sb6:function(a){var z,y
if(!J.F(this.r,a)){z=this.r
if(z!=null)z.gB().K(0,this.geq())
if(a!=null)a.gB().h(0,this.geq())
this.r=a
y=new D.A("mover",z,a,this,[U.a3])
y.b=!0
this.ai(y)}},
as:function(a){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.F(y,this.x)){x=this.x
this.x=y
w=new D.A("matrix",x,y,this,[V.ac])
w.b=!0
this.ai(w)}for(z=this.y.a,z=new J.as(z,z.length,0,[H.t(z,0)]);z.H();)z.d.as(a)},
aQ:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga_())
else C.a.h(z.a,y.k(0,z.ga_()))
z.aB()
a.ex(this.f)
z=a.dy
x=(z&&C.a).gaz(z)
if(x!=null&&this.d!=null)x.jo(a,this)
for(z=this.y.a,z=new J.as(z,z.length,0,[H.t(z,0)]);z.H();)z.d.aQ(a)
a.ev()
a.dx.cK()},
gB:function(){var z=this.z
if(z==null){z=D.G()
this.z=z}return z},
ai:function(a){var z=this.z
if(!(z==null))z.G(a)},
a2:function(){return this.ai(null)},
jb:[function(a){H.f(a,"$isx")
this.e=null
this.ai(a)},function(){return this.jb(null)},"kp","$1","$0","ger",0,2,1],
ja:[function(a){this.ai(H.f(a,"$isx"))},function(){return this.ja(null)},"ko","$1","$0","geq",0,2,1],
j8:[function(a){this.ai(H.f(a,"$isx"))},function(){return this.j8(null)},"km","$1","$0","gep",0,2,1],
kl:[function(a,b){var z,y,x,w,v,u,t
H.j(b,"$isq",[E.au],"$asq")
for(z=b.length,y=this.gep(),x={func:1,ret:-1,args:[D.x]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.ga1()==null){t=new D.aB()
t.sa4(null)
t.saw(null)
t.c=null
t.d=0
u.sa1(t)}t=u.ga1()
t.toString
H.k(y,x)
if(t.a==null)t.sa4(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a2()},"$2","gj7",8,0,7],
kn:[function(a,b){var z,y,x,w,v
H.j(b,"$isq",[E.au],"$asq")
for(z=b.length,y=this.gep(),x=0;x<b.length;b.length===z||(0,H.y)(b),++x){w=b[x]
if(w!=null){if(w.ga1()==null){v=new D.aB()
v.sa4(null)
v.saw(null)
v.c=null
v.d=0
w.sa1(v)}w.ga1().K(0,y)}}this.a2()},"$2","gj9",8,0,7],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaD:1},iR:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
shM:function(a){this.dy=H.j(a,"$isb",[O.ch],"$asb")},
shH:function(a){this.fr=H.j(a,"$isH",[P.n,A.cY],"$asH")},
f2:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.ai(Date.now(),!1)
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
z.sbW(H.c([],y))
z.b=null
z.gB().h(0,new E.iT(this))
this.cy=z
z=new O.cS()
z.sbW(H.c([],y))
z.b=null
z.gB().h(0,new E.iU(this))
this.db=z
z=new O.cS()
z.sbW(H.c([],y))
z.b=null
z.gB().h(0,new E.iV(this))
this.dx=z
this.shM(H.c([],[O.ch]))
z=this.dy;(z&&C.a).h(z,null)
this.shH(new H.aQ(0,0,[P.n,A.cY]))},
gjk:function(){var z=this.z
if(z==null){z=this.cy.ga_().k(0,this.db.ga_())
this.z=z}return z},
ex:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaz(z):a;(z&&C.a).h(z,y)},
ev:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
iS:function(a,b){var z=new E.iR(a,b)
z.f2(a,b)
return z}}},iT:{"^":"m:8;a",
$1:function(a){var z
H.f(a,"$isx")
z=this.a
z.z=null
z.ch=null}},iU:{"^":"m:8;a",
$1:function(a){var z
H.f(a,"$isx")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iV:{"^":"m:8;a",
$1:function(a){var z
H.f(a,"$isx")
z=this.a
z.ch=null
z.cx=null}},et:{"^":"x;c,a,0b"},jj:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a1:x<,0y,0z,0Q,0ch,0cx,0cy",
sa1:function(a){this.x=H.f(a,"$isaB")},
f8:[function(a){H.f(a,"$isx")
this.jr()},function(){return this.f8(null)},"f7","$1","$0","gd4",0,2,1],
giW:function(){var z,y,x
z=Date.now()
y=C.h.a3(P.dV(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ai(z,!1)
return x/y},
dB:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.v(z)
x=C.j.ed(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.j.ed(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.eC(C.u,this.gjq())}},
jr:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.k(new E.jl(this),{func:1,ret:-1,args:[P.ag]})
C.H.fD(z)
C.H.hx(z,W.fz(y,P.ag))}},"$0","gjq",0,0,3],
jn:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dB()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ai(w,!1)
x.y=P.dV(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sn(w.a,0)
w.aB()
w=x.db
C.a.sn(w.a,0)
w.aB()
w=x.dx
C.a.sn(w.a,0)
w.aB()
w=x.dy;(w&&C.a).sn(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aQ(this.e)}}catch(v){z=H.ap(v)
y=H.be(v)
P.dx("Error: "+H.i(z))
P.dx("Stack: "+H.i(y))
throw H.e(z)}},
p:{
jk:function(a,b,c,d,e){var z,y,x,w
z=J.N(a)
if(!!z.$iscH)return E.eB(a,!0,!0,!0,!1)
y=W.dJ(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcn(a).h(0,y)
w=E.eB(y,!0,!0,!0,!1)
w.a=a
return w},
eB:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jj()
y=P.i0(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.n.cY(a,"webgl",y)
x=H.f(x==null?C.n.cY(a,"experimental-webgl",y):x,"$iscX")
if(x==null)H.r(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iS(x,a)
w=new T.ji(x)
w.b=H.a0((x&&C.b).d_(x,3379))
w.c=H.a0(C.b.d_(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.jM(a)
v=new X.hR()
v.c=new X.aw(!1,!1,!1)
v.shp(P.i3(null,null,null,P.l))
w.b=v
v=new X.ip(w)
v.f=0
v.r=V.aR()
v.x=V.aR()
v.Q=1
v.ch=1
w.c=v
v=new X.i7(w)
v.r=0
v.x=V.aR()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jo(w)
v.e=0
v.f=V.aR()
v.r=V.aR()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sfE(H.c([],[[P.d0,P.a]]))
v=w.z
u=document
t=W.aq
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.Y(u,"contextmenu",H.k(w.gh5(),s),!1,t))
v=w.z
r=W.a6
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Y(a,"focus",H.k(w.gh8(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Y(a,"blur",H.k(w.gh1(),q),!1,r))
v=w.z
p=W.bo
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Y(u,"keyup",H.k(w.gha(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Y(u,"keydown",H.k(w.gh9(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousedown",H.k(w.ghd(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mouseup",H.k(w.ghf(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousemove",H.k(w.ghe(),s),!1,t))
p=w.z
o=W.bB;(p&&C.a).h(p,W.Y(a,H.I(W.ht(a)),H.k(w.ghg(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Y(u,"mousemove",H.k(w.gh6(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Y(u,"mouseup",H.k(w.gh7(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Y(u,"pointerlockchange",H.k(w.ghh(),q),!1,r))
r=w.z
q=W.b3
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Y(a,"touchstart",H.k(w.ghn(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchend",H.k(w.ghl(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchmove",H.k(w.ghm(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ai(Date.now(),!1)
z.cy=0
z.dB()
return z}}},jl:{"^":"m:29;a",
$1:function(a){var z
H.md(a)
z=this.a
if(z.ch){z.ch=!1
z.jn()}}}}],["","",,Z,{"^":"",f6:{"^":"a;a,b",$isms:1,p:{
dg:function(a,b,c){var z
H.j(c,"$isb",[P.l],"$asb")
z=a.createBuffer()
C.b.ap(a,b,z)
C.b.dN(a,b,new Int16Array(H.b7(c)),35044)
C.b.ap(a,b,null)
return new Z.f6(b,z)}}},dF:{"^":"cE;a,b,c,d,e",
bp:function(a){var z,y,x
try{y=a.a
C.b.dR(y,this.e)
C.b.jB(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.ap(x)
y=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(z))
throw H.e(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},k8:{"^":"a;a",$ismt:1},dG:{"^":"a;a,0b,c,d",
sfN:function(a){this.b=H.j(a,"$isb",[Z.bP],"$asb")},
aO:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bp:function(a){var z,y
z=this.a
C.b.ap(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bp(a)},
eE:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.dP(x,z[y].e)
C.b.ap(x,this.a.a,null)},
aQ:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
w=v.c
u=w.a
C.b.ap(y,u,w.b)
C.b.iO(y,v.a,v.b,5123,0)
C.b.ap(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.n]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ab(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(y,", ")+"\nAttrs:   "+C.a.D(u,", ")},
$ismK:1},bP:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b0(this.c)+"'")+"]"}},b4:{"^":"a;a",
gd2:function(a){var z,y
z=this.a
y=(z&$.$get$aJ().a)!==0?3:0
if((z&$.$get$aI().a)!==0)y+=3
if((z&$.$get$aH().a)!==0)y+=3
if((z&$.$get$aK().a)!==0)y+=2
if((z&$.$get$aL().a)!==0)y+=3
if((z&$.$get$bz().a)!==0)y+=3
if((z&$.$get$bA().a)!==0)y+=4
if((z&$.$get$b5().a)!==0)++y
return(z&$.$get$aG().a)!==0?y+4:y},
ir:function(a){var z,y,x
z=$.$get$aJ()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bz()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b5()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f5()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b4))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.n])
y=this.a
if((y&$.$get$aJ().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aI().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aK().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aL().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bz().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bA().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b5().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.D(z,"|")},
p:{
an:function(a){return new Z.b4(a)}}}}],["","",,D,{"^":"",dK:{"^":"a;"},aB:{"^":"a;0a,0b,0c,0d",
sa4:function(a){this.a=H.j(a,"$isb",[{func:1,ret:-1,args:[D.x]}],"$asb")},
saw:function(a){this.b=H.j(a,"$isb",[{func:1,ret:-1,args:[D.x]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.x]}
H.k(b,z)
if(this.a==null)this.sa4(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[D.x]})
z=this.a
z=z==null?null:C.a.aX(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).K(z,b)||!1}else y=!1
return y},
G:function(a){var z,y,x,w
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
return!0}if(!x)C.a.Y(y,new D.hx(z))
return!0},
js:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.G(y)}}},
aj:function(){return this.js(!0,!1)},
p:{
G:function(){var z=new D.aB()
z.sa4(null)
z.saw(null)
z.c=null
z.d=0
return z}}},hx:{"^":"m:30;a",
$1:function(a){var z
H.k(a,{func:1,ret:-1,args:[D.x]})
z=this.a.a
z.b
a.$1(z)}},x:{"^":"a;a,0b"},c8:{"^":"x;c,d,a,0b,$ti"},c9:{"^":"x;c,d,a,0b,$ti"},A:{"^":"x;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",dH:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dH))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},e2:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e2))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},hR:{"^":"a;0a,0b,0c,0d",
shp:function(a){this.d=H.j(a,"$iseq",[P.l],"$aseq")},
jh:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jd:function(a){this.c=a.b
this.d.K(0,a.a)
return!1}},e5:{"^":"cd;x,y,c,d,e,a,0b"},i7:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aU:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ai(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.a7(y.a+x*w,y.b+v*u)
u=this.a.gaK()
s=new X.br(a,V.aR(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cJ:function(a,b){this.r=a.a
return!1},
b8:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eU()
if(typeof z!=="number")return z.bK()
this.r=(z&~y)>>>0
return!1},
b7:function(a,b){var z=this.d
if(z==null)return!1
z.G(this.aU(a,b))
return!0},
ji:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaK()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.cU(new V.O(v*u,t*s),y,x,new P.ai(w,!1),this)
w.b=!0
z.G(w)
return!0},
hc:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ai(Date.now(),!1)
y=this.f
x=new X.e5(c,a,this.a.gaK(),b,z,this)
x.b=!0
y.G(x)
this.y=z
this.x=V.aR()}},aw:{"^":"a;a,b,c",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aw))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},br:{"^":"cd;x,y,z,Q,ch,c,d,e,a,0b"},ip:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bU:function(a,b,c){var z,y,x
z=new P.ai(Date.now(),!1)
y=this.a.gaK()
x=new X.br(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cJ:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.G(this.bU(a,b,!0))
return!0},
b8:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eU()
if(typeof z!=="number")return z.bK()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.bU(a,b,!0))
return!0},
b7:function(a,b){var z=this.d
if(z==null)return!1
z.G(this.bU(a,b,!1))
return!0},
jj:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaK()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.cU(new V.O(w*v,u*t),y,b,new P.ai(x,!1),this)
x.b=!0
z.G(x)
return!0},
gdQ:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
gbJ:function(){var z=this.c
if(z==null){z=D.G()
this.c=z}return z},
geo:function(){var z=this.d
if(z==null){z=D.G()
this.d=z}return z}},cU:{"^":"cd;x,c,d,e,a,0b"},cd:{"^":"x;"},eF:{"^":"cd;x,y,z,Q,ch,c,d,e,a,0b"},jo:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aU:function(a,b){var z,y,x,w
H.j(a,"$isb",[V.a7],"$asb")
z=new P.ai(Date.now(),!1)
y=a.length>0?a[0]:V.aR()
x=this.a.gaK()
w=new X.eF(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
jg:function(a){var z
H.j(a,"$isb",[V.a7],"$asb")
z=this.b
if(z==null)return!1
z.G(this.aU(a,!0))
return!0},
je:function(a){var z
H.j(a,"$isb",[V.a7],"$asb")
z=this.c
if(z==null)return!1
z.G(this.aU(a,!0))
return!0},
jf:function(a){var z
H.j(a,"$isb",[V.a7],"$asb")
z=this.d
if(z==null)return!1
z.G(this.aU(a,!1))
return!0}},jM:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sfE:function(a){this.z=H.j(a,"$isb",[[P.d0,P.a]],"$asb")},
gaK:function(){var z=this.a
return V.en(0,0,C.n.gdO(z).c,C.n.gdO(z).d)},
dg:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.e2(z,new X.aw(y,a.altKey,a.shiftKey))},
aH:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aw(y,a.altKey,a.shiftKey)},
c9:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aw(y,a.altKey,a.shiftKey)},
ax:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=z.top
if(typeof x!=="number")return x.I()
return new V.a7(y-w,x-v)},
aV:function(a){return new V.O(a.movementX,a.movementY)},
c3:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.a7])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
t=C.j.ak(u.pageX)
C.j.ak(u.pageY)
s=z.left
C.j.ak(u.pageX)
C.a.h(y,new V.a7(t-s,C.j.ak(u.pageY)-z.top))}return y},
at:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dH(z,new X.aw(y,a.altKey,a.shiftKey))},
bX:function(a){var z,y,x,w,v,u
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
jV:[function(a){this.f=!0},"$1","gh8",4,0,11],
jO:[function(a){this.f=!1},"$1","gh1",4,0,11],
jS:[function(a){H.f(a,"$isaq")
if(this.f&&this.bX(a))a.preventDefault()},"$1","gh5",4,0,4],
jX:[function(a){var z
H.f(a,"$isbo")
if(!this.f)return
z=this.dg(a)
this.b.jh(z)},"$1","gha",4,0,17],
jW:[function(a){var z
H.f(a,"$isbo")
if(!this.f)return
z=this.dg(a)
this.b.jd(z)},"$1","gh9",4,0,17],
jZ:[function(a){var z,y,x,w
H.f(a,"$isaq")
z=this.a
z.focus()
this.f=!0
this.aH(a)
if(this.x){y=this.at(a)
x=this.aV(a)
if(this.d.cJ(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.at(a)
w=this.ax(a)
if(this.c.cJ(y,w))a.preventDefault()},"$1","ghd",4,0,4],
k0:[function(a){var z,y,x
H.f(a,"$isaq")
this.aH(a)
z=this.at(a)
if(this.x){y=this.aV(a)
if(this.d.b8(z,y))a.preventDefault()
return}if(this.r)return
x=this.ax(a)
if(this.c.b8(z,x))a.preventDefault()},"$1","ghf",4,0,4],
jU:[function(a){var z,y,x
H.f(a,"$isaq")
if(!this.bX(a)){this.aH(a)
z=this.at(a)
if(this.x){y=this.aV(a)
if(this.d.b8(z,y))a.preventDefault()
return}if(this.r)return
x=this.ax(a)
if(this.c.b8(z,x))a.preventDefault()}},"$1","gh7",4,0,4],
k_:[function(a){var z,y,x
H.f(a,"$isaq")
this.aH(a)
z=this.at(a)
if(this.x){y=this.aV(a)
if(this.d.b7(z,y))a.preventDefault()
return}if(this.r)return
x=this.ax(a)
if(this.c.b7(z,x))a.preventDefault()},"$1","ghe",4,0,4],
jT:[function(a){var z,y,x
H.f(a,"$isaq")
if(!this.bX(a)){this.aH(a)
z=this.at(a)
if(this.x){y=this.aV(a)
if(this.d.b7(z,y))a.preventDefault()
return}if(this.r)return
x=this.ax(a)
if(this.c.b7(z,x))a.preventDefault()}},"$1","gh6",4,0,4],
k5:[function(a){var z,y
H.f(a,"$isbB")
this.aH(a)
z=new V.O((a&&C.G).giJ(a),C.G.giK(a)).u(0,180)
if(this.x){if(this.d.ji(z))a.preventDefault()
return}if(this.r)return
y=this.ax(a)
if(this.c.jj(z,y))a.preventDefault()},"$1","ghg",4,0,34],
k6:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.at(this.y)
x=this.ax(this.y)
this.d.hc(y,x,z)}},"$1","ghh",4,0,11],
kc:[function(a){var z
H.f(a,"$isb3")
this.a.focus()
this.f=!0
this.c9(a)
z=this.c3(a)
if(this.e.jg(z))a.preventDefault()},"$1","ghn",4,0,12],
ka:[function(a){var z
H.f(a,"$isb3")
this.c9(a)
z=this.c3(a)
if(this.e.je(z))a.preventDefault()},"$1","ghl",4,0,12],
kb:[function(a){var z
H.f(a,"$isb3")
this.c9(a)
z=this.c3(a)
if(this.e.jf(z))a.preventDefault()},"$1","ghm",4,0,12]}}],["","",,D,{"^":"",bO:{"^":"a;0a,0b,0c,0d",
gB:function(){var z=this.d
if(z==null){z=D.G()
this.d=z}return z},
aC:[function(a){var z
H.f(a,"$isx")
z=this.d
if(!(z==null))z.G(a)},function(){return this.aC(null)},"jE","$1","$0","gf9",0,2,1],
$isX:1,
$isaD:1},X:{"^":"a;",$isaD:1},hT:{"^":"Q;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sfC:function(a){this.e=H.j(a,"$isb",[D.bO],"$asb")},
sho:function(a){this.f=H.j(a,"$isb",[D.eh],"$asb")},
shJ:function(a){this.r=H.j(a,"$isb",[D.er],"$asb")},
shS:function(a){this.x=H.j(a,"$isb",[D.ey],"$asb")},
shT:function(a){this.y=H.j(a,"$isb",[D.ez],"$asb")},
shU:function(a){this.z=H.j(a,"$isb",[D.eA],"$asb")},
gB:function(){var z=this.Q
if(z==null){z=D.G()
this.Q=z}return z},
aC:function(a){var z=this.Q
if(!(z==null))z.G(a)},
hb:[function(a){var z
H.f(a,"$isx")
z=this.ch
if(!(z==null))z.G(a)},function(){return this.hb(null)},"jY","$1","$0","gdu",0,2,1],
k7:[function(a){var z,y,x
H.j(a,"$isq",[D.X],"$asq")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.y)(a),++y){x=a[y]
if(x==null||this.fw(x))return!1}return!0},"$1","ghi",4,0,36],
jL:[function(a,b){var z,y,x,w,v,u,t,s
z=D.X
H.j(b,"$isq",[z],"$asq")
for(y=b.length,x=this.gdu(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.f(b[u],"$isX")
if(t instanceof D.bO)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aB()
s.sa4(null)
s.saw(null)
s.c=null
s.d=0
t.d=s}H.k(x,w)
if(s.a==null)s.sa4(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.c8(a,b,this,[z])
z.b=!0
this.aC(z)},"$2","gfZ",8,0,22],
k9:[function(a,b){var z,y,x,w,v,u
z=D.X
H.j(b,"$isq",[z],"$asq")
for(y=b.length,x=this.gdu(),w=0;w<b.length;b.length===y||(0,H.y)(b),++w){v=H.f(b[w],"$isX")
if(v instanceof D.bO)C.a.K(this.e,v)
u=v.d
if(u==null){u=new D.aB()
u.sa4(null)
u.saw(null)
u.c=null
u.d=0
v.d=u}u.K(0,x)}z=new D.c9(a,b,this,[z])
z.b=!0
this.aC(z)},"$2","ghk",8,0,22],
fw:function(a){var z=C.a.aX(this.e,a)
return z},
$asq:function(){return[D.X]},
$asQ:function(){return[D.X]}},eh:{"^":"a;",$isX:1,$isaD:1},er:{"^":"a;",$isX:1,$isaD:1},ey:{"^":"a;",$isX:1,$isaD:1},ez:{"^":"a;",$isX:1,$isaD:1},eA:{"^":"a;",$isX:1,$isaD:1}}],["","",,V,{"^":"",
mv:[function(a,b){if(typeof b!=="number")return b.I()
if(typeof a!=="number")return H.v(a)
return Math.abs(b-a)<=1e-9},"$2","io",8,0,33],
cz:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.bi(a-b,z)
return(a<0?a+z:a)+b},
C:function(a,b,c){if(a==null)return C.c.ab("null",c)
return C.c.ab(C.j.eD($.o.$2(a,0)?0:a,b),c+b+1)},
bc:function(a,b,c){var z,y,x,w,v,u
H.j(a,"$isb",[P.p],"$asb")
z=H.c([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.y)(a),++w){v=V.C(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.m(z,u,C.c.ab(z[u],x))}return z},
a1:{"^":"a;a,b,c",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}},
bi:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bi))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+", "+V.C(this.d,3,0)+"]"}},
e7:{"^":"a;a,b,c,d,e,f,r,x,y",
ac:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.p])
return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e7))return!1
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
z=[P.p]
y=V.bc(H.c([this.a,this.d,this.r],z),3,0)
x=V.bc(H.c([this.b,this.e,this.x],z),3,0)
w=V.bc(H.c([this.c,this.f,this.y],z),3,0)
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
ac:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.p])
return z},
em:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.o.$2(a2,0))return V.a9()
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
cS:function(a){var z,y,x,w,v,u
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
return new V.B(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,w*z+v*y+u*x)},
bf:function(a){var z,y,x,w,v,u
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
return new V.S(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,w*z+v*y+u*x+this.ch)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
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
i:function(a){return this.L()},
ee:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.p]
y=V.bc(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bc(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bc(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bc(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
L:function(){return this.ee("",3,0)},
C:function(a){return this.ee(a,3,0)},
p:{
a9:function(){var z=$.eb
if(z==null){z=V.av(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eb=z}return z},
av:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ac(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cc:function(a,b,c){return V.av(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
cT:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.av(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
e9:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.av(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
ea:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.av(z,-y,0,0,y,z,0,0,0,0,1,0,0,0,0,1)},
e8:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.u(0,Math.sqrt(c.E(c)))
y=b.ay(z)
x=y.u(0,Math.sqrt(y.E(y)))
w=z.ay(x)
v=new V.B(a.a,a.b,a.c)
u=x.O(0).E(v)
t=w.O(0).E(v)
s=z.O(0).E(v)
return V.av(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
a7:{"^":"a;a,b",
I:function(a,b){return new V.a7(this.a-b.a,this.b-b.b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"},
p:{
aR:function(){var z=$.ei
if(z==null){z=new V.a7(0,0)
$.ei=z}return z}}},
S:{"^":"a;a,b,c",
A:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.A()
if(typeof w!=="number")return H.v(w)
return new V.S(this.a+z,this.b+y,x+w)},
I:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.I()
if(typeof w!=="number")return H.v(w)
return new V.S(this.a-z,this.b-y,x-w)},
k:function(a,b){var z=this.c
if(typeof z!=="number")return z.k()
return new V.S(this.a*b,this.b*b,z*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"},
p:{
ej:function(){var z=$.bu
if(z==null){z=new V.S(0,0,0)
$.bu=z}return z}}},
bv:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bv))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+", "+V.C(this.d,3,0)+"]"}},
em:{"^":"a;a,b,c,d",
ga5:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.em))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+", "+V.C(this.d,3,0)+"]"},
p:{
en:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.em(a,b,c,d)}}},
O:{"^":"a;a,b",
j1:[function(a){return Math.sqrt(this.E(this))},"$0","gn",1,0,24],
E:function(a){var z,y,x,w
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
return new V.O(z*b,y*b)},
u:function(a,b){var z,y
if($.o.$2(b,0)){z=$.eX
if(z==null){z=new V.O(0,0)
$.eX=z}return z}z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.O(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}},
B:{"^":"a;a,b,c",
j1:[function(a){return Math.sqrt(this.E(this))},"$0","gn",1,0,24],
E:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.v(y)
return this.a*a.a+this.b*a.b+z*y},
cF:function(a,b){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=a.c
if(typeof w!=="number")return w.I()
if(typeof x!=="number")return H.v(x)
return new V.B(z+b*(a.a-z),y+b*(a.b-y),x+b*(w-x))},
ay:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.v(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.k()
v=a.a
u=this.a
return new V.B(z*y-x*w,x*v-u*y,u*w-z*v)},
A:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.A()
if(typeof w!=="number")return H.v(w)
return new V.B(this.a+z,this.b+y,x+w)},
O:function(a){var z=this.c
if(typeof z!=="number")return z.O()
return new V.B(-this.a,-this.b,-z)},
k:function(a,b){var z=this.c
if(typeof z!=="number")return z.k()
return new V.B(this.a*b,this.b*b,z*b)},
u:function(a,b){var z
if($.o.$2(b,0))return V.by()
z=this.c
if(typeof z!=="number")return z.u()
return new V.B(this.a/b,this.b/b,z/b)},
en:function(){if(!$.o.$2(0,this.a))return!1
if(!$.o.$2(0,this.b))return!1
if(!$.o.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.B))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"},
p:{
by:function(){var z=$.f0
if(z==null){z=new V.B(0,0,0)
$.f0=z}return z},
f1:function(){var z=$.f_
if(z==null){z=new V.B(0,1,0)
$.f_=z}return z},
f2:function(){var z=$.ck
if(z==null){z=new V.B(0,0,1)
$.ck=z}return z}}}}],["","",,U,{"^":"",he:{"^":"dK;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bQ:function(a){var z=V.cz(a,this.c,this.b)
return z},
gB:function(){var z=this.y
if(z==null){z=D.G()
this.y=z}return z},
J:function(a){var z=this.y
if(!(z==null))z.G(a)},
scU:function(a,b){},
scG:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bQ(z)}z=new D.A("maximumLocation",y,this.b,this,[P.p])
z.b=!0
this.J(z)}},
scI:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bQ(z)}z=new D.A("minimumLocation",y,this.c,this,[P.p])
z.b=!0
this.J(z)}},
sZ:function(a,b){var z,y
b=this.bQ(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.A("location",y,b,this,[P.p])
z.b=!0
this.J(z)}},
scH:function(a){var z,y,x
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.A("maximumVelocity",y,a,this,[P.p])
z.b=!0
this.J(z)}},
sT:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.o.$2(z,a)){x=this.f
this.f=a
z=new D.A("velocity",x,a,this,[P.p])
z.b=!0
this.J(z)}},
scq:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.A("dampening",y,a,this,[P.p])
z.b=!0
this.J(z)}},
as:function(a){var z,y,x,w
z=this.f
if($.o.$2(z,0)){z=this.r
z=!$.o.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sZ(0,this.d+y*a)
z=this.x
if(!$.o.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sT(y)}},
p:{
cJ:function(){var z=new U.he()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dM:{"^":"a3;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
al:function(a,b){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dM))return!1
return J.F(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")},
p:{
aX:function(a){var z=new U.dM()
if(a==null)a=V.a9()
if(null!=a)z.a=a
return z}}},dX:{"^":"Q;0e,0f,0r,0a,0b,0c,0d",
gB:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
J:[function(a){var z
H.f(a,"$isx")
z=this.e
if(!(z==null))z.G(a)},function(){return this.J(null)},"ad","$1","$0","gaD",0,2,1],
jF:[function(a,b){var z,y,x,w,v,u,t,s
z=U.a3
H.j(b,"$isq",[z],"$asq")
for(y=b.length,x=this.gaD(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){s=t.gB()
s.toString
H.k(x,w)
if(s.a==null)s.sa4(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c8(a,b,this,[z])
z.b=!0
this.J(z)},"$2","gfa",8,0,20],
k8:[function(a,b){var z,y,x,w,v
z=U.a3
H.j(b,"$isq",[z],"$asq")
for(y=b.length,x=this.gaD(),w=0;w<b.length;b.length===y||(0,H.y)(b),++w){v=b[w]
if(v!=null)v.gB().K(0,x)}z=new D.c9(a,b,this,[z])
z.b=!0
this.J(z)},"$2","ghj",8,0,20],
al:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.P()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.as(z,z.length,0,[H.t(z,0)]),x=null;z.H();){y=z.d
if(y!=null){w=y.al(a,b)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.a9():x
z=this.e
if(!(z==null))z.aj()}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dX))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.F(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asq:function(){return[U.a3]},
$asQ:function(){return[U.a3]},
$isa3:1,
p:{
cL:function(a){var z=new U.dX()
z.bP(U.a3)
z.bj(z.gfa(),z.ghj())
z.e=null
z.f=V.a9()
z.r=0
return z}}},a3:{"^":"dK;"},ep:{"^":"a3;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.G()
this.y=z}return z},
J:function(a){var z=this.y
if(!(z==null))z.G(a)},
seK:function(a){var z,y
a=V.cz(a,0,6.283185307179586)
z=this.a
if(!$.o.$2(z,a)){y=this.a
this.a=a
z=new D.A("yaw",y,a,this,[P.p])
z.b=!0
this.J(z)}},
seu:function(a){var z,y
a=V.cz(a,0,6.283185307179586)
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
z=new D.A("pitch",y,a,this,[P.p])
z.b=!0
this.J(z)}},
sez:function(a){var z,y
a=V.cz(a,0,6.283185307179586)
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
z=new D.A("roll",y,a,this,[P.p])
z.b=!0
this.J(z)}},
al:function(a,b){var z,y
z=this.r
y=a.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.seK(this.a+this.d*a.y)
this.seu(this.b+this.e*a.y)
this.sez(this.c+this.f*a.y)
this.x=V.ea(this.c).k(0,V.e9(this.b)).k(0,V.cT(this.a))
z=this.y
if(!(z==null))z.aj()}return this.x},
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ep))return!1
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
i:function(a){return"Rotater: ["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"], ["+V.C(this.d,3,0)+", "+V.C(this.e,3,0)+", "+V.C(this.f,3,0)+"]"},
p:{
bx:function(a,b,c,d,e,f){var z,y,x
z=new U.ep()
z.a=0
z.b=0
z.c=0
z.d=0
z.e=0
z.f=0
z.r=0
z.seK(f)
z.seu(d)
z.sez(e)
y=z.d
if(!$.o.$2(y,c)){x=z.d
z.d=c
y=new D.A("deltaYaw",x,c,z,[P.p])
y.b=!0
z.J(y)}y=z.e
if(!$.o.$2(y,a)){x=z.e
z.e=a
y=new D.A("deltaPitch",x,a,z,[P.p])
y.b=!0
z.J(y)}y=z.f
if(!$.o.$2(y,b)){x=z.f
z.f=b
y=new D.A("deltaRoll",x,b,z,[P.p])
y.b=!0
z.J(y)}return z}}},jN:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gB:function(){var z=this.cy
if(z==null){z=D.G()
this.cy=z}return z},
J:[function(a){var z
H.f(a,"$isx")
z=this.cy
if(!(z==null))z.G(a)},function(){return this.J(null)},"ad","$1","$0","gaD",0,2,1],
aW:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdQ().h(0,this.gbY())
this.a.c.geo().h(0,this.gbZ())
this.a.c.gbJ().h(0,this.gc_())
return!0},
fV:[function(a){H.f(a,"$isx")
if(!J.F(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbY",4,0,2],
fW:[function(a){var z,y,x,w,v,u,t
a=H.h(H.f(a,"$isx"),"$isbr")
if(!this.y)return
if(this.x){z=a.d.I(0,a.y)
z=new V.O(z.a,z.b)
z=z.E(z)
y=this.r
if(typeof y!=="number")return H.v(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.I(0,a.y)
z=new V.O(y.a,y.b).k(0,2).u(0,z.ga5())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.v(x)
y.sT(z*10*x)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=new V.O(x.a,x.b).k(0,2).u(0,z.ga5())
x=this.b
v=w.a
if(typeof v!=="number")return v.O()
u=this.e
if(typeof u!=="number")return H.v(u)
t=this.z
if(typeof t!=="number")return H.v(t)
x.sZ(0,-v*u+t)
this.b.sT(0)
y=y.I(0,a.z)
this.Q=new V.O(y.a,y.b).k(0,2).u(0,z.ga5())}this.ad()},"$1","gbZ",4,0,2],
fX:[function(a){var z,y,x
H.f(a,"$isx")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.E(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.v(x)
z.sT(y*10*x)
this.ad()}},"$1","gc_",4,0,2],
al:function(a,b){var z,y,x
z=this.ch
y=a.e
if(typeof z!=="number")return z.P()
if(z<y){this.ch=y
x=a.y
this.b.as(x)
this.cx=V.ea(this.b.d)}return this.cx},
$isa3:1},jO:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gB:function(){var z=this.fx
if(z==null){z=D.G()
this.fx=z}return z},
J:[function(a){var z
H.f(a,"$isx")
z=this.fx
if(!(z==null))z.G(a)},function(){return this.J(null)},"ad","$1","$0","gaD",0,2,1],
aW:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdQ().h(0,this.gbY())
this.a.c.geo().h(0,this.gbZ())
this.a.c.gbJ().h(0,this.gc_())
z=this.a.d
y=z.f
if(y==null){y=D.G()
z.f=y
z=y}else z=y
z.h(0,this.gfT())
z=this.a.d
y=z.d
if(y==null){y=D.G()
z.d=y
z=y}else z=y
z.h(0,this.gfU())
z=this.a.e
y=z.b
if(y==null){y=D.G()
z.b=y
z=y}else z=y
z.h(0,this.ghQ())
z=this.a.e
y=z.d
if(y==null){y=D.G()
z.d=y
z=y}else z=y
z.h(0,this.ghP())
z=this.a.e
y=z.c
if(y==null){y=D.G()
z.c=y
z=y}else z=y
z.h(0,this.ghO())
return!0},
ao:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.O()
z=-z}if(this.r){if(typeof y!=="number")return y.O()
y=-y}return new V.O(z,y)},
fV:[function(a){a=H.h(H.f(a,"$isx"),"$isbr")
if(!J.F(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbY",4,0,2],
fW:[function(a){var z,y,x,w,v,u,t
a=H.h(H.f(a,"$isx"),"$isbr")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.O(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.v(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ao(new V.O(y.a,y.b).k(0,2).u(0,z.ga5()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.v(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.v(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ao(new V.O(x.a,x.b).k(0,2).u(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.v(u)
t=this.cy
if(typeof t!=="number")return H.v(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.v(v)
x=this.db
if(typeof x!=="number")return H.v(x)
t.sZ(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.I(0,a.z)
this.dx=this.ao(new V.O(y.a,y.b).k(0,2).u(0,z.ga5()))}this.ad()},"$1","gbZ",4,0,2],
fX:[function(a){var z,y,x
H.f(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.v(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.v(z)
x.sT(-y*10*z)
this.ad()}},"$1","gc_",4,0,2],
jI:[function(a){if(H.h(H.f(a,"$isx"),"$ise5").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfT",4,0,2],
jJ:[function(a){var z,y,x,w,v,u,t
a=H.h(H.f(a,"$isx"),"$isbr")
if(!J.F(this.d,a.x.b))return
z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ao(new V.O(x.a,x.b).k(0,2).u(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.v(u)
t=this.cy
if(typeof t!=="number")return H.v(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.v(v)
x=this.db
if(typeof x!=="number")return H.v(x)
t.sZ(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.I(0,a.z)
this.dx=this.ao(new V.O(y.a,y.b).k(0,2).u(0,z.ga5()))
this.ad()},"$1","gfU",4,0,2],
kg:[function(a){H.f(a,"$isx")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghQ",4,0,2],
kf:[function(a){var z,y,x,w,v,u,t
a=H.h(H.f(a,"$isx"),"$iseF")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.O(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.v(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ao(new V.O(y.a,y.b).k(0,2).u(0,z.ga5()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.v(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.v(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ao(new V.O(x.a,x.b).k(0,2).u(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.v(u)
t=this.cy
if(typeof t!=="number")return H.v(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.v(v)
x=this.db
if(typeof x!=="number")return H.v(x)
t.sZ(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.I(0,a.z)
this.dx=this.ao(new V.O(y.a,y.b).k(0,2).u(0,z.ga5()))}this.ad()},"$1","ghP",4,0,2],
ke:[function(a){var z,y,x
H.f(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.v(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.v(z)
x.sT(-y*10*z)
this.ad()}},"$1","ghO",4,0,2],
al:function(a,b){var z,y,x
z=this.dy
y=a.e
if(typeof z!=="number")return z.P()
if(z<y){this.dy=y
x=a.y
this.c.as(x)
this.b.as(x)
this.fr=V.cT(this.b.d).k(0,V.e9(this.c.d))}return this.fr},
$isa3:1},jP:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gB:function(){var z=this.r
if(z==null){z=D.G()
this.r=z}return z},
J:function(a){var z=this.r
if(!(z==null))z.G(a)},
aW:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.G()
z.e=y
z=y}else z=y
y=this.gfY()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.G()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
jK:[function(a){var z,y,x,w
H.f(a,"$isx")
if(!J.F(this.b,this.a.b.c))return
H.h(a,"$iscU")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.A("zoom",z,w,this,[P.p])
z.b=!0
this.J(z)}},"$1","gfY",4,0,2],
al:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.av(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa3:1}}],["","",,M,{"^":"",hv:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sfb:function(a,b){this.d=H.j(b,"$isQ",[E.au],"$asQ")},
aE:[function(a){var z
H.f(a,"$isx")
z=this.x
if(!(z==null))z.G(a)},function(){return this.aE(null)},"jG","$1","$0","gan",0,2,1],
jQ:[function(a,b){var z,y,x,w,v,u,t,s
z=E.au
H.j(b,"$isq",[z],"$asq")
for(y=b.length,x=this.gan(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.ga1()==null){s=new D.aB()
s.sa4(null)
s.saw(null)
s.c=null
s.d=0
t.sa1(s)}s=t.ga1()
s.toString
H.k(x,w)
if(s.a==null)s.sa4(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c8(a,b,this,[z])
z.b=!0
this.aE(z)},"$2","gh3",8,0,7],
jR:[function(a,b){var z,y,x,w,v,u
z=E.au
H.j(b,"$isq",[z],"$asq")
for(y=b.length,x=this.gan(),w=0;w<b.length;b.length===y||(0,H.y)(b),++w){v=b[w]
if(v!=null){if(v.ga1()==null){u=new D.aB()
u.sa4(null)
u.saw(null)
u.c=null
u.d=0
v.sa1(u)}v.ga1().K(0,x)}}z=new D.c9(a,b,this,[z])
z.b=!0
this.aE(z)},"$2","gh4",8,0,7],
seB:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gB().K(0,this.gan())
y=this.c
this.c=a
if(a!=null)a.gB().h(0,this.gan())
z=new D.A("technique",y,this.c,this,[O.ch])
z.b=!0
this.aE(z)}},
gB:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
aQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=new E.et(a,this)
z.b=!0
y=this.e
if(!(y==null))y.G(z)
a.ex(this.c)
y=this.b
y.toString
x=a.a
C.b.it(x,36160,null)
C.b.cs(x,2884)
C.b.cs(x,2929)
C.b.iL(x,513)
w=x.drawingBufferWidth
v=x.drawingBufferHeight
u=y.r
t=u.a
if(typeof w!=="number")return H.v(w)
s=C.j.ak(t*w)
t=u.b
if(typeof v!=="number")return H.v(v)
r=C.j.ak(t*v)
t=C.j.ak(u.c*w)
a.c=t
u=C.j.ak(u.d*v)
a.d=u
C.b.jC(x,s,r,t,u)
C.b.iz(x,y.c)
y=y.a
C.b.iy(x,y.a,y.b,y.c,y.d)
C.b.ix(x,16640)
y=this.a
x=a.c
u=a.d
t=y.c
q=y.d
p=y.e
o=p-q
n=1/Math.tan(t*0.5)
m=V.av(-n/(x/u),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
y.a
a.cy.ew(m)
x=$.eg
if(x==null){x=V.ej()
u=V.f1()
t=$.eY
if(t==null){t=new V.B(0,0,-1)
$.eY=t}t=V.e8(x,u,t)
$.eg=t
l=t}else l=x
x=y.b
if(x!=null){k=x.al(a,y)
if(k!=null)l=k.k(0,l)}a.db.ew(l)
y=this.c
if(y!=null)y.as(a)
for(y=this.d.a,y=new J.as(y,y.length,0,[H.t(y,0)]);y.H();)y.d.as(a)
for(y=this.d.a,y=new J.as(y,y.length,0,[H.t(y,0)]);y.H();)y.d.aQ(a)
this.a.toString
a.cy.cK()
a.db.cK()
this.b.toString
a.ev()},
$ismF:1}}],["","",,A,{"^":"",dB:{"^":"a;a,b,c"},h3:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
iP:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
C.b.dR(w.a,w.c)}},
iN:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
C.b.dP(w.a,w.c)}}},ih:{"^":"cY;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ar,0ah,0bs,0dS,0bt,0bu,0dT,0dU,0bv,0bw,0dV,0dW,0bx,0by,0dX,0dY,0bz,0dZ,0e_,0bA,0e0,0e1,0bB,0bC,0bD,0e2,0e3,0bE,0bF,0e4,0e5,0bG,0e6,0ct,0e7,0cu,0e8,0cv,0e9,0cw,0ea,0cz,0eb,0cA,a,b,0c,0d,0e,0f,0r,0x,0y",
sfo:function(a){this.r1=H.j(a,"$isb",[A.ay],"$asb")},
sfc:function(a){this.ct=H.j(a,"$isb",[A.d6],"$asb")},
sfd:function(a){this.cu=H.j(a,"$isb",[A.d8],"$asb")},
sfe:function(a){this.cv=H.j(a,"$isb",[A.d9],"$asb")},
sff:function(a){this.cw=H.j(a,"$isb",[A.da],"$asb")},
sfg:function(a){this.cz=H.j(a,"$isb",[A.db],"$asb")},
sfh:function(a){this.cA=H.j(a,"$isb",[A.dc],"$asb")},
f1:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.ak("")
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
a2.hY(z)
a2.i4(z)
a2.hZ(z)
a2.ic(z)
a2.ie(z)
a2.i6(z)
a2.ij(z)
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
z=new P.ak("")
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
x.i1(z)
x.hX(z)
x.i_(z)
x.i2(z)
x.ia(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.i8(z)
x.i9(z)}x.i5(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
if(q!==C.d){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.e){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.f){r+="uniform samplerCube alphaTxt;\n"
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
case C.e:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.f:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
x.i0(z)
x.i7(z)
x.ib(z)
x.ig(z)
x.ih(z)
x.ii(z)
x.i3(z)}r=z.a+="// === Main ===\n"
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
this.e=this.dh(s,35633)
this.f=this.dh(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
C.b.dL(x,v,this.e)
C.b.dL(x,this.r,this.f)
C.b.j2(x,this.r)
if(!H.fD(C.b.bL(x,this.r,35714))){m=C.b.eP(x,this.r)
C.b.iH(x,this.r)
H.r(P.u("Failed to link shader: "+H.i(m)))}this.hE()
this.hG()
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
this.sfo(H.c([],[A.ay]))
y=a2.ar
if(y>0){this.k4=H.f(this.y.l(0,"bendMatCount"),"$isE")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.r(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.h(k,"$isay"))}}y=a2.a
if(y!==C.d){this.r2=H.h(this.y.l(0,"emissionClr"),"$isD")
switch(y){case C.d:break
case C.i:break
case C.e:this.rx=H.h(this.y.l(0,"emissionTxt"),"$isal")
this.x1=H.h(this.y.l(0,"nullEmissionTxt"),"$isE")
break
case C.f:this.ry=H.h(this.y.l(0,"emissionTxt"),"$isam")
this.x1=H.h(this.y.l(0,"nullEmissionTxt"),"$isE")
break}}y=a2.b
if(y!==C.d){this.x2=H.h(this.y.l(0,"ambientClr"),"$isD")
switch(y){case C.d:break
case C.i:break
case C.e:this.y1=H.h(this.y.l(0,"ambientTxt"),"$isal")
this.ar=H.h(this.y.l(0,"nullAmbientTxt"),"$isE")
break
case C.f:this.y2=H.h(this.y.l(0,"ambientTxt"),"$isam")
this.ar=H.h(this.y.l(0,"nullAmbientTxt"),"$isE")
break}}y=a2.c
if(y!==C.d){this.ah=H.h(this.y.l(0,"diffuseClr"),"$isD")
switch(y){case C.d:break
case C.i:break
case C.e:this.bs=H.h(this.y.l(0,"diffuseTxt"),"$isal")
this.bt=H.h(this.y.l(0,"nullDiffuseTxt"),"$isE")
break
case C.f:this.dS=H.h(this.y.l(0,"diffuseTxt"),"$isam")
this.bt=H.h(this.y.l(0,"nullDiffuseTxt"),"$isE")
break}}y=a2.d
if(y!==C.d){this.bu=H.h(this.y.l(0,"invDiffuseClr"),"$isD")
switch(y){case C.d:break
case C.i:break
case C.e:this.dT=H.h(this.y.l(0,"invDiffuseTxt"),"$isal")
this.bv=H.h(this.y.l(0,"nullInvDiffuseTxt"),"$isE")
break
case C.f:this.dU=H.h(this.y.l(0,"invDiffuseTxt"),"$isam")
this.bv=H.h(this.y.l(0,"nullInvDiffuseTxt"),"$isE")
break}}y=a2.e
if(y!==C.d){this.by=H.h(this.y.l(0,"shininess"),"$isT")
this.bw=H.h(this.y.l(0,"specularClr"),"$isD")
switch(y){case C.d:break
case C.i:break
case C.e:this.dV=H.h(this.y.l(0,"specularTxt"),"$isal")
this.bx=H.h(this.y.l(0,"nullSpecularTxt"),"$isE")
break
case C.f:this.dW=H.h(this.y.l(0,"specularTxt"),"$isam")
this.bx=H.h(this.y.l(0,"nullSpecularTxt"),"$isE")
break}}switch(a2.f){case C.d:break
case C.i:break
case C.e:this.dX=H.h(this.y.l(0,"bumpTxt"),"$isal")
this.bz=H.h(this.y.l(0,"nullBumpTxt"),"$isE")
break
case C.f:this.dY=H.h(this.y.l(0,"bumpTxt"),"$isam")
this.bz=H.h(this.y.l(0,"nullBumpTxt"),"$isE")
break}if(a2.dy){this.dZ=H.h(this.y.l(0,"envSampler"),"$isam")
this.e_=H.h(this.y.l(0,"nullEnvTxt"),"$isE")
y=a2.r
if(y!==C.d){this.bA=H.h(this.y.l(0,"reflectClr"),"$isD")
switch(y){case C.d:break
case C.i:break
case C.e:this.e0=H.h(this.y.l(0,"reflectTxt"),"$isal")
this.bB=H.h(this.y.l(0,"nullReflectTxt"),"$isE")
break
case C.f:this.e1=H.h(this.y.l(0,"reflectTxt"),"$isam")
this.bB=H.h(this.y.l(0,"nullReflectTxt"),"$isE")
break}}y=a2.x
if(y!==C.d){this.bC=H.h(this.y.l(0,"refraction"),"$isT")
this.bD=H.h(this.y.l(0,"refractClr"),"$isD")
switch(y){case C.d:break
case C.i:break
case C.e:this.e2=H.h(this.y.l(0,"refractTxt"),"$isal")
this.bE=H.h(this.y.l(0,"nullRefractTxt"),"$isE")
break
case C.f:this.e3=H.h(this.y.l(0,"refractTxt"),"$isam")
this.bE=H.h(this.y.l(0,"nullRefractTxt"),"$isE")
break}}}y=a2.y
if(y!==C.d){this.bF=H.h(this.y.l(0,"alpha"),"$isT")
switch(y){case C.d:break
case C.i:break
case C.e:this.e4=H.h(this.y.l(0,"alphaTxt"),"$isal")
this.bG=H.h(this.y.l(0,"nullAlphaTxt"),"$isE")
break
case C.f:this.e5=H.h(this.y.l(0,"alphaTxt"),"$isam")
this.bG=H.h(this.y.l(0,"nullAlphaTxt"),"$isE")
break}}this.sfc(H.c([],[A.d6]))
this.sfd(H.c([],[A.d8]))
this.sfe(H.c([],[A.d9]))
this.sff(H.c([],[A.da]))
this.sfg(H.c([],[A.db]))
this.sfh(H.c([],[A.dc]))
if(a2.k2){y=a2.z
if(y>0){this.e6=H.f(this.y.l(0,"dirLightCount"),"$isE")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isD")
x=this.y
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isD")
x=this.ct;(x&&C.a).h(x,new A.d6(l,k,j))}}y=a2.Q
if(y>0){this.e7=H.f(this.y.l(0,"pntLightCount"),"$isE")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isD")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isD")
x=this.y
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isD")
x=this.y
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isT")
x=this.y
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isT")
x=this.y
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isT")
x=this.cu;(x&&C.a).h(x,new A.d8(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.e8=H.f(this.y.l(0,"spotLightCount"),"$isE")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isD")
x=this.y
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isD")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isD")
x=this.y
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isD")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isT")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isT")
x=this.y
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isT")
x=this.y
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isT")
x=this.y
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isT")
x=this.cv;(x&&C.a).h(x,new A.d9(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.e9=H.f(this.y.l(0,"txtDirLightCount"),"$isE")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isD")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isD")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isD")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isD")
x=this.y
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isD")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isE")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isal")
x=this.cw;(x&&C.a).h(x,new A.da(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.ea=H.f(this.y.l(0,"txtPntLightCount"),"$isE")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isD")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isD")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isd7")
x=this.y
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isD")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isE")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isT")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isT")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isT")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isam")
x=this.cz;(x&&C.a).h(x,new A.db(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.eb=H.f(this.y.l(0,"txtSpotLightCount"),"$isE")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isD")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isD")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isD")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isD")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isD")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isE")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isD")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isT")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isT")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(b,"$isT")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a,"$isT")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a0,"$isT")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a1,"$isal")
x=this.cA;(x&&C.a).h(x,new A.dc(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
af:function(a,b,c){C.b.S(b.a,b.d,1)},
a8:function(a,b,c){C.b.S(b.a,b.d,1)},
p:{
ig:function(a,b){var z,y
z=a.ah
y=new A.ih(b,z)
y.f4(b,z)
y.f1(a,b)
return y}}},ik:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ar,ah,bs",
hY:function(a){var z,y,x
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
i4:function(a){var z
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
hZ:function(a){var z
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
ic:function(a){var z,y
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
ie:function(a){var z,y
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
i6:function(a){var z
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
ij:function(a){var z
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
z+="uniform int null"+(c[0].toUpperCase()+C.c.aA(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
i1:function(a){var z,y
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
case C.e:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hX:function(a){var z,y
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
case C.e:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
i_:function(a){var z,y
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
case C.e:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
i2:function(a){var z,y
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
case C.e:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
ia:function(a){var z,y
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
case C.e:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
i5:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.d:break
case C.i:break
case C.e:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.f:z+="uniform samplerCube bumpTxt;\n"
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
case C.f:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
i8:function(a){var z,y
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
case C.e:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
i9:function(a){var z,y
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
case C.e:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
i0:function(a){var z,y
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
i7:function(a){var z,y
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
ib:function(a){var z,y
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
ig:function(a){var z,y,x
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
ih:function(a){var z,y,x
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
ii:function(a){var z,y,x
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
i3:function(a){var z
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
i:function(a){return this.ah}},d6:{"^":"a;a,b,c"},da:{"^":"a;a,b,c,d,e,f,r,x"},d8:{"^":"a;a,b,c,d,e,f,r"},db:{"^":"a;a,b,c,d,e,f,r,x,y,z"},d9:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dc:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cY:{"^":"cE;",
f4:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dh:function(a,b){var z,y,x
z=this.a
y=C.b.iF(z,b)
C.b.eV(z,y,a)
C.b.iB(z,y)
if(!H.fD(C.b.eS(z,y,35713))){x=C.b.eR(z,y)
C.b.iI(z,y)
throw H.e(P.u("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
hE:function(){var z,y,x,w,v,u
z=H.c([],[A.dB])
y=this.a
x=H.a0(C.b.bL(y,this.r,35721))
if(typeof x!=="number")return H.v(x)
w=0
for(;w<x;++w){v=C.b.eM(y,this.r,w)
u=C.b.eO(y,this.r,v.name)
C.a.h(z,new A.dB(y,v.name,u))}this.x=new A.h3(z)},
hG:function(){var z,y,x,w,v,u
z=H.c([],[A.a8])
y=this.a
x=H.a0(C.b.bL(y,this.r,35718))
if(typeof x!=="number")return H.v(x)
w=0
for(;w<x;++w){v=C.b.eN(y,this.r,w)
u=C.b.eT(y,this.r,v.name)
C.a.h(z,this.iG(v.type,v.size,v.name,u))}this.y=new A.jy(z)},
aG:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.E(z,y,b,c)
else return A.d5(z,y,b,a,c)},
fz:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.al(z,y,b,c)
else return A.d5(z,y,b,a,c)},
fA:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.am(z,y,b,c)
else return A.d5(z,y,b,a,c)},
bo:function(a,b){return new P.f9(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
iG:function(a,b,c,d){switch(a){case 5120:return this.aG(b,c,d)
case 5121:return this.aG(b,c,d)
case 5122:return this.aG(b,c,d)
case 5123:return this.aG(b,c,d)
case 5124:return this.aG(b,c,d)
case 5125:return this.aG(b,c,d)
case 5126:return new A.T(this.a,this.r,c,d)
case 35664:return new A.jt(this.a,this.r,c,d)
case 35665:return new A.D(this.a,this.r,c,d)
case 35666:return new A.jw(this.a,this.r,c,d)
case 35667:return new A.ju(this.a,this.r,c,d)
case 35668:return new A.jv(this.a,this.r,c,d)
case 35669:return new A.jx(this.a,this.r,c,d)
case 35674:return new A.jA(this.a,this.r,c,d)
case 35675:return new A.d7(this.a,this.r,c,d)
case 35676:return new A.ay(this.a,this.r,c,d)
case 35678:return this.fz(b,c,d)
case 35680:return this.fA(b,c,d)
case 35670:throw H.e(this.bo("BOOL",c))
case 35671:throw H.e(this.bo("BOOL_VEC2",c))
case 35672:throw H.e(this.bo("BOOL_VEC3",c))
case 35673:throw H.e(this.bo("BOOL_VEC4",c))
default:throw H.e(P.u("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},c4:{"^":"a;a,b",
i:function(a){return this.b}},a8:{"^":"a;"},jy:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
l:function(a,b){var z=this.j(0,b)
if(z==null)throw H.e(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.L()},
iV:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w)x+=z[w].i(0)+a
return x},
L:function(){return this.iV("\n")}},E:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},ju:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},jv:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},jx:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},js:{"^":"a8;0e,0f,a,b,c,d",
shV:function(a){this.e=H.j(a,"$isb",[P.l],"$asb")},
i:function(a){return"Uniform1iv: "+H.i(this.c)},
p:{
d5:function(a,b,c,d,e){var z=new A.js(a,b,c,e)
z.f=d
z.shV(P.i4(d,0,!1,P.l))
return z}}},T:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},jt:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},D:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},jw:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},jA:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},d7:{"^":"a8;a,b,c,d",
am:function(a){var z=new Float32Array(H.b7(H.j(a,"$isb",[P.p],"$asb")))
C.b.eF(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},ay:{"^":"a8;a,b,c,d",
am:function(a){var z=new Float32Array(H.b7(H.j(a,"$isb",[P.p],"$asb")))
C.b.eG(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},al:{"^":"a8;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},am:{"^":"a8;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
fE:function(a,b,c,d){var z
H.k(c,{func:1,ret:-1,args:[F.aa,P.p,P.p]})
z=F.cZ()
F.bF(z,b,c,d,a,1,0,0,1)
F.bF(z,b,c,d,a,0,1,0,3)
F.bF(z,b,c,d,a,0,0,1,2)
F.bF(z,b,c,d,a,-1,0,0,0)
F.bF(z,b,c,d,a,0,-1,0,0)
F.bF(z,b,c,d,a,0,0,-1,3)
z.ag()
return z},
cp:function(a){var z,y
z=a.a>0?1:0
if(a.b>0)z+=2
y=a.c
if(typeof y!=="number")return y.bM()
return(y>0?z+4:z)*2},
bF:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.k(c,{func:1,ret:-1,args:[F.aa,P.p,P.p]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.B(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.B(t+h,s+f,r+g)
z.b=q
p=new V.B(t-h,s-f,r-g)
z.c=p
o=new V.B(y-h,w-f,v-g)
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
j=F.cy(d,e,new F.lj(z,F.cp(z.c),F.cp(z.d),k,l,c),b)
if(j!=null)a.b5(j)},
fH:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.k(e,{func:1,ret:P.p,args:[P.p]})
if(f<3)return
z=F.cZ()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.aa])
v=z.a
u=new V.B(0,0,y)
u=u.u(0,Math.sqrt(u.E(u)))
C.a.h(w,v.io(new V.bv(a,-1,-1,-1),new V.bi(1,1,1,1),new V.S(0,0,d),new V.B(0,0,y),new V.a7(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.v(p)
o=new V.B(r,q,y).u(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.bY(new V.bv(a,-1,-1,-1),null,new V.bi(n,l,m,1),new V.S(r*p,q*p,d),new V.B(0,0,y),new V.a7(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.il(w)
return z},
fF:function(a,b,c,d,e,f){return F.lD(!0,c,d,new F.lC(a,f),e)},
lD:function(a,b,c,d,e){var z
H.k(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
z=F.cy(c,e,new F.lF(d),null)
if(z==null)return
z.ag()
z.cc()
if(b)z.b5(F.fH(3,!1,!1,1,new F.lG(d),e))
z.b5(F.fH(1,!0,!1,-1,new F.lH(d),e))
return z},
mj:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.mk()
y=F.fE(a,null,new F.ml(z,c),d)
y.cc()
return y},
mn:function(a,b,c,d){return F.fG(c,a,d,b,new F.mo())},
m_:function(a,b,c,d,e,f){return F.fG(d,a,e,b,new F.m0(f,c))},
fG:function(a,b,c,d,e){var z=F.cy(a,b,new F.lE(H.k(e,{func:1,ret:V.S,args:[P.p]}),d,b,c),null)
if(z==null)return
z.ag()
z.cc()
return z},
lP:function(a,b,c){var z={}
z.a=b
z.a=new F.lQ()
return F.cy(c,a,new F.lR(z),null)},
cy:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,{func:1,ret:-1,args:[F.aa,P.p,P.p]})
if(a<1)return
if(b<1)return
z=F.cZ()
y=H.c([],[F.aa])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.bY(null,null,new V.bi(u,0,0,1),null,null,new V.a7(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cp(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.bY(null,null,new V.bi(o,n,m,1),null,null,new V.a7(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cp(d))}}z.d.im(a+1,b+1,y)
return z},
lj:{"^":"m:5;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cF(z.b,b).cF(z.d.cF(z.c,b),c)
a.sZ(0,new V.S(y.a,y.b,y.c))
a.scR(y.u(0,Math.sqrt(y.E(y))))
z=1-b
x=1-c
a.scg(new V.bv(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
lC:{"^":"m:13;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
lF:{"^":"m:5;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.v(v)
y=-y*v
u=x*v
a.sZ(0,new V.S(y,u,w))
u=new V.B(y,u,w)
a.scR(u.u(0,Math.sqrt(u.E(u))))
a.scg(new V.bv(1-c,2+c,-1,-1))}},
lG:{"^":"m:14;a",
$1:function(a){return this.a.$2(a,1)}},
lH:{"^":"m:14;a",
$1:function(a){return this.a.$2(1-a,0)}},
mk:{"^":"m:13;",
$2:function(a,b){return 0}},
ml:{"^":"m:5;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.v(z)
y=a.f
x=new V.B(y.a,y.b,y.c)
z=x.u(0,Math.sqrt(x.E(x))).k(0,this.b+z)
a.sZ(0,new V.S(z.a,z.b,z.c))}},
mo:{"^":"m:15;",
$1:function(a){return new V.S(Math.cos(a),Math.sin(a),0)}},
m0:{"^":"m:15;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.S(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
lE:{"^":"m:5;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dy(y.$1(z),x)
x=J.dy(y.$1(z+3.141592653589793/this.c),x).I(0,w)
x=new V.B(x.a,x.b,x.c)
v=x.u(0,Math.sqrt(x.E(x)))
y=$.eZ
if(y==null){y=new V.B(1,0,0)
$.eZ=y
u=y}else u=y
y=v.ay(!J.F(v,u)?V.f2():u)
t=y.u(0,Math.sqrt(y.E(y)))
y=t.ay(v)
u=y.u(0,Math.sqrt(y.E(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
r=y.c
q=x.c
if(typeof r!=="number")return r.I()
if(typeof q!=="number")return H.v(q)
a.sZ(0,w.A(0,new V.S(y.a-x.a,y.b-x.b,r-q)))}},
lQ:{"^":"m:13;",
$2:function(a,b){return 0}},
lR:{"^":"m:5;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
a.sZ(0,new V.S(z,y,this.a.a.$2(b,c)))
x=new V.B(z,y,1)
a.scR(x.u(0,Math.sqrt(x.E(x))))
x=1-b
w=1-c
a.scg(new V.bv(b*c,2+x*c,4+b*w,6+x*w))}},
a2:{"^":"a;0a,0b,0c,0d,0e",
aZ:function(){if(!this.gb_()){C.a.K(this.a.a.d.b,this)
this.a.a.a2()}this.c5()
this.c6()
this.ht()},
ca:function(a){this.a=a
C.a.h(a.d.b,this)},
cb:function(a){this.b=a
C.a.h(a.d.c,this)},
hD:function(a){this.c=a
C.a.h(a.d.d,this)},
c5:function(){var z=this.a
if(z!=null){C.a.K(z.d.b,this)
this.a=null}},
c6:function(){var z=this.b
if(z!=null){C.a.K(z.d.c,this)
this.b=null}},
ht:function(){var z=this.c
if(z!=null){C.a.K(z.d.d,this)
this.c=null}},
gb_:function(){return this.a==null||this.b==null||this.c==null},
fn:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.by()
if(y!=null)v=v.A(0,y)
if(x!=null)v=v.A(0,x)
if(w!=null)v=v.A(0,w)
if(v.en())return
return v.u(0,Math.sqrt(v.E(v)))},
ft:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.I(0,y)
z=new V.B(z.a,z.b,z.c)
v=z.u(0,Math.sqrt(z.E(z)))
z=w.I(0,y)
z=new V.B(z.a,z.b,z.c)
z=v.ay(z.u(0,Math.sqrt(z.E(z))))
return z.u(0,Math.sqrt(z.E(z)))},
cm:function(){if(this.d!=null)return!0
var z=this.fn()
if(z==null){z=this.ft()
if(z==null)return!1}this.d=z
this.a.a.a2()
return!0},
fm:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.by()
if(y!=null)v=v.A(0,y)
if(x!=null)v=v.A(0,x)
if(w!=null)v=v.A(0,w)
if(v.en())return
return v.u(0,Math.sqrt(v.E(v)))},
fs:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.o.$2(n,0)){z=r.I(0,u)
z=new V.B(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.E(z)))
if(o.a-p.a<0)m=m.O(0)}else{l=(z-q.b)/n
z=r.I(0,u).k(0,l).A(0,u).I(0,x)
z=new V.B(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.E(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.O(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.E(z)))
z=k.ay(m)
z=z.u(0,Math.sqrt(z.E(z))).ay(k)
m=z.u(0,Math.sqrt(z.E(z)))}return m},
ck:function(){if(this.e!=null)return!0
var z=this.fm()
if(z==null){z=this.fs()
if(z==null)return!1}this.e=z
this.a.a.a2()
return!0},
giA:function(){if(J.F(this.a,this.b))return!0
if(J.F(this.b,this.c))return!0
if(J.F(this.c,this.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var z,y
if(this.gb_())return a+"disposed"
z=a+C.c.ab(J.ab(this.a.e),0)+", "+C.c.ab(J.ab(this.b.e),0)+", "+C.c.ab(J.ab(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
L:function(){return this.C("")},
p:{
bl:function(a,b,c){var z,y,x
z=new F.a2()
y=a.a
if(y==null)H.r(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.u("May not create a face with vertices attached to different shapes."))
z.ca(a)
z.cb(b)
z.hD(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a2()
return z}}},
hy:{"^":"a;"},
j8:{"^":"hy;",
b4:function(a,b,c){var z,y
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
bp:{"^":"a;0a,0b",
aZ:function(){if(!this.gb_()){C.a.K(this.a.a.c.b,this)
this.a.a.a2()}this.c5()
this.c6()},
ca:function(a){this.a=a
C.a.h(a.c.b,this)},
cb:function(a){this.b=a
C.a.h(a.c.c,this)},
c5:function(){var z=this.a
if(z!=null){C.a.K(z.c.b,this)
this.a=null}},
c6:function(){var z=this.b
if(z!=null){C.a.K(z.c.c,this)
this.b=null}},
gb_:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){if(this.gb_())return a+"disposed"
return a+C.c.ab(J.ab(this.a.e),0)+", "+C.c.ab(J.ab(this.b.e),0)},
L:function(){return this.C("")},
p:{
hU:function(a,b){var z,y,x
z=new F.bp()
y=a.a
if(y==null)H.r(P.u("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.u("May not create a line with vertices attached to different shapes."))
z.ca(a)
z.cb(b)
C.a.h(z.a.a.c.b,z)
z.a.a.a2()
return z}}},
hV:{"^":"a;"},
jr:{"^":"hV;",
b4:function(a,b,c){var z,y
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
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.c.ab(J.ab(z.e),0)},
L:function(){return this.C("")}},
cf:{"^":"a;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
b5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.w()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){v=z[w]
this.a.h(0,v.iD())}this.a.w()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.bT()
if(r.a==null)H.r(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.G(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.w()
t=t.e
if(typeof t!=="number")return t.A()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.hU(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.w()
t=t.e
if(typeof t!=="number")return t.A()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
m=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,m)
F.bl(p,o,m)}z=this.e
if(!(z==null))z.aj()},
ag:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.ag()||!1
if(!this.a.ag())y=!1
z=this.e
if(!(z==null))z.aj()
return y},
j5:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.t(z,0)])
for(z=[F.aa];y.length!==0;){x=C.a.giT(y)
C.a.jl(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.y)(y),++u){t=y[u]
if(t!=null&&a.b4(0,x,t)){C.a.h(w,t)
C.a.K(y,t)}}if(w.length>1)b.b5(w)}}this.a.w()
this.c.cN()
this.d.cN()
this.b.jm()
this.c.cO(new F.jr())
this.d.cO(new F.j8())
z=this.e
if(!(z==null))z.aj()},
iq:function(a){this.j5(new F.k2(),new F.it())},
cc:function(){return this.iq(null)},
iv:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aJ()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$aK().a)!==0)++w
if((x&$.$get$aL().a)!==0)++w
if((x&$.$get$bz().a)!==0)++w
if((x&$.$get$bA().a)!==0)++w
if((x&$.$get$b5().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
v=b.gd2(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.p
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dF])
for(r=0,q=0;q<w;++q){p=b.ir(q)
o=p.gd2(p)
C.a.m(s,q,new Z.dF(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].j3(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.j(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.ap(y,34962,j)
C.b.dN(y,34962,new Float32Array(H.b7(t)),35044)
C.b.ap(y,34962,null)
i=new Z.dG(new Z.f6(34962,j),s,b)
i.sfN(H.c([],[Z.bP]))
if(this.b.b.length!==0){x=P.l
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)}f=Z.dg(y,34963,H.j(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bP(0,h.length,f))}if(this.c.b.length!==0){x=P.l
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)}f=Z.dg(y,34963,H.j(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bP(1,h.length,f))}if(this.d.b.length!==0){x=P.l
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
C.a.h(h,g.e)}f=Z.dg(y,34963,H.j(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bP(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.D(z,"\n")},
ai:function(a){var z=this.e
if(!(z==null))z.G(a)},
a2:function(){return this.ai(null)},
$ismH:1,
p:{
cZ:function(){var z,y
z=new F.cf()
y=new F.jY(z)
y.b=!1
y.shW(H.c([],[F.aa]))
z.a=y
y=new F.j3(z)
y.sc2(H.c([],[F.bT]))
z.b=y
y=new F.j2(z)
y.sfP(H.c([],[F.bp]))
z.c=y
y=new F.j1(z)
y.sfF(H.c([],[F.a2]))
z.d=y
z.e=null
return z}}},
j1:{"^":"a;a,0b",
sfF:function(a){this.b=H.j(a,"$isb",[F.a2],"$asb")},
il:function(a){var z,y,x,w,v,u,t
H.j(a,"$isb",[F.aa],"$asb")
z=H.c([],[F.a2])
y=a.length
if(y>0){x=a[0]
for(w=this.a,v=2;v<y;++v){u=v-1
t=a.length
if(u>=t)return H.d(a,u)
u=a[u]
if(v>=t)return H.d(a,v)
t=a[v]
w.a.h(0,x)
w.a.h(0,u)
w.a.h(0,t)
C.a.h(z,F.bl(x,u,t))}}return z},
im:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(c,"$isb",[F.aa],"$asb")
z=H.c([],[F.a2])
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
C.a.h(z,F.bl(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bl(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bl(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bl(p,m,q))}t=!t}v=!v}return z},
gn:function(a){return this.b.length},
cO:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.d(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.j(0,v)
for(t=v-1;t>=0;--t){s=w.d.j(0,t)
if(a.b4(0,u,s)){u.aZ()
break}}}}},
cN:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.giA()
if(y)x.aZ()}},
ag:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].cm())x=!1
return x},
cl:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].ck())x=!1
return x},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
L:function(){return this.C("")}},
j2:{"^":"a;a,0b",
sfP:function(a){this.b=H.j(a,"$isb",[F.bp],"$asb")},
gn:function(a){return this.b.length},
cO:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.d(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.j(0,v)
for(t=v-1;t>=0;--t){s=w.c.j(0,t)
if(a.b4(0,u,s)){u.aZ()
break}}}}},
cN:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.F(x.a,x.b)
if(y)x.aZ()}},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.c([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.D(z,"\n")},
L:function(){return this.C("")}},
j3:{"^":"a;a,0b",
sc2:function(a){this.b=H.j(a,"$isb",[F.bT],"$asb")},
gn:function(a){return this.b.length},
jm:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
x=y.a
if(x.b.b.length>1){if(x!=null){C.a.K(x.a.b.b,y)
x=y.a.a.e
if(!(x==null))x.G(null)}x=y.a
if(x!=null){C.a.K(x.b.b,y)
y.a=null}}}},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
L:function(){return this.C("")}},
aa:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cp:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.bY(this.cx,x,u,z,y,w,v,a,t)},
iD:function(){return this.cp(null)},
sZ:function(a,b){var z
if(!J.F(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a2()}},
scR:function(a){var z
if(!J.F(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a2()}},
scg:function(a){var z
if(!J.F(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a2()}},
j3:function(a){var z,y
if(a.q(0,$.$get$aJ())){z=this.f
y=[P.p]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$aI())){z=this.r
y=[P.p]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$aH())){z=this.x
y=[P.p]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$aK())){z=this.y
y=[P.p]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.q(0,$.$get$aL())){z=this.z
y=[P.p]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$bz())){z=this.Q
y=[P.p]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$bA())){z=this.Q
y=[P.p]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.q(0,$.$get$b5()))return H.c([this.ch],[P.p])
else if(a.q(0,$.$get$aG())){z=this.cx
y=[P.p]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.p])},
cm:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.by()
this.d.Y(0,new F.k7(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.a2()
z=this.a.e
if(!(z==null))z.aj()}return!0},
ck:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.by()
this.d.Y(0,new F.k6(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.a2()
z=this.a.e
if(!(z==null))z.aj()}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var z,y,x
z=H.c([],[P.n])
C.a.h(z,C.c.ab(J.ab(this.e),0))
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
C.a.h(z,V.C(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.D(z,", ")
return a+"{"+x+"}"},
L:function(){return this.C("")},
p:{
bY:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aa()
y=new F.k5(z)
y.sc2(H.c([],[F.bT]))
z.b=y
y=new F.k1(z)
x=[F.bp]
y.sfQ(H.c([],x))
y.sfR(H.c([],x))
z.c=y
y=new F.jZ(z)
x=[F.a2]
y.sfG(H.c([],x))
y.sfH(H.c([],x))
y.sfI(H.c([],x))
z.d=y
h=$.$get$f3()
z.e=0
y=$.$get$aJ()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aI().a)!==0?e:null
z.x=(x&$.$get$aH().a)!==0?b:null
z.y=(x&$.$get$aK().a)!==0?f:null
z.z=(x&$.$get$aL().a)!==0?g:null
z.Q=(x&$.$get$f4().a)!==0?c:null
z.ch=(x&$.$get$b5().a)!==0?i:0
z.cx=(x&$.$get$aG().a)!==0?a:null
return z}}},
k7:{"^":"m:9;a",
$1:function(a){var z,y
H.f(a,"$isa2")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.A(0,z)}}},
k6:{"^":"m:9;a",
$1:function(a){var z,y
H.f(a,"$isa2")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.A(0,z)}}},
jY:{"^":"a;a,0b,0c",
shW:function(a){this.c=H.j(a,"$isb",[F.aa],"$asb")},
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
ip:function(a,b,c,d,e,f,g,h,i){var z=F.bY(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
io:function(a,b,c,d,e,f){return this.ip(a,null,b,c,d,e,f,null,0)},
gn:function(a){return this.c.length},
ag:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].cm()
return!0},
cl:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].ck()
return!0},
iw:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
if(typeof s!=="number")return s.k()
s=v.u(0,Math.sqrt(u*u+t*t+s*s))
if(!J.F(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.G(null)}}}}return!0},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
this.w()
z=H.c([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
L:function(){return this.C("")}},
jZ:{"^":"a;a,0b,0c,0d",
sfG:function(a){this.b=H.j(a,"$isb",[F.a2],"$asb")},
sfH:function(a){this.c=H.j(a,"$isb",[F.a2],"$asb")},
sfI:function(a){this.d=H.j(a,"$isb",[F.a2],"$asb")},
gn:function(a){return this.b.length+this.c.length+this.d.length},
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
Y:function(a,b){H.k(b,{func:1,ret:-1,args:[F.a2]})
C.a.Y(this.b,b)
C.a.Y(this.c,new F.k_(this,b))
C.a.Y(this.d,new F.k0(this,b))},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
L:function(){return this.C("")}},
k_:{"^":"m:9;a,b",
$1:function(a){H.f(a,"$isa2")
if(!J.F(a.a,this.a))this.b.$1(a)}},
k0:{"^":"m:9;a,b",
$1:function(a){var z
H.f(a,"$isa2")
z=this.a
if(!J.F(a.a,z)&&!J.F(a.b,z))this.b.$1(a)}},
k1:{"^":"a;a,0b,0c",
sfQ:function(a){this.b=H.j(a,"$isb",[F.bp],"$asb")},
sfR:function(a){this.c=H.j(a,"$isb",[F.bp],"$asb")},
gn:function(a){return this.b.length+this.c.length},
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
k3:{"^":"a;"},
k2:{"^":"k3;",
b4:function(a,b,c){return J.F(b.f,c.f)}},
k4:{"^":"a;"},
it:{"^":"k4;",
b5:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.j(a,"$isb",[F.aa],"$asb")
z=V.by()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null){v=z.a
u=w.a
t=z.b
s=w.b
r=z.c
w=w.c
if(typeof r!=="number")return r.A()
if(typeof w!=="number")return H.v(w)
z=new V.B(v+u,t+s,r+w)}}z=z.u(0,Math.sqrt(z.E(z)))
for(y=a.length,w=z==null,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){q=a[x]
if(w)p=null
else{v=z.a
u=z.b
t=z.c
if(typeof t!=="number")return t.k()
p=z.u(0,Math.sqrt(v*v+u*u+t*t))}if(!J.F(q.r,p)){q.r=p
v=q.a
if(v!=null){v=v.e
if(!(v==null))v.G(null)}}}return}},
k5:{"^":"a;a,0b",
sc2:function(a){this.b=H.j(a,"$isb",[F.bT],"$asb")},
gn:function(a){return this.b.length},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
L:function(){return this.C("")}}}],["","",,O,{"^":"",ie:{"^":"ch;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sfp:function(a){this.e=H.j(a,"$isQ",[V.ac],"$asQ")},
gB:function(){var z=this.dy
if(z==null){z=D.G()
this.dy=z}return z},
ae:[function(a){var z
H.f(a,"$isx")
z=this.dy
if(!(z==null))z.G(a)},function(){return this.ae(null)},"jP","$1","$0","gh2",0,2,1],
hz:[function(a){H.f(a,"$isx")
this.a=null
this.ae(a)},function(){return this.hz(null)},"kd","$1","$0","ghy",0,2,1],
jM:[function(a,b){var z=V.ac
z=new D.c8(a,H.j(b,"$isq",[z],"$asq"),this,[z])
z.b=!0
this.ae(z)},"$2","gh_",8,0,18],
jN:[function(a,b){var z=V.ac
z=new D.c9(a,H.j(b,"$isq",[z],"$asq"),this,[z])
z.b=!0
this.ae(z)},"$2","gh0",8,0,18],
de:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.a3(z.e.length+3,4)*4
x=C.h.a3(z.f.length+3,4)*4
w=C.h.a3(z.r.length+3,4)*4
v=C.h.a3(z.x.length+3,4)*4
u=C.h.a3(z.y.length+3,4)*4
t=C.h.a3(z.z.length+3,4)*4
s=C.h.a3(this.e.a.length+3,4)*4
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
c=z===C.e||r===C.e||q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e
b=z===C.f||r===C.f||q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f
a=x+u+v+w+t>0
a0=s>0
a1=e||!g||f
a2=$.$get$aJ()
if(e){g=$.$get$aI()
a2=new Z.b4(a2.a|g.a)}if(d){g=$.$get$aH()
a2=new Z.b4(a2.a|g.a)}if(c){g=$.$get$aK()
a2=new Z.b4(a2.a|g.a)}if(b){g=$.$get$aL()
a2=new Z.b4(a2.a|g.a)}if(a0){g=$.$get$aG()
a2=new Z.b4(a2.a|g.a)}return new A.ik(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
V:function(a,b){H.j(a,"$isb",[T.ex],"$asb")},
as:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.as(z,z.length,0,[H.t(z,0)]);z.H();){y=z.d
y.toString
x=$.ck
if(x==null){x=new V.B(0,0,1)
$.ck=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cS(x)}}},
jo:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=this.a
if(z==null){z=this.de()
y=a.fr.j(0,z.ah)
if(y==null){y=A.ig(z,a.a)
x=y.b
if(x.length===0)H.r(P.u("May not cache a shader with no name."))
if(a.fr.br(x))H.r(P.u('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
a0.e=null
z=y}w=z.z
v=w.bs
z=a0.e
if(!(z instanceof Z.dG)){a0.e=null
z=null}if(z==null||!z.d.q(0,v)){z=w.r1
if(z)a0.d.ag()
u=w.r2
if(u){t=a0.d
s=t.e
if(!(s==null))++s.d
t.d.cl()
t.a.cl()
t=t.e
if(!(t==null))t.aj()}t=w.ry
if(t){s=a0.d
r=s.e
if(!(r==null))++r.d
s.a.iw()
s=s.e
if(!(s==null))s.aj()}q=a0.d.iv(new Z.k8(a.a),v)
q.aO($.$get$aJ()).e=this.a.Q.c
if(z)q.aO($.$get$aI()).e=this.a.cx.c
if(u)q.aO($.$get$aH()).e=this.a.ch.c
if(w.rx)q.aO($.$get$aK()).e=this.a.cy.c
if(t)q.aO($.$get$aL()).e=this.a.db.c
if(w.x1)q.aO($.$get$aG()).e=this.a.dx.c
a0.e=q}z=T.ex
p=H.c([],[z])
u=this.a
t=a.a
C.b.eI(t,u.r)
u.x.iP()
if(w.fx){u=this.a
s=a.dx.ga_()
u=u.dy
u.toString
u.am(s.ac(0,!0))}if(w.fy){u=this.a
s=a.cx
if(s==null){s=a.db.ga_().k(0,a.dx.ga_())
a.cx=s}u=u.fr
u.toString
u.am(s.ac(0,!0))}u=this.a
s=a.ch
if(s==null){s=a.gjk().k(0,a.dx.ga_())
a.ch=s}u=u.fy
u.toString
u.am(s.ac(0,!0))
if(w.x2){u=this.a
s=this.b
u=u.k1
u.toString
u.am(C.o.ac(s,!0))}if(w.y1){u=this.a
s=this.c
u=u.k2
u.toString
u.am(C.o.ac(s,!0))}if(w.y2){u=this.a
s=this.d
u=u.k3
u.toString
u.am(C.o.ac(s,!0))}if(w.ar>0){o=this.e.a.length
u=this.a.k4
C.b.S(u.a,u.d,o)
for(u=[P.p],n=0;n<o;++n){s=this.a
r=this.e.a
if(n>=r.length)return H.d(r,n)
r=r[n]
s.toString
H.f(r,"$isac")
s=s.r1
if(n>=s.length)return H.d(s,n)
s=s[n]
m=new Float32Array(H.b7(H.j(r.ac(0,!0),"$isb",u,"$asb")))
C.b.eG(s.a,s.d,!1,m)}}switch(w.a){case C.d:break
case C.i:u=this.a
s=this.f.f
u=u.r2
u.toString
r=s.a
l=s.b
s=s.c
C.b.v(u.a,u.d,r,l,s)
break
case C.e:this.V(p,this.f.d)
u=this.a
s=this.f.d
u.af(u.rx,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break
case C.f:this.V(p,this.f.e)
u=this.a
s=this.f.e
u.a8(u.ry,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break}if(w.k2){switch(w.b){case C.d:break
case C.i:u=this.a
s=this.r.f
u=u.x2
u.toString
r=s.a
l=s.b
s=s.c
C.b.v(u.a,u.d,r,l,s)
break
case C.e:this.V(p,this.r.d)
u=this.a
s=this.r.d
u.af(u.y1,u.ar,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break
case C.f:this.V(p,this.r.e)
u=this.a
s=this.r.e
u.a8(u.y2,u.ar,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break}switch(w.c){case C.d:break
case C.i:u=this.a
s=this.x.f
u=u.ah
u.toString
r=s.a
l=s.b
s=s.c
C.b.v(u.a,u.d,r,l,s)
break
case C.e:this.V(p,this.x.d)
u=this.a
s=this.x.d
u.af(u.bs,u.bt,s)
s=this.a
u=this.x.f
s=s.ah
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break
case C.f:this.V(p,this.x.e)
u=this.a
s=this.x.e
u.a8(u.dS,u.bt,s)
s=this.a
u=this.x.f
s=s.ah
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break}switch(w.d){case C.d:break
case C.i:u=this.a
s=this.y.f
u=u.bu
u.toString
r=s.a
l=s.b
s=s.c
C.b.v(u.a,u.d,r,l,s)
break
case C.e:this.V(p,this.y.d)
u=this.a
s=this.y.d
u.af(u.dT,u.bv,s)
s=this.a
u=this.y.f
s=s.bu
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break
case C.f:this.V(p,this.y.e)
u=this.a
s=this.y.e
u.a8(u.dU,u.bv,s)
s=this.a
u=this.y.f
s=s.bu
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break}switch(w.e){case C.d:break
case C.i:u=this.a
s=this.z.f
u=u.bw
u.toString
r=s.a
l=s.b
s=s.c
C.b.v(u.a,u.d,r,l,s)
s=this.a
l=this.z.ch
s=s.by
C.b.M(s.a,s.d,l)
break
case C.e:this.V(p,this.z.d)
u=this.a
s=this.z.d
u.af(u.dV,u.bx,s)
s=this.a
u=this.z.f
s=s.bw
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.by
C.b.M(u.a,u.d,l)
break
case C.f:this.V(p,this.z.e)
u=this.a
s=this.z.e
u.a8(u.dW,u.bx,s)
s=this.a
u=this.z.f
s=s.bw
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.by
C.b.M(u.a,u.d,l)
break}if(w.z>0){o=this.dx.e.length
u=this.a.e6
C.b.S(u.a,u.d,o)
k=a.db.ga_()
for(u=this.dx.e,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.ct
if(j>=r.length)return H.d(r,j)
g=r[j]
r=k.cS(h.a)
l=r.a
f=r.b
e=r.c
if(typeof e!=="number")return e.k()
e=r.u(0,Math.sqrt(l*l+f*f+e*e))
f=g.b
l=e.a
r=e.b
e=e.c
C.b.v(f.a,f.d,l,r,e)
e=h.c
r=g.c
C.b.v(r.a,r.d,e.a,e.b,e.c);++j}}if(w.Q>0){o=this.dx.f.length
u=this.a.e7
C.b.S(u.a,u.d,o)
k=a.db.ga_()
for(u=this.dx.f,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cu
if(j>=r.length)return H.d(r,j)
g=r[j]
r=h.gb9(h)
l=g.b
f=r.gcV(r)
e=r.gcW(r)
r=r.gcX(r)
C.b.v(l.a,l.d,f,e,r)
r=k.bf(h.gb9(h))
e=g.c
C.b.v(e.a,e.d,r.a,r.b,r.c)
r=h.gaq(h)
e=g.d
f=r.gbI()
l=r.gbh()
r=r.gbq()
C.b.v(e.a,e.d,f,l,r)
r=h.gcd()
l=g.e
C.b.M(l.a,l.d,r)
r=h.gce()
l=g.f
C.b.M(l.a,l.d,r)
r=h.gcf()
l=g.r
C.b.M(l.a,l.d,r);++j}}if(w.ch>0){o=this.dx.r.length
u=this.a.e8
C.b.S(u.a,u.d,o)
k=a.db.ga_()
for(u=this.dx.r,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cv
if(j>=r.length)return H.d(r,j)
g=r[j]
r=h.gb9(h)
l=g.b
f=r.gcV(r)
e=r.gcW(r)
r=r.gcX(r)
C.b.v(l.a,l.d,f,e,r)
r=h.gcr(h).kk()
e=g.c
f=r.gaL(r)
l=r.gaM(r)
r=r.gaN()
C.b.v(e.a,e.d,f,l,r)
r=k.bf(h.gb9(h))
l=g.d
C.b.v(l.a,l.d,r.a,r.b,r.c)
r=h.gaq(h)
l=g.e
f=r.gbI()
e=r.gbh()
r=r.gbq()
C.b.v(l.a,l.d,f,e,r)
r=h.gki()
e=g.f
C.b.M(e.a,e.d,r)
r=h.gkh()
e=g.r
C.b.M(e.a,e.d,r)
r=h.gcd()
e=g.x
C.b.M(e.a,e.d,r)
r=h.gce()
e=g.y
C.b.M(e.a,e.d,r)
r=h.gcf()
e=g.z
C.b.M(e.a,e.d,r);++j}}if(w.cx>0){o=this.dx.x.length
u=this.a.e9
C.b.S(u.a,u.d,o)
k=a.db.ga_()
for(u=this.dx.x,s=u.length,r=[z],j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
l=this.a.cw
if(j>=l.length)return H.d(l,j)
g=l[j]
l=h.gbb()
H.j(p,"$isb",r,"$asb")
if(!C.a.aX(p,l)){l.sb1(0,p.length)
C.a.h(p,l)}l=h.gcr(h)
f=g.d
e=l.gaL(l)
d=l.gaM(l)
l=l.gaN()
C.b.v(f.a,f.d,e,d,l)
l=h.gbJ()
d=g.b
e=l.gaL(l)
f=l.gaM(l)
l=l.gaN()
C.b.v(d.a,d.d,e,f,l)
l=h.gba(h)
f=g.c
e=l.gaL(l)
d=l.gaM(l)
l=l.gaN()
C.b.v(f.a,f.d,e,d,l)
l=k.cS(h.gcr(h))
d=l.a
e=l.b
f=l.c
if(typeof f!=="number")return f.k()
f=l.u(0,Math.sqrt(d*d+e*e+f*f))
e=g.e
d=f.a
l=f.b
f=f.c
C.b.v(e.a,e.d,d,l,f)
f=h.gaq(h)
l=g.f
d=f.gbI()
e=f.gbh()
f=f.gbq()
C.b.v(l.a,l.d,d,e,f)
f=h.gbb()
l=f.gb2(f)
if(!l){l=g.x
C.b.S(l.a,l.d,1)}else{l=g.r
e=f.gb2(f)
d=l.a
l=l.d
if(!e)C.b.S(d,l,0)
else C.b.S(d,l,f.gb1(f))
l=g.x
C.b.S(l.a,l.d,0)}++j}}if(w.cy>0){o=this.dx.y.length
u=this.a.ea
C.b.S(u.a,u.d,o)
k=a.db.ga_()
for(u=this.dx.y,s=u.length,r=[P.p],l=[z],j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
f=this.a.cz
if(j>=f.length)return H.d(f,j)
g=f[j]
f=h.gbb()
H.j(p,"$isb",l,"$asb")
if(!C.a.aX(p,f)){f.sb1(0,p.length)
C.a.h(p,f)}c=k.k(0,h.ga_())
f=h.ga_()
e=$.bu
if(e==null){e=new V.S(0,0,0)
$.bu=e}e=f.bf(e)
f=g.b
d=e.gcV(e)
b=e.gcW(e)
e=e.gcX(e)
C.b.v(f.a,f.d,d,b,e)
f=$.bu
if(f==null){f=new V.S(0,0,0)
$.bu=f}f=c.bf(f)
e=g.c
C.b.v(e.a,e.d,f.a,f.b,f.c)
f=c.em()
e=g.d
m=new Float32Array(H.b7(H.j(new V.e7(f.a,f.b,f.c,f.e,f.f,f.r,f.y,f.z,f.Q).ac(0,!0),"$isb",r,"$asb")))
C.b.eF(e.a,e.d,!1,m)
e=h.gaq(h)
f=g.e
d=e.gbI()
b=e.gbh()
e=e.gbq()
C.b.v(f.a,f.d,d,b,e)
e=h.gbb()
f=e.gb2(e)
if(!f){f=g.r
C.b.S(f.a,f.d,1)}else{f=g.f
d=e.gb2(e)
b=f.a
f=f.d
if(!d)C.b.S(b,f,0)
else C.b.S(b,f,e.gb1(e))
f=g.r
C.b.S(f.a,f.d,0)}f=h.gcd()
e=g.x
C.b.M(e.a,e.d,f)
f=h.gce()
e=g.y
C.b.M(e.a,e.d,f)
f=h.gcf()
e=g.z
C.b.M(e.a,e.d,f);++j}}if(w.db>0){o=this.dx.z.length
u=this.a.eb
C.b.S(u.a,u.d,o)
k=a.db.ga_()
for(u=this.dx.z,s=u.length,z=[z],j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cA
if(j>=r.length)return H.d(r,j)
g=r[j]
r=h.gbb()
H.j(p,"$isb",z,"$asb")
if(!C.a.aX(p,r)){r.sb1(0,p.length)
C.a.h(p,r)}r=h.gb9(h)
l=g.b
f=r.gcV(r)
e=r.gcW(r)
r=r.gcX(r)
C.b.v(l.a,l.d,f,e,r)
r=h.gcr(h)
e=g.c
f=r.gaL(r)
l=r.gaM(r)
r=r.gaN()
C.b.v(e.a,e.d,f,l,r)
r=h.gbJ()
l=g.d
f=r.gaL(r)
e=r.gaM(r)
r=r.gaN()
C.b.v(l.a,l.d,f,e,r)
r=h.gba(h)
e=g.e
f=r.gaL(r)
l=r.gaM(r)
r=r.gaN()
C.b.v(e.a,e.d,f,l,r)
r=k.bf(h.gb9(h))
l=g.f
C.b.v(l.a,l.d,r.a,r.b,r.c)
r=h.gbb()
l=r.gb2(r)
if(!l){r=g.x
C.b.S(r.a,r.d,1)}else{l=g.r
f=r.gb2(r)
e=l.a
l=l.d
if(!f)C.b.S(e,l,0)
else C.b.S(e,l,r.gb1(r))
r=g.x
C.b.S(r.a,r.d,0)}r=h.gaq(h)
l=g.y
f=r.gbI()
e=r.gbh()
r=r.gbq()
C.b.v(l.a,l.d,f,e,r)
r=h.gkq()
e=g.z
C.b.M(e.a,e.d,r)
r=h.gkr()
e=g.Q
C.b.M(e.a,e.d,r)
r=h.gcd()
e=g.ch
C.b.M(e.a,e.d,r)
r=h.gce()
e=g.cx
C.b.M(e.a,e.d,r)
r=h.gcf()
e=g.cy
C.b.M(e.a,e.d,r);++j}}}switch(w.f){case C.d:break
case C.i:break
case C.e:this.V(p,this.Q.d)
z=this.a
u=this.Q.d
z.af(z.dX,z.bz,u)
break
case C.f:this.V(p,this.Q.e)
z=this.a
u=this.Q.e
z.a8(z.dY,z.bz,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db.ga_().em()
a.Q=u}z=z.id
z.toString
z.am(u.ac(0,!0))}if(w.dy){this.V(p,this.ch)
z=this.a
u=this.ch
z.a8(z.dZ,z.e_,u)
switch(w.r){case C.d:break
case C.i:z=this.a
u=this.cx.f
z=z.bA
z.toString
s=u.a
r=u.b
u=u.c
C.b.v(z.a,z.d,s,r,u)
break
case C.e:this.V(p,this.cx.d)
z=this.a
u=this.cx.d
z.af(z.e0,z.bB,u)
u=this.a
z=this.cx.f
u=u.bA
u.toString
s=z.a
r=z.b
z=z.c
C.b.v(u.a,u.d,s,r,z)
break
case C.f:this.V(p,this.cx.e)
z=this.a
u=this.cx.e
z.a8(z.e1,z.bB,u)
u=this.a
z=this.cx.f
u=u.bA
u.toString
s=z.a
r=z.b
z=z.c
C.b.v(u.a,u.d,s,r,z)
break}switch(w.x){case C.d:break
case C.i:z=this.a
u=this.cy.f
z=z.bD
z.toString
s=u.a
r=u.b
u=u.c
C.b.v(z.a,z.d,s,r,u)
u=this.a
r=this.cy.ch
u=u.bC
C.b.M(u.a,u.d,r)
break
case C.e:this.V(p,this.cy.d)
z=this.a
u=this.cy.d
z.af(z.e2,z.bE,u)
u=this.a
z=this.cy.f
u=u.bD
u.toString
s=z.a
r=z.b
z=z.c
C.b.v(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bC
C.b.M(z.a,z.d,r)
break
case C.f:this.V(p,this.cy.e)
z=this.a
u=this.cy.e
z.a8(z.e3,z.bE,u)
u=this.a
z=this.cy.f
u=u.bD
u.toString
s=z.a
r=z.b
z=z.c
C.b.v(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bC
C.b.M(z.a,z.d,r)
break}}z=w.y
u=z!==C.d
if(u){switch(z){case C.d:break
case C.i:z=this.a
s=this.db.f
z=z.bF
C.b.M(z.a,z.d,s)
break
case C.e:this.V(p,this.db.d)
z=this.a
s=this.db.d
z.af(z.e4,z.bG,s)
s=this.a
z=this.db.f
s=s.bF
C.b.M(s.a,s.d,z)
break
case C.f:this.V(p,this.db.e)
z=this.a
s=this.db.e
z.a8(z.e5,z.bG,s)
s=this.a
z=this.db.f
s=s.bF
C.b.M(s.a,s.d,z)
break}C.b.cs(t,3042)
C.b.iu(t,770,771)}for(n=0;n<p.length;++n)p[n].bp(a)
z=a0.e
z.bp(a)
z.aQ(a)
z.eE(a)
if(u)C.b.iM(t,3042)
for(n=0;n<p.length;++n)p[n].eE(a)
z=this.a
z.toString
C.b.eI(t,null)
z.x.iN()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.de().ah}},ii:{"^":"cR;0f,a,b,0c,0d,0e"},cR:{"^":"a;",
bm:["f_",function(){}]},ij:{"^":"cR;a,b,0c,0d,0e"},aZ:{"^":"cR;0f,a,b,0c,0d,0e",
dC:function(a){var z,y
if(!J.F(this.f,a)){z=this.f
this.f=a
y=new D.A(this.b+".color",z,a,this,[V.a1])
y.b=!0
this.a.ae(y)}},
bm:["bO",function(){this.f_()
this.dC(new V.a1(1,1,1))}],
saq:function(a,b){var z
if(this.c===C.d){this.c=C.i
this.bm()
z=this.a
z.a=null
z.ae(null)}this.dC(b)}},il:{"^":"aZ;0ch,0f,a,b,0c,0d,0e",
hC:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.A(this.b+".refraction",y,a,this,[P.p])
z.b=!0
this.a.ae(z)}},
bm:function(){this.bO()
this.hC(1)}},im:{"^":"aZ;0ch,0f,a,b,0c,0d,0e",
c7:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.A(this.b+".shininess",y,a,this,[P.p])
z.b=!0
this.a.ae(z)}},
bm:function(){this.bO()
this.c7(100)}},ch:{"^":"a;"}}],["","",,T,{"^":"",ex:{"^":"cE;"},ji:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",h2:{"^":"a;",
b3:function(a){return!0},
i:function(a){return"all"},
$isbq:1},bq:{"^":"a;"},e6:{"^":"a;0a",
sav:function(a){this.a=H.j(a,"$isb",[V.bq],"$asb")},
b3:["eZ",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)if(z[x].b3(a))return!0
return!1}],
i:["d3",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbq:1},bt:{"^":"e6;0a",
b3:function(a){return!this.eZ(a)},
i:function(a){return"!["+this.d3(0)+"]"}},iZ:{"^":"a;0a",
shB:function(a){this.a=H.j(a,"$isH",[P.l,P.a5],"$asH")},
f3:function(a){var z,y
if(a.a.length<=0)throw H.e(P.u("May not create a SetMatcher with zero characters."))
z=new H.aQ(0,0,[P.l,P.a5])
for(y=new H.e4(a,a.gn(a),0,[H.ae(a,"R",0)]);y.H();)z.m(0,y.d,!0)
this.shB(z)},
b3:function(a){return this.a.br(a)},
i:function(a){return P.bW(this.a.gcE(),0,null)},
$isbq:1,
p:{
a4:function(a){var z=new V.iZ()
z.f3(a)
return z}}},d_:{"^":"a;a,b,0c,0d",
shR:function(a){this.c=H.j(a,"$isb",[V.d3],"$asb")},
D:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.d3(this.a.N(0,b))
w.sav(H.c([],[V.bq]))
w.c=!1
C.a.h(this.c,w)
return w},
iS:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.b3(a))return w}return},
i:function(a){return this.b}},eE:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fT(this.b,"\n","\\n")
y=H.fT(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},d2:{"^":"a;a,b,0c",
shu:function(a){var z=P.n
this.c=H.j(a,"$isH",[z,z],"$asH")},
i:function(a){return this.b}},jn:{"^":"a;0a,0b,0c",
shK:function(a){this.a=H.j(a,"$isH",[P.n,V.d_],"$asH")},
shN:function(a){this.b=H.j(a,"$isH",[P.n,V.d2],"$asH")},
N:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.d_(this,b)
z.shR(H.c([],[V.d3]))
z.d=null
this.a.m(0,b,z)}return z},
bd:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.d2(this,a)
y=P.n
z.shu(new H.aQ(0,0,[y,y]))
this.b.m(0,a,z)}return z},
jz:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eE])
y=this.c
x=[P.l]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.F(a,t)
r=y.iS(s)
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
u=new V.eE(o==null?p.b:o,q,t)}++t}}}},d3:{"^":"e6;b,0c,0a",
i:function(a){return this.b.b+": "+this.d3(0)}}}],["","",,X,{"^":"",dI:{"^":"a;",$isaD:1},hE:{"^":"ev;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z}},iw:{"^":"a;0a,0b,0c,0d,0e,0f",
gB:function(){var z=this.f
if(z==null){z=D.G()
this.f=z}return z},
aS:[function(a){var z
H.f(a,"$isx")
z=this.f
if(!(z==null))z.G(a)},function(){return this.aS(null)},"jH","$1","$0","gd5",0,2,1],
sb6:function(a){var z,y
if(!J.F(this.b,a)){z=this.b
if(z!=null)z.gB().K(0,this.gd5())
y=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gd5())
z=new D.A("mover",y,this.b,this,[U.a3])
z.b=!0
this.aS(z)}},
$isaD:1,
$isdI:1},ev:{"^":"a;"}}],["","",,V,{"^":"",
mh:function(a){P.jm(C.M,new V.mi(a))},
mi:{"^":"m:47;a",
$1:function(a){H.f(a,"$isb1")
P.dx(C.j.eD(this.a.giW(),2)+" fps")}},
iL:{"^":"a;a,b,0c",
dJ:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.k(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.eT().gcM().j(0,H.i(z))
if(y==null)if(d){c.$0()
this.dH(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dA(this.c).h(0,v)
t=W.hJ("radio")
t.checked=x
t.name=z
z=W.a6
W.Y(t,"change",H.k(new V.iM(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
C.A.W(v,t)
s=w.createElement("span")
s.textContent=b
C.A.W(v,s)
J.dA(this.c).h(0,w.createElement("br"))},
aJ:function(a,b,c){return this.dJ(a,b,c,!1)},
dH:function(a){var z,y,x,w,v
z=P.eT()
y=P.n
x=P.i1(z.gcM(),y,y)
x.m(0,this.a,a)
w=z.ey(x)
y=window.history
v=w.i(0)
y.toString;(y&&C.N).hw(y,new P.kO([],[]).cT(""),"",v)}},
iM:{"^":"m:21;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dH(this.d)}}},
j4:{"^":"a;0a,0b",
f5:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.w).W(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.w.W(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.l.W(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.l.W(v,u)}t=z.createElement("div")
this.a=t
C.l.W(v,t)
this.b=null
t=W.a6
W.Y(z,"scroll",H.k(new V.j7(x),{func:1,ret:-1,args:[t]}),!1,t)},
dK:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.j(a,"$isb",[P.n],"$asb")
this.hF()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.jz(C.a.j0(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.l.W(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.l.W(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.l.W(y,t)
break
case"Link":s=u.b
if(H.fS(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.d(r,1)
q.href=H.I(r[1])
q.textContent=H.I(r[0])
C.l.W(y,q)}else{p=P.co(C.Y,s,C.m,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.i(p)
q.textContent=s
C.l.W(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.l.W(y,t)
break}}C.l.W(this.a,y)},
ik:function(a){var z,y,x,w,v,u,t
H.j(a,"$isb",[P.n],"$asb")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
C.l.W(this.a,y)
w=C.a2.fO(y,-1)
x=H.f((w&&C.F).dm(w,-1),"$iscg").style
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
t=H.f(C.F.dm(w,-1),"$iscg")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.a1).W(t,u)}},
hF:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jn()
y=P.n
z.shK(new H.aQ(0,0,[y,V.d_]))
z.shN(new H.aQ(0,0,[y,V.d2]))
z.c=null
z.c=z.N(0,"Start")
y=z.N(0,"Start").D(0,"Bold")
x=V.a4(new H.Z("*"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Bold").D(0,"Bold")
x=new V.bt()
w=[V.bq]
x.sav(H.c([],w))
C.a.h(y.a,x)
y=V.a4(new H.Z("*"))
C.a.h(x.a,y)
y=z.N(0,"Bold").D(0,"BoldEnd")
x=V.a4(new H.Z("*"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").D(0,"Italic")
x=V.a4(new H.Z("_"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Italic").D(0,"Italic")
x=new V.bt()
x.sav(H.c([],w))
C.a.h(y.a,x)
y=V.a4(new H.Z("_"))
C.a.h(x.a,y)
y=z.N(0,"Italic").D(0,"ItalicEnd")
x=V.a4(new H.Z("_"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").D(0,"Code")
x=V.a4(new H.Z("`"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Code").D(0,"Code")
x=new V.bt()
x.sav(H.c([],w))
C.a.h(y.a,x)
y=V.a4(new H.Z("`"))
C.a.h(x.a,y)
y=z.N(0,"Code").D(0,"CodeEnd")
x=V.a4(new H.Z("`"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").D(0,"LinkHead")
x=V.a4(new H.Z("["))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"LinkHead").D(0,"LinkTail")
x=V.a4(new H.Z("|"))
C.a.h(y.a,x)
x=z.N(0,"LinkHead").D(0,"LinkEnd")
y=V.a4(new H.Z("]"))
C.a.h(x.a,y)
x.c=!0
x=z.N(0,"LinkHead").D(0,"LinkHead")
y=new V.bt()
y.sav(H.c([],w))
C.a.h(x.a,y)
x=V.a4(new H.Z("|]"))
C.a.h(y.a,x)
x=z.N(0,"LinkTail").D(0,"LinkEnd")
y=V.a4(new H.Z("]"))
C.a.h(x.a,y)
x.c=!0
x=z.N(0,"LinkTail").D(0,"LinkTail")
y=new V.bt()
y.sav(H.c([],w))
C.a.h(x.a,y)
x=V.a4(new H.Z("|]"))
C.a.h(y.a,x)
C.a.h(z.N(0,"Start").D(0,"Other").a,new V.h2())
x=z.N(0,"Other").D(0,"Other")
y=new V.bt()
y.sav(H.c([],w))
C.a.h(x.a,y)
x=V.a4(new H.Z("*_`["))
C.a.h(y.a,x)
x=z.N(0,"BoldEnd")
x.d=x.a.bd("Bold")
x=z.N(0,"ItalicEnd")
x.d=x.a.bd("Italic")
x=z.N(0,"CodeEnd")
x.d=x.a.bd("Code")
x=z.N(0,"LinkEnd")
x.d=x.a.bd("Link")
x=z.N(0,"Other")
x.d=x.a.bd("Other")
this.b=z},
p:{
j5:function(a,b){var z=new V.j4()
z.f5(a,!0)
return z}}},
j7:{"^":"m:21;a",
$1:function(a){P.eC(C.u,new V.j6(this.a))}},
j6:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.j.ak(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}}}],["","",,K,{"^":"",
fO:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=V.j5("Test 035",!0)
y=W.dJ(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.l.W(z.a,y)
x=[P.n]
z.dK(H.c(["A test of the bending a shape with the Material Light Shader. ","Not all of the shapes have predefined bend values."],x))
z.ik(H.c(["shapes"],x))
z.dK(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=C.x.cZ(x,"testCanvas")
if(w==null)H.r(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.jk(w,!0,!0,!0,!1)
u=new E.au()
u.a=""
u.b=!0
z=E.au
u.sfu(0,O.cI(z))
u.y.bj(u.gj7(),u.gj9())
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
u.sd1(0,null)
u.sb6(null)
u.sb6(U.aX(null))
t=new O.ie()
t.sfp(O.cI(V.ac))
t.e.bj(t.gh_(),t.gh0())
s=new O.aZ(t,"emission")
s.c=C.d
s.f=new V.a1(0,0,0)
t.f=s
s=new O.aZ(t,"ambient")
s.c=C.d
s.f=new V.a1(0,0,0)
t.r=s
s=new O.aZ(t,"diffuse")
s.c=C.d
s.f=new V.a1(0,0,0)
t.x=s
s=new O.aZ(t,"invDiffuse")
s.c=C.d
s.f=new V.a1(0,0,0)
t.y=s
s=new O.im(t,"specular")
s.c=C.d
s.f=new V.a1(0,0,0)
s.ch=100
t.z=s
s=new O.ij(t,"bump")
s.c=C.d
t.Q=s
t.ch=null
s=new O.aZ(t,"reflect")
s.c=C.d
s.f=new V.a1(0,0,0)
t.cx=s
s=new O.il(t,"refract")
s.c=C.d
s.f=new V.a1(0,0,0)
s.ch=1
t.cy=s
s=new O.ii(t,"alpha")
s.c=C.d
s.f=1
t.db=s
s=new D.hT()
s.bP(D.X)
s.sfC(H.c([],[D.bO]))
s.sho(H.c([],[D.eh]))
s.shJ(H.c([],[D.er]))
s.shS(H.c([],[D.ey]))
s.shT(H.c([],[D.ez]))
s.shU(H.c([],[D.eA]))
s.Q=null
s.ch=null
s.d0(s.gfZ(),s.ghi(),s.ghk())
t.dx=s
r=s.Q
if(r==null){r=D.G()
s.Q=r
s=r}else s=r
s.h(0,t.ghy())
s=t.dx
r=s.ch
if(r==null){r=D.G()
s.ch=r
s=r}else s=r
s.h(0,t.gh2())
t.dy=null
s=t.dx
q=V.f1()
r=U.aX(V.e8(V.ej(),q,new V.B(1,1,-3)))
p=new V.a1(1,1,1)
o=new D.bO()
o.c=new V.a1(1,1,1)
o.a=V.f2()
n=o.b
o.b=r
r.gB().h(0,o.gf9())
r=new D.A("mover",n,o.b,o,[U.a3])
r.b=!0
o.aC(r)
if(!o.c.q(0,p)){n=o.c
o.c=p
r=new D.A("color",n,p,o,[V.a1])
r.b=!0
o.aC(r)}s.h(0,o)
s=t.r
s.saq(0,new V.a1(0,0,1))
s=t.x
s.saq(0,new V.a1(0,1,0))
s=t.z
s.saq(0,new V.a1(1,0,0))
s=t.z
if(s.c===C.d){s.c=C.i
s.bO()
s.c7(100)
r=s.a
r.a=null
r.ae(null)}s.c7(10)
t.e.h(0,V.a9())
t.e.h(0,V.a9())
t.e.h(0,V.a9())
t.e.h(0,V.a9())
t.e.h(0,V.a9())
t.e.h(0,V.a9())
t.e.h(0,V.a9())
t.e.h(0,V.a9())
m=U.cL(null)
s=v.r
r=new U.jO()
o=U.cJ()
o.scU(0,!0)
o.scG(6.283185307179586)
o.scI(0)
o.sZ(0,0)
o.scH(100)
o.sT(0)
o.scq(0.5)
r.b=o
l=r.gaD()
o.gB().h(0,l)
o=U.cJ()
o.scU(0,!0)
o.scG(6.283185307179586)
o.scI(0)
o.sZ(0,0)
o.scH(100)
o.sT(0)
o.scq(0.5)
r.c=o
o.gB().h(0,l)
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
k=new X.aw(!1,!1,!1)
n=r.d
r.d=k
o=[X.aw]
l=new D.A("modifiers",n,k,r,o)
l.b=!0
r.J(l)
l=r.f
if(l!==!1){r.f=!1
l=new D.A("invertX",l,!1,r,[P.a5])
l.b=!0
r.J(l)}l=r.r
if(l!==!1){r.r=!1
l=new D.A("invertY",l,!1,r,[P.a5])
l.b=!0
r.J(l)}r.aW(s)
m.h(0,r)
s=v.r
r=new U.jN()
l=U.cJ()
l.scU(0,!0)
l.scG(6.283185307179586)
l.scI(0)
l.sZ(0,0)
l.scH(100)
l.sT(0)
l.scq(0.2)
r.b=l
l.gB().h(0,r.gaD())
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
k=new X.aw(!0,!1,!1)
n=r.c
r.c=k
l=new D.A("modifiers",n,k,r,o)
l.b=!0
r.J(l)
r.aW(s)
m.h(0,r)
s=v.r
r=new U.jP()
r.c=0.01
r.d=0
r.e=0
k=new X.aw(!1,!1,!1)
r.b=k
o=new D.A("modifiers",null,k,r,o)
o.b=!0
r.J(o)
r.aW(s)
m.h(0,r)
m.h(0,U.aX(V.cc(0,0,5)))
j=U.cL(null)
j.h(0,U.aX(V.cc(0.5,0,0)))
j.h(0,U.bx(0,1.7,0,0,0,0))
j.h(0,U.bx(0.5,0,0,0,0,0))
j.h(0,U.aX(V.cT(0.35)))
j.h(0,U.bx(-0.5,0,0,0,0,0))
j.h(0,U.bx(0,-1.7,0,0,0,0))
j.h(0,U.aX(V.cc(-0.5,0,0)))
i=U.cL(null)
i.h(0,U.bx(0,-1.4,0,0,0,0))
i.h(0,U.aX(V.cc(0.5,0,0)))
i.h(0,U.bx(0,1.4,0,0,0,0))
h=new M.hv()
h.sfb(0,O.cI(z))
h.d.bj(h.gh3(),h.gh4())
h.e=null
h.f=null
h.r=null
h.x=null
g=new X.iw()
g.c=1.0471975511965976
g.d=0.1
g.e=2000
g.sb6(null)
z=g.c
if(!$.o.$2(z,1.0471975511965976)){n=g.c
g.c=1.0471975511965976
z=new D.A("fov",n,1.0471975511965976,g,[P.p])
z.b=!0
g.aS(z)}z=g.d
if(!$.o.$2(z,0.1)){n=g.d
g.d=0.1
z=new D.A("near",n,0.1,g,[P.p])
z.b=!0
g.aS(z)}z=g.e
if(!$.o.$2(z,2000)){n=g.e
g.e=2000
z=new D.A("far",n,2000,g,[P.p])
z.b=!0
g.aS(z)}z=h.a
if(z!==g){if(z!=null)z.gB().K(0,h.gan())
n=h.a
h.a=g
g.gB().h(0,h.gan())
z=new D.A("camera",n,h.a,h,[X.dI])
z.b=!0
h.aE(z)}f=new X.hE()
z=new V.bi(0,0,0,1)
f.a=z
f.b=!0
f.c=2000
f.d=!0
f.e=0
f.f=!1
z=$.eo
if(z==null){z=V.en(0,0,1,1)
$.eo=z}f.r=z
z=h.b
if(z!==f){if(z!=null)z.gB().K(0,h.gan())
n=h.b
h.b=f
f.gB().h(0,h.gan())
z=new D.A("target",n,h.b,h,[X.ev])
z.b=!0
h.aE(z)}h.seB(null)
h.seB(t)
h.d.h(0,u)
h.a.sb6(m)
z=h.e
if(z==null){z=D.G()
h.e=z}z.h(0,new K.m2(j,i,t))
z=v.d
if(z!==h){if(z!=null)z.gB().K(0,v.gd4())
v.d=h
h.gB().h(0,v.gd4())
v.f7()}z=new K.ma(u)
s=new V.iL("shapes",!0)
x=C.x.cZ(x,"shapes")
s.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
s.dJ(0,"Cuboid",new K.m3(z),!0)
s.aJ(0,"Cylinder",new K.m4(z))
s.aJ(0,"Cone",new K.m5(z))
s.aJ(0,"Sphere",new K.m6(z))
s.aJ(0,"Toroid",new K.m7(z))
s.aJ(0,"Knot",new K.m8(z))
s.aJ(0,"Grid",new K.m9(z))
V.mh(v)},
m2:{"^":"m:8;a,b,c",
$1:function(a){var z,y,x,w
z=H.h(H.f(a,"$isx"),"$iset").c
y=this.a.al(z,null)
x=this.b.al(z,null)
w=this.c
w.e.m(0,0,y)
w.e.m(0,1,x)
w.e.m(0,2,y)
w.e.m(0,3,x)
w.e.m(0,4,y)
w.e.m(0,5,x)
w.e.m(0,6,y)
w.e.m(0,7,x)}},
ma:{"^":"m:49;a",
$1:function(a){a.ag()
this.a.sd1(0,a)}},
m3:{"^":"m:0;a",
$0:function(){this.a.$1(F.fE(30,null,null,30))}},
m4:{"^":"m:0;a",
$0:function(){this.a.$1(F.fF(1,!0,!0,100,20,1))}},
m5:{"^":"m:0;a",
$0:function(){this.a.$1(F.fF(1,!0,!1,30,12,0))}},
m6:{"^":"m:0;a",
$0:function(){this.a.$1(F.mj(20,null,1,20))}},
m7:{"^":"m:0;a",
$0:function(){this.a.$1(F.mn(30,1.5,15,0.25))}},
m8:{"^":"m:0;a",
$0:function(){this.a.$1(F.m_(120,1,2,12,0.1,3))}},
m9:{"^":"m:0;a",
$0:function(){this.a.$1(F.lP(4,null,4))}}},1]]
setupProgram(dart,0,0)
J.N=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e0.prototype
return J.hN.prototype}if(typeof a=="string")return J.bR.prototype
if(a==null)return J.e1.prototype
if(typeof a=="boolean")return J.hM.prototype
if(a.constructor==Array)return J.aY.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.ct(a)}
J.bd=function(a){if(typeof a=="string")return J.bR.prototype
if(a==null)return a
if(a.constructor==Array)return J.aY.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.ct(a)}
J.fJ=function(a){if(a==null)return a
if(a.constructor==Array)return J.aY.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.ct(a)}
J.lM=function(a){if(typeof a=="number")return J.bQ.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bX.prototype
return a}
J.lN=function(a){if(typeof a=="number")return J.bQ.prototype
if(typeof a=="string")return J.bR.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bX.prototype
return a}
J.du=function(a){if(typeof a=="string")return J.bR.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bX.prototype
return a}
J.az=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.ct(a)}
J.F=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).q(a,b)}
J.fV=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lM(a).P(a,b)}
J.dy=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lN(a).k(a,b)}
J.fW=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lZ(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bd(a).j(a,b)}
J.fX=function(a,b,c,d){return J.az(a).fl(a,b,c,d)}
J.fY=function(a,b){return J.du(a).F(a,b)}
J.cA=function(a,b,c){return J.az(a).hv(a,b,c)}
J.dz=function(a,b){return J.az(a).W(a,b)}
J.fZ=function(a,b){return J.du(a).X(a,b)}
J.cB=function(a,b,c){return J.bd(a).iC(a,b,c)}
J.cC=function(a,b){return J.fJ(a).a9(a,b)}
J.h_=function(a,b,c,d){return J.az(a).iR(a,b,c,d)}
J.dA=function(a){return J.az(a).gcn(a)}
J.bK=function(a){return J.N(a).gU(a)}
J.bL=function(a){return J.fJ(a).ga0(a)}
J.aA=function(a){return J.bd(a).gn(a)}
J.h0=function(a,b){return J.az(a).jp(a,b)}
J.h1=function(a,b){return J.az(a).sjA(a,b)}
J.ab=function(a){return J.N(a).i(a)}
I.af=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.w=W.h6.prototype
C.n=W.cH.prototype
C.l=W.dU.prototype
C.N=W.hF.prototype
C.x=W.hH.prototype
C.O=J.L.prototype
C.a=J.aY.prototype
C.h=J.e0.prototype
C.o=J.e1.prototype
C.j=J.bQ.prototype
C.c=J.bR.prototype
C.V=J.bS.prototype
C.A=W.hS.prototype
C.a0=W.is.prototype
C.E=J.ix.prototype
C.b=P.cX.prototype
C.a1=W.cg.prototype
C.a2=W.jg.prototype
C.F=W.jh.prototype
C.v=J.bX.prototype
C.G=W.bB.prototype
C.H=W.kb.prototype
C.J=new P.h5(!1)
C.I=new P.h4(C.J)
C.K=new P.iv()
C.L=new P.jX()
C.k=new P.kI()
C.d=new A.c4(0,"ColorSourceType.None")
C.i=new A.c4(1,"ColorSourceType.Solid")
C.e=new A.c4(2,"ColorSourceType.Texture2D")
C.f=new A.c4(3,"ColorSourceType.TextureCube")
C.u=new P.bk(0)
C.M=new P.bk(5e6)
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
C.y=function(hooks) { return hooks; }

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
C.z=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=H.c(I.af([127,2047,65535,1114111]),[P.l])
C.p=H.c(I.af([0,0,32776,33792,1,10240,0,0]),[P.l])
C.q=H.c(I.af([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.r=H.c(I.af([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.X=H.c(I.af([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.Y=H.c(I.af([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.t=H.c(I.af([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.C=H.c(I.af([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.Z=H.c(I.af([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.D=H.c(I.af([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.W=H.c(I.af([]),[P.n])
C.a_=new H.hi(0,{},C.W,[P.n,P.n])
C.m=new P.jQ(!1)
$.at=0
$.bh=null
$.dD=null
$.dl=!1
$.fL=null
$.fA=null
$.fR=null
$.cs=null
$.cv=null
$.dv=null
$.b8=null
$.bG=null
$.bH=null
$.dm=!1
$.M=C.k
$.dS=null
$.dR=null
$.dQ=null
$.dP=null
$.o=V.io()
$.eb=null
$.ei=null
$.bu=null
$.eo=null
$.eX=null
$.f0=null
$.eZ=null
$.f_=null
$.ck=null
$.eY=null
$.eg=null
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
I.$lazy(y,x,w)}})(["dO","$get$dO",function(){return H.fK("_$dart_dartClosure")},"cN","$get$cN",function(){return H.fK("_$dart_js")},"eG","$get$eG",function(){return H.ax(H.ci({
toString:function(){return"$receiver$"}}))},"eH","$get$eH",function(){return H.ax(H.ci({$method$:null,
toString:function(){return"$receiver$"}}))},"eI","$get$eI",function(){return H.ax(H.ci(null))},"eJ","$get$eJ",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eN","$get$eN",function(){return H.ax(H.ci(void 0))},"eO","$get$eO",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eL","$get$eL",function(){return H.ax(H.eM(null))},"eK","$get$eK",function(){return H.ax(function(){try{null.$method$}catch(z){return z.message}}())},"eQ","$get$eQ",function(){return H.ax(H.eM(void 0))},"eP","$get$eP",function(){return H.ax(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dh","$get$dh",function(){return P.kc()},"bI","$get$bI",function(){return[]},"eW","$get$eW",function(){return P.jU()},"f8","$get$f8",function(){return H.iq(H.b7(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))},"fp","$get$fp",function(){return P.iQ("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fw","$get$fw",function(){return P.ll()},"dN","$get$dN",function(){return{}},"f5","$get$f5",function(){return Z.an(0)},"f3","$get$f3",function(){return Z.an(511)},"aJ","$get$aJ",function(){return Z.an(1)},"aI","$get$aI",function(){return Z.an(2)},"aH","$get$aH",function(){return Z.an(4)},"aK","$get$aK",function(){return Z.an(8)},"aL","$get$aL",function(){return Z.an(16)},"bz","$get$bz",function(){return Z.an(32)},"bA","$get$bA",function(){return Z.an(64)},"f4","$get$f4",function(){return Z.an(96)},"b5","$get$b5",function(){return Z.an(128)},"aG","$get$aG",function(){return Z.an(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.z},{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aq]},{func:1,ret:P.z,args:[F.aa,P.p,P.p]},{func:1,ret:P.z,args:[,,]},{func:1,ret:-1,args:[P.l,[P.q,E.au]]},{func:1,ret:P.z,args:[D.x]},{func:1,ret:P.z,args:[F.a2]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.a6]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:V.S,args:[P.p]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bo]},{func:1,ret:-1,args:[P.l,[P.q,V.ac]]},{func:1,ret:P.n,args:[P.l]},{func:1,ret:-1,args:[P.l,[P.q,U.a3]]},{func:1,ret:P.z,args:[W.a6]},{func:1,ret:-1,args:[P.l,[P.q,D.X]]},{func:1,ret:P.z,args:[,]},{func:1,ret:P.p},{func:1,ret:W.W,args:[W.K]},{func:1,ret:-1,args:[P.n],opt:[,]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,ret:P.z,args:[P.ag]},{func:1,ret:P.z,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:P.z,args:[,],opt:[,]},{func:1,ret:P.a5,args:[W.K]},{func:1,ret:P.a5,args:[P.p,P.p]},{func:1,ret:-1,args:[W.bB]},{func:1,args:[W.a6]},{func:1,ret:P.a5,args:[[P.q,D.X]]},{func:1,ret:P.J,args:[,,]},{func:1,ret:-1,args:[P.n,P.l]},{func:1,ret:P.z,args:[P.n,,]},{func:1,ret:P.l,args:[[P.b,P.l],P.l]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:P.z,args:[P.n]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,ret:[P.H,P.n,P.n],args:[[P.H,P.n,P.n],P.n]},{func:1,ret:P.n,args:[P.n]},{func:1,ret:P.z,args:[P.b1]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[F.cf]},{func:1,ret:P.J,args:[P.l]},{func:1,ret:[P.aM,,],args:[,]}]
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
if(x==y)H.mm(d||a)
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
Isolate.af=a.af
Isolate.ds=a.ds
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
if(typeof dartMainRunner==="function")dartMainRunner(K.fO,[])
else K.fO([])})})()
//# sourceMappingURL=test.dart.js.map
