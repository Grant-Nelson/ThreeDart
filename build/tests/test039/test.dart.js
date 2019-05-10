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
a[c]=function(){a[c]=function(){H.m5(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jo"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jo"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jo(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={j9:function j9(a){this.a=a},
jG:function(){return new P.he("No element")},
W:function W(a){this.a=a},
eY:function eY(){},
d7:function d7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fs:function fs(a,b,c){this.a=a
this.b=b
this.$ti=c},
ft:function ft(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
i7:function i7(a,b,c){this.a=a
this.b=b
this.$ti=c},
i8:function i8(a,b,c){this.a=a
this.b=b
this.$ti=c},
bv:function bv(){},
dD:function dD(){},
dC:function dC(){},
bK:function(a){var u,t
u=H.N(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
lP:function(a){return v.types[H.a5(a)]},
lU:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iA},
k:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aj(a)
if(typeof u!=="string")throw H.f(H.bF(a))
return u},
lg:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fe(u)
t=u[0]
s=u[1]
return new H.fV(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
c8:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bz:function(a){return H.l6(a)+H.jm(H.bm(a),0,null)},
l6:function(a){var u,t,s,r,q,p,o,n,m
u=J.S(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.D||!!u.$idB){p=C.u(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bK(r.length>1&&C.j.aR(r,0)===36?C.j.c2(r,1):r)},
jQ:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
lf:function(a){var u,t,s,r
u=H.d([],[P.y])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.f(H.bF(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.aU(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.f(H.bF(r))}return H.jQ(u)},
jR:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bF(s))
if(s<0)throw H.f(H.bF(s))
if(s>65535)return H.lf(a)}return H.jQ(a)},
le:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.aU(u,10))>>>0,56320|u&1023)}throw H.f(P.aq(a,0,1114111,null,null))},
by:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ld:function(a){var u=H.by(a).getFullYear()+0
return u},
lb:function(a){var u=H.by(a).getMonth()+1
return u},
l7:function(a){var u=H.by(a).getDate()+0
return u},
l8:function(a){var u=H.by(a).getHours()+0
return u},
la:function(a){var u=H.by(a).getMinutes()+0
return u},
lc:function(a){var u=H.by(a).getSeconds()+0
return u},
l9:function(a){var u=H.by(a).getMilliseconds()+0
return u},
bn:function(a){throw H.f(H.bF(a))},
e:function(a,b){if(a==null)J.bN(a)
throw H.f(H.cC(a,b))},
cC:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aw(!0,b,"index",null)
u=H.a5(J.bN(a))
if(!(b<0)){if(typeof u!=="number")return H.bn(u)
t=b>=u}else t=!0
if(t)return P.P(b,a,"index",null,u)
return P.dk(b,"index",null)},
lM:function(a,b,c){if(a>c)return new P.bA(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bA(a,c,!0,b,"end","Invalid value")
return new P.aw(!0,b,"end",null)},
bF:function(a){return new P.aw(!0,a,null,null)},
lI:function(a){if(typeof a!=="number")throw H.f(H.bF(a))
return a},
f:function(a){var u
if(a==null)a=new P.de()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ku})
u.name=""}else u.toString=H.ku
return u},
ku:function(){return J.aj(this.dartException)},
r:function(a){throw H.f(a)},
z:function(a){throw H.f(P.bS(a))},
aO:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.n])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hB(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hC:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
k0:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jL:function(a,b){return new H.fO(a,b==null?null:b.method)},
ja:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fh(a,t,u?null:b.receiver)},
bo:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.j0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.aU(s,16)&8191)===10)switch(r){case 438:return u.$1(H.ja(H.k(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.jL(H.k(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.kx()
p=$.ky()
o=$.kz()
n=$.kA()
m=$.kD()
l=$.kE()
k=$.kC()
$.kB()
j=$.kG()
i=$.kF()
h=q.Z(t)
if(h!=null)return u.$1(H.ja(H.N(t),h))
else{h=p.Z(t)
if(h!=null){h.method="call"
return u.$1(H.ja(H.N(t),h))}else{h=o.Z(t)
if(h==null){h=n.Z(t)
if(h==null){h=m.Z(t)
if(h==null){h=l.Z(t)
if(h==null){h=k.Z(t)
if(h==null){h=n.Z(t)
if(h==null){h=j.Z(t)
if(h==null){h=i.Z(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.jL(H.N(t),h))}}return u.$1(new H.hO(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dr()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aw(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dr()
return a},
bI:function(a){var u
if(a==null)return new H.eb(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eb(a)},
lO:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.U(0,a[t],a[s])}return b},
lT:function(a,b,c,d,e,f){H.p(a,"$ij6")
switch(H.a5(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.t("Unsupported number of arguments for wrapped closure"))},
bG:function(a,b){var u
H.a5(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lT)
a.$identity=u
return u},
kT:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.S(d).$ib){u.$reflectionInfo=d
s=H.lg(u).r}else s=d
r=e?Object.create(new H.hf().constructor.prototype):Object.create(new H.bO(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.ax
if(typeof p!=="number")return p.J()
$.ax=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.jE(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.lP,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.jC:H.j2
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.f("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.jE(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
kQ:function(a,b,c,d){var u=H.j2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jE:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kS(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kQ(t,!r,u,b)
if(t===0){r=$.ax
if(typeof r!=="number")return r.J()
$.ax=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bP
if(q==null){q=H.eJ("self")
$.bP=q}return new Function(r+H.k(q)+";return "+p+"."+H.k(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ax
if(typeof r!=="number")return r.J()
$.ax=r+1
o+=r
r="return function("+o+"){return this."
q=$.bP
if(q==null){q=H.eJ("self")
$.bP=q}return new Function(r+H.k(q)+"."+H.k(u)+"("+o+");}")()},
kR:function(a,b,c,d){var u,t
u=H.j2
t=H.jC
switch(b?-1:a){case 0:throw H.f(H.lk("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kS:function(a,b){var u,t,s,r,q,p,o,n
u=$.bP
if(u==null){u=H.eJ("self")
$.bP=u}t=$.jB
if(t==null){t=H.eJ("receiver")
$.jB=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.kR(r,!p,s,b)
if(r===1){u="return function(){return this."+H.k(u)+"."+H.k(s)+"(this."+H.k(t)+");"
t=$.ax
if(typeof t!=="number")return t.J()
$.ax=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.k(u)+"."+H.k(s)+"(this."+H.k(t)+", "+n+");"
t=$.ax
if(typeof t!=="number")return t.J()
$.ax=t+1
return new Function(u+t+"}")()},
jo:function(a,b,c,d,e,f,g){return H.kT(a,b,H.a5(c),d,!!e,!!f,g)},
j2:function(a){return a.a},
jC:function(a){return a.c},
eJ:function(a){var u,t,s,r,q
u=new H.bO("self","target","receiver","name")
t=J.fe(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.au(a,"String"))},
mJ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.au(a,"double"))},
lZ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.au(a,"num"))},
kk:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.au(a,"bool"))},
a5:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.au(a,"int"))},
kr:function(a,b){throw H.f(H.au(a,H.bK(H.N(b).substring(2))))},
m0:function(a,b){throw H.f(H.kP(a,H.bK(H.N(b).substring(2))))},
p:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.S(a)[b])return a
H.kr(a,b)},
i:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.m0(a,b)},
jt:function(a){if(a==null)return a
if(!!J.S(a).$ib)return a
throw H.f(H.au(a,"List<dynamic>"))},
lV:function(a,b){var u
if(a==null)return a
u=J.S(a)
if(!!u.$ib)return a
if(u[b])return a
H.kr(a,b)},
kl:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a5(u)]
else return a.$S()}return},
ey:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.kl(J.S(a))
if(u==null)return!1
return H.kb(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.jj)return a
$.jj=!0
try{if(H.ey(a,b))return a
u=H.iZ(b)
t=H.au(a,u)
throw H.f(t)}finally{$.jj=!1}},
jp:function(a,b){if(a!=null&&!H.jn(a,b))H.r(H.au(a,H.iZ(b)))
return a},
au:function(a,b){return new H.hD("TypeError: "+P.f0(a)+": type '"+H.kf(a)+"' is not a subtype of type '"+b+"'")},
kP:function(a,b){return new H.eK("CastError: "+P.f0(a)+": type '"+H.kf(a)+"' is not a subtype of type '"+b+"'")},
kf:function(a){var u,t
u=J.S(a)
if(!!u.$ibQ){t=H.kl(u)
if(t!=null)return H.iZ(t)
return"Closure"}return H.bz(a)},
m5:function(a){throw H.f(new P.eR(H.N(a)))},
lk:function(a){return new H.h1(a)},
km:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bm:function(a){if(a==null)return
return a.$ti},
mK:function(a,b,c){return H.bJ(a["$a"+H.k(c)],H.bm(b))},
cD:function(a,b,c,d){var u
H.N(c)
H.a5(d)
u=H.bJ(a["$a"+H.k(c)],H.bm(b))
return u==null?null:u[d]},
av:function(a,b,c){var u
H.N(b)
H.a5(c)
u=H.bJ(a["$a"+H.k(b)],H.bm(a))
return u==null?null:u[c]},
x:function(a,b){var u
H.a5(b)
u=H.bm(a)
return u==null?null:u[b]},
iZ:function(a){return H.bl(a,null)},
bl:function(a,b){var u,t
H.m(b,"$ib",[P.n],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bK(a[0].name)+H.jm(a,1,b)
if(typeof a=="function")return H.bK(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a5(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.k(b[t])}if('func' in a)return H.ly(a,b)
if('futureOr' in a)return"FutureOr<"+H.bl("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ly:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.n]
H.m(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.d([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.e(b,m)
o=C.j.J(o,b[m])
l=t[p]
if(l!=null&&l!==P.K)o+=" extends "+H.bl(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bl(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bl(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bl(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.lN(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.N(u[g])
i=i+h+H.bl(d[c],b)+(" "+H.k(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jm:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.n],"$ab")
if(a==null)return""
u=new P.bh("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bl(p,c)}return"<"+u.i(0)+">"},
bJ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ex:function(a,b,c,d){var u,t
H.N(b)
H.jt(c)
H.N(d)
if(a==null)return!1
u=H.bm(a)
t=J.S(a)
if(t[b]==null)return!1
return H.ki(H.bJ(t[d],u),null,c,null)},
m:function(a,b,c,d){H.N(b)
H.jt(c)
H.N(d)
if(a==null)return a
if(H.ex(a,b,c,d))return a
throw H.f(H.au(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bK(b.substring(2))+H.jm(c,0,null),v.mangledGlobalNames)))},
ki:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.an(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.an(a[t],b,c[t],d))return!1
return!0},
mH:function(a,b,c){return a.apply(b,H.bJ(J.S(b)["$a"+H.k(c)],H.bm(b)))},
ko:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="K"||a.name==="F"||a===-1||a===-2||H.ko(u)}return!1},
jn:function(a,b){var u,t
if(a==null)return b==null||b.name==="K"||b.name==="F"||b===-1||b===-2||H.ko(b)
if(b==null||b===-1||b.name==="K"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jn(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ey(a,b)}u=J.S(a).constructor
t=H.bm(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.an(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.jn(a,b))throw H.f(H.au(a,H.iZ(b)))
return a},
an:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="K"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="K"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.an(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="F")return!0
if('func' in c)return H.kb(a,b,c,d)
if('func' in a)return c.name==="j6"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.an("type" in a?a.type:null,b,s,d)
else if(H.an(a,b,s,d))return!0
else{if(!('$i'+"bX" in t.prototype))return!1
r=t.prototype["$a"+"bX"]
q=H.bJ(r,u?a.slice(1):null)
return H.an(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.ki(H.bJ(m,u),b,p,d)},
kb:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.an(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.an(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.an(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.an(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.lY(h,b,g,d)},
lY:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.an(c[r],d,a[r],b))return!1}return!0},
mI:function(a,b,c){Object.defineProperty(a,H.N(b),{value:c,enumerable:false,writable:true,configurable:true})},
lW:function(a){var u,t,s,r,q,p
u=H.N($.kn.$1(a))
t=$.iQ[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.iW[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.N($.kh.$2(a,u))
if(u!=null){t=$.iQ[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.iW[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.iY(s)
$.iQ[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.iW[u]=s
return s}if(q==="-"){p=H.iY(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.kq(a,s)
if(q==="*")throw H.f(P.k1(u))
if(v.leafTags[u]===true){p=H.iY(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.kq(a,s)},
kq:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ju(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iY:function(a){return J.ju(a,!1,null,!!a.$iA)},
lX:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iY(u)
else return J.ju(u,c,null,null)},
lR:function(){if(!0===$.js)return
$.js=!0
H.lS()},
lS:function(){var u,t,s,r,q,p,o,n
$.iQ=Object.create(null)
$.iW=Object.create(null)
H.lQ()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ks.$1(q)
if(p!=null){o=H.lX(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lQ:function(){var u,t,s,r,q,p,o
u=C.I()
u=H.bE(C.F,H.bE(C.K,H.bE(C.t,H.bE(C.t,H.bE(C.J,H.bE(C.G,H.bE(C.H(C.u),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.kn=new H.iT(q)
$.kh=new H.iU(p)
$.ks=new H.iV(o)},
bE:function(a,b){return a(b)||b},
l0:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.fa("Illegal RegExp pattern ("+String(r)+")",a,null))},
m3:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kt:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fV:function fV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
hB:function hB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fO:function fO(a,b){this.a=a
this.b=b},
fh:function fh(a,b,c){this.a=a
this.b=b
this.c=c},
hO:function hO(a){this.a=a},
j0:function j0(a){this.a=a},
eb:function eb(a){this.a=a
this.b=null},
bQ:function bQ(){},
hn:function hn(){},
hf:function hf(){},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hD:function hD(a){this.a=a},
eK:function eK(a){this.a=a},
h1:function h1(a){this.a=a},
aE:function aE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fl:function fl(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d6:function d6(a,b){this.a=a
this.$ti=b},
fm:function fm(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
fg:function fg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cz:function(a){return a},
bk:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cC(b,a))},
lx:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.lM(a,b,c))
return b},
c5:function c5(){},
db:function db(){},
c4:function c4(){},
dc:function dc(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
dd:function dd(){},
fM:function fM(){},
cq:function cq(){},
cr:function cr(){},
cs:function cs(){},
ct:function ct(){},
lN:function(a){return J.jH(a?Object.keys(a):[],null)},
m_:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ju:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iS:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.js==null){H.lR()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.f(P.k1("Return interceptor for "+H.k(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jx()]
if(q!=null)return q
q=H.lW(a)
if(q!=null)return q
if(typeof a=="function")return C.L
t=Object.getPrototypeOf(a)
if(t==null)return C.v
if(t===Object.prototype)return C.v
if(typeof r=="function"){Object.defineProperty(r,$.jx(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
l_:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.j1(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aq(a,0,4294967295,"length",null))
return J.jH(new Array(a),b)},
jH:function(a,b){return J.fe(H.d(a,[b]))},
fe:function(a){H.jt(a)
a.fixed$length=Array
return a},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d0.prototype
return J.d_.prototype}if(typeof a=="string")return J.c0.prototype
if(a==null)return J.d1.prototype
if(typeof a=="boolean")return J.ff.prototype
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.K)return a
return J.iS(a)},
jq:function(a){if(typeof a=="string")return J.c0.prototype
if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.K)return a
return J.iS(a)},
jr:function(a){if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.K)return a
return J.iS(a)},
iR:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.K)return a
return J.iS(a)},
T:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).p(a,b)},
kL:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lU(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jq(a).j(a,b)},
kM:function(a,b,c,d){return J.iR(a).hB(a,b,c,d)},
jz:function(a,b){return J.iR(a).S(a,b)},
jA:function(a,b){return J.jr(a).w(a,b)},
kN:function(a,b){return J.jr(a).I(a,b)},
cH:function(a){return J.S(a).gF(a)},
bM:function(a){return J.jr(a).gN(a)},
bN:function(a){return J.jq(a).gk(a)},
aj:function(a){return J.S(a).i(a)},
a:function a(){},
ff:function ff(){},
d1:function d1(){},
d3:function d3(){},
fS:function fS(){},
dB:function dB(){},
bf:function bf(){},
aD:function aD(a){this.$ti=a},
j8:function j8(a){this.$ti=a},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
d2:function d2(){},
d0:function d0(){},
d_:function d_(){},
c0:function c0(){}},P={
lp:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.lF()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bG(new P.ia(u),1)).observe(t,{childList:true})
return new P.i9(u,t,s)}else if(self.setImmediate!=null)return P.lG()
return P.lH()},
lq:function(a){self.scheduleImmediate(H.bG(new P.ib(H.l(a,{func:1,ret:-1})),0))},
lr:function(a){self.setImmediate(H.bG(new P.ic(H.l(a,{func:1,ret:-1})),0))},
ls:function(a){P.je(C.m,H.l(a,{func:1,ret:-1}))},
je:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.h.V(a.a,1000)
return P.lu(u<0?0:u,b)},
k_:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.af]})
u=C.h.V(a.a,1000)
return P.lv(u<0?0:u,b)},
lu:function(a,b){var u=new P.eh(!0)
u.eg(a,b)
return u},
lv:function(a,b){var u=new P.eh(!1)
u.eh(a,b)
return u},
lt:function(a,b){var u,t,s
b.a=1
try{a.dA(new P.il(b),new P.im(b),null)}catch(s){u=H.bo(s)
t=H.bI(s)
P.m1(new P.io(b,u,t))}},
k7:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.p(a.c,"$iam")
if(u>=4){t=b.bq()
b.a=a.a
b.c=a.c
P.co(b,t)}else{t=H.p(b.c,"$iaR")
b.a=2
b.c=a
a.cA(t)}},
co:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.p(t.c,"$ia6")
t=t.b
p=q.a
o=q.b
t.toString
P.iM(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.co(u.a,b)}t=u.a
m=t.c
s.a=r
s.b=m
p=!r
if(p){o=b.c
o=(o&1)!==0||o===8}else o=!0
if(o){o=b.b
l=o.b
if(r){k=t.b
k.toString
k=k==l
if(!k)l.toString
else k=!0
k=!k}else k=!1
if(k){H.p(m,"$ia6")
t=t.b
p=m.a
o=m.b
t.toString
P.iM(null,null,t,p,o)
return}j=$.Q
if(j!=l)$.Q=l
else j=null
t=b.c
if(t===8)new P.is(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.ir(s,b,m).$0()}else if((t&2)!==0)new P.iq(u,s,b).$0()
if(j!=null)$.Q=j
t=s.b
if(!!J.S(t).$ibX){if(t.a>=4){i=H.p(o.c,"$iaR")
o.c=null
b=o.aT(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.k7(t,o)
return}}h=b.b
i=H.p(h.c,"$iaR")
h.c=null
b=h.aT(i)
t=s.a
p=s.b
if(!t){H.C(p,H.x(h,0))
h.a=4
h.c=p}else{H.p(p,"$ia6")
h.a=8
h.c=p}u.a=h
t=h}},
lB:function(a,b){if(H.ey(a,{func:1,args:[P.K,P.ac]}))return H.l(a,{func:1,ret:null,args:[P.K,P.ac]})
if(H.ey(a,{func:1,args:[P.K]}))return H.l(a,{func:1,ret:null,args:[P.K]})
throw H.f(P.j1(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lA:function(){var u,t
for(;u=$.bD,u!=null;){$.cB=null
t=u.b
$.bD=t
if(t==null)$.cA=null
u.a.$0()}},
lE:function(){$.jk=!0
try{P.lA()}finally{$.cB=null
$.jk=!1
if($.bD!=null)$.jy().$1(P.kj())}},
ke:function(a){var u=new P.dG(H.l(a,{func:1,ret:-1}))
if($.bD==null){$.cA=u
$.bD=u
if(!$.jk)$.jy().$1(P.kj())}else{$.cA.b=u
$.cA=u}},
lD:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.bD
if(u==null){P.ke(a)
$.cB=$.cA
return}t=new P.dG(a)
s=$.cB
if(s==null){t.b=u
$.cB=t
$.bD=t}else{t.b=s.b
s.b=t
$.cB=t
if(t.b==null)$.cA=t}},
m1:function(a){var u,t
u={func:1,ret:-1}
H.l(a,u)
t=$.Q
if(C.k===t){P.iO(null,null,C.k,a)
return}t.toString
P.iO(null,null,t,H.l(t.by(a),u))},
jY:function(a,b){var u,t
u={func:1,ret:-1}
H.l(b,u)
t=$.Q
if(t===C.k){t.toString
return P.je(a,b)}return P.je(a,H.l(t.by(b),u))},
jZ:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.af]}
H.l(b,u)
t=$.Q
if(t===C.k){t.toString
return P.k_(a,b)}s=t.cK(b,P.af)
$.Q.toString
return P.k_(a,H.l(s,u))},
iM:function(a,b,c,d,e){var u={}
u.a=d
P.lD(new P.iN(u,e))},
kc:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.Q
if(t===c)return d.$0()
$.Q=c
u=t
try{t=d.$0()
return t}finally{$.Q=u}},
kd:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.C(e,g)
t=$.Q
if(t===c)return d.$1(e)
$.Q=c
u=t
try{t=d.$1(e)
return t}finally{$.Q=u}},
lC:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
t=$.Q
if(t===c)return d.$2(e,f)
$.Q=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Q=u}},
iO:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.by(d):c.hE(d,-1)
P.ke(d)},
ia:function ia(a){this.a=a},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(a){this.a=a},
ic:function ic(a){this.a=a},
eh:function eh(a){this.a=a
this.b=null
this.c=0},
iH:function iH(a,b){this.a=a
this.b=b},
iG:function iG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aR:function aR(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
am:function am(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
ik:function ik(a,b){this.a=a
this.b=b},
ip:function ip(a,b){this.a=a
this.b=b},
il:function il(a){this.a=a},
im:function im(a){this.a=a},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
is:function is(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
it:function it(a){this.a=a},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
dG:function dG(a){this.a=a
this.b=null},
hi:function hi(){},
hk:function hk(a,b){this.a=a
this.b=b},
hl:function hl(a,b){this.a=a
this.b=b},
cb:function cb(){},
hj:function hj(){},
af:function af(){},
a6:function a6(a,b){this.a=a
this.b=b},
iJ:function iJ(){},
iN:function iN(a,b){this.a=a
this.b=b},
iz:function iz(){},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a,b){this.a=a
this.b=b},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
l1:function(a,b){return new H.aE([a,b])},
l2:function(a){return H.lO(a,new H.aE([null,null]))},
l3:function(a,b,c,d){return new P.iw([d])},
ka:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
k9:function(a,b,c){var u=new P.ix(a,b,[c])
u.c=a.e
return u},
kZ:function(a,b,c){var u,t
if(P.jl(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.n])
t=$.cG()
C.a.h(t,a)
try{P.lz(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.jW(b,H.lV(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
j7:function(a,b,c){var u,t,s
if(P.jl(a))return b+"..."+c
u=new P.bh(b)
t=$.cG()
C.a.h(t,a)
try{s=u
s.a=P.jW(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jl:function(a){var u,t
for(u=0;t=$.cG(),u<t.length;++u)if(a===t[u])return!0
return!1},
lz:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.n],"$ab")
u=a.gN(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.v())return
r=H.k(u.gH(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.v()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gH(u);++s
if(!u.v()){if(s<=4){C.a.h(b,H.k(o))
return}q=H.k(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gH(u);++s
for(;u.v();o=n,n=m){m=u.gH(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.k(o)
q=H.k(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
jI:function(a){var u,t
u={}
if(P.jl(a))return"{...}"
t=new P.bh("")
try{C.a.h($.cG(),a)
t.a+="{"
u.a=!0
J.kN(a,new P.fr(u,t))
t.a+="}"}finally{u=$.cG()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
iw:function iw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cp:function cp(a){this.a=a
this.c=this.b=null},
ix:function ix(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fn:function fn(){},
u:function u(){},
fq:function fq(){},
fr:function fr(a,b){this.a=a
this.b=b},
a2:function a2(){},
iD:function iD(){},
dV:function dV(){},
bR:function bR(){},
cR:function cR(){},
eZ:function eZ(){},
hR:function hR(a){this.a=a},
hS:function hS(){},
iI:function iI(a){this.b=this.a=0
this.c=a},
kX:function(a){if(a instanceof H.bQ)return a.i(0)
return"Instance of '"+H.bz(a)+"'"},
l4:function(a,b,c,d){var u,t
H.C(b,d)
u=J.l_(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.U(u,t,b)
return H.m(u,"$ib",[d],"$ab")},
jb:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=J.bM(a);s.v();)C.a.h(t,H.C(s.gH(s),c))
if(b)return t
return H.m(J.fe(t),"$ib",u,"$ab")},
jd:function(a,b,c){var u,t
u=P.y
H.m(a,"$ih",[u],"$ah")
if(a.constructor===Array){H.m(a,"$iaD",[u],"$aaD")
t=a.length
c=P.jS(b,c,t,null,null,null)
return H.jR(b>0||c<t?C.a.dW(a,b,c):a)}return P.lm(a,b,c)},
lm:function(a,b,c){var u,t,s
H.m(a,"$ih",[P.y],"$ah")
u=J.bM(a)
for(t=0;t<b;++t)if(!u.v())throw H.f(P.aq(b,0,t,null,null))
s=[]
for(;u.v();)s.push(u.gH(u))
return H.jR(s)},
lh:function(a,b,c){return new H.fg(a,H.l0(a,!1,!0,!1))},
jW:function(a,b,c){var u=J.bM(b)
if(!u.v())return a
if(c.length===0){do a+=H.k(u.gH(u))
while(u.v())}else{a+=H.k(u.gH(u))
for(;u.v();)a=a+c+H.k(u.gH(u))}return a},
lw:function(a,b,c,d){var u,t,s,r,q,p
H.m(a,"$ib",[P.y],"$ab")
if(c===C.w){u=$.kK().b
u=u.test(b)}else u=!1
if(u)return b
t=C.A.hO(H.C(b,H.av(c,"bR",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.le(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
kU:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kV:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cS:function(a){if(a>=10)return""+a
return"0"+a},
j5:function(a,b,c,d,e,f){return new P.bb(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
f0:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aj(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kX(a)},
kO:function(a){return new P.aw(!1,null,null,a)},
j1:function(a,b,c){return new P.aw(!0,a,b,c)},
dk:function(a,b,c){return new P.bA(null,null,!0,a,b,"Value not in range")},
aq:function(a,b,c,d,e){return new P.bA(b,c,!0,a,d,"Invalid value")},
jS:function(a,b,c,d,e,f){if(0>a||a>c)throw H.f(P.aq(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.f(P.aq(b,a,c,"end",f))
return b}return c},
P:function(a,b,c,d,e){var u=H.a5(e==null?J.bN(b):e)
return new P.fd(b,u,!0,a,c,"Index out of range")},
ah:function(a){return new P.hP(a)},
k1:function(a){return new P.hN(a)},
bS:function(a){return new P.eM(a)},
t:function(a){return new P.dO(a)},
ad:function(a){H.m_(a)},
a4:function a4(){},
b9:function b9(a,b){this.a=a
this.b=b},
w:function w(){},
bb:function bb(a){this.a=a},
eW:function eW(){},
eX:function eX(){},
bc:function bc(){},
de:function de(){},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bA:function bA(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fd:function fd(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hP:function hP(a){this.a=a},
hN:function hN(a){this.a=a},
he:function he(a){this.a=a},
eM:function eM(a){this.a=a},
fR:function fR(){},
dr:function dr(){},
eR:function eR(a){this.a=a},
dO:function dO(a){this.a=a},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
y:function y(){},
h:function h(){},
aC:function aC(){},
b:function b(){},
J:function J(){},
F:function F(){},
Y:function Y(){},
K:function K(){},
ac:function ac(){},
n:function n(){},
bh:function bh(a){this.a=a},
lL:function(a){var u,t
u=J.S(a)
if(!!u.$ibd){t=u.gcO(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.em(a.data,a.height,a.width)},
lK:function(a){if(a instanceof P.em)return{data:a.a,height:a.b,width:a.c}
return a},
b1:function(a){var u,t,s,r,q
if(a==null)return
u=P.l1(P.n,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r){q=H.N(t[r])
u.U(0,q,a[q])}return u},
lJ:function(a,b){var u={}
a.I(0,new P.iP(u))
return u},
em:function em(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(a){this.a=a},
f6:function f6(a,b){this.a=a
this.b=b},
f7:function f7(){},
f8:function f8(){},
iy:function iy(){},
ab:function ab(){},
aS:function aS(){},
fj:function fj(){},
aZ:function aZ(){},
fP:function fP(){},
fU:function fU(){},
hm:function hm(){},
o:function o(){},
b_:function b_(){},
hA:function hA(){},
dT:function dT(){},
dU:function dU(){},
e2:function e2(){},
e3:function e3(){},
ed:function ed(){},
ee:function ee(){},
ek:function ek(){},
el:function el(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(a){this.a=a},
eH:function eH(){},
bp:function bp(){},
fQ:function fQ(){},
dH:function dH(){},
cL:function cL(){},
cY:function cY(){},
dj:function dj(){},
bB:function bB(){},
dn:function dn(){},
dt:function dt(){},
dA:function dA(){},
hd:function hd(){},
e9:function e9(){},
ea:function ea(){}},W={
j3:function(a,b){var u=document.createElement("canvas")
return u},
kW:function(a){H.p(a,"$ic")
return"wheel"},
iv:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k8:function(a,b,c,d){var u,t
u=W.iv(W.iv(W.iv(W.iv(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a0:function(a,b,c,d,e){var u=W.kg(new W.ij(c),W.j)
if(u!=null&&!0)J.kM(a,b,u,!1)
return new W.ii(a,b,u,!1,[e])},
kg:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.Q
if(u===C.k)return a
return u.cK(a,b)},
q:function q(){},
ez:function ez(){},
eB:function eB(){},
eC:function eC(){},
cJ:function cJ(){},
cK:function cK(){},
bq:function bq(){},
br:function br(){},
b8:function b8(){},
bT:function bT(){},
eN:function eN(){},
L:function L(){},
bU:function bU(){},
eO:function eO(){},
ay:function ay(){},
az:function az(){},
eP:function eP(){},
eQ:function eQ(){},
eS:function eS(){},
bV:function bV(){},
bW:function bW(){},
eT:function eT(){},
cT:function cT(){},
cU:function cU(){},
eU:function eU(){},
eV:function eV(){},
ie:function ie(a,b){this.a=a
this.b=b},
X:function X(){},
j:function j(){},
c:function c(){},
aA:function aA(){},
f4:function f4(){},
f5:function f5(){},
f9:function f9(){},
aB:function aB(){},
fc:function fc(){},
bw:function bw(){},
cZ:function cZ(){},
bd:function bd(){},
bY:function bY(){},
aF:function aF(){},
fo:function fo(){},
c3:function c3(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(a){this.a=a},
fD:function fD(){},
fE:function fE(a){this.a=a},
aH:function aH(){},
fF:function fF(){},
a1:function a1(){},
id:function id(a){this.a=a},
D:function D(){},
c6:function c6(){},
aI:function aI(){},
fT:function fT(){},
h_:function h_(){},
h0:function h0(a){this.a=a},
h2:function h2(){},
aJ:function aJ(){},
hb:function hb(){},
aK:function aK(){},
hc:function hc(){},
aL:function aL(){},
hg:function hg(){},
hh:function hh(a){this.a=a},
ar:function ar(){},
aM:function aM(){},
as:function as(){},
ho:function ho(){},
hp:function hp(){},
hv:function hv(){},
aN:function aN(){},
at:function at(){},
hy:function hy(){},
hz:function hz(){},
bj:function bj(){},
hQ:function hQ(){},
i4:function i4(){},
i5:function i5(){},
aQ:function aQ(){},
cn:function cn(){},
ig:function ig(){},
dJ:function dJ(){},
iu:function iu(){},
e_:function e_(){},
iE:function iE(){},
iF:function iF(){},
ih:function ih(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ji:function ji(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ii:function ii(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ij:function ij(a){this.a=a},
v:function v(){},
cX:function cX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dI:function dI(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e0:function e0(){},
e1:function e1(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
cu:function cu(){},
cv:function cv(){},
e7:function e7(){},
e8:function e8(){},
ec:function ec(){},
ef:function ef(){},
eg:function eg(){},
cw:function cw(){},
cx:function cx(){},
ei:function ei(){},
ej:function ej(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){}},O={
j4:function(a){var u=new O.U([a])
u.c7(a)
return u},
U:function U(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
c2:function c2(){this.b=this.a=null},
d9:function d9(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fv:function fv(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c1:function c1(){},
fw:function fw(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aG:function aG(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fy:function fy(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fz:function fz(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bC:function bC(){}},E={
lj:function(a,b){var u=new E.fW(a,b)
u.e1(a,b)
return u},
ln:function(a,b,c,d,e){var u,t,s,r
u=J.S(a)
if(!!u.$ibq)return E.jX(a,!0,!0,!0,!1)
t=W.j3(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcM(a).h(0,t)
r=E.jX(t,!0,!0,!0,!1)
r.a=a
return r},
jX:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.dx()
t=H.p(C.q.bY(a,"webgl2",P.l2(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibB")
if(t==null)H.r(P.t("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.lj(t,a)
s=new T.hs(t)
s.b=H.a5((t&&C.b).bZ(t,3379))
s.c=H.a5(C.b.bZ(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.dE(a)
r=new X.fi()
r.c=new X.aW(!1,!1,!1)
r.sfG(P.l3(null,null,null,P.y))
s.b=r
r=new X.fG(s)
r.f=0
r.r=V.dh()
r.x=V.dh()
r.Q=1
r.ch=1
s.c=r
r=new X.fp(s)
r.r=0
r.x=V.dh()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.hx(s)
r.e=0
r.f=V.dh()
r.r=V.dh()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.seA(H.d([],[[P.cb,P.K]]))
r=s.z
q=document
p=W.a1
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.a0(q,"contextmenu",H.l(s.gf3(),o),!1,p))
r=s.z
n=W.j
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.a0(a,"focus",H.l(s.gf9(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.a0(a,"blur",H.l(s.geY(),m),!1,n))
r=s.z
l=W.aF
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.a0(q,"keyup",H.l(s.gfd(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.a0(q,"keydown",H.l(s.gfb(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.a0(a,"mousedown",H.l(s.gfh(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a0(a,"mouseup",H.l(s.gfl(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a0(a,"mousemove",H.l(s.gfj(),o),!1,p))
l=s.z
k=W.aQ;(l&&C.a).h(l,W.a0(a,H.N(W.kW(a)),H.l(s.gfn(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.a0(q,"mousemove",H.l(s.gf5(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.a0(q,"mouseup",H.l(s.gf7(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.a0(q,"pointerlockchange",H.l(s.gfp(),m),!1,n))
n=s.z
m=W.at
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.a0(a,"touchstart",H.l(s.gfD(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a0(a,"touchend",H.l(s.gfz(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a0(a,"touchmove",H.l(s.gfB(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.b9(Date.now(),!1)
u.cy=0
u.cC()
return u},
eI:function eI(){},
aa:function aa(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fW:function fW(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fX:function fX(a){this.a=a},
fY:function fY(a){this.a=a},
fZ:function fZ(a){this.a=a},
dx:function dx(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hu:function hu(a){this.a=a}},Z={
jh:function(a,b,c){var u
H.m(c,"$ib",[P.y],"$ab")
u=a.createBuffer()
C.b.a9(a,b,u)
C.b.cL(a,b,new Int16Array(H.cz(c)),35044)
C.b.a9(a,b,null)
return new Z.dF(b,u)},
al:function(a){return new Z.aP(a)},
dF:function dF(a,b){this.a=a
this.b=b},
cM:function cM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
i6:function i6(a){this.a=a},
cN:function cN(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a){this.a=a}},D={
ao:function(){var u=new D.bu()
u.sa7(null)
u.saC(null)
u.c=null
u.d=0
return u},
eL:function eL(){},
bu:function bu(){var _=this
_.d=_.c=_.b=_.a=null},
f1:function f1(a){this.a=a},
f2:function f2(a){this.a=a},
B:function B(a){this.a=a
this.b=null},
bZ:function bZ(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
c_:function c_(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
O:function O(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
ba:function ba(){var _=this
_.d=_.c=_.b=_.a=null},
V:function V(){},
d5:function d5(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dg:function dg(){},
dq:function dq(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){}},X={cO:function cO(a,b){this.a=a
this.b=b},d4:function d4(a,b){this.a=a
this.b=b},fi:function fi(){var _=this
_.d=_.c=_.b=_.a=null},fp:function fp(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aW:function aW(a,b,c){this.a=a
this.b=b
this.c=c},fG:function fG(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hx:function hx(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dE:function dE(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kY:function(a,b,c,d,e,f,g){var u,t
u=new X.fb()
t=new V.bs(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.jT
if(t==null){t=V.li(0,0,1,1)
$.jT=t}u.r=t
return u},
cP:function cP(){},
fb:function fb(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
df:function df(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ds:function ds(){}},V={
jw:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.i.dS(a-b,u)
return(a<0?a+u:a)+b},
H:function(a,b,c){if(a==null)return C.j.a_("null",c)
return C.j.a_(C.i.dB(Math.abs(a-0)<$.I().a?0:a,b),c+b+1)},
bH:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.w],"$ab")
u=H.d([],[P.n])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.z)(a),++r){q=V.H(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.U(u,p,C.j.a_(u[p],s))}return u},
jv:function(a,b){return C.i.iN(Math.pow(b,C.E.bM(Math.log(H.lI(a))/Math.log(b))))},
jc:function(){var u=$.jK
if(u==null){u=V.aV(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.jK=u}return u},
aV:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jJ:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.D(0,Math.sqrt(c.K(c)))
t=b.aE(u)
s=t.D(0,Math.sqrt(t.K(t)))
r=u.aE(s)
q=new V.M(a.a,a.b,a.c)
p=s.aA(0).K(q)
o=r.aA(0).K(q)
n=u.aA(0).K(q)
return V.aV(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
dh:function(){var u=$.jO
if(u==null){u=new V.ae(0,0)
$.jO=u}return u},
jP:function(){var u=$.c7
if(u==null){u=new V.ap(0,0,0)
$.c7=u}return u},
li:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dl(a,b,c,d)},
cm:function(){var u=$.k5
if(u==null){u=new V.M(0,0,0)
$.k5=u}return u},
k6:function(){var u=$.k4
if(u==null){u=new V.M(0,1,0)
$.k4=u}return u},
lo:function(){var u=$.hT
if(u==null){u=new V.M(0,0,1)
$.hT=u}return u},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
bs:function bs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f_:function f_(a){this.a=a},
da:function da(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a7:function a7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ae:function ae(a,b){this.a=a
this.b=b},
ap:function ap(a,b,c){this.a=a
this.b=b
this.c=c},
di:function di(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dl:function dl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b0:function b0(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function(a){var u=new V.h3()
u.e2(a)
return u},
eA:function eA(){},
aU:function aU(){},
d8:function d8(){},
aY:function aY(){this.a=null},
h3:function h3(){this.a=null},
ca:function ca(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dy:function dy(a,b,c){this.a=a
this.b=b
this.c=c},
cd:function cd(a,b){this.a=a
this.b=b
this.c=null},
hw:function hw(){this.c=this.b=this.a=null},
ce:function ce(a){this.b=a
this.a=this.c=null},
m2:function(a){P.jZ(C.B,new V.j_(a))},
ll:function(a,b){var u=new V.h7()
u.e4(a,!0)
return u},
j_:function j_(a){this.a=a},
h7:function h7(){this.b=this.a=null},
h9:function h9(a){this.a=a},
h8:function h8(a){this.a=a}},U={
jF:function(a){var u=new U.cQ()
u.a=a
return u},
cQ:function cQ(){this.b=this.a=null},
bx:function bx(){},
dm:function dm(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cV:function cV(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
l5:function(a,b){var u,t
u=a.a2
t=new A.fu(b,u)
t.e3(b,u)
t.e0(a,b)
return t},
jf:function(a,b,c,d,e){var u=new A.hF(a,b,c,e)
u.f=d
u.shd(P.l4(d,0,!1,P.y))
return u},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
eD:function eD(a){this.a=a},
fu:function fu(a,b){var _=this
_.aX=_.cS=_.aW=_.a2=_.aa=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.d7=_.bG=_.d6=_.b9=_.d5=_.d4=_.b8=_.b7=_.d3=_.d2=_.b6=_.b5=_.b4=_.d1=_.d0=_.b3=_.d_=_.cZ=_.b2=_.cY=_.cX=_.b1=_.b0=_.cW=_.cV=_.b_=_.aZ=_.cU=_.cT=_.aY=null
_.bL=_.dc=_.bK=_.da=_.bJ=_.d9=_.bI=_.d8=_.bH=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fx:function fx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aa=b3
_.a2=b4
_.aW=b5},
cf:function cf(a,b,c){this.a=a
this.b=b
this.c=c},
cj:function cj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
ch:function ch(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ck:function ck(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j},
ci:function ci(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j},
cl:function cl(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.cy=n},
c9:function c9(){},
bt:function bt(a,b){this.a=a
this.b=b},
dz:function dz(){},
hL:function hL(a){this.a=a},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hH:function hH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hI:function hI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hF:function hF(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hG:function hG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hJ:function hJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hM:function hM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
iL:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cy:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.M(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.M(o+a3,n+a1,m+a2)
u.b=l
k=new V.M(o-a3,n-a1,m-a2)
u.c=k
j=new V.M(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.iL(t)
f=F.iL(u.b)
e=F.m4(d,a0,new F.iK(u,F.iL(u.c),F.iL(u.d),f,g,c),b)
if(e!=null)a.bR(e)},
m4:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,{func:1,ret:-1,args:[F.ai,P.w,P.w]})
if(a<1)return
if(b<1)return
u=F.jV()
t=H.d([],[F.ai])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.jg(null,null,new V.bs(p,0,0,1),null,null,new V.ae(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.bD(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.jg(null,null,new V.bs(j,i,h,1),null,null,new V.ae(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bD(d))}}u.d.hC(a+1,b+1,t)
return u},
cW:function(a,b,c){var u,t
u=new F.a_()
t=a.a
if(t==null)H.r(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.t("May not create a face with vertices attached to different shapes."))
u.fV(a)
u.fW(b)
u.fX(c)
C.a.h(u.a.a.d.b,u)
u.a.a.T()
return u},
jV:function(){var u,t
u=new F.dp()
t=new F.hU(u)
t.b=!1
t.she(H.d([],[F.ai]))
u.a=t
t=new F.h6(u)
t.sbo(H.d([],[F.bg]))
u.b=t
t=new F.h5(u)
t.seN(H.d([],[F.aT]))
u.c=t
t=new F.h4(u)
t.seB(H.d([],[F.a_]))
u.d=t
u.e=null
return u},
jg:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ai()
t=new F.i1(u)
t.sbo(H.d([],[F.bg]))
u.b=t
t=new F.hY(u)
s=[F.aT]
t.seO(H.d([],s))
t.seP(H.d([],s))
u.c=t
t=new F.hV(u)
s=[F.a_]
t.seC(H.d([],s))
t.seD(H.d([],s))
t.seE(H.d([],s))
u.d=t
h=$.kH()
u.e=0
t=$.b5()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.b4().a)!==0?e:null
u.x=(s&$.b3().a)!==0?b:null
u.y=(s&$.b6().a)!==0?f:null
u.z=(s&$.b7().a)!==0?g:null
u.Q=(s&$.kI().a)!==0?c:null
u.ch=(s&$.bL().a)!==0?i:0
u.cx=(s&$.b2().a)!==0?a:null
return u},
iK:function iK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a_:function a_(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f3:function f3(){},
ha:function ha(){},
aT:function aT(){this.b=this.a=null},
fk:function fk(){},
hE:function hE(){},
bg:function bg(){this.a=null},
dp:function dp(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h4:function h4(a){this.a=a
this.b=null},
h5:function h5(a){this.a=a
this.b=null},
h6:function h6(a){this.a=a
this.b=null},
ai:function ai(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i3:function i3(a){this.a=a},
i2:function i2(a){this.a=a},
hU:function hU(a){this.a=a
this.c=this.b=null},
hV:function hV(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(a,b){this.a=a
this.b=b},
hY:function hY(a){this.a=a
this.c=this.b=null},
i_:function i_(){},
hZ:function hZ(){},
i0:function i0(){},
fN:function fN(){},
i1:function i1(a){this.a=a
this.b=null}},T={cc:function cc(){},bi:function bi(){},hq:function hq(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},hr:function hr(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},hs:function hs(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},ht:function ht(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
kp:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=V.ll("Test 039",!0)
t=W.j3(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.l.S(u.a,t)
s=[P.n]
u.cI(H.d(["Test of an animated texture on a square."],s))
u.cI(H.d(["\xab[Back to Tests|../]"],s))
r=C.C.dN(document,"testCanvas")
if(r==null)H.r(P.t("Failed to find an element with the identifier, testCanvas."))
q=E.ln(r,!0,!0,!0,!1)
p=new E.aa()
p.a=""
p.b=!0
u=E.aa
p.ser(0,O.j4(u))
p.y.bd(p.gih(),p.gik())
p.z=null
p.Q=null
p.ch=null
p.cx=null
p.cy=null
p.db=null
p.dx=null
p.dy=null
p.fr=null
p.fx=null
p.sc0(0,null)
p.saI(null)
o=F.jV()
F.cy(o,null,null,1,1,1,0,0,1)
F.cy(o,null,null,1,1,0,1,0,3)
F.cy(o,null,null,1,1,0,0,1,2)
F.cy(o,null,null,1,1,-1,0,0,0)
F.cy(o,null,null,1,1,0,-1,0,0)
F.cy(o,null,null,1,1,0,0,-1,3)
o.at()
o.ig(new F.hZ(),new F.fN())
p.sc0(0,o)
s=new U.dm()
s.a=0
s.b=0
s.c=0
s.d=0
s.e=0
s.f=0
s.r=0
s.sdG(0)
s.sdn(0,0)
s.sdu(0)
n=s.d
if(!(Math.abs(n-0.1)<$.I().a)){s.d=0.1
n=new D.O("deltaYaw",n,0.1,s,[P.w])
n.b=!0
s.aq(n)}n=s.e
if(!(Math.abs(n-0.21)<$.I().a)){s.e=0.21
n=new D.O("deltaPitch",n,0.21,s,[P.w])
n.b=!0
s.aq(n)}n=s.f
if(!(Math.abs(n-0.32)<$.I().a)){s.f=0.32
n=new D.O("deltaRoll",n,0.32,s,[P.w])
n.b=!0
s.aq(n)}p.saI(s)
s=T.bi
n=P.jb([q.f.aw("../resources/diceColor/posx.png"),q.f.aw("../resources/diceColor/posz.png"),q.f.aw("../resources/diceColor/negx.png"),q.f.aw("../resources/diceColor/negy.png"),q.f.aw("../resources/diceColor/posy.png"),q.f.aw("../resources/diceColor/negz.png")],!0,s)
m=new T.hq()
m.a=0
m.b=0
m.sh7(H.m(n,"$ib",[s],"$ab"))
m.f=null
P.jZ(P.j5(0,0,0,500,0,0),new N.iX(m))
l=new O.d9()
l.seo(O.j4(V.a7))
l.e.bd(l.geU(),l.geW())
s=new O.aG(l,"emission")
s.c=C.c
s.f=new V.Z(0,0,0)
l.f=s
s=new O.aG(l,"ambient")
s.c=C.c
s.f=new V.Z(0,0,0)
l.r=s
s=new O.aG(l,"diffuse")
s.c=C.c
s.f=new V.Z(0,0,0)
l.x=s
s=new O.aG(l,"invDiffuse")
s.c=C.c
s.f=new V.Z(0,0,0)
l.y=s
s=new O.fz(l,"specular")
s.c=C.c
s.f=new V.Z(0,0,0)
s.ch=100
l.z=s
s=new O.fw(l,"bump")
s.c=C.c
l.Q=s
l.ch=null
s=new O.aG(l,"reflect")
s.c=C.c
s.f=new V.Z(0,0,0)
l.cx=s
s=new O.fy(l,"refract")
s.c=C.c
s.f=new V.Z(0,0,0)
s.ch=1
l.cy=s
s=new O.fv(l,"alpha")
s.c=C.c
s.f=1
l.db=s
s=new D.d5()
s.c7(D.V)
s.sey(H.d([],[D.ba]))
s.sfF(H.d([],[D.dg]))
s.sh2(H.d([],[D.dq]))
s.sha(H.d([],[D.du]))
s.shb(H.d([],[D.dv]))
s.shc(H.d([],[D.dw]))
s.Q=null
s.ch=null
s.c_(s.geS(),s.gft(),s.gfv())
l.dx=s
n=s.Q
if(n==null){n=D.ao()
s.Q=n
s=n}else s=n
s.h(0,l.gfM())
s=l.dx
n=s.ch
if(n==null){n=D.ao()
s.ch=n
s=n}else s=n
s.h(0,l.gaQ())
l.dy=null
s=l.dx
k=V.k6()
n=U.jF(V.jJ(V.jP(),k,new V.M(1,-1,-3)))
j=new V.Z(1,1,1)
i=new D.ba()
i.c=new V.Z(1,1,1)
i.a=V.lo()
h=i.b
i.b=n
n.gu().h(0,i.ge6())
n=new D.O("mover",h,i.b,i,[U.bx])
n.b=!0
i.ad(n)
if(!i.c.p(0,j)){h=i.c
i.c=j
n=new D.O("color",h,j,i,[V.Z])
n.b=!0
i.ad(n)}s.h(0,i)
s=l.r
s.sak(0,new V.Z(0.2,0.2,0.2))
s=l.x
s.sak(0,new V.Z(0.8,0.8,0.8))
l.r.sdz(m)
l.x.sdz(m)
s=new M.cV()
s.se8(0,O.j4(u))
s.d.bd(s.gf_(),s.gf1())
s.e=null
s.f=null
s.r=null
s.x=null
g=X.kY(!0,!0,!1,null,2000,null,0)
f=new X.df()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.saI(null)
u=f.c
if(!(Math.abs(u-1.0471975511965976)<$.I().a)){f.c=1.0471975511965976
u=new D.O("fov",u,1.0471975511965976,f,[P.w])
u.b=!0
f.ao(u)}u=f.d
if(!(Math.abs(u-0.1)<$.I().a)){f.d=0.1
u=new D.O("near",u,0.1,f,[P.w])
u.b=!0
f.ao(u)}u=f.e
if(!(Math.abs(u-2000)<$.I().a)){f.e=2000
u=new D.O("far",u,2000,f,[P.w])
u.b=!0
f.ao(u)}u=s.a
if(u!==f){if(u!=null)u.gu().A(0,s.ga6())
h=s.a
s.a=f
f.gu().h(0,s.ga6())
u=new D.O("camera",h,s.a,s,[X.cP])
u.b=!0
s.ae(u)}u=s.b
if(u!==g){if(u!=null)u.gu().A(0,s.ga6())
h=s.b
s.b=g
g.gu().h(0,s.ga6())
u=new D.O("target",h,s.b,s,[X.ds])
u.b=!0
s.ae(u)}s.sdw(null)
s.sdw(l)
s.d.h(0,p)
s.a.saI(U.jF(V.aV(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
u=q.d
if(u!==s){if(u!=null)u.gu().A(0,q.gc8())
q.d=s
s.gu().h(0,q.gc8())
q.c9()}V.m2(q)},
iX:function iX(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.j9.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gF:function(a){return H.c8(a)},
i:function(a){return"Instance of '"+H.bz(a)+"'"}}
J.ff.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$ia4:1}
J.d1.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0},
$iF:1}
J.d3.prototype={
gF:function(a){return 0},
i:function(a){return String(a)}}
J.fS.prototype={}
J.dB.prototype={}
J.bf.prototype={
i:function(a){var u=a[$.kw()]
if(u==null)return this.dY(a)
return"JavaScript function for "+H.k(J.aj(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ij6:1}
J.aD.prototype={
h:function(a,b){H.C(b,H.x(a,0))
if(!!a.fixed$length)H.r(P.ah("add"))
a.push(b)},
iz:function(a,b){var u
if(!!a.fixed$length)H.r(P.ah("removeAt"))
u=a.length
if(b>=u)throw H.f(P.dk(b,null,null))
return a.splice(b,1)[0]},
A:function(a,b){var u
if(!!a.fixed$length)H.r(P.ah("remove"))
for(u=0;u<a.length;++u)if(J.T(a[u],b)){a.splice(u,1)
return!0}return!1},
I:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.bS(a))}},
t:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.U(u,t,H.k(a[t]))
return u.join(b)},
i9:function(a){return this.t(a,"")},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
dW:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aq(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aq(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.x(a,0)])
return H.d(a.slice(b,c),[H.x(a,0)])},
gi3:function(a){if(a.length>0)return a[0]
throw H.f(H.jG())},
gbO:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.jG())},
al:function(a,b){var u
for(u=0;u<a.length;++u)if(J.T(a[u],b))return!0
return!1},
i:function(a){return P.j7(a,"[","]")},
gN:function(a){return new J.ak(a,a.length,0,[H.x(a,0)])},
gF:function(a){return H.c8(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.ah("set length"))
if(b<0)throw H.f(P.aq(b,0,null,"newLength",null))
a.length=b},
U:function(a,b,c){H.C(c,H.x(a,0))
if(!!a.immutable$list)H.r(P.ah("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cC(a,b))
a[b]=c},
$ih:1,
$ib:1}
J.j8.prototype={}
J.ak.prototype={
gH:function(a){return this.d},
v:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.f(H.z(u))
s=this.c
if(s>=t){this.sco(null)
return!1}this.sco(u[s]);++this.c
return!0},
sco:function(a){this.d=H.C(a,H.x(this,0))},
$iaC:1}
J.d2.prototype={
iN:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.ah(""+a+".toInt()"))},
bM:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.ah(""+a+".floor()"))},
a4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.ah(""+a+".round()"))},
dB:function(a,b){var u,t
if(b>20)throw H.f(P.aq(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
dS:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
e_:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cE(a,b)},
V:function(a,b){return(a|0)===a?a/b|0:this.cE(a,b)},
cE:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.ah("Result of truncating division is "+H.k(u)+": "+H.k(a)+" ~/ "+b))},
aU:function(a,b){var u
if(a>0)u=this.h1(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h1:function(a,b){return b>31?0:a>>>b},
$iw:1,
$iY:1}
J.d0.prototype={$iy:1}
J.d_.prototype={}
J.c0.prototype={
bC:function(a,b){if(b<0)throw H.f(H.cC(a,b))
if(b>=a.length)H.r(H.cC(a,b))
return a.charCodeAt(b)},
aR:function(a,b){if(b>=a.length)throw H.f(H.cC(a,b))
return a.charCodeAt(b)},
J:function(a,b){if(typeof b!=="string")throw H.f(P.j1(b,null,null))
return a+b},
c3:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.dk(b,null,null))
if(b>c)throw H.f(P.dk(b,null,null))
if(c>a.length)throw H.f(P.dk(c,null,null))
return a.substring(b,c)},
c2:function(a,b){return this.c3(a,b,null)},
R:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.z)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ip:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.R(c,u)+a},
a_:function(a,b){return this.ip(a,b," ")},
i:function(a){return a},
gF:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ijM:1,
$in:1}
H.W.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.j.bC(this.a,b)},
$adD:function(){return[P.y]},
$au:function(){return[P.y]},
$ah:function(){return[P.y]},
$ab:function(){return[P.y]}}
H.eY.prototype={}
H.d7.prototype={
gH:function(a){return this.d},
v:function(){var u,t,s,r
u=this.a
t=J.jq(u)
s=t.gk(u)
if(this.b!==s)throw H.f(P.bS(u))
r=this.c
if(r>=s){this.saB(null)
return!1}this.saB(t.w(u,r));++this.c
return!0},
saB:function(a){this.d=H.C(a,H.x(this,0))},
$iaC:1}
H.fs.prototype={
gN:function(a){return new H.ft(J.bM(this.a),this.b,this.$ti)},
gk:function(a){return J.bN(this.a)},
w:function(a,b){return this.b.$1(J.jA(this.a,b))},
$ah:function(a,b){return[b]}}
H.ft.prototype={
v:function(){var u=this.b
if(u.v()){this.saB(this.c.$1(u.gH(u)))
return!0}this.saB(null)
return!1},
gH:function(a){return this.a},
saB:function(a){this.a=H.C(a,H.x(this,1))},
$aaC:function(a,b){return[b]}}
H.i7.prototype={
gN:function(a){return new H.i8(J.bM(this.a),this.b,this.$ti)}}
H.i8.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gH(u)))return!0
return!1},
gH:function(a){var u=this.a
return u.gH(u)}}
H.bv.prototype={}
H.dD.prototype={}
H.dC.prototype={}
H.fV.prototype={}
H.hB.prototype={
Z:function(a){var u,t,s
u=new RegExp(this.a).exec(a)
if(u==null)return
t=Object.create(null)
s=this.b
if(s!==-1)t.arguments=u[s+1]
s=this.c
if(s!==-1)t.argumentsExpr=u[s+1]
s=this.d
if(s!==-1)t.expr=u[s+1]
s=this.e
if(s!==-1)t.method=u[s+1]
s=this.f
if(s!==-1)t.receiver=u[s+1]
return t}}
H.fO.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fh.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.k(this.a)+")"}}
H.hO.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j0.prototype={
$1:function(a){if(!!J.S(a).$ibc)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.eb.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iac:1}
H.bQ.prototype={
i:function(a){return"Closure '"+H.bz(this).trim()+"'"},
$ij6:1,
giU:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hn.prototype={}
H.hf.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bK(u)+"'"}}
H.bO.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bO))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gF:function(a){var u,t
u=this.c
if(u==null)t=H.c8(this.a)
else t=typeof u!=="object"?J.cH(u):H.c8(u)
return(t^H.c8(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bz(u)+"'")}}
H.hD.prototype={
i:function(a){return this.a}}
H.eK.prototype={
i:function(a){return this.a}}
H.h1.prototype={
i:function(a){return"RuntimeError: "+H.k(this.a)}}
H.aE.prototype={
gk:function(a){return this.a},
gam:function(a){return new H.d6(this,[H.x(this,0)])},
cN:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.cl(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.cl(t,b)}else return this.i7(b)},
i7:function(a){var u=this.d
if(u==null)return!1
return this.bN(this.bi(u,J.cH(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.aS(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.aS(r,b)
s=t==null?null:t.b
return s}else return this.i8(b)},
i8:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bi(u,J.cH(a)&0x3ffffff)
s=this.bN(t,a)
if(s<0)return
return t[s].b},
U:function(a,b,c){var u,t,s,r,q,p
H.C(b,H.x(this,0))
H.C(c,H.x(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bm()
this.b=u}this.cd(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bm()
this.c=t}this.cd(t,b,c)}else{s=this.d
if(s==null){s=this.bm()
this.d=s}r=J.cH(b)&0x3ffffff
q=this.bi(s,r)
if(q==null)this.bt(s,r,[this.bn(b,c)])
else{p=this.bN(q,b)
if(p>=0)q[p].b=c
else q.push(this.bn(b,c))}}},
I:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.f(P.bS(this))
u=u.c}},
cd:function(a,b,c){var u
H.C(b,H.x(this,0))
H.C(c,H.x(this,1))
u=this.aS(a,b)
if(u==null)this.bt(a,b,this.bn(b,c))
else u.b=c},
bn:function(a,b){var u,t
u=new H.fl(H.C(a,H.x(this,0)),H.C(b,H.x(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
bN:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1},
i:function(a){return P.jI(this)},
aS:function(a,b){return a[b]},
bi:function(a,b){return a[b]},
bt:function(a,b,c){a[b]=c},
ex:function(a,b){delete a[b]},
cl:function(a,b){return this.aS(a,b)!=null},
bm:function(){var u=Object.create(null)
this.bt(u,"<non-identifier-key>",u)
this.ex(u,"<non-identifier-key>")
return u}}
H.fl.prototype={}
H.d6.prototype={
gk:function(a){return this.a.a},
gN:function(a){var u,t
u=this.a
t=new H.fm(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fm.prototype={
gH:function(a){return this.d},
v:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.bS(u))
else{u=this.c
if(u==null){this.scc(null)
return!1}else{this.scc(u.a)
this.c=this.c.c
return!0}}},
scc:function(a){this.d=H.C(a,H.x(this,0))},
$iaC:1}
H.iT.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.iU.prototype={
$2:function(a,b){return this.a(a,b)},
$S:32}
H.iV.prototype={
$1:function(a){return this.a(H.N(a))},
$S:31}
H.fg.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ijM:1}
H.c5.prototype={$imp:1}
H.db.prototype={
gk:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.c4.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$abv:function(){return[P.w]},
$au:function(){return[P.w]},
$ih:1,
$ah:function(){return[P.w]},
$ib:1,
$ab:function(){return[P.w]}}
H.dc.prototype={
$abv:function(){return[P.y]},
$au:function(){return[P.y]},
$ih:1,
$ah:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.fH.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.fI.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.fJ.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.fK.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.fL.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.dd.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$imq:1}
H.fM.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.cq.prototype={}
H.cr.prototype={}
H.cs.prototype={}
H.ct.prototype={}
P.ia.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:18}
P.i9.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:30}
P.ib.prototype={
$0:function(){this.a.$0()},
$S:1}
P.ic.prototype={
$0:function(){this.a.$0()},
$S:1}
P.eh.prototype={
eg:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bG(new P.iH(this,b),0),a)
else throw H.f(P.ah("`setTimeout()` not found."))},
eh:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bG(new P.iG(this,a,Date.now(),b),0),a)
else throw H.f(P.ah("Periodic timer."))},
$iaf:1}
P.iH.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:2}
P.iG.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.e_(r,s)}u.c=t
this.d.$1(u)},
$S:1}
P.aR.prototype={
ie:function(a){if(this.c!==6)return!0
return this.b.b.bW(H.l(this.d,{func:1,ret:P.a4,args:[P.K]}),a.a,P.a4,P.K)},
i6:function(a){var u,t,s,r
u=this.e
t=P.K
s={futureOr:1,type:H.x(this,1)}
r=this.b.b
if(H.ey(u,{func:1,args:[P.K,P.ac]}))return H.jp(r.iG(u,a.a,a.b,null,t,P.ac),s)
else return H.jp(r.bW(H.l(u,{func:1,args:[P.K]}),a.a,null,t),s)}}
P.am.prototype={
dA:function(a,b,c){var u,t,s,r
u=H.x(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.Q
if(t!==C.k){t.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.lB(b,t)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.am(0,$.Q,[c])
r=b==null?1:3
this.ce(new P.aR(s,r,a,b,[u,c]))
return s},
iM:function(a,b){return this.dA(a,null,b)},
ce:function(a){var u,t
u=this.a
if(u<=1){a.a=H.p(this.c,"$iaR")
this.c=a}else{if(u===2){t=H.p(this.c,"$iam")
u=t.a
if(u<4){t.ce(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.iO(null,null,u,H.l(new P.ik(this,a),{func:1,ret:-1}))}},
cA:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.p(this.c,"$iaR")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.p(this.c,"$iam")
t=p.a
if(t<4){p.cA(a)
return}this.a=t
this.c=p.c}u.a=this.aT(a)
t=this.b
t.toString
P.iO(null,null,t,H.l(new P.ip(u,this),{func:1,ret:-1}))}},
bq:function(){var u=H.p(this.c,"$iaR")
this.c=null
return this.aT(u)},
aT:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cg:function(a){var u,t,s
u=H.x(this,0)
H.jp(a,{futureOr:1,type:u})
t=this.$ti
if(H.ex(a,"$ibX",t,"$abX"))if(H.ex(a,"$iam",t,null))P.k7(a,this)
else P.lt(a,this)
else{s=this.bq()
H.C(a,u)
this.a=4
this.c=a
P.co(this,s)}},
ci:function(a,b){var u
H.p(b,"$iac")
u=this.bq()
this.a=8
this.c=new P.a6(a,b)
P.co(this,u)},
$ibX:1}
P.ik.prototype={
$0:function(){P.co(this.a,this.b)},
$S:1}
P.ip.prototype={
$0:function(){P.co(this.b,this.a.a)},
$S:1}
P.il.prototype={
$1:function(a){var u=this.a
u.a=0
u.cg(a)},
$S:18}
P.im.prototype={
$2:function(a,b){H.p(b,"$iac")
this.a.ci(a,b)},
$1:function(a){return this.$2(a,null)},
$S:28}
P.io.prototype={
$0:function(){this.a.ci(this.b,this.c)},
$S:1}
P.is.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.dv(H.l(r.d,{func:1}),null)}catch(q){t=H.bo(q)
s=H.bI(q)
if(this.d){r=H.p(this.a.a.c,"$ia6").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.p(this.a.a.c,"$ia6")
else p.b=new P.a6(t,s)
p.a=!0
return}if(!!J.S(u).$ibX){if(u instanceof P.am&&u.a>=4){if(u.a===8){r=this.b
r.b=H.p(u.c,"$ia6")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.iM(new P.it(o),null)
r.a=!1}},
$S:2}
P.it.prototype={
$1:function(a){return this.a},
$S:27}
P.ir.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.x(s,0)
q=H.C(this.c,r)
p=H.x(s,1)
this.a.b=s.b.b.bW(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bo(o)
t=H.bI(o)
s=this.a
s.b=new P.a6(u,t)
s.a=!0}},
$S:2}
P.iq.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.p(this.a.a.c,"$ia6")
r=this.c
if(r.ie(u)&&r.e!=null){q=this.b
q.b=r.i6(u)
q.a=!1}}catch(p){t=H.bo(p)
s=H.bI(p)
r=H.p(this.a.a.c,"$ia6")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a6(t,s)
n.a=!0}},
$S:2}
P.dG.prototype={}
P.hi.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.am(0,$.Q,[P.y])
u.a=0
s=H.x(this,0)
r=H.l(new P.hk(u,this),{func:1,ret:-1,args:[s]})
H.l(new P.hl(u,t),{func:1,ret:-1})
W.a0(this.a,this.b,r,!1,s)
return t}}
P.hk.prototype={
$1:function(a){H.C(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.x(this.b,0)]}}}
P.hl.prototype={
$0:function(){this.b.cg(this.a.a)},
$S:1}
P.cb.prototype={}
P.hj.prototype={}
P.af.prototype={}
P.a6.prototype={
i:function(a){return H.k(this.a)},
$ibc:1}
P.iJ.prototype={$imD:1}
P.iN.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.de()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.f(u)
s=H.f(u)
s.stack=t.i(0)
throw s},
$S:1}
P.iz.prototype={
iH:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
try{if(C.k===$.Q){a.$0()
return}P.kc(null,null,this,a,-1)}catch(s){u=H.bo(s)
t=H.bI(s)
P.iM(null,null,this,u,H.p(t,"$iac"))}},
iI:function(a,b,c){var u,t,s
H.l(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.k===$.Q){a.$1(b)
return}P.kd(null,null,this,a,b,-1,c)}catch(s){u=H.bo(s)
t=H.bI(s)
P.iM(null,null,this,u,H.p(t,"$iac"))}},
hE:function(a,b){return new P.iB(this,H.l(a,{func:1,ret:b}),b)},
by:function(a){return new P.iA(this,H.l(a,{func:1,ret:-1}))},
cK:function(a,b){return new P.iC(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
dv:function(a,b){H.l(a,{func:1,ret:b})
if($.Q===C.k)return a.$0()
return P.kc(null,null,this,a,b)},
bW:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.Q===C.k)return a.$1(b)
return P.kd(null,null,this,a,b,c,d)},
iG:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.Q===C.k)return a.$2(b,c)
return P.lC(null,null,this,a,b,c,d,e,f)}}
P.iB.prototype={
$0:function(){return this.a.dv(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iA.prototype={
$0:function(){return this.a.iH(this.b)},
$S:2}
P.iC.prototype={
$1:function(a){var u=this.c
return this.a.iI(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iw.prototype={
gN:function(a){return P.k9(this,this.r,H.x(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u
H.C(b,H.x(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.ka()
this.c=u}return this.es(u,b)}else return this.ej(0,b)},
ej:function(a,b){var u,t,s
H.C(b,H.x(this,0))
u=this.d
if(u==null){u=P.ka()
this.d=u}t=this.cj(b)
s=u[t]
if(s==null)u[t]=[this.bf(b)]
else{if(this.cp(s,b)>=0)return!1
s.push(this.bf(b))}return!0},
A:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fI(this.c,b)
else return this.fH(0,b)},
fH:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.eG(u,b)
s=this.cp(t,b)
if(s<0)return!1
this.cF(t.splice(s,1)[0])
return!0},
es:function(a,b){H.C(b,H.x(this,0))
if(H.p(a[b],"$icp")!=null)return!1
a[b]=this.bf(b)
return!0},
fI:function(a,b){var u
if(a==null)return!1
u=H.p(a[b],"$icp")
if(u==null)return!1
this.cF(u)
delete a[b]
return!0},
cs:function(){this.r=1073741823&this.r+1},
bf:function(a){var u,t
u=new P.cp(H.C(a,H.x(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.cs()
return u},
cF:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.cs()},
cj:function(a){return J.cH(a)&1073741823},
eG:function(a,b){return a[this.cj(b)]},
cp:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cp.prototype={}
P.ix.prototype={
gH:function(a){return this.d},
v:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.bS(u))
else{u=this.c
if(u==null){this.scf(null)
return!1}else{this.scf(H.C(u.a,H.x(this,0)))
this.c=this.c.b
return!0}}},
scf:function(a){this.d=H.C(a,H.x(this,0))},
$iaC:1}
P.fn.prototype={$ih:1,$ib:1}
P.u.prototype={
gN:function(a){return new H.d7(a,this.gk(a),0,[H.cD(this,a,"u",0)])},
w:function(a,b){return this.j(a,b)},
iP:function(a,b){var u,t
u=H.d([],[H.cD(this,a,"u",0)])
C.a.sk(u,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.U(u,t,this.j(a,t))
return u},
iO:function(a){return this.iP(a,!0)},
i:function(a){return P.j7(a,"[","]")}}
P.fq.prototype={}
P.fr.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.k(a)
u.a=t+": "
u.a+=H.k(b)},
$S:15}
P.a2.prototype={
I:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.cD(this,a,"a2",0),H.cD(this,a,"a2",1)]})
for(u=J.bM(this.gam(a));u.v();){t=u.gH(u)
b.$2(t,this.j(a,t))}},
gk:function(a){return J.bN(this.gam(a))},
i:function(a){return P.jI(a)},
$iJ:1}
P.iD.prototype={
i:function(a){return P.j7(this,"{","}")},
w:function(a,b){var u,t,s
if(b<0)H.r(P.aq(b,0,null,"index",null))
for(u=P.k9(this,this.r,H.x(this,0)),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.f(P.P(b,this,"index",null,t))},
$ih:1,
$ijU:1}
P.dV.prototype={}
P.bR.prototype={}
P.cR.prototype={}
P.eZ.prototype={
$abR:function(){return[P.n,[P.b,P.y]]}}
P.hR.prototype={}
P.hS.prototype={
hP:function(a,b,c){var u,t,s
c=P.jS(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iI(t)
if(s.eF(a,b,c)!==c)s.cG(C.j.bC(a,c-1),0)
return new Uint8Array(t.subarray(0,H.lx(0,s.b,t.length)))},
hO:function(a){return this.hP(a,0,null)},
$acR:function(){return[P.n,[P.b,P.y]]}}
P.iI.prototype={
cG:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.e(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.e(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.e(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.e(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.e(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.e(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.e(u,t)
u[t]=128|a&63
return!1}},
eF:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.bC(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.aR(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.cG(r,C.j.aR(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.e(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.e(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.e(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.e(u,q)
u[q]=128|r&63}}return s}}
P.a4.prototype={}
P.b9.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.b9&&this.a===b.a&&!0},
gF:function(a){var u=this.a
return(u^C.h.aU(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.kU(H.ld(this))
t=P.cS(H.lb(this))
s=P.cS(H.l7(this))
r=P.cS(H.l8(this))
q=P.cS(H.la(this))
p=P.cS(H.lc(this))
o=P.kV(H.l9(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.w.prototype={}
P.bb.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bb&&this.a===b.a},
gF:function(a){return C.h.gF(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eX()
t=this.a
if(t<0)return"-"+new P.bb(0-t).i(0)
s=u.$1(C.h.V(t,6e7)%60)
r=u.$1(C.h.V(t,1e6)%60)
q=new P.eW().$1(t%1e6)
return""+C.h.V(t,36e8)+":"+H.k(s)+":"+H.k(r)+"."+H.k(q)}}
P.eW.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:16}
P.eX.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:16}
P.bc.prototype={}
P.de.prototype={
i:function(a){return"Throw of null."}}
P.aw.prototype={
gbh:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbg:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbh()+t+s
if(!this.a)return r
q=this.gbg()
p=P.f0(this.b)
return r+q+": "+p}}
P.bA.prototype={
gbh:function(){return"RangeError"},
gbg:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.k(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.k(u)
else if(s>u)t=": Not in range "+H.k(u)+".."+H.k(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.k(u)}return t}}
P.fd.prototype={
gbh:function(){return"RangeError"},
gbg:function(){var u,t
u=H.a5(this.b)
if(typeof u!=="number")return u.iV()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.k(t)},
gk:function(a){return this.f}}
P.hP.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hN.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.he.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eM.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.f0(u)+"."}}
P.fR.prototype={
i:function(a){return"Out of Memory"},
$ibc:1}
P.dr.prototype={
i:function(a){return"Stack Overflow"},
$ibc:1}
P.eR.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dO.prototype={
i:function(a){return"Exception: "+this.a}}
P.fa.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.c3(s,0,75)+"...":s
return t+"\n"+r}}
P.y.prototype={}
P.h.prototype={
gk:function(a){var u,t
u=this.gN(this)
for(t=0;u.v();)++t
return t},
w:function(a,b){var u,t,s
if(b<0)H.r(P.aq(b,0,null,"index",null))
for(u=this.gN(this),t=0;u.v();){s=u.gH(u)
if(b===t)return s;++t}throw H.f(P.P(b,this,"index",null,t))},
i:function(a){return P.kZ(this,"(",")")}}
P.aC.prototype={}
P.b.prototype={$ih:1}
P.J.prototype={}
P.F.prototype={
gF:function(a){return P.K.prototype.gF.call(this,this)},
i:function(a){return"null"}}
P.Y.prototype={}
P.K.prototype={constructor:P.K,$iK:1,
p:function(a,b){return this===b},
gF:function(a){return H.c8(this)},
i:function(a){return"Instance of '"+H.bz(this)+"'"},
toString:function(){return this.i(this)}}
P.ac.prototype={}
P.n.prototype={$ijM:1}
P.bh.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.q.prototype={}
W.ez.prototype={
gk:function(a){return a.length}}
W.eB.prototype={
i:function(a){return String(a)}}
W.eC.prototype={
i:function(a){return String(a)}}
W.cJ.prototype={}
W.cK.prototype={}
W.bq.prototype={
bY:function(a,b,c){if(c!=null)return this.eH(a,b,P.lJ(c,null))
return this.eI(a,b)},
dM:function(a,b){return this.bY(a,b,null)},
eH:function(a,b,c){return a.getContext(b,c)},
eI:function(a,b){return a.getContext(b)},
$ibq:1,
$ijD:1}
W.br.prototype={
eJ:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
i0:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibr:1}
W.b8.prototype={
gk:function(a){return a.length}}
W.bT.prototype={$ibT:1}
W.eN.prototype={
gk:function(a){return a.length}}
W.L.prototype={$iL:1}
W.bU.prototype={
gk:function(a){return a.length}}
W.eO.prototype={}
W.ay.prototype={}
W.az.prototype={}
W.eP.prototype={
gk:function(a){return a.length}}
W.eQ.prototype={
gk:function(a){return a.length}}
W.eS.prototype={
gk:function(a){return a.length}}
W.bV.prototype={$ibV:1}
W.bW.prototype={
dN:function(a,b){return a.getElementById(b)}}
W.eT.prototype={
i:function(a){return String(a)}}
W.cT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[[P.ab,P.Y]]},
$au:function(){return[[P.ab,P.Y]]},
$ih:1,
$ah:function(){return[[P.ab,P.Y]]},
$ib:1,
$ab:function(){return[[P.ab,P.Y]]},
$av:function(){return[[P.ab,P.Y]]}}
W.cU.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gaz(a))+" x "+H.k(this.gav(a))},
p:function(a,b){var u
if(b==null)return!1
if(!H.ex(b,"$iab",[P.Y],"$aab"))return!1
u=J.iR(b)
return a.left===u.gdg(b)&&a.top===u.gdC(b)&&this.gaz(a)===u.gaz(b)&&this.gav(a)===u.gav(b)},
gF:function(a){return W.k8(C.i.gF(a.left),C.i.gF(a.top),C.i.gF(this.gaz(a)),C.i.gF(this.gav(a)))},
gav:function(a){return a.height},
gdg:function(a){return a.left},
gdC:function(a){return a.top},
gaz:function(a){return a.width},
$iab:1,
$aab:function(){return[P.Y]}}
W.eU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[P.n]},
$au:function(){return[P.n]},
$ih:1,
$ah:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$av:function(){return[P.n]}}
W.eV.prototype={
gk:function(a){return a.length}}
W.ie.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.p(u[b],"$iX")},
h:function(a,b){J.jz(this.a,b)
return b},
gN:function(a){var u=this.iO(this)
return new J.ak(u,u.length,0,[H.x(u,0)])},
$au:function(){return[W.X]},
$ah:function(){return[W.X]},
$ab:function(){return[W.X]}}
W.X.prototype={
gcM:function(a){return new W.ie(a,a.children)},
i:function(a){return a.localName},
$iX:1}
W.j.prototype={$ij:1}
W.c.prototype={
hB:function(a,b,c,d){H.l(c,{func:1,args:[W.j]})
if(c!=null)this.ek(a,b,c,!1)},
ek:function(a,b,c,d){return a.addEventListener(b,H.bG(H.l(c,{func:1,args:[W.j]}),1),!1)},
$ic:1}
W.aA.prototype={$iaA:1}
W.f4.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aA]},
$au:function(){return[W.aA]},
$ih:1,
$ah:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$av:function(){return[W.aA]}}
W.f5.prototype={
gk:function(a){return a.length}}
W.f9.prototype={
gk:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.fc.prototype={
gk:function(a){return a.length}}
W.bw.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.D]},
$au:function(){return[W.D]},
$ih:1,
$ah:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$ibw:1,
$av:function(){return[W.D]}}
W.cZ.prototype={}
W.bd.prototype={$ibd:1,
gcO:function(a){return a.data}}
W.bY.prototype={$ibY:1,$ijD:1}
W.aF.prototype={$iaF:1}
W.fo.prototype={
i:function(a){return String(a)}}
W.c3.prototype={}
W.fA.prototype={
gk:function(a){return a.length}}
W.fB.prototype={
j:function(a,b){return P.b1(a.get(H.N(b)))},
I:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b1(t.value[1]))}},
gam:function(a){var u=H.d([],[P.n])
this.I(a,new W.fC(u))
return u},
gk:function(a){return a.size},
$aa2:function(){return[P.n,null]},
$iJ:1,
$aJ:function(){return[P.n,null]}}
W.fC.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fD.prototype={
j:function(a,b){return P.b1(a.get(H.N(b)))},
I:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b1(t.value[1]))}},
gam:function(a){var u=H.d([],[P.n])
this.I(a,new W.fE(u))
return u},
gk:function(a){return a.size},
$aa2:function(){return[P.n,null]},
$iJ:1,
$aJ:function(){return[P.n,null]}}
W.fE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.aH.prototype={$iaH:1}
W.fF.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aH]},
$au:function(){return[W.aH]},
$ih:1,
$ah:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$av:function(){return[W.aH]}}
W.a1.prototype={$ia1:1}
W.id.prototype={
gN:function(a){var u=this.a.childNodes
return new W.cX(u,u.length,-1,[H.cD(C.N,u,"v",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$au:function(){return[W.D]},
$ah:function(){return[W.D]},
$ab:function(){return[W.D]}}
W.D.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.dX(a):u},
S:function(a,b){return a.appendChild(b)},
$iD:1}
W.c6.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.D]},
$au:function(){return[W.D]},
$ih:1,
$ah:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$av:function(){return[W.D]}}
W.aI.prototype={$iaI:1,
gk:function(a){return a.length}}
W.fT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aI]},
$au:function(){return[W.aI]},
$ih:1,
$ah:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$av:function(){return[W.aI]}}
W.h_.prototype={
j:function(a,b){return P.b1(a.get(H.N(b)))},
I:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b1(t.value[1]))}},
gam:function(a){var u=H.d([],[P.n])
this.I(a,new W.h0(u))
return u},
gk:function(a){return a.size},
$aa2:function(){return[P.n,null]},
$iJ:1,
$aJ:function(){return[P.n,null]}}
W.h0.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.h2.prototype={
gk:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.hb.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aJ]},
$au:function(){return[W.aJ]},
$ih:1,
$ah:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$av:function(){return[W.aJ]}}
W.aK.prototype={$iaK:1}
W.hc.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aK]},
$au:function(){return[W.aK]},
$ih:1,
$ah:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$av:function(){return[W.aK]}}
W.aL.prototype={$iaL:1,
gk:function(a){return a.length}}
W.hg.prototype={
j:function(a,b){return this.cq(a,H.N(b))},
I:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.n,P.n]})
for(u=0;!0;++u){t=this.eM(a,u)
if(t==null)return
b.$2(t,this.cq(a,t))}},
gam:function(a){var u=H.d([],[P.n])
this.I(a,new W.hh(u))
return u},
gk:function(a){return a.length},
cq:function(a,b){return a.getItem(b)},
eM:function(a,b){return a.key(b)},
$aa2:function(){return[P.n,P.n]},
$iJ:1,
$aJ:function(){return[P.n,P.n]}}
W.hh.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:25}
W.ar.prototype={$iar:1}
W.aM.prototype={$iaM:1}
W.as.prototype={$ias:1}
W.ho.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.as]},
$au:function(){return[W.as]},
$ih:1,
$ah:function(){return[W.as]},
$ib:1,
$ab:function(){return[W.as]},
$av:function(){return[W.as]}}
W.hp.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aM]},
$au:function(){return[W.aM]},
$ih:1,
$ah:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$av:function(){return[W.aM]}}
W.hv.prototype={
gk:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.at.prototype={$iat:1}
W.hy.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aN]},
$au:function(){return[W.aN]},
$ih:1,
$ah:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$av:function(){return[W.aN]}}
W.hz.prototype={
gk:function(a){return a.length}}
W.bj.prototype={}
W.hQ.prototype={
i:function(a){return String(a)}}
W.i4.prototype={$ijD:1}
W.i5.prototype={
gk:function(a){return a.length}}
W.aQ.prototype={
ghW:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ah("deltaY is not supported"))},
ghV:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ah("deltaX is not supported"))},
$iaQ:1}
W.cn.prototype={
fL:function(a,b){return a.requestAnimationFrame(H.bG(H.l(b,{func:1,ret:-1,args:[P.Y]}),1))},
ez:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ig.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.L]},
$au:function(){return[W.L]},
$ih:1,
$ah:function(){return[W.L]},
$ib:1,
$ab:function(){return[W.L]},
$av:function(){return[W.L]}}
W.dJ.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
p:function(a,b){var u
if(b==null)return!1
if(!H.ex(b,"$iab",[P.Y],"$aab"))return!1
u=J.iR(b)
return a.left===u.gdg(b)&&a.top===u.gdC(b)&&a.width===u.gaz(b)&&a.height===u.gav(b)},
gF:function(a){return W.k8(C.i.gF(a.left),C.i.gF(a.top),C.i.gF(a.width),C.i.gF(a.height))},
gav:function(a){return a.height},
gaz:function(a){return a.width}}
W.iu.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aB]},
$au:function(){return[W.aB]},
$ih:1,
$ah:function(){return[W.aB]},
$ib:1,
$ab:function(){return[W.aB]},
$av:function(){return[W.aB]}}
W.e_.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.D]},
$au:function(){return[W.D]},
$ih:1,
$ah:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$av:function(){return[W.D]}}
W.iE.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aL]},
$au:function(){return[W.aL]},
$ih:1,
$ah:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$av:function(){return[W.aL]}}
W.iF.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ar]},
$au:function(){return[W.ar]},
$ih:1,
$ah:function(){return[W.ar]},
$ib:1,
$ab:function(){return[W.ar]},
$av:function(){return[W.ar]}}
W.ih.prototype={}
W.ji.prototype={}
W.ii.prototype={}
W.ij.prototype={
$1:function(a){return this.a.$1(H.p(a,"$ij"))},
$S:23}
W.v.prototype={
gN:function(a){return new W.cX(a,this.gk(a),-1,[H.cD(this,a,"v",0)])}}
W.cX.prototype={
v:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.scr(J.kL(this.a,u))
this.c=u
return!0}this.scr(null)
this.c=t
return!1},
gH:function(a){return this.d},
scr:function(a){this.d=H.C(a,H.x(this,0))},
$iaC:1}
W.dI.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.cu.prototype={}
W.cv.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.ec.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.cw.prototype={}
W.cx.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
P.em.prototype={$ibd:1,
gcO:function(a){return this.a}}
P.iP.prototype={
$2:function(a,b){this.a[a]=b},
$S:15}
P.f6.prototype={
gbj:function(){var u,t,s
u=this.b
t=H.av(u,"u",0)
s=W.X
return new H.fs(new H.i7(u,H.l(new P.f7(),{func:1,ret:P.a4,args:[t]}),[t]),H.l(new P.f8(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.jz(this.b.a,b)},
gk:function(a){return J.bN(this.gbj().a)},
j:function(a,b){var u=this.gbj()
return u.b.$1(J.jA(u.a,b))},
gN:function(a){var u=P.jb(this.gbj(),!1,W.X)
return new J.ak(u,u.length,0,[H.x(u,0)])},
$au:function(){return[W.X]},
$ah:function(){return[W.X]},
$ab:function(){return[W.X]}}
P.f7.prototype={
$1:function(a){return!!J.S(H.p(a,"$iD")).$iX},
$S:22}
P.f8.prototype={
$1:function(a){return H.i(H.p(a,"$iD"),"$iX")},
$S:21}
P.iy.prototype={}
P.ab.prototype={}
P.aS.prototype={$iaS:1}
P.fj.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return this.ac(a,b)},
w:function(a,b){return this.j(a,b)},
ac:function(a,b){return a.getItem(b)},
$au:function(){return[P.aS]},
$ih:1,
$ah:function(){return[P.aS]},
$ib:1,
$ab:function(){return[P.aS]},
$av:function(){return[P.aS]}}
P.aZ.prototype={$iaZ:1}
P.fP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return this.ac(a,b)},
w:function(a,b){return this.j(a,b)},
ac:function(a,b){return a.getItem(b)},
$au:function(){return[P.aZ]},
$ih:1,
$ah:function(){return[P.aZ]},
$ib:1,
$ab:function(){return[P.aZ]},
$av:function(){return[P.aZ]}}
P.fU.prototype={
gk:function(a){return a.length}}
P.hm.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return this.ac(a,b)},
w:function(a,b){return this.j(a,b)},
ac:function(a,b){return a.getItem(b)},
$au:function(){return[P.n]},
$ih:1,
$ah:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$av:function(){return[P.n]}}
P.o.prototype={
gcM:function(a){return new P.f6(a,new W.id(a))}}
P.b_.prototype={$ib_:1}
P.hA.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return this.ac(a,b)},
w:function(a,b){return this.j(a,b)},
ac:function(a,b){return a.getItem(b)},
$au:function(){return[P.b_]},
$ih:1,
$ah:function(){return[P.b_]},
$ib:1,
$ab:function(){return[P.b_]},
$av:function(){return[P.b_]}}
P.dT.prototype={}
P.dU.prototype={}
P.e2.prototype={}
P.e3.prototype={}
P.ed.prototype={}
P.ee.prototype={}
P.ek.prototype={}
P.el.prototype={}
P.eE.prototype={
gk:function(a){return a.length}}
P.eF.prototype={
j:function(a,b){return P.b1(a.get(H.N(b)))},
I:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b1(t.value[1]))}},
gam:function(a){var u=H.d([],[P.n])
this.I(a,new P.eG(u))
return u},
gk:function(a){return a.size},
$aa2:function(){return[P.n,null]},
$iJ:1,
$aJ:function(){return[P.n,null]}}
P.eG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
P.eH.prototype={
gk:function(a){return a.length}}
P.bp.prototype={}
P.fQ.prototype={
gk:function(a){return a.length}}
P.dH.prototype={}
P.cL.prototype={$icL:1}
P.cY.prototype={$icY:1}
P.dj.prototype={$idj:1}
P.bB.prototype={
cH:function(a,b){return a.activeTexture(b)},
cJ:function(a,b,c){return a.attachShader(b,c)},
a9:function(a,b,c){return a.bindBuffer(b,c)},
hF:function(a,b,c){return a.bindFramebuffer(b,c)},
as:function(a,b,c){return a.bindTexture(b,c)},
hG:function(a,b,c){return a.blendFunc(b,c)},
cL:function(a,b,c,d){return a.bufferData(b,c,d)},
hJ:function(a,b){return a.clear(b)},
hK:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
hL:function(a,b){return a.clearDepth(b)},
hN:function(a,b){return a.compileShader(b)},
hR:function(a,b){return a.createShader(b)},
hT:function(a,b){return a.deleteProgram(b)},
hU:function(a,b){return a.deleteShader(b)},
hX:function(a,b){return a.depthFunc(b)},
hY:function(a,b){return a.disable(b)},
cP:function(a,b){return a.disableVertexAttribArray(b)},
i_:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bF:function(a,b){return a.enable(b)},
cR:function(a,b){return a.enableVertexAttribArray(b)},
dI:function(a,b){return a.generateMipmap(b)},
dJ:function(a,b,c){return a.getActiveAttrib(b,c)},
dK:function(a,b,c){return a.getActiveUniform(b,c)},
dL:function(a,b,c){return a.getAttribLocation(b,c)},
bZ:function(a,b){return a.getParameter(b)},
dO:function(a,b){return a.getProgramInfoLog(b)},
bc:function(a,b,c){return a.getProgramParameter(b,c)},
dP:function(a,b){return a.getShaderInfoLog(b)},
dQ:function(a,b,c){return a.getShaderParameter(b,c)},
dR:function(a,b,c){return a.getUniformLocation(b,c)},
ia:function(a,b){return a.linkProgram(b)},
ix:function(a,b,c){return a.pixelStorei(b,c)},
dV:function(a,b,c){return a.shaderSource(b,c)},
iK:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.S(g)
if(!!u.$ibd)t=!0
else t=!1
if(t){this.h5(a,b,c,d,e,f,P.lK(g))
return}if(!!u.$ibY)u=!0
else u=!1
if(u){this.h6(a,b,c,d,e,f,g)
return}throw H.f(P.kO("Incorrect number or type of arguments"))},
iJ:function(a,b,c,d,e,f,g){return this.iK(a,b,c,d,e,f,g,null,null,null)},
h5:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
h6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ba:function(a,b,c,d){return a.texParameteri(b,c,d)},
C:function(a,b,c){return a.uniform1f(b,c)},
G:function(a,b,c){return a.uniform1i(b,c)},
m:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dD:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dE:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dF:function(a,b){return a.useProgram(b)},
iS:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
iT:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibB:1}
P.dn.prototype={$idn:1}
P.dt.prototype={$idt:1}
P.dA.prototype={$idA:1}
P.hd.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return P.b1(this.eL(a,b))},
w:function(a,b){return this.j(a,b)},
eL:function(a,b){return a.item(b)},
$au:function(){return[[P.J,,,]]},
$ih:1,
$ah:function(){return[[P.J,,,]]},
$ib:1,
$ab:function(){return[[P.J,,,]]},
$av:function(){return[[P.J,,,]]}}
P.e9.prototype={}
P.ea.prototype={}
O.U.prototype={
c7:function(a){this.seQ(H.d([],[a]))
this.scw(null)
this.sct(null)
this.scz(null)},
c_:function(a,b,c){var u=H.av(this,"U",0)
H.l(b,{func:1,ret:P.a4,args:[[P.h,u]]})
u={func:1,ret:-1,args:[P.y,[P.h,u]]}
H.l(a,u)
H.l(c,u)
this.scw(b)
this.sct(a)
this.scz(c)},
bd:function(a,b){return this.c_(a,null,b)},
fs:function(a){var u
H.m(a,"$ih",[H.av(this,"U",0)],"$ah")
u=this.b
if(u!=null)return u.$1(a)
return!0},
eR:function(a,b){var u
H.m(b,"$ih",[H.av(this,"U",0)],"$ah")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gN:function(a){var u=this.a
return new J.ak(u,u.length,0,[H.x(u,0)])},
w:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.av(this,"U",0)
H.C(b,u)
u=[u]
if(this.fs(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.eR(s,H.d([b],u))}},
seQ:function(a){this.a=H.m(a,"$ib",[H.av(this,"U",0)],"$ab")},
scw:function(a){this.b=H.l(a,{func:1,ret:P.a4,args:[[P.h,H.av(this,"U",0)]]})},
sct:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.y,[P.h,H.av(this,"U",0)]]})},
scz:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.y,[P.h,H.av(this,"U",0)]]})},
$ih:1}
O.c2.prototype={
gk:function(a){return this.a.length},
gu:function(){var u=this.b
if(u==null){u=D.ao()
this.b=u}return u},
e5:function(a){var u=this.b
if(u!=null)u.M(a)},
an:function(){return this.e5(null)},
gO:function(a){var u=this.a
if(u.length>0)return C.a.gbO(u)
else return V.jc()},
dr:function(a){var u=this.a
if(a==null)C.a.h(u,V.jc())
else C.a.h(u,a)
this.an()},
bT:function(){var u=this.a
if(u.length>0){u.pop()
this.an()}},
sbk:function(a){this.a=H.m(a,"$ib",[V.a7],"$ab")}}
E.eI.prototype={}
E.aa.prototype={
sc0:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gu().A(0,this.gdl())
t=this.c
if(t!=null)t.gu().h(0,this.gdl())
s=new D.O("shape",u,this.c,this,[F.dp])
s.b=!0
this.a3(s)}},
saI:function(a){var u,t
if(!J.T(this.r,a)){u=this.r
if(u!=null)u.gu().A(0,this.gdj())
if(a!=null)a.gu().h(0,this.gdj())
this.r=a
t=new D.O("mover",u,a,this,[U.bx])
t.b=!0
this.a3(t)}},
bb:function(a,b){var u,t,s,r,q,p,o,n
u=this.r
if(u!=null){t=u.r
s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sdG(u.a+u.d*b.y)
u.sdn(0,u.b+u.e*b.y)
u.sdu(u.c+u.f*b.y)
t=u.c
r=Math.cos(t)
q=Math.sin(t)
t=V.aV(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)
s=u.b
r=Math.cos(s)
q=Math.sin(s)
t=t.R(0,V.aV(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))
s=u.a
r=Math.cos(s)
q=Math.sin(s)
u.x=t.R(0,V.aV(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1))
t=u.y
if(t!=null)t.ab(0)}p=u.x}else p=null
if(!J.T(p,this.x)){o=this.x
this.x=p
n=new D.O("matrix",o,p,this,[V.a7])
n.b=!0
this.a3(n)}for(u=this.y.a,u=new J.ak(u,u.length,0,[H.x(u,0)]);u.v();)u.d.bb(0,b)},
ay:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gO(u))
else C.a.h(u.a,t.R(0,u.gO(u)))
u.an()
a.ds(this.f)
u=a.dy
s=(u&&C.a).gbO(u)
if(s!=null&&this.d!=null)s.iC(a,this)
for(u=this.y.a,u=new J.ak(u,u.length,0,[H.x(u,0)]);u.v();)u.d.ay(a)
a.dq()
a.dx.bT()},
a3:function(a){var u=this.z
if(u!=null)u.M(a)},
T:function(){return this.a3(null)},
dm:function(a){H.p(a,"$iB")
this.e=null
this.a3(a)},
io:function(){return this.dm(null)},
dk:function(a){this.a3(H.p(a,"$iB"))},
im:function(){return this.dk(null)},
di:function(a){this.a3(H.p(a,"$iB"))},
ij:function(){return this.di(null)},
ii:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ih",[E.aa],"$ah")
for(u=b.length,t=this.gdh(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bu()
o.sa7(null)
o.saC(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sa7(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.T()},
il:function(a,b){var u,t
H.m(b,"$ih",[E.aa],"$ah")
for(u=b.gN(b),t=this.gdh();u.v();)u.gH(u).gu().A(0,t)
this.T()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
ser:function(a,b){this.y=H.m(b,"$iU",[E.aa],"$aU")},
$iaX:1}
E.fW.prototype={
e1:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.b9(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.c2()
t=[V.a7]
u.sbk(H.d([],t))
u.b=null
u.gu().h(0,new E.fX(this))
this.cy=u
u=new O.c2()
u.sbk(H.d([],t))
u.b=null
u.gu().h(0,new E.fY(this))
this.db=u
u=new O.c2()
u.sbk(H.d([],t))
u.b=null
u.gu().h(0,new E.fZ(this))
this.dx=u
this.sh4(H.d([],[O.bC]))
u=this.dy;(u&&C.a).h(u,null)
this.sh0(new H.aE([P.n,A.c9]))},
giy:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.gO(u)
t=this.db
t=u.R(0,t.gO(t))
this.z=t
u=t}return u},
ds:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gbO(u):a;(u&&C.a).h(u,t)},
dq:function(){var u=this.dy
if(u.length>1)u.pop()},
sh4:function(a){this.dy=H.m(a,"$ib",[O.bC],"$ab")},
sh0:function(a){this.fr=H.m(a,"$iJ",[P.n,A.c9],"$aJ")}}
E.fX.prototype={
$1:function(a){var u
H.p(a,"$iB")
u=this.a
u.z=null
u.ch=null},
$S:10}
E.fY.prototype={
$1:function(a){var u
H.p(a,"$iB")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:10}
E.fZ.prototype={
$1:function(a){var u
H.p(a,"$iB")
u=this.a
u.ch=null
u.cx=null},
$S:10}
E.dx.prototype={
ca:function(a){H.p(a,"$iB")
this.dt()},
c9:function(){return this.ca(null)},
gi5:function(){var u,t,s
u=Date.now()
t=C.h.V(P.j5(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.b9(u,!1)
return s/t},
cC:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.R()
if(typeof u!=="number")return H.bn(u)
s=C.i.bM(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.R()
r=C.i.bM(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.jY(C.m,this.giD())}},
dt:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.hu(this),{func:1,ret:-1,args:[P.Y]})
C.y.ez(u)
C.y.fL(u,W.kg(t,P.Y))}},
iB:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.cC()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.b9(r,!1)
s.y=P.j5(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.an()
r=s.db
C.a.sk(r.a,0)
r.an()
r=s.dx
C.a.sk(r.a,0)
r.an()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.ay(this.e)}}catch(q){u=H.bo(q)
t=H.bI(q)
P.ad("Error: "+H.k(u))
P.ad("Stack: "+H.k(t))
throw H.f(u)}}}
E.hu.prototype={
$1:function(a){var u
H.lZ(a)
u=this.a
if(u.ch){u.ch=!1
u.iB()}},
$S:35}
Z.dF.prototype={$im6:1}
Z.cM.prototype={
aj:function(a){var u,t,s
try{t=a.a
C.b.cR(t,this.e)
C.b.iS(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.bo(s)
t=P.t('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.k(u))
throw H.f(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}}
Z.i6.prototype={$im7:1}
Z.cN.prototype={
au:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aj:function(a){var u,t
u=this.a
C.b.a9(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].aj(a)},
aP:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.cP(s,u[t].e)
C.b.a9(s,this.a.a,null)},
ay:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.b.a9(t,p,r.b)
C.b.i_(t,q.a,q.b,5123,0)
C.b.a9(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.n]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)C.a.h(t,s[q].i(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aj(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.t(t,", ")+"\nAttrs:   "+C.a.t(p,", ")},
seK:function(a){this.b=H.m(a,"$ib",[Z.be],"$ab")},
$ime:1}
Z.be.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bz(this.c)+"'")+"]"}}
Z.aP.prototype={
gc1:function(a){var u,t
u=this.a
t=(u&$.b5().a)!==0?3:0
if((u&$.b4().a)!==0)t+=3
if((u&$.b3().a)!==0)t+=3
if((u&$.b6().a)!==0)t+=2
if((u&$.b7().a)!==0)t+=3
if((u&$.cE().a)!==0)t+=3
if((u&$.cF().a)!==0)t+=4
if((u&$.bL().a)!==0)++t
return(u&$.b2().a)!==0?t+4:t},
hD:function(a){var u,t,s
u=$.b5()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.b4()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b3()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b6()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b7()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cE()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cF()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bL()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b2()
if((t&u.a)!==0)if(s===a)return u
return $.kJ()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aP))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.d([],[P.n])
t=this.a
if((t&$.b5().a)!==0)C.a.h(u,"Pos")
if((t&$.b4().a)!==0)C.a.h(u,"Norm")
if((t&$.b3().a)!==0)C.a.h(u,"Binm")
if((t&$.b6().a)!==0)C.a.h(u,"Txt2D")
if((t&$.b7().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cE().a)!==0)C.a.h(u,"Clr3")
if((t&$.cF().a)!==0)C.a.h(u,"Clr4")
if((t&$.bL().a)!==0)C.a.h(u,"Weight")
if((t&$.b2().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.t(u,"|")}}
D.eL.prototype={}
D.bu.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.l(b,u)
if(this.a==null)this.sa7(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
A:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[D.B]})
u=this.a
u=u==null?null:C.a.al(u,b)
if(u===!0){u=this.a
t=(u&&C.a).A(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.al(u,b)
if(u===!0){u=this.b
t=(u&&C.a).A(u,b)||t}return t},
M:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.B(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.I(P.jb(t,!0,{func:1,ret:-1,args:[D.B]}),new D.f1(u))
t=this.b
if(t!=null){this.saC(H.d([],[{func:1,ret:-1,args:[D.B]}]))
C.a.I(t,new D.f2(u))}return!0},
cQ:function(){return this.M(null)},
iE:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.M(t)}}},
ab:function(a){return this.iE(a,!0,!1)},
sa7:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saC:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.f1.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.f2.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.B.prototype={}
D.bZ.prototype={}
D.c_.prototype={}
D.O.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
X.cO.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cO))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.d4.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d4))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.fi.prototype={
iu:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iq:function(a){this.c=a.b
this.d.A(0,a.a)
return!1},
sfG:function(a){this.d=H.m(a,"$ijU",[P.y],"$ajU")}}
X.fp.prototype={
bS:function(a,b){this.r=a.a
return!1},
aK:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.dT()
if(typeof u!=="number")return u.dH()
this.r=(u&~t)>>>0
return!1},
aJ:function(a,b){return!1},
iv:function(a){return!1},
fg:function(a,b,c){return}}
X.aW.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aW))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.fG.prototype={
bS:function(a,b){this.f=a.a
return!1},
aK:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.dT()
if(typeof u!=="number")return u.dH()
this.f=(u&~t)>>>0
return!1},
aJ:function(a,b){return!1},
iw:function(a,b){return!1}}
X.hx.prototype={
it:function(a){H.m(a,"$ib",[V.ae],"$ab")
return!1},
ir:function(a){H.m(a,"$ib",[V.ae],"$ab")
return!1},
is:function(a){H.m(a,"$ib",[V.ae],"$ab")
return!1}}
X.dE.prototype={
cm:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.d4(u,new X.aW(t,a.altKey,a.shiftKey))},
ar:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aW(t,a.altKey,a.shiftKey)},
bu:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aW(t,a.altKey,a.shiftKey)},
ai:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.W()
q=u.top
if(typeof s!=="number")return s.W()
return new V.ae(t-r,s-q)},
aD:function(a){return new V.b0(a.movementX,a.movementY)},
bp:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.ae])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
o=C.i.a4(p.pageX)
C.i.a4(p.pageY)
n=u.left
C.i.a4(p.pageX)
C.a.h(t,new V.ae(o-n,C.i.a4(p.pageY)-u.top))}return t},
af:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cO(u,new X.aW(t,a.altKey,a.shiftKey))},
bl:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.W()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.W()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
fa:function(a){this.f=!0},
eZ:function(a){this.f=!1},
f4:function(a){H.p(a,"$ia1")
if(this.f&&this.bl(a))a.preventDefault()},
fe:function(a){var u
H.p(a,"$iaF")
if(!this.f)return
u=this.cm(a)
this.b.iu(u)},
fc:function(a){var u
H.p(a,"$iaF")
if(!this.f)return
u=this.cm(a)
this.b.iq(u)},
fi:function(a){var u,t,s,r
H.p(a,"$ia1")
u=this.a
u.focus()
this.f=!0
this.ar(a)
if(this.x){t=this.af(a)
s=this.aD(a)
if(this.d.bS(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.af(a)
r=this.ai(a)
if(this.c.bS(t,r))a.preventDefault()},
fm:function(a){var u,t,s
H.p(a,"$ia1")
this.ar(a)
u=this.af(a)
if(this.x){t=this.aD(a)
if(this.d.aK(u,t))a.preventDefault()
return}if(this.r)return
s=this.ai(a)
if(this.c.aK(u,s))a.preventDefault()},
f8:function(a){var u,t,s
H.p(a,"$ia1")
if(!this.bl(a)){this.ar(a)
u=this.af(a)
if(this.x){t=this.aD(a)
if(this.d.aK(u,t))a.preventDefault()
return}if(this.r)return
s=this.ai(a)
if(this.c.aK(u,s))a.preventDefault()}},
fk:function(a){var u,t,s
H.p(a,"$ia1")
this.ar(a)
u=this.af(a)
if(this.x){t=this.aD(a)
if(this.d.aJ(u,t))a.preventDefault()
return}if(this.r)return
s=this.ai(a)
if(this.c.aJ(u,s))a.preventDefault()},
f6:function(a){var u,t,s
H.p(a,"$ia1")
if(!this.bl(a)){this.ar(a)
u=this.af(a)
if(this.x){t=this.aD(a)
if(this.d.aJ(u,t))a.preventDefault()
return}if(this.r)return
s=this.ai(a)
if(this.c.aJ(u,s))a.preventDefault()}},
fo:function(a){var u,t
H.p(a,"$iaQ")
this.ar(a)
u=new V.b0((a&&C.x).ghV(a),C.x.ghW(a)).D(0,180)
if(this.x){if(this.d.iv(u))a.preventDefault()
return}if(this.r)return
t=this.ai(a)
if(this.c.iw(u,t))a.preventDefault()},
fq:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.af(this.y)
s=this.ai(this.y)
this.d.fg(t,s,u)}},
fE:function(a){var u
H.p(a,"$iat")
this.a.focus()
this.f=!0
this.bu(a)
u=this.bp(a)
if(this.e.it(u))a.preventDefault()},
fA:function(a){var u
H.p(a,"$iat")
this.bu(a)
u=this.bp(a)
if(this.e.ir(u))a.preventDefault()},
fC:function(a){var u
H.p(a,"$iat")
this.bu(a)
u=this.bp(a)
if(this.e.is(u))a.preventDefault()},
seA:function(a){this.z=H.m(a,"$ib",[[P.cb,P.K]],"$ab")}}
D.ba.prototype={
ad:function(a){var u
H.p(a,"$iB")
u=this.d
if(u!=null)u.M(a)},
e7:function(){return this.ad(null)},
$iV:1,
$iaX:1}
D.V.prototype={$iaX:1}
D.d5.prototype={
ad:function(a){var u=this.Q
if(u!=null)u.M(a)},
cv:function(a){var u
H.p(a,"$iB")
u=this.ch
if(u!=null)u.M(a)},
ff:function(){return this.cv(null)},
fu:function(a){var u,t,s
H.m(a,"$ih",[D.V],"$ah")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(s==null||this.eu(s))return!1}return!0},
eT:function(a,b){var u,t,s,r,q,p,o,n
u=D.V
H.m(b,"$ih",[u],"$ah")
for(t=b.length,s=this.gcu(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=H.p(b[p],"$iV")
if(o instanceof D.ba)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bu()
n.sa7(null)
n.saC(null)
n.c=null
n.d=0
o.d=n}H.l(s,r)
if(n.a==null)n.sa7(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bZ(a,b,this,[u])
u.b=!0
this.ad(u)},
fw:function(a,b){var u,t,s,r
u=D.V
H.m(b,"$ih",[u],"$ah")
for(t=b.gN(b),s=this.gcu();t.v();){r=t.gH(t)
C.a.A(this.e,r)
r.gu().A(0,s)}u=new D.c_(a,b,this,[u])
u.b=!0
this.ad(u)},
eu:function(a){var u=C.a.al(this.e,a)
return u},
sey:function(a){this.e=H.m(a,"$ib",[D.ba],"$ab")},
sfF:function(a){this.f=H.m(a,"$ib",[D.dg],"$ab")},
sh2:function(a){this.r=H.m(a,"$ib",[D.dq],"$ab")},
sha:function(a){this.x=H.m(a,"$ib",[D.du],"$ab")},
shb:function(a){this.y=H.m(a,"$ib",[D.dv],"$ab")},
shc:function(a){this.z=H.m(a,"$ib",[D.dw],"$ab")},
$ah:function(){return[D.V]},
$aU:function(){return[D.V]}}
D.dg.prototype={$iV:1,$iaX:1}
D.dq.prototype={$iV:1,$iaX:1}
D.du.prototype={$iV:1,$iaX:1}
D.dv.prototype={$iV:1,$iaX:1}
D.dw.prototype={$iV:1,$iaX:1}
V.Z.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.bs.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bs))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}}
V.f_.prototype={}
V.da.prototype={
a0:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return u},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.da))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
if(!(Math.abs(b.e-this.e)<t))return!1
if(!(Math.abs(b.f-this.f)<t))return!1
if(!(Math.abs(b.r-this.r)<t))return!1
if(!(Math.abs(b.x-this.x)<t))return!1
if(!(Math.abs(b.y-this.y)<t))return!1
return!0},
i:function(a){var u,t,s,r,q,p,o,n
u=[P.w]
t=V.bH(H.d([this.a,this.d,this.r],u),3,0)
s=V.bH(H.d([this.b,this.e,this.x],u),3,0)
r=V.bH(H.d([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.e(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.e(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.e(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.e(t,1)
n=" "+t[1]+", "
if(1>=p)return H.e(s,1)
n=n+s[1]+", "
if(1>=o)return H.e(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.e(t,2)
u=" "+t[2]+", "
if(2>=p)return H.e(s,2)
u=u+s[2]+", "
if(2>=o)return H.e(r,2)
return n+(u+r[2]+"]")}}
V.a7.prototype={
a0:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return u},
de:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=this.f
s=this.b
r=this.e
q=u*t-s*r
p=this.r
o=this.c
n=u*p-o*r
m=this.x
l=this.d
k=u*m-l*r
j=s*p-o*t
i=s*m-l*t
h=o*m-l*p
g=this.y
f=this.cy
e=this.z
d=this.cx
c=g*f-e*d
b=this.db
a=this.Q
a0=g*b-a*d
a1=this.dx
a2=this.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
if(Math.abs(a7-0)<$.I().a)return V.jc()
a8=1/a7
a9=-r
b0=-d
return V.aV((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
R:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
o=this.d
n=b2.cx
m=b2.b
l=b2.f
k=b2.z
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
f=b2.db
e=b2.d
d=b2.x
c=b2.ch
b=b2.dx
a=this.e
a0=this.f
a1=this.r
a2=this.x
a3=this.y
a4=this.z
a5=this.Q
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.aV(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
bX:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.M(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
aO:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.ap(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
if(!(Math.abs(b.e-this.e)<t))return!1
if(!(Math.abs(b.f-this.f)<t))return!1
if(!(Math.abs(b.r-this.r)<t))return!1
if(!(Math.abs(b.x-this.x)<t))return!1
if(!(Math.abs(b.y-this.y)<t))return!1
if(!(Math.abs(b.z-this.z)<t))return!1
if(!(Math.abs(b.Q-this.Q)<t))return!1
if(!(Math.abs(b.ch-this.ch)<t))return!1
if(!(Math.abs(b.cx-this.cx)<t))return!1
if(!(Math.abs(b.cy-this.cy)<t))return!1
if(!(Math.abs(b.db-this.db)<t))return!1
if(!(Math.abs(b.dx-this.dx)<t))return!1
return!0},
i:function(a){return this.B()},
dd:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.w]
t=V.bH(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bH(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bH(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bH(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.e(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.e(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.e(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.e(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.e(t,1)
l=l+t[1]+", "
if(1>=o)return H.e(s,1)
l=l+s[1]+", "
if(1>=n)return H.e(r,1)
l=l+r[1]+", "
if(1>=m)return H.e(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.e(t,2)
p=p+t[2]+", "
if(2>=o)return H.e(s,2)
p=p+s[2]+", "
if(2>=n)return H.e(r,2)
p=p+r[2]+", "
if(2>=m)return H.e(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.e(t,3)
l=l+t[3]+", "
if(3>=o)return H.e(s,3)
l=l+s[3]+", "
if(3>=n)return H.e(r,3)
l=l+r[3]+", "
if(3>=m)return H.e(q,3)
return p+(l+q[3]+"]")},
B:function(){return this.dd("",3,0)},
q:function(a){return this.dd(a,3,0)}}
V.ae.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ae))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.ap.prototype={
W:function(a,b){return new V.ap(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ap))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.di.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.di))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}}
V.dl.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dl))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}}
V.b0.prototype={
bP:function(a){var u,t
u=this.a
if(typeof u!=="number")return u.R()
t=this.b
if(typeof t!=="number")return t.R()
return Math.sqrt(u*u+t*t)},
D:function(a,b){var u,t
if(Math.abs(b-0)<$.I().a){u=$.k2
if(u==null){u=new V.b0(0,0)
$.k2=u}return u}u=this.a
if(typeof u!=="number")return u.D()
t=this.b
if(typeof t!=="number")return t.D()
return new V.b0(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b0))return!1
u=b.a
t=this.a
s=$.I()
s.toString
if(typeof u!=="number")return u.W()
if(typeof t!=="number")return H.bn(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.W()
if(typeof t!=="number")return H.bn(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.M.prototype={
bP:function(a){return Math.sqrt(this.K(this))},
K:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bQ:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.M(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aE:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.M(u*t-s*r,s*q-p*t,p*r-u*q)},
J:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
aA:function(a){return new V.M(-this.a,-this.b,-this.c)},
D:function(a,b){if(Math.abs(b-0)<$.I().a)return V.cm()
return new V.M(this.a/b,this.b/b,this.c/b)},
df:function(){var u=$.I().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
U.cQ.prototype={
gu:function(){var u=this.b
if(u==null){u=D.ao()
this.b=u}return u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cQ))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.q("          ")}}
U.bx.prototype={}
U.dm.prototype={
gu:function(){var u=this.y
if(u==null){u=D.ao()
this.y=u}return u},
aq:function(a){var u=this.y
if(u!=null)u.M(a)},
sdG:function(a){var u
a=V.jw(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.I().a)){this.a=a
u=new D.O("yaw",u,a,this,[P.w])
u.b=!0
this.aq(u)}},
sdn:function(a,b){var u
b=V.jw(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.I().a)){this.b=b
u=new D.O("pitch",u,b,this,[P.w])
u.b=!0
this.aq(u)}},
sdu:function(a){var u
a=V.jw(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.I().a)){this.c=a
u=new D.O("roll",u,a,this,[P.w])
u.b=!0
this.aq(u)}},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dm))return!1
u=this.a
t=b.a
s=$.I().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"], ["+V.H(this.d,3,0)+", "+V.H(this.e,3,0)+", "+V.H(this.f,3,0)+"]"}}
M.cV.prototype={
ae:function(a){var u
H.p(a,"$iB")
u=this.x
if(u!=null)u.M(a)},
e9:function(){return this.ae(null)},
f0:function(a,b){var u,t,s,r,q,p,o,n
u=E.aa
H.m(b,"$ih",[u],"$ah")
for(t=b.length,s=this.ga6(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bu()
n.sa7(null)
n.saC(null)
n.c=null
n.d=0
o.z=n}H.l(s,r)
if(n.a==null)n.sa7(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bZ(a,b,this,[u])
u.b=!0
this.ae(u)},
f2:function(a,b){var u,t,s
u=E.aa
H.m(b,"$ih",[u],"$ah")
for(t=b.gN(b),s=this.ga6();t.v();)t.gH(t).gu().A(0,s)
u=new D.c_(a,b,this,[u])
u.b=!0
this.ae(u)},
sdw:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gu().A(0,this.ga6())
t=this.c
this.c=a
if(a!=null)a.gu().h(0,this.ga6())
u=new D.O("technique",t,this.c,this,[O.bC])
u.b=!0
this.ae(u)}},
gu:function(){var u=this.x
if(u==null){u=D.ao()
this.x=u}return u},
ay:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.ds(this.c)
u=this.b
u.toString
t=a.a
C.b.hF(t,36160,null)
C.b.bF(t,2884)
C.b.bF(t,2929)
C.b.hX(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.bn(s)
o=C.i.a4(p*s)
p=q.b
if(typeof r!=="number")return H.bn(r)
n=C.i.a4(p*r)
p=C.i.a4(q.c*s)
a.c=p
q=C.i.a4(q.d*r)
a.d=q
C.b.iT(t,o,n,p,q)
C.b.hL(t,u.c)
u=u.a
C.b.hK(t,u.a,u.b,u.c,u.d)
C.b.hJ(t,16640)
u=this.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aV(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dr(i)
t=$.jN
if(t==null){t=V.jP()
q=V.k6()
p=$.k3
if(p==null){p=new V.M(0,0,-1)
$.k3=p}p=V.jJ(t,q,p)
$.jN=p
h=p}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.R(0,h)}a.db.dr(h)
u=this.c
if(u!=null)u.bb(0,a)
for(u=this.d.a,u=new J.ak(u,u.length,0,[H.x(u,0)]);u.v();)u.d.bb(0,a)
for(u=this.d.a,u=new J.ak(u,u.length,0,[H.x(u,0)]);u.v();)u.d.ay(a)
this.a.toString
a.cy.bT()
a.db.bT()
this.b.toString
a.dq()},
se8:function(a,b){this.d=H.m(b,"$iU",[E.aa],"$aU")},
$imc:1}
A.cI.prototype={}
A.eD.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
i1:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.b.cR(r.a,r.c)}},
hZ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.b.cP(r.a,r.c)}}}
A.fu.prototype={
e0:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.bh("")
t=a7.fx
if(t){u.a="uniform mat4 objMat;\n"
s="uniform mat4 objMat;\n"}else s=""
r=a7.fy
if(r){s+="uniform mat4 viewObjMat;\n"
u.a=s}s+="uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s+="attribute vec3 posAttr;\n"
u.a=s
q=a7.r1
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=a7.r2
if(p){s+="attribute vec3 binmAttr;\n"
u.a=s}u.a=s+"\n"
a7.hg(u)
a7.hn(u)
a7.hh(u)
a7.hv(u)
a7.hw(u)
a7.hp(u)
a7.hA(u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=a7.x1
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
s+="void main()\n"
u.a=s
s+="{\n"
u.a=s
if(o){s+="   setupBendData();\n"
u.a=s}if(q){s+="   normalVec = getNorm();\n"
u.a=s}if(p){s+="   binormalVec = getBinm();\n"
u.a=s}if(a7.rx){s+="   txt2D = getTxt2D();\n"
u.a=s}if(a7.ry){s+="   txtCube = getTxtCube();\n"
u.a=s}if(a7.k3){s+="   objPos = getObjPos();\n"
u.a=s}if(a7.k4){s+="   viewPos = getViewPos();\n"
u.a=s}s+="   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
n=s.charCodeAt(0)==0?s:s
s=this.z
u=new P.bh("")
u.a="precision mediump float;\n"
u.a="precision mediump float;\n\n"
q=s.r1
if(q){u.a="precision mediump float;\n\nvarying vec3 normalVec;\n"
p="precision mediump float;\n\nvarying vec3 normalVec;\n"}else p="precision mediump float;\n\n"
if(s.r2){p+="varying vec3 binormalVec;\n"
u.a=p}if(s.rx){p+="varying vec2 txt2D;\n"
u.a=p}if(s.ry){p+="varying vec3 txtCube;\n"
u.a=p}if(s.k3){p+="varying vec3 objPos;\n"
u.a=p}if(s.k4){p+="varying vec3 viewPos;\n"
u.a=p}p+="\n"
u.a=p
o=s.y2
if(o){p+="uniform mat4 colorMat;\n"
u.a=p}if(s.fr){p+="uniform mat4 invViewMat;\n"
u.a=p}u.a=p+"\n"
s.hk(u)
s.hf(u)
s.hi(u)
s.hl(u)
s.ht(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.hr(u)
s.hs(u)}s.ho(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=s.y
if(l!==C.c){m+="uniform float alpha;\n"
u.a=m
if(l!==C.f){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.d){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.e){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.c:m+="   return 1.0;\n"
u.a=m
break
case C.f:m+="   return alpha;\n"
u.a=m
break
case C.d:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.e:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break}m+="}\n"
u.a=m
m+="\n"
u.a=m
l=s.k2
if(l){m+="// === Lighting ===\n"
u.a=m
m+="\n"
u.a=m
m+="vec3 lightValue(vec3 norm, vec3 litClr, vec3 litVec)\n"
u.a=m
m+="{\n"
u.a=m
u.a=m+"   if ((litClr.r < 0.001) && (litClr.g < 0.001) && (litClr.b < 0.001)) return litClr;\n"
k=H.d([],[P.n])
if(s.b!==C.c)C.a.h(k,"ambient()")
if(s.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.t(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.hj(u)
s.hq(u)
s.hu(u)
s.hx(u)
s.hy(u)
s.hz(u)
s.hm(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m+="   float alpha = alphaValue();\n"
u.a=m
if(q){q=m+"   vec3 norm = normal();\n"
u.a=q}else q=m
if(p)u.a=q+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.d([],[P.n])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(s.c!==C.c)u.a+="   setDiffuseColor();\n"
if(s.d!==C.c)u.a+="   setInvDiffuseColor();\n"
if(s.e!==C.c)u.a+="   setSpecularColor();\n"
if(s.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(s.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(s.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(s.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(s.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(s.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(s.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(s.a!==C.c)C.a.h(j,"emission()")
if(s.r!==C.c)C.a.h(j,"reflect(refl)")
if(s.x!==C.c)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.t(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.cn(n,35633)
this.f=this.cn(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.cJ(s,q,this.e)
C.b.cJ(s,this.r,this.f)
C.b.ia(s,this.r)
if(!H.kk(C.b.bc(s,this.r,35714))){h=C.b.dO(s,this.r)
C.b.hT(s,this.r)
H.r(P.t("Failed to link shader: "+H.k(h)))}this.fY()
this.h_()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a7.fr)this.id=H.i(this.y.l(0,"invViewMat"),"$iag")
if(t)this.dy=H.i(this.y.l(0,"objMat"),"$iag")
if(r)this.fr=H.i(this.y.l(0,"viewObjMat"),"$iag")
this.fy=H.i(this.y.l(0,"projViewObjMat"),"$iag")
if(a7.x2)this.k1=H.i(this.y.l(0,"txt2DMat"),"$icg")
if(a7.y1)this.k2=H.i(this.y.l(0,"txtCubeMat"),"$iag")
if(a7.y2)this.k3=H.i(this.y.l(0,"colorMat"),"$iag")
this.sen(H.d([],[A.ag]))
t=a7.aa
if(t>0){this.k4=H.p(this.y.l(0,"bendMatCount"),"$iG")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.r(P.t("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.i(f,"$iag"))}}t=a7.a
if(t!==C.c){this.r2=H.i(this.y.l(0,"emissionClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.d:this.rx=H.i(this.y.l(0,"emissionTxt"),"$ia8")
this.x1=H.i(this.y.l(0,"nullEmissionTxt"),"$iG")
break
case C.e:this.ry=H.i(this.y.l(0,"emissionTxt"),"$ia9")
this.x1=H.i(this.y.l(0,"nullEmissionTxt"),"$iG")
break}}t=a7.b
if(t!==C.c){this.x2=H.i(this.y.l(0,"ambientClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.d:this.y1=H.i(this.y.l(0,"ambientTxt"),"$ia8")
this.aa=H.i(this.y.l(0,"nullAmbientTxt"),"$iG")
break
case C.e:this.y2=H.i(this.y.l(0,"ambientTxt"),"$ia9")
this.aa=H.i(this.y.l(0,"nullAmbientTxt"),"$iG")
break}}t=a7.c
if(t!==C.c){this.a2=H.i(this.y.l(0,"diffuseClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.d:this.aW=H.i(this.y.l(0,"diffuseTxt"),"$ia8")
this.aX=H.i(this.y.l(0,"nullDiffuseTxt"),"$iG")
break
case C.e:this.cS=H.i(this.y.l(0,"diffuseTxt"),"$ia9")
this.aX=H.i(this.y.l(0,"nullDiffuseTxt"),"$iG")
break}}t=a7.d
if(t!==C.c){this.aY=H.i(this.y.l(0,"invDiffuseClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.d:this.cT=H.i(this.y.l(0,"invDiffuseTxt"),"$ia8")
this.aZ=H.i(this.y.l(0,"nullInvDiffuseTxt"),"$iG")
break
case C.e:this.cU=H.i(this.y.l(0,"invDiffuseTxt"),"$ia9")
this.aZ=H.i(this.y.l(0,"nullInvDiffuseTxt"),"$iG")
break}}t=a7.e
if(t!==C.c){this.b1=H.i(this.y.l(0,"shininess"),"$iR")
this.b_=H.i(this.y.l(0,"specularClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.d:this.cV=H.i(this.y.l(0,"specularTxt"),"$ia8")
this.b0=H.i(this.y.l(0,"nullSpecularTxt"),"$iG")
break
case C.e:this.cW=H.i(this.y.l(0,"specularTxt"),"$ia9")
this.b0=H.i(this.y.l(0,"nullSpecularTxt"),"$iG")
break}}switch(a7.f){case C.c:break
case C.f:break
case C.d:this.cX=H.i(this.y.l(0,"bumpTxt"),"$ia8")
this.b2=H.i(this.y.l(0,"nullBumpTxt"),"$iG")
break
case C.e:this.cY=H.i(this.y.l(0,"bumpTxt"),"$ia9")
this.b2=H.i(this.y.l(0,"nullBumpTxt"),"$iG")
break}if(a7.dy){this.cZ=H.i(this.y.l(0,"envSampler"),"$ia9")
this.d_=H.i(this.y.l(0,"nullEnvTxt"),"$iG")
t=a7.r
if(t!==C.c){this.b3=H.i(this.y.l(0,"reflectClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.d:this.d0=H.i(this.y.l(0,"reflectTxt"),"$ia8")
this.b4=H.i(this.y.l(0,"nullReflectTxt"),"$iG")
break
case C.e:this.d1=H.i(this.y.l(0,"reflectTxt"),"$ia9")
this.b4=H.i(this.y.l(0,"nullReflectTxt"),"$iG")
break}}t=a7.x
if(t!==C.c){this.b5=H.i(this.y.l(0,"refraction"),"$iR")
this.b6=H.i(this.y.l(0,"refractClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.d:this.d2=H.i(this.y.l(0,"refractTxt"),"$ia8")
this.b7=H.i(this.y.l(0,"nullRefractTxt"),"$iG")
break
case C.e:this.d3=H.i(this.y.l(0,"refractTxt"),"$ia9")
this.b7=H.i(this.y.l(0,"nullRefractTxt"),"$iG")
break}}}t=a7.y
if(t!==C.c){this.b8=H.i(this.y.l(0,"alpha"),"$iR")
switch(t){case C.c:break
case C.f:break
case C.d:this.d4=H.i(this.y.l(0,"alphaTxt"),"$ia8")
this.b9=H.i(this.y.l(0,"nullAlphaTxt"),"$iG")
break
case C.e:this.d5=H.i(this.y.l(0,"alphaTxt"),"$ia9")
this.b9=H.i(this.y.l(0,"nullAlphaTxt"),"$iG")
break}}this.sea(H.d([],[A.cf]))
this.seb(H.d([],[A.ch]))
this.sec(H.d([],[A.ci]))
this.sed(H.d([],[A.cj]))
this.see(H.d([],[A.ck]))
this.sef(H.d([],[A.cl]))
if(a7.k2){t=a7.z
if(t>0){this.d6=H.p(this.y.l(0,"dirLightCount"),"$iG")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iE")
s=this.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iE")
s=this.bG;(s&&C.a).h(s,new A.cf(g,f,e))}}t=a7.Q
if(t>0){this.d7=H.p(this.y.l(0,"pntLightCount"),"$iG")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iE")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iE")
s=this.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iE")
s=this.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iR")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iR")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iR")
s=this.bH;(s&&C.a).h(s,new A.ch(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.d8=H.p(this.y.l(0,"spotLightCount"),"$iG")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iE")
s=this.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iE")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iE")
s=this.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iE")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iR")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iR")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iR")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iR")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$iR")
s=this.bI;(s&&C.a).h(s,new A.ci(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.d9=H.p(this.y.l(0,"txtDirLightCount"),"$iG")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iE")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iE")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iE")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iE")
s=this.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iE")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iG")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$ia8")
s=this.bJ;(s&&C.a).h(s,new A.cj(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.da=H.p(this.y.l(0,"txtPntLightCount"),"$iG")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iE")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iE")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$icg")
s=this.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iE")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iG")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iR")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iR")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iR")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$ia9")
s=this.bK;(s&&C.a).h(s,new A.ck(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.dc=H.p(this.y.l(0,"txtSpotLightCount"),"$iG")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iE")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iE")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iE")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iE")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iE")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iG")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iE")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iR")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$iR")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a3,"$iR")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a4,"$iR")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a5,"$iR")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a6,"$ia8")
s=this.bL;(s&&C.a).h(s,new A.cl(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
a1:function(a,b,c){if(c==null||!c.gX(c))C.b.G(b.a,b.d,1)
else{a.dU(c)
C.b.G(b.a,b.d,0)}},
Y:function(a,b,c){C.b.G(b.a,b.d,1)},
sen:function(a){this.r1=H.m(a,"$ib",[A.ag],"$ab")},
sea:function(a){this.bG=H.m(a,"$ib",[A.cf],"$ab")},
seb:function(a){this.bH=H.m(a,"$ib",[A.ch],"$ab")},
sec:function(a){this.bI=H.m(a,"$ib",[A.ci],"$ab")},
sed:function(a){this.bJ=H.m(a,"$ib",[A.cj],"$ab")},
see:function(a){this.bK=H.m(a,"$ib",[A.ck],"$ab")},
sef:function(a){this.bL=H.m(a,"$ib",[A.cl],"$ab")}}
A.fx.prototype={
hg:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aa+"];\n"
u+="attribute vec4 bendAttr;\n"
a.a=u
u+="\n"
a.a=u
u+="float weightSum;\n"
a.a=u
u+="vec3 bendPos;\n"
a.a=u
t=this.r1
if(t){u+="vec3 bendNorm;\n"
a.a=u}s=this.r2
if(s){u+="vec3 bendBinm;\n"
a.a=u}u+="\n"
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
u+="         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
a.a=u
if(t){u+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
a.a=u}if(s){u+="         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n"
a.a=u}u+="      }\n"
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
u+="   bendPos = vec3(0.0, 0.0, 0.0);\n"
a.a=u
if(t){u+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
a.a=u}if(s){u+="   bendBinm = vec3(0.0, 0.0, 0.0);\n"
a.a=u}u+="   weightSum = 0.0;\n"
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
u+="      bendPos += posAttr*weight;\n"
a.a=u
if(t){u+="      bendNorm += normAttr*weight;\n"
a.a=u}if(s){u+="      bendBinm += binmAttr*weight;\n"
a.a=u}u+="   }\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      bendPos = bendPos/weightSum;\n"
a.a=u
u+="   }\n"
a.a=u
if(t){u+="   bendNorm = normalize(bendNorm);\n"
a.a=u}if(s){u+="   bendBinm = normalize(bendBinm);\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
hn:function(a){var u
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
hh:function(a){var u
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
hv:function(a){var u,t
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
t+="{\n"
a.a=t
if(u){u=t+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
a.a=u}else{u=t+"   return vec3(txt2DAttr, 1.0).xy;\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
hw:function(a){var u,t
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
t+="{\n"
a.a=t
if(u){u=t+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n"
a.a=u}else{u=t+"   return vec4(txtCubeAttr, 1.0).xyz;\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
hp:function(a){var u
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
hA:function(a){var u
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
ag:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.e(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.c2(c,1))+"Txt;\n"
a.a=u
if(b===C.d)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
hk:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.ag(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   return emissionClr;\n"
a.a=u
break
case C.d:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
hf:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.ag(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   return ambientClr;\n"
a.a=u
break
case C.d:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
hi:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.ag(a,u,"diffuse")
t=a.a+="vec3 diffuseColor;\n"
t+="\n"
a.a=t
t+="void setDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.d:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*textureCube(diffuseTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float scalar = dot(norm, -litVec);\n"
a.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return diffuseColor*scalar;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
hl:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.ag(a,u,"invDiffuse")
t=a.a+="vec3 invDiffuseColor;\n"
t+="\n"
a.a=t
t+="void setInvDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.d:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*textureCube(invDiffuseTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
a.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return invDiffuseColor*scalar;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
ht:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.ag(a,u,"specular")
t=a.a+="uniform float shininess;\n"
t+="vec3 specularColor;\n"
a.a=t
t+="\n"
a.a=t
t+="void setSpecularColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.d:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*textureCube(specularTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 specular(vec3 norm, vec3 litVec)\n"
a.a=u
u+="{\n"
a.a=u
u+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
a.a=u
u+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
a.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return specularColor*pow(scalar, shininess);\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
ho:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.c:break
case C.f:break
case C.d:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.e:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break}u+="vec3 normal()\n"
a.a=u
u+="{\n"
a.a=u
switch(t){case C.c:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.f:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.d:u+="   if(nullBumpTxt > 0) return normalVec;\n"
a.a=u
u+="   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n"
a.a=u
u+="   vec3 n = normalize(normalVec);\n"
a.a=u
u+="   vec3 b = normalize(binormalVec);\n"
a.a=u
u+="   vec3 c = normalize(cross(b, n));\n"
a.a=u
u+="   b = cross(n, c);\n"
a.a=u
u+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
a.a=u
u+="                   -c.x, -c.y, -c.z,\n"
a.a=u
u+="                    n.x,  n.y,  n.z);\n"
a.a=u
u+="   return mat * normalize(2.0*color - 1.0);\n"
a.a=u
break
case C.e:u+="   if(nullBumpTxt > 0) return normalVec;\n"
a.a=u
u+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n"
a.a=u
u+="   vec3 n = normalize(normalVec);\n"
a.a=u
u+="   vec3 b = normalize(binormalVec);\n"
a.a=u
u+="   vec3 c = cross(b, n);\n"
a.a=u
u+="   b = cross(n, c);\n"
a.a=u
u+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
a.a=u
u+="                   -c.x, -c.y, -c.z,\n"
a.a=u
u+="                    n.x,  n.y,  n.z);\n"
a.a=u
u+="   return mat * normalize(2.0*color - 1.0);\n"
a.a=u
break}u+="}\n"
a.a=u
a.a=u+"\n"},
hr:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.ag(a,u,"reflect")
t=a.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.d:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
a.a=u
u+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
hs:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.ag(a,u,"refract")
t=a.a+="uniform float refraction;\n"
t+="\n"
a.a=t
t+="vec3 refract(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.d:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
a.a=u
u+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
a.a=u
u+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
hj:function(a){var u,t
u=this.z
if(u<=0)return
t=a.a+="// === Directional Light ===\n"
t+="\n"
a.a=t
t+="struct DirLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 viewDir;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int dirLightCount;\n"
t=a.a+="uniform DirLight dirLights["+u+"];\n"
t+="\n"
a.a=t
t+="vec3 allDirLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
a.a=t+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
u=a.a+="   for(int i = 0; i < "+u+"; ++i)\n"
u+="   {\n"
a.a=u
u+="      if(i >= dirLightCount) break;\n"
a.a=u
u+="      DirLight lit = dirLights[i];\n"
a.a=u
u+="      lightAccum += lightValue(norm, lit.color, lit.viewDir);\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
hq:function(a){var u,t
u=this.Q
if(u<=0)return
t=a.a+="// === Point Light ===\n"
t+="\n"
a.a=t
t+="struct PointLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 point;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int pntLightCount;\n"
t=a.a+="uniform PointLight pntLights["+u+"];\n"
t+="\n"
a.a=t
t+="vec3 pointLightValue(vec3 norm, PointLight lit)\n"
a.a=t
t+="{\n"
a.a=t
t+="   float dist = length(objPos - lit.point);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   return lightValue(norm, lit.color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allPointLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
a.a=t+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
u=a.a+="   for(int i = 0; i < "+u+"; ++i)\n"
u+="   {\n"
a.a=u
u+="      if(i >= pntLightCount) break;\n"
a.a=u
u+="      lightAccum += pointLightValue(norm, pntLights[i]);\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
hu:function(a){var u,t
u=this.ch
if(u<=0)return
t=a.a+="// === Spot Light ===\n"
t+="\n"
a.a=t
t+="struct SpotLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 objPnt;\n"
a.a=t
t+="   vec3 objDir;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   float cutoff;\n"
a.a=t
t+="   float coneAngle;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int spotLightCount;\n"
t=a.a+="uniform SpotLight spotLights["+u+"];\n"
t+="\n"
a.a=t
t+="vec3 spotLightValue(vec3 norm, SpotLight lit)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=t
t+="   float dist = length(dir);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   float angle = acos(dot(normalize(dir), lit.objDir));\n"
a.a=t
t+="   float scale = (lit.cutoff-angle)/(lit.cutoff-lit.coneAngle);\n"
a.a=t
t+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   if(scale > 1.0) scale = 1.0;\n"
a.a=t
t+="   return lightValue(norm, lit.color*attenuation*scale, normalize(viewPos - lit.viewPnt));\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allSpotLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
a.a=t+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
u=a.a+="   for(int i = 0; i < "+u+"; ++i)\n"
u+="   {\n"
a.a=u
u+="      if(i >= spotLightCount) break;\n"
a.a=u
u+="      lightAccum += spotLightValue(norm, spotLights[i]);\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
hx:function(a){var u,t,s
u=this.cx
if(u<=0)return
t=a.a+="// === Texture Directional Light ===\n"
t+="\n"
a.a=t
t+="struct TexturedDirLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 objUp;\n"
a.a=t
t+="   vec3 objRight;\n"
a.a=t
t+="   vec3 objDir;\n"
a.a=t
t+="   vec3 viewDir;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   int nullTxt;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int txtDirLightCount;\n"
t=a.a+="uniform TexturedDirLight txtDirLights["+u+"];\n"
for(s=0;s<u;++s)t=a.a+="uniform sampler2D txtDirLightsTxt2D"+s+";\n"
t+="\n"
a.a=t
t+="vec3 txtDirLightValue(vec3 norm, TexturedDirLight lit, sampler2D txt2D)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=t
t+="   else\n"
a.a=t
t+="   {\n"
a.a=t
t+="      vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
a.a=t
t+="      float tu = dot(offset, lit.objUp);\n"
a.a=t
t+="      float tv = dot(offset, lit.objRight);\n"
a.a=t
t+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightValue(norm, color, lit.viewDir);\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allTxtDirLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=t
for(s=0;s<u;++s){a.a+="   if(txtDirLightCount <= "+s+") return lightAccum;\n"
t=a.a+="   lightAccum += txtDirLightValue(norm, txtDirLights["+s+"], txtDirLightsTxt2D"+s+");\n"}u=t+"   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
hy:function(a){var u,t,s
u=this.cy
if(u<=0)return
t=a.a+="// === Texture Point Light ===\n"
t+="\n"
a.a=t
t+="struct TexturedPointLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 point;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   mat3 invViewRotMat;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   int nullTxt;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int txtPntLightCount;\n"
t=a.a+="uniform TexturedPointLight txtPntLights["+u+"];\n"
for(s=0;s<u;++s)t=a.a+="uniform samplerCube txtPntLightsTxtCube"+s+";\n"
t+="\n"
a.a=t
t+="vec3 txtPointLightValue(vec3 norm, TexturedPointLight lit, samplerCube txtCube)\n"
a.a=t
t+="{\n"
a.a=t
t+="   float dist = length(objPos - lit.point);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=t
t+="   else\n"
a.a=t
t+="   {\n"
a.a=t
t+="      vec3 invNormDir = lit.invViewRotMat*normDir;\n"
a.a=t
t+="      color = lit.color*textureCube(txtCube, invNormDir).xyz;\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightValue(norm, attenuation*color, normDir);\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allTxtPointLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=t
for(s=0;s<u;++s){a.a+="   if(txtPntLightCount <= "+s+") return lightAccum;\n"
t=a.a+="   lightAccum += txtPointLightValue(norm, txtPntLights["+s+"], txtPntLightsTxtCube"+s+");\n"}u=t+"   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
hz:function(a){var u,t,s
u=this.db
if(u<=0)return
t=a.a+="// === Texture Spot Light ===\n"
t+="\n"
a.a=t
t+="struct TexturedSpotLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 objPnt;\n"
a.a=t
t+="   vec3 objDir;\n"
a.a=t
t+="   vec3 objUp;\n"
a.a=t
t+="   vec3 objRight;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   int nullTxt;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   float tuScalar;\n"
a.a=t
t+="   float tvScalar;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int txtSpotLightCount;\n"
t=a.a+="uniform TexturedSpotLight txtSpotLights["+u+"];\n"
for(s=0;s<u;++s)t=a.a+="uniform sampler2D txtSpotLightsTxt2D"+s+";\n"
t+="\n"
a.a=t
t+="vec3 txtSpotLightValue(vec3 norm, TexturedSpotLight lit, sampler2D txt2D)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=t
t+="   float dist = length(dir);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   vec3 normDir = normalize(dir);\n"
a.a=t
t+="   float zScale = dot(normDir, lit.objDir);\n"
a.a=t
t+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   normDir = normDir/zScale;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=t
t+="   else\n"
a.a=t
t+="   {\n"
a.a=t
t+="      float tu = dot(normDir, lit.objUp)*lit.tuScalar+0.5;\n"
a.a=t
t+="      if((tu > 1.0) || (tu < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="      float tv = dot(normDir, lit.objRight)*lit.tvScalar+0.5;\n"
a.a=t
t+="      if((tv > 1.0) || (tv < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightValue(norm, color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allTxtSpotLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=t
for(s=0;s<u;++s){a.a+="   if(txtSpotLightCount <= "+s+") return lightAccum;\n"
t=a.a+="   lightAccum += txtSpotLightValue(norm, txtSpotLights["+s+"], txtSpotLightsTxt2D"+s+");\n"}u=t+"   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
hm:function(a){var u
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
i:function(a){return this.a2}}
A.cf.prototype={}
A.cj.prototype={}
A.ch.prototype={}
A.ck.prototype={}
A.ci.prototype={}
A.cl.prototype={}
A.c9.prototype={
e3:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cn:function(a,b){var u,t,s
u=this.a
t=C.b.hR(u,b)
C.b.dV(u,t,a)
C.b.hN(u,t)
if(!H.kk(C.b.dQ(u,t,35713))){s=C.b.dP(u,t)
C.b.hU(u,t)
throw H.f(P.t("Error compiling shader '"+H.k(t)+"': "+H.k(s)))}return t},
fY:function(){var u,t,s,r,q,p
u=H.d([],[A.cI])
t=this.a
s=H.a5(C.b.bc(t,this.r,35721))
if(typeof s!=="number")return H.bn(s)
r=0
for(;r<s;++r){q=C.b.dJ(t,this.r,r)
p=C.b.dL(t,this.r,q.name)
C.a.h(u,new A.cI(t,q.name,p))}this.x=new A.eD(u)},
h_:function(){var u,t,s,r,q,p
u=H.d([],[A.dz])
t=this.a
s=H.a5(C.b.bc(t,this.r,35718))
if(typeof s!=="number")return H.bn(s)
r=0
for(;r<s;++r){q=C.b.dK(t,this.r,r)
p=C.b.dR(t,this.r,q.name)
C.a.h(u,this.hS(q.type,q.size,q.name,p))}this.y=new A.hL(u)},
ap:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.G(u,t,b,c)
else return A.jf(u,t,b,a,c)},
ev:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a8(u,t,b,c)
else return A.jf(u,t,b,a,c)},
ew:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a9(u,t,b,c)
else return A.jf(u,t,b,a,c)},
aV:function(a,b){return new P.dO(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
hS:function(a,b,c,d){switch(a){case 5120:return this.ap(b,c,d)
case 5121:return this.ap(b,c,d)
case 5122:return this.ap(b,c,d)
case 5123:return this.ap(b,c,d)
case 5124:return this.ap(b,c,d)
case 5125:return this.ap(b,c,d)
case 5126:return new A.R(this.a,this.r,c,d)
case 35664:return new A.hG(this.a,this.r,c,d)
case 35665:return new A.E(this.a,this.r,c,d)
case 35666:return new A.hJ(this.a,this.r,c,d)
case 35667:return new A.hH(this.a,this.r,c,d)
case 35668:return new A.hI(this.a,this.r,c,d)
case 35669:return new A.hK(this.a,this.r,c,d)
case 35674:return new A.hM(this.a,this.r,c,d)
case 35675:return new A.cg(this.a,this.r,c,d)
case 35676:return new A.ag(this.a,this.r,c,d)
case 35678:return this.ev(b,c,d)
case 35680:return this.ew(b,c,d)
case 35670:throw H.f(this.aV("BOOL",c))
case 35671:throw H.f(this.aV("BOOL_VEC2",c))
case 35672:throw H.f(this.aV("BOOL_VEC3",c))
case 35673:throw H.f(this.aV("BOOL_VEC4",c))
default:throw H.f(P.t("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}}
A.bt.prototype={
i:function(a){return this.b}}
A.dz.prototype={}
A.hL.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
l:function(a,b){var u=this.j(0,b)
if(u==null)throw H.f(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.B()},
i4:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r)s+=u[r].i(0)+a
return s},
B:function(){return this.i4("\n")}}
A.G.prototype={
i:function(a){return"Uniform1i: "+H.k(this.c)}}
A.hH.prototype={
i:function(a){return"Uniform2i: "+H.k(this.c)}}
A.hI.prototype={
i:function(a){return"Uniform3i: "+H.k(this.c)}}
A.hK.prototype={
i:function(a){return"Uniform4i: "+H.k(this.c)}}
A.hF.prototype={
i:function(a){return"Uniform1iv: "+H.k(this.c)},
shd:function(a){this.e=H.m(a,"$ib",[P.y],"$ab")}}
A.R.prototype={
i:function(a){return"Uniform1f: "+H.k(this.c)}}
A.hG.prototype={
i:function(a){return"Uniform2f: "+H.k(this.c)}}
A.E.prototype={
i:function(a){return"Uniform3f: "+H.k(this.c)}}
A.hJ.prototype={
i:function(a){return"Uniform4f: "+H.k(this.c)}}
A.hM.prototype={
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}}
A.cg.prototype={
a5:function(a){var u=new Float32Array(H.cz(H.m(a,"$ib",[P.w],"$ab")))
C.b.dD(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.k(this.c)}}
A.ag.prototype={
a5:function(a){var u=new Float32Array(H.cz(H.m(a,"$ib",[P.w],"$ab")))
C.b.dE(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.k(this.c)}}
A.a8.prototype={
dU:function(a){var u,t,s
u=a.gX(a)
t=this.a
s=this.d
if(!u)C.b.G(t,s,0)
else C.b.G(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.k(this.c)}}
A.a9.prototype={
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}
F.iK.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.bQ(u.b,b).bQ(u.d.bQ(u.c,b),c)
u=new V.ap(t.a,t.b,t.c)
if(!J.T(a.f,u)){a.f=u
u=a.a
if(u!=null)u.T()}a.siL(t.D(0,Math.sqrt(t.K(t))))
u=1-b
s=1-c
s=new V.di(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.T(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.T()}},
$S:29}
F.a_.prototype={
aF:function(){if(!this.gaG()){C.a.A(this.a.a.d.b,this)
this.a.a.T()}this.br()
this.bs()
this.fJ()},
fV:function(a){this.a=a
C.a.h(a.d.b,this)},
fW:function(a){this.b=a
C.a.h(a.d.c,this)},
fX:function(a){this.c=a
C.a.h(a.d.d,this)},
br:function(){var u=this.a
if(u!=null){C.a.A(u.d.b,this)
this.a=null}},
bs:function(){var u=this.b
if(u!=null){C.a.A(u.d.c,this)
this.b=null}},
fJ:function(){var u=this.c
if(u!=null){C.a.A(u.d.d,this)
this.c=null}},
gaG:function(){return this.a==null||this.b==null||this.c==null},
em:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cm()
if(t!=null)q=q.J(0,t)
if(s!=null)q=q.J(0,s)
if(r!=null)q=q.J(0,r)
if(q.df())return
return q.D(0,Math.sqrt(q.K(q)))},
eq:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.W(0,t)
u=new V.M(u.a,u.b,u.c)
q=u.D(0,Math.sqrt(u.K(u)))
u=r.W(0,t)
u=new V.M(u.a,u.b,u.c)
u=q.aE(u.D(0,Math.sqrt(u.K(u))))
return u.D(0,Math.sqrt(u.K(u)))},
bB:function(){if(this.d!=null)return!0
var u=this.em()
if(u==null){u=this.eq()
if(u==null)return!1}this.d=u
this.a.a.T()
return!0},
el:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cm()
if(t!=null)q=q.J(0,t)
if(s!=null)q=q.J(0,s)
if(r!=null)q=q.J(0,r)
if(q.df())return
return q.D(0,Math.sqrt(q.K(q)))},
ep:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=u==null
s=t?null:u.f
r=this.b
q=r==null
p=q?null:r.f
o=this.c
n=o==null
m=n?null:o.f
if(s==null||p==null||m==null)return
l=t?null:u.y
k=q?null:r.y
j=n?null:o.y
if(l==null||k==null||j==null)return
u=k.b
i=u-j.b
if(Math.abs(i-0)<$.I().a){u=m.W(0,p)
u=new V.M(u.a,u.b,u.c)
h=u.D(0,Math.sqrt(u.K(u)))
if(j.a-k.a<0)h=h.aA(0)}else{g=(u-l.b)/i
u=m.W(0,p)
u=new V.ap(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).W(0,s)
u=new V.M(u.a,u.b,u.c)
h=u.D(0,Math.sqrt(u.K(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.aA(0)}u=this.d
if(u!=null){f=u.D(0,Math.sqrt(u.K(u)))
u=f.aE(h)
u=u.D(0,Math.sqrt(u.K(u))).aE(f)
h=u.D(0,Math.sqrt(u.K(u)))}return h},
bz:function(){if(this.e!=null)return!0
var u=this.el()
if(u==null){u=this.ep()
if(u==null)return!1}this.e=u
this.a.a.T()
return!0},
ghM:function(a){if(J.T(this.a,this.b))return!0
if(J.T(this.b,this.c))return!0
if(J.T(this.c,this.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
q:function(a){var u,t
if(this.gaG())return a+"disposed"
u=a+C.j.a_(J.aj(this.a.e),0)+", "+C.j.a_(J.aj(this.b.e),0)+", "+C.j.a_(J.aj(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
B:function(){return this.q("")}}
F.f3.prototype={}
F.ha.prototype={
aH:function(a,b,c){var u,t
u=b.a
u.a.a.n()
u=u.e
t=c.a
t.a.a.n()
if(u==t.e){u=b.b
u.a.a.n()
u=u.e
t=c.b
t.a.a.n()
if(u==t.e){u=b.c
u.a.a.n()
u=u.e
t=c.c
t.a.a.n()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.n()
u=u.e
t=c.b
t.a.a.n()
if(u==t.e){u=b.b
u.a.a.n()
u=u.e
t=c.c
t.a.a.n()
if(u==t.e){u=b.c
u.a.a.n()
u=u.e
t=c.a
t.a.a.n()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.n()
u=u.e
t=c.c
t.a.a.n()
if(u==t.e){u=b.b
u.a.a.n()
u=u.e
t=c.a
t.a.a.n()
if(u==t.e){u=b.c
u.a.a.n()
u=u.e
t=c.b
t.a.a.n()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.aT.prototype={
aF:function(){if(!this.gaG()){C.a.A(this.a.a.c.b,this)
this.a.a.T()}this.br()
this.bs()},
br:function(){var u=this.a
if(u!=null){C.a.A(u.c.b,this)
this.a=null}},
bs:function(){var u=this.b
if(u!=null){C.a.A(u.c.c,this)
this.b=null}},
gaG:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
q:function(a){if(this.gaG())return a+"disposed"
return a+C.j.a_(J.aj(this.a.e),0)+", "+C.j.a_(J.aj(this.b.e),0)},
B:function(){return this.q("")}}
F.fk.prototype={}
F.hE.prototype={
aH:function(a,b,c){var u,t
u=b.a
u.a.a.n()
u=u.e
t=c.a
t.a.a.n()
if(u==t.e){u=b.b
u.a.a.n()
u=u.e
t=c.b
t.a.a.n()
return u==t.e}else{u=b.a
u.a.a.n()
u=u.e
t=c.b
t.a.a.n()
if(u==t.e){u=b.b
u.a.a.n()
u=u.e
t=c.a
t.a.a.n()
return u==t.e}else return!1}}}
F.bg.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
q:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.a_(J.aj(u.e),0)},
B:function(){return this.q("")}}
F.dp.prototype={
gu:function(){var u=this.e
if(u==null){u=D.ao()
this.e=u}return u},
bR:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.n()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){q=u[r]
this.a.h(0,q.hQ())}this.a.n()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.n()
n=n.e
if(typeof n!=="number")return n.J()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bg()
if(m.a==null)H.r(P.t("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.M(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.n()
n=n.e
if(typeof n!=="number")return n.J()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.J()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
o=new F.aT()
n=k.a
if(n==null)H.r(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(n!=j.a)H.r(P.t("May not create a line with vertices attached to different shapes."))
o.a=k
C.a.h(k.c.b,o)
o.b=j
C.a.h(j.c.c,o)
C.a.h(o.a.a.c.b,o)
o=o.a.a.e
if(o!=null)o.M(null)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.n()
n=n.e
if(typeof n!=="number")return n.J()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.J()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.n()
n=n.e
if(typeof n!=="number")return n.J()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cW(k,j,h)}u=this.e
if(u!=null)u.ab(0)},
at:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.at()||!1
if(!this.a.at())t=!1
u=this.e
if(u!=null)u.ab(0)
return t},
ig:function(a,b){var u,t,s,r,q,p
P.ad("FLAG 1\n")
u=this.e
if(u!=null)++u.d
P.ad("FLAG 2\n")
u=this.a.c
t=H.d(u.slice(0),[H.x(u,0)])
P.ad("FLAG 3\n")
for(u=[F.ai];t.length!==0;){s=C.a.gi3(t)
C.a.iz(t,0)
if(s!=null){r=H.d([],u)
C.a.h(r,s)
for(q=t.length-1;q>=0;--q){if(q>=t.length)return H.e(t,q)
p=t[q]
if(p!=null&&a.aH(0,s,p)){C.a.h(r,p)
C.a.A(t,p)}}if(r.length>1)b.bR(r)}}P.ad("FLAG 4\n")
this.a.n()
P.ad("FLAG 5\n")
this.c.bU()
P.ad("FLAG 6\n")
this.d.bU()
P.ad("FLAG 7\n")
this.b.iA()
P.ad("FLAG 8\n")
this.c.bV(new F.hE())
P.ad("FLAG 9\n")
this.d.bV(new F.ha())
P.ad("FLAG 10\n")
u=this.e
if(u!=null)u.ab(0)
P.ad("FLAG 11\n")},
hH:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.b5()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.b4().a)!==0)++r
if((s&$.b3().a)!==0)++r
if((s&$.b6().a)!==0)++r
if((s&$.b7().a)!==0)++r
if((s&$.cE().a)!==0)++r
if((s&$.cF().a)!==0)++r
if((s&$.bL().a)!==0)++r
if((s&$.b2().a)!==0)++r
q=a1.gc1(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.w
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.cM])
for(m=0,l=0;l<r;++l){k=a1.hD(l)
j=k.gc1(k)
C.a.U(n,l,new Z.cM(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].ib(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.U(o,g,h[f]);++g}}m+=j}H.m(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.a9(t,34962,e)
C.b.cL(t,34962,new Float32Array(H.cz(o)),35044)
C.b.a9(t,34962,null)
d=new Z.cN(new Z.dF(34962,e),n,a1)
d.seK(H.d([],[Z.be]))
if(this.b.b.length!==0){s=P.y
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.n()
C.a.h(c,b.e)}a=Z.jh(t,34963,H.m(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.be(0,c.length,a))}if(this.c.b.length!==0){s=P.y
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.n()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.n()
C.a.h(c,b.e)}a=Z.jh(t,34963,H.m(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.be(1,c.length,a))}if(this.d.b.length!==0){s=P.y
c=H.d([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.n()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.n()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].c
b.a.a.n()
C.a.h(c,b.e)}a=Z.jh(t,34963,H.m(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.be(4,c.length,a))}return d},
i:function(a){var u=H.d([],[P.n])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.q("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.q("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.q("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.q("   "))}return C.a.t(u,"\n")},
a3:function(a){var u=this.e
if(u!=null)u.M(a)},
T:function(){return this.a3(null)},
$imd:1}
F.h4.prototype={
hC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.ai],"$ab")
u=H.d([],[F.a_])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.e(c,r)
l=c[r];++r
if(r>=m)return H.e(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.e(c,j)
i=c[j]
if(s<0||s>=m)return H.e(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cW(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cW(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cW(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cW(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
bV:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aH(0,p,n)){p.aF()
break}}}}},
bU:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.ghM(s)
if(t)s.aF()}},
at:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].bB())s=!1
return s},
bA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].bz())s=!1
return s},
i:function(a){return this.B()},
q:function(a){var u,t,s,r
u=H.d([],[P.n])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].q(a))
return C.a.t(u,"\n")},
B:function(){return this.q("")},
seB:function(a){this.b=H.m(a,"$ib",[F.a_],"$ab")}}
F.h5.prototype={
gk:function(a){return this.b.length},
bV:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aH(0,p,n)){p.aF()
break}}}}},
bU:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.T(s.a,s.b)
if(t)s.aF()}},
i:function(a){return this.B()},
q:function(a){var u,t,s,r
u=H.d([],[P.n])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].q(a+(""+s+". ")))}return C.a.t(u,"\n")},
B:function(){return this.q("")},
seN:function(a){this.b=H.m(a,"$ib",[F.aT],"$ab")}}
F.h6.prototype={
gk:function(a){return this.b.length},
iA:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.A(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.M(null)}s=t.a
if(s!=null){C.a.A(s.b.b,t)
t.a=null}}}},
i:function(a){return this.B()},
q:function(a){var u,t,s,r
u=H.d([],[P.n])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].q(a))
return C.a.t(u,"\n")},
B:function(){return this.q("")},
sbo:function(a){this.b=H.m(a,"$ib",[F.bg],"$ab")}}
F.ai.prototype={
bD:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.jg(this.cx,s,p,u,t,r,q,a,o)},
hQ:function(){return this.bD(null)},
siL:function(a){var u
if(!J.T(this.z,a)){this.z=a
u=this.a
if(u!=null)u.T()}},
ib:function(a){var u,t
if(a.p(0,$.b5())){u=this.f
t=[P.w]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.b4())){u=this.r
t=[P.w]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.b3())){u=this.x
t=[P.w]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.b6())){u=this.y
t=[P.w]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.p(0,$.b7())){u=this.z
t=[P.w]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.cE())){u=this.Q
t=[P.w]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.cF())){u=this.Q
t=[P.w]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bL()))return H.d([this.ch],[P.w])
else if(a.p(0,$.b2())){u=this.cx
t=[P.w]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.w])},
bB:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cm()
this.d.I(0,new F.i3(u))
u=u.a
this.r=u.D(0,Math.sqrt(u.K(u)))
u=this.a
if(u!=null){u.T()
u=this.a.e
if(u!=null)u.ab(0)}return!0},
bz:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cm()
this.d.I(0,new F.i2(u))
u=u.a
this.x=u.D(0,Math.sqrt(u.K(u)))
u=this.a
if(u!=null){u.T()
u=this.a.e
if(u!=null)u.ab(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
q:function(a){var u,t,s
u=H.d([],[P.n])
C.a.h(u,C.j.a_(J.aj(this.e),0))
t=this.f
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.r
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.x
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.y
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.z
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.Q
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
C.a.h(u,V.H(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.t(u,", ")
return a+"{"+s+"}"},
B:function(){return this.q("")}}
F.i3.prototype={
$1:function(a){var u,t
H.p(a,"$ia_")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.J(0,u)}},
$S:5}
F.i2.prototype={
$1:function(a){var u,t
H.p(a,"$ia_")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.J(0,u)}},
$S:5}
F.hU.prototype={
n:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.f(P.t("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.T()
return!0},
gk:function(a){return this.c.length},
at:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].bB()
return!0},
bA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].bz()
return!0},
hI:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.D(0,Math.sqrt(p*p+o*o+n*n))
if(!J.T(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.M(null)}}}}return!0},
i:function(a){return this.B()},
q:function(a){var u,t,s,r
this.n()
u=H.d([],[P.n])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].q(a))
return C.a.t(u,"\n")},
B:function(){return this.q("")},
she:function(a){this.c=H.m(a,"$ib",[F.ai],"$ab")}}
F.hV.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.e(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.e(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
I:function(a,b){H.l(b,{func:1,ret:-1,args:[F.a_]})
C.a.I(this.b,b)
C.a.I(this.c,new F.hW(this,b))
C.a.I(this.d,new F.hX(this,b))},
i:function(a){return this.B()},
q:function(a){var u,t,s,r
u=H.d([],[P.n])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].q(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].q(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].q(a))
return C.a.t(u,"\n")},
B:function(){return this.q("")},
seC:function(a){this.b=H.m(a,"$ib",[F.a_],"$ab")},
seD:function(a){this.c=H.m(a,"$ib",[F.a_],"$ab")},
seE:function(a){this.d=H.m(a,"$ib",[F.a_],"$ab")}}
F.hW.prototype={
$1:function(a){H.p(a,"$ia_")
if(!J.T(a.a,this.a))this.b.$1(a)},
$S:5}
F.hX.prototype={
$1:function(a){var u
H.p(a,"$ia_")
u=this.a
if(!J.T(a.a,u)&&!J.T(a.b,u))this.b.$1(a)},
$S:5}
F.hY.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.e(u,s)
return u[s]}else{if(b<0)return H.e(u,b)
return u[b]}},
i:function(a){return this.B()},
q:function(a){var u,t,s,r
u=H.d([],[P.n])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].q(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].q(a))
return C.a.t(u,"\n")},
B:function(){return this.q("")},
seO:function(a){this.b=H.m(a,"$ib",[F.aT],"$ab")},
seP:function(a){this.c=H.m(a,"$ib",[F.aT],"$ab")}}
F.i_.prototype={}
F.hZ.prototype={
aH:function(a,b,c){return J.T(b.f,c.f)}}
F.i0.prototype={}
F.fN.prototype={
bR:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[F.ai],"$ab")
u=V.cm()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.M(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.D(0,Math.sqrt(u.K(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.z)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.D(0,Math.sqrt(o*o+n*n+m*m))}if(!J.T(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.M(null)}}}return}}
F.i1.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.B()},
q:function(a){var u,t,s,r
u=H.d([],[P.n])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].q(a))
return C.a.t(u,"\n")},
B:function(){return this.q("")},
sbo:function(a){this.b=H.m(a,"$ib",[F.bg],"$ab")}}
O.d9.prototype={
gu:function(){var u=this.dy
if(u==null){u=D.ao()
this.dy=u}return u},
P:function(a){var u
H.p(a,"$iB")
u=this.dy
if(u!=null)u.M(a)},
be:function(){return this.P(null)},
cB:function(a){H.p(a,"$iB")
this.a=null
this.P(a)},
fN:function(){return this.cB(null)},
eV:function(a,b){var u=V.a7
u=new D.bZ(a,H.m(b,"$ih",[u],"$ah"),this,[u])
u.b=!0
this.P(u)},
eX:function(a,b){var u=V.a7
u=new D.c_(a,H.m(b,"$ih",[u],"$ah"),this,[u])
u.b=!0
this.P(u)},
ck:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.h.V(u.e.length+3,4)*4
s=C.h.V(u.f.length+3,4)*4
r=C.h.V(u.r.length+3,4)*4
q=C.h.V(u.x.length+3,4)*4
p=C.h.V(u.y.length+3,4)*4
o=C.h.V(u.z.length+3,4)*4
n=C.h.V(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.h.i(u.a)+C.h.i(m.a)+C.h.i(l.a)+C.h.i(k.a)+C.h.i(j.a)+C.h.i(i.a)+C.h.i(h.a)+C.h.i(g.a)+C.h.i(f.a)
e+"_"
e+"_0"
e+"_00"
e+"_000"
e=e+"_000_"+n+"_"+t+"_"+s+"_"+r+"_"+q+"_"+p+"_"+o
d=h!==C.c||g!==C.c
c=m!==C.c||l!==C.c||k!==C.c||j!==C.c
b=j===C.c
a=!b||d
a0=l!==C.c||k!==C.c||!b||i!==C.c||d
b=i===C.c
a1=!b
a2=u===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d||h===C.d||g===C.d||f===C.d
a3=u===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e||g===C.e||f===C.e
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.b5()
if(a0){b=$.b4()
a7=new Z.aP(a7.a|b.a)}if(a1){b=$.b3()
a7=new Z.aP(a7.a|b.a)}if(a2){b=$.b6()
a7=new Z.aP(a7.a|b.a)}if(a3){b=$.b7()
a7=new Z.aP(a7.a|b.a)}if(a5){b=$.b2()
a7=new Z.aP(a7.a|b.a)}return new A.fx(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
L:function(a,b){H.m(a,"$ib",[T.cc],"$ab")
if(b!=null)if(!C.a.al(a,b)){b.a=a.length
C.a.h(a,b)}},
bb:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ak(u,u.length,0,[H.x(u,0)]);u.v();){t=u.d
t.toString
s=$.hT
if(s==null){s=new V.M(0,0,1)
$.hT=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.bX(s)}}},
iC:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.ck()
t=a4.fr.j(0,u.a2)
if(t==null){t=A.l5(u,a4.a)
s=t.b
if(s.length===0)H.r(P.t("May not cache a shader with no name."))
if(a4.fr.cN(0,s))H.r(P.t('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.U(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.aW
u=a5.e
if(!(u instanceof Z.cN)){a5.e=null
u=null}if(u==null||!u.d.p(0,q)){u=r.r1
if(u)a5.d.at()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.bA()
o.a.bA()
o=o.e
if(o!=null)o.ab(0)}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.hI()
n=n.e
if(n!=null)n.ab(0)}l=a5.d.hH(new Z.i6(a4.a),q)
l.au($.b5()).e=this.a.Q.c
if(u)l.au($.b4()).e=this.a.cx.c
if(p)l.au($.b3()).e=this.a.ch.c
if(r.rx)l.au($.b6()).e=this.a.cy.c
if(o)l.au($.b7()).e=this.a.db.c
if(r.x1)l.au($.b2()).e=this.a.dx.c
a5.e=l}u=T.cc
k=H.d([],[u])
p=this.a
o=a4.a
C.b.dF(o,p.r)
p.x.i1()
if(r.fx){p=this.a
n=a4.dx
n=n.gO(n)
p=p.dy
p.toString
p.a5(n.a0(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db
n=n.gO(n)
m=a4.dx
m=n.R(0,m.gO(m))
a4.cx=m
n=m}p=p.fr
p.toString
p.a5(n.a0(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.giy()
m=a4.dx
m=n.R(0,m.gO(m))
a4.ch=m
n=m}p=p.fy
p.toString
p.a5(n.a0(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.a5(C.n.a0(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.a5(C.n.a0(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.a5(C.n.a0(n,!0))}if(r.aa>0){j=this.e.a.length
p=this.a.k4
C.b.G(p.a,p.d,j)
for(p=[P.w],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.e(m,i)
m=m[i]
n.toString
H.p(m,"$ia7")
n=n.r1
if(i>=n.length)return H.e(n,i)
n=n[i]
h=new Float32Array(H.cz(H.m(m.a0(0,!0),"$ib",p,"$ab")))
C.b.dE(n.a,n.d,!1,h)}}switch(r.a){case C.c:break
case C.f:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.m(p.a,p.d,m,g,n)
break
case C.d:this.L(k,this.f.d)
p=this.a
n=this.f.d
p.a1(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
break
case C.e:this.L(k,this.f.e)
p=this.a
n=this.f.e
p.Y(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.c:break
case C.f:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.b.m(p.a,p.d,m,g,n)
break
case C.d:this.L(k,this.r.d)
p=this.a
n=this.r.d
p.a1(p.y1,p.aa,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
break
case C.e:this.L(k,this.r.e)
p=this.a
n=this.r.e
p.Y(p.y2,p.aa,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
break}switch(r.c){case C.c:break
case C.f:p=this.a
n=this.x.f
p=p.a2
p.toString
m=n.a
g=n.b
n=n.c
C.b.m(p.a,p.d,m,g,n)
break
case C.d:this.L(k,this.x.d)
p=this.a
n=this.x.d
p.a1(p.aW,p.aX,n)
n=this.a
p=this.x.f
n=n.a2
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
break
case C.e:this.L(k,this.x.e)
p=this.a
n=this.x.e
p.Y(p.cS,p.aX,n)
n=this.a
p=this.x.f
n=n.a2
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
break}switch(r.d){case C.c:break
case C.f:p=this.a
n=this.y.f
p=p.aY
p.toString
m=n.a
g=n.b
n=n.c
C.b.m(p.a,p.d,m,g,n)
break
case C.d:this.L(k,this.y.d)
p=this.a
n=this.y.d
p.a1(p.cT,p.aZ,n)
n=this.a
p=this.y.f
n=n.aY
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
break
case C.e:this.L(k,this.y.e)
p=this.a
n=this.y.e
p.Y(p.cU,p.aZ,n)
n=this.a
p=this.y.f
n=n.aY
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
break}switch(r.e){case C.c:break
case C.f:p=this.a
n=this.z.f
p=p.b_
p.toString
m=n.a
g=n.b
n=n.c
C.b.m(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.b1
C.b.C(n.a,n.d,g)
break
case C.d:this.L(k,this.z.d)
p=this.a
n=this.z.d
p.a1(p.cV,p.b0,n)
n=this.a
p=this.z.f
n=n.b_
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.b1
C.b.C(p.a,p.d,g)
break
case C.e:this.L(k,this.z.e)
p=this.a
n=this.z.e
p.Y(p.cW,p.b0,n)
n=this.a
p=this.z.f
n=n.b_
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.b1
C.b.C(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.d6
C.b.G(p.a,p.d,j)
p=a4.db
f=p.gO(p)
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.bG
if(e>=m.length)return H.e(m,e)
b=m[e]
m=f.bX(c.a)
g=m.a
a=m.b
a0=m.c
a0=m.D(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.m(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.b.m(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.d7
C.b.G(p.a,p.d,j)
p=a4.db
f=p.gO(p)
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.bH
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gaL(c)
g=b.b
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=f.aO(c.gaL(c))
g=b.c
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.gak(c)
g=b.d
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.gbv()
g=b.e
C.b.C(g.a,g.d,m)
m=c.gbw()
g=b.f
C.b.C(g.a,g.d,m)
m=c.gbx()
g=b.r
C.b.C(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.d8
C.b.G(p.a,p.d,j)
p=a4.db
f=p.gO(p)
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.bI
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gaL(c)
g=b.b
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.gbE(c).iZ()
g=b.c
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=f.aO(c.gaL(c))
g=b.d
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.gak(c)
g=b.e
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.giX()
g=b.f
C.b.C(g.a,g.d,m)
m=c.giW()
g=b.r
C.b.C(g.a,g.d,m)
m=c.gbv()
g=b.x
C.b.C(g.a,g.d,m)
m=c.gbw()
g=b.y
C.b.C(g.a,g.d,m)
m=c.gbx()
g=b.z
C.b.C(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.d9
C.b.G(p.a,p.d,j)
p=a4.db
f=p.gO(p)
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
g=this.a.bJ
if(e>=g.length)return H.e(g,e)
b=g[e]
g=c.gaM()
H.m(k,"$ib",m,"$ab")
if(!C.a.al(k,g)){g.a=k.length
C.a.h(k,g)}g=c.gbE(c)
a=b.d
C.b.m(a.a,a.d,g.a,g.b,g.c)
g=c.giR()
a=b.b
C.b.m(a.a,a.d,g.a,g.b,g.c)
g=c.giF(c)
a=b.c
C.b.m(a.a,a.d,g.a,g.b,g.c)
g=f.bX(c.gbE(c))
a=g.a
a0=g.b
a1=g.c
a1=g.D(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.m(a0.a,a0.d,a,g,a1)
a1=c.gak(c)
g=b.f
C.b.m(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gaM()
g=a1.gX(a1)
if(!g){g=b.x
C.b.G(g.a,g.d,1)}else{g=b.r
a=a1.gX(a1)
a0=g.a
g=g.d
if(!a)C.b.G(a0,g,0)
else C.b.G(a0,g,a1.a)
g=b.x
C.b.G(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.da
C.b.G(p.a,p.d,j)
p=a4.db
f=p.gO(p)
for(p=this.dx.y,n=p.length,m=[P.w],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
a=this.a.bK
if(e>=a.length)return H.e(a,e)
b=a[e]
a=c.gaM()
H.m(k,"$ib",g,"$ab")
if(!C.a.al(k,a)){a.a=k.length
C.a.h(k,a)}a2=f.R(0,c.gO(c))
a=c.gO(c)
a0=$.c7
if(a0==null){a0=new V.ap(0,0,0)
$.c7=a0}a0=a.aO(a0)
a=b.b
C.b.m(a.a,a.d,a0.a,a0.b,a0.c)
a=$.c7
if(a==null){a=new V.ap(0,0,0)
$.c7=a}a=a2.aO(a)
a0=b.c
C.b.m(a0.a,a0.d,a.a,a.b,a.c)
a=a2.de(0)
a0=b.d
h=new Float32Array(H.cz(H.m(new V.da(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).a0(0,!0),"$ib",m,"$ab")))
C.b.dD(a0.a,a0.d,!1,h)
a0=c.gak(c)
a=b.e
C.b.m(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gaM()
a=a0.gX(a0)
if(!a){a=b.r
C.b.G(a.a,a.d,1)}else{a=b.f
a1=a0.gX(a0)
a3=a.a
a=a.d
if(!a1)C.b.G(a3,a,0)
else C.b.G(a3,a,a0.giY(a0))
a=b.r
C.b.G(a.a,a.d,0)}a=c.gbv()
a0=b.x
C.b.C(a0.a,a0.d,a)
a=c.gbw()
a0=b.y
C.b.C(a0.a,a0.d,a)
a=c.gbx()
a0=b.z
C.b.C(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.dc
C.b.G(p.a,p.d,j)
p=a4.db
f=p.gO(p)
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.bL
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gaM()
H.m(k,"$ib",u,"$ab")
if(!C.a.al(k,m)){m.a=k.length
C.a.h(k,m)}m=c.gaL(c)
g=b.b
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.gbE(c)
g=b.c
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.giR()
g=b.d
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.giF(c)
g=b.e
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=f.aO(c.gaL(c))
g=b.f
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.gaM()
g=m.gX(m)
if(!g){m=b.x
C.b.G(m.a,m.d,1)}else{g=b.r
a=m.gX(m)
a0=g.a
g=g.d
if(!a)C.b.G(a0,g,0)
else C.b.G(a0,g,m.a)
m=b.x
C.b.G(m.a,m.d,0)}m=c.gak(c)
g=b.y
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.gj_()
g=b.z
C.b.C(g.a,g.d,m)
m=c.gj0()
g=b.Q
C.b.C(g.a,g.d,m)
m=c.gbv()
g=b.ch
C.b.C(g.a,g.d,m)
m=c.gbw()
g=b.cx
C.b.C(g.a,g.d,m)
m=c.gbx()
g=b.cy
C.b.C(g.a,g.d,m);++e}}}switch(r.f){case C.c:break
case C.f:break
case C.d:this.L(k,this.Q.d)
u=this.a
p=this.Q.d
u.a1(u.cX,u.b2,p)
break
case C.e:this.L(k,this.Q.e)
u=this.a
p=this.Q.e
u.Y(u.cY,u.b2,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db
p=p.gO(p).de(0)
a4.Q=p}u=u.id
u.toString
u.a5(p.a0(0,!0))}if(r.dy){this.L(k,this.ch)
u=this.a
p=this.ch
u.Y(u.cZ,u.d_,p)
switch(r.r){case C.c:break
case C.f:u=this.a
p=this.cx.f
u=u.b3
u.toString
n=p.a
m=p.b
p=p.c
C.b.m(u.a,u.d,n,m,p)
break
case C.d:this.L(k,this.cx.d)
u=this.a
p=this.cx.d
u.a1(u.d0,u.b4,p)
p=this.a
u=this.cx.f
p=p.b3
p.toString
n=u.a
m=u.b
u=u.c
C.b.m(p.a,p.d,n,m,u)
break
case C.e:this.L(k,this.cx.e)
u=this.a
p=this.cx.e
u.Y(u.d1,u.b4,p)
p=this.a
u=this.cx.f
p=p.b3
p.toString
n=u.a
m=u.b
u=u.c
C.b.m(p.a,p.d,n,m,u)
break}switch(r.x){case C.c:break
case C.f:u=this.a
p=this.cy.f
u=u.b6
u.toString
n=p.a
m=p.b
p=p.c
C.b.m(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.b5
C.b.C(p.a,p.d,m)
break
case C.d:this.L(k,this.cy.d)
u=this.a
p=this.cy.d
u.a1(u.d2,u.b7,p)
p=this.a
u=this.cy.f
p=p.b6
p.toString
n=u.a
m=u.b
u=u.c
C.b.m(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.b5
C.b.C(u.a,u.d,m)
break
case C.e:this.L(k,this.cy.e)
u=this.a
p=this.cy.e
u.Y(u.d3,u.b7,p)
p=this.a
u=this.cy.f
p=p.b6
p.toString
n=u.a
m=u.b
u=u.c
C.b.m(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.b5
C.b.C(u.a,u.d,m)
break}}u=r.y
p=u!==C.c
if(p){switch(u){case C.c:break
case C.f:u=this.a
n=this.db.f
u=u.b8
C.b.C(u.a,u.d,n)
break
case C.d:this.L(k,this.db.d)
u=this.a
n=this.db.d
u.a1(u.d4,u.b9,n)
n=this.a
u=this.db.f
n=n.b8
C.b.C(n.a,n.d,u)
break
case C.e:this.L(k,this.db.e)
u=this.a
n=this.db.e
u.Y(u.d5,u.b9,n)
n=this.a
u=this.db.f
n=n.b8
C.b.C(n.a,n.d,u)
break}C.b.bF(o,3042)
C.b.hG(o,770,771)}for(i=0;i<k.length;++i){u=k[i]
if(u.d==null){n=u.c
u.d=n
if(n!=null)n.aj(a4)}}u=a5.e
u.aj(a4)
u.ay(a4)
u.aP(a4)
if(p)C.b.hY(o,3042)
for(i=0;i<k.length;++i){u=k[i]
p=u.d
if(p!=null){p.aP(a4)
u.d=null}}u=this.a
u.toString
C.b.dF(o,null)
u.x.hZ()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.ck().a2},
seo:function(a){this.e=H.m(a,"$iU",[V.a7],"$aU")}}
O.fv.prototype={
fQ:function(a){var u=this.f
if(!(Math.abs(u-a)<$.I().a)){this.f=a
u=new D.O(this.b,u,a,this,[P.w])
u.b=!0
this.a.P(u)}},
a8:function(){this.c5()
this.fQ(1)}}
O.c1.prototype={
P:function(a){this.a.P(H.p(a,"$iB"))},
be:function(){return this.P(null)},
a8:function(){},
fT:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gu().A(0,this.gaQ())
t=this.d
this.d=a
if(a!=null)a.gu().h(0,this.gaQ())
u=new D.O(this.b+".texture2D",t,this.d,this,[T.bi])
u.b=!0
this.a.P(u)}},
fU:function(a){},
sdz:function(a){var u=this.c
if(u!==C.d){if(u===C.c)this.a8()
this.c=C.d
this.fU(null)
u=this.a
u.a=null
u.P(null)}this.fT(a)}}
O.fw.prototype={}
O.aG.prototype={
cD:function(a){var u,t
if(!J.T(this.f,a)){u=this.f
this.f=a
t=new D.O(this.b+".color",u,a,this,[V.Z])
t.b=!0
this.a.P(t)}},
a8:function(){this.c5()
this.cD(new V.Z(1,1,1))},
sak:function(a,b){var u
if(this.c===C.c){this.c=C.f
this.a8()
u=this.a
u.a=null
u.P(null)}this.cD(b)}}
O.fy.prototype={
fR:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.I().a)){this.ch=a
u=new D.O(this.b+".refraction",u,a,this,[P.w])
u.b=!0
this.a.P(u)}},
a8:function(){this.c6()
this.fR(1)}}
O.fz.prototype={
fS:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.I().a)){this.ch=a
u=new D.O(this.b+".shininess",u,a,this,[P.w])
u.b=!0
this.a.P(u)}},
a8:function(){this.c6()
this.fS(100)}}
O.bC.prototype={}
T.cc.prototype={}
T.bi.prototype={}
T.hq.prototype={
gX:function(a){var u=this.d
u=u==null?null:u.gX(u)
if(u==null){u=this.c
u=u==null?null:u.gX(u)}return u===!0},
gu:function(){var u=this.f
if(u==null){u=D.ao()
this.f=u}return u},
aj:function(a){var u
if(this.d==null){u=this.c
this.d=u
if(u!=null)u.aj(a)}},
aP:function(a){var u=this.d
if(u!=null){u.aP(a)
this.d=null}},
sh7:function(a){this.e=H.m(a,"$ib",[T.bi],"$ab")}}
T.hr.prototype={
gX:function(a){return this.d},
aj:function(a){var u
if(!this.c&&this.d){this.c=!0
u=a.a
C.b.cH(u,33984+this.a)
C.b.as(u,3553,this.b)}},
aP:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.cH(u,33984+this.a)
C.b.as(u,3553,null)}}}
T.hs.prototype={
ic:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.as(u,3553,t)
C.b.ba(u,3553,10242,33071)
C.b.ba(u,3553,10243,33071)
C.b.ba(u,3553,10241,9729)
C.b.ba(u,3553,10240,9729)
C.b.as(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.hr()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.j
W.a0(s,"load",H.l(new T.ht(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
aw:function(a){return this.ic(a,!1,!1,!1,!1)},
fO:function(a,b,c){var u,t,s,r
b=V.jv(b,2)
u=V.jv(a.width,2)
t=V.jv(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.j3(null,null)
s.width=u
s.height=t
r=H.p(C.q.dM(s,"2d"),"$ibr")
r.imageSmoothingEnabled=!1;(r&&C.r).i0(r,a,0,0,s.width,s.height)
return P.lL(C.r.eJ(r,0,0,s.width,s.height))}}}
T.ht.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.fO(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.as(t,3553,this.e)
C.b.ix(t,37440,this.f?1:0)
C.b.iJ(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.dI(t,3553)
C.b.as(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.cQ()}++s.e},
$S:11}
V.eA.prototype={
ax:function(a,b){return!0},
i:function(a){return"all"},
$iaU:1}
V.aU.prototype={}
V.d8.prototype={
ax:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)if(u[s].ax(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sah:function(a){this.a=H.m(a,"$ib",[V.aU],"$ab")},
$iaU:1}
V.aY.prototype={
ax:function(a,b){return!this.dZ(0,b)},
i:function(a){return"!["+this.c4(0)+"]"}}
V.h3.prototype={
e2:function(a){var u,t
if(a.a.length<=0)throw H.f(P.t("May not create a SetMatcher with zero characters."))
u=new H.aE([P.y,P.a4])
for(t=new H.d7(a,a.gk(a),0,[H.av(a,"u",0)]);t.v();)u.U(0,t.d,!0)
this.sfP(u)},
ax:function(a,b){return this.a.cN(0,b)},
i:function(a){var u=this.a
return P.jd(new H.d6(u,[H.x(u,0)]),0,null)},
sfP:function(a){this.a=H.m(a,"$iJ",[P.y,P.a4],"$aJ")},
$iaU:1}
V.ca.prototype={
t:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.ce(this.a.E(0,b))
r.sah(H.d([],[V.aU]))
r.c=!1
C.a.h(this.c,r)
return r},
i2:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.ax(0,a))return r}return},
i:function(a){return this.b},
sh9:function(a){this.c=H.m(a,"$ib",[V.ce],"$ab")}}
V.dy.prototype={
i:function(a){var u,t
u=H.kt(this.b,"\n","\\n")
t=H.kt(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cd.prototype={
i:function(a){return this.b},
sfK:function(a){var u=P.n
this.c=H.m(a,"$iJ",[u,u],"$aJ")}}
V.hw.prototype={
E:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.ca(this,b)
u.sh9(H.d([],[V.ce]))
u.d=null
this.a.U(0,b,u)}return u},
aN:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cd(this,a)
t=P.n
u.sfK(new H.aE([t,t]))
this.b.U(0,a,u)}return u},
iQ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.dy])
t=this.c
s=[P.y]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.aR(a,o)
m=t.i2(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.jd(r,0,null)
throw H.f(P.t("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.jd(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dy(j==null?k.b:j,l,o)}++o}}},
sh3:function(a){this.a=H.m(a,"$iJ",[P.n,V.ca],"$aJ")},
sh8:function(a){this.b=H.m(a,"$iJ",[P.n,V.cd],"$aJ")}}
V.ce.prototype={
i:function(a){return this.b.b+": "+this.c4(0)}}
X.cP.prototype={$iaX:1}
X.fb.prototype={
gu:function(){var u=this.x
if(u==null){u=D.ao()
this.x=u}return u}}
X.df.prototype={
gu:function(){var u=this.f
if(u==null){u=D.ao()
this.f=u}return u},
ao:function(a){var u
H.p(a,"$iB")
u=this.f
if(u!=null)u.M(a)},
ei:function(){return this.ao(null)},
saI:function(a){var u,t
if(!J.T(this.b,a)){u=this.b
if(u!=null)u.gu().A(0,this.gcb())
t=this.b
this.b=a
if(a!=null)a.gu().h(0,this.gcb())
u=new D.O("mover",t,this.b,this,[U.bx])
u.b=!0
this.ao(u)}},
$iaX:1,
$icP:1}
X.ds.prototype={}
V.j_.prototype={
$1:function(a){H.p(a,"$iaf")
P.ad(C.i.dB(this.a.gi5(),2)+" fps")},
$S:33}
V.h7.prototype={
e4:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.p).S(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.p.S(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.S(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.S(q,p)}o=u.createElement("div")
this.a=o
C.l.S(q,o)
this.b=null
o=W.j
W.a0(u,"scroll",H.l(new V.h9(s),{func:1,ret:-1,args:[o]}),!1,o)},
cI:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.n],"$ab")
this.fZ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.iQ(C.a.i9(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.S(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.S(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.S(t,o)
break
case"Link":n=p.b
if(H.m3(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.N(m[1])
l.textContent=H.N(m[0])
C.l.S(t,l)}else{k=P.lw(C.M,n,C.w,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.l.S(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.S(t,o)
break}}C.l.S(this.a,t)},
fZ:function(){var u,t,s,r
if(this.b!=null)return
u=new V.hw()
t=P.n
u.sh3(new H.aE([t,V.ca]))
u.sh8(new H.aE([t,V.cd]))
u.c=null
u.c=u.E(0,"Start")
t=u.E(0,"Start").t(0,"Bold")
s=V.a3(new H.W("*"))
C.a.h(t.a,s)
t.c=!0
t=u.E(0,"Bold").t(0,"Bold")
s=new V.aY()
r=[V.aU]
s.sah(H.d([],r))
C.a.h(t.a,s)
t=V.a3(new H.W("*"))
C.a.h(s.a,t)
t=u.E(0,"Bold").t(0,"BoldEnd")
s=V.a3(new H.W("*"))
C.a.h(t.a,s)
t.c=!0
t=u.E(0,"Start").t(0,"Italic")
s=V.a3(new H.W("_"))
C.a.h(t.a,s)
t.c=!0
t=u.E(0,"Italic").t(0,"Italic")
s=new V.aY()
s.sah(H.d([],r))
C.a.h(t.a,s)
t=V.a3(new H.W("_"))
C.a.h(s.a,t)
t=u.E(0,"Italic").t(0,"ItalicEnd")
s=V.a3(new H.W("_"))
C.a.h(t.a,s)
t.c=!0
t=u.E(0,"Start").t(0,"Code")
s=V.a3(new H.W("`"))
C.a.h(t.a,s)
t.c=!0
t=u.E(0,"Code").t(0,"Code")
s=new V.aY()
s.sah(H.d([],r))
C.a.h(t.a,s)
t=V.a3(new H.W("`"))
C.a.h(s.a,t)
t=u.E(0,"Code").t(0,"CodeEnd")
s=V.a3(new H.W("`"))
C.a.h(t.a,s)
t.c=!0
t=u.E(0,"Start").t(0,"LinkHead")
s=V.a3(new H.W("["))
C.a.h(t.a,s)
t.c=!0
t=u.E(0,"LinkHead").t(0,"LinkTail")
s=V.a3(new H.W("|"))
C.a.h(t.a,s)
s=u.E(0,"LinkHead").t(0,"LinkEnd")
t=V.a3(new H.W("]"))
C.a.h(s.a,t)
s.c=!0
s=u.E(0,"LinkHead").t(0,"LinkHead")
t=new V.aY()
t.sah(H.d([],r))
C.a.h(s.a,t)
s=V.a3(new H.W("|]"))
C.a.h(t.a,s)
s=u.E(0,"LinkTail").t(0,"LinkEnd")
t=V.a3(new H.W("]"))
C.a.h(s.a,t)
s.c=!0
s=u.E(0,"LinkTail").t(0,"LinkTail")
t=new V.aY()
t.sah(H.d([],r))
C.a.h(s.a,t)
s=V.a3(new H.W("|]"))
C.a.h(t.a,s)
C.a.h(u.E(0,"Start").t(0,"Other").a,new V.eA())
s=u.E(0,"Other").t(0,"Other")
t=new V.aY()
t.sah(H.d([],r))
C.a.h(s.a,t)
s=V.a3(new H.W("*_`["))
C.a.h(t.a,s)
s=u.E(0,"BoldEnd")
s.d=s.a.aN("Bold")
s=u.E(0,"ItalicEnd")
s.d=s.a.aN("Italic")
s=u.E(0,"CodeEnd")
s.d=s.a.aN("Code")
s=u.E(0,"LinkEnd")
s.d=s.a.aN("Link")
s=u.E(0,"Other")
s.d=s.a.aN("Other")
this.b=u}}
V.h9.prototype={
$1:function(a){P.jY(C.m,new V.h8(this.a))},
$S:11}
V.h8.prototype={
$0:function(){var u,t,s
u=C.i.a4(document.documentElement.scrollTop)
t=this.a.style
s=H.k(-0.01*u)+"px"
t.top=s},
$S:1}
N.iX.prototype={
$1:function(a){var u,t,s,r
H.p(a,"$iaf")
u=this.a
t=u.b
s=u.e
r=s.length
t=(t+1)%r
if(t<r){u.b=t
u.c=H.p(s[t],"$ibi")
u=u.f
if(u!=null)u.cQ()}return},
$S:34};(function aliases(){var u=J.a.prototype
u.dX=u.i
u=J.d3.prototype
u.dY=u.i
u=O.c1.prototype
u.c5=u.a8
u=O.aG.prototype
u.c6=u.a8
u=V.d8.prototype
u.dZ=u.ax
u.c4=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"lF","lq",8)
u(P,"lG","lr",8)
u(P,"lH","ls",8)
t(P,"kj","lE",2)
var n
s(n=E.aa.prototype,"gdl",0,0,null,["$1","$0"],["dm","io"],0,0)
s(n,"gdj",0,0,null,["$1","$0"],["dk","im"],0,0)
s(n,"gdh",0,0,null,["$1","$0"],["di","ij"],0,0)
r(n,"gih","ii",6)
r(n,"gik","il",6)
s(n=E.dx.prototype,"gc8",0,0,null,["$1","$0"],["ca","c9"],0,0)
q(n,"giD","dt",2)
p(n=X.dE.prototype,"gf9","fa",9)
p(n,"geY","eZ",9)
p(n,"gf3","f4",3)
p(n,"gfd","fe",20)
p(n,"gfb","fc",20)
p(n,"gfh","fi",3)
p(n,"gfl","fm",3)
p(n,"gf7","f8",3)
p(n,"gfj","fk",3)
p(n,"gf5","f6",3)
p(n,"gfn","fo",24)
p(n,"gfp","fq",9)
p(n,"gfD","fE",7)
p(n,"gfz","fA",7)
p(n,"gfB","fC",7)
s(D.ba.prototype,"ge6",0,0,null,["$1","$0"],["ad","e7"],0,0)
s(n=D.d5.prototype,"gcu",0,0,null,["$1","$0"],["cv","ff"],0,0)
p(n,"gft","fu",26)
r(n,"geS","eT",14)
r(n,"gfv","fw",14)
o(V.b0.prototype,"gk","bP",13)
o(V.M.prototype,"gk","bP",13)
s(n=M.cV.prototype,"ga6",0,0,null,["$1","$0"],["ae","e9"],0,0)
r(n,"gf_","f0",6)
r(n,"gf1","f2",6)
s(n=O.d9.prototype,"gaQ",0,0,null,["$1","$0"],["P","be"],0,0)
s(n,"gfM",0,0,null,["$1","$0"],["cB","fN"],0,0)
r(n,"geU","eV",12)
r(n,"geW","eX",12)
s(O.c1.prototype,"gaQ",0,0,null,["$1","$0"],["P","be"],0,0)
s(X.df.prototype,"gcb",0,0,null,["$1","$0"],["ao","ei"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.K,null)
s(P.K,[H.j9,J.a,J.ak,P.dV,P.h,H.d7,P.aC,H.bv,H.dD,H.fV,H.hB,P.bc,H.bQ,H.eb,P.a2,H.fl,H.fm,H.fg,P.eh,P.aR,P.am,P.dG,P.hi,P.cb,P.hj,P.af,P.a6,P.iJ,P.iD,P.cp,P.ix,P.u,P.bR,P.iI,P.a4,P.b9,P.Y,P.bb,P.fR,P.dr,P.dO,P.fa,P.b,P.J,P.F,P.ac,P.n,P.bh,W.eO,W.v,W.cX,P.em,P.iy,O.U,O.c2,E.eI,E.aa,E.fW,E.dx,Z.dF,Z.i6,Z.cN,Z.be,Z.aP,D.eL,D.bu,D.B,X.cO,X.d4,X.fi,X.fp,X.aW,X.fG,X.hx,X.dE,D.ba,D.V,D.dg,D.dq,D.du,D.dv,D.dw,V.Z,V.bs,V.f_,V.da,V.a7,V.ae,V.ap,V.di,V.dl,V.b0,V.M,M.cV,A.cI,A.eD,A.fx,A.cf,A.cj,A.ch,A.ck,A.ci,A.cl,A.bt,A.dz,A.hL,F.a_,F.f3,F.aT,F.fk,F.bg,F.dp,F.h4,F.h5,F.h6,F.ai,F.hU,F.hV,F.hY,F.i_,F.i0,F.i1,O.bC,O.c1,T.hs,V.eA,V.aU,V.d8,V.h3,V.ca,V.dy,V.cd,V.hw,X.cP,X.ds,X.df,V.h7])
s(J.a,[J.ff,J.d1,J.d3,J.aD,J.d2,J.c0,H.c5,W.c,W.ez,W.cJ,W.br,W.ay,W.az,W.L,W.dI,W.eS,W.eT,W.dK,W.cU,W.dM,W.eV,W.j,W.dP,W.aB,W.fc,W.dR,W.bd,W.fo,W.fA,W.dW,W.dX,W.aH,W.dY,W.e0,W.aI,W.e4,W.e6,W.aK,W.e7,W.aL,W.ec,W.ar,W.ef,W.hv,W.aN,W.ei,W.hz,W.hQ,W.en,W.ep,W.er,W.et,W.ev,P.aS,P.dT,P.aZ,P.e2,P.fU,P.ed,P.b_,P.ek,P.eE,P.dH,P.cL,P.cY,P.dj,P.bB,P.dn,P.dt,P.dA,P.e9])
s(J.d3,[J.fS,J.dB,J.bf])
t(J.j8,J.aD)
s(J.d2,[J.d0,J.d_])
t(P.fn,P.dV)
s(P.fn,[H.dC,W.ie,W.id,P.f6])
t(H.W,H.dC)
s(P.h,[H.eY,H.fs,H.i7])
s(P.aC,[H.ft,H.i8])
s(P.bc,[H.fO,H.fh,H.hO,H.hD,H.eK,H.h1,P.de,P.aw,P.hP,P.hN,P.he,P.eM,P.eR])
s(H.bQ,[H.j0,H.hn,H.iT,H.iU,H.iV,P.ia,P.i9,P.ib,P.ic,P.iH,P.iG,P.ik,P.ip,P.il,P.im,P.io,P.is,P.it,P.ir,P.iq,P.hk,P.hl,P.iN,P.iB,P.iA,P.iC,P.fr,P.eW,P.eX,W.fC,W.fE,W.h0,W.hh,W.ij,P.iP,P.f7,P.f8,P.eG,E.fX,E.fY,E.fZ,E.hu,D.f1,D.f2,F.iK,F.i3,F.i2,F.hW,F.hX,T.ht,V.j_,V.h9,V.h8,N.iX])
s(H.hn,[H.hf,H.bO])
t(P.fq,P.a2)
t(H.aE,P.fq)
t(H.d6,H.eY)
t(H.db,H.c5)
s(H.db,[H.cq,H.cs])
t(H.cr,H.cq)
t(H.c4,H.cr)
t(H.ct,H.cs)
t(H.dc,H.ct)
s(H.dc,[H.fH,H.fI,H.fJ,H.fK,H.fL,H.dd,H.fM])
t(P.iz,P.iJ)
t(P.iw,P.iD)
t(P.cR,P.hj)
t(P.eZ,P.bR)
t(P.hR,P.eZ)
t(P.hS,P.cR)
s(P.Y,[P.w,P.y])
s(P.aw,[P.bA,P.fd])
s(W.c,[W.D,W.f5,W.aJ,W.cu,W.aM,W.as,W.cw,W.i5,W.cn,P.eH,P.bp])
s(W.D,[W.X,W.b8,W.bW])
s(W.X,[W.q,P.o])
s(W.q,[W.eB,W.eC,W.cK,W.bq,W.bV,W.f9,W.bY,W.c3,W.h2])
s(W.ay,[W.bT,W.eP,W.eQ])
t(W.eN,W.az)
t(W.bU,W.dI)
t(W.dL,W.dK)
t(W.cT,W.dL)
t(W.dN,W.dM)
t(W.eU,W.dN)
t(W.aA,W.cJ)
t(W.dQ,W.dP)
t(W.f4,W.dQ)
t(W.dS,W.dR)
t(W.bw,W.dS)
t(W.cZ,W.bW)
t(W.bj,W.j)
s(W.bj,[W.aF,W.a1,W.at])
t(W.fB,W.dW)
t(W.fD,W.dX)
t(W.dZ,W.dY)
t(W.fF,W.dZ)
t(W.e1,W.e0)
t(W.c6,W.e1)
t(W.e5,W.e4)
t(W.fT,W.e5)
t(W.h_,W.e6)
t(W.cv,W.cu)
t(W.hb,W.cv)
t(W.e8,W.e7)
t(W.hc,W.e8)
t(W.hg,W.ec)
t(W.eg,W.ef)
t(W.ho,W.eg)
t(W.cx,W.cw)
t(W.hp,W.cx)
t(W.ej,W.ei)
t(W.hy,W.ej)
t(W.i4,W.c3)
t(W.aQ,W.a1)
t(W.eo,W.en)
t(W.ig,W.eo)
t(W.dJ,W.cU)
t(W.eq,W.ep)
t(W.iu,W.eq)
t(W.es,W.er)
t(W.e_,W.es)
t(W.eu,W.et)
t(W.iE,W.eu)
t(W.ew,W.ev)
t(W.iF,W.ew)
t(W.ih,P.hi)
t(W.ji,W.ih)
t(W.ii,P.cb)
t(P.ab,P.iy)
t(P.dU,P.dT)
t(P.fj,P.dU)
t(P.e3,P.e2)
t(P.fP,P.e3)
t(P.ee,P.ed)
t(P.hm,P.ee)
t(P.el,P.ek)
t(P.hA,P.el)
t(P.eF,P.dH)
t(P.fQ,P.bp)
t(P.ea,P.e9)
t(P.hd,P.ea)
s(E.eI,[Z.cM,A.c9,T.cc])
s(D.B,[D.bZ,D.c_,D.O])
t(D.d5,O.U)
t(U.bx,D.eL)
s(U.bx,[U.cQ,U.dm])
t(A.fu,A.c9)
s(A.dz,[A.G,A.hH,A.hI,A.hK,A.hF,A.R,A.hG,A.E,A.hJ,A.hM,A.cg,A.ag,A.a8,A.a9])
t(F.ha,F.f3)
t(F.hE,F.fk)
t(F.hZ,F.i_)
t(F.fN,F.i0)
t(O.d9,O.bC)
s(O.c1,[O.fv,O.fw,O.aG])
s(O.aG,[O.fy,O.fz])
t(T.bi,T.cc)
s(T.bi,[T.hq,T.hr])
s(V.d8,[V.aY,V.ce])
t(X.fb,X.ds)
u(H.dC,H.dD)
u(H.cq,P.u)
u(H.cr,H.bv)
u(H.cs,P.u)
u(H.ct,H.bv)
u(P.dV,P.u)
u(W.dI,W.eO)
u(W.dK,P.u)
u(W.dL,W.v)
u(W.dM,P.u)
u(W.dN,W.v)
u(W.dP,P.u)
u(W.dQ,W.v)
u(W.dR,P.u)
u(W.dS,W.v)
u(W.dW,P.a2)
u(W.dX,P.a2)
u(W.dY,P.u)
u(W.dZ,W.v)
u(W.e0,P.u)
u(W.e1,W.v)
u(W.e4,P.u)
u(W.e5,W.v)
u(W.e6,P.a2)
u(W.cu,P.u)
u(W.cv,W.v)
u(W.e7,P.u)
u(W.e8,W.v)
u(W.ec,P.a2)
u(W.ef,P.u)
u(W.eg,W.v)
u(W.cw,P.u)
u(W.cx,W.v)
u(W.ei,P.u)
u(W.ej,W.v)
u(W.en,P.u)
u(W.eo,W.v)
u(W.ep,P.u)
u(W.eq,W.v)
u(W.er,P.u)
u(W.es,W.v)
u(W.et,P.u)
u(W.eu,W.v)
u(W.ev,P.u)
u(W.ew,W.v)
u(P.dT,P.u)
u(P.dU,W.v)
u(P.e2,P.u)
u(P.e3,W.v)
u(P.ed,P.u)
u(P.ee,W.v)
u(P.ek,P.u)
u(P.el,W.v)
u(P.dH,P.a2)
u(P.e9,P.u)
u(P.ea,W.v)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.cK.prototype
C.q=W.bq.prototype
C.r=W.br.prototype
C.l=W.bV.prototype
C.C=W.cZ.prototype
C.D=J.a.prototype
C.a=J.aD.prototype
C.E=J.d_.prototype
C.h=J.d0.prototype
C.n=J.d1.prototype
C.i=J.d2.prototype
C.j=J.c0.prototype
C.L=J.bf.prototype
C.N=W.c6.prototype
C.v=J.fS.prototype
C.b=P.bB.prototype
C.o=J.dB.prototype
C.x=W.aQ.prototype
C.y=W.cn.prototype
C.z=new P.fR()
C.A=new P.hS()
C.k=new P.iz()
C.c=new A.bt(0,"ColorSourceType.None")
C.f=new A.bt(1,"ColorSourceType.Solid")
C.d=new A.bt(2,"ColorSourceType.Texture2D")
C.e=new A.bt(3,"ColorSourceType.TextureCube")
C.m=new P.bb(0)
C.B=new P.bb(5e6)
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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
C.t=function(hooks) { return hooks; }

C.H=function(getTagFallback) {
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
C.I=function() {
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
C.J=function(hooks) {
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
C.K=function(hooks) {
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
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.M=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.w=new P.hR(!1)})();(function staticFields(){$.ax=0
$.bP=null
$.jB=null
$.jj=!1
$.kn=null
$.kh=null
$.ks=null
$.iQ=null
$.iW=null
$.js=null
$.bD=null
$.cA=null
$.cB=null
$.jk=!1
$.Q=C.k
$.jK=null
$.jO=null
$.c7=null
$.jT=null
$.k2=null
$.k5=null
$.k4=null
$.hT=null
$.k3=null
$.jN=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ma","kw",function(){return H.km("_$dart_dartClosure")})
u($,"mb","jx",function(){return H.km("_$dart_js")})
u($,"mf","kx",function(){return H.aO(H.hC({
toString:function(){return"$receiver$"}}))})
u($,"mg","ky",function(){return H.aO(H.hC({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mh","kz",function(){return H.aO(H.hC(null))})
u($,"mi","kA",function(){return H.aO(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ml","kD",function(){return H.aO(H.hC(void 0))})
u($,"mm","kE",function(){return H.aO(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mk","kC",function(){return H.aO(H.k0(null))})
u($,"mj","kB",function(){return H.aO(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mo","kG",function(){return H.aO(H.k0(void 0))})
u($,"mn","kF",function(){return H.aO(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mE","jy",function(){return P.lp()})
u($,"mG","cG",function(){return[]})
u($,"mF","kK",function(){return P.lh("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"mx","kJ",function(){return Z.al(0)})
u($,"mr","kH",function(){return Z.al(511)})
u($,"mz","b5",function(){return Z.al(1)})
u($,"my","b4",function(){return Z.al(2)})
u($,"mt","b3",function(){return Z.al(4)})
u($,"mA","b6",function(){return Z.al(8)})
u($,"mB","b7",function(){return Z.al(16)})
u($,"mu","cE",function(){return Z.al(32)})
u($,"mv","cF",function(){return Z.al(64)})
u($,"mw","kI",function(){return Z.al(96)})
u($,"mC","bL",function(){return Z.al(128)})
u($,"ms","b2",function(){return Z.al(256)})
u($,"m9","kv",function(){return new V.f_(1e-9)})
u($,"m8","I",function(){return $.kv()})})()
var v={mangledGlobalNames:{y:"int",w:"double",Y:"num",n:"String",a4:"bool",F:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.B]},{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[W.a1]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:P.F,args:[F.a_]},{func:1,ret:-1,args:[P.y,[P.h,E.aa]]},{func:1,ret:-1,args:[W.at]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.j]},{func:1,ret:P.F,args:[D.B]},{func:1,ret:P.F,args:[W.j]},{func:1,ret:-1,args:[P.y,[P.h,V.a7]]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.y,[P.h,D.V]]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.n,args:[P.y]},{func:1,args:[,]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:-1,args:[W.aF]},{func:1,ret:W.X,args:[W.D]},{func:1,ret:P.a4,args:[W.D]},{func:1,args:[W.j]},{func:1,ret:-1,args:[W.aQ]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:P.a4,args:[[P.h,D.V]]},{func:1,ret:[P.am,,],args:[,]},{func:1,ret:P.F,args:[,],opt:[P.ac]},{func:1,ret:P.F,args:[F.ai,P.w,P.w]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,args:[P.n]},{func:1,args:[,P.n]},{func:1,ret:P.F,args:[P.af]},{func:1,ret:-1,args:[P.af]},{func:1,ret:P.F,args:[P.Y]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c5,ArrayBufferView:H.c5,Float32Array:H.c4,Float64Array:H.c4,Int16Array:H.fH,Int32Array:H.fI,Int8Array:H.fJ,Uint16Array:H.fK,Uint32Array:H.fL,Uint8ClampedArray:H.dd,CanvasPixelArray:H.dd,Uint8Array:H.fM,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableCellElement:W.q,HTMLTableDataCellElement:W.q,HTMLTableHeaderCellElement:W.q,HTMLTableColElement:W.q,HTMLTableElement:W.q,HTMLTableRowElement:W.q,HTMLTableSectionElement:W.q,HTMLTemplateElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.ez,HTMLAnchorElement:W.eB,HTMLAreaElement:W.eC,Blob:W.cJ,HTMLBodyElement:W.cK,HTMLCanvasElement:W.bq,CanvasRenderingContext2D:W.br,CDATASection:W.b8,CharacterData:W.b8,Comment:W.b8,ProcessingInstruction:W.b8,Text:W.b8,CSSNumericValue:W.bT,CSSUnitValue:W.bT,CSSPerspective:W.eN,CSSCharsetRule:W.L,CSSConditionRule:W.L,CSSFontFaceRule:W.L,CSSGroupingRule:W.L,CSSImportRule:W.L,CSSKeyframeRule:W.L,MozCSSKeyframeRule:W.L,WebKitCSSKeyframeRule:W.L,CSSKeyframesRule:W.L,MozCSSKeyframesRule:W.L,WebKitCSSKeyframesRule:W.L,CSSMediaRule:W.L,CSSNamespaceRule:W.L,CSSPageRule:W.L,CSSRule:W.L,CSSStyleRule:W.L,CSSSupportsRule:W.L,CSSViewportRule:W.L,CSSStyleDeclaration:W.bU,MSStyleCSSProperties:W.bU,CSS2Properties:W.bU,CSSImageValue:W.ay,CSSKeywordValue:W.ay,CSSPositionValue:W.ay,CSSResourceValue:W.ay,CSSURLImageValue:W.ay,CSSStyleValue:W.ay,CSSMatrixComponent:W.az,CSSRotation:W.az,CSSScale:W.az,CSSSkew:W.az,CSSTranslation:W.az,CSSTransformComponent:W.az,CSSTransformValue:W.eP,CSSUnparsedValue:W.eQ,DataTransferItemList:W.eS,HTMLDivElement:W.bV,XMLDocument:W.bW,Document:W.bW,DOMException:W.eT,ClientRectList:W.cT,DOMRectList:W.cT,DOMRectReadOnly:W.cU,DOMStringList:W.eU,DOMTokenList:W.eV,Element:W.X,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,AbsoluteOrientationSensor:W.c,Accelerometer:W.c,AccessibleNode:W.c,AmbientLightSensor:W.c,Animation:W.c,ApplicationCache:W.c,DOMApplicationCache:W.c,OfflineResourceList:W.c,BackgroundFetchRegistration:W.c,BatteryManager:W.c,BroadcastChannel:W.c,CanvasCaptureMediaStreamTrack:W.c,DedicatedWorkerGlobalScope:W.c,EventSource:W.c,FileReader:W.c,FontFaceSet:W.c,Gyroscope:W.c,XMLHttpRequest:W.c,XMLHttpRequestEventTarget:W.c,XMLHttpRequestUpload:W.c,LinearAccelerationSensor:W.c,Magnetometer:W.c,MediaDevices:W.c,MediaKeySession:W.c,MediaQueryList:W.c,MediaRecorder:W.c,MediaSource:W.c,MediaStream:W.c,MediaStreamTrack:W.c,MessagePort:W.c,MIDIAccess:W.c,MIDIInput:W.c,MIDIOutput:W.c,MIDIPort:W.c,NetworkInformation:W.c,Notification:W.c,OffscreenCanvas:W.c,OrientationSensor:W.c,PaymentRequest:W.c,Performance:W.c,PermissionStatus:W.c,PresentationAvailability:W.c,PresentationConnection:W.c,PresentationConnectionList:W.c,PresentationRequest:W.c,RelativeOrientationSensor:W.c,RemotePlayback:W.c,RTCDataChannel:W.c,DataChannel:W.c,RTCDTMFSender:W.c,RTCPeerConnection:W.c,webkitRTCPeerConnection:W.c,mozRTCPeerConnection:W.c,ScreenOrientation:W.c,Sensor:W.c,ServiceWorker:W.c,ServiceWorkerContainer:W.c,ServiceWorkerGlobalScope:W.c,ServiceWorkerRegistration:W.c,SharedWorker:W.c,SharedWorkerGlobalScope:W.c,SpeechRecognition:W.c,SpeechSynthesis:W.c,SpeechSynthesisUtterance:W.c,VR:W.c,VRDevice:W.c,VRDisplay:W.c,VRSession:W.c,VisualViewport:W.c,WebSocket:W.c,Worker:W.c,WorkerGlobalScope:W.c,WorkerPerformance:W.c,BluetoothDevice:W.c,BluetoothRemoteGATTCharacteristic:W.c,Clipboard:W.c,MojoInterfaceInterceptor:W.c,USB:W.c,IDBDatabase:W.c,IDBOpenDBRequest:W.c,IDBVersionChangeRequest:W.c,IDBRequest:W.c,IDBTransaction:W.c,AnalyserNode:W.c,RealtimeAnalyserNode:W.c,AudioBufferSourceNode:W.c,AudioDestinationNode:W.c,AudioNode:W.c,AudioScheduledSourceNode:W.c,AudioWorkletNode:W.c,BiquadFilterNode:W.c,ChannelMergerNode:W.c,AudioChannelMerger:W.c,ChannelSplitterNode:W.c,AudioChannelSplitter:W.c,ConstantSourceNode:W.c,ConvolverNode:W.c,DelayNode:W.c,DynamicsCompressorNode:W.c,GainNode:W.c,AudioGainNode:W.c,IIRFilterNode:W.c,MediaElementAudioSourceNode:W.c,MediaStreamAudioDestinationNode:W.c,MediaStreamAudioSourceNode:W.c,OscillatorNode:W.c,Oscillator:W.c,PannerNode:W.c,AudioPannerNode:W.c,webkitAudioPannerNode:W.c,ScriptProcessorNode:W.c,JavaScriptAudioNode:W.c,StereoPannerNode:W.c,WaveShaperNode:W.c,EventTarget:W.c,File:W.aA,FileList:W.f4,FileWriter:W.f5,HTMLFormElement:W.f9,Gamepad:W.aB,History:W.fc,HTMLCollection:W.bw,HTMLFormControlsCollection:W.bw,HTMLOptionsCollection:W.bw,HTMLDocument:W.cZ,ImageData:W.bd,HTMLImageElement:W.bY,KeyboardEvent:W.aF,Location:W.fo,HTMLAudioElement:W.c3,HTMLMediaElement:W.c3,MediaList:W.fA,MIDIInputMap:W.fB,MIDIOutputMap:W.fD,MimeType:W.aH,MimeTypeArray:W.fF,PointerEvent:W.a1,MouseEvent:W.a1,DragEvent:W.a1,DocumentFragment:W.D,ShadowRoot:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.c6,RadioNodeList:W.c6,Plugin:W.aI,PluginArray:W.fT,RTCStatsReport:W.h_,HTMLSelectElement:W.h2,SourceBuffer:W.aJ,SourceBufferList:W.hb,SpeechGrammar:W.aK,SpeechGrammarList:W.hc,SpeechRecognitionResult:W.aL,Storage:W.hg,CSSStyleSheet:W.ar,StyleSheet:W.ar,TextTrack:W.aM,TextTrackCue:W.as,VTTCue:W.as,TextTrackCueList:W.ho,TextTrackList:W.hp,TimeRanges:W.hv,Touch:W.aN,TouchEvent:W.at,TouchList:W.hy,TrackDefaultList:W.hz,CompositionEvent:W.bj,FocusEvent:W.bj,TextEvent:W.bj,UIEvent:W.bj,URL:W.hQ,HTMLVideoElement:W.i4,VideoTrackList:W.i5,WheelEvent:W.aQ,Window:W.cn,DOMWindow:W.cn,CSSRuleList:W.ig,ClientRect:W.dJ,DOMRect:W.dJ,GamepadList:W.iu,NamedNodeMap:W.e_,MozNamedAttrMap:W.e_,SpeechRecognitionResultList:W.iE,StyleSheetList:W.iF,SVGLength:P.aS,SVGLengthList:P.fj,SVGNumber:P.aZ,SVGNumberList:P.fP,SVGPointList:P.fU,SVGStringList:P.hm,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGScriptElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGTransform:P.b_,SVGTransformList:P.hA,AudioBuffer:P.eE,AudioParamMap:P.eF,AudioTrackList:P.eH,AudioContext:P.bp,webkitAudioContext:P.bp,BaseAudioContext:P.bp,OfflineAudioContext:P.fQ,WebGLBuffer:P.cL,WebGLFramebuffer:P.cY,WebGLProgram:P.dj,WebGL2RenderingContext:P.bB,WebGLShader:P.dn,WebGLTexture:P.dt,WebGLUniformLocation:P.dA,SQLResultSetRowList:P.hd})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.db.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.cs.$nativeSuperclassTag="ArrayBufferView"
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
W.cu.$nativeSuperclassTag="EventTarget"
W.cv.$nativeSuperclassTag="EventTarget"
W.cw.$nativeSuperclassTag="EventTarget"
W.cx.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.kp,[])
else N.kp([])})})()
//# sourceMappingURL=test.dart.js.map
