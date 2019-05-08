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
a[c]=function(){a[c]=function(){H.mZ(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jZ(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jI:function jI(a){this.a=a},
fD:function(){return new P.bP("No element")},
lO:function(){return new P.bP("Too many elements")},
lN:function(){return new P.bP("Too few elements")},
q:function q(a){this.a=a},
fg:function fg(){},
bI:function bI(){},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fS:function fS(a,b,c){this.a=a
this.b=b
this.$ti=c},
fT:function fT(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fU:function fU(a,b,c){this.a=a
this.b=b
this.$ti=c},
cD:function cD(a,b,c){this.a=a
this.b=b
this.$ti=c},
iC:function iC(a,b,c){this.a=a
this.b=b
this.$ti=c},
bG:function bG(){},
dT:function dT(){},
dS:function dS(){},
c0:function(a){var u,t
u=H.E(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
mG:function(a){return v.types[H.a7(a)]},
mN:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.X(a).$iD},
k:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aD(a)
if(typeof u!=="string")throw H.f(H.by(a))
return u},
m3:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fE(u)
t=u[0]
s=u[1]
return new H.hp(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cn:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bM:function(a){return H.lV(a)+H.jW(H.bz(a),0,null)},
lV:function(a){var u,t,s,r,q,p,o,n,m
u=J.X(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.M||!!u.$ibu){p=C.z(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c0(r.length>1&&C.j.av(r,0)===36?C.j.aV(r,1):r)},
kx:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
m2:function(a){var u,t,s,r
u=H.c([],[P.B])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.f(H.by(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.i.b_(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.f(H.by(r))}return H.kx(u)},
ky:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.by(s))
if(s<0)throw H.f(H.by(s))
if(s>65535)return H.m2(a)}return H.kx(a)},
jL:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.i.b_(u,10))>>>0,56320|u&1023)}throw H.f(P.ar(a,0,1114111,null,null))},
bL:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
m1:function(a){var u=H.bL(a).getFullYear()+0
return u},
m_:function(a){var u=H.bL(a).getMonth()+1
return u},
lW:function(a){var u=H.bL(a).getDate()+0
return u},
lX:function(a){var u=H.bL(a).getHours()+0
return u},
lZ:function(a){var u=H.bL(a).getMinutes()+0
return u},
m0:function(a){var u=H.bL(a).getSeconds()+0
return u},
lY:function(a){var u=H.bL(a).getMilliseconds()+0
return u},
bA:function(a){throw H.f(H.by(a))},
i:function(a,b){if(a==null)J.bB(a)
throw H.f(H.bW(a,b))},
bW:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
u=H.a7(J.bB(a))
if(!(b<0)){if(typeof u!=="number")return H.bA(u)
t=b>=u}else t=!0
if(t)return P.S(b,a,"index",null,u)
return P.dA(b,"index",null)},
mA:function(a,b,c){if(a>c)return new P.bN(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bN(a,c,!0,b,"end","Invalid value")
return new P.aE(!0,b,"end",null)},
by:function(a){return new P.aE(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.du()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.la})
u.name=""}else u.toString=H.la
return u},
la:function(){return J.aD(this.dartException)},
r:function(a){throw H.f(a)},
C:function(a){throw H.f(P.bm(a))},
aX:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i4(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
i5:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kG:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ks:function(a,b){return new H.hg(a,b==null?null:b.method)},
jJ:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fI(a,t,u?null:b.receiver)},
ao:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jz(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.i.b_(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jJ(H.k(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.ks(H.k(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.ld()
p=$.le()
o=$.lf()
n=$.lg()
m=$.lj()
l=$.lk()
k=$.li()
$.lh()
j=$.lm()
i=$.ll()
h=q.a3(t)
if(h!=null)return u.$1(H.jJ(H.E(t),h))
else{h=p.a3(t)
if(h!=null){h.method="call"
return u.$1(H.jJ(H.E(t),h))}else{h=o.a3(t)
if(h==null){h=n.a3(t)
if(h==null){h=m.a3(t)
if(h==null){h=l.a3(t)
if(h==null){h=k.a3(t)
if(h==null){h=n.a3(t)
if(h==null){h=j.a3(t)
if(h==null){h=i.a3(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.ks(H.E(t),h))}}return u.$1(new H.ii(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dG()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aE(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dG()
return a},
bZ:function(a){var u
if(a==null)return new H.et(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.et(a)},
mC:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.U(0,a[t],a[s])}return b},
mM:function(a,b,c,d,e,f){H.o(a,"$ibq")
switch(H.a7(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.t("Unsupported number of arguments for wrapped closure"))},
bV:function(a,b){var u
H.a7(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mM)
a.$identity=u
return u},
lF:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.X(d).$ib){u.$reflectionInfo=d
s=H.m3(u).r}else s=d
r=e?Object.create(new H.hK().constructor.prototype):Object.create(new H.c4(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aF
if(typeof p!=="number")return p.q()
$.aF=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.kh(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.mG,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.kf:H.jD
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.f("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.kh(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
lC:function(a,b,c,d){var u=H.jD
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kh:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lE(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lC(t,!r,u,b)
if(t===0){r=$.aF
if(typeof r!=="number")return r.q()
$.aF=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c5
if(q==null){q=H.f0("self")
$.c5=q}return new Function(r+H.k(q)+";return "+p+"."+H.k(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aF
if(typeof r!=="number")return r.q()
$.aF=r+1
o+=r
r="return function("+o+"){return this."
q=$.c5
if(q==null){q=H.f0("self")
$.c5=q}return new Function(r+H.k(q)+"."+H.k(u)+"("+o+");}")()},
lD:function(a,b,c,d){var u,t
u=H.jD
t=H.kf
switch(b?-1:a){case 0:throw H.f(H.m7("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lE:function(a,b){var u,t,s,r,q,p,o,n
u=$.c5
if(u==null){u=H.f0("self")
$.c5=u}t=$.ke
if(t==null){t=H.f0("receiver")
$.ke=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lD(r,!p,s,b)
if(r===1){u="return function(){return this."+H.k(u)+"."+H.k(s)+"(this."+H.k(t)+");"
t=$.aF
if(typeof t!=="number")return t.q()
$.aF=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.k(u)+"."+H.k(s)+"(this."+H.k(t)+", "+n+");"
t=$.aF
if(typeof t!=="number")return t.q()
$.aF=t+1
return new Function(u+t+"}")()},
jZ:function(a,b,c,d,e,f,g){return H.lF(a,b,H.a7(c),d,!!e,!!f,g)},
jD:function(a){return a.a},
kf:function(a){return a.c},
f0:function(a){var u,t,s,r,q
u=new H.c4("self","target","receiver","name")
t=J.fE(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
E:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aB(a,"String"))},
nF:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aB(a,"double"))},
mS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aB(a,"num"))},
jX:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aB(a,"bool"))},
a7:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aB(a,"int"))},
l8:function(a,b){throw H.f(H.aB(a,H.c0(H.E(b).substring(2))))},
mU:function(a,b){throw H.f(H.lB(a,H.c0(H.E(b).substring(2))))},
o:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.X(a)[b])return a
H.l8(a,b)},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.X(a)[b]
else u=!0
if(u)return a
H.mU(a,b)},
k2:function(a){if(a==null)return a
if(!!J.X(a).$ib)return a
throw H.f(H.aB(a,"List<dynamic>"))},
mO:function(a,b){var u
if(a==null)return a
u=J.X(a)
if(!!u.$ib)return a
if(u[b])return a
H.l8(a,b)},
l2:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a7(u)]
else return a.$S()}return},
eQ:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.l2(J.X(a))
if(u==null)return!1
return H.kU(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.jT)return a
$.jT=!0
try{if(H.eQ(a,b))return a
u=H.jw(b)
t=H.aB(a,u)
throw H.f(t)}finally{$.jT=!1}},
k_:function(a,b){if(a!=null&&!H.jY(a,b))H.r(H.aB(a,H.jw(b)))
return a},
aB:function(a,b){return new H.i6("TypeError: "+P.fk(a)+": type '"+H.kY(a)+"' is not a subtype of type '"+b+"'")},
lB:function(a,b){return new H.f1("CastError: "+P.fk(a)+": type '"+H.kY(a)+"' is not a subtype of type '"+b+"'")},
kY:function(a){var u,t
u=J.X(a)
if(!!u.$ic6){t=H.l2(u)
if(t!=null)return H.jw(t)
return"Closure"}return H.bM(a)},
mZ:function(a){throw H.f(new P.f8(H.E(a)))},
m7:function(a){return new H.hw(a)},
l3:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bz:function(a){if(a==null)return
return a.$ti},
nG:function(a,b,c){return H.c_(a["$a"+H.k(c)],H.bz(b))},
bY:function(a,b,c,d){var u
H.E(c)
H.a7(d)
u=H.c_(a["$a"+H.k(c)],H.bz(b))
return u==null?null:u[d]},
ai:function(a,b,c){var u
H.E(b)
H.a7(c)
u=H.c_(a["$a"+H.k(b)],H.bz(a))
return u==null?null:u[c]},
x:function(a,b){var u
H.a7(b)
u=H.bz(a)
return u==null?null:u[b]},
jw:function(a){return H.bx(a,null)},
bx:function(a,b){var u,t
H.m(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c0(a[0].name)+H.jW(a,1,b)
if(typeof a=="function")return H.c0(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a7(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.i(b,t)
return H.k(b[t])}if('func' in a)return H.mo(a,b)
if('futureOr' in a)return"FutureOr<"+H.bx("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mo:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.e]
H.m(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.c([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.i(b,m)
o=C.j.q(o,b[m])
l=t[p]
if(l!=null&&l!==P.K)o+=" extends "+H.bx(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bx(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bx(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bx(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.mB(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.E(u[g])
i=i+h+H.bx(d[c],b)+(" "+H.k(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jW:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.ba("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bx(p,c)}return"<"+u.i(0)+">"},
c_:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
eP:function(a,b,c,d){var u,t
H.E(b)
H.k2(c)
H.E(d)
if(a==null)return!1
u=H.bz(a)
t=J.X(a)
if(t[b]==null)return!1
return H.l0(H.c_(t[d],u),null,c,null)},
m:function(a,b,c,d){H.E(b)
H.k2(c)
H.E(d)
if(a==null)return a
if(H.eP(a,b,c,d))return a
throw H.f(H.aB(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c0(b.substring(2))+H.jW(c,0,null),v.mangledGlobalNames)))},
l0:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.av(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.av(a[t],b,c[t],d))return!1
return!0},
nD:function(a,b,c){return a.apply(b,H.c_(J.X(b)["$a"+H.k(c)],H.bz(b)))},
l5:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="K"||a.name==="I"||a===-1||a===-2||H.l5(u)}return!1},
jY:function(a,b){var u,t
if(a==null)return b==null||b.name==="K"||b.name==="I"||b===-1||b===-2||H.l5(b)
if(b==null||b===-1||b.name==="K"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jY(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eQ(a,b)}u=J.X(a).constructor
t=H.bz(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.av(u,null,b,null)},
F:function(a,b){if(a!=null&&!H.jY(a,b))throw H.f(H.aB(a,H.jw(b)))
return a},
av:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="K"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="K"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.av(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="I")return!0
if('func' in c)return H.kU(a,b,c,d)
if('func' in a)return c.name==="bq"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.av("type" in a?a.type:null,b,s,d)
else if(H.av(a,b,s,d))return!0
else{if(!('$i'+"cd" in t.prototype))return!1
r=t.prototype["$a"+"cd"]
q=H.c_(r,u?a.slice(1):null)
return H.av(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.l0(H.c_(m,u),b,p,d)},
kU:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.mR(h,b,g,d)},
mR:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.av(c[r],d,a[r],b))return!1}return!0},
nE:function(a,b,c){Object.defineProperty(a,H.E(b),{value:c,enumerable:false,writable:true,configurable:true})},
mP:function(a){var u,t,s,r,q,p
u=H.E($.l4.$1(a))
t=$.jn[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jt[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.E($.l_.$2(a,u))
if(u!=null){t=$.jn[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jt[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jv(s)
$.jn[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.jt[u]=s
return s}if(q==="-"){p=H.jv(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.l7(a,s)
if(q==="*")throw H.f(P.kH(u))
if(v.leafTags[u]===true){p=H.jv(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.l7(a,s)},
l7:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.k3(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jv:function(a){return J.k3(a,!1,null,!!a.$iD)},
mQ:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jv(u)
else return J.k3(u,c,null,null)},
mK:function(){if(!0===$.k1)return
$.k1=!0
H.mL()},
mL:function(){var u,t,s,r,q,p,o,n
$.jn=Object.create(null)
$.jt=Object.create(null)
H.mJ()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.l9.$1(q)
if(p!=null){o=H.mQ(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mJ:function(){var u,t,s,r,q,p,o
u=C.Q()
u=H.bU(C.N,H.bU(C.S,H.bU(C.y,H.bU(C.y,H.bU(C.R,H.bU(C.O,H.bU(C.P(C.z),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.l4=new H.jq(q)
$.l_=new H.jr(p)
$.l9=new H.js(o)},
bU:function(a,b){return a(b)||b},
lQ:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.fv("Illegal RegExp pattern ("+String(r)+")",a,null))},
mX:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
k5:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hp:function hp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
i4:function i4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hg:function hg(a,b){this.a=a
this.b=b},
fI:function fI(a,b,c){this.a=a
this.b=b
this.c=c},
ii:function ii(a){this.a=a},
jz:function jz(a){this.a=a},
et:function et(a){this.a=a
this.b=null},
c6:function c6(){},
hT:function hT(){},
hK:function hK(){},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i6:function i6(a){this.a=a},
f1:function f1(a){this.a=a},
hw:function hw(a){this.a=a},
aM:function aM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
di:function di(a,b){this.a=a
this.$ti=b},
fN:function fN(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jq:function jq(a){this.a=a},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
fH:function fH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cP:function(a){return a},
bw:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bW(b,a))},
mn:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.mA(a,b,c))
return b},
ck:function ck(){},
dq:function dq(){},
cj:function cj(){},
dr:function dr(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
ds:function ds(){},
hc:function hc(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
mB:function(a){return J.km(a?Object.keys(a):[],null)},
mT:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k3:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eR:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.k1==null){H.mK()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.f(P.kH("Return interceptor for "+H.k(t(a,u))))}r=a.constructor
q=r==null?null:r[$.k7()]
if(q!=null)return q
q=H.mP(a)
if(q!=null)return q
if(typeof a=="function")return C.T
t=Object.getPrototypeOf(a)
if(t==null)return C.B
if(t===Object.prototype)return C.B
if(typeof r=="function"){Object.defineProperty(r,$.k7(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
lP:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.jC(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.ar(a,0,4294967295,"length",null))
return J.km(new Array(a),b)},
km:function(a,b){return J.fE(H.c(a,[b]))},
fE:function(a){H.k2(a)
a.fixed$length=Array
return a},
X:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dd.prototype
return J.fG.prototype}if(typeof a=="string")return J.b3.prototype
if(a==null)return J.de.prototype
if(typeof a=="boolean")return J.fF.prototype
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.K)return a
return J.eR(a)},
mD:function(a){if(typeof a=="number")return J.br.prototype
if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.K)return a
return J.eR(a)},
jo:function(a){if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.K)return a
return J.eR(a)},
jp:function(a){if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.K)return a
return J.eR(a)},
mE:function(a){if(typeof a=="number")return J.br.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bu.prototype
return a},
mF:function(a){if(typeof a=="number")return J.br.prototype
if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bu.prototype
return a},
k0:function(a){if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bu.prototype
return a},
an:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.K)return a
return J.eR(a)},
ls:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.mD(a).q(a,b)},
Z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).t(a,b)},
ka:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mF(a).M(a,b)},
lt:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.mE(a).w(a,b)},
lu:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mN(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jo(a).j(a,b)},
eS:function(a,b){return J.an(a).h8(a,b)},
lv:function(a,b,c,d){return J.an(a).hZ(a,b,c,d)},
kb:function(a,b){return J.an(a).u(a,b)},
jA:function(a,b){return J.jp(a).B(a,b)},
lw:function(a,b){return J.jp(a).K(a,b)},
lx:function(a){return J.an(a).gi4(a)},
cV:function(a){return J.X(a).gI(a)},
c2:function(a){return J.jp(a).gO(a)},
bB:function(a){return J.jo(a).gl(a)},
ly:function(a){return J.an(a).gje(a)},
jB:function(a,b){return J.an(a).aG(a,b)},
kc:function(a){return J.jp(a).j3(a)},
lz:function(a,b,c){return J.k0(a).aW(a,b,c)},
lA:function(a){return J.k0(a).ji(a)},
aD:function(a){return J.X(a).i(a)},
a:function a(){},
fF:function fF(){},
de:function de(){},
df:function df(){},
hk:function hk(){},
bu:function bu(){},
b4:function b4(){},
ax:function ax(a){this.$ti=a},
jH:function jH(a){this.$ti=a},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
br:function br(){},
dd:function dd(){},
fG:function fG(){},
b3:function b3(){}},P={
md:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.mv()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bV(new P.iE(u),1)).observe(t,{childList:true})
return new P.iD(u,t,s)}else if(self.setImmediate!=null)return P.mw()
return P.mx()},
me:function(a){self.scheduleImmediate(H.bV(new P.iF(H.l(a,{func:1,ret:-1})),0))},
mf:function(a){self.setImmediate(H.bV(new P.iG(H.l(a,{func:1,ret:-1})),0))},
mg:function(a){P.jO(C.p,H.l(a,{func:1,ret:-1}))},
jO:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.i.X(a.a,1000)
return P.ml(u<0?0:u,b)},
kF:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.aV]})
u=C.i.X(a.a,1000)
return P.mm(u<0?0:u,b)},
ml:function(a,b){var u=new P.ez(!0)
u.eI(a,b)
return u},
mm:function(a,b){var u=new P.ez(!1)
u.eJ(a,b)
return u},
mh:function(a,b){var u,t,s
b.a=1
try{a.dN(new P.iP(b),new P.iQ(b),null)}catch(s){u=H.ao(s)
t=H.bZ(s)
P.mV(new P.iR(b,u,t))}},
kP:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.o(a.c,"$iau")
if(u>=4){t=b.bG()
b.a=a.a
b.c=a.c
P.cG(b,t)}else{t=H.o(b.c,"$ib_")
b.a=2
b.c=a
a.cK(t)}},
cG:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.o(t.c,"$ia8")
t=t.b
p=q.a
o=q.b
t.toString
P.ji(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cG(u.a,b)}t=u.a
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
if(k){H.o(m,"$ia8")
t=t.b
p=m.a
o=m.b
t.toString
P.ji(null,null,t,p,o)
return}j=$.U
if(j!=l)$.U=l
else j=null
t=b.c
if(t===8)new P.iV(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.iU(s,b,m).$0()}else if((t&2)!==0)new P.iT(u,s,b).$0()
if(j!=null)$.U=j
t=s.b
if(!!J.X(t).$icd){if(t.a>=4){i=H.o(o.c,"$ib_")
o.c=null
b=o.aZ(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.kP(t,o)
return}}h=b.b
i=H.o(h.c,"$ib_")
h.c=null
b=h.aZ(i)
t=s.a
p=s.b
if(!t){H.F(p,H.x(h,0))
h.a=4
h.c=p}else{H.o(p,"$ia8")
h.a=8
h.c=p}u.a=h
t=h}},
mr:function(a,b){if(H.eQ(a,{func:1,args:[P.K,P.ah]}))return H.l(a,{func:1,ret:null,args:[P.K,P.ah]})
if(H.eQ(a,{func:1,args:[P.K]}))return H.l(a,{func:1,ret:null,args:[P.K]})
throw H.f(P.jC(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mq:function(){var u,t
for(;u=$.bT,u!=null;){$.cR=null
t=u.b
$.bT=t
if(t==null)$.cQ=null
u.a.$0()}},
mu:function(){$.jU=!0
try{P.mq()}finally{$.cR=null
$.jU=!1
if($.bT!=null)$.k8().$1(P.l1())}},
kX:function(a){var u=new P.dW(H.l(a,{func:1,ret:-1}))
if($.bT==null){$.cQ=u
$.bT=u
if(!$.jU)$.k8().$1(P.l1())}else{$.cQ.b=u
$.cQ=u}},
mt:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.bT
if(u==null){P.kX(a)
$.cR=$.cQ
return}t=new P.dW(a)
s=$.cR
if(s==null){t.b=u
$.cR=t
$.bT=t}else{t.b=s.b
s.b=t
$.cR=t
if(t.b==null)$.cQ=t}},
mV:function(a){var u,t
u={func:1,ret:-1}
H.l(a,u)
t=$.U
if(C.l===t){P.jk(null,null,C.l,a)
return}t.toString
P.jk(null,null,t,H.l(t.bN(a),u))},
kE:function(a,b){var u,t
u={func:1,ret:-1}
H.l(b,u)
t=$.U
if(t===C.l){t.toString
return P.jO(a,b)}return P.jO(a,H.l(t.bN(b),u))},
mb:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aV]}
H.l(b,u)
t=$.U
if(t===C.l){t.toString
return P.kF(a,b)}s=t.cV(b,P.aV)
$.U.toString
return P.kF(a,H.l(s,u))},
ji:function(a,b,c,d,e){var u={}
u.a=d
P.mt(new P.jj(u,e))},
kV:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.U
if(t===c)return d.$0()
$.U=c
u=t
try{t=d.$0()
return t}finally{$.U=u}},
kW:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.F(e,g)
t=$.U
if(t===c)return d.$1(e)
$.U=c
u=t
try{t=d.$1(e)
return t}finally{$.U=u}},
ms:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.F(e,h)
H.F(f,i)
t=$.U
if(t===c)return d.$2(e,f)
$.U=c
u=t
try{t=d.$2(e,f)
return t}finally{$.U=u}},
jk:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.bN(d):c.i5(d,-1)
P.kX(d)},
iE:function iE(a){this.a=a},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
iF:function iF(a){this.a=a},
iG:function iG(a){this.a=a},
ez:function ez(a){this.a=a
this.b=null
this.c=0},
je:function je(a,b){this.a=a
this.b=b},
jd:function jd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b_:function b_(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iO:function iO(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.a=a
this.b=b},
iP:function iP(a){this.a=a},
iQ:function iQ(a){this.a=a},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iW:function iW(a){this.a=a},
iU:function iU(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
dW:function dW(a){this.a=a
this.b=null},
hN:function hN(){},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
cr:function cr(){},
hO:function hO(){},
aV:function aV(){},
a8:function a8(a,b){this.a=a
this.b=b},
jh:function jh(){},
jj:function jj(a,b){this.a=a
this.b=b},
j0:function j0(){},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(a,b){this.a=a
this.b=b},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
kn:function(a,b){return new H.aM([a,b])},
lR:function(a){return H.mC(a,new H.aM([null,null]))},
dj:function(a,b,c,d){return new P.iZ([d])},
jS:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mk:function(a,b,c){var u=new P.ea(a,b,[c])
u.c=a.e
return u},
lM:function(a,b,c){var u,t
if(P.jV(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.e])
t=$.cU()
C.a.h(t,a)
try{P.mp(a,u)}finally{if(0>=t.length)return H.i(t,-1)
t.pop()}t=P.kC(b,H.mO(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
jG:function(a,b,c){var u,t,s
if(P.jV(a))return b+"..."+c
u=new P.ba(b)
t=$.cU()
C.a.h(t,a)
try{s=u
s.a=P.kC(s.a,a,", ")}finally{if(0>=t.length)return H.i(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jV:function(a){var u,t
for(u=0;t=$.cU(),u<t.length;++u)if(a===t[u])return!0
return!1},
mp:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.e],"$ab")
u=a.gO(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.v())return
r=H.k(u.gF(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.v()){if(s<=5)return
if(0>=b.length)return H.i(b,-1)
q=b.pop()
if(0>=b.length)return H.i(b,-1)
p=b.pop()}else{o=u.gF(u);++s
if(!u.v()){if(s<=4){C.a.h(b,H.k(o))
return}q=H.k(o)
if(0>=b.length)return H.i(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gF(u);++s
for(;u.v();o=n,n=m){m=u.gF(u);++s
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
ko:function(a,b){var u,t,s
u=P.dj(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)u.h(0,H.F(a[s],b))
return u},
kp:function(a){var u,t
u={}
if(P.jV(a))return"{...}"
t=new P.ba("")
try{C.a.h($.cU(),a)
t.a+="{"
u.a=!0
J.lw(a,new P.fR(u,t))
t.a+="}"}finally{u=$.cU()
if(0>=u.length)return H.i(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
iZ:function iZ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bS:function bS(a){this.a=a
this.c=this.b=null},
ea:function ea(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fO:function fO(){},
w:function w(){},
fQ:function fQ(){},
fR:function fR(a,b){this.a=a
this.b=b},
a3:function a3(){},
j5:function j5(){},
eb:function eb(){},
c7:function c7(){},
c8:function c8(){},
fi:function fi(){},
fB:function fB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fA:function fA(a){this.a=a},
il:function il(a){this.a=a},
im:function im(){},
jf:function jf(a){this.b=this.a=0
this.c=a},
lK:function(a){if(a instanceof H.c6)return a.i(0)
return"Instance of '"+H.bM(a)+"'"},
lS:function(a,b,c,d){var u,t
H.F(b,d)
u=J.lP(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.U(u,t,b)
return H.m(u,"$ib",[d],"$ab")},
lT:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=a.gO(a);s.v();)C.a.h(t,H.F(s.gF(s),c))
if(b)return t
return H.m(J.fE(t),"$ib",u,"$ab")},
jN:function(a,b,c){var u,t
u=P.B
H.m(a,"$ih",[u],"$ah")
if(a.constructor===Array){H.m(a,"$iax",[u],"$aax")
t=a.length
c=P.jM(b,c,t,null,null,null)
return H.ky(b>0||c<t?C.a.ee(a,b,c):a)}return P.m9(a,b,c)},
m9:function(a,b,c){var u,t,s
H.m(a,"$ih",[P.B],"$ah")
u=J.c2(a)
for(t=0;t<b;++t)if(!u.v())throw H.f(P.ar(b,0,t,null,null))
s=[]
for(;u.v();)s.push(u.gF(u))
return H.ky(s)},
m4:function(a,b,c){return new H.fH(a,H.lQ(a,!1,!0,!1))},
kC:function(a,b,c){var u=J.c2(b)
if(!u.v())return a
if(c.length===0){do a+=H.k(u.gF(u))
while(u.v())}else{a+=H.k(u.gF(u))
for(;u.v();)a=a+c+H.k(u.gF(u))}return a},
kT:function(a,b,c,d){var u,t,s,r,q,p
H.m(a,"$ib",[P.B],"$ab")
if(c===C.w){u=$.lr().b
u=u.test(b)}else u=!1
if(u)return b
t=C.G.ig(H.F(b,H.ai(c,"c7",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.i(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jL(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
lG:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lH:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d4:function(a){if(a>=10)return""+a
return"0"+a},
kj:function(a,b,c,d,e,f){return new P.aI(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fk:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aD(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lK(a)},
jC:function(a,b,c){return new P.aE(!0,a,b,c)},
dA:function(a,b,c){return new P.bN(null,null,!0,a,b,"Value not in range")},
ar:function(a,b,c,d,e){return new P.bN(b,c,!0,a,d,"Invalid value")},
jM:function(a,b,c,d,e,f){if(0>a||a>c)throw H.f(P.ar(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.f(P.ar(b,a,c,"end",f))
return b}return c},
S:function(a,b,c,d,e){var u=H.a7(e==null?J.bB(b):e)
return new P.fC(b,u,!0,a,c,"Index out of range")},
am:function(a){return new P.ij(a)},
kH:function(a){return new P.ih(a)},
kB:function(a){return new P.bP(a)},
bm:function(a){return new P.f3(a)},
t:function(a){return new P.e3(a)},
k4:function(a){H.mT(a)},
M:function M(){},
bn:function bn(a,b){this.a=a
this.b=b},
y:function y(){},
aI:function aI(a){this.a=a},
fe:function fe(){},
ff:function ff(){},
bp:function bp(){},
du:function du(){},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bN:function bN(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fC:function fC(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ij:function ij(a){this.a=a},
ih:function ih(a){this.a=a},
bP:function bP(a){this.a=a},
f3:function f3(a){this.a=a},
hj:function hj(){},
dG:function dG(){},
f8:function f8(a){this.a=a},
e3:function e3(a){this.a=a},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
bq:function bq(){},
B:function B(){},
h:function h(){},
aL:function aL(){},
b:function b(){},
L:function L(){},
I:function I(){},
a1:function a1(){},
K:function K(){},
ah:function ah(){},
e:function e(){},
ba:function ba(a){this.a=a},
bc:function(a){var u,t,s,r,q
if(a==null)return
u=P.kn(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.E(t[r])
u.U(0,q,a[q])}return u},
my:function(a,b){var u={}
a.K(0,new P.jl(u))
return u},
jl:function jl(a){this.a=a},
fr:function fr(a,b){this.a=a
this.b=b},
fs:function fs(){},
ft:function ft(){},
j_:function j_(){},
ag:function ag(){},
b5:function b5(){},
fK:function fK(){},
b9:function b9(){},
hh:function hh(){},
hn:function hn(){},
co:function co(){},
hR:function hR(){},
p:function p(){},
bb:function bb(){},
i3:function i3(){},
e8:function e8(){},
e9:function e9(){},
ej:function ej(){},
ek:function ek(){},
ev:function ev(){},
ew:function ew(){},
eC:function eC(){},
eD:function eD(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(a){this.a=a},
eZ:function eZ(){},
bC:function bC(){},
hi:function hi(){},
dX:function dX(){},
cZ:function cZ(){},
da:function da(){},
dy:function dy(){},
bO:function bO(){},
dD:function dD(){},
dR:function dR(){},
hJ:function hJ(){},
er:function er(){},
es:function es(){}},W={
kd:function(a){var u=document.createElement("a")
return u},
kg:function(a,b){var u=document.createElement("canvas")
return u},
lI:function(a,b,c){var u,t
u=document.body
t=(u&&C.n).a2(u,a,b,c)
t.toString
u=W.A
u=new H.cD(new W.ad(t),H.l(new W.fh(),{func:1,ret:P.M,args:[u]}),[u])
return H.o(u.gas(u),"$iQ")},
lJ:function(a){H.o(a,"$id")
return"wheel"},
cc:function(a){var u,t,s
u="element tag unavailable"
try{t=J.ly(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ao(s)}return u},
iY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kR:function(a,b,c,d){var u,t
u=W.iY(W.iY(W.iY(W.iY(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a6:function(a,b,c,d,e){var u=W.kZ(new W.iN(c),W.n)
if(u!=null&&!0)J.lv(a,b,u,!1)
return new W.iM(a,b,u,!1,[e])},
kQ:function(a){var u,t
u=W.kd(null)
t=window.location
u=new W.bv(new W.j4(u,t))
u.es(a)
return u},
mi:function(a,b,c,d){H.o(a,"$iQ")
H.E(b)
H.E(c)
H.o(d,"$ibv")
return!0},
mj:function(a,b,c,d){var u,t,s
H.o(a,"$iQ")
H.E(b)
H.E(c)
u=H.o(d,"$ibv").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kS:function(){var u,t,s,r,q
u=P.e
t=P.ko(C.r,u)
s=H.x(C.r,0)
r=H.l(new W.jc(),{func:1,ret:u,args:[s]})
q=H.c(["TEMPLATE"],[u])
t=new W.jb(t,P.dj(null,null,null,u),P.dj(null,null,null,u),P.dj(null,null,null,u),null)
t.eF(null,new H.fU(C.r,r,[s,u]),q,null)
return t},
kZ:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.U
if(u===C.l)return a
return u.cV(a,b)},
u:function u(){},
eT:function eT(){},
cW:function cW(){},
eU:function eU(){},
c3:function c3(){},
cY:function cY(){},
bj:function bj(){},
bD:function bD(){},
bk:function bk(){},
c9:function c9(){},
f4:function f4(){},
P:function P(){},
ca:function ca(){},
f5:function f5(){},
aG:function aG(){},
aH:function aH(){},
f6:function f6(){},
f7:function f7(){},
fa:function fa(){},
aq:function aq(){},
cb:function cb(){},
fb:function fb(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
fc:function fc(){},
fd:function fd(){},
iI:function iI(a,b){this.a=a
this.b=b},
Q:function Q(){},
fh:function fh(){},
n:function n(){},
d:function d(){},
aJ:function aJ(){},
fp:function fp(){},
fq:function fq(){},
fu:function fu(){},
aK:function aK(){},
db:function db(){},
fz:function fz(){},
bH:function bH(){},
dc:function dc(){},
aN:function aN(){},
dk:function dk(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(a){this.a=a},
h3:function h3(){},
h4:function h4(a){this.a=a},
aP:function aP(){},
h5:function h5(){},
a4:function a4(){},
ad:function ad(a){this.a=a},
A:function A(){},
cl:function cl(){},
aQ:function aQ(){},
hm:function hm(){},
dz:function dz(){},
hu:function hu(){},
hv:function hv(a){this.a=a},
hx:function hx(){},
aR:function aR(){},
hH:function hH(){},
aS:function aS(){},
hI:function hI(){},
aT:function aT(){},
hL:function hL(){},
hM:function hM(a){this.a=a},
ay:function ay(){},
bQ:function bQ(){},
dH:function dH(){},
dI:function dI(){},
hS:function hS(){},
cs:function cs(){},
aU:function aU(){},
az:function az(){},
hU:function hU(){},
hV:function hV(){},
hY:function hY(){},
aW:function aW(){},
aA:function aA(){},
i1:function i1(){},
i2:function i2(){},
bt:function bt(){},
ik:function ik(){},
iA:function iA(){},
aZ:function aZ(){},
cE:function cE(){},
cF:function cF(){},
iJ:function iJ(){},
dZ:function dZ(){},
iX:function iX(){},
eg:function eg(){},
j8:function j8(){},
j9:function j9(){},
iH:function iH(){},
iK:function iK(a){this.a=a},
iL:function iL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jR:function jR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iM:function iM(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iN:function iN(a){this.a=a},
bv:function bv(a){this.a=a},
z:function z(){},
dt:function dt(a){this.a=a},
he:function he(a){this.a=a},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
eo:function eo(){},
j6:function j6(){},
j7:function j7(){},
jb:function jb(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jc:function jc(){},
ja:function ja(){},
d9:function d9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ak:function ak(){},
j4:function j4(a,b){this.a=a
this.b=b},
eE:function eE(a){this.a=a},
jg:function jg(a){this.a=a},
dY:function dY(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eh:function eh(){},
ei:function ei(){},
el:function el(){},
em:function em(){},
en:function en(){},
cL:function cL(){},
cM:function cM(){},
ep:function ep(){},
eq:function eq(){},
eu:function eu(){},
ex:function ex(){},
ey:function ey(){},
cN:function cN(){},
cO:function cO(){},
eA:function eA(){},
eB:function eB(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){}},O={
jE:function(a){var u=new O.a_([a])
u.cg(a)
return u},
a_:function a_(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
ci:function ci(){this.b=this.a=null},
dm:function dm(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fW:function fW(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dn:function dn(){},
fX:function fX(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aO:function aO(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fZ:function fZ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h_:function h_(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bR:function bR(){}},E={
m6:function(a,b){var u=new E.hq(a,b)
u.en(a,b)
return u},
ma:function(a,b,c,d,e){var u,t,s,r
u=J.X(a)
if(!!u.$ibD)return E.kD(a,!0,!0,!0,!1)
t=W.kg(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcX(a).h(0,t)
r=E.kD(t,!0,!0,!0,!1)
r.a=a
return r},
kD:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.dO()
t=H.o(C.H.e0(a,"webgl2",P.lR(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibO")
if(t==null)H.r(P.t("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.m6(t,a)
s=new T.hW(t)
s.b=H.a7((t&&C.b).ca(t,3379))
s.c=H.a7(C.b.ca(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.dU(a)
r=new X.fJ()
r.c=new X.b7(!1,!1,!1)
r.sh5(P.dj(null,null,null,P.B))
s.b=r
r=new X.h6(s)
r.f=0
r.r=V.dx()
r.x=V.dx()
r.Q=1
r.ch=1
s.c=r
r=new X.fP(s)
r.r=0
r.x=V.dx()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.i0(s)
r.e=0
r.f=V.dx()
r.r=V.dx()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sf1(H.c([],[[P.cr,P.K]]))
r=s.z
q=document
p=W.a4
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.a6(q,"contextmenu",H.l(s.gfu(),o),!1,p))
r=s.z
n=W.n
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.a6(a,"focus",H.l(s.gfC(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.a6(a,"blur",H.l(s.gfn(),m),!1,n))
r=s.z
l=W.aN
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.a6(q,"keyup",H.l(s.gfG(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.a6(q,"keydown",H.l(s.gfE(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.a6(a,"mousedown",H.l(s.gfK(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a6(a,"mouseup",H.l(s.gfO(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a6(a,"mousemove",H.l(s.gfM(),o),!1,p))
l=s.z
k=W.aZ;(l&&C.a).h(l,W.a6(a,H.E(W.lJ(a)),H.l(s.gfQ(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.a6(q,"mousemove",H.l(s.gfw(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.a6(q,"mouseup",H.l(s.gfA(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.a6(q,"pointerlockchange",H.l(s.gfS(),m),!1,n))
n=s.z
m=W.aA
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.a6(a,"touchstart",H.l(s.gh2(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a6(a,"touchend",H.l(s.gfZ(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a6(a,"touchmove",H.l(s.gh0(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.bn(Date.now(),!1)
u.cy=0
u.cM()
return u},
f_:function f_(){},
ae:function ae(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hq:function hq(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
dO:function dO(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hX:function hX(a){this.a=a}},Z={
mc:function(a,b,c){var u
H.m(c,"$ib",[P.B],"$ab")
u=a.createBuffer()
C.b.ae(a,b,u)
C.b.cW(a,b,new Int16Array(H.cP(c)),35044)
C.b.ae(a,b,null)
return new Z.dV(b,u)},
at:function(a){return new Z.aY(a)},
dV:function dV(a,b){this.a=a
this.b=b},
d_:function d_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iB:function iB(a){this.a=a},
d0:function d0(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
ce:function ce(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a){this.a=a}},D={
aw:function(){var u=new D.bF()
u.sab(null)
u.saJ(null)
u.c=null
u.d=0
return u},
f2:function f2(){},
bF:function bF(){var _=this
_.d=_.c=_.b=_.a=null},
fl:function fl(a){this.a=a},
fm:function fm(a){this.a=a},
G:function G(a){this.a=a
this.b=null},
cf:function cf(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
cg:function cg(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
V:function V(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bo:function bo(){var _=this
_.d=_.c=_.b=_.a=null},
a0:function a0(){},
dh:function dh(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dw:function dw(){},
dF:function dF(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){}},X={d1:function d1(a,b){this.a=a
this.b=b},dg:function dg(a,b){this.a=a
this.b=b},fJ:function fJ(){var _=this
_.d=_.c=_.b=_.a=null},fP:function fP(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},b7:function b7(a,b,c){this.a=a
this.b=b
this.c=c},h6:function h6(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},i0:function i0(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dU:function dU(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lL:function(a,b,c,d,e,f,g){var u,t
u=new X.fw()
t=new V.b1(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.kz
if(t==null){t=V.m5(0,0,1,1)
$.kz=t}u.r=t
return u},
d2:function d2(){},
fw:function fw(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dv:function dv(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dJ:function dJ(){},
l6:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=V.m8("Test 003",!0)
t=W.kg(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.u(u.a,t)
s=[P.e]
u.cS(H.c(["A test of the Material Light Shader with a solid color directional lighting."],s))
u.cS(H.c(["\xab[Back to Tests|../]"],s))
r=new E.ae()
r.a=""
r.b=!0
s=E.ae
r.seT(0,O.jE(s))
r.y.bp(r.giO(),r.giR())
r.z=null
r.Q=null
r.ch=null
r.cx=null
r.cy=null
r.db=null
r.dx=null
r.dy=null
r.fr=null
r.fx=null
r.scd(0,null)
r.saO(null)
r.scd(0,F.n_(30,1,15,0.5))
q=new U.dC()
q.a=0
q.b=0
q.c=0
q.d=0
q.e=0
q.f=0
q.r=0
q.sdV(0)
q.sdF(0,0)
q.sdK(0)
p=q.d
if(!(Math.abs(p-0.1)<$.O().a)){q.d=0.1
p=new D.V("deltaYaw",p,0.1,q,[P.y])
p.b=!0
q.ax(p)}p=q.e
if(!(Math.abs(p-0.21)<$.O().a)){q.e=0.21
p=new D.V("deltaPitch",p,0.21,q,[P.y])
p.b=!0
q.ax(p)}p=q.f
if(!(Math.abs(p-0.32)<$.O().a)){q.f=0.32
p=new D.V("deltaRoll",p,0.32,q,[P.y])
p.b=!0
q.ax(p)}r.saO(q)
o=new O.dm()
o.seQ(O.jE(V.a9))
o.e.bp(o.gfj(),o.gfl())
q=new O.aO(o,"emission")
q.c=C.c
q.f=new V.Y(0,0,0)
o.f=q
q=new O.aO(o,"ambient")
q.c=C.c
q.f=new V.Y(0,0,0)
o.r=q
q=new O.aO(o,"diffuse")
q.c=C.c
q.f=new V.Y(0,0,0)
o.x=q
q=new O.aO(o,"invDiffuse")
q.c=C.c
q.f=new V.Y(0,0,0)
o.y=q
q=new O.h_(o,"specular")
q.c=C.c
q.f=new V.Y(0,0,0)
q.ch=100
o.z=q
q=new O.fX(o,"bump")
q.c=C.c
o.Q=q
o.ch=null
q=new O.aO(o,"reflect")
q.c=C.c
q.f=new V.Y(0,0,0)
o.cx=q
q=new O.fZ(o,"refract")
q.c=C.c
q.f=new V.Y(0,0,0)
q.ch=1
o.cy=q
q=new O.fW(o,"alpha")
q.c=C.c
q.f=1
o.db=q
q=new D.dh()
q.cg(D.a0)
q.seZ(H.c([],[D.bo]))
q.sh4(H.c([],[D.dw]))
q.sht(H.c([],[D.dF]))
q.shy(H.c([],[D.dL]))
q.shz(H.c([],[D.dM]))
q.shA(H.c([],[D.dN]))
q.Q=null
q.ch=null
q.cc(q.gfh(),q.gfV(),q.gfX())
o.dx=q
p=q.Q
if(p==null){p=D.aw()
q.Q=p
q=p}else q=p
q.h(0,o.ghf())
q=o.dx
p=q.ch
if(p==null){p=D.aw()
q.ch=p
q=p}else q=p
q.h(0,o.geG())
o.dy=null
q=o.dx
n=V.kN()
p=U.ki(V.kq(V.kw(),n,new V.R(1,1,-3)))
m=new V.Y(1,1,1)
l=new D.bo()
l.c=new V.Y(1,1,1)
l.a=V.kO()
k=l.b
l.b=p
p.gC().h(0,l.gev())
p=new D.V("mover",k,l.b,l,[U.bJ])
p.b=!0
l.ai(p)
if(!l.c.t(0,m)){k=l.c
l.c=m
p=new D.V("color",k,m,l,[V.Y])
p.b=!0
l.ai(p)}q.h(0,l)
q=o.r
q.saf(0,new V.Y(0,0,1))
q=o.x
q.saf(0,new V.Y(0,1,0))
q=o.z
q.saf(0,new V.Y(1,0,0))
q=o.z
if(q.c===C.c){q.c=C.h
q.bs()
q.bH(100)
p=q.a
p.a=null
p.a0(null)}q.bH(10)
j=new M.d8()
j.sex(0,O.jE(s))
j.d.bp(j.gfp(),j.gfs())
j.e=null
j.f=null
j.r=null
j.x=null
i=X.lL(!0,!0,!1,null,2000,null,0)
h=new X.dv()
h.c=1.0471975511965976
h.d=0.1
h.e=2000
h.saO(null)
s=h.c
if(!(Math.abs(s-1.0471975511965976)<$.O().a)){h.c=1.0471975511965976
s=new D.V("fov",s,1.0471975511965976,h,[P.y])
s.b=!0
h.au(s)}s=h.d
if(!(Math.abs(s-0.1)<$.O().a)){h.d=0.1
s=new D.V("near",s,0.1,h,[P.y])
s.b=!0
h.au(s)}s=h.e
if(!(Math.abs(s-2000)<$.O().a)){h.e=2000
s=new D.V("far",s,2000,h,[P.y])
s.b=!0
h.au(s)}s=j.a
if(s!==h){if(s!=null)s.gC().P(0,j.gaa())
k=j.a
j.a=h
h.gC().h(0,j.gaa())
s=new D.V("camera",k,j.a,j,[X.d2])
s.b=!0
j.aj(s)}s=j.b
if(s!==i){if(s!=null)s.gC().P(0,j.gaa())
k=j.b
j.b=i
i.gC().h(0,j.gaa())
s=new D.V("target",k,j.b,j,[X.dJ])
s.b=!0
j.aj(s)}j.sdM(null)
j.sdM(o)
j.d.h(0,r)
j.a.saO(U.ki(V.b6(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
g=C.x.e1(document,"testCanvas")
if(g==null)H.r(P.t("Failed to find an element with the identifier, testCanvas."))
f=E.ma(g,!0,!0,!0,!1)
s=f.d
if(s!==j){if(s!=null)s.gC().P(0,f.gci())
f.d=j
j.gC().h(0,f.gci())
f.cj()}s=f.z
if(s==null){s=D.aw()
f.z=s}q={func:1,ret:-1,args:[D.G]}
p=H.l(new X.ju(u,o),q)
if(s.b==null)s.saJ(H.c([],[q]))
s=s.b;(s&&C.a).h(s,p)
V.mW(f)},
ju:function ju(a,b){this.a=a
this.b=b}},V={
k6:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.e6(a-b,u)
return(a<0?a+u:a)+b},
N:function(a,b,c){if(a==null)return C.j.ap("null",c)
return C.j.ap(C.d.dO(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
bX:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.y],"$ab")
u=H.c([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.N(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.i(u,p)
C.a.U(u,p,C.j.ap(u[p],s))}return u},
jK:function(){var u=$.kr
if(u==null){u=V.b6(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kr=u}return u},
b6:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kq:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.D(0,Math.sqrt(c.L(c)))
t=b.an(u)
s=t.D(0,Math.sqrt(t.L(t)))
r=u.an(s)
q=new V.R(a.a,a.b,a.c)
p=s.aH(0).L(q)
o=r.aH(0).L(q)
n=u.aH(0).L(q)
return V.b6(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
dx:function(){var u=$.kv
if(u==null){u=new V.aa(0,0)
$.kv=u}return u},
kw:function(){var u=$.cm
if(u==null){u=new V.a5(0,0,0)
$.cm=u}return u},
m5:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dB(a,b,c,d)},
cC:function(){var u=$.kM
if(u==null){u=new V.R(0,0,0)
$.kM=u}return u},
kN:function(){var u=$.kL
if(u==null){u=new V.R(0,1,0)
$.kL=u}return u},
kO:function(){var u=$.io
if(u==null){u=new V.R(0,0,1)
$.io=u}return u},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fj:function fj(a){this.a=a},
dp:function dp(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a9:function a9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aa:function aa(a,b){this.a=a
this.b=b},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
dB:function dB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aC:function aC(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
T:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.t("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.j.av(a,0)
t=C.j.av(b,0)
s=new V.ho()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.hy()
u.eo(a)
return u},
i_:function(){var u,t
u=new V.hZ()
t=P.e
u.shu(new H.aM([t,V.cq]))
u.shw(new H.aM([t,V.ct]))
u.c=null
return u},
b0:function b0(){},
aj:function aj(){},
dl:function dl(){},
af:function af(){this.a=null},
ho:function ho(){this.b=this.a=null},
hy:function hy(){this.a=null},
cq:function cq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dP:function dP(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(a,b){this.a=a
this.b=b
this.c=null},
hZ:function hZ(){this.c=this.b=this.a=null},
cu:function cu(a){this.b=a
this.a=this.c=null},
mW:function(a){P.mb(C.J,new V.jx(a))},
m8:function(a,b){var u=new V.hC()
u.eq(a,!0)
return u},
bl:function bl(){},
jx:function jx(a){this.a=a},
f9:function f9(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fx:function fx(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fy:function fy(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hl:function hl(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hC:function hC(){this.b=this.a=null},
hE:function hE(a){this.a=a},
hD:function hD(a){this.a=a},
hF:function hF(a){this.a=a}},U={
ki:function(a){var u=new U.d3()
u.a=a
return u},
d3:function d3(){this.b=this.a=null},
bJ:function bJ(){},
dC:function dC(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d8:function d8(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lU:function(a,b){var u,t
u=a.a6
t=new A.fV(b,u)
t.ep(b,u)
t.em(a,b)
return t},
jP:function(a,b,c,d,e){var u=new A.i8(a,b,c,e)
u.f=d
u.shB(P.lS(d,0,!1,P.B))
return u},
cX:function cX(a,b,c){this.a=a
this.b=b
this.c=c},
eV:function eV(a){this.a=a},
fV:function fV(a,b){var _=this
_.b5=_.d3=_.b4=_.a6=_.ag=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dk=_.bV=_.dj=_.bi=_.di=_.dh=_.bh=_.bg=_.dg=_.df=_.bf=_.be=_.bd=_.de=_.dd=_.bc=_.dc=_.da=_.bb=_.d9=_.d8=_.ba=_.b9=_.d7=_.d6=_.b8=_.b7=_.d5=_.d4=_.b6=null
_.c_=_.dq=_.bZ=_.dn=_.bY=_.dm=_.bX=_.dl=_.bW=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fY:function fY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ag=b3
_.a6=b4
_.b4=b5},
cv:function cv(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cx:function cx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cA:function cA(a,b,c,d,e,f,g,h,i,j){var _=this
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
cy:function cy(a,b,c,d,e,f,g,h,i,j){var _=this
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
cB:function cB(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cp:function cp(){},
bE:function bE(a,b){this.a=a
this.b=b},
dQ:function dQ(){},
ie:function ie(a){this.a=a},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ib:function ib(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
id:function id(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i8:function i8(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i9:function i9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ic:function ic(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ig:function ig(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
n_:function(a,b,c,d){return F.mz(c,a,d,b,new F.jy())},
mz:function(a,b,c,d,e){var u=F.mY(a,b,new F.jm(H.l(e,{func:1,ret:V.a5,args:[P.y]}),d,b,c),null)
if(u==null)return
u.aB()
u.iN(new F.iu(),new F.hf())
return u},
mY:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,{func:1,ret:-1,args:[F.as,P.y,P.y]})
if(a<1)return
if(b<1)return
u=new F.dE()
t=new F.ip(u)
t.b=!1
s=[F.as]
t.shC(H.c([],s))
u.a=t
t=new F.hB(u)
t.sbE(H.c([],[F.bK]))
u.b=t
t=new F.hA(u)
t.sfb(H.c([],[F.bs]))
u.c=t
t=new F.hz(u)
t.sf2(H.c([],[F.a2]))
u.d=t
u.e=null
r=H.c([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
t.toString
o=F.jQ(null,null,new V.b1(s,0,0,1),null,null,new V.aa(p,1),null,null,0)
t.h(0,o)
c.$3(o,p,0)
C.a.h(r,o.d_(d))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
k.toString
o=F.jQ(null,null,new V.b1(j,i,h,1),null,null,new V.aa(p,m),null,null,0)
k.h(0,o)
c.$3(o,p,n)
C.a.h(r,o.d_(d))}}u.d.i_(a+1,b+1,r)
return u},
fn:function(a,b,c){var u,t
u=new F.a2()
t=a.a
if(t==null)H.r(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.t("May not create a face with vertices attached to different shapes."))
u.hl(a)
u.hm(b)
u.hn(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a_()
return u},
jQ:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.as()
t=new F.ix(u)
t.sbE(H.c([],[F.bK]))
u.b=t
t=new F.it(u)
s=[F.bs]
t.sfc(H.c([],s))
t.sfd(H.c([],s))
u.c=t
t=new F.iq(u)
s=[F.a2]
t.sf3(H.c([],s))
t.sf4(H.c([],s))
t.sf5(H.c([],s))
u.d=t
h=$.ln()
u.e=0
t=$.bg()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bf().a)!==0?e:null
u.x=(s&$.be().a)!==0?b:null
u.y=(s&$.bh().a)!==0?f:null
u.z=(s&$.bi().a)!==0?g:null
u.Q=(s&$.lo().a)!==0?c:null
u.ch=(s&$.c1().a)!==0?i:0
u.cx=(s&$.bd().a)!==0?a:null
return u},
jy:function jy(){},
jm:function jm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fo:function fo(){},
hG:function hG(){},
bs:function bs(){},
fL:function fL(){},
i7:function i7(){},
bK:function bK(){},
dE:function dE(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hz:function hz(a){this.a=a
this.b=null},
hA:function hA(a){this.a=a
this.b=null},
hB:function hB(a){this.a=a
this.b=null},
as:function as(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iz:function iz(a){this.a=a},
iy:function iy(a){this.a=a},
ip:function ip(a){this.a=a
this.c=this.b=null},
iq:function iq(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ir:function ir(a,b){this.a=a
this.b=b},
is:function is(a,b){this.a=a
this.b=b},
it:function it(a){this.a=a
this.c=this.b=null},
iv:function iv(){},
iu:function iu(){},
iw:function iw(){},
hf:function hf(){},
ix:function ix(a){this.a=a
this.b=null}},T={dK:function dK(){},hW:function hW(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jI.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gI:function(a){return H.cn(a)},
i:function(a){return"Instance of '"+H.bM(a)+"'"}}
J.fF.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iM:1}
J.de.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0},
$iI:1}
J.df.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hk.prototype={}
J.bu.prototype={}
J.b4.prototype={
i:function(a){var u=a[$.lc()]
if(u==null)return this.eh(a)
return"JavaScript function for "+H.k(J.aD(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibq:1}
J.ax.prototype={
h:function(a,b){H.F(b,H.x(a,0))
if(!!a.fixed$length)H.r(P.am("add"))
a.push(b)},
j4:function(a,b){var u
if(!!a.fixed$length)H.r(P.am("removeAt"))
u=a.length
if(b>=u)throw H.f(P.dA(b,null,null))
return a.splice(b,1)[0]},
P:function(a,b){var u
if(!!a.fixed$length)H.r(P.am("remove"))
for(u=0;u<a.length;++u)if(J.Z(a[u],b)){a.splice(u,1)
return!0}return!1},
K:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.bm(a))}},
m:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.U(u,t,H.k(a[t]))
return u.join(b)},
iI:function(a){return this.m(a,"")},
iC:function(a,b,c){var u,t,s
H.l(b,{func:1,ret:P.M,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.f(P.bm(a))}throw H.f(H.fD())},
iB:function(a,b){return this.iC(a,b,null)},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
ee:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.ar(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.ar(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.x(a,0)])
return H.c(a.slice(b,c),[H.x(a,0)])},
giA:function(a){if(a.length>0)return a[0]
throw H.f(H.fD())},
gbj:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.fD())},
eb:function(a,b,c,d,e){var u,t,s
u=H.x(a,0)
H.m(d,"$ih",[u],"$ah")
if(!!a.immutable$list)H.r(P.am("setRange"))
P.jM(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.m(d,"$ib",[u],"$ab")
u=J.jo(d)
if(e+t>u.gl(d))throw H.f(H.lN())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
aU:function(a,b,c,d){return this.eb(a,b,c,d,0)},
cT:function(a,b){var u,t
H.l(b,{func:1,ret:P.M,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.f(P.bm(a))}return!1},
T:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Z(a[u],b))return!0
return!1},
i:function(a){return P.jG(a,"[","]")},
gO:function(a){return new J.ap(a,a.length,0,[H.x(a,0)])},
gI:function(a){return H.cn(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.am("set length"))
if(b<0)throw H.f(P.ar(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.f(H.bW(a,b))
return a[b]},
U:function(a,b,c){H.F(c,H.x(a,0))
if(!!a.immutable$list)H.r(P.am("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bW(a,b))
a[b]=c},
q:function(a,b){var u,t
u=[H.x(a,0)]
H.m(b,"$ib",u,"$ab")
t=C.i.q(a.length,b.gl(b))
u=H.c([],u)
this.sl(u,t)
this.aU(u,0,a.length,a)
this.aU(u,a.length,t,b)
return u},
$ih:1,
$ib:1}
J.jH.prototype={}
J.ap.prototype={
gF:function(a){return this.d},
v:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.f(H.C(u))
s=this.c
if(s>=t){this.scB(null)
return!1}this.scB(u[s]);++this.c
return!0},
scB:function(a){this.d=H.F(a,H.x(this,0))},
$iaL:1}
J.br.prototype={
dr:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.am(""+a+".floor()"))},
a8:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.am(""+a+".round()"))},
dO:function(a,b){var u,t
if(b>20)throw H.f(P.ar(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
q:function(a,b){return a+b},
w:function(a,b){if(typeof b!=="number")throw H.f(H.by(b))
return a-b},
M:function(a,b){if(typeof b!=="number")throw H.f(H.by(b))
return a*b},
e6:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
el:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cO(a,b)},
X:function(a,b){return(a|0)===a?a/b|0:this.cO(a,b)},
cO:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.am("Result of truncating division is "+H.k(u)+": "+H.k(a)+" ~/ "+b))},
b_:function(a,b){var u
if(a>0)u=this.hs(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hs:function(a,b){return b>31?0:a>>>b},
$iy:1,
$ia1:1}
J.dd.prototype={$iB:1}
J.fG.prototype={}
J.b3.prototype={
bS:function(a,b){if(b<0)throw H.f(H.bW(a,b))
if(b>=a.length)H.r(H.bW(a,b))
return a.charCodeAt(b)},
av:function(a,b){if(b>=a.length)throw H.f(H.bW(a,b))
return a.charCodeAt(b)},
q:function(a,b){if(typeof b!=="string")throw H.f(P.jC(b,null,null))
return a+b},
ed:function(a,b,c){var u
if(c>a.length)throw H.f(P.ar(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
bq:function(a,b){return this.ed(a,b,0)},
aW:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.dA(b,null,null))
if(b>c)throw H.f(P.dA(b,null,null))
if(c>a.length)throw H.f(P.dA(c,null,null))
return a.substring(b,c)},
aV:function(a,b){return this.aW(a,b,null)},
ji:function(a){return a.toLowerCase()},
M:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.F)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
iV:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.M(c,u)+a},
ap:function(a,b){return this.iV(a,b," ")},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ikt:1,
$ie:1}
H.q.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.j.bS(this.a,b)},
$adT:function(){return[P.B]},
$aw:function(){return[P.B]},
$ah:function(){return[P.B]},
$ab:function(){return[P.B]}}
H.fg.prototype={}
H.bI.prototype={
gO:function(a){return new H.ch(this,this.gl(this),0,[H.ai(this,"bI",0)])},
bm:function(a,b){return this.eg(0,H.l(b,{func:1,ret:P.M,args:[H.ai(this,"bI",0)]}))}}
H.ch.prototype={
gF:function(a){return this.d},
v:function(){var u,t,s,r
u=this.a
t=J.jo(u)
s=t.gl(u)
if(this.b!==s)throw H.f(P.bm(u))
r=this.c
if(r>=s){this.saI(null)
return!1}this.saI(t.B(u,r));++this.c
return!0},
saI:function(a){this.d=H.F(a,H.x(this,0))},
$iaL:1}
H.fS.prototype={
gO:function(a){return new H.fT(J.c2(this.a),this.b,this.$ti)},
gl:function(a){return J.bB(this.a)},
B:function(a,b){return this.b.$1(J.jA(this.a,b))},
$ah:function(a,b){return[b]}}
H.fT.prototype={
v:function(){var u=this.b
if(u.v()){this.saI(this.c.$1(u.gF(u)))
return!0}this.saI(null)
return!1},
gF:function(a){return this.a},
saI:function(a){this.a=H.F(a,H.x(this,1))},
$aaL:function(a,b){return[b]}}
H.fU.prototype={
gl:function(a){return J.bB(this.a)},
B:function(a,b){return this.b.$1(J.jA(this.a,b))},
$abI:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.cD.prototype={
gO:function(a){return new H.iC(J.c2(this.a),this.b,this.$ti)}}
H.iC.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gF(u)))return!0
return!1},
gF:function(a){var u=this.a
return u.gF(u)}}
H.bG.prototype={}
H.dT.prototype={}
H.dS.prototype={}
H.hp.prototype={}
H.i4.prototype={
a3:function(a){var u,t,s
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
H.hg.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fI.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.k(this.a)+")"}}
H.ii.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jz.prototype={
$1:function(a){if(!!J.X(a).$ibp)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:12}
H.et.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iah:1}
H.c6.prototype={
i:function(a){return"Closure '"+H.bM(this).trim()+"'"},
$ibq:1,
gjm:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hT.prototype={}
H.hK.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c0(u)+"'"}}
H.c4.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c4))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gI:function(a){var u,t
u=this.c
if(u==null)t=H.cn(this.a)
else t=typeof u!=="object"?J.cV(u):H.cn(u)
return(t^H.cn(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bM(u)+"'")}}
H.i6.prototype={
i:function(a){return this.a}}
H.f1.prototype={
i:function(a){return this.a}}
H.hw.prototype={
i:function(a){return"RuntimeError: "+H.k(this.a)}}
H.aM.prototype={
gl:function(a){return this.a},
gZ:function(a){return new H.di(this,[H.x(this,0)])},
cZ:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.cw(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.cw(t,b)}else return this.iG(b)},
iG:function(a){var u=this.d
if(u==null)return!1
return this.c0(this.bx(u,J.cV(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.aY(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.aY(r,b)
s=t==null?null:t.b
return s}else return this.iH(b)},
iH:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bx(u,J.cV(a)&0x3ffffff)
s=this.c0(t,a)
if(s<0)return
return t[s].b},
U:function(a,b,c){var u,t,s,r,q,p
H.F(b,H.x(this,0))
H.F(c,H.x(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bC()
this.b=u}this.cn(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bC()
this.c=t}this.cn(t,b,c)}else{s=this.d
if(s==null){s=this.bC()
this.d=s}r=J.cV(b)&0x3ffffff
q=this.bx(s,r)
if(q==null)this.bI(s,r,[this.bD(b,c)])
else{p=this.c0(q,b)
if(p>=0)q[p].b=c
else q.push(this.bD(b,c))}}},
K:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.f(P.bm(this))
u=u.c}},
cn:function(a,b,c){var u
H.F(b,H.x(this,0))
H.F(c,H.x(this,1))
u=this.aY(a,b)
if(u==null)this.bI(a,b,this.bD(b,c))
else u.b=c},
ff:function(){this.r=this.r+1&67108863},
bD:function(a,b){var u,t
u=new H.fM(H.F(a,H.x(this,0)),H.F(b,H.x(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.ff()
return u},
c0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Z(a[t].a,b))return t
return-1},
i:function(a){return P.kp(this)},
aY:function(a,b){return a[b]},
bx:function(a,b){return a[b]},
bI:function(a,b,c){a[b]=c},
eY:function(a,b){delete a[b]},
cw:function(a,b){return this.aY(a,b)!=null},
bC:function(){var u=Object.create(null)
this.bI(u,"<non-identifier-key>",u)
this.eY(u,"<non-identifier-key>")
return u}}
H.fM.prototype={}
H.di.prototype={
gl:function(a){return this.a.a},
gO:function(a){var u,t
u=this.a
t=new H.fN(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fN.prototype={
gF:function(a){return this.d},
v:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.bm(u))
else{u=this.c
if(u==null){this.scm(null)
return!1}else{this.scm(u.a)
this.c=this.c.c
return!0}}},
scm:function(a){this.d=H.F(a,H.x(this,0))},
$iaL:1}
H.jq.prototype={
$1:function(a){return this.a(a)},
$S:12}
H.jr.prototype={
$2:function(a,b){return this.a(a,b)},
$S:30}
H.js.prototype={
$1:function(a){return this.a(H.E(a))},
$S:31}
H.fH.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikt:1}
H.ck.prototype={}
H.dq.prototype={
gl:function(a){return a.length},
$iD:1,
$aD:function(){}}
H.cj.prototype={
j:function(a,b){H.bw(b,a,a.length)
return a[b]},
$abG:function(){return[P.y]},
$aw:function(){return[P.y]},
$ih:1,
$ah:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.dr.prototype={
$abG:function(){return[P.B]},
$aw:function(){return[P.B]},
$ih:1,
$ah:function(){return[P.B]},
$ib:1,
$ab:function(){return[P.B]}}
H.h7.prototype={
j:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.h8.prototype={
j:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.h9.prototype={
j:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.ha.prototype={
j:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.hb.prototype={
j:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.ds.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.hc.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.cH.prototype={}
H.cI.prototype={}
H.cJ.prototype={}
H.cK.prototype={}
P.iE.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:16}
P.iD.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:24}
P.iF.prototype={
$0:function(){this.a.$0()},
$S:1}
P.iG.prototype={
$0:function(){this.a.$0()},
$S:1}
P.ez.prototype={
eI:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bV(new P.je(this,b),0),a)
else throw H.f(P.am("`setTimeout()` not found."))},
eJ:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bV(new P.jd(this,a,Date.now(),b),0),a)
else throw H.f(P.am("Periodic timer."))},
$iaV:1}
P.je.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:2}
P.jd.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.i.el(r,s)}u.c=t
this.d.$1(u)},
$S:1}
P.b_.prototype={
iL:function(a){if(this.c!==6)return!0
return this.b.b.c8(H.l(this.d,{func:1,ret:P.M,args:[P.K]}),a.a,P.M,P.K)},
iF:function(a){var u,t,s,r
u=this.e
t=P.K
s={futureOr:1,type:H.x(this,1)}
r=this.b.b
if(H.eQ(u,{func:1,args:[P.K,P.ah]}))return H.k_(r.jb(u,a.a,a.b,null,t,P.ah),s)
else return H.k_(r.c8(H.l(u,{func:1,args:[P.K]}),a.a,null,t),s)}}
P.au.prototype={
dN:function(a,b,c){var u,t,s,r
u=H.x(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.U
if(t!==C.l){t.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.mr(b,t)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.au(0,$.U,[c])
r=b==null?1:3
this.co(new P.b_(s,r,a,b,[u,c]))
return s},
jf:function(a,b){return this.dN(a,null,b)},
co:function(a){var u,t
u=this.a
if(u<=1){a.a=H.o(this.c,"$ib_")
this.c=a}else{if(u===2){t=H.o(this.c,"$iau")
u=t.a
if(u<4){t.co(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.jk(null,null,u,H.l(new P.iO(this,a),{func:1,ret:-1}))}},
cK:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.o(this.c,"$ib_")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.o(this.c,"$iau")
t=p.a
if(t<4){p.cK(a)
return}this.a=t
this.c=p.c}u.a=this.aZ(a)
t=this.b
t.toString
P.jk(null,null,t,H.l(new P.iS(u,this),{func:1,ret:-1}))}},
bG:function(){var u=H.o(this.c,"$ib_")
this.c=null
return this.aZ(u)},
aZ:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cs:function(a){var u,t,s
u=H.x(this,0)
H.k_(a,{futureOr:1,type:u})
t=this.$ti
if(H.eP(a,"$icd",t,"$acd"))if(H.eP(a,"$iau",t,null))P.kP(a,this)
else P.mh(a,this)
else{s=this.bG()
H.F(a,u)
this.a=4
this.c=a
P.cG(this,s)}},
ct:function(a,b){var u
H.o(b,"$iah")
u=this.bG()
this.a=8
this.c=new P.a8(a,b)
P.cG(this,u)},
$icd:1}
P.iO.prototype={
$0:function(){P.cG(this.a,this.b)},
$S:1}
P.iS.prototype={
$0:function(){P.cG(this.b,this.a.a)},
$S:1}
P.iP.prototype={
$1:function(a){var u=this.a
u.a=0
u.cs(a)},
$S:16}
P.iQ.prototype={
$2:function(a,b){H.o(b,"$iah")
this.a.ct(a,b)},
$1:function(a){return this.$2(a,null)},
$S:41}
P.iR.prototype={
$0:function(){this.a.ct(this.b,this.c)},
$S:1}
P.iV.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.dL(H.l(r.d,{func:1}),null)}catch(q){t=H.ao(q)
s=H.bZ(q)
if(this.d){r=H.o(this.a.a.c,"$ia8").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.o(this.a.a.c,"$ia8")
else p.b=new P.a8(t,s)
p.a=!0
return}if(!!J.X(u).$icd){if(u instanceof P.au&&u.a>=4){if(u.a===8){r=this.b
r.b=H.o(u.c,"$ia8")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.jf(new P.iW(o),null)
r.a=!1}},
$S:2}
P.iW.prototype={
$1:function(a){return this.a},
$S:33}
P.iU.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.x(s,0)
q=H.F(this.c,r)
p=H.x(s,1)
this.a.b=s.b.b.c8(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ao(o)
t=H.bZ(o)
s=this.a
s.b=new P.a8(u,t)
s.a=!0}},
$S:2}
P.iT.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.o(this.a.a.c,"$ia8")
r=this.c
if(r.iL(u)&&r.e!=null){q=this.b
q.b=r.iF(u)
q.a=!1}}catch(p){t=H.ao(p)
s=H.bZ(p)
r=H.o(this.a.a.c,"$ia8")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a8(t,s)
n.a=!0}},
$S:2}
P.dW.prototype={}
P.hN.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.au(0,$.U,[P.B])
u.a=0
s=H.x(this,0)
r=H.l(new P.hP(u,this),{func:1,ret:-1,args:[s]})
H.l(new P.hQ(u,t),{func:1,ret:-1})
W.a6(this.a,this.b,r,!1,s)
return t}}
P.hP.prototype={
$1:function(a){H.F(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.x(this.b,0)]}}}
P.hQ.prototype={
$0:function(){this.b.cs(this.a.a)},
$S:1}
P.cr.prototype={}
P.hO.prototype={}
P.aV.prototype={}
P.a8.prototype={
i:function(a){return H.k(this.a)},
$ibp:1}
P.jh.prototype={$inx:1}
P.jj.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.du()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.f(u)
s=H.f(u)
s.stack=t.i(0)
throw s},
$S:1}
P.j0.prototype={
jc:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
try{if(C.l===$.U){a.$0()
return}P.kV(null,null,this,a,-1)}catch(s){u=H.ao(s)
t=H.bZ(s)
P.ji(null,null,this,u,H.o(t,"$iah"))}},
jd:function(a,b,c){var u,t,s
H.l(a,{func:1,ret:-1,args:[c]})
H.F(b,c)
try{if(C.l===$.U){a.$1(b)
return}P.kW(null,null,this,a,b,-1,c)}catch(s){u=H.ao(s)
t=H.bZ(s)
P.ji(null,null,this,u,H.o(t,"$iah"))}},
i5:function(a,b){return new P.j2(this,H.l(a,{func:1,ret:b}),b)},
bN:function(a){return new P.j1(this,H.l(a,{func:1,ret:-1}))},
cV:function(a,b){return new P.j3(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
dL:function(a,b){H.l(a,{func:1,ret:b})
if($.U===C.l)return a.$0()
return P.kV(null,null,this,a,b)},
c8:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.F(b,d)
if($.U===C.l)return a.$1(b)
return P.kW(null,null,this,a,b,c,d)},
jb:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.F(b,e)
H.F(c,f)
if($.U===C.l)return a.$2(b,c)
return P.ms(null,null,this,a,b,c,d,e,f)}}
P.j2.prototype={
$0:function(){return this.a.dL(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.j1.prototype={
$0:function(){return this.a.jc(this.b)},
$S:2}
P.j3.prototype={
$1:function(a){var u=this.c
return this.a.jd(this.b,H.F(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iZ.prototype={
gO:function(a){var u=new P.ea(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
T:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.o(u[b],"$ibS")!=null}else{t=this.eU(b)
return t}},
eU:function(a){var u=this.d
if(u==null)return!1
return this.bw(this.cC(u,a),a)>=0},
h:function(a,b){var u,t
H.F(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.jS()
this.b=u}return this.cp(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.jS()
this.c=t}return this.cp(t,b)}else return this.eL(0,b)},
eL:function(a,b){var u,t,s
H.F(b,H.x(this,0))
u=this.d
if(u==null){u=P.jS()
this.d=u}t=this.cu(b)
s=u[t]
if(s==null)u[t]=[this.bt(b)]
else{if(this.bw(s,b)>=0)return!1
s.push(this.bt(b))}return!0},
P:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h9(this.c,b)
else return this.h6(0,b)},
h6:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.cC(u,b)
s=this.bw(t,b)
if(s<0)return!1
this.cP(t.splice(s,1)[0])
return!0},
cp:function(a,b){H.F(b,H.x(this,0))
if(H.o(a[b],"$ibS")!=null)return!1
a[b]=this.bt(b)
return!0},
h9:function(a,b){var u
if(a==null)return!1
u=H.o(a[b],"$ibS")
if(u==null)return!1
this.cP(u)
delete a[b]
return!0},
cr:function(){this.r=1073741823&this.r+1},
bt:function(a){var u,t
u=new P.bS(H.F(a,H.x(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.cr()
return u},
cP:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.cr()},
cu:function(a){return J.cV(a)&1073741823},
cC:function(a,b){return a[this.cu(b)]},
bw:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Z(a[t].a,b))return t
return-1}}
P.bS.prototype={}
P.ea.prototype={
gF:function(a){return this.d},
v:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.bm(u))
else{u=this.c
if(u==null){this.scq(null)
return!1}else{this.scq(H.F(u.a,H.x(this,0)))
this.c=this.c.b
return!0}}},
scq:function(a){this.d=H.F(a,H.x(this,0))},
$iaL:1}
P.fO.prototype={$ih:1,$ib:1}
P.w.prototype={
gO:function(a){return new H.ch(a,this.gl(a),0,[H.bY(this,a,"w",0)])},
B:function(a,b){return this.j(a,b)},
jh:function(a,b){var u,t
u=H.c([],[H.bY(this,a,"w",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.U(u,t,this.j(a,t))
return u},
jg:function(a){return this.jh(a,!0)},
q:function(a,b){var u,t
u=[H.bY(this,a,"w",0)]
H.m(b,"$ib",u,"$ab")
t=H.c([],u)
C.a.sl(t,C.i.q(this.gl(a),b.gl(b)))
C.a.aU(t,0,this.gl(a),a)
C.a.aU(t,this.gl(a),t.length,b)
return t},
i:function(a){return P.jG(a,"[","]")}}
P.fQ.prototype={}
P.fR.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.k(a)
u.a=t+": "
u.a+=H.k(b)},
$S:18}
P.a3.prototype={
K:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.bY(this,a,"a3",0),H.bY(this,a,"a3",1)]})
for(u=J.c2(this.gZ(a));u.v();){t=u.gF(u)
b.$2(t,this.j(a,t))}},
gl:function(a){return J.bB(this.gZ(a))},
i:function(a){return P.kp(a)},
$iL:1}
P.j5.prototype={
ac:function(a,b){var u
for(u=J.c2(H.m(b,"$ih",this.$ti,"$ah"));u.v();)this.h(0,u.gF(u))},
i:function(a){return P.jG(this,"{","}")},
B:function(a,b){var u,t,s
if(b<0)H.r(P.ar(b,0,null,"index",null))
for(u=P.mk(this,this.r,H.x(this,0)),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.f(P.S(b,this,"index",null,t))},
$ih:1,
$ikA:1}
P.eb.prototype={}
P.c7.prototype={}
P.c8.prototype={}
P.fi.prototype={
$ac7:function(){return[P.e,[P.b,P.B]]}}
P.fB.prototype={
i:function(a){return this.a}}
P.fA.prototype={
eV:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.i(a,r)
switch(a[r]){case"&":p="&amp;"
break
case'"':p=u?"&quot;":null
break
case"'":p=s?"&#39;":null
break
case"<":p="&lt;"
break
case">":p="&gt;"
break
case"/":p=t?"&#47;":null
break
default:p=null}if(p!=null){if(q==null)q=new P.ba("")
if(r>b)q.a+=C.j.aW(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lz(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$ac8:function(){return[P.e,P.e]}}
P.il.prototype={}
P.im.prototype={
ih:function(a,b,c){var u,t,s
c=P.jM(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jf(t)
if(s.f6(a,b,c)!==c)s.cQ(C.j.bS(a,c-1),0)
return new Uint8Array(t.subarray(0,H.mn(0,s.b,t.length)))},
ig:function(a){return this.ih(a,0,null)},
$ac8:function(){return[P.e,[P.b,P.B]]}}
P.jf.prototype={
cQ:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.i(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.i(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.i(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.i(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.i(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.i(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.i(u,t)
u[t]=128|a&63
return!1}},
f6:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.bS(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.av(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.cQ(r,C.j.av(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.i(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.i(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.i(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.i(u,q)
u[q]=128|r&63}}return s}}
P.M.prototype={}
P.bn.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bn&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.i.b_(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.lG(H.m1(this))
t=P.d4(H.m_(this))
s=P.d4(H.lW(this))
r=P.d4(H.lX(this))
q=P.d4(H.lZ(this))
p=P.d4(H.m0(this))
o=P.lH(H.lY(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.y.prototype={}
P.aI.prototype={
q:function(a,b){return new P.aI(C.i.q(this.a,b.gf_()))},
w:function(a,b){return new P.aI(C.i.w(this.a,b.gf_()))},
t:function(a,b){if(b==null)return!1
return b instanceof P.aI&&this.a===b.a},
gI:function(a){return C.i.gI(this.a)},
i:function(a){var u,t,s,r,q
u=new P.ff()
t=this.a
if(t<0)return"-"+new P.aI(0-t).i(0)
s=u.$1(C.i.X(t,6e7)%60)
r=u.$1(C.i.X(t,1e6)%60)
q=new P.fe().$1(t%1e6)
return""+C.i.X(t,36e8)+":"+H.k(s)+":"+H.k(r)+"."+H.k(q)}}
P.fe.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.ff.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.bp.prototype={}
P.du.prototype={
i:function(a){return"Throw of null."}}
P.aE.prototype={
gbv:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbu:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbv()+t+s
if(!this.a)return r
q=this.gbu()
p=P.fk(this.b)
return r+q+": "+p}}
P.bN.prototype={
gbv:function(){return"RangeError"},
gbu:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.k(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.k(u)
else if(s>u)t=": Not in range "+H.k(u)+".."+H.k(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.k(u)}return t}}
P.fC.prototype={
gbv:function(){return"RangeError"},
gbu:function(){var u,t
u=H.a7(this.b)
if(typeof u!=="number")return u.jo()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.k(t)},
gl:function(a){return this.f}}
P.ij.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ih.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bP.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f3.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fk(u)+"."}}
P.hj.prototype={
i:function(a){return"Out of Memory"},
$ibp:1}
P.dG.prototype={
i:function(a){return"Stack Overflow"},
$ibp:1}
P.f8.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e3.prototype={
i:function(a){return"Exception: "+this.a}}
P.fv.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.aW(s,0,75)+"...":s
return t+"\n"+r}}
P.bq.prototype={}
P.B.prototype={}
P.h.prototype={
bm:function(a,b){var u=H.ai(this,"h",0)
return new H.cD(this,H.l(b,{func:1,ret:P.M,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gO(this)
for(t=0;u.v();)++t
return t},
gas:function(a){var u,t
u=this.gO(this)
if(!u.v())throw H.f(H.fD())
t=u.gF(u)
if(u.v())throw H.f(H.lO())
return t},
B:function(a,b){var u,t,s
if(b<0)H.r(P.ar(b,0,null,"index",null))
for(u=this.gO(this),t=0;u.v();){s=u.gF(u)
if(b===t)return s;++t}throw H.f(P.S(b,this,"index",null,t))},
i:function(a){return P.lM(this,"(",")")}}
P.aL.prototype={}
P.b.prototype={$ih:1}
P.L.prototype={}
P.I.prototype={
gI:function(a){return P.K.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a1.prototype={}
P.K.prototype={constructor:P.K,$iK:1,
t:function(a,b){return this===b},
gI:function(a){return H.cn(this)},
i:function(a){return"Instance of '"+H.bM(this)+"'"},
toString:function(){return this.i(this)}}
P.ah.prototype={}
P.e.prototype={$ikt:1}
P.ba.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.u.prototype={}
W.eT.prototype={
gl:function(a){return a.length}}
W.cW.prototype={
i:function(a){return String(a)},
$icW:1}
W.eU.prototype={
i:function(a){return String(a)}}
W.c3.prototype={$ic3:1}
W.cY.prototype={}
W.bj.prototype={$ibj:1}
W.bD.prototype={
e0:function(a,b,c){var u=this.f7(a,b,P.my(c,null))
return u},
f7:function(a,b,c){return a.getContext(b,c)},
$ibD:1}
W.bk.prototype={
gl:function(a){return a.length}}
W.c9.prototype={$ic9:1}
W.f4.prototype={
gl:function(a){return a.length}}
W.P.prototype={$iP:1}
W.ca.prototype={
gl:function(a){return a.length}}
W.f5.prototype={}
W.aG.prototype={}
W.aH.prototype={}
W.f6.prototype={
gl:function(a){return a.length}}
W.f7.prototype={
gl:function(a){return a.length}}
W.fa.prototype={
gl:function(a){return a.length}}
W.aq.prototype={$iaq:1}
W.cb.prototype={
i0:function(a,b){return a.adoptNode(b)},
e1:function(a,b){return a.getElementById(b)}}
W.fb.prototype={
i:function(a){return String(a)}}
W.d5.prototype={
ik:function(a,b){return a.createHTMLDocument(b)}}
W.d6.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iD:1,
$aD:function(){return[[P.ag,P.a1]]},
$aw:function(){return[[P.ag,P.a1]]},
$ih:1,
$ah:function(){return[[P.ag,P.a1]]},
$ib:1,
$ab:function(){return[[P.ag,P.a1]]},
$az:function(){return[[P.ag,P.a1]]}}
W.d7.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gaF(a))+" x "+H.k(this.gaD(a))},
t:function(a,b){var u
if(b==null)return!1
if(!H.eP(b,"$iag",[P.a1],"$aag"))return!1
u=J.an(b)
return a.left===u.gdv(b)&&a.top===u.gdQ(b)&&this.gaF(a)===u.gaF(b)&&this.gaD(a)===u.gaD(b)},
gI:function(a){return W.kR(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gaF(a)),C.d.gI(this.gaD(a)))},
gaD:function(a){return a.height},
gdv:function(a){return a.left},
gdQ:function(a){return a.top},
gaF:function(a){return a.width},
$iag:1,
$aag:function(){return[P.a1]}}
W.fc.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iD:1,
$aD:function(){return[P.e]},
$aw:function(){return[P.e]},
$ih:1,
$ah:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$az:function(){return[P.e]}}
W.fd.prototype={
gl:function(a){return a.length}}
W.iI.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.i(u,b)
return H.o(u[b],"$iQ")},
h:function(a,b){J.kb(this.a,b)
return b},
gO:function(a){var u=this.jg(this)
return new J.ap(u,u.length,0,[H.x(u,0)])},
$aw:function(){return[W.Q]},
$ah:function(){return[W.Q]},
$ab:function(){return[W.Q]}}
W.Q.prototype={
gi4:function(a){return new W.iK(a)},
gcX:function(a){return new W.iI(a,a.children)},
i:function(a){return a.localName},
a2:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kl
if(u==null){u=H.c([],[W.ak])
t=new W.dt(u)
C.a.h(u,W.kQ(null))
C.a.h(u,W.kS())
$.kl=t
d=t}else d=u
u=$.kk
if(u==null){u=new W.eE(d)
$.kk=u
c=u}else{u.a=d
c=u}}if($.b2==null){u=document
t=u.implementation
t=(t&&C.I).ik(t,"")
$.b2=t
$.jF=t.createRange()
t=$.b2
t.toString
t=t.createElement("base")
H.o(t,"$ic3")
t.href=u.baseURI
u=$.b2.head;(u&&C.K).u(u,t)}u=$.b2
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.o(t,"$ibj")}u=$.b2
if(!!this.$ibj)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b2.body;(u&&C.n).u(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.T(C.V,a.tagName)){u=$.jF;(u&&C.C).e8(u,s)
u=$.jF
r=(u&&C.C).ii(u,b)}else{s.innerHTML=b
r=$.b2.createDocumentFragment()
for(u=J.an(r);t=s.firstChild,t!=null;)u.u(r,t)}u=$.b2.body
if(s==null?u!=null:s!==u)J.kc(s)
c.cb(r)
C.x.i0(document,r)
return r},
ij:function(a,b,c){return this.a2(a,b,c,null)},
ea:function(a,b,c,d){a.textContent=null
this.u(a,this.a2(a,b,c,d))},
e9:function(a,b){return this.ea(a,b,null,null)},
aG:function(a,b){return a.getAttribute(b)},
h7:function(a,b){return a.removeAttribute(b)},
$iQ:1,
gje:function(a){return a.tagName}}
W.fh.prototype={
$1:function(a){return!!J.X(H.o(a,"$iA")).$iQ},
$S:23}
W.n.prototype={$in:1}
W.d.prototype={
hZ:function(a,b,c,d){H.l(c,{func:1,args:[W.n]})
if(c!=null)this.eM(a,b,c,!1)},
eM:function(a,b,c,d){return a.addEventListener(b,H.bV(H.l(c,{func:1,args:[W.n]}),1),!1)},
$id:1}
W.aJ.prototype={$iaJ:1}
W.fp.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aJ]},
$aw:function(){return[W.aJ]},
$ih:1,
$ah:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$az:function(){return[W.aJ]}}
W.fq.prototype={
gl:function(a){return a.length}}
W.fu.prototype={
gl:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.db.prototype={}
W.fz.prototype={
gl:function(a){return a.length}}
W.bH.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.A]},
$aw:function(){return[W.A]},
$ih:1,
$ah:function(){return[W.A]},
$ib:1,
$ab:function(){return[W.A]},
$ibH:1,
$az:function(){return[W.A]}}
W.dc.prototype={}
W.aN.prototype={$iaN:1}
W.dk.prototype={
i:function(a){return String(a)},
$idk:1}
W.h0.prototype={
gl:function(a){return a.length}}
W.h1.prototype={
j:function(a,b){return P.bc(a.get(H.E(b)))},
K:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bc(t.value[1]))}},
gZ:function(a){var u=H.c([],[P.e])
this.K(a,new W.h2(u))
return u},
gl:function(a){return a.size},
$aa3:function(){return[P.e,null]},
$iL:1,
$aL:function(){return[P.e,null]}}
W.h2.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.h3.prototype={
j:function(a,b){return P.bc(a.get(H.E(b)))},
K:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bc(t.value[1]))}},
gZ:function(a){var u=H.c([],[P.e])
this.K(a,new W.h4(u))
return u},
gl:function(a){return a.size},
$aa3:function(){return[P.e,null]},
$iL:1,
$aL:function(){return[P.e,null]}}
W.h4.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.aP.prototype={$iaP:1}
W.h5.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aP]},
$aw:function(){return[W.aP]},
$ih:1,
$ah:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$az:function(){return[W.aP]}}
W.a4.prototype={$ia4:1}
W.ad.prototype={
gas:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.f(P.kB("No elements"))
if(t>1)throw H.f(P.kB("More than one element"))
return u.firstChild},
ac:function(a,b){var u,t,s,r,q
H.m(b,"$ih",[W.A],"$ah")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.an(t),q=0;q<s;++q)r.u(t,u.firstChild)
return},
gO:function(a){var u=this.a.childNodes
return new W.d9(u,u.length,-1,[H.bY(C.X,u,"z",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
$aw:function(){return[W.A]},
$ah:function(){return[W.A]},
$ab:function(){return[W.A]}}
W.A.prototype={
j3:function(a){var u=a.parentNode
if(u!=null)J.eS(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.ef(a):u},
u:function(a,b){return a.appendChild(b)},
h8:function(a,b){return a.removeChild(b)},
$iA:1}
W.cl.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.A]},
$aw:function(){return[W.A]},
$ih:1,
$ah:function(){return[W.A]},
$ib:1,
$ab:function(){return[W.A]},
$az:function(){return[W.A]}}
W.aQ.prototype={$iaQ:1,
gl:function(a){return a.length}}
W.hm.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aQ]},
$aw:function(){return[W.aQ]},
$ih:1,
$ah:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$az:function(){return[W.aQ]}}
W.dz.prototype={
ii:function(a,b){return a.createContextualFragment(b)},
e8:function(a,b){return a.selectNodeContents(b)}}
W.hu.prototype={
j:function(a,b){return P.bc(a.get(H.E(b)))},
K:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bc(t.value[1]))}},
gZ:function(a){var u=H.c([],[P.e])
this.K(a,new W.hv(u))
return u},
gl:function(a){return a.size},
$aa3:function(){return[P.e,null]},
$iL:1,
$aL:function(){return[P.e,null]}}
W.hv.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.hx.prototype={
gl:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.hH.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aR]},
$aw:function(){return[W.aR]},
$ih:1,
$ah:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$az:function(){return[W.aR]}}
W.aS.prototype={$iaS:1}
W.hI.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aS]},
$aw:function(){return[W.aS]},
$ih:1,
$ah:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$az:function(){return[W.aS]}}
W.aT.prototype={$iaT:1,
gl:function(a){return a.length}}
W.hL.prototype={
j:function(a,b){return this.cD(a,H.E(b))},
K:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=this.fa(a,u)
if(t==null)return
b.$2(t,this.cD(a,t))}},
gZ:function(a){var u=H.c([],[P.e])
this.K(a,new W.hM(u))
return u},
gl:function(a){return a.length},
cD:function(a,b){return a.getItem(b)},
fa:function(a,b){return a.key(b)},
$aa3:function(){return[P.e,P.e]},
$iL:1,
$aL:function(){return[P.e,P.e]}}
W.hM.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:29}
W.ay.prototype={$iay:1}
W.bQ.prototype={}
W.dH.prototype={
a2:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.br(a,b,c,d)
u=W.lI("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ad(t).ac(0,new W.ad(u))
return t}}
W.dI.prototype={
a2:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.br(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.a2(u.createElement("table"),b,c,d)
u.toString
u=new W.ad(u)
s=u.gas(u)
s.toString
u=new W.ad(s)
r=u.gas(u)
t.toString
r.toString
new W.ad(t).ac(0,new W.ad(r))
return t}}
W.hS.prototype={
a2:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.br(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.a2(u.createElement("table"),b,c,d)
u.toString
u=new W.ad(u)
s=u.gas(u)
t.toString
s.toString
new W.ad(t).ac(0,new W.ad(s))
return t}}
W.cs.prototype={$ics:1}
W.aU.prototype={$iaU:1}
W.az.prototype={$iaz:1}
W.hU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.az]},
$aw:function(){return[W.az]},
$ih:1,
$ah:function(){return[W.az]},
$ib:1,
$ab:function(){return[W.az]},
$az:function(){return[W.az]}}
W.hV.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aU]},
$aw:function(){return[W.aU]},
$ih:1,
$ah:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$az:function(){return[W.aU]}}
W.hY.prototype={
gl:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.aA.prototype={$iaA:1}
W.i1.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aW]},
$aw:function(){return[W.aW]},
$ih:1,
$ah:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$az:function(){return[W.aW]}}
W.i2.prototype={
gl:function(a){return a.length}}
W.bt.prototype={}
W.ik.prototype={
i:function(a){return String(a)}}
W.iA.prototype={
gl:function(a){return a.length}}
W.aZ.prototype={
gir:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.am("deltaY is not supported"))},
giq:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.am("deltaX is not supported"))},
$iaZ:1}
W.cE.prototype={
he:function(a,b){return a.requestAnimationFrame(H.bV(H.l(b,{func:1,ret:-1,args:[P.a1]}),1))},
f0:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cF.prototype={$icF:1}
W.iJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.P]},
$aw:function(){return[W.P]},
$ih:1,
$ah:function(){return[W.P]},
$ib:1,
$ab:function(){return[W.P]},
$az:function(){return[W.P]}}
W.dZ.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.eP(b,"$iag",[P.a1],"$aag"))return!1
u=J.an(b)
return a.left===u.gdv(b)&&a.top===u.gdQ(b)&&a.width===u.gaF(b)&&a.height===u.gaD(b)},
gI:function(a){return W.kR(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gaD:function(a){return a.height},
gaF:function(a){return a.width}}
W.iX.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aK]},
$aw:function(){return[W.aK]},
$ih:1,
$ah:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$az:function(){return[W.aK]}}
W.eg.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.A]},
$aw:function(){return[W.A]},
$ih:1,
$ah:function(){return[W.A]},
$ib:1,
$ab:function(){return[W.A]},
$az:function(){return[W.A]}}
W.j8.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aT]},
$aw:function(){return[W.aT]},
$ih:1,
$ah:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$az:function(){return[W.aT]}}
W.j9.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.ay]},
$aw:function(){return[W.ay]},
$ih:1,
$ah:function(){return[W.ay]},
$ib:1,
$ab:function(){return[W.ay]},
$az:function(){return[W.ay]}}
W.iH.prototype={
K:function(a,b){var u,t,s,r,q,p
H.l(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gZ(this),t=u.length,s=this.a,r=J.an(s),q=0;q<u.length;u.length===t||(0,H.C)(u),++q){p=u[q]
b.$2(p,r.aG(s,p))}},
gZ:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.c([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.i(u,r)
q=H.o(u[r],"$icF")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aa3:function(){return[P.e,P.e]},
$aL:function(){return[P.e,P.e]}}
W.iK.prototype={
j:function(a,b){return J.jB(this.a,H.E(b))},
gl:function(a){return this.gZ(this).length}}
W.iL.prototype={}
W.jR.prototype={}
W.iM.prototype={}
W.iN.prototype={
$1:function(a){return this.a.$1(H.o(a,"$in"))},
$S:25}
W.bv.prototype={
es:function(a){var u,t
u=$.k9()
if(u.a===0){for(t=0;t<262;++t)u.U(0,C.U[t],W.mH())
for(t=0;t<12;++t)u.U(0,C.t[t],W.mI())}},
aA:function(a){return $.lq().T(0,W.cc(a))},
ad:function(a,b,c){var u,t,s
u=W.cc(a)
t=$.k9()
s=t.j(0,H.k(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.jX(s.$4(a,b,c,this))},
$iak:1}
W.z.prototype={
gO:function(a){return new W.d9(a,this.gl(a),-1,[H.bY(this,a,"z",0)])}}
W.dt.prototype={
aA:function(a){return C.a.cT(this.a,new W.he(a))},
ad:function(a,b,c){return C.a.cT(this.a,new W.hd(a,b,c))},
$iak:1}
W.he.prototype={
$1:function(a){return H.o(a,"$iak").aA(this.a)},
$S:13}
W.hd.prototype={
$1:function(a){return H.o(a,"$iak").ad(this.a,this.b,this.c)},
$S:13}
W.eo.prototype={
eF:function(a,b,c,d){var u,t,s
this.a.ac(0,c)
u=b.bm(0,new W.j6())
t=b.bm(0,new W.j7())
this.b.ac(0,u)
s=this.c
s.ac(0,C.W)
s.ac(0,t)},
aA:function(a){return this.a.T(0,W.cc(a))},
ad:function(a,b,c){var u,t
u=W.cc(a)
t=this.c
if(t.T(0,H.k(u)+"::"+b))return this.d.i1(c)
else if(t.T(0,"*::"+b))return this.d.i1(c)
else{t=this.b
if(t.T(0,H.k(u)+"::"+b))return!0
else if(t.T(0,"*::"+b))return!0
else if(t.T(0,H.k(u)+"::*"))return!0
else if(t.T(0,"*::*"))return!0}return!1},
$iak:1}
W.j6.prototype={
$1:function(a){return!C.a.T(C.t,H.E(a))},
$S:14}
W.j7.prototype={
$1:function(a){return C.a.T(C.t,H.E(a))},
$S:14}
W.jb.prototype={
ad:function(a,b,c){if(this.ek(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jB(a,"template")==="")return this.e.T(0,b)
return!1}}
W.jc.prototype={
$1:function(a){return"TEMPLATE::"+H.k(H.E(a))},
$S:26}
W.ja.prototype={
aA:function(a){var u=J.X(a)
if(!!u.$ico)return!1
u=!!u.$ip
if(u&&W.cc(a)==="foreignObject")return!1
if(u)return!0
return!1},
ad:function(a,b,c){if(b==="is"||C.j.bq(b,"on"))return!1
return this.aA(a)},
$iak:1}
W.d9.prototype={
v:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.scE(J.lu(this.a,u))
this.c=u
return!0}this.scE(null)
this.c=t
return!1},
gF:function(a){return this.d},
scE:function(a){this.d=H.F(a,H.x(this,0))},
$iaL:1}
W.ak.prototype={}
W.j4.prototype={$ink:1}
W.eE.prototype={
cb:function(a){new W.jg(this).$2(a,null)},
aL:function(a,b){if(b==null)J.kc(a)
else J.eS(b,a)},
hi:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.lx(a)
s=J.jB(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ao(o)}q="element unprintable"
try{q=J.aD(a)}catch(o){H.ao(o)}try{p=W.cc(a)
this.hh(H.o(a,"$iQ"),b,u,q,p,H.o(t,"$iL"),H.E(s))}catch(o){if(H.ao(o) instanceof P.aE)throw o
else{this.aL(a,b)
window
n="Removing corrupted element "+H.k(q)
if(typeof console!="undefined")window.console.warn(n)}}},
hh:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.aL(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aA(a)){this.aL(a,b)
window
u="Removing disallowed element <"+H.k(e)+"> from "+H.k(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.ad(a,"is",g)){this.aL(a,b)
window
u="Removing disallowed type extension <"+H.k(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gZ(f)
t=H.c(u.slice(0),[H.x(u,0)])
for(s=f.gZ(f).length-1,u=f.a,r=J.an(u);s>=0;--s){if(s>=t.length)return H.i(t,s)
q=t[s]
if(!this.a.ad(a,J.lA(q),r.aG(u,q))){window
p="Removing disallowed attribute <"+H.k(e)+" "+q+'="'+H.k(r.aG(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aG(u,q)
r.h7(u,q)}}if(!!J.X(a).$ics)this.cb(a.content)},
$in6:1}
W.jg.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.hi(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.aL(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ao(r)
q=H.o(u,"$iA")
if(s){p=q.parentNode
if(p!=null)J.eS(p,q)}else J.eS(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.o(t,"$iA")}},
$S:27}
W.dY.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.cL.prototype={}
W.cM.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.eu.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.cN.prototype={}
W.cO.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
P.jl.prototype={
$2:function(a,b){this.a[a]=b},
$S:18}
P.fr.prototype={
gby:function(){var u,t,s
u=this.b
t=H.ai(u,"w",0)
s=W.Q
return new H.fS(new H.cD(u,H.l(new P.fs(),{func:1,ret:P.M,args:[t]}),[t]),H.l(new P.ft(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.kb(this.b.a,b)},
gl:function(a){return J.bB(this.gby().a)},
j:function(a,b){var u=this.gby()
return u.b.$1(J.jA(u.a,b))},
gO:function(a){var u=P.lT(this.gby(),!1,W.Q)
return new J.ap(u,u.length,0,[H.x(u,0)])},
$aw:function(){return[W.Q]},
$ah:function(){return[W.Q]},
$ab:function(){return[W.Q]}}
P.fs.prototype={
$1:function(a){return!!J.X(H.o(a,"$iA")).$iQ},
$S:23}
P.ft.prototype={
$1:function(a){return H.j(H.o(a,"$iA"),"$iQ")},
$S:28}
P.j_.prototype={}
P.ag.prototype={}
P.b5.prototype={$ib5:1}
P.fK.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return this.ah(a,b)},
B:function(a,b){return this.j(a,b)},
ah:function(a,b){return a.getItem(b)},
$aw:function(){return[P.b5]},
$ih:1,
$ah:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$az:function(){return[P.b5]}}
P.b9.prototype={$ib9:1}
P.hh.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return this.ah(a,b)},
B:function(a,b){return this.j(a,b)},
ah:function(a,b){return a.getItem(b)},
$aw:function(){return[P.b9]},
$ih:1,
$ah:function(){return[P.b9]},
$ib:1,
$ab:function(){return[P.b9]},
$az:function(){return[P.b9]}}
P.hn.prototype={
gl:function(a){return a.length}}
P.co.prototype={$ico:1}
P.hR.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return this.ah(a,b)},
B:function(a,b){return this.j(a,b)},
ah:function(a,b){return a.getItem(b)},
$aw:function(){return[P.e]},
$ih:1,
$ah:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$az:function(){return[P.e]}}
P.p.prototype={
gcX:function(a){return new P.fr(a,new W.ad(a))},
a2:function(a,b,c,d){var u,t,s,r,q,p
u=H.c([],[W.ak])
C.a.h(u,W.kQ(null))
C.a.h(u,W.kS())
C.a.h(u,new W.ja())
c=new W.eE(new W.dt(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.n).ij(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ad(r)
p=u.gas(u)
for(u=J.an(q);s=p.firstChild,s!=null;)u.u(q,s)
return q},
$ip:1}
P.bb.prototype={$ibb:1}
P.i3.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return this.ah(a,b)},
B:function(a,b){return this.j(a,b)},
ah:function(a,b){return a.getItem(b)},
$aw:function(){return[P.bb]},
$ih:1,
$ah:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$az:function(){return[P.bb]}}
P.e8.prototype={}
P.e9.prototype={}
P.ej.prototype={}
P.ek.prototype={}
P.ev.prototype={}
P.ew.prototype={}
P.eC.prototype={}
P.eD.prototype={}
P.eW.prototype={
gl:function(a){return a.length}}
P.eX.prototype={
j:function(a,b){return P.bc(a.get(H.E(b)))},
K:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bc(t.value[1]))}},
gZ:function(a){var u=H.c([],[P.e])
this.K(a,new P.eY(u))
return u},
gl:function(a){return a.size},
$aa3:function(){return[P.e,null]},
$iL:1,
$aL:function(){return[P.e,null]}}
P.eY.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
P.eZ.prototype={
gl:function(a){return a.length}}
P.bC.prototype={}
P.hi.prototype={
gl:function(a){return a.length}}
P.dX.prototype={}
P.cZ.prototype={$icZ:1}
P.da.prototype={$ida:1}
P.dy.prototype={$idy:1}
P.bO.prototype={
cU:function(a,b,c){return a.attachShader(b,c)},
ae:function(a,b,c){return a.bindBuffer(b,c)},
i6:function(a,b,c){return a.bindFramebuffer(b,c)},
i7:function(a,b,c){return a.blendFunc(b,c)},
cW:function(a,b,c,d){return a.bufferData(b,c,d)},
ia:function(a,b){return a.clear(b)},
ib:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
ic:function(a,b){return a.clearDepth(b)},
ie:function(a,b){return a.compileShader(b)},
il:function(a,b){return a.createShader(b)},
io:function(a,b){return a.deleteProgram(b)},
ip:function(a,b){return a.deleteShader(b)},
is:function(a,b){return a.depthFunc(b)},
it:function(a,b){return a.disable(b)},
d0:function(a,b){return a.disableVertexAttribArray(b)},
iv:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bU:function(a,b){return a.enable(b)},
d2:function(a,b){return a.enableVertexAttribArray(b)},
dX:function(a,b,c){return a.getActiveAttrib(b,c)},
dY:function(a,b,c){return a.getActiveUniform(b,c)},
dZ:function(a,b,c){return a.getAttribLocation(b,c)},
ca:function(a,b){return a.getParameter(b)},
e2:function(a,b){return a.getProgramInfoLog(b)},
bn:function(a,b,c){return a.getProgramParameter(b,c)},
e3:function(a,b){return a.getShaderInfoLog(b)},
e4:function(a,b,c){return a.getShaderParameter(b,c)},
e5:function(a,b,c){return a.getUniformLocation(b,c)},
iJ:function(a,b){return a.linkProgram(b)},
ec:function(a,b,c){return a.shaderSource(b,c)},
H:function(a,b,c){return a.uniform1f(b,c)},
R:function(a,b,c){return a.uniform1i(b,c)},
p:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dS:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dT:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dU:function(a,b){return a.useProgram(b)},
jk:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jl:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibO:1}
P.dD.prototype={$idD:1}
P.dR.prototype={$idR:1}
P.hJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return P.bc(this.f9(a,b))},
B:function(a,b){return this.j(a,b)},
f9:function(a,b){return a.item(b)},
$aw:function(){return[[P.L,,,]]},
$ih:1,
$ah:function(){return[[P.L,,,]]},
$ib:1,
$ab:function(){return[[P.L,,,]]},
$az:function(){return[[P.L,,,]]}}
P.er.prototype={}
P.es.prototype={}
O.a_.prototype={
cg:function(a){this.sfe(H.c([],[a]))
this.scI(null)
this.scF(null)
this.scJ(null)},
cc:function(a,b,c){var u=H.ai(this,"a_",0)
H.l(b,{func:1,ret:P.M,args:[[P.h,u]]})
u={func:1,ret:-1,args:[P.B,[P.h,u]]}
H.l(a,u)
H.l(c,u)
this.scI(b)
this.scF(a)
this.scJ(c)},
bp:function(a,b){return this.cc(a,null,b)},
fU:function(a){var u
H.m(a,"$ih",[H.ai(this,"a_",0)],"$ah")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fg:function(a,b){var u
H.m(b,"$ih",[H.ai(this,"a_",0)],"$ah")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gO:function(a){var u=this.a
return new J.ap(u,u.length,0,[H.x(u,0)])},
B:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ai(this,"a_",0)
H.F(b,u)
u=[u]
if(this.fU(H.c([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.fg(s,H.c([b],u))}},
sfe:function(a){this.a=H.m(a,"$ib",[H.ai(this,"a_",0)],"$ab")},
scI:function(a){this.b=H.l(a,{func:1,ret:P.M,args:[[P.h,H.ai(this,"a_",0)]]})},
scF:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.B,[P.h,H.ai(this,"a_",0)]]})},
scJ:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.B,[P.h,H.ai(this,"a_",0)]]})},
$ih:1}
O.ci.prototype={
gl:function(a){return this.a.length},
gC:function(){var u=this.b
if(u==null){u=D.aw()
this.b=u}return u},
er:function(a){var u=this.b
if(u!=null)u.W(a)},
at:function(){return this.er(null)},
gV:function(a){var u=this.a
if(u.length>0)return C.a.gbj(u)
else return V.jK()},
dH:function(a){var u=this.a
if(a==null)C.a.h(u,V.jK())
else C.a.h(u,a)
this.at()},
c4:function(){var u=this.a
if(u.length>0){u.pop()
this.at()}},
sbA:function(a){this.a=H.m(a,"$ib",[V.a9],"$ab")}}
E.f_.prototype={}
E.ae.prototype={
scd:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gC().P(0,this.gdC())
t=this.c
if(t!=null)t.gC().h(0,this.gdC())
s=new D.V("shape",u,this.c,this,[F.dE])
s.b=!0
this.a7(s)}},
saO:function(a){var u,t
if(!J.Z(this.r,a)){u=this.r
if(u!=null)u.gC().P(0,this.gdA())
if(a!=null)a.gC().h(0,this.gdA())
this.r=a
t=new D.V("mover",u,a,this,[U.bJ])
t.b=!0
this.a7(t)}},
bl:function(a,b){var u,t,s,r,q,p,o,n
u=this.r
if(u!=null){t=u.r
s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sdV(u.a+u.d*b.y)
u.sdF(0,u.b+u.e*b.y)
u.sdK(u.c+u.f*b.y)
t=u.c
r=Math.cos(t)
q=Math.sin(t)
t=V.b6(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)
s=u.b
r=Math.cos(s)
q=Math.sin(s)
t=t.M(0,V.b6(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))
s=u.a
r=Math.cos(s)
q=Math.sin(s)
u.x=t.M(0,V.b6(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1))
t=u.y
if(t!=null)t.ar(0)}p=u.x}else p=null
if(!J.Z(p,this.x)){o=this.x
this.x=p
n=new D.V("matrix",o,p,this,[V.a9])
n.b=!0
this.a7(n)}for(u=this.y.a,u=new J.ap(u,u.length,0,[H.x(u,0)]);u.v();)u.d.bl(0,b)},
aE:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gV(u))
else C.a.h(u.a,t.M(0,u.gV(u)))
u.at()
a.dI(this.f)
u=a.dy
s=(u&&C.a).gbj(u)
if(s!=null&&this.d!=null)s.j7(a,this)
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.x(u,0)]);u.v();)u.d.aE(a)
a.dG()
a.dx.c4()},
a7:function(a){var u=this.z
if(u!=null)u.W(a)},
a_:function(){return this.a7(null)},
dD:function(a){H.o(a,"$iG")
this.e=null
this.a7(a)},
iU:function(){return this.dD(null)},
dB:function(a){this.a7(H.o(a,"$iG"))},
iT:function(){return this.dB(null)},
dz:function(a){this.a7(H.o(a,"$iG"))},
iQ:function(){return this.dz(null)},
iP:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ih",[E.ae],"$ah")
for(u=b.length,t=this.gdw(),s={func:1,ret:-1,args:[D.G]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bF()
o.sab(null)
o.saJ(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a_()},
iS:function(a,b){var u,t
H.m(b,"$ih",[E.ae],"$ah")
for(u=b.gO(b),t=this.gdw();u.v();)u.gF(u).gC().P(0,t)
this.a_()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
seT:function(a,b){this.y=H.m(b,"$ia_",[E.ae],"$aa_")},
$ib8:1}
E.hq.prototype={
en:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.bn(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.ci()
t=[V.a9]
u.sbA(H.c([],t))
u.b=null
u.gC().h(0,new E.hr(this))
this.cy=u
u=new O.ci()
u.sbA(H.c([],t))
u.b=null
u.gC().h(0,new E.hs(this))
this.db=u
u=new O.ci()
u.sbA(H.c([],t))
u.b=null
u.gC().h(0,new E.ht(this))
this.dx=u
this.shv(H.c([],[O.bR]))
u=this.dy;(u&&C.a).h(u,null)
this.shr(new H.aM([P.e,A.cp]))},
gj2:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.gV(u)
t=this.db
t=u.M(0,t.gV(t))
this.z=t
u=t}return u},
dI:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gbj(u):a;(u&&C.a).h(u,t)},
dG:function(){var u=this.dy
if(u.length>1)u.pop()},
shv:function(a){this.dy=H.m(a,"$ib",[O.bR],"$ab")},
shr:function(a){this.fr=H.m(a,"$iL",[P.e,A.cp],"$aL")}}
E.hr.prototype={
$1:function(a){var u
H.o(a,"$iG")
u=this.a
u.z=null
u.ch=null},
$S:6}
E.hs.prototype={
$1:function(a){var u
H.o(a,"$iG")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:6}
E.ht.prototype={
$1:function(a){var u
H.o(a,"$iG")
u=this.a
u.ch=null
u.cx=null},
$S:6}
E.dO.prototype={
ck:function(a){H.o(a,"$iG")
this.dJ()},
cj:function(){return this.ck(null)},
giE:function(){var u,t,s
u=Date.now()
t=C.i.X(P.kj(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.bn(u,!1)
return s/t},
cM:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.M()
if(typeof u!=="number")return H.bA(u)
s=C.d.dr(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.M()
r=C.d.dr(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kE(C.p,this.gj8())}},
dJ:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.hX(this),{func:1,ret:-1,args:[P.a1]})
C.E.f0(u)
C.E.he(u,W.kZ(t,P.a1))}},
j6:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.cM()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.bn(r,!1)
s.y=P.kj(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.at()
r=s.db
C.a.sl(r.a,0)
r.at()
r=s.dx
C.a.sl(r.a,0)
r.at()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aE(this.e)}s=this.z
if(s!=null)s.W(null)}catch(q){u=H.ao(q)
t=H.bZ(q)
P.k4("Error: "+H.k(u))
P.k4("Stack: "+H.k(t))
throw H.f(u)}}}
E.hX.prototype={
$1:function(a){var u
H.mS(a)
u=this.a
if(u.ch){u.ch=!1
u.j6()}},
$S:32}
Z.dV.prototype={$in0:1}
Z.d_.prototype={
b1:function(a){var u,t,s
try{t=a.a
C.b.d2(t,this.e)
C.b.jk(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ao(s)
t=P.t('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.k(u))
throw H.f(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}}
Z.iB.prototype={$in1:1}
Z.d0.prototype={
aC:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
b1:function(a){var u,t
u=this.a
C.b.ae(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].b1(a)},
dR:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.d0(s,u[t].e)
C.b.ae(s,this.a.a,null)},
aE:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.i(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ae(t,p,r.b)
C.b.iv(t,q.a,q.b,5123,0)
C.b.ae(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.e]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q)C.a.h(t,s[q].i(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aD(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
sf8:function(a){this.b=H.m(a,"$ib",[Z.ce],"$ab")},
$in9:1}
Z.ce.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bM(this.c)+"'")+"]"}}
Z.aY.prototype={
gce:function(a){var u,t
u=this.a
t=(u&$.bg().a)!==0?3:0
if((u&$.bf().a)!==0)t+=3
if((u&$.be().a)!==0)t+=3
if((u&$.bh().a)!==0)t+=2
if((u&$.bi().a)!==0)t+=3
if((u&$.cS().a)!==0)t+=3
if((u&$.cT().a)!==0)t+=4
if((u&$.c1().a)!==0)++t
return(u&$.bd().a)!==0?t+4:t},
i3:function(a){var u,t,s
u=$.bg()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bf()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.be()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bh()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bi()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cS()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cT()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c1()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bd()
if((t&u.a)!==0)if(s===a)return u
return $.lp()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aY))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.e])
t=this.a
if((t&$.bg().a)!==0)C.a.h(u,"Pos")
if((t&$.bf().a)!==0)C.a.h(u,"Norm")
if((t&$.be().a)!==0)C.a.h(u,"Binm")
if((t&$.bh().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bi().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cS().a)!==0)C.a.h(u,"Clr3")
if((t&$.cT().a)!==0)C.a.h(u,"Clr4")
if((t&$.c1().a)!==0)C.a.h(u,"Weight")
if((t&$.bd().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.f2.prototype={}
D.bF.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.G]}
H.l(b,u)
if(this.a==null)this.sab(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
P:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[D.G]})
u=this.a
u=u==null?null:C.a.T(u,b)
if(u===!0){u=this.a
t=(u&&C.a).P(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.T(u,b)
if(u===!0){u=this.b
t=(u&&C.a).P(u,b)||t}return t},
W:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.G(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.K(t,new D.fl(u))
t=this.b
if(t!=null)C.a.K(t,new D.fm(u))
u=this.b
if(u!=null)C.a.sl(u,0)
return!0},
j9:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.W(t)}}},
ar:function(a){return this.j9(a,!0,!1)},
sab:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.G]}],"$ab")},
saJ:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.G]}],"$ab")}}
D.fl.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.G]})
u=this.a.a
u.b
a.$1(u)},
$S:15}
D.fm.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.G]})
u=this.a.a
u.b
a.$1(u)},
$S:15}
D.G.prototype={}
D.cf.prototype={}
D.cg.prototype={}
D.V.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
X.d1.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d1))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.dg.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dg))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.fJ.prototype={
j_:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iW:function(a){this.c=a.b
this.d.P(0,a.a)
return!1},
sh5:function(a){this.d=H.m(a,"$ikA",[P.B],"$akA")}}
X.fP.prototype={
c3:function(a,b){this.r=a.a
return!1},
aQ:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.e7()
if(typeof u!=="number")return u.dW()
this.r=(u&~t)>>>0
return!1},
aP:function(a,b){return!1},
j0:function(a){return!1},
fJ:function(a,b,c){return}}
X.b7.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.b7))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.h6.prototype={
c3:function(a,b){this.f=a.a
return!1},
aQ:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.e7()
if(typeof u!=="number")return u.dW()
this.f=(u&~t)>>>0
return!1},
aP:function(a,b){return!1},
j1:function(a,b){return!1}}
X.i0.prototype={
iZ:function(a){H.m(a,"$ib",[V.aa],"$ab")
return!1},
iX:function(a){H.m(a,"$ib",[V.aa],"$ab")
return!1},
iY:function(a){H.m(a,"$ib",[V.aa],"$ab")
return!1}}
X.dU.prototype={
cz:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dg(u,new X.b7(t,a.altKey,a.shiftKey))},
az:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.b7(t,a.altKey,a.shiftKey)},
bJ:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.b7(t,a.altKey,a.shiftKey)},
am:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.w()
q=u.top
if(typeof s!=="number")return s.w()
return new V.aa(t-r,s-q)},
aK:function(a){return new V.aC(a.movementX,a.movementY)},
bF:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.c([],[V.aa])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
o=C.d.a8(p.pageX)
C.d.a8(p.pageY)
n=u.left
C.d.a8(p.pageX)
C.a.h(t,new V.aa(o-n,C.d.a8(p.pageY)-u.top))}return t},
ak:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d1(u,new X.b7(t,a.altKey,a.shiftKey))},
bB:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.w()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.w()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
fD:function(a){this.f=!0},
fo:function(a){this.f=!1},
fv:function(a){H.o(a,"$ia4")
if(this.f&&this.bB(a))a.preventDefault()},
fH:function(a){var u
H.o(a,"$iaN")
if(!this.f)return
u=this.cz(a)
this.b.j_(u)},
fF:function(a){var u
H.o(a,"$iaN")
if(!this.f)return
u=this.cz(a)
this.b.iW(u)},
fL:function(a){var u,t,s,r
H.o(a,"$ia4")
u=this.a
u.focus()
this.f=!0
this.az(a)
if(this.x){t=this.ak(a)
s=this.aK(a)
if(this.d.c3(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.ak(a)
r=this.am(a)
if(this.c.c3(t,r))a.preventDefault()},
fP:function(a){var u,t,s
H.o(a,"$ia4")
this.az(a)
u=this.ak(a)
if(this.x){t=this.aK(a)
if(this.d.aQ(u,t))a.preventDefault()
return}if(this.r)return
s=this.am(a)
if(this.c.aQ(u,s))a.preventDefault()},
fB:function(a){var u,t,s
H.o(a,"$ia4")
if(!this.bB(a)){this.az(a)
u=this.ak(a)
if(this.x){t=this.aK(a)
if(this.d.aQ(u,t))a.preventDefault()
return}if(this.r)return
s=this.am(a)
if(this.c.aQ(u,s))a.preventDefault()}},
fN:function(a){var u,t,s
H.o(a,"$ia4")
this.az(a)
u=this.ak(a)
if(this.x){t=this.aK(a)
if(this.d.aP(u,t))a.preventDefault()
return}if(this.r)return
s=this.am(a)
if(this.c.aP(u,s))a.preventDefault()},
fz:function(a){var u,t,s
H.o(a,"$ia4")
if(!this.bB(a)){this.az(a)
u=this.ak(a)
if(this.x){t=this.aK(a)
if(this.d.aP(u,t))a.preventDefault()
return}if(this.r)return
s=this.am(a)
if(this.c.aP(u,s))a.preventDefault()}},
fR:function(a){var u,t
H.o(a,"$iaZ")
this.az(a)
u=new V.aC((a&&C.D).giq(a),C.D.gir(a)).D(0,180)
if(this.x){if(this.d.j0(u))a.preventDefault()
return}if(this.r)return
t=this.am(a)
if(this.c.j1(u,t))a.preventDefault()},
fT:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.ak(this.y)
s=this.am(this.y)
this.d.fJ(t,s,u)}},
h3:function(a){var u
H.o(a,"$iaA")
this.a.focus()
this.f=!0
this.bJ(a)
u=this.bF(a)
if(this.e.iZ(u))a.preventDefault()},
h_:function(a){var u
H.o(a,"$iaA")
this.bJ(a)
u=this.bF(a)
if(this.e.iX(u))a.preventDefault()},
h1:function(a){var u
H.o(a,"$iaA")
this.bJ(a)
u=this.bF(a)
if(this.e.iY(u))a.preventDefault()},
sf1:function(a){this.z=H.m(a,"$ib",[[P.cr,P.K]],"$ab")}}
D.bo.prototype={
ai:function(a){var u
H.o(a,"$iG")
u=this.d
if(u!=null)u.W(a)},
ew:function(){return this.ai(null)},
$ia0:1,
$ib8:1}
D.a0.prototype={$ib8:1}
D.dh.prototype={
ai:function(a){var u=this.Q
if(u!=null)u.W(a)},
cH:function(a){var u
H.o(a,"$iG")
u=this.ch
if(u!=null)u.W(a)},
fI:function(){return this.cH(null)},
fW:function(a){var u,t,s
H.m(a,"$ih",[D.a0],"$ah")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.eu(s))return!1}return!0},
fi:function(a,b){var u,t,s,r,q,p,o,n
u=D.a0
H.m(b,"$ih",[u],"$ah")
for(t=b.length,s=this.gcG(),r={func:1,ret:-1,args:[D.G]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=H.o(b[p],"$ia0")
if(o instanceof D.bo)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bF()
n.sab(null)
n.saJ(null)
n.c=null
n.d=0
o.d=n}H.l(s,r)
if(n.a==null)n.sab(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.cf(a,b,this,[u])
u.b=!0
this.ai(u)},
fY:function(a,b){var u,t,s,r
u=D.a0
H.m(b,"$ih",[u],"$ah")
for(t=b.gO(b),s=this.gcG();t.v();){r=t.gF(t)
C.a.P(this.e,r)
r.gC().P(0,s)}u=new D.cg(a,b,this,[u])
u.b=!0
this.ai(u)},
eu:function(a){var u=C.a.T(this.e,a)
return u},
seZ:function(a){this.e=H.m(a,"$ib",[D.bo],"$ab")},
sh4:function(a){this.f=H.m(a,"$ib",[D.dw],"$ab")},
sht:function(a){this.r=H.m(a,"$ib",[D.dF],"$ab")},
shy:function(a){this.x=H.m(a,"$ib",[D.dL],"$ab")},
shz:function(a){this.y=H.m(a,"$ib",[D.dM],"$ab")},
shA:function(a){this.z=H.m(a,"$ib",[D.dN],"$ab")},
$ah:function(){return[D.a0]},
$aa_:function(){return[D.a0]}}
D.dw.prototype={$ia0:1,$ib8:1}
D.dF.prototype={$ia0:1,$ib8:1}
D.dL.prototype={$ia0:1,$ib8:1}
D.dM.prototype={$ia0:1,$ib8:1}
D.dN.prototype={$ia0:1,$ib8:1}
V.Y.prototype={
q:function(a,b){var u,t,s
u=C.d.q(this.a,b.gc5())
t=C.d.q(this.b,b.gbo())
s=C.d.q(this.c,b.gbO())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.Y(u,t,s)},
w:function(a,b){var u,t,s
u=C.d.w(this.a,b.gc5())
t=C.d.w(this.b,b.gbo())
s=C.d.w(this.c,b.gbO())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.Y(u,t,s)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.b1.prototype={
q:function(a,b){var u,t,s,r
u=C.d.q(this.a,b.gc5())
t=C.d.q(this.b,b.gbo())
s=C.d.q(this.c,b.gbO())
r=C.d.q(this.d,b.gi2(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.b1(u,t,s,r)},
w:function(a,b){var u,t,s,r
u=C.d.w(this.a,b.gc5())
t=C.d.w(this.b,b.gbo())
s=C.d.w(this.c,b.gbO())
r=C.d.w(this.d,b.gi2(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.b1(u,t,s,r)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b1))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}}
V.fj.prototype={}
V.dp.prototype={
a4:function(a,b){var u=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.y])
return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dp))return!1
u=b.a
t=$.O().a
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
u=[P.y]
t=V.bX(H.c([this.a,this.d,this.r],u),3,0)
s=V.bX(H.c([this.b,this.e,this.x],u),3,0)
r=V.bX(H.c([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.i(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.i(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.i(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.i(t,1)
n=" "+t[1]+", "
if(1>=p)return H.i(s,1)
n=n+s[1]+", "
if(1>=o)return H.i(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.i(t,2)
u=" "+t[2]+", "
if(2>=p)return H.i(s,2)
u=u+s[2]+", "
if(2>=o)return H.i(r,2)
return n+(u+r[2]+"]")}}
V.a9.prototype={
a4:function(a,b){var u=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.y])
return u},
dt:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.O().a)return V.jK()
a8=1/a7
a9=-r
b0=-d
return V.b6((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
M:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.b6(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
c9:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.R(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
aT:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.a5(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.O().a
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
i:function(a){return this.N()},
ds:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.y]
t=V.bX(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bX(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bX(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bX(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.i(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.i(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.i(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.i(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.i(t,1)
l=l+t[1]+", "
if(1>=o)return H.i(s,1)
l=l+s[1]+", "
if(1>=n)return H.i(r,1)
l=l+r[1]+", "
if(1>=m)return H.i(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.i(t,2)
p=p+t[2]+", "
if(2>=o)return H.i(s,2)
p=p+s[2]+", "
if(2>=n)return H.i(r,2)
p=p+r[2]+", "
if(2>=m)return H.i(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.i(t,3)
l=l+t[3]+", "
if(3>=o)return H.i(s,3)
l=l+s[3]+", "
if(3>=n)return H.i(r,3)
l=l+r[3]+", "
if(3>=m)return H.i(q,3)
return p+(l+q[3]+"]")},
N:function(){return this.ds("",3,0)},
A:function(a){return this.ds(a,3,0)}}
V.aa.prototype={
q:function(a,b){return new V.aa(this.a+b.a,this.b+b.b)},
w:function(a,b){return new V.aa(C.d.w(this.a,b.gjw(b)),C.d.w(this.b,b.gjx(b)))},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.a5.prototype={
q:function(a,b){return new V.a5(this.a+b.a,this.b+b.b,this.c+b.c)},
w:function(a,b){return new V.a5(this.a-b.a,this.b-b.b,this.c-b.c)},
M:function(a,b){return new V.a5(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.dB.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dB))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}}
V.aC.prototype={
c1:function(a){var u,t
u=this.a
if(typeof u!=="number")return u.M()
t=this.b
if(typeof t!=="number")return t.M()
return Math.sqrt(u*u+t*t)},
q:function(a,b){var u,t,s
u=this.a
t=b.giw(b)
if(typeof u!=="number")return u.q()
t=C.d.q(u,t)
u=this.b
s=b.gix(b)
if(typeof u!=="number")return u.q()
return new V.aC(t,C.d.q(u,s))},
w:function(a,b){var u,t,s
u=this.a
t=b.giw(b)
if(typeof u!=="number")return u.w()
t=C.d.w(u,t)
u=this.b
s=b.gix(b)
if(typeof u!=="number")return u.w()
return new V.aC(t,C.d.w(u,s))},
D:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.kI
if(u==null){u=new V.aC(0,0)
$.kI=u}return u}u=this.a
if(typeof u!=="number")return u.D()
t=this.b
if(typeof t!=="number")return t.D()
return new V.aC(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aC))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.bA(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.bA(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.R.prototype={
c1:function(a){return Math.sqrt(this.L(this))},
L:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
an:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.R(u*t-s*r,s*q-p*t,p*r-u*q)},
q:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
w:function(a,b){return new V.R(this.a-b.a,this.b-b.b,this.c-b.c)},
aH:function(a){return new V.R(-this.a,-this.b,-this.c)},
M:function(a,b){return new V.R(this.a*b,this.b*b,this.c*b)},
D:function(a,b){if(Math.abs(b-0)<$.O().a)return V.cC()
return new V.R(this.a/b,this.b/b,this.c/b)},
du:function(){var u=$.O().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
U.d3.prototype={
gC:function(){var u=this.b
if(u==null){u=D.aw()
this.b=u}return u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d3))return!1
return J.Z(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.bJ.prototype={}
U.dC.prototype={
gC:function(){var u=this.y
if(u==null){u=D.aw()
this.y=u}return u},
ax:function(a){var u=this.y
if(u!=null)u.W(a)},
sdV:function(a){var u
a=V.k6(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.O().a)){this.a=a
u=new D.V("yaw",u,a,this,[P.y])
u.b=!0
this.ax(u)}},
sdF:function(a,b){var u
b=V.k6(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.O().a)){this.b=b
u=new D.V("pitch",u,b,this,[P.y])
u.b=!0
this.ax(u)}},
sdK:function(a){var u
a=V.k6(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.O().a)){this.c=a
u=new D.V("roll",u,a,this,[P.y])
u.b=!0
this.ax(u)}},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dC))return!1
u=this.a
t=b.a
s=$.O().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"], ["+V.N(this.d,3,0)+", "+V.N(this.e,3,0)+", "+V.N(this.f,3,0)+"]"}}
M.d8.prototype={
aj:function(a){var u
H.o(a,"$iG")
u=this.x
if(u!=null)u.W(a)},
ey:function(){return this.aj(null)},
fq:function(a,b){var u,t,s,r,q,p,o,n
u=E.ae
H.m(b,"$ih",[u],"$ah")
for(t=b.length,s=this.gaa(),r={func:1,ret:-1,args:[D.G]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bF()
n.sab(null)
n.saJ(null)
n.c=null
n.d=0
o.z=n}H.l(s,r)
if(n.a==null)n.sab(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.cf(a,b,this,[u])
u.b=!0
this.aj(u)},
ft:function(a,b){var u,t,s
u=E.ae
H.m(b,"$ih",[u],"$ah")
for(t=b.gO(b),s=this.gaa();t.v();)t.gF(t).gC().P(0,s)
u=new D.cg(a,b,this,[u])
u.b=!0
this.aj(u)},
sdM:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gC().P(0,this.gaa())
t=this.c
this.c=a
if(a!=null)a.gC().h(0,this.gaa())
u=new D.V("technique",t,this.c,this,[O.bR])
u.b=!0
this.aj(u)}},
gC:function(){var u=this.x
if(u==null){u=D.aw()
this.x=u}return u},
aE:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.dI(this.c)
u=this.b
u.toString
t=a.a
C.b.i6(t,36160,null)
C.b.bU(t,2884)
C.b.bU(t,2929)
C.b.is(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.bA(s)
o=C.d.a8(p*s)
p=q.b
if(typeof r!=="number")return H.bA(r)
n=C.d.a8(p*r)
p=C.d.a8(q.c*s)
a.c=p
q=C.d.a8(q.d*r)
a.d=q
C.b.jl(t,o,n,p,q)
C.b.ic(t,u.c)
u=u.a
C.b.ib(t,u.a,u.b,u.c,u.d)
C.b.ia(t,16640)
u=this.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.b6(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dH(i)
t=$.ku
if(t==null){t=V.kw()
q=V.kN()
p=$.kJ
if(p==null){p=new V.R(0,0,-1)
$.kJ=p}p=V.kq(t,q,p)
$.ku=p
h=p}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.M(0,h)}a.db.dH(h)
u=this.c
if(u!=null)u.bl(0,a)
for(u=this.d.a,u=new J.ap(u,u.length,0,[H.x(u,0)]);u.v();)u.d.bl(0,a)
for(u=this.d.a,u=new J.ap(u,u.length,0,[H.x(u,0)]);u.v();)u.d.aE(a)
this.a.toString
a.cy.c4()
a.db.c4()
this.b.toString
a.dG()},
sex:function(a,b){this.d=H.m(b,"$ia_",[E.ae],"$aa_")},
$in7:1}
A.cX.prototype={}
A.eV.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iy:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.d2(r.a,r.c)}},
iu:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.d0(r.a,r.c)}}}
A.fV.prototype={
em:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.ba("")
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
a7.hE(u)
a7.hL(u)
a7.hF(u)
a7.hT(u)
a7.hU(u)
a7.hN(u)
a7.hY(u)
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
u=new P.ba("")
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
s.hI(u)
s.hD(u)
s.hG(u)
s.hJ(u)
s.hR(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.hP(u)
s.hQ(u)}s.hM(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=s.y
if(l!==C.c){m+="uniform float alpha;\n"
u.a=m
if(l!==C.h){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.f){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.c:m+="   return 1.0;\n"
u.a=m
break
case C.h:m+="   return alpha;\n"
u.a=m
break
case C.e:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.f:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.c([],[P.e])
if(s.b!==C.c)C.a.h(k,"ambient()")
if(s.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.hH(u)
s.hO(u)
s.hS(u)
s.hV(u)
s.hW(u)
s.hX(u)
s.hK(u)}m=u.a+="// === Main ===\n"
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
j=H.c([],[P.e])
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
i="vec4("+C.a.m(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.cA(n,35633)
this.f=this.cA(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.cU(s,q,this.e)
C.b.cU(s,this.r,this.f)
C.b.iJ(s,this.r)
if(!H.jX(C.b.bn(s,this.r,35714))){h=C.b.e2(s,this.r)
C.b.io(s,this.r)
H.r(P.t("Failed to link shader: "+H.k(h)))}this.ho()
this.hq()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a7.fr)this.id=H.j(this.y.n(0,"invViewMat"),"$ial")
if(t)this.dy=H.j(this.y.n(0,"objMat"),"$ial")
if(r)this.fr=H.j(this.y.n(0,"viewObjMat"),"$ial")
this.fy=H.j(this.y.n(0,"projViewObjMat"),"$ial")
if(a7.x2)this.k1=H.j(this.y.n(0,"txt2DMat"),"$icw")
if(a7.y1)this.k2=H.j(this.y.n(0,"txtCubeMat"),"$ial")
if(a7.y2)this.k3=H.j(this.y.n(0,"colorMat"),"$ial")
this.seP(H.c([],[A.al]))
t=a7.ag
if(t>0){this.k4=H.o(this.y.n(0,"bendMatCount"),"$iJ")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.r(P.t("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.j(f,"$ial"))}}t=a7.a
if(t!==C.c){this.r2=H.j(this.y.n(0,"emissionClr"),"$iH")
switch(t){case C.c:break
case C.h:break
case C.e:this.rx=H.j(this.y.n(0,"emissionTxt"),"$iab")
this.x1=H.j(this.y.n(0,"nullEmissionTxt"),"$iJ")
break
case C.f:this.ry=H.j(this.y.n(0,"emissionTxt"),"$iac")
this.x1=H.j(this.y.n(0,"nullEmissionTxt"),"$iJ")
break}}t=a7.b
if(t!==C.c){this.x2=H.j(this.y.n(0,"ambientClr"),"$iH")
switch(t){case C.c:break
case C.h:break
case C.e:this.y1=H.j(this.y.n(0,"ambientTxt"),"$iab")
this.ag=H.j(this.y.n(0,"nullAmbientTxt"),"$iJ")
break
case C.f:this.y2=H.j(this.y.n(0,"ambientTxt"),"$iac")
this.ag=H.j(this.y.n(0,"nullAmbientTxt"),"$iJ")
break}}t=a7.c
if(t!==C.c){this.a6=H.j(this.y.n(0,"diffuseClr"),"$iH")
switch(t){case C.c:break
case C.h:break
case C.e:this.b4=H.j(this.y.n(0,"diffuseTxt"),"$iab")
this.b5=H.j(this.y.n(0,"nullDiffuseTxt"),"$iJ")
break
case C.f:this.d3=H.j(this.y.n(0,"diffuseTxt"),"$iac")
this.b5=H.j(this.y.n(0,"nullDiffuseTxt"),"$iJ")
break}}t=a7.d
if(t!==C.c){this.b6=H.j(this.y.n(0,"invDiffuseClr"),"$iH")
switch(t){case C.c:break
case C.h:break
case C.e:this.d4=H.j(this.y.n(0,"invDiffuseTxt"),"$iab")
this.b7=H.j(this.y.n(0,"nullInvDiffuseTxt"),"$iJ")
break
case C.f:this.d5=H.j(this.y.n(0,"invDiffuseTxt"),"$iac")
this.b7=H.j(this.y.n(0,"nullInvDiffuseTxt"),"$iJ")
break}}t=a7.e
if(t!==C.c){this.ba=H.j(this.y.n(0,"shininess"),"$iW")
this.b8=H.j(this.y.n(0,"specularClr"),"$iH")
switch(t){case C.c:break
case C.h:break
case C.e:this.d6=H.j(this.y.n(0,"specularTxt"),"$iab")
this.b9=H.j(this.y.n(0,"nullSpecularTxt"),"$iJ")
break
case C.f:this.d7=H.j(this.y.n(0,"specularTxt"),"$iac")
this.b9=H.j(this.y.n(0,"nullSpecularTxt"),"$iJ")
break}}switch(a7.f){case C.c:break
case C.h:break
case C.e:this.d8=H.j(this.y.n(0,"bumpTxt"),"$iab")
this.bb=H.j(this.y.n(0,"nullBumpTxt"),"$iJ")
break
case C.f:this.d9=H.j(this.y.n(0,"bumpTxt"),"$iac")
this.bb=H.j(this.y.n(0,"nullBumpTxt"),"$iJ")
break}if(a7.dy){this.da=H.j(this.y.n(0,"envSampler"),"$iac")
this.dc=H.j(this.y.n(0,"nullEnvTxt"),"$iJ")
t=a7.r
if(t!==C.c){this.bc=H.j(this.y.n(0,"reflectClr"),"$iH")
switch(t){case C.c:break
case C.h:break
case C.e:this.dd=H.j(this.y.n(0,"reflectTxt"),"$iab")
this.bd=H.j(this.y.n(0,"nullReflectTxt"),"$iJ")
break
case C.f:this.de=H.j(this.y.n(0,"reflectTxt"),"$iac")
this.bd=H.j(this.y.n(0,"nullReflectTxt"),"$iJ")
break}}t=a7.x
if(t!==C.c){this.be=H.j(this.y.n(0,"refraction"),"$iW")
this.bf=H.j(this.y.n(0,"refractClr"),"$iH")
switch(t){case C.c:break
case C.h:break
case C.e:this.df=H.j(this.y.n(0,"refractTxt"),"$iab")
this.bg=H.j(this.y.n(0,"nullRefractTxt"),"$iJ")
break
case C.f:this.dg=H.j(this.y.n(0,"refractTxt"),"$iac")
this.bg=H.j(this.y.n(0,"nullRefractTxt"),"$iJ")
break}}}t=a7.y
if(t!==C.c){this.bh=H.j(this.y.n(0,"alpha"),"$iW")
switch(t){case C.c:break
case C.h:break
case C.e:this.dh=H.j(this.y.n(0,"alphaTxt"),"$iab")
this.bi=H.j(this.y.n(0,"nullAlphaTxt"),"$iJ")
break
case C.f:this.di=H.j(this.y.n(0,"alphaTxt"),"$iac")
this.bi=H.j(this.y.n(0,"nullAlphaTxt"),"$iJ")
break}}this.sez(H.c([],[A.cv]))
this.seA(H.c([],[A.cx]))
this.seB(H.c([],[A.cy]))
this.seC(H.c([],[A.cz]))
this.seD(H.c([],[A.cA]))
this.seE(H.c([],[A.cB]))
if(a7.k2){t=a7.z
if(t>0){this.dj=H.o(this.y.n(0,"dirLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iH")
s=this.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iH")
s=this.bV;(s&&C.a).h(s,new A.cv(g,f,e))}}t=a7.Q
if(t>0){this.dk=H.o(this.y.n(0,"pntLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iH")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iH")
s=this.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iH")
s=this.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iW")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iW")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iW")
s=this.bW;(s&&C.a).h(s,new A.cx(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.dl=H.o(this.y.n(0,"spotLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iH")
s=this.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iH")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iH")
s=this.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iH")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iW")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iW")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iW")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iW")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$iW")
s=this.bX;(s&&C.a).h(s,new A.cy(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.dm=H.o(this.y.n(0,"txtDirLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iH")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iH")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iH")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iH")
s=this.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iH")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iJ")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iab")
s=this.bY;(s&&C.a).h(s,new A.cz(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.dn=H.o(this.y.n(0,"txtPntLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iH")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iH")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$icw")
s=this.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iH")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iJ")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iW")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iW")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iW")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$iac")
s=this.bZ;(s&&C.a).h(s,new A.cA(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.dq=H.o(this.y.n(0,"txtSpotLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iH")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iH")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iH")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iH")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iH")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iJ")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iH")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iW")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$iW")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a3,"$iW")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a4,"$iW")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a5,"$iW")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a6,"$iab")
s=this.c_;(s&&C.a).h(s,new A.cB(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
a5:function(a,b,c){C.b.R(b.a,b.d,1)},
a1:function(a,b,c){C.b.R(b.a,b.d,1)},
seP:function(a){this.r1=H.m(a,"$ib",[A.al],"$ab")},
sez:function(a){this.bV=H.m(a,"$ib",[A.cv],"$ab")},
seA:function(a){this.bW=H.m(a,"$ib",[A.cx],"$ab")},
seB:function(a){this.bX=H.m(a,"$ib",[A.cy],"$ab")},
seC:function(a){this.bY=H.m(a,"$ib",[A.cz],"$ab")},
seD:function(a){this.bZ=H.m(a,"$ib",[A.cA],"$ab")},
seE:function(a){this.c_=H.m(a,"$ib",[A.cB],"$ab")}}
A.fY.prototype={
hE:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.ag+"];\n"
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
hL:function(a){var u
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
hF:function(a){var u
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
hT:function(a){var u,t
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
hU:function(a){var u,t
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
hN:function(a){var u
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
hY:function(a){var u
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
al:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.i(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.aV(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
hI:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.al(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.h:u=t+"   return emissionClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
hD:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.al(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.h:u=t+"   return ambientClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
hG:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.al(a,u,"diffuse")
t=a.a+="vec3 diffuseColor;\n"
t+="\n"
a.a=t
t+="void setDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.h:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
hJ:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.al(a,u,"invDiffuse")
t=a.a+="vec3 invDiffuseColor;\n"
t+="\n"
a.a=t
t+="void setInvDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.h:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
hR:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.al(a,u,"specular")
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
case C.h:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
hM:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.c:break
case C.h:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.f:u+="uniform samplerCube bumpTxt;\n"
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
case C.h:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.e:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.f:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
hP:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.al(a,u,"reflect")
t=a.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.c:u=t
break
case C.h:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hQ:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.al(a,u,"refract")
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
case C.h:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hH:function(a){var u,t
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
hO:function(a){var u,t
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
hS:function(a){var u,t
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
hV:function(a){var u,t,s
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
hW:function(a){var u,t,s
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
hX:function(a){var u,t,s
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
hK:function(a){var u
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
i:function(a){return this.a6}}
A.cv.prototype={}
A.cz.prototype={}
A.cx.prototype={}
A.cA.prototype={}
A.cy.prototype={}
A.cB.prototype={}
A.cp.prototype={
ep:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cA:function(a,b){var u,t,s
u=this.a
t=C.b.il(u,b)
C.b.ec(u,t,a)
C.b.ie(u,t)
if(!H.jX(C.b.e4(u,t,35713))){s=C.b.e3(u,t)
C.b.ip(u,t)
throw H.f(P.t("Error compiling shader '"+H.k(t)+"': "+H.k(s)))}return t},
ho:function(){var u,t,s,r,q,p
u=H.c([],[A.cX])
t=this.a
s=H.a7(C.b.bn(t,this.r,35721))
if(typeof s!=="number")return H.bA(s)
r=0
for(;r<s;++r){q=C.b.dX(t,this.r,r)
p=C.b.dZ(t,this.r,q.name)
C.a.h(u,new A.cX(t,q.name,p))}this.x=new A.eV(u)},
hq:function(){var u,t,s,r,q,p
u=H.c([],[A.dQ])
t=this.a
s=H.a7(C.b.bn(t,this.r,35718))
if(typeof s!=="number")return H.bA(s)
r=0
for(;r<s;++r){q=C.b.dY(t,this.r,r)
p=C.b.e5(t,this.r,q.name)
C.a.h(u,this.im(q.type,q.size,q.name,p))}this.y=new A.ie(u)},
aw:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.J(u,t,b,c)
else return A.jP(u,t,b,a,c)},
eW:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ab(u,t,b,c)
else return A.jP(u,t,b,a,c)},
eX:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ac(u,t,b,c)
else return A.jP(u,t,b,a,c)},
b0:function(a,b){return new P.e3(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
im:function(a,b,c,d){switch(a){case 5120:return this.aw(b,c,d)
case 5121:return this.aw(b,c,d)
case 5122:return this.aw(b,c,d)
case 5123:return this.aw(b,c,d)
case 5124:return this.aw(b,c,d)
case 5125:return this.aw(b,c,d)
case 5126:return new A.W(this.a,this.r,c,d)
case 35664:return new A.i9(this.a,this.r,c,d)
case 35665:return new A.H(this.a,this.r,c,d)
case 35666:return new A.ic(this.a,this.r,c,d)
case 35667:return new A.ia(this.a,this.r,c,d)
case 35668:return new A.ib(this.a,this.r,c,d)
case 35669:return new A.id(this.a,this.r,c,d)
case 35674:return new A.ig(this.a,this.r,c,d)
case 35675:return new A.cw(this.a,this.r,c,d)
case 35676:return new A.al(this.a,this.r,c,d)
case 35678:return this.eW(b,c,d)
case 35680:return this.eX(b,c,d)
case 35670:throw H.f(this.b0("BOOL",c))
case 35671:throw H.f(this.b0("BOOL_VEC2",c))
case 35672:throw H.f(this.b0("BOOL_VEC3",c))
case 35673:throw H.f(this.b0("BOOL_VEC4",c))
default:throw H.f(P.t("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}}
A.bE.prototype={
i:function(a){return this.b}}
A.dQ.prototype={}
A.ie.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.j(0,b)
if(u==null)throw H.f(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
iD:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+a
return s},
N:function(){return this.iD("\n")}}
A.J.prototype={
i:function(a){return"Uniform1i: "+H.k(this.c)}}
A.ia.prototype={
i:function(a){return"Uniform2i: "+H.k(this.c)}}
A.ib.prototype={
i:function(a){return"Uniform3i: "+H.k(this.c)}}
A.id.prototype={
i:function(a){return"Uniform4i: "+H.k(this.c)}}
A.i8.prototype={
i:function(a){return"Uniform1iv: "+H.k(this.c)},
shB:function(a){this.e=H.m(a,"$ib",[P.B],"$ab")}}
A.W.prototype={
i:function(a){return"Uniform1f: "+H.k(this.c)}}
A.i9.prototype={
i:function(a){return"Uniform2f: "+H.k(this.c)}}
A.H.prototype={
i:function(a){return"Uniform3f: "+H.k(this.c)}}
A.ic.prototype={
i:function(a){return"Uniform4f: "+H.k(this.c)}}
A.ig.prototype={
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}}
A.cw.prototype={
a9:function(a){var u=new Float32Array(H.cP(H.m(a,"$ib",[P.y],"$ab")))
C.b.dS(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.k(this.c)}}
A.al.prototype={
a9:function(a){var u=new Float32Array(H.cP(H.m(a,"$ib",[P.y],"$ab")))
C.b.dT(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.k(this.c)}}
A.ab.prototype={
i:function(a){return"UniformSampler2D: "+H.k(this.c)}}
A.ac.prototype={
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}
F.jy.prototype={
$1:function(a){return new V.a5(Math.cos(a),Math.sin(a),0)},
$S:36}
F.jm.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.ka(t.$1(u),s)
s=J.lt(J.ka(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.R(s.a,s.b,s.c)
q=s.D(0,Math.sqrt(s.L(s)))
t=$.kK
if(t==null){t=new V.R(1,0,0)
$.kK=t
p=t}else p=t
t=q.an(!J.Z(q,p)?V.kO():p)
o=t.D(0,Math.sqrt(t.L(t)))
t=o.an(q)
p=t.D(0,Math.sqrt(t.L(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.M(0,t*s)
s=o.M(0,m*s)
s=J.ls(r,new V.a5(t.a-s.a,t.b-s.b,t.c-s.c))
if(!J.Z(a.f,s)){a.f=H.o(s,"$ia5")
t=a.a
if(t!=null)t.a_()}},
$S:37}
F.a2.prototype={
b3:function(){if(!this.gd1()){C.a.P(this.a.a.d.b,this)
this.a.a.a_()}this.ha()
this.hb()
this.hc()},
hl:function(a){this.a=a
C.a.h(a.d.b,this)},
hm:function(a){this.b=a
C.a.h(a.d.c,this)},
hn:function(a){this.c=a
C.a.h(a.d.d,this)},
ha:function(){var u=this.a
if(u!=null){C.a.P(u.d.b,this)
this.a=null}},
hb:function(){var u=this.b
if(u!=null){C.a.P(u.d.c,this)
this.b=null}},
hc:function(){var u=this.c
if(u!=null){C.a.P(u.d.d,this)
this.c=null}},
gd1:function(){return this.a==null||this.b==null||this.c==null},
eO:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cC()
if(t!=null)q=q.q(0,t)
if(s!=null)q=q.q(0,s)
if(r!=null)q=q.q(0,r)
if(q.du())return
return q.D(0,Math.sqrt(q.L(q)))},
eS:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.w(0,t)
u=new V.R(u.a,u.b,u.c)
q=u.D(0,Math.sqrt(u.L(u)))
u=r.w(0,t)
u=new V.R(u.a,u.b,u.c)
u=q.an(u.D(0,Math.sqrt(u.L(u))))
return u.D(0,Math.sqrt(u.L(u)))},
bR:function(){if(this.d!=null)return!0
var u=this.eO()
if(u==null){u=this.eS()
if(u==null)return!1}this.d=u
this.a.a.a_()
return!0},
eN:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cC()
if(t!=null)q=q.q(0,t)
if(s!=null)q=q.q(0,s)
if(r!=null)q=q.q(0,r)
if(q.du())return
return q.D(0,Math.sqrt(q.L(q)))},
eR:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.O().a){u=m.w(0,p)
u=new V.R(u.a,u.b,u.c)
h=u.D(0,Math.sqrt(u.L(u)))
if(j.a-k.a<0)h=h.aH(0)}else{g=(u-l.b)/i
u=m.w(0,p).M(0,g).q(0,p).w(0,s)
u=new V.R(u.a,u.b,u.c)
h=u.D(0,Math.sqrt(u.L(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.aH(0)}u=this.d
if(u!=null){f=u.D(0,Math.sqrt(u.L(u)))
u=f.an(h)
u=u.D(0,Math.sqrt(u.L(u))).an(f)
h=u.D(0,Math.sqrt(u.L(u)))}return h},
bP:function(){if(this.e!=null)return!0
var u=this.eN()
if(u==null){u=this.eR()
if(u==null)return!1}this.e=u
this.a.a.a_()
return!0},
gcY:function(a){if(J.Z(this.a,this.b))return!0
if(J.Z(this.b,this.c))return!0
if(J.Z(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
A:function(a){var u,t
if(this.gd1())return a+"disposed"
u=a+C.j.ap(J.aD(this.a.e),0)+", "+C.j.ap(J.aD(this.b.e),0)+", "+C.j.ap(J.aD(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
N:function(){return this.A("")}}
F.fo.prototype={}
F.hG.prototype={
c2:function(a,b,c){var u,t
u=b.a
u.a.a.J()
u=u.e
t=c.a
t.a.a.J()
if(u==t.e){u=b.b
u.a.a.J()
u=u.e
t=c.b
t.a.a.J()
if(u==t.e){u=b.c
u.a.a.J()
u=u.e
t=c.c
t.a.a.J()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.J()
u=u.e
t=c.b
t.a.a.J()
if(u==t.e){u=b.b
u.a.a.J()
u=u.e
t=c.c
t.a.a.J()
if(u==t.e){u=b.c
u.a.a.J()
u=u.e
t=c.a
t.a.a.J()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.J()
u=u.e
t=c.c
t.a.a.J()
if(u==t.e){u=b.b
u.a.a.J()
u=u.e
t=c.a
t.a.a.J()
if(u==t.e){u=b.c
u.a.a.J()
u=u.e
t=c.b
t.a.a.J()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.bs.prototype={}
F.fL.prototype={}
F.i7.prototype={}
F.bK.prototype={}
F.dE.prototype={
gC:function(){var u=this.e
if(u==null){u=D.aw()
this.e=u}return u},
aB:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aB()||!1
if(!this.a.aB())t=!1
u=this.e
if(u!=null)u.ar(0)
return t},
iN:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.c(u.slice(0),[H.x(u,0)])
for(u=[F.as];t.length!==0;){s=C.a.giA(t)
C.a.j4(t,0)
if(s!=null){r=H.c([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.C)(t),++p){o=t[p]
if(o!=null&&a.c2(0,s,o)){C.a.h(r,o)
C.a.P(t,o)}}if(r.length>1)b.iM(r)}}this.a.J()
this.c.c6()
this.d.c6()
this.b.j5()
this.c.c7(new F.i7())
this.d.c7(new F.hG())
u=this.e
if(u!=null)u.ar(0)},
i8:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.bg()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bf().a)!==0)++r
if((s&$.be().a)!==0)++r
if((s&$.bh().a)!==0)++r
if((s&$.bi().a)!==0)++r
if((s&$.cS().a)!==0)++r
if((s&$.cT().a)!==0)++r
if((s&$.c1().a)!==0)++r
if((s&$.bd().a)!==0)++r
q=a1.gce(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.y
o=H.c(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.c(t,[Z.d_])
for(m=0,l=0;l<r;++l){k=a1.i3(l)
j=k.gce(k)
C.a.U(n,l,new Z.d_(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.i(t,i)
h=t[i].iK(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.U(o,g,h[f]);++g}}m+=j}H.m(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.ae(t,34962,e)
C.b.cW(t,34962,new Float32Array(H.cP(o)),35044)
C.b.ae(t,34962,null)
d=new Z.d0(new Z.dV(34962,e),n,a1)
d.sf8(H.c([],[Z.ce]))
this.b.b
this.c.b
if(this.d.b.length!==0){s=P.B
c=H.c([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.J()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.i(b,l)
b=b[l].b
b.a.a.J()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.i(b,l)
b=b[l].c
b.a.a.J()
C.a.h(c,b.e)}a=Z.mc(t,34963,H.m(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.ce(4,c.length,a))}return d},
i:function(a){var u=H.c([],[P.e])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.A("   "))}this.b.b
this.c.b
if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.A("   "))}return C.a.m(u,"\n")},
a7:function(a){var u=this.e
if(u!=null)u.W(a)},
a_:function(){return this.a7(null)},
$in8:1}
F.hz.prototype={
i_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.as],"$ab")
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
C.a.h(u,F.fn(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.fn(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.fn(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.fn(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
c7:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.i(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.c2(0,p,n)){p.b3()
break}}}}},
c6:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.i(t,u)
s=t[u]
t=s.gcY(s)
if(t)s.b3()}},
aB:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].bR())s=!1
return s},
bQ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].bP())s=!1
return s},
i:function(a){return this.N()},
A:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].A(a))
return C.a.m(u,"\n")},
N:function(){return this.A("")},
sf2:function(a){this.b=H.m(a,"$ib",[F.a2],"$ab")}}
F.hA.prototype={
gl:function(a){return 0},
c7:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.i(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.j(0,q)}},
c6:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.i(t,u)
s=t[u]
t=s.gcY(s)
if(t)s.b3()}},
i:function(a){return this.N()},
A:function(a){var u,t,s
u=H.c([],[P.e])
for(t=0;!1;++t){s=this.b
if(t>=0)return H.i(s,t)
C.a.h(u,s[t].A(a+(""+t+". ")))}return C.a.m(u,"\n")},
N:function(){return this.A("")},
sfb:function(a){this.b=H.m(a,"$ib",[F.bs],"$ab")}}
F.hB.prototype={
gl:function(a){return 0},
j5:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.i(t,u)
t=t[u].gjv()
t=t.gjs(t)
if(t.gl(t).jn(0,1)){t=this.b
return H.i(t,u)
t[u].b3()}}},
i:function(a){return this.N()},
A:function(a){var u,t,s
u=H.c([],[P.e])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.i(t,s)
C.a.h(u,t[s].A(a))}return C.a.m(u,"\n")},
N:function(){return this.A("")},
sbE:function(a){this.b=H.m(a,"$ib",[F.bK],"$ab")}}
F.as.prototype={
d_:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.jQ(this.cx,s,p,u,t,r,q,a,o)},
iK:function(a){var u,t
if(a.t(0,$.bg())){u=this.f
t=[P.y]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bf())){u=this.r
t=[P.y]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.be())){u=this.x
t=[P.y]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bh())){u=this.y
t=[P.y]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.bi())){u=this.z
t=[P.y]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.cS())){u=this.Q
t=[P.y]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.cT())){u=this.Q
t=[P.y]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.c1()))return H.c([this.ch],[P.y])
else if(a.t(0,$.bd())){u=H.c([-1,-1,-1,-1],[P.y])
return u}else return H.c([],[P.y])},
bR:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cC()
this.d.K(0,new F.iz(u))
u=u.a
this.r=u.D(0,Math.sqrt(u.L(u)))
u=this.a
if(u!=null){u.a_()
u=this.a.e
if(u!=null)u.ar(0)}return!0},
bP:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cC()
this.d.K(0,new F.iy(u))
u=u.a
this.x=u.D(0,Math.sqrt(u.L(u)))
u=this.a
if(u!=null){u.a_()
u=this.a.e
if(u!=null)u.ar(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
A:function(a){var u,t,s
u=H.c([],[P.e])
C.a.h(u,C.j.ap(J.aD(this.e),0))
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
C.a.h(u,V.N(this.ch,3,0))
C.a.h(u,"-")
s=C.a.m(u,", ")
return a+"{"+s+"}"},
N:function(){return this.A("")}}
F.iz.prototype={
$1:function(a){var u,t
H.o(a,"$ia2")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:7}
F.iy.prototype={
$1:function(a){var u,t
H.o(a,"$ia2")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:7}
F.ip.prototype={
J:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.i(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.f(P.t("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a_()
return!0},
gl:function(a){return this.c.length},
aB:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].bR()
return!0},
bQ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].bP()
return!0},
i9:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.D(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Z(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.W(null)}}}}return!0},
i:function(a){return this.N()},
A:function(a){var u,t,s,r
this.J()
u=H.c([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].A(a))
return C.a.m(u,"\n")},
N:function(){return this.A("")},
shC:function(a){this.c=H.m(a,"$ib",[F.as],"$ab")}}
F.iq.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.i(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.i(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
K:function(a,b){H.l(b,{func:1,ret:-1,args:[F.a2]})
C.a.K(this.b,b)
C.a.K(this.c,new F.ir(this,b))
C.a.K(this.d,new F.is(this,b))},
i:function(a){return this.N()},
A:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].A(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].A(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].A(a))
return C.a.m(u,"\n")},
N:function(){return this.A("")},
sf3:function(a){this.b=H.m(a,"$ib",[F.a2],"$ab")},
sf4:function(a){this.c=H.m(a,"$ib",[F.a2],"$ab")},
sf5:function(a){this.d=H.m(a,"$ib",[F.a2],"$ab")}}
F.ir.prototype={
$1:function(a){H.o(a,"$ia2")
if(!J.Z(a.a,this.a))this.b.$1(a)},
$S:7}
F.is.prototype={
$1:function(a){var u
H.o(a,"$ia2")
u=this.a
if(!J.Z(a.a,u)&&!J.Z(a.b,u))this.b.$1(a)},
$S:7}
F.it.prototype={
gl:function(a){return 0},
j:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.i(u,t)
return u[t]}else{u=this.b
return H.i(u,b)
return u[b]}},
i:function(a){return this.N()},
A:function(a){var u,t,s
u=H.c([],[P.e])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.i(t,s)
C.a.h(u,t[s].A(a))}for(t=this.c,s=0;!1;++s){if(s>=0)return H.i(t,s)
C.a.h(u,t[s].A(a))}return C.a.m(u,"\n")},
N:function(){return this.A("")},
sfc:function(a){this.b=H.m(a,"$ib",[F.bs],"$ab")},
sfd:function(a){this.c=H.m(a,"$ib",[F.bs],"$ab")}}
F.iv.prototype={}
F.iu.prototype={
c2:function(a,b,c){return J.Z(b.f,c.f)}}
F.iw.prototype={}
F.hf.prototype={
iM:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[F.as],"$ab")
u=V.cC()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.R(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.D(0,Math.sqrt(u.L(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.D(0,Math.sqrt(o*o+n*n+m*m))}if(!J.Z(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.W(null)}}}return}}
F.ix.prototype={
gl:function(a){return 0},
i:function(a){return this.N()},
A:function(a){var u,t,s
u=H.c([],[P.e])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.i(t,s)
C.a.h(u,t[s].A(a))}return C.a.m(u,"\n")},
N:function(){return this.A("")},
sbE:function(a){this.b=H.m(a,"$ib",[F.bK],"$ab")}}
O.dm.prototype={
gC:function(){var u=this.dy
if(u==null){u=D.aw()
this.dy=u}return u},
a0:function(a){var u
H.o(a,"$iG")
u=this.dy
if(u!=null)u.W(a)},
eH:function(){return this.a0(null)},
cL:function(a){H.o(a,"$iG")
this.a=null
this.a0(a)},
hg:function(){return this.cL(null)},
fk:function(a,b){var u=V.a9
u=new D.cf(a,H.m(b,"$ih",[u],"$ah"),this,[u])
u.b=!0
this.a0(u)},
fm:function(a,b){var u=V.a9
u=new D.cg(a,H.m(b,"$ih",[u],"$ah"),this,[u])
u.b=!0
this.a0(u)},
cv:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.i.X(u.e.length+3,4)*4
s=C.i.X(u.f.length+3,4)*4
r=C.i.X(u.r.length+3,4)*4
q=C.i.X(u.x.length+3,4)*4
p=C.i.X(u.y.length+3,4)*4
o=C.i.X(u.z.length+3,4)*4
n=C.i.X(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.i.i(u.a)+C.i.i(m.a)+C.i.i(l.a)+C.i.i(k.a)+C.i.i(j.a)+C.i.i(i.a)+C.i.i(h.a)+C.i.i(g.a)+C.i.i(f.a)
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
a2=u===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e||g===C.e||f===C.e
a3=u===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f||h===C.f||g===C.f||f===C.f
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.bg()
if(a0){b=$.bf()
a7=new Z.aY(a7.a|b.a)}if(a1){b=$.be()
a7=new Z.aY(a7.a|b.a)}if(a2){b=$.bh()
a7=new Z.aY(a7.a|b.a)}if(a3){b=$.bi()
a7=new Z.aY(a7.a|b.a)}if(a5){b=$.bd()
a7=new Z.aY(a7.a|b.a)}return new A.fY(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
S:function(a,b){H.m(a,"$ib",[T.dK],"$ab")},
bl:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ap(u,u.length,0,[H.x(u,0)]);u.v();){t=u.d
t.toString
s=$.io
if(s==null){s=new V.R(0,0,1)
$.io=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.c9(s)}}},
j7:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.cv()
t=a4.fr.j(0,u.a6)
if(t==null){t=A.lU(u,a4.a)
s=t.b
if(s.length===0)H.r(P.t("May not cache a shader with no name."))
if(a4.fr.cZ(0,s))H.r(P.t('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.U(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.b4
u=a5.e
if(!(u instanceof Z.d0)){a5.e=null
u=null}if(u==null||!u.d.t(0,q)){u=r.r1
if(u)a5.d.aB()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.bQ()
o.a.bQ()
o=o.e
if(o!=null)o.ar(0)}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.i9()
n=n.e
if(n!=null)n.ar(0)}l=a5.d.i8(new Z.iB(a4.a),q)
l.aC($.bg()).e=this.a.Q.c
if(u)l.aC($.bf()).e=this.a.cx.c
if(p)l.aC($.be()).e=this.a.ch.c
if(r.rx)l.aC($.bh()).e=this.a.cy.c
if(o)l.aC($.bi()).e=this.a.db.c
if(r.x1)l.aC($.bd()).e=this.a.dx.c
a5.e=l}u=T.dK
k=H.c([],[u])
p=this.a
o=a4.a
C.b.dU(o,p.r)
p.x.iy()
if(r.fx){p=this.a
n=a4.dx
n=n.gV(n)
p=p.dy
p.toString
p.a9(n.a4(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db
n=n.gV(n)
m=a4.dx
m=n.M(0,m.gV(m))
a4.cx=m
n=m}p=p.fr
p.toString
p.a9(n.a4(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gj2()
m=a4.dx
m=n.M(0,m.gV(m))
a4.ch=m
n=m}p=p.fy
p.toString
p.a9(n.a4(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.a9(C.q.a4(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.a9(C.q.a4(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.a9(C.q.a4(n,!0))}if(r.ag>0){j=this.e.a.length
p=this.a.k4
C.b.R(p.a,p.d,j)
for(p=[P.y],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.i(m,i)
m=m[i]
n.toString
H.o(m,"$ia9")
n=n.r1
if(i>=n.length)return H.i(n,i)
n=n[i]
h=new Float32Array(H.cP(H.m(m.a4(0,!0),"$ib",p,"$ab")))
C.b.dT(n.a,n.d,!1,h)}}switch(r.a){case C.c:break
case C.h:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.e:this.S(k,this.f.d)
p=this.a
n=this.f.d
p.a5(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.f:this.S(k,this.f.e)
p=this.a
n=this.f.e
p.a1(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.c:break
case C.h:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.e:this.S(k,this.r.d)
p=this.a
n=this.r.d
p.a5(p.y1,p.ag,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.f:this.S(k,this.r.e)
p=this.a
n=this.r.e
p.a1(p.y2,p.ag,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}switch(r.c){case C.c:break
case C.h:p=this.a
n=this.x.f
p=p.a6
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.e:this.S(k,this.x.d)
p=this.a
n=this.x.d
p.a5(p.b4,p.b5,n)
n=this.a
p=this.x.f
n=n.a6
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.f:this.S(k,this.x.e)
p=this.a
n=this.x.e
p.a1(p.d3,p.b5,n)
n=this.a
p=this.x.f
n=n.a6
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}switch(r.d){case C.c:break
case C.h:p=this.a
n=this.y.f
p=p.b6
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.e:this.S(k,this.y.d)
p=this.a
n=this.y.d
p.a5(p.d4,p.b7,n)
n=this.a
p=this.y.f
n=n.b6
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.f:this.S(k,this.y.e)
p=this.a
n=this.y.e
p.a1(p.d5,p.b7,n)
n=this.a
p=this.y.f
n=n.b6
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}switch(r.e){case C.c:break
case C.h:p=this.a
n=this.z.f
p=p.b8
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.ba
C.b.H(n.a,n.d,g)
break
case C.e:this.S(k,this.z.d)
p=this.a
n=this.z.d
p.a5(p.d6,p.b9,n)
n=this.a
p=this.z.f
n=n.b8
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.ba
C.b.H(p.a,p.d,g)
break
case C.f:this.S(k,this.z.e)
p=this.a
n=this.z.e
p.a1(p.d7,p.b9,n)
n=this.a
p=this.z.f
n=n.b8
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.ba
C.b.H(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.dj
C.b.R(p.a,p.d,j)
p=a4.db
f=p.gV(p)
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.bV
if(e>=m.length)return H.i(m,e)
b=m[e]
m=f.c9(c.a)
g=m.a
a=m.b
a0=m.c
a0=m.D(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.p(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.b.p(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.dk
C.b.R(p.a,p.d,j)
p=a4.db
f=p.gV(p)
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.bW
if(e>=m.length)return H.i(m,e)
b=m[e]
m=c.gaR(c)
g=b.b
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=f.aT(c.gaR(c))
g=b.c
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gaf(c)
g=b.d
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gbK()
g=b.e
C.b.H(g.a,g.d,m)
m=c.gbL()
g=b.f
C.b.H(g.a,g.d,m)
m=c.gbM()
g=b.r
C.b.H(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.dl
C.b.R(p.a,p.d,j)
p=a4.db
f=p.gV(p)
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.bX
if(e>=m.length)return H.i(m,e)
b=m[e]
m=c.gaR(c)
g=b.b
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gbT(c).jr()
g=b.c
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=f.aT(c.gaR(c))
g=b.d
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gaf(c)
g=b.e
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gjq()
g=b.f
C.b.H(g.a,g.d,m)
m=c.gjp()
g=b.r
C.b.H(g.a,g.d,m)
m=c.gbK()
g=b.x
C.b.H(g.a,g.d,m)
m=c.gbL()
g=b.y
C.b.H(g.a,g.d,m)
m=c.gbM()
g=b.z
C.b.H(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.dm
C.b.R(p.a,p.d,j)
p=a4.db
f=p.gV(p)
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
g=this.a.bY
if(e>=g.length)return H.i(g,e)
b=g[e]
g=c.gaS()
H.m(k,"$ib",m,"$ab")
if(!C.a.T(k,g)){g.saM(0,k.length)
C.a.h(k,g)}g=c.gbT(c)
a=b.d
C.b.p(a.a,a.d,g.a,g.b,g.c)
g=c.gjj()
a=b.b
C.b.p(a.a,a.d,g.a,g.b,g.c)
g=c.gja(c)
a=b.c
C.b.p(a.a,a.d,g.a,g.b,g.c)
g=f.c9(c.gbT(c))
a=g.a
a0=g.b
a1=g.c
a1=g.D(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.p(a0.a,a0.d,a,g,a1)
a1=c.gaf(c)
g=b.f
C.b.p(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gaS()
g=a1.gaN(a1)
if(!g){g=b.x
C.b.R(g.a,g.d,1)}else{g=b.r
a=a1.gaN(a1)
a0=g.a
g=g.d
if(!a)C.b.R(a0,g,0)
else C.b.R(a0,g,a1.gaM(a1))
g=b.x
C.b.R(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.dn
C.b.R(p.a,p.d,j)
p=a4.db
f=p.gV(p)
for(p=this.dx.y,n=p.length,m=[P.y],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
a=this.a.bZ
if(e>=a.length)return H.i(a,e)
b=a[e]
a=c.gaS()
H.m(k,"$ib",g,"$ab")
if(!C.a.T(k,a)){a.saM(0,k.length)
C.a.h(k,a)}a2=f.M(0,c.gV(c))
a=c.gV(c)
a0=$.cm
if(a0==null){a0=new V.a5(0,0,0)
$.cm=a0}a0=a.aT(a0)
a=b.b
C.b.p(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cm
if(a==null){a=new V.a5(0,0,0)
$.cm=a}a=a2.aT(a)
a0=b.c
C.b.p(a0.a,a0.d,a.a,a.b,a.c)
a=a2.dt(0)
a0=b.d
h=new Float32Array(H.cP(H.m(new V.dp(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).a4(0,!0),"$ib",m,"$ab")))
C.b.dS(a0.a,a0.d,!1,h)
a0=c.gaf(c)
a=b.e
C.b.p(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gaS()
a=a0.gaN(a0)
if(!a){a=b.r
C.b.R(a.a,a.d,1)}else{a=b.f
a1=a0.gaN(a0)
a3=a.a
a=a.d
if(!a1)C.b.R(a3,a,0)
else C.b.R(a3,a,a0.gaM(a0))
a=b.r
C.b.R(a.a,a.d,0)}a=c.gbK()
a0=b.x
C.b.H(a0.a,a0.d,a)
a=c.gbL()
a0=b.y
C.b.H(a0.a,a0.d,a)
a=c.gbM()
a0=b.z
C.b.H(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.dq
C.b.R(p.a,p.d,j)
p=a4.db
f=p.gV(p)
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.c_
if(e>=m.length)return H.i(m,e)
b=m[e]
m=c.gaS()
H.m(k,"$ib",u,"$ab")
if(!C.a.T(k,m)){m.saM(0,k.length)
C.a.h(k,m)}m=c.gaR(c)
g=b.b
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gbT(c)
g=b.c
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gjj()
g=b.d
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gja(c)
g=b.e
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=f.aT(c.gaR(c))
g=b.f
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gaS()
g=m.gaN(m)
if(!g){m=b.x
C.b.R(m.a,m.d,1)}else{g=b.r
a=m.gaN(m)
a0=g.a
g=g.d
if(!a)C.b.R(a0,g,0)
else C.b.R(a0,g,m.gaM(m))
m=b.x
C.b.R(m.a,m.d,0)}m=c.gaf(c)
g=b.y
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gjt()
g=b.z
C.b.H(g.a,g.d,m)
m=c.gju()
g=b.Q
C.b.H(g.a,g.d,m)
m=c.gbK()
g=b.ch
C.b.H(g.a,g.d,m)
m=c.gbL()
g=b.cx
C.b.H(g.a,g.d,m)
m=c.gbM()
g=b.cy
C.b.H(g.a,g.d,m);++e}}}switch(r.f){case C.c:break
case C.h:break
case C.e:this.S(k,this.Q.d)
u=this.a
p=this.Q.d
u.a5(u.d8,u.bb,p)
break
case C.f:this.S(k,this.Q.e)
u=this.a
p=this.Q.e
u.a1(u.d9,u.bb,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db
p=p.gV(p).dt(0)
a4.Q=p}u=u.id
u.toString
u.a9(p.a4(0,!0))}if(r.dy){this.S(k,this.ch)
u=this.a
p=this.ch
u.a1(u.da,u.dc,p)
switch(r.r){case C.c:break
case C.h:u=this.a
p=this.cx.f
u=u.bc
u.toString
n=p.a
m=p.b
p=p.c
C.b.p(u.a,u.d,n,m,p)
break
case C.e:this.S(k,this.cx.d)
u=this.a
p=this.cx.d
u.a5(u.dd,u.bd,p)
p=this.a
u=this.cx.f
p=p.bc
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
break
case C.f:this.S(k,this.cx.e)
u=this.a
p=this.cx.e
u.a1(u.de,u.bd,p)
p=this.a
u=this.cx.f
p=p.bc
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
break}switch(r.x){case C.c:break
case C.h:u=this.a
p=this.cy.f
u=u.bf
u.toString
n=p.a
m=p.b
p=p.c
C.b.p(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.be
C.b.H(p.a,p.d,m)
break
case C.e:this.S(k,this.cy.d)
u=this.a
p=this.cy.d
u.a5(u.df,u.bg,p)
p=this.a
u=this.cy.f
p=p.bf
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.be
C.b.H(u.a,u.d,m)
break
case C.f:this.S(k,this.cy.e)
u=this.a
p=this.cy.e
u.a1(u.dg,u.bg,p)
p=this.a
u=this.cy.f
p=p.bf
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.be
C.b.H(u.a,u.d,m)
break}}u=r.y
p=u!==C.c
if(p){switch(u){case C.c:break
case C.h:u=this.a
n=this.db.f
u=u.bh
C.b.H(u.a,u.d,n)
break
case C.e:this.S(k,this.db.d)
u=this.a
n=this.db.d
u.a5(u.dh,u.bi,n)
n=this.a
u=this.db.f
n=n.bh
C.b.H(n.a,n.d,u)
break
case C.f:this.S(k,this.db.e)
u=this.a
n=this.db.e
u.a1(u.di,u.bi,n)
n=this.a
u=this.db.f
n=n.bh
C.b.H(n.a,n.d,u)
break}C.b.bU(o,3042)
C.b.i7(o,770,771)}for(i=0;i<k.length;++i)k[i].b1(a4)
u=a5.e
u.b1(a4)
u.aE(a4)
u.dR(a4)
if(p)C.b.it(o,3042)
for(i=0;i<k.length;++i)k[i].dR(a4)
u=this.a
u.toString
C.b.dU(o,null)
u.x.iu()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cv().a6},
seQ:function(a){this.e=H.m(a,"$ia_",[V.a9],"$aa_")}}
O.fW.prototype={}
O.dn.prototype={
ay:function(){}}
O.fX.prototype={}
O.aO.prototype={
cN:function(a){var u,t
if(!J.Z(this.f,a)){u=this.f
this.f=a
t=new D.V(this.b+".color",u,a,this,[V.Y])
t.b=!0
this.a.a0(t)}},
ay:function(){this.ej()
this.cN(new V.Y(1,1,1))},
saf:function(a,b){var u
if(this.c===C.c){this.c=C.h
this.ay()
u=this.a
u.a=null
u.a0(null)}this.cN(b)}}
O.fZ.prototype={
hk:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.O().a)){this.ch=a
u=new D.V(this.b+".refraction",u,a,this,[P.y])
u.b=!0
this.a.a0(u)}},
ay:function(){this.bs()
this.hk(1)}}
O.h_.prototype={
bH:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.O().a)){this.ch=a
u=new D.V(this.b+".shininess",u,a,this,[P.y])
u.b=!0
this.a.a0(u)}},
ay:function(){this.bs()
this.bH(100)}}
O.bR.prototype={}
T.dK.prototype={}
T.hW.prototype={}
V.b0.prototype={
ao:function(a,b){return!0},
i:function(a){return"all"},
$iaj:1}
V.aj.prototype={}
V.dl.prototype={
ao:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].ao(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sY:function(a){this.a=H.m(a,"$ib",[V.aj],"$ab")},
$iaj:1}
V.af.prototype={
ao:function(a,b){return!this.ei(0,b)},
i:function(a){return"!["+this.cf(0)+"]"}}
V.ho.prototype={
ao:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.jL(this.a)
t=H.jL(this.b)
return u+".."+t},
$iaj:1}
V.hy.prototype={
eo:function(a){var u,t
if(a.a.length<=0)throw H.f(P.t("May not create a SetMatcher with zero characters."))
u=new H.aM([P.B,P.M])
for(t=new H.ch(a,a.gl(a),0,[H.ai(a,"w",0)]);t.v();)u.U(0,t.d,!0)
this.shj(u)},
ao:function(a,b){return this.a.cZ(0,b)},
i:function(a){var u=this.a
return P.jN(new H.di(u,[H.x(u,0)]),0,null)},
shj:function(a){this.a=H.m(a,"$iL",[P.B,P.M],"$aL")},
$iaj:1}
V.cq.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cu(this.a.k(0,b))
r.sY(H.c([],[V.aj]))
r.c=!1
C.a.h(this.c,r)
return r},
iz:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.ao(0,a))return r}return},
i:function(a){return this.b},
shx:function(a){this.c=H.m(a,"$ib",[V.cu],"$ab")}}
V.dP.prototype={
i:function(a){var u,t
u=H.k5(this.b,"\n","\\n")
t=H.k5(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.ct.prototype={
aq:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.C)(c),++t){s=c[t]
this.c.U(0,s,b)}},
i:function(a){return this.b},
shd:function(a){var u=P.e
this.c=H.m(a,"$iL",[u,u],"$aL")}}
V.hZ.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cq(this,b)
u.shx(H.c([],[V.cu]))
u.d=null
this.a.U(0,b,u)}return u},
G:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.ct(this,a)
t=P.e
u.shd(new H.aM([t,t]))
this.b.U(0,a,u)}return u},
dP:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.dP])
t=this.c
s=[P.B]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.av(a,o)
m=t.iz(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.jN(r,0,null)
throw H.f(P.t("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.jN(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dP(j==null?k.b:j,l,o)}++o}}},
shu:function(a){this.a=H.m(a,"$iL",[P.e,V.cq],"$aL")},
shw:function(a){this.b=H.m(a,"$iL",[P.e,V.ct],"$aL")}}
V.cu.prototype={
i:function(a){return this.b.b+": "+this.cf(0)}}
X.d2.prototype={$ib8:1}
X.fw.prototype={
gC:function(){var u=this.x
if(u==null){u=D.aw()
this.x=u}return u}}
X.dv.prototype={
gC:function(){var u=this.f
if(u==null){u=D.aw()
this.f=u}return u},
au:function(a){var u
H.o(a,"$iG")
u=this.f
if(u!=null)u.W(a)},
eK:function(){return this.au(null)},
saO:function(a){var u,t
if(!J.Z(this.b,a)){u=this.b
if(u!=null)u.gC().P(0,this.gcl())
t=this.b
this.b=a
if(a!=null)a.gC().h(0,this.gcl())
u=new D.V("mover",t,this.b,this,[U.bJ])
u.b=!0
this.au(u)}},
$ib8:1,
$id2:1}
X.dJ.prototype={}
V.bl.prototype={
aX:function(a){this.b=new P.fA(C.L)
this.c=null
this.sbz(H.c([],[[P.b,W.aq]]))},
E:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.c([],[W.aq]))
t=a.split("\n")
for(u=t.length,s=[W.aq],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.c([],s))
o=document.createElement("div")
o.className="codePart"
H.E(p)
n=this.b.eV(p,0,p.length)
m=n==null?p:n
C.k.e9(o,H.k5(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gbj(this.d),o)}},
dE:function(a,b){var u,t,s,r
H.m(b,"$ib",[P.e],"$ab")
this.sbz(H.c([],[[P.b,W.aq]]))
u=C.a.m(b,"\n")
t=this.c
if(t==null){t=this.b2()
this.c=t}for(t=t.dP(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)this.bk(t[r])},
sbz:function(a){this.d=H.m(a,"$ib",[[P.b,W.aq]],"$ab")}}
V.jx.prototype={
$1:function(a){H.o(a,"$iaV")
P.k4(C.d.dO(this.a.giE(),2)+" fps")},
$S:38}
V.f9.prototype={
bk:function(a){switch(a.a){case"Class":this.E(a.b,"#551")
break
case"Comment":this.E(a.b,"#777")
break
case"Id":this.E(a.b,"#111")
break
case"Num":this.E(a.b,"#191")
break
case"Reserved":this.E(a.b,"#119")
break
case"String":this.E(a.b,"#171")
break
case"Symbol":this.E(a.b,"#616")
break
case"Type":this.E(a.b,"#B11")
break
case"Whitespace":this.E(a.b,"#111")
break}},
b2:function(){var u,t,s,r
u=V.i_()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.v(new H.q("_"))
C.a.h(t.a,s)
s=V.T("a","z")
C.a.h(t.a,s)
s=V.T("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.v(new H.q("_"))
C.a.h(s.a,t)
t=V.T("0","9")
C.a.h(s.a,t)
t=V.T("a","z")
C.a.h(s.a,t)
t=V.T("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.T("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.T("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.v(new H.q("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.T("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.T("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.v(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.v(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"OpenDoubleStr")
t=V.v(new H.q('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenDoubleStr").m(0,"CloseDoubleStr")
s=V.v(new H.q('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenDoubleStr").m(0,"EscDoubleStr")
t=V.v(new H.q("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscDoubleStr").m(0,"OpenDoubleStr")
s=V.v(new H.q('"'))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.b0())
s=u.k(0,"Start").m(0,"OpenSingleStr")
t=V.v(new H.q("'"))
C.a.h(s.a,t)
t=u.k(0,"OpenSingleStr").m(0,"CloseSingleStr")
s=V.v(new H.q("'"))
C.a.h(t.a,s)
s=u.k(0,"OpenSingleStr").m(0,"EscSingleStr")
t=V.v(new H.q("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscSingleStr").m(0,"OpenSingleStr")
s=V.v(new H.q("'"))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.b0())
s=u.k(0,"Start").m(0,"Slash")
t=V.v(new H.q("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.v(new H.q("/"))
C.a.h(t.a,s)
s=u.k(0,"Comment").m(0,"EndComment")
t=V.v(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.af()
r=[V.aj]
s.sY(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"MLComment")
s=V.v(new H.q("*"))
C.a.h(t.a,s)
s=u.k(0,"MLComment").m(0,"MLCStar")
t=V.v(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"MLComment")
s=new V.af()
s.sY(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"EndComment")
s=V.v(new H.q("/"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Whitespace")
t=V.v(new H.q(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Whitespace").m(0,"Whitespace")
s=V.v(new H.q(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Int")
s.d=s.a.G("Num")
s=u.k(0,"Float")
s.d=s.a.G("Num")
s=u.k(0,"Sym")
s.d=s.a.G("Symbol")
s=u.k(0,"CloseDoubleStr")
s.d=s.a.G("String")
s=u.k(0,"CloseSingleStr")
s.d=s.a.G("String")
s=u.k(0,"EndComment")
s.d=s.a.G("Comment")
s=u.k(0,"Whitespace")
s.d=s.a.G("Whitespace")
s=u.k(0,"Id")
t=s.a.G("Id")
s.d=t
s=[P.e]
t.aq(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aq(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aq(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.fx.prototype={
bk:function(a){switch(a.a){case"Builtin":this.E(a.b,"#411")
break
case"Comment":this.E(a.b,"#777")
break
case"Id":this.E(a.b,"#111")
break
case"Num":this.E(a.b,"#191")
break
case"Preprocess":this.E(a.b,"#737")
break
case"Reserved":this.E(a.b,"#119")
break
case"Symbol":this.E(a.b,"#611")
break
case"Type":this.E(a.b,"#171")
break
case"Whitespace":this.E(a.b,"#111")
break}},
b2:function(){var u,t,s,r
u=V.i_()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.v(new H.q("_"))
C.a.h(t.a,s)
s=V.T("a","z")
C.a.h(t.a,s)
s=V.T("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.v(new H.q("_"))
C.a.h(s.a,t)
t=V.T("0","9")
C.a.h(s.a,t)
t=V.T("a","z")
C.a.h(s.a,t)
t=V.T("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.T("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.T("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.v(new H.q("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.T("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.T("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.v(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.v(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Slash")
t=V.v(new H.q("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.v(new H.q("/"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Slash").m(0,"Sym").a,new V.b0())
s=u.k(0,"Comment").m(0,"EndComment")
t=V.v(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.af()
r=[V.aj]
s.sY(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Preprocess")
s=V.v(new H.q("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"Preprocess")
t=new V.af()
t.sY(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.q("\n"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"EndPreprocess")
t=V.v(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Whitespace")
s=V.v(new H.q(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Whitespace").m(0,"Whitespace")
t=V.v(new H.q(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Int")
t.d=t.a.G("Num")
t=u.k(0,"Float")
t.d=t.a.G("Num")
t=u.k(0,"Sym")
t.d=t.a.G("Symbol")
t=u.k(0,"EndComment")
t.d=t.a.G("Comment")
t=u.k(0,"EndPreprocess")
t.d=t.a.G("Preprocess")
t=u.k(0,"Whitespace")
t.d=t.a.G("Whitespace")
t=u.k(0,"Id")
s=t.a.G("Id")
t.d=s
t=[P.e]
s.aq(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aq(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aq(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return u}}
V.fy.prototype={
bk:function(a){switch(a.a){case"Attr":this.E(a.b,"#911")
this.E("=","#111")
break
case"Id":this.E(a.b,"#111")
break
case"Other":this.E(a.b,"#111")
break
case"Reserved":this.E(a.b,"#119")
break
case"String":this.E(a.b,"#171")
break
case"Symbol":this.E(a.b,"#616")
break}},
b2:function(){var u,t,s
u=V.i_()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.v(new H.q("_"))
C.a.h(t.a,s)
s=V.T("a","z")
C.a.h(t.a,s)
s=V.T("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.v(new H.q("_"))
C.a.h(s.a,t)
t=V.T("0","9")
C.a.h(s.a,t)
t=V.T("a","z")
C.a.h(s.a,t)
t=V.T("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Id").m(0,"Attr")
s=V.v(new H.q("="))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Sym")
s=V.v(new H.q("</\\-!>="))
C.a.h(t.a,s)
s=u.k(0,"Sym").m(0,"Sym")
t=V.v(new H.q("</\\-!>="))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"OpenStr")
s=V.v(new H.q('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenStr").m(0,"CloseStr")
t=V.v(new H.q('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenStr").m(0,"EscStr")
s=V.v(new H.q("\\"))
C.a.h(t.a,s)
s=u.k(0,"EscStr").m(0,"OpenStr")
t=V.v(new H.q('"'))
C.a.h(s.a,t)
C.a.h(u.k(0,"OpenStr").m(0,"OpenStr").a,new V.b0())
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.b0())
t=u.k(0,"Other").m(0,"Other")
s=new V.af()
s.sY(H.c([],[V.aj]))
C.a.h(t.a,s)
t=V.v(new H.q('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.T("a","z")
C.a.h(s.a,t)
t=V.T("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.G("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.G("String")
t=u.k(0,"Id")
s=t.a.G("Id")
t.d=s
s.aq(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
s=u.k(0,"Attr")
s.d=s.a.G("Attr")
s=u.k(0,"Other")
s.d=s.a.G("Other")
return u}}
V.hl.prototype={
dE:function(a,b){H.m(b,"$ib",[P.e],"$ab")
this.sbz(H.c([],[[P.b,W.aq]]))
this.E(C.a.m(b,"\n"),"#111")},
bk:function(a){},
b2:function(){return}}
V.hC.prototype={
eq:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.n).u(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.n.u(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.u(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.u(q,p)}o=u.createElement("div")
this.a=o
C.k.u(q,o)
this.b=null
o=W.n
W.a6(u,"scroll",H.l(new V.hE(s),{func:1,ret:-1,args:[o]}),!1,o)},
cS:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.e],"$ab")
this.hp()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dP(C.a.iI(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.u(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.u(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.u(t,o)
break
case"Link":n=p.b
if(H.mX(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.i(m,1)
l.href=H.E(m[1])
l.textContent=H.E(m[0])
C.k.u(t,l)}else{k=P.kT(C.A,n,C.w,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.k.u(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.u(t,o)
break}}C.k.u(this.a,t)},
e_:function(a){var u,t,s,r
u=new V.f9("dart")
u.aX("dart")
t=new V.fx("glsl")
t.aX("glsl")
s=new V.fy("html")
s.aX("html")
r=C.a.iB(H.c([u,t,s],[V.bl]),new V.hF(a))
if(r!=null)return r
u=new V.hl("plain")
u.aX("plain")
return u},
cR:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.m(a7,"$ib",[P.e],"$ab")
u=H.c([],[P.B])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.k0(r).bq(r,"+")){C.a.U(a7,s,C.j.aV(r,1))
C.a.h(u,1)
t=!0}else if(C.j.bq(r,"-")){C.a.U(a7,s,C.j.aV(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.e_(a5)
q.dE(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.u(o,n)
C.k.u(this.a,o)
m=P.kT(C.A,a4,C.w,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kd(null)
i.href="#"+m
i.textContent=a4
C.k.u(j,i)
C.u.u(k,j)
C.m.u(l,k)
C.o.u(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.i(u,s)
b=u[s]
if(b===0){++g;++h
d.textContent=""+g
c.textContent=""+h}else if(b>0){e.className="codeTableRow codeLineLightGreen"
d.className="codeLineNums codeLineGreen codeLineCenter"
c.className="codeLineNums codeLineGreen";++h
d.textContent="+"
c.textContent=""+h}else if(b<0){e.className="codeTableRow codeLineLightRed"
d.className="codeLineNums codeLineRed"
c.className="codeLineNums codeLineRed codeLineCenter";++g
d.textContent=""+g
c.textContent="-"}a=p.createElement("td")
a.className="codeLineText"
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.C)(r),++a0)C.u.u(a,r[a0])
C.m.u(e,d)
C.m.u(e,c)
C.m.u(e,a)
C.o.u(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.C)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gO(r);a3.v();)C.u.u(c,a3.gF(a3))
C.m.u(e,d)
C.m.u(e,c)
C.o.u(n,e)}},
hp:function(){var u,t,s,r
if(this.b!=null)return
u=V.i_()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Bold")
s=V.v(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").m(0,"Bold")
s=new V.af()
r=[V.aj]
s.sY(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,"Bold").m(0,"BoldEnd")
s=V.v(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Italic")
s=V.v(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Italic").m(0,"Italic")
s=new V.af()
s.sY(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.q("_"))
C.a.h(s.a,t)
t=u.k(0,"Italic").m(0,"ItalicEnd")
s=V.v(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Code")
s=V.v(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Code").m(0,"Code")
s=new V.af()
s.sY(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.q("`"))
C.a.h(s.a,t)
t=u.k(0,"Code").m(0,"CodeEnd")
s=V.v(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"LinkHead")
s=V.v(new H.q("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"LinkHead").m(0,"LinkTail")
s=V.v(new H.q("|"))
C.a.h(t.a,s)
s=u.k(0,"LinkHead").m(0,"LinkEnd")
t=V.v(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkHead").m(0,"LinkHead")
t=new V.af()
t.sY(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").m(0,"LinkEnd")
t=V.v(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").m(0,"LinkTail")
t=new V.af()
t.sY(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.b0())
s=u.k(0,"Other").m(0,"Other")
t=new V.af()
t.sY(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.q("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.G("Bold")
s=u.k(0,"ItalicEnd")
s.d=s.a.G("Italic")
s=u.k(0,"CodeEnd")
s.d=s.a.G("Code")
s=u.k(0,"LinkEnd")
s.d=s.a.G("Link")
s=u.k(0,"Other")
s.d=s.a.G("Other")
this.b=u}}
V.hE.prototype={
$1:function(a){P.kE(C.p,new V.hD(this.a))},
$S:39}
V.hD.prototype={
$0:function(){var u,t,s
u=C.d.a8(document.documentElement.scrollTop)
t=this.a.style
s=H.k(-0.01*u)+"px"
t.top=s},
$S:1}
V.hF.prototype={
$1:function(a){return H.o(a,"$ibl").a===this.a},
$S:40}
X.ju.prototype={
$1:function(a){var u,t,s,r
H.o(a,"$iG")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.cR("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.cR("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.a.prototype
u.ef=u.i
u=J.df.prototype
u.eh=u.i
u=P.h.prototype
u.eg=u.bm
u=W.Q.prototype
u.br=u.a2
u=W.eo.prototype
u.ek=u.ad
u=O.dn.prototype
u.ej=u.ay
u=O.aO.prototype
u.bs=u.ay
u=V.dl.prototype
u.ei=u.ao
u.cf=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mv","me",8)
u(P,"mw","mf",8)
u(P,"mx","mg",8)
t(P,"l1","mu",2)
s(W,"mH",4,null,["$4"],["mi"],17,0)
s(W,"mI",4,null,["$4"],["mj"],17,0)
var m
r(m=E.ae.prototype,"gdC",0,0,null,["$1","$0"],["dD","iU"],0,0)
r(m,"gdA",0,0,null,["$1","$0"],["dB","iT"],0,0)
r(m,"gdw",0,0,null,["$1","$0"],["dz","iQ"],0,0)
q(m,"giO","iP",5)
q(m,"giR","iS",5)
r(m=E.dO.prototype,"gci",0,0,null,["$1","$0"],["ck","cj"],0,0)
p(m,"gj8","dJ",2)
o(m=X.dU.prototype,"gfC","fD",9)
o(m,"gfn","fo",9)
o(m,"gfu","fv",3)
o(m,"gfG","fH",11)
o(m,"gfE","fF",11)
o(m,"gfK","fL",3)
o(m,"gfO","fP",3)
o(m,"gfA","fB",3)
o(m,"gfM","fN",3)
o(m,"gfw","fz",3)
o(m,"gfQ","fR",34)
o(m,"gfS","fT",9)
o(m,"gh2","h3",10)
o(m,"gfZ","h_",10)
o(m,"gh0","h1",10)
r(D.bo.prototype,"gev",0,0,null,["$1","$0"],["ai","ew"],0,0)
r(m=D.dh.prototype,"gcG",0,0,null,["$1","$0"],["cH","fI"],0,0)
o(m,"gfV","fW",35)
q(m,"gfh","fi",19)
q(m,"gfX","fY",19)
n(V.aC.prototype,"gl","c1",20)
n(V.R.prototype,"gl","c1",20)
r(m=M.d8.prototype,"gaa",0,0,null,["$1","$0"],["aj","ey"],0,0)
q(m,"gfp","fq",5)
q(m,"gfs","ft",5)
r(m=O.dm.prototype,"geG",0,0,null,["$1","$0"],["a0","eH"],0,0)
r(m,"ghf",0,0,null,["$1","$0"],["cL","hg"],0,0)
q(m,"gfj","fk",22)
q(m,"gfl","fm",22)
r(X.dv.prototype,"gcl",0,0,null,["$1","$0"],["au","eK"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.K,null)
s(P.K,[H.jI,J.a,J.ap,P.eb,P.h,H.ch,P.aL,H.bG,H.dT,H.hp,H.i4,P.bp,H.c6,H.et,P.a3,H.fM,H.fN,H.fH,P.ez,P.b_,P.au,P.dW,P.hN,P.cr,P.hO,P.aV,P.a8,P.jh,P.j5,P.bS,P.ea,P.w,P.c7,P.fB,P.jf,P.M,P.bn,P.a1,P.aI,P.hj,P.dG,P.e3,P.fv,P.bq,P.b,P.L,P.I,P.ah,P.e,P.ba,W.f5,W.bv,W.z,W.dt,W.eo,W.ja,W.d9,W.ak,W.j4,W.eE,P.j_,O.a_,O.ci,E.f_,E.ae,E.hq,E.dO,Z.dV,Z.iB,Z.d0,Z.ce,Z.aY,D.f2,D.bF,D.G,X.d1,X.dg,X.fJ,X.fP,X.b7,X.h6,X.i0,X.dU,D.bo,D.a0,D.dw,D.dF,D.dL,D.dM,D.dN,V.Y,V.b1,V.fj,V.dp,V.a9,V.aa,V.a5,V.dB,V.aC,V.R,M.d8,A.cX,A.eV,A.fY,A.cv,A.cz,A.cx,A.cA,A.cy,A.cB,A.bE,A.dQ,A.ie,F.a2,F.fo,F.bs,F.fL,F.bK,F.dE,F.hz,F.hA,F.hB,F.as,F.ip,F.iq,F.it,F.iv,F.iw,F.ix,O.bR,O.dn,T.hW,V.b0,V.aj,V.dl,V.ho,V.hy,V.cq,V.dP,V.ct,V.hZ,X.d2,X.dJ,X.dv,V.bl,V.hC])
s(J.a,[J.fF,J.de,J.df,J.ax,J.br,J.b3,H.ck,W.d,W.eT,W.cY,W.aG,W.aH,W.P,W.dY,W.fa,W.fb,W.d5,W.e_,W.d7,W.e1,W.fd,W.n,W.e4,W.aK,W.fz,W.e6,W.dk,W.h0,W.ec,W.ed,W.aP,W.ee,W.eh,W.aQ,W.el,W.dz,W.en,W.aS,W.ep,W.aT,W.eu,W.ay,W.ex,W.hY,W.aW,W.eA,W.i2,W.ik,W.eF,W.eH,W.eJ,W.eL,W.eN,P.b5,P.e8,P.b9,P.ej,P.hn,P.ev,P.bb,P.eC,P.eW,P.dX,P.cZ,P.da,P.dy,P.bO,P.dD,P.dR,P.er])
s(J.df,[J.hk,J.bu,J.b4])
t(J.jH,J.ax)
s(J.br,[J.dd,J.fG])
t(P.fO,P.eb)
s(P.fO,[H.dS,W.iI,W.ad,P.fr])
t(H.q,H.dS)
s(P.h,[H.fg,H.fS,H.cD])
s(H.fg,[H.bI,H.di])
s(P.aL,[H.fT,H.iC])
t(H.fU,H.bI)
s(P.bp,[H.hg,H.fI,H.ii,H.i6,H.f1,H.hw,P.du,P.aE,P.ij,P.ih,P.bP,P.f3,P.f8])
s(H.c6,[H.jz,H.hT,H.jq,H.jr,H.js,P.iE,P.iD,P.iF,P.iG,P.je,P.jd,P.iO,P.iS,P.iP,P.iQ,P.iR,P.iV,P.iW,P.iU,P.iT,P.hP,P.hQ,P.jj,P.j2,P.j1,P.j3,P.fR,P.fe,P.ff,W.fh,W.h2,W.h4,W.hv,W.hM,W.iN,W.he,W.hd,W.j6,W.j7,W.jc,W.jg,P.jl,P.fs,P.ft,P.eY,E.hr,E.hs,E.ht,E.hX,D.fl,D.fm,F.jy,F.jm,F.iz,F.iy,F.ir,F.is,V.jx,V.hE,V.hD,V.hF,X.ju])
s(H.hT,[H.hK,H.c4])
t(P.fQ,P.a3)
s(P.fQ,[H.aM,W.iH])
t(H.dq,H.ck)
s(H.dq,[H.cH,H.cJ])
t(H.cI,H.cH)
t(H.cj,H.cI)
t(H.cK,H.cJ)
t(H.dr,H.cK)
s(H.dr,[H.h7,H.h8,H.h9,H.ha,H.hb,H.ds,H.hc])
t(P.j0,P.jh)
t(P.iZ,P.j5)
t(P.c8,P.hO)
t(P.fi,P.c7)
s(P.c8,[P.fA,P.im])
t(P.il,P.fi)
s(P.a1,[P.y,P.B])
s(P.aE,[P.bN,P.fC])
s(W.d,[W.A,W.fq,W.aR,W.cL,W.aU,W.az,W.cN,W.iA,W.cE,P.eZ,P.bC])
s(W.A,[W.Q,W.bk,W.cb,W.cF])
s(W.Q,[W.u,P.p])
s(W.u,[W.cW,W.eU,W.c3,W.bj,W.bD,W.aq,W.fu,W.db,W.hx,W.bQ,W.dH,W.dI,W.hS,W.cs])
s(W.aG,[W.c9,W.f6,W.f7])
t(W.f4,W.aH)
t(W.ca,W.dY)
t(W.e0,W.e_)
t(W.d6,W.e0)
t(W.e2,W.e1)
t(W.fc,W.e2)
t(W.aJ,W.cY)
t(W.e5,W.e4)
t(W.fp,W.e5)
t(W.e7,W.e6)
t(W.bH,W.e7)
t(W.dc,W.cb)
t(W.bt,W.n)
s(W.bt,[W.aN,W.a4,W.aA])
t(W.h1,W.ec)
t(W.h3,W.ed)
t(W.ef,W.ee)
t(W.h5,W.ef)
t(W.ei,W.eh)
t(W.cl,W.ei)
t(W.em,W.el)
t(W.hm,W.em)
t(W.hu,W.en)
t(W.cM,W.cL)
t(W.hH,W.cM)
t(W.eq,W.ep)
t(W.hI,W.eq)
t(W.hL,W.eu)
t(W.ey,W.ex)
t(W.hU,W.ey)
t(W.cO,W.cN)
t(W.hV,W.cO)
t(W.eB,W.eA)
t(W.i1,W.eB)
t(W.aZ,W.a4)
t(W.eG,W.eF)
t(W.iJ,W.eG)
t(W.dZ,W.d7)
t(W.eI,W.eH)
t(W.iX,W.eI)
t(W.eK,W.eJ)
t(W.eg,W.eK)
t(W.eM,W.eL)
t(W.j8,W.eM)
t(W.eO,W.eN)
t(W.j9,W.eO)
t(W.iK,W.iH)
t(W.iL,P.hN)
t(W.jR,W.iL)
t(W.iM,P.cr)
t(W.jb,W.eo)
t(P.ag,P.j_)
t(P.e9,P.e8)
t(P.fK,P.e9)
t(P.ek,P.ej)
t(P.hh,P.ek)
t(P.co,P.p)
t(P.ew,P.ev)
t(P.hR,P.ew)
t(P.eD,P.eC)
t(P.i3,P.eD)
t(P.eX,P.dX)
t(P.hi,P.bC)
t(P.es,P.er)
t(P.hJ,P.es)
s(E.f_,[Z.d_,A.cp,T.dK])
s(D.G,[D.cf,D.cg,D.V])
t(D.dh,O.a_)
t(U.bJ,D.f2)
s(U.bJ,[U.d3,U.dC])
t(A.fV,A.cp)
s(A.dQ,[A.J,A.ia,A.ib,A.id,A.i8,A.W,A.i9,A.H,A.ic,A.ig,A.cw,A.al,A.ab,A.ac])
t(F.hG,F.fo)
t(F.i7,F.fL)
t(F.iu,F.iv)
t(F.hf,F.iw)
t(O.dm,O.bR)
s(O.dn,[O.fW,O.fX,O.aO])
s(O.aO,[O.fZ,O.h_])
s(V.dl,[V.af,V.cu])
t(X.fw,X.dJ)
s(V.bl,[V.f9,V.fx,V.fy,V.hl])
u(H.dS,H.dT)
u(H.cH,P.w)
u(H.cI,H.bG)
u(H.cJ,P.w)
u(H.cK,H.bG)
u(P.eb,P.w)
u(W.dY,W.f5)
u(W.e_,P.w)
u(W.e0,W.z)
u(W.e1,P.w)
u(W.e2,W.z)
u(W.e4,P.w)
u(W.e5,W.z)
u(W.e6,P.w)
u(W.e7,W.z)
u(W.ec,P.a3)
u(W.ed,P.a3)
u(W.ee,P.w)
u(W.ef,W.z)
u(W.eh,P.w)
u(W.ei,W.z)
u(W.el,P.w)
u(W.em,W.z)
u(W.en,P.a3)
u(W.cL,P.w)
u(W.cM,W.z)
u(W.ep,P.w)
u(W.eq,W.z)
u(W.eu,P.a3)
u(W.ex,P.w)
u(W.ey,W.z)
u(W.cN,P.w)
u(W.cO,W.z)
u(W.eA,P.w)
u(W.eB,W.z)
u(W.eF,P.w)
u(W.eG,W.z)
u(W.eH,P.w)
u(W.eI,W.z)
u(W.eJ,P.w)
u(W.eK,W.z)
u(W.eL,P.w)
u(W.eM,W.z)
u(W.eN,P.w)
u(W.eO,W.z)
u(P.e8,P.w)
u(P.e9,W.z)
u(P.ej,P.w)
u(P.ek,W.z)
u(P.ev,P.w)
u(P.ew,W.z)
u(P.eC,P.w)
u(P.eD,W.z)
u(P.dX,P.a3)
u(P.er,P.w)
u(P.es,W.z)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bj.prototype
C.H=W.bD.prototype
C.k=W.aq.prototype
C.I=W.d5.prototype
C.K=W.db.prototype
C.x=W.dc.prototype
C.M=J.a.prototype
C.a=J.ax.prototype
C.i=J.dd.prototype
C.q=J.de.prototype
C.d=J.br.prototype
C.j=J.b3.prototype
C.T=J.b4.prototype
C.X=W.cl.prototype
C.B=J.hk.prototype
C.C=W.dz.prototype
C.b=P.bO.prototype
C.u=W.bQ.prototype
C.o=W.dH.prototype
C.m=W.dI.prototype
C.v=J.bu.prototype
C.D=W.aZ.prototype
C.E=W.cE.prototype
C.F=new P.hj()
C.G=new P.im()
C.l=new P.j0()
C.c=new A.bE(0,"ColorSourceType.None")
C.h=new A.bE(1,"ColorSourceType.Solid")
C.e=new A.bE(2,"ColorSourceType.Texture2D")
C.f=new A.bE(3,"ColorSourceType.TextureCube")
C.p=new P.aI(0)
C.J=new P.aI(5e6)
C.L=new P.fB("element",!0,!1,!1,!1)
C.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.O=function(hooks) {
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
C.y=function(hooks) { return hooks; }

C.P=function(getTagFallback) {
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
C.Q=function() {
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
C.R=function(hooks) {
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
C.S=function(hooks) {
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
C.z=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.U=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.V=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.W=H.c(u([]),[P.e])
C.A=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.B])
C.r=H.c(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.t=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.w=new P.il(!1)})();(function staticFields(){$.aF=0
$.c5=null
$.ke=null
$.jT=!1
$.l4=null
$.l_=null
$.l9=null
$.jn=null
$.jt=null
$.k1=null
$.bT=null
$.cQ=null
$.cR=null
$.jU=!1
$.U=C.l
$.b2=null
$.jF=null
$.kl=null
$.kk=null
$.kr=null
$.kv=null
$.cm=null
$.kz=null
$.kI=null
$.kM=null
$.kK=null
$.kL=null
$.io=null
$.kJ=null
$.ku=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"n4","lc",function(){return H.l3("_$dart_dartClosure")})
u($,"n5","k7",function(){return H.l3("_$dart_js")})
u($,"na","ld",function(){return H.aX(H.i5({
toString:function(){return"$receiver$"}}))})
u($,"nb","le",function(){return H.aX(H.i5({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nc","lf",function(){return H.aX(H.i5(null))})
u($,"nd","lg",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ng","lj",function(){return H.aX(H.i5(void 0))})
u($,"nh","lk",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nf","li",function(){return H.aX(H.kG(null))})
u($,"ne","lh",function(){return H.aX(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nj","lm",function(){return H.aX(H.kG(void 0))})
u($,"ni","ll",function(){return H.aX(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ny","k8",function(){return P.md()})
u($,"nC","cU",function(){return[]})
u($,"nB","lr",function(){return P.m4("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"nz","lq",function(){return P.ko(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"nA","k9",function(){return P.kn(P.e,P.bq)})
u($,"nr","lp",function(){return Z.at(0)})
u($,"nl","ln",function(){return Z.at(511)})
u($,"nt","bg",function(){return Z.at(1)})
u($,"ns","bf",function(){return Z.at(2)})
u($,"nn","be",function(){return Z.at(4)})
u($,"nu","bh",function(){return Z.at(8)})
u($,"nv","bi",function(){return Z.at(16)})
u($,"no","cS",function(){return Z.at(32)})
u($,"np","cT",function(){return Z.at(64)})
u($,"nq","lo",function(){return Z.at(96)})
u($,"nw","c1",function(){return Z.at(128)})
u($,"nm","bd",function(){return Z.at(256)})
u($,"n3","lb",function(){return new V.fj(1e-9)})
u($,"n2","O",function(){return $.lb()})})()
var v={mangledGlobalNames:{B:"int",y:"double",a1:"num",e:"String",M:"bool",I:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.G]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.a4]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.B,[P.h,E.ae]]},{func:1,ret:P.I,args:[D.G]},{func:1,ret:P.I,args:[F.a2]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.n]},{func:1,ret:-1,args:[W.aA]},{func:1,ret:-1,args:[W.aN]},{func:1,args:[,]},{func:1,ret:P.M,args:[W.ak]},{func:1,ret:P.M,args:[P.e]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.G]}]},{func:1,ret:P.I,args:[,]},{func:1,ret:P.M,args:[W.Q,P.e,P.e,W.bv]},{func:1,ret:P.I,args:[,,]},{func:1,ret:-1,args:[P.B,[P.h,D.a0]]},{func:1,ret:P.y},{func:1,ret:P.e,args:[P.B]},{func:1,ret:-1,args:[P.B,[P.h,V.a9]]},{func:1,ret:P.M,args:[W.A]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,args:[W.n]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.A,W.A]},{func:1,ret:W.Q,args:[W.A]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.I,args:[P.a1]},{func:1,ret:[P.au,,],args:[,]},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:P.M,args:[[P.h,D.a0]]},{func:1,ret:V.a5,args:[P.y]},{func:1,ret:P.I,args:[F.as,P.y,P.y]},{func:1,ret:P.I,args:[P.aV]},{func:1,ret:P.I,args:[W.n]},{func:1,ret:P.M,args:[V.bl]},{func:1,ret:P.I,args:[,],opt:[P.ah]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.ck,ArrayBufferView:H.ck,Float32Array:H.cj,Float64Array:H.cj,Int16Array:H.h7,Int32Array:H.h8,Int8Array:H.h9,Uint16Array:H.ha,Uint32Array:H.hb,Uint8ClampedArray:H.ds,CanvasPixelArray:H.ds,Uint8Array:H.hc,HTMLAudioElement:W.u,HTMLBRElement:W.u,HTMLButtonElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLImageElement:W.u,HTMLInputElement:W.u,HTMLLIElement:W.u,HTMLLabelElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMediaElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableColElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLVideoElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,AccessibleNodeList:W.eT,HTMLAnchorElement:W.cW,HTMLAreaElement:W.eU,HTMLBaseElement:W.c3,Blob:W.cY,HTMLBodyElement:W.bj,HTMLCanvasElement:W.bD,CDATASection:W.bk,CharacterData:W.bk,Comment:W.bk,ProcessingInstruction:W.bk,Text:W.bk,CSSNumericValue:W.c9,CSSUnitValue:W.c9,CSSPerspective:W.f4,CSSCharsetRule:W.P,CSSConditionRule:W.P,CSSFontFaceRule:W.P,CSSGroupingRule:W.P,CSSImportRule:W.P,CSSKeyframeRule:W.P,MozCSSKeyframeRule:W.P,WebKitCSSKeyframeRule:W.P,CSSKeyframesRule:W.P,MozCSSKeyframesRule:W.P,WebKitCSSKeyframesRule:W.P,CSSMediaRule:W.P,CSSNamespaceRule:W.P,CSSPageRule:W.P,CSSRule:W.P,CSSStyleRule:W.P,CSSSupportsRule:W.P,CSSViewportRule:W.P,CSSStyleDeclaration:W.ca,MSStyleCSSProperties:W.ca,CSS2Properties:W.ca,CSSImageValue:W.aG,CSSKeywordValue:W.aG,CSSPositionValue:W.aG,CSSResourceValue:W.aG,CSSURLImageValue:W.aG,CSSStyleValue:W.aG,CSSMatrixComponent:W.aH,CSSRotation:W.aH,CSSScale:W.aH,CSSSkew:W.aH,CSSTranslation:W.aH,CSSTransformComponent:W.aH,CSSTransformValue:W.f6,CSSUnparsedValue:W.f7,DataTransferItemList:W.fa,HTMLDivElement:W.aq,XMLDocument:W.cb,Document:W.cb,DOMException:W.fb,DOMImplementation:W.d5,ClientRectList:W.d6,DOMRectList:W.d6,DOMRectReadOnly:W.d7,DOMStringList:W.fc,DOMTokenList:W.fd,Element:W.Q,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aJ,FileList:W.fp,FileWriter:W.fq,HTMLFormElement:W.fu,Gamepad:W.aK,HTMLHeadElement:W.db,History:W.fz,HTMLCollection:W.bH,HTMLFormControlsCollection:W.bH,HTMLOptionsCollection:W.bH,HTMLDocument:W.dc,KeyboardEvent:W.aN,Location:W.dk,MediaList:W.h0,MIDIInputMap:W.h1,MIDIOutputMap:W.h3,MimeType:W.aP,MimeTypeArray:W.h5,PointerEvent:W.a4,MouseEvent:W.a4,DragEvent:W.a4,DocumentFragment:W.A,ShadowRoot:W.A,DocumentType:W.A,Node:W.A,NodeList:W.cl,RadioNodeList:W.cl,Plugin:W.aQ,PluginArray:W.hm,Range:W.dz,RTCStatsReport:W.hu,HTMLSelectElement:W.hx,SourceBuffer:W.aR,SourceBufferList:W.hH,SpeechGrammar:W.aS,SpeechGrammarList:W.hI,SpeechRecognitionResult:W.aT,Storage:W.hL,CSSStyleSheet:W.ay,StyleSheet:W.ay,HTMLTableCellElement:W.bQ,HTMLTableDataCellElement:W.bQ,HTMLTableHeaderCellElement:W.bQ,HTMLTableElement:W.dH,HTMLTableRowElement:W.dI,HTMLTableSectionElement:W.hS,HTMLTemplateElement:W.cs,TextTrack:W.aU,TextTrackCue:W.az,VTTCue:W.az,TextTrackCueList:W.hU,TextTrackList:W.hV,TimeRanges:W.hY,Touch:W.aW,TouchEvent:W.aA,TouchList:W.i1,TrackDefaultList:W.i2,CompositionEvent:W.bt,FocusEvent:W.bt,TextEvent:W.bt,UIEvent:W.bt,URL:W.ik,VideoTrackList:W.iA,WheelEvent:W.aZ,Window:W.cE,DOMWindow:W.cE,Attr:W.cF,CSSRuleList:W.iJ,ClientRect:W.dZ,DOMRect:W.dZ,GamepadList:W.iX,NamedNodeMap:W.eg,MozNamedAttrMap:W.eg,SpeechRecognitionResultList:W.j8,StyleSheetList:W.j9,SVGLength:P.b5,SVGLengthList:P.fK,SVGNumber:P.b9,SVGNumberList:P.hh,SVGPointList:P.hn,SVGScriptElement:P.co,SVGStringList:P.hR,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bb,SVGTransformList:P.i3,AudioBuffer:P.eW,AudioParamMap:P.eX,AudioTrackList:P.eZ,AudioContext:P.bC,webkitAudioContext:P.bC,BaseAudioContext:P.bC,OfflineAudioContext:P.hi,WebGLBuffer:P.cZ,WebGLFramebuffer:P.da,WebGLProgram:P.dy,WebGL2RenderingContext:P.bO,WebGLShader:P.dD,WebGLUniformLocation:P.dR,SQLResultSetRowList:P.hJ})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dq.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.cI.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.cJ.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.dr.$nativeSuperclassTag="ArrayBufferView"
W.cL.$nativeSuperclassTag="EventTarget"
W.cM.$nativeSuperclassTag="EventTarget"
W.cN.$nativeSuperclassTag="EventTarget"
W.cO.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.l6,[])
else X.l6([])})})()
//# sourceMappingURL=test.dart.js.map
