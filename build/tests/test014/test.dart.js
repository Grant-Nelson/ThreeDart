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
var dart=[["","",,H,{"^":"",o5:{"^":"a;a"}}],["","",,J,{"^":"",
dZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cO:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dY==null){H.ng()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.cE("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d8()]
if(v!=null)return v
v=H.nm(a)
if(v!=null)return v
if(typeof a=="function")return C.a6
y=Object.getPrototypeOf(a)
if(y==null)return C.M
if(y===Object.prototype)return C.M
if(typeof w=="function"){Object.defineProperty(w,$.$get$d8(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
H:{"^":"a;",
C:function(a,b){return a===b},
ga_:function(a){return H.bG(a)},
i:["fL",function(a){return"Instance of '"+H.bd(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
iR:{"^":"H;",
i:function(a){return String(a)},
ga_:function(a){return a?519018:218159},
$isM:1},
eD:{"^":"H;",
C:function(a,b){return null==b},
i:function(a){return"null"},
ga_:function(a){return 0},
$isG:1},
d9:{"^":"H;",
ga_:function(a){return 0},
i:["fN",function(a){return String(a)}]},
jz:{"^":"d9;"},
ca:{"^":"d9;"},
c5:{"^":"d9;",
i:function(a){var z=a[$.$get$el()]
if(z==null)return this.fN(a)
return"JavaScript function for "+H.j(J.af(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbZ:1},
b8:{"^":"H;$ti",
h:function(a,b){H.z(b,H.t(a,0))
if(!!a.fixed$length)H.r(P.V("add"))
a.push(b)},
kA:function(a,b){var z
if(!!a.fixed$length)H.r(P.V("removeAt"))
z=a.length
if(b>=z)throw H.e(P.c8(b,null,null))
return a.splice(b,1)[0]},
M:function(a,b){var z
if(!!a.fixed$length)H.r(P.V("remove"))
for(z=0;z<a.length;++z)if(J.Q(a[z],b)){a.splice(z,1)
return!0}return!1},
af:function(a,b){var z,y
H.k(b,"$iso",[H.t(a,0)],"$aso")
if(!!a.fixed$length)H.r(P.V("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.A)(b),++y)a.push(b[y])},
a1:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.aM(a))}},
l:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.q(z,y,H.j(a[y]))
return z.join(b)},
kd:function(a){return this.l(a,"")},
k0:function(a,b,c,d){var z,y,x
H.z(b,d)
H.m(c,{func:1,ret:d,args:[d,H.t(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.e(P.aM(a))}return y},
k_:function(a,b,c){var z,y,x
H.m(b,{func:1,ret:P.M,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.e(P.aM(a))}throw H.e(H.cs())},
jZ:function(a,b){return this.k_(a,b,null)},
ag:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fK:function(a,b,c){if(b<0||b>a.length)throw H.e(P.a1(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.a1(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.t(a,0)])
return H.c(a.slice(b,c),[H.t(a,0)])},
gjY:function(a){if(a.length>0)return a[0]
throw H.e(H.cs())},
gaD:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.cs())},
er:function(a,b){var z,y
H.m(b,{func:1,ret:P.M,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.e(P.aM(a))}return!1},
Z:function(a,b){var z
for(z=0;z<a.length;++z)if(J.Q(a[z],b))return!0
return!1},
i:function(a){return P.d7(a,"[","]")},
gU:function(a){return new J.at(a,a.length,0,[H.t(a,0)])},
ga_:function(a){return H.bG(a)},
gp:function(a){return a.length},
sp:function(a,b){if(!!a.fixed$length)H.r(P.V("set length"))
if(b<0)throw H.e(P.a1(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(b>=a.length||b<0)throw H.e(H.bp(a,b))
return a[b]},
q:function(a,b,c){H.z(c,H.t(a,0))
if(!!a.immutable$list)H.r(P.V("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bp(a,b))
a[b]=c},
$iso:1,
$isb:1,
n:{
iQ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.cW(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.a1(a,0,4294967295,"length",null))
return J.eA(new Array(a),b)},
eA:function(a,b){return J.ct(H.c(a,[b]))},
ct:function(a){H.ch(a)
a.fixed$length=Array
return a}}},
o4:{"^":"b8;$ti"},
at:{"^":"a;a,b,c,0d,$ti",
se0:function(a){this.d=H.z(a,H.t(this,0))},
gL:function(){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.A(z))
x=this.c
if(x>=y){this.se0(null)
return!1}this.se0(z[x]);++this.c
return!0},
$isb1:1},
c3:{"^":"H;",
kO:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.e(P.V(""+a+".toInt()"))},
d6:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.V(""+a+".floor()"))},
aw:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.V(""+a+".round()"))},
fk:function(a,b){var z,y
if(b>20)throw H.e(P.a1(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bw:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.e(P.a1(b,2,36,"radix",null))
z=a.toString(b)
if(C.c.a3(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.V("Unexpected toString result: "+z))
x=y.length
if(1>=x)return H.f(y,1)
z=y[1]
if(3>=x)return H.f(y,3)
w=+y[3]
x=y[2]
if(x!=null){z+=x
w-=x.length}return z+C.c.w("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga_:function(a){return a&0x1FFFFFFF},
w:function(a,b){if(typeof b!=="number")throw H.e(H.ah(b))
return a*b},
bB:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fR:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ei(a,b)},
ac:function(a,b){return(a|0)===a?a/b|0:this.ei(a,b)},
ei:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.V("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
aY:function(a,b){var z
if(a>0)z=this.eg(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
iJ:function(a,b){if(b<0)throw H.e(H.ah(b))
return this.eg(a,b)},
eg:function(a,b){return b>31?0:a>>>b},
V:function(a,b){if(typeof b!=="number")throw H.e(H.ah(b))
return a<b},
$isp:1,
$isak:1},
eC:{"^":"c3;",$isn:1},
eB:{"^":"c3;"},
c4:{"^":"H;",
a3:function(a,b){if(b<0)throw H.e(H.bp(a,b))
if(b>=a.length)H.r(H.bp(a,b))
return a.charCodeAt(b)},
K:function(a,b){if(b>=a.length)throw H.e(H.bp(a,b))
return a.charCodeAt(b)},
I:function(a,b){H.D(b)
if(typeof b!=="string")throw H.e(P.cW(b,null,null))
return a+b},
b6:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ah(b))
c=P.b3(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ak:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ah(c))
if(typeof c!=="number")return c.V()
if(c<0||c>a.length)throw H.e(P.a1(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ab:function(a,b){return this.ak(a,b,0)},
A:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ah(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.V()
if(b<0)throw H.e(P.c8(b,null,null))
if(b>c)throw H.e(P.c8(b,null,null))
if(c>a.length)throw H.e(P.c8(c,null,null))
return a.substring(b,c)},
ay:function(a,b){return this.A(a,b,null)},
kR:function(a){return a.toLowerCase()},
w:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.S)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ko:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.w(c,z)+a},
ao:function(a,b){return this.ko(a,b," ")},
f7:function(a,b,c){var z
if(c<0||c>a.length)throw H.e(P.a1(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
f6:function(a,b){return this.f7(a,b,0)},
jD:function(a,b,c){if(c>a.length)throw H.e(P.a1(c,0,a.length,null,null))
return H.hD(a,b,c)},
i:function(a){return a},
ga_:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gp:function(a){return a.length},
$iseT:1,
$ish:1}}],["","",,H,{"^":"",
cP:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
cs:function(){return new P.dk("No element")},
iP:function(){return new P.dk("Too many elements")},
w:{"^":"kO;a",
gp:function(a){return this.a.length},
k:function(a,b){return C.c.a3(this.a,b)},
$asdD:function(){return[P.n]},
$asY:function(){return[P.n]},
$aso:function(){return[P.n]},
$asb:function(){return[P.n]}},
es:{"^":"o;"},
cv:{"^":"es;$ti",
gU:function(a){return new H.db(this,this.gp(this),0,[H.a5(this,"cv",0)])},
du:function(a,b){return this.fM(0,H.m(b,{func:1,ret:P.M,args:[H.a5(this,"cv",0)]}))}},
db:{"^":"a;a,b,c,0d,$ti",
sbb:function(a){this.d=H.z(a,H.t(this,0))},
gL:function(){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.br(z)
x=y.gp(z)
if(this.b!==x)throw H.e(P.aM(z))
w=this.c
if(w>=x){this.sbb(null)
return!1}this.sbb(y.ag(z,w));++this.c
return!0},
$isb1:1},
jd:{"^":"o;a,b,$ti",
gU:function(a){return new H.je(J.b6(this.a),this.b,this.$ti)},
gp:function(a){return J.as(this.a)},
ag:function(a,b){return this.b.$1(J.cj(this.a,b))},
$aso:function(a,b){return[b]}},
je:{"^":"b1;0a,b,c,$ti",
sbb:function(a){this.a=H.z(a,H.t(this,1))},
E:function(){var z=this.b
if(z.E()){this.sbb(this.c.$1(z.gL()))
return!0}this.sbb(null)
return!1},
gL:function(){return this.a},
$asb1:function(a,b){return[b]}},
jf:{"^":"cv;a,b,$ti",
gp:function(a){return J.as(this.a)},
ag:function(a,b){return this.b.$1(J.cj(this.a,b))},
$ascv:function(a,b){return[b]},
$aso:function(a,b){return[b]}},
dH:{"^":"o;a,b,$ti",
gU:function(a){return new H.lj(J.b6(this.a),this.b,this.$ti)}},
lj:{"^":"b1;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gL()))return!0
return!1},
gL:function(){return this.a.gL()}},
cr:{"^":"a;$ti"},
dD:{"^":"a;$ti",
q:function(a,b,c){H.z(c,H.a5(this,"dD",0))
throw H.e(P.V("Cannot modify an unmodifiable list"))}},
kO:{"^":"cu+dD;"}}],["","",,H,{"^":"",
i8:function(){throw H.e(P.V("Cannot modify unmodifiable Map"))},
bu:function(a){var z,y
z=H.D(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
n9:function(a){return init.types[H.a6(a)]},
nj:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.N(a).$isav},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.af(a)
if(typeof z!=="string")throw H.e(H.ah(a))
return z},
bG:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jK:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.D(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.a1(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.c.K(w,u)|32)>x)return}return parseInt(a,b)},
bd:function(a){return H.jB(a)+H.dQ(H.b5(a),0,null)},
jB:function(a){var z,y,x,w,v,u,t,s,r
z=J.N(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.Z||!!z.$isca){u=C.F(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bu(w.length>1&&C.c.K(w,0)===36?C.c.ay(w,1):w)},
jC:function(){if(!!self.location)return self.location.href
return},
eZ:function(a){var z,y,x,w,v
H.ch(a)
z=J.as(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jL:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.ah(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.aY(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.e(H.ah(w))}return H.eZ(z)},
f_:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.ah(x))
if(x<0)throw H.e(H.ah(x))
if(x>65535)return H.jL(a)}return H.eZ(a)},
jM:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
be:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.aY(z,10))>>>0,56320|z&1023)}}throw H.e(P.a1(a,0,1114111,null,null))},
bc:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jJ:function(a){var z=H.bc(a).getFullYear()+0
return z},
jH:function(a){var z=H.bc(a).getMonth()+1
return z},
jD:function(a){var z=H.bc(a).getDate()+0
return z},
jE:function(a){var z=H.bc(a).getHours()+0
return z},
jG:function(a){var z=H.bc(a).getMinutes()+0
return z},
jI:function(a){var z=H.bc(a).getSeconds()+0
return z},
jF:function(a){var z=H.bc(a).getMilliseconds()+0
return z},
B:function(a){throw H.e(H.ah(a))},
f:function(a,b){if(a==null)J.as(a)
throw H.e(H.bp(a,b))},
bp:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aL(!0,b,"index",null)
z=H.a6(J.as(a))
if(!(b<0)){if(typeof z!=="number")return H.B(z)
y=b>=z}else y=!0
if(y)return P.b7(b,a,"index",null,z)
return P.c8(b,"index",null)},
n3:function(a,b,c){if(a>c)return new P.cy(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cy(a,c,!0,b,"end","Invalid value")
return new P.aL(!0,b,"end",null)},
ah:function(a){return new P.aL(!0,a,null,null)},
mU:function(a){if(typeof a!=="number")throw H.e(H.ah(a))
return a},
e:function(a){var z
if(a==null)a=new P.eS()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hE})
z.name=""}else z.toString=H.hE
return z},
hE:function(){return J.af(this.dartException)},
r:function(a){throw H.e(a)},
A:function(a){throw H.e(P.aM(a))},
aa:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nV(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.aY(x,16)&8191)===10)switch(w){case 438:return z.$1(H.da(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eR(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fm()
u=$.$get$fn()
t=$.$get$fo()
s=$.$get$fp()
r=$.$get$ft()
q=$.$get$fu()
p=$.$get$fr()
$.$get$fq()
o=$.$get$fw()
n=$.$get$fv()
m=v.an(y)
if(m!=null)return z.$1(H.da(H.D(y),m))
else{m=u.an(y)
if(m!=null){m.method="call"
return z.$1(H.da(H.D(y),m))}else{m=t.an(y)
if(m==null){m=s.an(y)
if(m==null){m=r.an(y)
if(m==null){m=q.an(y)
if(m==null){m=p.an(y)
if(m==null){m=s.an(y)
if(m==null){m=o.an(y)
if(m==null){m=n.an(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eR(H.D(y),m))}}return z.$1(new H.kN(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f9()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aL(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f9()
return a},
bs:function(a){var z
if(a==null)return new H.h1(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h1(a)},
n6:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.q(0,a[y],a[x])}return b},
ni:function(a,b,c,d,e,f){H.d(a,"$isbZ")
switch(H.a6(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.u("Unsupported number of arguments for wrapped closure"))},
bo:function(a,b){var z
H.a6(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ni)
a.$identity=z
return z},
i3:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.N(d).$isb){z.$reflectionInfo=d
x=H.jT(z).r}else x=d
w=e?Object.create(new H.ki().constructor.prototype):Object.create(new H.cY(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aB
if(typeof u!=="number")return u.I()
$.aB=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.eh(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.n9,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.ec:H.cZ
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.e("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.eh(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
i0:function(a,b,c,d){var z=H.cZ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
eh:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.i2(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.i0(y,!w,z,b)
if(y===0){w=$.aB
if(typeof w!=="number")return w.I()
$.aB=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bw
if(v==null){v=H.cl("self")
$.bw=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aB
if(typeof w!=="number")return w.I()
$.aB=w+1
t+=w
w="return function("+t+"){return this."
v=$.bw
if(v==null){v=H.cl("self")
$.bw=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
i1:function(a,b,c,d){var z,y
z=H.cZ
y=H.ec
switch(b?-1:a){case 0:throw H.e(H.k1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
i2:function(a,b){var z,y,x,w,v,u,t,s
z=$.bw
if(z==null){z=H.cl("self")
$.bw=z}y=$.eb
if(y==null){y=H.cl("receiver")
$.eb=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.i1(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aB
if(typeof y!=="number")return y.I()
$.aB=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aB
if(typeof y!=="number")return y.I()
$.aB=y+1
return new Function(z+y+"}")()},
dT:function(a,b,c,d,e,f,g){return H.i3(a,b,H.a6(c),d,!!e,!!f,g)},
D:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ay(a,"String"))},
n4:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ay(a,"double"))},
nL:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ay(a,"num"))},
dR:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ay(a,"bool"))},
a6:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ay(a,"int"))},
hA:function(a,b){throw H.e(H.ay(a,H.bu(H.D(b).substring(3))))},
nN:function(a,b){throw H.e(H.i_(a,H.bu(H.D(b).substring(3))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.N(a)[b])return a
H.hA(a,b)},
i:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else z=!0
if(z)return a
H.nN(a,b)},
ch:function(a){if(a==null)return a
if(!!J.N(a).$isb)return a
throw H.e(H.ay(a,"List<dynamic>"))},
hx:function(a,b){var z
if(a==null)return a
z=J.N(a)
if(!!z.$isb)return a
if(z[b])return a
H.hA(a,b)},
ht:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a6(z)]
else return a.$S()}return},
ce:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.ht(J.N(a))
if(z==null)return!1
return H.he(z,null,b,null)},
m:function(a,b){var z,y
if(a==null)return a
if($.dN)return a
$.dN=!0
try{if(H.ce(a,b))return a
z=H.cS(b)
y=H.ay(a,z)
throw H.e(y)}finally{$.dN=!1}},
dW:function(a,b){if(a!=null&&!H.dS(a,b))H.r(H.ay(a,H.cS(b)))
return a},
hk:function(a){var z,y
z=J.N(a)
if(!!z.$isl){y=H.ht(z)
if(y!=null)return H.cS(y)
return"Closure"}return H.bd(a)},
nT:function(a){throw H.e(new P.ic(H.D(a)))},
hu:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b5:function(a){if(a==null)return
return a.$ti},
ox:function(a,b,c){return H.bt(a["$as"+H.j(c)],H.b5(b))},
cf:function(a,b,c,d){var z
H.D(c)
H.a6(d)
z=H.bt(a["$as"+H.j(c)],H.b5(b))
return z==null?null:z[d]},
a5:function(a,b,c){var z
H.D(b)
H.a6(c)
z=H.bt(a["$as"+H.j(b)],H.b5(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.a6(b)
z=H.b5(a)
return z==null?null:z[b]},
cS:function(a){return H.b4(a,null)},
b4:function(a,b){var z,y
H.k(b,"$isb",[P.h],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bu(a[0].builtin$cls)+H.dQ(a,1,b)
if(typeof a=="function")return H.bu(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a6(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.j(b[y])}if('func' in a)return H.mK(a,b)
if('futureOr' in a)return"FutureOr<"+H.b4("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
t=C.c.I(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.b4(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b4(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b4(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b4(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.n5(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.D(z[l])
n=n+m+H.b4(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dQ:function(a,b,c){var z,y,x,w,v,u
H.k(c,"$isb",[P.h],"$asb")
if(a==null)return""
z=new P.ai("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b4(u,c)}return"<"+z.i(0)+">"},
bt:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bT:function(a,b,c,d){var z,y
H.D(b)
H.ch(c)
H.D(d)
if(a==null)return!1
z=H.b5(a)
y=J.N(a)
if(y[b]==null)return!1
return H.hn(H.bt(y[d],z),null,c,null)},
k:function(a,b,c,d){H.D(b)
H.ch(c)
H.D(d)
if(a==null)return a
if(H.bT(a,b,c,d))return a
throw H.e(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bu(b.substring(3))+H.dQ(c,0,null),init.mangledGlobalNames)))},
hn:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ar(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ar(a[y],b,c[y],d))return!1
return!0},
ov:function(a,b,c){return a.apply(b,H.bt(J.N(b)["$as"+H.j(c)],H.b5(b)))},
hw:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="G"||a===-1||a===-2||H.hw(z)}return!1},
dS:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="G"||b===-1||b===-2||H.hw(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dS(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ce(a,b)}z=J.N(a).constructor
y=H.b5(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.ar(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.dS(a,b))throw H.e(H.ay(a,H.cS(b)))
return a},
ar:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ar(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.he(a,b,c,d)
if('func' in a)return c.builtin$cls==="bZ"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ar("type" in a?a.type:null,b,x,d)
else if(H.ar(a,b,x,d))return!0
else{if(!('$is'+"bB" in y.prototype))return!1
w=y.prototype["$as"+"bB"]
v=H.bt(w,z?a.slice(1):null)
return H.ar(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hn(H.bt(r,z),b,u,d)},
he:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.nK(m,b,l,d)},
nK:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ar(c[w],d,a[w],b))return!1}return!0},
ow:function(a,b,c){Object.defineProperty(a,H.D(b),{value:c,enumerable:false,writable:true,configurable:true})},
nm:function(a){var z,y,x,w,v,u
z=H.D($.hv.$1(a))
y=$.cN[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cQ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.D($.hm.$2(a,z))
if(z!=null){y=$.cN[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cQ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cR(x)
$.cN[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cQ[z]=x
return x}if(v==="-"){u=H.cR(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hz(a,x)
if(v==="*")throw H.e(P.cE(z))
if(init.leafTags[z]===true){u=H.cR(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hz(a,x)},
hz:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dZ(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cR:function(a){return J.dZ(a,!1,null,!!a.$isav)},
nJ:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cR(z)
else return J.dZ(z,c,null,null)},
ng:function(){if(!0===$.dY)return
$.dY=!0
H.nh()},
nh:function(){var z,y,x,w,v,u,t,s
$.cN=Object.create(null)
$.cQ=Object.create(null)
H.nc()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hB.$1(v)
if(u!=null){t=H.nJ(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nc:function(){var z,y,x,w,v,u,t
z=C.a3()
z=H.bn(C.a0,H.bn(C.a5,H.bn(C.E,H.bn(C.E,H.bn(C.a4,H.bn(C.a1,H.bn(C.a2(C.F),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hv=new H.nd(v)
$.hm=new H.ne(u)
$.hB=new H.nf(t)},
bn:function(a,b){return a(b)||b},
hD:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
e1:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i7:{"^":"a;$ti",
i:function(a){return P.dc(this)},
q:function(a,b,c){H.z(b,H.t(this,0))
H.z(c,H.t(this,1))
return H.i8()},
$isK:1},
i9:{"^":"i7;a,b,c,$ti",
gp:function(a){return this.a},
bO:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k:function(a,b){if(!this.bO(b))return
return this.e2(b)},
e2:function(a){return this.b[H.D(a)]},
a1:function(a,b){var z,y,x,w,v
z=H.t(this,1)
H.m(b,{func:1,ret:-1,args:[H.t(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.e2(v),z))}}},
jS:{"^":"a;a,b,c,d,e,f,r,0x",n:{
jT:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ct(z)
y=z[0]
x=z[1]
return new H.jS(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kz:{"^":"a;a,b,c,d,e,f",
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
n:{
aK:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kz(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cD:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fs:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jw:{"^":"a7;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
n:{
eR:function(a,b){return new H.jw(a,b==null?null:b.method)}}},
iU:{"^":"a7;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
n:{
da:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iU(a,y,z?null:b.receiver)}}},
kN:{"^":"a7;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nV:{"^":"l:18;a",
$1:function(a){if(!!J.N(a).$isa7)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h1:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaR:1},
l:{"^":"a;",
i:function(a){return"Closure '"+H.bd(this).trim()+"'"},
gfq:function(){return this},
$isbZ:1,
gfq:function(){return this}},
fc:{"^":"l;"},
ki:{"^":"fc;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bu(z)+"'"}},
cY:{"^":"fc;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cY))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga_:function(a){var z,y
z=this.c
if(z==null)y=H.bG(this.a)
else y=typeof z!=="object"?J.bV(z):H.bG(z)
return(y^H.bG(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bd(z)+"'")},
n:{
cZ:function(a){return a.a},
ec:function(a){return a.c},
cl:function(a){var z,y,x,w,v
z=new H.cY("self","target","receiver","name")
y=J.ct(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kA:{"^":"a7;a",
i:function(a){return this.a},
n:{
ay:function(a,b){return new H.kA("TypeError: "+H.j(P.cp(a))+": type '"+H.hk(a)+"' is not a subtype of type '"+b+"'")}}},
hZ:{"^":"a7;a",
i:function(a){return this.a},
n:{
i_:function(a,b){return new H.hZ("CastError: "+H.j(P.cp(a))+": type '"+H.hk(a)+"' is not a subtype of type '"+b+"'")}}},
k0:{"^":"a7;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
n:{
k1:function(a){return new H.k0(a)}}},
b2:{"^":"eJ;a,0b,0c,0d,0e,0f,r,$ti",
gp:function(a){return this.a},
gkc:function(a){return this.a===0},
gaC:function(){return new H.j0(this,[H.t(this,0)])},
bO:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dY(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dY(y,a)}else return this.k9(a)},
k9:function(a){var z=this.d
if(z==null)return!1
return this.d9(this.cn(z,this.d8(a)),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bF(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bF(w,b)
x=y==null?null:y.b
return x}else return this.ka(b)},
ka:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cn(z,this.d8(a))
x=this.d9(y,a)
if(x<0)return
return y[x].b},
q:function(a,b,c){var z,y
H.z(b,H.t(this,0))
H.z(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cv()
this.b=z}this.dP(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cv()
this.c=y}this.dP(y,b,c)}else this.kb(b,c)},
kb:function(a,b){var z,y,x,w
H.z(a,H.t(this,0))
H.z(b,H.t(this,1))
z=this.d
if(z==null){z=this.cv()
this.d=z}y=this.d8(a)
x=this.cn(z,y)
if(x==null)this.cG(z,y,[this.cg(a,b)])
else{w=this.d9(x,a)
if(w>=0)x[w].b=b
else x.push(this.cg(a,b))}},
a1:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aM(this))
z=z.c}},
dP:function(a,b,c){var z
H.z(b,H.t(this,0))
H.z(c,H.t(this,1))
z=this.bF(a,b)
if(z==null)this.cG(a,b,this.cg(b,c))
else z.b=c},
hc:function(){this.r=this.r+1&67108863},
cg:function(a,b){var z,y
z=new H.j_(H.z(a,H.t(this,0)),H.z(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.hc()
return z},
d8:function(a){return J.bV(a)&0x3ffffff},
d9:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
i:function(a){return P.dc(this)},
bF:function(a,b){return a[b]},
cn:function(a,b){return a[b]},
cG:function(a,b,c){a[b]=c},
hr:function(a,b){delete a[b]},
dY:function(a,b){return this.bF(a,b)!=null},
cv:function(){var z=Object.create(null)
this.cG(z,"<non-identifier-key>",z)
this.hr(z,"<non-identifier-key>")
return z},
$iseF:1},
j_:{"^":"a;a,b,0c,0d"},
j0:{"^":"es;a,$ti",
gp:function(a){return this.a.a},
gU:function(a){var z,y
z=this.a
y=new H.j1(z,z.r,this.$ti)
y.c=z.e
return y}},
j1:{"^":"a;a,b,0c,0d,$ti",
sdQ:function(a){this.d=H.z(a,H.t(this,0))},
gL:function(){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aM(z))
else{z=this.c
if(z==null){this.sdQ(null)
return!1}else{this.sdQ(z.a)
this.c=this.c.c
return!0}}},
$isb1:1},
nd:{"^":"l:18;a",
$1:function(a){return this.a(a)}},
ne:{"^":"l:46;a",
$2:function(a,b){return this.a(a,b)}},
nf:{"^":"l:48;a",
$1:function(a){return this.a(H.D(a))}},
iS:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseT:1,
$isjU:1,
n:{
iT:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.e(P.a_("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
n5:function(a){return J.eA(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nM:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bl:function(a){return a},
jq:function(a){return new Int8Array(a)},
aY:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bp(b,a))},
mE:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.e(H.n3(a,b,c))
return b},
dh:{"^":"H;",$isdh:1,$iskB:1,"%":";ArrayBufferView;dg|fY|fZ|jr|h_|h0|bb"},
dg:{"^":"dh;",
gp:function(a){return a.length},
$isav:1,
$asav:I.dV},
jr:{"^":"fZ;",
k:function(a,b){H.aY(b,a,a.length)
return a[b]},
q:function(a,b,c){H.n4(c)
H.aY(b,a,a.length)
a[b]=c},
$ascr:function(){return[P.p]},
$asY:function(){return[P.p]},
$iso:1,
$aso:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
"%":"Float32Array"},
bb:{"^":"h0;",
q:function(a,b,c){H.a6(c)
H.aY(b,a,a.length)
a[b]=c},
$ascr:function(){return[P.n]},
$asY:function(){return[P.n]},
$iso:1,
$aso:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}},
o6:{"^":"bb;",
k:function(a,b){H.aY(b,a,a.length)
return a[b]},
"%":"Int16Array"},
o7:{"^":"bb;",
k:function(a,b){H.aY(b,a,a.length)
return a[b]},
"%":"Int32Array"},
o8:{"^":"bb;",
k:function(a,b){H.aY(b,a,a.length)
return a[b]},
"%":"Int8Array"},
o9:{"^":"bb;",
k:function(a,b){H.aY(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oa:{"^":"bb;",
gp:function(a){return a.length},
k:function(a,b){H.aY(b,a,a.length)
return a[b]},
$isoi:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
eP:{"^":"bb;",
gp:function(a){return a.length},
k:function(a,b){H.aY(b,a,a.length)
return a[b]},
$iseP:1,
$isO:1,
"%":";Uint8Array"},
fY:{"^":"dg+Y;"},
fZ:{"^":"fY+cr;"},
h_:{"^":"dg+Y;"},
h0:{"^":"h_+cr;"}}],["","",,P,{"^":"",
ll:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mR()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bo(new P.ln(z),1)).observe(y,{childList:true})
return new P.lm(z,y,x)}else if(self.setImmediate!=null)return P.mS()
return P.mT()},
om:[function(a){self.scheduleImmediate(H.bo(new P.lo(H.m(a,{func:1,ret:-1})),0))},"$1","mR",4,0,11],
on:[function(a){self.setImmediate(H.bo(new P.lp(H.m(a,{func:1,ret:-1})),0))},"$1","mS",4,0,11],
oo:[function(a){P.dr(C.y,H.m(a,{func:1,ret:-1}))},"$1","mT",4,0,11],
dr:function(a,b){var z
H.m(b,{func:1,ret:-1})
z=C.h.ac(a.a,1000)
return P.m6(z<0?0:z,b)},
fj:function(a,b){var z
H.m(b,{func:1,ret:-1,args:[P.bf]})
z=C.h.ac(a.a,1000)
return P.m7(z<0?0:z,b)},
mN:function(a,b){if(H.ce(a,{func:1,args:[P.a,P.aR]}))return H.m(a,{func:1,ret:null,args:[P.a,P.aR]})
if(H.ce(a,{func:1,args:[P.a]}))return H.m(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.cW(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mM:function(){var z,y
for(;z=$.bm,z!=null;){$.bR=null
y=z.b
$.bm=y
if(y==null)$.bQ=null
z.a.$0()}},
ou:[function(){$.dO=!0
try{P.mM()}finally{$.bR=null
$.dO=!1
if($.bm!=null)$.$get$dI().$1(P.ho())}},"$0","ho",0,0,3],
hj:function(a){var z=new P.fP(H.m(a,{func:1,ret:-1}))
if($.bm==null){$.bQ=z
$.bm=z
if(!$.dO)$.$get$dI().$1(P.ho())}else{$.bQ.b=z
$.bQ=z}},
mQ:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.bm
if(z==null){P.hj(a)
$.bR=$.bQ
return}y=new P.fP(a)
x=$.bR
if(x==null){y.b=z
$.bR=y
$.bm=y}else{y.b=x.b
x.b=y
$.bR=y
if(y.b==null)$.bQ=y}},
nO:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.T
if(C.l===y){P.cM(null,null,C.l,a)
return}y.toString
P.cM(null,null,y,H.m(y.cQ(a),z))},
fi:function(a,b){var z,y
z={func:1,ret:-1}
H.m(b,z)
y=$.T
if(y===C.l){y.toString
return P.dr(a,b)}return P.dr(a,H.m(y.cQ(b),z))},
kw:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bf]}
H.m(b,z)
y=$.T
if(y===C.l){y.toString
return P.fj(a,b)}x=y.ev(b,P.bf)
$.T.toString
return P.fj(a,H.m(x,z))},
cL:function(a,b,c,d,e){var z={}
z.a=d
P.mQ(new P.mO(z,e))},
hf:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
hg:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
mP:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cM:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.cQ(d):c.jt(d,-1)
P.hj(d)},
ln:{"^":"l:25;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
lm:{"^":"l:32;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lo:{"^":"l:0;a",
$0:function(){this.a.$0()}},
lp:{"^":"l:0;a",
$0:function(){this.a.$0()}},
h3:{"^":"a;a,0b,c",
h9:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bo(new P.m9(this,b),0),a)
else throw H.e(P.V("`setTimeout()` not found."))},
ha:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bo(new P.m8(this,a,Date.now(),b),0),a)
else throw H.e(P.V("Periodic timer."))},
$isbf:1,
n:{
m6:function(a,b){var z=new P.h3(!0,0)
z.h9(a,b)
return z},
m7:function(a,b){var z=new P.h3(!1,0)
z.ha(a,b)
return z}}},
m9:{"^":"l:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
m8:{"^":"l:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.fR(w,x)}z.c=y
this.d.$1(z)}},
bk:{"^":"a;0a,b,c,d,e,$ti",
kh:function(a){if(this.c!==6)return!0
return this.b.b.dq(H.m(this.d,{func:1,ret:P.M,args:[P.a]}),a.a,P.M,P.a)},
k7:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.ce(z,{func:1,args:[P.a,P.aR]}))return H.dW(w.kH(z,a.a,a.b,null,y,P.aR),x)
else return H.dW(w.dq(H.m(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aX:{"^":"a;eh:a<,b,0iA:c<,$ti",
fj:function(a,b,c){var z,y,x,w
z=H.t(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.l){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mN(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aX(0,$.T,[c])
w=b==null?1:3
this.dS(new P.bk(x,w,a,b,[z,c]))
return x},
kN:function(a,b){return this.fj(a,null,b)},
dS:function(a){var z,y
z=this.a
if(z<=1){a.a=H.d(this.c,"$isbk")
this.c=a}else{if(z===2){y=H.d(this.c,"$isaX")
z=y.a
if(z<4){y.dS(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cM(null,null,z,H.m(new P.ly(this,a),{func:1,ret:-1}))}},
ee:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.d(this.c,"$isbk")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.d(this.c,"$isaX")
y=u.a
if(y<4){u.ee(a)
return}this.a=y
this.c=u.c}z.a=this.bI(a)
y=this.b
y.toString
P.cM(null,null,y,H.m(new P.lD(z,this),{func:1,ret:-1}))}},
cC:function(){var z=H.d(this.c,"$isbk")
this.c=null
return this.bI(z)},
bI:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dU:function(a){var z,y,x
z=H.t(this,0)
H.dW(a,{futureOr:1,type:z})
y=this.$ti
if(H.bT(a,"$isbB",y,"$asbB"))if(H.bT(a,"$isaX",y,null))P.fT(a,this)
else P.lz(a,this)
else{x=this.cC()
H.z(a,z)
this.a=4
this.c=a
P.bM(this,x)}},
dV:function(a,b){var z
H.d(b,"$isaR")
z=this.cC()
this.a=8
this.c=new P.al(a,b)
P.bM(this,z)},
$isbB:1,
n:{
lz:function(a,b){var z,y,x
b.a=1
try{a.fj(new P.lA(b),new P.lB(b),null)}catch(x){z=H.aa(x)
y=H.bs(x)
P.nO(new P.lC(b,z,y))}},
fT:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.d(a.c,"$isaX")
if(z>=4){y=b.cC()
b.a=a.a
b.c=a.c
P.bM(b,y)}else{y=H.d(b.c,"$isbk")
b.a=2
b.c=a
a.ee(y)}},
bM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.d(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.cL(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bM(z.a,b)}y=z.a
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
P.cL(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.lG(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lF(x,b,r).$0()}else if((y&2)!==0)new P.lE(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.N(y).$isbB){if(y.a>=4){n=H.d(t.c,"$isbk")
t.c=null
b=t.bI(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fT(y,t)
return}}m=b.b
n=H.d(m.c,"$isbk")
m.c=null
b=m.bI(n)
y=x.a
u=x.b
if(!y){H.z(u,H.t(m,0))
m.a=4
m.c=u}else{H.d(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
ly:{"^":"l:0;a,b",
$0:function(){P.bM(this.a,this.b)}},
lD:{"^":"l:0;a,b",
$0:function(){P.bM(this.b,this.a.a)}},
lA:{"^":"l:25;a",
$1:function(a){var z=this.a
z.a=0
z.dU(a)}},
lB:{"^":"l:34;a",
$2:function(a,b){this.a.dV(a,H.d(b,"$isaR"))},
$1:function(a){return this.$2(a,null)}},
lC:{"^":"l:0;a,b,c",
$0:function(){this.a.dV(this.b,this.c)}},
lG:{"^":"l:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.fh(H.m(w.d,{func:1}),null)}catch(v){y=H.aa(v)
x=H.bs(v)
if(this.d){w=H.d(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.d(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.N(z).$isbB){if(z instanceof P.aX&&z.geh()>=4){if(z.geh()===8){w=this.b
w.b=H.d(z.giA(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.kN(new P.lH(t),null)
w.a=!1}}},
lH:{"^":"l:35;a",
$1:function(a){return this.a}},
lF:{"^":"l:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.z(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.dq(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aa(t)
y=H.bs(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
lE:{"^":"l:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.d(this.a.a.c,"$isal")
w=this.c
if(w.kh(z)&&w.e!=null){v=this.b
v.b=w.k7(z)
v.a=!1}}catch(u){y=H.aa(u)
x=H.bs(u)
w=H.d(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fP:{"^":"a;a,0b"},
kj:{"^":"a;$ti",
gp:function(a){var z,y,x,w
z={}
y=new P.aX(0,$.T,[P.n])
z.a=0
x=H.t(this,0)
w=H.m(new P.kl(z,this),{func:1,ret:-1,args:[x]})
H.m(new P.km(z,y),{func:1,ret:-1})
W.a2(this.a,this.b,w,!1,x)
return y}},
kl:{"^":"l;a,b",
$1:function(a){H.z(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.t(this.b,0)]}}},
km:{"^":"l:0;a,b",
$0:function(){this.b.dU(this.a.a)}},
dl:{"^":"a;$ti"},
kk:{"^":"a;"},
bf:{"^":"a;"},
al:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isa7:1},
mA:{"^":"a;",$isol:1},
mO:{"^":"l:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eS()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
lS:{"^":"mA;",
kI:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.l===$.T){a.$0()
return}P.hf(null,null,this,a,-1)}catch(x){z=H.aa(x)
y=H.bs(x)
P.cL(null,null,this,z,H.d(y,"$isaR"))}},
kJ:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.l===$.T){a.$1(b)
return}P.hg(null,null,this,a,b,-1,c)}catch(x){z=H.aa(x)
y=H.bs(x)
P.cL(null,null,this,z,H.d(y,"$isaR"))}},
jt:function(a,b){return new P.lU(this,H.m(a,{func:1,ret:b}),b)},
cQ:function(a){return new P.lT(this,H.m(a,{func:1,ret:-1}))},
ev:function(a,b){return new P.lV(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
fh:function(a,b){H.m(a,{func:1,ret:b})
if($.T===C.l)return a.$0()
return P.hf(null,null,this,a,b)},
dq:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.T===C.l)return a.$1(b)
return P.hg(null,null,this,a,b,c,d)},
kH:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.T===C.l)return a.$2(b,c)
return P.mP(null,null,this,a,b,c,d,e,f)}},
lU:{"^":"l;a,b,c",
$0:function(){return this.a.fh(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lT:{"^":"l:3;a,b",
$0:function(){return this.a.kI(this.b)}},
lV:{"^":"l;a,b,c",
$1:function(a){var z=this.c
return this.a.kJ(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
j2:function(a,b,c,d,e){return new H.b2(0,0,[d,e])},
j3:function(a,b,c){H.ch(a)
return H.k(H.n6(a,new H.b2(0,0,[b,c])),"$iseF",[b,c],"$aseF")},
eG:function(a,b){return new H.b2(0,0,[a,b])},
c6:function(a,b,c,d){return new P.lM(0,0,[d])},
iO:function(a,b,c){var z,y
if(P.dP(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bS()
C.a.h(y,a)
try{P.mL(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.fb(b,H.hx(z,"$iso"),", ")+c
return y.charCodeAt(0)==0?y:y},
d7:function(a,b,c){var z,y,x
if(P.dP(a))return b+"..."+c
z=new P.ai(b)
y=$.$get$bS()
C.a.h(y,a)
try{x=z
x.a=P.fb(x.gaU(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaU()+c
y=z.gaU()
return y.charCodeAt(0)==0?y:y},
dP:function(a){var z,y
for(z=0;y=$.$get$bS(),z<y.length;++z)if(a===y[z])return!0
return!1},
mL:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gU(a)
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
j4:function(a,b,c){var z=P.j2(null,null,null,b,c)
a.a1(0,new P.j5(z,b,c))
return z},
eH:function(a,b){var z,y,x
z=P.c6(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x)z.h(0,H.z(a[x],b))
return z},
dc:function(a){var z,y,x
z={}
if(P.dP(a))return"{...}"
y=new P.ai("")
try{C.a.h($.$get$bS(),a)
x=y
x.a=x.gaU()+"{"
z.a=!0
a.a1(0,new P.jb(z,y))
z=y
z.a=z.gaU()+"}"}finally{z=$.$get$bS()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaU()
return z.charCodeAt(0)==0?z:z},
lM:{"^":"lI;a,0b,0c,0d,0e,0f,r,$ti",
gU:function(a){var z=new P.fX(this,this.r,this.$ti)
z.c=this.e
return z},
gp:function(a){return this.a},
Z:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.d(z[b],"$iscI")!=null}else{y=this.hn(b)
return y}},
hn:function(a){var z=this.d
if(z==null)return!1
return this.cl(this.e3(z,a),a)>=0},
h:function(a,b){var z,y
H.z(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dK()
this.b=z}return this.dR(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dK()
this.c=y}return this.dR(y,b)}else return this.hd(b)},
hd:function(a){var z,y,x
H.z(a,H.t(this,0))
z=this.d
if(z==null){z=P.dK()
this.d=z}y=this.dW(a)
x=z[y]
if(x==null)z[y]=[this.cw(a)]
else{if(this.cl(x,a)>=0)return!1
x.push(this.cw(a))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.ir(this.c,b)
else return this.io(b)},
io:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.e3(z,a)
x=this.cl(y,a)
if(x<0)return!1
this.ej(y.splice(x,1)[0])
return!0},
dR:function(a,b){H.z(b,H.t(this,0))
if(H.d(a[b],"$iscI")!=null)return!1
a[b]=this.cw(b)
return!0},
ir:function(a,b){var z
if(a==null)return!1
z=H.d(a[b],"$iscI")
if(z==null)return!1
this.ej(z)
delete a[b]
return!0},
e8:function(){this.r=this.r+1&67108863},
cw:function(a){var z,y
z=new P.cI(H.z(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.e8()
return z},
ej:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.e8()},
dW:function(a){return J.bV(a)&0x3ffffff},
e3:function(a,b){return a[this.dW(b)]},
cl:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
n:{
dK:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cI:{"^":"a;a,0b,0c"},
fX:{"^":"a;a,b,0c,0d,$ti",
sdT:function(a){this.d=H.z(a,H.t(this,0))},
gL:function(){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aM(z))
else{z=this.c
if(z==null){this.sdT(null)
return!1}else{this.sdT(H.z(z.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
$isb1:1,
n:{
lN:function(a,b,c){var z=new P.fX(a,b,[c])
z.c=a.e
return z}}},
lI:{"^":"k2;"},
j5:{"^":"l:6;a,b,c",
$2:function(a,b){this.a.q(0,H.z(a,this.b),H.z(b,this.c))}},
cu:{"^":"lO;",$iso:1,$isb:1},
Y:{"^":"a;$ti",
gU:function(a){return new H.db(a,this.gp(a),0,[H.cf(this,a,"Y",0)])},
ag:function(a,b){return this.k(a,b)},
kQ:function(a,b){var z,y
z=H.c([],[H.cf(this,a,"Y",0)])
C.a.sp(z,this.gp(a))
for(y=0;y<this.gp(a);++y)C.a.q(z,y,this.k(a,y))
return z},
kP:function(a){return this.kQ(a,!0)},
jW:function(a,b,c,d){var z
H.z(d,H.cf(this,a,"Y",0))
P.b3(b,c,this.gp(a),null,null,null)
for(z=b;z<c;++z)this.q(a,z,d)},
i:function(a){return P.d7(a,"[","]")}},
eJ:{"^":"cw;"},
jb:{"^":"l:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
cw:{"^":"a;$ti",
a1:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.a5(this,"cw",0),H.a5(this,"cw",1)]})
for(z=J.b6(this.gaC());z.E();){y=z.gL()
b.$2(y,this.k(0,y))}},
gp:function(a){return J.as(this.gaC())},
i:function(a){return P.dc(this)},
$isK:1},
mc:{"^":"a;$ti",
q:function(a,b,c){H.z(b,H.t(this,0))
H.z(c,H.t(this,1))
throw H.e(P.V("Cannot modify unmodifiable map"))}},
jc:{"^":"a;$ti",
k:function(a,b){return this.a.k(0,b)},
q:function(a,b,c){this.a.q(0,H.z(b,H.t(this,0)),H.z(c,H.t(this,1)))},
a1:function(a,b){this.a.a1(0,H.m(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gp:function(a){var z=this.a
return z.gp(z)},
i:function(a){return J.af(this.a)},
$isK:1},
fx:{"^":"md;a,$ti"},
k4:{"^":"a;$ti",
af:function(a,b){var z
for(z=J.b6(H.k(b,"$iso",this.$ti,"$aso"));z.E();)this.h(0,z.gL())},
i:function(a){return P.d7(this,"{","}")},
ag:function(a,b){var z,y,x
if(b<0)H.r(P.a1(b,0,null,"index",null))
for(z=P.lN(this,this.r,H.t(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.e(P.b7(b,this,"index",null,y))},
$iso:1,
$isf5:1},
k2:{"^":"k4;"},
lO:{"^":"a+Y;"},
md:{"^":"jc+mc;$ti"}}],["","",,P,{"^":"",hW:{"^":"bX;a",
kj:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.b3(b,c,a.length,null,null,null)
z=$.$get$fR()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.c.K(a,y)
if(r===37){q=s+2
if(q<=c){p=H.cP(C.c.K(a,s))
o=H.cP(C.c.K(a,s+1))
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
l=w.a+=C.c.A(a,x,y)
w.a=l+H.be(r)
x=s
continue}}throw H.e(P.a_("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.c.A(a,x,c)
k=l.length
if(v>=0)P.e9(a,u,c,v,t,k)
else{j=C.h.bB(k-1,4)+1
if(j===1)throw H.e(P.a_("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.c.b6(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.e9(a,u,c,v,t,i)
else{j=C.h.bB(i,4)
if(j===1)throw H.e(P.a_("Invalid base64 encoding length ",a,c))
if(j>1)a=C.c.b6(a,c,c,j===2?"==":"=")}return a},
$asbX:function(){return[[P.b,P.n],P.h]},
n:{
e9:function(a,b,c,d,e,f){if(C.h.bB(f,4)!==0)throw H.e(P.a_("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.a_("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.a_("Invalid base64 padding, more than two '=' characters",a,b))}}},hX:{"^":"b_;a",
$asb_:function(){return[[P.b,P.n],P.h]}},bX:{"^":"a;$ti"},b_:{"^":"kk;$ti"},ir:{"^":"bX;",
$asbX:function(){return[P.h,[P.b,P.n]]}},iK:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},iJ:{"^":"b_;a",
ho:function(a,b,c){var z,y,x,w,v,u
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
if(w>b)v.a+=C.c.A(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hS(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb_:function(){return[P.h,P.h]}},l0:{"^":"ir;a",
gjV:function(){return C.T}},l7:{"^":"b_;",
bj:function(a,b,c){var z,y,x,w
z=a.length
P.b3(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.my(0,0,x)
if(w.hz(a,b,z)!==z)w.el(J.hK(a,z-1),0)
return new Uint8Array(x.subarray(0,H.mE(0,w.b,x.length)))},
cW:function(a){return this.bj(a,0,null)},
$asb_:function(){return[P.h,[P.b,P.n]]}},my:{"^":"a;a,b,c",
el:function(a,b){var z,y,x,w,v
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
hz:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.a3(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.K(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.el(w,C.c.K(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},l1:{"^":"b_;a",
bj:function(a,b,c){var z,y,x,w,v
H.k(a,"$isb",[P.n],"$asb")
z=P.l2(!1,a,b,c)
if(z!=null)return z
y=J.as(a)
P.b3(b,c,y,null,null,null)
x=new P.ai("")
w=new P.mv(!1,x,!0,0,0,0)
w.bj(a,b,y)
if(w.e>0){H.r(P.a_("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.be(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
cW:function(a){return this.bj(a,0,null)},
$asb_:function(){return[[P.b,P.n],P.h]},
n:{
l2:function(a,b,c,d){H.k(b,"$isb",[P.n],"$asb")
if(b instanceof Uint8Array)return P.l3(!1,b,c,d)
return},
l3:function(a,b,c,d){var z,y,x
z=$.$get$fC()
if(z==null)return
y=0===c
if(y&&!0)return P.dF(z,b)
x=b.length
d=P.b3(c,d,x,null,null,null)
if(y&&d===x)return P.dF(z,b)
return P.dF(z,b.subarray(c,d))},
dF:function(a,b){if(P.l5(b))return
return P.l6(a,b)},
l6:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.aa(y)}return},
l5:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
l4:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.aa(y)}return}}},mv:{"^":"a;a,b,c,d,e,f",
bj:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(a,"$isb",[P.n],"$asb")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mx(c)
v=new P.mw(this,b,c,a)
$label0$0:for(u=J.br(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.cb()
if((r&192)!==128){q=P.a_("Bad UTF-8 encoding 0x"+C.h.bw(r,16),a,s)
throw H.e(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.H,q)
if(z<=C.H[q]){q=P.a_("Overlong encoding of 0x"+C.h.bw(z,16),a,s-x-1)
throw H.e(q)}if(z>1114111){q=P.a_("Character outside valid Unicode range: 0x"+C.h.bw(z,16),a,s-x-1)
throw H.e(q)}if(!this.c||z!==65279)t.a+=H.be(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.dD()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.V()
if(r<0){m=P.a_("Negative UTF-8 code unit: -0x"+C.h.bw(-r,16),a,n-1)
throw H.e(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a_("Bad UTF-8 encoding 0x"+C.h.bw(r,16),a,n-1)
throw H.e(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mx:{"^":"l:43;a",
$2:function(a,b){var z,y,x,w
H.k(a,"$isb",[P.n],"$asb")
z=this.a
for(y=J.br(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.cb()
if((w&127)!==w)return x-b}return z-b}},mw:{"^":"l:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c9(this.d,a,b)}}}],["","",,P,{"^":"",
cg:function(a,b,c){var z
H.m(b,{func:1,ret:P.n,args:[P.h]})
z=H.jK(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.e(P.a_(a,null,null))},
it:function(a){if(a instanceof H.l)return a.i(0)
return"Instance of '"+H.bd(a)+"'"},
j6:function(a,b,c,d){var z,y
H.z(b,d)
z=J.iQ(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.q(z,y,b)
return H.k(z,"$isb",[d],"$asb")},
j7:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gU(a);x.E();)C.a.h(y,H.z(x.gL(),c))
if(b)return y
return H.k(J.ct(y),"$isb",z,"$asb")},
c9:function(a,b,c){var z,y
z=P.n
H.k(a,"$iso",[z],"$aso")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$isb8",[z],"$asb8")
y=a.length
c=P.b3(b,c,y,null,null,null)
return H.f_(b>0||c<y?C.a.fK(a,b,c):a)}if(!!J.N(a).$iseP)return H.jM(a,b,P.b3(b,c,a.length,null,null,null))
return P.kn(a,b,c)},
kn:function(a,b,c){var z,y,x,w
H.k(a,"$iso",[P.n],"$aso")
if(b<0)throw H.e(P.a1(b,0,J.as(a),null,null))
z=c==null
if(!z&&c<b)throw H.e(P.a1(c,b,J.as(a),null,null))
y=J.b6(a)
for(x=0;x<b;++x)if(!y.E())throw H.e(P.a1(b,0,x,null,null))
w=[]
if(z)for(;y.E();)w.push(y.gL())
else for(x=b;x<c;++x){if(!y.E())throw H.e(P.a1(c,b,x,null,null))
w.push(y.gL())}return H.f_(w)},
jV:function(a,b,c){return new H.iS(a,H.iT(a,!1,!0,!1))},
fz:function(){var z=H.jC()
if(z!=null)return P.kT(z,0,null)
throw H.e(P.V("'Uri.base' is not supported"))},
cp:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.af(a)
if(typeof a==="string")return JSON.stringify(a)
return P.it(a)},
u:function(a){return new P.fS(a)},
j8:function(a,b,c,d){var z,y
H.m(b,{func:1,ret:d,args:[P.n]})
z=H.c([],[d])
C.a.sp(z,a)
for(y=0;y<a;++y)C.a.q(z,y,b.$1(y))
return z},
e0:function(a){H.nM(a)},
kT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.c.K(a,b+4)^58)*3|C.c.K(a,b)^100|C.c.K(a,b+1)^97|C.c.K(a,b+2)^116|C.c.K(a,b+3)^97)>>>0
if(y===0)return P.fy(b>0||c<c?C.c.A(a,b,c):a,5,null).gfo()
else if(y===32)return P.fy(C.c.A(a,z,c),0,null).gfo()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.n])
C.a.q(w,0,0)
x=b-1
C.a.q(w,1,x)
C.a.q(w,2,x)
C.a.q(w,7,x)
C.a.q(w,3,b)
C.a.q(w,4,b)
C.a.q(w,5,c)
C.a.q(w,6,c)
if(P.hh(a,b,c,0,w)>=14)C.a.q(w,7,c)
v=w[1]
if(typeof v!=="number")return v.kV()
if(v>=b)if(P.hh(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.I()
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
p=!1}else{if(!(r<c&&r===s+2&&C.c.ak(a,"..",s)))n=r>s+2&&C.c.ak(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.c.ak(a,"file",b)){if(u<=b){if(!C.c.ak(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.c.A(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.c.b6(a,s,r,"/");++r;++q;++c}else{a=C.c.A(a,b,s)+"/"+C.c.A(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.c.ak(a,"http",b)){if(x&&t+3===s&&C.c.ak(a,"80",t+1))if(b===0&&!0){a=C.c.b6(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.c.A(a,b,t)+C.c.A(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.c.ak(a,"https",b)){if(x&&t+4===s&&C.c.ak(a,"443",t+1))if(b===0&&!0){a=C.c.b6(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.c.A(a,b,t)+C.c.A(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.c.A(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.m_(a,v,u,t,s,r,q,o)}return P.me(a,b,c,v,u,t,s,r,q,o)},
fB:function(a,b){var z=P.h
return C.a.k0(H.c(a.split("&"),[z]),P.eG(z,z),new P.kW(b),[P.K,P.h,P.h])},
kR:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kS(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.c.a3(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cg(C.c.A(a,v,w),null,null)
if(typeof s!=="number")return s.dD()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cg(C.c.A(a,v,c),null,null)
if(typeof s!=="number")return s.dD()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kU(a)
y=new P.kV(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.c.a3(a,w)
if(s===58){if(w===b){++w
if(C.c.a3(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaD(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kR(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.h.aY(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
mF:function(){var z,y,x,w,v
z=P.j8(22,new P.mH(),!0,P.O)
y=new P.mG(z)
x=new P.mI()
w=new P.mJ()
v=H.d(y.$2(0,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(14,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(15,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(1,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(2,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(3,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(4,229),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(5,229),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(6,231),"$isO")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(7,231),"$isO")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.d(y.$2(8,8),"$isO"),"]",5)
v=H.d(y.$2(9,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(16,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(17,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(10,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(18,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(19,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(11,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(12,236),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.d(y.$2(13,237),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.d(y.$2(20,245),"$isO"),"az",21)
v=H.d(y.$2(21,245),"$isO")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hh:function(a,b,c,d,e){var z,y,x,w,v
H.k(e,"$isb",[P.n],"$asb")
z=$.$get$hi()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.c.K(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.q(e,v>>>5,y)}return d},
M:{"^":"a;"},
"+bool":0,
am:{"^":"a;a,b",
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.am))return!1
return this.a===b.a&&!0},
ga_:function(a){var z=this.a
return(z^C.h.aY(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.ie(H.jJ(this))
y=P.bY(H.jH(this))
x=P.bY(H.jD(this))
w=P.bY(H.jE(this))
v=P.bY(H.jG(this))
u=P.bY(H.jI(this))
t=P.ig(H.jF(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
n:{
ie:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
ig:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bY:function(a){if(a>=10)return""+a
return"0"+a}}},
p:{"^":"ak;"},
"+double":0,
bx:{"^":"a;a",
V:function(a,b){return C.h.V(this.a,H.d(b,"$isbx").a)},
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.bx))return!1
return this.a===b.a},
ga_:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.im()
y=this.a
if(y<0)return"-"+new P.bx(0-y).i(0)
x=z.$1(C.h.ac(y,6e7)%60)
w=z.$1(C.h.ac(y,1e6)%60)
v=new P.il().$1(y%1e6)
return""+C.h.ac(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
n:{
er:function(a,b,c,d,e,f){return new P.bx(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
il:{"^":"l:30;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
im:{"^":"l:30;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a7:{"^":"a;"},
eS:{"^":"a7;",
i:function(a){return"Throw of null."}},
aL:{"^":"a7;a,b,c,d",
gck:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcj:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gck()+y+x
if(!this.a)return w
v=this.gcj()
u=P.cp(this.b)
return w+v+": "+H.j(u)},
n:{
bW:function(a){return new P.aL(!1,null,null,a)},
cW:function(a,b,c){return new P.aL(!0,a,b,c)}}},
cy:{"^":"aL;e,f,a,b,c,d",
gck:function(){return"RangeError"},
gcj:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
n:{
c8:function(a,b,c){return new P.cy(null,null,!0,a,b,"Value not in range")},
a1:function(a,b,c,d,e){return new P.cy(b,c,!0,a,d,"Invalid value")},
b3:function(a,b,c,d,e,f){if(typeof a!=="number")return H.B(a)
if(0>a||a>c)throw H.e(P.a1(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.a1(b,a,c,"end",f))
return b}return c}}},
iM:{"^":"aL;e,p:f>,a,b,c,d",
gck:function(){return"RangeError"},
gcj:function(){if(J.hG(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
n:{
b7:function(a,b,c,d,e){var z=H.a6(e!=null?e:J.as(b))
return new P.iM(b,z,!0,a,c,"Index out of range")}}},
kP:{"^":"a7;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
V:function(a){return new P.kP(a)}}},
kM:{"^":"a7;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
cE:function(a){return new P.kM(a)}}},
dk:{"^":"a7;a",
i:function(a){return"Bad state: "+this.a},
n:{
fa:function(a){return new P.dk(a)}}},
i6:{"^":"a7;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.cp(z))+"."},
n:{
aM:function(a){return new P.i6(a)}}},
jx:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa7:1},
f9:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa7:1},
ic:{"^":"a7;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fS:{"^":"a;a",
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
if(x==null){if(w.length>78)w=C.c.A(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.c.K(w,s)
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
m=""}l=C.c.A(w,o,p)
return y+n+l+m+"\n"+C.c.w(" ",x-o+n.length)+"^\n"},
n:{
a_:function(a,b,c){return new P.iA(a,b,c)}}},
bZ:{"^":"a;"},
n:{"^":"ak;"},
"+int":0,
o:{"^":"a;$ti",
du:["fM",function(a,b){var z=H.a5(this,"o",0)
return new H.dH(this,H.m(b,{func:1,ret:P.M,args:[z]}),[z])}],
gp:function(a){var z,y
z=this.gU(this)
for(y=0;z.E();)++y
return y},
gaQ:function(a){var z,y
z=this.gU(this)
if(!z.E())throw H.e(H.cs())
y=z.gL()
if(z.E())throw H.e(H.iP())
return y},
ag:function(a,b){var z,y,x
if(b<0)H.r(P.a1(b,0,null,"index",null))
for(z=this.gU(this),y=0;z.E();){x=z.gL()
if(b===y)return x;++y}throw H.e(P.b7(b,this,"index",null,y))},
i:function(a){return P.iO(this,"(",")")}},
b1:{"^":"a;$ti"},
b:{"^":"a;$ti",$iso:1},
"+List":0,
K:{"^":"a;$ti"},
G:{"^":"a;",
ga_:function(a){return P.a.prototype.ga_.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ak:{"^":"a;"},
"+num":0,
a:{"^":";",
C:function(a,b){return this===b},
ga_:function(a){return H.bG(this)},
i:function(a){return"Instance of '"+H.bd(this)+"'"},
toString:function(){return this.i(this)}},
aR:{"^":"a;"},
h:{"^":"a;",$iseT:1},
"+String":0,
ai:{"^":"a;aU:a<",
gp:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoe:1,
n:{
fb:function(a,b,c){var z=J.b6(b)
if(!z.E())return a
if(c.length===0){do a+=H.j(z.gL())
while(z.E())}else{a+=H.j(z.gL())
for(;z.E();)a=a+c+H.j(z.gL())}return a}}},
kW:{"^":"l:49;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.k(a,"$isK",[z,z],"$asK")
H.D(b)
y=J.bU(b).f6(b,"=")
if(y===-1){if(b!=="")a.q(0,P.dM(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.c.A(b,0,y)
w=C.c.ay(b,y+1)
z=this.a
a.q(0,P.dM(x,0,x.length,z,!0),P.dM(w,0,w.length,z,!0))}return a}},
kS:{"^":"l:51;a",
$2:function(a,b){throw H.e(P.a_("Illegal IPv4 address, "+a,this.a,b))}},
kU:{"^":"l:54;a",
$2:function(a,b){throw H.e(P.a_("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kV:{"^":"l:44;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cg(C.c.A(this.b,a,b),null,16)
if(typeof z!=="number")return z.V()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cJ:{"^":"a;ce:a<,b,c,d,fe:e>,f,r,0x,0y,0z,0Q,0ch",
sim:function(a){var z=P.h
this.Q=H.k(a,"$isK",[z,z],"$asK")},
gfp:function(){return this.b},
gd7:function(a){var z=this.c
if(z==null)return""
if(C.c.ab(z,"["))return C.c.A(z,1,z.length-1)
return z},
gc5:function(a){var z=this.d
if(z==null)return P.h5(this.a)
return z},
gdj:function(){var z=this.f
return z==null?"":z},
gf1:function(){var z=this.r
return z==null?"":z},
dn:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
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
if(x&&!C.c.ab(d,"/"))d="/"+d
g=P.dL(g,0,0,h)
return new P.cJ(i,j,c,f,d,g,this.r)},
fg:function(a,b){return this.dn(a,null,null,null,null,null,null,b,null,null)},
gdk:function(){var z,y
if(this.Q==null){z=this.f
y=P.h
this.sim(new P.fx(P.fB(z==null?"":z,C.m),[y,y]))}return this.Q},
gf2:function(){return this.c!=null},
gf5:function(){return this.f!=null},
gf3:function(){return this.r!=null},
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
C:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!!J.N(b).$isdE){if(this.a==b.gce())if(this.c!=null===b.gf2())if(this.b==b.gfp())if(this.gd7(this)==b.gd7(b))if(this.gc5(this)==b.gc5(b))if(this.e===b.gfe(b)){z=this.f
y=z==null
if(!y===b.gf5()){if(y)z=""
if(z===b.gdj()){z=this.r
y=z==null
if(!y===b.gf3()){if(y)z=""
z=z===b.gf1()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
ga_:function(a){var z=this.z
if(z==null){z=C.c.ga_(this.i(0))
this.z=z}return z},
$isdE:1,
n:{
cd:function(a,b,c,d){var z,y,x,w,v,u
H.k(a,"$isb",[P.n],"$asb")
if(c===C.m){z=$.$get$ha().b
if(typeof b!=="string")H.r(H.ah(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.a5(c,"bX",0))
y=c.gjV().cW(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.be(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
me:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mp(a,b,d)
else{if(d===b)P.bN(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mq(a,z,e-1):""
x=P.mj(a,e,f,!1)
if(typeof f!=="number")return f.I()
w=f+1
if(typeof g!=="number")return H.B(g)
v=w<g?P.mm(P.cg(C.c.A(a,w,g),new P.mf(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mk(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.V()
t=h<i?P.dL(a,h+1,i,null):null
return new P.cJ(j,y,x,v,u,t,i<c?P.mi(a,i+1,c):null)},
h5:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bN:function(a,b,c){throw H.e(P.a_(c,a,b))},
mm:function(a,b){if(a!=null&&a===P.h5(b))return
return a},
mj:function(a,b,c,d){var z,y
if(b===c)return""
if(C.c.a3(a,b)===91){if(typeof c!=="number")return c.N()
z=c-1
if(C.c.a3(a,z)!==93)P.bN(a,b,"Missing end `]` to match `[` in host")
P.fA(a,b+1,z)
return C.c.A(a,b,c).toLowerCase()}if(typeof c!=="number")return H.B(c)
y=b
for(;y<c;++y)if(C.c.a3(a,y)===58){P.fA(a,b,c)
return"["+a+"]"}return P.ms(a,b,c)},
ms:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.B(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.c.a3(a,z)
if(v===37){u=P.hc(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ai("")
s=C.c.A(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.c.A(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.K,t)
t=(C.K[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ai("")
if(y<z){x.a+=C.c.A(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.t,t)
t=(C.t[t]&1<<(v&15))!==0}else t=!1
if(t)P.bN(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.c.a3(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ai("")
s=C.c.A(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h6(v)
z+=q
y=z}}}}if(x==null)return C.c.A(a,b,c)
if(y<c){s=C.c.A(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mp:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.h8(C.c.K(a,b)))P.bN(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.c.K(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bN(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.c.A(a,b,c)
return P.mg(y?a.toLowerCase():a)},
mg:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mq:function(a,b,c){return P.bO(a,b,c,C.a9,!1)},
mk:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bO(a,b,c,C.L,!0):C.r.lz(d,new P.ml(),P.h).l(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.c.ab(w,"/"))w="/"+w
return P.mr(w,e,f)},
mr:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.c.ab(a,"/"))return P.mt(a,!z||c)
return P.mu(a)},
dL:function(a,b,c,d){var z,y
z={}
H.k(d,"$isK",[P.h,null],"$asK")
if(a!=null){if(d!=null)throw H.e(P.bW("Both query and queryParameters specified"))
return P.bO(a,b,c,C.u,!0)}if(d==null)return
y=new P.ai("")
z.a=""
d.a1(0,new P.mn(new P.mo(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mi:function(a,b,c){return P.bO(a,b,c,C.u,!0)},
hc:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.c.a3(a,b+1)
x=C.c.a3(a,z)
w=H.cP(y)
v=H.cP(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.h.aY(u,4)
if(z>=8)return H.f(C.w,z)
z=(C.w[z]&1<<(u&15))!==0}else z=!1
if(z)return H.be(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.c.A(a,b,b+3).toUpperCase()
return},
h6:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.n])
C.a.q(y,0,37)
C.a.q(y,1,C.c.K("0123456789ABCDEF",a>>>4))
C.a.q(y,2,C.c.K("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.h.iJ(a,6*w)&63|x
C.a.q(y,v,37)
C.a.q(y,v+1,C.c.K("0123456789ABCDEF",u>>>4))
C.a.q(y,v+2,C.c.K("0123456789ABCDEF",u&15))
v+=3}}return P.c9(y,0,null)},
bO:function(a,b,c,d,e){var z=P.hb(a,b,c,H.k(d,"$isb",[P.n],"$asb"),e)
return z==null?C.c.A(a,b,c):z},
hb:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.k(d,"$isb",[P.n],"$asb")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.V()
if(typeof c!=="number")return H.B(c)
if(!(y<c))break
c$0:{v=C.c.a3(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hc(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.t,u)
u=(C.t[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bN(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.c.a3(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h6(v)}}if(w==null)w=new P.ai("")
w.a+=C.c.A(a,x,y)
w.a+=H.j(t)
if(typeof s!=="number")return H.B(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.V()
if(x<c)w.a+=C.c.A(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
h9:function(a){if(C.c.ab(a,"."))return!0
return C.c.f6(a,"/.")!==-1},
mu:function(a){var z,y,x,w,v,u,t
if(!P.h9(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.Q(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.l(z,"/")},
mt:function(a,b){var z,y,x,w,v,u
if(!P.h9(a))return!b?P.h7(a):a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaD(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaD(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.q(z,0,P.h7(z[0]))}return C.a.l(z,"/")},
h7:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.h8(J.hJ(a,0)))for(y=1;y<z;++y){x=C.c.K(a,y)
if(x===58)return C.c.A(a,0,y)+"%3A"+C.c.ay(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mh:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.c.K(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.e(P.bW("Invalid URL encoding"))}}return z},
dM:function(a,b,c,d,e){var z,y,x,w,v
y=b
while(!0){if(!(y<c)){z=!0
break}x=C.c.K(a,y)
if(x<=127)if(x!==37)w=x===43
else w=!0
else w=!0
if(w){z=!1
break}++y}if(z){if(C.m!==d)w=!1
else w=!0
if(w)return C.c.A(a,b,c)
else v=new H.w(C.c.A(a,b,c))}else{v=H.c([],[P.n])
for(w=a.length,y=b;y<c;++y){x=C.c.K(a,y)
if(x>127)throw H.e(P.bW("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.e(P.bW("Truncated URI"))
C.a.h(v,P.mh(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.k(v,"$isb",[P.n],"$asb")
return new P.l1(!1).cW(v)},
h8:function(a){var z=a|32
return 97<=z&&z<=122}}},
mf:{"^":"l:40;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.I()
throw H.e(P.a_("Invalid port",this.a,z+1))}},
ml:{"^":"l:17;",
$1:function(a){return P.cd(C.aa,a,C.m,!1)}},
mo:{"^":"l:42;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.j(P.cd(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.j(P.cd(C.w,b,C.m,!0))}}},
mn:{"^":"l:33;a",
$2:function(a,b){var z,y
H.D(a)
if(b==null||typeof b==="string")this.a.$2(a,H.D(b))
else for(z=J.b6(H.hx(b,"$iso")),y=this.a;z.E();)y.$2(a,H.D(z.gL()))}},
kQ:{"^":"a;a,b,c",
gfo:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.c.f7(y,"?",z)
w=y.length
if(x>=0){v=P.bO(y,x+1,w,C.u,!1)
w=x}else v=null
z=new P.lt(this,"data",null,null,null,P.bO(y,z,w,C.L,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
n:{
fy:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.c.K(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.e(P.a_("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.e(P.a_("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.c.K(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaD(z)
if(v!==44||x!==t+7||!C.c.ak(a,"base64",t+1))throw H.e(P.a_("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.Q.kj(a,s,y)
else{r=P.hb(a,s,y,C.u,!0)
if(r!=null)a=C.c.b6(a,s,y,r)}return new P.kQ(a,z,c)}}},
mH:{"^":"l:38;",
$1:function(a){return new Uint8Array(96)}},
mG:{"^":"l:55;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hL(z,0,96,b)
return z}},
mI:{"^":"l;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.c.K(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mJ:{"^":"l;",
$3:function(a,b,c){var z,y,x
for(z=C.c.K(b,0),y=C.c.K(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
m_:{"^":"a;a,b,c,d,e,f,r,x,0y",
gf2:function(){return this.c>0},
gf4:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.I()
y=this.e
if(typeof y!=="number")return H.B(y)
y=z+1<y
z=y}else z=!1
return z},
gf5:function(){var z=this.f
if(typeof z!=="number")return z.V()
return z<this.r},
gf3:function(){return this.r<this.a.length},
ge6:function(){return this.b===4&&C.c.ab(this.a,"http")},
ge7:function(){return this.b===5&&C.c.ab(this.a,"https")},
gce:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.ge6()){this.x="http"
z="http"}else if(this.ge7()){this.x="https"
z="https"}else if(z===4&&C.c.ab(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.c.ab(this.a,"package")){this.x="package"
z="package"}else{z=C.c.A(this.a,0,z)
this.x=z}return z},
gfp:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.c.A(this.a,y,z-1):""},
gd7:function(a){var z=this.c
return z>0?C.c.A(this.a,z,this.d):""},
gc5:function(a){var z
if(this.gf4()){z=this.d
if(typeof z!=="number")return z.I()
return P.cg(C.c.A(this.a,z+1,this.e),null,null)}if(this.ge6())return 80
if(this.ge7())return 443
return 0},
gfe:function(a){return C.c.A(this.a,this.e,this.f)},
gdj:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.V()
return z<y?C.c.A(this.a,z+1,y):""},
gf1:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.c.ay(y,z+1):""},
gdk:function(){var z=this.f
if(typeof z!=="number")return z.V()
if(z>=this.r)return C.ab
z=P.h
return new P.fx(P.fB(this.gdj(),C.m),[z,z])},
dn:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.k(h,"$isK",[P.h,null],"$asK")
i=this.gce()
z=i==="file"
y=this.c
j=y>0?C.c.A(this.a,this.b+3,y):""
f=this.gf4()?this.gc5(this):null
y=this.c
if(y>0)c=C.c.A(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.c.A(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.c.ab(d,"/"))d="/"+d
g=P.dL(g,0,0,h)
x=this.r
if(x<y.length)b=C.c.ay(y,x+1)
return new P.cJ(i,j,c,f,d,g,b)},
fg:function(a,b){return this.dn(a,null,null,null,null,null,null,b,null,null)},
ga_:function(a){var z=this.y
if(z==null){z=C.c.ga_(this.a)
this.y=z}return z},
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.N(b).$isdE)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$isdE:1},
lt:{"^":"cJ;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e7:function(a){var z=document.createElement("a")
return z},
d1:function(a,b){var z=document.createElement("canvas")
return z},
io:function(a,b,c){var z,y
z=document.body
y=(z&&C.p).au(z,a,b,c)
y.toString
z=W.C
z=new H.dH(new W.aq(y),H.m(new W.ip(),{func:1,ret:P.M,args:[z]}),[z])
return H.d(z.gaQ(z),"$isR")},
iq:function(a){H.d(a,"$iscq")
return"wheel"},
by:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hO(a)
if(typeof y==="string")z=a.tagName}catch(x){H.aa(x)}return z},
iN:function(a){var z,y,x
y=document.createElement("input")
z=H.d(y,"$isez")
try{J.hQ(z,a)}catch(x){H.aa(x)}return z},
cG:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fW:function(a,b,c,d){var z,y
z=W.cG(W.cG(W.cG(W.cG(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hl:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.l)return a
return z.ev(a,b)},
a3:{"^":"R;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
hU:{"^":"a3;",
i:function(a){return String(a)},
$ishU:1,
"%":"HTMLAnchorElement"},
nX:{"^":"a3;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
ea:{"^":"a3;",$isea:1,"%":"HTMLBaseElement"},
ck:{"^":"a3;",$isck:1,"%":"HTMLBodyElement"},
d0:{"^":"a3;",
cc:function(a,b,c){if(c!=null)return this.hA(a,b,P.mV(c,null))
return this.hB(a,b)},
fw:function(a,b){return this.cc(a,b,null)},
hA:function(a,b,c){return a.getContext(b,c)},
hB:function(a,b){return a.getContext(b)},
$isd0:1,
$isef:1,
"%":"HTMLCanvasElement"},
d2:{"^":"H;",
hC:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jS:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$isd2:1,
"%":"CanvasRenderingContext2D"},
o_:{"^":"C;0p:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
o1:{"^":"ls;0p:length=",
fA:function(a,b){var z=this.hD(a,this.hj(a,b))
return z==null?"":z},
hj:function(a,b){var z,y
z=$.$get$ek()
y=z[b]
if(typeof y==="string")return y
y=this.iM(a,b)
z[b]=y
return y},
iM:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ih()+b
if(z in a)return z
return b},
hD:function(a,b){return a.getPropertyValue(b)},
gcR:function(a){return a.bottom},
gbm:function(a){return a.height},
gb3:function(a){return a.left},
gbs:function(a){return a.right},
gbx:function(a){return a.top},
gbz:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ib:{"^":"a;",
gb3:function(a){return this.fA(a,"left")}},
b0:{"^":"a3;",$isb0:1,"%":"HTMLDivElement"},
ii:{"^":"C;",
jp:function(a,b){return a.adoptNode(b)},
dB:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
o2:{"^":"H;",
i:function(a){return String(a)},
"%":"DOMException"},
ij:{"^":"H;",
jI:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
ik:{"^":"H;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
C:function(a,b){var z
if(b==null)return!1
if(!H.bT(b,"$isaQ",[P.ak],"$asaQ"))return!1
z=J.a0(b)
return a.left===z.gb3(b)&&a.top===z.gbx(b)&&a.width===z.gbz(b)&&a.height===z.gbm(b)},
ga_:function(a){return W.fW(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcR:function(a){return a.bottom},
gbm:function(a){return a.height},
gb3:function(a){return a.left},
gbs:function(a){return a.right},
gbx:function(a){return a.top},
gbz:function(a){return a.width},
$isaQ:1,
$asaQ:function(){return[P.ak]},
"%":";DOMRectReadOnly"},
lr:{"^":"cu;e1:a<,b",
gp:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.f(z,b)
return H.d(z[b],"$isR")},
q:function(a,b,c){var z
H.d(c,"$isR")
z=this.b
if(b<0||b>=z.length)return H.f(z,b)
J.cT(this.a,c,z[b])},
h:function(a,b){J.e4(this.a,b)
return b},
gU:function(a){var z=this.kP(this)
return new J.at(z,z.length,0,[H.t(z,0)])},
$asY:function(){return[W.R]},
$aso:function(){return[W.R]},
$asb:function(){return[W.R]}},
R:{"^":"C;0kK:tagName=",
gjs:function(a){return new W.lu(a)},
gcV:function(a){return new W.lr(a,a.children)},
gez:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.V()
if(x<0)x=-x*0
if(typeof w!=="number")return w.V()
if(w<0)w=-w*0
return new P.aQ(z,y,x,w,[P.ak])},
i:function(a){return a.localName},
au:["cf",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.eu
if(z==null){z=H.c([],[W.aI])
y=new W.eQ(z)
C.a.h(z,W.fU(null))
C.a.h(z,W.h2())
$.eu=y
d=y}else d=z
z=$.et
if(z==null){z=new W.hd(d)
$.et=z
c=z}else{z.a=d
c=z}}if($.aN==null){z=document
y=z.implementation
y=(y&&C.U).jI(y,"")
$.aN=y
$.d5=y.createRange()
y=$.aN
y.toString
y=y.createElement("base")
H.d(y,"$isea")
y.href=z.baseURI
z=$.aN.head;(z&&C.W).F(z,y)}z=$.aN
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.d(y,"$isck")}z=$.aN
if(!!this.$isck)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aN.body;(z&&C.p).F(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.Z(C.a8,a.tagName)){z=$.d5;(z&&C.N).fF(z,x)
z=$.d5
w=(z&&C.N).jG(z,b)}else{x.innerHTML=b
w=$.aN.createDocumentFragment()
for(z=J.a0(w);y=x.firstChild,y!=null;)z.F(w,y)}z=$.aN.body
if(x==null?z!=null:x!==z)J.e6(x)
c.dE(w)
C.z.jp(document,w)
return w},function(a,b,c){return this.au(a,b,c,null)},"jH",null,null,"glx",5,5,null],
fI:function(a,b,c,d){a.textContent=null
this.F(a,this.au(a,b,c,d))},
fH:function(a,b){return this.fI(a,b,null,null)},
b8:function(a,b){return a.getAttribute(b)},
ip:function(a,b){return a.removeAttribute(b)},
fG:function(a,b,c){return a.setAttribute(b,c)},
$isR:1,
"%":";Element"},
ip:{"^":"l:20;",
$1:function(a){return!!J.N(H.d(a,"$isC")).$isR}},
ab:{"^":"H;",$isab:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
cq:{"^":"H;",
he:function(a,b,c,d){return a.addEventListener(b,H.bo(H.m(c,{func:1,args:[W.ab]}),1),!1)},
$iscq:1,
"%":";EventTarget"},
o3:{"^":"a3;0p:length=","%":"HTMLFormElement"},
iF:{"^":"a3;","%":"HTMLHeadElement"},
iG:{"^":"H;0p:length=",
iv:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
iH:{"^":"lK;",
gp:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b7(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isC")
throw H.e(P.V("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.C]},
$asY:function(){return[W.C]},
$iso:1,
$aso:function(){return[W.C]},
$isb:1,
$asb:function(){return[W.C]},
$isiH:1,
$asaD:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
iI:{"^":"ii;","%":"HTMLDocument"},
c_:{"^":"H;0eA:data=",$isc_:1,"%":"ImageData"},
ey:{"^":"a3;",$isey:1,$isef:1,"%":"HTMLImageElement"},
ez:{"^":"a3;0type",
skS:function(a,b){a.type=H.D(b)},
$isez:1,
"%":"HTMLInputElement"},
bC:{"^":"du;",$isbC:1,"%":"KeyboardEvent"},
iW:{"^":"a3;","%":"HTMLLabelElement"},
j9:{"^":"H;",
i:function(a){return String(a)},
$isj9:1,
"%":"Location"},
jo:{"^":"a3;","%":"HTMLAudioElement;HTMLMediaElement"},
aw:{"^":"du;",$isaw:1,"%":"PointerEvent;DragEvent|MouseEvent"},
aq:{"^":"cu;a",
gaQ:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.e(P.fa("No elements"))
if(y>1)throw H.e(P.fa("More than one element"))
return z.firstChild},
af:function(a,b){var z,y,x,w,v
H.k(b,"$iso",[W.C],"$aso")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.a0(y),v=0;v<x;++v)w.F(y,z.firstChild)
return},
q:function(a,b,c){var z,y
H.d(c,"$isC")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.f(y,b)
J.cT(z,c,y[b])},
gU:function(a){var z=this.a.childNodes
return new W.ew(z,z.length,-1,[H.cf(C.ac,z,"aD",0)])},
gp:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asY:function(){return[W.C]},
$aso:function(){return[W.C]},
$asb:function(){return[W.C]}},
C:{"^":"cq;0kx:previousSibling=",
kz:function(a){var z=a.parentNode
if(z!=null)J.ci(z,a)},
kD:function(a,b){var z,y
try{z=a.parentNode
J.cT(z,b,a)}catch(y){H.aa(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.fL(a):z},
F:function(a,b){return a.appendChild(H.d(b,"$isC"))},
iq:function(a,b){return a.removeChild(b)},
iu:function(a,b,c){return a.replaceChild(b,c)},
$isC:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
js:{"^":"lQ;",
gp:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b7(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isC")
throw H.e(P.V("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.C]},
$asY:function(){return[W.C]},
$iso:1,
$aso:function(){return[W.C]},
$isb:1,
$asb:function(){return[W.C]},
$asaD:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
jQ:{"^":"H;",
jG:function(a,b){return a.createContextualFragment(b)},
fF:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
oc:{"^":"a3;0p:length=","%":"HTMLSelectElement"},
cB:{"^":"a3;",$iscB:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
ko:{"^":"a3;",
au:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.cf(a,b,c,d)
z=W.io("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.aq(y).af(0,new W.aq(z))
return y},
hF:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
kp:{"^":"a3;",
au:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.cf(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.au(z.createElement("table"),b,c,d)
z.toString
z=new W.aq(z)
x=z.gaQ(z)
x.toString
z=new W.aq(x)
w=z.gaQ(z)
y.toString
w.toString
new W.aq(y).af(0,new W.aq(w))
return y},
e5:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
of:{"^":"a3;",
au:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.cf(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.au(z.createElement("table"),b,c,d)
z.toString
z=new W.aq(z)
x=z.gaQ(z)
y.toString
x.toString
new W.aq(y).af(0,new W.aq(x))
return y},
"%":"HTMLTableSectionElement"},
fd:{"^":"a3;",$isfd:1,"%":"HTMLTemplateElement"},
bg:{"^":"H;",$isbg:1,"%":"Touch"},
bh:{"^":"du;",$isbh:1,"%":"TouchEvent"},
oh:{"^":"mb;",
gp:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b7(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isbg")
throw H.e(P.V("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.bg]},
$asY:function(){return[W.bg]},
$iso:1,
$aso:function(){return[W.bg]},
$isb:1,
$asb:function(){return[W.bg]},
$asaD:function(){return[W.bg]},
"%":"TouchList"},
du:{"^":"ab;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
ok:{"^":"jo;",$isef:1,"%":"HTMLVideoElement"},
bL:{"^":"aw;",
gjO:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.V("deltaY is not supported"))},
gjN:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.V("deltaX is not supported"))},
$isbL:1,
"%":"WheelEvent"},
lk:{"^":"cq;",
iw:function(a,b){return a.requestAnimationFrame(H.bo(H.m(b,{func:1,ret:-1,args:[P.ak]}),1))},
ht:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fQ:{"^":"C;",$isfQ:1,"%":"Attr"},
op:{"^":"ik;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
C:function(a,b){var z
if(b==null)return!1
if(!H.bT(b,"$isaQ",[P.ak],"$asaQ"))return!1
z=J.a0(b)
return a.left===z.gb3(b)&&a.top===z.gbx(b)&&a.width===z.gbz(b)&&a.height===z.gbm(b)},
ga_:function(a){return W.fW(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbm:function(a){return a.height},
gbz:function(a){return a.width},
"%":"ClientRect|DOMRect"},
ot:{"^":"mC;",
gp:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b7(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isC")
throw H.e(P.V("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.C]},
$asY:function(){return[W.C]},
$iso:1,
$aso:function(){return[W.C]},
$isb:1,
$asb:function(){return[W.C]},
$asaD:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lq:{"^":"eJ;e1:a<",
a1:function(a,b){var z,y,x,w,v,u
H.m(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.gaC(),y=z.length,x=this.a,w=J.a0(x),v=0;v<z.length;z.length===y||(0,H.A)(z),++v){u=z[v]
b.$2(u,w.b8(x,u))}},
gaC:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.d(z[w],"$isfQ")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$ascw:function(){return[P.h,P.h]},
$asK:function(){return[P.h,P.h]}},
lu:{"^":"lq;a",
k:function(a,b){return J.cV(this.a,H.D(b))},
q:function(a,b,c){J.hR(this.a,b,c)},
gp:function(a){return this.gaC().length}},
lv:{"^":"kj;a,b,c,$ti"},
oq:{"^":"lv;a,b,c,$ti"},
lw:{"^":"dl;a,b,c,d,e,$ti",n:{
a2:function(a,b,c,d,e){var z,y
z=W.hl(new W.lx(c),W.ab)
y=z!=null
if(y&&!0){H.m(z,{func:1,args:[W.ab]})
if(y)J.hI(a,b,z,!1)}return new W.lw(0,a,b,z,!1,[e])}}},
lx:{"^":"l:36;a",
$1:function(a){return this.a.$1(H.d(a,"$isab"))}},
cc:{"^":"a;a",
h_:function(a){var z,y
z=$.$get$dJ()
if(z.gkc(z)){for(y=0;y<262;++y)z.q(0,C.a7[y],W.na())
for(y=0;y<12;++y)z.q(0,C.B[y],W.nb())}},
aZ:function(a){return $.$get$fV().Z(0,W.by(a))},
aI:function(a,b,c){var z,y,x
z=W.by(a)
y=$.$get$dJ()
x=y.k(0,H.j(z)+"::"+b)
if(x==null)x=y.k(0,"*::"+b)
if(x==null)return!1
return H.dR(x.$4(a,b,c,this))},
$isaI:1,
n:{
fU:function(a){var z,y
z=W.e7(null)
y=window.location
z=new W.cc(new W.lW(z,y))
z.h_(a)
return z},
or:[function(a,b,c,d){H.d(a,"$isR")
H.D(b)
H.D(c)
H.d(d,"$iscc")
return!0},"$4","na",16,0,27],
os:[function(a,b,c,d){var z,y,x
H.d(a,"$isR")
H.D(b)
H.D(c)
z=H.d(d,"$iscc").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","nb",16,0,27]}},
aD:{"^":"a;$ti",
gU:function(a){return new W.ew(a,this.gp(a),-1,[H.cf(this,a,"aD",0)])}},
eQ:{"^":"a;a",
aZ:function(a){return C.a.er(this.a,new W.ju(a))},
aI:function(a,b,c){return C.a.er(this.a,new W.jt(a,b,c))},
$isaI:1},
ju:{"^":"l:21;a",
$1:function(a){return H.d(a,"$isaI").aZ(this.a)}},
jt:{"^":"l:21;a,b,c",
$1:function(a){return H.d(a,"$isaI").aI(this.a,this.b,this.c)}},
lX:{"^":"a;",
h8:function(a,b,c,d){var z,y,x
this.a.af(0,c)
z=b.du(0,new W.lY())
y=b.du(0,new W.lZ())
this.b.af(0,z)
x=this.c
x.af(0,C.I)
x.af(0,y)},
aZ:function(a){return this.a.Z(0,W.by(a))},
aI:["fQ",function(a,b,c){var z,y
z=W.by(a)
y=this.c
if(y.Z(0,H.j(z)+"::"+b))return this.d.jq(c)
else if(y.Z(0,"*::"+b))return this.d.jq(c)
else{y=this.b
if(y.Z(0,H.j(z)+"::"+b))return!0
else if(y.Z(0,"*::"+b))return!0
else if(y.Z(0,H.j(z)+"::*"))return!0
else if(y.Z(0,"*::*"))return!0}return!1}],
$isaI:1},
lY:{"^":"l:22;",
$1:function(a){return!C.a.Z(C.B,H.D(a))}},
lZ:{"^":"l:22;",
$1:function(a){return C.a.Z(C.B,H.D(a))}},
m4:{"^":"lX;e,a,b,c,d",
aI:function(a,b,c){if(this.fQ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cV(a,"template")==="")return this.e.Z(0,b)
return!1},
n:{
h2:function(){var z,y,x,w,v
z=P.h
y=P.eH(C.A,z)
x=H.t(C.A,0)
w=H.m(new W.m5(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.m4(y,P.c6(null,null,null,z),P.c6(null,null,null,z),P.c6(null,null,null,z),null)
y.h8(null,new H.jf(C.A,w,[x,z]),v,null)
return y}}},
m5:{"^":"l:17;",
$1:function(a){return"TEMPLATE::"+H.j(H.D(a))}},
m3:{"^":"a;",
aZ:function(a){var z=J.N(a)
if(!!z.$isf4)return!1
z=!!z.$isdm
if(z&&W.by(a)==="foreignObject")return!1
if(z)return!0
return!1},
aI:function(a,b,c){if(b==="is"||C.c.ab(b,"on"))return!1
return this.aZ(a)},
$isaI:1},
ew:{"^":"a;a,b,c,0d,$ti",
se4:function(a){this.d=H.z(a,H.t(this,0))},
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.se4(J.hH(this.a,z))
this.c=z
return!0}this.se4(null)
this.c=y
return!1},
gL:function(){return this.d},
$isb1:1},
aI:{"^":"a;"},
lW:{"^":"a;a,b",$isoj:1},
hd:{"^":"a;a",
dE:function(a){new W.mz(this).$2(a,null)},
bg:function(a,b){if(b==null)J.e6(a)
else J.ci(b,a)},
iC:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hM(a)
x=J.cV(y.ge1(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.aa(t)}v="element unprintable"
try{v=J.af(a)}catch(t){H.aa(t)}try{u=W.by(a)
this.iB(H.d(a,"$isR"),b,z,v,u,H.d(y,"$isK"),H.D(x))}catch(t){if(H.aa(t) instanceof P.aL)throw t
else{this.bg(a,b)
window
s="Removing corrupted element "+H.j(v)
if(typeof console!="undefined")window.console.warn(s)}}},
iB:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.bg(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aZ(a)){this.bg(a,b)
window
z="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aI(a,"is",g)){this.bg(a,b)
window
z="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaC()
y=H.c(z.slice(0),[H.t(z,0)])
for(x=f.gaC().length-1,z=f.a,w=J.a0(z);x>=0;--x){if(x>=y.length)return H.f(y,x)
v=y[x]
if(!this.a.aI(a,J.hT(v),w.b8(z,v))){window
u="Removing disallowed attribute <"+H.j(e)+" "+v+'="'+H.j(w.b8(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.b8(z,v)
w.ip(z,v)}}if(!!J.N(a).$isfd)this.dE(a.content)},
$isob:1},
mz:{"^":"l:41;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.iC(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.bg(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hN(z)}catch(w){H.aa(w)
v=H.d(z,"$isC")
if(x){u=v.parentNode
if(u!=null)J.ci(u,v)}else J.ci(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.d(y,"$isC")}}},
ls:{"^":"H+ib;"},
lJ:{"^":"H+Y;"},
lK:{"^":"lJ+aD;"},
lP:{"^":"H+Y;"},
lQ:{"^":"lP+aD;"},
ma:{"^":"H+Y;"},
mb:{"^":"ma+aD;"},
mB:{"^":"H+Y;"},
mC:{"^":"mB+aD;"}}],["","",,P,{"^":"",
mY:function(a){var z,y
z=J.N(a)
if(!!z.$isc_){y=z.geA(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h4(a.data,a.height,a.width)},
mX:function(a){if(a instanceof P.h4)return{data:a.a,height:a.b,width:a.c}
return a},
mV:function(a,b){var z={}
a.a1(0,new P.mW(z))
return z},
eq:function(){var z=$.ep
if(z==null){z=J.cU(window.navigator.userAgent,"Opera",0)
$.ep=z}return z},
ih:function(){var z,y
z=$.em
if(z!=null)return z
y=$.en
if(y==null){y=J.cU(window.navigator.userAgent,"Firefox",0)
$.en=y}if(y)z="-moz-"
else{y=$.eo
if(y==null){y=!P.eq()&&J.cU(window.navigator.userAgent,"Trident/",0)
$.eo=y}if(y)z="-ms-"
else z=P.eq()?"-o-":"-webkit-"}$.em=z
return z},
m0:{"^":"a;",
f_:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
dt:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.N(a)
if(!!y.$isam)return new Date(a.a)
if(!!y.$isjU)throw H.e(P.cE("structured clone of RegExp"))
if(!!y.$isc_)return a
if(!!y.$isdh)return a
if(!!y.$isK){x=this.f_(a)
y=this.b
if(x>=y.length)return H.f(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.q(y,x,w)
a.a1(0,new P.m2(z,this))
return z.a}if(!!y.$isb){x=this.f_(a)
z=this.b
if(x>=z.length)return H.f(z,x)
w=z[x]
if(w!=null)return w
return this.jF(a,x)}throw H.e(P.cE("structured clone of other type"))},
jF:function(a,b){var z,y,x,w
z=J.br(a)
y=z.gp(a)
x=new Array(y)
C.a.q(this.b,b,x)
for(w=0;w<y;++w)C.a.q(x,w,this.dt(z.k(a,w)))
return x}},
m2:{"^":"l:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.dt(b)}},
h4:{"^":"a;eA:a>,b,c",$isc_:1},
mW:{"^":"l:6;a",
$2:function(a,b){this.a[a]=b}},
m1:{"^":"m0;a,b"},
ix:{"^":"cu;a,b",
gbG:function(){var z,y,x
z=this.b
y=H.a5(z,"Y",0)
x=W.R
return new H.jd(new H.dH(z,H.m(new P.iy(),{func:1,ret:P.M,args:[y]}),[y]),H.m(new P.iz(),{func:1,ret:x,args:[y]}),[y,x])},
q:function(a,b,c){var z
H.d(c,"$isR")
z=this.gbG()
J.hP(z.b.$1(J.cj(z.a,b)),c)},
h:function(a,b){J.e4(this.b.a,b)},
gp:function(a){return J.as(this.gbG().a)},
k:function(a,b){var z=this.gbG()
return z.b.$1(J.cj(z.a,b))},
gU:function(a){var z=P.j7(this.gbG(),!1,W.R)
return new J.at(z,z.length,0,[H.t(z,0)])},
$asY:function(){return[W.R]},
$aso:function(){return[W.R]},
$asb:function(){return[W.R]}},
iy:{"^":"l:20;",
$1:function(a){return!!J.N(H.d(a,"$isC")).$isR}},
iz:{"^":"l:56;",
$1:function(a){return H.i(H.d(a,"$isC"),"$isR")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cH:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lL:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lR:{"^":"a;$ti",
gbs:function(a){var z=this.a
if(typeof z!=="number")return z.I()
return H.z(z+this.c,H.t(this,0))},
gcR:function(a){var z=this.b
if(typeof z!=="number")return z.I()
return H.z(z+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
C:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bT(b,"$isaQ",[P.ak],"$asaQ"))return!1
z=this.a
y=J.a0(b)
x=y.gb3(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbx(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.I()
w=H.t(this,0)
if(H.z(z+this.c,w)===y.gbs(b)){if(typeof x!=="number")return x.I()
z=H.z(x+this.d,w)===y.gcR(b)}else z=!1}else z=!1}else z=!1
return z},
ga_:function(a){var z,y,x,w,v
z=this.a
y=J.bV(z)
x=this.b
w=J.bV(x)
if(typeof z!=="number")return z.I()
v=H.t(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.I()
v=H.z(x+this.d,v)
return P.lL(P.cH(P.cH(P.cH(P.cH(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aQ:{"^":"lR;b3:a>,bx:b>,bz:c>,bm:d>,$ti"}}],["","",,P,{"^":"",f4:{"^":"dm;",$isf4:1,"%":"SVGScriptElement"},dm:{"^":"R;",
gcV:function(a){return new P.ix(a,new W.aq(a))},
au:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aI])
C.a.h(z,W.fU(null))
C.a.h(z,W.h2())
C.a.h(z,new W.m3())
c=new W.hd(new W.eQ(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).jH(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.aq(w)
u=z.gaQ(z)
for(z=J.a0(v);x=u.firstChild,x!=null;)z.F(v,x)
return v},
$isdm:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":"",O:{"^":"a;",$iso:1,
$aso:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskB:1}}],["","",,P,{"^":""}],["","",,P,{"^":"",hY:{"^":"H;",$ishY:1,"%":"WebGLBuffer"},iB:{"^":"H;",$isiB:1,"%":"WebGLFramebuffer"},jN:{"^":"H;",$isjN:1,"%":"WebGLProgram"},di:{"^":"H;",
cK:function(a,b){return a.activeTexture(b)},
es:function(a,b,c){return a.attachShader(b,c)},
aA:function(a,b,c){return a.bindBuffer(b,c)},
ju:function(a,b,c){return a.bindFramebuffer(b,c)},
aJ:function(a,b,c){return a.bindTexture(b,c)},
jv:function(a,b,c){return a.blendFunc(b,c)},
ew:function(a,b,c,d){return a.bufferData(b,c,d)},
jy:function(a,b){return a.clear(b)},
jz:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jA:function(a,b){return a.clearDepth(b)},
jC:function(a,b){return a.compileShader(b)},
jJ:function(a,b){return a.createShader(b)},
jL:function(a,b){return a.deleteProgram(b)},
jM:function(a,b){return a.deleteShader(b)},
jP:function(a,b){return a.depthFunc(b)},
jQ:function(a,b){return a.disable(b)},
eC:function(a,b){return a.disableVertexAttribArray(b)},
jR:function(a,b,c,d,e){return a.drawElements(b,c,H.a6(d),H.a6(e))},
d_:function(a,b){return a.enable(b)},
eE:function(a,b){return a.enableVertexAttribArray(b)},
fs:function(a,b,c){return a.getActiveAttrib(b,c)},
ft:function(a,b,c){return a.getActiveUniform(b,c)},
fu:function(a,b,c){return a.getAttribLocation(b,c)},
dC:function(a,b){return a.getParameter(b)},
fz:function(a,b){return a.getProgramInfoLog(b)},
cd:function(a,b,c){return a.getProgramParameter(b,c)},
fB:function(a,b){return a.getShaderInfoLog(b)},
fC:function(a,b,c){return a.getShaderParameter(b,c)},
fD:function(a,b,c){return a.getUniformLocation(b,c)},
kf:function(a,b){return a.linkProgram(b)},
kw:function(a,b,c){return a.pixelStorei(b,c)},
fJ:function(a,b,c){return a.shaderSource(b,c)},
kM:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.N(g)
if(!!z.$isc_)y=!0
else y=!1
if(y){this.iO(a,b,c,d,e,f,P.mX(g))
return}if(!!z.$isey)z=!0
else z=!1
if(z){this.iP(a,b,c,d,e,f,g)
return}throw H.e(P.bW("Incorrect number or type of arguments"))},
kL:function(a,b,c,d,e,f,g){return this.kM(a,b,c,d,e,f,g,null,null,null)},
iO:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
iP:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c9:function(a,b,c,d){return a.texParameteri(b,c,d)},
O:function(a,b,c){return a.uniform1f(b,c)},
T:function(a,b,c){return a.uniform1i(b,c)},
B:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fm:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fn:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ds:function(a,b){return a.useProgram(b)},
kT:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kU:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isdi:1,
"%":"WebGLRenderingContext"},k5:{"^":"H;",$isk5:1,"%":"WebGLShader"},kq:{"^":"H;",$iskq:1,"%":"WebGLTexture"},kK:{"^":"H;",$iskK:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",X:{"^":"a;0a,0b,0c,0d,$ti",
shJ:function(a){this.a=H.k(a,"$isb",[H.a5(this,"X",0)],"$asb")},
sec:function(a){this.b=H.m(a,{func:1,ret:P.M,args:[[P.o,H.a5(this,"X",0)]]})},
se9:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.n,[P.o,H.a5(this,"X",0)]]})},
sed:function(a){this.d=H.m(a,{func:1,ret:-1,args:[P.n,[P.o,H.a5(this,"X",0)]]})},
bE:function(a){this.shJ(H.c([],[a]))
this.sec(null)
this.se9(null)
this.sed(null)},
dF:function(a,b,c){var z=H.a5(this,"X",0)
H.m(b,{func:1,ret:P.M,args:[[P.o,z]]})
z={func:1,ret:-1,args:[P.n,[P.o,z]]}
H.m(a,z)
H.m(c,z)
this.sec(b)
this.se9(a)
this.sed(c)},
b9:function(a,b){return this.dF(a,null,b)},
eb:function(a){var z
H.k(a,"$iso",[H.a5(this,"X",0)],"$aso")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dM:function(a,b){var z
H.k(b,"$iso",[H.a5(this,"X",0)],"$aso")
z=this.c
if(z!=null)z.$2(a,b)},
gp:function(a){return this.a.length},
gU:function(a){var z=this.a
return new J.at(z,z.length,0,[H.t(z,0)])},
ag:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.a5(this,"X",0)
H.z(b,z)
z=[z]
if(this.eb(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dM(x,H.c([b],z))}},
af:function(a,b){var z,y
H.k(b,"$iso",[H.a5(this,"X",0)],"$aso")
if(this.eb(b)){z=this.a
y=z.length
C.a.af(z,b)
this.dM(y,b)}},
$iso:1,
n:{
d3:function(a){var z=new O.X([a])
z.bE(a)
return z}}},de:{"^":"a;0a,0b",
scq:function(a){this.a=H.k(a,"$isb",[V.an],"$asb")},
gp:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
fW:function(a){var z=this.b
if(!(z==null))z.J(a)},
aR:function(){return this.fW(null)},
ga7:function(){var z=this.a
if(z.length>0)return C.a.gaD(z)
else return V.ba()},
c7:function(a){var z=this.a
if(a==null)C.a.h(z,V.ba())
else C.a.h(z,a)
this.aR()},
aN:function(){var z=this.a
if(z.length>0){z.pop()
this.aR()}}}}],["","",,E,{"^":"",cX:{"^":"a;"},au:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0ar:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sfX:function(a,b){this.y=H.k(b,"$isX",[E.au],"$asX")},
sar:function(a){this.z=H.d(a,"$isbz")},
sad:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gu().M(0,this.gfc())
y=this.c
if(y!=null)y.gu().h(0,this.gfc())
x=new D.J("shape",z,this.c,this,[F.f6])
x.b=!0
this.b5(x)}},
ax:function(a){var z
for(z=this.y.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.E();)z.d.ax(a)},
ai:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga7())
z.aR()
a.di(this.f)
z=a.dy
y=(z&&C.a).gaD(z)
if(y!=null&&this.d!=null)y.ff(a,this)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.E();)z.d.ai(a)
a.dh()
a.dx.aN()},
gu:function(){var z=this.z
if(z==null){z=D.F()
this.z=z}return z},
b5:function(a){var z=this.z
if(!(z==null))z.J(a)},
aa:function(){return this.b5(null)},
kn:[function(a){H.d(a,"$isy")
this.e=null
this.b5(a)},function(){return this.kn(null)},"lE","$1","$0","gfc",0,2,1],
kl:[function(a){this.b5(H.d(a,"$isy"))},function(){return this.kl(null)},"lC","$1","$0","gfb",0,2,1],
lB:[function(a,b){var z,y,x,w,v,u,t
H.k(b,"$iso",[E.au],"$aso")
for(z=b.length,y=this.gfb(),x={func:1,ret:-1,args:[D.y]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.gar()==null){t=new D.bz()
t.sal(null)
t.sbe(null)
t.c=null
t.d=0
u.sar(t)}t=u.gar()
t.toString
H.m(y,x)
if(t.a==null)t.sal(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.aa()},"$2","gkk",8,0,7],
lD:[function(a,b){var z,y
H.k(b,"$iso",[E.au],"$aso")
for(z=b.gU(b),y=this.gfb();z.E();)z.gL().gu().M(0,y)
this.aa()},"$2","gkm",8,0,7],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaH:1,
n:{
ev:function(a,b,c,d,e,f){var z=new E.au()
z.a=d
z.b=!0
z.sfX(0,O.d3(E.au))
z.y.b9(z.gkk(),z.gkm())
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
z.sad(0,e)
return z}}},jW:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
siN:function(a){this.dy=H.k(a,"$isb",[O.bH],"$asb")},
siI:function(a){this.fr=H.k(a,"$isK",[P.h,A.cz],"$asK")},
fT:function(a,b){var z,y
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
z=new O.de()
y=[V.an]
z.scq(H.c([],y))
z.b=null
z.gu().h(0,new E.jY(this))
this.cy=z
z=new O.de()
z.scq(H.c([],y))
z.b=null
z.gu().h(0,new E.jZ(this))
this.db=z
z=new O.de()
z.scq(H.c([],y))
z.b=null
z.gu().h(0,new E.k_(this))
this.dx=z
this.siN(H.c([],[O.bH]))
z=this.dy;(z&&C.a).h(z,null)
this.siI(new H.b2(0,0,[P.h,A.cz]))},
gky:function(){var z=this.z
if(z==null){z=this.cy.ga7().w(0,this.db.ga7())
this.z=z}return z},
di:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaD(z):a;(z&&C.a).h(z,y)},
dh:function(){var z=this.dy
if(z.length>1)z.pop()},
eq:function(a){var z=a.b
if(z.length===0)throw H.e(P.u("May not cache a shader with no name."))
if(this.fr.bO(z))throw H.e(P.u('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.q(0,z,a)},
n:{
jX:function(a,b){var z=new E.jW(a,b)
z.fT(a,b)
return z}}},jY:{"^":"l:8;a",
$1:function(a){var z
H.d(a,"$isy")
z=this.a
z.z=null
z.ch=null}},jZ:{"^":"l:8;a",
$1:function(a){var z
H.d(a,"$isy")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},k_:{"^":"l:8;a",
$1:function(a){var z
H.d(a,"$isy")
z=this.a
z.ch=null
z.cx=null}},kt:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0ar:x<,0y,0z,0Q,0ch,0cx,0cy",
sar:function(a){this.x=H.d(a,"$isbz")},
fZ:[function(a){H.d(a,"$isy")
this.kF()},function(){return this.fZ(null)},"fY","$1","$0","gdN",0,2,1],
gk6:function(){var z,y,x
z=Date.now()
y=C.h.ac(P.er(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.am(z,!1)
return x/y},
ef:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.w()
if(typeof z!=="number")return H.B(z)
x=C.k.d6(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.w()
w=C.k.d6(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.fi(C.y,this.gkE())}},
kF:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.m(new E.kv(this),{func:1,ret:-1,args:[P.ak]})
C.P.ht(z)
C.P.iw(z,W.hl(y,P.ak))}},"$0","gkE",0,0,3],
kC:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.ef()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.am(w,!1)
x.y=P.er(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sp(w.a,0)
w.aR()
w=x.db
C.a.sp(w.a,0)
w.aR()
w=x.dx
C.a.sp(w.a,0)
w.aR()
w=x.dy;(w&&C.a).sp(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ai(this.e)}x=this.z
if(!(x==null))x.J(null)}catch(v){z=H.aa(v)
y=H.bs(v)
P.e0("Error: "+H.j(z))
P.e0("Stack: "+H.j(y))
throw H.e(z)}},
n:{
ku:function(a,b,c,d,e){var z,y,x,w
z=J.N(a)
if(!!z.$isd0)return E.fh(a,!0,!0,!0,!1)
y=W.d1(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcV(a).h(0,y)
w=E.fh(y,!0,!0,!0,!1)
w.a=a
return w},
fh:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kt()
y=P.j3(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.q.cc(a,"webgl",y)
x=H.d(x==null?C.q.cc(a,"experimental-webgl",y):x,"$isdi")
if(x==null)H.r(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jX(x,a)
w=new T.kr(x)
w.b=H.a6((x&&C.b).dC(x,3379))
w.c=H.a6(C.b.dC(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.kX(a)
v=new X.iV()
v.c=new X.aG(!1,!1,!1)
v.sil(P.c6(null,null,null,P.n))
w.b=v
v=new X.jp(w)
v.f=0
v.r=V.aO()
v.x=V.aO()
v.Q=1
v.ch=1
w.c=v
v=new X.ja(w)
v.r=0
v.x=V.aO()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ky(w)
v.e=0
v.f=V.aO()
v.r=V.aO()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.shu(H.c([],[[P.dl,P.a]]))
v=w.z
u=document
t=W.aw
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.a2(u,"contextmenu",H.m(w.ghY(),s),!1,t))
v=w.z
r=W.ab
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a2(a,"focus",H.m(w.gi0(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a2(a,"blur",H.m(w.ghU(),q),!1,r))
v=w.z
p=W.bC
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a2(u,"keyup",H.m(w.gi2(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a2(u,"keydown",H.m(w.gi1(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousedown",H.m(w.gi5(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mouseup",H.m(w.gi7(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousemove",H.m(w.gi6(),s),!1,t))
p=w.z
o=W.bL;(p&&C.a).h(p,W.a2(a,H.D(W.iq(a)),H.m(w.gi8(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a2(u,"mousemove",H.m(w.ghZ(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a2(u,"mouseup",H.m(w.gi_(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a2(u,"pointerlockchange",H.m(w.gi9(),q),!1,r))
r=w.z
q=W.bh
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a2(a,"touchstart",H.m(w.gij(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchend",H.m(w.gih(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchmove",H.m(w.gii(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.am(Date.now(),!1)
z.cy=0
z.ef()
return z}}},kv:{"^":"l:50;a",
$1:function(a){var z
H.nL(a)
z=this.a
if(z.ch){z.ch=!1
z.kC()}}}}],["","",,Z,{"^":"",fN:{"^":"a;a,b",$isnY:1,n:{
dG:function(a,b,c){var z
H.k(c,"$isb",[P.n],"$asb")
z=a.createBuffer()
C.b.aA(a,b,z)
C.b.ew(a,b,new Int16Array(H.bl(c)),35044)
C.b.aA(a,b,null)
return new Z.fN(b,z)}}},ed:{"^":"cX;a,b,c,d,e",
a5:function(a){var z,y,x
try{y=a.a
C.b.eE(y,this.e)
C.b.kT(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.aa(x)
y=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(z))
throw H.e(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},fO:{"^":"a;a",$isnZ:1},d_:{"^":"a;a,0b,c,d",
shE:function(a){this.b=H.k(a,"$isb",[Z.c0],"$asb")},
aM:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a5:function(a){var z,y
z=this.a
C.b.aA(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a5(a)},
aP:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.eC(x,z[y].e)
C.b.aA(x,this.a.a,null)},
ai:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
w=v.c
u=w.a
C.b.aA(y,u,w.b)
C.b.jR(y,v.a,v.b,5123,0)
C.b.aA(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.h]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.af(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(y,", ")+"\nAttrs:   "+C.a.l(u,", ")},
$isog:1},c0:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bd(this.c)+"'")+"]"}},bi:{"^":"a;a",
gdH:function(a){var z,y
z=this.a
y=(z&$.$get$aA().a)!==0?3:0
if((z&$.$get$aU().a)!==0)y+=3
if((z&$.$get$aT().a)!==0)y+=3
if((z&$.$get$aV().a)!==0)y+=2
if((z&$.$get$aW().a)!==0)y+=3
if((z&$.$get$bJ().a)!==0)y+=3
if((z&$.$get$bK().a)!==0)y+=4
if((z&$.$get$bj().a)!==0)++y
return(z&$.$get$aS().a)!==0?y+4:y},
jr:function(a){var z,y,x
z=$.$get$aA()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bj()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fM()},
C:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bi))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$aA().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aU().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aV().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aW().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bJ().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bK().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bj().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.l(z,"|")},
n:{
ap:function(a){return new Z.bi(a)}}}}],["","",,D,{"^":"",eg:{"^":"a;"},bz:{"^":"a;0a,0b,0c,0d",
sal:function(a){this.a=H.k(a,"$isb",[{func:1,ret:-1,args:[D.y]}],"$asb")},
sbe:function(a){this.b=H.k(a,"$isb",[{func:1,ret:-1,args:[D.y]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.y]}
H.m(b,z)
if(this.a==null)this.sal(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
M:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[D.y]})
z=this.a
z=z==null?null:C.a.Z(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).M(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.Z(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).M(z,b)||y}return y},
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
return!0}if(!x)C.a.a1(y,new D.iu(z))
y=this.b
if(!(y==null))C.a.a1(y,new D.iv(z))
z=this.b
if(!(z==null))C.a.sp(z,0)
return!0},
jT:function(){return this.J(null)},
kG:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.J(y)}}},
aE:function(){return this.kG(!0,!1)},
n:{
F:function(){var z=new D.bz()
z.sal(null)
z.sbe(null)
z.c=null
z.d=0
return z}}},iu:{"^":"l:23;a",
$1:function(a){var z
H.m(a,{func:1,ret:-1,args:[D.y]})
z=this.a.a
z.b
a.$1(z)}},iv:{"^":"l:23;a",
$1:function(a){var z
H.m(a,{func:1,ret:-1,args:[D.y]})
z=this.a.a
z.b
a.$1(z)}},y:{"^":"a;a,0b"},c1:{"^":"y;c,d,a,0b,$ti"},c2:{"^":"y;c,d,a,0b,$ti"},J:{"^":"y;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",ee:{"^":"a;a,b",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ee))return!1
if(this.a!=b.a)return!1
if(!this.b.C(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},eE:{"^":"a;a,b",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eE))return!1
if(this.a!=b.a)return!1
if(!this.b.C(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},iV:{"^":"a;0a,0b,0c,0d",
sil:function(a){this.d=H.k(a,"$isf5",[P.n],"$asf5")},
kt:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kp:function(a){this.c=a.b
this.d.M(0,a.a)
return!1}},eI:{"^":"cx;x,y,c,d,e,a,0b"},ja:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
bc:function(a,b){var z,y,x,w,v,u,t,s
z=new P.am(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.w()
v=b.b
u=this.ch
if(typeof v!=="number")return v.w()
t=new V.a4(y.a+x*w,y.b+v*u)
u=this.a.gb_()
s=new X.bE(a,V.aO(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
dg:function(a,b){this.r=a.a
return!1},
bq:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.fE()
if(typeof z!=="number")return z.cb()
this.r=(z&~y)>>>0
return!1},
bp:function(a,b){var z=this.d
if(z==null)return!1
z.J(this.bc(a,b))
return!0},
ku:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gb_()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.w()
t=a.b
s=this.cy
if(typeof t!=="number")return t.w()
w=new X.df(new V.W(v*u,t*s),y,x,new P.am(w,!1),this)
w.b=!0
z.J(w)
return!0},
i4:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.am(Date.now(),!1)
y=this.f
x=new X.eI(c,a,this.a.gb_(),b,z,this)
x.b=!0
y.J(x)
this.y=z
this.x=V.aO()}},aG:{"^":"a;a,b,c",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aG))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bE:{"^":"cx;x,y,z,Q,ch,c,d,e,a,0b"},jp:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
cm:function(a,b,c){var z,y,x
z=new P.am(Date.now(),!1)
y=this.a.gb_()
x=new X.bE(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
dg:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.J(this.cm(a,b,!0))
return!0},
bq:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.fE()
if(typeof z!=="number")return z.cb()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.J(this.cm(a,b,!0))
return!0},
bp:function(a,b){var z=this.d
if(z==null)return!1
z.J(this.cm(a,b,!1))
return!0},
kv:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gb_()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.w()
u=a.b
t=this.ch
if(typeof u!=="number")return u.w()
x=new X.df(new V.W(w*v,u*t),y,b,new P.am(x,!1),this)
x.b=!0
z.J(x)
return!0},
geD:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
gca:function(){var z=this.c
if(z==null){z=D.F()
this.c=z}return z},
gfa:function(){var z=this.d
if(z==null){z=D.F()
this.d=z}return z}},df:{"^":"cx;x,c,d,e,a,0b"},cx:{"^":"y;"},fl:{"^":"cx;x,y,z,Q,ch,c,d,e,a,0b"},ky:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
bc:function(a,b){var z,y,x,w
H.k(a,"$isb",[V.a4],"$asb")
z=new P.am(Date.now(),!1)
y=a.length>0?a[0]:V.aO()
x=this.a.gb_()
w=new X.fl(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
ks:function(a){var z
H.k(a,"$isb",[V.a4],"$asb")
z=this.b
if(z==null)return!1
z.J(this.bc(a,!0))
return!0},
kq:function(a){var z
H.k(a,"$isb",[V.a4],"$asb")
z=this.c
if(z==null)return!1
z.J(this.bc(a,!0))
return!0},
kr:function(a){var z
H.k(a,"$isb",[V.a4],"$asb")
z=this.d
if(z==null)return!1
z.J(this.bc(a,!1))
return!0}},kX:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
shu:function(a){this.z=H.k(a,"$isb",[[P.dl,P.a]],"$asb")},
gb_:function(){var z=this.a
return V.f2(0,0,C.q.gez(z).c,C.q.gez(z).d)},
dZ:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eE(z,new X.aG(y,a.altKey,a.shiftKey))},
aX:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aG(y,a.altKey,a.shiftKey)},
cH:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aG(y,a.altKey,a.shiftKey)},
aH:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.N()
v=z.top
if(typeof x!=="number")return x.N()
return new V.a4(y-w,x-v)},
bf:function(a){return new V.W(a.movementX,a.movementY)},
cB:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.a4])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
t=C.k.aw(u.pageX)
C.k.aw(u.pageY)
s=z.left
C.k.aw(u.pageX)
C.a.h(y,new V.a4(t-s,C.k.aw(u.pageY)-z.top))}return y},
aF:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ee(z,new X.aG(y,a.altKey,a.shiftKey))},
cr:function(a){var z,y,x,w,v,u
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
lb:[function(a){this.f=!0},"$1","gi0",4,0,12],
l5:[function(a){this.f=!1},"$1","ghU",4,0,12],
l8:[function(a){H.d(a,"$isaw")
if(this.f&&this.cr(a))a.preventDefault()},"$1","ghY",4,0,4],
ld:[function(a){var z
H.d(a,"$isbC")
if(!this.f)return
z=this.dZ(a)
this.b.kt(z)},"$1","gi2",4,0,24],
lc:[function(a){var z
H.d(a,"$isbC")
if(!this.f)return
z=this.dZ(a)
this.b.kp(z)},"$1","gi1",4,0,24],
lf:[function(a){var z,y,x,w
H.d(a,"$isaw")
z=this.a
z.focus()
this.f=!0
this.aX(a)
if(this.x){y=this.aF(a)
x=this.bf(a)
if(this.d.dg(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aF(a)
w=this.aH(a)
if(this.c.dg(y,w))a.preventDefault()},"$1","gi5",4,0,4],
lh:[function(a){var z,y,x
H.d(a,"$isaw")
this.aX(a)
z=this.aF(a)
if(this.x){y=this.bf(a)
if(this.d.bq(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.bq(z,x))a.preventDefault()},"$1","gi7",4,0,4],
la:[function(a){var z,y,x
H.d(a,"$isaw")
if(!this.cr(a)){this.aX(a)
z=this.aF(a)
if(this.x){y=this.bf(a)
if(this.d.bq(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.bq(z,x))a.preventDefault()}},"$1","gi_",4,0,4],
lg:[function(a){var z,y,x
H.d(a,"$isaw")
this.aX(a)
z=this.aF(a)
if(this.x){y=this.bf(a)
if(this.d.bp(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.bp(z,x))a.preventDefault()},"$1","gi6",4,0,4],
l9:[function(a){var z,y,x
H.d(a,"$isaw")
if(!this.cr(a)){this.aX(a)
z=this.aF(a)
if(this.x){y=this.bf(a)
if(this.d.bp(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.bp(z,x))a.preventDefault()}},"$1","ghZ",4,0,4],
li:[function(a){var z,y
H.d(a,"$isbL")
this.aX(a)
z=new V.W((a&&C.O).gjN(a),C.O.gjO(a)).v(0,180)
if(this.x){if(this.d.ku(z))a.preventDefault()
return}if(this.r)return
y=this.aH(a)
if(this.c.kv(z,y))a.preventDefault()},"$1","gi8",4,0,47],
lj:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aF(this.y)
x=this.aH(this.y)
this.d.i4(y,x,z)}},"$1","gi9",4,0,12],
lr:[function(a){var z
H.d(a,"$isbh")
this.a.focus()
this.f=!0
this.cH(a)
z=this.cB(a)
if(this.e.ks(z))a.preventDefault()},"$1","gij",4,0,13],
lp:[function(a){var z
H.d(a,"$isbh")
this.cH(a)
z=this.cB(a)
if(this.e.kq(z))a.preventDefault()},"$1","gih",4,0,13],
lq:[function(a){var z
H.d(a,"$isbh")
this.cH(a)
z=this.cB(a)
if(this.e.kr(z))a.preventDefault()},"$1","gii",4,0,13]}}],["","",,D,{"^":"",co:{"^":"a;0a,0b,0c,0d",
gu:function(){var z=this.d
if(z==null){z=D.F()
this.d=z}return z},
aS:[function(a){var z
H.d(a,"$isy")
z=this.d
if(!(z==null))z.J(a)},function(){return this.aS(null)},"kW","$1","$0","gh1",0,2,1],
$isa8:1,
$isaH:1},a8:{"^":"a;",$isaH:1},iX:{"^":"X;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
shs:function(a){this.e=H.k(a,"$isb",[D.co],"$asb")},
sik:function(a){this.f=H.k(a,"$isb",[D.eW],"$asb")},
siK:function(a){this.r=H.k(a,"$isb",[D.f8],"$asb")},
siV:function(a){this.x=H.k(a,"$isb",[D.fe],"$asb")},
siW:function(a){this.y=H.k(a,"$isb",[D.ff],"$asb")},
siX:function(a){this.z=H.k(a,"$isb",[D.fg],"$asb")},
gu:function(){var z=this.Q
if(z==null){z=D.F()
this.Q=z}return z},
aS:function(a){var z=this.Q
if(!(z==null))z.J(a)},
i3:[function(a){var z
H.d(a,"$isy")
z=this.ch
if(!(z==null))z.J(a)},function(){return this.i3(null)},"le","$1","$0","gea",0,2,1],
lk:[function(a){var z,y,x
H.k(a,"$iso",[D.a8],"$aso")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.A)(a),++y){x=a[y]
if(x==null||this.h0(x))return!1}return!0},"$1","gia",4,0,39],
l2:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a8
H.k(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gea(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=H.d(b[u],"$isa8")
if(t instanceof D.co)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bz()
s.sal(null)
s.sbe(null)
s.c=null
s.d=0
t.d=s}H.m(x,w)
if(s.a==null)s.sal(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.c1(a,b,this,[z])
z.b=!0
this.aS(z)},"$2","ghR",8,0,26],
lm:[function(a,b){var z,y,x,w
z=D.a8
H.k(b,"$iso",[z],"$aso")
for(y=b.gU(b),x=this.gea();y.E();){w=y.gL()
C.a.M(this.e,w)
w.gu().M(0,x)}z=new D.c2(a,b,this,[z])
z.b=!0
this.aS(z)},"$2","gic",8,0,26],
h0:function(a){var z=C.a.Z(this.e,a)
return z},
$aso:function(){return[D.a8]},
$asX:function(){return[D.a8]}},eW:{"^":"a;",$isa8:1,$isaH:1},f8:{"^":"a;",$isa8:1,$isaH:1},fe:{"^":"a;",$isa8:1,$isaH:1},ff:{"^":"a;",$isa8:1,$isaH:1},fg:{"^":"a;",$isa8:1,$isaH:1}}],["","",,V,{"^":"",
o0:[function(a,b){if(typeof b!=="number")return b.N()
if(typeof a!=="number")return H.B(a)
return Math.abs(b-a)<=1e-9},"$2","jn",8,0,37],
nW:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.k.bB(a-b,z)
return(a<0?a+z:a)+b},
P:function(a,b,c){if(a==null)return C.c.ao("null",c)
return C.c.ao(C.k.fk($.q.$2(a,0)?0:a,b),c+b+1)},
bq:function(a,b,c){var z,y,x,w,v,u
H.k(a,"$isb",[P.p],"$asb")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.A)(a),++w){v=V.P(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.q(z,u,C.c.ao(z[u],x))}return z},
e_:function(a,b){return C.k.kO(Math.pow(b,C.a_.d6(Math.log(H.mU(a))/Math.log(b))))},
v:{"^":"a;a,b,c",
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.v))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
aC:{"^":"a;a,b,c,d",
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aC))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
eM:{"^":"a;a,b,c,d,e,f,r,x,y",
aj:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.p])
return z},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eM))return!1
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
z=[P.p]
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
return s+(z+w[2]+"]")}},
an:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
aj:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.p])
return z},
da:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.q.$2(a2,0))return V.ba()
a3=1/a2
a4=-w
a5=-i
return V.aF((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
w:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.d(a7,"$isan")
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
return V.aF(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
dr:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.E(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
by:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.U(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.an))return!1
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
i:function(a){return this.R()},
f0:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.p]
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
R:function(){return this.f0("",3,0)},
H:function(a){return this.f0(a,3,0)},
n:{
ba:function(){var z=$.eO
if(z==null){z=V.aF(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eO=z}return z},
aF:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.an(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eN:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.v(0,Math.sqrt(c.G(c)))
y=b.aK(z)
x=y.v(0,Math.sqrt(y.G(y)))
w=z.aK(x)
v=new V.E(a.a,a.b,a.c)
u=x.W(0).G(v)
t=w.W(0).G(v)
s=z.W(0).G(v)
return V.aF(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
a4:{"^":"a;a,b",
N:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"},
n:{
aO:function(){var z=$.eX
if(z==null){z=new V.a4(0,0)
$.eX=z}return z}}},
U:{"^":"a;a,b,c",
I:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
w:function(a,b){return new V.U(this.a*b,this.b*b,this.c*b)},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"},
n:{
eY:function(){var z=$.bF
if(z==null){z=new V.U(0,0,0)
$.bF=z}return z}}},
aP:{"^":"a;a,b,c,d",
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aP))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
f1:{"^":"a;a,b,c,d",
gah:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f1))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"},
n:{
f2:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f1(a,b,c,d)}}},
W:{"^":"a;a,b",
ke:[function(a){return Math.sqrt(this.G(this))},"$0","gp",1,0,19],
G:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.w()
if(typeof y!=="number")return H.B(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.w()
if(typeof w!=="number")return H.B(w)
return z*y+x*w},
w:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.W(z*b,y*b)},
v:function(a,b){var z,y
if($.q.$2(b,0)){z=$.fD
if(z==null){z=new V.W(0,0)
$.fD=z}return z}z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.W(z/b,y/b)},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
E:{"^":"a;a,b,c",
ke:[function(a){return Math.sqrt(this.G(this))},"$0","gp",1,0,19],
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
dc:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.E(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aK:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.E(z*y-x*w,x*v-u*y,u*w-z*v)},
I:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
W:function(a){return new V.E(-this.a,-this.b,-this.c)},
w:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if($.q.$2(b,0))return V.bI()
return new V.E(this.a/b,this.b/b,this.c/b)},
f9:function(){if(!$.q.$2(0,this.a))return!1
if(!$.q.$2(0,this.b))return!1
if(!$.q.$2(0,this.c))return!1
return!0},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"},
n:{
bI:function(){var z=$.fH
if(z==null){z=new V.E(0,0,0)
$.fH=z}return z},
fI:function(){var z=$.fG
if(z==null){z=new V.E(0,1,0)
$.fG=z}return z},
fJ:function(){var z=$.cF
if(z==null){z=new V.E(0,0,1)
$.cF=z}return z}}}}],["","",,U,{"^":"",i4:{"^":"eg;0a,0b,0c,0d,0e,0f,0r,0x,0y",
ci:function(a){var z=V.nW(a,this.c,this.b)
return z},
gu:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
X:function(a){var z=this.y
if(!(z==null))z.J(a)},
sdv:function(a,b){},
sdd:function(a){var z,y
z=this.b
if(!$.q.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.ci(z)}z=new D.J("maximumLocation",y,this.b,this,[P.p])
z.b=!0
this.X(z)}},
sdf:function(a){var z,y
z=this.c
if(!$.q.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.ci(z)}z=new D.J("minimumLocation",y,this.c,this,[P.p])
z.b=!0
this.X(z)}},
sa6:function(a,b){var z,y
b=this.ci(b)
z=this.d
if(!$.q.$2(z,b)){y=this.d
this.d=b
z=new D.J("location",y,b,this,[P.p])
z.b=!0
this.X(z)}},
sde:function(a){var z,y,x
z=this.e
if(!$.q.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.J("maximumVelocity",y,a,this,[P.p])
z.b=!0
this.X(z)}},
sY:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.q.$2(z,a)){x=this.f
this.f=a
z=new D.J("velocity",x,a,this,[P.p])
z.b=!0
this.X(z)}},
scY:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.q.$2(z,a)){y=this.x
this.x=a
z=new D.J("dampening",y,a,this,[P.p])
z.b=!0
this.X(z)}},
ax:function(a){var z,y,x,w
z=this.f
if($.q.$2(z,0)){z=this.r
z=!$.q.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa6(0,this.d+y*a)
z=this.x
if(!$.q.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sY(y)}},
n:{
d4:function(){var z=new U.i4()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ei:{"^":"ag;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
b7:function(a,b){return this.a},
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ei))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")},
n:{
ej:function(a){var z=new U.ei()
z.a=a
return z}}},ex:{"^":"X;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
X:[function(a){var z
H.d(a,"$isy")
z=this.e
if(!(z==null))z.J(a)},function(){return this.X(null)},"aq","$1","$0","gaT",0,2,1],
l1:[function(a,b){var z,y,x,w,v,u,t,s
z=U.ag
H.k(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gaT(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){s=t.gu()
s.toString
H.m(x,w)
if(s.a==null)s.sal(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.X(z)},"$2","ghQ",8,0,28],
ll:[function(a,b){var z,y,x
z=U.ag
H.k(b,"$iso",[z],"$aso")
for(y=b.gU(b),x=this.gaT();y.E();)y.gL().gu().M(0,x)
z=new D.c2(a,b,this,[z])
z.b=!0
this.X(z)},"$2","gib",8,0,28],
b7:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.V()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.at(z,z.length,0,[H.t(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.b7(a,b)
if(w!=null)x=x==null?w:w.w(0,x)}}this.f=x==null?V.ba():x
z=this.e
if(!(z==null))z.aE()}return this.f},
C:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ex))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.Q(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$aso:function(){return[U.ag]},
$asX:function(){return[U.ag]},
$isag:1},ag:{"^":"eg;"},kY:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.cy
if(z==null){z=D.F()
this.cy=z}return z},
X:[function(a){var z
H.d(a,"$isy")
z=this.cy
if(!(z==null))z.J(a)},function(){return this.X(null)},"aq","$1","$0","gaT",0,2,1],
bh:function(a){if(this.a!=null)return!1
this.a=a
a.c.geD().h(0,this.gcs())
this.a.c.gfa().h(0,this.gct())
this.a.c.gca().h(0,this.gcu())
return!0},
hM:[function(a){H.d(a,"$isy")
if(!J.Q(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gcs",4,0,2],
hN:[function(a){var z,y,x,w,v,u,t
a=H.i(H.d(a,"$isy"),"$isbE")
if(!this.y)return
if(this.x){z=a.d.N(0,a.y)
z=new V.W(z.a,z.b)
z=z.G(z)
y=this.r
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.N(0,a.y)
z=new V.W(y.a,y.b).w(0,2).v(0,z.gah())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.w()
x=this.e
if(typeof x!=="number")return H.B(x)
y.sY(z*10*x)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=new V.W(x.a,x.b).w(0,2).v(0,z.gah())
x=this.b
v=w.a
if(typeof v!=="number")return v.W()
u=this.e
if(typeof u!=="number")return H.B(u)
t=this.z
if(typeof t!=="number")return H.B(t)
x.sa6(0,-v*u+t)
this.b.sY(0)
y=y.N(0,a.z)
this.Q=new V.W(y.a,y.b).w(0,2).v(0,z.gah())}this.aq()},"$1","gct",4,0,2],
hO:[function(a){var z,y,x
H.d(a,"$isy")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.G(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.w()
x=this.e
if(typeof x!=="number")return H.B(x)
z.sY(y*10*x)
this.aq()}},"$1","gcu",4,0,2],
b7:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.V()
if(z<y){this.ch=y
x=a.y
this.b.ax(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aF(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isag:1},kZ:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.F()
this.fx=z}return z},
X:[function(a){var z
H.d(a,"$isy")
z=this.fx
if(!(z==null))z.J(a)},function(){return this.X(null)},"aq","$1","$0","gaT",0,2,1],
bh:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.geD().h(0,this.gcs())
this.a.c.gfa().h(0,this.gct())
this.a.c.gca().h(0,this.gcu())
z=this.a.d
y=z.f
if(y==null){y=D.F()
z.f=y
z=y}else z=y
z.h(0,this.ghK())
z=this.a.d
y=z.d
if(y==null){y=D.F()
z.d=y
z=y}else z=y
z.h(0,this.ghL())
z=this.a.e
y=z.b
if(y==null){y=D.F()
z.b=y
z=y}else z=y
z.h(0,this.giT())
z=this.a.e
y=z.d
if(y==null){y=D.F()
z.d=y
z=y}else z=y
z.h(0,this.giS())
z=this.a.e
y=z.c
if(y==null){y=D.F()
z.c=y
z=y}else z=y
z.h(0,this.giR())
return!0},
az:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.W()
z=-z}if(this.r){if(typeof y!=="number")return y.W()
y=-y}return new V.W(z,y)},
hM:[function(a){a=H.i(H.d(a,"$isy"),"$isbE")
if(!J.Q(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gcs",4,0,2],
hN:[function(a){var z,y,x,w,v,u,t
a=H.i(H.d(a,"$isy"),"$isbE")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.W(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.az(new V.W(y.a,y.b).w(0,2).v(0,z.gah()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.W()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.W()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.az(new V.W(x.a,x.b).w(0,2).v(0,z.gah()))
x=this.c
v=w.a
if(typeof v!=="number")return v.W()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa6(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.W()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa6(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.N(0,a.z)
this.dx=this.az(new V.W(y.a,y.b).w(0,2).v(0,z.gah()))}this.aq()},"$1","gct",4,0,2],
hO:[function(a){var z,y,x
H.d(a,"$isy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.W()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.W()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sY(-y*10*z)
this.aq()}},"$1","gcu",4,0,2],
kZ:[function(a){if(H.i(H.d(a,"$isy"),"$iseI").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ghK",4,0,2],
l_:[function(a){var z,y,x,w,v,u,t
a=H.i(H.d(a,"$isy"),"$isbE")
if(!J.Q(this.d,a.x.b))return
z=a.c
y=a.d
x=y.N(0,a.y)
w=this.az(new V.W(x.a,x.b).w(0,2).v(0,z.gah()))
x=this.c
v=w.a
if(typeof v!=="number")return v.W()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa6(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.W()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa6(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.N(0,a.z)
this.dx=this.az(new V.W(y.a,y.b).w(0,2).v(0,z.gah()))
this.aq()},"$1","ghL",4,0,2],
lv:[function(a){H.d(a,"$isy")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","giT",4,0,2],
lu:[function(a){var z,y,x,w,v,u,t
a=H.i(H.d(a,"$isy"),"$isfl")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.W(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.az(new V.W(y.a,y.b).w(0,2).v(0,z.gah()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.W()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.W()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.az(new V.W(x.a,x.b).w(0,2).v(0,z.gah()))
x=this.c
v=w.a
if(typeof v!=="number")return v.W()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa6(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.W()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa6(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.N(0,a.z)
this.dx=this.az(new V.W(y.a,y.b).w(0,2).v(0,z.gah()))}this.aq()},"$1","giS",4,0,2],
lt:[function(a){var z,y,x
H.d(a,"$isy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.W()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.W()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sY(-y*10*z)
this.aq()}},"$1","giR",4,0,2],
b7:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.V()
if(z<y){this.dy=y
x=a.y
this.c.ax(x)
this.b.ax(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aF(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.w(0,V.aF(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isag:1},l_:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.F()
this.r=z}return z},
X:function(a){var z=this.r
if(!(z==null))z.J(a)},
bh:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.F()
z.e=y
z=y}else z=y
y=this.ghP()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.F()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
l0:[function(a){var z,y,x,w
H.d(a,"$isy")
if(!J.Q(this.b,this.a.b.c))return
H.i(a,"$isdf")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.w()
w=z+y*x
if(z!==w){this.d=w
z=new D.J("zoom",z,w,this,[P.p])
z.b=!0
this.X(z)}},"$1","ghP",4,0,2],
b7:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aF(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isag:1}}],["","",,M,{"^":"",i5:{"^":"X;0e,0f,0a,0b,0c,0d",
gu:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
a9:[function(a){var z
H.d(a,"$isy")
z=this.f
if(!(z==null))z.J(a)},function(){return this.a9(null)},"dO","$1","$0","ga2",0,2,1],
ln:[function(a,b){var z,y,x,w,v,u,t,s
z=M.aJ
H.k(b,"$iso",[z],"$aso")
for(y=b.length,x=this.ga2(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){s=t.gu()
s.toString
H.m(x,w)
if(s.a==null)s.sal(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.a9(z)},"$2","gie",8,0,29],
lo:[function(a,b){var z,y,x
z=M.aJ
H.k(b,"$iso",[z],"$aso")
for(y=b.gU(b),x=this.ga2();y.E();)y.gL().gu().M(0,x)
z=new D.c2(a,b,this,[z])
z.b=!0
this.a9(z)},"$2","gig",8,0,29],
ai:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.E();){y=z.d
if(!(y==null))y.ai(a)}this.e=!1},
$aso:function(){return[M.aJ]},
$asX:function(){return[M.aJ]},
$isaJ:1},ia:{"^":"a;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
a9:[function(a){var z
H.d(a,"$isy")
z=this.f
if(!(z==null))z.J(a)},function(){return this.a9(null)},"dO","$1","$0","ga2",0,2,1],
sbi:function(a){var z,y
if(a==null)a=new X.iL()
z=this.a
if(z!==a){if(z!=null)z.gu().M(0,this.ga2())
y=this.a
this.a=a
a.gu().h(0,this.ga2())
z=new D.J("camera",y,this.a,this,[X.cm])
z.b=!0
this.a9(z)}},
sbt:function(a,b){var z,y
if(b==null)b=X.d6(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gu().M(0,this.ga2())
y=this.b
this.b=b
b.gu().h(0,this.ga2())
z=new D.J("target",y,this.b,this,[X.dn])
z.b=!0
this.a9(z)}},
sbu:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gu().M(0,this.ga2())
y=this.c
this.c=a
if(a!=null)a.gu().h(0,this.ga2())
z=new D.J("technique",y,this.c,this,[O.bH])
z.b=!0
this.a9(z)}},
ai:function(a){a.di(this.c)
this.b.a5(a)
this.a.a5(a)
this.d.ax(a)
this.d.ai(a)
this.a.aP(a)
this.b.toString
a.dh()},
$isaJ:1},is:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
shm:function(a,b){this.d=H.k(b,"$isX",[E.au],"$asX")},
a9:[function(a){var z
H.d(a,"$isy")
z=this.x
if(!(z==null))z.J(a)},function(){return this.a9(null)},"dO","$1","$0","ga2",0,2,1],
l6:[function(a,b){var z,y,x,w,v,u,t,s
z=E.au
H.k(b,"$iso",[z],"$aso")
for(y=b.length,x=this.ga2(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.gar()==null){s=new D.bz()
s.sal(null)
s.sbe(null)
s.c=null
s.d=0
t.sar(s)}s=t.gar()
s.toString
H.m(x,w)
if(s.a==null)s.sal(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.a9(z)},"$2","ghW",8,0,7],
l7:[function(a,b){var z,y,x
z=E.au
H.k(b,"$iso",[z],"$aso")
for(y=b.gU(b),x=this.ga2();y.E();)y.gL().gu().M(0,x)
z=new D.c2(a,b,this,[z])
z.b=!0
this.a9(z)},"$2","ghX",8,0,7],
sbi:function(a){var z,y
if(a==null)a=X.eU(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gu().M(0,this.ga2())
y=this.a
this.a=a
a.gu().h(0,this.ga2())
z=new D.J("camera",y,this.a,this,[X.cm])
z.b=!0
this.a9(z)}},
sbt:function(a,b){var z,y
if(b==null)b=X.d6(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gu().M(0,this.ga2())
y=this.b
this.b=b
b.gu().h(0,this.ga2())
z=new D.J("target",y,this.b,this,[X.dn])
z.b=!0
this.a9(z)}},
sbu:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gu().M(0,this.ga2())
y=this.c
this.c=a
if(a!=null)a.gu().h(0,this.ga2())
z=new D.J("technique",y,this.c,this,[O.bH])
z.b=!0
this.a9(z)}},
gu:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
ai:function(a){var z
a.di(this.c)
this.b.a5(a)
this.a.a5(a)
z=this.c
if(z!=null)z.ax(a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.E();)z.d.ax(a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.E();)z.d.ai(a)
this.a.toString
a.cy.aN()
a.db.aN()
this.b.toString
a.dh()},
$isaJ:1},aJ:{"^":"a;"}}],["","",,A,{"^":"",e8:{"^":"a;a,b,c"},hV:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
jU:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
C.b.eE(w.a,w.c)}},
eB:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
C.b.eC(w.a,w.c)}}},eL:{"^":"cz;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aB,0av,0bQ,0eF,0bR,0bS,0eG,0eH,0bT,0bU,0eI,0eJ,0bV,0bW,0eK,0eL,0bX,0eM,0eN,0bY,0eO,0eP,0bZ,0c_,0c0,0eQ,0eR,0c1,0c2,0eS,0eT,0c3,0eU,0d0,0eV,0d1,0eW,0d2,0eX,0d3,0eY,0d4,0eZ,0d5,a,b,0c,0d,0e,0f,0r,0x,0y",
shh:function(a){this.r1=H.k(a,"$isb",[A.az],"$asb")},
sh2:function(a){this.d0=H.k(a,"$isb",[A.dw],"$asb")},
sh3:function(a){this.d1=H.k(a,"$isb",[A.dy],"$asb")},
sh4:function(a){this.d2=H.k(a,"$isb",[A.dz],"$asb")},
sh5:function(a){this.d3=H.k(a,"$isb",[A.dA],"$asb")},
sh6:function(a){this.d4=H.k(a,"$isb",[A.dB],"$asb")},
sh7:function(a){this.d5=H.k(a,"$isb",[A.dC],"$asb")},
fS:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
a1.j0(z)
a1.j7(z)
a1.j1(z)
a1.jf(z)
a1.jg(z)
a1.j9(z)
a1.jk(z)
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
v.j4(z)
v.j_(z)
v.j2(z)
v.j5(z)
v.jd(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.jb(z)
v.jc(z)}v.j8(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
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
v.j3(z)
v.ja(z)
v.je(z)
v.jh(z)
v.ji(z)
v.jj(z)
v.j6(z)}r=z.a+="// === Main ===\n"
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
this.f8(x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a1.fr)this.id=H.i(this.y.m(0,"invViewMat"),"$isaz")
if(y)this.dy=H.i(this.y.m(0,"objMat"),"$isaz")
if(w)this.fr=H.i(this.y.m(0,"viewObjMat"),"$isaz")
this.fy=H.i(this.y.m(0,"projViewObjMat"),"$isaz")
if(a1.x2)this.k1=H.i(this.y.m(0,"txt2DMat"),"$isdx")
if(a1.y1)this.k2=H.i(this.y.m(0,"txtCubeMat"),"$isaz")
if(a1.y2)this.k3=H.i(this.y.m(0,"colorMat"),"$isaz")
this.shh(H.c([],[A.az]))
y=a1.aB
if(y>0){this.k4=H.d(this.y.m(0,"bendMatCount"),"$isL")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.k(0,v)
if(l==null)H.r(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.i(l,"$isaz"))}}y=a1.a
if(y!==C.d){this.r2=H.i(this.y.m(0,"emissionClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.rx=H.i(this.y.m(0,"emissionTxt"),"$isao")
this.x1=H.i(this.y.m(0,"nullEmissionTxt"),"$isL")
break
case C.f:this.ry=H.i(this.y.m(0,"emissionTxt"),"$isaj")
this.x1=H.i(this.y.m(0,"nullEmissionTxt"),"$isL")
break}}y=a1.b
if(y!==C.d){this.x2=H.i(this.y.m(0,"ambientClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.y1=H.i(this.y.m(0,"ambientTxt"),"$isao")
this.aB=H.i(this.y.m(0,"nullAmbientTxt"),"$isL")
break
case C.f:this.y2=H.i(this.y.m(0,"ambientTxt"),"$isaj")
this.aB=H.i(this.y.m(0,"nullAmbientTxt"),"$isL")
break}}y=a1.c
if(y!==C.d){this.av=H.i(this.y.m(0,"diffuseClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.bQ=H.i(this.y.m(0,"diffuseTxt"),"$isao")
this.bR=H.i(this.y.m(0,"nullDiffuseTxt"),"$isL")
break
case C.f:this.eF=H.i(this.y.m(0,"diffuseTxt"),"$isaj")
this.bR=H.i(this.y.m(0,"nullDiffuseTxt"),"$isL")
break}}y=a1.d
if(y!==C.d){this.bS=H.i(this.y.m(0,"invDiffuseClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.eG=H.i(this.y.m(0,"invDiffuseTxt"),"$isao")
this.bT=H.i(this.y.m(0,"nullInvDiffuseTxt"),"$isL")
break
case C.f:this.eH=H.i(this.y.m(0,"invDiffuseTxt"),"$isaj")
this.bT=H.i(this.y.m(0,"nullInvDiffuseTxt"),"$isL")
break}}y=a1.e
if(y!==C.d){this.bW=H.i(this.y.m(0,"shininess"),"$isZ")
this.bU=H.i(this.y.m(0,"specularClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.eI=H.i(this.y.m(0,"specularTxt"),"$isao")
this.bV=H.i(this.y.m(0,"nullSpecularTxt"),"$isL")
break
case C.f:this.eJ=H.i(this.y.m(0,"specularTxt"),"$isaj")
this.bV=H.i(this.y.m(0,"nullSpecularTxt"),"$isL")
break}}switch(a1.f){case C.d:break
case C.i:break
case C.e:this.eK=H.i(this.y.m(0,"bumpTxt"),"$isao")
this.bX=H.i(this.y.m(0,"nullBumpTxt"),"$isL")
break
case C.f:this.eL=H.i(this.y.m(0,"bumpTxt"),"$isaj")
this.bX=H.i(this.y.m(0,"nullBumpTxt"),"$isL")
break}if(a1.dy){this.eM=H.i(this.y.m(0,"envSampler"),"$isaj")
this.eN=H.i(this.y.m(0,"nullEnvTxt"),"$isL")
y=a1.r
if(y!==C.d){this.bY=H.i(this.y.m(0,"reflectClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.eO=H.i(this.y.m(0,"reflectTxt"),"$isao")
this.bZ=H.i(this.y.m(0,"nullReflectTxt"),"$isL")
break
case C.f:this.eP=H.i(this.y.m(0,"reflectTxt"),"$isaj")
this.bZ=H.i(this.y.m(0,"nullReflectTxt"),"$isL")
break}}y=a1.x
if(y!==C.d){this.c_=H.i(this.y.m(0,"refraction"),"$isZ")
this.c0=H.i(this.y.m(0,"refractClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.eQ=H.i(this.y.m(0,"refractTxt"),"$isao")
this.c1=H.i(this.y.m(0,"nullRefractTxt"),"$isL")
break
case C.f:this.eR=H.i(this.y.m(0,"refractTxt"),"$isaj")
this.c1=H.i(this.y.m(0,"nullRefractTxt"),"$isL")
break}}}y=a1.y
if(y!==C.d){this.c2=H.i(this.y.m(0,"alpha"),"$isZ")
switch(y){case C.d:break
case C.i:break
case C.e:this.eS=H.i(this.y.m(0,"alphaTxt"),"$isao")
this.c3=H.i(this.y.m(0,"nullAlphaTxt"),"$isL")
break
case C.f:this.eT=H.i(this.y.m(0,"alphaTxt"),"$isaj")
this.c3=H.i(this.y.m(0,"nullAlphaTxt"),"$isL")
break}}this.sh2(H.c([],[A.dw]))
this.sh3(H.c([],[A.dy]))
this.sh4(H.c([],[A.dz]))
this.sh5(H.c([],[A.dA]))
this.sh6(H.c([],[A.dB]))
this.sh7(H.c([],[A.dC]))
if(a1.k2){y=a1.z
if(y>0){this.eU=H.d(this.y.m(0,"dirLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.k(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isI")
x=this.y
w="dirLights["+m+"].color"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isI")
x=this.d0;(x&&C.a).h(x,new A.dw(m,l,k))}}y=a1.Q
if(y>0){this.eV=H.d(this.y.m(0,"pntLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isI")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isI")
x=this.y
w="pntLights["+m+"].color"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isI")
x=this.y
w="pntLights["+m+"].att0"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isZ")
x=this.y
w="pntLights["+m+"].att1"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isZ")
x=this.y
w="pntLights["+m+"].att2"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isZ")
x=this.d1;(x&&C.a).h(x,new A.dy(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.eW=H.d(this.y.m(0,"spotLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isI")
x=this.y
w="spotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isI")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isI")
x=this.y
w="spotLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isI")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isZ")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isZ")
x=this.y
w="spotLights["+m+"].att0"
f=x.k(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isZ")
x=this.y
w="spotLights["+m+"].att1"
e=x.k(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isZ")
x=this.y
w="spotLights["+m+"].att2"
d=x.k(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isZ")
x=this.d2;(x&&C.a).h(x,new A.dz(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.eX=H.d(this.y.m(0,"txtDirLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.k(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isI")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isI")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isI")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isI")
x=this.y
w="txtDirLights["+m+"].color"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isI")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isL")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.k(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isao")
x=this.d3;(x&&C.a).h(x,new A.dA(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.eY=H.d(this.y.m(0,"txtPntLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isI")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isI")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isdx")
x=this.y
w="txtPntLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isI")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isL")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isZ")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.k(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isZ")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.k(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isZ")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.k(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isaj")
x=this.d4;(x&&C.a).h(x,new A.dB(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.eZ=H.d(this.y.m(0,"txtSpotLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isI")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isI")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isI")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isI")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isI")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isL")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.k(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isI")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.k(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isZ")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.k(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isZ")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.k(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(c,"$isZ")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.k(0,w)
if(b==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(b,"$isZ")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.k(0,w)
if(a==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(a,"$isZ")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.k(0,w)
if(a0==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(a0,"$isao")
x=this.d5;(x&&C.a).h(x,new A.dC(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
as:function(a,b,c){C.b.T(b.a,b.d,1)},
am:function(a,b,c){if(c==null||c.d<6)C.b.T(b.a,b.d,1)
else{a.dG(c)
C.b.T(b.a,b.d,0)}},
n:{
jh:function(a,b){var z,y
z=a.av
y=new A.eL(b,z)
y.dL(b,z)
y.fS(a,b)
return y}}},jk:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aB,av,bQ",
j0:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aB+"];\n"
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
j7:function(a){var z
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
j1:function(a){var z
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
jf:function(a){var z,y
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
jg:function(a){var z,y
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
j9:function(a){var z
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
jk:function(a){var z
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
aG:function(a,b,c){var z
if(b===C.d)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.c.ay(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
j4:function(a){var z,y
z=this.a
if(z===C.d)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aG(a,z,"emission")
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
j_:function(a){var z,y
z=this.b
if(z===C.d)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aG(a,z,"ambient")
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
j2:function(a){var z,y
z=this.c
if(z===C.d)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aG(a,z,"diffuse")
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
j5:function(a){var z,y
z=this.d
if(z===C.d)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aG(a,z,"invDiffuse")
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
jd:function(a){var z,y
z=this.e
if(z===C.d)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aG(a,z,"specular")
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
j8:function(a){var z,y
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
jb:function(a){var z,y
z=this.r
if(z===C.d)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aG(a,z,"reflect")
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
jc:function(a){var z,y
z=this.x
if(z===C.d)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aG(a,z,"refract")
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
j3:function(a){var z,y
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
ja:function(a){var z,y
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
je:function(a){var z,y
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
jh:function(a){var z,y,x
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
ji:function(a){var z,y,x
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
jj:function(a){var z,y,x
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
j6:function(a){var z
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
i:function(a){return this.av}},dw:{"^":"a;a,b,c"},dA:{"^":"a;a,b,c,d,e,f,r,x"},dy:{"^":"a;a,b,c,d,e,f,r"},dB:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dz:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dC:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cz:{"^":"cX;",
dL:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
f8:function(a,b){var z,y,x
this.c=a
this.d=b
this.e=this.e_(a,35633)
this.f=this.e_(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
C.b.es(z,y,this.e)
C.b.es(z,this.r,this.f)
C.b.kf(z,this.r)
if(!H.dR(C.b.cd(z,this.r,35714))){x=C.b.fz(z,this.r)
C.b.jL(z,this.r)
H.r(P.u("Failed to link shader: "+H.j(x)))}this.iF()
this.iH()},
a5:function(a){C.b.ds(a.a,this.r)
this.x.jU()},
e_:function(a,b){var z,y,x
z=this.a
y=C.b.jJ(z,b)
C.b.fJ(z,y,a)
C.b.jC(z,y)
if(!H.dR(C.b.fC(z,y,35713))){x=C.b.fB(z,y)
C.b.jM(z,y)
throw H.e(P.u("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
iF:function(){var z,y,x,w,v,u
z=H.c([],[A.e8])
y=this.a
x=H.a6(C.b.cd(y,this.r,35721))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.fs(y,this.r,w)
u=C.b.fu(y,this.r,v.name)
C.a.h(z,new A.e8(y,v.name,u))}this.x=new A.hV(z)},
iH:function(){var z,y,x,w,v,u
z=H.c([],[A.ad])
y=this.a
x=H.a6(C.b.cd(y,this.r,35718))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.ft(y,this.r,w)
u=C.b.fD(y,this.r,v.name)
C.a.h(z,this.jK(v.type,v.size,v.name,u))}this.y=new A.kJ(z)},
aV:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.L(z,y,b,c)
else return A.dv(z,y,b,a,c)},
hp:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ao(z,y,b,c)
else return A.dv(z,y,b,a,c)},
hq:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aj(z,y,b,c)
else return A.dv(z,y,b,a,c)},
bL:function(a,b){return new P.fS(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
jK:function(a,b,c,d){switch(a){case 5120:return this.aV(b,c,d)
case 5121:return this.aV(b,c,d)
case 5122:return this.aV(b,c,d)
case 5123:return this.aV(b,c,d)
case 5124:return this.aV(b,c,d)
case 5125:return this.aV(b,c,d)
case 5126:return new A.Z(this.a,this.r,c,d)
case 35664:return new A.kE(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.kH(this.a,this.r,c,d)
case 35667:return new A.kF(this.a,this.r,c,d)
case 35668:return new A.kG(this.a,this.r,c,d)
case 35669:return new A.kI(this.a,this.r,c,d)
case 35674:return new A.kL(this.a,this.r,c,d)
case 35675:return new A.dx(this.a,this.r,c,d)
case 35676:return new A.az(this.a,this.r,c,d)
case 35678:return this.hp(b,c,d)
case 35680:return this.hq(b,c,d)
case 35670:throw H.e(this.bL("BOOL",c))
case 35671:throw H.e(this.bL("BOOL_VEC2",c))
case 35672:throw H.e(this.bL("BOOL_VEC3",c))
case 35673:throw H.e(this.bL("BOOL_VEC4",c))
default:throw H.e(P.u("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},cn:{"^":"a;a,b",
i:function(a){return this.b}},f7:{"^":"cz;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},ad:{"^":"a;"},kJ:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.k(0,b)
if(z==null)throw H.e(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.R()},
k5:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w)x+=z[w].i(0)+a
return x},
R:function(){return this.k5("\n")}},L:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},kF:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},kG:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},kI:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},kD:{"^":"ad;0e,0f,a,b,c,d",
siY:function(a){this.e=H.k(a,"$isb",[P.n],"$asb")},
i:function(a){return"Uniform1iv: "+H.j(this.c)},
n:{
dv:function(a,b,c,d,e){var z=new A.kD(a,b,c,e)
z.f=d
z.siY(P.j6(d,0,!1,P.n))
return z}}},Z:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},kE:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},I:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},kH:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},kL:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},dx:{"^":"ad;a,b,c,d",
ap:function(a){var z=new Float32Array(H.bl(H.k(a,"$isb",[P.p],"$asb")))
C.b.fm(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},az:{"^":"ad;a,b,c,d",
ap:function(a){var z=new Float32Array(H.bl(H.k(a,"$isb",[P.p],"$asb")))
C.b.fn(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},ao:{"^":"ad;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},aj:{"^":"ad;a,b,c,d",
dG:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)C.b.T(y,x,0)
else C.b.T(y,x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
dU:function(a,b,c,d){var z
H.m(c,{func:1,ret:-1,args:[F.ae,P.p,P.p]})
z=F.cA()
F.bP(z,b,c,d,a,1,0,0,1)
F.bP(z,b,c,d,a,0,1,0,3)
F.bP(z,b,c,d,a,0,0,1,2)
F.bP(z,b,c,d,a,-1,0,0,0)
F.bP(z,b,c,d,a,0,-1,0,0)
F.bP(z,b,c,d,a,0,0,-1,3)
z.at()
return z},
cK:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bP:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.m(c,{func:1,ret:-1,args:[F.ae,P.p,P.p]})
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
z.d=y}l=F.cK(y)
k=F.cK(z.b)
j=F.e2(d,e,new F.mD(z,F.cK(z.c),F.cK(z.d),k,l,c),b)
if(j!=null)a.bo(j)},
hs:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.m(e,{func:1,ret:P.p,args:[P.p]})
if(f<3)return
z=F.cA()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.ae])
v=z.a
u=new V.E(0,0,y)
u=u.v(0,Math.sqrt(u.G(u)))
C.a.h(w,v.jn(new V.aP(a,-1,-1,-1),new V.aC(1,1,1,1),new V.U(0,0,d),new V.E(0,0,y),new V.a4(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.B(p)
o=new V.E(r,q,y).v(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.cb(new V.aP(a,-1,-1,-1),null,new V.aC(n,l,m,1),new V.U(r*p,q*p,d),new V.E(0,0,y),new V.a4(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.en(w)
return z},
hp:function(a,b,c,d,e,f){return F.hq(!0,c,d,new F.mZ(a,f),e)},
hq:function(a,b,c,d,e){var z
H.m(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
z=F.e2(c,e,new F.n0(d),null)
if(z==null)return
z.at()
z.cM()
if(b)z.bo(F.hs(3,!1,!1,1,new F.n1(d),e))
z.bo(F.hs(1,!0,!1,-1,new F.n2(d),e))
return z},
hC:function(a,b,c,d){var z,y
z={}
z.a=b
if(H.m(b,{func:1,ret:P.p,args:[P.p,P.p]})==null)z.a=new F.nR()
y=F.dU(a,null,new F.nS(z,c),d)
y.cM()
return y},
hF:function(a,b,c,d){return F.hr(c,a,d,b,new F.nU())},
nk:function(a,b,c,d,e,f){return F.hr(d,a,e,b,new F.nl(f,c))},
hr:function(a,b,c,d,e){var z=F.e2(a,b,new F.n_(H.m(e,{func:1,ret:V.U,args:[P.p]}),d,b,c),null)
if(z==null)return
z.at()
z.cM()
return z},
e2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.m(c,{func:1,ret:-1,args:[F.ae,P.p,P.p]})
if(a<1)return
if(b<1)return
z=F.cA()
y=H.c([],[F.ae])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cb(null,null,new V.aC(u,0,0,1),null,null,new V.a4(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cX(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cb(null,null,new V.aC(o,n,m,1),null,null,new V.a4(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cX(d))}}z.d.jm(a+1,b+1,y)
return z},
mD:{"^":"l:5;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.dc(z.b,b).dc(z.d.dc(z.c,b),c)
a.sa6(0,new V.U(y.a,y.b,y.c))
a.sfi(y.v(0,Math.sqrt(y.G(y))))
z=1-b
x=1-c
a.seu(new V.aP(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mZ:{"^":"l:9;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
n0:{"^":"l:5;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.B(v)
y=-y*v
u=x*v
a.sa6(0,new V.U(y,u,w))
u=new V.E(y,u,w)
a.sfi(u.v(0,Math.sqrt(u.G(u))))
a.seu(new V.aP(1-c,2+c,-1,-1))}},
n1:{"^":"l:15;a",
$1:function(a){return this.a.$2(a,1)}},
n2:{"^":"l:15;a",
$1:function(a){return this.a.$2(1-a,0)}},
nR:{"^":"l:9;",
$2:function(a,b){return 0}},
nS:{"^":"l:5;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.B(z)
y=a.f
x=new V.E(y.a,y.b,y.c)
z=x.v(0,Math.sqrt(x.G(x))).w(0,this.b+z)
a.sa6(0,new V.U(z.a,z.b,z.c))}},
nU:{"^":"l:31;",
$1:function(a){return new V.U(Math.cos(a),Math.sin(a),0)}},
nl:{"^":"l:31;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.U(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
n_:{"^":"l:5;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.e3(y.$1(z),x)
x=J.e3(y.$1(z+3.141592653589793/this.c),x).N(0,w)
x=new V.E(x.a,x.b,x.c)
v=x.v(0,Math.sqrt(x.G(x)))
y=$.fF
if(y==null){y=new V.E(1,0,0)
$.fF=y
u=y}else u=y
y=v.aK(!J.Q(v,u)?V.fJ():u)
t=y.v(0,Math.sqrt(y.G(y)))
y=t.aK(v)
u=y.v(0,Math.sqrt(y.G(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.w(0,y*x)
x=t.w(0,r*x)
a.sa6(0,w.I(0,new V.U(y.a-x.a,y.b-x.b,y.c-x.c)))}},
ac:{"^":"a;0a,0b,0c,0d,0e",
bk:function(){if(!this.gbl()){C.a.M(this.a.a.d.b,this)
this.a.a.aa()}this.cD()
this.cE()
this.is()},
cI:function(a){this.a=a
C.a.h(a.d.b,this)},
cJ:function(a){this.b=a
C.a.h(a.d.c,this)},
iE:function(a){this.c=a
C.a.h(a.d.d,this)},
cD:function(){var z=this.a
if(z!=null){C.a.M(z.d.b,this)
this.a=null}},
cE:function(){var z=this.b
if(z!=null){C.a.M(z.d.c,this)
this.b=null}},
is:function(){var z=this.c
if(z!=null){C.a.M(z.d.d,this)
this.c=null}},
gbl:function(){return this.a==null||this.b==null||this.c==null},
hg:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bI()
if(y!=null)v=v.I(0,y)
if(x!=null)v=v.I(0,x)
if(w!=null)v=v.I(0,w)
if(v.f9())return
return v.v(0,Math.sqrt(v.G(v)))},
hl:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.N(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.G(z)))
z=w.N(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.aK(z.v(0,Math.sqrt(z.G(z))))
return z.v(0,Math.sqrt(z.G(z)))},
cU:function(){if(this.d!=null)return!0
var z=this.hg()
if(z==null){z=this.hl()
if(z==null)return!1}this.d=z
this.a.a.aa()
return!0},
hf:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bI()
if(y!=null)v=v.I(0,y)
if(x!=null)v=v.I(0,x)
if(w!=null)v=v.I(0,w)
if(v.f9())return
return v.v(0,Math.sqrt(v.G(v)))},
hk:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.q.$2(n,0)){z=r.N(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.G(z)))
if(o.a-p.a<0)m=m.W(0)}else{l=(z-q.b)/n
z=r.N(0,u).w(0,l).I(0,u).N(0,x)
z=new V.E(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.G(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.W(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.G(z)))
z=k.aK(m)
z=z.v(0,Math.sqrt(z.G(z))).aK(k)
m=z.v(0,Math.sqrt(z.G(z)))}return m},
cS:function(){if(this.e!=null)return!0
var z=this.hf()
if(z==null){z=this.hk()
if(z==null)return!1}this.e=z
this.a.a.aa()
return!0},
gjB:function(a){if(J.Q(this.a,this.b))return!0
if(J.Q(this.b,this.c))return!0
if(J.Q(this.c,this.a))return!0
return!1},
C:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
H:function(a){var z,y
if(this.gbl())return a+"disposed"
z=a+C.c.ao(J.af(this.a.e),0)+", "+C.c.ao(J.af(this.b.e),0)+", "+C.c.ao(J.af(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
R:function(){return this.H("")},
n:{
bA:function(a,b,c){var z,y,x
z=new F.ac()
y=a.a
if(y==null)H.r(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.u("May not create a face with vertices attached to different shapes."))
z.cI(a)
z.cJ(b)
z.iE(c)
C.a.h(z.a.a.d.b,z)
z.a.a.aa()
return z}}},
iw:{"^":"a;"},
ke:{"^":"iw;",
bn:function(a,b,c){var z,y
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
bD:{"^":"a;0a,0b",
bk:function(){if(!this.gbl()){C.a.M(this.a.a.c.b,this)
this.a.a.aa()}this.cD()
this.cE()},
cI:function(a){this.a=a
C.a.h(a.c.b,this)},
cJ:function(a){this.b=a
C.a.h(a.c.c,this)},
cD:function(){var z=this.a
if(z!=null){C.a.M(z.c.b,this)
this.a=null}},
cE:function(){var z=this.b
if(z!=null){C.a.M(z.c.c,this)
this.b=null}},
gbl:function(){return this.a==null||this.b==null},
C:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
H:function(a){if(this.gbl())return a+"disposed"
return a+C.c.ao(J.af(this.a.e),0)+", "+C.c.ao(J.af(this.b.e),0)},
R:function(){return this.H("")},
n:{
iY:function(a,b){var z,y,x
z=new F.bD()
y=a.a
if(y==null)H.r(P.u("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.u("May not create a line with vertices attached to different shapes."))
z.cI(a)
z.cJ(b)
C.a.h(z.a.a.c.b,z)
z.a.a.aa()
return z}}},
iZ:{"^":"a;"},
kC:{"^":"iZ;",
bn:function(a,b,c){var z,y
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
c7:{"^":"a;0a",
C:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
H:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.c.ao(J.af(z.e),0)},
R:function(){return this.H("")}},
f6:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
bo:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.D()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){v=z[w]
this.a.h(0,v.jE())}this.a.D()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.D()
s=s.e
if(typeof s!=="number")return s.I()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.c7()
if(r.a==null)H.r(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.J(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.D()
s=s.e
if(typeof s!=="number")return s.I()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.D()
t=t.e
if(typeof t!=="number")return t.I()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.iY(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.D()
s=s.e
if(typeof s!=="number")return s.I()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.D()
t=t.e
if(typeof t!=="number")return t.I()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.D()
s=s.e
if(typeof s!=="number")return s.I()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
m=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,m)
F.bA(p,o,m)}z=this.e
if(!(z==null))z.aE()},
at:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.at()||!1
if(!this.a.at())y=!1
z=this.e
if(!(z==null))z.aE()
return y},
ki:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.t(z,0)])
for(z=[F.ae];y.length!==0;){x=C.a.gjY(y)
C.a.kA(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.A)(y),++u){t=y[u]
if(t!=null&&a.bn(0,x,t)){C.a.h(w,t)
C.a.M(y,t)}}if(w.length>1)b.bo(w)}}this.a.D()
this.c.dl()
this.d.dl()
this.b.kB()
this.c.dm(new F.kC())
this.d.dm(new F.ke())
z=this.e
if(!(z==null))z.aE()},
jo:function(a){this.ki(new F.ld(),new F.jv())},
cM:function(){return this.jo(null)},
ex:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aA()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aU().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$bJ().a)!==0)++w
if((x&$.$get$bK().a)!==0)++w
if((x&$.$get$bj().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
v=b.gdH(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.p
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.ed])
for(r=0,q=0;q<w;++q){p=b.jr(q)
o=p.gdH(p)
C.a.q(s,q,new Z.ed(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].kg(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.q(t,l,m[k]);++l}}r+=o}H.k(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.aA(y,34962,j)
C.b.ew(y,34962,new Float32Array(H.bl(t)),35044)
C.b.aA(y,34962,null)
i=new Z.d_(new Z.fN(34962,j),s,b)
i.shE(H.c([],[Z.c0]))
if(this.b.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.D()
C.a.h(h,g.e)}f=Z.dG(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.c0(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.D()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.D()
C.a.h(h,g.e)}f=Z.dG(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.c0(1,h.length,f))}if(this.d.b.length!==0){x=P.n
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
C.a.h(h,g.e)}f=Z.dG(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.c0(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.H("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.H("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.H("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.H("   "))}return C.a.l(z,"\n")},
b5:function(a){var z=this.e
if(!(z==null))z.J(a)},
aa:function(){return this.b5(null)},
$isod:1,
n:{
cA:function(){var z,y
z=new F.f6()
y=new F.l8(z)
y.b=!1
y.siZ(H.c([],[F.ae]))
z.a=y
y=new F.k8(z)
y.scA(H.c([],[F.c7]))
z.b=y
y=new F.k7(z)
y.shG(H.c([],[F.bD]))
z.c=y
y=new F.k6(z)
y.shv(H.c([],[F.ac]))
z.d=y
z.e=null
return z}}},
k6:{"^":"a;a,0b",
shv:function(a){this.b=H.k(a,"$isb",[F.ac],"$asb")},
en:function(a){var z,y,x,w,v,u,t
H.k(a,"$isb",[F.ae],"$asb")
z=H.c([],[F.ac])
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
C.a.h(z,F.bA(x,u,t))}}return z},
jm:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,"$isb",[F.ae],"$asb")
z=H.c([],[F.ac])
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
C.a.h(z,F.bA(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bA(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bA(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bA(p,m,q))}t=!t}v=!v}return z},
gp:function(a){return this.b.length},
dm:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.k(0,v)
for(t=v-1;t>=0;--t){s=w.d.k(0,t)
if(a.bn(0,u,s)){u.bk()
break}}}}},
dl:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.gjB(x)
if(y)x.bk()}},
at:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].cU())x=!1
return x},
cT:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].cS())x=!1
return x},
i:function(a){return this.R()},
H:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].H(a))
return C.a.l(z,"\n")},
R:function(){return this.H("")}},
k7:{"^":"a;a,0b",
shG:function(a){this.b=H.k(a,"$isb",[F.bD],"$asb")},
gp:function(a){return this.b.length},
dm:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.k(0,v)
for(t=v-1;t>=0;--t){s=w.c.k(0,t)
if(a.bn(0,u,s)){u.bk()
break}}}}},
dl:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.Q(x.a,x.b)
if(y)x.bk()}},
i:function(a){return this.R()},
H:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].H(a+(""+x+". ")))}return C.a.l(z,"\n")},
R:function(){return this.H("")}},
k8:{"^":"a;a,0b",
scA:function(a){this.b=H.k(a,"$isb",[F.c7],"$asb")},
gp:function(a){return this.b.length},
kB:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
x=y.a
if(x.b.b.length>1){if(x!=null){C.a.M(x.a.b.b,y)
x=y.a.a.e
if(!(x==null))x.J(null)}x=y.a
if(x!=null){C.a.M(x.b.b,y)
y.a=null}}}},
i:function(a){return this.R()},
H:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].H(a))
return C.a.l(z,"\n")},
R:function(){return this.H("")}},
ae:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cX:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cb(this.cx,x,u,z,y,w,v,a,t)},
jE:function(){return this.cX(null)},
sa6:function(a,b){var z
if(!J.Q(this.f,b)){this.f=b
z=this.a
if(z!=null)z.aa()}},
sfi:function(a){var z
if(!J.Q(this.z,a)){this.z=a
z=this.a
if(z!=null)z.aa()}},
seu:function(a){var z
if(!J.Q(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.aa()}},
kg:function(a){var z,y
if(a.C(0,$.$get$aA())){z=this.f
y=[P.p]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.C(0,$.$get$aU())){z=this.r
y=[P.p]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.C(0,$.$get$aT())){z=this.x
y=[P.p]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.C(0,$.$get$aV())){z=this.y
y=[P.p]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.C(0,$.$get$aW())){z=this.z
y=[P.p]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.C(0,$.$get$bJ())){z=this.Q
y=[P.p]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.C(0,$.$get$bK())){z=this.Q
y=[P.p]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.C(0,$.$get$bj()))return H.c([this.ch],[P.p])
else if(a.C(0,$.$get$aS())){z=this.cx
y=[P.p]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.p])},
cU:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bI()
this.d.a1(0,new F.li(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.aa()
z=this.a.e
if(!(z==null))z.aE()}return!0},
cS:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bI()
this.d.a1(0,new F.lh(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.aa()
z=this.a.e
if(!(z==null))z.aE()}return!0},
C:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
H:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.c.ao(J.af(this.e),0))
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
R:function(){return this.H("")},
n:{
cb:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ae()
y=new F.lg(z)
y.scA(H.c([],[F.c7]))
z.b=y
y=new F.lc(z)
x=[F.bD]
y.shH(H.c([],x))
y.shI(H.c([],x))
z.c=y
y=new F.l9(z)
x=[F.ac]
y.shw(H.c([],x))
y.shx(H.c([],x))
y.shy(H.c([],x))
z.d=y
h=$.$get$fK()
z.e=0
y=$.$get$aA()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aU().a)!==0?e:null
z.x=(x&$.$get$aT().a)!==0?b:null
z.y=(x&$.$get$aV().a)!==0?f:null
z.z=(x&$.$get$aW().a)!==0?g:null
z.Q=(x&$.$get$fL().a)!==0?c:null
z.ch=(x&$.$get$bj().a)!==0?i:0
z.cx=(x&$.$get$aS().a)!==0?a:null
return z}}},
li:{"^":"l:10;a",
$1:function(a){var z,y
H.d(a,"$isac")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.I(0,z)}}},
lh:{"^":"l:10;a",
$1:function(a){var z,y
H.d(a,"$isac")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.I(0,z)}}},
l8:{"^":"a;a,0b,0c",
siZ:function(a){this.c=H.k(a,"$isb",[F.ae],"$asb")},
D:function(){var z,y,x,w
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
y.aa()
return!0},
eo:function(a,b,c,d,e,f,g,h,i){var z=F.cb(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bM:function(a,b,c,d,e,f){return this.eo(a,null,b,c,null,d,e,f,0)},
jn:function(a,b,c,d,e,f){return this.eo(a,null,b,c,d,e,f,null,0)},
gp:function(a){return this.c.length},
at:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].cU()
return!0},
cT:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].cS()
return!0},
jw:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.Q(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.J(null)}}}}return!0},
i:function(a){return this.R()},
H:function(a){var z,y,x,w
this.D()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].H(a))
return C.a.l(z,"\n")},
R:function(){return this.H("")}},
l9:{"^":"a;a,0b,0c,0d",
shw:function(a){this.b=H.k(a,"$isb",[F.ac],"$asb")},
shx:function(a){this.c=H.k(a,"$isb",[F.ac],"$asb")},
shy:function(a){this.d=H.k(a,"$isb",[F.ac],"$asb")},
gp:function(a){return this.b.length+this.c.length+this.d.length},
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
a1:function(a,b){H.m(b,{func:1,ret:-1,args:[F.ac]})
C.a.a1(this.b,b)
C.a.a1(this.c,new F.la(this,b))
C.a.a1(this.d,new F.lb(this,b))},
i:function(a){return this.R()},
H:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].H(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].H(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].H(a))
return C.a.l(z,"\n")},
R:function(){return this.H("")}},
la:{"^":"l:10;a,b",
$1:function(a){H.d(a,"$isac")
if(!J.Q(a.a,this.a))this.b.$1(a)}},
lb:{"^":"l:10;a,b",
$1:function(a){var z
H.d(a,"$isac")
z=this.a
if(!J.Q(a.a,z)&&!J.Q(a.b,z))this.b.$1(a)}},
lc:{"^":"a;a,0b,0c",
shH:function(a){this.b=H.k(a,"$isb",[F.bD],"$asb")},
shI:function(a){this.c=H.k(a,"$isb",[F.bD],"$asb")},
gp:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.R()},
H:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].H(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].H(a))
return C.a.l(z,"\n")},
R:function(){return this.H("")}},
le:{"^":"a;"},
ld:{"^":"le;",
bn:function(a,b,c){return J.Q(b.f,c.f)}},
lf:{"^":"a;"},
jv:{"^":"lf;",
bo:function(a){var z,y,x,w,v,u,t,s,r
H.k(a,"$isb",[F.ae],"$asb")
z=V.bI()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.E(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.v(0,Math.sqrt(z.G(z)))
for(y=a.length,w=z==null,x=0;x<a.length;a.length===y||(0,H.A)(a),++x){v=a[x]
if(w)u=null
else{t=z.a
s=z.b
r=z.c
u=z.v(0,Math.sqrt(t*t+s*s+r*r))}if(!J.Q(v.r,u)){v.r=u
t=v.a
if(t!=null){t=t.e
if(!(t==null))t.J(null)}}}return}},
lg:{"^":"a;a,0b",
scA:function(a){this.b=H.k(a,"$isb",[F.c7],"$asb")},
gp:function(a){return this.b.length},
i:function(a){return this.R()},
H:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].H(a))
return C.a.l(z,"\n")},
R:function(){return this.H("")}}}],["","",,O,{"^":"",jg:{"^":"bH;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
shi:function(a){this.e=H.k(a,"$isX",[V.an],"$asX")},
gu:function(){var z=this.dy
if(z==null){z=D.F()
this.dy=z}return z},
a4:[function(a){var z
H.d(a,"$isy")
z=this.dy
if(!(z==null))z.J(a)},function(){return this.a4(null)},"hV","$1","$0","gcz",0,2,1],
iy:[function(a){H.d(a,"$isy")
this.a=null
this.a4(a)},function(){return this.iy(null)},"ls","$1","$0","gix",0,2,1],
l3:[function(a,b){var z=V.an
z=new D.c1(a,H.k(b,"$iso",[z],"$aso"),this,[z])
z.b=!0
this.a4(z)},"$2","ghS",8,0,16],
l4:[function(a,b){var z=V.an
z=new D.c2(a,H.k(b,"$iso",[z],"$aso"),this,[z])
z.b=!0
this.a4(z)},"$2","ghT",8,0,16],
dX:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.ac(z.e.length+3,4)*4
x=C.h.ac(z.f.length+3,4)*4
w=C.h.ac(z.r.length+3,4)*4
v=C.h.ac(z.x.length+3,4)*4
u=C.h.ac(z.y.length+3,4)*4
t=C.h.ac(z.z.length+3,4)*4
s=C.h.ac(this.e.a.length+3,4)*4
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
a2=$.$get$aA()
if(e){g=$.$get$aU()
a2=new Z.bi(a2.a|g.a)}if(d){g=$.$get$aT()
a2=new Z.bi(a2.a|g.a)}if(c){g=$.$get$aV()
a2=new Z.bi(a2.a|g.a)}if(b){g=$.$get$aW()
a2=new Z.bi(a2.a|g.a)}if(a0){g=$.$get$aS()
a2=new Z.bi(a2.a|g.a)}return new A.jk(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
a0:function(a,b){H.k(a,"$isb",[T.dp],"$asb")
if(b!=null)if(!C.a.Z(a,b)){b.a=a.length
C.a.h(a,b)}},
ax:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.E();){y=z.d
y.toString
x=$.cF
if(x==null){x=new V.E(0,0,1)
$.cF=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.dr(x)}}},
ff:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dX()
y=H.d(a.fr.k(0,z.av),"$iseL")
if(y==null){y=A.jh(z,a.a)
a.eq(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bQ
z=b.e
if(!(z instanceof Z.d_)){b.e=null
z=null}if(z==null||!z.d.C(0,w)){z=x.r1
if(z)b.d.at()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cT()
u.a.cT()
u=u.e
if(!(u==null))u.aE()}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.jw()
t=t.e
if(!(t==null))t.aE()}r=b.d.ex(new Z.fO(a.a),w)
r.aM($.$get$aA()).e=this.a.Q.c
if(z)r.aM($.$get$aU()).e=this.a.cx.c
if(v)r.aM($.$get$aT()).e=this.a.ch.c
if(x.rx)r.aM($.$get$aV()).e=this.a.cy.c
if(u)r.aM($.$get$aW()).e=this.a.db.c
if(x.x1)r.aM($.$get$aS()).e=this.a.dx.c
b.e=r}z=T.dp
q=H.c([],[z])
this.a.a5(a)
if(x.fx){v=this.a
u=a.dx.ga7()
v=v.dy
v.toString
v.ap(u.aj(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db.ga7().w(0,a.dx.ga7())
a.cx=u}v=v.fr
v.toString
v.ap(u.aj(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gky().w(0,a.dx.ga7())
a.ch=u}v=v.fy
v.toString
v.ap(u.aj(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.ap(C.r.aj(u,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.ap(C.r.aj(u,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.ap(C.r.aj(u,!0))}if(x.aB>0){p=this.e.a.length
v=this.a.k4
C.b.T(v.a,v.d,p)
for(v=[P.p],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.f(t,o)
t=t[o]
u.toString
H.d(t,"$isan")
u=u.r1
if(o>=u.length)return H.f(u,o)
u=u[o]
n=new Float32Array(H.bl(H.k(t.aj(0,!0),"$isb",v,"$asb")))
C.b.fn(u.a,u.d,!1,n)}}switch(x.a){case C.d:break
case C.i:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
C.b.B(v.a,v.d,t,s,u)
break
case C.e:this.a0(q,this.f.d)
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
case C.f:this.a0(q,this.f.e)
v=this.a
u=this.f.e
v.am(v.ry,v.x1,u)
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
case C.e:this.a0(q,this.r.d)
v=this.a
u=this.r.d
v.as(v.y1,v.aB,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
break
case C.f:this.a0(q,this.r.e)
v=this.a
u=this.r.e
v.am(v.y2,v.aB,u)
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
v=v.av
v.toString
t=u.a
s=u.b
u=u.c
C.b.B(v.a,v.d,t,s,u)
break
case C.e:this.a0(q,this.x.d)
v=this.a
u=this.x.d
v.as(v.bQ,v.bR,u)
u=this.a
v=this.x.f
u=u.av
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
break
case C.f:this.a0(q,this.x.e)
v=this.a
u=this.x.e
v.am(v.eF,v.bR,u)
u=this.a
v=this.x.f
u=u.av
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
case C.e:this.a0(q,this.y.d)
v=this.a
u=this.y.d
v.as(v.eG,v.bT,u)
u=this.a
v=this.y.f
u=u.bS
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
break
case C.f:this.a0(q,this.y.e)
v=this.a
u=this.y.e
v.am(v.eH,v.bT,u)
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
C.b.O(u.a,u.d,s)
break
case C.e:this.a0(q,this.z.d)
v=this.a
u=this.z.d
v.as(v.eI,v.bV,u)
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
C.b.O(v.a,v.d,s)
break
case C.f:this.a0(q,this.z.e)
v=this.a
u=this.z.e
v.am(v.eJ,v.bV,u)
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
C.b.O(v.a,v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.eU
C.b.T(v.a,v.d,p)
m=a.db.ga7()
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.d0
if(l>=t.length)return H.f(t,l)
i=t[l]
t=m.dr(j.a)
s=t.a
h=t.b
g=t.c
g=t.v(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
s=g.a
t=g.b
g=g.c
C.b.B(h.a,h.d,s,t,g)
g=j.c
t=i.c
C.b.B(t.a,t.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.eV
C.b.T(v.a,v.d,p)
m=a.db.ga7()
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.d1
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbr(j)
s=i.b
h=t.gdw(t)
g=t.gdz(t)
t=t.gdA(t)
C.b.B(s.a,s.d,h,g,t)
t=m.by(j.gbr(j))
g=i.c
C.b.B(g.a,g.d,t.a,t.b,t.c)
t=j.gt(j)
g=i.d
h=t.gc8()
s=t.gbA()
t=t.gbN()
C.b.B(g.a,g.d,h,s,t)
t=j.gcN()
s=i.e
C.b.O(s.a,s.d,t)
t=j.gcO()
s=i.f
C.b.O(s.a,s.d,t)
t=j.gcP()
s=i.r
C.b.O(s.a,s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.eW
C.b.T(v.a,v.d,p)
m=a.db.ga7()
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.d2
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbr(j)
s=i.b
h=t.gdw(t)
g=t.gdz(t)
t=t.gdA(t)
C.b.B(s.a,s.d,h,g,t)
t=j.gcZ(j).lA()
g=i.c
h=t.gb0(t)
s=t.gb1(t)
t=t.gb2()
C.b.B(g.a,g.d,h,s,t)
t=m.by(j.gbr(j))
s=i.d
C.b.B(s.a,s.d,t.a,t.b,t.c)
t=j.gt(j)
s=i.e
h=t.gc8()
g=t.gbA()
t=t.gbN()
C.b.B(s.a,s.d,h,g,t)
t=j.gly()
g=i.f
C.b.O(g.a,g.d,t)
t=j.glw()
g=i.r
C.b.O(g.a,g.d,t)
t=j.gcN()
g=i.x
C.b.O(g.a,g.d,t)
t=j.gcO()
g=i.y
C.b.O(g.a,g.d,t)
t=j.gcP()
g=i.z
C.b.O(g.a,g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.eX
C.b.T(v.a,v.d,p)
m=a.db.ga7()
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
s=this.a.d3
if(l>=s.length)return H.f(s,l)
i=s[l]
s=j.gbv()
H.k(q,"$isb",t,"$asb")
if(!C.a.Z(q,s)){s.sco(q.length)
C.a.h(q,s)}s=j.gcZ(j)
h=i.d
g=s.gb0(s)
f=s.gb1(s)
s=s.gb2()
C.b.B(h.a,h.d,g,f,s)
s=j.gca()
f=i.b
g=s.gb0(s)
h=s.gb1(s)
s=s.gb2()
C.b.B(f.a,f.d,g,h,s)
s=j.gbs(j)
h=i.c
g=s.gb0(s)
f=s.gb1(s)
s=s.gb2()
C.b.B(h.a,h.d,g,f,s)
s=m.dr(j.gcZ(j))
f=s.a
g=s.b
h=s.c
h=s.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
f=h.a
s=h.b
h=h.c
C.b.B(g.a,g.d,f,s,h)
h=j.gt(j)
s=i.f
f=h.gc8()
g=h.gbA()
h=h.gbN()
C.b.B(s.a,s.d,f,g,h)
h=j.gbv()
s=h.gc4(h)
if(!s){s=i.x
C.b.T(s.a,s.d,1)}else{s=i.r
g=h.gc4(h)
f=s.a
s=s.d
if(!g)C.b.T(f,s,0)
else C.b.T(f,s,h.gk8(h))
s=i.x
C.b.T(s.a,s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.eY
C.b.T(v.a,v.d,p)
m=a.db.ga7()
for(v=this.dx.y,u=v.length,t=[P.p],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
h=this.a.d4
if(l>=h.length)return H.f(h,l)
i=h[l]
h=j.gbv()
H.k(q,"$isb",s,"$asb")
if(!C.a.Z(q,h)){h.sco(q.length)
C.a.h(q,h)}e=m.w(0,j.ga7())
h=j.ga7()
g=$.bF
if(g==null){g=new V.U(0,0,0)
$.bF=g}g=h.by(g)
h=i.b
f=g.gdw(g)
d=g.gdz(g)
g=g.gdA(g)
C.b.B(h.a,h.d,f,d,g)
h=$.bF
if(h==null){h=new V.U(0,0,0)
$.bF=h}h=e.by(h)
g=i.c
C.b.B(g.a,g.d,h.a,h.b,h.c)
h=e.da()
g=i.d
n=new Float32Array(H.bl(H.k(new V.eM(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).aj(0,!0),"$isb",t,"$asb")))
C.b.fm(g.a,g.d,!1,n)
g=j.gt(j)
h=i.e
f=g.gc8()
d=g.gbA()
g=g.gbN()
C.b.B(h.a,h.d,f,d,g)
g=j.gbv()
h=g.gc4(g)
if(!h){h=i.r
C.b.T(h.a,h.d,1)}else{h=i.f
f=g.gkY()
d=h.a
h=h.d
if(!(f>=6))C.b.T(d,h,0)
else C.b.T(d,h,g.gco())
h=i.r
C.b.T(h.a,h.d,0)}h=j.gcN()
g=i.x
C.b.O(g.a,g.d,h)
h=j.gcO()
g=i.y
C.b.O(g.a,g.d,h)
h=j.gcP()
g=i.z
C.b.O(g.a,g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.eZ
C.b.T(v.a,v.d,p)
m=a.db.ga7()
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.d5
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbv()
H.k(q,"$isb",z,"$asb")
if(!C.a.Z(q,t)){t.sco(q.length)
C.a.h(q,t)}t=j.gbr(j)
s=i.b
h=t.gdw(t)
g=t.gdz(t)
t=t.gdA(t)
C.b.B(s.a,s.d,h,g,t)
t=j.gcZ(j)
g=i.c
h=t.gb0(t)
s=t.gb1(t)
t=t.gb2()
C.b.B(g.a,g.d,h,s,t)
t=j.gca()
s=i.d
h=t.gb0(t)
g=t.gb1(t)
t=t.gb2()
C.b.B(s.a,s.d,h,g,t)
t=j.gbs(j)
g=i.e
h=t.gb0(t)
s=t.gb1(t)
t=t.gb2()
C.b.B(g.a,g.d,h,s,t)
t=m.by(j.gbr(j))
s=i.f
C.b.B(s.a,s.d,t.a,t.b,t.c)
t=j.gbv()
s=t.gc4(t)
if(!s){t=i.x
C.b.T(t.a,t.d,1)}else{s=i.r
h=t.gc4(t)
g=s.a
s=s.d
if(!h)C.b.T(g,s,0)
else C.b.T(g,s,t.gk8(t))
t=i.x
C.b.T(t.a,t.d,0)}t=j.gt(j)
s=i.y
h=t.gc8()
g=t.gbA()
t=t.gbN()
C.b.B(s.a,s.d,h,g,t)
t=j.glF()
g=i.z
C.b.O(g.a,g.d,t)
t=j.glG()
g=i.Q
C.b.O(g.a,g.d,t)
t=j.gcN()
g=i.ch
C.b.O(g.a,g.d,t)
t=j.gcO()
g=i.cx
C.b.O(g.a,g.d,t)
t=j.gcP()
g=i.cy
C.b.O(g.a,g.d,t);++l}}}switch(x.f){case C.d:break
case C.i:break
case C.e:this.a0(q,this.Q.d)
z=this.a
v=this.Q.d
z.as(z.eK,z.bX,v)
break
case C.f:this.a0(q,this.Q.e)
z=this.a
v=this.Q.e
z.am(z.eL,z.bX,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db.ga7().da()
a.Q=v}z=z.id
z.toString
z.ap(v.aj(0,!0))}if(x.dy){this.a0(q,this.ch)
z=this.a
v=this.ch
z.am(z.eM,z.eN,v)
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
case C.e:this.a0(q,this.cx.d)
z=this.a
v=this.cx.d
z.as(z.eO,z.bZ,v)
v=this.a
z=this.cx.f
v=v.bY
v.toString
u=z.a
t=z.b
z=z.c
C.b.B(v.a,v.d,u,t,z)
break
case C.f:this.a0(q,this.cx.e)
z=this.a
v=this.cx.e
z.am(z.eP,z.bZ,v)
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
C.b.O(v.a,v.d,t)
break
case C.e:this.a0(q,this.cy.d)
z=this.a
v=this.cy.d
z.as(z.eQ,z.c1,v)
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
C.b.O(z.a,z.d,t)
break
case C.f:this.a0(q,this.cy.e)
z=this.a
v=this.cy.e
z.am(z.eR,z.c1,v)
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
C.b.O(z.a,z.d,t)
break}}z=x.y
v=z!==C.d
if(v){switch(z){case C.d:break
case C.i:z=this.a
u=this.db.f
z=z.c2
C.b.O(z.a,z.d,u)
break
case C.e:this.a0(q,this.db.d)
z=this.a
u=this.db.d
z.as(z.eS,z.c3,u)
u=this.a
z=this.db.f
u=u.c2
C.b.O(u.a,u.d,z)
break
case C.f:this.a0(q,this.db.e)
z=this.a
u=this.db.e
z.am(z.eT,z.c3,u)
u=this.a
z=this.db.f
u=u.c2
C.b.O(u.a,u.d,z)
break}z=a.a
C.b.d_(z,3042)
C.b.jv(z,770,771)}for(o=0;o<q.length;++o)q[o].a5(a)
z=b.e
z.a5(a)
z.ai(a)
z.aP(a)
if(v)C.b.jQ(a.a,3042)
for(z=a.a,o=0;o<q.length;++o){v=q[o]
if(v.c){v.c=!1
C.b.cK(z,33984+v.a)
C.b.aJ(z,34067,null)}}v=this.a
v.toString
C.b.ds(z,null)
v.x.eB()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dX().av}},ji:{"^":"dd;0f,a,b,0c,0d,0e",
bd:function(){var z,y
this.dJ()
z=this.f
if(!$.q.$2(z,1)){y=this.f
this.f=1
z=new D.J(this.b,y,1,this,[P.p])
z.b=!0
this.a.a4(z)}}},dd:{"^":"a;",
bd:["dJ",function(){}],
bH:["fP",function(){}],
jx:function(a){var z
if(this.c!==C.d){this.c=C.d
z=this.a
z.a=null
z.a4(null)}this.bd()
this.a.a4(null)}},jj:{"^":"dd;a,b,0c,0d,0e"},b9:{"^":"dd;0f,a,b,0c,0d,0e",
cF:function(a){var z,y
if(!J.Q(this.f,a)){z=this.f
this.f=a
y=new D.J(this.b+".color",z,a,this,[V.v])
y.b=!0
this.a.a4(y)}},
bd:["dK",function(){this.dJ()
this.cF(new V.v(0,0,0))}],
bH:["bC",function(){this.fP()
this.cF(new V.v(1,1,1))}],
st:function(a,b){var z
if(this.c===C.d){this.c=C.i
this.bH()
z=this.a
z.a=null
z.a4(null)}this.cF(b)}},jl:{"^":"b9;0ch,0f,a,b,0c,0d,0e",
bJ:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.J(this.b+".refraction",y,a,this,[P.p])
z.b=!0
this.a.a4(z)}},
bd:function(){this.dK()
this.bJ(1)},
bH:function(){this.bC()
this.bJ(1)},
saL:function(a){var z
if(a<=0)this.jx(0)
else if(this.c===C.d){this.c=C.i
this.bC()
this.bJ(1)
z=this.a
z.a=null
z.a4(null)}this.bJ(a)}},jm:{"^":"b9;0ch,0f,a,b,0c,0d,0e",
bK:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.J(this.b+".shininess",y,a,this,[P.p])
z.b=!0
this.a.a4(z)}},
bd:function(){this.dK()
this.bK(100)},
bH:function(){this.bC()
this.bK(100)}},kf:{"^":"bH;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
a4:[function(a){var z
H.d(a,"$isy")
z=this.e
if(!(z==null))z.J(a)},function(){return this.a4(null)},"hV","$1","$0","gcz",0,2,1],
ff:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.d(a.fr.k(0,"Skybox"),"$isf7")
if(z==null){y=a.a
z=new A.f7(y,"Skybox")
z.dL(y,"Skybox")
z.f8($.kh,$.kg)
z.z=z.x.k(0,"posAttr")
z.Q=H.i(z.y.k(0,"fov"),"$isZ")
z.ch=H.i(z.y.k(0,"ratio"),"$isZ")
z.cx=H.i(z.y.k(0,"boxClr"),"$isI")
z.cy=H.i(z.y.k(0,"boxTxt"),"$isaj")
z.db=H.i(z.y.k(0,"viewMat"),"$isaz")
a.eq(z)}this.a=z}if(b.e==null){y=b.d.ex(new Z.fO(a.a),$.$get$aA())
y.aM($.$get$aA()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.a5(a)}y=a.d
x=a.c
w=this.a
w.a5(a)
v=this.b
u=w.Q
C.b.O(u.a,u.d,v)
v=w.ch
C.b.O(v.a,v.d,y/x)
x=this.c
w.cy.dG(x)
x=this.d
y=w.cx
C.b.B(y.a,y.d,x.a,x.b,x.c)
x=a.db.ga7().da()
w=w.db
w.toString
w.ap(x.aj(0,!0))
y=b.e
if(y instanceof Z.d_){y.a5(a)
y.ai(a)
y.aP(a)}else b.e=null
y=this.a
y.toString
C.b.ds(a.a,null)
y.x.eB()
y=this.c
if(y!=null)y.aP(a)}},bH:{"^":"a;"}}],["","",,T,{"^":"",dp:{"^":"cX;"},dq:{"^":"dp;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
a5:function(a){var z
if(!this.c&&this.d>=6){this.c=!0
z=a.a
C.b.cK(z,33984+this.a)
C.b.aJ(z,34067,this.b)}},
aP:function(a){var z
if(this.c){this.c=!1
z=a.a
C.b.cK(z,33984+this.a)
C.b.aJ(z,34067,null)}}},kr:{"^":"a;a,0b,0c,0d,0e",
aW:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.ab
W.a2(z,"load",H.m(new T.ks(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
iz:function(a,b,c){var z,y,x,w
b=V.e_(b,2)
z=V.e_(a.width,2)
y=V.e_(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d1(null,null)
x.width=z
x.height=y
w=H.d(C.q.fw(x,"2d"),"$isd2")
w.imageSmoothingEnabled=!1;(w&&C.D).jS(w,a,0,0,x.width,x.height)
return P.mY(C.D.hC(w,0,0,x.width,x.height))}}},ks:{"^":"l:14;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.iz(this.b,z.c,this.c)
x=z.a
C.b.aJ(x,34067,this.d)
C.b.kw(x,37440,this.e?1:0)
C.b.kL(x,this.f,0,6408,6408,5121,y)
C.b.aJ(x,34067,null)
x=this.r
if(++x.d>=6){x=x.e
if(!(x==null))x.jT()}++z.e}}}],["","",,V,{"^":"",bv:{"^":"a;",
b4:function(a){return!0},
i:function(a){return"all"},
$isaE:1},aE:{"^":"a;"},eK:{"^":"a;0a",
sae:function(a){this.a=H.k(a,"$isb",[V.aE],"$asb")},
b4:["fO",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)if(z[x].b4(a))return!0
return!1}],
i:["dI",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaE:1},ax:{"^":"eK;0a",
b4:function(a){return!this.fO(a)},
i:function(a){return"!["+this.dI(0)+"]"}},jR:{"^":"a;0a,0b",
b4:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.be(this.a)
y=H.be(this.b)
return z+".."+y},
$isaE:1,
n:{
S:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.e(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.c.K(a,0)
y=C.c.K(b,0)
x=new V.jR()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},k3:{"^":"a;0a",
siD:function(a){this.a=H.k(a,"$isK",[P.n,P.M],"$asK")},
fU:function(a){var z,y
if(a.a.length<=0)throw H.e(P.u("May not create a SetMatcher with zero characters."))
z=new H.b2(0,0,[P.n,P.M])
for(y=new H.db(a,a.gp(a),0,[H.a5(a,"Y",0)]);y.E();)z.q(0,y.d,!0)
this.siD(z)},
b4:function(a){return this.a.bO(a)},
i:function(a){return P.c9(this.a.gaC(),0,null)},
$isaE:1,
n:{
x:function(a){var z=new V.k3()
z.fU(a)
return z}}},dj:{"^":"a;a,b,0c,0d",
siU:function(a){this.c=H.k(a,"$isb",[V.dt],"$asb")},
l:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dt(this.a.j(0,b))
w.sae(H.c([],[V.aE]))
w.c=!1
C.a.h(this.c,w)
return w},
jX:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.b4(a))return w}return},
i:function(a){return this.b}},fk:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.e1(this.b,"\n","\\n")
y=H.e1(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ds:{"^":"a;a,b,0c",
sit:function(a){var z=P.h
this.c=H.k(a,"$isK",[z,z],"$asK")},
aO:function(a,b,c){var z,y,x
H.k(c,"$isb",[P.h],"$asb")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.A)(c),++y){x=c[y]
this.c.q(0,x,b)}},
i:function(a){return this.b}},kx:{"^":"a;0a,0b,0c",
siL:function(a){this.a=H.k(a,"$isK",[P.h,V.dj],"$asK")},
siQ:function(a){this.b=H.k(a,"$isK",[P.h,V.ds],"$asK")},
j:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.dj(this,b)
z.siU(H.c([],[V.dt]))
z.d=null
this.a.q(0,b,z)}return z},
S:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.ds(this,a)
y=P.h
z.sit(new H.b2(0,0,[y,y]))
this.b.q(0,a,z)}return z},
fl:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fk])
y=this.c
x=[P.n]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.K(a,t)
r=y.jX(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c9(w,0,null)
throw H.e(P.u("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c9(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.fk(o==null?p.b:o,q,t)}++t}}},
n:{
cC:function(){var z,y
z=new V.kx()
y=P.h
z.siL(new H.b2(0,0,[y,V.dj]))
z.siQ(new H.b2(0,0,[y,V.ds]))
z.c=null
return z}}},dt:{"^":"eK;b,0c,0a",
i:function(a){return this.b.b+": "+this.dI(0)}}}],["","",,X,{"^":"",cm:{"^":"a;",$isaH:1},iC:{"^":"dn;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
sey:function(a,b){var z,y
if(this.b){this.b=!1
z=new D.J("clearColor",!0,!1,this,[P.M])
z.b=!0
y=this.x
if(!(y==null))y.J(z)}},
a5:function(a){var z,y,x,w,v,u,t,s
z=a.a
C.b.ju(z,36160,null)
C.b.d_(z,2884)
C.b.d_(z,2929)
C.b.jP(z,513)
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
v=w.a
if(typeof y!=="number")return H.B(y)
u=C.k.aw(v*y)
v=w.b
if(typeof x!=="number")return H.B(x)
t=C.k.aw(v*x)
v=C.k.aw(w.c*y)
a.c=v
w=C.k.aw(w.d*x)
a.d=w
C.b.kU(z,u,t,v,w)
C.b.jA(z,this.c)
if(this.b){w=this.a
C.b.jz(z,w.a,w.b,w.c,w.d)
s=16640}else s=256
C.b.jy(z,s)},
n:{
d6:function(a,b,c,d,e,f,g){var z,y
z=new X.iC()
y=new V.aC(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=$.f3
if(y==null){y=V.f2(0,0,1,1)
$.f3=y}z.r=y
return z}}},iL:{"^":"a;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
a5:function(a){var z
a.cy.c7(V.ba())
z=V.ba()
a.db.c7(z)},
aP:function(a){a.cy.aN()
a.db.aN()},
$isaH:1,
$iscm:1},jy:{"^":"a;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
ba:[function(a){var z
H.d(a,"$isy")
z=this.f
if(!(z==null))z.J(a)},function(){return this.ba(null)},"kX","$1","$0","ghb",0,2,1],
a5:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aF(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.c7(s)
z=$.eV
if(z==null){z=V.eY()
y=V.fI()
x=$.fE
if(x==null){x=new V.E(0,0,-1)
$.fE=x}x=V.eN(z,y,x)
$.eV=x
r=x}else r=z
z=this.b
if(z!=null){q=z.b7(a,this)
if(q!=null)r=q.w(0,r)}a.db.c7(r)},
aP:function(a){a.cy.aN()
a.db.aN()},
$isaH:1,
$iscm:1,
n:{
eU:function(a,b,c,d,e){var z,y,x
z=new X.jy()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gu().h(0,z.ghb())
x=new D.J("mover",y,z.b,z,[U.ag])
x.b=!0
z.ba(x)}x=z.c
if(!$.q.$2(x,b)){y=z.c
z.c=b
x=new D.J("fov",y,b,z,[P.p])
x.b=!0
z.ba(x)}x=z.d
if(!$.q.$2(x,d)){y=z.d
z.d=d
x=new D.J("near",y,d,z,[P.p])
x.b=!0
z.ba(x)}x=z.e
if(!$.q.$2(x,a)){y=z.e
z.e=a
x=new D.J("far",y,a,z,[P.p])
x.b=!0
z.ba(x)}return z}}},dn:{"^":"a;"}}],["","",,V,{"^":"",
nP:function(a){P.kw(C.V,new V.nQ(a))},
aZ:{"^":"a;0d",
scp:function(a){this.d=H.k(a,"$isb",[[P.b,W.b0]],"$asb")},
bD:function(a){this.b=new P.iJ(C.Y)
this.c=null
this.scp(H.c([],[[P.b,W.b0]]))},
P:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.b0]))
y=a.split("\n")
for(z=y.length,x=[W.b0],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.D(u)
s=this.b.ho(u,0,u.length)
r=s==null?u:s
C.j.fH(t,H.e1(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaD(this.d),t)}},
fd:function(a){var z,y,x,w
H.k(a,"$isb",[P.h],"$asb")
this.scp(H.c([],[[P.b,W.b0]]))
z=C.a.l(a,"\n")
y=this.c
if(y==null){y=this.bP()
this.c=y}for(y=y.fl(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)this.c6(y[w])}},
nQ:{"^":"l:52;a",
$1:function(a){H.d(a,"$isbf")
P.e0(C.k.fk(this.a.gk6(),2)+" fps")}},
id:{"^":"aZ;a,0b,0c,0d",
c6:function(a){switch(a.a){case"Class":this.P(a.b,"#551")
break
case"Comment":this.P(a.b,"#777")
break
case"Id":this.P(a.b,"#111")
break
case"Num":this.P(a.b,"#191")
break
case"Reserved":this.P(a.b,"#119")
break
case"String":this.P(a.b,"#171")
break
case"Symbol":this.P(a.b,"#616")
break
case"Type":this.P(a.b,"#B11")
break
case"Whitespace":this.P(a.b,"#111")
break}},
bP:function(){var z,y,x,w
z=V.cC()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.S("a","z")
C.a.h(y.a,x)
x=V.S("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.x(new H.w("_"))
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
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").l(0,"Float")
y=V.S("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").l(0,"Float")
x=V.S("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Sym")
y=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").l(0,"Sym")
x=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"OpenDoubleStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
y=V.x(new H.w("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.bv())
x=z.j(0,"Start").l(0,"OpenSingleStr")
y=V.x(new H.w("'"))
C.a.h(x.a,y)
y=z.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
x=V.x(new H.w("'"))
C.a.h(y.a,x)
x=z.j(0,"OpenSingleStr").l(0,"EscSingleStr")
y=V.x(new H.w("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscSingleStr").l(0,"OpenSingleStr")
x=V.x(new H.w("'"))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.bv())
x=z.j(0,"Start").l(0,"Slash")
y=V.x(new H.w("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"Comment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
x=z.j(0,"Comment").l(0,"EndComment")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").l(0,"Comment")
x=new V.ax()
w=[V.aE]
x.sae(H.c([],w))
C.a.h(y.a,x)
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"MLComment")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
x=z.j(0,"MLComment").l(0,"MLCStar")
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").l(0,"MLComment")
x=new V.ax()
x.sae(H.c([],w))
C.a.h(y.a,x)
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").l(0,"EndComment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Whitespace")
y=V.x(new H.w(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Whitespace").l(0,"Whitespace")
x=V.x(new H.w(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Int")
x.d=x.a.S("Num")
x=z.j(0,"Float")
x.d=x.a.S("Num")
x=z.j(0,"Sym")
x.d=x.a.S("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.S("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.S("String")
x=z.j(0,"EndComment")
x.d=x.a.S("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.S("Whitespace")
x=z.j(0,"Id")
y=x.a.S("Id")
x.d=y
x=[P.h]
y.aO(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aO(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aO(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iD:{"^":"aZ;a,0b,0c,0d",
c6:function(a){switch(a.a){case"Builtin":this.P(a.b,"#411")
break
case"Comment":this.P(a.b,"#777")
break
case"Id":this.P(a.b,"#111")
break
case"Num":this.P(a.b,"#191")
break
case"Preprocess":this.P(a.b,"#737")
break
case"Reserved":this.P(a.b,"#119")
break
case"Symbol":this.P(a.b,"#611")
break
case"Type":this.P(a.b,"#171")
break
case"Whitespace":this.P(a.b,"#111")
break}},
bP:function(){var z,y,x,w
z=V.cC()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.S("a","z")
C.a.h(y.a,x)
x=V.S("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.x(new H.w("_"))
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
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").l(0,"Float")
y=V.S("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").l(0,"Float")
x=V.S("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Sym")
y=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").l(0,"Sym")
x=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Slash")
y=V.x(new H.w("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"Comment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Slash").l(0,"Sym").a,new V.bv())
x=z.j(0,"Comment").l(0,"EndComment")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").l(0,"Comment")
x=new V.ax()
w=[V.aE]
x.sae(H.c([],w))
C.a.h(y.a,x)
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Preprocess")
x=V.x(new H.w("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").l(0,"Preprocess")
y=new V.ax()
y.sae(H.c([],w))
C.a.h(x.a,y)
x=V.x(new H.w("\n"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").l(0,"EndPreprocess")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Whitespace")
x=V.x(new H.w(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Whitespace").l(0,"Whitespace")
y=V.x(new H.w(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Int")
y.d=y.a.S("Num")
y=z.j(0,"Float")
y.d=y.a.S("Num")
y=z.j(0,"Sym")
y.d=y.a.S("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.S("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.S("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.S("Whitespace")
y=z.j(0,"Id")
x=y.a.S("Id")
y.d=x
y=[P.h]
x.aO(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aO(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aO(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iE:{"^":"aZ;a,0b,0c,0d",
c6:function(a){switch(a.a){case"Attr":this.P(a.b,"#911")
this.P("=","#111")
break
case"Id":this.P(a.b,"#111")
break
case"Other":this.P(a.b,"#111")
break
case"Reserved":this.P(a.b,"#119")
break
case"String":this.P(a.b,"#171")
break
case"Symbol":this.P(a.b,"#616")
break}},
bP:function(){var z,y,x
z=V.cC()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.S("a","z")
C.a.h(y.a,x)
x=V.S("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.S("0","9")
C.a.h(x.a,y)
y=V.S("a","z")
C.a.h(x.a,y)
y=V.S("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Id").l(0,"Attr")
x=V.x(new H.w("="))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Sym")
x=V.x(new H.w("</\\-!>="))
C.a.h(y.a,x)
x=z.j(0,"Sym").l(0,"Sym")
y=V.x(new H.w("</\\-!>="))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"OpenStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenStr").l(0,"CloseStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenStr").l(0,"EscStr")
x=V.x(new H.w("\\"))
C.a.h(y.a,x)
x=z.j(0,"EscStr").l(0,"OpenStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
C.a.h(z.j(0,"OpenStr").l(0,"OpenStr").a,new V.bv())
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.bv())
y=z.j(0,"Other").l(0,"Other")
x=new V.ax()
x.sae(H.c([],[V.aE]))
C.a.h(y.a,x)
y=V.x(new H.w('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.S("a","z")
C.a.h(x.a,y)
y=V.S("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.S("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.S("String")
y=z.j(0,"Id")
x=y.a.S("Id")
y.d=x
x.aO(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.j(0,"Attr")
x.d=x.a.S("Attr")
x=z.j(0,"Other")
x.d=x.a.S("Other")
return z}},
jA:{"^":"aZ;a,0b,0c,0d",
fd:function(a){H.k(a,"$isb",[P.h],"$asb")
this.scp(H.c([],[[P.b,W.b0]]))
this.P(C.a.l(a,"\n"),"#111")},
c6:function(a){},
bP:function(){return}},
jO:{"^":"a;a,b,0c",
cL:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.m(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fz().gdk().k(0,H.j(z))
if(y==null)if(d){c.$0()
this.ek(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.e5(this.c).h(0,v)
t=W.iN("radio")
t.checked=x
t.name=z
z=W.ab
W.a2(t,"change",H.m(new V.jP(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
C.G.F(v,t)
s=w.createElement("span")
s.textContent=b
C.G.F(v,s)
J.e5(this.c).h(0,w.createElement("br"))},
a8:function(a,b,c){return this.cL(a,b,c,!1)},
ek:function(a){var z,y,x,w,v
z=P.fz()
y=P.h
x=P.j4(z.gdk(),y,y)
x.q(0,this.a,a)
w=z.fg(0,x)
y=window.history
v=w.i(0)
y.toString;(y&&C.X).iv(y,new P.m1([],[]).dt(""),"",v)},
n:{
f0:function(a,b){var z,y
z=new V.jO(a,!0)
y=C.z.dB(document,a)
z.c=y
if(y==null)H.r("Failed to find "+a+" for RadioGroup")
return z}}},
jP:{"^":"l:14;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.ek(this.d)}}},
k9:{"^":"a;0a,0b",
fV:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.p).F(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.p.F(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.j.F(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.j.F(v,u)}t=z.createElement("div")
this.a=t
C.j.F(v,t)
this.b=null
t=W.ab
W.a2(z,"scroll",H.m(new V.kc(x),{func:1,ret:-1,args:[t]}),!1,t)},
ep:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.k(a,"$isb",[P.h],"$asb")
this.iG()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.fl(C.a.kd(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.j.F(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.j.F(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.j.F(y,t)
break
case"Link":s=u.b
if(H.hD(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=H.D(r[1])
q.textContent=H.D(r[0])
C.j.F(y,q)}else{p=P.cd(C.J,s,C.m,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.j(p)
q.textContent=s
C.j.F(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.j.F(y,t)
break}}C.j.F(this.a,y)},
fv:function(a){var z,y,x,w
z=new V.id("dart")
z.bD("dart")
y=new V.iD("glsl")
y.bD("glsl")
x=new V.iE("html")
x.bD("html")
w=C.a.jZ(H.c([z,y,x],[V.aZ]),new V.kd(a))
if(w!=null)return w
z=new V.jA("plain")
z.bD("plain")
return z},
em:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.k(a2,"$isb",[P.h],"$asb")
z=H.c([],[P.n])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.bU(w).ab(w,"+")){C.a.q(a2,x,C.c.ay(w,1))
C.a.h(z,1)
y=!0}else if(C.c.ab(w,"-")){C.a.q(a2,x,C.c.ay(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.fv(a0)
v.fd(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.j.F(t,s)
C.j.F(this.a,t)
r=P.cd(C.J,a,C.m,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.e7(null)
n.href="#"+H.j(r)
n.textContent=a
C.j.F(o,n)
C.x.F(p,o)
C.n.F(q,p)
C.o.F(s,q)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.A)(w),++e)C.x.F(f,w[e])
C.n.F(j,i)
C.n.F(j,h)
C.n.F(j,f)
C.o.F(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.A)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gU(w);b.E();)C.x.F(h,b.gL())
C.n.F(j,i)
C.n.F(j,h)
C.o.F(s,j)}},
jl:function(a){var z,y,x,w,v,u,t
H.k(a,"$isb",[P.h],"$asb")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
C.j.F(this.a,y)
w=C.o.hF(y,-1)
x=H.d((w&&C.n).e5(w,-1),"$iscB").style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
for(v=0;v<2;++v){u=z.createElement("div")
u.id=a[v]
x=u.style
x.textAlign="left"
x=u.style
x.verticalAlign="top"
t=H.d(C.n.e5(w,-1),"$iscB")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.x).F(t,u)}},
iG:function(){var z,y,x,w
if(this.b!=null)return
z=V.cC()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Bold")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").l(0,"Bold")
x=new V.ax()
w=[V.aE]
x.sae(H.c([],w))
C.a.h(y.a,x)
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.j(0,"Bold").l(0,"BoldEnd")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Italic")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Italic").l(0,"Italic")
x=new V.ax()
x.sae(H.c([],w))
C.a.h(y.a,x)
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=z.j(0,"Italic").l(0,"ItalicEnd")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Code")
x=V.x(new H.w("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Code").l(0,"Code")
x=new V.ax()
x.sae(H.c([],w))
C.a.h(y.a,x)
y=V.x(new H.w("`"))
C.a.h(x.a,y)
y=z.j(0,"Code").l(0,"CodeEnd")
x=V.x(new H.w("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"LinkHead")
x=V.x(new H.w("["))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"LinkHead").l(0,"LinkTail")
x=V.x(new H.w("|"))
C.a.h(y.a,x)
x=z.j(0,"LinkHead").l(0,"LinkEnd")
y=V.x(new H.w("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkHead").l(0,"LinkHead")
y=new V.ax()
y.sae(H.c([],w))
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").l(0,"LinkEnd")
y=V.x(new H.w("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").l(0,"LinkTail")
y=new V.ax()
y.sae(H.c([],w))
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.bv())
x=z.j(0,"Other").l(0,"Other")
y=new V.ax()
y.sae(H.c([],w))
C.a.h(x.a,y)
x=V.x(new H.w("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.S("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.S("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.S("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.S("Link")
x=z.j(0,"Other")
x.d=x.a.S("Other")
this.b=z},
n:{
ka:function(a,b){var z=new V.k9()
z.fV(a,!0)
return z}}},
kc:{"^":"l:14;a",
$1:function(a){P.fi(C.y,new V.kb(this.a))}},
kb:{"^":"l:0;a",
$0:function(){var z,y,x
z=C.k.aw(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}},
kd:{"^":"l:53;a",
$1:function(a){return H.d(a,"$isaZ").a===this.a}}}],["","",,D,{"^":"",
hy:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.ka("Test 014",!0)
y=W.d1(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.j.F(z.a,y)
x=[P.h]
z.ep(H.c(["Test of Material Lighting shader with different reflections and refractions. No alpha is being used. The background cube maps is being painted onto the object."],x))
z.jl(H.c(["controls","shapes"],x))
z.ep(H.c(["\xab[Back to Tests|../]"],x))
w=C.z.dB(document,"testCanvas")
if(w==null)H.r(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.ku(w,!0,!0,!0,!1)
u=X.d6(!0,!0,!1,null,2000,null,0)
u.sey(0,!1)
t=E.ev(null,!0,null,"",null,null)
t.sad(0,F.hF(30,1,15,0.5))
x=v.f
s=x.a
r=s.createTexture()
C.b.aJ(s,34067,r)
C.b.c9(s,34067,10242,10497)
C.b.c9(s,34067,10243,10497)
C.b.c9(s,34067,10241,9729)
C.b.c9(s,34067,10240,9729)
C.b.aJ(s,34067,null)
q=new T.dq()
q.a=0
q.b=r
q.c=!1
q.d=0
x.aW(q,r,"../resources/maskonaive/posx.jpg",34069,!1,!1)
x.aW(q,r,"../resources/maskonaive/negx.jpg",34070,!1,!1)
x.aW(q,r,"../resources/maskonaive/posy.jpg",34071,!1,!1)
x.aW(q,r,"../resources/maskonaive/negy.jpg",34072,!1,!1)
x.aW(q,r,"../resources/maskonaive/posz.jpg",34073,!1,!1)
x.aW(q,r,"../resources/maskonaive/negz.jpg",34074,!1,!1)
p=new O.jg()
p.shi(O.d3(V.an))
p.e.b9(p.ghS(),p.ghT())
x=new O.b9(p,"emission")
x.c=C.d
x.f=new V.v(0,0,0)
p.f=x
x=new O.b9(p,"ambient")
x.c=C.d
x.f=new V.v(0,0,0)
p.r=x
x=new O.b9(p,"diffuse")
x.c=C.d
x.f=new V.v(0,0,0)
p.x=x
x=new O.b9(p,"invDiffuse")
x.c=C.d
x.f=new V.v(0,0,0)
p.y=x
x=new O.jm(p,"specular")
x.c=C.d
x.f=new V.v(0,0,0)
x.ch=100
p.z=x
x=new O.jj(p,"bump")
x.c=C.d
p.Q=x
p.ch=null
x=new O.b9(p,"reflect")
x.c=C.d
x.f=new V.v(0,0,0)
p.cx=x
x=new O.jl(p,"refract")
x.c=C.d
x.f=new V.v(0,0,0)
x.ch=1
p.cy=x
x=new O.ji(p,"alpha")
x.c=C.d
x.f=1
p.db=x
x=new D.iX()
x.bE(D.a8)
x.shs(H.c([],[D.co]))
x.sik(H.c([],[D.eW]))
x.siK(H.c([],[D.f8]))
x.siV(H.c([],[D.fe]))
x.siW(H.c([],[D.ff]))
x.siX(H.c([],[D.fg]))
x.Q=null
x.ch=null
x.dF(x.ghR(),x.gia(),x.gic())
p.dx=x
s=x.Q
if(s==null){s=D.F()
x.Q=s
x=s}else x=s
x.h(0,p.gix())
x=p.dx
s=x.ch
if(s==null){s=D.F()
x.ch=s
x=s}else x=s
s=p.gcz()
x.h(0,s)
p.dy=null
x=p.dx
o=V.fI()
n=U.ej(V.eN(V.eY(),o,new V.E(-1,-1,-1)))
m=new V.v(1,1,1)
l=new D.co()
l.c=new V.v(1,1,1)
l.a=V.fJ()
k=l.b
l.b=n
n.gu().h(0,l.gh1())
n=new D.J("mover",k,l.b,l,[U.ag])
n.b=!0
l.aS(n)
if(!l.c.C(0,m)){k=l.c
l.c=m
n=new D.J("color",k,m,l,[V.v])
n.b=!0
l.aS(n)}x.h(0,l)
x=p.r
x.st(0,new V.v(0.1,0.1,0.1))
x=p.x
x.st(0,new V.v(0.1,0.1,0.1))
x=p.z
x.st(0,new V.v(1,1,1))
x=p.z
if(x.c===C.d){x.c=C.i
x.bC()
x.bK(100)
n=x.a
n.a=null
n.a4(null)}x.bK(10)
x=p.ch
if(x!==q){if(x!=null)x.gu().M(0,s)
k=p.ch
p.ch=q
q.gu().h(0,s)
x=new D.J("environment",k,p.ch,p,[T.dq])
x.b=!0
p.a4(x)}p.cy.saL(0.6)
x=p.cy
x.st(0,new V.v(0.2,0.3,1))
x=p.cx
x.st(0,new V.v(0.6,0.6,0.6))
j=new U.ex()
j.bE(U.ag)
j.b9(j.ghQ(),j.gib())
j.e=null
j.f=V.ba()
j.r=0
x=v.r
s=new U.kZ()
n=U.d4()
n.sdv(0,!0)
n.sdd(6.283185307179586)
n.sdf(0)
n.sa6(0,0)
n.sde(100)
n.sY(0)
n.scY(0.5)
s.b=n
l=s.gaT()
n.gu().h(0,l)
n=U.d4()
n.sdv(0,!0)
n.sdd(6.283185307179586)
n.sdf(0)
n.sa6(0,0)
n.sde(100)
n.sY(0)
n.scY(0.5)
s.c=n
n.gu().h(0,l)
s.d=null
s.e=!1
s.f=!1
s.r=!1
s.x=2.5
s.y=2.5
s.z=2
s.Q=4
s.cx=!1
s.ch=!1
s.cy=0
s.db=0
s.dx=null
s.dy=0
s.fr=null
s.fx=null
i=new X.aG(!1,!1,!1)
k=s.d
s.d=i
n=[X.aG]
l=new D.J("modifiers",k,i,s,n)
l.b=!0
s.X(l)
l=s.f
if(l!==!1){s.f=!1
l=new D.J("invertX",l,!1,s,[P.M])
l.b=!0
s.X(l)}l=s.r
if(l!==!1){s.r=!1
l=new D.J("invertY",l,!1,s,[P.M])
l.b=!0
s.X(l)}s.bh(x)
j.h(0,s)
x=v.r
s=new U.kY()
l=U.d4()
l.sdv(0,!0)
l.sdd(6.283185307179586)
l.sdf(0)
l.sa6(0,0)
l.sde(100)
l.sY(0)
l.scY(0.2)
s.b=l
l.gu().h(0,s.gaT())
s.c=null
s.d=!1
s.e=2.5
s.f=2
s.r=4
s.y=!1
s.x=!1
s.z=0
s.Q=null
s.ch=0
s.cx=null
s.cy=null
i=new X.aG(!0,!1,!1)
k=s.c
s.c=i
l=new D.J("modifiers",k,i,s,n)
l.b=!0
s.X(l)
s.bh(x)
j.h(0,s)
x=v.r
s=new U.l_()
s.c=0.01
s.d=0
s.e=0
i=new X.aG(!1,!1,!1)
s.b=i
n=new D.J("modifiers",null,i,s,n)
n.b=!0
s.X(n)
s.bh(x)
j.h(0,s)
j.h(0,U.ej(V.aF(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
h=X.eU(2000,1.0471975511965976,j,0.1,null)
g=new M.ia()
g.sbi(null)
g.sbt(0,null)
g.sbu(null)
x=E.ev(null,!0,null,"",null,null)
f=F.cA()
s=f.a
n=new V.E(-1,-1,1)
n=n.v(0,Math.sqrt(n.G(n)))
e=s.bM(new V.aP(1,2,4,6),new V.aC(1,0,0,1),new V.U(-1,-1,0),new V.a4(0,1),n,null)
s=f.a
n=new V.E(1,-1,1)
n=n.v(0,Math.sqrt(n.G(n)))
d=s.bM(new V.aP(0,3,4,6),new V.aC(0,0,1,1),new V.U(1,-1,0),new V.a4(1,1),n,null)
s=f.a
n=new V.E(1,1,1)
n=n.v(0,Math.sqrt(n.G(n)))
c=s.bM(new V.aP(0,2,5,6),new V.aC(0,1,0,1),new V.U(1,1,0),new V.a4(1,0),n,null)
s=f.a
n=V.aO()
l=new V.E(-1,1,1)
l=l.v(0,Math.sqrt(l.G(l)))
b=s.bM(new V.aP(0,2,4,7),new V.aC(1,1,0,1),new V.U(-1,1,0),n,l,null)
f.d.en(H.c([e,d,c,b],[F.ae]))
f.at()
x.sad(0,f)
g.d=x
g.e=null
x=new O.kf()
x.b=1.0471975511965976
x.d=new V.v(1,1,1)
k=x.c
x.c=q
q.gu().h(0,x.gcz())
s=new D.J("boxTexture",k,x.c,x,[T.dq])
s.b=!0
x.a4(s)
g.sbu(x)
g.sbt(0,u)
g.sbi(h)
a=new M.is()
a.shm(0,O.d3(E.au))
a.d.b9(a.ghW(),a.ghX())
a.e=null
a.f=null
a.r=null
a.x=null
a.sbi(null)
a.sbt(0,null)
a.sbu(null)
a.sbi(h)
a.sbu(p)
a.sbt(0,u)
a.d.h(0,t)
a.b.sey(0,!1)
x=M.aJ
s=H.c([g,a],[x])
n=new M.i5()
n.bE(x)
n.e=!1
n.f=null
n.b9(n.gie(),n.gig())
n.af(0,s)
x=v.d
if(x!==n){if(x!=null)x.gu().M(0,v.gdN())
v.d=n
n.gu().h(0,v.gdN())
v.fY()}x=V.f0("controls",!0)
x.cL(0,"Silver",new D.nq(p),!0)
x.a8(0,"Gold",new D.nr(p))
x.a8(0,"Glass",new D.ns(p))
x.a8(0,"Blue Glass",new D.nB(p))
x.a8(0,"Water Bubble",new D.nC(p))
x.a8(0,"No Reflection",new D.nD(p))
x.a8(0,"Pink Distort",new D.nE(p))
x.a8(0,"Cloak",new D.nF(p))
x.a8(0,"White and Shiny",new D.nG(p))
x=V.f0("shapes",!0)
x.a8(0,"Cube",new D.nH(t))
x.a8(0,"Cuboid",new D.nI(t))
x.a8(0,"Cylinder",new D.nt(t))
x.a8(0,"Cone",new D.nu(t))
x.a8(0,"Cylindrical",new D.nv(t))
x.a8(0,"Sphere",new D.nw(t))
x.a8(0,"Spherical",new D.nx(t))
x.cL(0,"Toroid",new D.ny(t),!0)
x.a8(0,"Knot",new D.nz(t))
x=v.z
if(x==null){x=D.F()
v.z=x}s={func:1,ret:-1,args:[D.y]}
n=H.m(new D.nA(z,p),s)
if(x.b==null)x.sbe(H.c([],[s]))
x=x.b;(x&&C.a).h(x,n)
V.nP(v)},
nq:{"^":"l:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.st(0,new V.v(0.1,0.1,0.1))
y=z.x
y.st(0,new V.v(0.2,0.2,0.2))
y=z.z
y.st(0,new V.v(1,1,1))
z.cy.st(0,new V.v(0,0,0))
z=z.cx
z.st(0,new V.v(1,1,1))}},
nr:{"^":"l:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.st(0,new V.v(0.11,0.11,0.1))
y=z.x
y.st(0,new V.v(0.21,0.21,0.2))
y=z.z
y.st(0,new V.v(1,1,1))
z.cy.st(0,new V.v(0,0,0))
z=z.cx
z.st(0,new V.v(1,0.9,0.5))}},
ns:{"^":"l:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.st(0,new V.v(0.1,0.1,0.1))
y=z.x
y.st(0,new V.v(0.1,0.1,0.1))
y=z.z
y.st(0,new V.v(1,1,1))
z.cy.saL(0.4)
y=z.cy
y.st(0,new V.v(0.6,0.6,0.6))
z=z.cx
z.st(0,new V.v(0.4,0.4,0.4))}},
nB:{"^":"l:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.st(0,new V.v(0.1,0.1,0.1))
y=z.x
y.st(0,new V.v(0.1,0.1,0.1))
y=z.z
y.st(0,new V.v(1,1,1))
z.cy.saL(0.4)
y=z.cy
y.st(0,new V.v(0.2,0.3,1))
z=z.cx
z.st(0,new V.v(0.3,0.3,0.3))}},
nC:{"^":"l:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.st(0,new V.v(0.1,0.1,0.1))
y=z.x
y.st(0,new V.v(0.1,0.1,0.1))
y=z.z
y.st(0,new V.v(1,1,1))
z.cy.saL(0.6)
y=z.cy
y.st(0,new V.v(0.8,0.8,0.8))
z=z.cx
z.st(0,new V.v(0.2,0.2,0.2))}},
nD:{"^":"l:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.st(0,new V.v(0.1,0.1,0.1))
y=z.x
y.st(0,new V.v(0.1,0.1,0.1))
y=z.z
y.st(0,new V.v(1,1,1))
z.cy.saL(0.6)
y=z.cy
y.st(0,new V.v(1,1,1))
z.cx.st(0,new V.v(0,0,0))}},
nE:{"^":"l:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.st(0,new V.v(0.1,0.1,0.1))
y=z.x
y.st(0,new V.v(0.1,0.1,0.1))
y=z.z
y.st(0,new V.v(1,1,1))
z.cy.saL(0.9)
y=z.cy
y.st(0,new V.v(1,0.8,0.8))
z.cx.st(0,new V.v(0,0,0))}},
nF:{"^":"l:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.st(0,new V.v(0,0,0))
y=z.x
y.st(0,new V.v(0.1,0.1,0.1))
y=z.z
y.st(0,new V.v(0.1,0.1,0.1))
z.cy.saL(0.99)
y=z.cy
y.st(0,new V.v(0.95,0.95,0.95))
z.cx.st(0,new V.v(0,0,0))}},
nG:{"^":"l:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.st(0,new V.v(0.3,0.3,0.3))
y=z.x
y.st(0,new V.v(0.5,0.5,0.5))
y=z.z
y.st(0,new V.v(1,1,1))
z.cy.st(0,new V.v(0,0,0))
z=z.cx
z.st(0,new V.v(0.3,0.3,0.3))}},
nH:{"^":"l:0;a",
$0:function(){this.a.sad(0,F.dU(1,null,null,1))}},
nI:{"^":"l:0;a",
$0:function(){this.a.sad(0,F.dU(15,null,new D.np(),15))}},
np:{"^":"l:5;",
$3:function(a,b,c){var z,y,x,w
z=Math.cos(c*4*3.141592653589793+3.141592653589793)
y=Math.cos(b*4*3.141592653589793+3.141592653589793)
x=a.f
x=new V.E(x.a,x.b,x.c)
w=x.v(0,Math.sqrt(x.G(x)))
x=a.f
y=w.w(0,z*0.1+y*0.1)
a.sa6(0,x.I(0,new V.U(y.a,y.b,y.c)))}},
nt:{"^":"l:0;a",
$0:function(){this.a.sad(0,F.hp(1,!0,!0,1,30,1))}},
nu:{"^":"l:0;a",
$0:function(){this.a.sad(0,F.hp(1,!0,!1,1,30,0))}},
nv:{"^":"l:0;a",
$0:function(){this.a.sad(0,F.hq(!0,!0,25,new D.no(),50))}},
no:{"^":"l:9;",
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}},
nw:{"^":"l:0;a",
$0:function(){this.a.sad(0,F.hC(6,null,1,6))}},
nx:{"^":"l:0;a",
$0:function(){this.a.sad(0,F.hC(10,new D.nn(),1,10))}},
nn:{"^":"l:9;",
$2:function(a,b){var z,y
z=a-0.5
y=b-0.5
return Math.cos(Math.sqrt(z*z+y*y)*3.141592653589793)*0.3}},
ny:{"^":"l:0;a",
$0:function(){this.a.sad(0,F.hF(30,1,15,0.5))}},
nz:{"^":"l:0;a",
$0:function(){this.a.sad(0,F.nk(120,1,2,12,0.3,3))}},
nA:{"^":"l:8;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isy")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.em("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.em("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.N=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eC.prototype
return J.eB.prototype}if(typeof a=="string")return J.c4.prototype
if(a==null)return J.eD.prototype
if(typeof a=="boolean")return J.iR.prototype
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.a)return a
return J.cO(a)}
J.br=function(a){if(typeof a=="string")return J.c4.prototype
if(a==null)return a
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.a)return a
return J.cO(a)}
J.dX=function(a){if(a==null)return a
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.a)return a
return J.cO(a)}
J.n7=function(a){if(typeof a=="number")return J.c3.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ca.prototype
return a}
J.n8=function(a){if(typeof a=="number")return J.c3.prototype
if(typeof a=="string")return J.c4.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ca.prototype
return a}
J.bU=function(a){if(typeof a=="string")return J.c4.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ca.prototype
return a}
J.a0=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.a)return a
return J.cO(a)}
J.Q=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).C(a,b)}
J.hG=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.n7(a).V(a,b)}
J.e3=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n8(a).w(a,b)}
J.hH=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nj(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.br(a).k(a,b)}
J.hI=function(a,b,c,d){return J.a0(a).he(a,b,c,d)}
J.hJ=function(a,b){return J.bU(a).K(a,b)}
J.ci=function(a,b){return J.a0(a).iq(a,b)}
J.cT=function(a,b,c){return J.a0(a).iu(a,b,c)}
J.e4=function(a,b){return J.a0(a).F(a,b)}
J.hK=function(a,b){return J.bU(a).a3(a,b)}
J.cU=function(a,b,c){return J.br(a).jD(a,b,c)}
J.cj=function(a,b){return J.dX(a).ag(a,b)}
J.hL=function(a,b,c,d){return J.a0(a).jW(a,b,c,d)}
J.hM=function(a){return J.a0(a).gjs(a)}
J.e5=function(a){return J.a0(a).gcV(a)}
J.bV=function(a){return J.N(a).ga_(a)}
J.b6=function(a){return J.dX(a).gU(a)}
J.as=function(a){return J.br(a).gp(a)}
J.hN=function(a){return J.a0(a).gkx(a)}
J.hO=function(a){return J.a0(a).gkK(a)}
J.cV=function(a,b){return J.a0(a).b8(a,b)}
J.e6=function(a){return J.dX(a).kz(a)}
J.hP=function(a,b){return J.a0(a).kD(a,b)}
J.hQ=function(a,b){return J.a0(a).skS(a,b)}
J.hR=function(a,b,c){return J.a0(a).fG(a,b,c)}
J.hS=function(a,b,c){return J.bU(a).A(a,b,c)}
J.hT=function(a){return J.bU(a).kR(a)}
J.af=function(a){return J.N(a).i(a)}
I.a9=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.ck.prototype
C.q=W.d0.prototype
C.D=W.d2.prototype
C.j=W.b0.prototype
C.U=W.ij.prototype
C.W=W.iF.prototype
C.X=W.iG.prototype
C.z=W.iI.prototype
C.Z=J.H.prototype
C.a=J.b8.prototype
C.a_=J.eB.prototype
C.h=J.eC.prototype
C.r=J.eD.prototype
C.k=J.c3.prototype
C.c=J.c4.prototype
C.a6=J.c5.prototype
C.G=W.iW.prototype
C.ac=W.js.prototype
C.M=J.jz.prototype
C.N=W.jQ.prototype
C.b=P.di.prototype
C.x=W.cB.prototype
C.o=W.ko.prototype
C.n=W.kp.prototype
C.C=J.ca.prototype
C.O=W.bL.prototype
C.P=W.lk.prototype
C.R=new P.hX(!1)
C.Q=new P.hW(C.R)
C.S=new P.jx()
C.T=new P.l7()
C.l=new P.lS()
C.d=new A.cn(0,"ColorSourceType.None")
C.i=new A.cn(1,"ColorSourceType.Solid")
C.e=new A.cn(2,"ColorSourceType.Texture2D")
C.f=new A.cn(3,"ColorSourceType.TextureCube")
C.y=new P.bx(0)
C.V=new P.bx(5e6)
C.Y=new P.iK("element",!0,!1,!1,!1)
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
C.H=H.c(I.a9([127,2047,65535,1114111]),[P.n])
C.t=H.c(I.a9([0,0,32776,33792,1,10240,0,0]),[P.n])
C.a7=H.c(I.a9(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.u=H.c(I.a9([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.v=H.c(I.a9([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.a8=H.c(I.a9(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.I=H.c(I.a9([]),[P.h])
C.a9=H.c(I.a9([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.J=H.c(I.a9([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.w=H.c(I.a9([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.K=H.c(I.a9([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.aa=H.c(I.a9([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.L=H.c(I.a9([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.A=H.c(I.a9(["bind","if","ref","repeat","syntax"]),[P.h])
C.B=H.c(I.a9(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.ab=new H.i9(0,{},C.I,[P.h,P.h])
C.m=new P.l0(!1)
$.aB=0
$.bw=null
$.eb=null
$.dN=!1
$.hv=null
$.hm=null
$.hB=null
$.cN=null
$.cQ=null
$.dY=null
$.bm=null
$.bQ=null
$.bR=null
$.dO=!1
$.T=C.l
$.aN=null
$.d5=null
$.eu=null
$.et=null
$.ep=null
$.eo=null
$.en=null
$.em=null
$.q=V.jn()
$.eO=null
$.eX=null
$.bF=null
$.f3=null
$.fD=null
$.fH=null
$.fF=null
$.fG=null
$.cF=null
$.fE=null
$.kh="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.kg="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.eV=null
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
I.$lazy(y,x,w)}})(["el","$get$el",function(){return H.hu("_$dart_dartClosure")},"d8","$get$d8",function(){return H.hu("_$dart_js")},"fm","$get$fm",function(){return H.aK(H.cD({
toString:function(){return"$receiver$"}}))},"fn","$get$fn",function(){return H.aK(H.cD({$method$:null,
toString:function(){return"$receiver$"}}))},"fo","$get$fo",function(){return H.aK(H.cD(null))},"fp","$get$fp",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ft","$get$ft",function(){return H.aK(H.cD(void 0))},"fu","$get$fu",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fr","$get$fr",function(){return H.aK(H.fs(null))},"fq","$get$fq",function(){return H.aK(function(){try{null.$method$}catch(z){return z.message}}())},"fw","$get$fw",function(){return H.aK(H.fs(void 0))},"fv","$get$fv",function(){return H.aK(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dI","$get$dI",function(){return P.ll()},"bS","$get$bS",function(){return[]},"fC","$get$fC",function(){return P.l4()},"fR","$get$fR",function(){return H.jq(H.bl(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"ha","$get$ha",function(){return P.jV("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hi","$get$hi",function(){return P.mF()},"ek","$get$ek",function(){return{}},"fV","$get$fV",function(){return P.eH(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dJ","$get$dJ",function(){return P.eG(P.h,P.bZ)},"fM","$get$fM",function(){return Z.ap(0)},"fK","$get$fK",function(){return Z.ap(511)},"aA","$get$aA",function(){return Z.ap(1)},"aU","$get$aU",function(){return Z.ap(2)},"aT","$get$aT",function(){return Z.ap(4)},"aV","$get$aV",function(){return Z.ap(8)},"aW","$get$aW",function(){return Z.ap(16)},"bJ","$get$bJ",function(){return Z.ap(32)},"bK","$get$bK",function(){return Z.ap(64)},"fL","$get$fL",function(){return Z.ap(96)},"bj","$get$bj",function(){return Z.ap(128)},"aS","$get$aS",function(){return Z.ap(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aw]},{func:1,ret:P.G,args:[F.ae,P.p,P.p]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.n,[P.o,E.au]]},{func:1,ret:P.G,args:[D.y]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:P.G,args:[F.ac]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.ab]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:P.G,args:[W.ab]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:-1,args:[P.n,[P.o,V.an]]},{func:1,ret:P.h,args:[P.h]},{func:1,args:[,]},{func:1,ret:P.p},{func:1,ret:P.M,args:[W.C]},{func:1,ret:P.M,args:[W.aI]},{func:1,ret:P.M,args:[P.h]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:-1,args:[W.bC]},{func:1,ret:P.G,args:[,]},{func:1,ret:-1,args:[P.n,[P.o,D.a8]]},{func:1,ret:P.M,args:[W.R,P.h,P.h,W.cc]},{func:1,ret:-1,args:[P.n,[P.o,U.ag]]},{func:1,ret:-1,args:[P.n,[P.o,M.aJ]]},{func:1,ret:P.h,args:[P.n]},{func:1,ret:V.U,args:[P.p]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[P.h,,]},{func:1,ret:P.G,args:[,],opt:[,]},{func:1,ret:[P.aX,,],args:[,]},{func:1,args:[W.ab]},{func:1,ret:P.M,args:[P.p,P.p]},{func:1,ret:P.O,args:[P.n]},{func:1,ret:P.M,args:[[P.o,D.a8]]},{func:1,ret:P.G,args:[P.h]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.n,args:[[P.b,P.n],P.n]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,args:[,P.h]},{func:1,ret:-1,args:[W.bL]},{func:1,args:[P.h]},{func:1,ret:[P.K,P.h,P.h],args:[[P.K,P.h,P.h],P.h]},{func:1,ret:P.G,args:[P.ak]},{func:1,ret:-1,args:[P.h,P.n]},{func:1,ret:P.G,args:[P.bf]},{func:1,ret:P.M,args:[V.aZ]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:P.O,args:[,,]},{func:1,ret:W.R,args:[W.C]}]
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
if(x==y)H.nT(d||a)
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
Isolate.a9=a.a9
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
if(typeof dartMainRunner==="function")dartMainRunner(D.hy,[])
else D.hy([])})})()
//# sourceMappingURL=test.dart.js.map
