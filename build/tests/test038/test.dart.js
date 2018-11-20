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
var dart=[["","",,H,{"^":"",ml:{"^":"a;a"}}],["","",,J,{"^":"",
dD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cu:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dC==null){H.lV()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.cj("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cQ()]
if(v!=null)return v
v=H.lZ(a)
if(v!=null)return v
if(typeof a=="function")return C.X
y=Object.getPrototypeOf(a)
if(y==null)return C.F
if(y===Object.prototype)return C.F
if(typeof w=="function"){Object.defineProperty(w,$.$get$cQ(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
H:{"^":"a;",
u:function(a,b){return a===b},
gR:function(a){return H.bt(a)},
i:["eV",function(a){return"Instance of '"+H.b0(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
hS:{"^":"H;",
i:function(a){return String(a)},
gR:function(a){return a?519018:218159},
$isQ:1},
e9:{"^":"H;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gR:function(a){return 0},
$isA:1},
cR:{"^":"H;",
gR:function(a){return 0},
i:["eW",function(a){return String(a)}]},
iC:{"^":"cR;"},
ck:{"^":"cR;"},
bR:{"^":"cR;",
i:function(a){var z=a[$.$get$dU()]
if(z==null)return this.eW(a)
return"JavaScript function for "+H.j(J.ab(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscO:1},
aX:{"^":"H;$ti",
h:function(a,b){H.v(b,H.r(a,0))
if(!!a.fixed$length)H.p(P.S("add"))
a.push(b)},
Z:function(a,b){var z
if(!!a.fixed$length)H.p(P.S("remove"))
for(z=0;z<a.length;++z)if(J.N(a[z],b)){a.splice(z,1)
return!0}return!1},
cd:function(a,b){var z,y
H.i(b,"$isl",[H.r(a,0)],"$asl")
if(!!a.fixed$length)H.p(P.S("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.y)(b),++y)a.push(b[y])},
Y:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.aW(a))}},
A:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.p(z,y,H.j(a[y]))
return z.join(b)},
j6:function(a){return this.A(a,"")},
j_:function(a,b,c,d){var z,y,x
H.v(b,d)
H.m(c,{func:1,ret:d,args:[d,H.r(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.d(P.aW(a))}return y},
a9:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
eU:function(a,b,c){if(b<0||b>a.length)throw H.d(P.X(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.X(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.r(a,0)])
return H.c(a.slice(b,c),[H.r(a,0)])},
gay:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.hQ())},
ah:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
i:function(a){return P.cP(a,"[","]")},
gS:function(a){return new J.ap(a,a.length,0,[H.r(a,0)])},
gR:function(a){return H.bt(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.p(P.S("set length"))
if(b<0)throw H.d(P.X(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.d(H.bb(a,b))
return a[b]},
p:function(a,b,c){H.v(c,H.r(a,0))
if(!!a.immutable$list)H.p(P.S("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bb(a,b))
a[b]=c},
$isl:1,
$isb:1,
m:{
hR:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.cD(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.X(a,0,4294967295,"length",null))
return J.e6(new Array(a),b)},
e6:function(a,b){return J.c9(H.c(a,[b]))},
c9:function(a){H.c0(a)
a.fixed$length=Array
return a}}},
mk:{"^":"aX;$ti"},
ap:{"^":"a;a,b,c,0d,$ti",
sdg:function(a){this.d=H.v(a,H.r(this,0))},
gG:function(){return this.d},
B:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.y(z))
x=this.c
if(x>=y){this.sdg(null)
return!1}this.sdg(z[x]);++this.c
return!0},
$isaO:1},
ca:{"^":"H;",
jI:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.S(""+a+".toInt()"))},
cB:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.S(""+a+".floor()"))},
aj:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.S(""+a+".round()"))},
ez:function(a,b){var z,y
if(b>20)throw H.d(P.X(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
b9:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.d(P.X(b,2,36,"radix",null))
z=a.toString(b)
if(C.c.X(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.p(P.S("Unexpected toString result: "+z))
x=y.length
if(1>=x)return H.f(y,1)
z=y[1]
if(3>=x)return H.f(y,3)
w=+y[3]
x=y[2]
if(x!=null){z+=x
w-=x.length}return z+C.c.l("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gR:function(a){return a&0x1FFFFFFF},
bg:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eY:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dB(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.dB(a,b)},
dB:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.S("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
aI:function(a,b){var z
if(a>0)z=this.dz(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hP:function(a,b){if(b<0)throw H.d(H.ae(b))
return this.dz(a,b)},
dz:function(a,b){return b>31?0:a>>>b},
O:function(a,b){if(typeof b!=="number")throw H.d(H.ae(b))
return a<b},
$isu:1,
$isah:1},
e8:{"^":"ca;",$isk:1},
e7:{"^":"ca;"},
cb:{"^":"H;",
X:function(a,b){if(b<0)throw H.d(H.bb(a,b))
if(b>=a.length)H.p(H.bb(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.d(H.bb(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.G(b)
if(typeof b!=="string")throw H.d(P.cD(b,null,null))
return a+b},
aT:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ae(b))
c=P.aS(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a6:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ae(c))
if(typeof c!=="number")return c.O()
if(c<0||c>a.length)throw H.d(P.X(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a5:function(a,b){return this.a6(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ae(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.d(P.cf(b,null,null))
if(b>c)throw H.d(P.cf(b,null,null))
if(c>a.length)throw H.d(P.cf(c,null,null))
return a.substring(b,c)},
ar:function(a,b){return this.q(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.L)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
jl:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
ab:function(a,b){return this.jl(a,b," ")},
jm:function(a,b,c){var z=b-a.length
if(z<=0)return a
return a+this.l(c,z)},
eh:function(a,b,c){var z
if(c<0||c>a.length)throw H.d(P.X(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
eg:function(a,b){return this.eh(a,b,0)},
iH:function(a,b,c){if(c>a.length)throw H.d(P.X(c,0,a.length,null,null))
return H.fV(a,b,c)},
i:function(a){return a},
gR:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gn:function(a){return a.length},
$isen:1,
$iso:1}}],["","",,H,{"^":"",
cv:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hQ:function(){return new P.jb("No element")},
a_:{"^":"jI;a",
gn:function(a){return this.a.length},
j:function(a,b){return C.c.X(this.a,b)},
$asdi:function(){return[P.k]},
$asU:function(){return[P.k]},
$asl:function(){return[P.k]},
$asb:function(){return[P.k]}},
hy:{"^":"l;"},
eb:{"^":"a;a,b,c,0d,$ti",
saX:function(a){this.d=H.v(a,H.r(this,0))},
gG:function(){return this.d},
B:function(){var z,y,x,w
z=this.a
y=J.bd(z)
x=y.gn(z)
if(this.b!==x)throw H.d(P.aW(z))
w=this.c
if(w>=x){this.saX(null)
return!1}this.saX(y.a9(z,w));++this.c
return!0},
$isaO:1},
ih:{"^":"l;a,b,$ti",
gS:function(a){return new H.ii(J.bG(this.a),this.b,this.$ti)},
gn:function(a){return J.az(this.a)},
a9:function(a,b){return this.b.$1(J.cC(this.a,b))},
$asl:function(a,b){return[b]}},
ii:{"^":"aO;0a,b,c,$ti",
saX:function(a){this.a=H.v(a,H.r(this,1))},
B:function(){var z=this.b
if(z.B()){this.saX(this.c.$1(z.gG()))
return!0}this.saX(null)
return!1},
gG:function(){return this.a},
$asaO:function(a,b){return[b]}},
kb:{"^":"l;a,b,$ti",
gS:function(a){return new H.kc(J.bG(this.a),this.b,this.$ti)}},
kc:{"^":"aO;a,b,$ti",
B:function(){var z,y
for(z=this.a,y=this.b;z.B();)if(y.$1(z.gG()))return!0
return!1},
gG:function(){return this.a.gG()}},
c8:{"^":"a;$ti"},
di:{"^":"a;$ti",
p:function(a,b,c){H.v(c,H.af(this,"di",0))
throw H.d(P.S("Cannot modify an unmodifiable list"))}},
jI:{"^":"cd+di;"}}],["","",,H,{"^":"",
hn:function(){throw H.d(P.S("Cannot modify unmodifiable Map"))},
bg:function(a){var z,y
z=H.G(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
lN:function(a){return init.types[H.a6(a)]},
lY:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isaA},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ab(a)
if(typeof z!=="string")throw H.d(H.ae(a))
return z},
bt:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iM:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.G(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.X(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.c.F(w,u)|32)>x)return}return parseInt(a,b)},
b0:function(a){return H.iD(a)+H.dw(H.aV(a),0,null)},
iD:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.P||!!z.$isck){u=C.A(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bg(w.length>1&&C.c.F(w,0)===36?C.c.ar(w,1):w)},
iE:function(){if(!!self.location)return self.location.href
return},
es:function(a){var z,y,x,w,v
H.c0(a)
z=J.az(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iN:function(a){var z,y,x,w
z=H.c([],[P.k])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.ae(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.aI(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.ae(w))}return H.es(z)},
et:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.ae(x))
if(x<0)throw H.d(H.ae(x))
if(x>65535)return H.iN(a)}return H.es(a)},
iO:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bV:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.aI(z,10))>>>0,56320|z&1023)}}throw H.d(P.X(a,0,1114111,null,null))},
b_:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iL:function(a){var z=H.b_(a).getFullYear()+0
return z},
iJ:function(a){var z=H.b_(a).getMonth()+1
return z},
iF:function(a){var z=H.b_(a).getDate()+0
return z},
iG:function(a){var z=H.b_(a).getHours()+0
return z},
iI:function(a){var z=H.b_(a).getMinutes()+0
return z},
iK:function(a){var z=H.b_(a).getSeconds()+0
return z},
iH:function(a){var z=H.b_(a).getMilliseconds()+0
return z},
x:function(a){throw H.d(H.ae(a))},
f:function(a,b){if(a==null)J.az(a)
throw H.d(H.bb(a,b))},
bb:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aM(!0,b,"index",null)
z=H.a6(J.az(a))
if(!(b<0)){if(typeof z!=="number")return H.x(z)
y=b>=z}else y=!0
if(y)return P.bm(b,a,"index",null,z)
return P.cf(b,"index",null)},
lI:function(a,b,c){if(a>c)return new P.ce(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ce(a,c,!0,b,"end","Invalid value")
return new P.aM(!0,b,"end",null)},
ae:function(a){return new P.aM(!0,a,null,null)},
lC:function(a){if(typeof a!=="number")throw H.d(H.ae(a))
return a},
d:function(a){var z
if(a==null)a=new P.em()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fY})
z.name=""}else z.toString=H.fY
return z},
fY:function(){return J.ab(this.dartException)},
p:function(a){throw H.d(a)},
y:function(a){throw H.d(P.aW(a))},
ao:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ma(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.aI(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cS(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.el(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eP()
u=$.$get$eQ()
t=$.$get$eR()
s=$.$get$eS()
r=$.$get$eW()
q=$.$get$eX()
p=$.$get$eU()
$.$get$eT()
o=$.$get$eZ()
n=$.$get$eY()
m=v.aa(y)
if(m!=null)return z.$1(H.cS(H.G(y),m))
else{m=u.aa(y)
if(m!=null){m.method="call"
return z.$1(H.cS(H.G(y),m))}else{m=t.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=r.aa(y)
if(m==null){m=q.aa(y)
if(m==null){m=p.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=o.aa(y)
if(m==null){m=n.aa(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.el(H.G(y),m))}}return z.$1(new H.jH(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eC()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aM(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eC()
return a},
be:function(a){var z
if(a==null)return new H.fo(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fo(a)},
lL:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.p(0,a[y],a[x])}return b},
lX:function(a,b,c,d,e,f){H.e(a,"$iscO")
switch(H.a6(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.t("Unsupported number of arguments for wrapped closure"))},
ba:function(a,b){var z
H.a6(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lX)
a.$identity=z
return z},
hj:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.L(d).$isb){z.$reflectionInfo=d
x=H.iR(z).r}else x=d
w=e?Object.create(new H.jc().constructor.prototype):Object.create(new H.cF(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.at
if(typeof u!=="number")return u.C()
$.at=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dS(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.lN,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dL:H.cG
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.d("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dS(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
hg:function(a,b,c,d){var z=H.cG
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dS:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hi(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hg(y,!w,z,b)
if(y===0){w=$.at
if(typeof w!=="number")return w.C()
$.at=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bh
if(v==null){v=H.c1("self")
$.bh=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.at
if(typeof w!=="number")return w.C()
$.at=w+1
t+=w
w="return function("+t+"){return this."
v=$.bh
if(v==null){v=H.c1("self")
$.bh=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
hh:function(a,b,c,d){var z,y
z=H.cG
y=H.dL
switch(b?-1:a){case 0:throw H.d(H.j_("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hi:function(a,b){var z,y,x,w,v,u,t,s
z=$.bh
if(z==null){z=H.c1("self")
$.bh=z}y=$.dK
if(y==null){y=H.c1("receiver")
$.dK=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hh(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.at
if(typeof y!=="number")return y.C()
$.at=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.at
if(typeof y!=="number")return y.C()
$.at=y+1
return new Function(z+y+"}")()},
dy:function(a,b,c,d,e,f,g){return H.hj(a,b,H.a6(c),d,!!e,!!f,g)},
G:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.as(a,"String"))},
lJ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.as(a,"double"))},
m3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.as(a,"num"))},
fK:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.as(a,"bool"))},
a6:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.as(a,"int"))},
fT:function(a,b){throw H.d(H.as(a,H.bg(H.G(b).substring(3))))},
m5:function(a,b){throw H.d(H.hd(a,H.bg(H.G(b).substring(3))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.fT(a,b)},
h:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.m5(a,b)},
c0:function(a){if(a==null)return a
if(!!J.L(a).$isb)return a
throw H.d(H.as(a,"List<dynamic>"))},
fQ:function(a,b){var z
if(a==null)return a
z=J.L(a)
if(!!z.$isb)return a
if(z[b])return a
H.fT(a,b)},
fL:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a6(z)]
else return a.$S()}return},
bY:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fL(J.L(a))
if(z==null)return!1
return H.fz(z,null,b,null)},
m:function(a,b){var z,y
if(a==null)return a
if($.dt)return a
$.dt=!0
try{if(H.bY(a,b))return a
z=H.cy(b)
y=H.as(a,z)
throw H.d(y)}finally{$.dt=!1}},
dA:function(a,b){if(a!=null&&!H.dx(a,b))H.p(H.as(a,H.cy(b)))
return a},
fF:function(a){var z,y
z=J.L(a)
if(!!z.$isq){y=H.fL(z)
if(y!=null)return H.cy(y)
return"Closure"}return H.b0(a)},
m9:function(a){throw H.d(new P.hq(H.G(a)))},
fN:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aV:function(a){if(a==null)return
return a.$ti},
mJ:function(a,b,c){return H.bf(a["$as"+H.j(c)],H.aV(b))},
bZ:function(a,b,c,d){var z
H.G(c)
H.a6(d)
z=H.bf(a["$as"+H.j(c)],H.aV(b))
return z==null?null:z[d]},
af:function(a,b,c){var z
H.G(b)
H.a6(c)
z=H.bf(a["$as"+H.j(b)],H.aV(a))
return z==null?null:z[c]},
r:function(a,b){var z
H.a6(b)
z=H.aV(a)
return z==null?null:z[b]},
cy:function(a){return H.aU(a,null)},
aU:function(a,b){var z,y
H.i(b,"$isb",[P.o],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bg(a[0].builtin$cls)+H.dw(a,1,b)
if(typeof a=="function")return H.bg(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a6(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.j(b[y])}if('func' in a)return H.ls(a,b)
if('futureOr' in a)return"FutureOr<"+H.aU("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ls:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.i(b,"$isb",z,"$asb")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.c.C(t,b[r])
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
for(z=H.lK(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.G(z[l])
n=n+m+H.aU(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dw:function(a,b,c){var z,y,x,w,v,u
H.i(c,"$isb",[P.o],"$asb")
if(a==null)return""
z=new P.aj("")
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
bE:function(a,b,c,d){var z,y
H.G(b)
H.c0(c)
H.G(d)
if(a==null)return!1
z=H.aV(a)
y=J.L(a)
if(y[b]==null)return!1
return H.fI(H.bf(y[d],z),null,c,null)},
i:function(a,b,c,d){H.G(b)
H.c0(c)
H.G(d)
if(a==null)return a
if(H.bE(a,b,c,d))return a
throw H.d(H.as(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bg(b.substring(3))+H.dw(c,0,null),init.mangledGlobalNames)))},
fI:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.an(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.an(a[y],b,c[y],d))return!1
return!0},
mH:function(a,b,c){return a.apply(b,H.bf(J.L(b)["$as"+H.j(c)],H.aV(b)))},
fP:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="A"||a===-1||a===-2||H.fP(z)}return!1},
dx:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="A"||b===-1||b===-2||H.fP(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bY(a,b)}z=J.L(a).constructor
y=H.aV(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.an(z,null,b,null)},
v:function(a,b){if(a!=null&&!H.dx(a,b))throw H.d(H.as(a,H.cy(b)))
return a},
an:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.an(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="A")return!0
if('func' in c)return H.fz(a,b,c,d)
if('func' in a)return c.builtin$cls==="cO"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.an("type" in a?a.type:null,b,x,d)
else if(H.an(a,b,x,d))return!0
else{if(!('$is'+"bl" in y.prototype))return!1
w=y.prototype["$as"+"bl"]
v=H.bf(w,z?a.slice(1):null)
return H.an(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fI(H.bf(r,z),b,u,d)},
fz:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.m2(m,b,l,d)},
m2:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.an(c[w],d,a[w],b))return!1}return!0},
mI:function(a,b,c){Object.defineProperty(a,H.G(b),{value:c,enumerable:false,writable:true,configurable:true})},
lZ:function(a){var z,y,x,w,v,u
z=H.G($.fO.$1(a))
y=$.ct[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cw[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.G($.fH.$2(a,z))
if(z!=null){y=$.ct[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cw[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cx(x)
$.ct[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cw[z]=x
return x}if(v==="-"){u=H.cx(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fS(a,x)
if(v==="*")throw H.d(P.cj(z))
if(init.leafTags[z]===true){u=H.cx(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fS(a,x)},
fS:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dD(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cx:function(a){return J.dD(a,!1,null,!!a.$isaA)},
m1:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cx(z)
else return J.dD(z,c,null,null)},
lV:function(){if(!0===$.dC)return
$.dC=!0
H.lW()},
lW:function(){var z,y,x,w,v,u,t,s
$.ct=Object.create(null)
$.cw=Object.create(null)
H.lR()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fU.$1(v)
if(u!=null){t=H.m1(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lR:function(){var z,y,x,w,v,u,t
z=C.U()
z=H.b9(C.R,H.b9(C.W,H.b9(C.z,H.b9(C.z,H.b9(C.V,H.b9(C.S,H.b9(C.T(C.A),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fO=new H.lS(v)
$.fH=new H.lT(u)
$.fU=new H.lU(t)},
b9:function(a,b){return a(b)||b},
fV:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fW:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hm:{"^":"a;$ti",
i:function(a){return P.cT(this)},
p:function(a,b,c){H.v(b,H.r(this,0))
H.v(c,H.r(this,1))
return H.hn()},
$isF:1},
ho:{"^":"hm;a,b,c,$ti",
gn:function(a){return this.a},
bs:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j:function(a,b){if(!this.bs(b))return
return this.dh(b)},
dh:function(a){return this.b[H.G(a)]},
Y:function(a,b){var z,y,x,w,v
z=H.r(this,1)
H.m(b,{func:1,ret:-1,args:[H.r(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.v(this.dh(v),z))}}},
iQ:{"^":"a;a,b,c,d,e,f,r,0x",m:{
iR:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c9(z)
y=z[0]
x=z[1]
return new H.iQ(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ju:{"^":"a;a,b,c,d,e,f",
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
m:{
aw:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ju(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ci:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eV:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iz:{"^":"a0;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
m:{
el:function(a,b){return new H.iz(a,b==null?null:b.method)}}},
hV:{"^":"a0;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
m:{
cS:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hV(a,y,z?null:b.receiver)}}},
jH:{"^":"a0;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ma:{"^":"q:15;a",
$1:function(a){if(!!J.L(a).$isa0)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fo:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaD:1},
q:{"^":"a;",
i:function(a){return"Closure '"+H.b0(this).trim()+"'"},
geG:function(){return this},
$iscO:1,
geG:function(){return this}},
eF:{"^":"q;"},
jc:{"^":"eF;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bg(z)+"'"}},
cF:{"^":"eF;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cF))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gR:function(a){var z,y
z=this.c
if(z==null)y=H.bt(this.a)
else y=typeof z!=="object"?J.bF(z):H.bt(z)
return(y^H.bt(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.b0(z)+"'")},
m:{
cG:function(a){return a.a},
dL:function(a){return a.c},
c1:function(a){var z,y,x,w,v
z=new H.cF("self","target","receiver","name")
y=J.c9(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jv:{"^":"a0;a",
i:function(a){return this.a},
m:{
as:function(a,b){return new H.jv("TypeError: "+H.j(P.c7(a))+": type '"+H.fF(a)+"' is not a subtype of type '"+b+"'")}}},
hc:{"^":"a0;a",
i:function(a){return this.a},
m:{
hd:function(a,b){return new H.hc("CastError: "+H.j(P.c7(a))+": type '"+H.fF(a)+"' is not a subtype of type '"+b+"'")}}},
iZ:{"^":"a0;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
m:{
j_:function(a){return new H.iZ(a)}}},
aP:{"^":"ic;a,0b,0c,0d,0e,0f,r,$ti",
gn:function(a){return this.a},
gcF:function(){return new H.i0(this,[H.r(this,0)])},
bs:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dd(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dd(y,a)}else return this.j3(a)},
j3:function(a){var z=this.d
if(z==null)return!1
return this.cE(this.c_(z,this.cD(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bj(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bj(w,b)
x=y==null?null:y.b
return x}else return this.j4(b)},
j4:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c_(z,this.cD(a))
x=this.cE(y,a)
if(x<0)return
return y[x].b},
p:function(a,b,c){var z,y
H.v(b,H.r(this,0))
H.v(c,H.r(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c2()
this.b=z}this.d4(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c2()
this.c=y}this.d4(y,b,c)}else this.j5(b,c)},
j5:function(a,b){var z,y,x,w
H.v(a,H.r(this,0))
H.v(b,H.r(this,1))
z=this.d
if(z==null){z=this.c2()
this.d=z}y=this.cD(a)
x=this.c_(z,y)
if(x==null)this.ca(z,y,[this.c3(a,b)])
else{w=this.cE(x,a)
if(w>=0)x[w].b=b
else x.push(this.c3(a,b))}},
Y:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aW(this))
z=z.c}},
d4:function(a,b,c){var z
H.v(b,H.r(this,0))
H.v(c,H.r(this,1))
z=this.bj(a,b)
if(z==null)this.ca(a,b,this.c3(b,c))
else z.b=c},
c3:function(a,b){var z,y
z=new H.i_(H.v(a,H.r(this,0)),H.v(b,H.r(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
cD:function(a){return J.bF(a)&0x3ffffff},
cE:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
i:function(a){return P.cT(this)},
bj:function(a,b){return a[b]},
c_:function(a,b){return a[b]},
ca:function(a,b,c){a[b]=c},
fD:function(a,b){delete a[b]},
dd:function(a,b){return this.bj(a,b)!=null},
c2:function(){var z=Object.create(null)
this.ca(z,"<non-identifier-key>",z)
this.fD(z,"<non-identifier-key>")
return z},
$isea:1},
i_:{"^":"a;a,b,0c,0d"},
i0:{"^":"hy;a,$ti",
gn:function(a){return this.a.a},
gS:function(a){var z,y
z=this.a
y=new H.i1(z,z.r,this.$ti)
y.c=z.e
return y}},
i1:{"^":"a;a,b,0c,0d,$ti",
sd3:function(a){this.d=H.v(a,H.r(this,0))},
gG:function(){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aW(z))
else{z=this.c
if(z==null){this.sd3(null)
return!1}else{this.sd3(z.a)
this.c=this.c.c
return!0}}},
$isaO:1},
lS:{"^":"q:15;a",
$1:function(a){return this.a(a)}},
lT:{"^":"q:23;a",
$2:function(a,b){return this.a(a,b)}},
lU:{"^":"q:27;a",
$1:function(a){return this.a(H.G(a))}},
hT:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isen:1,
$isiS:1,
m:{
hU:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(P.R("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
lK:function(a){return J.e6(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
m4:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
b7:function(a){return a},
iw:function(a){return new Int8Array(a)},
aL:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bb(b,a))},
lm:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.lI(a,b,c))
return b},
cZ:{"^":"H;",$iscZ:1,$isjw:1,"%":";ArrayBufferView;cY|fk|fl|ix|fm|fn|aZ"},
cY:{"^":"cZ;",
gn:function(a){return a.length},
$isaA:1,
$asaA:I.dz},
ix:{"^":"fl;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
p:function(a,b,c){H.lJ(c)
H.aL(b,a,a.length)
a[b]=c},
$asc8:function(){return[P.u]},
$asU:function(){return[P.u]},
$isl:1,
$asl:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]},
"%":"Float32Array"},
aZ:{"^":"fn;",
p:function(a,b,c){H.a6(c)
H.aL(b,a,a.length)
a[b]=c},
$asc8:function(){return[P.k]},
$asU:function(){return[P.k]},
$isl:1,
$asl:function(){return[P.k]},
$isb:1,
$asb:function(){return[P.k]}},
mm:{"^":"aZ;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mn:{"^":"aZ;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mo:{"^":"aZ;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mp:{"^":"aZ;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mq:{"^":"aZ;",
gn:function(a){return a.length},
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
$ismy:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
ek:{"^":"aZ;",
gn:function(a){return a.length},
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
$isek:1,
$isI:1,
"%":";Uint8Array"},
fk:{"^":"cY+U;"},
fl:{"^":"fk+c8;"},
fm:{"^":"cY+U;"},
fn:{"^":"fm+c8;"}}],["","",,P,{"^":"",
ke:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lz()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.ba(new P.kg(z),1)).observe(y,{childList:true})
return new P.kf(z,y,x)}else if(self.setImmediate!=null)return P.lA()
return P.lB()},
mB:[function(a){self.scheduleImmediate(H.ba(new P.kh(H.m(a,{func:1,ret:-1})),0))},"$1","lz",4,0,9],
mC:[function(a){self.setImmediate(H.ba(new P.ki(H.m(a,{func:1,ret:-1})),0))},"$1","lA",4,0,9],
mD:[function(a){P.d6(C.t,H.m(a,{func:1,ret:-1}))},"$1","lB",4,0,9],
d6:function(a,b){var z
H.m(b,{func:1,ret:-1})
z=C.h.a2(a.a,1000)
return P.kS(z<0?0:z,b)},
eM:function(a,b){var z
H.m(b,{func:1,ret:-1,args:[P.b1]})
z=C.h.a2(a.a,1000)
return P.kT(z<0?0:z,b)},
lv:function(a,b){if(H.bY(a,{func:1,args:[P.a,P.aD]}))return H.m(a,{func:1,ret:null,args:[P.a,P.aD]})
if(H.bY(a,{func:1,args:[P.a]}))return H.m(a,{func:1,ret:null,args:[P.a]})
throw H.d(P.cD(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lu:function(){var z,y
for(;z=$.b8,z!=null;){$.bC=null
y=z.b
$.b8=y
if(y==null)$.bB=null
z.a.$0()}},
mG:[function(){$.du=!0
try{P.lu()}finally{$.bC=null
$.du=!1
if($.b8!=null)$.$get$dp().$1(P.fJ())}},"$0","fJ",0,0,3],
fE:function(a){var z=new P.fd(H.m(a,{func:1,ret:-1}))
if($.b8==null){$.bB=z
$.b8=z
if(!$.du)$.$get$dp().$1(P.fJ())}else{$.bB.b=z
$.bB=z}},
ly:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.b8
if(z==null){P.fE(a)
$.bC=$.bB
return}y=new P.fd(a)
x=$.bC
if(x==null){y.b=z
$.bC=y
$.b8=y}else{y.b=x.b
x.b=y
$.bC=y
if(y.b==null)$.bB=y}},
m6:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.M
if(C.k===y){P.cs(null,null,C.k,a)
return}y.toString
P.cs(null,null,y,H.m(y.cj(a),z))},
eL:function(a,b){var z,y
z={func:1,ret:-1}
H.m(b,z)
y=$.M
if(y===C.k){y.toString
return P.d6(a,b)}return P.d6(a,H.m(y.cj(b),z))},
jr:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b1]}
H.m(b,z)
y=$.M
if(y===C.k){y.toString
return P.eM(a,b)}x=y.dJ(b,P.b1)
$.M.toString
return P.eM(a,H.m(x,z))},
cr:function(a,b,c,d,e){var z={}
z.a=d
P.ly(new P.lw(z,e))},
fA:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.M
if(y===c)return d.$0()
$.M=c
z=y
try{y=d.$0()
return y}finally{$.M=z}},
fB:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.v(e,g)
y=$.M
if(y===c)return d.$1(e)
$.M=c
z=y
try{y=d.$1(e)
return y}finally{$.M=z}},
lx:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
y=$.M
if(y===c)return d.$2(e,f)
$.M=c
z=y
try{y=d.$2(e,f)
return y}finally{$.M=z}},
cs:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.k!==c
if(z)d=!(!z||!1)?c.cj(d):c.iy(d,-1)
P.fE(d)},
kg:{"^":"q:17;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kf:{"^":"q:35;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kh:{"^":"q:2;a",
$0:function(){this.a.$0()}},
ki:{"^":"q:2;a",
$0:function(){this.a.$0()}},
fp:{"^":"a;a,0b,c",
fi:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ba(new P.kV(this,b),0),a)
else throw H.d(P.S("`setTimeout()` not found."))},
fj:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.ba(new P.kU(this,a,Date.now(),b),0),a)
else throw H.d(P.S("Periodic timer."))},
$isb1:1,
m:{
kS:function(a,b){var z=new P.fp(!0,0)
z.fi(a,b)
return z},
kT:function(a,b){var z=new P.fp(!1,0)
z.fj(a,b)
return z}}},
kV:{"^":"q:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kU:{"^":"q:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.eY(w,x)}z.c=y
this.d.$1(z)}},
b6:{"^":"a;0a,b,c,d,e,$ti",
jc:function(a){if(this.c!==6)return!0
return this.b.b.cO(H.m(this.d,{func:1,ret:P.Q,args:[P.a]}),a.a,P.Q,P.a)},
j2:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.r(this,1)}
w=this.b.b
if(H.bY(z,{func:1,args:[P.a,P.aD]}))return H.dA(w.jC(z,a.a,a.b,null,y,P.aD),x)
else return H.dA(w.cO(H.m(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aK:{"^":"a;dA:a<,b,0hF:c<,$ti",
ey:function(a,b,c){var z,y,x,w
z=H.r(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.M
if(y!==C.k){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lv(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aK(0,$.M,[c])
w=b==null?1:3
this.d5(new P.b6(x,w,a,b,[z,c]))
return x},
jH:function(a,b){return this.ey(a,null,b)},
d5:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isb6")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaK")
z=y.a
if(z<4){y.d5(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cs(null,null,z,H.m(new P.kq(this,a),{func:1,ret:-1}))}},
du:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isb6")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaK")
y=u.a
if(y<4){u.du(a)
return}this.a=y
this.c=u.c}z.a=this.bo(a)
y=this.b
y.toString
P.cs(null,null,y,H.m(new P.kv(z,this),{func:1,ret:-1}))}},
c8:function(){var z=H.e(this.c,"$isb6")
this.c=null
return this.bo(z)},
bo:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d8:function(a){var z,y,x
z=H.r(this,0)
H.dA(a,{futureOr:1,type:z})
y=this.$ti
if(H.bE(a,"$isbl",y,"$asbl"))if(H.bE(a,"$isaK",y,null))P.fg(a,this)
else P.kr(a,this)
else{x=this.c8()
H.v(a,z)
this.a=4
this.c=a
P.bx(this,x)}},
d9:function(a,b){var z
H.e(b,"$isaD")
z=this.c8()
this.a=8
this.c=new P.ai(a,b)
P.bx(this,z)},
$isbl:1,
m:{
kr:function(a,b){var z,y,x
b.a=1
try{a.ey(new P.ks(b),new P.kt(b),null)}catch(x){z=H.ao(x)
y=H.be(x)
P.m6(new P.ku(b,z,y))}},
fg:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaK")
if(z>=4){y=b.c8()
b.a=a.a
b.c=a.c
P.bx(b,y)}else{y=H.e(b.c,"$isb6")
b.a=2
b.c=a
a.du(y)}},
bx:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isai")
y=y.b
u=v.a
t=v.b
y.toString
P.cr(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.e(r,"$isai")
y=y.b
u=r.a
t=r.b
y.toString
P.cr(null,null,y,u,t)
return}o=$.M
if(o==null?q!=null:o!==q)$.M=q
else o=null
y=b.c
if(y===8)new P.ky(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kx(x,b,r).$0()}else if((y&2)!==0)new P.kw(z,x,b).$0()
if(o!=null)$.M=o
y=x.b
if(!!J.L(y).$isbl){if(y.a>=4){n=H.e(t.c,"$isb6")
t.c=null
b=t.bo(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fg(y,t)
return}}m=b.b
n=H.e(m.c,"$isb6")
m.c=null
b=m.bo(n)
y=x.a
u=x.b
if(!y){H.v(u,H.r(m,0))
m.a=4
m.c=u}else{H.e(u,"$isai")
m.a=8
m.c=u}z.a=m
y=m}}}},
kq:{"^":"q:2;a,b",
$0:function(){P.bx(this.a,this.b)}},
kv:{"^":"q:2;a,b",
$0:function(){P.bx(this.b,this.a.a)}},
ks:{"^":"q:17;a",
$1:function(a){var z=this.a
z.a=0
z.d8(a)}},
kt:{"^":"q:28;a",
$2:function(a,b){this.a.d9(a,H.e(b,"$isaD"))},
$1:function(a){return this.$2(a,null)}},
ku:{"^":"q:2;a,b,c",
$0:function(){this.a.d9(this.b,this.c)}},
ky:{"^":"q:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ev(H.m(w.d,{func:1}),null)}catch(v){y=H.ao(v)
x=H.be(v)
if(this.d){w=H.e(this.a.a.c,"$isai").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isai")
else u.b=new P.ai(y,x)
u.a=!0
return}if(!!J.L(z).$isbl){if(z instanceof P.aK&&z.gdA()>=4){if(z.gdA()===8){w=this.b
w.b=H.e(z.ghF(),"$isai")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.jH(new P.kz(t),null)
w.a=!1}}},
kz:{"^":"q:51;a",
$1:function(a){return this.a}},
kx:{"^":"q:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.r(x,0)
v=H.v(this.c,w)
u=H.r(x,1)
this.a.b=x.b.b.cO(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ao(t)
y=H.be(t)
x=this.a
x.b=new P.ai(z,y)
x.a=!0}}},
kw:{"^":"q:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isai")
w=this.c
if(w.jc(z)&&w.e!=null){v=this.b
v.b=w.j2(z)
v.a=!1}}catch(u){y=H.ao(u)
x=H.be(u)
w=H.e(this.a.a.c,"$isai")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ai(y,x)
s.a=!0}}},
fd:{"^":"a;a,0b"},
jd:{"^":"a;$ti",
gn:function(a){var z,y,x,w
z={}
y=new P.aK(0,$.M,[P.k])
z.a=0
x=H.r(this,0)
w=H.m(new P.jf(z,this),{func:1,ret:-1,args:[x]})
H.m(new P.jg(z,y),{func:1,ret:-1})
W.Y(this.a,this.b,w,!1,x)
return y}},
jf:{"^":"q;a,b",
$1:function(a){H.v(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.A,args:[H.r(this.b,0)]}}},
jg:{"^":"q:2;a,b",
$0:function(){this.b.d8(this.a.a)}},
d4:{"^":"a;$ti"},
je:{"^":"a;"},
b1:{"^":"a;"},
ai:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isa0:1},
lk:{"^":"a;",$ismA:1},
lw:{"^":"q:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.em()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
kK:{"^":"lk;",
jD:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.k===$.M){a.$0()
return}P.fA(null,null,this,a,-1)}catch(x){z=H.ao(x)
y=H.be(x)
P.cr(null,null,this,z,H.e(y,"$isaD"))}},
jE:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.k===$.M){a.$1(b)
return}P.fB(null,null,this,a,b,-1,c)}catch(x){z=H.ao(x)
y=H.be(x)
P.cr(null,null,this,z,H.e(y,"$isaD"))}},
iy:function(a,b){return new P.kM(this,H.m(a,{func:1,ret:b}),b)},
cj:function(a){return new P.kL(this,H.m(a,{func:1,ret:-1}))},
dJ:function(a,b){return new P.kN(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
ev:function(a,b){H.m(a,{func:1,ret:b})
if($.M===C.k)return a.$0()
return P.fA(null,null,this,a,b)},
cO:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.M===C.k)return a.$1(b)
return P.fB(null,null,this,a,b,c,d)},
jC:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.M===C.k)return a.$2(b,c)
return P.lx(null,null,this,a,b,c,d,e,f)}},
kM:{"^":"q;a,b,c",
$0:function(){return this.a.ev(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kL:{"^":"q:3;a,b",
$0:function(){return this.a.jD(this.b)}},
kN:{"^":"q;a,b,c",
$1:function(a){var z=this.c
return this.a.jE(this.b,H.v(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i2:function(a,b,c,d,e){return new H.aP(0,0,[d,e])},
i4:function(a,b,c){H.c0(a)
return H.i(H.lL(a,new H.aP(0,0,[b,c])),"$isea",[b,c],"$asea")},
i3:function(a,b){return new H.aP(0,0,[a,b])},
i7:function(a,b,c,d){return new P.kE(0,0,[d])},
hP:function(a,b,c){var z,y
if(P.dv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bD()
C.a.h(y,a)
try{P.lt(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.eD(b,H.fQ(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
cP:function(a,b,c){var z,y,x
if(P.dv(a))return b+"..."+c
z=new P.aj(b)
y=$.$get$bD()
C.a.h(y,a)
try{x=z
x.a=P.eD(x.gaE(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaE()+c
y=z.gaE()
return y.charCodeAt(0)==0?y:y},
dv:function(a){var z,y
for(z=0;y=$.$get$bD(),z<y.length;++z)if(a===y[z])return!0
return!1},
lt:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gS(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.B())return
w=H.j(z.gG())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.B()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gG();++x
if(!z.B()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gG();++x
for(;z.B();t=s,s=r){r=z.gG();++x
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
i5:function(a,b,c){var z=P.i2(null,null,null,b,c)
a.Y(0,new P.i6(z,b,c))
return z},
cT:function(a){var z,y,x
z={}
if(P.dv(a))return"{...}"
y=new P.aj("")
try{C.a.h($.$get$bD(),a)
x=y
x.a=x.gaE()+"{"
z.a=!0
a.Y(0,new P.id(z,y))
z=y
z.a=z.gaE()+"}"}finally{z=$.$get$bD()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaE()
return z.charCodeAt(0)==0?z:z},
kE:{"^":"kA;a,0b,0c,0d,0e,0f,r,$ti",
gS:function(a){return P.fi(this,this.r,H.r(this,0))},
gn:function(a){return this.a},
h:function(a,b){var z
H.v(b,H.r(this,0))
if(typeof b==="number"&&(b&0x3ffffff)===b){z=this.c
if(z==null){z=P.fj()
this.c=z}return this.fw(z,b)}else return this.fk(b)},
fk:function(a){var z,y,x
H.v(a,H.r(this,0))
z=this.d
if(z==null){z=P.fj()
this.d=z}y=this.da(a)
x=z[y]
if(x==null)z[y]=[this.bW(a)]
else{if(this.di(x,a)>=0)return!1
x.push(this.bW(a))}return!0},
Z:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.hx(this.c,b)
else return this.hw(b)},
hw:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.fM(z,a)
x=this.di(y,a)
if(x<0)return!1
this.dC(y.splice(x,1)[0])
return!0},
fw:function(a,b){H.v(b,H.r(this,0))
if(H.e(a[b],"$isdq")!=null)return!1
a[b]=this.bW(b)
return!0},
hx:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isdq")
if(z==null)return!1
this.dC(z)
delete a[b]
return!0},
dn:function(){this.r=this.r+1&67108863},
bW:function(a){var z,y
z=new P.dq(H.v(a,H.r(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dn()
return z},
dC:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dn()},
da:function(a){return J.bF(a)&0x3ffffff},
fM:function(a,b){return a[this.da(b)]},
di:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(a[y].a==b)return y
return-1},
m:{
fj:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dq:{"^":"a;a,0b,0c"},
kF:{"^":"a;a,b,0c,0d,$ti",
sd7:function(a){this.d=H.v(a,H.r(this,0))},
gG:function(){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aW(z))
else{z=this.c
if(z==null){this.sd7(null)
return!1}else{this.sd7(H.v(z.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
$isaO:1,
m:{
fi:function(a,b,c){var z=new P.kF(a,b,[c])
z.c=a.e
return z}}},
kA:{"^":"j0;"},
i6:{"^":"q:5;a,b,c",
$2:function(a,b){this.a.p(0,H.v(a,this.b),H.v(b,this.c))}},
cd:{"^":"kG;",$isl:1,$isb:1},
U:{"^":"a;$ti",
gS:function(a){return new H.eb(a,this.gn(a),0,[H.bZ(this,a,"U",0)])},
a9:function(a,b){return this.j(a,b)},
jK:function(a,b){var z,y
z=H.c([],[H.bZ(this,a,"U",0)])
C.a.sn(z,this.gn(a))
for(y=0;y<this.gn(a);++y)C.a.p(z,y,this.j(a,y))
return z},
jJ:function(a){return this.jK(a,!0)},
iY:function(a,b,c,d){var z
H.v(d,H.bZ(this,a,"U",0))
P.aS(b,c,this.gn(a),null,null,null)
for(z=b;z<c;++z)this.p(a,z,d)},
i:function(a){return P.cP(a,"[","]")}},
ic:{"^":"ie;"},
id:{"^":"q:5;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
ie:{"^":"a;$ti",
Y:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
for(z=this.gcF(),z=z.gS(z);z.B();){y=z.gG()
b.$2(y,this.j(0,y))}},
gn:function(a){var z=this.gcF()
return z.gn(z)},
i:function(a){return P.cT(this)},
$isF:1},
kY:{"^":"a;$ti",
p:function(a,b,c){H.v(b,H.r(this,0))
H.v(c,H.r(this,1))
throw H.d(P.S("Cannot modify unmodifiable map"))}},
ig:{"^":"a;$ti",
j:function(a,b){return this.a.j(0,b)},
p:function(a,b,c){this.a.p(0,H.v(b,H.r(this,0)),H.v(c,H.r(this,1)))},
Y:function(a,b){this.a.Y(0,H.m(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gn:function(a){var z=this.a
return z.gn(z)},
i:function(a){return J.ab(this.a)},
$isF:1},
f_:{"^":"kZ;a,$ti"},
j2:{"^":"a;$ti",
i:function(a){return P.cP(this,"{","}")},
a9:function(a,b){var z,y,x
if(b<0)H.p(P.X(b,0,null,"index",null))
for(z=P.fi(this,this.r,H.r(this,0)),y=0;z.B();){x=z.d
if(b===y)return x;++y}throw H.d(P.bm(b,this,"index",null,y))},
$isl:1,
$isey:1},
j0:{"^":"j2;"},
kG:{"^":"a+U;"},
kZ:{"^":"ig+kY;$ti"}}],["","",,P,{"^":"",h8:{"^":"bI;a",
je:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.aS(b,c,a.length,null,null,null)
z=$.$get$fe()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.c.F(a,y)
if(r===37){q=s+2
if(q<=c){p=H.cv(C.c.F(a,s))
o=H.cv(C.c.F(a,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.c.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aj("")
l=w.a+=C.c.q(a,x,y)
w.a=l+H.bV(r)
x=s
continue}}throw H.d(P.R("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.c.q(a,x,c)
k=l.length
if(v>=0)P.dJ(a,u,c,v,t,k)
else{j=C.h.bg(k-1,4)+1
if(j===1)throw H.d(P.R("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.c.aT(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.dJ(a,u,c,v,t,i)
else{j=C.h.bg(i,4)
if(j===1)throw H.d(P.R("Invalid base64 encoding length ",a,c))
if(j>1)a=C.c.aT(a,c,c,j===2?"==":"=")}return a},
$asbI:function(){return[[P.b,P.k],P.o]},
m:{
dJ:function(a,b,c,d,e,f){if(C.h.bg(f,4)!==0)throw H.d(P.R("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.R("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.R("Invalid base64 padding, more than two '=' characters",a,b))}}},h9:{"^":"bi;a",
$asbi:function(){return[[P.b,P.k],P.o]}},bI:{"^":"a;$ti"},bi:{"^":"je;$ti"},hA:{"^":"bI;",
$asbI:function(){return[P.o,[P.b,P.k]]}},jU:{"^":"hA;a",
giX:function(){return C.M}},k0:{"^":"bi;",
b_:function(a,b,c){var z,y,x,w
z=a.length
P.aS(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lj(0,0,x)
if(w.fL(a,b,z)!==z)w.dE(J.h2(a,z-1),0)
return new Uint8Array(x.subarray(0,H.lm(0,w.b,x.length)))},
cp:function(a){return this.b_(a,0,null)},
$asbi:function(){return[P.o,[P.b,P.k]]}},lj:{"^":"a;a,b,c",
dE:function(a,b){var z,y,x,w,v
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
fL:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.X(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.F(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dE(w,C.c.F(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},jV:{"^":"bi;a",
b_:function(a,b,c){var z,y,x,w,v
H.i(a,"$isb",[P.k],"$asb")
z=P.jW(!1,a,b,c)
if(z!=null)return z
y=J.az(a)
P.aS(b,c,y,null,null,null)
x=new P.aj("")
w=new P.lg(!1,x,!0,0,0,0)
w.b_(a,b,y)
if(w.e>0){H.p(P.R("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.bV(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
cp:function(a){return this.b_(a,0,null)},
$asbi:function(){return[[P.b,P.k],P.o]},
m:{
jW:function(a,b,c,d){H.i(b,"$isb",[P.k],"$asb")
if(b instanceof Uint8Array)return P.jX(!1,b,c,d)
return},
jX:function(a,b,c,d){var z,y,x
z=$.$get$f3()
if(z==null)return
y=0===c
if(y&&!0)return P.dl(z,b)
x=b.length
d=P.aS(c,d,x,null,null,null)
if(y&&d===x)return P.dl(z,b)
return P.dl(z,b.subarray(c,d))},
dl:function(a,b){if(P.jZ(b))return
return P.k_(a,b)},
k_:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ao(y)}return},
jZ:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
jY:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ao(y)}return}}},lg:{"^":"a;a,b,c,d,e,f",
b_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.i(a,"$isb",[P.k],"$asb")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.li(c)
v=new P.lh(this,b,c,a)
$label0$0:for(u=J.bd(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bN()
if((r&192)!==128){q=P.R("Bad UTF-8 encoding 0x"+C.h.b9(r,16),a,s)
throw H.d(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.C,q)
if(z<=C.C[q]){q=P.R("Overlong encoding of 0x"+C.h.b9(z,16),a,s-x-1)
throw H.d(q)}if(z>1114111){q=P.R("Character outside valid Unicode range: 0x"+C.h.b9(z,16),a,s-x-1)
throw H.d(q)}if(!this.c||z!==65279)t.a+=H.bV(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.bf()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.O()
if(r<0){m=P.R("Negative UTF-8 code unit: -0x"+C.h.b9(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.R("Bad UTF-8 encoding 0x"+C.h.b9(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},li:{"^":"q:50;a",
$2:function(a,b){var z,y,x,w
H.i(a,"$isb",[P.k],"$asb")
z=this.a
for(y=J.bd(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bN()
if((w&127)!==w)return x-b}return z-b}},lh:{"^":"q:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.bW(this.d,a,b)}}}],["","",,P,{"^":"",
c_:function(a,b,c){var z
H.m(b,{func:1,ret:P.k,args:[P.o]})
z=H.iM(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.d(P.R(a,null,null))},
hC:function(a){if(a instanceof H.q)return a.i(0)
return"Instance of '"+H.b0(a)+"'"},
i8:function(a,b,c,d){var z,y
H.v(b,d)
z=J.hR(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.p(z,y,b)
return H.i(z,"$isb",[d],"$asb")},
i9:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gS(a);x.B();)C.a.h(y,H.v(x.gG(),c))
if(b)return y
return H.i(J.c9(y),"$isb",z,"$asb")},
bW:function(a,b,c){var z,y
z=P.k
H.i(a,"$isl",[z],"$asl")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.i(a,"$isaX",[z],"$asaX")
y=a.length
c=P.aS(b,c,y,null,null,null)
return H.et(b>0||c<y?C.a.eU(a,b,c):a)}if(!!J.L(a).$isek)return H.iO(a,b,P.aS(b,c,a.length,null,null,null))
return P.jh(a,b,c)},
jh:function(a,b,c){var z,y,x,w
H.i(a,"$isl",[P.k],"$asl")
if(b<0)throw H.d(P.X(b,0,J.az(a),null,null))
z=c==null
if(!z&&c<b)throw H.d(P.X(c,b,J.az(a),null,null))
y=J.bG(a)
for(x=0;x<b;++x)if(!y.B())throw H.d(P.X(b,0,x,null,null))
w=[]
if(z)for(;y.B();)w.push(y.gG())
else for(x=b;x<c;++x){if(!y.B())throw H.d(P.X(c,b,x,null,null))
w.push(y.gG())}return H.et(w)},
iT:function(a,b,c){return new H.hT(a,H.hU(a,!1,!0,!1))},
dk:function(){var z=H.iE()
if(z!=null)return P.jN(z,0,null)
throw H.d(P.S("'Uri.base' is not supported"))},
c7:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ab(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hC(a)},
t:function(a){return new P.ff(a)},
ia:function(a,b,c,d){var z,y
H.m(b,{func:1,ret:d,args:[P.k]})
z=H.c([],[d])
C.a.sn(z,a)
for(y=0;y<a;++y)C.a.p(z,y,b.$1(y))
return z},
dF:function(a){H.m4(a)},
jN:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.c.F(a,b+4)^58)*3|C.c.F(a,b)^100|C.c.F(a,b+1)^97|C.c.F(a,b+2)^116|C.c.F(a,b+3)^97)>>>0
if(y===0)return P.f0(b>0||c<c?C.c.q(a,b,c):a,5,null).geC()
else if(y===32)return P.f0(C.c.q(a,z,c),0,null).geC()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.k])
C.a.p(w,0,0)
x=b-1
C.a.p(w,1,x)
C.a.p(w,2,x)
C.a.p(w,7,x)
C.a.p(w,3,b)
C.a.p(w,4,b)
C.a.p(w,5,c)
C.a.p(w,6,c)
if(P.fC(a,b,c,0,w)>=14)C.a.p(w,7,c)
v=w[1]
if(typeof v!=="number")return v.jR()
if(v>=b)if(P.fC(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.C()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.O()
if(typeof r!=="number")return H.x(r)
if(q<r)r=q
if(typeof s!=="number")return s.O()
if(s<u)s=r
else if(s<=v)s=v+1
if(typeof t!=="number")return t.O()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.O()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.c.a6(a,"..",s)))n=r>s+2&&C.c.a6(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.c.a6(a,"file",b)){if(u<=b){if(!C.c.a6(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.c.aT(a,s,r,"/");++r;++q;++c}else{a=C.c.q(a,b,s)+"/"+C.c.q(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.c.a6(a,"http",b)){if(x&&t+3===s&&C.c.a6(a,"80",t+1))if(b===0&&!0){a=C.c.aT(a,t,s,"")
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
else if(v===z&&C.c.a6(a,"https",b)){if(x&&t+4===s&&C.c.a6(a,"443",t+1))if(b===0&&!0){a=C.c.aT(a,t,s,"")
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
q-=b}return new P.kO(a,v,u,t,s,r,q,o)}return P.l_(a,b,c,v,u,t,s,r,q,o)},
f2:function(a,b){var z=P.o
return C.a.j_(H.c(a.split("&"),[z]),P.i3(z,z),new P.jQ(b),[P.F,P.o,P.o])},
jL:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jM(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.c.X(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.c_(C.c.q(a,v,w),null,null)
if(typeof s!=="number")return s.bf()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.c_(C.c.q(a,v,c),null,null)
if(typeof s!=="number")return s.bf()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
f1:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jO(a)
y=new P.jP(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.k])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.c.X(a,w)
if(s===58){if(w===b){++w
if(C.c.X(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gay(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jL(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.h.aI(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
ln:function(){var z,y,x,w,v
z=P.ia(22,new P.lp(),!0,P.I)
y=new P.lo(z)
x=new P.lq()
w=new P.lr()
v=H.e(y.$2(0,225),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isI")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isI")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isI"),"]",5)
v=H.e(y.$2(9,235),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isI")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isI"),"az",21)
v=H.e(y.$2(21,245),"$isI")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fC:function(a,b,c,d,e){var z,y,x,w,v
H.i(e,"$isb",[P.k],"$asb")
z=$.$get$fD()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.c.F(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.p(e,v>>>5,y)}return d},
Q:{"^":"a;"},
"+bool":0,
au:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.au))return!1
return this.a===b.a&&!0},
gR:function(a){var z=this.a
return(z^C.h.aI(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.hr(H.iL(this))
y=P.bK(H.iJ(this))
x=P.bK(H.iF(this))
w=P.bK(H.iG(this))
v=P.bK(H.iI(this))
u=P.bK(H.iK(this))
t=P.hs(H.iH(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
m:{
hr:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hs:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bK:function(a){if(a>=10)return""+a
return"0"+a}}},
u:{"^":"ah;"},
"+double":0,
bj:{"^":"a;a",
O:function(a,b){return C.h.O(this.a,H.e(b,"$isbj").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bj))return!1
return this.a===b.a},
gR:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hx()
y=this.a
if(y<0)return"-"+new P.bj(0-y).i(0)
x=z.$1(C.h.a2(y,6e7)%60)
w=z.$1(C.h.a2(y,1e6)%60)
v=new P.hw().$1(y%1e6)
return""+C.h.a2(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
m:{
e0:function(a,b,c,d,e,f){return new P.bj(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hw:{"^":"q:14;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hx:{"^":"q:14;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a0:{"^":"a;"},
em:{"^":"a0;",
i:function(a){return"Throw of null."}},
aM:{"^":"a0;a,b,c,d",
gbY:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbX:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbY()+y+x
if(!this.a)return w
v=this.gbX()
u=P.c7(this.b)
return w+v+": "+H.j(u)},
m:{
bH:function(a){return new P.aM(!1,null,null,a)},
cD:function(a,b,c){return new P.aM(!0,a,b,c)}}},
ce:{"^":"aM;e,f,a,b,c,d",
gbY:function(){return"RangeError"},
gbX:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
m:{
cf:function(a,b,c){return new P.ce(null,null,!0,a,b,"Value not in range")},
X:function(a,b,c,d,e){return new P.ce(b,c,!0,a,d,"Invalid value")},
aS:function(a,b,c,d,e,f){if(typeof a!=="number")return H.x(a)
if(0>a||a>c)throw H.d(P.X(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.d(P.X(b,a,c,"end",f))
return b}return c}}},
hN:{"^":"aM;e,n:f>,a,b,c,d",
gbY:function(){return"RangeError"},
gbX:function(){if(J.fZ(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
m:{
bm:function(a,b,c,d,e){var z=H.a6(e!=null?e:J.az(b))
return new P.hN(b,z,!0,a,c,"Index out of range")}}},
jJ:{"^":"a0;a",
i:function(a){return"Unsupported operation: "+this.a},
m:{
S:function(a){return new P.jJ(a)}}},
jG:{"^":"a0;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
m:{
cj:function(a){return new P.jG(a)}}},
jb:{"^":"a0;a",
i:function(a){return"Bad state: "+this.a}},
hl:{"^":"a0;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.c7(z))+"."},
m:{
aW:function(a){return new P.hl(a)}}},
iA:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa0:1},
eC:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa0:1},
hq:{"^":"a0;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ff:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hH:{"^":"a;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.j(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.c.q(w,0,75)+"..."
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
m=""}l=C.c.q(w,o,p)
return y+n+l+m+"\n"+C.c.l(" ",x-o+n.length)+"^\n"},
m:{
R:function(a,b,c){return new P.hH(a,b,c)}}},
k:{"^":"ah;"},
"+int":0,
l:{"^":"a;$ti",
gn:function(a){var z,y
z=this.gS(this)
for(y=0;z.B();)++y
return y},
a9:function(a,b){var z,y,x
if(b<0)H.p(P.X(b,0,null,"index",null))
for(z=this.gS(this),y=0;z.B();){x=z.gG()
if(b===y)return x;++y}throw H.d(P.bm(b,this,"index",null,y))},
i:function(a){return P.hP(this,"(",")")}},
aO:{"^":"a;$ti"},
b:{"^":"a;$ti",$isl:1},
"+List":0,
F:{"^":"a;$ti"},
A:{"^":"a;",
gR:function(a){return P.a.prototype.gR.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ah:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gR:function(a){return H.bt(this)},
i:function(a){return"Instance of '"+H.b0(this)+"'"},
toString:function(){return this.i(this)}},
aD:{"^":"a;"},
o:{"^":"a;",$isen:1},
"+String":0,
aj:{"^":"a;aE:a<",
gn:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$ismu:1,
m:{
eD:function(a,b,c){var z=J.bG(b)
if(!z.B())return a
if(c.length===0){do a+=H.j(z.gG())
while(z.B())}else{a+=H.j(z.gG())
for(;z.B();)a=a+c+H.j(z.gG())}return a}}},
jQ:{"^":"q:38;a",
$2:function(a,b){var z,y,x,w
z=P.o
H.i(a,"$isF",[z,z],"$asF")
H.G(b)
y=J.dB(b).eg(b,"=")
if(y===-1){if(b!=="")a.p(0,P.ds(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.c.q(b,0,y)
w=C.c.ar(b,y+1)
z=this.a
a.p(0,P.ds(x,0,x.length,z,!0),P.ds(w,0,w.length,z,!0))}return a}},
jM:{"^":"q:26;a",
$2:function(a,b){throw H.d(P.R("Illegal IPv4 address, "+a,this.a,b))}},
jO:{"^":"q:34;a",
$2:function(a,b){throw H.d(P.R("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jP:{"^":"q:41;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.c_(C.c.q(this.b,a,b),null,16)
if(typeof z!=="number")return z.O()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
co:{"^":"a;bQ:a<,b,c,d,en:e>,f,r,0x,0y,0z,0Q,0ch",
shv:function(a){var z=P.o
this.Q=H.i(a,"$isF",[z,z],"$asF")},
geE:function(){return this.b},
gcC:function(a){var z=this.c
if(z==null)return""
if(C.c.a5(z,"["))return C.c.q(z,1,z.length-1)
return z},
gbJ:function(a){var z=this.d
if(z==null)return P.fr(this.a)
return z},
gcM:function(){var z=this.f
return z==null?"":z},
geb:function(){var z=this.r
return z==null?"":z},
cN:function(a,b,c,d,e,f,g,h,i){var z,y,x
H.i(g,"$isF",[P.o,null],"$asF")
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
if(x&&!C.c.a5(c,"/"))c="/"+c
f=P.dr(f,0,0,g)
return new P.co(h,i,b,e,c,f,this.r)},
es:function(a){return this.cN(null,null,null,null,null,null,a,null,null)},
gbK:function(){var z,y
if(this.Q==null){z=this.f
y=P.o
this.shv(new P.f_(P.f2(z==null?"":z,C.m),[y,y]))}return this.Q},
gec:function(){return this.c!=null},
gef:function(){return this.f!=null},
ged:function(){return this.r!=null},
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
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!!J.L(b).$isdj){if(this.a==b.gbQ())if(this.c!=null===b.gec())if(this.b==b.geE())if(this.gcC(this)==b.gcC(b))if(this.gbJ(this)==b.gbJ(b))if(this.e===b.gen(b)){z=this.f
y=z==null
if(!y===b.gef()){if(y)z=""
if(z===b.gcM()){z=this.r
y=z==null
if(!y===b.ged()){if(y)z=""
z=z===b.geb()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
gR:function(a){var z=this.z
if(z==null){z=C.c.gR(this.i(0))
this.z=z}return z},
$isdj:1,
m:{
cp:function(a,b,c,d){var z,y,x,w,v,u
H.i(a,"$isb",[P.k],"$asb")
if(c===C.m){z=$.$get$fw().b
if(typeof b!=="string")H.p(H.ae(b))
z=z.test(b)}else z=!1
if(z)return b
H.v(b,H.af(c,"bI",0))
y=c.giX().cp(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bV(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
l_:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.la(a,b,d)
else{if(d===b)P.by(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lb(a,z,e-1):""
x=P.l4(a,e,f,!1)
if(typeof f!=="number")return f.C()
w=f+1
if(typeof g!=="number")return H.x(g)
v=w<g?P.l7(P.c_(C.c.q(a,w,g),new P.l0(a,f),null),j):null}else{y=""
x=null
v=null}u=P.l5(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.O()
t=h<i?P.dr(a,h+1,i,null):null
return new P.co(j,y,x,v,u,t,i<c?P.l3(a,i+1,c):null)},
fr:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
by:function(a,b,c){throw H.d(P.R(c,a,b))},
l7:function(a,b){if(a!=null&&a===P.fr(b))return
return a},
l4:function(a,b,c,d){var z,y
if(b===c)return""
if(C.c.X(a,b)===91){if(typeof c!=="number")return c.I()
z=c-1
if(C.c.X(a,z)!==93)P.by(a,b,"Missing end `]` to match `[` in host")
P.f1(a,b+1,z)
return C.c.q(a,b,c).toLowerCase()}if(typeof c!=="number")return H.x(c)
y=b
for(;y<c;++y)if(C.c.X(a,y)===58){P.f1(a,b,c)
return"["+a+"]"}return P.ld(a,b,c)},
ld:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.x(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.c.X(a,z)
if(v===37){u=P.fy(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.aj("")
s=C.c.q(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.c.q(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.D,t)
t=(C.D[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aj("")
if(y<z){x.a+=C.c.q(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.o,t)
t=(C.o[t]&1<<(v&15))!==0}else t=!1
if(t)P.by(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.c.X(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aj("")
s=C.c.q(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fs(v)
z+=q
y=z}}}}if(x==null)return C.c.q(a,b,c)
if(y<c){s=C.c.q(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
la:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fu(C.c.F(a,b)))P.by(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.c.F(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.q,w)
w=(C.q[w]&1<<(x&15))!==0}else w=!1
if(!w)P.by(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.c.q(a,b,c)
return P.l1(y?a.toLowerCase():a)},
l1:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lb:function(a,b,c){return P.bz(a,b,c,C.Z,!1)},
l5:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bz(a,b,c,C.E,!0):C.u.kB(d,new P.l6(),P.o).A(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.c.a5(w,"/"))w="/"+w
return P.lc(w,e,f)},
lc:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.c.a5(a,"/"))return P.le(a,!z||c)
return P.lf(a)},
dr:function(a,b,c,d){var z,y
z={}
H.i(d,"$isF",[P.o,null],"$asF")
if(a!=null){if(d!=null)throw H.d(P.bH("Both query and queryParameters specified"))
return P.bz(a,b,c,C.p,!0)}if(d==null)return
y=new P.aj("")
z.a=""
d.Y(0,new P.l8(new P.l9(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
l3:function(a,b,c){return P.bz(a,b,c,C.p,!0)},
fy:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.c.X(a,b+1)
x=C.c.X(a,z)
w=H.cv(y)
v=H.cv(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.h.aI(u,4)
if(z>=8)return H.f(C.r,z)
z=(C.r[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bV(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.c.q(a,b,b+3).toUpperCase()
return},
fs:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.k])
C.a.p(y,0,37)
C.a.p(y,1,C.c.F("0123456789ABCDEF",a>>>4))
C.a.p(y,2,C.c.F("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.k])
for(v=0;--w,w>=0;x=128){u=C.h.hP(a,6*w)&63|x
C.a.p(y,v,37)
C.a.p(y,v+1,C.c.F("0123456789ABCDEF",u>>>4))
C.a.p(y,v+2,C.c.F("0123456789ABCDEF",u&15))
v+=3}}return P.bW(y,0,null)},
bz:function(a,b,c,d,e){var z=P.fx(a,b,c,H.i(d,"$isb",[P.k],"$asb"),e)
return z==null?C.c.q(a,b,c):z},
fx:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.i(d,"$isb",[P.k],"$asb")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.O()
if(typeof c!=="number")return H.x(c)
if(!(y<c))break
c$0:{v=C.c.X(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fy(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.o,u)
u=(C.o[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.by(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.c.X(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fs(v)}}if(w==null)w=new P.aj("")
w.a+=C.c.q(a,x,y)
w.a+=H.j(t)
if(typeof s!=="number")return H.x(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.O()
if(x<c)w.a+=C.c.q(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fv:function(a){if(C.c.a5(a,"."))return!0
return C.c.eg(a,"/.")!==-1},
lf:function(a){var z,y,x,w,v,u,t
if(!P.fv(a))return a
z=H.c([],[P.o])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.N(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.A(z,"/")},
le:function(a,b){var z,y,x,w,v,u
if(!P.fv(a))return!b?P.ft(a):a
z=H.c([],[P.o])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gay(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gay(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.p(z,0,P.ft(z[0]))}return C.a.A(z,"/")},
ft:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fu(J.h1(a,0)))for(y=1;y<z;++y){x=C.c.F(a,y)
if(x===58)return C.c.q(a,0,y)+"%3A"+C.c.ar(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.q,w)
w=(C.q[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
l2:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.c.F(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.d(P.bH("Invalid URL encoding"))}}return z},
ds:function(a,b,c,d,e){var z,y,x,w,v
y=b
while(!0){if(!(y<c)){z=!0
break}x=C.c.F(a,y)
if(x<=127)if(x!==37)w=x===43
else w=!0
else w=!0
if(w){z=!1
break}++y}if(z){if(C.m!==d)w=!1
else w=!0
if(w)return C.c.q(a,b,c)
else v=new H.a_(C.c.q(a,b,c))}else{v=H.c([],[P.k])
for(w=a.length,y=b;y<c;++y){x=C.c.F(a,y)
if(x>127)throw H.d(P.bH("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.d(P.bH("Truncated URI"))
C.a.h(v,P.l2(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.i(v,"$isb",[P.k],"$asb")
return new P.jV(!1).cp(v)},
fu:function(a){var z=a|32
return 97<=z&&z<=122}}},
l0:{"^":"q:43;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.C()
throw H.d(P.R("Invalid port",this.a,z+1))}},
l6:{"^":"q:36;",
$1:function(a){return P.cp(C.a0,a,C.m,!1)}},
l9:{"^":"q:40;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.j(P.cp(C.r,a,C.m,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.j(P.cp(C.r,b,C.m,!0))}}},
l8:{"^":"q:32;a",
$2:function(a,b){var z,y
H.G(a)
if(b==null||typeof b==="string")this.a.$2(a,H.G(b))
else for(z=J.bG(H.fQ(b,"$isl")),y=this.a;z.B();)y.$2(a,H.G(z.gG()))}},
jK:{"^":"a;a,b,c",
geC:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.c.eh(y,"?",z)
w=y.length
if(x>=0){v=P.bz(y,x+1,w,C.p,!1)
w=x}else v=null
z=new P.km(this,"data",null,null,null,P.bz(y,z,w,C.E,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
m:{
f0:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.k])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.c.F(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.d(P.R("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.d(P.R("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.c.F(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gay(z)
if(v!==44||x!==t+7||!C.c.a6(a,"base64",t+1))throw H.d(P.R("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.J.je(a,s,y)
else{r=P.fx(a,s,y,C.p,!0)
if(r!=null)a=C.c.aT(a,s,y,r)}return new P.jK(a,z,c)}}},
lp:{"^":"q:42;",
$1:function(a){return new Uint8Array(96)}},
lo:{"^":"q:46;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.h3(z,0,96,b)
return z}},
lq:{"^":"q;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.c.F(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
lr:{"^":"q;",
$3:function(a,b,c){var z,y,x
for(z=C.c.F(b,0),y=C.c.F(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
kO:{"^":"a;a,b,c,d,e,f,r,x,0y",
gec:function(){return this.c>0},
gee:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.C()
y=this.e
if(typeof y!=="number")return H.x(y)
y=z+1<y
z=y}else z=!1
return z},
gef:function(){var z=this.f
if(typeof z!=="number")return z.O()
return z<this.r},
ged:function(){return this.r<this.a.length},
gdl:function(){return this.b===4&&C.c.a5(this.a,"http")},
gdm:function(){return this.b===5&&C.c.a5(this.a,"https")},
gbQ:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdl()){this.x="http"
z="http"}else if(this.gdm()){this.x="https"
z="https"}else if(z===4&&C.c.a5(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.c.a5(this.a,"package")){this.x="package"
z="package"}else{z=C.c.q(this.a,0,z)
this.x=z}return z},
geE:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.c.q(this.a,y,z-1):""},
gcC:function(a){var z=this.c
return z>0?C.c.q(this.a,z,this.d):""},
gbJ:function(a){var z
if(this.gee()){z=this.d
if(typeof z!=="number")return z.C()
return P.c_(C.c.q(this.a,z+1,this.e),null,null)}if(this.gdl())return 80
if(this.gdm())return 443
return 0},
gen:function(a){return C.c.q(this.a,this.e,this.f)},
gcM:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.O()
return z<y?C.c.q(this.a,z+1,y):""},
geb:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.c.ar(y,z+1):""},
gbK:function(){var z=this.f
if(typeof z!=="number")return z.O()
if(z>=this.r)return C.a1
z=P.o
return new P.f_(P.f2(this.gcM(),C.m),[z,z])},
cN:function(a,b,c,d,e,f,g,h,i){var z,y,x
H.i(g,"$isF",[P.o,null],"$asF")
h=this.gbQ()
z=h==="file"
y=this.c
i=y>0?C.c.q(this.a,this.b+3,y):""
e=this.gee()?this.gbJ(this):null
y=this.c
if(y>0)b=C.c.q(this.a,y,this.d)
else if(i.length!==0||e!=null||z)b=""
y=this.a
c=C.c.q(y,this.e,this.f)
if(!z)x=b!=null&&c.length!==0
else x=!0
if(x&&!C.c.a5(c,"/"))c="/"+c
f=P.dr(f,0,0,g)
x=this.r
if(x<y.length)a=C.c.ar(y,x+1)
return new P.co(h,i,b,e,c,f,a)},
es:function(a){return this.cN(null,null,null,null,null,null,a,null,null)},
gR:function(a){var z=this.y
if(z==null){z=C.c.gR(this.a)
this.y=z}return z},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.L(b).$isdj)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$isdj:1},
km:{"^":"co;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cI:function(a,b){var z=document.createElement("canvas")
return z},
hz:function(a){H.e(a,"$isbL")
return"wheel"},
hO:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$ise5")
try{J.h5(z,a)}catch(x){H.ao(x)}return z},
cm:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fh:function(a,b,c,d){var z,y
z=W.cm(W.cm(W.cm(W.cm(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fG:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.M
if(z===C.k)return a
return z.dJ(a,b)},
a9:{"^":"W;","%":"HTMLBRElement|HTMLBaseElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
mb:{"^":"a9;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
mc:{"^":"a9;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
ha:{"^":"a9;","%":"HTMLBodyElement"},
cH:{"^":"a9;",
bO:function(a,b,c){if(c!=null)return this.fN(a,b,P.lD(c,null))
return this.fO(a,b)},
eL:function(a,b){return this.bO(a,b,null)},
fN:function(a,b,c){return a.getContext(b,c)},
fO:function(a,b){return a.getContext(b)},
$iscH:1,
$isdQ:1,
"%":"HTMLCanvasElement"},
cJ:{"^":"H;",
fP:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
iU:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$iscJ:1,
"%":"CanvasRenderingContext2D"},
mf:{"^":"J;0n:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
mh:{"^":"kl;0n:length=",
eN:function(a,b){var z=this.fQ(a,this.fq(a,b))
return z==null?"":z},
fq:function(a,b){var z,y
z=$.$get$dT()
y=z[b]
if(typeof y==="string")return y
y=this.hS(a,b)
z[b]=y
return y},
hS:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ht()+b
if(z in a)return z
return b},
fQ:function(a,b){return a.getPropertyValue(b)},
gck:function(a){return a.bottom},
gb1:function(a){return a.height},
gaQ:function(a){return a.left},
gb7:function(a){return a.right},
gbb:function(a){return a.top},
gbd:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hp:{"^":"a;",
gaQ:function(a){return this.eN(a,"left")}},
e_:{"^":"a9;",$ise_:1,"%":"HTMLDivElement"},
hu:{"^":"J;",
cV:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
mi:{"^":"H;",
i:function(a){return String(a)},
"%":"DOMException"},
hv:{"^":"H;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bE(b,"$isaC",[P.ah],"$asaC"))return!1
z=J.ay(b)
return a.left===z.gaQ(b)&&a.top===z.gbb(b)&&a.width===z.gbd(b)&&a.height===z.gb1(b)},
gR:function(a){return W.fh(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gck:function(a){return a.bottom},
gb1:function(a){return a.height},
gaQ:function(a){return a.left},
gb7:function(a){return a.right},
gbb:function(a){return a.top},
gbd:function(a){return a.width},
$isaC:1,
$asaC:function(){return[P.ah]},
"%":";DOMRectReadOnly"},
kk:{"^":"cd;a,b",
gn:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.f(z,b)
return H.e(z[b],"$isW")},
p:function(a,b,c){var z
H.e(c,"$isW")
z=this.b
if(b<0||b>=z.length)return H.f(z,b)
J.cA(this.a,c,z[b])},
h:function(a,b){J.dG(this.a,b)
return b},
gS:function(a){var z=this.jJ(this)
return new J.ap(z,z.length,0,[H.r(z,0)])},
$asU:function(){return[W.W]},
$asl:function(){return[W.W]},
$asb:function(){return[W.W]}},
W:{"^":"J;",
gco:function(a){return new W.kk(a,a.children)},
gdL:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.O()
if(x<0)x=-x*0
if(typeof w!=="number")return w.O()
if(w<0)w=-w*0
return new P.aC(z,y,x,w,[P.ah])},
i:function(a){return a.localName},
$isW:1,
"%":";Element"},
a4:{"^":"H;",$isa4:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
bL:{"^":"H;",
fl:function(a,b,c,d){return a.addEventListener(b,H.ba(H.m(c,{func:1,args:[W.a4]}),1),!1)},
$isbL:1,
"%":";EventTarget"},
mj:{"^":"a9;0n:length=","%":"HTMLFormElement"},
hK:{"^":"H;0n:length=",
hA:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
hL:{"^":"kC;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bm(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$isJ")
throw H.d(P.S("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isaA:1,
$asaA:function(){return[W.J]},
$asU:function(){return[W.J]},
$isl:1,
$asl:function(){return[W.J]},
$isb:1,
$asb:function(){return[W.J]},
$ishL:1,
$asaN:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hM:{"^":"hu;","%":"HTMLDocument"},
bN:{"^":"H;0dM:data=",$isbN:1,"%":"ImageData"},
e4:{"^":"a9;",$ise4:1,$isdQ:1,"%":"HTMLImageElement"},
e5:{"^":"a9;0type",
sjM:function(a,b){a.type=H.G(b)},
$ise5:1,
$iscK:1,
"%":"HTMLInputElement"},
cK:{"^":"a;",$isW:1,$isbL:1,$isJ:1},
bo:{"^":"d9;",$isbo:1,"%":"KeyboardEvent"},
hY:{"^":"a9;","%":"HTMLLabelElement"},
iu:{"^":"a9;","%":"HTMLAudioElement;HTMLMediaElement"},
ar:{"^":"d9;",$isar:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kj:{"^":"cd;a",
p:function(a,b,c){var z,y
H.e(c,"$isJ")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.f(y,b)
J.cA(z,c,y[b])},
gS:function(a){var z=this.a.childNodes
return new W.e1(z,z.length,-1,[H.bZ(C.a2,z,"aN",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asU:function(){return[W.J]},
$asl:function(){return[W.J]},
$asb:function(){return[W.J]}},
J:{"^":"bL;",
jy:function(a,b){var z,y
try{z=a.parentNode
J.cA(z,b,a)}catch(y){H.ao(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eV(a):z},
W:function(a,b){return a.appendChild(b)},
hz:function(a,b,c){return a.replaceChild(b,c)},
$isJ:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
iy:{"^":"kI;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bm(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$isJ")
throw H.d(P.S("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isaA:1,
$asaA:function(){return[W.J]},
$asU:function(){return[W.J]},
$isl:1,
$asl:function(){return[W.J]},
$isb:1,
$asb:function(){return[W.J]},
$asaN:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
ms:{"^":"a9;0n:length=","%":"HTMLSelectElement"},
cg:{"^":"a9;",$iscg:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
ji:{"^":"a9;",
fS:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
jj:{"^":"a9;",
dk:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
b2:{"^":"H;",$isb2:1,"%":"Touch"},
b3:{"^":"d9;",$isb3:1,"%":"TouchEvent"},
mx:{"^":"kX;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bm(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$isb2")
throw H.d(P.S("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isaA:1,
$asaA:function(){return[W.b2]},
$asU:function(){return[W.b2]},
$isl:1,
$asl:function(){return[W.b2]},
$isb:1,
$asb:function(){return[W.b2]},
$asaN:function(){return[W.b2]},
"%":"TouchList"},
d9:{"^":"a4;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mz:{"^":"iu;",$isdQ:1,"%":"HTMLVideoElement"},
bw:{"^":"ar;",
giP:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.S("deltaY is not supported"))},
giO:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.S("deltaX is not supported"))},
$isbw:1,
"%":"WheelEvent"},
kd:{"^":"bL;",
hB:function(a,b){return a.requestAnimationFrame(H.ba(H.m(b,{func:1,ret:-1,args:[P.ah]}),1))},
fF:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mE:{"^":"hv;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bE(b,"$isaC",[P.ah],"$asaC"))return!1
z=J.ay(b)
return a.left===z.gaQ(b)&&a.top===z.gbb(b)&&a.width===z.gbd(b)&&a.height===z.gb1(b)},
gR:function(a){return W.fh(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gb1:function(a){return a.height},
gbd:function(a){return a.width},
"%":"ClientRect|DOMRect"},
kn:{"^":"jd;a,b,c,$ti"},
mF:{"^":"kn;a,b,c,$ti"},
ko:{"^":"d4;a,b,c,d,e,$ti",m:{
Y:function(a,b,c,d,e){var z,y
z=W.fG(new W.kp(c),W.a4)
y=z!=null
if(y&&!0){H.m(z,{func:1,args:[W.a4]})
if(y)J.h0(a,b,z,!1)}return new W.ko(0,a,b,z,!1,[e])}}},
kp:{"^":"q:47;a",
$1:function(a){return this.a.$1(H.e(a,"$isa4"))}},
aN:{"^":"a;$ti",
gS:function(a){return new W.e1(a,this.gn(a),-1,[H.bZ(this,a,"aN",0)])}},
e1:{"^":"a;a,b,c,0d,$ti",
sdj:function(a){this.d=H.v(a,H.r(this,0))},
B:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdj(J.h_(this.a,z))
this.c=z
return!0}this.sdj(null)
this.c=y
return!1},
gG:function(){return this.d},
$isaO:1},
kl:{"^":"H+hp;"},
kB:{"^":"H+U;"},
kC:{"^":"kB+aN;"},
kH:{"^":"H+U;"},
kI:{"^":"kH+aN;"},
kW:{"^":"H+U;"},
kX:{"^":"kW+aN;"}}],["","",,P,{"^":"",
lG:function(a){var z,y
z=J.L(a)
if(!!z.$isbN){y=z.gdM(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fq(a.data,a.height,a.width)},
lF:function(a){if(a instanceof P.fq)return{data:a.a,height:a.b,width:a.c}
return a},
lD:function(a,b){var z={}
a.Y(0,new P.lE(z))
return z},
dZ:function(){var z=$.dY
if(z==null){z=J.cB(window.navigator.userAgent,"Opera",0)
$.dY=z}return z},
ht:function(){var z,y
z=$.dV
if(z!=null)return z
y=$.dW
if(y==null){y=J.cB(window.navigator.userAgent,"Firefox",0)
$.dW=y}if(y)z="-moz-"
else{y=$.dX
if(y==null){y=!P.dZ()&&J.cB(window.navigator.userAgent,"Trident/",0)
$.dX=y}if(y)z="-ms-"
else z=P.dZ()?"-o-":"-webkit-"}$.dV=z
return z},
kP:{"^":"a;",
e9:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cQ:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.L(a)
if(!!y.$isau)return new Date(a.a)
if(!!y.$isiS)throw H.d(P.cj("structured clone of RegExp"))
if(!!y.$isbN)return a
if(!!y.$iscZ)return a
if(!!y.$isF){x=this.e9(a)
y=this.b
if(x>=y.length)return H.f(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.p(y,x,w)
a.Y(0,new P.kR(z,this))
return z.a}if(!!y.$isb){x=this.e9(a)
z=this.b
if(x>=z.length)return H.f(z,x)
w=z[x]
if(w!=null)return w
return this.iJ(a,x)}throw H.d(P.cj("structured clone of other type"))},
iJ:function(a,b){var z,y,x,w
z=J.bd(a)
y=z.gn(a)
x=new Array(y)
C.a.p(this.b,b,x)
for(w=0;w<y;++w)C.a.p(x,w,this.cQ(z.j(a,w)))
return x}},
kR:{"^":"q:5;a,b",
$2:function(a,b){this.a.a[a]=this.b.cQ(b)}},
fq:{"^":"a;dM:a>,b,c",$isbN:1},
lE:{"^":"q:5;a",
$2:function(a,b){this.a[a]=b}},
kQ:{"^":"kP;a,b"},
hE:{"^":"cd;a,b",
gbl:function(){var z,y,x
z=this.b
y=H.af(z,"U",0)
x=W.W
return new H.ih(new H.kb(z,H.m(new P.hF(),{func:1,ret:P.Q,args:[y]}),[y]),H.m(new P.hG(),{func:1,ret:x,args:[y]}),[y,x])},
p:function(a,b,c){var z
H.e(c,"$isW")
z=this.gbl()
J.h4(z.b.$1(J.cC(z.a,b)),c)},
h:function(a,b){J.dG(this.b.a,b)},
gn:function(a){return J.az(this.gbl().a)},
j:function(a,b){var z=this.gbl()
return z.b.$1(J.cC(z.a,b))},
gS:function(a){var z=P.i9(this.gbl(),!1,W.W)
return new J.ap(z,z.length,0,[H.r(z,0)])},
$asU:function(){return[W.W]},
$asl:function(){return[W.W]},
$asb:function(){return[W.W]}},
hF:{"^":"q:24;",
$1:function(a){return!!J.L(H.e(a,"$isJ")).$isW}},
hG:{"^":"q:25;",
$1:function(a){return H.h(H.e(a,"$isJ"),"$isW")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kD:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kJ:{"^":"a;$ti",
gb7:function(a){var z=this.a
if(typeof z!=="number")return z.C()
return H.v(z+this.c,H.r(this,0))},
gck:function(a){var z=this.b
if(typeof z!=="number")return z.C()
return H.v(z+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bE(b,"$isaC",[P.ah],"$asaC"))return!1
z=this.a
y=J.ay(b)
x=y.gaQ(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbb(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.C()
w=H.r(this,0)
if(H.v(z+this.c,w)===y.gb7(b)){if(typeof x!=="number")return x.C()
z=H.v(x+this.d,w)===y.gck(b)}else z=!1}else z=!1}else z=!1
return z},
gR:function(a){var z,y,x,w,v
z=this.a
y=J.bF(z)
x=this.b
w=J.bF(x)
if(typeof z!=="number")return z.C()
v=H.r(this,0)
z=H.v(z+this.c,v)
if(typeof x!=="number")return x.C()
v=H.v(x+this.d,v)
return P.kD(P.cn(P.cn(P.cn(P.cn(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aC:{"^":"kJ;aQ:a>,bb:b>,bd:c>,b1:d>,$ti"}}],["","",,P,{"^":"",mv:{"^":"W;",
gco:function(a){return new P.hE(a,new W.kj(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"}}],["","",,P,{"^":"",I:{"^":"a;",$isl:1,
$asl:function(){return[P.k]},
$isb:1,
$asb:function(){return[P.k]},
$isjw:1}}],["","",,P,{"^":""}],["","",,P,{"^":"",hb:{"^":"H;",$ishb:1,"%":"WebGLBuffer"},hI:{"^":"H;",$ishI:1,"%":"WebGLFramebuffer"},iP:{"^":"H;",$isiP:1,"%":"WebGLProgram"},d1:{"^":"H;",
dF:function(a,b){return a.activeTexture(b)},
dH:function(a,b,c){return a.attachShader(b,c)},
an:function(a,b,c){return a.bindBuffer(b,c)},
iz:function(a,b,c){return a.bindFramebuffer(b,c)},
aJ:function(a,b,c){return a.bindTexture(b,c)},
iA:function(a,b,c){return a.blendFunc(b,c)},
dK:function(a,b,c,d){return a.bufferData(b,c,d)},
iD:function(a,b){return a.clear(b)},
iE:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
iF:function(a,b){return a.clearDepth(b)},
iG:function(a,b){return a.compileShader(b)},
iK:function(a,b){return a.createShader(b)},
iM:function(a,b){return a.deleteProgram(b)},
iN:function(a,b){return a.deleteShader(b)},
iQ:function(a,b){return a.depthFunc(b)},
iR:function(a,b){return a.disable(b)},
dN:function(a,b){return a.disableVertexAttribArray(b)},
iT:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cs:function(a,b){return a.enable(b)},
dO:function(a,b){return a.enableVertexAttribArray(b)},
eH:function(a,b){return a.generateMipmap(b)},
eI:function(a,b,c){return a.getActiveAttrib(b,c)},
eJ:function(a,b,c){return a.getActiveUniform(b,c)},
eK:function(a,b,c){return a.getAttribLocation(b,c)},
cW:function(a,b){return a.getParameter(b)},
eM:function(a,b){return a.getProgramInfoLog(b)},
bP:function(a,b,c){return a.getProgramParameter(b,c)},
eO:function(a,b){return a.getShaderInfoLog(b)},
eP:function(a,b,c){return a.getShaderParameter(b,c)},
eQ:function(a,b,c){return a.getUniformLocation(b,c)},
j8:function(a,b){return a.linkProgram(b)},
ju:function(a,b,c){return a.pixelStorei(b,c)},
eT:function(a,b,c){return a.shaderSource(b,c)},
jG:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.L(g)
if(!!z.$isbN)y=!0
else y=!1
if(y){this.hU(a,b,c,d,e,f,P.lF(g))
return}if(!!z.$ise4)z=!0
else z=!1
if(z){this.hV(a,b,c,d,e,f,g)
return}throw H.d(P.bH("Incorrect number or type of arguments"))},
jF:function(a,b,c,d,e,f,g){return this.jG(a,b,c,d,e,f,g,null,null,null)},
hU:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
hV:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bM:function(a,b,c,d){return a.texParameteri(b,c,d)},
K:function(a,b,c){return a.uniform1f(b,c)},
N:function(a,b,c){return a.uniform1i(b,c)},
v:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eA:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eB:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
eD:function(a,b){return a.useProgram(b)},
jP:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jQ:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isd1:1,
"%":"WebGLRenderingContext"},j3:{"^":"H;",$isj3:1,"%":"WebGLShader"},jk:{"^":"H;",$isjk:1,"%":"WebGLTexture"},jE:{"^":"H;",$isjE:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",O:{"^":"a;0a,0b,0c,0d,$ti",
sfW:function(a){this.a=H.i(a,"$isb",[H.af(this,"O",0)],"$asb")},
sds:function(a){this.b=H.m(a,{func:1,ret:P.Q,args:[[P.l,H.af(this,"O",0)]]})},
sdq:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.k,[P.l,H.af(this,"O",0)]]})},
sdt:function(a){this.d=H.m(a,{func:1,ret:-1,args:[P.k,[P.l,H.af(this,"O",0)]]})},
bi:function(a){this.sfW(H.c([],[a]))
this.sds(null)
this.sdq(null)
this.sdt(null)},
bR:function(a,b,c){var z=H.af(this,"O",0)
H.m(b,{func:1,ret:P.Q,args:[[P.l,z]]})
z={func:1,ret:-1,args:[P.k,[P.l,z]]}
H.m(a,z)
H.m(c,z)
this.sds(b)
this.sdq(a)
this.sdt(c)},
bh:function(a,b){return this.bR(a,null,b)},
c5:function(a){var z
H.i(a,"$isl",[H.af(this,"O",0)],"$asl")
z=this.b
if(z!=null)return z.$1(a)
return!0},
d_:function(a,b){var z
H.i(b,"$isl",[H.af(this,"O",0)],"$asl")
z=this.c
if(z!=null)z.$2(a,b)},
gn:function(a){return this.a.length},
gS:function(a){var z=this.a
return new J.ap(z,z.length,0,[H.r(z,0)])},
a9:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.af(this,"O",0)
H.v(b,z)
z=[z]
if(this.c5(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.d_(x,H.c([b],z))}},
cd:function(a,b){var z,y
H.i(b,"$isl",[H.af(this,"O",0)],"$asl")
if(this.c5(b)){z=this.a
y=z.length
C.a.cd(z,b)
this.d_(y,b)}},
$isl:1,
m:{
cL:function(a){var z=new O.O([a])
z.bi(a)
return z}}},cV:{"^":"a;0a,0b",
sc0:function(a){this.a=H.i(a,"$isb",[V.aa],"$asb")},
gn:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
f3:function(a){var z=this.b
if(!(z==null))z.D(a)},
aA:function(){return this.f3(null)},
gT:function(){var z=this.a
if(z.length>0)return C.a.gay(z)
else return V.bS()},
eq:function(a){var z=this.a
if(a==null)C.a.h(z,V.bS())
else C.a.h(z,a)
this.aA()},
cL:function(){var z=this.a
if(z.length>0){z.pop()
this.aA()}}}}],["","",,E,{"^":"",cE:{"^":"a;"},aq:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0ae:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sf4:function(a,b){this.y=H.i(b,"$isO",[E.aq],"$asO")},
sae:function(a){this.z=H.e(a,"$isbk")},
d6:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.ap(z,z.length,0,[H.r(z,0)]);z.B();){y=z.d
if(y.f==null)y.d6()}},
sbS:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gt().Z(0,this.gel())
y=this.c
if(y!=null)y.gt().h(0,this.gel())
x=new D.z("shape",z,this.c,this,[F.ez])
x.b=!0
this.a4(x)}},
scP:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gt().Z(0,this.gem())
y=this.f
this.f=a
if(a!=null)a.gt().h(0,this.gem())
this.d6()
x=new D.z("technique",y,this.f,this,[O.ch])
x.b=!0
this.a4(x)}},
saR:function(a){var z,y
if(!J.N(this.r,a)){z=this.r
if(z!=null)z.gt().Z(0,this.gek())
if(a!=null)a.gt().h(0,this.gek())
this.r=a
y=new D.z("mover",z,a,this,[U.a2])
y.b=!0
this.a4(y)}},
ad:function(a){var z,y,x,w
z=this.r
y=z!=null?z.az(a,this):null
if(!J.N(y,this.x)){x=this.x
this.x=y
w=new D.z("matrix",x,y,this,[V.aa])
w.b=!0
this.a4(w)}z=this.f
if(z!=null)z.ad(a)
for(z=this.y.a,z=new J.ap(z,z.length,0,[H.r(z,0)]);z.B();)z.d.ad(a)},
aS:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gT())
else C.a.h(z.a,y.l(0,z.gT()))
z.aA()
a.er(this.f)
z=a.dy
x=(z&&C.a).gay(z)
if(x!=null&&this.d!=null)x.jx(a,this)
for(z=this.y.a,z=new J.ap(z,z.length,0,[H.r(z,0)]);z.B();)z.d.aS(a)
a.ep()
a.dx.cL()},
gt:function(){var z=this.z
if(z==null){z=D.E()
this.z=z}return z},
a4:function(a){var z=this.z
if(!(z==null))z.D(a)},
a3:function(){return this.a4(null)},
jj:[function(a){H.e(a,"$isw")
this.e=null
this.a4(a)},function(){return this.jj(null)},"kH","$1","$0","gel",0,2,0],
jk:[function(a){this.a4(H.e(a,"$isw"))},function(){return this.jk(null)},"kI","$1","$0","gem",0,2,0],
ji:[function(a){this.a4(H.e(a,"$isw"))},function(){return this.ji(null)},"kG","$1","$0","gek",0,2,0],
jg:[function(a){this.a4(H.e(a,"$isw"))},function(){return this.jg(null)},"kE","$1","$0","gej",0,2,0],
kD:[function(a,b){var z,y,x,w,v,u,t
H.i(b,"$isl",[E.aq],"$asl")
for(z=b.length,y=this.gej(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.gae()==null){t=new D.bk()
t.saf(null)
t.sbn(null)
t.c=null
t.d=0
u.sae(t)}t=u.gae()
t.toString
H.m(y,x)
if(t.a==null)t.saf(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a3()},"$2","gjf",8,0,6],
kF:[function(a,b){var z,y
H.i(b,"$isl",[E.aq],"$asl")
for(z=b.gS(b),y=this.gej();z.B();)z.gG().gt().Z(0,y)
this.a3()},"$2","gjh",8,0,6],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaB:1,
m:{
c6:function(a,b,c,d,e,f){var z=new E.aq()
z.a=d
z.b=!0
z.sf4(0,O.cL(E.aq))
z.y.bh(z.gjf(),z.gjh())
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
z.sbS(0,e)
z.scP(f)
z.saR(c)
return z}}},iU:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
shT:function(a){this.dy=H.i(a,"$isb",[O.ch],"$asb")},
shO:function(a){this.fr=H.i(a,"$isF",[P.o,A.d2],"$asF")},
f_:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.au(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cV()
y=[V.aa]
z.sc0(H.c([],y))
z.b=null
z.gt().h(0,new E.iW(this))
this.cy=z
z=new O.cV()
z.sc0(H.c([],y))
z.b=null
z.gt().h(0,new E.iX(this))
this.db=z
z=new O.cV()
z.sc0(H.c([],y))
z.b=null
z.gt().h(0,new E.iY(this))
this.dx=z
this.shT(H.c([],[O.ch]))
z=this.dy;(z&&C.a).h(z,null)
this.shO(new H.aP(0,0,[P.o,A.d2]))},
gjv:function(){var z=this.z
if(z==null){z=this.cy.gT().l(0,this.db.gT())
this.z=z}return z},
er:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gay(z):a;(z&&C.a).h(z,y)},
ep:function(){var z=this.dy
if(z.length>1)z.pop()},
m:{
iV:function(a,b){var z=new E.iU(a,b)
z.f_(a,b)
return z}}},iW:{"^":"q:7;a",
$1:function(a){var z
H.e(a,"$isw")
z=this.a
z.z=null
z.ch=null}},iX:{"^":"q:7;a",
$1:function(a){var z
H.e(a,"$isw")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iY:{"^":"q:7;a",
$1:function(a){var z
H.e(a,"$isw")
z=this.a
z.ch=null
z.cx=null}},jo:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0ae:x<,0y,0z,0Q,0ch,0cx,0cy",
sae:function(a){this.x=H.e(a,"$isbk")},
f6:[function(a){H.e(a,"$isw")
this.jA()},function(){return this.f6(null)},"f5","$1","$0","gd0",0,2,0],
gj1:function(){var z,y,x
z=Date.now()
y=C.h.a2(P.e0(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.au(z,!1)
return x/y},
dv:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.x(z)
x=C.j.cB(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.j.cB(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.eL(C.t,this.gjz())}},
jA:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.m(new E.jq(this),{func:1,ret:-1,args:[P.ah]})
C.I.fF(z)
C.I.hB(z,W.fG(y,P.ah))}},"$0","gjz",0,0,3],
jw:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dv()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.au(w,!1)
x.y=P.e0(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sn(w.a,0)
w.aA()
w=x.db
C.a.sn(w.a,0)
w.aA()
w=x.dx
C.a.sn(w.a,0)
w.aA()
w=x.dy;(w&&C.a).sn(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aS(this.e)}}catch(v){z=H.ao(v)
y=H.be(v)
P.dF("Error: "+H.j(z))
P.dF("Stack: "+H.j(y))
throw H.d(z)}},
m:{
jp:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$iscH)return E.eK(a,!0,!0,!0,!1)
y=W.cI(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gco(a).h(0,y)
w=E.eK(y,!0,!0,!0,!1)
w.a=a
return w},
eK:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jo()
y=P.i4(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.n.bO(a,"webgl",y)
x=H.e(x==null?C.n.bO(a,"experimental-webgl",y):x,"$isd1")
if(x==null)H.p(P.t("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iV(x,a)
w=new T.jm(x)
w.b=H.a6((x&&C.b).cW(x,3379))
w.c=H.a6(C.b.cW(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.jR(a)
v=new X.hX()
v.c=new X.Z(!1,!1,!1)
v.shu(P.i7(null,null,null,P.k))
w.b=v
v=new X.iv(w)
v.f=0
v.r=V.aR()
v.x=V.aR()
v.Q=1
v.ch=1
w.c=v
v=new X.ib(w)
v.r=0
v.x=V.aR()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jt(w)
v.e=0
v.f=V.aR()
v.r=V.aR()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sfG(H.c([],[[P.d4,P.a]]))
v=w.z
u=document
t=W.ar
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.Y(u,"contextmenu",H.m(w.gha(),s),!1,t))
v=w.z
r=W.a4
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Y(a,"focus",H.m(w.ghd(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Y(a,"blur",H.m(w.gh6(),q),!1,r))
v=w.z
p=W.bo
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Y(u,"keyup",H.m(w.gc4(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Y(u,"keydown",H.m(w.gbU(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousedown",H.m(w.ghi(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mouseup",H.m(w.ghk(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousemove",H.m(w.ghj(),s),!1,t))
p=w.z
o=W.bw;(p&&C.a).h(p,W.Y(a,H.G(W.hz(a)),H.m(w.ghl(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Y(u,"mousemove",H.m(w.ghb(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Y(u,"mouseup",H.m(w.ghc(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Y(u,"pointerlockchange",H.m(w.ghm(),q),!1,r))
r=w.z
q=W.b3
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Y(a,"touchstart",H.m(w.ghs(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchend",H.m(w.ghq(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchmove",H.m(w.ghr(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.au(Date.now(),!1)
z.cy=0
z.dv()
return z}}},jq:{"^":"q:29;a",
$1:function(a){var z
H.m3(a)
z=this.a
if(z.ch){z.ch=!1
z.jw()}}}}],["","",,Z,{"^":"",fc:{"^":"a;a,b",$ismd:1,m:{
dn:function(a,b,c){var z
H.i(c,"$isb",[P.k],"$asb")
z=a.createBuffer()
C.b.an(a,b,z)
C.b.dK(a,b,new Int16Array(H.b7(c)),35044)
C.b.an(a,b,null)
return new Z.fc(b,z)}}},dM:{"^":"cE;a,b,c,d,e",
ci:function(a){var z,y,x
try{y=a.a
C.b.dO(y,this.e)
C.b.jP(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.ao(x)
y=P.t('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(z))
throw H.d(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},ka:{"^":"a;a",$isme:1},dN:{"^":"a;a,0b,c,d",
sfR:function(a){this.b=H.i(a,"$isb",[Z.bO],"$asb")},
aO:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
ci:function(a){var z,y
z=this.a
C.b.an(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].ci(a)},
jN:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.dN(x,z[y].e)
C.b.an(x,this.a.a,null)},
aS:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
w=v.c
u=w.a
C.b.an(y,u,w.b)
C.b.iT(y,v.a,v.b,5123,0)
C.b.an(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.o]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ab(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.A(y,", ")+"\nAttrs:   "+C.a.A(u,", ")},
$ismw:1},bO:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b0(this.c)+"'")+"]"}},b4:{"^":"a;a",
gcX:function(a){var z,y
z=this.a
y=(z&$.$get$aH().a)!==0?3:0
if((z&$.$get$aG().a)!==0)y+=3
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$aI().a)!==0)y+=2
if((z&$.$get$aJ().a)!==0)y+=3
if((z&$.$get$bu().a)!==0)y+=3
if((z&$.$get$bv().a)!==0)y+=4
if((z&$.$get$b5().a)!==0)++y
return(z&$.$get$aE().a)!==0?y+4:y},
ix:function(a){var z,y,x
z=$.$get$aH()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bu()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bv()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b5()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fb()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b4))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.o])
y=this.a
if((y&$.$get$aH().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aI().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bu().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bv().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b5().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.A(z,"|")},
m:{
am:function(a){return new Z.b4(a)}}}}],["","",,D,{"^":"",dR:{"^":"a;"},bk:{"^":"a;0a,0b,0c,0d",
saf:function(a){this.a=H.i(a,"$isb",[{func:1,ret:-1,args:[D.w]}],"$asb")},
sbn:function(a){this.b=H.i(a,"$isb",[{func:1,ret:-1,args:[D.w]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.w]}
H.m(b,z)
if(this.a==null)this.saf(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
Z:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[D.w]})
z=this.a
z=z==null?null:C.a.ah(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).Z(z,b)||!1}else y=!1
return y},
D:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.w(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.Y(y,new D.hD(z))
return!0},
iV:function(){return this.D(null)},
jB:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.D(y)}}},
aq:function(){return this.jB(!0,!1)},
m:{
E:function(){var z=new D.bk()
z.saf(null)
z.sbn(null)
z.c=null
z.d=0
return z}}},hD:{"^":"q:30;a",
$1:function(a){var z
H.m(a,{func:1,ret:-1,args:[D.w]})
z=this.a.a
z.b
a.$1(z)}},w:{"^":"a;a,0b"},bP:{"^":"w;c,d,a,0b,$ti"},bQ:{"^":"w;c,d,a,0b,$ti"},z:{"^":"w;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dO:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dO))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},P:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.P))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},cc:{"^":"w;c,a,0b"},hW:{"^":"O;0e,0f,0r,0x,0y,0a,0b,0c,0d",
gaP:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z},
d1:function(a){},
jT:[function(a){var z,y,x
H.i(a,"$isl",[X.P],"$asl")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.y)(a),++y){x=a[y]
if(C.a.ah(this.a,x))return!1}return!0},"$1","gf9",4,0,31],
jS:[function(a,b){var z=X.P
z=new D.bP(a,H.i(b,"$isl",[z],"$asl"),this,[z])
z.b=!0
this.d1(z)},"$2","gf7",8,0,16],
jU:[function(a,b){var z=X.P
z=new D.bQ(a,H.i(b,"$isl",[z],"$asl"),this,[z])
z.b=!0
this.d1(z)},"$2","gfa",8,0,16],
f8:[function(a){var z
H.e(a,"$isw")
if(!this.r&&a instanceof X.cc){z=a.c
if(C.a.ah(this.a,z)){this.r=!0
z=this.y
if(!(z==null))z.D(a)}}},"$1","gbU",4,0,1],
hf:[function(a){var z
H.e(a,"$isw")
if(this.r&&a instanceof X.cc){z=a.c
if(C.a.ah(this.a,z))this.r=!1}},"$1","gc4",4,0,1],
am:function(a){var z,y
if(this.f!=null)return!1
this.f=a
z=a.b
y=z.b
if(y==null){y=D.E()
z.b=y}y.h(0,this.gbU())
y=z.a
if(y==null){y=D.E()
z.a=y
z=y}else z=y
z.h(0,this.gc4())
return!0},
$asl:function(){return[X.P]},
$asO:function(){return[X.P]},
m:{
bn:function(){var z=new X.hW()
z.bi(X.P)
z.e=null
z.f=null
z.r=!1
z.x=null
z.y=null
z.bR(z.gf7(),z.gf9(),z.gfa())
return z}}},hX:{"^":"a;0a,0b,0c,0d",
shu:function(a){this.d=H.i(a,"$isey",[P.k],"$asey")},
jr:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.cc(a,this)
y.b=!0
return z.D(y)},
jn:function(a){var z,y
this.c=a.b
this.d.Z(0,a.a)
z=this.b
if(z==null)return!1
y=new X.cc(a,this)
y.b=!0
return z.D(y)}},ec:{"^":"d0;x,y,c,d,e,a,0b"},ib:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aY:function(a,b){var z,y,x,w,v,u,t,s
z=new P.au(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.ac(y.a+x*w,y.b+v*u)
u=this.a.gbr()
s=new X.bT(a,V.aR(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cK:function(a,b){this.r=a.a
return!1},
b5:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eR()
if(typeof z!=="number")return z.bN()
this.r=(z&~y)>>>0
return!1},
b4:function(a,b){var z=this.d
if(z==null)return!1
z.D(this.aY(a,b))
return!0},
js:function(a){return!1},
hh:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.au(Date.now(),!1)
y=this.f
x=new X.ec(c,a,this.a.gbr(),b,z,this)
x.b=!0
y.D(x)
this.y=z
this.x=V.aR()}},Z:{"^":"a;a,b,c",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.Z))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bT:{"^":"d0;x,y,z,Q,ch,c,d,e,a,0b"},iv:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bZ:function(a,b,c){var z,y,x
z=new P.au(Date.now(),!1)
y=this.a.gbr()
x=new X.bT(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cK:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.D(this.bZ(a,b,!0))
return!0},
b5:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eR()
if(typeof z!=="number")return z.bN()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.D(this.bZ(a,b,!0))
return!0},
b4:function(a,b){var z=this.d
if(z==null)return!1
z.D(this.bZ(a,b,!1))
return!0},
jt:function(a,b){return!1}},d0:{"^":"w;"},eO:{"^":"d0;x,y,z,Q,ch,c,d,e,a,0b"},jt:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aY:function(a,b){var z,y,x,w
H.i(a,"$isb",[V.ac],"$asb")
z=new P.au(Date.now(),!1)
y=a.length>0?a[0]:V.aR()
x=this.a.gbr()
w=new X.eO(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
jq:function(a){var z
H.i(a,"$isb",[V.ac],"$asb")
z=this.b
if(z==null)return!1
z.D(this.aY(a,!0))
return!0},
jo:function(a){var z
H.i(a,"$isb",[V.ac],"$asb")
z=this.c
if(z==null)return!1
z.D(this.aY(a,!0))
return!0},
jp:function(a){var z
H.i(a,"$isb",[V.ac],"$asb")
z=this.d
if(z==null)return!1
z.D(this.aY(a,!1))
return!0}},jR:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sfG:function(a){this.z=H.i(a,"$isb",[[P.d4,P.a]],"$asb")},
gbr:function(){var z=this.a
return V.ev(0,0,C.n.gdL(z).c,C.n.gdL(z).d)},
de:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.P(z,new X.Z(y,a.altKey,a.shiftKey))},
aH:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.Z(y,a.altKey,a.shiftKey)},
cb:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.Z(y,a.altKey,a.shiftKey)},
aw:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=z.top
if(typeof x!=="number")return x.I()
return new V.ac(y-w,x-v)},
aZ:function(a){return new V.a3(a.movementX,a.movementY)},
c7:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.ac])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
t=C.j.aj(u.pageX)
C.j.aj(u.pageY)
s=z.left
C.j.aj(u.pageX)
C.a.h(y,new V.ac(t-s,C.j.aj(u.pageY)-z.top))}return y},
at:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dO(z,new X.Z(y,a.altKey,a.shiftKey))},
c1:function(a){var z,y,x,w,v,u
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
kg:[function(a){this.f=!0},"$1","ghd",4,0,10],
ka:[function(a){this.f=!1},"$1","gh6",4,0,10],
kd:[function(a){H.e(a,"$isar")
if(this.f&&this.c1(a))a.preventDefault()},"$1","gha",4,0,4],
hf:[function(a){var z
H.e(a,"$isbo")
if(!this.f)return
z=this.de(a)
if(this.b.jr(z))a.preventDefault()},"$1","gc4",4,0,18],
f8:[function(a){var z
H.e(a,"$isbo")
if(!this.f)return
z=this.de(a)
if(this.b.jn(z))a.preventDefault()},"$1","gbU",4,0,18],
kj:[function(a){var z,y,x,w
H.e(a,"$isar")
z=this.a
z.focus()
this.f=!0
this.aH(a)
if(this.x){y=this.at(a)
x=this.aZ(a)
if(this.d.cK(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.at(a)
w=this.aw(a)
if(this.c.cK(y,w))a.preventDefault()},"$1","ghi",4,0,4],
kl:[function(a){var z,y,x
H.e(a,"$isar")
this.aH(a)
z=this.at(a)
if(this.x){y=this.aZ(a)
if(this.d.b5(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.b5(z,x))a.preventDefault()},"$1","ghk",4,0,4],
kf:[function(a){var z,y,x
H.e(a,"$isar")
if(!this.c1(a)){this.aH(a)
z=this.at(a)
if(this.x){y=this.aZ(a)
if(this.d.b5(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.b5(z,x))a.preventDefault()}},"$1","ghc",4,0,4],
kk:[function(a){var z,y,x
H.e(a,"$isar")
this.aH(a)
z=this.at(a)
if(this.x){y=this.aZ(a)
if(this.d.b4(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.b4(z,x))a.preventDefault()},"$1","ghj",4,0,4],
ke:[function(a){var z,y,x
H.e(a,"$isar")
if(!this.c1(a)){this.aH(a)
z=this.at(a)
if(this.x){y=this.aZ(a)
if(this.d.b4(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.b4(z,x))a.preventDefault()}},"$1","ghb",4,0,4],
km:[function(a){var z,y
H.e(a,"$isbw")
this.aH(a)
z=new V.a3((a&&C.H).giO(a),C.H.giP(a)).E(0,180)
if(this.x){if(this.d.js(z))a.preventDefault()
return}if(this.r)return
y=this.aw(a)
if(this.c.jt(z,y))a.preventDefault()},"$1","ghl",4,0,37],
kn:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.at(this.y)
x=this.aw(this.y)
this.d.hh(y,x,z)}},"$1","ghm",4,0,10],
kt:[function(a){var z
H.e(a,"$isb3")
this.a.focus()
this.f=!0
this.cb(a)
z=this.c7(a)
if(this.e.jq(z))a.preventDefault()},"$1","ghs",4,0,11],
kr:[function(a){var z
H.e(a,"$isb3")
this.cb(a)
z=this.c7(a)
if(this.e.jo(z))a.preventDefault()},"$1","ghq",4,0,11],
ks:[function(a){var z
H.e(a,"$isb3")
this.cb(a)
z=this.c7(a)
if(this.e.jp(z))a.preventDefault()},"$1","ghr",4,0,11]}}],["","",,D,{"^":"",c5:{"^":"a;0a,0b,0c,0d",
gt:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z},
aB:[function(a){var z
H.e(a,"$isw")
z=this.d
if(!(z==null))z.D(a)},function(){return this.aB(null)},"jV","$1","$0","gfc",0,2,0],
$isa1:1,
$isaB:1,
m:{
cN:function(a,b){var z,y,x
z=new D.c5()
z.c=new V.T(1,1,1)
z.a=V.k1()
y=z.b
z.b=b
b.gt().h(0,z.gfc())
x=new D.z("mover",y,z.b,z,[U.a2])
x.b=!0
z.aB(x)
if(!z.c.u(0,a)){y=z.c
z.c=a
x=new D.z("color",y,a,z,[V.T])
x.b=!0
z.aB(x)}return z}}},a1:{"^":"a;",$isaB:1},hZ:{"^":"O;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sfb:function(a){this.e=H.i(a,"$isb",[D.c5],"$asb")},
sfd:function(a){this.f=H.i(a,"$isb",[D.ep],"$asb")},
sfe:function(a){this.r=H.i(a,"$isb",[D.eB],"$asb")},
sff:function(a){this.x=H.i(a,"$isb",[D.eH],"$asb")},
sfg:function(a){this.y=H.i(a,"$isb",[D.eI],"$asb")},
sfh:function(a){this.z=H.i(a,"$isb",[D.eJ],"$asb")},
gt:function(){var z=this.Q
if(z==null){z=D.E()
this.Q=z}return z},
aB:function(a){var z=this.Q
if(!(z==null))z.D(a)},
hg:[function(a){var z
H.e(a,"$isw")
z=this.ch
if(!(z==null))z.D(a)},function(){return this.hg(null)},"ki","$1","$0","gdr",0,2,0],
ko:[function(a){var z,y,x
H.i(a,"$isl",[D.a1],"$asl")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.y)(a),++y){x=a[y]
if(x==null||this.fA(x))return!1}return!0},"$1","ghn",4,0,39],
k7:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a1
H.i(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gdr(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.e(b[u],"$isa1")
if(t instanceof D.c5)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bk()
s.saf(null)
s.sbn(null)
s.c=null
s.d=0
t.d=s}H.m(x,w)
if(s.a==null)s.saf(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.bP(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","gh3",8,0,19],
kq:[function(a,b){var z,y,x,w
z=D.a1
H.i(b,"$isl",[z],"$asl")
for(y=b.gS(b),x=this.gdr();y.B();){w=y.gG()
C.a.Z(this.e,w)
w.gt().Z(0,x)}z=new D.bQ(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","ghp",8,0,19],
fA:function(a){var z=C.a.ah(this.e,a)
return z},
$asl:function(){return[D.a1]},
$asO:function(){return[D.a1]}},ep:{"^":"a;",$isa1:1,$isaB:1},eB:{"^":"a;",$isa1:1,$isaB:1},eH:{"^":"a;",$isa1:1,$isaB:1},eI:{"^":"a;",$isa1:1,$isaB:1},eJ:{"^":"a;",$isa1:1,$isaB:1}}],["","",,V,{"^":"",
mg:[function(a,b){if(typeof b!=="number")return b.I()
if(typeof a!=="number")return H.x(a)
return Math.abs(b-a)<=1e-9},"$2","is",8,0,33],
cz:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.bg(a-b,z)
return(a<0?a+z:a)+b},
B:function(a,b,c){if(a==null)return C.c.ab("null",c)
return C.c.ab(C.j.ez($.n.$2(a,0)?0:a,b),c+b+1)},
bc:function(a,b,c){var z,y,x,w,v,u
H.i(a,"$isb",[P.u],"$asb")
z=H.c([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.y)(a),++w){v=V.B(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.p(z,u,C.c.ab(z[u],x))}return z},
dE:function(a,b){return C.j.jI(Math.pow(b,C.Q.cB(Math.log(H.lC(a))/Math.log(b))))},
T:{"^":"a;a,b,c",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}},
c2:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c2))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"}},
aQ:{"^":"a;a,b,c,d,e,f,r,x,y",
ac:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.u])
return z},
bI:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=this.e
x=this.y
if(typeof x!=="number")return H.x(x)
w=y*x
v=this.f
u=this.x
if(typeof u!=="number")return H.x(u)
t=this.d
s=this.b
r=s*x
q=this.c
p=u*q
o=this.r
n=s*v-y*q
if(typeof o!=="number")return o.l()
m=z*(w-v*u)-t*(r-p)+o*n
if($.n.$2(m,0))return V.it()
l=1/m
return new V.aQ((w-u*v)*l,(p-r)*l,n*l,(o*v-t*x)*l,(z*x-o*q)*l,(t*q-z*v)*l,(t*u-o*y)*l,(o*s-z*u)*l,(z*y-t*s)*l)},
aU:function(a){var z,y,x,w,v,u
z=a.a
y=a.b
x=a.c
if(typeof x!=="number")return H.x(x)
w=this.r
if(typeof w!=="number")return w.l()
v=this.x
if(typeof v!=="number")return v.l()
u=this.y
if(typeof u!=="number")return u.l()
return new V.K(this.a*z+this.b*y+this.c*x,this.d*z+this.e*y+this.f*x,w*z+v*y+u*x)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aQ))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
z=b.e
if(!$.n.$2(z,this.e))return!1
z=b.f
if(!$.n.$2(z,this.f))return!1
z=b.r
if(!$.n.$2(z,this.r))return!1
z=b.x
if(!$.n.$2(z,this.x))return!1
z=b.y
if(!$.n.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.u]
y=V.bc(H.c([this.a,this.d,this.r],z),3,0)
x=V.bc(H.c([this.b,this.e,this.x],z),3,0)
w=V.bc(H.c([this.c,this.f,this.y],z),3,0)
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
it:function(){var z=$.ef
if(z==null){z=new V.aQ(1,0,0,0,1,0,0,0,1)
$.ef=z}return z}}},
aa:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ac:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.u])
return z},
bI:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if(typeof l!=="number")return l.l()
j=this.z
i=this.cx
if(typeof j!=="number")return j.l()
h=l*k-j*i
g=this.db
f=this.Q
if(typeof f!=="number")return f.l()
e=l*g-f*i
d=this.dx
c=this.ch
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.n.$2(a2,0))return V.bS()
a3=1/a2
a4=-w
a5=-i
return V.av((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
l:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
x=this.b
w=a7.e
v=this.c
u=a7.y
if(typeof u!=="number")return H.x(u)
t=this.d
s=a7.cx
r=a7.b
q=a7.f
p=a7.z
if(typeof p!=="number")return H.x(p)
o=a7.cy
n=a7.c
m=a7.r
l=a7.Q
if(typeof l!=="number")return H.x(l)
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
if(typeof b!=="number")return b.l()
a=this.z
if(typeof a!=="number")return a.l()
a0=this.Q
if(typeof a0!=="number")return a0.l()
a1=this.ch
a2=this.cx
a3=this.cy
a4=this.db
a5=this.dx
return V.av(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
aU:function(a){var z,y,x,w,v,u
z=a.a
y=a.b
x=a.c
if(typeof x!=="number")return H.x(x)
w=this.y
if(typeof w!=="number")return w.l()
v=this.z
if(typeof v!=="number")return v.l()
u=this.Q
if(typeof u!=="number")return u.l()
return new V.K(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,w*z+v*y+u*x)},
bc:function(a){var z,y,x,w,v,u
z=a.a
y=a.b
x=a.c
if(typeof x!=="number")return H.x(x)
w=this.y
if(typeof w!=="number")return w.l()
v=this.z
if(typeof v!=="number")return v.l()
u=this.Q
if(typeof u!=="number")return u.l()
return new V.ad(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,w*z+v*y+u*x+this.ch)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
z=b.e
if(!$.n.$2(z,this.e))return!1
z=b.f
if(!$.n.$2(z,this.f))return!1
z=b.r
if(!$.n.$2(z,this.r))return!1
z=b.x
if(!$.n.$2(z,this.x))return!1
z=b.y
if(!$.n.$2(z,this.y))return!1
z=b.z
if(!$.n.$2(z,this.z))return!1
z=b.Q
if(!$.n.$2(z,this.Q))return!1
z=b.ch
if(!$.n.$2(z,this.ch))return!1
z=b.cx
if(!$.n.$2(z,this.cx))return!1
z=b.cy
if(!$.n.$2(z,this.cy))return!1
z=b.db
if(!$.n.$2(z,this.db))return!1
z=b.dx
if(!$.n.$2(z,this.dx))return!1
return!0},
i:function(a){return this.J()},
ea:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.u]
y=V.bc(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bc(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bc(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bc(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
w:function(a){return this.ea(a,3,0)},
J:function(){return this.ea("",3,0)},
m:{
bS:function(){var z=$.ej
if(z==null){z=V.av(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.ej=z}return z},
av:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aa(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ei:function(a,b,c){return V.av(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
cW:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.av(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
eh:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.av(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
cX:function(a,b,c,d){d=V.f8()
return V.eg(V.er(),d,new V.K(a,b,c))},
eg:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.E(0,Math.sqrt(c.H(c)))
y=b.b0(z)
x=y.E(0,Math.sqrt(y.H(y)))
w=z.b0(x)
v=new V.K(a.a,a.b,a.c)
u=x.P(0).H(v)
t=w.P(0).H(v)
s=z.P(0).H(v)
return V.av(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
ac:{"^":"a;a,b",
I:function(a,b){return new V.ac(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"},
m:{
aR:function(){var z=$.eq
if(z==null){z=new V.ac(0,0)
$.eq=z}return z}}},
ad:{"^":"a;a,b,c",
I:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.I()
if(typeof w!=="number")return H.x(w)
return new V.ad(this.a-z,this.b-y,x-w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"},
m:{
er:function(){var z=$.bs
if(z==null){z=new V.ad(0,0,0)
$.bs=z}return z}}},
d_:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d_))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"}},
eu:{"^":"a;a,b,c,d",
gap:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eu))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"},
m:{
ev:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eu(a,b,c,d)}}},
a3:{"^":"a;a,b",
j7:[function(a){return Math.sqrt(this.H(this))},"$0","gn",1,0,20],
H:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.x(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.x(w)
return z*y+x*w},
l:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.l()
y=this.b
if(typeof y!=="number")return y.l()
return new V.a3(z*b,y*b)},
E:function(a,b){var z,y
if($.n.$2(b,0)){z=$.f4
if(z==null){z=new V.a3(0,0)
$.f4=z}return z}z=this.a
if(typeof z!=="number")return z.E()
y=this.b
if(typeof y!=="number")return y.E()
return new V.a3(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}},
K:{"^":"a;a,b,c",
j7:[function(a){return Math.sqrt(this.H(this))},"$0","gn",1,0,20],
H:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.x(y)
return this.a*a.a+this.b*a.b+z*y},
cG:function(a,b){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=a.c
if(typeof w!=="number")return w.I()
if(typeof x!=="number")return H.x(x)
return new V.K(z+b*(a.a-z),y+b*(a.b-y),x+b*(w-x))},
b0:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.x(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.l()
v=a.a
u=this.a
return new V.K(z*y-x*w,x*v-u*y,u*w-z*v)},
C:function(a,b){var z,y
z=this.c
y=b.c
if(typeof z!=="number")return z.C()
if(typeof y!=="number")return H.x(y)
return new V.K(this.a+b.a,this.b+b.b,z+y)},
P:function(a){var z=this.c
if(typeof z!=="number")return z.P()
return new V.K(-this.a,-this.b,-z)},
E:function(a,b){var z
if($.n.$2(b,0))return V.bX()
z=this.c
if(typeof z!=="number")return z.E()
return new V.K(this.a/b,this.b/b,z/b)},
ei:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"},
m:{
bX:function(){var z=$.f7
if(z==null){z=new V.K(0,0,0)
$.f7=z}return z},
f8:function(){var z=$.f6
if(z==null){z=new V.K(0,1,0)
$.f6=z}return z},
k1:function(){var z=$.cl
if(z==null){z=new V.K(0,0,1)
$.cl=z}return z}}}}],["","",,U,{"^":"",hk:{"^":"dR;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bV:function(a){var z,y,x
z=this.a
y=this.c
x=this.b
if(z)return V.cz(a,y,x)
else{if(a<y)z=y
else z=a>x?x:a
return z}},
gt:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z},
M:function(a){var z=this.y
if(!(z==null))z.D(a)},
scR:function(a,b){var z=this.a
if(z!==b){this.a=b
z=new D.z("wrap",z,b,this,[P.Q])
z.b=!0
this.M(z)}},
scI:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bV(z)}z=new D.z("maximumLocation",y,this.b,this,[P.u])
z.b=!0
this.M(z)}},
scJ:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bV(z)}z=new D.z("minimumLocation",y,this.c,this,[P.u])
z.b=!0
this.M(z)}},
sa1:function(a,b){var z,y
b=this.bV(b==null?0:b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.z("location",y,b,this,[P.u])
z.b=!0
this.M(z)}},
sb3:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.z("maximumVelocity",y,a,this,[P.u])
z.b=!0
this.M(z)}},
sU:function(a){var z,y,x
z=a==null?0:a
y=this.e
a=-y
if(!(z<a))a=z>y?y:z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.z("velocity",x,a,this,[P.u])
z.b=!0
this.M(z)}},
sax:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.z("dampening",y,a,this,[P.u])
z.b=!0
this.M(z)}},
ad:function(a){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa1(0,this.d+y*a)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sU(y)}},
m:{
bJ:function(){var z=new U.hk()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},cM:{"^":"a2;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
sT:function(a){var z,y,x
if(!J.N(this.a,a)){z=this.a
this.a=a
y=new D.z("matrix",z,a,this,[V.aa])
y.b=!0
x=this.b
if(!(x==null))x.D(y)}},
az:function(a,b){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cM))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")},
m:{
c4:function(a){var z=new U.cM()
z.sT(a)
return z}}},e2:{"^":"O;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
M:[function(a){var z
H.e(a,"$isw")
z=this.e
if(!(z==null))z.D(a)},function(){return this.M(null)},"as","$1","$0","gaC",0,2,0],
k6:[function(a,b){var z,y,x,w,v,u,t,s
z=U.a2
H.i(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gaC(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.m(x,w)
if(s.a==null)s.saf(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.M(z)},"$2","gh2",8,0,21],
kp:[function(a,b){var z,y,x
z=U.a2
H.i(b,"$isl",[z],"$asl")
for(y=b.gS(b),x=this.gaC();y.B();)y.gG().gt().Z(0,x)
z=new D.bQ(a,b,this,[z])
z.b=!0
this.M(z)},"$2","gho",8,0,21],
az:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.O()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ap(z,z.length,0,[H.r(z,0)]),x=null;z.B();){y=z.d
if(y!=null){w=y.az(a,b)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.bS():x
z=this.e
if(!(z==null))z.aq()}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e2))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.N(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asl:function(){return[U.a2]},
$asO:function(){return[U.a2]},
$isa2:1,
m:{
e3:function(a){var z=new U.e2()
z.bi(U.a2)
z.bh(z.gh2(),z.gho())
z.cd(0,a)
z.e=null
z.f=V.bS()
z.r=0
return z}}},a2:{"^":"dR;"},ex:{"^":"a2;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gt:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z},
M:function(a){var z=this.y
if(!(z==null))z.D(a)},
seF:function(a){var z,y
a=V.cz(a,0,6.283185307179586)
z=this.a
if(!$.n.$2(z,a)){y=this.a
this.a=a
z=new D.z("yaw",y,a,this,[P.u])
z.b=!0
this.M(z)}},
seo:function(a){var z,y
a=V.cz(a,0,6.283185307179586)
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
z=new D.z("pitch",y,a,this,[P.u])
z.b=!0
this.M(z)}},
seu:function(a){var z,y
a=V.cz(a,0,6.283185307179586)
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
z=new D.z("roll",y,a,this,[P.u])
z.b=!0
this.M(z)}},
az:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.seF(this.a+this.d*a.y)
this.seo(this.b+this.e*a.y)
this.seu(this.c+this.f*a.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
this.x=V.av(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1).l(0,V.eh(this.b)).l(0,V.cW(this.a))
z=this.y
if(!(z==null))z.aq()}return this.x},
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ex))return!1
z=this.a
y=b.a
if(!$.n.$2(z,y))return!1
z=this.b
y=b.b
if(!$.n.$2(z,y))return!1
z=this.c
y=b.c
if(!$.n.$2(z,y))return!1
z=this.d
y=b.d
if(!$.n.$2(z,y))return!1
z=this.e
y=b.e
if(!$.n.$2(z,y))return!1
z=this.f
y=b.f
if(!$.n.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"], ["+V.B(this.d,3,0)+", "+V.B(this.e,3,0)+", "+V.B(this.f,3,0)+"]"}},jS:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.E()
this.fx=z}return z},
M:[function(a){var z
H.e(a,"$isw")
z=this.fx
if(!(z==null))z.D(a)},function(){return this.M(null)},"as","$1","$0","gaC",0,2,0],
am:function(a){var z,y
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.E()
z.b=y
z=y}else z=y
z.h(0,this.gh_())
z=this.a.c
y=z.d
if(y==null){y=D.E()
z.d=y
z=y}else z=y
z.h(0,this.gh0())
z=this.a.c
y=z.c
if(y==null){y=D.E()
z.c=y
z=y}else z=y
z.h(0,this.gh1())
z=this.a.d
y=z.f
if(y==null){y=D.E()
z.f=y
z=y}else z=y
z.h(0,this.gfY())
z=this.a.d
y=z.d
if(y==null){y=D.E()
z.d=y
z=y}else z=y
z.h(0,this.gfZ())
z=this.a.e
y=z.b
if(y==null){y=D.E()
z.b=y
z=y}else z=y
z.h(0,this.ghZ())
z=this.a.e
y=z.d
if(y==null){y=D.E()
z.d=y
z=y}else z=y
z.h(0,this.ghY())
z=this.a.e
y=z.c
if(y==null){y=D.E()
z.c=y
z=y}else z=y
z.h(0,this.ghX())
return!0},
al:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.P()
z=-z}if(this.r){if(typeof y!=="number")return y.P()
y=-y}return new V.a3(z,y)},
k_:[function(a){a=H.h(H.e(a,"$isw"),"$isbT")
if(!J.N(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gh_",4,0,1],
k0:[function(a){var z,y,x,w,v,u,t
a=H.h(H.e(a,"$isw"),"$isbT")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.a3(z.a,z.b)
z=z.H(z)
y=this.Q
if(typeof y!=="number")return H.x(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.al(new V.a3(y.a,y.b).l(0,2).E(0,z.gap()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.x(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.x(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.al(new V.a3(x.a,x.b).l(0,2).E(0,z.gap()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.x(u)
t=this.cy
if(typeof t!=="number")return H.x(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.x(v)
x=this.db
if(typeof x!=="number")return H.x(x)
t.sa1(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.I(0,a.z)
this.dx=this.al(new V.a3(y.a,y.b).l(0,2).E(0,z.gap()))}this.as()},"$1","gh0",4,0,1],
k5:[function(a){var z,y,x
H.e(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.H(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.x(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.x(z)
x.sU(-y*10*z)
this.as()}},"$1","gh1",4,0,1],
jY:[function(a){if(H.h(H.e(a,"$isw"),"$isec").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfY",4,0,1],
jZ:[function(a){var z,y,x,w,v,u,t
a=H.h(H.e(a,"$isw"),"$isbT")
if(!J.N(this.d,a.x.b))return
z=a.c
y=a.d
x=y.I(0,a.y)
w=this.al(new V.a3(x.a,x.b).l(0,2).E(0,z.gap()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.x(u)
t=this.cy
if(typeof t!=="number")return H.x(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.x(v)
x=this.db
if(typeof x!=="number")return H.x(x)
t.sa1(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.I(0,a.z)
this.dx=this.al(new V.a3(y.a,y.b).l(0,2).E(0,z.gap()))
this.as()},"$1","gfZ",4,0,1],
kx:[function(a){H.e(a,"$isw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghZ",4,0,1],
kw:[function(a){var z,y,x,w,v,u,t
a=H.h(H.e(a,"$isw"),"$iseO")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.a3(z.a,z.b)
z=z.H(z)
y=this.Q
if(typeof y!=="number")return H.x(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.al(new V.a3(y.a,y.b).l(0,2).E(0,z.gap()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.x(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.x(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.al(new V.a3(x.a,x.b).l(0,2).E(0,z.gap()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.x(u)
t=this.cy
if(typeof t!=="number")return H.x(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.x(v)
x=this.db
if(typeof x!=="number")return H.x(x)
t.sa1(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.I(0,a.z)
this.dx=this.al(new V.a3(y.a,y.b).l(0,2).E(0,z.gap()))}this.as()},"$1","ghY",4,0,1],
kv:[function(a){var z,y,x
H.e(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.H(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.x(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.x(z)
x.sU(-y*10*z)
this.as()}},"$1","ghX",4,0,1],
az:function(a,b){var z,y,x
z=this.dy
y=a.e
if(typeof z!=="number")return z.O()
if(z<y){this.dy=y
x=a.y
this.c.ad(x)
this.b.ad(x)
this.fr=V.cW(this.b.d).l(0,V.eh(this.c.d))}return this.fr},
$isa2:1},jT:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sfz:function(a){this.dy=H.m(a,{func:1,ret:V.ad,args:[V.ad,V.ad]})},
gt:function(){var z=this.dx
if(z==null){z=D.E()
this.dx=z}return z},
M:[function(a){var z
H.e(a,"$isw")
z=this.dx
if(!(z==null))z.D(a)},function(){return this.M(null)},"as","$1","$0","gaC",0,2,0],
ga1:function(a){return new V.ad(this.r.d,this.x.d,this.y.d)},
kh:[function(a){this.M(H.e(a,"$isw"))},"$1","ghe",4,0,1],
cc:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.C()
e+=d}else if(b.r){if(typeof e!=="number")return e.I()
e-=d}else{if(typeof e!=="number")return e.bf()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
az:function(a,b){var z,y,x,w,v,u
z=this.cy
y=a.e
if(typeof z!=="number")return z.O()
if(z<y){this.cy=y
this.ga1(this)
x=a.y
if(x>0.1)x=0.1
z=this.ch
if(typeof z!=="number")return z.l()
w=z*x
z=this.cx
if(typeof z!=="number")return z.l()
v=z*x
u=new V.K(this.r.f,this.x.f,this.y.f)
z=this.Q
if(z!=null)u=z.aU(u)
u=new V.K(this.cc(this.a,this.b,w,v,u.a),this.cc(this.c,this.d,w,v,u.b),this.cc(this.e,this.f,w,v,u.c))
z=this.z
if(z!=null)u=z.aU(u)
this.r.sU(u.a)
this.x.sU(u.b)
this.y.sU(u.c)
this.r.ad(x)
this.x.ad(x)
this.y.ad(x)
this.db=V.ei(this.r.d,-this.x.d,this.y.d)}return this.db},
$isa2:1}}],["","",,M,{"^":"",hB:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sfv:function(a,b){this.d=H.i(b,"$isO",[E.aq],"$asO")},
aV:[function(a){var z
H.e(a,"$isw")
z=this.x
if(!(z==null))z.D(a)},function(){return this.aV(null)},"jW","$1","$0","gaD",0,2,0],
kb:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aq
H.i(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gaD(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.gae()==null){s=new D.bk()
s.saf(null)
s.sbn(null)
s.c=null
s.d=0
t.sae(s)}s=t.gae()
s.toString
H.m(x,w)
if(s.a==null)s.saf(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.aV(z)},"$2","gh8",8,0,6],
kc:[function(a,b){var z,y,x
z=E.aq
H.i(b,"$isl",[z],"$asl")
for(y=b.gS(b),x=this.gaD();y.B();)y.gG().gt().Z(0,x)
z=new D.bQ(a,b,this,[z])
z.b=!0
this.aV(z)},"$2","gh9",8,0,6],
gt:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
aS:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.er(this.c)
z=this.b
z.toString
y=a.a
C.b.iz(y,36160,null)
C.b.cs(y,2884)
C.b.cs(y,2929)
C.b.iQ(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.x(x)
t=C.j.aj(u*x)
u=v.b
if(typeof w!=="number")return H.x(w)
s=C.j.aj(u*w)
u=C.j.aj(v.c*x)
a.c=u
v=C.j.aj(v.d*w)
a.d=v
C.b.jQ(y,t,s,u,v)
C.b.iF(y,z.c)
z=z.a
C.b.iE(y,z.a,z.b,z.c,z.d)
C.b.iD(y,16640)
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
a.cy.eq(n)
y=$.eo
if(y==null){y=V.er()
v=V.f8()
u=$.f5
if(u==null){u=new V.K(0,0,-1)
$.f5=u}u=V.eg(y,v,u)
$.eo=u
m=u}else m=y
y=z.b
if(y!=null){l=y.az(a,z)
if(l!=null)m=l.l(0,m)}a.db.eq(m)
for(z=this.d.a,z=new J.ap(z,z.length,0,[H.r(z,0)]);z.B();)z.d.ad(a)
for(z=this.d.a,z=new J.ap(z,z.length,0,[H.r(z,0)]);z.B();)z.d.aS(a)
this.a.toString
a.cy.cL()
a.db.cL()
this.b.toString
a.ep()},
$ismr:1}}],["","",,A,{"^":"",dI:{"^":"a;a,b,c"},h7:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
iW:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
C.b.dO(w.a,w.c)}},
iS:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
C.b.dN(w.a,w.c)}}},ij:{"^":"d2;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ao,0ai,0bt,0dP,0bu,0bv,0dQ,0dR,0bw,0bx,0dS,0dT,0by,0bz,0dU,0dV,0bA,0dW,0dX,0bB,0dY,0dZ,0bC,0bD,0bE,0e_,0e0,0bF,0bG,0e1,0e2,0bH,0e3,0ct,0e4,0cu,0e5,0cv,0e6,0cw,0e7,0cz,0e8,0cA,a,b,0c,0d,0e,0f,0r,0x,0y",
sfo:function(a){this.r1=H.i(a,"$isb",[A.ax],"$asb")},
sfE:function(a){this.ct=H.i(a,"$isb",[A.db],"$asb")},
sht:function(a){this.cu=H.i(a,"$isb",[A.dd],"$asb")},
shQ:function(a){this.cv=H.i(a,"$isb",[A.de],"$asb")},
si0:function(a){this.cw=H.i(a,"$isb",[A.df],"$asb")},
si1:function(a){this.cz=H.i(a,"$isb",[A.dg],"$asb")},
si2:function(a){this.cA=H.i(a,"$isb",[A.dh],"$asb")},
eZ:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
a2.i6(z)
a2.ie(z)
a2.i7(z)
a2.io(z)
a2.ip(z)
a2.ih(z)
a2.it(z)
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
x.ia(z)
x.i5(z)
x.i8(z)
x.ib(z)
x.il(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.ij(z)
x.ik(z)}x.ig(z)
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
p=H.c([],[P.o])
if(x.b!==C.d)C.a.h(p,"ambient()")
if(x.c!==C.d)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.d)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.d)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.A(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.i9(z)
x.ii(z)
x.im(z)
x.iq(z)
x.ir(z)
x.is(z)
x.ic(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.o])
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
n="vec4("+C.a.A(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.df(s,35633)
this.f=this.df(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
C.b.dH(x,v,this.e)
C.b.dH(x,this.r,this.f)
C.b.j8(x,this.r)
if(!H.fK(C.b.bP(x,this.r,35714))){m=C.b.eM(x,this.r)
C.b.iM(x,this.r)
H.p(P.t("Failed to link shader: "+H.j(m)))}this.hL()
this.hN()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a2.fr)this.id=H.h(this.y.k(0,"invViewMat"),"$isax")
if(y)this.dy=H.h(this.y.k(0,"objMat"),"$isax")
if(w)this.fr=H.h(this.y.k(0,"viewObjMat"),"$isax")
this.fy=H.h(this.y.k(0,"projViewObjMat"),"$isax")
if(a2.x2)this.k1=H.h(this.y.k(0,"txt2DMat"),"$isdc")
if(a2.y1)this.k2=H.h(this.y.k(0,"txtCubeMat"),"$isax")
if(a2.y2)this.k3=H.h(this.y.k(0,"colorMat"),"$isax")
this.sfo(H.c([],[A.ax]))
y=a2.ao
if(y>0){this.k4=H.e(this.y.k(0,"bendMatCount"),"$isD")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.p(P.t("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.h(k,"$isax"))}}y=a2.a
if(y!==C.d){this.r2=H.h(this.y.k(0,"emissionClr"),"$isC")
switch(y){case C.d:break
case C.i:break
case C.e:this.rx=H.h(this.y.k(0,"emissionTxt"),"$isak")
this.x1=H.h(this.y.k(0,"nullEmissionTxt"),"$isD")
break
case C.f:this.ry=H.h(this.y.k(0,"emissionTxt"),"$isal")
this.x1=H.h(this.y.k(0,"nullEmissionTxt"),"$isD")
break}}y=a2.b
if(y!==C.d){this.x2=H.h(this.y.k(0,"ambientClr"),"$isC")
switch(y){case C.d:break
case C.i:break
case C.e:this.y1=H.h(this.y.k(0,"ambientTxt"),"$isak")
this.ao=H.h(this.y.k(0,"nullAmbientTxt"),"$isD")
break
case C.f:this.y2=H.h(this.y.k(0,"ambientTxt"),"$isal")
this.ao=H.h(this.y.k(0,"nullAmbientTxt"),"$isD")
break}}y=a2.c
if(y!==C.d){this.ai=H.h(this.y.k(0,"diffuseClr"),"$isC")
switch(y){case C.d:break
case C.i:break
case C.e:this.bt=H.h(this.y.k(0,"diffuseTxt"),"$isak")
this.bu=H.h(this.y.k(0,"nullDiffuseTxt"),"$isD")
break
case C.f:this.dP=H.h(this.y.k(0,"diffuseTxt"),"$isal")
this.bu=H.h(this.y.k(0,"nullDiffuseTxt"),"$isD")
break}}y=a2.d
if(y!==C.d){this.bv=H.h(this.y.k(0,"invDiffuseClr"),"$isC")
switch(y){case C.d:break
case C.i:break
case C.e:this.dQ=H.h(this.y.k(0,"invDiffuseTxt"),"$isak")
this.bw=H.h(this.y.k(0,"nullInvDiffuseTxt"),"$isD")
break
case C.f:this.dR=H.h(this.y.k(0,"invDiffuseTxt"),"$isal")
this.bw=H.h(this.y.k(0,"nullInvDiffuseTxt"),"$isD")
break}}y=a2.e
if(y!==C.d){this.bz=H.h(this.y.k(0,"shininess"),"$isV")
this.bx=H.h(this.y.k(0,"specularClr"),"$isC")
switch(y){case C.d:break
case C.i:break
case C.e:this.dS=H.h(this.y.k(0,"specularTxt"),"$isak")
this.by=H.h(this.y.k(0,"nullSpecularTxt"),"$isD")
break
case C.f:this.dT=H.h(this.y.k(0,"specularTxt"),"$isal")
this.by=H.h(this.y.k(0,"nullSpecularTxt"),"$isD")
break}}switch(a2.f){case C.d:break
case C.i:break
case C.e:this.dU=H.h(this.y.k(0,"bumpTxt"),"$isak")
this.bA=H.h(this.y.k(0,"nullBumpTxt"),"$isD")
break
case C.f:this.dV=H.h(this.y.k(0,"bumpTxt"),"$isal")
this.bA=H.h(this.y.k(0,"nullBumpTxt"),"$isD")
break}if(a2.dy){this.dW=H.h(this.y.k(0,"envSampler"),"$isal")
this.dX=H.h(this.y.k(0,"nullEnvTxt"),"$isD")
y=a2.r
if(y!==C.d){this.bB=H.h(this.y.k(0,"reflectClr"),"$isC")
switch(y){case C.d:break
case C.i:break
case C.e:this.dY=H.h(this.y.k(0,"reflectTxt"),"$isak")
this.bC=H.h(this.y.k(0,"nullReflectTxt"),"$isD")
break
case C.f:this.dZ=H.h(this.y.k(0,"reflectTxt"),"$isal")
this.bC=H.h(this.y.k(0,"nullReflectTxt"),"$isD")
break}}y=a2.x
if(y!==C.d){this.bD=H.h(this.y.k(0,"refraction"),"$isV")
this.bE=H.h(this.y.k(0,"refractClr"),"$isC")
switch(y){case C.d:break
case C.i:break
case C.e:this.e_=H.h(this.y.k(0,"refractTxt"),"$isak")
this.bF=H.h(this.y.k(0,"nullRefractTxt"),"$isD")
break
case C.f:this.e0=H.h(this.y.k(0,"refractTxt"),"$isal")
this.bF=H.h(this.y.k(0,"nullRefractTxt"),"$isD")
break}}}y=a2.y
if(y!==C.d){this.bG=H.h(this.y.k(0,"alpha"),"$isV")
switch(y){case C.d:break
case C.i:break
case C.e:this.e1=H.h(this.y.k(0,"alphaTxt"),"$isak")
this.bH=H.h(this.y.k(0,"nullAlphaTxt"),"$isD")
break
case C.f:this.e2=H.h(this.y.k(0,"alphaTxt"),"$isal")
this.bH=H.h(this.y.k(0,"nullAlphaTxt"),"$isD")
break}}this.sfE(H.c([],[A.db]))
this.sht(H.c([],[A.dd]))
this.shQ(H.c([],[A.de]))
this.si0(H.c([],[A.df]))
this.si1(H.c([],[A.dg]))
this.si2(H.c([],[A.dh]))
if(a2.k2){y=a2.z
if(y>0){this.e3=H.e(this.y.k(0,"dirLightCount"),"$isD")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isC")
x=this.y
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isC")
x=this.ct;(x&&C.a).h(x,new A.db(l,k,j))}}y=a2.Q
if(y>0){this.e4=H.e(this.y.k(0,"pntLightCount"),"$isD")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isC")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isC")
x=this.y
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isC")
x=this.y
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isV")
x=this.y
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isV")
x=this.y
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isV")
x=this.cu;(x&&C.a).h(x,new A.dd(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.e5=H.e(this.y.k(0,"spotLightCount"),"$isD")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isC")
x=this.y
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isC")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isC")
x=this.y
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isC")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isV")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isV")
x=this.y
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isV")
x=this.y
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isV")
x=this.y
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isV")
x=this.cv;(x&&C.a).h(x,new A.de(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.e6=H.e(this.y.k(0,"txtDirLightCount"),"$isD")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isC")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isC")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isC")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isC")
x=this.y
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isC")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isD")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isak")
x=this.cw;(x&&C.a).h(x,new A.df(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.e7=H.e(this.y.k(0,"txtPntLightCount"),"$isD")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isC")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isC")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isdc")
x=this.y
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isC")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isD")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isV")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isV")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isV")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isal")
x=this.cz;(x&&C.a).h(x,new A.dg(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.e8=H.e(this.y.k(0,"txtSpotLightCount"),"$isD")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isC")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isC")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isC")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isC")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isC")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isD")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isC")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isV")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isV")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(b,"$isV")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a,"$isV")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a0,"$isV")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a1,"$isak")
x=this.cA;(x&&C.a).h(x,new A.dh(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ag:function(a,b,c){if(c==null||!c.d)C.b.N(b.a,b.d,1)
else{a.eS(c)
C.b.N(b.a,b.d,0)}},
a7:function(a,b,c){C.b.N(b.a,b.d,1)},
m:{
ik:function(a,b){var z,y
z=a.ai
y=new A.ij(b,z)
y.f1(b,z)
y.eZ(a,b)
return y}}},ip:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ao,ai,bt",
i6:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ao+"];\n"
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
ie:function(a){var z
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
i7:function(a){var z
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
io:function(a){var z,y
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
ip:function(a){var z,y
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
ih:function(a){var z
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
it:function(a){var z
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
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.c.ar(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
ia:function(a){var z,y
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
i5:function(a){var z,y
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
i8:function(a){var z,y
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
ib:function(a){var z,y
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
il:function(a){var z,y
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
ig:function(a){var z,y
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
ij:function(a){var z,y
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
ik:function(a){var z,y
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
i9:function(a){var z,y
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
ii:function(a){var z,y
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
im:function(a){var z,y
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
iq:function(a){var z,y,x
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
ir:function(a){var z,y,x
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
is:function(a){var z,y,x
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
ic:function(a){var z
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
i:function(a){return this.ai}},db:{"^":"a;a,b,c"},df:{"^":"a;a,b,c,d,e,f,r,x"},dd:{"^":"a;a,b,c,d,e,f,r"},dg:{"^":"a;a,b,c,d,e,f,r,x,y,z"},de:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dh:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},d2:{"^":"cE;",
f1:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
df:function(a,b){var z,y,x
z=this.a
y=C.b.iK(z,b)
C.b.eT(z,y,a)
C.b.iG(z,y)
if(!H.fK(C.b.eP(z,y,35713))){x=C.b.eO(z,y)
C.b.iN(z,y)
throw H.d(P.t("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
hL:function(){var z,y,x,w,v,u
z=H.c([],[A.dI])
y=this.a
x=H.a6(C.b.bP(y,this.r,35721))
if(typeof x!=="number")return H.x(x)
w=0
for(;w<x;++w){v=C.b.eI(y,this.r,w)
u=C.b.eK(y,this.r,v.name)
C.a.h(z,new A.dI(y,v.name,u))}this.x=new A.h7(z)},
hN:function(){var z,y,x,w,v,u
z=H.c([],[A.a8])
y=this.a
x=H.a6(C.b.bP(y,this.r,35718))
if(typeof x!=="number")return H.x(x)
w=0
for(;w<x;++w){v=C.b.eJ(y,this.r,w)
u=C.b.eQ(y,this.r,v.name)
C.a.h(z,this.iL(v.type,v.size,v.name,u))}this.y=new A.jD(z)},
aF:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.D(z,y,b,c)
else return A.da(z,y,b,a,c)},
fB:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ak(z,y,b,c)
else return A.da(z,y,b,a,c)},
fC:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.al(z,y,b,c)
else return A.da(z,y,b,a,c)},
bp:function(a,b){return new P.ff(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
iL:function(a,b,c,d){switch(a){case 5120:return this.aF(b,c,d)
case 5121:return this.aF(b,c,d)
case 5122:return this.aF(b,c,d)
case 5123:return this.aF(b,c,d)
case 5124:return this.aF(b,c,d)
case 5125:return this.aF(b,c,d)
case 5126:return new A.V(this.a,this.r,c,d)
case 35664:return new A.jy(this.a,this.r,c,d)
case 35665:return new A.C(this.a,this.r,c,d)
case 35666:return new A.jB(this.a,this.r,c,d)
case 35667:return new A.jz(this.a,this.r,c,d)
case 35668:return new A.jA(this.a,this.r,c,d)
case 35669:return new A.jC(this.a,this.r,c,d)
case 35674:return new A.jF(this.a,this.r,c,d)
case 35675:return new A.dc(this.a,this.r,c,d)
case 35676:return new A.ax(this.a,this.r,c,d)
case 35678:return this.fB(b,c,d)
case 35680:return this.fC(b,c,d)
case 35670:throw H.d(this.bp("BOOL",c))
case 35671:throw H.d(this.bp("BOOL_VEC2",c))
case 35672:throw H.d(this.bp("BOOL_VEC3",c))
case 35673:throw H.d(this.bp("BOOL_VEC4",c))
default:throw H.d(P.t("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},c3:{"^":"a;a,b",
i:function(a){return this.b}},a8:{"^":"a;"},jD:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
k:function(a,b){var z=this.j(0,b)
if(z==null)throw H.d(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.J()},
j0:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w)x+=z[w].i(0)+a
return x},
J:function(){return this.j0("\n")}},D:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},jz:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},jA:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},jC:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},jx:{"^":"a8;0e,0f,a,b,c,d",
si3:function(a){this.e=H.i(a,"$isb",[P.k],"$asb")},
i:function(a){return"Uniform1iv: "+H.j(this.c)},
m:{
da:function(a,b,c,d,e){var z=new A.jx(a,b,c,e)
z.f=d
z.si3(P.i8(d,0,!1,P.k))
return z}}},V:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},jy:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},C:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},jB:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},jF:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},dc:{"^":"a8;a,b,c,d",
ak:function(a){var z=new Float32Array(H.b7(H.i(a,"$isb",[P.u],"$asb")))
C.b.eA(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},ax:{"^":"a8;a,b,c,d",
ak:function(a){var z=new Float32Array(H.b7(H.i(a,"$isb",[P.u],"$asb")))
C.b.eB(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},ak:{"^":"a8;a,b,c,d",
eS:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)C.b.N(y,x,0)
else C.b.N(y,x,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},al:{"^":"a8;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
cq:function(a){var z,y
z=a.a>0?1:0
if(a.b>0)z+=2
y=a.c
if(typeof y!=="number")return y.bf()
return(y>0?z+4:z)*2},
bA:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.K(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.K(t+h,s+f,r+g)
z.b=q
p=new V.K(t-h,s-f,r-g)
z.c=p
o=new V.K(y-h,w-f,v-g)
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
j=F.fX(d,e,new F.ll(z,F.cq(z.c),F.cq(z.d),k,l,c),b)
if(j!=null)a.jd(j)},
lO:function(a,b,c){var z={}
z.a=b
z.a=new F.lP()
return F.fX(c,a,new F.lQ(z),null)},
fX:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.m(c,{func:1,ret:-1,args:[F.aT,P.u,P.u]})
if(a<1)return
if(b<1)return
z=F.eA()
y=H.c([],[F.aT])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.dm(null,null,new V.c2(u,0,0,1),null,null,new V.ac(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cq(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.dm(null,null,new V.c2(o,n,m,1),null,null,new V.ac(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cq(d))}}z.d.iw(a+1,b+1,y)
return z},
ll:{"^":"q:13;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cG(z.b,b).cG(z.d.cG(z.c,b),c)
a.sa1(0,new V.ad(y.a,y.b,y.c))
a.sex(y.E(0,Math.sqrt(y.H(y))))
z=1-b
x=1-c
a.sdI(new V.d_(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))}},
lP:{"^":"q:44;",
$2:function(a,b){return 0}},
lQ:{"^":"q:13;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
a.sa1(0,new V.ad(z,y,this.a.a.$2(b,c)))
x=new V.K(z,y,1)
a.sex(x.E(0,Math.sqrt(x.H(x))))
x=1-b
w=1-c
a.sdI(new V.d_(b*c,2+x*c,4+b*w,6+x*w))}},
a7:{"^":"a;0a,0b,0c,0d,0e",
fn:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bX()
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.ei())return
return v.E(0,Math.sqrt(v.H(v)))},
ft:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.I(0,y)
z=new V.K(z.a,z.b,z.c)
v=z.E(0,Math.sqrt(z.H(z)))
z=w.I(0,y)
z=new V.K(z.a,z.b,z.c)
z=v.b0(z.E(0,Math.sqrt(z.H(z))))
return z.E(0,Math.sqrt(z.H(z)))},
cn:function(){if(this.d!=null)return!0
var z=this.fn()
if(z==null){z=this.ft()
if(z==null)return!1}this.d=z
this.a.a.a3()
return!0},
fm:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bX()
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.ei())return
return v.E(0,Math.sqrt(v.H(v)))},
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
if($.n.$2(n,0)){z=r.I(0,u)
z=new V.K(z.a,z.b,z.c)
m=z.E(0,Math.sqrt(z.H(z)))
if(o.a-p.a<0)m=m.P(0)}else{l=(z-q.b)/n
z=r.I(0,u)
y=z.c
if(typeof y!=="number")return y.l()
w=u.a
v=u.b
t=u.c
if(typeof t!=="number")return H.x(t)
t=new V.ad(z.a*l+w,z.b*l+v,y*l+t).I(0,x)
t=new V.K(t.a,t.b,t.c)
m=t.E(0,Math.sqrt(t.H(t)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.P(0)}z=this.d
if(z!=null){k=z.E(0,Math.sqrt(z.H(z)))
z=k.b0(m)
z=z.E(0,Math.sqrt(z.H(z))).b0(k)
m=z.E(0,Math.sqrt(z.H(z)))}return m},
cl:function(){if(this.e!=null)return!0
var z=this.fm()
if(z==null){z=this.fs()
if(z==null)return!1}this.e=z
this.a.a.a3()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z,y
z=this.a
if(z==null||this.b==null||this.c==null)return a+"disposed"
y=a+C.c.ab(J.ab(z.e),0)+", "+C.c.ab(J.ab(this.b.e),0)+", "+C.c.ab(J.ab(this.c.e),0)+" {"
z=this.d
y=z!=null?y+(z.i(0)+", "):y+"-, "
z=this.e
return z!=null?y+(z.i(0)+"}"):y+"-}"},
J:function(){return this.w("")},
m:{
bM:function(a,b,c){var z,y,x
z=new F.a7()
y=a.a
if(y==null)H.p(P.t("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.t("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a3()
return z}}},
bp:{"^":"a;0a,0b",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z=this.a
if(z==null||this.b==null)return a+"disposed"
return a+C.c.ab(J.ab(z.e),0)+", "+C.c.ab(J.ab(this.b.e),0)},
J:function(){return this.w("")}},
bU:{"^":"a;0a",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.c.ab(J.ab(z.e),0)},
J:function(){return this.w("")}},
ez:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
jd:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
a.a.a0()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){v=z[w]
this.a.h(0,v.iI())}this.a.a0()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.a0()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.bU()
if(r.a==null)H.p(P.t("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.D(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.a0()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.a0()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
t=new F.bp()
s=p.a
if(s==null)H.p(P.t("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.p(P.t("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.D(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.a0()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.a0()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.a0()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
l=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,l)
F.bM(p,o,l)}z=this.e
if(!(z==null))z.aq()},
aK:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aK()||!1
if(!this.a.aK())y=!1
z=this.e
if(!(z==null))z.aq()
return y},
iB:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aH()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
if((x&$.$get$bu().a)!==0)++w
if((x&$.$get$bv().a)!==0)++w
if((x&$.$get$b5().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
v=b.gcX(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.u
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dM])
for(r=0,q=0;q<w;++q){p=b.ix(q)
o=p.gcX(p)
C.a.p(s,q,new Z.dM(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].j9(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.p(t,l,m[k]);++l}}r+=o}H.i(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.an(y,34962,j)
C.b.dK(y,34962,new Float32Array(H.b7(t)),35044)
C.b.an(y,34962,null)
i=new Z.dN(new Z.fc(34962,j),s,b)
i.sfR(H.c([],[Z.bO]))
if(this.b.b.length!==0){x=P.k
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.a0()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bO(0,h.length,f))}if(this.c.b.length!==0){x=P.k
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.a0()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.a0()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bO(1,h.length,f))}if(this.d.b.length!==0){x=P.k
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.a0()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.a0()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.a0()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bO(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.w("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.w("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.w("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.w("   "))}return C.a.A(z,"\n")},
a4:function(a){var z=this.e
if(!(z==null))z.D(a)},
a3:function(){return this.a4(null)},
$ismt:1,
m:{
eA:function(){var z,y
z=new F.ez()
y=new F.k2(z)
y.b=!1
y.si4(H.c([],[F.aT]))
z.a=y
y=new F.j6(z)
y.sc6(H.c([],[F.bU]))
z.b=y
y=new F.j5(z)
y.sfT(H.c([],[F.bp]))
z.c=y
y=new F.j4(z)
y.sfH(H.c([],[F.a7]))
z.d=y
z.e=null
return z}}},
j4:{"^":"a;a,0b",
sfH:function(a){this.b=H.i(a,"$isb",[F.a7],"$asb")},
iw:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.i(c,"$isb",[F.aT],"$asb")
z=H.c([],[F.a7])
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
gn:function(a){return this.b.length},
aK:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].cn())x=!1
return x},
cm:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].cl())x=!1
return x},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].w(a))
return C.a.A(z,"\n")},
J:function(){return this.w("")}},
j5:{"^":"a;a,0b",
sfT:function(a){this.b=H.i(a,"$isb",[F.bp],"$asb")},
gn:function(a){return this.b.length},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].w(a+(""+x+". ")))}return C.a.A(z,"\n")},
J:function(){return this.w("")}},
j6:{"^":"a;a,0b",
sc6:function(a){this.b=H.i(a,"$isb",[F.bU],"$asb")},
gn:function(a){return this.b.length},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].w(a))
return C.a.A(z,"\n")},
J:function(){return this.w("")}},
aT:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cq:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.dm(this.cx,x,u,z,y,w,v,a,t)},
iI:function(){return this.cq(null)},
sa1:function(a,b){var z
if(!J.N(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a3()}},
sex:function(a){var z
if(!J.N(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a3()}},
sdI:function(a){var z
if(!J.N(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a3()}},
j9:function(a){var z,y
if(a.u(0,$.$get$aH())){z=this.f
y=[P.u]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aG())){z=this.r
y=[P.u]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aF())){z=this.x
y=[P.u]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aI())){z=this.y
y=[P.u]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.u(0,$.$get$aJ())){z=this.z
y=[P.u]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bu())){z=this.Q
y=[P.u]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bv())){z=this.Q
y=[P.u]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.u(0,$.$get$b5()))return H.c([this.ch],[P.u])
else if(a.u(0,$.$get$aE())){z=this.cx
y=[P.u]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.u])},
cn:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bX()
this.d.Y(0,new F.k9(z))
z=z.a
this.r=z.E(0,Math.sqrt(z.H(z)))
z=this.a
if(z!=null){z.a3()
z=this.a.e
if(!(z==null))z.aq()}return!0},
cl:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bX()
this.d.Y(0,new F.k8(z))
z=z.a
this.x=z.E(0,Math.sqrt(z.H(z)))
z=this.a
if(z!=null){z.a3()
z=this.a.e
if(!(z==null))z.aq()}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z,y,x
z=H.c([],[P.o])
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
C.a.h(z,V.B(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.A(z,", ")
return a+"{"+x+"}"},
J:function(){return this.w("")},
m:{
dm:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aT()
y=new F.k7(z)
y.sc6(H.c([],[F.bU]))
z.b=y
y=new F.k6(z)
x=[F.bp]
y.sfU(H.c([],x))
y.sfV(H.c([],x))
z.c=y
y=new F.k3(z)
x=[F.a7]
y.sfI(H.c([],x))
y.sfJ(H.c([],x))
y.sfK(H.c([],x))
z.d=y
h=$.$get$f9()
z.e=0
y=$.$get$aH()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aG().a)!==0?e:null
z.x=(x&$.$get$aF().a)!==0?b:null
z.y=(x&$.$get$aI().a)!==0?f:null
z.z=(x&$.$get$aJ().a)!==0?g:null
z.Q=(x&$.$get$fa().a)!==0?c:null
z.ch=(x&$.$get$b5().a)!==0?i:0
z.cx=(x&$.$get$aE().a)!==0?a:null
return z}}},
k9:{"^":"q:8;a",
$1:function(a){var z,y
H.e(a,"$isa7")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
k8:{"^":"q:8;a",
$1:function(a){var z,y
H.e(a,"$isa7")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
k2:{"^":"a;a,0b,0c",
si4:function(a){this.c=H.i(a,"$isb",[F.aT],"$asb")},
a0:function(){},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.d(P.t("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a3()
return!0},
gn:function(a){return this.c.length},
aK:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].cn()
return!0},
cm:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].cl()
return!0},
iC:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
if(typeof s!=="number")return s.l()
s=v.E(0,Math.sqrt(u*u+t*t+s*s))
if(!J.N(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.D(null)}}}}return!0},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
this.a0()
z=H.c([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].w(a))
return C.a.A(z,"\n")},
J:function(){return this.w("")}},
k3:{"^":"a;a,0b,0c,0d",
sfI:function(a){this.b=H.i(a,"$isb",[F.a7],"$asb")},
sfJ:function(a){this.c=H.i(a,"$isb",[F.a7],"$asb")},
sfK:function(a){this.d=H.i(a,"$isb",[F.a7],"$asb")},
gn:function(a){return this.b.length+this.c.length+this.d.length},
Y:function(a,b){H.m(b,{func:1,ret:-1,args:[F.a7]})
C.a.Y(this.b,b)
C.a.Y(this.c,new F.k4(this,b))
C.a.Y(this.d,new F.k5(this,b))},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].w(a))
return C.a.A(z,"\n")},
J:function(){return this.w("")}},
k4:{"^":"q:8;a,b",
$1:function(a){H.e(a,"$isa7")
if(!J.N(a.a,this.a))this.b.$1(a)}},
k5:{"^":"q:8;a,b",
$1:function(a){var z
H.e(a,"$isa7")
z=this.a
if(!J.N(a.a,z)&&!J.N(a.b,z))this.b.$1(a)}},
k6:{"^":"a;a,0b,0c",
sfU:function(a){this.b=H.i(a,"$isb",[F.bp],"$asb")},
sfV:function(a){this.c=H.i(a,"$isb",[F.bp],"$asb")},
gn:function(a){return this.b.length+this.c.length},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].w(a))
return C.a.A(z,"\n")},
J:function(){return this.w("")}},
k7:{"^":"a;a,0b",
sc6:function(a){this.b=H.i(a,"$isb",[F.bU],"$asb")},
gn:function(a){return this.b.length},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].w(a))
return C.a.A(z,"\n")},
J:function(){return this.w("")}}}],["","",,O,{"^":"",il:{"^":"ch;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sfp:function(a){this.e=H.i(a,"$isO",[V.aa],"$asO")},
gt:function(){var z=this.dy
if(z==null){z=D.E()
this.dy=z}return z},
a_:[function(a){var z
H.e(a,"$isw")
z=this.dy
if(!(z==null))z.D(a)},function(){return this.a_(null)},"h7","$1","$0","gbm",0,2,0],
hD:[function(a){H.e(a,"$isw")
this.a=null
this.a_(a)},function(){return this.hD(null)},"ku","$1","$0","ghC",0,2,0],
k8:[function(a,b){var z=V.aa
z=new D.bP(a,H.i(b,"$isl",[z],"$asl"),this,[z])
z.b=!0
this.a_(z)},"$2","gh4",8,0,22],
k9:[function(a,b){var z=V.aa
z=new D.bQ(a,H.i(b,"$isl",[z],"$asl"),this,[z])
z.b=!0
this.a_(z)},"$2","gh5",8,0,22],
dc:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=this.dx
y=C.h.a2(z.e.length+3,4)*4
x=C.h.a2(z.f.length+3,4)*4
w=C.h.a2(z.r.length+3,4)*4
v=C.h.a2(z.x.length+3,4)*4
u=C.h.a2(z.y.length+3,4)*4
t=C.h.a2(z.z.length+3,4)*4
s=C.h.a2(this.e.a.length+3,4)*4
z=this.b!=null
r=this.f.c
q=this.r.c
p=this.x.c
o=this.y.c
n=this.z.c
m=this.Q.c
l=this.cx.c
k=this.cy.c
j=this.db.c
i="MaterialLight_"+C.h.i(r.a)+C.h.i(q.a)+C.h.i(p.a)+C.h.i(o.a)+C.h.i(n.a)+C.h.i(m.a)+C.h.i(l.a)+C.h.i(k.a)+C.h.i(j.a)+"_"
i+=z?"1":"0"
i+"0"
i+"00"
i=i+"00_"+s+"_"+y+"_"+x+"_"+w+"_"+v+"_"+u+"_"+t
h=l!==C.d||k!==C.d
g=q!==C.d||p!==C.d||o!==C.d||n!==C.d
f=n===C.d
e=!f||h
d=p!==C.d||o!==C.d||!f||m!==C.d||h
f=m===C.d
c=!f
b=r===C.e||q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e
a=r===C.f||q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f
a0=x+u+v+w+t>0
a1=s>0
a2=d||!f||e
a3=z&&b
a4=$.$get$aH()
if(d){z=$.$get$aG()
a4=new Z.b4(a4.a|z.a)}if(c){z=$.$get$aF()
a4=new Z.b4(a4.a|z.a)}if(b){z=$.$get$aI()
a4=new Z.b4(a4.a|z.a)}if(a){z=$.$get$aJ()
a4=new Z.b4(a4.a|z.a)}if(a1){z=$.$get$aE()
a4=new Z.b4(a4.a|z.a)}return new A.ip(r,q,p,o,n,m,l,k,j,y,x,w,v,u,t,y+x+w+v+u+t,h,h,a0,a2,!0,!1,!1,g,a0,e,d,c,b,a,a1,a3,!1,!1,s,i.charCodeAt(0)==0?i:i,a4)},
V:function(a,b){H.i(a,"$isb",[T.d5],"$asb")
if(b!=null)if(!C.a.ah(a,b)){b.a=a.length
C.a.h(a,b)}},
ad:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.ap(z,z.length,0,[H.r(z,0)]);z.B();){y=z.d
y.toString
x=$.cl
if(x==null){x=new V.K(0,0,1)
$.cl=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.aU(x)}}},
jx:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=this.a
if(z==null){z=this.dc()
y=a.fr.j(0,z.ai)
if(y==null){y=A.ik(z,a.a)
x=y.b
if(x.length===0)H.p(P.t("May not cache a shader with no name."))
if(a.fr.bs(x))H.p(P.t('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.p(0,x,y)}this.a=y
a0.e=null
z=y}w=z.z
v=w.bt
z=a0.e
if(!(z instanceof Z.dN)){a0.e=null
z=null}if(z==null||!z.d.u(0,v)){z=w.r1
if(z)a0.d.aK()
u=w.r2
if(u){t=a0.d
s=t.e
if(!(s==null))++s.d
t.d.cm()
t.a.cm()
t=t.e
if(!(t==null))t.aq()}t=w.ry
if(t){s=a0.d
r=s.e
if(!(r==null))++r.d
s.a.iC()
s=s.e
if(!(s==null))s.aq()}q=a0.d.iB(new Z.ka(a.a),v)
q.aO($.$get$aH()).e=this.a.Q.c
if(z)q.aO($.$get$aG()).e=this.a.cx.c
if(u)q.aO($.$get$aF()).e=this.a.ch.c
if(w.rx)q.aO($.$get$aI()).e=this.a.cy.c
if(t)q.aO($.$get$aJ()).e=this.a.db.c
if(w.x1)q.aO($.$get$aE()).e=this.a.dx.c
a0.e=q}z=T.d5
p=H.c([],[z])
u=this.a
t=a.a
C.b.eD(t,u.r)
u.x.iW()
if(w.fx){u=this.a
s=a.dx.gT()
u=u.dy
u.toString
u.ak(s.ac(0,!0))}if(w.fy){u=this.a
s=a.cx
if(s==null){s=a.db.gT().l(0,a.dx.gT())
a.cx=s}u=u.fr
u.toString
u.ak(s.ac(0,!0))}u=this.a
s=a.ch
if(s==null){s=a.gjv().l(0,a.dx.gT())
a.ch=s}u=u.fy
u.toString
u.ak(s.ac(0,!0))
if(w.x2){u=this.a
s=this.b
u=u.k1
u.toString
u.ak(s.ac(0,!0))}if(w.y1){u=this.a
s=this.c
u=u.k2
u.toString
u.ak(C.u.ac(s,!0))}if(w.y2){u=this.a
s=this.d
u=u.k3
u.toString
u.ak(C.u.ac(s,!0))}if(w.ao>0){o=this.e.a.length
u=this.a.k4
C.b.N(u.a,u.d,o)
for(u=[P.u],n=0;n<o;++n){s=this.a
r=this.e.a
if(n>=r.length)return H.f(r,n)
r=r[n]
s.toString
H.e(r,"$isaa")
s=s.r1
if(n>=s.length)return H.f(s,n)
s=s[n]
m=new Float32Array(H.b7(H.i(r.ac(0,!0),"$isb",u,"$asb")))
C.b.eB(s.a,s.d,!1,m)}}switch(w.a){case C.d:break
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
u.ag(u.rx,u.x1,s)
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
u.a7(u.ry,u.x1,s)
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
u.ag(u.y1,u.ao,s)
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
u.a7(u.y2,u.ao,s)
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
u=u.ai
u.toString
r=s.a
l=s.b
s=s.c
C.b.v(u.a,u.d,r,l,s)
break
case C.e:this.V(p,this.x.d)
u=this.a
s=this.x.d
u.ag(u.bt,u.bu,s)
s=this.a
u=this.x.f
s=s.ai
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break
case C.f:this.V(p,this.x.e)
u=this.a
s=this.x.e
u.a7(u.dP,u.bu,s)
s=this.a
u=this.x.f
s=s.ai
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break}switch(w.d){case C.d:break
case C.i:u=this.a
s=this.y.f
u=u.bv
u.toString
r=s.a
l=s.b
s=s.c
C.b.v(u.a,u.d,r,l,s)
break
case C.e:this.V(p,this.y.d)
u=this.a
s=this.y.d
u.ag(u.dQ,u.bw,s)
s=this.a
u=this.y.f
s=s.bv
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break
case C.f:this.V(p,this.y.e)
u=this.a
s=this.y.e
u.a7(u.dR,u.bw,s)
s=this.a
u=this.y.f
s=s.bv
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break}switch(w.e){case C.d:break
case C.i:u=this.a
s=this.z.f
u=u.bx
u.toString
r=s.a
l=s.b
s=s.c
C.b.v(u.a,u.d,r,l,s)
s=this.a
l=this.z.ch
s=s.bz
C.b.K(s.a,s.d,l)
break
case C.e:this.V(p,this.z.d)
u=this.a
s=this.z.d
u.ag(u.dS,u.by,s)
s=this.a
u=this.z.f
s=s.bx
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bz
C.b.K(u.a,u.d,l)
break
case C.f:this.V(p,this.z.e)
u=this.a
s=this.z.e
u.a7(u.dT,u.by,s)
s=this.a
u=this.z.f
s=s.bx
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bz
C.b.K(u.a,u.d,l)
break}if(w.z>0){o=this.dx.e.length
u=this.a.e3
C.b.N(u.a,u.d,o)
k=a.db.gT()
for(u=this.dx.e,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.ct
if(j>=r.length)return H.f(r,j)
g=r[j]
r=k.aU(h.a)
l=r.a
f=r.b
e=r.c
if(typeof e!=="number")return e.l()
e=r.E(0,Math.sqrt(l*l+f*f+e*e))
f=g.b
l=e.a
r=e.b
e=e.c
C.b.v(f.a,f.d,l,r,e)
e=h.c
r=g.c
C.b.v(r.a,r.d,e.a,e.b,e.c);++j}}if(w.Q>0){o=this.dx.f.length
u=this.a.e4
C.b.N(u.a,u.d,o)
k=a.db.gT()
for(u=this.dx.f,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cu
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.gb6(h)
l=g.b
f=r.gcS(r)
e=r.gcT(r)
r=r.gcU(r)
C.b.v(l.a,l.d,f,e,r)
r=k.bc(h.gb6(h))
e=g.c
C.b.v(e.a,e.d,r.a,r.b,r.c)
r=h.ga8(h)
e=g.d
f=r.gbL()
l=r.gbe()
r=r.gbq()
C.b.v(e.a,e.d,f,l,r)
r=h.gce()
l=g.e
C.b.K(l.a,l.d,r)
r=h.gcf()
l=g.f
C.b.K(l.a,l.d,r)
r=h.gcg()
l=g.r
C.b.K(l.a,l.d,r);++j}}if(w.ch>0){o=this.dx.r.length
u=this.a.e5
C.b.N(u.a,u.d,o)
k=a.db.gT()
for(u=this.dx.r,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cv
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.gb6(h)
l=g.b
f=r.gcS(r)
e=r.gcT(r)
r=r.gcU(r)
C.b.v(l.a,l.d,f,e,r)
r=h.gcr(h).kC()
e=g.c
f=r.gaL(r)
l=r.gaM(r)
r=r.gaN()
C.b.v(e.a,e.d,f,l,r)
r=k.bc(h.gb6(h))
l=g.d
C.b.v(l.a,l.d,r.a,r.b,r.c)
r=h.ga8(h)
l=g.e
f=r.gbL()
e=r.gbe()
r=r.gbq()
C.b.v(l.a,l.d,f,e,r)
r=h.gkz()
e=g.f
C.b.K(e.a,e.d,r)
r=h.gky()
e=g.r
C.b.K(e.a,e.d,r)
r=h.gce()
e=g.x
C.b.K(e.a,e.d,r)
r=h.gcf()
e=g.y
C.b.K(e.a,e.d,r)
r=h.gcg()
e=g.z
C.b.K(e.a,e.d,r);++j}}if(w.cx>0){o=this.dx.x.length
u=this.a.e6
C.b.N(u.a,u.d,o)
k=a.db.gT()
for(u=this.dx.x,s=u.length,r=[z],j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
l=this.a.cw
if(j>=l.length)return H.f(l,j)
g=l[j]
l=h.gb8()
H.i(p,"$isb",r,"$asb")
if(!C.a.ah(p,l)){l.sbk(p.length)
C.a.h(p,l)}l=h.gcr(h)
f=g.d
e=l.gaL(l)
d=l.gaM(l)
l=l.gaN()
C.b.v(f.a,f.d,e,d,l)
l=h.gjO()
d=g.b
e=l.gaL(l)
f=l.gaM(l)
l=l.gaN()
C.b.v(d.a,d.d,e,f,l)
l=h.gb7(h)
f=g.c
e=l.gaL(l)
d=l.gaM(l)
l=l.gaN()
C.b.v(f.a,f.d,e,d,l)
l=k.aU(h.gcr(h))
d=l.a
e=l.b
f=l.c
if(typeof f!=="number")return f.l()
f=l.E(0,Math.sqrt(d*d+e*e+f*f))
e=g.e
d=f.a
l=f.b
f=f.c
C.b.v(e.a,e.d,d,l,f)
f=h.ga8(h)
l=g.f
d=f.gbL()
e=f.gbe()
f=f.gbq()
C.b.v(l.a,l.d,d,e,f)
f=h.gb8()
l=f.gcH(f)
if(!l){l=g.x
C.b.N(l.a,l.d,1)}else{l=g.r
e=f.gfX()
d=l.a
l=l.d
if(!e)C.b.N(d,l,0)
else C.b.N(d,l,f.gbk())
l=g.x
C.b.N(l.a,l.d,0)}++j}}if(w.cy>0){o=this.dx.y.length
u=this.a.e7
C.b.N(u.a,u.d,o)
k=a.db.gT()
for(u=this.dx.y,s=u.length,r=[P.u],l=[z],j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
f=this.a.cz
if(j>=f.length)return H.f(f,j)
g=f[j]
f=h.gb8()
H.i(p,"$isb",l,"$asb")
if(!C.a.ah(p,f)){f.sbk(p.length)
C.a.h(p,f)}c=k.l(0,h.gT())
f=h.gT()
e=$.bs
if(e==null){e=new V.ad(0,0,0)
$.bs=e}e=f.bc(e)
f=g.b
d=e.gcS(e)
b=e.gcT(e)
e=e.gcU(e)
C.b.v(f.a,f.d,d,b,e)
f=$.bs
if(f==null){f=new V.ad(0,0,0)
$.bs=f}f=c.bc(f)
e=g.c
C.b.v(e.a,e.d,f.a,f.b,f.c)
f=c.bI()
e=g.d
m=new Float32Array(H.b7(H.i(new V.aQ(f.a,f.b,f.c,f.e,f.f,f.r,f.y,f.z,f.Q).ac(0,!0),"$isb",r,"$asb")))
C.b.eA(e.a,e.d,!1,m)
e=h.ga8(h)
f=g.e
d=e.gbL()
b=e.gbe()
e=e.gbq()
C.b.v(f.a,f.d,d,b,e)
e=h.gb8()
f=e.gcH(e)
if(!f){f=g.r
C.b.N(f.a,f.d,1)}else{f=g.f
d=e.gcH(e)
b=f.a
f=f.d
if(!d)C.b.N(b,f,0)
else C.b.N(b,f,e.gkA(e))
f=g.r
C.b.N(f.a,f.d,0)}f=h.gce()
e=g.x
C.b.K(e.a,e.d,f)
f=h.gcf()
e=g.y
C.b.K(e.a,e.d,f)
f=h.gcg()
e=g.z
C.b.K(e.a,e.d,f);++j}}if(w.db>0){o=this.dx.z.length
u=this.a.e8
C.b.N(u.a,u.d,o)
k=a.db.gT()
for(u=this.dx.z,s=u.length,z=[z],j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cA
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.gb8()
H.i(p,"$isb",z,"$asb")
if(!C.a.ah(p,r)){r.sbk(p.length)
C.a.h(p,r)}r=h.gb6(h)
l=g.b
f=r.gcS(r)
e=r.gcT(r)
r=r.gcU(r)
C.b.v(l.a,l.d,f,e,r)
r=h.gcr(h)
e=g.c
f=r.gaL(r)
l=r.gaM(r)
r=r.gaN()
C.b.v(e.a,e.d,f,l,r)
r=h.gjO()
l=g.d
f=r.gaL(r)
e=r.gaM(r)
r=r.gaN()
C.b.v(l.a,l.d,f,e,r)
r=h.gb7(h)
e=g.e
f=r.gaL(r)
l=r.gaM(r)
r=r.gaN()
C.b.v(e.a,e.d,f,l,r)
r=k.bc(h.gb6(h))
l=g.f
C.b.v(l.a,l.d,r.a,r.b,r.c)
r=h.gb8()
l=r.gcH(r)
if(!l){r=g.x
C.b.N(r.a,r.d,1)}else{l=g.r
f=r.gfX()
e=l.a
l=l.d
if(!f)C.b.N(e,l,0)
else C.b.N(e,l,r.gbk())
r=g.x
C.b.N(r.a,r.d,0)}r=h.ga8(h)
l=g.y
f=r.gbL()
e=r.gbe()
r=r.gbq()
C.b.v(l.a,l.d,f,e,r)
r=h.gkJ()
e=g.z
C.b.K(e.a,e.d,r)
r=h.gkK()
e=g.Q
C.b.K(e.a,e.d,r)
r=h.gce()
e=g.ch
C.b.K(e.a,e.d,r)
r=h.gcf()
e=g.cx
C.b.K(e.a,e.d,r)
r=h.gcg()
e=g.cy
C.b.K(e.a,e.d,r);++j}}}switch(w.f){case C.d:break
case C.i:break
case C.e:this.V(p,this.Q.d)
z=this.a
u=this.Q.d
z.ag(z.dU,z.bA,u)
break
case C.f:this.V(p,this.Q.e)
z=this.a
u=this.Q.e
z.a7(z.dV,z.bA,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db.gT().bI()
a.Q=u}z=z.id
z.toString
z.ak(u.ac(0,!0))}if(w.dy){this.V(p,this.ch)
z=this.a
u=this.ch
z.a7(z.dW,z.dX,u)
switch(w.r){case C.d:break
case C.i:z=this.a
u=this.cx.f
z=z.bB
z.toString
s=u.a
r=u.b
u=u.c
C.b.v(z.a,z.d,s,r,u)
break
case C.e:this.V(p,this.cx.d)
z=this.a
u=this.cx.d
z.ag(z.dY,z.bC,u)
u=this.a
z=this.cx.f
u=u.bB
u.toString
s=z.a
r=z.b
z=z.c
C.b.v(u.a,u.d,s,r,z)
break
case C.f:this.V(p,this.cx.e)
z=this.a
u=this.cx.e
z.a7(z.dZ,z.bC,u)
u=this.a
z=this.cx.f
u=u.bB
u.toString
s=z.a
r=z.b
z=z.c
C.b.v(u.a,u.d,s,r,z)
break}switch(w.x){case C.d:break
case C.i:z=this.a
u=this.cy.f
z=z.bE
z.toString
s=u.a
r=u.b
u=u.c
C.b.v(z.a,z.d,s,r,u)
u=this.a
r=this.cy.ch
u=u.bD
C.b.K(u.a,u.d,r)
break
case C.e:this.V(p,this.cy.d)
z=this.a
u=this.cy.d
z.ag(z.e_,z.bF,u)
u=this.a
z=this.cy.f
u=u.bE
u.toString
s=z.a
r=z.b
z=z.c
C.b.v(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bD
C.b.K(z.a,z.d,r)
break
case C.f:this.V(p,this.cy.e)
z=this.a
u=this.cy.e
z.a7(z.e0,z.bF,u)
u=this.a
z=this.cy.f
u=u.bE
u.toString
s=z.a
r=z.b
z=z.c
C.b.v(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bD
C.b.K(z.a,z.d,r)
break}}z=w.y
u=z!==C.d
if(u){switch(z){case C.d:break
case C.i:z=this.a
s=this.db.f
z=z.bG
C.b.K(z.a,z.d,s)
break
case C.e:this.V(p,this.db.d)
z=this.a
s=this.db.d
z.ag(z.e1,z.bH,s)
s=this.a
z=this.db.f
s=s.bG
C.b.K(s.a,s.d,z)
break
case C.f:this.V(p,this.db.e)
z=this.a
s=this.db.e
z.a7(z.e2,z.bH,s)
s=this.a
z=this.db.f
s=s.bG
C.b.K(s.a,s.d,z)
break}C.b.cs(t,3042)
C.b.iA(t,770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
C.b.dF(t,33984+z.a)
C.b.aJ(t,3553,z.b)}}z=a0.e
z.ci(a)
z.aS(a)
z.jN(a)
if(u)C.b.iR(t,3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
C.b.dF(t,33984+z.a)
C.b.aJ(t,3553,null)}}z=this.a
z.toString
C.b.eD(t,null)
z.x.iS()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dc().ai},
m:{
ee:function(){var z,y,x
z=new O.il()
z.sfp(O.cL(V.aa))
z.e.bh(z.gh4(),z.gh5())
y=new O.aY(z,"emission")
y.c=C.d
y.f=new V.T(0,0,0)
z.f=y
y=new O.aY(z,"ambient")
y.c=C.d
y.f=new V.T(0,0,0)
z.r=y
y=new O.aY(z,"diffuse")
y.c=C.d
y.f=new V.T(0,0,0)
z.x=y
y=new O.aY(z,"invDiffuse")
y.c=C.d
y.f=new V.T(0,0,0)
z.y=y
y=new O.ir(z,"specular")
y.c=C.d
y.f=new V.T(0,0,0)
y.ch=100
z.z=y
y=new O.io(z,"bump")
y.c=C.d
z.Q=y
z.ch=null
y=new O.aY(z,"reflect")
y.c=C.d
y.f=new V.T(0,0,0)
z.cx=y
y=new O.iq(z,"refract")
y.c=C.d
y.f=new V.T(0,0,0)
y.ch=1
z.cy=y
y=new O.im(z,"alpha")
y.c=C.d
y.f=1
z.db=y
y=new D.hZ()
y.bi(D.a1)
y.sfb(H.c([],[D.c5]))
y.sfd(H.c([],[D.ep]))
y.sfe(H.c([],[D.eB]))
y.sff(H.c([],[D.eH]))
y.sfg(H.c([],[D.eI]))
y.sfh(H.c([],[D.eJ]))
y.Q=null
y.ch=null
y.bR(y.gh3(),y.ghn(),y.ghp())
z.dx=y
x=y.Q
if(x==null){x=D.E()
y.Q=x
y=x}else y=x
y.h(0,z.ghC())
y=z.dx
x=y.ch
if(x==null){x=D.E()
y.ch=x
y=x}else y=x
y.h(0,z.gbm())
z.dy=null
return z}}},im:{"^":"cU;0f,a,b,0c,0d,0e",
hH:function(a){var z,y
z=this.f
if(!$.n.$2(z,a)){y=this.f
this.f=a
z=new D.z(this.b,y,a,this,[P.u])
z.b=!0
this.a.a_(z)}},
aG:function(){this.cZ()
this.hH(1)}},cU:{"^":"a;",
a_:[function(a){this.a.a_(H.e(a,"$isw"))},function(){return this.a_(null)},"h7","$1","$0","gbm",0,2,0],
aG:["cZ",function(){}],
hJ:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gt().Z(0,this.gbm())
y=this.d
this.d=a
if(a!=null)a.gt().h(0,this.gbm())
z=new D.z(this.b+".texture2D",y,this.d,this,[T.eG])
z.b=!0
this.a.a_(z)}},
hK:function(a){},
sew:function(a){var z=this.c
if(z!==C.e){if(z===C.d)this.aG()
this.c=C.e
this.hK(null)
z=this.a
z.a=null
z.a_(null)}this.hJ(a)}},io:{"^":"cU;a,b,0c,0d,0e"},aY:{"^":"cU;0f,a,b,0c,0d,0e",
dw:function(a){var z,y
if(!J.N(this.f,a)){z=this.f
this.f=a
y=new D.z(this.b+".color",z,a,this,[V.T])
y.b=!0
this.a.a_(y)}},
aG:["bT",function(){this.cZ()
this.dw(new V.T(1,1,1))}],
sa8:function(a,b){var z
if(this.c===C.d){this.c=C.i
this.aG()
z=this.a
z.a=null
z.a_(null)}this.dw(b)}},iq:{"^":"aY;0ch,0f,a,b,0c,0d,0e",
hI:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.z(this.b+".refraction",y,a,this,[P.u])
z.b=!0
this.a.a_(z)}},
aG:function(){this.bT()
this.hI(1)}},ir:{"^":"aY;0ch,0f,a,b,0c,0d,0e",
c9:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.z(this.b+".shininess",y,a,this,[P.u])
z.b=!0
this.a.a_(z)}},
aG:function(){this.bT()
this.c9(100)}},ch:{"^":"a;"}}],["","",,T,{"^":"",d5:{"^":"cE;"},eG:{"^":"d5;"},jl:{"^":"eG;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gt:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z}},jm:{"^":"a;a,0b,0c,0d,0e",
jb:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
C.b.aJ(z,3553,y)
C.b.bM(z,3553,10242,10497)
C.b.bM(z,3553,10243,10497)
C.b.bM(z,3553,10241,9987)
C.b.bM(z,3553,10240,9729)
C.b.aJ(z,3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.jl()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.a4
W.Y(x,"load",H.m(new T.jn(this,w,x,!1,y,!1,!0),{func:1,ret:-1,args:[z]}),!1,z)
return w},
ja:function(a,b,c){return this.jb(a,!1,b,!1,c)},
hE:function(a,b,c){var z,y,x,w
b=V.dE(b,2)
z=V.dE(a.width,2)
y=V.dE(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cI(null,null)
x.width=z
x.height=y
w=H.e(C.n.eL(x,"2d"),"$iscJ")
w.imageSmoothingEnabled=!1;(w&&C.x).iU(w,a,0,0,x.width,x.height)
return P.lG(C.x.fP(w,0,0,x.width,x.height))}}},jn:{"^":"q:12;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.hE(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
C.b.aJ(y,3553,this.e)
C.b.ju(y,37440,this.f?1:0)
C.b.jF(y,3553,0,6408,6408,5121,w)
if(this.r)C.b.eH(y,3553)
C.b.aJ(y,3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.iV()}++x.e}}}],["","",,V,{"^":"",h6:{"^":"a;",
b2:function(a){return!0},
i:function(a){return"all"},
$isbq:1},bq:{"^":"a;"},ed:{"^":"a;0a",
sav:function(a){this.a=H.i(a,"$isb",[V.bq],"$asb")},
b2:["eX",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)if(z[x].b2(a))return!0
return!1}],
i:["cY",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbq:1},br:{"^":"ed;0a",
b2:function(a){return!this.eX(a)},
i:function(a){return"!["+this.cY(0)+"]"}},j1:{"^":"a;0a",
shG:function(a){this.a=H.i(a,"$isF",[P.k,P.Q],"$asF")},
f0:function(a){var z,y
if(a.a.length<=0)throw H.d(P.t("May not create a SetMatcher with zero characters."))
z=new H.aP(0,0,[P.k,P.Q])
for(y=new H.eb(a,a.gn(a),0,[H.af(a,"U",0)]);y.B();)z.p(0,y.d,!0)
this.shG(z)},
b2:function(a){return this.a.bs(a)},
i:function(a){return P.bW(this.a.gcF(),0,null)},
$isbq:1,
m:{
a5:function(a){var z=new V.j1()
z.f0(a)
return z}}},d3:{"^":"a;a,b,0c,0d",
si_:function(a){this.c=H.i(a,"$isb",[V.d8],"$asb")},
A:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.d8(this.a.L(0,b))
w.sav(H.c([],[V.bq]))
w.c=!1
C.a.h(this.c,w)
return w},
iZ:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.b2(a))return w}return},
i:function(a){return this.b}},eN:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fW(this.b,"\n","\\n")
y=H.fW(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},d7:{"^":"a;a,b,0c",
shy:function(a){var z=P.o
this.c=H.i(a,"$isF",[z,z],"$asF")},
i:function(a){return this.b}},js:{"^":"a;0a,0b,0c",
shR:function(a){this.a=H.i(a,"$isF",[P.o,V.d3],"$asF")},
shW:function(a){this.b=H.i(a,"$isF",[P.o,V.d7],"$asF")},
L:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.d3(this,b)
z.si_(H.c([],[V.d8]))
z.d=null
this.a.p(0,b,z)}return z},
ba:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.d7(this,a)
y=P.o
z.shy(new H.aP(0,0,[y,y]))
this.b.p(0,a,z)}return z},
jL:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eN])
y=this.c
x=[P.k]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.F(a,t)
r=y.iZ(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.bW(w,0,null)
throw H.d(P.t("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.bW(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eN(o==null?p.b:o,q,t)}++t}}}},d8:{"^":"ed;b,0c,0a",
i:function(a){return this.b.b+": "+this.cY(0)}}}],["","",,X,{"^":"",dP:{"^":"a;",$isaB:1},hJ:{"^":"eE;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z}},iB:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
aW:[function(a){var z
H.e(a,"$isw")
z=this.f
if(!(z==null))z.D(a)},function(){return this.aW(null)},"jX","$1","$0","gd2",0,2,0],
saR:function(a){var z,y
if(!J.N(this.b,a)){z=this.b
if(z!=null)z.gt().Z(0,this.gd2())
y=this.b
this.b=a
if(a!=null)a.gt().h(0,this.gd2())
z=new D.z("mover",y,this.b,this,[U.a2])
z.b=!0
this.aW(z)}},
$isaB:1,
$isdP:1},eE:{"^":"a;"}}],["","",,V,{"^":"",
m7:function(a){P.jr(C.N,new V.m8(a))},
he:{"^":"a;a,b,0c,0d",
sfu:function(a){this.d=H.i(a,"$isb",[W.cK],"$asb")},
iu:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
H.m(c,{func:1,ret:-1,args:[P.Q]})
if(this.c==null)return
z=this.d.length
y=P.dk().gbK().j(0,this.a)
if(y==null||y.length<=z){x=!0
w=!1}else{if(z>=y.length)return H.f(y,z)
w=y[z]==="1"
x=!1}c.$1(w)
v=document
u=v.createElement("label")
t=u.style
t.whiteSpace="nowrap"
J.dH(this.c).h(0,u)
s=W.hO("checkbox")
s.checked=w
t=W.a4
W.Y(s,"change",H.m(new V.hf(this,c,s,z),{func:1,ret:-1,args:[t]}),!1,t)
C.B.W(u,s)
r=v.createElement("span")
r.textContent=b
C.B.W(u,r)
J.dH(this.c).h(0,v.createElement("br"))
C.a.h(this.d,s)
if(x)this.dD(z,w)},
dD:function(a,b){var z,y,x,w,v,u,t
z=this.a
y=P.dk().gbK().j(0,z)
if(y==null)y=""
x=y.length
if(x<a)y=C.c.jm(y,a-x+1,"0")
w=a>0?C.c.q(y,0,a):""
w+=b?"1":"0"
x=a+1
if(x<y.length)w+=C.c.ar(y,x)
v=P.dk()
x=P.o
u=P.i5(v.gbK(),x,x)
u.p(0,z,w)
t=v.es(u)
z=window.history
x=t.i(0)
z.toString;(z&&C.O).hA(z,new P.kQ([],[]).cQ(""),"",x)}},
hf:{"^":"q:12;a,b,c,d",
$1:function(a){var z=this.c
this.b.$1(z.checked)
this.a.dD(this.d,z.checked)}},
m8:{"^":"q:48;a",
$1:function(a){H.e(a,"$isb1")
P.dF(C.j.ez(this.a.gj1(),2)+" fps")}},
j7:{"^":"a;0a,0b",
f2:function(a,b){var z,y,x,w,v,u,t
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
t=W.a4
W.Y(z,"scroll",H.m(new V.ja(x),{func:1,ret:-1,args:[t]}),!1,t)},
dG:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.i(a,"$isb",[P.o],"$asb")
this.hM()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.jL(C.a.j6(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
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
if(H.fV(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=H.G(r[1])
q.textContent=H.G(r[0])
C.l.W(y,q)}else{p=P.cp(C.a_,s,C.m,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.j(p)
q.textContent=s
C.l.W(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.l.W(y,t)
break}}C.l.W(this.a,y)},
iv:function(a){var z,y,x,w,v,u,t
H.i(a,"$isb",[P.o],"$asb")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
C.l.W(this.a,y)
w=C.a4.fS(y,-1)
x=H.e((w&&C.G).dk(w,-1),"$iscg").style
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
t=H.e(C.G.dk(w,-1),"$iscg")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.a3).W(t,u)}},
hM:function(){var z,y,x,w
if(this.b!=null)return
z=new V.js()
y=P.o
z.shR(new H.aP(0,0,[y,V.d3]))
z.shW(new H.aP(0,0,[y,V.d7]))
z.c=null
z.c=z.L(0,"Start")
y=z.L(0,"Start").A(0,"Bold")
x=V.a5(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Bold").A(0,"Bold")
x=new V.br()
w=[V.bq]
x.sav(H.c([],w))
C.a.h(y.a,x)
y=V.a5(new H.a_("*"))
C.a.h(x.a,y)
y=z.L(0,"Bold").A(0,"BoldEnd")
x=V.a5(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").A(0,"Italic")
x=V.a5(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Italic").A(0,"Italic")
x=new V.br()
x.sav(H.c([],w))
C.a.h(y.a,x)
y=V.a5(new H.a_("_"))
C.a.h(x.a,y)
y=z.L(0,"Italic").A(0,"ItalicEnd")
x=V.a5(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").A(0,"Code")
x=V.a5(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Code").A(0,"Code")
x=new V.br()
x.sav(H.c([],w))
C.a.h(y.a,x)
y=V.a5(new H.a_("`"))
C.a.h(x.a,y)
y=z.L(0,"Code").A(0,"CodeEnd")
x=V.a5(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").A(0,"LinkHead")
x=V.a5(new H.a_("["))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"LinkHead").A(0,"LinkTail")
x=V.a5(new H.a_("|"))
C.a.h(y.a,x)
x=z.L(0,"LinkHead").A(0,"LinkEnd")
y=V.a5(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkHead").A(0,"LinkHead")
y=new V.br()
y.sav(H.c([],w))
C.a.h(x.a,y)
x=V.a5(new H.a_("|]"))
C.a.h(y.a,x)
x=z.L(0,"LinkTail").A(0,"LinkEnd")
y=V.a5(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkTail").A(0,"LinkTail")
y=new V.br()
y.sav(H.c([],w))
C.a.h(x.a,y)
x=V.a5(new H.a_("|]"))
C.a.h(y.a,x)
C.a.h(z.L(0,"Start").A(0,"Other").a,new V.h6())
x=z.L(0,"Other").A(0,"Other")
y=new V.br()
y.sav(H.c([],w))
C.a.h(x.a,y)
x=V.a5(new H.a_("*_`["))
C.a.h(y.a,x)
x=z.L(0,"BoldEnd")
x.d=x.a.ba("Bold")
x=z.L(0,"ItalicEnd")
x.d=x.a.ba("Italic")
x=z.L(0,"CodeEnd")
x.d=x.a.ba("Code")
x=z.L(0,"LinkEnd")
x.d=x.a.ba("Link")
x=z.L(0,"Other")
x.d=x.a.ba("Other")
this.b=z},
m:{
j8:function(a,b){var z=new V.j7()
z.f2(a,!0)
return z}}},
ja:{"^":"q:12;a",
$1:function(a){P.eL(C.t,new V.j9(this.a))}},
j9:{"^":"q:2;a",
$0:function(){var z,y,x
z=C.j.aj(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,X,{"^":"",
lH:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=O.ee()
y=z.dx
x=U.c4(V.cX(1,-3,-1,null))
y.h(0,D.cN(new V.T(0.4,0.4,1),x))
y=z.dx
x=U.c4(V.cX(0,1,0,null))
y.h(0,D.cN(new V.T(0,0.2,0.1),x))
y=z.r
y.sa8(0,new V.T(0.2,0.2,0.2))
y=z.x
y.sa8(0,new V.T(0.7,0.7,0.7))
z.z.sa8(0,new V.T(1,1,1))
y=z.z
if(y.c===C.d){y.c=C.i
y.bT()
y.c9(100)
x=y.a
x.a=null
x.a_(null)}y.c9(10)
w=E.c6(null,!0,null,"",null,null)
w.scP(z)
v=F.eA()
F.bA(v,null,null,1,1,1,0,0,1)
F.bA(v,null,null,1,1,0,1,0,3)
F.bA(v,null,null,1,1,0,0,1,2)
F.bA(v,null,null,1,1,-1,0,0,0)
F.bA(v,null,null,1,1,0,-1,0,0)
F.bA(v,null,null,1,1,0,0,-1,3)
v.aK()
for(y=[U.a2],x=[P.u],u=-60;u<=60;u+=12)for(t=u/10,s=-60;s<=60;s+=12){r=E.c6(null,!0,null,"",null,null)
r.sbS(0,v)
q=s/10
p=new U.ex()
p.a=0
p.b=0
p.c=0
p.d=0
p.e=0
p.f=0
p.r=0
p.seF(t)
p.seo(q)
p.seu(0)
o=p.d
if(!$.n.$2(o,t)){n=p.d
p.d=t
o=new D.z("deltaYaw",n,t,p,x)
o.b=!0
m=p.y
if(!(m==null))m.D(o)}o=p.e
if(!$.n.$2(o,q)){n=p.e
p.e=q
q=new D.z("deltaPitch",n,q,p,x)
q.b=!0
o=p.y
if(!(o==null))o.D(q)}q=p.f
if(!$.n.$2(q,0.32)){n=p.f
p.f=0.32
q=new D.z("deltaRoll",n,0.32,p,x)
q.b=!0
o=p.y
if(!(o==null))o.D(q)}q=new U.cM()
q.sT(new V.aa(1,0,0,u,0,1,0,0,0,0,1,s,0,0,0,1))
r.saR(U.e3(H.c([p,q],y)))
q=w.y
p=H.r(q,0)
H.v(r,p)
o=[p]
if(q.c5(H.c([r],o))){m=q.a
l=m.length
C.a.h(m,r)
p=H.i(H.c([r],o),"$isl",[p],"$asl")
q=q.c
if(q!=null)q.$2(l,p)}}return w},
fR:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=V.j8("Test 038",!0)
y=W.cI(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.l.W(z.a,y)
x=[P.o]
z.dG(H.c(["A test of basic 3D movement around a room similar to a first person view. ","A and D (left and right arrow keys) strifes left and right. ","W and S (up and down arrow keys) moves forward and backward. ","Q and E moves up and down. Mouse looks around with left mouse button pressed."],x))
z.iv(H.c(["options"],x))
z.dG(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=C.y.cV(x,"testCanvas")
if(w==null)H.p(P.t("Failed to find an element with the identifier, testCanvas."))
v=E.jp(w,!0,!0,!0,!1)
u=E.c6(null,!0,null,"",null,null)
z=u.y
t=v.f.ja("../resources/Grass.png",!0,!0)
s=U.c4(V.ei(0,-3,0).l(0,V.av(1000,0,0,0,0,1,0,0,0,0,1000,0,0,0,0,1)).l(0,V.cW(-1.5707963267948966)))
r=O.ee()
q=new V.aQ(1000,0,0,0,1000,0,0,0,1)
if(!J.N(r.b,q)){p=r.b
o=p==null&&!0
if(o)r.a=null
r.b=q
p=new D.z("texture2DMatrix",p,q,r,[V.aQ])
p.b=!0
r.a_(p)}r.dx.h(0,D.cN(new V.T(1,1,1),U.c4(V.cX(1,-3,-1,null))))
p=r.r
p.sa8(0,new V.T(0.5,0.5,0.5))
p=r.x
p.sa8(0,new V.T(0.5,0.5,0.5))
r.r.sew(t)
r.x.sew(t)
p=E.c6(null,!0,null,"",null,null)
p.sbS(0,F.lO(20,null,20))
p.saR(s)
p.scP(r)
z.h(0,p)
u.y.h(0,X.lH(v))
p=v.r
n=new U.jT()
z=X.bn()
z.h(0,new X.P(39,new X.Z(!1,!1,!1)))
z.h(0,new X.P(68,new X.Z(!1,!1,!1)))
o=n.ghe()
z.gaP().h(0,o)
n.a=z
z=X.bn()
z.h(0,new X.P(37,new X.Z(!1,!1,!1)))
z.h(0,new X.P(65,new X.Z(!1,!1,!1)))
z.gaP().h(0,o)
n.b=z
z=X.bn()
z.h(0,new X.P(81,new X.Z(!1,!1,!1)))
z.gaP().h(0,o)
n.c=z
z=X.bn()
z.h(0,new X.P(69,new X.Z(!1,!1,!1)))
z.gaP().h(0,o)
n.d=z
z=X.bn()
z.h(0,new X.P(40,new X.Z(!1,!1,!1)))
z.h(0,new X.P(83,new X.Z(!1,!1,!1)))
z.gaP().h(0,o)
n.e=z
z=X.bn()
z.h(0,new X.P(38,new X.Z(!1,!1,!1)))
z.h(0,new X.P(87,new X.Z(!1,!1,!1)))
z.gaP().h(0,o)
n.f=z
z=U.bJ()
z.sb3(30)
z.sax(0)
o=n.gaC()
z.gt().h(0,o)
n.r=z
z=U.bJ()
z.sb3(30)
z.sax(0)
z.gt().h(0,o)
n.x=z
z=U.bJ()
z.sb3(30)
z.sax(0)
z.gt().h(0,o)
n.y=z
n.z=null
n.Q=null
n.ch=60
n.cx=15
n.cy=0
n.db=null
n.dx=null
n.sfz(null)
n.a.am(p)
n.b.am(p)
n.c.am(p)
n.d.am(p)
n.e.am(p)
n.f.am(p)
z=v.r
m=new U.jS()
p=U.bJ()
p.scR(0,!0)
p.scI(6.283185307179586)
p.scJ(0)
p.sa1(0,0)
p.sb3(100)
p.sU(0)
p.sax(0.5)
m.b=p
o=m.gaC()
p.gt().h(0,o)
p=U.bJ()
p.scR(0,!0)
p.scI(6.283185307179586)
p.scJ(0)
p.sa1(0,0)
p.sb3(100)
p.sU(0)
p.sax(0.5)
m.c=p
p.gt().h(0,o)
m.d=null
m.e=!1
m.f=!1
m.r=!1
m.x=2.5
m.y=2.5
m.z=2
m.Q=4
m.cx=!1
m.ch=!1
m.cy=0
m.db=0
m.dx=null
m.dy=0
m.fr=null
m.fx=null
l=new X.Z(!1,!1,!1)
k=m.d
m.d=l
p=new D.z("modifiers",k,l,m,[X.Z])
p.b=!0
m.M(p)
p=m.f
if(p!==!1){m.f=!1
p=new D.z("invertX",p,!1,m,[P.Q])
p.b=!0
m.M(p)}p=m.r
if(p!==!1){m.r=!1
p=new D.z("invertY",p,!1,m,[P.Q])
p.b=!0
m.M(p)}m.am(z)
m.b.scI(1.5707963267948966)
m.b.scJ(-1.5707963267948966)
m.b.sax(1)
m.c.sax(1)
m.b.scR(0,!1)
m.gt().h(0,new X.m_(n,m))
j=U.e3(H.c([n,m],[U.a2]))
z=new M.hB()
z.sfv(0,O.cL(E.aq))
z.d.bh(z.gh8(),z.gh9())
z.e=null
z.f=null
z.r=null
z.x=null
i=new X.iB()
i.c=1.0471975511965976
i.d=0.1
i.e=2000
i.saR(null)
p=i.c
if(!$.n.$2(p,1.0471975511965976)){k=i.c
i.c=1.0471975511965976
p=new D.z("fov",k,1.0471975511965976,i,[P.u])
p.b=!0
i.aW(p)}p=i.d
if(!$.n.$2(p,0.1)){k=i.d
i.d=0.1
p=new D.z("near",k,0.1,i,[P.u])
p.b=!0
i.aW(p)}p=i.e
if(!$.n.$2(p,2000)){k=i.e
i.e=2000
p=new D.z("far",k,2000,i,[P.u])
p.b=!0
i.aW(p)}p=z.a
if(p!==i){if(p!=null)p.gt().Z(0,z.gaD())
k=z.a
z.a=i
i.gt().h(0,z.gaD())
p=new D.z("camera",k,z.a,z,[X.dP])
p.b=!0
z.aV(p)}h=new X.hJ()
p=new V.c2(0,0,0,1)
h.a=p
h.b=!0
h.c=2000
h.d=!0
h.e=0
h.f=!1
p=$.ew
if(p==null){p=V.ev(0,0,1,1)
$.ew=p}h.r=p
p=z.b
if(p!==h){if(p!=null)p.gt().Z(0,z.gaD())
k=z.b
z.b=h
h.gt().h(0,z.gaD())
p=new D.z("target",k,z.b,z,[X.eE])
p.b=!0
z.aV(p)}z.d.h(0,u)
z.a.saR(j)
p=v.d
if(p!==z){if(p!=null)p.gt().Z(0,v.gd0())
v.d=z
z.gt().h(0,v.gd0())
v.f5()}z=new V.he("options",!0)
x=C.y.cV(x,"options")
z.c=x
if(x==null)H.p("Failed to find options for CheckGroup")
z.sfu(H.c([],[W.cK]))
z.iu(0,"Mouse Locking",new X.m0(v),!1)
V.m7(v)},
m_:{"^":"q:7;a,b",
$1:function(a){var z,y,x,w,v
H.e(a,"$isw")
z=this.a
y=-this.b.c.d
x=Math.cos(y)
w=Math.sin(y)
y=new V.aQ(x,0,-w,0,1,0,w,0,x)
if(!J.N(z.z,y)){v=z.z
z.z=y
z.Q=y.bI()
y=new D.z("velocityRotation",v,z.z,z,[V.aQ])
y.b=!0
z.M(y)}}},
m0:{"^":"q:49;a",
$1:function(a){this.a.r.r=a}}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e8.prototype
return J.e7.prototype}if(typeof a=="string")return J.cb.prototype
if(a==null)return J.e9.prototype
if(typeof a=="boolean")return J.hS.prototype
if(a.constructor==Array)return J.aX.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cu(a)}
J.bd=function(a){if(typeof a=="string")return J.cb.prototype
if(a==null)return a
if(a.constructor==Array)return J.aX.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cu(a)}
J.fM=function(a){if(a==null)return a
if(a.constructor==Array)return J.aX.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cu(a)}
J.lM=function(a){if(typeof a=="number")return J.ca.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ck.prototype
return a}
J.dB=function(a){if(typeof a=="string")return J.cb.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ck.prototype
return a}
J.ay=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cu(a)}
J.N=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).u(a,b)}
J.fZ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lM(a).O(a,b)}
J.h_=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lY(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bd(a).j(a,b)}
J.h0=function(a,b,c,d){return J.ay(a).fl(a,b,c,d)}
J.h1=function(a,b){return J.dB(a).F(a,b)}
J.cA=function(a,b,c){return J.ay(a).hz(a,b,c)}
J.dG=function(a,b){return J.ay(a).W(a,b)}
J.h2=function(a,b){return J.dB(a).X(a,b)}
J.cB=function(a,b,c){return J.bd(a).iH(a,b,c)}
J.cC=function(a,b){return J.fM(a).a9(a,b)}
J.h3=function(a,b,c,d){return J.ay(a).iY(a,b,c,d)}
J.dH=function(a){return J.ay(a).gco(a)}
J.bF=function(a){return J.L(a).gR(a)}
J.bG=function(a){return J.fM(a).gS(a)}
J.az=function(a){return J.bd(a).gn(a)}
J.h4=function(a,b){return J.ay(a).jy(a,b)}
J.h5=function(a,b){return J.ay(a).sjM(a,b)}
J.ab=function(a){return J.L(a).i(a)}
I.ag=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.w=W.ha.prototype
C.n=W.cH.prototype
C.x=W.cJ.prototype
C.l=W.e_.prototype
C.O=W.hK.prototype
C.y=W.hM.prototype
C.P=J.H.prototype
C.a=J.aX.prototype
C.Q=J.e7.prototype
C.h=J.e8.prototype
C.u=J.e9.prototype
C.j=J.ca.prototype
C.c=J.cb.prototype
C.X=J.bR.prototype
C.B=W.hY.prototype
C.a2=W.iy.prototype
C.F=J.iC.prototype
C.b=P.d1.prototype
C.a3=W.cg.prototype
C.a4=W.ji.prototype
C.G=W.jj.prototype
C.v=J.ck.prototype
C.H=W.bw.prototype
C.I=W.kd.prototype
C.K=new P.h9(!1)
C.J=new P.h8(C.K)
C.L=new P.iA()
C.M=new P.k0()
C.k=new P.kK()
C.d=new A.c3(0,"ColorSourceType.None")
C.i=new A.c3(1,"ColorSourceType.Solid")
C.e=new A.c3(2,"ColorSourceType.Texture2D")
C.f=new A.c3(3,"ColorSourceType.TextureCube")
C.t=new P.bj(0)
C.N=new P.bj(5e6)
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
C.z=function(hooks) { return hooks; }

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
C.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.C=H.c(I.ag([127,2047,65535,1114111]),[P.k])
C.o=H.c(I.ag([0,0,32776,33792,1,10240,0,0]),[P.k])
C.p=H.c(I.ag([0,0,65490,45055,65535,34815,65534,18431]),[P.k])
C.q=H.c(I.ag([0,0,26624,1023,65534,2047,65534,2047]),[P.k])
C.Z=H.c(I.ag([0,0,32722,12287,65534,34815,65534,18431]),[P.k])
C.a_=H.c(I.ag([0,0,65498,45055,65535,34815,65534,18431]),[P.k])
C.r=H.c(I.ag([0,0,24576,1023,65534,34815,65534,18431]),[P.k])
C.D=H.c(I.ag([0,0,32754,11263,65534,34815,65534,18431]),[P.k])
C.a0=H.c(I.ag([0,0,32722,12287,65535,34815,65534,18431]),[P.k])
C.E=H.c(I.ag([0,0,65490,12287,65535,34815,65534,18431]),[P.k])
C.Y=H.c(I.ag([]),[P.o])
C.a1=new H.ho(0,{},C.Y,[P.o,P.o])
C.m=new P.jU(!1)
$.at=0
$.bh=null
$.dK=null
$.dt=!1
$.fO=null
$.fH=null
$.fU=null
$.ct=null
$.cw=null
$.dC=null
$.b8=null
$.bB=null
$.bC=null
$.du=!1
$.M=C.k
$.dY=null
$.dX=null
$.dW=null
$.dV=null
$.n=V.is()
$.ef=null
$.ej=null
$.eq=null
$.bs=null
$.ew=null
$.f4=null
$.f7=null
$.f6=null
$.cl=null
$.f5=null
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
I.$lazy(y,x,w)}})(["dU","$get$dU",function(){return H.fN("_$dart_dartClosure")},"cQ","$get$cQ",function(){return H.fN("_$dart_js")},"eP","$get$eP",function(){return H.aw(H.ci({
toString:function(){return"$receiver$"}}))},"eQ","$get$eQ",function(){return H.aw(H.ci({$method$:null,
toString:function(){return"$receiver$"}}))},"eR","$get$eR",function(){return H.aw(H.ci(null))},"eS","$get$eS",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eW","$get$eW",function(){return H.aw(H.ci(void 0))},"eX","$get$eX",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eU","$get$eU",function(){return H.aw(H.eV(null))},"eT","$get$eT",function(){return H.aw(function(){try{null.$method$}catch(z){return z.message}}())},"eZ","$get$eZ",function(){return H.aw(H.eV(void 0))},"eY","$get$eY",function(){return H.aw(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dp","$get$dp",function(){return P.ke()},"bD","$get$bD",function(){return[]},"f3","$get$f3",function(){return P.jY()},"fe","$get$fe",function(){return H.iw(H.b7(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.k])))},"fw","$get$fw",function(){return P.iT("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fD","$get$fD",function(){return P.ln()},"dT","$get$dT",function(){return{}},"fb","$get$fb",function(){return Z.am(0)},"f9","$get$f9",function(){return Z.am(511)},"aH","$get$aH",function(){return Z.am(1)},"aG","$get$aG",function(){return Z.am(2)},"aF","$get$aF",function(){return Z.am(4)},"aI","$get$aI",function(){return Z.am(8)},"aJ","$get$aJ",function(){return Z.am(16)},"bu","$get$bu",function(){return Z.am(32)},"bv","$get$bv",function(){return Z.am(64)},"fa","$get$fa",function(){return Z.am(96)},"b5","$get$b5",function(){return Z.am(128)},"aE","$get$aE",function(){return Z.am(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.w]},{func:1,ret:-1,args:[D.w]},{func:1,ret:P.A},{func:1,ret:-1},{func:1,ret:-1,args:[W.ar]},{func:1,ret:P.A,args:[,,]},{func:1,ret:-1,args:[P.k,[P.l,E.aq]]},{func:1,ret:P.A,args:[D.w]},{func:1,ret:P.A,args:[F.a7]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.a4]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.A,args:[W.a4]},{func:1,ret:P.A,args:[F.aT,P.u,P.u]},{func:1,ret:P.o,args:[P.k]},{func:1,args:[,]},{func:1,ret:-1,args:[P.k,[P.l,X.P]]},{func:1,ret:P.A,args:[,]},{func:1,ret:-1,args:[W.bo]},{func:1,ret:-1,args:[P.k,[P.l,D.a1]]},{func:1,ret:P.u},{func:1,ret:-1,args:[P.k,[P.l,U.a2]]},{func:1,ret:-1,args:[P.k,[P.l,V.aa]]},{func:1,args:[,P.o]},{func:1,ret:P.Q,args:[W.J]},{func:1,ret:W.W,args:[W.J]},{func:1,ret:-1,args:[P.o,P.k]},{func:1,args:[P.o]},{func:1,ret:P.A,args:[,],opt:[,]},{func:1,ret:P.A,args:[P.ah]},{func:1,ret:P.A,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:P.Q,args:[[P.l,X.P]]},{func:1,ret:P.A,args:[P.o,,]},{func:1,ret:P.Q,args:[P.u,P.u]},{func:1,ret:-1,args:[P.o],opt:[,]},{func:1,ret:P.A,args:[{func:1,ret:-1}]},{func:1,ret:P.o,args:[P.o]},{func:1,ret:-1,args:[W.bw]},{func:1,ret:[P.F,P.o,P.o],args:[[P.F,P.o,P.o],P.o]},{func:1,ret:P.Q,args:[[P.l,D.a1]]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:P.k,args:[P.k,P.k]},{func:1,ret:P.I,args:[P.k]},{func:1,ret:P.A,args:[P.o]},{func:1,ret:P.u,args:[P.u,P.u]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:P.I,args:[,,]},{func:1,args:[W.a4]},{func:1,ret:P.A,args:[P.b1]},{func:1,ret:P.A,args:[P.Q]},{func:1,ret:P.k,args:[[P.b,P.k],P.k]},{func:1,ret:[P.aK,,],args:[,]}]
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
if(x==y)H.m9(d||a)
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
Isolate.ag=a.ag
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
if(typeof dartMainRunner==="function")dartMainRunner(X.fR,[])
else X.fR([])})})()
//# sourceMappingURL=test.dart.js.map
