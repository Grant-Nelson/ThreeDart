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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dX(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dY=function(){}
var dart=[["","",,H,{"^":"",nz:{"^":"a;a"}}],["","",,J,{"^":"",
e1:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cP:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.e0==null){H.mZ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.cC("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dc()]
if(v!=null)return v
v=H.n2(a)
if(v!=null)return v
if(typeof a=="function")return C.a6
y=Object.getPrototypeOf(a)
if(y==null)return C.N
if(y===Object.prototype)return C.N
if(typeof w=="function"){Object.defineProperty(w,$.$get$dc(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
H:{"^":"a;",
A:function(a,b){return a===b},
ga0:function(a){return H.bH(a)},
i:["fI",function(a){return"Instance of '"+H.bc(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
iJ:{"^":"H;",
i:function(a){return String(a)},
ga0:function(a){return a?519018:218159},
$isM:1},
eC:{"^":"H;",
A:function(a,b){return null==b},
i:function(a){return"null"},
ga0:function(a){return 0},
$isE:1},
dd:{"^":"H;",
ga0:function(a){return 0},
i:["fK",function(a){return String(a)}]},
jn:{"^":"dd;"},
cD:{"^":"dd;"},
c5:{"^":"dd;",
i:function(a){var z=a[$.$get$el()]
if(z==null)return this.fK(a)
return"JavaScript function for "+H.i(J.ae(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isc0:1},
b7:{"^":"H;$ti",
h:function(a,b){H.y(b,H.r(a,0))
if(!!a.fixed$length)H.q(P.X("add"))
a.push(b)},
Y:function(a,b){var z
if(!!a.fixed$length)H.q(P.X("remove"))
for(z=0;z<a.length;++z)if(J.a0(a[z],b)){a.splice(z,1)
return!0}return!1},
ac:function(a,b){var z,y
H.k(b,"$isn",[H.r(a,0)],"$asn")
if(!!a.fixed$length)H.q(P.X("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.A)(b),++y)a.push(b[y])},
S:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.aB(a))}},
l:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.q(z,y,H.i(a[y]))
return z.join(b)},
jZ:function(a){return this.l(a,"")},
jR:function(a,b,c,d){var z,y,x
H.y(b,d)
H.l(c,{func:1,ret:d,args:[d,H.r(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.e(P.aB(a))}return y},
jQ:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.M,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.e(P.aB(a))}throw H.e(H.db())},
jP:function(a,b){return this.jQ(a,b,null)},
ae:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fH:function(a,b,c){if(b<0||b>a.length)throw H.e(P.a1(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.a1(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.r(a,0)])
return H.c(a.slice(b,c),[H.r(a,0)])},
gaD:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.db())},
el:function(a,b){var z,y
H.l(b,{func:1,ret:P.M,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.e(P.aB(a))}return!1},
a_:function(a,b){var z
for(z=0;z<a.length;++z)if(J.a0(a[z],b))return!0
return!1},
i:function(a){return P.da(a,"[","]")},
gT:function(a){return new J.as(a,a.length,0,[H.r(a,0)])},
ga0:function(a){return H.bH(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.X("set length"))
if(b<0)throw H.e(P.a1(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(b>=a.length||b<0)throw H.e(H.bo(a,b))
return a[b]},
q:function(a,b,c){H.y(c,H.r(a,0))
if(!!a.immutable$list)H.q(P.X("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bo(a,b))
a[b]=c},
$isn:1,
$isb:1,
p:{
iI:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.cX(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.a1(a,0,4294967295,"length",null))
return J.ez(new Array(a),b)},
ez:function(a,b){return J.co(H.c(a,[b]))},
co:function(a){H.cd(a)
a.fixed$length=Array
return a}}},
ny:{"^":"b7;$ti"},
as:{"^":"a;a,b,c,0d,$ti",
sdQ:function(a){this.d=H.y(a,H.r(this,0))},
gK:function(){return this.d},
B:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.A(z))
x=this.c
if(x>=y){this.sdQ(null)
return!1}this.sdQ(z[x]);++this.c
return!0},
$isb0:1},
cp:{"^":"H;",
kC:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.e(P.X(""+a+".toInt()"))},
d_:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.X(""+a+".floor()"))},
av:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.X(""+a+".round()"))},
ff:function(a,b){var z,y
if(b>20)throw H.e(P.a1(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
by:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.e(P.a1(b,2,36,"radix",null))
z=a.toString(b)
if(C.c.a4(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.q(P.X("Unexpected toString result: "+z))
x=y.length
if(1>=x)return H.f(y,1)
z=y[1]
if(3>=x)return H.f(y,3)
w=+y[3]
x=y[2]
if(x!=null){z+=x
w-=x.length}return z+C.c.D("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga0:function(a){return a&0x1FFFFFFF},
bD:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fO:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ee(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.ee(a,b)},
ee:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.X("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
aY:function(a,b){var z
if(a>0)z=this.ec(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
iC:function(a,b){if(b<0)throw H.e(H.ai(b))
return this.ec(a,b)},
ec:function(a,b){return b>31?0:a>>>b},
U:function(a,b){if(typeof b!=="number")throw H.e(H.ai(b))
return a<b},
$isz:1,
$isaj:1},
eB:{"^":"cp;",$ism:1},
eA:{"^":"cp;"},
cq:{"^":"H;",
a4:function(a,b){if(b<0)throw H.e(H.bo(a,b))
if(b>=a.length)H.q(H.bo(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.e(H.bo(a,b))
return a.charCodeAt(b)},
I:function(a,b){H.D(b)
if(typeof b!=="string")throw H.e(P.cX(b,null,null))
return a+b},
b6:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ai(b))
c=P.b2(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ak:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.ai(c))
if(typeof c!=="number")return c.U()
if(c<0||c>a.length)throw H.e(P.a1(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a8:function(a,b){return this.ak(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ai(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.U()
if(b<0)throw H.e(P.cw(b,null,null))
if(b>c)throw H.e(P.cw(b,null,null))
if(c>a.length)throw H.e(P.cw(c,null,null))
return a.substring(b,c)},
ay:function(a,b){return this.u(a,b,null)},
kF:function(a){return a.toLowerCase()},
D:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.T)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
kf:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.D(c,z)+a},
ao:function(a,b){return this.kf(a,b," ")},
f1:function(a,b,c){var z
if(c<0||c>a.length)throw H.e(P.a1(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
f0:function(a,b){return this.f1(a,b,0)},
jv:function(a,b,c){if(c>a.length)throw H.e(P.a1(c,0,a.length,null,null))
return H.hx(a,b,c)},
i:function(a){return a},
ga0:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$iseU:1,
$ish:1}}],["","",,H,{"^":"",
cQ:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
db:function(){return new P.dq("No element")},
iH:function(){return new P.dq("Too many elements")},
u:{"^":"kF;a",
gm:function(a){return this.a.length},
k:function(a,b){return C.c.a4(this.a,b)},
$asdH:function(){return[P.m]},
$asT:function(){return[P.m]},
$asn:function(){return[P.m]},
$asb:function(){return[P.m]}},
es:{"^":"n;"},
cs:{"^":"es;$ti",
gT:function(a){return new H.df(this,this.gm(this),0,[H.a3(this,"cs",0)])},
di:function(a,b){return this.fJ(0,H.l(b,{func:1,ret:P.M,args:[H.a3(this,"cs",0)]}))}},
df:{"^":"a;a,b,c,0d,$ti",
sbb:function(a){this.d=H.y(a,H.r(this,0))},
gK:function(){return this.d},
B:function(){var z,y,x,w
z=this.a
y=J.bq(z)
x=y.gm(z)
if(this.b!==x)throw H.e(P.aB(z))
w=this.c
if(w>=x){this.sbb(null)
return!1}this.sbb(y.ae(z,w));++this.c
return!0},
$isb0:1},
j2:{"^":"n;a,b,$ti",
gT:function(a){return new H.j3(J.b5(this.a),this.b,this.$ti)},
gm:function(a){return J.ar(this.a)},
ae:function(a,b){return this.b.$1(J.cf(this.a,b))},
$asn:function(a,b){return[b]}},
j3:{"^":"b0;0a,b,c,$ti",
sbb:function(a){this.a=H.y(a,H.r(this,1))},
B:function(){var z=this.b
if(z.B()){this.sbb(this.c.$1(z.gK()))
return!0}this.sbb(null)
return!1},
gK:function(){return this.a},
$asb0:function(a,b){return[b]}},
j4:{"^":"cs;a,b,$ti",
gm:function(a){return J.ar(this.a)},
ae:function(a,b){return this.b.$1(J.cf(this.a,b))},
$ascs:function(a,b){return[b]},
$asn:function(a,b){return[b]}},
dL:{"^":"n;a,b,$ti",
gT:function(a){return new H.l8(J.b5(this.a),this.b,this.$ti)}},
l8:{"^":"b0;a,b,$ti",
B:function(){var z,y
for(z=this.a,y=this.b;z.B();)if(y.$1(z.gK()))return!0
return!1},
gK:function(){return this.a.gK()}},
cn:{"^":"a;$ti"},
dH:{"^":"a;$ti",
q:function(a,b,c){H.y(c,H.a3(this,"dH",0))
throw H.e(P.X("Cannot modify an unmodifiable list"))}},
kF:{"^":"cr+dH;"}}],["","",,H,{"^":"",
i1:function(){throw H.e(P.X("Cannot modify unmodifiable Map"))},
bt:function(a){var z,y
z=H.D(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
mS:function(a){return init.types[H.a4(a)]},
n1:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.N(a).$isau},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ae(a)
if(typeof z!=="string")throw H.e(H.ai(a))
return z},
bH:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jy:function(a,b){var z,y,x,w,v,u
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
for(v=w.length,u=0;u<v;++u)if((C.c.G(w,u)|32)>x)return}return parseInt(a,b)},
bc:function(a){return H.jp(a)+H.dU(H.b4(a),0,null)},
jp:function(a){var z,y,x,w,v,u,t,s,r
z=J.N(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.Z||!!z.$iscD){u=C.G(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bt(w.length>1&&C.c.G(w,0)===36?C.c.ay(w,1):w)},
jq:function(){if(!!self.location)return self.location.href
return},
f_:function(a){var z,y,x,w,v
H.cd(a)
z=J.ar(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jz:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.ai(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.aY(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.e(H.ai(w))}return H.f_(z)},
f0:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.ai(x))
if(x<0)throw H.e(H.ai(x))
if(x>65535)return H.jz(a)}return H.f_(a)},
jA:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bd:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.aY(z,10))>>>0,56320|z&1023)}}throw H.e(P.a1(a,0,1114111,null,null))},
bb:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jx:function(a){var z=H.bb(a).getFullYear()+0
return z},
jv:function(a){var z=H.bb(a).getMonth()+1
return z},
jr:function(a){var z=H.bb(a).getDate()+0
return z},
js:function(a){var z=H.bb(a).getHours()+0
return z},
ju:function(a){var z=H.bb(a).getMinutes()+0
return z},
jw:function(a){var z=H.bb(a).getSeconds()+0
return z},
jt:function(a){var z=H.bb(a).getMilliseconds()+0
return z},
B:function(a){throw H.e(H.ai(a))},
f:function(a,b){if(a==null)J.ar(a)
throw H.e(H.bo(a,b))},
bo:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aL(!0,b,"index",null)
z=H.a4(J.ar(a))
if(!(b<0)){if(typeof z!=="number")return H.B(z)
y=b>=z}else y=!0
if(y)return P.b6(b,a,"index",null,z)
return P.cw(b,"index",null)},
mN:function(a,b,c){if(a>c)return new P.cv(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cv(a,c,!0,b,"end","Invalid value")
return new P.aL(!0,b,"end",null)},
ai:function(a){return new P.aL(!0,a,null,null)},
mI:function(a){if(typeof a!=="number")throw H.e(H.ai(a))
return a},
e:function(a){var z
if(a==null)a=new P.eT()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hy})
z.name=""}else z.toString=H.hy
return z},
hy:function(){return J.ae(this.dartException)},
q:function(a){throw H.e(a)},
A:function(a){throw H.e(P.aB(a))},
a9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.no(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.aY(x,16)&8191)===10)switch(w){case 438:return z.$1(H.de(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eS(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fn()
u=$.$get$fo()
t=$.$get$fp()
s=$.$get$fq()
r=$.$get$fu()
q=$.$get$fv()
p=$.$get$fs()
$.$get$fr()
o=$.$get$fx()
n=$.$get$fw()
m=v.an(y)
if(m!=null)return z.$1(H.de(H.D(y),m))
else{m=u.an(y)
if(m!=null){m.method="call"
return z.$1(H.de(H.D(y),m))}else{m=t.an(y)
if(m==null){m=s.an(y)
if(m==null){m=r.an(y)
if(m==null){m=q.an(y)
if(m==null){m=p.an(y)
if(m==null){m=s.an(y)
if(m==null){m=o.an(y)
if(m==null){m=n.an(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eS(H.D(y),m))}}return z.$1(new H.kE(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f9()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aL(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f9()
return a},
br:function(a){var z
if(a==null)return new H.h_(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h_(a)},
mQ:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.q(0,a[y],a[x])}return b},
n0:function(a,b,c,d,e,f){H.d(a,"$isc0")
switch(H.a4(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.t("Unsupported number of arguments for wrapped closure"))},
bn:function(a,b){var z
H.a4(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.n0)
a.$identity=z
return z},
hX:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.N(d).$isb){z.$reflectionInfo=d
x=H.jH(z).r}else x=d
w=e?Object.create(new H.k5().constructor.prototype):Object.create(new H.cZ(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aA
if(typeof u!=="number")return u.I()
$.aA=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.eh(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.mS,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.ec:H.d_
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
hU:function(a,b,c,d){var z=H.d_
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
eh:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hW(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hU(y,!w,z,b)
if(y===0){w=$.aA
if(typeof w!=="number")return w.I()
$.aA=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bw
if(v==null){v=H.ch("self")
$.bw=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aA
if(typeof w!=="number")return w.I()
$.aA=w+1
t+=w
w="return function("+t+"){return this."
v=$.bw
if(v==null){v=H.ch("self")
$.bw=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
hV:function(a,b,c,d){var z,y
z=H.d_
y=H.ec
switch(b?-1:a){case 0:throw H.e(H.jQ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hW:function(a,b){var z,y,x,w,v,u,t,s
z=$.bw
if(z==null){z=H.ch("self")
$.bw=z}y=$.eb
if(y==null){y=H.ch("receiver")
$.eb=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hV(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.aA
if(typeof y!=="number")return y.I()
$.aA=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.aA
if(typeof y!=="number")return y.I()
$.aA=y+1
return new Function(z+y+"}")()},
dX:function(a,b,c,d,e,f,g){return H.hX(a,b,H.a4(c),d,!!e,!!f,g)},
D:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ax(a,"String"))},
mO:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ax(a,"double"))},
ng:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ax(a,"num"))},
dV:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ax(a,"bool"))},
a4:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ax(a,"int"))},
hv:function(a,b){throw H.e(H.ax(a,H.bt(H.D(b).substring(3))))},
ni:function(a,b){throw H.e(H.hT(a,H.bt(H.D(b).substring(3))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.N(a)[b])return a
H.hv(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else z=!0
if(z)return a
H.ni(a,b)},
cd:function(a){if(a==null)return a
if(!!J.N(a).$isb)return a
throw H.e(H.ax(a,"List<dynamic>"))},
hs:function(a,b){var z
if(a==null)return a
z=J.N(a)
if(!!z.$isb)return a
if(z[b])return a
H.hv(a,b)},
ho:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a4(z)]
else return a.$S()}return},
cc:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.ho(J.N(a))
if(z==null)return!1
return H.hd(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.dR)return a
$.dR=!0
try{if(H.cc(a,b))return a
z=H.cT(b)
y=H.ax(a,z)
throw H.e(y)}finally{$.dR=!1}},
dZ:function(a,b){if(a!=null&&!H.dW(a,b))H.q(H.ax(a,H.cT(b)))
return a},
hj:function(a){var z,y
z=J.N(a)
if(!!z.$iso){y=H.ho(z)
if(y!=null)return H.cT(y)
return"Closure"}return H.bc(a)},
nn:function(a){throw H.e(new P.i5(H.D(a)))},
hp:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b4:function(a){if(a==null)return
return a.$ti},
o0:function(a,b,c){return H.bs(a["$as"+H.i(c)],H.b4(b))},
bV:function(a,b,c,d){var z
H.D(c)
H.a4(d)
z=H.bs(a["$as"+H.i(c)],H.b4(b))
return z==null?null:z[d]},
a3:function(a,b,c){var z
H.D(b)
H.a4(c)
z=H.bs(a["$as"+H.i(b)],H.b4(a))
return z==null?null:z[c]},
r:function(a,b){var z
H.a4(b)
z=H.b4(a)
return z==null?null:z[b]},
cT:function(a){return H.b3(a,null)},
b3:function(a,b){var z,y
H.k(b,"$isb",[P.h],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bt(a[0].builtin$cls)+H.dU(a,1,b)
if(typeof a=="function")return H.bt(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a4(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.i(b[y])}if('func' in a)return H.my(a,b)
if('futureOr' in a)return"FutureOr<"+H.b3("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
my:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
if(q!=null&&q!==P.a)t+=" extends "+H.b3(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b3(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b3(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b3(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mP(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.D(z[l])
n=n+m+H.b3(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dU:function(a,b,c){var z,y,x,w,v,u
H.k(c,"$isb",[P.h],"$asb")
if(a==null)return""
z=new P.ag("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b3(u,c)}return"<"+z.i(0)+">"},
bs:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bT:function(a,b,c,d){var z,y
H.D(b)
H.cd(c)
H.D(d)
if(a==null)return!1
z=H.b4(a)
y=J.N(a)
if(y[b]==null)return!1
return H.hm(H.bs(y[d],z),null,c,null)},
k:function(a,b,c,d){H.D(b)
H.cd(c)
H.D(d)
if(a==null)return a
if(H.bT(a,b,c,d))return a
throw H.e(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bt(b.substring(3))+H.dU(c,0,null),init.mangledGlobalNames)))},
hm:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aq(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aq(a[y],b,c[y],d))return!1
return!0},
nZ:function(a,b,c){return a.apply(b,H.bs(J.N(b)["$as"+H.i(c)],H.b4(b)))},
hr:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="E"||a===-1||a===-2||H.hr(z)}return!1},
dW:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="E"||b===-1||b===-2||H.hr(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dW(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cc(a,b)}z=J.N(a).constructor
y=H.b4(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.aq(z,null,b,null)},
y:function(a,b){if(a!=null&&!H.dW(a,b))throw H.e(H.ax(a,H.cT(b)))
return a},
aq:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aq(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="E")return!0
if('func' in c)return H.hd(a,b,c,d)
if('func' in a)return c.builtin$cls==="c0"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aq("type" in a?a.type:null,b,x,d)
else if(H.aq(a,b,x,d))return!0
else{if(!('$is'+"bB" in y.prototype))return!1
w=y.prototype["$as"+"bB"]
v=H.bs(w,z?a.slice(1):null)
return H.aq(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hm(H.bs(r,z),b,u,d)},
hd:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.nf(m,b,l,d)},
nf:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aq(c[w],d,a[w],b))return!1}return!0},
o_:function(a,b,c){Object.defineProperty(a,H.D(b),{value:c,enumerable:false,writable:true,configurable:true})},
n2:function(a){var z,y,x,w,v,u
z=H.D($.hq.$1(a))
y=$.cO[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cR[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.D($.hl.$2(a,z))
if(z!=null){y=$.cO[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cR[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cS(x)
$.cO[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cR[z]=x
return x}if(v==="-"){u=H.cS(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hu(a,x)
if(v==="*")throw H.e(P.cC(z))
if(init.leafTags[z]===true){u=H.cS(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hu(a,x)},
hu:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.e1(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cS:function(a){return J.e1(a,!1,null,!!a.$isau)},
ne:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cS(z)
else return J.e1(z,c,null,null)},
mZ:function(){if(!0===$.e0)return
$.e0=!0
H.n_()},
n_:function(){var z,y,x,w,v,u,t,s
$.cO=Object.create(null)
$.cR=Object.create(null)
H.mV()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hw.$1(v)
if(u!=null){t=H.ne(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mV:function(){var z,y,x,w,v,u,t
z=C.a3()
z=H.bm(C.a0,H.bm(C.a5,H.bm(C.F,H.bm(C.F,H.bm(C.a4,H.bm(C.a1,H.bm(C.a2(C.G),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hq=new H.mW(v)
$.hl=new H.mX(u)
$.hw=new H.mY(t)},
bm:function(a,b){return a(b)||b},
hx:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
e4:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i0:{"^":"a;$ti",
i:function(a){return P.dg(this)},
q:function(a,b,c){H.y(b,H.r(this,0))
H.y(c,H.r(this,1))
return H.i1()},
$isJ:1},
i2:{"^":"i0;a,b,c,$ti",
gm:function(a){return this.a},
bP:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k:function(a,b){if(!this.bP(b))return
return this.dS(b)},
dS:function(a){return this.b[H.D(a)]},
S:function(a,b){var z,y,x,w,v
z=H.r(this,1)
H.l(b,{func:1,ret:-1,args:[H.r(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.y(this.dS(v),z))}}},
jG:{"^":"a;a,b,c,d,e,f,r,0x",p:{
jH:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.co(z)
y=z[0]
x=z[1]
return new H.jG(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kr:{"^":"a;a,b,c,d,e,f",
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
aJ:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kr(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cB:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ft:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jk:{"^":"a5;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
eS:function(a,b){return new H.jk(a,b==null?null:b.method)}}},
iM:{"^":"a5;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
p:{
de:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iM(a,y,z?null:b.receiver)}}},
kE:{"^":"a5;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
no:{"^":"o:21;a",
$1:function(a){if(!!J.N(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
$isaP:1},
o:{"^":"a;",
i:function(a){return"Closure '"+H.bc(this).trim()+"'"},
gfl:function(){return this},
$isc0:1,
gfl:function(){return this}},
fc:{"^":"o;"},
k5:{"^":"fc;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bt(z)+"'"}},
cZ:{"^":"fc;a,b,c,d",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cZ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga0:function(a){var z,y
z=this.c
if(z==null)y=H.bH(this.a)
else y=typeof z!=="object"?J.bX(z):H.bH(z)
return(y^H.bH(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.bc(z)+"'")},
p:{
d_:function(a){return a.a},
ec:function(a){return a.c},
ch:function(a){var z,y,x,w,v
z=new H.cZ("self","target","receiver","name")
y=J.co(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ks:{"^":"a5;a",
i:function(a){return this.a},
p:{
ax:function(a,b){return new H.ks("TypeError: "+H.i(P.cl(a))+": type '"+H.hj(a)+"' is not a subtype of type '"+b+"'")}}},
hS:{"^":"a5;a",
i:function(a){return this.a},
p:{
hT:function(a,b){return new H.hS("CastError: "+H.i(P.cl(a))+": type '"+H.hj(a)+"' is not a subtype of type '"+b+"'")}}},
jP:{"^":"a5;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
p:{
jQ:function(a){return new H.jP(a)}}},
b1:{"^":"eK;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gjY:function(a){return this.a===0},
gaC:function(){return new H.iS(this,[H.r(this,0)])},
bP:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dN(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dN(y,a)}else return this.jV(a)},
jV:function(a){var z=this.d
if(z==null)return!1
return this.d2(this.cp(z,this.d1(a)),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bH(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bH(w,b)
x=y==null?null:y.b
return x}else return this.jW(b)},
jW:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cp(z,this.d1(a))
x=this.d2(y,a)
if(x<0)return
return y[x].b},
q:function(a,b,c){var z,y
H.y(b,H.r(this,0))
H.y(c,H.r(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cw()
this.b=z}this.dE(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cw()
this.c=y}this.dE(y,b,c)}else this.jX(b,c)},
jX:function(a,b){var z,y,x,w
H.y(a,H.r(this,0))
H.y(b,H.r(this,1))
z=this.d
if(z==null){z=this.cw()
this.d=z}y=this.d1(a)
x=this.cp(z,y)
if(x==null)this.cE(z,y,[this.cj(a,b)])
else{w=this.d2(x,a)
if(w>=0)x[w].b=b
else x.push(this.cj(a,b))}},
S:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aB(this))
z=z.c}},
dE:function(a,b,c){var z
H.y(b,H.r(this,0))
H.y(c,H.r(this,1))
z=this.bH(a,b)
if(z==null)this.cE(a,b,this.cj(b,c))
else z.b=c},
h9:function(){this.r=this.r+1&67108863},
cj:function(a,b){var z,y
z=new H.iR(H.y(a,H.r(this,0)),H.y(b,H.r(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.h9()
return z},
d1:function(a){return J.bX(a)&0x3ffffff},
d2:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.a0(a[y].a,b))return y
return-1},
i:function(a){return P.dg(this)},
bH:function(a,b){return a[b]},
cp:function(a,b){return a[b]},
cE:function(a,b,c){a[b]=c},
ho:function(a,b){delete a[b]},
dN:function(a,b){return this.bH(a,b)!=null},
cw:function(){var z=Object.create(null)
this.cE(z,"<non-identifier-key>",z)
this.ho(z,"<non-identifier-key>")
return z},
$iseE:1},
iR:{"^":"a;a,b,0c,0d"},
iS:{"^":"es;a,$ti",
gm:function(a){return this.a.a},
gT:function(a){var z,y
z=this.a
y=new H.iT(z,z.r,this.$ti)
y.c=z.e
return y}},
iT:{"^":"a;a,b,0c,0d,$ti",
sdF:function(a){this.d=H.y(a,H.r(this,0))},
gK:function(){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aB(z))
else{z=this.c
if(z==null){this.sdF(null)
return!1}else{this.sdF(z.a)
this.c=this.c.c
return!0}}},
$isb0:1},
mW:{"^":"o:21;a",
$1:function(a){return this.a(a)}},
mX:{"^":"o:54;a",
$2:function(a,b){return this.a(a,b)}},
mY:{"^":"o:53;a",
$1:function(a){return this.a(H.D(a))}},
iK:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseU:1,
$isjI:1,
p:{
iL:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.e(P.Y("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mP:function(a){return J.ez(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nh:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bk:function(a){return a},
jf:function(a){return new Int8Array(a)},
aW:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bo(b,a))},
ms:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.e(H.mN(a,b,c))
return b},
dl:{"^":"H;",$isdl:1,$iskt:1,"%":";ArrayBufferView;dk|fW|fX|jg|fY|fZ|ba"},
dk:{"^":"dl;",
gm:function(a){return a.length},
$isau:1,
$asau:I.dY},
jg:{"^":"fX;",
k:function(a,b){H.aW(b,a,a.length)
return a[b]},
q:function(a,b,c){H.mO(c)
H.aW(b,a,a.length)
a[b]=c},
$ascn:function(){return[P.z]},
$asT:function(){return[P.z]},
$isn:1,
$asn:function(){return[P.z]},
$isb:1,
$asb:function(){return[P.z]},
"%":"Float32Array"},
ba:{"^":"fZ;",
q:function(a,b,c){H.a4(c)
H.aW(b,a,a.length)
a[b]=c},
$ascn:function(){return[P.m]},
$asT:function(){return[P.m]},
$isn:1,
$asn:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}},
nA:{"^":"ba;",
k:function(a,b){H.aW(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nB:{"^":"ba;",
k:function(a,b){H.aW(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nC:{"^":"ba;",
k:function(a,b){H.aW(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nD:{"^":"ba;",
k:function(a,b){H.aW(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nE:{"^":"ba;",
gm:function(a){return a.length},
k:function(a,b){H.aW(b,a,a.length)
return a[b]},
$isnM:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
eQ:{"^":"ba;",
gm:function(a){return a.length},
k:function(a,b){H.aW(b,a,a.length)
return a[b]},
$iseQ:1,
$isO:1,
"%":";Uint8Array"},
fW:{"^":"dk+T;"},
fX:{"^":"fW+cn;"},
fY:{"^":"dk+T;"},
fZ:{"^":"fY+cn;"}}],["","",,P,{"^":"",
la:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mF()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bn(new P.lc(z),1)).observe(y,{childList:true})
return new P.lb(z,y,x)}else if(self.setImmediate!=null)return P.mG()
return P.mH()},
nQ:[function(a){self.scheduleImmediate(H.bn(new P.ld(H.l(a,{func:1,ret:-1})),0))},"$1","mF",4,0,10],
nR:[function(a){self.setImmediate(H.bn(new P.le(H.l(a,{func:1,ret:-1})),0))},"$1","mG",4,0,10],
nS:[function(a){P.dv(C.z,H.l(a,{func:1,ret:-1}))},"$1","mH",4,0,10],
dv:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.h.a9(a.a,1000)
return P.lV(z<0?0:z,b)},
fk:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.be]})
z=C.h.a9(a.a,1000)
return P.lW(z<0?0:z,b)},
mB:function(a,b){if(H.cc(a,{func:1,args:[P.a,P.aP]}))return H.l(a,{func:1,ret:null,args:[P.a,P.aP]})
if(H.cc(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.cX(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mA:function(){var z,y
for(;z=$.bl,z!=null;){$.bR=null
y=z.b
$.bl=y
if(y==null)$.bQ=null
z.a.$0()}},
nY:[function(){$.dS=!0
try{P.mA()}finally{$.bR=null
$.dS=!1
if($.bl!=null)$.$get$dM().$1(P.hn())}},"$0","hn",0,0,3],
hi:function(a){var z=new P.fN(H.l(a,{func:1,ret:-1}))
if($.bl==null){$.bQ=z
$.bl=z
if(!$.dS)$.$get$dM().$1(P.hn())}else{$.bQ.b=z
$.bQ=z}},
mE:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bl
if(z==null){P.hi(a)
$.bR=$.bQ
return}y=new P.fN(a)
x=$.bR
if(x==null){y.b=z
$.bR=y
$.bl=y}else{y.b=x.b
x.b=y
$.bR=y
if(y.b==null)$.bQ=y}},
nj:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.S
if(C.l===y){P.cN(null,null,C.l,a)
return}y.toString
P.cN(null,null,y,H.l(y.cJ(a),z))},
fj:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.S
if(y===C.l){y.toString
return P.dv(a,b)}return P.dv(a,H.l(y.cJ(b),z))},
ko:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.be]}
H.l(b,z)
y=$.S
if(y===C.l){y.toString
return P.fk(a,b)}x=y.en(b,P.be)
$.S.toString
return P.fk(a,H.l(x,z))},
cM:function(a,b,c,d,e){var z={}
z.a=d
P.mE(new P.mC(z,e))},
he:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.S
if(y===c)return d.$0()
$.S=c
z=y
try{y=d.$0()
return y}finally{$.S=z}},
hf:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.S
if(y===c)return d.$1(e)
$.S=c
z=y
try{y=d.$1(e)
return y}finally{$.S=z}},
mD:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.S
if(y===c)return d.$2(e,f)
$.S=c
z=y
try{y=d.$2(e,f)
return y}finally{$.S=z}},
cN:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.cJ(d):c.jm(d,-1)
P.hi(d)},
lc:{"^":"o:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
lb:{"^":"o:48;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ld:{"^":"o:0;a",
$0:function(){this.a.$0()}},
le:{"^":"o:0;a",
$0:function(){this.a.$0()}},
h2:{"^":"a;a,0b,c",
h6:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bn(new P.lY(this,b),0),a)
else throw H.e(P.X("`setTimeout()` not found."))},
h7:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bn(new P.lX(this,a,Date.now(),b),0),a)
else throw H.e(P.X("Periodic timer."))},
$isbe:1,
p:{
lV:function(a,b){var z=new P.h2(!0,0)
z.h6(a,b)
return z},
lW:function(a,b){var z=new P.h2(!1,0)
z.h7(a,b)
return z}}},
lY:{"^":"o:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lX:{"^":"o:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.fO(w,x)}z.c=y
this.d.$1(z)}},
bj:{"^":"a;0a,b,c,d,e,$ti",
k8:function(a){if(this.c!==6)return!0
return this.b.b.df(H.l(this.d,{func:1,ret:P.M,args:[P.a]}),a.a,P.M,P.a)},
jU:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.r(this,1)}
w=this.b.b
if(H.cc(z,{func:1,args:[P.a,P.aP]}))return H.dZ(w.kv(z,a.a,a.b,null,y,P.aP),x)
else return H.dZ(w.df(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aV:{"^":"a;ed:a<,b,0it:c<,$ti",
fe:function(a,b,c){var z,y,x,w
z=H.r(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.S
if(y!==C.l){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mB(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aV(0,$.S,[c])
w=b==null?1:3
this.dH(new P.bj(x,w,a,b,[z,c]))
return x},
kB:function(a,b){return this.fe(a,null,b)},
dH:function(a){var z,y
z=this.a
if(z<=1){a.a=H.d(this.c,"$isbj")
this.c=a}else{if(z===2){y=H.d(this.c,"$isaV")
z=y.a
if(z<4){y.dH(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cN(null,null,z,H.l(new P.ln(this,a),{func:1,ret:-1}))}},
e6:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.d(this.c,"$isbj")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.d(this.c,"$isaV")
y=u.a
if(y<4){u.e6(a)
return}this.a=y
this.c=u.c}z.a=this.bI(a)
y=this.b
y.toString
P.cN(null,null,y,H.l(new P.ls(z,this),{func:1,ret:-1}))}},
cC:function(){var z=H.d(this.c,"$isbj")
this.c=null
return this.bI(z)},
bI:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dJ:function(a){var z,y,x
z=H.r(this,0)
H.dZ(a,{futureOr:1,type:z})
y=this.$ti
if(H.bT(a,"$isbB",y,"$asbB"))if(H.bT(a,"$isaV",y,null))P.fR(a,this)
else P.lo(a,this)
else{x=this.cC()
H.y(a,z)
this.a=4
this.c=a
P.bM(this,x)}},
dK:function(a,b){var z
H.d(b,"$isaP")
z=this.cC()
this.a=8
this.c=new P.ak(a,b)
P.bM(this,z)},
$isbB:1,
p:{
lo:function(a,b){var z,y,x
b.a=1
try{a.fe(new P.lp(b),new P.lq(b),null)}catch(x){z=H.a9(x)
y=H.br(x)
P.nj(new P.lr(b,z,y))}},
fR:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.d(a.c,"$isaV")
if(z>=4){y=b.cC()
b.a=a.a
b.c=a.c
P.bM(b,y)}else{y=H.d(b.c,"$isbj")
b.a=2
b.c=a
a.e6(y)}},
bM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.d(y.c,"$isak")
y=y.b
u=v.a
t=v.b
y.toString
P.cM(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.d(r,"$isak")
y=y.b
u=r.a
t=r.b
y.toString
P.cM(null,null,y,u,t)
return}o=$.S
if(o==null?q!=null:o!==q)$.S=q
else o=null
y=b.c
if(y===8)new P.lv(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lu(x,b,r).$0()}else if((y&2)!==0)new P.lt(z,x,b).$0()
if(o!=null)$.S=o
y=x.b
if(!!J.N(y).$isbB){if(y.a>=4){n=H.d(t.c,"$isbj")
t.c=null
b=t.bI(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fR(y,t)
return}}m=b.b
n=H.d(m.c,"$isbj")
m.c=null
b=m.bI(n)
y=x.a
u=x.b
if(!y){H.y(u,H.r(m,0))
m.a=4
m.c=u}else{H.d(u,"$isak")
m.a=8
m.c=u}z.a=m
y=m}}}},
ln:{"^":"o:0;a,b",
$0:function(){P.bM(this.a,this.b)}},
ls:{"^":"o:0;a,b",
$0:function(){P.bM(this.b,this.a.a)}},
lp:{"^":"o:15;a",
$1:function(a){var z=this.a
z.a=0
z.dJ(a)}},
lq:{"^":"o:47;a",
$2:function(a,b){this.a.dK(a,H.d(b,"$isaP"))},
$1:function(a){return this.$2(a,null)}},
lr:{"^":"o:0;a,b,c",
$0:function(){this.a.dK(this.b,this.c)}},
lv:{"^":"o:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.fc(H.l(w.d,{func:1}),null)}catch(v){y=H.a9(v)
x=H.br(v)
if(this.d){w=H.d(this.a.a.c,"$isak").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.d(this.a.a.c,"$isak")
else u.b=new P.ak(y,x)
u.a=!0
return}if(!!J.N(z).$isbB){if(z instanceof P.aV&&z.ged()>=4){if(z.ged()===8){w=this.b
w.b=H.d(z.git(),"$isak")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.kB(new P.lw(t),null)
w.a=!1}}},
lw:{"^":"o:44;a",
$1:function(a){return this.a}},
lu:{"^":"o:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.r(x,0)
v=H.y(this.c,w)
u=H.r(x,1)
this.a.b=x.b.b.df(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a9(t)
y=H.br(t)
x=this.a
x.b=new P.ak(z,y)
x.a=!0}}},
lt:{"^":"o:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.d(this.a.a.c,"$isak")
w=this.c
if(w.k8(z)&&w.e!=null){v=this.b
v.b=w.jU(z)
v.a=!1}}catch(u){y=H.a9(u)
x=H.br(u)
w=H.d(this.a.a.c,"$isak")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ak(y,x)
s.a=!0}}},
fN:{"^":"a;a,0b"},
k6:{"^":"a;$ti",
gm:function(a){var z,y,x,w
z={}
y=new P.aV(0,$.S,[P.m])
z.a=0
x=H.r(this,0)
w=H.l(new P.k8(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.k9(z,y),{func:1,ret:-1})
W.Z(this.a,this.b,w,!1,x)
return y}},
k8:{"^":"o;a,b",
$1:function(a){H.y(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.r(this.b,0)]}}},
k9:{"^":"o:0;a,b",
$0:function(){this.b.dJ(this.a.a)}},
dr:{"^":"a;$ti"},
k7:{"^":"a;"},
be:{"^":"a;"},
ak:{"^":"a;a,b",
i:function(a){return H.i(this.a)},
$isa5:1},
mo:{"^":"a;",$isnP:1},
mC:{"^":"o:0;a,b",
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
lH:{"^":"mo;",
kw:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.l===$.S){a.$0()
return}P.he(null,null,this,a,-1)}catch(x){z=H.a9(x)
y=H.br(x)
P.cM(null,null,this,z,H.d(y,"$isaP"))}},
kx:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.l===$.S){a.$1(b)
return}P.hf(null,null,this,a,b,-1,c)}catch(x){z=H.a9(x)
y=H.br(x)
P.cM(null,null,this,z,H.d(y,"$isaP"))}},
jm:function(a,b){return new P.lJ(this,H.l(a,{func:1,ret:b}),b)},
cJ:function(a){return new P.lI(this,H.l(a,{func:1,ret:-1}))},
en:function(a,b){return new P.lK(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
fc:function(a,b){H.l(a,{func:1,ret:b})
if($.S===C.l)return a.$0()
return P.he(null,null,this,a,b)},
df:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.S===C.l)return a.$1(b)
return P.hf(null,null,this,a,b,c,d)},
kv:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.S===C.l)return a.$2(b,c)
return P.mD(null,null,this,a,b,c,d,e,f)}},
lJ:{"^":"o;a,b,c",
$0:function(){return this.a.fc(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lI:{"^":"o:3;a,b",
$0:function(){return this.a.kw(this.b)}},
lK:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.kx(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iU:function(a,b,c,d,e){return new H.b1(0,0,[d,e])},
iV:function(a,b,c){H.cd(a)
return H.k(H.mQ(a,new H.b1(0,0,[b,c])),"$iseE",[b,c],"$aseE")},
eF:function(a,b){return new H.b1(0,0,[a,b])},
c6:function(a,b,c,d){return new P.lB(0,0,[d])},
iG:function(a,b,c){var z,y
if(P.dT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bS()
C.a.h(y,a)
try{P.mz(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.fb(b,H.hs(z,"$isn"),", ")+c
return y.charCodeAt(0)==0?y:y},
da:function(a,b,c){var z,y,x
if(P.dT(a))return b+"..."+c
z=new P.ag(b)
y=$.$get$bS()
C.a.h(y,a)
try{x=z
x.a=P.fb(x.gaT(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaT()+c
y=z.gaT()
return y.charCodeAt(0)==0?y:y},
dT:function(a){var z,y
for(z=0;y=$.$get$bS(),z<y.length;++z)if(a===y[z])return!0
return!1},
mz:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gT(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.B())return
w=H.i(z.gK())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.B()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gK();++x
if(!z.B()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gK();++x
for(;z.B();t=s,s=r){r=z.gK();++x
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
eG:function(a,b,c){var z=P.iU(null,null,null,b,c)
a.S(0,new P.iW(z,b,c))
return z},
eH:function(a,b){var z,y,x
z=P.c6(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x)z.h(0,H.y(a[x],b))
return z},
dg:function(a){var z,y,x
z={}
if(P.dT(a))return"{...}"
y=new P.ag("")
try{C.a.h($.$get$bS(),a)
x=y
x.a=x.gaT()+"{"
z.a=!0
a.S(0,new P.j0(z,y))
z=y
z.a=z.gaT()+"}"}finally{z=$.$get$bS()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaT()
return z.charCodeAt(0)==0?z:z},
lB:{"^":"lx;a,0b,0c,0d,0e,0f,r,$ti",
gT:function(a){var z=new P.fV(this,this.r,this.$ti)
z.c=this.e
return z},
gm:function(a){return this.a},
a_:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.d(z[b],"$iscJ")!=null}else{y=this.hk(b)
return y}},
hk:function(a){var z=this.d
if(z==null)return!1
return this.cn(this.dT(z,a),a)>=0},
h:function(a,b){var z,y
H.y(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dO()
this.b=z}return this.dG(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dO()
this.c=y}return this.dG(y,b)}else return this.ha(b)},
ha:function(a){var z,y,x
H.y(a,H.r(this,0))
z=this.d
if(z==null){z=P.dO()
this.d=z}y=this.dL(a)
x=z[y]
if(x==null)z[y]=[this.cz(a)]
else{if(this.cn(x,a)>=0)return!1
x.push(this.cz(a))}return!0},
Y:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.im(this.c,b)
else return this.ij(b)},
ij:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.dT(z,a)
x=this.cn(y,a)
if(x<0)return!1
this.ef(y.splice(x,1)[0])
return!0},
dG:function(a,b){H.y(b,H.r(this,0))
if(H.d(a[b],"$iscJ")!=null)return!1
a[b]=this.cz(b)
return!0},
im:function(a,b){var z
if(a==null)return!1
z=H.d(a[b],"$iscJ")
if(z==null)return!1
this.ef(z)
delete a[b]
return!0},
e_:function(){this.r=this.r+1&67108863},
cz:function(a){var z,y
z=new P.cJ(H.y(a,H.r(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.e_()
return z},
ef:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.e_()},
dL:function(a){return J.bX(a)&0x3ffffff},
dT:function(a,b){return a[this.dL(b)]},
cn:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.a0(a[y].a,b))return y
return-1},
p:{
dO:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cJ:{"^":"a;a,0b,0c"},
fV:{"^":"a;a,b,0c,0d,$ti",
sdI:function(a){this.d=H.y(a,H.r(this,0))},
gK:function(){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aB(z))
else{z=this.c
if(z==null){this.sdI(null)
return!1}else{this.sdI(H.y(z.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
$isb0:1,
p:{
lC:function(a,b,c){var z=new P.fV(a,b,[c])
z.c=a.e
return z}}},
lx:{"^":"jR;"},
iW:{"^":"o:6;a,b,c",
$2:function(a,b){this.a.q(0,H.y(a,this.b),H.y(b,this.c))}},
cr:{"^":"lD;",$isn:1,$isb:1},
T:{"^":"a;$ti",
gT:function(a){return new H.df(a,this.gm(a),0,[H.bV(this,a,"T",0)])},
ae:function(a,b){return this.k(a,b)},
S:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.bV(this,a,"T",0)]})
z=this.gm(a)
for(y=0;y<z;++y){b.$1(this.k(a,y))
if(z!==this.gm(a))throw H.e(P.aB(a))}},
kE:function(a,b){var z,y
z=H.c([],[H.bV(this,a,"T",0)])
C.a.sm(z,this.gm(a))
for(y=0;y<this.gm(a);++y)C.a.q(z,y,this.k(a,y))
return z},
kD:function(a){return this.kE(a,!0)},
jN:function(a,b,c,d){var z
H.y(d,H.bV(this,a,"T",0))
P.b2(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.q(a,z,d)},
i:function(a){return P.da(a,"[","]")}},
eK:{"^":"ct;"},
j0:{"^":"o:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
ct:{"^":"a;$ti",
S:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.a3(this,"ct",0),H.a3(this,"ct",1)]})
for(z=J.b5(this.gaC());z.B();){y=z.gK()
b.$2(y,this.k(0,y))}},
gm:function(a){return J.ar(this.gaC())},
i:function(a){return P.dg(this)},
$isJ:1},
m0:{"^":"a;$ti",
q:function(a,b,c){H.y(b,H.r(this,0))
H.y(c,H.r(this,1))
throw H.e(P.X("Cannot modify unmodifiable map"))}},
j1:{"^":"a;$ti",
k:function(a,b){return this.a.k(0,b)},
q:function(a,b,c){this.a.q(0,H.y(b,H.r(this,0)),H.y(c,H.r(this,1)))},
S:function(a,b){this.a.S(0,H.l(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gm:function(a){var z=this.a
return z.gm(z)},
i:function(a){return J.ae(this.a)},
$isJ:1},
fy:{"^":"m1;a,$ti"},
jT:{"^":"a;$ti",
ac:function(a,b){var z
for(z=J.b5(H.k(b,"$isn",this.$ti,"$asn"));z.B();)this.h(0,z.gK())},
i:function(a){return P.da(this,"{","}")},
ae:function(a,b){var z,y,x
if(b<0)H.q(P.a1(b,0,null,"index",null))
for(z=P.lC(this,this.r,H.r(this,0)),y=0;z.B();){x=z.d
if(b===y)return x;++y}throw H.e(P.b6(b,this,"index",null,y))},
$isn:1,
$isf5:1},
jR:{"^":"jT;"},
lD:{"^":"a+T;"},
m1:{"^":"j1+m0;$ti"}}],["","",,P,{"^":"",hP:{"^":"bZ;a",
ka:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.b2(b,c,a.length,null,null,null)
z=$.$get$fP()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.c.G(a,y)
if(r===37){q=s+2
if(q<=c){p=H.cQ(C.c.G(a,s))
o=H.cQ(C.c.G(a,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.c.a4("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ag("")
l=w.a+=C.c.u(a,x,y)
w.a=l+H.bd(r)
x=s
continue}}throw H.e(P.Y("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.c.u(a,x,c)
k=l.length
if(v>=0)P.e9(a,u,c,v,t,k)
else{j=C.h.bD(k-1,4)+1
if(j===1)throw H.e(P.Y("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.c.b6(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.e9(a,u,c,v,t,i)
else{j=C.h.bD(i,4)
if(j===1)throw H.e(P.Y("Invalid base64 encoding length ",a,c))
if(j>1)a=C.c.b6(a,c,c,j===2?"==":"=")}return a},
$asbZ:function(){return[[P.b,P.m],P.h]},
p:{
e9:function(a,b,c,d,e,f){if(C.h.bD(f,4)!==0)throw H.e(P.Y("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.Y("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.Y("Invalid base64 padding, more than two '=' characters",a,b))}}},hQ:{"^":"aZ;a",
$asaZ:function(){return[[P.b,P.m],P.h]}},bZ:{"^":"a;$ti"},aZ:{"^":"k7;$ti"},ij:{"^":"bZ;",
$asbZ:function(){return[P.h,[P.b,P.m]]}},iC:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},iB:{"^":"aZ;a",
hl:function(a,b,c){var z,y,x,w,v,u
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
default:u=null}if(u!=null){if(v==null)v=new P.ag("")
if(w>b)v.a+=C.c.u(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hL(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asaZ:function(){return[P.h,P.h]}},kS:{"^":"ij;a",
gjM:function(){return C.U}},kZ:{"^":"aZ;",
bm:function(a,b,c){var z,y,x,w
z=a.length
P.b2(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mm(0,0,x)
if(w.hw(a,b,z)!==z)w.eg(J.hD(a,z-1),0)
return new Uint8Array(x.subarray(0,H.ms(0,w.b,x.length)))},
cP:function(a){return this.bm(a,0,null)},
$asaZ:function(){return[P.h,[P.b,P.m]]}},mm:{"^":"a;a,b,c",
eg:function(a,b){var z,y,x,w,v
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
hw:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.a4(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.G(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.eg(w,C.c.G(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kT:{"^":"aZ;a",
bm:function(a,b,c){var z,y,x,w,v
H.k(a,"$isb",[P.m],"$asb")
z=P.kU(!1,a,b,c)
if(z!=null)return z
y=J.ar(a)
P.b2(b,c,y,null,null,null)
x=new P.ag("")
w=new P.mj(!1,x,!0,0,0,0)
w.bm(a,b,y)
if(w.e>0){H.q(P.Y("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.bd(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
cP:function(a){return this.bm(a,0,null)},
$asaZ:function(){return[[P.b,P.m],P.h]},
p:{
kU:function(a,b,c,d){H.k(b,"$isb",[P.m],"$asb")
if(b instanceof Uint8Array)return P.kV(!1,b,c,d)
return},
kV:function(a,b,c,d){var z,y,x
z=$.$get$fC()
if(z==null)return
y=0===c
if(y&&!0)return P.dJ(z,b)
x=b.length
d=P.b2(c,d,x,null,null,null)
if(y&&d===x)return P.dJ(z,b)
return P.dJ(z,b.subarray(c,d))},
dJ:function(a,b){if(P.kX(b))return
return P.kY(a,b)},
kY:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.a9(y)}return},
kX:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kW:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.a9(y)}return}}},mj:{"^":"a;a,b,c,d,e,f",
bm:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(a,"$isb",[P.m],"$asb")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.ml(c)
v=new P.mk(this,b,c,a)
$label0$0:for(u=J.bq(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.cb()
if((r&192)!==128){q=P.Y("Bad UTF-8 encoding 0x"+C.h.by(r,16),a,s)
throw H.e(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.I,q)
if(z<=C.I[q]){q=P.Y("Overlong encoding of 0x"+C.h.by(z,16),a,s-x-1)
throw H.e(q)}if(z>1114111){q=P.Y("Character outside valid Unicode range: 0x"+C.h.by(z,16),a,s-x-1)
throw H.e(q)}if(!this.c||z!==65279)t.a+=H.bd(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.dq()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.U()
if(r<0){m=P.Y("Negative UTF-8 code unit: -0x"+C.h.by(-r,16),a,n-1)
throw H.e(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.Y("Bad UTF-8 encoding 0x"+C.h.by(r,16),a,n-1)
throw H.e(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},ml:{"^":"o:43;a",
$2:function(a,b){var z,y,x,w
H.k(a,"$isb",[P.m],"$asb")
z=this.a
for(y=J.bq(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.cb()
if((w&127)!==w)return x-b}return z-b}},mk:{"^":"o:42;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c8(this.d,a,b)}}}],["","",,P,{"^":"",
bW:function(a,b,c){var z
H.l(b,{func:1,ret:P.m,args:[P.h]})
z=H.jy(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.e(P.Y(a,null,null))},
il:function(a){if(a instanceof H.o)return a.i(0)
return"Instance of '"+H.bc(a)+"'"},
iX:function(a,b,c,d){var z,y
H.y(b,d)
z=J.iI(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.q(z,y,b)
return H.k(z,"$isb",[d],"$asb")},
eI:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gT(a);x.B();)C.a.h(y,H.y(x.gK(),c))
if(b)return y
return H.k(J.co(y),"$isb",z,"$asb")},
c8:function(a,b,c){var z,y
z=P.m
H.k(a,"$isn",[z],"$asn")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$isb7",[z],"$asb7")
y=a.length
c=P.b2(b,c,y,null,null,null)
return H.f0(b>0||c<y?C.a.fH(a,b,c):a)}if(!!J.N(a).$iseQ)return H.jA(a,b,P.b2(b,c,a.length,null,null,null))
return P.ka(a,b,c)},
ka:function(a,b,c){var z,y,x,w
H.k(a,"$isn",[P.m],"$asn")
if(b<0)throw H.e(P.a1(b,0,J.ar(a),null,null))
z=c==null
if(!z&&c<b)throw H.e(P.a1(c,b,J.ar(a),null,null))
y=J.b5(a)
for(x=0;x<b;++x)if(!y.B())throw H.e(P.a1(b,0,x,null,null))
w=[]
if(z)for(;y.B();)w.push(y.gK())
else for(x=b;x<c;++x){if(!y.B())throw H.e(P.a1(c,b,x,null,null))
w.push(y.gK())}return H.f0(w)},
jJ:function(a,b,c){return new H.iK(a,H.iL(a,!1,!0,!1))},
cE:function(){var z=H.jq()
if(z!=null)return P.kK(z,0,null)
throw H.e(P.X("'Uri.base' is not supported"))},
cl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ae(a)
if(typeof a==="string")return JSON.stringify(a)
return P.il(a)},
t:function(a){return new P.fQ(a)},
iY:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.m]})
z=H.c([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.q(z,y,b.$1(y))
return z},
e3:function(a){H.nh(a)},
kK:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.c.G(a,b+4)^58)*3|C.c.G(a,b)^100|C.c.G(a,b+1)^97|C.c.G(a,b+2)^116|C.c.G(a,b+3)^97)>>>0
if(y===0)return P.fz(b>0||c<c?C.c.u(a,b,c):a,5,null).gfj()
else if(y===32)return P.fz(C.c.u(a,z,c),0,null).gfj()}x=new Array(8)
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
if(P.hg(a,b,c,0,w)>=14)C.a.q(w,7,c)
v=w[1]
if(typeof v!=="number")return v.kJ()
if(v>=b)if(P.hg(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.I()
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
p=!1}else{if(!(r<c&&r===s+2&&C.c.ak(a,"..",s)))n=r>s+2&&C.c.ak(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.c.ak(a,"file",b)){if(u<=b){if(!C.c.ak(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.c.b6(a,s,r,"/");++r;++q;++c}else{a=C.c.u(a,b,s)+"/"+C.c.u(a,r,c)
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
else if(v===z&&C.c.ak(a,"https",b)){if(x&&t+4===s&&C.c.ak(a,"443",t+1))if(b===0&&!0){a=C.c.b6(a,t,s,"")
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
q-=b}return new P.lP(a,v,u,t,s,r,q,o)}return P.m2(a,b,c,v,u,t,s,r,q,o)},
fB:function(a,b){var z=P.h
return C.a.jR(H.c(a.split("&"),[z]),P.eF(z,z),new P.kN(b),[P.J,P.h,P.h])},
kI:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kJ(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.c.a4(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.bW(C.c.u(a,v,w),null,null)
if(typeof s!=="number")return s.dq()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.bW(C.c.u(a,v,c),null,null)
if(typeof s!=="number")return s.dq()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kL(a)
y=new P.kM(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.c.a4(a,w)
if(s===58){if(w===b){++w
if(C.c.a4(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaD(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kI(a,v,c)
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
mt:function(){var z,y,x,w,v
z=P.iY(22,new P.mv(),!0,P.O)
y=new P.mu(z)
x=new P.mw()
w=new P.mx()
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
hg:function(a,b,c,d,e){var z,y,x,w,v
H.k(e,"$isb",[P.m],"$asb")
z=$.$get$hh()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.c.G(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.q(e,v>>>5,y)}return d},
M:{"^":"a;"},
"+bool":0,
al:{"^":"a;a,b",
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.al))return!1
return this.a===b.a&&!0},
ga0:function(a){var z=this.a
return(z^C.h.aY(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.i7(H.jx(this))
y=P.c_(H.jv(this))
x=P.c_(H.jr(this))
w=P.c_(H.js(this))
v=P.c_(H.ju(this))
u=P.c_(H.jw(this))
t=P.i8(H.jt(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
p:{
i7:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
i8:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c_:function(a){if(a>=10)return""+a
return"0"+a}}},
z:{"^":"aj;"},
"+double":0,
bx:{"^":"a;a",
U:function(a,b){return C.h.U(this.a,H.d(b,"$isbx").a)},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bx))return!1
return this.a===b.a},
ga0:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ie()
y=this.a
if(y<0)return"-"+new P.bx(0-y).i(0)
x=z.$1(C.h.a9(y,6e7)%60)
w=z.$1(C.h.a9(y,1e6)%60)
v=new P.id().$1(y%1e6)
return""+C.h.a9(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
p:{
er:function(a,b,c,d,e,f){return new P.bx(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
id:{"^":"o:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ie:{"^":"o:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"a;"},
eT:{"^":"a5;",
i:function(a){return"Throw of null."}},
aL:{"^":"a5;a,b,c,d",
gcm:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcl:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gcm()+y+x
if(!this.a)return w
v=this.gcl()
u=P.cl(this.b)
return w+v+": "+H.i(u)},
p:{
bY:function(a){return new P.aL(!1,null,null,a)},
cX:function(a,b,c){return new P.aL(!0,a,b,c)}}},
cv:{"^":"aL;e,f,a,b,c,d",
gcm:function(){return"RangeError"},
gcl:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
p:{
cw:function(a,b,c){return new P.cv(null,null,!0,a,b,"Value not in range")},
a1:function(a,b,c,d,e){return new P.cv(b,c,!0,a,d,"Invalid value")},
b2:function(a,b,c,d,e,f){if(typeof a!=="number")return H.B(a)
if(0>a||a>c)throw H.e(P.a1(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.a1(b,a,c,"end",f))
return b}return c}}},
iE:{"^":"aL;e,m:f>,a,b,c,d",
gcm:function(){return"RangeError"},
gcl:function(){if(J.hz(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
p:{
b6:function(a,b,c,d,e){var z=H.a4(e!=null?e:J.ar(b))
return new P.iE(b,z,!0,a,c,"Index out of range")}}},
kG:{"^":"a5;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
X:function(a){return new P.kG(a)}}},
kD:{"^":"a5;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cC:function(a){return new P.kD(a)}}},
dq:{"^":"a5;a",
i:function(a){return"Bad state: "+this.a},
p:{
fa:function(a){return new P.dq(a)}}},
i_:{"^":"a5;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.cl(z))+"."},
p:{
aB:function(a){return new P.i_(a)}}},
jl:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa5:1},
f9:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa5:1},
i5:{"^":"a5;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fQ:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
is:{"^":"a;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.i(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.c.u(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.c.G(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.c.a4(w,s)
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
return y+n+l+m+"\n"+C.c.D(" ",x-o+n.length)+"^\n"},
p:{
Y:function(a,b,c){return new P.is(a,b,c)}}},
c0:{"^":"a;"},
m:{"^":"aj;"},
"+int":0,
n:{"^":"a;$ti",
di:["fJ",function(a,b){var z=H.a3(this,"n",0)
return new H.dL(this,H.l(b,{func:1,ret:P.M,args:[z]}),[z])}],
gm:function(a){var z,y
z=this.gT(this)
for(y=0;z.B();)++y
return y},
gaP:function(a){var z,y
z=this.gT(this)
if(!z.B())throw H.e(H.db())
y=z.gK()
if(z.B())throw H.e(H.iH())
return y},
ae:function(a,b){var z,y,x
if(b<0)H.q(P.a1(b,0,null,"index",null))
for(z=this.gT(this),y=0;z.B();){x=z.gK()
if(b===y)return x;++y}throw H.e(P.b6(b,this,"index",null,y))},
i:function(a){return P.iG(this,"(",")")}},
b0:{"^":"a;$ti"},
b:{"^":"a;$ti",$isn:1},
"+List":0,
J:{"^":"a;$ti"},
E:{"^":"a;",
ga0:function(a){return P.a.prototype.ga0.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
aj:{"^":"a;"},
"+num":0,
a:{"^":";",
A:function(a,b){return this===b},
ga0:function(a){return H.bH(this)},
i:function(a){return"Instance of '"+H.bc(this)+"'"},
toString:function(){return this.i(this)}},
aP:{"^":"a;"},
h:{"^":"a;",$iseU:1},
"+String":0,
ag:{"^":"a;aT:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isnI:1,
p:{
fb:function(a,b,c){var z=J.b5(b)
if(!z.B())return a
if(c.length===0){do a+=H.i(z.gK())
while(z.B())}else{a+=H.i(z.gK())
for(;z.B();)a=a+c+H.i(z.gK())}return a}}},
kN:{"^":"o:41;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.k(a,"$isJ",[z,z],"$asJ")
H.D(b)
y=J.bU(b).f0(b,"=")
if(y===-1){if(b!=="")a.q(0,P.dQ(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.c.u(b,0,y)
w=C.c.ay(b,y+1)
z=this.a
a.q(0,P.dQ(x,0,x.length,z,!0),P.dQ(w,0,w.length,z,!0))}return a}},
kJ:{"^":"o:40;a",
$2:function(a,b){throw H.e(P.Y("Illegal IPv4 address, "+a,this.a,b))}},
kL:{"^":"o:38;a",
$2:function(a,b){throw H.e(P.Y("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kM:{"^":"o:35;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.bW(C.c.u(this.b,a,b),null,16)
if(typeof z!=="number")return z.U()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cK:{"^":"a;cf:a<,b,c,d,f9:e>,f,r,0x,0y,0z,0Q,0ch",
sii:function(a){var z=P.h
this.Q=H.k(a,"$isJ",[z,z],"$asJ")},
gfk:function(){return this.b},
gd0:function(a){var z=this.c
if(z==null)return""
if(C.c.a8(z,"["))return C.c.u(z,1,z.length-1)
return z},
gc5:function(a){var z=this.d
if(z==null)return P.h4(this.a)
return z},
gdc:function(){var z=this.f
return z==null?"":z},
geW:function(){var z=this.r
return z==null?"":z},
de:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
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
if(x&&!C.c.a8(d,"/"))d="/"+d
g=P.dP(g,0,0,h)
return new P.cK(i,j,c,f,d,g,this.r)},
dd:function(a,b){return this.de(a,null,null,null,null,null,null,b,null,null)},
gbt:function(){var z,y
if(this.Q==null){z=this.f
y=P.h
this.sii(new P.fy(P.fB(z==null?"":z,C.m),[y,y]))}return this.Q},
geX:function(){return this.c!=null},
gf_:function(){return this.f!=null},
geY:function(){return this.r!=null},
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
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!!J.N(b).$isdI){if(this.a==b.gcf())if(this.c!=null===b.geX())if(this.b==b.gfk())if(this.gd0(this)==b.gd0(b))if(this.gc5(this)==b.gc5(b))if(this.e===b.gf9(b)){z=this.f
y=z==null
if(!y===b.gf_()){if(y)z=""
if(z===b.gdc()){z=this.r
y=z==null
if(!y===b.geY()){if(y)z=""
z=z===b.geW()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
ga0:function(a){var z=this.z
if(z==null){z=C.c.ga0(this.i(0))
this.z=z}return z},
$isdI:1,
p:{
cb:function(a,b,c,d){var z,y,x,w,v,u
H.k(a,"$isb",[P.m],"$asb")
if(c===C.m){z=$.$get$h9().b
if(typeof b!=="string")H.q(H.ai(b))
z=z.test(b)}else z=!1
if(z)return b
H.y(b,H.a3(c,"bZ",0))
y=c.gjM().cP(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bd(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
m2:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.md(a,b,d)
else{if(d===b)P.bN(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.me(a,z,e-1):""
x=P.m7(a,e,f,!1)
if(typeof f!=="number")return f.I()
w=f+1
if(typeof g!=="number")return H.B(g)
v=w<g?P.ma(P.bW(C.c.u(a,w,g),new P.m3(a,f),null),j):null}else{y=""
x=null
v=null}u=P.m8(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.U()
t=h<i?P.dP(a,h+1,i,null):null
return new P.cK(j,y,x,v,u,t,i<c?P.m6(a,i+1,c):null)},
h4:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bN:function(a,b,c){throw H.e(P.Y(c,a,b))},
ma:function(a,b){if(a!=null&&a===P.h4(b))return
return a},
m7:function(a,b,c,d){var z,y
if(b===c)return""
if(C.c.a4(a,b)===91){if(typeof c!=="number")return c.N()
z=c-1
if(C.c.a4(a,z)!==93)P.bN(a,b,"Missing end `]` to match `[` in host")
P.fA(a,b+1,z)
return C.c.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.B(c)
y=b
for(;y<c;++y)if(C.c.a4(a,y)===58){P.fA(a,b,c)
return"["+a+"]"}return P.mg(a,b,c)},
mg:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.B(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.c.a4(a,z)
if(v===37){u=P.hb(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ag("")
s=C.c.u(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.c.u(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.L,t)
t=(C.L[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ag("")
if(y<z){x.a+=C.c.u(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.u,t)
t=(C.u[t]&1<<(v&15))!==0}else t=!1
if(t)P.bN(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.c.a4(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ag("")
s=C.c.u(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h5(v)
z+=q
y=z}}}}if(x==null)return C.c.u(a,b,c)
if(y<c){s=C.c.u(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
md:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.h7(C.c.G(a,b)))P.bN(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.c.G(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.w,w)
w=(C.w[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bN(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.c.u(a,b,c)
return P.m4(y?a.toLowerCase():a)},
m4:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
me:function(a,b,c){return P.bO(a,b,c,C.a9,!1)},
m8:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bO(a,b,c,C.M,!0):C.t.lm(d,new P.m9(),P.h).l(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.c.a8(w,"/"))w="/"+w
return P.mf(w,e,f)},
mf:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.c.a8(a,"/"))return P.mh(a,!z||c)
return P.mi(a)},
dP:function(a,b,c,d){var z,y
z={}
H.k(d,"$isJ",[P.h,null],"$asJ")
if(a!=null){if(d!=null)throw H.e(P.bY("Both query and queryParameters specified"))
return P.bO(a,b,c,C.v,!0)}if(d==null)return
y=new P.ag("")
z.a=""
d.S(0,new P.mb(new P.mc(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
m6:function(a,b,c){return P.bO(a,b,c,C.v,!0)},
hb:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.c.a4(a,b+1)
x=C.c.a4(a,z)
w=H.cQ(y)
v=H.cQ(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.h.aY(u,4)
if(z>=8)return H.f(C.x,z)
z=(C.x[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bd(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.c.u(a,b,b+3).toUpperCase()
return},
h5:function(a){var z,y,x,w,v,u
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
for(v=0;--w,w>=0;x=128){u=C.h.iC(a,6*w)&63|x
C.a.q(y,v,37)
C.a.q(y,v+1,C.c.G("0123456789ABCDEF",u>>>4))
C.a.q(y,v+2,C.c.G("0123456789ABCDEF",u&15))
v+=3}}return P.c8(y,0,null)},
bO:function(a,b,c,d,e){var z=P.ha(a,b,c,H.k(d,"$isb",[P.m],"$asb"),e)
return z==null?C.c.u(a,b,c):z},
ha:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.k(d,"$isb",[P.m],"$asb")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.U()
if(typeof c!=="number")return H.B(c)
if(!(y<c))break
c$0:{v=C.c.a4(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hb(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.u,u)
u=(C.u[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bN(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.c.a4(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h5(v)}}if(w==null)w=new P.ag("")
w.a+=C.c.u(a,x,y)
w.a+=H.i(t)
if(typeof s!=="number")return H.B(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.U()
if(x<c)w.a+=C.c.u(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
h8:function(a){if(C.c.a8(a,"."))return!0
return C.c.f0(a,"/.")!==-1},
mi:function(a){var z,y,x,w,v,u,t
if(!P.h8(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.a0(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.l(z,"/")},
mh:function(a,b){var z,y,x,w,v,u
if(!P.h8(a))return!b?P.h6(a):a
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
C.a.q(z,0,P.h6(z[0]))}return C.a.l(z,"/")},
h6:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.h7(J.hC(a,0)))for(y=1;y<z;++y){x=C.c.G(a,y)
if(x===58)return C.c.u(a,0,y)+"%3A"+C.c.ay(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.w,w)
w=(C.w[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
m5:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.c.G(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.e(P.bY("Invalid URL encoding"))}}return z},
dQ:function(a,b,c,d,e){var z,y,x,w,v
y=b
while(!0){if(!(y<c)){z=!0
break}x=C.c.G(a,y)
if(x<=127)if(x!==37)w=x===43
else w=!0
else w=!0
if(w){z=!1
break}++y}if(z){if(C.m!==d)w=!1
else w=!0
if(w)return C.c.u(a,b,c)
else v=new H.u(C.c.u(a,b,c))}else{v=H.c([],[P.m])
for(w=a.length,y=b;y<c;++y){x=C.c.G(a,y)
if(x>127)throw H.e(P.bY("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.e(P.bY("Truncated URI"))
C.a.h(v,P.m5(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.k(v,"$isb",[P.m],"$asb")
return new P.kT(!1).cP(v)},
h7:function(a){var z=a|32
return 97<=z&&z<=122}}},
m3:{"^":"o:20;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.I()
throw H.e(P.Y("Invalid port",this.a,z+1))}},
m9:{"^":"o:27;",
$1:function(a){return P.cb(C.aa,a,C.m,!1)}},
mc:{"^":"o:34;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.i(P.cb(C.x,a,C.m,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.i(P.cb(C.x,b,C.m,!0))}}},
mb:{"^":"o:33;a",
$2:function(a,b){var z,y
H.D(a)
if(b==null||typeof b==="string")this.a.$2(a,H.D(b))
else for(z=J.b5(H.hs(b,"$isn")),y=this.a;z.B();)y.$2(a,H.D(z.gK()))}},
kH:{"^":"a;a,b,c",
gfj:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.c.f1(y,"?",z)
w=y.length
if(x>=0){v=P.bO(y,x+1,w,C.v,!1)
w=x}else v=null
z=new P.li(this,"data",null,null,null,P.bO(y,z,w,C.M,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
fz:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.c.G(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.e(P.Y("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.e(P.Y("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.c.G(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaD(z)
if(v!==44||x!==t+7||!C.c.ak(a,"base64",t+1))throw H.e(P.Y("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.R.ka(a,s,y)
else{r=P.ha(a,s,y,C.v,!0)
if(r!=null)a=C.c.b6(a,s,y,r)}return new P.kH(a,z,c)}}},
mv:{"^":"o:31;",
$1:function(a){return new Uint8Array(96)}},
mu:{"^":"o:30;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hE(z,0,96,b)
return z}},
mw:{"^":"o;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.c.G(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mx:{"^":"o;",
$3:function(a,b,c){var z,y,x
for(z=C.c.G(b,0),y=C.c.G(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
lP:{"^":"a;a,b,c,d,e,f,r,x,0y",
geX:function(){return this.c>0},
geZ:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.I()
y=this.e
if(typeof y!=="number")return H.B(y)
y=z+1<y
z=y}else z=!1
return z},
gf_:function(){var z=this.f
if(typeof z!=="number")return z.U()
return z<this.r},
geY:function(){return this.r<this.a.length},
gdX:function(){return this.b===4&&C.c.a8(this.a,"http")},
gdY:function(){return this.b===5&&C.c.a8(this.a,"https")},
gcf:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdX()){this.x="http"
z="http"}else if(this.gdY()){this.x="https"
z="https"}else if(z===4&&C.c.a8(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.c.a8(this.a,"package")){this.x="package"
z="package"}else{z=C.c.u(this.a,0,z)
this.x=z}return z},
gfk:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.c.u(this.a,y,z-1):""},
gd0:function(a){var z=this.c
return z>0?C.c.u(this.a,z,this.d):""},
gc5:function(a){var z
if(this.geZ()){z=this.d
if(typeof z!=="number")return z.I()
return P.bW(C.c.u(this.a,z+1,this.e),null,null)}if(this.gdX())return 80
if(this.gdY())return 443
return 0},
gf9:function(a){return C.c.u(this.a,this.e,this.f)},
gdc:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.U()
return z<y?C.c.u(this.a,z+1,y):""},
geW:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.c.ay(y,z+1):""},
gbt:function(){var z=this.f
if(typeof z!=="number")return z.U()
if(z>=this.r)return C.ab
z=P.h
return new P.fy(P.fB(this.gdc(),C.m),[z,z])},
de:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.k(h,"$isJ",[P.h,null],"$asJ")
i=this.gcf()
z=i==="file"
y=this.c
j=y>0?C.c.u(this.a,this.b+3,y):""
f=this.geZ()?this.gc5(this):null
y=this.c
if(y>0)c=C.c.u(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.c.u(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.c.a8(d,"/"))d="/"+d
g=P.dP(g,0,0,h)
x=this.r
if(x<y.length)b=C.c.ay(y,x+1)
return new P.cK(i,j,c,f,d,g,b)},
dd:function(a,b){return this.de(a,null,null,null,null,null,null,b,null,null)},
ga0:function(a){var z=this.y
if(z==null){z=C.c.ga0(this.a)
this.y=z}return z},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.N(b).$isdI)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$isdI:1},
li:{"^":"cK;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e7:function(a){var z=document.createElement("a")
return z},
d2:function(a,b){var z=document.createElement("canvas")
return z},
ig:function(a,b,c){var z,y
z=document.body
y=(z&&C.p).at(z,a,b,c)
y.toString
z=W.C
z=new H.dL(new W.ap(y),H.l(new W.ih(),{func:1,ret:P.M,args:[z]}),[z])
return H.d(z.gaP(z),"$isK")},
ii:function(a){H.d(a,"$iscm")
return"wheel"},
by:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hH(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a9(x)}return z},
d9:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
iF:function(a){var z,y,x
y=document.createElement("input")
z=H.d(y,"$isey")
try{J.hJ(z,a)}catch(x){H.a9(x)}return z},
cH:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fU:function(a,b,c,d){var z,y
z=W.cH(W.cH(W.cH(W.cH(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hk:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.S
if(z===C.l)return a
return z.en(a,b)},
a2:{"^":"K;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
hN:{"^":"a2;",
i:function(a){return String(a)},
$ishN:1,
"%":"HTMLAnchorElement"},
nq:{"^":"a2;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
ea:{"^":"a2;",$isea:1,"%":"HTMLBaseElement"},
cg:{"^":"a2;",$iscg:1,"%":"HTMLBodyElement"},
d1:{"^":"a2;",
cc:function(a,b,c){if(c!=null)return this.hx(a,b,P.mJ(c,null))
return this.hy(a,b)},
fs:function(a,b){return this.cc(a,b,null)},
hx:function(a,b,c){return a.getContext(b,c)},
hy:function(a,b){return a.getContext(b)},
$isd1:1,
$isef:1,
"%":"HTMLCanvasElement"},
d3:{"^":"H;",
hz:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jK:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$isd3:1,
"%":"CanvasRenderingContext2D"},
nt:{"^":"C;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nv:{"^":"lh;0m:length=",
fu:function(a,b){var z=this.hA(a,this.hg(a,b))
return z==null?"":z},
hg:function(a,b){var z,y
z=$.$get$ek()
y=z[b]
if(typeof y==="string")return y
y=this.iF(a,b)
z[b]=y
return y},
iF:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.i9()+b
if(z in a)return z
return b},
hA:function(a,b){return a.getPropertyValue(b)},
gcK:function(a){return a.bottom},
gbo:function(a){return a.height},
gb3:function(a){return a.left},
gbu:function(a){return a.right},
gbz:function(a){return a.top},
gbB:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
i4:{"^":"a;",
gb3:function(a){return this.fu(a,"left")}},
b_:{"^":"a2;",$isb_:1,"%":"HTMLDivElement"},
ia:{"^":"C;",
ji:function(a,b){return a.adoptNode(b)},
cd:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
nw:{"^":"H;",
i:function(a){return String(a)},
"%":"DOMException"},
ib:{"^":"H;",
jA:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
ic:{"^":"H;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
A:function(a,b){var z
if(b==null)return!1
if(!H.bT(b,"$isaO",[P.aj],"$asaO"))return!1
z=J.a_(b)
return a.left===z.gb3(b)&&a.top===z.gbz(b)&&a.width===z.gbB(b)&&a.height===z.gbo(b)},
ga0:function(a){return W.fU(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcK:function(a){return a.bottom},
gbo:function(a){return a.height},
gb3:function(a){return a.left},
gbu:function(a){return a.right},
gbz:function(a){return a.top},
gbB:function(a){return a.width},
$isaO:1,
$asaO:function(){return[P.aj]},
"%":";DOMRectReadOnly"},
lg:{"^":"cr;dR:a<,b",
gm:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.f(z,b)
return H.d(z[b],"$isK")},
q:function(a,b,c){var z
H.d(c,"$isK")
z=this.b
if(b<0||b>=z.length)return H.f(z,b)
J.cU(this.a,c,z[b])},
h:function(a,b){J.e5(this.a,b)
return b},
gT:function(a){var z=this.kD(this)
return new J.as(z,z.length,0,[H.r(z,0)])},
$asT:function(){return[W.K]},
$asn:function(){return[W.K]},
$asb:function(){return[W.K]}},
K:{"^":"C;0ky:tagName=",
gjl:function(a){return new W.lj(a)},
gcO:function(a){return new W.lg(a,a.children)},
ger:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.U()
if(x<0)x=-x*0
if(typeof w!=="number")return w.U()
if(w<0)w=-w*0
return new P.aO(z,y,x,w,[P.aj])},
i:function(a){return a.localName},
at:["ci",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.eu
if(z==null){z=H.c([],[W.aH])
y=new W.eR(z)
C.a.h(z,W.fS(null))
C.a.h(z,W.h1())
$.eu=y
d=y}else d=z
z=$.et
if(z==null){z=new W.hc(d)
$.et=z
c=z}else{z.a=d
c=z}}if($.aM==null){z=document
y=z.implementation
y=(y&&C.V).jA(y,"")
$.aM=y
$.d6=y.createRange()
y=$.aM
y.toString
y=y.createElement("base")
H.d(y,"$isea")
y.href=z.baseURI
z=$.aM.head;(z&&C.X).C(z,y)}z=$.aM
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.d(y,"$iscg")}z=$.aM
if(!!this.$iscg)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aM.body;(z&&C.p).C(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.a_(C.a8,a.tagName)){z=$.d6;(z&&C.O).fB(z,x)
z=$.d6
w=(z&&C.O).jy(z,b)}else{x.innerHTML=b
w=$.aM.createDocumentFragment()
for(z=J.a_(w);y=x.firstChild,y!=null;)z.C(w,y)}z=$.aM.body
if(x==null?z!=null:x!==z)J.e6(x)
c.dr(w)
C.r.ji(document,w)
return w},function(a,b,c){return this.at(a,b,c,null)},"jz",null,null,"glk",5,5,null],
fE:function(a,b,c,d){a.textContent=null
this.C(a,this.at(a,b,c,d))},
fD:function(a,b){return this.fE(a,b,null,null)},
b8:function(a,b){return a.getAttribute(b)},
ik:function(a,b){return a.removeAttribute(b)},
fC:function(a,b,c){return a.setAttribute(b,c)},
$isK:1,
"%":";Element"},
ih:{"^":"o:23;",
$1:function(a){return!!J.N(H.d(a,"$isC")).$isK}},
a6:{"^":"H;",$isa6:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
cm:{"^":"H;",
hb:function(a,b,c,d){return a.addEventListener(b,H.bn(H.l(c,{func:1,args:[W.a6]}),1),!1)},
$iscm:1,
"%":";EventTarget"},
nx:{"^":"a2;0m:length=","%":"HTMLFormElement"},
ix:{"^":"a2;","%":"HTMLHeadElement"},
iy:{"^":"H;0m:length=",
e7:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
iz:{"^":"lz;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b6(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isC")
throw H.e(P.X("Cannot assign element of immutable List."))},
ae:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isau:1,
$asau:function(){return[W.C]},
$asT:function(){return[W.C]},
$isn:1,
$asn:function(){return[W.C]},
$isb:1,
$asb:function(){return[W.C]},
$isiz:1,
$asaC:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
iA:{"^":"ia;","%":"HTMLDocument"},
c1:{"^":"H;0es:data=",$isc1:1,"%":"ImageData"},
d8:{"^":"a2;",$isd8:1,$isef:1,"%":"HTMLImageElement"},
ey:{"^":"a2;0type",
skG:function(a,b){a.type=H.D(b)},
$isey:1,
"%":"HTMLInputElement"},
bC:{"^":"dy;",$isbC:1,"%":"KeyboardEvent"},
iO:{"^":"a2;","%":"HTMLLabelElement"},
iZ:{"^":"H;",
i:function(a){return String(a)},
$isiZ:1,
"%":"Location"},
jd:{"^":"a2;","%":"HTMLAudioElement;HTMLMediaElement"},
ac:{"^":"dy;",$isac:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ap:{"^":"cr;a",
gaP:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.e(P.fa("No elements"))
if(y>1)throw H.e(P.fa("More than one element"))
return z.firstChild},
ac:function(a,b){var z,y,x,w,v
H.k(b,"$isn",[W.C],"$asn")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.a_(y),v=0;v<x;++v)w.C(y,z.firstChild)
return},
q:function(a,b,c){var z,y
H.d(c,"$isC")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.f(y,b)
J.cU(z,c,y[b])},
gT:function(a){var z=this.a.childNodes
return new W.ew(z,z.length,-1,[H.bV(C.ac,z,"aC",0)])},
gm:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asT:function(){return[W.C]},
$asn:function(){return[W.C]},
$asb:function(){return[W.C]}},
C:{"^":"cm;0kn:previousSibling=",
kp:function(a){var z=a.parentNode
if(z!=null)J.ce(z,a)},
kr:function(a,b){var z,y
try{z=a.parentNode
J.cU(z,b,a)}catch(y){H.a9(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.fI(a):z},
C:function(a,b){return a.appendChild(H.d(b,"$isC"))},
il:function(a,b){return a.removeChild(b)},
ip:function(a,b,c){return a.replaceChild(b,c)},
$isC:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
jh:{"^":"lF;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b6(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isC")
throw H.e(P.X("Cannot assign element of immutable List."))},
ae:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isau:1,
$asau:function(){return[W.C]},
$asT:function(){return[W.C]},
$isn:1,
$asn:function(){return[W.C]},
$isb:1,
$asb:function(){return[W.C]},
$asaC:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
jE:{"^":"H;",
jy:function(a,b){return a.createContextualFragment(b)},
fB:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
nG:{"^":"a2;0m:length=","%":"HTMLSelectElement"},
cy:{"^":"a2;",$iscy:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
kb:{"^":"a2;",
at:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ci(a,b,c,d)
z=W.ig("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ap(y).ac(0,new W.ap(z))
return y},
hC:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
kc:{"^":"a2;",
at:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ci(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.at(z.createElement("table"),b,c,d)
z.toString
z=new W.ap(z)
x=z.gaP(z)
x.toString
z=new W.ap(x)
w=z.gaP(z)
y.toString
w.toString
new W.ap(y).ac(0,new W.ap(w))
return y},
dW:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
nJ:{"^":"a2;",
at:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ci(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.at(z.createElement("table"),b,c,d)
z.toString
z=new W.ap(z)
x=z.gaP(z)
y.toString
x.toString
new W.ap(y).ac(0,new W.ap(x))
return y},
"%":"HTMLTableSectionElement"},
fd:{"^":"a2;",$isfd:1,"%":"HTMLTemplateElement"},
bf:{"^":"H;",$isbf:1,"%":"Touch"},
bg:{"^":"dy;",$isbg:1,"%":"TouchEvent"},
nL:{"^":"m_;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b6(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isbf")
throw H.e(P.X("Cannot assign element of immutable List."))},
ae:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isau:1,
$asau:function(){return[W.bf]},
$asT:function(){return[W.bf]},
$isn:1,
$asn:function(){return[W.bf]},
$isb:1,
$asb:function(){return[W.bf]},
$asaC:function(){return[W.bf]},
"%":"TouchList"},
dy:{"^":"a6;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
nO:{"^":"jd;",$isef:1,"%":"HTMLVideoElement"},
bL:{"^":"ac;",
gjG:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.X("deltaY is not supported"))},
gjF:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.X("deltaX is not supported"))},
$isbL:1,
"%":"WheelEvent"},
l9:{"^":"cm;",
iq:function(a,b){return a.requestAnimationFrame(H.bn(H.l(b,{func:1,ret:-1,args:[P.aj]}),1))},
hq:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fO:{"^":"C;",$isfO:1,"%":"Attr"},
nT:{"^":"ic;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
A:function(a,b){var z
if(b==null)return!1
if(!H.bT(b,"$isaO",[P.aj],"$asaO"))return!1
z=J.a_(b)
return a.left===z.gb3(b)&&a.top===z.gbz(b)&&a.width===z.gbB(b)&&a.height===z.gbo(b)},
ga0:function(a){return W.fU(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbo:function(a){return a.height},
gbB:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nX:{"^":"mq;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b6(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isC")
throw H.e(P.X("Cannot assign element of immutable List."))},
ae:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isau:1,
$asau:function(){return[W.C]},
$asT:function(){return[W.C]},
$isn:1,
$asn:function(){return[W.C]},
$isb:1,
$asb:function(){return[W.C]},
$asaC:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lf:{"^":"eK;dR:a<",
S:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.gaC(),y=z.length,x=this.a,w=J.a_(x),v=0;v<z.length;z.length===y||(0,H.A)(z),++v){u=z[v]
b.$2(u,w.b8(x,u))}},
gaC:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.d(z[w],"$isfO")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asct:function(){return[P.h,P.h]},
$asJ:function(){return[P.h,P.h]}},
lj:{"^":"lf;a",
k:function(a,b){return J.cW(this.a,H.D(b))},
q:function(a,b,c){J.hK(this.a,b,c)},
gm:function(a){return this.gaC().length}},
lk:{"^":"k6;a,b,c,$ti"},
nU:{"^":"lk;a,b,c,$ti"},
ll:{"^":"dr;a,b,c,d,e,$ti",p:{
Z:function(a,b,c,d,e){var z,y
z=W.hk(new W.lm(c),W.a6)
y=z!=null
if(y&&!0){H.l(z,{func:1,args:[W.a6]})
if(y)J.hB(a,b,z,!1)}return new W.ll(0,a,b,z,!1,[e])}}},
lm:{"^":"o:29;a",
$1:function(a){return this.a.$1(H.d(a,"$isa6"))}},
ca:{"^":"a;a",
fX:function(a){var z,y
z=$.$get$dN()
if(z.gjY(z)){for(y=0;y<262;++y)z.q(0,C.a7[y],W.mT())
for(y=0;y<12;++y)z.q(0,C.B[y],W.mU())}},
aZ:function(a){return $.$get$fT().a_(0,W.by(a))},
aI:function(a,b,c){var z,y,x
z=W.by(a)
y=$.$get$dN()
x=y.k(0,H.i(z)+"::"+b)
if(x==null)x=y.k(0,"*::"+b)
if(x==null)return!1
return H.dV(x.$4(a,b,c,this))},
$isaH:1,
p:{
fS:function(a){var z,y
z=W.e7(null)
y=window.location
z=new W.ca(new W.lL(z,y))
z.fX(a)
return z},
nV:[function(a,b,c,d){H.d(a,"$isK")
H.D(b)
H.D(c)
H.d(d,"$isca")
return!0},"$4","mT",16,0,24],
nW:[function(a,b,c,d){var z,y,x
H.d(a,"$isK")
H.D(b)
H.D(c)
z=H.d(d,"$isca").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","mU",16,0,24]}},
aC:{"^":"a;$ti",
gT:function(a){return new W.ew(a,this.gm(a),-1,[H.bV(this,a,"aC",0)])}},
eR:{"^":"a;a",
aZ:function(a){return C.a.el(this.a,new W.jj(a))},
aI:function(a,b,c){return C.a.el(this.a,new W.ji(a,b,c))},
$isaH:1},
jj:{"^":"o:25;a",
$1:function(a){return H.d(a,"$isaH").aZ(this.a)}},
ji:{"^":"o:25;a,b,c",
$1:function(a){return H.d(a,"$isaH").aI(this.a,this.b,this.c)}},
lM:{"^":"a;",
h5:function(a,b,c,d){var z,y,x
this.a.ac(0,c)
z=b.di(0,new W.lN())
y=b.di(0,new W.lO())
this.b.ac(0,z)
x=this.c
x.ac(0,C.J)
x.ac(0,y)},
aZ:function(a){return this.a.a_(0,W.by(a))},
aI:["fN",function(a,b,c){var z,y
z=W.by(a)
y=this.c
if(y.a_(0,H.i(z)+"::"+b))return this.d.jj(c)
else if(y.a_(0,"*::"+b))return this.d.jj(c)
else{y=this.b
if(y.a_(0,H.i(z)+"::"+b))return!0
else if(y.a_(0,"*::"+b))return!0
else if(y.a_(0,H.i(z)+"::*"))return!0
else if(y.a_(0,"*::*"))return!0}return!1}],
$isaH:1},
lN:{"^":"o:26;",
$1:function(a){return!C.a.a_(C.B,H.D(a))}},
lO:{"^":"o:26;",
$1:function(a){return C.a.a_(C.B,H.D(a))}},
lT:{"^":"lM;e,a,b,c,d",
aI:function(a,b,c){if(this.fN(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cW(a,"template")==="")return this.e.a_(0,b)
return!1},
p:{
h1:function(){var z,y,x,w,v
z=P.h
y=P.eH(C.A,z)
x=H.r(C.A,0)
w=H.l(new W.lU(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.lT(y,P.c6(null,null,null,z),P.c6(null,null,null,z),P.c6(null,null,null,z),null)
y.h5(null,new H.j4(C.A,w,[x,z]),v,null)
return y}}},
lU:{"^":"o:27;",
$1:function(a){return"TEMPLATE::"+H.i(H.D(a))}},
lS:{"^":"a;",
aZ:function(a){var z=J.N(a)
if(!!z.$isf4)return!1
z=!!z.$isds
if(z&&W.by(a)==="foreignObject")return!1
if(z)return!0
return!1},
aI:function(a,b,c){if(b==="is"||C.c.a8(b,"on"))return!1
return this.aZ(a)},
$isaH:1},
ew:{"^":"a;a,b,c,0d,$ti",
sdU:function(a){this.d=H.y(a,H.r(this,0))},
B:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdU(J.hA(this.a,z))
this.c=z
return!0}this.sdU(null)
this.c=y
return!1},
gK:function(){return this.d},
$isb0:1},
aH:{"^":"a;"},
lL:{"^":"a;a,b",$isnN:1},
hc:{"^":"a;a",
dr:function(a){new W.mn(this).$2(a,null)},
bi:function(a,b){if(b==null)J.e6(a)
else J.ce(b,a)},
iv:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hF(a)
x=J.cW(y.gdR(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a9(t)}v="element unprintable"
try{v=J.ae(a)}catch(t){H.a9(t)}try{u=W.by(a)
this.iu(H.d(a,"$isK"),b,z,v,u,H.d(y,"$isJ"),H.D(x))}catch(t){if(H.a9(t) instanceof P.aL)throw t
else{this.bi(a,b)
window
s="Removing corrupted element "+H.i(v)
if(typeof console!="undefined")window.console.warn(s)}}},
iu:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.bi(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aZ(a)){this.bi(a,b)
window
z="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aI(a,"is",g)){this.bi(a,b)
window
z="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaC()
y=H.c(z.slice(0),[H.r(z,0)])
for(x=f.gaC().length-1,z=f.a,w=J.a_(z);x>=0;--x){if(x>=y.length)return H.f(y,x)
v=y[x]
if(!this.a.aI(a,J.hM(v),w.b8(z,v))){window
u="Removing disallowed attribute <"+H.i(e)+" "+v+'="'+H.i(w.b8(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.b8(z,v)
w.ik(z,v)}}if(!!J.N(a).$isfd)this.dr(a.content)},
$isnF:1},
mn:{"^":"o:46;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.iv(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.bi(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hG(z)}catch(w){H.a9(w)
v=H.d(z,"$isC")
if(x){u=v.parentNode
if(u!=null)J.ce(u,v)}else J.ce(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.d(y,"$isC")}}},
lh:{"^":"H+i4;"},
ly:{"^":"H+T;"},
lz:{"^":"ly+aC;"},
lE:{"^":"H+T;"},
lF:{"^":"lE+aC;"},
lZ:{"^":"H+T;"},
m_:{"^":"lZ+aC;"},
mp:{"^":"H+T;"},
mq:{"^":"mp+aC;"}}],["","",,P,{"^":"",
mM:function(a){var z,y
z=J.N(a)
if(!!z.$isc1){y=z.ges(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h3(a.data,a.height,a.width)},
mL:function(a){if(a instanceof P.h3)return{data:a.a,height:a.b,width:a.c}
return a},
mJ:function(a,b){var z={}
a.S(0,new P.mK(z))
return z},
eq:function(){var z=$.ep
if(z==null){z=J.cV(window.navigator.userAgent,"Opera",0)
$.ep=z}return z},
i9:function(){var z,y
z=$.em
if(z!=null)return z
y=$.en
if(y==null){y=J.cV(window.navigator.userAgent,"Firefox",0)
$.en=y}if(y)z="-moz-"
else{y=$.eo
if(y==null){y=!P.eq()&&J.cV(window.navigator.userAgent,"Trident/",0)
$.eo=y}if(y)z="-ms-"
else z=P.eq()?"-o-":"-webkit-"}$.em=z
return z},
lQ:{"^":"a;",
eU:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
ca:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.N(a)
if(!!y.$isal)return new Date(a.a)
if(!!y.$isjI)throw H.e(P.cC("structured clone of RegExp"))
if(!!y.$isc1)return a
if(!!y.$isdl)return a
if(!!y.$isJ){x=this.eU(a)
y=this.b
if(x>=y.length)return H.f(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.q(y,x,w)
a.S(0,new P.lR(z,this))
return z.a}if(!!y.$isb){x=this.eU(a)
z=this.b
if(x>=z.length)return H.f(z,x)
w=z[x]
if(w!=null)return w
return this.jx(a,x)}throw H.e(P.cC("structured clone of other type"))},
jx:function(a,b){var z,y,x,w
z=J.bq(a)
y=z.gm(a)
x=new Array(y)
C.a.q(this.b,b,x)
for(w=0;w<y;++w)C.a.q(x,w,this.ca(z.k(a,w)))
return x}},
lR:{"^":"o:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.ca(b)}},
h3:{"^":"a;es:a>,b,c",$isc1:1},
mK:{"^":"o:6;a",
$2:function(a,b){this.a[a]=b}},
h0:{"^":"lQ;a,b"},
ip:{"^":"cr;a,b",
gbd:function(){var z,y,x
z=this.b
y=H.a3(z,"T",0)
x=W.K
return new H.j2(new H.dL(z,H.l(new P.iq(),{func:1,ret:P.M,args:[y]}),[y]),H.l(new P.ir(),{func:1,ret:x,args:[y]}),[y,x])},
S:function(a,b){H.l(b,{func:1,ret:-1,args:[W.K]})
C.a.S(P.eI(this.gbd(),!1,W.K),b)},
q:function(a,b,c){var z
H.d(c,"$isK")
z=this.gbd()
J.hI(z.b.$1(J.cf(z.a,b)),c)},
h:function(a,b){J.e5(this.b.a,b)},
gm:function(a){return J.ar(this.gbd().a)},
k:function(a,b){var z=this.gbd()
return z.b.$1(J.cf(z.a,b))},
gT:function(a){var z=P.eI(this.gbd(),!1,W.K)
return new J.as(z,z.length,0,[H.r(z,0)])},
$asT:function(){return[W.K]},
$asn:function(){return[W.K]},
$asb:function(){return[W.K]}},
iq:{"^":"o:23;",
$1:function(a){return!!J.N(H.d(a,"$isC")).$isK}},
ir:{"^":"o:55;",
$1:function(a){return H.j(H.d(a,"$isC"),"$isK")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cI:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lA:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lG:{"^":"a;$ti",
gbu:function(a){var z=this.a
if(typeof z!=="number")return z.I()
return H.y(z+this.c,H.r(this,0))},
gcK:function(a){var z=this.b
if(typeof z!=="number")return z.I()
return H.y(z+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bT(b,"$isaO",[P.aj],"$asaO"))return!1
z=this.a
y=J.a_(b)
x=y.gb3(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbz(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.I()
w=H.r(this,0)
if(H.y(z+this.c,w)===y.gbu(b)){if(typeof x!=="number")return x.I()
z=H.y(x+this.d,w)===y.gcK(b)}else z=!1}else z=!1}else z=!1
return z},
ga0:function(a){var z,y,x,w,v
z=this.a
y=J.bX(z)
x=this.b
w=J.bX(x)
if(typeof z!=="number")return z.I()
v=H.r(this,0)
z=H.y(z+this.c,v)
if(typeof x!=="number")return x.I()
v=H.y(x+this.d,v)
return P.lA(P.cI(P.cI(P.cI(P.cI(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aO:{"^":"lG;b3:a>,bz:b>,bB:c>,bo:d>,$ti"}}],["","",,P,{"^":"",f4:{"^":"ds;",$isf4:1,"%":"SVGScriptElement"},ds:{"^":"K;",
gcO:function(a){return new P.ip(a,new W.ap(a))},
at:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aH])
C.a.h(z,W.fS(null))
C.a.h(z,W.h1())
C.a.h(z,new W.lS())
c=new W.hc(new W.eR(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).jz(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ap(w)
u=z.gaP(z)
for(z=J.a_(v);x=u.firstChild,x!=null;)z.C(v,x)
return v},
$isds:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":"",O:{"^":"a;",$isn:1,
$asn:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskt:1}}],["","",,P,{"^":""}],["","",,P,{"^":"",hR:{"^":"H;",$ishR:1,"%":"WebGLBuffer"},it:{"^":"H;",$isit:1,"%":"WebGLFramebuffer"},jB:{"^":"H;",$isjB:1,"%":"WebGLProgram"},dm:{"^":"H;",
bM:function(a,b){return a.activeTexture(b)},
em:function(a,b,c){return a.attachShader(b,c)},
aA:function(a,b,c){return a.bindBuffer(b,c)},
jn:function(a,b,c){return a.bindFramebuffer(b,c)},
ad:function(a,b,c){return a.bindTexture(b,c)},
jo:function(a,b,c){return a.blendFunc(b,c)},
eo:function(a,b,c,d){return a.bufferData(b,c,d)},
jr:function(a,b){return a.clear(b)},
js:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jt:function(a,b){return a.clearDepth(b)},
ju:function(a,b){return a.compileShader(b)},
jB:function(a,b){return a.createShader(b)},
jD:function(a,b){return a.deleteProgram(b)},
jE:function(a,b){return a.deleteShader(b)},
jH:function(a,b){return a.depthFunc(b)},
jI:function(a,b){return a.disable(b)},
ev:function(a,b){return a.disableVertexAttribArray(b)},
jJ:function(a,b,c,d,e){return a.drawElements(b,c,H.a4(d),H.a4(e))},
cT:function(a,b){return a.enable(b)},
ey:function(a,b){return a.enableVertexAttribArray(b)},
fm:function(a,b){return a.generateMipmap(b)},
fn:function(a,b,c){return a.getActiveAttrib(b,c)},
fo:function(a,b,c){return a.getActiveUniform(b,c)},
fp:function(a,b,c){return a.getAttribLocation(b,c)},
dn:function(a,b){return a.getParameter(b)},
ft:function(a,b){return a.getProgramInfoLog(b)},
ce:function(a,b,c){return a.getProgramParameter(b,c)},
fv:function(a,b){return a.getShaderInfoLog(b)},
fw:function(a,b,c){return a.getShaderParameter(b,c)},
fz:function(a,b,c){return a.getUniformLocation(b,c)},
k0:function(a,b){return a.linkProgram(b)},
fa:function(a,b,c){return a.pixelStorei(b,c)},
fG:function(a,b,c){return a.shaderSource(b,c)},
kz:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.N(g)
if(!!z.$isc1)y=!0
else y=!1
if(y){this.iH(a,b,c,d,e,f,P.mL(g))
return}if(!!z.$isd8)z=!0
else z=!1
if(z){this.iI(a,b,c,d,e,f,g)
return}throw H.e(P.bY("Incorrect number or type of arguments"))},
fd:function(a,b,c,d,e,f,g){return this.kz(a,b,c,d,e,f,g,null,null,null)},
iH:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
iI:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aE:function(a,b,c,d){return a.texParameteri(b,c,d)},
L:function(a,b,c){return a.uniform1f(b,c)},
M:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fh:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fi:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dh:function(a,b){return a.useProgram(b)},
kH:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kI:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isdm:1,
"%":"WebGLRenderingContext"},jU:{"^":"H;",$isjU:1,"%":"WebGLShader"},kd:{"^":"H;",$iskd:1,"%":"WebGLTexture"},kB:{"^":"H;",$iskB:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",V:{"^":"a;0a,0b,0c,0d,$ti",
shG:function(a){this.a=H.k(a,"$isb",[H.a3(this,"V",0)],"$asb")},
se4:function(a){this.b=H.l(a,{func:1,ret:P.M,args:[[P.n,H.a3(this,"V",0)]]})},
se0:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.m,[P.n,H.a3(this,"V",0)]]})},
se5:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.m,[P.n,H.a3(this,"V",0)]]})},
bG:function(a){this.shG(H.c([],[a]))
this.se4(null)
this.se0(null)
this.se5(null)},
ds:function(a,b,c){var z=H.a3(this,"V",0)
H.l(b,{func:1,ret:P.M,args:[[P.n,z]]})
z={func:1,ret:-1,args:[P.m,[P.n,z]]}
H.l(a,z)
H.l(c,z)
this.se4(b)
this.se0(a)
this.se5(c)},
b9:function(a,b){return this.ds(a,null,b)},
e3:function(a){var z
H.k(a,"$isn",[H.a3(this,"V",0)],"$asn")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dB:function(a,b){var z
H.k(b,"$isn",[H.a3(this,"V",0)],"$asn")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
gT:function(a){var z=this.a
return new J.as(z,z.length,0,[H.r(z,0)])},
ae:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.a3(this,"V",0)
H.y(b,z)
z=[z]
if(this.e3(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dB(x,H.c([b],z))}},
ac:function(a,b){var z,y
H.k(b,"$isn",[H.a3(this,"V",0)],"$asn")
if(this.e3(b)){z=this.a
y=z.length
C.a.ac(z,b)
this.dB(y,b)}},
$isn:1,
p:{
d4:function(a){var z=new O.V([a])
z.bG(a)
return z}}},di:{"^":"a;0a,0b",
scr:function(a){this.a=H.k(a,"$isb",[V.av],"$asb")},
gm:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
fT:function(a){var z=this.b
if(!(z==null))z.H(a)},
aQ:function(){return this.fT(null)},
ga5:function(){var z=this.a
if(z.length>0)return C.a.gaD(z)
else return V.b9()},
c7:function(a){var z=this.a
if(a==null)C.a.h(z,V.b9())
else C.a.h(z,a)
this.aQ()},
aM:function(){var z=this.a
if(z.length>0){z.pop()
this.aQ()}}}}],["","",,E,{"^":"",cY:{"^":"a;"},at:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0ar:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sfU:function(a,b){this.y=H.k(b,"$isV",[E.at],"$asV")},
sar:function(a){this.z=H.d(a,"$isbz")},
scg:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gt().Y(0,this.gf7())
y=this.c
if(y!=null)y.gt().h(0,this.gf7())
x=new D.G("shape",z,this.c,this,[F.f6])
x.b=!0
this.b5(x)}},
ax:function(a){var z
for(z=this.y.a,z=new J.as(z,z.length,0,[H.r(z,0)]);z.B();)z.d.ax(a)},
ai:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga5())
z.aQ()
a.da(this.f)
z=a.dy
y=(z&&C.a).gaD(z)
if(y!=null&&this.d!=null)y.fb(a,this)
for(z=this.y.a,z=new J.as(z,z.length,0,[H.r(z,0)]);z.B();)z.d.ai(a)
a.d9()
a.dx.aM()},
gt:function(){var z=this.z
if(z==null){z=D.F()
this.z=z}return z},
b5:function(a){var z=this.z
if(!(z==null))z.H(a)},
aa:function(){return this.b5(null)},
ke:[function(a){H.d(a,"$isw")
this.e=null
this.b5(a)},function(){return this.ke(null)},"lr","$1","$0","gf7",0,2,1],
kc:[function(a){this.b5(H.d(a,"$isw"))},function(){return this.kc(null)},"lp","$1","$0","gf6",0,2,1],
lo:[function(a,b){var z,y,x,w,v,u,t
H.k(b,"$isn",[E.at],"$asn")
for(z=b.length,y=this.gf6(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.gar()==null){t=new D.bz()
t.sal(null)
t.sbg(null)
t.c=null
t.d=0
u.sar(t)}t=u.gar()
t.toString
H.l(y,x)
if(t.a==null)t.sal(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.aa()},"$2","gkb",8,0,9],
lq:[function(a,b){var z,y
H.k(b,"$isn",[E.at],"$asn")
for(z=b.gT(b),y=this.gf6();z.B();)z.gK().gt().Y(0,y)
this.aa()},"$2","gkd",8,0,9],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaG:1,
p:{
ev:function(a,b,c,d,e,f){var z=new E.at()
z.a=d
z.b=!0
z.sfU(0,O.d4(E.at))
z.y.b9(z.gkb(),z.gkd())
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
z.scg(0,e)
return z}}},jK:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
siG:function(a){this.dy=H.k(a,"$isb",[O.bI],"$asb")},
siB:function(a){this.fr=H.k(a,"$isJ",[P.h,A.cx],"$asJ")},
fQ:function(a,b){var z,y
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
z=new O.di()
y=[V.av]
z.scr(H.c([],y))
z.b=null
z.gt().h(0,new E.jM(this))
this.cy=z
z=new O.di()
z.scr(H.c([],y))
z.b=null
z.gt().h(0,new E.jN(this))
this.db=z
z=new O.di()
z.scr(H.c([],y))
z.b=null
z.gt().h(0,new E.jO(this))
this.dx=z
this.siG(H.c([],[O.bI]))
z=this.dy;(z&&C.a).h(z,null)
this.siB(new H.b1(0,0,[P.h,A.cx]))},
gko:function(){var z=this.z
if(z==null){z=this.cy.ga5().D(0,this.db.ga5())
this.z=z}return z},
da:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaD(z):a;(z&&C.a).h(z,y)},
d9:function(){var z=this.dy
if(z.length>1)z.pop()},
ek:function(a){var z=a.b
if(z.length===0)throw H.e(P.t("May not cache a shader with no name."))
if(this.fr.bP(z))throw H.e(P.t('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.q(0,z,a)},
p:{
jL:function(a,b){var z=new E.jK(a,b)
z.fQ(a,b)
return z}}},jM:{"^":"o:8;a",
$1:function(a){var z
H.d(a,"$isw")
z=this.a
z.z=null
z.ch=null}},jN:{"^":"o:8;a",
$1:function(a){var z
H.d(a,"$isw")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jO:{"^":"o:8;a",
$1:function(a){var z
H.d(a,"$isw")
z=this.a
z.ch=null
z.cx=null}},kl:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0ar:x<,0y,0z,0Q,0ch,0cx,0cy",
sar:function(a){this.x=H.d(a,"$isbz")},
fW:[function(a){H.d(a,"$isw")
this.kt()},function(){return this.fW(null)},"fV","$1","$0","gdC",0,2,1],
gjT:function(){var z,y,x
z=Date.now()
y=C.h.a9(P.er(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.al(z,!1)
return x/y},
e8:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.D()
if(typeof z!=="number")return H.B(z)
x=C.k.d_(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.D()
w=C.k.d_(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.fj(C.z,this.gks())}},
kt:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kn(this),{func:1,ret:-1,args:[P.aj]})
C.Q.hq(z)
C.Q.iq(z,W.hk(y,P.aj))}},"$0","gks",0,0,3],
kq:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.e8()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.al(w,!1)
x.y=P.er(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aQ()
w=x.db
C.a.sm(w.a,0)
w.aQ()
w=x.dx
C.a.sm(w.a,0)
w.aQ()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ai(this.e)}x=this.z
if(!(x==null))x.H(null)}catch(v){z=H.a9(v)
y=H.br(v)
P.e3("Error: "+H.i(z))
P.e3("Stack: "+H.i(y))
throw H.e(z)}},
p:{
km:function(a,b,c,d,e){var z,y,x,w
z=J.N(a)
if(!!z.$isd1)return E.fi(a,!0,!0,!0,!1)
y=W.d2(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcO(a).h(0,y)
w=E.fi(y,!0,!0,!0,!1)
w.a=a
return w},
fi:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kl()
y=P.iV(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.q.cc(a,"webgl",y)
x=H.d(x==null?C.q.cc(a,"experimental-webgl",y):x,"$isdm")
if(x==null)H.q(P.t("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jL(x,a)
w=new T.ki(x)
w.b=H.a4((x&&C.b).dn(x,3379))
w.c=H.a4(C.b.dn(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.kO(a)
v=new X.iN()
v.c=new X.aF(!1,!1,!1)
v.sih(P.c6(null,null,null,P.m))
w.b=v
v=new X.je(w)
v.f=0
v.r=V.aN()
v.x=V.aN()
v.Q=1
v.ch=1
w.c=v
v=new X.j_(w)
v.r=0
v.x=V.aN()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kq(w)
v.e=0
v.f=V.aN()
v.r=V.aN()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.shr(H.c([],[[P.dr,P.a]]))
v=w.z
u=document
t=W.ac
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.Z(u,"contextmenu",H.l(w.ghU(),s),!1,t))
v=w.z
r=W.a6
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Z(a,"focus",H.l(w.ghX(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Z(a,"blur",H.l(w.ghR(),q),!1,r))
v=w.z
p=W.bC
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Z(u,"keyup",H.l(w.ghZ(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Z(u,"keydown",H.l(w.ghY(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Z(a,"mousedown",H.l(w.gi1(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Z(a,"mouseup",H.l(w.gi3(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Z(a,"mousemove",H.l(w.gi2(),s),!1,t))
p=w.z
o=W.bL;(p&&C.a).h(p,W.Z(a,H.D(W.ii(a)),H.l(w.gi4(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Z(u,"mousemove",H.l(w.ghV(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Z(u,"mouseup",H.l(w.ghW(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Z(u,"pointerlockchange",H.l(w.gi5(),q),!1,r))
r=w.z
q=W.bg
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Z(a,"touchstart",H.l(w.gie(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Z(a,"touchend",H.l(w.gib(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Z(a,"touchmove",H.l(w.gic(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.al(Date.now(),!1)
z.cy=0
z.e8()
return z}}},kn:{"^":"o:32;a",
$1:function(a){var z
H.ng(a)
z=this.a
if(z.ch){z.ch=!1
z.kq()}}}}],["","",,Z,{"^":"",fL:{"^":"a;a,b",$isnr:1,p:{
dK:function(a,b,c){var z
H.k(c,"$isb",[P.m],"$asb")
z=a.createBuffer()
C.b.aA(a,b,z)
C.b.eo(a,b,new Int16Array(H.bk(c)),35044)
C.b.aA(a,b,null)
return new Z.fL(b,z)}}},ed:{"^":"cY;a,b,c,d,e",
a3:function(a){var z,y,x
try{y=a.a
C.b.ey(y,this.e)
C.b.kH(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.a9(x)
y=P.t('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(z))
throw H.e(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},fM:{"^":"a;a",$isns:1},d0:{"^":"a;a,0b,c,d",
shB:function(a){this.b=H.k(a,"$isb",[Z.c2],"$asb")},
aL:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a3:function(a){var z,y
z=this.a
C.b.aA(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a3(a)},
aw:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.ev(x,z[y].e)
C.b.aA(x,this.a.a,null)},
ai:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
w=v.c
u=w.a
C.b.aA(y,u,w.b)
C.b.jJ(y,v.a,v.b,5123,0)
C.b.aA(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.h]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ae(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(y,", ")+"\nAttrs:   "+C.a.l(u,", ")},
$isnK:1},c2:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bc(this.c)+"'")+"]"}},bh:{"^":"a;a",
gdu:function(a){var z,y
z=this.a
y=(z&$.$get$az().a)!==0?3:0
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$aT().a)!==0)y+=2
if((z&$.$get$aU().a)!==0)y+=3
if((z&$.$get$bJ().a)!==0)y+=3
if((z&$.$get$bK().a)!==0)y+=4
if((z&$.$get$bi().a)!==0)++y
return(z&$.$get$aQ().a)!==0?y+4:y},
jk:function(a){var z,y,x
z=$.$get$az()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bi()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fK()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bh))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$az().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aU().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bJ().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bK().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bi().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.l(z,"|")},
p:{
ao:function(a){return new Z.bh(a)}}}}],["","",,D,{"^":"",eg:{"^":"a;"},bz:{"^":"a;0a,0b,0c,0d",
sal:function(a){this.a=H.k(a,"$isb",[{func:1,ret:-1,args:[D.w]}],"$asb")},
sbg:function(a){this.b=H.k(a,"$isb",[{func:1,ret:-1,args:[D.w]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.w]}
H.l(b,z)
if(this.a==null)this.sal(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
Y:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.w]})
z=this.a
z=z==null?null:C.a.a_(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).Y(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.a_(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).Y(z,b)||y}return y},
H:function(a){var z,y,x,w
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
return!0}if(!x)C.a.S(y,new D.im(z))
y=this.b
if(!(y==null))C.a.S(y,new D.io(z))
z=this.b
if(!(z==null))C.a.sm(z,0)
return!0},
ex:function(){return this.H(null)},
ku:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.H(y)}}},
aO:function(){return this.ku(!0,!1)},
p:{
F:function(){var z=new D.bz()
z.sal(null)
z.sbg(null)
z.c=null
z.d=0
return z}}},im:{"^":"o:22;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.w]})
z=this.a.a
z.b
a.$1(z)}},io:{"^":"o:22;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.w]})
z=this.a.a
z.b
a.$1(z)}},w:{"^":"a;a,0b"},c3:{"^":"w;c,d,a,0b,$ti"},c4:{"^":"w;c,d,a,0b,$ti"},G:{"^":"w;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",ee:{"^":"a;a,b",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ee))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},eD:{"^":"a;a,b",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eD))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},iN:{"^":"a;0a,0b,0c,0d",
sih:function(a){this.d=H.k(a,"$isf5",[P.m],"$asf5")},
kk:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kg:function(a){this.c=a.b
this.d.Y(0,a.a)
return!1}},eJ:{"^":"cu;x,y,c,d,e,a,0b"},j_:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
bc:function(a,b){var z,y,x,w,v,u,t,s
z=new P.al(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.D()
v=b.b
u=this.ch
if(typeof v!=="number")return v.D()
t=new V.ab(y.a+x*w,y.b+v*u)
u=this.a.gb_()
s=new X.bE(a,V.aN(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
d8:function(a,b){this.r=a.a
return!1},
br:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.fA()
if(typeof z!=="number")return z.cb()
this.r=(z&~y)>>>0
return!1},
bq:function(a,b){var z=this.d
if(z==null)return!1
z.H(this.bc(a,b))
return!0},
kl:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gb_()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.D()
t=a.b
s=this.cy
if(typeof t!=="number")return t.D()
w=new X.dj(new V.U(v*u,t*s),y,x,new P.al(w,!1),this)
w.b=!0
z.H(w)
return!0},
i0:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.al(Date.now(),!1)
y=this.f
x=new X.eJ(c,a,this.a.gb_(),b,z,this)
x.b=!0
y.H(x)
this.y=z
this.x=V.aN()}},aF:{"^":"a;a,b,c",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aF))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bE:{"^":"cu;x,y,z,Q,ch,c,d,e,a,0b"},je:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
co:function(a,b,c){var z,y,x
z=new P.al(Date.now(),!1)
y=this.a.gb_()
x=new X.bE(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
d8:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.H(this.co(a,b,!0))
return!0},
br:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.fA()
if(typeof z!=="number")return z.cb()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.H(this.co(a,b,!0))
return!0},
bq:function(a,b){var z=this.d
if(z==null)return!1
z.H(this.co(a,b,!1))
return!0},
km:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gb_()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.D()
u=a.b
t=this.ch
if(typeof u!=="number")return u.D()
x=new X.dj(new V.U(w*v,u*t),y,b,new P.al(x,!1),this)
x.b=!0
z.H(x)
return!0},
gew:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
gc9:function(){var z=this.c
if(z==null){z=D.F()
this.c=z}return z},
gf5:function(){var z=this.d
if(z==null){z=D.F()
this.d=z}return z}},dj:{"^":"cu;x,c,d,e,a,0b"},cu:{"^":"w;"},fm:{"^":"cu;x,y,z,Q,ch,c,d,e,a,0b"},kq:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
bc:function(a,b){var z,y,x,w
H.k(a,"$isb",[V.ab],"$asb")
z=new P.al(Date.now(),!1)
y=a.length>0?a[0]:V.aN()
x=this.a.gb_()
w=new X.fm(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
kj:function(a){var z
H.k(a,"$isb",[V.ab],"$asb")
z=this.b
if(z==null)return!1
z.H(this.bc(a,!0))
return!0},
kh:function(a){var z
H.k(a,"$isb",[V.ab],"$asb")
z=this.c
if(z==null)return!1
z.H(this.bc(a,!0))
return!0},
ki:function(a){var z
H.k(a,"$isb",[V.ab],"$asb")
z=this.d
if(z==null)return!1
z.H(this.bc(a,!1))
return!0}},kO:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
shr:function(a){this.z=H.k(a,"$isb",[[P.dr,P.a]],"$asb")},
gb_:function(){var z=this.a
return V.f2(0,0,C.q.ger(z).c,C.q.ger(z).d)},
dO:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eD(z,new X.aF(y,a.altKey,a.shiftKey))},
aX:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aF(y,a.altKey,a.shiftKey)},
cF:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aF(y,a.altKey,a.shiftKey)},
aH:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.N()
v=z.top
if(typeof x!=="number")return x.N()
return new V.ab(y-w,x-v)},
bh:function(a){return new V.U(a.movementX,a.movementY)},
cB:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.ab])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
t=C.k.av(u.pageX)
C.k.av(u.pageY)
s=z.left
C.k.av(u.pageX)
C.a.h(y,new V.ab(t-s,C.k.av(u.pageY)-z.top))}return y},
aF:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ee(z,new X.aF(y,a.altKey,a.shiftKey))},
cs:function(a){var z,y,x,w,v,u
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
kZ:[function(a){this.f=!0},"$1","ghX",4,0,12],
kT:[function(a){this.f=!1},"$1","ghR",4,0,12],
kW:[function(a){H.d(a,"$isac")
if(this.f&&this.cs(a))a.preventDefault()},"$1","ghU",4,0,4],
l0:[function(a){var z
H.d(a,"$isbC")
if(!this.f)return
z=this.dO(a)
this.b.kk(z)},"$1","ghZ",4,0,28],
l_:[function(a){var z
H.d(a,"$isbC")
if(!this.f)return
z=this.dO(a)
this.b.kg(z)},"$1","ghY",4,0,28],
l2:[function(a){var z,y,x,w
H.d(a,"$isac")
z=this.a
z.focus()
this.f=!0
this.aX(a)
if(this.x){y=this.aF(a)
x=this.bh(a)
if(this.d.d8(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aF(a)
w=this.aH(a)
if(this.c.d8(y,w))a.preventDefault()},"$1","gi1",4,0,4],
l4:[function(a){var z,y,x
H.d(a,"$isac")
this.aX(a)
z=this.aF(a)
if(this.x){y=this.bh(a)
if(this.d.br(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.br(z,x))a.preventDefault()},"$1","gi3",4,0,4],
kY:[function(a){var z,y,x
H.d(a,"$isac")
if(!this.cs(a)){this.aX(a)
z=this.aF(a)
if(this.x){y=this.bh(a)
if(this.d.br(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.br(z,x))a.preventDefault()}},"$1","ghW",4,0,4],
l3:[function(a){var z,y,x
H.d(a,"$isac")
this.aX(a)
z=this.aF(a)
if(this.x){y=this.bh(a)
if(this.d.bq(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.bq(z,x))a.preventDefault()},"$1","gi2",4,0,4],
kX:[function(a){var z,y,x
H.d(a,"$isac")
if(!this.cs(a)){this.aX(a)
z=this.aF(a)
if(this.x){y=this.bh(a)
if(this.d.bq(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.bq(z,x))a.preventDefault()}},"$1","ghV",4,0,4],
l5:[function(a){var z,y
H.d(a,"$isbL")
this.aX(a)
z=new V.U((a&&C.P).gjF(a),C.P.gjG(a)).E(0,180)
if(this.x){if(this.d.kl(z))a.preventDefault()
return}if(this.r)return
y=this.aH(a)
if(this.c.km(z,y))a.preventDefault()},"$1","gi4",4,0,37],
l6:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aF(this.y)
x=this.aH(this.y)
this.d.i0(y,x,z)}},"$1","gi5",4,0,12],
le:[function(a){var z
H.d(a,"$isbg")
this.a.focus()
this.f=!0
this.cF(a)
z=this.cB(a)
if(this.e.kj(z))a.preventDefault()},"$1","gie",4,0,11],
lc:[function(a){var z
H.d(a,"$isbg")
this.cF(a)
z=this.cB(a)
if(this.e.kh(z))a.preventDefault()},"$1","gib",4,0,11],
ld:[function(a){var z
H.d(a,"$isbg")
this.cF(a)
z=this.cB(a)
if(this.e.ki(z))a.preventDefault()},"$1","gic",4,0,11]}}],["","",,D,{"^":"",ck:{"^":"a;0a,0b,0c,0d",
gt:function(){var z=this.d
if(z==null){z=D.F()
this.d=z}return z},
aR:[function(a){var z
H.d(a,"$isw")
z=this.d
if(!(z==null))z.H(a)},function(){return this.aR(null)},"kK","$1","$0","gfZ",0,2,1],
$isa7:1,
$isaG:1},a7:{"^":"a;",$isaG:1},iP:{"^":"V;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
shp:function(a){this.e=H.k(a,"$isb",[D.ck],"$asb")},
sig:function(a){this.f=H.k(a,"$isb",[D.eX],"$asb")},
siD:function(a){this.r=H.k(a,"$isb",[D.f8],"$asb")},
siO:function(a){this.x=H.k(a,"$isb",[D.ff],"$asb")},
siP:function(a){this.y=H.k(a,"$isb",[D.fg],"$asb")},
siQ:function(a){this.z=H.k(a,"$isb",[D.fh],"$asb")},
gt:function(){var z=this.Q
if(z==null){z=D.F()
this.Q=z}return z},
aR:function(a){var z=this.Q
if(!(z==null))z.H(a)},
i_:[function(a){var z
H.d(a,"$isw")
z=this.ch
if(!(z==null))z.H(a)},function(){return this.i_(null)},"l1","$1","$0","ge2",0,2,1],
l7:[function(a){var z,y,x
H.k(a,"$isn",[D.a7],"$asn")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.A)(a),++y){x=a[y]
if(x==null||this.fY(x))return!1}return!0},"$1","gi6",4,0,39],
kQ:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a7
H.k(b,"$isn",[z],"$asn")
for(y=b.length,x=this.ge2(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=H.d(b[u],"$isa7")
if(t instanceof D.ck)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bz()
s.sal(null)
s.sbg(null)
s.c=null
s.d=0
t.d=s}H.l(x,w)
if(s.a==null)s.sal(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.c3(a,b,this,[z])
z.b=!0
this.aR(z)},"$2","ghO",8,0,19],
l9:[function(a,b){var z,y,x,w
z=D.a7
H.k(b,"$isn",[z],"$asn")
for(y=b.gT(b),x=this.ge2();y.B();){w=y.gK()
C.a.Y(this.e,w)
w.gt().Y(0,x)}z=new D.c4(a,b,this,[z])
z.b=!0
this.aR(z)},"$2","gi8",8,0,19],
fY:function(a){var z=C.a.a_(this.e,a)
return z},
$asn:function(){return[D.a7]},
$asV:function(){return[D.a7]}},eX:{"^":"a;",$isa7:1,$isaG:1},f8:{"^":"a;",$isa7:1,$isaG:1},ff:{"^":"a;",$isa7:1,$isaG:1},fg:{"^":"a;",$isa7:1,$isaG:1},fh:{"^":"a;",$isa7:1,$isaG:1}}],["","",,V,{"^":"",
nu:[function(a,b){if(typeof b!=="number")return b.N()
if(typeof a!=="number")return H.B(a)
return Math.abs(b-a)<=1e-9},"$2","jc",8,0,36],
np:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.k.bD(a-b,z)
return(a<0?a+z:a)+b},
P:function(a,b,c){if(a==null)return C.c.ao("null",c)
return C.c.ao(C.k.ff($.p.$2(a,0)?0:a,b),c+b+1)},
bp:function(a,b,c){var z,y,x,w,v,u
H.k(a,"$isb",[P.z],"$asb")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.A)(a),++w){v=V.P(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.q(z,u,C.c.ao(z[u],x))}return z},
e2:function(a,b){return C.k.kC(Math.pow(b,C.a_.d_(Math.log(H.mI(a))/Math.log(b))))},
x:{"^":"a;a,b,c",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.x))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
aY:{"^":"a;a,b,c,d",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aY))return!1
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
eN:{"^":"a;a,b,c,d,e,f,r,x,y",
aj:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.z])
return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eN))return!1
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
z=[P.z]
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
av:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
aj:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.z])
return z},
d3:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.p.$2(a2,0))return V.b9()
a3=1/a2
a4=-w
a5=-i
return V.aE((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
D:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
return V.aE(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
dg:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.Q(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
bA:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.am(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.av))return!1
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
eV:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.z]
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
P:function(){return this.eV("",3,0)},
F:function(a){return this.eV(a,3,0)},
p:{
b9:function(){var z=$.eP
if(z==null){z=V.aE(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eP=z}return z},
aE:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eO:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.E(0,Math.sqrt(c.J(c)))
y=b.bn(z)
x=y.E(0,Math.sqrt(y.J(y)))
w=z.bn(x)
v=new V.Q(a.a,a.b,a.c)
u=x.V(0).J(v)
t=w.V(0).J(v)
s=z.V(0).J(v)
return V.aE(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
ab:{"^":"a;a,b",
N:function(a,b){return new V.ab(this.a-b.a,this.b-b.b)},
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
aN:function(){var z=$.eY
if(z==null){z=new V.ab(0,0)
$.eY=z}return z}}},
am:{"^":"a;a,b,c",
N:function(a,b){return new V.am(this.a-b.a,this.b-b.b,this.c-b.c)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.am))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"},
p:{
eZ:function(){var z=$.bF
if(z==null){z=new V.am(0,0,0)
$.bF=z}return z}}},
bG:{"^":"a;a,b,c,d",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bG))return!1
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
gah:function(){var z,y
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
f2:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f1(a,b,c,d)}}},
U:{"^":"a;a,b",
k_:[function(a){return Math.sqrt(this.J(this))},"$0","gm",1,0,18],
J:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.D()
if(typeof y!=="number")return H.B(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.D()
if(typeof w!=="number")return H.B(w)
return z*y+x*w},
D:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.D()
y=this.b
if(typeof y!=="number")return y.D()
return new V.U(z*b,y*b)},
E:function(a,b){var z,y
if($.p.$2(b,0)){z=$.fD
if(z==null){z=new V.U(0,0)
$.fD=z}return z}z=this.a
if(typeof z!=="number")return z.E()
y=this.b
if(typeof y!=="number")return y.E()
return new V.U(z/b,y/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
Q:{"^":"a;a,b,c",
k_:[function(a){return Math.sqrt(this.J(this))},"$0","gm",1,0,18],
J:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
d4:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.Q(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
bn:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.Q(z*y-x*w,x*v-u*y,u*w-z*v)},
I:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
V:function(a){return new V.Q(-this.a,-this.b,-this.c)},
E:function(a,b){if($.p.$2(b,0))return V.c9()
return new V.Q(this.a/b,this.b/b,this.c/b)},
f3:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
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
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"},
p:{
c9:function(){var z=$.fG
if(z==null){z=new V.Q(0,0,0)
$.fG=z}return z},
fH:function(){var z=$.fF
if(z==null){z=new V.Q(0,1,0)
$.fF=z}return z},
l_:function(){var z=$.cF
if(z==null){z=new V.Q(0,0,1)
$.cF=z}return z}}}}],["","",,U,{"^":"",hY:{"^":"eg;0a,0b,0c,0d,0e,0f,0r,0x,0y",
ck:function(a){var z=V.np(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
X:function(a){var z=this.y
if(!(z==null))z.H(a)},
sdj:function(a,b){},
sd5:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.ck(z)}z=new D.G("maximumLocation",y,this.b,this,[P.z])
z.b=!0
this.X(z)}},
sd7:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.ck(z)}z=new D.G("minimumLocation",y,this.c,this,[P.z])
z.b=!0
this.X(z)}},
sag:function(a,b){var z,y
b=this.ck(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.G("location",y,b,this,[P.z])
z.b=!0
this.X(z)}},
sd6:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.G("maximumVelocity",y,a,this,[P.z])
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
z=new D.G("velocity",x,a,this,[P.z])
z.b=!0
this.X(z)}},
scR:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.G("dampening",y,a,this,[P.z])
z.b=!0
this.X(z)}},
ax:function(a){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sag(0,this.d+y*a)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sZ(y)}},
p:{
d5:function(){var z=new U.hY()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ei:{"^":"af;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
b7:function(a,b){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ei))return!1
return J.a0(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")},
p:{
ej:function(a){var z=new U.ei()
z.a=a
return z}}},ex:{"^":"V;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
X:[function(a){var z
H.d(a,"$isw")
z=this.e
if(!(z==null))z.H(a)},function(){return this.X(null)},"aq","$1","$0","gaS",0,2,1],
kP:[function(a,b){var z,y,x,w,v,u,t,s
z=U.af
H.k(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gaS(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.l(x,w)
if(s.a==null)s.sal(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c3(a,b,this,[z])
z.b=!0
this.X(z)},"$2","ghN",8,0,16],
l8:[function(a,b){var z,y,x
z=U.af
H.k(b,"$isn",[z],"$asn")
for(y=b.gT(b),x=this.gaS();y.B();)y.gK().gt().Y(0,x)
z=new D.c4(a,b,this,[z])
z.b=!0
this.X(z)},"$2","gi7",8,0,16],
b7:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.U()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.as(z,z.length,0,[H.r(z,0)]),x=null;z.B();){y=z.d
if(y!=null){w=y.b7(a,b)
if(w!=null)x=x==null?w:w.D(0,x)}}this.f=x==null?V.b9():x
z=this.e
if(!(z==null))z.aO()}return this.f},
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
if(!J.a0(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asn:function(){return[U.af]},
$asV:function(){return[U.af]},
$isaf:1},af:{"^":"eg;"},kP:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.cy
if(z==null){z=D.F()
this.cy=z}return z},
X:[function(a){var z
H.d(a,"$isw")
z=this.cy
if(!(z==null))z.H(a)},function(){return this.X(null)},"aq","$1","$0","gaS",0,2,1],
bk:function(a){if(this.a!=null)return!1
this.a=a
a.c.gew().h(0,this.gct())
this.a.c.gf5().h(0,this.gcu())
this.a.c.gc9().h(0,this.gcv())
return!0},
hJ:[function(a){H.d(a,"$isw")
if(!J.a0(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gct",4,0,2],
hK:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isw"),"$isbE")
if(!this.y)return
if(this.x){z=a.d.N(0,a.y)
z=new V.U(z.a,z.b)
z=z.J(z)
y=this.r
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.N(0,a.y)
z=new V.U(y.a,y.b).D(0,2).E(0,z.gah())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.D()
x=this.e
if(typeof x!=="number")return H.B(x)
y.sZ(z*10*x)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=new V.U(x.a,x.b).D(0,2).E(0,z.gah())
x=this.b
v=w.a
if(typeof v!=="number")return v.V()
u=this.e
if(typeof u!=="number")return H.B(u)
t=this.z
if(typeof t!=="number")return H.B(t)
x.sag(0,-v*u+t)
this.b.sZ(0)
y=y.N(0,a.z)
this.Q=new V.U(y.a,y.b).D(0,2).E(0,z.gah())}this.aq()},"$1","gcu",4,0,2],
hL:[function(a){var z,y,x
H.d(a,"$isw")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.J(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.D()
x=this.e
if(typeof x!=="number")return H.B(x)
z.sZ(y*10*x)
this.aq()}},"$1","gcv",4,0,2],
b7:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.U()
if(z<y){this.ch=y
x=a.y
this.b.ax(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aE(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isaf:1},kQ:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.F()
this.fx=z}return z},
X:[function(a){var z
H.d(a,"$isw")
z=this.fx
if(!(z==null))z.H(a)},function(){return this.X(null)},"aq","$1","$0","gaS",0,2,1],
bk:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gew().h(0,this.gct())
this.a.c.gf5().h(0,this.gcu())
this.a.c.gc9().h(0,this.gcv())
z=this.a.d
y=z.f
if(y==null){y=D.F()
z.f=y
z=y}else z=y
z.h(0,this.ghH())
z=this.a.d
y=z.d
if(y==null){y=D.F()
z.d=y
z=y}else z=y
z.h(0,this.ghI())
z=this.a.e
y=z.b
if(y==null){y=D.F()
z.b=y
z=y}else z=y
z.h(0,this.giM())
z=this.a.e
y=z.d
if(y==null){y=D.F()
z.d=y
z=y}else z=y
z.h(0,this.giL())
z=this.a.e
y=z.c
if(y==null){y=D.F()
z.c=y
z=y}else z=y
z.h(0,this.giK())
return!0},
az:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.V()
z=-z}if(this.r){if(typeof y!=="number")return y.V()
y=-y}return new V.U(z,y)},
hJ:[function(a){a=H.j(H.d(a,"$isw"),"$isbE")
if(!J.a0(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gct",4,0,2],
hK:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isw"),"$isbE")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.U(z.a,z.b)
z=z.J(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.az(new V.U(y.a,y.b).D(0,2).E(0,z.gah()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.V()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sZ(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.V()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sZ(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.az(new V.U(x.a,x.b).D(0,2).E(0,z.gah()))
x=this.c
v=w.a
if(typeof v!=="number")return v.V()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sag(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.V()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sag(0,-u*v+x)
this.b.sZ(0)
this.c.sZ(0)
y=y.N(0,a.z)
this.dx=this.az(new V.U(y.a,y.b).D(0,2).E(0,z.gah()))}this.aq()},"$1","gcu",4,0,2],
hL:[function(a){var z,y,x
H.d(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.J(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.V()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sZ(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.V()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sZ(-y*10*z)
this.aq()}},"$1","gcv",4,0,2],
kM:[function(a){if(H.j(H.d(a,"$isw"),"$iseJ").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ghH",4,0,2],
kN:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isw"),"$isbE")
if(!J.a0(this.d,a.x.b))return
z=a.c
y=a.d
x=y.N(0,a.y)
w=this.az(new V.U(x.a,x.b).D(0,2).E(0,z.gah()))
x=this.c
v=w.a
if(typeof v!=="number")return v.V()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sag(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.V()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sag(0,-u*v+x)
this.b.sZ(0)
this.c.sZ(0)
y=y.N(0,a.z)
this.dx=this.az(new V.U(y.a,y.b).D(0,2).E(0,z.gah()))
this.aq()},"$1","ghI",4,0,2],
li:[function(a){H.d(a,"$isw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","giM",4,0,2],
lh:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isw"),"$isfm")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.U(z.a,z.b)
z=z.J(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.az(new V.U(y.a,y.b).D(0,2).E(0,z.gah()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.V()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sZ(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.V()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sZ(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.az(new V.U(x.a,x.b).D(0,2).E(0,z.gah()))
x=this.c
v=w.a
if(typeof v!=="number")return v.V()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sag(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.V()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sag(0,-u*v+x)
this.b.sZ(0)
this.c.sZ(0)
y=y.N(0,a.z)
this.dx=this.az(new V.U(y.a,y.b).D(0,2).E(0,z.gah()))}this.aq()},"$1","giL",4,0,2],
lg:[function(a){var z,y,x
H.d(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.J(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.V()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sZ(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.V()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sZ(-y*10*z)
this.aq()}},"$1","giK",4,0,2],
b7:function(a,b){var z,y,x,w,v
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
z=V.aE(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.D(0,V.aE(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isaf:1},kR:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.F()
this.r=z}return z},
X:function(a){var z=this.r
if(!(z==null))z.H(a)},
bk:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.F()
z.e=y
z=y}else z=y
y=this.ghM()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.F()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
kO:[function(a){var z,y,x,w
H.d(a,"$isw")
if(!J.a0(this.b,this.a.b.c))return
H.j(a,"$isdj")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.D()
w=z+y*x
if(z!==w){this.d=w
z=new D.G("zoom",z,w,this,[P.z])
z.b=!0
this.X(z)}},"$1","ghM",4,0,2],
b7:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aE(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isaf:1}}],["","",,M,{"^":"",hZ:{"^":"V;0e,0f,0a,0b,0c,0d",
gt:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
a6:[function(a){var z
H.d(a,"$isw")
z=this.f
if(!(z==null))z.H(a)},function(){return this.a6(null)},"dD","$1","$0","ga2",0,2,1],
la:[function(a,b){var z,y,x,w,v,u,t,s
z=M.aI
H.k(b,"$isn",[z],"$asn")
for(y=b.length,x=this.ga2(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.l(x,w)
if(s.a==null)s.sal(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c3(a,b,this,[z])
z.b=!0
this.a6(z)},"$2","gi9",8,0,14],
lb:[function(a,b){var z,y,x
z=M.aI
H.k(b,"$isn",[z],"$asn")
for(y=b.gT(b),x=this.ga2();y.B();)y.gK().gt().Y(0,x)
z=new D.c4(a,b,this,[z])
z.b=!0
this.a6(z)},"$2","gia",8,0,14],
ai:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.as(z,z.length,0,[H.r(z,0)]);z.B();){y=z.d
if(!(y==null))y.ai(a)}this.e=!1},
$asn:function(){return[M.aI]},
$asV:function(){return[M.aI]},
$isaI:1},i3:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
a6:[function(a){var z
H.d(a,"$isw")
z=this.f
if(!(z==null))z.H(a)},function(){return this.a6(null)},"dD","$1","$0","ga2",0,2,1],
sbl:function(a){var z,y
if(a==null)a=new X.iD()
z=this.a
if(z!==a){if(z!=null)z.gt().Y(0,this.ga2())
y=this.a
this.a=a
a.gt().h(0,this.ga2())
z=new D.G("camera",y,this.a,this,[X.ci])
z.b=!0
this.a6(z)}},
sbv:function(a,b){var z,y
if(b==null)b=X.d7(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gt().Y(0,this.ga2())
y=this.b
this.b=b
b.gt().h(0,this.ga2())
z=new D.G("target",y,this.b,this,[X.dt])
z.b=!0
this.a6(z)}},
sbw:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gt().Y(0,this.ga2())
y=this.c
this.c=a
if(a!=null)a.gt().h(0,this.ga2())
z=new D.G("technique",y,this.c,this,[O.bI])
z.b=!0
this.a6(z)}},
ai:function(a){a.da(this.c)
this.b.a3(a)
this.a.a3(a)
this.d.ax(a)
this.d.ai(a)
this.a.aw(a)
this.b.toString
a.d9()},
$isaI:1},ik:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
shj:function(a,b){this.d=H.k(b,"$isV",[E.at],"$asV")},
a6:[function(a){var z
H.d(a,"$isw")
z=this.x
if(!(z==null))z.H(a)},function(){return this.a6(null)},"dD","$1","$0","ga2",0,2,1],
kU:[function(a,b){var z,y,x,w,v,u,t,s
z=E.at
H.k(b,"$isn",[z],"$asn")
for(y=b.length,x=this.ga2(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.gar()==null){s=new D.bz()
s.sal(null)
s.sbg(null)
s.c=null
s.d=0
t.sar(s)}s=t.gar()
s.toString
H.l(x,w)
if(s.a==null)s.sal(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c3(a,b,this,[z])
z.b=!0
this.a6(z)},"$2","ghS",8,0,9],
kV:[function(a,b){var z,y,x
z=E.at
H.k(b,"$isn",[z],"$asn")
for(y=b.gT(b),x=this.ga2();y.B();)y.gK().gt().Y(0,x)
z=new D.c4(a,b,this,[z])
z.b=!0
this.a6(z)},"$2","ghT",8,0,9],
sbl:function(a){var z,y
if(a==null)a=X.eV(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gt().Y(0,this.ga2())
y=this.a
this.a=a
a.gt().h(0,this.ga2())
z=new D.G("camera",y,this.a,this,[X.ci])
z.b=!0
this.a6(z)}},
sbv:function(a,b){var z,y
if(b==null)b=X.d7(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gt().Y(0,this.ga2())
y=this.b
this.b=b
b.gt().h(0,this.ga2())
z=new D.G("target",y,this.b,this,[X.dt])
z.b=!0
this.a6(z)}},
sbw:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gt().Y(0,this.ga2())
y=this.c
this.c=a
if(a!=null)a.gt().h(0,this.ga2())
z=new D.G("technique",y,this.c,this,[O.bI])
z.b=!0
this.a6(z)}},
gt:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
ai:function(a){var z
a.da(this.c)
this.b.a3(a)
this.a.a3(a)
z=this.c
if(z!=null)z.ax(a)
for(z=this.d.a,z=new J.as(z,z.length,0,[H.r(z,0)]);z.B();)z.d.ax(a)
for(z=this.d.a,z=new J.as(z,z.length,0,[H.r(z,0)]);z.B();)z.d.ai(a)
this.a.toString
a.cy.aM()
a.db.aM()
this.b.toString
a.d9()},
$isaI:1},aI:{"^":"a;"}}],["","",,A,{"^":"",e8:{"^":"a;a,b,c"},hO:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
jL:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
C.b.ey(w.a,w.c)}},
eu:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
C.b.ev(w.a,w.c)}}},eM:{"^":"cx;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aB,0au,0bR,0ez,0bS,0bT,0eA,0eB,0bU,0bV,0eC,0eD,0bW,0bX,0eE,0eF,0bY,0eG,0eH,0bZ,0eI,0eJ,0c_,0c0,0c1,0eK,0eL,0c2,0c3,0eM,0eN,0c4,0eO,0cU,0eP,0cV,0eQ,0cW,0eR,0cX,0eS,0cY,0eT,0cZ,a,b,0c,0d,0e,0f,0r,0x,0y",
she:function(a){this.r1=H.k(a,"$isb",[A.ay],"$asb")},
sh_:function(a){this.cU=H.k(a,"$isb",[A.dA],"$asb")},
sh0:function(a){this.cV=H.k(a,"$isb",[A.dC],"$asb")},
sh1:function(a){this.cW=H.k(a,"$isb",[A.dD],"$asb")},
sh2:function(a){this.cX=H.k(a,"$isb",[A.dE],"$asb")},
sh3:function(a){this.cY=H.k(a,"$isb",[A.dF],"$asb")},
sh4:function(a){this.cZ=H.k(a,"$isb",[A.dG],"$asb")},
fP:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.ag("")
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
a1.iU(z)
a1.j0(z)
a1.iV(z)
a1.j8(z)
a1.j9(z)
a1.j2(z)
a1.jd(z)
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
z=new P.ag("")
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
v.iY(z)
v.iT(z)
v.iW(z)
v.iZ(z)
v.j6(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.j4(z)
v.j5(z)}v.j1(z)
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
v.iX(z)
v.j3(z)
v.j7(z)
v.ja(z)
v.jb(z)
v.jc(z)
v.j_(z)}r=z.a+="// === Main ===\n"
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
this.f2(x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a1.fr)this.id=H.j(this.y.n(0,"invViewMat"),"$isay")
if(y)this.dy=H.j(this.y.n(0,"objMat"),"$isay")
if(w)this.fr=H.j(this.y.n(0,"viewObjMat"),"$isay")
this.fy=H.j(this.y.n(0,"projViewObjMat"),"$isay")
if(a1.x2)this.k1=H.j(this.y.n(0,"txt2DMat"),"$isdB")
if(a1.y1)this.k2=H.j(this.y.n(0,"txtCubeMat"),"$isay")
if(a1.y2)this.k3=H.j(this.y.n(0,"colorMat"),"$isay")
this.she(H.c([],[A.ay]))
y=a1.aB
if(y>0){this.k4=H.d(this.y.n(0,"bendMatCount"),"$isL")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.k(0,v)
if(l==null)H.q(P.t("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(l,"$isay"))}}y=a1.a
if(y!==C.d){this.r2=H.j(this.y.n(0,"emissionClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.rx=H.j(this.y.n(0,"emissionTxt"),"$isan")
this.x1=H.j(this.y.n(0,"nullEmissionTxt"),"$isL")
break
case C.f:this.ry=H.j(this.y.n(0,"emissionTxt"),"$isah")
this.x1=H.j(this.y.n(0,"nullEmissionTxt"),"$isL")
break}}y=a1.b
if(y!==C.d){this.x2=H.j(this.y.n(0,"ambientClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.y1=H.j(this.y.n(0,"ambientTxt"),"$isan")
this.aB=H.j(this.y.n(0,"nullAmbientTxt"),"$isL")
break
case C.f:this.y2=H.j(this.y.n(0,"ambientTxt"),"$isah")
this.aB=H.j(this.y.n(0,"nullAmbientTxt"),"$isL")
break}}y=a1.c
if(y!==C.d){this.au=H.j(this.y.n(0,"diffuseClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.bR=H.j(this.y.n(0,"diffuseTxt"),"$isan")
this.bS=H.j(this.y.n(0,"nullDiffuseTxt"),"$isL")
break
case C.f:this.ez=H.j(this.y.n(0,"diffuseTxt"),"$isah")
this.bS=H.j(this.y.n(0,"nullDiffuseTxt"),"$isL")
break}}y=a1.d
if(y!==C.d){this.bT=H.j(this.y.n(0,"invDiffuseClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.eA=H.j(this.y.n(0,"invDiffuseTxt"),"$isan")
this.bU=H.j(this.y.n(0,"nullInvDiffuseTxt"),"$isL")
break
case C.f:this.eB=H.j(this.y.n(0,"invDiffuseTxt"),"$isah")
this.bU=H.j(this.y.n(0,"nullInvDiffuseTxt"),"$isL")
break}}y=a1.e
if(y!==C.d){this.bX=H.j(this.y.n(0,"shininess"),"$isW")
this.bV=H.j(this.y.n(0,"specularClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.eC=H.j(this.y.n(0,"specularTxt"),"$isan")
this.bW=H.j(this.y.n(0,"nullSpecularTxt"),"$isL")
break
case C.f:this.eD=H.j(this.y.n(0,"specularTxt"),"$isah")
this.bW=H.j(this.y.n(0,"nullSpecularTxt"),"$isL")
break}}switch(a1.f){case C.d:break
case C.i:break
case C.e:this.eE=H.j(this.y.n(0,"bumpTxt"),"$isan")
this.bY=H.j(this.y.n(0,"nullBumpTxt"),"$isL")
break
case C.f:this.eF=H.j(this.y.n(0,"bumpTxt"),"$isah")
this.bY=H.j(this.y.n(0,"nullBumpTxt"),"$isL")
break}if(a1.dy){this.eG=H.j(this.y.n(0,"envSampler"),"$isah")
this.eH=H.j(this.y.n(0,"nullEnvTxt"),"$isL")
y=a1.r
if(y!==C.d){this.bZ=H.j(this.y.n(0,"reflectClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.eI=H.j(this.y.n(0,"reflectTxt"),"$isan")
this.c_=H.j(this.y.n(0,"nullReflectTxt"),"$isL")
break
case C.f:this.eJ=H.j(this.y.n(0,"reflectTxt"),"$isah")
this.c_=H.j(this.y.n(0,"nullReflectTxt"),"$isL")
break}}y=a1.x
if(y!==C.d){this.c0=H.j(this.y.n(0,"refraction"),"$isW")
this.c1=H.j(this.y.n(0,"refractClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.eK=H.j(this.y.n(0,"refractTxt"),"$isan")
this.c2=H.j(this.y.n(0,"nullRefractTxt"),"$isL")
break
case C.f:this.eL=H.j(this.y.n(0,"refractTxt"),"$isah")
this.c2=H.j(this.y.n(0,"nullRefractTxt"),"$isL")
break}}}y=a1.y
if(y!==C.d){this.c3=H.j(this.y.n(0,"alpha"),"$isW")
switch(y){case C.d:break
case C.i:break
case C.e:this.eM=H.j(this.y.n(0,"alphaTxt"),"$isan")
this.c4=H.j(this.y.n(0,"nullAlphaTxt"),"$isL")
break
case C.f:this.eN=H.j(this.y.n(0,"alphaTxt"),"$isah")
this.c4=H.j(this.y.n(0,"nullAlphaTxt"),"$isL")
break}}this.sh_(H.c([],[A.dA]))
this.sh0(H.c([],[A.dC]))
this.sh1(H.c([],[A.dD]))
this.sh2(H.c([],[A.dE]))
this.sh3(H.c([],[A.dF]))
this.sh4(H.c([],[A.dG]))
if(a1.k2){y=a1.z
if(y>0){this.eO=H.d(this.y.n(0,"dirLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.k(0,w)
if(l==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isI")
x=this.y
w="dirLights["+m+"].color"
k=x.k(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isI")
x=this.cU;(x&&C.a).h(x,new A.dA(m,l,k))}}y=a1.Q
if(y>0){this.eP=H.d(this.y.n(0,"pntLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isI")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isI")
x=this.y
w="pntLights["+m+"].color"
j=x.k(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isI")
x=this.y
w="pntLights["+m+"].att0"
i=x.k(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isW")
x=this.y
w="pntLights["+m+"].att1"
h=x.k(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isW")
x=this.y
w="pntLights["+m+"].att2"
g=x.k(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isW")
x=this.cV;(x&&C.a).h(x,new A.dC(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.eQ=H.d(this.y.n(0,"spotLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isI")
x=this.y
w="spotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isI")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.k(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isI")
x=this.y
w="spotLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isI")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.k(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isW")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.k(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isW")
x=this.y
w="spotLights["+m+"].att0"
f=x.k(0,w)
if(f==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isW")
x=this.y
w="spotLights["+m+"].att1"
e=x.k(0,w)
if(e==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isW")
x=this.y
w="spotLights["+m+"].att2"
d=x.k(0,w)
if(d==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isW")
x=this.cW;(x&&C.a).h(x,new A.dD(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.eR=H.d(this.y.n(0,"txtDirLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.k(0,w)
if(l==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isI")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.k(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isI")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.k(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isI")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.k(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isI")
x=this.y
w="txtDirLights["+m+"].color"
h=x.k(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isI")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isL")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.k(0,w)
if(f==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isan")
x=this.cX;(x&&C.a).h(x,new A.dE(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.eS=H.d(this.y.n(0,"txtPntLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isI")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isI")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.k(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isdB")
x=this.y
w="txtPntLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isI")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.k(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.k(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isW")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.k(0,w)
if(f==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isW")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.k(0,w)
if(e==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isW")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.k(0,w)
if(d==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isah")
x=this.cY;(x&&C.a).h(x,new A.dF(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.eT=H.d(this.y.n(0,"txtSpotLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isI")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isI")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.k(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isI")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.k(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isI")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.k(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isI")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isL")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.k(0,w)
if(f==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isI")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.k(0,w)
if(e==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isW")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.k(0,w)
if(d==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isW")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.k(0,w)
if(c==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isW")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.k(0,w)
if(b==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isW")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.k(0,w)
if(a==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isW")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.k(0,w)
if(a0==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isan")
x=this.cZ;(x&&C.a).h(x,new A.dG(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
as:function(a,b,c){if(c==null||!c.d)C.b.M(b.a,b.d,1)
else{a.fF(c)
C.b.M(b.a,b.d,0)}},
am:function(a,b,c){if(c==null||c.d<6)C.b.M(b.a,b.d,1)
else{a.dt(c)
C.b.M(b.a,b.d,0)}},
p:{
j6:function(a,b){var z,y
z=a.au
y=new A.eM(b,z)
y.dA(b,z)
y.fP(a,b)
return y}}},j9:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aB,au,bR",
iU:function(a){var z,y,x
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
j0:function(a){var z
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
iV:function(a){var z
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
j8:function(a){var z,y
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
j9:function(a){var z,y
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
j2:function(a){var z
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
jd:function(a){var z
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
iY:function(a){var z,y
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
iT:function(a){var z,y
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
iW:function(a){var z,y
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
iZ:function(a){var z,y
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
j6:function(a){var z,y
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
j1:function(a){var z,y
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
j4:function(a){var z,y
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
j5:function(a){var z,y
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
iX:function(a){var z,y
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
j3:function(a){var z,y
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
j7:function(a){var z,y
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
ja:function(a){var z,y,x
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
jb:function(a){var z,y,x
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
jc:function(a){var z,y,x
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
j_:function(a){var z
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
i:function(a){return this.au}},dA:{"^":"a;a,b,c"},dE:{"^":"a;a,b,c,d,e,f,r,x"},dC:{"^":"a;a,b,c,d,e,f,r"},dF:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dD:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dG:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cx:{"^":"cY;",
dA:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
f2:function(a,b){var z,y,x
this.c=a
this.d=b
this.e=this.dP(a,35633)
this.f=this.dP(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
C.b.em(z,y,this.e)
C.b.em(z,this.r,this.f)
C.b.k0(z,this.r)
if(!H.dV(C.b.ce(z,this.r,35714))){x=C.b.ft(z,this.r)
C.b.jD(z,this.r)
H.q(P.t("Failed to link shader: "+H.i(x)))}this.iy()
this.iA()},
a3:function(a){C.b.dh(a.a,this.r)
this.x.jL()},
dP:function(a,b){var z,y,x
z=this.a
y=C.b.jB(z,b)
C.b.fG(z,y,a)
C.b.ju(z,y)
if(!H.dV(C.b.fw(z,y,35713))){x=C.b.fv(z,y)
C.b.jE(z,y)
throw H.e(P.t("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
iy:function(){var z,y,x,w,v,u
z=H.c([],[A.e8])
y=this.a
x=H.a4(C.b.ce(y,this.r,35721))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.fn(y,this.r,w)
u=C.b.fp(y,this.r,v.name)
C.a.h(z,new A.e8(y,v.name,u))}this.x=new A.hO(z)},
iA:function(){var z,y,x,w,v,u
z=H.c([],[A.ad])
y=this.a
x=H.a4(C.b.ce(y,this.r,35718))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.fo(y,this.r,w)
u=C.b.fz(y,this.r,v.name)
C.a.h(z,this.jC(v.type,v.size,v.name,u))}this.y=new A.kA(z)},
aU:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.L(z,y,b,c)
else return A.dz(z,y,b,a,c)},
hm:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.an(z,y,b,c)
else return A.dz(z,y,b,a,c)},
hn:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ah(z,y,b,c)
else return A.dz(z,y,b,a,c)},
bL:function(a,b){return new P.fQ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
jC:function(a,b,c,d){switch(a){case 5120:return this.aU(b,c,d)
case 5121:return this.aU(b,c,d)
case 5122:return this.aU(b,c,d)
case 5123:return this.aU(b,c,d)
case 5124:return this.aU(b,c,d)
case 5125:return this.aU(b,c,d)
case 5126:return new A.W(this.a,this.r,c,d)
case 35664:return new A.kv(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.ky(this.a,this.r,c,d)
case 35667:return new A.kw(this.a,this.r,c,d)
case 35668:return new A.kx(this.a,this.r,c,d)
case 35669:return new A.kz(this.a,this.r,c,d)
case 35674:return new A.kC(this.a,this.r,c,d)
case 35675:return new A.dB(this.a,this.r,c,d)
case 35676:return new A.ay(this.a,this.r,c,d)
case 35678:return this.hm(b,c,d)
case 35680:return this.hn(b,c,d)
case 35670:throw H.e(this.bL("BOOL",c))
case 35671:throw H.e(this.bL("BOOL_VEC2",c))
case 35672:throw H.e(this.bL("BOOL_VEC3",c))
case 35673:throw H.e(this.bL("BOOL_VEC4",c))
default:throw H.e(P.t("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},cj:{"^":"a;a,b",
i:function(a){return this.b}},f7:{"^":"cx;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},ad:{"^":"a;"},kA:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.k(0,b)
if(z==null)throw H.e(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.P()},
jS:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w)x+=z[w].i(0)+a
return x},
P:function(){return this.jS("\n")}},L:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},kw:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},kx:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},kz:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},ku:{"^":"ad;0e,0f,a,b,c,d",
siR:function(a){this.e=H.k(a,"$isb",[P.m],"$asb")},
i:function(a){return"Uniform1iv: "+H.i(this.c)},
p:{
dz:function(a,b,c,d,e){var z=new A.ku(a,b,c,e)
z.f=d
z.siR(P.iX(d,0,!1,P.m))
return z}}},W:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},kv:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},I:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},ky:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},kC:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},dB:{"^":"ad;a,b,c,d",
ap:function(a){var z=new Float32Array(H.bk(H.k(a,"$isb",[P.z],"$asb")))
C.b.fh(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},ay:{"^":"ad;a,b,c,d",
ap:function(a){var z=new Float32Array(H.bk(H.k(a,"$isb",[P.z],"$asb")))
C.b.fi(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},an:{"^":"ad;a,b,c,d",
fF:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)C.b.M(y,x,0)
else C.b.M(y,x,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},ah:{"^":"ad;a,b,c,d",
dt:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)C.b.M(y,x,0)
else C.b.M(y,x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
cL:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bP:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.Q(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.Q(t+h,s+f,r+g)
z.b=q
p=new V.Q(t-h,s-f,r-g)
z.c=p
o=new V.Q(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cL(y)
k=F.cL(z.b)
j=F.nm(d,e,new F.mr(z,F.cL(z.c),F.cL(z.d),k,l,c),b)
if(j!=null)a.k9(j)},
nm:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.aK,P.z,P.z]})
if(a<1)return
if(b<1)return
z=F.dn()
y=H.c([],[F.aK])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cG(null,null,new V.aY(u,0,0,1),null,null,new V.ab(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cQ(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cG(null,null,new V.aY(o,n,m,1),null,null,new V.ab(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cQ(d))}}z.d.jg(a+1,b+1,y)
return z},
mr:{"^":"o:45;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.d4(z.b,b).d4(z.d.d4(z.c,b),c)
z=new V.am(y.a,y.b,y.c)
if(!J.a0(a.f,z)){a.f=z
z=a.a
if(z!=null)z.aa()}a.skA(y.E(0,Math.sqrt(y.J(y))))
z=1-b
x=1-c
x=new V.bG(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.a0(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.aa()}}},
aa:{"^":"a;0a,0b,0c,0d,0e",
hd:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.c9()
if(y!=null)v=v.I(0,y)
if(x!=null)v=v.I(0,x)
if(w!=null)v=v.I(0,w)
if(v.f3())return
return v.E(0,Math.sqrt(v.J(v)))},
hi:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.N(0,y)
z=new V.Q(z.a,z.b,z.c)
v=z.E(0,Math.sqrt(z.J(z)))
z=w.N(0,y)
z=new V.Q(z.a,z.b,z.c)
z=v.bn(z.E(0,Math.sqrt(z.J(z))))
return z.E(0,Math.sqrt(z.J(z)))},
cN:function(){if(this.d!=null)return!0
var z=this.hd()
if(z==null){z=this.hi()
if(z==null)return!1}this.d=z
this.a.a.aa()
return!0},
hc:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.c9()
if(y!=null)v=v.I(0,y)
if(x!=null)v=v.I(0,x)
if(w!=null)v=v.I(0,w)
if(v.f3())return
return v.E(0,Math.sqrt(v.J(v)))},
hh:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.p.$2(n,0)){z=r.N(0,u)
z=new V.Q(z.a,z.b,z.c)
m=z.E(0,Math.sqrt(z.J(z)))
if(o.a-p.a<0)m=m.V(0)}else{l=(z-q.b)/n
z=r.N(0,u)
z=new V.am(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).N(0,x)
z=new V.Q(z.a,z.b,z.c)
m=z.E(0,Math.sqrt(z.J(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.V(0)}z=this.d
if(z!=null){k=z.E(0,Math.sqrt(z.J(z)))
z=k.bn(m)
z=z.E(0,Math.sqrt(z.J(z))).bn(k)
m=z.E(0,Math.sqrt(z.J(z)))}return m},
cL:function(){if(this.e!=null)return!0
var z=this.hc()
if(z==null){z=this.hh()
if(z==null)return!1}this.e=z
this.a.a.aa()
return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var z,y
z=this.a
if(z==null||this.b==null||this.c==null)return a+"disposed"
y=a+C.c.ao(J.ae(z.e),0)+", "+C.c.ao(J.ae(this.b.e),0)+", "+C.c.ao(J.ae(this.c.e),0)+" {"
z=this.d
y=z!=null?y+(z.i(0)+", "):y+"-, "
z=this.e
return z!=null?y+(z.i(0)+"}"):y+"-}"},
P:function(){return this.F("")},
p:{
bA:function(a,b,c){var z,y,x
z=new F.aa()
y=a.a
if(y==null)H.q(P.t("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.t("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.aa()
return z}}},
bD:{"^":"a;0a,0b",
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var z=this.a
if(z==null||this.b==null)return a+"disposed"
return a+C.c.ao(J.ae(z.e),0)+", "+C.c.ao(J.ae(this.b.e),0)},
P:function(){return this.F("")},
p:{
iQ:function(a,b){var z,y,x
z=new F.bD()
y=a.a
if(y==null)H.q(P.t("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.q(P.t("May not create a line with vertices attached to different shapes."))
z.a=a
C.a.h(a.c.b,z)
z.b=b
C.a.h(b.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.aa()
return z}}},
c7:{"^":"a;0a",
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.c.ao(J.ae(z.e),0)},
P:function(){return this.F("")}},
f6:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
k9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.a7()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){v=z[w]
this.a.h(0,v.jw())}this.a.a7()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.a7()
s=s.e
if(typeof s!=="number")return s.I()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.c7()
if(r.a==null)H.q(P.t("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.H(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.a7()
s=s.e
if(typeof s!=="number")return s.I()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.a7()
t=t.e
if(typeof t!=="number")return t.I()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.iQ(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.a7()
s=s.e
if(typeof s!=="number")return s.I()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.a7()
t=t.e
if(typeof t!=="number")return t.I()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.a7()
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
if(!(z==null))z.aO()},
aJ:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aJ()||!1
if(!this.a.aJ())y=!1
z=this.e
if(!(z==null))z.aO()
return y},
ep:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$az()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$aU().a)!==0)++w
if((x&$.$get$bJ().a)!==0)++w
if((x&$.$get$bK().a)!==0)++w
if((x&$.$get$bi().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
v=b.gdu(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.z
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.ed])
for(r=0,q=0;q<w;++q){p=b.jk(q)
o=p.gdu(p)
C.a.q(s,q,new Z.ed(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].k5(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.q(t,l,m[k]);++l}}r+=o}H.k(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.aA(y,34962,j)
C.b.eo(y,34962,new Float32Array(H.bk(t)),35044)
C.b.aA(y,34962,null)
i=new Z.d0(new Z.fL(34962,j),s,b)
i.shB(H.c([],[Z.c2]))
if(this.b.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.a7()
C.a.h(h,g.e)}f=Z.dK(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.c2(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.a7()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.a7()
C.a.h(h,g.e)}f=Z.dK(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.c2(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.a7()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.a7()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.a7()
C.a.h(h,g.e)}f=Z.dK(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.c2(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.F("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.F("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.F("   "))}return C.a.l(z,"\n")},
b5:function(a){var z=this.e
if(!(z==null))z.H(a)},
aa:function(){return this.b5(null)},
$isnH:1,
p:{
dn:function(){var z,y
z=new F.f6()
y=new F.l0(z)
y.b=!1
y.siS(H.c([],[F.aK]))
z.a=y
y=new F.jX(z)
y.scA(H.c([],[F.c7]))
z.b=y
y=new F.jW(z)
y.shD(H.c([],[F.bD]))
z.c=y
y=new F.jV(z)
y.shs(H.c([],[F.aa]))
z.d=y
z.e=null
return z}}},
jV:{"^":"a;a,0b",
shs:function(a){this.b=H.k(a,"$isb",[F.aa],"$asb")},
jf:function(a){var z,y,x,w,v,u
H.k(a,"$isb",[F.aK],"$asb")
z=H.c([],[F.aa])
y=a[0]
for(x=this.a,w=2;w<4;++w){v=a[w-1]
u=a[w]
x.a.h(0,y)
x.a.h(0,v)
x.a.h(0,u)
C.a.h(z,F.bA(y,v,u))}return z},
jg:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,"$isb",[F.aK],"$asb")
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
gm:function(a){return this.b.length},
aJ:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].cN())x=!1
return x},
cM:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].cL())x=!1
return x},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].F(a))
return C.a.l(z,"\n")},
P:function(){return this.F("")}},
jW:{"^":"a;a,0b",
shD:function(a){this.b=H.k(a,"$isb",[F.bD],"$asb")},
gm:function(a){return this.b.length},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].F(a+(""+x+". ")))}return C.a.l(z,"\n")},
P:function(){return this.F("")}},
jX:{"^":"a;a,0b",
scA:function(a){this.b=H.k(a,"$isb",[F.c7],"$asb")},
gm:function(a){return this.b.length},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].F(a))
return C.a.l(z,"\n")},
P:function(){return this.F("")}},
aK:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cQ:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cG(this.cx,x,u,z,y,w,v,a,t)},
jw:function(){return this.cQ(null)},
skA:function(a){var z
if(!J.a0(this.z,a)){this.z=a
z=this.a
if(z!=null)z.aa()}},
k5:function(a){var z,y
if(a.A(0,$.$get$az())){z=this.f
y=[P.z]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$aS())){z=this.r
y=[P.z]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$aR())){z=this.x
y=[P.z]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$aT())){z=this.y
y=[P.z]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.A(0,$.$get$aU())){z=this.z
y=[P.z]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$bJ())){z=this.Q
y=[P.z]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$bK())){z=this.Q
y=[P.z]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.A(0,$.$get$bi()))return H.c([this.ch],[P.z])
else if(a.A(0,$.$get$aQ())){z=this.cx
y=[P.z]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.z])},
cN:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.c9()
this.d.S(0,new F.l7(z))
z=z.a
this.r=z.E(0,Math.sqrt(z.J(z)))
z=this.a
if(z!=null){z.aa()
z=this.a.e
if(!(z==null))z.aO()}return!0},
cL:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.c9()
this.d.S(0,new F.l6(z))
z=z.a
this.x=z.E(0,Math.sqrt(z.J(z)))
z=this.a
if(z!=null){z.aa()
z=this.a.e
if(!(z==null))z.aO()}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.c.ao(J.ae(this.e),0))
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
P:function(){return this.F("")},
p:{
cG:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aK()
y=new F.l5(z)
y.scA(H.c([],[F.c7]))
z.b=y
y=new F.l4(z)
x=[F.bD]
y.shE(H.c([],x))
y.shF(H.c([],x))
z.c=y
y=new F.l1(z)
x=[F.aa]
y.sht(H.c([],x))
y.shu(H.c([],x))
y.shv(H.c([],x))
z.d=y
h=$.$get$fI()
z.e=0
y=$.$get$az()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aS().a)!==0?e:null
z.x=(x&$.$get$aR().a)!==0?b:null
z.y=(x&$.$get$aT().a)!==0?f:null
z.z=(x&$.$get$aU().a)!==0?g:null
z.Q=(x&$.$get$fJ().a)!==0?c:null
z.ch=(x&$.$get$bi().a)!==0?i:0
z.cx=(x&$.$get$aQ().a)!==0?a:null
return z}}},
l7:{"^":"o:5;a",
$1:function(a){var z,y
H.d(a,"$isaa")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.I(0,z)}}},
l6:{"^":"o:5;a",
$1:function(a){var z,y
H.d(a,"$isaa")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.I(0,z)}}},
l0:{"^":"a;a,0b,0c",
siS:function(a){this.c=H.k(a,"$isb",[F.aK],"$asb")},
a7:function(){},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.e(P.t("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.aa()
return!0},
jh:function(a,b,c,d,e,f,g,h,i){var z=F.cG(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bN:function(a,b,c,d,e,f){return this.jh(a,null,b,c,null,d,e,f,0)},
gm:function(a){return this.c.length},
aJ:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].cN()
return!0},
cM:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].cL()
return!0},
jp:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.E(0,Math.sqrt(u*u+t*t+s*s))
if(!J.a0(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.H(null)}}}}return!0},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
this.a7()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].F(a))
return C.a.l(z,"\n")},
P:function(){return this.F("")}},
l1:{"^":"a;a,0b,0c,0d",
sht:function(a){this.b=H.k(a,"$isb",[F.aa],"$asb")},
shu:function(a){this.c=H.k(a,"$isb",[F.aa],"$asb")},
shv:function(a){this.d=H.k(a,"$isb",[F.aa],"$asb")},
gm:function(a){return this.b.length+this.c.length+this.d.length},
S:function(a,b){H.l(b,{func:1,ret:-1,args:[F.aa]})
C.a.S(this.b,b)
C.a.S(this.c,new F.l2(this,b))
C.a.S(this.d,new F.l3(this,b))},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].F(a))
return C.a.l(z,"\n")},
P:function(){return this.F("")}},
l2:{"^":"o:5;a,b",
$1:function(a){H.d(a,"$isaa")
if(!J.a0(a.a,this.a))this.b.$1(a)}},
l3:{"^":"o:5;a,b",
$1:function(a){var z
H.d(a,"$isaa")
z=this.a
if(!J.a0(a.a,z)&&!J.a0(a.b,z))this.b.$1(a)}},
l4:{"^":"a;a,0b,0c",
shE:function(a){this.b=H.k(a,"$isb",[F.bD],"$asb")},
shF:function(a){this.c=H.k(a,"$isb",[F.bD],"$asb")},
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].F(a))
return C.a.l(z,"\n")},
P:function(){return this.F("")}},
l5:{"^":"a;a,0b",
scA:function(a){this.b=H.k(a,"$isb",[F.c7],"$asb")},
gm:function(a){return this.b.length},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].F(a))
return C.a.l(z,"\n")},
P:function(){return this.F("")}}}],["","",,O,{"^":"",j5:{"^":"bI;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
shf:function(a){this.e=H.k(a,"$isV",[V.av],"$asV")},
gt:function(){var z=this.dy
if(z==null){z=D.F()
this.dy=z}return z},
W:[function(a){var z
H.d(a,"$isw")
z=this.dy
if(!(z==null))z.H(a)},function(){return this.W(null)},"e1","$1","$0","gaW",0,2,1],
is:[function(a){H.d(a,"$isw")
this.a=null
this.W(a)},function(){return this.is(null)},"lf","$1","$0","gir",0,2,1],
kR:[function(a,b){var z=V.av
z=new D.c3(a,H.k(b,"$isn",[z],"$asn"),this,[z])
z.b=!0
this.W(z)},"$2","ghP",8,0,13],
kS:[function(a,b){var z=V.av
z=new D.c4(a,H.k(b,"$isn",[z],"$asn"),this,[z])
z.b=!0
this.W(z)},"$2","ghQ",8,0,13],
dM:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.a9(z.e.length+3,4)*4
x=C.h.a9(z.f.length+3,4)*4
w=C.h.a9(z.r.length+3,4)*4
v=C.h.a9(z.x.length+3,4)*4
u=C.h.a9(z.y.length+3,4)*4
t=C.h.a9(z.z.length+3,4)*4
s=C.h.a9(this.e.a.length+3,4)*4
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
a2=$.$get$az()
if(e){g=$.$get$aS()
a2=new Z.bh(a2.a|g.a)}if(d){g=$.$get$aR()
a2=new Z.bh(a2.a|g.a)}if(c){g=$.$get$aT()
a2=new Z.bh(a2.a|g.a)}if(b){g=$.$get$aU()
a2=new Z.bh(a2.a|g.a)}if(a0){g=$.$get$aQ()
a2=new Z.bh(a2.a|g.a)}return new A.j9(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
a1:function(a,b){H.k(a,"$isb",[T.cz],"$asb")
if(b!=null)if(!C.a.a_(a,b)){b.sbp(0,a.length)
C.a.h(a,b)}},
ax:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.as(z,z.length,0,[H.r(z,0)]);z.B();){y=z.d
y.toString
x=$.cF
if(x==null){x=new V.Q(0,0,1)
$.cF=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.dg(x)}}},
fb:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dM()
y=H.d(a.fr.k(0,z.au),"$iseM")
if(y==null){y=A.j6(z,a.a)
a.ek(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bR
z=b.e
if(!(z instanceof Z.d0)){b.e=null
z=null}if(z==null||!z.d.A(0,w)){z=x.r1
if(z)b.d.aJ()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cM()
u.a.cM()
u=u.e
if(!(u==null))u.aO()}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.jp()
t=t.e
if(!(t==null))t.aO()}r=b.d.ep(new Z.fM(a.a),w)
r.aL($.$get$az()).e=this.a.Q.c
if(z)r.aL($.$get$aS()).e=this.a.cx.c
if(v)r.aL($.$get$aR()).e=this.a.ch.c
if(x.rx)r.aL($.$get$aT()).e=this.a.cy.c
if(u)r.aL($.$get$aU()).e=this.a.db.c
if(x.x1)r.aL($.$get$aQ()).e=this.a.dx.c
b.e=r}z=T.cz
q=H.c([],[z])
this.a.a3(a)
if(x.fx){v=this.a
u=a.dx.ga5()
v=v.dy
v.toString
v.ap(u.aj(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db.ga5().D(0,a.dx.ga5())
a.cx=u}v=v.fr
v.toString
v.ap(u.aj(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gko().D(0,a.dx.ga5())
a.ch=u}v=v.fy
v.toString
v.ap(u.aj(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.ap(C.t.aj(u,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.ap(C.t.aj(u,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.ap(C.t.aj(u,!0))}if(x.aB>0){p=this.e.a.length
v=this.a.k4
C.b.M(v.a,v.d,p)
for(v=[P.z],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.f(t,o)
t=t[o]
u.toString
H.d(t,"$isav")
u=u.r1
if(o>=u.length)return H.f(u,o)
u=u[o]
n=new Float32Array(H.bk(H.k(t.aj(0,!0),"$isb",v,"$asb")))
C.b.fi(u.a,u.d,!1,n)}}switch(x.a){case C.d:break
case C.i:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
C.b.w(v.a,v.d,t,s,u)
break
case C.e:this.a1(q,this.f.d)
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
C.b.w(u.a,u.d,t,s,v)
break
case C.f:this.a1(q,this.f.e)
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
case C.e:this.a1(q,this.r.d)
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
C.b.w(u.a,u.d,t,s,v)
break
case C.f:this.a1(q,this.r.e)
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
C.b.w(u.a,u.d,t,s,v)
break}switch(x.c){case C.d:break
case C.i:v=this.a
u=this.x.f
v=v.au
v.toString
t=u.a
s=u.b
u=u.c
C.b.w(v.a,v.d,t,s,u)
break
case C.e:this.a1(q,this.x.d)
v=this.a
u=this.x.d
v.as(v.bR,v.bS,u)
u=this.a
v=this.x.f
u=u.au
u.toString
t=v.a
s=v.b
v=v.c
C.b.w(u.a,u.d,t,s,v)
break
case C.f:this.a1(q,this.x.e)
v=this.a
u=this.x.e
v.am(v.ez,v.bS,u)
u=this.a
v=this.x.f
u=u.au
u.toString
t=v.a
s=v.b
v=v.c
C.b.w(u.a,u.d,t,s,v)
break}switch(x.d){case C.d:break
case C.i:v=this.a
u=this.y.f
v=v.bT
v.toString
t=u.a
s=u.b
u=u.c
C.b.w(v.a,v.d,t,s,u)
break
case C.e:this.a1(q,this.y.d)
v=this.a
u=this.y.d
v.as(v.eA,v.bU,u)
u=this.a
v=this.y.f
u=u.bT
u.toString
t=v.a
s=v.b
v=v.c
C.b.w(u.a,u.d,t,s,v)
break
case C.f:this.a1(q,this.y.e)
v=this.a
u=this.y.e
v.am(v.eB,v.bU,u)
u=this.a
v=this.y.f
u=u.bT
u.toString
t=v.a
s=v.b
v=v.c
C.b.w(u.a,u.d,t,s,v)
break}switch(x.e){case C.d:break
case C.i:v=this.a
u=this.z.f
v=v.bV
v.toString
t=u.a
s=u.b
u=u.c
C.b.w(v.a,v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bX
C.b.L(u.a,u.d,s)
break
case C.e:this.a1(q,this.z.d)
v=this.a
u=this.z.d
v.as(v.eC,v.bW,u)
u=this.a
v=this.z.f
u=u.bV
u.toString
t=v.a
s=v.b
v=v.c
C.b.w(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bX
C.b.L(v.a,v.d,s)
break
case C.f:this.a1(q,this.z.e)
v=this.a
u=this.z.e
v.am(v.eD,v.bW,u)
u=this.a
v=this.z.f
u=u.bV
u.toString
t=v.a
s=v.b
v=v.c
C.b.w(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bX
C.b.L(v.a,v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.eO
C.b.M(v.a,v.d,p)
m=a.db.ga5()
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.cU
if(l>=t.length)return H.f(t,l)
i=t[l]
t=m.dg(j.a)
s=t.a
h=t.b
g=t.c
g=t.E(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
s=g.a
t=g.b
g=g.c
C.b.w(h.a,h.d,s,t,g)
g=j.c
t=i.c
C.b.w(t.a,t.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.eP
C.b.M(v.a,v.d,p)
m=a.db.ga5()
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.cV
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbs(j)
s=i.b
h=t.gdk(t)
g=t.gdl(t)
t=t.gdm(t)
C.b.w(s.a,s.d,h,g,t)
t=m.bA(j.gbs(j))
g=i.c
C.b.w(g.a,g.d,t.a,t.b,t.c)
t=j.gv(j)
g=i.d
h=t.gc8()
s=t.gbC()
t=t.gbO()
C.b.w(g.a,g.d,h,s,t)
t=j.gcG()
s=i.e
C.b.L(s.a,s.d,t)
t=j.gcH()
s=i.f
C.b.L(s.a,s.d,t)
t=j.gcI()
s=i.r
C.b.L(s.a,s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.eQ
C.b.M(v.a,v.d,p)
m=a.db.ga5()
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.cW
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbs(j)
s=i.b
h=t.gdk(t)
g=t.gdl(t)
t=t.gdm(t)
C.b.w(s.a,s.d,h,g,t)
t=j.gcS(j).ln()
g=i.c
h=t.gb0(t)
s=t.gb1(t)
t=t.gb2()
C.b.w(g.a,g.d,h,s,t)
t=m.bA(j.gbs(j))
s=i.d
C.b.w(s.a,s.d,t.a,t.b,t.c)
t=j.gv(j)
s=i.e
h=t.gc8()
g=t.gbC()
t=t.gbO()
C.b.w(s.a,s.d,h,g,t)
t=j.gll()
g=i.f
C.b.L(g.a,g.d,t)
t=j.glj()
g=i.r
C.b.L(g.a,g.d,t)
t=j.gcG()
g=i.x
C.b.L(g.a,g.d,t)
t=j.gcH()
g=i.y
C.b.L(g.a,g.d,t)
t=j.gcI()
g=i.z
C.b.L(g.a,g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.eR
C.b.M(v.a,v.d,p)
m=a.db.ga5()
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
s=this.a.cX
if(l>=s.length)return H.f(s,l)
i=s[l]
s=j.gbx()
H.k(q,"$isb",t,"$asb")
if(!C.a.a_(q,s)){s.sbp(0,q.length)
C.a.h(q,s)}s=j.gcS(j)
h=i.d
g=s.gb0(s)
f=s.gb1(s)
s=s.gb2()
C.b.w(h.a,h.d,g,f,s)
s=j.gc9()
f=i.b
g=s.gb0(s)
h=s.gb1(s)
s=s.gb2()
C.b.w(f.a,f.d,g,h,s)
s=j.gbu(j)
h=i.c
g=s.gb0(s)
f=s.gb1(s)
s=s.gb2()
C.b.w(h.a,h.d,g,f,s)
s=m.dg(j.gcS(j))
f=s.a
g=s.b
h=s.c
h=s.E(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
f=h.a
s=h.b
h=h.c
C.b.w(g.a,g.d,f,s,h)
h=j.gv(j)
s=i.f
f=h.gc8()
g=h.gbC()
h=h.gbO()
C.b.w(s.a,s.d,f,g,h)
h=j.gbx()
s=h.gf4(h)
if(!s){s=i.x
C.b.M(s.a,s.d,1)}else{s=i.r
g=h.gdZ()
f=s.a
s=s.d
if(!g)C.b.M(f,s,0)
else C.b.M(f,s,h.gdV())
s=i.x
C.b.M(s.a,s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.eS
C.b.M(v.a,v.d,p)
m=a.db.ga5()
for(v=this.dx.y,u=v.length,t=[P.z],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
h=this.a.cY
if(l>=h.length)return H.f(h,l)
i=h[l]
h=j.gbx()
H.k(q,"$isb",s,"$asb")
if(!C.a.a_(q,h)){h.sbp(0,q.length)
C.a.h(q,h)}e=m.D(0,j.ga5())
h=j.ga5()
g=$.bF
if(g==null){g=new V.am(0,0,0)
$.bF=g}g=h.bA(g)
h=i.b
f=g.gdk(g)
d=g.gdl(g)
g=g.gdm(g)
C.b.w(h.a,h.d,f,d,g)
h=$.bF
if(h==null){h=new V.am(0,0,0)
$.bF=h}h=e.bA(h)
g=i.c
C.b.w(g.a,g.d,h.a,h.b,h.c)
h=e.d3()
g=i.d
n=new Float32Array(H.bk(H.k(new V.eN(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).aj(0,!0),"$isb",t,"$asb")))
C.b.fh(g.a,g.d,!1,n)
g=j.gv(j)
h=i.e
f=g.gc8()
d=g.gbC()
g=g.gbO()
C.b.w(h.a,h.d,f,d,g)
g=j.gbx()
h=g.gf4(g)
if(!h){h=i.r
C.b.M(h.a,h.d,1)}else{h=i.f
f=g.gdZ()
d=h.a
h=h.d
if(!(f>=6))C.b.M(d,h,0)
else C.b.M(d,h,g.gdV())
h=i.r
C.b.M(h.a,h.d,0)}h=j.gcG()
g=i.x
C.b.L(g.a,g.d,h)
h=j.gcH()
g=i.y
C.b.L(g.a,g.d,h)
h=j.gcI()
g=i.z
C.b.L(g.a,g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.eT
C.b.M(v.a,v.d,p)
m=a.db.ga5()
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.cZ
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbx()
H.k(q,"$isb",z,"$asb")
if(!C.a.a_(q,t)){t.sbp(0,q.length)
C.a.h(q,t)}t=j.gbs(j)
s=i.b
h=t.gdk(t)
g=t.gdl(t)
t=t.gdm(t)
C.b.w(s.a,s.d,h,g,t)
t=j.gcS(j)
g=i.c
h=t.gb0(t)
s=t.gb1(t)
t=t.gb2()
C.b.w(g.a,g.d,h,s,t)
t=j.gc9()
s=i.d
h=t.gb0(t)
g=t.gb1(t)
t=t.gb2()
C.b.w(s.a,s.d,h,g,t)
t=j.gbu(j)
g=i.e
h=t.gb0(t)
s=t.gb1(t)
t=t.gb2()
C.b.w(g.a,g.d,h,s,t)
t=m.bA(j.gbs(j))
s=i.f
C.b.w(s.a,s.d,t.a,t.b,t.c)
t=j.gbx()
s=t.gf4(t)
if(!s){t=i.x
C.b.M(t.a,t.d,1)}else{s=i.r
h=t.gdZ()
g=s.a
s=s.d
if(!h)C.b.M(g,s,0)
else C.b.M(g,s,t.gdV())
t=i.x
C.b.M(t.a,t.d,0)}t=j.gv(j)
s=i.y
h=t.gc8()
g=t.gbC()
t=t.gbO()
C.b.w(s.a,s.d,h,g,t)
t=j.gls()
g=i.z
C.b.L(g.a,g.d,t)
t=j.glt()
g=i.Q
C.b.L(g.a,g.d,t)
t=j.gcG()
g=i.ch
C.b.L(g.a,g.d,t)
t=j.gcH()
g=i.cx
C.b.L(g.a,g.d,t)
t=j.gcI()
g=i.cy
C.b.L(g.a,g.d,t);++l}}}switch(x.f){case C.d:break
case C.i:break
case C.e:this.a1(q,this.Q.d)
z=this.a
v=this.Q.d
z.as(z.eE,z.bY,v)
break
case C.f:this.a1(q,this.Q.e)
z=this.a
v=this.Q.e
z.am(z.eF,z.bY,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db.ga5().d3()
a.Q=v}z=z.id
z.toString
z.ap(v.aj(0,!0))}if(x.dy){this.a1(q,this.ch)
z=this.a
v=this.ch
z.am(z.eG,z.eH,v)
switch(x.r){case C.d:break
case C.i:z=this.a
v=this.cx.f
z=z.bZ
z.toString
u=v.a
t=v.b
v=v.c
C.b.w(z.a,z.d,u,t,v)
break
case C.e:this.a1(q,this.cx.d)
z=this.a
v=this.cx.d
z.as(z.eI,z.c_,v)
v=this.a
z=this.cx.f
v=v.bZ
v.toString
u=z.a
t=z.b
z=z.c
C.b.w(v.a,v.d,u,t,z)
break
case C.f:this.a1(q,this.cx.e)
z=this.a
v=this.cx.e
z.am(z.eJ,z.c_,v)
v=this.a
z=this.cx.f
v=v.bZ
v.toString
u=z.a
t=z.b
z=z.c
C.b.w(v.a,v.d,u,t,z)
break}switch(x.x){case C.d:break
case C.i:z=this.a
v=this.cy.f
z=z.c1
z.toString
u=v.a
t=v.b
v=v.c
C.b.w(z.a,z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.c0
C.b.L(v.a,v.d,t)
break
case C.e:this.a1(q,this.cy.d)
z=this.a
v=this.cy.d
z.as(z.eK,z.c2,v)
v=this.a
z=this.cy.f
v=v.c1
v.toString
u=z.a
t=z.b
z=z.c
C.b.w(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.c0
C.b.L(z.a,z.d,t)
break
case C.f:this.a1(q,this.cy.e)
z=this.a
v=this.cy.e
z.am(z.eL,z.c2,v)
v=this.a
z=this.cy.f
v=v.c1
v.toString
u=z.a
t=z.b
z=z.c
C.b.w(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.c0
C.b.L(z.a,z.d,t)
break}}z=x.y
v=z!==C.d
if(v){switch(z){case C.d:break
case C.i:z=this.a
u=this.db.f
z=z.c3
C.b.L(z.a,z.d,u)
break
case C.e:this.a1(q,this.db.d)
z=this.a
u=this.db.d
z.as(z.eM,z.c4,u)
u=this.a
z=this.db.f
u=u.c3
C.b.L(u.a,u.d,z)
break
case C.f:this.a1(q,this.db.e)
z=this.a
u=this.db.e
z.am(z.eN,z.c4,u)
u=this.a
z=this.db.f
u=u.c3
C.b.L(u.a,u.d,z)
break}z=a.a
C.b.cT(z,3042)
C.b.jo(z,770,771)}for(o=0;o<q.length;++o)q[o].a3(a)
z=b.e
z.a3(a)
z.ai(a)
z.aw(a)
if(v)C.b.jI(a.a,3042)
for(o=0;o<q.length;++o)q[o].aw(a)
z=this.a
z.toString
C.b.dh(a.a,null)
z.x.eu()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dM().au}},j7:{"^":"dh;0f,a,b,0c,0d,0e",
ix:function(a){var z,y
z=this.f
if(!$.p.$2(z,a)){y=this.f
this.f=a
z=new D.G(this.b,y,a,this,[P.z])
z.b=!0
this.a.W(z)}},
be:function(){this.dw()
this.ix(1)}},dh:{"^":"a;",
W:[function(a){this.a.W(H.d(a,"$isw"))},function(){return this.W(null)},"e1","$1","$0","gaW",0,2,1],
be:["dw",function(){}],
bf:["fM",function(){}],
ea:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gt().Y(0,this.gaW())
y=this.d
this.d=a
if(a!=null)a.gt().h(0,this.gaW())
z=new D.G(this.b+".texture2D",y,this.d,this,[T.fe])
z.b=!0
this.a.W(z)}},
eb:function(a){},
jq:function(a){var z
if(this.c!==C.d){this.c=C.d
z=this.a
z.a=null
z.W(null)}this.be()
this.ea(null)
this.eb(null)
this.a.W(null)}},j8:{"^":"dh;a,b,0c,0d,0e"},b8:{"^":"dh;0f,a,b,0c,0d,0e",
cD:function(a){var z,y
if(!J.a0(this.f,a)){z=this.f
this.f=a
y=new D.G(this.b+".color",z,a,this,[V.x])
y.b=!0
this.a.W(y)}},
be:["dz",function(){this.dw()
this.cD(new V.x(0,0,0))}],
bf:["bE",function(){this.fM()
this.cD(new V.x(1,1,1))}],
sv:function(a,b){var z
if(this.c===C.d){this.c=C.i
this.bf()
z=this.a
z.a=null
z.W(null)}this.cD(b)}},ja:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
bJ:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".refraction",y,a,this,[P.z])
z.b=!0
this.a.W(z)}},
be:function(){this.dz()
this.bJ(1)},
bf:function(){this.bE()
this.bJ(1)},
saK:function(a){var z
if(a<=0)this.jq(0)
else if(this.c===C.d){this.c=C.i
this.bE()
this.bJ(1)
z=this.a
z.a=null
z.W(null)}this.bJ(a)}},jb:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
bK:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".shininess",y,a,this,[P.z])
z.b=!0
this.a.W(z)}},
be:function(){this.dz()
this.bK(100)},
bf:function(){this.bE()
this.bK(100)}},k2:{"^":"bI;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
W:[function(a){var z
H.d(a,"$isw")
z=this.e
if(!(z==null))z.H(a)},function(){return this.W(null)},"e1","$1","$0","gaW",0,2,1],
fb:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.d(a.fr.k(0,"Skybox"),"$isf7")
if(z==null){y=a.a
z=new A.f7(y,"Skybox")
z.dA(y,"Skybox")
z.f2($.k4,$.k3)
z.z=z.x.k(0,"posAttr")
z.Q=H.j(z.y.k(0,"fov"),"$isW")
z.ch=H.j(z.y.k(0,"ratio"),"$isW")
z.cx=H.j(z.y.k(0,"boxClr"),"$isI")
z.cy=H.j(z.y.k(0,"boxTxt"),"$isah")
z.db=H.j(z.y.k(0,"viewMat"),"$isay")
a.ek(z)}this.a=z}if(b.e==null){y=b.d.ep(new Z.fM(a.a),$.$get$az())
y.aL($.$get$az()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.a3(a)}y=a.d
x=a.c
w=this.a
w.a3(a)
v=this.b
u=w.Q
C.b.L(u.a,u.d,v)
v=w.ch
C.b.L(v.a,v.d,y/x)
x=this.c
w.cy.dt(x)
x=this.d
y=w.cx
C.b.w(y.a,y.d,x.a,x.b,x.c)
x=a.db.ga5().d3()
w=w.db
w.toString
w.ap(x.aj(0,!0))
y=b.e
if(y instanceof Z.d0){y.a3(a)
y.ai(a)
y.aw(a)}else b.e=null
y=this.a
y.toString
C.b.dh(a.a,null)
y.x.eu()
y=this.c
if(y!=null)y.aw(a)}},bI:{"^":"a;"}}],["","",,T,{"^":"",cz:{"^":"cY;"},fe:{"^":"cz;"},kh:{"^":"fe;0a,0b,0c,0d,0e,0f,0r,0x,0y",
sbp:function(a,b){this.a=b
return b},
gt:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
a3:function(a){var z
if(!this.c&&this.d){this.c=!0
z=a.a
C.b.bM(z,33984+this.a)
C.b.ad(z,3553,this.b)}},
aw:function(a){var z
if(this.c){this.c=!1
z=a.a
C.b.bM(z,33984+this.a)
C.b.ad(z,3553,null)}}},du:{"^":"cz;0a,0b,0c,0d,0e",
sbp:function(a,b){this.a=b
return b},
gt:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
a3:function(a){var z
if(!this.c&&this.d>=6){this.c=!0
z=a.a
C.b.bM(z,33984+this.a)
C.b.ad(z,34067,this.b)}},
aw:function(a){var z
if(this.c){this.c=!1
z=a.a
C.b.bM(z,33984+this.a)
C.b.ad(z,34067,null)}}},ki:{"^":"a;a,0b,0c,0d,0e",
k7:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
C.b.ad(z,3553,y)
C.b.aE(z,3553,10242,33071)
C.b.aE(z,3553,10243,33071)
C.b.aE(z,3553,10241,9729)
C.b.aE(z,3553,10240,9729)
C.b.ad(z,3553,null);++this.d
x=W.d9(null,a,null)
w=new T.kh()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.a6
W.Z(x,"load",H.l(new T.kk(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
k6:function(a){return this.k7(a,!1,!1,!1,!1)},
aV:function(a,b,c,d,e,f){var z,y
z=W.d9(null,c,null);++this.d
y=W.a6
W.Z(z,"load",H.l(new T.kj(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
e9:function(a,b,c){var z,y,x,w
b=V.e2(b,2)
z=V.e2(a.width,2)
y=V.e2(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d2(null,null)
x.width=z
x.height=y
w=H.d(C.q.fs(x,"2d"),"$isd3")
w.imageSmoothingEnabled=!1;(w&&C.D).jK(w,a,0,0,x.width,x.height)
return P.mM(C.D.hz(w,0,0,x.width,x.height))}}},kk:{"^":"o:7;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.e9(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
C.b.ad(y,3553,this.e)
C.b.fa(y,37440,this.f?1:0)
C.b.fd(y,3553,0,6408,6408,5121,w)
if(this.r)C.b.fm(y,3553)
C.b.ad(y,3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.ex()}++x.e}},kj:{"^":"o:7;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.e9(this.b,z.c,this.c)
x=z.a
C.b.ad(x,34067,this.d)
C.b.fa(x,37440,this.e?1:0)
C.b.fd(x,this.f,0,6408,6408,5121,y)
C.b.ad(x,34067,null)
x=this.r
if(++x.d>=6){x=x.e
if(!(x==null))x.ex()}++z.e}}}],["","",,V,{"^":"",bv:{"^":"a;",
b4:function(a){return!0},
i:function(a){return"all"},
$isaD:1},aD:{"^":"a;"},eL:{"^":"a;0a",
sab:function(a){this.a=H.k(a,"$isb",[V.aD],"$asb")},
b4:["fL",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)if(z[x].b4(a))return!0
return!1}],
i:["dv",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaD:1},aw:{"^":"eL;0a",
b4:function(a){return!this.fL(a)},
i:function(a){return"!["+this.dv(0)+"]"}},jF:{"^":"a;0a,0b",
b4:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.bd(this.a)
y=H.bd(this.b)
return z+".."+y},
$isaD:1,
p:{
R:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.e(P.t("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.c.G(a,0)
y=C.c.G(b,0)
x=new V.jF()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jS:{"^":"a;0a",
siw:function(a){this.a=H.k(a,"$isJ",[P.m,P.M],"$asJ")},
fR:function(a){var z,y
if(a.a.length<=0)throw H.e(P.t("May not create a SetMatcher with zero characters."))
z=new H.b1(0,0,[P.m,P.M])
for(y=new H.df(a,a.gm(a),0,[H.a3(a,"T",0)]);y.B();)z.q(0,y.d,!0)
this.siw(z)},
b4:function(a){return this.a.bP(a)},
i:function(a){return P.c8(this.a.gaC(),0,null)},
$isaD:1,
p:{
v:function(a){var z=new V.jS()
z.fR(a)
return z}}},dp:{"^":"a;a,b,0c,0d",
siN:function(a){this.c=H.k(a,"$isb",[V.dx],"$asb")},
l:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dx(this.a.j(0,b))
w.sab(H.c([],[V.aD]))
w.c=!1
C.a.h(this.c,w)
return w},
jO:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.b4(a))return w}return},
i:function(a){return this.b}},fl:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.e4(this.b,"\n","\\n")
y=H.e4(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},dw:{"^":"a;a,b,0c",
sio:function(a){var z=P.h
this.c=H.k(a,"$isJ",[z,z],"$asJ")},
aN:function(a,b,c){var z,y,x
H.k(c,"$isb",[P.h],"$asb")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.A)(c),++y){x=c[y]
this.c.q(0,x,b)}},
i:function(a){return this.b}},kp:{"^":"a;0a,0b,0c",
siE:function(a){this.a=H.k(a,"$isJ",[P.h,V.dp],"$asJ")},
siJ:function(a){this.b=H.k(a,"$isJ",[P.h,V.dw],"$asJ")},
j:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.dp(this,b)
z.siN(H.c([],[V.dx]))
z.d=null
this.a.q(0,b,z)}return z},
R:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.dw(this,a)
y=P.h
z.sio(new H.b1(0,0,[y,y]))
this.b.q(0,a,z)}return z},
fg:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fl])
y=this.c
x=[P.m]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.G(a,t)
r=y.jO(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c8(w,0,null)
throw H.e(P.t("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c8(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.fl(o==null?p.b:o,q,t)}++t}}},
p:{
cA:function(){var z,y
z=new V.kp()
y=P.h
z.siE(new H.b1(0,0,[y,V.dp]))
z.siJ(new H.b1(0,0,[y,V.dw]))
z.c=null
return z}}},dx:{"^":"eL;b,0c,0a",
i:function(a){return this.b.b+": "+this.dv(0)}}}],["","",,X,{"^":"",ci:{"^":"a;",$isaG:1},iu:{"^":"dt;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
seq:function(a,b){var z,y
if(this.b){this.b=!1
z=new D.G("clearColor",!0,!1,this,[P.M])
z.b=!0
y=this.x
if(!(y==null))y.H(z)}},
a3:function(a){var z,y,x,w,v,u,t,s
z=a.a
C.b.jn(z,36160,null)
C.b.cT(z,2884)
C.b.cT(z,2929)
C.b.jH(z,513)
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
C.b.kI(z,u,t,v,w)
C.b.jt(z,this.c)
if(this.b){w=this.a
C.b.js(z,w.a,w.b,w.c,w.d)
s=16640}else s=256
C.b.jr(z,s)},
p:{
d7:function(a,b,c,d,e,f,g){var z,y
z=new X.iu()
y=new V.aY(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=$.f3
if(y==null){y=V.f2(0,0,1,1)
$.f3=y}z.r=y
return z}}},iD:{"^":"a;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
a3:function(a){var z
a.cy.c7(V.b9())
z=V.b9()
a.db.c7(z)},
aw:function(a){a.cy.aM()
a.db.aM()},
$isaG:1,
$isci:1},jm:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
ba:[function(a){var z
H.d(a,"$isw")
z=this.f
if(!(z==null))z.H(a)},function(){return this.ba(null)},"kL","$1","$0","gh8",0,2,1],
a3:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aE(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.c7(s)
z=$.eW
if(z==null){z=V.eZ()
y=V.fH()
x=$.fE
if(x==null){x=new V.Q(0,0,-1)
$.fE=x}x=V.eO(z,y,x)
$.eW=x
r=x}else r=z
z=this.b
if(z!=null){q=z.b7(a,this)
if(q!=null)r=q.D(0,r)}a.db.c7(r)},
aw:function(a){a.cy.aM()
a.db.aM()},
$isaG:1,
$isci:1,
p:{
eV:function(a,b,c,d,e){var z,y,x
z=new X.jm()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gt().h(0,z.gh8())
x=new D.G("mover",y,z.b,z,[U.af])
x.b=!0
z.ba(x)}x=z.c
if(!$.p.$2(x,b)){y=z.c
z.c=b
x=new D.G("fov",y,b,z,[P.z])
x.b=!0
z.ba(x)}x=z.d
if(!$.p.$2(x,d)){y=z.d
z.d=d
x=new D.G("near",y,d,z,[P.z])
x.b=!0
z.ba(x)}x=z.e
if(!$.p.$2(x,a)){y=z.e
z.e=a
x=new D.G("far",y,a,z,[P.z])
x.b=!0
z.ba(x)}return z}}},dt:{"^":"a;"}}],["","",,V,{"^":"",
nk:function(a){P.ko(C.W,new V.nl(a))},
aX:{"^":"a;0d",
scq:function(a){this.d=H.k(a,"$isb",[[P.b,W.b_]],"$asb")},
bF:function(a){this.b=new P.iB(C.Y)
this.c=null
this.scq(H.c([],[[P.b,W.b_]]))},
O:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.b_]))
y=a.split("\n")
for(z=y.length,x=[W.b_],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.D(u)
s=this.b.hl(u,0,u.length)
r=s==null?u:s
C.j.fD(t,H.e4(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaD(this.d),t)}},
f8:function(a){var z,y,x,w
H.k(a,"$isb",[P.h],"$asb")
this.scq(H.c([],[[P.b,W.b_]]))
z=C.a.l(a,"\n")
y=this.c
if(y==null){y=this.bQ()
this.c=y}for(y=y.fg(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)this.c6(y[w])}},
nl:{"^":"o:49;a",
$1:function(a){H.d(a,"$isbe")
P.e3(C.k.ff(this.a.gjT(),2)+" fps")}},
i6:{"^":"aX;a,0b,0c,0d",
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
bQ:function(){var z,y,x,w
z=V.cA()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.v(new H.u("_"))
C.a.h(y.a,x)
x=V.R("a","z")
C.a.h(y.a,x)
x=V.R("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.v(new H.u("_"))
C.a.h(x.a,y)
y=V.R("0","9")
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Int")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").l(0,"Int")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").l(0,"FloatDot")
x=V.v(new H.u("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").l(0,"Float")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").l(0,"Float")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Sym")
y=V.v(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").l(0,"Sym")
x=V.v(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"OpenDoubleStr")
y=V.v(new H.u('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
x=V.v(new H.u('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
y=V.v(new H.u("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
x=V.v(new H.u('"'))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.bv())
x=z.j(0,"Start").l(0,"OpenSingleStr")
y=V.v(new H.u("'"))
C.a.h(x.a,y)
y=z.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
x=V.v(new H.u("'"))
C.a.h(y.a,x)
x=z.j(0,"OpenSingleStr").l(0,"EscSingleStr")
y=V.v(new H.u("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscSingleStr").l(0,"OpenSingleStr")
x=V.v(new H.u("'"))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.bv())
x=z.j(0,"Start").l(0,"Slash")
y=V.v(new H.u("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"Comment")
x=V.v(new H.u("/"))
C.a.h(y.a,x)
x=z.j(0,"Comment").l(0,"EndComment")
y=V.v(new H.u("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").l(0,"Comment")
x=new V.aw()
w=[V.aD]
x.sab(H.c([],w))
C.a.h(y.a,x)
y=V.v(new H.u("\n"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"MLComment")
x=V.v(new H.u("*"))
C.a.h(y.a,x)
x=z.j(0,"MLComment").l(0,"MLCStar")
y=V.v(new H.u("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").l(0,"MLComment")
x=new V.aw()
x.sab(H.c([],w))
C.a.h(y.a,x)
y=V.v(new H.u("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").l(0,"EndComment")
x=V.v(new H.u("/"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Whitespace")
y=V.v(new H.u(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Whitespace").l(0,"Whitespace")
x=V.v(new H.u(" \n\t"))
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
y.aN(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aN(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aN(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iv:{"^":"aX;a,0b,0c,0d",
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
bQ:function(){var z,y,x,w
z=V.cA()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.v(new H.u("_"))
C.a.h(y.a,x)
x=V.R("a","z")
C.a.h(y.a,x)
x=V.R("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.v(new H.u("_"))
C.a.h(x.a,y)
y=V.R("0","9")
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Int")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").l(0,"Int")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").l(0,"FloatDot")
x=V.v(new H.u("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").l(0,"Float")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").l(0,"Float")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Sym")
y=V.v(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").l(0,"Sym")
x=V.v(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Slash")
y=V.v(new H.u("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"Comment")
x=V.v(new H.u("/"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Slash").l(0,"Sym").a,new V.bv())
x=z.j(0,"Comment").l(0,"EndComment")
y=V.v(new H.u("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").l(0,"Comment")
x=new V.aw()
w=[V.aD]
x.sab(H.c([],w))
C.a.h(y.a,x)
y=V.v(new H.u("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Preprocess")
x=V.v(new H.u("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").l(0,"Preprocess")
y=new V.aw()
y.sab(H.c([],w))
C.a.h(x.a,y)
x=V.v(new H.u("\n"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").l(0,"EndPreprocess")
y=V.v(new H.u("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Whitespace")
x=V.v(new H.u(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Whitespace").l(0,"Whitespace")
y=V.v(new H.u(" \n\t"))
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
x.aN(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aN(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aN(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iw:{"^":"aX;a,0b,0c,0d",
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
bQ:function(){var z,y,x
z=V.cA()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.v(new H.u("_"))
C.a.h(y.a,x)
x=V.R("a","z")
C.a.h(y.a,x)
x=V.R("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.v(new H.u("_"))
C.a.h(x.a,y)
y=V.R("0","9")
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Id").l(0,"Attr")
x=V.v(new H.u("="))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Sym")
x=V.v(new H.u("</\\-!>="))
C.a.h(y.a,x)
x=z.j(0,"Sym").l(0,"Sym")
y=V.v(new H.u("</\\-!>="))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"OpenStr")
x=V.v(new H.u('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenStr").l(0,"CloseStr")
y=V.v(new H.u('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenStr").l(0,"EscStr")
x=V.v(new H.u("\\"))
C.a.h(y.a,x)
x=z.j(0,"EscStr").l(0,"OpenStr")
y=V.v(new H.u('"'))
C.a.h(x.a,y)
C.a.h(z.j(0,"OpenStr").l(0,"OpenStr").a,new V.bv())
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.bv())
y=z.j(0,"Other").l(0,"Other")
x=new V.aw()
x.sab(H.c([],[V.aD]))
C.a.h(y.a,x)
y=V.v(new H.u('</\\-!>=_"'))
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
x.aN(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.j(0,"Attr")
x.d=x.a.R("Attr")
x=z.j(0,"Other")
x.d=x.a.R("Other")
return z}},
jo:{"^":"aX;a,0b,0c,0d",
f8:function(a){H.k(a,"$isb",[P.h],"$asb")
this.scq(H.c([],[[P.b,W.b_]]))
this.O(C.a.l(a,"\n"),"#111")},
c6:function(a){},
bQ:function(){return}},
jC:{"^":"a;a,b,0c",
eh:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.cE().gbt().k(0,H.i(z))
if(y==null)if(d){c.$0()
this.bj(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.bu(this.c).h(0,v)
t=W.iF("radio")
t.checked=x
t.name=z
z=W.a6
W.Z(t,"change",H.l(new V.jD(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
C.H.C(v,t)
s=w.createElement("span")
s.textContent=b
C.H.C(v,s)
J.bu(this.c).h(0,w.createElement("br"))},
af:function(a,b,c){return this.eh(a,b,c,!1)},
bj:function(a){var z,y,x,w,v
z=P.cE()
y=P.h
x=P.eG(z.gbt(),y,y)
x.q(0,this.a,a)
w=z.dd(0,x)
y=window.history
v=w.i(0)
y.toString;(y&&C.E).e7(y,new P.h0([],[]).ca(""),"",v)}},
jD:{"^":"o:7;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.bj(this.d)}}},
jY:{"^":"a;0a,0b",
fS:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.p).C(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.p.C(y,w)
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
t=W.a6
W.Z(z,"scroll",H.l(new V.k0(x),{func:1,ret:-1,args:[t]}),!1,t)},
ej:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.k(a,"$isb",[P.h],"$asb")
this.iz()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.fg(C.a.jZ(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
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
if(H.hx(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=H.D(r[1])
q.textContent=H.D(r[0])
C.j.C(y,q)}else{p=P.cb(C.K,s,C.m,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.i(p)
q.textContent=s
C.j.C(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.j.C(y,t)
break}}C.j.C(this.a,y)},
fq:function(a){var z,y,x,w
z=new V.i6("dart")
z.bF("dart")
y=new V.iv("glsl")
y.bF("glsl")
x=new V.iw("html")
x.bF("html")
w=C.a.jP(H.c([z,y,x],[V.aX]),new V.k1(a))
if(w!=null)return w
z=new V.jo("plain")
z.bF("plain")
return z},
ei:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.k(a2,"$isb",[P.h],"$asb")
z=H.c([],[P.m])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.bU(w).a8(w,"+")){C.a.q(a2,x,C.c.ay(w,1))
C.a.h(z,1)
y=!0}else if(C.c.a8(w,"-")){C.a.q(a2,x,C.c.ay(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.fq(a0)
v.f8(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.j.C(t,s)
C.j.C(this.a,t)
r=P.cb(C.K,a,C.m,!1)
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
C.j.C(o,n)
C.y.C(p,o)
C.n.C(q,p)
C.o.C(s,q)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.A)(w),++e)C.y.C(f,w[e])
C.n.C(j,i)
C.n.C(j,h)
C.n.C(j,f)
C.o.C(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.A)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gT(w);b.B();)C.y.C(h,b.gK())
C.n.C(j,i)
C.n.C(j,h)
C.o.C(s,j)}},
je:function(a){var z,y,x,w,v,u,t
H.k(a,"$isb",[P.h],"$asb")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
C.j.C(this.a,y)
w=C.o.hC(y,-1)
x=H.d((w&&C.n).dW(w,-1),"$iscy").style
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
t=H.d(C.n.dW(w,-1),"$iscy")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.y).C(t,u)}},
iz:function(){var z,y,x,w
if(this.b!=null)return
z=V.cA()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Bold")
x=V.v(new H.u("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").l(0,"Bold")
x=new V.aw()
w=[V.aD]
x.sab(H.c([],w))
C.a.h(y.a,x)
y=V.v(new H.u("*"))
C.a.h(x.a,y)
y=z.j(0,"Bold").l(0,"BoldEnd")
x=V.v(new H.u("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Italic")
x=V.v(new H.u("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Italic").l(0,"Italic")
x=new V.aw()
x.sab(H.c([],w))
C.a.h(y.a,x)
y=V.v(new H.u("_"))
C.a.h(x.a,y)
y=z.j(0,"Italic").l(0,"ItalicEnd")
x=V.v(new H.u("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Code")
x=V.v(new H.u("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Code").l(0,"Code")
x=new V.aw()
x.sab(H.c([],w))
C.a.h(y.a,x)
y=V.v(new H.u("`"))
C.a.h(x.a,y)
y=z.j(0,"Code").l(0,"CodeEnd")
x=V.v(new H.u("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"LinkHead")
x=V.v(new H.u("["))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"LinkHead").l(0,"LinkTail")
x=V.v(new H.u("|"))
C.a.h(y.a,x)
x=z.j(0,"LinkHead").l(0,"LinkEnd")
y=V.v(new H.u("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkHead").l(0,"LinkHead")
y=new V.aw()
y.sab(H.c([],w))
C.a.h(x.a,y)
x=V.v(new H.u("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").l(0,"LinkEnd")
y=V.v(new H.u("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").l(0,"LinkTail")
y=new V.aw()
y.sab(H.c([],w))
C.a.h(x.a,y)
x=V.v(new H.u("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.bv())
x=z.j(0,"Other").l(0,"Other")
y=new V.aw()
y.sab(H.c([],w))
C.a.h(x.a,y)
x=V.v(new H.u("*_`["))
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
jZ:function(a,b){var z=new V.jY()
z.fS(a,!0)
return z}}},
k0:{"^":"o:7;a",
$1:function(a){P.fj(C.z,new V.k_(this.a))}},
k_:{"^":"o:0;a",
$0:function(){var z,y,x
z=C.k.av(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}},
k1:{"^":"o:50;a",
$1:function(a){return H.d(a,"$isaX").a===this.a}},
ke:{"^":"a;a,b,0c,d",
af:function(a,b,c){var z,y,x,w,v
z=W.d9(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=J.bu(this.c)
x=y.gm(y)
y=W.ac
W.Z(z,"click",H.l(new V.kg(this,z,b,x),{func:1,ret:-1,args:[y]}),!1,y)
J.bu(this.c).h(0,z)
J.bu(this.c).h(0,document.createElement("br"))
w=P.cE().gbt().k(0,H.i(this.a))
if(w==null){this.bj(x)
v=c}else v=P.bW(w,null,null)===x
if(v)z.click()},
h:function(a,b){return this.af(a,b,!1)},
bj:function(a){var z,y,x,w,v
z=P.cE()
y=P.h
x=P.eG(z.gbt(),y,y)
x.q(0,this.a,""+a)
w=z.dd(0,x)
y=window.history
v=w.i(0)
y.toString;(y&&C.E).e7(y,new P.h0([],[]).ca(""),"",v)}},
kg:{"^":"o:51;a,b,c,d",
$1:function(a){var z,y
H.d(a,"$isac")
z=this.a
y=J.bu(z.c)
y.S(y,new V.kf())
y=this.b.style
y.border="solid 2px black"
z.d.$1(this.c)
z.bj(this.d)}},
kf:{"^":"o:52;",
$1:function(a){var z
H.d(a,"$isK")
if(!!J.N(a).$isd8){z=a.style
z.border="solid 2px white"}}}}],["","",,B,{"^":"",
ht:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=V.jZ("Test 015",!0)
y=W.d2(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.j.C(z.a,y)
x=[P.h]
z.ej(H.c(["Test of Material Lighting shader with bump mapping, reflections, refractions."],x))
z.je(H.c(["bumpMaps","controls"],x))
z.ej(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=C.r.cd(x,"testCanvas")
if(w==null)H.q(P.t("Failed to find an element with the identifier, testCanvas."))
v=E.km(w,!0,!0,!0,!1)
u=X.d7(!0,!0,!1,null,2000,null,0)
u.seq(0,!1)
t=E.ev(null,!0,null,"",null,null)
s=F.dn()
F.bP(s,null,null,1,1,1,0,0,1)
F.bP(s,null,null,1,1,0,1,0,3)
F.bP(s,null,null,1,1,0,0,1,2)
F.bP(s,null,null,1,1,-1,0,0,0)
F.bP(s,null,null,1,1,0,-1,0,0)
F.bP(s,null,null,1,1,0,0,-1,3)
s.aJ()
t.scg(0,s)
r=v.f
q=r.a
p=q.createTexture()
C.b.ad(q,34067,p)
C.b.aE(q,34067,10242,10497)
C.b.aE(q,34067,10243,10497)
C.b.aE(q,34067,10241,9729)
C.b.aE(q,34067,10240,9729)
C.b.ad(q,34067,null)
o=new T.du()
o.a=0
o.b=p
o.c=!1
o.d=0
r.aV(o,p,"../resources/maskonaive/posx.jpg",34069,!1,!1)
r.aV(o,p,"../resources/maskonaive/negx.jpg",34070,!1,!1)
r.aV(o,p,"../resources/maskonaive/posy.jpg",34071,!1,!1)
r.aV(o,p,"../resources/maskonaive/negy.jpg",34072,!1,!1)
r.aV(o,p,"../resources/maskonaive/posz.jpg",34073,!1,!1)
r.aV(o,p,"../resources/maskonaive/negz.jpg",34074,!1,!1)
n=new O.j5()
n.shf(O.d4(V.av))
n.e.b9(n.ghP(),n.ghQ())
r=new O.b8(n,"emission")
r.c=C.d
r.f=new V.x(0,0,0)
n.f=r
r=new O.b8(n,"ambient")
r.c=C.d
r.f=new V.x(0,0,0)
n.r=r
r=new O.b8(n,"diffuse")
r.c=C.d
r.f=new V.x(0,0,0)
n.x=r
r=new O.b8(n,"invDiffuse")
r.c=C.d
r.f=new V.x(0,0,0)
n.y=r
r=new O.jb(n,"specular")
r.c=C.d
r.f=new V.x(0,0,0)
r.ch=100
n.z=r
r=new O.j8(n,"bump")
r.c=C.d
n.Q=r
n.ch=null
r=new O.b8(n,"reflect")
r.c=C.d
r.f=new V.x(0,0,0)
n.cx=r
r=new O.ja(n,"refract")
r.c=C.d
r.f=new V.x(0,0,0)
r.ch=1
n.cy=r
r=new O.j7(n,"alpha")
r.c=C.d
r.f=1
n.db=r
r=new D.iP()
r.bG(D.a7)
r.shp(H.c([],[D.ck]))
r.sig(H.c([],[D.eX]))
r.siD(H.c([],[D.f8]))
r.siO(H.c([],[D.ff]))
r.siP(H.c([],[D.fg]))
r.siQ(H.c([],[D.fh]))
r.Q=null
r.ch=null
r.ds(r.ghO(),r.gi6(),r.gi8())
n.dx=r
q=r.Q
if(q==null){q=D.F()
r.Q=q
r=q}else r=q
r.h(0,n.gir())
r=n.dx
q=r.ch
if(q==null){q=D.F()
r.ch=q
r=q}else r=q
q=n.gaW()
r.h(0,q)
n.dy=null
r=n.dx
m=V.fH()
l=U.ej(V.eO(V.eZ(),m,new V.Q(-1,-1,-1)))
k=new D.ck()
k.c=new V.x(1,1,1)
k.a=V.l_()
j=k.b
k.b=l
l.gt().h(0,k.gfZ())
l=new D.G("mover",j,k.b,k,[U.af])
l.b=!0
k.aR(l)
i=new V.x(1,1,1)
if(!k.c.A(0,i)){j=k.c
k.c=i
l=new D.G("color",j,i,k,[V.x])
l.b=!0
k.aR(l)}r.h(0,k)
r=n.r
r.sv(0,new V.x(0.1,0.1,0.1))
r=n.x
r.sv(0,new V.x(0.1,0.1,0.1))
n.z.sv(0,new V.x(0,0,0))
r=n.z
if(r.c===C.d){r.c=C.i
r.bE()
r.bK(100)
l=r.a
l.a=null
l.W(null)}r.bK(10)
r=n.ch
if(r!==o){if(r!=null)r.gt().Y(0,q)
j=n.ch
n.ch=o
o.gt().h(0,q)
r=new D.G("environment",j,n.ch,n,[T.du])
r.b=!0
n.W(r)}n.cy.saK(0.6)
r=n.cy
r.sv(0,new V.x(0.2,0.3,1))
r=n.cx
r.sv(0,new V.x(0.6,0.6,0.6))
h=new U.ex()
h.bG(U.af)
h.b9(h.ghN(),h.gi7())
h.e=null
h.f=V.b9()
h.r=0
r=v.r
q=new U.kQ()
l=U.d5()
l.sdj(0,!0)
l.sd5(6.283185307179586)
l.sd7(0)
l.sag(0,0)
l.sd6(100)
l.sZ(0)
l.scR(0.5)
q.b=l
k=q.gaS()
l.gt().h(0,k)
l=U.d5()
l.sdj(0,!0)
l.sd5(6.283185307179586)
l.sd7(0)
l.sag(0,0)
l.sd6(100)
l.sZ(0)
l.scR(0.5)
q.c=l
l.gt().h(0,k)
q.d=null
q.e=!1
q.f=!1
q.r=!1
q.x=2.5
q.y=2.5
q.z=2
q.Q=4
q.cx=!1
q.ch=!1
q.cy=0
q.db=0
q.dx=null
q.dy=0
q.fr=null
q.fx=null
g=new X.aF(!1,!1,!1)
j=q.d
q.d=g
l=[X.aF]
k=new D.G("modifiers",j,g,q,l)
k.b=!0
q.X(k)
k=q.f
if(k!==!1){q.f=!1
k=new D.G("invertX",k,!1,q,[P.M])
k.b=!0
q.X(k)}k=q.r
if(k!==!1){q.r=!1
k=new D.G("invertY",k,!1,q,[P.M])
k.b=!0
q.X(k)}q.bk(r)
h.h(0,q)
r=v.r
q=new U.kP()
k=U.d5()
k.sdj(0,!0)
k.sd5(6.283185307179586)
k.sd7(0)
k.sag(0,0)
k.sd6(100)
k.sZ(0)
k.scR(0.2)
q.b=k
k.gt().h(0,q.gaS())
q.c=null
q.d=!1
q.e=2.5
q.f=2
q.r=4
q.y=!1
q.x=!1
q.z=0
q.Q=null
q.ch=0
q.cx=null
q.cy=null
g=new X.aF(!0,!1,!1)
j=q.c
q.c=g
k=new D.G("modifiers",j,g,q,l)
k.b=!0
q.X(k)
q.bk(r)
h.h(0,q)
r=v.r
q=new U.kR()
q.c=0.01
q.d=0
q.e=0
g=new X.aF(!1,!1,!1)
q.b=g
l=new D.G("modifiers",null,g,q,l)
l.b=!0
q.X(l)
q.bk(r)
h.h(0,q)
h.h(0,U.ej(V.aE(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
f=X.eV(2000,1.0471975511965976,h,0.1,null)
e=new M.i3()
e.sbl(null)
e.sbv(0,null)
e.sbw(null)
r=E.ev(null,!0,null,"",null,null)
s=F.dn()
q=s.a
l=new V.Q(-1,-1,1)
l=l.E(0,Math.sqrt(l.J(l)))
d=q.bN(new V.bG(1,2,4,6),new V.aY(1,0,0,1),new V.am(-1,-1,0),new V.ab(0,1),l,null)
q=s.a
l=new V.Q(1,-1,1)
l=l.E(0,Math.sqrt(l.J(l)))
c=q.bN(new V.bG(0,3,4,6),new V.aY(0,0,1,1),new V.am(1,-1,0),new V.ab(1,1),l,null)
q=s.a
l=new V.Q(1,1,1)
l=l.E(0,Math.sqrt(l.J(l)))
b=q.bN(new V.bG(0,2,5,6),new V.aY(0,1,0,1),new V.am(1,1,0),new V.ab(1,0),l,null)
q=s.a
l=V.aN()
k=new V.Q(-1,1,1)
k=k.E(0,Math.sqrt(k.J(k)))
a=q.bN(new V.bG(0,2,4,7),new V.aY(1,1,0,1),new V.am(-1,1,0),l,k,null)
s.d.jf(H.c([d,c,b,a],[F.aK]))
s.aJ()
r.scg(0,s)
e.d=r
e.e=null
r=new O.k2()
r.b=1.0471975511965976
r.d=new V.x(1,1,1)
j=r.c
r.c=o
o.gt().h(0,r.gaW())
q=new D.G("boxTexture",j,r.c,r,[T.du])
q.b=!0
r.W(q)
e.sbw(r)
e.sbv(0,u)
e.sbl(f)
a0=new M.ik()
a0.shj(0,O.d4(E.at))
a0.d.b9(a0.ghS(),a0.ghT())
a0.e=null
a0.f=null
a0.r=null
a0.x=null
a0.sbl(null)
a0.sbv(0,null)
a0.sbw(null)
a0.sbl(f)
a0.sbw(n)
a0.sbv(0,u)
a0.d.h(0,t)
a0.b.seq(0,!1)
r=M.aI
q=H.c([e,a0],[r])
l=new M.hZ()
l.bG(r)
l.e=!1
l.f=null
l.b9(l.gi9(),l.gia())
l.ac(0,q)
r=v.d
if(r!==l){if(r!=null)r.gt().Y(0,v.gdC())
v.d=l
l.gt().h(0,v.gdC())
v.fV()}r=new V.jC("controls",!0)
q=C.r.cd(x,"controls")
r.c=q
if(q==null)H.q("Failed to find controls for RadioGroup")
r.eh(0,"Silver",new B.n3(n),!0)
r.af(0,"Gold",new B.n4(n))
r.af(0,"Glass",new B.n5(n))
r.af(0,"Blue Glass",new B.n6(n))
r.af(0,"Water Bubble",new B.n7(n))
r.af(0,"No Reflection",new B.n8(n))
r.af(0,"Pink Distort",new B.n9(n))
r.af(0,"Cloak",new B.na(n))
r.af(0,"White and Shiny",new B.nb(n))
r=new V.ke("bumpMaps",!0,new B.nc(n,v))
x=C.r.cd(x,"bumpMaps")
r.c=x
if(x==null)H.q("Failed to find bumpMaps for Texture2DGroup")
r.af(0,"../resources/BumpMap1.png",!0)
r.h(0,"../resources/BumpMap2.png")
r.h(0,"../resources/BumpMap3.png")
r.h(0,"../resources/BumpMap4.png")
r.h(0,"../resources/BumpMap5.png")
r.h(0,"../resources/ScrewBumpMap.png")
r.h(0,"../resources/CtrlPnlBumpMap.png")
x=v.z
if(x==null){x=D.F()
v.z=x}r={func:1,ret:-1,args:[D.w]}
q=H.l(new B.nd(z,n),r)
if(x.b==null)x.sbg(H.c([],[r]))
x=x.b;(x&&C.a).h(x,q)
V.nk(v)},
n3:{"^":"o:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sv(0,new V.x(0.1,0.1,0.1))
y=z.x
y.sv(0,new V.x(0.2,0.2,0.2))
z.cy.sv(0,new V.x(0,0,0))
z.cx.sv(0,new V.x(1,1,1))}},
n4:{"^":"o:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sv(0,new V.x(0.11,0.11,0.1))
y=z.x
y.sv(0,new V.x(0.21,0.21,0.2))
z.cy.sv(0,new V.x(0,0,0))
z=z.cx
z.sv(0,new V.x(1,0.9,0.5))}},
n5:{"^":"o:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sv(0,new V.x(0.1,0.1,0.1))
y=z.x
y.sv(0,new V.x(0.1,0.1,0.1))
z.cy.saK(0.4)
y=z.cy
y.sv(0,new V.x(0.6,0.6,0.6))
z=z.cx
z.sv(0,new V.x(0.4,0.4,0.4))}},
n6:{"^":"o:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sv(0,new V.x(0.1,0.1,0.1))
y=z.x
y.sv(0,new V.x(0.1,0.1,0.1))
z.cy.saK(0.4)
y=z.cy
y.sv(0,new V.x(0.2,0.3,1))
z=z.cx
z.sv(0,new V.x(0.3,0.3,0.3))}},
n7:{"^":"o:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sv(0,new V.x(0.1,0.1,0.1))
y=z.x
y.sv(0,new V.x(0.1,0.1,0.1))
z.cy.saK(0.6)
y=z.cy
y.sv(0,new V.x(0.8,0.8,0.8))
z=z.cx
z.sv(0,new V.x(0.2,0.2,0.2))}},
n8:{"^":"o:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sv(0,new V.x(0.1,0.1,0.1))
y=z.x
y.sv(0,new V.x(0.1,0.1,0.1))
z.cy.saK(0.6)
z.cy.sv(0,new V.x(1,1,1))
z.cx.sv(0,new V.x(0,0,0))}},
n9:{"^":"o:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sv(0,new V.x(0.1,0.1,0.1))
y=z.x
y.sv(0,new V.x(0.1,0.1,0.1))
z.cy.saK(0.9)
y=z.cy
y.sv(0,new V.x(1,0.8,0.8))
z.cx.sv(0,new V.x(0,0,0))}},
na:{"^":"o:0;a",
$0:function(){var z,y
z=this.a
z.r.sv(0,new V.x(0,0,0))
y=z.x
y.sv(0,new V.x(0.1,0.1,0.1))
z.cy.saK(0.99)
y=z.cy
y.sv(0,new V.x(0.95,0.95,0.95))
z.cx.sv(0,new V.x(0,0,0))}},
nb:{"^":"o:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sv(0,new V.x(0.3,0.3,0.3))
y=z.x
y.sv(0,new V.x(0.5,0.5,0.5))
z.cy.sv(0,new V.x(0,0,0))
z=z.cx
z.sv(0,new V.x(0.3,0.3,0.3))}},
nc:{"^":"o:20;a,b",
$1:function(a){var z,y,x
z=this.a.Q
y=this.b.f.k6(a)
x=z.c
if(x!==C.e){if(x===C.d)z.bf()
z.c=C.e
z.eb(null)
x=z.a
x.a=null
x.W(null)}z.ea(y)}},
nd:{"^":"o:8;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isw")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.ei("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.ei("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.N=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eB.prototype
return J.eA.prototype}if(typeof a=="string")return J.cq.prototype
if(a==null)return J.eC.prototype
if(typeof a=="boolean")return J.iJ.prototype
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.a)return a
return J.cP(a)}
J.bq=function(a){if(typeof a=="string")return J.cq.prototype
if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.a)return a
return J.cP(a)}
J.e_=function(a){if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.a)return a
return J.cP(a)}
J.mR=function(a){if(typeof a=="number")return J.cp.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cD.prototype
return a}
J.bU=function(a){if(typeof a=="string")return J.cq.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cD.prototype
return a}
J.a_=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.a)return a
return J.cP(a)}
J.a0=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).A(a,b)}
J.hz=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mR(a).U(a,b)}
J.hA=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n1(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bq(a).k(a,b)}
J.hB=function(a,b,c,d){return J.a_(a).hb(a,b,c,d)}
J.hC=function(a,b){return J.bU(a).G(a,b)}
J.ce=function(a,b){return J.a_(a).il(a,b)}
J.cU=function(a,b,c){return J.a_(a).ip(a,b,c)}
J.e5=function(a,b){return J.a_(a).C(a,b)}
J.hD=function(a,b){return J.bU(a).a4(a,b)}
J.cV=function(a,b,c){return J.bq(a).jv(a,b,c)}
J.cf=function(a,b){return J.e_(a).ae(a,b)}
J.hE=function(a,b,c,d){return J.a_(a).jN(a,b,c,d)}
J.hF=function(a){return J.a_(a).gjl(a)}
J.bu=function(a){return J.a_(a).gcO(a)}
J.bX=function(a){return J.N(a).ga0(a)}
J.b5=function(a){return J.e_(a).gT(a)}
J.ar=function(a){return J.bq(a).gm(a)}
J.hG=function(a){return J.a_(a).gkn(a)}
J.hH=function(a){return J.a_(a).gky(a)}
J.cW=function(a,b){return J.a_(a).b8(a,b)}
J.e6=function(a){return J.e_(a).kp(a)}
J.hI=function(a,b){return J.a_(a).kr(a,b)}
J.hJ=function(a,b){return J.a_(a).skG(a,b)}
J.hK=function(a,b,c){return J.a_(a).fC(a,b,c)}
J.hL=function(a,b,c){return J.bU(a).u(a,b,c)}
J.hM=function(a){return J.bU(a).kF(a)}
J.ae=function(a){return J.N(a).i(a)}
I.a8=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.cg.prototype
C.q=W.d1.prototype
C.D=W.d3.prototype
C.j=W.b_.prototype
C.V=W.ib.prototype
C.X=W.ix.prototype
C.E=W.iy.prototype
C.r=W.iA.prototype
C.Z=J.H.prototype
C.a=J.b7.prototype
C.a_=J.eA.prototype
C.h=J.eB.prototype
C.t=J.eC.prototype
C.k=J.cp.prototype
C.c=J.cq.prototype
C.a6=J.c5.prototype
C.H=W.iO.prototype
C.ac=W.jh.prototype
C.N=J.jn.prototype
C.O=W.jE.prototype
C.b=P.dm.prototype
C.y=W.cy.prototype
C.o=W.kb.prototype
C.n=W.kc.prototype
C.C=J.cD.prototype
C.P=W.bL.prototype
C.Q=W.l9.prototype
C.S=new P.hQ(!1)
C.R=new P.hP(C.S)
C.T=new P.jl()
C.U=new P.kZ()
C.l=new P.lH()
C.d=new A.cj(0,"ColorSourceType.None")
C.i=new A.cj(1,"ColorSourceType.Solid")
C.e=new A.cj(2,"ColorSourceType.Texture2D")
C.f=new A.cj(3,"ColorSourceType.TextureCube")
C.z=new P.bx(0)
C.W=new P.bx(5e6)
C.Y=new P.iC("element",!0,!1,!1,!1)
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
C.F=function(hooks) { return hooks; }

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
C.G=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.I=H.c(I.a8([127,2047,65535,1114111]),[P.m])
C.u=H.c(I.a8([0,0,32776,33792,1,10240,0,0]),[P.m])
C.a7=H.c(I.a8(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.v=H.c(I.a8([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.w=H.c(I.a8([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.a8=H.c(I.a8(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.J=H.c(I.a8([]),[P.h])
C.a9=H.c(I.a8([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.K=H.c(I.a8([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.x=H.c(I.a8([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.L=H.c(I.a8([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.aa=H.c(I.a8([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.M=H.c(I.a8([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.A=H.c(I.a8(["bind","if","ref","repeat","syntax"]),[P.h])
C.B=H.c(I.a8(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.ab=new H.i2(0,{},C.J,[P.h,P.h])
C.m=new P.kS(!1)
$.aA=0
$.bw=null
$.eb=null
$.dR=!1
$.hq=null
$.hl=null
$.hw=null
$.cO=null
$.cR=null
$.e0=null
$.bl=null
$.bQ=null
$.bR=null
$.dS=!1
$.S=C.l
$.aM=null
$.d6=null
$.eu=null
$.et=null
$.ep=null
$.eo=null
$.en=null
$.em=null
$.p=V.jc()
$.eP=null
$.eY=null
$.bF=null
$.f3=null
$.fD=null
$.fG=null
$.fF=null
$.cF=null
$.fE=null
$.k4="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.k3="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
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
I.$lazy(y,x,w)}})(["el","$get$el",function(){return H.hp("_$dart_dartClosure")},"dc","$get$dc",function(){return H.hp("_$dart_js")},"fn","$get$fn",function(){return H.aJ(H.cB({
toString:function(){return"$receiver$"}}))},"fo","$get$fo",function(){return H.aJ(H.cB({$method$:null,
toString:function(){return"$receiver$"}}))},"fp","$get$fp",function(){return H.aJ(H.cB(null))},"fq","$get$fq",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fu","$get$fu",function(){return H.aJ(H.cB(void 0))},"fv","$get$fv",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fs","$get$fs",function(){return H.aJ(H.ft(null))},"fr","$get$fr",function(){return H.aJ(function(){try{null.$method$}catch(z){return z.message}}())},"fx","$get$fx",function(){return H.aJ(H.ft(void 0))},"fw","$get$fw",function(){return H.aJ(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dM","$get$dM",function(){return P.la()},"bS","$get$bS",function(){return[]},"fC","$get$fC",function(){return P.kW()},"fP","$get$fP",function(){return H.jf(H.bk(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"h9","$get$h9",function(){return P.jJ("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hh","$get$hh",function(){return P.mt()},"ek","$get$ek",function(){return{}},"fT","$get$fT",function(){return P.eH(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dN","$get$dN",function(){return P.eF(P.h,P.c0)},"fK","$get$fK",function(){return Z.ao(0)},"fI","$get$fI",function(){return Z.ao(511)},"az","$get$az",function(){return Z.ao(1)},"aS","$get$aS",function(){return Z.ao(2)},"aR","$get$aR",function(){return Z.ao(4)},"aT","$get$aT",function(){return Z.ao(8)},"aU","$get$aU",function(){return Z.ao(16)},"bJ","$get$bJ",function(){return Z.ao(32)},"bK","$get$bK",function(){return Z.ao(64)},"fJ","$get$fJ",function(){return Z.ao(96)},"bi","$get$bi",function(){return Z.ao(128)},"aQ","$get$aQ",function(){return Z.ao(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.E},{func:1,ret:-1,opt:[D.w]},{func:1,ret:-1,args:[D.w]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ac]},{func:1,ret:P.E,args:[F.aa]},{func:1,ret:P.E,args:[,,]},{func:1,ret:P.E,args:[W.a6]},{func:1,ret:P.E,args:[D.w]},{func:1,ret:-1,args:[P.m,[P.n,E.at]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bg]},{func:1,ret:-1,args:[W.a6]},{func:1,ret:-1,args:[P.m,[P.n,V.av]]},{func:1,ret:-1,args:[P.m,[P.n,M.aI]]},{func:1,ret:P.E,args:[,]},{func:1,ret:-1,args:[P.m,[P.n,U.af]]},{func:1,ret:P.h,args:[P.m]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.m,[P.n,D.a7]]},{func:1,ret:P.E,args:[P.h]},{func:1,args:[,]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:P.M,args:[W.C]},{func:1,ret:P.M,args:[W.K,P.h,P.h,W.ca]},{func:1,ret:P.M,args:[W.aH]},{func:1,ret:P.M,args:[P.h]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[W.bC]},{func:1,args:[W.a6]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.O,args:[P.m]},{func:1,ret:P.E,args:[P.aj]},{func:1,ret:P.E,args:[P.h,,]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.M,args:[P.z,P.z]},{func:1,ret:-1,args:[W.bL]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:P.M,args:[[P.n,D.a7]]},{func:1,ret:-1,args:[P.h,P.m]},{func:1,ret:[P.J,P.h,P.h],args:[[P.J,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.m,args:[[P.b,P.m],P.m]},{func:1,ret:[P.aV,,],args:[,]},{func:1,ret:P.E,args:[F.aK,P.z,P.z]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:P.E,args:[,],opt:[,]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,ret:P.E,args:[P.be]},{func:1,ret:P.M,args:[V.aX]},{func:1,ret:P.E,args:[W.ac]},{func:1,ret:P.E,args:[W.K]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:W.K,args:[W.C]}]
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
if(x==y)H.nn(d||a)
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
Isolate.a8=a.a8
Isolate.dY=a.dY
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
if(typeof dartMainRunner==="function")dartMainRunner(B.ht,[])
else B.ht([])})})()
//# sourceMappingURL=test.dart.js.map
