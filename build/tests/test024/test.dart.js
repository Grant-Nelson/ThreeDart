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
var d=supportsDirectProtoAccess&&b2!="b"
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dK(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dN=function(){}
var dart=[["","",,H,{"^":"",nt:{"^":"b;a"}}],["","",,J,{"^":"",
dR:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cJ:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dQ==null){H.mS()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.cz("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d0()]
if(v!=null)return v
v=H.mY(a)
if(v!=null)return v
if(typeof a=="function")return C.a4
y=Object.getPrototypeOf(a)
if(y==null)return C.L
if(y===Object.prototype)return C.L
if(typeof w=="function"){Object.defineProperty(w,$.$get$d0(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
I:{"^":"b;",
u:function(a,b){return a===b},
gW:function(a){return H.bC(a)},
i:["fg",function(a){return"Instance of '"+H.b9(a)+"'"}],
"%":"CanvasRenderingContext2D|DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer|WebGLTexture"},
iA:{"^":"I;",
i:function(a){return String(a)},
gW:function(a){return a?519018:218159},
$isK:1},
eu:{"^":"I;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gW:function(a){return 0},
$isE:1},
d1:{"^":"I;",
gW:function(a){return 0},
i:["fi",function(a){return String(a)}]},
jj:{"^":"d1;"},
c6:{"^":"d1;"},
bY:{"^":"d1;",
i:function(a){var z=a[$.$get$ee()]
if(z==null)return this.fi(a)
return"JavaScript function for "+H.i(J.ae(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbU:1},
b6:{"^":"I;$ti",
h:function(a,b){H.x(b,H.t(a,0))
if(!!a.fixed$length)H.r(P.V("add"))
a.push(b)},
k5:function(a,b){var z
if(!!a.fixed$length)H.r(P.V("removeAt"))
z=a.length
if(b>=z)throw H.d(P.c3(b,null,null))
return a.splice(b,1)[0]},
K:function(a,b){var z
if(!!a.fixed$length)H.r(P.V("remove"))
for(z=0;z<a.length;++z)if(J.L(a[z],b)){a.splice(z,1)
return!0}return!1},
Z:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.aG(a))}},
k:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.q(z,y,H.i(a[y]))
return z.join(b)},
jE:function(a){return this.k(a,"")},
jw:function(a,b,c,d){var z,y,x
H.x(b,d)
H.l(c,{func:1,ret:d,args:[d,H.t(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.d(P.aG(a))}return y},
jv:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.K,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.d(P.aG(a))}throw H.d(H.cp())},
ju:function(a,b){return this.jv(a,b,null)},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
ff:function(a,b,c){if(b<0||b>a.length)throw H.d(P.a_(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.a_(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.t(a,0)])
return H.c(a.slice(b,c),[H.t(a,0)])},
gjt:function(a){if(a.length>0)return a[0]
throw H.d(H.cp())},
gaz:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.cp())},
dO:function(a,b){var z,y
H.l(b,{func:1,ret:P.K,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aG(a))}return!1},
Y:function(a,b){var z
for(z=0;z<a.length;++z)if(J.L(a[z],b))return!0
return!1},
i:function(a){return P.d_(a,"[","]")},
gS:function(a){return new J.as(a,a.length,0,[H.t(a,0)])},
gW:function(a){return H.bC(a)},
gp:function(a){return a.length},
sp:function(a,b){if(!!a.fixed$length)H.r(P.V("set length"))
if(b<0)throw H.d(P.a_(b,0,null,"newLength",null))
a.length=b},
l:function(a,b){if(b>=a.length||b<0)throw H.d(H.bl(a,b))
return a[b]},
q:function(a,b,c){H.x(c,H.t(a,0))
if(!!a.immutable$list)H.r(P.V("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bl(a,b))
a[b]=c},
$iso:1,
$isa:1,
n:{
iz:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.cR(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a_(a,0,4294967295,"length",null))
return J.es(new Array(a),b)},
es:function(a,b){return J.cq(H.c(a,[b]))},
cq:function(a){H.cd(a)
a.fixed$length=Array
return a}}},
ns:{"^":"b6;$ti"},
as:{"^":"b;a,b,c,0d,$ti",
sdl:function(a){this.d=H.x(a,H.t(this,0))},
gJ:function(){return this.d},
B:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.y(z))
x=this.c
if(x>=y){this.sdl(null)
return!1}this.sdl(z[x]);++this.c
return!0},
$isaW:1},
bW:{"^":"I;",
el:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.V(""+a+".floor()"))},
ap:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.V(""+a+".round()"))},
eO:function(a,b){var z,y
if(b>20)throw H.d(P.a_(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bm:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.d(P.a_(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.a_(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.V("Unexpected toString result: "+z))
x=y.length
if(1>=x)return H.f(y,1)
z=y[1]
if(3>=x)return H.f(y,3)
w=+y[3]
x=y[2]
if(x!=null){z+=x
w-=x.length}return z+C.b.E("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gW:function(a){return a&0x1FFFFFFF},
E:function(a,b){if(typeof b!=="number")throw H.d(H.aj(b))
return a*b},
bq:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fm:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dH(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dH(a,b)},
dH:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.V("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
aP:function(a,b){var z
if(a>0)z=this.dF(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ib:function(a,b){if(b<0)throw H.d(H.aj(b))
return this.dF(a,b)},
dF:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.d(H.aj(b))
return a<b},
$isq:1,
$isak:1},
et:{"^":"bW;",$ism:1},
iB:{"^":"bW;"},
bX:{"^":"I;",
a_:function(a,b){if(b<0)throw H.d(H.bl(a,b))
if(b>=a.length)H.r(H.bl(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.d(H.bl(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.C(b)
if(typeof b!=="string")throw H.d(P.cR(b,null,null))
return a+b},
aW:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.aj(b))
c=P.b0(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ab:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.aj(c))
if(typeof c!=="number")return c.T()
if(c<0||c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a5:function(a,b){return this.ab(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.aj(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.T()
if(b<0)throw H.d(P.c3(b,null,null))
if(b>c)throw H.d(P.c3(b,null,null))
if(c>a.length)throw H.d(P.c3(c,null,null))
return a.substring(b,c)},
ar:function(a,b){return this.t(a,b,null)},
kk:function(a){return a.toLowerCase()},
E:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.R)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
jR:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.E(c,z)+a},
ag:function(a,b){return this.jR(a,b," ")},
eu:function(a,b,c){var z
if(c<0||c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
es:function(a,b){return this.eu(a,b,0)},
j9:function(a,b,c){if(c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
return H.hp(a,b,c)},
i:function(a){return a},
gW:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gp:function(a){return a.length},
$iseM:1,
$ish:1}}],["","",,H,{"^":"",
cK:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
cp:function(){return new P.de("No element")},
iy:function(){return new P.de("Too many elements")},
v:{"^":"ks;a",
gp:function(a){return this.a.length},
l:function(a,b){return C.b.a_(this.a,b)},
$asdu:function(){return[P.m]},
$asT:function(){return[P.m]},
$aso:function(){return[P.m]},
$asa:function(){return[P.m]}},
em:{"^":"o;"},
cs:{"^":"em;$ti",
gS:function(a){return new H.d3(this,this.gp(this),0,[H.a5(this,"cs",0)])},
cX:function(a,b){return this.fh(0,H.l(b,{func:1,ret:P.K,args:[H.a5(this,"cs",0)]}))}},
d3:{"^":"b;a,b,c,0d,$ti",
sb0:function(a){this.d=H.x(a,H.t(this,0))},
gJ:function(){return this.d},
B:function(){var z,y,x,w
z=this.a
y=J.bn(z)
x=y.gp(z)
if(this.b!==x)throw H.d(P.aG(z))
w=this.c
if(w>=x){this.sb0(null)
return!1}this.sb0(y.a8(z,w));++this.c
return!0},
$isaW:1},
iY:{"^":"o;a,b,$ti",
gS:function(a){return new H.iZ(J.b4(this.a),this.b,this.$ti)},
gp:function(a){return J.ar(this.a)},
a8:function(a,b){return this.b.$1(J.cf(this.a,b))},
$aso:function(a,b){return[b]}},
iZ:{"^":"aW;0a,b,c,$ti",
sb0:function(a){this.a=H.x(a,H.t(this,1))},
B:function(){var z=this.b
if(z.B()){this.sb0(this.c.$1(z.gJ()))
return!0}this.sb0(null)
return!1},
gJ:function(){return this.a},
$asaW:function(a,b){return[b]}},
j_:{"^":"cs;a,b,$ti",
gp:function(a){return J.ar(this.a)},
a8:function(a,b){return this.b.$1(J.cf(this.a,b))},
$ascs:function(a,b){return[b]},
$aso:function(a,b){return[b]}},
dy:{"^":"o;a,b,$ti",
gS:function(a){return new H.kX(J.b4(this.a),this.b,this.$ti)}},
kX:{"^":"aW;a,b,$ti",
B:function(){var z,y
for(z=this.a,y=this.b;z.B();)if(y.$1(z.gJ()))return!0
return!1},
gJ:function(){return this.a.gJ()}},
cm:{"^":"b;$ti"},
du:{"^":"b;$ti",
q:function(a,b,c){H.x(c,H.a5(this,"du",0))
throw H.d(P.V("Cannot modify an unmodifiable list"))}},
ks:{"^":"cr+du;"}}],["","",,H,{"^":"",
hU:function(){throw H.d(P.V("Cannot modify unmodifiable Map"))},
bq:function(a){var z,y
z=H.C(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
mL:function(a){return init.types[H.aa(a)]},
mV:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.O(a).$isau},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ae(a)
if(typeof z!=="string")throw H.d(H.aj(a))
return z},
bC:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
ju:function(a,b){var z,y,x,w,v,u
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
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
b9:function(a){return H.jl(a)+H.dH(H.b3(a),0,null)},
jl:function(a){var z,y,x,w,v,u,t,s,r
z=J.O(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.Y||!!z.$isc6){u=C.E(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bq(w.length>1&&C.b.H(w,0)===36?C.b.ar(w,1):w)},
jm:function(){if(!!self.location)return self.location.href
return},
eR:function(a){var z,y,x,w,v
H.cd(a)
z=J.ar(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jv:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.aj(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.aP(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.aj(w))}return H.eR(z)},
eS:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.aj(x))
if(x<0)throw H.d(H.aj(x))
if(x>65535)return H.jv(a)}return H.eR(a)},
jw:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
ba:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.aP(z,10))>>>0,56320|z&1023)}}throw H.d(P.a_(a,0,1114111,null,null))},
b8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jt:function(a){var z=H.b8(a).getFullYear()+0
return z},
jr:function(a){var z=H.b8(a).getMonth()+1
return z},
jn:function(a){var z=H.b8(a).getDate()+0
return z},
jo:function(a){var z=H.b8(a).getHours()+0
return z},
jq:function(a){var z=H.b8(a).getMinutes()+0
return z},
js:function(a){var z=H.b8(a).getSeconds()+0
return z},
jp:function(a){var z=H.b8(a).getMilliseconds()+0
return z},
B:function(a){throw H.d(H.aj(a))},
f:function(a,b){if(a==null)J.ar(a)
throw H.d(H.bl(a,b))},
bl:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aF(!0,b,"index",null)
z=H.aa(J.ar(a))
if(!(b<0)){if(typeof z!=="number")return H.B(z)
y=b>=z}else y=!0
if(y)return P.b5(b,a,"index",null,z)
return P.c3(b,"index",null)},
mF:function(a,b,c){if(a>c)return new P.cu(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cu(a,c,!0,b,"end","Invalid value")
return new P.aF(!0,b,"end",null)},
aj:function(a){return new P.aF(!0,a,null,null)},
d:function(a){var z
if(a==null)a=new P.eL()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hq})
z.name=""}else z.toString=H.hq
return z},
hq:function(){return J.ae(this.dartException)},
r:function(a){throw H.d(a)},
y:function(a){throw H.d(P.aG(a))},
a7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ni(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.aP(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d2(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eK(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fd()
u=$.$get$fe()
t=$.$get$ff()
s=$.$get$fg()
r=$.$get$fk()
q=$.$get$fl()
p=$.$get$fi()
$.$get$fh()
o=$.$get$fn()
n=$.$get$fm()
m=v.af(y)
if(m!=null)return z.$1(H.d2(H.C(y),m))
else{m=u.af(y)
if(m!=null){m.method="call"
return z.$1(H.d2(H.C(y),m))}else{m=t.af(y)
if(m==null){m=s.af(y)
if(m==null){m=r.af(y)
if(m==null){m=q.af(y)
if(m==null){m=p.af(y)
if(m==null){m=s.af(y)
if(m==null){m=o.af(y)
if(m==null){m=n.af(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eK(H.C(y),m))}}return z.$1(new H.kr(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eZ()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aF(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eZ()
return a},
bo:function(a){var z
if(a==null)return new H.fS(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fS(a)},
mI:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.q(0,a[y],a[x])}return b},
mU:function(a,b,c,d,e,f){H.e(a,"$isbU")
switch(H.aa(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.u("Unsupported number of arguments for wrapped closure"))},
bk:function(a,b){var z
H.aa(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mU)
a.$identity=z
return z},
hQ:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.O(d).$isa){z.$reflectionInfo=d
x=H.jD(z).r}else x=d
w=e?Object.create(new H.k_().constructor.prototype):Object.create(new H.cT(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ay
if(typeof u!=="number")return u.G()
$.ay=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.ea(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.mL,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.e3:H.cU
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.d("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ea(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
hN:function(a,b,c,d){var z=H.cU
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ea:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hP(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hN(y,!w,z,b)
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
hO:function(a,b,c,d){var z,y
z=H.cU
y=H.e3
switch(b?-1:a){case 0:throw H.d(H.jM("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hP:function(a,b){var z,y,x,w,v,u,t,s
z=$.bs
if(z==null){z=H.ci("self")
$.bs=z}y=$.e2
if(y==null){y=H.ci("receiver")
$.e2=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hO(w,!u,x,b)
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
dK:function(a,b,c,d,e,f,g){return H.hQ(a,b,H.aa(c),d,!!e,!!f,g)},
C:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.ax(a,"String"))},
mG:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ax(a,"double"))},
n7:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ax(a,"num"))},
dI:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.ax(a,"bool"))},
aa:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.ax(a,"int"))},
hn:function(a,b){throw H.d(H.ax(a,H.bq(H.C(b).substring(3))))},
n9:function(a,b){throw H.d(H.hM(a,H.bq(H.C(b).substring(3))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.hn(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else z=!0
if(z)return a
H.n9(a,b)},
cd:function(a){if(a==null)return a
if(!!J.O(a).$isa)return a
throw H.d(H.ax(a,"List<dynamic>"))},
hk:function(a,b){var z
if(a==null)return a
z=J.O(a)
if(!!z.$isa)return a
if(z[b])return a
H.hn(a,b)},
hg:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.aa(z)]
else return a.$S()}return},
ca:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hg(J.O(a))
if(z==null)return!1
return H.h3(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.dE)return a
$.dE=!0
try{if(H.ca(a,b))return a
z=H.cN(b)
y=H.ax(a,z)
throw H.d(y)}finally{$.dE=!1}},
dO:function(a,b){if(a!=null&&!H.dJ(a,b))H.r(H.ax(a,H.cN(b)))
return a},
h9:function(a){var z,y
z=J.O(a)
if(!!z.$isn){y=H.hg(z)
if(y!=null)return H.cN(y)
return"Closure"}return H.b9(a)},
ng:function(a){throw H.d(new P.hX(H.C(a)))},
hh:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b3:function(a){if(a==null)return
return a.$ti},
nT:function(a,b,c){return H.bp(a["$as"+H.i(c)],H.b3(b))},
cb:function(a,b,c,d){var z
H.C(c)
H.aa(d)
z=H.bp(a["$as"+H.i(c)],H.b3(b))
return z==null?null:z[d]},
a5:function(a,b,c){var z
H.C(b)
H.aa(c)
z=H.bp(a["$as"+H.i(b)],H.b3(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.aa(b)
z=H.b3(a)
return z==null?null:z[b]},
cN:function(a){return H.b2(a,null)},
b2:function(a,b){var z,y
H.j(b,"$isa",[P.h],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bq(a[0].builtin$cls)+H.dH(a,1,b)
if(typeof a=="function")return H.bq(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.aa(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.i(b[y])}if('func' in a)return H.mn(a,b)
if('futureOr' in a)return"FutureOr<"+H.b2("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mn:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.h]
H.j(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.b.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b2(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b2(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b2(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b2(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mH(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.C(z[l])
n=n+m+H.b2(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dH:function(a,b,c){var z,y,x,w,v,u
H.j(c,"$isa",[P.h],"$asa")
if(a==null)return""
z=new P.ai("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b2(u,c)}return"<"+z.i(0)+">"},
bp:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bO:function(a,b,c,d){var z,y
H.C(b)
H.cd(c)
H.C(d)
if(a==null)return!1
z=H.b3(a)
y=J.O(a)
if(y[b]==null)return!1
return H.hc(H.bp(y[d],z),null,c,null)},
j:function(a,b,c,d){H.C(b)
H.cd(c)
H.C(d)
if(a==null)return a
if(H.bO(a,b,c,d))return a
throw H.d(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bq(b.substring(3))+H.dH(c,0,null),init.mangledGlobalNames)))},
hc:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aq(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aq(a[y],b,c[y],d))return!1
return!0},
nR:function(a,b,c){return a.apply(b,H.bp(J.O(b)["$as"+H.i(c)],H.b3(b)))},
hj:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="E"||a===-1||a===-2||H.hj(z)}return!1},
dJ:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="E"||b===-1||b===-2||H.hj(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dJ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ca(a,b)}z=J.O(a).constructor
y=H.b3(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.aq(z,null,b,null)},
x:function(a,b){if(a!=null&&!H.dJ(a,b))throw H.d(H.ax(a,H.cN(b)))
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
if('func' in c)return H.h3(a,b,c,d)
if('func' in a)return c.builtin$cls==="bU"
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
return H.hc(H.bp(r,z),b,u,d)},
h3:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.n6(m,b,l,d)},
n6:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aq(c[w],d,a[w],b))return!1}return!0},
nS:function(a,b,c){Object.defineProperty(a,H.C(b),{value:c,enumerable:false,writable:true,configurable:true})},
mY:function(a){var z,y,x,w,v,u
z=H.C($.hi.$1(a))
y=$.cI[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cL[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.C($.hb.$2(a,z))
if(z!=null){y=$.cI[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cL[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cM(x)
$.cI[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cL[z]=x
return x}if(v==="-"){u=H.cM(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hm(a,x)
if(v==="*")throw H.d(P.cz(z))
if(init.leafTags[z]===true){u=H.cM(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hm(a,x)},
hm:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dR(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cM:function(a){return J.dR(a,!1,null,!!a.$isau)},
n5:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cM(z)
else return J.dR(z,c,null,null)},
mS:function(){if(!0===$.dQ)return
$.dQ=!0
H.mT()},
mT:function(){var z,y,x,w,v,u,t,s
$.cI=Object.create(null)
$.cL=Object.create(null)
H.mO()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ho.$1(v)
if(u!=null){t=H.n5(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mO:function(){var z,y,x,w,v,u,t
z=C.a1()
z=H.bj(C.Z,H.bj(C.a3,H.bj(C.D,H.bj(C.D,H.bj(C.a2,H.bj(C.a_,H.bj(C.a0(C.E),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hi=new H.mP(v)
$.hb=new H.mQ(u)
$.ho=new H.mR(t)},
bj:function(a,b){return a(b)||b},
hp:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dT:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hT:{"^":"b;$ti",
i:function(a){return P.d4(this)},
q:function(a,b,c){H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
return H.hU()},
$isF:1},
hV:{"^":"hT;a,b,c,$ti",
gp:function(a){return this.a},
bC:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
l:function(a,b){if(!this.bC(b))return
return this.dn(b)},
dn:function(a){return this.b[H.C(a)]},
Z:function(a,b){var z,y,x,w,v
z=H.t(this,1)
H.l(b,{func:1,ret:-1,args:[H.t(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.x(this.dn(v),z))}}},
jC:{"^":"b;a,b,c,d,e,f,r,0x",n:{
jD:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cq(z)
y=z[0]
x=z[1]
return new H.jC(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ke:{"^":"b;a,b,c,d,e,f",
af:function(a){var z,y,x
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
aD:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ke(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cy:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fj:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jg:{"^":"a2;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
n:{
eK:function(a,b){return new H.jg(a,b==null?null:b.method)}}},
iE:{"^":"a2;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
n:{
d2:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iE(a,y,z?null:b.receiver)}}},
kr:{"^":"a2;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ni:{"^":"n:18;a",
$1:function(a){if(!!J.O(a).$isa2)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fS:{"^":"b;a,0b",
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
gf_:function(){return this},
$isbU:1,
gf_:function(){return this}},
f2:{"^":"n;"},
k_:{"^":"f2;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bq(z)+"'"}},
cT:{"^":"f2;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cT))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gW:function(a){var z,y
z=this.c
if(z==null)y=H.bC(this.a)
else y=typeof z!=="object"?J.bQ(z):H.bC(z)
return(y^H.bC(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.b9(z)+"'")},
n:{
cU:function(a){return a.a},
e3:function(a){return a.c},
ci:function(a){var z,y,x,w,v
z=new H.cT("self","target","receiver","name")
y=J.cq(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kf:{"^":"a2;a",
i:function(a){return this.a},
n:{
ax:function(a,b){return new H.kf("TypeError: "+H.i(P.ck(a))+": type '"+H.h9(a)+"' is not a subtype of type '"+b+"'")}}},
hL:{"^":"a2;a",
i:function(a){return this.a},
n:{
hM:function(a,b){return new H.hL("CastError: "+H.i(P.ck(a))+": type '"+H.h9(a)+"' is not a subtype of type '"+b+"'")}}},
jL:{"^":"a2;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
n:{
jM:function(a){return new H.jL(a)}}},
aX:{"^":"eA;a,0b,0c,0d,0e,0f,r,$ti",
gp:function(a){return this.a},
gjD:function(a){return this.a===0},
gay:function(){return new H.iL(this,[H.t(this,0)])},
bC:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.di(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.di(y,a)}else return this.jA(a)},
jA:function(a){var z=this.d
if(z==null)return!1
return this.cK(this.c7(z,this.cJ(a)),a)>=0},
l:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bu(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bu(w,b)
x=y==null?null:y.b
return x}else return this.jB(b)},
jB:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c7(z,this.cJ(a))
x=this.cK(y,a)
if(x<0)return
return y[x].b},
q:function(a,b,c){var z,y
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cb()
this.b=z}this.d7(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cb()
this.c=y}this.d7(y,b,c)}else this.jC(b,c)},
jC:function(a,b){var z,y,x,w
H.x(a,H.t(this,0))
H.x(b,H.t(this,1))
z=this.d
if(z==null){z=this.cb()
this.d=z}y=this.cJ(a)
x=this.c7(z,y)
if(x==null)this.ck(z,y,[this.c1(a,b)])
else{w=this.cK(x,a)
if(w>=0)x[w].b=b
else x.push(this.c1(a,b))}},
Z:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aG(this))
z=z.c}},
d7:function(a,b,c){var z
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
z=this.bu(a,b)
if(z==null)this.ck(a,b,this.c1(b,c))
else z.b=c},
fM:function(){this.r=this.r+1&67108863},
c1:function(a,b){var z,y
z=new H.iK(H.x(a,H.t(this,0)),H.x(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fM()
return z},
cJ:function(a){return J.bQ(a)&0x3ffffff},
cK:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.L(a[y].a,b))return y
return-1},
i:function(a){return P.d4(this)},
bu:function(a,b){return a[b]},
c7:function(a,b){return a[b]},
ck:function(a,b,c){a[b]=c},
h0:function(a,b){delete a[b]},
di:function(a,b){return this.bu(a,b)!=null},
cb:function(){var z=Object.create(null)
this.ck(z,"<non-identifier-key>",z)
this.h0(z,"<non-identifier-key>")
return z},
$isew:1},
iK:{"^":"b;a,b,0c,0d"},
iL:{"^":"em;a,$ti",
gp:function(a){return this.a.a},
gS:function(a){var z,y
z=this.a
y=new H.iM(z,z.r,this.$ti)
y.c=z.e
return y}},
iM:{"^":"b;a,b,0c,0d,$ti",
sd8:function(a){this.d=H.x(a,H.t(this,0))},
gJ:function(){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aG(z))
else{z=this.c
if(z==null){this.sd8(null)
return!1}else{this.sd8(z.a)
this.c=this.c.c
return!0}}},
$isaW:1},
mP:{"^":"n:18;a",
$1:function(a){return this.a(a)}},
mQ:{"^":"n:54;a",
$2:function(a,b){return this.a(a,b)}},
mR:{"^":"n:53;a",
$1:function(a){return this.a(H.C(a))}},
iC:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseM:1,
$isjE:1,
n:{
iD:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(P.U("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mH:function(a){return J.es(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
n8:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bh:function(a){return a},
ja:function(a){return new Int8Array(a)},
b1:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bl(b,a))},
mh:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.mF(a,b,c))
return b},
d8:{"^":"I;",$isd8:1,"%":";ArrayBufferView;d7|fO|fP|jb|fQ|fR|bB"},
d7:{"^":"d8;",
gp:function(a){return a.length},
$isau:1,
$asau:I.dN},
jb:{"^":"fP;",
l:function(a,b){H.b1(b,a,a.length)
return a[b]},
q:function(a,b,c){H.mG(c)
H.b1(b,a,a.length)
a[b]=c},
$ascm:function(){return[P.q]},
$asT:function(){return[P.q]},
$iso:1,
$aso:function(){return[P.q]},
$isa:1,
$asa:function(){return[P.q]},
"%":"Float32Array"},
bB:{"^":"fR;",
q:function(a,b,c){H.aa(c)
H.b1(b,a,a.length)
a[b]=c},
$ascm:function(){return[P.m]},
$asT:function(){return[P.m]},
$iso:1,
$aso:function(){return[P.m]},
$isa:1,
$asa:function(){return[P.m]}},
nu:{"^":"bB;",
l:function(a,b){H.b1(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nv:{"^":"bB;",
l:function(a,b){H.b1(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nw:{"^":"bB;",
l:function(a,b){H.b1(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nx:{"^":"bB;",
l:function(a,b){H.b1(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
eI:{"^":"bB;",
gp:function(a){return a.length},
l:function(a,b){H.b1(b,a,a.length)
return a[b]},
$iseI:1,
$isM:1,
"%":";Uint8Array"},
fO:{"^":"d7+T;"},
fP:{"^":"fO+cm;"},
fQ:{"^":"d7+T;"},
fR:{"^":"fQ+cm;"}}],["","",,P,{"^":"",
kZ:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mu()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bk(new P.l0(z),1)).observe(y,{childList:true})
return new P.l_(z,y,x)}else if(self.setImmediate!=null)return P.mv()
return P.mw()},
nI:[function(a){self.scheduleImmediate(H.bk(new P.l1(H.l(a,{func:1,ret:-1})),0))},"$1","mu",4,0,10],
nJ:[function(a){self.setImmediate(H.bk(new P.l2(H.l(a,{func:1,ret:-1})),0))},"$1","mv",4,0,10],
nK:[function(a){P.dh(C.y,H.l(a,{func:1,ret:-1}))},"$1","mw",4,0,10],
dh:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.h.a6(a.a,1000)
return P.lK(z<0?0:z,b)},
fa:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bb]})
z=C.h.a6(a.a,1000)
return P.lL(z<0?0:z,b)},
mq:function(a,b){if(H.ca(a,{func:1,args:[P.b,P.aL]}))return H.l(a,{func:1,ret:null,args:[P.b,P.aL]})
if(H.ca(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.d(P.cR(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mp:function(){var z,y
for(;z=$.bi,z!=null;){$.bM=null
y=z.b
$.bi=y
if(y==null)$.bL=null
z.a.$0()}},
nQ:[function(){$.dF=!0
try{P.mp()}finally{$.bM=null
$.dF=!1
if($.bi!=null)$.$get$dz().$1(P.hd())}},"$0","hd",0,0,3],
h8:function(a){var z=new P.fF(H.l(a,{func:1,ret:-1}))
if($.bi==null){$.bL=z
$.bi=z
if(!$.dF)$.$get$dz().$1(P.hd())}else{$.bL.b=z
$.bL=z}},
mt:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bi
if(z==null){P.h8(a)
$.bM=$.bL
return}y=new P.fF(a)
x=$.bM
if(x==null){y.b=z
$.bM=y
$.bi=y}else{y.b=x.b
x.b=y
$.bM=y
if(y.b==null)$.bL=y}},
na:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.R
if(C.l===y){P.cH(null,null,C.l,a)
return}y.toString
P.cH(null,null,y,H.l(y.cp(a),z))},
f9:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.R
if(y===C.l){y.toString
return P.dh(a,b)}return P.dh(a,H.l(y.cp(b),z))},
kb:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bb]}
H.l(b,z)
y=$.R
if(y===C.l){y.toString
return P.fa(a,b)}x=y.dU(b,P.bb)
$.R.toString
return P.fa(a,H.l(x,z))},
cG:function(a,b,c,d,e){var z={}
z.a=d
P.mt(new P.mr(z,e))},
h4:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.R
if(y===c)return d.$0()
$.R=c
z=y
try{y=d.$0()
return y}finally{$.R=z}},
h5:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.R
if(y===c)return d.$1(e)
$.R=c
z=y
try{y=d.$1(e)
return y}finally{$.R=z}},
ms:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.R
if(y===c)return d.$2(e,f)
$.R=c
z=y
try{y=d.$2(e,f)
return y}finally{$.R=z}},
cH:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.cp(d):c.j_(d,-1)
P.h8(d)},
l0:{"^":"n:29;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
l_:{"^":"n:51;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
l1:{"^":"n:0;a",
$0:function(){this.a.$0()}},
l2:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fU:{"^":"b;a,0b,c",
fK:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bk(new P.lN(this,b),0),a)
else throw H.d(P.V("`setTimeout()` not found."))},
fL:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bk(new P.lM(this,a,Date.now(),b),0),a)
else throw H.d(P.V("Periodic timer."))},
$isbb:1,
n:{
lK:function(a,b){var z=new P.fU(!0,0)
z.fK(a,b)
return z},
lL:function(a,b){var z=new P.fU(!1,0)
z.fL(a,b)
return z}}},
lN:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lM:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.fm(w,x)}z.c=y
this.d.$1(z)}},
bg:{"^":"b;0a,b,c,d,e,$ti",
jI:function(a){if(this.c!==6)return!0
return this.b.b.cU(H.l(this.d,{func:1,ret:P.K,args:[P.b]}),a.a,P.K,P.b)},
jz:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.ca(z,{func:1,args:[P.b,P.aL]}))return H.dO(w.kd(z,a.a,a.b,null,y,P.aL),x)
else return H.dO(w.cU(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aS:{"^":"b;dG:a<,b,0i1:c<,$ti",
eN:function(a,b,c){var z,y,x,w
z=H.t(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.R
if(y!==C.l){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mq(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aS(0,$.R,[c])
w=b==null?1:3
this.da(new P.bg(x,w,a,b,[z,c]))
return x},
kh:function(a,b){return this.eN(a,null,b)},
da:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbg")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaS")
z=y.a
if(z<4){y.da(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cH(null,null,z,H.l(new P.lb(this,a),{func:1,ret:-1}))}},
dC:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbg")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaS")
y=u.a
if(y<4){u.dC(a)
return}this.a=y
this.c=u.c}z.a=this.bx(a)
y=this.b
y.toString
P.cH(null,null,y,H.l(new P.lg(z,this),{func:1,ret:-1}))}},
cf:function(){var z=H.e(this.c,"$isbg")
this.c=null
return this.bx(z)},
bx:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
de:function(a){var z,y,x
z=H.t(this,0)
H.dO(a,{futureOr:1,type:z})
y=this.$ti
if(H.bO(a,"$isby",y,"$asby"))if(H.bO(a,"$isaS",y,null))P.fJ(a,this)
else P.lc(a,this)
else{x=this.cf()
H.x(a,z)
this.a=4
this.c=a
P.bH(this,x)}},
df:function(a,b){var z
H.e(b,"$isaL")
z=this.cf()
this.a=8
this.c=new P.al(a,b)
P.bH(this,z)},
$isby:1,
n:{
lc:function(a,b){var z,y,x
b.a=1
try{a.eN(new P.ld(b),new P.le(b),null)}catch(x){z=H.a7(x)
y=H.bo(x)
P.na(new P.lf(b,z,y))}},
fJ:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaS")
if(z>=4){y=b.cf()
b.a=a.a
b.c=a.c
P.bH(b,y)}else{y=H.e(b.c,"$isbg")
b.a=2
b.c=a
a.dC(y)}},
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
P.cG(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
P.cG(null,null,y,u,t)
return}o=$.R
if(o==null?q!=null:o!==q)$.R=q
else o=null
y=b.c
if(y===8)new P.lj(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.li(x,b,r).$0()}else if((y&2)!==0)new P.lh(z,x,b).$0()
if(o!=null)$.R=o
y=x.b
if(!!J.O(y).$isby){if(y.a>=4){n=H.e(t.c,"$isbg")
t.c=null
b=t.bx(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fJ(y,t)
return}}m=b.b
n=H.e(m.c,"$isbg")
m.c=null
b=m.bx(n)
y=x.a
u=x.b
if(!y){H.x(u,H.t(m,0))
m.a=4
m.c=u}else{H.e(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
lb:{"^":"n:0;a,b",
$0:function(){P.bH(this.a,this.b)}},
lg:{"^":"n:0;a,b",
$0:function(){P.bH(this.b,this.a.a)}},
ld:{"^":"n:29;a",
$1:function(a){var z=this.a
z.a=0
z.de(a)}},
le:{"^":"n:49;a",
$2:function(a,b){this.a.df(a,H.e(b,"$isaL"))},
$1:function(a){return this.$2(a,null)}},
lf:{"^":"n:0;a,b,c",
$0:function(){this.a.df(this.b,this.c)}},
lj:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eL(H.l(w.d,{func:1}),null)}catch(v){y=H.a7(v)
x=H.bo(v)
if(this.d){w=H.e(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.O(z).$isby){if(z instanceof P.aS&&z.gdG()>=4){if(z.gdG()===8){w=this.b
w.b=H.e(z.gi1(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.kh(new P.lk(t),null)
w.a=!1}}},
lk:{"^":"n:48;a",
$1:function(a){return this.a}},
li:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.x(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.cU(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a7(t)
y=H.bo(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
lh:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isal")
w=this.c
if(w.jI(z)&&w.e!=null){v=this.b
v.b=w.jz(z)
v.a=!1}}catch(u){y=H.a7(u)
x=H.bo(u)
w=H.e(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fF:{"^":"b;a,0b"},
k0:{"^":"b;$ti",
gp:function(a){var z,y,x,w
z={}
y=new P.aS(0,$.R,[P.m])
z.a=0
x=H.t(this,0)
w=H.l(new P.k2(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.k3(z,y),{func:1,ret:-1})
W.a1(this.a,this.b,w,!1,x)
return y}},
k2:{"^":"n;a,b",
$1:function(a){H.x(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.t(this.b,0)]}}},
k3:{"^":"n:0;a,b",
$0:function(){this.b.de(this.a.a)}},
df:{"^":"b;$ti"},
k1:{"^":"b;"},
bb:{"^":"b;"},
al:{"^":"b;a,b",
i:function(a){return H.i(this.a)},
$isa2:1},
md:{"^":"b;",$isnH:1},
mr:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eL()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
lv:{"^":"md;",
ke:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.l===$.R){a.$0()
return}P.h4(null,null,this,a,-1)}catch(x){z=H.a7(x)
y=H.bo(x)
P.cG(null,null,this,z,H.e(y,"$isaL"))}},
kf:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.l===$.R){a.$1(b)
return}P.h5(null,null,this,a,b,-1,c)}catch(x){z=H.a7(x)
y=H.bo(x)
P.cG(null,null,this,z,H.e(y,"$isaL"))}},
j_:function(a,b){return new P.lx(this,H.l(a,{func:1,ret:b}),b)},
cp:function(a){return new P.lw(this,H.l(a,{func:1,ret:-1}))},
dU:function(a,b){return new P.ly(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eL:function(a,b){H.l(a,{func:1,ret:b})
if($.R===C.l)return a.$0()
return P.h4(null,null,this,a,b)},
cU:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.R===C.l)return a.$1(b)
return P.h5(null,null,this,a,b,c,d)},
kd:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.R===C.l)return a.$2(b,c)
return P.ms(null,null,this,a,b,c,d,e,f)}},
lx:{"^":"n;a,b,c",
$0:function(){return this.a.eL(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lw:{"^":"n:3;a,b",
$0:function(){return this.a.ke(this.b)}},
ly:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.kf(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iN:function(a,b,c,d,e){return new H.aX(0,0,[d,e])},
iO:function(a,b,c){H.cd(a)
return H.j(H.mI(a,new H.aX(0,0,[b,c])),"$isew",[b,c],"$asew")},
ex:function(a,b){return new H.aX(0,0,[a,b])},
bZ:function(a,b,c,d){return new P.lp(0,0,[d])},
ix:function(a,b,c){var z,y
if(P.dG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bN()
C.a.h(y,a)
try{P.mo(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.f0(b,H.hk(z,"$iso"),", ")+c
return y.charCodeAt(0)==0?y:y},
d_:function(a,b,c){var z,y,x
if(P.dG(a))return b+"..."+c
z=new P.ai(b)
y=$.$get$bN()
C.a.h(y,a)
try{x=z
x.a=P.f0(x.gaM(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaM()+c
y=z.gaM()
return y.charCodeAt(0)==0?y:y},
dG:function(a){var z,y
for(z=0;y=$.$get$bN(),z<y.length;++z)if(a===y[z])return!0
return!1},
mo:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gS(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.B())return
w=H.i(z.gJ())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.B()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gJ();++x
if(!z.B()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gJ();++x
for(;z.B();t=s,s=r){r=z.gJ();++x
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
iP:function(a,b,c){var z=P.iN(null,null,null,b,c)
a.Z(0,new P.iQ(z,b,c))
return z},
ey:function(a,b){var z,y,x
z=P.bZ(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x)z.h(0,H.x(a[x],b))
return z},
d4:function(a){var z,y,x
z={}
if(P.dG(a))return"{...}"
y=new P.ai("")
try{C.a.h($.$get$bN(),a)
x=y
x.a=x.gaM()+"{"
z.a=!0
a.Z(0,new P.iW(z,y))
z=y
z.a=z.gaM()+"}"}finally{z=$.$get$bN()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaM()
return z.charCodeAt(0)==0?z:z},
lp:{"^":"ll;a,0b,0c,0d,0e,0f,r,$ti",
gS:function(a){var z=new P.fN(this,this.r,this.$ti)
z.c=this.e
return z},
gp:function(a){return this.a},
Y:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscD")!=null}else{y=this.fX(b)
return y}},
fX:function(a){var z=this.d
if(z==null)return!1
return this.c5(this.dq(z,a),a)>=0},
h:function(a,b){var z,y
H.x(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dB()
this.b=z}return this.d9(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dB()
this.c=y}return this.d9(y,b)}else return this.fN(b)},
fN:function(a){var z,y,x
H.x(a,H.t(this,0))
z=this.d
if(z==null){z=P.dB()
this.d=z}y=this.dg(a)
x=z[y]
if(x==null)z[y]=[this.cc(a)]
else{if(this.c5(x,a)>=0)return!1
x.push(this.cc(a))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.hU(this.c,b)
else return this.hR(b)},
hR:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.dq(z,a)
x=this.c5(y,a)
if(x<0)return!1
this.dI(y.splice(x,1)[0])
return!0},
d9:function(a,b){H.x(b,H.t(this,0))
if(H.e(a[b],"$iscD")!=null)return!1
a[b]=this.cc(b)
return!0},
hU:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscD")
if(z==null)return!1
this.dI(z)
delete a[b]
return!0},
dv:function(){this.r=this.r+1&67108863},
cc:function(a){var z,y
z=new P.cD(H.x(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dv()
return z},
dI:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dv()},
dg:function(a){return J.bQ(a)&0x3ffffff},
dq:function(a,b){return a[this.dg(b)]},
c5:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.L(a[y].a,b))return y
return-1},
n:{
dB:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cD:{"^":"b;a,0b,0c"},
fN:{"^":"b;a,b,0c,0d,$ti",
sdd:function(a){this.d=H.x(a,H.t(this,0))},
gJ:function(){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aG(z))
else{z=this.c
if(z==null){this.sdd(null)
return!1}else{this.sdd(H.x(z.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
$isaW:1,
n:{
lq:function(a,b,c){var z=new P.fN(a,b,[c])
z.c=a.e
return z}}},
ll:{"^":"jN;"},
iQ:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.q(0,H.x(a,this.b),H.x(b,this.c))}},
cr:{"^":"lr;",$iso:1,$isa:1},
T:{"^":"b;$ti",
gS:function(a){return new H.d3(a,this.gp(a),0,[H.cb(this,a,"T",0)])},
a8:function(a,b){return this.l(a,b)},
kj:function(a,b){var z,y
z=H.c([],[H.cb(this,a,"T",0)])
C.a.sp(z,this.gp(a))
for(y=0;y<this.gp(a);++y)C.a.q(z,y,this.l(a,y))
return z},
ki:function(a){return this.kj(a,!0)},
jr:function(a,b,c,d){var z
H.x(d,H.cb(this,a,"T",0))
P.b0(b,c,this.gp(a),null,null,null)
for(z=b;z<c;++z)this.q(a,z,d)},
i:function(a){return P.d_(a,"[","]")}},
eA:{"^":"ct;"},
iW:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
ct:{"^":"b;$ti",
Z:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.a5(this,"ct",0),H.a5(this,"ct",1)]})
for(z=J.b4(this.gay());z.B();){y=z.gJ()
b.$2(y,this.l(0,y))}},
gp:function(a){return J.ar(this.gay())},
i:function(a){return P.d4(this)},
$isF:1},
lQ:{"^":"b;$ti",
q:function(a,b,c){H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
throw H.d(P.V("Cannot modify unmodifiable map"))}},
iX:{"^":"b;$ti",
l:function(a,b){return this.a.l(0,b)},
q:function(a,b,c){this.a.q(0,H.x(b,H.t(this,0)),H.x(c,H.t(this,1)))},
Z:function(a,b){this.a.Z(0,H.l(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gp:function(a){var z=this.a
return z.gp(z)},
i:function(a){return J.ae(this.a)},
$isF:1},
fo:{"^":"lR;a,$ti"},
jP:{"^":"b;$ti",
au:function(a,b){var z
for(z=J.b4(H.j(b,"$iso",this.$ti,"$aso"));z.B();)this.h(0,z.gJ())},
i:function(a){return P.d_(this,"{","}")},
a8:function(a,b){var z,y,x
if(b<0)H.r(P.a_(b,0,null,"index",null))
for(z=P.lq(this,this.r,H.t(this,0)),y=0;z.B();){x=z.d
if(b===y)return x;++y}throw H.d(P.b5(b,this,"index",null,y))},
$iso:1,
$iseX:1},
jN:{"^":"jP;"},
lr:{"^":"b+T;"},
lR:{"^":"iX+lQ;$ti"}}],["","",,P,{"^":"",hI:{"^":"bR;a",
jK:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.b0(b,c,a.length,null,null,null)
z=$.$get$fH()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.b.H(a,y)
if(r===37){q=s+2
if(q<=c){p=H.cK(C.b.H(a,s))
o=H.cK(C.b.H(a,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.b.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ai("")
l=w.a+=C.b.t(a,x,y)
w.a=l+H.ba(r)
x=s
continue}}throw H.d(P.U("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.b.t(a,x,c)
k=l.length
if(v>=0)P.e0(a,u,c,v,t,k)
else{j=C.h.bq(k-1,4)+1
if(j===1)throw H.d(P.U("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aW(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.e0(a,u,c,v,t,i)
else{j=C.h.bq(i,4)
if(j===1)throw H.d(P.U("Invalid base64 encoding length ",a,c))
if(j>1)a=C.b.aW(a,c,c,j===2?"==":"=")}return a},
$asbR:function(){return[[P.a,P.m],P.h]},
n:{
e0:function(a,b,c,d,e,f){if(C.h.bq(f,4)!==0)throw H.d(P.U("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.U("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.U("Invalid base64 padding, more than two '=' characters",a,b))}}},hJ:{"^":"aU;a",
$asaU:function(){return[[P.a,P.m],P.h]}},bR:{"^":"b;$ti"},aU:{"^":"k1;$ti"},i9:{"^":"bR;",
$asbR:function(){return[P.h,[P.a,P.m]]}},iu:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},it:{"^":"aU;a",
fY:function(a,b,c){var z,y,x,w,v,u
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
if(w>b)v.a+=C.b.t(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hE(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asaU:function(){return[P.h,P.h]}},kD:{"^":"i9;a",
gjq:function(){return C.S}},kK:{"^":"aU;",
b6:function(a,b,c){var z,y,x,w
z=a.length
P.b0(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mb(0,0,x)
if(w.h8(a,b,z)!==z)w.dK(J.hw(a,z-1),0)
return new Uint8Array(x.subarray(0,H.mh(0,w.b,x.length)))},
cv:function(a){return this.b6(a,0,null)},
$asaU:function(){return[P.h,[P.a,P.m]]}},mb:{"^":"b;a,b,c",
dK:function(a,b){var z,y,x,w,v
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
h8:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.a_(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dK(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kE:{"^":"aU;a",
b6:function(a,b,c){var z,y,x,w,v
H.j(a,"$isa",[P.m],"$asa")
z=P.kF(!1,a,b,c)
if(z!=null)return z
y=J.ar(a)
P.b0(b,c,y,null,null,null)
x=new P.ai("")
w=new P.m8(!1,x,!0,0,0,0)
w.b6(a,b,y)
if(w.e>0){H.r(P.U("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.ba(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
cv:function(a){return this.b6(a,0,null)},
$asaU:function(){return[[P.a,P.m],P.h]},
n:{
kF:function(a,b,c,d){H.j(b,"$isa",[P.m],"$asa")
if(b instanceof Uint8Array)return P.kG(!1,b,c,d)
return},
kG:function(a,b,c,d){var z,y,x
z=$.$get$fu()
if(z==null)return
y=0===c
if(y&&!0)return P.dw(z,b)
x=b.length
d=P.b0(c,d,x,null,null,null)
if(y&&d===x)return P.dw(z,b)
return P.dw(z,b.subarray(c,d))},
dw:function(a,b){if(P.kI(b))return
return P.kJ(a,b)},
kJ:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.a7(y)}return},
kI:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kH:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.a7(y)}return}}},m8:{"^":"b;a,b,c,d,e,f",
b6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(a,"$isa",[P.m],"$asa")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.ma(c)
v=new P.m9(this,b,c,a)
$label0$0:for(u=J.bn(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.l(a,s)
if(typeof r!=="number")return r.bW()
if((r&192)!==128){q=P.U("Bad UTF-8 encoding 0x"+C.h.bm(r,16),a,s)
throw H.d(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.G,q)
if(z<=C.G[q]){q=P.U("Overlong encoding of 0x"+C.h.bm(z,16),a,s-x-1)
throw H.d(q)}if(z>1114111){q=P.U("Character outside valid Unicode range: 0x"+C.h.bm(z,16),a,s-x-1)
throw H.d(q)}if(!this.c||z!==65279)t.a+=H.ba(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.d0()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.l(a,o)
if(typeof r!=="number")return r.T()
if(r<0){m=P.U("Negative UTF-8 code unit: -0x"+C.h.bm(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.U("Bad UTF-8 encoding 0x"+C.h.bm(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},ma:{"^":"n:47;a",
$2:function(a,b){var z,y,x,w
H.j(a,"$isa",[P.m],"$asa")
z=this.a
for(y=J.bn(a),x=b;x<z;++x){w=y.l(a,x)
if(typeof w!=="number")return w.bW()
if((w&127)!==w)return x-b}return z-b}},m9:{"^":"n:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c4(this.d,a,b)}}}],["","",,P,{"^":"",
cc:function(a,b,c){var z
H.l(b,{func:1,ret:P.m,args:[P.h]})
z=H.ju(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.d(P.U(a,null,null))},
ib:function(a){if(a instanceof H.n)return a.i(0)
return"Instance of '"+H.b9(a)+"'"},
iR:function(a,b,c,d){var z,y
H.x(b,d)
z=J.iz(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.q(z,y,b)
return H.j(z,"$isa",[d],"$asa")},
iS:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gS(a);x.B();)C.a.h(y,H.x(x.gJ(),c))
if(b)return y
return H.j(J.cq(y),"$isa",z,"$asa")},
c4:function(a,b,c){var z,y
z=P.m
H.j(a,"$iso",[z],"$aso")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.j(a,"$isb6",[z],"$asb6")
y=a.length
c=P.b0(b,c,y,null,null,null)
return H.eS(b>0||c<y?C.a.ff(a,b,c):a)}if(!!J.O(a).$iseI)return H.jw(a,b,P.b0(b,c,a.length,null,null,null))
return P.k4(a,b,c)},
k4:function(a,b,c){var z,y,x,w
H.j(a,"$iso",[P.m],"$aso")
if(b<0)throw H.d(P.a_(b,0,J.ar(a),null,null))
z=c==null
if(!z&&c<b)throw H.d(P.a_(c,b,J.ar(a),null,null))
y=J.b4(a)
for(x=0;x<b;++x)if(!y.B())throw H.d(P.a_(b,0,x,null,null))
w=[]
if(z)for(;y.B();)w.push(y.gJ())
else for(x=b;x<c;++x){if(!y.B())throw H.d(P.a_(c,b,x,null,null))
w.push(y.gJ())}return H.eS(w)},
jF:function(a,b,c){return new H.iC(a,H.iD(a,!1,!0,!1))},
fq:function(){var z=H.jm()
if(z!=null)return P.kx(z,0,null)
throw H.d(P.V("'Uri.base' is not supported"))},
ck:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ae(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ib(a)},
u:function(a){return new P.fI(a)},
iT:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.m]})
z=H.c([],[d])
C.a.sp(z,a)
for(y=0;y<a;++y)C.a.q(z,y,b.$1(y))
return z},
dS:function(a){H.n8(a)},
kx:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.fp(b>0||c<c?C.b.t(a,b,c):a,5,null).geT()
else if(y===32)return P.fp(C.b.t(a,z,c),0,null).geT()}x=new Array(8)
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
if(P.h6(a,b,c,0,w)>=14)C.a.q(w,7,c)
v=w[1]
if(typeof v!=="number")return v.kp()
if(v>=b)if(P.h6(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.G()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.T()
if(typeof r!=="number")return H.B(r)
if(q<r)r=q
if(typeof s!=="number")return s.T()
if(s<u)s=r
else if(s<=v)s=v+1
if(typeof t!=="number")return t.T()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.T()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.ab(a,"..",s)))n=r>s+2&&C.b.ab(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ab(a,"file",b)){if(u<=b){if(!C.b.ab(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.t(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aW(a,s,r,"/");++r;++q;++c}else{a=C.b.t(a,b,s)+"/"+C.b.t(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ab(a,"http",b)){if(x&&t+3===s&&C.b.ab(a,"80",t+1))if(b===0&&!0){a=C.b.aW(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.t(a,b,t)+C.b.t(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.ab(a,"https",b)){if(x&&t+4===s&&C.b.ab(a,"443",t+1))if(b===0&&!0){a=C.b.aW(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.t(a,b,t)+C.b.t(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.t(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.lD(a,v,u,t,s,r,q,o)}return P.lS(a,b,c,v,u,t,s,r,q,o)},
fs:function(a,b){var z=P.h
return C.a.jw(H.c(a.split("&"),[z]),P.ex(z,z),new P.kA(b),[P.F,P.h,P.h])},
kv:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kw(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.a_(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cc(C.b.t(a,v,w),null,null)
if(typeof s!=="number")return s.d0()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cc(C.b.t(a,v,c),null,null)
if(typeof s!=="number")return s.d0()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fr:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.ky(a)
y=new P.kz(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.a_(a,w)
if(s===58){if(w===b){++w
if(C.b.a_(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaz(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kv(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.h.aP(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
mi:function(){var z,y,x,w,v
z=P.iT(22,new P.mk(),!0,P.M)
y=new P.mj(z)
x=new P.ml()
w=new P.mm()
v=H.e(y.$2(0,225),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isM")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isM")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isM"),"]",5)
v=H.e(y.$2(9,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isM")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isM"),"az",21)
v=H.e(y.$2(21,245),"$isM")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
h6:function(a,b,c,d,e){var z,y,x,w,v
H.j(e,"$isa",[P.m],"$asa")
z=$.$get$h7()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.q(e,v>>>5,y)}return d},
K:{"^":"b;"},
"+bool":0,
az:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.az))return!1
return this.a===b.a&&!0},
gW:function(a){var z=this.a
return(z^C.h.aP(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.hZ(H.jt(this))
y=P.bT(H.jr(this))
x=P.bT(H.jn(this))
w=P.bT(H.jo(this))
v=P.bT(H.jq(this))
u=P.bT(H.js(this))
t=P.i_(H.jp(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
n:{
hZ:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
i_:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bT:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"ak;"},
"+double":0,
bu:{"^":"b;a",
T:function(a,b){return C.h.T(this.a,H.e(b,"$isbu").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bu))return!1
return this.a===b.a},
gW:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.i5()
y=this.a
if(y<0)return"-"+new P.bu(0-y).i(0)
x=z.$1(C.h.a6(y,6e7)%60)
w=z.$1(C.h.a6(y,1e6)%60)
v=new P.i4().$1(y%1e6)
return""+C.h.a6(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
n:{
el:function(a,b,c,d,e,f){return new P.bu(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
i4:{"^":"n:28;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
i5:{"^":"n:28;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a2:{"^":"b;"},
eL:{"^":"a2;",
i:function(a){return"Throw of null."}},
aF:{"^":"a2;a,b,c,d",
gc4:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc3:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gc4()+y+x
if(!this.a)return w
v=this.gc3()
u=P.ck(this.b)
return w+v+": "+H.i(u)},
n:{
cg:function(a){return new P.aF(!1,null,null,a)},
cR:function(a,b,c){return new P.aF(!0,a,b,c)}}},
cu:{"^":"aF;e,f,a,b,c,d",
gc4:function(){return"RangeError"},
gc3:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
n:{
c3:function(a,b,c){return new P.cu(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.cu(b,c,!0,a,d,"Invalid value")},
b0:function(a,b,c,d,e,f){if(typeof a!=="number")return H.B(a)
if(0>a||a>c)throw H.d(P.a_(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.d(P.a_(b,a,c,"end",f))
return b}return c}}},
iv:{"^":"aF;e,p:f>,a,b,c,d",
gc4:function(){return"RangeError"},
gc3:function(){if(J.hs(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
n:{
b5:function(a,b,c,d,e){var z=H.aa(e!=null?e:J.ar(b))
return new P.iv(b,z,!0,a,c,"Index out of range")}}},
kt:{"^":"a2;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
V:function(a){return new P.kt(a)}}},
kq:{"^":"a2;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
cz:function(a){return new P.kq(a)}}},
de:{"^":"a2;a",
i:function(a){return"Bad state: "+this.a},
n:{
f_:function(a){return new P.de(a)}}},
hS:{"^":"a2;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.ck(z))+"."},
n:{
aG:function(a){return new P.hS(a)}}},
jh:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa2:1},
eZ:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa2:1},
hX:{"^":"a2;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fI:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
ij:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.i(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.t(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.H(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.a_(w,s)
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
m=""}l=C.b.t(w,o,p)
return y+n+l+m+"\n"+C.b.E(" ",x-o+n.length)+"^\n"},
n:{
U:function(a,b,c){return new P.ij(a,b,c)}}},
bU:{"^":"b;"},
m:{"^":"ak;"},
"+int":0,
o:{"^":"b;$ti",
cX:["fh",function(a,b){var z=H.a5(this,"o",0)
return new H.dy(this,H.l(b,{func:1,ret:P.K,args:[z]}),[z])}],
gp:function(a){var z,y
z=this.gS(this)
for(y=0;z.B();)++y
return y},
gaI:function(a){var z,y
z=this.gS(this)
if(!z.B())throw H.d(H.cp())
y=z.gJ()
if(z.B())throw H.d(H.iy())
return y},
a8:function(a,b){var z,y,x
if(b<0)H.r(P.a_(b,0,null,"index",null))
for(z=this.gS(this),y=0;z.B();){x=z.gJ()
if(b===y)return x;++y}throw H.d(P.b5(b,this,"index",null,y))},
i:function(a){return P.ix(this,"(",")")}},
aW:{"^":"b;$ti"},
a:{"^":"b;$ti",$iso:1},
"+List":0,
F:{"^":"b;$ti"},
E:{"^":"b;",
gW:function(a){return P.b.prototype.gW.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ak:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gW:function(a){return H.bC(this)},
i:function(a){return"Instance of '"+H.b9(this)+"'"},
toString:function(){return this.i(this)}},
aL:{"^":"b;"},
h:{"^":"b;",$iseM:1},
"+String":0,
ai:{"^":"b;aM:a<",
gp:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isnC:1,
n:{
f0:function(a,b,c){var z=J.b4(b)
if(!z.B())return a
if(c.length===0){do a+=H.i(z.gJ())
while(z.B())}else{a+=H.i(z.gJ())
for(;z.B();)a=a+c+H.i(z.gJ())}return a}}},
kA:{"^":"n:44;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.j(a,"$isF",[z,z],"$asF")
H.C(b)
y=J.bP(b).es(b,"=")
if(y===-1){if(b!=="")a.q(0,P.dD(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.t(b,0,y)
w=C.b.ar(b,y+1)
z=this.a
a.q(0,P.dD(x,0,x.length,z,!0),P.dD(w,0,w.length,z,!0))}return a}},
kw:{"^":"n:43;a",
$2:function(a,b){throw H.d(P.U("Illegal IPv4 address, "+a,this.a,b))}},
ky:{"^":"n:42;a",
$2:function(a,b){throw H.d(P.U("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kz:{"^":"n:41;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cc(C.b.t(this.b,a,b),null,16)
if(typeof z!=="number")return z.T()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cE:{"^":"b;bY:a<,b,c,d,eG:e>,f,r,0x,0y,0z,0Q,0ch",
shQ:function(a){var z=P.h
this.Q=H.j(a,"$isF",[z,z],"$asF")},
geV:function(){return this.b},
gcI:function(a){var z=this.c
if(z==null)return""
if(C.b.a5(z,"["))return C.b.t(z,1,z.length-1)
return z},
gbT:function(a){var z=this.d
if(z==null)return P.fV(this.a)
return z},
gcP:function(){var z=this.f
return z==null?"":z},
gen:function(){var z=this.r
return z==null?"":z},
cT:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.j(h,"$isF",[P.h,null],"$asF")
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
if(x&&!C.b.a5(d,"/"))d="/"+d
g=P.dC(g,0,0,h)
return new P.cE(i,j,c,f,d,g,this.r)},
eK:function(a,b){return this.cT(a,null,null,null,null,null,null,b,null,null)},
gcQ:function(){var z,y
if(this.Q==null){z=this.f
y=P.h
this.shQ(new P.fo(P.fs(z==null?"":z,C.m),[y,y]))}return this.Q},
geo:function(){return this.c!=null},
ger:function(){return this.f!=null},
gep:function(){return this.r!=null},
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
if(!!J.O(b).$isdv){if(this.a==b.gbY())if(this.c!=null===b.geo())if(this.b==b.geV())if(this.gcI(this)==b.gcI(b))if(this.gbT(this)==b.gbT(b))if(this.e===b.geG(b)){z=this.f
y=z==null
if(!y===b.ger()){if(y)z=""
if(z===b.gcP()){z=this.r
y=z==null
if(!y===b.gep()){if(y)z=""
z=z===b.gen()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
gW:function(a){var z=this.z
if(z==null){z=C.b.gW(this.i(0))
this.z=z}return z},
$isdv:1,
n:{
c9:function(a,b,c,d){var z,y,x,w,v,u
H.j(a,"$isa",[P.m],"$asa")
if(c===C.m){z=$.$get$h_().b
if(typeof b!=="string")H.r(H.aj(b))
z=z.test(b)}else z=!1
if(z)return b
H.x(b,H.a5(c,"bR",0))
y=c.gjq().cv(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.ba(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lS:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.m2(a,b,d)
else{if(d===b)P.bI(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.m3(a,z,e-1):""
x=P.lX(a,e,f,!1)
if(typeof f!=="number")return f.G()
w=f+1
if(typeof g!=="number")return H.B(g)
v=w<g?P.m_(P.cc(C.b.t(a,w,g),new P.lT(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lY(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.T()
t=h<i?P.dC(a,h+1,i,null):null
return new P.cE(j,y,x,v,u,t,i<c?P.lW(a,i+1,c):null)},
fV:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bI:function(a,b,c){throw H.d(P.U(c,a,b))},
m_:function(a,b){if(a!=null&&a===P.fV(b))return
return a},
lX:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.a_(a,b)===91){if(typeof c!=="number")return c.R()
z=c-1
if(C.b.a_(a,z)!==93)P.bI(a,b,"Missing end `]` to match `[` in host")
P.fr(a,b+1,z)
return C.b.t(a,b,c).toLowerCase()}if(typeof c!=="number")return H.B(c)
y=b
for(;y<c;++y)if(C.b.a_(a,y)===58){P.fr(a,b,c)
return"["+a+"]"}return P.m5(a,b,c)},
m5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.B(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.a_(a,z)
if(v===37){u=P.h1(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ai("")
s=C.b.t(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.t(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.J,t)
t=(C.J[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ai("")
if(y<z){x.a+=C.b.t(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.t,t)
t=(C.t[t]&1<<(v&15))!==0}else t=!1
if(t)P.bI(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.a_(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ai("")
s=C.b.t(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fW(v)
z+=q
y=z}}}}if(x==null)return C.b.t(a,b,c)
if(y<c){s=C.b.t(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
m2:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fY(C.b.H(a,b)))P.bI(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bI(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.t(a,b,c)
return P.lU(y?a.toLowerCase():a)},
lU:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
m3:function(a,b,c){return P.bJ(a,b,c,C.a7,!1)},
lY:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bJ(a,b,c,C.K,!0):C.r.l2(d,new P.lZ(),P.h).k(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a5(w,"/"))w="/"+w
return P.m4(w,e,f)},
m4:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a5(a,"/"))return P.m6(a,!z||c)
return P.m7(a)},
dC:function(a,b,c,d){var z,y
z={}
H.j(d,"$isF",[P.h,null],"$asF")
if(a!=null){if(d!=null)throw H.d(P.cg("Both query and queryParameters specified"))
return P.bJ(a,b,c,C.u,!0)}if(d==null)return
y=new P.ai("")
z.a=""
d.Z(0,new P.m0(new P.m1(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lW:function(a,b,c){return P.bJ(a,b,c,C.u,!0)},
h1:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.a_(a,b+1)
x=C.b.a_(a,z)
w=H.cK(y)
v=H.cK(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.h.aP(u,4)
if(z>=8)return H.f(C.w,z)
z=(C.w[z]&1<<(u&15))!==0}else z=!1
if(z)return H.ba(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.t(a,b,b+3).toUpperCase()
return},
fW:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.m])
C.a.q(y,0,37)
C.a.q(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.q(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.h.ib(a,6*w)&63|x
C.a.q(y,v,37)
C.a.q(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.q(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.c4(y,0,null)},
bJ:function(a,b,c,d,e){var z=P.h0(a,b,c,H.j(d,"$isa",[P.m],"$asa"),e)
return z==null?C.b.t(a,b,c):z},
h0:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.j(d,"$isa",[P.m],"$asa")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.T()
if(typeof c!=="number")return H.B(c)
if(!(y<c))break
c$0:{v=C.b.a_(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.h1(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.t,u)
u=(C.t[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bI(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.a_(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fW(v)}}if(w==null)w=new P.ai("")
w.a+=C.b.t(a,x,y)
w.a+=H.i(t)
if(typeof s!=="number")return H.B(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.T()
if(x<c)w.a+=C.b.t(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fZ:function(a){if(C.b.a5(a,"."))return!0
return C.b.es(a,"/.")!==-1},
m7:function(a){var z,y,x,w,v,u,t
if(!P.fZ(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.L(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.k(z,"/")},
m6:function(a,b){var z,y,x,w,v,u
if(!P.fZ(a))return!b?P.fX(a):a
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
C.a.q(z,0,P.fX(z[0]))}return C.a.k(z,"/")},
fX:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fY(J.hv(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.t(a,0,y)+"%3A"+C.b.ar(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lV:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.d(P.cg("Invalid URL encoding"))}}return z},
dD:function(a,b,c,d,e){var z,y,x,w,v
y=b
while(!0){if(!(y<c)){z=!0
break}x=C.b.H(a,y)
if(x<=127)if(x!==37)w=x===43
else w=!0
else w=!0
if(w){z=!1
break}++y}if(z){if(C.m!==d)w=!1
else w=!0
if(w)return C.b.t(a,b,c)
else v=new H.v(C.b.t(a,b,c))}else{v=H.c([],[P.m])
for(w=a.length,y=b;y<c;++y){x=C.b.H(a,y)
if(x>127)throw H.d(P.cg("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.d(P.cg("Truncated URI"))
C.a.h(v,P.lV(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.j(v,"$isa",[P.m],"$asa")
return new P.kE(!1).cv(v)},
fY:function(a){var z=a|32
return 97<=z&&z<=122}}},
lT:{"^":"n:40;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.G()
throw H.d(P.U("Invalid port",this.a,z+1))}},
lZ:{"^":"n:13;",
$1:function(a){return P.c9(C.a8,a,C.m,!1)}},
m1:{"^":"n:38;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.i(P.c9(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.i(P.c9(C.w,b,C.m,!0))}}},
m0:{"^":"n:35;a",
$2:function(a,b){var z,y
H.C(a)
if(b==null||typeof b==="string")this.a.$2(a,H.C(b))
else for(z=J.b4(H.hk(b,"$iso")),y=this.a;z.B();)y.$2(a,H.C(z.gJ()))}},
ku:{"^":"b;a,b,c",
geT:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.b.eu(y,"?",z)
w=y.length
if(x>=0){v=P.bJ(y,x+1,w,C.u,!1)
w=x}else v=null
z=new P.l6(this,"data",null,null,null,P.bJ(y,z,w,C.K,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
n:{
fp:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.d(P.U("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.d(P.U("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaz(z)
if(v!==44||x!==t+7||!C.b.ab(a,"base64",t+1))throw H.d(P.U("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.P.jK(a,s,y)
else{r=P.h0(a,s,y,C.u,!0)
if(r!=null)a=C.b.aW(a,s,y,r)}return new P.ku(a,z,c)}}},
mk:{"^":"n:34;",
$1:function(a){return new Uint8Array(96)}},
mj:{"^":"n:33;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hx(z,0,96,b)
return z}},
ml:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mm:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
lD:{"^":"b;a,b,c,d,e,f,r,x,0y",
geo:function(){return this.c>0},
geq:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.G()
y=this.e
if(typeof y!=="number")return H.B(y)
y=z+1<y
z=y}else z=!1
return z},
ger:function(){var z=this.f
if(typeof z!=="number")return z.T()
return z<this.r},
gep:function(){return this.r<this.a.length},
gdt:function(){return this.b===4&&C.b.a5(this.a,"http")},
gdu:function(){return this.b===5&&C.b.a5(this.a,"https")},
gbY:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdt()){this.x="http"
z="http"}else if(this.gdu()){this.x="https"
z="https"}else if(z===4&&C.b.a5(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a5(this.a,"package")){this.x="package"
z="package"}else{z=C.b.t(this.a,0,z)
this.x=z}return z},
geV:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.t(this.a,y,z-1):""},
gcI:function(a){var z=this.c
return z>0?C.b.t(this.a,z,this.d):""},
gbT:function(a){var z
if(this.geq()){z=this.d
if(typeof z!=="number")return z.G()
return P.cc(C.b.t(this.a,z+1,this.e),null,null)}if(this.gdt())return 80
if(this.gdu())return 443
return 0},
geG:function(a){return C.b.t(this.a,this.e,this.f)},
gcP:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.T()
return z<y?C.b.t(this.a,z+1,y):""},
gen:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.ar(y,z+1):""},
gcQ:function(){var z=this.f
if(typeof z!=="number")return z.T()
if(z>=this.r)return C.a9
z=P.h
return new P.fo(P.fs(this.gcP(),C.m),[z,z])},
cT:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.j(h,"$isF",[P.h,null],"$asF")
i=this.gbY()
z=i==="file"
y=this.c
j=y>0?C.b.t(this.a,this.b+3,y):""
f=this.geq()?this.gbT(this):null
y=this.c
if(y>0)c=C.b.t(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.t(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a5(d,"/"))d="/"+d
g=P.dC(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.ar(y,x+1)
return new P.cE(i,j,c,f,d,g,b)},
eK:function(a,b){return this.cT(a,null,null,null,null,null,null,b,null,null)},
gW:function(a){var z=this.y
if(z==null){z=C.b.gW(this.a)
this.y=z}return z},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.O(b).$isdv)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$isdv:1},
l6:{"^":"cE;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
dZ:function(a){var z=document.createElement("a")
return z},
e8:function(a,b){var z=document.createElement("canvas")
return z},
i6:function(a,b,c){var z,y
z=document.body
y=(z&&C.p).am(z,a,b,c)
y.toString
z=W.A
z=new H.dy(new W.ap(y),H.l(new W.i7(),{func:1,ret:P.K,args:[z]}),[z])
return H.e(z.gaI(z),"$isP")},
i8:function(a){H.e(a,"$iscl")
return"wheel"},
bv:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hA(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a7(x)}return z},
iw:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$iser")
try{J.hC(z,a)}catch(x){H.a7(x)}return z},
cB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fM:function(a,b,c,d){var z,y
z=W.cB(W.cB(W.cB(W.cB(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ha:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.R
if(z===C.l)return a
return z.dU(a,b)},
a9:{"^":"P;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
hG:{"^":"a9;",
i:function(a){return String(a)},
$ishG:1,
"%":"HTMLAnchorElement"},
nk:{"^":"a9;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
e1:{"^":"a9;",$ise1:1,"%":"HTMLBaseElement"},
ch:{"^":"a9;",$isch:1,"%":"HTMLBodyElement"},
cV:{"^":"a9;",
cY:function(a,b,c){var z=this.h9(a,b,P.mx(c,null))
return z},
h9:function(a,b,c){return a.getContext(b,c)},
$iscV:1,
"%":"HTMLCanvasElement"},
nn:{"^":"A;0p:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
np:{"^":"l5;0p:length=",
f5:function(a,b){var z=this.ha(a,this.fT(a,b))
return z==null?"":z},
fT:function(a,b){var z,y
z=$.$get$ed()
y=z[b]
if(typeof y==="string")return y
y=this.ig(a,b)
z[b]=y
return y},
ig:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.i0()+b
if(z in a)return z
return b},
ha:function(a,b){return a.getPropertyValue(b)},
gcq:function(a){return a.bottom},
gbc:function(a){return a.height},
gaS:function(a){return a.left},
gbj:function(a){return a.right},
gbn:function(a){return a.top},
gbo:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hW:{"^":"b;",
gaS:function(a){return this.f5(a,"left")}},
aV:{"^":"a9;",$isaV:1,"%":"HTMLDivElement"},
i1:{"^":"A;",
iV:function(a,b){return a.adoptNode(b)},
cZ:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
nq:{"^":"I;",
i:function(a){return String(a)},
"%":"DOMException"},
i2:{"^":"I;",
je:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
i3:{"^":"I;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bO(b,"$isaK",[P.ak],"$asaK"))return!1
z=J.W(b)
return a.left===z.gaS(b)&&a.top===z.gbn(b)&&a.width===z.gbo(b)&&a.height===z.gbc(b)},
gW:function(a){return W.fM(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcq:function(a){return a.bottom},
gbc:function(a){return a.height},
gaS:function(a){return a.left},
gbj:function(a){return a.right},
gbn:function(a){return a.top},
gbo:function(a){return a.width},
$isaK:1,
$asaK:function(){return[P.ak]},
"%":";DOMRectReadOnly"},
l4:{"^":"cr;dm:a<,b",
gp:function(a){return this.b.length},
l:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.f(z,b)
return H.e(z[b],"$isP")},
q:function(a,b,c){var z
H.e(c,"$isP")
z=this.b
if(b<0||b>=z.length)return H.f(z,b)
J.cO(this.a,c,z[b])},
h:function(a,b){J.dW(this.a,b)
return b},
gS:function(a){var z=this.ki(this)
return new J.as(z,z.length,0,[H.t(z,0)])},
$asT:function(){return[W.P]},
$aso:function(){return[W.P]},
$asa:function(){return[W.P]}},
P:{"^":"A;0kg:tagName=",
giZ:function(a){return new W.l7(a)},
gcu:function(a){return new W.l4(a,a.children)},
gdW:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.T()
if(x<0)x=-x*0
if(typeof w!=="number")return w.T()
if(w<0)w=-w*0
return new P.aK(z,y,x,w,[P.ak])},
i:function(a){return a.localName},
am:["bZ",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.eo
if(z==null){z=H.c([],[W.aC])
y=new W.eJ(z)
C.a.h(z,W.fK(null))
C.a.h(z,W.fT())
$.eo=y
d=y}else d=z
z=$.en
if(z==null){z=new W.h2(d)
$.en=z
c=z}else{z.a=d
c=z}}if($.aH==null){z=document
y=z.implementation
y=(y&&C.T).je(y,"")
$.aH=y
$.cX=y.createRange()
y=$.aH
y.toString
y=y.createElement("base")
H.e(y,"$ise1")
y.href=z.baseURI
z=$.aH.head;(z&&C.V).C(z,y)}z=$.aH
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$isch")}z=$.aH
if(!!this.$isch)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aH.body;(z&&C.p).C(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.Y(C.a6,a.tagName)){z=$.cX;(z&&C.M).fa(z,x)
z=$.cX
w=(z&&C.M).jc(z,b)}else{x.innerHTML=b
w=$.aH.createDocumentFragment()
for(z=J.W(w);y=x.firstChild,y!=null;)z.C(w,y)}z=$.aH.body
if(x==null?z!=null:x!==z)J.dY(x)
c.d1(w)
C.z.iV(document,w)
return w},function(a,b,c){return this.am(a,b,c,null)},"jd",null,null,"gl1",5,5,null],
fd:function(a,b,c,d){a.textContent=null
this.C(a,this.am(a,b,c,d))},
fc:function(a,b){return this.fd(a,b,null,null)},
aZ:function(a,b){return a.getAttribute(b)},
hS:function(a,b){return a.removeAttribute(b)},
fb:function(a,b,c){return a.setAttribute(b,c)},
$isP:1,
"%":";Element"},
i7:{"^":"n:23;",
$1:function(a){return!!J.O(H.e(a,"$isA")).$isP}},
ab:{"^":"I;",$isab:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
cl:{"^":"I;",
fO:function(a,b,c,d){return a.addEventListener(b,H.bk(H.l(c,{func:1,args:[W.ab]}),1),!1)},
$iscl:1,
"%":";EventTarget"},
nr:{"^":"a9;0p:length=","%":"HTMLFormElement"},
ip:{"^":"a9;","%":"HTMLHeadElement"},
iq:{"^":"I;0p:length=",
hY:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
ir:{"^":"ln;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b5(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$isA")
throw H.d(P.V("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isau:1,
$asau:function(){return[W.A]},
$asT:function(){return[W.A]},
$iso:1,
$aso:function(){return[W.A]},
$isa:1,
$asa:function(){return[W.A]},
$isir:1,
$asaA:function(){return[W.A]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
is:{"^":"i1;","%":"HTMLDocument"},
er:{"^":"a9;0type",
skl:function(a,b){a.type=H.C(b)},
$iser:1,
"%":"HTMLInputElement"},
bz:{"^":"dk;",$isbz:1,"%":"KeyboardEvent"},
iG:{"^":"a9;","%":"HTMLLabelElement"},
iU:{"^":"I;",
i:function(a){return String(a)},
$isiU:1,
"%":"Location"},
av:{"^":"dk;",$isav:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ap:{"^":"cr;a",
gaI:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.f_("No elements"))
if(y>1)throw H.d(P.f_("More than one element"))
return z.firstChild},
au:function(a,b){var z,y,x,w,v
H.j(b,"$iso",[W.A],"$aso")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.W(y),v=0;v<x;++v)w.C(y,z.firstChild)
return},
q:function(a,b,c){var z,y
H.e(c,"$isA")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.f(y,b)
J.cO(z,c,y[b])},
gS:function(a){var z=this.a.childNodes
return new W.ep(z,z.length,-1,[H.cb(C.aa,z,"aA",0)])},
gp:function(a){return this.a.childNodes.length},
l:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asT:function(){return[W.A]},
$aso:function(){return[W.A]},
$asa:function(){return[W.A]}},
A:{"^":"cl;0jZ:previousSibling=",
k0:function(a){var z=a.parentNode
if(z!=null)J.ce(z,a)},
k9:function(a,b){var z,y
try{z=a.parentNode
J.cO(z,b,a)}catch(y){H.a7(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.fg(a):z},
C:function(a,b){return a.appendChild(H.e(b,"$isA"))},
hT:function(a,b){return a.removeChild(b)},
hX:function(a,b,c){return a.replaceChild(b,c)},
$isA:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
jc:{"^":"lt;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b5(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$isA")
throw H.d(P.V("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isau:1,
$asau:function(){return[W.A]},
$asT:function(){return[W.A]},
$iso:1,
$aso:function(){return[W.A]},
$isa:1,
$asa:function(){return[W.A]},
$asaA:function(){return[W.A]},
"%":"NodeList|RadioNodeList"},
jA:{"^":"I;",
jc:function(a,b){return a.createContextualFragment(b)},
fa:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
nA:{"^":"a9;0p:length=","%":"HTMLSelectElement"},
cw:{"^":"a9;",$iscw:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
k5:{"^":"a9;",
am:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bZ(a,b,c,d)
z=W.i6("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ap(y).au(0,new W.ap(z))
return y},
hc:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
k6:{"^":"a9;",
am:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bZ(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.am(z.createElement("table"),b,c,d)
z.toString
z=new W.ap(z)
x=z.gaI(z)
x.toString
z=new W.ap(x)
w=z.gaI(z)
y.toString
w.toString
new W.ap(y).au(0,new W.ap(w))
return y},
ds:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
nD:{"^":"a9;",
am:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bZ(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.am(z.createElement("table"),b,c,d)
z.toString
z=new W.ap(z)
x=z.gaI(z)
y.toString
x.toString
new W.ap(y).au(0,new W.ap(x))
return y},
"%":"HTMLTableSectionElement"},
f3:{"^":"a9;",$isf3:1,"%":"HTMLTemplateElement"},
bc:{"^":"I;",$isbc:1,"%":"Touch"},
bd:{"^":"dk;",$isbd:1,"%":"TouchEvent"},
nF:{"^":"lP;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b5(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$isbc")
throw H.d(P.V("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isau:1,
$asau:function(){return[W.bc]},
$asT:function(){return[W.bc]},
$iso:1,
$aso:function(){return[W.bc]},
$isa:1,
$asa:function(){return[W.bc]},
$asaA:function(){return[W.bc]},
"%":"TouchList"},
dk:{"^":"ab;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
bG:{"^":"av;",
gjk:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.V("deltaY is not supported"))},
gjj:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.V("deltaX is not supported"))},
$isbG:1,
"%":"WheelEvent"},
kY:{"^":"cl;",
hZ:function(a,b){return a.requestAnimationFrame(H.bk(H.l(b,{func:1,ret:-1,args:[P.ak]}),1))},
h2:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fG:{"^":"A;",$isfG:1,"%":"Attr"},
nL:{"^":"i3;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bO(b,"$isaK",[P.ak],"$asaK"))return!1
z=J.W(b)
return a.left===z.gaS(b)&&a.top===z.gbn(b)&&a.width===z.gbo(b)&&a.height===z.gbc(b)},
gW:function(a){return W.fM(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbc:function(a){return a.height},
gbo:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nP:{"^":"mf;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b5(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$isA")
throw H.d(P.V("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isau:1,
$asau:function(){return[W.A]},
$asT:function(){return[W.A]},
$iso:1,
$aso:function(){return[W.A]},
$isa:1,
$asa:function(){return[W.A]},
$asaA:function(){return[W.A]},
"%":"MozNamedAttrMap|NamedNodeMap"},
l3:{"^":"eA;dm:a<",
Z:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.gay(),y=z.length,x=this.a,w=J.W(x),v=0;v<z.length;z.length===y||(0,H.y)(z),++v){u=z[v]
b.$2(u,w.aZ(x,u))}},
gay:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.e(z[w],"$isfG")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asct:function(){return[P.h,P.h]},
$asF:function(){return[P.h,P.h]}},
l7:{"^":"l3;a",
l:function(a,b){return J.cQ(this.a,H.C(b))},
q:function(a,b,c){J.hD(this.a,b,c)},
gp:function(a){return this.gay().length}},
l8:{"^":"k0;a,b,c,$ti"},
nM:{"^":"l8;a,b,c,$ti"},
l9:{"^":"df;a,b,c,d,e,$ti",n:{
a1:function(a,b,c,d,e){var z,y
z=W.ha(new W.la(c),W.ab)
y=z!=null
if(y&&!0){H.l(z,{func:1,args:[W.ab]})
if(y)J.hu(a,b,z,!1)}return new W.l9(0,a,b,z,!1,[e])}}},
la:{"^":"n:31;a",
$1:function(a){return this.a.$1(H.e(a,"$isab"))}},
c8:{"^":"b;a",
fz:function(a){var z,y
z=$.$get$dA()
if(z.gjD(z)){for(y=0;y<262;++y)z.q(0,C.a5[y],W.mM())
for(y=0;y<12;++y)z.q(0,C.B[y],W.mN())}},
aQ:function(a){return $.$get$fL().Y(0,W.bv(a))},
aF:function(a,b,c){var z,y,x
z=W.bv(a)
y=$.$get$dA()
x=y.l(0,H.i(z)+"::"+b)
if(x==null)x=y.l(0,"*::"+b)
if(x==null)return!1
return H.dI(x.$4(a,b,c,this))},
$isaC:1,
n:{
fK:function(a){var z,y
z=W.dZ(null)
y=window.location
z=new W.c8(new W.lz(z,y))
z.fz(a)
return z},
nN:[function(a,b,c,d){H.e(a,"$isP")
H.C(b)
H.C(c)
H.e(d,"$isc8")
return!0},"$4","mM",16,0,20],
nO:[function(a,b,c,d){var z,y,x
H.e(a,"$isP")
H.C(b)
H.C(c)
z=H.e(d,"$isc8").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","mN",16,0,20]}},
aA:{"^":"b;$ti",
gS:function(a){return new W.ep(a,this.gp(a),-1,[H.cb(this,a,"aA",0)])}},
eJ:{"^":"b;a",
aQ:function(a){return C.a.dO(this.a,new W.je(a))},
aF:function(a,b,c){return C.a.dO(this.a,new W.jd(a,b,c))},
$isaC:1},
je:{"^":"n:25;a",
$1:function(a){return H.e(a,"$isaC").aQ(this.a)}},
jd:{"^":"n:25;a,b,c",
$1:function(a){return H.e(a,"$isaC").aF(this.a,this.b,this.c)}},
lA:{"^":"b;",
fI:function(a,b,c,d){var z,y,x
this.a.au(0,c)
z=b.cX(0,new W.lB())
y=b.cX(0,new W.lC())
this.b.au(0,z)
x=this.c
x.au(0,C.H)
x.au(0,y)},
aQ:function(a){return this.a.Y(0,W.bv(a))},
aF:["fl",function(a,b,c){var z,y
z=W.bv(a)
y=this.c
if(y.Y(0,H.i(z)+"::"+b))return this.d.iW(c)
else if(y.Y(0,"*::"+b))return this.d.iW(c)
else{y=this.b
if(y.Y(0,H.i(z)+"::"+b))return!0
else if(y.Y(0,"*::"+b))return!0
else if(y.Y(0,H.i(z)+"::*"))return!0
else if(y.Y(0,"*::*"))return!0}return!1}],
$isaC:1},
lB:{"^":"n:26;",
$1:function(a){return!C.a.Y(C.B,H.C(a))}},
lC:{"^":"n:26;",
$1:function(a){return C.a.Y(C.B,H.C(a))}},
lI:{"^":"lA;e,a,b,c,d",
aF:function(a,b,c){if(this.fl(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cQ(a,"template")==="")return this.e.Y(0,b)
return!1},
n:{
fT:function(){var z,y,x,w,v
z=P.h
y=P.ey(C.A,z)
x=H.t(C.A,0)
w=H.l(new W.lJ(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.lI(y,P.bZ(null,null,null,z),P.bZ(null,null,null,z),P.bZ(null,null,null,z),null)
y.fI(null,new H.j_(C.A,w,[x,z]),v,null)
return y}}},
lJ:{"^":"n:13;",
$1:function(a){return"TEMPLATE::"+H.i(H.C(a))}},
lH:{"^":"b;",
aQ:function(a){var z=J.O(a)
if(!!z.$iseW)return!1
z=!!z.$isdg
if(z&&W.bv(a)==="foreignObject")return!1
if(z)return!0
return!1},
aF:function(a,b,c){if(b==="is"||C.b.a5(b,"on"))return!1
return this.aQ(a)},
$isaC:1},
ep:{"^":"b;a,b,c,0d,$ti",
sdr:function(a){this.d=H.x(a,H.t(this,0))},
B:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdr(J.ht(this.a,z))
this.c=z
return!0}this.sdr(null)
this.c=y
return!1},
gJ:function(){return this.d},
$isaW:1},
aC:{"^":"b;"},
lz:{"^":"b;a,b",$isnG:1},
h2:{"^":"b;a",
d1:function(a){new W.mc(this).$2(a,null)},
b4:function(a,b){if(b==null)J.dY(a)
else J.ce(b,a)},
i3:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hy(a)
x=J.cQ(y.gdm(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a7(t)}v="element unprintable"
try{v=J.ae(a)}catch(t){H.a7(t)}try{u=W.bv(a)
this.i2(H.e(a,"$isP"),b,z,v,u,H.e(y,"$isF"),H.C(x))}catch(t){if(H.a7(t) instanceof P.aF)throw t
else{this.b4(a,b)
window
s="Removing corrupted element "+H.i(v)
if(typeof console!="undefined")window.console.warn(s)}}},
i2:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.b4(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aQ(a)){this.b4(a,b)
window
z="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aF(a,"is",g)){this.b4(a,b)
window
z="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gay()
y=H.c(z.slice(0),[H.t(z,0)])
for(x=f.gay().length-1,z=f.a,w=J.W(z);x>=0;--x){if(x>=y.length)return H.f(y,x)
v=y[x]
if(!this.a.aF(a,J.hF(v),w.aZ(z,v))){window
u="Removing disallowed attribute <"+H.i(e)+" "+v+'="'+H.i(w.aZ(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.aZ(z,v)
w.hS(z,v)}}if(!!J.O(a).$isf3)this.d1(a.content)},
$isny:1},
mc:{"^":"n:46;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.i3(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b4(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hz(z)}catch(w){H.a7(w)
v=H.e(z,"$isA")
if(x){u=v.parentNode
if(u!=null)J.ce(u,v)}else J.ce(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isA")}}},
l5:{"^":"I+hW;"},
lm:{"^":"I+T;"},
ln:{"^":"lm+aA;"},
ls:{"^":"I+T;"},
lt:{"^":"ls+aA;"},
lO:{"^":"I+T;"},
lP:{"^":"lO+aA;"},
me:{"^":"I+T;"},
mf:{"^":"me+aA;"}}],["","",,P,{"^":"",
mx:function(a,b){var z={}
a.Z(0,new P.my(z))
return z},
ej:function(){var z=$.ei
if(z==null){z=J.cP(window.navigator.userAgent,"Opera",0)
$.ei=z}return z},
i0:function(){var z,y
z=$.ef
if(z!=null)return z
y=$.eg
if(y==null){y=J.cP(window.navigator.userAgent,"Firefox",0)
$.eg=y}if(y)z="-moz-"
else{y=$.eh
if(y==null){y=!P.ej()&&J.cP(window.navigator.userAgent,"Trident/",0)
$.eh=y}if(y)z="-ms-"
else z=P.ej()?"-o-":"-webkit-"}$.ef=z
return z},
lE:{"^":"b;",
ek:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cW:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.O(a)
if(!!y.$isaz)return new Date(a.a)
if(!!y.$isjE)throw H.d(P.cz("structured clone of RegExp"))
if(!!y.$isd8)return a
if(!!y.$isF){x=this.ek(a)
y=this.b
if(x>=y.length)return H.f(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.q(y,x,w)
a.Z(0,new P.lG(z,this))
return z.a}if(!!y.$isa){x=this.ek(a)
z=this.b
if(x>=z.length)return H.f(z,x)
w=z[x]
if(w!=null)return w
return this.jb(a,x)}throw H.d(P.cz("structured clone of other type"))},
jb:function(a,b){var z,y,x,w
z=J.bn(a)
y=z.gp(a)
x=new Array(y)
C.a.q(this.b,b,x)
for(w=0;w<y;++w)C.a.q(x,w,this.cW(z.l(a,w)))
return x}},
lG:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cW(b)}},
my:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
lF:{"^":"lE;a,b"},
ig:{"^":"cr;a,b",
gbv:function(){var z,y,x
z=this.b
y=H.a5(z,"T",0)
x=W.P
return new H.iY(new H.dy(z,H.l(new P.ih(),{func:1,ret:P.K,args:[y]}),[y]),H.l(new P.ii(),{func:1,ret:x,args:[y]}),[y,x])},
q:function(a,b,c){var z
H.e(c,"$isP")
z=this.gbv()
J.hB(z.b.$1(J.cf(z.a,b)),c)},
h:function(a,b){J.dW(this.b.a,b)},
gp:function(a){return J.ar(this.gbv().a)},
l:function(a,b){var z=this.gbv()
return z.b.$1(J.cf(z.a,b))},
gS:function(a){var z=P.iS(this.gbv(),!1,W.P)
return new J.as(z,z.length,0,[H.t(z,0)])},
$asT:function(){return[W.P]},
$aso:function(){return[W.P]},
$asa:function(){return[W.P]}},
ih:{"^":"n:23;",
$1:function(a){return!!J.O(H.e(a,"$isA")).$isP}},
ii:{"^":"n:55;",
$1:function(a){return H.k(H.e(a,"$isA"),"$isP")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lo:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lu:{"^":"b;$ti",
gbj:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.x(z+this.c,H.t(this,0))},
gcq:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.x(z+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bO(b,"$isaK",[P.ak],"$asaK"))return!1
z=this.a
y=J.W(b)
x=y.gaS(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbn(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.t(this,0)
if(H.x(z+this.c,w)===y.gbj(b)){if(typeof x!=="number")return x.G()
z=H.x(x+this.d,w)===y.gcq(b)}else z=!1}else z=!1}else z=!1
return z},
gW:function(a){var z,y,x,w,v
z=this.a
y=J.bQ(z)
x=this.b
w=J.bQ(x)
if(typeof z!=="number")return z.G()
v=H.t(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.x(x+this.d,v)
return P.lo(P.cC(P.cC(P.cC(P.cC(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aK:{"^":"lu;aS:a>,bn:b>,bo:c>,bc:d>,$ti"}}],["","",,P,{"^":"",eW:{"^":"dg;",$iseW:1,"%":"SVGScriptElement"},dg:{"^":"P;",
gcu:function(a){return new P.ig(a,new W.ap(a))},
am:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aC])
C.a.h(z,W.fK(null))
C.a.h(z,W.fT())
C.a.h(z,new W.lH())
c=new W.h2(new W.eJ(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).jd(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ap(w)
u=z.gaI(z)
for(z=J.W(v);x=u.firstChild,x!=null;)z.C(v,x)
return v},
$isdg:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":"",M:{"^":"b;",$iso:1,
$aso:function(){return[P.m]},
$isa:1,
$asa:function(){return[P.m]}}}],["","",,P,{"^":""}],["","",,P,{"^":"",hK:{"^":"I;",$ishK:1,"%":"WebGLBuffer"},ik:{"^":"I;",$isik:1,"%":"WebGLFramebuffer"},jx:{"^":"I;",$isjx:1,"%":"WebGLProgram"},da:{"^":"I;",
dP:function(a,b,c){return a.attachShader(b,c)},
av:function(a,b,c){return a.bindBuffer(b,c)},
j0:function(a,b,c){return a.bindFramebuffer(b,c)},
j1:function(a,b,c){return a.blendFunc(b,c)},
dV:function(a,b,c,d){return a.bufferData(b,c,d)},
j4:function(a,b){return a.clear(b)},
j5:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
j6:function(a,b){return a.clearDepth(b)},
j8:function(a,b){return a.compileShader(b)},
jf:function(a,b){return a.createShader(b)},
jh:function(a,b){return a.deleteProgram(b)},
ji:function(a,b){return a.deleteShader(b)},
jl:function(a,b){return a.depthFunc(b)},
jm:function(a,b){return a.disable(b)},
dY:function(a,b){return a.disableVertexAttribArray(b)},
jo:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cA:function(a,b){return a.enable(b)},
dZ:function(a,b){return a.enableVertexAttribArray(b)},
f0:function(a,b,c){return a.getActiveAttrib(b,c)},
f1:function(a,b,c){return a.getActiveUniform(b,c)},
f2:function(a,b,c){return a.getAttribLocation(b,c)},
d_:function(a,b){return a.getParameter(b)},
f4:function(a,b){return a.getProgramInfoLog(b)},
bX:function(a,b,c){return a.getProgramParameter(b,c)},
f6:function(a,b){return a.getShaderInfoLog(b)},
f7:function(a,b,c){return a.getShaderParameter(b,c)},
f8:function(a,b,c){return a.getUniformLocation(b,c)},
jG:function(a,b){return a.linkProgram(b)},
fe:function(a,b,c){return a.shaderSource(b,c)},
P:function(a,b,c){return a.uniform1f(b,c)},
V:function(a,b,c){return a.uniform1i(b,c)},
v:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eR:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eS:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
eU:function(a,b){return a.useProgram(b)},
kn:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ko:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isda:1,
"%":"WebGLRenderingContext"},jQ:{"^":"I;",$isjQ:1,"%":"WebGLShader"},ko:{"^":"I;",$isko:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",Z:{"^":"b;0a,0b,0c,0d,$ti",
shg:function(a){this.a=H.j(a,"$isa",[H.a5(this,"Z",0)],"$asa")},
sdA:function(a){this.b=H.l(a,{func:1,ret:P.K,args:[[P.o,H.a5(this,"Z",0)]]})},
sdw:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.m,[P.o,H.a5(this,"Z",0)]]})},
sdB:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.m,[P.o,H.a5(this,"Z",0)]]})},
c0:function(a){this.shg(H.c([],[a]))
this.sdA(null)
this.sdw(null)
this.sdB(null)},
d2:function(a,b,c){var z=H.a5(this,"Z",0)
H.l(b,{func:1,ret:P.K,args:[[P.o,z]]})
z={func:1,ret:-1,args:[P.m,[P.o,z]]}
H.l(a,z)
H.l(c,z)
this.sdA(b)
this.sdw(a)
this.sdB(c)},
br:function(a,b){return this.d2(a,null,b)},
hH:function(a){var z
H.j(a,"$iso",[H.a5(this,"Z",0)],"$aso")
z=this.b
if(z!=null)return z.$1(a)
return!0},
hm:function(a,b){var z
H.j(b,"$iso",[H.a5(this,"Z",0)],"$aso")
z=this.c
if(z!=null)z.$2(a,b)},
gp:function(a){return this.a.length},
gS:function(a){var z=this.a
return new J.as(z,z.length,0,[H.t(z,0)])},
a8:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.a5(this,"Z",0)
H.x(b,z)
z=[z]
if(this.hH(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.hm(x,H.c([b],z))}},
$iso:1,
n:{
cW:function(a){var z=new O.Z([a])
z.c0(a)
return z}}},d6:{"^":"b;0a,0b",
sc9:function(a){this.a=H.j(a,"$isa",[V.ag],"$asa")},
gp:function(a){return this.a.length},
gD:function(){var z=this.b
if(z==null){z=D.S()
this.b=z}return z},
ft:function(a){var z=this.b
if(!(z==null))z.L(a)},
aJ:function(){return this.ft(null)},
ga0:function(){var z=this.a
if(z.length>0)return C.a.gaz(z)
else return V.c_()},
eI:function(a){var z=this.a
if(a==null)C.a.h(z,V.c_())
else C.a.h(z,a)
this.aJ()},
cN:function(){var z=this.a
if(z.length>0){z.pop()
this.aJ()}}}}],["","",,E,{"^":"",cS:{"^":"b;"},at:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0aj:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sfu:function(a,b){this.y=H.j(b,"$isZ",[E.at],"$asZ")},
saj:function(a){this.z=H.e(a,"$isbw")},
dc:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.as(z,z.length,0,[H.t(z,0)]);z.B();){y=z.d
if(y.f==null)y.dc()}},
saa:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gD().K(0,this.geD())
y=this.c
if(y!=null)y.gD().h(0,this.geD())
x=new D.J("shape",z,this.c,this,[F.eY])
x.b=!0
this.a9(x)}},
sbk:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gD().K(0,this.geE())
y=this.f
this.f=a
if(a!=null)a.gD().h(0,this.geE())
this.dc()
x=new D.J("technique",y,this.f,this,[O.c5])
x.b=!0
this.a9(x)}},
saU:function(a){var z,y
if(!J.L(this.r,a)){z=this.r
if(z!=null)z.gD().K(0,this.geC())
if(a!=null)a.gD().h(0,this.geC())
this.r=a
y=new D.J("mover",z,a,this,[U.ah])
y.b=!0
this.a9(y)}},
aB:function(a){var z,y,x,w
z=this.r
y=z!=null?z.aY(a,this):null
if(!J.L(y,this.x)){x=this.x
this.x=y
w=new D.J("matrix",x,y,this,[V.ag])
w.b=!0
this.a9(w)}z=this.f
if(z!=null)z.aB(a)
for(z=this.y.a,z=new J.as(z,z.length,0,[H.t(z,0)]);z.B();)z.d.aB(a)},
aV:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga0())
else C.a.h(z.a,y.E(0,z.ga0()))
z.aJ()
a.eJ(this.f)
z=a.dy
x=(z&&C.a).gaz(z)
if(x!=null&&this.d!=null)x.k8(a,this)
for(z=this.y.a,z=new J.as(z,z.length,0,[H.t(z,0)]);z.B();)z.d.aV(a)
a.eH()
a.dx.cN()},
gD:function(){var z=this.z
if(z==null){z=D.S()
this.z=z}return z},
a9:function(a){var z=this.z
if(!(z==null))z.L(a)},
a2:function(){return this.a9(null)},
jP:[function(a){H.e(a,"$isz")
this.e=null
this.a9(a)},function(){return this.jP(null)},"l7","$1","$0","geD",0,2,1],
jQ:[function(a){this.a9(H.e(a,"$isz"))},function(){return this.jQ(null)},"l8","$1","$0","geE",0,2,1],
jO:[function(a){this.a9(H.e(a,"$isz"))},function(){return this.jO(null)},"l6","$1","$0","geC",0,2,1],
jM:[function(a){this.a9(H.e(a,"$isz"))},function(){return this.jM(null)},"l4","$1","$0","geB",0,2,1],
l3:[function(a,b){var z,y,x,w,v,u,t
H.j(b,"$iso",[E.at],"$aso")
for(z=b.length,y=this.geB(),x={func:1,ret:-1,args:[D.z]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.gaj()==null){t=new D.bw()
t.sak(null)
t.sb2(null)
t.c=null
t.d=0
u.saj(t)}t=u.gaj()
t.toString
H.l(y,x)
if(t.a==null)t.sak(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a2()},"$2","gjL",8,0,9],
l5:[function(a,b){var z,y
H.j(b,"$iso",[E.at],"$aso")
for(z=b.gS(b),y=this.geB();z.B();)z.gJ().gD().K(0,y)
this.a2()},"$2","gjN",8,0,9],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaJ:1,
n:{
cY:function(a,b,c,d,e,f){var z=new E.at()
z.a=d
z.b=!0
z.sfu(0,O.cW(E.at))
z.y.br(z.gjL(),z.gjN())
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
z.saa(0,e)
z.sbk(f)
z.saU(c)
return z}}},jG:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
sih:function(a){this.dy=H.j(a,"$isa",[O.c5],"$asa")},
sia:function(a){this.fr=H.j(a,"$isF",[P.h,A.db],"$asF")},
fo:function(a,b){var z,y
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
z=new O.d6()
y=[V.ag]
z.sc9(H.c([],y))
z.b=null
z.gD().h(0,new E.jI(this))
this.cy=z
z=new O.d6()
z.sc9(H.c([],y))
z.b=null
z.gD().h(0,new E.jJ(this))
this.db=z
z=new O.d6()
z.sc9(H.c([],y))
z.b=null
z.gD().h(0,new E.jK(this))
this.dx=z
this.sih(H.c([],[O.c5]))
z=this.dy;(z&&C.a).h(z,null)
this.sia(new H.aX(0,0,[P.h,A.db]))},
gk_:function(){var z=this.z
if(z==null){z=this.cy.ga0().E(0,this.db.ga0())
this.z=z}return z},
eJ:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaz(z):a;(z&&C.a).h(z,y)},
eH:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
jH:function(a,b){var z=new E.jG(a,b)
z.fo(a,b)
return z}}},jI:{"^":"n:8;a",
$1:function(a){var z
H.e(a,"$isz")
z=this.a
z.z=null
z.ch=null}},jJ:{"^":"n:8;a",
$1:function(a){var z
H.e(a,"$isz")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jK:{"^":"n:8;a",
$1:function(a){var z
H.e(a,"$isz")
z=this.a
z.ch=null
z.cx=null}},k8:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0aj:x<,0y,0z,0Q,0ch,0cx,0cy",
saj:function(a){this.x=H.e(a,"$isbw")},
fw:[function(a){H.e(a,"$isz")
this.kb()},function(){return this.fw(null)},"fv","$1","$0","gd5",0,2,1],
gjy:function(){var z,y,x
z=Date.now()
y=C.h.a6(P.el(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.az(z,!1)
return x/y},
dD:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.E()
if(typeof z!=="number")return H.B(z)
x=C.k.el(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.E()
w=C.k.el(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.f9(C.y,this.gka())}},
kb:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.ka(this),{func:1,ret:-1,args:[P.ak]})
C.O.h2(z)
C.O.hZ(z,W.ha(y,P.ak))}},"$0","gka",0,0,3],
k7:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dD()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.az(w,!1)
x.y=P.el(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sp(w.a,0)
w.aJ()
w=x.db
C.a.sp(w.a,0)
w.aJ()
w=x.dx
C.a.sp(w.a,0)
w.aJ()
w=x.dy;(w&&C.a).sp(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aV(this.e)}x=this.z
if(!(x==null))x.L(null)}catch(v){z=H.a7(v)
y=H.bo(v)
P.dS("Error: "+H.i(z))
P.dS("Stack: "+H.i(y))
throw H.d(z)}},
n:{
k9:function(a,b,c,d,e){var z,y,x,w
z=J.O(a)
if(!!z.$iscV)return E.f8(a,!0,!0,!0,!1)
y=W.e8(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcu(a).h(0,y)
w=E.f8(y,!0,!0,!0,!1)
w.a=a
return w},
f8:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.k8()
y=P.iO(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.q.cY(a,"webgl",y)
x=H.e(x==null?C.q.cY(a,"experimental-webgl",y):x,"$isda")
if(x==null)H.r(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jH(x,a)
w=new T.k7(x)
w.b=H.aa((x&&C.c).d_(x,3379))
w.c=H.aa(C.c.d_(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.kB(a)
v=new X.iF()
v.c=new X.aY(!1,!1,!1)
v.shP(P.bZ(null,null,null,P.m))
w.b=v
v=new X.j9(w)
v.f=0
v.r=V.aZ()
v.x=V.aZ()
v.Q=1
v.ch=1
w.c=v
v=new X.iV(w)
v.r=0
v.x=V.aZ()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kd(w)
v.e=0
v.f=V.aZ()
v.r=V.aZ()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sh3(H.c([],[[P.df,P.b]]))
v=w.z
u=document
t=W.av
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.a1(u,"contextmenu",H.l(w.ghu(),s),!1,t))
v=w.z
r=W.ab
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a1(a,"focus",H.l(w.ghx(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a1(a,"blur",H.l(w.ghq(),q),!1,r))
v=w.z
p=W.bz
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a1(u,"keyup",H.l(w.ghz(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a1(u,"keydown",H.l(w.ghy(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousedown",H.l(w.ghC(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mouseup",H.l(w.ghE(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousemove",H.l(w.ghD(),s),!1,t))
p=w.z
o=W.bG;(p&&C.a).h(p,W.a1(a,H.C(W.i8(a)),H.l(w.ghF(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a1(u,"mousemove",H.l(w.ghv(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a1(u,"mouseup",H.l(w.ghw(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a1(u,"pointerlockchange",H.l(w.ghG(),q),!1,r))
r=w.z
q=W.bd
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a1(a,"touchstart",H.l(w.ghN(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchend",H.l(w.ghL(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchmove",H.l(w.ghM(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.az(Date.now(),!1)
z.cy=0
z.dD()
return z}}},ka:{"^":"n:32;a",
$1:function(a){var z
H.n7(a)
z=this.a
if(z.ch){z.ch=!1
z.k7()}}}}],["","",,Z,{"^":"",fE:{"^":"b;a,b",$isnl:1,n:{
dx:function(a,b,c){var z
H.j(c,"$isa",[P.m],"$asa")
z=a.createBuffer()
C.c.av(a,b,z)
C.c.dV(a,b,new Int16Array(H.bh(c)),35044)
C.c.av(a,b,null)
return new Z.fE(b,z)}}},e4:{"^":"cS;a,b,c,d,e",
bz:function(a){var z,y,x
try{y=a.a
C.c.dZ(y,this.e)
C.c.kn(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.a7(x)
y=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(z))
throw H.d(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},kW:{"^":"b;a",$isnm:1},e5:{"^":"b;a,0b,c,d",
shb:function(a){this.b=H.j(a,"$isa",[Z.bV],"$asa")},
aR:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bz:function(a){var z,y
z=this.a
C.c.av(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bz(a)},
eQ:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.c.dY(x,z[y].e)
C.c.av(x,this.a.a,null)},
aV:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
w=v.c
u=w.a
C.c.av(y,u,w.b)
C.c.jo(y,v.a,v.b,5123,0)
C.c.av(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.h]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ae(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(y,", ")+"\nAttrs:   "+C.a.k(u,", ")},
$isnE:1},bV:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b9(this.c)+"'")+"]"}},be:{"^":"b;a",
gd3:function(a){var z,y
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
iX:function(a){var z,y,x
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
return $.$get$fD()},
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
n:{
ao:function(a){return new Z.be(a)}}}}],["","",,D,{"^":"",e9:{"^":"b;"},bw:{"^":"b;0a,0b,0c,0d",
sak:function(a){this.a=H.j(a,"$isa",[{func:1,ret:-1,args:[D.z]}],"$asa")},
sb2:function(a){this.b=H.j(a,"$isa",[{func:1,ret:-1,args:[D.z]}],"$asa")},
h:function(a,b){var z={func:1,ret:-1,args:[D.z]}
H.l(b,z)
if(this.a==null)this.sak(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.z]})
z=this.a
z=z==null?null:C.a.Y(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).K(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.Y(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).K(z,b)||y}return y},
L:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.z(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.Z(y,new D.ic(z))
y=this.b
if(!(y==null))C.a.Z(y,new D.id(z))
z=this.b
if(!(z==null))C.a.sp(z,0)
return!0},
kc:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.L(y)}}},
ao:function(){return this.kc(!0,!1)},
n:{
S:function(){var z=new D.bw()
z.sak(null)
z.sb2(null)
z.c=null
z.d=0
return z}}},ic:{"^":"n:22;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.z]})
z=this.a.a
z.b
a.$1(z)}},id:{"^":"n:22;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.z]})
z=this.a.a
z.b
a.$1(z)}},z:{"^":"b;a,0b"},cn:{"^":"z;c,d,a,0b,$ti"},co:{"^":"z;c,d,a,0b,$ti"},J:{"^":"z;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",e6:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e6))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},ev:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ev))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},iF:{"^":"b;0a,0b,0c,0d",
shP:function(a){this.d=H.j(a,"$iseX",[P.m],"$aseX")},
jW:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jS:function(a){this.c=a.b
this.d.K(0,a.a)
return!1}},ez:{"^":"d9;x,y,c,d,e,a,0b"},iV:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
b1:function(a,b){var z,y,x,w,v,u,t,s
z=new P.az(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.E()
v=b.b
u=this.ch
if(typeof v!=="number")return v.E()
t=new V.ac(y.a+x*w,y.b+v*u)
u=this.a.gbB()
s=new X.c0(a,V.aZ(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cM:function(a,b){this.r=a.a
return!1},
bi:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.f9()
if(typeof z!=="number")return z.bW()
this.r=(z&~y)>>>0
return!1},
bh:function(a,b){var z=this.d
if(z==null)return!1
z.L(this.b1(a,b))
return!0},
jX:function(a){return!1},
hB:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.az(Date.now(),!1)
y=this.f
x=new X.ez(c,a,this.a.gbB(),b,z,this)
x.b=!0
y.L(x)
this.y=z
this.x=V.aZ()}},aY:{"^":"b;a,b,c",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aY))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},c0:{"^":"d9;x,y,z,Q,ch,c,d,e,a,0b"},j9:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c6:function(a,b,c){var z,y,x
z=new P.az(Date.now(),!1)
y=this.a.gbB()
x=new X.c0(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cM:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.L(this.c6(a,b,!0))
return!0},
bi:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.f9()
if(typeof z!=="number")return z.bW()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.L(this.c6(a,b,!0))
return!0},
bh:function(a,b){var z=this.d
if(z==null)return!1
z.L(this.c6(a,b,!1))
return!0},
jY:function(a,b){return!1}},d9:{"^":"z;"},fc:{"^":"d9;x,y,z,Q,ch,c,d,e,a,0b"},kd:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
b1:function(a,b){var z,y,x,w
H.j(a,"$isa",[V.ac],"$asa")
z=new P.az(Date.now(),!1)
y=a.length>0?a[0]:V.aZ()
x=this.a.gbB()
w=new X.fc(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
jV:function(a){var z
H.j(a,"$isa",[V.ac],"$asa")
z=this.b
if(z==null)return!1
z.L(this.b1(a,!0))
return!0},
jT:function(a){var z
H.j(a,"$isa",[V.ac],"$asa")
z=this.c
if(z==null)return!1
z.L(this.b1(a,!0))
return!0},
jU:function(a){var z
H.j(a,"$isa",[V.ac],"$asa")
z=this.d
if(z==null)return!1
z.L(this.b1(a,!1))
return!0}},kB:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sh3:function(a){this.z=H.j(a,"$isa",[[P.df,P.b]],"$asa")},
gbB:function(){var z=this.a
return V.eU(0,0,C.q.gdW(z).c,C.q.gdW(z).d)},
dj:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ev(z,new X.aY(y,a.altKey,a.shiftKey))},
aO:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aY(y,a.altKey,a.shiftKey)},
cl:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aY(y,a.altKey,a.shiftKey)},
aE:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.R()
v=z.top
if(typeof x!=="number")return x.R()
return new V.ac(y-w,x-v)},
b3:function(a){return new V.a4(a.movementX,a.movementY)},
ce:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.ac])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
t=C.k.ap(u.pageX)
C.k.ap(u.pageY)
s=z.left
C.k.ap(u.pageX)
C.a.h(y,new V.ac(t-s,C.k.ap(u.pageY)-z.top))}return y},
aC:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.e6(z,new X.aY(y,a.altKey,a.shiftKey))},
ca:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.R()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.R()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
kJ:[function(a){this.f=!0},"$1","ghx",4,0,12],
kC:[function(a){this.f=!1},"$1","ghq",4,0,12],
kG:[function(a){H.e(a,"$isav")
if(this.f&&this.ca(a))a.preventDefault()},"$1","ghu",4,0,4],
kL:[function(a){var z
H.e(a,"$isbz")
if(!this.f)return
z=this.dj(a)
this.b.jW(z)},"$1","ghz",4,0,27],
kK:[function(a){var z
H.e(a,"$isbz")
if(!this.f)return
z=this.dj(a)
this.b.jS(z)},"$1","ghy",4,0,27],
kN:[function(a){var z,y,x,w
H.e(a,"$isav")
z=this.a
z.focus()
this.f=!0
this.aO(a)
if(this.x){y=this.aC(a)
x=this.b3(a)
if(this.d.cM(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aC(a)
w=this.aE(a)
if(this.c.cM(y,w))a.preventDefault()},"$1","ghC",4,0,4],
kP:[function(a){var z,y,x
H.e(a,"$isav")
this.aO(a)
z=this.aC(a)
if(this.x){y=this.b3(a)
if(this.d.bi(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bi(z,x))a.preventDefault()},"$1","ghE",4,0,4],
kI:[function(a){var z,y,x
H.e(a,"$isav")
if(!this.ca(a)){this.aO(a)
z=this.aC(a)
if(this.x){y=this.b3(a)
if(this.d.bi(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bi(z,x))a.preventDefault()}},"$1","ghw",4,0,4],
kO:[function(a){var z,y,x
H.e(a,"$isav")
this.aO(a)
z=this.aC(a)
if(this.x){y=this.b3(a)
if(this.d.bh(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bh(z,x))a.preventDefault()},"$1","ghD",4,0,4],
kH:[function(a){var z,y,x
H.e(a,"$isav")
if(!this.ca(a)){this.aO(a)
z=this.aC(a)
if(this.x){y=this.b3(a)
if(this.d.bh(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bh(z,x))a.preventDefault()}},"$1","ghv",4,0,4],
kQ:[function(a){var z,y
H.e(a,"$isbG")
this.aO(a)
z=new V.a4((a&&C.N).gjj(a),C.N.gjk(a)).A(0,180)
if(this.x){if(this.d.jX(z))a.preventDefault()
return}if(this.r)return
y=this.aE(a)
if(this.c.jY(z,y))a.preventDefault()},"$1","ghF",4,0,37],
kR:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aC(this.y)
x=this.aE(this.y)
this.d.hB(y,x,z)}},"$1","ghG",4,0,12],
kX:[function(a){var z
H.e(a,"$isbd")
this.a.focus()
this.f=!0
this.cl(a)
z=this.ce(a)
if(this.e.jV(z))a.preventDefault()},"$1","ghN",4,0,11],
kV:[function(a){var z
H.e(a,"$isbd")
this.cl(a)
z=this.ce(a)
if(this.e.jT(z))a.preventDefault()},"$1","ghL",4,0,11],
kW:[function(a){var z
H.e(a,"$isbd")
this.cl(a)
z=this.ce(a)
if(this.e.jU(z))a.preventDefault()},"$1","ghM",4,0,11]}}],["","",,D,{"^":"",ek:{"^":"b;",$isa3:1,$isaJ:1},a3:{"^":"b;",$isaJ:1},iH:{"^":"Z;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sfB:function(a){this.e=H.j(a,"$isa",[D.ek],"$asa")},
sfC:function(a){this.f=H.j(a,"$isa",[D.eO],"$asa")},
sfD:function(a){this.r=H.j(a,"$isa",[D.cv],"$asa")},
sfE:function(a){this.x=H.j(a,"$isa",[D.f5],"$asa")},
sfF:function(a){this.y=H.j(a,"$isa",[D.f6],"$asa")},
sfG:function(a){this.z=H.j(a,"$isa",[D.f7],"$asa")},
gD:function(){var z=this.Q
if(z==null){z=D.S()
this.Q=z}return z},
ac:function(a){var z=this.Q
if(!(z==null))z.L(a)},
hA:[function(a){var z
H.e(a,"$isz")
z=this.ch
if(!(z==null))z.L(a)},function(){return this.hA(null)},"kM","$1","$0","gdz",0,2,1],
kS:[function(a){var z,y,x
H.j(a,"$iso",[D.a3],"$aso")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.y)(a),++y){x=a[y]
if(x==null||this.fA(x))return!1}return!0},"$1","ghI",4,0,39],
kz:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.j(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gdz(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.e(b[u],"$isa3")
if(t instanceof D.cv)C.a.h(this.r,t)
s=t.z
if(s==null){s=new D.bw()
s.sak(null)
s.sb2(null)
s.c=null
s.d=0
t.z=s}H.l(x,w)
if(s.a==null)s.sak(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.cn(a,b,this,[z])
z.b=!0
this.ac(z)},"$2","ghn",8,0,17],
kU:[function(a,b){var z,y,x,w
z=D.a3
H.j(b,"$iso",[z],"$aso")
for(y=b.gS(b),x=this.gdz();y.B();){w=y.gJ()
C.a.K(this.e,w)
w.gD().K(0,x)}z=new D.co(a,b,this,[z])
z.b=!0
this.ac(z)},"$2","ghK",8,0,17],
fA:function(a){var z=C.a.Y(this.r,a)
return z},
$aso:function(){return[D.a3]},
$asZ:function(){return[D.a3]}},eO:{"^":"b;",$isa3:1,$isaJ:1},cv:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gD:function(){var z=this.z
if(z==null){z=D.S()
this.z=z}return z},
ac:[function(a){var z
H.e(a,"$isz")
z=this.z
if(!(z==null))z.L(a)},function(){return this.ac(null)},"kD","$1","$0","ghr",0,2,1],
$isa3:1,
$isaJ:1},f5:{"^":"b;",$isa3:1,$isaJ:1},f6:{"^":"b;",$isa3:1,$isaJ:1},f7:{"^":"b;",$isa3:1,$isaJ:1}}],["","",,V,{"^":"",
no:[function(a,b){if(typeof b!=="number")return b.R()
if(typeof a!=="number")return H.B(a)
return Math.abs(b-a)<=1e-9},"$2","j8",8,0,36],
nj:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.k.bq(a-b,z)
return(a<0?a+z:a)+b},
N:function(a,b,c){if(a==null)return C.b.ag("null",c)
return C.b.ag(C.k.eO($.p.$2(a,0)?0:a,b),c+b+1)},
bm:function(a,b,c){var z,y,x,w,v,u
H.j(a,"$isa",[P.q],"$asa")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.y)(a),++w){v=V.N(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.q(z,u,C.b.ag(z[u],x))}return z},
a0:{"^":"b;a,b,c",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}},
bt:{"^":"b;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bt))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}},
eD:{"^":"b;a,b,c,d,e,f,r,x,y",
ah:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eD))return!1
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
ag:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ah:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
ev:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.p.$2(a2,0))return V.c_()
a3=1/a2
a4=-w
a5=-i
return V.aI((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
E:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isag")
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
return V.aI(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cV:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.D(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
aX:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.X(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
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
i:function(a){return this.N()},
em:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
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
N:function(){return this.em("",3,0)},
F:function(a){return this.em(a,3,0)},
n:{
c_:function(){var z=$.eH
if(z==null){z=V.aI(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eH=z}return z},
aI:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ag(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eG:function(a,b,c){return V.aI(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
eF:function(a,b,c,d){return V.aI(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eE:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aI(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)}}},
ac:{"^":"b;a,b",
R:function(a,b){return new V.ac(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"},
n:{
aZ:function(){var z=$.eP
if(z==null){z=new V.ac(0,0)
$.eP=z}return z}}},
X:{"^":"b;a,b,c",
G:function(a,b){return new V.X(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a,b){return new V.X(this.a-b.a,this.b-b.b,this.c-b.c)},
E:function(a,b){return new V.X(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"},
n:{
eQ:function(){var z=$.b_
if(z==null){z=new V.X(0,0,0)
$.b_=z}return z}}},
c2:{"^":"b;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c2))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}},
eT:{"^":"b;a,b,c,d",
gaA:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eT))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"},
n:{
eU:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eT(a,b,c,d)}}},
a4:{"^":"b;a,b",
jF:[function(a){return Math.sqrt(this.I(this))},"$0","gp",1,0,16],
I:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.E()
if(typeof y!=="number")return H.B(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.E()
if(typeof w!=="number")return H.B(w)
return z*y+x*w},
E:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.E()
y=this.b
if(typeof y!=="number")return y.E()
return new V.a4(z*b,y*b)},
A:function(a,b){var z,y
if($.p.$2(b,0)){z=$.fv
if(z==null){z=new V.a4(0,0)
$.fv=z}return z}z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.a4(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}},
D:{"^":"b;a,b,c",
jF:[function(a){return Math.sqrt(this.I(this))},"$0","gp",1,0,16],
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cL:function(a,b){var z,y,x
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
U:function(a){return new V.D(-this.a,-this.b,-this.c)},
E:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if($.p.$2(b,0))return V.bD()
return new V.D(this.a/b,this.b/b,this.c/b)},
ew:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.D))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"},
n:{
bD:function(){var z=$.fz
if(z==null){z=new V.D(0,0,0)
$.fz=z}return z},
fA:function(){var z=$.cA
if(z==null){z=new V.D(0,0,1)
$.cA=z}return z}}}}],["","",,U,{"^":"",hR:{"^":"e9;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c2:function(a){var z=V.nj(a,this.c,this.b)
return z},
gD:function(){var z=this.y
if(z==null){z=D.S()
this.y=z}return z},
a3:function(a){var z=this.y
if(!(z==null))z.L(a)},
seW:function(a,b){},
sex:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c2(z)}z=new D.J("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.a3(z)}},
sez:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c2(z)}z=new D.J("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.a3(z)}},
sa4:function(a,b){var z,y
b=this.c2(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.J("location",y,b,this,[P.q])
z.b=!0
this.a3(z)}},
sey:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.J("maximumVelocity",y,a,this,[P.q])
z.b=!0
this.a3(z)}},
sa1:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.J("velocity",x,a,this,[P.q])
z.b=!0
this.a3(z)}},
sdX:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.J("dampening",y,a,this,[P.q])
z.b=!0
this.a3(z)}},
aB:function(a){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa4(0,this.d+y*a)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sa1(y)}},
n:{
eb:function(){var z=new U.hR()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ec:{"^":"ah;0a,0b",
gD:function(){var z=this.b
if(z==null){z=D.S()
this.b=z}return z},
aY:function(a,b){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ec))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")},
n:{
bS:function(a){var z=new U.ec()
z.a=a
return z}}},eq:{"^":"Z;0e,0f,0r,0a,0b,0c,0d",
gD:function(){var z=this.e
if(z==null){z=D.S()
this.e=z}return z},
a3:[function(a){var z
H.e(a,"$isz")
z=this.e
if(!(z==null))z.L(a)},function(){return this.a3(null)},"aK","$1","$0","gbt",0,2,1],
kq:[function(a,b){var z,y,x,w,v,u,t,s
z=U.ah
H.j(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gbt(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){s=t.gD()
s.toString
H.l(x,w)
if(s.a==null)s.sak(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.cn(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gfH",8,0,15],
kT:[function(a,b){var z,y,x
z=U.ah
H.j(b,"$iso",[z],"$aso")
for(y=b.gS(b),x=this.gbt();y.B();)y.gJ().gD().K(0,x)
z=new D.co(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","ghJ",8,0,15],
aY:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.T()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.as(z,z.length,0,[H.t(z,0)]),x=null;z.B();){y=z.d
if(y!=null){w=y.aY(a,b)
if(w!=null)x=x==null?w:w.E(0,x)}}this.f=x==null?V.c_():x
z=this.e
if(!(z==null))z.ao()}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eq))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.L(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$aso:function(){return[U.ah]},
$asZ:function(){return[U.ah]},
$isah:1,
n:{
cZ:function(a){var z=new U.eq()
z.c0(U.ah)
z.br(z.gfH(),z.ghJ())
z.e=null
z.f=V.c_()
z.r=0
return z}}},ah:{"^":"e9;"},kC:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gD:function(){var z=this.fx
if(z==null){z=D.S()
this.fx=z}return z},
a3:[function(a){var z
H.e(a,"$isz")
z=this.fx
if(!(z==null))z.L(a)},function(){return this.a3(null)},"aK","$1","$0","gbt",0,2,1],
iY:function(a){var z,y
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.S()
z.b=y
z=y}else z=y
z.h(0,this.ghj())
z=this.a.c
y=z.d
if(y==null){y=D.S()
z.d=y
z=y}else z=y
z.h(0,this.ghk())
z=this.a.c
y=z.c
if(y==null){y=D.S()
z.c=y
z=y}else z=y
z.h(0,this.ghl())
z=this.a.d
y=z.f
if(y==null){y=D.S()
z.f=y
z=y}else z=y
z.h(0,this.ghh())
z=this.a.d
y=z.d
if(y==null){y=D.S()
z.d=y
z=y}else z=y
z.h(0,this.ghi())
z=this.a.e
y=z.b
if(y==null){y=D.S()
z.b=y
z=y}else z=y
z.h(0,this.gil())
z=this.a.e
y=z.d
if(y==null){y=D.S()
z.d=y
z=y}else z=y
z.h(0,this.gik())
z=this.a.e
y=z.c
if(y==null){y=D.S()
z.c=y
z=y}else z=y
z.h(0,this.gij())
return!0},
at:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.U()
z=-z}if(this.r){if(typeof y!=="number")return y.U()
y=-y}return new V.a4(z,y)},
kw:[function(a){a=H.k(H.e(a,"$isz"),"$isc0")
if(!J.L(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghj",4,0,2],
kx:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isz"),"$isc0")
if(!this.cx)return
if(this.ch){z=a.d.R(0,a.y)
z=new V.a4(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.R(0,a.y)
z=this.at(new V.a4(y.a,y.b).E(0,2).A(0,z.gaA()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.U()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sa1(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.U()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sa1(-z*10*y)}else{z=a.c
y=a.d
x=y.R(0,a.y)
w=this.at(new V.a4(x.a,x.b).E(0,2).A(0,z.gaA()))
x=this.c
v=w.a
if(typeof v!=="number")return v.U()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa4(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.U()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa4(0,-u*v+x)
this.b.sa1(0)
this.c.sa1(0)
y=y.R(0,a.z)
this.dx=this.at(new V.a4(y.a,y.b).E(0,2).A(0,z.gaA()))}this.aK()},"$1","ghk",4,0,2],
ky:[function(a){var z,y,x
H.e(a,"$isz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.U()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sa1(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.U()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sa1(-y*10*z)
this.aK()}},"$1","ghl",4,0,2],
ku:[function(a){if(H.k(H.e(a,"$isz"),"$isez").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ghh",4,0,2],
kv:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isz"),"$isc0")
if(!J.L(this.d,a.x.b))return
z=a.c
y=a.d
x=y.R(0,a.y)
w=this.at(new V.a4(x.a,x.b).E(0,2).A(0,z.gaA()))
x=this.c
v=w.a
if(typeof v!=="number")return v.U()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa4(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.U()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa4(0,-u*v+x)
this.b.sa1(0)
this.c.sa1(0)
y=y.R(0,a.z)
this.dx=this.at(new V.a4(y.a,y.b).E(0,2).A(0,z.gaA()))
this.aK()},"$1","ghi",4,0,2],
l0:[function(a){H.e(a,"$isz")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gil",4,0,2],
l_:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isz"),"$isfc")
if(!this.cx)return
if(this.ch){z=a.d.R(0,a.y)
z=new V.a4(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.R(0,a.y)
z=this.at(new V.a4(y.a,y.b).E(0,2).A(0,z.gaA()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.U()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sa1(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.U()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sa1(-z*10*y)}else{z=a.c
y=a.d
x=y.R(0,a.y)
w=this.at(new V.a4(x.a,x.b).E(0,2).A(0,z.gaA()))
x=this.c
v=w.a
if(typeof v!=="number")return v.U()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa4(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.U()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa4(0,-u*v+x)
this.b.sa1(0)
this.c.sa1(0)
y=y.R(0,a.z)
this.dx=this.at(new V.a4(y.a,y.b).E(0,2).A(0,z.gaA()))}this.aK()},"$1","gik",4,0,2],
kZ:[function(a){var z,y,x
H.e(a,"$isz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.U()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sa1(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.U()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sa1(-y*10*z)
this.aK()}},"$1","gij",4,0,2],
aY:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.T()
if(z<y){this.dy=y
x=a.y
this.c.aB(x)
this.b.aB(x)
z=V.eE(this.b.d)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.E(0,V.aI(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isah:1,
n:{
ft:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.kC()
y=U.eb()
y.seW(0,!0)
y.sex(6.283185307179586)
y.sez(0)
y.sa4(0,0)
y.sey(100)
y.sa1(0)
y.sdX(0.5)
z.b=y
x=z.gbt()
y.gD().h(0,x)
y=U.eb()
y.seW(0,!0)
y.sex(6.283185307179586)
y.sez(0)
y.sa4(0,0)
y.sey(100)
y.sa1(0)
y.sdX(0.5)
z.c=y
y.gD().h(0,x)
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
w=new X.aY(b,!1,!1)
v=z.d
z.d=w
y=new D.J("modifiers",v,w,z,[X.aY])
y.b=!0
z.a3(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.J("invertX",y,!1,z,[P.K])
y.b=!0
z.a3(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.J("invertY",y,!1,z,[P.K])
y.b=!0
z.a3(y)}z.iY(c)
return z}}}}],["","",,M,{"^":"",ia:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
sfW:function(a,b){this.d=H.j(b,"$isZ",[E.at],"$asZ")},
aL:[function(a){var z
H.e(a,"$isz")
z=this.x
if(!(z==null))z.L(a)},function(){return this.aL(null)},"kr","$1","$0","gas",0,2,1],
kE:[function(a,b){var z,y,x,w,v,u,t,s
z=E.at
H.j(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gas(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.gaj()==null){s=new D.bw()
s.sak(null)
s.sb2(null)
s.c=null
s.d=0
t.saj(s)}s=t.gaj()
s.toString
H.l(x,w)
if(s.a==null)s.sak(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.cn(a,b,this,[z])
z.b=!0
this.aL(z)},"$2","ghs",8,0,9],
kF:[function(a,b){var z,y,x
z=E.at
H.j(b,"$iso",[z],"$aso")
for(y=b.gS(b),x=this.gas();y.B();)y.gJ().gD().K(0,x)
z=new D.co(a,b,this,[z])
z.b=!0
this.aL(z)},"$2","ght",8,0,9],
sbk:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gD().K(0,this.gas())
y=this.c
this.c=a
if(a!=null)a.gD().h(0,this.gas())
z=new D.J("technique",y,this.c,this,[O.c5])
z.b=!0
this.aL(z)}},
gD:function(){var z=this.x
if(z==null){z=D.S()
this.x=z}return z},
aV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
a.eJ(this.c)
z=this.b
z.toString
y=a.a
C.c.j0(y,36160,null)
C.c.cA(y,2884)
C.c.cA(y,2929)
C.c.jl(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.B(x)
t=C.k.ap(u*x)
u=v.b
if(typeof w!=="number")return H.B(w)
s=C.k.ap(u*w)
u=C.k.ap(v.c*x)
a.c=u
v=C.k.ap(v.d*w)
a.d=v
C.c.ko(y,t,s,u,v)
C.c.j6(y,z.c)
z=z.a
C.c.j5(y,z.a,z.b,z.c,z.d)
C.c.j4(y,16640)
z=this.a
y=a.c
v=a.d
u=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(u*0.5)
n=V.aI(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.eI(n)
y=$.eN
if(y==null){y=V.eQ()
v=$.fy
if(v==null){v=new V.D(0,1,0)
$.fy=v}u=$.fw
if(u==null){u=new V.D(0,0,-1)
$.fw=u}m=u.A(0,Math.sqrt(u.I(u)))
v=v.aG(m)
l=v.A(0,Math.sqrt(v.I(v)))
k=m.aG(l)
j=new V.D(y.a,y.b,y.c)
i=l.U(0).I(j)
h=k.U(0).I(j)
g=m.U(0).I(j)
y=V.aI(l.a,k.a,m.a,i,l.b,k.b,m.b,h,l.c,k.c,m.c,g,0,0,0,1)
$.eN=y
f=y}else f=y
y=z.b
if(y!=null){e=y.aY(a,z)
if(e!=null)f=e.E(0,f)}a.db.eI(f)
z=this.c
if(z!=null)z.aB(a)
for(z=this.d.a,z=new J.as(z,z.length,0,[H.t(z,0)]);z.B();)z.d.aB(a)
for(z=this.d.a,z=new J.as(z,z.length,0,[H.t(z,0)]);z.B();)z.d.aV(a)
this.a.toString
a.cy.cN()
a.db.cN()
this.b.toString
a.eH()},
$isnz:1}}],["","",,A,{"^":"",e_:{"^":"b;a,b,c"},hH:{"^":"b;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
jp:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
C.c.dZ(w.a,w.c)}},
jn:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
C.c.dY(w.a,w.c)}}},j0:{"^":"db;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ax,0an,0bE,0e_,0bF,0bG,0e0,0e1,0bH,0bI,0e2,0e3,0bJ,0bK,0e4,0e5,0bL,0e6,0e7,0bM,0e8,0e9,0bN,0bO,0bP,0ea,0eb,0bQ,0bR,0ec,0ed,0bS,0ee,0cB,0ef,0cC,0eg,0cD,0eh,0cE,0ei,0cF,0ej,0cG,a,b,0c,0d,0e,0f,0r,0x,0y",
sfR:function(a){this.r1=H.j(a,"$isa",[A.aE],"$asa")},
sh1:function(a){this.cB=H.j(a,"$isa",[A.dm],"$asa")},
shO:function(a){this.cC=H.j(a,"$isa",[A.dp],"$asa")},
sic:function(a){this.cD=H.j(a,"$isa",[A.dq],"$asa")},
sio:function(a){this.cE=H.j(a,"$isa",[A.dr],"$asa")},
sip:function(a){this.cF=H.j(a,"$isa",[A.ds],"$asa")},
siq:function(a){this.cG=H.j(a,"$isa",[A.dt],"$asa")},
fn:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
a2.iu(z)
a2.iB(z)
a2.iv(z)
a2.iJ(z)
a2.iK(z)
a2.iD(z)
a2.iO(z)
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
x.iy(z)
x.it(z)
x.iw(z)
x.iz(z)
x.iH(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.iF(z)
x.iG(z)}x.iC(z)
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
x.ix(z)
x.iE(z)
x.iI(z)
x.iL(z)
x.iM(z)
x.iN(z)
x.iA(z)}r=z.a+="// === Main ===\n"
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
this.e=this.dk(s,35633)
this.f=this.dk(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
C.c.dP(x,v,this.e)
C.c.dP(x,this.r,this.f)
C.c.jG(x,this.r)
if(!H.dI(C.c.bX(x,this.r,35714))){m=C.c.f4(x,this.r)
C.c.jh(x,this.r)
H.r(P.u("Failed to link shader: "+H.i(m)))}this.i7()
this.i9()
this.Q=this.x.l(0,"posAttr")
this.cx=this.x.l(0,"normAttr")
this.ch=this.x.l(0,"binmAttr")
this.cy=this.x.l(0,"txt2DAttr")
this.db=this.x.l(0,"txtCubeAttr")
this.dx=this.x.l(0,"bendAttr")
if(a2.fr)this.id=H.k(this.y.m(0,"invViewMat"),"$isaE")
if(y)this.dy=H.k(this.y.m(0,"objMat"),"$isaE")
if(w)this.fr=H.k(this.y.m(0,"viewObjMat"),"$isaE")
this.fy=H.k(this.y.m(0,"projViewObjMat"),"$isaE")
if(a2.x2)this.k1=H.k(this.y.m(0,"txt2DMat"),"$isdn")
if(a2.y1)this.k2=H.k(this.y.m(0,"txtCubeMat"),"$isaE")
if(a2.y2)this.k3=H.k(this.y.m(0,"colorMat"),"$isaE")
this.sfR(H.c([],[A.aE]))
y=a2.ax
if(y>0){this.k4=H.e(this.y.m(0,"bendMatCount"),"$isH")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.l(0,v)
if(k==null)H.r(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaE"))}}y=a2.a
if(y!==C.d){this.r2=H.k(this.y.m(0,"emissionClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.e:this.rx=H.k(this.y.m(0,"emissionTxt"),"$isam")
this.x1=H.k(this.y.m(0,"nullEmissionTxt"),"$isH")
break
case C.f:this.ry=H.k(this.y.m(0,"emissionTxt"),"$isan")
this.x1=H.k(this.y.m(0,"nullEmissionTxt"),"$isH")
break}}y=a2.b
if(y!==C.d){this.x2=H.k(this.y.m(0,"ambientClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.e:this.y1=H.k(this.y.m(0,"ambientTxt"),"$isam")
this.ax=H.k(this.y.m(0,"nullAmbientTxt"),"$isH")
break
case C.f:this.y2=H.k(this.y.m(0,"ambientTxt"),"$isan")
this.ax=H.k(this.y.m(0,"nullAmbientTxt"),"$isH")
break}}y=a2.c
if(y!==C.d){this.an=H.k(this.y.m(0,"diffuseClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.e:this.bE=H.k(this.y.m(0,"diffuseTxt"),"$isam")
this.bF=H.k(this.y.m(0,"nullDiffuseTxt"),"$isH")
break
case C.f:this.e_=H.k(this.y.m(0,"diffuseTxt"),"$isan")
this.bF=H.k(this.y.m(0,"nullDiffuseTxt"),"$isH")
break}}y=a2.d
if(y!==C.d){this.bG=H.k(this.y.m(0,"invDiffuseClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.e:this.e0=H.k(this.y.m(0,"invDiffuseTxt"),"$isam")
this.bH=H.k(this.y.m(0,"nullInvDiffuseTxt"),"$isH")
break
case C.f:this.e1=H.k(this.y.m(0,"invDiffuseTxt"),"$isan")
this.bH=H.k(this.y.m(0,"nullInvDiffuseTxt"),"$isH")
break}}y=a2.e
if(y!==C.d){this.bK=H.k(this.y.m(0,"shininess"),"$isY")
this.bI=H.k(this.y.m(0,"specularClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.e:this.e2=H.k(this.y.m(0,"specularTxt"),"$isam")
this.bJ=H.k(this.y.m(0,"nullSpecularTxt"),"$isH")
break
case C.f:this.e3=H.k(this.y.m(0,"specularTxt"),"$isan")
this.bJ=H.k(this.y.m(0,"nullSpecularTxt"),"$isH")
break}}switch(a2.f){case C.d:break
case C.i:break
case C.e:this.e4=H.k(this.y.m(0,"bumpTxt"),"$isam")
this.bL=H.k(this.y.m(0,"nullBumpTxt"),"$isH")
break
case C.f:this.e5=H.k(this.y.m(0,"bumpTxt"),"$isan")
this.bL=H.k(this.y.m(0,"nullBumpTxt"),"$isH")
break}if(a2.dy){this.e6=H.k(this.y.m(0,"envSampler"),"$isan")
this.e7=H.k(this.y.m(0,"nullEnvTxt"),"$isH")
y=a2.r
if(y!==C.d){this.bM=H.k(this.y.m(0,"reflectClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.e:this.e8=H.k(this.y.m(0,"reflectTxt"),"$isam")
this.bN=H.k(this.y.m(0,"nullReflectTxt"),"$isH")
break
case C.f:this.e9=H.k(this.y.m(0,"reflectTxt"),"$isan")
this.bN=H.k(this.y.m(0,"nullReflectTxt"),"$isH")
break}}y=a2.x
if(y!==C.d){this.bO=H.k(this.y.m(0,"refraction"),"$isY")
this.bP=H.k(this.y.m(0,"refractClr"),"$isG")
switch(y){case C.d:break
case C.i:break
case C.e:this.ea=H.k(this.y.m(0,"refractTxt"),"$isam")
this.bQ=H.k(this.y.m(0,"nullRefractTxt"),"$isH")
break
case C.f:this.eb=H.k(this.y.m(0,"refractTxt"),"$isan")
this.bQ=H.k(this.y.m(0,"nullRefractTxt"),"$isH")
break}}}y=a2.y
if(y!==C.d){this.bR=H.k(this.y.m(0,"alpha"),"$isY")
switch(y){case C.d:break
case C.i:break
case C.e:this.ec=H.k(this.y.m(0,"alphaTxt"),"$isam")
this.bS=H.k(this.y.m(0,"nullAlphaTxt"),"$isH")
break
case C.f:this.ed=H.k(this.y.m(0,"alphaTxt"),"$isan")
this.bS=H.k(this.y.m(0,"nullAlphaTxt"),"$isH")
break}}this.sh1(H.c([],[A.dm]))
this.shO(H.c([],[A.dp]))
this.sic(H.c([],[A.dq]))
this.sio(H.c([],[A.dr]))
this.sip(H.c([],[A.ds]))
this.siq(H.c([],[A.dt]))
if(a2.k2){y=a2.z
if(y>0){this.ee=H.e(this.y.m(0,"dirLightCount"),"$isH")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isG")
x=this.y
w="dirLights["+l+"].color"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isG")
x=this.cB;(x&&C.a).h(x,new A.dm(l,k,j))}}y=a2.Q
if(y>0){this.ef=H.e(this.y.m(0,"pntLightCount"),"$isH")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isG")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isG")
x=this.y
w="pntLights["+l+"].color"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isG")
x=this.y
w="pntLights["+l+"].att0"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isY")
x=this.y
w="pntLights["+l+"].att1"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isY")
x=this.y
w="pntLights["+l+"].att2"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isY")
x=this.cC;(x&&C.a).h(x,new A.dp(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.eg=H.e(this.y.m(0,"spotLightCount"),"$isH")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isG")
x=this.y
w="spotLights["+l+"].objDir"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isG")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isG")
x=this.y
w="spotLights["+l+"].color"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isG")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isY")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isY")
x=this.y
w="spotLights["+l+"].att0"
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isY")
x=this.y
w="spotLights["+l+"].att1"
d=x.l(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isY")
x=this.y
w="spotLights["+l+"].att2"
c=x.l(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isY")
x=this.cD;(x&&C.a).h(x,new A.dq(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.eh=H.e(this.y.m(0,"txtDirLightCount"),"$isH")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isG")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isG")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isG")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isG")
x=this.y
w="txtDirLights["+l+"].color"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isG")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isH")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isam")
x=this.cE;(x&&C.a).h(x,new A.dr(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.ei=H.e(this.y.m(0,"txtPntLightCount"),"$isH")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isG")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isG")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isdn")
x=this.y
w="txtPntLights["+l+"].color"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isG")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isH")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isY")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isY")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.l(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isY")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.l(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isan")
x=this.cF;(x&&C.a).h(x,new A.ds(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.ej=H.e(this.y.m(0,"txtSpotLightCount"),"$isH")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isG")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isG")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isG")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isG")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isG")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isH")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isG")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.l(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isY")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.l(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isY")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.l(0,w)
if(b==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isY")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.l(0,w)
if(a==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isY")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.l(0,w)
if(a0==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isY")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.l(0,w)
if(a1==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isam")
x=this.cG;(x&&C.a).h(x,new A.dt(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
al:function(a,b,c){C.c.V(b.a,b.d,1)},
ad:function(a,b,c){C.c.V(b.a,b.d,1)},
n:{
j1:function(a,b){var z,y
z=a.an
y=new A.j0(b,z)
y.fq(b,z)
y.fn(a,b)
return y}}},j5:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ax,an,bE",
iu:function(a){var z,y,x
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
iB:function(a){var z
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
iv:function(a){var z
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
iJ:function(a){var z,y
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
iK:function(a){var z,y
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
iD:function(a){var z
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
iO:function(a){var z
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
z+="uniform int null"+(c[0].toUpperCase()+C.b.ar(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
iy:function(a){var z,y
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
it:function(a){var z,y
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
iw:function(a){var z,y
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
iz:function(a){var z,y
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
iH:function(a){var z,y
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
iC:function(a){var z,y
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
iF:function(a){var z,y
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
iG:function(a){var z,y
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
ix:function(a){var z,y
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
iE:function(a){var z,y
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
iI:function(a){var z,y
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
iL:function(a){var z,y,x
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
iM:function(a){var z,y,x
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
iN:function(a){var z,y,x
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
iA:function(a){var z
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
i:function(a){return this.an}},dm:{"^":"b;a,b,c"},dr:{"^":"b;a,b,c,d,e,f,r,x"},dp:{"^":"b;a,b,c,d,e,f,r"},ds:{"^":"b;a,b,c,d,e,f,r,x,y,z"},dq:{"^":"b;a,b,c,d,e,f,r,x,y,z"},dt:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},db:{"^":"cS;",
fq:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dk:function(a,b){var z,y,x
z=this.a
y=C.c.jf(z,b)
C.c.fe(z,y,a)
C.c.j8(z,y)
if(!H.dI(C.c.f7(z,y,35713))){x=C.c.f6(z,y)
C.c.ji(z,y)
throw H.d(P.u("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
i7:function(){var z,y,x,w,v,u
z=H.c([],[A.e_])
y=this.a
x=H.aa(C.c.bX(y,this.r,35721))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.c.f0(y,this.r,w)
u=C.c.f2(y,this.r,v.name)
C.a.h(z,new A.e_(y,v.name,u))}this.x=new A.hH(z)},
i9:function(){var z,y,x,w,v,u
z=H.c([],[A.ad])
y=this.a
x=H.aa(C.c.bX(y,this.r,35718))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.c.f1(y,this.r,w)
u=C.c.f8(y,this.r,v.name)
C.a.h(z,this.jg(v.type,v.size,v.name,u))}this.y=new A.kn(z)},
aN:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.H(z,y,b,c)
else return A.dl(z,y,b,a,c)},
fZ:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.am(z,y,b,c)
else return A.dl(z,y,b,a,c)},
h_:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.an(z,y,b,c)
else return A.dl(z,y,b,a,c)},
by:function(a,b){return new P.fI(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
jg:function(a,b,c,d){switch(a){case 5120:return this.aN(b,c,d)
case 5121:return this.aN(b,c,d)
case 5122:return this.aN(b,c,d)
case 5123:return this.aN(b,c,d)
case 5124:return this.aN(b,c,d)
case 5125:return this.aN(b,c,d)
case 5126:return new A.Y(this.a,this.r,c,d)
case 35664:return new A.ki(this.a,this.r,c,d)
case 35665:return new A.G(this.a,this.r,c,d)
case 35666:return new A.kl(this.a,this.r,c,d)
case 35667:return new A.kj(this.a,this.r,c,d)
case 35668:return new A.kk(this.a,this.r,c,d)
case 35669:return new A.km(this.a,this.r,c,d)
case 35674:return new A.kp(this.a,this.r,c,d)
case 35675:return new A.dn(this.a,this.r,c,d)
case 35676:return new A.aE(this.a,this.r,c,d)
case 35678:return this.fZ(b,c,d)
case 35680:return this.h_(b,c,d)
case 35670:throw H.d(this.by("BOOL",c))
case 35671:throw H.d(this.by("BOOL_VEC2",c))
case 35672:throw H.d(this.by("BOOL_VEC3",c))
case 35673:throw H.d(this.by("BOOL_VEC4",c))
default:throw H.d(P.u("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},cj:{"^":"b;a,b",
i:function(a){return this.b}},ad:{"^":"b;"},kn:{"^":"b;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.l(0,b)
if(z==null)throw H.d(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.N()},
jx:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w)x+=z[w].i(0)+a
return x},
N:function(){return this.jx("\n")}},H:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},kj:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},kk:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},km:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},kh:{"^":"ad;0e,0f,a,b,c,d",
sir:function(a){this.e=H.j(a,"$isa",[P.m],"$asa")},
i:function(a){return"Uniform1iv: "+H.i(this.c)},
n:{
dl:function(a,b,c,d,e){var z=new A.kh(a,b,c,e)
z.f=d
z.sir(P.iR(d,0,!1,P.m))
return z}}},Y:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},ki:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},G:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},kl:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},kp:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},dn:{"^":"ad;a,b,c,d",
aq:function(a){var z=new Float32Array(H.bh(H.j(a,"$isa",[P.q],"$asa")))
C.c.eR(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},aE:{"^":"ad;a,b,c,d",
aq:function(a){var z=new Float32Array(H.bh(H.j(a,"$isa",[P.q],"$asa")))
C.c.eS(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},am:{"^":"ad;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},an:{"^":"ad;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
dL:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.af,P.q,P.q]})
z=F.dc()
F.bK(z,b,c,d,a,1,0,0,1)
F.bK(z,b,c,d,a,0,1,0,3)
F.bK(z,b,c,d,a,0,0,1,2)
F.bK(z,b,c,d,a,-1,0,0,0)
F.bK(z,b,c,d,a,0,-1,0,0)
F.bK(z,b,c,d,a,0,0,-1,3)
z.aw()
return z},
cF:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bK:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.af,P.q,P.q]})
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
z.d=y}l=F.cF(y)
k=F.cF(z.b)
j=F.dU(d,e,new F.mg(z,F.cF(z.c),F.cF(z.d),k,l,c),b)
if(j!=null)a.bg(j)},
hf:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.q,args:[P.q]})
if(f<3)return
z=F.dc()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.af])
v=z.a
u=new V.D(0,0,y)
u=u.A(0,Math.sqrt(u.I(u)))
C.a.h(w,v.iS(new V.c2(a,-1,-1,-1),new V.bt(1,1,1,1),new V.X(0,0,d),new V.D(0,0,y),new V.ac(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.B(p)
o=new V.D(r,q,y).A(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.c7(new V.c2(a,-1,-1,-1),null,new V.bt(n,l,m,1),new V.X(r*p,q*p,d),new V.D(0,0,y),new V.ac(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.iQ(w)
return z},
dM:function(a,b,c,d,e,f){return F.mA(b,c,d,new F.mz(a,f),e)},
mA:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.dU(c,e,new F.mC(d),null)
if(z==null)return
z.aw()
z.co()
if(b)z.bg(F.hf(3,!1,!1,1,new F.mD(d),e))
if(a)z.bg(F.hf(1,!0,!1,-1,new F.mE(d),e))
return z},
nd:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.ne()
y=F.dL(a,null,new F.nf(z,c),d)
y.co()
return y},
hr:function(a,b,c,d){return F.he(c,a,d,b,new F.nh())},
mW:function(a,b,c,d,e,f){return F.he(d,a,e,b,new F.mX(f,c))},
he:function(a,b,c,d,e){var z=F.dU(a,b,new F.mB(H.l(e,{func:1,ret:V.X,args:[P.q]}),d,b,c),null)
if(z==null)return
z.aw()
z.co()
return z},
dU:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.af,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.dc()
y=H.c([],[F.af])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.c7(null,null,new V.bt(u,0,0,1),null,null,new V.ac(w,1),null,null,0)
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
t=F.c7(null,null,new V.bt(o,n,m,1),null,null,new V.ac(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cw(d))}}z.d.iR(a+1,b+1,y)
return z},
mg:{"^":"n:7;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cL(z.b,b).cL(z.d.cL(z.c,b),c)
a.sa4(0,new V.X(y.a,y.b,y.c))
a.seM(y.A(0,Math.sqrt(y.I(y))))
z=1-b
x=1-c
a.sdT(new V.c2(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mz:{"^":"n:24;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mC:{"^":"n:7;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.B(v)
y=-y*v
u=x*v
a.sa4(0,new V.X(y,u,w))
u=new V.D(y,u,w)
a.seM(u.A(0,Math.sqrt(u.I(u))))
a.sdT(new V.c2(1-c,2+c,-1,-1))}},
mD:{"^":"n:30;a",
$1:function(a){return this.a.$2(a,1)}},
mE:{"^":"n:30;a",
$1:function(a){return this.a.$2(1-a,0)}},
ne:{"^":"n:24;",
$2:function(a,b){return 0}},
nf:{"^":"n:7;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.B(z)
y=a.f
x=new V.D(y.a,y.b,y.c)
z=x.A(0,Math.sqrt(x.I(x))).E(0,this.b+z)
a.sa4(0,new V.X(z.a,z.b,z.c))}},
nh:{"^":"n:21;",
$1:function(a){return new V.X(Math.cos(a),Math.sin(a),0)}},
mX:{"^":"n:21;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.X(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mB:{"^":"n:7;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dV(y.$1(z),x)
x=J.dV(y.$1(z+3.141592653589793/this.c),x).R(0,w)
x=new V.D(x.a,x.b,x.c)
v=x.A(0,Math.sqrt(x.I(x)))
y=$.fx
if(y==null){y=new V.D(1,0,0)
$.fx=y
u=y}else u=y
y=v.aG(!J.L(v,u)?V.fA():u)
t=y.A(0,Math.sqrt(y.I(y)))
y=t.aG(v)
u=y.A(0,Math.sqrt(y.I(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.E(0,y*x)
x=t.E(0,r*x)
a.sa4(0,w.G(0,new V.X(y.a-x.a,y.b-x.b,y.c-x.c)))}},
a8:{"^":"b;0a,0b,0c,0d,0e",
b7:function(){if(!this.gb8()){C.a.K(this.a.a.d.b,this)
this.a.a.a2()}this.cg()
this.ci()
this.hV()},
cm:function(a){this.a=a
C.a.h(a.d.b,this)},
cn:function(a){this.b=a
C.a.h(a.d.c,this)},
i6:function(a){this.c=a
C.a.h(a.d.d,this)},
cg:function(){var z=this.a
if(z!=null){C.a.K(z.d.b,this)
this.a=null}},
ci:function(){var z=this.b
if(z!=null){C.a.K(z.d.c,this)
this.b=null}},
hV:function(){var z=this.c
if(z!=null){C.a.K(z.d.d,this)
this.c=null}},
gb8:function(){return this.a==null||this.b==null||this.c==null},
fQ:function(){var z,y,x,w,v
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
if(v.ew())return
return v.A(0,Math.sqrt(v.I(v)))},
fV:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.R(0,y)
z=new V.D(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.I(z)))
z=w.R(0,y)
z=new V.D(z.a,z.b,z.c)
z=v.aG(z.A(0,Math.sqrt(z.I(z))))
return z.A(0,Math.sqrt(z.I(z)))},
ct:function(){if(this.d!=null)return!0
var z=this.fQ()
if(z==null){z=this.fV()
if(z==null)return!1}this.d=z
this.a.a.a2()
return!0},
fP:function(){var z,y,x,w,v
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
if(v.ew())return
return v.A(0,Math.sqrt(v.I(v)))},
fU:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.p.$2(n,0)){z=r.R(0,u)
z=new V.D(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.I(z)))
if(o.a-p.a<0)m=m.U(0)}else{l=(z-q.b)/n
z=r.R(0,u).E(0,l).G(0,u).R(0,x)
z=new V.D(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.I(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.U(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.I(z)))
z=k.aG(m)
z=z.A(0,Math.sqrt(z.I(z))).aG(k)
m=z.A(0,Math.sqrt(z.I(z)))}return m},
cr:function(){if(this.e!=null)return!0
var z=this.fP()
if(z==null){z=this.fU()
if(z==null)return!1}this.e=z
this.a.a.a2()
return!0},
gj7:function(a){if(J.L(this.a,this.b))return!0
if(J.L(this.b,this.c))return!0
if(J.L(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var z,y
if(this.gb8())return a+"disposed"
z=a+C.b.ag(J.ae(this.a.e),0)+", "+C.b.ag(J.ae(this.b.e),0)+", "+C.b.ag(J.ae(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
N:function(){return this.F("")},
n:{
bx:function(a,b,c){var z,y,x
z=new F.a8()
y=a.a
if(y==null)H.r(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.u("May not create a face with vertices attached to different shapes."))
z.cm(a)
z.cn(b)
z.i6(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a2()
return z}}},
ie:{"^":"b;"},
jZ:{"^":"ie;",
bf:function(a,b,c){var z,y
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
b7:function(){if(!this.gb8()){C.a.K(this.a.a.c.b,this)
this.a.a.a2()}this.cg()
this.ci()},
cm:function(a){this.a=a
C.a.h(a.c.b,this)},
cn:function(a){this.b=a
C.a.h(a.c.c,this)},
cg:function(){var z=this.a
if(z!=null){C.a.K(z.c.b,this)
this.a=null}},
ci:function(){var z=this.b
if(z!=null){C.a.K(z.c.c,this)
this.b=null}},
gb8:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){if(this.gb8())return a+"disposed"
return a+C.b.ag(J.ae(this.a.e),0)+", "+C.b.ag(J.ae(this.b.e),0)},
N:function(){return this.F("")},
n:{
iI:function(a,b){var z,y,x
z=new F.bA()
y=a.a
if(y==null)H.r(P.u("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.u("May not create a line with vertices attached to different shapes."))
z.cm(a)
z.cn(b)
C.a.h(z.a.a.c.b,z)
z.a.a.a2()
return z}}},
iJ:{"^":"b;"},
kg:{"^":"iJ;",
bf:function(a,b,c){var z,y
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
c1:{"^":"b;0a",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ag(J.ae(z.e),0)},
N:function(){return this.F("")}},
eY:{"^":"b;0a,0b,0c,0d,0e",
gD:function(){var z=this.e
if(z==null){z=D.S()
this.e=z}return z},
bg:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.w()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){v=z[w]
this.a.h(0,v.ja())}this.a.w()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){u=z[w]
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
s=new F.c1()
if(r.a==null)H.r(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.L(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){q=z[w]
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
F.iI(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){n=z[w]
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
if(!(z==null))z.ao()},
aw:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aw()||!1
if(!this.a.aw())y=!1
z=this.e
if(!(z==null))z.ao()
return y},
jJ:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.t(z,0)])
for(z=[F.af];y.length!==0;){x=C.a.gjt(y)
C.a.k5(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.y)(y),++u){t=y[u]
if(t!=null&&a.bf(0,x,t)){C.a.h(w,t)
C.a.K(y,t)}}if(w.length>1)b.bg(w)}}this.a.w()
this.c.cR()
this.d.cR()
this.b.k6()
this.c.cS(new F.kg())
this.d.cS(new F.jZ())
z=this.e
if(!(z==null))z.ao()},
iU:function(a){this.jJ(new F.kQ(),new F.jf())},
co:function(){return this.iU(null)},
cH:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.d
this.d.cH()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.f(z,y)
x=z[y]
z=x.r
if(z!=null)x.seA(new V.D(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.D(w,v,z).A(0,Math.sqrt(w*w+v*v+z*z))
if(!J.L(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.L(null)}}}}z=this.e
if(!(z==null))z.ao()},
j2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
v=b.gd3(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.e4])
for(r=0,q=0;q<w;++q){p=b.iX(q)
o=p.gd3(p)
C.a.q(s,q,new Z.e4(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].jH(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.q(t,l,m[k]);++l}}r+=o}H.j(t,"$isa",[x],"$asa")
y=a.a
j=y.createBuffer()
C.c.av(y,34962,j)
C.c.dV(y,34962,new Float32Array(H.bh(t)),35044)
C.c.av(y,34962,null)
i=new Z.e5(new Z.fE(34962,j),s,b)
i.shb(H.c([],[Z.bV]))
if(this.b.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)}f=Z.dx(y,34963,H.j(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.bV(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)}f=Z.dx(y,34963,H.j(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.bV(1,h.length,f))}if(this.d.b.length!==0){x=P.m
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
C.a.h(h,g.e)}f=Z.dx(y,34963,H.j(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.bV(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.F("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.F("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.F("   "))}return C.a.k(z,"\n")},
a9:function(a){var z=this.e
if(!(z==null))z.L(a)},
a2:function(){return this.a9(null)},
$isnB:1,
n:{
dc:function(){var z,y
z=new F.eY()
y=new F.kL(z)
y.b=!1
y.sis(H.c([],[F.af]))
z.a=y
y=new F.jT(z)
y.scd(H.c([],[F.c1]))
z.b=y
y=new F.jS(z)
y.shd(H.c([],[F.bA]))
z.c=y
y=new F.jR(z)
y.sh4(H.c([],[F.a8]))
z.d=y
z.e=null
return z}}},
jR:{"^":"b;a,0b",
sh4:function(a){this.b=H.j(a,"$isa",[F.a8],"$asa")},
iQ:function(a){var z,y,x,w,v,u,t
H.j(a,"$isa",[F.af],"$asa")
z=H.c([],[F.a8])
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
iR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(c,"$isa",[F.af],"$asa")
z=H.c([],[F.a8])
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
cS:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.l(0,v)
for(t=v-1;t>=0;--t){s=w.d.l(0,t)
if(a.bf(0,u,s)){u.b7()
break}}}}},
cR:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.gj7(x)
if(y)x.b7()}},
aw:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].ct())x=!1
return x},
cs:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].cr())x=!1
return x},
cH:function(){var z,y,x,w,v,u
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
v=w.b
w.b=w.c
w.c=v
u=w.d
if(u!=null)w.d=new V.D(-u.a,-u.b,-u.c)
u=w.e
if(u!=null)w.e=new V.D(-u.a,-u.b,-u.c)
u=w.a.a.e
if(!(u==null))u.L(null)}},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
N:function(){return this.F("")}},
jS:{"^":"b;a,0b",
shd:function(a){this.b=H.j(a,"$isa",[F.bA],"$asa")},
gp:function(a){return this.b.length},
cS:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.l(0,v)
for(t=v-1;t>=0;--t){s=w.c.l(0,t)
if(a.bf(0,u,s)){u.b7()
break}}}}},
cR:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.L(x.a,x.b)
if(y)x.b7()}},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].F(a+(""+x+". ")))}return C.a.k(z,"\n")},
N:function(){return this.F("")}},
jT:{"^":"b;a,0b",
scd:function(a){this.b=H.j(a,"$isa",[F.c1],"$asa")},
gp:function(a){return this.b.length},
k6:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
x=y.a
if(x.b.b.length>1){if(x!=null){C.a.K(x.a.b.b,y)
x=y.a.a.e
if(!(x==null))x.L(null)}x=y.a
if(x!=null){C.a.K(x.b.b,y)
y.a=null}}}},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
N:function(){return this.F("")}},
af:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cw:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.c7(this.cx,x,u,z,y,w,v,a,t)},
ja:function(){return this.cw(null)},
sa4:function(a,b){var z
if(!J.L(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a2()}},
seA:function(a){var z
a=a==null?null:a.A(0,Math.sqrt(a.I(a)))
if(!J.L(this.r,a)){this.r=a
z=this.a
if(z!=null)z.a2()}},
seM:function(a){var z
if(!J.L(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a2()}},
sdT:function(a){var z
if(!J.L(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a2()}},
jH:function(a){var z,y
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
ct:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bD()
this.d.Z(0,new F.kV(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.a2()
z=this.a.e
if(!(z==null))z.ao()}return!0},
cr:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bD()
this.d.Z(0,new F.kU(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.a2()
z=this.a.e
if(!(z==null))z.ao()}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.b.ag(J.ae(this.e),0))
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
C.a.h(z,V.N(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.k(z,", ")
return a+"{"+x+"}"},
N:function(){return this.F("")},
n:{
c7:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.af()
y=new F.kT(z)
y.scd(H.c([],[F.c1]))
z.b=y
y=new F.kP(z)
x=[F.bA]
y.she(H.c([],x))
y.shf(H.c([],x))
z.c=y
y=new F.kM(z)
x=[F.a8]
y.sh5(H.c([],x))
y.sh6(H.c([],x))
y.sh7(H.c([],x))
z.d=y
h=$.$get$fB()
z.e=0
y=$.$get$aP()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aO().a)!==0?e:null
z.x=(x&$.$get$aN().a)!==0?b:null
z.y=(x&$.$get$aQ().a)!==0?f:null
z.z=(x&$.$get$aR().a)!==0?g:null
z.Q=(x&$.$get$fC().a)!==0?c:null
z.ch=(x&$.$get$bf().a)!==0?i:0
z.cx=(x&$.$get$aM().a)!==0?a:null
return z}}},
kV:{"^":"n:5;a",
$1:function(a){var z,y
H.e(a,"$isa8")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
kU:{"^":"n:5;a",
$1:function(a){var z,y
H.e(a,"$isa8")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
kL:{"^":"b;a,0b,0c",
sis:function(a){this.c=H.j(a,"$isa",[F.af],"$asa")},
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
y.a2()
return!0},
iT:function(a,b,c,d,e,f,g,h,i){var z=F.c7(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
iS:function(a,b,c,d,e,f){return this.iT(a,null,b,c,d,e,f,null,0)},
gp:function(a){return this.c.length},
aw:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].ct()
return!0},
cs:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].cr()
return!0},
j3:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.L(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.L(null)}}}}return!0},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
this.w()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
N:function(){return this.F("")}},
kM:{"^":"b;a,0b,0c,0d",
sh5:function(a){this.b=H.j(a,"$isa",[F.a8],"$asa")},
sh6:function(a){this.c=H.j(a,"$isa",[F.a8],"$asa")},
sh7:function(a){this.d=H.j(a,"$isa",[F.a8],"$asa")},
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
Z:function(a,b){H.l(b,{func:1,ret:-1,args:[F.a8]})
C.a.Z(this.b,b)
C.a.Z(this.c,new F.kN(this,b))
C.a.Z(this.d,new F.kO(this,b))},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
N:function(){return this.F("")}},
kN:{"^":"n:5;a,b",
$1:function(a){H.e(a,"$isa8")
if(!J.L(a.a,this.a))this.b.$1(a)}},
kO:{"^":"n:5;a,b",
$1:function(a){var z
H.e(a,"$isa8")
z=this.a
if(!J.L(a.a,z)&&!J.L(a.b,z))this.b.$1(a)}},
kP:{"^":"b;a,0b,0c",
she:function(a){this.b=H.j(a,"$isa",[F.bA],"$asa")},
shf:function(a){this.c=H.j(a,"$isa",[F.bA],"$asa")},
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
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
N:function(){return this.F("")}},
kR:{"^":"b;"},
kQ:{"^":"kR;",
bf:function(a,b,c){return J.L(b.f,c.f)}},
kS:{"^":"b;"},
jf:{"^":"kS;",
bg:function(a){var z,y,x,w
H.j(a,"$isa",[F.af],"$asa")
z=V.bD()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.D(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.A(0,Math.sqrt(z.I(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x)a[x].seA(z)
return}},
kT:{"^":"b;a,0b",
scd:function(a){this.b=H.j(a,"$isa",[F.c1],"$asa")},
gp:function(a){return this.b.length},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
N:function(){return this.F("")}}}],["","",,O,{"^":"",j2:{"^":"c5;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sfS:function(a){this.e=H.j(a,"$isZ",[V.ag],"$asZ")},
gD:function(){var z=this.dy
if(z==null){z=D.S()
this.dy=z}return z},
ai:[function(a){var z
H.e(a,"$isz")
z=this.dy
if(!(z==null))z.L(a)},function(){return this.ai(null)},"ks","$1","$0","gfJ",0,2,1],
i0:[function(a){H.e(a,"$isz")
this.a=null
this.ai(a)},function(){return this.i0(null)},"kY","$1","$0","gi_",0,2,1],
kA:[function(a,b){var z=V.ag
z=new D.cn(a,H.j(b,"$iso",[z],"$aso"),this,[z])
z.b=!0
this.ai(z)},"$2","gho",8,0,14],
kB:[function(a,b){var z=V.ag
z=new D.co(a,H.j(b,"$iso",[z],"$aso"),this,[z])
z.b=!0
this.ai(z)},"$2","ghp",8,0,14],
dh:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.a6(z.e.length+3,4)*4
x=C.h.a6(z.f.length+3,4)*4
w=C.h.a6(z.r.length+3,4)*4
v=C.h.a6(z.x.length+3,4)*4
u=C.h.a6(z.y.length+3,4)*4
t=C.h.a6(z.z.length+3,4)*4
s=C.h.a6(this.e.a.length+3,4)*4
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
a2=$.$get$aP()
if(e){g=$.$get$aO()
a2=new Z.be(a2.a|g.a)}if(d){g=$.$get$aN()
a2=new Z.be(a2.a|g.a)}if(c){g=$.$get$aQ()
a2=new Z.be(a2.a|g.a)}if(b){g=$.$get$aR()
a2=new Z.be(a2.a|g.a)}if(a0){g=$.$get$aM()
a2=new Z.be(a2.a|g.a)}return new A.j5(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
X:function(a,b){H.j(a,"$isa",[T.f4],"$asa")},
aB:function(a){var z,y,x,w
for(z=this.dx.a,z=new J.as(z,z.length,0,[H.t(z,0)]);z.B();){y=z.d
y.toString
x=$.b_
if(x==null){x=new V.X(0,0,0)
$.b_=x}y.a=x
x=$.cA
if(x==null){x=new V.D(0,0,1)
$.cA=x}y.b=x
x=y.c
if(x!=null){w=x.aY(a,y)
if(w!=null){y.a=w.aX(y.a)
y.b=w.cV(y.b)}}}},
k8:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=this.a
if(z==null){z=this.dh()
y=a.fr.l(0,z.an)
if(y==null){y=A.j1(z,a.a)
x=y.b
if(x.length===0)H.r(P.u("May not cache a shader with no name."))
if(a.fr.bC(x))H.r(P.u('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.q(0,x,y)}this.a=y
a0.e=null
z=y}w=z.z
v=w.bE
z=a0.e
if(!(z instanceof Z.e5)){a0.e=null
z=null}if(z==null||!z.d.u(0,v)){z=w.r1
if(z)a0.d.aw()
u=w.r2
if(u){t=a0.d
s=t.e
if(!(s==null))++s.d
t.d.cs()
t.a.cs()
t=t.e
if(!(t==null))t.ao()}t=w.ry
if(t){s=a0.d
r=s.e
if(!(r==null))++r.d
s.a.j3()
s=s.e
if(!(s==null))s.ao()}q=a0.d.j2(new Z.kW(a.a),v)
q.aR($.$get$aP()).e=this.a.Q.c
if(z)q.aR($.$get$aO()).e=this.a.cx.c
if(u)q.aR($.$get$aN()).e=this.a.ch.c
if(w.rx)q.aR($.$get$aQ()).e=this.a.cy.c
if(t)q.aR($.$get$aR()).e=this.a.db.c
if(w.x1)q.aR($.$get$aM()).e=this.a.dx.c
a0.e=q}z=T.f4
p=H.c([],[z])
u=this.a
t=a.a
C.c.eU(t,u.r)
u.x.jp()
if(w.fx){u=this.a
s=a.dx.ga0()
u=u.dy
u.toString
u.aq(s.ah(0,!0))}if(w.fy){u=this.a
s=a.cx
if(s==null){s=a.db.ga0().E(0,a.dx.ga0())
a.cx=s}u=u.fr
u.toString
u.aq(s.ah(0,!0))}u=this.a
s=a.ch
if(s==null){s=a.gk_().E(0,a.dx.ga0())
a.ch=s}u=u.fy
u.toString
u.aq(s.ah(0,!0))
if(w.x2){u=this.a
s=this.b
u=u.k1
u.toString
u.aq(C.r.ah(s,!0))}if(w.y1){u=this.a
s=this.c
u=u.k2
u.toString
u.aq(C.r.ah(s,!0))}if(w.y2){u=this.a
s=this.d
u=u.k3
u.toString
u.aq(C.r.ah(s,!0))}if(w.ax>0){o=this.e.a.length
u=this.a.k4
C.c.V(u.a,u.d,o)
for(u=[P.q],n=0;n<o;++n){s=this.a
r=this.e.a
if(n>=r.length)return H.f(r,n)
r=r[n]
s.toString
H.e(r,"$isag")
s=s.r1
if(n>=s.length)return H.f(s,n)
s=s[n]
m=new Float32Array(H.bh(H.j(r.ah(0,!0),"$isa",u,"$asa")))
C.c.eS(s.a,s.d,!1,m)}}switch(w.a){case C.d:break
case C.i:u=this.a
s=this.f.f
u=u.r2
u.toString
r=s.a
l=s.b
s=s.c
C.c.v(u.a,u.d,r,l,s)
break
case C.e:this.X(p,this.f.d)
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
C.c.v(s.a,s.d,r,l,u)
break
case C.f:this.X(p,this.f.e)
u=this.a
s=this.f.e
u.ad(u.ry,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
s.toString
r=u.a
l=u.b
u=u.c
C.c.v(s.a,s.d,r,l,u)
break}if(w.k2){switch(w.b){case C.d:break
case C.i:u=this.a
s=this.r.f
u=u.x2
u.toString
r=s.a
l=s.b
s=s.c
C.c.v(u.a,u.d,r,l,s)
break
case C.e:this.X(p,this.r.d)
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
C.c.v(s.a,s.d,r,l,u)
break
case C.f:this.X(p,this.r.e)
u=this.a
s=this.r.e
u.ad(u.y2,u.ax,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.c.v(s.a,s.d,r,l,u)
break}switch(w.c){case C.d:break
case C.i:u=this.a
s=this.x.f
u=u.an
u.toString
r=s.a
l=s.b
s=s.c
C.c.v(u.a,u.d,r,l,s)
break
case C.e:this.X(p,this.x.d)
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
C.c.v(s.a,s.d,r,l,u)
break
case C.f:this.X(p,this.x.e)
u=this.a
s=this.x.e
u.ad(u.e_,u.bF,s)
s=this.a
u=this.x.f
s=s.an
s.toString
r=u.a
l=u.b
u=u.c
C.c.v(s.a,s.d,r,l,u)
break}switch(w.d){case C.d:break
case C.i:u=this.a
s=this.y.f
u=u.bG
u.toString
r=s.a
l=s.b
s=s.c
C.c.v(u.a,u.d,r,l,s)
break
case C.e:this.X(p,this.y.d)
u=this.a
s=this.y.d
u.al(u.e0,u.bH,s)
s=this.a
u=this.y.f
s=s.bG
s.toString
r=u.a
l=u.b
u=u.c
C.c.v(s.a,s.d,r,l,u)
break
case C.f:this.X(p,this.y.e)
u=this.a
s=this.y.e
u.ad(u.e1,u.bH,s)
s=this.a
u=this.y.f
s=s.bG
s.toString
r=u.a
l=u.b
u=u.c
C.c.v(s.a,s.d,r,l,u)
break}switch(w.e){case C.d:break
case C.i:u=this.a
s=this.z.f
u=u.bI
u.toString
r=s.a
l=s.b
s=s.c
C.c.v(u.a,u.d,r,l,s)
s=this.a
l=this.z.ch
s=s.bK
C.c.P(s.a,s.d,l)
break
case C.e:this.X(p,this.z.d)
u=this.a
s=this.z.d
u.al(u.e2,u.bJ,s)
s=this.a
u=this.z.f
s=s.bI
s.toString
r=u.a
l=u.b
u=u.c
C.c.v(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bK
C.c.P(u.a,u.d,l)
break
case C.f:this.X(p,this.z.e)
u=this.a
s=this.z.e
u.ad(u.e3,u.bJ,s)
s=this.a
u=this.z.f
s=s.bI
s.toString
r=u.a
l=u.b
u=u.c
C.c.v(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bK
C.c.P(u.a,u.d,l)
break}if(w.z>0){o=this.dx.e.length
u=this.a.ee
C.c.V(u.a,u.d,o)
k=a.db.ga0()
for(u=this.dx.e,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cB
if(j>=r.length)return H.f(r,j)
g=r[j]
r=k.cV(h.gcz(h))
l=r.a
f=r.b
e=r.c
e=r.A(0,Math.sqrt(l*l+f*f+e*e))
f=g.b
l=e.a
r=e.b
e=e.c
C.c.v(f.a,f.d,l,r,e)
e=h.gae(h)
r=g.c
l=e.gbV()
f=e.gbp()
e=e.gbA()
C.c.v(r.a,r.d,l,f,e);++j}}if(w.Q>0){o=this.dx.f.length
u=this.a.ef
C.c.V(u.a,u.d,o)
k=a.db.ga0()
for(u=this.dx.f,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cC
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.gcO(h)
l=g.b
f=r.geX(r)
e=r.geY(r)
r=r.geZ(r)
C.c.v(l.a,l.d,f,e,r)
r=k.aX(h.gcO(h))
e=g.c
C.c.v(e.a,e.d,r.a,r.b,r.c)
r=h.gae(h)
e=g.d
f=r.gbV()
l=r.gbp()
r=r.gbA()
C.c.v(e.a,e.d,f,l,r)
r=h.gdQ()
l=g.e
C.c.P(l.a,l.d,r)
r=h.gdR()
l=g.f
C.c.P(l.a,l.d,r)
r=h.gdS()
l=g.r
C.c.P(l.a,l.d,r);++j}}if(w.ch>0){o=this.dx.r.length
u=this.a.eg
C.c.V(u.a,u.d,o)
k=a.db.ga0()
for(u=this.dx.r,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cD
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.a
l=g.b
f=r.a
e=r.b
r=r.c
C.c.v(l.a,l.d,f,e,r)
r=h.b
e=r.a
f=r.b
l=r.c
l=r.A(0,Math.sqrt(e*e+f*f+l*l))
f=g.c
e=l.a
r=l.b
l=l.c
C.c.v(f.a,f.d,e,r,l)
l=k.aX(h.a)
r=g.d
C.c.v(r.a,r.d,l.a,l.b,l.c)
l=h.d
r=g.e
C.c.v(r.a,r.d,l.a,l.b,l.c)
l=h.e
r=g.f
C.c.P(r.a,r.d,l)
l=h.f
r=g.r
C.c.P(r.a,r.d,l)
l=h.r
r=g.x
C.c.P(r.a,r.d,l)
l=h.x
r=g.y
C.c.P(r.a,r.d,l)
l=h.y
r=g.z
C.c.P(r.a,r.d,l);++j}}if(w.cx>0){o=this.dx.x.length
u=this.a.eh
C.c.V(u.a,u.d,o)
k=a.db.ga0()
for(u=this.dx.x,s=u.length,r=[z],j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
l=this.a.cE
if(j>=l.length)return H.f(l,j)
g=l[j]
l=h.gbl()
H.j(p,"$isa",r,"$asa")
if(!C.a.Y(p,l)){l.sbd(0,p.length)
C.a.h(p,l)}l=h.gcz(h)
f=g.d
e=l.gb9(l)
d=l.gba(l)
l=l.gbb()
C.c.v(f.a,f.d,e,d,l)
l=h.gkm()
d=g.b
e=l.gb9(l)
f=l.gba(l)
l=l.gbb()
C.c.v(d.a,d.d,e,f,l)
l=h.gbj(h)
f=g.c
e=l.gb9(l)
d=l.gba(l)
l=l.gbb()
C.c.v(f.a,f.d,e,d,l)
l=k.cV(h.gcz(h))
d=l.a
e=l.b
f=l.c
f=l.A(0,Math.sqrt(d*d+e*e+f*f))
e=g.e
d=f.a
l=f.b
f=f.c
C.c.v(e.a,e.d,d,l,f)
f=h.gae(h)
l=g.f
d=f.gbV()
e=f.gbp()
f=f.gbA()
C.c.v(l.a,l.d,d,e,f)
f=h.gbl()
l=f.gbe(f)
if(!l){l=g.x
C.c.V(l.a,l.d,1)}else{l=g.r
e=f.gbe(f)
d=l.a
l=l.d
if(!e)C.c.V(d,l,0)
else C.c.V(d,l,f.gbd(f))
l=g.x
C.c.V(l.a,l.d,0)}++j}}if(w.cy>0){o=this.dx.y.length
u=this.a.ei
C.c.V(u.a,u.d,o)
k=a.db.ga0()
for(u=this.dx.y,s=u.length,r=[P.q],l=[z],j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
f=this.a.cF
if(j>=f.length)return H.f(f,j)
g=f[j]
f=h.gbl()
H.j(p,"$isa",l,"$asa")
if(!C.a.Y(p,f)){f.sbd(0,p.length)
C.a.h(p,f)}c=k.E(0,h.ga0())
f=h.ga0()
e=$.b_
if(e==null){e=new V.X(0,0,0)
$.b_=e}e=f.aX(e)
f=g.b
d=e.geX(e)
b=e.geY(e)
e=e.geZ(e)
C.c.v(f.a,f.d,d,b,e)
f=$.b_
if(f==null){f=new V.X(0,0,0)
$.b_=f}f=c.aX(f)
e=g.c
C.c.v(e.a,e.d,f.a,f.b,f.c)
f=c.ev()
e=g.d
m=new Float32Array(H.bh(H.j(new V.eD(f.a,f.b,f.c,f.e,f.f,f.r,f.y,f.z,f.Q).ah(0,!0),"$isa",r,"$asa")))
C.c.eR(e.a,e.d,!1,m)
e=h.gae(h)
f=g.e
d=e.gbV()
b=e.gbp()
e=e.gbA()
C.c.v(f.a,f.d,d,b,e)
e=h.gbl()
f=e.gbe(e)
if(!f){f=g.r
C.c.V(f.a,f.d,1)}else{f=g.f
d=e.gbe(e)
b=f.a
f=f.d
if(!d)C.c.V(b,f,0)
else C.c.V(b,f,e.gbd(e))
f=g.r
C.c.V(f.a,f.d,0)}f=h.gdQ()
e=g.x
C.c.P(e.a,e.d,f)
f=h.gdR()
e=g.y
C.c.P(e.a,e.d,f)
f=h.gdS()
e=g.z
C.c.P(e.a,e.d,f);++j}}if(w.db>0){o=this.dx.z.length
u=this.a.ej
C.c.V(u.a,u.d,o)
k=a.db.ga0()
for(u=this.dx.z,s=u.length,z=[z],j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cG
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.gbl()
H.j(p,"$isa",z,"$asa")
if(!C.a.Y(p,r)){r.sbd(0,p.length)
C.a.h(p,r)}r=h.gcO(h)
l=g.b
f=r.geX(r)
e=r.geY(r)
r=r.geZ(r)
C.c.v(l.a,l.d,f,e,r)
r=h.gcz(h)
e=g.c
f=r.gb9(r)
l=r.gba(r)
r=r.gbb()
C.c.v(e.a,e.d,f,l,r)
r=h.gkm()
l=g.d
f=r.gb9(r)
e=r.gba(r)
r=r.gbb()
C.c.v(l.a,l.d,f,e,r)
r=h.gbj(h)
e=g.e
f=r.gb9(r)
l=r.gba(r)
r=r.gbb()
C.c.v(e.a,e.d,f,l,r)
r=k.aX(h.gcO(h))
l=g.f
C.c.v(l.a,l.d,r.a,r.b,r.c)
r=h.gbl()
l=r.gbe(r)
if(!l){r=g.x
C.c.V(r.a,r.d,1)}else{l=g.r
f=r.gbe(r)
e=l.a
l=l.d
if(!f)C.c.V(e,l,0)
else C.c.V(e,l,r.gbd(r))
r=g.x
C.c.V(r.a,r.d,0)}r=h.gae(h)
l=g.y
f=r.gbV()
e=r.gbp()
r=r.gbA()
C.c.v(l.a,l.d,f,e,r)
r=h.gl9()
e=g.z
C.c.P(e.a,e.d,r)
r=h.gla()
e=g.Q
C.c.P(e.a,e.d,r)
r=h.gdQ()
e=g.ch
C.c.P(e.a,e.d,r)
r=h.gdR()
e=g.cx
C.c.P(e.a,e.d,r)
r=h.gdS()
e=g.cy
C.c.P(e.a,e.d,r);++j}}}switch(w.f){case C.d:break
case C.i:break
case C.e:this.X(p,this.Q.d)
z=this.a
u=this.Q.d
z.al(z.e4,z.bL,u)
break
case C.f:this.X(p,this.Q.e)
z=this.a
u=this.Q.e
z.ad(z.e5,z.bL,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db.ga0().ev()
a.Q=u}z=z.id
z.toString
z.aq(u.ah(0,!0))}if(w.dy){this.X(p,this.ch)
z=this.a
u=this.ch
z.ad(z.e6,z.e7,u)
switch(w.r){case C.d:break
case C.i:z=this.a
u=this.cx.f
z=z.bM
z.toString
s=u.a
r=u.b
u=u.c
C.c.v(z.a,z.d,s,r,u)
break
case C.e:this.X(p,this.cx.d)
z=this.a
u=this.cx.d
z.al(z.e8,z.bN,u)
u=this.a
z=this.cx.f
u=u.bM
u.toString
s=z.a
r=z.b
z=z.c
C.c.v(u.a,u.d,s,r,z)
break
case C.f:this.X(p,this.cx.e)
z=this.a
u=this.cx.e
z.ad(z.e9,z.bN,u)
u=this.a
z=this.cx.f
u=u.bM
u.toString
s=z.a
r=z.b
z=z.c
C.c.v(u.a,u.d,s,r,z)
break}switch(w.x){case C.d:break
case C.i:z=this.a
u=this.cy.f
z=z.bP
z.toString
s=u.a
r=u.b
u=u.c
C.c.v(z.a,z.d,s,r,u)
u=this.a
r=this.cy.ch
u=u.bO
C.c.P(u.a,u.d,r)
break
case C.e:this.X(p,this.cy.d)
z=this.a
u=this.cy.d
z.al(z.ea,z.bQ,u)
u=this.a
z=this.cy.f
u=u.bP
u.toString
s=z.a
r=z.b
z=z.c
C.c.v(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bO
C.c.P(z.a,z.d,r)
break
case C.f:this.X(p,this.cy.e)
z=this.a
u=this.cy.e
z.ad(z.eb,z.bQ,u)
u=this.a
z=this.cy.f
u=u.bP
u.toString
s=z.a
r=z.b
z=z.c
C.c.v(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bO
C.c.P(z.a,z.d,r)
break}}z=w.y
u=z!==C.d
if(u){switch(z){case C.d:break
case C.i:z=this.a
s=this.db.f
z=z.bR
C.c.P(z.a,z.d,s)
break
case C.e:this.X(p,this.db.d)
z=this.a
s=this.db.d
z.al(z.ec,z.bS,s)
s=this.a
z=this.db.f
s=s.bR
C.c.P(s.a,s.d,z)
break
case C.f:this.X(p,this.db.e)
z=this.a
s=this.db.e
z.ad(z.ed,z.bS,s)
s=this.a
z=this.db.f
s=s.bR
C.c.P(s.a,s.d,z)
break}C.c.cA(t,3042)
C.c.j1(t,770,771)}for(n=0;n<p.length;++n)p[n].bz(a)
z=a0.e
z.bz(a)
z.aV(a)
z.eQ(a)
if(u)C.c.jm(t,3042)
for(n=0;n<p.length;++n)p[n].eQ(a)
z=this.a
z.toString
C.c.eU(t,null)
z.x.jn()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dh().an},
n:{
eC:function(){var z,y,x
z=new O.j2()
z.sfS(O.cW(V.ag))
z.e.br(z.gho(),z.ghp())
y=new O.b7(z,"emission")
y.c=C.d
y.f=new V.a0(0,0,0)
z.f=y
y=new O.b7(z,"ambient")
y.c=C.d
y.f=new V.a0(0,0,0)
z.r=y
y=new O.b7(z,"diffuse")
y.c=C.d
y.f=new V.a0(0,0,0)
z.x=y
y=new O.b7(z,"invDiffuse")
y.c=C.d
y.f=new V.a0(0,0,0)
z.y=y
y=new O.j7(z,"specular")
y.c=C.d
y.f=new V.a0(0,0,0)
y.ch=100
z.z=y
y=new O.j4(z,"bump")
y.c=C.d
z.Q=y
z.ch=null
y=new O.b7(z,"reflect")
y.c=C.d
y.f=new V.a0(0,0,0)
z.cx=y
y=new O.j6(z,"refract")
y.c=C.d
y.f=new V.a0(0,0,0)
y.ch=1
z.cy=y
y=new O.j3(z,"alpha")
y.c=C.d
y.f=1
z.db=y
y=new D.iH()
y.c0(D.a3)
y.sfB(H.c([],[D.ek]))
y.sfC(H.c([],[D.eO]))
y.sfD(H.c([],[D.cv]))
y.sfE(H.c([],[D.f5]))
y.sfF(H.c([],[D.f6]))
y.sfG(H.c([],[D.f7]))
y.Q=null
y.ch=null
y.d2(y.ghn(),y.ghI(),y.ghK())
z.dx=y
x=y.Q
if(x==null){x=D.S()
y.Q=x
y=x}else y=x
y.h(0,z.gi_())
y=z.dx
x=y.ch
if(x==null){x=D.S()
y.ch=x
y=x}else y=x
y.h(0,z.gfJ())
z.dy=null
return z}}},j3:{"^":"d5;0f,a,b,0c,0d,0e"},d5:{"^":"b;",
bw:["fk",function(){}]},j4:{"^":"d5;a,b,0c,0d,0e"},b7:{"^":"d5;0f,a,b,0c,0d,0e",
dE:function(a){var z,y
if(!J.L(this.f,a)){z=this.f
this.f=a
y=new D.J(this.b+".color",z,a,this,[V.a0])
y.b=!0
this.a.ai(y)}},
bw:["c_",function(){this.fk()
this.dE(new V.a0(1,1,1))}],
sae:function(a,b){var z
if(this.c===C.d){this.c=C.i
this.bw()
z=this.a
z.a=null
z.ai(null)}this.dE(b)}},j6:{"^":"b7;0ch,0f,a,b,0c,0d,0e",
i5:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.J(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.ai(z)}},
bw:function(){this.c_()
this.i5(1)}},j7:{"^":"b7;0ch,0f,a,b,0c,0d,0e",
cj:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.J(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.ai(z)}},
bw:function(){this.c_()
this.cj(100)}},c5:{"^":"b;"}}],["","",,T,{"^":"",f4:{"^":"cS;"},k7:{"^":"b;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",br:{"^":"b;",
aT:function(a){return!0},
i:function(a){return"all"},
$isaB:1},aB:{"^":"b;"},eB:{"^":"b;0a",
sa7:function(a){this.a=H.j(a,"$isa",[V.aB],"$asa")},
aT:["fj",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)if(z[x].aT(a))return!0
return!1}],
i:["d4",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaB:1},aw:{"^":"eB;0a",
aT:function(a){return!this.fj(a)},
i:function(a){return"!["+this.d4(0)+"]"}},jB:{"^":"b;0a,0b",
aT:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.ba(this.a)
y=H.ba(this.b)
return z+".."+y},
$isaB:1,
n:{
Q:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.d(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.H(a,0)
y=C.b.H(b,0)
x=new V.jB()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jO:{"^":"b;0a",
si4:function(a){this.a=H.j(a,"$isF",[P.m,P.K],"$asF")},
fp:function(a){var z,y
if(a.a.length<=0)throw H.d(P.u("May not create a SetMatcher with zero characters."))
z=new H.aX(0,0,[P.m,P.K])
for(y=new H.d3(a,a.gp(a),0,[H.a5(a,"T",0)]);y.B();)z.q(0,y.d,!0)
this.si4(z)},
aT:function(a){return this.a.bC(a)},
i:function(a){return P.c4(this.a.gay(),0,null)},
$isaB:1,
n:{
w:function(a){var z=new V.jO()
z.fp(a)
return z}}},dd:{"^":"b;a,b,0c,0d",
sim:function(a){this.c=H.j(a,"$isa",[V.dj],"$asa")},
k:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dj(this.a.j(0,b))
w.sa7(H.c([],[V.aB]))
w.c=!1
C.a.h(this.c,w)
return w},
js:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.aT(a))return w}return},
i:function(a){return this.b}},fb:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.dT(this.b,"\n","\\n")
y=H.dT(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},di:{"^":"b;a,b,0c",
shW:function(a){var z=P.h
this.c=H.j(a,"$isF",[z,z],"$asF")},
aH:function(a,b,c){var z,y,x
H.j(c,"$isa",[P.h],"$asa")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.y)(c),++y){x=c[y]
this.c.q(0,x,b)}},
i:function(a){return this.b}},kc:{"^":"b;0a,0b,0c",
sie:function(a){this.a=H.j(a,"$isF",[P.h,V.dd],"$asF")},
sii:function(a){this.b=H.j(a,"$isF",[P.h,V.di],"$asF")},
j:function(a,b){var z=this.a.l(0,b)
if(z==null){z=new V.dd(this,b)
z.sim(H.c([],[V.dj]))
z.d=null
this.a.q(0,b,z)}return z},
O:function(a){var z,y
z=this.b.l(0,a)
if(z==null){z=new V.di(this,a)
y=P.h
z.shW(new H.aX(0,0,[y,y]))
this.b.q(0,a,z)}return z},
eP:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fb])
y=this.c
x=[P.m]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.H(a,t)
r=y.js(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c4(w,0,null)
throw H.d(P.u("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c4(w,0,null)
p=y.d
o=p.c.l(0,q)
u=new V.fb(o==null?p.b:o,q,t)}++t}}},
n:{
cx:function(){var z,y
z=new V.kc()
y=P.h
z.sie(new H.aX(0,0,[y,V.dd]))
z.sii(new H.aX(0,0,[y,V.di]))
z.c=null
return z}}},dj:{"^":"eB;b,0c,0a",
i:function(a){return this.b.b+": "+this.d4(0)}}}],["","",,X,{"^":"",e7:{"^":"b;",$isaJ:1},il:{"^":"f1;0a,0b,0c,0d,0e,0f,0r,0x",
gD:function(){var z=this.x
if(z==null){z=D.S()
this.x=z}return z}},ji:{"^":"b;0a,0b,0c,0d,0e,0f",
gD:function(){var z=this.f
if(z==null){z=D.S()
this.f=z}return z},
b_:[function(a){var z
H.e(a,"$isz")
z=this.f
if(!(z==null))z.L(a)},function(){return this.b_(null)},"kt","$1","$0","gd6",0,2,1],
saU:function(a){var z,y
if(!J.L(this.b,a)){z=this.b
if(z!=null)z.gD().K(0,this.gd6())
y=this.b
this.b=a
if(a!=null)a.gD().h(0,this.gd6())
z=new D.J("mover",y,this.b,this,[U.ah])
z.b=!0
this.b_(z)}},
$isaJ:1,
$ise7:1},f1:{"^":"b;"}}],["","",,V,{"^":"",
nb:function(a){P.kb(C.U,new V.nc(a))},
aT:{"^":"b;0d",
sc8:function(a){this.d=H.j(a,"$isa",[[P.a,W.aV]],"$asa")},
bs:function(a){this.b=new P.it(C.X)
this.c=null
this.sc8(H.c([],[[P.a,W.aV]]))},
M:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.aV]))
y=a.split("\n")
for(z=y.length,x=[W.aV],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.C(u)
s=this.b.fY(u,0,u.length)
r=s==null?u:s
C.j.fc(t,H.dT(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaz(this.d),t)}},
eF:function(a){var z,y,x,w
H.j(a,"$isa",[P.h],"$asa")
this.sc8(H.c([],[[P.a,W.aV]]))
z=C.a.k(a,"\n")
y=this.c
if(y==null){y=this.bD()
this.c=y}for(y=y.eP(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)this.bU(y[w])}},
nc:{"^":"n:50;a",
$1:function(a){H.e(a,"$isbb")
P.dS(C.k.eO(this.a.gjy(),2)+" fps")}},
hY:{"^":"aT;a,0b,0c,0d",
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
z=V.cx()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
x=V.Q("a","z")
C.a.h(y.a,x)
x=V.Q("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=V.Q("0","9")
C.a.h(x.a,y)
y=V.Q("a","z")
C.a.h(x.a,y)
y=V.Q("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.Q("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.Q("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.w(new H.v("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.Q("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.Q("0","9")
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
x=new V.aw()
w=[V.aB]
x.sa7(H.c([],w))
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
x=new V.aw()
x.sa7(H.c([],w))
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
im:{"^":"aT;a,0b,0c,0d",
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
z=V.cx()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
x=V.Q("a","z")
C.a.h(y.a,x)
x=V.Q("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=V.Q("0","9")
C.a.h(x.a,y)
y=V.Q("a","z")
C.a.h(x.a,y)
y=V.Q("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.Q("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.Q("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.w(new H.v("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.Q("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.Q("0","9")
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
x=new V.aw()
w=[V.aB]
x.sa7(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Preprocess")
x=V.w(new H.v("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"Preprocess")
y=new V.aw()
y.sa7(H.c([],w))
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
io:{"^":"aT;a,0b,0c,0d",
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
z=V.cx()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
x=V.Q("a","z")
C.a.h(y.a,x)
x=V.Q("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=V.Q("0","9")
C.a.h(x.a,y)
y=V.Q("a","z")
C.a.h(x.a,y)
y=V.Q("A","Z")
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
x=new V.aw()
x.sa7(H.c([],[V.aB]))
C.a.h(y.a,x)
y=V.w(new H.v('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.Q("a","z")
C.a.h(x.a,y)
y=V.Q("A","Z")
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
jk:{"^":"aT;a,0b,0c,0d",
eF:function(a){H.j(a,"$isa",[P.h],"$asa")
this.sc8(H.c([],[[P.a,W.aV]]))
this.M(C.a.k(a,"\n"),"#111")},
bU:function(a){},
bD:function(){return}},
jy:{"^":"b;a,b,0c",
dL:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fq().gcQ().l(0,H.i(z))
if(y==null)if(d){c.$0()
this.dJ(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dX(this.c).h(0,v)
t=W.iw("radio")
t.checked=x
t.name=z
z=W.ab
W.a1(t,"change",H.l(new V.jz(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
C.F.C(v,t)
s=w.createElement("span")
s.textContent=b
C.F.C(v,s)
J.dX(this.c).h(0,w.createElement("br"))},
b5:function(a,b,c){return this.dL(a,b,c,!1)},
dJ:function(a){var z,y,x,w,v
z=P.fq()
y=P.h
x=P.iP(z.gcQ(),y,y)
x.q(0,this.a,a)
w=z.eK(0,x)
y=window.history
v=w.i(0)
y.toString;(y&&C.W).hY(y,new P.lF([],[]).cW(""),"",v)}},
jz:{"^":"n:19;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dJ(this.d)}}},
jU:{"^":"b;0a,0b",
fs:function(a,b){var z,y,x,w,v,u,t
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
t=W.ab
W.a1(z,"scroll",H.l(new V.jX(x),{func:1,ret:-1,args:[t]}),!1,t)},
dN:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.j(a,"$isa",[P.h],"$asa")
this.i8()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.eP(C.a.jE(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
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
if(H.hp(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=H.C(r[1])
q.textContent=H.C(r[0])
C.j.C(y,q)}else{p=P.c9(C.I,s,C.m,!1)
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
f3:function(a){var z,y,x,w
z=new V.hY("dart")
z.bs("dart")
y=new V.im("glsl")
y.bs("glsl")
x=new V.io("html")
x.bs("html")
w=C.a.ju(H.c([z,y,x],[V.aT]),new V.jY(a))
if(w!=null)return w
z=new V.jk("plain")
z.bs("plain")
return z},
dM:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.j(a2,"$isa",[P.h],"$asa")
z=H.c([],[P.m])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.bP(w).a5(w,"+")){C.a.q(a2,x,C.b.ar(w,1))
C.a.h(z,1)
y=!0}else if(C.b.a5(w,"-")){C.a.q(a2,x,C.b.ar(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.f3(a0)
v.eF(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.j.C(t,s)
C.j.C(this.a,t)
r=P.c9(C.I,a,C.m,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.dZ(null)
n.href="#"+H.i(r)
n.textContent=a
C.j.C(o,n)
C.x.C(p,o)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.y)(w),++e)C.x.C(f,w[e])
C.n.C(j,i)
C.n.C(j,h)
C.n.C(j,f)
C.o.C(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.y)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gS(w);b.B();)C.x.C(h,b.gJ())
C.n.C(j,i)
C.n.C(j,h)
C.o.C(s,j)}},
iP:function(a){var z,y,x,w,v,u,t
H.j(a,"$isa",[P.h],"$asa")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
C.j.C(this.a,y)
w=C.o.hc(y,-1)
x=H.e((w&&C.n).ds(w,-1),"$iscw").style
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
t=H.e(C.n.ds(w,-1),"$iscw")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.x).C(t,u)}},
i8:function(){var z,y,x,w
if(this.b!=null)return
z=V.cx()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Bold")
x=V.w(new H.v("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").k(0,"Bold")
x=new V.aw()
w=[V.aB]
x.sa7(H.c([],w))
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
x=new V.aw()
x.sa7(H.c([],w))
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
x=new V.aw()
x.sa7(H.c([],w))
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
y=new V.aw()
y.sa7(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").k(0,"LinkEnd")
y=V.w(new H.v("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").k(0,"LinkTail")
y=new V.aw()
y.sa7(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.br())
x=z.j(0,"Other").k(0,"Other")
y=new V.aw()
y.sa7(H.c([],w))
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
n:{
jV:function(a,b){var z=new V.jU()
z.fs(a,!0)
return z}}},
jX:{"^":"n:19;a",
$1:function(a){P.f9(C.y,new V.jW(this.a))}},
jW:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.k.ap(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}},
jY:{"^":"n:52;a",
$1:function(a){return H.e(a,"$isaT").a===this.a}}}],["","",,N,{"^":"",
hl:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=V.jV("Test 024",!0)
y=W.e8(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.j.C(z.a,y)
x=[P.h]
z.dN(H.c(["Test of the Material Lighting shader with a simple spot light. ","Use Ctrl plus the mouse to move the light."],x))
z.iP(H.c(["shapes"],x))
z.dN(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=C.z.cZ(x,"testCanvas")
if(w==null)H.r(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.k9(w,!0,!0,!0,!1)
u=U.cZ(null)
u.h(0,U.bS(V.eG(0,0,-2.5)))
u.h(0,U.ft(!1,!0,v.r,!1,!1,!1,null,!1))
t=new V.a0(1,1,1)
s=new D.cv()
s.d=new V.a0(1,1,1)
s.e=3.141592653589793
s.f=3.141592653589793
s.r=1
s.x=0
s.y=0
s.a=V.eQ()
s.b=V.fA()
r=s.c
s.c=u
u.gD().h(0,s.ghr())
q=new D.J("mover",r,s.c,s,[U.ah])
q.b=!0
s.ac(q)
if(!s.d.u(0,t)){r=s.d
s.d=t
q=new D.J("color",r,t,s,[V.a0])
q.b=!0
s.ac(q)}q=s.e
if(!$.p.$2(q,0.6)){r=s.e
s.e=0.6
q=new D.J("cutoff",r,0.6,s,[P.q])
q.b=!0
s.ac(q)}q=s.f
if(!$.p.$2(q,0.5)){r=s.f
s.f=0.5
q=new D.J("coneAngle",r,0.5,s,[P.q])
q.b=!0
s.ac(q)}q=s.r
if(!$.p.$2(q,0.5)){r=s.r
s.r=0.5
q=new D.J("attenuation0",r,0.5,s,[P.q])
q.b=!0
s.ac(q)}q=s.x
if(!$.p.$2(q,0.05)){r=s.x
s.x=0.05
q=new D.J("attenuation1",r,0.05,s,[P.q])
q.b=!0
s.ac(q)}p=O.eC()
p.dx.h(0,s)
p.f.sae(0,new V.a0(0,0,0))
q=p.r
q.sae(0,new V.a0(0,0,0))
q=p.x
q.sae(0,new V.a0(0.7,0.7,0.7))
q=p.z
q.sae(0,new V.a0(0.3,0.3,0.3))
q=p.z
if(q.c===C.d){q.c=C.i
q.c_()
q.cj(100)
o=q.a
o.a=null
o.ai(null)}q.cj(100)
n=E.cY(null,!0,null,"",null,null)
n.saa(0,F.hr(30,1,15,0.5))
m=E.cY(null,!0,null,"",null,null)
m.saU(U.bS(V.eF(3,3,3,1)))
q=F.dL(1,null,null,1)
q.cH()
m.saa(0,q)
l=U.cZ(null)
l.h(0,U.ft(!1,!1,v.r,!1,!1,!1,null,!1))
l.h(0,U.bS(V.eE(3.141592653589793)))
l.h(0,U.bS(V.eG(0,0,5)))
k=E.cY(null,!0,null,"",null,null)
q=U.cZ(null)
q.h(0,U.bS(V.eF(0.1,0.1,0.1,1)))
q.h(0,u)
k.saU(q)
k.saa(0,F.dM(0,!1,!0,1,40,1))
q=O.eC()
q.f.sae(0,new V.a0(1,1,1))
k.sbk(q)
q=new M.ia()
q.sfW(0,O.cW(E.at))
q.d.br(q.ghs(),q.ght())
q.e=null
q.f=null
q.r=null
q.x=null
j=new X.ji()
j.c=1.0471975511965976
j.d=0.1
j.e=2000
j.saU(null)
o=j.c
if(!$.p.$2(o,1.0471975511965976)){r=j.c
j.c=1.0471975511965976
o=new D.J("fov",r,1.0471975511965976,j,[P.q])
o.b=!0
j.b_(o)}o=j.d
if(!$.p.$2(o,0.1)){r=j.d
j.d=0.1
o=new D.J("near",r,0.1,j,[P.q])
o.b=!0
j.b_(o)}o=j.e
if(!$.p.$2(o,2000)){r=j.e
j.e=2000
o=new D.J("far",r,2000,j,[P.q])
o.b=!0
j.b_(o)}o=q.a
if(o!==j){if(o!=null)o.gD().K(0,q.gas())
r=q.a
q.a=j
j.gD().h(0,q.gas())
o=new D.J("camera",r,q.a,q,[X.e7])
o.b=!0
q.aL(o)}i=new X.il()
o=new V.bt(0,0,0,1)
i.a=o
i.b=!0
i.c=2000
i.d=!0
i.e=0
i.f=!1
o=$.eV
if(o==null){o=V.eU(0,0,1,1)
$.eV=o}i.r=o
o=q.b
if(o!==i){if(o!=null)o.gD().K(0,q.gas())
r=q.b
q.b=i
i.gD().h(0,q.gas())
o=new D.J("target",r,q.b,q,[X.f1])
o.b=!0
q.aL(o)}q.sbk(null)
q.sbk(p)
q.d.h(0,n)
q.d.h(0,m)
q.d.h(0,k)
q.a.saU(l)
o=v.d
if(o!==q){if(o!=null)o.gD().K(0,v.gd5())
v.d=q
q.gD().h(0,v.gd5())
v.fv()}q=new V.jy("shapes",!0)
x=C.z.cZ(x,"shapes")
q.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
q.b5(0,"Cube",new N.mZ(n))
q.b5(0,"Cylinder",new N.n_(n))
q.b5(0,"Cone",new N.n0(n))
q.b5(0,"Sphere",new N.n1(n))
q.dL(0,"Toroid",new N.n2(n),!0)
q.b5(0,"Knot",new N.n3(n))
x=v.z
if(x==null){x=D.S()
v.z=x}q={func:1,ret:-1,args:[D.z]}
o=H.l(new N.n4(z,p),q)
if(x.b==null)x.sb2(H.c([],[q]))
x=x.b;(x&&C.a).h(x,o)
V.nb(v)},
mZ:{"^":"n:0;a",
$0:function(){this.a.saa(0,F.dL(1,null,null,1))}},
n_:{"^":"n:0;a",
$0:function(){this.a.saa(0,F.dM(1,!0,!0,1,40,1))}},
n0:{"^":"n:0;a",
$0:function(){this.a.saa(0,F.dM(1,!0,!1,1,40,0))}},
n1:{"^":"n:0;a",
$0:function(){this.a.saa(0,F.nd(6,null,1,6))}},
n2:{"^":"n:0;a",
$0:function(){this.a.saa(0,F.hr(30,1,15,0.5))}},
n3:{"^":"n:0;a",
$0:function(){this.a.saa(0,F.mW(120,1,2,12,0.3,3))}},
n4:{"^":"n:8;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isz")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.dM("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dM("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.O=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.et.prototype
return J.iB.prototype}if(typeof a=="string")return J.bX.prototype
if(a==null)return J.eu.prototype
if(typeof a=="boolean")return J.iA.prototype
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.bn=function(a){if(typeof a=="string")return J.bX.prototype
if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.dP=function(a){if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.mJ=function(a){if(typeof a=="number")return J.bW.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c6.prototype
return a}
J.mK=function(a){if(typeof a=="number")return J.bW.prototype
if(typeof a=="string")return J.bX.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c6.prototype
return a}
J.bP=function(a){if(typeof a=="string")return J.bX.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c6.prototype
return a}
J.W=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.L=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).u(a,b)}
J.hs=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mJ(a).T(a,b)}
J.dV=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mK(a).E(a,b)}
J.ht=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mV(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bn(a).l(a,b)}
J.hu=function(a,b,c,d){return J.W(a).fO(a,b,c,d)}
J.hv=function(a,b){return J.bP(a).H(a,b)}
J.ce=function(a,b){return J.W(a).hT(a,b)}
J.cO=function(a,b,c){return J.W(a).hX(a,b,c)}
J.dW=function(a,b){return J.W(a).C(a,b)}
J.hw=function(a,b){return J.bP(a).a_(a,b)}
J.cP=function(a,b,c){return J.bn(a).j9(a,b,c)}
J.cf=function(a,b){return J.dP(a).a8(a,b)}
J.hx=function(a,b,c,d){return J.W(a).jr(a,b,c,d)}
J.hy=function(a){return J.W(a).giZ(a)}
J.dX=function(a){return J.W(a).gcu(a)}
J.bQ=function(a){return J.O(a).gW(a)}
J.b4=function(a){return J.dP(a).gS(a)}
J.ar=function(a){return J.bn(a).gp(a)}
J.hz=function(a){return J.W(a).gjZ(a)}
J.hA=function(a){return J.W(a).gkg(a)}
J.cQ=function(a,b){return J.W(a).aZ(a,b)}
J.dY=function(a){return J.dP(a).k0(a)}
J.hB=function(a,b){return J.W(a).k9(a,b)}
J.hC=function(a,b){return J.W(a).skl(a,b)}
J.hD=function(a,b,c){return J.W(a).fb(a,b,c)}
J.hE=function(a,b,c){return J.bP(a).t(a,b,c)}
J.hF=function(a){return J.bP(a).kk(a)}
J.ae=function(a){return J.O(a).i(a)}
I.a6=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.ch.prototype
C.q=W.cV.prototype
C.j=W.aV.prototype
C.T=W.i2.prototype
C.V=W.ip.prototype
C.W=W.iq.prototype
C.z=W.is.prototype
C.Y=J.I.prototype
C.a=J.b6.prototype
C.h=J.et.prototype
C.r=J.eu.prototype
C.k=J.bW.prototype
C.b=J.bX.prototype
C.a4=J.bY.prototype
C.F=W.iG.prototype
C.aa=W.jc.prototype
C.L=J.jj.prototype
C.M=W.jA.prototype
C.c=P.da.prototype
C.x=W.cw.prototype
C.o=W.k5.prototype
C.n=W.k6.prototype
C.C=J.c6.prototype
C.N=W.bG.prototype
C.O=W.kY.prototype
C.Q=new P.hJ(!1)
C.P=new P.hI(C.Q)
C.R=new P.jh()
C.S=new P.kK()
C.l=new P.lv()
C.d=new A.cj(0,"ColorSourceType.None")
C.i=new A.cj(1,"ColorSourceType.Solid")
C.e=new A.cj(2,"ColorSourceType.Texture2D")
C.f=new A.cj(3,"ColorSourceType.TextureCube")
C.y=new P.bu(0)
C.U=new P.bu(5e6)
C.X=new P.iu("element",!0,!1,!1,!1)
C.Z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.a_=function(hooks) {
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
C.D=function(hooks) { return hooks; }

C.a0=function(getTagFallback) {
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
C.a1=function() {
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
C.a2=function(hooks) {
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
C.a3=function(hooks) {
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
C.E=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.G=H.c(I.a6([127,2047,65535,1114111]),[P.m])
C.t=H.c(I.a6([0,0,32776,33792,1,10240,0,0]),[P.m])
C.a5=H.c(I.a6(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.u=H.c(I.a6([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.v=H.c(I.a6([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.a6=H.c(I.a6(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.H=H.c(I.a6([]),[P.h])
C.a7=H.c(I.a6([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.I=H.c(I.a6([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.w=H.c(I.a6([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.J=H.c(I.a6([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.a8=H.c(I.a6([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.K=H.c(I.a6([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.A=H.c(I.a6(["bind","if","ref","repeat","syntax"]),[P.h])
C.B=H.c(I.a6(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a9=new H.hV(0,{},C.H,[P.h,P.h])
C.m=new P.kD(!1)
$.ay=0
$.bs=null
$.e2=null
$.dE=!1
$.hi=null
$.hb=null
$.ho=null
$.cI=null
$.cL=null
$.dQ=null
$.bi=null
$.bL=null
$.bM=null
$.dF=!1
$.R=C.l
$.aH=null
$.cX=null
$.eo=null
$.en=null
$.ei=null
$.eh=null
$.eg=null
$.ef=null
$.p=V.j8()
$.eH=null
$.eP=null
$.b_=null
$.eV=null
$.fv=null
$.fz=null
$.fx=null
$.fy=null
$.cA=null
$.fw=null
$.eN=null
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
I.$lazy(y,x,w)}})(["ee","$get$ee",function(){return H.hh("_$dart_dartClosure")},"d0","$get$d0",function(){return H.hh("_$dart_js")},"fd","$get$fd",function(){return H.aD(H.cy({
toString:function(){return"$receiver$"}}))},"fe","$get$fe",function(){return H.aD(H.cy({$method$:null,
toString:function(){return"$receiver$"}}))},"ff","$get$ff",function(){return H.aD(H.cy(null))},"fg","$get$fg",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fk","$get$fk",function(){return H.aD(H.cy(void 0))},"fl","$get$fl",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fi","$get$fi",function(){return H.aD(H.fj(null))},"fh","$get$fh",function(){return H.aD(function(){try{null.$method$}catch(z){return z.message}}())},"fn","$get$fn",function(){return H.aD(H.fj(void 0))},"fm","$get$fm",function(){return H.aD(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dz","$get$dz",function(){return P.kZ()},"bN","$get$bN",function(){return[]},"fu","$get$fu",function(){return P.kH()},"fH","$get$fH",function(){return H.ja(H.bh(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"h_","$get$h_",function(){return P.jF("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"h7","$get$h7",function(){return P.mi()},"ed","$get$ed",function(){return{}},"fL","$get$fL",function(){return P.ey(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dA","$get$dA",function(){return P.ex(P.h,P.bU)},"fD","$get$fD",function(){return Z.ao(0)},"fB","$get$fB",function(){return Z.ao(511)},"aP","$get$aP",function(){return Z.ao(1)},"aO","$get$aO",function(){return Z.ao(2)},"aN","$get$aN",function(){return Z.ao(4)},"aQ","$get$aQ",function(){return Z.ao(8)},"aR","$get$aR",function(){return Z.ao(16)},"bE","$get$bE",function(){return Z.ao(32)},"bF","$get$bF",function(){return Z.ao(64)},"fC","$get$fC",function(){return Z.ao(96)},"bf","$get$bf",function(){return Z.ao(128)},"aM","$get$aM",function(){return Z.ao(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.E},{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:-1},{func:1,ret:-1,args:[W.av]},{func:1,ret:P.E,args:[F.a8]},{func:1,ret:P.E,args:[,,]},{func:1,ret:P.E,args:[F.af,P.q,P.q]},{func:1,ret:P.E,args:[D.z]},{func:1,ret:-1,args:[P.m,[P.o,E.at]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:-1,args:[W.ab]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.m,[P.o,V.ag]]},{func:1,ret:-1,args:[P.m,[P.o,U.ah]]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.m,[P.o,D.a3]]},{func:1,args:[,]},{func:1,ret:P.E,args:[W.ab]},{func:1,ret:P.K,args:[W.P,P.h,P.h,W.c8]},{func:1,ret:V.X,args:[P.q]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:P.K,args:[W.A]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.K,args:[W.aC]},{func:1,ret:P.K,args:[P.h]},{func:1,ret:-1,args:[W.bz]},{func:1,ret:P.h,args:[P.m]},{func:1,ret:P.E,args:[,]},{func:1,ret:P.q,args:[P.q]},{func:1,args:[W.ab]},{func:1,ret:P.E,args:[P.ak]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.M,args:[P.m]},{func:1,ret:P.E,args:[P.h,,]},{func:1,ret:P.K,args:[P.q,P.q]},{func:1,ret:-1,args:[W.bG]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.K,args:[[P.o,D.a3]]},{func:1,ret:P.E,args:[P.h]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.m]},{func:1,ret:[P.F,P.h,P.h],args:[[P.F,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:-1,args:[W.A,W.A]},{func:1,ret:P.m,args:[[P.a,P.m],P.m]},{func:1,ret:[P.aS,,],args:[,]},{func:1,ret:P.E,args:[,],opt:[,]},{func:1,ret:P.E,args:[P.bb]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,ret:P.K,args:[V.aT]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:W.P,args:[W.A]}]
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
if(x==y)H.ng(d||a)
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
Isolate.dN=a.dN
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
if(typeof dartMainRunner==="function")dartMainRunner(N.hl,[])
else N.hl([])})})()
//# sourceMappingURL=test.dart.js.map
