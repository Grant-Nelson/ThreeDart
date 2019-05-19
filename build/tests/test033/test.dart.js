{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.mk(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jx(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r=r+x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={jf:function jf(){},
l6:function(){return new P.hq("No element")},
a0:function a0(a){this.a=a},
fb:function fb(){},
de:function de(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fF:function fF(a,b,c){this.a=a
this.b=b
this.$ti=c},
fG:function fG(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ic:function ic(a,b,c){this.a=a
this.b=b
this.$ti=c},
id:function id(a,b,c){this.a=a
this.b=b
this.$ti=c},
bF:function bF(){},
dK:function dK(){},
dJ:function dJ(){},
bU:function(a){var u,t=H.S(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
m2:function(a){return v.types[H.ad(a)]},
m7:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Y(a).$iF},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ar(a)
if(typeof u!=="string")throw H.h(H.bP(a))
return u},
cj:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bI:function(a){return H.lg(a)+H.ju(H.by(a),0,null)},
lg:function(a){var u,t,s,r,q,p,o,n=J.Y(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.F||!!n.$idI){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bU(t.length>1&&C.j.b3(t,0)===36?C.j.cv(t,1):t)},
jZ:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lp:function(a){var u,t,s,r=H.c([],[P.B])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bP(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.h.b6(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.h(H.bP(s))}return H.jZ(r)},
k_:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bP(s))
if(s<0)throw H.h(H.bP(s))
if(s>65535)return H.lp(a)}return H.jZ(a)},
lo:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.b6(u,10))>>>0,56320|u&1023)}throw H.h(P.aT(a,0,1114111,null,null))},
bH:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ln:function(a){var u=H.bH(a).getFullYear()+0
return u},
ll:function(a){var u=H.bH(a).getMonth()+1
return u},
lh:function(a){var u=H.bH(a).getDate()+0
return u},
li:function(a){var u=H.bH(a).getHours()+0
return u},
lk:function(a){var u=H.bH(a).getMinutes()+0
return u},
lm:function(a){var u=H.bH(a).getSeconds()+0
return u},
lj:function(a){var u=H.bH(a).getMilliseconds()+0
return u},
C:function(a){throw H.h(H.bP(a))},
i:function(a,b){if(a==null)J.bX(a)
throw H.h(H.cO(a,b))},
cO:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aD(!0,b,s,null)
u=H.ad(J.bX(a))
if(!(b<0)){if(typeof u!=="number")return H.C(u)
t=b>=u}else t=!0
if(t)return P.U(b,a,s,null,u)
return P.h6(b,s)},
lY:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bJ(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bJ(a,c,!0,b,"end",u)
return new P.aD(!0,b,"end",null)},
bP:function(a){return new P.aD(!0,a,null,null)},
lU:function(a){if(typeof a!=="number")throw H.h(H.bP(a))
return a},
h:function(a){var u
if(a==null)a=new P.dn()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kC})
u.name=""}else u.toString=H.kC
return u},
kC:function(){return J.ar(this.dartException)},
t:function(a){throw H.h(a)},
A:function(a){throw H.h(P.c3(a))},
b_:function(a){var u,t,s,r,q,p
a=H.kA(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hL(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hM:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
k8:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jU:function(a,b){return new H.fZ(a,b==null?null:b.method)},
jg:function(a,b){var u=b==null,t=u?null:b.method
return new H.fv(a,t,u?null:b.receiver)},
bz:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.j5(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.h.b6(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jg(H.l(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jU(H.l(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kF()
q=$.kG()
p=$.kH()
o=$.kI()
n=$.kL()
m=$.kM()
l=$.kK()
$.kJ()
k=$.kO()
j=$.kN()
i=r.a8(u)
if(i!=null)return f.$1(H.jg(H.S(u),i))
else{i=q.a8(u)
if(i!=null){i.method="call"
return f.$1(H.jg(H.S(u),i))}else{i=p.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=n.a8(u)
if(i==null){i=m.a8(u)
if(i==null){i=l.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=k.a8(u)
if(i==null){i=j.a8(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jU(H.S(u),i))}}return f.$1(new H.hX(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dx()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aD(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dx()
return a},
bS:function(a){var u
if(a==null)return new H.en(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.en(a)},
m0:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.V(0,a[u],a[t])}return b},
m6:function(a,b,c,d,e,f){H.k(a,"$ija")
switch(H.ad(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.r("Unsupported number of arguments for wrapped closure"))},
bQ:function(a,b){var u
H.ad(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.m6)
a.$identity=u
return u},
l0:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hr().constructor.prototype):Object.create(new H.bY(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aE
if(typeof t!=="number")return t.D()
$.aE=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.jL(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.m2,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.jK:H.j7
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.h("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jL(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
kY:function(a,b,c,d){var u=H.j7
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jL:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.l_(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kY(t,!r,u,b)
if(t===0){r=$.aE
if(typeof r!=="number")return r.D()
$.aE=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bZ
return new Function(r+H.l(q==null?$.bZ=H.eV("self"):q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aE
if(typeof r!=="number")return r.D()
$.aE=r+1
o+=r
r="return function("+o+"){return this."
q=$.bZ
return new Function(r+H.l(q==null?$.bZ=H.eV("self"):q)+"."+H.l(u)+"("+o+");}")()},
kZ:function(a,b,c,d){var u=H.j7,t=H.jK
switch(b?-1:a){case 0:throw H.h(H.lt("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
l_:function(a,b){var u,t,s,r,q,p,o,n=$.bZ
if(n==null)n=$.bZ=H.eV("self")
u=$.jJ
if(u==null)u=$.jJ=H.eV("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kZ(s,!q,t,b)
if(s===1){n="return function(){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+");"
u=$.aE
if(typeof u!=="number")return u.D()
$.aE=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+", "+o+");"
u=$.aE
if(typeof u!=="number")return u.D()
$.aE=u+1
return new Function(n+u+"}")()},
jx:function(a,b,c,d,e,f,g){return H.l0(a,b,H.ad(c),d,!!e,!!f,g)},
j7:function(a){return a.a},
jK:function(a){return a.c},
eV:function(a){var u,t,s,r=new H.bY("self","target","receiver","name"),q=J.jd(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
x:function(a){if(a==null)H.lQ("boolean expression must not be null")
return a},
S:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aB(a,"String"))},
mX:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aB(a,"double"))},
mc:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aB(a,"num"))},
kr:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aB(a,"bool"))},
ad:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aB(a,"int"))},
ky:function(a,b){throw H.h(H.aB(a,H.bU(H.S(b).substring(2))))},
me:function(a,b){throw H.h(H.kX(a,H.bU(H.S(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Y(a)[b])return a
H.ky(a,b)},
f:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Y(a)[b]
else u=!0
if(u)return a
H.me(a,b)},
jC:function(a){if(a==null)return a
if(!!J.Y(a).$ib)return a
throw H.h(H.aB(a,"List<dynamic>"))},
m8:function(a,b){var u
if(a==null)return a
u=J.Y(a)
if(!!u.$ib)return a
if(u[b])return a
H.ky(a,b)},
ks:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ad(u)]
else return a.$S()}return},
eJ:function(a,b){var u
if(typeof a=="function")return!0
u=H.ks(J.Y(a))
if(u==null)return!1
return H.ki(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.jr)return a
$.jr=!0
try{if(H.eJ(a,b))return a
u=H.j3(b)
t=H.aB(a,u)
throw H.h(t)}finally{$.jr=!1}},
jy:function(a,b){if(a!=null&&!H.jw(a,b))H.t(H.aB(a,H.j3(b)))
return a},
aB:function(a,b){return new H.hN("TypeError: "+P.d4(a)+": type '"+H.km(a)+"' is not a subtype of type '"+b+"'")},
kX:function(a,b){return new H.eW("CastError: "+P.d4(a)+": type '"+H.km(a)+"' is not a subtype of type '"+b+"'")},
km:function(a){var u,t=J.Y(a)
if(!!t.$ic1){u=H.ks(t)
if(u!=null)return H.j3(u)
return"Closure"}return H.bI(a)},
lQ:function(a){throw H.h(new H.ie(a))},
mk:function(a){throw H.h(new P.f4(H.S(a)))},
lt:function(a){return new H.he(a)},
kt:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
by:function(a){if(a==null)return
return a.$ti},
mY:function(a,b,c){return H.bT(a["$a"+H.l(c)],H.by(b))},
cP:function(a,b,c,d){var u
H.S(c)
H.ad(d)
u=H.bT(a["$a"+H.l(c)],H.by(b))
return u==null?null:u[d]},
aq:function(a,b,c){var u
H.S(b)
H.ad(c)
u=H.bT(a["$a"+H.l(b)],H.by(a))
return u==null?null:u[c]},
w:function(a,b){var u
H.ad(b)
u=H.by(a)
return u==null?null:u[b]},
j3:function(a){return H.bx(a,null)},
bx:function(a,b){var u,t
H.j(b,"$ib",[P.o],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bU(a[0].name)+H.ju(a,1,b)
if(typeof a=="function")return H.bU(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ad(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.i(b,t)
return H.l(b[t])}if('func' in a)return H.lJ(a,b)
if('futureOr' in a)return"FutureOr<"+H.bx("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lJ:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.o]
H.j(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.i(a0,n)
p=C.j.D(p,a0[n])
m=u[q]
if(m!=null&&m!==P.O)p+=" extends "+H.bx(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bx(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bx(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bx(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.m_(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.S(b[h])
j=j+i+H.bx(e[d],a0)+(" "+H.l(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
ju:function(a,b,c){var u,t,s,r,q,p
H.j(c,"$ib",[P.o],"$ab")
if(a==null)return""
u=new P.bt("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bx(p,c)}return"<"+u.i(0)+">"},
bT:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jv:function(a,b,c,d){var u,t
H.S(b)
H.jC(c)
H.S(d)
if(a==null)return!1
u=H.by(a)
t=J.Y(a)
if(t[b]==null)return!1
return H.kp(H.bT(t[d],u),null,c,null)},
j:function(a,b,c,d){H.S(b)
H.jC(c)
H.S(d)
if(a==null)return a
if(H.jv(a,b,c,d))return a
throw H.h(H.aB(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bU(b.substring(2))+H.ju(c,0,null),v.mangledGlobalNames)))},
kp:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.av(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.av(a[t],b,c[t],d))return!1
return!0},
mV:function(a,b,c){return a.apply(b,H.bT(J.Y(b)["$a"+H.l(c)],H.by(b)))},
kv:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="O"||a.name==="K"||a===-1||a===-2||H.kv(u)}return!1},
jw:function(a,b){var u,t
if(a==null)return b==null||b.name==="O"||b.name==="K"||b===-1||b===-2||H.kv(b)
if(b==null||b===-1||b.name==="O"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eJ(a,b)}u=J.Y(a).constructor
t=H.by(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.av(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.jw(a,b))throw H.h(H.aB(a,H.j3(b)))
return a},
av:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="O"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="O"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.av(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="K")return!0
if('func' in c)return H.ki(a,b,c,d)
if('func' in a)return c.name==="ja"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.av("type" in a?a.type:l,b,s,d)
else if(H.av(a,b,s,d))return!0
else{if(!('$i'+"c8" in t.prototype))return!1
r=t.prototype["$a"+"c8"]
q=H.bT(r,u?a.slice(1):l)
return H.av(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kp(H.bT(m,u),b,p,d)},
ki:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.av(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.av(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.av(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.av(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mb(h,b,g,d)},
mb:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.av(c[s],d,a[s],b))return!1}return!0},
mW:function(a,b,c){Object.defineProperty(a,H.S(b),{value:c,enumerable:false,writable:true,configurable:true})},
m9:function(a){var u,t,s,r,q=H.S($.ku.$1(a)),p=$.iX[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j1[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.S($.ko.$2(a,q))
if(q!=null){p=$.iX[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j1[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.j2(u)
$.iX[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.j1[q]=u
return u}if(s==="-"){r=H.j2(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kx(a,u)
if(s==="*")throw H.h(P.k9(q))
if(v.leafTags[q]===true){r=H.j2(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kx(a,u)},
kx:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jD(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j2:function(a){return J.jD(a,!1,null,!!a.$iF)},
ma:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j2(u)
else return J.jD(u,c,null,null)},
m4:function(){if(!0===$.jB)return
$.jB=!0
H.m5()},
m5:function(){var u,t,s,r,q,p,o,n
$.iX=Object.create(null)
$.j1=Object.create(null)
H.m3()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kz.$1(q)
if(p!=null){o=H.ma(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
m3:function(){var u,t,s,r,q,p,o=C.w()
o=H.bO(C.x,H.bO(C.y,H.bO(C.q,H.bO(C.q,H.bO(C.z,H.bO(C.A,H.bO(C.B(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ku=new H.iZ(r)
$.ko=new H.j_(q)
$.kz=new H.j0(p)},
bO:function(a,b){return a(b)||b},
l8:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.fn("Illegal RegExp pattern ("+String(r)+")",a))},
mh:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lZ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kA:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kB:function(a,b,c){var u=H.mi(a,b,c)
return u},
mi:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kA(b),'g'),H.lZ(c))},
hL:function hL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fZ:function fZ(a,b){this.a=a
this.b=b},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
hX:function hX(a){this.a=a},
j5:function j5(a){this.a=a},
en:function en(a){this.a=a
this.b=null},
c1:function c1(){},
hz:function hz(){},
hr:function hr(){},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hN:function hN(a){this.a=a},
eW:function eW(a){this.a=a},
he:function he(a){this.a=a},
ie:function ie(a){this.a=a},
aM:function aM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fy:function fy(a,b){this.a=a
this.b=b
this.c=null},
dd:function dd(a,b){this.a=a
this.$ti=b},
fz:function fz(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
fu:function fu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cL:function(a){return a},
bw:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.cO(b,a))},
lI:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.lY(a,b,c))
return b},
cg:function cg(){},
dk:function dk(){},
cf:function cf(){},
dl:function dl(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
dm:function dm(){},
fY:function fY(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
m_:function(a){return J.jO(a?Object.keys(a):[],null)},
md:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iY:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jB==null){H.m4()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.k9("Return interceptor for "+H.l(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jG()]
if(r!=null)return r
r=H.m9(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.t
if(u===Object.prototype)return C.t
if(typeof s=="function"){Object.defineProperty(s,$.jG(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
l7:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.j6(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.aT(a,0,4294967295,"length",null))
return J.jO(new Array(a),b)},
jO:function(a,b){return J.jd(H.c(a,[b]))},
jd:function(a){H.jC(a)
a.fixed$length=Array
return a},
Y:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d7.prototype
return J.d6.prototype}if(typeof a=="string")return J.cb.prototype
if(a==null)return J.d8.prototype
if(typeof a=="boolean")return J.ft.prototype
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.O)return a
return J.iY(a)},
jz:function(a){if(typeof a=="string")return J.cb.prototype
if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.O)return a
return J.iY(a)},
jA:function(a){if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.O)return a
return J.iY(a)},
m1:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.O)return a
return J.iY(a)},
X:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Y(a).p(a,b)},
kT:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m7(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jz(a).j(a,b)},
kU:function(a,b,c,d){return J.m1(a).hO(a,b,c,d)},
jI:function(a,b){return J.jA(a).C(a,b)},
kV:function(a,b){return J.jA(a).M(a,b)},
bA:function(a){return J.Y(a).gF(a)},
bW:function(a){return J.jA(a).gZ(a)},
bX:function(a){return J.jz(a).gk(a)},
ar:function(a){return J.Y(a).i(a)},
a:function a(){},
ft:function ft(){},
d8:function d8(){},
da:function da(){},
h2:function h2(){},
dI:function dI(){},
bq:function bq(){},
aL:function aL(a){this.$ti=a},
je:function je(a){this.$ti=a},
ae:function ae(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d9:function d9(){},
d7:function d7(){},
d6:function d6(){},
cb:function cb(){}},P={
lz:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lR()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bQ(new P.ih(s),1)).observe(u,{childList:true})
return new P.ig(s,u,t)}else if(self.setImmediate!=null)return P.lS()
return P.lT()},
lA:function(a){self.scheduleImmediate(H.bQ(new P.ii(H.n(a,{func:1,ret:-1})),0))},
lB:function(a){self.setImmediate(H.bQ(new P.ij(H.n(a,{func:1,ret:-1})),0))},
lC:function(a){P.jm(C.m,H.n(a,{func:1,ret:-1}))},
jm:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.h.a0(a.a,1000)
return P.lF(u<0?0:u,b)},
k7:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.aY]})
u=C.h.a0(a.a,1000)
return P.lG(u<0?0:u,b)},
lF:function(a,b){var u=new P.et()
u.eo(a,b)
return u},
lG:function(a,b){var u=new P.et()
u.ep(a,b)
return u},
lD:function(a,b){var u,t,s
b.a=1
try{a.dX(new P.is(b),new P.it(b),null)}catch(s){u=H.bz(s)
t=H.bS(s)
P.mf(new P.iu(b,u,t))}},
kf:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iau")
if(u>=4){t=b.bQ()
b.a=a.a
b.c=a.c
P.cA(b,t)}else{t=H.k(b.c,"$ib2")
b.a=2
b.c=a
a.d_(t)}},
cA:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iaf")
g=g.b
r=s.a
q=s.b
g.toString
P.iT(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cA(h.a,b)}g=h.a
o=g.c
u.a=t
u.b=o
r=!t
if(r){q=b.c
q=(q&1)!==0||q===8}else q=!0
if(q){q=b.b
n=q.b
if(t){m=g.b
m.toString
m=m==n
if(!m)n.toString
else m=!0
m=!m}else m=!1
if(m){H.k(o,"$iaf")
g=g.b
r=o.a
q=o.b
g.toString
P.iT(i,i,g,r,q)
return}l=$.W
if(l!=n)$.W=n
else l=i
g=b.c
if(g===8)new P.iy(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.ix(u,b,o).$0()}else if((g&2)!==0)new P.iw(h,u,b).$0()
if(l!=null)$.W=l
g=u.b
if(!!J.Y(g).$ic8){if(g.a>=4){k=H.k(q.c,"$ib2")
q.c=null
b=q.b5(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.kf(g,q)
return}}j=b.b
k=H.k(j.c,"$ib2")
j.c=null
b=j.b5(k)
g=u.a
r=u.b
if(!g){H.D(r,H.w(j,0))
j.a=4
j.c=r}else{H.k(r,"$iaf")
j.a=8
j.c=r}h.a=j
g=j}},
lM:function(a,b){if(H.eJ(a,{func:1,args:[P.O,P.ak]}))return H.n(a,{func:1,ret:null,args:[P.O,P.ak]})
if(H.eJ(a,{func:1,args:[P.O]}))return H.n(a,{func:1,ret:null,args:[P.O]})
throw H.h(P.j6(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lL:function(){var u,t
for(;u=$.bN,u!=null;){$.cN=null
t=u.b
$.bN=t
if(t==null)$.cM=null
u.a.$0()}},
lP:function(){$.js=!0
try{P.lL()}finally{$.cN=null
$.js=!1
if($.bN!=null)$.jH().$1(P.kq())}},
kl:function(a){var u=new P.dS(H.n(a,{func:1,ret:-1}))
if($.bN==null){$.bN=$.cM=u
if(!$.js)$.jH().$1(P.kq())}else $.cM=$.cM.b=u},
lO:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.bN
if(u==null){P.kl(a)
$.cN=$.cM
return}t=new P.dS(a)
s=$.cN
if(s==null){t.b=u
$.bN=$.cN=t}else{t.b=s.b
$.cN=s.b=t
if(t.b==null)$.cM=t}},
mf:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.W
if(C.k===u){P.iV(t,t,C.k,a)
return}u.toString
P.iV(t,t,u,H.n(u.bX(a),s))},
k6:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.W
if(u===C.k){u.toString
return P.jm(a,b)}return P.jm(a,H.n(u.bX(b),t))},
lx:function(a,b){var u,t,s={func:1,ret:-1,args:[P.aY]}
H.n(b,s)
u=$.W
if(u===C.k){u.toString
return P.k7(a,b)}t=u.d8(b,P.aY)
$.W.toString
return P.k7(a,H.n(t,s))},
iT:function(a,b,c,d,e){var u={}
u.a=d
P.lO(new P.iU(u,e))},
kj:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.W
if(t===c)return d.$0()
$.W=c
u=t
try{t=d.$0()
return t}finally{$.W=u}},
kk:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.D(e,g)
t=$.W
if(t===c)return d.$1(e)
$.W=c
u=t
try{t=d.$1(e)
return t}finally{$.W=u}},
lN:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
t=$.W
if(t===c)return d.$2(e,f)
$.W=c
u=t
try{t=d.$2(e,f)
return t}finally{$.W=u}},
iV:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.bX(d):c.hS(d,-1)
P.kl(d)},
ih:function ih(a){this.a=a},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
ii:function ii(a){this.a=a},
ij:function ij(a){this.a=a},
et:function et(){this.c=0},
iO:function iO(a,b){this.a=a
this.b=b},
iN:function iN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b2:function b2(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
au:function au(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
ir:function ir(a,b){this.a=a
this.b=b},
iv:function iv(a,b){this.a=a
this.b=b},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
iu:function iu(a,b,c){this.a=a
this.b=b
this.c=c},
iy:function iy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iz:function iz(a){this.a=a},
ix:function ix(a,b,c){this.a=a
this.b=b
this.c=c},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(a){this.a=a
this.b=null},
hu:function hu(){},
hw:function hw(a,b){this.a=a
this.b=b},
hx:function hx(a,b){this.a=a
this.b=b},
cn:function cn(){},
hv:function hv(){},
aY:function aY(){},
af:function af(a,b){this.a=a
this.b=b},
iQ:function iQ(){},
iU:function iU(a,b){this.a=a
this.b=b},
iG:function iG(){},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.c=c},
la:function(a,b){return new H.aM([a,b])},
lb:function(a){return H.m0(a,new H.aM([null,null]))},
lc:function(a){return new P.iD([a])},
jq:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kh:function(a,b,c){var u=new P.iE(a,b,[c])
u.c=a.e
return u},
l5:function(a,b,c){var u,t
if(P.jt(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.o])
C.a.h($.am,a)
try{P.lK(a,u)}finally{if(0>=$.am.length)return H.i($.am,-1)
$.am.pop()}t=P.k4(b,H.m8(u,"$id"),", ")+c
return t.charCodeAt(0)==0?t:t},
jc:function(a,b,c){var u,t
if(P.jt(a))return b+"..."+c
u=new P.bt(b)
C.a.h($.am,a)
try{t=u
t.a=P.k4(t.a,a,", ")}finally{if(0>=$.am.length)return H.i($.am,-1)
$.am.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jt:function(a){var u,t
for(u=$.am.length,t=0;t<u;++t)if(a===$.am[t])return!0
return!1},
lK:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.j(b,"$ib",[P.o],"$ab")
u=a.gZ(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.l(u.gT(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.i(b,-1)
q=b.pop()
if(0>=b.length)return H.i(b,-1)
p=b.pop()}else{o=u.gT(u);++s
if(!u.B()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.i(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gT(u);++s
for(;u.B();o=n,n=m){m=u.gT(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.l(o)
q=H.l(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
jQ:function(a){var u,t={}
if(P.jt(a))return"{...}"
u=new P.bt("")
try{C.a.h($.am,a)
u.a+="{"
t.a=!0
J.kV(a,new P.fE(t,u))
u.a+="}"}finally{if(0>=$.am.length)return H.i($.am,-1)
$.am.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iD:function iD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cB:function cB(a){this.a=a
this.c=this.b=null},
iE:function iE(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fA:function fA(){},
u:function u(){},
fD:function fD(){},
fE:function fE(a,b){this.a=a
this.b=b},
aa:function aa(){},
iK:function iK(){},
e6:function e6(){},
c2:function c2(){},
cY:function cY(){},
fc:function fc(){},
i_:function i_(){},
i0:function i0(){},
iP:function iP(a){this.b=0
this.c=a},
l4:function(a){if(a instanceof H.c1)return a.i(0)
return"Instance of '"+H.bI(a)+"'"},
ld:function(a,b,c){var u,t
H.D(b,c)
u=J.l7(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.V(u,t,b)
return H.j(u,"$ib",[c],"$ab")},
jP:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bW(a);u.B();)C.a.h(s,H.D(u.gT(u),c))
if(b)return s
return H.j(J.jd(s),"$ib",t,"$ab")},
jl:function(a){var u,t,s=P.B
H.j(a,"$id",[s],"$ad")
if(a.constructor===Array){H.j(a,"$iaL",[s],"$aaL")
u=a.length
t=P.k1(0,null,u)
return H.k_(t<u?C.a.e4(a,0,t):a)}return P.lv(a,0,null)},
lv:function(a,b,c){var u,t,s
H.j(a,"$id",[P.B],"$ad")
u=J.bW(a)
for(t=0;t<b;++t)if(!u.B())throw H.h(P.aT(b,0,t,null,null))
s=[]
for(;u.B();)s.push(u.gT(u))
return H.k_(s)},
lq:function(a){return new H.fu(a,H.l8(a,!1,!0,!1))},
k4:function(a,b,c){var u=J.bW(b)
if(!u.B())return a
if(c.length===0){do a+=H.l(u.gT(u))
while(u.B())}else{a+=H.l(u.gT(u))
for(;u.B();)a=a+c+H.l(u.gT(u))}return a},
lH:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.j(a,"$ib",[P.B],"$ab")
if(c===C.r){u=$.kS().b
u=u.test(b)}else u=!1
if(u)return b
t=C.D.hU(H.D(b,H.aq(c,"c2",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.i(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lo(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
l1:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
l2:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d_:function(a){if(a>=10)return""+a
return"0"+a},
jN:function(a,b){return new P.bk(1e6*b+1000*a)},
d4:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.l4(a)},
kW:function(a){return new P.aD(!1,null,null,a)},
j6:function(a,b,c){return new P.aD(!0,a,b,c)},
h6:function(a,b){return new P.bJ(null,null,!0,a,b,"Value not in range")},
aT:function(a,b,c,d,e){return new P.bJ(b,c,!0,a,d,"Invalid value")},
k1:function(a,b,c){if(0>a||a>c)throw H.h(P.aT(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.aT(b,a,c,"end",null))
return b}return c},
k0:function(a,b){if(typeof a!=="number")return a.aA()
if(a<0)throw H.h(P.aT(a,0,null,b,null))},
U:function(a,b,c,d,e){var u=H.ad(e==null?J.bX(b):e)
return new P.fs(u,!0,a,c,"Index out of range")},
ao:function(a){return new P.hY(a)},
k9:function(a){return new P.hW(a)},
c3:function(a){return new P.f_(a)},
r:function(a){return new P.e_(a)},
jF:function(a){H.md(a)},
a5:function a5(){},
as:function as(a,b){this.a=a
this.b=b},
y:function y(){},
bk:function bk(a){this.a=a},
f9:function f9(){},
fa:function fa(){},
bl:function bl(){},
eO:function eO(){},
dn:function dn(){},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ:function bJ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fs:function fs(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hY:function hY(a){this.a=a},
hW:function hW(a){this.a=a},
hq:function hq(a){this.a=a},
f_:function f_(a){this.a=a},
h1:function h1(){},
dx:function dx(){},
f4:function f4(a){this.a=a},
e_:function e_(a){this.a=a},
fn:function fn(a,b){this.a=a
this.b=b},
B:function B(){},
d:function d(){},
aK:function aK(){},
b:function b(){},
N:function N(){},
K:function K(){},
a8:function a8(){},
O:function O(){},
ak:function ak(){},
o:function o(){},
bt:function bt(a){this.a=a},
lX:function(a){var u,t=J.Y(a)
if(!!t.$ibm){u=t.gdf(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ey(a.data,a.height,a.width)},
lW:function(a){if(a instanceof P.ey)return{data:a.a,height:a.b,width:a.c}
return a},
bd:function(a){var u,t,s,r,q
if(a==null)return
u=P.la(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=H.S(t[r])
u.V(0,q,a[q])}return u},
lV:function(a){var u={}
a.M(0,new P.iW(u))
return u},
ey:function ey(a,b,c){this.a=a
this.b=b
this.c=c},
iW:function iW(a){this.a=a},
fj:function fj(a,b){this.a=a
this.b=b},
fk:function fk(){},
fl:function fl(){},
iC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lE:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iF:function iF(){},
aj:function aj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b4:function b4(){},
fx:function fx(){},
b9:function b9(){},
h_:function h_(){},
h5:function h5(){},
hy:function hy(){},
p:function p(){},
bc:function bc(){},
hK:function hK(){},
e4:function e4(){},
e5:function e5(){},
ee:function ee(){},
ef:function ef(){},
ep:function ep(){},
eq:function eq(){},
ew:function ew(){},
ex:function ex(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(a){this.a=a},
eT:function eT(){},
bB:function bB(){},
h0:function h0(){},
dT:function dT(){},
cU:function cU(){},
dr:function dr(){},
bK:function bK(){},
ds:function ds(){},
dz:function dz(){},
dH:function dH(){},
hp:function hp(){},
el:function el(){},
em:function em(){}},W={
j8:function(){var u=document.createElement("canvas")
return u},
l3:function(a){H.k(a,"$ie")
return"wheel"},
iB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kg:function(a,b,c,d){var u=W.iB(W.iB(W.iB(W.iB(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a7:function(a,b,c,d,e){var u=W.kn(new W.iq(c),W.m)
if(u!=null&&!0)J.kU(a,b,u,!1)
return new W.ip(a,b,u,!1,[e])},
kn:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.W
if(u===C.k)return a
return u.d8(a,b)},
q:function q(){},
eK:function eK(){},
eM:function eM(){},
eN:function eN(){},
cT:function cT(){},
bD:function bD(){},
c0:function c0(){},
bj:function bj(){},
c5:function c5(){},
f0:function f0(){},
P:function P(){},
c6:function c6(){},
f1:function f1(){},
aF:function aF(){},
aG:function aG(){},
f2:function f2(){},
f3:function f3(){},
f5:function f5(){},
d0:function d0(){},
f6:function f6(){},
d1:function d1(){},
d2:function d2(){},
f7:function f7(){},
f8:function f8(){},
il:function il(a,b){this.a=a
this.b=b},
a1:function a1(){},
m:function m(){},
e:function e(){},
aI:function aI(){},
fh:function fh(){},
fi:function fi(){},
fm:function fm(){},
aJ:function aJ(){},
fq:function fq(){},
bG:function bG(){},
bm:function bm(){},
ca:function ca(){},
aN:function aN(){},
fB:function fB(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(a){this.a=a},
fP:function fP(){},
fQ:function fQ(a){this.a=a},
aQ:function aQ(){},
fR:function fR(){},
a9:function a9(){},
ik:function ik(a){this.a=a},
G:function G(){},
ch:function ch(){},
aS:function aS(){},
h3:function h3(){},
hc:function hc(){},
hd:function hd(a){this.a=a},
hf:function hf(){},
aU:function aU(){},
hn:function hn(){},
aV:function aV(){},
ho:function ho(){},
aW:function aW(){},
hs:function hs(){},
ht:function ht(a){this.a=a},
ay:function ay(){},
aX:function aX(){},
az:function az(){},
hA:function hA(){},
hB:function hB(){},
hF:function hF(){},
aZ:function aZ(){},
aA:function aA(){},
hI:function hI(){},
hJ:function hJ(){},
bv:function bv(){},
hZ:function hZ(){},
ib:function ib(){},
b1:function b1(){},
cz:function cz(){},
im:function im(){},
dV:function dV(){},
iA:function iA(){},
eb:function eb(){},
iL:function iL(){},
iM:function iM(){},
io:function io(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jp:function jp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ip:function ip(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iq:function iq(a){this.a=a},
z:function z(){},
d5:function d5(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
dU:function dU(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
ec:function ec(){},
ed:function ed(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
cG:function cG(){},
cH:function cH(){},
ej:function ej(){},
ek:function ek(){},
eo:function eo(){},
er:function er(){},
es:function es(){},
cI:function cI(){},
cJ:function cJ(){},
eu:function eu(){},
ev:function ev(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){}},O={
eY:function(a){var u=new O.T([a])
u.bv(a)
return u},
T:function T(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cd:function cd(){this.b=this.a=null},
dh:function dh(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fH:function fH(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cc:function cc(){},
fI:function fI(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aO:function aO(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fK:function fK(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fL:function fL(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
du:function du(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bu:function bu(){}},E={
fd:function(a){var u=new E.ag()
u.a=""
u.b=!0
u.sed(0,O.eY(E.ag))
u.y.aK(u.gia(),u.gie())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sct(0,a)
u.sdM(null)
return u},
ls:function(a,b){var u=new E.h8(a)
u.ea(a,b)
return u},
lw:function(a,b,c,d,e){var u,t,s=J.Y(a)
if(!!s.$ibD)return E.k5(a,!0,!0,!0,!1)
u=W.j8()
t=u.style
t.width="100%"
t.height="100%"
s.gdc(a).h(0,u)
return E.k5(u,!0,!0,!0,!1)},
k5:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dD(),j=H.k(C.l.cq(a,"webgl2",P.lb(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibK")
if(j==null)H.t(P.r("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.ls(j,a)
u=new T.hC(j)
H.ad(j.getParameter(3379))
u.c=H.ad(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dL(a)
t=new X.fw()
t.c=new X.an(!1,!1,!1)
t.sfU(P.lc(P.B))
u.b=t
t=new X.fS(u)
t.f=0
t.r=V.ba()
t.x=V.ba()
t.ch=t.Q=1
u.c=t
t=new X.fC(u)
t.r=0
t.x=V.ba()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hH(u)
t.f=V.ba()
t.r=V.ba()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seI(H.c([],[[P.cn,P.O]]))
t=u.z
s=document
r=W.a9
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a7(s,"contextmenu",H.n(u.gfd(),q),!1,r))
t=u.z
p=W.m
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a7(a,"focus",H.n(u.gfj(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a7(a,"blur",H.n(u.gf7(),o),!1,p))
t=u.z
n=W.aN
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a7(s,"keyup",H.n(u.gfn(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a7(s,"keydown",H.n(u.gfl(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a7(a,"mousedown",H.n(u.gfs(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,"mouseup",H.n(u.gfw(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,l,H.n(u.gfu(),q),!1,r))
n=u.z
m=W.b1;(n&&C.a).h(n,W.a7(a,H.S(W.l3(a)),H.n(u.gfA(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a7(s,l,H.n(u.gff(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a7(s,"mouseup",H.n(u.gfh(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a7(s,"pointerlockchange",H.n(u.gfC(),o),!1,p))
p=u.z
o=W.aA
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a7(a,"touchstart",H.n(u.gfQ(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchend",H.n(u.gfM(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchmove",H.n(u.gfO(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.as(Date.now(),!1)
k.cy=0
k.d1()
return k},
eU:function eU(){},
ag:function ag(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h8:function h8(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h9:function h9(a){this.a=a},
ha:function ha(a){this.a=a},
hb:function hb(a){this.a=a},
dD:function dD(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hE:function hE(a){this.a=a}},Z={
jo:function(a,b,c){var u
H.j(c,"$ib",[P.B],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cL(c)),35044)
a.bindBuffer(b,null)
return new Z.dQ(b,u)},
at:function(a){return new Z.b0(a)},
dQ:function dQ(a,b){this.a=a
this.b=b},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dR:function dR(a){this.a=a},
c_:function c_(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a){this.a=a}},D={
J:function(){var u=new D.aH()
u.sa_(null)
u.sai(null)
u.c=null
u.d=0
return u},
eX:function eX(){},
aH:function aH(){var _=this
_.d=_.c=_.b=_.a=null},
ff:function ff(a){this.a=a},
fg:function fg(a){this.a=a},
v:function v(){this.b=null},
bo:function bo(a){this.b=null
this.$ti=a},
bp:function bp(a){this.b=null
this.$ti=a},
E:function E(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
jM:function(a,b){var u,t,s=new D.b3()
s.c=new V.Z(1,1,1)
s.a=V.ly()
u=s.b
s.b=b
b.gm().h(0,s.gee())
t=new D.E("mover",u,s.b,[U.a3])
t.b=!0
s.al(t)
if(!s.c.p(0,a)){u=s.c
s.c=a
t=new D.E("color",u,a,[V.Z])
t.b=!0
s.al(t)}return s},
b3:function b3(){var _=this
_.d=_.c=_.b=_.a=null},
a_:function a_(){},
dc:function dc(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dq:function dq(){},
dw:function dw(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){}},X={cW:function cW(a,b){this.a=a
this.b=b},db:function db(a,b){this.a=a
this.b=b},fw:function fw(){var _=this
_.d=_.c=_.b=_.a=null},df:function df(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fC:function fC(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},an:function an(a,b,c){this.a=a
this.b=b
this.c=c},b7:function b7(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fS:function fS(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ce:function ce(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h4:function h4(){},dF:function dF(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hH:function hH(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dL:function dL(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
fp:function(a){var u=new X.fo(),t=new V.aw(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.lr()
u.r=t
return u},
jj:function(a){var u,t,s=new X.dp()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().h(0,s.geq())
t=new D.E("mover",u,s.b,[U.a3])
t.b=!0
s.ab(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.L().a)){s.c=1.0471975511965976
t=new D.E("fov",t,1.0471975511965976,[P.y])
t.b=!0
s.ab(t)}t=s.d
if(!(Math.abs(t-0.1)<$.L().a)){s.d=0.1
t=new D.E("near",t,0.1,[P.y])
t.b=!0
s.ab(t)}t=s.e
if(!(Math.abs(t-2000)<$.L().a)){s.e=2000
t=new D.E("far",t,2000,[P.y])
t.b=!0
s.ab(t)}return s},
bC:function bC(){},
fo:function fo(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fr:function fr(){this.b=this.a=null},
dp:function dp(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
bM:function bM(){}},V={
ml:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.i.e2(a-b,u)
return(a<0?a+u:a)+b},
R:function(a,b,c){if(a==null)return C.j.a9("null",c)
return C.j.a9(C.i.dY(Math.abs(a-0)<$.L().a?0:a,b),c+b+1)},
bR:function(a,b,c){var u,t,s,r,q,p
H.j(a,"$ib",[P.y],"$ab")
u=H.c([],[P.o])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=V.R(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.i(u,p)
C.a.V(u,p,C.j.a9(u[p],s))}return u},
jE:function(a){return C.i.iz(Math.pow(2,C.G.ca(Math.log(H.lU(a))/Math.log(2))))},
br:function(){var u=$.jT
return u==null?$.jT=V.aP(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aP:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ji:function(a,b,c){return V.aP(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lf:function(a,b,c){return V.aP(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
jh:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aP(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
jS:function(a,b,c,d){d=V.ke()
return V.jR(V.jY(),d,new V.M(a,b,c))},
jR:function(a,b,c){var u=c.t(0,Math.sqrt(c.A(c))),t=b.aU(u),s=t.t(0,Math.sqrt(t.A(t))),r=u.aU(s),q=new V.M(a.a,a.b,a.c),p=s.K(0).A(q),o=r.K(0).A(q),n=u.K(0).A(q)
return V.aP(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
ba:function(){var u=$.jX
return u==null?$.jX=new V.a4(0,0):u},
jY:function(){var u=$.ci
return u==null?$.ci=new V.ah(0,0,0):u},
lr:function(){var u=$.k2
return u==null?$.k2=V.h7(0,0,1,1):u},
h7:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ck(a,b,c,d)},
dP:function(){var u=$.kd
return u==null?$.kd=new V.M(0,0,0):u},
ke:function(){var u=$.kc
return u==null?$.kc=new V.M(0,1,0):u},
ly:function(){var u=$.i1
return u==null?$.i1=new V.M(0,0,1):u},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fe:function fe(a){this.a=a},
dj:function dj(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a6:function a6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p},
a4:function a4(a,b){this.a=a
this.b=b},
ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ck:function ck(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Q:function Q(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
ab:function(a){var u=new V.hg()
u.eb(a)
return u},
eL:function eL(){},
b6:function b6(){},
dg:function dg(){},
b8:function b8(){this.a=null},
hg:function hg(){this.a=null},
cm:function cm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dE:function dE(a,b,c){this.a=a
this.b=b
this.c=c},
cq:function cq(a){this.b=a
this.c=null},
hG:function hG(){this.c=this.b=this.a=null},
cr:function cr(a){this.b=a
this.a=this.c=null},
mg:function(a){P.lx(C.E,new V.j4(a))},
lu:function(a){var u=new V.hk()
u.ec(a,!0)
return u},
j4:function j4(a){this.a=a},
hk:function hk(){this.b=this.a=null},
hm:function hm(a){this.a=a},
hl:function hl(a){this.a=a}},U={
j9:function(){var u=new U.eZ()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
cX:function(a){var u=new U.c4()
u.sL(0,a)
return u},
jb:function(a){var u=new U.c9()
u.bv(U.a3)
u.aK(u.geg(),u.gfG())
if(a!=null)u.aR(0,a)
u.e=null
u.f=V.br()
u.r=0
return u},
eZ:function eZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c4:function c4(){this.b=this.a=null},
c9:function c9(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a3:function a3(){},
dM:function dM(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dN:function dN(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dO:function dO(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cZ:function cZ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},d3:function d3(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ax:function ax(){},bL:function bL(){},dy:function dy(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
le:function(a,b){var u=a.ad,t=new A.di(b,u)
t.cB(b,u)
t.e9(a,b)
return t},
jn:function(a,b,c,d,e){var u=new A.hO(a,c,e)
u.f=d
u.shq(P.ld(d,0,P.B))
return u},
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(a){this.a=a},
di:function di(a,b){var _=this
_.ba=_.di=_.b9=_.ad=_.ak=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dC=_.c4=_.dB=_.bn=_.dA=_.dz=_.bm=_.bl=_.dw=_.dv=_.bk=_.bj=_.bi=_.du=_.dt=_.bh=_.ds=_.dr=_.bg=_.dq=_.dn=_.bf=_.be=_.dm=_.dl=_.bd=_.bc=_.dk=_.dj=_.bb=null
_.c9=_.dG=_.c8=_.dF=_.c7=_.dE=_.c6=_.dD=_.c5=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fJ:function fJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p
_.dy=q
_.fr=r
_.fx=s
_.fy=t
_.go=u
_.id=a0
_.k1=a1
_.k2=a2
_.k3=a3
_.k4=a4
_.r1=a5
_.r2=a6
_.rx=a7
_.ry=a8
_.x1=a9
_.x2=b0
_.y1=b1
_.y2=b2
_.ak=b3
_.ad=b4
_.b9=b5},
cs:function cs(a,b){this.b=a
this.c=b},
cw:function cw(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cu:function cu(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cx:function cx(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cv:function cv(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cy:function cy(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.ch=k
_.cx=l
_.cy=m},
cl:function cl(){},
bE:function bE(a,b){this.a=a
this.b=b},
dv:function dv(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dG:function dG(){},
hU:function hU(a){this.a=a},
I:function I(a,b,c){this.a=a
this.c=b
this.d=c},
hQ:function hQ(a,b,c){this.a=a
this.c=b
this.d=c},
hR:function hR(a,b,c){this.a=a
this.c=b
this.d=c},
hT:function hT(a,b,c){this.a=a
this.c=b
this.d=c},
hO:function hO(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
hP:function hP(a,b,c){this.a=a
this.c=b
this.d=c},
H:function H(a,b,c){this.a=a
this.c=b
this.d=c},
hS:function hS(a,b,c){this.a=a
this.c=b
this.d=c},
hV:function hV(a,b,c){this.a=a
this.c=b
this.d=c},
ct:function ct(a,b,c){this.a=a
this.c=b
this.d=c},
al:function al(a,b,c){this.a=a
this.c=b
this.d=c},
ai:function ai(a,b,c){this.a=a
this.c=b
this.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iS:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cK:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.M(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.M(u+a3,t+a1,s+a2)
q=new V.M(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.M(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.iS(i)
l=F.iS(j.b)
k=F.mj(d,a0,new F.iR(j,F.iS(j.c),F.iS(j.d),l,m,c),b)
if(k!=null)a.i9(k)},
mj:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ap,P.y,P.y]})
if(a<1)return
if(b<1)return
u=F.jk()
t=H.c([],[F.ap])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.i2(g,g,new V.aw(p,0,0,1),g,g,new V.a4(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c1(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.i2(g,g,new V.aw(j,i,h,1),g,g,new V.a4(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c1(d))}}u.d.hQ(a+1,b+1,t)
return u},
c7:function(a,b,c){var u=new F.a2(),t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a1()
return u},
l9:function(a,b){var u=new F.b5(),t=a.a
if(t==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a1()
return u},
jk:function(){var u=new F.dt(),t=new F.i3(u)
t.b=!1
t.shr(H.c([],[F.ap]))
u.a=t
t=new F.hj(u)
t.sbO(H.c([],[F.bs]))
u.b=t
t=new F.hi(u)
t.seQ(H.c([],[F.b5]))
u.c=t
t=new F.hh(u)
t.seJ(H.c([],[F.a2]))
u.d=t
u.e=null
return u},
i2:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ap(),r=new F.i8()
r.sbO(H.c([],[F.bs]))
s.b=r
r=new F.i7()
u=[F.b5]
r.seR(H.c([],u))
r.seS(H.c([],u))
s.c=r
r=new F.i4()
u=[F.a2]
r.seK(H.c([],u))
r.seL(H.c([],u))
r.seM(H.c([],u))
s.d=r
h=$.kP()
s.e=0
r=$.aC()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bg().a)!==0?e:t
s.x=(u&$.bf().a)!==0?b:t
s.y=(u&$.bh().a)!==0?f:t
s.z=(u&$.bi().a)!==0?g:t
s.Q=(u&$.kQ().a)!==0?c:t
s.ch=(u&$.bV().a)!==0?i:0
s.cx=(u&$.be().a)!==0?a:t
return s},
iR:function iR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a2:function a2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
b5:function b5(){this.b=this.a=null},
bs:function bs(){this.a=null},
dt:function dt(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hh:function hh(a){this.a=a
this.b=null},
hi:function hi(a){this.a=a
this.b=null},
hj:function hj(a){this.a=a
this.b=null},
ap:function ap(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ia:function ia(a){this.a=a},
i9:function i9(a){this.a=a},
i3:function i3(a){this.a=a
this.c=this.b=null},
i4:function i4(){this.d=this.c=this.b=null},
i5:function i5(a,b){this.a=a
this.b=b},
i6:function i6(a,b){this.a=a
this.b=b},
i7:function i7(){this.c=this.b=null},
i8:function i8(){this.b=null}},T={co:function co(){},cp:function cp(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hC:function hC(a){var _=this
_.a=a
_.e=_.d=_.c=null},hD:function hD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},K={
kw:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="testCanvas",b1=null,b2="modifiers",b3=V.lu("Test 033"),b4=W.j8()
b4.className="pageLargeCanvas"
b4.id=b0
b3.a.appendChild(b4)
u=[P.o]
b3.d6(H.c(["Test of a sterioscopic scene."],u))
b3.d6(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(b0)
if(t==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.lw(t,!0,!0,!0,!1)
r=F.jk()
F.cK(r,b1,b1,1,1,1,0,0,1)
F.cK(r,b1,b1,1,1,0,1,0,3)
F.cK(r,b1,b1,1,1,0,0,1,2)
F.cK(r,b1,b1,1,1,-1,0,0,0)
F.cK(r,b1,b1,1,1,0,-1,0,0)
F.cK(r,b1,b1,1,1,0,0,-1,3)
r.aq()
q=E.fd(r)
p=E.fd(b1)
for(o=-1.6;o<=1.7;o+=0.8)for(n=-1.6;n<=1.7;n+=0.8)for(m=-1.6;m<=1.7;m+=0.8){l=new V.a6(1,0,0,o,0,1,0,n,0,0,1,m,0,0,0,1).q(0,new V.a6(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
k=E.fd(b1)
b3=new U.c4()
b3.sL(0,l)
k.sdM(b3)
b3=k.y
u=H.w(b3,0)
H.D(q,u)
j=[u]
if(H.x(b3.aP(H.c([q],j)))){i=b3.a
h=i.length
C.a.h(i,q)
u=H.j(H.c([q],j),"$id",[u],"$ad")
b3=b3.c
if(b3!=null)b3.$2(h,u)}b3=p.y
u=H.w(b3,0)
H.D(k,u)
j=[u]
if(H.x(b3.aP(H.c([k],j)))){i=b3.a
h=i.length
C.a.h(i,k)
u=H.j(H.c([k],j),"$id",[u],"$ad")
b3=b3.c
if(b3!=null)b3.$2(h,u)}}g=s.f.dJ("../resources/diceColor")
f=new O.dh()
f.sey(O.eY(V.a6))
f.e.aK(f.gf3(),f.gf5())
b3=new O.aO(f,"emission")
b3.c=C.c
b3.f=new V.Z(0,0,0)
f.f=b3
b3=new O.aO(f,"ambient")
b3.c=C.c
b3.f=new V.Z(0,0,0)
f.r=b3
b3=new O.aO(f,"diffuse")
b3.c=C.c
b3.f=new V.Z(0,0,0)
f.x=b3
b3=new O.aO(f,"invDiffuse")
b3.c=C.c
b3.f=new V.Z(0,0,0)
f.y=b3
b3=new O.fL(f,"specular")
b3.c=C.c
b3.f=new V.Z(0,0,0)
b3.ch=100
f.z=b3
b3=new O.fI(f,"bump")
b3.c=C.c
f.Q=b3
f.ch=null
b3=new O.aO(f,"reflect")
b3.c=C.c
b3.f=new V.Z(0,0,0)
f.cx=b3
b3=new O.fK(f,"refract")
b3.c=C.c
b3.f=new V.Z(0,0,0)
b3.ch=1
f.cy=b3
b3=new O.fH(f,"alpha")
b3.c=C.c
b3.f=1
f.db=b3
b3=new D.dc()
b3.bv(D.a_)
b3.seG(H.c([],[D.b3]))
b3.sfT(H.c([],[D.dq]))
b3.shb(H.c([],[D.dw]))
b3.shn(H.c([],[D.dA]))
b3.sho(H.c([],[D.dB]))
b3.shp(H.c([],[D.dC]))
b3.ch=b3.Q=null
b3.cr(b3.gf_(),b3.gfE(),b3.gfI())
f.dx=b3
u=b3.Q
b3=u==null?b3.Q=D.J():u
b3.h(0,f.gfZ())
b3=f.dx
u=b3.ch
b3=u==null?b3.ch=D.J():u
b3.h(0,f.gaF())
f.dy=null
b3=f.dx
u=U.cX(V.jS(-1,-1,-1,b1))
b3.h(0,D.jM(new V.Z(1,0.9,0.9),u))
b3=f.dx
u=U.cX(V.jS(1,1,2,b1))
b3.h(0,D.jM(new V.Z(0.2,0.2,0.35),u))
b3=f.r
b3.saj(0,new V.Z(0.2,0.2,0.2))
f.r.sb0(g)
b3=f.x
b3.saj(0,new V.Z(0.8,0.8,0.8))
f.x.sb0(g)
b3=f.z
b3.saj(0,new V.Z(0.7,0.7,0.7))
b3=f.z
if(b3.c===C.c){b3.c=C.f
b3.bu()
b3.bR(100)
u=b3.a
u.a=null
u.O(b1)}b3.bR(10)
f.Q.sb0(s.f.dJ("../resources/diceBumpMap"))
e=U.jb(b1)
b3=s.r
u=new U.dN()
j=U.j9()
j.scp(0,!0)
j.scg(6.283185307179586)
j.scj(0)
j.sa4(0,0)
j.sci(100)
j.sP(0)
j.sc2(0.5)
u.b=j
i=u.gaC()
j.gm().h(0,i)
j=U.j9()
j.scp(0,!0)
j.scg(6.283185307179586)
j.scj(0)
j.sa4(0,0)
j.sci(100)
j.sP(0)
j.sc2(0.5)
u.c=j
j.gm().h(0,i)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
d=new X.an(!1,!1,!1)
c=u.d
u.d=d
j=[X.an]
i=new D.E(b2,c,d,j)
i.b=!0
u.J(i)
i=u.f
if(i!==!1){u.f=!1
i=new D.E("invertX",i,!1,[P.a5])
i.b=!0
u.J(i)}i=u.r
if(i!==!1){u.r=!1
i=new D.E("invertY",i,!1,[P.a5])
i.b=!0
u.J(i)}u.aS(b3)
e.h(0,u)
b3=s.r
u=new U.dM()
i=U.j9()
i.scp(0,!0)
i.scg(6.283185307179586)
i.scj(0)
i.sa4(0,0)
i.sci(100)
i.sP(0)
i.sc2(0.2)
u.b=i
i.gm().h(0,u.gaC())
u.c=null
u.d=!1
u.e=2.5
u.r=4
u.x=u.y=!1
u.z=0
u.Q=null
u.ch=0
u.cy=u.cx=null
d=new X.an(!0,!1,!1)
c=u.c
u.c=d
i=new D.E(b2,c,d,j)
i.b=!0
u.J(i)
u.aS(b3)
e.h(0,u)
b3=s.r
u=new U.dO()
u.c=0.01
u.e=u.d=0
d=new X.an(!1,!1,!1)
u.b=d
j=new D.E(b2,b1,d,j)
j.b=!0
u.J(j)
u.aS(b3)
e.h(0,u)
e.h(0,U.cX(V.ji(0,0,6)))
b=X.fp(b1)
if(b.b){b.b=!1
b3=new D.E("clearColor",!0,!1,[P.a5])
b3.b=!0
b.ab(b3)}b3=s.f.dK("../resources/maskonaive",".jpg")
a=new M.cZ()
a.saT(b1)
a.saY(0,b1)
a.saZ(b1)
u=E.fd(b1)
r=F.jk()
j=r.a
i=new V.M(-1,-1,1)
i=i.t(0,Math.sqrt(i.A(i)))
a0=j.b8(new V.bb(1,2,4,6),new V.aw(1,0,0,1),new V.ah(-1,-1,0),new V.a4(0,1),i,b1)
j=r.a
i=new V.M(1,-1,1)
i=i.t(0,Math.sqrt(i.A(i)))
a1=j.b8(new V.bb(0,3,4,6),new V.aw(0,0,1,1),new V.ah(1,-1,0),new V.a4(1,1),i,b1)
j=r.a
i=new V.M(1,1,1)
i=i.t(0,Math.sqrt(i.A(i)))
a2=j.b8(new V.bb(0,2,5,6),new V.aw(0,1,0,1),new V.ah(1,1,0),new V.a4(1,0),i,b1)
j=r.a
i=V.ba()
a3=new V.M(-1,1,1)
a3=a3.t(0,Math.sqrt(a3.A(a3)))
a4=j.b8(new V.bb(0,2,4,7),new V.aw(1,1,0,1),new V.ah(-1,1,0),i,a3,b1)
r.d.hP(H.c([a0,a1,a2,a4],[F.ap]))
r.aq()
u.sct(0,r)
a.d=u
a.e=null
u=new O.du()
u.b=1.0471975511965976
u.d=new V.Z(1,1,1)
c=u.c
u.c=b3
b3.gm().h(0,u.gaF())
b3=new D.E("boxTexture",c,u.c,[T.cp])
b3.b=!0
u.O(b3)
a.saZ(u)
a5=new M.d3()
a5.seB(0,O.eY(E.ag))
a5.d.aK(a5.gf9(),a5.gfb())
a5.x=a5.r=a5.f=a5.e=null
a6=X.fp(b1)
a5.saT(b1)
a5.saY(0,a6)
a5.saZ(b1)
a5.saZ(f)
a5.d.h(0,p)
b3=M.ax
u=H.c([a,a5],[b3])
j=new M.dy()
i=U.cX(b1)
j.a=i
a3=U.cX(b1)
j.b=a3
a7=U.a3
a8=[a7]
i=U.jb(H.c([null,i],a8))
j.c=i
a8=U.jb(H.c([null,a3],a8))
j.d=a8
j.e=X.jj(i)
j.f=X.jj(a8)
j.r=V.h7(0,0,0.5,1)
j.x=V.h7(0.5,0,0.5,1)
j.sfS(O.eY(b3))
j.z.aK(j.gf1(),j.gfK())
j.z.aR(0,u)
j.Q=0.1
j.ch=12
j.cy=j.cx=null
b3=j.c.a
if(0>=b3.length)return H.i(b3,0)
if(!J.X(b3[0],e)){b3=j.c
i=b3.a
if(0>=i.length)return H.i(i,0)
c=i[0]
b3.V(0,0,e)
j.d.V(0,0,e)
a7=new D.E("cameraMover",c,e,[a7])
a7.b=!0
j.S(a7)}b3=j.y
if(b3!==b){if(b3!=null)b3.gm().N(0,j.gR())
c=j.y
j.y=b
b.gm().h(0,j.gR())
b3=new D.E("target",c,j.y,[X.bM])
b3.b=!0
j.S(b3)}j.z.aR(0,u)
j.Q=0.1
j.ch=12
a9=Math.atan2(0.1,12)
b3=j.a
u=j.Q
if(typeof u!=="number")return u.K()
b3.sL(0,V.ji(-u,0,0).q(0,V.jh(a9)))
j.b.sL(0,V.ji(j.Q,0,0).q(0,V.jh(-a9)))
b3=s.d
if(b3!==j){if(b3!=null)b3.gm().N(0,s.gcC())
s.d=j
j.gm().h(0,s.gcC())
s.cD()}V.mg(s)}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jf.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gF:function(a){return H.cj(a)},
i:function(a){return"Instance of '"+H.bI(a)+"'"}}
J.ft.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$ia5:1}
J.d8.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.da.prototype={
gF:function(a){return 0},
i:function(a){return String(a)}}
J.h2.prototype={}
J.dI.prototype={}
J.bq.prototype={
i:function(a){var u=a[$.kE()]
if(u==null)return this.e6(a)
return"JavaScript function for "+H.l(J.ar(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ija:1}
J.aL.prototype={
h:function(a,b){H.D(b,H.w(a,0))
if(!!a.fixed$length)H.t(P.ao("add"))
a.push(b)},
N:function(a,b){var u
if(!!a.fixed$length)H.t(P.ao("remove"))
for(u=0;u<a.length;++u)if(J.X(a[u],b)){a.splice(u,1)
return!0}return!1},
aR:function(a,b){var u,t
H.j(b,"$id",[H.w(a,0)],"$ad")
if(!!a.fixed$length)H.t(P.ao("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.A)(b),++t)a.push(b[t])},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.c3(a))}},
v:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.V(t,u,H.l(a[u]))
return t.join(b)},
i6:function(a){return this.v(a,"")},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
e4:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.aT(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.aT(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.w(a,0)])
return H.c(a.slice(b,c),[H.w(a,0)])},
gcd:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.l6())},
ar:function(a,b){var u
for(u=0;u<a.length;++u)if(J.X(a[u],b))return!0
return!1},
i:function(a){return P.jc(a,"[","]")},
gZ:function(a){return new J.ae(a,a.length,[H.w(a,0)])},
gF:function(a){return H.cj(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.t(P.ao("set length"))
if(b<0)throw H.h(P.aT(b,0,null,"newLength",null))
a.length=b},
V:function(a,b,c){H.D(c,H.w(a,0))
if(!!a.immutable$list)H.t(P.ao("indexed set"))
if(b>=a.length||b<0)throw H.h(H.cO(a,b))
a[b]=c},
$id:1,
$ib:1}
J.je.prototype={}
J.ae.prototype={
gT:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.A(s))
u=t.c
if(u>=r){t.scR(null)
return!1}t.scR(s[u]);++t.c
return!0},
scR:function(a){this.d=H.D(a,H.w(this,0))},
$iaK:1}
J.d9.prototype={
iz:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.ao(""+a+".toInt()"))},
ca:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.ao(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ao(""+a+".round()"))},
dY:function(a,b){var u,t
if(b>20)throw H.h(P.aT(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
e2:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
e8:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d3(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.d3(a,b)},
d3:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.ao("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
b6:function(a,b){var u
if(a>0)u=this.ha(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ha:function(a,b){return b>31?0:a>>>b},
$iy:1,
$ia8:1}
J.d7.prototype={$iB:1}
J.d6.prototype={}
J.cb.prototype={
c0:function(a,b){if(b<0)throw H.h(H.cO(a,b))
if(b>=a.length)H.t(H.cO(a,b))
return a.charCodeAt(b)},
b3:function(a,b){if(b>=a.length)throw H.h(H.cO(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.h(P.j6(b,null,null))
return a+b},
cw:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.h6(b,null))
if(b>c)throw H.h(P.h6(b,null))
if(c>a.length)throw H.h(P.h6(c,null))
return a.substring(b,c)},
cv:function(a,b){return this.cw(a,b,null)},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.C)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a9:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
i:function(a){return a},
gF:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ijV:1,
$io:1}
H.a0.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.j.c0(this.a,b)},
$adK:function(){return[P.B]},
$au:function(){return[P.B]},
$ad:function(){return[P.B]},
$ab:function(){return[P.B]}}
H.fb.prototype={}
H.de.prototype={
gT:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=J.jz(s),q=r.gk(s)
if(t.b!==q)throw H.h(P.c3(s))
u=t.c
if(u>=q){t.saM(null)
return!1}t.saM(r.C(s,u));++t.c
return!0},
saM:function(a){this.d=H.D(a,H.w(this,0))},
$iaK:1}
H.fF.prototype={
gZ:function(a){return new H.fG(J.bW(this.a),this.b,this.$ti)},
gk:function(a){return J.bX(this.a)},
C:function(a,b){return this.b.$1(J.jI(this.a,b))},
$ad:function(a,b){return[b]}}
H.fG.prototype={
B:function(){var u=this,t=u.b
if(t.B()){u.saM(u.c.$1(t.gT(t)))
return!0}u.saM(null)
return!1},
gT:function(a){return this.a},
saM:function(a){this.a=H.D(a,H.w(this,1))},
$aaK:function(a,b){return[b]}}
H.ic.prototype={
gZ:function(a){return new H.id(J.bW(this.a),this.b,this.$ti)}}
H.id.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(H.x(t.$1(u.gT(u))))return!0
return!1},
gT:function(a){var u=this.a
return u.gT(u)}}
H.bF.prototype={}
H.dK.prototype={}
H.dJ.prototype={}
H.hL.prototype={
a8:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.fZ.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fv.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.l(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.l(t.a)+")"
return s+r+"' on '"+u+"' ("+H.l(t.a)+")"}}
H.hX.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j5.prototype={
$1:function(a){if(!!J.Y(a).$ibl)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.en.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iak:1}
H.c1.prototype={
i:function(a){return"Closure '"+H.bI(this).trim()+"'"},
$ija:1,
giD:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hz.prototype={}
H.hr.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bU(u)+"'"}}
H.bY.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bY))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gF:function(a){var u,t=this.c
if(t==null)u=H.cj(this.a)
else u=typeof t!=="object"?J.bA(t):H.cj(t)
return(u^H.cj(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bI(u)+"'")}}
H.hN.prototype={
i:function(a){return this.a}}
H.eW.prototype={
i:function(a){return this.a}}
H.he.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.ie.prototype={
i:function(a){return"Assertion failed: "+P.d4(this.a)}}
H.aM.prototype={
gk:function(a){return this.a},
gau:function(a){return new H.dd(this,[H.w(this,0)])},
de:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cO(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cO(t,b)}else return s.i4(b)},
i4:function(a){var u=this.d
if(u==null)return!1
return this.cb(this.bB(u,J.bA(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b4(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b4(r,b)
s=t==null?null:t.b
return s}else return q.i5(b)},
i5:function(a){var u,t,s=this.d
if(s==null)return
u=this.bB(s,J.bA(a)&0x3ffffff)
t=this.cb(u,a)
if(t<0)return
return u[t].b},
V:function(a,b,c){var u,t,s,r,q,p,o=this
H.D(b,H.w(o,0))
H.D(c,H.w(o,1))
if(typeof b==="string"){u=o.b
o.cG(u==null?o.b=o.bL():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cG(t==null?o.c=o.bL():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bL()
r=J.bA(b)&0x3ffffff
q=o.bB(s,r)
if(q==null)o.bS(s,r,[o.bM(b,c)])
else{p=o.cb(q,b)
if(p>=0)q[p].b=c
else q.push(o.bM(b,c))}}},
M:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.w(s,0),H.w(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.c3(s))
u=u.c}},
cG:function(a,b,c){var u,t=this
H.D(b,H.w(t,0))
H.D(c,H.w(t,1))
u=t.b4(a,b)
if(u==null)t.bS(a,b,t.bM(b,c))
else u.b=c},
bM:function(a,b){var u=this,t=new H.fy(H.D(a,H.w(u,0)),H.D(b,H.w(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cb:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.X(a[t].a,b))return t
return-1},
i:function(a){return P.jQ(this)},
b4:function(a,b){return a[b]},
bB:function(a,b){return a[b]},
bS:function(a,b,c){a[b]=c},
eF:function(a,b){delete a[b]},
cO:function(a,b){return this.b4(a,b)!=null},
bL:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bS(t,u,t)
this.eF(t,u)
return t}}
H.fy.prototype={}
H.dd.prototype={
gk:function(a){return this.a.a},
gZ:function(a){var u=this.a,t=new H.fz(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fz.prototype={
gT:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.c3(t))
else{t=u.c
if(t==null){u.scF(null)
return!1}else{u.scF(t.a)
u.c=u.c.c
return!0}}},
scF:function(a){this.d=H.D(a,H.w(this,0))},
$iaK:1}
H.iZ.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.j_.prototype={
$2:function(a,b){return this.a(a,b)},
$S:28}
H.j0.prototype={
$1:function(a){return this.a(H.S(a))},
$S:30}
H.fu.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ijV:1}
H.cg.prototype={$imE:1}
H.dk.prototype={
gk:function(a){return a.length},
$iF:1,
$aF:function(){}}
H.cf.prototype={
j:function(a,b){H.bw(b,a,a.length)
return a[b]},
$abF:function(){return[P.y]},
$au:function(){return[P.y]},
$id:1,
$ad:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.dl.prototype={
$abF:function(){return[P.B]},
$au:function(){return[P.B]},
$id:1,
$ad:function(){return[P.B]},
$ib:1,
$ab:function(){return[P.B]}}
H.fT.prototype={
j:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.fU.prototype={
j:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.fV.prototype={
j:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.fW.prototype={
j:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.fX.prototype={
j:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.dm.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bw(b,a,a.length)
return a[b]},
$imF:1}
H.fY.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.cC.prototype={}
H.cD.prototype={}
H.cE.prototype={}
H.cF.prototype={}
P.ih.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.ig.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.ii.prototype={
$0:function(){this.a.$0()},
$S:2}
P.ij.prototype={
$0:function(){this.a.$0()},
$S:2}
P.et.prototype={
eo:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bQ(new P.iO(this,b),0),a)
else throw H.h(P.ao("`setTimeout()` not found."))},
ep:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bQ(new P.iN(this,a,Date.now(),b),0),a)
else throw H.h(P.ao("Periodic timer."))},
$iaY:1}
P.iO.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.iN.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.h.e8(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b2.prototype={
i8:function(a){if(this.c!==6)return!0
return this.b.b.cn(H.n(this.d,{func:1,ret:P.a5,args:[P.O]}),a.a,P.a5,P.O)},
i2:function(a){var u=this.e,t=P.O,s={futureOr:1,type:H.w(this,1)},r=this.b.b
if(H.eJ(u,{func:1,args:[P.O,P.ak]}))return H.jy(r.iu(u,a.a,a.b,null,t,P.ak),s)
else return H.jy(r.cn(H.n(u,{func:1,args:[P.O]}),a.a,null,t),s)}}
P.au.prototype={
dX:function(a,b,c){var u,t,s,r=H.w(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.W
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.lM(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.au($.W,[c])
s=b==null?1:3
this.cH(new P.b2(t,s,a,b,[r,c]))
return t},
iy:function(a,b){return this.dX(a,null,b)},
cH:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ib2")
t.c=a}else{if(s===2){u=H.k(t.c,"$iau")
s=u.a
if(s<4){u.cH(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.iV(null,null,s,H.n(new P.ir(t,a),{func:1,ret:-1}))}},
d_:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ib2")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iau")
u=q.a
if(u<4){q.d_(a)
return}p.a=u
p.c=q.c}o.a=p.b5(a)
u=p.b
u.toString
P.iV(null,null,u,H.n(new P.iv(o,p),{func:1,ret:-1}))}},
bQ:function(){var u=H.k(this.c,"$ib2")
this.c=null
return this.b5(u)},
b5:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cK:function(a){var u,t,s=this,r=H.w(s,0)
H.jy(a,{futureOr:1,type:r})
u=s.$ti
if(H.jv(a,"$ic8",u,"$ac8"))if(H.jv(a,"$iau",u,null))P.kf(a,s)
else P.lD(a,s)
else{t=s.bQ()
H.D(a,r)
s.a=4
s.c=a
P.cA(s,t)}},
cL:function(a,b){var u,t=this
H.k(b,"$iak")
u=t.bQ()
t.a=8
t.c=new P.af(a,b)
P.cA(t,u)},
$ic8:1}
P.ir.prototype={
$0:function(){P.cA(this.a,this.b)},
$S:2}
P.iv.prototype={
$0:function(){P.cA(this.b,this.a.a)},
$S:2}
P.is.prototype={
$1:function(a){var u=this.a
u.a=0
u.cK(a)},
$S:14}
P.it.prototype={
$2:function(a,b){H.k(b,"$iak")
this.a.cL(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.iu.prototype={
$0:function(){this.a.cL(this.b,this.c)},
$S:2}
P.iy.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dW(H.n(s.d,{func:1}),null)}catch(r){u=H.bz(r)
t=H.bS(r)
if(o.d){s=H.k(o.a.a.c,"$iaf").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iaf")
else q.b=new P.af(u,t)
q.a=!0
return}if(!!J.Y(n).$ic8){if(n instanceof P.au&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iaf")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.iy(new P.iz(p),null)
s.a=!1}},
$S:3}
P.iz.prototype={
$1:function(a){return this.a},
$S:35}
P.ix.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.w(s,0)
q=H.D(n.c,r)
p=H.w(s,1)
n.a.b=s.b.b.cn(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bz(o)
t=H.bS(o)
s=n.a
s.b=new P.af(u,t)
s.a=!0}},
$S:3}
P.iw.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iaf")
r=m.c
if(H.x(r.i8(u))&&r.e!=null){q=m.b
q.b=r.i2(u)
q.a=!1}}catch(p){t=H.bz(p)
s=H.bS(p)
r=H.k(m.a.a.c,"$iaf")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.af(t,s)
n.a=!0}},
$S:3}
P.dS.prototype={}
P.hu.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.au($.W,[P.B])
r.a=0
u=H.w(s,0)
t=H.n(new P.hw(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.hx(r,q),{func:1,ret:-1})
W.a7(s.a,s.b,t,!1,u)
return q}}
P.hw.prototype={
$1:function(a){H.D(a,H.w(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.K,args:[H.w(this.b,0)]}}}
P.hx.prototype={
$0:function(){this.b.cK(this.a.a)},
$S:2}
P.cn.prototype={}
P.hv.prototype={}
P.aY.prototype={}
P.af.prototype={
i:function(a){return H.l(this.a)},
$ibl:1}
P.iQ.prototype={$imS:1}
P.iU.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dn():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.i(0)
throw u},
$S:2}
P.iG.prototype={
iv:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.W){a.$0()
return}P.kj(r,r,this,a,-1)}catch(s){u=H.bz(s)
t=H.bS(s)
P.iT(r,r,this,u,H.k(t,"$iak"))}},
iw:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.k===$.W){a.$1(b)
return}P.kk(r,r,this,a,b,-1,c)}catch(s){u=H.bz(s)
t=H.bS(s)
P.iT(r,r,this,u,H.k(t,"$iak"))}},
hS:function(a,b){return new P.iI(this,H.n(a,{func:1,ret:b}),b)},
bX:function(a){return new P.iH(this,H.n(a,{func:1,ret:-1}))},
d8:function(a,b){return new P.iJ(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
dW:function(a,b){H.n(a,{func:1,ret:b})
if($.W===C.k)return a.$0()
return P.kj(null,null,this,a,b)},
cn:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.W===C.k)return a.$1(b)
return P.kk(null,null,this,a,b,c,d)},
iu:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.W===C.k)return a.$2(b,c)
return P.lN(null,null,this,a,b,c,d,e,f)}}
P.iI.prototype={
$0:function(){return this.a.dW(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iH.prototype={
$0:function(){return this.a.iv(this.b)},
$S:3}
P.iJ.prototype={
$1:function(a){var u=this.c
return this.a.iw(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iD.prototype={
gZ:function(a){return P.kh(this,this.r,H.w(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.D(b,H.w(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cI(u==null?s.b=P.jq():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cI(t==null?s.c=P.jq():t,b)}else return s.es(0,b)},
es:function(a,b){var u,t,s,r=this
H.D(b,H.w(r,0))
u=r.d
if(u==null)u=r.d=P.jq()
t=r.cM(b)
s=u[t]
if(s==null)u[t]=[r.bx(b)]
else{if(r.cS(s,b)>=0)return!1
s.push(r.bx(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fW(this.c,b)
else return this.fV(0,b)},
fV:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.eO(r,b)
t=s.cS(u,b)
if(t<0)return!1
s.d4(u.splice(t,1)[0])
return!0},
cI:function(a,b){H.D(b,H.w(this,0))
if(H.k(a[b],"$icB")!=null)return!1
a[b]=this.bx(b)
return!0},
fW:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$icB")
if(u==null)return!1
this.d4(u)
delete a[b]
return!0},
cU:function(){this.r=1073741823&this.r+1},
bx:function(a){var u,t=this,s=new P.cB(H.D(a,H.w(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cU()
return s},
d4:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cU()},
cM:function(a){return J.bA(a)&1073741823},
eO:function(a,b){return a[this.cM(b)]},
cS:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.X(a[t].a,b))return t
return-1}}
P.cB.prototype={}
P.iE.prototype={
gT:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.c3(t))
else{t=u.c
if(t==null){u.scJ(null)
return!1}else{u.scJ(H.D(t.a,H.w(u,0)))
u.c=u.c.b
return!0}}},
scJ:function(a){this.d=H.D(a,H.w(this,0))},
$iaK:1}
P.fA.prototype={$id:1,$ib:1}
P.u.prototype={
gZ:function(a){return new H.de(a,this.gk(a),[H.cP(this,a,"u",0)])},
C:function(a,b){return this.j(a,b)},
iB:function(a,b){var u,t=this,s=H.c([],[H.cP(t,a,"u",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.V(s,u,t.j(a,u))
return s},
iA:function(a){return this.iB(a,!0)},
i:function(a){return P.jc(a,"[","]")}}
P.fD.prototype={}
P.fE.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.l(a)
t.a=u+": "
t.a+=H.l(b)},
$S:12}
P.aa.prototype={
M:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.cP(s,a,"aa",0),H.cP(s,a,"aa",1)]})
for(u=J.bW(s.gau(a));u.B();){t=u.gT(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.bX(this.gau(a))},
i:function(a){return P.jQ(a)},
$iN:1}
P.iK.prototype={
i:function(a){return P.jc(this,"{","}")},
C:function(a,b){var u,t,s,r=this
P.k0(b,"index")
for(u=P.kh(r,r.r,H.w(r,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.h(P.U(b,r,"index",null,t))},
$id:1,
$ik3:1}
P.e6.prototype={}
P.c2.prototype={}
P.cY.prototype={}
P.fc.prototype={
$ac2:function(){return[P.o,[P.b,P.B]]}}
P.i_.prototype={}
P.i0.prototype={
hU:function(a){var u,t,s=P.k1(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iP(u)
if(t.eN(a,0,s)!==s)t.d5(C.j.c0(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lI(0,t.b,u.length)))},
$acY:function(){return[P.o,[P.b,P.B]]}}
P.iP.prototype={
d5:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.i(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.i(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.i(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.i(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.i(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.i(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.i(s,r)
s[r]=128|a&63
return!1}},
eN:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.j.c0(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.j.b3(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d5(r,C.j.b3(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.i(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.i(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.i(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.i(u,q)
u[q]=128|r&63}}return s}}
P.a5.prototype={}
P.as.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.as&&this.a===b.a&&!0},
gF:function(a){var u=this.a
return(u^C.h.b6(u,30))&1073741823},
i:function(a){var u=this,t=P.l1(H.ln(u)),s=P.d_(H.ll(u)),r=P.d_(H.lh(u)),q=P.d_(H.li(u)),p=P.d_(H.lk(u)),o=P.d_(H.lm(u)),n=P.l2(H.lj(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.y.prototype={}
P.bk.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bk&&this.a===b.a},
gF:function(a){return C.h.gF(this.a)},
i:function(a){var u,t,s,r=new P.fa(),q=this.a
if(q<0)return"-"+new P.bk(0-q).i(0)
u=r.$1(C.h.a0(q,6e7)%60)
t=r.$1(C.h.a0(q,1e6)%60)
s=new P.f9().$1(q%1e6)
return""+C.h.a0(q,36e8)+":"+H.l(u)+":"+H.l(t)+"."+H.l(s)}}
P.f9.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:13}
P.fa.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:13}
P.bl.prototype={}
P.eO.prototype={
i:function(a){return"Assertion failed"}}
P.dn.prototype={
i:function(a){return"Throw of null."}}
P.aD.prototype={
gbz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gby:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbz()+o+u
if(!q.a)return t
s=q.gby()
r=P.d4(q.b)
return t+s+": "+r}}
P.bJ.prototype={
gbz:function(){return"RangeError"},
gby:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.l(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.l(s)
else if(t>s)u=": Not in range "+H.l(s)+".."+H.l(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.l(s)}return u}}
P.fs.prototype={
gbz:function(){return"RangeError"},
gby:function(){var u,t=H.ad(this.b)
if(typeof t!=="number")return t.aA()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.l(u)},
gk:function(a){return this.f}}
P.hY.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hW.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hq.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f_.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.d4(u)+"."}}
P.h1.prototype={
i:function(a){return"Out of Memory"},
$ibl:1}
P.dx.prototype={
i:function(a){return"Stack Overflow"},
$ibl:1}
P.f4.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e_.prototype={
i:function(a){return"Exception: "+this.a}}
P.fn.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.j.cw(s,0,75)+"...":s
return t+"\n"+r}}
P.B.prototype={}
P.d.prototype={
gk:function(a){var u,t=this.gZ(this)
for(u=0;t.B();)++u
return u},
C:function(a,b){var u,t,s
P.k0(b,"index")
for(u=this.gZ(this),t=0;u.B();){s=u.gT(u)
if(b===t)return s;++t}throw H.h(P.U(b,this,"index",null,t))},
i:function(a){return P.l5(this,"(",")")}}
P.aK.prototype={}
P.b.prototype={$id:1}
P.N.prototype={}
P.K.prototype={
gF:function(a){return P.O.prototype.gF.call(this,this)},
i:function(a){return"null"}}
P.a8.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
p:function(a,b){return this===b},
gF:function(a){return H.cj(this)},
i:function(a){return"Instance of '"+H.bI(this)+"'"},
toString:function(){return this.i(this)}}
P.ak.prototype={}
P.o.prototype={$ijV:1}
P.bt.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.q.prototype={}
W.eK.prototype={
gk:function(a){return a.length}}
W.eM.prototype={
i:function(a){return String(a)}}
W.eN.prototype={
i:function(a){return String(a)}}
W.cT.prototype={}
W.bD.prototype={
cq:function(a,b,c){if(c!=null)return a.getContext(b,P.lV(c))
return a.getContext(b)},
e1:function(a,b){return this.cq(a,b,null)},
$ibD:1}
W.c0.prototype={$ic0:1}
W.bj.prototype={
gk:function(a){return a.length}}
W.c5.prototype={$ic5:1}
W.f0.prototype={
gk:function(a){return a.length}}
W.P.prototype={$iP:1}
W.c6.prototype={
gk:function(a){return a.length}}
W.f1.prototype={}
W.aF.prototype={}
W.aG.prototype={}
W.f2.prototype={
gk:function(a){return a.length}}
W.f3.prototype={
gk:function(a){return a.length}}
W.f5.prototype={
gk:function(a){return a.length}}
W.d0.prototype={$id0:1}
W.f6.prototype={
i:function(a){return String(a)}}
W.d1.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[[P.aj,P.a8]]},
$au:function(){return[[P.aj,P.a8]]},
$id:1,
$ad:function(){return[[P.aj,P.a8]]},
$ib:1,
$ab:function(){return[[P.aj,P.a8]]},
$az:function(){return[[P.aj,P.a8]]}}
W.d2.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaz(a))+" x "+H.l(this.gat(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.Y(b)
if(!u.$iaj)return!1
return a.left===u.gbo(b)&&a.top===u.gbs(b)&&this.gaz(a)===u.gaz(b)&&this.gat(a)===u.gat(b)},
gF:function(a){return W.kg(C.i.gF(a.left),C.i.gF(a.top),C.i.gF(this.gaz(a)),C.i.gF(this.gat(a)))},
gd9:function(a){return a.bottom},
gat:function(a){return a.height},
gbo:function(a){return a.left},
gbr:function(a){return a.right},
gbs:function(a){return a.top},
gaz:function(a){return a.width},
$iaj:1,
$aaj:function(){return[P.a8]}}
W.f7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[P.o]},
$au:function(){return[P.o]},
$id:1,
$ad:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$az:function(){return[P.o]}}
W.f8.prototype={
gk:function(a){return a.length}}
W.il.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.i(u,b)
return H.k(u[b],"$ia1")},
h:function(a,b){this.a.appendChild(b)
return b},
gZ:function(a){var u=this.iA(this)
return new J.ae(u,u.length,[H.w(u,0)])},
$au:function(){return[W.a1]},
$ad:function(){return[W.a1]},
$ab:function(){return[W.a1]}}
W.a1.prototype={
gdc:function(a){return new W.il(a,a.children)},
gdd:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.aA()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aA()
if(r<0)r=-r*0
return new P.aj(u,t,s,r,[P.a8])},
i:function(a){return a.localName},
$ia1:1}
W.m.prototype={$im:1}
W.e.prototype={
hO:function(a,b,c,d){H.n(c,{func:1,args:[W.m]})
if(c!=null)this.eu(a,b,c,!1)},
eu:function(a,b,c,d){return a.addEventListener(b,H.bQ(H.n(c,{func:1,args:[W.m]}),1),!1)},
$ie:1}
W.aI.prototype={$iaI:1}
W.fh.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aI]},
$au:function(){return[W.aI]},
$id:1,
$ad:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$az:function(){return[W.aI]}}
W.fi.prototype={
gk:function(a){return a.length}}
W.fm.prototype={
gk:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.fq.prototype={
gk:function(a){return a.length}}
W.bG.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.G]},
$au:function(){return[W.G]},
$id:1,
$ad:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ibG:1,
$az:function(){return[W.G]}}
W.bm.prototype={$ibm:1,
gdf:function(a){return a.data}}
W.ca.prototype={$ica:1}
W.aN.prototype={$iaN:1}
W.fB.prototype={
i:function(a){return String(a)}}
W.fM.prototype={
gk:function(a){return a.length}}
W.fN.prototype={
j:function(a,b){return P.bd(a.get(H.S(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bd(t.value[1]))}},
gau:function(a){var u=H.c([],[P.o])
this.M(a,new W.fO(u))
return u},
gk:function(a){return a.size},
$aaa:function(){return[P.o,null]},
$iN:1,
$aN:function(){return[P.o,null]}}
W.fO.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.fP.prototype={
j:function(a,b){return P.bd(a.get(H.S(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bd(t.value[1]))}},
gau:function(a){var u=H.c([],[P.o])
this.M(a,new W.fQ(u))
return u},
gk:function(a){return a.size},
$aaa:function(){return[P.o,null]},
$iN:1,
$aN:function(){return[P.o,null]}}
W.fQ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aQ.prototype={$iaQ:1}
W.fR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aQ]},
$au:function(){return[W.aQ]},
$id:1,
$ad:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$az:function(){return[W.aQ]}}
W.a9.prototype={$ia9:1}
W.ik.prototype={
gZ:function(a){var u=this.a.childNodes
return new W.d5(u,u.length,[H.cP(C.J,u,"z",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
$au:function(){return[W.G]},
$ad:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.e5(a):u},
$iG:1}
W.ch.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.G]},
$au:function(){return[W.G]},
$id:1,
$ad:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$az:function(){return[W.G]}}
W.aS.prototype={$iaS:1,
gk:function(a){return a.length}}
W.h3.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aS]},
$au:function(){return[W.aS]},
$id:1,
$ad:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$az:function(){return[W.aS]}}
W.hc.prototype={
j:function(a,b){return P.bd(a.get(H.S(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bd(t.value[1]))}},
gau:function(a){var u=H.c([],[P.o])
this.M(a,new W.hd(u))
return u},
gk:function(a){return a.size},
$aaa:function(){return[P.o,null]},
$iN:1,
$aN:function(){return[P.o,null]}}
W.hd.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hf.prototype={
gk:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.hn.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aU]},
$au:function(){return[W.aU]},
$id:1,
$ad:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$az:function(){return[W.aU]}}
W.aV.prototype={$iaV:1}
W.ho.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aV]},
$au:function(){return[W.aV]},
$id:1,
$ad:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$az:function(){return[W.aV]}}
W.aW.prototype={$iaW:1,
gk:function(a){return a.length}}
W.hs.prototype={
j:function(a,b){return a.getItem(H.S(b))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.o,P.o]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gau:function(a){var u=H.c([],[P.o])
this.M(a,new W.ht(u))
return u},
gk:function(a){return a.length},
$aaa:function(){return[P.o,P.o]},
$iN:1,
$aN:function(){return[P.o,P.o]}}
W.ht.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:37}
W.ay.prototype={$iay:1}
W.aX.prototype={$iaX:1}
W.az.prototype={$iaz:1}
W.hA.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.az]},
$au:function(){return[W.az]},
$id:1,
$ad:function(){return[W.az]},
$ib:1,
$ab:function(){return[W.az]},
$az:function(){return[W.az]}}
W.hB.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aX]},
$au:function(){return[W.aX]},
$id:1,
$ad:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$az:function(){return[W.aX]}}
W.hF.prototype={
gk:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.aA.prototype={$iaA:1}
W.hI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aZ]},
$au:function(){return[W.aZ]},
$id:1,
$ad:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$az:function(){return[W.aZ]}}
W.hJ.prototype={
gk:function(a){return a.length}}
W.bv.prototype={}
W.hZ.prototype={
i:function(a){return String(a)}}
W.ib.prototype={
gk:function(a){return a.length}}
W.b1.prototype={
ghY:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ao("deltaY is not supported"))},
ghX:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ao("deltaX is not supported"))},
$ib1:1}
W.cz.prototype={
fY:function(a,b){return a.requestAnimationFrame(H.bQ(H.n(b,{func:1,ret:-1,args:[P.a8]}),1))},
eH:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.im.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.P]},
$au:function(){return[W.P]},
$id:1,
$ad:function(){return[W.P]},
$ib:1,
$ab:function(){return[W.P]},
$az:function(){return[W.P]}}
W.dV.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.Y(b)
if(!u.$iaj)return!1
return a.left===u.gbo(b)&&a.top===u.gbs(b)&&a.width===u.gaz(b)&&a.height===u.gat(b)},
gF:function(a){return W.kg(C.i.gF(a.left),C.i.gF(a.top),C.i.gF(a.width),C.i.gF(a.height))},
gat:function(a){return a.height},
gaz:function(a){return a.width}}
W.iA.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aJ]},
$au:function(){return[W.aJ]},
$id:1,
$ad:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$az:function(){return[W.aJ]}}
W.eb.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.G]},
$au:function(){return[W.G]},
$id:1,
$ad:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$az:function(){return[W.G]}}
W.iL.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aW]},
$au:function(){return[W.aW]},
$id:1,
$ad:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$az:function(){return[W.aW]}}
W.iM.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.ay]},
$au:function(){return[W.ay]},
$id:1,
$ad:function(){return[W.ay]},
$ib:1,
$ab:function(){return[W.ay]},
$az:function(){return[W.ay]}}
W.io.prototype={}
W.jp.prototype={}
W.ip.prototype={}
W.iq.prototype={
$1:function(a){return this.a.$1(H.k(a,"$im"))},
$S:24}
W.z.prototype={
gZ:function(a){return new W.d5(a,this.gk(a),[H.cP(this,a,"z",0)])}}
W.d5.prototype={
B:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scT(J.kT(u.a,t))
u.c=t
return!0}u.scT(null)
u.c=s
return!1},
gT:function(a){return this.d},
scT:function(a){this.d=H.D(a,H.w(this,0))},
$iaK:1}
W.dU.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.cG.prototype={}
W.cH.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.eo.prototype={}
W.er.prototype={}
W.es.prototype={}
W.cI.prototype={}
W.cJ.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
P.ey.prototype={$ibm:1,
gdf:function(a){return this.a}}
P.iW.prototype={
$2:function(a,b){this.a[a]=b},
$S:12}
P.fj.prototype={
gbC:function(){var u=this.b,t=H.aq(u,"u",0),s=W.a1
return new H.fF(new H.ic(u,H.n(new P.fk(),{func:1,ret:P.a5,args:[t]}),[t]),H.n(new P.fl(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.bX(this.gbC().a)},
j:function(a,b){var u=this.gbC()
return u.b.$1(J.jI(u.a,b))},
gZ:function(a){var u=P.jP(this.gbC(),!1,W.a1)
return new J.ae(u,u.length,[H.w(u,0)])},
$au:function(){return[W.a1]},
$ad:function(){return[W.a1]},
$ab:function(){return[W.a1]}}
P.fk.prototype={
$1:function(a){return!!J.Y(H.k(a,"$iG")).$ia1},
$S:25}
P.fl.prototype={
$1:function(a){return H.f(H.k(a,"$iG"),"$ia1")},
$S:26}
P.iF.prototype={
gbr:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.C(t)
return H.D(u+t,H.w(this,0))},
gd9:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.C(t)
return H.D(u+t,H.w(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.l(u.a)+", "+H.l(u.b)+") "+H.l(u.c)+" x "+H.l(u.d)},
p:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.Y(b)
if(!!u.$iaj){t=p.a
if(t==u.gbo(b)){s=p.b
if(s==u.gbs(b)){r=p.c
if(typeof t!=="number")return t.D()
if(typeof r!=="number")return H.C(r)
q=H.w(p,0)
if(H.D(t+r,q)===u.gbr(b)){t=p.d
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.C(t)
u=H.D(s+t,q)===u.gd9(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gF:function(a){var u,t=this,s=t.a,r=J.bA(s),q=t.b,p=J.bA(q),o=t.c
if(typeof s!=="number")return s.D()
if(typeof o!=="number")return H.C(o)
u=H.w(t,0)
o=C.h.gF(H.D(s+o,u))
s=t.d
if(typeof q!=="number")return q.D()
if(typeof s!=="number")return H.C(s)
u=C.h.gF(H.D(q+s,u))
return P.lE(P.iC(P.iC(P.iC(P.iC(0,r),p),o),u))}}
P.aj.prototype={
gbo:function(a){return this.a},
gbs:function(a){return this.b},
gaz:function(a){return this.c},
gat:function(a){return this.d}}
P.b4.prototype={$ib4:1}
P.fx.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.b4]},
$id:1,
$ad:function(){return[P.b4]},
$ib:1,
$ab:function(){return[P.b4]},
$az:function(){return[P.b4]}}
P.b9.prototype={$ib9:1}
P.h_.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.b9]},
$id:1,
$ad:function(){return[P.b9]},
$ib:1,
$ab:function(){return[P.b9]},
$az:function(){return[P.b9]}}
P.h5.prototype={
gk:function(a){return a.length}}
P.hy.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.o]},
$id:1,
$ad:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$az:function(){return[P.o]}}
P.p.prototype={
gdc:function(a){return new P.fj(a,new W.ik(a))}}
P.bc.prototype={$ibc:1}
P.hK.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.bc]},
$id:1,
$ad:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$az:function(){return[P.bc]}}
P.e4.prototype={}
P.e5.prototype={}
P.ee.prototype={}
P.ef.prototype={}
P.ep.prototype={}
P.eq.prototype={}
P.ew.prototype={}
P.ex.prototype={}
P.eQ.prototype={
gk:function(a){return a.length}}
P.eR.prototype={
j:function(a,b){return P.bd(a.get(H.S(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bd(t.value[1]))}},
gau:function(a){var u=H.c([],[P.o])
this.M(a,new P.eS(u))
return u},
gk:function(a){return a.size},
$aaa:function(){return[P.o,null]},
$iN:1,
$aN:function(){return[P.o,null]}}
P.eS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.eT.prototype={
gk:function(a){return a.length}}
P.bB.prototype={}
P.h0.prototype={
gk:function(a){return a.length}}
P.dT.prototype={}
P.cU.prototype={$icU:1}
P.dr.prototype={$idr:1}
P.bK.prototype={
ix:function(a,b,c,d,e,f,g){var u,t=J.Y(g)
if(!!t.$ibm)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.lW(g))
return}if(!!t.$ica)t=!0
else t=!1
if(t){this.he(a,b,c,d,e,f,g)
return}throw H.h(P.kW("Incorrect number or type of arguments"))},
he:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
G:function(a,b,c){return a.uniform1f(b,c)},
X:function(a,b,c){return a.uniform1i(b,c)},
n:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dZ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
e_:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibK:1}
P.ds.prototype={$ids:1}
P.dz.prototype={$idz:1}
P.dH.prototype={$idH:1}
P.hp.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return P.bd(a.item(b))},
C:function(a,b){return this.j(a,b)},
$au:function(){return[[P.N,,,]]},
$id:1,
$ad:function(){return[[P.N,,,]]},
$ib:1,
$ab:function(){return[[P.N,,,]]},
$az:function(){return[[P.N,,,]]}}
P.el.prototype={}
P.em.prototype={}
O.T.prototype={
bv:function(a){var u=this
u.seT(H.c([],[a]))
u.scY(null)
u.scV(null)
u.scZ(null)},
cr:function(a,b,c){var u=this,t=H.aq(u,"T",0)
H.n(b,{func:1,ret:P.a5,args:[[P.d,t]]})
t={func:1,ret:-1,args:[P.B,[P.d,t]]}
H.n(a,t)
H.n(c,t)
u.scY(b)
u.scV(a)
u.scZ(c)},
aK:function(a,b){return this.cr(a,null,b)},
aP:function(a){var u
H.j(a,"$id",[H.aq(this,"T",0)],"$ad")
u=this.b
if(u!=null)return u.$1(a)
return!0},
bN:function(a,b){var u
H.j(b,"$id",[H.aq(this,"T",0)],"$ad")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gZ:function(a){var u=this.a
return new J.ae(u,u.length,[H.w(u,0)])},
C:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aq(s,"T",0)
H.D(b,r)
r=[r]
if(H.x(s.aP(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.bN(t,H.c([b],r))}},
aR:function(a,b){var u,t,s=this
H.j(b,"$id",[H.aq(s,"T",0)],"$ad")
if(H.x(s.aP(b))){u=s.a
t=u.length
C.a.aR(u,b)
s.bN(t,b)}},
V:function(a,b,c){var u,t,s,r=this,q=H.aq(r,"T",0)
H.D(c,q)
u=r.a
if(b>=u.length)return H.i(u,b)
t=u[b]
if(!J.X(t,c)&&H.x(r.aP(H.c([c],[q])))){C.a.V(r.a,b,c)
u=[q]
q=H.j(H.c([t],u),"$id",[q],"$ad")
s=r.d
if(s!=null)s.$2(b,q)
r.bN(b,H.c([c],u))}},
seT:function(a){this.a=H.j(a,"$ib",[H.aq(this,"T",0)],"$ab")},
scY:function(a){this.b=H.n(a,{func:1,ret:P.a5,args:[[P.d,H.aq(this,"T",0)]]})},
scV:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.B,[P.d,H.aq(this,"T",0)]]})},
scZ:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.B,[P.d,H.aq(this,"T",0)]]})},
$id:1}
O.cd.prototype={
gk:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.J():u},
aB:function(){var u=this.b
if(u!=null)u.u(null)},
gL:function(a){var u=this.a
if(u.length>0)return C.a.gcd(u)
else return V.br()},
bq:function(a){var u=this.a
if(a==null)C.a.h(u,V.br())
else C.a.h(u,a)
this.aB()},
aw:function(){var u=this.a
if(u.length>0){u.pop()
this.aB()}},
sbD:function(a){this.a=H.j(a,"$ib",[V.a6],"$ab")}}
E.eU.prototype={}
E.ag.prototype={
sct:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().N(0,s.gdR())
u=s.c
if(u!=null)u.gm().h(0,s.gdR())
t=new D.E("shape",r,s.c,[F.dt])
t.b=!0
s.av(t)}},
sdM:function(a){var u,t,s=this
if(!J.X(s.r,a)){u=s.r
if(u!=null)u.gm().N(0,s.gdP())
if(a!=null)a.gm().h(0,s.gdP())
s.r=a
t=new D.E("mover",u,a,[U.a3])
t.b=!0
s.av(t)}},
af:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.X(q,s.x)){u=s.x
s.x=q
t=new D.E("matrix",u,q,[V.a6])
t.b=!0
s.av(t)}for(r=s.y.a,r=new J.ae(r,r.length,[H.w(r,0)]);r.B();)r.d.af(0,b)},
a3:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gL(s))
else C.a.h(s.a,r.q(0,s.gL(s)))
s.aB()
a.cm(t.f)
s=a.dy
u=(s&&C.a).gcd(s)
if(u!=null&&t.d!=null)u.dU(a,t)
for(s=t.y.a,s=new J.ae(s,s.length,[H.w(s,0)]);s.B();)s.d.a3(a)
a.cl()
a.dx.aw()},
gm:function(){var u=this.z
return u==null?this.z=D.J():u},
av:function(a){var u=this.z
if(u!=null)u.u(a)},
a1:function(){return this.av(null)},
dS:function(a){H.k(a,"$iv")
this.e=null
this.av(a)},
ii:function(){return this.dS(null)},
dQ:function(a){this.av(H.k(a,"$iv"))},
ih:function(){return this.dQ(null)},
dO:function(a){this.av(H.k(a,"$iv"))},
ic:function(){return this.dO(null)},
ib:function(a,b){var u,t,s,r,q,p,o
H.j(b,"$id",[E.ag],"$ad")
for(u=b.length,t=this.gdN(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aH()
o.sa_(null)
o.sai(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sa_(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a1()},
ig:function(a,b){var u,t,s,r,q
H.j(b,"$id",[E.ag],"$ad")
for(u=b.length,t=this.gdN(),s=0;s<b.length;b.length===u||(0,H.A)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.aH()
q.sa_(null)
q.sai(null)
q.c=null
q.d=0
r.z=q}q.N(0,t)}}this.a1()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sed:function(a,b){this.y=H.j(b,"$iT",[E.ag],"$aT")},
$iaR:1}
E.h8.prototype={
ea:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.as(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cd()
t=[V.a6]
u.sbD(H.c([],t))
u.b=null
u.gm().h(0,new E.h9(s))
s.cy=u
u=new O.cd()
u.sbD(H.c([],t))
u.b=null
u.gm().h(0,new E.ha(s))
s.db=u
u=new O.cd()
u.sbD(H.c([],t))
u.b=null
u.gm().h(0,new E.hb(s))
s.dx=u
s.shd(H.c([],[O.bu]))
u=s.dy;(u&&C.a).h(u,null)
s.sh9(new H.aM([P.o,A.cl]))},
gir:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gL(s)
u=t.db
u=t.z=s.q(0,u.gL(u))
s=u}return s},
cm:function(a){var u=this.dy,t=a==null?(u&&C.a).gcd(u):a;(u&&C.a).h(u,t)},
cl:function(){var u=this.dy
if(u.length>1)u.pop()},
d7:function(a){var u=a.b
if(u.length===0)throw H.h(P.r("May not cache a shader with no name."))
if(this.fr.de(0,u))throw H.h(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.V(0,u,a)},
shd:function(a){this.dy=H.j(a,"$ib",[O.bu],"$ab")},
sh9:function(a){this.fr=H.j(a,"$iN",[P.o,A.cl],"$aN")}}
E.h9.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.ch=u.z=null},
$S:8}
E.ha.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:8}
E.hb.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.cx=u.ch=null},
$S:8}
E.dD.prototype={
cE:function(a){H.k(a,"$iv")
this.dV()},
cD:function(){return this.cE(null)},
gi1:function(){var u,t=this,s=Date.now(),r=C.h.a0(P.jN(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.as(s,!1)
return u/r},
d1:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.C(r)
u=C.i.ca(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.i.ca(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.k6(C.m,s.git())}},
dV:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.hE(this),{func:1,ret:-1,args:[P.a8]})
C.v.eH(u)
C.v.fY(u,W.kn(t,P.a8))}},
is:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.d1()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.as(r,!1)
s.y=P.jN(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aB()
r=s.db
C.a.sk(r.a,0)
r.aB()
r=s.dx
C.a.sk(r.a,0)
r.aB()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.a3(p.e)}}catch(q){u=H.bz(q)
t=H.bS(q)
P.jF("Error: "+H.l(u))
P.jF("Stack: "+H.l(t))
throw H.h(u)}}}
E.hE.prototype={
$1:function(a){var u
H.mc(a)
u=this.a
if(u.ch){u.ch=!1
u.is()}},
$S:29}
Z.dQ.prototype={$imm:1}
Z.cV.prototype={
W:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bz(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.l(u))
throw H.h(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.l(u.e)+"]"}}
Z.dR.prototype={$imn:1}
Z.c_.prototype={
as:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
W:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].W(a)},
ay:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a3:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.i(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.o],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ar(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.v(p,", ")+"\nAttrs:   "+C.a.v(r,", ")},
seP:function(a){this.b=H.j(a,"$ib",[Z.bn],"$ab")},
$imt:1}
Z.bn.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bI(this.c)+"'")+"]"}}
Z.b0.prototype={
gcu:function(a){var u=this.a,t=(u&$.aC().a)!==0?3:0
if((u&$.bg().a)!==0)t+=3
if((u&$.bf().a)!==0)t+=3
if((u&$.bh().a)!==0)t+=2
if((u&$.bi().a)!==0)t+=3
if((u&$.cQ().a)!==0)t+=3
if((u&$.cR().a)!==0)t+=4
if((u&$.bV().a)!==0)++t
return(u&$.be().a)!==0?t+4:t},
hR:function(a){var u,t=$.aC(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bf()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bh()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bi()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cQ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bV()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.be()
if((s&t.a)!==0)if(u===a)return t
return $.kR()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b0))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.o]),t=this.a
if((t&$.aC().a)!==0)C.a.h(u,"Pos")
if((t&$.bg().a)!==0)C.a.h(u,"Norm")
if((t&$.bf().a)!==0)C.a.h(u,"Binm")
if((t&$.bh().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bi().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cQ().a)!==0)C.a.h(u,"Clr3")
if((t&$.cR().a)!==0)C.a.h(u,"Clr4")
if((t&$.bV().a)!==0)C.a.h(u,"Weight")
if((t&$.be().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.v(u,"|")}}
D.eX.prototype={}
D.aH.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.n(b,u)
if(this.a==null)this.sa_(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.v]})
u=s.a
u=u==null?null:C.a.ar(u,b)
if(u===!0){u=s.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ar(u,b)
if(u===!0){u=s.b
t=(u&&C.a).N(u,b)||t}return t},
u:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.v()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.M(P.jP(u,!0,{func:1,ret:-1,args:[D.v]}),new D.ff(q))
u=r.b
if(u!=null){r.sai(H.c([],[{func:1,ret:-1,args:[D.v]}]))
C.a.M(u,new D.fg(q))}return!0},
hZ:function(){return this.u(null)},
ax:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.u(u)}}},
sa_:function(a){this.a=H.j(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")},
sai:function(a){this.b=H.j(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")}}
D.ff.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.fg.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.v.prototype={}
D.bo.prototype={}
D.bp.prototype={}
D.E.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.cW.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cW))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.db.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.db))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.fw.prototype={
io:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ij:function(a){this.c=a.b
this.d.N(0,a.a)
return!1},
sfU:function(a){this.d=H.j(a,"$ik3",[P.B],"$ak3")}}
X.df.prototype={}
X.fC.prototype={
aN:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=new V.a4(o.a+n*m,o.b+u*t)
t=q.a.gaH()
r=new X.b7(a,V.ba(),q.x,t,s)
r.b=!0
q.z=new P.as(p,!1)
q.x=s
return r},
ck:function(a,b){this.r=a.a
return!1},
aW:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e3()
if(typeof u!=="number")return u.e0()
this.r=(u&~t)>>>0
return!1},
aV:function(a,b){var u=this.d
if(u==null)return!1
u.u(this.aN(a,b))
return!0},
ip:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaH()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.ce(new V.Q(s*r,q*p),u,t)
t.b=!0
n.u(t)
return!0},
fq:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.df(c,r.a.gaH(),b)
s.b=!0
t.u(s)
r.y=new P.as(u,!1)
r.x=V.ba()}}
X.an.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.an))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.x(this.b)?"Alt+":""
return u+(H.x(this.c)?"Shift+":"")}}
X.b7.prototype={}
X.fS.prototype={
bA:function(a,b,c){var u=this,t=new P.as(Date.now(),!1),s=u.a.gaH(),r=new X.b7(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
ck:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.u(this.bA(a,b,!0))
return!0},
aW:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e3()
if(typeof t!=="number")return t.e0()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.u(u.bA(a,b,!0))
return!0},
aV:function(a,b){var u=this.d
if(u==null)return!1
u.u(this.bA(a,b,!1))
return!0},
iq:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaH()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.ce(new V.Q(t*s,r*q),u,b)
u.b=!0
o.u(u)
return!0},
gdh:function(){var u=this.b
return u==null?this.b=D.J():u},
gbt:function(){var u=this.c
return u==null?this.c=D.J():u},
gdL:function(){var u=this.d
return u==null?this.d=D.J():u}}
X.ce.prototype={}
X.h4.prototype={}
X.dF.prototype={}
X.hH.prototype={
aN:function(a,b){var u,t,s,r,q=this
H.j(a,"$ib",[V.a4],"$ab")
u=new P.as(Date.now(),!1)
t=a.length>0?a[0]:V.ba()
s=q.a.gaH()
r=new X.dF(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
im:function(a){var u
H.j(a,"$ib",[V.a4],"$ab")
u=this.b
if(u==null)return!1
u.u(this.aN(a,!0))
return!0},
ik:function(a){var u
H.j(a,"$ib",[V.a4],"$ab")
u=this.c
if(u==null)return!1
u.u(this.aN(a,!0))
return!0},
il:function(a){var u
H.j(a,"$ib",[V.a4],"$ab")
u=this.d
if(u==null)return!1
u.u(this.aN(a,!1))
return!0}}
X.dL.prototype={
gaH:function(){var u=this.a,t=C.l.gdd(u).c
t.toString
u=C.l.gdd(u).d
u.toString
return V.h7(0,0,t,u)},
cP:function(a){var u=a.keyCode,t=H.x(a.ctrlKey)||H.x(a.metaKey)
return new X.db(u,new X.an(t,a.altKey,a.shiftKey))},
aG:function(a){var u=this.b,t=H.x(a.ctrlKey)||H.x(a.metaKey)
u.c=new X.an(t,a.altKey,a.shiftKey)},
bT:function(a){var u=this.b,t=H.x(a.ctrlKey)||H.x(a.metaKey)
u.c=new X.an(t,a.altKey,a.shiftKey)},
ap:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.E()
u=t.top
if(typeof r!=="number")return r.E()
return new V.a4(s-q,r-u)},
aQ:function(a){return new V.Q(a.movementX,a.movementY)},
bP:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a4])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
q=C.i.ae(r.pageX)
C.i.ae(r.pageY)
p=o.left
C.i.ae(r.pageX)
C.a.h(n,new V.a4(q-p,C.i.ae(r.pageY)-o.top))}return n},
am:function(a){var u=a.buttons,t=H.x(a.ctrlKey)||H.x(a.metaKey)
return new X.cW(u,new X.an(t,a.altKey,a.shiftKey))},
bE:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.E()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.E()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fk:function(a){this.f=!0},
f8:function(a){this.f=!1},
fe:function(a){H.k(a,"$ia9")
if(H.x(this.f)&&this.bE(a))a.preventDefault()},
fo:function(a){var u
H.k(a,"$iaN")
if(!H.x(this.f))return
u=this.cP(a)
this.b.io(u)},
fm:function(a){var u
H.k(a,"$iaN")
if(!H.x(this.f))return
u=this.cP(a)
this.b.ij(u)},
ft:function(a){var u,t,s,r,q=this
H.k(a,"$ia9")
u=q.a
u.focus()
q.f=!0
q.aG(a)
if(H.x(q.x)){t=q.am(a)
s=q.aQ(a)
if(q.d.ck(t,s))a.preventDefault()
return}if(H.x(q.r)){q.y=a
u.requestPointerLock()
return}t=q.am(a)
r=q.ap(a)
if(q.c.ck(t,r))a.preventDefault()},
fz:function(a){var u,t,s,r=this
H.k(a,"$ia9")
r.aG(a)
u=r.am(a)
if(H.x(r.x)){t=r.aQ(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(H.x(r.r))return
s=r.ap(a)
if(r.c.aW(u,s))a.preventDefault()},
fi:function(a){var u,t,s,r=this
H.k(a,"$ia9")
if(!r.bE(a)){r.aG(a)
u=r.am(a)
if(H.x(r.x)){t=r.aQ(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(H.x(r.r))return
s=r.ap(a)
if(r.c.aW(u,s))a.preventDefault()}},
fv:function(a){var u,t,s,r=this
H.k(a,"$ia9")
r.aG(a)
u=r.am(a)
if(H.x(r.x)){t=r.aQ(a)
if(r.d.aV(u,t))a.preventDefault()
return}if(H.x(r.r))return
s=r.ap(a)
if(r.c.aV(u,s))a.preventDefault()},
fg:function(a){var u,t,s,r=this
H.k(a,"$ia9")
if(!r.bE(a)){r.aG(a)
u=r.am(a)
if(H.x(r.x)){t=r.aQ(a)
if(r.d.aV(u,t))a.preventDefault()
return}if(H.x(r.r))return
s=r.ap(a)
if(r.c.aV(u,s))a.preventDefault()}},
fB:function(a){var u,t,s=this
H.k(a,"$ib1")
s.aG(a)
u=new V.Q((a&&C.u).ghX(a),C.u.ghY(a)).t(0,180)
if(H.x(s.x)){if(s.d.ip(u))a.preventDefault()
return}if(H.x(s.r))return
t=s.ap(a)
if(s.c.iq(u,t))a.preventDefault()},
fD:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.am(s.y)
t=s.ap(s.y)
s.d.fq(u,t,r)}},
fR:function(a){var u,t=this
H.k(a,"$iaA")
t.a.focus()
t.f=!0
t.bT(a)
u=t.bP(a)
if(t.e.im(u))a.preventDefault()},
fN:function(a){var u
H.k(a,"$iaA")
this.bT(a)
u=this.bP(a)
if(this.e.ik(u))a.preventDefault()},
fP:function(a){var u
H.k(a,"$iaA")
this.bT(a)
u=this.bP(a)
if(this.e.il(u))a.preventDefault()},
seI:function(a){this.z=H.j(a,"$ib",[[P.cn,P.O]],"$ab")}}
D.b3.prototype={
gm:function(){var u=this.d
return u==null?this.d=D.J():u},
al:function(a){var u
H.k(a,"$iv")
u=this.d
if(u!=null)u.u(a)},
ef:function(){return this.al(null)},
$ia_:1,
$iaR:1}
D.a_.prototype={$iaR:1}
D.dc.prototype={
gm:function(){var u=this.Q
return u==null?this.Q=D.J():u},
al:function(a){var u=this.Q
if(u!=null)u.u(a)},
cX:function(a){var u
H.k(a,"$iv")
u=this.ch
if(u!=null)u.u(a)},
fp:function(){return this.cX(null)},
fF:function(a){var u,t,s
H.j(a,"$id",[D.a_],"$ad")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(s==null||this.eC(s))return!1}return!0},
f0:function(a,b){var u,t,s,r,q,p,o,n=D.a_
H.j(b,"$id",[n],"$ad")
for(u=b.length,t=this.gcW(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=H.k(b[q],"$ia_")
if(p instanceof D.b3)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.aH()
o.sa_(null)
o.sai(null)
o.c=null
o.d=0
p.d=o}H.n(t,s)
if(o.a==null)o.sa_(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bo([n])
n.b=!0
this.al(n)},
fJ:function(a,b){var u,t,s,r,q,p=D.a_
H.j(b,"$id",[p],"$ad")
for(u=b.length,t=this.gcW(),s=0;s<b.length;b.length===u||(0,H.A)(b),++s){r=H.k(b[s],"$ia_")
if(r instanceof D.b3)C.a.N(this.e,r)
q=r.d
if(q==null){q=new D.aH()
q.sa_(null)
q.sai(null)
q.c=null
q.d=0
r.d=q}q.N(0,t)}p=new D.bp([p])
p.b=!0
this.al(p)},
eC:function(a){var u=C.a.ar(this.e,a)
return u},
seG:function(a){this.e=H.j(a,"$ib",[D.b3],"$ab")},
sfT:function(a){this.f=H.j(a,"$ib",[D.dq],"$ab")},
shb:function(a){this.r=H.j(a,"$ib",[D.dw],"$ab")},
shn:function(a){this.x=H.j(a,"$ib",[D.dA],"$ab")},
sho:function(a){this.y=H.j(a,"$ib",[D.dB],"$ab")},
shp:function(a){this.z=H.j(a,"$ib",[D.dC],"$ab")},
$ad:function(){return[D.a_]},
$aT:function(){return[D.a_]}}
D.dq.prototype={$ia_:1,$iaR:1}
D.dw.prototype={$ia_:1,$iaR:1}
D.dA.prototype={$ia_:1,$iaR:1}
D.dB.prototype={$ia_:1,$iaR:1}
D.dC.prototype={$ia_:1,$iaR:1}
V.Z.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
V.aw.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aw))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+", "+V.R(u.d,3,0)+"]"}}
V.fe.prototype={}
V.dj.prototype={
a6:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.y])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dj))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
if(!(Math.abs(b.e-s.e)<t))return!1
if(!(Math.abs(b.f-s.f)<t))return!1
if(!(Math.abs(b.r-s.r)<t))return!1
if(!(Math.abs(b.x-s.x)<t))return!1
if(!(Math.abs(b.y-s.y)<t))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.y],o=V.bR(H.c([q.a,q.d,q.r],p),3,0),n=V.bR(H.c([q.b,q.e,q.x],p),3,0),m=V.bR(H.c([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.i(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.i(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.i(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.i(o,1)
r=" "+o[1]+", "
if(1>=t)return H.i(n,1)
r=r+n[1]+", "
if(1>=s)return H.i(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.i(o,2)
p=" "+o[2]+", "
if(2>=t)return H.i(n,2)
p=p+n[2]+", "
if(2>=s)return H.i(m,2)
return r+(p+m[2]+"]")}}
V.a6.prototype={
a6:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.y])
return t},
cc:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a1.f,a4=a1.b,a5=a1.e,a6=a2*a3-a4*a5,a7=a1.r,a8=a1.c,a9=a2*a7-a8*a5,b0=a1.x,b1=a1.d
if(typeof b1!=="number")return b1.q()
u=a2*b0-b1*a5
t=a4*a7-a8*a3
s=a4*b0-b1*a3
r=a8*b0-b1*a7
q=a1.y
p=a1.cy
o=a1.z
n=a1.cx
m=q*p-o*n
l=a1.db
k=a1.Q
j=q*l-k*n
i=a1.dx
h=a1.ch
g=q*i-h*n
f=o*l-k*p
e=o*i-h*p
d=k*i-h*l
c=a6*d-a9*e+u*f+t*g-s*j+r*m
if(Math.abs(c-0)<$.L().a)return V.br()
b=1/c
a=-a5
a0=-n
return V.aP((a3*d-a7*e+b0*f)*b,(-a4*d+a8*e-b1*f)*b,(p*r-l*s+i*t)*b,(-o*r+k*s-h*t)*b,(a*d+a7*g-b0*j)*b,(a2*d-a8*g+b1*j)*b,(a0*r+l*u-i*a9)*b,(q*r-k*u+h*a9)*b,(a5*e-a3*g+b0*m)*b,(-a2*e+a4*g-b1*m)*b,(n*s-p*u+i*a6)*b,(-q*s+o*u-h*a6)*b,(a*f+a3*j-a7*m)*b,(a2*f-a4*j+a8*m)*b,(a0*t+p*a9-l*a6)*b,(q*t-o*a9+k*a6)*b)},
q:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a,a5=b3.a,a6=a3.b,a7=b3.e,a8=a3.c,a9=b3.y,b0=a3.d,b1=b3.cx
if(typeof b0!=="number")return b0.q()
u=b3.b
t=b3.f
s=b3.z
r=b3.cy
q=b3.c
p=b3.r
o=b3.Q
n=b3.db
m=b3.d
if(typeof m!=="number")return H.C(m)
l=b3.x
k=b3.ch
j=b3.dx
i=a3.e
h=a3.f
g=a3.r
f=a3.x
e=a3.y
d=a3.z
c=a3.Q
b=a3.ch
a=a3.cx
a0=a3.cy
a1=a3.db
a2=a3.dx
return V.aP(a4*a5+a6*a7+a8*a9+b0*b1,a4*u+a6*t+a8*s+b0*r,a4*q+a6*p+a8*o+b0*n,a4*m+a6*l+a8*k+b0*j,i*a5+h*a7+g*a9+f*b1,i*u+h*t+g*s+f*r,i*q+h*p+g*o+f*n,i*m+h*l+g*k+f*j,e*a5+d*a7+c*a9+b*b1,e*u+d*t+c*s+b*r,e*q+d*p+c*o+b*n,e*m+d*l+c*k+b*j,a*a5+a0*a7+a1*a9+a2*b1,a*u+a0*t+a1*s+a2*r,a*q+a0*p+a1*o+a2*n,a*m+a0*l+a1*k+a2*j)},
co:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.M(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b2:function(a){var u=this,t=a.a,s=a.b,r=a.c,q=u.d
if(typeof q!=="number")return H.C(q)
return new V.ah(u.a*t+u.b*s+u.c*r+q,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.L()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
u=b.d
r=q.d
t.toString
if(typeof u!=="number")return u.E()
if(typeof r!=="number")return H.C(r)
if(!(Math.abs(u-r)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
if(!(Math.abs(b.r-q.r)<s))return!1
if(!(Math.abs(b.x-q.x)<s))return!1
if(!(Math.abs(b.y-q.y)<s))return!1
if(!(Math.abs(b.z-q.z)<s))return!1
if(!(Math.abs(b.Q-q.Q)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
i:function(a){return this.H()},
w:function(a){var u,t,s,r,q,p=this,o=[P.y],n=V.bR(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bR(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bR(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bR(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.i(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.i(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.i(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.i(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.i(n,1)
q=q+n[1]+", "
if(1>=t)return H.i(m,1)
q=q+m[1]+", "
if(1>=s)return H.i(l,1)
q=q+l[1]+", "
if(1>=r)return H.i(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.i(n,2)
u=u+n[2]+", "
if(2>=t)return H.i(m,2)
u=u+m[2]+", "
if(2>=s)return H.i(l,2)
u=u+l[2]+", "
if(2>=r)return H.i(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.i(n,3)
q=q+n[3]+", "
if(3>=t)return H.i(m,3)
q=q+m[3]+", "
if(3>=s)return H.i(l,3)
q=q+l[3]+", "
if(3>=r)return H.i(k,3)
return u+(q+k[3]+"]")},
H:function(){return this.w("")}}
V.a4.prototype={
E:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}}
V.ah.prototype={
E:function(a,b){return new V.ah(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ah))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
V.bb.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bb))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+", "+V.R(u.d,3,0)+"]"}}
V.ck.prototype={
ga5:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ck))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+", "+V.R(u.d,3,0)+"]"}}
V.Q.prototype={
ce:function(a){return Math.sqrt(this.A(this))},
A:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.C(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.C(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.q()
u=this.b
if(typeof u!=="number")return u.q()
return new V.Q(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.L().a){u=$.ka
return u==null?$.ka=new V.Q(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.Q(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=this.a
s=$.L()
s.toString
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.C(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.C(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}}
V.M.prototype={
ce:function(a){return Math.sqrt(this.A(this))},
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cf:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.M(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aU:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.M(u*t-s*r,s*q-p*t,p*r-u*q)},
D:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a){return new V.M(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.L().a)return V.dP()
return new V.M(this.a/b,this.b/b,this.c/b)},
dI:function(){var u=$.L().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
U.eZ.prototype={
bw:function(a){var u=V.ml(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.J():u},
J:function(a){var u=this.y
if(u!=null)u.u(a)},
scp:function(a,b){},
scg:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.L().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bw(u)}s=new D.E("maximumLocation",s,t.b,[P.y])
s.b=!0
t.J(s)}},
scj:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.L().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bw(u)}s=new D.E("minimumLocation",s,t.c,[P.y])
s.b=!0
t.J(s)}},
sa4:function(a,b){var u,t=this
b=t.bw(b)
u=t.d
if(!(Math.abs(u-b)<$.L().a)){t.d=b
u=new D.E("location",u,b,[P.y])
u.b=!0
t.J(u)}},
sci:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.L().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.E("maximumVelocity",r,a,[P.y])
r.b=!0
s.J(r)}},
sP:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.L().a)){u.f=a
t=new D.E("velocity",t,a,[P.y])
t.b=!0
u.J(t)}},
sc2:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.L().a)){this.x=a
u=new D.E("dampening",u,a,[P.y])
u.b=!0
this.J(u)}},
af:function(a,b){var u,t,s,r=this,q=r.f,p=$.L().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa4(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.L().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sP(u)}}}
U.c4.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.J():u},
sL:function(a,b){var u,t,s,r=this
if(b==null)b=V.br()
if(!J.X(r.a,b)){u=r.a
r.a=b
t=new D.E("matrix",u,b,[V.a6])
t.b=!0
s=r.b
if(s!=null)s.u(t)}},
aJ:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c4))return!1
return J.X(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")}}
U.c9.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.J():u},
J:function(a){var u
H.k(a,"$iv")
u=this.e
if(u!=null)u.u(a)},
a2:function(){return this.J(null)},
eh:function(a,b){var u,t,s,r,q,p,o,n=U.a3
H.j(b,"$id",[n],"$ad")
for(u=b.length,t=this.gaC(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.n(t,s)
if(o.a==null)o.sa_(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bo([n])
n.b=!0
this.J(n)},
fH:function(a,b){var u,t,s,r,q=U.a3
H.j(b,"$id",[q],"$ad")
for(u=b.length,t=this.gaC(),s=0;s<b.length;b.length===u||(0,H.A)(b),++s){r=b[s]
if(r!=null)r.gm().N(0,t)}q=new D.bp([q])
q.b=!0
this.J(q)},
aJ:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.aA()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ae(r,r.length,[H.w(r,0)]),u=null;r.B();){q=r.d
if(q!=null){t=q.aJ(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.br():u
r=s.e
if(r!=null)r.ax(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c9))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.i(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.i(r,t)
if(!J.X(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ad:function(){return[U.a3]},
$aT:function(){return[U.a3]},
$ia3:1}
U.a3.prototype={}
U.dM.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.J():u},
J:function(a){var u
H.k(a,"$iv")
u=this.cy
if(u!=null)u.u(a)},
a2:function(){return this.J(null)},
aS:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdh().h(0,u.gbF())
u.a.c.gdL().h(0,u.gbH())
u.a.c.gbt().h(0,u.gbJ())
return!0},
bG:function(a){var u=this
H.k(a,"$iv")
if(!J.X(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bI:function(a){var u,t,s,r,q,p,o,n=this
a=H.f(H.k(a,"$iv"),"$ib7")
if(!H.x(n.y))return
if(H.x(n.x)){u=a.d.E(0,a.y)
u=new V.Q(u.a,u.b)
u=u.A(u)
t=n.r
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.x=!1}if(H.x(n.d)){u=a.c
t=a.d.E(0,a.y)
u=new V.Q(t.a,t.b).q(0,2).t(0,u.ga5())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.C(s)
t.sP(u*10*s)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=new V.Q(s.a,s.b).q(0,2).t(0,u.ga5())
s=n.b
q=r.a
if(typeof q!=="number")return q.K()
p=n.e
if(typeof p!=="number")return H.C(p)
o=n.z
if(typeof o!=="number")return H.C(o)
s.sa4(0,-q*p+o)
n.b.sP(0)
t=t.E(0,a.z)
n.Q=new V.Q(t.a,t.b).q(0,2).t(0,u.ga5())}n.a2()},
bK:function(a){var u,t,s,r=this
H.k(a,"$iv")
if(!H.x(r.y))return
r.y=!1
if(H.x(r.x))return
u=r.Q
if(u.A(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.C(s)
u.sP(t*10*s)
r.a2()}},
aJ:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.aA()
if(q<p){r.ch=p
u=b.y
r.b.af(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aP(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia3:1}
U.dN.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.J():u},
J:function(a){var u
H.k(a,"$iv")
u=this.fx
if(u!=null)u.u(a)},
a2:function(){return this.J(null)},
aS:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdh().h(0,s.gbF())
s.a.c.gdL().h(0,s.gbH())
s.a.c.gbt().h(0,s.gbJ())
u=s.a.d
t=u.f
u=t==null?u.f=D.J():t
u.h(0,s.geU())
u=s.a.d
t=u.d
u=t==null?u.d=D.J():t
u.h(0,s.geW())
u=s.a.e
t=u.b
u=t==null?u.b=D.J():t
u.h(0,s.ghk())
u=s.a.e
t=u.d
u=t==null?u.d=D.J():t
u.h(0,s.ghi())
u=s.a.e
t=u.c
u=t==null?u.c=D.J():t
u.h(0,s.ghg())
return!0},
ag:function(a){var u=a.a,t=a.b
if(H.x(this.f)){if(typeof u!=="number")return u.K()
u=-u}if(H.x(this.r)){if(typeof t!=="number")return t.K()
t=-t}return new V.Q(u,t)},
bG:function(a){var u=this
a=H.f(H.k(a,"$iv"),"$ib7")
if(!J.X(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bI:function(a){var u,t,s,r,q,p,o,n=this
a=H.f(H.k(a,"$iv"),"$ib7")
if(!H.x(n.cx))return
if(H.x(n.ch)){u=a.d.E(0,a.y)
u=new V.Q(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.x(n.e)){u=a.c
t=a.d.E(0,a.y)
u=n.ag(new V.Q(t.a,t.b).q(0,2).t(0,u.ga5()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.K()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.K()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=n.ag(new V.Q(s.a,s.b).q(0,2).t(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.K()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa4(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.K()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa4(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.E(0,a.z)
n.dx=n.ag(new V.Q(t.a,t.b).q(0,2).t(0,u.ga5()))}n.a2()},
bK:function(a){var u,t,s,r=this
H.k(a,"$iv")
if(!H.x(r.cx))return
r.cx=!1
if(H.x(r.ch))return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.K()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.K()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sP(-t*10*u)
r.a2()}},
eV:function(a){var u=this
if(H.f(H.k(a,"$iv"),"$idf").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eX:function(a){var u,t,s,r,q,p,o,n=this
a=H.f(H.k(a,"$iv"),"$ib7")
if(!J.X(n.d,a.x.b))return
u=a.c
t=a.d
s=t.E(0,a.y)
r=n.ag(new V.Q(s.a,s.b).q(0,2).t(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.K()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa4(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.K()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa4(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.E(0,a.z)
n.dx=n.ag(new V.Q(t.a,t.b).q(0,2).t(0,u.ga5()))
n.a2()},
hl:function(a){var u=this
H.k(a,"$iv")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hj:function(a){var u,t,s,r,q,p,o,n=this
a=H.f(H.k(a,"$iv"),"$idF")
if(!H.x(n.cx))return
if(H.x(n.ch)){u=a.d.E(0,a.y)
u=new V.Q(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.x(n.e)){u=a.c
t=a.d.E(0,a.y)
u=n.ag(new V.Q(t.a,t.b).q(0,2).t(0,u.ga5()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.K()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.K()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=n.ag(new V.Q(s.a,s.b).q(0,2).t(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.K()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa4(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.K()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa4(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.E(0,a.z)
n.dx=n.ag(new V.Q(t.a,t.b).q(0,2).t(0,u.ga5()))}n.a2()},
hh:function(a){var u,t,s,r=this
H.k(a,"$iv")
if(!H.x(r.cx))return
r.cx=!1
if(H.x(r.ch))return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.K()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.K()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sP(-t*10*u)
r.a2()}},
aJ:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.aA()
if(q<p){r.dy=p
u=b.y
r.c.af(0,u)
r.b.af(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.fr=V.aP(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1).q(0,V.jh(r.c.d))}return r.fr},
$ia3:1}
U.dO.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.J():u},
J:function(a){var u=this.r
if(u!=null)u.u(a)},
aS:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.J():t
t=r.geY()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.J():s).h(0,t)
return!0},
eZ:function(a){var u,t,s,r,q=this
H.k(a,"$iv")
if(!J.X(q.b,q.a.b.c))return
H.f(a,"$ice")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.E("zoom",u,r,[P.y])
u.b=!0
q.J(u)}},
aJ:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.lf(u,u,u)}return t.f},
$ia3:1}
M.cZ.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.J():u},
S:function(a){var u
H.k(a,"$iv")
u=this.f
if(u!=null)u.u(a)},
aL:function(){return this.S(null)},
saT:function(a){var u,t,s=this
if(a==null)a=new X.fr()
u=s.a
if(u!==a){if(u!=null)u.gm().N(0,s.gR())
t=s.a
s.a=a
a.gm().h(0,s.gR())
u=new D.E("camera",t,s.a,[X.bC])
u.b=!0
s.S(u)}},
saY:function(a,b){var u,t,s=this
if(b==null)b=X.fp(null)
u=s.b
if(u!==b){if(u!=null)u.gm().N(0,s.gR())
t=s.b
s.b=b
b.gm().h(0,s.gR())
u=new D.E("target",t,s.b,[X.bM])
u.b=!0
s.S(u)}},
saZ:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gm().N(0,t.gR())
u=t.c
t.c=a
if(a!=null)a.gm().h(0,t.gR())
s=new D.E("technique",u,t.c,[O.bu])
s.b=!0
t.S(s)}},
a3:function(a){var u=this
a.cm(u.c)
u.b.W(a)
u.a.W(a)
u.d.af(0,a)
u.d.a3(a)
u.a.ay(a)
u.b.toString
a.cl()},
$iax:1,
$ibL:1}
M.d3.prototype={
S:function(a){var u
H.k(a,"$iv")
u=this.x
if(u!=null)u.u(a)},
aL:function(){return this.S(null)},
fa:function(a,b){var u,t,s,r,q,p,o,n=E.ag
H.j(b,"$id",[n],"$ad")
for(u=b.length,t=this.gR(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aH()
o.sa_(null)
o.sai(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sa_(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bo([n])
n.b=!0
this.S(n)},
fc:function(a,b){var u,t,s,r,q,p=E.ag
H.j(b,"$id",[p],"$ad")
for(u=b.length,t=this.gR(),s=0;s<b.length;b.length===u||(0,H.A)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.aH()
q.sa_(null)
q.sai(null)
q.c=null
q.d=0
r.z=q}q.N(0,t)}}p=new D.bp([p])
p.b=!0
this.S(p)},
saT:function(a){var u,t,s=this
if(a==null)a=X.jj(null)
u=s.a
if(u!==a){if(u!=null)u.gm().N(0,s.gR())
t=s.a
s.a=a
a.gm().h(0,s.gR())
u=new D.E("camera",t,s.a,[X.bC])
u.b=!0
s.S(u)}},
saY:function(a,b){var u,t,s=this
if(b==null)b=X.fp(null)
u=s.b
if(u!==b){if(u!=null)u.gm().N(0,s.gR())
t=s.b
s.b=b
b.gm().h(0,s.gR())
u=new D.E("target",t,s.b,[X.bM])
u.b=!0
s.S(u)}},
saZ:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gm().N(0,t.gR())
u=t.c
t.c=a
if(a!=null)a.gm().h(0,t.gR())
s=new D.E("technique",u,t.c,[O.bu])
s.b=!0
t.S(s)}},
gm:function(){var u=this.x
return u==null?this.x=D.J():u},
a3:function(a){var u,t=this
a.cm(t.c)
t.b.W(a)
t.a.W(a)
u=t.c
if(u!=null)u.af(0,a)
for(u=t.d.a,u=new J.ae(u,u.length,[H.w(u,0)]);u.B();)u.d.af(0,a)
for(u=t.d.a,u=new J.ae(u,u.length,[H.w(u,0)]);u.B();)u.d.a3(a)
t.a.toString
a.cy.aw()
a.db.aw()
t.b.toString
a.cl()},
seB:function(a,b){this.d=H.j(b,"$iT",[E.ag],"$aT")},
$iax:1,
$ibL:1}
M.ax.prototype={}
M.bL.prototype={}
M.dy.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.J():u},
S:function(a){var u
H.k(a,"$iv")
u=this.cy
if(u!=null)u.u(a)},
aL:function(){return this.S(null)},
f2:function(a,b){var u,t,s,r,q,p,o,n=M.ax
H.j(b,"$id",[n],"$ad")
for(u=b.length,t=this.gR(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.n(t,s)
if(o.a==null)o.sa_(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bo([n])
n.b=!0
this.S(n)},
fL:function(a,b){var u,t,s,r,q=M.ax
H.j(b,"$id",[q],"$ad")
for(u=b.length,t=this.gR(),s=0;s<b.length;b.length===u||(0,H.A)(b),++s){r=b[s]
if(r!=null)r.gm().N(0,t)}q=new D.bp([q])
q.b=!0
this.S(q)},
a3:function(a){var u,t,s=this
s.y.sdT(0,s.r)
for(u=s.z.a,u=new J.ae(u,u.length,[H.w(u,0)]);u.B();){t=u.d
t.saY(0,s.y)
t.saT(s.e)
t.a3(a)}s.y.sdT(0,s.x)
for(u=s.z.a,u=new J.ae(u,u.length,[H.w(u,0)]);u.B();){t=u.d
t.saY(0,s.y)
t.saT(s.f)
t.a3(a)}},
sfS:function(a){this.z=H.j(a,"$iT",[M.ax],"$aT")},
$ibL:1}
A.cS.prototype={}
A.eP.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
i_:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dg:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.di.prototype={
e9:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.bt("")
t=d1.fx
if(t){u.a=c6
s=c6}else s=""
r=d1.fy
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=d1.r1
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=d1.r2
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
d1.ht(u)
d1.hA(u)
d1.hu(u)
d1.hI(u)
d1.hJ(u)
d1.hC(u)
d1.hN(u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=d1.x1
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
s+="void main()\n"
u.a=s
s=u.a=s+"{\n"
if(o){s+="   setupBendData();\n"
u.a=s}if(q){s+="   normalVec = getNorm();\n"
u.a=s}if(p){s+="   binormalVec = getBinm();\n"
u.a=s}if(d1.rx){s+="   txt2D = getTxt2D();\n"
u.a=s}if(d1.ry){s+="   txtCube = getTxtCube();\n"
u.a=s}if(d1.k3){s+="   objPos = getObjPos();\n"
u.a=s}s=(d1.k4?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
q=a6.z
u=new P.bt("")
u.a="precision mediump float;\n"
u.a=c9
p=q.r1
if(p){u.a=d0
o=d0}else o=c9
if(q.r2){o+="varying vec3 binormalVec;\n"
u.a=o}if(q.rx){o+="varying vec2 txt2D;\n"
u.a=o}if(q.ry){o+="varying vec3 txtCube;\n"
u.a=o}if(q.k3){o+="varying vec3 objPos;\n"
u.a=o}o=u.a=(q.k4?u.a=o+"varying vec3 viewPos;\n":o)+"\n"
n=q.y2
if(n){o+="uniform mat4 colorMat;\n"
u.a=o}u.a=(q.fr?u.a=o+"uniform mat4 invViewMat;\n":o)+"\n"
q.hx(u)
q.hs(u)
q.hv(u)
q.hy(u)
q.hG(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.hE(u)
q.hF(u)}q.hB(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=q.y
if(l!==C.c){m=u.a=m+"uniform float alpha;\n"
if(l!==C.f){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.d){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.c:m=u.a=m+"   return 1.0;\n"
break
case C.f:m=u.a=m+"   return alpha;\n"
break
case C.e:m+=c7
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c8
u.a=m
m=u.a=m+"   return a;\n"
break
case C.d:m+=c7
u.a=m
m+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
u.a=m
m+=c8
u.a=m
m=u.a=m+"   return a;\n"
break}m+="}\n"
u.a=m
m+="\n"
u.a=m
l=q.k2
if(l){m+="// === Lighting ===\n"
u.a=m
m+="\n"
u.a=m
m+="vec3 lightValue(vec3 norm, vec3 litClr, vec3 litVec)\n"
u.a=m
m+="{\n"
u.a=m
u.a=m+"   if ((litClr.r < 0.001) && (litClr.g < 0.001) && (litClr.b < 0.001)) return litClr;\n"
k=H.c([],[P.o])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.v(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.hw(u)
q.hD(u)
q.hH(u)
q.hK(u)
q.hL(u)
q.hM(u)
q.hz(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
p=p?u.a=m+"   vec3 norm = normal();\n":m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.c([],[P.o])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(q.c!==C.c)u.a+="   setDiffuseColor();\n"
if(q.d!==C.c)u.a+="   setInvDiffuseColor();\n"
if(q.e!==C.c)u.a+="   setSpecularColor();\n"
if(q.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(q.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(q.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(q.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(q.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(q.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(q.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(q.a!==C.c)C.a.h(j,"emission()")
if(q.r!==C.c)C.a.h(j,"reflect(refl)")
if(q.x!==C.c)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.v(j," + ")+", alpha);"
q=u.a
q=u.a=(n?u.a=q+("   gl_FragColor = colorMat*"+i+"\n"):u.a=q+("   gl_FragColor = "+i+"\n"))+"}\n"
a6.dH(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.j(0,"posAttr")
a6.cx=a6.x.j(0,"normAttr")
a6.ch=a6.x.j(0,"binmAttr")
a6.cy=a6.x.j(0,"txt2DAttr")
a6.db=a6.x.j(0,"txtCubeAttr")
a6.dx=a6.x.j(0,"bendAttr")
if(d1.fr)a6.id=H.f(a6.y.l(0,"invViewMat"),"$ial")
if(t)a6.dy=H.f(a6.y.l(0,"objMat"),"$ial")
if(r)a6.fr=H.f(a6.y.l(0,"viewObjMat"),"$ial")
a6.fy=H.f(a6.y.l(0,"projViewObjMat"),"$ial")
if(d1.x2)a6.k1=H.f(a6.y.l(0,"txt2DMat"),"$ict")
if(d1.y1)a6.k2=H.f(a6.y.l(0,"txtCubeMat"),"$ial")
if(d1.y2)a6.k3=H.f(a6.y.l(0,"colorMat"),"$ial")
a6.sex(H.c([],[A.al]))
t=d1.ak
if(t>0){a6.k4=H.k(a6.y.l(0,"bendMatCount"),"$iI")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.t(P.r(a7+q+a8));(s&&C.a).h(s,H.f(g,"$ial"))}}t=d1.a
if(t!==C.c){a6.r2=H.f(a6.y.l(0,"emissionClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.e:a6.rx=H.f(a6.y.l(0,a9),"$iai")
a6.x1=H.f(a6.y.l(0,b0),"$iI")
break
case C.d:a6.ry=H.f(a6.y.l(0,a9),"$iac")
a6.x1=H.f(a6.y.l(0,b0),"$iI")
break}}t=d1.b
if(t!==C.c){a6.x2=H.f(a6.y.l(0,"ambientClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.e:a6.y1=H.f(a6.y.l(0,b1),"$iai")
a6.ak=H.f(a6.y.l(0,b2),"$iI")
break
case C.d:a6.y2=H.f(a6.y.l(0,b1),"$iac")
a6.ak=H.f(a6.y.l(0,b2),"$iI")
break}}t=d1.c
if(t!==C.c){a6.ad=H.f(a6.y.l(0,"diffuseClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.e:a6.b9=H.f(a6.y.l(0,b3),"$iai")
a6.ba=H.f(a6.y.l(0,b4),"$iI")
break
case C.d:a6.di=H.f(a6.y.l(0,b3),"$iac")
a6.ba=H.f(a6.y.l(0,b4),"$iI")
break}}t=d1.d
if(t!==C.c){a6.bb=H.f(a6.y.l(0,"invDiffuseClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.e:a6.dj=H.f(a6.y.l(0,b5),"$iai")
a6.bc=H.f(a6.y.l(0,b6),"$iI")
break
case C.d:a6.dk=H.f(a6.y.l(0,b5),"$iac")
a6.bc=H.f(a6.y.l(0,b6),"$iI")
break}}t=d1.e
if(t!==C.c){a6.bf=H.f(a6.y.l(0,"shininess"),"$iV")
a6.bd=H.f(a6.y.l(0,"specularClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.e:a6.dl=H.f(a6.y.l(0,b7),"$iai")
a6.be=H.f(a6.y.l(0,b8),"$iI")
break
case C.d:a6.dm=H.f(a6.y.l(0,b7),"$iac")
a6.be=H.f(a6.y.l(0,b8),"$iI")
break}}switch(d1.f){case C.c:break
case C.f:break
case C.e:a6.dn=H.f(a6.y.l(0,"bumpTxt"),"$iai")
a6.bg=H.f(a6.y.l(0,b9),"$iI")
break
case C.d:a6.dq=H.f(a6.y.l(0,"bumpTxt"),"$iac")
a6.bg=H.f(a6.y.l(0,b9),"$iI")
break}if(d1.dy){a6.dr=H.f(a6.y.l(0,"envSampler"),"$iac")
a6.ds=H.f(a6.y.l(0,"nullEnvTxt"),"$iI")
t=d1.r
if(t!==C.c){a6.bh=H.f(a6.y.l(0,"reflectClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.e:a6.dt=H.f(a6.y.l(0,c0),"$iai")
a6.bi=H.f(a6.y.l(0,c1),"$iI")
break
case C.d:a6.du=H.f(a6.y.l(0,c0),"$iac")
a6.bi=H.f(a6.y.l(0,c1),"$iI")
break}}t=d1.x
if(t!==C.c){a6.bj=H.f(a6.y.l(0,"refraction"),"$iV")
a6.bk=H.f(a6.y.l(0,"refractClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.e:a6.dv=H.f(a6.y.l(0,c2),"$iai")
a6.bl=H.f(a6.y.l(0,c3),"$iI")
break
case C.d:a6.dw=H.f(a6.y.l(0,c2),"$iac")
a6.bl=H.f(a6.y.l(0,c3),"$iI")
break}}}t=d1.y
if(t!==C.c){a6.bm=H.f(a6.y.l(0,"alpha"),"$iV")
switch(t){case C.c:break
case C.f:break
case C.e:a6.dz=H.f(a6.y.l(0,c4),"$iai")
a6.bn=H.f(a6.y.l(0,c5),"$iI")
break
case C.d:a6.dA=H.f(a6.y.l(0,c4),"$iac")
a6.bn=H.f(a6.y.l(0,c5),"$iI")
break}}a6.sei(H.c([],[A.cs]))
a6.sej(H.c([],[A.cu]))
a6.sek(H.c([],[A.cv]))
a6.sel(H.c([],[A.cw]))
a6.sem(H.c([],[A.cx]))
a6.sen(H.c([],[A.cy]))
if(d1.k2){t=d1.z
if(t>0){a6.dB=H.k(a6.y.l(0,"dirLightCount"),"$iI")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.f(g,"$iH")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.f(f,"$iH")
s=a6.c4;(s&&C.a).h(s,new A.cs(g,f))}}t=d1.Q
if(t>0){a6.dC=H.k(a6.y.l(0,"pntLightCount"),"$iI")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.f(g,"$iH")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.f(f,"$iH")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.f(e,"$iH")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.f(d,"$iV")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.f(c,"$iV")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.f(b,"$iV")
s=a6.c5;(s&&C.a).h(s,new A.cu(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.dD=H.k(a6.y.l(0,"spotLightCount"),"$iI")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.f(g,"$iH")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.f(f,"$iH")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.f(e,"$iH")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.f(d,"$iH")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.f(c,"$iV")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.f(b,"$iV")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.r(a7+r+a8))
H.f(a,"$iV")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.r(a7+r+a8))
H.f(a0,"$iV")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.r(a7+r+a8))
H.f(a1,"$iV")
s=a6.c6;(s&&C.a).h(s,new A.cv(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.dE=H.k(a6.y.l(0,"txtDirLightCount"),"$iI")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.f(g,"$iH")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.f(f,"$iH")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.f(e,"$iH")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.f(d,"$iH")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.f(c,"$iH")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.f(b,"$iI")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.t(P.r(a7+r+a8))
H.f(a,"$iai")
s=a6.c7;(s&&C.a).h(s,new A.cw(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.dF=H.k(a6.y.l(0,"txtPntLightCount"),"$iI")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.f(g,"$iH")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.f(f,"$iH")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.f(e,"$ict")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.f(d,"$iH")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.f(c,"$iI")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.f(b,"$iV")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.t(P.r(a7+r+a8))
H.f(a,"$iV")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.t(P.r(a7+r+a8))
H.f(a0,"$iV")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.t(P.r(a7+r+a8))
H.f(a1,"$iac")
s=a6.c8;(s&&C.a).h(s,new A.cx(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.dG=H.k(a6.y.l(0,"txtSpotLightCount"),"$iI")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.f(g,"$iH")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.f(f,"$iH")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.f(e,"$iH")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.f(d,"$iH")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.f(c,"$iH")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.f(b,"$iI")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.t(P.r(a7+r+a8))
H.f(a,"$iH")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.t(P.r(a7+r+a8))
H.f(a0,"$iV")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.r(a7+r+a8))
H.f(a1,"$iV")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.t(P.r(a7+r+a8))
H.f(a2,"$iV")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.t(P.r(a7+r+a8))
H.f(a3,"$iV")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.t(P.r(a7+r+a8))
H.f(a4,"$iV")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.t(P.r(a7+r+a8))
H.f(a5,"$iai")
s=a6.c9;(s&&C.a).h(s,new A.cy(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ac:function(a,b,c){C.b.X(b.a,b.d,1)},
a7:function(a,b,c){if(c==null||c.d<6)C.b.X(b.a,b.d,1)
else{a.cs(c)
C.b.X(b.a,b.d,0)}},
sex:function(a){this.r1=H.j(a,"$ib",[A.al],"$ab")},
sei:function(a){this.c4=H.j(a,"$ib",[A.cs],"$ab")},
sej:function(a){this.c5=H.j(a,"$ib",[A.cu],"$ab")},
sek:function(a){this.c6=H.j(a,"$ib",[A.cv],"$ab")},
sel:function(a){this.c7=H.j(a,"$ib",[A.cw],"$ab")},
sem:function(a){this.c8=H.j(a,"$ib",[A.cx],"$ab")},
sen:function(a){this.c9=H.j(a,"$ib",[A.cy],"$ab")}}
A.fJ.prototype={
ht:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.ak+"];\n"
u+="attribute vec4 bendAttr;\n"
a.a=u
u+="\n"
a.a=u
u+="float weightSum;\n"
a.a=u
u=a.a=u+"vec3 bendPos;\n"
t=r.r1
if(t){u+="vec3 bendNorm;\n"
a.a=u}s=r.r2
u=(s?a.a=u+"vec3 bendBinm;\n":u)+"\n"
a.a=u
u+="void adjustBend(float bendVal)\n"
a.a=u
u+="{\n"
a.a=u
u+="   if(bendVal >= 0.0)\n"
a.a=u
u+="   {\n"
a.a=u
u+="      int index = int(floor((bendVal + 0.5)*0.5));\n"
a.a=u
u+="      if(index < bendMatCount)\n"
a.a=u
u+="      {\n"
a.a=u
u+="         float weight = clamp(bendVal - float(index)*2.0, 0.0, 1.0);\n"
a.a=u
u+="         mat4 m = bendValues[index].mat;\n"
a.a=u
u+="         weightSum += weight;\n"
a.a=u
u=a.a=u+"         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
if(t){u+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
a.a=u}u=(s?a.a=u+"         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n":u)+"      }\n"
a.a=u
u+="   }\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="void setupBendData()\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   bendPos = vec3(0.0, 0.0, 0.0);\n"
if(t){u+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
a.a=u}u=(s?a.a=u+"   bendBinm = vec3(0.0, 0.0, 0.0);\n":u)+"   weightSum = 0.0;\n"
a.a=u
u+="   adjustBend(bendAttr.x);\n"
a.a=u
u+="   adjustBend(bendAttr.y);\n"
a.a=u
u+="   adjustBend(bendAttr.z);\n"
a.a=u
u+="   adjustBend(bendAttr.w);\n"
a.a=u
u+="   if(weightSum < 1.0)\n"
a.a=u
u+="   {\n"
a.a=u
u+="      float weight = 1.0 - weightSum;\n"
a.a=u
u=a.a=u+"      bendPos += posAttr*weight;\n"
if(t){u+="      bendNorm += normAttr*weight;\n"
a.a=u}u=(s?a.a=u+"      bendBinm += binmAttr*weight;\n":u)+"   }\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      bendPos = bendPos/weightSum;\n"
a.a=u
u=a.a=u+"   }\n"
if(t){u+="   bendNorm = normalize(bendNorm);\n"
a.a=u}u=(s?a.a=u+"   bendBinm = normalize(bendBinm);\n":u)+"}\n"
a.a=u
a.a=u+"\n"},
hA:function(a){var u
if(!this.r1)return
u=a.a+="varying vec3 normalVec;\n"
u+="\n"
a.a=u
u+="vec3 getNorm()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return normalize((viewObjMat*vec4("+(this.x1?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
hu:function(a){var u
if(!this.r2)return
u=a.a+="varying vec3 binormalVec;\n"
u+="\n"
a.a=u
u+="vec3 getBinm()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return normalize((viewObjMat*vec4("+(this.x1?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
hI:function(a){var u,t
if(!this.rx)return
u=this.x2
if(u)a.a+="uniform mat3 txt2DMat;\n"
t=a.a+="attribute vec2 txt2DAttr;\n"
t+="varying vec2 txt2D;\n"
a.a=t
t+="\n"
a.a=t
t+="vec2 getTxt2D()\n"
a.a=t
t=a.a=t+"{\n"
t=(u?a.a=t+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n":a.a=t+"   return vec3(txt2DAttr, 1.0).xy;\n")+"}\n"
a.a=t
a.a=t+"\n"},
hJ:function(a){var u,t
if(!this.ry)return
u=this.y1
if(u)a.a+="uniform mat4 txtCubeMat;\n"
t=a.a+="attribute vec3 txtCubeAttr;\n"
t+="varying vec3 txtCube;\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 getTxtCube()\n"
a.a=t
t=a.a=t+"{\n"
t=(u?a.a=t+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":a.a=t+"   return vec4(txtCubeAttr, 1.0).xyz;\n")+"}\n"
a.a=t
a.a=t+"\n"},
hC:function(a){var u
if(!this.k3)return
u=a.a+="varying vec3 objPos;\n"
u+="\n"
a.a=u
u+="vec3 getObjPos()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return (objMat*vec4("+(this.x1?"bendPos":"posAttr")+", 1.0)).xyz;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
hN:function(a){var u
if(!this.k4)return
u=a.a+="varying vec3 viewPos;\n"
u+="\n"
a.a=u
u+="vec3 getViewPos()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return (viewObjMat*vec4("+(this.x1?"bendPos":"posAttr")+", 1.0)).xyz;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
an:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.i(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.j.cv(c,1))+"Txt;\n")
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
hx:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.c)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.an(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.f:s=a.a=u+"   return emissionClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
hs:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.c)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.an(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.f:s=a.a=u+"   return ambientClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
hv:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.c)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.an(a,s,"diffuse")
u=a.a+="vec3 diffuseColor;\n"
u+="\n"
a.a=u
u+="void setDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.f:s=a.a=u+"   diffuseColor = diffuseClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   else diffuseColor = diffuseClr*textureCube(diffuseTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
s+="\n"
a.a=s
s+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
a.a=s
s+="{\n"
a.a=s
s+="   float scalar = dot(norm, -litVec);\n"
a.a=s
s+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   return diffuseColor*scalar;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
hy:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.c)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.an(a,s,"invDiffuse")
u=a.a+="vec3 invDiffuseColor;\n"
u+="\n"
a.a=u
u+="void setInvDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.f:s=a.a=u+"   invDiffuseColor = invDiffuseClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   else invDiffuseColor = invDiffuseClr*textureCube(invDiffuseTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
s+="\n"
a.a=s
s+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
a.a=s
s+="{\n"
a.a=s
s+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
a.a=s
s+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   return invDiffuseColor*scalar;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
hG:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.c)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.an(a,s,"specular")
u=a.a+="uniform float shininess;\n"
u+="vec3 specularColor;\n"
a.a=u
u+="\n"
a.a=u
u+="void setSpecularColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.f:s=a.a=u+"   specularColor = specularClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   else specularColor = specularClr*textureCube(specularTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
s+="\n"
a.a=s
s+="vec3 specular(vec3 norm, vec3 litVec)\n"
a.a=s
s+="{\n"
a.a=s
s+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
a.a=s
s+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
a.a=s
s+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   return specularColor*pow(scalar, shininess);\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
hB:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.c:break
case C.f:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break
case C.d:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break}u+="vec3 normal()\n"
a.a=u
u=a.a=u+"{\n"
switch(t){case C.c:u=a.a=u+r
break
case C.f:u=a.a=u+r
break
case C.e:u+=q
a.a=u
u+="   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n"
a.a=u
u+=p
a.a=u
u+=o
a.a=u
u+="   vec3 c = normalize(cross(b, n));\n"
a.a=u
u+=n
a.a=u
u+=m
a.a=u
u+=l
a.a=u
u+=k
a.a=u
u=a.a=u+j
break
case C.d:u+=q
a.a=u
u+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n"
a.a=u
u+=p
a.a=u
u+=o
a.a=u
u+="   vec3 c = cross(b, n);\n"
a.a=u
u+=n
a.a=u
u+=m
a.a=u
u+=l
a.a=u
u+=k
a.a=u
u=a.a=u+j
break}u+="}\n"
a.a=u
a.a=u+"\n"},
hE:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.c)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.an(a,s,"reflect")
u=a.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.c:s=u
break
case C.f:s=a.a=u+"   vec3 scalar = reflectClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
break
default:s=u}s+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
a.a=s
s+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
hF:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.c)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.an(a,s,"refract")
u=a.a+="uniform float refraction;\n"
u+="\n"
a.a=u
u+="vec3 refract(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.c:s=u
break
case C.f:s=a.a=u+"   vec3 scalar = refractClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
break
default:s=u}s+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
a.a=s
s+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
a.a=s
s+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
hw:function(a){var u,t=this.z
if(t<=0)return
u=a.a+="// === Directional Light ===\n"
u+="\n"
a.a=u
u+="struct DirLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 viewDir;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int dirLightCount;\n"
u=a.a+="uniform DirLight dirLights["+t+"];\n"
u+="\n"
a.a=u
u+="vec3 allDirLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
t=a.a+="   for(int i = 0; i < "+t+"; ++i)\n"
t+="   {\n"
a.a=t
t+="      if(i >= dirLightCount) break;\n"
a.a=t
t+="      DirLight lit = dirLights[i];\n"
a.a=t
t+="      lightAccum += lightValue(norm, lit.color, lit.viewDir);\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightAccum;\n"
a.a=t
t+="}\n"
a.a=t
a.a=t+"\n"},
hD:function(a){var u,t=this.Q
if(t<=0)return
u=a.a+="// === Point Light ===\n"
u+="\n"
a.a=u
u+="struct PointLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 point;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int pntLightCount;\n"
u=a.a+="uniform PointLight pntLights["+t+"];\n"
u+="\n"
a.a=u
u+="vec3 pointLightValue(vec3 norm, PointLight lit)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float dist = length(objPos - lit.point);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return lightValue(norm, lit.color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allPointLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
t=a.a+="   for(int i = 0; i < "+t+"; ++i)\n"
t+="   {\n"
a.a=t
t+="      if(i >= pntLightCount) break;\n"
a.a=t
t+="      lightAccum += pointLightValue(norm, pntLights[i]);\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightAccum;\n"
a.a=t
t+="}\n"
a.a=t
a.a=t+"\n"},
hH:function(a){var u,t=this.ch
if(t<=0)return
u=a.a+="// === Spot Light ===\n"
u+="\n"
a.a=u
u+="struct SpotLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 objPnt;\n"
a.a=u
u+="   vec3 objDir;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   float cutoff;\n"
a.a=u
u+="   float coneAngle;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int spotLightCount;\n"
u=a.a+="uniform SpotLight spotLights["+t+"];\n"
u+="\n"
a.a=u
u+="vec3 spotLightValue(vec3 norm, SpotLight lit)\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=u
u+="   float dist = length(dir);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   float angle = acos(dot(normalize(dir), lit.objDir));\n"
a.a=u
u+="   float scale = (lit.cutoff-angle)/(lit.cutoff-lit.coneAngle);\n"
a.a=u
u+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   if(scale > 1.0) scale = 1.0;\n"
a.a=u
u+="   return lightValue(norm, lit.color*attenuation*scale, normalize(viewPos - lit.viewPnt));\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allSpotLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
t=a.a+="   for(int i = 0; i < "+t+"; ++i)\n"
t+="   {\n"
a.a=t
t+="      if(i >= spotLightCount) break;\n"
a.a=t
t+="      lightAccum += spotLightValue(norm, spotLights[i]);\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightAccum;\n"
a.a=t
t+="}\n"
a.a=t
a.a=t+"\n"},
hK:function(a){var u,t,s=this.cx
if(s<=0)return
u=a.a+="// === Texture Directional Light ===\n"
u+="\n"
a.a=u
u+="struct TexturedDirLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 objUp;\n"
a.a=u
u+="   vec3 objRight;\n"
a.a=u
u+="   vec3 objDir;\n"
a.a=u
u+="   vec3 viewDir;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   int nullTxt;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int txtDirLightCount;\n"
u=a.a+="uniform TexturedDirLight txtDirLights["+s+"];\n"
for(t=0;t<s;++t)u=a.a+="uniform sampler2D txtDirLightsTxt2D"+t+";\n"
u+="\n"
a.a=u
u+="vec3 txtDirLightValue(vec3 norm, TexturedDirLight lit, sampler2D txt2D)\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
a.a=u
u+="      float tu = dot(offset, lit.objUp);\n"
a.a=u
u+="      float tv = dot(offset, lit.objRight);\n"
a.a=u
u+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightValue(norm, color, lit.viewDir);\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allTxtDirLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
for(t=0;t<s;++t){a.a+="   if(txtDirLightCount <= "+t+") return lightAccum;\n"
u=a.a+="   lightAccum += txtDirLightValue(norm, txtDirLights["+t+"], txtDirLightsTxt2D"+t+");\n"}s=u+"   return lightAccum;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
hL:function(a){var u,t,s=this.cy
if(s<=0)return
u=a.a+="// === Texture Point Light ===\n"
u+="\n"
a.a=u
u+="struct TexturedPointLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 point;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   mat3 invViewRotMat;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   int nullTxt;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int txtPntLightCount;\n"
u=a.a+="uniform TexturedPointLight txtPntLights["+s+"];\n"
for(t=0;t<s;++t)u=a.a+="uniform samplerCube txtPntLightsTxtCube"+t+";\n"
u+="\n"
a.a=u
u+="vec3 txtPointLightValue(vec3 norm, TexturedPointLight lit, samplerCube txtCube)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float dist = length(objPos - lit.point);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      vec3 invNormDir = lit.invViewRotMat*normDir;\n"
a.a=u
u+="      color = lit.color*textureCube(txtCube, invNormDir).xyz;\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightValue(norm, attenuation*color, normDir);\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allTxtPointLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
for(t=0;t<s;++t){a.a+="   if(txtPntLightCount <= "+t+") return lightAccum;\n"
u=a.a+="   lightAccum += txtPointLightValue(norm, txtPntLights["+t+"], txtPntLightsTxtCube"+t+");\n"}s=u+"   return lightAccum;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
hM:function(a){var u,t,s=this.db
if(s<=0)return
u=a.a+="// === Texture Spot Light ===\n"
u+="\n"
a.a=u
u+="struct TexturedSpotLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 objPnt;\n"
a.a=u
u+="   vec3 objDir;\n"
a.a=u
u+="   vec3 objUp;\n"
a.a=u
u+="   vec3 objRight;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   int nullTxt;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   float tuScalar;\n"
a.a=u
u+="   float tvScalar;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int txtSpotLightCount;\n"
u=a.a+="uniform TexturedSpotLight txtSpotLights["+s+"];\n"
for(t=0;t<s;++t)u=a.a+="uniform sampler2D txtSpotLightsTxt2D"+t+";\n"
u+="\n"
a.a=u
u+="vec3 txtSpotLightValue(vec3 norm, TexturedSpotLight lit, sampler2D txt2D)\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=u
u+="   float dist = length(dir);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 normDir = normalize(dir);\n"
a.a=u
u+="   float zScale = dot(normDir, lit.objDir);\n"
a.a=u
u+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   normDir = normDir/zScale;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      float tu = dot(normDir, lit.objUp)*lit.tuScalar+0.5;\n"
a.a=u
u+="      if((tu > 1.0) || (tu < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="      float tv = dot(normDir, lit.objRight)*lit.tvScalar+0.5;\n"
a.a=u
u+="      if((tv > 1.0) || (tv < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightValue(norm, color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allTxtSpotLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
for(t=0;t<s;++t){a.a+="   if(txtSpotLightCount <= "+t+") return lightAccum;\n"
u=a.a+="   lightAccum += txtSpotLightValue(norm, txtSpotLights["+t+"], txtSpotLightsTxt2D"+t+");\n"}s=u+"   return lightAccum;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
hz:function(a){var u
if(this.dx>0)return
u=a.a+="// === No Lights ===\n"
u+="\n"
a.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u+="   return lightValue(norm, vec3(1.0, 1.0, 1.0), vec3(0.0, 0.0, 1.0));\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
i:function(a){return this.ad}}
A.cs.prototype={}
A.cw.prototype={}
A.cu.prototype={}
A.cx.prototype={}
A.cv.prototype={}
A.cy.prototype={}
A.cl.prototype={
cB:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dH:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cQ(b,35633)
r.f=r.cQ(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.x(H.kr(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.r("Failed to link shader: "+H.l(s)))}r.h6()
r.h8()},
W:function(a){a.a.useProgram(this.r)
this.x.i_()},
cQ:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.x(H.kr(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.h(P.r("Error compiling shader '"+H.l(s)+"': "+H.l(u)))}return s},
h6:function(){var u,t,s,r=this,q=H.c([],[A.cS]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cS(p,t.name,s))}r.x=new A.eP(q)},
h8:function(){var u,t,s,r=this,q=H.c([],[A.dG]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hW(t.type,t.size,t.name,s))}r.y=new A.hU(q)},
aD:function(a,b,c){var u=this.a
if(a===1)return new A.I(u,b,c)
else return A.jn(u,this.r,b,a,c)},
eD:function(a,b,c){var u=this.a
if(a===1)return new A.ai(u,b,c)
else return A.jn(u,this.r,b,a,c)},
eE:function(a,b,c){var u=this.a
if(a===1)return new A.ac(u,b,c)
else return A.jn(u,this.r,b,a,c)},
b7:function(a,b){return new P.e_(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hW:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aD(b,c,d)
case 5121:return u.aD(b,c,d)
case 5122:return u.aD(b,c,d)
case 5123:return u.aD(b,c,d)
case 5124:return u.aD(b,c,d)
case 5125:return u.aD(b,c,d)
case 5126:return new A.V(u.a,c,d)
case 35664:return new A.hP(u.a,c,d)
case 35665:return new A.H(u.a,c,d)
case 35666:return new A.hS(u.a,c,d)
case 35667:return new A.hQ(u.a,c,d)
case 35668:return new A.hR(u.a,c,d)
case 35669:return new A.hT(u.a,c,d)
case 35674:return new A.hV(u.a,c,d)
case 35675:return new A.ct(u.a,c,d)
case 35676:return new A.al(u.a,c,d)
case 35678:return u.eD(b,c,d)
case 35680:return u.eE(b,c,d)
case 35670:throw H.h(u.b7("BOOL",c))
case 35671:throw H.h(u.b7("BOOL_VEC2",c))
case 35672:throw H.h(u.b7("BOOL_VEC3",c))
case 35673:throw H.h(u.b7("BOOL_VEC4",c))
default:throw H.h(P.r("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bE.prototype={
i:function(a){return this.b}}
A.dv.prototype={}
A.dG.prototype={}
A.hU.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
l:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.H()},
H:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.I.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.hQ.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.hR.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.hT.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.hO.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
shq:function(a){H.j(a,"$ib",[P.B],"$ab")}}
A.V.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.hP.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.H.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.hS.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.hV.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.ct.prototype={
aa:function(a){var u=new Float32Array(H.cL(H.j(a,"$ib",[P.y],"$ab")))
C.b.dZ(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.al.prototype={
aa:function(a){var u=new Float32Array(H.cL(H.j(a,"$ib",[P.y],"$ab")))
C.b.e_(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ai.prototype={
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.ac.prototype={
cs:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.iR.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cf(s.b,b).cf(s.d.cf(s.c,b),c)
s=new V.ah(r.a,r.b,r.c)
if(!J.X(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a1()}a.sb0(r.t(0,Math.sqrt(r.A(r))))
s=1-b
u=1-c
u=new V.bb(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.X(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a1()}},
$S:34}
F.a2.prototype={
ew:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dP()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dI())return
return s.t(0,Math.sqrt(s.A(s)))},
eA:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.E(0,q)
r=new V.M(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.A(r)))
r=t.E(0,q)
r=new V.M(r.a,r.b,r.c)
r=s.aU(r.t(0,Math.sqrt(r.A(r))))
return r.t(0,Math.sqrt(r.A(r)))},
c_:function(){var u,t=this
if(t.d!=null)return!0
u=t.ew()
if(u==null){u=t.eA()
if(u==null)return!1}t.d=u
t.a.a.a1()
return!0},
ev:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dP()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dI())return
return s.t(0,Math.sqrt(s.A(s)))},
ez:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.L().a){l=d.E(0,g)
l=new V.M(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.A(l)))
if(s.a-t.a<0)q=q.K(0)}else{p=(l-u.b)/r
l=d.E(0,g)
l=new V.ah(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).E(0,j)
l=new V.M(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.A(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.K(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.A(l)))
l=o.aU(q)
l=l.t(0,Math.sqrt(l.A(l))).aU(o)
q=l.t(0,Math.sqrt(l.A(l)))}return q},
bY:function(){var u,t=this
if(t.e!=null)return!0
u=t.ev()
if(u==null){u=t.ez()
if(u==null)return!1}t.e=u
t.a.a.a1()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
w:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.j.a9(J.ar(s.e),0)+", "+C.j.a9(J.ar(t.b.e),0)+", "+C.j.a9(J.ar(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
H:function(){return this.w("")}}
F.b5.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
w:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.j.a9(J.ar(u.e),0)+", "+C.j.a9(J.ar(this.b.e),0)},
H:function(){return this.w("")}}
F.bs.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
w:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.a9(J.ar(u.e),0)},
H:function(){return this.w("")}}
F.dt.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.J():u},
i9:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.Y()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.A)(g),++s){r=g[s]
h.a.h(0,r.hV())}h.a.Y()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.A)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.i(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bs()
if(n.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.u(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.A)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.i(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.Y()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.i(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.l9(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.A)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.i(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.Y()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.i(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.i(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.c7(l,k,i)}g=h.e
if(g!=null)g.ax(0)},
aq:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aq()||!1
if(!t.a.aq())u=!1
s=t.e
if(s!=null)s.ax(0)
return u},
da:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aC()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bg().a)!==0)++s
if((t&$.bf().a)!==0)++s
if((t&$.bh().a)!==0)++s
if((t&$.bi().a)!==0)++s
if((t&$.cQ().a)!==0)++s
if((t&$.cR().a)!==0)++s
if((t&$.bV().a)!==0)++s
if((t&$.be().a)!==0)++s
r=a3.gcu(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.y
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cV])
for(n=0,m=0;m<s;++m){l=a3.hR(m)
k=l.gcu(l)
C.a.V(o,m,new Z.cV(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.i(u,j)
i=u[j].i7(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.V(p,h,i[g]);++h}}n+=k}H.j(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cL(p)),35044)
u.bindBuffer(a0,null)
e=new Z.c_(new Z.dQ(a0,f),o,a3)
e.seP(H.c([],[Z.bn]))
if(a.b.b.length!==0){t=P.B
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.Y()
C.a.h(d,c.e)}b=Z.jo(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bn(0,d.length,b))}if(a.c.b.length!==0){t=P.B
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.Y()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.i(c,m)
c=c[m].b
c.a.a.Y()
C.a.h(d,c.e)}b=Z.jo(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bn(1,d.length,b))}if(a.d.b.length!==0){t=P.B
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.Y()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.i(c,m)
c=c[m].b
c.a.a.Y()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.i(c,m)
c=c[m].c
c.a.a.Y()
C.a.h(d,c.e)}b=Z.jo(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bn(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.o])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.w(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.w(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.w(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.w(t))}return C.a.v(s,"\n")},
a1:function(){var u=this.e
if(u!=null)u.u(null)},
$ims:1}
F.hh.prototype={
hP:function(a){var u,t,s,r,q,p
H.j(a,"$ib",[F.ap],"$ab")
u=H.c([],[F.a2])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.c7(t,q,p))}return u},
hQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,"$ib",[F.ap],"$ab")
u=H.c([],[F.a2])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.i(c,r)
l=c[r];++r
if(r>=m)return H.i(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.i(c,j)
i=c[j]
if(s<0||s>=m)return H.i(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.c7(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c7(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c7(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.c7(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
aq:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].c_())s=!1
return s},
bZ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].bY())s=!1
return s},
i:function(a){return this.H()},
w:function(a){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].w(a))
return C.a.v(r,"\n")},
H:function(){return this.w("")},
seJ:function(a){this.b=H.j(a,"$ib",[F.a2],"$ab")}}
F.hi.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.H()},
w:function(a){var u,t,s=H.c([],[P.o]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.i(t,u)
C.a.h(s,t[u].w(a+(""+u+". ")))}return C.a.v(s,"\n")},
H:function(){return this.w("")},
seQ:function(a){this.b=H.j(a,"$ib",[F.b5],"$ab")}}
F.hj.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.H()},
w:function(a){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].w(a))
return C.a.v(r,"\n")},
H:function(){return this.w("")},
sbO:function(a){this.b=H.j(a,"$ib",[F.bs],"$ab")}}
F.ap.prototype={
c1:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.i2(u.cx,r,o,t,s,q,p,a,n)},
hV:function(){return this.c1(null)},
sb0:function(a){var u
if(!J.X(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a1()}},
i7:function(a){var u,t,s=this
if(a.p(0,$.aC())){u=s.f
t=[P.y]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bg())){u=s.r
t=[P.y]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bf())){u=s.x
t=[P.y]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bh())){u=s.y
t=[P.y]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.p(0,$.bi())){u=s.z
t=[P.y]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.cQ())){u=s.Q
t=[P.y]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.cR())){u=s.Q
t=[P.y]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bV()))return H.c([s.ch],[P.y])
else if(a.p(0,$.be())){u=s.cx
t=[P.y]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.y])},
c_:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dP()
t.d.M(0,new F.ia(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.a1()
s=t.a.e
if(s!=null)s.ax(0)}return!0},
bY:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dP()
t.d.M(0,new F.i9(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.a1()
s=t.a.e
if(s!=null)s.ax(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
w:function(a){var u,t,s=this,r="-",q=H.c([],[P.o])
C.a.h(q,C.j.a9(J.ar(s.e),0))
u=s.f
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.r
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.x
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.y
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.z
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.Q
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
C.a.h(q,V.R(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.v(q,", ")
return a+"{"+t+"}"},
H:function(){return this.w("")}}
F.ia.prototype={
$1:function(a){var u,t
H.k(a,"$ia2")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:5}
F.i9.prototype={
$1:function(a){var u,t
H.k(a,"$ia2")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:5}
F.i3.prototype={
Y:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.h(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a1()
return!0},
b8:function(a,b,c,d,e,f){var u=F.i2(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
aq:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].c_()
return!0},
bZ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].bY()
return!0},
hT:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.X(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.u(null)}}}}return!0},
i:function(a){return this.H()},
w:function(a){var u,t,s,r
this.Y()
u=H.c([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].w(a))
return C.a.v(u,"\n")},
H:function(){return this.w("")},
shr:function(a){this.c=H.j(a,"$ib",[F.ap],"$ab")}}
F.i4.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
M:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a2]})
C.a.M(u.b,b)
C.a.M(u.c,new F.i5(u,b))
C.a.M(u.d,new F.i6(u,b))},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].w(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].w(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].w(""))
return C.a.v(r,"\n")},
seK:function(a){this.b=H.j(a,"$ib",[F.a2],"$ab")},
seL:function(a){this.c=H.j(a,"$ib",[F.a2],"$ab")},
seM:function(a){this.d=H.j(a,"$ib",[F.a2],"$ab")}}
F.i5.prototype={
$1:function(a){H.k(a,"$ia2")
if(!J.X(a.a,this.a))this.b.$1(a)},
$S:5}
F.i6.prototype={
$1:function(a){var u
H.k(a,"$ia2")
u=this.a
if(!J.X(a.a,u)&&!J.X(a.b,u))this.b.$1(a)},
$S:5}
F.i7.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].w(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].w(""))
return C.a.v(r,"\n")},
seR:function(a){this.b=H.j(a,"$ib",[F.b5],"$ab")},
seS:function(a){this.c=H.j(a,"$ib",[F.b5],"$ab")}}
F.i8.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].w(""))
return C.a.v(r,"\n")},
sbO:function(a){this.b=H.j(a,"$ib",[F.bs],"$ab")}}
O.dh.prototype={
gm:function(){var u=this.dy
return u==null?this.dy=D.J():u},
O:function(a){var u
H.k(a,"$iv")
u=this.dy
if(u!=null)u.u(a)},
aO:function(){return this.O(null)},
d0:function(a){H.k(a,"$iv")
this.a=null
this.O(a)},
h_:function(){return this.d0(null)},
f4:function(a,b){var u=V.a6
H.j(b,"$id",[u],"$ad")
u=new D.bo([u])
u.b=!0
this.O(u)},
f6:function(a,b){var u=V.a6
H.j(b,"$id",[u],"$ad")
u=new D.bp([u])
u.b=!0
this.O(u)},
cN:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.h.a0(a1.e.length+3,4)*4,a3=C.h.a0(a1.f.length+3,4)*4,a4=C.h.a0(a1.r.length+3,4)*4,a5=C.h.a0(a1.x.length+3,4)*4,a6=C.h.a0(a1.y.length+3,4)*4,a7=C.h.a0(a1.z.length+3,4)*4,a8=C.h.a0(a0.e.a.length+3,4)*4
a1=a0.f.c
u=a0.r.c
t=a0.x.c
s=a0.y.c
r=a0.z.c
q=a0.Q.c
p=a0.cx.c
o=a0.cy.c
n=a0.db.c
m="MaterialLight_"+C.h.i(a1.a)+C.h.i(u.a)+C.h.i(t.a)+C.h.i(s.a)+C.h.i(r.a)+C.h.i(q.a)+C.h.i(p.a)+C.h.i(o.a)+C.h.i(n.a)
m+"_"
m+"_0"
m+"_00"
m+"_000"
m=m+"_000_"+a8+"_"+a2+"_"+a3+"_"+a4+"_"+a5+"_"+a6+"_"+a7
l=p!==C.c||o!==C.c
k=u!==C.c||t!==C.c||s!==C.c||r!==C.c
j=r===C.c
i=!j||a3+a6>0||l
h=t!==C.c||s!==C.c||!j||q!==C.c||l
j=q===C.c
g=!j
f=a1===C.e||u===C.e||t===C.e||s===C.e||r===C.e||q===C.e||p===C.e||o===C.e||n===C.e
e=a1===C.d||u===C.d||t===C.d||s===C.d||r===C.d||q===C.d||p===C.d||o===C.d||n===C.d
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.aC()
if(h){j=$.bg()
a=new Z.b0(a.a|j.a)}if(g){j=$.bf()
a=new Z.b0(a.a|j.a)}if(f){j=$.bh()
a=new Z.b0(a.a|j.a)}if(e){j=$.bi()
a=new Z.b0(a.a|j.a)}if(c){j=$.be()
a=new Z.b0(a.a|j.a)}return new A.fJ(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
U:function(a,b){H.j(a,"$ib",[T.co],"$ab")
if(b!=null)if(!C.a.ar(a,b)){b.a=a.length
C.a.h(a,b)}},
af:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ae(u,u.length,[H.w(u,0)]);u.B();){t=u.d
t.toString
s=$.i1
if(s==null)s=$.i1=new V.M(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.co(s)}}},
dU:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.cN()
u=H.k(a3.fr.j(0,a2.ad),"$idi")
if(u==null){u=A.le(a2,a3.a)
a3.d7(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.b9
a2=a4.e
if(!(a2 instanceof Z.c_))a2=a4.e=null
if(a2==null||!a2.d.p(0,s)){a2=t.r1
if(a2)a4.d.aq()
r=t.r2
if(r){q=a4.d
p=q.e
if(p!=null)++p.d
q.d.bZ()
q.a.bZ()
q=q.e
if(q!=null)q.ax(0)}q=t.ry
if(q){p=a4.d
o=p.e
if(o!=null)++o.d
p.a.hT()
p=p.e
if(p!=null)p.ax(0)}n=a4.d.da(new Z.dR(a3.a),s)
n.as($.aC()).e=a1.a.Q.c
if(a2)n.as($.bg()).e=a1.a.cx.c
if(r)n.as($.bf()).e=a1.a.ch.c
if(t.rx)n.as($.bh()).e=a1.a.cy.c
if(q)n.as($.bi()).e=a1.a.db.c
if(t.x1)n.as($.be()).e=a1.a.dx.c
a4.e=n}a2=T.co
m=H.c([],[a2])
a1.a.W(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.gL(q)
r=r.dy
r.toString
r.aa(q.a6(0,!0))}if(t.fy){r=a1.a
q=a3.cx
if(q==null){q=a3.db
q=q.gL(q)
p=a3.dx
p=a3.cx=q.q(0,p.gL(p))
q=p}r=r.fr
r.toString
r.aa(q.a6(0,!0))}r=a1.a
q=a3.ch
if(q==null){q=a3.gir()
p=a3.dx
p=a3.ch=q.q(0,p.gL(p))
q=p}r=r.fy
r.toString
r.aa(q.a6(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.aa(C.n.a6(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.aa(C.n.a6(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.aa(C.n.a6(q,!0))}if(t.ak>0){l=a1.e.a.length
r=a1.a.k4
C.b.X(r.a,r.d,l)
for(r=[P.y],k=0;k<l;++k){q=a1.a
p=a1.e.a
if(k>=p.length)return H.i(p,k)
p=p[k]
q.toString
H.k(p,"$ia6")
q=q.r1
if(k>=q.length)return H.i(q,k)
q=q[k]
j=new Float32Array(H.cL(H.j(p.a6(0,!0),"$ib",r,"$ab")))
C.b.e_(q.a,q.d,!1,j)}}switch(t.a){case C.c:break
case C.f:r=a1.a
q=a1.f.f
r=r.r2
r.toString
p=q.a
o=q.b
q=q.c
C.b.n(r.a,r.d,p,o,q)
break
case C.e:a1.U(m,a1.f.d)
r=a1.a
q=a1.f.d
r.ac(r.rx,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.b.n(q.a,q.d,p,o,r)
break
case C.d:a1.U(m,a1.f.e)
r=a1.a
q=a1.f.e
r.a7(r.ry,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.b.n(q.a,q.d,p,o,r)
break}if(t.k2){switch(t.b){case C.c:break
case C.f:r=a1.a
q=a1.r.f
r=r.x2
r.toString
p=q.a
o=q.b
q=q.c
C.b.n(r.a,r.d,p,o,q)
break
case C.e:a1.U(m,a1.r.d)
r=a1.a
q=a1.r.d
r.ac(r.y1,r.ak,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.n(q.a,q.d,p,o,r)
break
case C.d:a1.U(m,a1.r.e)
r=a1.a
q=a1.r.e
r.a7(r.y2,r.ak,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.n(q.a,q.d,p,o,r)
break}switch(t.c){case C.c:break
case C.f:r=a1.a
q=a1.x.f
r=r.ad
r.toString
p=q.a
o=q.b
q=q.c
C.b.n(r.a,r.d,p,o,q)
break
case C.e:a1.U(m,a1.x.d)
r=a1.a
q=a1.x.d
r.ac(r.b9,r.ba,q)
q=a1.a
r=a1.x.f
q=q.ad
q.toString
p=r.a
o=r.b
r=r.c
C.b.n(q.a,q.d,p,o,r)
break
case C.d:a1.U(m,a1.x.e)
r=a1.a
q=a1.x.e
r.a7(r.di,r.ba,q)
q=a1.a
r=a1.x.f
q=q.ad
q.toString
p=r.a
o=r.b
r=r.c
C.b.n(q.a,q.d,p,o,r)
break}switch(t.d){case C.c:break
case C.f:r=a1.a
q=a1.y.f
r=r.bb
r.toString
p=q.a
o=q.b
q=q.c
C.b.n(r.a,r.d,p,o,q)
break
case C.e:a1.U(m,a1.y.d)
r=a1.a
q=a1.y.d
r.ac(r.dj,r.bc,q)
q=a1.a
r=a1.y.f
q=q.bb
q.toString
p=r.a
o=r.b
r=r.c
C.b.n(q.a,q.d,p,o,r)
break
case C.d:a1.U(m,a1.y.e)
r=a1.a
q=a1.y.e
r.a7(r.dk,r.bc,q)
q=a1.a
r=a1.y.f
q=q.bb
q.toString
p=r.a
o=r.b
r=r.c
C.b.n(q.a,q.d,p,o,r)
break}switch(t.e){case C.c:break
case C.f:r=a1.a
q=a1.z.f
r=r.bd
r.toString
p=q.a
o=q.b
q=q.c
C.b.n(r.a,r.d,p,o,q)
q=a1.a
o=a1.z.ch
q=q.bf
C.b.G(q.a,q.d,o)
break
case C.e:a1.U(m,a1.z.d)
r=a1.a
q=a1.z.d
r.ac(r.dl,r.be,q)
q=a1.a
r=a1.z.f
q=q.bd
q.toString
p=r.a
o=r.b
r=r.c
C.b.n(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bf
C.b.G(r.a,r.d,o)
break
case C.d:a1.U(m,a1.z.e)
r=a1.a
q=a1.z.e
r.a7(r.dm,r.be,q)
q=a1.a
r=a1.z.f
q=q.bd
q.toString
p=r.a
o=r.b
r=r.c
C.b.n(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bf
C.b.G(r.a,r.d,o)
break}if(t.z>0){l=a1.dx.e.length
r=a1.a.dB
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gL(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.A)(r),++g){f=r[g]
p=a1.a.c4
if(h>=p.length)return H.i(p,h)
e=p[h]
p=i.co(f.a)
o=p.a
d=p.b
c=p.c
c=p.t(0,Math.sqrt(o*o+d*d+c*c))
d=e.b
o=c.a
p=c.b
c=c.c
C.b.n(d.a,d.d,o,p,c)
c=f.c
p=e.c
C.b.n(p.a,p.d,c.a,c.b,c.c);++h}}if(t.Q>0){l=a1.dx.f.length
r=a1.a.dC
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gL(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.A)(r),++g){f=r[g]
p=a1.a.c5
if(h>=p.length)return H.i(p,h)
e=p[h]
p=f.gaX(f)
o=e.b
C.b.n(o.a,o.d,p.a,p.b,p.c)
p=i.b2(f.gaX(f))
o=e.c
C.b.n(o.a,o.d,p.a,p.b,p.c)
p=f.gaj(f)
o=e.d
C.b.n(o.a,o.d,p.a,p.b,p.c)
p=f.gbU()
o=e.e
C.b.G(o.a,o.d,p)
p=f.gbV()
o=e.f
C.b.G(o.a,o.d,p)
p=f.gbW()
o=e.r
C.b.G(o.a,o.d,p);++h}}if(t.ch>0){l=a1.dx.r.length
r=a1.a.dD
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gL(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.A)(r),++g){f=r[g]
p=a1.a.c6
if(h>=p.length)return H.i(p,h)
e=p[h]
p=f.gaX(f)
o=e.b
C.b.n(o.a,o.d,p.a,p.b,p.c)
p=f.gc3(f).iG()
o=e.c
C.b.n(o.a,o.d,p.a,p.b,p.c)
p=i.b2(f.gaX(f))
o=e.d
C.b.n(o.a,o.d,p.a,p.b,p.c)
p=f.gaj(f)
o=e.e
C.b.n(o.a,o.d,p.a,p.b,p.c)
p=f.giF()
o=e.f
C.b.G(o.a,o.d,p)
p=f.giE()
o=e.r
C.b.G(o.a,o.d,p)
p=f.gbU()
o=e.x
C.b.G(o.a,o.d,p)
p=f.gbV()
o=e.y
C.b.G(o.a,o.d,p)
p=f.gbW()
o=e.z
C.b.G(o.a,o.d,p);++h}}if(t.cx>0){l=a1.dx.x.length
r=a1.a.dE
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gL(r)
for(r=a1.dx.x,q=r.length,p=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.A)(r),++g){f=r[g]
o=a1.a.c7
if(h>=o.length)return H.i(o,h)
e=o[h]
o=f.gb_()
H.j(m,"$ib",p,"$ab")
if(!C.a.ar(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gc3(f)
d=e.d
C.b.n(d.a,d.d,o.a,o.b,o.c)
o=f.gbt()
d=e.b
C.b.n(d.a,d.d,o.a,o.b,o.c)
o=f.gbr(f)
d=e.c
C.b.n(d.a,d.d,o.a,o.b,o.c)
o=i.co(f.gc3(f))
d=o.a
c=o.b
b=o.c
b=o.t(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
o=b.b
b=b.c
C.b.n(c.a,c.d,d,o,b)
b=f.gaj(f)
o=e.f
C.b.n(o.a,o.d,b.a,b.b,b.c)
b=f.gb_()
o=b.gbp(b)
if(!o){o=e.x
C.b.X(o.a,o.d,1)}else{o=e.r
d=b.gbp(b)
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,b.gi3(b))
o=e.x
C.b.X(o.a,o.d,0)}++h}}if(t.cy>0){l=a1.dx.y.length
r=a1.a.dF
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gL(r)
for(r=a1.dx.y,q=r.length,p=[P.y],o=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.A)(r),++g){f=r[g]
d=a1.a.c8
if(h>=d.length)return H.i(d,h)
e=d[h]
d=f.gb_()
H.j(m,"$ib",o,"$ab")
if(!C.a.ar(m,d)){d.a=m.length
C.a.h(m,d)}a=i.q(0,f.gL(f))
d=f.gL(f)
c=$.ci
d=d.b2(c==null?$.ci=new V.ah(0,0,0):c)
c=e.b
C.b.n(c.a,c.d,d.a,d.b,d.c)
d=$.ci
d=a.b2(d==null?$.ci=new V.ah(0,0,0):d)
c=e.c
C.b.n(c.a,c.d,d.a,d.b,d.c)
d=a.cc(0)
c=e.d
j=new Float32Array(H.cL(H.j(new V.dj(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).a6(0,!0),"$ib",p,"$ab")))
C.b.dZ(c.a,c.d,!1,j)
c=f.gaj(f)
d=e.e
C.b.n(d.a,d.d,c.a,c.b,c.c)
c=f.gb_()
d=c.gbp(c)
if(!d){d=e.r
C.b.X(d.a,d.d,1)}else{d=e.f
b=c.d
a0=d.a
d=d.d
if(b<6)a0.uniform1i(d,0)
else a0.uniform1i(d,c.a)
d=e.r
C.b.X(d.a,d.d,0)}d=f.gbU()
c=e.x
C.b.G(c.a,c.d,d)
d=f.gbV()
c=e.y
C.b.G(c.a,c.d,d)
d=f.gbW()
c=e.z
C.b.G(c.a,c.d,d);++h}}if(t.db>0){l=a1.dx.z.length
r=a1.a.dG
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gL(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.A)(r),++g){f=r[g]
p=a1.a.c9
if(h>=p.length)return H.i(p,h)
e=p[h]
p=f.gb_()
H.j(m,"$ib",a2,"$ab")
if(!C.a.ar(m,p)){p.a=m.length
C.a.h(m,p)}p=f.gaX(f)
o=e.b
C.b.n(o.a,o.d,p.a,p.b,p.c)
p=f.gc3(f)
o=e.c
C.b.n(o.a,o.d,p.a,p.b,p.c)
p=f.gbt()
o=e.d
C.b.n(o.a,o.d,p.a,p.b,p.c)
p=f.gbr(f)
o=e.e
C.b.n(o.a,o.d,p.a,p.b,p.c)
p=i.b2(f.gaX(f))
o=e.f
C.b.n(o.a,o.d,p.a,p.b,p.c)
p=f.gb_()
o=p.gbp(p)
if(!o){p=e.x
C.b.X(p.a,p.d,1)}else{o=e.r
d=p.gbp(p)
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,p.gi3(p))
p=e.x
C.b.X(p.a,p.d,0)}p=f.gaj(f)
o=e.y
C.b.n(o.a,o.d,p.a,p.b,p.c)
p=f.giH()
o=e.z
C.b.G(o.a,o.d,p)
p=f.giI()
o=e.Q
C.b.G(o.a,o.d,p)
p=f.gbU()
o=e.ch
C.b.G(o.a,o.d,p)
p=f.gbV()
o=e.cx
C.b.G(o.a,o.d,p)
p=f.gbW()
o=e.cy
C.b.G(o.a,o.d,p);++h}}}switch(t.f){case C.c:break
case C.f:break
case C.e:a1.U(m,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.ac(a2.dn,a2.bg,r)
break
case C.d:a1.U(m,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.a7(a2.dq,a2.bg,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.gL(r).cc(0)}a2=a2.id
a2.toString
a2.aa(r.a6(0,!0))}if(t.dy){a1.U(m,a1.ch)
a2=a1.a
r=a1.ch
a2.a7(a2.dr,a2.ds,r)
switch(t.r){case C.c:break
case C.f:a2=a1.a
r=a1.cx.f
a2=a2.bh
a2.toString
q=r.a
p=r.b
r=r.c
C.b.n(a2.a,a2.d,q,p,r)
break
case C.e:a1.U(m,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.ac(a2.dt,a2.bi,r)
r=a1.a
a2=a1.cx.f
r=r.bh
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.n(r.a,r.d,q,p,a2)
break
case C.d:a1.U(m,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.a7(a2.du,a2.bi,r)
r=a1.a
a2=a1.cx.f
r=r.bh
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.n(r.a,r.d,q,p,a2)
break}switch(t.x){case C.c:break
case C.f:a2=a1.a
r=a1.cy.f
a2=a2.bk
a2.toString
q=r.a
p=r.b
r=r.c
C.b.n(a2.a,a2.d,q,p,r)
r=a1.a
p=a1.cy.ch
r=r.bj
C.b.G(r.a,r.d,p)
break
case C.e:a1.U(m,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.ac(a2.dv,a2.bl,r)
r=a1.a
a2=a1.cy.f
r=r.bk
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.n(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bj
C.b.G(a2.a,a2.d,p)
break
case C.d:a1.U(m,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.a7(a2.dw,a2.bl,r)
r=a1.a
a2=a1.cy.f
r=r.bk
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.n(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bj
C.b.G(a2.a,a2.d,p)
break}}a2=t.y
r=a2!==C.c
if(r){switch(a2){case C.c:break
case C.f:a2=a1.a
q=a1.db.f
a2=a2.bm
C.b.G(a2.a,a2.d,q)
break
case C.e:a1.U(m,a1.db.d)
a2=a1.a
q=a1.db.d
a2.ac(a2.dz,a2.bn,q)
q=a1.a
a2=a1.db.f
q=q.bm
C.b.G(q.a,q.d,a2)
break
case C.d:a1.U(m,a1.db.e)
a2=a1.a
q=a1.db.e
a2.a7(a2.dA,a2.bn,q)
q=a1.a
a2=a1.db.f
q=q.bm
C.b.G(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].W(a3)
a2=a4.e
a2.W(a3)
a2.a3(a3)
a2.ay(a3)
if(r)a3.a.disable(3042)
for(a2=a3.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
a2.activeTexture(33984+r.a)
a2.bindTexture(34067,null)}}r=a1.a
r.toString
a2.useProgram(null)
r.x.dg()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cN().ad},
sey:function(a){this.e=H.j(a,"$iT",[V.a6],"$aT")}}
O.fH.prototype={
h2:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.L().a)){u.f=a
t=new D.E(u.b,t,a,[P.y])
t.b=!0
u.a.O(t)}},
ah:function(){this.cA()
this.h2(1)}}
O.cc.prototype={
O:function(a){this.a.O(H.k(a,"$iv"))},
aO:function(){return this.O(null)},
ah:function(){},
h4:function(a){},
h5:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gm().N(0,t.gaF())
u=t.e
t.e=a
if(a!=null)a.gm().h(0,t.gaF())
s=new D.E(t.b+".textureCube",u,t.e,[T.cp])
s.b=!0
t.a.O(s)}},
sb0:function(a){var u=this,t=u.c
if(t!==C.d){if(t===C.c)u.ah()
u.c=C.d
u.h4(null)
t=u.a
t.a=null
t.O(null)}u.h5(a)}}
O.fI.prototype={}
O.aO.prototype={
d2:function(a){var u,t,s=this
if(!J.X(s.f,a)){u=s.f
s.f=a
t=new D.E(s.b+".color",u,a,[V.Z])
t.b=!0
s.a.O(t)}},
ah:function(){this.cA()
this.d2(new V.Z(1,1,1))},
saj:function(a,b){var u,t=this
if(t.c===C.c){t.c=C.f
t.ah()
u=t.a
u.a=null
u.O(null)}t.d2(b)}}
O.fK.prototype={
h3:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.L().a)){u.ch=a
t=new D.E(u.b+".refraction",t,a,[P.y])
t.b=!0
u.a.O(t)}},
ah:function(){this.bu()
this.h3(1)}}
O.fL.prototype={
bR:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.L().a)){u.ch=a
t=new D.E(u.b+".shininess",t,a,[P.y])
t.b=!0
u.a.O(t)}},
ah:function(){this.bu()
this.bR(100)}}
O.du.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.J():u},
O:function(a){var u
H.k(a,"$iv")
u=this.e
if(u!=null)u.u(a)},
aO:function(){return this.O(null)},
dU:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.k(a.fr.j(0,n),"$idv")
if(u==null){t=a.a
u=new A.dv(t,n)
u.cB(t,n)
u.dH(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.f(u.y.j(0,"fov"),"$iV")
u.ch=H.f(u.y.j(0,"ratio"),"$iV")
u.cx=H.f(u.y.j(0,"boxClr"),"$iH")
u.cy=H.f(u.y.j(0,"boxTxt"),"$iac")
u.db=H.f(u.y.j(0,"viewMat"),"$ial")
a.d7(u)}o.a=u}if(b.e==null){t=b.d.da(new Z.dR(a.a),$.aC())
t.as($.aC()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.W(a)}t=a.d
s=a.c
r=o.a
r.W(a)
q=o.b
p=r.Q
C.b.G(p.a,p.d,q)
q=r.ch
C.b.G(q.a,q.d,t/s)
s=o.c
r.cy.cs(s)
s=o.d
t=r.cx
C.b.n(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gL(s).cc(0)
r=r.db
r.toString
r.aa(s.a6(0,!0))
t=b.e
if(t instanceof Z.c_){t.W(a)
t.a3(a)
t.ay(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dg()
t=o.c
if(t!=null)t.ay(a)}}
O.bu.prototype={}
T.co.prototype={}
T.cp.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.J():u},
W:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
ay:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.hC.prototype={
dK:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.cp()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aE(u,k,r,34069,!1,!1)
t.aE(u,k,o,34070,!1,!1)
t.aE(u,k,q,34071,!1,!1)
t.aE(u,k,n,34072,!1,!1)
t.aE(u,k,p,34073,!1,!1)
t.aE(u,k,m,34074,!1,!1)
return u},
dJ:function(a){return this.dK(a,".png")},
aE:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.m
W.a7(t,"load",H.n(new T.hD(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
h0:function(a,b,c){var u,t,s,r
b=V.jE(b)
u=V.jE(a.width)
t=V.jE(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.j8()
s.width=u
s.height=t
r=H.k(C.l.e1(s,"2d"),"$ic0")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.lX(r.getImageData(0,0,s.width,s.height))}}}
T.hD.prototype={
$1:function(a){var u=this,t=u.a,s=t.h0(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.ix(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.hZ()}++t.e},
$S:23}
V.eL.prototype={
aI:function(a,b){return!0},
i:function(a){return"all"},
$ib6:1}
V.b6.prototype={}
V.dg.prototype={
aI:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)if(u[s].aI(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sao:function(a){this.a=H.j(a,"$ib",[V.b6],"$ab")},
$ib6:1}
V.b8.prototype={
aI:function(a,b){return!this.e7(0,b)},
i:function(a){return"!["+this.cz(0)+"]"}}
V.hg.prototype={
eb:function(a){var u,t
if(a.a.length<=0)throw H.h(P.r("May not create a SetMatcher with zero characters."))
u=new H.aM([P.B,P.a5])
for(t=new H.de(a,a.gk(a),[H.aq(a,"u",0)]);t.B();)u.V(0,t.d,!0)
this.sh1(u)},
aI:function(a,b){return this.a.de(0,b)},
i:function(a){var u=this.a
return P.jl(new H.dd(u,[H.w(u,0)]))},
sh1:function(a){this.a=H.j(a,"$iN",[P.B,P.a5],"$aN")},
$ib6:1}
V.cm.prototype={
v:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cr(this.a.I(0,b))
r.sao(H.c([],[V.b6]))
r.c=!1
C.a.h(this.c,r)
return r},
i0:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.aI(0,a))return r}return},
i:function(a){return this.b},
shm:function(a){this.c=H.j(a,"$ib",[V.cr],"$ab")}}
V.dE.prototype={
i:function(a){var u=H.kB(this.b,"\n","\\n"),t=H.kB(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cq.prototype={
i:function(a){return this.b},
sfX:function(a){var u=P.o
this.c=H.j(a,"$iN",[u,u],"$aN")}}
V.hG.prototype={
I:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cm(this,b)
u.shm(H.c([],[V.cr]))
u.d=null
this.a.V(0,b,u)}return u},
b1:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cq(a)
u=P.o
t.sfX(new H.aM([u,u]))
this.b.V(0,a,t)}return t},
iC:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dE]),l=this.c,k=[P.B],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.j.b3(a,s)
q=l.i0(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jl(j)
throw H.h(P.r("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jl(j)
o=l.d
n=o.c.j(0,p)
t=new V.dE(n==null?o.b:n,p,s)}++s}}},
shc:function(a){this.a=H.j(a,"$iN",[P.o,V.cm],"$aN")},
shf:function(a){this.b=H.j(a,"$iN",[P.o,V.cq],"$aN")}}
V.cr.prototype={
i:function(a){return this.b.b+": "+this.cz(0)}}
X.bC.prototype={$iaR:1}
X.fo.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.J():u},
ab:function(a){var u=this.x
if(u!=null)u.u(a)},
sdT:function(a,b){var u,t,s=this
if(!J.X(s.r,b)){u=s.r
s.r=b
t=new D.E("region",u,b,[V.ck])
t.b=!0
s.ab(t)}},
W:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.C(u)
q=C.i.ae(r*u)
r=s.b
if(typeof t!=="number")return H.C(t)
p=C.i.ae(r*t)
r=C.i.ae(s.c*u)
a.c=r
s=C.i.ae(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fr.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.J():u},
W:function(a){var u
a.cy.bq(V.br())
u=V.br()
a.db.bq(u)},
ay:function(a){a.cy.aw()
a.db.aw()},
$iaR:1,
$ibC:1}
X.dp.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.J():u},
ab:function(a){var u
H.k(a,"$iv")
u=this.f
if(u!=null)u.u(a)},
er:function(){return this.ab(null)},
W:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.aP(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bq(k)
r=$.jW
if(r==null){r=V.jY()
q=V.ke()
p=$.kb
r=V.jR(r,q,p==null?$.kb=new V.M(0,0,-1):p)
$.jW=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aJ(0,a,s)
if(t!=null)u=t.q(0,u)}a.db.bq(u)},
ay:function(a){a.cy.aw()
a.db.aw()},
$iaR:1,
$ibC:1}
X.bM.prototype={}
V.j4.prototype={
$1:function(a){H.k(a,"$iaY")
P.jF(C.i.dY(this.a.gi1(),2)+" fps")},
$S:36}
V.hk.prototype={
ec:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
o.className="scrollTop"
p.appendChild(o)
u=q.createElement("div")
u.className="scrollPage"
p.appendChild(u)
t=q.createElement("div")
t.className="pageCenter"
u.appendChild(t)
if(a.length!==0){q.title=a
s=q.createElement("div")
s.className="pageTitle"
s.textContent=a
t.appendChild(s)}r=q.createElement("div")
this.a=r
t.appendChild(r)
this.b=null
r=W.m
W.a7(q,"scroll",H.n(new V.hm(o),{func:1,ret:-1,args:[r]}),!1,r)},
d6:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.j(a,"$ib",[P.o],"$ab")
this.h7()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.iC(C.a.i6(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
t.appendChild(o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
t.appendChild(o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
t.appendChild(o)
break
case"Link":n=p.b
if(H.mh(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.i(m,1)
l.href=H.S(m[1])
l.textContent=H.S(m[0])
t.appendChild(l)}else{k=P.lH(C.I,n,C.r,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
h7:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.hG()
t=P.o
u.shc(new H.aM([t,V.cm]))
u.shf(new H.aM([t,V.cq]))
u.c=null
u.c=u.I(0,q)
t=u.I(0,q).v(0,p)
s=V.ab(new H.a0("*"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,p).v(0,p)
s=new V.b8()
r=[V.b6]
s.sao(H.c([],r))
C.a.h(t.a,s)
t=V.ab(new H.a0("*"))
C.a.h(s.a,t)
t=u.I(0,p).v(0,"BoldEnd")
s=V.ab(new H.a0("*"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,q).v(0,o)
s=V.ab(new H.a0("_"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,o).v(0,o)
s=new V.b8()
s.sao(H.c([],r))
C.a.h(t.a,s)
t=V.ab(new H.a0("_"))
C.a.h(s.a,t)
t=u.I(0,o).v(0,n)
s=V.ab(new H.a0("_"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,q).v(0,m)
s=V.ab(new H.a0("`"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,m).v(0,m)
s=new V.b8()
s.sao(H.c([],r))
C.a.h(t.a,s)
t=V.ab(new H.a0("`"))
C.a.h(s.a,t)
t=u.I(0,m).v(0,"CodeEnd")
s=V.ab(new H.a0("`"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,q).v(0,l)
s=V.ab(new H.a0("["))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,l).v(0,k)
s=V.ab(new H.a0("|"))
C.a.h(t.a,s)
s=u.I(0,l).v(0,j)
t=V.ab(new H.a0("]"))
C.a.h(s.a,t)
s.c=!0
s=u.I(0,l).v(0,l)
t=new V.b8()
t.sao(H.c([],r))
C.a.h(s.a,t)
s=V.ab(new H.a0("|]"))
C.a.h(t.a,s)
s=u.I(0,k).v(0,j)
t=V.ab(new H.a0("]"))
C.a.h(s.a,t)
s.c=!0
s=u.I(0,k).v(0,k)
t=new V.b8()
t.sao(H.c([],r))
C.a.h(s.a,t)
s=V.ab(new H.a0("|]"))
C.a.h(t.a,s)
C.a.h(u.I(0,q).v(0,i).a,new V.eL())
s=u.I(0,i).v(0,i)
t=new V.b8()
t.sao(H.c([],r))
C.a.h(s.a,t)
s=V.ab(new H.a0("*_`["))
C.a.h(t.a,s)
s=u.I(0,"BoldEnd")
s.d=s.a.b1(p)
s=u.I(0,n)
s.d=s.a.b1(o)
s=u.I(0,"CodeEnd")
s.d=s.a.b1(m)
s=u.I(0,j)
s.d=s.a.b1("Link")
s=u.I(0,i)
s.d=s.a.b1(i)
this.b=u}}
V.hm.prototype={
$1:function(a){P.k6(C.m,new V.hl(this.a))},
$S:23}
V.hl.prototype={
$0:function(){var u=C.i.ae(document.documentElement.scrollTop),t=this.a.style,s=H.l(-0.01*u)+"px"
t.top=s},
$S:2};(function aliases(){var u=J.a.prototype
u.e5=u.i
u=J.da.prototype
u.e6=u.i
u=O.cc.prototype
u.cA=u.ah
u=O.aO.prototype
u.bu=u.ah
u=V.dg.prototype
u.e7=u.aI
u.cz=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"lR","lA",10)
u(P,"lS","lB",10)
u(P,"lT","lC",10)
t(P,"kq","lP",3)
var n
s(n=E.ag.prototype,"gdR",0,0,null,["$1","$0"],["dS","ii"],0,0)
s(n,"gdP",0,0,null,["$1","$0"],["dQ","ih"],0,0)
s(n,"gdN",0,0,null,["$1","$0"],["dO","ic"],0,0)
r(n,"gia","ib",7)
r(n,"gie","ig",7)
s(n=E.dD.prototype,"gcC",0,0,null,["$1","$0"],["cE","cD"],0,0)
q(n,"git","dV",3)
p(n=X.dL.prototype,"gfj","fk",9)
p(n,"gf7","f8",9)
p(n,"gfd","fe",4)
p(n,"gfn","fo",18)
p(n,"gfl","fm",18)
p(n,"gfs","ft",4)
p(n,"gfw","fz",4)
p(n,"gfh","fi",4)
p(n,"gfu","fv",4)
p(n,"gff","fg",4)
p(n,"gfA","fB",33)
p(n,"gfC","fD",9)
p(n,"gfQ","fR",11)
p(n,"gfM","fN",11)
p(n,"gfO","fP",11)
s(D.b3.prototype,"gee",0,0,null,["$1","$0"],["al","ef"],0,0)
s(n=D.dc.prototype,"gcW",0,0,null,["$1","$0"],["cX","fp"],0,0)
p(n,"gfE","fF",31)
r(n,"gf_","f0",19)
r(n,"gfI","fJ",19)
o(V.Q.prototype,"gk","ce",20)
o(V.M.prototype,"gk","ce",20)
s(n=U.c9.prototype,"gaC",0,0,null,["$1","$0"],["J","a2"],0,0)
r(n,"geg","eh",21)
r(n,"gfG","fH",21)
s(n=U.dM.prototype,"gaC",0,0,null,["$1","$0"],["J","a2"],0,0)
p(n,"gbF","bG",1)
p(n,"gbH","bI",1)
p(n,"gbJ","bK",1)
s(n=U.dN.prototype,"gaC",0,0,null,["$1","$0"],["J","a2"],0,0)
p(n,"gbF","bG",1)
p(n,"gbH","bI",1)
p(n,"gbJ","bK",1)
p(n,"geU","eV",1)
p(n,"geW","eX",1)
p(n,"ghk","hl",1)
p(n,"ghi","hj",1)
p(n,"ghg","hh",1)
p(U.dO.prototype,"geY","eZ",1)
s(M.cZ.prototype,"gR",0,0,null,["$1","$0"],["S","aL"],0,0)
s(n=M.d3.prototype,"gR",0,0,null,["$1","$0"],["S","aL"],0,0)
r(n,"gf9","fa",7)
r(n,"gfb","fc",7)
s(n=M.dy.prototype,"gR",0,0,null,["$1","$0"],["S","aL"],0,0)
r(n,"gf1","f2",16)
r(n,"gfK","fL",16)
s(n=O.dh.prototype,"gaF",0,0,null,["$1","$0"],["O","aO"],0,0)
s(n,"gfZ",0,0,null,["$1","$0"],["d0","h_"],0,0)
r(n,"gf3","f4",22)
r(n,"gf5","f6",22)
s(O.cc.prototype,"gaF",0,0,null,["$1","$0"],["O","aO"],0,0)
s(O.du.prototype,"gaF",0,0,null,["$1","$0"],["O","aO"],0,0)
s(X.dp.prototype,"geq",0,0,null,["$1","$0"],["ab","er"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.O,null)
s(P.O,[H.jf,J.a,J.ae,P.e6,P.d,H.de,P.aK,H.bF,H.dK,H.hL,P.bl,H.c1,H.en,P.aa,H.fy,H.fz,H.fu,P.et,P.b2,P.au,P.dS,P.hu,P.cn,P.hv,P.aY,P.af,P.iQ,P.iK,P.cB,P.iE,P.u,P.c2,P.iP,P.a5,P.as,P.a8,P.bk,P.h1,P.dx,P.e_,P.fn,P.b,P.N,P.K,P.ak,P.o,P.bt,W.f1,W.z,W.d5,P.ey,P.iF,O.T,O.cd,E.eU,E.ag,E.h8,E.dD,Z.dQ,Z.dR,Z.c_,Z.bn,Z.b0,D.eX,D.aH,D.v,X.cW,X.db,X.fw,X.fC,X.an,X.fS,X.hH,X.dL,D.b3,D.a_,D.dq,D.dw,D.dA,D.dB,D.dC,V.Z,V.aw,V.fe,V.dj,V.a6,V.a4,V.ah,V.bb,V.ck,V.Q,V.M,U.dM,U.dN,U.dO,M.cZ,M.d3,M.bL,M.dy,A.cS,A.eP,A.fJ,A.cs,A.cw,A.cu,A.cx,A.cv,A.cy,A.bE,A.dG,A.hU,F.a2,F.b5,F.bs,F.dt,F.hh,F.hi,F.hj,F.ap,F.i3,F.i4,F.i7,F.i8,O.bu,O.cc,T.hC,V.eL,V.b6,V.dg,V.hg,V.cm,V.dE,V.cq,V.hG,X.bC,X.bM,X.fr,X.dp,V.hk])
s(J.a,[J.ft,J.d8,J.da,J.aL,J.d9,J.cb,H.cg,W.e,W.eK,W.cT,W.c0,W.aF,W.aG,W.P,W.dU,W.f5,W.f6,W.dW,W.d2,W.dY,W.f8,W.m,W.e0,W.aJ,W.fq,W.e2,W.bm,W.fB,W.fM,W.e7,W.e8,W.aQ,W.e9,W.ec,W.aS,W.eg,W.ei,W.aV,W.ej,W.aW,W.eo,W.ay,W.er,W.hF,W.aZ,W.eu,W.hJ,W.hZ,W.ez,W.eB,W.eD,W.eF,W.eH,P.b4,P.e4,P.b9,P.ee,P.h5,P.ep,P.bc,P.ew,P.eQ,P.dT,P.cU,P.dr,P.bK,P.ds,P.dz,P.dH,P.el])
s(J.da,[J.h2,J.dI,J.bq])
t(J.je,J.aL)
s(J.d9,[J.d7,J.d6])
t(P.fA,P.e6)
s(P.fA,[H.dJ,W.il,W.ik,P.fj])
t(H.a0,H.dJ)
s(P.d,[H.fb,H.fF,H.ic])
s(P.aK,[H.fG,H.id])
s(P.bl,[H.fZ,H.fv,H.hX,H.hN,H.eW,H.he,P.eO,P.dn,P.aD,P.hY,P.hW,P.hq,P.f_,P.f4])
s(H.c1,[H.j5,H.hz,H.iZ,H.j_,H.j0,P.ih,P.ig,P.ii,P.ij,P.iO,P.iN,P.ir,P.iv,P.is,P.it,P.iu,P.iy,P.iz,P.ix,P.iw,P.hw,P.hx,P.iU,P.iI,P.iH,P.iJ,P.fE,P.f9,P.fa,W.fO,W.fQ,W.hd,W.ht,W.iq,P.iW,P.fk,P.fl,P.eS,E.h9,E.ha,E.hb,E.hE,D.ff,D.fg,F.iR,F.ia,F.i9,F.i5,F.i6,T.hD,V.j4,V.hm,V.hl])
s(H.hz,[H.hr,H.bY])
t(H.ie,P.eO)
t(P.fD,P.aa)
t(H.aM,P.fD)
t(H.dd,H.fb)
t(H.dk,H.cg)
s(H.dk,[H.cC,H.cE])
t(H.cD,H.cC)
t(H.cf,H.cD)
t(H.cF,H.cE)
t(H.dl,H.cF)
s(H.dl,[H.fT,H.fU,H.fV,H.fW,H.fX,H.dm,H.fY])
t(P.iG,P.iQ)
t(P.iD,P.iK)
t(P.cY,P.hv)
t(P.fc,P.c2)
t(P.i_,P.fc)
t(P.i0,P.cY)
s(P.a8,[P.y,P.B])
s(P.aD,[P.bJ,P.fs])
s(W.e,[W.G,W.fi,W.aU,W.cG,W.aX,W.az,W.cI,W.ib,W.cz,P.eT,P.bB])
s(W.G,[W.a1,W.bj])
s(W.a1,[W.q,P.p])
s(W.q,[W.eM,W.eN,W.bD,W.d0,W.fm,W.ca,W.hf])
s(W.aF,[W.c5,W.f2,W.f3])
t(W.f0,W.aG)
t(W.c6,W.dU)
t(W.dX,W.dW)
t(W.d1,W.dX)
t(W.dZ,W.dY)
t(W.f7,W.dZ)
t(W.aI,W.cT)
t(W.e1,W.e0)
t(W.fh,W.e1)
t(W.e3,W.e2)
t(W.bG,W.e3)
t(W.bv,W.m)
s(W.bv,[W.aN,W.a9,W.aA])
t(W.fN,W.e7)
t(W.fP,W.e8)
t(W.ea,W.e9)
t(W.fR,W.ea)
t(W.ed,W.ec)
t(W.ch,W.ed)
t(W.eh,W.eg)
t(W.h3,W.eh)
t(W.hc,W.ei)
t(W.cH,W.cG)
t(W.hn,W.cH)
t(W.ek,W.ej)
t(W.ho,W.ek)
t(W.hs,W.eo)
t(W.es,W.er)
t(W.hA,W.es)
t(W.cJ,W.cI)
t(W.hB,W.cJ)
t(W.ev,W.eu)
t(W.hI,W.ev)
t(W.b1,W.a9)
t(W.eA,W.ez)
t(W.im,W.eA)
t(W.dV,W.d2)
t(W.eC,W.eB)
t(W.iA,W.eC)
t(W.eE,W.eD)
t(W.eb,W.eE)
t(W.eG,W.eF)
t(W.iL,W.eG)
t(W.eI,W.eH)
t(W.iM,W.eI)
t(W.io,P.hu)
t(W.jp,W.io)
t(W.ip,P.cn)
t(P.aj,P.iF)
t(P.e5,P.e4)
t(P.fx,P.e5)
t(P.ef,P.ee)
t(P.h_,P.ef)
t(P.eq,P.ep)
t(P.hy,P.eq)
t(P.ex,P.ew)
t(P.hK,P.ex)
t(P.eR,P.dT)
t(P.h0,P.bB)
t(P.em,P.el)
t(P.hp,P.em)
s(E.eU,[Z.cV,A.cl,T.co])
s(D.v,[D.bo,D.bp,D.E,X.h4])
s(X.h4,[X.df,X.b7,X.ce,X.dF])
s(O.T,[D.dc,U.c9])
s(D.eX,[U.eZ,U.a3])
t(U.c4,U.a3)
t(M.ax,M.bL)
s(A.cl,[A.di,A.dv])
s(A.dG,[A.I,A.hQ,A.hR,A.hT,A.hO,A.V,A.hP,A.H,A.hS,A.hV,A.ct,A.al,A.ai,A.ac])
s(O.bu,[O.dh,O.du])
s(O.cc,[O.fH,O.fI,O.aO])
s(O.aO,[O.fK,O.fL])
t(T.cp,T.co)
s(V.dg,[V.b8,V.cr])
t(X.fo,X.bM)
u(H.dJ,H.dK)
u(H.cC,P.u)
u(H.cD,H.bF)
u(H.cE,P.u)
u(H.cF,H.bF)
u(P.e6,P.u)
u(W.dU,W.f1)
u(W.dW,P.u)
u(W.dX,W.z)
u(W.dY,P.u)
u(W.dZ,W.z)
u(W.e0,P.u)
u(W.e1,W.z)
u(W.e2,P.u)
u(W.e3,W.z)
u(W.e7,P.aa)
u(W.e8,P.aa)
u(W.e9,P.u)
u(W.ea,W.z)
u(W.ec,P.u)
u(W.ed,W.z)
u(W.eg,P.u)
u(W.eh,W.z)
u(W.ei,P.aa)
u(W.cG,P.u)
u(W.cH,W.z)
u(W.ej,P.u)
u(W.ek,W.z)
u(W.eo,P.aa)
u(W.er,P.u)
u(W.es,W.z)
u(W.cI,P.u)
u(W.cJ,W.z)
u(W.eu,P.u)
u(W.ev,W.z)
u(W.ez,P.u)
u(W.eA,W.z)
u(W.eB,P.u)
u(W.eC,W.z)
u(W.eD,P.u)
u(W.eE,W.z)
u(W.eF,P.u)
u(W.eG,W.z)
u(W.eH,P.u)
u(W.eI,W.z)
u(P.e4,P.u)
u(P.e5,W.z)
u(P.ee,P.u)
u(P.ef,W.z)
u(P.ep,P.u)
u(P.eq,W.z)
u(P.ew,P.u)
u(P.ex,W.z)
u(P.dT,P.aa)
u(P.el,P.u)
u(P.em,W.z)})();(function constants(){var u=hunkHelpers.makeConstList
C.l=W.bD.prototype
C.F=J.a.prototype
C.a=J.aL.prototype
C.G=J.d6.prototype
C.h=J.d7.prototype
C.n=J.d8.prototype
C.i=J.d9.prototype
C.j=J.cb.prototype
C.H=J.bq.prototype
C.J=W.ch.prototype
C.t=J.h2.prototype
C.b=P.bK.prototype
C.o=J.dI.prototype
C.u=W.b1.prototype
C.v=W.cz.prototype
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.w=function() {
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
C.B=function(getTagFallback) {
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
C.x=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.y=function(hooks) {
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
C.A=function(hooks) {
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
C.z=function(hooks) {
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
C.q=function(hooks) { return hooks; }

C.C=new P.h1()
C.r=new P.i_()
C.D=new P.i0()
C.k=new P.iG()
C.c=new A.bE(0,"ColorSourceType.None")
C.f=new A.bE(1,"ColorSourceType.Solid")
C.e=new A.bE(2,"ColorSourceType.Texture2D")
C.d=new A.bE(3,"ColorSourceType.TextureCube")
C.m=new P.bk(0)
C.E=new P.bk(5e6)
C.I=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.B])})()
var v={mangledGlobalNames:{B:"int",y:"double",a8:"num",o:"String",a5:"bool",K:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.K},{func:1,ret:-1},{func:1,ret:-1,args:[W.a9]},{func:1,ret:P.K,args:[F.a2]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.B,[P.d,E.ag]]},{func:1,ret:P.K,args:[D.v]},{func:1,ret:-1,args:[W.m]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aA]},{func:1,ret:P.K,args:[,,]},{func:1,ret:P.o,args:[P.B]},{func:1,ret:P.K,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[P.B,[P.d,M.ax]]},{func:1,ret:P.K,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:-1,args:[W.aN]},{func:1,ret:-1,args:[P.B,[P.d,D.a_]]},{func:1,ret:P.y},{func:1,ret:-1,args:[P.B,[P.d,U.a3]]},{func:1,ret:-1,args:[P.B,[P.d,V.a6]]},{func:1,ret:P.K,args:[W.m]},{func:1,args:[W.m]},{func:1,ret:P.a5,args:[W.G]},{func:1,ret:W.a1,args:[W.G]},{func:1,ret:P.K,args:[{func:1,ret:-1}]},{func:1,args:[,P.o]},{func:1,ret:P.K,args:[P.a8]},{func:1,args:[P.o]},{func:1,ret:P.a5,args:[[P.d,D.a_]]},{func:1,ret:P.K,args:[,],opt:[P.ak]},{func:1,ret:-1,args:[W.b1]},{func:1,ret:P.K,args:[F.ap,P.y,P.y]},{func:1,ret:[P.au,,],args:[,]},{func:1,ret:P.K,args:[P.aY]},{func:1,ret:-1,args:[P.o,P.o]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aE=0
$.bZ=null
$.jJ=null
$.jr=!1
$.ku=null
$.ko=null
$.kz=null
$.iX=null
$.j1=null
$.jB=null
$.bN=null
$.cM=null
$.cN=null
$.js=!1
$.W=C.k
$.am=[]
$.jT=null
$.jX=null
$.ci=null
$.k2=null
$.ka=null
$.kd=null
$.kc=null
$.i1=null
$.kb=null
$.jW=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mq","kE",function(){return H.kt("_$dart_dartClosure")})
u($,"mr","jG",function(){return H.kt("_$dart_js")})
u($,"mu","kF",function(){return H.b_(H.hM({
toString:function(){return"$receiver$"}}))})
u($,"mv","kG",function(){return H.b_(H.hM({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mw","kH",function(){return H.b_(H.hM(null))})
u($,"mx","kI",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mA","kL",function(){return H.b_(H.hM(void 0))})
u($,"mB","kM",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mz","kK",function(){return H.b_(H.k8(null))})
u($,"my","kJ",function(){return H.b_(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mD","kO",function(){return H.b_(H.k8(void 0))})
u($,"mC","kN",function(){return H.b_(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mT","jH",function(){return P.lz()})
u($,"mU","kS",function(){return P.lq("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mM","kR",function(){return Z.at(0)})
u($,"mG","kP",function(){return Z.at(511)})
u($,"mO","aC",function(){return Z.at(1)})
u($,"mN","bg",function(){return Z.at(2)})
u($,"mI","bf",function(){return Z.at(4)})
u($,"mP","bh",function(){return Z.at(8)})
u($,"mQ","bi",function(){return Z.at(16)})
u($,"mJ","cQ",function(){return Z.at(32)})
u($,"mK","cR",function(){return Z.at(64)})
u($,"mL","kQ",function(){return Z.at(96)})
u($,"mR","bV",function(){return Z.at(128)})
u($,"mH","be",function(){return Z.at(256)})
u($,"mp","kD",function(){return new V.fe(1e-9)})
u($,"mo","L",function(){return $.kD()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cg,ArrayBufferView:H.cg,Float32Array:H.cf,Float64Array:H.cf,Int16Array:H.fT,Int32Array:H.fU,Int8Array:H.fV,Uint16Array:H.fW,Uint32Array:H.fX,Uint8ClampedArray:H.dm,CanvasPixelArray:H.dm,Uint8Array:H.fY,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLBodyElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableCellElement:W.q,HTMLTableDataCellElement:W.q,HTMLTableHeaderCellElement:W.q,HTMLTableColElement:W.q,HTMLTableElement:W.q,HTMLTableRowElement:W.q,HTMLTableSectionElement:W.q,HTMLTemplateElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.eK,HTMLAnchorElement:W.eM,HTMLAreaElement:W.eN,Blob:W.cT,HTMLCanvasElement:W.bD,CanvasRenderingContext2D:W.c0,CDATASection:W.bj,CharacterData:W.bj,Comment:W.bj,ProcessingInstruction:W.bj,Text:W.bj,CSSNumericValue:W.c5,CSSUnitValue:W.c5,CSSPerspective:W.f0,CSSCharsetRule:W.P,CSSConditionRule:W.P,CSSFontFaceRule:W.P,CSSGroupingRule:W.P,CSSImportRule:W.P,CSSKeyframeRule:W.P,MozCSSKeyframeRule:W.P,WebKitCSSKeyframeRule:W.P,CSSKeyframesRule:W.P,MozCSSKeyframesRule:W.P,WebKitCSSKeyframesRule:W.P,CSSMediaRule:W.P,CSSNamespaceRule:W.P,CSSPageRule:W.P,CSSRule:W.P,CSSStyleRule:W.P,CSSSupportsRule:W.P,CSSViewportRule:W.P,CSSStyleDeclaration:W.c6,MSStyleCSSProperties:W.c6,CSS2Properties:W.c6,CSSImageValue:W.aF,CSSKeywordValue:W.aF,CSSPositionValue:W.aF,CSSResourceValue:W.aF,CSSURLImageValue:W.aF,CSSStyleValue:W.aF,CSSMatrixComponent:W.aG,CSSRotation:W.aG,CSSScale:W.aG,CSSSkew:W.aG,CSSTranslation:W.aG,CSSTransformComponent:W.aG,CSSTransformValue:W.f2,CSSUnparsedValue:W.f3,DataTransferItemList:W.f5,HTMLDivElement:W.d0,DOMException:W.f6,ClientRectList:W.d1,DOMRectList:W.d1,DOMRectReadOnly:W.d2,DOMStringList:W.f7,DOMTokenList:W.f8,Element:W.a1,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aI,FileList:W.fh,FileWriter:W.fi,HTMLFormElement:W.fm,Gamepad:W.aJ,History:W.fq,HTMLCollection:W.bG,HTMLFormControlsCollection:W.bG,HTMLOptionsCollection:W.bG,ImageData:W.bm,HTMLImageElement:W.ca,KeyboardEvent:W.aN,Location:W.fB,MediaList:W.fM,MIDIInputMap:W.fN,MIDIOutputMap:W.fP,MimeType:W.aQ,MimeTypeArray:W.fR,PointerEvent:W.a9,MouseEvent:W.a9,DragEvent:W.a9,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,Attr:W.G,DocumentType:W.G,Node:W.G,NodeList:W.ch,RadioNodeList:W.ch,Plugin:W.aS,PluginArray:W.h3,RTCStatsReport:W.hc,HTMLSelectElement:W.hf,SourceBuffer:W.aU,SourceBufferList:W.hn,SpeechGrammar:W.aV,SpeechGrammarList:W.ho,SpeechRecognitionResult:W.aW,Storage:W.hs,CSSStyleSheet:W.ay,StyleSheet:W.ay,TextTrack:W.aX,TextTrackCue:W.az,VTTCue:W.az,TextTrackCueList:W.hA,TextTrackList:W.hB,TimeRanges:W.hF,Touch:W.aZ,TouchEvent:W.aA,TouchList:W.hI,TrackDefaultList:W.hJ,CompositionEvent:W.bv,FocusEvent:W.bv,TextEvent:W.bv,UIEvent:W.bv,URL:W.hZ,VideoTrackList:W.ib,WheelEvent:W.b1,Window:W.cz,DOMWindow:W.cz,CSSRuleList:W.im,ClientRect:W.dV,DOMRect:W.dV,GamepadList:W.iA,NamedNodeMap:W.eb,MozNamedAttrMap:W.eb,SpeechRecognitionResultList:W.iL,StyleSheetList:W.iM,SVGLength:P.b4,SVGLengthList:P.fx,SVGNumber:P.b9,SVGNumberList:P.h_,SVGPointList:P.h5,SVGStringList:P.hy,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGTransform:P.bc,SVGTransformList:P.hK,AudioBuffer:P.eQ,AudioParamMap:P.eR,AudioTrackList:P.eT,AudioContext:P.bB,webkitAudioContext:P.bB,BaseAudioContext:P.bB,OfflineAudioContext:P.h0,WebGLBuffer:P.cU,WebGLProgram:P.dr,WebGL2RenderingContext:P.bK,WebGLShader:P.ds,WebGLTexture:P.dz,WebGLUniformLocation:P.dH,SQLResultSetRowList:P.hp})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.cf.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
W.cG.$nativeSuperclassTag="EventTarget"
W.cH.$nativeSuperclassTag="EventTarget"
W.cI.$nativeSuperclassTag="EventTarget"
W.cJ.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.kw,[])
else K.kw([])})})()
//# sourceMappingURL=test.dart.js.map
