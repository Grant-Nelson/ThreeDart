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
a[c]=function(){a[c]=function(){H.ml(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jt(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={je:function je(){},
lb:function(){return new P.hl("No element")},
Z:function Z(a){this.a=a},
f9:function f9(){},
db:function db(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fB:function fB(a,b,c){this.a=a
this.b=b
this.$ti=c},
fC:function fC(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
i8:function i8(a,b,c){this.a=a
this.b=b
this.$ti=c},
i9:function i9(a,b,c){this.a=a
this.b=b
this.$ti=c},
bE:function bE(){},
dJ:function dJ(){},
dI:function dI(){},
bR:function(a){var u,t=H.S(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
m4:function(a){return v.types[H.ac(a)]},
m9:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.W(a).$iE},
k:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ar(a)
if(typeof u!=="string")throw H.h(H.bw(a))
return u},
cf:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bI:function(a){return H.ll(a)+H.jq(H.bx(a),0,null)},
ll:function(a){var u,t,s,r,q,p,o,n=J.W(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.G||!!n.$idH){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bR(t.length>1&&C.j.aZ(t,0)===36?C.j.cm(t,1):t)},
jZ:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lu:function(a){var u,t,s,r=H.c([],[P.A])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.B)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bw(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.i.b2(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.h(H.bw(s))}return H.jZ(r)},
k_:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bw(s))
if(s<0)throw H.h(H.bw(s))
if(s>65535)return H.lu(a)}return H.jZ(a)},
lt:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.i.b2(u,10))>>>0,56320|u&1023)}throw H.h(P.ay(a,0,1114111,null,null))},
bH:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ls:function(a){var u=H.bH(a).getFullYear()+0
return u},
lq:function(a){var u=H.bH(a).getMonth()+1
return u},
lm:function(a){var u=H.bH(a).getDate()+0
return u},
ln:function(a){var u=H.bH(a).getHours()+0
return u},
lp:function(a){var u=H.bH(a).getMinutes()+0
return u},
lr:function(a){var u=H.bH(a).getSeconds()+0
return u},
lo:function(a){var u=H.bH(a).getMilliseconds()+0
return u},
C:function(a){throw H.h(H.bw(a))},
i:function(a,b){if(a==null)J.bU(a)
throw H.h(H.cJ(a,b))},
cJ:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,s,null)
u=H.ac(J.bU(a))
if(!(b<0)){if(typeof u!=="number")return H.C(u)
t=b>=u}else t=!0
if(t)return P.T(b,a,s,null,u)
return P.h2(b,s)},
m0:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bJ(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bJ(a,c,!0,b,"end",u)
return new P.aE(!0,b,"end",null)},
bw:function(a){return new P.aE(!0,a,null,null)},
lX:function(a){if(typeof a!=="number")throw H.h(H.bw(a))
return a},
h:function(a){var u
if(a==null)a=new P.dk()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kD})
u.name=""}else u.toString=H.kD
return u},
kD:function(){return J.ar(this.dartException)},
t:function(a){throw H.h(a)},
B:function(a){throw H.h(P.c0(a))},
aZ:function(a){var u,t,s,r,q,p
a=H.kA(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hI(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hJ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
k9:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jU:function(a,b){return new H.fV(a,b==null?null:b.method)},
jf:function(a,b){var u=b==null,t=u?null:b.method
return new H.fr(a,t,u?null:b.receiver)},
bc:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.j2(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.i.b2(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jf(H.k(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jU(H.k(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kH()
q=$.kI()
p=$.kJ()
o=$.kK()
n=$.kN()
m=$.kO()
l=$.kM()
$.kL()
k=$.kQ()
j=$.kP()
i=r.a7(u)
if(i!=null)return f.$1(H.jf(H.S(u),i))
else{i=q.a7(u)
if(i!=null){i.method="call"
return f.$1(H.jf(H.S(u),i))}else{i=p.a7(u)
if(i==null){i=o.a7(u)
if(i==null){i=n.a7(u)
if(i==null){i=m.a7(u)
if(i==null){i=l.a7(u)
if(i==null){i=o.a7(u)
if(i==null){i=k.a7(u)
if(i==null){i=j.a7(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jU(H.S(u),i))}}return f.$1(new H.hU(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dv()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aE(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dv()
return a},
bP:function(a){var u
if(a==null)return new H.em(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.em(a)},
m3:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.Z(0,a[u],a[t])}return b},
m8:function(a,b,c,d,e,f){H.n(a,"$ija")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.r("Unsupported number of arguments for wrapped closure"))},
bN:function(a,b){var u
H.ac(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.m8)
a.$identity=u
return u},
l4:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hm().constructor.prototype):Object.create(new H.bV(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aF
if(typeof t!=="number")return t.D()
$.aF=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.jH(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.m4,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.jG:H.j5
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.h("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jH(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
l1:function(a,b,c,d){var u=H.j5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jH:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.l3(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l1(t,!r,u,b)
if(t===0){r=$.aF
if(typeof r!=="number")return r.D()
$.aF=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bW
return new Function(r+H.k(q==null?$.bW=H.eU("self"):q)+";return "+p+"."+H.k(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aF
if(typeof r!=="number")return r.D()
$.aF=r+1
o+=r
r="return function("+o+"){return this."
q=$.bW
return new Function(r+H.k(q==null?$.bW=H.eU("self"):q)+"."+H.k(u)+"("+o+");}")()},
l2:function(a,b,c,d){var u=H.j5,t=H.jG
switch(b?-1:a){case 0:throw H.h(H.lx("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
l3:function(a,b){var u,t,s,r,q,p,o,n=$.bW
if(n==null)n=$.bW=H.eU("self")
u=$.jF
if(u==null)u=$.jF=H.eU("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.l2(s,!q,t,b)
if(s===1){n="return function(){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+");"
u=$.aF
if(typeof u!=="number")return u.D()
$.aF=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+", "+o+");"
u=$.aF
if(typeof u!=="number")return u.D()
$.aF=u+1
return new Function(n+u+"}")()},
jt:function(a,b,c,d,e,f,g){return H.l4(a,b,H.ac(c),d,!!e,!!f,g)},
j5:function(a){return a.a},
jG:function(a){return a.c},
eU:function(a){var u,t,s,r=new H.bV("self","target","receiver","name"),q=J.jc(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
x:function(a){if(a==null)H.lT("boolean expression must not be null")
return a},
S:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aC(a,"String"))},
mZ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aC(a,"double"))},
me:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aC(a,"num"))},
kr:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aC(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aC(a,"int"))},
ky:function(a,b){throw H.h(H.aC(a,H.bR(H.S(b).substring(2))))},
mg:function(a,b){throw H.h(H.l0(a,H.bR(H.S(b).substring(2))))},
n:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.W(a)[b])return a
H.ky(a,b)},
f:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.W(a)[b]
else u=!0
if(u)return a
H.mg(a,b)},
jy:function(a){if(a==null)return a
if(!!J.W(a).$ib)return a
throw H.h(H.aC(a,"List<dynamic>"))},
ma:function(a,b){var u
if(a==null)return a
u=J.W(a)
if(!!u.$ib)return a
if(u[b])return a
H.ky(a,b)},
ks:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
eI:function(a,b){var u
if(typeof a=="function")return!0
u=H.ks(J.W(a))
if(u==null)return!1
return H.ki(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.jn)return a
$.jn=!0
try{if(H.eI(a,b))return a
u=H.j0(b)
t=H.aC(a,u)
throw H.h(t)}finally{$.jn=!1}},
ju:function(a,b){if(a!=null&&!H.js(a,b))H.t(H.aC(a,H.j0(b)))
return a},
aC:function(a,b){return new H.hK("TypeError: "+P.d1(a)+": type '"+H.km(a)+"' is not a subtype of type '"+b+"'")},
l0:function(a,b){return new H.eV("CastError: "+P.d1(a)+": type '"+H.km(a)+"' is not a subtype of type '"+b+"'")},
km:function(a){var u,t=J.W(a)
if(!!t.$ibZ){u=H.ks(t)
if(u!=null)return H.j0(u)
return"Closure"}return H.bI(a)},
lT:function(a){throw H.h(new H.ia(a))},
ml:function(a){throw H.h(new P.f2(H.S(a)))},
lx:function(a){return new H.h9(a)},
kt:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bx:function(a){if(a==null)return
return a.$ti},
n_:function(a,b,c){return H.bQ(a["$a"+H.k(c)],H.bx(b))},
cK:function(a,b,c,d){var u
H.S(c)
H.ac(d)
u=H.bQ(a["$a"+H.k(c)],H.bx(b))
return u==null?null:u[d]},
aw:function(a,b,c){var u
H.S(b)
H.ac(c)
u=H.bQ(a["$a"+H.k(b)],H.bx(a))
return u==null?null:u[c]},
w:function(a,b){var u
H.ac(b)
u=H.bx(a)
return u==null?null:u[b]},
j0:function(a){return H.bv(a,null)},
bv:function(a,b){var u,t
H.l(b,"$ib",[P.o],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bR(a[0].name)+H.jq(a,1,b)
if(typeof a=="function")return H.bR(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.i(b,t)
return H.k(b[t])}if('func' in a)return H.lM(a,b)
if('futureOr' in a)return"FutureOr<"+H.bv("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lM:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.o]
H.l(a0,"$ib",b,"$ab")
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
if(m!=null&&m!==P.N)p+=" extends "+H.bv(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bv(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bv(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bv(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.m2(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.S(b[h])
j=j+i+H.bv(e[d],a0)+(" "+H.k(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
jq:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.o],"$ab")
if(a==null)return""
u=new P.br("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bv(p,c)}return"<"+u.i(0)+">"},
bQ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jr:function(a,b,c,d){var u,t
H.S(b)
H.jy(c)
H.S(d)
if(a==null)return!1
u=H.bx(a)
t=J.W(a)
if(t[b]==null)return!1
return H.kp(H.bQ(t[d],u),null,c,null)},
l:function(a,b,c,d){H.S(b)
H.jy(c)
H.S(d)
if(a==null)return a
if(H.jr(a,b,c,d))return a
throw H.h(H.aC(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bR(b.substring(2))+H.jq(c,0,null),v.mangledGlobalNames)))},
kp:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.av(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.av(a[t],b,c[t],d))return!1
return!0},
mX:function(a,b,c){return a.apply(b,H.bQ(J.W(b)["$a"+H.k(c)],H.bx(b)))},
kv:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="N"||a.name==="J"||a===-1||a===-2||H.kv(u)}return!1},
js:function(a,b){var u,t
if(a==null)return b==null||b.name==="N"||b.name==="J"||b===-1||b===-2||H.kv(b)
if(b==null||b===-1||b.name==="N"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.js(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eI(a,b)}u=J.W(a).constructor
t=H.bx(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.av(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.js(a,b))throw H.h(H.aC(a,H.j0(b)))
return a},
av:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="N"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="N"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.av(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
if('func' in c)return H.ki(a,b,c,d)
if('func' in a)return c.name==="ja"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.av("type" in a?a.type:l,b,s,d)
else if(H.av(a,b,s,d))return!0
else{if(!('$i'+"c4" in t.prototype))return!1
r=t.prototype["$a"+"c4"]
q=H.bQ(r,u?a.slice(1):l)
return H.av(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kp(H.bQ(m,u),b,p,d)},
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
return H.md(h,b,g,d)},
md:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.av(c[s],d,a[s],b))return!1}return!0},
mY:function(a,b,c){Object.defineProperty(a,H.S(b),{value:c,enumerable:false,writable:true,configurable:true})},
mb:function(a){var u,t,s,r,q=H.S($.ku.$1(a)),p=$.iT[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iZ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.S($.ko.$2(a,q))
if(q!=null){p=$.iT[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iZ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.j_(u)
$.iT[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iZ[q]=u
return u}if(s==="-"){r=H.j_(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kx(a,u)
if(s==="*")throw H.h(P.ka(q))
if(v.leafTags[q]===true){r=H.j_(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kx(a,u)},
kx:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jz(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j_:function(a){return J.jz(a,!1,null,!!a.$iE)},
mc:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j_(u)
else return J.jz(u,c,null,null)},
m6:function(){if(!0===$.jx)return
$.jx=!0
H.m7()},
m7:function(){var u,t,s,r,q,p,o,n
$.iT=Object.create(null)
$.iZ=Object.create(null)
H.m5()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kz.$1(q)
if(p!=null){o=H.mc(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
m5:function(){var u,t,s,r,q,p,o=C.x()
o=H.bM(C.y,H.bM(C.z,H.bM(C.q,H.bM(C.q,H.bM(C.A,H.bM(C.B,H.bM(C.C(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ku=new H.iW(r)
$.ko=new H.iX(q)
$.kz=new H.iY(p)},
bM:function(a,b){return a(b)||b},
ld:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.fk("Illegal RegExp pattern ("+String(r)+")",a))},
kB:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
m1:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kA:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kC:function(a,b,c){var u=H.mj(a,b,c)
return u},
mj:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kA(b),'g'),H.m1(c))},
hI:function hI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fV:function fV(a,b){this.a=a
this.b=b},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
hU:function hU(a){this.a=a},
j2:function j2(a){this.a=a},
em:function em(a){this.a=a
this.b=null},
bZ:function bZ(){},
hu:function hu(){},
hm:function hm(){},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hK:function hK(a){this.a=a},
eV:function eV(a){this.a=a},
h9:function h9(a){this.a=a},
ia:function ia(a){this.a=a},
aM:function aM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fu:function fu(a,b){this.a=a
this.b=b
this.c=null},
da:function da(a,b){this.a=a
this.$ti=b},
fv:function fv(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iW:function iW(a){this.a=a},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
fq:function fq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cG:function(a){return a},
bu:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.cJ(b,a))},
lL:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.m0(a,b,c))
return b},
cc:function cc(){},
dh:function dh(){},
cb:function cb(){},
di:function di(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
dj:function dj(){},
fU:function fU(){},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
m2:function(a){return J.jQ(a?Object.keys(a):[],null)},
mf:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jz:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iV:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jx==null){H.m6()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.ka("Return interceptor for "+H.k(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jC()]
if(r!=null)return r
r=H.mb(a)
if(r!=null)return r
if(typeof a=="function")return C.I
u=Object.getPrototypeOf(a)
if(u==null)return C.u
if(u===Object.prototype)return C.u
if(typeof s=="function"){Object.defineProperty(s,$.jC(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
lc:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.j4(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.ay(a,0,4294967295,"length",null))
return J.jQ(new Array(a),b)},
jQ:function(a,b){return J.jc(H.c(a,[b]))},
jc:function(a){H.jy(a)
a.fixed$length=Array
return a},
W:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d4.prototype
return J.d3.prototype}if(typeof a=="string")return J.c7.prototype
if(a==null)return J.d5.prototype
if(typeof a=="boolean")return J.fp.prototype
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.N)return a
return J.iV(a)},
iU:function(a){if(typeof a=="string")return J.c7.prototype
if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.N)return a
return J.iV(a)},
jv:function(a){if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.N)return a
return J.iV(a)},
jw:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.N)return a
return J.iV(a)},
a4:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.W(a).q(a,b)},
kV:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m9(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.iU(a).j(a,b)},
kW:function(a,b,c){return J.jw(a).fV(a,b,c)},
kX:function(a,b,c,d){return J.jw(a).hN(a,b,c,d)},
j3:function(a,b,c){return J.iU(a).hT(a,b,c)},
jE:function(a,b){return J.jv(a).C(a,b)},
kY:function(a,b){return J.jv(a).M(a,b)},
by:function(a){return J.W(a).gE(a)},
bT:function(a){return J.jv(a).gS(a)},
bU:function(a){return J.iU(a).gk(a)},
kZ:function(a,b){return J.jw(a).ir(a,b)},
ar:function(a){return J.W(a).i(a)},
a:function a(){},
fp:function fp(){},
d5:function d5(){},
d7:function d7(){},
fZ:function fZ(){},
dH:function dH(){},
bp:function bp(){},
aL:function aL(a){this.$ti=a},
jd:function jd(a){this.$ti=a},
ah:function ah(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d6:function d6(){},
d4:function d4(){},
d3:function d3(){},
c7:function c7(){}},P={
lC:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lU()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bN(new P.ic(s),1)).observe(u,{childList:true})
return new P.ib(s,u,t)}else if(self.setImmediate!=null)return P.lV()
return P.lW()},
lD:function(a){self.scheduleImmediate(H.bN(new P.id(H.m(a,{func:1,ret:-1})),0))},
lE:function(a){self.setImmediate(H.bN(new P.ie(H.m(a,{func:1,ret:-1})),0))},
lF:function(a){P.ji(C.n,H.m(a,{func:1,ret:-1}))},
ji:function(a,b){var u
H.m(b,{func:1,ret:-1})
u=C.i.a_(a.a,1000)
return P.lI(u<0?0:u,b)},
k8:function(a,b){var u
H.m(b,{func:1,ret:-1,args:[P.aX]})
u=C.i.a_(a.a,1000)
return P.lJ(u<0?0:u,b)},
lI:function(a,b){var u=new P.es()
u.ej(a,b)
return u},
lJ:function(a,b){var u=new P.es()
u.ek(a,b)
return u},
lG:function(a,b){var u,t,s
b.a=1
try{a.dS(new P.io(b),new P.ip(b),null)}catch(s){u=H.bc(s)
t=H.bP(s)
P.mh(new P.iq(b,u,t))}},
kf:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.n(a.c,"$iau")
if(u>=4){t=b.bL()
b.a=a.a
b.c=a.c
P.cv(b,t)}else{t=H.n(b.c,"$ib1")
b.a=2
b.c=a
a.cU(t)}},
cv:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.n(g.c,"$iad")
g=g.b
r=s.a
q=s.b
g.toString
P.iP(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cv(h.a,b)}g=h.a
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
if(m){H.n(o,"$iad")
g=g.b
r=o.a
q=o.b
g.toString
P.iP(i,i,g,r,q)
return}l=$.V
if(l!=n)$.V=n
else l=i
g=b.c
if(g===8)new P.iu(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.it(u,b,o).$0()}else if((g&2)!==0)new P.is(h,u,b).$0()
if(l!=null)$.V=l
g=u.b
if(!!J.W(g).$ic4){if(g.a>=4){k=H.n(q.c,"$ib1")
q.c=null
b=q.b1(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.kf(g,q)
return}}j=b.b
k=H.n(j.c,"$ib1")
j.c=null
b=j.b1(k)
g=u.a
r=u.b
if(!g){H.D(r,H.w(j,0))
j.a=4
j.c=r}else{H.n(r,"$iad")
j.a=8
j.c=r}h.a=j
g=j}},
lP:function(a,b){if(H.eI(a,{func:1,args:[P.N,P.ak]}))return H.m(a,{func:1,ret:null,args:[P.N,P.ak]})
if(H.eI(a,{func:1,args:[P.N]}))return H.m(a,{func:1,ret:null,args:[P.N]})
throw H.h(P.j4(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lO:function(){var u,t
for(;u=$.bL,u!=null;){$.cI=null
t=u.b
$.bL=t
if(t==null)$.cH=null
u.a.$0()}},
lS:function(){$.jo=!0
try{P.lO()}finally{$.cI=null
$.jo=!1
if($.bL!=null)$.jD().$1(P.kq())}},
kl:function(a){var u=new P.dR(H.m(a,{func:1,ret:-1}))
if($.bL==null){$.bL=$.cH=u
if(!$.jo)$.jD().$1(P.kq())}else $.cH=$.cH.b=u},
lR:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
u=$.bL
if(u==null){P.kl(a)
$.cI=$.cH
return}t=new P.dR(a)
s=$.cI
if(s==null){t.b=u
$.bL=$.cI=t}else{t.b=s.b
$.cI=s.b=t
if(t.b==null)$.cH=t}},
mh:function(a){var u,t=null,s={func:1,ret:-1}
H.m(a,s)
u=$.V
if(C.k===u){P.iR(t,t,C.k,a)
return}u.toString
P.iR(t,t,u,H.m(u.bS(a),s))},
k7:function(a,b){var u,t={func:1,ret:-1}
H.m(b,t)
u=$.V
if(u===C.k){u.toString
return P.ji(a,b)}return P.ji(a,H.m(u.bS(b),t))},
lB:function(a,b){var u,t,s={func:1,ret:-1,args:[P.aX]}
H.m(b,s)
u=$.V
if(u===C.k){u.toString
return P.k8(a,b)}t=u.d3(b,P.aX)
$.V.toString
return P.k8(a,H.m(t,s))},
iP:function(a,b,c,d,e){var u={}
u.a=d
P.lR(new P.iQ(u,e))},
kj:function(a,b,c,d,e){var u,t
H.m(d,{func:1,ret:e})
t=$.V
if(t===c)return d.$0()
$.V=c
u=t
try{t=d.$0()
return t}finally{$.V=u}},
kk:function(a,b,c,d,e,f,g){var u,t
H.m(d,{func:1,ret:f,args:[g]})
H.D(e,g)
t=$.V
if(t===c)return d.$1(e)
$.V=c
u=t
try{t=d.$1(e)
return t}finally{$.V=u}},
lQ:function(a,b,c,d,e,f,g,h,i){var u,t
H.m(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
t=$.V
if(t===c)return d.$2(e,f)
$.V=c
u=t
try{t=d.$2(e,f)
return t}finally{$.V=u}},
iR:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.bS(d):c.hR(d,-1)
P.kl(d)},
ic:function ic(a){this.a=a},
ib:function ib(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
es:function es(){this.c=0},
iK:function iK(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b1:function b1(a,b,c,d,e){var _=this
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
im:function im(a,b){this.a=a
this.b=b},
ir:function ir(a,b){this.a=a
this.b=b},
io:function io(a){this.a=a},
ip:function ip(a){this.a=a},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
iu:function iu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iv:function iv(a){this.a=a},
it:function it(a,b,c){this.a=a
this.b=b
this.c=c},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(a){this.a=a
this.b=null},
hp:function hp(){},
hr:function hr(a,b){this.a=a
this.b=b},
hs:function hs(a,b){this.a=a
this.b=b},
ci:function ci(){},
hq:function hq(){},
aX:function aX(){},
ad:function ad(a,b){this.a=a
this.b=b},
iM:function iM(){},
iQ:function iQ(a,b){this.a=a
this.b=b},
iC:function iC(){},
iE:function iE(a,b,c){this.a=a
this.b=b
this.c=c},
iD:function iD(a,b){this.a=a
this.b=b},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
lf:function(a,b){return new H.aM([a,b])},
lg:function(a){return H.m3(a,new H.aM([null,null]))},
lh:function(a){return new P.iz([a])},
jm:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kh:function(a,b,c){var u=new P.iA(a,b,[c])
u.c=a.e
return u},
la:function(a,b,c){var u,t
if(P.jp(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.o])
C.a.h($.am,a)
try{P.lN(a,u)}finally{if(0>=$.am.length)return H.i($.am,-1)
$.am.pop()}t=P.k5(b,H.ma(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
jb:function(a,b,c){var u,t
if(P.jp(a))return b+"..."+c
u=new P.br(b)
C.a.h($.am,a)
try{t=u
t.a=P.k5(t.a,a,", ")}finally{if(0>=$.am.length)return H.i($.am,-1)
$.am.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jp:function(a){var u,t
for(u=$.am.length,t=0;t<u;++t)if(a===$.am[t])return!0
return!1},
lN:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.o],"$ab")
u=a.gS(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.u())return
r=H.k(u.gH(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.u()){if(s<=5)return
if(0>=b.length)return H.i(b,-1)
q=b.pop()
if(0>=b.length)return H.i(b,-1)
p=b.pop()}else{o=u.gH(u);++s
if(!u.u()){if(s<=4){C.a.h(b,H.k(o))
return}q=H.k(o)
if(0>=b.length)return H.i(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gH(u);++s
for(;u.u();o=n,n=m){m=u.gH(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.k(o)
q=H.k(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
jS:function(a){var u,t={}
if(P.jp(a))return"{...}"
u=new P.br("")
try{C.a.h($.am,a)
u.a+="{"
t.a=!0
J.kY(a,new P.fA(t,u))
u.a+="}"}finally{if(0>=$.am.length)return H.i($.am,-1)
$.am.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iz:function iz(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cw:function cw(a){this.a=a
this.c=this.b=null},
iA:function iA(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fw:function fw(){},
u:function u(){},
fz:function fz(){},
fA:function fA(a,b){this.a=a
this.b=b},
a8:function a8(){},
iG:function iG(){},
e5:function e5(){},
c_:function c_(){},
cU:function cU(){},
fa:function fa(){},
hX:function hX(){},
hY:function hY(){},
iL:function iL(a){this.b=0
this.c=a},
l9:function(a){if(a instanceof H.bZ)return a.i(0)
return"Instance of '"+H.bI(a)+"'"},
li:function(a,b,c){var u,t
H.D(b,c)
u=J.lc(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.Z(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
jR:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bT(a);u.u();)C.a.h(s,H.D(u.gH(u),c))
if(b)return s
return H.l(J.jc(s),"$ib",t,"$ab")},
jh:function(a){var u,t,s=P.A
H.l(a,"$ie",[s],"$ae")
if(a.constructor===Array){H.l(a,"$iaL",[s],"$aaL")
u=a.length
t=P.k1(0,null,u)
return H.k_(t<u?C.a.e2(a,0,t):a)}return P.lz(a,0,null)},
lz:function(a,b,c){var u,t,s
H.l(a,"$ie",[P.A],"$ae")
u=J.bT(a)
for(t=0;t<b;++t)if(!u.u())throw H.h(P.ay(b,0,t,null,null))
s=[]
for(;u.u();)s.push(u.gH(u))
return H.k_(s)},
lv:function(a){return new H.fq(a,H.ld(a,!1,!0,!1))},
k5:function(a,b,c){var u=J.bT(b)
if(!u.u())return a
if(c.length===0){do a+=H.k(u.gH(u))
while(u.u())}else{a+=H.k(u.gH(u))
for(;u.u();)a=a+c+H.k(u.gH(u))}return a},
lK:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.A],"$ab")
if(c===C.r){u=$.kU().b
u=u.test(b)}else u=!1
if(u)return b
t=C.E.hU(H.D(b,H.aw(c,"c_",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.i(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lt(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
l5:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
l6:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cW:function(a){if(a>=10)return""+a
return"0"+a},
jN:function(a,b){return new P.bj(1e6*b+1000*a)},
d1:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.l9(a)},
l_:function(a){return new P.aE(!1,null,null,a)},
j4:function(a,b,c){return new P.aE(!0,a,b,c)},
h2:function(a,b){return new P.bJ(null,null,!0,a,b,"Value not in range")},
ay:function(a,b,c,d,e){return new P.bJ(b,c,!0,a,d,"Invalid value")},
k1:function(a,b,c){if(0>a||a>c)throw H.h(P.ay(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.ay(b,a,c,"end",null))
return b}return c},
k0:function(a,b){if(typeof a!=="number")return a.aw()
if(a<0)throw H.h(P.ay(a,0,null,b,null))},
T:function(a,b,c,d,e){var u=H.ac(e==null?J.bU(b):e)
return new P.fo(u,!0,a,c,"Index out of range")},
ap:function(a){return new P.hV(a)},
ka:function(a){return new P.hT(a)},
c0:function(a){return new P.eY(a)},
r:function(a){return new P.dZ(a)},
jB:function(a){H.mf(a)},
a3:function a3(){},
as:function as(a,b){this.a=a
this.b=b},
z:function z(){},
bj:function bj(a){this.a=a},
f7:function f7(){},
f8:function f8(){},
bk:function bk(){},
eN:function eN(){},
dk:function dk(){},
aE:function aE(a,b,c,d){var _=this
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
fo:function fo(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hV:function hV(a){this.a=a},
hT:function hT(a){this.a=a},
hl:function hl(a){this.a=a},
eY:function eY(a){this.a=a},
fY:function fY(){},
dv:function dv(){},
f2:function f2(a){this.a=a},
dZ:function dZ(a){this.a=a},
fk:function fk(a,b){this.a=a
this.b=b},
A:function A(){},
e:function e(){},
aK:function aK(){},
b:function b(){},
M:function M(){},
J:function J(){},
a5:function a5(){},
N:function N(){},
ak:function ak(){},
o:function o(){},
br:function br(a){this.a=a},
m_:function(a){var u,t=J.W(a)
if(!!t.$ibl){u=t.gd9(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ex(a.data,a.height,a.width)},
lZ:function(a){if(a instanceof P.ex)return{data:a.a,height:a.b,width:a.c}
return a},
bb:function(a){var u,t,s,r,q
if(a==null)return
u=P.lf(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){q=H.S(t[r])
u.Z(0,q,a[q])}return u},
lY:function(a){var u={}
a.M(0,new P.iS(u))
return u},
jM:function(){var u=$.jL
return u==null?$.jL=J.j3(window.navigator.userAgent,"Opera",0):u},
l7:function(){var u,t=$.jI
if(t!=null)return t
u=$.jJ
if(u==null?$.jJ=J.j3(window.navigator.userAgent,"Firefox",0):u)t="-moz-"
else{u=$.jK
if(u==null)u=$.jK=!H.x(P.jM())&&J.j3(window.navigator.userAgent,"Trident/",0)
if(u)t="-ms-"
else t=H.x(P.jM())?"-o-":"-webkit-"}return $.jI=t},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
iS:function iS(a){this.a=a},
fg:function fg(a,b){this.a=a
this.b=b},
fh:function fh(){},
fi:function fi(){},
iy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lH:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iB:function iB(){},
aj:function aj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b2:function b2(){},
ft:function ft(){},
b7:function b7(){},
fW:function fW(){},
h1:function h1(){},
ht:function ht(){},
p:function p(){},
ba:function ba(){},
hH:function hH(){},
e3:function e3(){},
e4:function e4(){},
ed:function ed(){},
ee:function ee(){},
eo:function eo(){},
ep:function ep(){},
ev:function ev(){},
ew:function ew(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(a){this.a=a},
eS:function eS(){},
bz:function bz(){},
fX:function fX(){},
dS:function dS(){},
cP:function cP(){},
dn:function dn(){},
bK:function bK(){},
dq:function dq(){},
dw:function dw(){},
dG:function dG(){},
hk:function hk(){},
ek:function ek(){},
el:function el(){}},W={
j6:function(){var u=document.createElement("canvas")
return u},
l8:function(a){H.n(a,"$id")
return"wheel"},
jP:function(a){var u=document.createElement("img")
u.src=a
return u},
ix:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kg:function(a,b,c,d){var u=W.ix(W.ix(W.ix(W.ix(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a2:function(a,b,c,d,e){var u=W.kn(new W.il(c),W.j)
if(u!=null&&!0)J.kX(a,b,u,!1)
return new W.ik(a,b,u,!1,[e])},
kn:function(a,b){var u
H.m(a,{func:1,ret:-1,args:[b]})
u=$.V
if(u===C.k)return a
return u.d3(a,b)},
q:function q(){},
eJ:function eJ(){},
eL:function eL(){},
eM:function eM(){},
cO:function cO(){},
bB:function bB(){},
bY:function bY(){},
bi:function bi(){},
c1:function c1(){},
eZ:function eZ(){},
O:function O(){},
bD:function bD(){},
f_:function f_(){},
aG:function aG(){},
aH:function aH(){},
f0:function f0(){},
f1:function f1(){},
f3:function f3(){},
cY:function cY(){},
f4:function f4(){},
cZ:function cZ(){},
d_:function d_(){},
f5:function f5(){},
f6:function f6(){},
ih:function ih(a,b){this.a=a
this.b=b},
a_:function a_(){},
j:function j(){},
d:function d(){},
aI:function aI(){},
fe:function fe(){},
ff:function ff(){},
fj:function fj(){},
aJ:function aJ(){},
fm:function fm(){},
bF:function bF(){},
bl:function bl(){},
c6:function c6(){},
aN:function aN(){},
fx:function fx(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(a){this.a=a},
fL:function fL(){},
fM:function fM(a){this.a=a},
aQ:function aQ(){},
fN:function fN(){},
a6:function a6(){},
ig:function ig(a){this.a=a},
F:function F(){},
cd:function cd(){},
aS:function aS(){},
h_:function h_(){},
h7:function h7(){},
h8:function h8(a){this.a=a},
ha:function ha(){},
aT:function aT(){},
hi:function hi(){},
aU:function aU(){},
hj:function hj(){},
aV:function aV(){},
hn:function hn(){},
ho:function ho(a){this.a=a},
az:function az(){},
aW:function aW(){},
aA:function aA(){},
hv:function hv(){},
hw:function hw(){},
hC:function hC(){},
aY:function aY(){},
aB:function aB(){},
hF:function hF(){},
hG:function hG(){},
bt:function bt(){},
hW:function hW(){},
i7:function i7(){},
b0:function b0(){},
cu:function cu(){},
ii:function ii(){},
dU:function dU(){},
iw:function iw(){},
ea:function ea(){},
iH:function iH(){},
iI:function iI(){},
ij:function ij(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jl:function jl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ik:function ik(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
il:function il(a){this.a=a},
y:function y(){},
d2:function d2(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
dT:function dT(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
cB:function cB(){},
cC:function cC(){},
ei:function ei(){},
ej:function ej(){},
en:function en(){},
eq:function eq(){},
er:function er(){},
cD:function cD(){},
cE:function cE(){},
et:function et(){},
eu:function eu(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){}},O={
j7:function(a){var u=new O.X([a])
u.aY(a)
return u},
X:function X(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c9:function c9(){this.b=this.a=null},
de:function de(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fD:function fD(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c8:function c8(){},
fE:function fE(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aO:function aO(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fG:function fG(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fH:function fH(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ds:function ds(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bs:function bs(){}},E={
jO:function(){var u=new E.ae()
u.a=""
u.b=!0
u.sec(0,O.j7(E.ae))
u.y.aG(u.gi9(),u.gic())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbr(0,null)
return u},
lw:function(a,b){var u=new E.h3(a)
u.e9(a,b)
return u},
lA:function(a,b,c,d,e){var u,t,s=J.W(a)
if(!!s.$ibB)return E.k6(a,!0,!0,!0,!1)
u=W.j6()
t=u.style
t.width="100%"
t.height="100%"
s.gd6(a).h(0,u)
return E.k6(u,!0,!0,!0,!1)},
k6:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dC(),j=H.n(C.l.cj(a,"webgl2",P.lg(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibK")
if(j==null)H.t(P.r("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.lw(j,a)
u=new T.hy(j)
u.b=H.ac(j.getParameter(3379))
u.c=H.ac(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dK(a)
t=new X.fs()
t.c=new X.an(!1,!1,!1)
t.sfR(P.lh(P.A))
u.b=t
t=new X.fO(u)
t.f=0
t.r=V.b8()
t.x=V.b8()
t.ch=t.Q=1
u.c=t
t=new X.fy(u)
t.r=0
t.x=V.b8()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hE(u)
t.f=V.b8()
t.r=V.b8()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seE(H.c([],[[P.ci,P.N]]))
t=u.z
s=document
r=W.a6
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a2(s,"contextmenu",H.m(u.gf9(),q),!1,r))
t=u.z
p=W.j
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a2(a,"focus",H.m(u.gff(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a2(a,"blur",H.m(u.gf3(),o),!1,p))
t=u.z
n=W.aN
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a2(s,"keyup",H.m(u.gfj(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a2(s,"keydown",H.m(u.gfh(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a2(a,"mousedown",H.m(u.gfn(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a2(a,"mouseup",H.m(u.gfs(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a2(a,l,H.m(u.gfp(),q),!1,r))
n=u.z
m=W.b0;(n&&C.a).h(n,W.a2(a,H.S(W.l8(a)),H.m(u.gfu(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a2(s,l,H.m(u.gfb(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a2(s,"mouseup",H.m(u.gfd(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a2(s,"pointerlockchange",H.m(u.gfw(),o),!1,p))
p=u.z
o=W.aB
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a2(a,"touchstart",H.m(u.gfO(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a2(a,"touchend",H.m(u.gfK(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a2(a,"touchmove",H.m(u.gfM(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.as(Date.now(),!1)
k.cy=0
k.cW()
return k},
eT:function eT(){},
ae:function ae(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h3:function h3(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h4:function h4(a){this.a=a},
h5:function h5(a){this.a=a},
h6:function h6(a){this.a=a},
dC:function dC(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hB:function hB(a){this.a=a}},Z={
jk:function(a,b,c){var u
H.l(c,"$ib",[P.A],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cG(c)),35044)
a.bindBuffer(b,null)
return new Z.dP(b,u)},
at:function(a){return new Z.b_(a)},
dP:function dP(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dQ:function dQ(a){this.a=a},
bX:function bX(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a){this.a=a}},D={
I:function(){var u=new D.c2()
u.sag(null)
u.sb0(null)
u.c=null
u.d=0
return u},
eW:function eW(){},
c2:function c2(){var _=this
_.d=_.c=_.b=_.a=null},
fc:function fc(a){this.a=a},
fd:function fd(a){this.a=a},
v:function v(){this.b=null},
bn:function bn(a){this.b=null
this.$ti=a},
bo:function bo(a){this.b=null
this.$ti=a},
K:function K(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
cX:function cX(){},
Y:function Y(){},
d9:function d9(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dm:function dm(){},
du:function du(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){}},X={cR:function cR(a,b){this.a=a
this.b=b},d8:function d8(a,b){this.a=a
this.b=b},fs:function fs(){var _=this
_.d=_.c=_.b=_.a=null},dc:function dc(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fy:function fy(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},an:function an(a,b,c){this.a=a
this.b=b
this.c=c},b5:function b5(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fO:function fO(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ca:function ca(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h0:function h0(){},dE:function dE(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hE:function hE(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dK:function dK(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
j9:function(a){var u=new X.fl(),t=new V.ax(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.k3
if(t==null){t=V.k2(0,0,1,1)
$.k3=t}u.r=t
return u},
jW:function(a){var u,t,s=new X.dl()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().h(0,s.gel())
t=new D.K("mover",u,s.b,[U.a9])
t.b=!0
s.ae(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.L().a)){s.c=1.0471975511965976
t=new D.K("fov",t,1.0471975511965976,[P.z])
t.b=!0
s.ae(t)}t=s.d
if(!(Math.abs(t-0.1)<$.L().a)){s.d=0.1
t=new D.K("near",t,0.1,[P.z])
t.b=!0
s.ae(t)}t=s.e
if(!(Math.abs(t-2000)<$.L().a)){s.e=2000
t=new D.K("far",t,2000,[P.z])
t.b=!0
s.ae(t)}return s},
bA:function bA(){},
fl:function fl(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fn:function fn(){this.b=this.a=null},
dl:function dl(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cj:function cj(){}},V={
mm:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.f.dZ(a-b,u)
return(a<0?a+u:a)+b},
R:function(a,b,c){if(a==null)return C.j.a8("null",c)
return C.j.a8(C.f.dT(Math.abs(a-0)<$.L().a?0:a,b),c+b+1)},
bO:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.z],"$ab")
u=H.c([],[P.o])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.B)(a),++r){q=V.R(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.i(u,p)
C.a.Z(u,p,C.j.a8(u[p],s))}return u},
jA:function(a){return C.f.iy(Math.pow(2,C.H.c4(Math.log(H.lX(a))/Math.log(2))))},
bG:function(){var u=$.jT
return u==null?$.jT=V.aP(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aP:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
b8:function(){var u=$.jY
return u==null?$.jY=new V.a1(0,0):u},
lk:function(){var u=$.ce
return u==null?$.ce=new V.af(0,0,0):u},
k2:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dp(a,b,c,d)},
dO:function(){var u=$.ke
return u==null?$.ke=new V.Q(0,0,0):u},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fb:function fb(a){this.a=a},
dg:function dg(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ai:function ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a1:function a1(a,b){this.a=a
this.b=b},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
b9:function b9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dp:function dp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
P:function P(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
aa:function(a){var u=new V.hb()
u.ea(a)
return u},
eK:function eK(){},
b4:function b4(){},
dd:function dd(){},
b6:function b6(){this.a=null},
hb:function hb(){this.a=null},
ch:function ch(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
cl:function cl(a){this.b=a
this.c=null},
hD:function hD(){this.c=this.b=this.a=null},
cm:function cm(a){this.b=a
this.a=this.c=null},
mi:function(a){P.lB(C.F,new V.j1(a))},
ly:function(a){var u=new V.hf()
u.eb(a,!0)
return u},
j1:function j1(a){this.a=a},
hf:function hf(){this.b=this.a=null},
hh:function hh(a){this.a=a},
hg:function hg(a){this.a=a}},U={
j8:function(){var u=new U.eX()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
eX:function eX(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cT:function cT(){this.b=this.a=null},
c5:function c5(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
dL:function dL(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dM:function dM(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dN:function dN(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cS:function cS(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cV:function cV(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},d0:function d0(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ao:function ao(){},
kw:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="testCanvas",a4=null,a5="modifiers",a6=34067,a7=V.ly("Test 034"),a8=W.j6()
a8.className="pageLargeCanvas"
a8.id=a3
a7.a.appendChild(a8)
u=[P.o]
a7.d1(H.c(["Test of resizing the render target. ","Resizing the canvas works better in Chrome."],u))
a7.d1(H.c(["\xab[Back to Tests|../]"],u))
u=document
a8=u.getElementById(a3)
a7=a8.style
a7.width="100%"
a7.height="100%"
a7.margin="-4px"
t=u.createElement("div")
a7=t.style
a7.border="2px solid"
a7.padding="10px"
C.t.h_(a7,(a7&&C.t).eu(a7,"resize"),"both","")
a7.overflow="auto"
J.kZ(a8,t)
t.appendChild(a8)
s=u.getElementById(a3)
if(s==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
r=E.lA(s,!0,!0,!0,!1)
q=new U.c5()
q.aY(U.a9)
q.aG(q.geW(),q.gfC())
q.e=null
q.f=V.bG()
q.r=0
a7=r.r
u=new U.dM()
p=U.j8()
p.sci(0,!0)
p.sca(6.283185307179586)
p.scc(0)
p.sa2(0,0)
p.scb(100)
p.sN(0)
p.sbY(0.5)
u.b=p
o=u.gaB()
p.gm().h(0,o)
p=U.j8()
p.sci(0,!0)
p.sca(6.283185307179586)
p.scc(0)
p.sa2(0,0)
p.scb(100)
p.sN(0)
p.sbY(0.5)
u.c=p
p.gm().h(0,o)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
n=new X.an(!1,!1,!1)
m=u.d
u.d=n
p=[X.an]
o=new D.K(a5,m,n,p)
o.b=!0
u.K(o)
o=u.f
if(o!==!1){u.f=!1
o=new D.K("invertX",o,!1,[P.a3])
o.b=!0
u.K(o)}o=u.r
if(o!==!1){u.r=!1
o=new D.K("invertY",o,!1,[P.a3])
o.b=!0
u.K(o)}u.aM(a7)
q.h(0,u)
a7=r.r
u=new U.dL()
o=U.j8()
o.sci(0,!0)
o.sca(6.283185307179586)
o.scc(0)
o.sa2(0,0)
o.scb(100)
o.sN(0)
o.sbY(0.2)
u.b=o
o.gm().h(0,u.gaB())
u.c=null
u.d=!1
u.e=2.5
u.r=4
u.x=u.y=!1
u.z=0
u.Q=null
u.ch=0
u.cy=u.cx=null
n=new X.an(!0,!1,!1)
m=u.c
u.c=n
o=new D.K(a5,m,n,p)
o.b=!0
u.K(o)
u.aM(a7)
q.h(0,u)
a7=r.r
u=new U.dN()
u.c=0.01
u.e=u.d=0
n=new X.an(!1,!1,!1)
u.b=n
p=new D.K(a5,a4,n,p)
p.b=!0
u.K(p)
u.aM(a7)
q.h(0,u)
l=V.aP(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
a7=new U.cT()
a7.a=l
q.h(0,a7)
k=X.jW(q)
j=new O.de()
j.ses(O.j7(V.ai))
j.e.aG(j.gf_(),j.gf1())
a7=new O.aO(j,"emission")
a7.c=C.c
a7.f=new V.a7(0,0,0)
j.f=a7
a7=new O.aO(j,"ambient")
a7.c=C.c
a7.f=new V.a7(0,0,0)
j.r=a7
a7=new O.aO(j,"diffuse")
a7.c=C.c
a7.f=new V.a7(0,0,0)
j.x=a7
a7=new O.aO(j,"invDiffuse")
a7.c=C.c
a7.f=new V.a7(0,0,0)
j.y=a7
a7=new O.fH(j,"specular")
a7.c=C.c
a7.f=new V.a7(0,0,0)
a7.ch=100
j.z=a7
a7=new O.fE(j,"bump")
a7.c=C.c
j.Q=a7
j.ch=null
a7=new O.aO(j,"reflect")
a7.c=C.c
a7.f=new V.a7(0,0,0)
j.cx=a7
a7=new O.fG(j,"refract")
a7.c=C.c
a7.f=new V.a7(0,0,0)
a7.ch=1
j.cy=a7
a7=new O.fD(j,"alpha")
a7.c=C.c
a7.f=1
j.db=a7
a7=new D.d9()
a7.aY(D.Y)
a7.seC(H.c([],[D.cX]))
a7.sfQ(H.c([],[D.dm]))
a7.sh9(H.c([],[D.du]))
a7.shm(H.c([],[D.dz]))
a7.shn(H.c([],[D.dA]))
a7.sho(H.c([],[D.dB]))
a7.ch=a7.Q=null
a7.ck(a7.geY(),a7.gfA(),a7.gfE())
j.dx=a7
u=a7.Q
a7=u==null?a7.Q=D.I():u
a7.h(0,j.gfX())
a7=j.dx
u=a7.ch
a7=u==null?a7.ch=D.I():u
a7.h(0,j.gay())
j.dy=null
a7=j.r
a7.sah(0,new V.a7(0.3,0.3,0.3))
a7=j.x
a7.sah(0,new V.a7(0.8,0.8,0.8))
a7=j.x
u=r.f.i6("../resources/Test.png")
p=a7.c
if(p!==C.d){if(p===C.c)a7.am()
a7.c=C.d
a7.h3(a4)
p=a7.a
p.a=null
p.P(a4)}a7.h2(u)
i=X.j9(a4)
if(i.b){i.b=!1
a7=new D.K("clearColor",!0,!1,[P.a3])
a7.b=!0
i.ae(a7)}h=E.jO()
g=F.jg()
F.cF(g,a4,a4,1,1,1,0,0,1)
F.cF(g,a4,a4,1,1,0,1,0,3)
F.cF(g,a4,a4,1,1,0,0,1,2)
F.cF(g,a4,a4,1,1,-1,0,0,0)
F.cF(g,a4,a4,1,1,0,-1,0,0)
F.cF(g,a4,a4,1,1,0,0,-1,3)
g.ao()
h.sbr(0,g)
f=new M.d0()
f.a=!0
f.sex(0,O.j7(E.ae))
f.e.aG(f.gf5(),f.gf7())
f.y=f.x=f.r=f.f=null
e=X.j9(a4)
f.saN(a4)
f.saS(0,e)
f.saT(a4)
f.e.h(0,h)
f.saT(j)
f.saS(0,i)
f.saN(k)
a7=r.f
u=a7.a
d=u.createTexture()
u.bindTexture(a6,d)
u.texParameteri(a6,10242,10497)
u.texParameteri(a6,10243,10497)
u.texParameteri(a6,10241,9729)
u.texParameteri(a6,10240,9729)
u.bindTexture(a6,a4)
c=new T.dy()
c.a=0
c.b=d
c.c=!1
c.d=0
a7.aA(c,d,"../resources/maskonaive/posx.jpg",34069,!1,!1)
a7.aA(c,d,"../resources/maskonaive/negx.jpg",34070,!1,!1)
a7.aA(c,d,"../resources/maskonaive/posy.jpg",34071,!1,!1)
a7.aA(c,d,"../resources/maskonaive/negy.jpg",34072,!1,!1)
a7.aA(c,d,"../resources/maskonaive/posz.jpg",34073,!1,!1)
a7.aA(c,d,"../resources/maskonaive/negz.jpg",34074,!1,!1)
b=new M.cV()
b.a=!0
a7=E.jO()
g=F.jg()
u=g.a
p=new V.Q(-1,-1,1)
p=p.t(0,Math.sqrt(p.A(p)))
a=u.b4(new V.b9(1,2,4,6),new V.ax(1,0,0,1),new V.af(-1,-1,0),new V.a1(0,1),p,a4)
u=g.a
p=new V.Q(1,-1,1)
p=p.t(0,Math.sqrt(p.A(p)))
a0=u.b4(new V.b9(0,3,4,6),new V.ax(0,0,1,1),new V.af(1,-1,0),new V.a1(1,1),p,a4)
u=g.a
p=new V.Q(1,1,1)
p=p.t(0,Math.sqrt(p.A(p)))
a1=u.b4(new V.b9(0,2,5,6),new V.ax(0,1,0,1),new V.af(1,1,0),new V.a1(1,0),p,a4)
u=g.a
p=V.b8()
o=new V.Q(-1,1,1)
o=o.t(0,Math.sqrt(o.A(o)))
a2=u.b4(new V.b9(0,2,4,7),new V.ax(1,1,0,1),new V.af(-1,1,0),p,o,a4)
g.d.hO(H.c([a,a0,a1,a2],[F.aq]))
g.ao()
a7.sbr(0,g)
b.e=a7
b.saN(a4)
b.saS(0,a4)
b.saT(a4)
a7=new O.ds()
a7.b=1.0471975511965976
a7.d=new V.a7(1,1,1)
m=a7.c
a7.c=c
c.gm().h(0,a7.gay())
u=new D.K("boxTexture",m,a7.c,[T.dy])
u.b=!0
a7.P(u)
b.saT(a7)
b.saS(0,i)
b.saN(k)
a7=M.ao
u=H.c([b,f],[a7])
p=new M.cS()
p.aY(a7)
p.e=!0
p.f=!1
p.r=null
p.aG(p.gfG(),p.gfI())
p.bO(0,u)
a7=r.d
if(a7!==p){if(a7!=null)a7.gm().O(0,r.gcs())
r.d=p
p.gm().h(0,r.gcs())
r.ct()}V.mi(r)}},A={
lj:function(a,b){var u=a.ac,t=new A.df(b,u)
t.cq(b,u)
t.e8(a,b)
return t},
jj:function(a,b,c,d,e){var u=new A.hL(a,c,e)
u.f=d
u.shp(P.li(d,0,P.A))
return u},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(a){this.a=a},
df:function df(a,b){var _=this
_.b7=_.dh=_.b6=_.ac=_.ai=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dB=_.bZ=_.dA=_.bk=_.dz=_.dw=_.bj=_.bi=_.dv=_.du=_.bh=_.bg=_.bf=_.dt=_.ds=_.be=_.dr=_.dq=_.bd=_.dn=_.dm=_.bc=_.bb=_.dl=_.dk=_.ba=_.b9=_.dj=_.di=_.b8=null
_.c3=_.dF=_.c2=_.dE=_.c1=_.dD=_.c0=_.dC=_.c_=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fF:function fF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ai=b3
_.ac=b4
_.b6=b5},
cn:function cn(a,b){this.b=a
this.c=b},
cr:function cr(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cp:function cp(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cs:function cs(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cq:function cq(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
ct:function ct(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cg:function cg(){},
bC:function bC(a,b){this.a=a
this.b=b},
dt:function dt(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dF:function dF(){},
hR:function hR(a){this.a=a},
H:function H(a,b,c){this.a=a
this.c=b
this.d=c},
hN:function hN(a,b,c){this.a=a
this.c=b
this.d=c},
hO:function hO(a,b,c){this.a=a
this.c=b
this.d=c},
hQ:function hQ(a,b,c){this.a=a
this.c=b
this.d=c},
hL:function hL(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
U:function U(a,b,c){this.a=a
this.c=b
this.d=c},
hM:function hM(a,b,c){this.a=a
this.c=b
this.d=c},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
hP:function hP(a,b,c){this.a=a
this.c=b
this.d=c},
hS:function hS(a,b,c){this.a=a
this.c=b
this.d=c},
co:function co(a,b,c){this.a=a
this.c=b
this.d=c},
al:function al(a,b,c){this.a=a
this.c=b
this.d=c},
ag:function ag(a,b,c){this.a=a
this.c=b
this.d=c},
ab:function ab(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iO:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cF:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.Q(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.Q(u+a3,t+a1,s+a2)
q=new V.Q(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.Q(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.iO(i)
l=F.iO(j.b)
k=F.mk(d,a0,new F.iN(j,F.iO(j.c),F.iO(j.d),l,m,c),b)
if(k!=null)a.i8(k)},
mk:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.m(c,{func:1,ret:-1,args:[F.aq,P.z,P.z]})
if(a<1)return
if(b<1)return
u=F.jg()
t=H.c([],[F.aq])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hZ(g,g,new V.ax(p,0,0,1),g,g,new V.a1(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.bX(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.hZ(g,g,new V.ax(j,i,h,1),g,g,new V.a1(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bX(d))}}u.d.hP(a+1,b+1,t)
return u},
c3:function(a,b,c){var u=new F.a0(),t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a0()
return u},
le:function(a,b){var u=new F.b3(),t=a.a
if(t==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a0()
return u},
jg:function(){var u=new F.dr(),t=new F.i_(u)
t.b=!1
t.shq(H.c([],[F.aq]))
u.a=t
t=new F.he(u)
t.sbJ(H.c([],[F.bq]))
u.b=t
t=new F.hd(u)
t.seM(H.c([],[F.b3]))
u.c=t
t=new F.hc(u)
t.seF(H.c([],[F.a0]))
u.d=t
u.e=null
return u},
hZ:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aq(),r=new F.i4()
r.sbJ(H.c([],[F.bq]))
s.b=r
r=new F.i3()
u=[F.b3]
r.seN(H.c([],u))
r.seO(H.c([],u))
s.c=r
r=new F.i0()
u=[F.a0]
r.seG(H.c([],u))
r.seH(H.c([],u))
r.seI(H.c([],u))
s.d=r
h=$.kR()
s.e=0
r=$.aD()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bf().a)!==0?e:t
s.x=(u&$.be().a)!==0?b:t
s.y=(u&$.bg().a)!==0?f:t
s.z=(u&$.bh().a)!==0?g:t
s.Q=(u&$.kS().a)!==0?c:t
s.ch=(u&$.bS().a)!==0?i:0
s.cx=(u&$.bd().a)!==0?a:t
return s},
iN:function iN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a0:function a0(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
b3:function b3(){this.b=this.a=null},
bq:function bq(){this.a=null},
dr:function dr(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hc:function hc(a){this.a=a
this.b=null},
hd:function hd(a){this.a=a
this.b=null},
he:function he(a){this.a=a
this.b=null},
aq:function aq(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i6:function i6(a){this.a=a},
i5:function i5(a){this.a=a},
i_:function i_(a){this.a=a
this.c=this.b=null},
i0:function i0(){this.d=this.c=this.b=null},
i1:function i1(a,b){this.a=a
this.b=b},
i2:function i2(a,b){this.a=a
this.b=b},
i3:function i3(){this.c=this.b=null},
i4:function i4(){this.b=null}},T={ck:function ck(){},dx:function dx(){},hx:function hx(){var _=this
_.y=_.d=_.c=_.b=_.a=null},dy:function dy(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hy:function hy(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},hA:function hA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},hz:function hz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.je.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gE:function(a){return H.cf(a)},
i:function(a){return"Instance of '"+H.bI(a)+"'"}}
J.fp.prototype={
i:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$ia3:1}
J.d5.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gE:function(a){return 0}}
J.d7.prototype={
gE:function(a){return 0},
i:function(a){return String(a)}}
J.fZ.prototype={}
J.dH.prototype={}
J.bp.prototype={
i:function(a){var u=a[$.kG()]
if(u==null)return this.e4(a)
return"JavaScript function for "+H.k(J.ar(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ija:1}
J.aL.prototype={
h:function(a,b){H.D(b,H.w(a,0))
if(!!a.fixed$length)H.t(P.ap("add"))
a.push(b)},
O:function(a,b){var u
if(!!a.fixed$length)H.t(P.ap("remove"))
for(u=0;u<a.length;++u)if(J.a4(a[u],b)){a.splice(u,1)
return!0}return!1},
bO:function(a,b){var u,t
H.l(b,"$ie",[H.w(a,0)],"$ae")
if(!!a.fixed$length)H.t(P.ap("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.B)(b),++t)a.push(b[t])},
M:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.c0(a))}},
v:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.Z(t,u,H.k(a[u]))
return t.join(b)},
i4:function(a){return this.v(a,"")},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
e2:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.ay(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.ay(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.w(a,0)])
return H.c(a.slice(b,c),[H.w(a,0)])},
gc7:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.lb())},
ap:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a4(a[u],b))return!0
return!1},
i:function(a){return P.jb(a,"[","]")},
gS:function(a){return new J.ah(a,a.length,[H.w(a,0)])},
gE:function(a){return H.cf(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.t(P.ap("set length"))
if(b<0)throw H.h(P.ay(b,0,null,"newLength",null))
a.length=b},
Z:function(a,b,c){H.D(c,H.w(a,0))
if(!!a.immutable$list)H.t(P.ap("indexed set"))
if(b>=a.length||b<0)throw H.h(H.cJ(a,b))
a[b]=c},
$ie:1,
$ib:1}
J.jd.prototype={}
J.ah.prototype={
gH:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.B(s))
u=t.c
if(u>=r){t.scK(null)
return!1}t.scK(s[u]);++t.c
return!0},
scK:function(a){this.d=H.D(a,H.w(this,0))},
$iaK:1}
J.d6.prototype={
iy:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.ap(""+a+".toInt()"))},
c4:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.ap(""+a+".floor()"))},
ad:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ap(""+a+".round()"))},
dT:function(a,b){var u,t
if(b>20)throw H.h(P.ay(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.h(H.bw(b))
return a*b},
dZ:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
e7:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cZ(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.cZ(a,b)},
cZ:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.ap("Result of truncating division is "+H.k(u)+": "+H.k(a)+" ~/ "+b))},
b2:function(a,b){var u
if(a>0)u=this.h8(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h8:function(a,b){return b>31?0:a>>>b},
$iz:1,
$ia5:1}
J.d4.prototype={$iA:1}
J.d3.prototype={}
J.c7.prototype={
bW:function(a,b){if(b<0)throw H.h(H.cJ(a,b))
if(b>=a.length)H.t(H.cJ(a,b))
return a.charCodeAt(b)},
aZ:function(a,b){if(b>=a.length)throw H.h(H.cJ(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.h(P.j4(b,null,null))
return a+b},
cn:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.h2(b,null))
if(b>c)throw H.h(P.h2(b,null))
if(c>a.length)throw H.h(P.h2(c,null))
return a.substring(b,c)},
cm:function(a,b){return this.cn(a,b,null)},
n:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.D)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a8:function(a,b){var u=b-a.length
if(u<=0)return a
return this.n(" ",u)+a},
hT:function(a,b,c){if(c>a.length)throw H.h(P.ay(c,0,a.length,null,null))
return H.kB(a,b,c)},
i:function(a){return a},
gE:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ijV:1,
$io:1}
H.Z.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.j.bW(this.a,b)},
$adJ:function(){return[P.A]},
$au:function(){return[P.A]},
$ae:function(){return[P.A]},
$ab:function(){return[P.A]}}
H.f9.prototype={}
H.db.prototype={
gH:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.iU(s),q=r.gk(s)
if(t.b!==q)throw H.h(P.c0(s))
u=t.c
if(u>=q){t.saJ(null)
return!1}t.saJ(r.C(s,u));++t.c
return!0},
saJ:function(a){this.d=H.D(a,H.w(this,0))},
$iaK:1}
H.fB.prototype={
gS:function(a){return new H.fC(J.bT(this.a),this.b,this.$ti)},
gk:function(a){return J.bU(this.a)},
C:function(a,b){return this.b.$1(J.jE(this.a,b))},
$ae:function(a,b){return[b]}}
H.fC.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.saJ(u.c.$1(t.gH(t)))
return!0}u.saJ(null)
return!1},
gH:function(a){return this.a},
saJ:function(a){this.a=H.D(a,H.w(this,1))},
$aaK:function(a,b){return[b]}}
H.i8.prototype={
gS:function(a){return new H.i9(J.bT(this.a),this.b,this.$ti)}}
H.i9.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(H.x(t.$1(u.gH(u))))return!0
return!1},
gH:function(a){var u=this.a
return u.gH(u)}}
H.bE.prototype={}
H.dJ.prototype={}
H.dI.prototype={}
H.hI.prototype={
a7:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fV.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fr.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.k(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.k(t.a)+")"
return s+r+"' on '"+u+"' ("+H.k(t.a)+")"}}
H.hU.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j2.prototype={
$1:function(a){if(!!J.W(a).$ibk)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.em.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iak:1}
H.bZ.prototype={
i:function(a){return"Closure '"+H.bI(this).trim()+"'"},
$ija:1,
giC:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hu.prototype={}
H.hm.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bR(u)+"'"}}
H.bV.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bV))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gE:function(a){var u,t=this.c
if(t==null)u=H.cf(this.a)
else u=typeof t!=="object"?J.by(t):H.cf(t)
return(u^H.cf(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bI(u)+"'")}}
H.hK.prototype={
i:function(a){return this.a}}
H.eV.prototype={
i:function(a){return this.a}}
H.h9.prototype={
i:function(a){return"RuntimeError: "+H.k(this.a)}}
H.ia.prototype={
i:function(a){return"Assertion failed: "+P.d1(this.a)}}
H.aM.prototype={
gk:function(a){return this.a},
gas:function(a){return new H.da(this,[H.w(this,0)])},
d8:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cH(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cH(t,b)}else return s.i2(b)},
i2:function(a){var u=this.d
if(u==null)return!1
return this.c5(this.bx(u,J.by(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b_(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b_(r,b)
s=t==null?null:t.b
return s}else return q.i3(b)},
i3:function(a){var u,t,s=this.d
if(s==null)return
u=this.bx(s,J.by(a)&0x3ffffff)
t=this.c5(u,a)
if(t<0)return
return u[t].b},
Z:function(a,b,c){var u,t,s,r,q,p,o=this
H.D(b,H.w(o,0))
H.D(c,H.w(o,1))
if(typeof b==="string"){u=o.b
o.cz(u==null?o.b=o.bH():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cz(t==null?o.c=o.bH():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bH()
r=J.by(b)&0x3ffffff
q=o.bx(s,r)
if(q==null)o.bM(s,r,[o.bI(b,c)])
else{p=o.c5(q,b)
if(p>=0)q[p].b=c
else q.push(o.bI(b,c))}}},
M:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.w(s,0),H.w(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.c0(s))
u=u.c}},
cz:function(a,b,c){var u,t=this
H.D(b,H.w(t,0))
H.D(c,H.w(t,1))
u=t.b_(a,b)
if(u==null)t.bM(a,b,t.bI(b,c))
else u.b=c},
bI:function(a,b){var u=this,t=new H.fu(H.D(a,H.w(u,0)),H.D(b,H.w(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
c5:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a4(a[t].a,b))return t
return-1},
i:function(a){return P.jS(this)},
b_:function(a,b){return a[b]},
bx:function(a,b){return a[b]},
bM:function(a,b,c){a[b]=c},
eB:function(a,b){delete a[b]},
cH:function(a,b){return this.b_(a,b)!=null},
bH:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bM(t,u,t)
this.eB(t,u)
return t}}
H.fu.prototype={}
H.da.prototype={
gk:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.fv(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fv.prototype={
gH:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.c0(t))
else{t=u.c
if(t==null){u.scw(null)
return!1}else{u.scw(t.a)
u.c=u.c.c
return!0}}},
scw:function(a){this.d=H.D(a,H.w(this,0))},
$iaK:1}
H.iW.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.iX.prototype={
$2:function(a,b){return this.a(a,b)},
$S:28}
H.iY.prototype={
$1:function(a){return this.a(H.S(a))},
$S:30}
H.fq.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ijV:1}
H.cc.prototype={$imG:1}
H.dh.prototype={
gk:function(a){return a.length},
$iE:1,
$aE:function(){}}
H.cb.prototype={
j:function(a,b){H.bu(b,a,a.length)
return a[b]},
$abE:function(){return[P.z]},
$au:function(){return[P.z]},
$ie:1,
$ae:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.di.prototype={
$abE:function(){return[P.A]},
$au:function(){return[P.A]},
$ie:1,
$ae:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.fP.prototype={
j:function(a,b){H.bu(b,a,a.length)
return a[b]}}
H.fQ.prototype={
j:function(a,b){H.bu(b,a,a.length)
return a[b]}}
H.fR.prototype={
j:function(a,b){H.bu(b,a,a.length)
return a[b]}}
H.fS.prototype={
j:function(a,b){H.bu(b,a,a.length)
return a[b]}}
H.fT.prototype={
j:function(a,b){H.bu(b,a,a.length)
return a[b]}}
H.dj.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bu(b,a,a.length)
return a[b]},
$imH:1}
H.fU.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bu(b,a,a.length)
return a[b]}}
H.cx.prototype={}
H.cy.prototype={}
H.cz.prototype={}
H.cA.prototype={}
P.ic.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:15}
P.ib.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.id.prototype={
$0:function(){this.a.$0()},
$S:2}
P.ie.prototype={
$0:function(){this.a.$0()},
$S:2}
P.es.prototype={
ej:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bN(new P.iK(this,b),0),a)
else throw H.h(P.ap("`setTimeout()` not found."))},
ek:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bN(new P.iJ(this,a,Date.now(),b),0),a)
else throw H.h(P.ap("Periodic timer."))},
$iaX:1}
P.iK.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.iJ.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.i.e7(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b1.prototype={
i7:function(a){if(this.c!==6)return!0
return this.b.b.cg(H.m(this.d,{func:1,ret:P.a3,args:[P.N]}),a.a,P.a3,P.N)},
i1:function(a){var u=this.e,t=P.N,s={futureOr:1,type:H.w(this,1)},r=this.b.b
if(H.eI(u,{func:1,args:[P.N,P.ak]}))return H.ju(r.it(u,a.a,a.b,null,t,P.ak),s)
else return H.ju(r.cg(H.m(u,{func:1,args:[P.N]}),a.a,null,t),s)}}
P.au.prototype={
dS:function(a,b,c){var u,t,s,r=H.w(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.V
if(u!==C.k){u.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.lP(b,u)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.au($.V,[c])
s=b==null?1:3
this.cA(new P.b1(t,s,a,b,[r,c]))
return t},
ix:function(a,b){return this.dS(a,null,b)},
cA:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.n(t.c,"$ib1")
t.c=a}else{if(s===2){u=H.n(t.c,"$iau")
s=u.a
if(s<4){u.cA(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.iR(null,null,s,H.m(new P.im(t,a),{func:1,ret:-1}))}},
cU:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.n(p.c,"$ib1")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.n(p.c,"$iau")
u=q.a
if(u<4){q.cU(a)
return}p.a=u
p.c=q.c}o.a=p.b1(a)
u=p.b
u.toString
P.iR(null,null,u,H.m(new P.ir(o,p),{func:1,ret:-1}))}},
bL:function(){var u=H.n(this.c,"$ib1")
this.c=null
return this.b1(u)},
b1:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cD:function(a){var u,t,s=this,r=H.w(s,0)
H.ju(a,{futureOr:1,type:r})
u=s.$ti
if(H.jr(a,"$ic4",u,"$ac4"))if(H.jr(a,"$iau",u,null))P.kf(a,s)
else P.lG(a,s)
else{t=s.bL()
H.D(a,r)
s.a=4
s.c=a
P.cv(s,t)}},
cE:function(a,b){var u,t=this
H.n(b,"$iak")
u=t.bL()
t.a=8
t.c=new P.ad(a,b)
P.cv(t,u)},
$ic4:1}
P.im.prototype={
$0:function(){P.cv(this.a,this.b)},
$S:2}
P.ir.prototype={
$0:function(){P.cv(this.b,this.a.a)},
$S:2}
P.io.prototype={
$1:function(a){var u=this.a
u.a=0
u.cD(a)},
$S:15}
P.ip.prototype={
$2:function(a,b){H.n(b,"$iak")
this.a.cE(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.iq.prototype={
$0:function(){this.a.cE(this.b,this.c)},
$S:2}
P.iu.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dQ(H.m(s.d,{func:1}),null)}catch(r){u=H.bc(r)
t=H.bP(r)
if(o.d){s=H.n(o.a.a.c,"$iad").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.n(o.a.a.c,"$iad")
else q.b=new P.ad(u,t)
q.a=!0
return}if(!!J.W(n).$ic4){if(n instanceof P.au&&n.a>=4){if(n.a===8){s=o.b
s.b=H.n(n.c,"$iad")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.ix(new P.iv(p),null)
s.a=!1}},
$S:3}
P.iv.prototype={
$1:function(a){return this.a},
$S:35}
P.it.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.w(s,0)
q=H.D(n.c,r)
p=H.w(s,1)
n.a.b=s.b.b.cg(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bc(o)
t=H.bP(o)
s=n.a
s.b=new P.ad(u,t)
s.a=!0}},
$S:3}
P.is.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.n(m.a.a.c,"$iad")
r=m.c
if(H.x(r.i7(u))&&r.e!=null){q=m.b
q.b=r.i1(u)
q.a=!1}}catch(p){t=H.bc(p)
s=H.bP(p)
r=H.n(m.a.a.c,"$iad")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ad(t,s)
n.a=!0}},
$S:3}
P.dR.prototype={}
P.hp.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.au($.V,[P.A])
r.a=0
u=H.w(s,0)
t=H.m(new P.hr(r,s),{func:1,ret:-1,args:[u]})
H.m(new P.hs(r,q),{func:1,ret:-1})
W.a2(s.a,s.b,t,!1,u)
return q}}
P.hr.prototype={
$1:function(a){H.D(a,H.w(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.w(this.b,0)]}}}
P.hs.prototype={
$0:function(){this.b.cD(this.a.a)},
$S:2}
P.ci.prototype={}
P.hq.prototype={}
P.aX.prototype={}
P.ad.prototype={
i:function(a){return H.k(this.a)},
$ibk:1}
P.iM.prototype={$imU:1}
P.iQ.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dk():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.i(0)
throw u},
$S:2}
P.iC.prototype={
iu:function(a){var u,t,s,r=null
H.m(a,{func:1,ret:-1})
try{if(C.k===$.V){a.$0()
return}P.kj(r,r,this,a,-1)}catch(s){u=H.bc(s)
t=H.bP(s)
P.iP(r,r,this,u,H.n(t,"$iak"))}},
iv:function(a,b,c){var u,t,s,r=null
H.m(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.k===$.V){a.$1(b)
return}P.kk(r,r,this,a,b,-1,c)}catch(s){u=H.bc(s)
t=H.bP(s)
P.iP(r,r,this,u,H.n(t,"$iak"))}},
hR:function(a,b){return new P.iE(this,H.m(a,{func:1,ret:b}),b)},
bS:function(a){return new P.iD(this,H.m(a,{func:1,ret:-1}))},
d3:function(a,b){return new P.iF(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
dQ:function(a,b){H.m(a,{func:1,ret:b})
if($.V===C.k)return a.$0()
return P.kj(null,null,this,a,b)},
cg:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.V===C.k)return a.$1(b)
return P.kk(null,null,this,a,b,c,d)},
it:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.V===C.k)return a.$2(b,c)
return P.lQ(null,null,this,a,b,c,d,e,f)}}
P.iE.prototype={
$0:function(){return this.a.dQ(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iD.prototype={
$0:function(){return this.a.iu(this.b)},
$S:3}
P.iF.prototype={
$1:function(a){var u=this.c
return this.a.iv(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iz.prototype={
gS:function(a){return P.kh(this,this.r,H.w(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.D(b,H.w(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cB(u==null?s.b=P.jm():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cB(t==null?s.c=P.jm():t,b)}else return s.en(0,b)},
en:function(a,b){var u,t,s,r=this
H.D(b,H.w(r,0))
u=r.d
if(u==null)u=r.d=P.jm()
t=r.cF(b)
s=u[t]
if(s==null)u[t]=[r.bt(b)]
else{if(r.cL(s,b)>=0)return!1
s.push(r.bt(b))}return!0},
O:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fT(this.c,b)
else return this.fS(0,b)},
fS:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.eK(r,b)
t=s.cL(u,b)
if(t<0)return!1
s.d_(u.splice(t,1)[0])
return!0},
cB:function(a,b){H.D(b,H.w(this,0))
if(H.n(a[b],"$icw")!=null)return!1
a[b]=this.bt(b)
return!0},
fT:function(a,b){var u
if(a==null)return!1
u=H.n(a[b],"$icw")
if(u==null)return!1
this.d_(u)
delete a[b]
return!0},
cN:function(){this.r=1073741823&this.r+1},
bt:function(a){var u,t=this,s=new P.cw(H.D(a,H.w(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cN()
return s},
d_:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cN()},
cF:function(a){return J.by(a)&1073741823},
eK:function(a,b){return a[this.cF(b)]},
cL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a4(a[t].a,b))return t
return-1}}
P.cw.prototype={}
P.iA.prototype={
gH:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.c0(t))
else{t=u.c
if(t==null){u.scC(null)
return!1}else{u.scC(H.D(t.a,H.w(u,0)))
u.c=u.c.b
return!0}}},
scC:function(a){this.d=H.D(a,H.w(this,0))},
$iaK:1}
P.fw.prototype={$ie:1,$ib:1}
P.u.prototype={
gS:function(a){return new H.db(a,this.gk(a),[H.cK(this,a,"u",0)])},
C:function(a,b){return this.j(a,b)},
iA:function(a,b){var u,t=this,s=H.c([],[H.cK(t,a,"u",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.Z(s,u,t.j(a,u))
return s},
iz:function(a){return this.iA(a,!0)},
i:function(a){return P.jb(a,"[","]")}}
P.fz.prototype={}
P.fA.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.k(a)
t.a=u+": "
t.a+=H.k(b)},
$S:13}
P.a8.prototype={
M:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.cK(s,a,"a8",0),H.cK(s,a,"a8",1)]})
for(u=J.bT(s.gas(a));u.u();){t=u.gH(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.bU(this.gas(a))},
i:function(a){return P.jS(a)},
$iM:1}
P.iG.prototype={
i:function(a){return P.jb(this,"{","}")},
C:function(a,b){var u,t,s,r=this
P.k0(b,"index")
for(u=P.kh(r,r.r,H.w(r,0)),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.h(P.T(b,r,"index",null,t))},
$ie:1,
$ik4:1}
P.e5.prototype={}
P.c_.prototype={}
P.cU.prototype={}
P.fa.prototype={
$ac_:function(){return[P.o,[P.b,P.A]]}}
P.hX.prototype={}
P.hY.prototype={
hU:function(a){var u,t,s=P.k1(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iL(u)
if(t.eJ(a,0,s)!==s)t.d0(C.j.bW(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lL(0,t.b,u.length)))},
$acU:function(){return[P.o,[P.b,P.A]]}}
P.iL.prototype={
d0:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eJ:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.j.bW(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.j.aZ(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d0(r,C.j.aZ(a,p)))s=p}else if(r<=2047){q=n.b
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
P.a3.prototype={}
P.as.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.as&&this.a===b.a&&!0},
gE:function(a){var u=this.a
return(u^C.i.b2(u,30))&1073741823},
i:function(a){var u=this,t=P.l5(H.ls(u)),s=P.cW(H.lq(u)),r=P.cW(H.lm(u)),q=P.cW(H.ln(u)),p=P.cW(H.lp(u)),o=P.cW(H.lr(u)),n=P.l6(H.lo(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.z.prototype={}
P.bj.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bj&&this.a===b.a},
gE:function(a){return C.i.gE(this.a)},
i:function(a){var u,t,s,r=new P.f8(),q=this.a
if(q<0)return"-"+new P.bj(0-q).i(0)
u=r.$1(C.i.a_(q,6e7)%60)
t=r.$1(C.i.a_(q,1e6)%60)
s=new P.f7().$1(q%1e6)
return""+C.i.a_(q,36e8)+":"+H.k(u)+":"+H.k(t)+"."+H.k(s)}}
P.f7.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.f8.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.bk.prototype={}
P.eN.prototype={
i:function(a){return"Assertion failed"}}
P.dk.prototype={
i:function(a){return"Throw of null."}}
P.aE.prototype={
gbv:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbu:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbv()+o+u
if(!q.a)return t
s=q.gbu()
r=P.d1(q.b)
return t+s+": "+r}}
P.bJ.prototype={
gbv:function(){return"RangeError"},
gbu:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.k(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.k(s)
else if(t>s)u=": Not in range "+H.k(s)+".."+H.k(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.k(s)}return u}}
P.fo.prototype={
gbv:function(){return"RangeError"},
gbu:function(){var u,t=H.ac(this.b)
if(typeof t!=="number")return t.aw()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.k(u)},
gk:function(a){return this.f}}
P.hV.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hT.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hl.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eY.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.d1(u)+"."}}
P.fY.prototype={
i:function(a){return"Out of Memory"},
$ibk:1}
P.dv.prototype={
i:function(a){return"Stack Overflow"},
$ibk:1}
P.f2.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dZ.prototype={
i:function(a){return"Exception: "+this.a}}
P.fk.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.j.cn(s,0,75)+"...":s
return t+"\n"+r}}
P.A.prototype={}
P.e.prototype={
gk:function(a){var u,t=this.gS(this)
for(u=0;t.u();)++u
return u},
C:function(a,b){var u,t,s
P.k0(b,"index")
for(u=this.gS(this),t=0;u.u();){s=u.gH(u)
if(b===t)return s;++t}throw H.h(P.T(b,this,"index",null,t))},
i:function(a){return P.la(this,"(",")")}}
P.aK.prototype={}
P.b.prototype={$ie:1}
P.M.prototype={}
P.J.prototype={
gE:function(a){return P.N.prototype.gE.call(this,this)},
i:function(a){return"null"}}
P.a5.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
q:function(a,b){return this===b},
gE:function(a){return H.cf(this)},
i:function(a){return"Instance of '"+H.bI(this)+"'"},
toString:function(){return this.i(this)}}
P.ak.prototype={}
P.o.prototype={$ijV:1}
P.br.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.q.prototype={}
W.eJ.prototype={
gk:function(a){return a.length}}
W.eL.prototype={
i:function(a){return String(a)}}
W.eM.prototype={
i:function(a){return String(a)}}
W.cO.prototype={}
W.bB.prototype={
cj:function(a,b,c){if(c!=null)return a.getContext(b,P.lY(c))
return a.getContext(b)},
dY:function(a,b){return this.cj(a,b,null)},
$ibB:1}
W.bY.prototype={$ibY:1}
W.bi.prototype={
gk:function(a){return a.length}}
W.c1.prototype={$ic1:1}
W.eZ.prototype={
gk:function(a){return a.length}}
W.O.prototype={$iO:1}
W.bD.prototype={
eu:function(a,b){var u=$.kF(),t=u[b]
if(typeof t==="string")return t
t=this.hb(a,b)
u[b]=t
return t},
hb:function(a,b){var u
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
u=P.l7()+b
if(u in a)return u
return b},
h_:function(a,b,c,d){a.setProperty(b,c,d)},
gk:function(a){return a.length}}
W.f_.prototype={}
W.aG.prototype={}
W.aH.prototype={}
W.f0.prototype={
gk:function(a){return a.length}}
W.f1.prototype={
gk:function(a){return a.length}}
W.f3.prototype={
gk:function(a){return a.length}}
W.cY.prototype={$icY:1}
W.f4.prototype={
i:function(a){return String(a)}}
W.cZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[[P.aj,P.a5]]},
$au:function(){return[[P.aj,P.a5]]},
$ie:1,
$ae:function(){return[[P.aj,P.a5]]},
$ib:1,
$ab:function(){return[[P.aj,P.a5]]},
$ay:function(){return[[P.aj,P.a5]]}}
W.d_.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gav(a))+" x "+H.k(this.gar(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iaj)return!1
return a.left===u.gbl(b)&&a.top===u.gbp(b)&&this.gav(a)===u.gav(b)&&this.gar(a)===u.gar(b)},
gE:function(a){return W.kg(C.f.gE(a.left),C.f.gE(a.top),C.f.gE(this.gav(a)),C.f.gE(this.gar(a)))},
gd4:function(a){return a.bottom},
gar:function(a){return a.height},
gbl:function(a){return a.left},
gbo:function(a){return a.right},
gbp:function(a){return a.top},
gav:function(a){return a.width},
$iaj:1,
$aaj:function(){return[P.a5]}}
W.f5.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[P.o]},
$au:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$ay:function(){return[P.o]}}
W.f6.prototype={
gk:function(a){return a.length}}
W.ih.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.i(u,b)
return H.n(u[b],"$ia_")},
h:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.iz(this)
return new J.ah(u,u.length,[H.w(u,0)])},
$au:function(){return[W.a_]},
$ae:function(){return[W.a_]},
$ab:function(){return[W.a_]}}
W.a_.prototype={
gd6:function(a){return new W.ih(a,a.children)},
gd7:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.aw()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aw()
if(r<0)r=-r*0
return new P.aj(u,t,s,r,[P.a5])},
i:function(a){return a.localName},
$ia_:1}
W.j.prototype={$ij:1}
W.d.prototype={
hN:function(a,b,c,d){H.m(c,{func:1,args:[W.j]})
if(c!=null)this.eo(a,b,c,!1)},
eo:function(a,b,c,d){return a.addEventListener(b,H.bN(H.m(c,{func:1,args:[W.j]}),1),!1)},
$id:1}
W.aI.prototype={$iaI:1}
W.fe.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aI]},
$au:function(){return[W.aI]},
$ie:1,
$ae:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$ay:function(){return[W.aI]}}
W.ff.prototype={
gk:function(a){return a.length}}
W.fj.prototype={
gk:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.fm.prototype={
gk:function(a){return a.length}}
W.bF.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.F]},
$au:function(){return[W.F]},
$ie:1,
$ae:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$ibF:1,
$ay:function(){return[W.F]}}
W.bl.prototype={$ibl:1,
gd9:function(a){return a.data}}
W.c6.prototype={$ic6:1}
W.aN.prototype={$iaN:1}
W.fx.prototype={
i:function(a){return String(a)}}
W.fI.prototype={
gk:function(a){return a.length}}
W.fJ.prototype={
j:function(a,b){return P.bb(a.get(H.S(b)))},
M:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bb(t.value[1]))}},
gas:function(a){var u=H.c([],[P.o])
this.M(a,new W.fK(u))
return u},
gk:function(a){return a.size},
$aa8:function(){return[P.o,null]},
$iM:1,
$aM:function(){return[P.o,null]}}
W.fK.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.fL.prototype={
j:function(a,b){return P.bb(a.get(H.S(b)))},
M:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bb(t.value[1]))}},
gas:function(a){var u=H.c([],[P.o])
this.M(a,new W.fM(u))
return u},
gk:function(a){return a.size},
$aa8:function(){return[P.o,null]},
$iM:1,
$aM:function(){return[P.o,null]}}
W.fM.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aQ.prototype={$iaQ:1}
W.fN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aQ]},
$au:function(){return[W.aQ]},
$ie:1,
$ae:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$ay:function(){return[W.aQ]}}
W.a6.prototype={$ia6:1}
W.ig.prototype={
gS:function(a){var u=this.a.childNodes
return new W.d2(u,u.length,[H.cK(C.K,u,"y",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
$au:function(){return[W.F]},
$ae:function(){return[W.F]},
$ab:function(){return[W.F]}}
W.F.prototype={
ir:function(a,b){var u,t
try{u=a.parentNode
J.kW(u,b,a)}catch(t){H.bc(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.e3(a):u},
fV:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.cd.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.F]},
$au:function(){return[W.F]},
$ie:1,
$ae:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$ay:function(){return[W.F]}}
W.aS.prototype={$iaS:1,
gk:function(a){return a.length}}
W.h_.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aS]},
$au:function(){return[W.aS]},
$ie:1,
$ae:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$ay:function(){return[W.aS]}}
W.h7.prototype={
j:function(a,b){return P.bb(a.get(H.S(b)))},
M:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bb(t.value[1]))}},
gas:function(a){var u=H.c([],[P.o])
this.M(a,new W.h8(u))
return u},
gk:function(a){return a.size},
$aa8:function(){return[P.o,null]},
$iM:1,
$aM:function(){return[P.o,null]}}
W.h8.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.ha.prototype={
gk:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.hi.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aT]},
$au:function(){return[W.aT]},
$ie:1,
$ae:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$ay:function(){return[W.aT]}}
W.aU.prototype={$iaU:1}
W.hj.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aU]},
$au:function(){return[W.aU]},
$ie:1,
$ae:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$ay:function(){return[W.aU]}}
W.aV.prototype={$iaV:1,
gk:function(a){return a.length}}
W.hn.prototype={
j:function(a,b){return a.getItem(H.S(b))},
M:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,P.o]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gas:function(a){var u=H.c([],[P.o])
this.M(a,new W.ho(u))
return u},
gk:function(a){return a.length},
$aa8:function(){return[P.o,P.o]},
$iM:1,
$aM:function(){return[P.o,P.o]}}
W.ho.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:37}
W.az.prototype={$iaz:1}
W.aW.prototype={$iaW:1}
W.aA.prototype={$iaA:1}
W.hv.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aA]},
$au:function(){return[W.aA]},
$ie:1,
$ae:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$ay:function(){return[W.aA]}}
W.hw.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aW]},
$au:function(){return[W.aW]},
$ie:1,
$ae:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$ay:function(){return[W.aW]}}
W.hC.prototype={
gk:function(a){return a.length}}
W.aY.prototype={$iaY:1}
W.aB.prototype={$iaB:1}
W.hF.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aY]},
$au:function(){return[W.aY]},
$ie:1,
$ae:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$ay:function(){return[W.aY]}}
W.hG.prototype={
gk:function(a){return a.length}}
W.bt.prototype={}
W.hW.prototype={
i:function(a){return String(a)}}
W.i7.prototype={
gk:function(a){return a.length}}
W.b0.prototype={
ghY:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ap("deltaY is not supported"))},
ghX:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ap("deltaX is not supported"))},
$ib0:1}
W.cu.prototype={
fW:function(a,b){return a.requestAnimationFrame(H.bN(H.m(b,{func:1,ret:-1,args:[P.a5]}),1))},
eD:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ii.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.O]},
$au:function(){return[W.O]},
$ie:1,
$ae:function(){return[W.O]},
$ib:1,
$ab:function(){return[W.O]},
$ay:function(){return[W.O]}}
W.dU.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iaj)return!1
return a.left===u.gbl(b)&&a.top===u.gbp(b)&&a.width===u.gav(b)&&a.height===u.gar(b)},
gE:function(a){return W.kg(C.f.gE(a.left),C.f.gE(a.top),C.f.gE(a.width),C.f.gE(a.height))},
gar:function(a){return a.height},
gav:function(a){return a.width}}
W.iw.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aJ]},
$au:function(){return[W.aJ]},
$ie:1,
$ae:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$ay:function(){return[W.aJ]}}
W.ea.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.F]},
$au:function(){return[W.F]},
$ie:1,
$ae:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$ay:function(){return[W.F]}}
W.iH.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aV]},
$au:function(){return[W.aV]},
$ie:1,
$ae:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$ay:function(){return[W.aV]}}
W.iI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.az]},
$au:function(){return[W.az]},
$ie:1,
$ae:function(){return[W.az]},
$ib:1,
$ab:function(){return[W.az]},
$ay:function(){return[W.az]}}
W.ij.prototype={}
W.jl.prototype={}
W.ik.prototype={}
W.il.prototype={
$1:function(a){return this.a.$1(H.n(a,"$ij"))},
$S:24}
W.y.prototype={
gS:function(a){return new W.d2(a,this.gk(a),[H.cK(this,a,"y",0)])}}
W.d2.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scM(J.kV(u.a,t))
u.c=t
return!0}u.scM(null)
u.c=s
return!1},
gH:function(a){return this.d},
scM:function(a){this.d=H.D(a,H.w(this,0))},
$iaK:1}
W.dT.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.cB.prototype={}
W.cC.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.en.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.cD.prototype={}
W.cE.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
P.ex.prototype={$ibl:1,
gd9:function(a){return this.a}}
P.iS.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.fg.prototype={
gby:function(){var u=this.b,t=H.aw(u,"u",0),s=W.a_
return new H.fB(new H.i8(u,H.m(new P.fh(),{func:1,ret:P.a3,args:[t]}),[t]),H.m(new P.fi(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.bU(this.gby().a)},
j:function(a,b){var u=this.gby()
return u.b.$1(J.jE(u.a,b))},
gS:function(a){var u=P.jR(this.gby(),!1,W.a_)
return new J.ah(u,u.length,[H.w(u,0)])},
$au:function(){return[W.a_]},
$ae:function(){return[W.a_]},
$ab:function(){return[W.a_]}}
P.fh.prototype={
$1:function(a){return!!J.W(H.n(a,"$iF")).$ia_},
$S:25}
P.fi.prototype={
$1:function(a){return H.f(H.n(a,"$iF"),"$ia_")},
$S:26}
P.iB.prototype={
gbo:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.C(t)
return H.D(u+t,H.w(this,0))},
gd4:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.C(t)
return H.D(u+t,H.w(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.k(u.a)+", "+H.k(u.b)+") "+H.k(u.c)+" x "+H.k(u.d)},
q:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.W(b)
if(!!u.$iaj){t=p.a
if(t==u.gbl(b)){s=p.b
if(s==u.gbp(b)){r=p.c
if(typeof t!=="number")return t.D()
if(typeof r!=="number")return H.C(r)
q=H.w(p,0)
if(H.D(t+r,q)===u.gbo(b)){t=p.d
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.C(t)
u=H.D(s+t,q)===u.gd4(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gE:function(a){var u,t=this,s=t.a,r=J.by(s),q=t.b,p=J.by(q),o=t.c
if(typeof s!=="number")return s.D()
if(typeof o!=="number")return H.C(o)
u=H.w(t,0)
o=C.i.gE(H.D(s+o,u))
s=t.d
if(typeof q!=="number")return q.D()
if(typeof s!=="number")return H.C(s)
u=C.i.gE(H.D(q+s,u))
return P.lH(P.iy(P.iy(P.iy(P.iy(0,r),p),o),u))}}
P.aj.prototype={
gbl:function(a){return this.a},
gbp:function(a){return this.b},
gav:function(a){return this.c},
gar:function(a){return this.d}}
P.b2.prototype={$ib2:1}
P.ft.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.b2]},
$ie:1,
$ae:function(){return[P.b2]},
$ib:1,
$ab:function(){return[P.b2]},
$ay:function(){return[P.b2]}}
P.b7.prototype={$ib7:1}
P.fW.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.b7]},
$ie:1,
$ae:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$ay:function(){return[P.b7]}}
P.h1.prototype={
gk:function(a){return a.length}}
P.ht.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$ay:function(){return[P.o]}}
P.p.prototype={
gd6:function(a){return new P.fg(a,new W.ig(a))}}
P.ba.prototype={$iba:1}
P.hH.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.ba]},
$ie:1,
$ae:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$ay:function(){return[P.ba]}}
P.e3.prototype={}
P.e4.prototype={}
P.ed.prototype={}
P.ee.prototype={}
P.eo.prototype={}
P.ep.prototype={}
P.ev.prototype={}
P.ew.prototype={}
P.eP.prototype={
gk:function(a){return a.length}}
P.eQ.prototype={
j:function(a,b){return P.bb(a.get(H.S(b)))},
M:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bb(t.value[1]))}},
gas:function(a){var u=H.c([],[P.o])
this.M(a,new P.eR(u))
return u},
gk:function(a){return a.size},
$aa8:function(){return[P.o,null]},
$iM:1,
$aM:function(){return[P.o,null]}}
P.eR.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.eS.prototype={
gk:function(a){return a.length}}
P.bz.prototype={}
P.fX.prototype={
gk:function(a){return a.length}}
P.dS.prototype={}
P.cP.prototype={$icP:1}
P.dn.prototype={$idn:1}
P.bK.prototype={
dR:function(a,b,c,d,e,f,g){var u,t=J.W(g)
if(!!t.$ibl)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.lZ(g))
return}if(!!t.$ic6)t=!0
else t=!1
if(t){this.hd(a,b,c,d,e,f,g)
return}throw H.h(P.l_("Incorrect number or type of arguments"))},
hd:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
F:function(a,b,c){return a.uniform1f(b,c)},
W:function(a,b,c){return a.uniform1i(b,c)},
p:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dV:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dW:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibK:1}
P.dq.prototype={$idq:1}
P.dw.prototype={$idw:1}
P.dG.prototype={$idG:1}
P.hk.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return P.bb(a.item(b))},
C:function(a,b){return this.j(a,b)},
$au:function(){return[[P.M,,,]]},
$ie:1,
$ae:function(){return[[P.M,,,]]},
$ib:1,
$ab:function(){return[[P.M,,,]]},
$ay:function(){return[[P.M,,,]]}}
P.ek.prototype={}
P.el.prototype={}
O.X.prototype={
aY:function(a){var u=this
u.seP(H.c([],[a]))
u.scS(null)
u.scO(null)
u.scT(null)},
ck:function(a,b,c){var u=this,t=H.aw(u,"X",0)
H.m(b,{func:1,ret:P.a3,args:[[P.e,t]]})
t={func:1,ret:-1,args:[P.A,[P.e,t]]}
H.m(a,t)
H.m(c,t)
u.scS(b)
u.scO(a)
u.scT(c)},
aG:function(a,b){return this.ck(a,null,b)},
cR:function(a){var u
H.l(a,"$ie",[H.aw(this,"X",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cr:function(a,b){var u
H.l(b,"$ie",[H.aw(this,"X",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.ah(u,u.length,[H.w(u,0)])},
C:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aw(s,"X",0)
H.D(b,r)
r=[r]
if(H.x(s.cR(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cr(t,H.c([b],r))}},
bO:function(a,b){var u,t,s=this
H.l(b,"$ie",[H.aw(s,"X",0)],"$ae")
if(H.x(s.cR(b))){u=s.a
t=u.length
C.a.bO(u,b)
s.cr(t,b)}},
seP:function(a){this.a=H.l(a,"$ib",[H.aw(this,"X",0)],"$ab")},
scS:function(a){this.b=H.m(a,{func:1,ret:P.a3,args:[[P.e,H.aw(this,"X",0)]]})},
scO:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.A,[P.e,H.aw(this,"X",0)]]})},
scT:function(a){H.m(a,{func:1,ret:-1,args:[P.A,[P.e,H.aw(this,"X",0)]]})},
$ie:1}
O.c9.prototype={
gk:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.I():u},
ax:function(){var u=this.b
if(u!=null)u.B(null)},
gV:function(a){var u=this.a
if(u.length>0)return C.a.gc7(u)
else return V.bG()},
bn:function(a){var u=this.a
if(a==null)C.a.h(u,V.bG())
else C.a.h(u,a)
this.ax()},
at:function(){var u=this.a
if(u.length>0){u.pop()
this.ax()}},
sbz:function(a){this.a=H.l(a,"$ib",[V.ai],"$ab")}}
E.eT.prototype={}
E.ae.prototype={
sbr:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().O(0,s.gdM())
u=s.c
if(u!=null)u.gm().h(0,s.gdM())
t=new D.K("shape",r,s.c,[F.dr])
t.b=!0
s.bm(t)}},
a9:function(a,b){var u
for(u=this.y.a,u=new J.ah(u,u.length,[H.w(u,0)]);u.u();)u.d.a9(0,b)},
a4:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.gV(s))
s.ax()
a.cf(t.f)
s=a.dy
u=(s&&C.a).gc7(s)
if(u!=null&&t.d!=null)u.dO(a,t)
for(s=t.y.a,s=new J.ah(s,s.length,[H.w(s,0)]);s.u();)s.d.a4(a)
a.ce()
a.dx.at()},
gm:function(){var u=this.z
return u==null?this.z=D.I():u},
bm:function(a){var u=this.z
if(u!=null)u.B(a)},
a0:function(){return this.bm(null)},
dN:function(a){H.n(a,"$iv")
this.e=null
this.bm(a)},
ig:function(){return this.dN(null)},
dL:function(a){this.bm(H.n(a,"$iv"))},
ib:function(){return this.dL(null)},
ia:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ie",[E.ae],"$ae")
for(u=b.length,t=this.gdK(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c2()
o.sag(null)
o.sb0(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sag(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a0()},
ie:function(a,b){var u,t
H.l(b,"$ie",[E.ae],"$ae")
for(u=b.gS(b),t=this.gdK();u.u();)u.gH(u).gm().O(0,t)
this.a0()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sec:function(a,b){this.y=H.l(b,"$iX",[E.ae],"$aX")},
$iaR:1}
E.h3.prototype={
e9:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.as(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c9()
t=[V.ai]
u.sbz(H.c([],t))
u.b=null
u.gm().h(0,new E.h4(s))
s.cy=u
u=new O.c9()
u.sbz(H.c([],t))
u.b=null
u.gm().h(0,new E.h5(s))
s.db=u
u=new O.c9()
u.sbz(H.c([],t))
u.b=null
u.gm().h(0,new E.h6(s))
s.dx=u
s.shc(H.c([],[O.bs]))
u=s.dy;(u&&C.a).h(u,null)
s.sh7(new H.aM([P.o,A.cg]))},
gip:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gV(s)
u=t.db
u=t.z=s.n(0,u.gV(u))
s=u}return s},
cf:function(a){var u=this.dy,t=a==null?(u&&C.a).gc7(u):a;(u&&C.a).h(u,t)},
ce:function(){var u=this.dy
if(u.length>1)u.pop()},
d2:function(a){var u=a.b
if(u.length===0)throw H.h(P.r("May not cache a shader with no name."))
if(this.fr.d8(0,u))throw H.h(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.Z(0,u,a)},
shc:function(a){this.dy=H.l(a,"$ib",[O.bs],"$ab")},
sh7:function(a){this.fr=H.l(a,"$iM",[P.o,A.cg],"$aM")}}
E.h4.prototype={
$1:function(a){var u
H.n(a,"$iv")
u=this.a
u.ch=u.z=null},
$S:8}
E.h5.prototype={
$1:function(a){var u
H.n(a,"$iv")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:8}
E.h6.prototype={
$1:function(a){var u
H.n(a,"$iv")
u=this.a
u.cx=u.ch=null},
$S:8}
E.dC.prototype={
cu:function(a){H.n(a,"$iv")
this.dP()},
ct:function(){return this.cu(null)},
gi0:function(){var u,t=this,s=Date.now(),r=C.i.a_(P.jN(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.as(s,!1)
return u/r},
cW:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.n()
if(typeof r!=="number")return H.C(r)
u=C.f.c4(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.n()
t=C.f.c4(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.k7(C.n,s.gis())}},
dP:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.hB(this),{func:1,ret:-1,args:[P.a5]})
C.w.eD(u)
C.w.fW(u,W.kn(t,P.a5))}},
iq:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cW()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.as(r,!1)
s.y=P.jN(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.ax()
r=s.db
C.a.sk(r.a,0)
r.ax()
r=s.dx
C.a.sk(r.a,0)
r.ax()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.a4(p.e)}}catch(q){u=H.bc(q)
t=H.bP(q)
P.jB("Error: "+H.k(u))
P.jB("Stack: "+H.k(t))
throw H.h(u)}}}
E.hB.prototype={
$1:function(a){var u
H.me(a)
u=this.a
if(u.ch){u.ch=!1
u.iq()}},
$S:29}
Z.dP.prototype={$imn:1}
Z.cQ.prototype={
Y:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bc(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.k(u))
throw H.h(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.k(u.e)+"]"}}
Z.dQ.prototype={$imo:1}
Z.bX.prototype={
aq:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
Y:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].Y(a)},
aX:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a4:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.i(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.o],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ar(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.v(p,", ")+"\nAttrs:   "+C.a.v(r,", ")},
seL:function(a){this.b=H.l(a,"$ib",[Z.bm],"$ab")},
$imv:1}
Z.bm.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bI(this.c)+"'")+"]"}}
Z.b_.prototype={
gcl:function(a){var u=this.a,t=(u&$.aD().a)!==0?3:0
if((u&$.bf().a)!==0)t+=3
if((u&$.be().a)!==0)t+=3
if((u&$.bg().a)!==0)t+=2
if((u&$.bh().a)!==0)t+=3
if((u&$.cL().a)!==0)t+=3
if((u&$.cM().a)!==0)t+=4
if((u&$.bS().a)!==0)++t
return(u&$.bd().a)!==0?t+4:t},
hQ:function(a){var u,t=$.aD(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bf()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.be()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bh()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bS()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bd()
if((s&t.a)!==0)if(u===a)return t
return $.kT()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b_))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.o]),t=this.a
if((t&$.aD().a)!==0)C.a.h(u,"Pos")
if((t&$.bf().a)!==0)C.a.h(u,"Norm")
if((t&$.be().a)!==0)C.a.h(u,"Binm")
if((t&$.bg().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bh().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cL().a)!==0)C.a.h(u,"Clr3")
if((t&$.cM().a)!==0)C.a.h(u,"Clr4")
if((t&$.bS().a)!==0)C.a.h(u,"Weight")
if((t&$.bd().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.v(u,"|")}}
D.eW.prototype={}
D.c2.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.m(b,u)
if(this.a==null)this.sag(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
O:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[D.v]})
u=s.a
u=u==null?null:C.a.ap(u,b)
if(u===!0){u=s.a
t=(u&&C.a).O(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ap(u,b)
if(u===!0){u=s.b
t=(u&&C.a).O(u,b)||t}return t},
B:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.M(P.jR(u,!0,{func:1,ret:-1,args:[D.v]}),new D.fc(q))
u=r.b
if(u!=null){r.sb0(H.c([],[{func:1,ret:-1,args:[D.v]}]))
C.a.M(u,new D.fd(q))}return!0},
dg:function(){return this.B(null)},
au:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}},
sag:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")},
sb0:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")}}
D.fc.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.fd.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.v.prototype={}
D.bn.prototype={}
D.bo.prototype={}
D.K.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
X.cR.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cR))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.d8.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d8))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.fs.prototype={
il:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ih:function(a){this.c=a.b
this.d.O(0,a.a)
return!1},
sfR:function(a){this.d=H.l(a,"$ik4",[P.A],"$ak4")}}
X.dc.prototype={}
X.fy.prototype={
aK:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.n()
u=b.b
t=q.ch
if(typeof u!=="number")return u.n()
s=new V.a1(o.a+n*m,o.b+u*t)
t=q.a.gaD()
r=new X.b5(a,V.b8(),q.x,t,s)
r.b=!0
q.z=new P.as(p,!1)
q.x=s
return r},
cd:function(a,b){this.r=a.a
return!1},
aQ:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e_()
if(typeof u!=="number")return u.dX()
this.r=(u&~t)>>>0
return!1},
aP:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aK(a,b))
return!0},
im:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaD()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.n()
q=a.b
p=o.cy
if(typeof q!=="number")return q.n()
t=new X.ca(new V.P(s*r,q*p),u,t)
t.b=!0
n.B(t)
return!0},
fm:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dc(c,r.a.gaD(),b)
s.b=!0
t.B(s)
r.y=new P.as(u,!1)
r.x=V.b8()}}
X.an.prototype={
q:function(a,b){var u=this
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
X.b5.prototype={}
X.fO.prototype={
bw:function(a,b,c){var u=this,t=new P.as(Date.now(),!1),s=u.a.gaD(),r=new X.b5(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cd:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bw(a,b,!0))
return!0},
aQ:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e_()
if(typeof t!=="number")return t.dX()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.bw(a,b,!0))
return!0},
aP:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bw(a,b,!1))
return!0},
io:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaD()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.n()
r=a.b
q=p.ch
if(typeof r!=="number")return r.n()
u=new X.ca(new V.P(t*s,r*q),u,b)
u.b=!0
o.B(u)
return!0},
gdc:function(){var u=this.b
return u==null?this.b=D.I():u},
gbq:function(){var u=this.c
return u==null?this.c=D.I():u},
gdJ:function(){var u=this.d
return u==null?this.d=D.I():u}}
X.ca.prototype={}
X.h0.prototype={}
X.dE.prototype={}
X.hE.prototype={
aK:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.a1],"$ab")
u=new P.as(Date.now(),!1)
t=a.length>0?a[0]:V.b8()
s=q.a.gaD()
r=new X.dE(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
ik:function(a){var u
H.l(a,"$ib",[V.a1],"$ab")
u=this.b
if(u==null)return!1
u.B(this.aK(a,!0))
return!0},
ii:function(a){var u
H.l(a,"$ib",[V.a1],"$ab")
u=this.c
if(u==null)return!1
u.B(this.aK(a,!0))
return!0},
ij:function(a){var u
H.l(a,"$ib",[V.a1],"$ab")
u=this.d
if(u==null)return!1
u.B(this.aK(a,!1))
return!0}}
X.dK.prototype={
gaD:function(){var u=this.a,t=C.l.gd7(u).c
t.toString
u=C.l.gd7(u).d
u.toString
return V.k2(0,0,t,u)},
cI:function(a){var u=a.keyCode,t=H.x(a.ctrlKey)||H.x(a.metaKey)
return new X.d8(u,new X.an(t,a.altKey,a.shiftKey))},
aC:function(a){var u=this.b,t=H.x(a.ctrlKey)||H.x(a.metaKey)
u.c=new X.an(t,a.altKey,a.shiftKey)},
bN:function(a){var u=this.b,t=H.x(a.ctrlKey)||H.x(a.metaKey)
u.c=new X.an(t,a.altKey,a.shiftKey)},
an:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.G()
u=t.top
if(typeof r!=="number")return r.G()
return new V.a1(s-q,r-u)},
aL:function(a){return new V.P(a.movementX,a.movementY)},
bK:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a1])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
q=C.f.ad(r.pageX)
C.f.ad(r.pageY)
p=o.left
C.f.ad(r.pageX)
C.a.h(n,new V.a1(q-p,C.f.ad(r.pageY)-o.top))}return n},
aj:function(a){var u=a.buttons,t=H.x(a.ctrlKey)||H.x(a.metaKey)
return new X.cR(u,new X.an(t,a.altKey,a.shiftKey))},
bA:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.G()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.G()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fg:function(a){this.f=!0},
f4:function(a){this.f=!1},
fa:function(a){H.n(a,"$ia6")
if(H.x(this.f)&&this.bA(a))a.preventDefault()},
fk:function(a){var u
H.n(a,"$iaN")
if(!H.x(this.f))return
u=this.cI(a)
this.b.il(u)},
fi:function(a){var u
H.n(a,"$iaN")
if(!H.x(this.f))return
u=this.cI(a)
this.b.ih(u)},
fo:function(a){var u,t,s,r,q=this
H.n(a,"$ia6")
u=q.a
u.focus()
q.f=!0
q.aC(a)
if(H.x(q.x)){t=q.aj(a)
s=q.aL(a)
if(q.d.cd(t,s))a.preventDefault()
return}if(H.x(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aj(a)
r=q.an(a)
if(q.c.cd(t,r))a.preventDefault()},
ft:function(a){var u,t,s,r=this
H.n(a,"$ia6")
r.aC(a)
u=r.aj(a)
if(H.x(r.x)){t=r.aL(a)
if(r.d.aQ(u,t))a.preventDefault()
return}if(H.x(r.r))return
s=r.an(a)
if(r.c.aQ(u,s))a.preventDefault()},
fe:function(a){var u,t,s,r=this
H.n(a,"$ia6")
if(!r.bA(a)){r.aC(a)
u=r.aj(a)
if(H.x(r.x)){t=r.aL(a)
if(r.d.aQ(u,t))a.preventDefault()
return}if(H.x(r.r))return
s=r.an(a)
if(r.c.aQ(u,s))a.preventDefault()}},
fq:function(a){var u,t,s,r=this
H.n(a,"$ia6")
r.aC(a)
u=r.aj(a)
if(H.x(r.x)){t=r.aL(a)
if(r.d.aP(u,t))a.preventDefault()
return}if(H.x(r.r))return
s=r.an(a)
if(r.c.aP(u,s))a.preventDefault()},
fc:function(a){var u,t,s,r=this
H.n(a,"$ia6")
if(!r.bA(a)){r.aC(a)
u=r.aj(a)
if(H.x(r.x)){t=r.aL(a)
if(r.d.aP(u,t))a.preventDefault()
return}if(H.x(r.r))return
s=r.an(a)
if(r.c.aP(u,s))a.preventDefault()}},
fv:function(a){var u,t,s=this
H.n(a,"$ib0")
s.aC(a)
u=new V.P((a&&C.v).ghX(a),C.v.ghY(a)).t(0,180)
if(H.x(s.x)){if(s.d.im(u))a.preventDefault()
return}if(H.x(s.r))return
t=s.an(a)
if(s.c.io(u,t))a.preventDefault()},
fz:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aj(s.y)
t=s.an(s.y)
s.d.fm(u,t,r)}},
fP:function(a){var u,t=this
H.n(a,"$iaB")
t.a.focus()
t.f=!0
t.bN(a)
u=t.bK(a)
if(t.e.ik(u))a.preventDefault()},
fL:function(a){var u
H.n(a,"$iaB")
this.bN(a)
u=this.bK(a)
if(this.e.ii(u))a.preventDefault()},
fN:function(a){var u
H.n(a,"$iaB")
this.bN(a)
u=this.bK(a)
if(this.e.ij(u))a.preventDefault()},
seE:function(a){this.z=H.l(a,"$ib",[[P.ci,P.N]],"$ab")}}
D.cX.prototype={$iY:1,$iaR:1}
D.Y.prototype={$iaR:1}
D.d9.prototype={
gm:function(){var u=this.Q
return u==null?this.Q=D.I():u},
cv:function(a){var u=this.Q
if(u!=null)u.B(a)},
cQ:function(a){var u=this.ch
if(u!=null)u.B(a)},
fl:function(){return this.cQ(null)},
fB:function(a){var u,t,s
H.l(a,"$ie",[D.Y],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.B)(a),++t){s=a[t]
if(s==null||this.ey(s))return!1}return!0},
eZ:function(a,b){var u,t,s,r,q=D.Y
H.l(b,"$ie",[q],"$ae")
for(u=b.length,t=this.gcP(),s=0;s<b.length;b.length===u||(0,H.B)(b),++s){r=H.n(b[s],"$iY")
r.gm().h(0,t)}q=new D.bn([q])
q.b=!0
this.cv(q)},
fF:function(a,b){var u,t,s,r=D.Y
H.l(b,"$ie",[r],"$ae")
for(u=b.gS(b),t=this.gcP();u.u();){s=u.gH(u)
C.a.O(this.e,s)
s.gm().O(0,t)}r=new D.bo([r])
r.b=!0
this.cv(r)},
ey:function(a){var u=C.a.ap(this.e,a)
return u},
seC:function(a){this.e=H.l(a,"$ib",[D.cX],"$ab")},
sfQ:function(a){this.f=H.l(a,"$ib",[D.dm],"$ab")},
sh9:function(a){this.r=H.l(a,"$ib",[D.du],"$ab")},
shm:function(a){this.x=H.l(a,"$ib",[D.dz],"$ab")},
shn:function(a){this.y=H.l(a,"$ib",[D.dA],"$ab")},
sho:function(a){this.z=H.l(a,"$ib",[D.dB],"$ab")},
$ae:function(){return[D.Y]},
$aX:function(){return[D.Y]}}
D.dm.prototype={$iY:1,$iaR:1}
D.du.prototype={$iY:1,$iaR:1}
D.dz.prototype={$iY:1,$iaR:1}
D.dA.prototype={$iY:1,$iaR:1}
D.dB.prototype={$iY:1,$iaR:1}
V.a7.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
V.ax.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ax))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+", "+V.R(u.d,3,0)+"]"}}
V.fb.prototype={}
V.dg.prototype={
a5:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.z])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dg))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.z],o=V.bO(H.c([q.a,q.d,q.r],p),3,0),n=V.bO(H.c([q.b,q.e,q.x],p),3,0),m=V.bO(H.c([q.c,q.f,q.y],p),3,0)
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
V.ai.prototype={
a5:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.z])
return t},
c6:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.L().a)return V.bG()
u=1/b1
t=-n
s=-a0
return V.aP((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
n:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aP(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
dU:function(a){var u=this
return new V.Q(C.f.n(u.a,a.gdd(a))+C.f.n(u.b,a.gde(a))+C.f.n(u.c,a.gdf()),C.f.n(u.e,a.gdd(a))+C.f.n(u.f,a.gde(a))+C.f.n(u.r,a.gdf()),C.f.n(u.y,a.gdd(a))+C.f.n(u.z,a.gde(a))+C.f.n(u.Q,a.gdf()))},
aW:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.af(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ai))return!1
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
if(!(Math.abs(b.z-s.z)<t))return!1
if(!(Math.abs(b.Q-s.Q)<t))return!1
if(!(Math.abs(b.ch-s.ch)<t))return!1
if(!(Math.abs(b.cx-s.cx)<t))return!1
if(!(Math.abs(b.cy-s.cy)<t))return!1
if(!(Math.abs(b.db-s.db)<t))return!1
if(!(Math.abs(b.dx-s.dx)<t))return!1
return!0},
i:function(a){return this.I()},
w:function(a){var u,t,s,r,q,p=this,o=[P.z],n=V.bO(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bO(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bO(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bO(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
I:function(){return this.w("")}}
V.a1.prototype={
G:function(a,b){return new V.a1(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}}
V.af.prototype={
G:function(a,b){return new V.af(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
V.b9.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b9))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+", "+V.R(u.d,3,0)+"]"}}
V.dp.prototype={
ga3:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dp))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+", "+V.R(u.d,3,0)+"]"}}
V.P.prototype={
c8:function(a){return Math.sqrt(this.A(this))},
A:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.C(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.C(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.n()
u=this.b
if(typeof u!=="number")return u.n()
return new V.P(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.L().a){u=$.kb
return u==null?$.kb=new V.P(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.P(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=this.a
s=$.L()
s.toString
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.C(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.C(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}}
V.Q.prototype={
c8:function(a){return Math.sqrt(this.A(this))},
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c9:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.Q(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aO:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.Q(u*t-s*r,s*q-p*t,p*r-u*q)},
D:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.Q(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.L().a)return V.dO()
return new V.Q(this.a/b,this.b/b,this.c/b)},
dH:function(){var u=$.L().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
U.eX.prototype={
bs:function(a){var u=V.mm(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.I():u},
K:function(a){var u=this.y
if(u!=null)u.B(a)},
sci:function(a,b){},
sca:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.L().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bs(u)}s=new D.K("maximumLocation",s,t.b,[P.z])
s.b=!0
t.K(s)}},
scc:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.L().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bs(u)}s=new D.K("minimumLocation",s,t.c,[P.z])
s.b=!0
t.K(s)}},
sa2:function(a,b){var u,t=this
b=t.bs(b)
u=t.d
if(!(Math.abs(u-b)<$.L().a)){t.d=b
u=new D.K("location",u,b,[P.z])
u.b=!0
t.K(u)}},
scb:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.L().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.K("maximumVelocity",r,a,[P.z])
r.b=!0
s.K(r)}},
sN:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.L().a)){u.f=a
t=new D.K("velocity",t,a,[P.z])
t.b=!0
u.K(t)}},
sbY:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.L().a)){this.x=a
u=new D.K("dampening",u,a,[P.z])
u.b=!0
this.K(u)}},
a9:function(a,b){var u,t,s,r=this,q=r.f,p=$.L().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa2(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.L().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sN(u)}}}
U.cT.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.I():u},
aF:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cT))return!1
return J.a4(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")}}
U.c5.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.I():u},
K:function(a){var u
H.n(a,"$iv")
u=this.e
if(u!=null)u.B(a)},
a1:function(){return this.K(null)},
eX:function(a,b){var u,t,s,r,q,p,o,n=U.a9
H.l(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gaB(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.m(t,s)
if(o.a==null)o.sag(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bn([n])
n.b=!0
this.K(n)},
fD:function(a,b){var u,t,s=U.a9
H.l(b,"$ie",[s],"$ae")
for(u=b.gS(b),t=this.gaB();u.u();)u.gH(u).gm().O(0,t)
s=new D.bo([s])
s.b=!0
this.K(s)},
aF:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.aw()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ah(r,r.length,[H.w(r,0)]),u=null;r.u();){q=r.d
if(q!=null){t=q.aF(0,b,c)
if(t!=null)u=u==null?t:t.n(0,u)}}s.f=u==null?V.bG():u
r=s.e
if(r!=null)r.au(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c5))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.i(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.i(r,t)
if(!J.a4(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.a9]},
$aX:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.dL.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.I():u},
K:function(a){var u
H.n(a,"$iv")
u=this.cy
if(u!=null)u.B(a)},
a1:function(){return this.K(null)},
aM:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdc().h(0,u.gbB())
u.a.c.gdJ().h(0,u.gbD())
u.a.c.gbq().h(0,u.gbF())
return!0},
bC:function(a){var u=this
H.n(a,"$iv")
if(!J.a4(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bE:function(a){var u,t,s,r,q,p,o,n=this
a=H.f(H.n(a,"$iv"),"$ib5")
if(!H.x(n.y))return
if(H.x(n.x)){u=a.d.G(0,a.y)
u=new V.P(u.a,u.b)
u=u.A(u)
t=n.r
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.x=!1}if(H.x(n.d)){u=a.c
t=a.d.G(0,a.y)
u=new V.P(t.a,t.b).n(0,2).t(0,u.ga3())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.n()
s=n.e
if(typeof s!=="number")return H.C(s)
t.sN(u*10*s)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=new V.P(s.a,s.b).n(0,2).t(0,u.ga3())
s=n.b
q=r.a
if(typeof q!=="number")return q.L()
p=n.e
if(typeof p!=="number")return H.C(p)
o=n.z
if(typeof o!=="number")return H.C(o)
s.sa2(0,-q*p+o)
n.b.sN(0)
t=t.G(0,a.z)
n.Q=new V.P(t.a,t.b).n(0,2).t(0,u.ga3())}n.a1()},
bG:function(a){var u,t,s,r=this
H.n(a,"$iv")
if(!H.x(r.y))return
r.y=!1
if(H.x(r.x))return
u=r.Q
if(u.A(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.n()
s=r.e
if(typeof s!=="number")return H.C(s)
u.sN(t*10*s)
r.a1()}},
aF:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.aw()
if(q<p){r.ch=p
u=b.y
r.b.a9(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aP(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia9:1}
U.dM.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.I():u},
K:function(a){var u
H.n(a,"$iv")
u=this.fx
if(u!=null)u.B(a)},
a1:function(){return this.K(null)},
aM:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdc().h(0,s.gbB())
s.a.c.gdJ().h(0,s.gbD())
s.a.c.gbq().h(0,s.gbF())
u=s.a.d
t=u.f
u=t==null?u.f=D.I():t
u.h(0,s.geQ())
u=s.a.d
t=u.d
u=t==null?u.d=D.I():t
u.h(0,s.geS())
u=s.a.e
t=u.b
u=t==null?u.b=D.I():t
u.h(0,s.ghj())
u=s.a.e
t=u.d
u=t==null?u.d=D.I():t
u.h(0,s.ghh())
u=s.a.e
t=u.c
u=t==null?u.c=D.I():t
u.h(0,s.ghf())
return!0},
af:function(a){var u=a.a,t=a.b
if(H.x(this.f)){if(typeof u!=="number")return u.L()
u=-u}if(H.x(this.r)){if(typeof t!=="number")return t.L()
t=-t}return new V.P(u,t)},
bC:function(a){var u=this
a=H.f(H.n(a,"$iv"),"$ib5")
if(!J.a4(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bE:function(a){var u,t,s,r,q,p,o,n=this
a=H.f(H.n(a,"$iv"),"$ib5")
if(!H.x(n.cx))return
if(H.x(n.ch)){u=a.d.G(0,a.y)
u=new V.P(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.x(n.e)){u=a.c
t=a.d.G(0,a.y)
u=n.af(new V.P(t.a,t.b).n(0,2).t(0,u.ga3()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sN(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sN(-u*10*t)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=n.af(new V.P(s.a,s.b).n(0,2).t(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa2(0,-p*q+s)
n.b.sN(0)
n.c.sN(0)
t=t.G(0,a.z)
n.dx=n.af(new V.P(t.a,t.b).n(0,2).t(0,u.ga3()))}n.a1()},
bG:function(a){var u,t,s,r=this
H.n(a,"$iv")
if(!H.x(r.cx))return
r.cx=!1
if(H.x(r.ch))return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sN(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sN(-t*10*u)
r.a1()}},
eR:function(a){var u=this
if(H.f(H.n(a,"$iv"),"$idc").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eT:function(a){var u,t,s,r,q,p,o,n=this
a=H.f(H.n(a,"$iv"),"$ib5")
if(!J.a4(n.d,a.x.b))return
u=a.c
t=a.d
s=t.G(0,a.y)
r=n.af(new V.P(s.a,s.b).n(0,2).t(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa2(0,-p*q+s)
n.b.sN(0)
n.c.sN(0)
t=t.G(0,a.z)
n.dx=n.af(new V.P(t.a,t.b).n(0,2).t(0,u.ga3()))
n.a1()},
hk:function(a){var u=this
H.n(a,"$iv")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hi:function(a){var u,t,s,r,q,p,o,n=this
a=H.f(H.n(a,"$iv"),"$idE")
if(!H.x(n.cx))return
if(H.x(n.ch)){u=a.d.G(0,a.y)
u=new V.P(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.x(n.e)){u=a.c
t=a.d.G(0,a.y)
u=n.af(new V.P(t.a,t.b).n(0,2).t(0,u.ga3()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sN(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sN(-u*10*t)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=n.af(new V.P(s.a,s.b).n(0,2).t(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa2(0,-p*q+s)
n.b.sN(0)
n.c.sN(0)
t=t.G(0,a.z)
n.dx=n.af(new V.P(t.a,t.b).n(0,2).t(0,u.ga3()))}n.a1()},
hg:function(a){var u,t,s,r=this
H.n(a,"$iv")
if(!H.x(r.cx))return
r.cx=!1
if(H.x(r.ch))return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sN(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sN(-t*10*u)
r.a1()}},
aF:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.aw()
if(q<p){r.dy=p
u=b.y
r.c.a9(0,u)
r.b.a9(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aP(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.n(0,V.aP(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia9:1}
U.dN.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.I():u},
K:function(a){var u=this.r
if(u!=null)u.B(a)},
aM:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.I():t
t=r.geU()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.I():s).h(0,t)
return!0},
eV:function(a){var u,t,s,r,q=this
H.n(a,"$iv")
if(!J.a4(q.b,q.a.b.c))return
H.f(a,"$ica")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.n()
r=u+t*s
if(u!==r){q.d=r
u=new D.K("zoom",u,r,[P.z])
u.b=!0
q.K(u)}},
aF:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aP(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia9:1}
M.cS.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.I():u},
U:function(a){var u
H.n(a,"$iv")
u=this.r
if(u!=null)u.B(a)},
aH:function(){return this.U(null)},
fH:function(a,b){var u,t,s,r,q,p,o,n=M.ao
H.l(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gT(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.m(t,s)
if(o.a==null)o.sag(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bn([n])
n.b=!0
this.U(n)},
fJ:function(a,b){var u,t,s=M.ao
H.l(b,"$ie",[s],"$ae")
for(u=b.gS(b),t=this.gT();u.u();)u.gH(u).gm().O(0,t)
s=new D.bo([s])
s.b=!0
this.U(s)},
a4:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.ah(u,u.length,[H.w(u,0)]);u.u();){t=u.d
if(t!=null)t.a4(a)}s.f=!1},
$ae:function(){return[M.ao]},
$aX:function(){return[M.ao]},
$iao:1}
M.cV.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.I():u},
U:function(a){var u
H.n(a,"$iv")
u=this.r
if(u!=null)u.B(a)},
aH:function(){return this.U(null)},
saN:function(a){var u,t,s=this
if(a==null)a=new X.fn()
u=s.b
if(u!==a){if(u!=null)u.gm().O(0,s.gT())
t=s.b
s.b=a
a.gm().h(0,s.gT())
u=new D.K("camera",t,s.b,[X.bA])
u.b=!0
s.U(u)}},
saS:function(a,b){var u,t,s=this
if(b==null)b=X.j9(null)
u=s.c
if(u!==b){if(u!=null)u.gm().O(0,s.gT())
t=s.c
s.c=b
b.gm().h(0,s.gT())
u=new D.K("target",t,s.c,[X.cj])
u.b=!0
s.U(u)}},
saT:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().O(0,t.gT())
u=t.d
t.d=a
if(a!=null)a.gm().h(0,t.gT())
s=new D.K("technique",u,t.d,[O.bs])
s.b=!0
t.U(s)}},
a4:function(a){var u=this
a.cf(u.d)
u.c.Y(a)
u.b.Y(a)
u.e.a9(0,a)
u.e.a4(a)
u.b.aX(a)
u.c.toString
a.ce()},
$iao:1}
M.d0.prototype={
U:function(a){var u
H.n(a,"$iv")
u=this.y
if(u!=null)u.B(a)},
aH:function(){return this.U(null)},
f6:function(a,b){var u,t,s,r,q,p,o,n=E.ae
H.l(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gT(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c2()
o.sag(null)
o.sb0(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sag(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bn([n])
n.b=!0
this.U(n)},
f8:function(a,b){var u,t,s=E.ae
H.l(b,"$ie",[s],"$ae")
for(u=b.gS(b),t=this.gT();u.u();)u.gH(u).gm().O(0,t)
s=new D.bo([s])
s.b=!0
this.U(s)},
saN:function(a){var u,t,s=this
if(a==null)a=X.jW(null)
u=s.b
if(u!==a){if(u!=null)u.gm().O(0,s.gT())
t=s.b
s.b=a
a.gm().h(0,s.gT())
u=new D.K("camera",t,s.b,[X.bA])
u.b=!0
s.U(u)}},
saS:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().O(0,t.gT())
u=t.c
t.c=b
b.gm().h(0,t.gT())
s=new D.K("target",u,t.c,[X.cj])
s.b=!0
t.U(s)}},
saT:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().O(0,t.gT())
u=t.d
t.d=a
if(a!=null)a.gm().h(0,t.gT())
s=new D.K("technique",u,t.d,[O.bs])
s.b=!0
t.U(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.I():u},
a4:function(a){var u,t=this
a.cf(t.d)
t.c.Y(a)
t.b.Y(a)
u=t.d
if(u!=null)u.a9(0,a)
for(u=t.e.a,u=new J.ah(u,u.length,[H.w(u,0)]);u.u();)u.d.a9(0,a)
for(u=t.e.a,u=new J.ah(u,u.length,[H.w(u,0)]);u.u();)u.d.a4(a)
t.b.toString
a.cy.at()
a.db.at()
t.c.toString
a.ce()},
sex:function(a,b){this.e=H.l(b,"$iX",[E.ae],"$aX")},
$iao:1}
M.ao.prototype={}
A.cN.prototype={}
A.eO.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hZ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
da:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.df.prototype={
e8:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.br("")
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
d1.hs(u)
d1.hz(u)
d1.ht(u)
d1.hH(u)
d1.hI(u)
d1.hB(u)
d1.hM(u)
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
u=new P.br("")
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
q.hw(u)
q.hr(u)
q.hu(u)
q.hx(u)
q.hF(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.hD(u)
q.hE(u)}q.hA(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=q.y
if(l!==C.c){m=u.a=m+"uniform float alpha;\n"
if(l!==C.h){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.d){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.e){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.c:m=u.a=m+"   return 1.0;\n"
break
case C.h:m=u.a=m+"   return alpha;\n"
break
case C.d:m+=c7
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c8
u.a=m
m=u.a=m+"   return a;\n"
break
case C.e:m+=c7
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
q.hv(u)
q.hC(u)
q.hG(u)
q.hJ(u)
q.hK(u)
q.hL(u)
q.hy(u)}m=u.a+="// === Main ===\n"
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
a6.dG(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
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
if(d1.x2)a6.k1=H.f(a6.y.l(0,"txt2DMat"),"$ico")
if(d1.y1)a6.k2=H.f(a6.y.l(0,"txtCubeMat"),"$ial")
if(d1.y2)a6.k3=H.f(a6.y.l(0,"colorMat"),"$ial")
a6.ser(H.c([],[A.al]))
t=d1.ai
if(t>0){a6.k4=H.n(a6.y.l(0,"bendMatCount"),"$iH")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.t(P.r(a7+q+a8));(s&&C.a).h(s,H.f(g,"$ial"))}}t=d1.a
if(t!==C.c){a6.r2=H.f(a6.y.l(0,"emissionClr"),"$iG")
switch(t){case C.c:break
case C.h:break
case C.d:a6.rx=H.f(a6.y.l(0,a9),"$iag")
a6.x1=H.f(a6.y.l(0,b0),"$iH")
break
case C.e:a6.ry=H.f(a6.y.l(0,a9),"$iab")
a6.x1=H.f(a6.y.l(0,b0),"$iH")
break}}t=d1.b
if(t!==C.c){a6.x2=H.f(a6.y.l(0,"ambientClr"),"$iG")
switch(t){case C.c:break
case C.h:break
case C.d:a6.y1=H.f(a6.y.l(0,b1),"$iag")
a6.ai=H.f(a6.y.l(0,b2),"$iH")
break
case C.e:a6.y2=H.f(a6.y.l(0,b1),"$iab")
a6.ai=H.f(a6.y.l(0,b2),"$iH")
break}}t=d1.c
if(t!==C.c){a6.ac=H.f(a6.y.l(0,"diffuseClr"),"$iG")
switch(t){case C.c:break
case C.h:break
case C.d:a6.b6=H.f(a6.y.l(0,b3),"$iag")
a6.b7=H.f(a6.y.l(0,b4),"$iH")
break
case C.e:a6.dh=H.f(a6.y.l(0,b3),"$iab")
a6.b7=H.f(a6.y.l(0,b4),"$iH")
break}}t=d1.d
if(t!==C.c){a6.b8=H.f(a6.y.l(0,"invDiffuseClr"),"$iG")
switch(t){case C.c:break
case C.h:break
case C.d:a6.di=H.f(a6.y.l(0,b5),"$iag")
a6.b9=H.f(a6.y.l(0,b6),"$iH")
break
case C.e:a6.dj=H.f(a6.y.l(0,b5),"$iab")
a6.b9=H.f(a6.y.l(0,b6),"$iH")
break}}t=d1.e
if(t!==C.c){a6.bc=H.f(a6.y.l(0,"shininess"),"$iU")
a6.ba=H.f(a6.y.l(0,"specularClr"),"$iG")
switch(t){case C.c:break
case C.h:break
case C.d:a6.dk=H.f(a6.y.l(0,b7),"$iag")
a6.bb=H.f(a6.y.l(0,b8),"$iH")
break
case C.e:a6.dl=H.f(a6.y.l(0,b7),"$iab")
a6.bb=H.f(a6.y.l(0,b8),"$iH")
break}}switch(d1.f){case C.c:break
case C.h:break
case C.d:a6.dm=H.f(a6.y.l(0,"bumpTxt"),"$iag")
a6.bd=H.f(a6.y.l(0,b9),"$iH")
break
case C.e:a6.dn=H.f(a6.y.l(0,"bumpTxt"),"$iab")
a6.bd=H.f(a6.y.l(0,b9),"$iH")
break}if(d1.dy){a6.dq=H.f(a6.y.l(0,"envSampler"),"$iab")
a6.dr=H.f(a6.y.l(0,"nullEnvTxt"),"$iH")
t=d1.r
if(t!==C.c){a6.be=H.f(a6.y.l(0,"reflectClr"),"$iG")
switch(t){case C.c:break
case C.h:break
case C.d:a6.ds=H.f(a6.y.l(0,c0),"$iag")
a6.bf=H.f(a6.y.l(0,c1),"$iH")
break
case C.e:a6.dt=H.f(a6.y.l(0,c0),"$iab")
a6.bf=H.f(a6.y.l(0,c1),"$iH")
break}}t=d1.x
if(t!==C.c){a6.bg=H.f(a6.y.l(0,"refraction"),"$iU")
a6.bh=H.f(a6.y.l(0,"refractClr"),"$iG")
switch(t){case C.c:break
case C.h:break
case C.d:a6.du=H.f(a6.y.l(0,c2),"$iag")
a6.bi=H.f(a6.y.l(0,c3),"$iH")
break
case C.e:a6.dv=H.f(a6.y.l(0,c2),"$iab")
a6.bi=H.f(a6.y.l(0,c3),"$iH")
break}}}t=d1.y
if(t!==C.c){a6.bj=H.f(a6.y.l(0,"alpha"),"$iU")
switch(t){case C.c:break
case C.h:break
case C.d:a6.dw=H.f(a6.y.l(0,c4),"$iag")
a6.bk=H.f(a6.y.l(0,c5),"$iH")
break
case C.e:a6.dz=H.f(a6.y.l(0,c4),"$iab")
a6.bk=H.f(a6.y.l(0,c5),"$iH")
break}}a6.sed(H.c([],[A.cn]))
a6.see(H.c([],[A.cp]))
a6.sef(H.c([],[A.cq]))
a6.seg(H.c([],[A.cr]))
a6.seh(H.c([],[A.cs]))
a6.sei(H.c([],[A.ct]))
if(d1.k2){t=d1.z
if(t>0){a6.dA=H.n(a6.y.l(0,"dirLightCount"),"$iH")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.f(g,"$iG")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.f(f,"$iG")
s=a6.bZ;(s&&C.a).h(s,new A.cn(g,f))}}t=d1.Q
if(t>0){a6.dB=H.n(a6.y.l(0,"pntLightCount"),"$iH")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.f(g,"$iG")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.f(f,"$iG")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.f(e,"$iG")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.f(d,"$iU")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.f(c,"$iU")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.f(b,"$iU")
s=a6.c_;(s&&C.a).h(s,new A.cp(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.dC=H.n(a6.y.l(0,"spotLightCount"),"$iH")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.f(g,"$iG")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.f(f,"$iG")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.f(e,"$iG")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.f(d,"$iG")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.f(c,"$iU")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.f(b,"$iU")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.r(a7+r+a8))
H.f(a,"$iU")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.r(a7+r+a8))
H.f(a0,"$iU")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.r(a7+r+a8))
H.f(a1,"$iU")
s=a6.c0;(s&&C.a).h(s,new A.cq(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.dD=H.n(a6.y.l(0,"txtDirLightCount"),"$iH")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.f(g,"$iG")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.f(f,"$iG")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.f(e,"$iG")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.f(d,"$iG")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.f(c,"$iG")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.f(b,"$iH")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.t(P.r(a7+r+a8))
H.f(a,"$iag")
s=a6.c1;(s&&C.a).h(s,new A.cr(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.dE=H.n(a6.y.l(0,"txtPntLightCount"),"$iH")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.f(g,"$iG")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.f(f,"$iG")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.f(e,"$ico")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.f(d,"$iG")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.f(c,"$iH")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.f(b,"$iU")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.t(P.r(a7+r+a8))
H.f(a,"$iU")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.t(P.r(a7+r+a8))
H.f(a0,"$iU")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.t(P.r(a7+r+a8))
H.f(a1,"$iab")
s=a6.c2;(s&&C.a).h(s,new A.cs(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.dF=H.n(a6.y.l(0,"txtSpotLightCount"),"$iH")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.f(g,"$iG")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.f(f,"$iG")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.f(e,"$iG")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.f(d,"$iG")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.f(c,"$iG")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.f(b,"$iH")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.t(P.r(a7+r+a8))
H.f(a,"$iG")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.t(P.r(a7+r+a8))
H.f(a0,"$iU")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.r(a7+r+a8))
H.f(a1,"$iU")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.t(P.r(a7+r+a8))
H.f(a2,"$iU")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.t(P.r(a7+r+a8))
H.f(a3,"$iU")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.t(P.r(a7+r+a8))
H.f(a4,"$iU")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.t(P.r(a7+r+a8))
H.f(a5,"$iag")
s=a6.c3;(s&&C.a).h(s,new A.ct(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ab:function(a,b,c){if(c==null||!c.d)C.b.W(b.a,b.d,1)
else{a.e0(c)
C.b.W(b.a,b.d,0)}},
a6:function(a,b,c){C.b.W(b.a,b.d,1)},
ser:function(a){this.r1=H.l(a,"$ib",[A.al],"$ab")},
sed:function(a){this.bZ=H.l(a,"$ib",[A.cn],"$ab")},
see:function(a){this.c_=H.l(a,"$ib",[A.cp],"$ab")},
sef:function(a){this.c0=H.l(a,"$ib",[A.cq],"$ab")},
seg:function(a){this.c1=H.l(a,"$ib",[A.cr],"$ab")},
seh:function(a){this.c2=H.l(a,"$ib",[A.cs],"$ab")},
sei:function(a){this.c3=H.l(a,"$ib",[A.ct],"$ab")}}
A.fF.prototype={
hs:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.ai+"];\n"
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
hz:function(a){var u
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
ht:function(a){var u
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
hH:function(a){var u,t
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
hI:function(a){var u,t
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
hB:function(a){var u
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
hM:function(a){var u
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
ak:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.i(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.j.cm(c,1))+"Txt;\n")
if(b===C.d)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
hw:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.c)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.ak(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   return emissionClr;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
hr:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.c)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.ak(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   return ambientClr;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
hu:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.c)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.ak(a,s,"diffuse")
u=a.a+="vec3 diffuseColor;\n"
u+="\n"
a.a=u
u+="void setDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   diffuseColor = diffuseClr;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
break
case C.e:s=u+t
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
hx:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.c)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.ak(a,s,"invDiffuse")
u=a.a+="vec3 invDiffuseColor;\n"
u+="\n"
a.a=u
u+="void setInvDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   invDiffuseColor = invDiffuseClr;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
break
case C.e:s=u+t
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
hF:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.c)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.ak(a,s,"specular")
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
case C.h:s=a.a=u+"   specularColor = specularClr;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
break
case C.e:s=u+t
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
hA:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.c:break
case C.h:break
case C.d:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break
case C.e:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break}u+="vec3 normal()\n"
a.a=u
u=a.a=u+"{\n"
switch(t){case C.c:u=a.a=u+r
break
case C.h:u=a.a=u+r
break
case C.d:u+=q
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
case C.e:u+=q
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
hD:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.c)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.ak(a,s,"reflect")
u=a.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   vec3 scalar = reflectClr;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
break
case C.e:s=u+t
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
hE:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.c)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.ak(a,s,"refract")
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
case C.h:s=a.a=u+"   vec3 scalar = refractClr;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
break
case C.e:s=u+t
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
hv:function(a){var u,t=this.z
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
hC:function(a){var u,t=this.Q
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
hG:function(a){var u,t=this.ch
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
hJ:function(a){var u,t,s=this.cx
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
hK:function(a){var u,t,s=this.cy
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
hL:function(a){var u,t,s=this.db
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
hy:function(a){var u
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
i:function(a){return this.ac}}
A.cn.prototype={}
A.cr.prototype={}
A.cp.prototype={}
A.cs.prototype={}
A.cq.prototype={}
A.ct.prototype={}
A.cg.prototype={
cq:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dG:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cJ(b,35633)
r.f=r.cJ(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.x(H.kr(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.r("Failed to link shader: "+H.k(s)))}r.h4()
r.h6()},
Y:function(a){a.a.useProgram(this.r)
this.x.hZ()},
cJ:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.x(H.kr(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.h(P.r("Error compiling shader '"+H.k(s)+"': "+H.k(u)))}return s},
h4:function(){var u,t,s,r=this,q=H.c([],[A.cN]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cN(p,t.name,s))}r.x=new A.eO(q)},
h6:function(){var u,t,s,r=this,q=H.c([],[A.dF]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hW(t.type,t.size,t.name,s))}r.y=new A.hR(q)},
az:function(a,b,c){var u=this.a
if(a===1)return new A.H(u,b,c)
else return A.jj(u,this.r,b,a,c)},
ez:function(a,b,c){var u=this.a
if(a===1)return new A.ag(u,b,c)
else return A.jj(u,this.r,b,a,c)},
eA:function(a,b,c){var u=this.a
if(a===1)return new A.ab(u,b,c)
else return A.jj(u,this.r,b,a,c)},
b3:function(a,b){return new P.dZ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
hW:function(a,b,c,d){var u=this
switch(a){case 5120:return u.az(b,c,d)
case 5121:return u.az(b,c,d)
case 5122:return u.az(b,c,d)
case 5123:return u.az(b,c,d)
case 5124:return u.az(b,c,d)
case 5125:return u.az(b,c,d)
case 5126:return new A.U(u.a,c,d)
case 35664:return new A.hM(u.a,c,d)
case 35665:return new A.G(u.a,c,d)
case 35666:return new A.hP(u.a,c,d)
case 35667:return new A.hN(u.a,c,d)
case 35668:return new A.hO(u.a,c,d)
case 35669:return new A.hQ(u.a,c,d)
case 35674:return new A.hS(u.a,c,d)
case 35675:return new A.co(u.a,c,d)
case 35676:return new A.al(u.a,c,d)
case 35678:return u.ez(b,c,d)
case 35680:return u.eA(b,c,d)
case 35670:throw H.h(u.b3("BOOL",c))
case 35671:throw H.h(u.b3("BOOL_VEC2",c))
case 35672:throw H.h(u.b3("BOOL_VEC3",c))
case 35673:throw H.h(u.b3("BOOL_VEC4",c))
default:throw H.h(P.r("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}}
A.bC.prototype={
i:function(a){return this.b}}
A.dt.prototype={}
A.dF.prototype={}
A.hR.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
l:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.I()},
I:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.H.prototype={
i:function(a){return"Uniform1i: "+H.k(this.c)}}
A.hN.prototype={
i:function(a){return"Uniform2i: "+H.k(this.c)}}
A.hO.prototype={
i:function(a){return"Uniform3i: "+H.k(this.c)}}
A.hQ.prototype={
i:function(a){return"Uniform4i: "+H.k(this.c)}}
A.hL.prototype={
i:function(a){return"Uniform1iv: "+H.k(this.c)},
shp:function(a){H.l(a,"$ib",[P.A],"$ab")}}
A.U.prototype={
i:function(a){return"Uniform1f: "+H.k(this.c)}}
A.hM.prototype={
i:function(a){return"Uniform2f: "+H.k(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.k(this.c)}}
A.hP.prototype={
i:function(a){return"Uniform4f: "+H.k(this.c)}}
A.hS.prototype={
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}}
A.co.prototype={
aa:function(a){var u=new Float32Array(H.cG(H.l(a,"$ib",[P.z],"$ab")))
C.b.dV(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.k(this.c)}}
A.al.prototype={
aa:function(a){var u=new Float32Array(H.cG(H.l(a,"$ib",[P.z],"$ab")))
C.b.dW(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.k(this.c)}}
A.ag.prototype={
e0:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.k(this.c)}}
A.ab.prototype={
e1:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}
F.iN.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c9(s.b,b).c9(s.d.c9(s.c,b),c)
s=new V.af(r.a,r.b,r.c)
if(!J.a4(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a0()}a.siw(r.t(0,Math.sqrt(r.A(r))))
s=1-b
u=1-c
u=new V.b9(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.a4(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a0()}},
$S:34}
F.a0.prototype={
eq:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dO()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dH())return
return s.t(0,Math.sqrt(s.A(s)))},
ew:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.G(0,q)
r=new V.Q(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.A(r)))
r=t.G(0,q)
r=new V.Q(r.a,r.b,r.c)
r=s.aO(r.t(0,Math.sqrt(r.A(r))))
return r.t(0,Math.sqrt(r.A(r)))},
bV:function(){var u,t=this
if(t.d!=null)return!0
u=t.eq()
if(u==null){u=t.ew()
if(u==null)return!1}t.d=u
t.a.a.a0()
return!0},
ep:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dO()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dH())return
return s.t(0,Math.sqrt(s.A(s)))},
ev:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.L().a){l=d.G(0,g)
l=new V.Q(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.A(l)))
if(s.a-t.a<0)q=q.L(0)}else{p=(l-u.b)/r
l=d.G(0,g)
l=new V.af(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).G(0,j)
l=new V.Q(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.A(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.L(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.A(l)))
l=o.aO(q)
l=l.t(0,Math.sqrt(l.A(l))).aO(o)
q=l.t(0,Math.sqrt(l.A(l)))}return q},
bT:function(){var u,t=this
if(t.e!=null)return!0
u=t.ep()
if(u==null){u=t.ev()
if(u==null)return!1}t.e=u
t.a.a.a0()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
w:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.j.a8(J.ar(s.e),0)+", "+C.j.a8(J.ar(t.b.e),0)+", "+C.j.a8(J.ar(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
I:function(){return this.w("")}}
F.b3.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
w:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.j.a8(J.ar(u.e),0)+", "+C.j.a8(J.ar(this.b.e),0)},
I:function(){return this.w("")}}
F.bq.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
w:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.a8(J.ar(u.e),0)},
I:function(){return this.w("")}}
F.dr.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.I():u},
i8:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.X()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.B)(g),++s){r=g[s]
h.a.h(0,r.hV())}h.a.X()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.B)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.i(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bq()
if(n.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.B(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.B)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.i(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.X()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.i(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.le(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.B)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.i(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.X()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.i(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.X()
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
F.c3(l,k,i)}g=h.e
if(g!=null)g.au(0)},
ao:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ao()||!1
if(!t.a.ao())u=!1
s=t.e
if(s!=null)s.au(0)
return u},
d5:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aD()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bf().a)!==0)++s
if((t&$.be().a)!==0)++s
if((t&$.bg().a)!==0)++s
if((t&$.bh().a)!==0)++s
if((t&$.cL().a)!==0)++s
if((t&$.cM().a)!==0)++s
if((t&$.bS().a)!==0)++s
if((t&$.bd().a)!==0)++s
r=a3.gcl(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.z
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cQ])
for(n=0,m=0;m<s;++m){l=a3.hQ(m)
k=l.gcl(l)
C.a.Z(o,m,new Z.cQ(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.i(u,j)
i=u[j].i5(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.Z(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cG(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bX(new Z.dP(a0,f),o,a3)
e.seL(H.c([],[Z.bm]))
if(a.b.b.length!==0){t=P.A
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.X()
C.a.h(d,c.e)}b=Z.jk(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bm(0,d.length,b))}if(a.c.b.length!==0){t=P.A
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.X()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.i(c,m)
c=c[m].b
c.a.a.X()
C.a.h(d,c.e)}b=Z.jk(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bm(1,d.length,b))}if(a.d.b.length!==0){t=P.A
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.X()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.i(c,m)
c=c[m].b
c.a.a.X()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.i(c,m)
c=c[m].c
c.a.a.X()
C.a.h(d,c.e)}b=Z.jk(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bm(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.o])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.w(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.w(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.w(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.w(t))}return C.a.v(s,"\n")},
a0:function(){var u=this.e
if(u!=null)u.B(null)},
$imu:1}
F.hc.prototype={
hO:function(a){var u,t,s,r,q,p
H.l(a,"$ib",[F.aq],"$ab")
u=H.c([],[F.a0])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.c3(t,q,p))}return u},
hP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.aq],"$ab")
u=H.c([],[F.a0])
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
C.a.h(u,F.c3(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c3(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c3(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.c3(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
ao:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].bV())s=!1
return s},
bU:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].bT())s=!1
return s},
i:function(a){return this.I()},
w:function(a){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].w(a))
return C.a.v(r,"\n")},
I:function(){return this.w("")},
seF:function(a){this.b=H.l(a,"$ib",[F.a0],"$ab")}}
F.hd.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.I()},
w:function(a){var u,t,s=H.c([],[P.o]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.i(t,u)
C.a.h(s,t[u].w(a+(""+u+". ")))}return C.a.v(s,"\n")},
I:function(){return this.w("")},
seM:function(a){this.b=H.l(a,"$ib",[F.b3],"$ab")}}
F.he.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.I()},
w:function(a){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].w(a))
return C.a.v(r,"\n")},
I:function(){return this.w("")},
sbJ:function(a){this.b=H.l(a,"$ib",[F.bq],"$ab")}}
F.aq.prototype={
bX:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.hZ(u.cx,r,o,t,s,q,p,a,n)},
hV:function(){return this.bX(null)},
siw:function(a){var u
if(!J.a4(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a0()}},
i5:function(a){var u,t,s=this
if(a.q(0,$.aD())){u=s.f
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bf())){u=s.r
t=[P.z]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.be())){u=s.x
t=[P.z]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bg())){u=s.y
t=[P.z]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.q(0,$.bh())){u=s.z
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.cL())){u=s.Q
t=[P.z]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.cM())){u=s.Q
t=[P.z]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bS()))return H.c([s.ch],[P.z])
else if(a.q(0,$.bd())){u=s.cx
t=[P.z]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.z])},
bV:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dO()
t.d.M(0,new F.i6(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.au(0)}return!0},
bT:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dO()
t.d.M(0,new F.i5(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.au(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
w:function(a){var u,t,s=this,r="-",q=H.c([],[P.o])
C.a.h(q,C.j.a8(J.ar(s.e),0))
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
I:function(){return this.w("")}}
F.i6.prototype={
$1:function(a){var u,t
H.n(a,"$ia0")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:5}
F.i5.prototype={
$1:function(a){var u,t
H.n(a,"$ia0")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:5}
F.i_.prototype={
X:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.h(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a0()
return!0},
b4:function(a,b,c,d,e,f){var u=F.hZ(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
ao:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].bV()
return!0},
bU:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].bT()
return!0},
hS:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a4(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
i:function(a){return this.I()},
w:function(a){var u,t,s,r
this.X()
u=H.c([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].w(a))
return C.a.v(u,"\n")},
I:function(){return this.w("")},
shq:function(a){this.c=H.l(a,"$ib",[F.aq],"$ab")}}
F.i0.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
M:function(a,b){var u=this
H.m(b,{func:1,ret:-1,args:[F.a0]})
C.a.M(u.b,b)
C.a.M(u.c,new F.i1(u,b))
C.a.M(u.d,new F.i2(u,b))},
i:function(a){return this.I()},
I:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].w(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].w(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].w(""))
return C.a.v(r,"\n")},
seG:function(a){this.b=H.l(a,"$ib",[F.a0],"$ab")},
seH:function(a){this.c=H.l(a,"$ib",[F.a0],"$ab")},
seI:function(a){this.d=H.l(a,"$ib",[F.a0],"$ab")}}
F.i1.prototype={
$1:function(a){H.n(a,"$ia0")
if(!J.a4(a.a,this.a))this.b.$1(a)},
$S:5}
F.i2.prototype={
$1:function(a){var u
H.n(a,"$ia0")
u=this.a
if(!J.a4(a.a,u)&&!J.a4(a.b,u))this.b.$1(a)},
$S:5}
F.i3.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.I()},
I:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].w(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].w(""))
return C.a.v(r,"\n")},
seN:function(a){this.b=H.l(a,"$ib",[F.b3],"$ab")},
seO:function(a){this.c=H.l(a,"$ib",[F.b3],"$ab")}}
F.i4.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.I()},
I:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].w(""))
return C.a.v(r,"\n")},
sbJ:function(a){this.b=H.l(a,"$ib",[F.bq],"$ab")}}
O.de.prototype={
gm:function(){var u=this.dy
return u==null?this.dy=D.I():u},
P:function(a){var u
H.n(a,"$iv")
u=this.dy
if(u!=null)u.B(a)},
aI:function(){return this.P(null)},
cV:function(a){H.n(a,"$iv")
this.a=null
this.P(a)},
fY:function(){return this.cV(null)},
f0:function(a,b){var u=V.ai
H.l(b,"$ie",[u],"$ae")
u=new D.bn([u])
u.b=!0
this.P(u)},
f2:function(a,b){var u=V.ai
H.l(b,"$ie",[u],"$ae")
u=new D.bo([u])
u.b=!0
this.P(u)},
cG:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.i.a_(a1.e.length+3,4)*4,a3=C.i.a_(a1.f.length+3,4)*4,a4=C.i.a_(a1.r.length+3,4)*4,a5=C.i.a_(a1.x.length+3,4)*4,a6=C.i.a_(a1.y.length+3,4)*4,a7=C.i.a_(a1.z.length+3,4)*4,a8=C.i.a_(a0.e.a.length+3,4)*4
a1=a0.f.c
u=a0.r.c
t=a0.x.c
s=a0.y.c
r=a0.z.c
q=a0.Q.c
p=a0.cx.c
o=a0.cy.c
n=a0.db.c
m="MaterialLight_"+C.i.i(a1.a)+C.i.i(u.a)+C.i.i(t.a)+C.i.i(s.a)+C.i.i(r.a)+C.i.i(q.a)+C.i.i(p.a)+C.i.i(o.a)+C.i.i(n.a)
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
f=a1===C.d||u===C.d||t===C.d||s===C.d||r===C.d||q===C.d||p===C.d||o===C.d||n===C.d
e=a1===C.e||u===C.e||t===C.e||s===C.e||r===C.e||q===C.e||p===C.e||o===C.e||n===C.e
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.aD()
if(h){j=$.bf()
a=new Z.b_(a.a|j.a)}if(g){j=$.be()
a=new Z.b_(a.a|j.a)}if(f){j=$.bg()
a=new Z.b_(a.a|j.a)}if(e){j=$.bh()
a=new Z.b_(a.a|j.a)}if(c){j=$.bd()
a=new Z.b_(a.a|j.a)}return new A.fF(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
R:function(a,b){H.l(a,"$ib",[T.ck],"$ab")
if(b!=null)if(!C.a.ap(a,b)){b.a=a.length
C.a.h(a,b)}},
a9:function(a,b){var u
for(u=this.dx.a,u=new J.ah(u,u.length,[H.w(u,0)]);u.u();)C.m.a9(u.d,b)},
dO:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.cG()
u=H.n(a3.fr.j(0,a2.ac),"$idf")
if(u==null){u=A.lj(a2,a3.a)
a3.d2(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.b6
a2=a4.e
if(!(a2 instanceof Z.bX))a2=a4.e=null
if(a2==null||!a2.d.q(0,s)){a2=t.r1
if(a2)a4.d.ao()
r=t.r2
if(r){q=a4.d
p=q.e
if(p!=null)++p.d
q.d.bU()
q.a.bU()
q=q.e
if(q!=null)q.au(0)}q=t.ry
if(q){p=a4.d
o=p.e
if(o!=null)++o.d
p.a.hS()
p=p.e
if(p!=null)p.au(0)}n=a4.d.d5(new Z.dQ(a3.a),s)
n.aq($.aD()).e=a1.a.Q.c
if(a2)n.aq($.bf()).e=a1.a.cx.c
if(r)n.aq($.be()).e=a1.a.ch.c
if(t.rx)n.aq($.bg()).e=a1.a.cy.c
if(q)n.aq($.bh()).e=a1.a.db.c
if(t.x1)n.aq($.bd()).e=a1.a.dx.c
a4.e=n}a2=T.ck
m=H.c([],[a2])
a1.a.Y(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.gV(q)
r=r.dy
r.toString
r.aa(q.a5(0,!0))}if(t.fy){r=a1.a
q=a3.cx
if(q==null){q=a3.db
q=q.gV(q)
p=a3.dx
p=a3.cx=q.n(0,p.gV(p))
q=p}r=r.fr
r.toString
r.aa(q.a5(0,!0))}r=a1.a
q=a3.ch
if(q==null){q=a3.gip()
p=a3.dx
p=a3.ch=q.n(0,p.gV(p))
q=p}r=r.fy
r.toString
r.aa(q.a5(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.aa(C.m.a5(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.aa(C.m.a5(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.aa(C.m.a5(q,!0))}if(t.ai>0){l=a1.e.a.length
r=a1.a.k4
C.b.W(r.a,r.d,l)
for(r=[P.z],k=0;k<l;++k){q=a1.a
p=a1.e.a
if(k>=p.length)return H.i(p,k)
p=p[k]
q.toString
H.n(p,"$iai")
q=q.r1
if(k>=q.length)return H.i(q,k)
q=q[k]
j=new Float32Array(H.cG(H.l(p.a5(0,!0),"$ib",r,"$ab")))
C.b.dW(q.a,q.d,!1,j)}}switch(t.a){case C.c:break
case C.h:r=a1.a
q=a1.f.f
r=r.r2
r.toString
p=q.a
o=q.b
q=q.c
C.b.p(r.a,r.d,p,o,q)
break
case C.d:a1.R(m,a1.f.d)
r=a1.a
q=a1.f.d
r.ab(r.rx,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
break
case C.e:a1.R(m,a1.f.e)
r=a1.a
q=a1.f.e
r.a6(r.ry,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
break}if(t.k2){switch(t.b){case C.c:break
case C.h:r=a1.a
q=a1.r.f
r=r.x2
r.toString
p=q.a
o=q.b
q=q.c
C.b.p(r.a,r.d,p,o,q)
break
case C.d:a1.R(m,a1.r.d)
r=a1.a
q=a1.r.d
r.ab(r.y1,r.ai,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
break
case C.e:a1.R(m,a1.r.e)
r=a1.a
q=a1.r.e
r.a6(r.y2,r.ai,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
break}switch(t.c){case C.c:break
case C.h:r=a1.a
q=a1.x.f
r=r.ac
r.toString
p=q.a
o=q.b
q=q.c
C.b.p(r.a,r.d,p,o,q)
break
case C.d:a1.R(m,a1.x.d)
r=a1.a
q=a1.x.d
r.ab(r.b6,r.b7,q)
q=a1.a
r=a1.x.f
q=q.ac
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
break
case C.e:a1.R(m,a1.x.e)
r=a1.a
q=a1.x.e
r.a6(r.dh,r.b7,q)
q=a1.a
r=a1.x.f
q=q.ac
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
break}switch(t.d){case C.c:break
case C.h:r=a1.a
q=a1.y.f
r=r.b8
r.toString
p=q.a
o=q.b
q=q.c
C.b.p(r.a,r.d,p,o,q)
break
case C.d:a1.R(m,a1.y.d)
r=a1.a
q=a1.y.d
r.ab(r.di,r.b9,q)
q=a1.a
r=a1.y.f
q=q.b8
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
break
case C.e:a1.R(m,a1.y.e)
r=a1.a
q=a1.y.e
r.a6(r.dj,r.b9,q)
q=a1.a
r=a1.y.f
q=q.b8
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
break}switch(t.e){case C.c:break
case C.h:r=a1.a
q=a1.z.f
r=r.ba
r.toString
p=q.a
o=q.b
q=q.c
C.b.p(r.a,r.d,p,o,q)
q=a1.a
o=a1.z.ch
q=q.bc
C.b.F(q.a,q.d,o)
break
case C.d:a1.R(m,a1.z.d)
r=a1.a
q=a1.z.d
r.ab(r.dk,r.bb,q)
q=a1.a
r=a1.z.f
q=q.ba
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bc
C.b.F(r.a,r.d,o)
break
case C.e:a1.R(m,a1.z.e)
r=a1.a
q=a1.z.e
r.a6(r.dl,r.bb,q)
q=a1.a
r=a1.z.f
q=q.ba
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bc
C.b.F(r.a,r.d,o)
break}if(t.z>0){l=a1.dx.e.length
r=a1.a.dA
C.b.W(r.a,r.d,l)
r=a3.db
i=r.gV(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
p=a1.a.bZ
if(h>=p.length)return H.i(p,h)
e=p[h]
p=i.dU(f.gb5(f))
o=p.a
d=p.b
c=p.c
c=p.t(0,Math.sqrt(o*o+d*d+c*c))
d=e.b
o=c.a
p=c.b
c=c.c
C.b.p(d.a,d.d,o,p,c)
c=f.gah(f)
p=e.c
C.b.p(p.a,p.d,c.a,c.b,c.c);++h}}if(t.Q>0){l=a1.dx.f.length
r=a1.a.dB
C.b.W(r.a,r.d,l)
r=a3.db
i=r.gV(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
p=a1.a.c_
if(h>=p.length)return H.i(p,h)
e=p[h]
p=f.gaR(f)
o=e.b
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=i.aW(f.gaR(f))
o=e.c
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.gah(f)
o=e.d
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.gbP()
o=e.e
C.b.F(o.a,o.d,p)
p=f.gbQ()
o=e.f
C.b.F(o.a,o.d,p)
p=f.gbR()
o=e.r
C.b.F(o.a,o.d,p);++h}}if(t.ch>0){l=a1.dx.r.length
r=a1.a.dC
C.b.W(r.a,r.d,l)
r=a3.db
i=r.gV(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
p=a1.a.c0
if(h>=p.length)return H.i(p,h)
e=p[h]
p=f.gaR(f)
o=e.b
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.gb5(f).iF()
o=e.c
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=i.aW(f.gaR(f))
o=e.d
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.gah(f)
o=e.e
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.giE()
o=e.f
C.b.F(o.a,o.d,p)
p=f.giD()
o=e.r
C.b.F(o.a,o.d,p)
p=f.gbP()
o=e.x
C.b.F(o.a,o.d,p)
p=f.gbQ()
o=e.y
C.b.F(o.a,o.d,p)
p=f.gbR()
o=e.z
C.b.F(o.a,o.d,p);++h}}if(t.cx>0){l=a1.dx.x.length
r=a1.a.dD
C.b.W(r.a,r.d,l)
r=a3.db
i=r.gV(r)
for(r=a1.dx.x,q=r.length,p=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
o=a1.a.c1
if(h>=o.length)return H.i(o,h)
e=o[h]
o=f.gaU()
H.l(m,"$ib",p,"$ab")
if(!C.a.ap(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gb5(f)
d=e.d
C.b.p(d.a,d.d,o.a,o.b,o.c)
o=f.gbq()
d=e.b
C.b.p(d.a,d.d,o.a,o.b,o.c)
o=f.gbo(f)
d=e.c
C.b.p(d.a,d.d,o.a,o.b,o.c)
o=i.dU(f.gb5(f))
d=o.a
c=o.b
b=o.c
b=o.t(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
o=b.b
b=b.c
C.b.p(c.a,c.d,d,o,b)
b=f.gah(f)
o=e.f
C.b.p(o.a,o.d,b.a,b.b,b.c)
b=f.gaU()
o=b.gdI(b)
if(!o){o=e.x
C.b.W(o.a,o.d,1)}else{o=e.r
d=b.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,b.a)
o=e.x
C.b.W(o.a,o.d,0)}++h}}if(t.cy>0){l=a1.dx.y.length
r=a1.a.dE
C.b.W(r.a,r.d,l)
r=a3.db
i=r.gV(r)
for(r=a1.dx.y,q=r.length,p=[P.z],o=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
d=a1.a.c2
if(h>=d.length)return H.i(d,h)
e=d[h]
d=f.gaU()
H.l(m,"$ib",o,"$ab")
if(!C.a.ap(m,d)){d.a=m.length
C.a.h(m,d)}a=i.n(0,f.gV(f))
d=f.gV(f)
c=$.ce
d=d.aW(c==null?$.ce=new V.af(0,0,0):c)
c=e.b
C.b.p(c.a,c.d,d.a,d.b,d.c)
d=$.ce
d=a.aW(d==null?$.ce=new V.af(0,0,0):d)
c=e.c
C.b.p(c.a,c.d,d.a,d.b,d.c)
d=a.c6(0)
c=e.d
j=new Float32Array(H.cG(H.l(new V.dg(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).a5(0,!0),"$ib",p,"$ab")))
C.b.dV(c.a,c.d,!1,j)
c=f.gah(f)
d=e.e
C.b.p(d.a,d.d,c.a,c.b,c.c)
c=f.gaU()
d=c.gdI(c)
if(!d){d=e.r
C.b.W(d.a,d.d,1)}else{d=e.f
b=c.d
a0=d.a
d=d.d
if(b<6)a0.uniform1i(d,0)
else a0.uniform1i(d,c.a)
d=e.r
C.b.W(d.a,d.d,0)}d=f.gbP()
c=e.x
C.b.F(c.a,c.d,d)
d=f.gbQ()
c=e.y
C.b.F(c.a,c.d,d)
d=f.gbR()
c=e.z
C.b.F(c.a,c.d,d);++h}}if(t.db>0){l=a1.dx.z.length
r=a1.a.dF
C.b.W(r.a,r.d,l)
r=a3.db
i=r.gV(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
p=a1.a.c3
if(h>=p.length)return H.i(p,h)
e=p[h]
p=f.gaU()
H.l(m,"$ib",a2,"$ab")
if(!C.a.ap(m,p)){p.a=m.length
C.a.h(m,p)}p=f.gaR(f)
o=e.b
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.gb5(f)
o=e.c
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.gbq()
o=e.d
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.gbo(f)
o=e.e
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=i.aW(f.gaR(f))
o=e.f
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.gaU()
o=p.gdI(p)
if(!o){p=e.x
C.b.W(p.a,p.d,1)}else{o=e.r
d=p.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,p.a)
p=e.x
C.b.W(p.a,p.d,0)}p=f.gah(f)
o=e.y
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.giG()
o=e.z
C.b.F(o.a,o.d,p)
p=f.giH()
o=e.Q
C.b.F(o.a,o.d,p)
p=f.gbP()
o=e.ch
C.b.F(o.a,o.d,p)
p=f.gbQ()
o=e.cx
C.b.F(o.a,o.d,p)
p=f.gbR()
o=e.cy
C.b.F(o.a,o.d,p);++h}}}switch(t.f){case C.c:break
case C.h:break
case C.d:a1.R(m,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.ab(a2.dm,a2.bd,r)
break
case C.e:a1.R(m,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.a6(a2.dn,a2.bd,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.gV(r).c6(0)}a2=a2.id
a2.toString
a2.aa(r.a5(0,!0))}if(t.dy){a1.R(m,a1.ch)
a2=a1.a
r=a1.ch
a2.a6(a2.dq,a2.dr,r)
switch(t.r){case C.c:break
case C.h:a2=a1.a
r=a1.cx.f
a2=a2.be
a2.toString
q=r.a
p=r.b
r=r.c
C.b.p(a2.a,a2.d,q,p,r)
break
case C.d:a1.R(m,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.ab(a2.ds,a2.bf,r)
r=a1.a
a2=a1.cx.f
r=r.be
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.p(r.a,r.d,q,p,a2)
break
case C.e:a1.R(m,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.a6(a2.dt,a2.bf,r)
r=a1.a
a2=a1.cx.f
r=r.be
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.p(r.a,r.d,q,p,a2)
break}switch(t.x){case C.c:break
case C.h:a2=a1.a
r=a1.cy.f
a2=a2.bh
a2.toString
q=r.a
p=r.b
r=r.c
C.b.p(a2.a,a2.d,q,p,r)
r=a1.a
p=a1.cy.ch
r=r.bg
C.b.F(r.a,r.d,p)
break
case C.d:a1.R(m,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.ab(a2.du,a2.bi,r)
r=a1.a
a2=a1.cy.f
r=r.bh
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.p(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bg
C.b.F(a2.a,a2.d,p)
break
case C.e:a1.R(m,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.a6(a2.dv,a2.bi,r)
r=a1.a
a2=a1.cy.f
r=r.bh
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.p(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bg
C.b.F(a2.a,a2.d,p)
break}}a2=t.y
r=a2!==C.c
if(r){switch(a2){case C.c:break
case C.h:a2=a1.a
q=a1.db.f
a2=a2.bj
C.b.F(a2.a,a2.d,q)
break
case C.d:a1.R(m,a1.db.d)
a2=a1.a
q=a1.db.d
a2.ab(a2.dw,a2.bk,q)
q=a1.a
a2=a1.db.f
q=q.bj
C.b.F(q.a,q.d,a2)
break
case C.e:a1.R(m,a1.db.e)
a2=a1.a
q=a1.db.e
a2.a6(a2.dz,a2.bk,q)
q=a1.a
a2=a1.db.f
q=q.bj
C.b.F(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(a2=a3.a,k=0;k<m.length;++k){q=m[k]
if(!q.c&&q.d){q.c=!0
a2.activeTexture(33984+q.a)
a2.bindTexture(3553,q.b)}}q=a4.e
q.Y(a3)
q.a4(a3)
q.aX(a3)
if(r)a2.disable(3042)
for(k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
a2.activeTexture(33984+r.a)
a2.bindTexture(3553,null)}}r=a1.a
r.toString
a2.useProgram(null)
r.x.da()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cG().ac},
ses:function(a){this.e=H.l(a,"$iX",[V.ai],"$aX")}}
O.fD.prototype={}
O.c8.prototype={
P:function(a){this.a.P(H.n(a,"$iv"))},
aI:function(){return this.P(null)},
am:function(){},
h2:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().O(0,t.gay())
u=t.d
t.d=a
if(a!=null)a.gm().h(0,t.gay())
s=new D.K(t.b+".texture2D",u,t.d,[T.dx])
s.b=!0
t.a.P(s)}},
h3:function(a){}}
O.fE.prototype={}
O.aO.prototype={
cY:function(a){var u,t,s=this
if(!J.a4(s.f,a)){u=s.f
s.f=a
t=new D.K(s.b+".color",u,a,[V.a7])
t.b=!0
s.a.P(t)}},
am:function(){this.e6()
this.cY(new V.a7(1,1,1))},
sah:function(a,b){var u,t=this
if(t.c===C.c){t.c=C.h
t.am()
u=t.a
u.a=null
u.P(null)}t.cY(b)}}
O.fG.prototype={
h0:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.L().a)){u.ch=a
t=new D.K(u.b+".refraction",t,a,[P.z])
t.b=!0
u.a.P(t)}},
am:function(){this.cp()
this.h0(1)}}
O.fH.prototype={
h1:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.L().a)){u.ch=a
t=new D.K(u.b+".shininess",t,a,[P.z])
t.b=!0
u.a.P(t)}},
am:function(){this.cp()
this.h1(100)}}
O.ds.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.I():u},
P:function(a){var u
H.n(a,"$iv")
u=this.e
if(u!=null)u.B(a)},
aI:function(){return this.P(null)},
dO:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.n(a.fr.j(0,n),"$idt")
if(u==null){t=a.a
u=new A.dt(t,n)
u.cq(t,n)
u.dG(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.f(u.y.j(0,"fov"),"$iU")
u.ch=H.f(u.y.j(0,"ratio"),"$iU")
u.cx=H.f(u.y.j(0,"boxClr"),"$iG")
u.cy=H.f(u.y.j(0,"boxTxt"),"$iab")
u.db=H.f(u.y.j(0,"viewMat"),"$ial")
a.d2(u)}o.a=u}if(b.e==null){t=b.d.d5(new Z.dQ(a.a),$.aD())
t.aq($.aD()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.Y(a)
q=o.b
p=r.Q
C.b.F(p.a,p.d,q)
q=r.ch
C.b.F(q.a,q.d,t/s)
s=o.c
r.cy.e1(s)
s=o.d
t=r.cx
C.b.p(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gV(s).c6(0)
r=r.db
r.toString
r.aa(s.a5(0,!0))
t=b.e
if(t instanceof Z.bX){t.Y(a)
t.a4(a)
t.aX(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.da()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.bs.prototype={}
T.ck.prototype={}
T.dx.prototype={}
T.hx.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.I():u}}
T.dy.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.I():u}}
T.hy.prototype={
i6:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.jP(a)
t=new T.hx()
t.a=0
t.b=q
t.d=t.c=!1
r=W.j
W.a2(u,"load",H.m(new T.hA(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
aA:function(a,b,c,d,e,f){var u,t=W.jP(c);++this.d
u=W.j
W.a2(t,"load",H.m(new T.hz(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
cX:function(a,b,c){var u,t,s,r
b=V.jA(b)
u=V.jA(a.width)
t=V.jA(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.j6()
s.width=u
s.height=t
r=H.n(C.l.dY(s,"2d"),"$ibY")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.m_(r.getImageData(0,0,s.width,s.height))}}}
T.hA.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.cX(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.b.dR(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.dg()}++s.e},
$S:12}
T.hz.prototype={
$1:function(a){var u=this,t=u.a,s=t.cX(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.dR(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.dg()}++t.e},
$S:12}
V.eK.prototype={
aE:function(a,b){return!0},
i:function(a){return"all"},
$ib4:1}
V.b4.prototype={}
V.dd.prototype={
aE:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)if(u[s].aE(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sal:function(a){this.a=H.l(a,"$ib",[V.b4],"$ab")},
$ib4:1}
V.b6.prototype={
aE:function(a,b){return!this.e5(0,b)},
i:function(a){return"!["+this.co(0)+"]"}}
V.hb.prototype={
ea:function(a){var u,t
if(a.a.length<=0)throw H.h(P.r("May not create a SetMatcher with zero characters."))
u=new H.aM([P.A,P.a3])
for(t=new H.db(a,a.gk(a),[H.aw(a,"u",0)]);t.u();)u.Z(0,t.d,!0)
this.sfZ(u)},
aE:function(a,b){return this.a.d8(0,b)},
i:function(a){var u=this.a
return P.jh(new H.da(u,[H.w(u,0)]))},
sfZ:function(a){this.a=H.l(a,"$iM",[P.A,P.a3],"$aM")},
$ib4:1}
V.ch.prototype={
v:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cm(this.a.J(0,b))
r.sal(H.c([],[V.b4]))
r.c=!1
C.a.h(this.c,r)
return r},
i_:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.aE(0,a))return r}return},
i:function(a){return this.b},
shl:function(a){this.c=H.l(a,"$ib",[V.cm],"$ab")}}
V.dD.prototype={
i:function(a){var u=H.kC(this.b,"\n","\\n"),t=H.kC(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cl.prototype={
i:function(a){return this.b},
sfU:function(a){var u=P.o
this.c=H.l(a,"$iM",[u,u],"$aM")}}
V.hD.prototype={
J:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.ch(this,b)
u.shl(H.c([],[V.cm]))
u.d=null
this.a.Z(0,b,u)}return u},
aV:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cl(a)
u=P.o
t.sfU(new H.aM([u,u]))
this.b.Z(0,a,t)}return t},
iB:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dD]),l=this.c,k=[P.A],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.j.aZ(a,s)
q=l.i_(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jh(j)
throw H.h(P.r("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jh(j)
o=l.d
n=o.c.j(0,p)
t=new V.dD(n==null?o.b:n,p,s)}++s}}},
sha:function(a){this.a=H.l(a,"$iM",[P.o,V.ch],"$aM")},
she:function(a){this.b=H.l(a,"$iM",[P.o,V.cl],"$aM")}}
V.cm.prototype={
i:function(a){return this.b.b+": "+this.co(0)}}
X.bA.prototype={$iaR:1}
X.fl.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.I():u},
ae:function(a){var u=this.x
if(u!=null)u.B(a)},
Y:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.C(u)
q=C.f.ad(r*u)
r=s.b
if(typeof t!=="number")return H.C(t)
p=C.f.ad(r*t)
r=C.f.ad(s.c*u)
a.c=r
s=C.f.ad(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fn.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.I():u},
Y:function(a){var u
a.cy.bn(V.bG())
u=V.bG()
a.db.bn(u)},
aX:function(a){a.cy.at()
a.db.at()},
$iaR:1,
$ibA:1}
X.dl.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.I():u},
ae:function(a){var u
H.n(a,"$iv")
u=this.f
if(u!=null)u.B(a)},
em:function(){return this.ae(null)},
Y:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=a.c,j=a.d,i=l.c,h=l.d,g=l.e,f=g-h,e=1/Math.tan(i*0.5),d=V.aP(-e/(k/j),0,0,0,0,e,0,0,0,0,g/f,-g*h/f,0,0,1,0)
a.cy.bn(d)
k=$.jX
if(k==null){k=V.lk()
j=$.kd
if(j==null)j=$.kd=new V.Q(0,1,0)
i=$.kc
if(i==null)i=$.kc=new V.Q(0,0,-1)
u=i.t(0,Math.sqrt(i.A(i)))
j=j.aO(u)
t=j.t(0,Math.sqrt(j.A(j)))
s=u.aO(t)
r=new V.Q(k.a,k.b,k.c)
q=t.L(0).A(r)
p=s.L(0).A(r)
o=u.L(0).A(r)
k=V.aP(t.a,s.a,u.a,q,t.b,s.b,u.b,p,t.c,s.c,u.c,o,0,0,0,1)
$.jX=k
n=k}else n=k
k=l.b
if(k!=null){m=k.aF(0,a,l)
if(m!=null)n=m.n(0,n)}a.db.bn(n)},
aX:function(a){a.cy.at()
a.db.at()},
$iaR:1,
$ibA:1}
X.cj.prototype={}
V.j1.prototype={
$1:function(a){var u
H.n(a,"$iaX")
u=C.f.dT(this.a.gi0(),2)
if(u!=="0.00")P.jB(u+" fps")},
$S:36}
V.hf.prototype={
eb:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.j
W.a2(q,"scroll",H.m(new V.hh(o),{func:1,ret:-1,args:[r]}),!1,r)},
d1:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.o],"$ab")
this.h5()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.iB(C.a.i4(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q){p=s[q]
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
if(H.kB(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.i(m,1)
l.href=H.S(m[1])
l.textContent=H.S(m[0])
t.appendChild(l)}else{k=P.lK(C.J,n,C.r,!1)
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
h5:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.hD()
t=P.o
u.sha(new H.aM([t,V.ch]))
u.she(new H.aM([t,V.cl]))
u.c=null
u.c=u.J(0,q)
t=u.J(0,q).v(0,p)
s=V.aa(new H.Z("*"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,p).v(0,p)
s=new V.b6()
r=[V.b4]
s.sal(H.c([],r))
C.a.h(t.a,s)
t=V.aa(new H.Z("*"))
C.a.h(s.a,t)
t=u.J(0,p).v(0,"BoldEnd")
s=V.aa(new H.Z("*"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,q).v(0,o)
s=V.aa(new H.Z("_"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,o).v(0,o)
s=new V.b6()
s.sal(H.c([],r))
C.a.h(t.a,s)
t=V.aa(new H.Z("_"))
C.a.h(s.a,t)
t=u.J(0,o).v(0,n)
s=V.aa(new H.Z("_"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,q).v(0,m)
s=V.aa(new H.Z("`"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,m).v(0,m)
s=new V.b6()
s.sal(H.c([],r))
C.a.h(t.a,s)
t=V.aa(new H.Z("`"))
C.a.h(s.a,t)
t=u.J(0,m).v(0,"CodeEnd")
s=V.aa(new H.Z("`"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,q).v(0,l)
s=V.aa(new H.Z("["))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,l).v(0,k)
s=V.aa(new H.Z("|"))
C.a.h(t.a,s)
s=u.J(0,l).v(0,j)
t=V.aa(new H.Z("]"))
C.a.h(s.a,t)
s.c=!0
s=u.J(0,l).v(0,l)
t=new V.b6()
t.sal(H.c([],r))
C.a.h(s.a,t)
s=V.aa(new H.Z("|]"))
C.a.h(t.a,s)
s=u.J(0,k).v(0,j)
t=V.aa(new H.Z("]"))
C.a.h(s.a,t)
s.c=!0
s=u.J(0,k).v(0,k)
t=new V.b6()
t.sal(H.c([],r))
C.a.h(s.a,t)
s=V.aa(new H.Z("|]"))
C.a.h(t.a,s)
C.a.h(u.J(0,q).v(0,i).a,new V.eK())
s=u.J(0,i).v(0,i)
t=new V.b6()
t.sal(H.c([],r))
C.a.h(s.a,t)
s=V.aa(new H.Z("*_`["))
C.a.h(t.a,s)
s=u.J(0,"BoldEnd")
s.d=s.a.aV(p)
s=u.J(0,n)
s.d=s.a.aV(o)
s=u.J(0,"CodeEnd")
s.d=s.a.aV(m)
s=u.J(0,j)
s.d=s.a.aV("Link")
s=u.J(0,i)
s.d=s.a.aV(i)
this.b=u}}
V.hh.prototype={
$1:function(a){P.k7(C.n,new V.hg(this.a))},
$S:12}
V.hg.prototype={
$0:function(){var u=C.f.ad(document.documentElement.scrollTop),t=this.a.style,s=H.k(-0.01*u)+"px"
t.top=s},
$S:2};(function aliases(){var u=J.a.prototype
u.e3=u.i
u=J.d7.prototype
u.e4=u.i
u=O.c8.prototype
u.e6=u.am
u=O.aO.prototype
u.cp=u.am
u=V.dd.prototype
u.e5=u.aE
u.co=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"lU","lD",10)
u(P,"lV","lE",10)
u(P,"lW","lF",10)
t(P,"kq","lS",3)
var n
s(n=E.ae.prototype,"gdM",0,0,null,["$1","$0"],["dN","ig"],0,0)
s(n,"gdK",0,0,null,["$1","$0"],["dL","ib"],0,0)
r(n,"gi9","ia",7)
r(n,"gic","ie",7)
s(n=E.dC.prototype,"gcs",0,0,null,["$1","$0"],["cu","ct"],0,0)
q(n,"gis","dP",3)
p(n=X.dK.prototype,"gff","fg",9)
p(n,"gf3","f4",9)
p(n,"gf9","fa",4)
p(n,"gfj","fk",19)
p(n,"gfh","fi",19)
p(n,"gfn","fo",4)
p(n,"gfs","ft",4)
p(n,"gfd","fe",4)
p(n,"gfp","fq",4)
p(n,"gfb","fc",4)
p(n,"gfu","fv",33)
p(n,"gfw","fz",9)
p(n,"gfO","fP",11)
p(n,"gfK","fL",11)
p(n,"gfM","fN",11)
s(n=D.d9.prototype,"gcP",0,0,null,["$1","$0"],["cQ","fl"],0,0)
p(n,"gfA","fB",31)
r(n,"geY","eZ",20)
r(n,"gfE","fF",20)
o(V.P.prototype,"gk","c8",21)
o(V.Q.prototype,"gk","c8",21)
s(n=U.c5.prototype,"gaB",0,0,null,["$1","$0"],["K","a1"],0,0)
r(n,"geW","eX",22)
r(n,"gfC","fD",22)
s(n=U.dL.prototype,"gaB",0,0,null,["$1","$0"],["K","a1"],0,0)
p(n,"gbB","bC",1)
p(n,"gbD","bE",1)
p(n,"gbF","bG",1)
s(n=U.dM.prototype,"gaB",0,0,null,["$1","$0"],["K","a1"],0,0)
p(n,"gbB","bC",1)
p(n,"gbD","bE",1)
p(n,"gbF","bG",1)
p(n,"geQ","eR",1)
p(n,"geS","eT",1)
p(n,"ghj","hk",1)
p(n,"ghh","hi",1)
p(n,"ghf","hg",1)
p(U.dN.prototype,"geU","eV",1)
s(n=M.cS.prototype,"gT",0,0,null,["$1","$0"],["U","aH"],0,0)
r(n,"gfG","fH",17)
r(n,"gfI","fJ",17)
s(M.cV.prototype,"gT",0,0,null,["$1","$0"],["U","aH"],0,0)
s(n=M.d0.prototype,"gT",0,0,null,["$1","$0"],["U","aH"],0,0)
r(n,"gf5","f6",7)
r(n,"gf7","f8",7)
s(n=O.de.prototype,"gay",0,0,null,["$1","$0"],["P","aI"],0,0)
s(n,"gfX",0,0,null,["$1","$0"],["cV","fY"],0,0)
r(n,"gf_","f0",23)
r(n,"gf1","f2",23)
s(O.c8.prototype,"gay",0,0,null,["$1","$0"],["P","aI"],0,0)
s(O.ds.prototype,"gay",0,0,null,["$1","$0"],["P","aI"],0,0)
s(X.dl.prototype,"gel",0,0,null,["$1","$0"],["ae","em"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.N,null)
s(P.N,[H.je,J.a,J.ah,P.e5,P.e,H.db,P.aK,H.bE,H.dJ,H.hI,P.bk,H.bZ,H.em,P.a8,H.fu,H.fv,H.fq,P.es,P.b1,P.au,P.dR,P.hp,P.ci,P.hq,P.aX,P.ad,P.iM,P.iG,P.cw,P.iA,P.u,P.c_,P.iL,P.a3,P.as,P.a5,P.bj,P.fY,P.dv,P.dZ,P.fk,P.b,P.M,P.J,P.ak,P.o,P.br,W.f_,W.y,W.d2,P.ex,P.iB,O.X,O.c9,E.eT,E.ae,E.h3,E.dC,Z.dP,Z.dQ,Z.bX,Z.bm,Z.b_,D.eW,D.c2,D.v,X.cR,X.d8,X.fs,X.fy,X.an,X.fO,X.hE,X.dK,D.cX,D.Y,D.dm,D.du,D.dz,D.dA,D.dB,V.a7,V.ax,V.fb,V.dg,V.ai,V.a1,V.af,V.b9,V.dp,V.P,V.Q,U.dL,U.dM,U.dN,M.cV,M.d0,M.ao,A.cN,A.eO,A.fF,A.cn,A.cr,A.cp,A.cs,A.cq,A.ct,A.bC,A.dF,A.hR,F.a0,F.b3,F.bq,F.dr,F.hc,F.hd,F.he,F.aq,F.i_,F.i0,F.i3,F.i4,O.bs,O.c8,T.hy,V.eK,V.b4,V.dd,V.hb,V.ch,V.dD,V.cl,V.hD,X.bA,X.cj,X.fn,X.dl,V.hf])
s(J.a,[J.fp,J.d5,J.d7,J.aL,J.d6,J.c7,H.cc,W.d,W.eJ,W.cO,W.bY,W.aG,W.aH,W.O,W.dT,W.f3,W.f4,W.dV,W.d_,W.dX,W.f6,W.j,W.e_,W.aJ,W.fm,W.e1,W.bl,W.fx,W.fI,W.e6,W.e7,W.aQ,W.e8,W.eb,W.aS,W.ef,W.eh,W.aU,W.ei,W.aV,W.en,W.az,W.eq,W.hC,W.aY,W.et,W.hG,W.hW,W.ey,W.eA,W.eC,W.eE,W.eG,P.b2,P.e3,P.b7,P.ed,P.h1,P.eo,P.ba,P.ev,P.eP,P.dS,P.cP,P.dn,P.bK,P.dq,P.dw,P.dG,P.ek])
s(J.d7,[J.fZ,J.dH,J.bp])
t(J.jd,J.aL)
s(J.d6,[J.d4,J.d3])
t(P.fw,P.e5)
s(P.fw,[H.dI,W.ih,W.ig,P.fg])
t(H.Z,H.dI)
s(P.e,[H.f9,H.fB,H.i8])
s(P.aK,[H.fC,H.i9])
s(P.bk,[H.fV,H.fr,H.hU,H.hK,H.eV,H.h9,P.eN,P.dk,P.aE,P.hV,P.hT,P.hl,P.eY,P.f2])
s(H.bZ,[H.j2,H.hu,H.iW,H.iX,H.iY,P.ic,P.ib,P.id,P.ie,P.iK,P.iJ,P.im,P.ir,P.io,P.ip,P.iq,P.iu,P.iv,P.it,P.is,P.hr,P.hs,P.iQ,P.iE,P.iD,P.iF,P.fA,P.f7,P.f8,W.fK,W.fM,W.h8,W.ho,W.il,P.iS,P.fh,P.fi,P.eR,E.h4,E.h5,E.h6,E.hB,D.fc,D.fd,F.iN,F.i6,F.i5,F.i1,F.i2,T.hA,T.hz,V.j1,V.hh,V.hg])
s(H.hu,[H.hm,H.bV])
t(H.ia,P.eN)
t(P.fz,P.a8)
t(H.aM,P.fz)
t(H.da,H.f9)
t(H.dh,H.cc)
s(H.dh,[H.cx,H.cz])
t(H.cy,H.cx)
t(H.cb,H.cy)
t(H.cA,H.cz)
t(H.di,H.cA)
s(H.di,[H.fP,H.fQ,H.fR,H.fS,H.fT,H.dj,H.fU])
t(P.iC,P.iM)
t(P.iz,P.iG)
t(P.cU,P.hq)
t(P.fa,P.c_)
t(P.hX,P.fa)
t(P.hY,P.cU)
s(P.a5,[P.z,P.A])
s(P.aE,[P.bJ,P.fo])
s(W.d,[W.F,W.ff,W.aT,W.cB,W.aW,W.aA,W.cD,W.i7,W.cu,P.eS,P.bz])
s(W.F,[W.a_,W.bi])
s(W.a_,[W.q,P.p])
s(W.q,[W.eL,W.eM,W.bB,W.cY,W.fj,W.c6,W.ha])
s(W.aG,[W.c1,W.f0,W.f1])
t(W.eZ,W.aH)
t(W.bD,W.dT)
t(W.dW,W.dV)
t(W.cZ,W.dW)
t(W.dY,W.dX)
t(W.f5,W.dY)
t(W.aI,W.cO)
t(W.e0,W.e_)
t(W.fe,W.e0)
t(W.e2,W.e1)
t(W.bF,W.e2)
t(W.bt,W.j)
s(W.bt,[W.aN,W.a6,W.aB])
t(W.fJ,W.e6)
t(W.fL,W.e7)
t(W.e9,W.e8)
t(W.fN,W.e9)
t(W.ec,W.eb)
t(W.cd,W.ec)
t(W.eg,W.ef)
t(W.h_,W.eg)
t(W.h7,W.eh)
t(W.cC,W.cB)
t(W.hi,W.cC)
t(W.ej,W.ei)
t(W.hj,W.ej)
t(W.hn,W.en)
t(W.er,W.eq)
t(W.hv,W.er)
t(W.cE,W.cD)
t(W.hw,W.cE)
t(W.eu,W.et)
t(W.hF,W.eu)
t(W.b0,W.a6)
t(W.ez,W.ey)
t(W.ii,W.ez)
t(W.dU,W.d_)
t(W.eB,W.eA)
t(W.iw,W.eB)
t(W.eD,W.eC)
t(W.ea,W.eD)
t(W.eF,W.eE)
t(W.iH,W.eF)
t(W.eH,W.eG)
t(W.iI,W.eH)
t(W.ij,P.hp)
t(W.jl,W.ij)
t(W.ik,P.ci)
t(P.aj,P.iB)
t(P.e4,P.e3)
t(P.ft,P.e4)
t(P.ee,P.ed)
t(P.fW,P.ee)
t(P.ep,P.eo)
t(P.ht,P.ep)
t(P.ew,P.ev)
t(P.hH,P.ew)
t(P.eQ,P.dS)
t(P.fX,P.bz)
t(P.el,P.ek)
t(P.hk,P.el)
s(E.eT,[Z.cQ,A.cg,T.ck])
s(D.v,[D.bn,D.bo,D.K,X.h0])
s(X.h0,[X.dc,X.b5,X.ca,X.dE])
s(O.X,[D.d9,U.c5,M.cS])
s(D.eW,[U.eX,U.a9])
t(U.cT,U.a9)
s(A.cg,[A.df,A.dt])
s(A.dF,[A.H,A.hN,A.hO,A.hQ,A.hL,A.U,A.hM,A.G,A.hP,A.hS,A.co,A.al,A.ag,A.ab])
s(O.bs,[O.de,O.ds])
s(O.c8,[O.fD,O.fE,O.aO])
s(O.aO,[O.fG,O.fH])
s(T.ck,[T.dx,T.dy])
t(T.hx,T.dx)
s(V.dd,[V.b6,V.cm])
t(X.fl,X.cj)
u(H.dI,H.dJ)
u(H.cx,P.u)
u(H.cy,H.bE)
u(H.cz,P.u)
u(H.cA,H.bE)
u(P.e5,P.u)
u(W.dT,W.f_)
u(W.dV,P.u)
u(W.dW,W.y)
u(W.dX,P.u)
u(W.dY,W.y)
u(W.e_,P.u)
u(W.e0,W.y)
u(W.e1,P.u)
u(W.e2,W.y)
u(W.e6,P.a8)
u(W.e7,P.a8)
u(W.e8,P.u)
u(W.e9,W.y)
u(W.eb,P.u)
u(W.ec,W.y)
u(W.ef,P.u)
u(W.eg,W.y)
u(W.eh,P.a8)
u(W.cB,P.u)
u(W.cC,W.y)
u(W.ei,P.u)
u(W.ej,W.y)
u(W.en,P.a8)
u(W.eq,P.u)
u(W.er,W.y)
u(W.cD,P.u)
u(W.cE,W.y)
u(W.et,P.u)
u(W.eu,W.y)
u(W.ey,P.u)
u(W.ez,W.y)
u(W.eA,P.u)
u(W.eB,W.y)
u(W.eC,P.u)
u(W.eD,W.y)
u(W.eE,P.u)
u(W.eF,W.y)
u(W.eG,P.u)
u(W.eH,W.y)
u(P.e3,P.u)
u(P.e4,W.y)
u(P.ed,P.u)
u(P.ee,W.y)
u(P.eo,P.u)
u(P.ep,W.y)
u(P.ev,P.u)
u(P.ew,W.y)
u(P.dS,P.a8)
u(P.ek,P.u)
u(P.el,W.y)})();(function constants(){var u=hunkHelpers.makeConstList
C.l=W.bB.prototype
C.t=W.bD.prototype
C.G=J.a.prototype
C.a=J.aL.prototype
C.H=J.d3.prototype
C.i=J.d4.prototype
C.m=J.d5.prototype
C.f=J.d6.prototype
C.j=J.c7.prototype
C.I=J.bp.prototype
C.K=W.cd.prototype
C.u=J.fZ.prototype
C.b=P.bK.prototype
C.o=J.dH.prototype
C.v=W.b0.prototype
C.w=W.cu.prototype
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.x=function() {
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
C.C=function(getTagFallback) {
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
C.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.z=function(hooks) {
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
C.B=function(hooks) {
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
C.A=function(hooks) {
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

C.D=new P.fY()
C.r=new P.hX()
C.E=new P.hY()
C.k=new P.iC()
C.c=new A.bC(0,"ColorSourceType.None")
C.h=new A.bC(1,"ColorSourceType.Solid")
C.d=new A.bC(2,"ColorSourceType.Texture2D")
C.e=new A.bC(3,"ColorSourceType.TextureCube")
C.n=new P.bj(0)
C.F=new P.bj(5e6)
C.J=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.A])})()
var v={mangledGlobalNames:{A:"int",z:"double",a5:"num",o:"String",a3:"bool",J:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.a6]},{func:1,ret:P.J,args:[F.a0]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.A,[P.e,E.ae]]},{func:1,ret:P.J,args:[D.v]},{func:1,ret:-1,args:[W.j]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aB]},{func:1,ret:P.J,args:[W.j]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.o,args:[P.A]},{func:1,ret:P.J,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[P.A,[P.e,M.ao]]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:-1,args:[W.aN]},{func:1,ret:-1,args:[P.A,[P.e,D.Y]]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.A,[P.e,U.a9]]},{func:1,ret:-1,args:[P.A,[P.e,V.ai]]},{func:1,args:[W.j]},{func:1,ret:P.a3,args:[W.F]},{func:1,ret:W.a_,args:[W.F]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,args:[,P.o]},{func:1,ret:P.J,args:[P.a5]},{func:1,args:[P.o]},{func:1,ret:P.a3,args:[[P.e,D.Y]]},{func:1,ret:P.J,args:[,],opt:[P.ak]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:P.J,args:[F.aq,P.z,P.z]},{func:1,ret:[P.au,,],args:[,]},{func:1,ret:P.J,args:[P.aX]},{func:1,ret:-1,args:[P.o,P.o]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aF=0
$.bW=null
$.jF=null
$.jn=!1
$.ku=null
$.ko=null
$.kz=null
$.iT=null
$.iZ=null
$.jx=null
$.bL=null
$.cH=null
$.cI=null
$.jo=!1
$.V=C.k
$.am=[]
$.jL=null
$.jK=null
$.jJ=null
$.jI=null
$.jT=null
$.jY=null
$.ce=null
$.k3=null
$.kb=null
$.ke=null
$.kd=null
$.kc=null
$.jX=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ms","kG",function(){return H.kt("_$dart_dartClosure")})
u($,"mt","jC",function(){return H.kt("_$dart_js")})
u($,"mw","kH",function(){return H.aZ(H.hJ({
toString:function(){return"$receiver$"}}))})
u($,"mx","kI",function(){return H.aZ(H.hJ({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"my","kJ",function(){return H.aZ(H.hJ(null))})
u($,"mz","kK",function(){return H.aZ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mC","kN",function(){return H.aZ(H.hJ(void 0))})
u($,"mD","kO",function(){return H.aZ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mB","kM",function(){return H.aZ(H.k9(null))})
u($,"mA","kL",function(){return H.aZ(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mF","kQ",function(){return H.aZ(H.k9(void 0))})
u($,"mE","kP",function(){return H.aZ(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mV","jD",function(){return P.lC()})
u($,"mW","kU",function(){return P.lv("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mr","kF",function(){return{}})
u($,"mO","kT",function(){return Z.at(0)})
u($,"mI","kR",function(){return Z.at(511)})
u($,"mQ","aD",function(){return Z.at(1)})
u($,"mP","bf",function(){return Z.at(2)})
u($,"mK","be",function(){return Z.at(4)})
u($,"mR","bg",function(){return Z.at(8)})
u($,"mS","bh",function(){return Z.at(16)})
u($,"mL","cL",function(){return Z.at(32)})
u($,"mM","cM",function(){return Z.at(64)})
u($,"mN","kS",function(){return Z.at(96)})
u($,"mT","bS",function(){return Z.at(128)})
u($,"mJ","bd",function(){return Z.at(256)})
u($,"mq","kE",function(){return new V.fb(1e-9)})
u($,"mp","L",function(){return $.kE()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cc,ArrayBufferView:H.cc,Float32Array:H.cb,Float64Array:H.cb,Int16Array:H.fP,Int32Array:H.fQ,Int8Array:H.fR,Uint16Array:H.fS,Uint32Array:H.fT,Uint8ClampedArray:H.dj,CanvasPixelArray:H.dj,Uint8Array:H.fU,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLBodyElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableCellElement:W.q,HTMLTableDataCellElement:W.q,HTMLTableHeaderCellElement:W.q,HTMLTableColElement:W.q,HTMLTableElement:W.q,HTMLTableRowElement:W.q,HTMLTableSectionElement:W.q,HTMLTemplateElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.eJ,HTMLAnchorElement:W.eL,HTMLAreaElement:W.eM,Blob:W.cO,HTMLCanvasElement:W.bB,CanvasRenderingContext2D:W.bY,CDATASection:W.bi,CharacterData:W.bi,Comment:W.bi,ProcessingInstruction:W.bi,Text:W.bi,CSSNumericValue:W.c1,CSSUnitValue:W.c1,CSSPerspective:W.eZ,CSSCharsetRule:W.O,CSSConditionRule:W.O,CSSFontFaceRule:W.O,CSSGroupingRule:W.O,CSSImportRule:W.O,CSSKeyframeRule:W.O,MozCSSKeyframeRule:W.O,WebKitCSSKeyframeRule:W.O,CSSKeyframesRule:W.O,MozCSSKeyframesRule:W.O,WebKitCSSKeyframesRule:W.O,CSSMediaRule:W.O,CSSNamespaceRule:W.O,CSSPageRule:W.O,CSSRule:W.O,CSSStyleRule:W.O,CSSSupportsRule:W.O,CSSViewportRule:W.O,CSSStyleDeclaration:W.bD,MSStyleCSSProperties:W.bD,CSS2Properties:W.bD,CSSImageValue:W.aG,CSSKeywordValue:W.aG,CSSPositionValue:W.aG,CSSResourceValue:W.aG,CSSURLImageValue:W.aG,CSSStyleValue:W.aG,CSSMatrixComponent:W.aH,CSSRotation:W.aH,CSSScale:W.aH,CSSSkew:W.aH,CSSTranslation:W.aH,CSSTransformComponent:W.aH,CSSTransformValue:W.f0,CSSUnparsedValue:W.f1,DataTransferItemList:W.f3,HTMLDivElement:W.cY,DOMException:W.f4,ClientRectList:W.cZ,DOMRectList:W.cZ,DOMRectReadOnly:W.d_,DOMStringList:W.f5,DOMTokenList:W.f6,Element:W.a_,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aI,FileList:W.fe,FileWriter:W.ff,HTMLFormElement:W.fj,Gamepad:W.aJ,History:W.fm,HTMLCollection:W.bF,HTMLFormControlsCollection:W.bF,HTMLOptionsCollection:W.bF,ImageData:W.bl,HTMLImageElement:W.c6,KeyboardEvent:W.aN,Location:W.fx,MediaList:W.fI,MIDIInputMap:W.fJ,MIDIOutputMap:W.fL,MimeType:W.aQ,MimeTypeArray:W.fN,PointerEvent:W.a6,MouseEvent:W.a6,DragEvent:W.a6,Document:W.F,DocumentFragment:W.F,HTMLDocument:W.F,ShadowRoot:W.F,XMLDocument:W.F,Attr:W.F,DocumentType:W.F,Node:W.F,NodeList:W.cd,RadioNodeList:W.cd,Plugin:W.aS,PluginArray:W.h_,RTCStatsReport:W.h7,HTMLSelectElement:W.ha,SourceBuffer:W.aT,SourceBufferList:W.hi,SpeechGrammar:W.aU,SpeechGrammarList:W.hj,SpeechRecognitionResult:W.aV,Storage:W.hn,CSSStyleSheet:W.az,StyleSheet:W.az,TextTrack:W.aW,TextTrackCue:W.aA,VTTCue:W.aA,TextTrackCueList:W.hv,TextTrackList:W.hw,TimeRanges:W.hC,Touch:W.aY,TouchEvent:W.aB,TouchList:W.hF,TrackDefaultList:W.hG,CompositionEvent:W.bt,FocusEvent:W.bt,TextEvent:W.bt,UIEvent:W.bt,URL:W.hW,VideoTrackList:W.i7,WheelEvent:W.b0,Window:W.cu,DOMWindow:W.cu,CSSRuleList:W.ii,ClientRect:W.dU,DOMRect:W.dU,GamepadList:W.iw,NamedNodeMap:W.ea,MozNamedAttrMap:W.ea,SpeechRecognitionResultList:W.iH,StyleSheetList:W.iI,SVGLength:P.b2,SVGLengthList:P.ft,SVGNumber:P.b7,SVGNumberList:P.fW,SVGPointList:P.h1,SVGStringList:P.ht,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGTransform:P.ba,SVGTransformList:P.hH,AudioBuffer:P.eP,AudioParamMap:P.eQ,AudioTrackList:P.eS,AudioContext:P.bz,webkitAudioContext:P.bz,BaseAudioContext:P.bz,OfflineAudioContext:P.fX,WebGLBuffer:P.cP,WebGLProgram:P.dn,WebGL2RenderingContext:P.bK,WebGLShader:P.dq,WebGLTexture:P.dw,WebGLUniformLocation:P.dG,SQLResultSetRowList:P.hk})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.cb.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
W.cB.$nativeSuperclassTag="EventTarget"
W.cC.$nativeSuperclassTag="EventTarget"
W.cD.$nativeSuperclassTag="EventTarget"
W.cE.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.kw,[])
else M.kw([])})})()
//# sourceMappingURL=test.dart.js.map
