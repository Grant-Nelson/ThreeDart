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
var d=supportsDirectProtoAccess&&b2!="b"
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dY"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dY"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dY(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dZ=function(){}
var dart=[["","",,H,{"^":"",o9:{"^":"b;a"}}],["","",,J,{"^":"",
e0:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ci:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.e_==null){H.nc()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.cE("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dc()]
if(v!=null)return v
v=H.ng(a)
if(v!=null)return v
if(typeof a=="function")return C.Y
y=Object.getPrototypeOf(a)
if(y==null)return C.G
if(y===Object.prototype)return C.G
if(typeof w=="function"){Object.defineProperty(w,$.$get$dc(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
L:{"^":"b;",
A:function(a,b){return a===b},
ga_:function(a){return H.bQ(a)},
i:["fQ",function(a){return"Instance of '"+H.bm(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
j5:{"^":"L;",
i:function(a){return String(a)},
ga_:function(a){return a?519018:218159},
$isD:1},
eE:{"^":"L;",
A:function(a,b){return null==b},
i:function(a){return"null"},
ga_:function(a){return 0},
$isw:1},
dd:{"^":"L;",
ga_:function(a){return 0},
i:["fR",function(a){return String(a)}]},
jN:{"^":"dd;"},
cF:{"^":"dd;"},
bJ:{"^":"dd;",
i:function(a){var z=a[$.$get$ek()]
if(z==null)return this.fR(a)
return"JavaScript function for "+H.l(J.as(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isda:1},
b6:{"^":"L;$ti",
h:function(a,b){H.v(b,H.r(a,0))
if(!!a.fixed$length)H.q(P.Z("add"))
a.push(b)},
a3:function(a,b){var z
if(!!a.fixed$length)H.q(P.Z("remove"))
for(z=0;z<a.length;++z)if(J.Q(a[z],b)){a.splice(z,1)
return!0}return!1},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.bf(a))}},
H:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.q(z,y,H.l(a[y]))
return z.join(b)},
kq:function(a){return this.H(a,"")},
kj:function(a,b,c,d){var z,y,x
H.v(b,d)
H.i(c,{func:1,ret:d,args:[d,H.r(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.e(P.bf(a))}return y},
ak:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fP:function(a,b,c){if(b<0||b>a.length)throw H.e(P.a2(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.a2(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.r(a,0)])
return H.d(a.slice(b,c),[H.r(a,0)])},
gaN:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.j2())},
fM:function(a,b,c,d,e){var z,y,x
z=H.r(a,0)
H.j(d,"$isu",[z],"$asu")
if(!!a.immutable$list)H.q(P.Z("setRange"))
P.aW(b,c,a.length,null,null,null)
y=c-b
if(y===0)return
H.j(d,"$isa",[z],"$asa")
z=J.bb(d)
if(e+y>z.gm(d))throw H.e(H.j3())
if(e<b)for(x=y-1;x>=0;--x)a[b+x]=z.j(d,e+x)
else for(x=0;x<y;++x)a[b+x]=z.j(d,e+x)},
bG:function(a,b,c,d){return this.fM(a,b,c,d,0)},
b4:function(a,b){var z
for(z=0;z<a.length;++z)if(J.Q(a[z],b))return!0
return!1},
i:function(a){return P.db(a,"[","]")},
ga5:function(a){return new J.at(a,a.length,0,[H.r(a,0)])},
ga_:function(a){return H.bQ(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.Z("set length"))
if(b<0)throw H.e(P.a2(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.b3(a,b))
if(b>=a.length||b<0)throw H.e(H.b3(a,b))
return a[b]},
q:function(a,b,c){H.v(c,H.r(a,0))
if(!!a.immutable$list)H.q(P.Z("indexed set"))
if(b>=a.length||b<0)throw H.e(H.b3(a,b))
a[b]=c},
l:function(a,b){var z,y
z=[H.r(a,0)]
H.j(b,"$isa",z,"$asa")
y=C.e.l(a.length,b.gm(b))
z=H.d([],z)
this.sm(z,y)
this.bG(z,0,a.length,a)
this.bG(z,a.length,y,b)
return z},
$isu:1,
$isa:1,
p:{
j4:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.cX(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.a2(a,0,4294967295,"length",null))
return J.eB(new Array(a),b)},
eB:function(a,b){return J.cu(H.d(a,[b]))},
cu:function(a){H.cj(a)
a.fixed$length=Array
return a}}},
o8:{"^":"b6;$ti"},
at:{"^":"b;a,b,c,0d,$ti",
sdX:function(a){this.d=H.v(a,H.r(this,0))},
gU:function(){return this.d},
I:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.A(z))
x=this.c
if(x>=y){this.sdX(null)
return!1}this.sdX(z[x]);++this.c
return!0},
$isaP:1},
c8:{"^":"L;",
l6:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.e(P.Z(""+a+".toInt()"))},
cb:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.Z(""+a+".floor()"))},
av:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.Z(""+a+".round()"))},
fo:function(a,b){var z,y
if(b>20)throw H.e(P.a2(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bz:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.e(P.a2(b,2,36,"radix",null))
z=a.toString(b)
if(C.c.Z(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.q(P.Z("Unexpected toString result: "+z))
x=y.length
if(1>=x)return H.f(y,1)
z=y[1]
if(3>=x)return H.f(y,3)
w=+y[3]
x=y[2]
if(x!=null){z+=x
w-=x.length}return z+C.c.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga_:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.e(H.ah(b))
return a+b},
bD:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fT:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ei(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.ei(a,b)},
ei:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.Z("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aZ:function(a,b){var z
if(a>0)z=this.eg(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
iX:function(a,b){if(b<0)throw H.e(H.ah(b))
return this.eg(a,b)},
eg:function(a,b){return b>31?0:a>>>b},
F:function(a,b){if(typeof b!=="number")throw H.e(H.ah(b))
return a<b},
aP:function(a,b){if(typeof b!=="number")throw H.e(H.ah(b))
return a>=b},
$isy:1,
$isaw:1},
eD:{"^":"c8;",$iso:1},
eC:{"^":"c8;"},
c9:{"^":"L;",
Z:function(a,b){if(b<0)throw H.e(H.b3(a,b))
if(b>=a.length)H.q(H.b3(a,b))
return a.charCodeAt(b)},
J:function(a,b){if(b>=a.length)throw H.e(H.b3(a,b))
return a.charCodeAt(b)},
l:function(a,b){H.E(b)
if(typeof b!=="string")throw H.e(P.cX(b,null,null))
return a+b},
b9:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ah(b))
c=P.aW(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ai:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.ah(c))
if(typeof c!=="number")return c.F()
if(c<0||c>a.length)throw H.e(P.a2(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ah:function(a,b){return this.ai(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ah(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.F()
if(b<0)throw H.e(P.cy(b,null,null))
if(b>c)throw H.e(P.cy(b,null,null))
if(c>a.length)throw H.e(P.cy(c,null,null))
return a.substring(b,c)},
aw:function(a,b){return this.u(a,b,null)},
fp:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.J(z,0)===133){x=J.j6(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.Z(z,w)===133?J.j7(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.M)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
kG:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
an:function(a,b){return this.kG(a,b," ")},
kH:function(a,b,c){var z=b-a.length
if(z<=0)return a
return a+this.k(c,z)},
f5:function(a,b,c){var z
if(c<0||c>a.length)throw H.e(P.a2(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dc:function(a,b){return this.f5(a,b,0)},
ks:function(a,b,c){var z
c=a.length
z=b.length
if(c+z>c)c-=z
return a.lastIndexOf(b,c)},
kr:function(a,b){return this.ks(a,b,null)},
jV:function(a,b,c){if(c>a.length)throw H.e(P.a2(c,0,a.length,null,null))
return H.hE(a,b,c)},
i:function(a){return a},
ga_:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
j:function(a,b){if(b>=a.length||!1)throw H.e(H.b3(a,b))
return a[b]},
$iseX:1,
$ism:1,
p:{
eF:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
j6:function(a,b){var z,y
for(z=a.length;b<z;){y=C.c.J(a,b)
if(y!==32&&y!==13&&!J.eF(y))break;++b}return b},
j7:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.c.Z(a,z)
if(y!==32&&y!==13&&!J.eF(y))break}return b}}}}],["","",,H,{"^":"",
cO:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
j2:function(){return new P.ds("No element")},
j3:function(){return new P.ds("Too few elements")},
ad:{"^":"kT;a",
gm:function(a){return this.a.length},
j:function(a,b){return C.c.Z(this.a,b)},
$asdK:function(){return[P.o]},
$asX:function(){return[P.o]},
$asu:function(){return[P.o]},
$asa:function(){return[P.o]}},
ig:{"^":"u;"},
eL:{"^":"b;a,b,c,0d,$ti",
sbf:function(a){this.d=H.v(a,H.r(this,0))},
gU:function(){return this.d},
I:function(){var z,y,x,w
z=this.a
y=J.bb(z)
x=y.gm(z)
if(this.b!==x)throw H.e(P.bf(z))
w=this.c
if(w>=x){this.sbf(null)
return!1}this.sbf(y.ak(z,w));++this.c
return!0},
$isaP:1},
ju:{"^":"u;a,b,$ti",
ga5:function(a){return new H.jv(J.c1(this.a),this.b,this.$ti)},
gm:function(a){return J.ar(this.a)},
ak:function(a,b){return this.b.$1(J.cV(this.a,b))},
$asu:function(a,b){return[b]}},
jv:{"^":"aP;0a,b,c,$ti",
sbf:function(a){this.a=H.v(a,H.r(this,1))},
I:function(){var z=this.b
if(z.I()){this.sbf(this.c.$1(z.gU()))
return!0}this.sbf(null)
return!1},
gU:function(){return this.a},
$asaP:function(a,b){return[b]}},
ll:{"^":"u;a,b,$ti",
ga5:function(a){return new H.lm(J.c1(this.a),this.b,this.$ti)}},
lm:{"^":"aP;a,b,$ti",
I:function(){var z,y
for(z=this.a,y=this.b;z.I();)if(y.$1(z.gU()))return!0
return!1},
gU:function(){return this.a.gU()}},
cr:{"^":"b;$ti"},
dK:{"^":"b;$ti",
q:function(a,b,c){H.v(c,H.aG(this,"dK",0))
throw H.e(P.Z("Cannot modify an unmodifiable list"))}},
kT:{"^":"cv+dK;"}}],["","",,H,{"^":"",
i4:function(){throw H.e(P.Z("Cannot modify unmodifiable Map"))},
bD:function(a){var z,y
z=H.E(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
n7:function(a){return init.types[H.ai(a)]},
nf:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.N(a).$isaU},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.as(a)
if(typeof z!=="string")throw H.e(H.ah(a))
return z},
bQ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jY:function(a,b){var z,y,x,w,v,u
if(typeof a!=="string")H.q(H.ah(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.E(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.a2(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.c.J(w,u)|32)>x)return}return parseInt(a,b)},
jX:function(a){var z,y
if(typeof a!=="string")H.q(H.ah(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.cW(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
bm:function(a){return H.jO(a)+H.dV(H.bc(a),0,null)},
jO:function(a){var z,y,x,w,v,u,t,s,r
z=J.N(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.Q||!!z.$iscF){u=C.C(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bD(w.length>1&&C.c.J(w,0)===36?C.c.aw(w,1):w)},
jP:function(){if(!!self.location)return self.location.href
return},
f0:function(a){var z,y,x,w,v
H.cj(a)
z=J.ar(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jZ:function(a){var z,y,x,w
z=H.d([],[P.o])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.ah(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aZ(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.e(H.ah(w))}return H.f0(z)},
f1:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.ah(x))
if(x<0)throw H.e(H.ah(x))
if(x>65535)return H.jZ(a)}return H.f0(a)},
k_:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cd:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aZ(z,10))>>>0,56320|z&1023)}}throw H.e(P.a2(a,0,1114111,null,null))},
bl:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jW:function(a){var z=H.bl(a).getFullYear()+0
return z},
jU:function(a){var z=H.bl(a).getMonth()+1
return z},
jQ:function(a){var z=H.bl(a).getDate()+0
return z},
jR:function(a){var z=H.bl(a).getHours()+0
return z},
jT:function(a){var z=H.bl(a).getMinutes()+0
return z},
jV:function(a){var z=H.bl(a).getSeconds()+0
return z},
jS:function(a){var z=H.bl(a).getMilliseconds()+0
return z},
n:function(a){throw H.e(H.ah(a))},
f:function(a,b){if(a==null)J.ar(a)
throw H.e(H.b3(a,b))},
b3:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.b4(!0,b,"index",null)
z=H.ai(J.ar(a))
if(!(b<0)){if(typeof z!=="number")return H.n(z)
y=b>=z}else y=!0
if(y)return P.bI(b,a,"index",null,z)
return P.cy(b,"index",null)},
n1:function(a,b,c){if(a>c)return new P.cx(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cx(a,c,!0,b,"end","Invalid value")
return new P.b4(!0,b,"end",null)},
ah:function(a){return new P.b4(!0,a,null,null)},
by:function(a){if(typeof a!=="number")throw H.e(H.ah(a))
return a},
e:function(a){var z
if(a==null)a=new P.dl()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hG})
z.name=""}else z.toString=H.hG
return z},
hG:function(){return J.as(this.dartException)},
q:function(a){throw H.e(a)},
A:function(a){throw H.e(P.bf(a))},
a9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nY(a)
if(a==null)return
if(a instanceof H.d9)return z.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aZ(x,16)&8191)===10)switch(w){case 438:return z.$1(H.de(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eW(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fo()
u=$.$get$fp()
t=$.$get$fq()
s=$.$get$fr()
r=$.$get$fv()
q=$.$get$fw()
p=$.$get$ft()
$.$get$fs()
o=$.$get$fy()
n=$.$get$fx()
m=v.am(y)
if(m!=null)return z.$1(H.de(H.E(y),m))
else{m=u.am(y)
if(m!=null){m.method="call"
return z.$1(H.de(H.E(y),m))}else{m=t.am(y)
if(m==null){m=s.am(y)
if(m==null){m=r.am(y)
if(m==null){m=q.am(y)
if(m==null){m=p.am(y)
if(m==null){m=s.am(y)
if(m==null){m=o.am(y)
if(m==null){m=n.am(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eW(H.E(y),m))}}return z.$1(new H.kS(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.fb()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.b4(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.fb()
return a},
bd:function(a){var z
if(a instanceof H.d9)return a.b
if(a==null)return new H.h3(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h3(a)},
n5:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.q(0,a[y],a[x])}return b},
ne:function(a,b,c,d,e,f){H.c(a,"$isda")
switch(H.ai(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.p("Unsupported number of arguments for wrapped closure"))},
bz:function(a,b){var z
H.ai(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ne)
a.$identity=z
return z},
i_:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.N(d).$isa){z.$reflectionInfo=d
x=H.k4(z).r}else x=d
w=e?Object.create(new H.ko().constructor.prototype):Object.create(new H.cZ(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aO
if(typeof u!=="number")return u.l()
$.aO=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.eh(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.n7,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.eb:H.d_
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
hX:function(a,b,c,d){var z=H.d_
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
eh:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hZ(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hX(y,!w,z,b)
if(y===0){w=$.aO
if(typeof w!=="number")return w.l()
$.aO=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bE
if(v==null){v=H.cn("self")
$.bE=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aO
if(typeof w!=="number")return w.l()
$.aO=w+1
t+=w
w="return function("+t+"){return this."
v=$.bE
if(v==null){v=H.cn("self")
$.bE=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hY:function(a,b,c,d){var z,y
z=H.d_
y=H.eb
switch(b?-1:a){case 0:throw H.e(H.kc("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hZ:function(a,b){var z,y,x,w,v,u,t,s
z=$.bE
if(z==null){z=H.cn("self")
$.bE=z}y=$.ea
if(y==null){y=H.cn("receiver")
$.ea=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hY(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aO
if(typeof y!=="number")return y.l()
$.aO=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aO
if(typeof y!=="number")return y.l()
$.aO=y+1
return new Function(z+y+"}")()},
dY:function(a,b,c,d,e,f,g){return H.i_(a,b,H.ai(c),d,!!e,!!f,g)},
E:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aK(a,"String"))},
n2:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aK(a,"double"))},
nS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aK(a,"num"))},
hs:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aK(a,"bool"))},
ai:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aK(a,"int"))},
e2:function(a,b){throw H.e(H.aK(a,H.bD(H.E(b).substring(3))))},
nU:function(a,b){throw H.e(H.hU(a,H.bD(H.E(b).substring(3))))},
c:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.N(a)[b])return a
H.e2(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else z=!0
if(z)return a
H.nU(a,b)},
ox:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.N(a)[b])return a
H.e2(a,b)},
cj:function(a){if(a==null)return a
if(!!J.N(a).$isa)return a
throw H.e(H.aK(a,"List<dynamic>"))},
hA:function(a,b){var z
if(a==null)return a
z=J.N(a)
if(!!z.$isa)return a
if(z[b])return a
H.e2(a,b)},
ht:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.ai(z)]
else return a.$S()}return},
ch:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.ht(J.N(a))
if(z==null)return!1
return H.hf(z,null,b,null)},
i:function(a,b){var z,y
if(a==null)return a
if($.dS)return a
$.dS=!0
try{if(H.ch(a,b))return a
z=H.cR(b)
y=H.aK(a,z)
throw H.e(y)}finally{$.dS=!1}},
bB:function(a,b){if(a!=null&&!H.dX(a,b))H.q(H.aK(a,H.cR(b)))
return a},
hn:function(a){var z,y
z=J.N(a)
if(!!z.$ish){y=H.ht(z)
if(y!=null)return H.cR(y)
return"Closure"}return H.bm(a)},
nX:function(a){throw H.e(new P.i7(H.E(a)))},
hw:function(a){return init.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bc:function(a){if(a==null)return
return a.$ti},
ow:function(a,b,c){return H.bC(a["$as"+H.l(c)],H.bc(b))},
c_:function(a,b,c,d){var z
H.E(c)
H.ai(d)
z=H.bC(a["$as"+H.l(c)],H.bc(b))
return z==null?null:z[d]},
aG:function(a,b,c){var z
H.E(b)
H.ai(c)
z=H.bC(a["$as"+H.l(b)],H.bc(a))
return z==null?null:z[c]},
r:function(a,b){var z
H.ai(b)
z=H.bc(a)
return z==null?null:z[b]},
cR:function(a){return H.ba(a,null)},
ba:function(a,b){var z,y
H.j(b,"$isa",[P.m],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bD(a[0].builtin$cls)+H.dV(a,1,b)
if(typeof a=="function")return H.bD(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ai(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.l(b[y])}if('func' in a)return H.mL(a,b)
if('futureOr' in a)return"FutureOr<"+H.ba("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.m]
H.j(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.d([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.c.l(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.ba(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.ba(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.ba(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.ba(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.n4(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.E(z[l])
n=n+m+H.ba(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dV:function(a,b,c){var z,y,x,w,v,u
H.j(c,"$isa",[P.m],"$asa")
if(a==null)return""
z=new P.aB("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ba(u,c)}return"<"+z.i(0)+">"},
bC:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b2:function(a,b,c,d){var z,y
H.E(b)
H.cj(c)
H.E(d)
if(a==null)return!1
z=H.bc(a)
y=J.N(a)
if(y[b]==null)return!1
return H.hq(H.bC(y[d],z),null,c,null)},
j:function(a,b,c,d){H.E(b)
H.cj(c)
H.E(d)
if(a==null)return a
if(H.b2(a,b,c,d))return a
throw H.e(H.aK(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bD(b.substring(3))+H.dV(c,0,null),init.mangledGlobalNames)))},
hq:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aF(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aF(a[y],b,c[y],d))return!1
return!0},
ou:function(a,b,c){return a.apply(b,H.bC(J.N(b)["$as"+H.l(c)],H.bc(b)))},
hz:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="w"||a===-1||a===-2||H.hz(z)}return!1},
dX:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="w"||b===-1||b===-2||H.hz(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dX(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ch(a,b)}z=J.N(a).constructor
y=H.bc(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.aF(z,null,b,null)},
v:function(a,b){if(a!=null&&!H.dX(a,b))throw H.e(H.aK(a,H.cR(b)))
return a},
aF:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aF(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="w")return!0
if('func' in c)return H.hf(a,b,c,d)
if('func' in a)return c.builtin$cls==="da"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aF("type" in a?a.type:null,b,x,d)
else if(H.aF(a,b,x,d))return!0
else{if(!('$is'+"ab" in y.prototype))return!1
w=y.prototype["$as"+"ab"]
v=H.bC(w,z?a.slice(1):null)
return H.aF(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hq(H.bC(r,z),b,u,d)},
hf:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aF(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aF(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aF(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aF(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.nR(m,b,l,d)},
nR:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aF(c[w],d,a[w],b))return!1}return!0},
ov:function(a,b,c){Object.defineProperty(a,H.E(b),{value:c,enumerable:false,writable:true,configurable:true})},
ng:function(a){var z,y,x,w,v,u
z=H.E($.hy.$1(a))
y=$.cN[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cP[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.E($.hp.$2(a,z))
if(z!=null){y=$.cN[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cP[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cQ(x)
$.cN[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cP[z]=x
return x}if(v==="-"){u=H.cQ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hC(a,x)
if(v==="*")throw H.e(P.cE(z))
if(init.leafTags[z]===true){u=H.cQ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hC(a,x)},
hC:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.e0(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cQ:function(a){return J.e0(a,!1,null,!!a.$isaU)},
nQ:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cQ(z)
else return J.e0(z,c,null,null)},
nc:function(){if(!0===$.e_)return
$.e_=!0
H.nd()},
nd:function(){var z,y,x,w,v,u,t,s
$.cN=Object.create(null)
$.cP=Object.create(null)
H.n8()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hD.$1(v)
if(u!=null){t=H.nQ(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
n8:function(){var z,y,x,w,v,u,t
z=C.V()
z=H.bx(C.S,H.bx(C.X,H.bx(C.B,H.bx(C.B,H.bx(C.W,H.bx(C.T,H.bx(C.U(C.C),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hy=new H.n9(v)
$.hp=new H.na(u)
$.hD=new H.nb(t)},
bx:function(a,b){return a(b)||b},
hE:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hF:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i3:{"^":"b;$ti",
i:function(a){return P.df(this)},
q:function(a,b,c){H.v(b,H.r(this,0))
H.v(c,H.r(this,1))
return H.i4()},
$isB:1},
i5:{"^":"i3;a,b,c,$ti",
gm:function(a){return this.a},
bV:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j:function(a,b){if(!this.bV(b))return
return this.dY(b)},
dY:function(a){return this.b[H.E(a)]},
D:function(a,b){var z,y,x,w,v
z=H.r(this,1)
H.i(b,{func:1,ret:-1,args:[H.r(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.v(this.dY(v),z))}}},
k3:{"^":"b;a,b,c,d,e,f,r,0x",p:{
k4:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cu(z)
y=z[0]
x=z[1]
return new H.k3(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kG:{"^":"b;a,b,c,d,e,f",
am:function(a){var z,y,x
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
aS:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.d([],[P.m])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kG(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cD:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fu:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jJ:{"^":"ae;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
eW:function(a,b){return new H.jJ(a,b==null?null:b.method)}}},
ja:{"^":"ae;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
de:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ja(a,y,z?null:b.receiver)}}},
kS:{"^":"ae;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
d9:{"^":"b;a,b"},
nY:{"^":"h:19;a",
$1:function(a){if(!!J.N(a).$isae)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h3:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isam:1},
h:{"^":"b;",
i:function(a){return"Closure '"+H.bm(this).trim()+"'"},
gfA:function(){return this},
$isda:1,
gfA:function(){return this}},
fe:{"^":"h;"},
ko:{"^":"fe;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bD(z)+"'"}},
cZ:{"^":"fe;a,b,c,d",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cZ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga_:function(a){var z,y
z=this.c
if(z==null)y=H.bQ(this.a)
else y=typeof z!=="object"?J.c0(z):H.bQ(z)
return(y^H.bQ(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bm(z)+"'")},
p:{
d_:function(a){return a.a},
eb:function(a){return a.c},
cn:function(a){var z,y,x,w,v
z=new H.cZ("self","target","receiver","name")
y=J.cu(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kH:{"^":"ae;a",
i:function(a){return this.a},
p:{
aK:function(a,b){return new H.kH("TypeError: "+H.l(P.cq(a))+": type '"+H.hn(a)+"' is not a subtype of type '"+b+"'")}}},
hT:{"^":"ae;a",
i:function(a){return this.a},
p:{
hU:function(a,b){return new H.hT("CastError: "+H.l(P.cq(a))+": type '"+H.hn(a)+"' is not a subtype of type '"+b+"'")}}},
kb:{"^":"ae;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
kc:function(a){return new H.kb(a)}}},
aH:{"^":"jq;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gdf:function(){return new H.jf(this,[H.r(this,0)])},
bV:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dU(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dU(y,a)}else return this.kn(a)},
kn:function(a){var z=this.d
if(z==null)return!1
return this.de(this.cB(z,this.dd(a)),a)>=0},
jH:function(a,b){H.j(b,"$isB",this.$ti,"$asB").D(0,new H.j9(this))},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bI(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bI(w,b)
x=y==null?null:y.b
return x}else return this.ko(b)},
ko:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cB(z,this.dd(a))
x=this.de(y,a)
if(x<0)return
return y[x].b},
q:function(a,b,c){var z,y
H.v(b,H.r(this,0))
H.v(c,H.r(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cH()
this.b=z}this.dM(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cH()
this.c=y}this.dM(y,b,c)}else this.kp(b,c)},
kp:function(a,b){var z,y,x,w
H.v(a,H.r(this,0))
H.v(b,H.r(this,1))
z=this.d
if(z==null){z=this.cH()
this.d=z}y=this.dd(a)
x=this.cB(z,y)
if(x==null)this.cQ(z,y,[this.cI(a,b)])
else{w=this.de(x,a)
if(w>=0)x[w].b=b
else x.push(this.cI(a,b))}},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.bf(this))
z=z.c}},
dM:function(a,b,c){var z
H.v(b,H.r(this,0))
H.v(c,H.r(this,1))
z=this.bI(a,b)
if(z==null)this.cQ(a,b,this.cI(b,c))
else z.b=c},
cI:function(a,b){var z,y
z=new H.je(H.v(a,H.r(this,0)),H.v(b,H.r(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
dd:function(a){return J.c0(a)&0x3ffffff},
de:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
i:function(a){return P.df(this)},
bI:function(a,b){return a[b]},
cB:function(a,b){return a[b]},
cQ:function(a,b,c){a[b]=c},
hy:function(a,b){delete a[b]},
dU:function(a,b){return this.bI(a,b)!=null},
cH:function(){var z=Object.create(null)
this.cQ(z,"<non-identifier-key>",z)
this.hy(z,"<non-identifier-key>")
return z},
$iseJ:1},
j9:{"^":"h;a",
$2:function(a,b){var z=this.a
z.q(0,H.v(a,H.r(z,0)),H.v(b,H.r(z,1)))},
$S:function(){var z=this.a
return{func:1,ret:P.w,args:[H.r(z,0),H.r(z,1)]}}},
je:{"^":"b;a,b,0c,0d"},
jf:{"^":"ig;a,$ti",
gm:function(a){return this.a.a},
ga5:function(a){var z,y
z=this.a
y=new H.jg(z,z.r,this.$ti)
y.c=z.e
return y}},
jg:{"^":"b;a,b,0c,0d,$ti",
sdK:function(a){this.d=H.v(a,H.r(this,0))},
gU:function(){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.bf(z))
else{z=this.c
if(z==null){this.sdK(null)
return!1}else{this.sdK(z.a)
this.c=this.c.c
return!0}}},
$isaP:1},
n9:{"^":"h:19;a",
$1:function(a){return this.a(a)}},
na:{"^":"h:54;a",
$2:function(a,b){return this.a(a,b)}},
nb:{"^":"h:47;a",
$1:function(a){return this.a(H.E(a))}},
j8:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
gi4:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.eG(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
ki:function(a){var z=this.b.exec(a)
if(z==null)return
return new H.fZ(this,z)},
hD:function(a,b){var z,y
z=this.gi4()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.fZ(this,y)},
$iseX:1,
$isk5:1,
p:{
eG:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.e(P.T("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
fZ:{"^":"b;a,b",
j:function(a,b){return C.a.j(this.b,b)},
$iseN:1},
lo:{"^":"b;a,b,c,0d",
gU:function(){return this.d},
I:function(){var z,y,x,w
z=this.b
if(z==null)return!1
y=this.c
if(y<=z.length){x=this.a.hD(z,y)
if(x!=null){this.d=x
z=x.b
y=z.index
w=y+z[0].length
this.c=y===w?w+1:w
return!0}}this.d=null
this.b=null
return!1},
$isaP:1,
$asaP:function(){return[P.eN]}}}],["","",,H,{"^":"",
n4:function(a){return J.eB(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nT:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bu:function(a){return a},
jG:function(a){return new Int8Array(a)},
b0:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.b3(b,a))},
mF:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.e(H.n1(a,b,c))
return b},
dk:{"^":"L;",$isdk:1,$iskI:1,"%":";ArrayBufferView;dj|h_|h0|jH|h1|h2|bk"},
dj:{"^":"dk;",
gm:function(a){return a.length},
$isaU:1,
$asaU:I.dZ},
jH:{"^":"h0;",
j:function(a,b){H.b0(b,a,a.length)
return a[b]},
q:function(a,b,c){H.n2(c)
H.b0(b,a,a.length)
a[b]=c},
$ascr:function(){return[P.y]},
$asX:function(){return[P.y]},
$isu:1,
$asu:function(){return[P.y]},
$isa:1,
$asa:function(){return[P.y]},
"%":"Float32Array"},
bk:{"^":"h2;",
q:function(a,b,c){H.ai(c)
H.b0(b,a,a.length)
a[b]=c},
$ascr:function(){return[P.o]},
$asX:function(){return[P.o]},
$isu:1,
$asu:function(){return[P.o]},
$isa:1,
$asa:function(){return[P.o]}},
oa:{"^":"bk;",
j:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ob:{"^":"bk;",
j:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oc:{"^":"bk;",
j:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"Int8Array"},
od:{"^":"bk;",
j:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oe:{"^":"bk;",
gm:function(a){return a.length},
j:function(a,b){H.b0(b,a,a.length)
return a[b]},
$isol:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
eV:{"^":"bk;",
gm:function(a){return a.length},
j:function(a,b){H.b0(b,a,a.length)
return a[b]},
$iseV:1,
$isM:1,
"%":";Uint8Array"},
h_:{"^":"dj+X;"},
h0:{"^":"h_+cr;"},
h1:{"^":"dj+X;"},
h2:{"^":"h1+cr;"}}],["","",,P,{"^":"",
ls:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mV()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bz(new P.lu(z),1)).observe(y,{childList:true})
return new P.lt(z,y,x)}else if(self.setImmediate!=null)return P.mW()
return P.mX()},
oo:[function(a){self.scheduleImmediate(H.bz(new P.lv(H.i(a,{func:1,ret:-1})),0))},"$1","mV",4,0,13],
op:[function(a){self.setImmediate(H.bz(new P.lw(H.i(a,{func:1,ret:-1})),0))},"$1","mW",4,0,13],
oq:[function(a){P.dx(C.v,H.i(a,{func:1,ret:-1}))},"$1","mX",4,0,13],
dx:function(a,b){var z
H.i(b,{func:1,ret:-1})
z=C.e.a9(a.a,1000)
return P.m8(z<0?0:z,b)},
fl:function(a,b){var z
H.i(b,{func:1,ret:-1,args:[P.bn]})
z=C.e.a9(a.a,1000)
return P.m9(z<0?0:z,b)},
a7:function(a){return new P.fQ(new P.m7(new P.aq(0,$.I,[a]),[a]),!1,[a])},
a6:function(a,b){H.i(a,{func:1,ret:-1,args:[P.o,,]})
H.c(b,"$isfQ")
a.$2(0,null)
b.b=!0
return b.a.a},
ag:function(a,b){P.mC(a,H.i(b,{func:1,ret:-1,args:[P.o,,]}))},
a5:function(a,b){H.c(b,"$isd7").aJ(0,a)},
a4:function(a,b){H.c(b,"$isd7").bm(H.a9(a),H.bd(a))},
mC:function(a,b){var z,y,x,w,v
H.i(b,{func:1,ret:-1,args:[P.o,,]})
z=new P.mD(b)
y=new P.mE(b)
x=J.N(a)
if(!!x.$isaq)a.cS(H.i(z,{func:1,ret:{futureOr:1},args:[,]}),y,null)
else{w={func:1,ret:{futureOr:1},args:[,]}
if(!!x.$isab)a.ce(H.i(z,w),y,null)
else{v=new P.aq(0,$.I,[null])
H.v(a,null)
v.a=4
v.c=a
v.cS(H.i(z,w),null,null)}}},
a8:function(a){var z=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(y){e=y
d=c}}}(a,1)
return $.I.fk(new P.mU(z),P.w,P.o,null)},
mQ:function(a,b){if(H.ch(a,{func:1,args:[P.b,P.am]}))return b.fk(a,null,P.b,P.am)
if(H.ch(a,{func:1,args:[P.b]}))return H.i(a,{func:1,ret:null,args:[P.b]})
throw H.e(P.cX(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mN:function(){var z,y
for(;z=$.bv,z!=null;){$.bX=null
y=z.b
$.bv=y
if(y==null)$.bW=null
z.a.$0()}},
ot:[function(){$.dT=!0
try{P.mN()}finally{$.bX=null
$.dT=!1
if($.bv!=null)$.$get$dO().$1(P.hr())}},"$0","hr",0,0,7],
hk:function(a){var z=new P.fR(H.i(a,{func:1,ret:-1}))
if($.bv==null){$.bW=z
$.bv=z
if(!$.dT)$.$get$dO().$1(P.hr())}else{$.bW.b=z
$.bW=z}},
mT:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
z=$.bv
if(z==null){P.hk(a)
$.bX=$.bW
return}y=new P.fR(a)
x=$.bX
if(x==null){y.b=z
$.bX=y
$.bv=y}else{y.b=x.b
x.b=y
$.bX=y
if(y.b==null)$.bW=y}},
e3:function(a){var z,y
z={func:1,ret:-1}
H.i(a,z)
y=$.I
if(C.k===y){P.bw(null,null,C.k,a)
return}y.toString
P.bw(null,null,y,H.i(y.cX(a),z))},
oh:function(a,b){return new P.m4(H.j(a,"$isdu",[b],"$asdu"),!1,[b])},
fk:function(a,b){var z,y
z={func:1,ret:-1}
H.i(b,z)
y=$.I
if(y===C.k){y.toString
return P.dx(a,b)}return P.dx(a,H.i(y.cX(b),z))},
kD:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bn]}
H.i(b,z)
y=$.I
if(y===C.k){y.toString
return P.fl(a,b)}x=y.er(b,P.bn)
$.I.toString
return P.fl(a,H.i(x,z))},
cL:function(a,b,c,d,e){var z={}
z.a=d
P.mT(new P.mR(z,e))},
hg:function(a,b,c,d,e){var z,y
H.i(d,{func:1,ret:e})
y=$.I
if(y===c)return d.$0()
$.I=c
z=y
try{y=d.$0()
return y}finally{$.I=z}},
hh:function(a,b,c,d,e,f,g){var z,y
H.i(d,{func:1,ret:f,args:[g]})
H.v(e,g)
y=$.I
if(y===c)return d.$1(e)
$.I=c
z=y
try{y=d.$1(e)
return y}finally{$.I=z}},
mS:function(a,b,c,d,e,f,g,h,i){var z,y
H.i(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
y=$.I
if(y===c)return d.$2(e,f)
$.I=c
z=y
try{y=d.$2(e,f)
return y}finally{$.I=z}},
bw:function(a,b,c,d){var z
H.i(d,{func:1,ret:-1})
z=C.k!==c
if(z)d=!(!z||!1)?c.cX(d):c.jN(d,-1)
P.hk(d)},
lu:{"^":"h:17;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
lt:{"^":"h:44;a,b,c",
$1:function(a){var z,y
this.a.a=H.i(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lv:{"^":"h:0;a",
$0:function(){this.a.$0()}},
lw:{"^":"h:0;a",
$0:function(){this.a.$0()}},
h5:{"^":"b;a,0b,c",
ha:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bz(new P.mb(this,b),0),a)
else throw H.e(P.Z("`setTimeout()` not found."))},
hb:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bz(new P.ma(this,a,Date.now(),b),0),a)
else throw H.e(P.Z("Periodic timer."))},
$isbn:1,
p:{
m8:function(a,b){var z=new P.h5(!0,0)
z.ha(a,b)
return z},
m9:function(a,b){var z=new P.h5(!1,0)
z.hb(a,b)
return z}}},
mb:{"^":"h:7;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ma:{"^":"h:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.fT(w,x)}z.c=y
this.d.$1(z)}},
fQ:{"^":"b;a,b,$ti",
aJ:function(a,b){var z
H.bB(b,{futureOr:1,type:H.r(this,0)})
if(this.b)this.a.aJ(0,b)
else if(H.b2(b,"$isab",this.$ti,"$asab")){z=this.a
b.ce(z.gjT(z),z.gex(),-1)}else P.e3(new P.lq(this,b))},
bm:function(a,b){if(this.b)this.a.bm(a,b)
else P.e3(new P.lp(this,a,b))},
$isd7:1},
lq:{"^":"h:0;a,b",
$0:function(){this.a.a.aJ(0,this.b)}},
lp:{"^":"h:0;a,b,c",
$0:function(){this.a.a.bm(this.b,this.c)}},
mD:{"^":"h:33;a",
$1:function(a){return this.a.$2(0,a)}},
mE:{"^":"h:34;a",
$2:function(a,b){this.a.$2(1,new H.d9(a,H.c(b,"$isam")))}},
mU:{"^":"h:35;a",
$2:function(a,b){this.a(H.ai(a),b)}},
ab:{"^":"b;$ti"},
fT:{"^":"b;$ti",
bm:[function(a,b){H.c(b,"$isam")
if(a==null)a=new P.dl()
if(this.a.a!==0)throw H.e(P.dt("Future already completed"))
$.I.toString
this.aC(a,b)},function(a){return this.bm(a,null)},"jU","$2","$1","gex",4,2,38],
$isd7:1},
lr:{"^":"fT;a,$ti",
aJ:function(a,b){var z
H.bB(b,{futureOr:1,type:H.r(this,0)})
z=this.a
if(z.a!==0)throw H.e(P.dt("Future already completed"))
z.hf(b)},
aC:function(a,b){this.a.hg(a,b)}},
m7:{"^":"fT;a,$ti",
aJ:[function(a,b){var z
H.bB(b,{futureOr:1,type:H.r(this,0)})
z=this.a
if(z.a!==0)throw H.e(P.dt("Future already completed"))
z.cv(b)},function(a){return this.aJ(a,null)},"m3","$1","$0","gjT",1,2,39],
aC:function(a,b){this.a.aC(a,b)}},
bs:{"^":"b;0a,b,c,d,e,$ti",
kx:function(a){if(this.c!==6)return!0
return this.b.b.dr(H.i(this.d,{func:1,ret:P.D,args:[P.b]}),a.a,P.D,P.b)},
km:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.r(this,1)}
w=this.b.b
if(H.ch(z,{func:1,args:[P.b,P.am]}))return H.bB(w.l1(z,a.a,a.b,null,y,P.am),x)
else return H.bB(w.dr(H.i(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aq:{"^":"b;eh:a<,b,0iQ:c<,$ti",
ce:function(a,b,c){var z,y
z=H.r(this,0)
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.I
if(y!==C.k){y.toString
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mQ(b,y)}return this.cS(a,b,c)},
fn:function(a,b){return this.ce(a,null,b)},
cS:function(a,b,c){var z,y,x
z=H.r(this,0)
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=new P.aq(0,$.I,[c])
x=b==null?1:3
this.dN(new P.bs(y,x,a,b,[z,c]))
return y},
dN:function(a){var z,y
z=this.a
if(z<=1){a.a=H.c(this.c,"$isbs")
this.c=a}else{if(z===2){y=H.c(this.c,"$isaq")
z=y.a
if(z<4){y.dN(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bw(null,null,z,H.i(new P.lE(this,a),{func:1,ret:-1}))}},
e9:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.c(this.c,"$isbs")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.c(this.c,"$isaq")
y=u.a
if(y<4){u.e9(a)
return}this.a=y
this.c=u.c}z.a=this.bO(a)
y=this.b
y.toString
P.bw(null,null,y,H.i(new P.lL(z,this),{func:1,ret:-1}))}},
bN:function(){var z=H.c(this.c,"$isbs")
this.c=null
return this.bO(z)},
bO:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cv:function(a){var z,y,x
z=H.r(this,0)
H.bB(a,{futureOr:1,type:z})
y=this.$ti
if(H.b2(a,"$isab",y,"$asab"))if(H.b2(a,"$isaq",y,null))P.cG(a,this)
else P.fV(a,this)
else{x=this.bN()
H.v(a,z)
this.a=4
this.c=a
P.bt(this,x)}},
aC:function(a,b){var z
H.c(b,"$isam")
z=this.bN()
this.a=8
this.c=new P.ax(a,b)
P.bt(this,z)},
hf:function(a){var z
H.bB(a,{futureOr:1,type:H.r(this,0)})
if(H.b2(a,"$isab",this.$ti,"$asab")){this.hq(a)
return}this.a=1
z=this.b
z.toString
P.bw(null,null,z,H.i(new P.lG(this,a),{func:1,ret:-1}))},
hq:function(a){var z=this.$ti
H.j(a,"$isab",z,"$asab")
if(H.b2(a,"$isaq",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.bw(null,null,z,H.i(new P.lK(this,a),{func:1,ret:-1}))}else P.cG(a,this)
return}P.fV(a,this)},
hg:function(a,b){var z
this.a=1
z=this.b
z.toString
P.bw(null,null,z,H.i(new P.lF(this,a,b),{func:1,ret:-1}))},
$isab:1,
p:{
fV:function(a,b){var z,y,x
b.a=1
try{a.ce(new P.lH(b),new P.lI(b),null)}catch(x){z=H.a9(x)
y=H.bd(x)
P.e3(new P.lJ(b,z,y))}},
cG:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.c(a.c,"$isaq")
if(z>=4){y=b.bN()
b.a=a.a
b.c=a.c
P.bt(b,y)}else{y=H.c(b.c,"$isbs")
b.a=2
b.c=a
a.e9(y)}},
bt:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.c(y.c,"$isax")
y=y.b
u=v.a
t=v.b
y.toString
P.cL(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bt(z.a,b)}y=z.a
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
if(p){H.c(r,"$isax")
y=y.b
u=r.a
t=r.b
y.toString
P.cL(null,null,y,u,t)
return}o=$.I
if(o==null?q!=null:o!==q)$.I=q
else o=null
y=b.c
if(y===8)new P.lO(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lN(x,b,r).$0()}else if((y&2)!==0)new P.lM(z,x,b).$0()
if(o!=null)$.I=o
y=x.b
if(!!J.N(y).$isab){if(y.a>=4){n=H.c(t.c,"$isbs")
t.c=null
b=t.bO(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.cG(y,t)
return}}m=b.b
n=H.c(m.c,"$isbs")
m.c=null
b=m.bO(n)
y=x.a
u=x.b
if(!y){H.v(u,H.r(m,0))
m.a=4
m.c=u}else{H.c(u,"$isax")
m.a=8
m.c=u}z.a=m
y=m}}}},
lE:{"^":"h:0;a,b",
$0:function(){P.bt(this.a,this.b)}},
lL:{"^":"h:0;a,b",
$0:function(){P.bt(this.b,this.a.a)}},
lH:{"^":"h:17;a",
$1:function(a){var z=this.a
z.a=0
z.cv(a)}},
lI:{"^":"h:40;a",
$2:function(a,b){this.a.aC(a,H.c(b,"$isam"))},
$1:function(a){return this.$2(a,null)}},
lJ:{"^":"h:0;a,b,c",
$0:function(){this.a.aC(this.b,this.c)}},
lG:{"^":"h:0;a,b",
$0:function(){var z,y,x
z=this.a
y=H.v(this.b,H.r(z,0))
x=z.bN()
z.a=4
z.c=y
P.bt(z,x)}},
lK:{"^":"h:0;a,b",
$0:function(){P.cG(this.b,this.a)}},
lF:{"^":"h:0;a,b,c",
$0:function(){this.a.aC(this.b,this.c)}},
lO:{"^":"h:7;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.fm(H.i(w.d,{func:1}),null)}catch(v){y=H.a9(v)
x=H.bd(v)
if(this.d){w=H.c(this.a.a.c,"$isax").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.c(this.a.a.c,"$isax")
else u.b=new P.ax(y,x)
u.a=!0
return}if(!!J.N(z).$isab){if(z instanceof P.aq&&z.geh()>=4){if(z.geh()===8){w=this.b
w.b=H.c(z.giQ(),"$isax")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.fn(new P.lP(t),null)
w.a=!1}}},
lP:{"^":"h:42;a",
$1:function(a){return this.a}},
lN:{"^":"h:7;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.r(x,0)
v=H.v(this.c,w)
u=H.r(x,1)
this.a.b=x.b.b.dr(H.i(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a9(t)
y=H.bd(t)
x=this.a
x.b=new P.ax(z,y)
x.a=!0}}},
lM:{"^":"h:7;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.c(this.a.a.c,"$isax")
w=this.c
if(w.kx(z)&&w.e!=null){v=this.b
v.b=w.km(z)
v.a=!1}}catch(u){y=H.a9(u)
x=H.bd(u)
w=H.c(this.a.a.c,"$isax")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ax(y,x)
s.a=!0}}},
fR:{"^":"b;a,0b"},
du:{"^":"b;$ti",
gm:function(a){var z,y,x,w
z={}
y=new P.aq(0,$.I,[P.o])
z.a=0
x=H.r(this,0)
w=H.i(new P.kq(z,this),{func:1,ret:-1,args:[x]})
H.i(new P.kr(z,y),{func:1,ret:-1})
W.V(this.a,this.b,w,!1,x)
return y}},
kq:{"^":"h;a,b",
$1:function(a){H.v(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.w,args:[H.r(this.b,0)]}}},
kr:{"^":"h:0;a,b",
$0:function(){this.b.cv(this.a.a)}},
dv:{"^":"b;$ti"},
kp:{"^":"b;"},
m4:{"^":"b;0a,b,c,$ti"},
bn:{"^":"b;"},
ax:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isae:1},
mB:{"^":"b;",$ison:1},
mR:{"^":"h:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dl()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
m_:{"^":"mB;",
l2:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
try{if(C.k===$.I){a.$0()
return}P.hg(null,null,this,a,-1)}catch(x){z=H.a9(x)
y=H.bd(x)
P.cL(null,null,this,z,H.c(y,"$isam"))}},
l3:function(a,b,c){var z,y,x
H.i(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.k===$.I){a.$1(b)
return}P.hh(null,null,this,a,b,-1,c)}catch(x){z=H.a9(x)
y=H.bd(x)
P.cL(null,null,this,z,H.c(y,"$isam"))}},
jN:function(a,b){return new P.m1(this,H.i(a,{func:1,ret:b}),b)},
cX:function(a){return new P.m0(this,H.i(a,{func:1,ret:-1}))},
er:function(a,b){return new P.m2(this,H.i(a,{func:1,ret:-1,args:[b]}),b)},
j:function(a,b){return},
fm:function(a,b){H.i(a,{func:1,ret:b})
if($.I===C.k)return a.$0()
return P.hg(null,null,this,a,b)},
dr:function(a,b,c,d){H.i(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.I===C.k)return a.$1(b)
return P.hh(null,null,this,a,b,c,d)},
l1:function(a,b,c,d,e,f){H.i(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.I===C.k)return a.$2(b,c)
return P.mS(null,null,this,a,b,c,d,e,f)},
fk:function(a,b,c,d){return H.i(a,{func:1,ret:b,args:[c,d]})}},
m1:{"^":"h;a,b,c",
$0:function(){return this.a.fm(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
m0:{"^":"h:7;a,b",
$0:function(){return this.a.l2(this.b)}},
m2:{"^":"h;a,b,c",
$1:function(a){var z=this.c
return this.a.l3(this.b,H.v(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
jh:function(a,b,c,d,e){return new H.aH(0,0,[d,e])},
jj:function(a,b,c){H.cj(a)
return H.j(H.n5(a,new H.aH(0,0,[b,c])),"$iseJ",[b,c],"$aseJ")},
ji:function(a,b){return new H.aH(0,0,[a,b])},
jl:function(a,b,c,d){return new P.lU(0,0,[d])},
j1:function(a,b,c){var z,y
if(P.dU(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bY()
C.a.h(y,a)
try{P.mM(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.fc(b,H.hA(z,"$isu"),", ")+c
return y.charCodeAt(0)==0?y:y},
db:function(a,b,c){var z,y,x
if(P.dU(a))return b+"..."+c
z=new P.aB(b)
y=$.$get$bY()
C.a.h(y,a)
try{x=z
x.a=P.fc(x.gaT(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaT()+c
y=z.gaT()
return y.charCodeAt(0)==0?y:y},
dU:function(a){var z,y
for(z=0;y=$.$get$bY(),z<y.length;++z)if(a===y[z])return!0
return!1},
mM:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga5(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.I())return
w=H.l(z.gU())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.I()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gU();++x
if(!z.I()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gU();++x
for(;z.I();t=s,s=r){r=z.gU();++x
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
eK:function(a,b,c){var z=P.jh(null,null,null,b,c)
a.D(0,new P.jk(z,b,c))
return z},
df:function(a){var z,y,x
z={}
if(P.dU(a))return"{...}"
y=new P.aB("")
try{C.a.h($.$get$bY(),a)
x=y
x.a=x.gaT()+"{"
z.a=!0
a.D(0,new P.jr(z,y))
z=y
z.a=z.gaT()+"}"}finally{z=$.$get$bY()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaT()
return z.charCodeAt(0)==0?z:z},
lU:{"^":"lQ;a,0b,0c,0d,0e,0f,r,$ti",
ga5:function(a){return P.fX(this,this.r,H.r(this,0))},
gm:function(a){return this.a},
h:function(a,b){var z
H.v(b,H.r(this,0))
if(typeof b==="number"&&(b&0x3ffffff)===b){z=this.c
if(z==null){z=P.fY()
this.c=z}return this.ht(z,b)}else return this.hd(b)},
hd:function(a){var z,y,x
H.v(a,H.r(this,0))
z=this.d
if(z==null){z=P.fY()
this.d=z}y=this.dS(a)
x=z[y]
if(x==null)z[y]=[this.cu(a)]
else{if(this.dZ(x,a)>=0)return!1
x.push(this.cu(a))}return!0},
a3:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.iJ(this.c,b)
else return this.iI(b)},
iI:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.hN(z,a)
x=this.dZ(y,a)
if(x<0)return!1
this.ej(y.splice(x,1)[0])
return!0},
ht:function(a,b){H.v(b,H.r(this,0))
if(H.c(a[b],"$isdP")!=null)return!1
a[b]=this.cu(b)
return!0},
iJ:function(a,b){var z
if(a==null)return!1
z=H.c(a[b],"$isdP")
if(z==null)return!1
this.ej(z)
delete a[b]
return!0},
e4:function(){this.r=this.r+1&67108863},
cu:function(a){var z,y
z=new P.dP(H.v(a,H.r(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.e4()
return z},
ej:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.e4()},
dS:function(a){return J.c0(a)&0x3ffffff},
hN:function(a,b){return a[this.dS(b)]},
dZ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(a[y].a==b)return y
return-1},
p:{
fY:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dP:{"^":"b;a,0b,0c"},
lV:{"^":"b;a,b,0c,0d,$ti",
sdR:function(a){this.d=H.v(a,H.r(this,0))},
gU:function(){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.bf(z))
else{z=this.c
if(z==null){this.sdR(null)
return!1}else{this.sdR(H.v(z.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
$isaP:1,
p:{
fX:function(a,b,c){var z=new P.lV(a,b,[c])
z.c=a.e
return z}}},
lQ:{"^":"kd;"},
jk:{"^":"h:9;a,b,c",
$2:function(a,b){this.a.q(0,H.v(a,this.b),H.v(b,this.c))}},
cv:{"^":"lW;",$isu:1,$isa:1},
X:{"^":"b;$ti",
ga5:function(a){return new H.eL(a,this.gm(a),0,[H.c_(this,a,"X",0)])},
ak:function(a,b){return this.j(a,b)},
l8:function(a,b){var z,y
z=H.d([],[H.c_(this,a,"X",0)])
C.a.sm(z,this.gm(a))
for(y=0;y<this.gm(a);++y)C.a.q(z,y,this.j(a,y))
return z},
l7:function(a){return this.l8(a,!0)},
l:function(a,b){var z,y
z=[H.c_(this,a,"X",0)]
H.j(b,"$isa",z,"$asa")
y=H.d([],z)
C.a.sm(y,C.e.l(this.gm(a),b.gm(b)))
C.a.bG(y,0,this.gm(a),a)
C.a.bG(y,this.gm(a),y.length,b)
return y},
kf:function(a,b,c,d){var z
H.v(d,H.c_(this,a,"X",0))
P.aW(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.q(a,z,d)},
i:function(a){return P.db(a,"[","]")}},
jq:{"^":"js;"},
jr:{"^":"h:9;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
js:{"^":"b;$ti",
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
for(z=this.gdf(),z=z.ga5(z);z.I();){y=z.gU()
b.$2(y,this.j(0,y))}},
gm:function(a){var z=this.gdf()
return z.gm(z)},
i:function(a){return P.df(this)},
$isB:1},
me:{"^":"b;$ti",
q:function(a,b,c){H.v(b,H.r(this,0))
H.v(c,H.r(this,1))
throw H.e(P.Z("Cannot modify unmodifiable map"))}},
jt:{"^":"b;$ti",
j:function(a,b){return this.a.j(0,b)},
q:function(a,b,c){this.a.q(0,H.v(b,H.r(this,0)),H.v(c,H.r(this,1)))},
D:function(a,b){this.a.D(0,H.i(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gm:function(a){var z=this.a
return z.gm(z)},
i:function(a){return J.as(this.a)},
$isB:1},
fz:{"^":"mf;a,$ti"},
kf:{"^":"b;$ti",
i:function(a){return P.db(this,"{","}")},
ak:function(a,b){var z,y,x
if(b<0)H.q(P.a2(b,0,null,"index",null))
for(z=P.fX(this,this.r,H.r(this,0)),y=0;z.I();){x=z.d
if(b===y)return x;++y}throw H.e(P.bI(b,this,"index",null,y))},
$isu:1,
$isf9:1},
kd:{"^":"kf;"},
lW:{"^":"b+X;"},
mf:{"^":"jt+me;$ti"}}],["","",,P,{"^":"",hP:{"^":"c4;a",
ky:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.aW(b,c,a.length,null,null,null)
z=$.$get$fS()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.c.J(a,y)
if(r===37){q=s+2
if(q<=c){p=H.cO(C.c.J(a,s))
o=H.cO(C.c.J(a,s+1))
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
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aB("")
l=w.a+=C.c.u(a,x,y)
w.a=l+H.cd(r)
x=s
continue}}throw H.e(P.T("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.c.u(a,x,c)
k=l.length
if(v>=0)P.e9(a,u,c,v,t,k)
else{j=C.e.bD(k-1,4)+1
if(j===1)throw H.e(P.T("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.c.b9(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.e9(a,u,c,v,t,i)
else{j=C.e.bD(i,4)
if(j===1)throw H.e(P.T("Invalid base64 encoding length ",a,c))
if(j>1)a=C.c.b9(a,c,c,j===2?"==":"=")}return a},
$asc4:function(){return[[P.a,P.o],P.m]},
p:{
e9:function(a,b,c,d,e,f){if(C.e.bD(f,4)!==0)throw H.e(P.T("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.T("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.T("Invalid base64 padding, more than two '=' characters",a,b))}}},hQ:{"^":"bF;a",
$asbF:function(){return[[P.a,P.o],P.m]}},c4:{"^":"b;$ti"},bF:{"^":"kp;$ti"},ii:{"^":"c4;",
$asc4:function(){return[P.m,[P.a,P.o]]}},l5:{"^":"ii;a",
gkd:function(){return C.N}},lc:{"^":"bF;",
bn:function(a,b,c){var z,y,x,w
z=a.length
P.aW(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mA(0,0,x)
if(w.hM(a,b,z)!==z)w.em(J.hJ(a,z-1),0)
return new Uint8Array(x.subarray(0,H.mF(0,w.b,x.length)))},
d1:function(a){return this.bn(a,0,null)},
$asbF:function(){return[P.m,[P.a,P.o]]}},mA:{"^":"b;a,b,c",
em:function(a,b){var z,y,x,w,v
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
hM:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.Z(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.J(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.em(w,C.c.J(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},l6:{"^":"bF;a",
bn:function(a,b,c){var z,y,x,w,v
H.j(a,"$isa",[P.o],"$asa")
z=P.l7(!1,a,b,c)
if(z!=null)return z
y=J.ar(a)
P.aW(b,c,y,null,null,null)
x=new P.aB("")
w=new P.mx(!1,x,!0,0,0,0)
w.bn(a,b,y)
if(w.e>0){H.q(P.T("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.cd(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
d1:function(a){return this.bn(a,0,null)},
$asbF:function(){return[[P.a,P.o],P.m]},
p:{
l7:function(a,b,c,d){H.j(b,"$isa",[P.o],"$asa")
if(b instanceof Uint8Array)return P.l8(!1,b,c,d)
return},
l8:function(a,b,c,d){var z,y,x
z=$.$get$fD()
if(z==null)return
y=0===c
if(y&&!0)return P.dM(z,b)
x=b.length
d=P.aW(c,d,x,null,null,null)
if(y&&d===x)return P.dM(z,b)
return P.dM(z,b.subarray(c,d))},
dM:function(a,b){if(P.la(b))return
return P.lb(a,b)},
lb:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.a9(y)}return},
la:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
l9:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.a9(y)}return}}},mx:{"^":"b;a,b,c,d,e,f",
bn:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(a,"$isa",[P.o],"$asa")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mz(c)
v=new P.my(this,b,c,a)
$label0$0:for(u=J.bb(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.cj()
if((r&192)!==128){q=P.T("Bad UTF-8 encoding 0x"+C.e.bz(r,16),a,s)
throw H.e(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.D,q)
if(z<=C.D[q]){q=P.T("Overlong encoding of 0x"+C.e.bz(z,16),a,s-x-1)
throw H.e(q)}if(z>1114111){q=P.T("Character outside valid Unicode range: 0x"+C.e.bz(z,16),a,s-x-1)
throw H.e(q)}if(!this.c||z!==65279)t.a+=H.cd(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cn()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.F()
if(r<0){m=P.T("Negative UTF-8 code unit: -0x"+C.e.bz(-r,16),a,n-1)
throw H.e(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.T("Bad UTF-8 encoding 0x"+C.e.bz(r,16),a,n-1)
throw H.e(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mz:{"^":"h:45;a",
$2:function(a,b){var z,y,x,w
H.j(a,"$isa",[P.o],"$asa")
z=this.a
for(y=J.bb(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.cj()
if((w&127)!==w)return x-b}return z-b}},my:{"^":"h:46;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cf(this.d,a,b)}}}],["","",,P,{"^":"",
be:function(a,b,c){var z
H.E(a)
H.i(b,{func:1,ret:P.o,args:[P.m]})
z=H.jY(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.e(P.T(a,null,null))},
n3:function(a,b){var z=H.jX(a)
if(z!=null)return z
throw H.e(P.T("Invalid double",a,null))},
ik:function(a){if(a instanceof H.h)return a.i(0)
return"Instance of '"+H.bm(a)+"'"},
jm:function(a,b,c,d){var z,y
H.v(b,d)
z=J.j4(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.q(z,y,b)
return H.j(z,"$isa",[d],"$asa")},
jn:function(a,b,c){var z,y,x
z=[c]
y=H.d([],z)
for(x=a.ga5(a);x.I();)C.a.h(y,H.v(x.gU(),c))
if(b)return y
return H.j(J.cu(y),"$isa",z,"$asa")},
cf:function(a,b,c){var z,y
z=P.o
H.j(a,"$isu",[z],"$asu")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.j(a,"$isb6",[z],"$asb6")
y=a.length
c=P.aW(b,c,y,null,null,null)
return H.f1(b>0||c<y?C.a.fP(a,b,c):a)}if(!!J.N(a).$iseV)return H.k_(a,b,P.aW(b,c,a.length,null,null,null))
return P.ks(a,b,c)},
ks:function(a,b,c){var z,y,x,w
H.j(a,"$isu",[P.o],"$asu")
if(b<0)throw H.e(P.a2(b,0,J.ar(a),null,null))
z=c==null
if(!z&&c<b)throw H.e(P.a2(c,b,J.ar(a),null,null))
y=J.c1(a)
for(x=0;x<b;++x)if(!y.I())throw H.e(P.a2(b,0,x,null,null))
w=[]
if(z)for(;y.I();)w.push(y.gU())
else for(x=b;x<c;++x){if(!y.I())throw H.e(P.a2(c,b,x,null,null))
w.push(y.gU())}return H.f1(w)},
dp:function(a,b,c){return new H.j8(a,H.eG(a,!1,!0,!1))},
cg:function(){var z=H.jP()
if(z!=null)return P.kY(z,0,null)
throw H.e(P.Z("'Uri.base' is not supported"))},
cq:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ik(a)},
p:function(a){return new P.fU(a)},
jo:function(a,b,c,d){var z,y
H.i(b,{func:1,ret:d,args:[P.o]})
z=H.d([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.q(z,y,b.$1(y))
return z},
ck:function(a){H.nT(a)},
kY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.c.J(a,b+4)^58)*3|C.c.J(a,b)^100|C.c.J(a,b+1)^97|C.c.J(a,b+2)^116|C.c.J(a,b+3)^97)>>>0
if(y===0)return P.fA(b>0||c<c?C.c.u(a,b,c):a,5,null).gfu()
else if(y===32)return P.fA(C.c.u(a,z,c),0,null).gfu()}x=new Array(8)
x.fixed$length=Array
w=H.d(x,[P.o])
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
if(typeof v!=="number")return v.aP()
if(v>=b)if(P.hi(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.l()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.F()
if(typeof r!=="number")return H.n(r)
if(q<r)r=q
if(typeof s!=="number")return s.F()
if(s<u)s=r
else if(s<=v)s=v+1
if(typeof t!=="number")return t.F()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.F()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.c.ai(a,"..",s)))n=r>s+2&&C.c.ai(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.c.ai(a,"file",b)){if(u<=b){if(!C.c.ai(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.c.u(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.c.b9(a,s,r,"/");++r;++q;++c}else{a=C.c.u(a,b,s)+"/"+C.c.u(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.c.ai(a,"http",b)){if(x&&t+3===s&&C.c.ai(a,"80",t+1))if(b===0&&!0){a=C.c.b9(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.c.u(a,b,t)+C.c.u(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.c.ai(a,"https",b)){if(x&&t+4===s&&C.c.ai(a,"443",t+1))if(b===0&&!0){a=C.c.b9(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.c.u(a,b,t)+C.c.u(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.c.u(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.m3(a,v,u,t,s,r,q,o)}return P.mg(a,b,c,v,u,t,s,r,q,o)},
fC:function(a,b){var z=P.m
return C.a.kj(H.d(a.split("&"),[z]),P.ji(z,z),new P.l0(b),[P.B,P.m,P.m])},
kW:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kX(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.c.Z(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.be(C.c.u(a,v,w),null,null)
if(typeof s!=="number")return s.cn()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.be(C.c.u(a,v,c),null,null)
if(typeof s!=="number")return s.cn()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fB:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kZ(a)
y=new P.l_(z,a)
if(a.length<2)z.$1("address is too short")
x=H.d([],[P.o])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.c.Z(a,w)
if(s===58){if(w===b){++w
if(C.c.Z(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaN(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kW(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.e.aZ(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
mG:function(){var z,y,x,w,v
z=P.jo(22,new P.mI(),!0,P.M)
y=new P.mH(z)
x=new P.mJ()
w=new P.mK()
v=H.c(y.$2(0,225),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(14,225),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(15,225),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(1,225),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(2,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(3,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(4,229),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(5,229),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(6,231),"$isM")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(7,231),"$isM")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.c(y.$2(8,8),"$isM"),"]",5)
v=H.c(y.$2(9,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(16,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(17,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(10,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(18,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(19,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(11,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(12,236),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.c(y.$2(13,237),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.c(y.$2(20,245),"$isM"),"az",21)
v=H.c(y.$2(21,245),"$isM")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hi:function(a,b,c,d,e){var z,y,x,w,v
H.j(e,"$isa",[P.o],"$asa")
z=$.$get$hj()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.c.J(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.q(e,v>>>5,y)}return d},
D:{"^":"b;"},
"+bool":0,
ay:{"^":"b;a,b",
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.ay))return!1
return this.a===b.a&&!0},
ga_:function(a){var z=this.a
return(z^C.e.aZ(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.i8(H.jW(this))
y=P.c5(H.jU(this))
x=P.c5(H.jQ(this))
w=P.c5(H.jR(this))
v=P.c5(H.jT(this))
u=P.c5(H.jV(this))
t=P.i9(H.jS(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
p:{
i8:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
i9:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c5:function(a){if(a>=10)return""+a
return"0"+a}}},
y:{"^":"aw;"},
"+double":0,
bg:{"^":"b;a",
l:function(a,b){return new P.bg(C.e.l(this.a,b.ghA()))},
F:function(a,b){return C.e.F(this.a,H.c(b,"$isbg").a)},
aP:function(a,b){return C.e.aP(this.a,b.ghA())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bg))return!1
return this.a===b.a},
ga_:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ie()
y=this.a
if(y<0)return"-"+new P.bg(0-y).i(0)
x=z.$1(C.e.a9(y,6e7)%60)
w=z.$1(C.e.a9(y,1e6)%60)
v=new P.id().$1(y%1e6)
return""+C.e.a9(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
es:function(a,b,c,d,e,f){return new P.bg(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
id:{"^":"h:18;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ie:{"^":"h:18;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
ae:{"^":"b;"},
dl:{"^":"ae;",
i:function(a){return"Throw of null."}},
b4:{"^":"ae;a,b,c,d",
gcz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcw:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gcz()+y+x
if(!this.a)return w
v=this.gcw()
u=P.cq(this.b)
return w+v+": "+H.l(u)},
p:{
c2:function(a){return new P.b4(!1,null,null,a)},
cX:function(a,b,c){return new P.b4(!0,a,b,c)}}},
cx:{"^":"b4;e,f,a,b,c,d",
gcz:function(){return"RangeError"},
gcw:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cy:function(a,b,c){return new P.cx(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.cx(b,c,!0,a,d,"Invalid value")},
aW:function(a,b,c,d,e,f){if(typeof a!=="number")return H.n(a)
if(0>a||a>c)throw H.e(P.a2(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.a2(b,a,c,"end",f))
return b}return c}}},
iA:{"^":"b4;e,m:f>,a,b,c,d",
gcz:function(){return"RangeError"},
gcw:function(){if(J.cS(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
bI:function(a,b,c,d,e){var z=H.ai(e!=null?e:J.ar(b))
return new P.iA(b,z,!0,a,c,"Index out of range")}}},
kU:{"^":"ae;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
Z:function(a){return new P.kU(a)}}},
kR:{"^":"ae;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cE:function(a){return new P.kR(a)}}},
ds:{"^":"ae;a",
i:function(a){return"Bad state: "+this.a},
p:{
dt:function(a){return new P.ds(a)}}},
i2:{"^":"ae;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cq(z))+"."},
p:{
bf:function(a){return new P.i2(a)}}},
jL:{"^":"b;",
i:function(a){return"Out of Memory"},
$isae:1},
fb:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isae:1},
i7:{"^":"ae;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fU:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
iq:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.l(z):"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.c.u(w,0,75)+"..."
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
m=""}l=C.c.u(w,o,p)
return y+n+l+m+"\n"+C.c.k(" ",x-o+n.length)+"^\n"},
p:{
T:function(a,b,c){return new P.iq(a,b,c)}}},
o:{"^":"aw;"},
"+int":0,
u:{"^":"b;$ti",
gm:function(a){var z,y
z=this.ga5(this)
for(y=0;z.I();)++y
return y},
ak:function(a,b){var z,y,x
if(b<0)H.q(P.a2(b,0,null,"index",null))
for(z=this.ga5(this),y=0;z.I();){x=z.gU()
if(b===y)return x;++y}throw H.e(P.bI(b,this,"index",null,y))},
i:function(a){return P.j1(this,"(",")")}},
aP:{"^":"b;$ti"},
a:{"^":"b;$ti",$isu:1},
"+List":0,
B:{"^":"b;$ti"},
w:{"^":"b;",
ga_:function(a){return P.b.prototype.ga_.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
aw:{"^":"b;"},
"+num":0,
b:{"^":";",
A:function(a,b){return this===b},
ga_:function(a){return H.bQ(this)},
i:function(a){return"Instance of '"+H.bm(this)+"'"},
toString:function(){return this.i(this)}},
eN:{"^":"b;"},
am:{"^":"b;"},
m:{"^":"b;",$iseX:1},
"+String":0,
aB:{"^":"b;aT:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoi:1,
p:{
fc:function(a,b,c){var z=J.c1(b)
if(!z.I())return a
if(c.length===0){do a+=H.l(z.gU())
while(z.I())}else{a+=H.l(z.gU())
for(;z.I();)a=a+c+H.l(z.gU())}return a}}},
l0:{"^":"h:48;a",
$2:function(a,b){var z,y,x,w
z=P.m
H.j(a,"$isB",[z,z],"$asB")
H.E(b)
y=J.bZ(b).dc(b,"=")
if(y===-1){if(b!=="")a.q(0,P.dR(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.c.u(b,0,y)
w=C.c.aw(b,y+1)
z=this.a
a.q(0,P.dR(x,0,x.length,z,!0),P.dR(w,0,w.length,z,!0))}return a}},
kX:{"^":"h:49;a",
$2:function(a,b){throw H.e(P.T("Illegal IPv4 address, "+a,this.a,b))}},
kZ:{"^":"h:51;a",
$2:function(a,b){throw H.e(P.T("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
l_:{"^":"h:25;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.be(C.c.u(this.b,a,b),null,16)
if(typeof z!=="number")return z.F()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cJ:{"^":"b;co:a<,b,c,d,ff:e>,f,r,0x,0y,0z,0Q,0ch",
siH:function(a){var z=P.m
this.Q=H.j(a,"$isB",[z,z],"$asB")},
gfv:function(){return this.b},
gda:function(a){var z=this.c
if(z==null)return""
if(C.c.ah(z,"["))return C.c.u(z,1,z.length-1)
return z},
gcc:function(a){var z=this.d
if(z==null)return P.h7(this.a)
return z},
gdm:function(){var z=this.f
return z==null?"":z},
gf0:function(){var z=this.r
return z==null?"":z},
dq:function(a,b,c,d,e,f,g,h,i){var z,y,x
H.j(g,"$isB",[P.m,null],"$asB")
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
f=P.dQ(f,0,0,g)
return new P.cJ(h,i,b,e,c,f,this.r)},
dn:function(a){return this.dq(null,null,null,null,null,null,a,null,null)},
gb7:function(){var z,y
if(this.Q==null){z=this.f
y=P.m
this.siH(new P.fz(P.fC(z==null?"":z,C.m),[y,y]))}return this.Q},
gf1:function(){return this.c!=null},
gf4:function(){return this.f!=null},
gf2:function(){return this.r!=null},
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
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!!J.N(b).$isdL){if(this.a==b.gco())if(this.c!=null===b.gf1())if(this.b==b.gfv())if(this.gda(this)==b.gda(b))if(this.gcc(this)==b.gcc(b))if(this.e===b.gff(b)){z=this.f
y=z==null
if(!y===b.gf4()){if(y)z=""
if(z===b.gdm()){z=this.r
y=z==null
if(!y===b.gf2()){if(y)z=""
z=z===b.gf0()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
ga_:function(a){var z=this.z
if(z==null){z=C.c.ga_(this.i(0))
this.z=z}return z},
$isdL:1,
p:{
cK:function(a,b,c,d){var z,y,x,w,v,u
H.j(a,"$isa",[P.o],"$asa")
if(c===C.m){z=$.$get$hc().b
if(typeof b!=="string")H.q(H.ah(b))
z=z.test(b)}else z=!1
if(z)return b
H.v(b,H.aG(c,"c4",0))
y=c.gkd().d1(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cd(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mg:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mr(a,b,d)
else{if(d===b)P.bU(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.ms(a,z,e-1):""
x=P.ml(a,e,f,!1)
if(typeof f!=="number")return f.l()
w=f+1
if(typeof g!=="number")return H.n(g)
v=w<g?P.mo(P.be(C.c.u(a,w,g),new P.mh(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mm(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.F()
t=h<i?P.dQ(a,h+1,i,null):null
return new P.cJ(j,y,x,v,u,t,i<c?P.mk(a,i+1,c):null)},
h7:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bU:function(a,b,c){throw H.e(P.T(c,a,b))},
mo:function(a,b){if(a!=null&&a===P.h7(b))return
return a},
ml:function(a,b,c,d){var z,y
if(b===c)return""
if(C.c.Z(a,b)===91){if(typeof c!=="number")return c.C()
z=c-1
if(C.c.Z(a,z)!==93)P.bU(a,b,"Missing end `]` to match `[` in host")
P.fB(a,b+1,z)
return C.c.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.n(c)
y=b
for(;y<c;++y)if(C.c.Z(a,y)===58){P.fB(a,b,c)
return"["+a+"]"}return P.mu(a,b,c)},
mu:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.n(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.c.Z(a,z)
if(v===37){u=P.he(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.aB("")
s=C.c.u(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.c.u(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.E,t)
t=(C.E[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aB("")
if(y<z){x.a+=C.c.u(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.q,t)
t=(C.q[t]&1<<(v&15))!==0}else t=!1
if(t)P.bU(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.c.Z(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aB("")
s=C.c.u(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h8(v)
z+=q
y=z}}}}if(x==null)return C.c.u(a,b,c)
if(y<c){s=C.c.u(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mr:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.ha(C.c.J(a,b)))P.bU(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.c.J(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.t,w)
w=(C.t[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bU(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.c.u(a,b,c)
return P.mi(y?a.toLowerCase():a)},
mi:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ms:function(a,b,c){return P.bV(a,b,c,C.a_,!1)},
mm:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bV(a,b,c,C.F,!0):C.o.m7(d,new P.mn(),P.m).H(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.c.ah(w,"/"))w="/"+w
return P.mt(w,e,f)},
mt:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.c.ah(a,"/"))return P.mv(a,!z||c)
return P.mw(a)},
dQ:function(a,b,c,d){var z,y
z={}
H.j(d,"$isB",[P.m,null],"$asB")
if(a!=null){if(d!=null)throw H.e(P.c2("Both query and queryParameters specified"))
return P.bV(a,b,c,C.r,!0)}if(d==null)return
y=new P.aB("")
z.a=""
d.D(0,new P.mp(new P.mq(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mk:function(a,b,c){return P.bV(a,b,c,C.r,!0)},
he:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.c.Z(a,b+1)
x=C.c.Z(a,z)
w=H.cO(y)
v=H.cO(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.aZ(u,4)
if(z>=8)return H.f(C.u,z)
z=(C.u[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cd(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.c.u(a,b,b+3).toUpperCase()
return},
h8:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.d(z,[P.o])
C.a.q(y,0,37)
C.a.q(y,1,C.c.J("0123456789ABCDEF",a>>>4))
C.a.q(y,2,C.c.J("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.d(z,[P.o])
for(v=0;--w,w>=0;x=128){u=C.e.iX(a,6*w)&63|x
C.a.q(y,v,37)
C.a.q(y,v+1,C.c.J("0123456789ABCDEF",u>>>4))
C.a.q(y,v+2,C.c.J("0123456789ABCDEF",u&15))
v+=3}}return P.cf(y,0,null)},
bV:function(a,b,c,d,e){var z=P.hd(a,b,c,H.j(d,"$isa",[P.o],"$asa"),e)
return z==null?C.c.u(a,b,c):z},
hd:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.j(d,"$isa",[P.o],"$asa")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.F()
if(typeof c!=="number")return H.n(c)
if(!(y<c))break
c$0:{v=C.c.Z(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.he(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.q,u)
u=(C.q[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bU(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.c.Z(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h8(v)}}if(w==null)w=new P.aB("")
w.a+=C.c.u(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.n(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.F()
if(x<c)w.a+=C.c.u(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
hb:function(a){if(C.c.ah(a,"."))return!0
return C.c.dc(a,"/.")!==-1},
mw:function(a){var z,y,x,w,v,u,t
if(!P.hb(a))return a
z=H.d([],[P.m])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.Q(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.H(z,"/")},
mv:function(a,b){var z,y,x,w,v,u
if(!P.hb(a))return!b?P.h9(a):a
z=H.d([],[P.m])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaN(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaN(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.q(z,0,P.h9(z[0]))}return C.a.H(z,"/")},
h9:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.ha(J.hI(a,0)))for(y=1;y<z;++y){x=C.c.J(a,y)
if(x===58)return C.c.u(a,0,y)+"%3A"+C.c.aw(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.t,w)
w=(C.t[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mj:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.c.J(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.e(P.c2("Invalid URL encoding"))}}return z},
dR:function(a,b,c,d,e){var z,y,x,w,v
y=b
while(!0){if(!(y<c)){z=!0
break}x=C.c.J(a,y)
if(x<=127)if(x!==37)w=x===43
else w=!0
else w=!0
if(w){z=!1
break}++y}if(z){if(C.m!==d)w=!1
else w=!0
if(w)return C.c.u(a,b,c)
else v=new H.ad(C.c.u(a,b,c))}else{v=H.d([],[P.o])
for(w=a.length,y=b;y<c;++y){x=C.c.J(a,y)
if(x>127)throw H.e(P.c2("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.e(P.c2("Truncated URI"))
C.a.h(v,P.mj(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.j(v,"$isa",[P.o],"$asa")
return new P.l6(!1).d1(v)},
ha:function(a){var z=a|32
return 97<=z&&z<=122}}},
mh:{"^":"h:55;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.l()
throw H.e(P.T("Invalid port",this.a,z+1))}},
mn:{"^":"h:57;",
$1:function(a){return P.cK(C.a1,a,C.m,!1)}},
mq:{"^":"h:61;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cK(C.u,a,C.m,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cK(C.u,b,C.m,!0))}}},
mp:{"^":"h:62;a",
$2:function(a,b){var z,y
H.E(a)
if(b==null||typeof b==="string")this.a.$2(a,H.E(b))
else for(z=J.c1(H.hA(b,"$isu")),y=this.a;z.I();)y.$2(a,H.E(z.gU()))}},
kV:{"^":"b;a,b,c",
gfu:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.c.f5(y,"?",z)
w=y.length
if(x>=0){v=P.bV(y,x+1,w,C.r,!1)
w=x}else v=null
z=new P.lA(this,"data",null,null,null,P.bV(y,z,w,C.F,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
fA:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.d([b-1],[P.o])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.c.J(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.e(P.T("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.e(P.T("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.c.J(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaN(z)
if(v!==44||x!==t+7||!C.c.ai(a,"base64",t+1))throw H.e(P.T("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.K.ky(a,s,y)
else{r=P.hd(a,s,y,C.r,!0)
if(r!=null)a=C.c.b9(a,s,y,r)}return new P.kV(a,z,c)}}},
mI:{"^":"h:26;",
$1:function(a){return new Uint8Array(96)}},
mH:{"^":"h:27;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hK(z,0,96,b)
return z}},
mJ:{"^":"h;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.c.J(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mK:{"^":"h;",
$3:function(a,b,c){var z,y,x
for(z=C.c.J(b,0),y=C.c.J(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
m3:{"^":"b;a,b,c,d,e,f,r,x,0y",
gf1:function(){return this.c>0},
gf3:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.l()
y=this.e
if(typeof y!=="number")return H.n(y)
y=z+1<y
z=y}else z=!1
return z},
gf4:function(){var z=this.f
if(typeof z!=="number")return z.F()
return z<this.r},
gf2:function(){return this.r<this.a.length},
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
z="package"}else{z=C.c.u(this.a,0,z)
this.x=z}return z},
gfv:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.c.u(this.a,y,z-1):""},
gda:function(a){var z=this.c
return z>0?C.c.u(this.a,z,this.d):""},
gcc:function(a){var z
if(this.gf3()){z=this.d
if(typeof z!=="number")return z.l()
return P.be(C.c.u(this.a,z+1,this.e),null,null)}if(this.ge1())return 80
if(this.ge2())return 443
return 0},
gff:function(a){return C.c.u(this.a,this.e,this.f)},
gdm:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.F()
return z<y?C.c.u(this.a,z+1,y):""},
gf0:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.c.aw(y,z+1):""},
gb7:function(){var z=this.f
if(typeof z!=="number")return z.F()
if(z>=this.r)return C.a2
z=P.m
return new P.fz(P.fC(this.gdm(),C.m),[z,z])},
dq:function(a,b,c,d,e,f,g,h,i){var z,y,x
H.j(g,"$isB",[P.m,null],"$asB")
h=this.gco()
z=h==="file"
y=this.c
i=y>0?C.c.u(this.a,this.b+3,y):""
e=this.gf3()?this.gcc(this):null
y=this.c
if(y>0)b=C.c.u(this.a,y,this.d)
else if(i.length!==0||e!=null||z)b=""
y=this.a
c=C.c.u(y,this.e,this.f)
if(!z)x=b!=null&&c.length!==0
else x=!0
if(x&&!C.c.ah(c,"/"))c="/"+c
f=P.dQ(f,0,0,g)
x=this.r
if(x<y.length)a=C.c.aw(y,x+1)
return new P.cJ(h,i,b,e,c,f,a)},
dn:function(a){return this.dq(null,null,null,null,null,null,a,null,null)},
ga_:function(a){var z=this.y
if(z==null){z=C.c.ga_(this.a)
this.y=z}return z},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.N(b).$isdL)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$isdL:1},
lA:{"^":"cJ;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
d1:function(a,b){var z=document.createElement("canvas")
return z},
ih:function(a){H.c(a,"$isbG")
return"wheel"},
ew:function(a,b,c){return W.iy(a,null,null,b,null,null,null,c).fn(new W.ix(),P.m)},
iy:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=W.bH
y=new P.aq(0,$.I,[z])
x=new P.lr(y,[z])
w=new XMLHttpRequest()
C.P.kF(w,"GET",a,!0)
z=W.ce
v={func:1,ret:-1,args:[z]}
W.V(w,"load",H.i(new W.iz(w,x),v),!1,z)
W.V(w,"error",H.i(x.gex(),v),!1,z)
w.send()
return y},
ez:function(a){var z,y,x
y=document.createElement("input")
z=H.c(y,"$isey")
try{J.hM(z,a)}catch(x){H.a9(x)}return z},
cH:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fW:function(a,b,c,d){var z,y
z=W.cH(W.cH(W.cH(W.cH(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ho:function(a,b){var z
H.i(a,{func:1,ret:-1,args:[b]})
z=$.I
if(z===C.k)return a
return z.er(a,b)},
ao:{"^":"a0;","%":"HTMLBRElement|HTMLBaseElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
o_:{"^":"ao;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
o0:{"^":"ao;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
hR:{"^":"ao;","%":"HTMLBodyElement"},
d0:{"^":"ao;",
ck:function(a,b,c){if(c!=null)return this.hO(a,b,P.mY(c,null))
return this.hP(a,b)},
fF:function(a,b){return this.ck(a,b,null)},
hO:function(a,b,c){return a.getContext(b,c)},
hP:function(a,b){return a.getContext(b)},
$isd0:1,
$iseg:1,
"%":"HTMLCanvasElement"},
d2:{"^":"L;",
hQ:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
k9:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$isd2:1,
"%":"CanvasRenderingContext2D"},
o3:{"^":"P;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
o5:{"^":"lz;0m:length=",
fH:function(a,b){var z=this.hR(a,this.hn(a,b))
return z==null?"":z},
hn:function(a,b){var z,y
z=$.$get$ej()
y=z[b]
if(typeof y==="string")return y
y=this.j_(a,b)
z[b]=y
return y},
j_:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ia()+b
if(z in a)return z
return b},
hR:function(a,b){return a.getPropertyValue(b)},
gcY:function(a){return a.bottom},
gbo:function(a){return a.height},
gb6:function(a){return a.left},
gbw:function(a){return a.right},
gbB:function(a){return a.top},
gbC:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
i6:{"^":"b;",
gb6:function(a){return this.fH(a,"left")}},
er:{"^":"ao;",$iser:1,"%":"HTMLDivElement"},
ib:{"^":"P;",
cl:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
o6:{"^":"L;",
i:function(a){return String(a)},
"%":"DOMException"},
ic:{"^":"L;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
A:function(a,b){var z
if(b==null)return!1
if(!H.b2(b,"$isaX",[P.aw],"$asaX"))return!1
z=J.aT(b)
return a.left===z.gb6(b)&&a.top===z.gbB(b)&&a.width===z.gbC(b)&&a.height===z.gbo(b)},
ga_:function(a){return W.fW(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcY:function(a){return a.bottom},
gbo:function(a){return a.height},
gb6:function(a){return a.left},
gbw:function(a){return a.right},
gbB:function(a){return a.top},
gbC:function(a){return a.width},
$isaX:1,
$asaX:function(){return[P.aw]},
"%":";DOMRectReadOnly"},
ly:{"^":"cv;a,b",
gm:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.f(z,b)
return H.c(z[b],"$isa0")},
q:function(a,b,c){var z
H.c(c,"$isa0")
z=this.b
if(b<0||b>=z.length)return H.f(z,b)
J.cT(this.a,c,z[b])},
h:function(a,b){J.e5(this.a,b)
return b},
ga5:function(a){var z=this.l7(this)
return new J.at(z,z.length,0,[H.r(z,0)])},
$asX:function(){return[W.a0]},
$asu:function(){return[W.a0]},
$asa:function(){return[W.a0]}},
a0:{"^":"P;",
gd0:function(a){return new W.ly(a,a.children)},
gew:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.F()
if(x<0)x=-x*0
if(typeof w!=="number")return w.F()
if(w<0)w=-w*0
return new P.aX(z,y,x,w,[P.aw])},
i:function(a){return a.localName},
$isa0:1,
"%":";Element"},
aa:{"^":"L;",$isaa:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
bG:{"^":"L;",
he:function(a,b,c,d){return a.addEventListener(b,H.bz(H.i(c,{func:1,args:[W.aa]}),1),!1)},
$isbG:1,
"%":";EventTarget"},
o7:{"^":"ao;0m:length=","%":"HTMLFormElement"},
it:{"^":"L;0m:length=",
eb:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
iu:{"^":"lS;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bI(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.c(c,"$isP")
throw H.e(P.Z("Cannot assign element of immutable List."))},
ak:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isaU:1,
$asaU:function(){return[W.P]},
$asX:function(){return[W.P]},
$isu:1,
$asu:function(){return[W.P]},
$isa:1,
$asa:function(){return[W.P]},
$isiu:1,
$asb5:function(){return[W.P]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
iv:{"^":"ib;","%":"HTMLDocument"},
bH:{"^":"iw;",
mf:function(a,b,c,d,e,f){return a.open(b,c)},
kF:function(a,b,c,d){return a.open(b,c,d)},
$isbH:1,
"%":"XMLHttpRequest"},
ix:{"^":"h:28;",
$1:function(a){return H.c(a,"$isbH").responseText}},
iz:{"^":"h:29;a,b",
$1:function(a){var z,y,x,w,v
H.c(a,"$isce")
z=this.a
y=z.status
if(typeof y!=="number")return y.aP()
x=y>=200&&y<300
w=y>307&&y<400
y=x||y===0||y===304||w
v=this.b
if(y)v.aJ(0,z)
else v.jU(a)}},
iw:{"^":"bG;","%":";XMLHttpRequestEventTarget"},
c6:{"^":"L;0ey:data=",$isc6:1,"%":"ImageData"},
ex:{"^":"ao;",$isex:1,$iseg:1,"%":"HTMLImageElement"},
ey:{"^":"ao;0type",
sla:function(a,b){a.type=H.E(b)},
$isey:1,
$isd4:1,
"%":"HTMLInputElement"},
d4:{"^":"b;",$isa0:1,$isbG:1,$isP:1},
bK:{"^":"dA;",$isbK:1,"%":"KeyboardEvent"},
jc:{"^":"ao;","%":"HTMLLabelElement"},
jD:{"^":"ao;","%":"HTMLAudioElement;HTMLMediaElement"},
aJ:{"^":"dA;",$isaJ:1,"%":"PointerEvent;DragEvent|MouseEvent"},
lx:{"^":"cv;a",
q:function(a,b,c){var z,y
H.c(c,"$isP")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.f(y,b)
J.cT(z,c,y[b])},
ga5:function(a){var z=this.a.childNodes
return new W.eu(z,z.length,-1,[H.c_(C.a3,z,"b5",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asX:function(){return[W.P]},
$asu:function(){return[W.P]},
$asa:function(){return[W.P]}},
P:{"^":"bG;",
kW:function(a,b){var z,y
try{z=a.parentNode
J.cT(z,b,a)}catch(y){H.a9(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.fQ(a):z},
Y:function(a,b){return a.appendChild(b)},
iL:function(a,b,c){return a.replaceChild(b,c)},
$isP:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
jI:{"^":"lY;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bI(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.c(c,"$isP")
throw H.e(P.Z("Cannot assign element of immutable List."))},
ak:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isaU:1,
$asaU:function(){return[W.P]},
$asX:function(){return[W.P]},
$isu:1,
$asu:function(){return[W.P]},
$isa:1,
$asa:function(){return[W.P]},
$asb5:function(){return[W.P]},
"%":"NodeList|RadioNodeList"},
ce:{"^":"aa;",$isce:1,"%":"ProgressEvent|ResourceProgressEvent"},
og:{"^":"ao;0m:length=","%":"HTMLSelectElement"},
cC:{"^":"ao;",$iscC:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
kt:{"^":"ao;",
hT:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
ku:{"^":"ao;",
e0:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
bo:{"^":"L;",$isbo:1,"%":"Touch"},
bp:{"^":"dA;",$isbp:1,"%":"TouchEvent"},
ok:{"^":"md;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bI(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.c(c,"$isbo")
throw H.e(P.Z("Cannot assign element of immutable List."))},
ak:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isaU:1,
$asaU:function(){return[W.bo]},
$asX:function(){return[W.bo]},
$isu:1,
$asu:function(){return[W.bo]},
$isa:1,
$asa:function(){return[W.bo]},
$asb5:function(){return[W.bo]},
"%":"TouchList"},
dA:{"^":"aa;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
om:{"^":"jD;",$iseg:1,"%":"HTMLVideoElement"},
bT:{"^":"aJ;",
gk6:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.Z("deltaY is not supported"))},
gk5:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.Z("deltaX is not supported"))},
$isbT:1,
"%":"WheelEvent"},
ln:{"^":"bG;",
iM:function(a,b){return a.requestAnimationFrame(H.bz(H.i(b,{func:1,ret:-1,args:[P.aw]}),1))},
hB:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
or:{"^":"ic;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
A:function(a,b){var z
if(b==null)return!1
if(!H.b2(b,"$isaX",[P.aw],"$asaX"))return!1
z=J.aT(b)
return a.left===z.gb6(b)&&a.top===z.gbB(b)&&a.width===z.gbC(b)&&a.height===z.gbo(b)},
ga_:function(a){return W.fW(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbo:function(a){return a.height},
gbC:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lB:{"^":"du;a,b,c,$ti"},
os:{"^":"lB;a,b,c,$ti"},
lC:{"^":"dv;a,b,c,d,e,$ti",
ja:function(){var z,y,x
z=this.d
y=z!=null
if(y&&this.a<=0){x=this.b
x.toString
H.i(z,{func:1,args:[W.aa]})
if(y)J.hH(x,this.c,z,!1)}},
p:{
V:function(a,b,c,d,e){var z=W.ho(new W.lD(c),W.aa)
z=new W.lC(0,a,b,z,!1,[e])
z.ja()
return z}}},
lD:{"^":"h:30;a",
$1:function(a){return this.a.$1(H.c(a,"$isaa"))}},
b5:{"^":"b;$ti",
ga5:function(a){return new W.eu(a,this.gm(a),-1,[H.c_(this,a,"b5",0)])}},
eu:{"^":"b;a,b,c,0d,$ti",
se_:function(a){this.d=H.v(a,H.r(this,0))},
I:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.se_(J.R(this.a,z))
this.c=z
return!0}this.se_(null)
this.c=y
return!1},
gU:function(){return this.d},
$isaP:1},
lz:{"^":"L+i6;"},
lR:{"^":"L+X;"},
lS:{"^":"lR+b5;"},
lX:{"^":"L+X;"},
lY:{"^":"lX+b5;"},
mc:{"^":"L+X;"},
md:{"^":"mc+b5;"}}],["","",,P,{"^":"",
n0:function(a){var z,y
z=J.N(a)
if(!!z.$isc6){y=z.gey(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h6(a.data,a.height,a.width)},
n_:function(a){if(a instanceof P.h6)return{data:a.a,height:a.b,width:a.c}
return a},
mY:function(a,b){var z={}
a.D(0,new P.mZ(z))
return z},
ep:function(){var z=$.eo
if(z==null){z=J.cU(window.navigator.userAgent,"Opera",0)
$.eo=z}return z},
ia:function(){var z,y
z=$.el
if(z!=null)return z
y=$.em
if(y==null){y=J.cU(window.navigator.userAgent,"Firefox",0)
$.em=y}if(y)z="-moz-"
else{y=$.en
if(y==null){y=!P.ep()&&J.cU(window.navigator.userAgent,"Trident/",0)
$.en=y}if(y)z="-ms-"
else z=P.ep()?"-o-":"-webkit-"}$.el=z
return z},
m5:{"^":"b;",
eY:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
ci:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.N(a)
if(!!y.$isay)return new Date(a.a)
if(!!y.$isk5)throw H.e(P.cE("structured clone of RegExp"))
if(!!y.$isc6)return a
if(!!y.$isdk)return a
if(!!y.$isB){x=this.eY(a)
y=this.b
if(x>=y.length)return H.f(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.q(y,x,w)
a.D(0,new P.m6(z,this))
return z.a}if(!!y.$isa){x=this.eY(a)
z=this.b
if(x>=z.length)return H.f(z,x)
w=z[x]
if(w!=null)return w
return this.jX(a,x)}throw H.e(P.cE("structured clone of other type"))},
jX:function(a,b){var z,y,x,w
z=J.bb(a)
y=z.gm(a)
x=new Array(y)
C.a.q(this.b,b,x)
for(w=0;w<y;++w)C.a.q(x,w,this.ci(z.j(a,w)))
return x}},
m6:{"^":"h:9;a,b",
$2:function(a,b){this.a.a[a]=this.b.ci(b)}},
h6:{"^":"b;ey:a>,b,c",$isc6:1},
mZ:{"^":"h:9;a",
$2:function(a,b){this.a[a]=b}},
h4:{"^":"m5;a,b"},
im:{"^":"cv;a,b",
gbK:function(){var z,y,x
z=this.b
y=H.aG(z,"X",0)
x=W.a0
return new H.ju(new H.ll(z,H.i(new P.io(),{func:1,ret:P.D,args:[y]}),[y]),H.i(new P.ip(),{func:1,ret:x,args:[y]}),[y,x])},
q:function(a,b,c){var z
H.c(c,"$isa0")
z=this.gbK()
J.hL(z.b.$1(J.cV(z.a,b)),c)},
h:function(a,b){J.e5(this.b.a,b)},
gm:function(a){return J.ar(this.gbK().a)},
j:function(a,b){var z=this.gbK()
return z.b.$1(J.cV(z.a,b))},
ga5:function(a){var z=P.jn(this.gbK(),!1,W.a0)
return new J.at(z,z.length,0,[H.r(z,0)])},
$asX:function(){return[W.a0]},
$asu:function(){return[W.a0]},
$asa:function(){return[W.a0]}},
io:{"^":"h:31;",
$1:function(a){return!!J.N(H.c(a,"$isP")).$isa0}},
ip:{"^":"h:32;",
$1:function(a){return H.k(H.c(a,"$isP"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cI:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lT:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lZ:{"^":"b;$ti",
gbw:function(a){var z=this.a
if(typeof z!=="number")return z.l()
return H.v(z+this.c,H.r(this,0))},
gcY:function(a){var z=this.b
if(typeof z!=="number")return z.l()
return H.v(z+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.b2(b,"$isaX",[P.aw],"$asaX"))return!1
z=this.a
y=J.aT(b)
x=y.gb6(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbB(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.l()
w=H.r(this,0)
if(H.v(z+this.c,w)===y.gbw(b)){if(typeof x!=="number")return x.l()
z=H.v(x+this.d,w)===y.gcY(b)}else z=!1}else z=!1}else z=!1
return z},
ga_:function(a){var z,y,x,w,v
z=this.a
y=J.c0(z)
x=this.b
w=J.c0(x)
if(typeof z!=="number")return z.l()
v=H.r(this,0)
z=H.v(z+this.c,v)
if(typeof x!=="number")return x.l()
v=H.v(x+this.d,v)
return P.lT(P.cI(P.cI(P.cI(P.cI(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aX:{"^":"lZ;b6:a>,bB:b>,bC:c>,bo:d>,$ti"}}],["","",,P,{"^":"",oj:{"^":"a0;",
gd0:function(a){return new P.im(a,new W.lx(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"}}],["","",,P,{"^":"",M:{"^":"b;",$isu:1,
$asu:function(){return[P.o]},
$isa:1,
$asa:function(){return[P.o]},
$iskI:1}}],["","",,P,{"^":""}],["","",,P,{"^":"",hS:{"^":"L;",$ishS:1,"%":"WebGLBuffer"},ir:{"^":"L;",$isir:1,"%":"WebGLFramebuffer"},k0:{"^":"L;",$isk0:1,"%":"WebGLProgram"},dq:{"^":"L;",
en:function(a,b){return a.activeTexture(b)},
eq:function(a,b,c){return a.attachShader(b,c)},
az:function(a,b,c){return a.bindBuffer(b,c)},
jO:function(a,b,c){return a.bindFramebuffer(b,c)},
b_:function(a,b,c){return a.bindTexture(b,c)},
aI:function(a,b,c){return a.blendFunc(b,c)},
es:function(a,b,c,d){return a.bufferData(b,c,d)},
jP:function(a,b){return a.clear(b)},
jQ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jR:function(a,b){return a.clearDepth(b)},
jS:function(a,b){return a.compileShader(b)},
jY:function(a,b){return a.createShader(b)},
k_:function(a,b){return a.deleteProgram(b)},
k0:function(a,b){return a.deleteShader(b)},
k7:function(a,b){return a.depthFunc(b)},
d3:function(a,b){return a.disable(b)},
eA:function(a,b){return a.disableVertexAttribArray(b)},
k8:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
aA:function(a,b){return a.enable(b)},
eC:function(a,b){return a.enableVertexAttribArray(b)},
fB:function(a,b){return a.generateMipmap(b)},
fC:function(a,b,c){return a.getActiveAttrib(b,c)},
fD:function(a,b,c){return a.getActiveUniform(b,c)},
fE:function(a,b,c){return a.getAttribLocation(b,c)},
dz:function(a,b){return a.getParameter(b)},
fG:function(a,b){return a.getProgramInfoLog(b)},
cm:function(a,b,c){return a.getProgramParameter(b,c)},
fI:function(a,b){return a.getShaderInfoLog(b)},
fJ:function(a,b,c){return a.getShaderParameter(b,c)},
fK:function(a,b,c){return a.getUniformLocation(b,c)},
ku:function(a,b){return a.linkProgram(b)},
kP:function(a,b,c){return a.pixelStorei(b,c)},
fO:function(a,b,c){return a.shaderSource(b,c)},
l5:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.N(g)
if(!!z.$isc6)y=!0
else y=!1
if(y){this.j2(a,b,c,d,e,f,P.n_(g))
return}if(!!z.$isex)z=!0
else z=!1
if(z){this.j3(a,b,c,d,e,f,g)
return}throw H.e(P.c2("Incorrect number or type of arguments"))},
l4:function(a,b,c,d,e,f,g){return this.l5(a,b,c,d,e,f,g,null,null,null)},
j2:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
j3:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cd:function(a,b,c,d){return a.texParameteri(b,c,d)},
O:function(a,b,c){return a.uniform1f(b,c)},
S:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
lb:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
fs:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ft:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ds:function(a,b){return a.useProgram(b)},
lc:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
le:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isdq:1,
"%":"WebGLRenderingContext"},kg:{"^":"L;",$iskg:1,"%":"WebGLShader"},kw:{"^":"L;",$iskw:1,"%":"WebGLTexture"},kP:{"^":"L;",$iskP:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",a_:{"^":"b;0a,0b,0c,0d,$ti",
se3:function(a){this.a=H.j(a,"$isa",[H.aG(this,"a_",0)],"$asa")},
se7:function(a){this.b=H.i(a,{func:1,ret:P.D,args:[[P.u,H.aG(this,"a_",0)]]})},
se5:function(a){this.c=H.i(a,{func:1,ret:-1,args:[P.o,[P.u,H.aG(this,"a_",0)]]})},
se8:function(a){this.d=H.i(a,{func:1,ret:-1,args:[P.o,[P.u,H.aG(this,"a_",0)]]})},
cr:function(a){this.se3(H.d([],[a]))
this.se7(null)
this.se5(null)
this.se8(null)},
dA:function(a,b,c){var z=H.aG(this,"a_",0)
H.i(b,{func:1,ret:P.D,args:[[P.u,z]]})
z={func:1,ret:-1,args:[P.o,[P.u,z]]}
H.i(a,z)
H.i(c,z)
this.se7(b)
this.se5(a)
this.se8(c)},
bF:function(a,b){return this.dA(a,null,b)},
iu:function(a){var z
H.j(a,"$isu",[H.aG(this,"a_",0)],"$asu")
z=this.b
if(z!=null)return z.$1(a)
return!0},
fY:function(a,b){var z
H.j(b,"$isu",[H.aG(this,"a_",0)],"$asu")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
ga5:function(a){var z=this.a
return new J.at(z,z.length,0,[H.r(z,0)])},
ak:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aG(this,"a_",0)
H.v(b,z)
z=[z]
if(this.iu(H.d([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.fY(x,H.d([b],z))}},
j:function(a,b){var z=this.a
if(b>=z.length)return H.f(z,b)
return z[b]},
$isu:1,
p:{
d5:function(a){var z=new O.a_([a])
z.cr(a)
return z}}},dh:{"^":"b;0a,0b",
scC:function(a){this.a=H.j(a,"$isa",[V.az],"$asa")},
gm:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.K()
this.b=z}return z},
fZ:function(a){var z=this.b
if(!(z==null))z.L(a)},
aR:function(){return this.fZ(null)},
ga1:function(){var z=this.a
if(z.length>0)return C.a.gaN(z)
else return V.ca()},
fi:function(a){var z=this.a
if(a==null)C.a.h(z,V.ca())
else C.a.h(z,a)
this.aR()},
dl:function(){var z=this.a
if(z.length>0){z.pop()
this.aR()}}}}],["","",,E,{"^":"",cY:{"^":"b;"},a1:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a7:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sh_:function(a,b){this.y=H.j(b,"$isa_",[E.a1],"$asa_")},
sa7:function(a){this.z=H.c(a,"$isbh")},
skc:function(a){this.b=a},
dQ:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.at(z,z.length,0,[H.r(z,0)]);z.I();){y=z.d
if(y.f==null)y.dQ()}},
sdB:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gB().a3(0,this.gfc())
y=this.c
if(y!=null)y.gB().h(0,this.gfc())
x=new D.z("shape",z,this.c,this,[F.ak])
x.b=!0
this.ag(x)}},
sbb:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gB().a3(0,this.gfd())
y=this.f
this.f=a
if(a!=null)a.gB().h(0,this.gfd())
this.dQ()
x=new D.z("technique",y,this.f,this,[O.bR])
x.b=!0
this.ag(x)}},
sbr:function(a){var z,y
if(!J.Q(this.r,a)){z=this.r
if(z!=null)z.gB().a3(0,this.gfb())
if(a!=null)a.gB().h(0,this.gfb())
this.r=a
y=new D.z("mover",z,a,this,[U.ap])
y.b=!0
this.ag(y)}},
bl:function(){var z,y
z=this.d
y=z!=null?V.f7(null,z.bl()):null
for(z=this.y.a,z=new J.at(z,z.length,0,[H.r(z,0)]);z.I();)y=V.f7(y,z.d.bl())
return y},
l_:function(a,b){var z,y,x,w,v,u,t,s
z=this.bl()
b=V.dn()
y=z.a
x=z.d
if(typeof y!=="number")return y.l()
w=z.b
v=z.e
if(typeof w!=="number")return w.l()
u=z.c
t=z.f
if(typeof u!=="number")return u.l()
b=b.C(0,new V.aA(y+x/2,w+v/2,u+t/2))
if(v>x)x=v
if(t>x)x=t
if(x===0)return
s=a/x
this.bT(V.eS(s,s,s,1).k(0,V.eT(b.a,b.b,b.c)))},
kZ:function(a){return this.l_(a,null)},
bT:function(a){var z=this.c
if(z!=null)z.bT(a)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.r(z,0)]);z.I();)z.d.bT(a)},
ao:function(a){var z,y,x,w
z=this.r
y=z!=null?z.bd(a,this):null
if(!J.Q(y,this.x)){x=this.x
this.x=y
w=new D.z("matrix",x,y,this,[V.az])
w.b=!0
this.ag(w)}z=this.f
if(z!=null)z.ao(a)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.r(z,0)]);z.I();)z.d.ao(a)},
aO:function(a){var z,y,x
if(!this.b)return
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga1())
else C.a.h(z.a,y.k(0,z.ga1()))
z.aR()
a.fj(this.f)
z=a.dy
x=(z&&C.a).gaN(z)
if(x!=null&&this.d!=null)x.fl(a,this)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.r(z,0)]);z.I();)z.d.aO(a)
a.fg()
a.dx.dl()},
gB:function(){var z=this.z
if(z==null){z=D.K()
this.z=z}return z},
ag:function(a){var z=this.z
if(!(z==null))z.L(a)},
a6:function(){return this.ag(null)},
kD:[function(a){H.c(a,"$isx")
this.e=null
this.ag(a)},function(){return this.kD(null)},"md","$1","$0","gfc",0,2,3],
kE:[function(a){this.ag(H.c(a,"$isx"))},function(){return this.kE(null)},"me","$1","$0","gfd",0,2,3],
kC:[function(a){this.ag(H.c(a,"$isx"))},function(){return this.kC(null)},"mc","$1","$0","gfb",0,2,3],
kA:[function(a){this.ag(H.c(a,"$isx"))},function(){return this.kA(null)},"ma","$1","$0","gfa",0,2,3],
m9:[function(a,b){var z,y,x,w,v,u,t
H.j(b,"$isu",[E.a1],"$asu")
for(z=b.length,y=this.gfa(),x={func:1,ret:-1,args:[D.x]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.ga7()==null){t=new D.bh()
t.sap(null)
t.sbi(null)
t.c=null
t.d=0
u.sa7(t)}t=u.ga7()
t.toString
H.i(y,x)
if(t.a==null)t.sap(H.d([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a6()},"$2","gkz",8,0,10],
mb:[function(a,b){var z,y,x,w,v
H.j(b,"$isu",[E.a1],"$asu")
for(z=b.length,y=this.gfa(),x=0;x<b.length;b.length===z||(0,H.A)(b),++x){w=b[x]
if(w!=null){if(w.ga7()==null){v=new D.bh()
v.sap(null)
v.sbi(null)
v.c=null
v.d=0
w.sa7(v)}w.ga7().a3(0,y)}}this.a6()},"$2","gkB",8,0,10],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaV:1,
p:{
cp:function(a,b,c,d,e,f){var z=new E.a1()
z.a=d
z.b=!0
z.sh_(0,O.d5(E.a1))
z.y.bF(z.gkz(),z.gkB())
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
z.sdB(0,e)
z.sbb(f)
z.sbr(c)
return z}}},k6:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
sj1:function(a){this.dy=H.j(a,"$isa",[O.bR],"$asa")},
siV:function(a){this.fr=H.j(a,"$isB",[P.m,A.cA],"$asB")},
fV:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.ay(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dh()
y=[V.az]
z.scC(H.d([],y))
z.b=null
z.gB().h(0,new E.k8(this))
this.cy=z
z=new O.dh()
z.scC(H.d([],y))
z.b=null
z.gB().h(0,new E.k9(this))
this.db=z
z=new O.dh()
z.scC(H.d([],y))
z.b=null
z.gB().h(0,new E.ka(this))
this.dx=z
this.sj1(H.d([],[O.bR]))
z=this.dy;(z&&C.a).h(z,null)
this.siV(new H.aH(0,0,[P.m,A.cA]))},
gkU:function(){var z=this.z
if(z==null){z=this.cy.ga1().k(0,this.db.ga1())
this.z=z}return z},
gfh:function(){var z=this.ch
if(z==null){z=this.gkU().k(0,this.dx.ga1())
this.ch=z}return z},
gfz:function(){var z=this.cx
if(z==null){z=this.db.ga1().k(0,this.dx.ga1())
this.cx=z}return z},
fj:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaN(z):a;(z&&C.a).h(z,y)},
fg:function(){var z=this.dy
if(z.length>1)z.pop()},
ep:function(a){var z=a.b
if(z.length===0)throw H.e(P.p("May not cache a shader with no name."))
if(this.fr.bV(z))throw H.e(P.p('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.q(0,z,a)},
p:{
k7:function(a,b){var z=new E.k6(a,b)
z.fV(a,b)
return z}}},k8:{"^":"h:14;a",
$1:function(a){var z
H.c(a,"$isx")
z=this.a
z.z=null
z.ch=null}},k9:{"^":"h:14;a",
$1:function(a){var z
H.c(a,"$isx")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},ka:{"^":"h:14;a",
$1:function(a){var z
H.c(a,"$isx")
z=this.a
z.ch=null
z.cx=null}},kA:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a7:x<,0y,0z,0Q,0ch,0cx,0cy",
sa7:function(a){this.x=H.c(a,"$isbh")},
h1:[function(a){H.c(a,"$isx")
this.kY()},function(){return this.h1(null)},"h0","$1","$0","gdH",0,2,3],
gkl:function(){var z,y,x
z=Date.now()
y=C.e.a9(P.es(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ay(z,!1)
return x/y},
ec:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.n(z)
x=C.j.cb(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.j.cb(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.fk(C.v,this.gkX())}},
kY:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.i(new E.kC(this),{func:1,ret:-1,args:[P.aw]})
C.J.hB(z)
C.J.iM(z,W.ho(y,P.aw))}},"$0","gkX",0,0,7],
kV:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.ec()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ay(w,!1)
x.y=P.es(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aR()
w=x.db
C.a.sm(w.a,0)
w.aR()
w=x.dx
C.a.sm(w.a,0)
w.aR()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aO(this.e)}}catch(v){z=H.a9(v)
y=H.bd(v)
P.ck("Error: "+H.l(z))
P.ck("Stack: "+H.l(y))
throw H.e(z)}},
p:{
kB:function(a,b,c,d,e){var z,y,x,w
z=J.N(a)
if(!!z.$isd0)return E.fj(a,!0,!0,!0,!1)
y=W.d1(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd0(a).h(0,y)
w=E.fj(y,!0,!0,!0,!1)
w.a=a
return w},
fj:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kA()
y=P.jj(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
x=C.n.ck(a,"webgl",y)
x=H.c(x==null?C.n.ck(a,"experimental-webgl",y):x,"$isdq")
if(x==null)H.q(P.p("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.k7(x,a)
w=new T.ky(x)
w.b=H.ai((x&&C.b).dz(x,3379))
w.c=H.ai(C.b.dz(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.l1(a)
v=new X.jb()
v.c=new X.aR(!1,!1,!1)
v.siD(P.jl(null,null,null,P.o))
w.b=v
v=new X.jE(w)
v.f=0
v.r=V.b7()
v.x=V.b7()
v.Q=1
v.ch=1
w.c=v
v=new X.jp(w)
v.r=0
v.x=V.b7()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kF(w)
v.e=0
v.f=V.b7()
v.r=V.b7()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.shC(H.d([],[[P.dv,P.b]]))
v=w.z
u=document
t=W.aJ
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.V(u,"contextmenu",H.i(w.gig(),s),!1,t))
v=w.z
r=W.aa
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.V(a,"focus",H.i(w.gij(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.V(a,"blur",H.i(w.gib(),q),!1,r))
v=w.z
p=W.bK
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.V(u,"keyup",H.i(w.gil(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.V(u,"keydown",H.i(w.gik(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.V(a,"mousedown",H.i(w.gip(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mouseup",H.i(w.gir(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mousemove",H.i(w.giq(),s),!1,t))
p=w.z
o=W.bT;(p&&C.a).h(p,W.V(a,H.E(W.ih(a)),H.i(w.gis(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.V(u,"mousemove",H.i(w.gih(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.V(u,"mouseup",H.i(w.gii(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.V(u,"pointerlockchange",H.i(w.git(),q),!1,r))
r=w.z
q=W.bp
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.V(a,"touchstart",H.i(w.giA(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchend",H.i(w.giy(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchmove",H.i(w.giz(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ay(Date.now(),!1)
z.cy=0
z.ec()
return z}}},kC:{"^":"h:36;a",
$1:function(a){var z
H.nS(a)
z=this.a
if(z.ch){z.ch=!1
z.kV()}}}}],["","",,Z,{"^":"",fO:{"^":"b;a,b",$iso1:1,p:{
dN:function(a,b,c){var z
H.j(c,"$isa",[P.o],"$asa")
z=a.createBuffer()
C.b.az(a,b,z)
C.b.es(a,b,new Int16Array(H.bu(c)),35044)
C.b.az(a,b,null)
return new Z.fO(b,z)}}},ec:{"^":"cY;a,b,c,d,e",
aH:function(a){var z,y,x
try{y=a.a
C.b.eC(y,this.e)
C.b.lc(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.a9(x)
y=P.p('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.l(z))
throw H.e(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},fP:{"^":"b;a",$iso2:1},c3:{"^":"b;a,0b,c,d",
shS:function(a){this.b=H.j(a,"$isa",[Z.c7],"$asa")},
al:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aH:function(a){var z,y
z=this.a
C.b.az(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aH(a)},
fq:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.eA(x,z[y].e)
C.b.az(x,this.a.a,null)},
aO:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
w=v.c
u=w.a
C.b.az(y,u,w.b)
C.b.k8(y,v.a,v.b,5123,0)
C.b.az(y,u,null)}},
fe:function(a){this.aH(a)
this.aO(a)
this.fq(a)},
i:function(a){var z,y,x,w,v,u
z=[P.m]
y=H.d([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v)C.a.h(y,x[v].i(0))
u=H.d([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.as(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.H(y,", ")+"\nAttrs:   "+C.a.H(u,", ")},
$iskv:1},ed:{"^":"b;0a",
si_:function(a){this.a=H.j(a,"$isB",[P.m,Z.c3],"$asB")},
$iskv:1},c7:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bm(this.c)+"'")+"]"}},b8:{"^":"b;a",
gdC:function(a){var z,y
z=this.a
y=(z&$.$get$aN().a)!==0?3:0
if((z&$.$get$aM().a)!==0)y+=3
if((z&$.$get$aL().a)!==0)y+=3
if((z&$.$get$aZ().a)!==0)y+=2
if((z&$.$get$b_().a)!==0)y+=3
if((z&$.$get$b9().a)!==0)y+=3
if((z&$.$get$bS().a)!==0)y+=4
if((z&$.$get$br().a)!==0)++y
return(z&$.$get$aY().a)!==0?y+4:y},
jM:function(a){var z,y,x
z=$.$get$aN()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aZ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b_()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b9()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$br()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aY()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fN()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b8))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.d([],[P.m])
y=this.a
if((y&$.$get$aN().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aL().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aZ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b_().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$b9().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bS().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$br().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aY().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.H(z,"|")},
p:{
aE:function(a){return new Z.b8(a)}}}}],["","",,D,{"^":"",d3:{"^":"b;"},bh:{"^":"b;0a,0b,0c,0d",
sap:function(a){this.a=H.j(a,"$isa",[{func:1,ret:-1,args:[D.x]}],"$asa")},
sbi:function(a){this.b=H.j(a,"$isa",[{func:1,ret:-1,args:[D.x]}],"$asa")},
h:function(a,b){var z={func:1,ret:-1,args:[D.x]}
H.i(b,z)
if(this.a==null)this.sap(H.d([],[z]))
z=this.a;(z&&C.a).h(z,b)},
a3:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[D.x]})
z=this.a
z=z==null?null:C.a.b4(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).a3(z,b)||!1}else y=!1
return y},
L:function(a){var z,y,x,w
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
return!0}if(!x)C.a.D(y,new D.il(z))
return!0},
ka:function(){return this.L(null)},
l0:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.L(y)}}},
ba:function(){return this.l0(!0,!1)},
p:{
K:function(){var z=new D.bh()
z.sap(null)
z.sbi(null)
z.c=null
z.d=0
return z}}},il:{"^":"h:37;a",
$1:function(a){var z
H.i(a,{func:1,ret:-1,args:[D.x]})
z=this.a.a
z.b
a.$1(z)}},x:{"^":"b;a,0b"},cs:{"^":"x;c,d,a,0b,$ti"},ct:{"^":"x;c,d,a,0b,$ti"},z:{"^":"x;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,O,{"^":"",
hx:function(a){var z=C.c.kr(a,"/")
if(z<=0)return a
return C.c.u(a,0,z)},
hm:function(a){var z,y,x
z=P.dp("([^\\s]+)",!0,!1)
$.hl=z
y=z.ki(a)
if(y==null)return H.d([],[P.m])
z=y.b
if(1>=z.length)return H.f(z,1)
x=z[1]
return H.d([x,C.c.fp(C.c.aw(a,x.length))],[P.m])},
cM:function(a){var z,y,x
z=H.d([],[P.m])
y=P.dp("([^\\s]+)",!0,!1)
$.hl=y
y=new H.lo(y,a,0)
for(;y.I();){x=y.d.b
if(1>=x.length)return H.f(x,1)
C.a.h(z,x[1])}return z},
b1:function(a){var z,y,x,w
z=O.cM(a)
y=H.d([],[P.y])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
C.a.h(y,P.n3(z[w],null))}return y},
cb:function(a,b,c){return O.jF(a,b,!1)},
jF:function(a,b,c){var z=0,y=P.a7([P.B,P.m,O.bi]),x,w=2,v,u=[],t,s,r,q,p,o,n,m
var $async$cb=P.a8(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:w=4
t=O.hx(a)
p=new O.mO(b)
p.saV(new H.aH(0,0,[P.m,O.bi]))
p.c=null
s=p
z=7
return P.ag(W.ew(a,null,null),$async$cb)
case 7:r=e
z=8
return P.ag(s.au(r,t,!1),$async$cb)
case 8:o=s.gaV()
x=o
z=1
break
w=2
z=6
break
case 4:w=3
m=v
q=H.a9(m)
P.ck(a+": "+H.l(q))
o=P.p(a+": "+H.l(q))
throw H.e(o)
z=6
break
case 3:z=2
break
case 6:case 1:return P.a5(x,y)
case 2:return P.a4(v,y)}})
return P.a6($async$cb,y)},
cc:function(a,b,c,d,e){return O.jK(a,b,c,d,!1)},
jK:function(a,b,c,d,e){var z=0,y=P.a7(E.a1),x,w=2,v,u=[],t,s,r,q,p,o,n,m,l
var $async$cc=P.a8(function(f,g){if(f===1){v=g
z=w}while(true)switch(z){case 0:w=4
t=O.hx(a)
p=new O.mP(b)
p.siC(H.d([],[O.dW]))
p.sj4(H.d([],[V.al]))
p.si5(H.d([],[V.a3]))
p.saV(new H.aH(0,0,[P.m,O.bi]))
p.f=d
p.r=""
o=O.eP()
n=o.r
n.sT(0,new V.W(0.35,0.35,0.35))
n=o.x
n.sT(0,new V.W(0.65,0.65,0.65))
p.x=o
p.y=null
p.z=null
p.Q=E.cp(null,!0,null,"",null,null)
p.bR()
s=p
z=7
return P.ag(W.ew(a,null,null),$async$cc)
case 7:r=g
z=8
return P.ag(s.au(r,t,!1),$async$cc)
case 8:o=s.gke()
x=o
z=1
break
w=2
z=6
break
case 4:w=3
l=v
q=H.a9(l)
P.ck(a+": "+H.l(q))
o=P.p(a+": "+H.l(q))
throw H.e(o)
z=6
break
case 3:z=2
break
case 6:case 1:return P.a5(x,y)
case 2:return P.a4(v,y)}})
return P.a6($async$cc,y)},
mO:{"^":"b;a,0aV:b<,0c",
saV:function(a){this.b=H.j(a,"$isB",[P.m,O.bi],"$asB")},
au:function(a,b,c){var z=0,y=P.a7(null),x=this
var $async$au=P.a8(function(d,e){if(d===1)return P.a4(e,y)
while(true)switch(z){case 0:z=2
return P.ag(x.at(H.d(a.split("\n"),[P.m]),b,!1),$async$au)
case 2:return P.a5(null,y)}})
return P.a6($async$au,y)},
at:function(a,b,c){H.j(a,"$isa",[P.m],"$asa")
return this.kS(a,b,!1)},
kS:function(a,b,c){var z=0,y=P.a7(null),x=1,w,v=[],u=this,t,s,r,q,p
var $async$at=P.a8(function(d,e){if(d===1){w=e
z=x}while(true)switch(z){case 0:t=0
case 2:if(!J.cS(t,a.length)){z=4
break}x=6
z=9
return P.ag(u.a8(C.a.j(a,t),b,!1),$async$at)
case 9:x=1
z=8
break
case 6:x=5
p=w
s=H.a9(p)
q=P.p("Line "+H.l(J.cl(t,1))+": "+H.l(s))
throw H.e(q)
z=8
break
case 5:z=1
break
case 8:case 3:t=J.cl(t,1)
z=2
break
case 4:return P.a5(null,y)
case 1:return P.a4(w,y)}})
return P.a6($async$at,y)},
a8:function(a,b,c){H.E(a)
return this.kQ(a,b,!1)},
kQ:function(a,b,c){var z=0,y=P.a7(null),x,w=2,v,u=[],t=this,s,r,q,p,o,n,m,l,k
var $async$a8=P.a8(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:w=4
s=J.e6(a,"#")
if(J.e4(s,0))a=J.e7(a,0,s)
a=J.cW(a)
if(J.ar(a)<=0){z=1
break}r=O.hm(a)
if(J.ar(r)<1){z=1
break}case 7:switch(J.R(r,0)){case"newmtl":z=9
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
case 9:p=J.R(r,1)
o=O.eP()
t.c=o
t.b.q(0,p,o)
z=1
break
case 10:n=O.b1(J.R(r,1))
t.c.r.sT(0,V.d6(n))
z=1
break
case 11:n=O.b1(J.R(r,1))
t.c.x.sT(0,V.d6(n))
z=1
break
case 12:n=O.b1(J.R(r,1))
t.c.z.sT(0,V.d6(n))
z=1
break
case 13:n=O.b1(J.R(r,1))
p=n.length
if(p!==1)H.q(P.p("Shininess may only have 1 number."))
o=t.c.z
if(0>=p){x=H.f(n,0)
z=1
break}m=n[0]
o.toString
if(m==null)m=100
if(m<=0)o.ev(0)
else if(o.c===C.d){o.c=C.i
o.cq()
o.bQ(100)
p=o.a
p.a=null
p.G(null)}o.bQ(m)
z=1
break
case 14:n=O.b1(J.R(r,1))
p=n.length
if(p!==1)H.q(P.p("Alpha may only have 1 number."))
o=t.c.db
if(0>=p){x=H.f(n,0)
z=1
break}o.sfw(0,n[0])
z=1
break
case 15:n=O.b1(J.R(r,1))
p=n.length
if(p!==1)H.q(P.p("Alpha may only have 1 number."))
o=t.c.db
if(0>=p){x=H.f(n,0)
z=1
break}p=n[0]
if(typeof p!=="number"){x=H.n(p)
z=1
break}o.sfw(0,1-p)
z=1
break
case 16:z=23
return P.ag(t.cL(J.R(r,1),b),$async$a8)
case 23:z=1
break
case 17:z=24
return P.ag(t.cM(J.R(r,1),b),$async$a8)
case 24:z=1
break
case 18:z=25
return P.ag(t.cN(J.R(r,1),b),$async$a8)
case 25:z=1
break
case 19:z=26
return P.ag(t.cK(J.R(r,1),b),$async$a8)
case 26:z=1
break
case 20:z=27
return P.ag(t.bL(J.R(r,1),b),$async$a8)
case 27:z=1
break
case 21:z=28
return P.ag(t.bL(J.R(r,1),b),$async$a8)
case 28:z=1
break
case 22:z=1
break
case 8:w=2
z=6
break
case 4:w=3
k=v
q=H.a9(k)
p=P.p('Line: "'+H.l(a)+'": '+H.l(q))
throw H.e(p)
z=6
break
case 3:z=2
break
case 6:case 1:return P.a5(x,y)
case 2:return P.a4(v,y)}})
return P.a6($async$a8,y)},
cL:function(a,b){var z=0,y=P.a7(null),x=this,w
var $async$cL=P.a8(function(c,d){if(c===1)return P.a4(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.r.sby(x.a.bp(w))
return P.a5(null,y)}})
return P.a6($async$cL,y)},
cM:function(a,b){var z=0,y=P.a7(null),x=this,w
var $async$cM=P.a8(function(c,d){if(c===1)return P.a4(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.x.sby(x.a.bp(w))
return P.a5(null,y)}})
return P.a6($async$cM,y)},
cN:function(a,b){var z=0,y=P.a7(null),x=this,w
var $async$cN=P.a8(function(c,d){if(c===1)return P.a4(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.z.sby(x.a.bp(w))
return P.a5(null,y)}})
return P.a6($async$cN,y)},
cK:function(a,b){var z=0,y=P.a7(null),x=this,w
var $async$cK=P.a8(function(c,d){if(c===1)return P.a4(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.db.sby(x.a.bp(w))
return P.a5(null,y)}})
return P.a6($async$cK,y)},
bL:function(a,b){var z=0,y=P.a7(null),x=this,w
var $async$bL=P.a8(function(c,d){if(c===1)return P.a4(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.Q.sby(x.a.bp(w))
return P.a5(null,y)}})
return P.a6($async$bL,y)}},
dW:{"^":"b;a,0b",
sld:function(a){this.b=H.j(a,"$isa",[F.C],"$asa")}},
mP:{"^":"b;a,0b,0c,0d,0aV:e<,0f,0r,0x,0y,0z,0Q",
siC:function(a){this.b=H.j(a,"$isa",[O.dW],"$asa")},
sj4:function(a){this.c=H.j(a,"$isa",[V.al],"$asa")},
si5:function(a){this.d=H.j(a,"$isa",[V.a3],"$asa")},
saV:function(a){this.e=H.j(a,"$isB",[P.m,O.bi],"$asB")},
gke:function(){var z,y,x
z=this.Q
y=z.y.a
x=y.length
if(x===1){if(0>=x)return H.f(y,0)
return y[0]}return z},
au:function(a,b,c){var z=0,y=P.a7(null),x=this
var $async$au=P.a8(function(d,e){if(d===1)return P.a4(e,y)
while(true)switch(z){case 0:z=2
return P.ag(x.at(H.d(a.split("\n"),[P.m]),b,!1),$async$au)
case 2:return P.a5(null,y)}})
return P.a6($async$au,y)},
at:function(a,b,c){H.j(a,"$isa",[P.m],"$asa")
return this.kT(a,b,!1)},
kT:function(a,b,c){var z=0,y=P.a7(null),x=1,w,v=[],u=this,t,s,r,q,p
var $async$at=P.a8(function(d,e){if(d===1){w=e
z=x}while(true)switch(z){case 0:t=0
case 2:if(!J.cS(t,a.length)){z=4
break}x=6
z=9
return P.ag(u.a8(C.a.j(a,t),b,!1),$async$at)
case 9:x=1
z=8
break
case 6:x=5
p=w
s=H.a9(p)
q=P.p("Line "+H.l(J.cl(t,1))+": "+H.l(s))
throw H.e(q)
z=8
break
case 5:z=1
break
case 8:case 3:t=J.cl(t,1)
z=2
break
case 4:return P.a5(null,y)
case 1:return P.a4(w,y)}})
return P.a6($async$at,y)},
a8:function(a,b,c){H.E(a)
return this.kR(a,b,!1)},
kR:function(a,b,c){var z=0,y=P.a7(null),x,w=2,v,u=[],t=this,s,r,q,p,o,n,m,l,k,j
var $async$a8=P.a8(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:w=4
s=J.e6(a,"#")
if(J.e4(s,0))a=J.e7(a,0,s)
a=J.cW(a)
if(J.ar(a)<=0){z=1
break}r=O.hm(a)
if(J.ar(r)<1){z=1
break}case 7:switch(J.R(r,0)){case"v":z=9
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
case 9:p=O.b1(J.R(r,1))
o=p.length
if(o<3)H.q(P.p("Positions must have at least 3 numbers."))
if(o>4)H.q(P.p("Positions must have at most than 4 numbers."))
if(o===4){if(3>=o){x=H.f(p,3)
z=1
break}o=p[3]
if(!$.t.$2(o,1))H.q(P.p("Currently, non-one w values in positions are not supported."))}o=t.b
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
l=new O.dW(new V.aA(l[0],l[1],l[2]))
l.sld(H.d([],[F.C]))
C.a.h(o,l)
z=1
break
case 10:p=O.b1(J.R(r,1))
o=p.length
if(o<2)H.q(P.p("Textures must have at least 2 numbers."))
if(o>3)H.q(P.p("Textures must have at most than 3 numbers."))
if(o===3){if(2>=o){x=H.f(p,2)
z=1
break}o=p[2]
if(!$.t.$2(o,0))H.q(P.p("Currently, non-zero z values in textures are not supported."))}o=t.c
n=p.length
if(0>=n){x=H.f(p,0)
z=1
break}m=p[0]
if(1>=n){x=H.f(p,1)
z=1
break}m=[m,p[1]]
C.a.h(o,new V.al(m[0],m[1]))
z=1
break
case 11:p=O.b1(J.R(r,1))
o=p.length
if(o!==3)H.q(P.p("Normals must have exactly 3 numbers."))
n=t.d
if(0>=o){x=H.f(p,0)
z=1
break}m=p[0]
if(1>=o){x=H.f(p,1)
z=1
break}l=p[1]
if(2>=o){x=H.f(p,2)
z=1
break}C.a.h(n,new V.a3(m,l,p[2]))
z=1
break
case 12:t.iG(J.R(r,1))
z=1
break
case 13:t.iF(J.R(r,1))
z=1
break
case 14:t.iE(J.R(r,1))
z=1
break
case 15:z=20
return P.ag(t.bM(J.R(r,1),b,!1),$async$a8)
case 20:z=1
break
case 16:o=J.R(r,1)
t.x=H.c(t.e.j(0,o),"$isbi")
t.bR()
z=1
break
case 17:t.r=H.E(J.R(r,1))
t.bR()
z=1
break
case 18:t.r=H.E(J.R(r,1))
t.bR()
z=1
break
case 19:z=1
break
case 8:w=2
z=6
break
case 4:w=3
j=v
q=H.a9(j)
o=P.p('Line: "'+H.l(a)+'": '+H.l(q))
throw H.e(o)
z=6
break
case 3:z=2
break
case 6:case 1:return P.a5(x,y)
case 2:return P.a4(v,y)}})
return P.a6($async$a8,y)},
bR:function(){var z,y,x
if(this.z==null||this.y.a.c.length!==0){z=F.af()
this.y=z
z=E.cp(null,!0,null,"",z,null)
this.z=z
this.Q.y.h(0,z)
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)C.a.sm(z[x].b,0)}this.z.sbb(this.x)
this.z.a=this.r},
cs:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=a.split("/")
y=z.length
if(0>=y)return H.f(z,0)
x=P.be(z[0],null,null)
w=this.b.length
if(typeof x!=="number")return x.F()
if(x<-w||x>w||x===0)throw H.e(P.p("The position index, "+x+", was out of range [-"+w+".."+w+"] or 0."))
if(x<0)x=w+x+1;--x
if(y>1){v=z[1]
if(v!=null&&v.length>0){u=P.be(v,null,null)
t=this.c
w=t.length
if(typeof u!=="number")return u.F()
if(u<-w||u>w||u===0)throw H.e(P.p("The texture index, "+u+", was out of range [-"+w+".."+w+"] or 0."))
if(u<0)u=w+u+1
s=u-1
if(s<0||s>=w)return H.f(t,s)
r=t[s]}else r=null}else r=null
if(y>2){v=z[2]
if(v!=null&&v.length>0){q=P.be(v,null,null)
y=this.d
w=y.length
if(typeof q!=="number")return q.F()
if(q<-w||q>w||q===0)throw H.e(P.p("The normal index, "+q+", was out of range [-"+w+".."+w+"] or 0."))
if(q<0)q=w+q+1
t=q-1
if(t<0||t>=w)return H.f(y,t)
p=y[t]}else p=null}else p=null
y=this.b
if(x<0||x>=y.length)return H.f(y,x)
o=y[x]
for(y=o.b,t=y.length,n=0;n<y.length;y.length===t||(0,H.A)(y),++n){m=y[n]
if(J.Q(m.y,r)&&J.Q(m.r,p))return m}m=F.bq(null,null,null,null,null,null,null,null,0)
m.sab(0,o.a)
if(!J.Q(m.y,r)){m.y=r
y=m.a
if(y!=null)y.a6()}m.sbs(p)
this.y.a.h(0,m)
C.a.h(o.b,m)
return m},
iG:function(a){var z,y,x,w
z=O.cM(a)
y=H.d([],[F.C])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
C.a.h(y,this.cs(z[w]))}this.y.b.jL(y)},
iF:function(a){var z,y,x,w
z=O.cM(a)
y=H.d([],[F.C])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
C.a.h(y,this.cs(z[w]))}this.y.c.jK(y)},
iE:function(a){var z,y,x,w
z=O.cM(a)
y=H.d([],[F.C])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
C.a.h(y,this.cs(z[w]))}this.y.d.jJ(y)},
bM:function(a,b,c){var z=0,y=P.a7(null),x=this,w
var $async$bM=P.a8(function(d,e){if(d===1)return P.a4(e,y)
while(true)switch(z){case 0:z=2
return P.ag(O.cb(b+"/"+a,x.a,!1),$async$bM)
case 2:w=e
x.e.jH(0,w)
return P.a5(null,y)}})
return P.a6($async$bM,y)}}}],["","",,X,{"^":"",ee:{"^":"b;a,b",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ee))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},eH:{"^":"b;a,b",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eH))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},jb:{"^":"b;0a,0b,0c,0d",
siD:function(a){this.d=H.j(a,"$isf9",[P.o],"$asf9")},
kM:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kI:function(a){this.c=a.b
this.d.a3(0,a.a)
return!1}},eM:{"^":"cw;x,y,c,d,e,a,0b"},jp:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
bg:function(a,b){var z,y,x,w,v,u,t,s,r
z=new P.ay(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=y.a
if(typeof t!=="number")return t.l()
y=y.b
if(typeof y!=="number")return y.l()
s=new V.al(t+x*w,y+v*u)
u=this.a.gb3()
r=new X.bM(a,V.b7(),this.x,this.y,this.z,u,s,z,this)
r.b=!0
this.z=z
this.x=s
return r},
dk:function(a,b){this.r=a.a
return!1},
bu:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.fL()
if(typeof z!=="number")return z.cj()
this.r=(z&~y)>>>0
return!1},
bt:function(a,b){var z=this.d
if(z==null)return!1
z.L(this.bg(a,b))
return!0},
kN:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gb3()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.di(new V.S(v*u,t*s),y,x,new P.ay(w,!1),this)
w.b=!0
z.L(w)
return!0},
io:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ay(Date.now(),!1)
y=this.f
x=new X.eM(c,a,this.a.gb3(),b,z,this)
x.b=!0
y.L(x)
this.y=z
this.x=V.b7()}},aR:{"^":"b;a,b,c",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aR))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bM:{"^":"cw;x,y,z,Q,ch,c,d,e,a,0b"},jE:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
cA:function(a,b,c){var z,y,x
z=new P.ay(Date.now(),!1)
y=this.a.gb3()
x=new X.bM(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
dk:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.L(this.cA(a,b,!0))
return!0},
bu:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.fL()
if(typeof z!=="number")return z.cj()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.L(this.cA(a,b,!0))
return!0},
bt:function(a,b){var z=this.d
if(z==null)return!1
z.L(this.cA(a,b,!1))
return!0},
kO:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gb3()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.di(new V.S(w*v,u*t),y,b,new P.ay(x,!1),this)
x.b=!0
z.L(x)
return!0},
geB:function(){var z=this.b
if(z==null){z=D.K()
this.b=z}return z},
gcg:function(){var z=this.c
if(z==null){z=D.K()
this.c=z}return z},
gf9:function(){var z=this.d
if(z==null){z=D.K()
this.d=z}return z}},di:{"^":"cw;x,c,d,e,a,0b"},cw:{"^":"x;"},fn:{"^":"cw;x,y,z,Q,ch,c,d,e,a,0b"},kF:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
bg:function(a,b){var z,y,x,w
H.j(a,"$isa",[V.al],"$asa")
z=new P.ay(Date.now(),!1)
y=a.length>0?a[0]:V.b7()
x=this.a.gb3()
w=new X.fn(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
kL:function(a){var z
H.j(a,"$isa",[V.al],"$asa")
z=this.b
if(z==null)return!1
z.L(this.bg(a,!0))
return!0},
kJ:function(a){var z
H.j(a,"$isa",[V.al],"$asa")
z=this.c
if(z==null)return!1
z.L(this.bg(a,!0))
return!0},
kK:function(a){var z
H.j(a,"$isa",[V.al],"$asa")
z=this.d
if(z==null)return!1
z.L(this.bg(a,!1))
return!0}},l1:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
shC:function(a){this.z=H.j(a,"$isa",[[P.dv,P.b]],"$asa")},
gb3:function(){var z=this.a
return V.f4(0,0,C.n.gew(z).c,C.n.gew(z).d)},
dV:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eH(z,new X.aR(y,a.altKey,a.shiftKey))},
aY:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aR(y,a.altKey,a.shiftKey)},
cR:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aR(y,a.altKey,a.shiftKey)},
aG:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.C()
v=z.top
if(typeof x!=="number")return x.C()
return new V.al(y-w,x-v)},
bj:function(a){return new V.S(a.movementX,a.movementY)},
cO:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.d([],[V.al])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
t=C.j.av(u.pageX)
C.j.av(u.pageY)
s=z.left
C.j.av(u.pageX)
C.a.h(y,new V.al(t-s,C.j.av(u.pageY)-z.top))}return y},
aD:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ee(z,new X.aR(y,a.altKey,a.shiftKey))},
cD:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.C()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.C()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
lE:[function(a){this.f=!0},"$1","gij",4,0,15],
ly:[function(a){this.f=!1},"$1","gib",4,0,15],
lB:[function(a){H.c(a,"$isaJ")
if(this.f&&this.cD(a))a.preventDefault()},"$1","gig",4,0,8],
lG:[function(a){var z
H.c(a,"$isbK")
if(!this.f)return
z=this.dV(a)
this.b.kM(z)},"$1","gil",4,0,20],
lF:[function(a){var z
H.c(a,"$isbK")
if(!this.f)return
z=this.dV(a)
this.b.kI(z)},"$1","gik",4,0,20],
lI:[function(a){var z,y,x,w
H.c(a,"$isaJ")
z=this.a
z.focus()
this.f=!0
this.aY(a)
if(this.x){y=this.aD(a)
x=this.bj(a)
if(this.d.dk(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aD(a)
w=this.aG(a)
if(this.c.dk(y,w))a.preventDefault()},"$1","gip",4,0,8],
lK:[function(a){var z,y,x
H.c(a,"$isaJ")
this.aY(a)
z=this.aD(a)
if(this.x){y=this.bj(a)
if(this.d.bu(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bu(z,x))a.preventDefault()},"$1","gir",4,0,8],
lD:[function(a){var z,y,x
H.c(a,"$isaJ")
if(!this.cD(a)){this.aY(a)
z=this.aD(a)
if(this.x){y=this.bj(a)
if(this.d.bu(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bu(z,x))a.preventDefault()}},"$1","gii",4,0,8],
lJ:[function(a){var z,y,x
H.c(a,"$isaJ")
this.aY(a)
z=this.aD(a)
if(this.x){y=this.bj(a)
if(this.d.bt(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bt(z,x))a.preventDefault()},"$1","giq",4,0,8],
lC:[function(a){var z,y,x
H.c(a,"$isaJ")
if(!this.cD(a)){this.aY(a)
z=this.aD(a)
if(this.x){y=this.bj(a)
if(this.d.bt(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bt(z,x))a.preventDefault()}},"$1","gih",4,0,8],
lL:[function(a){var z,y
H.c(a,"$isbT")
this.aY(a)
z=new V.S((a&&C.I).gk5(a),C.I.gk6(a)).v(0,180)
if(this.x){if(this.d.kN(z))a.preventDefault()
return}if(this.r)return
y=this.aG(a)
if(this.c.kO(z,y))a.preventDefault()},"$1","gis",4,0,63],
lM:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aD(this.y)
x=this.aG(this.y)
this.d.io(y,x,z)}},"$1","git",4,0,15],
lS:[function(a){var z
H.c(a,"$isbp")
this.a.focus()
this.f=!0
this.cR(a)
z=this.cO(a)
if(this.e.kL(z))a.preventDefault()},"$1","giA",4,0,16],
lQ:[function(a){var z
H.c(a,"$isbp")
this.cR(a)
z=this.cO(a)
if(this.e.kJ(z))a.preventDefault()},"$1","giy",4,0,16],
lR:[function(a){var z
H.c(a,"$isbp")
this.cR(a)
z=this.cO(a)
if(this.e.kK(z))a.preventDefault()},"$1","giz",4,0,16]}}],["","",,D,{"^":"",eq:{"^":"b;",$isac:1,$isaV:1},ac:{"^":"b;",$isaV:1},jd:{"^":"a_;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
shz:function(a){this.e=H.j(a,"$isa",[D.eq],"$asa")},
siB:function(a){this.f=H.j(a,"$isa",[D.eZ],"$asa")},
siY:function(a){this.r=H.j(a,"$isa",[D.fa],"$asa")},
sjd:function(a){this.x=H.j(a,"$isa",[D.fg],"$asa")},
sje:function(a){this.y=H.j(a,"$isa",[D.fh],"$asa")},
sjf:function(a){this.z=H.j(a,"$isa",[D.fi],"$asa")},
gB:function(){var z=this.Q
if(z==null){z=D.K()
this.Q=z}return z},
dI:function(a){var z=this.Q
if(!(z==null))z.L(a)},
im:[function(a){var z=this.ch
if(!(z==null))z.L(a)},function(){return this.im(null)},"lH","$1","$0","ge6",0,2,3],
lN:[function(a){var z,y,x
H.j(a,"$isu",[D.ac],"$asu")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.A)(a),++y){x=a[y]
if(x==null||this.hv(x))return!1}return!0},"$1","giv",4,0,43],
lv:[function(a,b){var z,y,x,w,v
z=D.ac
H.j(b,"$isu",[z],"$asu")
for(y=b.length,x=this.ge6(),w=0;w<b.length;b.length===y||(0,H.A)(b),++w){v=H.c(b[w],"$isac")
v.gB().h(0,x)}z=new D.cs(a,b,this,[z])
z.b=!0
this.dI(z)},"$2","gi8",8,0,21],
lP:[function(a,b){var z,y,x,w,v
z=D.ac
H.j(b,"$isu",[z],"$asu")
for(y=b.length,x=this.ge6(),w=0;w<b.length;b.length===y||(0,H.A)(b),++w){v=H.c(b[w],"$isac")
v.gB().a3(0,x)}z=new D.ct(a,b,this,[z])
z.b=!0
this.dI(z)},"$2","gix",8,0,21],
hv:function(a){var z=C.a.b4(this.e,a)
return z},
$asu:function(){return[D.ac]},
$asa_:function(){return[D.ac]}},eZ:{"^":"b;",$isac:1,$isaV:1},fa:{"^":"b;",$isac:1,$isaV:1},fg:{"^":"b;",$isac:1,$isaV:1},fh:{"^":"b;",$isac:1,$isaV:1},fi:{"^":"b;",$isac:1,$isaV:1}}],["","",,V,{"^":"",
o4:[function(a,b){if(typeof b!=="number")return b.C()
if(typeof a!=="number")return H.n(a)
return Math.abs(b-a)<=1e-9},"$2","jC",8,0,41],
nZ:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.bD(a-b,z)
return(a<0?a+z:a)+b},
J:function(a,b,c){if(a==null)return C.c.an("null",c)
return C.c.an(C.j.fo($.t.$2(a,0)?0:a,b),c+b+1)},
bA:function(a,b,c){var z,y,x,w,v,u
H.j(a,"$isa",[P.y],"$asa")
z=H.d([],[P.m])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.A)(a),++w){v=V.J(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.q(z,u,C.c.an(z[u],x))}return z},
e1:function(a,b){return C.j.l6(Math.pow(b,C.R.cb(Math.log(H.by(a))/Math.log(b))))},
W:{"^":"b;a,b,c",
l:function(a,b){var z,y,x
z=this.a+b.a
y=this.b+b.b
x=this.c+b.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.W(z,y,x)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"},
p:{
d6:function(a){var z,y,x
H.j(a,"$isa",[P.y],"$asa")
z=a.length
if(0>=z)return H.f(a,0)
y=a[0]
if(1>=z)return H.f(a,1)
x=a[1]
if(2>=z)return H.f(a,2)
z=a[2]
if(typeof y!=="number")return y.F()
if(y<0)y=0
else if(y>1)y=1
if(typeof x!=="number")return x.F()
if(x<0)x=0
else if(x>1)x=1
if(typeof z!=="number")return z.F()
if(z<0)z=0
else if(z>1)z=1
return new V.W(y,x,z)},
i0:function(a,b,c){var z,y,x,w,v,u,t,s
a*=6
z=C.j.cb(a)
y=a-z
x=b*(1-c)
w=b*(1-c*y)
v=b*(1-c*(1-y))
switch(z){case 0:if(b<0)u=0
else u=b>1?1:b
if(v<0)t=0
else t=v>1?1:v
if(x<0)s=0
else s=x>1?1:x
return new V.W(u,t,s)
case 1:if(w<0)u=0
else u=w>1?1:w
if(b<0)t=0
else t=b>1?1:b
if(x<0)s=0
else s=x>1?1:x
return new V.W(u,t,s)
case 2:if(x<0)u=0
else u=x>1?1:x
if(b<0)t=0
else t=b>1?1:b
if(v<0)s=0
else s=v>1?1:v
return new V.W(u,t,s)
case 3:if(x<0)u=0
else u=x>1?1:x
if(w<0)t=0
else t=w>1?1:w
if(b<0)s=0
else s=b>1?1:b
return new V.W(u,t,s)
case 4:if(v<0)u=0
else u=v>1?1:v
if(x<0)t=0
else t=x>1?1:x
if(b<0)s=0
else s=b>1?1:b
return new V.W(u,t,s)
default:if(b<0)u=0
else u=b>1?1:b
if(x<0)t=0
else t=x>1?1:x
if(w<0)s=0
else s=w>1?1:w
return new V.W(u,t,s)}}}},
O:{"^":"b;a,b,c,d",
l:function(a,b){var z,y,x,w
z=C.j.l(this.a,b.gb8())
y=C.j.l(this.b,b.gaQ())
x=C.j.l(this.c,b.gb0())
w=C.j.l(this.d,b.gm2(b))
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
if(w<0)w=0
else if(w>1)w=1
return new V.O(z,y,x,w)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
z=b.d
if(!$.t.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}},
eR:{"^":"b;a,b,c,d,e,f,r,x,y",
ac:function(a,b){var z=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.y])
return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eR))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
z=b.d
if(!$.t.$2(z,this.d))return!1
z=b.e
if(!$.t.$2(z,this.e))return!1
z=b.f
if(!$.t.$2(z,this.f))return!1
z=b.r
if(!$.t.$2(z,this.r))return!1
z=b.x
if(!$.t.$2(z,this.x))return!1
z=b.y
if(!$.t.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.y]
y=V.bA(H.d([this.a,this.d,this.r],z),3,0)
x=V.bA(H.d([this.b,this.e,this.x],z),3,0)
w=V.bA(H.d([this.c,this.f,this.y],z),3,0)
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
az:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ac:function(a,b){var z=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.y])
return z},
f7:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if(typeof r!=="number")return H.n(r)
q=this.d
if(typeof q!=="number")return q.k()
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
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.t.$2(a2,0))return V.ca()
a3=1/a2
a4=-w
a5=-i
return V.aQ((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
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
if(typeof t!=="number")return t.k()
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
if(typeof j!=="number")return H.n(j)
i=a7.x
if(typeof i!=="number")return H.n(i)
h=a7.ch
if(typeof h!=="number")return H.n(h)
g=a7.dx
f=this.e
if(typeof f!=="number")return f.k()
e=this.f
if(typeof e!=="number")return e.k()
d=this.r
if(typeof d!=="number")return d.k()
c=this.x
if(typeof c!=="number")return c.k()
b=this.y
if(typeof b!=="number")return b.k()
a=this.z
if(typeof a!=="number")return a.k()
a0=this.Q
if(typeof a0!=="number")return a0.k()
a1=this.ch
if(typeof a1!=="number")return a1.k()
a2=this.cx
a3=this.cy
a4=this.db
a5=this.dx
return V.aQ(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cf:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.a3(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bc:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
t=this.d
if(typeof t!=="number")return H.n(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.n(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.n(l)
return new V.aA(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.az))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
z=b.d
if(!$.t.$2(z,this.d))return!1
z=b.e
if(!$.t.$2(z,this.e))return!1
z=b.f
if(!$.t.$2(z,this.f))return!1
z=b.r
if(!$.t.$2(z,this.r))return!1
z=b.x
if(!$.t.$2(z,this.x))return!1
z=b.y
if(!$.t.$2(z,this.y))return!1
z=b.z
if(!$.t.$2(z,this.z))return!1
z=b.Q
if(!$.t.$2(z,this.Q))return!1
z=b.ch
if(!$.t.$2(z,this.ch))return!1
z=b.cx
if(!$.t.$2(z,this.cx))return!1
z=b.cy
if(!$.t.$2(z,this.cy))return!1
z=b.db
if(!$.t.$2(z,this.db))return!1
z=b.dx
if(!$.t.$2(z,this.dx))return!1
return!0},
i:function(a){return this.P()},
f_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.y]
y=V.bA(H.d([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bA(H.d([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bA(H.d([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bA(H.d([this.d,this.x,this.ch,this.dx],z),b,c)
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
P:function(){return this.f_("",3,0)},
E:function(a){return this.f_(a,3,0)},
p:{
ca:function(){var z=$.eU
if(z==null){z=V.aQ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eU=z}return z},
aQ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.az(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eT:function(a,b,c){return V.aQ(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
eS:function(a,b,c,d){return V.aQ(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)}}},
al:{"^":"b;a,b",
l:function(a,b){var z,y,x,w
z=this.a
y=b.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.n(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.n(w)
return new V.al(z+y,x+w)},
C:function(a,b){var z,y,x,w
z=this.a
y=b.a
if(typeof z!=="number")return z.C()
if(typeof y!=="number")return H.n(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.C()
if(typeof w!=="number")return H.n(w)
return new V.al(z-y,x-w)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.al))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"},
p:{
b7:function(){var z=$.f_
if(z==null){z=new V.al(0,0)
$.f_=z}return z}}},
aA:{"^":"b;a,b,c",
l:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.n(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.n(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.n(u)
return new V.aA(z+y,x+w,v+u)},
C:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.C()
if(typeof y!=="number")return H.n(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.C()
if(typeof w!=="number")return H.n(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.C()
if(typeof u!=="number")return H.n(u)
return new V.aA(z-y,x-w,v-u)},
v:function(a,b){var z,y,x
if($.t.$2(b,0))return V.dn()
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
x=this.c
if(typeof x!=="number")return x.v()
return new V.aA(z/b,y/b,x/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aA))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"},
p:{
dn:function(){var z=$.bP
if(z==null){z=new V.aA(0,0,0)
$.bP=z}return z}}},
f3:{"^":"b;a,b,c,d",
gaf:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f3))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
z=b.d
if(!$.t.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"},
p:{
f4:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f3(a,b,c,d)}}},
cz:{"^":"b;a,b,c,d,e,f",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cz))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
z=b.d
if(!$.t.$2(z,this.d))return!1
z=b.e
if(!$.t.$2(z,this.e))return!1
z=b.f
if(!$.t.$2(z,this.f))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+", "+V.J(this.e,3,0)+", "+V.J(this.f,3,0)+"]"},
p:{
f6:function(a,b,c,d,e,f){return new V.cz(a,b,c,d,e,f)},
f7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
if(a==null)return b
if(b==null)return a
z=a.a
y=b.a
x=Math.min(H.by(z),H.by(y))
w=a.b
v=b.b
u=Math.min(H.by(w),H.by(v))
t=a.c
s=b.c
r=Math.min(H.by(t),H.by(s))
q=a.d
if(typeof z!=="number")return z.l()
p=b.d
if(typeof y!=="number")return y.l()
o=Math.max(z+q,y+p)
p=a.e
if(typeof w!=="number")return w.l()
y=b.e
if(typeof v!=="number")return v.l()
n=Math.max(w+p,v+y)
y=a.f
if(typeof t!=="number")return t.l()
v=b.f
if(typeof s!=="number")return s.l()
return new V.cz(x,u,r,o-x,n-u,Math.max(t+y,s+v)-r)}}},
S:{"^":"b;a,b",
kt:[function(a){return Math.sqrt(this.K(this))},"$0","gm",1,0,22],
K:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.n(w)
return z*y+x*w},
l:function(a,b){var z,y,x
z=this.a
y=b.gaL(b)
if(typeof z!=="number")return z.l()
y=C.j.l(z,y)
z=this.b
x=b.gaM(b)
if(typeof z!=="number")return z.l()
return new V.S(y,C.j.l(z,x))},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.S(z*b,y*b)},
v:function(a,b){var z,y
if($.t.$2(b,0)){z=$.fE
if(z==null){z=new V.S(0,0)
$.fE=z}return z}z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.S(z/b,y/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}},
a3:{"^":"b;a,b,c",
kt:[function(a){return Math.sqrt(this.K(this))},"$0","gm",1,0,22],
K:function(a){var z,y,x,w,v,u
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
aK:function(a){var z,y,x,w,v,u
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
return new V.a3(z*y-x*w,x*v-u*y,u*w-z*v)},
l:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.n(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.n(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.n(u)
return new V.a3(z+y,x+w,v+u)},
M:function(a){var z,y,x
z=this.a
if(typeof z!=="number")return z.M()
y=this.b
if(typeof y!=="number")return y.M()
x=this.c
if(typeof x!=="number")return x.M()
return new V.a3(-z,-y,-x)},
v:function(a,b){var z,y,x
if($.t.$2(b,0))return V.U()
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
x=this.c
if(typeof x!=="number")return x.v()
return new V.a3(z/b,y/b,x/b)},
f8:function(){if(!$.t.$2(0,this.a))return!1
if(!$.t.$2(0,this.b))return!1
if(!$.t.$2(0,this.c))return!1
return!0},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"},
p:{
U:function(){var z=$.fI
if(z==null){z=new V.a3(0,0,0)
$.fI=z}return z},
fK:function(){var z=$.fG
if(z==null){z=new V.a3(1,0,0)
$.fG=z}return z},
fJ:function(){var z=$.fF
if(z==null){z=new V.a3(0,0,-1)
$.fF=z}return z}}}}],["","",,U,{"^":"",i1:{"^":"d3;0a,0b,0c,0d,0e,0f,0r,0x,0y",
ct:function(a){var z=V.nZ(a,this.c,this.b)
return z},
gB:function(){var z=this.y
if(z==null){z=D.K()
this.y=z}return z},
V:function(a){var z=this.y
if(!(z==null))z.L(a)},
sdt:function(a,b){},
sdh:function(a){var z,y
z=this.b
if(!$.t.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.ct(z)}z=new D.z("maximumLocation",y,this.b,this,[P.y])
z.b=!0
this.V(z)}},
sdj:function(a){var z,y
z=this.c
if(!$.t.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.ct(z)}z=new D.z("minimumLocation",y,this.c,this,[P.y])
z.b=!0
this.V(z)}},
sab:function(a,b){var z,y
b=this.ct(b)
z=this.d
if(!$.t.$2(z,b)){y=this.d
this.d=b
z=new D.z("location",y,b,this,[P.y])
z.b=!0
this.V(z)}},
sdi:function(a){var z,y,x
z=this.e
if(!$.t.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.z("maximumVelocity",y,a,this,[P.y])
z.b=!0
this.V(z)}},
sX:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.t.$2(z,a)){x=this.f
this.f=a
z=new D.z("velocity",x,a,this,[P.y])
z.b=!0
this.V(z)}},
sd2:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.t.$2(z,a)){y=this.x
this.x=a
z=new D.z("dampening",y,a,this,[P.y])
z.b=!0
this.V(z)}},
ao:function(a){var z,y,x,w
z=this.f
if($.t.$2(z,0)){z=this.r
z=!$.t.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sab(0,this.d+y*a)
z=this.x
if(!$.t.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sX(y)}},
p:{
d8:function(){var z=new U.i1()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ei:{"^":"ap;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.K()
this.b=z}return z},
bd:function(a,b){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ei))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}},ev:{"^":"a_;0e,0f,0r,0a,0b,0c,0d",
gB:function(){var z=this.e
if(z==null){z=D.K()
this.e=z}return z},
V:[function(a){var z
H.c(a,"$isx")
z=this.e
if(!(z==null))z.L(a)},function(){return this.V(null)},"aq","$1","$0","gaW",0,2,3],
lu:[function(a,b){var z,y,x,w,v,u,t,s
z=U.ap
H.j(b,"$isu",[z],"$asu")
for(y=b.length,x=this.gaW(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){s=t.gB()
s.toString
H.i(x,w)
if(s.a==null)s.sap(H.d([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.cs(a,b,this,[z])
z.b=!0
this.V(z)},"$2","gi7",8,0,23],
lO:[function(a,b){var z,y,x,w,v
z=U.ap
H.j(b,"$isu",[z],"$asu")
for(y=b.length,x=this.gaW(),w=0;w<b.length;b.length===y||(0,H.A)(b),++w){v=b[w]
if(v!=null)v.gB().a3(0,x)}z=new D.ct(a,b,this,[z])
z.b=!0
this.V(z)},"$2","giw",8,0,23],
bd:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.F()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.at(z,z.length,0,[H.r(z,0)]),x=null;z.I();){y=z.d
if(y!=null){w=y.bd(a,b)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.ca():x
z=this.e
if(!(z==null))z.ba()}return this.f},
A:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ev))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.Q(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asu:function(){return[U.ap]},
$asa_:function(){return[U.ap]},
$isap:1},ap:{"^":"d3;"},l2:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gB:function(){var z=this.cy
if(z==null){z=D.K()
this.cy=z}return z},
V:[function(a){var z
H.c(a,"$isx")
z=this.cy
if(!(z==null))z.L(a)},function(){return this.V(null)},"aq","$1","$0","gaW",0,2,3],
bk:function(a){if(this.a!=null)return!1
this.a=a
a.c.geB().h(0,this.gcE())
this.a.c.gf9().h(0,this.gcF())
this.a.c.gcg().h(0,this.gcG())
return!0},
i0:[function(a){H.c(a,"$isx")
if(!J.Q(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gcE",4,0,5],
i1:[function(a){var z,y,x,w,v,u,t
a=H.k(H.c(a,"$isx"),"$isbM")
if(!this.y)return
if(this.x){z=a.d.C(0,a.y)
z=new V.S(z.a,z.b)
z=z.K(z)
y=this.r
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.C(0,a.y)
z=new V.S(y.a,y.b).k(0,2).v(0,z.gaf())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.n(x)
y.sX(z*10*x)}else{z=a.c
y=a.d
x=y.C(0,a.y)
w=new V.S(x.a,x.b).k(0,2).v(0,z.gaf())
x=this.b
v=w.a
if(typeof v!=="number")return v.M()
u=this.e
if(typeof u!=="number")return H.n(u)
t=this.z
if(typeof t!=="number")return H.n(t)
x.sab(0,-v*u+t)
this.b.sX(0)
y=y.C(0,a.z)
this.Q=new V.S(y.a,y.b).k(0,2).v(0,z.gaf())}this.aq()},"$1","gcF",4,0,5],
i2:[function(a){var z,y,x
H.c(a,"$isx")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.K(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.n(x)
z.sX(y*10*x)
this.aq()}},"$1","gcG",4,0,5],
bd:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.F()
if(z<y){this.ch=y
x=a.y
this.b.ao(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aQ(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isap:1},l3:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gB:function(){var z=this.fx
if(z==null){z=D.K()
this.fx=z}return z},
V:[function(a){var z
H.c(a,"$isx")
z=this.fx
if(!(z==null))z.L(a)},function(){return this.V(null)},"aq","$1","$0","gaW",0,2,3],
bk:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.geB().h(0,this.gcE())
this.a.c.gf9().h(0,this.gcF())
this.a.c.gcg().h(0,this.gcG())
z=this.a.d
y=z.f
if(y==null){y=D.K()
z.f=y
z=y}else z=y
z.h(0,this.ghY())
z=this.a.d
y=z.d
if(y==null){y=D.K()
z.d=y
z=y}else z=y
z.h(0,this.ghZ())
z=this.a.e
y=z.b
if(y==null){y=D.K()
z.b=y
z=y}else z=y
z.h(0,this.gj8())
z=this.a.e
y=z.d
if(y==null){y=D.K()
z.d=y
z=y}else z=y
z.h(0,this.gj7())
z=this.a.e
y=z.c
if(y==null){y=D.K()
z.c=y
z=y}else z=y
z.h(0,this.gj6())
return!0},
ay:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.M()
z=-z}if(this.r){if(typeof y!=="number")return y.M()
y=-y}return new V.S(z,y)},
i0:[function(a){a=H.k(H.c(a,"$isx"),"$isbM")
if(!J.Q(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gcE",4,0,5],
i1:[function(a){var z,y,x,w,v,u,t
a=H.k(H.c(a,"$isx"),"$isbM")
if(!this.cx)return
if(this.ch){z=a.d.C(0,a.y)
z=new V.S(z.a,z.b)
z=z.K(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.C(0,a.y)
z=this.ay(new V.S(y.a,y.b).k(0,2).v(0,z.gaf()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.C(0,a.y)
w=this.ay(new V.S(x.a,x.b).k(0,2).v(0,z.gaf()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sab(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sab(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.C(0,a.z)
this.dx=this.ay(new V.S(y.a,y.b).k(0,2).v(0,z.gaf()))}this.aq()},"$1","gcF",4,0,5],
i2:[function(a){var z,y,x
H.c(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.K(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sX(-y*10*z)
this.aq()}},"$1","gcG",4,0,5],
lq:[function(a){if(H.k(H.c(a,"$isx"),"$iseM").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ghY",4,0,5],
lr:[function(a){var z,y,x,w,v,u,t
a=H.k(H.c(a,"$isx"),"$isbM")
if(!J.Q(this.d,a.x.b))return
z=a.c
y=a.d
x=y.C(0,a.y)
w=this.ay(new V.S(x.a,x.b).k(0,2).v(0,z.gaf()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sab(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sab(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.C(0,a.z)
this.dx=this.ay(new V.S(y.a,y.b).k(0,2).v(0,z.gaf()))
this.aq()},"$1","ghZ",4,0,5],
lY:[function(a){H.c(a,"$isx")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gj8",4,0,5],
lX:[function(a){var z,y,x,w,v,u,t
a=H.k(H.c(a,"$isx"),"$isfn")
if(!this.cx)return
if(this.ch){z=a.d.C(0,a.y)
z=new V.S(z.a,z.b)
z=z.K(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.C(0,a.y)
z=this.ay(new V.S(y.a,y.b).k(0,2).v(0,z.gaf()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.C(0,a.y)
w=this.ay(new V.S(x.a,x.b).k(0,2).v(0,z.gaf()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sab(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sab(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.C(0,a.z)
this.dx=this.ay(new V.S(y.a,y.b).k(0,2).v(0,z.gaf()))}this.aq()},"$1","gj7",4,0,5],
lW:[function(a){var z,y,x
H.c(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.K(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sX(-y*10*z)
this.aq()}},"$1","gj6",4,0,5],
bd:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.F()
if(z<y){this.dy=y
x=a.y
this.c.ao(x)
this.b.ao(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aQ(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aQ(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isap:1},l4:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gB:function(){var z=this.r
if(z==null){z=D.K()
this.r=z}return z},
V:function(a){var z=this.r
if(!(z==null))z.L(a)},
bk:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.K()
z.e=y
z=y}else z=y
y=this.gi3()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.K()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
ls:[function(a){var z,y,x,w
H.c(a,"$isx")
if(!J.Q(this.b,this.a.b.c))return
H.k(a,"$isdi")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.z("zoom",z,w,this,[P.y])
z.b=!0
this.V(z)}},"$1","gi3",4,0,5],
bd:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.eS(x,x,x,1)}return this.f},
$isap:1}}],["","",,M,{"^":"",ij:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
shs:function(a,b){this.d=H.j(b,"$isa_",[E.a1],"$asa_")},
aS:[function(a){var z
H.c(a,"$isx")
z=this.x
if(!(z==null))z.L(a)},function(){return this.aS(null)},"lf","$1","$0","gax",0,2,3],
lz:[function(a,b){var z,y,x,w,v,u,t,s
z=E.a1
H.j(b,"$isu",[z],"$asu")
for(y=b.length,x=this.gax(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.ga7()==null){s=new D.bh()
s.sap(null)
s.sbi(null)
s.c=null
s.d=0
t.sa7(s)}s=t.ga7()
s.toString
H.i(x,w)
if(s.a==null)s.sap(H.d([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.cs(a,b,this,[z])
z.b=!0
this.aS(z)},"$2","gic",8,0,10],
lA:[function(a,b){var z,y,x,w,v,u
z=E.a1
H.j(b,"$isu",[z],"$asu")
for(y=b.length,x=this.gax(),w=0;w<b.length;b.length===y||(0,H.A)(b),++w){v=b[w]
if(v!=null){if(v.ga7()==null){u=new D.bh()
u.sap(null)
u.sbi(null)
u.c=null
u.d=0
v.sa7(u)}v.ga7().a3(0,x)}}z=new D.ct(a,b,this,[z])
z.b=!0
this.aS(z)},"$2","gie",8,0,10],
sbb:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gB().a3(0,this.gax())
y=this.c
this.c=a
if(a!=null)a.gB().h(0,this.gax())
z=new D.z("technique",y,this.c,this,[O.bR])
z.b=!0
this.aS(z)}},
gB:function(){var z=this.x
if(z==null){z=D.K()
this.x=z}return z},
aO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
a.fj(this.c)
z=this.b
z.toString
y=a.a
C.b.jO(y,36160,null)
C.b.aA(y,2884)
C.b.aA(y,2929)
C.b.k7(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.n(x)
t=C.j.av(u*x)
u=v.b
if(typeof w!=="number")return H.n(w)
s=C.j.av(u*w)
u=C.j.av(v.c*x)
a.c=u
v=C.j.av(v.d*w)
a.d=v
C.b.le(y,t,s,u,v)
C.b.jR(y,z.c)
z=z.a
C.b.jQ(y,z.a,z.b,z.c,z.d)
C.b.jP(y,16640)
z=this.a
y=a.c
v=a.d
u=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(u*0.5)
n=V.aQ(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.fi(n)
y=$.eY
if(y==null){y=V.dn()
v=$.fH
if(v==null){v=new V.a3(0,1,0)
$.fH=v}u=V.fJ()
m=u.v(0,Math.sqrt(u.K(u)))
v=v.aK(m)
l=v.v(0,Math.sqrt(v.K(v)))
k=m.aK(l)
j=new V.a3(y.a,y.b,y.c)
i=l.M(0).K(j)
h=k.M(0).K(j)
g=m.M(0).K(j)
y=V.aQ(l.a,k.a,m.a,i,l.b,k.b,m.b,h,l.c,k.c,m.c,g,0,0,0,1)
$.eY=y
f=y}else f=y
z=z.b
if(z!=null){e=z.a
if(e!=null)f=e.k(0,f)}a.db.fi(f)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.r(z,0)]);z.I();)z.d.ao(a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.r(z,0)]);z.I();)z.d.aO(a)
this.a.toString
a.cy.dl()
a.db.dl()
this.b.toString
a.fg()},
$isof:1}}],["","",,A,{"^":"",e8:{"^":"b;a,b,c"},hO:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
kb:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
C.b.eC(w.a,w.c)}},
ez:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
C.b.eA(w.a,w.c)}}},eA:{"^":"cA;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,a,b,0c,0d,0e,0f,0r,0x,0y"},eQ:{"^":"cA;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aB,0as,0bX,0eD,0bY,0bZ,0eE,0eF,0c_,0c0,0eG,0eH,0c1,0c2,0eI,0eJ,0c3,0eK,0eL,0c4,0eM,0eN,0c5,0c6,0c7,0eO,0eP,0c8,0c9,0eQ,0eR,0ca,0eS,0d4,0eT,0d5,0eU,0d6,0eV,0d7,0eW,0d8,0eX,0d9,a,b,0c,0d,0e,0f,0r,0x,0y",
shk:function(a){this.r1=H.j(a,"$isa",[A.au],"$asa")},
sh2:function(a){this.d4=H.j(a,"$isa",[A.dD],"$asa")},
sh3:function(a){this.d5=H.j(a,"$isa",[A.dF],"$asa")},
sh4:function(a){this.d6=H.j(a,"$isa",[A.dG],"$asa")},
sh5:function(a){this.d7=H.j(a,"$isa",[A.dH],"$asa")},
sh6:function(a){this.d8=H.j(a,"$isa",[A.dI],"$asa")},
sh7:function(a){this.d9=H.j(a,"$isa",[A.dJ],"$asa")},
fU:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.aB("")
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
a1.jm(z)
a1.jt(z)
a1.jn(z)
a1.jB(z)
a1.jC(z)
a1.jv(z)
a1.jG(z)
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
z=new P.aB("")
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
v.jq(z)
v.jl(z)
v.jo(z)
v.jr(z)
v.jz(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.jx(z)
v.jy(z)}v.ju(z)
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
p=H.d([],[P.m])
if(v.b!==C.d)C.a.h(p,"ambient()")
if(v.c!==C.d)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.d)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.d)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.H(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.jp(z)
v.jw(z)
v.jA(z)
v.jD(z)
v.jE(z)
v.jF(z)
v.js(z)}r=z.a+="// === Main ===\n"
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
o=H.d([],[P.m])
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
n="vec4("+C.a.H(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.f6(x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.k(this.y.n(0,"invViewMat"),"$isau")
if(y)this.dy=H.k(this.y.n(0,"objMat"),"$isau")
if(w)this.fr=H.k(this.y.n(0,"viewObjMat"),"$isau")
this.fy=H.k(this.y.n(0,"projViewObjMat"),"$isau")
if(a1.x2)this.k1=H.k(this.y.n(0,"txt2DMat"),"$isdE")
if(a1.y1)this.k2=H.k(this.y.n(0,"txtCubeMat"),"$isau")
if(a1.y2)this.k3=H.k(this.y.n(0,"colorMat"),"$isau")
this.shk(H.d([],[A.au]))
y=a1.aB
if(y>0){this.k4=H.c(this.y.n(0,"bendMatCount"),"$isH")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.q(P.p("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(l,"$isau"))}}y=a1.a
if(y!==C.d){this.r2=H.k(this.y.n(0,"emissionClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.f:this.rx=H.k(this.y.n(0,"emissionTxt"),"$isaC")
this.x1=H.k(this.y.n(0,"nullEmissionTxt"),"$isH")
break
case C.h:this.ry=H.k(this.y.n(0,"emissionTxt"),"$isaD")
this.x1=H.k(this.y.n(0,"nullEmissionTxt"),"$isH")
break}}y=a1.b
if(y!==C.d){this.x2=H.k(this.y.n(0,"ambientClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.f:this.y1=H.k(this.y.n(0,"ambientTxt"),"$isaC")
this.aB=H.k(this.y.n(0,"nullAmbientTxt"),"$isH")
break
case C.h:this.y2=H.k(this.y.n(0,"ambientTxt"),"$isaD")
this.aB=H.k(this.y.n(0,"nullAmbientTxt"),"$isH")
break}}y=a1.c
if(y!==C.d){this.as=H.k(this.y.n(0,"diffuseClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.f:this.bX=H.k(this.y.n(0,"diffuseTxt"),"$isaC")
this.bY=H.k(this.y.n(0,"nullDiffuseTxt"),"$isH")
break
case C.h:this.eD=H.k(this.y.n(0,"diffuseTxt"),"$isaD")
this.bY=H.k(this.y.n(0,"nullDiffuseTxt"),"$isH")
break}}y=a1.d
if(y!==C.d){this.bZ=H.k(this.y.n(0,"invDiffuseClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.f:this.eE=H.k(this.y.n(0,"invDiffuseTxt"),"$isaC")
this.c_=H.k(this.y.n(0,"nullInvDiffuseTxt"),"$isH")
break
case C.h:this.eF=H.k(this.y.n(0,"invDiffuseTxt"),"$isaD")
this.c_=H.k(this.y.n(0,"nullInvDiffuseTxt"),"$isH")
break}}y=a1.e
if(y!==C.d){this.c2=H.k(this.y.n(0,"shininess"),"$isY")
this.c0=H.k(this.y.n(0,"specularClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.f:this.eG=H.k(this.y.n(0,"specularTxt"),"$isaC")
this.c1=H.k(this.y.n(0,"nullSpecularTxt"),"$isH")
break
case C.h:this.eH=H.k(this.y.n(0,"specularTxt"),"$isaD")
this.c1=H.k(this.y.n(0,"nullSpecularTxt"),"$isH")
break}}switch(a1.f){case C.d:break
case C.i:break
case C.f:this.eI=H.k(this.y.n(0,"bumpTxt"),"$isaC")
this.c3=H.k(this.y.n(0,"nullBumpTxt"),"$isH")
break
case C.h:this.eJ=H.k(this.y.n(0,"bumpTxt"),"$isaD")
this.c3=H.k(this.y.n(0,"nullBumpTxt"),"$isH")
break}if(a1.dy){this.eK=H.k(this.y.n(0,"envSampler"),"$isaD")
this.eL=H.k(this.y.n(0,"nullEnvTxt"),"$isH")
y=a1.r
if(y!==C.d){this.c4=H.k(this.y.n(0,"reflectClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.f:this.eM=H.k(this.y.n(0,"reflectTxt"),"$isaC")
this.c5=H.k(this.y.n(0,"nullReflectTxt"),"$isH")
break
case C.h:this.eN=H.k(this.y.n(0,"reflectTxt"),"$isaD")
this.c5=H.k(this.y.n(0,"nullReflectTxt"),"$isH")
break}}y=a1.x
if(y!==C.d){this.c6=H.k(this.y.n(0,"refraction"),"$isY")
this.c7=H.k(this.y.n(0,"refractClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.f:this.eO=H.k(this.y.n(0,"refractTxt"),"$isaC")
this.c8=H.k(this.y.n(0,"nullRefractTxt"),"$isH")
break
case C.h:this.eP=H.k(this.y.n(0,"refractTxt"),"$isaD")
this.c8=H.k(this.y.n(0,"nullRefractTxt"),"$isH")
break}}}y=a1.y
if(y!==C.d){this.c9=H.k(this.y.n(0,"alpha"),"$isY")
switch(y){case C.d:break
case C.i:break
case C.f:this.eQ=H.k(this.y.n(0,"alphaTxt"),"$isaC")
this.ca=H.k(this.y.n(0,"nullAlphaTxt"),"$isH")
break
case C.h:this.eR=H.k(this.y.n(0,"alphaTxt"),"$isaD")
this.ca=H.k(this.y.n(0,"nullAlphaTxt"),"$isH")
break}}this.sh2(H.d([],[A.dD]))
this.sh3(H.d([],[A.dF]))
this.sh4(H.d([],[A.dG]))
this.sh5(H.d([],[A.dH]))
this.sh6(H.d([],[A.dI]))
this.sh7(H.d([],[A.dJ]))
if(a1.k2){y=a1.z
if(y>0){this.eS=H.c(this.y.n(0,"dirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isG")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isG")
x=this.d4;(x&&C.a).h(x,new A.dD(m,l,k))}}y=a1.Q
if(y>0){this.eT=H.c(this.y.n(0,"pntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isG")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isG")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isG")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isY")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isY")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isY")
x=this.d5;(x&&C.a).h(x,new A.dF(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.eU=H.c(this.y.n(0,"spotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isG")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isG")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isG")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isG")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isY")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isY")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isY")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isY")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isY")
x=this.d6;(x&&C.a).h(x,new A.dG(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.eV=H.c(this.y.n(0,"txtDirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isG")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isG")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isG")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isG")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isG")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isH")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isaC")
x=this.d7;(x&&C.a).h(x,new A.dH(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.eW=H.c(this.y.n(0,"txtPntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isG")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isG")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isdE")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isG")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isH")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isY")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isY")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isY")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isaD")
x=this.d8;(x&&C.a).h(x,new A.dI(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.eX=H.c(this.y.n(0,"txtSpotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isG")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isG")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isG")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isG")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isG")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isH")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isG")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isY")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isY")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isY")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isY")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isY")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isaC")
x=this.d9;(x&&C.a).h(x,new A.dJ(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ar:function(a,b,c){if(c==null||!c.d)C.b.S(b.a,b.d,1)
else{a.fN(c)
C.b.S(b.a,b.d,0)}},
aj:function(a,b,c){C.b.S(b.a,b.d,1)},
p:{
jw:function(a,b){var z,y
z=a.as
y=new A.eQ(b,z)
y.dG(b,z)
y.fU(a,b)
return y}}},jz:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aB,as,bX",
jm:function(a){var z,y,x
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
jt:function(a){var z
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
jn:function(a){var z
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
jB:function(a){var z,y
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
jC:function(a){var z,y
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
jv:function(a){var z
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
jG:function(a){var z
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
if(b===C.d)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.c.aw(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
jq:function(a){var z,y
z=this.a
if(z===C.d)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aE(a,z,"emission")
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
jl:function(a){var z,y
z=this.b
if(z===C.d)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aE(a,z,"ambient")
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
jo:function(a){var z,y
z=this.c
if(z===C.d)return
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
jr:function(a){var z,y
z=this.d
if(z===C.d)return
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
jz:function(a){var z,y
z=this.e
if(z===C.d)return
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
ju:function(a){var z,y
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
jx:function(a){var z,y
z=this.r
if(z===C.d)return
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
jy:function(a){var z,y
z=this.x
if(z===C.d)return
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
jp:function(a){var z,y
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
jw:function(a){var z,y
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
jA:function(a){var z,y
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
jD:function(a){var z,y,x
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
jE:function(a){var z,y,x
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
jF:function(a){var z,y,x
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
js:function(a){var z
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
i:function(a){return this.as}},dD:{"^":"b;a,b,c"},dH:{"^":"b;a,b,c,d,e,f,r,x"},dF:{"^":"b;a,b,c,d,e,f,r"},dI:{"^":"b;a,b,c,d,e,f,r,x,y,z"},dG:{"^":"b;a,b,c,d,e,f,r,x,y,z"},dJ:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cA:{"^":"cY;",
dG:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
f6:function(a,b){var z,y,x
this.c=a
this.d=b
this.e=this.dW(a,35633)
this.f=this.dW(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
C.b.eq(z,y,this.e)
C.b.eq(z,this.r,this.f)
C.b.ku(z,this.r)
if(!H.hs(C.b.cm(z,this.r,35714))){x=C.b.fG(z,this.r)
C.b.k_(z,this.r)
H.q(P.p("Failed to link shader: "+H.l(x)))}this.iS()
this.iU()},
aH:function(a){C.b.ds(a.a,this.r)
this.x.kb()},
dW:function(a,b){var z,y,x
z=this.a
y=C.b.jY(z,b)
C.b.fO(z,y,a)
C.b.jS(z,y)
if(!H.hs(C.b.fJ(z,y,35713))){x=C.b.fI(z,y)
C.b.k0(z,y)
throw H.e(P.p("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
iS:function(){var z,y,x,w,v,u
z=H.d([],[A.e8])
y=this.a
x=H.ai(C.b.cm(y,this.r,35721))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=C.b.fC(y,this.r,w)
u=C.b.fE(y,this.r,v.name)
C.a.h(z,new A.e8(y,v.name,u))}this.x=new A.hO(z)},
iU:function(){var z,y,x,w,v,u
z=H.d([],[A.an])
y=this.a
x=H.ai(C.b.cm(y,this.r,35718))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=C.b.fD(y,this.r,w)
u=C.b.fK(y,this.r,v.name)
C.a.h(z,this.jZ(v.type,v.size,v.name,u))}this.y=new A.kO(z)},
aU:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.H(z,y,b,c)
else return A.dB(z,y,b,a,c)},
hw:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aC(z,y,b,c)
else return A.dB(z,y,b,a,c)},
hx:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aD(z,y,b,c)
else return A.dB(z,y,b,a,c)},
bS:function(a,b){return new P.fU(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
jZ:function(a,b,c,d){switch(a){case 5120:return this.aU(b,c,d)
case 5121:return this.aU(b,c,d)
case 5122:return this.aU(b,c,d)
case 5123:return this.aU(b,c,d)
case 5124:return this.aU(b,c,d)
case 5125:return this.aU(b,c,d)
case 5126:return new A.Y(this.a,this.r,c,d)
case 35664:return new A.kK(this.a,this.r,c,d)
case 35665:return new A.G(this.a,this.r,c,d)
case 35666:return new A.dC(this.a,this.r,c,d)
case 35667:return new A.kL(this.a,this.r,c,d)
case 35668:return new A.kM(this.a,this.r,c,d)
case 35669:return new A.kN(this.a,this.r,c,d)
case 35674:return new A.kQ(this.a,this.r,c,d)
case 35675:return new A.dE(this.a,this.r,c,d)
case 35676:return new A.au(this.a,this.r,c,d)
case 35678:return this.hw(b,c,d)
case 35680:return this.hx(b,c,d)
case 35670:throw H.e(this.bS("BOOL",c))
case 35671:throw H.e(this.bS("BOOL_VEC2",c))
case 35672:throw H.e(this.bS("BOOL_VEC3",c))
case 35673:throw H.e(this.bS("BOOL_VEC4",c))
default:throw H.e(P.p("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},co:{"^":"b;a,b",
i:function(a){return this.b}},an:{"^":"b;"},kO:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.e(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.P()},
kk:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w)x+=z[w].i(0)+a
return x},
P:function(){return this.kk("\n")}},H:{"^":"an;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},kL:{"^":"an;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},kM:{"^":"an;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},kN:{"^":"an;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},kJ:{"^":"an;0e,0f,a,b,c,d",
sjg:function(a){this.e=H.j(a,"$isa",[P.o],"$asa")},
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dB:function(a,b,c,d,e){var z=new A.kJ(a,b,c,e)
z.f=d
z.sjg(P.jm(d,0,!1,P.o))
return z}}},Y:{"^":"an;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},kK:{"^":"an;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},G:{"^":"an;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},dC:{"^":"an;a,b,c,d",
bE:function(a){return C.b.lb(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.l(this.c)}},kQ:{"^":"an;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dE:{"^":"an;a,b,c,d",
ae:function(a){var z=new Float32Array(H.bu(H.j(a,"$isa",[P.y],"$asa")))
C.b.fs(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},au:{"^":"an;a,b,c,d",
ae:function(a){var z=new Float32Array(H.bu(H.j(a,"$isa",[P.y],"$asa")))
C.b.ft(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},aC:{"^":"an;a,b,c,d",
fN:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)C.b.S(y,x,0)
else C.b.S(y,x,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},aD:{"^":"an;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",F:{"^":"b;0a,0b,0c,0d,0e",
hi:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.U()
if(y!=null)v=v.l(0,y)
if(x!=null)v=v.l(0,x)
if(w!=null)v=v.l(0,w)
if(v.f8())return
return v.v(0,Math.sqrt(v.K(v)))},
hp:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.C(0,y)
z=new V.a3(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.K(z)))
z=w.C(0,y)
z=new V.a3(z.a,z.b,z.c)
z=v.aK(z.v(0,Math.sqrt(z.K(z))))
return z.v(0,Math.sqrt(z.K(z)))},
d_:function(){if(this.d!=null)return!0
var z=this.hi()
if(z==null){z=this.hp()
if(z==null)return!1}this.d=z
this.a.a.a6()
return!0},
hh:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.U()
if(y!=null)v=v.l(0,y)
if(x!=null)v=v.l(0,x)
if(w!=null)v=v.l(0,w)
if(v.f8())return
return v.v(0,Math.sqrt(v.K(v)))},
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
y=o.b
if(typeof z!=="number")return z.C()
if(typeof y!=="number")return H.n(y)
n=z-y
if($.t.$2(n,0)){z=r.C(0,u)
z=new V.a3(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.K(z)))
z=o.a
p=p.a
if(typeof z!=="number")return z.C()
if(typeof p!=="number")return H.n(p)
if(z-p<0)m=m.M(0)}else{y=q.b
if(typeof y!=="number")return H.n(y)
l=(z-y)/n
y=r.C(0,u)
z=y.a
if(typeof z!=="number")return z.k()
w=y.b
if(typeof w!=="number")return w.k()
y=y.c
if(typeof y!=="number")return y.k()
y=new V.aA(z*l,w*l,y*l).l(0,u).C(0,x)
y=new V.a3(y.a,y.b,y.c)
m=y.v(0,Math.sqrt(y.K(y)))
o=o.a
p=p.a
if(typeof o!=="number")return o.C()
if(typeof p!=="number")return H.n(p)
q=q.a
if(typeof q!=="number")return H.n(q)
if((o-p)*l+p-q<0)m=m.M(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.K(z)))
z=k.aK(m)
z=z.v(0,Math.sqrt(z.K(z))).aK(k)
m=z.v(0,Math.sqrt(z.K(z)))}return m},
cZ:function(){if(this.e!=null)return!0
var z=this.hh()
if(z==null){z=this.ho()
if(z==null)return!1}this.e=z
this.a.a.a6()
return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
E:function(a){var z,y
z=this.a
if(z==null||this.b==null||this.c==null)return a+"disposed"
y=a+C.c.an(J.as(z.e),0)+", "+C.c.an(J.as(this.b.e),0)+", "+C.c.an(J.as(this.c.e),0)+" {"
z=this.d
y=z!=null?y+(z.i(0)+", "):y+"-, "
z=this.e
return z!=null?y+(z.i(0)+"}"):y+"-}"},
P:function(){return this.E("")},
p:{
et:function(a,b,c){var z,y,x
z=new F.F()
y=a.a
if(y==null)H.q(P.p("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.p("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a6()
return z}}},aI:{"^":"b;0a,0b",
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
E:function(a){var z=this.a
if(z==null||this.b==null)return a+"disposed"
return a+C.c.an(J.as(z.e),0)+", "+C.c.an(J.as(this.b.e),0)},
P:function(){return this.E("")},
p:{
eI:function(a,b){var z,y,x
z=new F.aI()
if(a==null)H.q(P.p("May not create a line with a null start vertex."))
if(b==null)H.q(P.p("May not create a line with a null end vertex."))
y=a.a
if(y==null)H.q(P.p("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.q(P.p("May not create a line with vertices attached to different shapes."))
z.a=a
C.a.h(a.c.b,z)
z.b=b
C.a.h(b.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.a6()
return z}}},bO:{"^":"b;0a",
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
E:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.c.an(J.as(z.e),0)},
P:function(){return this.E("")},
p:{
dm:function(a){var z=new F.bO()
if(a.a==null)H.q(P.p("May not create a point with a vertex which is not attached to a shape."))
z.a=a
C.a.h(a.b.b,z)
C.a.h(z.a.a.b.b,z)
z.a.a.a6()
return z}}},ak:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.K()
this.e=z}return z},
b2:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.b2()||!1
if(!this.a.b2())y=!1
z=this.e
if(!(z==null))z.ba()
return y},
b1:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.b1()||!1
if(!this.a.b1())y=!1
z=this.e
if(!(z==null))z.ba()
return y},
bU:function(){var z=this.e
if(!(z==null))++z.d
this.a.bU()
z=this.e
if(!(z==null))z.ba()
return!0},
bl:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.a.c
y=z.length
if(y<=0){z=$.f8
if(z==null){z=V.f6(0,0,0,0,0,0)
$.f8=z}return z}z=z[0].f
x=V.f6(z.a,z.b,z.c,0,0,0)
for(w=y-1,z=this.a;w>=1;--w){v=z.c
if(w>=v.length)return H.f(v,w)
v=v[w].f
u=v.a
t=v.b
v=v.c
s=x.d
r=x.a
if(typeof u!=="number")return u.F()
if(typeof r!=="number")return H.n(r)
if(u<r){s+=r-u
q=u}else{if(u>r+s)s=u-r
q=r}p=x.e
u=x.b
if(typeof t!=="number")return t.F()
if(typeof u!=="number")return H.n(u)
if(t<u){p+=u-t
o=t}else{if(t>u+p)p=t-u
o=u}n=x.f
u=x.c
if(typeof v!=="number")return v.F()
if(typeof u!=="number")return H.n(u)
if(v<u){n+=u-v
m=v}else{if(v>u+n)n=v-u
m=u}x=new V.cz(q,o,m,s,p,n)}return x},
bT:function(a){var z,y,x
for(z=this.a.c.length-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.f
if(y!=null){y=a.bc(y)
if(!J.Q(x.f,y)){x.f=y
y=x.a
if(y!=null){y=y.e
if(!(y==null))y.L(null)}}}y=x.r
if(y!=null)x.sbs(a.cf(y))
y=x.x
if(y!=null)x.sW(a.cf(y))}},
eu:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aN()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aM().a)!==0)++w
if((x&$.$get$aL().a)!==0)++w
if((x&$.$get$aZ().a)!==0)++w
if((x&$.$get$b_().a)!==0)++w
if((x&$.$get$b9().a)!==0)++w
if((x&$.$get$bS().a)!==0)++w
if((x&$.$get$br().a)!==0)++w
if((x&$.$get$aY().a)!==0)++w
v=b.gdC(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.y
t=H.d(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.d(y,[Z.ec])
for(r=0,q=0;q<w;++q){p=b.jM(q)
o=p.gdC(p)
C.a.q(s,q,new Z.ec(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].kv(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.q(t,l,m[k]);++l}}r+=o}H.j(t,"$isa",[x],"$asa")
y=a.a
j=y.createBuffer()
C.b.az(y,34962,j)
C.b.es(y,34962,new Float32Array(H.bu(t)),35044)
C.b.az(y,34962,null)
i=new Z.c3(new Z.fO(34962,j),s,b)
i.shS(H.d([],[Z.c7]))
if(this.b.b.length!==0){x=P.o
h=H.d([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.N()
C.a.h(h,g.e)}f=Z.dN(y,34963,H.j(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.c7(0,h.length,f))}if(this.c.b.length!==0){x=P.o
h=H.d([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.N()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.N()
C.a.h(h,g.e)}f=Z.dN(y,34963,H.j(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.c7(1,h.length,f))}if(this.d.b.length!==0){x=P.o
h=H.d([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.N()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.N()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.N()
C.a.h(h,g.e)}f=Z.dN(y,34963,H.j(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.c7(4,h.length,f))}return i},
i:function(a){var z=H.d([],[P.m])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.E("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.E("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.E("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.E("   "))}return C.a.H(z,"\n")},
ag:function(a){var z=this.e
if(!(z==null))z.L(a)},
a6:function(){return this.ag(null)},
$iscB:1,
p:{
af:function(){var z,y
z=new F.ak()
y=new F.ld(z)
y.b=!1
y.sjh(H.d([],[F.C]))
z.a=y
y=new F.kj(z)
y.scJ(H.d([],[F.bO]))
z.b=y
y=new F.ki(z)
y.shU(H.d([],[F.aI]))
z.c=y
y=new F.kh(z)
y.shI(H.d([],[F.F]))
z.d=y
z.e=null
return z}}},cB:{"^":"d3;"},kh:{"^":"b;a,0b",
shI:function(a){this.b=H.j(a,"$isa",[F.F],"$asa")},
aa:function(a,b,c,d){var z=this.a
z.a.h(0,b)
z.a.h(0,c)
z.a.h(0,d)
return F.et(b,c,d)},
jJ:function(a){var z,y,x,w,v,u,t
H.j(a,"$isa",[F.C],"$asa")
z=H.d([],[F.F])
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
C.a.h(z,F.et(x,u,t))}}return z},
gm:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>=z.length)return H.f(z,b)
return z[b]},
b2:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].d_())x=!1
return x},
b1:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].cZ())x=!1
return x},
i:function(a){return this.P()},
E:function(a){var z,y,x,w
z=H.d([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].E(a))
return C.a.H(z,"\n")},
P:function(){return this.E("")}},ki:{"^":"b;a,0b",
shU:function(a){this.b=H.j(a,"$isa",[F.aI],"$asa")},
t:function(a,b,c){var z=this.a
z.a.h(0,b)
z.a.h(0,c)
return F.eI(b,c)},
jK:function(a){var z,y,x,w,v,u
H.j(a,"$isa",[F.C],"$asa")
z=H.d([],[F.aI])
y=a.length
for(x=this.a,w=1;w<y;w+=2){v=w-1
u=a.length
if(v>=u)return H.f(a,v)
v=a[v]
if(w>=u)return H.f(a,w)
u=a[w]
x.a.h(0,v)
x.a.h(0,u)
C.a.h(z,F.eI(v,u))}return z},
gm:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>=z.length)return H.f(z,b)
return z[b]},
i:function(a){return this.P()},
E:function(a){var z,y,x,w
z=H.d([],[P.m])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].E(a+(""+x+". ")))}return C.a.H(z,"\n")},
P:function(){return this.E("")}},kj:{"^":"b;a,0b",
scJ:function(a){this.b=H.j(a,"$isa",[F.bO],"$asa")},
jL:function(a){var z,y,x,w,v
H.j(a,"$isa",[F.C],"$asa")
z=H.d([],[F.bO])
y=a.length
for(x=this.a,w=0;w<y;++w){if(w>=a.length)return H.f(a,w)
v=a[w]
x.a.h(0,v)
C.a.h(z,F.dm(v))}return z},
gm:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>=z.length)return H.f(z,b)
return z[b]},
i:function(a){return this.P()},
E:function(a){var z,y,x,w
z=H.d([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].E(a))
return C.a.H(z,"\n")},
P:function(){return this.E("")}},C:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
jW:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.bq(this.cx,x,u,z,y,w,v,a,t)},
a2:function(){return this.jW(null)},
sab:function(a,b){var z
if(!J.Q(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a6()}},
sbs:function(a){var z
a=a==null?null:a.v(0,Math.sqrt(a.K(a)))
if(!J.Q(this.r,a)){this.r=a
z=this.a
if(z!=null)z.a6()}},
sW:function(a){var z
a=a==null?null:a.v(0,Math.sqrt(a.K(a)))
if(!J.Q(this.x,a)){this.x=a
z=this.a
if(z!=null)z.a6()}},
sT:function(a,b){var z
if(!J.Q(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.a6()}},
kv:function(a){var z,y
if(a.A(0,$.$get$aN())){z=this.f
y=[P.y]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$aM())){z=this.r
y=[P.y]
if(z==null)return H.d([0,1,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$aL())){z=this.x
y=[P.y]
if(z==null)return H.d([0,0,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$aZ())){z=this.y
y=[P.y]
if(z==null)return H.d([0,0],y)
else return H.d([z.a,z.b],y)}else if(a.A(0,$.$get$b_())){z=this.z
y=[P.y]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$b9())){z=this.Q
y=[P.y]
if(z==null)return H.d([1,1,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$bS())){z=this.Q
y=[P.y]
if(z==null)return H.d([1,1,1,1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else if(a.A(0,$.$get$br()))return H.d([this.ch],[P.y])
else if(a.A(0,$.$get$aY())){z=H.d([-1,-1,-1,-1],[P.y])
return z}else return H.d([],[P.y])},
d_:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.U()
this.d.D(0,new F.lk(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.K(z)))
z=this.a
if(z!=null){z.a6()
z=this.a.e
if(!(z==null))z.ba()}return!0},
cZ:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.U()
this.d.D(0,new F.lj(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.K(z)))
z=this.a
if(z!=null){z.a6()
z=this.a.e
if(!(z==null))z.ba()}return!0},
eZ:function(a){var z,y,x,w
z=this.c.b.length
for(y=0;y<z;++y){x=this.c.b
if(y>=x.length)return H.f(x,y)
w=x[y]
x=w.b
x.a.a.N()
x=x.e
a.a.a.N()
if(x==a.e)return w}return},
kh:function(a){var z=this.eZ(a)
if(z!=null)return z
return a.eZ(this)},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
E:function(a){var z,y,x
z=H.d([],[P.m])
C.a.h(z,C.c.an(J.as(this.e),0))
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
C.a.h(z,"-")
x=C.a.H(z,", ")
return a+"{"+x+"}"},
P:function(){return this.E("")},
p:{
bq:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.C()
y=new F.li(z)
y.scJ(H.d([],[F.bO]))
z.b=y
y=new F.lh(z)
x=[F.aI]
y.shV(H.d([],x))
y.shW(H.d([],x))
z.c=y
y=new F.le(z)
x=[F.F]
y.shJ(H.d([],x))
y.shK(H.d([],x))
y.shL(H.d([],x))
z.d=y
h=$.$get$fL()
z.e=0
y=$.$get$aN()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aM().a)!==0?e:null
z.x=(x&$.$get$aL().a)!==0?b:null
z.y=(x&$.$get$aZ().a)!==0?f:null
z.z=(x&$.$get$b_().a)!==0?g:null
z.Q=(x&$.$get$fM().a)!==0?c:null
z.ch=(x&$.$get$br().a)!==0?i:0
z.cx=(x&$.$get$aY().a)!==0?a:null
return z}}},lk:{"^":"h:4;a",
$1:function(a){var z,y
H.c(a,"$isF")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.l(0,z)}}},lj:{"^":"h:4;a",
$1:function(a){var z,y
H.c(a,"$isF")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.l(0,z)}}},ld:{"^":"b;a,0b,0c",
sjh:function(a){this.c=H.j(a,"$isa",[F.C],"$asa")},
N:function(){},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.e(P.p("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a6()
return!0},
cT:function(a,b,c){var z=F.bq(null,null,null,new V.aA(a,b,c),null,null,null,null,0)
this.h(0,z)
return z},
gm:function(a){return this.c.length},
j:function(a,b){return C.a.j(this.c,b)},
b2:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].d_()
return!0},
b1:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].cZ()
return!0},
bU:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
if(typeof u!=="number")return u.k()
t=v.b
if(typeof t!=="number")return t.k()
s=v.c
if(typeof s!=="number")return s.k()
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.Q(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.L(null)}}}}return!0},
i:function(a){return this.P()},
E:function(a){var z,y,x,w
this.N()
z=H.d([],[P.m])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].E(a))
return C.a.H(z,"\n")},
P:function(){return this.E("")}},le:{"^":"b;a,0b,0c,0d",
shJ:function(a){this.b=H.j(a,"$isa",[F.F],"$asa")},
shK:function(a){this.c=H.j(a,"$isa",[F.F],"$asa")},
shL:function(a){this.d=H.j(a,"$isa",[F.F],"$asa")},
gm:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y
z=this.b.length
if(b.F(0,z))return C.a.j(this.b,b)
b=b.C(0,z)
y=this.c.length
if(b.F(0,y))return C.a.j(this.c,b)
b=b.C(0,y)
return C.a.j(this.d,b)},
D:function(a,b){H.i(b,{func:1,ret:-1,args:[F.F]})
C.a.D(this.b,b)
C.a.D(this.c,new F.lf(this,b))
C.a.D(this.d,new F.lg(this,b))},
i:function(a){return this.P()},
E:function(a){var z,y,x,w
z=H.d([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].E(a))
return C.a.H(z,"\n")},
P:function(){return this.E("")}},lf:{"^":"h:4;a,b",
$1:function(a){H.c(a,"$isF")
if(!J.Q(a.a,this.a))this.b.$1(a)}},lg:{"^":"h:4;a,b",
$1:function(a){var z
H.c(a,"$isF")
z=this.a
if(!J.Q(a.a,z)&&!J.Q(a.b,z))this.b.$1(a)}},lh:{"^":"b;a,0b,0c",
shV:function(a){this.b=H.j(a,"$isa",[F.aI],"$asa")},
shW:function(a){this.c=H.j(a,"$isa",[F.aI],"$asa")},
gm:function(a){return this.b.length+this.c.length},
j:function(a,b){var z=this.b.length
if(b.aP(0,z))return C.a.j(this.c,b.C(0,z))
else return C.a.j(this.b,b)},
i:function(a){return this.P()},
E:function(a){var z,y,x,w
z=H.d([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].E(a))
return C.a.H(z,"\n")},
P:function(){return this.E("")}},li:{"^":"b;a,0b",
scJ:function(a){this.b=H.j(a,"$isa",[F.bO],"$asa")},
gm:function(a){return this.b.length},
j:function(a,b){return C.a.j(this.b,b)},
i:function(a){return this.P()},
E:function(a){var z,y,x,w
z=H.d([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].E(a))
return C.a.H(z,"\n")},
P:function(){return this.E("")}}}],["","",,O,{"^":"",iB:{"^":"bR;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx",
gB:function(){var z=this.rx
if(z==null){z=D.K()
this.rx=z}return z},
G:function(a){var z=this.rx
if(!(z==null))z.L(a)},
sad:function(a){var z,y
z=this.r2
if(!$.t.$2(z,a)){y=this.r2
this.r2=a
z=new D.z("vectorScale",y,a,this,[P.y])
z.b=!0
this.G(z)}},
ao:function(a){},
fl:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.c(a.fr.j(0,"Inspection"),"$iseA")
if(z==null){y=a.a
z=new A.eA(y,"Inspection")
z.dG(y,"Inspection")
z.f6($.iT,$.iL)
z.z=z.x.j(0,"posAttr")
z.Q=z.x.j(0,"normAttr")
z.ch=z.x.j(0,"clrAttr")
z.cx=z.x.j(0,"binmAttr")
z.cy=H.k(z.y.j(0,"lightVec"),"$isG")
z.db=H.k(z.y.j(0,"ambientClr"),"$isdC")
z.dx=H.k(z.y.j(0,"diffuseClr"),"$isdC")
z.dy=H.k(z.y.j(0,"weightScalar"),"$isY")
z.fr=H.k(z.y.j(0,"viewMat"),"$isau")
z.fx=H.k(z.y.j(0,"viewObjMatrix"),"$isau")
z.fy=H.k(z.y.j(0,"projViewObjMatrix"),"$isau")
a.ep(z)}this.a=z}if(b.e==null){b.d.b2()
b.d.b1()
b.d.bU()
y=new Z.ed()
y.si_(new H.aH(0,0,[P.m,Z.c3]))
b.e=y}y=this.a
y.aH(a)
x=this.r2
w=y.dy
C.b.O(w.a,w.d,x)
x=this.b
w=y.cy
w.toString
v=x.a
u=x.b
x=x.c
C.b.w(w.a,w.d,v,u,x)
x=a.db.ga1()
u=y.fr
u.toString
u.ae(x.ac(0,!0))
x=a.gfz()
u=y.fx
u.toString
u.ae(x.ac(0,!0))
x=a.gfh()
y=y.fy
y.toString
y.ae(x.ac(0,!0))
y=b.e
if(y instanceof Z.ed){x=a.a
C.b.aI(x,1,1)
if(b.c==null){C.b.d3(x,2929)
C.b.aA(x,3042)
C.b.aI(x,1,1)
if(this.k3)this.ea(a,y,b.d,"Axis",H.i(this.gdO(),{func:1,ret:F.ak,args:[F.cB]}),this.z,this.y)
if(this.k4)this.ea(a,y,b.d,"AABB",H.i(this.gdL(),{func:1,ret:F.ak,args:[F.cB]}),this.z,this.y)
C.b.aA(x,2929)
C.b.aI(x,770,771)}else{C.b.aA(x,2929)
C.b.aA(x,3042)
C.b.aI(x,770,771)
if(this.cx)this.a4(a,y,b.c,"vertices",this.gh9(),this.f,this.e)
if(this.fr)this.a4(a,y,b.c,"faceCenters",this.ghF(),this.f,this.e)
if(this.Q)this.a4(a,y,b.c,"shapeFill",this.giW(),this.d,this.c)
if(this.id)this.a4(a,y,b.c,"colorFill",this.ghu(),this.x,this.r)
if(this.k1)this.a4(a,y,b.c,"txt2DColor",this.gjb(),this.x,this.r)
if(this.k2)this.a4(a,y,b.c,"weight",this.gji(),this.x,this.r)
C.b.d3(x,2929)
C.b.aI(x,1,1)
if(this.ch)this.a4(a,y,b.c,"wireFrame",this.gjj(),this.f,this.e)
if(this.cy)this.a4(a,y,b.c,"normals",this.gi6(),this.f,this.e)
if(this.db)this.a4(a,y,b.c,"binormals",this.ghm(),this.f,this.e)
if(this.dx)this.a4(a,y,b.c,"tangentals",this.gj0(),this.f,this.e)
if(this.dy)this.a4(a,y,b.c,"textureCube",this.gjc(),this.f,this.e)
if(this.fx)this.a4(a,y,b.c,"faceNormals",this.ghG(),this.f,this.e)
if(this.fy)this.a4(a,y,b.c,"faceBinormals",this.ghE(),this.x,this.r)
if(this.go)this.a4(a,y,b.c,"faceTangentals",this.ghH(),this.x,this.r)
if(this.k3)this.a4(a,y,b.c,"Axis",this.gdO(),this.z,this.y)
if(this.k4)this.a4(a,y,b.c,"AABB",this.gdL(),this.z,this.y)
C.b.aA(x,2929)
C.b.aI(x,770,771)}}else b.e=null
y=this.a
y.toString
C.b.ds(a.a,null)
y.x.ez()},
a4:function(a,b,c,d,e,f,g){var z,y
H.i(e,{func:1,ret:F.ak,args:[F.ak]})
z=b.a.j(0,d)
if(z==null){z=this.dP(a,e.$1(c))
b.a.q(0,d,z)}y=this.a
y.db.bE(f)
y.dx.bE(g)
z.fe(a)},
ea:function(a,b,c,d,e,f,g){var z,y
H.i(e,{func:1,ret:F.ak,args:[F.cB]})
z=b.a.j(0,d)
if(z==null){z=this.dP(a,e.$1(c))
b.a.q(0,d,z)}y=this.a
y.db.bE(f)
y.dx.bE(g)
z.fe(a)},
dP:function(a,b){var z,y,x
H.c(b,"$isak")
z=$.$get$aN()
y=$.$get$aM()
x=b.eu(new Z.fP(a.a),new Z.b8(z.a|y.a|$.$get$aL().a|$.$get$b9().a))
x.al($.$get$aN()).e=this.a.z.c
x.al($.$get$aM()).e=this.a.Q.c
x.al($.$get$b9()).e=this.a.ch.c
x.al($.$get$aL()).e=this.a.cx.c
return x},
lU:[function(a){var z,y,x
z=F.af()
y=a.a
y.toString
x=H.i(new O.iN(z,new V.O(1,1,1,1)),{func:1,ret:-1,args:[F.C]})
C.a.D(y.c,x)
x=a.d
x.toString
y=H.i(new O.iO(z),{func:1,ret:-1,args:[F.F]})
C.a.D(x.b,y)
return z},"$1","giW",4,0,2],
jk:[function(a,b){var z,y,x,w
z={}
z.a=b
y=F.af()
z.a=new V.O(0,0.7,1,1)
x=a.a
x.toString
z=H.i(new O.iZ(z,y),{func:1,ret:-1,args:[F.C]})
C.a.D(x.c,z)
z=new O.iY(y)
x=a.c
x.toString
w=H.i(new O.j_(y,z),{func:1,ret:-1,args:[F.aI]})
C.a.D(x.b,w)
w=a.d
w.toString
z=H.i(new O.j0(y,z),{func:1,ret:-1,args:[F.F]})
C.a.D(w.b,z)
return y},function(a){return this.jk(a,null)},"m1","$2$color","$1","gjj",4,3,50],
lg:[function(a){var z,y,x
z=F.af()
y=a.a
y.toString
x=H.i(new O.iU(new V.O(1,1,1,1),z),{func:1,ret:-1,args:[F.C]})
C.a.D(y.c,x)
return z},"$1","gh9",4,0,2],
lt:[function(a){var z,y,x
z=F.af()
y=a.a
y.toString
x=H.i(new O.iM(new V.O(1,1,0.3,1),z),{func:1,ret:-1,args:[F.C]})
C.a.D(y.c,x)
return z},"$1","gi6",4,0,2],
lk:[function(a){var z,y,x
z=F.af()
y=a.a
y.toString
x=H.i(new O.iE(new V.O(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.C]})
C.a.D(y.c,x)
return z},"$1","ghm",4,0,2],
lV:[function(a){var z,y,x
z=F.af()
y=a.a
y.toString
x=H.i(new O.iP(new V.O(1,0.3,1,1),z),{func:1,ret:-1,args:[F.C]})
C.a.D(y.c,x)
return z},"$1","gj0",4,0,2],
m_:[function(a){var z,y,x
z=F.af()
y=a.a
y.toString
x=H.i(new O.iS(new V.O(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.C]})
C.a.D(y.c,x)
return z},"$1","gjc",4,0,2],
ln:[function(a){var z,y,x
z=F.af()
y=a.d
y.toString
x=H.i(new O.iI(new V.O(1,1,0.3,1),z),{func:1,ret:-1,args:[F.F]})
C.a.D(y.b,x)
return z},"$1","ghF",4,0,2],
lo:[function(a){var z,y,x
z=F.af()
y=a.d
y.toString
x=H.i(new O.iJ(new V.O(1,1,0.3,1),z),{func:1,ret:-1,args:[F.F]})
C.a.D(y.b,x)
return z},"$1","ghG",4,0,2],
lm:[function(a){var z,y,x
z=F.af()
y=a.d
y.toString
x=H.i(new O.iH(new V.O(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.F]})
C.a.D(y.b,x)
return z},"$1","ghE",4,0,2],
lp:[function(a){var z,y,x
z=F.af()
y=a.d
y.toString
x=H.i(new O.iK(new V.O(1,0.3,1,1),z),{func:1,ret:-1,args:[F.F]})
C.a.D(y.b,x)
return z},"$1","ghH",4,0,2],
ll:[function(a){var z,y,x
z=F.af()
y=a.a
y.toString
x=H.i(new O.iF(z),{func:1,ret:-1,args:[F.C]})
C.a.D(y.c,x)
x=a.d
x.toString
y=H.i(new O.iG(z),{func:1,ret:-1,args:[F.F]})
C.a.D(x.b,y)
return z},"$1","ghu",4,0,2],
lZ:[function(a){var z,y,x
z=F.af()
y=a.a
y.toString
x=H.i(new O.iQ(z),{func:1,ret:-1,args:[F.C]})
C.a.D(y.c,x)
x=a.d
x.toString
y=H.i(new O.iR(z),{func:1,ret:-1,args:[F.F]})
C.a.D(x.b,y)
return z},"$1","gjb",4,0,2],
m0:[function(a){var z,y,x,w,v,u,t
z={}
y=F.af()
x=a.a
w=x.c
if(w.length<1)return y
v=w[0].ch
z.a=v
z.b=v
x.toString
x={func:1,ret:-1,args:[F.C]}
C.a.D(w,H.i(new O.iV(z),x))
w=z.b
u=z.a
if(typeof w!=="number")return w.C()
if(typeof u!=="number")return H.n(u)
t=w-u
z.c=t
if(t<=0)z.c=1
w=a.a
w.toString
x=H.i(new O.iW(z,y),x)
C.a.D(w.c,x)
x=a.d
x.toString
w=H.i(new O.iX(y),{func:1,ret:-1,args:[F.F]})
C.a.D(x.b,w)
return y},"$1","gji",4,0,2],
lj:[function(a){return this.hj(a)},"$1","gdO",4,0,2],
hj:function(a){var z,y
z=F.af()
y=new O.iD(z)
y.$3(1,0,0)
y.$3(0,1,0)
y.$3(0,0,1)
return z},
li:[function(a){return this.hc(a)},"$1","gdL",4,0,2],
hc:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=a.bl()
y=F.af()
x=new O.iC(y)
w=z.a
v=z.b
u=z.c
t=x.$3(w,v,u)
s=z.d
if(typeof w!=="number")return w.l()
s=w+s
r=x.$3(s,v,u)
q=z.e
if(typeof v!=="number")return v.l()
q=v+q
p=x.$3(s,q,u)
o=x.$3(w,q,u)
n=z.f
if(typeof u!=="number")return u.l()
n=u+n
m=x.$3(w,v,n)
l=x.$3(s,v,n)
k=x.$3(s,q,n)
j=x.$3(w,q,n)
y.c.t(0,t,r)
y.c.t(0,r,p)
y.c.t(0,p,o)
y.c.t(0,o,t)
y.c.t(0,m,l)
y.c.t(0,l,k)
y.c.t(0,k,j)
y.c.t(0,j,m)
y.c.t(0,t,m)
y.c.t(0,r,l)
y.c.t(0,p,k)
y.c.t(0,o,j)
return y}},iN:{"^":"h:6;a,b",
$1:function(a){var z,y
H.c(a,"$isC")
z=this.a.a
y=a.a2()
y.sT(0,this.b)
y.sW(V.U())
z.h(0,y)}},iO:{"^":"h:4;a",
$1:function(a){var z,y,x,w,v,u
H.c(a,"$isF")
z=this.a
y=z.a
x=a.a
x.a.a.N()
x=x.e
w=C.a.j(y.c,x)
x=z.a
y=a.b
y.a.a.N()
y=y.e
v=C.a.j(x.c,y)
y=z.a
x=a.c
x.a.a.N()
x=x.e
u=C.a.j(y.c,x)
z.d.aa(0,w,v,u)}},iZ:{"^":"h:6;a,b",
$1:function(a){var z,y
H.c(a,"$isC")
z=this.b.a
y=a.a2()
y.sT(0,this.a.a)
y.sW(V.U())
z.h(0,y)}},iY:{"^":"h:52;a",
$2:function(a,b){if(a.kh(b)==null)this.a.c.t(0,a,b)}},j_:{"^":"h:53;a,b",
$1:function(a){var z,y,x,w
H.c(a,"$isaI")
z=this.a
y=z.a
x=a.a
x.a.a.N()
x=x.e
w=C.a.j(y.c,x)
z=z.a
x=a.b
x.a.a.N()
x=x.e
this.b.$2(w,C.a.j(z.c,x))}},j0:{"^":"h:4;a,b",
$1:function(a){var z,y,x,w,v,u
H.c(a,"$isF")
z=this.a
y=z.a
x=a.a
x.a.a.N()
x=x.e
w=C.a.j(y.c,x)
x=z.a
y=a.b
y.a.a.N()
y=y.e
v=C.a.j(x.c,y)
z=z.a
y=a.c
y.a.a.N()
y=y.e
u=C.a.j(z.c,y)
y=this.b
y.$2(w,v)
y.$2(v,u)
y.$2(u,w)}},iU:{"^":"h:6;a,b",
$1:function(a){var z,y
z=H.c(a,"$isC").a2()
z.sT(0,this.a)
z.sW(V.U())
y=this.b
y.a.h(0,z)
y.b.a.a.h(0,z)
F.dm(z)}},iM:{"^":"h:6;a,b",
$1:function(a){var z,y,x
z=H.c(a,"$isC").a2()
z.sT(0,this.a)
z.sW(V.U())
y=z.a2()
y.sW(z.r)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.t(0,z,y)}},iE:{"^":"h:6;a,b",
$1:function(a){var z,y,x
H.c(a,"$isC")
z=a.a2()
z.sT(0,this.a)
z.sW(V.U())
y=z.a2()
y.sW(a.x)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.t(0,z,y)}},iP:{"^":"h:6;a,b",
$1:function(a){var z,y,x
H.c(a,"$isC")
z=a.a2()
z.sT(0,this.a)
z.sW(V.U())
y=z.a2()
y.sW(a.x.aK(a.r).M(0))
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.t(0,z,y)}},iS:{"^":"h:6;a,b",
$1:function(a){var z,y,x
H.c(a,"$isC")
z=a.a2()
z.sT(0,this.a)
z.sW(V.U())
y=z.a2()
y.sW(a.z)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.t(0,z,y)}},iI:{"^":"h:4;a,b",
$1:function(a){var z,y,x
H.c(a,"$isF")
z=a.a.f.l(0,a.b.f).l(0,a.c.f).v(0,3)
y=a.d
x=F.bq(null,V.U(),this.a,z,y,null,null,null,0)
y=this.b
y.a.h(0,x)
y.b.a.a.h(0,x)
F.dm(x)}},iJ:{"^":"h:4;a,b",
$1:function(a){var z,y,x,w
H.c(a,"$isF")
z=a.a.f.l(0,a.b.f).l(0,a.c.f).v(0,3)
y=a.d
x=F.bq(null,V.U(),this.a,z,y,null,null,null,0)
w=x.a2()
w.sW(a.d)
y=this.b
y.a.h(0,x)
y.a.h(0,w)
y.c.t(0,x,w)}},iH:{"^":"h:4;a,b",
$1:function(a){var z,y,x,w
H.c(a,"$isF")
z=a.a.f.l(0,a.b.f).l(0,a.c.f).v(0,3)
y=a.d
x=F.bq(null,V.U(),this.a,z,y,null,null,null,0)
w=x.a2()
w.sW(a.e)
y=this.b
y.a.h(0,x)
y.a.h(0,w)
y.c.t(0,x,w)}},iK:{"^":"h:4;a,b",
$1:function(a){var z,y,x,w
H.c(a,"$isF")
z=a.a.f.l(0,a.b.f).l(0,a.c.f).v(0,3)
y=a.d
x=F.bq(null,V.U(),this.a,z,y,null,null,null,0)
w=x.a2()
w.sW(a.e.aK(a.d).M(0))
y=this.b
y.a.h(0,x)
y.a.h(0,w)
y.c.t(0,x,w)}},iF:{"^":"h:6;a",
$1:function(a){var z,y
H.c(a,"$isC")
z=this.a.a
y=a.a2()
y.sW(V.U())
z.h(0,y)}},iG:{"^":"h:4;a",
$1:function(a){var z,y,x,w,v,u
H.c(a,"$isF")
z=this.a
y=z.a
x=a.a
x.a.a.N()
x=x.e
w=C.a.j(y.c,x)
x=z.a
y=a.b
y.a.a.N()
y=y.e
v=C.a.j(x.c,y)
y=z.a
x=a.c
x.a.a.N()
x=x.e
u=C.a.j(y.c,x)
z.d.aa(0,w,v,u)}},iQ:{"^":"h:6;a",
$1:function(a){var z,y,x,w,v,u,t
H.c(a,"$isC")
z=a.y
y=this.a.a
x=a.a2()
w=z.a
v=z.b
if(typeof w!=="number")return w.F()
if(w<0)w=0
else if(w>1)w=1
if(typeof v!=="number")return v.F()
u=v<0
if(u)t=0
else if(v>1)t=1
else t=v
if(u)v=0
else if(v>1)v=1
x.sT(0,new V.O(w,t,v,1))
x.sW(V.U())
y.h(0,x)}},iR:{"^":"h:4;a",
$1:function(a){var z,y,x,w,v,u
H.c(a,"$isF")
z=this.a
y=z.a
x=a.a
x.a.a.N()
x=x.e
w=C.a.j(y.c,x)
x=z.a
y=a.b
y.a.a.N()
y=y.e
v=C.a.j(x.c,y)
y=z.a
x=a.c
x.a.a.N()
x=x.e
u=C.a.j(y.c,x)
z.d.aa(0,w,v,u)}},iV:{"^":"h:6;a",
$1:function(a){var z,y,x
H.c(a,"$isC")
z=this.a
y=z.a
x=a.ch
if(typeof y!=="number")return y.cn()
if(typeof x!=="number")return H.n(x)
if(y>x)z.a=x
y=z.b
if(typeof y!=="number")return y.F()
if(y<x)z.b=x}},iW:{"^":"h:6;a,b",
$1:function(a){var z,y,x,w
H.c(a,"$isC")
z=a.ch
y=this.a
x=y.a
if(typeof z!=="number")return z.C()
if(typeof x!=="number")return H.n(x)
w=V.i0((z-x)/y.c*5/6,1,1)
y=this.b.a
x=a.a2()
x.sW(V.U())
x.sT(0,new V.O(w.a,w.b,w.c,1))
y.h(0,x)}},iX:{"^":"h:4;a",
$1:function(a){var z,y,x,w,v,u
H.c(a,"$isF")
z=this.a
y=z.a
x=a.a
x.a.a.N()
x=x.e
w=C.a.j(y.c,x)
x=z.a
y=a.b
y.a.a.N()
y=y.e
v=C.a.j(x.c,y)
y=z.a
x=a.c
x.a.a.N()
x=x.e
u=C.a.j(y.c,x)
z.d.aa(0,w,v,u)}},iD:{"^":"h;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=a>1?1:a
y=b>1?1:b
x=c>1?1:c
w=new V.O(z,y,x,1)
z=this.a
v=z.a.cT(0,0,0)
v.sW(V.U())
v.sbs(V.fK())
v.sT(0,w)
u=z.a.cT(a,b,c)
u.sW(V.U())
u.sbs(V.fK())
u.sT(0,w)
z.c.t(0,v,u)}},iC:{"^":"h;a",
$3:function(a,b,c){var z=this.a.a.cT(a,b,c)
z.sW(V.U())
z.sbs(new V.a3(a,b,c))
return z}},bi:{"^":"bR;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
shl:function(a){this.e=H.j(a,"$isa_",[V.az],"$asa_")},
gB:function(){var z=this.dy
if(z==null){z=D.K()
this.dy=z}return z},
G:[function(a){var z
H.c(a,"$isx")
z=this.dy
if(!(z==null))z.L(a)},function(){return this.G(null)},"h8","$1","$0","gbH",0,2,3],
iO:[function(a){H.c(a,"$isx")
this.a=null
this.G(a)},function(){return this.iO(null)},"lT","$1","$0","giN",0,2,3],
lw:[function(a,b){var z=V.az
z=new D.cs(a,H.j(b,"$isu",[z],"$asu"),this,[z])
z.b=!0
this.G(z)},"$2","gi9",8,0,24],
lx:[function(a,b){var z=V.az
z=new D.ct(a,H.j(b,"$isu",[z],"$asu"),this,[z])
z.b=!0
this.G(z)},"$2","gia",8,0,24],
dT:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.e.a9(z.e.length+3,4)*4
x=C.e.a9(z.f.length+3,4)*4
w=C.e.a9(z.r.length+3,4)*4
v=C.e.a9(z.x.length+3,4)*4
u=C.e.a9(z.y.length+3,4)*4
t=C.e.a9(z.z.length+3,4)*4
s=C.e.a9(this.e.a.length+3,4)*4
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
a2=$.$get$aN()
if(e){g=$.$get$aM()
a2=new Z.b8(a2.a|g.a)}if(d){g=$.$get$aL()
a2=new Z.b8(a2.a|g.a)}if(c){g=$.$get$aZ()
a2=new Z.b8(a2.a|g.a)}if(b){g=$.$get$b_()
a2=new Z.b8(a2.a|g.a)}if(a0){g=$.$get$aY()
a2=new Z.b8(a2.a|g.a)}return new A.jz(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
a0:function(a,b){H.j(a,"$isa",[T.dw],"$asa")
if(b!=null)if(!C.a.b4(a,b)){b.a=a.length
C.a.h(a,b)}},
ao:function(a){var z
for(z=this.dx.a,z=new J.at(z,z.length,0,[H.r(z,0)]);z.I();)z.d.ao(a)},
fl:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dT()
y=H.c(a.fr.j(0,z.as),"$iseQ")
if(y==null){y=A.jw(z,a.a)
a.ep(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bX
z=b.e
if(!(z instanceof Z.c3)){b.e=null
z=null}if(z==null||!z.d.A(0,w)){z=x.r1
if(z)b.d.b2()
v=x.r2
if(v)b.d.b1()
u=x.ry
if(u)b.d.bU()
t=b.d.eu(new Z.fP(a.a),w)
t.al($.$get$aN()).e=this.a.Q.c
if(z)t.al($.$get$aM()).e=this.a.cx.c
if(v)t.al($.$get$aL()).e=this.a.ch.c
if(x.rx)t.al($.$get$aZ()).e=this.a.cy.c
if(u)t.al($.$get$b_()).e=this.a.db.c
if(x.x1)t.al($.$get$aY()).e=this.a.dx.c
b.e=t}z=T.dw
s=H.d([],[z])
this.a.aH(a)
if(x.fx){v=this.a
u=a.dx.ga1()
v=v.dy
v.toString
v.ae(u.ac(0,!0))}if(x.fy){v=this.a
u=a.gfz()
v=v.fr
v.toString
v.ae(u.ac(0,!0))}v=this.a
u=a.gfh()
v=v.fy
v.toString
v.ae(u.ac(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.ae(C.o.ac(u,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.ae(C.o.ac(u,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.ae(C.o.ac(u,!0))}if(x.aB>0){r=this.e.a.length
v=this.a.k4
C.b.S(v.a,v.d,r)
for(v=[P.y],q=0;q<r;++q){u=this.a
p=this.e.a
if(q>=p.length)return H.f(p,q)
p=p[q]
u.toString
H.c(p,"$isaz")
u=u.r1
if(q>=u.length)return H.f(u,q)
u=u[q]
o=new Float32Array(H.bu(H.j(p.ac(0,!0),"$isa",v,"$asa")))
C.b.ft(u.a,u.d,!1,o)}}switch(x.a){case C.d:break
case C.i:v=this.a
u=this.f.f
v=v.r2
v.toString
p=u.a
n=u.b
u=u.c
C.b.w(v.a,v.d,p,n,u)
break
case C.f:this.a0(s,this.f.d)
v=this.a
u=this.f.d
v.ar(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
p=v.a
n=v.b
v=v.c
C.b.w(u.a,u.d,p,n,v)
break
case C.h:this.a0(s,this.f.e)
v=this.a
u=this.f.e
v.aj(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
p=v.a
n=v.b
v=v.c
C.b.w(u.a,u.d,p,n,v)
break}if(x.k2){switch(x.b){case C.d:break
case C.i:v=this.a
u=this.r.f
v=v.x2
v.toString
p=u.a
n=u.b
u=u.c
C.b.w(v.a,v.d,p,n,u)
break
case C.f:this.a0(s,this.r.d)
v=this.a
u=this.r.d
v.ar(v.y1,v.aB,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
p=v.a
n=v.b
v=v.c
C.b.w(u.a,u.d,p,n,v)
break
case C.h:this.a0(s,this.r.e)
v=this.a
u=this.r.e
v.aj(v.y2,v.aB,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
p=v.a
n=v.b
v=v.c
C.b.w(u.a,u.d,p,n,v)
break}switch(x.c){case C.d:break
case C.i:v=this.a
u=this.x.f
v=v.as
v.toString
p=u.a
n=u.b
u=u.c
C.b.w(v.a,v.d,p,n,u)
break
case C.f:this.a0(s,this.x.d)
v=this.a
u=this.x.d
v.ar(v.bX,v.bY,u)
u=this.a
v=this.x.f
u=u.as
u.toString
p=v.a
n=v.b
v=v.c
C.b.w(u.a,u.d,p,n,v)
break
case C.h:this.a0(s,this.x.e)
v=this.a
u=this.x.e
v.aj(v.eD,v.bY,u)
u=this.a
v=this.x.f
u=u.as
u.toString
p=v.a
n=v.b
v=v.c
C.b.w(u.a,u.d,p,n,v)
break}switch(x.d){case C.d:break
case C.i:v=this.a
u=this.y.f
v=v.bZ
v.toString
p=u.a
n=u.b
u=u.c
C.b.w(v.a,v.d,p,n,u)
break
case C.f:this.a0(s,this.y.d)
v=this.a
u=this.y.d
v.ar(v.eE,v.c_,u)
u=this.a
v=this.y.f
u=u.bZ
u.toString
p=v.a
n=v.b
v=v.c
C.b.w(u.a,u.d,p,n,v)
break
case C.h:this.a0(s,this.y.e)
v=this.a
u=this.y.e
v.aj(v.eF,v.c_,u)
u=this.a
v=this.y.f
u=u.bZ
u.toString
p=v.a
n=v.b
v=v.c
C.b.w(u.a,u.d,p,n,v)
break}switch(x.e){case C.d:break
case C.i:v=this.a
u=this.z.f
v=v.c0
v.toString
p=u.a
n=u.b
u=u.c
C.b.w(v.a,v.d,p,n,u)
u=this.a
n=this.z.ch
u=u.c2
C.b.O(u.a,u.d,n)
break
case C.f:this.a0(s,this.z.d)
v=this.a
u=this.z.d
v.ar(v.eG,v.c1,u)
u=this.a
v=this.z.f
u=u.c0
u.toString
p=v.a
n=v.b
v=v.c
C.b.w(u.a,u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.c2
C.b.O(v.a,v.d,n)
break
case C.h:this.a0(s,this.z.e)
v=this.a
u=this.z.e
v.aj(v.eH,v.c1,u)
u=this.a
v=this.z.f
u=u.c0
u.toString
p=v.a
n=v.b
v=v.c
C.b.w(u.a,u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.c2
C.b.O(v.a,v.d,n)
break}if(x.z>0){r=this.dx.e.length
v=this.a.eS
C.b.S(v.a,v.d,r)
m=a.db.ga1()
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
p=this.a.d4
if(l>=p.length)return H.f(p,l)
i=p[l]
p=m.cf(j.gbW(j))
n=p.a
if(typeof n!=="number")return n.k()
h=p.b
if(typeof h!=="number")return h.k()
g=p.c
if(typeof g!=="number")return g.k()
g=p.v(0,Math.sqrt(n*n+h*h+g*g))
h=i.b
n=g.a
p=g.b
g=g.c
C.b.w(h.a,h.d,n,p,g)
g=j.gT(j)
p=i.c
n=g.gb8()
h=g.gaQ()
g=g.gb0()
C.b.w(p.a,p.d,n,h,g);++l}}if(x.Q>0){r=this.dx.f.length
v=this.a.eT
C.b.S(v.a,v.d,r)
m=a.db.ga1()
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
p=this.a.d5
if(l>=p.length)return H.f(p,l)
i=p[l]
p=j.gbv(j)
n=i.b
h=p.gdu(p)
g=p.gdv(p)
p=p.gdw(p)
C.b.w(n.a,n.d,h,g,p)
p=m.bc(j.gbv(j))
g=i.c
C.b.w(g.a,g.d,p.a,p.b,p.c)
p=j.gT(j)
g=i.d
h=p.gb8()
n=p.gaQ()
p=p.gb0()
C.b.w(g.a,g.d,h,n,p)
p=j.gcU()
n=i.e
C.b.O(n.a,n.d,p)
p=j.gcV()
n=i.f
C.b.O(n.a,n.d,p)
p=j.gcW()
n=i.r
C.b.O(n.a,n.d,p);++l}}if(x.ch>0){r=this.dx.r.length
v=this.a.eU
C.b.S(v.a,v.d,r)
m=a.db.ga1()
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
p=this.a.d6
if(l>=p.length)return H.f(p,l)
i=p[l]
p=j.gbv(j)
n=i.b
h=p.gdu(p)
g=p.gdv(p)
p=p.gdw(p)
C.b.w(n.a,n.d,h,g,p)
p=j.gbW(j).m8()
g=i.c
h=p.gaL(p)
n=p.gaM(p)
p=p.gb5()
C.b.w(g.a,g.d,h,n,p)
p=m.bc(j.gbv(j))
n=i.d
C.b.w(n.a,n.d,p.a,p.b,p.c)
p=j.gT(j)
n=i.e
h=p.gb8()
g=p.gaQ()
p=p.gb0()
C.b.w(n.a,n.d,h,g,p)
p=j.gm5()
g=i.f
C.b.O(g.a,g.d,p)
p=j.gm4()
g=i.r
C.b.O(g.a,g.d,p)
p=j.gcU()
g=i.x
C.b.O(g.a,g.d,p)
p=j.gcV()
g=i.y
C.b.O(g.a,g.d,p)
p=j.gcW()
g=i.z
C.b.O(g.a,g.d,p);++l}}if(x.cx>0){r=this.dx.x.length
v=this.a.eV
C.b.S(v.a,v.d,r)
m=a.db.ga1()
for(v=this.dx.x,u=v.length,p=[z],l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
n=this.a.d7
if(l>=n.length)return H.f(n,l)
i=n[l]
n=j.gbx()
H.j(s,"$isa",p,"$asa")
if(!C.a.b4(s,n)){n.sbJ(s.length)
C.a.h(s,n)}n=j.gbW(j)
h=i.d
g=n.gaL(n)
f=n.gaM(n)
n=n.gb5()
C.b.w(h.a,h.d,g,f,n)
n=j.gcg()
f=i.b
g=n.gaL(n)
h=n.gaM(n)
n=n.gb5()
C.b.w(f.a,f.d,g,h,n)
n=j.gbw(j)
h=i.c
g=n.gaL(n)
f=n.gaM(n)
n=n.gb5()
C.b.w(h.a,h.d,g,f,n)
n=m.cf(j.gbW(j))
f=n.a
if(typeof f!=="number")return f.k()
g=n.b
if(typeof g!=="number")return g.k()
h=n.c
if(typeof h!=="number")return h.k()
h=n.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
f=h.a
n=h.b
h=h.c
C.b.w(g.a,g.d,f,n,h)
h=j.gT(j)
n=i.f
f=h.gb8()
g=h.gaQ()
h=h.gb0()
C.b.w(n.a,n.d,f,g,h)
h=j.gbx()
n=h.gdg(h)
if(!n){n=i.x
C.b.S(n.a,n.d,1)}else{n=i.r
g=h.ghX()
f=n.a
n=n.d
if(!g)C.b.S(f,n,0)
else C.b.S(f,n,h.gbJ())
n=i.x
C.b.S(n.a,n.d,0)}++l}}if(x.cy>0){r=this.dx.y.length
v=this.a.eW
C.b.S(v.a,v.d,r)
m=a.db.ga1()
for(v=this.dx.y,u=v.length,p=[P.y],n=[z],l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
h=this.a.d8
if(l>=h.length)return H.f(h,l)
i=h[l]
h=j.gbx()
H.j(s,"$isa",n,"$asa")
if(!C.a.b4(s,h)){h.sbJ(s.length)
C.a.h(s,h)}e=m.k(0,j.ga1())
h=j.ga1()
g=$.bP
if(g==null){g=new V.aA(0,0,0)
$.bP=g}g=h.bc(g)
h=i.b
f=g.gdu(g)
d=g.gdv(g)
g=g.gdw(g)
C.b.w(h.a,h.d,f,d,g)
h=$.bP
if(h==null){h=new V.aA(0,0,0)
$.bP=h}h=e.bc(h)
g=i.c
C.b.w(g.a,g.d,h.a,h.b,h.c)
h=e.f7()
g=i.d
o=new Float32Array(H.bu(H.j(new V.eR(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ac(0,!0),"$isa",p,"$asa")))
C.b.fs(g.a,g.d,!1,o)
g=j.gT(j)
h=i.e
f=g.gb8()
d=g.gaQ()
g=g.gb0()
C.b.w(h.a,h.d,f,d,g)
g=j.gbx()
h=g.gdg(g)
if(!h){h=i.r
C.b.S(h.a,h.d,1)}else{h=i.f
f=g.gdg(g)
d=h.a
h=h.d
if(!f)C.b.S(d,h,0)
else C.b.S(d,h,g.gm6(g))
h=i.r
C.b.S(h.a,h.d,0)}h=j.gcU()
g=i.x
C.b.O(g.a,g.d,h)
h=j.gcV()
g=i.y
C.b.O(g.a,g.d,h)
h=j.gcW()
g=i.z
C.b.O(g.a,g.d,h);++l}}if(x.db>0){r=this.dx.z.length
v=this.a.eX
C.b.S(v.a,v.d,r)
m=a.db.ga1()
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
p=this.a.d9
if(l>=p.length)return H.f(p,l)
i=p[l]
p=j.gbx()
H.j(s,"$isa",z,"$asa")
if(!C.a.b4(s,p)){p.sbJ(s.length)
C.a.h(s,p)}p=j.gbv(j)
n=i.b
h=p.gdu(p)
g=p.gdv(p)
p=p.gdw(p)
C.b.w(n.a,n.d,h,g,p)
p=j.gbW(j)
g=i.c
h=p.gaL(p)
n=p.gaM(p)
p=p.gb5()
C.b.w(g.a,g.d,h,n,p)
p=j.gcg()
n=i.d
h=p.gaL(p)
g=p.gaM(p)
p=p.gb5()
C.b.w(n.a,n.d,h,g,p)
p=j.gbw(j)
g=i.e
h=p.gaL(p)
n=p.gaM(p)
p=p.gb5()
C.b.w(g.a,g.d,h,n,p)
p=m.bc(j.gbv(j))
n=i.f
C.b.w(n.a,n.d,p.a,p.b,p.c)
p=j.gbx()
n=p.gdg(p)
if(!n){p=i.x
C.b.S(p.a,p.d,1)}else{n=i.r
h=p.ghX()
g=n.a
n=n.d
if(!h)C.b.S(g,n,0)
else C.b.S(g,n,p.gbJ())
p=i.x
C.b.S(p.a,p.d,0)}p=j.gT(j)
n=i.y
h=p.gb8()
g=p.gaQ()
p=p.gb0()
C.b.w(n.a,n.d,h,g,p)
p=j.gmg()
g=i.z
C.b.O(g.a,g.d,p)
p=j.gmh()
g=i.Q
C.b.O(g.a,g.d,p)
p=j.gcU()
g=i.ch
C.b.O(g.a,g.d,p)
p=j.gcV()
g=i.cx
C.b.O(g.a,g.d,p)
p=j.gcW()
g=i.cy
C.b.O(g.a,g.d,p);++l}}}switch(x.f){case C.d:break
case C.i:break
case C.f:this.a0(s,this.Q.d)
z=this.a
v=this.Q.d
z.ar(z.eI,z.c3,v)
break
case C.h:this.a0(s,this.Q.e)
z=this.a
v=this.Q.e
z.aj(z.eJ,z.c3,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db.ga1().f7()
a.Q=v}z=z.id
z.toString
z.ae(v.ac(0,!0))}if(x.dy){this.a0(s,this.ch)
z=this.a
v=this.ch
z.aj(z.eK,z.eL,v)
switch(x.r){case C.d:break
case C.i:z=this.a
v=this.cx.f
z=z.c4
z.toString
u=v.a
p=v.b
v=v.c
C.b.w(z.a,z.d,u,p,v)
break
case C.f:this.a0(s,this.cx.d)
z=this.a
v=this.cx.d
z.ar(z.eM,z.c5,v)
v=this.a
z=this.cx.f
v=v.c4
v.toString
u=z.a
p=z.b
z=z.c
C.b.w(v.a,v.d,u,p,z)
break
case C.h:this.a0(s,this.cx.e)
z=this.a
v=this.cx.e
z.aj(z.eN,z.c5,v)
v=this.a
z=this.cx.f
v=v.c4
v.toString
u=z.a
p=z.b
z=z.c
C.b.w(v.a,v.d,u,p,z)
break}switch(x.x){case C.d:break
case C.i:z=this.a
v=this.cy.f
z=z.c7
z.toString
u=v.a
p=v.b
v=v.c
C.b.w(z.a,z.d,u,p,v)
v=this.a
p=this.cy.ch
v=v.c6
C.b.O(v.a,v.d,p)
break
case C.f:this.a0(s,this.cy.d)
z=this.a
v=this.cy.d
z.ar(z.eO,z.c8,v)
v=this.a
z=this.cy.f
v=v.c7
v.toString
u=z.a
p=z.b
z=z.c
C.b.w(v.a,v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.c6
C.b.O(z.a,z.d,p)
break
case C.h:this.a0(s,this.cy.e)
z=this.a
v=this.cy.e
z.aj(z.eP,z.c8,v)
v=this.a
z=this.cy.f
v=v.c7
v.toString
u=z.a
p=z.b
z=z.c
C.b.w(v.a,v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.c6
C.b.O(z.a,z.d,p)
break}}z=x.y
v=z!==C.d
if(v){switch(z){case C.d:break
case C.i:z=this.a
u=this.db.f
z=z.c9
C.b.O(z.a,z.d,u)
break
case C.f:this.a0(s,this.db.d)
z=this.a
u=this.db.d
z.ar(z.eQ,z.ca,u)
u=this.a
z=this.db.f
u=u.c9
C.b.O(u.a,u.d,z)
break
case C.h:this.a0(s,this.db.e)
z=this.a
u=this.db.e
z.aj(z.eR,z.ca,u)
u=this.a
z=this.db.f
u=u.c9
C.b.O(u.a,u.d,z)
break}z=a.a
C.b.aA(z,3042)
C.b.aI(z,770,771)}for(z=a.a,q=0;q<s.length;++q){u=s[q]
if(!u.c&&u.d){u.c=!0
C.b.en(z,33984+u.a)
C.b.b_(z,3553,u.b)}}u=H.k(b.e,"$isc3")
u.aH(a)
u.aO(a)
u.fq(a)
if(v)C.b.d3(z,3042)
for(q=0;q<s.length;++q){v=s[q]
if(v.c){v.c=!1
C.b.en(z,33984+v.a)
C.b.b_(z,3553,null)}}v=this.a
v.toString
C.b.ds(z,null)
v.x.ez()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dT().as},
p:{
eP:function(){var z,y,x
z=new O.bi()
z.shl(O.d5(V.az))
z.e.bF(z.gi9(),z.gia())
y=new O.bj(z,"emission")
y.c=C.d
y.f=new V.W(0,0,0)
z.f=y
y=new O.bj(z,"ambient")
y.c=C.d
y.f=new V.W(0,0,0)
z.r=y
y=new O.bj(z,"diffuse")
y.c=C.d
y.f=new V.W(0,0,0)
z.x=y
y=new O.bj(z,"invDiffuse")
y.c=C.d
y.f=new V.W(0,0,0)
z.y=y
y=new O.jB(z,"specular")
y.c=C.d
y.f=new V.W(0,0,0)
y.ch=100
z.z=y
y=new O.jy(z,"bump")
y.c=C.d
z.Q=y
z.ch=null
y=new O.bj(z,"reflect")
y.c=C.d
y.f=new V.W(0,0,0)
z.cx=y
y=new O.jA(z,"refract")
y.c=C.d
y.f=new V.W(0,0,0)
y.ch=1
z.cy=y
y=new O.jx(z,"alpha")
y.c=C.d
y.f=1
z.db=y
y=new D.jd()
y.cr(D.ac)
y.shz(H.d([],[D.eq]))
y.siB(H.d([],[D.eZ]))
y.siY(H.d([],[D.fa]))
y.sjd(H.d([],[D.fg]))
y.sje(H.d([],[D.fh]))
y.sjf(H.d([],[D.fi]))
y.Q=null
y.ch=null
y.dA(y.gi8(),y.giv(),y.gix())
z.dx=y
x=y.Q
if(x==null){x=D.K()
y.Q=x
y=x}else y=x
y.h(0,z.giN())
y=z.dx
x=y.ch
if(x==null){x=D.K()
y.ch=x
y=x}else y=x
y.h(0,z.gbH())
z.dy=null
return z}}},jx:{"^":"dg;0f,a,b,0c,0d,0e",
bP:function(a){var z,y
z=this.f
if(!$.t.$2(z,a)){y=this.f
this.f=a
z=new D.z(this.b,y,a,this,[P.y])
z.b=!0
this.a.G(z)}},
bh:function(){this.dE()
this.bP(1)},
aX:function(){this.cp()
this.bP(1)},
sfw:function(a,b){var z
if(b==null)b=1
if(b<=0)this.ev(0)
else if(this.c===C.d){this.c=C.i
this.cp()
this.bP(1)
z=this.a
z.a=null
z.G(null)}this.bP(b)}},dg:{"^":"b;",
G:[function(a){this.a.G(H.c(a,"$isx"))},function(){return this.G(null)},"h8","$1","$0","gbH",0,2,3],
bh:["dE",function(){}],
aX:["cp",function(){}],
ee:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gB().a3(0,this.gbH())
y=this.d
this.d=a
if(a!=null)a.gB().h(0,this.gbH())
z=new D.z(this.b+".texture2D",y,this.d,this,[T.ff])
z.b=!0
this.a.G(z)}},
ef:function(a){},
ev:function(a){var z
if(this.c!==C.d){this.c=C.d
z=this.a
z.a=null
z.G(null)}this.bh()
this.ee(null)
this.ef(null)
this.a.G(null)},
sby:function(a){var z=this.c
if(z!==C.f){if(z===C.d)this.aX()
this.c=C.f
this.ef(null)
z=this.a
z.a=null
z.G(null)}this.ee(a)}},jy:{"^":"dg;a,b,0c,0d,0e"},bj:{"^":"dg;0f,a,b,0c,0d,0e",
cP:function(a){var z,y
if(!J.Q(this.f,a)){z=this.f
this.f=a
y=new D.z(this.b+".color",z,a,this,[V.W])
y.b=!0
this.a.G(y)}},
bh:["dF",function(){this.dE()
this.cP(new V.W(0,0,0))}],
aX:["cq",function(){this.cp()
this.cP(new V.W(1,1,1))}],
sT:function(a,b){var z
if(this.c===C.d){this.c=C.i
this.aX()
z=this.a
z.a=null
z.G(null)}this.cP(b)}},jA:{"^":"bj;0ch,0f,a,b,0c,0d,0e",
ed:function(a){var z,y
z=this.ch
if(!$.t.$2(z,a)){y=this.ch
this.ch=a
z=new D.z(this.b+".refraction",y,a,this,[P.y])
z.b=!0
this.a.G(z)}},
bh:function(){this.dF()
this.ed(1)},
aX:function(){this.cq()
this.ed(1)}},jB:{"^":"bj;0ch,0f,a,b,0c,0d,0e",
bQ:function(a){var z,y
z=this.ch
if(!$.t.$2(z,a)){y=this.ch
this.ch=a
z=new D.z(this.b+".shininess",y,a,this,[P.y])
z.b=!0
this.a.G(z)}},
bh:function(){this.dF()
this.bQ(100)},
aX:function(){this.cq()
this.bQ(100)}},bR:{"^":"b;"}}],["","",,T,{"^":"",dw:{"^":"cY;"},ff:{"^":"dw;"},kx:{"^":"ff;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.K()
this.y=z}return z}},ky:{"^":"b;a,0b,0c,0d,0e",
kw:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
C.b.b_(z,3553,y)
C.b.cd(z,3553,10242,33071)
C.b.cd(z,3553,10243,33071)
C.b.cd(z,3553,10241,9729)
C.b.cd(z,3553,10240,9729)
C.b.b_(z,3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.kx()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.aa
W.V(x,"load",H.i(new T.kz(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
bp:function(a){return this.kw(a,!1,!1,!1,!1)},
iP:function(a,b,c){var z,y,x,w
b=V.e1(b,2)
z=V.e1(a.width,2)
y=V.e1(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d1(null,null)
x.width=z
x.height=y
w=H.c(C.n.fF(x,"2d"),"$isd2")
w.imageSmoothingEnabled=!1;(w&&C.z).k9(w,a,0,0,x.width,x.height)
return P.n0(C.z.hQ(w,0,0,x.width,x.height))}}},kz:{"^":"h:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.iP(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
C.b.b_(y,3553,this.e)
C.b.kP(y,37440,this.f?1:0)
C.b.l4(y,3553,0,6408,6408,5121,w)
if(this.r)C.b.fB(y,3553)
C.b.b_(y,3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.ka()}++x.e}}}],["","",,V,{"^":"",hN:{"^":"b;",
bq:function(a){return!0},
i:function(a){return"all"},
$isbL:1},bL:{"^":"b;"},eO:{"^":"b;0a",
saF:function(a){this.a=H.j(a,"$isa",[V.bL],"$asa")},
bq:["fS",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)if(z[x].bq(a))return!0
return!1}],
i:["dD",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbL:1},bN:{"^":"eO;0a",
bq:function(a){return!this.fS(a)},
i:function(a){return"!["+this.dD(0)+"]"}},ke:{"^":"b;0a",
siR:function(a){this.a=H.j(a,"$isB",[P.o,P.D],"$asB")},
fW:function(a){var z,y
if(a.a.length<=0)throw H.e(P.p("May not create a SetMatcher with zero characters."))
z=new H.aH(0,0,[P.o,P.D])
for(y=new H.eL(a,a.gm(a),0,[H.aG(a,"X",0)]);y.I();)z.q(0,y.d,!0)
this.siR(z)},
bq:function(a){return this.a.bV(a)},
i:function(a){return P.cf(this.a.gdf(),0,null)},
$isbL:1,
p:{
aj:function(a){var z=new V.ke()
z.fW(a)
return z}}},dr:{"^":"b;a,b,0c,0d",
sj9:function(a){this.c=H.j(a,"$isa",[V.dz],"$asa")},
H:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dz(this.a.R(0,b))
w.saF(H.d([],[V.bL]))
w.c=!1
C.a.h(this.c,w)
return w},
kg:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.bq(a))return w}return},
i:function(a){return this.b}},fm:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.hF(this.b,"\n","\\n")
y=H.hF(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},dy:{"^":"b;a,b,0c",
siK:function(a){var z=P.m
this.c=H.j(a,"$isB",[z,z],"$asB")},
i:function(a){return this.b}},kE:{"^":"b;0a,0b,0c",
siZ:function(a){this.a=H.j(a,"$isB",[P.m,V.dr],"$asB")},
sj5:function(a){this.b=H.j(a,"$isB",[P.m,V.dy],"$asB")},
R:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.dr(this,b)
z.sj9(H.d([],[V.dz]))
z.d=null
this.a.q(0,b,z)}return z},
bA:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.dy(this,a)
y=P.m
z.siK(new H.aH(0,0,[y,y]))
this.b.q(0,a,z)}return z},
l9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.d([],[V.fm])
y=this.c
x=[P.o]
w=H.d([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.J(a,t)
r=y.kg(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cf(w,0,null)
throw H.e(P.p("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.d([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cf(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.fm(o==null?p.b:o,q,t)}++t}}}},dz:{"^":"eO;b,0c,0a",
i:function(a){return this.b.b+": "+this.dD(0)}}}],["","",,X,{"^":"",ef:{"^":"b;",$isaV:1},is:{"^":"fd;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.K()
this.x=z}return z}},jM:{"^":"b;0a,0b,0c,0d,0e,0f",
gB:function(){var z=this.f
if(z==null){z=D.K()
this.f=z}return z},
be:[function(a){var z
H.c(a,"$isx")
z=this.f
if(!(z==null))z.L(a)},function(){return this.be(null)},"lh","$1","$0","gdJ",0,2,3],
sbr:function(a){var z,y
if(!J.Q(this.b,a)){z=this.b
if(z!=null)z.gB().a3(0,this.gdJ())
y=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gdJ())
z=new D.z("mover",y,this.b,this,[U.ap])
z.b=!0
this.be(z)}},
$isaV:1,
$isef:1},fd:{"^":"b;"}}],["","",,V,{"^":"",
nV:function(a){P.kD(C.O,new V.nW(a))},
hV:{"^":"b;a,b,0c,0d",
shr:function(a){this.d=H.j(a,"$isa",[W.d4],"$asa")},
aa:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
H.i(c,{func:1,ret:-1,args:[P.D]})
if(this.c==null)return
z=this.d.length
y=P.cg().gb7().j(0,this.a)
if(y==null||y.length<=z){x=d
w=!0}else{if(z>=y.length)return H.f(y,z)
x=y[z]==="1"
w=!1}c.$1(x)
v=document
u=v.createElement("label")
t=u.style
t.whiteSpace="nowrap"
J.cm(this.c).h(0,u)
s=W.ez("checkbox")
s.checked=x
t=W.aa
W.V(s,"change",H.i(new V.hW(this,c,s,z),{func:1,ret:-1,args:[t]}),!1,t)
C.p.Y(u,s)
r=v.createElement("span")
r.textContent=b
C.p.Y(u,r)
J.cm(this.c).h(0,v.createElement("br"))
C.a.h(this.d,s)
if(w)this.el(z,x)},
t:function(a,b,c){return this.aa(a,b,c,!1)},
el:function(a,b){var z,y,x,w,v,u,t
z=this.a
y=P.cg().gb7().j(0,z)
if(y==null)y=""
x=y.length
if(x<a)y=C.c.kH(y,a-x+1,"0")
w=a>0?C.c.u(y,0,a):""
w+=b?"1":"0"
x=a+1
if(x<y.length)w+=C.c.aw(y,x)
v=P.cg()
x=P.m
u=P.eK(v.gb7(),x,x)
u.q(0,z,w)
t=v.dn(u)
z=window.history
x=t.i(0)
z.toString;(z&&C.A).eb(z,new P.h4([],[]).ci(""),"",x)}},
hW:{"^":"h:11;a,b,c,d",
$1:function(a){var z=this.c
this.b.$1(z.checked)
this.a.el(this.d,z.checked)}},
nW:{"^":"h:56;a",
$1:function(a){H.c(a,"$isbn")
P.ck(C.j.fo(this.a.gkl(),2)+" fps")}},
k1:{"^":"b;a,b,0c",
aa:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.i(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.cg().gb7().j(0,H.l(z))
if(y==null)if(d){c.$0()
this.ek(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.cm(this.c).h(0,v)
t=W.ez("radio")
t.checked=x
t.name=z
z=W.aa
W.V(t,"change",H.i(new V.k2(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
C.p.Y(v,t)
s=w.createElement("span")
s.textContent=b
C.p.Y(v,s)
J.cm(this.c).h(0,w.createElement("br"))},
t:function(a,b,c){return this.aa(a,b,c,!1)},
ek:function(a){var z,y,x,w,v
z=P.cg()
y=P.m
x=P.eK(z.gb7(),y,y)
x.q(0,this.a,a)
w=z.dn(x)
y=window.history
v=w.i(0)
y.toString;(y&&C.A).eb(y,new P.h4([],[]).ci(""),"",v)},
p:{
f2:function(a,b){var z,y
z=new V.k1(a,!0)
y=C.w.cl(document,a)
z.c=y
if(y==null)H.q("Failed to find "+a+" for RadioGroup")
return z}}},
k2:{"^":"h:11;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.ek(this.d)}}},
kk:{"^":"b;0a,0b",
fX:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.y).Y(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.y.Y(y,w)
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
t=W.aa
W.V(z,"scroll",H.i(new V.kn(x),{func:1,ret:-1,args:[t]}),!1,t)},
eo:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.j(a,"$isa",[P.m],"$asa")
this.iT()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.l9(C.a.kq(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
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
if(H.hE(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=H.E(r[1])
q.textContent=H.E(r[0])
C.l.Y(y,q)}else{p=P.cK(C.a0,s,C.m,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.l(p)
q.textContent=s
C.l.Y(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.l.Y(y,t)
break}}C.l.Y(this.a,y)},
jI:function(a){var z,y,x,w,v,u,t
H.j(a,"$isa",[P.m],"$asa")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
C.l.Y(this.a,y)
w=C.a5.hT(y,-1)
x=H.c((w&&C.H).e0(w,-1),"$iscC").style
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
t=H.c(C.H.e0(w,-1),"$iscC")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.a4).Y(t,u)}},
iT:function(){var z,y,x,w
if(this.b!=null)return
z=new V.kE()
y=P.m
z.siZ(new H.aH(0,0,[y,V.dr]))
z.sj5(new H.aH(0,0,[y,V.dy]))
z.c=null
z.c=z.R(0,"Start")
y=z.R(0,"Start").H(0,"Bold")
x=V.aj(new H.ad("*"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Bold").H(0,"Bold")
x=new V.bN()
w=[V.bL]
x.saF(H.d([],w))
C.a.h(y.a,x)
y=V.aj(new H.ad("*"))
C.a.h(x.a,y)
y=z.R(0,"Bold").H(0,"BoldEnd")
x=V.aj(new H.ad("*"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Start").H(0,"Italic")
x=V.aj(new H.ad("_"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Italic").H(0,"Italic")
x=new V.bN()
x.saF(H.d([],w))
C.a.h(y.a,x)
y=V.aj(new H.ad("_"))
C.a.h(x.a,y)
y=z.R(0,"Italic").H(0,"ItalicEnd")
x=V.aj(new H.ad("_"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Start").H(0,"Code")
x=V.aj(new H.ad("`"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Code").H(0,"Code")
x=new V.bN()
x.saF(H.d([],w))
C.a.h(y.a,x)
y=V.aj(new H.ad("`"))
C.a.h(x.a,y)
y=z.R(0,"Code").H(0,"CodeEnd")
x=V.aj(new H.ad("`"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Start").H(0,"LinkHead")
x=V.aj(new H.ad("["))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"LinkHead").H(0,"LinkTail")
x=V.aj(new H.ad("|"))
C.a.h(y.a,x)
x=z.R(0,"LinkHead").H(0,"LinkEnd")
y=V.aj(new H.ad("]"))
C.a.h(x.a,y)
x.c=!0
x=z.R(0,"LinkHead").H(0,"LinkHead")
y=new V.bN()
y.saF(H.d([],w))
C.a.h(x.a,y)
x=V.aj(new H.ad("|]"))
C.a.h(y.a,x)
x=z.R(0,"LinkTail").H(0,"LinkEnd")
y=V.aj(new H.ad("]"))
C.a.h(x.a,y)
x.c=!0
x=z.R(0,"LinkTail").H(0,"LinkTail")
y=new V.bN()
y.saF(H.d([],w))
C.a.h(x.a,y)
x=V.aj(new H.ad("|]"))
C.a.h(y.a,x)
C.a.h(z.R(0,"Start").H(0,"Other").a,new V.hN())
x=z.R(0,"Other").H(0,"Other")
y=new V.bN()
y.saF(H.d([],w))
C.a.h(x.a,y)
x=V.aj(new H.ad("*_`["))
C.a.h(y.a,x)
x=z.R(0,"BoldEnd")
x.d=x.a.bA("Bold")
x=z.R(0,"ItalicEnd")
x.d=x.a.bA("Italic")
x=z.R(0,"CodeEnd")
x.d=x.a.bA("Code")
x=z.R(0,"LinkEnd")
x.d=x.a.bA("Link")
x=z.R(0,"Other")
x.d=x.a.bA("Other")
this.b=z},
p:{
kl:function(a,b){var z=new V.kk()
z.fX(a,!0)
return z}}},
kn:{"^":"h:11;a",
$1:function(a){P.fk(C.v,new V.km(this.a))}},
km:{"^":"h:0;a",
$0:function(){var z,y,x
z=C.j.av(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,G,{"^":"",
hB:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=V.kl("Test 032",!0)
x=W.d1(null,null)
x.className="pageLargeCanvas"
x.id="testCanvas"
C.l.Y(y.a,x)
w=[P.m]
y.eo(H.d(["The inspection test for shapes loaders. ","For generated shapes see test002. ","Note: Some shapes will take time to load."],w))
y.jI(H.d(["controls","shapes","scalars"],w))
y.eo(H.d(["\xab[Back to Tests|../]"],w))
w=document
v=C.w.cl(w,"testCanvas")
if(v==null)H.q(P.p("Failed to find an element with the identifier, testCanvas."))
u=E.kB(v,!0,!0,!0,!1)
z.a=!0
t=E.cp(null,!0,null,"",null,null)
y=new U.ev()
y.cr(U.ap)
y.bF(y.gi7(),y.giw())
y.e=null
y.f=V.ca()
y.r=0
s=u.r
r=new U.l3()
q=U.d8()
q.sdt(0,!0)
q.sdh(6.283185307179586)
q.sdj(0)
q.sab(0,0)
q.sdi(100)
q.sX(0)
q.sd2(0.5)
r.b=q
p=r.gaW()
q.gB().h(0,p)
q=U.d8()
q.sdt(0,!0)
q.sdh(6.283185307179586)
q.sdj(0)
q.sab(0,0)
q.sdi(100)
q.sX(0)
q.sd2(0.5)
r.c=q
q.gB().h(0,p)
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
o=new X.aR(!1,!1,!1)
n=r.d
r.d=o
q=[X.aR]
p=new D.z("modifiers",n,o,r,q)
p.b=!0
r.V(p)
p=r.f
if(p!==!1){r.f=!1
p=new D.z("invertX",p,!1,r,[P.D])
p.b=!0
r.V(p)}p=r.r
if(p!==!0){r.r=!0
p=new D.z("invertY",p,!0,r,[P.D])
p.b=!0
r.V(p)}r.bk(s)
y.h(0,r)
s=u.r
r=new U.l2()
p=U.d8()
p.sdt(0,!0)
p.sdh(6.283185307179586)
p.sdj(0)
p.sab(0,0)
p.sdi(100)
p.sX(0)
p.sd2(0.2)
r.b=p
p.gB().h(0,r.gaW())
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
o=new X.aR(!0,!1,!1)
n=r.c
r.c=o
p=new D.z("modifiers",n,o,r,q)
p.b=!0
r.V(p)
r.bk(s)
y.h(0,r)
s=u.r
r=new U.l4()
r.c=0.01
r.d=0
r.e=0
o=new X.aR(!1,!1,!1)
r.b=o
q=new D.z("modifiers",null,o,r,q)
q.b=!0
r.V(q)
r.bk(s)
y.h(0,r)
t.sbr(y)
m=new O.iB()
m.b=V.fJ()
m.c=new V.O(0.2,0.3,0.4,1)
m.d=new V.O(0.1,0.2,0.3,1)
m.e=new V.O(0.7,0.7,0.7,1)
m.f=new V.O(0.3,0.3,0.3,1)
m.r=new V.O(0.5,0.5,0.5,1)
m.x=new V.O(0.5,0.5,0.5,1)
m.y=new V.O(1,1,1,1)
m.z=new V.O(0.8,0.8,0.8,1)
m.Q=!1
m.ch=!1
m.cx=!1
m.cy=!1
m.db=!1
m.dx=!1
m.dy=!1
m.fr=!1
m.fx=!1
m.fy=!1
m.go=!1
m.id=!1
m.k1=!1
m.k2=!1
m.k3=!1
m.k4=!1
m.r1=!1
m.r2=1
m.sad(0.4)
y=new M.ij()
y.shs(0,O.d5(E.a1))
y.d.bF(y.gic(),y.gie())
y.e=null
y.f=null
y.r=null
y.x=null
l=new X.jM()
l.c=1.0471975511965976
l.d=0.1
l.e=2000
l.sbr(null)
s=l.c
if(!$.t.$2(s,1.0471975511965976)){n=l.c
l.c=1.0471975511965976
s=new D.z("fov",n,1.0471975511965976,l,[P.y])
s.b=!0
l.be(s)}s=l.d
if(!$.t.$2(s,0.1)){n=l.d
l.d=0.1
s=new D.z("near",n,0.1,l,[P.y])
s.b=!0
l.be(s)}s=l.e
if(!$.t.$2(s,2000)){n=l.e
l.e=2000
s=new D.z("far",n,2000,l,[P.y])
s.b=!0
l.be(s)}s=y.a
if(s!==l){if(s!=null)s.gB().a3(0,y.gax())
n=y.a
y.a=l
l.gB().h(0,y.gax())
s=new D.z("camera",n,y.a,y,[X.ef])
s.b=!0
y.aS(s)}k=new X.is()
s=new V.O(0,0,0,1)
k.a=s
k.b=!0
k.c=2000
k.d=!0
k.e=0
k.f=!1
s=$.f5
if(s==null){s=V.f4(0,0,1,1)
$.f5=s}k.r=s
s=y.b
if(s!==k){if(s!=null)s.gB().a3(0,y.gax())
n=y.b
y.b=k
k.gB().h(0,y.gax())
s=new D.z("target",n,y.b,y,[X.fd])
s.b=!0
y.aS(s)}y.sbb(null)
y.sbb(m)
y.d.h(0,t)
s=y.a
j=V.eT(0,0,5)
r=new U.ei()
r.a=j
s.sbr(r)
s=u.d
if(s!==y){if(s!=null)s.gB().a3(0,u.gdH())
u.d=y
y.gB().h(0,u.gdH())
u.h0()}y=new V.hV("controls",!0)
w=C.w.cl(w,"controls")
y.c=w
if(w==null)H.q("Failed to find controls for CheckGroup")
y.shr(H.d([],[W.d4]))
y.aa(0,"Material",new G.nh(z,t),!0)
y.t(0,"Filled",new G.ni(m))
y.aa(0,"Wire Frame",new G.nj(m),!0)
y.t(0,"Vertices",new G.nu(m))
y.t(0,"Normals",new G.nF(m))
y.t(0,"Binormals",new G.nH(m))
y.t(0,"Tangentals",new G.nI(m))
y.t(0,"Face Centers",new G.nJ(m))
y.t(0,"Face Normals",new G.nK(m))
y.t(0,"Face Binormals",new G.nL(m))
y.t(0,"Face Tangentals",new G.nM(m))
y.t(0,"Colors",new G.nk(m))
y.t(0,"Textures2D",new G.nl(m))
y.t(0,"TexturesCube",new G.nm(m))
y.t(0,"Weight",new G.nn(m))
y.aa(0,"Axis",new G.no(m),!0)
y.t(0,"AABB",new G.np(m))
z=new G.nP(z,u,t,new G.nN(),m)
y=V.f2("shapes",!0)
y.aa(0,"Cube",new G.nq(z),!0)
y.t(0,"Low Poly Tree",new G.nr(z))
y.t(0,"Low Poly Wolf",new G.ns(z))
y.t(0,"Plant",new G.nt(z))
z=V.f2("scalars",!0)
z.t(0,"0.01",new G.nv(m))
z.t(0,"0.02",new G.nw(m))
z.t(0,"0.04",new G.nx(m))
z.t(0,"0.06",new G.ny(m))
z.t(0,"0.08",new G.nz(m))
z.t(0,"0.1",new G.nA(m))
z.t(0,"0.2",new G.nB(m))
z.aa(0,"0.4",new G.nC(m),!0)
z.t(0,"0.6",new G.nD(m))
z.t(0,"0.8",new G.nE(m))
z.t(0,"1.0",new G.nG(m))
V.nV(u)},
nh:{"^":"h:1;a,b",
$1:function(a){var z
this.a.a=a
z=this.b.y.a
if(z.length>1)z[0].skc(a)}},
ni:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.Q!==a){z.Q=a
y=new D.z("showFilled",!a,a,z,[P.D])
y.b=!0
z.G(y)}}},
nj:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.ch!==a){z.ch=a
y=new D.z("showWireFrame",!a,a,z,[P.D])
y.b=!0
z.G(y)}}},
nu:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.cx!==a){z.cx=a
y=new D.z("showVertices",!a,a,z,[P.D])
y.b=!0
z.G(y)}}},
nF:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.cy!==a){z.cy=a
y=new D.z("showNormals",!a,a,z,[P.D])
y.b=!0
z.G(y)}}},
nH:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.db!==a){z.db=a
y=new D.z("showBinormals",!a,a,z,[P.D])
y.b=!0
z.G(y)}}},
nI:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.dx!==a){z.dx=a
y=new D.z("showTangentals",!a,a,z,[P.D])
y.b=!0
z.G(y)}}},
nJ:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fr!==a){z.fr=a
y=new D.z("showFaceCenters",!a,a,z,[P.D])
y.b=!0
z.G(y)}}},
nK:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fx!==a){z.fx=a
y=new D.z("showFaceNormals",!a,a,z,[P.D])
y.b=!0
z.G(y)}}},
nL:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fy!==a){z.fy=a
y=new D.z("showFaceBinormals",!a,a,z,[P.D])
y.b=!0
z.G(y)}}},
nM:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.go!==a){z.go=a
y=new D.z("showFaceTangentals",!a,a,z,[P.D])
y.b=!0
z.G(y)}}},
nk:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.id!==a){z.id=a
y=new D.z("showColorFill",!a,a,z,[P.D])
y.b=!0
z.G(y)}}},
nl:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k1!==a){z.k1=a
y=new D.z("showTxt2DColor",!a,a,z,[P.D])
y.b=!0
z.G(y)}}},
nm:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.dy!==a){z.dy=a
y=new D.z("showTxtCube",!a,a,z,[P.D])
y.b=!0
z.G(y)}}},
nn:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k2!==a){z.k2=a
y=new D.z("showWeight",!a,a,z,[P.D])
y.b=!0
z.G(y)}}},
no:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k3!==a){z.k3=a
y=new D.z("showAxis",!a,a,z,[P.D])
y.b=!0
z.G(y)}}},
np:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k4!==a){z.k4=a
y=new D.z("showAABB",!a,a,z,[P.D])
y.b=!0
z.G(y)}}},
nN:{"^":"h:58;",
$1:function(a){var z,y,x
z=E.cp(null,!0,null,"",null,null)
z.sdB(0,a.c)
y=a.y
x=H.i(new G.nO(z,this),{func:1,ret:-1,args:[H.r(y,0)]})
C.a.D(y.a,x)
return z}},
nO:{"^":"h:59;a,b",
$1:function(a){H.c(a,"$isa1")
this.a.y.h(0,this.b.$1(a))}},
nP:{"^":"h:60;a,b,c,d,e",
$1:function(a){var z=0,y=P.a7(null),x=this,w,v,u,t,s,r
var $async$$1=P.a8(function(b,c){if(b===1)return P.a4(c,y)
while(true)switch(z){case 0:z=2
return P.ag(O.cc(a,x.b.f,null,null,!1),$async$$1)
case 2:w=c
w.kZ(3.5)
v=x.c
u=v.y
t=u.a
if(t.length>0){s=H.r(u,0)
u.se3(H.d([],[s]))
H.j(t,"$isu",[s],"$asu")
u=u.d
if(u!=null)u.$2(0,t)}v.y.h(0,w)
w.b=x.a.a
r=x.d.$1(w)
r.sbb(x.e)
v.y.h(0,r)
return P.a5(null,y)}})
return P.a6($async$$1,y)}},
nq:{"^":"h:12;a",
$0:function(){var z=0,y=P.a7(P.w),x=this
var $async$$0=P.a8(function(a,b){if(a===1)return P.a4(b,y)
while(true)switch(z){case 0:x.a.$1("../resources/Cube.obj")
return P.a5(null,y)}})
return P.a6($async$$0,y)}},
nr:{"^":"h:12;a",
$0:function(){var z=0,y=P.a7(P.w),x=this
var $async$$0=P.a8(function(a,b){if(a===1)return P.a4(b,y)
while(true)switch(z){case 0:x.a.$1("../resources/tree/tree.obj")
return P.a5(null,y)}})
return P.a6($async$$0,y)}},
ns:{"^":"h:12;a",
$0:function(){var z=0,y=P.a7(P.w),x=this
var $async$$0=P.a8(function(a,b){if(a===1)return P.a4(b,y)
while(true)switch(z){case 0:x.a.$1("../resources/Wolf.obj")
return P.a5(null,y)}})
return P.a6($async$$0,y)}},
nt:{"^":"h:12;a",
$0:function(){var z=0,y=P.a7(P.w),x=this
var $async$$0=P.a8(function(a,b){if(a===1)return P.a4(b,y)
while(true)switch(z){case 0:x.a.$1("../resources/plant/plant.obj")
return P.a5(null,y)}})
return P.a6($async$$0,y)}},
nv:{"^":"h:0;a",
$0:function(){this.a.sad(0.01)}},
nw:{"^":"h:0;a",
$0:function(){this.a.sad(0.02)}},
nx:{"^":"h:0;a",
$0:function(){this.a.sad(0.04)}},
ny:{"^":"h:0;a",
$0:function(){this.a.sad(0.06)}},
nz:{"^":"h:0;a",
$0:function(){this.a.sad(0.08)}},
nA:{"^":"h:0;a",
$0:function(){this.a.sad(0.1)}},
nB:{"^":"h:0;a",
$0:function(){this.a.sad(0.2)}},
nC:{"^":"h:0;a",
$0:function(){this.a.sad(0.4)}},
nD:{"^":"h:0;a",
$0:function(){this.a.sad(0.6)}},
nE:{"^":"h:0;a",
$0:function(){this.a.sad(0.8)}},
nG:{"^":"h:0;a",
$0:function(){this.a.sad(1)}}},1]]
setupProgram(dart,0,0)
J.N=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eD.prototype
return J.eC.prototype}if(typeof a=="string")return J.c9.prototype
if(a==null)return J.eE.prototype
if(typeof a=="boolean")return J.j5.prototype
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.b)return a
return J.ci(a)}
J.n6=function(a){if(typeof a=="number")return J.c8.prototype
if(typeof a=="string")return J.c9.prototype
if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.b)return a
return J.ci(a)}
J.bb=function(a){if(typeof a=="string")return J.c9.prototype
if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.b)return a
return J.ci(a)}
J.hu=function(a){if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.b)return a
return J.ci(a)}
J.hv=function(a){if(typeof a=="number")return J.c8.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cF.prototype
return a}
J.bZ=function(a){if(typeof a=="string")return J.c9.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cF.prototype
return a}
J.aT=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.b)return a
return J.ci(a)}
J.cl=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.n6(a).l(a,b)}
J.Q=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).A(a,b)}
J.e4=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.hv(a).aP(a,b)}
J.cS=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.hv(a).F(a,b)}
J.R=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nf(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bb(a).j(a,b)}
J.hH=function(a,b,c,d){return J.aT(a).he(a,b,c,d)}
J.hI=function(a,b){return J.bZ(a).J(a,b)}
J.cT=function(a,b,c){return J.aT(a).iL(a,b,c)}
J.e5=function(a,b){return J.aT(a).Y(a,b)}
J.hJ=function(a,b){return J.bZ(a).Z(a,b)}
J.cU=function(a,b,c){return J.bb(a).jV(a,b,c)}
J.cV=function(a,b){return J.hu(a).ak(a,b)}
J.hK=function(a,b,c,d){return J.aT(a).kf(a,b,c,d)}
J.cm=function(a){return J.aT(a).gd0(a)}
J.c0=function(a){return J.N(a).ga_(a)}
J.c1=function(a){return J.hu(a).ga5(a)}
J.ar=function(a){return J.bb(a).gm(a)}
J.e6=function(a,b){return J.bZ(a).dc(a,b)}
J.hL=function(a,b){return J.aT(a).kW(a,b)}
J.hM=function(a,b){return J.aT(a).sla(a,b)}
J.e7=function(a,b,c){return J.bZ(a).u(a,b,c)}
J.as=function(a){return J.N(a).i(a)}
J.cW=function(a){return J.bZ(a).fp(a)}
I.av=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.y=W.hR.prototype
C.n=W.d0.prototype
C.z=W.d2.prototype
C.l=W.er.prototype
C.A=W.it.prototype
C.w=W.iv.prototype
C.P=W.bH.prototype
C.Q=J.L.prototype
C.a=J.b6.prototype
C.R=J.eC.prototype
C.e=J.eD.prototype
C.o=J.eE.prototype
C.j=J.c8.prototype
C.c=J.c9.prototype
C.Y=J.bJ.prototype
C.p=W.jc.prototype
C.a3=W.jI.prototype
C.G=J.jN.prototype
C.b=P.dq.prototype
C.a4=W.cC.prototype
C.a5=W.kt.prototype
C.H=W.ku.prototype
C.x=J.cF.prototype
C.I=W.bT.prototype
C.J=W.ln.prototype
C.L=new P.hQ(!1)
C.K=new P.hP(C.L)
C.M=new P.jL()
C.N=new P.lc()
C.k=new P.m_()
C.d=new A.co(0,"ColorSourceType.None")
C.i=new A.co(1,"ColorSourceType.Solid")
C.f=new A.co(2,"ColorSourceType.Texture2D")
C.h=new A.co(3,"ColorSourceType.TextureCube")
C.v=new P.bg(0)
C.O=new P.bg(5e6)
C.S=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.T=function(hooks) {
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
C.B=function(hooks) { return hooks; }

C.U=function(getTagFallback) {
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
C.V=function() {
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
C.W=function(hooks) {
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
C.X=function(hooks) {
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
C.C=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.D=H.d(I.av([127,2047,65535,1114111]),[P.o])
C.q=H.d(I.av([0,0,32776,33792,1,10240,0,0]),[P.o])
C.r=H.d(I.av([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.t=H.d(I.av([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.a_=H.d(I.av([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.a0=H.d(I.av([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.u=H.d(I.av([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.E=H.d(I.av([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.a1=H.d(I.av([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.F=H.d(I.av([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.Z=H.d(I.av([]),[P.m])
C.a2=new H.i5(0,{},C.Z,[P.m,P.m])
C.m=new P.l5(!1)
$.aO=0
$.bE=null
$.ea=null
$.dS=!1
$.hy=null
$.hp=null
$.hD=null
$.cN=null
$.cP=null
$.e_=null
$.bv=null
$.bW=null
$.bX=null
$.dT=!1
$.I=C.k
$.eo=null
$.en=null
$.em=null
$.el=null
$.hl=null
$.t=V.jC()
$.eU=null
$.f_=null
$.bP=null
$.f5=null
$.f8=null
$.fE=null
$.fI=null
$.fG=null
$.fH=null
$.fF=null
$.iT="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.iL="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
$.eY=null
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
I.$lazy(y,x,w)}})(["ek","$get$ek",function(){return H.hw("_$dart_dartClosure")},"dc","$get$dc",function(){return H.hw("_$dart_js")},"fo","$get$fo",function(){return H.aS(H.cD({
toString:function(){return"$receiver$"}}))},"fp","$get$fp",function(){return H.aS(H.cD({$method$:null,
toString:function(){return"$receiver$"}}))},"fq","$get$fq",function(){return H.aS(H.cD(null))},"fr","$get$fr",function(){return H.aS(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fv","$get$fv",function(){return H.aS(H.cD(void 0))},"fw","$get$fw",function(){return H.aS(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ft","$get$ft",function(){return H.aS(H.fu(null))},"fs","$get$fs",function(){return H.aS(function(){try{null.$method$}catch(z){return z.message}}())},"fy","$get$fy",function(){return H.aS(H.fu(void 0))},"fx","$get$fx",function(){return H.aS(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dO","$get$dO",function(){return P.ls()},"bY","$get$bY",function(){return[]},"fD","$get$fD",function(){return P.l9()},"fS","$get$fS",function(){return H.jG(H.bu(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))},"hc","$get$hc",function(){return P.dp("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hj","$get$hj",function(){return P.mG()},"ej","$get$ej",function(){return{}},"fN","$get$fN",function(){return Z.aE(0)},"fL","$get$fL",function(){return Z.aE(511)},"aN","$get$aN",function(){return Z.aE(1)},"aM","$get$aM",function(){return Z.aE(2)},"aL","$get$aL",function(){return Z.aE(4)},"aZ","$get$aZ",function(){return Z.aE(8)},"b_","$get$b_",function(){return Z.aE(16)},"b9","$get$b9",function(){return Z.aE(32)},"bS","$get$bS",function(){return Z.aE(64)},"fM","$get$fM",function(){return Z.aE(96)},"br","$get$br",function(){return Z.aE(128)},"aY","$get$aY",function(){return Z.aE(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.w},{func:1,ret:P.w,args:[P.D]},{func:1,ret:F.ak,args:[F.ak]},{func:1,ret:-1,opt:[D.x]},{func:1,ret:P.w,args:[F.F]},{func:1,ret:-1,args:[D.x]},{func:1,ret:P.w,args:[F.C]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:P.w,args:[,,]},{func:1,ret:-1,args:[P.o,[P.u,E.a1]]},{func:1,ret:P.w,args:[W.aa]},{func:1,ret:[P.ab,P.w]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.w,args:[D.x]},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[W.bp]},{func:1,ret:P.w,args:[,]},{func:1,ret:P.m,args:[P.o]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bK]},{func:1,ret:-1,args:[P.o,[P.u,D.ac]]},{func:1,ret:P.y},{func:1,ret:-1,args:[P.o,[P.u,U.ap]]},{func:1,ret:-1,args:[P.o,[P.u,V.az]]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:P.M,args:[P.o]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.m,args:[W.bH]},{func:1,ret:P.w,args:[W.ce]},{func:1,args:[W.aa]},{func:1,ret:P.D,args:[W.P]},{func:1,ret:W.a0,args:[W.P]},{func:1,ret:-1,args:[,]},{func:1,ret:P.w,args:[,P.am]},{func:1,ret:P.w,args:[P.o,,]},{func:1,ret:P.w,args:[P.aw]},{func:1,ret:P.w,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:-1,args:[P.b],opt:[P.am]},{func:1,ret:-1,opt:[P.b]},{func:1,ret:P.w,args:[,],opt:[,]},{func:1,ret:P.D,args:[P.y,P.y]},{func:1,ret:[P.aq,,],args:[,]},{func:1,ret:P.D,args:[[P.u,D.ac]]},{func:1,ret:P.w,args:[{func:1,ret:-1}]},{func:1,ret:P.o,args:[[P.a,P.o],P.o]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,args:[P.m]},{func:1,ret:[P.B,P.m,P.m],args:[[P.B,P.m,P.m],P.m]},{func:1,ret:-1,args:[P.m,P.o]},{func:1,ret:F.ak,args:[F.ak],named:{color:V.O}},{func:1,ret:-1,args:[P.m],opt:[,]},{func:1,ret:-1,args:[F.C,F.C]},{func:1,ret:P.w,args:[F.aI]},{func:1,args:[,P.m]},{func:1,ret:P.w,args:[P.m]},{func:1,ret:P.w,args:[P.bn]},{func:1,ret:P.m,args:[P.m]},{func:1,ret:E.a1,args:[E.a1]},{func:1,ret:P.w,args:[E.a1]},{func:1,ret:[P.ab,,],args:[P.m]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.w,args:[P.m,,]},{func:1,ret:-1,args:[W.bT]}]
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
if(x==y)H.nX(d||a)
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
Isolate.av=a.av
Isolate.dZ=a.dZ
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
if(typeof dartMainRunner==="function")dartMainRunner(G.hB,[])
else G.hB([])})})()
//# sourceMappingURL=test.dart.js.map
