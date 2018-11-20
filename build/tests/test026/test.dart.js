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
b6.$isb=b5
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
var d=supportsDirectProtoAccess&&b2!="b"
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dP(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dR=function(){}
var dart=[["","",,H,{"^":"",nO:{"^":"b;a"}}],["","",,J,{"^":"",
dV:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cL:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dU==null){H.nc()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.cB("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d3()]
if(v!=null)return v
v=H.ni(a)
if(v!=null)return v
if(typeof a=="function")return C.a6
y=Object.getPrototypeOf(a)
if(y==null)return C.M
if(y===Object.prototype)return C.M
if(typeof w=="function"){Object.defineProperty(w,$.$get$d3(),{value:C.B,enumerable:false,writable:true,configurable:true})
return C.B}return C.B},
H:{"^":"b;",
u:function(a,b){return a===b},
gY:function(a){return H.bC(a)},
i:["fp",function(a){return"Instance of '"+H.b9(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
iN:{"^":"H;",
i:function(a){return String(a)},
gY:function(a){return a?519018:218159},
$isM:1},
eC:{"^":"H;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gY:function(a){return 0},
$isE:1},
d4:{"^":"H;",
gY:function(a){return 0},
i:["fs",function(a){return String(a)}]},
jx:{"^":"d4;"},
c7:{"^":"d4;"},
c_:{"^":"d4;",
i:function(a){var z=a[$.$get$ej()]
if(z==null)return this.fs(a)
return"JavaScript function for "+H.i(J.ae(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbV:1},
b5:{"^":"H;$ti",
h:function(a,b){H.x(b,H.t(a,0))
if(!!a.fixed$length)H.r(P.U("add"))
a.push(b)},
kp:function(a,b){var z
if(!!a.fixed$length)H.r(P.U("removeAt"))
z=a.length
if(b>=z)throw H.d(P.c5(b,null,null))
return a.splice(b,1)[0]},
L:function(a,b){var z
if(!!a.fixed$length)H.r(P.U("remove"))
for(z=0;z<a.length;++z)if(J.I(a[z],b)){a.splice(z,1)
return!0}return!1},
a_:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.aH(a))}},
k:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.q(z,y,H.i(a[y]))
return z.join(b)},
jW:function(a){return this.k(a,"")},
jO:function(a,b,c,d){var z,y,x
H.x(b,d)
H.l(c,{func:1,ret:d,args:[d,H.t(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.d(P.aH(a))}return y},
jN:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.M,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.d(P.aH(a))}throw H.d(H.cq())},
jM:function(a,b){return this.jN(a,b,null)},
aa:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fo:function(a,b,c){if(b<0||b>a.length)throw H.d(P.a_(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.a_(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.t(a,0)])
return H.c(a.slice(b,c),[H.t(a,0)])},
gjL:function(a){if(a.length>0)return a[0]
throw H.d(H.cq())},
gaz:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.cq())},
dY:function(a,b){var z,y
H.l(b,{func:1,ret:P.M,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aH(a))}return!1},
X:function(a,b){var z
for(z=0;z<a.length;++z)if(J.I(a[z],b))return!0
return!1},
i:function(a){return P.d2(a,"[","]")},
gU:function(a){return new J.ax(a,a.length,0,[H.t(a,0)])},
gY:function(a){return H.bC(a)},
gp:function(a){return a.length},
sp:function(a,b){if(!!a.fixed$length)H.r(P.U("set length"))
if(b<0)throw H.d(P.a_(b,0,null,"newLength",null))
a.length=b},
l:function(a,b){if(b>=a.length||b<0)throw H.d(H.bl(a,b))
return a[b]},
q:function(a,b,c){H.x(c,H.t(a,0))
if(!!a.immutable$list)H.r(P.U("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bl(a,b))
a[b]=c},
$isp:1,
$isa:1,
m:{
iM:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.cU(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a_(a,0,4294967295,"length",null))
return J.ez(new Array(a),b)},
ez:function(a,b){return J.cr(H.c(a,[b]))},
cr:function(a){H.ce(a)
a.fixed$length=Array
return a}}},
nN:{"^":"b5;$ti"},
ax:{"^":"b;a,b,c,0d,$ti",
sdw:function(a){this.d=H.x(a,H.t(this,0))},
gK:function(){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.z(z))
x=this.c
if(x>=y){this.sdw(null)
return!1}this.sdw(z[x]);++this.c
return!0},
$isaX:1},
bY:{"^":"H;",
kE:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.U(""+a+".toInt()"))},
cO:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.U(""+a+".floor()"))},
ap:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.U(""+a+".round()"))},
eX:function(a,b){var z,y
if(b>20)throw H.d(P.a_(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bl:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.d(P.a_(b,2,36,"radix",null))
z=a.toString(b)
if(C.c.a0(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.U("Unexpected toString result: "+z))
x=y.length
if(1>=x)return H.f(y,1)
z=y[1]
if(3>=x)return H.f(y,3)
w=+y[3]
x=y[2]
if(x!=null){z+=x
w-=x.length}return z+C.c.C("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gY:function(a){return a&0x1FFFFFFF},
C:function(a,b){if(typeof b!=="number")throw H.d(H.ai(b))
return a*b},
bq:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fw:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dQ(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.dQ(a,b)},
dQ:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.U("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
aR:function(a,b){var z
if(a>0)z=this.dO(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
is:function(a,b){if(b<0)throw H.d(H.ai(b))
return this.dO(a,b)},
dO:function(a,b){return b>31?0:a>>>b},
V:function(a,b){if(typeof b!=="number")throw H.d(H.ai(b))
return a<b},
$isq:1,
$isak:1},
eB:{"^":"bY;",$ism:1},
eA:{"^":"bY;"},
bZ:{"^":"H;",
a0:function(a,b){if(b<0)throw H.d(H.bl(a,b))
if(b>=a.length)H.r(H.bl(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.d(H.bl(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.C(b)
if(typeof b!=="string")throw H.d(P.cU(b,null,null))
return a+b},
b0:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ai(b))
c=P.b0(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ab:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ai(c))
if(typeof c!=="number")return c.V()
if(c<0||c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a6:function(a,b){return this.ab(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ai(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.V()
if(b<0)throw H.d(P.c5(b,null,null))
if(b>c)throw H.d(P.c5(b,null,null))
if(c>a.length)throw H.d(P.c5(c,null,null))
return a.substring(b,c)},
ar:function(a,b){return this.t(a,b,null)},
kH:function(a){return a.toLowerCase()},
C:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.S)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
kd:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.C(c,z)+a},
af:function(a,b){return this.kd(a,b," ")},
eB:function(a,b,c){var z
if(c<0||c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
eA:function(a,b){return this.eB(a,b,0)},
jp:function(a,b,c){if(c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
return H.hC(a,b,c)},
i:function(a){return a},
gY:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gp:function(a){return a.length},
$iseS:1,
$ish:1}}],["","",,H,{"^":"",
cM:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
cq:function(){return new P.di("No element")},
iL:function(){return new P.di("Too many elements")},
v:{"^":"kK;a",
gp:function(a){return this.a.length},
l:function(a,b){return C.c.a0(this.a,b)},
$asdz:function(){return[P.m]},
$asT:function(){return[P.m]},
$asp:function(){return[P.m]},
$asa:function(){return[P.m]}},
er:{"^":"p;"},
ct:{"^":"er;$ti",
gU:function(a){return new H.d6(this,this.gp(this),0,[H.a6(this,"ct",0)])},
d3:function(a,b){return this.fq(0,H.l(b,{func:1,ret:P.M,args:[H.a6(this,"ct",0)]}))}},
d6:{"^":"b;a,b,c,0d,$ti",
sb3:function(a){this.d=H.x(a,H.t(this,0))},
gK:function(){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.bn(z)
x=y.gp(z)
if(this.b!==x)throw H.d(P.aH(z))
w=this.c
if(w>=x){this.sb3(null)
return!1}this.sb3(y.aa(z,w));++this.c
return!0},
$isaX:1},
j9:{"^":"p;a,b,$ti",
gU:function(a){return new H.ja(J.b3(this.a),this.b,this.$ti)},
gp:function(a){return J.ar(this.a)},
aa:function(a,b){return this.b.$1(J.cg(this.a,b))},
$asp:function(a,b){return[b]}},
ja:{"^":"aX;0a,b,c,$ti",
sb3:function(a){this.a=H.x(a,H.t(this,1))},
E:function(){var z=this.b
if(z.E()){this.sb3(this.c.$1(z.gK()))
return!0}this.sb3(null)
return!1},
gK:function(){return this.a},
$asaX:function(a,b){return[b]}},
jb:{"^":"ct;a,b,$ti",
gp:function(a){return J.ar(this.a)},
aa:function(a,b){return this.b.$1(J.cg(this.a,b))},
$asct:function(a,b){return[b]},
$asp:function(a,b){return[b]}},
dD:{"^":"p;a,b,$ti",
gU:function(a){return new H.le(J.b3(this.a),this.b,this.$ti)}},
le:{"^":"aX;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gK()))return!0
return!1},
gK:function(){return this.a.gK()}},
cn:{"^":"b;$ti"},
dz:{"^":"b;$ti",
q:function(a,b,c){H.x(c,H.a6(this,"dz",0))
throw H.d(P.U("Cannot modify an unmodifiable list"))}},
kK:{"^":"cs+dz;"}}],["","",,H,{"^":"",
i6:function(){throw H.d(P.U("Cannot modify unmodifiable Map"))},
bq:function(a){var z,y
z=H.C(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
n5:function(a){return init.types[H.ab(a)]},
nf:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.N(a).$isat},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ae(a)
if(typeof z!=="string")throw H.d(H.ai(a))
return z},
bC:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jI:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.C(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.a_(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.c.H(w,u)|32)>x)return}return parseInt(a,b)},
b9:function(a){return H.jz(a)+H.dM(H.b2(a),0,null)},
jz:function(a){var z,y,x,w,v,u,t,s,r
z=J.N(a)
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
return H.bq(w.length>1&&C.c.H(w,0)===36?C.c.ar(w,1):w)},
jA:function(){if(!!self.location)return self.location.href
return},
eX:function(a){var z,y,x,w,v
H.ce(a)
z=J.ar(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jJ:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.ai(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.aR(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.ai(w))}return H.eX(z)},
eY:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.ai(x))
if(x<0)throw H.d(H.ai(x))
if(x>65535)return H.jJ(a)}return H.eX(a)},
jK:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
ba:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.aR(z,10))>>>0,56320|z&1023)}}throw H.d(P.a_(a,0,1114111,null,null))},
b8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jH:function(a){var z=H.b8(a).getFullYear()+0
return z},
jF:function(a){var z=H.b8(a).getMonth()+1
return z},
jB:function(a){var z=H.b8(a).getDate()+0
return z},
jC:function(a){var z=H.b8(a).getHours()+0
return z},
jE:function(a){var z=H.b8(a).getMinutes()+0
return z},
jG:function(a){var z=H.b8(a).getSeconds()+0
return z},
jD:function(a){var z=H.b8(a).getMilliseconds()+0
return z},
B:function(a){throw H.d(H.ai(a))},
f:function(a,b){if(a==null)J.ar(a)
throw H.d(H.bl(a,b))},
bl:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
z=H.ab(J.ar(a))
if(!(b<0)){if(typeof z!=="number")return H.B(z)
y=b>=z}else y=!0
if(y)return P.b4(b,a,"index",null,z)
return P.c5(b,"index",null)},
n_:function(a,b,c){if(a>c)return new P.cw(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cw(a,c,!0,b,"end","Invalid value")
return new P.aG(!0,b,"end",null)},
ai:function(a){return new P.aG(!0,a,null,null)},
mP:function(a){if(typeof a!=="number")throw H.d(H.ai(a))
return a},
d:function(a){var z
if(a==null)a=new P.eR()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hD})
z.name=""}else z.toString=H.hD
return z},
hD:function(){return J.ae(this.dartException)},
r:function(a){throw H.d(a)},
z:function(a){throw H.d(P.aH(a))},
a8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nE(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.aR(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d5(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eQ(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fn()
u=$.$get$fo()
t=$.$get$fp()
s=$.$get$fq()
r=$.$get$fu()
q=$.$get$fv()
p=$.$get$fs()
$.$get$fr()
o=$.$get$fx()
n=$.$get$fw()
m=v.ad(y)
if(m!=null)return z.$1(H.d5(H.C(y),m))
else{m=u.ad(y)
if(m!=null){m.method="call"
return z.$1(H.d5(H.C(y),m))}else{m=t.ad(y)
if(m==null){m=s.ad(y)
if(m==null){m=r.ad(y)
if(m==null){m=q.ad(y)
if(m==null){m=p.ad(y)
if(m==null){m=s.ad(y)
if(m==null){m=o.ad(y)
if(m==null){m=n.ad(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eQ(H.C(y),m))}}return z.$1(new H.kJ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f7()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aG(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f7()
return a},
bo:function(a){var z
if(a==null)return new H.h2(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h2(a)},
n2:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.q(0,a[y],a[x])}return b},
ne:function(a,b,c,d,e,f){H.e(a,"$isbV")
switch(H.ab(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.u("Unsupported number of arguments for wrapped closure"))},
bk:function(a,b){var z
H.ab(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ne)
a.$identity=z
return z},
i2:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.N(d).$isa){z.$reflectionInfo=d
x=H.jR(z).r}else x=d
w=e?Object.create(new H.kd().constructor.prototype):Object.create(new H.cW(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ay
if(typeof u!=="number")return u.G()
$.ay=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.ef(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.n5,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.e8:H.cX
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.d("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ef(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
i_:function(a,b,c,d){var z=H.cX
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ef:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.i1(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.i_(y,!w,z,b)
if(y===0){w=$.ay
if(typeof w!=="number")return w.G()
$.ay=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bs
if(v==null){v=H.ci("self")
$.bs=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ay
if(typeof w!=="number")return w.G()
$.ay=w+1
t+=w
w="return function("+t+"){return this."
v=$.bs
if(v==null){v=H.ci("self")
$.bs=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
i0:function(a,b,c,d){var z,y
z=H.cX
y=H.e8
switch(b?-1:a){case 0:throw H.d(H.k_("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
i1:function(a,b){var z,y,x,w,v,u,t,s
z=$.bs
if(z==null){z=H.ci("self")
$.bs=z}y=$.e7
if(y==null){y=H.ci("receiver")
$.e7=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.i0(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.ay
if(typeof y!=="number")return y.G()
$.ay=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.ay
if(typeof y!=="number")return y.G()
$.ay=y+1
return new Function(z+y+"}")()},
dP:function(a,b,c,d,e,f,g){return H.i2(a,b,H.ab(c),d,!!e,!!f,g)},
C:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.aw(a,"String"))},
n0:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aw(a,"double"))},
nt:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aw(a,"num"))},
dN:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.aw(a,"bool"))},
ab:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.aw(a,"int"))},
hA:function(a,b){throw H.d(H.aw(a,H.bq(H.C(b).substring(3))))},
nv:function(a,b){throw H.d(H.hZ(a,H.bq(H.C(b).substring(3))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.N(a)[b])return a
H.hA(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else z=!0
if(z)return a
H.nv(a,b)},
ce:function(a){if(a==null)return a
if(!!J.N(a).$isa)return a
throw H.d(H.aw(a,"List<dynamic>"))},
hx:function(a,b){var z
if(a==null)return a
z=J.N(a)
if(!!z.$isa)return a
if(z[b])return a
H.hA(a,b)},
ht:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.ab(z)]
else return a.$S()}return},
cb:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.ht(J.N(a))
if(z==null)return!1
return H.hf(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.dJ)return a
$.dJ=!0
try{if(H.cb(a,b))return a
z=H.cP(b)
y=H.aw(a,z)
throw H.d(y)}finally{$.dJ=!1}},
dS:function(a,b){if(a!=null&&!H.dO(a,b))H.r(H.aw(a,H.cP(b)))
return a},
hl:function(a){var z,y
z=J.N(a)
if(!!z.$isn){y=H.ht(z)
if(y!=null)return H.cP(y)
return"Closure"}return H.b9(a)},
nC:function(a){throw H.d(new P.i9(H.C(a)))},
hu:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b2:function(a){if(a==null)return
return a.$ti},
og:function(a,b,c){return H.bp(a["$as"+H.i(c)],H.b2(b))},
cc:function(a,b,c,d){var z
H.C(c)
H.ab(d)
z=H.bp(a["$as"+H.i(c)],H.b2(b))
return z==null?null:z[d]},
a6:function(a,b,c){var z
H.C(b)
H.ab(c)
z=H.bp(a["$as"+H.i(b)],H.b2(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.ab(b)
z=H.b2(a)
return z==null?null:z[b]},
cP:function(a){return H.b1(a,null)},
b1:function(a,b){var z,y
H.k(b,"$isa",[P.h],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bq(a[0].builtin$cls)+H.dM(a,1,b)
if(typeof a=="function")return H.bq(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ab(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.i(b[y])}if('func' in a)return H.mF(a,b)
if('futureOr' in a)return"FutureOr<"+H.b1("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mF:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.h]
H.k(b,"$isa",z,"$asa")
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
if(q!=null&&q!==P.b)t+=" extends "+H.b1(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b1(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b1(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b1(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.n1(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.C(z[l])
n=n+m+H.b1(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dM:function(a,b,c){var z,y,x,w,v,u
H.k(c,"$isa",[P.h],"$asa")
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
bO:function(a,b,c,d){var z,y
H.C(b)
H.ce(c)
H.C(d)
if(a==null)return!1
z=H.b2(a)
y=J.N(a)
if(y[b]==null)return!1
return H.ho(H.bp(y[d],z),null,c,null)},
k:function(a,b,c,d){H.C(b)
H.ce(c)
H.C(d)
if(a==null)return a
if(H.bO(a,b,c,d))return a
throw H.d(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bq(b.substring(3))+H.dM(c,0,null),init.mangledGlobalNames)))},
ho:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aq(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aq(a[y],b,c[y],d))return!1
return!0},
oe:function(a,b,c){return a.apply(b,H.bp(J.N(b)["$as"+H.i(c)],H.b2(b)))},
hw:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="E"||a===-1||a===-2||H.hw(z)}return!1},
dO:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="E"||b===-1||b===-2||H.hw(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dO(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cb(a,b)}z=J.N(a).constructor
y=H.b2(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.aq(z,null,b,null)},
x:function(a,b){if(a!=null&&!H.dO(a,b))throw H.d(H.aw(a,H.cP(b)))
return a},
aq:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aq(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="E")return!0
if('func' in c)return H.hf(a,b,c,d)
if('func' in a)return c.builtin$cls==="bV"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aq("type" in a?a.type:null,b,x,d)
else if(H.aq(a,b,x,d))return!0
else{if(!('$is'+"by" in y.prototype))return!1
w=y.prototype["$as"+"by"]
v=H.bp(w,z?a.slice(1):null)
return H.aq(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ho(H.bp(r,z),b,u,d)},
hf:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aq(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aq(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aq(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aq(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.ns(m,b,l,d)},
ns:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aq(c[w],d,a[w],b))return!1}return!0},
of:function(a,b,c){Object.defineProperty(a,H.C(b),{value:c,enumerable:false,writable:true,configurable:true})},
ni:function(a){var z,y,x,w,v,u
z=H.C($.hv.$1(a))
y=$.cK[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cN[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.C($.hn.$2(a,z))
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
return u.i}if(v==="+")return H.hz(a,x)
if(v==="*")throw H.d(P.cB(z))
if(init.leafTags[z]===true){u=H.cO(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hz(a,x)},
hz:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dV(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cO:function(a){return J.dV(a,!1,null,!!a.$isat)},
nr:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cO(z)
else return J.dV(z,c,null,null)},
nc:function(){if(!0===$.dU)return
$.dU=!0
H.nd()},
nd:function(){var z,y,x,w,v,u,t,s
$.cK=Object.create(null)
$.cN=Object.create(null)
H.n8()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hB.$1(v)
if(u!=null){t=H.nr(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
n8:function(){var z,y,x,w,v,u,t
z=C.a3()
z=H.bj(C.a0,H.bj(C.a5,H.bj(C.E,H.bj(C.E,H.bj(C.a4,H.bj(C.a1,H.bj(C.a2(C.F),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hv=new H.n9(v)
$.hn=new H.na(u)
$.hB=new H.nb(t)},
bj:function(a,b){return a(b)||b},
hC:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dY:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i5:{"^":"b;$ti",
i:function(a){return P.d7(this)},
q:function(a,b,c){H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
return H.i6()},
$isJ:1},
i7:{"^":"i5;a,b,c,$ti",
gp:function(a){return this.a},
bC:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
l:function(a,b){if(!this.bC(b))return
return this.dA(b)},
dA:function(a){return this.b[H.C(a)]},
a_:function(a,b){var z,y,x,w,v
z=H.t(this,1)
H.l(b,{func:1,ret:-1,args:[H.t(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.x(this.dA(v),z))}}},
jQ:{"^":"b;a,b,c,d,e,f,r,0x",m:{
jR:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cr(z)
y=z[0]
x=z[1]
return new H.jQ(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kv:{"^":"b;a,b,c,d,e,f",
ad:function(a){var z,y,x
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
aE:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kv(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cA:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ft:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ju:{"^":"a3;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
m:{
eQ:function(a,b){return new H.ju(a,b==null?null:b.method)}}},
iQ:{"^":"a3;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
m:{
d5:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iQ(a,y,z?null:b.receiver)}}},
kJ:{"^":"a3;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nE:{"^":"n:18;a",
$1:function(a){if(!!J.N(a).$isa3)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h2:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaL:1},
n:{"^":"b;",
i:function(a){return"Closure '"+H.b9(this).trim()+"'"},
gf5:function(){return this},
$isbV:1,
gf5:function(){return this}},
fc:{"^":"n;"},
kd:{"^":"fc;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bq(z)+"'"}},
cW:{"^":"fc;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cW))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gY:function(a){var z,y
z=this.c
if(z==null)y=H.bC(this.a)
else y=typeof z!=="object"?J.bQ(z):H.bC(z)
return(y^H.bC(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.b9(z)+"'")},
m:{
cX:function(a){return a.a},
e8:function(a){return a.c},
ci:function(a){var z,y,x,w,v
z=new H.cW("self","target","receiver","name")
y=J.cr(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kw:{"^":"a3;a",
i:function(a){return this.a},
m:{
aw:function(a,b){return new H.kw("TypeError: "+H.i(P.cl(a))+": type '"+H.hl(a)+"' is not a subtype of type '"+b+"'")}}},
hY:{"^":"a3;a",
i:function(a){return this.a},
m:{
hZ:function(a,b){return new H.hY("CastError: "+H.i(P.cl(a))+": type '"+H.hl(a)+"' is not a subtype of type '"+b+"'")}}},
jZ:{"^":"a3;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
m:{
k_:function(a){return new H.jZ(a)}}},
aY:{"^":"eI;a,0b,0c,0d,0e,0f,r,$ti",
gp:function(a){return this.a},
gjV:function(a){return this.a===0},
gay:function(){return new H.iX(this,[H.t(this,0)])},
bC:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dt(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dt(y,a)}else return this.jS(a)},
jS:function(a){var z=this.d
if(z==null)return!1
return this.cR(this.c9(z,this.cQ(a)),a)>=0},
l:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bu(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bu(w,b)
x=y==null?null:y.b
return x}else return this.jT(b)},
jT:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c9(z,this.cQ(a))
x=this.cR(y,a)
if(x<0)return
return y[x].b},
q:function(a,b,c){var z,y
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cd()
this.b=z}this.di(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cd()
this.c=y}this.di(y,b,c)}else this.jU(b,c)},
jU:function(a,b){var z,y,x,w
H.x(a,H.t(this,0))
H.x(b,H.t(this,1))
z=this.d
if(z==null){z=this.cd()
this.d=z}y=this.cQ(a)
x=this.c9(z,y)
if(x==null)this.cm(z,y,[this.c3(a,b)])
else{w=this.cR(x,a)
if(w>=0)x[w].b=b
else x.push(this.c3(a,b))}},
a_:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aH(this))
z=z.c}},
di:function(a,b,c){var z
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
z=this.bu(a,b)
if(z==null)this.cm(a,b,this.c3(b,c))
else z.b=c},
fU:function(){this.r=this.r+1&67108863},
c3:function(a,b){var z,y
z=new H.iW(H.x(a,H.t(this,0)),H.x(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fU()
return z},
cQ:function(a){return J.bQ(a)&0x3ffffff},
cR:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.I(a[y].a,b))return y
return-1},
i:function(a){return P.d7(this)},
bu:function(a,b){return a[b]},
c9:function(a,b){return a[b]},
cm:function(a,b,c){a[b]=c},
h8:function(a,b){delete a[b]},
dt:function(a,b){return this.bu(a,b)!=null},
cd:function(){var z=Object.create(null)
this.cm(z,"<non-identifier-key>",z)
this.h8(z,"<non-identifier-key>")
return z},
$iseE:1},
iW:{"^":"b;a,b,0c,0d"},
iX:{"^":"er;a,$ti",
gp:function(a){return this.a.a},
gU:function(a){var z,y
z=this.a
y=new H.iY(z,z.r,this.$ti)
y.c=z.e
return y}},
iY:{"^":"b;a,b,0c,0d,$ti",
sdj:function(a){this.d=H.x(a,H.t(this,0))},
gK:function(){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aH(z))
else{z=this.c
if(z==null){this.sdj(null)
return!1}else{this.sdj(z.a)
this.c=this.c.c
return!0}}},
$isaX:1},
n9:{"^":"n:18;a",
$1:function(a){return this.a(a)}},
na:{"^":"n:54;a",
$2:function(a,b){return this.a(a,b)}},
nb:{"^":"n:53;a",
$1:function(a){return this.a(H.C(a))}},
iO:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseS:1,
$isjS:1,
m:{
iP:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(P.V("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
n1:function(a){return J.ez(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nu:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bh:function(a){return a},
jo:function(a){return new Int8Array(a)},
aT:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bl(b,a))},
mz:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.n_(a,b,c))
return b},
dc:{"^":"H;",$isdc:1,$iskx:1,"%":";ArrayBufferView;db|fZ|h_|jp|h0|h1|b7"},
db:{"^":"dc;",
gp:function(a){return a.length},
$isat:1,
$asat:I.dR},
jp:{"^":"h_;",
l:function(a,b){H.aT(b,a,a.length)
return a[b]},
q:function(a,b,c){H.n0(c)
H.aT(b,a,a.length)
a[b]=c},
$ascn:function(){return[P.q]},
$asT:function(){return[P.q]},
$isp:1,
$asp:function(){return[P.q]},
$isa:1,
$asa:function(){return[P.q]},
"%":"Float32Array"},
b7:{"^":"h1;",
q:function(a,b,c){H.ab(c)
H.aT(b,a,a.length)
a[b]=c},
$ascn:function(){return[P.m]},
$asT:function(){return[P.m]},
$isp:1,
$asp:function(){return[P.m]},
$isa:1,
$asa:function(){return[P.m]}},
nP:{"^":"b7;",
l:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nQ:{"^":"b7;",
l:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nR:{"^":"b7;",
l:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nS:{"^":"b7;",
l:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nT:{"^":"b7;",
gp:function(a){return a.length},
l:function(a,b){H.aT(b,a,a.length)
return a[b]},
$iso1:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
eO:{"^":"b7;",
gp:function(a){return a.length},
l:function(a,b){H.aT(b,a,a.length)
return a[b]},
$iseO:1,
$isO:1,
"%":";Uint8Array"},
fZ:{"^":"db+T;"},
h_:{"^":"fZ+cn;"},
h0:{"^":"db+T;"},
h1:{"^":"h0+cn;"}}],["","",,P,{"^":"",
lg:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mM()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bk(new P.li(z),1)).observe(y,{childList:true})
return new P.lh(z,y,x)}else if(self.setImmediate!=null)return P.mN()
return P.mO()},
o5:[function(a){self.scheduleImmediate(H.bk(new P.lj(H.l(a,{func:1,ret:-1})),0))},"$1","mM",4,0,10],
o6:[function(a){self.setImmediate(H.bk(new P.lk(H.l(a,{func:1,ret:-1})),0))},"$1","mN",4,0,10],
o7:[function(a){P.dm(C.x,H.l(a,{func:1,ret:-1}))},"$1","mO",4,0,10],
dm:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.h.a7(a.a,1000)
return P.m1(z<0?0:z,b)},
fk:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bb]})
z=C.h.a7(a.a,1000)
return P.m2(z<0?0:z,b)},
mI:function(a,b){if(H.cb(a,{func:1,args:[P.b,P.aL]}))return H.l(a,{func:1,ret:null,args:[P.b,P.aL]})
if(H.cb(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.d(P.cU(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mH:function(){var z,y
for(;z=$.bi,z!=null;){$.bM=null
y=z.b
$.bi=y
if(y==null)$.bL=null
z.a.$0()}},
od:[function(){$.dK=!0
try{P.mH()}finally{$.bM=null
$.dK=!1
if($.bi!=null)$.$get$dE().$1(P.hp())}},"$0","hp",0,0,3],
hk:function(a){var z=new P.fQ(H.l(a,{func:1,ret:-1}))
if($.bi==null){$.bL=z
$.bi=z
if(!$.dK)$.$get$dE().$1(P.hp())}else{$.bL.b=z
$.bL=z}},
mL:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bi
if(z==null){P.hk(a)
$.bM=$.bL
return}y=new P.fQ(a)
x=$.bM
if(x==null){y.b=z
$.bM=y
$.bi=y}else{y.b=x.b
x.b=y
$.bM=y
if(y.b==null)$.bL=y}},
nw:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.S
if(C.l===y){P.cJ(null,null,C.l,a)
return}y.toString
P.cJ(null,null,y,H.l(y.cv(a),z))},
fj:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.S
if(y===C.l){y.toString
return P.dm(a,b)}return P.dm(a,H.l(y.cv(b),z))},
ks:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bb]}
H.l(b,z)
y=$.S
if(y===C.l){y.toString
return P.fk(a,b)}x=y.e0(b,P.bb)
$.S.toString
return P.fk(a,H.l(x,z))},
cI:function(a,b,c,d,e){var z={}
z.a=d
P.mL(new P.mJ(z,e))},
hg:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.S
if(y===c)return d.$0()
$.S=c
z=y
try{y=d.$0()
return y}finally{$.S=z}},
hh:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.S
if(y===c)return d.$1(e)
$.S=c
z=y
try{y=d.$1(e)
return y}finally{$.S=z}},
mK:function(a,b,c,d,e,f,g,h,i){var z,y
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
if(z)d=!(!z||!1)?c.cv(d):c.jf(d,-1)
P.hk(d)},
li:{"^":"n:29;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
lh:{"^":"n:50;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lj:{"^":"n:0;a",
$0:function(){this.a.$0()}},
lk:{"^":"n:0;a",
$0:function(){this.a.$0()}},
h4:{"^":"b;a,0b,c",
fS:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bk(new P.m4(this,b),0),a)
else throw H.d(P.U("`setTimeout()` not found."))},
fT:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bk(new P.m3(this,a,Date.now(),b),0),a)
else throw H.d(P.U("Periodic timer."))},
$isbb:1,
m:{
m1:function(a,b){var z=new P.h4(!0,0)
z.fS(a,b)
return z},
m2:function(a,b){var z=new P.h4(!1,0)
z.fT(a,b)
return z}}},
m4:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
m3:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.fw(w,x)}z.c=y
this.d.$1(z)}},
bg:{"^":"b;0a,b,c,d,e,$ti",
k5:function(a){if(this.c!==6)return!0
return this.b.b.d0(H.l(this.d,{func:1,ret:P.M,args:[P.b]}),a.a,P.M,P.b)},
jR:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.cb(z,{func:1,args:[P.b,P.aL]}))return H.dS(w.kx(z,a.a,a.b,null,y,P.aL),x)
else return H.dS(w.d0(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aS:{"^":"b;dP:a<,b,0ie:c<,$ti",
eW:function(a,b,c){var z,y,x,w
z=H.t(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.S
if(y!==C.l){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mI(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aS(0,$.S,[c])
w=b==null?1:3
this.dl(new P.bg(x,w,a,b,[z,c]))
return x},
kD:function(a,b){return this.eW(a,null,b)},
dl:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbg")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaS")
z=y.a
if(z<4){y.dl(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cJ(null,null,z,H.l(new P.lt(this,a),{func:1,ret:-1}))}},
dL:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbg")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaS")
y=u.a
if(y<4){u.dL(a)
return}this.a=y
this.c=u.c}z.a=this.by(a)
y=this.b
y.toString
P.cJ(null,null,y,H.l(new P.ly(z,this),{func:1,ret:-1}))}},
ci:function(){var z=H.e(this.c,"$isbg")
this.c=null
return this.by(z)},
by:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dn:function(a){var z,y,x
z=H.t(this,0)
H.dS(a,{futureOr:1,type:z})
y=this.$ti
if(H.bO(a,"$isby",y,"$asby"))if(H.bO(a,"$isaS",y,null))P.fU(a,this)
else P.lu(a,this)
else{x=this.ci()
H.x(a,z)
this.a=4
this.c=a
P.bH(this,x)}},
dq:function(a,b){var z
H.e(b,"$isaL")
z=this.ci()
this.a=8
this.c=new P.al(a,b)
P.bH(this,z)},
$isby:1,
m:{
lu:function(a,b){var z,y,x
b.a=1
try{a.eW(new P.lv(b),new P.lw(b),null)}catch(x){z=H.a8(x)
y=H.bo(x)
P.nw(new P.lx(b,z,y))}},
fU:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaS")
if(z>=4){y=b.ci()
b.a=a.a
b.c=a.c
P.bH(b,y)}else{y=H.e(b.c,"$isbg")
b.a=2
b.c=a
a.dL(y)}},
bH:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.cI(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bH(z.a,b)}y=z.a
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
if(p){H.e(r,"$isal")
y=y.b
u=r.a
t=r.b
y.toString
P.cI(null,null,y,u,t)
return}o=$.S
if(o==null?q!=null:o!==q)$.S=q
else o=null
y=b.c
if(y===8)new P.lB(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lA(x,b,r).$0()}else if((y&2)!==0)new P.lz(z,x,b).$0()
if(o!=null)$.S=o
y=x.b
if(!!J.N(y).$isby){if(y.a>=4){n=H.e(t.c,"$isbg")
t.c=null
b=t.by(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fU(y,t)
return}}m=b.b
n=H.e(m.c,"$isbg")
m.c=null
b=m.by(n)
y=x.a
u=x.b
if(!y){H.x(u,H.t(m,0))
m.a=4
m.c=u}else{H.e(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
lt:{"^":"n:0;a,b",
$0:function(){P.bH(this.a,this.b)}},
ly:{"^":"n:0;a,b",
$0:function(){P.bH(this.b,this.a.a)}},
lv:{"^":"n:29;a",
$1:function(a){var z=this.a
z.a=0
z.dn(a)}},
lw:{"^":"n:49;a",
$2:function(a,b){this.a.dq(a,H.e(b,"$isaL"))},
$1:function(a){return this.$2(a,null)}},
lx:{"^":"n:0;a,b,c",
$0:function(){this.a.dq(this.b,this.c)}},
lB:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eT(H.l(w.d,{func:1}),null)}catch(v){y=H.a8(v)
x=H.bo(v)
if(this.d){w=H.e(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.N(z).$isby){if(z instanceof P.aS&&z.gdP()>=4){if(z.gdP()===8){w=this.b
w.b=H.e(z.gie(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.kD(new P.lC(t),null)
w.a=!1}}},
lC:{"^":"n:48;a",
$1:function(a){return this.a}},
lA:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.x(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.d0(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a8(t)
y=H.bo(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
lz:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isal")
w=this.c
if(w.k5(z)&&w.e!=null){v=this.b
v.b=w.jR(z)
v.a=!1}}catch(u){y=H.a8(u)
x=H.bo(u)
w=H.e(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fQ:{"^":"b;a,0b"},
ke:{"^":"b;$ti",
gp:function(a){var z,y,x,w
z={}
y=new P.aS(0,$.S,[P.m])
z.a=0
x=H.t(this,0)
w=H.l(new P.kg(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.kh(z,y),{func:1,ret:-1})
W.a0(this.a,this.b,w,!1,x)
return y}},
kg:{"^":"n;a,b",
$1:function(a){H.x(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.t(this.b,0)]}}},
kh:{"^":"n:0;a,b",
$0:function(){this.b.dn(this.a.a)}},
dj:{"^":"b;$ti"},
kf:{"^":"b;"},
bb:{"^":"b;"},
al:{"^":"b;a,b",
i:function(a){return H.i(this.a)},
$isa3:1},
mv:{"^":"b;",$iso4:1},
mJ:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eR()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
lN:{"^":"mv;",
ky:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.l===$.S){a.$0()
return}P.hg(null,null,this,a,-1)}catch(x){z=H.a8(x)
y=H.bo(x)
P.cI(null,null,this,z,H.e(y,"$isaL"))}},
kz:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.l===$.S){a.$1(b)
return}P.hh(null,null,this,a,b,-1,c)}catch(x){z=H.a8(x)
y=H.bo(x)
P.cI(null,null,this,z,H.e(y,"$isaL"))}},
jf:function(a,b){return new P.lP(this,H.l(a,{func:1,ret:b}),b)},
cv:function(a){return new P.lO(this,H.l(a,{func:1,ret:-1}))},
e0:function(a,b){return new P.lQ(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eT:function(a,b){H.l(a,{func:1,ret:b})
if($.S===C.l)return a.$0()
return P.hg(null,null,this,a,b)},
d0:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.S===C.l)return a.$1(b)
return P.hh(null,null,this,a,b,c,d)},
kx:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.S===C.l)return a.$2(b,c)
return P.mK(null,null,this,a,b,c,d,e,f)}},
lP:{"^":"n;a,b,c",
$0:function(){return this.a.eT(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lO:{"^":"n:3;a,b",
$0:function(){return this.a.ky(this.b)}},
lQ:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.kz(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iZ:function(a,b,c,d,e){return new H.aY(0,0,[d,e])},
j_:function(a,b,c){H.ce(a)
return H.k(H.n2(a,new H.aY(0,0,[b,c])),"$iseE",[b,c],"$aseE")},
eF:function(a,b){return new H.aY(0,0,[a,b])},
c0:function(a,b,c,d){return new P.lH(0,0,[d])},
iK:function(a,b,c){var z,y
if(P.dL(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bN()
C.a.h(y,a)
try{P.mG(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.fa(b,H.hx(z,"$isp"),", ")+c
return y.charCodeAt(0)==0?y:y},
d2:function(a,b,c){var z,y,x
if(P.dL(a))return b+"..."+c
z=new P.aj(b)
y=$.$get$bN()
C.a.h(y,a)
try{x=z
x.a=P.fa(x.gaO(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaO()+c
y=z.gaO()
return y.charCodeAt(0)==0?y:y},
dL:function(a){var z,y
for(z=0;y=$.$get$bN(),z<y.length;++z)if(a===y[z])return!0
return!1},
mG:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gU(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.i(z.gK())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gK();++x
if(!z.E()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gK();++x
for(;z.E();t=s,s=r){r=z.gK();++x
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
j0:function(a,b,c){var z=P.iZ(null,null,null,b,c)
a.a_(0,new P.j1(z,b,c))
return z},
eG:function(a,b){var z,y,x
z=P.c0(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x)z.h(0,H.x(a[x],b))
return z},
d7:function(a){var z,y,x
z={}
if(P.dL(a))return"{...}"
y=new P.aj("")
try{C.a.h($.$get$bN(),a)
x=y
x.a=x.gaO()+"{"
z.a=!0
a.a_(0,new P.j7(z,y))
z=y
z.a=z.gaO()+"}"}finally{z=$.$get$bN()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaO()
return z.charCodeAt(0)==0?z:z},
lH:{"^":"lD;a,0b,0c,0d,0e,0f,r,$ti",
gU:function(a){var z=new P.fY(this,this.r,this.$ti)
z.c=this.e
return z},
gp:function(a){return this.a},
X:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscF")!=null}else{y=this.h4(b)
return y}},
h4:function(a){var z=this.d
if(z==null)return!1
return this.c7(this.dB(z,a),a)>=0},
h:function(a,b){var z,y
H.x(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dG()
this.b=z}return this.dk(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dG()
this.c=y}return this.dk(y,b)}else return this.fV(b)},
fV:function(a){var z,y,x
H.x(a,H.t(this,0))
z=this.d
if(z==null){z=P.dG()
this.d=z}y=this.dr(a)
x=z[y]
if(x==null)z[y]=[this.ce(a)]
else{if(this.c7(x,a)>=0)return!1
x.push(this.ce(a))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.i4(this.c,b)
else return this.i1(b)},
i1:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.dB(z,a)
x=this.c7(y,a)
if(x<0)return!1
this.dR(y.splice(x,1)[0])
return!0},
dk:function(a,b){H.x(b,H.t(this,0))
if(H.e(a[b],"$iscF")!=null)return!1
a[b]=this.ce(b)
return!0},
i4:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscF")
if(z==null)return!1
this.dR(z)
delete a[b]
return!0},
dG:function(){this.r=this.r+1&67108863},
ce:function(a){var z,y
z=new P.cF(H.x(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dG()
return z},
dR:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dG()},
dr:function(a){return J.bQ(a)&0x3ffffff},
dB:function(a,b){return a[this.dr(b)]},
c7:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.I(a[y].a,b))return y
return-1},
m:{
dG:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cF:{"^":"b;a,0b,0c"},
fY:{"^":"b;a,b,0c,0d,$ti",
sdm:function(a){this.d=H.x(a,H.t(this,0))},
gK:function(){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aH(z))
else{z=this.c
if(z==null){this.sdm(null)
return!1}else{this.sdm(H.x(z.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
$isaX:1,
m:{
lI:function(a,b,c){var z=new P.fY(a,b,[c])
z.c=a.e
return z}}},
lD:{"^":"k0;"},
j1:{"^":"n:7;a,b,c",
$2:function(a,b){this.a.q(0,H.x(a,this.b),H.x(b,this.c))}},
cs:{"^":"lJ;",$isp:1,$isa:1},
T:{"^":"b;$ti",
gU:function(a){return new H.d6(a,this.gp(a),0,[H.cc(this,a,"T",0)])},
aa:function(a,b){return this.l(a,b)},
kG:function(a,b){var z,y
z=H.c([],[H.cc(this,a,"T",0)])
C.a.sp(z,this.gp(a))
for(y=0;y<this.gp(a);++y)C.a.q(z,y,this.l(a,y))
return z},
kF:function(a){return this.kG(a,!0)},
jJ:function(a,b,c,d){var z
H.x(d,H.cc(this,a,"T",0))
P.b0(b,c,this.gp(a),null,null,null)
for(z=b;z<c;++z)this.q(a,z,d)},
i:function(a){return P.d2(a,"[","]")}},
eI:{"^":"cu;"},
j7:{"^":"n:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
cu:{"^":"b;$ti",
a_:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.a6(this,"cu",0),H.a6(this,"cu",1)]})
for(z=J.b3(this.gay());z.E();){y=z.gK()
b.$2(y,this.l(0,y))}},
gp:function(a){return J.ar(this.gay())},
i:function(a){return P.d7(this)},
$isJ:1},
m7:{"^":"b;$ti",
q:function(a,b,c){H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
throw H.d(P.U("Cannot modify unmodifiable map"))}},
j8:{"^":"b;$ti",
l:function(a,b){return this.a.l(0,b)},
q:function(a,b,c){this.a.q(0,H.x(b,H.t(this,0)),H.x(c,H.t(this,1)))},
a_:function(a,b){this.a.a_(0,H.l(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gp:function(a){var z=this.a
return z.gp(z)},
i:function(a){return J.ae(this.a)},
$isJ:1},
fy:{"^":"m8;a,$ti"},
k2:{"^":"b;$ti",
au:function(a,b){var z
for(z=J.b3(H.k(b,"$isp",this.$ti,"$asp"));z.E();)this.h(0,z.gK())},
i:function(a){return P.d2(this,"{","}")},
aa:function(a,b){var z,y,x
if(b<0)H.r(P.a_(b,0,null,"index",null))
for(z=P.lI(this,this.r,H.t(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.d(P.b4(b,this,"index",null,y))},
$isp:1,
$isf4:1},
k0:{"^":"k2;"},
lJ:{"^":"b+T;"},
m8:{"^":"j8+m7;$ti"}}],["","",,P,{"^":"",hV:{"^":"bS;a",
k7:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.b0(b,c,a.length,null,null,null)
z=$.$get$fS()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.c.H(a,y)
if(r===37){q=s+2
if(q<=c){p=H.cM(C.c.H(a,s))
o=H.cM(C.c.H(a,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.c.a0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aj("")
l=w.a+=C.c.t(a,x,y)
w.a=l+H.ba(r)
x=s
continue}}throw H.d(P.V("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.c.t(a,x,c)
k=l.length
if(v>=0)P.e5(a,u,c,v,t,k)
else{j=C.h.bq(k-1,4)+1
if(j===1)throw H.d(P.V("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.c.b0(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.e5(a,u,c,v,t,i)
else{j=C.h.bq(i,4)
if(j===1)throw H.d(P.V("Invalid base64 encoding length ",a,c))
if(j>1)a=C.c.b0(a,c,c,j===2?"==":"=")}return a},
$asbS:function(){return[[P.a,P.m],P.h]},
m:{
e5:function(a,b,c,d,e,f){if(C.h.bq(f,4)!==0)throw H.d(P.V("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.V("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.V("Invalid base64 padding, more than two '=' characters",a,b))}}},hW:{"^":"aV;a",
$asaV:function(){return[[P.a,P.m],P.h]}},bS:{"^":"b;$ti"},aV:{"^":"kf;$ti"},io:{"^":"bS;",
$asbS:function(){return[P.h,[P.a,P.m]]}},iH:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},iG:{"^":"aV;a",
h5:function(a,b,c){var z,y,x,w,v,u
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
if(w>b)v.a+=C.c.t(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hR(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asaV:function(){return[P.h,P.h]}},kV:{"^":"io;a",
gjI:function(){return C.T}},l1:{"^":"aV;",
ba:function(a,b,c){var z,y,x,w
z=a.length
P.b0(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mt(0,0,x)
if(w.hg(a,b,z)!==z)w.dT(J.hJ(a,z-1),0)
return new Uint8Array(x.subarray(0,H.mz(0,w.b,x.length)))},
cD:function(a){return this.ba(a,0,null)},
$asaV:function(){return[P.h,[P.a,P.m]]}},mt:{"^":"b;a,b,c",
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
hg:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.a0(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dT(w,C.c.H(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kW:{"^":"aV;a",
ba:function(a,b,c){var z,y,x,w,v
H.k(a,"$isa",[P.m],"$asa")
z=P.kX(!1,a,b,c)
if(z!=null)return z
y=J.ar(a)
P.b0(b,c,y,null,null,null)
x=new P.aj("")
w=new P.mq(!1,x,!0,0,0,0)
w.ba(a,b,y)
if(w.e>0){H.r(P.V("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.ba(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
cD:function(a){return this.ba(a,0,null)},
$asaV:function(){return[[P.a,P.m],P.h]},
m:{
kX:function(a,b,c,d){H.k(b,"$isa",[P.m],"$asa")
if(b instanceof Uint8Array)return P.kY(!1,b,c,d)
return},
kY:function(a,b,c,d){var z,y,x
z=$.$get$fE()
if(z==null)return
y=0===c
if(y&&!0)return P.dB(z,b)
x=b.length
d=P.b0(c,d,x,null,null,null)
if(y&&d===x)return P.dB(z,b)
return P.dB(z,b.subarray(c,d))},
dB:function(a,b){if(P.l_(b))return
return P.l0(a,b)},
l0:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.a8(y)}return},
l_:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kZ:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.a8(y)}return}}},mq:{"^":"b;a,b,c,d,e,f",
ba:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(a,"$isa",[P.m],"$asa")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.ms(c)
v=new P.mr(this,b,c,a)
$label0$0:for(u=J.bn(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.l(a,s)
if(typeof r!=="number")return r.bX()
if((r&192)!==128){q=P.V("Bad UTF-8 encoding 0x"+C.h.bl(r,16),a,s)
throw H.d(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.H,q)
if(z<=C.H[q]){q=P.V("Overlong encoding of 0x"+C.h.bl(z,16),a,s-x-1)
throw H.d(q)}if(z>1114111){q=P.V("Character outside valid Unicode range: 0x"+C.h.bl(z,16),a,s-x-1)
throw H.d(q)}if(!this.c||z!==65279)t.a+=H.ba(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.d9()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.l(a,o)
if(typeof r!=="number")return r.V()
if(r<0){m=P.V("Negative UTF-8 code unit: -0x"+C.h.bl(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.V("Bad UTF-8 encoding 0x"+C.h.bl(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},ms:{"^":"n:47;a",
$2:function(a,b){var z,y,x,w
H.k(a,"$isa",[P.m],"$asa")
z=this.a
for(y=J.bn(a),x=b;x<z;++x){w=y.l(a,x)
if(typeof w!=="number")return w.bX()
if((w&127)!==w)return x-b}return z-b}},mr:{"^":"n:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c6(this.d,a,b)}}}],["","",,P,{"^":"",
cd:function(a,b,c){var z
H.l(b,{func:1,ret:P.m,args:[P.h]})
z=H.jI(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.d(P.V(a,null,null))},
iq:function(a){if(a instanceof H.n)return a.i(0)
return"Instance of '"+H.b9(a)+"'"},
j2:function(a,b,c,d){var z,y
H.x(b,d)
z=J.iM(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.q(z,y,b)
return H.k(z,"$isa",[d],"$asa")},
j3:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gU(a);x.E();)C.a.h(y,H.x(x.gK(),c))
if(b)return y
return H.k(J.cr(y),"$isa",z,"$asa")},
c6:function(a,b,c){var z,y
z=P.m
H.k(a,"$isp",[z],"$asp")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$isb5",[z],"$asb5")
y=a.length
c=P.b0(b,c,y,null,null,null)
return H.eY(b>0||c<y?C.a.fo(a,b,c):a)}if(!!J.N(a).$iseO)return H.jK(a,b,P.b0(b,c,a.length,null,null,null))
return P.ki(a,b,c)},
ki:function(a,b,c){var z,y,x,w
H.k(a,"$isp",[P.m],"$asp")
if(b<0)throw H.d(P.a_(b,0,J.ar(a),null,null))
z=c==null
if(!z&&c<b)throw H.d(P.a_(c,b,J.ar(a),null,null))
y=J.b3(a)
for(x=0;x<b;++x)if(!y.E())throw H.d(P.a_(b,0,x,null,null))
w=[]
if(z)for(;y.E();)w.push(y.gK())
else for(x=b;x<c;++x){if(!y.E())throw H.d(P.a_(c,b,x,null,null))
w.push(y.gK())}return H.eY(w)},
jT:function(a,b,c){return new H.iO(a,H.iP(a,!1,!0,!1))},
fA:function(){var z=H.jA()
if(z!=null)return P.kP(z,0,null)
throw H.d(P.U("'Uri.base' is not supported"))},
cl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ae(a)
if(typeof a==="string")return JSON.stringify(a)
return P.iq(a)},
u:function(a){return new P.fT(a)},
j4:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.m]})
z=H.c([],[d])
C.a.sp(z,a)
for(y=0;y<a;++y)C.a.q(z,y,b.$1(y))
return z},
dX:function(a){H.nu(a)},
kP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.c.H(a,b+4)^58)*3|C.c.H(a,b)^100|C.c.H(a,b+1)^97|C.c.H(a,b+2)^116|C.c.H(a,b+3)^97)>>>0
if(y===0)return P.fz(b>0||c<c?C.c.t(a,b,c):a,5,null).gf0()
else if(y===32)return P.fz(C.c.t(a,z,c),0,null).gf0()}x=new Array(8)
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
if(P.hi(a,b,c,0,w)>=14)C.a.q(w,7,c)
v=w[1]
if(typeof v!=="number")return v.kN()
if(v>=b)if(P.hi(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.G()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.V()
if(typeof r!=="number")return H.B(r)
if(q<r)r=q
if(typeof s!=="number")return s.V()
if(s<u)s=r
else if(s<=v)s=v+1
if(typeof t!=="number")return t.V()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.V()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.c.ab(a,"..",s)))n=r>s+2&&C.c.ab(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.c.ab(a,"file",b)){if(u<=b){if(!C.c.ab(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.c.b0(a,s,r,"/");++r;++q;++c}else{a=C.c.t(a,b,s)+"/"+C.c.t(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.c.ab(a,"http",b)){if(x&&t+3===s&&C.c.ab(a,"80",t+1))if(b===0&&!0){a=C.c.b0(a,t,s,"")
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
else if(v===z&&C.c.ab(a,"https",b)){if(x&&t+4===s&&C.c.ab(a,"443",t+1))if(b===0&&!0){a=C.c.b0(a,t,s,"")
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
q-=b}return new P.lV(a,v,u,t,s,r,q,o)}return P.m9(a,b,c,v,u,t,s,r,q,o)},
fC:function(a,b){var z=P.h
return C.a.jO(H.c(a.split("&"),[z]),P.eF(z,z),new P.kS(b),[P.J,P.h,P.h])},
kN:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kO(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.c.a0(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cd(C.c.t(a,v,w),null,null)
if(typeof s!=="number")return s.d9()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cd(C.c.t(a,v,c),null,null)
if(typeof s!=="number")return s.d9()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fB:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kQ(a)
y=new P.kR(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.c.a0(a,w)
if(s===58){if(w===b){++w
if(C.c.a0(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaz(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kN(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.h.aR(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
mA:function(){var z,y,x,w,v
z=P.j4(22,new P.mC(),!0,P.O)
y=new P.mB(z)
x=new P.mD()
w=new P.mE()
v=H.e(y.$2(0,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isO")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isO")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isO"),"]",5)
v=H.e(y.$2(9,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isO"),"az",21)
v=H.e(y.$2(21,245),"$isO")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hi:function(a,b,c,d,e){var z,y,x,w,v
H.k(e,"$isa",[P.m],"$asa")
z=$.$get$hj()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.c.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.q(e,v>>>5,y)}return d},
M:{"^":"b;"},
"+bool":0,
az:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.az))return!1
return this.a===b.a&&!0},
gY:function(a){var z=this.a
return(z^C.h.aR(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.ib(H.jH(this))
y=P.bU(H.jF(this))
x=P.bU(H.jB(this))
w=P.bU(H.jC(this))
v=P.bU(H.jE(this))
u=P.bU(H.jG(this))
t=P.ic(H.jD(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
m:{
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
bU:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"ak;"},
"+double":0,
bu:{"^":"b;a",
V:function(a,b){return C.h.V(this.a,H.e(b,"$isbu").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bu))return!1
return this.a===b.a},
gY:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ij()
y=this.a
if(y<0)return"-"+new P.bu(0-y).i(0)
x=z.$1(C.h.a7(y,6e7)%60)
w=z.$1(C.h.a7(y,1e6)%60)
v=new P.ii().$1(y%1e6)
return""+C.h.a7(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
m:{
eq:function(a,b,c,d,e,f){return new P.bu(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ii:{"^":"n:24;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ij:{"^":"n:24;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a3:{"^":"b;"},
eR:{"^":"a3;",
i:function(a){return"Throw of null."}},
aG:{"^":"a3;a,b,c,d",
gc6:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc5:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gc6()+y+x
if(!this.a)return w
v=this.gc5()
u=P.cl(this.b)
return w+v+": "+H.i(u)},
m:{
bR:function(a){return new P.aG(!1,null,null,a)},
cU:function(a,b,c){return new P.aG(!0,a,b,c)}}},
cw:{"^":"aG;e,f,a,b,c,d",
gc6:function(){return"RangeError"},
gc5:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
m:{
c5:function(a,b,c){return new P.cw(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.cw(b,c,!0,a,d,"Invalid value")},
b0:function(a,b,c,d,e,f){if(typeof a!=="number")return H.B(a)
if(0>a||a>c)throw H.d(P.a_(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.d(P.a_(b,a,c,"end",f))
return b}return c}}},
iI:{"^":"aG;e,p:f>,a,b,c,d",
gc6:function(){return"RangeError"},
gc5:function(){if(J.hF(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
m:{
b4:function(a,b,c,d,e){var z=H.ab(e!=null?e:J.ar(b))
return new P.iI(b,z,!0,a,c,"Index out of range")}}},
kL:{"^":"a3;a",
i:function(a){return"Unsupported operation: "+this.a},
m:{
U:function(a){return new P.kL(a)}}},
kI:{"^":"a3;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
m:{
cB:function(a){return new P.kI(a)}}},
di:{"^":"a3;a",
i:function(a){return"Bad state: "+this.a},
m:{
f8:function(a){return new P.di(a)}}},
i4:{"^":"a3;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.cl(z))+"."},
m:{
aH:function(a){return new P.i4(a)}}},
jv:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa3:1},
f7:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa3:1},
i9:{"^":"a3;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fT:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
ix:{"^":"b;a,b,c",
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
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.c.H(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.c.a0(w,s)
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
return y+n+l+m+"\n"+C.c.C(" ",x-o+n.length)+"^\n"},
m:{
V:function(a,b,c){return new P.ix(a,b,c)}}},
bV:{"^":"b;"},
m:{"^":"ak;"},
"+int":0,
p:{"^":"b;$ti",
d3:["fq",function(a,b){var z=H.a6(this,"p",0)
return new H.dD(this,H.l(b,{func:1,ret:P.M,args:[z]}),[z])}],
gp:function(a){var z,y
z=this.gU(this)
for(y=0;z.E();)++y
return y},
gaJ:function(a){var z,y
z=this.gU(this)
if(!z.E())throw H.d(H.cq())
y=z.gK()
if(z.E())throw H.d(H.iL())
return y},
aa:function(a,b){var z,y,x
if(b<0)H.r(P.a_(b,0,null,"index",null))
for(z=this.gU(this),y=0;z.E();){x=z.gK()
if(b===y)return x;++y}throw H.d(P.b4(b,this,"index",null,y))},
i:function(a){return P.iK(this,"(",")")}},
aX:{"^":"b;$ti"},
a:{"^":"b;$ti",$isp:1},
"+List":0,
J:{"^":"b;$ti"},
E:{"^":"b;",
gY:function(a){return P.b.prototype.gY.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ak:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gY:function(a){return H.bC(this)},
i:function(a){return"Instance of '"+H.b9(this)+"'"},
toString:function(){return this.i(this)}},
aL:{"^":"b;"},
h:{"^":"b;",$iseS:1},
"+String":0,
aj:{"^":"b;aO:a<",
gp:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isnY:1,
m:{
fa:function(a,b,c){var z=J.b3(b)
if(!z.E())return a
if(c.length===0){do a+=H.i(z.gK())
while(z.E())}else{a+=H.i(z.gK())
for(;z.E();)a=a+c+H.i(z.gK())}return a}}},
kS:{"^":"n:44;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.k(a,"$isJ",[z,z],"$asJ")
H.C(b)
y=J.bP(b).eA(b,"=")
if(y===-1){if(b!=="")a.q(0,P.dI(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.c.t(b,0,y)
w=C.c.ar(b,y+1)
z=this.a
a.q(0,P.dI(x,0,x.length,z,!0),P.dI(w,0,w.length,z,!0))}return a}},
kO:{"^":"n:43;a",
$2:function(a,b){throw H.d(P.V("Illegal IPv4 address, "+a,this.a,b))}},
kQ:{"^":"n:42;a",
$2:function(a,b){throw H.d(P.V("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kR:{"^":"n:41;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cd(C.c.t(this.b,a,b),null,16)
if(typeof z!=="number")return z.V()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cG:{"^":"b;c_:a<,b,c,d,eM:e>,f,r,0x,0y,0z,0Q,0ch",
si0:function(a){var z=P.h
this.Q=H.k(a,"$isJ",[z,z],"$asJ")},
gf2:function(){return this.b},
gcP:function(a){var z=this.c
if(z==null)return""
if(C.c.a6(z,"["))return C.c.t(z,1,z.length-1)
return z},
gbT:function(a){var z=this.d
if(z==null)return P.h6(this.a)
return z},
gcW:function(){var z=this.f
return z==null?"":z},
gev:function(){var z=this.r
return z==null?"":z},
d_:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.k(h,"$isJ",[P.h,null],"$asJ")
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
g=P.dH(g,0,0,h)
return new P.cG(i,j,c,f,d,g,this.r)},
eR:function(a,b){return this.d_(a,null,null,null,null,null,null,b,null,null)},
gcX:function(){var z,y
if(this.Q==null){z=this.f
y=P.h
this.si0(new P.fy(P.fC(z==null?"":z,C.m),[y,y]))}return this.Q},
gew:function(){return this.c!=null},
gez:function(){return this.f!=null},
gex:function(){return this.r!=null},
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
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!!J.N(b).$isdA){if(this.a==b.gc_())if(this.c!=null===b.gew())if(this.b==b.gf2())if(this.gcP(this)==b.gcP(b))if(this.gbT(this)==b.gbT(b))if(this.e===b.geM(b)){z=this.f
y=z==null
if(!y===b.gez()){if(y)z=""
if(z===b.gcW()){z=this.r
y=z==null
if(!y===b.gex()){if(y)z=""
z=z===b.gev()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
gY:function(a){var z=this.z
if(z==null){z=C.c.gY(this.i(0))
this.z=z}return z},
$isdA:1,
m:{
ca:function(a,b,c,d){var z,y,x,w,v,u
H.k(a,"$isa",[P.m],"$asa")
if(c===C.m){z=$.$get$hb().b
if(typeof b!=="string")H.r(H.ai(b))
z=z.test(b)}else z=!1
if(z)return b
H.x(b,H.a6(c,"bS",0))
y=c.gjI().cD(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.ba(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
m9:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mk(a,b,d)
else{if(d===b)P.bI(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.ml(a,z,e-1):""
x=P.me(a,e,f,!1)
if(typeof f!=="number")return f.G()
w=f+1
if(typeof g!=="number")return H.B(g)
v=w<g?P.mh(P.cd(C.c.t(a,w,g),new P.ma(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mf(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.V()
t=h<i?P.dH(a,h+1,i,null):null
return new P.cG(j,y,x,v,u,t,i<c?P.md(a,i+1,c):null)},
h6:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bI:function(a,b,c){throw H.d(P.V(c,a,b))},
mh:function(a,b){if(a!=null&&a===P.h6(b))return
return a},
me:function(a,b,c,d){var z,y
if(b===c)return""
if(C.c.a0(a,b)===91){if(typeof c!=="number")return c.S()
z=c-1
if(C.c.a0(a,z)!==93)P.bI(a,b,"Missing end `]` to match `[` in host")
P.fB(a,b+1,z)
return C.c.t(a,b,c).toLowerCase()}if(typeof c!=="number")return H.B(c)
y=b
for(;y<c;++y)if(C.c.a0(a,y)===58){P.fB(a,b,c)
return"["+a+"]"}return P.mn(a,b,c)},
mn:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.B(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.c.a0(a,z)
if(v===37){u=P.hd(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.aj("")
s=C.c.t(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.c.t(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.K,t)
t=(C.K[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aj("")
if(y<z){x.a+=C.c.t(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.r,t)
t=(C.r[t]&1<<(v&15))!==0}else t=!1
if(t)P.bI(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.c.a0(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aj("")
s=C.c.t(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h7(v)
z+=q
y=z}}}}if(x==null)return C.c.t(a,b,c)
if(y<c){s=C.c.t(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mk:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.h9(C.c.H(a,b)))P.bI(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.c.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.u,w)
w=(C.u[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bI(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.c.t(a,b,c)
return P.mb(y?a.toLowerCase():a)},
mb:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ml:function(a,b,c){return P.bJ(a,b,c,C.a9,!1)},
mf:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bJ(a,b,c,C.L,!0):C.D.ls(d,new P.mg(),P.h).k(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.c.a6(w,"/"))w="/"+w
return P.mm(w,e,f)},
mm:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.c.a6(a,"/"))return P.mo(a,!z||c)
return P.mp(a)},
dH:function(a,b,c,d){var z,y
z={}
H.k(d,"$isJ",[P.h,null],"$asJ")
if(a!=null){if(d!=null)throw H.d(P.bR("Both query and queryParameters specified"))
return P.bJ(a,b,c,C.t,!0)}if(d==null)return
y=new P.aj("")
z.a=""
d.a_(0,new P.mi(new P.mj(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
md:function(a,b,c){return P.bJ(a,b,c,C.t,!0)},
hd:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.c.a0(a,b+1)
x=C.c.a0(a,z)
w=H.cM(y)
v=H.cM(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.h.aR(u,4)
if(z>=8)return H.f(C.v,z)
z=(C.v[z]&1<<(u&15))!==0}else z=!1
if(z)return H.ba(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.c.t(a,b,b+3).toUpperCase()
return},
h7:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.m])
C.a.q(y,0,37)
C.a.q(y,1,C.c.H("0123456789ABCDEF",a>>>4))
C.a.q(y,2,C.c.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.h.is(a,6*w)&63|x
C.a.q(y,v,37)
C.a.q(y,v+1,C.c.H("0123456789ABCDEF",u>>>4))
C.a.q(y,v+2,C.c.H("0123456789ABCDEF",u&15))
v+=3}}return P.c6(y,0,null)},
bJ:function(a,b,c,d,e){var z=P.hc(a,b,c,H.k(d,"$isa",[P.m],"$asa"),e)
return z==null?C.c.t(a,b,c):z},
hc:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.k(d,"$isa",[P.m],"$asa")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.V()
if(typeof c!=="number")return H.B(c)
if(!(y<c))break
c$0:{v=C.c.a0(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hd(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.r,u)
u=(C.r[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bI(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.c.a0(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h7(v)}}if(w==null)w=new P.aj("")
w.a+=C.c.t(a,x,y)
w.a+=H.i(t)
if(typeof s!=="number")return H.B(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.V()
if(x<c)w.a+=C.c.t(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
ha:function(a){if(C.c.a6(a,"."))return!0
return C.c.eA(a,"/.")!==-1},
mp:function(a){var z,y,x,w,v,u,t
if(!P.ha(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.I(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.k(z,"/")},
mo:function(a,b){var z,y,x,w,v,u
if(!P.ha(a))return!b?P.h8(a):a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaz(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaz(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.q(z,0,P.h8(z[0]))}return C.a.k(z,"/")},
h8:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.h9(J.hI(a,0)))for(y=1;y<z;++y){x=C.c.H(a,y)
if(x===58)return C.c.t(a,0,y)+"%3A"+C.c.ar(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.u,w)
w=(C.u[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mc:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.c.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.d(P.bR("Invalid URL encoding"))}}return z},
dI:function(a,b,c,d,e){var z,y,x,w,v
y=b
while(!0){if(!(y<c)){z=!0
break}x=C.c.H(a,y)
if(x<=127)if(x!==37)w=x===43
else w=!0
else w=!0
if(w){z=!1
break}++y}if(z){if(C.m!==d)w=!1
else w=!0
if(w)return C.c.t(a,b,c)
else v=new H.v(C.c.t(a,b,c))}else{v=H.c([],[P.m])
for(w=a.length,y=b;y<c;++y){x=C.c.H(a,y)
if(x>127)throw H.d(P.bR("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.d(P.bR("Truncated URI"))
C.a.h(v,P.mc(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.k(v,"$isa",[P.m],"$asa")
return new P.kW(!1).cD(v)},
h9:function(a){var z=a|32
return 97<=z&&z<=122}}},
ma:{"^":"n:40;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.G()
throw H.d(P.V("Invalid port",this.a,z+1))}},
mg:{"^":"n:14;",
$1:function(a){return P.ca(C.aa,a,C.m,!1)}},
mj:{"^":"n:38;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.i(P.ca(C.v,a,C.m,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.i(P.ca(C.v,b,C.m,!0))}}},
mi:{"^":"n:35;a",
$2:function(a,b){var z,y
H.C(a)
if(b==null||typeof b==="string")this.a.$2(a,H.C(b))
else for(z=J.b3(H.hx(b,"$isp")),y=this.a;z.E();)y.$2(a,H.C(z.gK()))}},
kM:{"^":"b;a,b,c",
gf0:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.c.eB(y,"?",z)
w=y.length
if(x>=0){v=P.bJ(y,x+1,w,C.t,!1)
w=x}else v=null
z=new P.lo(this,"data",null,null,null,P.bJ(y,z,w,C.L,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
m:{
fz:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.c.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.d(P.V("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.d(P.V("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.c.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaz(z)
if(v!==44||x!==t+7||!C.c.ab(a,"base64",t+1))throw H.d(P.V("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.Q.k7(a,s,y)
else{r=P.hc(a,s,y,C.t,!0)
if(r!=null)a=C.c.b0(a,s,y,r)}return new P.kM(a,z,c)}}},
mC:{"^":"n:34;",
$1:function(a){return new Uint8Array(96)}},
mB:{"^":"n:33;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hK(z,0,96,b)
return z}},
mD:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.c.H(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mE:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.c.H(b,0),y=C.c.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
lV:{"^":"b;a,b,c,d,e,f,r,x,0y",
gew:function(){return this.c>0},
gey:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.G()
y=this.e
if(typeof y!=="number")return H.B(y)
y=z+1<y
z=y}else z=!1
return z},
gez:function(){var z=this.f
if(typeof z!=="number")return z.V()
return z<this.r},
gex:function(){return this.r<this.a.length},
gdE:function(){return this.b===4&&C.c.a6(this.a,"http")},
gdF:function(){return this.b===5&&C.c.a6(this.a,"https")},
gc_:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdE()){this.x="http"
z="http"}else if(this.gdF()){this.x="https"
z="https"}else if(z===4&&C.c.a6(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.c.a6(this.a,"package")){this.x="package"
z="package"}else{z=C.c.t(this.a,0,z)
this.x=z}return z},
gf2:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.c.t(this.a,y,z-1):""},
gcP:function(a){var z=this.c
return z>0?C.c.t(this.a,z,this.d):""},
gbT:function(a){var z
if(this.gey()){z=this.d
if(typeof z!=="number")return z.G()
return P.cd(C.c.t(this.a,z+1,this.e),null,null)}if(this.gdE())return 80
if(this.gdF())return 443
return 0},
geM:function(a){return C.c.t(this.a,this.e,this.f)},
gcW:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.V()
return z<y?C.c.t(this.a,z+1,y):""},
gev:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.c.ar(y,z+1):""},
gcX:function(){var z=this.f
if(typeof z!=="number")return z.V()
if(z>=this.r)return C.ab
z=P.h
return new P.fy(P.fC(this.gcW(),C.m),[z,z])},
d_:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.k(h,"$isJ",[P.h,null],"$asJ")
i=this.gc_()
z=i==="file"
y=this.c
j=y>0?C.c.t(this.a,this.b+3,y):""
f=this.gey()?this.gbT(this):null
y=this.c
if(y>0)c=C.c.t(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.c.t(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.c.a6(d,"/"))d="/"+d
g=P.dH(g,0,0,h)
x=this.r
if(x<y.length)b=C.c.ar(y,x+1)
return new P.cG(i,j,c,f,d,g,b)},
eR:function(a,b){return this.d_(a,null,null,null,null,null,null,b,null,null)},
gY:function(a){var z=this.y
if(z==null){z=C.c.gY(this.a)
this.y=z}return z},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.N(b).$isdA)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$isdA:1},
lo:{"^":"cG;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e3:function(a){var z=document.createElement("a")
return z},
cZ:function(a,b){var z=document.createElement("canvas")
return z},
ik:function(a,b,c){var z,y
z=document.body
y=(z&&C.p).am(z,a,b,c)
y.toString
z=W.A
z=new H.dD(new W.ap(y),H.l(new W.il(),{func:1,ret:P.M,args:[z]}),[z])
return H.e(z.gaJ(z),"$isQ")},
im:function(a){H.e(a,"$iscm")
return"wheel"},
bv:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hN(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a8(x)}return z},
iJ:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$isey")
try{J.hP(z,a)}catch(x){H.a8(x)}return z},
cD:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fX:function(a,b,c,d){var z,y
z=W.cD(W.cD(W.cD(W.cD(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hm:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.S
if(z===C.l)return a
return z.e0(a,b)},
a2:{"^":"Q;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
hT:{"^":"a2;",
i:function(a){return String(a)},
$ishT:1,
"%":"HTMLAnchorElement"},
nF:{"^":"a2;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
e6:{"^":"a2;",$ise6:1,"%":"HTMLBaseElement"},
ch:{"^":"a2;",$isch:1,"%":"HTMLBodyElement"},
cY:{"^":"a2;",
bY:function(a,b,c){if(c!=null)return this.hh(a,b,P.mQ(c,null))
return this.hi(a,b)},
fb:function(a,b){return this.bY(a,b,null)},
hh:function(a,b,c){return a.getContext(b,c)},
hi:function(a,b){return a.getContext(b)},
$iscY:1,
$ised:1,
"%":"HTMLCanvasElement"},
d_:{"^":"H;",
hj:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jF:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$isd_:1,
"%":"CanvasRenderingContext2D"},
nI:{"^":"A;0p:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nK:{"^":"ln;0p:length=",
fd:function(a,b){var z=this.hk(a,this.h0(a,b))
return z==null?"":z},
h0:function(a,b){var z,y
z=$.$get$ei()
y=z[b]
if(typeof y==="string")return y
y=this.iv(a,b)
z[b]=y
return y},
iv:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.id()+b
if(z in a)return z
return b},
hk:function(a,b){return a.getPropertyValue(b)},
gcw:function(a){return a.bottom},
gbd:function(a){return a.height},
gaY:function(a){return a.left},
gbj:function(a){return a.right},
gbm:function(a){return a.top},
gbo:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
i8:{"^":"b;",
gaY:function(a){return this.fd(a,"left")}},
aW:{"^":"a2;",$isaW:1,"%":"HTMLDivElement"},
ie:{"^":"A;",
ja:function(a,b){return a.adoptNode(b)},
d7:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
nL:{"^":"H;",
i:function(a){return String(a)},
"%":"DOMException"},
ig:{"^":"H;",
ju:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
ih:{"^":"H;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bO(b,"$isaK",[P.ak],"$asaK"))return!1
z=J.W(b)
return a.left===z.gaY(b)&&a.top===z.gbm(b)&&a.width===z.gbo(b)&&a.height===z.gbd(b)},
gY:function(a){return W.fX(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcw:function(a){return a.bottom},
gbd:function(a){return a.height},
gaY:function(a){return a.left},
gbj:function(a){return a.right},
gbm:function(a){return a.top},
gbo:function(a){return a.width},
$isaK:1,
$asaK:function(){return[P.ak]},
"%":";DOMRectReadOnly"},
lm:{"^":"cs;dz:a<,b",
gp:function(a){return this.b.length},
l:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.f(z,b)
return H.e(z[b],"$isQ")},
q:function(a,b,c){var z
H.e(c,"$isQ")
z=this.b
if(b<0||b>=z.length)return H.f(z,b)
J.cR(this.a,c,z[b])},
h:function(a,b){J.e0(this.a,b)
return b},
gU:function(a){var z=this.kF(this)
return new J.ax(z,z.length,0,[H.t(z,0)])},
$asT:function(){return[W.Q]},
$asp:function(){return[W.Q]},
$asa:function(){return[W.Q]}},
Q:{"^":"A;0kA:tagName=",
gje:function(a){return new W.lp(a)},
gcC:function(a){return new W.lm(a,a.children)},
ge2:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.V()
if(x<0)x=-x*0
if(typeof w!=="number")return w.V()
if(w<0)w=-w*0
return new P.aK(z,y,x,w,[P.ak])},
i:function(a){return a.localName},
am:["c0",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.et
if(z==null){z=H.c([],[W.aD])
y=new W.eP(z)
C.a.h(z,W.fV(null))
C.a.h(z,W.h3())
$.et=y
d=y}else d=z
z=$.es
if(z==null){z=new W.he(d)
$.es=z
c=z}else{z.a=d
c=z}}if($.aI==null){z=document
y=z.implementation
y=(y&&C.U).ju(y,"")
$.aI=y
$.d1=y.createRange()
y=$.aI
y.toString
y=y.createElement("base")
H.e(y,"$ise6")
y.href=z.baseURI
z=$.aI.head;(z&&C.W).D(z,y)}z=$.aI
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$isch")}z=$.aI
if(!!this.$isch)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aI.body;(z&&C.p).D(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.X(C.a8,a.tagName)){z=$.d1;(z&&C.N).fi(z,x)
z=$.d1
w=(z&&C.N).js(z,b)}else{x.innerHTML=b
w=$.aI.createDocumentFragment()
for(z=J.W(w);y=x.firstChild,y!=null;)z.D(w,y)}z=$.aI.body
if(x==null?z!=null:x!==z)J.e2(x)
c.da(w)
C.y.ja(document,w)
return w},function(a,b,c){return this.am(a,b,c,null)},"jt",null,null,"glp",5,5,null],
fl:function(a,b,c,d){a.textContent=null
this.D(a,this.am(a,b,c,d))},
fk:function(a,b){return this.fl(a,b,null,null)},
b1:function(a,b){return a.getAttribute(b)},
i2:function(a,b){return a.removeAttribute(b)},
fj:function(a,b,c){return a.setAttribute(b,c)},
$isQ:1,
"%":";Element"},
il:{"^":"n:23;",
$1:function(a){return!!J.N(H.e(a,"$isA")).$isQ}},
a9:{"^":"H;",$isa9:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
cm:{"^":"H;",
fW:function(a,b,c,d){return a.addEventListener(b,H.bk(H.l(c,{func:1,args:[W.a9]}),1),!1)},
$iscm:1,
"%":";EventTarget"},
nM:{"^":"a2;0p:length=","%":"HTMLFormElement"},
iC:{"^":"a2;","%":"HTMLHeadElement"},
iD:{"^":"H;0p:length=",
i8:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
iE:{"^":"lF;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b4(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$isA")
throw H.d(P.U("Cannot assign element of immutable List."))},
aa:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isat:1,
$asat:function(){return[W.A]},
$asT:function(){return[W.A]},
$isp:1,
$asp:function(){return[W.A]},
$isa:1,
$asa:function(){return[W.A]},
$isiE:1,
$asaA:function(){return[W.A]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
iF:{"^":"ie;","%":"HTMLDocument"},
bW:{"^":"H;0e4:data=",$isbW:1,"%":"ImageData"},
ex:{"^":"a2;",$isex:1,$ised:1,"%":"HTMLImageElement"},
ey:{"^":"a2;0type",
skI:function(a,b){a.type=H.C(b)},
$isey:1,
"%":"HTMLInputElement"},
bz:{"^":"dq;",$isbz:1,"%":"KeyboardEvent"},
iS:{"^":"a2;","%":"HTMLLabelElement"},
j5:{"^":"H;",
i:function(a){return String(a)},
$isj5:1,
"%":"Location"},
jm:{"^":"a2;","%":"HTMLAudioElement;HTMLMediaElement"},
au:{"^":"dq;",$isau:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ap:{"^":"cs;a",
gaJ:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.f8("No elements"))
if(y>1)throw H.d(P.f8("More than one element"))
return z.firstChild},
au:function(a,b){var z,y,x,w,v
H.k(b,"$isp",[W.A],"$asp")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.W(y),v=0;v<x;++v)w.D(y,z.firstChild)
return},
q:function(a,b,c){var z,y
H.e(c,"$isA")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.f(y,b)
J.cR(z,c,y[b])},
gU:function(a){var z=this.a.childNodes
return new W.ev(z,z.length,-1,[H.cc(C.ac,z,"aA",0)])},
gp:function(a){return this.a.childNodes.length},
l:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asT:function(){return[W.A]},
$asp:function(){return[W.A]},
$asa:function(){return[W.A]}},
A:{"^":"cm;0km:previousSibling=",
ko:function(a){var z=a.parentNode
if(z!=null)J.cf(z,a)},
kt:function(a,b){var z,y
try{z=a.parentNode
J.cR(z,b,a)}catch(y){H.a8(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.fp(a):z},
D:function(a,b){return a.appendChild(H.e(b,"$isA"))},
i3:function(a,b){return a.removeChild(b)},
i7:function(a,b,c){return a.replaceChild(b,c)},
$isA:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
jq:{"^":"lL;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b4(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$isA")
throw H.d(P.U("Cannot assign element of immutable List."))},
aa:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isat:1,
$asat:function(){return[W.A]},
$asT:function(){return[W.A]},
$isp:1,
$asp:function(){return[W.A]},
$isa:1,
$asa:function(){return[W.A]},
$asaA:function(){return[W.A]},
"%":"NodeList|RadioNodeList"},
jO:{"^":"H;",
js:function(a,b){return a.createContextualFragment(b)},
fi:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
nW:{"^":"a2;0p:length=","%":"HTMLSelectElement"},
cx:{"^":"a2;",$iscx:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
kj:{"^":"a2;",
am:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.c0(a,b,c,d)
z=W.ik("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ap(y).au(0,new W.ap(z))
return y},
hm:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
kk:{"^":"a2;",
am:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.c0(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.am(z.createElement("table"),b,c,d)
z.toString
z=new W.ap(z)
x=z.gaJ(z)
x.toString
z=new W.ap(x)
w=z.gaJ(z)
y.toString
w.toString
new W.ap(y).au(0,new W.ap(w))
return y},
dD:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
nZ:{"^":"a2;",
am:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.c0(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.am(z.createElement("table"),b,c,d)
z.toString
z=new W.ap(z)
x=z.gaJ(z)
y.toString
x.toString
new W.ap(y).au(0,new W.ap(x))
return y},
"%":"HTMLTableSectionElement"},
fd:{"^":"a2;",$isfd:1,"%":"HTMLTemplateElement"},
bc:{"^":"H;",$isbc:1,"%":"Touch"},
bd:{"^":"dq;",$isbd:1,"%":"TouchEvent"},
o0:{"^":"m6;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b4(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$isbc")
throw H.d(P.U("Cannot assign element of immutable List."))},
aa:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isat:1,
$asat:function(){return[W.bc]},
$asT:function(){return[W.bc]},
$isp:1,
$asp:function(){return[W.bc]},
$isa:1,
$asa:function(){return[W.bc]},
$asaA:function(){return[W.bc]},
"%":"TouchList"},
dq:{"^":"a9;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
o3:{"^":"jm;",$ised:1,"%":"HTMLVideoElement"},
bG:{"^":"au;",
gjA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.U("deltaY is not supported"))},
gjz:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.U("deltaX is not supported"))},
$isbG:1,
"%":"WheelEvent"},
lf:{"^":"cm;",
i9:function(a,b){return a.requestAnimationFrame(H.bk(H.l(b,{func:1,ret:-1,args:[P.ak]}),1))},
ha:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fR:{"^":"A;",$isfR:1,"%":"Attr"},
o8:{"^":"ih;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bO(b,"$isaK",[P.ak],"$asaK"))return!1
z=J.W(b)
return a.left===z.gaY(b)&&a.top===z.gbm(b)&&a.width===z.gbo(b)&&a.height===z.gbd(b)},
gY:function(a){return W.fX(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbd:function(a){return a.height},
gbo:function(a){return a.width},
"%":"ClientRect|DOMRect"},
oc:{"^":"mx;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b4(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$isA")
throw H.d(P.U("Cannot assign element of immutable List."))},
aa:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isat:1,
$asat:function(){return[W.A]},
$asT:function(){return[W.A]},
$isp:1,
$asp:function(){return[W.A]},
$isa:1,
$asa:function(){return[W.A]},
$asaA:function(){return[W.A]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ll:{"^":"eI;dz:a<",
a_:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.gay(),y=z.length,x=this.a,w=J.W(x),v=0;v<z.length;z.length===y||(0,H.z)(z),++v){u=z[v]
b.$2(u,w.b1(x,u))}},
gay:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.e(z[w],"$isfR")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$ascu:function(){return[P.h,P.h]},
$asJ:function(){return[P.h,P.h]}},
lp:{"^":"ll;a",
l:function(a,b){return J.cT(this.a,H.C(b))},
q:function(a,b,c){J.hQ(this.a,b,c)},
gp:function(a){return this.gay().length}},
lq:{"^":"ke;a,b,c,$ti"},
o9:{"^":"lq;a,b,c,$ti"},
lr:{"^":"dj;a,b,c,d,e,$ti",m:{
a0:function(a,b,c,d,e){var z,y
z=W.hm(new W.ls(c),W.a9)
y=z!=null
if(y&&!0){H.l(z,{func:1,args:[W.a9]})
if(y)J.hH(a,b,z,!1)}return new W.lr(0,a,b,z,!1,[e])}}},
ls:{"^":"n:31;a",
$1:function(a){return this.a.$1(H.e(a,"$isa9"))}},
c9:{"^":"b;a",
fJ:function(a){var z,y
z=$.$get$dF()
if(z.gjV(z)){for(y=0;y<262;++y)z.q(0,C.a7[y],W.n6())
for(y=0;y<12;++y)z.q(0,C.A[y],W.n7())}},
aS:function(a){return $.$get$fW().X(0,W.bv(a))},
aF:function(a,b,c){var z,y,x
z=W.bv(a)
y=$.$get$dF()
x=y.l(0,H.i(z)+"::"+b)
if(x==null)x=y.l(0,"*::"+b)
if(x==null)return!1
return H.dN(x.$4(a,b,c,this))},
$isaD:1,
m:{
fV:function(a){var z,y
z=W.e3(null)
y=window.location
z=new W.c9(new W.lR(z,y))
z.fJ(a)
return z},
oa:[function(a,b,c,d){H.e(a,"$isQ")
H.C(b)
H.C(c)
H.e(d,"$isc9")
return!0},"$4","n6",16,0,19],
ob:[function(a,b,c,d){var z,y,x
H.e(a,"$isQ")
H.C(b)
H.C(c)
z=H.e(d,"$isc9").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","n7",16,0,19]}},
aA:{"^":"b;$ti",
gU:function(a){return new W.ev(a,this.gp(a),-1,[H.cc(this,a,"aA",0)])}},
eP:{"^":"b;a",
aS:function(a){return C.a.dY(this.a,new W.js(a))},
aF:function(a,b,c){return C.a.dY(this.a,new W.jr(a,b,c))},
$isaD:1},
js:{"^":"n:25;a",
$1:function(a){return H.e(a,"$isaD").aS(this.a)}},
jr:{"^":"n:25;a,b,c",
$1:function(a){return H.e(a,"$isaD").aF(this.a,this.b,this.c)}},
lS:{"^":"b;",
fR:function(a,b,c,d){var z,y,x
this.a.au(0,c)
z=b.d3(0,new W.lT())
y=b.d3(0,new W.lU())
this.b.au(0,z)
x=this.c
x.au(0,C.I)
x.au(0,y)},
aS:function(a){return this.a.X(0,W.bv(a))},
aF:["fv",function(a,b,c){var z,y
z=W.bv(a)
y=this.c
if(y.X(0,H.i(z)+"::"+b))return this.d.jb(c)
else if(y.X(0,"*::"+b))return this.d.jb(c)
else{y=this.b
if(y.X(0,H.i(z)+"::"+b))return!0
else if(y.X(0,"*::"+b))return!0
else if(y.X(0,H.i(z)+"::*"))return!0
else if(y.X(0,"*::*"))return!0}return!1}],
$isaD:1},
lT:{"^":"n:26;",
$1:function(a){return!C.a.X(C.A,H.C(a))}},
lU:{"^":"n:26;",
$1:function(a){return C.a.X(C.A,H.C(a))}},
m_:{"^":"lS;e,a,b,c,d",
aF:function(a,b,c){if(this.fv(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cT(a,"template")==="")return this.e.X(0,b)
return!1},
m:{
h3:function(){var z,y,x,w,v
z=P.h
y=P.eG(C.z,z)
x=H.t(C.z,0)
w=H.l(new W.m0(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.m_(y,P.c0(null,null,null,z),P.c0(null,null,null,z),P.c0(null,null,null,z),null)
y.fR(null,new H.jb(C.z,w,[x,z]),v,null)
return y}}},
m0:{"^":"n:14;",
$1:function(a){return"TEMPLATE::"+H.i(H.C(a))}},
lZ:{"^":"b;",
aS:function(a){var z=J.N(a)
if(!!z.$isf3)return!1
z=!!z.$isdk
if(z&&W.bv(a)==="foreignObject")return!1
if(z)return!0
return!1},
aF:function(a,b,c){if(b==="is"||C.c.a6(b,"on"))return!1
return this.aS(a)},
$isaD:1},
ev:{"^":"b;a,b,c,0d,$ti",
sdC:function(a){this.d=H.x(a,H.t(this,0))},
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdC(J.hG(this.a,z))
this.c=z
return!0}this.sdC(null)
this.c=y
return!1},
gK:function(){return this.d},
$isaX:1},
aD:{"^":"b;"},
lR:{"^":"b;a,b",$iso2:1},
he:{"^":"b;a",
da:function(a){new W.mu(this).$2(a,null)},
b8:function(a,b){if(b==null)J.e2(a)
else J.cf(b,a)},
ih:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hL(a)
x=J.cT(y.gdz(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a8(t)}v="element unprintable"
try{v=J.ae(a)}catch(t){H.a8(t)}try{u=W.bv(a)
this.ig(H.e(a,"$isQ"),b,z,v,u,H.e(y,"$isJ"),H.C(x))}catch(t){if(H.a8(t) instanceof P.aG)throw t
else{this.b8(a,b)
window
s="Removing corrupted element "+H.i(v)
if(typeof console!="undefined")window.console.warn(s)}}},
ig:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.b8(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aS(a)){this.b8(a,b)
window
z="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aF(a,"is",g)){this.b8(a,b)
window
z="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gay()
y=H.c(z.slice(0),[H.t(z,0)])
for(x=f.gay().length-1,z=f.a,w=J.W(z);x>=0;--x){if(x>=y.length)return H.f(y,x)
v=y[x]
if(!this.a.aF(a,J.hS(v),w.b1(z,v))){window
u="Removing disallowed attribute <"+H.i(e)+" "+v+'="'+H.i(w.b1(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.b1(z,v)
w.i2(z,v)}}if(!!J.N(a).$isfd)this.da(a.content)},
$isnU:1},
mu:{"^":"n:46;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.ih(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b8(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hM(z)}catch(w){H.a8(w)
v=H.e(z,"$isA")
if(x){u=v.parentNode
if(u!=null)J.cf(u,v)}else J.cf(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isA")}}},
ln:{"^":"H+i8;"},
lE:{"^":"H+T;"},
lF:{"^":"lE+aA;"},
lK:{"^":"H+T;"},
lL:{"^":"lK+aA;"},
m5:{"^":"H+T;"},
m6:{"^":"m5+aA;"},
mw:{"^":"H+T;"},
mx:{"^":"mw+aA;"}}],["","",,P,{"^":"",
mT:function(a){var z,y
z=J.N(a)
if(!!z.$isbW){y=z.ge4(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h5(a.data,a.height,a.width)},
mS:function(a){if(a instanceof P.h5)return{data:a.a,height:a.b,width:a.c}
return a},
mQ:function(a,b){var z={}
a.a_(0,new P.mR(z))
return z},
eo:function(){var z=$.en
if(z==null){z=J.cS(window.navigator.userAgent,"Opera",0)
$.en=z}return z},
id:function(){var z,y
z=$.ek
if(z!=null)return z
y=$.el
if(y==null){y=J.cS(window.navigator.userAgent,"Firefox",0)
$.el=y}if(y)z="-moz-"
else{y=$.em
if(y==null){y=!P.eo()&&J.cS(window.navigator.userAgent,"Trident/",0)
$.em=y}if(y)z="-ms-"
else z=P.eo()?"-o-":"-webkit-"}$.ek=z
return z},
lW:{"^":"b;",
es:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
d2:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.N(a)
if(!!y.$isaz)return new Date(a.a)
if(!!y.$isjS)throw H.d(P.cB("structured clone of RegExp"))
if(!!y.$isbW)return a
if(!!y.$isdc)return a
if(!!y.$isJ){x=this.es(a)
y=this.b
if(x>=y.length)return H.f(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.q(y,x,w)
a.a_(0,new P.lY(z,this))
return z.a}if(!!y.$isa){x=this.es(a)
z=this.b
if(x>=z.length)return H.f(z,x)
w=z[x]
if(w!=null)return w
return this.jr(a,x)}throw H.d(P.cB("structured clone of other type"))},
jr:function(a,b){var z,y,x,w
z=J.bn(a)
y=z.gp(a)
x=new Array(y)
C.a.q(this.b,b,x)
for(w=0;w<y;++w)C.a.q(x,w,this.d2(z.l(a,w)))
return x}},
lY:{"^":"n:7;a,b",
$2:function(a,b){this.a.a[a]=this.b.d2(b)}},
h5:{"^":"b;e4:a>,b,c",$isbW:1},
mR:{"^":"n:7;a",
$2:function(a,b){this.a[a]=b}},
lX:{"^":"lW;a,b"},
iu:{"^":"cs;a,b",
gbw:function(){var z,y,x
z=this.b
y=H.a6(z,"T",0)
x=W.Q
return new H.j9(new H.dD(z,H.l(new P.iv(),{func:1,ret:P.M,args:[y]}),[y]),H.l(new P.iw(),{func:1,ret:x,args:[y]}),[y,x])},
q:function(a,b,c){var z
H.e(c,"$isQ")
z=this.gbw()
J.hO(z.b.$1(J.cg(z.a,b)),c)},
h:function(a,b){J.e0(this.b.a,b)},
gp:function(a){return J.ar(this.gbw().a)},
l:function(a,b){var z=this.gbw()
return z.b.$1(J.cg(z.a,b))},
gU:function(a){var z=P.j3(this.gbw(),!1,W.Q)
return new J.ax(z,z.length,0,[H.t(z,0)])},
$asT:function(){return[W.Q]},
$asp:function(){return[W.Q]},
$asa:function(){return[W.Q]}},
iv:{"^":"n:23;",
$1:function(a){return!!J.N(H.e(a,"$isA")).$isQ}},
iw:{"^":"n:55;",
$1:function(a){return H.j(H.e(a,"$isA"),"$isQ")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cE:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lG:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lM:{"^":"b;$ti",
gbj:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.x(z+this.c,H.t(this,0))},
gcw:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.x(z+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bO(b,"$isaK",[P.ak],"$asaK"))return!1
z=this.a
y=J.W(b)
x=y.gaY(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbm(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.t(this,0)
if(H.x(z+this.c,w)===y.gbj(b)){if(typeof x!=="number")return x.G()
z=H.x(x+this.d,w)===y.gcw(b)}else z=!1}else z=!1}else z=!1
return z},
gY:function(a){var z,y,x,w,v
z=this.a
y=J.bQ(z)
x=this.b
w=J.bQ(x)
if(typeof z!=="number")return z.G()
v=H.t(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.x(x+this.d,v)
return P.lG(P.cE(P.cE(P.cE(P.cE(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aK:{"^":"lM;aY:a>,bm:b>,bo:c>,bd:d>,$ti"}}],["","",,P,{"^":"",f3:{"^":"dk;",$isf3:1,"%":"SVGScriptElement"},dk:{"^":"Q;",
gcC:function(a){return new P.iu(a,new W.ap(a))},
am:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aD])
C.a.h(z,W.fV(null))
C.a.h(z,W.h3())
C.a.h(z,new W.lZ())
c=new W.he(new W.eP(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).jt(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ap(w)
u=z.gaJ(z)
for(z=J.W(v);x=u.firstChild,x!=null;)z.D(v,x)
return v},
$isdk:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":"",O:{"^":"b;",$isp:1,
$asp:function(){return[P.m]},
$isa:1,
$asa:function(){return[P.m]},
$iskx:1}}],["","",,P,{"^":""}],["","",,P,{"^":"",hX:{"^":"H;",$ishX:1,"%":"WebGLBuffer"},iy:{"^":"H;",$isiy:1,"%":"WebGLFramebuffer"},jL:{"^":"H;",$isjL:1,"%":"WebGLProgram"},de:{"^":"H;",
dU:function(a,b){return a.activeTexture(b)},
dZ:function(a,b,c){return a.attachShader(b,c)},
av:function(a,b,c){return a.bindBuffer(b,c)},
jg:function(a,b,c){return a.bindFramebuffer(b,c)},
aT:function(a,b,c){return a.bindTexture(b,c)},
jh:function(a,b,c){return a.blendFunc(b,c)},
e1:function(a,b,c,d){return a.bufferData(b,c,d)},
jk:function(a,b){return a.clear(b)},
jl:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jm:function(a,b){return a.clearDepth(b)},
jo:function(a,b){return a.compileShader(b)},
jv:function(a,b){return a.createShader(b)},
jx:function(a,b){return a.deleteProgram(b)},
jy:function(a,b){return a.deleteShader(b)},
jB:function(a,b){return a.depthFunc(b)},
jC:function(a,b){return a.disable(b)},
e5:function(a,b){return a.disableVertexAttribArray(b)},
jE:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cG:function(a,b){return a.enable(b)},
e6:function(a,b){return a.enableVertexAttribArray(b)},
f6:function(a,b){return a.generateMipmap(b)},
f7:function(a,b,c){return a.getActiveAttrib(b,c)},
f8:function(a,b,c){return a.getActiveUniform(b,c)},
f9:function(a,b,c){return a.getAttribLocation(b,c)},
d8:function(a,b){return a.getParameter(b)},
fc:function(a,b){return a.getProgramInfoLog(b)},
bZ:function(a,b,c){return a.getProgramParameter(b,c)},
fe:function(a,b){return a.getShaderInfoLog(b)},
ff:function(a,b,c){return a.getShaderParameter(b,c)},
fg:function(a,b,c){return a.getUniformLocation(b,c)},
jY:function(a,b){return a.linkProgram(b)},
kl:function(a,b,c){return a.pixelStorei(b,c)},
fn:function(a,b,c){return a.shaderSource(b,c)},
kC:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.N(g)
if(!!z.$isbW)y=!0
else y=!1
if(y){this.ix(a,b,c,d,e,f,P.mS(g))
return}if(!!z.$isex)z=!0
else z=!1
if(z){this.iy(a,b,c,d,e,f,g)
return}throw H.d(P.bR("Incorrect number or type of arguments"))},
kB:function(a,b,c,d,e,f,g){return this.kC(a,b,c,d,e,f,g,null,null,null)},
ix:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
iy:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bW:function(a,b,c,d){return a.texParameteri(b,c,d)},
P:function(a,b,c){return a.uniform1f(b,c)},
R:function(a,b,c){return a.uniform1i(b,c)},
v:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eZ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
f_:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
f1:function(a,b){return a.useProgram(b)},
kL:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kM:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isde:1,
"%":"WebGLRenderingContext"},k3:{"^":"H;",$isk3:1,"%":"WebGLShader"},kl:{"^":"H;",$iskl:1,"%":"WebGLTexture"},kG:{"^":"H;",$iskG:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",Y:{"^":"b;0a,0b,0c,0d,$ti",
shq:function(a){this.a=H.k(a,"$isa",[H.a6(this,"Y",0)],"$asa")},
sdJ:function(a){this.b=H.l(a,{func:1,ret:P.M,args:[[P.p,H.a6(this,"Y",0)]]})},
sdH:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.m,[P.p,H.a6(this,"Y",0)]]})},
sdK:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.m,[P.p,H.a6(this,"Y",0)]]})},
c2:function(a){this.shq(H.c([],[a]))
this.sdJ(null)
this.sdH(null)
this.sdK(null)},
dc:function(a,b,c){var z=H.a6(this,"Y",0)
H.l(b,{func:1,ret:P.M,args:[[P.p,z]]})
z={func:1,ret:-1,args:[P.m,[P.p,z]]}
H.l(a,z)
H.l(c,z)
this.sdJ(b)
this.sdH(a)
this.sdK(c)},
br:function(a,b){return this.dc(a,null,b)},
hS:function(a){var z
H.k(a,"$isp",[H.a6(this,"Y",0)],"$asp")
z=this.b
if(z!=null)return z.$1(a)
return!0},
fE:function(a,b){var z
H.k(b,"$isp",[H.a6(this,"Y",0)],"$asp")
z=this.c
if(z!=null)z.$2(a,b)},
gp:function(a){return this.a.length},
gU:function(a){var z=this.a
return new J.ax(z,z.length,0,[H.t(z,0)])},
aa:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.a6(this,"Y",0)
H.x(b,z)
z=[z]
if(this.hS(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.fE(x,H.c([b],z))}},
$isp:1,
m:{
d0:function(a){var z=new O.Y([a])
z.c2(a)
return z}}},d9:{"^":"b;0a,0b",
scb:function(a){this.a=H.k(a,"$isa",[V.af],"$asa")},
gp:function(a){return this.a.length},
gA:function(){var z=this.b
if(z==null){z=D.P()
this.b=z}return z},
fF:function(a){var z=this.b
if(!(z==null))z.J(a)},
aK:function(){return this.fF(null)},
ga1:function(){var z=this.a
if(z.length>0)return C.a.gaz(z)
else return V.c1()},
eP:function(a){var z=this.a
if(a==null)C.a.h(z,V.c1())
else C.a.h(z,a)
this.aK()},
cV:function(){var z=this.a
if(z.length>0){z.pop()
this.aK()}}}}],["","",,E,{"^":"",cV:{"^":"b;"},as:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0aj:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sfG:function(a,b){this.y=H.k(b,"$isY",[E.as],"$asY")},
saj:function(a){this.z=H.e(a,"$isbw")},
sai:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gA().L(0,this.geK())
y=this.c
if(y!=null)y.gA().h(0,this.geK())
x=new D.F("shape",z,this.c,this,[F.f5])
x.b=!0
this.ao(x)}},
sae:function(a){var z,y
if(!J.I(this.r,a)){z=this.r
if(z!=null)z.gA().L(0,this.geJ())
if(a!=null)a.gA().h(0,this.geJ())
this.r=a
y=new D.F("mover",z,a,this,[U.ag])
y.b=!0
this.ao(y)}},
aI:function(a){var z,y,x,w
z=this.r
y=z!=null?z.aB(a,this):null
if(!J.I(y,this.x)){x=this.x
this.x=y
w=new D.F("matrix",x,y,this,[V.af])
w.b=!0
this.ao(w)}for(z=this.y.a,z=new J.ax(z,z.length,0,[H.t(z,0)]);z.E();)z.d.aI(a)},
b_:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga1())
else C.a.h(z.a,y.C(0,z.ga1()))
z.aK()
a.eQ(this.f)
z=a.dy
x=(z&&C.a).gaz(z)
if(x!=null&&this.d!=null)x.ks(a,this)
for(z=this.y.a,z=new J.ax(z,z.length,0,[H.t(z,0)]);z.E();)z.d.b_(a)
a.eO()
a.dx.cV()},
gA:function(){var z=this.z
if(z==null){z=D.P()
this.z=z}return z},
ao:function(a){var z=this.z
if(!(z==null))z.J(a)},
a4:function(){return this.ao(null)},
kc:[function(a){H.e(a,"$isy")
this.e=null
this.ao(a)},function(){return this.kc(null)},"ly","$1","$0","geK",0,2,1],
kb:[function(a){this.ao(H.e(a,"$isy"))},function(){return this.kb(null)},"lx","$1","$0","geJ",0,2,1],
k9:[function(a){this.ao(H.e(a,"$isy"))},function(){return this.k9(null)},"lv","$1","$0","geI",0,2,1],
lu:[function(a,b){var z,y,x,w,v,u,t
H.k(b,"$isp",[E.as],"$asp")
for(z=b.length,y=this.geI(),x={func:1,ret:-1,args:[D.y]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gaj()==null){t=new D.bw()
t.sak(null)
t.sb6(null)
t.c=null
t.d=0
u.saj(t)}t=u.gaj()
t.toString
H.l(y,x)
if(t.a==null)t.sak(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a4()},"$2","gk8",8,0,9],
lw:[function(a,b){var z,y
H.k(b,"$isp",[E.as],"$asp")
for(z=b.gU(b),y=this.geI();z.E();)z.gK().gA().L(0,y)
this.a4()},"$2","gka",8,0,9],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaJ:1,
m:{
eu:function(a,b,c,d,e,f){var z=new E.as()
z.a=d
z.b=!0
z.sfG(0,O.d0(E.as))
z.y.br(z.gk8(),z.gka())
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
z.sai(0,e)
z.sae(c)
return z}}},jU:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
siw:function(a){this.dy=H.k(a,"$isa",[O.cy],"$asa")},
sir:function(a){this.fr=H.k(a,"$isJ",[P.h,A.df],"$asJ")},
fA:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.az(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d9()
y=[V.af]
z.scb(H.c([],y))
z.b=null
z.gA().h(0,new E.jW(this))
this.cy=z
z=new O.d9()
z.scb(H.c([],y))
z.b=null
z.gA().h(0,new E.jX(this))
this.db=z
z=new O.d9()
z.scb(H.c([],y))
z.b=null
z.gA().h(0,new E.jY(this))
this.dx=z
this.siw(H.c([],[O.cy]))
z=this.dy;(z&&C.a).h(z,null)
this.sir(new H.aY(0,0,[P.h,A.df]))},
gkn:function(){var z=this.z
if(z==null){z=this.cy.ga1().C(0,this.db.ga1())
this.z=z}return z},
eQ:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaz(z):a;(z&&C.a).h(z,y)},
eO:function(){var z=this.dy
if(z.length>1)z.pop()},
m:{
jV:function(a,b){var z=new E.jU(a,b)
z.fA(a,b)
return z}}},jW:{"^":"n:5;a",
$1:function(a){var z
H.e(a,"$isy")
z=this.a
z.z=null
z.ch=null}},jX:{"^":"n:5;a",
$1:function(a){var z
H.e(a,"$isy")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jY:{"^":"n:5;a",
$1:function(a){var z
H.e(a,"$isy")
z=this.a
z.ch=null
z.cx=null}},f9:{"^":"y;c,a,0b"},kp:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0aj:x<,0y,0z,0Q,0ch,0cx,0cy",
saj:function(a){this.x=H.e(a,"$isbw")},
fI:[function(a){H.e(a,"$isy")
this.kv()},function(){return this.fI(null)},"fH","$1","$0","gdf",0,2,1],
gjQ:function(){var z,y,x
z=Date.now()
y=C.h.a7(P.eq(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.az(z,!1)
return x/y},
dM:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.C()
if(typeof z!=="number")return H.B(z)
x=C.k.cO(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.C()
w=C.k.cO(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.fj(C.x,this.gku())}},
kv:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kr(this),{func:1,ret:-1,args:[P.ak]})
C.P.ha(z)
C.P.i9(z,W.hm(y,P.ak))}},"$0","gku",0,0,3],
kr:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dM()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.az(w,!1)
x.y=P.eq(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sp(w.a,0)
w.aK()
w=x.db
C.a.sp(w.a,0)
w.aK()
w=x.dx
C.a.sp(w.a,0)
w.aK()
w=x.dy;(w&&C.a).sp(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.b_(this.e)}x=this.z
if(!(x==null))x.J(null)}catch(v){z=H.a8(v)
y=H.bo(v)
P.dX("Error: "+H.i(z))
P.dX("Stack: "+H.i(y))
throw H.d(z)}},
m:{
kq:function(a,b,c,d,e){var z,y,x,w
z=J.N(a)
if(!!z.$iscY)return E.fi(a,!0,!0,!0,!1)
y=W.cZ(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcC(a).h(0,y)
w=E.fi(y,!0,!0,!0,!1)
w.a=a
return w},
fi:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kp()
y=P.j_(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.q.bY(a,"webgl",y)
x=H.e(x==null?C.q.bY(a,"experimental-webgl",y):x,"$isde")
if(x==null)H.r(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jV(x,a)
w=new T.kn(x)
w.b=H.ab((x&&C.b).d8(x,3379))
w.c=H.ab(C.b.d8(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.kT(a)
v=new X.iR()
v.c=new X.aZ(!1,!1,!1)
v.si_(P.c0(null,null,null,P.m))
w.b=v
v=new X.jn(w)
v.f=0
v.r=V.b_()
v.x=V.b_()
v.Q=1
v.ch=1
w.c=v
v=new X.j6(w)
v.r=0
v.x=V.b_()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ku(w)
v.e=0
v.f=V.b_()
v.r=V.b_()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.shb(H.c([],[[P.dj,P.b]]))
v=w.z
u=document
t=W.au
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.a0(u,"contextmenu",H.l(w.ghF(),s),!1,t))
v=w.z
r=W.a9
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a0(a,"focus",H.l(w.ghI(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a0(a,"blur",H.l(w.ghB(),q),!1,r))
v=w.z
p=W.bz
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a0(u,"keyup",H.l(w.ghK(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a0(u,"keydown",H.l(w.ghJ(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousedown",H.l(w.ghN(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mouseup",H.l(w.ghP(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousemove",H.l(w.ghO(),s),!1,t))
p=w.z
o=W.bG;(p&&C.a).h(p,W.a0(a,H.C(W.im(a)),H.l(w.ghQ(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a0(u,"mousemove",H.l(w.ghG(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a0(u,"mouseup",H.l(w.ghH(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a0(u,"pointerlockchange",H.l(w.ghR(),q),!1,r))
r=w.z
q=W.bd
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a0(a,"touchstart",H.l(w.ghY(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchend",H.l(w.ghW(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchmove",H.l(w.ghX(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.az(Date.now(),!1)
z.cy=0
z.dM()
return z}}},kr:{"^":"n:32;a",
$1:function(a){var z
H.nt(a)
z=this.a
if(z.ch){z.ch=!1
z.kr()}}}}],["","",,Z,{"^":"",fP:{"^":"b;a,b",$isnG:1,m:{
dC:function(a,b,c){var z
H.k(c,"$isa",[P.m],"$asa")
z=a.createBuffer()
C.b.av(a,b,z)
C.b.e1(a,b,new Int16Array(H.bh(c)),35044)
C.b.av(a,b,null)
return new Z.fP(b,z)}}},e9:{"^":"cV;a,b,c,d,e",
cu:function(a){var z,y,x
try{y=a.a
C.b.e6(y,this.e)
C.b.kL(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.a8(x)
y=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(z))
throw H.d(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},ld:{"^":"b;a",$isnH:1},ea:{"^":"b;a,0b,c,d",
shl:function(a){this.b=H.k(a,"$isa",[Z.bX],"$asa")},
aX:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
cu:function(a){var z,y
z=this.a
C.b.av(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].cu(a)},
kJ:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.e5(x,z[y].e)
C.b.av(x,this.a.a,null)},
b_:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
w=v.c
u=w.a
C.b.av(y,u,w.b)
C.b.jE(y,v.a,v.b,5123,0)
C.b.av(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.h]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ae(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(y,", ")+"\nAttrs:   "+C.a.k(u,", ")},
$iso_:1},bX:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b9(this.c)+"'")+"]"}},be:{"^":"b;a",
gdd:function(a){var z,y
z=this.a
y=(z&$.$get$aP().a)!==0?3:0
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$aQ().a)!==0)y+=2
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$bE().a)!==0)y+=3
if((z&$.$get$bF().a)!==0)y+=4
if((z&$.$get$bf().a)!==0)++y
return(z&$.$get$aM().a)!==0?y+4:y},
jc:function(a){var z,y,x
z=$.$get$aP()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bf()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fO()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.be))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$aP().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aR().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bE().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bF().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bf().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.k(z,"|")},
m:{
ao:function(a){return new Z.be(a)}}}}],["","",,D,{"^":"",ee:{"^":"b;"},bw:{"^":"b;0a,0b,0c,0d",
sak:function(a){this.a=H.k(a,"$isa",[{func:1,ret:-1,args:[D.y]}],"$asa")},
sb6:function(a){this.b=H.k(a,"$isa",[{func:1,ret:-1,args:[D.y]}],"$asa")},
h:function(a,b){var z={func:1,ret:-1,args:[D.y]}
H.l(b,z)
if(this.a==null)this.sak(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.y]})
z=this.a
z=z==null?null:C.a.X(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).L(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.X(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).L(z,b)||y}return y},
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
return!0}if(!x)C.a.a_(y,new D.ir(z))
y=this.b
if(!(y==null))C.a.a_(y,new D.is(z))
z=this.b
if(!(z==null))C.a.sp(z,0)
return!0},
jG:function(){return this.J(null)},
kw:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.J(y)}}},
ag:function(){return this.kw(!0,!1)},
m:{
P:function(){var z=new D.bw()
z.sak(null)
z.sb6(null)
z.c=null
z.d=0
return z}}},ir:{"^":"n:22;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.y]})
z=this.a.a
z.b
a.$1(z)}},is:{"^":"n:22;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.y]})
z=this.a.a
z.b
a.$1(z)}},y:{"^":"b;a,0b"},co:{"^":"y;c,d,a,0b,$ti"},cp:{"^":"y;c,d,a,0b,$ti"},F:{"^":"y;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",eb:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eb))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},eD:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eD))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},iR:{"^":"b;0a,0b,0c,0d",
si_:function(a){this.d=H.k(a,"$isf4",[P.m],"$asf4")},
ki:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ke:function(a){this.c=a.b
this.d.L(0,a.a)
return!1}},eH:{"^":"dd;x,y,c,d,e,a,0b"},j6:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
b4:function(a,b){var z,y,x,w,v,u,t,s
z=new P.az(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.C()
v=b.b
u=this.ch
if(typeof v!=="number")return v.C()
t=new V.ac(y.a+x*w,y.b+v*u)
u=this.a.gbB()
s=new X.c2(a,V.b_(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cU:function(a,b){this.r=a.a
return!1},
bh:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.fh()
if(typeof z!=="number")return z.bX()
this.r=(z&~y)>>>0
return!1},
bg:function(a,b){var z=this.d
if(z==null)return!1
z.J(this.b4(a,b))
return!0},
kj:function(a){return!1},
hM:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.az(Date.now(),!1)
y=this.f
x=new X.eH(c,a,this.a.gbB(),b,z,this)
x.b=!0
y.J(x)
this.y=z
this.x=V.b_()}},aZ:{"^":"b;a,b,c",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aZ))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},c2:{"^":"dd;x,y,z,Q,ch,c,d,e,a,0b"},jn:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c8:function(a,b,c){var z,y,x
z=new P.az(Date.now(),!1)
y=this.a.gbB()
x=new X.c2(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cU:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.J(this.c8(a,b,!0))
return!0},
bh:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.fh()
if(typeof z!=="number")return z.bX()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.J(this.c8(a,b,!0))
return!0},
bg:function(a,b){var z=this.d
if(z==null)return!1
z.J(this.c8(a,b,!1))
return!0},
kk:function(a,b){return!1}},dd:{"^":"y;"},fm:{"^":"dd;x,y,z,Q,ch,c,d,e,a,0b"},ku:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
b4:function(a,b){var z,y,x,w
H.k(a,"$isa",[V.ac],"$asa")
z=new P.az(Date.now(),!1)
y=a.length>0?a[0]:V.b_()
x=this.a.gbB()
w=new X.fm(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
kh:function(a){var z
H.k(a,"$isa",[V.ac],"$asa")
z=this.b
if(z==null)return!1
z.J(this.b4(a,!0))
return!0},
kf:function(a){var z
H.k(a,"$isa",[V.ac],"$asa")
z=this.c
if(z==null)return!1
z.J(this.b4(a,!0))
return!0},
kg:function(a){var z
H.k(a,"$isa",[V.ac],"$asa")
z=this.d
if(z==null)return!1
z.J(this.b4(a,!1))
return!0}},kT:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
shb:function(a){this.z=H.k(a,"$isa",[[P.dj,P.b]],"$asa")},
gbB:function(){var z=this.a
return V.f_(0,0,C.q.ge2(z).c,C.q.ge2(z).d)},
du:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eD(z,new X.aZ(y,a.altKey,a.shiftKey))},
aQ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aZ(y,a.altKey,a.shiftKey)},
cn:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aZ(y,a.altKey,a.shiftKey)},
aE:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.S()
v=z.top
if(typeof x!=="number")return x.S()
return new V.ac(y-w,x-v)},
b7:function(a){return new V.a5(a.movementX,a.movementY)},
cg:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.ac])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.k.ap(u.pageX)
C.k.ap(u.pageY)
s=z.left
C.k.ap(u.pageX)
C.a.h(y,new V.ac(t-s,C.k.ap(u.pageY)-z.top))}return y},
aC:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.eb(z,new X.aZ(y,a.altKey,a.shiftKey))},
cc:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.S()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.S()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
l5:[function(a){this.f=!0},"$1","ghI",4,0,13],
l_:[function(a){this.f=!1},"$1","ghB",4,0,13],
l2:[function(a){H.e(a,"$isau")
if(this.f&&this.cc(a))a.preventDefault()},"$1","ghF",4,0,4],
l7:[function(a){var z
H.e(a,"$isbz")
if(!this.f)return
z=this.du(a)
this.b.ki(z)},"$1","ghK",4,0,27],
l6:[function(a){var z
H.e(a,"$isbz")
if(!this.f)return
z=this.du(a)
this.b.ke(z)},"$1","ghJ",4,0,27],
l9:[function(a){var z,y,x,w
H.e(a,"$isau")
z=this.a
z.focus()
this.f=!0
this.aQ(a)
if(this.x){y=this.aC(a)
x=this.b7(a)
if(this.d.cU(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aC(a)
w=this.aE(a)
if(this.c.cU(y,w))a.preventDefault()},"$1","ghN",4,0,4],
lb:[function(a){var z,y,x
H.e(a,"$isau")
this.aQ(a)
z=this.aC(a)
if(this.x){y=this.b7(a)
if(this.d.bh(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bh(z,x))a.preventDefault()},"$1","ghP",4,0,4],
l4:[function(a){var z,y,x
H.e(a,"$isau")
if(!this.cc(a)){this.aQ(a)
z=this.aC(a)
if(this.x){y=this.b7(a)
if(this.d.bh(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bh(z,x))a.preventDefault()}},"$1","ghH",4,0,4],
la:[function(a){var z,y,x
H.e(a,"$isau")
this.aQ(a)
z=this.aC(a)
if(this.x){y=this.b7(a)
if(this.d.bg(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bg(z,x))a.preventDefault()},"$1","ghO",4,0,4],
l3:[function(a){var z,y,x
H.e(a,"$isau")
if(!this.cc(a)){this.aQ(a)
z=this.aC(a)
if(this.x){y=this.b7(a)
if(this.d.bg(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bg(z,x))a.preventDefault()}},"$1","ghG",4,0,4],
lc:[function(a){var z,y
H.e(a,"$isbG")
this.aQ(a)
z=new V.a5((a&&C.O).gjz(a),C.O.gjA(a)).B(0,180)
if(this.x){if(this.d.kj(z))a.preventDefault()
return}if(this.r)return
y=this.aE(a)
if(this.c.kk(z,y))a.preventDefault()},"$1","ghQ",4,0,37],
ld:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aC(this.y)
x=this.aE(this.y)
this.d.hM(y,x,z)}},"$1","ghR",4,0,13],
lj:[function(a){var z
H.e(a,"$isbd")
this.a.focus()
this.f=!0
this.cn(a)
z=this.cg(a)
if(this.e.kh(z))a.preventDefault()},"$1","ghY",4,0,12],
lh:[function(a){var z
H.e(a,"$isbd")
this.cn(a)
z=this.cg(a)
if(this.e.kf(z))a.preventDefault()},"$1","ghW",4,0,12],
li:[function(a){var z
H.e(a,"$isbd")
this.cn(a)
z=this.cg(a)
if(this.e.kg(z))a.preventDefault()},"$1","ghX",4,0,12]}}],["","",,D,{"^":"",ck:{"^":"b;0a,0b,0c,0d",
gA:function(){var z=this.d
if(z==null){z=D.P()
this.d=z}return z},
aL:[function(a){var z
H.e(a,"$isy")
z=this.d
if(!(z==null))z.J(a)},function(){return this.aL(null)},"kO","$1","$0","gdg",0,2,1],
sae:function(a){var z,y
if(!J.I(this.b,a)){z=this.b
if(z!=null)z.gA().L(0,this.gdg())
y=this.b
this.b=a
if(a!=null)a.gA().h(0,this.gdg())
z=new D.F("mover",y,this.b,this,[U.ag])
z.b=!0
this.aL(z)}},
sa9:function(a,b){var z,y
if(b==null)b=new V.a1(1,1,1)
if(!this.c.u(0,b)){z=this.c
this.c=b
y=new D.F("color",z,b,this,[V.a1])
y.b=!0
this.aL(y)}},
$isa4:1,
$isaJ:1,
m:{
ep:function(a,b){var z=new D.ck()
z.c=new V.a1(1,1,1)
z.a=V.fL()
z.sae(b)
z.sa9(0,a)
return z}}},a4:{"^":"b;",$isaJ:1},iT:{"^":"Y;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sh9:function(a){this.e=H.k(a,"$isa",[D.ck],"$asa")},
shZ:function(a){this.f=H.k(a,"$isa",[D.eU],"$asa")},
sit:function(a){this.r=H.k(a,"$isa",[D.f6],"$asa")},
siE:function(a){this.x=H.k(a,"$isa",[D.ff],"$asa")},
siF:function(a){this.y=H.k(a,"$isa",[D.fg],"$asa")},
siG:function(a){this.z=H.k(a,"$isa",[D.fh],"$asa")},
gA:function(){var z=this.Q
if(z==null){z=D.P()
this.Q=z}return z},
aL:function(a){var z=this.Q
if(!(z==null))z.J(a)},
hL:[function(a){var z
H.e(a,"$isy")
z=this.ch
if(!(z==null))z.J(a)},function(){return this.hL(null)},"l8","$1","$0","gdI",0,2,1],
le:[function(a){var z,y,x
H.k(a,"$isp",[D.a4],"$asp")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.fK(x))return!1}return!0},"$1","ghT",4,0,39],
kX:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a4
H.k(b,"$isp",[z],"$asp")
for(y=b.length,x=this.gdI(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.e(b[u],"$isa4")
if(t instanceof D.ck)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bw()
s.sak(null)
s.sb6(null)
s.c=null
s.d=0
t.d=s}H.l(x,w)
if(s.a==null)s.sak(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.co(a,b,this,[z])
z.b=!0
this.aL(z)},"$2","ghy",8,0,17],
lg:[function(a,b){var z,y,x,w
z=D.a4
H.k(b,"$isp",[z],"$asp")
for(y=b.gU(b),x=this.gdI();y.E();){w=y.gK()
C.a.L(this.e,w)
w.gA().L(0,x)}z=new D.cp(a,b,this,[z])
z.b=!0
this.aL(z)},"$2","ghV",8,0,17],
fK:function(a){var z=C.a.X(this.e,a)
return z},
$asp:function(){return[D.a4]},
$asY:function(){return[D.a4]}},eU:{"^":"b;",$isa4:1,$isaJ:1},f6:{"^":"b;",$isa4:1,$isaJ:1},ff:{"^":"b;",$isa4:1,$isaJ:1},fg:{"^":"b;",$isa4:1,$isaJ:1},fh:{"^":"b;",$isa4:1,$isaJ:1}}],["","",,V,{"^":"",
nJ:[function(a,b){if(typeof b!=="number")return b.S()
if(typeof a!=="number")return H.B(a)
return Math.abs(b-a)<=1e-9},"$2","jk",8,0,36],
cQ:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.k.bq(a-b,z)
return(a<0?a+z:a)+b},
G:function(a,b,c){if(a==null)return C.c.af("null",c)
return C.c.af(C.k.eX($.o.$2(a,0)?0:a,b),c+b+1)},
bm:function(a,b,c){var z,y,x,w,v,u
H.k(a,"$isa",[P.q],"$asa")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.G(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.q(z,u,C.c.af(z[u],x))}return z},
dW:function(a,b){return C.k.kE(Math.pow(b,C.a_.cO(Math.log(H.mP(a))/Math.log(b))))},
a1:{"^":"b;a,b,c",
u:function(a,b){var z
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
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}},
bt:{"^":"b;a,b,c,d",
u:function(a,b){var z
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
cv:{"^":"b;a,b,c,d,e,f,r,x,y",
ah:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cv))return!1
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
return s+(z+w[2]+"]")},
m:{
jl:function(a){return new V.cv(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q)}}},
af:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ah:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
eC:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.o.$2(a2,0))return V.c1()
a3=1/a2
a4=-w
a5=-i
return V.aC((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
C:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isaf")
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
d1:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.D(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
bn:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.Z(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.af))return!1
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
i:function(a){return this.N()},
eu:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
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
N:function(){return this.eu("",3,0)},
F:function(a){return this.eu(a,3,0)},
m:{
c1:function(){var z=$.eN
if(z==null){z=V.aC(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eN=z}return z},
aC:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.af(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
da:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aC(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
eL:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aC(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
eM:function(a,b,c,d){d=V.fK()
return V.eK(V.eW(),d,new V.D(a,b,c))},
eK:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.B(0,Math.sqrt(c.I(c)))
y=b.aG(z)
x=y.B(0,Math.sqrt(y.I(y)))
w=z.aG(x)
v=new V.D(a.a,a.b,a.c)
u=x.W(0).I(v)
t=w.W(0).I(v)
s=z.W(0).I(v)
return V.aC(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
ac:{"^":"b;a,b",
S:function(a,b){return new V.ac(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"},
m:{
b_:function(){var z=$.eV
if(z==null){z=new V.ac(0,0)
$.eV=z}return z}}},
Z:{"^":"b;a,b,c",
G:function(a,b){return new V.Z(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a,b){return new V.Z(this.a-b.a,this.b-b.b,this.c-b.c)},
C:function(a,b){return new V.Z(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"},
m:{
eW:function(){var z=$.bB
if(z==null){z=new V.Z(0,0,0)
$.bB=z}return z}}},
c4:{"^":"b;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c4))return!1
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
eZ:{"^":"b;a,b,c,d",
gaA:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eZ))return!1
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
m:{
f_:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eZ(a,b,c,d)}}},
a5:{"^":"b;a,b",
jX:[function(a){return Math.sqrt(this.I(this))},"$0","gp",1,0,16],
I:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.C()
if(typeof y!=="number")return H.B(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.C()
if(typeof w!=="number")return H.B(w)
return z*y+x*w},
C:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.C()
y=this.b
if(typeof y!=="number")return y.C()
return new V.a5(z*b,y*b)},
B:function(a,b){var z,y
if($.o.$2(b,0)){z=$.fF
if(z==null){z=new V.a5(0,0)
$.fF=z}return z}z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
return new V.a5(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}},
D:{"^":"b;a,b,c",
jX:[function(a){return Math.sqrt(this.I(this))},"$0","gp",1,0,16],
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cS:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.D(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aG:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.D(z*y-x*w,x*v-u*y,u*w-z*v)},
G:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
W:function(a){return new V.D(-this.a,-this.b,-this.c)},
C:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
B:function(a,b){if($.o.$2(b,0))return V.bD()
return new V.D(this.a/b,this.b/b,this.c/b)},
eD:function(){if(!$.o.$2(0,this.a))return!1
if(!$.o.$2(0,this.b))return!1
if(!$.o.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.D))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"},
m:{
bD:function(){var z=$.fJ
if(z==null){z=new V.D(0,0,0)
$.fJ=z}return z},
fK:function(){var z=$.fI
if(z==null){z=new V.D(0,1,0)
$.fI=z}return z},
fL:function(){var z=$.cC
if(z==null){z=new V.D(0,0,1)
$.cC=z}return z}}}}],["","",,U,{"^":"",i3:{"^":"ee;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c4:function(a){var z=V.cQ(a,this.c,this.b)
return z},
gA:function(){var z=this.y
if(z==null){z=D.P()
this.y=z}return z},
T:function(a){var z=this.y
if(!(z==null))z.J(a)},
sf3:function(a,b){},
seE:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c4(z)}z=new D.F("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.T(z)}},
seG:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c4(z)}z=new D.F("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.T(z)}},
sa5:function(a,b){var z,y
b=this.c4(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.F("location",y,b,this,[P.q])
z.b=!0
this.T(z)}},
seF:function(a){var z,y,x
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.F("maximumVelocity",y,a,this,[P.q])
z.b=!0
this.T(z)}},
sa2:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.o.$2(z,a)){x=this.f
this.f=a
z=new D.F("velocity",x,a,this,[P.q])
z.b=!0
this.T(z)}},
se3:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.F("dampening",y,a,this,[P.q])
z.b=!0
this.T(z)}},
aI:function(a){var z,y,x,w
z=this.f
if($.o.$2(z,0)){z=this.r
z=!$.o.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa5(0,this.d+y*a)
z=this.x
if(!$.o.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sa2(y)}},
m:{
eg:function(){var z=new U.i3()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},eh:{"^":"ag;0a,0b",
gA:function(){var z=this.b
if(z==null){z=D.P()
this.b=z}return z},
aB:function(a,b){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eh))return!1
return J.I(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")},
m:{
bT:function(a){var z=new U.eh()
z.a=a
return z}}},ew:{"^":"Y;0e,0f,0r,0a,0b,0c,0d",
gA:function(){var z=this.e
if(z==null){z=D.P()
this.e=z}return z},
T:[function(a){var z
H.e(a,"$isy")
z=this.e
if(!(z==null))z.J(a)},function(){return this.T(null)},"aM","$1","$0","gbt",0,2,1],
kW:[function(a,b){var z,y,x,w,v,u,t,s
z=U.ag
H.k(b,"$isp",[z],"$asp")
for(y=b.length,x=this.gbt(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){s=t.gA()
s.toString
H.l(x,w)
if(s.a==null)s.sak(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.co(a,b,this,[z])
z.b=!0
this.T(z)},"$2","ghx",8,0,15],
lf:[function(a,b){var z,y,x
z=U.ag
H.k(b,"$isp",[z],"$asp")
for(y=b.gU(b),x=this.gbt();y.E();)y.gK().gA().L(0,x)
z=new D.cp(a,b,this,[z])
z.b=!0
this.T(z)},"$2","ghU",8,0,15],
aB:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.V()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ax(z,z.length,0,[H.t(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aB(a,b)
if(w!=null)x=x==null?w:w.C(0,x)}}this.f=x==null?V.c1():x
z=this.e
if(!(z==null))z.ag()}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ew))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.I(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asp:function(){return[U.ag]},
$asY:function(){return[U.ag]},
$isag:1},ag:{"^":"ee;"},f1:{"^":"ag;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gA:function(){var z=this.y
if(z==null){z=D.P()
this.y=z}return z},
T:function(a){var z=this.y
if(!(z==null))z.J(a)},
sf4:function(a){var z,y
a=V.cQ(a,0,6.283185307179586)
z=this.a
if(!$.o.$2(z,a)){y=this.a
this.a=a
z=new D.F("yaw",y,a,this,[P.q])
z.b=!0
this.T(z)}},
seN:function(a){var z,y
a=V.cQ(a,0,6.283185307179586)
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
z=new D.F("pitch",y,a,this,[P.q])
z.b=!0
this.T(z)}},
seS:function(a){var z,y
a=V.cQ(a,0,6.283185307179586)
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
z=new D.F("roll",y,a,this,[P.q])
z.b=!0
this.T(z)}},
aB:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.sf4(this.a+this.d*a.y)
this.seN(this.b+this.e*a.y)
this.seS(this.c+this.f*a.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
this.x=V.aC(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1).C(0,V.eL(this.b)).C(0,V.da(this.a))
z=this.y
if(!(z==null))z.ag()}return this.x},
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.f1))return!1
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
i:function(a){return"Rotater: ["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"], ["+V.G(this.d,3,0)+", "+V.G(this.e,3,0)+", "+V.G(this.f,3,0)+"]"},
m:{
f2:function(a,b,c,d,e,f){var z,y,x
z=new U.f1()
z.a=0
z.b=0
z.c=0
z.d=0
z.e=0
z.f=0
z.r=0
z.sf4(f)
z.seN(d)
z.seS(e)
y=z.d
if(!$.o.$2(y,c)){x=z.d
z.d=c
y=new D.F("deltaYaw",x,c,z,[P.q])
y.b=!0
z.T(y)}y=z.e
if(!$.o.$2(y,a)){x=z.e
z.e=a
y=new D.F("deltaPitch",x,a,z,[P.q])
y.b=!0
z.T(y)}y=z.f
if(!$.o.$2(y,b)){x=z.f
z.f=b
y=new D.F("deltaRoll",x,b,z,[P.q])
y.b=!0
z.T(y)}return z}}},kU:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gA:function(){var z=this.fx
if(z==null){z=D.P()
this.fx=z}return z},
T:[function(a){var z
H.e(a,"$isy")
z=this.fx
if(!(z==null))z.J(a)},function(){return this.T(null)},"aM","$1","$0","gbt",0,2,1],
jd:function(a){var z,y
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.P()
z.b=y
z=y}else z=y
z.h(0,this.ghu())
z=this.a.c
y=z.d
if(y==null){y=D.P()
z.d=y
z=y}else z=y
z.h(0,this.ghv())
z=this.a.c
y=z.c
if(y==null){y=D.P()
z.c=y
z=y}else z=y
z.h(0,this.ghw())
z=this.a.d
y=z.f
if(y==null){y=D.P()
z.f=y
z=y}else z=y
z.h(0,this.ghs())
z=this.a.d
y=z.d
if(y==null){y=D.P()
z.d=y
z=y}else z=y
z.h(0,this.ght())
z=this.a.e
y=z.b
if(y==null){y=D.P()
z.b=y
z=y}else z=y
z.h(0,this.giC())
z=this.a.e
y=z.d
if(y==null){y=D.P()
z.d=y
z=y}else z=y
z.h(0,this.giB())
z=this.a.e
y=z.c
if(y==null){y=D.P()
z.c=y
z=y}else z=y
z.h(0,this.giA())
return!0},
at:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.W()
z=-z}if(this.r){if(typeof y!=="number")return y.W()
y=-y}return new V.a5(z,y)},
kT:[function(a){a=H.j(H.e(a,"$isy"),"$isc2")
if(!J.I(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghu",4,0,2],
kU:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isy"),"$isc2")
if(!this.cx)return
if(this.ch){z=a.d.S(0,a.y)
z=new V.a5(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.S(0,a.y)
z=this.at(new V.a5(y.a,y.b).C(0,2).B(0,z.gaA()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.W()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sa2(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.W()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sa2(-z*10*y)}else{z=a.c
y=a.d
x=y.S(0,a.y)
w=this.at(new V.a5(x.a,x.b).C(0,2).B(0,z.gaA()))
x=this.c
v=w.a
if(typeof v!=="number")return v.W()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa5(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.W()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa5(0,-u*v+x)
this.b.sa2(0)
this.c.sa2(0)
y=y.S(0,a.z)
this.dx=this.at(new V.a5(y.a,y.b).C(0,2).B(0,z.gaA()))}this.aM()},"$1","ghv",4,0,2],
kV:[function(a){var z,y,x
H.e(a,"$isy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.W()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sa2(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.W()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sa2(-y*10*z)
this.aM()}},"$1","ghw",4,0,2],
kR:[function(a){if(H.j(H.e(a,"$isy"),"$iseH").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ghs",4,0,2],
kS:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isy"),"$isc2")
if(!J.I(this.d,a.x.b))return
z=a.c
y=a.d
x=y.S(0,a.y)
w=this.at(new V.a5(x.a,x.b).C(0,2).B(0,z.gaA()))
x=this.c
v=w.a
if(typeof v!=="number")return v.W()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa5(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.W()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa5(0,-u*v+x)
this.b.sa2(0)
this.c.sa2(0)
y=y.S(0,a.z)
this.dx=this.at(new V.a5(y.a,y.b).C(0,2).B(0,z.gaA()))
this.aM()},"$1","ght",4,0,2],
ln:[function(a){H.e(a,"$isy")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","giC",4,0,2],
lm:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isy"),"$isfm")
if(!this.cx)return
if(this.ch){z=a.d.S(0,a.y)
z=new V.a5(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.S(0,a.y)
z=this.at(new V.a5(y.a,y.b).C(0,2).B(0,z.gaA()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.W()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sa2(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.W()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sa2(-z*10*y)}else{z=a.c
y=a.d
x=y.S(0,a.y)
w=this.at(new V.a5(x.a,x.b).C(0,2).B(0,z.gaA()))
x=this.c
v=w.a
if(typeof v!=="number")return v.W()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa5(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.W()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa5(0,-u*v+x)
this.b.sa2(0)
this.c.sa2(0)
y=y.S(0,a.z)
this.dx=this.at(new V.a5(y.a,y.b).C(0,2).B(0,z.gaA()))}this.aM()},"$1","giB",4,0,2],
ll:[function(a){var z,y,x
H.e(a,"$isy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.W()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sa2(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.W()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sa2(-y*10*z)
this.aM()}},"$1","giA",4,0,2],
aB:function(a,b){var z,y,x
z=this.dy
y=a.e
if(typeof z!=="number")return z.V()
if(z<y){this.dy=y
x=a.y
this.c.aI(x)
this.b.aI(x)
this.fr=V.da(this.b.d).C(0,V.eL(this.c.d))}return this.fr},
$isag:1,
m:{
fD:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.kU()
y=U.eg()
y.sf3(0,!0)
y.seE(6.283185307179586)
y.seG(0)
y.sa5(0,0)
y.seF(100)
y.sa2(0)
y.se3(0.5)
z.b=y
x=z.gbt()
y.gA().h(0,x)
y=U.eg()
y.sf3(0,!0)
y.seE(6.283185307179586)
y.seG(0)
y.sa5(0,0)
y.seF(100)
y.sa2(0)
y.se3(0.5)
z.c=y
y.gA().h(0,x)
z.d=null
z.e=!1
z.f=!1
z.r=!1
z.x=2.5
z.y=2.5
z.z=2
z.Q=4
z.cx=!1
z.ch=!1
z.cy=0
z.db=0
z.dx=null
z.dy=0
z.fr=null
z.fx=null
w=new X.aZ(b,!1,!1)
v=z.d
z.d=w
y=new D.F("modifiers",v,w,z,[X.aZ])
y.b=!0
z.T(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.F("invertX",y,!1,z,[P.M])
y.b=!0
z.T(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.F("invertY",y,!1,z,[P.M])
y.b=!0
z.T(y)}z.jd(c)
return z}}}}],["","",,M,{"^":"",ip:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
sh3:function(a,b){this.d=H.k(b,"$isY",[E.as],"$asY")},
aN:[function(a){var z
H.e(a,"$isy")
z=this.x
if(!(z==null))z.J(a)},function(){return this.aN(null)},"kP","$1","$0","gas",0,2,1],
l0:[function(a,b){var z,y,x,w,v,u,t,s
z=E.as
H.k(b,"$isp",[z],"$asp")
for(y=b.length,x=this.gas(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gaj()==null){s=new D.bw()
s.sak(null)
s.sb6(null)
s.c=null
s.d=0
t.saj(s)}s=t.gaj()
s.toString
H.l(x,w)
if(s.a==null)s.sak(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.co(a,b,this,[z])
z.b=!0
this.aN(z)},"$2","ghD",8,0,9],
l1:[function(a,b){var z,y,x
z=E.as
H.k(b,"$isp",[z],"$asp")
for(y=b.gU(b),x=this.gas();y.E();)y.gK().gA().L(0,x)
z=new D.cp(a,b,this,[z])
z.b=!0
this.aN(z)},"$2","ghE",8,0,9],
seU:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gA().L(0,this.gas())
y=this.c
this.c=a
if(a!=null)a.gA().h(0,this.gas())
z=new D.F("technique",y,this.c,this,[O.cy])
z.b=!0
this.aN(z)}},
gA:function(){var z=this.x
if(z==null){z=D.P()
this.x=z}return z},
b_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=new E.f9(a,this)
z.b=!0
y=this.e
if(!(y==null))y.J(z)
a.eQ(this.c)
y=this.b
y.toString
x=a.a
C.b.jg(x,36160,null)
C.b.cG(x,2884)
C.b.cG(x,2929)
C.b.jB(x,513)
w=x.drawingBufferWidth
v=x.drawingBufferHeight
u=y.r
t=u.a
if(typeof w!=="number")return H.B(w)
s=C.k.ap(t*w)
t=u.b
if(typeof v!=="number")return H.B(v)
r=C.k.ap(t*v)
t=C.k.ap(u.c*w)
a.c=t
u=C.k.ap(u.d*v)
a.d=u
C.b.kM(x,s,r,t,u)
C.b.jm(x,y.c)
y=y.a
C.b.jl(x,y.a,y.b,y.c,y.d)
C.b.jk(x,16640)
y=this.a
x=a.c
u=a.d
t=y.c
q=y.d
p=y.e
o=p-q
n=1/Math.tan(t*0.5)
m=V.aC(-n/(x/u),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
y.a
a.cy.eP(m)
x=$.eT
if(x==null){x=V.eW()
u=V.fK()
t=$.fG
if(t==null){t=new V.D(0,0,-1)
$.fG=t}t=V.eK(x,u,t)
$.eT=t
l=t}else l=x
x=y.b
if(x!=null){k=x.aB(a,y)
if(k!=null)l=k.C(0,l)}a.db.eP(l)
y=this.c
if(y!=null)y.aI(a)
for(y=this.d.a,y=new J.ax(y,y.length,0,[H.t(y,0)]);y.E();)y.d.aI(a)
for(y=this.d.a,y=new J.ax(y,y.length,0,[H.t(y,0)]);y.E();)y.d.b_(a)
this.a.toString
a.cy.cV()
a.db.cV()
this.b.toString
a.eO()},
$isnV:1}}],["","",,A,{"^":"",e4:{"^":"b;a,b,c"},hU:{"^":"b;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
jH:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
C.b.e6(w.a,w.c)}},
jD:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
C.b.e5(w.a,w.c)}}},je:{"^":"df;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ax,0an,0bE,0e7,0bF,0bG,0e8,0e9,0bH,0bI,0ea,0eb,0bJ,0bK,0ec,0ed,0bL,0ee,0ef,0bM,0eg,0eh,0bN,0bO,0bP,0ei,0ej,0bQ,0bR,0ek,0el,0bS,0em,0cH,0en,0cI,0eo,0cJ,0ep,0cK,0eq,0cL,0er,0cM,a,b,0c,0d,0e,0f,0r,0x,0y",
sfZ:function(a){this.r1=H.k(a,"$isa",[A.aF],"$asa")},
sfL:function(a){this.cH=H.k(a,"$isa",[A.ds],"$asa")},
sfM:function(a){this.cI=H.k(a,"$isa",[A.du],"$asa")},
sfN:function(a){this.cJ=H.k(a,"$isa",[A.dv],"$asa")},
sfO:function(a){this.cK=H.k(a,"$isa",[A.dw],"$asa")},
sfP:function(a){this.cL=H.k(a,"$isa",[A.dx],"$asa")},
sfQ:function(a){this.cM=H.k(a,"$isa",[A.dy],"$asa")},
fz:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
a2.iK(z)
a2.iR(z)
a2.iL(z)
a2.iZ(z)
a2.j_(z)
a2.iT(z)
a2.j3(z)
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
x.iO(z)
x.iJ(z)
x.iM(z)
x.iP(z)
x.iX(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.iV(z)
x.iW(z)}x.iS(z)
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
p=H.c([],[P.h])
if(x.b!==C.d)C.a.h(p,"ambient()")
if(x.c!==C.d)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.d)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.d)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.k(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.iN(z)
x.iU(z)
x.iY(z)
x.j0(z)
x.j1(z)
x.j2(z)
x.iQ(z)}r=z.a+="// === Main ===\n"
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
this.e=this.dv(s,35633)
this.f=this.dv(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
C.b.dZ(x,v,this.e)
C.b.dZ(x,this.r,this.f)
C.b.jY(x,this.r)
if(!H.dN(C.b.bZ(x,this.r,35714))){m=C.b.fc(x,this.r)
C.b.jx(x,this.r)
H.r(P.u("Failed to link shader: "+H.i(m)))}this.io()
this.iq()
this.Q=this.x.l(0,"posAttr")
this.cx=this.x.l(0,"normAttr")
this.ch=this.x.l(0,"binmAttr")
this.cy=this.x.l(0,"txt2DAttr")
this.db=this.x.l(0,"txtCubeAttr")
this.dx=this.x.l(0,"bendAttr")
if(a2.fr)this.id=H.j(this.y.n(0,"invViewMat"),"$isaF")
if(y)this.dy=H.j(this.y.n(0,"objMat"),"$isaF")
if(w)this.fr=H.j(this.y.n(0,"viewObjMat"),"$isaF")
this.fy=H.j(this.y.n(0,"projViewObjMat"),"$isaF")
if(a2.x2)this.k1=H.j(this.y.n(0,"txt2DMat"),"$isdt")
if(a2.y1)this.k2=H.j(this.y.n(0,"txtCubeMat"),"$isaF")
if(a2.y2)this.k3=H.j(this.y.n(0,"colorMat"),"$isaF")
this.sfZ(H.c([],[A.aF]))
y=a2.ax
if(y>0){this.k4=H.e(this.y.n(0,"bendMatCount"),"$isL")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.l(0,v)
if(k==null)H.r(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(k,"$isaF"))}}y=a2.a
if(y!==C.d){this.r2=H.j(this.y.n(0,"emissionClr"),"$isK")
switch(y){case C.d:break
case C.i:break
case C.e:this.rx=H.j(this.y.n(0,"emissionTxt"),"$isam")
this.x1=H.j(this.y.n(0,"nullEmissionTxt"),"$isL")
break
case C.f:this.ry=H.j(this.y.n(0,"emissionTxt"),"$isan")
this.x1=H.j(this.y.n(0,"nullEmissionTxt"),"$isL")
break}}y=a2.b
if(y!==C.d){this.x2=H.j(this.y.n(0,"ambientClr"),"$isK")
switch(y){case C.d:break
case C.i:break
case C.e:this.y1=H.j(this.y.n(0,"ambientTxt"),"$isam")
this.ax=H.j(this.y.n(0,"nullAmbientTxt"),"$isL")
break
case C.f:this.y2=H.j(this.y.n(0,"ambientTxt"),"$isan")
this.ax=H.j(this.y.n(0,"nullAmbientTxt"),"$isL")
break}}y=a2.c
if(y!==C.d){this.an=H.j(this.y.n(0,"diffuseClr"),"$isK")
switch(y){case C.d:break
case C.i:break
case C.e:this.bE=H.j(this.y.n(0,"diffuseTxt"),"$isam")
this.bF=H.j(this.y.n(0,"nullDiffuseTxt"),"$isL")
break
case C.f:this.e7=H.j(this.y.n(0,"diffuseTxt"),"$isan")
this.bF=H.j(this.y.n(0,"nullDiffuseTxt"),"$isL")
break}}y=a2.d
if(y!==C.d){this.bG=H.j(this.y.n(0,"invDiffuseClr"),"$isK")
switch(y){case C.d:break
case C.i:break
case C.e:this.e8=H.j(this.y.n(0,"invDiffuseTxt"),"$isam")
this.bH=H.j(this.y.n(0,"nullInvDiffuseTxt"),"$isL")
break
case C.f:this.e9=H.j(this.y.n(0,"invDiffuseTxt"),"$isan")
this.bH=H.j(this.y.n(0,"nullInvDiffuseTxt"),"$isL")
break}}y=a2.e
if(y!==C.d){this.bK=H.j(this.y.n(0,"shininess"),"$isX")
this.bI=H.j(this.y.n(0,"specularClr"),"$isK")
switch(y){case C.d:break
case C.i:break
case C.e:this.ea=H.j(this.y.n(0,"specularTxt"),"$isam")
this.bJ=H.j(this.y.n(0,"nullSpecularTxt"),"$isL")
break
case C.f:this.eb=H.j(this.y.n(0,"specularTxt"),"$isan")
this.bJ=H.j(this.y.n(0,"nullSpecularTxt"),"$isL")
break}}switch(a2.f){case C.d:break
case C.i:break
case C.e:this.ec=H.j(this.y.n(0,"bumpTxt"),"$isam")
this.bL=H.j(this.y.n(0,"nullBumpTxt"),"$isL")
break
case C.f:this.ed=H.j(this.y.n(0,"bumpTxt"),"$isan")
this.bL=H.j(this.y.n(0,"nullBumpTxt"),"$isL")
break}if(a2.dy){this.ee=H.j(this.y.n(0,"envSampler"),"$isan")
this.ef=H.j(this.y.n(0,"nullEnvTxt"),"$isL")
y=a2.r
if(y!==C.d){this.bM=H.j(this.y.n(0,"reflectClr"),"$isK")
switch(y){case C.d:break
case C.i:break
case C.e:this.eg=H.j(this.y.n(0,"reflectTxt"),"$isam")
this.bN=H.j(this.y.n(0,"nullReflectTxt"),"$isL")
break
case C.f:this.eh=H.j(this.y.n(0,"reflectTxt"),"$isan")
this.bN=H.j(this.y.n(0,"nullReflectTxt"),"$isL")
break}}y=a2.x
if(y!==C.d){this.bO=H.j(this.y.n(0,"refraction"),"$isX")
this.bP=H.j(this.y.n(0,"refractClr"),"$isK")
switch(y){case C.d:break
case C.i:break
case C.e:this.ei=H.j(this.y.n(0,"refractTxt"),"$isam")
this.bQ=H.j(this.y.n(0,"nullRefractTxt"),"$isL")
break
case C.f:this.ej=H.j(this.y.n(0,"refractTxt"),"$isan")
this.bQ=H.j(this.y.n(0,"nullRefractTxt"),"$isL")
break}}}y=a2.y
if(y!==C.d){this.bR=H.j(this.y.n(0,"alpha"),"$isX")
switch(y){case C.d:break
case C.i:break
case C.e:this.ek=H.j(this.y.n(0,"alphaTxt"),"$isam")
this.bS=H.j(this.y.n(0,"nullAlphaTxt"),"$isL")
break
case C.f:this.el=H.j(this.y.n(0,"alphaTxt"),"$isan")
this.bS=H.j(this.y.n(0,"nullAlphaTxt"),"$isL")
break}}this.sfL(H.c([],[A.ds]))
this.sfM(H.c([],[A.du]))
this.sfN(H.c([],[A.dv]))
this.sfO(H.c([],[A.dw]))
this.sfP(H.c([],[A.dx]))
this.sfQ(H.c([],[A.dy]))
if(a2.k2){y=a2.z
if(y>0){this.em=H.e(this.y.n(0,"dirLightCount"),"$isL")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isK")
x=this.y
w="dirLights["+l+"].color"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isK")
x=this.cH;(x&&C.a).h(x,new A.ds(l,k,j))}}y=a2.Q
if(y>0){this.en=H.e(this.y.n(0,"pntLightCount"),"$isL")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isK")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isK")
x=this.y
w="pntLights["+l+"].color"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isK")
x=this.y
w="pntLights["+l+"].att0"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isX")
x=this.y
w="pntLights["+l+"].att1"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isX")
x=this.y
w="pntLights["+l+"].att2"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isX")
x=this.cI;(x&&C.a).h(x,new A.du(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.eo=H.e(this.y.n(0,"spotLightCount"),"$isL")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isK")
x=this.y
w="spotLights["+l+"].objDir"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isK")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isK")
x=this.y
w="spotLights["+l+"].color"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isK")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isX")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isX")
x=this.y
w="spotLights["+l+"].att0"
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isX")
x=this.y
w="spotLights["+l+"].att1"
d=x.l(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isX")
x=this.y
w="spotLights["+l+"].att2"
c=x.l(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isX")
x=this.cJ;(x&&C.a).h(x,new A.dv(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.ep=H.e(this.y.n(0,"txtDirLightCount"),"$isL")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isK")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isK")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isK")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isK")
x=this.y
w="txtDirLights["+l+"].color"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isK")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isL")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isam")
x=this.cK;(x&&C.a).h(x,new A.dw(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.eq=H.e(this.y.n(0,"txtPntLightCount"),"$isL")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isK")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isK")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isdt")
x=this.y
w="txtPntLights["+l+"].color"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isK")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isL")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isX")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isX")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.l(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isX")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.l(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isan")
x=this.cL;(x&&C.a).h(x,new A.dx(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.er=H.e(this.y.n(0,"txtSpotLightCount"),"$isL")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isK")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isK")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isK")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isK")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isK")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isL")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isK")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.l(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isX")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.l(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isX")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.l(0,w)
if(b==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isX")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.l(0,w)
if(a==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isX")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.l(0,w)
if(a0==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isX")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.l(0,w)
if(a1==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a1,"$isam")
x=this.cM;(x&&C.a).h(x,new A.dy(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
al:function(a,b,c){if(c==null||!c.d)C.b.R(b.a,b.d,1)
else{a.fm(c)
C.b.R(b.a,b.d,0)}},
ac:function(a,b,c){C.b.R(b.a,b.d,1)},
m:{
jd:function(a,b){var z,y
z=a.an
y=new A.je(b,z)
y.fC(b,z)
y.fz(a,b)
return y}}},jh:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ax,an,bE",
iK:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ax+"];\n"
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
iR:function(a){var z
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
iL:function(a){var z
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
iZ:function(a){var z,y
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
j_:function(a){var z,y
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
iT:function(a){var z
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
j3:function(a){var z
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
aD:function(a,b,c){var z
if(b===C.d)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.c.ar(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
iO:function(a){var z,y
z=this.a
if(z===C.d)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aD(a,z,"emission")
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
iJ:function(a){var z,y
z=this.b
if(z===C.d)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aD(a,z,"ambient")
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
iM:function(a){var z,y
z=this.c
if(z===C.d)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aD(a,z,"diffuse")
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
iP:function(a){var z,y
z=this.d
if(z===C.d)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aD(a,z,"invDiffuse")
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
iX:function(a){var z,y
z=this.e
if(z===C.d)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aD(a,z,"specular")
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
iS:function(a){var z,y
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
iV:function(a){var z,y
z=this.r
if(z===C.d)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aD(a,z,"reflect")
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
iW:function(a){var z,y
z=this.x
if(z===C.d)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aD(a,z,"refract")
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
iN:function(a){var z,y
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
iU:function(a){var z,y
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
iY:function(a){var z,y
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
j0:function(a){var z,y,x
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
j1:function(a){var z,y,x
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
j2:function(a){var z,y,x
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
iQ:function(a){var z
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
i:function(a){return this.an}},ds:{"^":"b;a,b,c"},dw:{"^":"b;a,b,c,d,e,f,r,x"},du:{"^":"b;a,b,c,d,e,f,r"},dx:{"^":"b;a,b,c,d,e,f,r,x,y,z"},dv:{"^":"b;a,b,c,d,e,f,r,x,y,z"},dy:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},df:{"^":"cV;",
fC:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dv:function(a,b){var z,y,x
z=this.a
y=C.b.jv(z,b)
C.b.fn(z,y,a)
C.b.jo(z,y)
if(!H.dN(C.b.ff(z,y,35713))){x=C.b.fe(z,y)
C.b.jy(z,y)
throw H.d(P.u("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
io:function(){var z,y,x,w,v,u
z=H.c([],[A.e4])
y=this.a
x=H.ab(C.b.bZ(y,this.r,35721))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.f7(y,this.r,w)
u=C.b.f9(y,this.r,v.name)
C.a.h(z,new A.e4(y,v.name,u))}this.x=new A.hU(z)},
iq:function(){var z,y,x,w,v,u
z=H.c([],[A.ad])
y=this.a
x=H.ab(C.b.bZ(y,this.r,35718))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.f8(y,this.r,w)
u=C.b.fg(y,this.r,v.name)
C.a.h(z,this.jw(v.type,v.size,v.name,u))}this.y=new A.kF(z)},
aP:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.L(z,y,b,c)
else return A.dr(z,y,b,a,c)},
h6:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.am(z,y,b,c)
else return A.dr(z,y,b,a,c)},
h7:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.an(z,y,b,c)
else return A.dr(z,y,b,a,c)},
bz:function(a,b){return new P.fT(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
jw:function(a,b,c,d){switch(a){case 5120:return this.aP(b,c,d)
case 5121:return this.aP(b,c,d)
case 5122:return this.aP(b,c,d)
case 5123:return this.aP(b,c,d)
case 5124:return this.aP(b,c,d)
case 5125:return this.aP(b,c,d)
case 5126:return new A.X(this.a,this.r,c,d)
case 35664:return new A.kA(this.a,this.r,c,d)
case 35665:return new A.K(this.a,this.r,c,d)
case 35666:return new A.kD(this.a,this.r,c,d)
case 35667:return new A.kB(this.a,this.r,c,d)
case 35668:return new A.kC(this.a,this.r,c,d)
case 35669:return new A.kE(this.a,this.r,c,d)
case 35674:return new A.kH(this.a,this.r,c,d)
case 35675:return new A.dt(this.a,this.r,c,d)
case 35676:return new A.aF(this.a,this.r,c,d)
case 35678:return this.h6(b,c,d)
case 35680:return this.h7(b,c,d)
case 35670:throw H.d(this.bz("BOOL",c))
case 35671:throw H.d(this.bz("BOOL_VEC2",c))
case 35672:throw H.d(this.bz("BOOL_VEC3",c))
case 35673:throw H.d(this.bz("BOOL_VEC4",c))
default:throw H.d(P.u("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},cj:{"^":"b;a,b",
i:function(a){return this.b}},ad:{"^":"b;"},kF:{"^":"b;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.l(0,b)
if(z==null)throw H.d(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.N()},
jP:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
N:function(){return this.jP("\n")}},L:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},kB:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},kC:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},kE:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},kz:{"^":"ad;0e,0f,a,b,c,d",
siH:function(a){this.e=H.k(a,"$isa",[P.m],"$asa")},
i:function(a){return"Uniform1iv: "+H.i(this.c)},
m:{
dr:function(a,b,c,d,e){var z=new A.kz(a,b,c,e)
z.f=d
z.siH(P.j2(d,0,!1,P.m))
return z}}},X:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},kA:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},K:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},kD:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},kH:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},dt:{"^":"ad;a,b,c,d",
aq:function(a){var z=new Float32Array(H.bh(H.k(a,"$isa",[P.q],"$asa")))
C.b.eZ(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},aF:{"^":"ad;a,b,c,d",
aq:function(a){var z=new Float32Array(H.bh(H.k(a,"$isa",[P.q],"$asa")))
C.b.f_(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},am:{"^":"ad;a,b,c,d",
fm:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)C.b.R(y,x,0)
else C.b.R(y,x,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},an:{"^":"ad;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
dQ:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.ah,P.q,P.q]})
z=F.dg()
F.bK(z,b,c,d,a,1,0,0,1)
F.bK(z,b,c,d,a,0,1,0,3)
F.bK(z,b,c,d,a,0,0,1,2)
F.bK(z,b,c,d,a,-1,0,0,0)
F.bK(z,b,c,d,a,0,-1,0,0)
F.bK(z,b,c,d,a,0,0,-1,3)
z.aw()
return z},
cH:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bK:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.ah,P.q,P.q]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.D(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.D(t+h,s+f,r+g)
z.b=q
p=new V.D(t-h,s-f,r-g)
z.c=p
o=new V.D(y-h,w-f,v-g)
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
j=F.dZ(d,e,new F.my(z,F.cH(z.c),F.cH(z.d),k,l,c),b)
if(j!=null)a.bf(j)},
hs:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.q,args:[P.q]})
if(f<3)return
z=F.dg()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.ah])
v=z.a
u=new V.D(0,0,y)
u=u.B(0,Math.sqrt(u.I(u)))
C.a.h(w,v.j7(new V.c4(a,-1,-1,-1),new V.bt(1,1,1,1),new V.Z(0,0,d),new V.D(0,0,y),new V.ac(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.B(p)
o=new V.D(r,q,y).B(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.c8(new V.c4(a,-1,-1,-1),null,new V.bt(n,l,m,1),new V.Z(r*p,q*p,d),new V.D(0,0,y),new V.ac(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.j5(w)
return z},
hq:function(a,b,c,d,e,f){return F.mV(!0,c,d,new F.mU(a,f),e)},
mV:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.dZ(c,e,new F.mX(d),null)
if(z==null)return
z.aw()
z.cq()
if(b)z.bf(F.hs(3,!1,!1,1,new F.mY(d),e))
z.bf(F.hs(1,!0,!1,-1,new F.mZ(d),e))
return z},
nz:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.nA()
y=F.dQ(a,null,new F.nB(z,c),d)
y.cq()
return y},
hE:function(a,b,c,d){return F.hr(c,a,d,b,new F.nD())},
ng:function(a,b,c,d,e,f){return F.hr(d,a,e,b,new F.nh(f,c))},
hr:function(a,b,c,d,e){var z=F.dZ(a,b,new F.mW(H.l(e,{func:1,ret:V.Z,args:[P.q]}),d,b,c),null)
if(z==null)return
z.aw()
z.cq()
return z},
dZ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.ah,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.dg()
y=H.c([],[F.ah])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.c8(null,null,new V.bt(u,0,0,1),null,null,new V.ac(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cE(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.c8(null,null,new V.bt(o,n,m,1),null,null,new V.ac(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cE(d))}}z.d.j6(a+1,b+1,y)
return z},
my:{"^":"n:8;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cS(z.b,b).cS(z.d.cS(z.c,b),c)
a.sa5(0,new V.Z(y.a,y.b,y.c))
a.seV(y.B(0,Math.sqrt(y.I(y))))
z=1-b
x=1-c
a.se_(new V.c4(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mU:{"^":"n:21;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mX:{"^":"n:8;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.B(v)
y=-y*v
u=x*v
a.sa5(0,new V.Z(y,u,w))
u=new V.D(y,u,w)
a.seV(u.B(0,Math.sqrt(u.I(u))))
a.se_(new V.c4(1-c,2+c,-1,-1))}},
mY:{"^":"n:30;a",
$1:function(a){return this.a.$2(a,1)}},
mZ:{"^":"n:30;a",
$1:function(a){return this.a.$2(1-a,0)}},
nA:{"^":"n:21;",
$2:function(a,b){return 0}},
nB:{"^":"n:8;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.B(z)
y=a.f
x=new V.D(y.a,y.b,y.c)
z=x.B(0,Math.sqrt(x.I(x))).C(0,this.b+z)
a.sa5(0,new V.Z(z.a,z.b,z.c))}},
nD:{"^":"n:20;",
$1:function(a){return new V.Z(Math.cos(a),Math.sin(a),0)}},
nh:{"^":"n:20;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.Z(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mW:{"^":"n:8;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.e_(y.$1(z),x)
x=J.e_(y.$1(z+3.141592653589793/this.c),x).S(0,w)
x=new V.D(x.a,x.b,x.c)
v=x.B(0,Math.sqrt(x.I(x)))
y=$.fH
if(y==null){y=new V.D(1,0,0)
$.fH=y
u=y}else u=y
y=v.aG(!J.I(v,u)?V.fL():u)
t=y.B(0,Math.sqrt(y.I(y)))
y=t.aG(v)
u=y.B(0,Math.sqrt(y.I(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.C(0,y*x)
x=t.C(0,r*x)
a.sa5(0,w.G(0,new V.Z(y.a-x.a,y.b-x.b,y.c-x.c)))}},
aa:{"^":"b;0a,0b,0c,0d,0e",
bb:function(){if(!this.gbc()){C.a.L(this.a.a.d.b,this)
this.a.a.a4()}this.cj()
this.ck()
this.i5()},
co:function(a){this.a=a
C.a.h(a.d.b,this)},
cp:function(a){this.b=a
C.a.h(a.d.c,this)},
im:function(a){this.c=a
C.a.h(a.d.d,this)},
cj:function(){var z=this.a
if(z!=null){C.a.L(z.d.b,this)
this.a=null}},
ck:function(){var z=this.b
if(z!=null){C.a.L(z.d.c,this)
this.b=null}},
i5:function(){var z=this.c
if(z!=null){C.a.L(z.d.d,this)
this.c=null}},
gbc:function(){return this.a==null||this.b==null||this.c==null},
fY:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bD()
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.eD())return
return v.B(0,Math.sqrt(v.I(v)))},
h2:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.S(0,y)
z=new V.D(z.a,z.b,z.c)
v=z.B(0,Math.sqrt(z.I(z)))
z=w.S(0,y)
z=new V.D(z.a,z.b,z.c)
z=v.aG(z.B(0,Math.sqrt(z.I(z))))
return z.B(0,Math.sqrt(z.I(z)))},
cB:function(){if(this.d!=null)return!0
var z=this.fY()
if(z==null){z=this.h2()
if(z==null)return!1}this.d=z
this.a.a.a4()
return!0},
fX:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bD()
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.eD())return
return v.B(0,Math.sqrt(v.I(v)))},
h1:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.o.$2(n,0)){z=r.S(0,u)
z=new V.D(z.a,z.b,z.c)
m=z.B(0,Math.sqrt(z.I(z)))
if(o.a-p.a<0)m=m.W(0)}else{l=(z-q.b)/n
z=r.S(0,u).C(0,l).G(0,u).S(0,x)
z=new V.D(z.a,z.b,z.c)
m=z.B(0,Math.sqrt(z.I(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.W(0)}z=this.d
if(z!=null){k=z.B(0,Math.sqrt(z.I(z)))
z=k.aG(m)
z=z.B(0,Math.sqrt(z.I(z))).aG(k)
m=z.B(0,Math.sqrt(z.I(z)))}return m},
cz:function(){if(this.e!=null)return!0
var z=this.fX()
if(z==null){z=this.h1()
if(z==null)return!1}this.e=z
this.a.a.a4()
return!0},
gjn:function(a){if(J.I(this.a,this.b))return!0
if(J.I(this.b,this.c))return!0
if(J.I(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var z,y
if(this.gbc())return a+"disposed"
z=a+C.c.af(J.ae(this.a.e),0)+", "+C.c.af(J.ae(this.b.e),0)+", "+C.c.af(J.ae(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
N:function(){return this.F("")},
m:{
bx:function(a,b,c){var z,y,x
z=new F.aa()
y=a.a
if(y==null)H.r(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.u("May not create a face with vertices attached to different shapes."))
z.co(a)
z.cp(b)
z.im(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a4()
return z}}},
it:{"^":"b;"},
kc:{"^":"it;",
be:function(a,b,c){var z,y
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
bA:{"^":"b;0a,0b",
bb:function(){if(!this.gbc()){C.a.L(this.a.a.c.b,this)
this.a.a.a4()}this.cj()
this.ck()},
co:function(a){this.a=a
C.a.h(a.c.b,this)},
cp:function(a){this.b=a
C.a.h(a.c.c,this)},
cj:function(){var z=this.a
if(z!=null){C.a.L(z.c.b,this)
this.a=null}},
ck:function(){var z=this.b
if(z!=null){C.a.L(z.c.c,this)
this.b=null}},
gbc:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){if(this.gbc())return a+"disposed"
return a+C.c.af(J.ae(this.a.e),0)+", "+C.c.af(J.ae(this.b.e),0)},
N:function(){return this.F("")},
m:{
iU:function(a,b){var z,y,x
z=new F.bA()
y=a.a
if(y==null)H.r(P.u("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.u("May not create a line with vertices attached to different shapes."))
z.co(a)
z.cp(b)
C.a.h(z.a.a.c.b,z)
z.a.a.a4()
return z}}},
iV:{"^":"b;"},
ky:{"^":"iV;",
be:function(a,b,c){var z,y
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
c3:{"^":"b;0a",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.c.af(J.ae(z.e),0)},
N:function(){return this.F("")}},
f5:{"^":"b;0a,0b,0c,0d,0e",
gA:function(){var z=this.e
if(z==null){z=D.P()
this.e=z}return z},
bf:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.w()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){v=z[w]
this.a.h(0,v.jq())}this.a.w()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.c3()
if(r.a==null)H.r(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.J(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.w()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.iU(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.w()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.w()
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
if(!(z==null))z.ag()},
aw:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aw()||!1
if(!this.a.aw())y=!1
z=this.e
if(!(z==null))z.ag()
return y},
k6:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.t(z,0)])
for(z=[F.ah];y.length!==0;){x=C.a.gjL(y)
C.a.kp(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.z)(y),++u){t=y[u]
if(t!=null&&a.be(0,x,t)){C.a.h(w,t)
C.a.L(y,t)}}if(w.length>1)b.bf(w)}}this.a.w()
this.c.cY()
this.d.cY()
this.b.kq()
this.c.cZ(new F.ky())
this.d.cZ(new F.kc())
z=this.e
if(!(z==null))z.ag()},
j9:function(a){this.k6(new F.l7(),new F.jt())},
cq:function(){return this.j9(null)},
cN:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.d
this.d.cN()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.f(z,y)
x=z[y]
z=x.r
if(z!=null)x.seH(new V.D(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.D(w,v,z).B(0,Math.sqrt(w*w+v*v+z*z))
if(!J.I(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.J(null)}}}}z=this.e
if(!(z==null))z.ag()},
ji:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aP()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$bE().a)!==0)++w
if((x&$.$get$bF().a)!==0)++w
if((x&$.$get$bf().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
v=b.gdd(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.e9])
for(r=0,q=0;q<w;++q){p=b.jc(q)
o=p.gdd(p)
C.a.q(s,q,new Z.e9(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].jZ(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.q(t,l,m[k]);++l}}r+=o}H.k(t,"$isa",[x],"$asa")
y=a.a
j=y.createBuffer()
C.b.av(y,34962,j)
C.b.e1(y,34962,new Float32Array(H.bh(t)),35044)
C.b.av(y,34962,null)
i=new Z.ea(new Z.fP(34962,j),s,b)
i.shl(H.c([],[Z.bX]))
if(this.b.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)}f=Z.dC(y,34963,H.k(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.bX(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)}f=Z.dC(y,34963,H.k(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.bX(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.w()
C.a.h(h,g.e)}f=Z.dC(y,34963,H.k(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.bX(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.F("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.F("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.F("   "))}return C.a.k(z,"\n")},
ao:function(a){var z=this.e
if(!(z==null))z.J(a)},
a4:function(){return this.ao(null)},
$isnX:1,
m:{
dg:function(){var z,y
z=new F.f5()
y=new F.l2(z)
y.b=!1
y.siI(H.c([],[F.ah]))
z.a=y
y=new F.k6(z)
y.scf(H.c([],[F.c3]))
z.b=y
y=new F.k5(z)
y.shn(H.c([],[F.bA]))
z.c=y
y=new F.k4(z)
y.shc(H.c([],[F.aa]))
z.d=y
z.e=null
return z}}},
k4:{"^":"b;a,0b",
shc:function(a){this.b=H.k(a,"$isa",[F.aa],"$asa")},
j5:function(a){var z,y,x,w,v,u,t
H.k(a,"$isa",[F.ah],"$asa")
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
j6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,"$isa",[F.ah],"$asa")
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
cZ:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.l(0,v)
for(t=v-1;t>=0;--t){s=w.d.l(0,t)
if(a.be(0,u,s)){u.bb()
break}}}}},
cY:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.gjn(x)
if(y)x.bb()}},
aw:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cB())x=!1
return x},
cA:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cz())x=!1
return x},
cN:function(){var z,y,x,w,v,u
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
v=w.b
w.b=w.c
w.c=v
u=w.d
if(u!=null)w.d=new V.D(-u.a,-u.b,-u.c)
u=w.e
if(u!=null)w.e=new V.D(-u.a,-u.b,-u.c)
u=w.a.a.e
if(!(u==null))u.J(null)}},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
N:function(){return this.F("")}},
k5:{"^":"b;a,0b",
shn:function(a){this.b=H.k(a,"$isa",[F.bA],"$asa")},
gp:function(a){return this.b.length},
cZ:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.l(0,v)
for(t=v-1;t>=0;--t){s=w.c.l(0,t)
if(a.be(0,u,s)){u.bb()
break}}}}},
cY:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.I(x.a,x.b)
if(y)x.bb()}},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].F(a+(""+x+". ")))}return C.a.k(z,"\n")},
N:function(){return this.F("")}},
k6:{"^":"b;a,0b",
scf:function(a){this.b=H.k(a,"$isa",[F.c3],"$asa")},
gp:function(a){return this.b.length},
kq:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
x=y.a
if(x.b.b.length>1){if(x!=null){C.a.L(x.a.b.b,y)
x=y.a.a.e
if(!(x==null))x.J(null)}x=y.a
if(x!=null){C.a.L(x.b.b,y)
y.a=null}}}},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
N:function(){return this.F("")}},
ah:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cE:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.c8(this.cx,x,u,z,y,w,v,a,t)},
jq:function(){return this.cE(null)},
sa5:function(a,b){var z
if(!J.I(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a4()}},
seH:function(a){var z
a=a==null?null:a.B(0,Math.sqrt(a.I(a)))
if(!J.I(this.r,a)){this.r=a
z=this.a
if(z!=null)z.a4()}},
seV:function(a){var z
if(!J.I(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a4()}},
se_:function(a){var z
if(!J.I(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a4()}},
jZ:function(a){var z,y
if(a.u(0,$.$get$aP())){z=this.f
y=[P.q]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aO())){z=this.r
y=[P.q]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aN())){z=this.x
y=[P.q]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aQ())){z=this.y
y=[P.q]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.u(0,$.$get$aR())){z=this.z
y=[P.q]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bE())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bF())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.u(0,$.$get$bf()))return H.c([this.ch],[P.q])
else if(a.u(0,$.$get$aM())){z=this.cx
y=[P.q]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.q])},
cB:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bD()
this.d.a_(0,new F.lc(z))
z=z.a
this.r=z.B(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.ag()}return!0},
cz:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bD()
this.d.a_(0,new F.lb(z))
z=z.a
this.x=z.B(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.ag()}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.c.af(J.ae(this.e),0))
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
N:function(){return this.F("")},
m:{
c8:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ah()
y=new F.la(z)
y.scf(H.c([],[F.c3]))
z.b=y
y=new F.l6(z)
x=[F.bA]
y.sho(H.c([],x))
y.shp(H.c([],x))
z.c=y
y=new F.l3(z)
x=[F.aa]
y.shd(H.c([],x))
y.she(H.c([],x))
y.shf(H.c([],x))
z.d=y
h=$.$get$fM()
z.e=0
y=$.$get$aP()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aO().a)!==0?e:null
z.x=(x&$.$get$aN().a)!==0?b:null
z.y=(x&$.$get$aQ().a)!==0?f:null
z.z=(x&$.$get$aR().a)!==0?g:null
z.Q=(x&$.$get$fN().a)!==0?c:null
z.ch=(x&$.$get$bf().a)!==0?i:0
z.cx=(x&$.$get$aM().a)!==0?a:null
return z}}},
lc:{"^":"n:6;a",
$1:function(a){var z,y
H.e(a,"$isaa")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
lb:{"^":"n:6;a",
$1:function(a){var z,y
H.e(a,"$isaa")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
l2:{"^":"b;a,0b,0c",
siI:function(a){this.c=H.k(a,"$isa",[F.ah],"$asa")},
w:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.f(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.d(P.u("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a4()
return!0},
j8:function(a,b,c,d,e,f,g,h,i){var z=F.c8(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
j7:function(a,b,c,d,e,f){return this.j8(a,null,b,c,d,e,f,null,0)},
gp:function(a){return this.c.length},
aw:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cB()
return!0},
cA:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cz()
return!0},
jj:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.B(0,Math.sqrt(u*u+t*t+s*s))
if(!J.I(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.J(null)}}}}return!0},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
this.w()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
N:function(){return this.F("")}},
l3:{"^":"b;a,0b,0c,0d",
shd:function(a){this.b=H.k(a,"$isa",[F.aa],"$asa")},
she:function(a){this.c=H.k(a,"$isa",[F.aa],"$asa")},
shf:function(a){this.d=H.k(a,"$isa",[F.aa],"$asa")},
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
a_:function(a,b){H.l(b,{func:1,ret:-1,args:[F.aa]})
C.a.a_(this.b,b)
C.a.a_(this.c,new F.l4(this,b))
C.a.a_(this.d,new F.l5(this,b))},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
N:function(){return this.F("")}},
l4:{"^":"n:6;a,b",
$1:function(a){H.e(a,"$isaa")
if(!J.I(a.a,this.a))this.b.$1(a)}},
l5:{"^":"n:6;a,b",
$1:function(a){var z
H.e(a,"$isaa")
z=this.a
if(!J.I(a.a,z)&&!J.I(a.b,z))this.b.$1(a)}},
l6:{"^":"b;a,0b,0c",
sho:function(a){this.b=H.k(a,"$isa",[F.bA],"$asa")},
shp:function(a){this.c=H.k(a,"$isa",[F.bA],"$asa")},
gp:function(a){return this.b.length+this.c.length},
l:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
N:function(){return this.F("")}},
l8:{"^":"b;"},
l7:{"^":"l8;",
be:function(a,b,c){return J.I(b.f,c.f)}},
l9:{"^":"b;"},
jt:{"^":"l9;",
bf:function(a){var z,y,x,w
H.k(a,"$isa",[F.ah],"$asa")
z=V.bD()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.D(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.B(0,Math.sqrt(z.I(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x)a[x].seH(z)
return}},
la:{"^":"b;a,0b",
scf:function(a){this.b=H.k(a,"$isa",[F.c3],"$asa")},
gp:function(a){return this.b.length},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
N:function(){return this.F("")}}}],["","",,O,{"^":"",jc:{"^":"cy;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sh_:function(a){this.e=H.k(a,"$isY",[V.af],"$asY")},
gA:function(){var z=this.dy
if(z==null){z=D.P()
this.dy=z}return z},
a3:[function(a){var z
H.e(a,"$isy")
z=this.dy
if(!(z==null))z.J(a)},function(){return this.a3(null)},"hC","$1","$0","gbx",0,2,1],
ib:[function(a){H.e(a,"$isy")
this.a=null
this.a3(a)},function(){return this.ib(null)},"lk","$1","$0","gia",0,2,1],
kY:[function(a,b){var z=V.af
z=new D.co(a,H.k(b,"$isp",[z],"$asp"),this,[z])
z.b=!0
this.a3(z)},"$2","ghz",8,0,28],
kZ:[function(a,b){var z=V.af
z=new D.cp(a,H.k(b,"$isp",[z],"$asp"),this,[z])
z.b=!0
this.a3(z)},"$2","ghA",8,0,28],
ds:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.dx
y=C.h.a7(z.e.length+3,4)*4
x=C.h.a7(z.f.length+3,4)*4
w=C.h.a7(z.r.length+3,4)*4
v=C.h.a7(z.x.length+3,4)*4
u=C.h.a7(z.y.length+3,4)*4
t=C.h.a7(z.z.length+3,4)*4
s=C.h.a7(this.e.a.length+3,4)*4
z=this.b!=null
r=this.d!=null
q=this.f.c
p=this.r.c
o=this.x.c
n=this.y.c
m=this.z.c
l=this.Q.c
k=this.cx.c
j=this.cy.c
i=this.db.c
h="MaterialLight_"+C.h.i(q.a)+C.h.i(p.a)+C.h.i(o.a)+C.h.i(n.a)+C.h.i(m.a)+C.h.i(l.a)+C.h.i(k.a)+C.h.i(j.a)+C.h.i(i.a)+"_"
h+=z?"1":"0"
h+="0"
h=h+(r?"1":"0")+"_"+s+"_"+y+"_"+x+"_"+w+"_"+v+"_"+u+"_"+t
g=k!==C.d||j!==C.d
f=p!==C.d||o!==C.d||n!==C.d||m!==C.d
e=m===C.d
d=!e||g
c=o!==C.d||n!==C.d||!e||l!==C.d||g
e=l===C.d
b=!e
a=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a0=q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=$.$get$aP()
if(c){z=$.$get$aO()
a5=new Z.be(a5.a|z.a)}if(b){z=$.$get$aN()
a5=new Z.be(a5.a|z.a)}if(a){z=$.$get$aQ()
a5=new Z.be(a5.a|z.a)}if(a0){z=$.$get$aR()
a5=new Z.be(a5.a|z.a)}if(a2){z=$.$get$aM()
a5=new Z.be(a5.a|z.a)}return new A.jh(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,!1,r,s,h.charCodeAt(0)==0?h:h,a5)},
Z:function(a,b){H.k(a,"$isa",[T.dl],"$asa")
if(b!=null)if(!C.a.X(a,b)){b.a=a.length
C.a.h(a,b)}},
aI:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.ax(z,z.length,0,[H.t(z,0)]);z.E();){y=z.d
y.toString
x=$.cC
if(x==null){x=new V.D(0,0,1)
$.cC=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.d1(x)}}},
ks:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=this.a
if(z==null){z=this.ds()
y=a.fr.l(0,z.an)
if(y==null){y=A.jd(z,a.a)
x=y.b
if(x.length===0)H.r(P.u("May not cache a shader with no name."))
if(a.fr.bC(x))H.r(P.u('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.q(0,x,y)}this.a=y
a0.e=null
z=y}w=z.z
v=w.bE
z=a0.e
if(!(z instanceof Z.ea)){a0.e=null
z=null}if(z==null||!z.d.u(0,v)){z=w.r1
if(z)a0.d.aw()
u=w.r2
if(u){t=a0.d
s=t.e
if(!(s==null))++s.d
t.d.cA()
t.a.cA()
t=t.e
if(!(t==null))t.ag()}t=w.ry
if(t){s=a0.d
r=s.e
if(!(r==null))++r.d
s.a.jj()
s=s.e
if(!(s==null))s.ag()}q=a0.d.ji(new Z.ld(a.a),v)
q.aX($.$get$aP()).e=this.a.Q.c
if(z)q.aX($.$get$aO()).e=this.a.cx.c
if(u)q.aX($.$get$aN()).e=this.a.ch.c
if(w.rx)q.aX($.$get$aQ()).e=this.a.cy.c
if(t)q.aX($.$get$aR()).e=this.a.db.c
if(w.x1)q.aX($.$get$aM()).e=this.a.dx.c
a0.e=q}z=T.dl
p=H.c([],[z])
u=this.a
t=a.a
C.b.f1(t,u.r)
u.x.jH()
if(w.fx){u=this.a
s=a.dx.ga1()
u=u.dy
u.toString
u.aq(s.ah(0,!0))}if(w.fy){u=this.a
s=a.cx
if(s==null){s=a.db.ga1().C(0,a.dx.ga1())
a.cx=s}u=u.fr
u.toString
u.aq(s.ah(0,!0))}u=this.a
s=a.ch
if(s==null){s=a.gkn().C(0,a.dx.ga1())
a.ch=s}u=u.fy
u.toString
u.aq(s.ah(0,!0))
if(w.x2){u=this.a
s=this.b
u=u.k1
u.toString
u.aq(s.ah(0,!0))}if(w.y1){u=this.a
s=this.c
u=u.k2
u.toString
u.aq(C.D.ah(s,!0))}if(w.y2){u=this.a
s=this.d
u=u.k3
u.toString
u.aq(s.ah(0,!0))}if(w.ax>0){o=this.e.a.length
u=this.a.k4
C.b.R(u.a,u.d,o)
for(u=[P.q],n=0;n<o;++n){s=this.a
r=this.e.a
if(n>=r.length)return H.f(r,n)
r=r[n]
s.toString
H.e(r,"$isaf")
s=s.r1
if(n>=s.length)return H.f(s,n)
s=s[n]
m=new Float32Array(H.bh(H.k(r.ah(0,!0),"$isa",u,"$asa")))
C.b.f_(s.a,s.d,!1,m)}}switch(w.a){case C.d:break
case C.i:u=this.a
s=this.f.f
u=u.r2
u.toString
r=s.a
l=s.b
s=s.c
C.b.v(u.a,u.d,r,l,s)
break
case C.e:this.Z(p,this.f.d)
u=this.a
s=this.f.d
u.al(u.rx,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break
case C.f:this.Z(p,this.f.e)
u=this.a
s=this.f.e
u.ac(u.ry,u.x1,s)
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
case C.e:this.Z(p,this.r.d)
u=this.a
s=this.r.d
u.al(u.y1,u.ax,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break
case C.f:this.Z(p,this.r.e)
u=this.a
s=this.r.e
u.ac(u.y2,u.ax,s)
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
u=u.an
u.toString
r=s.a
l=s.b
s=s.c
C.b.v(u.a,u.d,r,l,s)
break
case C.e:this.Z(p,this.x.d)
u=this.a
s=this.x.d
u.al(u.bE,u.bF,s)
s=this.a
u=this.x.f
s=s.an
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break
case C.f:this.Z(p,this.x.e)
u=this.a
s=this.x.e
u.ac(u.e7,u.bF,s)
s=this.a
u=this.x.f
s=s.an
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break}switch(w.d){case C.d:break
case C.i:u=this.a
s=this.y.f
u=u.bG
u.toString
r=s.a
l=s.b
s=s.c
C.b.v(u.a,u.d,r,l,s)
break
case C.e:this.Z(p,this.y.d)
u=this.a
s=this.y.d
u.al(u.e8,u.bH,s)
s=this.a
u=this.y.f
s=s.bG
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break
case C.f:this.Z(p,this.y.e)
u=this.a
s=this.y.e
u.ac(u.e9,u.bH,s)
s=this.a
u=this.y.f
s=s.bG
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break}switch(w.e){case C.d:break
case C.i:u=this.a
s=this.z.f
u=u.bI
u.toString
r=s.a
l=s.b
s=s.c
C.b.v(u.a,u.d,r,l,s)
s=this.a
l=this.z.ch
s=s.bK
C.b.P(s.a,s.d,l)
break
case C.e:this.Z(p,this.z.d)
u=this.a
s=this.z.d
u.al(u.ea,u.bJ,s)
s=this.a
u=this.z.f
s=s.bI
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bK
C.b.P(u.a,u.d,l)
break
case C.f:this.Z(p,this.z.e)
u=this.a
s=this.z.e
u.ac(u.eb,u.bJ,s)
s=this.a
u=this.z.f
s=s.bI
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bK
C.b.P(u.a,u.d,l)
break}if(w.z>0){o=this.dx.e.length
u=this.a.em
C.b.R(u.a,u.d,o)
k=a.db.ga1()
for(u=this.dx.e,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
r=this.a.cH
if(j>=r.length)return H.f(r,j)
g=r[j]
r=k.d1(h.a)
l=r.a
f=r.b
e=r.c
e=r.B(0,Math.sqrt(l*l+f*f+e*e))
f=g.b
l=e.a
r=e.b
e=e.c
C.b.v(f.a,f.d,l,r,e)
e=h.c
r=g.c
C.b.v(r.a,r.d,e.a,e.b,e.c);++j}}if(w.Q>0){o=this.dx.f.length
u=this.a.en
C.b.R(u.a,u.d,o)
k=a.db.ga1()
for(u=this.dx.f,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
r=this.a.cI
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.gbi(h)
l=g.b
f=r.gd4(r)
e=r.gd5(r)
r=r.gd6(r)
C.b.v(l.a,l.d,f,e,r)
r=k.bn(h.gbi(h))
e=g.c
C.b.v(e.a,e.d,r.a,r.b,r.c)
r=h.ga9(h)
e=g.d
f=r.gbV()
l=r.gbp()
r=r.gbA()
C.b.v(e.a,e.d,f,l,r)
r=h.gcr()
l=g.e
C.b.P(l.a,l.d,r)
r=h.gcs()
l=g.f
C.b.P(l.a,l.d,r)
r=h.gct()
l=g.r
C.b.P(l.a,l.d,r);++j}}if(w.ch>0){o=this.dx.r.length
u=this.a.eo
C.b.R(u.a,u.d,o)
k=a.db.ga1()
for(u=this.dx.r,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
r=this.a.cJ
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.gbi(h)
l=g.b
f=r.gd4(r)
e=r.gd5(r)
r=r.gd6(r)
C.b.v(l.a,l.d,f,e,r)
r=h.gcF(h).lt()
e=g.c
f=r.gaU(r)
l=r.gaV(r)
r=r.gaW()
C.b.v(e.a,e.d,f,l,r)
r=k.bn(h.gbi(h))
l=g.d
C.b.v(l.a,l.d,r.a,r.b,r.c)
r=h.ga9(h)
l=g.e
f=r.gbV()
e=r.gbp()
r=r.gbA()
C.b.v(l.a,l.d,f,e,r)
r=h.glq()
e=g.f
C.b.P(e.a,e.d,r)
r=h.glo()
e=g.r
C.b.P(e.a,e.d,r)
r=h.gcr()
e=g.x
C.b.P(e.a,e.d,r)
r=h.gcs()
e=g.y
C.b.P(e.a,e.d,r)
r=h.gct()
e=g.z
C.b.P(e.a,e.d,r);++j}}if(w.cx>0){o=this.dx.x.length
u=this.a.ep
C.b.R(u.a,u.d,o)
k=a.db.ga1()
for(u=this.dx.x,s=u.length,r=[z],j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
l=this.a.cK
if(j>=l.length)return H.f(l,j)
g=l[j]
l=h.gbk()
H.k(p,"$isa",r,"$asa")
if(!C.a.X(p,l)){l.sbv(p.length)
C.a.h(p,l)}l=h.gcF(h)
f=g.d
e=l.gaU(l)
d=l.gaV(l)
l=l.gaW()
C.b.v(f.a,f.d,e,d,l)
l=h.gkK()
d=g.b
e=l.gaU(l)
f=l.gaV(l)
l=l.gaW()
C.b.v(d.a,d.d,e,f,l)
l=h.gbj(h)
f=g.c
e=l.gaU(l)
d=l.gaV(l)
l=l.gaW()
C.b.v(f.a,f.d,e,d,l)
l=k.d1(h.gcF(h))
d=l.a
e=l.b
f=l.c
f=l.B(0,Math.sqrt(d*d+e*e+f*f))
e=g.e
d=f.a
l=f.b
f=f.c
C.b.v(e.a,e.d,d,l,f)
f=h.ga9(h)
l=g.f
d=f.gbV()
e=f.gbp()
f=f.gbA()
C.b.v(l.a,l.d,d,e,f)
f=h.gbk()
l=f.gcT(f)
if(!l){l=g.x
C.b.R(l.a,l.d,1)}else{l=g.r
e=f.ghr()
d=l.a
l=l.d
if(!e)C.b.R(d,l,0)
else C.b.R(d,l,f.gbv())
l=g.x
C.b.R(l.a,l.d,0)}++j}}if(w.cy>0){o=this.dx.y.length
u=this.a.eq
C.b.R(u.a,u.d,o)
k=a.db.ga1()
for(u=this.dx.y,s=u.length,r=[P.q],l=[z],j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
f=this.a.cL
if(j>=f.length)return H.f(f,j)
g=f[j]
f=h.gbk()
H.k(p,"$isa",l,"$asa")
if(!C.a.X(p,f)){f.sbv(p.length)
C.a.h(p,f)}c=k.C(0,h.ga1())
f=h.ga1()
e=$.bB
if(e==null){e=new V.Z(0,0,0)
$.bB=e}e=f.bn(e)
f=g.b
d=e.gd4(e)
b=e.gd5(e)
e=e.gd6(e)
C.b.v(f.a,f.d,d,b,e)
f=$.bB
if(f==null){f=new V.Z(0,0,0)
$.bB=f}f=c.bn(f)
e=g.c
C.b.v(e.a,e.d,f.a,f.b,f.c)
f=c.eC()
e=g.d
m=new Float32Array(H.bh(H.k(new V.cv(f.a,f.b,f.c,f.e,f.f,f.r,f.y,f.z,f.Q).ah(0,!0),"$isa",r,"$asa")))
C.b.eZ(e.a,e.d,!1,m)
e=h.ga9(h)
f=g.e
d=e.gbV()
b=e.gbp()
e=e.gbA()
C.b.v(f.a,f.d,d,b,e)
e=h.gbk()
f=e.gcT(e)
if(!f){f=g.r
C.b.R(f.a,f.d,1)}else{f=g.f
d=e.gcT(e)
b=f.a
f=f.d
if(!d)C.b.R(b,f,0)
else C.b.R(b,f,e.glr(e))
f=g.r
C.b.R(f.a,f.d,0)}f=h.gcr()
e=g.x
C.b.P(e.a,e.d,f)
f=h.gcs()
e=g.y
C.b.P(e.a,e.d,f)
f=h.gct()
e=g.z
C.b.P(e.a,e.d,f);++j}}if(w.db>0){o=this.dx.z.length
u=this.a.er
C.b.R(u.a,u.d,o)
k=a.db.ga1()
for(u=this.dx.z,s=u.length,z=[z],j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
r=this.a.cM
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.gbk()
H.k(p,"$isa",z,"$asa")
if(!C.a.X(p,r)){r.sbv(p.length)
C.a.h(p,r)}r=h.gbi(h)
l=g.b
f=r.gd4(r)
e=r.gd5(r)
r=r.gd6(r)
C.b.v(l.a,l.d,f,e,r)
r=h.gcF(h)
e=g.c
f=r.gaU(r)
l=r.gaV(r)
r=r.gaW()
C.b.v(e.a,e.d,f,l,r)
r=h.gkK()
l=g.d
f=r.gaU(r)
e=r.gaV(r)
r=r.gaW()
C.b.v(l.a,l.d,f,e,r)
r=h.gbj(h)
e=g.e
f=r.gaU(r)
l=r.gaV(r)
r=r.gaW()
C.b.v(e.a,e.d,f,l,r)
r=k.bn(h.gbi(h))
l=g.f
C.b.v(l.a,l.d,r.a,r.b,r.c)
r=h.gbk()
l=r.gcT(r)
if(!l){r=g.x
C.b.R(r.a,r.d,1)}else{l=g.r
f=r.ghr()
e=l.a
l=l.d
if(!f)C.b.R(e,l,0)
else C.b.R(e,l,r.gbv())
r=g.x
C.b.R(r.a,r.d,0)}r=h.ga9(h)
l=g.y
f=r.gbV()
e=r.gbp()
r=r.gbA()
C.b.v(l.a,l.d,f,e,r)
r=h.glz()
e=g.z
C.b.P(e.a,e.d,r)
r=h.glA()
e=g.Q
C.b.P(e.a,e.d,r)
r=h.gcr()
e=g.ch
C.b.P(e.a,e.d,r)
r=h.gcs()
e=g.cx
C.b.P(e.a,e.d,r)
r=h.gct()
e=g.cy
C.b.P(e.a,e.d,r);++j}}}switch(w.f){case C.d:break
case C.i:break
case C.e:this.Z(p,this.Q.d)
z=this.a
u=this.Q.d
z.al(z.ec,z.bL,u)
break
case C.f:this.Z(p,this.Q.e)
z=this.a
u=this.Q.e
z.ac(z.ed,z.bL,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db.ga1().eC()
a.Q=u}z=z.id
z.toString
z.aq(u.ah(0,!0))}if(w.dy){this.Z(p,this.ch)
z=this.a
u=this.ch
z.ac(z.ee,z.ef,u)
switch(w.r){case C.d:break
case C.i:z=this.a
u=this.cx.f
z=z.bM
z.toString
s=u.a
r=u.b
u=u.c
C.b.v(z.a,z.d,s,r,u)
break
case C.e:this.Z(p,this.cx.d)
z=this.a
u=this.cx.d
z.al(z.eg,z.bN,u)
u=this.a
z=this.cx.f
u=u.bM
u.toString
s=z.a
r=z.b
z=z.c
C.b.v(u.a,u.d,s,r,z)
break
case C.f:this.Z(p,this.cx.e)
z=this.a
u=this.cx.e
z.ac(z.eh,z.bN,u)
u=this.a
z=this.cx.f
u=u.bM
u.toString
s=z.a
r=z.b
z=z.c
C.b.v(u.a,u.d,s,r,z)
break}switch(w.x){case C.d:break
case C.i:z=this.a
u=this.cy.f
z=z.bP
z.toString
s=u.a
r=u.b
u=u.c
C.b.v(z.a,z.d,s,r,u)
u=this.a
r=this.cy.ch
u=u.bO
C.b.P(u.a,u.d,r)
break
case C.e:this.Z(p,this.cy.d)
z=this.a
u=this.cy.d
z.al(z.ei,z.bQ,u)
u=this.a
z=this.cy.f
u=u.bP
u.toString
s=z.a
r=z.b
z=z.c
C.b.v(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bO
C.b.P(z.a,z.d,r)
break
case C.f:this.Z(p,this.cy.e)
z=this.a
u=this.cy.e
z.ac(z.ej,z.bQ,u)
u=this.a
z=this.cy.f
u=u.bP
u.toString
s=z.a
r=z.b
z=z.c
C.b.v(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bO
C.b.P(z.a,z.d,r)
break}}z=w.y
u=z!==C.d
if(u){switch(z){case C.d:break
case C.i:z=this.a
s=this.db.f
z=z.bR
C.b.P(z.a,z.d,s)
break
case C.e:this.Z(p,this.db.d)
z=this.a
s=this.db.d
z.al(z.ek,z.bS,s)
s=this.a
z=this.db.f
s=s.bR
C.b.P(s.a,s.d,z)
break
case C.f:this.Z(p,this.db.e)
z=this.a
s=this.db.e
z.ac(z.el,z.bS,s)
s=this.a
z=this.db.f
s=s.bR
C.b.P(s.a,s.d,z)
break}C.b.cG(t,3042)
C.b.jh(t,770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
C.b.dU(t,33984+z.a)
C.b.aT(t,3553,z.b)}}z=a0.e
z.cu(a)
z.b_(a)
z.kJ(a)
if(u)C.b.jC(t,3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
C.b.dU(t,33984+z.a)
C.b.aT(t,3553,null)}}z=this.a
z.toString
C.b.f1(t,null)
z.x.jD()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.ds().an}},jf:{"^":"d8;0f,a,b,0c,0d,0e"},d8:{"^":"b;",
a3:[function(a){this.a.a3(H.e(a,"$isy"))},function(){return this.a3(null)},"hC","$1","$0","gbx",0,2,1],
b5:["fu",function(){}],
ik:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gA().L(0,this.gbx())
y=this.d
this.d=a
if(a!=null)a.gA().h(0,this.gbx())
z=new D.F(this.b+".texture2D",y,this.d,this,[T.fe])
z.b=!0
this.a.a3(z)}},
il:function(a){}},jg:{"^":"d8;a,b,0c,0d,0e"},b6:{"^":"d8;0f,a,b,0c,0d,0e",
dN:function(a){var z,y
if(!J.I(this.f,a)){z=this.f
this.f=a
y=new D.F(this.b+".color",z,a,this,[V.a1])
y.b=!0
this.a.a3(y)}},
b5:["c1",function(){this.fu()
this.dN(new V.a1(1,1,1))}],
sa9:function(a,b){var z
if(this.c===C.d){this.c=C.i
this.b5()
z=this.a
z.a=null
z.a3(null)}this.dN(b)}},ji:{"^":"b6;0ch,0f,a,b,0c,0d,0e",
ij:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.a3(z)}},
b5:function(){this.c1()
this.ij(1)}},jj:{"^":"b6;0ch,0f,a,b,0c,0d,0e",
cl:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.a3(z)}},
b5:function(){this.c1()
this.cl(100)}},cy:{"^":"b;"}}],["","",,T,{"^":"",dl:{"^":"cV;"},fe:{"^":"dl;"},km:{"^":"fe;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gA:function(){var z=this.y
if(z==null){z=D.P()
this.y=z}return z}},kn:{"^":"b;a,0b,0c,0d,0e",
k0:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
C.b.aT(z,3553,y)
C.b.bW(z,3553,10242,10497)
C.b.bW(z,3553,10243,10497)
C.b.bW(z,3553,10241,9729)
C.b.bW(z,3553,10240,9729)
C.b.aT(z,3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.km()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.a9
W.a0(x,"load",H.l(new T.ko(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
k_:function(a,b){return this.k0(a,!1,!1,!1,b)},
ic:function(a,b,c){var z,y,x,w
b=V.dW(b,2)
z=V.dW(a.width,2)
y=V.dW(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cZ(null,null)
x.width=z
x.height=y
w=H.e(C.q.fb(x,"2d"),"$isd_")
w.imageSmoothingEnabled=!1;(w&&C.C).jF(w,a,0,0,x.width,x.height)
return P.mT(C.C.hj(w,0,0,x.width,x.height))}}},ko:{"^":"n:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.ic(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
C.b.aT(y,3553,this.e)
C.b.kl(y,37440,this.f?1:0)
C.b.kB(y,3553,0,6408,6408,5121,w)
if(this.r)C.b.f6(y,3553)
C.b.aT(y,3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.jG()}++x.e}}}],["","",,V,{"^":"",br:{"^":"b;",
aZ:function(a){return!0},
i:function(a){return"all"},
$isaB:1},aB:{"^":"b;"},eJ:{"^":"b;0a",
sa8:function(a){this.a=H.k(a,"$isa",[V.aB],"$asa")},
aZ:["ft",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)if(z[x].aZ(a))return!0
return!1}],
i:["de",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaB:1},av:{"^":"eJ;0a",
aZ:function(a){return!this.ft(a)},
i:function(a){return"!["+this.de(0)+"]"}},jP:{"^":"b;0a,0b",
aZ:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.ba(this.a)
y=H.ba(this.b)
return z+".."+y},
$isaB:1,
m:{
R:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.d(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.c.H(a,0)
y=C.c.H(b,0)
x=new V.jP()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},k1:{"^":"b;0a",
sii:function(a){this.a=H.k(a,"$isJ",[P.m,P.M],"$asJ")},
fB:function(a){var z,y
if(a.a.length<=0)throw H.d(P.u("May not create a SetMatcher with zero characters."))
z=new H.aY(0,0,[P.m,P.M])
for(y=new H.d6(a,a.gp(a),0,[H.a6(a,"T",0)]);y.E();)z.q(0,y.d,!0)
this.sii(z)},
aZ:function(a){return this.a.bC(a)},
i:function(a){return P.c6(this.a.gay(),0,null)},
$isaB:1,
m:{
w:function(a){var z=new V.k1()
z.fB(a)
return z}}},dh:{"^":"b;a,b,0c,0d",
siD:function(a){this.c=H.k(a,"$isa",[V.dp],"$asa")},
k:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dp(this.a.j(0,b))
w.sa8(H.c([],[V.aB]))
w.c=!1
C.a.h(this.c,w)
return w},
jK:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.aZ(a))return w}return},
i:function(a){return this.b}},fl:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.dY(this.b,"\n","\\n")
y=H.dY(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},dn:{"^":"b;a,b,0c",
si6:function(a){var z=P.h
this.c=H.k(a,"$isJ",[z,z],"$asJ")},
aH:function(a,b,c){var z,y,x
H.k(c,"$isa",[P.h],"$asa")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.z)(c),++y){x=c[y]
this.c.q(0,x,b)}},
i:function(a){return this.b}},kt:{"^":"b;0a,0b,0c",
siu:function(a){this.a=H.k(a,"$isJ",[P.h,V.dh],"$asJ")},
siz:function(a){this.b=H.k(a,"$isJ",[P.h,V.dn],"$asJ")},
j:function(a,b){var z=this.a.l(0,b)
if(z==null){z=new V.dh(this,b)
z.siD(H.c([],[V.dp]))
z.d=null
this.a.q(0,b,z)}return z},
O:function(a){var z,y
z=this.b.l(0,a)
if(z==null){z=new V.dn(this,a)
y=P.h
z.si6(new H.aY(0,0,[y,y]))
this.b.q(0,a,z)}return z},
eY:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fl])
y=this.c
x=[P.m]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.H(a,t)
r=y.jK(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c6(w,0,null)
throw H.d(P.u("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c6(w,0,null)
p=y.d
o=p.c.l(0,q)
u=new V.fl(o==null?p.b:o,q,t)}++t}}},
m:{
cz:function(){var z,y
z=new V.kt()
y=P.h
z.siu(new H.aY(0,0,[y,V.dh]))
z.siz(new H.aY(0,0,[y,V.dn]))
z.c=null
return z}}},dp:{"^":"eJ;b,0c,0a",
i:function(a){return this.b.b+": "+this.de(0)}}}],["","",,X,{"^":"",ec:{"^":"b;",$isaJ:1},iz:{"^":"fb;0a,0b,0c,0d,0e,0f,0r,0x",
gA:function(){var z=this.x
if(z==null){z=D.P()
this.x=z}return z}},jw:{"^":"b;0a,0b,0c,0d,0e,0f",
gA:function(){var z=this.f
if(z==null){z=D.P()
this.f=z}return z},
b2:[function(a){var z
H.e(a,"$isy")
z=this.f
if(!(z==null))z.J(a)},function(){return this.b2(null)},"kQ","$1","$0","gdh",0,2,1],
sae:function(a){var z,y
if(!J.I(this.b,a)){z=this.b
if(z!=null)z.gA().L(0,this.gdh())
y=this.b
this.b=a
if(a!=null)a.gA().h(0,this.gdh())
z=new D.F("mover",y,this.b,this,[U.ag])
z.b=!0
this.b2(z)}},
$isaJ:1,
$isec:1},fb:{"^":"b;"}}],["","",,V,{"^":"",
nx:function(a){P.ks(C.V,new V.ny(a))},
aU:{"^":"b;0d",
sca:function(a){this.d=H.k(a,"$isa",[[P.a,W.aW]],"$asa")},
bs:function(a){this.b=new P.iG(C.Y)
this.c=null
this.sca(H.c([],[[P.a,W.aW]]))},
M:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.aW]))
y=a.split("\n")
for(z=y.length,x=[W.aW],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.C(u)
s=this.b.h5(u,0,u.length)
r=s==null?u:s
C.j.fk(t,H.dY(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaz(this.d),t)}},
eL:function(a){var z,y,x,w
H.k(a,"$isa",[P.h],"$asa")
this.sca(H.c([],[[P.a,W.aW]]))
z=C.a.k(a,"\n")
y=this.c
if(y==null){y=this.bD()
this.c=y}for(y=y.eY(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)this.bU(y[w])}},
ny:{"^":"n:51;a",
$1:function(a){H.e(a,"$isbb")
P.dX(C.k.eX(this.a.gjQ(),2)+" fps")}},
ia:{"^":"aU;a,0b,0c,0d",
bU:function(a){switch(a.a){case"Class":this.M(a.b,"#551")
break
case"Comment":this.M(a.b,"#777")
break
case"Id":this.M(a.b,"#111")
break
case"Num":this.M(a.b,"#191")
break
case"Reserved":this.M(a.b,"#119")
break
case"String":this.M(a.b,"#171")
break
case"Symbol":this.M(a.b,"#616")
break
case"Type":this.M(a.b,"#B11")
break
case"Whitespace":this.M(a.b,"#111")
break}},
bD:function(){var z,y,x,w
z=V.cz()
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
x=new V.av()
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
x=new V.av()
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
x.d=x.a.O("Num")
x=z.j(0,"Float")
x.d=x.a.O("Num")
x=z.j(0,"Sym")
x.d=x.a.O("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.O("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.O("String")
x=z.j(0,"EndComment")
x.d=x.a.O("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.O("Whitespace")
x=z.j(0,"Id")
y=x.a.O("Id")
x.d=y
x=[P.h]
y.aH(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aH(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aH(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iA:{"^":"aU;a,0b,0c,0d",
bU:function(a){switch(a.a){case"Builtin":this.M(a.b,"#411")
break
case"Comment":this.M(a.b,"#777")
break
case"Id":this.M(a.b,"#111")
break
case"Num":this.M(a.b,"#191")
break
case"Preprocess":this.M(a.b,"#737")
break
case"Reserved":this.M(a.b,"#119")
break
case"Symbol":this.M(a.b,"#611")
break
case"Type":this.M(a.b,"#171")
break
case"Whitespace":this.M(a.b,"#111")
break}},
bD:function(){var z,y,x,w
z=V.cz()
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
x=new V.av()
w=[V.aB]
x.sa8(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Preprocess")
x=V.w(new H.v("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"Preprocess")
y=new V.av()
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
y.d=y.a.O("Num")
y=z.j(0,"Float")
y.d=y.a.O("Num")
y=z.j(0,"Sym")
y.d=y.a.O("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.O("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.O("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.O("Whitespace")
y=z.j(0,"Id")
x=y.a.O("Id")
y.d=x
y=[P.h]
x.aH(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aH(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aH(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iB:{"^":"aU;a,0b,0c,0d",
bU:function(a){switch(a.a){case"Attr":this.M(a.b,"#911")
this.M("=","#111")
break
case"Id":this.M(a.b,"#111")
break
case"Other":this.M(a.b,"#111")
break
case"Reserved":this.M(a.b,"#119")
break
case"String":this.M(a.b,"#171")
break
case"Symbol":this.M(a.b,"#616")
break}},
bD:function(){var z,y,x
z=V.cz()
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
x=new V.av()
x.sa8(H.c([],[V.aB]))
C.a.h(y.a,x)
y=V.w(new H.v('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.O("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.O("String")
y=z.j(0,"Id")
x=y.a.O("Id")
y.d=x
x.aH(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.j(0,"Attr")
x.d=x.a.O("Attr")
x=z.j(0,"Other")
x.d=x.a.O("Other")
return z}},
jy:{"^":"aU;a,0b,0c,0d",
eL:function(a){H.k(a,"$isa",[P.h],"$asa")
this.sca(H.c([],[[P.a,W.aW]]))
this.M(C.a.k(a,"\n"),"#111")},
bU:function(a){},
bD:function(){return}},
jM:{"^":"b;a,b,0c",
dV:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fA().gcX().l(0,H.i(z))
if(y==null)if(d){c.$0()
this.dS(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.e1(this.c).h(0,v)
t=W.iJ("radio")
t.checked=x
t.name=z
z=W.a9
W.a0(t,"change",H.l(new V.jN(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
C.G.D(v,t)
s=w.createElement("span")
s.textContent=b
C.G.D(v,s)
J.e1(this.c).h(0,w.createElement("br"))},
b9:function(a,b,c){return this.dV(a,b,c,!1)},
dS:function(a){var z,y,x,w,v
z=P.fA()
y=P.h
x=P.j0(z.gcX(),y,y)
x.q(0,this.a,a)
w=z.eR(0,x)
y=window.history
v=w.i(0)
y.toString;(y&&C.X).i8(y,new P.lX([],[]).d2(""),"",v)}},
jN:{"^":"n:11;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dS(this.d)}}},
k7:{"^":"b;0a,0b",
fD:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.p).D(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.p.D(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.j.D(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.j.D(v,u)}t=z.createElement("div")
this.a=t
C.j.D(v,t)
this.b=null
t=W.a9
W.a0(z,"scroll",H.l(new V.ka(x),{func:1,ret:-1,args:[t]}),!1,t)},
dX:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.k(a,"$isa",[P.h],"$asa")
this.ip()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.eY(C.a.jW(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.j.D(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.j.D(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.j.D(y,t)
break
case"Link":s=u.b
if(H.hC(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=H.C(r[1])
q.textContent=H.C(r[0])
C.j.D(y,q)}else{p=P.ca(C.J,s,C.m,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.i(p)
q.textContent=s
C.j.D(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.j.D(y,t)
break}}C.j.D(this.a,y)},
fa:function(a){var z,y,x,w
z=new V.ia("dart")
z.bs("dart")
y=new V.iA("glsl")
y.bs("glsl")
x=new V.iB("html")
x.bs("html")
w=C.a.jM(H.c([z,y,x],[V.aU]),new V.kb(a))
if(w!=null)return w
z=new V.jy("plain")
z.bs("plain")
return z},
dW:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.k(a2,"$isa",[P.h],"$asa")
z=H.c([],[P.m])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.bP(w).a6(w,"+")){C.a.q(a2,x,C.c.ar(w,1))
C.a.h(z,1)
y=!0}else if(C.c.a6(w,"-")){C.a.q(a2,x,C.c.ar(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.fa(a0)
v.eL(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.j.D(t,s)
C.j.D(this.a,t)
r=P.ca(C.J,a,C.m,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.e3(null)
n.href="#"+H.i(r)
n.textContent=a
C.j.D(o,n)
C.w.D(p,o)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.z)(w),++e)C.w.D(f,w[e])
C.n.D(j,i)
C.n.D(j,h)
C.n.D(j,f)
C.o.D(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.z)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gU(w);b.E();)C.w.D(h,b.gK())
C.n.D(j,i)
C.n.D(j,h)
C.o.D(s,j)}},
j4:function(a){var z,y,x,w,v,u,t
H.k(a,"$isa",[P.h],"$asa")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
C.j.D(this.a,y)
w=C.o.hm(y,-1)
x=H.e((w&&C.n).dD(w,-1),"$iscx").style
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
t=H.e(C.n.dD(w,-1),"$iscx")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.w).D(t,u)}},
ip:function(){var z,y,x,w
if(this.b!=null)return
z=V.cz()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Bold")
x=V.w(new H.v("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").k(0,"Bold")
x=new V.av()
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
x=new V.av()
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
x=new V.av()
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
y=new V.av()
y.sa8(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").k(0,"LinkEnd")
y=V.w(new H.v("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").k(0,"LinkTail")
y=new V.av()
y.sa8(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.br())
x=z.j(0,"Other").k(0,"Other")
y=new V.av()
y.sa8(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.O("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.O("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.O("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.O("Link")
x=z.j(0,"Other")
x.d=x.a.O("Other")
this.b=z},
m:{
k8:function(a,b){var z=new V.k7()
z.fD(a,!0)
return z}}},
ka:{"^":"n:11;a",
$1:function(a){P.fj(C.x,new V.k9(this.a))}},
k9:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.k.ap(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}},
kb:{"^":"n:52;a",
$1:function(a){return H.e(a,"$isaU").a===this.a}}}],["","",,K,{"^":"",
hy:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=V.k8("Test 026",!0)
y=W.cZ(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.j.D(z.a,y)
x=[P.h]
z.dX(H.c(["Test of the Material Lighting shader with a textured directional light. ","The texturing of the directional light is being modified with a matrix. ","The texture metrix is updated using the pre-update mathods. ","Use Ctrl plus the mouse to move the center object."],x))
z.j4(H.c(["shapes"],x))
z.dX(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=C.y.d7(x,"testCanvas")
if(w==null)H.r(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.kq(w,!0,!0,!0,!1)
u=D.ep(null,null)
u.sae(U.bT(V.eM(0.3,0.4,1,null)))
t=D.ep(null,null)
t.sae(U.bT(V.eM(-0.3,-0.4,-1,null)))
t.sa9(0,new V.a1(0.125,0.125,0.125))
s=new O.jc()
s.sh_(O.d0(V.af))
s.e.br(s.ghz(),s.ghA())
r=new O.b6(s,"emission")
r.c=C.d
r.f=new V.a1(0,0,0)
s.f=r
r=new O.b6(s,"ambient")
r.c=C.d
r.f=new V.a1(0,0,0)
s.r=r
r=new O.b6(s,"diffuse")
r.c=C.d
r.f=new V.a1(0,0,0)
s.x=r
r=new O.b6(s,"invDiffuse")
r.c=C.d
r.f=new V.a1(0,0,0)
s.y=r
r=new O.jj(s,"specular")
r.c=C.d
r.f=new V.a1(0,0,0)
r.ch=100
s.z=r
r=new O.jg(s,"bump")
r.c=C.d
s.Q=r
s.ch=null
r=new O.b6(s,"reflect")
r.c=C.d
r.f=new V.a1(0,0,0)
s.cx=r
r=new O.ji(s,"refract")
r.c=C.d
r.f=new V.a1(0,0,0)
r.ch=1
s.cy=r
r=new O.jf(s,"alpha")
r.c=C.d
r.f=1
s.db=r
r=new D.iT()
r.c2(D.a4)
r.sh9(H.c([],[D.ck]))
r.shZ(H.c([],[D.eU]))
r.sit(H.c([],[D.f6]))
r.siE(H.c([],[D.ff]))
r.siF(H.c([],[D.fg]))
r.siG(H.c([],[D.fh]))
r.Q=null
r.ch=null
r.dc(r.ghy(),r.ghT(),r.ghV())
s.dx=r
q=r.Q
if(q==null){q=D.P()
r.Q=q
r=q}else r=q
r.h(0,s.gia())
r=s.dx
q=r.ch
if(q==null){q=D.P()
r.ch=q
r=q}else r=q
r.h(0,s.gbx())
s.dy=null
s.dx.h(0,u)
s.dx.h(0,t)
s.f.sa9(0,new V.a1(0,0,0))
r=s.r
r.sa9(0,new V.a1(0.1,0.1,0.1))
r=s.x
r.sa9(0,new V.a1(0.8,0.8,0.8))
r=s.z
r.sa9(0,new V.a1(0.2,0.2,0.2))
r=s.z
if(r.c===C.d){r.c=C.i
r.c1()
r.cl(100)
q=r.a
q.a=null
q.a3(null)}r.cl(100)
r=s.x
q=v.f.k_("../resources/Test.png",!0)
p=r.c
if(p!==C.e){if(p===C.d)r.b5()
r.c=C.e
r.il(null)
p=r.a
p.a=null
p.a3(null)}r.ik(q)
o=E.eu(null,!0,null,"",null,null)
o.sae(U.fD(!1,!0,v.r,!1,!1,!1,null,!1))
o.sai(0,F.hE(30,1,15,0.5))
n=E.eu(null,!0,null,"",null,null)
n.sae(U.bT(V.aC(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
r=F.dQ(1,null,null,1)
r.cN()
n.sai(0,r)
m=new U.ew()
m.c2(U.ag)
m.br(m.ghx(),m.ghU())
m.e=null
m.f=V.c1()
m.r=0
m.h(0,U.fD(!1,!1,v.r,!1,!1,!1,null,!1))
m.h(0,U.bT(V.da(3.141592653589793)))
m.h(0,U.bT(V.aC(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
l=U.f2(0.5,0.7,0.3,0,0,0)
k=U.f2(0,0.1,0,0,0,0)
r=new M.ip()
r.sh3(0,O.d0(E.as))
r.d.br(r.ghD(),r.ghE())
r.e=null
r.f=null
r.r=null
r.x=null
j=new X.jw()
j.c=1.0471975511965976
j.d=0.1
j.e=2000
j.sae(null)
q=j.c
if(!$.o.$2(q,1.0471975511965976)){i=j.c
j.c=1.0471975511965976
q=new D.F("fov",i,1.0471975511965976,j,[P.q])
q.b=!0
j.b2(q)}q=j.d
if(!$.o.$2(q,0.1)){i=j.d
j.d=0.1
q=new D.F("near",i,0.1,j,[P.q])
q.b=!0
j.b2(q)}q=j.e
if(!$.o.$2(q,2000)){i=j.e
j.e=2000
q=new D.F("far",i,2000,j,[P.q])
q.b=!0
j.b2(q)}q=r.a
if(q!==j){if(q!=null)q.gA().L(0,r.gas())
i=r.a
r.a=j
j.gA().h(0,r.gas())
q=new D.F("camera",i,r.a,r,[X.ec])
q.b=!0
r.aN(q)}h=new X.iz()
q=new V.bt(0,0,0,1)
h.a=q
h.b=!0
h.c=2000
h.d=!0
h.e=0
h.f=!1
q=$.f0
if(q==null){q=V.f_(0,0,1,1)
$.f0=q}h.r=q
q=r.b
if(q!==h){if(q!=null)q.gA().L(0,r.gas())
i=r.b
r.b=h
h.gA().h(0,r.gas())
q=new D.F("target",i,r.b,r,[X.fb])
q.b=!0
r.aN(q)}r.seU(null)
r.seU(s)
r.d.h(0,o)
r.d.h(0,n)
r.a.sae(m)
q=r.e
if(q==null){q=D.P()
r.e=q}q.h(0,new K.nj(s,l,k))
q=v.d
if(q!==r){if(q!=null)q.gA().L(0,v.gdf())
v.d=r
r.gA().h(0,v.gdf())
v.fH()}r=new V.jM("shapes",!0)
x=C.y.d7(x,"shapes")
r.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
r.b9(0,"Cube",new K.nk(o))
r.b9(0,"Cylinder",new K.nl(o))
r.b9(0,"Cone",new K.nm(o))
r.b9(0,"Sphere",new K.nn(o))
r.dV(0,"Toroid",new K.no(o),!0)
r.b9(0,"Knot",new K.np(o))
x=v.z
if(x==null){x=D.P()
v.z=x}r={func:1,ret:-1,args:[D.y]}
q=H.l(new K.nq(z,s),r)
if(x.b==null)x.sb6(H.c([],[r]))
x=x.b;(x&&C.a).h(x,q)
V.nx(v)},
nj:{"^":"n:5;a,b,c",
$1:function(a){var z,y,x,w,v,u,t
z=H.j(H.e(a,"$isy"),"$isf9").c
y=this.a
x=this.b.aB(z,null)
if(!J.I(y.d,x)){w=y.d
v=w==null
u=x==null
if(!(!v&&u))v=v&&!u
else v=!0
if(v)y.a=null
y.d=x
x=new D.F("colorMatrix",w,x,y,[V.af])
x.b=!0
y.a3(x)}t=V.jl(this.c.aB(z,null))
if(!J.I(y.b,t)){x=y.b
w=x==null&&!0
if(w)y.a=null
y.b=t
x=new D.F("texture2DMatrix",x,t,y,[V.cv])
x.b=!0
y.a3(x)}}},
nk:{"^":"n:0;a",
$0:function(){this.a.sai(0,F.dQ(1,null,null,1))}},
nl:{"^":"n:0;a",
$0:function(){this.a.sai(0,F.hq(1,!0,!0,1,40,1))}},
nm:{"^":"n:0;a",
$0:function(){this.a.sai(0,F.hq(1,!0,!1,1,40,0))}},
nn:{"^":"n:0;a",
$0:function(){this.a.sai(0,F.nz(6,null,1,6))}},
no:{"^":"n:0;a",
$0:function(){this.a.sai(0,F.hE(30,1,15,0.5))}},
np:{"^":"n:0;a",
$0:function(){this.a.sai(0,F.ng(120,1,2,12,0.3,3))}},
nq:{"^":"n:5;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isy")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.dW("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dW("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.N=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eB.prototype
return J.eA.prototype}if(typeof a=="string")return J.bZ.prototype
if(a==null)return J.eC.prototype
if(typeof a=="boolean")return J.iN.prototype
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cL(a)}
J.bn=function(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cL(a)}
J.dT=function(a){if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cL(a)}
J.n3=function(a){if(typeof a=="number")return J.bY.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c7.prototype
return a}
J.n4=function(a){if(typeof a=="number")return J.bY.prototype
if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c7.prototype
return a}
J.bP=function(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c7.prototype
return a}
J.W=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cL(a)}
J.I=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).u(a,b)}
J.hF=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.n3(a).V(a,b)}
J.e_=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n4(a).C(a,b)}
J.hG=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nf(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bn(a).l(a,b)}
J.hH=function(a,b,c,d){return J.W(a).fW(a,b,c,d)}
J.hI=function(a,b){return J.bP(a).H(a,b)}
J.cf=function(a,b){return J.W(a).i3(a,b)}
J.cR=function(a,b,c){return J.W(a).i7(a,b,c)}
J.e0=function(a,b){return J.W(a).D(a,b)}
J.hJ=function(a,b){return J.bP(a).a0(a,b)}
J.cS=function(a,b,c){return J.bn(a).jp(a,b,c)}
J.cg=function(a,b){return J.dT(a).aa(a,b)}
J.hK=function(a,b,c,d){return J.W(a).jJ(a,b,c,d)}
J.hL=function(a){return J.W(a).gje(a)}
J.e1=function(a){return J.W(a).gcC(a)}
J.bQ=function(a){return J.N(a).gY(a)}
J.b3=function(a){return J.dT(a).gU(a)}
J.ar=function(a){return J.bn(a).gp(a)}
J.hM=function(a){return J.W(a).gkm(a)}
J.hN=function(a){return J.W(a).gkA(a)}
J.cT=function(a,b){return J.W(a).b1(a,b)}
J.e2=function(a){return J.dT(a).ko(a)}
J.hO=function(a,b){return J.W(a).kt(a,b)}
J.hP=function(a,b){return J.W(a).skI(a,b)}
J.hQ=function(a,b,c){return J.W(a).fj(a,b,c)}
J.hR=function(a,b,c){return J.bP(a).t(a,b,c)}
J.hS=function(a){return J.bP(a).kH(a)}
J.ae=function(a){return J.N(a).i(a)}
I.a7=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.ch.prototype
C.q=W.cY.prototype
C.C=W.d_.prototype
C.j=W.aW.prototype
C.U=W.ig.prototype
C.W=W.iC.prototype
C.X=W.iD.prototype
C.y=W.iF.prototype
C.Z=J.H.prototype
C.a=J.b5.prototype
C.a_=J.eA.prototype
C.h=J.eB.prototype
C.D=J.eC.prototype
C.k=J.bY.prototype
C.c=J.bZ.prototype
C.a6=J.c_.prototype
C.G=W.iS.prototype
C.ac=W.jq.prototype
C.M=J.jx.prototype
C.N=W.jO.prototype
C.b=P.de.prototype
C.w=W.cx.prototype
C.o=W.kj.prototype
C.n=W.kk.prototype
C.B=J.c7.prototype
C.O=W.bG.prototype
C.P=W.lf.prototype
C.R=new P.hW(!1)
C.Q=new P.hV(C.R)
C.S=new P.jv()
C.T=new P.l1()
C.l=new P.lN()
C.d=new A.cj(0,"ColorSourceType.None")
C.i=new A.cj(1,"ColorSourceType.Solid")
C.e=new A.cj(2,"ColorSourceType.Texture2D")
C.f=new A.cj(3,"ColorSourceType.TextureCube")
C.x=new P.bu(0)
C.V=new P.bu(5e6)
C.Y=new P.iH("element",!0,!1,!1,!1)
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
C.H=H.c(I.a7([127,2047,65535,1114111]),[P.m])
C.r=H.c(I.a7([0,0,32776,33792,1,10240,0,0]),[P.m])
C.a7=H.c(I.a7(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.t=H.c(I.a7([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.u=H.c(I.a7([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.a8=H.c(I.a7(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.I=H.c(I.a7([]),[P.h])
C.a9=H.c(I.a7([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.J=H.c(I.a7([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.v=H.c(I.a7([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.K=H.c(I.a7([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.aa=H.c(I.a7([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.L=H.c(I.a7([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.z=H.c(I.a7(["bind","if","ref","repeat","syntax"]),[P.h])
C.A=H.c(I.a7(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.ab=new H.i7(0,{},C.I,[P.h,P.h])
C.m=new P.kV(!1)
$.ay=0
$.bs=null
$.e7=null
$.dJ=!1
$.hv=null
$.hn=null
$.hB=null
$.cK=null
$.cN=null
$.dU=null
$.bi=null
$.bL=null
$.bM=null
$.dK=!1
$.S=C.l
$.aI=null
$.d1=null
$.et=null
$.es=null
$.en=null
$.em=null
$.el=null
$.ek=null
$.o=V.jk()
$.eN=null
$.eV=null
$.bB=null
$.f0=null
$.fF=null
$.fJ=null
$.fH=null
$.fI=null
$.cC=null
$.fG=null
$.eT=null
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
I.$lazy(y,x,w)}})(["ej","$get$ej",function(){return H.hu("_$dart_dartClosure")},"d3","$get$d3",function(){return H.hu("_$dart_js")},"fn","$get$fn",function(){return H.aE(H.cA({
toString:function(){return"$receiver$"}}))},"fo","$get$fo",function(){return H.aE(H.cA({$method$:null,
toString:function(){return"$receiver$"}}))},"fp","$get$fp",function(){return H.aE(H.cA(null))},"fq","$get$fq",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fu","$get$fu",function(){return H.aE(H.cA(void 0))},"fv","$get$fv",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fs","$get$fs",function(){return H.aE(H.ft(null))},"fr","$get$fr",function(){return H.aE(function(){try{null.$method$}catch(z){return z.message}}())},"fx","$get$fx",function(){return H.aE(H.ft(void 0))},"fw","$get$fw",function(){return H.aE(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dE","$get$dE",function(){return P.lg()},"bN","$get$bN",function(){return[]},"fE","$get$fE",function(){return P.kZ()},"fS","$get$fS",function(){return H.jo(H.bh(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"hb","$get$hb",function(){return P.jT("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hj","$get$hj",function(){return P.mA()},"ei","$get$ei",function(){return{}},"fW","$get$fW",function(){return P.eG(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dF","$get$dF",function(){return P.eF(P.h,P.bV)},"fO","$get$fO",function(){return Z.ao(0)},"fM","$get$fM",function(){return Z.ao(511)},"aP","$get$aP",function(){return Z.ao(1)},"aO","$get$aO",function(){return Z.ao(2)},"aN","$get$aN",function(){return Z.ao(4)},"aQ","$get$aQ",function(){return Z.ao(8)},"aR","$get$aR",function(){return Z.ao(16)},"bE","$get$bE",function(){return Z.ao(32)},"bF","$get$bF",function(){return Z.ao(64)},"fN","$get$fN",function(){return Z.ao(96)},"bf","$get$bf",function(){return Z.ao(128)},"aM","$get$aM",function(){return Z.ao(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.E},{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:-1},{func:1,ret:-1,args:[W.au]},{func:1,ret:P.E,args:[D.y]},{func:1,ret:P.E,args:[F.aa]},{func:1,ret:P.E,args:[,,]},{func:1,ret:P.E,args:[F.ah,P.q,P.q]},{func:1,ret:-1,args:[P.m,[P.p,E.as]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.E,args:[W.a9]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:-1,args:[W.a9]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.m,[P.p,U.ag]]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.m,[P.p,D.a4]]},{func:1,args:[,]},{func:1,ret:P.M,args:[W.Q,P.h,P.h,W.c9]},{func:1,ret:V.Z,args:[P.q]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:P.M,args:[W.A]},{func:1,ret:P.h,args:[P.m]},{func:1,ret:P.M,args:[W.aD]},{func:1,ret:P.M,args:[P.h]},{func:1,ret:-1,args:[W.bz]},{func:1,ret:-1,args:[P.m,[P.p,V.af]]},{func:1,ret:P.E,args:[,]},{func:1,ret:P.q,args:[P.q]},{func:1,args:[W.a9]},{func:1,ret:P.E,args:[P.ak]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.O,args:[P.m]},{func:1,ret:P.E,args:[P.h,,]},{func:1,ret:P.M,args:[P.q,P.q]},{func:1,ret:-1,args:[W.bG]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.M,args:[[P.p,D.a4]]},{func:1,ret:P.E,args:[P.h]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.m]},{func:1,ret:[P.J,P.h,P.h],args:[[P.J,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:-1,args:[W.A,W.A]},{func:1,ret:P.m,args:[[P.a,P.m],P.m]},{func:1,ret:[P.aS,,],args:[,]},{func:1,ret:P.E,args:[,],opt:[,]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,ret:P.E,args:[P.bb]},{func:1,ret:P.M,args:[V.aU]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:W.Q,args:[W.A]}]
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
if(x==y)H.nC(d||a)
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
Isolate.dR=a.dR
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
if(typeof dartMainRunner==="function")dartMainRunner(K.hy,[])
else K.hy([])})})()
//# sourceMappingURL=test.dart.js.map
