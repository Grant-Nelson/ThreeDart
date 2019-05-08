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
a[c]=function(){a[c]=function(){H.nU(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jN(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jt:function jt(a){this.a=a},
iZ:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
f7:function(){return new P.bP("No element")},
m9:function(){return new P.bP("Too many elements")},
m8:function(){return new P.bP("Too few elements")},
t:function t(a){this.a=a},
eP:function eP(){},
bG:function bG(){},
cf:function cf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fn:function fn(a,b,c){this.a=a
this.b=b
this.$ti=c},
fo:function fo(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fp:function fp(a,b,c){this.a=a
this.b=b
this.$ti=c},
cE:function cE(a,b,c){this.a=a
this.b=b
this.$ti=c},
hS:function hS(a,b,c){this.a=a
this.b=b
this.$ti=c},
bB:function bB(){},
cC:function cC(){},
e_:function e_(){},
m_:function(){throw H.c(P.X("Cannot modify unmodifiable Map"))},
c1:function(a){var u,t
u=H.E(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
nB:function(a){return v.types[H.ab(a)]},
nI:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iaF},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.an(a)
if(typeof u!=="string")throw H.c(H.am(a))
return u},
my:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.f8(u)
t=u[0]
s=u[1]
return new H.fM(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cm:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mv:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.d(u,3)
t=H.E(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a6(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.H(r,p)|32)>s)return}return parseInt(a,b)},
bL:function(a){return H.mm(a)+H.jK(H.bt(a),0,null)},
mm:function(a){var u,t,s,r,q,p,o,n,m
u=J.Q(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Z||!!u.$ibq){p=C.F(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c1(r.length>1&&C.c.H(r,0)===36?C.c.ap(r,1):r)},
mn:function(){if(!!self.location)return self.location.href
return},
ks:function(a){var u,t,s,r,q
H.eu(a)
u=J.aB(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mw:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.am(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aR(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.am(r))}return H.ks(u)},
kt:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.am(s))
if(s<0)throw H.c(H.am(s))
if(s>65535)return H.mw(a)}return H.ks(a)},
mx:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bM:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aR(u,10))>>>0,56320|u&1023)}}throw H.c(P.a6(a,0,1114111,null,null))},
bK:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mu:function(a){var u=H.bK(a).getFullYear()+0
return u},
ms:function(a){var u=H.bK(a).getMonth()+1
return u},
mo:function(a){var u=H.bK(a).getDate()+0
return u},
mp:function(a){var u=H.bK(a).getHours()+0
return u},
mr:function(a){var u=H.bK(a).getMinutes()+0
return u},
mt:function(a){var u=H.bK(a).getSeconds()+0
return u},
mq:function(a){var u=H.bK(a).getMilliseconds()+0
return u},
B:function(a){throw H.c(H.am(a))},
d:function(a,b){if(a==null)J.aB(a)
throw H.c(H.bX(a,b))},
bX:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aC(!0,b,"index",null)
u=H.ab(J.aB(a))
if(!(b<0)){if(typeof u!=="number")return H.B(u)
t=b>=u}else t=!0
if(t)return P.bD(b,a,"index",null,u)
return P.dE(b,"index",null)},
nu:function(a,b,c){if(a>c)return new P.bN(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bN(a,c,!0,b,"end","Invalid value")
return new P.aC(!0,b,"end",null)},
am:function(a){return new P.aC(!0,a,null,null)},
np:function(a){if(typeof a!=="number")throw H.c(H.am(a))
return a},
c:function(a){var u
if(a==null)a=new P.dz()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lm})
u.name=""}else u.toString=H.lm
return u},
lm:function(){return J.an(this.dartException)},
q:function(a){throw H.c(a)},
z:function(a){throw H.c(P.aZ(a))},
aU:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hg(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hh:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kD:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kn:function(a,b){return new H.fE(a,b==null?null:b.method)},
ju:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fb(a,t,u?null:b.receiver)},
ac:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.ji(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aR(s,16)&8191)===10)switch(r){case 438:return u.$1(H.ju(H.i(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kn(H.i(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lq()
p=$.lr()
o=$.ls()
n=$.lt()
m=$.lw()
l=$.lx()
k=$.lv()
$.lu()
j=$.lz()
i=$.ly()
h=q.ad(t)
if(h!=null)return u.$1(H.ju(H.E(t),h))
else{h=p.ad(t)
if(h!=null){h.method="call"
return u.$1(H.ju(H.E(t),h))}else{h=o.ad(t)
if(h==null){h=n.ad(t)
if(h==null){h=m.ad(t)
if(h==null){h=l.ad(t)
if(h==null){h=k.ad(t)
if(h==null){h=n.ad(t)
if(h==null){h=j.ad(t)
if(h==null){h=i.ad(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kn(H.E(t),h))}}return u.$1(new H.hu(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dK()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aC(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dK()
return a},
c_:function(a){var u
if(a==null)return new H.eh(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eh(a)},
nx:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.q(0,a[t],a[s])}return b},
nH:function(a,b,c,d,e,f){H.e(a,"$ibj")
switch(H.ab(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
bW:function(a,b){var u
H.ab(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nH)
a.$identity=u
return u},
lZ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.Q(d).$ia){u.$reflectionInfo=d
s=H.my(u).r}else s=d
r=e?Object.create(new H.h1().constructor.prototype):Object.create(new H.c4(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aL
if(typeof p!=="number")return p.n()
$.aL=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.k8(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.nB,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.k6:H.jn
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.k8(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
lW:function(a,b,c,d){var u=H.jn
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
k8:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lY(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lW(t,!r,u,b)
if(t===0){r=$.aL
if(typeof r!=="number")return r.n()
$.aL=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c5
if(q==null){q=H.eC("self")
$.c5=q}return new Function(r+H.i(q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aL
if(typeof r!=="number")return r.n()
$.aL=r+1
o+=r
r="return function("+o+"){return this."
q=$.c5
if(q==null){q=H.eC("self")
$.c5=q}return new Function(r+H.i(q)+"."+H.i(u)+"("+o+");}")()},
lX:function(a,b,c,d){var u,t
u=H.jn
t=H.k6
switch(b?-1:a){case 0:throw H.c(H.mC("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lY:function(a,b){var u,t,s,r,q,p,o,n
u=$.c5
if(u==null){u=H.eC("self")
$.c5=u}t=$.k5
if(t==null){t=H.eC("receiver")
$.k5=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lX(r,!p,s,b)
if(r===1){u="return function(){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+");"
t=$.aL
if(typeof t!=="number")return t.n()
$.aL=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+", "+n+");"
t=$.aL
if(typeof t!=="number")return t.n()
$.aL=t+1
return new Function(u+t+"}")()},
jN:function(a,b,c,d,e,f,g){return H.lZ(a,b,H.ab(c),d,!!e,!!f,g)},
jn:function(a){return a.a},
k6:function(a){return a.c},
eC:function(a){var u,t,s,r,q
u=new H.c4("self","target","receiver","name")
t=J.f8(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
E:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aK(a,"String"))},
nv:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aK(a,"double"))},
nN:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aK(a,"num"))},
jL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aK(a,"bool"))},
ab:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aK(a,"int"))},
lk:function(a,b){throw H.c(H.aK(a,H.c1(H.E(b).substring(2))))},
nP:function(a,b){throw H.c(H.lV(a,H.c1(H.E(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Q(a)[b])return a
H.lk(a,b)},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.nP(a,b)},
eu:function(a){if(a==null)return a
if(!!J.Q(a).$ia)return a
throw H.c(H.aK(a,"List<dynamic>"))},
lh:function(a,b){var u
if(a==null)return a
u=J.Q(a)
if(!!u.$ia)return a
if(u[b])return a
H.lk(a,b)},
ld:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ab(u)]
else return a.$S()}return},
er:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.ld(J.Q(a))
if(u==null)return!1
return H.l0(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.jH)return a
$.jH=!0
try{if(H.er(a,b))return a
u=H.jd(b)
t=H.aK(a,u)
throw H.c(t)}finally{$.jH=!1}},
jP:function(a,b){if(a!=null&&!H.jM(a,b))H.q(H.aK(a,H.jd(b)))
return a},
aK:function(a,b){return new H.hi("TypeError: "+P.eT(a)+": type '"+H.l5(a)+"' is not a subtype of type '"+b+"'")},
lV:function(a,b){return new H.eD("CastError: "+P.eT(a)+": type '"+H.l5(a)+"' is not a subtype of type '"+b+"'")},
l5:function(a){var u,t
u=J.Q(a)
if(!!u.$ic6){t=H.ld(u)
if(t!=null)return H.jd(t)
return"Closure"}return H.bL(a)},
nU:function(a){throw H.c(new P.eK(H.E(a)))},
mC:function(a){return new H.fR(a)},
le:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bt:function(a){if(a==null)return
return a.$ti},
oE:function(a,b,c){return H.c0(a["$a"+H.i(c)],H.bt(b))},
cT:function(a,b,c,d){var u
H.E(c)
H.ab(d)
u=H.c0(a["$a"+H.i(c)],H.bt(b))
return u==null?null:u[d]},
aa:function(a,b,c){var u
H.E(b)
H.ab(c)
u=H.c0(a["$a"+H.i(b)],H.bt(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.ab(b)
u=H.bt(a)
return u==null?null:u[b]},
jd:function(a){return H.bs(a,null)},
bs:function(a,b){var u,t
H.h(b,"$ia",[P.f],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c1(a[0].name)+H.jK(a,1,b)
if(typeof a=="function")return H.c1(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ab(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.i(b[t])}if('func' in a)return H.ne(a,b)
if('futureOr' in a)return"FutureOr<"+H.bs("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ne:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.f]
H.h(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.d(b,m)
o=C.c.n(o,b[m])
l=t[p]
if(l!=null&&l!==P.L)o+=" extends "+H.bs(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bs(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bs(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bs(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.nw(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.E(u[g])
i=i+h+H.bs(d[c],b)+(" "+H.i(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jK:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ia",[P.f],"$aa")
if(a==null)return""
u=new P.af("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bs(p,c)}return"<"+u.i(0)+">"},
c0:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cR:function(a,b,c,d){var u,t
H.E(b)
H.eu(c)
H.E(d)
if(a==null)return!1
u=H.bt(a)
t=J.Q(a)
if(t[b]==null)return!1
return H.l8(H.c0(t[d],u),null,c,null)},
h:function(a,b,c,d){H.E(b)
H.eu(c)
H.E(d)
if(a==null)return a
if(H.cR(a,b,c,d))return a
throw H.c(H.aK(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c1(b.substring(2))+H.jK(c,0,null),v.mangledGlobalNames)))},
l8:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aA(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aA(a[t],b,c[t],d))return!1
return!0},
oC:function(a,b,c){return a.apply(b,H.c0(J.Q(b)["$a"+H.i(c)],H.bt(b)))},
lg:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="D"||a===-1||a===-2||H.lg(u)}return!1},
jM:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="D"||b===-1||b===-2||H.lg(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jM(a,"type" in b?b.type:null))return!0
if('func' in b)return H.er(a,b)}u=J.Q(a).constructor
t=H.bt(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aA(u,null,b,null)},
x:function(a,b){if(a!=null&&!H.jM(a,b))throw H.c(H.aK(a,H.jd(b)))
return a},
aA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="L"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="L"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aA(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="D")return!0
if('func' in c)return H.l0(a,b,c,d)
if('func' in a)return c.name==="bj"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aA("type" in a?a.type:null,b,s,d)
else if(H.aA(a,b,s,d))return!0
else{if(!('$i'+"cb" in t.prototype))return!1
r=t.prototype["$a"+"cb"]
q=H.c0(r,u?a.slice(1):null)
return H.aA(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.l8(H.c0(m,u),b,p,d)},
l0:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aA(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aA(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aA(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aA(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nM(h,b,g,d)},
nM:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aA(c[r],d,a[r],b))return!1}return!0},
oD:function(a,b,c){Object.defineProperty(a,H.E(b),{value:c,enumerable:false,writable:true,configurable:true})},
nK:function(a){var u,t,s,r,q,p
u=H.E($.lf.$1(a))
t=$.iY[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j2[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.E($.l7.$2(a,u))
if(u!=null){t=$.iY[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j2[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jc(s)
$.iY[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.j2[u]=s
return s}if(q==="-"){p=H.jc(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.lj(a,s)
if(q==="*")throw H.c(P.ht(u))
if(v.leafTags[u]===true){p=H.jc(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.lj(a,s)},
lj:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jS(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jc:function(a){return J.jS(a,!1,null,!!a.$iaF)},
nL:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jc(u)
else return J.jS(u,c,null,null)},
nF:function(){if(!0===$.jR)return
$.jR=!0
H.nG()},
nG:function(){var u,t,s,r,q,p,o,n
$.iY=Object.create(null)
$.j2=Object.create(null)
H.nE()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ll.$1(q)
if(p!=null){o=H.nL(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nE:function(){var u,t,s,r,q,p,o
u=C.a3()
u=H.bV(C.a0,H.bV(C.a5,H.bV(C.E,H.bV(C.E,H.bV(C.a4,H.bV(C.a1,H.bV(C.a2(C.F),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.lf=new H.j_(q)
$.l7=new H.j0(p)
$.ll=new H.j1(o)},
bV:function(a,b){return a(b)||b},
mb:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a0("Illegal RegExp pattern ("+String(r)+")",a,null))},
nT:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
jV:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eH:function eH(){},
eI:function eI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fM:function fM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
hg:function hg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fE:function fE(a,b){this.a=a
this.b=b},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(a){this.a=a},
ji:function ji(a){this.a=a},
eh:function eh(a){this.a=a
this.b=null},
c6:function c6(){},
h7:function h7(){},
h1:function h1(){},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hi:function hi(a){this.a=a},
eD:function eD(a){this.a=a},
fR:function fR(a){this.a=a},
aG:function aG(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fe:function fe(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ff:function ff(a,b){this.a=a
this.$ti=b},
fg:function fg(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
fa:function fa(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bT:function(a){return a},
ml:function(a){return new Int8Array(a)},
b6:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bX(b,a))},
nc:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.nu(a,b,c))
return b},
bJ:function bJ(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(){},
dx:function dx(){},
cj:function cj(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
cL:function cL(){},
nw:function(a){return J.kf(a?Object.keys(a):[],null)},
nO:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jS:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
es:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jR==null){H.nF()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.ht("Return interceptor for "+H.i(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jX()]
if(q!=null)return q
q=H.nK(a)
if(q!=null)return q
if(typeof a=="function")return C.a6
t=Object.getPrototypeOf(a)
if(t==null)return C.M
if(t===Object.prototype)return C.M
if(typeof r=="function"){Object.defineProperty(r,$.jX(),{value:C.B,enumerable:false,writable:true,configurable:true})
return C.B}return C.B},
ma:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.jm(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a6(a,0,4294967295,"length",null))
return J.kf(new Array(a),b)},
kf:function(a,b){return J.f8(H.b(a,[b]))},
f8:function(a){H.eu(a)
a.fixed$length=Array
return a},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dh.prototype
return J.dg.prototype}if(typeof a=="string")return J.b1.prototype
if(a==null)return J.di.prototype
if(typeof a=="boolean")return J.f9.prototype
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.L)return a
return J.es(a)},
ny:function(a){if(typeof a=="number")return J.bl.prototype
if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.L)return a
return J.es(a)},
bZ:function(a){if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.L)return a
return J.es(a)},
jQ:function(a){if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.L)return a
return J.es(a)},
nz:function(a){if(typeof a=="number")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bq.prototype
return a},
nA:function(a){if(typeof a=="number")return J.bl.prototype
if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bq.prototype
return a},
cS:function(a){if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bq.prototype
return a},
a5:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.L)return a
return J.es(a)},
lI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ny(a).n(a,b)},
M:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).v(a,b)},
k_:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nA(a).D(a,b)},
lJ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.nz(a).t(a,b)},
lK:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nI(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bZ(a).k(a,b)},
lL:function(a,b,c,d){return J.a5(a).fV(a,b,c,d)},
lM:function(a,b){return J.cS(a).H(a,b)},
ev:function(a,b){return J.a5(a).iv(a,b)},
jk:function(a,b,c){return J.a5(a).iz(a,b,c)},
k0:function(a,b){return J.a5(a).E(a,b)},
lN:function(a,b){return J.cS(a).a0(a,b)},
ew:function(a,b){return J.jQ(a).a9(a,b)},
lO:function(a,b,c,d){return J.a5(a).ke(a,b,c,d)},
lP:function(a){return J.a5(a).gjF(a)},
k1:function(a){return J.a5(a).gcu(a)},
cX:function(a){return J.Q(a).gJ(a)},
bu:function(a){return J.jQ(a).gU(a)},
aB:function(a){return J.bZ(a).gm(a)},
lQ:function(a){return J.a5(a).gl0(a)},
jl:function(a,b){return J.a5(a).aX(a,b)},
k2:function(a){return J.jQ(a).kQ(a)},
lR:function(a,b){return J.a5(a).kV(a,b)},
lS:function(a,b,c){return J.a5(a).fg(a,b,c)},
lT:function(a,b,c){return J.cS(a).u(a,b,c)},
lU:function(a){return J.cS(a).l7(a)},
an:function(a){return J.Q(a).i(a)},
a7:function a7(){},
f9:function f9(){},
di:function di(){},
dj:function dj(){},
fG:function fG(){},
bq:function bq(){},
b2:function b2(){},
aE:function aE(a){this.$ti=a},
js:function js(a){this.$ti=a},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bl:function bl(){},
dh:function dh(){},
dg:function dg(){},
b1:function b1(){}},P={
mP:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.nm()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bW(new P.hU(u),1)).observe(t,{childList:true})
return new P.hT(u,t,s)}else if(self.setImmediate!=null)return P.nn()
return P.no()},
mQ:function(a){self.scheduleImmediate(H.bW(new P.hV(H.k(a,{func:1,ret:-1})),0))},
mR:function(a){self.setImmediate(H.bW(new P.hW(H.k(a,{func:1,ret:-1})),0))},
mS:function(a){P.jy(C.x,H.k(a,{func:1,ret:-1}))},
jy:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.f.a6(a.a,1000)
return P.mY(u<0?0:u,b)},
kC:function(a,b){var u
H.k(b,{func:1,ret:-1,args:[P.aT]})
u=C.f.a6(a.a,1000)
return P.mZ(u<0?0:u,b)},
mY:function(a,b){var u=new P.ei(!0)
u.fQ(a,b)
return u},
mZ:function(a,b){var u=new P.ei(!1)
u.fR(a,b)
return u},
mT:function(a,b){var u,t,s
b.a=1
try{a.eU(new P.i4(b),new P.i5(b),null)}catch(s){u=H.ac(s)
t=H.c_(s)
P.nQ(new P.i6(b,u,t))}},
kQ:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaz")
if(u>=4){t=b.cb()
b.a=a.a
b.c=a.c
P.cH(b,t)}else{t=H.e(b.c,"$iaX")
b.a=2
b.c=a
a.dE(t)}},
cH:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.e(t.c,"$iah")
t=t.b
p=q.a
o=q.b
t.toString
P.iP(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cH(u.a,b)}t=u.a
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
if(k){H.e(m,"$iah")
t=t.b
p=m.a
o=m.b
t.toString
P.iP(null,null,t,p,o)
return}j=$.U
if(j!=l)$.U=l
else j=null
t=b.c
if(t===8)new P.ia(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.i9(s,b,m).$0()}else if((t&2)!==0)new P.i8(u,s,b).$0()
if(j!=null)$.U=j
t=s.b
if(!!J.Q(t).$icb){if(t.a>=4){i=H.e(o.c,"$iaX")
o.c=null
b=o.bm(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.kQ(t,o)
return}}h=b.b
i=H.e(h.c,"$iaX")
h.c=null
b=h.bm(i)
t=s.a
p=s.b
if(!t){H.x(p,H.r(h,0))
h.a=4
h.c=p}else{H.e(p,"$iah")
h.a=8
h.c=p}u.a=h
t=h}},
nh:function(a,b){if(H.er(a,{func:1,args:[P.L,P.ap]}))return H.k(a,{func:1,ret:null,args:[P.L,P.ap]})
if(H.er(a,{func:1,args:[P.L]}))return H.k(a,{func:1,ret:null,args:[P.L]})
throw H.c(P.jm(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ng:function(){var u,t
for(;u=$.bU,u!=null;){$.cQ=null
t=u.b
$.bU=t
if(t==null)$.cP=null
u.a.$0()}},
nl:function(){$.jI=!0
try{P.ng()}finally{$.cQ=null
$.jI=!1
if($.bU!=null)$.jY().$1(P.l9())}},
l4:function(a){var u=new P.e5(H.k(a,{func:1,ret:-1}))
if($.bU==null){$.cP=u
$.bU=u
if(!$.jI)$.jY().$1(P.l9())}else{$.cP.b=u
$.cP=u}},
nk:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.bU
if(u==null){P.l4(a)
$.cQ=$.cP
return}t=new P.e5(a)
s=$.cQ
if(s==null){t.b=u
$.cQ=t
$.bU=t}else{t.b=s.b
s.b=t
$.cQ=t
if(t.b==null)$.cP=t}},
nQ:function(a){var u,t
u={func:1,ret:-1}
H.k(a,u)
t=$.U
if(C.l===t){P.iR(null,null,C.l,a)
return}t.toString
P.iR(null,null,t,H.k(t.cp(a),u))},
kB:function(a,b){var u,t
u={func:1,ret:-1}
H.k(b,u)
t=$.U
if(t===C.l){t.toString
return P.jy(a,b)}return P.jy(a,H.k(t.cp(b),u))},
mG:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aT]}
H.k(b,u)
t=$.U
if(t===C.l){t.toString
return P.kC(a,b)}s=t.dU(b,P.aT)
$.U.toString
return P.kC(a,H.k(s,u))},
iP:function(a,b,c,d,e){var u={}
u.a=d
P.nk(new P.iQ(u,e))},
l1:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.U
if(t===c)return d.$0()
$.U=c
u=t
try{t=d.$0()
return t}finally{$.U=u}},
l2:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.x(e,g)
t=$.U
if(t===c)return d.$1(e)
$.U=c
u=t
try{t=d.$1(e)
return t}finally{$.U=u}},
ni:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
t=$.U
if(t===c)return d.$2(e,f)
$.U=c
u=t
try{t=d.$2(e,f)
return t}finally{$.U=u}},
iR:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cp(d):c.jG(d,-1)
P.l4(d)},
hU:function hU(a){this.a=a},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
hV:function hV(a){this.a=a},
hW:function hW(a){this.a=a},
ei:function ei(a){this.a=a
this.b=null
this.c=0},
iy:function iy(a,b){this.a=a
this.b=b},
ix:function ix(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aX:function aX(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
az:function az(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
i3:function i3(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=b},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ib:function ib(a){this.a=a},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(a){this.a=a
this.b=null},
h2:function h2(){},
h4:function h4(a,b){this.a=a
this.b=b},
h5:function h5(a,b){this.a=a
this.b=b},
cq:function cq(){},
h3:function h3(){},
aT:function aT(){},
ah:function ah(a,b){this.a=a
this.b=b},
iI:function iI(){},
iQ:function iQ(a,b){this.a=a
this.b=b},
ih:function ih(){},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
ii:function ii(a,b){this.a=a
this.b=b},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
md:function(a,b,c,d,e){return new H.aG([d,e])},
me:function(a,b,c){H.eu(a)
return H.h(H.nx(a,new H.aG([b,c])),"$ikg",[b,c],"$akg")},
kh:function(a,b){return new H.aG([a,b])},
dn:function(a,b,c,d){return new P.ie([d])},
jE:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mX:function(a,b,c){var u=new P.eb(a,b,[c])
u.c=a.e
return u},
m7:function(a,b,c){var u,t
if(P.jJ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.f])
t=$.cW()
C.a.h(t,a)
try{P.nf(a,u)}finally{if(0>=t.length)return H.d(t,-1)
t.pop()}t=P.kz(b,H.lh(u,"$in"),", ")+c
return t.charCodeAt(0)==0?t:t},
jr:function(a,b,c){var u,t,s
if(P.jJ(a))return b+"..."+c
u=new P.af(b)
t=$.cW()
C.a.h(t,a)
try{s=u
s.a=P.kz(s.a,a,", ")}finally{if(0>=t.length)return H.d(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jJ:function(a){var u,t
for(u=0;t=$.cW(),u<t.length;++u)if(a===t[u])return!0
return!1},
nf:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ia",[P.f],"$aa")
u=a.gU(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.F())return
r=H.i(u.gL())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.F()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gL();++s
if(!u.F()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gL();++s
for(;u.F();o=n,n=m){m=u.gL();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.i(o)
q=H.i(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
mf:function(a,b,c){var u=P.md(null,null,null,b,c)
a.Y(0,new P.fh(u,b,c))
return u},
ki:function(a,b){var u,t,s
u=P.dn(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s)u.h(0,H.x(a[s],b))
return u},
jv:function(a){var u,t
u={}
if(P.jJ(a))return"{...}"
t=new P.af("")
try{C.a.h($.cW(),a)
t.a+="{"
u.a=!0
a.Y(0,new P.fl(u,t))
t.a+="}"}finally{u=$.cW()
if(0>=u.length)return H.d(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
ie:function ie(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bR:function bR(a){this.a=a
this.c=this.b=null},
eb:function eb(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fh:function fh(a,b,c){this.a=a
this.b=b
this.c=c},
fi:function fi(){},
S:function S(){},
fk:function fk(){},
fl:function fl(a,b){this.a=a
this.b=b},
bH:function bH(){},
iz:function iz(){},
fm:function fm(){},
e0:function e0(a,b){this.a=a
this.$ti=b},
im:function im(){},
ec:function ec(){},
em:function em(){},
mK:function(a,b,c,d){H.h(b,"$ia",[P.l],"$aa")
if(b instanceof Uint8Array)return P.mL(!1,b,c,d)
return},
mL:function(a,b,c,d){var u,t,s
u=$.lA()
if(u==null)return
t=0===c
if(t&&!0)return P.jB(u,b)
s=b.length
d=P.b5(c,d,s,null,null,null)
if(t&&d===s)return P.jB(u,b)
return P.jB(u,b.subarray(c,d))},
jB:function(a,b){if(P.mN(b))return
return P.mO(a,b)},
mO:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ac(t)}return},
mN:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
mM:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ac(t)}return},
nj:function(a,b,c){var u,t,s
H.h(a,"$ia",[P.l],"$aa")
for(u=J.bZ(a),t=b;t<c;++t){s=u.k(a,t)
if(typeof s!=="number")return s.bP()
if((s&127)!==s)return t-b}return c-b},
k4:function(a,b,c,d,e,f){if(C.f.be(f,4)!==0)throw H.c(P.a0("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a0("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a0("Invalid base64 padding, more than two '=' characters",a,b))},
ez:function ez(a){this.a=a},
eA:function eA(a){this.a=a},
bx:function bx(){},
bg:function bg(){},
eR:function eR(){},
f5:function f5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f4:function f4(a){this.a=a},
hB:function hB(a){this.a=a},
hD:function hD(){},
iG:function iG(a){this.b=this.a=0
this.c=a},
hC:function hC(a){this.a=a},
iE:function iE(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
iF:function iF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
et:function(a,b,c){var u
H.k(b,{func:1,ret:P.l,args:[P.f]})
u=H.mv(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a0(a,null,null))},
m4:function(a){if(a instanceof H.c6)return a.i(0)
return"Instance of '"+H.bL(a)+"'"},
mg:function(a,b,c,d){var u,t
H.x(b,d)
u=J.ma(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.q(u,t,b)
return H.h(u,"$ia",[d],"$aa")},
mh:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gU(a);s.F();)C.a.h(t,H.x(s.gL(),c))
if(b)return t
return H.h(J.f8(t),"$ia",u,"$aa")},
dM:function(a,b,c){var u,t
u=P.l
H.h(a,"$in",[u],"$an")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.h(a,"$iaE",[u],"$aaE")
t=a.length
c=P.b5(b,c,t,null,null,null)
return H.kt(b>0||c<t?C.a.fm(a,b,c):a)}if(!!J.Q(a).$icj)return H.mx(a,b,P.b5(b,c,a.length,null,null,null))
return P.mE(a,b,c)},
mE:function(a,b,c){var u,t,s,r
H.h(a,"$in",[P.l],"$an")
if(b<0)throw H.c(P.a6(b,0,J.aB(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.a6(c,b,J.aB(a),null,null))
t=J.bu(a)
for(s=0;s<b;++s)if(!t.F())throw H.c(P.a6(b,0,s,null,null))
r=[]
if(u)for(;t.F();)r.push(t.gL())
else for(s=b;s<c;++s){if(!t.F())throw H.c(P.a6(c,b,s,null,null))
r.push(t.gL())}return H.kt(r)},
mA:function(a,b,c){return new H.fa(a,H.mb(a,!1,!0,!1))},
kz:function(a,b,c){var u=J.bu(b)
if(!u.F())return a
if(c.length===0){do a+=H.i(u.gL())
while(u.F())}else{a+=H.i(u.gL())
for(;u.F();)a=a+c+H.i(u.gL())}return a},
kF:function(){var u=H.mn()
if(u!=null)return P.mJ(u,0,null)
throw H.c(P.X("'Uri.base' is not supported"))},
en:function(a,b,c,d){var u,t,s,r,q,p
H.h(a,"$ia",[P.l],"$aa")
if(c===C.m){u=$.lG().b
if(typeof b!=="string")H.q(H.am(b))
u=u.test(b)}else u=!1
if(u)return b
H.x(b,H.aa(c,"bx",0))
t=c.gkd().cv(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bM(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
m0:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
m1:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d7:function(a){if(a>=10)return""+a
return"0"+a},
kb:function(a,b,c,d,e,f){return new P.aM(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eT:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.an(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m4(a)},
cZ:function(a){return new P.aC(!1,null,null,a)},
jm:function(a,b,c){return new P.aC(!0,a,b,c)},
dE:function(a,b,c){return new P.bN(null,null,!0,a,b,"Value not in range")},
a6:function(a,b,c,d,e){return new P.bN(b,c,!0,a,d,"Invalid value")},
b5:function(a,b,c,d,e,f){if(typeof a!=="number")return H.B(a)
if(0>a||a>c)throw H.c(P.a6(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.a6(b,a,c,"end",f))
return b}return c},
bD:function(a,b,c,d,e){var u=H.ab(e==null?J.aB(b):e)
return new P.f6(b,u,!0,a,c,"Index out of range")},
X:function(a){return new P.hv(a)},
ht:function(a){return new P.hs(a)},
ky:function(a){return new P.bP(a)},
aZ:function(a){return new P.eG(a)},
u:function(a){return new P.e8(a)},
a0:function(a,b,c){return new P.f0(a,b,c)},
mi:function(a,b,c,d){var u,t
H.k(b,{func:1,ret:d,args:[P.l]})
u=H.b([],[d])
C.a.sm(u,a)
for(t=0;t<a;++t)C.a.q(u,t,b.$1(t))
return u},
jU:function(a){H.nO(a)},
mJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.H(a,b+4)^58)*3|C.c.H(a,b)^100|C.c.H(a,b+1)^97|C.c.H(a,b+2)^116|C.c.H(a,b+3)^97)>>>0
if(t===0)return P.kE(b>0||c<c?C.c.u(a,b,c):a,5,null).geZ()
else if(t===32)return P.kE(C.c.u(a,u,c),0,null).geZ()}s=new Array(8)
s.fixed$length=Array
r=H.b(s,[P.l])
C.a.q(r,0,0)
s=b-1
C.a.q(r,1,s)
C.a.q(r,2,s)
C.a.q(r,7,s)
C.a.q(r,3,b)
C.a.q(r,4,b)
C.a.q(r,5,c)
C.a.q(r,6,c)
if(P.l3(a,b,c,0,r)>=14)C.a.q(r,7,c)
q=r[1]
if(typeof q!=="number")return q.lh()
if(q>=b)if(P.l3(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.n()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.Z()
if(typeof m!=="number")return H.B(m)
if(l<m)m=l
if(typeof n!=="number")return n.Z()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.Z()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.Z()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.aa(a,"..",n)))i=m>n+2&&C.c.aa(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.aa(a,"file",b)){if(p<=b){if(!C.c.aa(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.u(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.aW(a,n,m,"/");++m;++l;++c}else{a=C.c.u(a,b,n)+"/"+C.c.u(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.aa(a,"http",b)){if(s&&o+3===n&&C.c.aa(a,"80",o+1))if(b===0&&!0){a=C.c.aW(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.u(a,b,o)+C.c.u(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.aa(a,"https",b)){if(s&&o+4===n&&C.c.aa(a,"443",o+1))if(b===0&&!0){a=C.c.aW(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.u(a,b,o)+C.c.u(a,n,c)
q-=b
p-=b
o-=b
u=4+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="https"}else j=null
k=!0}}}else j=null
if(k){if(b>0||c<a.length){a=C.c.u(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.iq(a,q,p,o,n,m,l,j)}return P.n_(a,b,c,q,p,o,n,m,l,j)},
kH:function(a,b){var u=P.f
return C.a.kj(H.b(a.split("&"),[u]),P.kh(u,u),new P.hA(b),[P.H,P.f,P.f])},
mI:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.hx(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a0(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.et(C.c.u(a,q,r),null,null)
if(typeof n!=="number")return n.fd()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.d(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.et(C.c.u(a,q,c),null,null)
if(typeof n!=="number")return n.fd()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.d(t,p)
t[p]=n
return t},
kG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.hy(a)
t=new P.hz(u,a)
if(a.length<2)u.$1("address is too short")
s=H.b([],[P.l])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a0(a,r)
if(n===58){if(r===b){++r
if(C.c.a0(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaz(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.mI(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.d(j,g)
j[g]=0
d=g+1
if(d>=i)return H.d(j,d)
j[d]=0
g+=2}else{d=C.f.aR(f,8)
if(g<0||g>=i)return H.d(j,g)
j[g]=d
d=g+1
if(d>=i)return H.d(j,d)
j[d]=f&255
g+=2}}return j},
n_:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.n6(a,b,d)
else{if(d===b)P.cM(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.n7(a,u,e-1):""
s=P.n3(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.B(g)
q=r<g?P.n5(P.et(C.c.u(a,r,g),new P.iA(a,f),null),j):null}else{t=""
s=null
q=null}p=P.n4(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.Z()
o=h<i?P.jF(a,h+1,i,null):null
return new P.bS(j,t,s,q,p,o,i<c?P.n2(a,i+1,c):null)},
kU:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cM:function(a,b,c){throw H.c(P.a0(c,a,b))},
n5:function(a,b){if(a!=null&&a===P.kU(b))return
return a},
n3:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a0(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.c.a0(a,u)!==93)P.cM(a,b,"Missing end `]` to match `[` in host")
P.kG(a,b+1,u)
return C.c.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.B(c)
t=b
for(;t<c;++t)if(C.c.a0(a,t)===58){P.kG(a,b,c)
return"["+a+"]"}return P.n9(a,b,c)},
n9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.B(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a0(a,u)
if(q===37){p=P.l_(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.af("")
n=C.c.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.K,o)
o=(C.K[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.af("")
if(t<u){s.a+=C.c.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.r,o)
o=(C.r[o]&1<<(q&15))!==0}else o=!1
if(o)P.cM(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a0(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.af("")
n=C.c.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kV(q)
u+=l
t=u}}}}if(s==null)return C.c.u(a,b,c)
if(t<c){n=C.c.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
n6:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kX(C.c.H(a,b)))P.cM(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.u,r)
r=(C.u[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cM(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.u(a,b,c)
return P.n0(t?a.toLowerCase():a)},
n0:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
n7:function(a,b,c){return P.cN(a,b,c,C.a9,!1)},
n4:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cN(a,b,c,C.L,!0):C.D.ll(d,new P.iB(),P.f).l(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a5(r,"/"))r="/"+r
return P.n8(r,e,f)},
n8:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a5(a,"/"))return P.na(a,!u||c)
return P.nb(a)},
jF:function(a,b,c,d){var u,t
u={}
H.h(d,"$iH",[P.f,null],"$aH")
if(a!=null){if(d!=null)throw H.c(P.cZ("Both query and queryParameters specified"))
return P.cN(a,b,c,C.t,!0)}if(d==null)return
t=new P.af("")
u.a=""
d.Y(0,new P.iC(new P.iD(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
n2:function(a,b,c){return P.cN(a,b,c,C.t,!0)},
l_:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a0(a,b+1)
s=C.c.a0(a,u)
r=H.iZ(t)
q=H.iZ(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aR(p,4)
if(u>=8)return H.d(C.v,u)
u=(C.v[u]&1<<(p&15))!==0}else u=!1
if(u)return H.bM(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.u(a,b,b+3).toUpperCase()
return},
kV:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.l])
C.a.q(t,0,37)
C.a.q(t,1,C.c.H("0123456789ABCDEF",a>>>4))
C.a.q(t,2,C.c.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.f.iQ(a,6*r)&63|s
C.a.q(t,q,37)
C.a.q(t,q+1,C.c.H("0123456789ABCDEF",p>>>4))
C.a.q(t,q+2,C.c.H("0123456789ABCDEF",p&15))
q+=3}}return P.dM(t,0,null)},
cN:function(a,b,c,d,e){var u=P.kZ(a,b,c,H.h(d,"$ia",[P.l],"$aa"),e)
return u==null?C.c.u(a,b,c):u},
kZ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.h(d,"$ia",[P.l],"$aa")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Z()
if(typeof c!=="number")return H.B(c)
if(!(t<c))break
c$0:{q=C.c.a0(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.d(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.l_(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.d(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cM(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a0(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.kV(q)}}if(r==null)r=new P.af("")
r.a+=C.c.u(a,s,t)
r.a+=H.i(o)
if(typeof n!=="number")return H.B(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Z()
if(s<c)r.a+=C.c.u(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
kY:function(a){if(C.c.a5(a,"."))return!0
return C.c.eu(a,"/.")!==-1},
nb:function(a){var u,t,s,r,q,p,o
if(!P.kY(a))return a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.M(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.l(u,"/")},
na:function(a,b){var u,t,s,r,q,p
if(!P.kY(a))return!b?P.kW(a):a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaz(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaz(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.d(u,0)
C.a.q(u,0,P.kW(u[0]))}return C.a.l(u,"/")},
kW:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.kX(J.lM(a,0)))for(t=1;t<u;++t){s=C.c.H(a,t)
if(s===58)return C.c.u(a,0,t)+"%3A"+C.c.ap(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.d(C.u,r)
r=(C.u[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
n1:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cZ("Invalid URL encoding"))}}return u},
jG:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.H(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.u(a,b,c)
else q=new H.t(C.c.u(a,b,c))}else{q=H.b([],[P.l])
for(r=a.length,t=b;t<c;++t){s=C.c.H(a,t)
if(s>127)throw H.c(P.cZ("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.cZ("Truncated URI"))
C.a.h(q,P.n1(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.h(q,"$ia",[P.l],"$aa")
return new P.hC(!1).cv(q)},
kX:function(a){var u=a|32
return 97<=u&&u<=122},
kE:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.b([b-1],[P.l])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.H(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a0("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a0("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.H(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaz(u)
if(q!==44||s!==o+7||!C.c.aa(a,"base64",o+1))throw H.c(P.a0("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.Q.ky(a,n,t)
else{m=P.kZ(a,n,t,C.t,!0)
if(m!=null)a=C.c.aW(a,n,t,m)}return new P.hw(a,u,c)},
nd:function(){var u,t,s,r,q
u=P.mi(22,new P.iM(),!0,P.N)
t=new P.iL(u)
s=new P.iN()
r=new P.iO()
q=H.e(t.$2(0,225),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(14,225),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(15,225),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(1,225),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(2,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(3,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(4,229),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(5,229),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(6,231),"$iN")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(7,231),"$iN")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.e(t.$2(8,8),"$iN"),"]",5)
q=H.e(t.$2(9,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(16,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(17,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(10,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(18,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(19,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(11,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(12,236),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.e(t.$2(13,237),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.e(t.$2(20,245),"$iN"),"az",21)
q=H.e(t.$2(21,245),"$iN")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
l3:function(a,b,c,d,e){var u,t,s,r,q
H.h(e,"$ia",[P.l],"$aa")
u=$.lH()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.d(u,d)
s=u[d]
r=C.c.H(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.d(s,r)
q=s[r]
d=q&31
C.a.q(e,q>>>5,t)}return d},
O:function O(){},
ar:function ar(a,b){this.a=a
this.b=b},
p:function p(){},
aM:function aM(a){this.a=a},
eN:function eN(){},
eO:function eO(){},
bi:function bi(){},
dz:function dz(){},
aC:function aC(a,b,c,d){var _=this
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
f6:function f6(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hv:function hv(a){this.a=a},
hs:function hs(a){this.a=a},
bP:function bP(a){this.a=a},
eG:function eG(a){this.a=a},
fF:function fF(){},
dK:function dK(){},
eK:function eK(a){this.a=a},
e8:function e8(a){this.a=a},
f0:function f0(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(){},
l:function l(){},
n:function n(){},
aN:function aN(){},
a:function a(){},
H:function H(){},
D:function D(){},
ag:function ag(){},
L:function L(){},
ap:function ap(){},
f:function f(){},
af:function af(a){this.a=a},
hA:function hA(a){this.a=a},
hx:function hx(a){this.a=a},
hy:function hy(a){this.a=a},
hz:function hz(a,b){this.a=a
this.b=b},
bS:function bS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
iA:function iA(a,b){this.a=a
this.b=b},
iB:function iB(){},
iD:function iD(a,b){this.a=a
this.b=b},
iC:function iC(a){this.a=a},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
iM:function iM(){},
iL:function iL(a){this.a=a},
iN:function iN(){},
iO:function iO(){},
iq:function iq(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
hZ:function hZ(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
ns:function(a){var u,t
u=J.Q(a)
if(!!u.$ib0){t=u.gdZ(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.el(a.data,a.height,a.width)},
nr:function(a){if(a instanceof P.el)return{data:a.a,height:a.b,width:a.c}
return a},
nq:function(a,b){var u={}
a.Y(0,new P.iS(u))
return u},
ir:function ir(){},
it:function it(a,b){this.a=a
this.b=b},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
iS:function iS(a){this.a=a},
is:function is(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
eY:function eY(){},
eZ:function eZ(){},
id:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mW:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ig:function ig(){},
ax:function ax(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cn:function cn(){},
o:function o(){},
N:function N(){},
d0:function d0(){},
dc:function dc(){},
dC:function dC(){},
bO:function bO(){},
dH:function dH(){},
dQ:function dQ(){},
dZ:function dZ(){}},W={
k3:function(a){var u=document.createElement("a")
return u},
jo:function(a,b){var u=document.createElement("canvas")
return u},
m2:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ac(u,a,b,c)
t.toString
u=W.A
u=new H.cE(new W.al(t),H.k(new W.eQ(),{func:1,ret:P.O,args:[u]}),[u])
return H.e(u.gaM(u),"$iP")},
m3:function(a){H.e(a,"$ibA")
return"wheel"},
c9:function(a){var u,t,s
u="element tag unavailable"
try{t=J.lQ(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ac(s)}return u},
m6:function(a){var u,t,s
t=document.createElement("input")
u=H.e(t,"$ice")
try{u.type=a}catch(s){H.ac(s)}return u},
ic:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kS:function(a,b,c,d){var u,t
u=W.ic(W.ic(W.ic(W.ic(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a4:function(a,b,c,d,e){var u,t
u=W.l6(new W.i2(c),W.m)
t=u!=null
if(t&&!0){H.k(u,{func:1,args:[W.m]})
if(t)J.lL(a,b,u,!1)}return new W.i1(a,b,u,!1,[e])},
kR:function(a){var u,t
u=W.k3(null)
t=window.location
u=new W.br(new W.il(u,t))
u.fF(a)
return u},
mU:function(a,b,c,d){H.e(a,"$iP")
H.E(b)
H.E(c)
H.e(d,"$ibr")
return!0},
mV:function(a,b,c,d){var u,t,s
H.e(a,"$iP")
H.E(b)
H.E(c)
u=H.e(d,"$ibr").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kT:function(){var u,t,s,r,q
u=P.f
t=P.ki(C.z,u)
s=H.r(C.z,0)
r=H.k(new W.iw(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.iv(t,P.dn(null,null,null,u),P.dn(null,null,null,u),P.dn(null,null,null,u),null)
t.fP(null,new H.fp(C.z,r,[s,u]),q,null)
return t},
l6:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.U
if(u===C.l)return a
return u.dU(a,b)},
w:function w(){},
cY:function cY(){},
ex:function ex(){},
c3:function c3(){},
bd:function bd(){},
bv:function bv(){},
bw:function bw(){},
be:function be(){},
c7:function c7(){},
eJ:function eJ(){},
aw:function aw(){},
c8:function c8(){},
eM:function eM(){},
d8:function d8(){},
d9:function d9(){},
hY:function hY(a,b){this.a=a
this.b=b},
P:function P(){},
eQ:function eQ(){},
m:function m(){},
bA:function bA(){},
f_:function f_(){},
dd:function dd(){},
de:function de(){},
bC:function bC(){},
df:function df(){},
b0:function b0(){},
cd:function cd(){},
ce:function ce(){},
aO:function aO(){},
dl:function dl(){},
dp:function dp(){},
ci:function ci(){},
a8:function a8(){},
al:function al(a){this.a=a},
A:function A(){},
ck:function ck(){},
dD:function dD(){},
fS:function fS(){},
aS:function aS(){},
dN:function dN(){},
dO:function dO(){},
h6:function h6(){},
cr:function cr(){},
aI:function aI(){},
aJ:function aJ(){},
hf:function hf(){},
bp:function bp(){},
hQ:function hQ(){},
aW:function aW(){},
cF:function cF(){},
cG:function cG(){},
e7:function e7(){},
ed:function ed(){},
hX:function hX(){},
i_:function i_(a){this.a=a},
i0:function i0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jD:function jD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i1:function i1(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
i2:function i2(a){this.a=a},
br:function br(a){this.a=a},
as:function as(){},
dy:function dy(a){this.a=a},
fC:function fC(a){this.a=a},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
eg:function eg(){},
io:function io(){},
ip:function ip(){},
iv:function iv(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iw:function iw(){},
iu:function iu(){},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
au:function au(){},
il:function il(a,b){this.a=a
this.b=b},
eo:function eo(a){this.a=a},
iH:function iH(a){this.a=a},
e6:function e6(){},
e9:function e9(){},
ea:function ea(){},
ee:function ee(){},
ef:function ef(){},
ej:function ej(){},
ek:function ek(){},
ep:function ep(){},
eq:function eq(){}},O={
jp:function(a){var u=new O.a_([a])
u.bW(a)
return u},
a_:function a_(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
ch:function ch(){this.b=this.a=null},
ds:function ds(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fr:function fr(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cg:function cg(){},
fs:function fs(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aP:function aP(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fu:function fu(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fv:function fv(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bQ:function bQ(){}},E={
ke:function(a,b,c,d,e,f){var u=new E.ai()
u.a=d
u.b=!0
u.sfE(0,O.jp(E.ai))
u.y.bf(u.gkz(),u.gkC())
u.z=null
u.Q=null
u.ch=null
u.cx=null
u.cy=null
u.db=null
u.dx=null
u.dy=null
u.fr=null
u.fx=null
u.sai(0,e)
u.sae(c)
return u},
mB:function(a,b){var u=new E.fN(a,b)
u.fw(a,b)
return u},
mF:function(a,b,c,d,e){var u,t,s,r
u=J.Q(a)
if(!!u.$ibv)return E.kA(a,!0,!0,!0,!1)
t=W.jo(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcu(a).h(0,t)
r=E.kA(t,!0,!0,!0,!1)
r.a=a
return r},
kA:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dV()
t=P.me(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
s=C.q.bQ(a,"webgl",t)
s=H.e(s==null?C.q.bQ(a,"experimental-webgl",t):s,"$ibO")
if(s==null)H.q(P.u("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.mB(s,a)
r=new T.h9(s)
r.b=H.ab((s&&C.b).d0(s,3379))
r.c=H.ab(C.b.d0(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.e1(a)
q=new X.fc()
q.c=new X.aH(!1,!1,!1)
q.sir(P.dn(null,null,null,P.l))
r.b=q
q=new X.fw(r)
q.f=0
q.r=V.bo()
q.x=V.bo()
q.Q=1
q.ch=1
r.c=q
q=new X.fj(r)
q.r=0
q.x=V.bo()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.he(r)
q.e=0
q.f=V.bo()
q.r=V.bo()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sha(H.b([],[[P.cq,P.L]]))
q=r.z
p=document
o=W.a8
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a4(p,"contextmenu",H.k(r.ghN(),n),!1,o))
q=r.z
m=W.m
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a4(a,"focus",H.k(r.ghT(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a4(a,"blur",H.k(r.ghH(),l),!1,m))
q=r.z
k=W.aO
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a4(p,"keyup",H.k(r.ghX(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a4(p,"keydown",H.k(r.ghV(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a4(a,"mousedown",H.k(r.gi0(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a4(a,"mouseup",H.k(r.gi4(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a4(a,"mousemove",H.k(r.gi2(),n),!1,o))
k=r.z
j=W.aW;(k&&C.a).h(k,W.a4(a,H.E(W.m3(a)),H.k(r.gi6(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a4(p,"mousemove",H.k(r.ghP(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a4(p,"mouseup",H.k(r.ghR(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a4(p,"pointerlockchange",H.k(r.gi8(),l),!1,m))
m=r.z
l=W.aJ
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a4(a,"touchstart",H.k(r.gio(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a4(a,"touchend",H.k(r.gij(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a4(a,"touchmove",H.k(r.gil(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ar(Date.now(),!1)
u.cy=0
u.dG()
return u},
eB:function eB(){},
ai:function ai(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fN:function fN(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fO:function fO(a){this.a=a},
fP:function fP(a){this.a=a},
fQ:function fQ(a){this.a=a},
dL:function dL(a,b){this.c=a
this.a=b
this.b=null},
dV:function dV(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hb:function hb(a){this.a=a}},Z={
jC:function(a,b,c){var u
H.h(c,"$ia",[P.l],"$aa")
u=a.createBuffer()
C.b.av(a,b,u)
C.b.dW(a,b,new Int16Array(H.bT(c)),35044)
C.b.av(a,b,null)
return new Z.e4(b,u)},
ay:function(a){return new Z.aV(a)},
e4:function e4(a,b){this.a=a
this.b=b},
d1:function d1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hR:function hR(a){this.a=a},
d2:function d2(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
aV:function aV(a){this.a=a}},D={
R:function(){var u=new D.bz()
u.saj(null)
u.sb_(null)
u.c=null
u.d=0
return u},
eE:function eE(){},
bz:function bz(){var _=this
_.d=_.c=_.b=_.a=null},
eU:function eU(a){this.a=a},
eV:function eV(a){this.a=a},
y:function y(a){this.a=a
this.b=null},
bE:function bE(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bF:function bF(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
G:function G(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
ka:function(a,b){var u=new D.bh()
u.c=new V.V(1,1,1)
u.a=V.kP()
u.sae(b)
u.sa8(0,a)
return u},
bh:function bh(){var _=this
_.d=_.c=_.b=_.a=null},
a1:function a1(){},
dm:function dm(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dB:function dB(){},
dJ:function dJ(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){}},X={d3:function d3(a,b){this.a=a
this.b=b},dk:function dk(a,b){this.a=a
this.b=b},fc:function fc(){var _=this
_.d=_.c=_.b=_.a=null},dq:function dq(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fj:function fj(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aH:function aH(a,b,c){this.a=a
this.b=b
this.c=c},bm:function bm(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fw:function fw(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},fI:function fI(){},dX:function dX(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},he:function he(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},e1:function e1(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
m5:function(a,b,c,d,e,f,g){var u,t
u=new X.f1()
t=new V.aD(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.kv
if(t==null){t=V.ku(0,0,1,1)
$.kv=t}u.r=t
return u},
d4:function d4(){},
f1:function f1(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dA:function dA(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dP:function dP(){}},V={
jj:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.be(a-b,u)
return(a<0?a+u:a)+b},
K:function(a,b,c){if(a==null)return C.c.af("null",c)
return C.c.af(C.e.eV(Math.abs(a-0)<$.F().a?0:a,b),c+b+1)},
bY:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ia",[P.p],"$aa")
u=H.b([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.z)(a),++r){q=V.K(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.q(u,p,C.c.af(u[p],s))}return u},
jT:function(a,b){return C.e.l4(Math.pow(b,C.a_.cI(Math.log(H.np(a))/Math.log(b))))},
mk:function(a){return new V.bI(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q)},
dt:function(){var u=$.km
if(u==null){u=V.aQ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.km=u}return u},
aQ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ad(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jw:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aQ(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
kk:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aQ(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
kl:function(a,b,c,d){d=V.kO()
return V.kj(V.kr(),d,new V.C(a,b,c))},
kj:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.C(0,Math.sqrt(c.I(c)))
t=b.aI(u)
s=t.C(0,Math.sqrt(t.I(t)))
r=u.aI(s)
q=new V.C(a.a,a.b,a.c)
p=s.V(0).I(q)
o=r.V(0).I(q)
n=u.V(0).I(q)
return V.aQ(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bo:function(){var u=$.kq
if(u==null){u=new V.a3(0,0)
$.kq=u}return u},
kr:function(){var u=$.cl
if(u==null){u=new V.Z(0,0,0)
$.cl=u}return u},
ku:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dF(a,b,c,d)},
cD:function(){var u=$.kN
if(u==null){u=new V.C(0,0,0)
$.kN=u}return u},
kO:function(){var u=$.kM
if(u==null){u=new V.C(0,1,0)
$.kM=u}return u},
kP:function(){var u=$.hE
if(u==null){u=new V.C(0,0,1)
$.hE=u}return u},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eS:function eS(a){this.a=a},
bI:function bI(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ad:function ad(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a3:function a3(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dF:function dF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
T:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.H(a,0)
t=C.c.H(b,0)
s=new V.fL()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.fT()
u.fz(a)
return u},
hd:function(){var u,t
u=new V.hc()
t=P.f
u.siS(new H.aG([t,V.cp]))
u.siW(new H.aG([t,V.ct]))
u.c=null
return u},
aY:function aY(){},
at:function at(){},
dr:function dr(){},
ao:function ao(){this.a=null},
fL:function fL(){this.b=this.a=null},
fT:function fT(){this.a=null},
cp:function cp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dW:function dW(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(a,b){this.a=a
this.b=b
this.c=null},
hc:function hc(){this.c=this.b=this.a=null},
cu:function cu(a){this.b=a
this.a=this.c=null},
nR:function(a){P.mG(C.V,new V.je(a))},
mD:function(a,b){var u=new V.fX()
u.fB(a,!0)
return u},
bf:function bf(){},
je:function je(a){this.a=a},
eL:function eL(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f2:function f2(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f3:function f3(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fH:function fH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fJ:function fJ(a,b){this.a=a
this.b=b
this.c=null},
fK:function fK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fX:function fX(){this.b=this.a=null},
fZ:function fZ(a){this.a=a},
fY:function fY(a){this.a=a},
h_:function h_(a){this.a=a}},U={
k9:function(){var u=new U.eF()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
d6:function(a){var u=new U.d5()
u.a=a
return u},
kw:function(a,b,c,d,e,f){var u,t
u=new U.dG()
u.a=0
u.b=0
u.c=0
u.d=0
u.e=0
u.f=0
u.r=0
u.sf2(f)
u.seK(d)
u.seQ(e)
t=u.d
if(!(Math.abs(t-c)<$.F().a)){u.d=c
t=new D.G("deltaYaw",t,c,u,[P.p])
t.b=!0
u.S(t)}t=u.e
if(!(Math.abs(t-a)<$.F().a)){u.e=a
t=new D.G("deltaPitch",t,a,u,[P.p])
t.b=!0
u.S(t)}t=u.f
if(!(Math.abs(t-b)<$.F().a)){u.f=b
t=new D.G("deltaRoll",t,b,u,[P.p])
t.b=!0
u.S(t)}return u},
kI:function(a,b,c,d,e,f,g,h){var u,t,s,r,q
u=new U.e2()
t=U.k9()
t.sf1(0,!0)
t.sey(6.283185307179586)
t.seA(0)
t.sa4(0,0)
t.sez(100)
t.sa2(0)
t.sdY(0.5)
u.b=t
s=u.gbi()
t.gB().h(0,s)
t=U.k9()
t.sf1(0,!0)
t.sey(6.283185307179586)
t.seA(0)
t.sa4(0,0)
t.sez(100)
t.sa2(0)
t.sdY(0.5)
u.c=t
t.gB().h(0,s)
u.d=null
u.e=!1
u.f=!1
u.r=!1
u.x=2.5
u.y=2.5
u.z=2
u.Q=4
u.cx=!1
u.ch=!1
u.cy=0
u.db=0
u.dx=null
u.dy=0
u.fr=null
u.fx=null
r=new X.aH(b,!1,!1)
q=u.d
u.d=r
t=new D.G("modifiers",q,r,u,[X.aH])
t.b=!0
u.S(t)
t=u.f
if(t!==!1){u.f=!1
t=new D.G("invertX",t,!1,u,[P.O])
t.b=!0
u.S(t)}t=u.r
if(t!==!1){u.r=!1
t=new D.G("invertY",t,!1,u,[P.O])
t.b=!0
u.S(t)}u.jE(c)
return u},
eF:function eF(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d5:function d5(){this.b=this.a=null},
cc:function cc(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ae:function ae(){},
dG:function dG(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={da:function da(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mj:function(a,b){var u,t
u=a.al
t=new A.fq(b,u)
t.fA(b,u)
t.fv(a,b)
return t},
jz:function(a,b,c,d,e){var u=new A.hk(a,b,c,e)
u.f=d
u.sj6(P.mg(d,0,!1,P.l))
return u},
d_:function d_(a,b,c){this.a=a
this.b=b
this.c=c},
ey:function ey(a){this.a=a},
fq:function fq(a,b){var _=this
_.bs=_.e1=_.br=_.al=_.ax=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eh=_.cB=_.eg=_.bF=_.ef=_.ee=_.bE=_.bD=_.ed=_.ec=_.bC=_.bB=_.bA=_.eb=_.ea=_.bz=_.e9=_.e8=_.by=_.e7=_.e6=_.bx=_.bw=_.e5=_.e4=_.bv=_.bu=_.e3=_.e2=_.bt=null
_.cG=_.el=_.cF=_.ek=_.cE=_.ej=_.cD=_.ei=_.cC=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ft:function ft(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ax=b3
_.al=b4
_.br=b5},
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
co:function co(){},
by:function by(a,b){this.a=a
this.b=b},
dY:function dY(){},
hq:function hq(a){this.a=a},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hm:function hm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hn:function hn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hp:function hp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hk:function hk(a,b,c,d){var _=this
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
hl:function hl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ho:function ho(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hr:function hr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
jO:function(a,b,c,d){var u
H.k(c,{func:1,ret:-1,args:[F.a9,P.p,P.p]})
u=F.jx()
F.cO(u,b,c,d,a,1,0,0,1)
F.cO(u,b,c,d,a,0,1,0,3)
F.cO(u,b,c,d,a,0,0,1,2)
F.cO(u,b,c,d,a,-1,0,0,0)
F.cO(u,b,c,d,a,0,-1,0,0)
F.cO(u,b,c,d,a,0,0,-1,3)
u.aw()
return u},
iK:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cO:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.k(c,{func:1,ret:-1,args:[F.a9,P.p,P.p]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.C(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.C(o+a3,n+a1,m+a2)
u.b=l
k=new V.C(o-a3,n-a1,m-a2)
u.c=k
j=new V.C(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.iK(t)
f=F.iK(u.b)
e=F.jW(d,a0,new F.iJ(u,F.iK(u.c),F.iK(u.d),f,g,c),b)
if(e!=null)a.b7(e)},
lc:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.k(e,{func:1,ret:P.p,args:[P.p]})
if(a0<3)return
u=F.jx()
t=b?-1:1
s=-6.283185307179586/a0
r=H.b([],[F.a9])
q=u.a
p=new V.C(0,0,t)
p=p.C(0,Math.sqrt(p.I(p)))
C.a.h(r,q.jx(new V.aR(a,-1,-1,-1),new V.aD(1,1,1,1),new V.Z(0,0,d),new V.C(0,0,t),new V.a3(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.B(k)
j=new V.C(m,l,t).C(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.e3(new V.aR(a,-1,-1,-1),null,new V.aD(i,g,h,1),new V.Z(m*k,l*k,d),new V.C(0,0,t),new V.a3(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.jv(r)
return u},
la:function(a,b,c,d,e,f){return F.nt(!0,c,d,new F.iT(a,f),e)},
nt:function(a,b,c,d,e){var u
H.k(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
u=F.jW(c,e,new F.iV(d),null)
if(u==null)return
u.aw()
u.ck()
if(b)u.b7(F.lc(3,!1,!1,1,new F.iW(d),e))
u.b7(F.lc(1,!0,!1,-1,new F.iX(d),e))
return u},
nS:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.jf()
t=F.jO(a,null,new F.jg(u,c),d)
t.ck()
return t},
ln:function(a,b,c,d){return F.lb(c,a,d,b,new F.jh())},
nJ:function(a,b,c,d,e,f){return F.lb(d,a,e,b,new F.j3(f,c))},
lb:function(a,b,c,d,e){var u=F.jW(a,b,new F.iU(H.k(e,{func:1,ret:V.Z,args:[P.p]}),d,b,c),null)
if(u==null)return
u.aw()
u.ck()
return u},
jW:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.a9,P.p,P.p]})
if(a<1)return
if(b<1)return
u=F.jx()
t=H.b([],[F.a9])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.e3(null,null,new V.aD(p,0,0,1),null,null,new V.a3(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cw(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.e3(null,null,new V.aD(j,i,h,1),null,null,new V.a3(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cw(d))}}u.d.jw(a+1,b+1,t)
return u},
ca:function(a,b,c){var u,t
u=new F.a2()
t=a.a
if(t==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
u.ci(a)
u.cj(b)
u.iL(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a3()
return u},
mc:function(a,b){var u,t
u=new F.b3()
t=a.a
if(t==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
u.ci(a)
u.cj(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a3()
return u},
jx:function(){var u,t
u=new F.dI()
t=new F.hF(u)
t.b=!1
t.sj7(H.b([],[F.a9]))
u.a=t
t=new F.fW(u)
t.sc9(H.b([],[F.bn]))
u.b=t
t=new F.fV(u)
t.shl(H.b([],[F.b3]))
u.c=t
t=new F.fU(u)
t.shb(H.b([],[F.a2]))
u.d=t
u.e=null
return u},
e3:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.a9()
t=new F.hN(u)
t.sc9(H.b([],[F.bn]))
u.b=t
t=new F.hJ(u)
s=[F.b3]
t.shm(H.b([],s))
t.shn(H.b([],s))
u.c=t
t=new F.hG(u)
s=[F.a2]
t.shc(H.b([],s))
t.shd(H.b([],s))
t.she(H.b([],s))
u.d=t
h=$.lB()
u.e=0
t=$.ba()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.b9().a)!==0?e:null
u.x=(s&$.b8().a)!==0?b:null
u.y=(s&$.bb().a)!==0?f:null
u.z=(s&$.bc().a)!==0?g:null
u.Q=(s&$.lC().a)!==0?c:null
u.ch=(s&$.c2().a)!==0?i:0
u.cx=(s&$.b7().a)!==0?a:null
return u},
iJ:function iJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iT:function iT(a,b){this.a=a
this.b=b},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
iX:function iX(a){this.a=a},
jf:function jf(){},
jg:function jg(a,b){this.a=a
this.b=b},
jh:function jh(){},
j3:function j3(a,b){this.a=a
this.b=b},
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eW:function eW(){},
h0:function h0(){},
b3:function b3(){this.b=this.a=null},
fd:function fd(){},
hj:function hj(){},
bn:function bn(){this.a=null},
dI:function dI(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fU:function fU(a){this.a=a
this.b=null},
fV:function fV(a){this.a=a
this.b=null},
fW:function fW(a){this.a=a
this.b=null},
a9:function a9(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hP:function hP(a){this.a=a},
hO:function hO(a){this.a=a},
hF:function hF(a){this.a=a
this.c=this.b=null},
hG:function hG(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
hJ:function hJ(a){this.a=a
this.c=this.b=null},
hL:function hL(){},
hK:function hK(){},
hM:function hM(){},
fD:function fD(){},
hN:function hN(a){this.a=a
this.b=null}},T={cs:function cs(){},dR:function dR(){},h8:function h8(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},h9:function h9(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},ha:function ha(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},K={
li:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=V.mD("Test 026",!0)
t=W.jo(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.E(u.a,t)
s=[P.f]
u.dQ(H.b(["Test of the Material Lighting shader with a textured directional light. ","The texturing of the directional light is being modified with a matrix. ","The texture metrix is updated using the pre-update mathods. ","Use Ctrl plus the mouse to move the center object."],s))
u.ju(H.b(["shapes"],s))
u.dQ(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=C.y.d_(s,"testCanvas")
if(r==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
q=E.mF(r,!0,!0,!0,!1)
p=D.ka(null,null)
p.sae(U.d6(V.kl(0.3,0.4,1,null)))
o=D.ka(null,null)
o.sae(U.d6(V.kl(-0.3,-0.4,-1,null)))
o.sa8(0,new V.V(0.125,0.125,0.125))
n=new O.ds()
n.sfZ(O.jp(V.ad))
n.e.bf(n.ghD(),n.ghF())
m=new O.aP(n,"emission")
m.c=C.d
m.f=new V.V(0,0,0)
n.f=m
m=new O.aP(n,"ambient")
m.c=C.d
m.f=new V.V(0,0,0)
n.r=m
m=new O.aP(n,"diffuse")
m.c=C.d
m.f=new V.V(0,0,0)
n.x=m
m=new O.aP(n,"invDiffuse")
m.c=C.d
m.f=new V.V(0,0,0)
n.y=m
m=new O.fv(n,"specular")
m.c=C.d
m.f=new V.V(0,0,0)
m.ch=100
n.z=m
m=new O.fs(n,"bump")
m.c=C.d
n.Q=m
n.ch=null
m=new O.aP(n,"reflect")
m.c=C.d
m.f=new V.V(0,0,0)
n.cx=m
m=new O.fu(n,"refract")
m.c=C.d
m.f=new V.V(0,0,0)
m.ch=1
n.cy=m
m=new O.fr(n,"alpha")
m.c=C.d
m.f=1
n.db=m
m=new D.dm()
m.bW(D.a1)
m.sh7(H.b([],[D.bh]))
m.siq(H.b([],[D.dB]))
m.siR(H.b([],[D.dJ]))
m.sj3(H.b([],[D.dS]))
m.sj4(H.b([],[D.dT]))
m.sj5(H.b([],[D.dU]))
m.Q=null
m.ch=null
m.d2(m.ghB(),m.gib(),m.gih())
n.dx=m
l=m.Q
if(l==null){l=D.R()
m.Q=l
m=l}else m=l
m.h(0,n.giC())
m=n.dx
l=m.ch
if(l==null){l=D.R()
m.ch=l
m=l}else m=l
m.h(0,n.gbl())
n.dy=null
n.dx.h(0,p)
n.dx.h(0,o)
n.f.sa8(0,new V.V(0,0,0))
m=n.r
m.sa8(0,new V.V(0.1,0.1,0.1))
m=n.x
m.sa8(0,new V.V(0.8,0.8,0.8))
m=n.z
m.sa8(0,new V.V(0.2,0.2,0.2))
m=n.z
if(m.c===C.d){m.c=C.j
m.bV()
m.ce(100)
l=m.a
l.a=null
l.a_(null)}m.ce(100)
m=n.x
l=q.f.ku("../resources/Test.png",!0)
k=m.c
if(k!==C.h){if(k===C.d)m.aG()
m.c=C.h
m.iK(null)
k=m.a
k.a=null
k.a_(null)}m.iJ(l)
j=E.ke(null,!0,null,"",null,null)
j.sae(U.kI(!1,!0,q.r,!1,!1,!1,null,!1))
j.sai(0,F.ln(30,1,15,0.5))
i=E.ke(null,!0,null,"",null,null)
i.sae(U.d6(V.aQ(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
m=F.jO(1,null,null,1)
m.cH()
i.sai(0,m)
h=new U.cc()
h.bW(U.ae)
h.bf(h.ghz(),h.gie())
h.e=null
h.f=V.dt()
h.r=0
h.h(0,U.kI(!1,!1,q.r,!1,!1,!1,null,!1))
h.h(0,U.d6(V.jw(3.141592653589793)))
h.h(0,U.d6(V.aQ(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
g=U.kw(0.5,0.7,0.3,0,0,0)
f=U.kw(0,0.1,0,0,0,0)
m=new M.da()
m.sh1(0,O.jp(E.ai))
m.d.bf(m.ghJ(),m.ghL())
m.e=null
m.f=null
m.r=null
m.x=null
e=X.m5(!0,!0,!1,null,2000,null,0)
d=new X.dA()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.sae(null)
l=d.c
if(!(Math.abs(l-1.0471975511965976)<$.F().a)){d.c=1.0471975511965976
l=new D.G("fov",l,1.0471975511965976,d,[P.p])
l.b=!0
d.aO(l)}l=d.d
if(!(Math.abs(l-0.1)<$.F().a)){d.d=0.1
l=new D.G("near",l,0.1,d,[P.p])
l.b=!0
d.aO(l)}l=d.e
if(!(Math.abs(l-2000)<$.F().a)){d.e=2000
l=new D.G("far",l,2000,d,[P.p])
l.b=!0
d.aO(l)}l=m.a
if(l!==d){if(l!=null)l.gB().M(0,m.gar())
c=m.a
m.a=d
d.gB().h(0,m.gar())
l=new D.G("camera",c,m.a,m,[X.d4])
l.b=!0
m.aD(l)}l=m.b
if(l!==e){if(l!=null)l.gB().M(0,m.gar())
c=m.b
m.b=e
e.gB().h(0,m.gar())
l=new D.G("target",c,m.b,m,[X.dP])
l.b=!0
m.aD(l)}m.seS(null)
m.seS(n)
m.d.h(0,j)
m.d.h(0,i)
m.a.sae(h)
l=m.e
if(l==null){l=D.R()
m.e=l}l.h(0,new K.j4(n,g,f))
l=q.d
if(l!==m){if(l!=null)l.gB().M(0,q.gd5())
q.d=m
m.gB().h(0,q.gd5())
q.d6()}m=new V.fJ("shapes",!0)
s=C.y.d_(s,"shapes")
m.c=s
if(s==null)H.q("Failed to find shapes for RadioGroup")
m.b2(0,"Cube",new K.j5(j))
m.b2(0,"Cylinder",new K.j6(j))
m.b2(0,"Cone",new K.j7(j))
m.b2(0,"Sphere",new K.j8(j))
m.dO(0,"Toroid",new K.j9(j),!0)
m.b2(0,"Knot",new K.ja(j))
s=q.z
if(s==null){s=D.R()
q.z=s}m={func:1,ret:-1,args:[D.y]}
l=H.k(new K.jb(u,n),m)
if(s.b==null)s.sb_(H.b([],[m]))
s=s.b;(s&&C.a).h(s,l)
V.nR(q)},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
jb:function jb(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jt.prototype={}
J.a7.prototype={
v:function(a,b){return a===b},
gJ:function(a){return H.cm(a)},
i:function(a){return"Instance of '"+H.bL(a)+"'"}}
J.f9.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iO:1}
J.di.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iD:1}
J.dj.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.fG.prototype={}
J.bq.prototype={}
J.b2.prototype={
i:function(a){var u=a[$.lp()]
if(u==null)return this.fp(a)
return"JavaScript function for "+H.i(J.an(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibj:1}
J.aE.prototype={
h:function(a,b){H.x(b,H.r(a,0))
if(!!a.fixed$length)H.q(P.X("add"))
a.push(b)},
kR:function(a,b){var u
if(!!a.fixed$length)H.q(P.X("removeAt"))
u=a.length
if(b>=u)throw H.c(P.dE(b,null,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.q(P.X("remove"))
for(u=0;u<a.length;++u)if(J.M(a[u],b)){a.splice(u,1)
return!0}return!1},
Y:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.aZ(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.q(u,t,H.i(a[t]))
return u.join(b)},
kr:function(a){return this.l(a,"")},
kj:function(a,b,c,d){var u,t,s
H.x(b,d)
H.k(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.aZ(a))}return t},
ki:function(a,b,c){var u,t,s
H.k(b,{func:1,ret:P.O,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.aZ(a))}throw H.c(H.f7())},
kh:function(a,b){return this.ki(a,b,null)},
a9:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
fm:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a6(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.a6(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.r(a,0)])
return H.b(a.slice(b,c),[H.r(a,0)])},
gkg:function(a){if(a.length>0)return a[0]
throw H.c(H.f7())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.f7())},
fj:function(a,b,c,d,e){var u,t,s
u=H.r(a,0)
H.h(d,"$in",[u],"$an")
if(!!a.immutable$list)H.q(P.X("setRange"))
P.b5(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.h(d,"$ia",[u],"$aa")
u=J.bZ(d)
if(e+t>u.gm(d))throw H.c(H.m8())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.k(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.k(d,e+s)},
bg:function(a,b,c,d){return this.fj(a,b,c,d,0)},
dR:function(a,b){var u,t
H.k(b,{func:1,ret:P.O,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.aZ(a))}return!1},
W:function(a,b){var u
for(u=0;u<a.length;++u)if(J.M(a[u],b))return!0
return!1},
i:function(a){return P.jr(a,"[","]")},
gU:function(a){return new J.aq(a,a.length,0,[H.r(a,0)])},
gJ:function(a){return H.cm(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.X("set length"))
if(b<0)throw H.c(P.a6(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(b>=a.length||b<0)throw H.c(H.bX(a,b))
return a[b]},
q:function(a,b,c){H.x(c,H.r(a,0))
if(!!a.immutable$list)H.q(P.X("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bX(a,b))
a[b]=c},
n:function(a,b){var u,t
u=[H.r(a,0)]
H.h(b,"$ia",u,"$aa")
t=C.f.n(a.length,b.gm(b))
u=H.b([],u)
this.sm(u,t)
this.bg(u,0,a.length,a)
this.bg(u,a.length,t,b)
return u},
$in:1,
$ia:1}
J.js.prototype={}
J.aq.prototype={
gL:function(){return this.d},
F:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.z(u))
s=this.c
if(s>=t){this.sdn(null)
return!1}this.sdn(u[s]);++this.c
return!0},
sdn:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
J.bl.prototype={
l4:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.X(""+a+".toInt()"))},
cI:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.X(""+a+".floor()"))},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.X(""+a+".round()"))},
eV:function(a,b){var u,t
if(b>20)throw H.c(P.a6(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bc:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a6(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a0(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.q(P.X("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.D("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
n:function(a,b){if(typeof b!=="number")throw H.c(H.am(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.am(b))
return a-b},
D:function(a,b){if(typeof b!=="number")throw H.c(H.am(b))
return a*b},
be:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fu:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dJ(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dJ(a,b)},
dJ:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.X("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aR:function(a,b){var u
if(a>0)u=this.dI(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iQ:function(a,b){if(b<0)throw H.c(H.am(b))
return this.dI(a,b)},
dI:function(a,b){return b>31?0:a>>>b},
$ip:1,
$iag:1}
J.dh.prototype={$il:1}
J.dg.prototype={}
J.b1.prototype={
a0:function(a,b){if(b<0)throw H.c(H.bX(a,b))
if(b>=a.length)H.q(H.bX(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.bX(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.c(P.jm(b,null,null))
return a+b},
aW:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.am(b))
c=P.b5(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aa:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.am(c))
if(typeof c!=="number")return c.Z()
if(c<0||c>a.length)throw H.c(P.a6(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.aa(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.am(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Z()
if(b<0)throw H.c(P.dE(b,null,null))
if(b>c)throw H.c(P.dE(b,null,null))
if(c>a.length)throw H.c(P.dE(c,null,null))
return a.substring(b,c)},
ap:function(a,b){return this.u(a,b,null)},
l7:function(a){return a.toLowerCase()},
D:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.S)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kG:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.D(c,u)+a},
af:function(a,b){return this.kG(a,b," ")},
ev:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a6(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eu:function(a,b){return this.ev(a,b,0)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$iko:1,
$if:1}
H.t.prototype={
gm:function(a){return this.a.length},
k:function(a,b){return C.c.a0(this.a,b)},
$acC:function(){return[P.l]},
$aS:function(){return[P.l]},
$an:function(){return[P.l]},
$aa:function(){return[P.l]}}
H.eP.prototype={}
H.bG.prototype={
gU:function(a){return new H.cf(this,this.gm(this),0,[H.aa(this,"bG",0)])},
bN:function(a,b){return this.fo(0,H.k(b,{func:1,ret:P.O,args:[H.aa(this,"bG",0)]}))}}
H.cf.prototype={
gL:function(){return this.d},
F:function(){var u,t,s,r
u=this.a
t=J.bZ(u)
s=t.gm(u)
if(this.b!==s)throw H.c(P.aZ(u))
r=this.c
if(r>=s){this.saY(null)
return!1}this.saY(t.a9(u,r));++this.c
return!0},
saY:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
H.fn.prototype={
gU:function(a){return new H.fo(J.bu(this.a),this.b,this.$ti)},
gm:function(a){return J.aB(this.a)},
a9:function(a,b){return this.b.$1(J.ew(this.a,b))},
$an:function(a,b){return[b]}}
H.fo.prototype={
F:function(){var u=this.b
if(u.F()){this.saY(this.c.$1(u.gL()))
return!0}this.saY(null)
return!1},
gL:function(){return this.a},
saY:function(a){this.a=H.x(a,H.r(this,1))},
$aaN:function(a,b){return[b]}}
H.fp.prototype={
gm:function(a){return J.aB(this.a)},
a9:function(a,b){return this.b.$1(J.ew(this.a,b))},
$abG:function(a,b){return[b]},
$an:function(a,b){return[b]}}
H.cE.prototype={
gU:function(a){return new H.hS(J.bu(this.a),this.b,this.$ti)}}
H.hS.prototype={
F:function(){var u,t
for(u=this.a,t=this.b;u.F();)if(t.$1(u.gL()))return!0
return!1},
gL:function(){return this.a.gL()}}
H.bB.prototype={}
H.cC.prototype={
q:function(a,b,c){H.x(c,H.aa(this,"cC",0))
throw H.c(P.X("Cannot modify an unmodifiable list"))}}
H.e_.prototype={}
H.eH.prototype={
i:function(a){return P.jv(this)},
q:function(a,b,c){H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
return H.m_()},
$iH:1}
H.eI.prototype={
gm:function(a){return this.a},
bp:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k:function(a,b){if(!this.bp(b))return
return this.dq(b)},
dq:function(a){return this.b[H.E(a)]},
Y:function(a,b){var u,t,s,r,q
u=H.r(this,1)
H.k(b,{func:1,ret:-1,args:[H.r(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.x(this.dq(q),u))}}}
H.fM.prototype={}
H.hg.prototype={
ad:function(a){var u,t,s
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
H.fE.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fb.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.i(this.a)+")"}}
H.hu.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ji.prototype={
$1:function(a){if(!!J.Q(a).$ibi)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.eh.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iap:1}
H.c6.prototype={
i:function(a){return"Closure '"+H.bL(this).trim()+"'"},
$ibj:1,
glg:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.h7.prototype={}
H.h1.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c1(u)+"'"}}
H.c4.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c4))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ:function(a){var u,t
u=this.c
if(u==null)t=H.cm(this.a)
else t=typeof u!=="object"?J.cX(u):H.cm(u)
return(t^H.cm(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.bL(u)+"'")}}
H.hi.prototype={
i:function(a){return this.a}}
H.eD.prototype={
i:function(a){return this.a}}
H.fR.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.aG.prototype={
gm:function(a){return this.a},
gkq:function(a){return this.a===0},
gay:function(){return new H.ff(this,[H.r(this,0)])},
bp:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.dk(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dk(t,a)}else return this.kn(a)},
kn:function(a){var u=this.d
if(u==null)return!1
return this.cL(this.c2(u,this.cK(a)),a)>=0},
k:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bj(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bj(r,b)
s=t==null?null:t.b
return s}else return this.ko(b)},
ko:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.c2(u,this.cK(a))
s=this.cL(t,a)
if(s<0)return
return t[s].b},
q:function(a,b,c){var u,t
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.c6()
this.b=u}this.da(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.c6()
this.c=t}this.da(t,b,c)}else this.kp(b,c)},
kp:function(a,b){var u,t,s,r
H.x(a,H.r(this,0))
H.x(b,H.r(this,1))
u=this.d
if(u==null){u=this.c6()
this.d=u}t=this.cK(a)
s=this.c2(u,t)
if(s==null)this.cf(u,t,[this.bX(a,b)])
else{r=this.cL(s,a)
if(r>=0)s[r].b=b
else s.push(this.bX(a,b))}},
Y:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.aZ(this))
u=u.c}},
da:function(a,b,c){var u
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
u=this.bj(a,b)
if(u==null)this.cf(a,b,this.bX(b,c))
else u.b=c},
fT:function(){this.r=this.r+1&67108863},
bX:function(a,b){var u,t
u=new H.fe(H.x(a,H.r(this,0)),H.x(b,H.r(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.fT()
return u},
cK:function(a){return J.cX(a)&0x3ffffff},
cL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.M(a[t].a,b))return t
return-1},
i:function(a){return P.jv(this)},
bj:function(a,b){return a[b]},
c2:function(a,b){return a[b]},
cf:function(a,b,c){a[b]=c},
h6:function(a,b){delete a[b]},
dk:function(a,b){return this.bj(a,b)!=null},
c6:function(){var u=Object.create(null)
this.cf(u,"<non-identifier-key>",u)
this.h6(u,"<non-identifier-key>")
return u},
$ikg:1}
H.fe.prototype={}
H.ff.prototype={
gm:function(a){return this.a.a},
gU:function(a){var u,t
u=this.a
t=new H.fg(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fg.prototype={
gL:function(){return this.d},
F:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.aZ(u))
else{u=this.c
if(u==null){this.sdc(null)
return!1}else{this.sdc(u.a)
this.c=this.c.c
return!0}}},
sdc:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
H.j_.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.j0.prototype={
$2:function(a,b){return this.a(a,b)},
$S:52}
H.j1.prototype={
$1:function(a){return this.a(H.E(a))},
$S:49}
H.fa.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$iko:1,
$imz:1}
H.bJ.prototype={$ibJ:1,$imH:1}
H.du.prototype={
gm:function(a){return a.length},
$iaF:1,
$aaF:function(){}}
H.dv.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]},
q:function(a,b,c){H.nv(c)
H.b6(b,a,a.length)
a[b]=c},
$abB:function(){return[P.p]},
$aS:function(){return[P.p]},
$in:1,
$an:function(){return[P.p]},
$ia:1,
$aa:function(){return[P.p]}}
H.dw.prototype={
q:function(a,b,c){H.ab(c)
H.b6(b,a,a.length)
a[b]=c},
$abB:function(){return[P.l]},
$aS:function(){return[P.l]},
$in:1,
$an:function(){return[P.l]},
$ia:1,
$aa:function(){return[P.l]}}
H.fx.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fy.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fz.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fA.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.dx.prototype={
gm:function(a){return a.length},
k:function(a,b){H.b6(b,a,a.length)
return a[b]},
$iof:1}
H.cj.prototype={
gm:function(a){return a.length},
k:function(a,b){H.b6(b,a,a.length)
return a[b]},
$icj:1,
$iN:1}
H.cI.prototype={}
H.cJ.prototype={}
H.cK.prototype={}
H.cL.prototype={}
P.hU.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:27}
P.hT.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:48}
P.hV.prototype={
$0:function(){this.a.$0()},
$S:0}
P.hW.prototype={
$0:function(){this.a.$0()},
$S:0}
P.ei.prototype={
fQ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bW(new P.iy(this,b),0),a)
else throw H.c(P.X("`setTimeout()` not found."))},
fR:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bW(new P.ix(this,a,Date.now(),b),0),a)
else throw H.c(P.X("Periodic timer."))},
$iaT:1}
P.iy.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.ix.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fu(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.aX.prototype={
kw:function(a){if(this.c!==6)return!0
return this.b.b.cX(H.k(this.d,{func:1,ret:P.O,args:[P.L]}),a.a,P.O,P.L)},
km:function(a){var u,t,s,r
u=this.e
t=P.L
s={futureOr:1,type:H.r(this,1)}
r=this.b.b
if(H.er(u,{func:1,args:[P.L,P.ap]}))return H.jP(r.kY(u,a.a,a.b,null,t,P.ap),s)
else return H.jP(r.cX(H.k(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
P.az.prototype={
eU:function(a,b,c){var u,t,s,r
u=H.r(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.U
if(t!==C.l){t.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.nh(b,t)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.az(0,$.U,[c])
r=b==null?1:3
this.de(new P.aX(s,r,a,b,[u,c]))
return s},
l3:function(a,b){return this.eU(a,null,b)},
de:function(a){var u,t
u=this.a
if(u<=1){a.a=H.e(this.c,"$iaX")
this.c=a}else{if(u===2){t=H.e(this.c,"$iaz")
u=t.a
if(u<4){t.de(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.iR(null,null,u,H.k(new P.i3(this,a),{func:1,ret:-1}))}},
dE:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.e(this.c,"$iaX")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.e(this.c,"$iaz")
t=p.a
if(t<4){p.dE(a)
return}this.a=t
this.c=p.c}u.a=this.bm(a)
t=this.b
t.toString
P.iR(null,null,t,H.k(new P.i7(u,this),{func:1,ret:-1}))}},
cb:function(){var u=H.e(this.c,"$iaX")
this.c=null
return this.bm(u)},
bm:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dg:function(a){var u,t,s
u=H.r(this,0)
H.jP(a,{futureOr:1,type:u})
t=this.$ti
if(H.cR(a,"$icb",t,"$acb"))if(H.cR(a,"$iaz",t,null))P.kQ(a,this)
else P.mT(a,this)
else{s=this.cb()
H.x(a,u)
this.a=4
this.c=a
P.cH(this,s)}},
dh:function(a,b){var u
H.e(b,"$iap")
u=this.cb()
this.a=8
this.c=new P.ah(a,b)
P.cH(this,u)},
$icb:1}
P.i3.prototype={
$0:function(){P.cH(this.a,this.b)},
$S:0}
P.i7.prototype={
$0:function(){P.cH(this.b,this.a.a)},
$S:0}
P.i4.prototype={
$1:function(a){var u=this.a
u.a=0
u.dg(a)},
$S:27}
P.i5.prototype={
$2:function(a,b){H.e(b,"$iap")
this.a.dh(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.i6.prototype={
$0:function(){this.a.dh(this.b,this.c)},
$S:0}
P.ia.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eR(H.k(r.d,{func:1}),null)}catch(q){t=H.ac(q)
s=H.c_(q)
if(this.d){r=H.e(this.a.a.c,"$iah").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.e(this.a.a.c,"$iah")
else p.b=new P.ah(t,s)
p.a=!0
return}if(!!J.Q(u).$icb){if(u instanceof P.az&&u.a>=4){if(u.a===8){r=this.b
r.b=H.e(u.c,"$iah")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.l3(new P.ib(o),null)
r.a=!1}},
$S:3}
P.ib.prototype={
$1:function(a){return this.a},
$S:46}
P.i9.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.r(s,0)
q=H.x(this.c,r)
p=H.r(s,1)
this.a.b=s.b.b.cX(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ac(o)
t=H.c_(o)
s=this.a
s.b=new P.ah(u,t)
s.a=!0}},
$S:3}
P.i8.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.e(this.a.a.c,"$iah")
r=this.c
if(r.kw(u)&&r.e!=null){q=this.b
q.b=r.km(u)
q.a=!1}}catch(p){t=H.ac(p)
s=H.c_(p)
r=H.e(this.a.a.c,"$iah")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ah(t,s)
n.a=!0}},
$S:3}
P.e5.prototype={}
P.h2.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.az(0,$.U,[P.l])
u.a=0
s=H.r(this,0)
r=H.k(new P.h4(u,this),{func:1,ret:-1,args:[s]})
H.k(new P.h5(u,t),{func:1,ret:-1})
W.a4(this.a,this.b,r,!1,s)
return t}}
P.h4.prototype={
$1:function(a){H.x(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.r(this.b,0)]}}}
P.h5.prototype={
$0:function(){this.b.dg(this.a.a)},
$S:0}
P.cq.prototype={}
P.h3.prototype={}
P.aT.prototype={}
P.ah.prototype={
i:function(a){return H.i(this.a)},
$ibi:1}
P.iI.prototype={$iou:1}
P.iQ.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dz()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.ih.prototype={
kZ:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
try{if(C.l===$.U){a.$0()
return}P.l1(null,null,this,a,-1)}catch(s){u=H.ac(s)
t=H.c_(s)
P.iP(null,null,this,u,H.e(t,"$iap"))}},
l_:function(a,b,c){var u,t,s
H.k(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.l===$.U){a.$1(b)
return}P.l2(null,null,this,a,b,-1,c)}catch(s){u=H.ac(s)
t=H.c_(s)
P.iP(null,null,this,u,H.e(t,"$iap"))}},
jG:function(a,b){return new P.ij(this,H.k(a,{func:1,ret:b}),b)},
cp:function(a){return new P.ii(this,H.k(a,{func:1,ret:-1}))},
dU:function(a,b){return new P.ik(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
eR:function(a,b){H.k(a,{func:1,ret:b})
if($.U===C.l)return a.$0()
return P.l1(null,null,this,a,b)},
cX:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.U===C.l)return a.$1(b)
return P.l2(null,null,this,a,b,c,d)},
kY:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.U===C.l)return a.$2(b,c)
return P.ni(null,null,this,a,b,c,d,e,f)}}
P.ij.prototype={
$0:function(){return this.a.eR(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ii.prototype={
$0:function(){return this.a.kZ(this.b)},
$S:3}
P.ik.prototype={
$1:function(a){var u=this.c
return this.a.l_(this.b,H.x(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ie.prototype={
gU:function(a){var u=new P.eb(this,this.r,this.$ti)
u.c=this.e
return u},
gm:function(a){return this.a},
W:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$ibR")!=null}else{t=this.h2(b)
return t}},
h2:function(a){var u=this.d
if(u==null)return!1
return this.c0(this.dr(u,a),a)>=0},
h:function(a,b){var u,t
H.x(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.jE()
this.b=u}return this.dd(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.jE()
this.c=t}return this.dd(t,b)}else return this.fU(b)},
fU:function(a){var u,t,s
H.x(a,H.r(this,0))
u=this.d
if(u==null){u=P.jE()
this.d=u}t=this.di(a)
s=u[t]
if(s==null)u[t]=[this.c7(a)]
else{if(this.c0(s,a)>=0)return!1
s.push(this.c7(a))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iw(this.c,b)
else return this.it(b)},
it:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.dr(u,a)
s=this.c0(t,a)
if(s<0)return!1
this.dK(t.splice(s,1)[0])
return!0},
dd:function(a,b){H.x(b,H.r(this,0))
if(H.e(a[b],"$ibR")!=null)return!1
a[b]=this.c7(b)
return!0},
iw:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$ibR")
if(u==null)return!1
this.dK(u)
delete a[b]
return!0},
dw:function(){this.r=1073741823&this.r+1},
c7:function(a){var u,t
u=new P.bR(H.x(a,H.r(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dw()
return u},
dK:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dw()},
di:function(a){return J.cX(a)&1073741823},
dr:function(a,b){return a[this.di(b)]},
c0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.M(a[t].a,b))return t
return-1}}
P.bR.prototype={}
P.eb.prototype={
gL:function(){return this.d},
F:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.aZ(u))
else{u=this.c
if(u==null){this.sdf(null)
return!1}else{this.sdf(H.x(u.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
sdf:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
P.fh.prototype={
$2:function(a,b){this.a.q(0,H.x(a,this.b),H.x(b,this.c))},
$S:8}
P.fi.prototype={$in:1,$ia:1}
P.S.prototype={
gU:function(a){return new H.cf(a,this.gm(a),0,[H.cT(this,a,"S",0)])},
a9:function(a,b){return this.k(a,b)},
l6:function(a,b){var u,t
u=H.b([],[H.cT(this,a,"S",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.q(u,t,this.k(a,t))
return u},
l5:function(a){return this.l6(a,!0)},
n:function(a,b){var u,t
u=[H.cT(this,a,"S",0)]
H.h(b,"$ia",u,"$aa")
t=H.b([],u)
C.a.sm(t,C.f.n(this.gm(a),b.gm(b)))
C.a.bg(t,0,this.gm(a),a)
C.a.bg(t,this.gm(a),t.length,b)
return t},
ke:function(a,b,c,d){var u
H.x(d,H.cT(this,a,"S",0))
P.b5(b,c,this.gm(a),null,null,null)
for(u=b;u<c;++u)this.q(a,u,d)},
i:function(a){return P.jr(a,"[","]")}}
P.fk.prototype={}
P.fl.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.i(a)
u.a=t+": "
u.a+=H.i(b)},
$S:8}
P.bH.prototype={
Y:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.aa(this,"bH",0),H.aa(this,"bH",1)]})
for(u=J.bu(this.gay());u.F();){t=u.gL()
b.$2(t,this.k(0,t))}},
gm:function(a){return J.aB(this.gay())},
i:function(a){return P.jv(this)},
$iH:1}
P.iz.prototype={
q:function(a,b,c){H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
throw H.c(P.X("Cannot modify unmodifiable map"))}}
P.fm.prototype={
k:function(a,b){return this.a.k(0,b)},
q:function(a,b,c){this.a.q(0,H.x(b,H.r(this,0)),H.x(c,H.r(this,1)))},
Y:function(a,b){this.a.Y(0,H.k(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gm:function(a){var u=this.a
return u.gm(u)},
i:function(a){return J.an(this.a)},
$iH:1}
P.e0.prototype={}
P.im.prototype={
at:function(a,b){var u
for(u=J.bu(H.h(b,"$in",this.$ti,"$an"));u.F();)this.h(0,u.gL())},
i:function(a){return P.jr(this,"{","}")},
a9:function(a,b){var u,t,s
if(b<0)H.q(P.a6(b,0,null,"index",null))
for(u=P.mX(this,this.r,H.r(this,0)),t=0;u.F();){s=u.d
if(b===t)return s;++t}throw H.c(P.bD(b,this,"index",null,t))},
$in:1,
$ikx:1}
P.ec.prototype={}
P.em.prototype={}
P.ez.prototype={
ky:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.b5(b,c,a.length,null,null,null)
u=$.lE()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.c.H(a,t)
if(m===37){l=n+2
if(l<=c){k=H.iZ(C.c.H(a,n))
j=H.iZ(C.c.H(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.c.a0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.af("")
g=r.a+=C.c.u(a,s,t)
r.a=g+H.bM(m)
s=n
continue}}throw H.c(P.a0("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.c.u(a,s,c)
f=g.length
if(q>=0)P.k4(a,p,c,q,o,f)
else{e=C.f.be(f-1,4)+1
if(e===1)throw H.c(P.a0("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.aW(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.k4(a,p,c,q,o,d)
else{e=C.f.be(d,4)
if(e===1)throw H.c(P.a0("Invalid base64 encoding length ",a,c))
if(e>1)a=C.c.aW(a,c,c,e===2?"==":"=")}return a},
$abx:function(){return[[P.a,P.l],P.f]}}
P.eA.prototype={
$abg:function(){return[[P.a,P.l],P.f]}}
P.bx.prototype={}
P.bg.prototype={}
P.eR.prototype={
$abx:function(){return[P.f,[P.a,P.l]]}}
P.f5.prototype={
i:function(a){return this.a}}
P.f4.prototype={
h3:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.d(a,r)
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
default:p=null}if(p!=null){if(q==null)q=new P.af("")
if(r>b)q.a+=C.c.u(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lT(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abg:function(){return[P.f,P.f]}}
P.hB.prototype={
gkd:function(){return C.T}}
P.hD.prototype={
b3:function(a,b,c){var u,t,s
c=P.b5(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iG(t)
if(s.hf(a,b,c)!==c)s.dM(J.lN(a,c-1),0)
return new Uint8Array(t.subarray(0,H.nc(0,s.b,t.length)))},
cv:function(a){return this.b3(a,0,null)},
$abg:function(){return[P.f,[P.a,P.l]]}}
P.iG.prototype={
dM:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.d(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.d(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.d(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.d(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.d(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.d(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.d(u,t)
u[t]=128|a&63
return!1}},
hf:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a0(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.H(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dM(r,C.c.H(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.d(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.d(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.d(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.d(u,q)
u[q]=128|r&63}}return s}}
P.hC.prototype={
b3:function(a,b,c){var u,t,s,r
H.h(a,"$ia",[P.l],"$aa")
u=P.mK(!1,a,b,c)
if(u!=null)return u
c=P.b5(b,c,J.aB(a),null,null,null)
t=new P.af("")
s=new P.iE(!1,t)
s.b3(a,b,c)
if(s.e>0){H.q(P.a0("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.bM(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cv:function(a){return this.b3(a,0,null)},
$abg:function(){return[[P.a,P.l],P.f]}}
P.iE.prototype={
b3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.h(a,"$ia",[P.l],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.iF(this,b,c,a)
$label0$0:for(q=J.bZ(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.k(a,o)
if(typeof n!=="number")return n.bP()
if((n&192)!==128){m=P.a0("Bad UTF-8 encoding 0x"+C.f.bc(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.d(C.H,m)
if(u<=C.H[m]){m=P.a0("Overlong encoding of 0x"+C.f.bc(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a0("Character outside valid Unicode range: 0x"+C.f.bc(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.bM(u)
this.c=!1}for(m=o<c;m;){l=P.nj(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.k(a,k)
if(typeof n!=="number")return n.Z()
if(n<0){i=P.a0("Negative UTF-8 code unit: -0x"+C.f.bc(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a0("Bad UTF-8 encoding 0x"+C.f.bc(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.iF.prototype={
$2:function(a,b){this.a.b.a+=P.dM(this.d,a,b)},
$S:45}
P.O.prototype={}
P.ar.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.ar&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.f.aR(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.m0(H.mu(this))
t=P.d7(H.ms(this))
s=P.d7(H.mo(this))
r=P.d7(H.mp(this))
q=P.d7(H.mr(this))
p=P.d7(H.mt(this))
o=P.m1(H.mq(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.p.prototype={}
P.aM.prototype={
n:function(a,b){return new P.aM(C.f.n(this.a,b.gh8()))},
t:function(a,b){return new P.aM(C.f.t(this.a,b.gh8()))},
v:function(a,b){if(b==null)return!1
return b instanceof P.aM&&this.a===b.a},
gJ:function(a){return C.f.gJ(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eO()
t=this.a
if(t<0)return"-"+new P.aM(0-t).i(0)
s=u.$1(C.f.a6(t,6e7)%60)
r=u.$1(C.f.a6(t,1e6)%60)
q=new P.eN().$1(t%1e6)
return""+C.f.a6(t,36e8)+":"+H.i(s)+":"+H.i(r)+"."+H.i(q)}}
P.eN.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.eO.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.bi.prototype={}
P.dz.prototype={
i:function(a){return"Throw of null."}}
P.aC.prototype={
gc_:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbZ:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gc_()+t+s
if(!this.a)return r
q=this.gbZ()
p=P.eT(this.b)
return r+q+": "+p}}
P.bN.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.i(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.i(u)
else if(s>u)t=": Not in range "+H.i(u)+".."+H.i(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.i(u)}return t}}
P.f6.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t
u=H.ab(this.b)
if(typeof u!=="number")return u.Z()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gm:function(a){return this.f}}
P.hv.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hs.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bP.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eG.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eT(u)+"."}}
P.fF.prototype={
i:function(a){return"Out of Memory"},
$ibi:1}
P.dK.prototype={
i:function(a){return"Stack Overflow"},
$ibi:1}
P.eK.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e8.prototype={
i:function(a){return"Exception: "+this.a}}
P.f0.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.u(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.H(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.a0(r,m)
if(l===10||l===13){k=m
break}}if(k-o>78)if(s-o<75){j=o+75
i=o
h=""
g="..."}else{if(k-s<75){i=k-75
j=k
g=""}else{i=s-36
j=s+36
g="..."}h="..."}else{j=k
i=o
h=""
g=""}f=C.c.u(r,i,j)
return t+h+f+g+"\n"+C.c.D(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.i(s)+")"):t}}
P.bj.prototype={}
P.l.prototype={}
P.n.prototype={
bN:function(a,b){var u=H.aa(this,"n",0)
return new H.cE(this,H.k(b,{func:1,ret:P.O,args:[u]}),[u])},
gm:function(a){var u,t
u=this.gU(this)
for(t=0;u.F();)++t
return t},
gaM:function(a){var u,t
u=this.gU(this)
if(!u.F())throw H.c(H.f7())
t=u.gL()
if(u.F())throw H.c(H.m9())
return t},
a9:function(a,b){var u,t,s
if(b<0)H.q(P.a6(b,0,null,"index",null))
for(u=this.gU(this),t=0;u.F();){s=u.gL()
if(b===t)return s;++t}throw H.c(P.bD(b,this,"index",null,t))},
i:function(a){return P.m7(this,"(",")")}}
P.aN.prototype={}
P.a.prototype={$in:1}
P.H.prototype={}
P.D.prototype={
gJ:function(a){return P.L.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.ag.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
v:function(a,b){return this===b},
gJ:function(a){return H.cm(this)},
i:function(a){return"Instance of '"+H.bL(this)+"'"},
toString:function(){return this.i(this)}}
P.ap.prototype={}
P.f.prototype={$iko:1}
P.af.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$io3:1}
P.hA.prototype={
$2:function(a,b){var u,t,s,r
u=P.f
H.h(a,"$iH",[u,u],"$aH")
H.E(b)
t=J.cS(b).eu(b,"=")
if(t===-1){if(b!=="")a.q(0,P.jG(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.u(b,0,t)
r=C.c.ap(b,t+1)
u=this.a
a.q(0,P.jG(s,0,s.length,u,!0),P.jG(r,0,r.length,u,!0))}return a},
$S:43}
P.hx.prototype={
$2:function(a,b){throw H.c(P.a0("Illegal IPv4 address, "+a,this.a,b))},
$S:42}
P.hy.prototype={
$2:function(a,b){throw H.c(P.a0("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:41}
P.hz.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.et(C.c.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.Z()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:40}
P.bS.prototype={
gf0:function(){return this.b},
gcJ:function(a){var u=this.c
if(u==null)return""
if(C.c.a5(u,"["))return C.c.u(u,1,u.length-1)
return u},
gbI:function(a){var u=this.d
if(u==null)return P.kU(this.a)
return u},
gcR:function(){var u=this.f
return u==null?"":u},
geo:function(){var u=this.r
return u==null?"":u},
cW:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.h(h,"$iH",[P.f,null],"$aH")
i=this.a
u=i==="file"
j=this.b
f=this.d
t=this.c
if(t!=null)c=t
else if(j.length!==0||f!=null||u)c=""
d=this.e
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a5(d,"/"))d="/"+d
g=P.jF(g,0,0,h)
return new P.bS(i,j,c,f,d,g,this.r)},
eO:function(a,b){return this.cW(a,null,null,null,null,null,null,b,null,null)},
gcS:function(){var u,t
if(this.Q==null){u=this.f
t=P.f
this.sis(new P.e0(P.kH(u==null?"":u,C.m),[t,t]))}return this.Q},
gep:function(){return this.c!=null},
ges:function(){return this.f!=null},
geq:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.i(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.i(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.i(t)}else u=t
u+=this.e
t=this.f
if(t!=null)u=u+"?"+t
t=this.r
if(t!=null)u=u+"#"+t
u=u.charCodeAt(0)==0?u:u
this.y=u}return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.Q(b).$ijA)if(this.a==b.gbT())if(this.c!=null===b.gep())if(this.b==b.gf0())if(this.gcJ(this)==b.gcJ(b))if(this.gbI(this)==b.gbI(b))if(this.e===b.geJ(b)){u=this.f
t=u==null
if(!t===b.ges()){if(t)u=""
if(u===b.gcR()){u=this.r
t=u==null
if(!t===b.geq()){if(t)u=""
u=u===b.geo()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
if(u==null){u=C.c.gJ(this.i(0))
this.z=u}return u},
sis:function(a){var u=P.f
this.Q=H.h(a,"$iH",[u,u],"$aH")},
$ijA:1,
gbT:function(){return this.a},
geJ:function(a){return this.e}}
P.iA.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.n()
throw H.c(P.a0("Invalid port",this.a,u+1))},
$S:39}
P.iB.prototype={
$1:function(a){return P.en(C.aa,a,C.m,!1)},
$S:14}
P.iD.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.en(C.v,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.en(C.v,b,C.m,!0))}},
$S:37}
P.iC.prototype={
$2:function(a,b){var u,t
H.E(a)
if(b==null||typeof b==="string")this.a.$2(a,H.E(b))
else for(u=J.bu(H.lh(b,"$in")),t=this.a;u.F();)t.$2(a,H.E(u.gL()))},
$S:35}
P.hw.prototype={
geZ:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.d(u,0)
t=this.a
u=u[0]+1
s=C.c.ev(t,"?",u)
r=t.length
if(s>=0){q=P.cN(t,s+1,r,C.t,!1)
r=s}else q=null
u=new P.hZ(this,"data",null,null,null,P.cN(t,u,r,C.L,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.d(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.iM.prototype={
$1:function(a){return new Uint8Array(96)},
$S:34}
P.iL.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.lO(u,0,96,b)
return u},
$S:33}
P.iN.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.H(b,t)^96
if(s>=a.length)return H.d(a,s)
a[s]=c}}}
P.iO.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.H(b,0),t=C.c.H(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.d(a,s)
a[s]=c}}}
P.iq.prototype={
gep:function(){return this.c>0},
ger:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.B(t)
t=u+1<t
u=t}else u=!1
return u},
ges:function(){var u=this.f
if(typeof u!=="number")return u.Z()
return u<this.r},
geq:function(){return this.r<this.a.length},
gdu:function(){return this.b===4&&C.c.a5(this.a,"http")},
gdv:function(){return this.b===5&&C.c.a5(this.a,"https")},
gbT:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdu()){this.x="http"
u="http"}else if(this.gdv()){this.x="https"
u="https"}else if(u===4&&C.c.a5(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a5(this.a,"package")){this.x="package"
u="package"}else{u=C.c.u(this.a,0,u)
this.x=u}return u},
gf0:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.u(this.a,t,u-1):""},
gcJ:function(a){var u=this.c
return u>0?C.c.u(this.a,u,this.d):""},
gbI:function(a){var u
if(this.ger()){u=this.d
if(typeof u!=="number")return u.n()
return P.et(C.c.u(this.a,u+1,this.e),null,null)}if(this.gdu())return 80
if(this.gdv())return 443
return 0},
geJ:function(a){return C.c.u(this.a,this.e,this.f)},
gcR:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.Z()
return u<t?C.c.u(this.a,u+1,t):""},
geo:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.ap(t,u+1):""},
gcS:function(){var u=this.f
if(typeof u!=="number")return u.Z()
if(u>=this.r)return C.ab
u=P.f
return new P.e0(P.kH(this.gcR(),C.m),[u,u])},
cW:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.h(h,"$iH",[P.f,null],"$aH")
i=this.gbT()
u=i==="file"
t=this.c
j=t>0?C.c.u(this.a,this.b+3,t):""
f=this.ger()?this.gbI(this):null
t=this.c
if(t>0)c=C.c.u(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.u(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a5(d,"/"))d="/"+d
g=P.jF(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.ap(t,s+1)
return new P.bS(i,j,c,f,d,g,b)},
eO:function(a,b){return this.cW(a,null,null,null,null,null,null,b,null,null)},
gJ:function(a){var u=this.y
if(u==null){u=C.c.gJ(this.a)
this.y=u}return u},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.Q(b).$ijA&&this.a===b.i(0)},
i:function(a){return this.a},
$ijA:1}
P.hZ.prototype={}
W.w.prototype={}
W.cY.prototype={
i:function(a){return String(a)},
$icY:1}
W.ex.prototype={
i:function(a){return String(a)}}
W.c3.prototype={$ic3:1}
W.bd.prototype={$ibd:1}
W.bv.prototype={
bQ:function(a,b,c){if(c!=null)return this.hg(a,b,P.nq(c,null))
return this.hh(a,b)},
f8:function(a,b){return this.bQ(a,b,null)},
hg:function(a,b,c){return a.getContext(b,c)},
hh:function(a,b){return a.getContext(b)},
$ibv:1,
$ik7:1}
W.bw.prototype={
hi:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
k8:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibw:1}
W.be.prototype={
gm:function(a){return a.length}}
W.c7.prototype={
gm:function(a){return a.length}}
W.eJ.prototype={}
W.aw.prototype={$iaw:1}
W.c8.prototype={
jA:function(a,b){return a.adoptNode(b)},
d_:function(a,b){return a.getElementById(b)}}
W.eM.prototype={
i:function(a){return String(a)}}
W.d8.prototype={
jU:function(a,b){return a.createHTMLDocument(b)}}
W.d9.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.cR(b,"$iax",[P.ag],"$aax"))return!1
u=J.a5(b)
return a.left===u.gbH(b)&&a.top===u.gbM(b)&&a.width===u.gbO(b)&&a.height===u.gbG(b)},
gJ:function(a){return W.kS(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(a.width),C.e.gJ(a.height))},
gdV:function(a){return a.bottom},
gbG:function(a){return a.height},
gbH:function(a){return a.left},
gbK:function(a){return a.right},
gbM:function(a){return a.top},
gbO:function(a){return a.width},
$iax:1,
$aax:function(){return[P.ag]}}
W.hY.prototype={
gm:function(a){return this.b.length},
k:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.e(u[b],"$iP")},
q:function(a,b,c){var u
H.e(c,"$iP")
u=this.b
if(b<0||b>=u.length)return H.d(u,b)
J.jk(this.a,c,u[b])},
h:function(a,b){J.k0(this.a,b)
return b},
gU:function(a){var u=this.l5(this)
return new J.aq(u,u.length,0,[H.r(u,0)])},
$aS:function(){return[W.P]},
$an:function(){return[W.P]},
$aa:function(){return[W.P]}}
W.P.prototype={
gjF:function(a){return new W.i_(a)},
gcu:function(a){return new W.hY(a,a.children)},
gdX:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.Z()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Z()
if(r<0)r=-r*0
return new P.ax(u,t,s,r,[P.ag])},
i:function(a){return a.localName},
ac:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kd
if(u==null){u=H.b([],[W.au])
t=new W.dy(u)
C.a.h(u,W.kR(null))
C.a.h(u,W.kT())
$.kd=t
d=t}else d=u
u=$.kc
if(u==null){u=new W.eo(d)
$.kc=u
c=u}else{u.a=d
c=u}}if($.b_==null){u=document
t=u.implementation
t=(t&&C.U).jU(t,"")
$.b_=t
$.jq=t.createRange()
t=$.b_
t.toString
t=t.createElement("base")
H.e(t,"$ic3")
t.href=u.baseURI
u=$.b_.head;(u&&C.W).E(u,t)}u=$.b_
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.e(t,"$ibd")}u=$.b_
if(!!this.$ibd)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b_.body;(u&&C.p).E(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.W(C.a8,a.tagName)){u=$.jq;(u&&C.N).ff(u,s)
u=$.jq
r=(u&&C.N).jS(u,b)}else{s.innerHTML=b
r=$.b_.createDocumentFragment()
for(u=J.a5(r);t=s.firstChild,t!=null;)u.E(r,t)}u=$.b_.body
if(s==null?u!=null:s!==u)J.k2(s)
c.d1(r)
C.y.jA(document,r)
return r},
jT:function(a,b,c){return this.ac(a,b,c,null)},
fi:function(a,b,c,d){a.textContent=null
this.E(a,this.ac(a,b,c,d))},
fh:function(a,b){return this.fi(a,b,null,null)},
aX:function(a,b){return a.getAttribute(b)},
iu:function(a,b){return a.removeAttribute(b)},
fg:function(a,b,c){return a.setAttribute(b,c)},
$iP:1,
gl0:function(a){return a.tagName}}
W.eQ.prototype={
$1:function(a){return!!J.Q(H.e(a,"$iA")).$iP},
$S:22}
W.m.prototype={$im:1}
W.bA.prototype={
fV:function(a,b,c,d){return a.addEventListener(b,H.bW(H.k(c,{func:1,args:[W.m]}),1),!1)},
$ibA:1}
W.f_.prototype={
gm:function(a){return a.length}}
W.dd.prototype={}
W.de.prototype={
iA:function(a,b,c,d){return a.replaceState(b,c,d)},
gm:function(a){return a.length}}
W.bC.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bD(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$iA")
throw H.c(P.X("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iaF:1,
$aaF:function(){return[W.A]},
$aS:function(){return[W.A]},
$in:1,
$an:function(){return[W.A]},
$ia:1,
$aa:function(){return[W.A]},
$ibC:1,
$aas:function(){return[W.A]}}
W.df.prototype={}
W.b0.prototype={$ib0:1,
gdZ:function(a){return a.data}}
W.cd.prototype={$icd:1,$ik7:1}
W.ce.prototype={$ice:1}
W.aO.prototype={$iaO:1}
W.dl.prototype={}
W.dp.prototype={
i:function(a){return String(a)},
$idp:1}
W.ci.prototype={}
W.a8.prototype={$ia8:1}
W.al.prototype={
gaM:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.ky("No elements"))
if(t>1)throw H.c(P.ky("More than one element"))
return u.firstChild},
at:function(a,b){var u,t,s,r,q
H.h(b,"$in",[W.A],"$an")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.a5(t),q=0;q<s;++q)r.E(t,u.firstChild)
return},
q:function(a,b,c){var u,t
H.e(c,"$iA")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
J.jk(u,c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.db(u,u.length,-1,[H.cT(C.ac,u,"as",0)])},
gm:function(a){return this.a.childNodes.length},
k:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aS:function(){return[W.A]},
$an:function(){return[W.A]},
$aa:function(){return[W.A]}}
W.A.prototype={
kQ:function(a){var u=a.parentNode
if(u!=null)J.ev(u,a)},
kV:function(a,b){var u,t
try{u=a.parentNode
J.jk(u,b,a)}catch(t){H.ac(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fn(a):u},
E:function(a,b){return a.appendChild(H.e(b,"$iA"))},
iv:function(a,b){return a.removeChild(b)},
iz:function(a,b,c){return a.replaceChild(b,c)},
$iA:1}
W.ck.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bD(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$iA")
throw H.c(P.X("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iaF:1,
$aaF:function(){return[W.A]},
$aS:function(){return[W.A]},
$in:1,
$an:function(){return[W.A]},
$ia:1,
$aa:function(){return[W.A]},
$aas:function(){return[W.A]}}
W.dD.prototype={
jS:function(a,b){return a.createContextualFragment(b)},
ff:function(a,b){return a.selectNodeContents(b)}}
W.fS.prototype={
gm:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.dN.prototype={
ac:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bU(a,b,c,d)
u=W.m2("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.al(t).at(0,new W.al(u))
return t},
hk:function(a,b){return a.insertRow(b)}}
W.dO.prototype={
ac:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bU(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.al(u)
s=u.gaM(u)
s.toString
u=new W.al(s)
r=u.gaM(u)
t.toString
r.toString
new W.al(t).at(0,new W.al(r))
return t},
dt:function(a,b){return a.insertCell(b)}}
W.h6.prototype={
ac:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bU(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.al(u)
s=u.gaM(u)
t.toString
s.toString
new W.al(t).at(0,new W.al(s))
return t}}
W.cr.prototype={$icr:1}
W.aI.prototype={$iaI:1}
W.aJ.prototype={$iaJ:1}
W.hf.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bD(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$iaI")
throw H.c(P.X("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iaF:1,
$aaF:function(){return[W.aI]},
$aS:function(){return[W.aI]},
$in:1,
$an:function(){return[W.aI]},
$ia:1,
$aa:function(){return[W.aI]},
$aas:function(){return[W.aI]}}
W.bp.prototype={}
W.hQ.prototype={$ik7:1}
W.aW.prototype={
gk_:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.X("deltaY is not supported"))},
gjZ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.X("deltaX is not supported"))},
$iaW:1}
W.cF.prototype={
iB:function(a,b){return a.requestAnimationFrame(H.bW(H.k(b,{func:1,ret:-1,args:[P.ag]}),1))},
h9:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cG.prototype={$icG:1}
W.e7.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.cR(b,"$iax",[P.ag],"$aax"))return!1
u=J.a5(b)
return a.left===u.gbH(b)&&a.top===u.gbM(b)&&a.width===u.gbO(b)&&a.height===u.gbG(b)},
gJ:function(a){return W.kS(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(a.width),C.e.gJ(a.height))},
gbG:function(a){return a.height},
gbO:function(a){return a.width}}
W.ed.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bD(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$iA")
throw H.c(P.X("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iaF:1,
$aaF:function(){return[W.A]},
$aS:function(){return[W.A]},
$in:1,
$an:function(){return[W.A]},
$ia:1,
$aa:function(){return[W.A]},
$aas:function(){return[W.A]}}
W.hX.prototype={
Y:function(a,b){var u,t,s,r,q,p
H.k(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gay(),t=u.length,s=this.a,r=J.a5(s),q=0;q<u.length;u.length===t||(0,H.z)(u),++q){p=u[q]
b.$2(p,r.aX(s,p))}},
gay:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.d(u,r)
q=H.e(u[r],"$icG")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abH:function(){return[P.f,P.f]},
$aH:function(){return[P.f,P.f]}}
W.i_.prototype={
k:function(a,b){return J.jl(this.a,H.E(b))},
q:function(a,b,c){J.lS(this.a,b,c)},
gm:function(a){return this.gay().length}}
W.i0.prototype={}
W.jD.prototype={}
W.i1.prototype={}
W.i2.prototype={
$1:function(a){return this.a.$1(H.e(a,"$im"))},
$S:32}
W.br.prototype={
fF:function(a){var u,t
u=$.jZ()
if(u.gkq(u)){for(t=0;t<262;++t)u.q(0,C.a7[t],W.nC())
for(t=0;t<12;++t)u.q(0,C.A[t],W.nD())}},
aS:function(a){return $.lF().W(0,W.c9(a))},
au:function(a,b,c){var u,t,s
u=W.c9(a)
t=$.jZ()
s=t.k(0,H.i(u)+"::"+b)
if(s==null)s=t.k(0,"*::"+b)
if(s==null)return!1
return H.jL(s.$4(a,b,c,this))},
$iau:1}
W.as.prototype={
gU:function(a){return new W.db(a,this.gm(a),-1,[H.cT(this,a,"as",0)])}}
W.dy.prototype={
aS:function(a){return C.a.dR(this.a,new W.fC(a))},
au:function(a,b,c){return C.a.dR(this.a,new W.fB(a,b,c))},
$iau:1}
W.fC.prototype={
$1:function(a){return H.e(a,"$iau").aS(this.a)},
$S:24}
W.fB.prototype={
$1:function(a){return H.e(a,"$iau").au(this.a,this.b,this.c)},
$S:24}
W.eg.prototype={
fP:function(a,b,c,d){var u,t,s
this.a.at(0,c)
u=b.bN(0,new W.io())
t=b.bN(0,new W.ip())
this.b.at(0,u)
s=this.c
s.at(0,C.I)
s.at(0,t)},
aS:function(a){return this.a.W(0,W.c9(a))},
au:function(a,b,c){var u,t
u=W.c9(a)
t=this.c
if(t.W(0,H.i(u)+"::"+b))return this.d.jB(c)
else if(t.W(0,"*::"+b))return this.d.jB(c)
else{t=this.b
if(t.W(0,H.i(u)+"::"+b))return!0
else if(t.W(0,"*::"+b))return!0
else if(t.W(0,H.i(u)+"::*"))return!0
else if(t.W(0,"*::*"))return!0}return!1},
$iau:1}
W.io.prototype={
$1:function(a){return!C.a.W(C.A,H.E(a))},
$S:25}
W.ip.prototype={
$1:function(a){return C.a.W(C.A,H.E(a))},
$S:25}
W.iv.prototype={
au:function(a,b,c){if(this.ft(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jl(a,"template")==="")return this.e.W(0,b)
return!1}}
W.iw.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.E(a))},
$S:14}
W.iu.prototype={
aS:function(a){var u=J.Q(a)
if(!!u.$icn)return!1
u=!!u.$io
if(u&&W.c9(a)==="foreignObject")return!1
if(u)return!0
return!1},
au:function(a,b,c){if(b==="is"||C.c.a5(b,"on"))return!1
return this.aS(a)},
$iau:1}
W.db.prototype={
F:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sds(J.lK(this.a,u))
this.c=u
return!0}this.sds(null)
this.c=t
return!1},
gL:function(){return this.d},
sds:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
W.au.prototype={}
W.il.prototype={$iog:1}
W.eo.prototype={
d1:function(a){new W.iH(this).$2(a,null)},
b1:function(a,b){if(b==null)J.k2(a)
else J.ev(b,a)},
iG:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.lP(a)
s=J.jl(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ac(o)}q="element unprintable"
try{q=J.an(a)}catch(o){H.ac(o)}try{p=W.c9(a)
this.iF(H.e(a,"$iP"),b,u,q,p,H.e(t,"$iH"),H.E(s))}catch(o){if(H.ac(o) instanceof P.aC)throw o
else{this.b1(a,b)
window
n="Removing corrupted element "+H.i(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iF:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b1(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aS(a)){this.b1(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.au(a,"is",g)){this.b1(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gay()
t=H.b(u.slice(0),[H.r(u,0)])
for(s=f.gay().length-1,u=f.a,r=J.a5(u);s>=0;--s){if(s>=t.length)return H.d(t,s)
q=t[s]
if(!this.a.au(a,J.lU(q),r.aX(u,q))){window
p="Removing disallowed attribute <"+H.i(e)+" "+q+'="'+H.i(r.aX(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aX(u,q)
r.iu(u,q)}}if(!!J.Q(a).$icr)this.d1(a.content)},
$io0:1}
W.iH.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iG(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b1(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ac(r)
q=H.e(u,"$iA")
if(s){p=q.parentNode
if(p!=null)J.ev(p,q)}else J.ev(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$iA")}},
$S:44}
W.e6.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.ep.prototype={}
W.eq.prototype={}
P.ir.prototype={
em:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
cZ:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.Q(a)
if(!!t.$iar)return new Date(a.a)
if(!!t.$imz)throw H.c(P.ht("structured clone of RegExp"))
if(!!t.$ib0)return a
if(!!t.$ibJ)return a
if(!!t.$iH){s=this.em(a)
t=this.b
if(s>=t.length)return H.d(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.q(t,s,r)
a.Y(0,new P.it(u,this))
return u.a}if(!!t.$ia){s=this.em(a)
u=this.b
if(s>=u.length)return H.d(u,s)
r=u[s]
if(r!=null)return r
return this.jR(a,s)}throw H.c(P.ht("structured clone of other type"))},
jR:function(a,b){var u,t,s,r
u=J.bZ(a)
t=u.gm(a)
s=new Array(t)
C.a.q(this.b,b,s)
for(r=0;r<t;++r)C.a.q(s,r,this.cZ(u.k(a,r)))
return s}}
P.it.prototype={
$2:function(a,b){this.a.a[a]=this.b.cZ(b)},
$S:8}
P.el.prototype={$ib0:1,
gdZ:function(a){return this.a}}
P.iS.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.is.prototype={}
P.eX.prototype={
gbk:function(){var u,t,s
u=this.b
t=H.aa(u,"S",0)
s=W.P
return new H.fn(new H.cE(u,H.k(new P.eY(),{func:1,ret:P.O,args:[t]}),[t]),H.k(new P.eZ(),{func:1,ret:s,args:[t]}),[t,s])},
q:function(a,b,c){var u
H.e(c,"$iP")
u=this.gbk()
J.lR(u.b.$1(J.ew(u.a,b)),c)},
h:function(a,b){J.k0(this.b.a,b)},
gm:function(a){return J.aB(this.gbk().a)},
k:function(a,b){var u=this.gbk()
return u.b.$1(J.ew(u.a,b))},
gU:function(a){var u=P.mh(this.gbk(),!1,W.P)
return new J.aq(u,u.length,0,[H.r(u,0)])},
$aS:function(){return[W.P]},
$an:function(){return[W.P]},
$aa:function(){return[W.P]}}
P.eY.prototype={
$1:function(a){return!!J.Q(H.e(a,"$iA")).$iP},
$S:22}
P.eZ.prototype={
$1:function(a){return H.j(H.e(a,"$iA"),"$iP")},
$S:53}
P.ig.prototype={
gbK:function(a){var u=this.a
if(typeof u!=="number")return u.n()
return H.x(u+this.c,H.r(this,0))},
gdV:function(a){var u=this.b
if(typeof u!=="number")return u.n()
return H.x(u+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cR(b,"$iax",[P.ag],"$aax")){u=this.a
t=J.a5(b)
if(u==t.gbH(b)){s=this.b
if(s==t.gbM(b)){if(typeof u!=="number")return u.n()
r=H.r(this,0)
if(H.x(u+this.c,r)===t.gbK(b)){if(typeof s!=="number")return s.n()
u=H.x(s+this.d,r)===t.gdV(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t,s,r,q
u=this.a
t=J.cX(u)
s=this.b
r=J.cX(s)
if(typeof u!=="number")return u.n()
q=H.r(this,0)
u=C.f.gJ(H.x(u+this.c,q))
if(typeof s!=="number")return s.n()
q=C.f.gJ(H.x(s+this.d,q))
return P.mW(P.id(P.id(P.id(P.id(0,t),r),u),q))}}
P.ax.prototype={
gbH:function(a){return this.a},
gbM:function(a){return this.b},
gbO:function(a){return this.c},
gbG:function(a){return this.d}}
P.cn.prototype={$icn:1}
P.o.prototype={
gcu:function(a){return new P.eX(a,new W.al(a))},
ac:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.au])
C.a.h(u,W.kR(null))
C.a.h(u,W.kT())
C.a.h(u,new W.iu())
c=new W.eo(new W.dy(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).jT(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.al(r)
p=u.gaM(u)
for(u=J.a5(q);s=p.firstChild,s!=null;)u.E(q,s)
return q},
$io:1}
P.N.prototype={$in:1,
$an:function(){return[P.l]},
$ia:1,
$aa:function(){return[P.l]},
$imH:1}
P.d0.prototype={$id0:1}
P.dc.prototype={$idc:1}
P.dC.prototype={$idC:1}
P.bO.prototype={
dN:function(a,b){return a.activeTexture(b)},
dS:function(a,b,c){return a.attachShader(b,c)},
av:function(a,b,c){return a.bindBuffer(b,c)},
jH:function(a,b,c){return a.bindFramebuffer(b,c)},
aT:function(a,b,c){return a.bindTexture(b,c)},
jI:function(a,b,c){return a.blendFunc(b,c)},
dW:function(a,b,c,d){return a.bufferData(b,c,d)},
jL:function(a,b){return a.clear(b)},
jM:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jN:function(a,b){return a.clearDepth(b)},
jP:function(a,b){return a.compileShader(b)},
jV:function(a,b){return a.createShader(b)},
jX:function(a,b){return a.deleteProgram(b)},
jY:function(a,b){return a.deleteShader(b)},
k0:function(a,b){return a.depthFunc(b)},
k5:function(a,b){return a.disable(b)},
e_:function(a,b){return a.disableVertexAttribArray(b)},
k7:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cA:function(a,b){return a.enable(b)},
e0:function(a,b){return a.enableVertexAttribArray(b)},
f3:function(a,b){return a.generateMipmap(b)},
f4:function(a,b,c){return a.getActiveAttrib(b,c)},
f5:function(a,b,c){return a.getActiveUniform(b,c)},
f6:function(a,b,c){return a.getAttribLocation(b,c)},
d0:function(a,b){return a.getParameter(b)},
f9:function(a,b){return a.getProgramInfoLog(b)},
bR:function(a,b,c){return a.getProgramParameter(b,c)},
fa:function(a,b){return a.getShaderInfoLog(b)},
fb:function(a,b,c){return a.getShaderParameter(b,c)},
fc:function(a,b,c){return a.getUniformLocation(b,c)},
ks:function(a,b){return a.linkProgram(b)},
kO:function(a,b,c){return a.pixelStorei(b,c)},
fl:function(a,b,c){return a.shaderSource(b,c)},
l2:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.Q(g)
if(!!u.$ib0)t=!0
else t=!1
if(t){this.iU(a,b,c,d,e,f,P.nr(g))
return}if(!!u.$icd)u=!0
else u=!1
if(u){this.iV(a,b,c,d,e,f,g)
return}throw H.c(P.cZ("Incorrect number or type of arguments"))},
l1:function(a,b,c,d,e,f,g){return this.l2(a,b,c,d,e,f,g,null,null,null)},
iU:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
iV:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bL:function(a,b,c,d){return a.texParameteri(b,c,d)},
R:function(a,b,c){return a.uniform1f(b,c)},
T:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eX:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eY:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
f_:function(a,b){return a.useProgram(b)},
la:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
lb:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibO:1}
P.dH.prototype={$idH:1}
P.dQ.prototype={$idQ:1}
P.dZ.prototype={$idZ:1}
O.a_.prototype={
bW:function(a){this.sho(H.b([],[a]))
this.sdC(null)
this.sdz(null)
this.sdD(null)},
d2:function(a,b,c){var u=H.aa(this,"a_",0)
H.k(b,{func:1,ret:P.O,args:[[P.n,u]]})
u={func:1,ret:-1,args:[P.l,[P.n,u]]}
H.k(a,u)
H.k(c,u)
this.sdC(b)
this.sdz(a)
this.sdD(c)},
bf:function(a,b){return this.d2(a,null,b)},
ia:function(a){var u
H.h(a,"$in",[H.aa(this,"a_",0)],"$an")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fC:function(a,b){var u
H.h(b,"$in",[H.aa(this,"a_",0)],"$an")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.aq(u,u.length,0,[H.r(u,0)])},
a9:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.aa(this,"a_",0)
H.x(b,u)
u=[u]
if(this.ia(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.fC(s,H.b([b],u))}},
sho:function(a){this.a=H.h(a,"$ia",[H.aa(this,"a_",0)],"$aa")},
sdC:function(a){this.b=H.k(a,{func:1,ret:P.O,args:[[P.n,H.aa(this,"a_",0)]]})},
sdz:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.l,[P.n,H.aa(this,"a_",0)]]})},
sdD:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.l,[P.n,H.aa(this,"a_",0)]]})},
$in:1}
O.ch.prototype={
gm:function(a){return this.a.length},
gB:function(){var u=this.b
if(u==null){u=D.R()
this.b=u}return u},
fD:function(a){var u=this.b
if(u!=null)u.K(a)},
aN:function(){return this.fD(null)},
ga1:function(){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.dt()},
eM:function(a){var u=this.a
if(a==null)C.a.h(u,V.dt())
else C.a.h(u,a)
this.aN()},
cQ:function(){var u=this.a
if(u.length>0){u.pop()
this.aN()}},
sc4:function(a){this.a=H.h(a,"$ia",[V.ad],"$aa")}}
E.eB.prototype={}
E.ai.prototype={
sai:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gB().M(0,this.geG())
t=this.c
if(t!=null)t.gB().h(0,this.geG())
s=new D.G("shape",u,this.c,this,[F.dI])
s.b=!0
this.am(s)}},
sae:function(a){var u,t
if(!J.M(this.r,a)){u=this.r
if(u!=null)u.gB().M(0,this.geE())
if(a!=null)a.gB().h(0,this.geE())
this.r=a
t=new D.G("mover",u,a,this,[U.ae])
t.b=!0
this.am(t)}},
aL:function(a){var u,t,s,r
u=this.r
t=u!=null?u.aB(a,this):null
if(!J.M(t,this.x)){s=this.x
this.x=t
r=new D.G("matrix",s,t,this,[V.ad])
r.b=!0
this.am(r)}for(u=this.y.a,u=new J.aq(u,u.length,0,[H.r(u,0)]);u.F();)u.d.aL(a)},
aV:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga1())
else C.a.h(u.a,t.D(0,u.ga1()))
u.aN()
a.eN(this.f)
u=a.dy
s=(u&&C.a).gaz(u)
if(s!=null&&this.d!=null)s.kU(a,this)
for(u=this.y.a,u=new J.aq(u,u.length,0,[H.r(u,0)]);u.F();)u.d.aV(a)
a.eL()
a.dx.cQ()},
gB:function(){var u=this.z
if(u==null){u=D.R()
this.z=u}return u},
am:function(a){var u=this.z
if(u!=null)u.K(a)},
a3:function(){return this.am(null)},
eH:function(a){H.e(a,"$iy")
this.e=null
this.am(a)},
kF:function(){return this.eH(null)},
eF:function(a){this.am(H.e(a,"$iy"))},
kE:function(){return this.eF(null)},
eD:function(a){this.am(H.e(a,"$iy"))},
kB:function(){return this.eD(null)},
kA:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$in",[E.ai],"$an")
for(u=b.length,t=this.geC(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bz()
o.saj(null)
o.sb_(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.saj(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
kD:function(a,b){var u,t
H.h(b,"$in",[E.ai],"$an")
for(u=b.gU(b),t=this.geC();u.F();)u.gL().gB().M(0,t)
this.a3()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfE:function(a,b){this.y=H.h(b,"$ia_",[E.ai],"$aa_")},
$ib4:1}
E.fN.prototype={
fw:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ar(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.ch()
t=[V.ad]
u.sc4(H.b([],t))
u.b=null
u.gB().h(0,new E.fO(this))
this.cy=u
u=new O.ch()
u.sc4(H.b([],t))
u.b=null
u.gB().h(0,new E.fP(this))
this.db=u
u=new O.ch()
u.sc4(H.b([],t))
u.b=null
u.gB().h(0,new E.fQ(this))
this.dx=u
this.siT(H.b([],[O.bQ]))
u=this.dy;(u&&C.a).h(u,null)
this.siP(new H.aG([P.f,A.co]))},
gkP:function(){var u=this.z
if(u==null){u=this.cy.ga1().D(0,this.db.ga1())
this.z=u}return u},
eN:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaz(u):a;(u&&C.a).h(u,t)},
eL:function(){var u=this.dy
if(u.length>1)u.pop()},
siT:function(a){this.dy=H.h(a,"$ia",[O.bQ],"$aa")},
siP:function(a){this.fr=H.h(a,"$iH",[P.f,A.co],"$aH")}}
E.fO.prototype={
$1:function(a){var u
H.e(a,"$iy")
u=this.a
u.z=null
u.ch=null},
$S:5}
E.fP.prototype={
$1:function(a){var u
H.e(a,"$iy")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:5}
E.fQ.prototype={
$1:function(a){var u
H.e(a,"$iy")
u=this.a
u.ch=null
u.cx=null},
$S:5}
E.dL.prototype={}
E.dV.prototype={
d7:function(a){H.e(a,"$iy")
this.eP()},
d6:function(){return this.d7(null)},
gkl:function(){var u,t,s
u=Date.now()
t=C.f.a6(P.kb(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ar(u,!1)
return s/t},
dG:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.D()
if(typeof u!=="number")return H.B(u)
s=C.e.cI(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.D()
r=C.e.cI(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kB(C.x,this.gkW())}},
eP:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.hb(this),{func:1,ret:-1,args:[P.ag]})
C.P.h9(u)
C.P.iB(u,W.l6(t,P.ag))}},
kT:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dG()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ar(r,!1)
s.y=P.kb(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aN()
r=s.db
C.a.sm(r.a,0)
r.aN()
r=s.dx
C.a.sm(r.a,0)
r.aN()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aV(this.e)}s=this.z
if(s!=null)s.K(null)}catch(q){u=H.ac(q)
t=H.c_(q)
P.jU("Error: "+H.i(u))
P.jU("Stack: "+H.i(t))
throw H.c(u)}}}
E.hb.prototype={
$1:function(a){var u
H.nN(a)
u=this.a
if(u.ch){u.ch=!1
u.kT()}},
$S:31}
Z.e4.prototype={$inV:1}
Z.d1.prototype={
co:function(a){var u,t,s
try{t=a.a
C.b.e0(t,this.e)
C.b.la(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ac(s)
t=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}}
Z.hR.prototype={$inW:1}
Z.d2.prototype={
aU:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
co:function(a){var u,t
u=this.a
C.b.av(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].co(a)},
l8:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.e_(s,u[t].e)
C.b.av(s,this.a.a,null)},
aV:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.c
p=r.a
C.b.av(t,p,r.b)
C.b.k7(t,q.a,q.b,5123,0)
C.b.av(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.f]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.an(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
shj:function(a){this.b=H.h(a,"$ia",[Z.bk],"$aa")},
$io4:1}
Z.bk.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bL(this.c)+"'")+"]"}}
Z.aV.prototype={
gd3:function(a){var u,t
u=this.a
t=(u&$.ba().a)!==0?3:0
if((u&$.b9().a)!==0)t+=3
if((u&$.b8().a)!==0)t+=3
if((u&$.bb().a)!==0)t+=2
if((u&$.bc().a)!==0)t+=3
if((u&$.cU().a)!==0)t+=3
if((u&$.cV().a)!==0)t+=4
if((u&$.c2().a)!==0)++t
return(u&$.b7().a)!==0?t+4:t},
jD:function(a){var u,t,s
u=$.ba()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.b9()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b8()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bb()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bc()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cU()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cV()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c2()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b7()
if((t&u.a)!==0)if(s===a)return u
return $.lD()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aV))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.f])
t=this.a
if((t&$.ba().a)!==0)C.a.h(u,"Pos")
if((t&$.b9().a)!==0)C.a.h(u,"Norm")
if((t&$.b8().a)!==0)C.a.h(u,"Binm")
if((t&$.bb().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bc().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cU().a)!==0)C.a.h(u,"Clr3")
if((t&$.cV().a)!==0)C.a.h(u,"Clr4")
if((t&$.c2().a)!==0)C.a.h(u,"Weight")
if((t&$.b7().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.eE.prototype={}
D.bz.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.y]}
H.k(b,u)
if(this.a==null)this.saj(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
M:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[D.y]})
u=this.a
u=u==null?null:C.a.W(u,b)
if(u===!0){u=this.a
t=(u&&C.a).M(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.W(u,b)
if(u===!0){u=this.b
t=(u&&C.a).M(u,b)||t}return t},
K:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.y(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.Y(t,new D.eU(u))
t=this.b
if(t!=null)C.a.Y(t,new D.eV(u))
u=this.b
if(u!=null)C.a.sm(u,0)
return!0},
kb:function(){return this.K(null)},
kX:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.K(t)}}},
ag:function(){return this.kX(!0,!1)},
saj:function(a){this.a=H.h(a,"$ia",[{func:1,ret:-1,args:[D.y]}],"$aa")},
sb_:function(a){this.b=H.h(a,"$ia",[{func:1,ret:-1,args:[D.y]}],"$aa")}}
D.eU.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.eV.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.y.prototype={}
D.bE.prototype={}
D.bF.prototype={}
D.G.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.d3.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d3))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dk.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dk))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.fc.prototype={
kL:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kH:function(a){this.c=a.b
this.d.M(0,a.a)
return!1},
sir:function(a){this.d=H.h(a,"$ikx",[P.l],"$akx")}}
X.dq.prototype={}
X.fj.prototype={
aZ:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ar(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.D()
q=b.b
p=this.ch
if(typeof q!=="number")return q.D()
o=new V.a3(t.a+s*r,t.b+q*p)
p=this.a.gbo()
n=new X.bm(a,V.bo(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cP:function(a,b){this.r=a.a
return!1},
b9:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fe()
if(typeof u!=="number")return u.bP()
this.r=(u&~t)>>>0
return!1},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.aZ(a,b))
return!0},
kM:function(a){return!1},
i_:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ar(Date.now(),!1)
t=this.f
s=new X.dq(c,a,this.a.gbo(),b,u,this)
s.b=!0
t.K(s)
this.y=u
this.x=V.bo()}}
X.aH.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aH))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bm.prototype={}
X.fw.prototype={
c1:function(a,b,c){var u,t,s
u=new P.ar(Date.now(),!1)
t=this.a.gbo()
s=new X.bm(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cP:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.K(this.c1(a,b,!0))
return!0},
b9:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fe()
if(typeof u!=="number")return u.bP()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.K(this.c1(a,b,!0))
return!0},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.c1(a,b,!1))
return!0},
kN:function(a,b){return!1}}
X.fI.prototype={}
X.dX.prototype={}
X.he.prototype={
aZ:function(a,b){var u,t,s,r
H.h(a,"$ia",[V.a3],"$aa")
u=new P.ar(Date.now(),!1)
t=a.length>0?a[0]:V.bo()
s=this.a.gbo()
r=new X.dX(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kK:function(a){var u
H.h(a,"$ia",[V.a3],"$aa")
u=this.b
if(u==null)return!1
u.K(this.aZ(a,!0))
return!0},
kI:function(a){var u
H.h(a,"$ia",[V.a3],"$aa")
u=this.c
if(u==null)return!1
u.K(this.aZ(a,!0))
return!0},
kJ:function(a){var u
H.h(a,"$ia",[V.a3],"$aa")
u=this.d
if(u==null)return!1
u.K(this.aZ(a,!1))
return!0}}
X.e1.prototype={
gbo:function(){var u=this.a
return V.ku(0,0,C.q.gdX(u).c,C.q.gdX(u).d)},
dl:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dk(u,new X.aH(t,a.altKey,a.shiftKey))},
aQ:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aH(t,a.altKey,a.shiftKey)},
cg:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aH(t,a.altKey,a.shiftKey)},
aH:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.t()
q=u.top
if(typeof s!=="number")return s.t()
return new V.a3(t-r,s-q)},
b0:function(a){return new V.Y(a.movementX,a.movementY)},
ca:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a3])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
o=C.e.an(p.pageX)
C.e.an(p.pageY)
n=u.left
C.e.an(p.pageX)
C.a.h(t,new V.a3(o-n,C.e.an(p.pageY)-u.top))}return t},
aE:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d3(u,new X.aH(t,a.altKey,a.shiftKey))},
c5:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.t()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.t()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
hU:function(a){this.f=!0},
hI:function(a){this.f=!1},
hO:function(a){H.e(a,"$ia8")
if(this.f&&this.c5(a))a.preventDefault()},
hY:function(a){var u
H.e(a,"$iaO")
if(!this.f)return
u=this.dl(a)
this.b.kL(u)},
hW:function(a){var u
H.e(a,"$iaO")
if(!this.f)return
u=this.dl(a)
this.b.kH(u)},
i1:function(a){var u,t,s,r
H.e(a,"$ia8")
u=this.a
u.focus()
this.f=!0
this.aQ(a)
if(this.x){t=this.aE(a)
s=this.b0(a)
if(this.d.cP(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aE(a)
r=this.aH(a)
if(this.c.cP(t,r))a.preventDefault()},
i5:function(a){var u,t,s
H.e(a,"$ia8")
this.aQ(a)
u=this.aE(a)
if(this.x){t=this.b0(a)
if(this.d.b9(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.b9(u,s))a.preventDefault()},
hS:function(a){var u,t,s
H.e(a,"$ia8")
if(!this.c5(a)){this.aQ(a)
u=this.aE(a)
if(this.x){t=this.b0(a)
if(this.d.b9(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.b9(u,s))a.preventDefault()}},
i3:function(a){var u,t,s
H.e(a,"$ia8")
this.aQ(a)
u=this.aE(a)
if(this.x){t=this.b0(a)
if(this.d.b8(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.b8(u,s))a.preventDefault()},
hQ:function(a){var u,t,s
H.e(a,"$ia8")
if(!this.c5(a)){this.aQ(a)
u=this.aE(a)
if(this.x){t=this.b0(a)
if(this.d.b8(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.b8(u,s))a.preventDefault()}},
i7:function(a){var u,t
H.e(a,"$iaW")
this.aQ(a)
u=new V.Y((a&&C.O).gjZ(a),C.O.gk_(a)).C(0,180)
if(this.x){if(this.d.kM(u))a.preventDefault()
return}if(this.r)return
t=this.aH(a)
if(this.c.kN(u,t))a.preventDefault()},
i9:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aE(this.y)
s=this.aH(this.y)
this.d.i_(t,s,u)}},
ip:function(a){var u
H.e(a,"$iaJ")
this.a.focus()
this.f=!0
this.cg(a)
u=this.ca(a)
if(this.e.kK(u))a.preventDefault()},
ik:function(a){var u
H.e(a,"$iaJ")
this.cg(a)
u=this.ca(a)
if(this.e.kI(u))a.preventDefault()},
im:function(a){var u
H.e(a,"$iaJ")
this.cg(a)
u=this.ca(a)
if(this.e.kJ(u))a.preventDefault()},
sha:function(a){this.z=H.h(a,"$ia",[[P.cq,P.L]],"$aa")}}
D.bh.prototype={
gB:function(){var u=this.d
if(u==null){u=D.R()
this.d=u}return u},
aC:function(a){var u
H.e(a,"$iy")
u=this.d
if(u!=null)u.K(a)},
fH:function(){return this.aC(null)},
sae:function(a){var u,t
if(!J.M(this.b,a)){u=this.b
if(u!=null)u.gB().M(0,this.gd8())
t=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gd8())
u=new D.G("mover",t,this.b,this,[U.ae])
u.b=!0
this.aC(u)}},
sa8:function(a,b){var u,t
if(b==null)b=new V.V(1,1,1)
if(!this.c.v(0,b)){u=this.c
this.c=b
t=new D.G("color",u,b,this,[V.V])
t.b=!0
this.aC(t)}},
$ia1:1,
$ib4:1}
D.a1.prototype={$ib4:1}
D.dm.prototype={
gB:function(){var u=this.Q
if(u==null){u=D.R()
this.Q=u}return u},
aC:function(a){var u=this.Q
if(u!=null)u.K(a)},
dB:function(a){var u
H.e(a,"$iy")
u=this.ch
if(u!=null)u.K(a)},
hZ:function(){return this.dB(null)},
ic:function(a){var u,t,s
H.h(a,"$in",[D.a1],"$an")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(s==null||this.fG(s))return!1}return!0},
hC:function(a,b){var u,t,s,r,q,p,o,n
u=D.a1
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gdA(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=H.e(b[p],"$ia1")
if(o instanceof D.bh)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bz()
n.saj(null)
n.sb_(null)
n.c=null
n.d=0
o.d=n}H.k(s,r)
if(n.a==null)n.saj(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bE(a,b,this,[u])
u.b=!0
this.aC(u)},
ii:function(a,b){var u,t,s,r
u=D.a1
H.h(b,"$in",[u],"$an")
for(t=b.gU(b),s=this.gdA();t.F();){r=t.gL()
C.a.M(this.e,r)
r.gB().M(0,s)}u=new D.bF(a,b,this,[u])
u.b=!0
this.aC(u)},
fG:function(a){var u=C.a.W(this.e,a)
return u},
sh7:function(a){this.e=H.h(a,"$ia",[D.bh],"$aa")},
siq:function(a){this.f=H.h(a,"$ia",[D.dB],"$aa")},
siR:function(a){this.r=H.h(a,"$ia",[D.dJ],"$aa")},
sj3:function(a){this.x=H.h(a,"$ia",[D.dS],"$aa")},
sj4:function(a){this.y=H.h(a,"$ia",[D.dT],"$aa")},
sj5:function(a){this.z=H.h(a,"$ia",[D.dU],"$aa")},
$an:function(){return[D.a1]},
$aa_:function(){return[D.a1]}}
D.dB.prototype={$ia1:1,$ib4:1}
D.dJ.prototype={$ia1:1,$ib4:1}
D.dS.prototype={$ia1:1,$ib4:1}
D.dT.prototype={$ia1:1,$ib4:1}
D.dU.prototype={$ia1:1,$ib4:1}
V.V.prototype={
n:function(a,b){var u,t,s
u=C.e.n(this.a,b.gcT())
t=C.e.n(this.b,b.gbS())
s=C.e.n(this.c,b.gcq())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.V(u,t,s)},
t:function(a,b){var u,t,s
u=C.e.t(this.a,b.gcT())
t=C.e.t(this.b,b.gbS())
s=C.e.t(this.c,b.gcq())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.V(u,t,s)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.aD.prototype={
n:function(a,b){var u,t,s,r
u=C.e.n(this.a,b.gcT())
t=C.e.n(this.b,b.gbS())
s=C.e.n(this.c,b.gcq())
r=C.e.n(this.d,b.gjC(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aD(u,t,s,r)},
t:function(a,b){var u,t,s,r
u=C.e.t(this.a,b.gcT())
t=C.e.t(this.b,b.gbS())
s=C.e.t(this.c,b.gcq())
r=C.e.t(this.d,b.gjC(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aD(u,t,s,r)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aD))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}}
V.eS.prototype={}
V.bI.prototype={
ah:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.p])
return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bI))return!1
u=b.a
t=$.F().a
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
u=[P.p]
t=V.bY(H.b([this.a,this.d,this.r],u),3,0)
s=V.bY(H.b([this.b,this.e,this.x],u),3,0)
r=V.bY(H.b([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.d(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.d(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.d(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.d(t,1)
n=" "+t[1]+", "
if(1>=p)return H.d(s,1)
n=n+s[1]+", "
if(1>=o)return H.d(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.d(t,2)
u=" "+t[2]+", "
if(2>=p)return H.d(s,2)
u=u+s[2]+", "
if(2>=o)return H.d(r,2)
return n+(u+r[2]+"]")}}
V.ad.prototype={
ah:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.p])
return u},
ew:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.F().a)return V.dt()
a8=1/a7
a9=-r
b0=-d
return V.aQ((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
D:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aQ(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cY:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.C(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bd:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.Z(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.F().a
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
i:function(a){return this.O()},
en:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.p]
t=V.bY(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bY(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bY(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bY(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.d(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.d(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.d(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.d(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.d(t,1)
l=l+t[1]+", "
if(1>=o)return H.d(s,1)
l=l+s[1]+", "
if(1>=n)return H.d(r,1)
l=l+r[1]+", "
if(1>=m)return H.d(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.d(t,2)
p=p+t[2]+", "
if(2>=o)return H.d(s,2)
p=p+s[2]+", "
if(2>=n)return H.d(r,2)
p=p+r[2]+", "
if(2>=m)return H.d(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.d(t,3)
l=l+t[3]+", "
if(3>=o)return H.d(s,3)
l=l+s[3]+", "
if(3>=n)return H.d(r,3)
l=l+r[3]+", "
if(3>=m)return H.d(q,3)
return p+(l+q[3]+"]")},
O:function(){return this.en("",3,0)},
G:function(a){return this.en(a,3,0)}}
V.a3.prototype={
n:function(a,b){return new V.a3(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.a3(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.Z.prototype={
n:function(a,b){return new V.Z(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.Z(this.a-b.a,this.b-b.b,this.c-b.c)},
D:function(a,b){return new V.Z(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.aR.prototype={
n:function(a,b){return new V.aR(C.e.n(this.a,b.gld(b)),C.e.n(this.b,b.gle(b)),C.e.n(this.c,b.glf(b)),C.e.n(this.d,b.glc()))},
t:function(a,b){return new V.aR(C.e.t(this.a,b.gld(b)),C.e.t(this.b,b.gle(b)),C.e.t(this.c,b.glf(b)),C.e.t(this.d,b.glc()))},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aR))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}}
V.dF.prototype={
gaA:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dF))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}}
V.Y.prototype={
cM:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.B(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.D()
if(typeof r!=="number")return H.B(r)
return u*t+s*r},
n:function(a,b){var u,t,s
u=this.a
t=b.gk9(b)
if(typeof u!=="number")return u.n()
t=C.e.n(u,t)
u=this.b
s=b.gka(b)
if(typeof u!=="number")return u.n()
return new V.Y(t,C.e.n(u,s))},
t:function(a,b){var u,t,s
u=this.a
t=b.gk9(b)
if(typeof u!=="number")return u.t()
t=C.e.t(u,t)
u=this.b
s=b.gka(b)
if(typeof u!=="number")return u.t()
return new V.Y(t,C.e.t(u,s))},
D:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.D()
t=this.b
if(typeof t!=="number")return t.D()
return new V.Y(u*b,t*b)},
C:function(a,b){var u,t
if(Math.abs(b-0)<$.F().a){u=$.kJ
if(u==null){u=new V.Y(0,0)
$.kJ=u}return u}u=this.a
if(typeof u!=="number")return u.C()
t=this.b
if(typeof t!=="number")return t.C()
return new V.Y(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=this.a
s=$.F()
s.toString
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.B(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.B(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.C.prototype={
cM:function(a){return Math.sqrt(this.I(this))},
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cN:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.C(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aI:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.C(u*t-s*r,s*q-p*t,p*r-u*q)},
n:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.C(this.a-b.a,this.b-b.b,this.c-b.c)},
V:function(a){return new V.C(-this.a,-this.b,-this.c)},
D:function(a,b){return new V.C(this.a*b,this.b*b,this.c*b)},
C:function(a,b){if(Math.abs(b-0)<$.F().a)return V.cD()
return new V.C(this.a/b,this.b/b,this.c/b)},
ex:function(){var u=$.F().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
U.eF.prototype={
bY:function(a){var u=V.jj(a,this.c,this.b)
return u},
gB:function(){var u=this.y
if(u==null){u=D.R()
this.y=u}return u},
S:function(a){var u=this.y
if(u!=null)u.K(a)},
sf1:function(a,b){},
sey:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.F().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bY(t)}u=new D.G("maximumLocation",u,this.b,this,[P.p])
u.b=!0
this.S(u)}},
seA:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.F().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bY(t)}u=new D.G("minimumLocation",u,this.c,this,[P.p])
u.b=!0
this.S(u)}},
sa4:function(a,b){var u
b=this.bY(b)
u=this.d
if(!(Math.abs(u-b)<$.F().a)){this.d=b
u=new D.G("location",u,b,this,[P.p])
u.b=!0
this.S(u)}},
sez:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.F().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.G("maximumVelocity",u,a,this,[P.p])
u.b=!0
this.S(u)}},
sa2:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.F().a)){this.f=a
u=new D.G("velocity",u,a,this,[P.p])
u.b=!0
this.S(u)}},
sdY:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.F().a)){this.x=a
u=new D.G("dampening",u,a,this,[P.p])
u.b=!0
this.S(u)}},
aL:function(a){var u,t,s,r,q
u=this.f
t=$.F().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa4(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.F().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sa2(s)}}}
U.d5.prototype={
gB:function(){var u=this.b
if(u==null){u=D.R()
this.b=u}return u},
aB:function(a,b){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d5))return!1
return J.M(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cc.prototype={
gB:function(){var u=this.e
if(u==null){u=D.R()
this.e=u}return u},
S:function(a){var u
H.e(a,"$iy")
u=this.e
if(u!=null)u.K(a)},
aq:function(){return this.S(null)},
hA:function(a,b){var u,t,s,r,q,p,o,n
u=U.ae
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gbi(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.gB()
n.toString
H.k(s,r)
if(n.a==null)n.saj(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bE(a,b,this,[u])
u.b=!0
this.S(u)},
ig:function(a,b){var u,t,s
u=U.ae
H.h(b,"$in",[u],"$an")
for(t=b.gU(b),s=this.gbi();t.F();)t.gL().gB().M(0,s)
u=new D.bF(a,b,this,[u])
u.b=!0
this.S(u)},
aB:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.Z()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.aq(u,u.length,0,[H.r(u,0)]),s=null;u.F();){t=u.d
if(t!=null){r=t.aB(a,b)
if(r!=null)s=s==null?r:r.D(0,s)}}this.f=s==null?V.dt():s
u=this.e
if(u!=null)u.ag()}return this.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cc))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.M(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$an:function(){return[U.ae]},
$aa_:function(){return[U.ae]},
$iae:1}
U.ae.prototype={}
U.dG.prototype={
gB:function(){var u=this.y
if(u==null){u=D.R()
this.y=u}return u},
S:function(a){var u=this.y
if(u!=null)u.K(a)},
sf2:function(a){var u
a=V.jj(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.F().a)){this.a=a
u=new D.G("yaw",u,a,this,[P.p])
u.b=!0
this.S(u)}},
seK:function(a){var u
a=V.jj(a,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-a)<$.F().a)){this.b=a
u=new D.G("pitch",u,a,this,[P.p])
u.b=!0
this.S(u)}},
seQ:function(a){var u
a=V.jj(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.F().a)){this.c=a
u=new D.G("roll",u,a,this,[P.p])
u.b=!0
this.S(u)}},
aB:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.sf2(this.a+this.d*a.y)
this.seK(this.b+this.e*a.y)
this.seQ(this.c+this.f*a.y)
u=this.c
s=Math.cos(u)
r=Math.sin(u)
this.x=V.aQ(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1).D(0,V.kk(this.b)).D(0,V.jw(this.a))
u=this.y
if(u!=null)u.ag()}return this.x},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dG))return!1
u=this.a
t=b.a
s=$.F().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"], ["+V.K(this.d,3,0)+", "+V.K(this.e,3,0)+", "+V.K(this.f,3,0)+"]"}}
U.e2.prototype={
gB:function(){var u=this.fx
if(u==null){u=D.R()
this.fx=u}return u},
S:function(a){var u
H.e(a,"$iy")
u=this.fx
if(u!=null)u.K(a)},
aq:function(){return this.S(null)},
jE:function(a){var u,t
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.b
if(t==null){t=D.R()
u.b=t
u=t}else u=t
u.h(0,this.ght())
u=this.a.c
t=u.d
if(t==null){t=D.R()
u.d=t
u=t}else u=t
u.h(0,this.ghv())
u=this.a.c
t=u.c
if(t==null){t=D.R()
u.c=t
u=t}else u=t
u.h(0,this.ghx())
u=this.a.d
t=u.f
if(t==null){t=D.R()
u.f=t
u=t}else u=t
u.h(0,this.ghp())
u=this.a.d
t=u.d
if(t==null){t=D.R()
u.d=t
u=t}else u=t
u.h(0,this.ghr())
u=this.a.e
t=u.b
if(t==null){t=D.R()
u.b=t
u=t}else u=t
u.h(0,this.gj0())
u=this.a.e
t=u.d
if(t==null){t=D.R()
u.d=t
u=t}else u=t
u.h(0,this.giZ())
u=this.a.e
t=u.c
if(t==null){t=D.R()
u.c=t
u=t}else u=t
u.h(0,this.giX())
return!0},
as:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.V()
u=-u}if(this.r){if(typeof t!=="number")return t.V()
t=-t}return new V.Y(u,t)},
hu:function(a){a=H.j(H.e(a,"$iy"),"$ibm")
if(!J.M(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
hw:function(a){var u,t,s,r,q,p,o
a=H.j(H.e(a,"$iy"),"$ibm")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.Y(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.as(new V.Y(t.a,t.b).D(0,2).C(0,u.gaA()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.V()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sa2(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.V()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sa2(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.as(new V.Y(s.a,s.b).D(0,2).C(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa4(0,-p*q+s)
this.b.sa2(0)
this.c.sa2(0)
t=t.t(0,a.z)
this.dx=this.as(new V.Y(t.a,t.b).D(0,2).C(0,u.gaA()))}this.aq()},
hy:function(a){var u,t,s
H.e(a,"$iy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.V()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sa2(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.V()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sa2(-t*10*u)
this.aq()}},
hq:function(a){if(H.j(H.e(a,"$iy"),"$idq").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hs:function(a){var u,t,s,r,q,p,o
a=H.j(H.e(a,"$iy"),"$ibm")
if(!J.M(this.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=this.as(new V.Y(s.a,s.b).D(0,2).C(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa4(0,-p*q+s)
this.b.sa2(0)
this.c.sa2(0)
t=t.t(0,a.z)
this.dx=this.as(new V.Y(t.a,t.b).D(0,2).C(0,u.gaA()))
this.aq()},
j1:function(a){H.e(a,"$iy")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
j_:function(a){var u,t,s,r,q,p,o
a=H.j(H.e(a,"$iy"),"$idX")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.Y(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.as(new V.Y(t.a,t.b).D(0,2).C(0,u.gaA()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.V()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sa2(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.V()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sa2(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.as(new V.Y(s.a,s.b).D(0,2).C(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa4(0,-p*q+s)
this.b.sa2(0)
this.c.sa2(0)
t=t.t(0,a.z)
this.dx=this.as(new V.Y(t.a,t.b).D(0,2).C(0,u.gaA()))}this.aq()},
iY:function(a){var u,t,s
H.e(a,"$iy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.V()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sa2(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.V()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sa2(-t*10*u)
this.aq()}},
aB:function(a,b){var u,t,s
u=this.dy
t=a.e
if(typeof u!=="number")return u.Z()
if(u<t){this.dy=t
s=a.y
this.c.aL(s)
this.b.aL(s)
this.fr=V.jw(this.b.d).D(0,V.kk(this.c.d))}return this.fr},
$iae:1}
M.da.prototype={
aD:function(a){var u
H.e(a,"$iy")
u=this.x
if(u!=null)u.K(a)},
fI:function(){return this.aD(null)},
hK:function(a,b){var u,t,s,r,q,p,o,n
u=E.ai
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gar(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bz()
n.saj(null)
n.sb_(null)
n.c=null
n.d=0
o.z=n}H.k(s,r)
if(n.a==null)n.saj(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bE(a,b,this,[u])
u.b=!0
this.aD(u)},
hM:function(a,b){var u,t,s
u=E.ai
H.h(b,"$in",[u],"$an")
for(t=b.gU(b),s=this.gar();t.F();)t.gL().gB().M(0,s)
u=new D.bF(a,b,this,[u])
u.b=!0
this.aD(u)},
seS:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gB().M(0,this.gar())
t=this.c
this.c=a
if(a!=null)a.gB().h(0,this.gar())
u=new D.G("technique",t,this.c,this,[O.bQ])
u.b=!0
this.aD(u)}},
gB:function(){var u=this.x
if(u==null){u=D.R()
this.x=u}return u},
aV:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=new E.dL(a,this)
u.b=!0
t=this.e
if(t!=null)t.K(u)
a.eN(this.c)
t=this.b
t.toString
s=a.a
C.b.jH(s,36160,null)
C.b.cA(s,2884)
C.b.cA(s,2929)
C.b.k0(s,513)
r=s.drawingBufferWidth
q=s.drawingBufferHeight
p=t.r
o=p.a
if(typeof r!=="number")return H.B(r)
n=C.e.an(o*r)
o=p.b
if(typeof q!=="number")return H.B(q)
m=C.e.an(o*q)
o=C.e.an(p.c*r)
a.c=o
p=C.e.an(p.d*q)
a.d=p
C.b.lb(s,n,m,o,p)
C.b.jN(s,t.c)
t=t.a
C.b.jM(s,t.a,t.b,t.c,t.d)
C.b.jL(s,16640)
t=this.a
s=a.c
p=a.d
o=t.c
l=t.d
k=t.e
j=k-l
i=1/Math.tan(o*0.5)
h=V.aQ(-i/(s/p),0,0,0,0,i,0,0,0,0,k/j,-k*l/j,0,0,1,0)
t.a
a.cy.eM(h)
s=$.kp
if(s==null){s=V.kr()
p=V.kO()
o=$.kK
if(o==null){o=new V.C(0,0,-1)
$.kK=o}o=V.kj(s,p,o)
$.kp=o
g=o}else g=s
s=t.b
if(s!=null){f=s.aB(a,t)
if(f!=null)g=f.D(0,g)}a.db.eM(g)
t=this.c
if(t!=null)t.aL(a)
for(t=this.d.a,t=new J.aq(t,t.length,0,[H.r(t,0)]);t.F();)t.d.aL(a)
for(t=this.d.a,t=new J.aq(t,t.length,0,[H.r(t,0)]);t.F();)t.d.aV(a)
this.a.toString
a.cy.cQ()
a.db.cQ()
this.b.toString
a.eL()},
sh1:function(a,b){this.d=H.h(b,"$ia_",[E.ai],"$aa_")},
$io1:1}
A.d_.prototype={}
A.ey.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
kc:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.b.e0(r.a,r.c)}},
k6:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.b.e_(r.a,r.c)}}}
A.fq.prototype={
fv:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.af("")
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
a7.j9(u)
a7.jg(u)
a7.ja(u)
a7.jo(u)
a7.jp(u)
a7.ji(u)
a7.jt(u)
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
u=new P.af("")
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
s.jd(u)
s.j8(u)
s.jb(u)
s.je(u)
s.jm(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.jk(u)
s.jl(u)}s.jh(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=s.y
if(l!==C.d){m+="uniform float alpha;\n"
u.a=m
if(l!==C.j){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.h){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.i){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.d:m+="   return 1.0;\n"
u.a=m
break
case C.j:m+="   return alpha;\n"
u.a=m
break
case C.h:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.i:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.b([],[P.f])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.l(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.jc(u)
s.jj(u)
s.jn(u)
s.jq(u)
s.jr(u)
s.js(u)
s.jf(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.f])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(s.c!==C.d)u.a+="   setDiffuseColor();\n"
if(s.d!==C.d)u.a+="   setInvDiffuseColor();\n"
if(s.e!==C.d)u.a+="   setSpecularColor();\n"
if(s.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(s.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(s.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(s.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(s.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(s.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(s.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(s.a!==C.d)C.a.h(j,"emission()")
if(s.r!==C.d)C.a.h(j,"reflect(refl)")
if(s.x!==C.d)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.l(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.dm(n,35633)
this.f=this.dm(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.dS(s,q,this.e)
C.b.dS(s,this.r,this.f)
C.b.ks(s,this.r)
if(!H.jL(C.b.bR(s,this.r,35714))){h=C.b.f9(s,this.r)
C.b.jX(s,this.r)
H.q(P.u("Failed to link shader: "+H.i(h)))}this.iM()
this.iO()
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a7.fr)this.id=H.j(this.y.p(0,"invViewMat"),"$iav")
if(t)this.dy=H.j(this.y.p(0,"objMat"),"$iav")
if(r)this.fr=H.j(this.y.p(0,"viewObjMat"),"$iav")
this.fy=H.j(this.y.p(0,"projViewObjMat"),"$iav")
if(a7.x2)this.k1=H.j(this.y.p(0,"txt2DMat"),"$icw")
if(a7.y1)this.k2=H.j(this.y.p(0,"txtCubeMat"),"$iav")
if(a7.y2)this.k3=H.j(this.y.p(0,"colorMat"),"$iav")
this.sfY(H.b([],[A.av]))
t=a7.ax
if(t>0){this.k4=H.e(this.y.p(0,"bendMatCount"),"$iJ")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.k(0,q)
if(f==null)H.q(P.u("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.j(f,"$iav"))}}t=a7.a
if(t!==C.d){this.r2=H.j(this.y.p(0,"emissionClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.j(this.y.p(0,"emissionTxt"),"$iaj")
this.x1=H.j(this.y.p(0,"nullEmissionTxt"),"$iJ")
break
case C.i:this.ry=H.j(this.y.p(0,"emissionTxt"),"$iak")
this.x1=H.j(this.y.p(0,"nullEmissionTxt"),"$iJ")
break}}t=a7.b
if(t!==C.d){this.x2=H.j(this.y.p(0,"ambientClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.j(this.y.p(0,"ambientTxt"),"$iaj")
this.ax=H.j(this.y.p(0,"nullAmbientTxt"),"$iJ")
break
case C.i:this.y2=H.j(this.y.p(0,"ambientTxt"),"$iak")
this.ax=H.j(this.y.p(0,"nullAmbientTxt"),"$iJ")
break}}t=a7.c
if(t!==C.d){this.al=H.j(this.y.p(0,"diffuseClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.br=H.j(this.y.p(0,"diffuseTxt"),"$iaj")
this.bs=H.j(this.y.p(0,"nullDiffuseTxt"),"$iJ")
break
case C.i:this.e1=H.j(this.y.p(0,"diffuseTxt"),"$iak")
this.bs=H.j(this.y.p(0,"nullDiffuseTxt"),"$iJ")
break}}t=a7.d
if(t!==C.d){this.bt=H.j(this.y.p(0,"invDiffuseClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.e2=H.j(this.y.p(0,"invDiffuseTxt"),"$iaj")
this.bu=H.j(this.y.p(0,"nullInvDiffuseTxt"),"$iJ")
break
case C.i:this.e3=H.j(this.y.p(0,"invDiffuseTxt"),"$iak")
this.bu=H.j(this.y.p(0,"nullInvDiffuseTxt"),"$iJ")
break}}t=a7.e
if(t!==C.d){this.bx=H.j(this.y.p(0,"shininess"),"$iW")
this.bv=H.j(this.y.p(0,"specularClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.e4=H.j(this.y.p(0,"specularTxt"),"$iaj")
this.bw=H.j(this.y.p(0,"nullSpecularTxt"),"$iJ")
break
case C.i:this.e5=H.j(this.y.p(0,"specularTxt"),"$iak")
this.bw=H.j(this.y.p(0,"nullSpecularTxt"),"$iJ")
break}}switch(a7.f){case C.d:break
case C.j:break
case C.h:this.e6=H.j(this.y.p(0,"bumpTxt"),"$iaj")
this.by=H.j(this.y.p(0,"nullBumpTxt"),"$iJ")
break
case C.i:this.e7=H.j(this.y.p(0,"bumpTxt"),"$iak")
this.by=H.j(this.y.p(0,"nullBumpTxt"),"$iJ")
break}if(a7.dy){this.e8=H.j(this.y.p(0,"envSampler"),"$iak")
this.e9=H.j(this.y.p(0,"nullEnvTxt"),"$iJ")
t=a7.r
if(t!==C.d){this.bz=H.j(this.y.p(0,"reflectClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.ea=H.j(this.y.p(0,"reflectTxt"),"$iaj")
this.bA=H.j(this.y.p(0,"nullReflectTxt"),"$iJ")
break
case C.i:this.eb=H.j(this.y.p(0,"reflectTxt"),"$iak")
this.bA=H.j(this.y.p(0,"nullReflectTxt"),"$iJ")
break}}t=a7.x
if(t!==C.d){this.bB=H.j(this.y.p(0,"refraction"),"$iW")
this.bC=H.j(this.y.p(0,"refractClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.ec=H.j(this.y.p(0,"refractTxt"),"$iaj")
this.bD=H.j(this.y.p(0,"nullRefractTxt"),"$iJ")
break
case C.i:this.ed=H.j(this.y.p(0,"refractTxt"),"$iak")
this.bD=H.j(this.y.p(0,"nullRefractTxt"),"$iJ")
break}}}t=a7.y
if(t!==C.d){this.bE=H.j(this.y.p(0,"alpha"),"$iW")
switch(t){case C.d:break
case C.j:break
case C.h:this.ee=H.j(this.y.p(0,"alphaTxt"),"$iaj")
this.bF=H.j(this.y.p(0,"nullAlphaTxt"),"$iJ")
break
case C.i:this.ef=H.j(this.y.p(0,"alphaTxt"),"$iak")
this.bF=H.j(this.y.p(0,"nullAlphaTxt"),"$iJ")
break}}this.sfJ(H.b([],[A.cv]))
this.sfK(H.b([],[A.cx]))
this.sfL(H.b([],[A.cy]))
this.sfM(H.b([],[A.cz]))
this.sfN(H.b([],[A.cA]))
this.sfO(H.b([],[A.cB]))
if(a7.k2){t=a7.z
if(t>0){this.eg=H.e(this.y.p(0,"dirLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iI")
s=this.y
r="dirLights["+g+"].color"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iI")
s=this.cB;(s&&C.a).h(s,new A.cv(g,f,e))}}t=a7.Q
if(t>0){this.eh=H.e(this.y.p(0,"pntLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iI")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iI")
s=this.y
r="pntLights["+g+"].color"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iI")
s=this.y
r="pntLights["+g+"].att0"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iW")
s=this.y
r="pntLights["+g+"].att1"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iW")
s=this.y
r="pntLights["+g+"].att2"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iW")
s=this.cC;(s&&C.a).h(s,new A.cx(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.ei=H.e(this.y.p(0,"spotLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iI")
s=this.y
r="spotLights["+g+"].objDir"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iI")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iI")
s=this.y
r="spotLights["+g+"].color"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iI")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iW")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iW")
s=this.y
r="spotLights["+g+"].att0"
a0=s.k(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iW")
s=this.y
r="spotLights["+g+"].att1"
a1=s.k(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iW")
s=this.y
r="spotLights["+g+"].att2"
a2=s.k(0,r)
if(a2==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$iW")
s=this.cD;(s&&C.a).h(s,new A.cy(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.ej=H.e(this.y.p(0,"txtDirLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iI")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iI")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iI")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iI")
s=this.y
r="txtDirLights["+g+"].color"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iI")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iJ")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.k(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iaj")
s=this.cE;(s&&C.a).h(s,new A.cz(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.ek=H.e(this.y.p(0,"txtPntLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iI")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iI")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$icw")
s=this.y
r="txtPntLights["+g+"].color"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iI")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iJ")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iW")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.k(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iW")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.k(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iW")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.k(0,r)
if(a2==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$iak")
s=this.cF;(s&&C.a).h(s,new A.cA(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.el=H.e(this.y.p(0,"txtSpotLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iI")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iI")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iI")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iI")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iI")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iJ")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.k(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iI")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.k(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iW")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.k(0,r)
if(a2==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$iW")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.k(0,r)
if(a3==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a3,"$iW")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.k(0,r)
if(a4==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a4,"$iW")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.k(0,r)
if(a5==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a5,"$iW")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.k(0,r)
if(a6==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a6,"$iaj")
s=this.cG;(s&&C.a).h(s,new A.cB(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ak:function(a,b,c){if(c==null||!c.d)C.b.T(b.a,b.d,1)
else{a.fk(c)
C.b.T(b.a,b.d,0)}},
ab:function(a,b,c){C.b.T(b.a,b.d,1)},
sfY:function(a){this.r1=H.h(a,"$ia",[A.av],"$aa")},
sfJ:function(a){this.cB=H.h(a,"$ia",[A.cv],"$aa")},
sfK:function(a){this.cC=H.h(a,"$ia",[A.cx],"$aa")},
sfL:function(a){this.cD=H.h(a,"$ia",[A.cy],"$aa")},
sfM:function(a){this.cE=H.h(a,"$ia",[A.cz],"$aa")},
sfN:function(a){this.cF=H.h(a,"$ia",[A.cA],"$aa")},
sfO:function(a){this.cG=H.h(a,"$ia",[A.cB],"$aa")}}
A.ft.prototype={
j9:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.ax+"];\n"
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
jg:function(a){var u
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
ja:function(a){var u
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
jo:function(a){var u,t
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
jp:function(a){var u,t
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
ji:function(a){var u
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
jt:function(a){var u
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
aF:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.d(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.ap(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jd:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aF(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   return emissionClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
j8:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aF(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   return ambientClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
jb:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aF(a,u,"diffuse")
t=a.a+="vec3 diffuseColor;\n"
t+="\n"
a.a=t
t+="void setDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
je:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aF(a,u,"invDiffuse")
t=a.a+="vec3 invDiffuseColor;\n"
t+="\n"
a.a=t
t+="void setInvDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
jm:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aF(a,u,"specular")
t=a.a+="uniform float shininess;\n"
t+="vec3 specularColor;\n"
a.a=t
t+="\n"
a.a=t
t+="void setSpecularColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
jh:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.d:break
case C.j:break
case C.h:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.i:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break}u+="vec3 normal()\n"
a.a=u
u+="{\n"
a.a=u
switch(t){case C.d:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.j:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.h:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.i:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
jk:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aF(a,u,"reflect")
t=a.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jl:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aF(a,u,"refract")
t=a.a+="uniform float refraction;\n"
t+="\n"
a.a=t
t+="vec3 refract(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jc:function(a){var u,t
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
jj:function(a){var u,t
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
jn:function(a){var u,t
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
jq:function(a){var u,t,s
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
jr:function(a){var u,t,s
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
js:function(a){var u,t,s
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
jf:function(a){var u
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
i:function(a){return this.al}}
A.cv.prototype={}
A.cz.prototype={}
A.cx.prototype={}
A.cA.prototype={}
A.cy.prototype={}
A.cB.prototype={}
A.co.prototype={
fA:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dm:function(a,b){var u,t,s
u=this.a
t=C.b.jV(u,b)
C.b.fl(u,t,a)
C.b.jP(u,t)
if(!H.jL(C.b.fb(u,t,35713))){s=C.b.fa(u,t)
C.b.jY(u,t)
throw H.c(P.u("Error compiling shader '"+H.i(t)+"': "+H.i(s)))}return t},
iM:function(){var u,t,s,r,q,p
u=H.b([],[A.d_])
t=this.a
s=H.ab(C.b.bR(t,this.r,35721))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.b.f4(t,this.r,r)
p=C.b.f6(t,this.r,q.name)
C.a.h(u,new A.d_(t,q.name,p))}this.x=new A.ey(u)},
iO:function(){var u,t,s,r,q,p
u=H.b([],[A.dY])
t=this.a
s=H.ab(C.b.bR(t,this.r,35718))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.b.f5(t,this.r,r)
p=C.b.fc(t,this.r,q.name)
C.a.h(u,this.jW(q.type,q.size,q.name,p))}this.y=new A.hq(u)},
aP:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.J(u,t,b,c)
else return A.jz(u,t,b,a,c)},
h4:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aj(u,t,b,c)
else return A.jz(u,t,b,a,c)},
h5:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ak(u,t,b,c)
else return A.jz(u,t,b,a,c)},
bn:function(a,b){return new P.e8(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
jW:function(a,b,c,d){switch(a){case 5120:return this.aP(b,c,d)
case 5121:return this.aP(b,c,d)
case 5122:return this.aP(b,c,d)
case 5123:return this.aP(b,c,d)
case 5124:return this.aP(b,c,d)
case 5125:return this.aP(b,c,d)
case 5126:return new A.W(this.a,this.r,c,d)
case 35664:return new A.hl(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.ho(this.a,this.r,c,d)
case 35667:return new A.hm(this.a,this.r,c,d)
case 35668:return new A.hn(this.a,this.r,c,d)
case 35669:return new A.hp(this.a,this.r,c,d)
case 35674:return new A.hr(this.a,this.r,c,d)
case 35675:return new A.cw(this.a,this.r,c,d)
case 35676:return new A.av(this.a,this.r,c,d)
case 35678:return this.h4(b,c,d)
case 35680:return this.h5(b,c,d)
case 35670:throw H.c(this.bn("BOOL",c))
case 35671:throw H.c(this.bn("BOOL_VEC2",c))
case 35672:throw H.c(this.bn("BOOL_VEC3",c))
case 35673:throw H.c(this.bn("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.by.prototype={
i:function(a){return this.b}}
A.dY.prototype={}
A.hq.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.k(0,b)
if(u==null)throw H.c(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
kk:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r)s+=u[r].i(0)+a
return s},
O:function(){return this.kk("\n")}}
A.J.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.hm.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.hn.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.hp.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.hk.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
sj6:function(a){this.e=H.h(a,"$ia",[P.l],"$aa")}}
A.W.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.hl.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.I.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.ho.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.hr.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.cw.prototype={
ao:function(a){var u=new Float32Array(H.bT(H.h(a,"$ia",[P.p],"$aa")))
C.b.eX(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.av.prototype={
ao:function(a){var u=new Float32Array(H.bT(H.h(a,"$ia",[P.p],"$aa")))
C.b.eY(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.aj.prototype={
fk:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.T(t,s,0)
else C.b.T(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.ak.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.iJ.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cN(u.b,b).cN(u.d.cN(u.c,b),c)
a.sa4(0,new V.Z(t.a,t.b,t.c))
a.seT(t.C(0,Math.sqrt(t.I(t))))
u=1-b
s=1-c
a.sdT(new V.aR(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:9}
F.iT.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:30}
F.iV.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.B(q)
t=-t*q
p=s*q
a.sa4(0,new V.Z(t,p,r))
p=new V.C(t,p,r)
a.seT(p.C(0,Math.sqrt(p.I(p))))
a.sdT(new V.aR(1-c,2+c,-1,-1))},
$S:9}
F.iW.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:20}
F.iX.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:20}
F.jf.prototype={
$2:function(a,b){return 0},
$S:30}
F.jg.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.B(u)
t=a.f
s=new V.C(t.a,t.b,t.c)
u=s.C(0,Math.sqrt(s.I(s))).D(0,this.b+u)
a.sa4(0,new V.Z(u.a,u.b,u.c))},
$S:9}
F.jh.prototype={
$1:function(a){return new V.Z(Math.cos(a),Math.sin(a),0)},
$S:28}
F.j3.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.Z(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:28}
F.iU.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.k_(t.$1(u),s)
s=J.lJ(J.k_(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.C(s.a,s.b,s.c)
q=s.C(0,Math.sqrt(s.I(s)))
t=$.kL
if(t==null){t=new V.C(1,0,0)
$.kL=t
p=t}else p=t
t=q.aI(!J.M(q,p)?V.kP():p)
o=t.C(0,Math.sqrt(t.I(t)))
t=o.aI(q)
p=t.C(0,Math.sqrt(t.I(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.D(0,t*s)
s=o.D(0,m*s)
a.sa4(0,J.lI(r,new V.Z(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:9}
F.a2.prototype={
b4:function(){if(!this.gb5()){C.a.M(this.a.a.d.b,this)
this.a.a.a3()}this.cc()
this.cd()
this.ix()},
ci:function(a){this.a=a
C.a.h(a.d.b,this)},
cj:function(a){this.b=a
C.a.h(a.d.c,this)},
iL:function(a){this.c=a
C.a.h(a.d.d,this)},
cc:function(){var u=this.a
if(u!=null){C.a.M(u.d.b,this)
this.a=null}},
cd:function(){var u=this.b
if(u!=null){C.a.M(u.d.c,this)
this.b=null}},
ix:function(){var u=this.c
if(u!=null){C.a.M(u.d.d,this)
this.c=null}},
gb5:function(){return this.a==null||this.b==null||this.c==null},
fX:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cD()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.ex())return
return q.C(0,Math.sqrt(q.I(q)))},
h0:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.t(0,t)
u=new V.C(u.a,u.b,u.c)
q=u.C(0,Math.sqrt(u.I(u)))
u=r.t(0,t)
u=new V.C(u.a,u.b,u.c)
u=q.aI(u.C(0,Math.sqrt(u.I(u))))
return u.C(0,Math.sqrt(u.I(u)))},
ct:function(){if(this.d!=null)return!0
var u=this.fX()
if(u==null){u=this.h0()
if(u==null)return!1}this.d=u
this.a.a.a3()
return!0},
fW:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cD()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.ex())return
return q.C(0,Math.sqrt(q.I(q)))},
h_:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.F().a){u=m.t(0,p)
u=new V.C(u.a,u.b,u.c)
h=u.C(0,Math.sqrt(u.I(u)))
if(j.a-k.a<0)h=h.V(0)}else{g=(u-l.b)/i
u=m.t(0,p).D(0,g).n(0,p).t(0,s)
u=new V.C(u.a,u.b,u.c)
h=u.C(0,Math.sqrt(u.I(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.V(0)}u=this.d
if(u!=null){f=u.C(0,Math.sqrt(u.I(u)))
u=f.aI(h)
u=u.C(0,Math.sqrt(u.I(u))).aI(f)
h=u.C(0,Math.sqrt(u.I(u)))}return h},
cr:function(){if(this.e!=null)return!0
var u=this.fW()
if(u==null){u=this.h_()
if(u==null)return!1}this.e=u
this.a.a.a3()
return!0},
gjO:function(a){if(J.M(this.a,this.b))return!0
if(J.M(this.b,this.c))return!0
if(J.M(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t
if(this.gb5())return a+"disposed"
u=a+C.c.af(J.an(this.a.e),0)+", "+C.c.af(J.an(this.b.e),0)+", "+C.c.af(J.an(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.G("")}}
F.eW.prototype={}
F.h0.prototype={
b6:function(a,b,c){var u,t
u=b.a
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
if(u==t.e){u=b.c
u.a.a.A()
u=u.e
t=c.c
t.a.a.A()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.c
t.a.a.A()
if(u==t.e){u=b.c
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.A()
u=u.e
t=c.c
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
if(u==t.e){u=b.c
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.b3.prototype={
b4:function(){if(!this.gb5()){C.a.M(this.a.a.c.b,this)
this.a.a.a3()}this.cc()
this.cd()},
ci:function(a){this.a=a
C.a.h(a.c.b,this)},
cj:function(a){this.b=a
C.a.h(a.c.c,this)},
cc:function(){var u=this.a
if(u!=null){C.a.M(u.c.b,this)
this.a=null}},
cd:function(){var u=this.b
if(u!=null){C.a.M(u.c.c,this)
this.b=null}},
gb5:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){if(this.gb5())return a+"disposed"
return a+C.c.af(J.an(this.a.e),0)+", "+C.c.af(J.an(this.b.e),0)},
O:function(){return this.G("")}}
F.fd.prototype={}
F.hj.prototype={
b6:function(a,b,c){var u,t
u=b.a
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
return u==t.e}else{u=b.a
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
return u==t.e}else return!1}}}
F.bn.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.af(J.an(u.e),0)},
O:function(){return this.G("")}}
F.dI.prototype={
gB:function(){var u=this.e
if(u==null){u=D.R()
this.e=u}return u},
b7:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.A()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){q=u[r]
this.a.h(0,q.jQ())}this.a.A()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bn()
if(m.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.K(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.d(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.mc(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.d(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.ca(k,j,h)}u=this.e
if(u!=null)u.ag()},
aw:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aw()||!1
if(!this.a.aw())t=!1
u=this.e
if(u!=null)u.ag()
return t},
kx:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.r(u,0)])
for(u=[F.a9];t.length!==0;){s=C.a.gkg(t)
C.a.kR(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.z)(t),++p){o=t[p]
if(o!=null&&a.b6(0,s,o)){C.a.h(r,o)
C.a.M(t,o)}}if(r.length>1)b.b7(r)}}this.a.A()
this.c.cU()
this.d.cU()
this.b.kS()
this.c.cV(new F.hj())
this.d.cV(new F.h0())
u=this.e
if(u!=null)u.ag()},
jz:function(a){this.kx(new F.hK(),new F.fD())},
ck:function(){return this.jz(null)},
cH:function(){var u,t,s,r,q,p
u=this.e
if(u!=null)++u.d
this.d.cH()
for(t=this.a.c.length-1;t>=0;--t){u=this.a.c
if(t>=u.length)return H.d(u,t)
s=u[t]
u=s.r
if(u!=null)s.seB(new V.C(-u.a,-u.b,-u.c))
u=s.x
if(u!=null){r=-u.a
q=-u.b
u=-u.c
p=new V.C(r,q,u).C(0,Math.sqrt(r*r+q*q+u*u))
if(!J.M(s.x,p)){s.x=p
u=s.a
if(u!=null){u=u.e
if(u!=null)u.K(null)}}}}u=this.e
if(u!=null)u.ag()},
jJ:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.ba()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.b9().a)!==0)++r
if((s&$.b8().a)!==0)++r
if((s&$.bb().a)!==0)++r
if((s&$.bc().a)!==0)++r
if((s&$.cU().a)!==0)++r
if((s&$.cV().a)!==0)++r
if((s&$.c2().a)!==0)++r
if((s&$.b7().a)!==0)++r
q=a1.gd3(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.p
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.d1])
for(m=0,l=0;l<r;++l){k=a1.jD(l)
j=k.gd3(k)
C.a.q(n,l,new Z.d1(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.d(t,i)
h=t[i].kt(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.q(o,g,h[f]);++g}}m+=j}H.h(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.av(t,34962,e)
C.b.dW(t,34962,new Float32Array(H.bT(o)),35044)
C.b.av(t,34962,null)
d=new Z.d2(new Z.e4(34962,e),n,a1)
d.shj(H.b([],[Z.bk]))
if(this.b.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)}a=Z.jC(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bk(0,c.length,a))}if(this.c.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.d(b,l)
b=b[l].b
b.a.a.A()
C.a.h(c,b.e)}a=Z.jC(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bk(1,c.length,a))}if(this.d.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.d(b,l)
b=b[l].b
b.a.a.A()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.d(b,l)
b=b[l].c
b.a.a.A()
C.a.h(c,b.e)}a=Z.jC(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bk(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.G("   "))}return C.a.l(u,"\n")},
am:function(a){var u=this.e
if(u!=null)u.K(a)},
a3:function(){return this.am(null)},
$io2:1}
F.fU.prototype={
jv:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[F.a9],"$aa")
u=H.b([],[F.a2])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.d(a,p)
p=a[p]
if(q>=o)return H.d(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.ca(s,p,o))}}return u},
jw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.h(c,"$ia",[F.a9],"$aa")
u=H.b([],[F.a2])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.d(c,r)
l=c[r];++r
if(r>=m)return H.d(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.d(c,j)
i=c[j]
if(s<0||s>=m)return H.d(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.ca(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ca(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ca(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.ca(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
cV:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.k(0,q)
for(o=q-1;o>=0;--o){n=r.d.k(0,o)
if(a.b6(0,p,n)){p.b4()
break}}}}},
cU:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gjO(s)
if(t)s.b4()}},
aw:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].ct())s=!1
return s},
cs:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].cr())s=!1
return s},
cH:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.C(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.C(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.K(null)}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
O:function(){return this.G("")},
shb:function(a){this.b=H.h(a,"$ia",[F.a2],"$aa")}}
F.fV.prototype={
gm:function(a){return this.b.length},
cV:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.k(0,q)
for(o=q-1;o>=0;--o){n=r.c.k(0,o)
if(a.b6(0,p,n)){p.b4()
break}}}}},
cU:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.M(s.a,s.b)
if(t)s.b4()}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.d(r,s)
C.a.h(u,r[s].G(a+(""+s+". ")))}return C.a.l(u,"\n")},
O:function(){return this.G("")},
shl:function(a){this.b=H.h(a,"$ia",[F.b3],"$aa")}}
F.fW.prototype={
gm:function(a){return this.b.length},
kS:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.M(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.K(null)}s=t.a
if(s!=null){C.a.M(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
O:function(){return this.G("")},
sc9:function(a){this.b=H.h(a,"$ia",[F.bn],"$aa")}}
F.a9.prototype={
cw:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.e3(this.cx,s,p,u,t,r,q,a,o)},
jQ:function(){return this.cw(null)},
sa4:function(a,b){var u
if(!J.M(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a3()}},
seB:function(a){var u
a=a==null?null:a.C(0,Math.sqrt(a.I(a)))
if(!J.M(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a3()}},
seT:function(a){var u
if(!J.M(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a3()}},
sdT:function(a){var u
if(!J.M(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a3()}},
kt:function(a){var u,t
if(a.v(0,$.ba())){u=this.f
t=[P.p]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.b9())){u=this.r
t=[P.p]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.b8())){u=this.x
t=[P.p]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.bb())){u=this.y
t=[P.p]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.v(0,$.bc())){u=this.z
t=[P.p]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.cU())){u=this.Q
t=[P.p]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.cV())){u=this.Q
t=[P.p]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.c2()))return H.b([this.ch],[P.p])
else if(a.v(0,$.b7())){u=this.cx
t=[P.p]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.p])},
ct:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cD()
this.d.Y(0,new F.hP(u))
u=u.a
this.r=u.C(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.ag()}return!0},
cr:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cD()
this.d.Y(0,new F.hO(u))
u=u.a
this.x=u.C(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.ag()}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t,s
u=H.b([],[P.f])
C.a.h(u,C.c.af(J.an(this.e),0))
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
C.a.h(u,V.K(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.l(u,", ")
return a+"{"+s+"}"},
O:function(){return this.G("")}}
F.hP.prototype={
$1:function(a){var u,t
H.e(a,"$ia2")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:7}
F.hO.prototype={
$1:function(a){var u,t
H.e(a,"$ia2")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:7}
F.hF.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.u("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a3()
return!0},
jy:function(a,b,c,d,e,f,g,h,i){var u=F.e3(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
jx:function(a,b,c,d,e,f){return this.jy(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
aw:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].ct()
return!0},
cs:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].cr()
return!0},
jK:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.C(0,Math.sqrt(p*p+o*o+n*n))
if(!J.M(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.K(null)}}}}return!0},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
this.A()
u=H.b([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
O:function(){return this.G("")},
sj7:function(a){this.c=H.h(a,"$ia",[F.a9],"$aa")}}
F.hG.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.d(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.d(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
Y:function(a,b){H.k(b,{func:1,ret:-1,args:[F.a2]})
C.a.Y(this.b,b)
C.a.Y(this.c,new F.hH(this,b))
C.a.Y(this.d,new F.hI(this,b))},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
O:function(){return this.G("")},
shc:function(a){this.b=H.h(a,"$ia",[F.a2],"$aa")},
shd:function(a){this.c=H.h(a,"$ia",[F.a2],"$aa")},
she:function(a){this.d=H.h(a,"$ia",[F.a2],"$aa")}}
F.hH.prototype={
$1:function(a){H.e(a,"$ia2")
if(!J.M(a.a,this.a))this.b.$1(a)},
$S:7}
F.hI.prototype={
$1:function(a){var u
H.e(a,"$ia2")
u=this.a
if(!J.M(a.a,u)&&!J.M(a.b,u))this.b.$1(a)},
$S:7}
F.hJ.prototype={
gm:function(a){return this.b.length+this.c.length},
k:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.d(u,s)
return u[s]}else{if(b<0)return H.d(u,b)
return u[b]}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
O:function(){return this.G("")},
shm:function(a){this.b=H.h(a,"$ia",[F.b3],"$aa")},
shn:function(a){this.c=H.h(a,"$ia",[F.b3],"$aa")}}
F.hL.prototype={}
F.hK.prototype={
b6:function(a,b,c){return J.M(b.f,c.f)}}
F.hM.prototype={}
F.fD.prototype={
b7:function(a){var u,t,s,r
H.h(a,"$ia",[F.a9],"$aa")
u=V.cD()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.C(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.C(0,Math.sqrt(u.I(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s)a[s].seB(u)
return}}
F.hN.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
O:function(){return this.G("")},
sc9:function(a){this.b=H.h(a,"$ia",[F.bn],"$aa")}}
O.ds.prototype={
gB:function(){var u=this.dy
if(u==null){u=D.R()
this.dy=u}return u},
a_:function(a){var u
H.e(a,"$iy")
u=this.dy
if(u!=null)u.K(a)},
c8:function(){return this.a_(null)},
dF:function(a){H.e(a,"$iy")
this.a=null
this.a_(a)},
iD:function(){return this.dF(null)},
hE:function(a,b){var u=V.ad
u=new D.bE(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.a_(u)},
hG:function(a,b){var u=V.ad
u=new D.bF(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.a_(u)},
dj:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.dx
t=C.f.a6(u.e.length+3,4)*4
s=C.f.a6(u.f.length+3,4)*4
r=C.f.a6(u.r.length+3,4)*4
q=C.f.a6(u.x.length+3,4)*4
p=C.f.a6(u.y.length+3,4)*4
o=C.f.a6(u.z.length+3,4)*4
n=C.f.a6(this.e.a.length+3,4)*4
u=this.b!=null
m=this.d!=null
l=this.f.c
k=this.r.c
j=this.x.c
i=this.y.c
h=this.z.c
g=this.Q.c
f=this.cx.c
e=this.cy.c
d=this.db.c
c="MaterialLight_"+C.f.i(l.a)+C.f.i(k.a)+C.f.i(j.a)+C.f.i(i.a)+C.f.i(h.a)+C.f.i(g.a)+C.f.i(f.a)+C.f.i(e.a)+C.f.i(d.a)+"_"
c+=u?"1":"0"
c+="0"
c=c+(m?"1":"0")+"_"+n+"_"+t+"_"+s+"_"+r+"_"+q+"_"+p+"_"+o
b=f!==C.d||e!==C.d
a=k!==C.d||j!==C.d||i!==C.d||h!==C.d
a0=h===C.d
a1=!a0||b
a2=j!==C.d||i!==C.d||!a0||g!==C.d||b
a0=g===C.d
a3=!a0
a4=l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h||e===C.h||d===C.h
a5=l===C.i||k===C.i||j===C.i||i===C.i||h===C.i||g===C.i||f===C.i||e===C.i||d===C.i
a6=s+p+q+r+o>0
a7=n>0
a8=a2||!a0||a1
a9=u&&a4
b0=$.ba()
if(a2){u=$.b9()
b0=new Z.aV(b0.a|u.a)}if(a3){u=$.b8()
b0=new Z.aV(b0.a|u.a)}if(a4){u=$.bb()
b0=new Z.aV(b0.a|u.a)}if(a5){u=$.bc()
b0=new Z.aV(b0.a|u.a)}if(a7){u=$.b7()
b0=new Z.aV(b0.a|u.a)}return new A.ft(l,k,j,i,h,g,f,e,d,t,s,r,q,p,o,t+s+r+q+p+o,b,b,a6,a8,!0,!1,!1,a,a6,a1,a2,a3,a4,a5,a7,a9,!1,m,n,c.charCodeAt(0)==0?c:c,b0)},
X:function(a,b){H.h(a,"$ia",[T.cs],"$aa")
if(b!=null)if(!C.a.W(a,b)){b.a=a.length
C.a.h(a,b)}},
aL:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.aq(u,u.length,0,[H.r(u,0)]);u.F();){t=u.d
t.toString
s=$.hE
if(s==null){s=new V.C(0,0,1)
$.hE=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cY(s)}}},
kU:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.dj()
t=a4.fr.k(0,u.al)
if(t==null){t=A.mj(u,a4.a)
s=t.b
if(s.length===0)H.q(P.u("May not cache a shader with no name."))
if(a4.fr.bp(s))H.q(P.u('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.q(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.br
u=a5.e
if(!(u instanceof Z.d2)){a5.e=null
u=null}if(u==null||!u.d.v(0,q)){u=r.r1
if(u)a5.d.aw()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cs()
o.a.cs()
o=o.e
if(o!=null)o.ag()}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.jK()
n=n.e
if(n!=null)n.ag()}l=a5.d.jJ(new Z.hR(a4.a),q)
l.aU($.ba()).e=this.a.Q.c
if(u)l.aU($.b9()).e=this.a.cx.c
if(p)l.aU($.b8()).e=this.a.ch.c
if(r.rx)l.aU($.bb()).e=this.a.cy.c
if(o)l.aU($.bc()).e=this.a.db.c
if(r.x1)l.aU($.b7()).e=this.a.dx.c
a5.e=l}u=T.cs
k=H.b([],[u])
p=this.a
o=a4.a
C.b.f_(o,p.r)
p.x.kc()
if(r.fx){p=this.a
n=a4.dx.ga1()
p=p.dy
p.toString
p.ao(n.ah(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db.ga1().D(0,a4.dx.ga1())
a4.cx=n}p=p.fr
p.toString
p.ao(n.ah(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gkP().D(0,a4.dx.ga1())
a4.ch=n}p=p.fy
p.toString
p.ao(n.ah(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.ao(n.ah(0,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.ao(C.D.ah(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.ao(n.ah(0,!0))}if(r.ax>0){j=this.e.a.length
p=this.a.k4
C.b.T(p.a,p.d,j)
for(p=[P.p],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.d(m,i)
m=m[i]
n.toString
H.e(m,"$iad")
n=n.r1
if(i>=n.length)return H.d(n,i)
n=n[i]
h=new Float32Array(H.bT(H.h(m.ah(0,!0),"$ia",p,"$aa")))
C.b.eY(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.j:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.X(k,this.f.d)
p=this.a
n=this.f.d
p.ak(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.X(k,this.f.e)
p=this.a
n=this.f.e
p.ab(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.d:break
case C.j:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.X(k,this.r.d)
p=this.a
n=this.r.d
p.ak(p.y1,p.ax,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.X(k,this.r.e)
p=this.a
n=this.r.e
p.ab(p.y2,p.ax,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}switch(r.c){case C.d:break
case C.j:p=this.a
n=this.x.f
p=p.al
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.X(k,this.x.d)
p=this.a
n=this.x.d
p.ak(p.br,p.bs,n)
n=this.a
p=this.x.f
n=n.al
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.X(k,this.x.e)
p=this.a
n=this.x.e
p.ab(p.e1,p.bs,n)
n=this.a
p=this.x.f
n=n.al
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}switch(r.d){case C.d:break
case C.j:p=this.a
n=this.y.f
p=p.bt
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.X(k,this.y.d)
p=this.a
n=this.y.d
p.ak(p.e2,p.bu,n)
n=this.a
p=this.y.f
n=n.bt
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.X(k,this.y.e)
p=this.a
n=this.y.e
p.ab(p.e3,p.bu,n)
n=this.a
p=this.y.f
n=n.bt
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}switch(r.e){case C.d:break
case C.j:p=this.a
n=this.z.f
p=p.bv
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bx
C.b.R(n.a,n.d,g)
break
case C.h:this.X(k,this.z.d)
p=this.a
n=this.z.d
p.ak(p.e4,p.bw,n)
n=this.a
p=this.z.f
n=n.bv
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bx
C.b.R(p.a,p.d,g)
break
case C.i:this.X(k,this.z.e)
p=this.a
n=this.z.e
p.ab(p.e5,p.bw,n)
n=this.a
p=this.z.f
n=n.bv
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bx
C.b.R(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.eg
C.b.T(p.a,p.d,j)
f=a4.db.ga1()
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cB
if(e>=m.length)return H.d(m,e)
b=m[e]
m=f.cY(c.a)
g=m.a
a=m.b
a0=m.c
a0=m.C(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.w(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.b.w(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.eh
C.b.T(p.a,p.d,j)
f=a4.db.ga1()
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cC
if(e>=m.length)return H.d(m,e)
b=m[e]
m=c.gba(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.bd(c.gba(c))
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.ga8(c)
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gcl()
g=b.e
C.b.R(g.a,g.d,m)
m=c.gcm()
g=b.f
C.b.R(g.a,g.d,m)
m=c.gcn()
g=b.r
C.b.R(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.ei
C.b.T(p.a,p.d,j)
f=a4.db.ga1()
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cD
if(e>=m.length)return H.d(m,e)
b=m[e]
m=c.gba(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gcz(c).lm()
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.bd(c.gba(c))
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.ga8(c)
g=b.e
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.glj()
g=b.f
C.b.R(g.a,g.d,m)
m=c.gli()
g=b.r
C.b.R(g.a,g.d,m)
m=c.gcl()
g=b.x
C.b.R(g.a,g.d,m)
m=c.gcm()
g=b.y
C.b.R(g.a,g.d,m)
m=c.gcn()
g=b.z
C.b.R(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.ej
C.b.T(p.a,p.d,j)
f=a4.db.ga1()
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
g=this.a.cE
if(e>=g.length)return H.d(g,e)
b=g[e]
g=c.gbb()
H.h(k,"$ia",m,"$aa")
if(!C.a.W(k,g)){g.a=k.length
C.a.h(k,g)}g=c.gcz(c)
a=b.d
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=c.gl9()
a=b.b
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=c.gbK(c)
a=b.c
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=f.cY(c.gcz(c))
a=g.a
a0=g.b
a1=g.c
a1=g.C(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.w(a0.a,a0.d,a,g,a1)
a1=c.ga8(c)
g=b.f
C.b.w(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gbb()
g=a1.gcO(a1)
if(!g){g=b.x
C.b.T(g.a,g.d,1)}else{g=b.r
a=a1.d
a0=g.a
g=g.d
if(!a)C.b.T(a0,g,0)
else C.b.T(a0,g,a1.a)
g=b.x
C.b.T(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.ek
C.b.T(p.a,p.d,j)
f=a4.db.ga1()
for(p=this.dx.y,n=p.length,m=[P.p],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
a=this.a.cF
if(e>=a.length)return H.d(a,e)
b=a[e]
a=c.gbb()
H.h(k,"$ia",g,"$aa")
if(!C.a.W(k,a)){a.a=k.length
C.a.h(k,a)}a2=f.D(0,c.ga1())
a=c.ga1()
a0=$.cl
if(a0==null){a0=new V.Z(0,0,0)
$.cl=a0}a0=a.bd(a0)
a=b.b
C.b.w(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cl
if(a==null){a=new V.Z(0,0,0)
$.cl=a}a=a2.bd(a)
a0=b.c
C.b.w(a0.a,a0.d,a.a,a.b,a.c)
a=a2.ew()
a0=b.d
h=new Float32Array(H.bT(H.h(new V.bI(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).ah(0,!0),"$ia",m,"$aa")))
C.b.eX(a0.a,a0.d,!1,h)
a0=c.ga8(c)
a=b.e
C.b.w(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gbb()
a=a0.gcO(a0)
if(!a){a=b.r
C.b.T(a.a,a.d,1)}else{a=b.f
a1=a0.gcO(a0)
a3=a.a
a=a.d
if(!a1)C.b.T(a3,a,0)
else C.b.T(a3,a,a0.glk(a0))
a=b.r
C.b.T(a.a,a.d,0)}a=c.gcl()
a0=b.x
C.b.R(a0.a,a0.d,a)
a=c.gcm()
a0=b.y
C.b.R(a0.a,a0.d,a)
a=c.gcn()
a0=b.z
C.b.R(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.el
C.b.T(p.a,p.d,j)
f=a4.db.ga1()
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cG
if(e>=m.length)return H.d(m,e)
b=m[e]
m=c.gbb()
H.h(k,"$ia",u,"$aa")
if(!C.a.W(k,m)){m.a=k.length
C.a.h(k,m)}m=c.gba(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gcz(c)
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gl9()
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gbK(c)
g=b.e
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.bd(c.gba(c))
g=b.f
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gbb()
g=m.gcO(m)
if(!g){m=b.x
C.b.T(m.a,m.d,1)}else{g=b.r
a=m.d
a0=g.a
g=g.d
if(!a)C.b.T(a0,g,0)
else C.b.T(a0,g,m.a)
m=b.x
C.b.T(m.a,m.d,0)}m=c.ga8(c)
g=b.y
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gln()
g=b.z
C.b.R(g.a,g.d,m)
m=c.glo()
g=b.Q
C.b.R(g.a,g.d,m)
m=c.gcl()
g=b.ch
C.b.R(g.a,g.d,m)
m=c.gcm()
g=b.cx
C.b.R(g.a,g.d,m)
m=c.gcn()
g=b.cy
C.b.R(g.a,g.d,m);++e}}}switch(r.f){case C.d:break
case C.j:break
case C.h:this.X(k,this.Q.d)
u=this.a
p=this.Q.d
u.ak(u.e6,u.by,p)
break
case C.i:this.X(k,this.Q.e)
u=this.a
p=this.Q.e
u.ab(u.e7,u.by,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db.ga1().ew()
a4.Q=p}u=u.id
u.toString
u.ao(p.ah(0,!0))}if(r.dy){this.X(k,this.ch)
u=this.a
p=this.ch
u.ab(u.e8,u.e9,p)
switch(r.r){case C.d:break
case C.j:u=this.a
p=this.cx.f
u=u.bz
u.toString
n=p.a
m=p.b
p=p.c
C.b.w(u.a,u.d,n,m,p)
break
case C.h:this.X(k,this.cx.d)
u=this.a
p=this.cx.d
u.ak(u.ea,u.bA,p)
p=this.a
u=this.cx.f
p=p.bz
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
break
case C.i:this.X(k,this.cx.e)
u=this.a
p=this.cx.e
u.ab(u.eb,u.bA,p)
p=this.a
u=this.cx.f
p=p.bz
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
break}switch(r.x){case C.d:break
case C.j:u=this.a
p=this.cy.f
u=u.bC
u.toString
n=p.a
m=p.b
p=p.c
C.b.w(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bB
C.b.R(p.a,p.d,m)
break
case C.h:this.X(k,this.cy.d)
u=this.a
p=this.cy.d
u.ak(u.ec,u.bD,p)
p=this.a
u=this.cy.f
p=p.bC
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bB
C.b.R(u.a,u.d,m)
break
case C.i:this.X(k,this.cy.e)
u=this.a
p=this.cy.e
u.ab(u.ed,u.bD,p)
p=this.a
u=this.cy.f
p=p.bC
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bB
C.b.R(u.a,u.d,m)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.j:u=this.a
n=this.db.f
u=u.bE
C.b.R(u.a,u.d,n)
break
case C.h:this.X(k,this.db.d)
u=this.a
n=this.db.d
u.ak(u.ee,u.bF,n)
n=this.a
u=this.db.f
n=n.bE
C.b.R(n.a,n.d,u)
break
case C.i:this.X(k,this.db.e)
u=this.a
n=this.db.e
u.ab(u.ef,u.bF,n)
n=this.a
u=this.db.f
n=n.bE
C.b.R(n.a,n.d,u)
break}C.b.cA(o,3042)
C.b.jI(o,770,771)}for(i=0;i<k.length;++i){u=k[i]
if(!u.c&&u.d){u.c=!0
C.b.dN(o,33984+u.a)
C.b.aT(o,3553,u.b)}}u=a5.e
u.co(a4)
u.aV(a4)
u.l8(a4)
if(p)C.b.k5(o,3042)
for(i=0;i<k.length;++i){u=k[i]
if(u.c){u.c=!1
C.b.dN(o,33984+u.a)
C.b.aT(o,3553,null)}}u=this.a
u.toString
C.b.f_(o,null)
u.x.k6()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dj().al},
sfZ:function(a){this.e=H.h(a,"$ia_",[V.ad],"$aa_")}}
O.fr.prototype={}
O.cg.prototype={
a_:function(a){this.a.a_(H.e(a,"$iy"))},
c8:function(){return this.a_(null)},
aG:function(){},
iJ:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gB().M(0,this.gbl())
t=this.d
this.d=a
if(a!=null)a.gB().h(0,this.gbl())
u=new D.G(this.b+".texture2D",t,this.d,this,[T.dR])
u.b=!0
this.a.a_(u)}},
iK:function(a){}}
O.fs.prototype={}
O.aP.prototype={
dH:function(a){var u,t
if(!J.M(this.f,a)){u=this.f
this.f=a
t=new D.G(this.b+".color",u,a,this,[V.V])
t.b=!0
this.a.a_(t)}},
aG:function(){this.fs()
this.dH(new V.V(1,1,1))},
sa8:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aG()
u=this.a
u.a=null
u.a_(null)}this.dH(b)}}
O.fu.prototype={
iI:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.F().a)){this.ch=a
u=new D.G(this.b+".refraction",u,a,this,[P.p])
u.b=!0
this.a.a_(u)}},
aG:function(){this.bV()
this.iI(1)}}
O.fv.prototype={
ce:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.F().a)){this.ch=a
u=new D.G(this.b+".shininess",u,a,this,[P.p])
u.b=!0
this.a.a_(u)}},
aG:function(){this.bV()
this.ce(100)}}
O.bQ.prototype={}
T.cs.prototype={}
T.dR.prototype={}
T.h8.prototype={
gB:function(){var u=this.y
if(u==null){u=D.R()
this.y=u}return u}}
T.h9.prototype={
kv:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.aT(u,3553,t)
C.b.bL(u,3553,10242,10497)
C.b.bL(u,3553,10243,10497)
C.b.bL(u,3553,10241,9729)
C.b.bL(u,3553,10240,9729)
C.b.aT(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.h8()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.m
W.a4(s,"load",H.k(new T.ha(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
ku:function(a,b){return this.kv(a,!1,!1,!1,b)},
iE:function(a,b,c){var u,t,s,r
b=V.jT(b,2)
u=V.jT(a.width,2)
t=V.jT(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jo(null,null)
s.width=u
s.height=t
r=H.e(C.q.f8(s,"2d"),"$ibw")
r.imageSmoothingEnabled=!1;(r&&C.C).k8(r,a,0,0,s.width,s.height)
return P.ns(C.C.hi(r,0,0,s.width,s.height))}}}
T.ha.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.iE(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.aT(t,3553,this.e)
C.b.kO(t,37440,this.f?1:0)
C.b.l1(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.f3(t,3553)
C.b.aT(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.kb()}++s.e},
$S:11}
V.aY.prototype={
aJ:function(a){return!0},
i:function(a){return"all"},
$iat:1}
V.at.prototype={}
V.dr.prototype={
aJ:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)if(u[s].aJ(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa7:function(a){this.a=H.h(a,"$ia",[V.at],"$aa")},
$iat:1}
V.ao.prototype={
aJ:function(a){return!this.fq(a)},
i:function(a){return"!["+this.d4(0)+"]"}}
V.fL.prototype={
aJ:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.bM(this.a)
t=H.bM(this.b)
return u+".."+t},
$iat:1}
V.fT.prototype={
fz:function(a){var u,t
if(a.a.length<=0)throw H.c(P.u("May not create a SetMatcher with zero characters."))
u=new H.aG([P.l,P.O])
for(t=new H.cf(a,a.gm(a),0,[H.aa(a,"S",0)]);t.F();)u.q(0,t.d,!0)
this.siH(u)},
aJ:function(a){return this.a.bp(a)},
i:function(a){return P.dM(this.a.gay(),0,null)},
siH:function(a){this.a=H.h(a,"$iH",[P.l,P.O],"$aH")},
$iat:1}
V.cp.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cu(this.a.j(0,b))
r.sa7(H.b([],[V.at]))
r.c=!1
C.a.h(this.c,r)
return r},
kf:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.aJ(a))return r}return},
i:function(a){return this.b},
sj2:function(a){this.c=H.h(a,"$ia",[V.cu],"$aa")}}
V.dW.prototype={
i:function(a){var u,t
u=H.jV(this.b,"\n","\\n")
t=H.jV(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.ct.prototype={
aK:function(a,b,c){var u,t,s
H.h(c,"$ia",[P.f],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.z)(c),++t){s=c[t]
this.c.q(0,s,b)}},
i:function(a){return this.b},
siy:function(a){var u=P.f
this.c=H.h(a,"$iH",[u,u],"$aH")}}
V.hc.prototype={
j:function(a,b){var u=this.a.k(0,b)
if(u==null){u=new V.cp(this,b)
u.sj2(H.b([],[V.cu]))
u.d=null
this.a.q(0,b,u)}return u},
P:function(a){var u,t
u=this.b.k(0,a)
if(u==null){u=new V.ct(this,a)
t=P.f
u.siy(new H.aG([t,t]))
this.b.q(0,a,u)}return u},
eW:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dW])
t=this.c
s=[P.l]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.H(a,o)
m=t.kf(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dM(r,0,null)
throw H.c(P.u("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dM(r,0,null)
k=t.d
j=k.c.k(0,l)
p=new V.dW(j==null?k.b:j,l,o)}++o}}},
siS:function(a){this.a=H.h(a,"$iH",[P.f,V.cp],"$aH")},
siW:function(a){this.b=H.h(a,"$iH",[P.f,V.ct],"$aH")}}
V.cu.prototype={
i:function(a){return this.b.b+": "+this.d4(0)}}
X.d4.prototype={$ib4:1}
X.f1.prototype={
gB:function(){var u=this.x
if(u==null){u=D.R()
this.x=u}return u}}
X.dA.prototype={
gB:function(){var u=this.f
if(u==null){u=D.R()
this.f=u}return u},
aO:function(a){var u
H.e(a,"$iy")
u=this.f
if(u!=null)u.K(a)},
fS:function(){return this.aO(null)},
sae:function(a){var u,t
if(!J.M(this.b,a)){u=this.b
if(u!=null)u.gB().M(0,this.gd9())
t=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gd9())
u=new D.G("mover",t,this.b,this,[U.ae])
u.b=!0
this.aO(u)}},
$ib4:1,
$id4:1}
X.dP.prototype={}
V.bf.prototype={
bh:function(a){this.b=new P.f4(C.Y)
this.c=null
this.sc3(H.b([],[[P.a,W.aw]]))},
N:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.aw]))
t=a.split("\n")
for(u=t.length,s=[W.aw],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.E(p)
n=this.b.h3(p,0,p.length)
m=n==null?p:n
C.k.fh(o,H.jV(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaz(this.d),o)}},
eI:function(a){var u,t,s,r
H.h(a,"$ia",[P.f],"$aa")
this.sc3(H.b([],[[P.a,W.aw]]))
u=C.a.l(a,"\n")
t=this.c
if(t==null){t=this.bq()
this.c=t}for(t=t.eW(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)this.bJ(t[r])},
sc3:function(a){this.d=H.h(a,"$ia",[[P.a,W.aw]],"$aa")}}
V.je.prototype={
$1:function(a){H.e(a,"$iaT")
P.jU(C.e.eV(this.a.gkl(),2)+" fps")},
$S:50}
V.eL.prototype={
bJ:function(a){switch(a.a){case"Class":this.N(a.b,"#551")
break
case"Comment":this.N(a.b,"#777")
break
case"Id":this.N(a.b,"#111")
break
case"Num":this.N(a.b,"#191")
break
case"Reserved":this.N(a.b,"#119")
break
case"String":this.N(a.b,"#171")
break
case"Symbol":this.N(a.b,"#616")
break
case"Type":this.N(a.b,"#B11")
break
case"Whitespace":this.N(a.b,"#111")
break}},
bq:function(){var u,t,s,r
u=V.hd()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
s=V.T("a","z")
C.a.h(t.a,s)
s=V.T("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=V.T("0","9")
C.a.h(s.a,t)
t=V.T("a","z")
C.a.h(s.a,t)
t=V.T("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.T("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.T("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.v(new H.t("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.T("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.T("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.v(new H.t("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.v(new H.t("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"OpenDoubleStr")
t=V.v(new H.t('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
s=V.v(new H.t('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
t=V.v(new H.t("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
s=V.v(new H.t('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.aY())
s=u.j(0,"Start").l(0,"OpenSingleStr")
t=V.v(new H.t("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
s=V.v(new H.t("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").l(0,"EscSingleStr")
t=V.v(new H.t("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").l(0,"OpenSingleStr")
s=V.v(new H.t("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.aY())
s=u.j(0,"Start").l(0,"Slash")
t=V.v(new H.t("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.v(new H.t("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").l(0,"EndComment")
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ao()
r=[V.at]
s.sa7(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"MLComment")
s=V.v(new H.t("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").l(0,"MLCStar")
t=V.v(new H.t("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"MLComment")
s=new V.ao()
s.sa7(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"EndComment")
s=V.v(new H.t("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Whitespace")
t=V.v(new H.t(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").l(0,"Whitespace")
s=V.v(new H.t(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.P("Num")
s=u.j(0,"Float")
s.d=s.a.P("Num")
s=u.j(0,"Sym")
s.d=s.a.P("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.P("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.P("String")
s=u.j(0,"EndComment")
s.d=s.a.P("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.P("Whitespace")
s=u.j(0,"Id")
t=s.a.P("Id")
s.d=t
s=[P.f]
t.aK(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aK(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aK(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.f2.prototype={
bJ:function(a){switch(a.a){case"Builtin":this.N(a.b,"#411")
break
case"Comment":this.N(a.b,"#777")
break
case"Id":this.N(a.b,"#111")
break
case"Num":this.N(a.b,"#191")
break
case"Preprocess":this.N(a.b,"#737")
break
case"Reserved":this.N(a.b,"#119")
break
case"Symbol":this.N(a.b,"#611")
break
case"Type":this.N(a.b,"#171")
break
case"Whitespace":this.N(a.b,"#111")
break}},
bq:function(){var u,t,s,r
u=V.hd()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
s=V.T("a","z")
C.a.h(t.a,s)
s=V.T("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=V.T("0","9")
C.a.h(s.a,t)
t=V.T("a","z")
C.a.h(s.a,t)
t=V.T("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.T("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.T("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.v(new H.t("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.T("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.T("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.v(new H.t("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.v(new H.t("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Slash")
t=V.v(new H.t("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.v(new H.t("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").l(0,"Sym").a,new V.aY())
s=u.j(0,"Comment").l(0,"EndComment")
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ao()
r=[V.at]
s.sa7(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Preprocess")
s=V.v(new H.t("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"Preprocess")
t=new V.ao()
t.sa7(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"EndPreprocess")
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Whitespace")
s=V.v(new H.t(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").l(0,"Whitespace")
t=V.v(new H.t(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.P("Num")
t=u.j(0,"Float")
t.d=t.a.P("Num")
t=u.j(0,"Sym")
t.d=t.a.P("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.P("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.P("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.P("Whitespace")
t=u.j(0,"Id")
s=t.a.P("Id")
t.d=s
t=[P.f]
s.aK(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aK(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aK(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.f3.prototype={
bJ:function(a){switch(a.a){case"Attr":this.N(a.b,"#911")
this.N("=","#111")
break
case"Id":this.N(a.b,"#111")
break
case"Other":this.N(a.b,"#111")
break
case"Reserved":this.N(a.b,"#119")
break
case"String":this.N(a.b,"#171")
break
case"Symbol":this.N(a.b,"#616")
break}},
bq:function(){var u,t,s
u=V.hd()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
s=V.T("a","z")
C.a.h(t.a,s)
s=V.T("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=V.T("0","9")
C.a.h(s.a,t)
t=V.T("a","z")
C.a.h(s.a,t)
t=V.T("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").l(0,"Attr")
s=V.v(new H.t("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Sym")
s=V.v(new H.t("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").l(0,"Sym")
t=V.v(new H.t("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"OpenStr")
s=V.v(new H.t('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").l(0,"CloseStr")
t=V.v(new H.t('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").l(0,"EscStr")
s=V.v(new H.t("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").l(0,"OpenStr")
t=V.v(new H.t('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").l(0,"OpenStr").a,new V.aY())
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.aY())
t=u.j(0,"Other").l(0,"Other")
s=new V.ao()
s.sa7(H.b([],[V.at]))
C.a.h(t.a,s)
t=V.v(new H.t('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.T("a","z")
C.a.h(s.a,t)
t=V.T("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.P("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.P("String")
t=u.j(0,"Id")
s=t.a.P("Id")
t.d=s
s.aK(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
s=u.j(0,"Attr")
s.d=s.a.P("Attr")
s=u.j(0,"Other")
s.d=s.a.P("Other")
return u}}
V.fH.prototype={
eI:function(a){H.h(a,"$ia",[P.f],"$aa")
this.sc3(H.b([],[[P.a,W.aw]]))
this.N(C.a.l(a,"\n"),"#111")},
bJ:function(a){},
bq:function(){return}}
V.fJ.prototype={
dO:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.k(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.kF().gcS().k(0,H.i(u))
if(t==null)if(d){c.$0()
this.dL(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.k1(this.c).h(0,q)
o=W.m6("radio")
o.checked=s
o.name=u
u=W.m
W.a4(o,"change",H.k(new V.fK(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.G.E(q,o)
n=r.createElement("span")
n.textContent=b
C.G.E(q,n)
J.k1(this.c).h(0,r.createElement("br"))},
b2:function(a,b,c){return this.dO(a,b,c,!1)},
dL:function(a){var u,t,s,r,q
u=P.kF()
t=P.f
s=P.mf(u.gcS(),t,t)
s.q(0,this.a,a)
r=u.eO(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.X).iA(t,new P.is([],[]).cZ(""),"",q)}}
V.fK.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dL(this.d)}},
$S:11}
V.fX.prototype={
fB:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.p).E(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.p.E(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.E(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.E(q,p)}o=u.createElement("div")
this.a=o
C.k.E(q,o)
this.b=null
o=W.m
W.a4(u,"scroll",H.k(new V.fZ(s),{func:1,ret:-1,args:[o]}),!1,o)},
dQ:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[P.f],"$aa")
this.iN()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eW(C.a.kr(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.E(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.E(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.E(t,o)
break
case"Link":n=p.b
if(H.nT(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.E(m[1])
l.textContent=H.E(m[0])
C.k.E(t,l)}else{k=P.en(C.J,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.i(k)
l.textContent=n
C.k.E(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.E(t,o)
break}}C.k.E(this.a,t)},
f7:function(a){var u,t,s,r
u=new V.eL("dart")
u.bh("dart")
t=new V.f2("glsl")
t.bh("glsl")
s=new V.f3("html")
s.bh("html")
r=C.a.kh(H.b([u,t,s],[V.bf]),new V.h_(a))
if(r!=null)return r
u=new V.fH("plain")
u.bh("plain")
return u},
dP:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a7,"$ia",[P.f],"$aa")
u=H.b([],[P.l])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.cS(r).a5(r,"+")){C.a.q(a7,s,C.c.ap(r,1))
C.a.h(u,1)
t=!0}else if(C.c.a5(r,"-")){C.a.q(a7,s,C.c.ap(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.f7(a5)
q.eI(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.E(o,n)
C.k.E(this.a,o)
m=P.en(C.J,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.k3(null)
i.href="#"+H.i(m)
i.textContent=a4
C.k.E(j,i)
C.w.E(k,j)
C.n.E(l,k)
C.o.E(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.d(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.z)(r),++a0)C.w.E(a,r[a0])
C.n.E(e,d)
C.n.E(e,c)
C.n.E(e,a)
C.o.E(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.z)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gU(r);a3.F();)C.w.E(c,a3.gL())
C.n.E(e,d)
C.n.E(e,c)
C.o.E(n,e)}},
ju:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[P.f],"$aa")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.E(this.a,t)
r=C.o.hk(t,-1)
s=H.e((r&&C.n).dt(r,-1),"$iaS").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto"
for(q=0;q<1;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.e(C.n.dt(r,-1),"$iaS")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.w).E(o,p)}},
iN:function(){var u,t,s,r
if(this.b!=null)return
u=V.hd()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Bold")
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").l(0,"Bold")
s=new V.ao()
r=[V.at]
s.sa7(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").l(0,"BoldEnd")
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Italic")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").l(0,"Italic")
s=new V.ao()
s.sa7(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").l(0,"ItalicEnd")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Code")
s=V.v(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").l(0,"Code")
s=new V.ao()
s.sa7(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").l(0,"CodeEnd")
s=V.v(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"LinkHead")
s=V.v(new H.t("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").l(0,"LinkTail")
s=V.v(new H.t("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").l(0,"LinkEnd")
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").l(0,"LinkHead")
t=new V.ao()
t.sa7(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").l(0,"LinkEnd")
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").l(0,"LinkTail")
t=new V.ao()
t.sa7(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.aY())
s=u.j(0,"Other").l(0,"Other")
t=new V.ao()
t.sa7(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.P("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.P("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.P("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.P("Link")
s=u.j(0,"Other")
s.d=s.a.P("Other")
this.b=u}}
V.fZ.prototype={
$1:function(a){P.kB(C.x,new V.fY(this.a))},
$S:11}
V.fY.prototype={
$0:function(){var u,t,s
u=C.e.an(document.documentElement.scrollTop)
t=this.a.style
s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.h_.prototype={
$1:function(a){return H.e(a,"$ibf").a===this.a},
$S:51}
K.j4.prototype={
$1:function(a){var u,t,s,r,q,p,o
u=H.j(H.e(a,"$iy"),"$idL").c
t=this.a
s=this.b.aB(u,null)
if(!J.M(t.d,s)){r=t.d
q=r==null
p=s==null
if(!(!q&&p))q=q&&!p
else q=!0
if(q)t.a=null
t.d=s
s=new D.G("colorMatrix",r,s,t,[V.ad])
s.b=!0
t.a_(s)}o=V.mk(this.c.aB(u,null))
if(!J.M(t.b,o)){s=t.b
r=s==null&&!0
if(r)t.a=null
t.b=o
s=new D.G("texture2DMatrix",s,o,t,[V.bI])
s.b=!0
t.a_(s)}},
$S:5}
K.j5.prototype={
$0:function(){this.a.sai(0,F.jO(1,null,null,1))},
$S:0}
K.j6.prototype={
$0:function(){this.a.sai(0,F.la(1,!0,!0,1,40,1))},
$S:0}
K.j7.prototype={
$0:function(){this.a.sai(0,F.la(1,!0,!1,1,40,0))},
$S:0}
K.j8.prototype={
$0:function(){this.a.sai(0,F.nS(6,null,1,6))},
$S:0}
K.j9.prototype={
$0:function(){this.a.sai(0,F.ln(30,1,15,0.5))},
$S:0}
K.ja.prototype={
$0:function(){this.a.sai(0,F.nJ(120,1,2,12,0.3,3))},
$S:0}
K.jb.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iy")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dP("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.dP("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a7.prototype
u.fn=u.i
u=J.dj.prototype
u.fp=u.i
u=P.n.prototype
u.fo=u.bN
u=W.P.prototype
u.bU=u.ac
u=W.eg.prototype
u.ft=u.au
u=O.cg.prototype
u.fs=u.aG
u=O.aP.prototype
u.bV=u.aG
u=V.dr.prototype
u.fq=u.aJ
u.d4=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"nm","mQ",10)
u(P,"nn","mR",10)
u(P,"no","mS",10)
t(P,"l9","nl",3)
s(W,"nC",4,null,["$4"],["mU"],19,0)
s(W,"nD",4,null,["$4"],["mV"],19,0)
var m
r(m=E.ai.prototype,"geG",0,0,null,["$1","$0"],["eH","kF"],1,0)
r(m,"geE",0,0,null,["$1","$0"],["eF","kE"],1,0)
r(m,"geC",0,0,null,["$1","$0"],["eD","kB"],1,0)
q(m,"gkz","kA",6)
q(m,"gkC","kD",6)
r(m=E.dV.prototype,"gd5",0,0,null,["$1","$0"],["d7","d6"],1,0)
p(m,"gkW","eP",3)
o(m=X.e1.prototype,"ghT","hU",13)
o(m,"ghH","hI",13)
o(m,"ghN","hO",4)
o(m,"ghX","hY",26)
o(m,"ghV","hW",26)
o(m,"gi0","i1",4)
o(m,"gi4","i5",4)
o(m,"ghR","hS",4)
o(m,"gi2","i3",4)
o(m,"ghP","hQ",4)
o(m,"gi6","i7",36)
o(m,"gi8","i9",13)
o(m,"gio","ip",12)
o(m,"gij","ik",12)
o(m,"gil","im",12)
r(D.bh.prototype,"gd8",0,0,null,["$1","$0"],["aC","fH"],1,0)
r(m=D.dm.prototype,"gdA",0,0,null,["$1","$0"],["dB","hZ"],1,0)
o(m,"gib","ic",38)
q(m,"ghB","hC",16)
q(m,"gih","ii",16)
n(V.Y.prototype,"gm","cM",15)
n(V.C.prototype,"gm","cM",15)
r(m=U.cc.prototype,"gbi",0,0,null,["$1","$0"],["S","aq"],1,0)
q(m,"ghz","hA",29)
q(m,"gie","ig",29)
r(m=U.e2.prototype,"gbi",0,0,null,["$1","$0"],["S","aq"],1,0)
o(m,"ght","hu",2)
o(m,"ghv","hw",2)
o(m,"ghx","hy",2)
o(m,"ghp","hq",2)
o(m,"ghr","hs",2)
o(m,"gj0","j1",2)
o(m,"giZ","j_",2)
o(m,"giX","iY",2)
r(m=M.da.prototype,"gar",0,0,null,["$1","$0"],["aD","fI"],1,0)
q(m,"ghJ","hK",6)
q(m,"ghL","hM",6)
r(m=O.ds.prototype,"gbl",0,0,null,["$1","$0"],["a_","c8"],1,0)
r(m,"giC",0,0,null,["$1","$0"],["dF","iD"],1,0)
q(m,"ghD","hE",18)
q(m,"ghF","hG",18)
r(O.cg.prototype,"gbl",0,0,null,["$1","$0"],["a_","c8"],1,0)
r(X.dA.prototype,"gd9",0,0,null,["$1","$0"],["aO","fS"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.jt,J.a7,J.aq,P.ec,P.n,H.cf,P.aN,H.bB,H.cC,H.eH,H.fM,H.hg,P.bi,H.c6,H.eh,P.bH,H.fe,H.fg,H.fa,P.ei,P.aX,P.az,P.e5,P.h2,P.cq,P.h3,P.aT,P.ah,P.iI,P.im,P.bR,P.eb,P.S,P.iz,P.fm,P.bx,P.f5,P.iG,P.iE,P.O,P.ar,P.ag,P.aM,P.fF,P.dK,P.e8,P.f0,P.bj,P.a,P.H,P.D,P.ap,P.f,P.af,P.bS,P.hw,P.iq,W.eJ,W.br,W.as,W.dy,W.eg,W.iu,W.db,W.au,W.il,W.eo,P.ir,P.el,P.ig,P.N,O.a_,O.ch,E.eB,E.ai,E.fN,D.y,E.dV,Z.e4,Z.hR,Z.d2,Z.bk,Z.aV,D.eE,D.bz,X.d3,X.dk,X.fc,X.fj,X.aH,X.fw,X.he,X.e1,D.bh,D.a1,D.dB,D.dJ,D.dS,D.dT,D.dU,V.V,V.aD,V.eS,V.bI,V.ad,V.a3,V.Z,V.aR,V.dF,V.Y,V.C,U.e2,M.da,A.d_,A.ey,A.ft,A.cv,A.cz,A.cx,A.cA,A.cy,A.cB,A.by,A.dY,A.hq,F.a2,F.eW,F.b3,F.fd,F.bn,F.dI,F.fU,F.fV,F.fW,F.a9,F.hF,F.hG,F.hJ,F.hL,F.hM,F.hN,O.bQ,O.cg,T.h9,V.aY,V.at,V.dr,V.fL,V.fT,V.cp,V.dW,V.ct,V.hc,X.d4,X.dP,X.dA,V.bf,V.fJ,V.fX])
s(J.a7,[J.f9,J.di,J.dj,J.aE,J.bl,J.b1,H.bJ,W.bA,W.bw,W.e6,W.eM,W.d8,W.d9,W.m,W.de,W.e9,W.b0,W.dp,W.ee,W.dD,W.aI,W.ej,W.ep,P.d0,P.dc,P.dC,P.bO,P.dH,P.dQ,P.dZ])
s(J.dj,[J.fG,J.bq,J.b2])
t(J.js,J.aE)
s(J.bl,[J.dh,J.dg])
t(P.fi,P.ec)
s(P.fi,[H.e_,W.hY,W.al,P.eX])
t(H.t,H.e_)
s(P.n,[H.eP,H.fn,H.cE])
s(H.eP,[H.bG,H.ff])
s(P.aN,[H.fo,H.hS])
t(H.fp,H.bG)
t(H.eI,H.eH)
s(P.bi,[H.fE,H.fb,H.hu,H.hi,H.eD,H.fR,P.dz,P.aC,P.hv,P.hs,P.bP,P.eG,P.eK])
s(H.c6,[H.ji,H.h7,H.j_,H.j0,H.j1,P.hU,P.hT,P.hV,P.hW,P.iy,P.ix,P.i3,P.i7,P.i4,P.i5,P.i6,P.ia,P.ib,P.i9,P.i8,P.h4,P.h5,P.iQ,P.ij,P.ii,P.ik,P.fh,P.fl,P.iF,P.eN,P.eO,P.hA,P.hx,P.hy,P.hz,P.iA,P.iB,P.iD,P.iC,P.iM,P.iL,P.iN,P.iO,W.eQ,W.i2,W.fC,W.fB,W.io,W.ip,W.iw,W.iH,P.it,P.iS,P.eY,P.eZ,E.fO,E.fP,E.fQ,E.hb,D.eU,D.eV,F.iJ,F.iT,F.iV,F.iW,F.iX,F.jf,F.jg,F.jh,F.j3,F.iU,F.hP,F.hO,F.hH,F.hI,T.ha,V.je,V.fK,V.fZ,V.fY,V.h_,K.j4,K.j5,K.j6,K.j7,K.j8,K.j9,K.ja,K.jb])
s(H.h7,[H.h1,H.c4])
t(P.fk,P.bH)
s(P.fk,[H.aG,W.hX])
t(H.du,H.bJ)
s(H.du,[H.cI,H.cK])
t(H.cJ,H.cI)
t(H.dv,H.cJ)
t(H.cL,H.cK)
t(H.dw,H.cL)
s(H.dw,[H.fx,H.fy,H.fz,H.fA,H.dx,H.cj])
t(P.ih,P.iI)
t(P.ie,P.im)
t(P.em,P.fm)
t(P.e0,P.em)
s(P.bx,[P.ez,P.eR])
t(P.bg,P.h3)
s(P.bg,[P.eA,P.f4,P.hD,P.hC])
t(P.hB,P.eR)
s(P.ag,[P.p,P.l])
s(P.aC,[P.bN,P.f6])
t(P.hZ,P.bS)
s(W.bA,[W.A,W.cF])
s(W.A,[W.P,W.be,W.c8,W.cG])
s(W.P,[W.w,P.o])
s(W.w,[W.cY,W.ex,W.c3,W.bd,W.bv,W.aw,W.f_,W.dd,W.cd,W.ce,W.dl,W.ci,W.fS,W.aS,W.dN,W.dO,W.h6,W.cr])
t(W.c7,W.e6)
t(W.ea,W.e9)
t(W.bC,W.ea)
t(W.df,W.c8)
t(W.bp,W.m)
s(W.bp,[W.aO,W.a8,W.aJ])
t(W.ef,W.ee)
t(W.ck,W.ef)
t(W.ek,W.ej)
t(W.hf,W.ek)
t(W.hQ,W.ci)
t(W.aW,W.a8)
t(W.e7,W.d9)
t(W.eq,W.ep)
t(W.ed,W.eq)
t(W.i_,W.hX)
t(W.i0,P.h2)
t(W.jD,W.i0)
t(W.i1,P.cq)
t(W.iv,W.eg)
t(P.is,P.ir)
t(P.ax,P.ig)
t(P.cn,P.o)
s(D.y,[E.dL,D.bE,D.bF,D.G,X.fI])
s(E.eB,[Z.d1,A.co,T.cs])
s(X.fI,[X.dq,X.bm,X.dX])
s(O.a_,[D.dm,U.cc])
s(D.eE,[U.eF,U.ae])
s(U.ae,[U.d5,U.dG])
t(A.fq,A.co)
s(A.dY,[A.J,A.hm,A.hn,A.hp,A.hk,A.W,A.hl,A.I,A.ho,A.hr,A.cw,A.av,A.aj,A.ak])
t(F.h0,F.eW)
t(F.hj,F.fd)
t(F.hK,F.hL)
t(F.fD,F.hM)
t(O.ds,O.bQ)
s(O.cg,[O.fr,O.fs,O.aP])
s(O.aP,[O.fu,O.fv])
t(T.dR,T.cs)
t(T.h8,T.dR)
s(V.dr,[V.ao,V.cu])
t(X.f1,X.dP)
s(V.bf,[V.eL,V.f2,V.f3,V.fH])
u(H.e_,H.cC)
u(H.cI,P.S)
u(H.cJ,H.bB)
u(H.cK,P.S)
u(H.cL,H.bB)
u(P.ec,P.S)
u(P.em,P.iz)
u(W.e6,W.eJ)
u(W.e9,P.S)
u(W.ea,W.as)
u(W.ee,P.S)
u(W.ef,W.as)
u(W.ej,P.S)
u(W.ek,W.as)
u(W.ep,P.S)
u(W.eq,W.as)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bd.prototype
C.q=W.bv.prototype
C.C=W.bw.prototype
C.k=W.aw.prototype
C.U=W.d8.prototype
C.W=W.dd.prototype
C.X=W.de.prototype
C.y=W.df.prototype
C.Z=J.a7.prototype
C.a=J.aE.prototype
C.a_=J.dg.prototype
C.f=J.dh.prototype
C.D=J.di.prototype
C.e=J.bl.prototype
C.c=J.b1.prototype
C.a6=J.b2.prototype
C.G=W.dl.prototype
C.ac=W.ck.prototype
C.M=J.fG.prototype
C.N=W.dD.prototype
C.b=P.bO.prototype
C.w=W.aS.prototype
C.o=W.dN.prototype
C.n=W.dO.prototype
C.B=J.bq.prototype
C.O=W.aW.prototype
C.P=W.cF.prototype
C.R=new P.eA(!1)
C.Q=new P.ez(C.R)
C.S=new P.fF()
C.T=new P.hD()
C.l=new P.ih()
C.d=new A.by(0,"ColorSourceType.None")
C.j=new A.by(1,"ColorSourceType.Solid")
C.h=new A.by(2,"ColorSourceType.Texture2D")
C.i=new A.by(3,"ColorSourceType.TextureCube")
C.x=new P.aM(0)
C.V=new P.aM(5e6)
C.Y=new P.f5("element",!0,!1,!1,!1)
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
C.H=H.b(u([127,2047,65535,1114111]),[P.l])
C.r=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.a7=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.t=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.u=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.a8=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.I=H.b(u([]),[P.f])
C.a9=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.J=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.v=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.K=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.aa=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.L=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.z=H.b(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.A=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.ab=new H.eI(0,{},C.I,[P.f,P.f])
C.m=new P.hB(!1)})();(function staticFields(){$.aL=0
$.c5=null
$.k5=null
$.jH=!1
$.lf=null
$.l7=null
$.ll=null
$.iY=null
$.j2=null
$.jR=null
$.bU=null
$.cP=null
$.cQ=null
$.jI=!1
$.U=C.l
$.b_=null
$.jq=null
$.kd=null
$.kc=null
$.km=null
$.kq=null
$.cl=null
$.kv=null
$.kJ=null
$.kN=null
$.kL=null
$.kM=null
$.hE=null
$.kK=null
$.kp=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nZ","lp",function(){return H.le("_$dart_dartClosure")})
u($,"o_","jX",function(){return H.le("_$dart_js")})
u($,"o5","lq",function(){return H.aU(H.hh({
toString:function(){return"$receiver$"}}))})
u($,"o6","lr",function(){return H.aU(H.hh({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"o7","ls",function(){return H.aU(H.hh(null))})
u($,"o8","lt",function(){return H.aU(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ob","lw",function(){return H.aU(H.hh(void 0))})
u($,"oc","lx",function(){return H.aU(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oa","lv",function(){return H.aU(H.kD(null))})
u($,"o9","lu",function(){return H.aU(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oe","lz",function(){return H.aU(H.kD(void 0))})
u($,"od","ly",function(){return H.aU(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ov","jY",function(){return P.mP()})
u($,"oB","cW",function(){return[]})
u($,"oh","lA",function(){return P.mM()})
u($,"ow","lE",function(){return H.ml(H.bT(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"oz","lG",function(){return P.mA("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"oA","lH",function(){return P.nd()})
u($,"ox","lF",function(){return P.ki(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"oy","jZ",function(){return P.kh(P.f,P.bj)})
u($,"oo","lD",function(){return Z.ay(0)})
u($,"oi","lB",function(){return Z.ay(511)})
u($,"oq","ba",function(){return Z.ay(1)})
u($,"op","b9",function(){return Z.ay(2)})
u($,"ok","b8",function(){return Z.ay(4)})
u($,"or","bb",function(){return Z.ay(8)})
u($,"os","bc",function(){return Z.ay(16)})
u($,"ol","cU",function(){return Z.ay(32)})
u($,"om","cV",function(){return Z.ay(64)})
u($,"on","lC",function(){return Z.ay(96)})
u($,"ot","c2",function(){return Z.ay(128)})
u($,"oj","b7",function(){return Z.ay(256)})
u($,"nY","lo",function(){return new V.eS(1e-9)})
u($,"nX","F",function(){return $.lo()})})()
var v={mangledGlobalNames:{l:"int",p:"double",ag:"num",f:"String",O:"bool",D:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.D},{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a8]},{func:1,ret:P.D,args:[D.y]},{func:1,ret:-1,args:[P.l,[P.n,E.ai]]},{func:1,ret:P.D,args:[F.a2]},{func:1,ret:P.D,args:[,,]},{func:1,ret:P.D,args:[F.a9,P.p,P.p]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[W.m]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:-1,args:[W.m]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:P.p},{func:1,ret:-1,args:[P.l,[P.n,D.a1]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.l,[P.n,V.ad]]},{func:1,ret:P.O,args:[W.P,P.f,P.f,W.br]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:P.f,args:[P.l]},{func:1,ret:P.O,args:[W.A]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:P.O,args:[W.au]},{func:1,ret:P.O,args:[P.f]},{func:1,ret:-1,args:[W.aO]},{func:1,ret:P.D,args:[,]},{func:1,ret:V.Z,args:[P.p]},{func:1,ret:-1,args:[P.l,[P.n,U.ae]]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:P.D,args:[P.ag]},{func:1,args:[W.m]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.N,args:[P.l]},{func:1,ret:P.D,args:[P.f,,]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.O,args:[[P.n,D.a1]]},{func:1,ret:P.D,args:[P.f]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.l]},{func:1,ret:[P.H,P.f,P.f],args:[[P.H,P.f,P.f],P.f]},{func:1,ret:-1,args:[W.A,W.A]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:[P.az,,],args:[,]},{func:1,ret:P.D,args:[,],opt:[P.ap]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,args:[P.f]},{func:1,ret:P.D,args:[P.aT]},{func:1,ret:P.O,args:[V.bf]},{func:1,args:[,P.f]},{func:1,ret:W.P,args:[W.A]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.a7,MediaError:J.a7,Navigator:J.a7,NavigatorConcurrentHardware:J.a7,NavigatorUserMediaError:J.a7,OverconstrainedError:J.a7,PositionError:J.a7,WebGLActiveInfo:J.a7,WebGLRenderbuffer:J.a7,WebGL2RenderingContext:J.a7,SQLError:J.a7,ArrayBufferView:H.bJ,Float32Array:H.dv,Int16Array:H.fx,Int32Array:H.fy,Int8Array:H.fz,Uint32Array:H.fA,Uint8ClampedArray:H.dx,CanvasPixelArray:H.dx,Uint8Array:H.cj,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLLIElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,HTMLAnchorElement:W.cY,HTMLAreaElement:W.ex,HTMLBaseElement:W.c3,HTMLBodyElement:W.bd,HTMLCanvasElement:W.bv,CanvasRenderingContext2D:W.bw,CDATASection:W.be,CharacterData:W.be,Comment:W.be,ProcessingInstruction:W.be,Text:W.be,CSSStyleDeclaration:W.c7,MSStyleCSSProperties:W.c7,CSS2Properties:W.c7,HTMLDivElement:W.aw,XMLDocument:W.c8,Document:W.c8,DOMException:W.eM,DOMImplementation:W.d8,DOMRectReadOnly:W.d9,Element:W.P,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,EventTarget:W.bA,HTMLFormElement:W.f_,HTMLHeadElement:W.dd,History:W.de,HTMLCollection:W.bC,HTMLFormControlsCollection:W.bC,HTMLOptionsCollection:W.bC,HTMLDocument:W.df,ImageData:W.b0,HTMLImageElement:W.cd,HTMLInputElement:W.ce,KeyboardEvent:W.aO,HTMLLabelElement:W.dl,Location:W.dp,HTMLAudioElement:W.ci,HTMLMediaElement:W.ci,PointerEvent:W.a8,MouseEvent:W.a8,DragEvent:W.a8,DocumentFragment:W.A,ShadowRoot:W.A,DocumentType:W.A,Node:W.A,NodeList:W.ck,RadioNodeList:W.ck,Range:W.dD,HTMLSelectElement:W.fS,HTMLTableCellElement:W.aS,HTMLTableDataCellElement:W.aS,HTMLTableHeaderCellElement:W.aS,HTMLTableElement:W.dN,HTMLTableRowElement:W.dO,HTMLTableSectionElement:W.h6,HTMLTemplateElement:W.cr,Touch:W.aI,TouchEvent:W.aJ,TouchList:W.hf,CompositionEvent:W.bp,FocusEvent:W.bp,TextEvent:W.bp,UIEvent:W.bp,HTMLVideoElement:W.hQ,WheelEvent:W.aW,Window:W.cF,DOMWindow:W.cF,Attr:W.cG,ClientRect:W.e7,DOMRect:W.e7,NamedNodeMap:W.ed,MozNamedAttrMap:W.ed,SVGScriptElement:P.cn,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,WebGLBuffer:P.d0,WebGLFramebuffer:P.dc,WebGLProgram:P.dC,WebGLRenderingContext:P.bO,WebGLShader:P.dH,WebGLTexture:P.dQ,WebGLUniformLocation:P.dZ})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.du.$nativeSuperclassTag="ArrayBufferView"
H.cI.$nativeSuperclassTag="ArrayBufferView"
H.cJ.$nativeSuperclassTag="ArrayBufferView"
H.dv.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.dw.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.li,[])
else K.li([])})})()
//# sourceMappingURL=test.dart.js.map
