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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dZ(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.e0=function(){}
var dart=[["","",,H,{"^":"",o_:{"^":"a;a"}}],["","",,J,{"^":"",
e4:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cS:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.e3==null){H.nj()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.cI("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dd()]
if(v!=null)return v
v=H.nr(a)
if(v!=null)return v
if(typeof a=="function")return C.a6
y=Object.getPrototypeOf(a)
if(y==null)return C.M
if(y===Object.prototype)return C.M
if(typeof w=="function"){Object.defineProperty(w,$.$get$dd(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
I:{"^":"a;",
A:function(a,b){return a===b},
ga_:function(a){return H.bJ(a)},
i:["fR",function(a){return"Instance of '"+H.bg(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
iU:{"^":"I;",
i:function(a){return String(a)},
ga_:function(a){return a?519018:218159},
$isN:1},
eI:{"^":"I;",
A:function(a,b){return null==b},
i:function(a){return"null"},
ga_:function(a){return 0},
$isG:1},
de:{"^":"I;",
ga_:function(a){return 0},
i:["fT",function(a){return String(a)}]},
jC:{"^":"de;"},
ce:{"^":"de;"},
c8:{"^":"de;",
i:function(a){var z=a[$.$get$eq()]
if(z==null)return this.fT(a)
return"JavaScript function for "+H.j(J.ah(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isc1:1},
bb:{"^":"I;$ti",
h:function(a,b){H.y(b,H.u(a,0))
if(!!a.fixed$length)H.q(P.V("add"))
a.push(b)},
kJ:function(a,b){var z
if(!!a.fixed$length)H.q(P.V("removeAt"))
z=a.length
if(b>=z)throw H.d(P.cb(b,null,null))
return a.splice(b,1)[0]},
G:function(a,b){var z
if(!!a.fixed$length)H.q(P.V("remove"))
for(z=0;z<a.length;++z)if(J.E(a[z],b)){a.splice(z,1)
return!0}return!1},
ad:function(a,b){var z,y
H.k(b,"$iso",[H.u(a,0)],"$aso")
if(!!a.fixed$length)H.q(P.V("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.A)(b),++y)a.push(b[y])},
a2:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.aP(a))}},
l:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.t(z,y,H.j(a[y]))
return z.join(b)},
kn:function(a){return this.l(a,"")},
ke:function(a,b,c,d){var z,y,x
H.y(b,d)
H.l(c,{func:1,ret:d,args:[d,H.u(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.d(P.aP(a))}return y},
kd:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.N,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.d(P.aP(a))}throw H.d(H.cw())},
kc:function(a,b){return this.kd(a,b,null)},
af:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fQ:function(a,b,c){if(b<0||b>a.length)throw H.d(P.a2(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.a2(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
gkb:function(a){if(a.length>0)return a[0]
throw H.d(H.cw())},
gaE:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.cw())},
eu:function(a,b){var z,y
H.l(b,{func:1,ret:P.N,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aP(a))}return!1},
Z:function(a,b){var z
for(z=0;z<a.length;++z)if(J.E(a[z],b))return!0
return!1},
i:function(a){return P.dc(a,"[","]")},
gT:function(a){return new J.aw(a,a.length,0,[H.u(a,0)])},
ga_:function(a){return H.bJ(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.q(P.V("set length"))
if(b<0)throw H.d(P.a2(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(b>=a.length||b<0)throw H.d(H.bt(a,b))
return a[b]},
t:function(a,b,c){H.y(c,H.u(a,0))
if(!!a.immutable$list)H.q(P.V("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bt(a,b))
a[b]=c},
$iso:1,
$isb:1,
p:{
iT:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.d0(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a2(a,0,4294967295,"length",null))
return J.eF(new Array(a),b)},
eF:function(a,b){return J.cx(H.c(a,[b]))},
cx:function(a){H.cl(a)
a.fixed$length=Array
return a}}},
nZ:{"^":"bb;$ti"},
aw:{"^":"a;a,b,c,0d,$ti",
se0:function(a){this.d=H.y(a,H.u(this,0))},
gL:function(){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.A(z))
x=this.c
if(x>=y){this.se0(null)
return!1}this.se0(z[x]);++this.c
return!0},
$isb3:1},
c6:{"^":"I;",
kX:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.V(""+a+".toInt()"))},
d5:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.V(""+a+".floor()"))},
av:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.V(""+a+".round()"))},
fp:function(a,b){var z,y
if(b>20)throw H.d(P.a2(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
by:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.d(P.a2(b,2,36,"radix",null))
z=a.toString(b)
if(C.c.a5(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.q(P.V("Unexpected toString result: "+z))
x=y.length
if(1>=x)return H.f(y,1)
z=y[1]
if(3>=x)return H.f(y,3)
w=+y[3]
x=y[2]
if(x!=null){z+=x
w-=x.length}return z+C.c.v("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga_:function(a){return a&0x1FFFFFFF},
v:function(a,b){if(typeof b!=="number")throw H.d(H.aj(b))
return a*b},
bD:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fW:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ek(a,b)},
aa:function(a,b){return(a|0)===a?a/b|0:this.ek(a,b)},
ek:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.V("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
b0:function(a,b){var z
if(a>0)z=this.ei(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
iS:function(a,b){if(b<0)throw H.d(H.aj(b))
return this.ei(a,b)},
ei:function(a,b){return b>31?0:a>>>b},
U:function(a,b){if(typeof b!=="number")throw H.d(H.aj(b))
return a<b},
$ist:1,
$isam:1},
eH:{"^":"c6;",$isn:1},
eG:{"^":"c6;"},
c7:{"^":"I;",
a5:function(a,b){if(b<0)throw H.d(H.bt(a,b))
if(b>=a.length)H.q(H.bt(a,b))
return a.charCodeAt(b)},
K:function(a,b){if(b>=a.length)throw H.d(H.bt(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.D(b)
if(typeof b!=="string")throw H.d(P.d0(b,null,null))
return a+b},
bb:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.aj(b))
c=P.b5(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
aj:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.aj(c))
if(typeof c!=="number")return c.U()
if(c<0||c>a.length)throw H.d(P.a2(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a9:function(a,b){return this.aj(a,b,0)},
w:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.aj(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.U()
if(b<0)throw H.d(P.cb(b,null,null))
if(b>c)throw H.d(P.cb(b,null,null))
if(c>a.length)throw H.d(P.cb(c,null,null))
return a.substring(b,c)},
ay:function(a,b){return this.w(a,b,null)},
kZ:function(a){return a.toLowerCase()},
v:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.S)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
kx:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.v(c,z)+a},
ao:function(a,b){return this.kx(a,b," ")},
f9:function(a,b,c){var z
if(c<0||c>a.length)throw H.d(P.a2(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
f8:function(a,b){return this.f9(a,b,0)},
jL:function(a,b,c){if(c>a.length)throw H.d(P.a2(c,0,a.length,null,null))
return H.hH(a,b,c)},
i:function(a){return a},
ga_:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gn:function(a){return a.length},
$iseY:1,
$ish:1}}],["","",,H,{"^":"",
cT:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
cw:function(){return new P.dr("No element")},
iS:function(){return new P.dr("Too many elements")},
v:{"^":"kR;a",
gn:function(a){return this.a.length},
k:function(a,b){return C.c.a5(this.a,b)},
$asdI:function(){return[P.n]},
$asY:function(){return[P.n]},
$aso:function(){return[P.n]},
$asb:function(){return[P.n]}},
ex:{"^":"o;"},
cz:{"^":"ex;$ti",
gT:function(a){return new H.dg(this,this.gn(this),0,[H.a5(this,"cz",0)])},
dv:function(a,b){return this.fS(0,H.l(b,{func:1,ret:P.N,args:[H.a5(this,"cz",0)]}))}},
dg:{"^":"a;a,b,c,0d,$ti",
sbg:function(a){this.d=H.y(a,H.u(this,0))},
gL:function(){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.bv(z)
x=y.gn(z)
if(this.b!==x)throw H.d(P.aP(z))
w=this.c
if(w>=x){this.sbg(null)
return!1}this.sbg(y.af(z,w));++this.c
return!0},
$isb3:1},
jg:{"^":"o;a,b,$ti",
gT:function(a){return new H.jh(J.b8(this.a),this.b,this.$ti)},
gn:function(a){return J.av(this.a)},
af:function(a,b){return this.b.$1(J.cn(this.a,b))},
$aso:function(a,b){return[b]}},
jh:{"^":"b3;0a,b,c,$ti",
sbg:function(a){this.a=H.y(a,H.u(this,1))},
E:function(){var z=this.b
if(z.E()){this.sbg(this.c.$1(z.gL()))
return!0}this.sbg(null)
return!1},
gL:function(){return this.a},
$asb3:function(a,b){return[b]}},
ji:{"^":"cz;a,b,$ti",
gn:function(a){return J.av(this.a)},
af:function(a,b){return this.b.$1(J.cn(this.a,b))},
$ascz:function(a,b){return[b]},
$aso:function(a,b){return[b]}},
dN:{"^":"o;a,b,$ti",
gT:function(a){return new H.ll(J.b8(this.a),this.b,this.$ti)}},
ll:{"^":"b3;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gL()))return!0
return!1},
gL:function(){return this.a.gL()}},
cv:{"^":"a;$ti"},
dI:{"^":"a;$ti",
t:function(a,b,c){H.y(c,H.a5(this,"dI",0))
throw H.d(P.V("Cannot modify an unmodifiable list"))}},
kR:{"^":"cy+dI;"}}],["","",,H,{"^":"",
ib:function(){throw H.d(P.V("Cannot modify unmodifiable Map"))},
by:function(a){var z,y
z=H.D(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
nc:function(a){return init.types[H.a6(a)]},
nm:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.O(a).$isay},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ah(a)
if(typeof z!=="string")throw H.d(H.aj(a))
return z},
bJ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jN:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.D(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.a2(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.c.K(w,u)|32)>x)return}return parseInt(a,b)},
bg:function(a){return H.jE(a)+H.dW(H.b7(a),0,null)},
jE:function(a){var z,y,x,w,v,u,t,s,r
z=J.O(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.Z||!!z.$isce){u=C.F(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.by(w.length>1&&C.c.K(w,0)===36?C.c.ay(w,1):w)},
jF:function(){if(!!self.location)return self.location.href
return},
f2:function(a){var z,y,x,w,v
H.cl(a)
z=J.av(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jO:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.aj(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.b0(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.aj(w))}return H.f2(z)},
f3:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.aj(x))
if(x<0)throw H.d(H.aj(x))
if(x>65535)return H.jO(a)}return H.f2(a)},
jP:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bh:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.b0(z,10))>>>0,56320|z&1023)}}throw H.d(P.a2(a,0,1114111,null,null))},
bf:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jM:function(a){var z=H.bf(a).getFullYear()+0
return z},
jK:function(a){var z=H.bf(a).getMonth()+1
return z},
jG:function(a){var z=H.bf(a).getDate()+0
return z},
jH:function(a){var z=H.bf(a).getHours()+0
return z},
jJ:function(a){var z=H.bf(a).getMinutes()+0
return z},
jL:function(a){var z=H.bf(a).getSeconds()+0
return z},
jI:function(a){var z=H.bf(a).getMilliseconds()+0
return z},
B:function(a){throw H.d(H.aj(a))},
f:function(a,b){if(a==null)J.av(a)
throw H.d(H.bt(a,b))},
bt:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aO(!0,b,"index",null)
z=H.a6(J.av(a))
if(!(b<0)){if(typeof z!=="number")return H.B(z)
y=b>=z}else y=!0
if(y)return P.ba(b,a,"index",null,z)
return P.cb(b,"index",null)},
n6:function(a,b,c){if(a>c)return new P.cC(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cC(a,c,!0,b,"end","Invalid value")
return new P.aO(!0,b,"end",null)},
aj:function(a){return new P.aO(!0,a,null,null)},
mW:function(a){if(typeof a!=="number")throw H.d(H.aj(a))
return a},
d:function(a){var z
if(a==null)a=new P.eX()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hI})
z.name=""}else z.toString=H.hI
return z},
hI:function(){return J.ah(this.dartException)},
q:function(a){throw H.d(a)},
A:function(a){throw H.d(P.aP(a))},
ac:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nP(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.b0(x,16)&8191)===10)switch(w){case 438:return z.$1(H.df(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eW(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fp()
u=$.$get$fq()
t=$.$get$fr()
s=$.$get$fs()
r=$.$get$fw()
q=$.$get$fx()
p=$.$get$fu()
$.$get$ft()
o=$.$get$fz()
n=$.$get$fy()
m=v.an(y)
if(m!=null)return z.$1(H.df(H.D(y),m))
else{m=u.an(y)
if(m!=null){m.method="call"
return z.$1(H.df(H.D(y),m))}else{m=t.an(y)
if(m==null){m=s.an(y)
if(m==null){m=r.an(y)
if(m==null){m=q.an(y)
if(m==null){m=p.an(y)
if(m==null){m=s.an(y)
if(m==null){m=o.an(y)
if(m==null){m=n.an(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eW(H.D(y),m))}}return z.$1(new H.kQ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.fc()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aO(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.fc()
return a},
bw:function(a){var z
if(a==null)return new H.h6(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h6(a)},
n9:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.t(0,a[y],a[x])}return b},
nl:function(a,b,c,d,e,f){H.e(a,"$isc1")
switch(H.a6(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.r("Unsupported number of arguments for wrapped closure"))},
bs:function(a,b){var z
H.a6(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nl)
a.$identity=z
return z},
i6:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.O(d).$isb){z.$reflectionInfo=d
x=H.jW(z).r}else x=d
w=e?Object.create(new H.kl().constructor.prototype):Object.create(new H.d2(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aE
if(typeof u!=="number")return u.F()
$.aE=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.em(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.nc,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.eh:H.d3
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.d("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.em(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
i3:function(a,b,c,d){var z=H.d3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
em:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.i5(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.i3(y,!w,z,b)
if(y===0){w=$.aE
if(typeof w!=="number")return w.F()
$.aE=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bA
if(v==null){v=H.cp("self")
$.bA=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aE
if(typeof w!=="number")return w.F()
$.aE=w+1
t+=w
w="return function("+t+"){return this."
v=$.bA
if(v==null){v=H.cp("self")
$.bA=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
i4:function(a,b,c,d){var z,y
z=H.d3
y=H.eh
switch(b?-1:a){case 0:throw H.d(H.k4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
i5:function(a,b){var z,y,x,w,v,u,t,s
z=$.bA
if(z==null){z=H.cp("self")
$.bA=z}y=$.eg
if(y==null){y=H.cp("receiver")
$.eg=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.i4(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aE
if(typeof y!=="number")return y.F()
$.aE=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aE
if(typeof y!=="number")return y.F()
$.aE=y+1
return new Function(z+y+"}")()},
dZ:function(a,b,c,d,e,f,g){return H.i6(a,b,H.a6(c),d,!!e,!!f,g)},
D:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.aB(a,"String"))},
n7:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aB(a,"double"))},
nE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aB(a,"num"))},
dX:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.aB(a,"bool"))},
a6:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.aB(a,"int"))},
hE:function(a,b){throw H.d(H.aB(a,H.by(H.D(b).substring(3))))},
nG:function(a,b){throw H.d(H.i2(a,H.by(H.D(b).substring(3))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.hE(a,b)},
i:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else z=!0
if(z)return a
H.nG(a,b)},
cl:function(a){if(a==null)return a
if(!!J.O(a).$isb)return a
throw H.d(H.aB(a,"List<dynamic>"))},
hB:function(a,b){var z
if(a==null)return a
z=J.O(a)
if(!!z.$isb)return a
if(z[b])return a
H.hE(a,b)},
hx:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a6(z)]
else return a.$S()}return},
ci:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hx(J.O(a))
if(z==null)return!1
return H.hj(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.dT)return a
$.dT=!0
try{if(H.ci(a,b))return a
z=H.cW(b)
y=H.aB(a,z)
throw H.d(y)}finally{$.dT=!1}},
e1:function(a,b){if(a!=null&&!H.dY(a,b))H.q(H.aB(a,H.cW(b)))
return a},
hp:function(a){var z,y
z=J.O(a)
if(!!z.$ism){y=H.hx(z)
if(y!=null)return H.cW(y)
return"Closure"}return H.bg(a)},
nM:function(a){throw H.d(new P.ig(H.D(a)))},
hy:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b7:function(a){if(a==null)return
return a.$ti},
or:function(a,b,c){return H.bx(a["$as"+H.j(c)],H.b7(b))},
cj:function(a,b,c,d){var z
H.D(c)
H.a6(d)
z=H.bx(a["$as"+H.j(c)],H.b7(b))
return z==null?null:z[d]},
a5:function(a,b,c){var z
H.D(b)
H.a6(c)
z=H.bx(a["$as"+H.j(b)],H.b7(a))
return z==null?null:z[c]},
u:function(a,b){var z
H.a6(b)
z=H.b7(a)
return z==null?null:z[b]},
cW:function(a){return H.b6(a,null)},
b6:function(a,b){var z,y
H.k(b,"$isb",[P.h],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.by(a[0].builtin$cls)+H.dW(a,1,b)
if(typeof a=="function")return H.by(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a6(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.j(b[y])}if('func' in a)return H.mM(a,b)
if('futureOr' in a)return"FutureOr<"+H.b6("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
t=C.c.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.b6(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b6(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b6(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b6(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.n8(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.D(z[l])
n=n+m+H.b6(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dW:function(a,b,c){var z,y,x,w,v,u
H.k(c,"$isb",[P.h],"$asb")
if(a==null)return""
z=new P.ak("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b6(u,c)}return"<"+z.i(0)+">"},
bx:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bW:function(a,b,c,d){var z,y
H.D(b)
H.cl(c)
H.D(d)
if(a==null)return!1
z=H.b7(a)
y=J.O(a)
if(y[b]==null)return!1
return H.hs(H.bx(y[d],z),null,c,null)},
k:function(a,b,c,d){H.D(b)
H.cl(c)
H.D(d)
if(a==null)return a
if(H.bW(a,b,c,d))return a
throw H.d(H.aB(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.by(b.substring(3))+H.dW(c,0,null),init.mangledGlobalNames)))},
hs:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.au(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.au(a[y],b,c[y],d))return!1
return!0},
op:function(a,b,c){return a.apply(b,H.bx(J.O(b)["$as"+H.j(c)],H.b7(b)))},
hA:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="G"||a===-1||a===-2||H.hA(z)}return!1},
dY:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="G"||b===-1||b===-2||H.hA(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dY(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ci(a,b)}z=J.O(a).constructor
y=H.b7(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.au(z,null,b,null)},
y:function(a,b){if(a!=null&&!H.dY(a,b))throw H.d(H.aB(a,H.cW(b)))
return a},
au:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.au(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.hj(a,b,c,d)
if('func' in a)return c.builtin$cls==="c1"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.au("type" in a?a.type:null,b,x,d)
else if(H.au(a,b,x,d))return!0
else{if(!('$is'+"bE" in y.prototype))return!1
w=y.prototype["$as"+"bE"]
v=H.bx(w,z?a.slice(1):null)
return H.au(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hs(H.bx(r,z),b,u,d)},
hj:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.au(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.au(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.au(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.au(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.nD(m,b,l,d)},
nD:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.au(c[w],d,a[w],b))return!1}return!0},
oq:function(a,b,c){Object.defineProperty(a,H.D(b),{value:c,enumerable:false,writable:true,configurable:true})},
nr:function(a){var z,y,x,w,v,u
z=H.D($.hz.$1(a))
y=$.cR[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cU[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.D($.hr.$2(a,z))
if(z!=null){y=$.cR[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cU[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cV(x)
$.cR[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cU[z]=x
return x}if(v==="-"){u=H.cV(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hD(a,x)
if(v==="*")throw H.d(P.cI(z))
if(init.leafTags[z]===true){u=H.cV(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hD(a,x)},
hD:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.e4(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cV:function(a){return J.e4(a,!1,null,!!a.$isay)},
nC:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cV(z)
else return J.e4(z,c,null,null)},
nj:function(){if(!0===$.e3)return
$.e3=!0
H.nk()},
nk:function(){var z,y,x,w,v,u,t,s
$.cR=Object.create(null)
$.cU=Object.create(null)
H.nf()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hF.$1(v)
if(u!=null){t=H.nC(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nf:function(){var z,y,x,w,v,u,t
z=C.a3()
z=H.br(C.a0,H.br(C.a5,H.br(C.E,H.br(C.E,H.br(C.a4,H.br(C.a1,H.br(C.a2(C.F),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hz=new H.ng(v)
$.hr=new H.nh(u)
$.hF=new H.ni(t)},
br:function(a,b){return a(b)||b},
hH:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
e7:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ia:{"^":"a;$ti",
i:function(a){return P.dh(this)},
t:function(a,b,c){H.y(b,H.u(this,0))
H.y(c,H.u(this,1))
return H.ib()},
$isK:1},
ic:{"^":"ia;a,b,c,$ti",
gn:function(a){return this.a},
bO:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k:function(a,b){if(!this.bO(b))return
return this.e2(b)},
e2:function(a){return this.b[H.D(a)]},
a2:function(a,b){var z,y,x,w,v
z=H.u(this,1)
H.l(b,{func:1,ret:-1,args:[H.u(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.y(this.e2(v),z))}}},
jV:{"^":"a;a,b,c,d,e,f,r,0x",p:{
jW:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cx(z)
y=z[0]
x=z[1]
return new H.jV(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kC:{"^":"a;a,b,c,d,e,f",
an:function(a){var z,y,x
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
aN:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kC(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cH:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fv:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jz:{"^":"a8;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
eW:function(a,b){return new H.jz(a,b==null?null:b.method)}}},
iX:{"^":"a8;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
p:{
df:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iX(a,y,z?null:b.receiver)}}},
kQ:{"^":"a8;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nP:{"^":"m:18;a",
$1:function(a){if(!!J.O(a).$isa8)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h6:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaT:1},
m:{"^":"a;",
i:function(a){return"Closure '"+H.bg(this).trim()+"'"},
gfz:function(){return this},
$isc1:1,
gfz:function(){return this}},
ff:{"^":"m;"},
kl:{"^":"ff;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.by(z)+"'"}},
d2:{"^":"ff;a,b,c,d",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d2))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga_:function(a){var z,y
z=this.c
if(z==null)y=H.bJ(this.a)
else y=typeof z!=="object"?J.bY(z):H.bJ(z)
return(y^H.bJ(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bg(z)+"'")},
p:{
d3:function(a){return a.a},
eh:function(a){return a.c},
cp:function(a){var z,y,x,w,v
z=new H.d2("self","target","receiver","name")
y=J.cx(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kD:{"^":"a8;a",
i:function(a){return this.a},
p:{
aB:function(a,b){return new H.kD("TypeError: "+H.j(P.ct(a))+": type '"+H.hp(a)+"' is not a subtype of type '"+b+"'")}}},
i1:{"^":"a8;a",
i:function(a){return this.a},
p:{
i2:function(a,b){return new H.i1("CastError: "+H.j(P.ct(a))+": type '"+H.hp(a)+"' is not a subtype of type '"+b+"'")}}},
k3:{"^":"a8;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
p:{
k4:function(a){return new H.k3(a)}}},
b4:{"^":"eO;a,0b,0c,0d,0e,0f,r,$ti",
gn:function(a){return this.a},
gkm:function(a){return this.a===0},
gaD:function(){return new H.j3(this,[H.u(this,0)])},
bO:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dY(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dY(y,a)}else return this.kj(a)},
kj:function(a){var z=this.d
if(z==null)return!1
return this.d8(this.cp(z,this.d7(a)),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bG(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bG(w,b)
x=y==null?null:y.b
return x}else return this.kk(b)},
kk:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cp(z,this.d7(a))
x=this.d8(y,a)
if(x<0)return
return y[x].b},
t:function(a,b,c){var z,y
H.y(b,H.u(this,0))
H.y(c,H.u(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cz()
this.b=z}this.dP(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cz()
this.c=y}this.dP(y,b,c)}else this.kl(b,c)},
kl:function(a,b){var z,y,x,w
H.y(a,H.u(this,0))
H.y(b,H.u(this,1))
z=this.d
if(z==null){z=this.cz()
this.d=z}y=this.d7(a)
x=this.cp(z,y)
if(x==null)this.cH(z,y,[this.cj(a,b)])
else{w=this.d8(x,a)
if(w>=0)x[w].b=b
else x.push(this.cj(a,b))}},
a2:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aP(this))
z=z.c}},
dP:function(a,b,c){var z
H.y(b,H.u(this,0))
H.y(c,H.u(this,1))
z=this.bG(a,b)
if(z==null)this.cH(a,b,this.cj(b,c))
else z.b=c},
hh:function(){this.r=this.r+1&67108863},
cj:function(a,b){var z,y
z=new H.j2(H.y(a,H.u(this,0)),H.y(b,H.u(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.hh()
return z},
d7:function(a){return J.bY(a)&0x3ffffff},
d8:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.E(a[y].a,b))return y
return-1},
i:function(a){return P.dh(this)},
bG:function(a,b){return a[b]},
cp:function(a,b){return a[b]},
cH:function(a,b,c){a[b]=c},
hw:function(a,b){delete a[b]},
dY:function(a,b){return this.bG(a,b)!=null},
cz:function(){var z=Object.create(null)
this.cH(z,"<non-identifier-key>",z)
this.hw(z,"<non-identifier-key>")
return z},
$iseK:1},
j2:{"^":"a;a,b,0c,0d"},
j3:{"^":"ex;a,$ti",
gn:function(a){return this.a.a},
gT:function(a){var z,y
z=this.a
y=new H.j4(z,z.r,this.$ti)
y.c=z.e
return y}},
j4:{"^":"a;a,b,0c,0d,$ti",
sdQ:function(a){this.d=H.y(a,H.u(this,0))},
gL:function(){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aP(z))
else{z=this.c
if(z==null){this.sdQ(null)
return!1}else{this.sdQ(z.a)
this.c=this.c.c
return!0}}},
$isb3:1},
ng:{"^":"m:18;a",
$1:function(a){return this.a(a)}},
nh:{"^":"m:46;a",
$2:function(a,b){return this.a(a,b)}},
ni:{"^":"m:48;a",
$1:function(a){return this.a(H.D(a))}},
iV:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseY:1,
$isjX:1,
p:{
iW:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(P.a0("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
n8:function(a){return J.eF(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nF:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bp:function(a){return a},
jt:function(a){return new Int8Array(a)},
b_:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bt(b,a))},
mG:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.n6(a,b,c))
return b},
dm:{"^":"I;",$isdm:1,$iskE:1,"%":";ArrayBufferView;dl|h2|h3|ju|h4|h5|be"},
dl:{"^":"dm;",
gn:function(a){return a.length},
$isay:1,
$asay:I.e0},
ju:{"^":"h3;",
k:function(a,b){H.b_(b,a,a.length)
return a[b]},
t:function(a,b,c){H.n7(c)
H.b_(b,a,a.length)
a[b]=c},
$ascv:function(){return[P.t]},
$asY:function(){return[P.t]},
$iso:1,
$aso:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]},
"%":"Float32Array"},
be:{"^":"h5;",
t:function(a,b,c){H.a6(c)
H.b_(b,a,a.length)
a[b]=c},
$ascv:function(){return[P.n]},
$asY:function(){return[P.n]},
$iso:1,
$aso:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}},
o0:{"^":"be;",
k:function(a,b){H.b_(b,a,a.length)
return a[b]},
"%":"Int16Array"},
o1:{"^":"be;",
k:function(a,b){H.b_(b,a,a.length)
return a[b]},
"%":"Int32Array"},
o2:{"^":"be;",
k:function(a,b){H.b_(b,a,a.length)
return a[b]},
"%":"Int8Array"},
o3:{"^":"be;",
k:function(a,b){H.b_(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
o4:{"^":"be;",
gn:function(a){return a.length},
k:function(a,b){H.b_(b,a,a.length)
return a[b]},
$isoc:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
eU:{"^":"be;",
gn:function(a){return a.length},
k:function(a,b){H.b_(b,a,a.length)
return a[b]},
$iseU:1,
$isP:1,
"%":";Uint8Array"},
h2:{"^":"dl+Y;"},
h3:{"^":"h2+cv;"},
h4:{"^":"dl+Y;"},
h5:{"^":"h4+cv;"}}],["","",,P,{"^":"",
ln:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mT()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bs(new P.lp(z),1)).observe(y,{childList:true})
return new P.lo(z,y,x)}else if(self.setImmediate!=null)return P.mU()
return P.mV()},
og:[function(a){self.scheduleImmediate(H.bs(new P.lq(H.l(a,{func:1,ret:-1})),0))},"$1","mT",4,0,10],
oh:[function(a){self.setImmediate(H.bs(new P.lr(H.l(a,{func:1,ret:-1})),0))},"$1","mU",4,0,10],
oi:[function(a){P.dw(C.y,H.l(a,{func:1,ret:-1}))},"$1","mV",4,0,10],
dw:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.h.aa(a.a,1000)
return P.m8(z<0?0:z,b)},
fm:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bi]})
z=C.h.aa(a.a,1000)
return P.m9(z<0?0:z,b)},
mP:function(a,b){if(H.ci(a,{func:1,args:[P.a,P.aT]}))return H.l(a,{func:1,ret:null,args:[P.a,P.aT]})
if(H.ci(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.d(P.d0(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mO:function(){var z,y
for(;z=$.bq,z!=null;){$.bU=null
y=z.b
$.bq=y
if(y==null)$.bT=null
z.a.$0()}},
oo:[function(){$.dU=!0
try{P.mO()}finally{$.bU=null
$.dU=!1
if($.bq!=null)$.$get$dO().$1(P.ht())}},"$0","ht",0,0,3],
ho:function(a){var z=new P.fU(H.l(a,{func:1,ret:-1}))
if($.bq==null){$.bT=z
$.bq=z
if(!$.dU)$.$get$dO().$1(P.ht())}else{$.bT.b=z
$.bT=z}},
mS:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bq
if(z==null){P.ho(a)
$.bU=$.bT
return}y=new P.fU(a)
x=$.bU
if(x==null){y.b=z
$.bU=y
$.bq=y}else{y.b=x.b
x.b=y
$.bU=y
if(y.b==null)$.bT=y}},
nH:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.T
if(C.l===y){P.cQ(null,null,C.l,a)
return}y.toString
P.cQ(null,null,y,H.l(y.cP(a),z))},
fl:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.T
if(y===C.l){y.toString
return P.dw(a,b)}return P.dw(a,H.l(y.cP(b),z))},
kz:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bi]}
H.l(b,z)
y=$.T
if(y===C.l){y.toString
return P.fm(a,b)}x=y.ex(b,P.bi)
$.T.toString
return P.fm(a,H.l(x,z))},
cP:function(a,b,c,d,e){var z={}
z.a=d
P.mS(new P.mQ(z,e))},
hk:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
hl:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
mR:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cQ:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.cP(d):c.jC(d,-1)
P.ho(d)},
lp:{"^":"m:24;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
lo:{"^":"m:32;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lq:{"^":"m:0;a",
$0:function(){this.a.$0()}},
lr:{"^":"m:0;a",
$0:function(){this.a.$0()}},
h8:{"^":"a;a,0b,c",
he:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bs(new P.mb(this,b),0),a)
else throw H.d(P.V("`setTimeout()` not found."))},
hf:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bs(new P.ma(this,a,Date.now(),b),0),a)
else throw H.d(P.V("Periodic timer."))},
$isbi:1,
p:{
m8:function(a,b){var z=new P.h8(!0,0)
z.he(a,b)
return z},
m9:function(a,b){var z=new P.h8(!1,0)
z.hf(a,b)
return z}}},
mb:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ma:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.fW(w,x)}z.c=y
this.d.$1(z)}},
bo:{"^":"a;0a,b,c,d,e,$ti",
kr:function(a){if(this.c!==6)return!0
return this.b.b.dn(H.l(this.d,{func:1,ret:P.N,args:[P.a]}),a.a,P.N,P.a)},
kh:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.u(this,1)}
w=this.b.b
if(H.ci(z,{func:1,args:[P.a,P.aT]}))return H.e1(w.kQ(z,a.a,a.b,null,y,P.aT),x)
else return H.e1(w.dn(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aZ:{"^":"a;ej:a<,b,0iF:c<,$ti",
fo:function(a,b,c){var z,y,x,w
z=H.u(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.l){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mP(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aZ(0,$.T,[c])
w=b==null?1:3
this.dS(new P.bo(x,w,a,b,[z,c]))
return x},
kW:function(a,b){return this.fo(a,null,b)},
dS:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbo")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaZ")
z=y.a
if(z<4){y.dS(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cQ(null,null,z,H.l(new P.lA(this,a),{func:1,ret:-1}))}},
ef:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbo")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaZ")
y=u.a
if(y<4){u.ef(a)
return}this.a=y
this.c=u.c}z.a=this.bI(a)
y=this.b
y.toString
P.cQ(null,null,y,H.l(new P.lF(z,this),{func:1,ret:-1}))}},
cD:function(){var z=H.e(this.c,"$isbo")
this.c=null
return this.bI(z)},
bI:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dU:function(a){var z,y,x
z=H.u(this,0)
H.e1(a,{futureOr:1,type:z})
y=this.$ti
if(H.bW(a,"$isbE",y,"$asbE"))if(H.bW(a,"$isaZ",y,null))P.fY(a,this)
else P.lB(a,this)
else{x=this.cD()
H.y(a,z)
this.a=4
this.c=a
P.bP(this,x)}},
dV:function(a,b){var z
H.e(b,"$isaT")
z=this.cD()
this.a=8
this.c=new P.an(a,b)
P.bP(this,z)},
$isbE:1,
p:{
lB:function(a,b){var z,y,x
b.a=1
try{a.fo(new P.lC(b),new P.lD(b),null)}catch(x){z=H.ac(x)
y=H.bw(x)
P.nH(new P.lE(b,z,y))}},
fY:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaZ")
if(z>=4){y=b.cD()
b.a=a.a
b.c=a.c
P.bP(b,y)}else{y=H.e(b.c,"$isbo")
b.a=2
b.c=a
a.ef(y)}},
bP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isan")
y=y.b
u=v.a
t=v.b
y.toString
P.cP(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bP(z.a,b)}y=z.a
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
if(p){H.e(r,"$isan")
y=y.b
u=r.a
t=r.b
y.toString
P.cP(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.lI(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lH(x,b,r).$0()}else if((y&2)!==0)new P.lG(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.O(y).$isbE){if(y.a>=4){n=H.e(t.c,"$isbo")
t.c=null
b=t.bI(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fY(y,t)
return}}m=b.b
n=H.e(m.c,"$isbo")
m.c=null
b=m.bI(n)
y=x.a
u=x.b
if(!y){H.y(u,H.u(m,0))
m.a=4
m.c=u}else{H.e(u,"$isan")
m.a=8
m.c=u}z.a=m
y=m}}}},
lA:{"^":"m:0;a,b",
$0:function(){P.bP(this.a,this.b)}},
lF:{"^":"m:0;a,b",
$0:function(){P.bP(this.b,this.a.a)}},
lC:{"^":"m:24;a",
$1:function(a){var z=this.a
z.a=0
z.dU(a)}},
lD:{"^":"m:34;a",
$2:function(a,b){this.a.dV(a,H.e(b,"$isaT"))},
$1:function(a){return this.$2(a,null)}},
lE:{"^":"m:0;a,b,c",
$0:function(){this.a.dV(this.b,this.c)}},
lI:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.fn(H.l(w.d,{func:1}),null)}catch(v){y=H.ac(v)
x=H.bw(v)
if(this.d){w=H.e(this.a.a.c,"$isan").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isan")
else u.b=new P.an(y,x)
u.a=!0
return}if(!!J.O(z).$isbE){if(z instanceof P.aZ&&z.gej()>=4){if(z.gej()===8){w=this.b
w.b=H.e(z.giF(),"$isan")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.kW(new P.lJ(t),null)
w.a=!1}}},
lJ:{"^":"m:35;a",
$1:function(a){return this.a}},
lH:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.u(x,0)
v=H.y(this.c,w)
u=H.u(x,1)
this.a.b=x.b.b.dn(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ac(t)
y=H.bw(t)
x=this.a
x.b=new P.an(z,y)
x.a=!0}}},
lG:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isan")
w=this.c
if(w.kr(z)&&w.e!=null){v=this.b
v.b=w.kh(z)
v.a=!1}}catch(u){y=H.ac(u)
x=H.bw(u)
w=H.e(this.a.a.c,"$isan")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.an(y,x)
s.a=!0}}},
fU:{"^":"a;a,0b"},
km:{"^":"a;$ti",
gn:function(a){var z,y,x,w
z={}
y=new P.aZ(0,$.T,[P.n])
z.a=0
x=H.u(this,0)
w=H.l(new P.ko(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.kp(z,y),{func:1,ret:-1})
W.a3(this.a,this.b,w,!1,x)
return y}},
ko:{"^":"m;a,b",
$1:function(a){H.y(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.u(this.b,0)]}}},
kp:{"^":"m:0;a,b",
$0:function(){this.b.dU(this.a.a)}},
ds:{"^":"a;$ti"},
kn:{"^":"a;"},
bi:{"^":"a;"},
an:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isa8:1},
mC:{"^":"a;",$isof:1},
mQ:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eX()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
lU:{"^":"mC;",
kR:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.l===$.T){a.$0()
return}P.hk(null,null,this,a,-1)}catch(x){z=H.ac(x)
y=H.bw(x)
P.cP(null,null,this,z,H.e(y,"$isaT"))}},
kS:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.l===$.T){a.$1(b)
return}P.hl(null,null,this,a,b,-1,c)}catch(x){z=H.ac(x)
y=H.bw(x)
P.cP(null,null,this,z,H.e(y,"$isaT"))}},
jC:function(a,b){return new P.lW(this,H.l(a,{func:1,ret:b}),b)},
cP:function(a){return new P.lV(this,H.l(a,{func:1,ret:-1}))},
ex:function(a,b){return new P.lX(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
fn:function(a,b){H.l(a,{func:1,ret:b})
if($.T===C.l)return a.$0()
return P.hk(null,null,this,a,b)},
dn:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.T===C.l)return a.$1(b)
return P.hl(null,null,this,a,b,c,d)},
kQ:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.T===C.l)return a.$2(b,c)
return P.mR(null,null,this,a,b,c,d,e,f)}},
lW:{"^":"m;a,b,c",
$0:function(){return this.a.fn(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lV:{"^":"m:3;a,b",
$0:function(){return this.a.kR(this.b)}},
lX:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.kS(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
j5:function(a,b,c,d,e){return new H.b4(0,0,[d,e])},
j6:function(a,b,c){H.cl(a)
return H.k(H.n9(a,new H.b4(0,0,[b,c])),"$iseK",[b,c],"$aseK")},
eL:function(a,b){return new H.b4(0,0,[a,b])},
c9:function(a,b,c,d){return new P.lO(0,0,[d])},
iR:function(a,b,c){var z,y
if(P.dV(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bV()
C.a.h(y,a)
try{P.mN(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.fe(b,H.hB(z,"$iso"),", ")+c
return y.charCodeAt(0)==0?y:y},
dc:function(a,b,c){var z,y,x
if(P.dV(a))return b+"..."+c
z=new P.ak(b)
y=$.$get$bV()
C.a.h(y,a)
try{x=z
x.a=P.fe(x.gaV(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaV()+c
y=z.gaV()
return y.charCodeAt(0)==0?y:y},
dV:function(a){var z,y
for(z=0;y=$.$get$bV(),z<y.length;++z)if(a===y[z])return!0
return!1},
mN:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gT(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.j(z.gL())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gL();++x
if(!z.E()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gL();++x
for(;z.E();t=s,s=r){r=z.gL();++x
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
j7:function(a,b,c){var z=P.j5(null,null,null,b,c)
a.a2(0,new P.j8(z,b,c))
return z},
eM:function(a,b){var z,y,x
z=P.c9(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x)z.h(0,H.y(a[x],b))
return z},
dh:function(a){var z,y,x
z={}
if(P.dV(a))return"{...}"
y=new P.ak("")
try{C.a.h($.$get$bV(),a)
x=y
x.a=x.gaV()+"{"
z.a=!0
a.a2(0,new P.je(z,y))
z=y
z.a=z.gaV()+"}"}finally{z=$.$get$bV()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaV()
return z.charCodeAt(0)==0?z:z},
lO:{"^":"lK;a,0b,0c,0d,0e,0f,r,$ti",
gT:function(a){var z=new P.h1(this,this.r,this.$ti)
z.c=this.e
return z},
gn:function(a){return this.a},
Z:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscM")!=null}else{y=this.hs(b)
return y}},
hs:function(a){var z=this.d
if(z==null)return!1
return this.cn(this.e3(z,a),a)>=0},
h:function(a,b){var z,y
H.y(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dQ()
this.b=z}return this.dR(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dQ()
this.c=y}return this.dR(y,b)}else return this.hi(b)},
hi:function(a){var z,y,x
H.y(a,H.u(this,0))
z=this.d
if(z==null){z=P.dQ()
this.d=z}y=this.dW(a)
x=z[y]
if(x==null)z[y]=[this.cA(a)]
else{if(this.cn(x,a)>=0)return!1
x.push(this.cA(a))}return!0},
G:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.iv(this.c,b)
else return this.is(b)},
is:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.e3(z,a)
x=this.cn(y,a)
if(x<0)return!1
this.el(y.splice(x,1)[0])
return!0},
dR:function(a,b){H.y(b,H.u(this,0))
if(H.e(a[b],"$iscM")!=null)return!1
a[b]=this.cA(b)
return!0},
iv:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscM")
if(z==null)return!1
this.el(z)
delete a[b]
return!0},
e8:function(){this.r=this.r+1&67108863},
cA:function(a){var z,y
z=new P.cM(H.y(a,H.u(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.e8()
return z},
el:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.e8()},
dW:function(a){return J.bY(a)&0x3ffffff},
e3:function(a,b){return a[this.dW(b)]},
cn:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.E(a[y].a,b))return y
return-1},
p:{
dQ:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cM:{"^":"a;a,0b,0c"},
h1:{"^":"a;a,b,0c,0d,$ti",
sdT:function(a){this.d=H.y(a,H.u(this,0))},
gL:function(){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aP(z))
else{z=this.c
if(z==null){this.sdT(null)
return!1}else{this.sdT(H.y(z.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
$isb3:1,
p:{
lP:function(a,b,c){var z=new P.h1(a,b,[c])
z.c=a.e
return z}}},
lK:{"^":"k5;"},
j8:{"^":"m:6;a,b,c",
$2:function(a,b){this.a.t(0,H.y(a,this.b),H.y(b,this.c))}},
cy:{"^":"lQ;",$iso:1,$isb:1},
Y:{"^":"a;$ti",
gT:function(a){return new H.dg(a,this.gn(a),0,[H.cj(this,a,"Y",0)])},
af:function(a,b){return this.k(a,b)},
kY:function(a,b){var z,y
z=H.c([],[H.cj(this,a,"Y",0)])
C.a.sn(z,this.gn(a))
for(y=0;y<this.gn(a);++y)C.a.t(z,y,this.k(a,y))
return z},
dr:function(a){return this.kY(a,!0)},
k7:function(a,b,c,d){var z
H.y(d,H.cj(this,a,"Y",0))
P.b5(b,c,this.gn(a),null,null,null)
for(z=b;z<c;++z)this.t(a,z,d)},
i:function(a){return P.dc(a,"[","]")}},
eO:{"^":"cA;"},
je:{"^":"m:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
cA:{"^":"a;$ti",
a2:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.a5(this,"cA",0),H.a5(this,"cA",1)]})
for(z=J.b8(this.gaD());z.E();){y=z.gL()
b.$2(y,this.k(0,y))}},
gn:function(a){return J.av(this.gaD())},
i:function(a){return P.dh(this)},
$isK:1},
me:{"^":"a;$ti",
t:function(a,b,c){H.y(b,H.u(this,0))
H.y(c,H.u(this,1))
throw H.d(P.V("Cannot modify unmodifiable map"))}},
jf:{"^":"a;$ti",
k:function(a,b){return this.a.k(0,b)},
t:function(a,b,c){this.a.t(0,H.y(b,H.u(this,0)),H.y(c,H.u(this,1)))},
a2:function(a,b){this.a.a2(0,H.l(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gn:function(a){var z=this.a
return z.gn(z)},
i:function(a){return J.ah(this.a)},
$isK:1},
fA:{"^":"mf;a,$ti"},
k7:{"^":"a;$ti",
ad:function(a,b){var z
for(z=J.b8(H.k(b,"$iso",this.$ti,"$aso"));z.E();)this.h(0,z.gL())},
i:function(a){return P.dc(this,"{","}")},
af:function(a,b){var z,y,x
if(b<0)H.q(P.a2(b,0,null,"index",null))
for(z=P.lP(this,this.r,H.u(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.d(P.ba(b,this,"index",null,y))},
$iso:1,
$isf8:1},
k5:{"^":"k7;"},
lQ:{"^":"a+Y;"},
mf:{"^":"jf+me;$ti"}}],["","",,P,{"^":"",hZ:{"^":"c_;a",
ks:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.b5(b,c,a.length,null,null,null)
z=$.$get$fW()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.c.K(a,y)
if(r===37){q=s+2
if(q<=c){p=H.cT(C.c.K(a,s))
o=H.cT(C.c.K(a,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.c.a5("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ak("")
l=w.a+=C.c.w(a,x,y)
w.a=l+H.bh(r)
x=s
continue}}throw H.d(P.a0("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.c.w(a,x,c)
k=l.length
if(v>=0)P.ee(a,u,c,v,t,k)
else{j=C.h.bD(k-1,4)+1
if(j===1)throw H.d(P.a0("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.c.bb(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.ee(a,u,c,v,t,i)
else{j=C.h.bD(i,4)
if(j===1)throw H.d(P.a0("Invalid base64 encoding length ",a,c))
if(j>1)a=C.c.bb(a,c,c,j===2?"==":"=")}return a},
$asc_:function(){return[[P.b,P.n],P.h]},
p:{
ee:function(a,b,c,d,e,f){if(C.h.bD(f,4)!==0)throw H.d(P.a0("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.a0("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.a0("Invalid base64 padding, more than two '=' characters",a,b))}}},i_:{"^":"b1;a",
$asb1:function(){return[[P.b,P.n],P.h]}},c_:{"^":"a;$ti"},b1:{"^":"kn;$ti"},iu:{"^":"c_;",
$asc_:function(){return[P.h,[P.b,P.n]]}},iN:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},iM:{"^":"b1;a",
ht:function(a,b,c){var z,y,x,w,v,u
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
default:u=null}if(u!=null){if(v==null)v=new P.ak("")
if(w>b)v.a+=C.c.w(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hV(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb1:function(){return[P.h,P.h]}},l3:{"^":"iu;a",
gk6:function(){return C.T}},la:{"^":"b1;",
bn:function(a,b,c){var z,y,x,w
z=a.length
P.b5(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mA(0,0,x)
if(w.hE(a,b,z)!==z)w.en(J.hN(a,z-1),0)
return new Uint8Array(x.subarray(0,H.mG(0,w.b,x.length)))},
cV:function(a){return this.bn(a,0,null)},
$asb1:function(){return[P.h,[P.b,P.n]]}},mA:{"^":"a;a,b,c",
en:function(a,b){var z,y,x,w,v
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
hE:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.a5(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.K(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.en(w,C.c.K(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},l4:{"^":"b1;a",
bn:function(a,b,c){var z,y,x,w,v
H.k(a,"$isb",[P.n],"$asb")
z=P.l5(!1,a,b,c)
if(z!=null)return z
y=J.av(a)
P.b5(b,c,y,null,null,null)
x=new P.ak("")
w=new P.mx(!1,x,!0,0,0,0)
w.bn(a,b,y)
if(w.e>0){H.q(P.a0("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.bh(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
cV:function(a){return this.bn(a,0,null)},
$asb1:function(){return[[P.b,P.n],P.h]},
p:{
l5:function(a,b,c,d){H.k(b,"$isb",[P.n],"$asb")
if(b instanceof Uint8Array)return P.l6(!1,b,c,d)
return},
l6:function(a,b,c,d){var z,y,x
z=$.$get$fF()
if(z==null)return
y=0===c
if(y&&!0)return P.dK(z,b)
x=b.length
d=P.b5(c,d,x,null,null,null)
if(y&&d===x)return P.dK(z,b)
return P.dK(z,b.subarray(c,d))},
dK:function(a,b){if(P.l8(b))return
return P.l9(a,b)},
l9:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ac(y)}return},
l8:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
l7:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ac(y)}return}}},mx:{"^":"a;a,b,c,d,e,f",
bn:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(a,"$isb",[P.n],"$asb")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mz(c)
v=new P.my(this,b,c,a)
$label0$0:for(u=J.bv(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.cc()
if((r&192)!==128){q=P.a0("Bad UTF-8 encoding 0x"+C.h.by(r,16),a,s)
throw H.d(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.H,q)
if(z<=C.H[q]){q=P.a0("Overlong encoding of 0x"+C.h.by(z,16),a,s-x-1)
throw H.d(q)}if(z>1114111){q=P.a0("Character outside valid Unicode range: 0x"+C.h.by(z,16),a,s-x-1)
throw H.d(q)}if(!this.c||z!==65279)t.a+=H.bh(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.dE()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.U()
if(r<0){m=P.a0("Negative UTF-8 code unit: -0x"+C.h.by(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a0("Bad UTF-8 encoding 0x"+C.h.by(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mz:{"^":"m:55;a",
$2:function(a,b){var z,y,x,w
H.k(a,"$isb",[P.n],"$asb")
z=this.a
for(y=J.bv(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.cc()
if((w&127)!==w)return x-b}return z-b}},my:{"^":"m:43;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cd(this.d,a,b)}}}],["","",,P,{"^":"",
ck:function(a,b,c){var z
H.l(b,{func:1,ret:P.n,args:[P.h]})
z=H.jN(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.d(P.a0(a,null,null))},
iw:function(a){if(a instanceof H.m)return a.i(0)
return"Instance of '"+H.bg(a)+"'"},
j9:function(a,b,c,d){var z,y
H.y(b,d)
z=J.iT(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.t(z,y,b)
return H.k(z,"$isb",[d],"$asb")},
ja:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gT(a);x.E();)C.a.h(y,H.y(x.gL(),c))
if(b)return y
return H.k(J.cx(y),"$isb",z,"$asb")},
cd:function(a,b,c){var z,y
z=P.n
H.k(a,"$iso",[z],"$aso")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$isbb",[z],"$asbb")
y=a.length
c=P.b5(b,c,y,null,null,null)
return H.f3(b>0||c<y?C.a.fQ(a,b,c):a)}if(!!J.O(a).$iseU)return H.jP(a,b,P.b5(b,c,a.length,null,null,null))
return P.kq(a,b,c)},
kq:function(a,b,c){var z,y,x,w
H.k(a,"$iso",[P.n],"$aso")
if(b<0)throw H.d(P.a2(b,0,J.av(a),null,null))
z=c==null
if(!z&&c<b)throw H.d(P.a2(c,b,J.av(a),null,null))
y=J.b8(a)
for(x=0;x<b;++x)if(!y.E())throw H.d(P.a2(b,0,x,null,null))
w=[]
if(z)for(;y.E();)w.push(y.gL())
else for(x=b;x<c;++x){if(!y.E())throw H.d(P.a2(c,b,x,null,null))
w.push(y.gL())}return H.f3(w)},
jY:function(a,b,c){return new H.iV(a,H.iW(a,!1,!0,!1))},
fC:function(){var z=H.jF()
if(z!=null)return P.kW(z,0,null)
throw H.d(P.V("'Uri.base' is not supported"))},
ct:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ah(a)
if(typeof a==="string")return JSON.stringify(a)
return P.iw(a)},
r:function(a){return new P.fX(a)},
jb:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.n]})
z=H.c([],[d])
C.a.sn(z,a)
for(y=0;y<a;++y)C.a.t(z,y,b.$1(y))
return z},
e6:function(a){H.nF(a)},
kW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.c.K(a,b+4)^58)*3|C.c.K(a,b)^100|C.c.K(a,b+1)^97|C.c.K(a,b+2)^116|C.c.K(a,b+3)^97)>>>0
if(y===0)return P.fB(b>0||c<c?C.c.w(a,b,c):a,5,null).gfu()
else if(y===32)return P.fB(C.c.w(a,z,c),0,null).gfu()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.n])
C.a.t(w,0,0)
x=b-1
C.a.t(w,1,x)
C.a.t(w,2,x)
C.a.t(w,7,x)
C.a.t(w,3,b)
C.a.t(w,4,b)
C.a.t(w,5,c)
C.a.t(w,6,c)
if(P.hm(a,b,c,0,w)>=14)C.a.t(w,7,c)
v=w[1]
if(typeof v!=="number")return v.l2()
if(v>=b)if(P.hm(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.F()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.U()
if(typeof r!=="number")return H.B(r)
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
p=!1}else{if(!(r<c&&r===s+2&&C.c.aj(a,"..",s)))n=r>s+2&&C.c.aj(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.c.aj(a,"file",b)){if(u<=b){if(!C.c.aj(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.c.bb(a,s,r,"/");++r;++q;++c}else{a=C.c.w(a,b,s)+"/"+C.c.w(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.c.aj(a,"http",b)){if(x&&t+3===s&&C.c.aj(a,"80",t+1))if(b===0&&!0){a=C.c.bb(a,t,s,"")
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
else if(v===z&&C.c.aj(a,"https",b)){if(x&&t+4===s&&C.c.aj(a,"443",t+1))if(b===0&&!0){a=C.c.bb(a,t,s,"")
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
q-=b}return new P.m1(a,v,u,t,s,r,q,o)}return P.mg(a,b,c,v,u,t,s,r,q,o)},
fE:function(a,b){var z=P.h
return C.a.ke(H.c(a.split("&"),[z]),P.eL(z,z),new P.kZ(b),[P.K,P.h,P.h])},
kU:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kV(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.c.a5(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.ck(C.c.w(a,v,w),null,null)
if(typeof s!=="number")return s.dE()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.ck(C.c.w(a,v,c),null,null)
if(typeof s!=="number")return s.dE()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kX(a)
y=new P.kY(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.c.a5(a,w)
if(s===58){if(w===b){++w
if(C.c.a5(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaE(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kU(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.h.b0(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
mH:function(){var z,y,x,w,v
z=P.jb(22,new P.mJ(),!0,P.P)
y=new P.mI(z)
x=new P.mK()
w=new P.mL()
v=H.e(y.$2(0,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isP")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isP")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isP"),"]",5)
v=H.e(y.$2(9,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isP"),"az",21)
v=H.e(y.$2(21,245),"$isP")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hm:function(a,b,c,d,e){var z,y,x,w,v
H.k(e,"$isb",[P.n],"$asb")
z=$.$get$hn()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.c.K(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.t(e,v>>>5,y)}return d},
N:{"^":"a;"},
"+bool":0,
ap:{"^":"a;a,b",
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.ap))return!1
return this.a===b.a&&!0},
ga_:function(a){var z=this.a
return(z^C.h.b0(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.ii(H.jM(this))
y=P.c0(H.jK(this))
x=P.c0(H.jG(this))
w=P.c0(H.jH(this))
v=P.c0(H.jJ(this))
u=P.c0(H.jL(this))
t=P.ij(H.jI(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
p:{
ii:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
ij:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c0:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"am;"},
"+double":0,
bB:{"^":"a;a",
U:function(a,b){return C.h.U(this.a,H.e(b,"$isbB").a)},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bB))return!1
return this.a===b.a},
ga_:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.iq()
y=this.a
if(y<0)return"-"+new P.bB(0-y).i(0)
x=z.$1(C.h.aa(y,6e7)%60)
w=z.$1(C.h.aa(y,1e6)%60)
v=new P.ip().$1(y%1e6)
return""+C.h.aa(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
p:{
ew:function(a,b,c,d,e,f){return new P.bB(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ip:{"^":"m:29;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
iq:{"^":"m:29;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a8:{"^":"a;"},
eX:{"^":"a8;",
i:function(a){return"Throw of null."}},
aO:{"^":"a8;a,b,c,d",
gcm:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcl:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gcm()+y+x
if(!this.a)return w
v=this.gcl()
u=P.ct(this.b)
return w+v+": "+H.j(u)},
p:{
bZ:function(a){return new P.aO(!1,null,null,a)},
d0:function(a,b,c){return new P.aO(!0,a,b,c)}}},
cC:{"^":"aO;e,f,a,b,c,d",
gcm:function(){return"RangeError"},
gcl:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
p:{
cb:function(a,b,c){return new P.cC(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.cC(b,c,!0,a,d,"Invalid value")},
b5:function(a,b,c,d,e,f){if(typeof a!=="number")return H.B(a)
if(0>a||a>c)throw H.d(P.a2(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.d(P.a2(b,a,c,"end",f))
return b}return c}}},
iP:{"^":"aO;e,n:f>,a,b,c,d",
gcm:function(){return"RangeError"},
gcl:function(){if(J.hJ(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
p:{
ba:function(a,b,c,d,e){var z=H.a6(e!=null?e:J.av(b))
return new P.iP(b,z,!0,a,c,"Index out of range")}}},
kS:{"^":"a8;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
V:function(a){return new P.kS(a)}}},
kP:{"^":"a8;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cI:function(a){return new P.kP(a)}}},
dr:{"^":"a8;a",
i:function(a){return"Bad state: "+this.a},
p:{
fd:function(a){return new P.dr(a)}}},
i9:{"^":"a8;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.ct(z))+"."},
p:{
aP:function(a){return new P.i9(a)}}},
jA:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa8:1},
fc:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa8:1},
ig:{"^":"a8;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fX:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
iD:{"^":"a;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.j(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.c.w(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.c.K(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.c.a5(w,s)
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
return y+n+l+m+"\n"+C.c.v(" ",x-o+n.length)+"^\n"},
p:{
a0:function(a,b,c){return new P.iD(a,b,c)}}},
c1:{"^":"a;"},
n:{"^":"am;"},
"+int":0,
o:{"^":"a;$ti",
dv:["fS",function(a,b){var z=H.a5(this,"o",0)
return new H.dN(this,H.l(b,{func:1,ret:P.N,args:[z]}),[z])}],
gn:function(a){var z,y
z=this.gT(this)
for(y=0;z.E();)++y
return y},
gaQ:function(a){var z,y
z=this.gT(this)
if(!z.E())throw H.d(H.cw())
y=z.gL()
if(z.E())throw H.d(H.iS())
return y},
af:function(a,b){var z,y,x
if(b<0)H.q(P.a2(b,0,null,"index",null))
for(z=this.gT(this),y=0;z.E();){x=z.gL()
if(b===y)return x;++y}throw H.d(P.ba(b,this,"index",null,y))},
i:function(a){return P.iR(this,"(",")")}},
b3:{"^":"a;$ti"},
b:{"^":"a;$ti",$iso:1},
"+List":0,
K:{"^":"a;$ti"},
G:{"^":"a;",
ga_:function(a){return P.a.prototype.ga_.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
am:{"^":"a;"},
"+num":0,
a:{"^":";",
A:function(a,b){return this===b},
ga_:function(a){return H.bJ(this)},
i:function(a){return"Instance of '"+H.bg(this)+"'"},
toString:function(){return this.i(this)}},
aT:{"^":"a;"},
h:{"^":"a;",$iseY:1},
"+String":0,
ak:{"^":"a;aV:a<",
gn:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$iso8:1,
p:{
fe:function(a,b,c){var z=J.b8(b)
if(!z.E())return a
if(c.length===0){do a+=H.j(z.gL())
while(z.E())}else{a+=H.j(z.gL())
for(;z.E();)a=a+c+H.j(z.gL())}return a}}},
kZ:{"^":"m:49;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.k(a,"$isK",[z,z],"$asK")
H.D(b)
y=J.bX(b).f8(b,"=")
if(y===-1){if(b!=="")a.t(0,P.dS(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.c.w(b,0,y)
w=C.c.ay(b,y+1)
z=this.a
a.t(0,P.dS(x,0,x.length,z,!0),P.dS(w,0,w.length,z,!0))}return a}},
kV:{"^":"m:51;a",
$2:function(a,b){throw H.d(P.a0("Illegal IPv4 address, "+a,this.a,b))}},
kX:{"^":"m:54;a",
$2:function(a,b){throw H.d(P.a0("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kY:{"^":"m:45;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.ck(C.c.w(this.b,a,b),null,16)
if(typeof z!=="number")return z.U()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cN:{"^":"a;cf:a<,b,c,d,fk:e>,f,r,0x,0y,0z,0Q,0ch",
sir:function(a){var z=P.h
this.Q=H.k(a,"$isK",[z,z],"$asK")},
gfv:function(){return this.b},
gd6:function(a){var z=this.c
if(z==null)return""
if(C.c.a9(z,"["))return C.c.w(z,1,z.length-1)
return z},
gc5:function(a){var z=this.d
if(z==null)return P.ha(this.a)
return z},
gdj:function(){var z=this.f
return z==null?"":z},
gf3:function(){var z=this.r
return z==null?"":z},
dm:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.k(h,"$isK",[P.h,null],"$asK")
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
if(x&&!C.c.a9(d,"/"))d="/"+d
g=P.dR(g,0,0,h)
return new P.cN(i,j,c,f,d,g,this.r)},
fm:function(a,b){return this.dm(a,null,null,null,null,null,null,b,null,null)},
gdk:function(){var z,y
if(this.Q==null){z=this.f
y=P.h
this.sir(new P.fA(P.fE(z==null?"":z,C.m),[y,y]))}return this.Q},
gf4:function(){return this.c!=null},
gf7:function(){return this.f!=null},
gf5:function(){return this.r!=null},
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
if(!!J.O(b).$isdJ){if(this.a==b.gcf())if(this.c!=null===b.gf4())if(this.b==b.gfv())if(this.gd6(this)==b.gd6(b))if(this.gc5(this)==b.gc5(b))if(this.e===b.gfk(b)){z=this.f
y=z==null
if(!y===b.gf7()){if(y)z=""
if(z===b.gdj()){z=this.r
y=z==null
if(!y===b.gf5()){if(y)z=""
z=z===b.gf3()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
ga_:function(a){var z=this.z
if(z==null){z=C.c.ga_(this.i(0))
this.z=z}return z},
$isdJ:1,
p:{
ch:function(a,b,c,d){var z,y,x,w,v,u
H.k(a,"$isb",[P.n],"$asb")
if(c===C.m){z=$.$get$hf().b
if(typeof b!=="string")H.q(H.aj(b))
z=z.test(b)}else z=!1
if(z)return b
H.y(b,H.a5(c,"c_",0))
y=c.gk6().cV(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bh(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mg:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mr(a,b,d)
else{if(d===b)P.bQ(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.ms(a,z,e-1):""
x=P.ml(a,e,f,!1)
if(typeof f!=="number")return f.F()
w=f+1
if(typeof g!=="number")return H.B(g)
v=w<g?P.mo(P.ck(C.c.w(a,w,g),new P.mh(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mm(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.U()
t=h<i?P.dR(a,h+1,i,null):null
return new P.cN(j,y,x,v,u,t,i<c?P.mk(a,i+1,c):null)},
ha:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bQ:function(a,b,c){throw H.d(P.a0(c,a,b))},
mo:function(a,b){if(a!=null&&a===P.ha(b))return
return a},
ml:function(a,b,c,d){var z,y
if(b===c)return""
if(C.c.a5(a,b)===91){if(typeof c!=="number")return c.M()
z=c-1
if(C.c.a5(a,z)!==93)P.bQ(a,b,"Missing end `]` to match `[` in host")
P.fD(a,b+1,z)
return C.c.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.B(c)
y=b
for(;y<c;++y)if(C.c.a5(a,y)===58){P.fD(a,b,c)
return"["+a+"]"}return P.mu(a,b,c)},
mu:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.B(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.c.a5(a,z)
if(v===37){u=P.hh(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ak("")
s=C.c.w(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.c.w(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.K,t)
t=(C.K[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ak("")
if(y<z){x.a+=C.c.w(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.t,t)
t=(C.t[t]&1<<(v&15))!==0}else t=!1
if(t)P.bQ(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.c.a5(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ak("")
s=C.c.w(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.hb(v)
z+=q
y=z}}}}if(x==null)return C.c.w(a,b,c)
if(y<c){s=C.c.w(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mr:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.hd(C.c.K(a,b)))P.bQ(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.c.K(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bQ(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.c.w(a,b,c)
return P.mi(y?a.toLowerCase():a)},
mi:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ms:function(a,b,c){return P.bR(a,b,c,C.a9,!1)},
mm:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bR(a,b,c,C.L,!0):C.r.lH(d,new P.mn(),P.h).l(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.c.a9(w,"/"))w="/"+w
return P.mt(w,e,f)},
mt:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.c.a9(a,"/"))return P.mv(a,!z||c)
return P.mw(a)},
dR:function(a,b,c,d){var z,y
z={}
H.k(d,"$isK",[P.h,null],"$asK")
if(a!=null){if(d!=null)throw H.d(P.bZ("Both query and queryParameters specified"))
return P.bR(a,b,c,C.u,!0)}if(d==null)return
y=new P.ak("")
z.a=""
d.a2(0,new P.mp(new P.mq(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mk:function(a,b,c){return P.bR(a,b,c,C.u,!0)},
hh:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.c.a5(a,b+1)
x=C.c.a5(a,z)
w=H.cT(y)
v=H.cT(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.h.b0(u,4)
if(z>=8)return H.f(C.w,z)
z=(C.w[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bh(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.c.w(a,b,b+3).toUpperCase()
return},
hb:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.n])
C.a.t(y,0,37)
C.a.t(y,1,C.c.K("0123456789ABCDEF",a>>>4))
C.a.t(y,2,C.c.K("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.h.iS(a,6*w)&63|x
C.a.t(y,v,37)
C.a.t(y,v+1,C.c.K("0123456789ABCDEF",u>>>4))
C.a.t(y,v+2,C.c.K("0123456789ABCDEF",u&15))
v+=3}}return P.cd(y,0,null)},
bR:function(a,b,c,d,e){var z=P.hg(a,b,c,H.k(d,"$isb",[P.n],"$asb"),e)
return z==null?C.c.w(a,b,c):z},
hg:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.k(d,"$isb",[P.n],"$asb")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.U()
if(typeof c!=="number")return H.B(c)
if(!(y<c))break
c$0:{v=C.c.a5(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hh(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.t,u)
u=(C.t[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bQ(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.c.a5(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.hb(v)}}if(w==null)w=new P.ak("")
w.a+=C.c.w(a,x,y)
w.a+=H.j(t)
if(typeof s!=="number")return H.B(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.U()
if(x<c)w.a+=C.c.w(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
he:function(a){if(C.c.a9(a,"."))return!0
return C.c.f8(a,"/.")!==-1},
mw:function(a){var z,y,x,w,v,u,t
if(!P.he(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.E(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.l(z,"/")},
mv:function(a,b){var z,y,x,w,v,u
if(!P.he(a))return!b?P.hc(a):a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaE(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaE(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.t(z,0,P.hc(z[0]))}return C.a.l(z,"/")},
hc:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.hd(J.hM(a,0)))for(y=1;y<z;++y){x=C.c.K(a,y)
if(x===58)return C.c.w(a,0,y)+"%3A"+C.c.ay(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mj:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.c.K(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.d(P.bZ("Invalid URL encoding"))}}return z},
dS:function(a,b,c,d,e){var z,y,x,w,v
y=b
while(!0){if(!(y<c)){z=!0
break}x=C.c.K(a,y)
if(x<=127)if(x!==37)w=x===43
else w=!0
else w=!0
if(w){z=!1
break}++y}if(z){if(C.m!==d)w=!1
else w=!0
if(w)return C.c.w(a,b,c)
else v=new H.v(C.c.w(a,b,c))}else{v=H.c([],[P.n])
for(w=a.length,y=b;y<c;++y){x=C.c.K(a,y)
if(x>127)throw H.d(P.bZ("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.d(P.bZ("Truncated URI"))
C.a.h(v,P.mj(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.k(v,"$isb",[P.n],"$asb")
return new P.l4(!1).cV(v)},
hd:function(a){var z=a|32
return 97<=z&&z<=122}}},
mh:{"^":"m:36;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.F()
throw H.d(P.a0("Invalid port",this.a,z+1))}},
mn:{"^":"m:17;",
$1:function(a){return P.ch(C.aa,a,C.m,!1)}},
mq:{"^":"m:44;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.j(P.ch(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.j(P.ch(C.w,b,C.m,!0))}}},
mp:{"^":"m:40;a",
$2:function(a,b){var z,y
H.D(a)
if(b==null||typeof b==="string")this.a.$2(a,H.D(b))
else for(z=J.b8(H.hB(b,"$iso")),y=this.a;z.E();)y.$2(a,H.D(z.gL()))}},
kT:{"^":"a;a,b,c",
gfu:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.c.f9(y,"?",z)
w=y.length
if(x>=0){v=P.bR(y,x+1,w,C.u,!1)
w=x}else v=null
z=new P.lv(this,"data",null,null,null,P.bR(y,z,w,C.L,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
fB:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.c.K(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.d(P.a0("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.d(P.a0("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.c.K(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaE(z)
if(v!==44||x!==t+7||!C.c.aj(a,"base64",t+1))throw H.d(P.a0("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.Q.ks(a,s,y)
else{r=P.hg(a,s,y,C.u,!0)
if(r!=null)a=C.c.bb(a,s,y,r)}return new P.kT(a,z,c)}}},
mJ:{"^":"m:41;",
$1:function(a){return new Uint8Array(96)}},
mI:{"^":"m:33;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hO(z,0,96,b)
return z}},
mK:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.c.K(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mL:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.c.K(b,0),y=C.c.K(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
m1:{"^":"a;a,b,c,d,e,f,r,x,0y",
gf4:function(){return this.c>0},
gf6:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.F()
y=this.e
if(typeof y!=="number")return H.B(y)
y=z+1<y
z=y}else z=!1
return z},
gf7:function(){var z=this.f
if(typeof z!=="number")return z.U()
return z<this.r},
gf5:function(){return this.r<this.a.length},
ge6:function(){return this.b===4&&C.c.a9(this.a,"http")},
ge7:function(){return this.b===5&&C.c.a9(this.a,"https")},
gcf:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.ge6()){this.x="http"
z="http"}else if(this.ge7()){this.x="https"
z="https"}else if(z===4&&C.c.a9(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.c.a9(this.a,"package")){this.x="package"
z="package"}else{z=C.c.w(this.a,0,z)
this.x=z}return z},
gfv:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.c.w(this.a,y,z-1):""},
gd6:function(a){var z=this.c
return z>0?C.c.w(this.a,z,this.d):""},
gc5:function(a){var z
if(this.gf6()){z=this.d
if(typeof z!=="number")return z.F()
return P.ck(C.c.w(this.a,z+1,this.e),null,null)}if(this.ge6())return 80
if(this.ge7())return 443
return 0},
gfk:function(a){return C.c.w(this.a,this.e,this.f)},
gdj:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.U()
return z<y?C.c.w(this.a,z+1,y):""},
gf3:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.c.ay(y,z+1):""},
gdk:function(){var z=this.f
if(typeof z!=="number")return z.U()
if(z>=this.r)return C.ab
z=P.h
return new P.fA(P.fE(this.gdj(),C.m),[z,z])},
dm:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.k(h,"$isK",[P.h,null],"$asK")
i=this.gcf()
z=i==="file"
y=this.c
j=y>0?C.c.w(this.a,this.b+3,y):""
f=this.gf6()?this.gc5(this):null
y=this.c
if(y>0)c=C.c.w(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.c.w(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.c.a9(d,"/"))d="/"+d
g=P.dR(g,0,0,h)
x=this.r
if(x<y.length)b=C.c.ay(y,x+1)
return new P.cN(i,j,c,f,d,g,b)},
fm:function(a,b){return this.dm(a,null,null,null,null,null,null,b,null,null)},
ga_:function(a){var z=this.y
if(z==null){z=C.c.ga_(this.a)
this.y=z}return z},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.O(b).$isdJ)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$isdJ:1},
lv:{"^":"cN;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
ec:function(a){var z=document.createElement("a")
return z},
d6:function(a,b){var z=document.createElement("canvas")
return z},
ir:function(a,b,c){var z,y
z=document.body
y=(z&&C.p).at(z,a,b,c)
y.toString
z=W.C
z=new H.dN(new W.at(y),H.l(new W.is(),{func:1,ret:P.N,args:[z]}),[z])
return H.e(z.gaQ(z),"$isR")},
it:function(a){H.e(a,"$iscu")
return"wheel"},
bC:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hR(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ac(x)}return z},
iQ:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$iseE")
try{J.hT(z,a)}catch(x){H.ac(x)}return z},
cK:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
h0:function(a,b,c,d){var z,y
z=W.cK(W.cK(W.cK(W.cK(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hq:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.l)return a
return z.ex(a,b)},
a4:{"^":"R;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
hX:{"^":"a4;",
i:function(a){return String(a)},
$ishX:1,
"%":"HTMLAnchorElement"},
nR:{"^":"a4;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
ef:{"^":"a4;",$isef:1,"%":"HTMLBaseElement"},
co:{"^":"a4;",$isco:1,"%":"HTMLBodyElement"},
d5:{"^":"a4;",
cd:function(a,b,c){if(c!=null)return this.hF(a,b,P.mX(c,null))
return this.hG(a,b)},
fE:function(a,b){return this.cd(a,b,null)},
hF:function(a,b,c){return a.getContext(b,c)},
hG:function(a,b){return a.getContext(b)},
$isd5:1,
$isek:1,
"%":"HTMLCanvasElement"},
d7:{"^":"I;",
hH:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
k_:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$isd7:1,
"%":"CanvasRenderingContext2D"},
nU:{"^":"C;0n:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nW:{"^":"lu;0n:length=",
fG:function(a,b){var z=this.hI(a,this.ho(a,b))
return z==null?"":z},
ho:function(a,b){var z,y
z=$.$get$ep()
y=z[b]
if(typeof y==="string")return y
y=this.iV(a,b)
z[b]=y
return y},
iV:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ik()+b
if(z in a)return z
return b},
hI:function(a,b){return a.getPropertyValue(b)},
gcQ:function(a){return a.bottom},
gbq:function(a){return a.height},
gb6:function(a){return a.left},
gbu:function(a){return a.right},
gbz:function(a){return a.top},
gbB:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ie:{"^":"a;",
gb6:function(a){return this.fG(a,"left")}},
b2:{"^":"a4;",$isb2:1,"%":"HTMLDivElement"},
il:{"^":"C;",
jy:function(a,b){return a.adoptNode(b)},
dC:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
nX:{"^":"I;",
i:function(a){return String(a)},
"%":"DOMException"},
im:{"^":"I;",
jQ:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
io:{"^":"I;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
A:function(a,b){var z
if(b==null)return!1
if(!H.bW(b,"$isaS",[P.am],"$asaS"))return!1
z=J.a1(b)
return a.left===z.gb6(b)&&a.top===z.gbz(b)&&a.width===z.gbB(b)&&a.height===z.gbq(b)},
ga_:function(a){return W.h0(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcQ:function(a){return a.bottom},
gbq:function(a){return a.height},
gb6:function(a){return a.left},
gbu:function(a){return a.right},
gbz:function(a){return a.top},
gbB:function(a){return a.width},
$isaS:1,
$asaS:function(){return[P.am]},
"%":";DOMRectReadOnly"},
lt:{"^":"cy;e1:a<,b",
gn:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.f(z,b)
return H.e(z[b],"$isR")},
t:function(a,b,c){var z
H.e(c,"$isR")
z=this.b
if(b<0||b>=z.length)return H.f(z,b)
J.cY(this.a,c,z[b])},
h:function(a,b){J.e9(this.a,b)
return b},
gT:function(a){var z=this.dr(this)
return new J.aw(z,z.length,0,[H.u(z,0)])},
$asY:function(){return[W.R]},
$aso:function(){return[W.R]},
$asb:function(){return[W.R]}},
R:{"^":"C;0kT:tagName=",
gjB:function(a){return new W.lw(a)},
gcU:function(a){return new W.lt(a,a.children)},
geB:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.U()
if(x<0)x=-x*0
if(typeof w!=="number")return w.U()
if(w<0)w=-w*0
return new P.aS(z,y,x,w,[P.am])},
i:function(a){return a.localName},
at:["cg",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.ez
if(z==null){z=H.c([],[W.aK])
y=new W.eV(z)
C.a.h(z,W.fZ(null))
C.a.h(z,W.h7())
$.ez=y
d=y}else d=z
z=$.ey
if(z==null){z=new W.hi(d)
$.ey=z
c=z}else{z.a=d
c=z}}if($.aQ==null){z=document
y=z.implementation
y=(y&&C.U).jQ(y,"")
$.aQ=y
$.da=y.createRange()
y=$.aQ
y.toString
y=y.createElement("base")
H.e(y,"$isef")
y.href=z.baseURI
z=$.aQ.head;(z&&C.W).H(z,y)}z=$.aQ
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$isco")}z=$.aQ
if(!!this.$isco)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aQ.body;(z&&C.p).H(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.Z(C.a8,a.tagName)){z=$.da;(z&&C.N).fL(z,x)
z=$.da
w=(z&&C.N).jO(z,b)}else{x.innerHTML=b
w=$.aQ.createDocumentFragment()
for(z=J.a1(w);y=x.firstChild,y!=null;)z.H(w,y)}z=$.aQ.body
if(x==null?z!=null:x!==z)J.eb(x)
c.dF(w)
C.z.jy(document,w)
return w},function(a,b,c){return this.at(a,b,c,null)},"jP",null,null,"glF",5,5,null],
fO:function(a,b,c,d){a.textContent=null
this.H(a,this.at(a,b,c,d))},
fN:function(a,b){return this.fO(a,b,null,null)},
bd:function(a,b){return a.getAttribute(b)},
it:function(a,b){return a.removeAttribute(b)},
fM:function(a,b,c){return a.setAttribute(b,c)},
$isR:1,
"%":";Element"},
is:{"^":"m:19;",
$1:function(a){return!!J.O(H.e(a,"$isC")).$isR}},
ad:{"^":"I;",$isad:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
cu:{"^":"I;",
hj:function(a,b,c,d){return a.addEventListener(b,H.bs(H.l(c,{func:1,args:[W.ad]}),1),!1)},
$iscu:1,
"%":";EventTarget"},
nY:{"^":"a4;0n:length=","%":"HTMLFormElement"},
iI:{"^":"a4;","%":"HTMLHeadElement"},
iJ:{"^":"I;0n:length=",
iz:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
iK:{"^":"lM;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.ba(b,a,null,null,null))
return a[b]},
t:function(a,b,c){H.e(c,"$isC")
throw H.d(P.V("Cannot assign element of immutable List."))},
af:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isay:1,
$asay:function(){return[W.C]},
$asY:function(){return[W.C]},
$iso:1,
$aso:function(){return[W.C]},
$isb:1,
$asb:function(){return[W.C]},
$isiK:1,
$asaF:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
iL:{"^":"il;","%":"HTMLDocument"},
c2:{"^":"I;0eC:data=",$isc2:1,"%":"ImageData"},
eD:{"^":"a4;",$iseD:1,$isek:1,"%":"HTMLImageElement"},
eE:{"^":"a4;0type",
sl_:function(a,b){a.type=H.D(b)},
$iseE:1,
"%":"HTMLInputElement"},
bF:{"^":"dz;",$isbF:1,"%":"KeyboardEvent"},
iZ:{"^":"a4;","%":"HTMLLabelElement"},
jc:{"^":"I;",
i:function(a){return String(a)},
$isjc:1,
"%":"Location"},
jr:{"^":"a4;","%":"HTMLAudioElement;HTMLMediaElement"},
az:{"^":"dz;",$isaz:1,"%":"PointerEvent;DragEvent|MouseEvent"},
at:{"^":"cy;a",
gaQ:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.fd("No elements"))
if(y>1)throw H.d(P.fd("More than one element"))
return z.firstChild},
ad:function(a,b){var z,y,x,w,v
H.k(b,"$iso",[W.C],"$aso")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.a1(y),v=0;v<x;++v)w.H(y,z.firstChild)
return},
t:function(a,b,c){var z,y
H.e(c,"$isC")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.f(y,b)
J.cY(z,c,y[b])},
gT:function(a){var z=this.a.childNodes
return new W.eB(z,z.length,-1,[H.cj(C.ac,z,"aF",0)])},
gn:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asY:function(){return[W.C]},
$aso:function(){return[W.C]},
$asb:function(){return[W.C]}},
C:{"^":"cu;0kG:previousSibling=",
kI:function(a){var z=a.parentNode
if(z!=null)J.cm(z,a)},
kM:function(a,b){var z,y
try{z=a.parentNode
J.cY(z,b,a)}catch(y){H.ac(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.fR(a):z},
H:function(a,b){return a.appendChild(H.e(b,"$isC"))},
iu:function(a,b){return a.removeChild(b)},
iy:function(a,b,c){return a.replaceChild(b,c)},
$isC:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
jv:{"^":"lS;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.ba(b,a,null,null,null))
return a[b]},
t:function(a,b,c){H.e(c,"$isC")
throw H.d(P.V("Cannot assign element of immutable List."))},
af:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isay:1,
$asay:function(){return[W.C]},
$asY:function(){return[W.C]},
$iso:1,
$aso:function(){return[W.C]},
$isb:1,
$asb:function(){return[W.C]},
$asaF:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
jT:{"^":"I;",
jO:function(a,b){return a.createContextualFragment(b)},
fL:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
o6:{"^":"a4;0n:length=","%":"HTMLSelectElement"},
cE:{"^":"a4;",$iscE:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
kr:{"^":"a4;",
at:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.cg(a,b,c,d)
z=W.ir("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.at(y).ad(0,new W.at(z))
return y},
hK:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
ks:{"^":"a4;",
at:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.cg(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.at(z.createElement("table"),b,c,d)
z.toString
z=new W.at(z)
x=z.gaQ(z)
x.toString
z=new W.at(x)
w=z.gaQ(z)
y.toString
w.toString
new W.at(y).ad(0,new W.at(w))
return y},
e5:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
o9:{"^":"a4;",
at:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.cg(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.at(z.createElement("table"),b,c,d)
z.toString
z=new W.at(z)
x=z.gaQ(z)
y.toString
x.toString
new W.at(y).ad(0,new W.at(x))
return y},
"%":"HTMLTableSectionElement"},
fg:{"^":"a4;",$isfg:1,"%":"HTMLTemplateElement"},
bj:{"^":"I;",$isbj:1,"%":"Touch"},
bk:{"^":"dz;",$isbk:1,"%":"TouchEvent"},
ob:{"^":"md;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.ba(b,a,null,null,null))
return a[b]},
t:function(a,b,c){H.e(c,"$isbj")
throw H.d(P.V("Cannot assign element of immutable List."))},
af:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isay:1,
$asay:function(){return[W.bj]},
$asY:function(){return[W.bj]},
$iso:1,
$aso:function(){return[W.bj]},
$isb:1,
$asb:function(){return[W.bj]},
$asaF:function(){return[W.bj]},
"%":"TouchList"},
dz:{"^":"ad;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oe:{"^":"jr;",$isek:1,"%":"HTMLVideoElement"},
bO:{"^":"az;",
gjW:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.V("deltaY is not supported"))},
gjV:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.V("deltaX is not supported"))},
$isbO:1,
"%":"WheelEvent"},
lm:{"^":"cu;",
iB:function(a,b){return a.requestAnimationFrame(H.bs(H.l(b,{func:1,ret:-1,args:[P.am]}),1))},
hy:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fV:{"^":"C;",$isfV:1,"%":"Attr"},
oj:{"^":"io;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
A:function(a,b){var z
if(b==null)return!1
if(!H.bW(b,"$isaS",[P.am],"$asaS"))return!1
z=J.a1(b)
return a.left===z.gb6(b)&&a.top===z.gbz(b)&&a.width===z.gbB(b)&&a.height===z.gbq(b)},
ga_:function(a){return W.h0(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbq:function(a){return a.height},
gbB:function(a){return a.width},
"%":"ClientRect|DOMRect"},
on:{"^":"mE;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.ba(b,a,null,null,null))
return a[b]},
t:function(a,b,c){H.e(c,"$isC")
throw H.d(P.V("Cannot assign element of immutable List."))},
af:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isay:1,
$asay:function(){return[W.C]},
$asY:function(){return[W.C]},
$iso:1,
$aso:function(){return[W.C]},
$isb:1,
$asb:function(){return[W.C]},
$asaF:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ls:{"^":"eO;e1:a<",
a2:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.gaD(),y=z.length,x=this.a,w=J.a1(x),v=0;v<z.length;z.length===y||(0,H.A)(z),++v){u=z[v]
b.$2(u,w.bd(x,u))}},
gaD:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.e(z[w],"$isfV")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$ascA:function(){return[P.h,P.h]},
$asK:function(){return[P.h,P.h]}},
lw:{"^":"ls;a",
k:function(a,b){return J.d_(this.a,H.D(b))},
t:function(a,b,c){J.hU(this.a,b,c)},
gn:function(a){return this.gaD().length}},
lx:{"^":"km;a,b,c,$ti"},
ok:{"^":"lx;a,b,c,$ti"},
ly:{"^":"ds;a,b,c,d,e,$ti",p:{
a3:function(a,b,c,d,e){var z,y
z=W.hq(new W.lz(c),W.ad)
y=z!=null
if(y&&!0){H.l(z,{func:1,args:[W.ad]})
if(y)J.hL(a,b,z,!1)}return new W.ly(0,a,b,z,!1,[e])}}},
lz:{"^":"m:38;a",
$1:function(a){return this.a.$1(H.e(a,"$isad"))}},
cg:{"^":"a;a",
h4:function(a){var z,y
z=$.$get$dP()
if(z.gkm(z)){for(y=0;y<262;++y)z.t(0,C.a7[y],W.nd())
for(y=0;y<12;++y)z.t(0,C.B[y],W.ne())}},
b1:function(a){return $.$get$h_().Z(0,W.bC(a))},
aJ:function(a,b,c){var z,y,x
z=W.bC(a)
y=$.$get$dP()
x=y.k(0,H.j(z)+"::"+b)
if(x==null)x=y.k(0,"*::"+b)
if(x==null)return!1
return H.dX(x.$4(a,b,c,this))},
$isaK:1,
p:{
fZ:function(a){var z,y
z=W.ec(null)
y=window.location
z=new W.cg(new W.lY(z,y))
z.h4(a)
return z},
ol:[function(a,b,c,d){H.e(a,"$isR")
H.D(b)
H.D(c)
H.e(d,"$iscg")
return!0},"$4","nd",16,0,26],
om:[function(a,b,c,d){var z,y,x
H.e(a,"$isR")
H.D(b)
H.D(c)
z=H.e(d,"$iscg").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","ne",16,0,26]}},
aF:{"^":"a;$ti",
gT:function(a){return new W.eB(a,this.gn(a),-1,[H.cj(this,a,"aF",0)])}},
eV:{"^":"a;a",
b1:function(a){return C.a.eu(this.a,new W.jx(a))},
aJ:function(a,b,c){return C.a.eu(this.a,new W.jw(a,b,c))},
$isaK:1},
jx:{"^":"m:20;a",
$1:function(a){return H.e(a,"$isaK").b1(this.a)}},
jw:{"^":"m:20;a,b,c",
$1:function(a){return H.e(a,"$isaK").aJ(this.a,this.b,this.c)}},
lZ:{"^":"a;",
hd:function(a,b,c,d){var z,y,x
this.a.ad(0,c)
z=b.dv(0,new W.m_())
y=b.dv(0,new W.m0())
this.b.ad(0,z)
x=this.c
x.ad(0,C.I)
x.ad(0,y)},
b1:function(a){return this.a.Z(0,W.bC(a))},
aJ:["fV",function(a,b,c){var z,y
z=W.bC(a)
y=this.c
if(y.Z(0,H.j(z)+"::"+b))return this.d.jz(c)
else if(y.Z(0,"*::"+b))return this.d.jz(c)
else{y=this.b
if(y.Z(0,H.j(z)+"::"+b))return!0
else if(y.Z(0,"*::"+b))return!0
else if(y.Z(0,H.j(z)+"::*"))return!0
else if(y.Z(0,"*::*"))return!0}return!1}],
$isaK:1},
m_:{"^":"m:21;",
$1:function(a){return!C.a.Z(C.B,H.D(a))}},
m0:{"^":"m:21;",
$1:function(a){return C.a.Z(C.B,H.D(a))}},
m6:{"^":"lZ;e,a,b,c,d",
aJ:function(a,b,c){if(this.fV(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.d_(a,"template")==="")return this.e.Z(0,b)
return!1},
p:{
h7:function(){var z,y,x,w,v
z=P.h
y=P.eM(C.A,z)
x=H.u(C.A,0)
w=H.l(new W.m7(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.m6(y,P.c9(null,null,null,z),P.c9(null,null,null,z),P.c9(null,null,null,z),null)
y.hd(null,new H.ji(C.A,w,[x,z]),v,null)
return y}}},
m7:{"^":"m:17;",
$1:function(a){return"TEMPLATE::"+H.j(H.D(a))}},
m5:{"^":"a;",
b1:function(a){var z=J.O(a)
if(!!z.$isf7)return!1
z=!!z.$isdt
if(z&&W.bC(a)==="foreignObject")return!1
if(z)return!0
return!1},
aJ:function(a,b,c){if(b==="is"||C.c.a9(b,"on"))return!1
return this.b1(a)},
$isaK:1},
eB:{"^":"a;a,b,c,0d,$ti",
se4:function(a){this.d=H.y(a,H.u(this,0))},
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.se4(J.hK(this.a,z))
this.c=z
return!0}this.se4(null)
this.c=y
return!1},
gL:function(){return this.d},
$isb3:1},
aK:{"^":"a;"},
lY:{"^":"a;a,b",$isod:1},
hi:{"^":"a;a",
dF:function(a){new W.mB(this).$2(a,null)},
bk:function(a,b){if(b==null)J.eb(a)
else J.cm(b,a)},
iH:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hP(a)
x=J.d_(y.ge1(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ac(t)}v="element unprintable"
try{v=J.ah(a)}catch(t){H.ac(t)}try{u=W.bC(a)
this.iG(H.e(a,"$isR"),b,z,v,u,H.e(y,"$isK"),H.D(x))}catch(t){if(H.ac(t) instanceof P.aO)throw t
else{this.bk(a,b)
window
s="Removing corrupted element "+H.j(v)
if(typeof console!="undefined")window.console.warn(s)}}},
iG:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.bk(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.b1(a)){this.bk(a,b)
window
z="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aJ(a,"is",g)){this.bk(a,b)
window
z="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaD()
y=H.c(z.slice(0),[H.u(z,0)])
for(x=f.gaD().length-1,z=f.a,w=J.a1(z);x>=0;--x){if(x>=y.length)return H.f(y,x)
v=y[x]
if(!this.a.aJ(a,J.hW(v),w.bd(z,v))){window
u="Removing disallowed attribute <"+H.j(e)+" "+v+'="'+H.j(w.bd(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.bd(z,v)
w.it(z,v)}}if(!!J.O(a).$isfg)this.dF(a.content)},
$iso5:1},
mB:{"^":"m:42;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.iH(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.bk(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hQ(z)}catch(w){H.ac(w)
v=H.e(z,"$isC")
if(x){u=v.parentNode
if(u!=null)J.cm(u,v)}else J.cm(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isC")}}},
lu:{"^":"I+ie;"},
lL:{"^":"I+Y;"},
lM:{"^":"lL+aF;"},
lR:{"^":"I+Y;"},
lS:{"^":"lR+aF;"},
mc:{"^":"I+Y;"},
md:{"^":"mc+aF;"},
mD:{"^":"I+Y;"},
mE:{"^":"mD+aF;"}}],["","",,P,{"^":"",
n_:function(a){var z,y
z=J.O(a)
if(!!z.$isc2){y=z.geC(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h9(a.data,a.height,a.width)},
mZ:function(a){if(a instanceof P.h9)return{data:a.a,height:a.b,width:a.c}
return a},
mX:function(a,b){var z={}
a.a2(0,new P.mY(z))
return z},
ev:function(){var z=$.eu
if(z==null){z=J.cZ(window.navigator.userAgent,"Opera",0)
$.eu=z}return z},
ik:function(){var z,y
z=$.er
if(z!=null)return z
y=$.es
if(y==null){y=J.cZ(window.navigator.userAgent,"Firefox",0)
$.es=y}if(y)z="-moz-"
else{y=$.et
if(y==null){y=!P.ev()&&J.cZ(window.navigator.userAgent,"Trident/",0)
$.et=y}if(y)z="-ms-"
else z=P.ev()?"-o-":"-webkit-"}$.er=z
return z},
m2:{"^":"a;",
f1:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
du:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.O(a)
if(!!y.$isap)return new Date(a.a)
if(!!y.$isjX)throw H.d(P.cI("structured clone of RegExp"))
if(!!y.$isc2)return a
if(!!y.$isdm)return a
if(!!y.$isK){x=this.f1(a)
y=this.b
if(x>=y.length)return H.f(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.t(y,x,w)
a.a2(0,new P.m4(z,this))
return z.a}if(!!y.$isb){x=this.f1(a)
z=this.b
if(x>=z.length)return H.f(z,x)
w=z[x]
if(w!=null)return w
return this.jN(a,x)}throw H.d(P.cI("structured clone of other type"))},
jN:function(a,b){var z,y,x,w
z=J.bv(a)
y=z.gn(a)
x=new Array(y)
C.a.t(this.b,b,x)
for(w=0;w<y;++w)C.a.t(x,w,this.du(z.k(a,w)))
return x}},
m4:{"^":"m:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.du(b)}},
h9:{"^":"a;eC:a>,b,c",$isc2:1},
mY:{"^":"m:6;a",
$2:function(a,b){this.a[a]=b}},
m3:{"^":"m2;a,b"},
iA:{"^":"cy;a,b",
gbH:function(){var z,y,x
z=this.b
y=H.a5(z,"Y",0)
x=W.R
return new H.jg(new H.dN(z,H.l(new P.iB(),{func:1,ret:P.N,args:[y]}),[y]),H.l(new P.iC(),{func:1,ret:x,args:[y]}),[y,x])},
t:function(a,b,c){var z
H.e(c,"$isR")
z=this.gbH()
J.hS(z.b.$1(J.cn(z.a,b)),c)},
h:function(a,b){J.e9(this.b.a,b)},
gn:function(a){return J.av(this.gbH().a)},
k:function(a,b){var z=this.gbH()
return z.b.$1(J.cn(z.a,b))},
gT:function(a){var z=P.ja(this.gbH(),!1,W.R)
return new J.aw(z,z.length,0,[H.u(z,0)])},
$asY:function(){return[W.R]},
$aso:function(){return[W.R]},
$asb:function(){return[W.R]}},
iB:{"^":"m:19;",
$1:function(a){return!!J.O(H.e(a,"$isC")).$isR}},
iC:{"^":"m:56;",
$1:function(a){return H.i(H.e(a,"$isC"),"$isR")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lN:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lT:{"^":"a;$ti",
gbu:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.y(z+this.c,H.u(this,0))},
gcQ:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.y(z+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bW(b,"$isaS",[P.am],"$asaS"))return!1
z=this.a
y=J.a1(b)
x=y.gb6(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbz(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.u(this,0)
if(H.y(z+this.c,w)===y.gbu(b)){if(typeof x!=="number")return x.F()
z=H.y(x+this.d,w)===y.gcQ(b)}else z=!1}else z=!1}else z=!1
return z},
ga_:function(a){var z,y,x,w,v
z=this.a
y=J.bY(z)
x=this.b
w=J.bY(x)
if(typeof z!=="number")return z.F()
v=H.u(this,0)
z=H.y(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.y(x+this.d,v)
return P.lN(P.cL(P.cL(P.cL(P.cL(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aS:{"^":"lT;b6:a>,bz:b>,bB:c>,bq:d>,$ti"}}],["","",,P,{"^":"",f7:{"^":"dt;",$isf7:1,"%":"SVGScriptElement"},dt:{"^":"R;",
gcU:function(a){return new P.iA(a,new W.at(a))},
at:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aK])
C.a.h(z,W.fZ(null))
C.a.h(z,W.h7())
C.a.h(z,new W.m5())
c=new W.hi(new W.eV(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).jP(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.at(w)
u=z.gaQ(z)
for(z=J.a1(v);x=u.firstChild,x!=null;)z.H(v,x)
return v},
$isdt:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":"",P:{"^":"a;",$iso:1,
$aso:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskE:1}}],["","",,P,{"^":""}],["","",,P,{"^":"",i0:{"^":"I;",$isi0:1,"%":"WebGLBuffer"},iE:{"^":"I;",$isiE:1,"%":"WebGLFramebuffer"},jQ:{"^":"I;",$isjQ:1,"%":"WebGLProgram"},dp:{"^":"I;",
cL:function(a,b){return a.activeTexture(b)},
ev:function(a,b,c){return a.attachShader(b,c)},
aB:function(a,b,c){return a.bindBuffer(b,c)},
jD:function(a,b,c){return a.bindFramebuffer(b,c)},
aK:function(a,b,c){return a.bindTexture(b,c)},
jE:function(a,b,c){return a.blendFunc(b,c)},
ez:function(a,b,c,d){return a.bufferData(b,c,d)},
jG:function(a,b){return a.clear(b)},
jH:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jI:function(a,b){return a.clearDepth(b)},
jK:function(a,b){return a.compileShader(b)},
jR:function(a,b){return a.createShader(b)},
jT:function(a,b){return a.deleteProgram(b)},
jU:function(a,b){return a.deleteShader(b)},
jX:function(a,b){return a.depthFunc(b)},
jY:function(a,b){return a.disable(b)},
eE:function(a,b){return a.disableVertexAttribArray(b)},
jZ:function(a,b,c,d,e){return a.drawElements(b,c,H.a6(d),H.a6(e))},
cZ:function(a,b){return a.enable(b)},
eG:function(a,b){return a.enableVertexAttribArray(b)},
fA:function(a,b,c){return a.getActiveAttrib(b,c)},
fB:function(a,b,c){return a.getActiveUniform(b,c)},
fC:function(a,b,c){return a.getAttribLocation(b,c)},
dD:function(a,b){return a.getParameter(b)},
fF:function(a,b){return a.getProgramInfoLog(b)},
ce:function(a,b,c){return a.getProgramParameter(b,c)},
fH:function(a,b){return a.getShaderInfoLog(b)},
fI:function(a,b,c){return a.getShaderParameter(b,c)},
fJ:function(a,b,c){return a.getUniformLocation(b,c)},
ko:function(a,b){return a.linkProgram(b)},
kF:function(a,b,c){return a.pixelStorei(b,c)},
fP:function(a,b,c){return a.shaderSource(b,c)},
kV:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.O(g)
if(!!z.$isc2)y=!0
else y=!1
if(y){this.iX(a,b,c,d,e,f,P.mZ(g))
return}if(!!z.$iseD)z=!0
else z=!1
if(z){this.iY(a,b,c,d,e,f,g)
return}throw H.d(P.bZ("Incorrect number or type of arguments"))},
kU:function(a,b,c,d,e,f,g){return this.kV(a,b,c,d,e,f,g,null,null,null)},
iX:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
iY:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ca:function(a,b,c,d){return a.texParameteri(b,c,d)},
N:function(a,b,c){return a.uniform1f(b,c)},
S:function(a,b,c){return a.uniform1i(b,c)},
B:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fs:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ft:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dt:function(a,b){return a.useProgram(b)},
l0:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
l1:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isdp:1,
"%":"WebGLRenderingContext"},k8:{"^":"I;",$isk8:1,"%":"WebGLShader"},kt:{"^":"I;",$iskt:1,"%":"WebGLTexture"},kN:{"^":"I;",$iskN:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",X:{"^":"a;0a,0b,0c,0d,$ti",
shO:function(a){this.a=H.k(a,"$isb",[H.a5(this,"X",0)],"$asb")},
sed:function(a){this.b=H.l(a,{func:1,ret:P.N,args:[[P.o,H.a5(this,"X",0)]]})},
se9:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.n,[P.o,H.a5(this,"X",0)]]})},
see:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.n,[P.o,H.a5(this,"X",0)]]})},
bF:function(a){this.shO(H.c([],[a]))
this.sed(null)
this.se9(null)
this.see(null)},
dG:function(a,b,c){var z=H.a5(this,"X",0)
H.l(b,{func:1,ret:P.N,args:[[P.o,z]]})
z={func:1,ret:-1,args:[P.n,[P.o,z]]}
H.l(a,z)
H.l(c,z)
this.sed(b)
this.se9(a)
this.see(c)},
be:function(a,b){return this.dG(a,null,b)},
ec:function(a){var z
H.k(a,"$iso",[H.a5(this,"X",0)],"$aso")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dM:function(a,b){var z
H.k(b,"$iso",[H.a5(this,"X",0)],"$aso")
z=this.c
if(z!=null)z.$2(a,b)},
gn:function(a){return this.a.length},
gT:function(a){var z=this.a
return new J.aw(z,z.length,0,[H.u(z,0)])},
af:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.a5(this,"X",0)
H.y(b,z)
z=[z]
if(this.ec(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dM(x,H.c([b],z))}},
ad:function(a,b){var z,y
H.k(b,"$iso",[H.a5(this,"X",0)],"$aso")
if(this.ec(b)){z=this.a
y=z.length
C.a.ad(z,b)
this.dM(y,b)}},
$iso:1,
p:{
d8:function(a){var z=new O.X([a])
z.bF(a)
return z}}},dj:{"^":"a;0a,0b",
scs:function(a){this.a=H.k(a,"$isb",[V.aq],"$asb")},
gn:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
h0:function(a){var z=this.b
if(!(z==null))z.I(a)},
aR:function(){return this.h0(null)},
ga7:function(){var z=this.a
if(z.length>0)return C.a.gaE(z)
else return V.bd()},
c7:function(a){var z=this.a
if(a==null)C.a.h(z,V.bd())
else C.a.h(z,a)
this.aR()},
aN:function(){var z=this.a
if(z.length>0){z.pop()
this.aR()}}}}],["","",,E,{"^":"",d1:{"^":"a;"},ax:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0ar:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sh1:function(a,b){this.y=H.k(b,"$isX",[E.ax],"$asX")},
sar:function(a){this.z=H.e(a,"$isbD")},
sab:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gu().G(0,this.gfi())
y=this.c
if(y!=null)y.gu().h(0,this.gfi())
x=new D.H("shape",z,this.c,this,[F.f9])
x.b=!0
this.ba(x)}},
ax:function(a){var z
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.u(z,0)]);z.E();)z.d.ax(a)},
ah:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga7())
z.aR()
a.di(this.f)
z=a.dy
y=(z&&C.a).gaE(z)
if(y!=null&&this.d!=null)y.fl(a,this)
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.u(z,0)]);z.E();)z.d.ah(a)
a.dh()
a.dx.aN()},
gu:function(){var z=this.z
if(z==null){z=D.F()
this.z=z}return z},
ba:function(a){var z=this.z
if(!(z==null))z.I(a)},
X:function(){return this.ba(null)},
kw:[function(a){H.e(a,"$isx")
this.e=null
this.ba(a)},function(){return this.kw(null)},"lM","$1","$0","gfi",0,2,1],
ku:[function(a){this.ba(H.e(a,"$isx"))},function(){return this.ku(null)},"lK","$1","$0","gfh",0,2,1],
lJ:[function(a,b){var z,y,x,w,v,u,t
H.k(b,"$iso",[E.ax],"$aso")
for(z=b.length,y=this.gfh(),x={func:1,ret:-1,args:[D.x]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.gar()==null){t=new D.bD()
t.sak(null)
t.sbi(null)
t.c=null
t.d=0
u.sar(t)}t=u.gar()
t.toString
H.l(y,x)
if(t.a==null)t.sak(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.X()},"$2","gkt",8,0,7],
lL:[function(a,b){var z,y
H.k(b,"$iso",[E.ax],"$aso")
for(z=b.gT(b),y=this.gfh();z.E();)z.gL().gu().G(0,y)
this.X()},"$2","gkv",8,0,7],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaJ:1,
p:{
eA:function(a,b,c,d,e,f){var z=new E.ax()
z.a=d
z.b=!0
z.sh1(0,O.d8(E.ax))
z.y.be(z.gkt(),z.gkv())
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
z.sab(0,e)
return z}}},jZ:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
siW:function(a){this.dy=H.k(a,"$isb",[O.bK],"$asb")},
siR:function(a){this.fr=H.k(a,"$isK",[P.h,A.cD],"$asK")},
fY:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.ap(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dj()
y=[V.aq]
z.scs(H.c([],y))
z.b=null
z.gu().h(0,new E.k0(this))
this.cy=z
z=new O.dj()
z.scs(H.c([],y))
z.b=null
z.gu().h(0,new E.k1(this))
this.db=z
z=new O.dj()
z.scs(H.c([],y))
z.b=null
z.gu().h(0,new E.k2(this))
this.dx=z
this.siW(H.c([],[O.bK]))
z=this.dy;(z&&C.a).h(z,null)
this.siR(new H.b4(0,0,[P.h,A.cD]))},
gkH:function(){var z=this.z
if(z==null){z=this.cy.ga7().v(0,this.db.ga7())
this.z=z}return z},
di:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaE(z):a;(z&&C.a).h(z,y)},
dh:function(){var z=this.dy
if(z.length>1)z.pop()},
es:function(a){var z=a.b
if(z.length===0)throw H.d(P.r("May not cache a shader with no name."))
if(this.fr.bO(z))throw H.d(P.r('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.t(0,z,a)},
p:{
k_:function(a,b){var z=new E.jZ(a,b)
z.fY(a,b)
return z}}},k0:{"^":"m:8;a",
$1:function(a){var z
H.e(a,"$isx")
z=this.a
z.z=null
z.ch=null}},k1:{"^":"m:8;a",
$1:function(a){var z
H.e(a,"$isx")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},k2:{"^":"m:8;a",
$1:function(a){var z
H.e(a,"$isx")
z=this.a
z.ch=null
z.cx=null}},kw:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0ar:x<,0y,0z,0Q,0ch,0cx,0cy",
sar:function(a){this.x=H.e(a,"$isbD")},
h3:[function(a){H.e(a,"$isx")
this.kO()},function(){return this.h3(null)},"h2","$1","$0","gdN",0,2,1],
gkg:function(){var z,y,x
z=Date.now()
y=C.h.aa(P.ew(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ap(z,!1)
return x/y},
eg:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.v()
if(typeof z!=="number")return H.B(z)
x=C.k.d5(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.v()
w=C.k.d5(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.fl(C.y,this.gkN())}},
kO:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.ky(this),{func:1,ret:-1,args:[P.am]})
C.P.hy(z)
C.P.iB(z,W.hq(y,P.am))}},"$0","gkN",0,0,3],
kL:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.eg()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ap(w,!1)
x.y=P.ew(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sn(w.a,0)
w.aR()
w=x.db
C.a.sn(w.a,0)
w.aR()
w=x.dx
C.a.sn(w.a,0)
w.aR()
w=x.dy;(w&&C.a).sn(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ah(this.e)}x=this.z
if(!(x==null))x.I(null)}catch(v){z=H.ac(v)
y=H.bw(v)
P.e6("Error: "+H.j(z))
P.e6("Stack: "+H.j(y))
throw H.d(z)}},
p:{
kx:function(a,b,c,d,e){var z,y,x,w
z=J.O(a)
if(!!z.$isd5)return E.fk(a,!0,!0,!0,!1)
y=W.d6(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcU(a).h(0,y)
w=E.fk(y,!0,!0,!0,!1)
w.a=a
return w},
fk:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kw()
y=P.j6(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.q.cd(a,"webgl",y)
x=H.e(x==null?C.q.cd(a,"experimental-webgl",y):x,"$isdp")
if(x==null)H.q(P.r("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.k_(x,a)
w=new T.ku(x)
w.b=H.a6((x&&C.b).dD(x,3379))
w.c=H.a6(C.b.dD(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.l_(a)
v=new X.iY()
v.c=new X.aI(!1,!1,!1)
v.siq(P.c9(null,null,null,P.n))
w.b=v
v=new X.js(w)
v.f=0
v.r=V.aL()
v.x=V.aL()
v.Q=1
v.ch=1
w.c=v
v=new X.jd(w)
v.r=0
v.x=V.aL()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kB(w)
v.e=0
v.f=V.aL()
v.r=V.aL()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.shz(H.c([],[[P.ds,P.a]]))
v=w.z
u=document
t=W.az
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.a3(u,"contextmenu",H.l(w.gi1(),s),!1,t))
v=w.z
r=W.ad
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a3(a,"focus",H.l(w.gi4(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a3(a,"blur",H.l(w.ghZ(),q),!1,r))
v=w.z
p=W.bF
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a3(u,"keyup",H.l(w.gi6(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a3(u,"keydown",H.l(w.gi5(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousedown",H.l(w.gi9(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mouseup",H.l(w.gib(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousemove",H.l(w.gia(),s),!1,t))
p=w.z
o=W.bO;(p&&C.a).h(p,W.a3(a,H.D(W.it(a)),H.l(w.gic(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a3(u,"mousemove",H.l(w.gi2(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a3(u,"mouseup",H.l(w.gi3(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a3(u,"pointerlockchange",H.l(w.gie(),q),!1,r))
r=w.z
q=W.bk
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a3(a,"touchstart",H.l(w.gio(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchend",H.l(w.gil(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchmove",H.l(w.gim(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ap(Date.now(),!1)
z.cy=0
z.eg()
return z}}},ky:{"^":"m:50;a",
$1:function(a){var z
H.nE(a)
z=this.a
if(z.ch){z.ch=!1
z.kL()}}}}],["","",,Z,{"^":"",fS:{"^":"a;a,b",$isnS:1,p:{
dM:function(a,b,c){var z
H.k(c,"$isb",[P.n],"$asb")
z=a.createBuffer()
C.b.aB(a,b,z)
C.b.ez(a,b,new Int16Array(H.bp(c)),35044)
C.b.aB(a,b,null)
return new Z.fS(b,z)}}},ei:{"^":"d1;a,b,c,d,e",
a6:function(a){var z,y,x
try{y=a.a
C.b.eG(y,this.e)
C.b.l0(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.ac(x)
y=P.r('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(z))
throw H.d(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},fT:{"^":"a;a",$isnT:1},d4:{"^":"a;a,0b,c,d",
shJ:function(a){this.b=H.k(a,"$isb",[Z.c3],"$asb")},
aM:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a6:function(a){var z,y
z=this.a
C.b.aB(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a6(a)},
aP:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.eE(x,z[y].e)
C.b.aB(x,this.a.a,null)},
ah:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
w=v.c
u=w.a
C.b.aB(y,u,w.b)
C.b.jZ(y,v.a,v.b,5123,0)
C.b.aB(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.h]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ah(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(y,", ")+"\nAttrs:   "+C.a.l(u,", ")},
$isoa:1},c3:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bg(this.c)+"'")+"]"}},bm:{"^":"a;a",
gdI:function(a){var z,y
z=this.a
y=(z&$.$get$aD().a)!==0?3:0
if((z&$.$get$aW().a)!==0)y+=3
if((z&$.$get$aV().a)!==0)y+=3
if((z&$.$get$aX().a)!==0)y+=2
if((z&$.$get$aY().a)!==0)y+=3
if((z&$.$get$bM().a)!==0)y+=3
if((z&$.$get$bN().a)!==0)y+=4
if((z&$.$get$bn().a)!==0)++y
return(z&$.$get$aU().a)!==0?y+4:y},
jA:function(a){var z,y,x
z=$.$get$aD()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bn()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aU()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fR()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bm))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$aD().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aW().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aV().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aX().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aY().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bM().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bN().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bn().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aU().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.l(z,"|")},
p:{
as:function(a){return new Z.bm(a)}}}}],["","",,D,{"^":"",el:{"^":"a;"},bD:{"^":"a;0a,0b,0c,0d",
sak:function(a){this.a=H.k(a,"$isb",[{func:1,ret:-1,args:[D.x]}],"$asb")},
sbi:function(a){this.b=H.k(a,"$isb",[{func:1,ret:-1,args:[D.x]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.x]}
H.l(b,z)
if(this.a==null)this.sak(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
G:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.x]})
z=this.a
z=z==null?null:C.a.Z(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).G(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.Z(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).G(z,b)||y}return y},
I:function(a){var z,y,x,w
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
return!0}if(!x)C.a.a2(y,new D.ix(z))
y=this.b
if(!(y==null))C.a.a2(y,new D.iy(z))
z=this.b
if(!(z==null))C.a.sn(z,0)
return!0},
k0:function(){return this.I(null)},
kP:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.I(y)}}},
aF:function(){return this.kP(!0,!1)},
p:{
F:function(){var z=new D.bD()
z.sak(null)
z.sbi(null)
z.c=null
z.d=0
return z}}},ix:{"^":"m:22;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.x]})
z=this.a.a
z.b
a.$1(z)}},iy:{"^":"m:22;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.x]})
z=this.a.a
z.b
a.$1(z)}},x:{"^":"a;a,0b"},c4:{"^":"x;c,d,a,0b,$ti"},c5:{"^":"x;c,d,a,0b,$ti"},H:{"^":"x;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",ej:{"^":"a;a,b",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ej))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},eJ:{"^":"a;a,b",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eJ))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},iY:{"^":"a;0a,0b,0c,0d",
siq:function(a){this.d=H.k(a,"$isf8",[P.n],"$asf8")},
kC:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ky:function(a){this.c=a.b
this.d.G(0,a.a)
return!1}},eN:{"^":"cB;x,y,c,d,e,a,0b"},jd:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
bh:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ap(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.v()
v=b.b
u=this.ch
if(typeof v!=="number")return v.v()
t=y.F(0,new V.Z(x*w,v*u))
u=this.a.gb2()
s=new X.bH(a,V.aL(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
dg:function(a,b){this.r=a.a
return!1},
bs:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.fK()
if(typeof z!=="number")return z.cc()
this.r=(z&~y)>>>0
return!1},
br:function(a,b){var z=this.d
if(z==null)return!1
z.I(this.bh(a,b))
return!0},
kD:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gb2()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.v()
t=a.b
s=this.cy
if(typeof t!=="number")return t.v()
w=new X.dk(new V.W(v*u,t*s),y,x,new P.ap(w,!1),this)
w.b=!0
z.I(w)
return!0},
i8:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ap(Date.now(),!1)
y=this.f
x=new X.eN(c,a,this.a.gb2(),b,z,this)
x.b=!0
y.I(x)
this.y=z
this.x=V.aL()}},aI:{"^":"a;a,b,c",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aI))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bH:{"^":"cB;x,y,z,Q,ch,c,d,e,a,0b"},js:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
co:function(a,b,c){var z,y,x
z=new P.ap(Date.now(),!1)
y=this.a.gb2()
x=new X.bH(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
dg:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.I(this.co(a,b,!0))
return!0},
bs:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.fK()
if(typeof z!=="number")return z.cc()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.I(this.co(a,b,!0))
return!0},
br:function(a,b){var z=this.d
if(z==null)return!1
z.I(this.co(a,b,!1))
return!0},
kE:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gb2()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.v()
u=a.b
t=this.ch
if(typeof u!=="number")return u.v()
x=new X.dk(new V.W(w*v,u*t),y,b,new P.ap(x,!1),this)
x.b=!0
z.I(x)
return!0},
geF:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
gcb:function(){var z=this.c
if(z==null){z=D.F()
this.c=z}return z},
gfg:function(){var z=this.d
if(z==null){z=D.F()
this.d=z}return z}},dk:{"^":"cB;x,c,d,e,a,0b"},cB:{"^":"x;"},fo:{"^":"cB;x,y,z,Q,ch,c,d,e,a,0b"},kB:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
bh:function(a,b){var z,y,x,w
H.k(a,"$isb",[V.Z],"$asb")
z=new P.ap(Date.now(),!1)
y=a.length>0?a[0]:V.aL()
x=this.a.gb2()
w=new X.fo(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
kB:function(a){var z
H.k(a,"$isb",[V.Z],"$asb")
z=this.b
if(z==null)return!1
z.I(this.bh(a,!0))
return!0},
kz:function(a){var z
H.k(a,"$isb",[V.Z],"$asb")
z=this.c
if(z==null)return!1
z.I(this.bh(a,!0))
return!0},
kA:function(a){var z
H.k(a,"$isb",[V.Z],"$asb")
z=this.d
if(z==null)return!1
z.I(this.bh(a,!1))
return!0}},l_:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
shz:function(a){this.z=H.k(a,"$isb",[[P.ds,P.a]],"$asb")},
gb2:function(){var z=this.a
return V.f5(0,0,C.q.geB(z).c,C.q.geB(z).d)},
dZ:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eJ(z,new X.aI(y,a.altKey,a.shiftKey))},
b_:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aI(y,a.altKey,a.shiftKey)},
cI:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aI(y,a.altKey,a.shiftKey)},
aI:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.M()
v=z.top
if(typeof x!=="number")return x.M()
return new V.Z(y-w,x-v)},
bj:function(a){return new V.W(a.movementX,a.movementY)},
cC:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.Z])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
t=C.k.av(u.pageX)
C.k.av(u.pageY)
s=z.left
C.k.av(u.pageX)
C.a.h(y,new V.Z(t-s,C.k.av(u.pageY)-z.top))}return y},
aG:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ej(z,new X.aI(y,a.altKey,a.shiftKey))},
ct:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.M()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.M()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
lj:[function(a){this.f=!0},"$1","gi4",4,0,11],
ld:[function(a){this.f=!1},"$1","ghZ",4,0,11],
lg:[function(a){H.e(a,"$isaz")
if(this.f&&this.ct(a))a.preventDefault()},"$1","gi1",4,0,4],
ll:[function(a){var z
H.e(a,"$isbF")
if(!this.f)return
z=this.dZ(a)
this.b.kC(z)},"$1","gi6",4,0,23],
lk:[function(a){var z
H.e(a,"$isbF")
if(!this.f)return
z=this.dZ(a)
this.b.ky(z)},"$1","gi5",4,0,23],
ln:[function(a){var z,y,x,w
H.e(a,"$isaz")
z=this.a
z.focus()
this.f=!0
this.b_(a)
if(this.x){y=this.aG(a)
x=this.bj(a)
if(this.d.dg(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aG(a)
w=this.aI(a)
if(this.c.dg(y,w))a.preventDefault()},"$1","gi9",4,0,4],
lp:[function(a){var z,y,x
H.e(a,"$isaz")
this.b_(a)
z=this.aG(a)
if(this.x){y=this.bj(a)
if(this.d.bs(z,y))a.preventDefault()
return}if(this.r)return
x=this.aI(a)
if(this.c.bs(z,x))a.preventDefault()},"$1","gib",4,0,4],
li:[function(a){var z,y,x
H.e(a,"$isaz")
if(!this.ct(a)){this.b_(a)
z=this.aG(a)
if(this.x){y=this.bj(a)
if(this.d.bs(z,y))a.preventDefault()
return}if(this.r)return
x=this.aI(a)
if(this.c.bs(z,x))a.preventDefault()}},"$1","gi3",4,0,4],
lo:[function(a){var z,y,x
H.e(a,"$isaz")
this.b_(a)
z=this.aG(a)
if(this.x){y=this.bj(a)
if(this.d.br(z,y))a.preventDefault()
return}if(this.r)return
x=this.aI(a)
if(this.c.br(z,x))a.preventDefault()},"$1","gia",4,0,4],
lh:[function(a){var z,y,x
H.e(a,"$isaz")
if(!this.ct(a)){this.b_(a)
z=this.aG(a)
if(this.x){y=this.bj(a)
if(this.d.br(z,y))a.preventDefault()
return}if(this.r)return
x=this.aI(a)
if(this.c.br(z,x))a.preventDefault()}},"$1","gi2",4,0,4],
lq:[function(a){var z,y
H.e(a,"$isbO")
this.b_(a)
z=new V.W((a&&C.O).gjV(a),C.O.gjW(a)).q(0,180)
if(this.x){if(this.d.kD(z))a.preventDefault()
return}if(this.r)return
y=this.aI(a)
if(this.c.kE(z,y))a.preventDefault()},"$1","gic",4,0,47],
lr:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aG(this.y)
x=this.aI(this.y)
this.d.i8(y,x,z)}},"$1","gie",4,0,11],
lz:[function(a){var z
H.e(a,"$isbk")
this.a.focus()
this.f=!0
this.cI(a)
z=this.cC(a)
if(this.e.kB(z))a.preventDefault()},"$1","gio",4,0,12],
lx:[function(a){var z
H.e(a,"$isbk")
this.cI(a)
z=this.cC(a)
if(this.e.kz(z))a.preventDefault()},"$1","gil",4,0,12],
ly:[function(a){var z
H.e(a,"$isbk")
this.cI(a)
z=this.cC(a)
if(this.e.kA(z))a.preventDefault()},"$1","gim",4,0,12]}}],["","",,D,{"^":"",cs:{"^":"a;0a,0b,0c,0d",
gu:function(){var z=this.d
if(z==null){z=D.F()
this.d=z}return z},
aS:[function(a){var z
H.e(a,"$isx")
z=this.d
if(!(z==null))z.I(a)},function(){return this.aS(null)},"l3","$1","$0","gh6",0,2,1],
$isa9:1,
$isaJ:1},a9:{"^":"a;",$isaJ:1},j_:{"^":"X;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
shx:function(a){this.e=H.k(a,"$isb",[D.cs],"$asb")},
sip:function(a){this.f=H.k(a,"$isb",[D.f0],"$asb")},
siT:function(a){this.r=H.k(a,"$isb",[D.fb],"$asb")},
sj3:function(a){this.x=H.k(a,"$isb",[D.fh],"$asb")},
sj4:function(a){this.y=H.k(a,"$isb",[D.fi],"$asb")},
sj5:function(a){this.z=H.k(a,"$isb",[D.fj],"$asb")},
gu:function(){var z=this.Q
if(z==null){z=D.F()
this.Q=z}return z},
aS:function(a){var z=this.Q
if(!(z==null))z.I(a)},
i7:[function(a){var z
H.e(a,"$isx")
z=this.ch
if(!(z==null))z.I(a)},function(){return this.i7(null)},"lm","$1","$0","geb",0,2,1],
ls:[function(a){var z,y,x
H.k(a,"$iso",[D.a9],"$aso")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.A)(a),++y){x=a[y]
if(x==null||this.h5(x))return!1}return!0},"$1","gig",4,0,39],
la:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a9
H.k(b,"$iso",[z],"$aso")
for(y=b.length,x=this.geb(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=H.e(b[u],"$isa9")
if(t instanceof D.cs)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bD()
s.sak(null)
s.sbi(null)
s.c=null
s.d=0
t.d=s}H.l(x,w)
if(s.a==null)s.sak(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.c4(a,b,this,[z])
z.b=!0
this.aS(z)},"$2","ghW",8,0,25],
lu:[function(a,b){var z,y,x,w
z=D.a9
H.k(b,"$iso",[z],"$aso")
for(y=b.gT(b),x=this.geb();y.E();){w=y.gL()
C.a.G(this.e,w)
w.gu().G(0,x)}z=new D.c5(a,b,this,[z])
z.b=!0
this.aS(z)},"$2","gii",8,0,25],
h5:function(a){var z=C.a.Z(this.e,a)
return z},
$aso:function(){return[D.a9]},
$asX:function(){return[D.a9]}},f0:{"^":"a;",$isa9:1,$isaJ:1},fb:{"^":"a;",$isa9:1,$isaJ:1},fh:{"^":"a;",$isa9:1,$isaJ:1},fi:{"^":"a;",$isa9:1,$isaJ:1},fj:{"^":"a;",$isa9:1,$isaJ:1}}],["","",,V,{"^":"",
nV:[function(a,b){if(typeof b!=="number")return b.M()
if(typeof a!=="number")return H.B(a)
return Math.abs(b-a)<=1e-9},"$2","jq",8,0,37],
nQ:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.k.bD(a-b,z)
return(a<0?a+z:a)+b},
L:function(a,b,c){if(a==null)return C.c.ao("null",c)
return C.c.ao(C.k.fp($.p.$2(a,0)?0:a,b),c+b+1)},
bu:function(a,b,c){var z,y,x,w,v,u
H.k(a,"$isb",[P.t],"$asb")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.A)(a),++w){v=V.L(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.t(z,u,C.c.ao(z[u],x))}return z},
e5:function(a,b){return C.k.kX(Math.pow(b,C.a_.d5(Math.log(H.mW(a))/Math.log(b))))},
a7:{"^":"a;a,b,c",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
ao:{"^":"a;a,b,c,d",
dr:function(a){return H.c([this.a,this.b,this.c,this.d],[P.t])},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ao))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}},
eR:{"^":"a;a,b,c,d,e,f,r,x,y",
ai:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eR))return!1
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
z=[P.t]
y=V.bu(H.c([this.a,this.d,this.r],z),3,0)
x=V.bu(H.c([this.b,this.e,this.x],z),3,0)
w=V.bu(H.c([this.c,this.f,this.y],z),3,0)
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
aq:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ai:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
d9:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.p.$2(a2,0))return V.bd()
a3=1/a2
a4=-w
a5=-i
return V.aH((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
v:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isaq")
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
return V.aH(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
ds:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.z(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
bA:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.Q(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aq))return!1
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
i:function(a){return this.P()},
f2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.bu(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bu(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bu(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bu(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
P:function(){return this.f2("",3,0)},
J:function(a){return this.f2(a,3,0)},
p:{
bd:function(){var z=$.eT
if(z==null){z=V.aH(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eT=z}return z},
aH:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eS:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.q(0,Math.sqrt(c.C(c)))
y=b.aL(z)
x=y.q(0,Math.sqrt(y.C(y)))
w=z.aL(x)
v=new V.z(a.a,a.b,a.c)
u=x.V(0).C(v)
t=w.V(0).C(v)
s=z.V(0).C(v)
return V.aH(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
Z:{"^":"a;a,b",
F:function(a,b){return new V.Z(this.a+b.a,this.b+b.b)},
M:function(a,b){return new V.Z(this.a-b.a,this.b-b.b)},
q:function(a,b){if($.p.$2(b,0))return V.aL()
return new V.Z(this.a/b,this.b/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"},
p:{
aL:function(){var z=$.f1
if(z==null){z=new V.Z(0,0)
$.f1=z}return z}}},
Q:{"^":"a;a,b,c",
F:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.Q(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){return new V.Q(this.a*b,this.b*b,this.c*b)},
q:function(a,b){if($.p.$2(b,0))return V.dn()
return new V.Q(this.a/b,this.b/b,this.c/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"},
p:{
dn:function(){var z=$.bI
if(z==null){z=new V.Q(0,0,0)
$.bI=z}return z}}},
aR:{"^":"a;a,b,c,d",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aR))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}},
f4:{"^":"a;a,b,c,d",
gag:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f4))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"},
p:{
f5:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f4(a,b,c,d)}}},
W:{"^":"a;a,b",
fc:[function(a){return Math.sqrt(this.C(this))},"$0","gn",1,0,13],
C:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.v()
if(typeof y!=="number")return H.B(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.v()
if(typeof w!=="number")return H.B(w)
return z*y+x*w},
v:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.W(z*b,y*b)},
q:function(a,b){var z,y
if($.p.$2(b,0)){z=$.fG
if(z==null){z=new V.W(0,0)
$.fG=z}return z}z=this.a
if(typeof z!=="number")return z.q()
y=this.b
if(typeof y!=="number")return y.q()
return new V.W(z/b,y/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
z:{"^":"a;a,b,c",
fc:[function(a){return Math.sqrt(this.C(this))},"$0","gn",1,0,13],
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
da:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.z(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aL:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.z(z*y-x*w,x*v-u*y,u*w-z*v)},
F:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
V:function(a){return new V.z(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.z(this.a*b,this.b*b,this.c*b)},
q:function(a,b){if($.p.$2(b,0))return V.bL()
return new V.z(this.a/b,this.b/b,this.c/b)},
fb:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.z))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"},
p:{
bL:function(){var z=$.fK
if(z==null){z=new V.z(0,0,0)
$.fK=z}return z},
fL:function(){var z=$.fJ
if(z==null){z=new V.z(0,1,0)
$.fJ=z}return z},
fM:function(){var z=$.cJ
if(z==null){z=new V.z(0,0,1)
$.cJ=z}return z}}},
cf:{"^":"a;a,b,c,d",
fc:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gn",1,0,13],
q:function(a,b){var z
if($.p.$2(b,0)){z=$.fN
if(z==null){z=new V.cf(0,0,0,0)
$.fN=z}return z}return new V.cf(this.a/b,this.b/b,this.c/b,this.d/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cf))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}}}],["","",,U,{"^":"",i7:{"^":"el;0a,0b,0c,0d,0e,0f,0r,0x,0y",
ck:function(a){var z=V.nQ(a,this.c,this.b)
return z},
gu:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
W:function(a){var z=this.y
if(!(z==null))z.I(a)},
sdw:function(a,b){},
sdc:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.ck(z)}z=new D.H("maximumLocation",y,this.b,this,[P.t])
z.b=!0
this.W(z)}},
sde:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.ck(z)}z=new D.H("minimumLocation",y,this.c,this,[P.t])
z.b=!0
this.W(z)}},
sa3:function(a,b){var z,y
b=this.ck(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.H("location",y,b,this,[P.t])
z.b=!0
this.W(z)}},
sdd:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.H("maximumVelocity",y,a,this,[P.t])
z.b=!0
this.W(z)}},
sY:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.H("velocity",x,a,this,[P.t])
z.b=!0
this.W(z)}},
scX:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.H("dampening",y,a,this,[P.t])
z.b=!0
this.W(z)}},
ax:function(a){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa3(0,this.d+y*a)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sY(y)}},
p:{
d9:function(){var z=new U.i7()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},en:{"^":"ai;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
bc:function(a,b){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.en))return!1
return J.E(this.a,b.a)},
i:function(a){return"Constant: "+this.a.J("          ")},
p:{
eo:function(a){var z=new U.en()
z.a=a
return z}}},eC:{"^":"X;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
W:[function(a){var z
H.e(a,"$isx")
z=this.e
if(!(z==null))z.I(a)},function(){return this.W(null)},"aq","$1","$0","gaT",0,2,1],
l9:[function(a,b){var z,y,x,w,v,u,t,s
z=U.ai
H.k(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gaT(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){s=t.gu()
s.toString
H.l(x,w)
if(s.a==null)s.sak(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c4(a,b,this,[z])
z.b=!0
this.W(z)},"$2","ghV",8,0,27],
lt:[function(a,b){var z,y,x
z=U.ai
H.k(b,"$iso",[z],"$aso")
for(y=b.gT(b),x=this.gaT();y.E();)y.gL().gu().G(0,x)
z=new D.c5(a,b,this,[z])
z.b=!0
this.W(z)},"$2","gih",8,0,27],
bc:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.U()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aw(z,z.length,0,[H.u(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.bc(a,b)
if(w!=null)x=x==null?w:w.v(0,x)}}this.f=x==null?V.bd():x
z=this.e
if(!(z==null))z.aF()}return this.f},
A:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eC))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.E(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$aso:function(){return[U.ai]},
$asX:function(){return[U.ai]},
$isai:1},ai:{"^":"el;"},l0:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.cy
if(z==null){z=D.F()
this.cy=z}return z},
W:[function(a){var z
H.e(a,"$isx")
z=this.cy
if(!(z==null))z.I(a)},function(){return this.W(null)},"aq","$1","$0","gaT",0,2,1],
bl:function(a){if(this.a!=null)return!1
this.a=a
a.c.geF().h(0,this.gcu())
this.a.c.gfg().h(0,this.gcv())
this.a.c.gcb().h(0,this.gcw())
return!0},
hR:[function(a){H.e(a,"$isx")
if(!J.E(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gcu",4,0,2],
hS:[function(a){var z,y,x,w,v,u,t
a=H.i(H.e(a,"$isx"),"$isbH")
if(!this.y)return
if(this.x){z=a.d.M(0,a.y)
z=new V.W(z.a,z.b)
z=z.C(z)
y=this.r
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.M(0,a.y)
z=new V.W(y.a,y.b).v(0,2).q(0,z.gag())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.v()
x=this.e
if(typeof x!=="number")return H.B(x)
y.sY(z*10*x)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=new V.W(x.a,x.b).v(0,2).q(0,z.gag())
x=this.b
v=w.a
if(typeof v!=="number")return v.V()
u=this.e
if(typeof u!=="number")return H.B(u)
t=this.z
if(typeof t!=="number")return H.B(t)
x.sa3(0,-v*u+t)
this.b.sY(0)
y=y.M(0,a.z)
this.Q=new V.W(y.a,y.b).v(0,2).q(0,z.gag())}this.aq()},"$1","gcv",4,0,2],
hT:[function(a){var z,y,x
H.e(a,"$isx")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.C(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.v()
x=this.e
if(typeof x!=="number")return H.B(x)
z.sY(y*10*x)
this.aq()}},"$1","gcw",4,0,2],
bc:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.U()
if(z<y){this.ch=y
x=a.y
this.b.ax(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aH(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isai:1},l1:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.F()
this.fx=z}return z},
W:[function(a){var z
H.e(a,"$isx")
z=this.fx
if(!(z==null))z.I(a)},function(){return this.W(null)},"aq","$1","$0","gaT",0,2,1],
bl:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.geF().h(0,this.gcu())
this.a.c.gfg().h(0,this.gcv())
this.a.c.gcb().h(0,this.gcw())
z=this.a.d
y=z.f
if(y==null){y=D.F()
z.f=y
z=y}else z=y
z.h(0,this.ghP())
z=this.a.d
y=z.d
if(y==null){y=D.F()
z.d=y
z=y}else z=y
z.h(0,this.ghQ())
z=this.a.e
y=z.b
if(y==null){y=D.F()
z.b=y
z=y}else z=y
z.h(0,this.gj1())
z=this.a.e
y=z.d
if(y==null){y=D.F()
z.d=y
z=y}else z=y
z.h(0,this.gj0())
z=this.a.e
y=z.c
if(y==null){y=D.F()
z.c=y
z=y}else z=y
z.h(0,this.gj_())
return!0},
az:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.V()
z=-z}if(this.r){if(typeof y!=="number")return y.V()
y=-y}return new V.W(z,y)},
hR:[function(a){a=H.i(H.e(a,"$isx"),"$isbH")
if(!J.E(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gcu",4,0,2],
hS:[function(a){var z,y,x,w,v,u,t
a=H.i(H.e(a,"$isx"),"$isbH")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.W(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.az(new V.W(y.a,y.b).v(0,2).q(0,z.gag()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.V()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.V()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.az(new V.W(x.a,x.b).v(0,2).q(0,z.gag()))
x=this.c
v=w.a
if(typeof v!=="number")return v.V()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.V()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa3(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.M(0,a.z)
this.dx=this.az(new V.W(y.a,y.b).v(0,2).q(0,z.gag()))}this.aq()},"$1","gcv",4,0,2],
hT:[function(a){var z,y,x
H.e(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.V()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.V()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sY(-y*10*z)
this.aq()}},"$1","gcw",4,0,2],
l6:[function(a){if(H.i(H.e(a,"$isx"),"$iseN").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ghP",4,0,2],
l7:[function(a){var z,y,x,w,v,u,t
a=H.i(H.e(a,"$isx"),"$isbH")
if(!J.E(this.d,a.x.b))return
z=a.c
y=a.d
x=y.M(0,a.y)
w=this.az(new V.W(x.a,x.b).v(0,2).q(0,z.gag()))
x=this.c
v=w.a
if(typeof v!=="number")return v.V()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.V()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa3(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.M(0,a.z)
this.dx=this.az(new V.W(y.a,y.b).v(0,2).q(0,z.gag()))
this.aq()},"$1","ghQ",4,0,2],
lD:[function(a){H.e(a,"$isx")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gj1",4,0,2],
lC:[function(a){var z,y,x,w,v,u,t
a=H.i(H.e(a,"$isx"),"$isfo")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.W(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.az(new V.W(y.a,y.b).v(0,2).q(0,z.gag()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.V()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.V()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.az(new V.W(x.a,x.b).v(0,2).q(0,z.gag()))
x=this.c
v=w.a
if(typeof v!=="number")return v.V()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.V()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa3(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.M(0,a.z)
this.dx=this.az(new V.W(y.a,y.b).v(0,2).q(0,z.gag()))}this.aq()},"$1","gj0",4,0,2],
lB:[function(a){var z,y,x
H.e(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.V()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.V()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sY(-y*10*z)
this.aq()}},"$1","gj_",4,0,2],
bc:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.U()
if(z<y){this.dy=y
x=a.y
this.c.ax(x)
this.b.ax(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aH(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.v(0,V.aH(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isai:1},l2:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.F()
this.r=z}return z},
W:function(a){var z=this.r
if(!(z==null))z.I(a)},
bl:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.F()
z.e=y
z=y}else z=y
y=this.ghU()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.F()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
l8:[function(a){var z,y,x,w
H.e(a,"$isx")
if(!J.E(this.b,this.a.b.c))return
H.i(a,"$isdk")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.v()
w=z+y*x
if(z!==w){this.d=w
z=new D.H("zoom",z,w,this,[P.t])
z.b=!0
this.W(z)}},"$1","ghU",4,0,2],
bc:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aH(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isai:1}}],["","",,M,{"^":"",i8:{"^":"X;0e,0f,0a,0b,0c,0d",
gu:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
a8:[function(a){var z
H.e(a,"$isx")
z=this.f
if(!(z==null))z.I(a)},function(){return this.a8(null)},"dO","$1","$0","ga4",0,2,1],
lv:[function(a,b){var z,y,x,w,v,u,t,s
z=M.aM
H.k(b,"$iso",[z],"$aso")
for(y=b.length,x=this.ga4(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){s=t.gu()
s.toString
H.l(x,w)
if(s.a==null)s.sak(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c4(a,b,this,[z])
z.b=!0
this.a8(z)},"$2","gij",8,0,28],
lw:[function(a,b){var z,y,x
z=M.aM
H.k(b,"$iso",[z],"$aso")
for(y=b.gT(b),x=this.ga4();y.E();)y.gL().gu().G(0,x)
z=new D.c5(a,b,this,[z])
z.b=!0
this.a8(z)},"$2","gik",8,0,28],
ah:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.aw(z,z.length,0,[H.u(z,0)]);z.E();){y=z.d
if(!(y==null))y.ah(a)}this.e=!1},
$aso:function(){return[M.aM]},
$asX:function(){return[M.aM]},
$isaM:1},id:{"^":"a;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
a8:[function(a){var z
H.e(a,"$isx")
z=this.f
if(!(z==null))z.I(a)},function(){return this.a8(null)},"dO","$1","$0","ga4",0,2,1],
sbm:function(a){var z,y
if(a==null)a=new X.iO()
z=this.a
if(z!==a){if(z!=null)z.gu().G(0,this.ga4())
y=this.a
this.a=a
a.gu().h(0,this.ga4())
z=new D.H("camera",y,this.a,this,[X.cq])
z.b=!0
this.a8(z)}},
sbv:function(a,b){var z,y
if(b==null)b=X.db(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gu().G(0,this.ga4())
y=this.b
this.b=b
b.gu().h(0,this.ga4())
z=new D.H("target",y,this.b,this,[X.du])
z.b=!0
this.a8(z)}},
sbw:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gu().G(0,this.ga4())
y=this.c
this.c=a
if(a!=null)a.gu().h(0,this.ga4())
z=new D.H("technique",y,this.c,this,[O.bK])
z.b=!0
this.a8(z)}},
ah:function(a){a.di(this.c)
this.b.a6(a)
this.a.a6(a)
this.d.ax(a)
this.d.ah(a)
this.a.aP(a)
this.b.toString
a.dh()},
$isaM:1},iv:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
shr:function(a,b){this.d=H.k(b,"$isX",[E.ax],"$asX")},
a8:[function(a){var z
H.e(a,"$isx")
z=this.x
if(!(z==null))z.I(a)},function(){return this.a8(null)},"dO","$1","$0","ga4",0,2,1],
le:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ax
H.k(b,"$iso",[z],"$aso")
for(y=b.length,x=this.ga4(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.gar()==null){s=new D.bD()
s.sak(null)
s.sbi(null)
s.c=null
s.d=0
t.sar(s)}s=t.gar()
s.toString
H.l(x,w)
if(s.a==null)s.sak(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c4(a,b,this,[z])
z.b=!0
this.a8(z)},"$2","gi_",8,0,7],
lf:[function(a,b){var z,y,x
z=E.ax
H.k(b,"$iso",[z],"$aso")
for(y=b.gT(b),x=this.ga4();y.E();)y.gL().gu().G(0,x)
z=new D.c5(a,b,this,[z])
z.b=!0
this.a8(z)},"$2","gi0",8,0,7],
sbm:function(a){var z,y
if(a==null)a=X.eZ(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gu().G(0,this.ga4())
y=this.a
this.a=a
a.gu().h(0,this.ga4())
z=new D.H("camera",y,this.a,this,[X.cq])
z.b=!0
this.a8(z)}},
sbv:function(a,b){var z,y
if(b==null)b=X.db(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gu().G(0,this.ga4())
y=this.b
this.b=b
b.gu().h(0,this.ga4())
z=new D.H("target",y,this.b,this,[X.du])
z.b=!0
this.a8(z)}},
sbw:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gu().G(0,this.ga4())
y=this.c
this.c=a
if(a!=null)a.gu().h(0,this.ga4())
z=new D.H("technique",y,this.c,this,[O.bK])
z.b=!0
this.a8(z)}},
gu:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
ah:function(a){var z
a.di(this.c)
this.b.a6(a)
this.a.a6(a)
z=this.c
if(z!=null)z.ax(a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.u(z,0)]);z.E();)z.d.ax(a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.u(z,0)]);z.E();)z.d.ah(a)
this.a.toString
a.cy.aN()
a.db.aN()
this.b.toString
a.dh()},
$isaM:1},aM:{"^":"a;"}}],["","",,A,{"^":"",ed:{"^":"a;a,b,c"},hY:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
k5:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
C.b.eG(w.a,w.c)}},
eD:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
C.b.eE(w.a,w.c)}}},eQ:{"^":"cD;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aC,0au,0bQ,0eH,0bR,0bS,0eI,0eJ,0bT,0bU,0eK,0eL,0bV,0bW,0eM,0eN,0bX,0eO,0eP,0bY,0eQ,0eR,0bZ,0c_,0c0,0eS,0eT,0c1,0c2,0eU,0eV,0c3,0eW,0d_,0eX,0d0,0eY,0d1,0eZ,0d2,0f_,0d3,0f0,0d4,a,b,0c,0d,0e,0f,0r,0x,0y",
shm:function(a){this.r1=H.k(a,"$isb",[A.aC],"$asb")},
sh7:function(a){this.d_=H.k(a,"$isb",[A.dB],"$asb")},
sh8:function(a){this.d0=H.k(a,"$isb",[A.dD],"$asb")},
sh9:function(a){this.d1=H.k(a,"$isb",[A.dE],"$asb")},
sha:function(a){this.d2=H.k(a,"$isb",[A.dF],"$asb")},
shb:function(a){this.d3=H.k(a,"$isb",[A.dG],"$asb")},
shc:function(a){this.d4=H.k(a,"$isb",[A.dH],"$asb")},
fX:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.ak("")
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
a1.j9(z)
a1.jg(z)
a1.ja(z)
a1.jo(z)
a1.jp(z)
a1.ji(z)
a1.jt(z)
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
z=new P.ak("")
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
v.jd(z)
v.j8(z)
v.jb(z)
v.je(z)
v.jm(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.jk(z)
v.jl(z)}v.jh(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
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
p=H.c([],[P.h])
if(v.b!==C.d)C.a.h(p,"ambient()")
if(v.c!==C.d)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.d)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.d)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.l(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.jc(z)
v.jj(z)
v.jn(z)
v.jq(z)
v.jr(z)
v.js(z)
v.jf(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.h])
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
this.fa(x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a1.fr)this.id=H.i(this.y.m(0,"invViewMat"),"$isaC")
if(y)this.dy=H.i(this.y.m(0,"objMat"),"$isaC")
if(w)this.fr=H.i(this.y.m(0,"viewObjMat"),"$isaC")
this.fy=H.i(this.y.m(0,"projViewObjMat"),"$isaC")
if(a1.x2)this.k1=H.i(this.y.m(0,"txt2DMat"),"$isdC")
if(a1.y1)this.k2=H.i(this.y.m(0,"txtCubeMat"),"$isaC")
if(a1.y2)this.k3=H.i(this.y.m(0,"colorMat"),"$isaC")
this.shm(H.c([],[A.aC]))
y=a1.aC
if(y>0){this.k4=H.e(this.y.m(0,"bendMatCount"),"$isM")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.k(0,v)
if(l==null)H.q(P.r("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.i(l,"$isaC"))}}y=a1.a
if(y!==C.d){this.r2=H.i(this.y.m(0,"emissionClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.f:this.rx=H.i(this.y.m(0,"emissionTxt"),"$isar")
this.x1=H.i(this.y.m(0,"nullEmissionTxt"),"$isM")
break
case C.e:this.ry=H.i(this.y.m(0,"emissionTxt"),"$isal")
this.x1=H.i(this.y.m(0,"nullEmissionTxt"),"$isM")
break}}y=a1.b
if(y!==C.d){this.x2=H.i(this.y.m(0,"ambientClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.f:this.y1=H.i(this.y.m(0,"ambientTxt"),"$isar")
this.aC=H.i(this.y.m(0,"nullAmbientTxt"),"$isM")
break
case C.e:this.y2=H.i(this.y.m(0,"ambientTxt"),"$isal")
this.aC=H.i(this.y.m(0,"nullAmbientTxt"),"$isM")
break}}y=a1.c
if(y!==C.d){this.au=H.i(this.y.m(0,"diffuseClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.f:this.bQ=H.i(this.y.m(0,"diffuseTxt"),"$isar")
this.bR=H.i(this.y.m(0,"nullDiffuseTxt"),"$isM")
break
case C.e:this.eH=H.i(this.y.m(0,"diffuseTxt"),"$isal")
this.bR=H.i(this.y.m(0,"nullDiffuseTxt"),"$isM")
break}}y=a1.d
if(y!==C.d){this.bS=H.i(this.y.m(0,"invDiffuseClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.f:this.eI=H.i(this.y.m(0,"invDiffuseTxt"),"$isar")
this.bT=H.i(this.y.m(0,"nullInvDiffuseTxt"),"$isM")
break
case C.e:this.eJ=H.i(this.y.m(0,"invDiffuseTxt"),"$isal")
this.bT=H.i(this.y.m(0,"nullInvDiffuseTxt"),"$isM")
break}}y=a1.e
if(y!==C.d){this.bW=H.i(this.y.m(0,"shininess"),"$isa_")
this.bU=H.i(this.y.m(0,"specularClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.f:this.eK=H.i(this.y.m(0,"specularTxt"),"$isar")
this.bV=H.i(this.y.m(0,"nullSpecularTxt"),"$isM")
break
case C.e:this.eL=H.i(this.y.m(0,"specularTxt"),"$isal")
this.bV=H.i(this.y.m(0,"nullSpecularTxt"),"$isM")
break}}switch(a1.f){case C.d:break
case C.i:break
case C.f:this.eM=H.i(this.y.m(0,"bumpTxt"),"$isar")
this.bX=H.i(this.y.m(0,"nullBumpTxt"),"$isM")
break
case C.e:this.eN=H.i(this.y.m(0,"bumpTxt"),"$isal")
this.bX=H.i(this.y.m(0,"nullBumpTxt"),"$isM")
break}if(a1.dy){this.eO=H.i(this.y.m(0,"envSampler"),"$isal")
this.eP=H.i(this.y.m(0,"nullEnvTxt"),"$isM")
y=a1.r
if(y!==C.d){this.bY=H.i(this.y.m(0,"reflectClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.f:this.eQ=H.i(this.y.m(0,"reflectTxt"),"$isar")
this.bZ=H.i(this.y.m(0,"nullReflectTxt"),"$isM")
break
case C.e:this.eR=H.i(this.y.m(0,"reflectTxt"),"$isal")
this.bZ=H.i(this.y.m(0,"nullReflectTxt"),"$isM")
break}}y=a1.x
if(y!==C.d){this.c_=H.i(this.y.m(0,"refraction"),"$isa_")
this.c0=H.i(this.y.m(0,"refractClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.f:this.eS=H.i(this.y.m(0,"refractTxt"),"$isar")
this.c1=H.i(this.y.m(0,"nullRefractTxt"),"$isM")
break
case C.e:this.eT=H.i(this.y.m(0,"refractTxt"),"$isal")
this.c1=H.i(this.y.m(0,"nullRefractTxt"),"$isM")
break}}}y=a1.y
if(y!==C.d){this.c2=H.i(this.y.m(0,"alpha"),"$isa_")
switch(y){case C.d:break
case C.i:break
case C.f:this.eU=H.i(this.y.m(0,"alphaTxt"),"$isar")
this.c3=H.i(this.y.m(0,"nullAlphaTxt"),"$isM")
break
case C.e:this.eV=H.i(this.y.m(0,"alphaTxt"),"$isal")
this.c3=H.i(this.y.m(0,"nullAlphaTxt"),"$isM")
break}}this.sh7(H.c([],[A.dB]))
this.sh8(H.c([],[A.dD]))
this.sh9(H.c([],[A.dE]))
this.sha(H.c([],[A.dF]))
this.shb(H.c([],[A.dG]))
this.shc(H.c([],[A.dH]))
if(a1.k2){y=a1.z
if(y>0){this.eW=H.e(this.y.m(0,"dirLightCount"),"$isM")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.k(0,w)
if(l==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isJ")
x=this.y
w="dirLights["+m+"].color"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isJ")
x=this.d_;(x&&C.a).h(x,new A.dB(m,l,k))}}y=a1.Q
if(y>0){this.eX=H.e(this.y.m(0,"pntLightCount"),"$isM")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isJ")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isJ")
x=this.y
w="pntLights["+m+"].color"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isJ")
x=this.y
w="pntLights["+m+"].att0"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isa_")
x=this.y
w="pntLights["+m+"].att1"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isa_")
x=this.y
w="pntLights["+m+"].att2"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isa_")
x=this.d0;(x&&C.a).h(x,new A.dD(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.eY=H.e(this.y.m(0,"spotLightCount"),"$isM")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isJ")
x=this.y
w="spotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isJ")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isJ")
x=this.y
w="spotLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isJ")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isa_")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isa_")
x=this.y
w="spotLights["+m+"].att0"
f=x.k(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isa_")
x=this.y
w="spotLights["+m+"].att1"
e=x.k(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isa_")
x=this.y
w="spotLights["+m+"].att2"
d=x.k(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isa_")
x=this.d1;(x&&C.a).h(x,new A.dE(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.eZ=H.e(this.y.m(0,"txtDirLightCount"),"$isM")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.k(0,w)
if(l==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isJ")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isJ")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isJ")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isJ")
x=this.y
w="txtDirLights["+m+"].color"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isJ")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isM")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.k(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isar")
x=this.d2;(x&&C.a).h(x,new A.dF(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.f_=H.e(this.y.m(0,"txtPntLightCount"),"$isM")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isJ")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isJ")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isdC")
x=this.y
w="txtPntLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isJ")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isM")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isa_")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.k(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isa_")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.k(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isa_")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.k(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isal")
x=this.d3;(x&&C.a).h(x,new A.dG(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.f0=H.e(this.y.m(0,"txtSpotLightCount"),"$isM")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isJ")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isJ")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isJ")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isJ")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isJ")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isM")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.k(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isJ")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.k(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isa_")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.k(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isa_")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.k(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(c,"$isa_")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.k(0,w)
if(b==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(b,"$isa_")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.k(0,w)
if(a==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(a,"$isa_")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.k(0,w)
if(a0==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.i(a0,"$isar")
x=this.d4;(x&&C.a).h(x,new A.dH(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
as:function(a,b,c){C.b.S(b.a,b.d,1)},
al:function(a,b,c){if(c==null||c.d<6)C.b.S(b.a,b.d,1)
else{a.dH(c)
C.b.S(b.a,b.d,0)}},
p:{
jk:function(a,b){var z,y
z=a.au
y=new A.eQ(b,z)
y.dL(b,z)
y.fX(a,b)
return y}}},jn:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aC,au,bQ",
j9:function(a){var z,y,x
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
jg:function(a){var z
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
ja:function(a){var z
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
jo:function(a){var z,y
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
jp:function(a){var z,y
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
ji:function(a){var z
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
jt:function(a){var z
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
aH:function(a,b,c){var z
if(b===C.d)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.c.ay(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
jd:function(a){var z,y
z=this.a
if(z===C.d)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aH(a,z,"emission")
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
j8:function(a){var z,y
z=this.b
if(z===C.d)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aH(a,z,"ambient")
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
jb:function(a){var z,y
z=this.c
if(z===C.d)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aH(a,z,"diffuse")
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
je:function(a){var z,y
z=this.d
if(z===C.d)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aH(a,z,"invDiffuse")
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
jm:function(a){var z,y
z=this.e
if(z===C.d)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aH(a,z,"specular")
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
jh:function(a){var z,y
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
jk:function(a){var z,y
z=this.r
if(z===C.d)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aH(a,z,"reflect")
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
jl:function(a){var z,y
z=this.x
if(z===C.d)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aH(a,z,"refract")
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
jc:function(a){var z,y
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
jj:function(a){var z,y
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
jn:function(a){var z,y
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
jq:function(a){var z,y,x
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
jr:function(a){var z,y,x
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
js:function(a){var z,y,x
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
jf:function(a){var z
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
i:function(a){return this.au}},dB:{"^":"a;a,b,c"},dF:{"^":"a;a,b,c,d,e,f,r,x"},dD:{"^":"a;a,b,c,d,e,f,r"},dG:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dE:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dH:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cD:{"^":"d1;",
dL:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
fa:function(a,b){var z,y,x
this.c=a
this.d=b
this.e=this.e_(a,35633)
this.f=this.e_(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
C.b.ev(z,y,this.e)
C.b.ev(z,this.r,this.f)
C.b.ko(z,this.r)
if(!H.dX(C.b.ce(z,this.r,35714))){x=C.b.fF(z,this.r)
C.b.jT(z,this.r)
H.q(P.r("Failed to link shader: "+H.j(x)))}this.iO()
this.iQ()},
a6:function(a){C.b.dt(a.a,this.r)
this.x.k5()},
e_:function(a,b){var z,y,x
z=this.a
y=C.b.jR(z,b)
C.b.fP(z,y,a)
C.b.jK(z,y)
if(!H.dX(C.b.fI(z,y,35713))){x=C.b.fH(z,y)
C.b.jU(z,y)
throw H.d(P.r("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
iO:function(){var z,y,x,w,v,u
z=H.c([],[A.ed])
y=this.a
x=H.a6(C.b.ce(y,this.r,35721))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.fA(y,this.r,w)
u=C.b.fC(y,this.r,v.name)
C.a.h(z,new A.ed(y,v.name,u))}this.x=new A.hY(z)},
iQ:function(){var z,y,x,w,v,u
z=H.c([],[A.af])
y=this.a
x=H.a6(C.b.ce(y,this.r,35718))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.fB(y,this.r,w)
u=C.b.fJ(y,this.r,v.name)
C.a.h(z,this.jS(v.type,v.size,v.name,u))}this.y=new A.kM(z)},
aW:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.M(z,y,b,c)
else return A.dA(z,y,b,a,c)},
hu:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ar(z,y,b,c)
else return A.dA(z,y,b,a,c)},
hv:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.al(z,y,b,c)
else return A.dA(z,y,b,a,c)},
bJ:function(a,b){return new P.fX(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
jS:function(a,b,c,d){switch(a){case 5120:return this.aW(b,c,d)
case 5121:return this.aW(b,c,d)
case 5122:return this.aW(b,c,d)
case 5123:return this.aW(b,c,d)
case 5124:return this.aW(b,c,d)
case 5125:return this.aW(b,c,d)
case 5126:return new A.a_(this.a,this.r,c,d)
case 35664:return new A.kH(this.a,this.r,c,d)
case 35665:return new A.J(this.a,this.r,c,d)
case 35666:return new A.kK(this.a,this.r,c,d)
case 35667:return new A.kI(this.a,this.r,c,d)
case 35668:return new A.kJ(this.a,this.r,c,d)
case 35669:return new A.kL(this.a,this.r,c,d)
case 35674:return new A.kO(this.a,this.r,c,d)
case 35675:return new A.dC(this.a,this.r,c,d)
case 35676:return new A.aC(this.a,this.r,c,d)
case 35678:return this.hu(b,c,d)
case 35680:return this.hv(b,c,d)
case 35670:throw H.d(this.bJ("BOOL",c))
case 35671:throw H.d(this.bJ("BOOL_VEC2",c))
case 35672:throw H.d(this.bJ("BOOL_VEC3",c))
case 35673:throw H.d(this.bJ("BOOL_VEC4",c))
default:throw H.d(P.r("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},cr:{"^":"a;a,b",
i:function(a){return this.b}},fa:{"^":"cD;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},af:{"^":"a;"},kM:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.k(0,b)
if(z==null)throw H.d(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.P()},
kf:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w)x+=z[w].i(0)+a
return x},
P:function(){return this.kf("\n")}},M:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},kI:{"^":"af;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},kJ:{"^":"af;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},kL:{"^":"af;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},kG:{"^":"af;0e,0f,a,b,c,d",
sj6:function(a){this.e=H.k(a,"$isb",[P.n],"$asb")},
i:function(a){return"Uniform1iv: "+H.j(this.c)},
p:{
dA:function(a,b,c,d,e){var z=new A.kG(a,b,c,e)
z.f=d
z.sj6(P.j9(d,0,!1,P.n))
return z}}},a_:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},kH:{"^":"af;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},J:{"^":"af;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},kK:{"^":"af;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},kO:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},dC:{"^":"af;a,b,c,d",
ap:function(a){var z=new Float32Array(H.bp(H.k(a,"$isb",[P.t],"$asb")))
C.b.fs(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},aC:{"^":"af;a,b,c,d",
ap:function(a){var z=new Float32Array(H.bp(H.k(a,"$isb",[P.t],"$asb")))
C.b.ft(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},ar:{"^":"af;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},al:{"^":"af;a,b,c,d",
dH:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)C.b.S(y,x,0)
else C.b.S(y,x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
e_:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.aa,P.t,P.t]})
z=F.cc()
F.bS(z,b,c,d,a,1,0,0,1)
F.bS(z,b,c,d,a,0,1,0,3)
F.bS(z,b,c,d,a,0,0,1,2)
F.bS(z,b,c,d,a,-1,0,0,0)
F.bS(z,b,c,d,a,0,-1,0,0)
F.bS(z,b,c,d,a,0,0,-1,3)
z.am()
return z},
cO:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bS:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.aa,P.t,P.t]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.z(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.z(t+h,s+f,r+g)
z.b=q
p=new V.z(t-h,s-f,r-g)
z.c=p
o=new V.z(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cO(y)
k=F.cO(z.b)
j=F.cX(d,e,new F.mF(z,F.cO(z.c),F.cO(z.d),k,l,c),b)
if(j!=null)a.b9(j)},
hw:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.t,args:[P.t]})
if(f<3)return
z=F.cc()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.aa])
v=z.a
u=new V.z(0,0,y)
u=u.q(0,Math.sqrt(u.C(u)))
C.a.h(w,v.jw(new V.aR(a,-1,-1,-1),new V.ao(1,1,1,1),new V.Q(0,0,d),new V.z(0,0,y),new V.Z(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.B(p)
o=new V.z(r,q,y).q(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.bl(new V.aR(a,-1,-1,-1),null,new V.ao(n,l,m,1),new V.Q(r*p,q*p,d),new V.z(0,0,y),new V.Z(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.ep(w)
return z},
hu:function(a,b,c,d,e,f){return F.n1(!0,c,d,new F.n0(a,f),e)},
n1:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.t,args:[P.t,P.t]})
if(e<3)return
if(c<1)return
z=F.cX(c,e,new F.n3(d),null)
if(z==null)return
z.am()
z.bM()
if(b)z.b9(F.hw(3,!1,!1,1,new F.n4(d),e))
z.b9(F.hw(1,!0,!1,-1,new F.n5(d),e))
return z},
np:function(a,b){var z=F.cX(a,b,new F.nq(),null)
z.d.c9()
z.am()
z.bM()
return z},
ag:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.q(0,Math.sqrt(b.C(b)))
z=b.a
y=b.b
x=b.c
w=F.bl(null,null,null,new V.Q(z,y,x),b,null,null,null,0)
v=a.k8(w,new F.dL())
if(v!=null)return v
u=z*0.5+0.5
t=y*0.5+0.5
s=x*0.5+0.5
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
w.sae(0,new V.ao(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.sdq(new V.Z(q,p<0?-p:p))
a.a.h(0,w)
return w},
U:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.bK(0,b,d,c)
else{z=F.ag(a,b.r.F(0,c.r).v(0,0.5))
y=F.ag(a,c.r.F(0,d.r).v(0,0.5))
x=F.ag(a,d.r.F(0,b.r).v(0,0.5))
w=e-1
F.U(a,b,z,x,w)
F.U(a,z,c,y,w)
F.U(a,y,x,z,w)
F.U(a,x,y,d,w)}},
hG:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.nK()
y=F.e_(a,null,new F.nL(z,c),d)
y.bM()
return y},
nN:function(a,b,c,d){return F.hv(c,a,d,b,new F.nO())},
nn:function(a,b,c,d,e,f){return F.hv(d,a,e,b,new F.no(f,c))},
hv:function(a,b,c,d,e){var z=F.cX(a,b,new F.n2(H.l(e,{func:1,ret:V.Q,args:[P.t]}),d,b,c),null)
if(z==null)return
z.am()
z.bM()
return z},
cX:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.aa,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.cc()
y=H.c([],[F.aa])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.bl(null,null,new V.ao(u,0,0,1),null,null,new V.Z(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cW(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.bl(null,null,new V.ao(o,n,m,1),null,null,new V.Z(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cW(d))}}z.d.jv(a+1,b+1,y)
return z},
mF:{"^":"m:5;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.da(z.b,b).da(z.d.da(z.c,b),c)
a.sa3(0,new V.Q(y.a,y.b,y.c))
a.saw(y.q(0,Math.sqrt(y.C(y))))
z=1-b
x=1-c
a.sew(new V.aR(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
n0:{"^":"m:30;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
n3:{"^":"m:5;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.B(v)
y=-y*v
u=x*v
a.sa3(0,new V.Q(y,u,w))
u=new V.z(y,u,w)
a.saw(u.q(0,Math.sqrt(u.C(u))))
a.sew(new V.aR(1-c,2+c,-1,-1))}},
n4:{"^":"m:15;a",
$1:function(a){return this.a.$2(a,1)}},
n5:{"^":"m:15;a",
$1:function(a){return this.a.$2(1-a,0)}},
nq:{"^":"m:5;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.z(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.q(0,Math.sqrt(w.C(w)))
a.sa3(0,new V.Q(x.a,x.b,x.c))}},
nK:{"^":"m:30;",
$2:function(a,b){return 0}},
nL:{"^":"m:5;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.B(z)
y=a.f
x=new V.z(y.a,y.b,y.c)
z=x.q(0,Math.sqrt(x.C(x))).v(0,this.b+z)
a.sa3(0,new V.Q(z.a,z.b,z.c))}},
nO:{"^":"m:31;",
$1:function(a){return new V.Q(Math.cos(a),Math.sin(a),0)}},
no:{"^":"m:31;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.Q(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
n2:{"^":"m:5;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.e8(y.$1(z),x)
x=J.e8(y.$1(z+3.141592653589793/this.c),x).M(0,w)
x=new V.z(x.a,x.b,x.c)
v=x.q(0,Math.sqrt(x.C(x)))
y=$.fI
if(y==null){y=new V.z(1,0,0)
$.fI=y
u=y}else u=y
y=v.aL(!J.E(v,u)?V.fM():u)
t=y.q(0,Math.sqrt(y.C(y)))
y=t.aL(v)
u=y.q(0,Math.sqrt(y.C(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.v(0,y*x)
x=t.v(0,r*x)
a.sa3(0,w.F(0,new V.Q(y.a-x.a,y.b-x.b,y.c-x.c)))}},
ae:{"^":"a;0a,0b,0c,0d,0e",
bo:function(){if(!this.gbp()){C.a.G(this.a.a.d.b,this)
this.a.a.X()}this.cE()
this.cF()
this.iw()},
cJ:function(a){this.a=a
C.a.h(a.d.b,this)},
cK:function(a){this.b=a
C.a.h(a.d.c,this)},
iN:function(a){this.c=a
C.a.h(a.d.d,this)},
cE:function(){var z=this.a
if(z!=null){C.a.G(z.d.b,this)
this.a=null}},
cF:function(){var z=this.b
if(z!=null){C.a.G(z.d.c,this)
this.b=null}},
iw:function(){var z=this.c
if(z!=null){C.a.G(z.d.d,this)
this.c=null}},
gbp:function(){return this.a==null||this.b==null||this.c==null},
hl:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bL()
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.fb())return
return v.q(0,Math.sqrt(v.C(v)))},
hq:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.M(0,y)
z=new V.z(z.a,z.b,z.c)
v=z.q(0,Math.sqrt(z.C(z)))
z=w.M(0,y)
z=new V.z(z.a,z.b,z.c)
z=v.aL(z.q(0,Math.sqrt(z.C(z))))
return z.q(0,Math.sqrt(z.C(z)))},
cT:function(){if(this.d!=null)return!0
var z=this.hl()
if(z==null){z=this.hq()
if(z==null)return!1}this.d=z
this.a.a.X()
return!0},
hk:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bL()
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.fb())return
return v.q(0,Math.sqrt(v.C(v)))},
hp:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.p.$2(n,0)){z=r.M(0,u)
z=new V.z(z.a,z.b,z.c)
m=z.q(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.V(0)}else{l=(z-q.b)/n
z=r.M(0,u).v(0,l).F(0,u).M(0,x)
z=new V.z(z.a,z.b,z.c)
m=z.q(0,Math.sqrt(z.C(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.V(0)}z=this.d
if(z!=null){k=z.q(0,Math.sqrt(z.C(z)))
z=k.aL(m)
z=z.q(0,Math.sqrt(z.C(z))).aL(k)
m=z.q(0,Math.sqrt(z.C(z)))}return m},
cR:function(){if(this.e!=null)return!0
var z=this.hk()
if(z==null){z=this.hp()
if(z==null)return!1}this.e=z
this.a.a.X()
return!0},
aU:function(a,b){var z=b.a
if(z==null)throw H.d(P.r("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.d(P.r("May not replace a face's vertex with a vertex attached to a different shape."))},
gjJ:function(a){if(J.E(this.a,this.b))return!0
if(J.E(this.b,this.c))return!0
if(J.E(this.c,this.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
J:function(a){var z,y
if(this.gbp())return a+"disposed"
z=a+C.c.ao(J.ah(this.a.e),0)+", "+C.c.ao(J.ah(this.b.e),0)+", "+C.c.ao(J.ah(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
P:function(){return this.J("")},
p:{
b9:function(a,b,c){var z,y,x
z=new F.ae()
y=a.a
if(y==null)H.q(P.r("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.r("May not create a face with vertices attached to different shapes."))
z.cJ(a)
z.cK(b)
z.iN(c)
C.a.h(z.a.a.d.b,z)
z.a.a.X()
return z}}},
iz:{"^":"a;"},
kh:{"^":"iz;",
b8:function(a,b,c){var z,y
z=b.a
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
if(z==y.e){z=b.b
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
if(z==y.e){z=b.c
z.a.a.D()
z=z.e
y=c.c
y.a.a.D()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
if(z==y.e){z=b.b
z.a.a.D()
z=z.e
y=c.c
y.a.a.D()
if(z==y.e){z=b.c
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.D()
z=z.e
y=c.c
y.a.a.D()
if(z==y.e){z=b.b
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
if(z==y.e){z=b.c
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
y=z==y.e
z=y}else z=!1
return z}else return!1}}}},
bG:{"^":"a;0a,0b",
bo:function(){if(!this.gbp()){C.a.G(this.a.a.c.b,this)
this.a.a.X()}this.cE()
this.cF()},
cJ:function(a){this.a=a
C.a.h(a.c.b,this)},
cK:function(a){this.b=a
C.a.h(a.c.c,this)},
cE:function(){var z=this.a
if(z!=null){C.a.G(z.c.b,this)
this.a=null}},
cF:function(){var z=this.b
if(z!=null){C.a.G(z.c.c,this)
this.b=null}},
gbp:function(){return this.a==null||this.b==null},
aU:function(a,b){var z=b.a
if(z==null)throw H.d(P.r("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.d(P.r("May not replace a line's vertex with a vertex attached to a different shape."))},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
J:function(a){if(this.gbp())return a+"disposed"
return a+C.c.ao(J.ah(this.a.e),0)+", "+C.c.ao(J.ah(this.b.e),0)},
P:function(){return this.J("")},
p:{
j0:function(a,b){var z,y,x
z=new F.bG()
y=a.a
if(y==null)H.q(P.r("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.q(P.r("May not create a line with vertices attached to different shapes."))
z.cJ(a)
z.cK(b)
C.a.h(z.a.a.c.b,z)
z.a.a.X()
return z}}},
j1:{"^":"a;"},
kF:{"^":"j1;",
b8:function(a,b,c){var z,y
z=b.a
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
if(z==y.e){z=b.b
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
return z==y.e}else{z=b.a
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
if(z==y.e){z=b.b
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
return z==y.e}else return!1}}},
ca:{"^":"a;0a",
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
J:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.c.ao(J.ah(z.e),0)},
P:function(){return this.J("")}},
f9:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
b9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.D()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){v=z[w]
this.a.h(0,v.jM())}this.a.D()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.D()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.ca()
if(r.a==null)H.q(P.r("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.I(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.D()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.D()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.j0(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.D()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.D()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.D()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
m=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,m)
F.b9(p,o,m)}z=this.e
if(!(z==null))z.aF()},
am:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.am()||!1
if(!this.a.am())y=!1
z=this.e
if(!(z==null))z.aF()
return y},
k9:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
if(b.b8(0,a,w))return w}return},
k8:function(a,b){return this.k9(a,b,0)},
iA:function(a,b){var z,y,x,w,v,u
H.k(b,"$isb",[F.aa],"$asb")
this.a.h(0,a)
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.A)(b),++y){x=b[y]
for(;w=x.d,w.b.length+w.c.length+w.d.length>0;){w=w.k(0,0)
v=w.a
if(v==null||w.b==null||w.c==null)H.q(P.r("May not replace a face's vertex when the point has been disposed."))
if(J.E(v,x)){w.aU(x,a)
v=w.a
if(v!=null){C.a.G(v.d.b,w)
w.a=null}w.a=a
C.a.h(a.d.b,w)
u=1}else u=0
if(J.E(w.b,x)){w.aU(x,a)
v=w.b
if(v!=null){C.a.G(v.d.c,w)
w.b=null}w.b=a
C.a.h(a.d.c,w);++u}if(J.E(w.c,x)){w.aU(x,a)
v=w.c
if(v!=null){C.a.G(v.d.d,w)
w.c=null}w.c=a
C.a.h(a.d.d,w);++u}if(u>0){w=w.a.a.e
if(!(w==null))w.I(null)}}for(;w=x.c,w.b.length+w.c.length>0;){w=w.k(0,0)
v=w.a
if(v==null||w.b==null)H.q(P.r("May not replace a line's vertex when the point has been disposed."))
if(J.E(v,x)){w.aU(x,a)
v=w.a
if(v!=null){C.a.G(v.c.b,w)
w.a=null}w.a=a
C.a.h(a.c.b,w)
u=1}else u=0
if(J.E(w.b,x)){w.aU(x,a)
v=w.b
if(v!=null){C.a.G(v.c.c,w)
w.b=null}w.b=a
C.a.h(a.c.c,w);++u}if(u>0){w=w.a.a.e
if(!(w==null))w.I(null)}}for(;w=x.b.b,w.length>0;){w=w[0]
v=w.a
if(v==null)H.q(P.r("May not replace a point's vertex when the point has been disposed."))
if(J.E(v,x)){if(a.a==null)H.q(P.r("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=w.a
if(v!=null){C.a.G(v.b.b,w)
w.a=null}w.a=a
C.a.h(a.b.b,w)
u=1}else u=0
if(u>0){w=w.a.a.e
if(!(w==null))w.I(null)}}this.a.G(0,x)}},
ff:function(a,b){var z,y,x,w,v,u,t,s
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.u(z,0)])
for(z=[F.aa];y.length!==0;){x=C.a.gkb(y)
C.a.kJ(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.A)(y),++u){t=y[u]
if(t!=null&&a.b8(0,x,t)){C.a.h(w,t)
C.a.G(y,t)}}if(w.length>1){s=b.b9(w)
if(s!=null){this.iA(s,w)
C.a.h(y,s)}}}}this.a.D()
this.c.c9()
this.d.c9()
this.b.kK()
this.c.dl(new F.kF())
this.d.dl(new F.kh())
z=this.e
if(!(z==null))z.aF()},
jx:function(a){this.ff(new F.dL(),new F.jy())},
bM:function(){return this.jx(null)},
eA:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aD()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
if((x&$.$get$aX().a)!==0)++w
if((x&$.$get$aY().a)!==0)++w
if((x&$.$get$bM().a)!==0)++w
if((x&$.$get$bN().a)!==0)++w
if((x&$.$get$bn().a)!==0)++w
if((x&$.$get$aU().a)!==0)++w
v=b.gdI(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.ei])
for(r=0,q=0;q<w;++q){p=b.jA(q)
o=p.gdI(p)
C.a.t(s,q,new Z.ei(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].kp(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.t(t,l,m[k]);++l}}r+=o}H.k(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.aB(y,34962,j)
C.b.ez(y,34962,new Float32Array(H.bp(t)),35044)
C.b.aB(y,34962,null)
i=new Z.d4(new Z.fS(34962,j),s,b)
i.shJ(H.c([],[Z.c3]))
if(this.b.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.D()
C.a.h(h,g.e)}f=Z.dM(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.c3(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.D()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.D()
C.a.h(h,g.e)}f=Z.dM(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.c3(1,h.length,f))}if(this.d.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.D()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.D()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.D()
C.a.h(h,g.e)}f=Z.dM(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.c3(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.J("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.J("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.J("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.J("   "))}return C.a.l(z,"\n")},
ba:function(a){var z=this.e
if(!(z==null))z.I(a)},
X:function(){return this.ba(null)},
$iso7:1,
p:{
cc:function(){var z,y
z=new F.f9()
y=new F.lb(z)
y.b=!1
y.sj7(H.c([],[F.aa]))
z.a=y
y=new F.kb(z)
y.scB(H.c([],[F.ca]))
z.b=y
y=new F.ka(z)
y.shL(H.c([],[F.bG]))
z.c=y
y=new F.k9(z)
y.shA(H.c([],[F.ae]))
z.d=y
z.e=null
return z}}},
k9:{"^":"a;a,0b",
shA:function(a){this.b=H.k(a,"$isb",[F.ae],"$asb")},
bK:function(a,b,c,d){var z=this.a
z.a.h(0,b)
z.a.h(0,c)
z.a.h(0,d)
return F.b9(b,c,d)},
ep:function(a){var z,y,x,w,v,u,t
H.k(a,"$isb",[F.aa],"$asb")
z=H.c([],[F.ae])
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
C.a.h(z,F.b9(x,u,t))}}return z},
jv:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,"$isb",[F.aa],"$asb")
z=H.c([],[F.ae])
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
C.a.h(z,F.b9(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.b9(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.b9(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.b9(p,m,q))}t=!t}v=!v}return z},
gn:function(a){return this.b.length},
dl:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.k(0,v)
for(t=v-1;t>=0;--t){s=w.d.k(0,t)
if(a.b8(0,u,s)){u.bo()
break}}}}},
c9:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.gjJ(x)
if(y)x.bo()}},
am:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].cT())x=!1
return x},
cS:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].cR())x=!1
return x},
i:function(a){return this.P()},
J:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].J(a))
return C.a.l(z,"\n")},
P:function(){return this.J("")}},
ka:{"^":"a;a,0b",
shL:function(a){this.b=H.k(a,"$isb",[F.bG],"$asb")},
gn:function(a){return this.b.length},
dl:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.k(0,v)
for(t=v-1;t>=0;--t){s=w.c.k(0,t)
if(a.b8(0,u,s)){u.bo()
break}}}}},
c9:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.E(x.a,x.b)
if(y)x.bo()}},
i:function(a){return this.P()},
J:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].J(a+(""+x+". ")))}return C.a.l(z,"\n")},
P:function(){return this.J("")}},
kb:{"^":"a;a,0b",
scB:function(a){this.b=H.k(a,"$isb",[F.ca],"$asb")},
gn:function(a){return this.b.length},
kK:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
x=y.a
if(x.b.b.length>1){if(x!=null){C.a.G(x.a.b.b,y)
x=y.a.a.e
if(!(x==null))x.I(null)}x=y.a
if(x!=null){C.a.G(x.b.b,y)
y.a=null}}}},
i:function(a){return this.P()},
J:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].J(a))
return C.a.l(z,"\n")},
P:function(){return this.J("")}},
aa:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cW:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.bl(this.cx,x,u,z,y,w,v,a,t)},
jM:function(){return this.cW(null)},
sa3:function(a,b){var z
if(!J.E(this.f,b)){this.f=b
z=this.a
if(z!=null)z.X()}},
sdf:function(a){var z
a=a==null?null:a.q(0,Math.sqrt(a.C(a)))
if(!J.E(this.r,a)){this.r=a
z=this.a
if(z!=null)z.X()}},
sey:function(a){var z
a=a==null?null:a.q(0,Math.sqrt(a.C(a)))
if(!J.E(this.x,a)){this.x=a
z=this.a
if(z!=null)z.X()}},
sdq:function(a){var z
if(!J.E(this.y,a)){this.y=a
z=this.a
if(z!=null)z.X()}},
saw:function(a){var z
if(!J.E(this.z,a)){this.z=a
z=this.a
if(z!=null)z.X()}},
sae:function(a,b){var z
if(!J.E(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.X()}},
sfw:function(a){var z
if(this.ch!==a){this.ch=a
z=this.a
if(z!=null)z.X()}},
sew:function(a){var z
if(!J.E(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.X()}},
kp:function(a){var z,y
if(a.A(0,$.$get$aD())){z=this.f
y=[P.t]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$aW())){z=this.r
y=[P.t]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$aV())){z=this.x
y=[P.t]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$aX())){z=this.y
y=[P.t]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.A(0,$.$get$aY())){z=this.z
y=[P.t]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$bM())){z=this.Q
y=[P.t]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$bN())){z=this.Q
if(z==null)return H.c([1,1,1,1],[P.t])
else return z.dr(0)}else if(a.A(0,$.$get$bn()))return H.c([this.ch],[P.t])
else if(a.A(0,$.$get$aU())){z=this.cx
y=[P.t]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.t])},
cT:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bL()
this.d.a2(0,new F.lk(z))
z=z.a
this.r=z.q(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.aF()}return!0},
cR:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bL()
this.d.a2(0,new F.lj(z))
z=z.a
this.x=z.q(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.aF()}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
J:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.c.ao(J.ah(this.e),0))
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
C.a.h(z,V.L(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.l(z,", ")
return a+"{"+x+"}"},
P:function(){return this.J("")},
p:{
bl:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aa()
y=new F.li(z)
y.scB(H.c([],[F.ca]))
z.b=y
y=new F.lg(z)
x=[F.bG]
y.shM(H.c([],x))
y.shN(H.c([],x))
z.c=y
y=new F.lc(z)
x=[F.ae]
y.shB(H.c([],x))
y.shC(H.c([],x))
y.shD(H.c([],x))
z.d=y
h=$.$get$fP()
z.e=0
y=$.$get$aD()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aW().a)!==0?e:null
z.x=(x&$.$get$aV().a)!==0?b:null
z.y=(x&$.$get$aX().a)!==0?f:null
z.z=(x&$.$get$aY().a)!==0?g:null
z.Q=(x&$.$get$fQ().a)!==0?c:null
z.ch=(x&$.$get$bn().a)!==0?i:0
z.cx=(x&$.$get$aU().a)!==0?a:null
return z}}},
lk:{"^":"m:9;a",
$1:function(a){var z,y
H.e(a,"$isae")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
lj:{"^":"m:9;a",
$1:function(a){var z,y
H.e(a,"$isae")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
lb:{"^":"a;a,0b,0c",
sj7:function(a){this.c=H.k(a,"$isb",[F.aa],"$asb")},
D:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.f(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.d(P.r("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.X()
return!0},
eq:function(a,b,c,d,e,f,g,h,i){var z=F.bl(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bL:function(a,b,c,d,e,f){return this.eq(a,null,b,c,null,d,e,f,0)},
jw:function(a,b,c,d,e,f){return this.eq(a,null,b,c,d,e,f,null,0)},
gn:function(a){return this.c.length},
G:function(a,b){var z,y
if(b==null)return!1
z=this.a
if(b.a!==z)return!1
if(b.b.b.length===0){y=b.c
if(y.b.length===0&&y.c.length===0){y=b.d
y=y.b.length===0&&y.c.length===0&&y.d.length===0}else y=!1}else y=!1
if(!y)throw H.d(P.r("May not remove a vertex without first making it empty."))
b.a=null
C.a.G(this.c,b)
z.X()
this.b=!0
return!0},
am:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].cT()
return!0},
cS:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].cR()
return!0},
jF:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.q(0,Math.sqrt(u*u+t*t+s*s))
if(!J.E(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.I(null)}}}}return!0},
i:function(a){return this.P()},
J:function(a){var z,y,x,w
this.D()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].J(a))
return C.a.l(z,"\n")},
P:function(){return this.J("")}},
lc:{"^":"a;a,0b,0c,0d",
shB:function(a){this.b=H.k(a,"$isb",[F.ae],"$asb")},
shC:function(a){this.c=H.k(a,"$isb",[F.ae],"$asb")},
shD:function(a){this.d=H.k(a,"$isb",[F.ae],"$asb")},
gn:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
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
a2:function(a,b){H.l(b,{func:1,ret:-1,args:[F.ae]})
C.a.a2(this.b,b)
C.a.a2(this.c,new F.ld(this,b))
C.a.a2(this.d,new F.le(this,b))},
i:function(a){return this.P()},
J:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].J(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].J(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].J(a))
return C.a.l(z,"\n")},
P:function(){return this.J("")}},
ld:{"^":"m:9;a,b",
$1:function(a){H.e(a,"$isae")
if(!J.E(a.a,this.a))this.b.$1(a)}},
le:{"^":"m:9;a,b",
$1:function(a){var z
H.e(a,"$isae")
z=this.a
if(!J.E(a.a,z)&&!J.E(a.b,z))this.b.$1(a)}},
lg:{"^":"a;a,0b,0c",
shM:function(a){this.b=H.k(a,"$isb",[F.bG],"$asb")},
shN:function(a){this.c=H.k(a,"$isb",[F.bG],"$asb")},
gn:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.P()},
J:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].J(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].J(a))
return C.a.l(z,"\n")},
P:function(){return this.J("")}},
lh:{"^":"a;"},
dL:{"^":"lh;",
b8:function(a,b,c){return J.E(b.f,c.f)}},
fO:{"^":"a;"},
lf:{"^":"fO;",
b9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.k(a,"$isb",[F.aa],"$asb")
for(z=a.length,y=0,x=null,w=null,v=null,u=0,t=null,s=0,r=null,q=0,p=null,o=0,n=0,m=0;m<z;++m){l=a[m]
k=l.f
if(k!=null){x=x==null?k:new V.Q(x.a+k.a,x.b+k.b,x.c+k.c);++y}j=l.r
if(j!=null)w=w==null?j:new V.z(w.a+j.a,w.b+j.b,w.c+j.c)
i=l.x
if(i!=null)v=v==null?i:new V.z(v.a+i.a,v.b+i.b,v.c+i.c)
h=l.y
if(h!=null){r=r==null?h:new V.Z(r.a+h.a,r.b+h.b);++s}g=l.z
if(g!=null){p=p==null?g:new V.z(p.a+g.a,p.b+g.b,p.c+g.c);++q}f=l.Q
if(f!=null){e=f.a
d=f.b
c=f.c
f=f.d
if(t==null){f=[e,d,c,f]
t=new V.cf(f[0],f[1],f[2],f[3])}else{f=[e,d,c,f]
e=f[0]
d=f[1]
c=f[2]
f=f[3]
t=new V.cf(t.a+e,t.b+d,t.c+c,t.d+f)}++u}f=l.ch
if(typeof f!=="number")return H.B(f)
n+=f;++o}b=F.bl(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)b.sa3(0,null)
else b.sa3(0,x.q(0,y))
if(w==null)b.sdf(null)
else b.sdf(w.q(0,Math.sqrt(w.C(w))))
if(v==null)b.sey(null)
else b.sey(v.q(0,Math.sqrt(v.C(v))))
if(s<=0||r==null)b.sdq(null)
else b.sdq(r.q(0,s))
if(q<=0||p==null)b.saw(null)
else b.saw(p.q(0,q))
if(u<=0||t==null)b.sae(0,null)
else{z=t.q(0,u)
z=[z.a,z.b,z.c,z.d]
f=z[0]
e=z[1]
d=z[2]
z=z[3]
if(f<0)f=0
else if(f>1)f=1
if(e<0)e=0
else if(e>1)e=1
if(d<0)d=0
else if(d>1)d=1
if(z<0)z=0
else if(z>1)z=1
b.sae(0,new V.ao(f,e,d,z))}if(o<=0)b.sfw(0)
else b.sfw(n/o)
return b}},
jy:{"^":"fO;",
b9:function(a){var z,y,x,w
H.k(a,"$isb",[F.aa],"$asb")
z=V.bL()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.z(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.q(0,Math.sqrt(z.C(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x)a[x].sdf(z)
return}},
li:{"^":"a;a,0b",
scB:function(a){this.b=H.k(a,"$isb",[F.ca],"$asb")},
gn:function(a){return this.b.length},
i:function(a){return this.P()},
J:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].J(a))
return C.a.l(z,"\n")},
P:function(){return this.J("")}}}],["","",,O,{"^":"",jj:{"^":"bK;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
shn:function(a){this.e=H.k(a,"$isX",[V.aq],"$asX")},
gu:function(){var z=this.dy
if(z==null){z=D.F()
this.dy=z}return z},
a1:[function(a){var z
H.e(a,"$isx")
z=this.dy
if(!(z==null))z.I(a)},function(){return this.a1(null)},"ea","$1","$0","gaY",0,2,1],
iD:[function(a){H.e(a,"$isx")
this.a=null
this.a1(a)},function(){return this.iD(null)},"lA","$1","$0","giC",0,2,1],
lb:[function(a,b){var z=V.aq
z=new D.c4(a,H.k(b,"$iso",[z],"$aso"),this,[z])
z.b=!0
this.a1(z)},"$2","ghX",8,0,16],
lc:[function(a,b){var z=V.aq
z=new D.c5(a,H.k(b,"$iso",[z],"$aso"),this,[z])
z.b=!0
this.a1(z)},"$2","ghY",8,0,16],
dX:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.aa(z.e.length+3,4)*4
x=C.h.aa(z.f.length+3,4)*4
w=C.h.aa(z.r.length+3,4)*4
v=C.h.aa(z.x.length+3,4)*4
u=C.h.aa(z.y.length+3,4)*4
t=C.h.aa(z.z.length+3,4)*4
s=C.h.aa(this.e.a.length+3,4)*4
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
a2=$.$get$aD()
if(e){g=$.$get$aW()
a2=new Z.bm(a2.a|g.a)}if(d){g=$.$get$aV()
a2=new Z.bm(a2.a|g.a)}if(c){g=$.$get$aX()
a2=new Z.bm(a2.a|g.a)}if(b){g=$.$get$aY()
a2=new Z.bm(a2.a|g.a)}if(a0){g=$.$get$aU()
a2=new Z.bm(a2.a|g.a)}return new A.jn(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
a0:function(a,b){H.k(a,"$isb",[T.dv],"$asb")
if(b!=null)if(!C.a.Z(a,b)){b.a=a.length
C.a.h(a,b)}},
ax:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.aw(z,z.length,0,[H.u(z,0)]);z.E();){y=z.d
y.toString
x=$.cJ
if(x==null){x=new V.z(0,0,1)
$.cJ=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.ds(x)}}},
fl:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dX()
y=H.e(a.fr.k(0,z.au),"$iseQ")
if(y==null){y=A.jk(z,a.a)
a.es(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bQ
z=b.e
if(!(z instanceof Z.d4)){b.e=null
z=null}if(z==null||!z.d.A(0,w)){z=x.r1
if(z)b.d.am()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cS()
u.a.cS()
u=u.e
if(!(u==null))u.aF()}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.jF()
t=t.e
if(!(t==null))t.aF()}r=b.d.eA(new Z.fT(a.a),w)
r.aM($.$get$aD()).e=this.a.Q.c
if(z)r.aM($.$get$aW()).e=this.a.cx.c
if(v)r.aM($.$get$aV()).e=this.a.ch.c
if(x.rx)r.aM($.$get$aX()).e=this.a.cy.c
if(u)r.aM($.$get$aY()).e=this.a.db.c
if(x.x1)r.aM($.$get$aU()).e=this.a.dx.c
b.e=r}z=T.dv
q=H.c([],[z])
this.a.a6(a)
if(x.fx){v=this.a
u=a.dx.ga7()
v=v.dy
v.toString
v.ap(u.ai(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db.ga7().v(0,a.dx.ga7())
a.cx=u}v=v.fr
v.toString
v.ap(u.ai(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gkH().v(0,a.dx.ga7())
a.ch=u}v=v.fy
v.toString
v.ap(u.ai(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.ap(C.r.ai(u,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.ap(C.r.ai(u,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.ap(C.r.ai(u,!0))}if(x.aC>0){p=this.e.a.length
v=this.a.k4
C.b.S(v.a,v.d,p)
for(v=[P.t],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.f(t,o)
t=t[o]
u.toString
H.e(t,"$isaq")
u=u.r1
if(o>=u.length)return H.f(u,o)
u=u[o]
n=new Float32Array(H.bp(H.k(t.ai(0,!0),"$isb",v,"$asb")))
C.b.ft(u.a,u.d,!1,n)}}switch(x.a){case C.d:break
case C.i:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
C.b.B(v.a,v.d,t,s,u)
break
case C.f:this.a0(q,this.f.d)
v=this.a
u=this.f.d
v.as(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
break
case C.e:this.a0(q,this.f.e)
v=this.a
u=this.f.e
v.al(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.d:break
case C.i:v=this.a
u=this.r.f
v=v.x2
v.toString
t=u.a
s=u.b
u=u.c
C.b.B(v.a,v.d,t,s,u)
break
case C.f:this.a0(q,this.r.d)
v=this.a
u=this.r.d
v.as(v.y1,v.aC,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
break
case C.e:this.a0(q,this.r.e)
v=this.a
u=this.r.e
v.al(v.y2,v.aC,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
break}switch(x.c){case C.d:break
case C.i:v=this.a
u=this.x.f
v=v.au
v.toString
t=u.a
s=u.b
u=u.c
C.b.B(v.a,v.d,t,s,u)
break
case C.f:this.a0(q,this.x.d)
v=this.a
u=this.x.d
v.as(v.bQ,v.bR,u)
u=this.a
v=this.x.f
u=u.au
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
break
case C.e:this.a0(q,this.x.e)
v=this.a
u=this.x.e
v.al(v.eH,v.bR,u)
u=this.a
v=this.x.f
u=u.au
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
break}switch(x.d){case C.d:break
case C.i:v=this.a
u=this.y.f
v=v.bS
v.toString
t=u.a
s=u.b
u=u.c
C.b.B(v.a,v.d,t,s,u)
break
case C.f:this.a0(q,this.y.d)
v=this.a
u=this.y.d
v.as(v.eI,v.bT,u)
u=this.a
v=this.y.f
u=u.bS
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
break
case C.e:this.a0(q,this.y.e)
v=this.a
u=this.y.e
v.al(v.eJ,v.bT,u)
u=this.a
v=this.y.f
u=u.bS
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
break}switch(x.e){case C.d:break
case C.i:v=this.a
u=this.z.f
v=v.bU
v.toString
t=u.a
s=u.b
u=u.c
C.b.B(v.a,v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bW
C.b.N(u.a,u.d,s)
break
case C.f:this.a0(q,this.z.d)
v=this.a
u=this.z.d
v.as(v.eK,v.bV,u)
u=this.a
v=this.z.f
u=u.bU
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bW
C.b.N(v.a,v.d,s)
break
case C.e:this.a0(q,this.z.e)
v=this.a
u=this.z.e
v.al(v.eL,v.bV,u)
u=this.a
v=this.z.f
u=u.bU
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bW
C.b.N(v.a,v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.eW
C.b.S(v.a,v.d,p)
m=a.db.ga7()
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.d_
if(l>=t.length)return H.f(t,l)
i=t[l]
t=m.ds(j.a)
s=t.a
h=t.b
g=t.c
g=t.q(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
s=g.a
t=g.b
g=g.c
C.b.B(h.a,h.d,s,t,g)
g=j.c
t=i.c
C.b.B(t.a,t.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.eX
C.b.S(v.a,v.d,p)
m=a.db.ga7()
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.d0
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbt(j)
s=i.b
h=t.gdz(t)
g=t.gdA(t)
t=t.gdB(t)
C.b.B(s.a,s.d,h,g,t)
t=m.bA(j.gbt(j))
g=i.c
C.b.B(g.a,g.d,t.a,t.b,t.c)
t=j.gae(j)
g=i.d
h=t.gc8()
s=t.gbC()
t=t.gbN()
C.b.B(g.a,g.d,h,s,t)
t=j.gcM()
s=i.e
C.b.N(s.a,s.d,t)
t=j.gcN()
s=i.f
C.b.N(s.a,s.d,t)
t=j.gcO()
s=i.r
C.b.N(s.a,s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.eY
C.b.S(v.a,v.d,p)
m=a.db.ga7()
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.d1
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbt(j)
s=i.b
h=t.gdz(t)
g=t.gdA(t)
t=t.gdB(t)
C.b.B(s.a,s.d,h,g,t)
t=j.gcY(j).lI()
g=i.c
h=t.gb3(t)
s=t.gb4(t)
t=t.gb5()
C.b.B(g.a,g.d,h,s,t)
t=m.bA(j.gbt(j))
s=i.d
C.b.B(s.a,s.d,t.a,t.b,t.c)
t=j.gae(j)
s=i.e
h=t.gc8()
g=t.gbC()
t=t.gbN()
C.b.B(s.a,s.d,h,g,t)
t=j.glG()
g=i.f
C.b.N(g.a,g.d,t)
t=j.glE()
g=i.r
C.b.N(g.a,g.d,t)
t=j.gcM()
g=i.x
C.b.N(g.a,g.d,t)
t=j.gcN()
g=i.y
C.b.N(g.a,g.d,t)
t=j.gcO()
g=i.z
C.b.N(g.a,g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.eZ
C.b.S(v.a,v.d,p)
m=a.db.ga7()
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
s=this.a.d2
if(l>=s.length)return H.f(s,l)
i=s[l]
s=j.gbx()
H.k(q,"$isb",t,"$asb")
if(!C.a.Z(q,s)){s.scq(q.length)
C.a.h(q,s)}s=j.gcY(j)
h=i.d
g=s.gb3(s)
f=s.gb4(s)
s=s.gb5()
C.b.B(h.a,h.d,g,f,s)
s=j.gcb()
f=i.b
g=s.gb3(s)
h=s.gb4(s)
s=s.gb5()
C.b.B(f.a,f.d,g,h,s)
s=j.gbu(j)
h=i.c
g=s.gb3(s)
f=s.gb4(s)
s=s.gb5()
C.b.B(h.a,h.d,g,f,s)
s=m.ds(j.gcY(j))
f=s.a
g=s.b
h=s.c
h=s.q(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
f=h.a
s=h.b
h=h.c
C.b.B(g.a,g.d,f,s,h)
h=j.gae(j)
s=i.f
f=h.gc8()
g=h.gbC()
h=h.gbN()
C.b.B(s.a,s.d,f,g,h)
h=j.gbx()
s=h.gc4(h)
if(!s){s=i.x
C.b.S(s.a,s.d,1)}else{s=i.r
g=h.gc4(h)
f=s.a
s=s.d
if(!g)C.b.S(f,s,0)
else C.b.S(f,s,h.gki(h))
s=i.x
C.b.S(s.a,s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.f_
C.b.S(v.a,v.d,p)
m=a.db.ga7()
for(v=this.dx.y,u=v.length,t=[P.t],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
h=this.a.d3
if(l>=h.length)return H.f(h,l)
i=h[l]
h=j.gbx()
H.k(q,"$isb",s,"$asb")
if(!C.a.Z(q,h)){h.scq(q.length)
C.a.h(q,h)}e=m.v(0,j.ga7())
h=j.ga7()
g=$.bI
if(g==null){g=new V.Q(0,0,0)
$.bI=g}g=h.bA(g)
h=i.b
f=g.gdz(g)
d=g.gdA(g)
g=g.gdB(g)
C.b.B(h.a,h.d,f,d,g)
h=$.bI
if(h==null){h=new V.Q(0,0,0)
$.bI=h}h=e.bA(h)
g=i.c
C.b.B(g.a,g.d,h.a,h.b,h.c)
h=e.d9()
g=i.d
n=new Float32Array(H.bp(H.k(new V.eR(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ai(0,!0),"$isb",t,"$asb")))
C.b.fs(g.a,g.d,!1,n)
g=j.gae(j)
h=i.e
f=g.gc8()
d=g.gbC()
g=g.gbN()
C.b.B(h.a,h.d,f,d,g)
g=j.gbx()
h=g.gc4(g)
if(!h){h=i.r
C.b.S(h.a,h.d,1)}else{h=i.f
f=g.gl5()
d=h.a
h=h.d
if(!(f>=6))C.b.S(d,h,0)
else C.b.S(d,h,g.gcq())
h=i.r
C.b.S(h.a,h.d,0)}h=j.gcM()
g=i.x
C.b.N(g.a,g.d,h)
h=j.gcN()
g=i.y
C.b.N(g.a,g.d,h)
h=j.gcO()
g=i.z
C.b.N(g.a,g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.f0
C.b.S(v.a,v.d,p)
m=a.db.ga7()
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.d4
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbx()
H.k(q,"$isb",z,"$asb")
if(!C.a.Z(q,t)){t.scq(q.length)
C.a.h(q,t)}t=j.gbt(j)
s=i.b
h=t.gdz(t)
g=t.gdA(t)
t=t.gdB(t)
C.b.B(s.a,s.d,h,g,t)
t=j.gcY(j)
g=i.c
h=t.gb3(t)
s=t.gb4(t)
t=t.gb5()
C.b.B(g.a,g.d,h,s,t)
t=j.gcb()
s=i.d
h=t.gb3(t)
g=t.gb4(t)
t=t.gb5()
C.b.B(s.a,s.d,h,g,t)
t=j.gbu(j)
g=i.e
h=t.gb3(t)
s=t.gb4(t)
t=t.gb5()
C.b.B(g.a,g.d,h,s,t)
t=m.bA(j.gbt(j))
s=i.f
C.b.B(s.a,s.d,t.a,t.b,t.c)
t=j.gbx()
s=t.gc4(t)
if(!s){t=i.x
C.b.S(t.a,t.d,1)}else{s=i.r
h=t.gc4(t)
g=s.a
s=s.d
if(!h)C.b.S(g,s,0)
else C.b.S(g,s,t.gki(t))
t=i.x
C.b.S(t.a,t.d,0)}t=j.gae(j)
s=i.y
h=t.gc8()
g=t.gbC()
t=t.gbN()
C.b.B(s.a,s.d,h,g,t)
t=j.glN()
g=i.z
C.b.N(g.a,g.d,t)
t=j.glO()
g=i.Q
C.b.N(g.a,g.d,t)
t=j.gcM()
g=i.ch
C.b.N(g.a,g.d,t)
t=j.gcN()
g=i.cx
C.b.N(g.a,g.d,t)
t=j.gcO()
g=i.cy
C.b.N(g.a,g.d,t);++l}}}switch(x.f){case C.d:break
case C.i:break
case C.f:this.a0(q,this.Q.d)
z=this.a
v=this.Q.d
z.as(z.eM,z.bX,v)
break
case C.e:this.a0(q,this.Q.e)
z=this.a
v=this.Q.e
z.al(z.eN,z.bX,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db.ga7().d9()
a.Q=v}z=z.id
z.toString
z.ap(v.ai(0,!0))}if(x.dy){this.a0(q,this.ch)
z=this.a
v=this.ch
z.al(z.eO,z.eP,v)
switch(x.r){case C.d:break
case C.i:z=this.a
v=this.cx.f
z=z.bY
z.toString
u=v.a
t=v.b
v=v.c
C.b.B(z.a,z.d,u,t,v)
break
case C.f:this.a0(q,this.cx.d)
z=this.a
v=this.cx.d
z.as(z.eQ,z.bZ,v)
v=this.a
z=this.cx.f
v=v.bY
v.toString
u=z.a
t=z.b
z=z.c
C.b.B(v.a,v.d,u,t,z)
break
case C.e:this.a0(q,this.cx.e)
z=this.a
v=this.cx.e
z.al(z.eR,z.bZ,v)
v=this.a
z=this.cx.f
v=v.bY
v.toString
u=z.a
t=z.b
z=z.c
C.b.B(v.a,v.d,u,t,z)
break}switch(x.x){case C.d:break
case C.i:z=this.a
v=this.cy.f
z=z.c0
z.toString
u=v.a
t=v.b
v=v.c
C.b.B(z.a,z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.c_
C.b.N(v.a,v.d,t)
break
case C.f:this.a0(q,this.cy.d)
z=this.a
v=this.cy.d
z.as(z.eS,z.c1,v)
v=this.a
z=this.cy.f
v=v.c0
v.toString
u=z.a
t=z.b
z=z.c
C.b.B(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.c_
C.b.N(z.a,z.d,t)
break
case C.e:this.a0(q,this.cy.e)
z=this.a
v=this.cy.e
z.al(z.eT,z.c1,v)
v=this.a
z=this.cy.f
v=v.c0
v.toString
u=z.a
t=z.b
z=z.c
C.b.B(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.c_
C.b.N(z.a,z.d,t)
break}}z=x.y
v=z!==C.d
if(v){switch(z){case C.d:break
case C.i:z=this.a
u=this.db.f
z=z.c2
C.b.N(z.a,z.d,u)
break
case C.f:this.a0(q,this.db.d)
z=this.a
u=this.db.d
z.as(z.eU,z.c3,u)
u=this.a
z=this.db.f
u=u.c2
C.b.N(u.a,u.d,z)
break
case C.e:this.a0(q,this.db.e)
z=this.a
u=this.db.e
z.al(z.eV,z.c3,u)
u=this.a
z=this.db.f
u=u.c2
C.b.N(u.a,u.d,z)
break}z=a.a
C.b.cZ(z,3042)
C.b.jE(z,770,771)}for(o=0;o<q.length;++o)q[o].a6(a)
z=b.e
z.a6(a)
z.ah(a)
z.aP(a)
if(v)C.b.jY(a.a,3042)
for(z=a.a,o=0;o<q.length;++o){v=q[o]
if(v.c){v.c=!1
C.b.cL(z,33984+v.a)
C.b.aK(z,34067,null)}}v=this.a
v.toString
C.b.dt(z,null)
v.x.eD()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dX().au}},jl:{"^":"di;0f,a,b,0c,0d,0e",
iJ:function(a){var z,y
z=this.f
if(!$.p.$2(z,a)){y=this.f
this.f=a
z=new D.H(this.b,y,a,this,[P.t])
z.b=!0
this.a.a1(z)}},
aZ:function(){this.dK()
this.iJ(1)}},di:{"^":"a;",
a1:[function(a){this.a.a1(H.e(a,"$isx"))},function(){return this.a1(null)},"ea","$1","$0","gaY",0,2,1],
aZ:["dK",function(){}],
iL:function(a){},
iM:function(a){var z,y
z=this.e
if(z==null?a!=null:z!==a){if(z!=null)z.gu().G(0,this.gaY())
y=this.e
this.e=a
if(a!=null)a.gu().h(0,this.gaY())
z=new D.H(this.b+".textureCube",y,this.e,this,[T.cF])
z.b=!0
this.a.a1(z)}},
saw:function(a){var z=this.c
if(z!==C.e){if(z===C.d)this.aZ()
this.c=C.e
this.iL(null)
z=this.a
z.a=null
z.a1(null)}this.iM(a)}},jm:{"^":"di;a,b,0c,0d,0e"},bc:{"^":"di;0f,a,b,0c,0d,0e",
eh:function(a){var z,y
if(!J.E(this.f,a)){z=this.f
this.f=a
y=new D.H(this.b+".color",z,a,this,[V.a7])
y.b=!0
this.a.a1(y)}},
aZ:["ci",function(){this.dK()
this.eh(new V.a7(1,1,1))}],
sae:function(a,b){var z
if(this.c===C.d){this.c=C.i
this.aZ()
z=this.a
z.a=null
z.a1(null)}this.eh(b)}},jo:{"^":"bc;0ch,0f,a,b,0c,0d,0e",
iK:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.a1(z)}},
aZ:function(){this.ci()
this.iK(1)}},jp:{"^":"bc;0ch,0f,a,b,0c,0d,0e",
cG:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.a1(z)}},
aZ:function(){this.ci()
this.cG(100)}},ki:{"^":"bK;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
a1:[function(a){var z
H.e(a,"$isx")
z=this.e
if(!(z==null))z.I(a)},function(){return this.a1(null)},"ea","$1","$0","gaY",0,2,1],
fl:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.e(a.fr.k(0,"Skybox"),"$isfa")
if(z==null){y=a.a
z=new A.fa(y,"Skybox")
z.dL(y,"Skybox")
z.fa($.kk,$.kj)
z.z=z.x.k(0,"posAttr")
z.Q=H.i(z.y.k(0,"fov"),"$isa_")
z.ch=H.i(z.y.k(0,"ratio"),"$isa_")
z.cx=H.i(z.y.k(0,"boxClr"),"$isJ")
z.cy=H.i(z.y.k(0,"boxTxt"),"$isal")
z.db=H.i(z.y.k(0,"viewMat"),"$isaC")
a.es(z)}this.a=z}if(b.e==null){y=b.d.eA(new Z.fT(a.a),$.$get$aD())
y.aM($.$get$aD()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.a6(a)}y=a.d
x=a.c
w=this.a
w.a6(a)
v=this.b
u=w.Q
C.b.N(u.a,u.d,v)
v=w.ch
C.b.N(v.a,v.d,y/x)
x=this.c
w.cy.dH(x)
x=this.d
y=w.cx
C.b.B(y.a,y.d,x.a,x.b,x.c)
x=a.db.ga7().d9()
w=w.db
w.toString
w.ap(x.ai(0,!0))
y=b.e
if(y instanceof Z.d4){y.a6(a)
y.ah(a)
y.aP(a)}else b.e=null
y=this.a
y.toString
C.b.dt(a.a,null)
y.x.eD()
y=this.c
if(y!=null)y.aP(a)}},bK:{"^":"a;"}}],["","",,T,{"^":"",dv:{"^":"d1;"},cF:{"^":"dv;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
a6:function(a){var z
if(!this.c&&this.d>=6){this.c=!0
z=a.a
C.b.cL(z,33984+this.a)
C.b.aK(z,34067,this.b)}},
aP:function(a){var z
if(this.c){this.c=!1
z=a.a
C.b.cL(z,33984+this.a)
C.b.aK(z,34067,null)}}},ku:{"^":"a;a,0b,0c,0d,0e",
fe:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
z=a+"/"+d+"posx"+b
y=a+"/"+d+"posy"+b
x=a+"/"+d+"posz"+b
w=a+"/"+d+"negx"+b
v=a+"/"+d+"negy"+b
u=a+"/"+d+"negz"+b
t=this.a
s=t.createTexture()
C.b.aK(t,34067,s)
C.b.ca(t,34067,10242,10497)
C.b.ca(t,34067,10243,10497)
C.b.ca(t,34067,10241,9729)
C.b.ca(t,34067,10240,9729)
C.b.aK(t,34067,null)
r=new T.cF()
r.a=0
r.b=s
r.c=!1
r.d=0
this.aX(r,s,z,34069,!1,!1)
this.aX(r,s,w,34070,!1,!1)
this.aX(r,s,y,34071,!1,!1)
this.aX(r,s,v,34072,!1,!1)
this.aX(r,s,x,34073,!1,!1)
this.aX(r,s,u,34074,!1,!1)
return r},
kq:function(a,b){return this.fe(a,b,!1,"")},
fd:function(a){return this.fe(a,".png",!1,"")},
aX:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.ad
W.a3(z,"load",H.l(new T.kv(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
iE:function(a,b,c){var z,y,x,w
b=V.e5(b,2)
z=V.e5(a.width,2)
y=V.e5(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d6(null,null)
x.width=z
x.height=y
w=H.e(C.q.fE(x,"2d"),"$isd7")
w.imageSmoothingEnabled=!1;(w&&C.D).k_(w,a,0,0,x.width,x.height)
return P.n_(C.D.hH(w,0,0,x.width,x.height))}}},kv:{"^":"m:14;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.iE(this.b,z.c,this.c)
x=z.a
C.b.aK(x,34067,this.d)
C.b.kF(x,37440,this.e?1:0)
C.b.kU(x,this.f,0,6408,6408,5121,y)
C.b.aK(x,34067,null)
x=this.r
if(++x.d>=6){x=x.e
if(!(x==null))x.k0()}++z.e}}}],["","",,V,{"^":"",bz:{"^":"a;",
b7:function(a){return!0},
i:function(a){return"all"},
$isaG:1},aG:{"^":"a;"},eP:{"^":"a;0a",
sac:function(a){this.a=H.k(a,"$isb",[V.aG],"$asb")},
b7:["fU",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)if(z[x].b7(a))return!0
return!1}],
i:["dJ",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaG:1},aA:{"^":"eP;0a",
b7:function(a){return!this.fU(a)},
i:function(a){return"!["+this.dJ(0)+"]"}},jU:{"^":"a;0a,0b",
b7:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.bh(this.a)
y=H.bh(this.b)
return z+".."+y},
$isaG:1,
p:{
S:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.d(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.c.K(a,0)
y=C.c.K(b,0)
x=new V.jU()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},k6:{"^":"a;0a",
siI:function(a){this.a=H.k(a,"$isK",[P.n,P.N],"$asK")},
fZ:function(a){var z,y
if(a.a.length<=0)throw H.d(P.r("May not create a SetMatcher with zero characters."))
z=new H.b4(0,0,[P.n,P.N])
for(y=new H.dg(a,a.gn(a),0,[H.a5(a,"Y",0)]);y.E();)z.t(0,y.d,!0)
this.siI(z)},
b7:function(a){return this.a.bO(a)},
i:function(a){return P.cd(this.a.gaD(),0,null)},
$isaG:1,
p:{
w:function(a){var z=new V.k6()
z.fZ(a)
return z}}},dq:{"^":"a;a,b,0c,0d",
sj2:function(a){this.c=H.k(a,"$isb",[V.dy],"$asb")},
l:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dy(this.a.j(0,b))
w.sac(H.c([],[V.aG]))
w.c=!1
C.a.h(this.c,w)
return w},
ka:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.b7(a))return w}return},
i:function(a){return this.b}},fn:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.e7(this.b,"\n","\\n")
y=H.e7(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},dx:{"^":"a;a,b,0c",
six:function(a){var z=P.h
this.c=H.k(a,"$isK",[z,z],"$asK")},
aO:function(a,b,c){var z,y,x
H.k(c,"$isb",[P.h],"$asb")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.A)(c),++y){x=c[y]
this.c.t(0,x,b)}},
i:function(a){return this.b}},kA:{"^":"a;0a,0b,0c",
siU:function(a){this.a=H.k(a,"$isK",[P.h,V.dq],"$asK")},
siZ:function(a){this.b=H.k(a,"$isK",[P.h,V.dx],"$asK")},
j:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.dq(this,b)
z.sj2(H.c([],[V.dy]))
z.d=null
this.a.t(0,b,z)}return z},
R:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.dx(this,a)
y=P.h
z.six(new H.b4(0,0,[y,y]))
this.b.t(0,a,z)}return z},
fq:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fn])
y=this.c
x=[P.n]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.K(a,t)
r=y.ka(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cd(w,0,null)
throw H.d(P.r("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cd(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.fn(o==null?p.b:o,q,t)}++t}}},
p:{
cG:function(){var z,y
z=new V.kA()
y=P.h
z.siU(new H.b4(0,0,[y,V.dq]))
z.siZ(new H.b4(0,0,[y,V.dx]))
z.c=null
return z}}},dy:{"^":"eP;b,0c,0a",
i:function(a){return this.b.b+": "+this.dJ(0)}}}],["","",,X,{"^":"",cq:{"^":"a;",$isaJ:1},iF:{"^":"du;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
a6:function(a){var z,y,x,w,v,u,t,s
z=a.a
C.b.jD(z,36160,null)
C.b.cZ(z,2884)
C.b.cZ(z,2929)
C.b.jX(z,513)
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
v=w.a
if(typeof y!=="number")return H.B(y)
u=C.k.av(v*y)
v=w.b
if(typeof x!=="number")return H.B(x)
t=C.k.av(v*x)
v=C.k.av(w.c*y)
a.c=v
w=C.k.av(w.d*x)
a.d=w
C.b.l1(z,u,t,v,w)
C.b.jI(z,this.c)
if(this.b){w=this.a
C.b.jH(z,w.a,w.b,w.c,w.d)
s=16640}else s=256
C.b.jG(z,s)},
p:{
db:function(a,b,c,d,e,f,g){var z,y
z=new X.iF()
y=new V.ao(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=$.f6
if(y==null){y=V.f5(0,0,1,1)
$.f6=y}z.r=y
return z}}},iO:{"^":"a;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
a6:function(a){var z
a.cy.c7(V.bd())
z=V.bd()
a.db.c7(z)},
aP:function(a){a.cy.aN()
a.db.aN()},
$isaJ:1,
$iscq:1},jB:{"^":"a;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
bf:[function(a){var z
H.e(a,"$isx")
z=this.f
if(!(z==null))z.I(a)},function(){return this.bf(null)},"l4","$1","$0","ghg",0,2,1],
a6:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aH(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.c7(s)
z=$.f_
if(z==null){z=V.dn()
y=V.fL()
x=$.fH
if(x==null){x=new V.z(0,0,-1)
$.fH=x}x=V.eS(z,y,x)
$.f_=x
r=x}else r=z
z=this.b
if(z!=null){q=z.bc(a,this)
if(q!=null)r=q.v(0,r)}a.db.c7(r)},
aP:function(a){a.cy.aN()
a.db.aN()},
$isaJ:1,
$iscq:1,
p:{
eZ:function(a,b,c,d,e){var z,y,x
z=new X.jB()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gu().h(0,z.ghg())
x=new D.H("mover",y,z.b,z,[U.ai])
x.b=!0
z.bf(x)}x=z.c
if(!$.p.$2(x,b)){y=z.c
z.c=b
x=new D.H("fov",y,b,z,[P.t])
x.b=!0
z.bf(x)}x=z.d
if(!$.p.$2(x,d)){y=z.d
z.d=d
x=new D.H("near",y,d,z,[P.t])
x.b=!0
z.bf(x)}x=z.e
if(!$.p.$2(x,a)){y=z.e
z.e=a
x=new D.H("far",y,a,z,[P.t])
x.b=!0
z.bf(x)}return z}}},du:{"^":"a;"}}],["","",,V,{"^":"",
nI:function(a){P.kz(C.V,new V.nJ(a))},
b0:{"^":"a;0d",
scr:function(a){this.d=H.k(a,"$isb",[[P.b,W.b2]],"$asb")},
bE:function(a){this.b=new P.iM(C.Y)
this.c=null
this.scr(H.c([],[[P.b,W.b2]]))},
O:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.b2]))
y=a.split("\n")
for(z=y.length,x=[W.b2],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.D(u)
s=this.b.ht(u,0,u.length)
r=s==null?u:s
C.j.fN(t,H.e7(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaE(this.d),t)}},
fj:function(a){var z,y,x,w
H.k(a,"$isb",[P.h],"$asb")
this.scr(H.c([],[[P.b,W.b2]]))
z=C.a.l(a,"\n")
y=this.c
if(y==null){y=this.bP()
this.c=y}for(y=y.fq(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)this.c6(y[w])}},
nJ:{"^":"m:52;a",
$1:function(a){H.e(a,"$isbi")
P.e6(C.k.fp(this.a.gkg(),2)+" fps")}},
ih:{"^":"b0;a,0b,0c,0d",
c6:function(a){switch(a.a){case"Class":this.O(a.b,"#551")
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
bP:function(){var z,y,x,w
z=V.cG()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
x=V.S("a","z")
C.a.h(y.a,x)
x=V.S("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=V.S("0","9")
C.a.h(x.a,y)
y=V.S("a","z")
C.a.h(x.a,y)
y=V.S("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Int")
x=V.S("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").l(0,"Int")
y=V.S("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").l(0,"FloatDot")
x=V.w(new H.v("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").l(0,"Float")
y=V.S("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").l(0,"Float")
x=V.S("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Sym")
y=V.w(new H.v("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").l(0,"Sym")
x=V.w(new H.v("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"OpenDoubleStr")
y=V.w(new H.v('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
x=V.w(new H.v('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
y=V.w(new H.v("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
x=V.w(new H.v('"'))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.bz())
x=z.j(0,"Start").l(0,"OpenSingleStr")
y=V.w(new H.v("'"))
C.a.h(x.a,y)
y=z.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
x=V.w(new H.v("'"))
C.a.h(y.a,x)
x=z.j(0,"OpenSingleStr").l(0,"EscSingleStr")
y=V.w(new H.v("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscSingleStr").l(0,"OpenSingleStr")
x=V.w(new H.v("'"))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.bz())
x=z.j(0,"Start").l(0,"Slash")
y=V.w(new H.v("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"Comment")
x=V.w(new H.v("/"))
C.a.h(y.a,x)
x=z.j(0,"Comment").l(0,"EndComment")
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").l(0,"Comment")
x=new V.aA()
w=[V.aG]
x.sac(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"MLComment")
x=V.w(new H.v("*"))
C.a.h(y.a,x)
x=z.j(0,"MLComment").l(0,"MLCStar")
y=V.w(new H.v("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").l(0,"MLComment")
x=new V.aA()
x.sac(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").l(0,"EndComment")
x=V.w(new H.v("/"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Whitespace")
y=V.w(new H.v(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Whitespace").l(0,"Whitespace")
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
y.aO(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aO(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aO(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iG:{"^":"b0;a,0b,0c,0d",
c6:function(a){switch(a.a){case"Builtin":this.O(a.b,"#411")
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
bP:function(){var z,y,x,w
z=V.cG()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
x=V.S("a","z")
C.a.h(y.a,x)
x=V.S("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=V.S("0","9")
C.a.h(x.a,y)
y=V.S("a","z")
C.a.h(x.a,y)
y=V.S("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Int")
x=V.S("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").l(0,"Int")
y=V.S("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").l(0,"FloatDot")
x=V.w(new H.v("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").l(0,"Float")
y=V.S("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").l(0,"Float")
x=V.S("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Sym")
y=V.w(new H.v("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").l(0,"Sym")
x=V.w(new H.v("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Slash")
y=V.w(new H.v("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"Comment")
x=V.w(new H.v("/"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Slash").l(0,"Sym").a,new V.bz())
x=z.j(0,"Comment").l(0,"EndComment")
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").l(0,"Comment")
x=new V.aA()
w=[V.aG]
x.sac(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Preprocess")
x=V.w(new H.v("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").l(0,"Preprocess")
y=new V.aA()
y.sac(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("\n"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").l(0,"EndPreprocess")
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Whitespace")
x=V.w(new H.v(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Whitespace").l(0,"Whitespace")
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
x.aO(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aO(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aO(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iH:{"^":"b0;a,0b,0c,0d",
c6:function(a){switch(a.a){case"Attr":this.O(a.b,"#911")
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
bP:function(){var z,y,x
z=V.cG()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
x=V.S("a","z")
C.a.h(y.a,x)
x=V.S("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=V.S("0","9")
C.a.h(x.a,y)
y=V.S("a","z")
C.a.h(x.a,y)
y=V.S("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Id").l(0,"Attr")
x=V.w(new H.v("="))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Sym")
x=V.w(new H.v("</\\-!>="))
C.a.h(y.a,x)
x=z.j(0,"Sym").l(0,"Sym")
y=V.w(new H.v("</\\-!>="))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"OpenStr")
x=V.w(new H.v('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenStr").l(0,"CloseStr")
y=V.w(new H.v('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenStr").l(0,"EscStr")
x=V.w(new H.v("\\"))
C.a.h(y.a,x)
x=z.j(0,"EscStr").l(0,"OpenStr")
y=V.w(new H.v('"'))
C.a.h(x.a,y)
C.a.h(z.j(0,"OpenStr").l(0,"OpenStr").a,new V.bz())
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.bz())
y=z.j(0,"Other").l(0,"Other")
x=new V.aA()
x.sac(H.c([],[V.aG]))
C.a.h(y.a,x)
y=V.w(new H.v('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.S("a","z")
C.a.h(x.a,y)
y=V.S("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.R("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.R("String")
y=z.j(0,"Id")
x=y.a.R("Id")
y.d=x
x.aO(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.j(0,"Attr")
x.d=x.a.R("Attr")
x=z.j(0,"Other")
x.d=x.a.R("Other")
return z}},
jD:{"^":"b0;a,0b,0c,0d",
fj:function(a){H.k(a,"$isb",[P.h],"$asb")
this.scr(H.c([],[[P.b,W.b2]]))
this.O(C.a.l(a,"\n"),"#111")},
c6:function(a){},
bP:function(){return}},
jR:{"^":"a;a,b,0c",
bK:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fC().gdk().k(0,H.j(z))
if(y==null)if(d){c.$0()
this.em(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.ea(this.c).h(0,v)
t=W.iQ("radio")
t.checked=x
t.name=z
z=W.ad
W.a3(t,"change",H.l(new V.jS(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
C.G.H(v,t)
s=w.createElement("span")
s.textContent=b
C.G.H(v,s)
J.ea(this.c).h(0,w.createElement("br"))},
aA:function(a,b,c){return this.bK(a,b,c,!1)},
em:function(a){var z,y,x,w,v
z=P.fC()
y=P.h
x=P.j7(z.gdk(),y,y)
x.t(0,this.a,a)
w=z.fm(0,x)
y=window.history
v=w.i(0)
y.toString;(y&&C.X).iz(y,new P.m3([],[]).du(""),"",v)}},
jS:{"^":"m:14;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.em(this.d)}}},
kc:{"^":"a;0a,0b",
h_:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.p).H(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.p.H(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.j.H(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.j.H(v,u)}t=z.createElement("div")
this.a=t
C.j.H(v,t)
this.b=null
t=W.ad
W.a3(z,"scroll",H.l(new V.kf(x),{func:1,ret:-1,args:[t]}),!1,t)},
er:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.k(a,"$isb",[P.h],"$asb")
this.iP()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.fq(C.a.kn(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.j.H(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.j.H(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.j.H(y,t)
break
case"Link":s=u.b
if(H.hH(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=H.D(r[1])
q.textContent=H.D(r[0])
C.j.H(y,q)}else{p=P.ch(C.J,s,C.m,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.j(p)
q.textContent=s
C.j.H(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.j.H(y,t)
break}}C.j.H(this.a,y)},
fD:function(a){var z,y,x,w
z=new V.ih("dart")
z.bE("dart")
y=new V.iG("glsl")
y.bE("glsl")
x=new V.iH("html")
x.bE("html")
w=C.a.kc(H.c([z,y,x],[V.b0]),new V.kg(a))
if(w!=null)return w
z=new V.jD("plain")
z.bE("plain")
return z},
eo:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.k(a2,"$isb",[P.h],"$asb")
z=H.c([],[P.n])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.bX(w).a9(w,"+")){C.a.t(a2,x,C.c.ay(w,1))
C.a.h(z,1)
y=!0}else if(C.c.a9(w,"-")){C.a.t(a2,x,C.c.ay(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.fD(a0)
v.fj(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.j.H(t,s)
C.j.H(this.a,t)
r=P.ch(C.J,a,C.m,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.ec(null)
n.href="#"+H.j(r)
n.textContent=a
C.j.H(o,n)
C.x.H(p,o)
C.n.H(q,p)
C.o.H(s,q)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.A)(w),++e)C.x.H(f,w[e])
C.n.H(j,i)
C.n.H(j,h)
C.n.H(j,f)
C.o.H(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.A)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gT(w);b.E();)C.x.H(h,b.gL())
C.n.H(j,i)
C.n.H(j,h)
C.o.H(s,j)}},
ju:function(a){var z,y,x,w,v,u,t
H.k(a,"$isb",[P.h],"$asb")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
C.j.H(this.a,y)
w=C.o.hK(y,-1)
x=H.e((w&&C.n).e5(w,-1),"$iscE").style
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
t=H.e(C.n.e5(w,-1),"$iscE")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.x).H(t,u)}},
iP:function(){var z,y,x,w
if(this.b!=null)return
z=V.cG()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Bold")
x=V.w(new H.v("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").l(0,"Bold")
x=new V.aA()
w=[V.aG]
x.sac(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("*"))
C.a.h(x.a,y)
y=z.j(0,"Bold").l(0,"BoldEnd")
x=V.w(new H.v("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Italic")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Italic").l(0,"Italic")
x=new V.aA()
x.sac(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=z.j(0,"Italic").l(0,"ItalicEnd")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Code")
x=V.w(new H.v("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Code").l(0,"Code")
x=new V.aA()
x.sac(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("`"))
C.a.h(x.a,y)
y=z.j(0,"Code").l(0,"CodeEnd")
x=V.w(new H.v("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"LinkHead")
x=V.w(new H.v("["))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"LinkHead").l(0,"LinkTail")
x=V.w(new H.v("|"))
C.a.h(y.a,x)
x=z.j(0,"LinkHead").l(0,"LinkEnd")
y=V.w(new H.v("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkHead").l(0,"LinkHead")
y=new V.aA()
y.sac(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").l(0,"LinkEnd")
y=V.w(new H.v("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").l(0,"LinkTail")
y=new V.aA()
y.sac(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.bz())
x=z.j(0,"Other").l(0,"Other")
y=new V.aA()
y.sac(H.c([],w))
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
p:{
kd:function(a,b){var z=new V.kc()
z.h_(a,!0)
return z}}},
kf:{"^":"m:14;a",
$1:function(a){P.fl(C.y,new V.ke(this.a))}},
ke:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.k.av(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}},
kg:{"^":"m:53;a",
$1:function(a){return H.e(a,"$isb0").a===this.a}}}],["","",,T,{"^":"",
hC:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z=V.kd("Test 017",!0)
y=W.d6(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.j.H(z.a,y)
x=[P.h]
z.er(H.c(["A test of the Material Lighting shader with solid color directional light, cube mapped textures, and a reflection map. The specular map is also used to define where reflections are painted."],x))
z.ju(H.c(["shapes"],x))
z.er(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=C.z.dC(x,"testCanvas")
if(w==null)H.q(P.r("Failed to find an element with the identifier, testCanvas."))
v=E.kx(w,!0,!0,!0,!1)
u=E.eA(null,!0,null,"",null,null)
u.sab(0,F.hG(8,null,1,8))
t=X.db(!0,!0,!1,null,2000,null,0)
if(t.b){t.b=!1
s=new D.H("clearColor",!0,!1,t,[P.N])
s.b=!0
r=t.x
if(!(r==null))r.I(s)}q=v.f.kq("../resources/maskonaive",".jpg")
p=v.f.fd("../resources/earthSpecular")
o=v.f.fd("../resources/earthColor")
n=new O.jj()
n.shn(O.d8(V.aq))
n.e.be(n.ghX(),n.ghY())
s=new O.bc(n,"emission")
s.c=C.d
s.f=new V.a7(0,0,0)
n.f=s
s=new O.bc(n,"ambient")
s.c=C.d
s.f=new V.a7(0,0,0)
n.r=s
s=new O.bc(n,"diffuse")
s.c=C.d
s.f=new V.a7(0,0,0)
n.x=s
s=new O.bc(n,"invDiffuse")
s.c=C.d
s.f=new V.a7(0,0,0)
n.y=s
s=new O.jp(n,"specular")
s.c=C.d
s.f=new V.a7(0,0,0)
s.ch=100
n.z=s
s=new O.jm(n,"bump")
s.c=C.d
n.Q=s
n.ch=null
s=new O.bc(n,"reflect")
s.c=C.d
s.f=new V.a7(0,0,0)
n.cx=s
s=new O.jo(n,"refract")
s.c=C.d
s.f=new V.a7(0,0,0)
s.ch=1
n.cy=s
s=new O.jl(n,"alpha")
s.c=C.d
s.f=1
n.db=s
s=new D.j_()
s.bF(D.a9)
s.shx(H.c([],[D.cs]))
s.sip(H.c([],[D.f0]))
s.siT(H.c([],[D.fb]))
s.sj3(H.c([],[D.fh]))
s.sj4(H.c([],[D.fi]))
s.sj5(H.c([],[D.fj]))
s.Q=null
s.ch=null
s.dG(s.ghW(),s.gig(),s.gii())
n.dx=s
r=s.Q
if(r==null){r=D.F()
s.Q=r
s=r}else s=r
s.h(0,n.giC())
s=n.dx
r=s.ch
if(r==null){r=D.F()
s.ch=r
s=r}else s=r
r=n.gaY()
s.h(0,r)
n.dy=null
s=n.dx
m=V.fL()
l=U.eo(V.eS(V.dn(),m,new V.z(-1,-1,-1)))
k=new V.a7(1,1,1)
j=new D.cs()
j.c=new V.a7(1,1,1)
j.a=V.fM()
i=j.b
j.b=l
l.gu().h(0,j.gh6())
l=new D.H("mover",i,j.b,j,[U.ai])
l.b=!0
j.aS(l)
if(!j.c.A(0,k)){i=j.c
j.c=k
l=new D.H("color",i,k,j,[V.a7])
l.b=!0
j.aS(l)}s.h(0,j)
s=n.r
s.sae(0,new V.a7(0.5,0.5,0.5))
s=n.x
s.sae(0,new V.a7(0.5,0.5,0.5))
n.r.saw(o)
n.x.saw(o)
n.z.saw(p)
s=n.ch
if(s!==q){if(s!=null)s.gu().G(0,r)
i=n.ch
n.ch=q
q.gu().h(0,r)
s=new D.H("environment",i,n.ch,n,[T.cF])
s.b=!0
n.a1(s)}n.cx.saw(p)
s=n.cx
s.sae(0,new V.a7(0.5,0.5,0.5))
s=n.z
if(s.c===C.d){s.c=C.i
s.ci()
s.cG(100)
r=s.a
r.a=null
r.a1(null)}s.cG(10)
h=new U.eC()
h.bF(U.ai)
h.be(h.ghV(),h.gih())
h.e=null
h.f=V.bd()
h.r=0
s=v.r
r=new U.l1()
l=U.d9()
l.sdw(0,!0)
l.sdc(6.283185307179586)
l.sde(0)
l.sa3(0,0)
l.sdd(100)
l.sY(0)
l.scX(0.5)
r.b=l
j=r.gaT()
l.gu().h(0,j)
l=U.d9()
l.sdw(0,!0)
l.sdc(6.283185307179586)
l.sde(0)
l.sa3(0,0)
l.sdd(100)
l.sY(0)
l.scX(0.5)
r.c=l
l.gu().h(0,j)
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
g=new X.aI(!1,!1,!1)
i=r.d
r.d=g
l=[X.aI]
j=new D.H("modifiers",i,g,r,l)
j.b=!0
r.W(j)
j=r.f
if(j!==!1){r.f=!1
j=new D.H("invertX",j,!1,r,[P.N])
j.b=!0
r.W(j)}j=r.r
if(j!==!1){r.r=!1
j=new D.H("invertY",j,!1,r,[P.N])
j.b=!0
r.W(j)}r.bl(s)
h.h(0,r)
s=v.r
r=new U.l0()
j=U.d9()
j.sdw(0,!0)
j.sdc(6.283185307179586)
j.sde(0)
j.sa3(0,0)
j.sdd(100)
j.sY(0)
j.scX(0.2)
r.b=j
j.gu().h(0,r.gaT())
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
g=new X.aI(!0,!1,!1)
i=r.c
r.c=g
j=new D.H("modifiers",i,g,r,l)
j.b=!0
r.W(j)
r.bl(s)
h.h(0,r)
s=v.r
r=new U.l2()
r.c=0.01
r.d=0
r.e=0
g=new X.aI(!1,!1,!1)
r.b=g
l=new D.H("modifiers",null,g,r,l)
l.b=!0
r.W(l)
r.bl(s)
h.h(0,r)
h.h(0,U.eo(V.aH(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
f=X.eZ(2000,1.0471975511965976,h,0.1,null)
e=new M.id()
e.sbm(null)
e.sbv(0,null)
e.sbw(null)
s=E.eA(null,!0,null,"",null,null)
d=F.cc()
r=d.a
l=new V.z(-1,-1,1)
l=l.q(0,Math.sqrt(l.C(l)))
c=r.bL(new V.aR(1,2,4,6),new V.ao(1,0,0,1),new V.Q(-1,-1,0),new V.Z(0,1),l,null)
r=d.a
l=new V.z(1,-1,1)
l=l.q(0,Math.sqrt(l.C(l)))
b=r.bL(new V.aR(0,3,4,6),new V.ao(0,0,1,1),new V.Q(1,-1,0),new V.Z(1,1),l,null)
r=d.a
l=new V.z(1,1,1)
l=l.q(0,Math.sqrt(l.C(l)))
a=r.bL(new V.aR(0,2,5,6),new V.ao(0,1,0,1),new V.Q(1,1,0),new V.Z(1,0),l,null)
r=d.a
l=V.aL()
j=new V.z(-1,1,1)
j=j.q(0,Math.sqrt(j.C(j)))
a0=r.bL(new V.aR(0,2,4,7),new V.ao(1,1,0,1),new V.Q(-1,1,0),l,j,null)
d.d.ep(H.c([c,b,a,a0],[F.aa]))
d.am()
s.sab(0,d)
e.d=s
e.e=null
s=new O.ki()
s.b=1.0471975511965976
s.d=new V.a7(1,1,1)
i=s.c
s.c=q
q.gu().h(0,s.gaY())
r=new D.H("boxTexture",i,s.c,s,[T.cF])
r.b=!0
s.a1(r)
e.sbw(s)
e.sbv(0,t)
e.sbm(f)
a1=new M.iv()
a1.shr(0,O.d8(E.ax))
a1.d.be(a1.gi_(),a1.gi0())
a1.e=null
a1.f=null
a1.r=null
a1.x=null
a1.sbm(null)
a1.sbv(0,null)
a1.sbw(null)
a1.sbm(f)
a1.sbw(n)
a1.sbv(0,t)
a1.d.h(0,u)
s=M.aM
r=H.c([e,a1],[s])
l=new M.i8()
l.bF(s)
l.e=!1
l.f=null
l.be(l.gij(),l.gik())
l.ad(0,r)
s=v.d
if(s!==l){if(s!=null)s.gu().G(0,v.gdN())
v.d=l
l.gu().h(0,v.gdN())
v.h2()}s=new V.jR("shapes",!0)
x=C.z.dC(x,"shapes")
s.c=x
if(x==null)H.q("Failed to find shapes for RadioGroup")
s.aA(0,"Cube",new T.ns(u))
s.aA(0,"Cuboid",new T.nt(u))
s.aA(0,"Cylinder",new T.nu(u))
s.aA(0,"Cone",new T.nv(u))
s.aA(0,"LatLonSphere",new T.nw(u))
s.aA(0,"IsoSphere",new T.nx(u))
s.bK(0,"Sphere",new T.ny(u),!0)
s.aA(0,"Toroid",new T.nz(u))
s.aA(0,"Knot",new T.nA(u))
x=v.z
if(x==null){x=D.F()
v.z=x}s={func:1,ret:-1,args:[D.x]}
r=H.l(new T.nB(z,n),s)
if(x.b==null)x.sbi(H.c([],[s]))
x=x.b;(x&&C.a).h(x,r)
V.nI(v)},
ns:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.e_(1,null,null,1))}},
nt:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.e_(8,null,null,8))}},
nu:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.hu(1,!0,!0,1,40,1))}},
nv:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.hu(1,!0,!1,1,40,0))}},
nw:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.np(10,20))}},
nx:{"^":"m:0;a",
$0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.cc()
y=Math.sqrt(5)/2+0.5
x=F.ag(z,new V.z(-1,y,0))
w=F.ag(z,new V.z(1,y,0))
v=-y
u=F.ag(z,new V.z(-1,v,0))
t=F.ag(z,new V.z(1,v,0))
s=F.ag(z,new V.z(0,-1,v))
r=F.ag(z,new V.z(0,1,v))
q=F.ag(z,new V.z(0,-1,y))
p=F.ag(z,new V.z(0,1,y))
o=F.ag(z,new V.z(y,0,1))
n=F.ag(z,new V.z(y,0,-1))
m=F.ag(z,new V.z(v,0,1))
l=F.ag(z,new V.z(v,0,-1))
F.U(z,x,l,r,2)
F.U(z,x,r,w,2)
F.U(z,x,w,p,2)
F.U(z,x,p,m,2)
F.U(z,x,m,l,2)
F.U(z,w,r,n,2)
F.U(z,r,l,s,2)
F.U(z,l,m,u,2)
F.U(z,m,p,q,2)
F.U(z,p,w,o,2)
F.U(z,t,n,s,2)
F.U(z,t,s,u,2)
F.U(z,t,u,q,2)
F.U(z,t,q,o,2)
F.U(z,t,o,n,2)
F.U(z,s,n,r,2)
F.U(z,u,s,l,2)
F.U(z,q,u,m,2)
F.U(z,o,q,p,2)
F.U(z,n,o,w,2)
z.ff(new F.dL(),new F.lf())
this.a.sab(0,z)}},
ny:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.hG(6,null,1,6))}},
nz:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.nN(30,1,15,0.5))}},
nA:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.nn(120,1,2,12,0.3,3))}},
nB:{"^":"m:8;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isx")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.eo("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.eo("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.O=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eH.prototype
return J.eG.prototype}if(typeof a=="string")return J.c7.prototype
if(a==null)return J.eI.prototype
if(typeof a=="boolean")return J.iU.prototype
if(a.constructor==Array)return J.bb.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c8.prototype
return a}if(a instanceof P.a)return a
return J.cS(a)}
J.bv=function(a){if(typeof a=="string")return J.c7.prototype
if(a==null)return a
if(a.constructor==Array)return J.bb.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c8.prototype
return a}if(a instanceof P.a)return a
return J.cS(a)}
J.e2=function(a){if(a==null)return a
if(a.constructor==Array)return J.bb.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c8.prototype
return a}if(a instanceof P.a)return a
return J.cS(a)}
J.na=function(a){if(typeof a=="number")return J.c6.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ce.prototype
return a}
J.nb=function(a){if(typeof a=="number")return J.c6.prototype
if(typeof a=="string")return J.c7.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ce.prototype
return a}
J.bX=function(a){if(typeof a=="string")return J.c7.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ce.prototype
return a}
J.a1=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c8.prototype
return a}if(a instanceof P.a)return a
return J.cS(a)}
J.E=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).A(a,b)}
J.hJ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.na(a).U(a,b)}
J.e8=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nb(a).v(a,b)}
J.hK=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nm(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bv(a).k(a,b)}
J.hL=function(a,b,c,d){return J.a1(a).hj(a,b,c,d)}
J.hM=function(a,b){return J.bX(a).K(a,b)}
J.cm=function(a,b){return J.a1(a).iu(a,b)}
J.cY=function(a,b,c){return J.a1(a).iy(a,b,c)}
J.e9=function(a,b){return J.a1(a).H(a,b)}
J.hN=function(a,b){return J.bX(a).a5(a,b)}
J.cZ=function(a,b,c){return J.bv(a).jL(a,b,c)}
J.cn=function(a,b){return J.e2(a).af(a,b)}
J.hO=function(a,b,c,d){return J.a1(a).k7(a,b,c,d)}
J.hP=function(a){return J.a1(a).gjB(a)}
J.ea=function(a){return J.a1(a).gcU(a)}
J.bY=function(a){return J.O(a).ga_(a)}
J.b8=function(a){return J.e2(a).gT(a)}
J.av=function(a){return J.bv(a).gn(a)}
J.hQ=function(a){return J.a1(a).gkG(a)}
J.hR=function(a){return J.a1(a).gkT(a)}
J.d_=function(a,b){return J.a1(a).bd(a,b)}
J.eb=function(a){return J.e2(a).kI(a)}
J.hS=function(a,b){return J.a1(a).kM(a,b)}
J.hT=function(a,b){return J.a1(a).sl_(a,b)}
J.hU=function(a,b,c){return J.a1(a).fM(a,b,c)}
J.hV=function(a,b,c){return J.bX(a).w(a,b,c)}
J.hW=function(a){return J.bX(a).kZ(a)}
J.ah=function(a){return J.O(a).i(a)}
I.ab=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.co.prototype
C.q=W.d5.prototype
C.D=W.d7.prototype
C.j=W.b2.prototype
C.U=W.im.prototype
C.W=W.iI.prototype
C.X=W.iJ.prototype
C.z=W.iL.prototype
C.Z=J.I.prototype
C.a=J.bb.prototype
C.a_=J.eG.prototype
C.h=J.eH.prototype
C.r=J.eI.prototype
C.k=J.c6.prototype
C.c=J.c7.prototype
C.a6=J.c8.prototype
C.G=W.iZ.prototype
C.ac=W.jv.prototype
C.M=J.jC.prototype
C.N=W.jT.prototype
C.b=P.dp.prototype
C.x=W.cE.prototype
C.o=W.kr.prototype
C.n=W.ks.prototype
C.C=J.ce.prototype
C.O=W.bO.prototype
C.P=W.lm.prototype
C.R=new P.i_(!1)
C.Q=new P.hZ(C.R)
C.S=new P.jA()
C.T=new P.la()
C.l=new P.lU()
C.d=new A.cr(0,"ColorSourceType.None")
C.i=new A.cr(1,"ColorSourceType.Solid")
C.f=new A.cr(2,"ColorSourceType.Texture2D")
C.e=new A.cr(3,"ColorSourceType.TextureCube")
C.y=new P.bB(0)
C.V=new P.bB(5e6)
C.Y=new P.iN("element",!0,!1,!1,!1)
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
C.H=H.c(I.ab([127,2047,65535,1114111]),[P.n])
C.t=H.c(I.ab([0,0,32776,33792,1,10240,0,0]),[P.n])
C.a7=H.c(I.ab(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.u=H.c(I.ab([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.v=H.c(I.ab([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.a8=H.c(I.ab(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.I=H.c(I.ab([]),[P.h])
C.a9=H.c(I.ab([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.J=H.c(I.ab([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.w=H.c(I.ab([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.K=H.c(I.ab([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.aa=H.c(I.ab([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.L=H.c(I.ab([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.A=H.c(I.ab(["bind","if","ref","repeat","syntax"]),[P.h])
C.B=H.c(I.ab(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.ab=new H.ic(0,{},C.I,[P.h,P.h])
C.m=new P.l3(!1)
$.aE=0
$.bA=null
$.eg=null
$.dT=!1
$.hz=null
$.hr=null
$.hF=null
$.cR=null
$.cU=null
$.e3=null
$.bq=null
$.bT=null
$.bU=null
$.dU=!1
$.T=C.l
$.aQ=null
$.da=null
$.ez=null
$.ey=null
$.eu=null
$.et=null
$.es=null
$.er=null
$.p=V.jq()
$.eT=null
$.f1=null
$.bI=null
$.f6=null
$.fG=null
$.fK=null
$.fI=null
$.fJ=null
$.cJ=null
$.fH=null
$.fN=null
$.kk="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.kj="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.f_=null
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
I.$lazy(y,x,w)}})(["eq","$get$eq",function(){return H.hy("_$dart_dartClosure")},"dd","$get$dd",function(){return H.hy("_$dart_js")},"fp","$get$fp",function(){return H.aN(H.cH({
toString:function(){return"$receiver$"}}))},"fq","$get$fq",function(){return H.aN(H.cH({$method$:null,
toString:function(){return"$receiver$"}}))},"fr","$get$fr",function(){return H.aN(H.cH(null))},"fs","$get$fs",function(){return H.aN(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fw","$get$fw",function(){return H.aN(H.cH(void 0))},"fx","$get$fx",function(){return H.aN(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fu","$get$fu",function(){return H.aN(H.fv(null))},"ft","$get$ft",function(){return H.aN(function(){try{null.$method$}catch(z){return z.message}}())},"fz","$get$fz",function(){return H.aN(H.fv(void 0))},"fy","$get$fy",function(){return H.aN(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dO","$get$dO",function(){return P.ln()},"bV","$get$bV",function(){return[]},"fF","$get$fF",function(){return P.l7()},"fW","$get$fW",function(){return H.jt(H.bp(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"hf","$get$hf",function(){return P.jY("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hn","$get$hn",function(){return P.mH()},"ep","$get$ep",function(){return{}},"h_","$get$h_",function(){return P.eM(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dP","$get$dP",function(){return P.eL(P.h,P.c1)},"fR","$get$fR",function(){return Z.as(0)},"fP","$get$fP",function(){return Z.as(511)},"aD","$get$aD",function(){return Z.as(1)},"aW","$get$aW",function(){return Z.as(2)},"aV","$get$aV",function(){return Z.as(4)},"aX","$get$aX",function(){return Z.as(8)},"aY","$get$aY",function(){return Z.as(16)},"bM","$get$bM",function(){return Z.as(32)},"bN","$get$bN",function(){return Z.as(64)},"fQ","$get$fQ",function(){return Z.as(96)},"bn","$get$bn",function(){return Z.as(128)},"aU","$get$aU",function(){return Z.as(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:-1},{func:1,ret:-1,args:[W.az]},{func:1,ret:P.G,args:[F.aa,P.t,P.t]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.n,[P.o,E.ax]]},{func:1,ret:P.G,args:[D.x]},{func:1,ret:P.G,args:[F.ae]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.ad]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:P.t},{func:1,ret:P.G,args:[W.ad]},{func:1,ret:P.t,args:[P.t]},{func:1,ret:-1,args:[P.n,[P.o,V.aq]]},{func:1,ret:P.h,args:[P.h]},{func:1,args:[,]},{func:1,ret:P.N,args:[W.C]},{func:1,ret:P.N,args:[W.aK]},{func:1,ret:P.N,args:[P.h]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:-1,args:[W.bF]},{func:1,ret:P.G,args:[,]},{func:1,ret:-1,args:[P.n,[P.o,D.a9]]},{func:1,ret:P.N,args:[W.R,P.h,P.h,W.cg]},{func:1,ret:-1,args:[P.n,[P.o,U.ai]]},{func:1,ret:-1,args:[P.n,[P.o,M.aM]]},{func:1,ret:P.h,args:[P.n]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:V.Q,args:[P.t]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.P,args:[,,]},{func:1,ret:P.G,args:[,],opt:[,]},{func:1,ret:[P.aZ,,],args:[,]},{func:1,ret:P.G,args:[P.h]},{func:1,ret:P.N,args:[P.t,P.t]},{func:1,args:[W.ad]},{func:1,ret:P.N,args:[[P.o,D.a9]]},{func:1,ret:P.G,args:[P.h,,]},{func:1,ret:P.P,args:[P.n]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,args:[,P.h]},{func:1,ret:-1,args:[W.bO]},{func:1,args:[P.h]},{func:1,ret:[P.K,P.h,P.h],args:[[P.K,P.h,P.h],P.h]},{func:1,ret:P.G,args:[P.am]},{func:1,ret:-1,args:[P.h,P.n]},{func:1,ret:P.G,args:[P.bi]},{func:1,ret:P.N,args:[V.b0]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:P.n,args:[[P.b,P.n],P.n]},{func:1,ret:W.R,args:[W.C]}]
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
if(x==y)H.nM(d||a)
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
Isolate.ab=a.ab
Isolate.e0=a.e0
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
if(typeof dartMainRunner==="function")dartMainRunner(T.hC,[])
else T.hC([])})})()
//# sourceMappingURL=test.dart.js.map
