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
a[c]=function(){a[c]=function(){H.oK(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.l3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.l3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.l3(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kL:function kL(a){this.a=a},
k3:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
lr:function(){return new P.dQ("No element")},
n4:function(){return new P.dQ("Too few elements")},
a5:function a5(a){this.a=a},
fA:function fA(){},
dw:function dw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
h5:function h5(a,b,c){this.a=a
this.b=b
this.$ti=c},
h6:function h6(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
j_:function j_(a,b,c){this.a=a
this.b=b
this.$ti=c},
j0:function j0(a,b,c){this.a=a
this.b=b
this.$ti=c},
bQ:function bQ(){},
cJ:function cJ(){},
e3:function e3(){},
mX:function(){throw H.c(P.E("Cannot modify unmodifiable Map"))},
ca:function(a){var u,t
u=H.J(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
ot:function(a){return v.types[H.ae(a)]},
oy:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iH},
n:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.at(a)
if(typeof u!=="string")throw H.c(H.ah(a))
return u},
nr:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fP(u)
t=u[0]
s=u[1]
return new H.hA(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cv:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
no:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.d(u,3)
t=H.J(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ab(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.G(r,p)|32)>s)return}return parseInt(a,b)},
bW:function(a){return H.nf(a)+H.l1(H.bF(a),0,null)},
nf:function(a){var u,t,s,r,q,p,o,n,m
u=J.V(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.P||!!u.$ibD){p=C.B(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.ca(r.length>1&&C.c.G(r,0)===36?C.c.aC(r,1):r)},
ng:function(){if(!!self.location)return self.location.href
return},
lC:function(a){var u,t,s,r,q
H.k9(a)
u=J.aE(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
np:function(a){var u,t,s,r
u=H.e([],[P.p])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.F)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.ah(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aL(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.ah(r))}return H.lC(u)},
lD:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ah(s))
if(s<0)throw H.c(H.ah(s))
if(s>65535)return H.np(a)}return H.lC(a)},
nq:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dJ:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aL(u,10))>>>0,56320|u&1023)}}throw H.c(P.ab(a,0,1114111,null,null))},
bV:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nn:function(a){var u=H.bV(a).getFullYear()+0
return u},
nl:function(a){var u=H.bV(a).getMonth()+1
return u},
nh:function(a){var u=H.bV(a).getDate()+0
return u},
ni:function(a){var u=H.bV(a).getHours()+0
return u},
nk:function(a){var u=H.bV(a).getMinutes()+0
return u},
nm:function(a){var u=H.bV(a).getSeconds()+0
return u},
nj:function(a){var u=H.bV(a).getMilliseconds()+0
return u},
t:function(a){throw H.c(H.ah(a))},
d:function(a,b){if(a==null)J.aE(a)
throw H.c(H.c5(a,b))},
c5:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aT(!0,b,"index",null)
u=H.ae(J.aE(a))
if(!(b<0)){if(typeof u!=="number")return H.t(u)
t=b>=u}else t=!0
if(t)return P.X(b,a,"index",null,u)
return P.dL(b,"index",null)},
om:function(a,b,c){if(a>c)return new P.bX(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bX(a,c,!0,b,"end","Invalid value")
return new P.aT(!0,b,"end",null)},
ah:function(a){return new P.aT(!0,a,null,null)},
of:function(a){if(typeof a!=="number")throw H.c(H.ah(a))
return a},
c:function(a){var u
if(a==null)a=new P.dG()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mt})
u.name=""}else u.toString=H.mt
return u},
mt:function(){return J.at(this.dartException)},
r:function(a){throw H.c(a)},
F:function(a){throw H.c(P.bu(a))},
b6:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.e([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ik(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
il:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lM:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lx:function(a,b){return new H.hq(a,b==null?null:b.method)},
kM:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fS(a,t,u?null:b.receiver)},
aD:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.kz(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aL(s,16)&8191)===10)switch(r){case 438:return u.$1(H.kM(H.n(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.lx(H.n(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.mw()
p=$.mx()
o=$.my()
n=$.mz()
m=$.mC()
l=$.mD()
k=$.mB()
$.mA()
j=$.mF()
i=$.mE()
h=q.ad(t)
if(h!=null)return u.$1(H.kM(H.J(t),h))
else{h=p.ad(t)
if(h!=null){h.method="call"
return u.$1(H.kM(H.J(t),h))}else{h=o.ad(t)
if(h==null){h=n.ad(t)
if(h==null){h=m.ad(t)
if(h==null){h=l.ad(t)
if(h==null){h=k.ad(t)
if(h==null){h=n.ad(t)
if(h==null){h=j.ad(t)
if(h==null){h=i.ad(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.lx(H.J(t),h))}}return u.$1(new H.iz(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dP()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aT(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dP()
return a},
c8:function(a){var u
if(a==null)return new H.eG(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eG(a)},
op:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.l(0,a[t],a[s])}return b},
ox:function(a,b,c,d,e,f){H.f(a,"$ikI")
switch(H.ae(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
c4:function(a,b){var u
H.ae(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ox)
a.$identity=u
return u},
mW:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.V(d).$ib){u.$reflectionInfo=d
s=H.nr(u).r}else s=d
r=e?Object.create(new H.hU().constructor.prototype):Object.create(new H.cc(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aU
if(typeof p!=="number")return p.n()
$.aU=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.lm(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.ot,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.lk:H.kE
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.lm(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
mT:function(a,b,c,d){var u=H.kE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lm:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mV(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mT(t,!r,u,b)
if(t===0){r=$.aU
if(typeof r!=="number")return r.n()
$.aU=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cd
if(q==null){q=H.fi("self")
$.cd=q}return new Function(r+H.n(q)+";return "+p+"."+H.n(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aU
if(typeof r!=="number")return r.n()
$.aU=r+1
o+=r
r="return function("+o+"){return this."
q=$.cd
if(q==null){q=H.fi("self")
$.cd=q}return new Function(r+H.n(q)+"."+H.n(u)+"("+o+");}")()},
mU:function(a,b,c,d){var u,t
u=H.kE
t=H.lk
switch(b?-1:a){case 0:throw H.c(H.nv("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mV:function(a,b){var u,t,s,r,q,p,o,n
u=$.cd
if(u==null){u=H.fi("self")
$.cd=u}t=$.lj
if(t==null){t=H.fi("receiver")
$.lj=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.mU(r,!p,s,b)
if(r===1){u="return function(){return this."+H.n(u)+"."+H.n(s)+"(this."+H.n(t)+");"
t=$.aU
if(typeof t!=="number")return t.n()
$.aU=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.n(u)+"."+H.n(s)+"(this."+H.n(t)+", "+n+");"
t=$.aU
if(typeof t!=="number")return t.n()
$.aU=t+1
return new Function(u+t+"}")()},
l3:function(a,b,c,d,e,f,g){return H.mW(a,b,H.ae(c),d,!!e,!!f,g)},
kE:function(a){return a.a},
lk:function(a){return a.c},
fi:function(a){var u,t,s,r,q
u=new H.cc("self","target","receiver","name")
t=J.fP(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
J:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aQ(a,"String"))},
on:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aQ(a,"double"))},
oD:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aQ(a,"num"))},
mh:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aQ(a,"bool"))},
ae:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aQ(a,"int"))},
mq:function(a,b){throw H.c(H.aQ(a,H.ca(H.J(b).substring(2))))},
oF:function(a,b){throw H.c(H.mS(a,H.ca(H.J(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.mq(a,b)},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.oF(a,b)},
k9:function(a){if(a==null)return a
if(!!J.V(a).$ib)return a
throw H.c(H.aQ(a,"List<dynamic>"))},
mn:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.mq(a,b)},
mj:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ae(u)]
else return a.$S()}return},
f3:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.mj(J.V(a))
if(u==null)return!1
return H.m7(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.kZ)return a
$.kZ=!0
try{if(H.f3(a,b))return a
u=H.ku(b)
t=H.aQ(a,u)
throw H.c(t)}finally{$.kZ=!1}},
l4:function(a,b){if(a!=null&&!H.l2(a,b))H.r(H.aQ(a,H.ku(b)))
return a},
aQ:function(a,b){return new H.im("TypeError: "+P.fD(a)+": type '"+H.mc(a)+"' is not a subtype of type '"+b+"'")},
mS:function(a,b){return new H.fj("CastError: "+P.fD(a)+": type '"+H.mc(a)+"' is not a subtype of type '"+b+"'")},
mc:function(a){var u,t
u=J.V(a)
if(!!u.$ice){t=H.mj(u)
if(t!=null)return H.ku(t)
return"Closure"}return H.bW(a)},
oK:function(a){throw H.c(new P.ft(H.J(a)))},
nv:function(a){return new H.hH(a)},
mk:function(a){return v.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
bF:function(a){if(a==null)return
return a.$ti},
ps:function(a,b,c){return H.c9(a["$a"+H.n(c)],H.bF(b))},
bs:function(a,b,c,d){var u
H.J(c)
H.ae(d)
u=H.c9(a["$a"+H.n(c)],H.bF(b))
return u==null?null:u[d]},
aC:function(a,b,c){var u
H.J(b)
H.ae(c)
u=H.c9(a["$a"+H.n(b)],H.bF(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.ae(b)
u=H.bF(a)
return u==null?null:u[b]},
ku:function(a){return H.bE(a,null)},
bE:function(a,b){var u,t
H.l(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ca(a[0].name)+H.l1(a,1,b)
if(typeof a=="function")return H.ca(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ae(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.n(b[t])}if('func' in a)return H.o4(a,b)
if('futureOr' in a)return"FutureOr<"+H.bE("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
o4:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.h]
H.l(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.e([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.d(b,m)
o=C.c.n(o,b[m])
l=t[p]
if(l!=null&&l!==P.M)o+=" extends "+H.bE(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bE(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bE(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bE(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.oo(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.J(u[g])
i=i+h+H.bE(d[c],b)+(" "+H.n(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
l1:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.am("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bE(p,c)}return"<"+u.i(0)+">"},
c9:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
d0:function(a,b,c,d){var u,t
H.J(b)
H.k9(c)
H.J(d)
if(a==null)return!1
u=H.bF(a)
t=J.V(a)
if(t[b]==null)return!1
return H.mf(H.c9(t[d],u),null,c,null)},
l:function(a,b,c,d){H.J(b)
H.k9(c)
H.J(d)
if(a==null)return a
if(H.d0(a,b,c,d))return a
throw H.c(H.aQ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ca(b.substring(2))+H.l1(c,0,null),v.mangledGlobalNames)))},
mf:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aB(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aB(a[t],b,c[t],d))return!1
return!0},
pq:function(a,b,c){return a.apply(b,H.c9(J.V(b)["$a"+H.n(c)],H.bF(b)))},
mm:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="M"||a.name==="D"||a===-1||a===-2||H.mm(u)}return!1},
l2:function(a,b){var u,t
if(a==null)return b==null||b.name==="M"||b.name==="D"||b===-1||b===-2||H.mm(b)
if(b==null||b===-1||b.name==="M"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.l2(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f3(a,b)}u=J.V(a).constructor
t=H.bF(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aB(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.l2(a,b))throw H.c(H.aQ(a,H.ku(b)))
return a},
aB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="M"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="M"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aB(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="D")return!0
if('func' in c)return H.m7(a,b,c,d)
if('func' in a)return c.name==="kI"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aB("type" in a?a.type:null,b,s,d)
else if(H.aB(a,b,s,d))return!0
else{if(!('$i'+"ck" in t.prototype))return!1
r=t.prototype["$a"+"ck"]
q=H.c9(r,u?a.slice(1):null)
return H.aB(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.mf(H.c9(m,u),b,p,d)},
m7:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aB(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aB(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aB(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aB(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.oC(h,b,g,d)},
oC:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aB(c[r],d,a[r],b))return!1}return!0},
pr:function(a,b,c){Object.defineProperty(a,H.J(b),{value:c,enumerable:false,writable:true,configurable:true})},
oA:function(a){var u,t,s,r,q,p
u=H.J($.ml.$1(a))
t=$.k_[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.k7[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.J($.me.$2(a,u))
if(u!=null){t=$.k_[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.k7[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.kt(s)
$.k_[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.k7[u]=s
return s}if(q==="-"){p=H.kt(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.mp(a,s)
if(q==="*")throw H.c(P.iy(u))
if(v.leafTags[u]===true){p=H.kt(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.mp(a,s)},
mp:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.l8(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kt:function(a){return J.l8(a,!1,null,!!a.$iH)},
oB:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kt(u)
else return J.l8(u,c,null,null)},
ov:function(){if(!0===$.l7)return
$.l7=!0
H.ow()},
ow:function(){var u,t,s,r,q,p,o,n
$.k_=Object.create(null)
$.k7=Object.create(null)
H.ou()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mr.$1(q)
if(p!=null){o=H.oB(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ou:function(){var u,t,s,r,q,p,o
u=C.U()
u=H.c3(C.R,H.c3(C.W,H.c3(C.A,H.c3(C.A,H.c3(C.V,H.c3(C.S,H.c3(C.T(C.B),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.ml=new H.k4(q)
$.me=new H.k5(p)
$.mr=new H.k6(o)},
c3:function(a,b){return a(b)||b},
n6:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a3("Illegal RegExp pattern ("+String(r)+")",a,null))},
oJ:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ms:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fn:function fn(){},
fo:function fo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hA:function hA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
ik:function ik(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hq:function hq(a,b){this.a=a
this.b=b},
fS:function fS(a,b,c){this.a=a
this.b=b
this.c=c},
iz:function iz(a){this.a=a},
kz:function kz(a){this.a=a},
eG:function eG(a){this.a=a
this.b=null},
ce:function ce(){},
i1:function i1(){},
hU:function hU(){},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
im:function im(a){this.a=a},
fj:function fj(a){this.a=a},
hH:function hH(a){this.a=a},
aH:function aH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fW:function fW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fX:function fX(a,b){this.a=a
this.$ti=b},
fY:function fY(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
fR:function fR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c1:function(a){return a},
ne:function(a){return new Int8Array(a)},
b9:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.c5(b,a))},
o2:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.om(a,b,c))
return b},
cq:function cq(){},
bz:function bz(){},
dD:function dD(){},
cr:function cr(){},
dE:function dE(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
dF:function dF(){},
cs:function cs(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
oo:function(a){return J.ls(a?Object.keys(a):[],null)},
oE:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l8:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
f4:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.l7==null){H.ov()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.iy("Return interceptor for "+H.n(t(a,u))))}r=a.constructor
q=r==null?null:r[$.la()]
if(q!=null)return q
q=H.oA(a)
if(q!=null)return q
if(typeof a=="function")return C.X
t=Object.getPrototypeOf(a)
if(t==null)return C.G
if(t===Object.prototype)return C.G
if(typeof r=="function"){Object.defineProperty(r,$.la(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
n5:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kD(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ab(a,0,4294967295,"length",null))
return J.ls(new Array(a),b)},
ls:function(a,b){return J.fP(H.e(a,[b]))},
fP:function(a){H.k9(a)
a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dq.prototype
return J.dp.prototype}if(typeof a=="string")return J.bh.prototype
if(a==null)return J.dr.prototype
if(typeof a=="boolean")return J.fQ.prototype
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.M)return a
return J.f4(a)},
oq:function(a){if(typeof a=="number")return J.by.prototype
if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.M)return a
return J.f4(a)},
c7:function(a){if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.M)return a
return J.f4(a)},
k0:function(a){if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.M)return a
return J.f4(a)},
or:function(a){if(typeof a=="number")return J.by.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bD.prototype
return a},
os:function(a){if(typeof a=="number")return J.by.prototype
if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bD.prototype
return a},
l5:function(a){if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bD.prototype
return a},
br:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.M)return a
return J.f4(a)},
mL:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.oq(a).n(a,b)},
Q:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).u(a,b)},
le:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.os(a).m(a,b)},
mM:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.or(a).p(a,b)},
lf:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oy(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c7(a).j(a,b)},
kA:function(a,b,c){return J.k0(a).l(a,b,c)},
mN:function(a,b){return J.l5(a).G(a,b)},
kB:function(a,b,c){return J.br(a).i9(a,b,c)},
mO:function(a,b,c,d){return J.br(a).j4(a,b,c,d)},
lg:function(a,b){return J.br(a).X(a,b)},
mP:function(a,b){return J.l5(a).Y(a,b)},
kC:function(a,b){return J.k0(a).K(a,b)},
mQ:function(a,b,c,d){return J.br(a).jB(a,b,c,d)},
lh:function(a,b){return J.k0(a).I(a,b)},
cb:function(a){return J.br(a).gcu(a)},
d5:function(a){return J.V(a).gJ(a)},
bH:function(a){return J.k0(a).gZ(a)},
aE:function(a){return J.c7(a).gk(a)},
mR:function(a,b){return J.br(a).kj(a,b)},
at:function(a){return J.V(a).i(a)},
a:function a(){},
fQ:function fQ(){},
dr:function dr(){},
ds:function ds(){},
hu:function hu(){},
bD:function bD(){},
bi:function bi(){},
aG:function aG(a){this.$ti=a},
kK:function kK(a){this.$ti=a},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
by:function by(){},
dq:function dq(){},
dp:function dp(){},
bh:function bh(){}},P={
nI:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.oc()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.c4(new P.j2(u),1)).observe(t,{childList:true})
return new P.j1(u,t,s)}else if(self.setImmediate!=null)return P.od()
return P.oe()},
nJ:function(a){self.scheduleImmediate(H.c4(new P.j3(H.m(a,{func:1,ret:-1})),0))},
nK:function(a){self.setImmediate(H.c4(new P.j4(H.m(a,{func:1,ret:-1})),0))},
nL:function(a){P.kQ(C.u,H.m(a,{func:1,ret:-1}))},
kQ:function(a,b){var u
H.m(b,{func:1,ret:-1})
u=C.f.a3(a.a,1000)
return P.nO(u<0?0:u,b)},
lL:function(a,b){var u
H.m(b,{func:1,ret:-1,args:[P.b4]})
u=C.f.a3(a.a,1000)
return P.nP(u<0?0:u,b)},
nO:function(a,b){var u=new P.eN(!0)
u.fs(a,b)
return u},
nP:function(a,b){var u=new P.eN(!1)
u.ft(a,b)
return u},
nM:function(a,b){var u,t,s
b.a=1
try{a.eL(new P.jd(b),new P.je(b),null)}catch(s){u=H.aD(s)
t=H.c8(s)
P.oG(new P.jf(b,u,t))}},
lX:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaA")
if(u>=4){t=b.ca()
b.a=a.a
b.c=a.c
P.cM(b,t)}else{t=H.f(b.c,"$ib8")
b.a=2
b.c=a
a.dG(t)}},
cM:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.f(t.c,"$iai")
t=t.b
p=q.a
o=q.b
t.toString
P.jT(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cM(u.a,b)}t=u.a
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
if(k){H.f(m,"$iai")
t=t.b
p=m.a
o=m.b
t.toString
P.jT(null,null,t,p,o)
return}j=$.Y
if(j!=l)$.Y=l
else j=null
t=b.c
if(t===8)new P.jj(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.ji(s,b,m).$0()}else if((t&2)!==0)new P.jh(u,s,b).$0()
if(j!=null)$.Y=j
t=s.b
if(!!J.V(t).$ick){if(t.a>=4){i=H.f(o.c,"$ib8")
o.c=null
b=o.bi(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.lX(t,o)
return}}h=b.b
i=H.f(h.c,"$ib8")
h.c=null
b=h.bi(i)
t=s.a
p=s.b
if(!t){H.A(p,H.v(h,0))
h.a=4
h.c=p}else{H.f(p,"$iai")
h.a=8
h.c=p}u.a=h
t=h}},
o7:function(a,b){if(H.f3(a,{func:1,args:[P.M,P.ar]}))return H.m(a,{func:1,ret:null,args:[P.M,P.ar]})
if(H.f3(a,{func:1,args:[P.M]}))return H.m(a,{func:1,ret:null,args:[P.M]})
throw H.c(P.kD(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
o6:function(){var u,t
for(;u=$.c2,u!=null;){$.d_=null
t=u.b
$.c2=t
if(t==null)$.cZ=null
u.a.$0()}},
ob:function(){$.l_=!0
try{P.o6()}finally{$.d_=null
$.l_=!1
if($.c2!=null)$.ld().$1(P.mg())}},
mb:function(a){var u=new P.ea(H.m(a,{func:1,ret:-1}))
if($.c2==null){$.cZ=u
$.c2=u
if(!$.l_)$.ld().$1(P.mg())}else{$.cZ.b=u
$.cZ=u}},
oa:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
u=$.c2
if(u==null){P.mb(a)
$.d_=$.cZ
return}t=new P.ea(a)
s=$.d_
if(s==null){t.b=u
$.d_=t
$.c2=t}else{t.b=s.b
s.b=t
$.d_=t
if(t.b==null)$.cZ=t}},
oG:function(a){var u,t
u={func:1,ret:-1}
H.m(a,u)
t=$.Y
if(C.k===t){P.jV(null,null,C.k,a)
return}t.toString
P.jV(null,null,t,H.m(t.co(a),u))},
lK:function(a,b){var u,t
u={func:1,ret:-1}
H.m(b,u)
t=$.Y
if(t===C.k){t.toString
return P.kQ(a,b)}return P.kQ(a,H.m(t.co(b),u))},
nz:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.b4]}
H.m(b,u)
t=$.Y
if(t===C.k){t.toString
return P.lL(a,b)}s=t.dR(b,P.b4)
$.Y.toString
return P.lL(a,H.m(s,u))},
jT:function(a,b,c,d,e){var u={}
u.a=d
P.oa(new P.jU(u,e))},
m8:function(a,b,c,d,e){var u,t
H.m(d,{func:1,ret:e})
t=$.Y
if(t===c)return d.$0()
$.Y=c
u=t
try{t=d.$0()
return t}finally{$.Y=u}},
m9:function(a,b,c,d,e,f,g){var u,t
H.m(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
o8:function(a,b,c,d,e,f,g,h,i){var u,t
H.m(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.Y
if(t===c)return d.$2(e,f)
$.Y=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Y=u}},
jV:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.co(d):c.ja(d,-1)
P.mb(d)},
j2:function j2(a){this.a=a},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
eN:function eN(a){this.a=a
this.b=null
this.c=0},
jC:function jC(a,b){this.a=a
this.b=b},
jB:function jB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b8:function b8(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aA:function aA(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jc:function jc(a,b){this.a=a
this.b=b},
jg:function jg(a,b){this.a=a
this.b=b},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jk:function jk(a){this.a=a},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
ea:function ea(a){this.a=a
this.b=null},
hX:function hX(){},
hZ:function hZ(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
cy:function cy(){},
hY:function hY(){},
b4:function b4(){},
ai:function ai(a,b){this.a=a
this.b=b},
jM:function jM(){},
jU:function jU(a,b){this.a=a
this.b=b},
jr:function jr(){},
jt:function jt(a,b,c){this.a=a
this.b=b
this.c=c},
js:function js(a,b){this.a=a
this.b=b},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
n8:function(a,b,c,d,e){return new H.aH([d,e])},
lt:function(a,b){return new H.aH([a,b])},
n9:function(a){return H.op(a,new H.aH([null,null]))},
na:function(a,b,c,d){return new P.jo([d])},
m_:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lZ:function(a,b,c){var u=new P.jp(a,b,[c])
u.c=a.e
return u},
n3:function(a,b,c){var u,t
if(P.l0(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.e([],[P.h])
t=$.d4()
C.a.h(t,a)
try{P.o5(a,u)}finally{if(0>=t.length)return H.d(t,-1)
t.pop()}t=P.lI(b,H.mn(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
kJ:function(a,b,c){var u,t,s
if(P.l0(a))return b+"..."+c
u=new P.am(b)
t=$.d4()
C.a.h(t,a)
try{s=u
s.a=P.lI(s.a,a,", ")}finally{if(0>=t.length)return H.d(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
l0:function(a){var u,t
for(u=0;t=$.d4(),u<t.length;++u)if(a===t[u])return!0
return!1},
o5:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.h],"$ab")
u=a.gZ(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.E())return
r=H.n(u.gM(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.E()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gM(u);++s
if(!u.E()){if(s<=4){C.a.h(b,H.n(o))
return}q=H.n(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM(u);++s
for(;u.E();o=n,n=m){m=u.gM(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.n(o)
q=H.n(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
lu:function(a,b,c){var u=P.n8(null,null,null,b,c)
a.I(0,new P.fZ(u,b,c))
return u},
kO:function(a){var u,t
u={}
if(P.l0(a))return"{...}"
t=new P.am("")
try{C.a.h($.d4(),a)
t.a+="{"
u.a=!0
J.lh(a,new P.h3(u,t))
t.a+="}"}finally{u=$.d4()
if(0>=u.length)return H.d(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jo:function jo(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cN:function cN(a){this.a=a
this.c=this.b=null},
jp:function jp(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(){},
x:function x(){},
h2:function h2(){},
h3:function h3(a,b){this.a=a
this.b=b},
af:function af(){},
jD:function jD(){},
h4:function h4(){},
e4:function e4(a,b){this.a=a
this.$ti=b},
jv:function jv(){},
ep:function ep(){},
eT:function eT(){},
nD:function(a,b,c,d){H.l(b,"$ib",[P.p],"$ab")
if(b instanceof Uint8Array)return P.nE(!1,b,c,d)
return},
nE:function(a,b,c,d){var u,t,s
u=$.mG()
if(u==null)return
t=0===c
if(t&&!0)return P.kT(u,b)
s=b.length
d=P.bp(c,d,s,null,null,null)
if(t&&d===s)return P.kT(u,b)
return P.kT(u,b.subarray(c,d))},
kT:function(a,b){if(P.nG(b))return
return P.nH(a,b)},
nH:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aD(t)}return},
nG:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
nF:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aD(t)}return},
o9:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.p],"$ab")
for(u=J.c7(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bM()
if((s&127)!==s)return t-b}return c-b},
li:function(a,b,c,d,e,f){if(C.f.ak(f,4)!==0)throw H.c(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
ff:function ff(a){this.a=a},
fg:function fg(a){this.a=a},
bM:function bM(){},
bO:function bO(){},
fB:function fB(){},
iI:function iI(a){this.a=a},
iK:function iK(){},
jL:function jL(a){this.b=this.a=0
this.c=a},
iJ:function iJ(a){this.a=a},
jJ:function jJ(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
jK:function jK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d1:function(a,b,c){var u
H.m(b,{func:1,ret:P.p,args:[P.h]})
u=H.no(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a3(a,null,null))},
n0:function(a){if(a instanceof H.ce)return a.i(0)
return"Instance of '"+H.bW(a)+"'"},
nb:function(a,b,c,d){var u,t
H.A(b,d)
u=J.n5(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.l(u,t,b)
return H.l(u,"$ib",[d],"$ab")},
kN:function(a,b,c){var u,t,s
u=[c]
t=H.e([],u)
for(s=J.bH(a);s.E();)C.a.h(t,H.A(s.gM(s),c))
if(b)return t
return H.l(J.fP(t),"$ib",u,"$ab")},
dR:function(a,b,c){var u,t
u=P.p
H.l(a,"$ij",[u],"$aj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaG",[u],"$aaG")
t=a.length
c=P.bp(b,c,t,null,null,null)
return H.lD(b>0||c<t?C.a.f4(a,b,c):a)}if(!!J.V(a).$ics)return H.nq(a,b,P.bp(b,c,a.length,null,null,null))
return P.nx(a,b,c)},
nx:function(a,b,c){var u,t,s,r
H.l(a,"$ij",[P.p],"$aj")
if(b<0)throw H.c(P.ab(b,0,J.aE(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.ab(c,b,J.aE(a),null,null))
t=J.bH(a)
for(s=0;s<b;++s)if(!t.E())throw H.c(P.ab(b,0,s,null,null))
r=[]
if(u)for(;t.E();)r.push(t.gM(t))
else for(s=b;s<c;++s){if(!t.E())throw H.c(P.ab(c,b,s,null,null))
r.push(t.gM(t))}return H.lD(r)},
nt:function(a,b,c){return new H.fR(a,H.n6(a,!1,!0,!1))},
lI:function(a,b,c){var u=J.bH(b)
if(!u.E())return a
if(c.length===0){do a+=H.n(u.gM(u))
while(u.E())}else{a+=H.n(u.gM(u))
for(;u.E();)a=a+c+H.n(u.gM(u))}return a},
iD:function(){var u=H.ng()
if(u!=null)return P.nC(u,0,null)
throw H.c(P.E("'Uri.base' is not supported"))},
jI:function(a,b,c,d){var u,t,s,r,q,p
H.l(a,"$ib",[P.p],"$ab")
if(c===C.m){u=$.mJ().b
if(typeof b!=="string")H.r(H.ah(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.aC(c,"bM",0))
t=c.gjA().cv(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dJ(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
mY:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mZ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
df:function(a){if(a>=10)return""+a
return"0"+a},
lo:function(a,b,c,d,e,f){return new P.aX(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n0(a)},
d6:function(a){return new P.aT(!1,null,null,a)},
kD:function(a,b,c){return new P.aT(!0,a,b,c)},
dL:function(a,b,c){return new P.bX(null,null,!0,a,b,"Value not in range")},
ab:function(a,b,c,d,e){return new P.bX(b,c,!0,a,d,"Invalid value")},
bp:function(a,b,c,d,e,f){if(typeof a!=="number")return H.t(a)
if(0>a||a>c)throw H.c(P.ab(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.ab(b,a,c,"end",f))
return b}return c},
X:function(a,b,c,d,e){var u=H.ae(e==null?J.aE(b):e)
return new P.fO(b,u,!0,a,c,"Index out of range")},
E:function(a){return new P.iA(a)},
iy:function(a){return new P.ix(a)},
bu:function(a){return new P.fm(a)},
w:function(a){return new P.ei(a)},
a3:function(a,b,c){return new P.fM(a,b,c)},
nc:function(a,b,c,d){var u,t
H.m(b,{func:1,ret:d,args:[P.p]})
u=H.e([],[d])
C.a.sk(u,a)
for(t=0;t<a;++t)C.a.l(u,t,b.$1(t))
return u},
as:function(a){H.oE(a)},
nC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.G(a,b+4)^58)*3|C.c.G(a,b)^100|C.c.G(a,b+1)^97|C.c.G(a,b+2)^116|C.c.G(a,b+3)^97)>>>0
if(t===0)return P.lN(b>0||c<c?C.c.t(a,b,c):a,5,null).geQ()
else if(t===32)return P.lN(C.c.t(a,u,c),0,null).geQ()}s=new Array(8)
s.fixed$length=Array
r=H.e(s,[P.p])
C.a.l(r,0,0)
s=b-1
C.a.l(r,1,s)
C.a.l(r,2,s)
C.a.l(r,7,s)
C.a.l(r,3,b)
C.a.l(r,4,b)
C.a.l(r,5,c)
C.a.l(r,6,c)
if(P.ma(a,b,c,0,r)>=14)C.a.l(r,7,c)
q=r[1]
if(typeof q!=="number")return q.kG()
if(q>=b)if(P.ma(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.n()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.V()
if(typeof m!=="number")return H.t(m)
if(l<m)m=l
if(typeof n!=="number")return n.V()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.V()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.V()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.aa(a,"..",n)))i=m>n+2&&C.c.aa(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.aa(a,"file",b)){if(p<=b){if(!C.c.aa(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.t(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.aR(a,n,m,"/");++m;++l;++c}else{a=C.c.t(a,b,n)+"/"+C.c.t(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.aa(a,"http",b)){if(s&&o+3===n&&C.c.aa(a,"80",o+1))if(b===0&&!0){a=C.c.aR(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.t(a,b,o)+C.c.t(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.aa(a,"https",b)){if(s&&o+4===n&&C.c.aa(a,"443",o+1))if(b===0&&!0){a=C.c.aR(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.t(a,b,o)+C.c.t(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.t(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.jw(a,q,p,o,n,m,l,j)}return P.nQ(a,b,c,q,p,o,n,m,l,j)},
lP:function(a,b){var u=P.h
return C.a.jE(H.e(a.split("&"),[u]),P.lt(u,u),new P.iG(b),[P.C,P.h,P.h])},
nB:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.iC(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.Y(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.d1(C.c.t(a,q,r),null,null)
if(typeof n!=="number")return n.d2()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.d(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.d1(C.c.t(a,q,c),null,null)
if(typeof n!=="number")return n.d2()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.d(t,p)
t[p]=n
return t},
lO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.iE(a)
t=new P.iF(u,a)
if(a.length<2)u.$1("address is too short")
s=H.e([],[P.p])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.Y(a,r)
if(n===58){if(r===b){++r
if(C.c.Y(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaA(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.nB(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.d(j,g)
j[g]=0
d=g+1
if(d>=i)return H.d(j,d)
j[d]=0
g+=2}else{d=C.f.aL(f,8)
if(g<0||g>=i)return H.d(j,g)
j[g]=d
d=g+1
if(d>=i)return H.d(j,d)
j[d]=f&255
g+=2}}return j},
nQ:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.nX(a,b,d)
else{if(d===b)P.cW(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nY(a,u,e-1):""
s=P.nU(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.t(g)
q=r<g?P.nW(P.d1(C.c.t(a,r,g),new P.jE(a,f),null),j):null}else{t=""
s=null
q=null}p=P.nV(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.V()
o=h<i?P.kX(a,h+1,i,null):null
return new P.c0(j,t,s,q,p,o,i<c?P.nT(a,i+1,c):null)},
m0:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cW:function(a,b,c){throw H.c(P.a3(c,a,b))},
nW:function(a,b){if(a!=null&&a===P.m0(b))return
return a},
nU:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.Y(a,b)===91){if(typeof c!=="number")return c.p()
u=c-1
if(C.c.Y(a,u)!==93)P.cW(a,b,"Missing end `]` to match `[` in host")
P.lO(a,b+1,u)
return C.c.t(a,b,c).toLowerCase()}if(typeof c!=="number")return H.t(c)
t=b
for(;t<c;++t)if(C.c.Y(a,t)===58){P.lO(a,b,c)
return"["+a+"]"}return P.o_(a,b,c)},
o_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.t(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.Y(a,u)
if(q===37){p=P.m6(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.am("")
n=C.c.t(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.t(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.E,o)
o=(C.E[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.am("")
if(t<u){s.a+=C.c.t(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.p,o)
o=(C.p[o]&1<<(q&15))!==0}else o=!1
if(o)P.cW(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.am("")
n=C.c.t(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.m1(q)
u+=l
t=u}}}}if(s==null)return C.c.t(a,b,c)
if(t<c){n=C.c.t(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nX:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.m3(C.c.G(a,b)))P.cW(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.r,r)
r=(C.r[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cW(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.t(a,b,c)
return P.nR(t?a.toLowerCase():a)},
nR:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nY:function(a,b,c){return P.cX(a,b,c,C.Z,!1)},
nV:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cX(a,b,c,C.F,!0):C.o.kJ(d,new P.jF(),P.h).D(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a9(r,"/"))r="/"+r
return P.nZ(r,e,f)},
nZ:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a9(a,"/"))return P.o0(a,!u||c)
return P.o1(a)},
kX:function(a,b,c,d){var u,t
u={}
H.l(d,"$iC",[P.h,null],"$aC")
if(a!=null){if(d!=null)throw H.c(P.d6("Both query and queryParameters specified"))
return P.cX(a,b,c,C.q,!0)}if(d==null)return
t=new P.am("")
u.a=""
d.I(0,new P.jG(new P.jH(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
nT:function(a,b,c){return P.cX(a,b,c,C.q,!0)},
m6:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.Y(a,b+1)
s=C.c.Y(a,u)
r=H.k3(t)
q=H.k3(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aL(p,4)
if(u>=8)return H.d(C.t,u)
u=(C.t[u]&1<<(p&15))!==0}else u=!1
if(u)return H.dJ(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.t(a,b,b+3).toUpperCase()
return},
m1:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.e(u,[P.p])
C.a.l(t,0,37)
C.a.l(t,1,C.c.G("0123456789ABCDEF",a>>>4))
C.a.l(t,2,C.c.G("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.e(u,[P.p])
for(q=0;--r,r>=0;s=128){p=C.f.ip(a,6*r)&63|s
C.a.l(t,q,37)
C.a.l(t,q+1,C.c.G("0123456789ABCDEF",p>>>4))
C.a.l(t,q+2,C.c.G("0123456789ABCDEF",p&15))
q+=3}}return P.dR(t,0,null)},
cX:function(a,b,c,d,e){var u=P.m5(a,b,c,H.l(d,"$ib",[P.p],"$ab"),e)
return u==null?C.c.t(a,b,c):u},
m5:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.p],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.V()
if(typeof c!=="number")return H.t(c)
if(!(t<c))break
c$0:{q=C.c.Y(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.d(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.m6(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.d(C.p,p)
p=(C.p[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cW(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.Y(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.m1(q)}}if(r==null)r=new P.am("")
r.a+=C.c.t(a,s,t)
r.a+=H.n(o)
if(typeof n!=="number")return H.t(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.V()
if(s<c)r.a+=C.c.t(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
m4:function(a){if(C.c.a9(a,"."))return!0
return C.c.eq(a,"/.")!==-1},
o1:function(a){var u,t,s,r,q,p,o
if(!P.m4(a))return a
u=H.e([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.Q(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.D(u,"/")},
o0:function(a,b){var u,t,s,r,q,p
if(!P.m4(a))return!b?P.m2(a):a
u=H.e([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaA(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaA(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.d(u,0)
C.a.l(u,0,P.m2(u[0]))}return C.a.D(u,"/")},
m2:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.m3(J.mN(a,0)))for(t=1;t<u;++t){s=C.c.G(a,t)
if(s===58)return C.c.t(a,0,t)+"%3A"+C.c.aC(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.d(C.r,r)
r=(C.r[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
nS:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.d6("Invalid URL encoding"))}}return u},
kY:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.G(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.t(a,b,c)
else q=new H.a5(C.c.t(a,b,c))}else{q=H.e([],[P.p])
for(r=a.length,t=b;t<c;++t){s=C.c.G(a,t)
if(s>127)throw H.c(P.d6("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.d6("Truncated URI"))
C.a.h(q,P.nS(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.l(q,"$ib",[P.p],"$ab")
return new P.iJ(!1).cv(q)},
m3:function(a){var u=a|32
return 97<=u&&u<=122},
lN:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.e([b-1],[P.p])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.G(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a3("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a3("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.G(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaA(u)
if(q!==44||s!==o+7||!C.c.aa(a,"base64",o+1))throw H.c(P.a3("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.K.jT(0,a,n,t)
else{m=P.m5(a,n,t,C.q,!0)
if(m!=null)a=C.c.aR(a,n,t,m)}return new P.iB(a,u,c)},
o3:function(){var u,t,s,r,q
u=P.nc(22,new P.jQ(),!0,P.N)
t=new P.jP(u)
s=new P.jR()
r=new P.jS()
q=H.f(t.$2(0,225),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(14,225),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(15,225),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(1,225),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(2,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(3,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(4,229),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(5,229),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(6,231),"$iN")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(7,231),"$iN")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.f(t.$2(8,8),"$iN"),"]",5)
q=H.f(t.$2(9,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(16,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(17,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(10,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(18,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(19,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(11,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(12,236),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.f(t.$2(13,237),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.f(t.$2(20,245),"$iN"),"az",21)
q=H.f(t.$2(21,245),"$iN")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
ma:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.p],"$ab")
u=$.mK()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.d(u,d)
s=u[d]
r=C.c.G(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.d(s,r)
q=s[r]
d=q&31
C.a.l(e,q>>>5,t)}return d},
ac:function ac(){},
aj:function aj(a,b){this.a=a
this.b=b},
u:function u(){},
aX:function aX(a){this.a=a},
fy:function fy(){},
fz:function fz(){},
bw:function bw(){},
dG:function dG(){},
aT:function aT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bX:function bX(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fO:function fO(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iA:function iA(a){this.a=a},
ix:function ix(a){this.a=a},
dQ:function dQ(a){this.a=a},
fm:function fm(a){this.a=a},
ht:function ht(){},
dP:function dP(){},
ft:function ft(a){this.a=a},
ei:function ei(a){this.a=a},
fM:function fM(a,b,c){this.a=a
this.b=b
this.c=c},
p:function p(){},
j:function j(){},
aY:function aY(){},
b:function b(){},
C:function C(){},
D:function D(){},
a0:function a0(){},
M:function M(){},
ar:function ar(){},
h:function h(){},
am:function am(a){this.a=a},
iG:function iG(a){this.a=a},
iC:function iC(a){this.a=a},
iE:function iE(a){this.a=a},
iF:function iF(a,b){this.a=a
this.b=b},
c0:function c0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
jE:function jE(a,b){this.a=a
this.b=b},
jF:function jF(){},
jH:function jH(a,b){this.a=a
this.b=b},
jG:function jG(a){this.a=a},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
jQ:function jQ(){},
jP:function jP(a){this.a=a},
jR:function jR(){},
jS:function jS(){},
jw:function jw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
j8:function j8(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
oi:function(a){var u,t
u=J.V(a)
if(!!u.$ibg){t=u.gdV(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.eS(a.data,a.height,a.width)},
oh:function(a){if(a instanceof P.eS)return{data:a.a,height:a.b,width:a.c}
return a},
bq:function(a){var u,t,s,r,q
if(a==null)return
u=P.lt(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r){q=H.J(t[r])
u.l(0,q,a[q])}return u},
og:function(a,b){var u={}
a.I(0,new P.jW(u))
return u},
jy:function jy(){},
jz:function jz(a,b){this.a=a
this.b=b},
eS:function eS(a,b,c){this.a=a
this.b=b
this.c=c},
jW:function jW(a){this.a=a},
eK:function eK(a,b){this.a=a
this.b=b},
fI:function fI(a,b){this.a=a
this.b=b},
fJ:function fJ(){},
fK:function fK(){},
jn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nN:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jq:function jq(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b_:function b_(){},
fU:function fU(){},
b2:function b2(){},
hr:function hr(){},
hx:function hx(){},
i0:function i0(){},
q:function q(){},
b5:function b5(){},
ij:function ij(){},
en:function en(){},
eo:function eo(){},
ex:function ex(){},
ey:function ey(){},
eI:function eI(){},
eJ:function eJ(){},
eQ:function eQ(){},
eR:function eR(){},
N:function N(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(a){this.a=a},
fe:function fe(){},
bI:function bI(){},
hs:function hs(){},
eb:function eb(){},
d9:function d9(){},
dl:function dl(){},
dK:function dK(){},
bY:function bY(){},
dN:function dN(){},
dV:function dV(){},
e2:function e2(){},
hT:function hT(){},
eE:function eE(){},
eF:function eF(){}},W={
kF:function(a,b){var u=document.createElement("canvas")
return u},
n_:function(a){H.f(a,"$ii")
return"wheel"},
lq:function(a,b,c){var u=document.createElement("img")
if(b!=null)u.src=b
return u},
n2:function(a){var u,t,s
t=document.createElement("input")
u=H.f(t,"$icm")
try{u.type=a}catch(s){H.aD(s)}return u},
jm:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lY:function(a,b,c,d){var u,t
u=W.jm(W.jm(W.jm(W.jm(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a7:function(a,b,c,d,e){var u=W.md(new W.jb(c),W.o)
if(u!=null&&!0)J.mO(a,b,u,!1)
return new W.ja(a,b,u,!1,[e])},
md:function(a,b){var u
H.m(a,{func:1,ret:-1,args:[b]})
u=$.Y
if(u===C.k)return a
return u.dR(a,b)},
y:function y(){},
f6:function f6(){},
f8:function f8(){},
f9:function f9(){},
bJ:function bJ(){},
d8:function d8(){},
bK:function bK(){},
bL:function bL(){},
bt:function bt(){},
cf:function cf(){},
fp:function fp(){},
T:function T(){},
cg:function cg(){},
fq:function fq(){},
aV:function aV(){},
aW:function aW(){},
fr:function fr(){},
fs:function fs(){},
fu:function fu(){},
ch:function ch(){},
ci:function ci(){},
fv:function fv(){},
dg:function dg(){},
dh:function dh(){},
fw:function fw(){},
fx:function fx(){},
j6:function j6(a,b){this.a=a
this.b=b},
W:function W(){},
o:function o(){},
i:function i(){},
aw:function aw(){},
cj:function cj(){},
fH:function fH(){},
fL:function fL(){},
aF:function aF(){},
dm:function dm(){},
bR:function bR(){},
dn:function dn(){},
bg:function bg(){},
bS:function bS(){},
cm:function cm(){},
aZ:function aZ(){},
du:function du(){},
h0:function h0(){},
co:function co(){},
hd:function hd(){},
he:function he(){},
hf:function hf(a){this.a=a},
hg:function hg(){},
hh:function hh(a){this.a=a},
aI:function aI(){},
hi:function hi(){},
a4:function a4(){},
j5:function j5(a){this.a=a},
G:function G(){},
ct:function ct(){},
aJ:function aJ(){},
hv:function hv(){},
hF:function hF(){},
hG:function hG(a){this.a=a},
hI:function hI(){},
aK:function aK(){},
hR:function hR(){},
aL:function aL(){},
hS:function hS(){},
aM:function aM(){},
hV:function hV(){},
hW:function hW(a){this.a=a},
ax:function ax(){},
b3:function b3(){},
dS:function dS(){},
dT:function dT(){},
aN:function aN(){},
ay:function ay(){},
i2:function i2(){},
i3:function i3(){},
id:function id(){},
aO:function aO(){},
aP:function aP(){},
ih:function ih(){},
ii:function ii(){},
bC:function bC(){},
iH:function iH(){},
iX:function iX(){},
iY:function iY(){},
b7:function b7(){},
cL:function cL(){},
j7:function j7(){},
ed:function ed(){},
jl:function jl(){},
eu:function eu(){},
jx:function jx(){},
jA:function jA(){},
j9:function j9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kW:function kW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ja:function ja(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jb:function jb(a){this.a=a},
B:function B(){},
dk:function dk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ec:function ec(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
ev:function ev(){},
ew:function ew(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
cS:function cS(){},
cT:function cT(){},
eC:function eC(){},
eD:function eD(){},
eH:function eH(){},
eL:function eL(){},
eM:function eM(){},
cU:function cU(){},
cV:function cV(){},
eO:function eO(){},
eP:function eP(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){}},O={
kG:function(a){var u=new O.a1([a])
u.bS(a)
return u},
a1:function a1(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cn:function cn(){this.b=this.a=null},
dz:function dz(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h8:function h8(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dA:function dA(){},
h9:function h9(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b0:function b0(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hb:function hb(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hc:function hc(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c_:function c_(){}},E={
lp:function(a,b,c,d,e,f){var u=new E.ak()
u.a=d
u.b=!0
u.sfh(0,O.kG(E.ak))
u.y.bf(u.gjU(),u.gjX())
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
u.sd4(0,e)
u.seK(f)
u.sb6(c)
return u},
nu:function(a,b){var u=new E.hB(a,b)
u.fb(a,b)
return u},
ny:function(a,b,c,d,e){var u,t,s,r
u=J.V(a)
if(!!u.$ibK)return E.lJ(a,!0,!0,!0,!1)
t=W.kF(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcu(a).h(0,t)
r=E.lJ(t,!0,!0,!0,!1)
r.a=a
return r},
lJ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.dZ()
t=H.f(C.n.d0(a,"webgl2",P.n9(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibY")
if(t==null)H.r(P.w("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.nu(t,a)
s=new T.i9(t)
s.b=H.ae((t&&C.b).d1(t,3379))
s.c=H.ae(C.b.d1(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.e5(a)
r=new X.fT()
r.c=new X.au(!1,!1,!1)
r.si2(P.na(null,null,null,P.p))
s.b=r
r=new X.hj(s)
r.f=0
r.r=V.bB()
r.x=V.bB()
r.Q=1
r.ch=1
s.c=r
r=new X.h1(s)
r.r=0
r.x=V.bB()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.ig(s)
r.e=0
r.f=V.bB()
r.r=V.bB()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sfO(H.e([],[[P.cy,P.M]]))
r=s.z
q=document
p=W.a4
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.a7(q,"contextmenu",H.m(s.ghr(),o),!1,p))
r=s.z
n=W.o
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.a7(a,"focus",H.m(s.ghx(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.a7(a,"blur",H.m(s.ghj(),m),!1,n))
r=s.z
l=W.aZ
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.a7(q,"keyup",H.m(s.ghB(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.a7(q,"keydown",H.m(s.ghz(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.a7(a,"mousedown",H.m(s.ghF(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a7(a,"mouseup",H.m(s.ghJ(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a7(a,"mousemove",H.m(s.ghH(),o),!1,p))
l=s.z
k=W.b7;(l&&C.a).h(l,W.a7(a,H.J(W.n_(a)),H.m(s.ghL(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.a7(q,"mousemove",H.m(s.ght(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.a7(q,"mouseup",H.m(s.ghv(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.a7(q,"pointerlockchange",H.m(s.ghN(),m),!1,n))
n=s.z
m=W.aP
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.a7(a,"touchstart",H.m(s.gi_(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a7(a,"touchend",H.m(s.ghW(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a7(a,"touchmove",H.m(s.ghY(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.aj(Date.now(),!1)
u.cy=0
u.dJ()
return u},
fh:function fh(){},
ak:function ak(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hB:function hB(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
dZ:function dZ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ic:function ic(a){this.a=a}},Z={
kV:function(a,b,c){var u
H.l(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
C.b.an(a,b,u)
C.b.dT(a,b,new Int16Array(H.c1(c)),35044)
C.b.an(a,b,null)
return new Z.e9(b,u)},
az:function(a){return new Z.aR(a)},
e9:function e9(a,b){this.a=a
this.b=b},
da:function da(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iZ:function iZ(a){this.a=a},
db:function db(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a){this.a=a}},D={
R:function(){var u=new D.bP()
u.sag(null)
u.saW(null)
u.c=null
u.d=0
return u},
fk:function fk(){},
bP:function bP(){var _=this
_.d=_.c=_.b=_.a=null},
fE:function fE(a){this.a=a},
fF:function fF(a){this.a=a},
z:function z(a){this.a=a
this.b=null},
bT:function bT(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bU:function bU(a,b,c,d){var _=this
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
bv:function bv(){var _=this
_.d=_.c=_.b=_.a=null},
a6:function a6(){},
dv:function dv(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dI:function dI(){},
dO:function dO(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){}},X={dc:function dc(a,b){this.a=a
this.b=b},dt:function dt(a,b){this.a=a
this.b=b},fT:function fT(){var _=this
_.d=_.c=_.b=_.a=null},dx:function dx(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},h1:function h1(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},au:function au(a,b,c){this.a=a
this.b=b
this.c=c},bl:function bl(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hj:function hj(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cp:function cp(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},hw:function hw(){},e0:function e0(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},ig:function ig(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},e5:function e5(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
n1:function(a,b,c,d,e,f,g){var u,t
u=new X.fN()
t=new V.bf(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.lG
if(t==null){t=V.lF(0,0,1,1)
$.lG=t}u.r=t
return u},
dd:function dd(){},
fN:function fN(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dH:function dH(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dU:function dU(){}},V={
oM:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.ak(a-b,u)
return(a<0?a+u:a)+b},
U:function(a,b,c){if(a==null)return C.c.ae("null",c)
return C.c.ae(C.e.eM(Math.abs(a-0)<$.P().a?0:a,b),c+b+1)},
c6:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.u],"$ab")
u=H.e([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.F)(a),++r){q=V.U(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.l(u,p,C.c.ae(u[p],s))}return u},
l9:function(a,b){return C.e.ks(Math.pow(b,C.Q.b2(Math.log(H.of(a))/Math.log(b))))},
dC:function(){var u=$.lw
if(u==null){u=V.b1(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.lw=u}return u},
b1:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lv:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.w(0,Math.sqrt(c.F(c)))
t=b.ay(u)
s=t.w(0,Math.sqrt(t.F(t)))
r=u.ay(s)
q=new V.I(a.a,a.b,a.c)
p=s.S(0).F(q)
o=r.S(0).F(q)
n=u.S(0).F(q)
return V.b1(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bB:function(){var u=$.lA
if(u==null){u=new V.ad(0,0)
$.lA=u}return u},
lB:function(){var u=$.cu
if(u==null){u=new V.a_(0,0,0)
$.cu=u}return u},
lF:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dM(a,b,c,d)},
cK:function(){var u=$.lU
if(u==null){u=new V.I(0,0,0)
$.lU=u}return u},
lV:function(){var u=$.lT
if(u==null){u=new V.I(0,1,0)
$.lT=u}return u},
lW:function(){var u=$.iL
if(u==null){u=new V.I(0,0,1)
$.iL=u}return u},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fC:function fC(a){this.a=a},
dB:function dB(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
al:function al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ad:function ad(a,b){this.a=a
this.b=b},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
bo:function bo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dM:function dM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
S:function S(a,b){this.a=a
this.b=b},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
ag:function(a){var u=new V.hJ()
u.fc(a)
return u},
f7:function f7(){},
bk:function bk(){},
dy:function dy(){},
bn:function bn(){this.a=null},
hJ:function hJ(){this.a=null},
cx:function cx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(a,b){this.a=a
this.b=b
this.c=null},
ie:function ie(){this.c=this.b=this.a=null},
cB:function cB(a){this.b=a
this.a=this.c=null},
oH:function(a){P.nz(C.O,new V.kv(a))},
lE:function(a,b){var u,t
u=new V.hy(a,!0)
t=C.v.bN(document,a)
u.c=t
if(t==null)H.r("Failed to find "+a+" for RadioGroup")
return u},
nw:function(a,b){var u=new V.hN()
u.fe(a,!0)
return u},
kv:function kv(a){this.a=a},
hy:function hy(a,b){this.a=a
this.b=b
this.c=null},
hz:function hz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hN:function hN(){this.b=this.a=null},
hP:function hP(a){this.a=a},
hO:function hO(a){this.a=a},
i5:function i5(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=c},
i7:function i7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i6:function i6(){}},U={
kH:function(){var u=new U.fl()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
ln:function(a){var u=new U.de()
u.a=a
return u},
fl:function fl(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
de:function de(){this.b=this.a=null},
cl:function cl(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
aa:function aa(){},
e6:function e6(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e7:function e7(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={di:function di(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nd:function(a,b){var u,t
u=a.ai
t=new A.h7(b,u)
t.fd(b,u)
t.fa(a,b)
return t},
kR:function(a,b,c,d,e){var u=new A.ip(a,b,c,e)
u.f=d
u.siG(P.nb(d,0,!1,P.p))
return u},
d7:function d7(a,b,c){this.a=a
this.b=b
this.c=c},
fa:function fa(a){this.a=a},
h7:function h7(a,b){var _=this
_.bp=_.dZ=_.bo=_.ai=_.ap=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ee=_.cC=_.ed=_.bC=_.ec=_.eb=_.bB=_.bA=_.ea=_.e9=_.bz=_.by=_.bx=_.e8=_.e7=_.bw=_.e6=_.e5=_.bv=_.e4=_.e3=_.bu=_.bt=_.e2=_.e1=_.bs=_.br=_.e0=_.e_=_.bq=null
_.cH=_.ei=_.cG=_.eh=_.cF=_.eg=_.cE=_.ef=_.cD=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ha:function ha(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ap=b3
_.ai=b4
_.bo=b5},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function cG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cE:function cE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cH:function cH(a,b,c,d,e,f,g,h,i,j){var _=this
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
cF:function cF(a,b,c,d,e,f,g,h,i,j){var _=this
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
cI:function cI(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cw:function cw(){},
bN:function bN(a,b){this.a=a
this.b=b},
e1:function e1(){},
iv:function iv(a){this.a=a},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ir:function ir(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
is:function is(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iu:function iu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ip:function ip(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iq:function iq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
it:function it(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iw:function iw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cD:function cD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
mi:function(a,b,c,d){var u
H.m(c,{func:1,ret:-1,args:[F.ap,P.u,P.u]})
u=F.kP()
F.cY(u,b,c,d,a,1,0,0,1)
F.cY(u,b,c,d,a,0,1,0,3)
F.cY(u,b,c,d,a,0,0,1,2)
F.cY(u,b,c,d,a,-1,0,0,0)
F.cY(u,b,c,d,a,0,-1,0,0)
F.cY(u,b,c,d,a,0,0,-1,3)
u.a5()
return u},
jO:function(a){var u,t
u=a.a>0?1:0
if(a.b>0)u+=2
t=a.c
if(typeof t!=="number")return t.d2()
return(t>0?u+4:u)*2},
cY:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.m(c,{func:1,ret:-1,args:[F.ap,P.u,P.u]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.I(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.I(o+a3,n+a1,m+a2)
u.b=l
k=new V.I(o-a3,n-a1,m-a2)
u.c=k
j=new V.I(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.jO(t)
f=F.jO(u.b)
e=F.f5(d,a0,new F.jN(u,F.jO(u.c),F.jO(u.d),f,g,c),b)
if(e!=null)a.bE(e)},
oj:function(a,b,c,d,e,f){return F.ok(!1,!1,d,new F.jX(a,f),e)},
ok:function(a,b,c,d,e){var u
H.m(d,{func:1,ret:P.u,args:[P.u,P.u]})
if(e<3)return
if(c<1)return
u=F.f5(c,e,new F.jZ(d),null)
if(u==null)return
u.a5()
u.bk()
return u},
oz:function(a,b){var u=F.f5(a,b,new F.k8(),null)
u.d.bG()
u.a5()
u.bk()
return u},
oI:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.kw()
t=F.mi(a,null,new F.kx(u,c),d)
t.bk()
return t},
oL:function(a,b,c,d){return F.ol(c,a,d,b,new F.ky())},
ol:function(a,b,c,d,e){var u=F.f5(a,b,new F.jY(H.m(e,{func:1,ret:V.a_,args:[P.u]}),d,b,c),null)
if(u==null)return
u.a5()
u.bk()
return u},
l6:function(a,b,c){var u={}
u.a=b
u.a=new F.k1()
return F.f5(c,a,new F.k2(u),null)},
f5:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,{func:1,ret:-1,args:[F.ap,P.u,P.u]})
if(a<1)return
if(b<1)return
u=F.kP()
t=H.e([],[F.ap])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.kU(null,null,new V.bf(p,0,0,1),null,null,new V.ad(r,1),null,null,0)
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
o=F.kU(null,null,new V.bf(j,i,h,1),null,null,new V.ad(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cw(d))}}u.d.j5(a+1,b+1,t)
return u},
dj:function(a,b,c){var u,t
u=new F.a9()
t=a.a
if(t==null)H.r(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.w("May not create a face with vertices attached to different shapes."))
u.cg(a)
u.ci(b)
u.ij(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a2()
return u},
n7:function(a,b){var u,t
u=new F.bj()
t=a.a
if(t==null)H.r(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.r(P.w("May not create a line with vertices attached to different shapes."))
u.cg(a)
u.ci(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a2()
return u},
kP:function(){var u,t
u=new F.bZ()
t=new F.iM(u)
t.b=!1
t.siH(H.e([],[F.ap]))
u.a=t
t=new F.hM(u)
t.sc8(H.e([],[F.bA]))
u.b=t
t=new F.hL(u)
t.sh1(H.e([],[F.bj]))
u.c=t
t=new F.hK(u)
t.sfP(H.e([],[F.a9]))
u.d=t
u.e=null
return u},
kU:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ap()
t=new F.iU(u)
t.sc8(H.e([],[F.bA]))
u.b=t
t=new F.iQ(u)
s=[F.bj]
t.sh2(H.e([],s))
t.sh3(H.e([],s))
u.c=t
t=new F.iN(u)
s=[F.a9]
t.sfQ(H.e([],s))
t.sfR(H.e([],s))
t.sfS(H.e([],s))
u.d=t
h=$.lb()
u.e=0
t=$.bc()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aS().a)!==0?e:null
u.x=(s&$.bb().a)!==0?b:null
u.y=(s&$.bd().a)!==0?f:null
u.z=(s&$.be().a)!==0?g:null
u.Q=(s&$.lc().a)!==0?c:null
u.ch=(s&$.bG().a)!==0?i:0
u.cx=(s&$.ba().a)!==0?a:null
return u},
jN:function jN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jX:function jX(a,b){this.a=a
this.b=b},
jZ:function jZ(a){this.a=a},
k8:function k8(){},
kw:function kw(){},
kx:function kx(a,b){this.a=a
this.b=b},
ky:function ky(){},
jY:function jY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k1:function k1(){},
k2:function k2(a){this.a=a},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fG:function fG(){},
hQ:function hQ(){},
bj:function bj(){this.b=this.a=null},
fV:function fV(){},
io:function io(){},
bA:function bA(){this.a=null},
bZ:function bZ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hK:function hK(a){this.a=a
this.b=null},
hL:function hL(a){this.a=a
this.b=null},
hM:function hM(a){this.a=a
this.b=null},
ap:function ap(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iW:function iW(a){this.a=a},
iV:function iV(a){this.a=a},
iM:function iM(a){this.a=a
this.c=this.b=null},
iN:function iN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iO:function iO(a,b){this.a=a
this.b=b},
iP:function iP(a,b){this.a=a
this.b=b},
iQ:function iQ(a){this.a=a
this.c=this.b=null},
iS:function iS(){},
iR:function iR(){},
iT:function iT(){},
hp:function hp(){},
iU:function iU(a){this.a=a
this.b=null}},T={cz:function cz(){},i4:function i4(){},i8:function i8(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},i9:function i9(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},ia:function ia(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},ib:function ib(a,b,c){this.a=a
this.b=b
this.c=c}},K={
mo:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
u={}
t=V.nw("Test 037",!0)
s=W.kF(null,null)
s.className="pageLargeCanvas"
s.id="testCanvas"
C.l.X(t.a,s)
r=[P.h]
t.dP(H.e(["A test of applying a height map to an image. ","Some shapes will take a bit to calculate depending on quality of mapping."],r))
t.j3(H.e(["heightMaps","shapes","scalars"],r))
t.dP(H.e(["\xab[Back to Tests|../]"],r))
r=document
q=C.v.bN(r,"testCanvas")
if(q==null)H.r(P.w("Failed to find an element with the identifier, testCanvas."))
p=E.ny(q,!0,!0,!0,!1)
o=new O.dz()
o.sfC(O.kG(V.al))
o.e.bf(o.ghf(),o.ghh())
t=new O.b0(o,"emission")
t.c=C.d
t.f=new V.a2(0,0,0)
o.f=t
t=new O.b0(o,"ambient")
t.c=C.d
t.f=new V.a2(0,0,0)
o.r=t
t=new O.b0(o,"diffuse")
t.c=C.d
t.f=new V.a2(0,0,0)
o.x=t
t=new O.b0(o,"invDiffuse")
t.c=C.d
t.f=new V.a2(0,0,0)
o.y=t
t=new O.hc(o,"specular")
t.c=C.d
t.f=new V.a2(0,0,0)
t.ch=100
o.z=t
t=new O.h9(o,"bump")
t.c=C.d
o.Q=t
o.ch=null
t=new O.b0(o,"reflect")
t.c=C.d
t.f=new V.a2(0,0,0)
o.cx=t
t=new O.hb(o,"refract")
t.c=C.d
t.f=new V.a2(0,0,0)
t.ch=1
o.cy=t
t=new O.h8(o,"alpha")
t.c=C.d
t.f=1
o.db=t
t=new D.dv()
t.bS(D.a6)
t.sfL(H.e([],[D.bv]))
t.si1(H.e([],[D.dI]))
t.siq(H.e([],[D.dO]))
t.siD(H.e([],[D.dW]))
t.siE(H.e([],[D.dX]))
t.siF(H.e([],[D.dY]))
t.Q=null
t.ch=null
t.d3(t.ghd(),t.ghQ(),t.ghU())
o.dx=t
n=t.Q
if(n==null){n=D.R()
t.Q=n
t=n}else t=n
t.h(0,o.gib())
t=o.dx
n=t.ch
if(n==null){n=D.R()
t.ch=n
t=n}else t=n
t.h(0,o.ghl())
o.dy=null
t=o.dx
m=V.lV()
n=U.ln(V.lv(V.lB(),m,new V.I(1,1,-3)))
l=new V.a2(1,1,1)
k=new D.bv()
k.c=new V.a2(1,1,1)
k.a=V.lW()
j=k.b
k.b=n
n.gB().h(0,k.gfi())
n=new D.O("mover",j,k.b,k,[U.aa])
n.b=!0
k.at(n)
if(!k.c.u(0,l)){j=k.c
k.c=l
n=new D.O("color",j,l,k,[V.a2])
n.b=!0
k.at(n)}t.h(0,k)
t=o.r
t.sao(0,new V.a2(0,0,1))
t=o.x
t.sao(0,new V.a2(0,1,0))
t=o.z
t.sao(0,new V.a2(1,0,0))
t=o.z
if(t.c===C.d){t.c=C.j
t.bR()
t.cd(100)
n=t.a
n.a=null
n.ab(null)}t.cd(10)
i=E.lp(null,!0,null,"",null,null)
i.seK(o)
h=E.lp(null,!0,null,"",null,null)
h.y.h(0,i)
t=new U.cl()
t.bS(U.aa)
t.bf(t.ghb(),t.ghS())
t.e=null
t.f=V.dC()
t.r=0
n=p.r
k=new U.e7()
g=U.kH()
g.sd_(0,!0)
g.scN(6.283185307179586)
g.scP(0)
g.sa_(0,0)
g.scO(100)
g.sU(0)
g.scz(0.5)
k.b=g
f=k.gaE()
g.gB().h(0,f)
g=U.kH()
g.sd_(0,!0)
g.scN(6.283185307179586)
g.scP(0)
g.sa_(0,0)
g.scO(100)
g.sU(0)
g.scz(0.5)
k.c=g
g.gB().h(0,f)
k.d=null
k.e=!1
k.f=!1
k.r=!1
k.x=2.5
k.y=2.5
k.z=2
k.Q=4
k.cx=!1
k.ch=!1
k.cy=0
k.db=0
k.dx=null
k.dy=0
k.fr=null
k.fx=null
e=new X.au(!1,!1,!1)
j=k.d
k.d=e
g=[X.au]
f=new D.O("modifiers",j,e,k,g)
f.b=!0
k.R(f)
f=k.f
if(f!==!1){k.f=!1
f=new D.O("invertX",f,!1,k,[P.ac])
f.b=!0
k.R(f)}f=k.r
if(f!==!1){k.r=!1
f=new D.O("invertY",f,!1,k,[P.ac])
f.b=!0
k.R(f)}k.aZ(n)
t.h(0,k)
n=p.r
k=new U.e6()
f=U.kH()
f.sd_(0,!0)
f.scN(6.283185307179586)
f.scP(0)
f.sa_(0,0)
f.scO(100)
f.sU(0)
f.scz(0.2)
k.b=f
f.gB().h(0,k.gaE())
k.c=null
k.d=!1
k.e=2.5
k.f=2
k.r=4
k.y=!1
k.x=!1
k.z=0
k.Q=null
k.ch=0
k.cx=null
k.cy=null
e=new X.au(!0,!1,!1)
j=k.c
k.c=e
f=new D.O("modifiers",j,e,k,g)
f.b=!0
k.R(f)
k.aZ(n)
t.h(0,k)
n=p.r
k=new U.e8()
k.c=0.01
k.d=0
k.e=0
e=new X.au(!1,!1,!1)
k.b=e
g=new D.O("modifiers",null,e,k,g)
g.b=!0
k.R(g)
k.aZ(n)
t.h(0,k)
h.sb6(t)
t=new M.di()
t.sfF(0,O.kG(E.ak))
t.d.bf(t.ghn(),t.ghp())
t.e=null
t.f=null
t.r=null
t.x=null
d=X.n1(!0,!0,!1,null,2000,null,0)
c=new X.dH()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.sb6(null)
n=c.c
if(!(Math.abs(n-1.0471975511965976)<$.P().a)){c.c=1.0471975511965976
n=new D.O("fov",n,1.0471975511965976,c,[P.u])
n.b=!0
c.aH(n)}n=c.d
if(!(Math.abs(n-0.1)<$.P().a)){c.d=0.1
n=new D.O("near",n,0.1,c,[P.u])
n.b=!0
c.aH(n)}n=c.e
if(!(Math.abs(n-2000)<$.P().a)){c.e=2000
n=new D.O("far",n,2000,c,[P.u])
n.b=!0
c.aH(n)}n=t.a
if(n!==c){if(n!=null)n.gB().L(0,t.gaF())
j=t.a
t.a=c
c.gB().h(0,t.gaF())
n=new D.O("camera",j,t.a,t,[X.dd])
n.b=!0
t.aG(n)}n=t.b
if(n!==d){if(n!=null)n.gB().L(0,t.gaF())
j=t.b
t.b=d
d.gB().h(0,t.gaF())
n=new D.O("target",j,t.b,t,[X.dU])
n.b=!0
t.aG(n)}t.d.h(0,h)
t.a.sb6(U.ln(V.b1(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
n=p.d
if(n!==t){if(n!=null)n.gB().L(0,p.gd7())
p.d=t
t.gB().h(0,p.gd7())
p.d8()}u.a=null
u.b=""
u.c=1
b=new K.kb(u,p,i)
t=new V.i5("heightMaps",!0,new K.kc(u,b))
r=C.v.bN(r,"heightMaps")
t.c=r
if(r==null)H.r("Failed to find heightMaps for Texture2DGroup")
t.a1(0,"../resources/HeightMap1.png",!0)
t.h(0,"../resources/HeightMap2.png")
t.h(0,"../resources/HeightMap3.png")
t.h(0,"../resources/ScrewHeightMap.png")
a=new K.kd(u,b)
t=V.lE("shapes",!0)
t.a1(0,"Cuboid",new K.kl(a))
t.a1(0,"Cylinder",new K.km(a))
t.a1(0,"LatLonSphere",new K.kn(a))
t.a1(0,"Sphere",new K.ko(a))
t.a1(0,"Toroid",new K.kp(a))
t.a1(0,"Grid Small",new K.kq(a))
t.cj(0,"Grid Medium",new K.kr(a),!0)
t.a1(0,"Grid Large",new K.ks(a))
a0=new K.ke(u,b)
u=V.lE("scalars",!0)
u.a1(0,"0.1",new K.kf(a0))
u.a1(0,"0.2",new K.kg(a0))
u.a1(0,"0.4",new K.kh(a0))
u.cj(0,"0.6",new K.ki(a0),!0)
u.a1(0,"0.8",new K.kj(a0))
u.a1(0,"1.0",new K.kk(a0))
V.oH(p)},
kb:function kb(a,b,c){this.a=a
this.b=b
this.c=c},
ka:function ka(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kc:function kc(a,b){this.a=a
this.b=b},
kd:function kd(a,b){this.a=a
this.b=b},
kl:function kl(a){this.a=a},
km:function km(a){this.a=a},
kn:function kn(a){this.a=a},
ko:function ko(a){this.a=a},
kp:function kp(a){this.a=a},
kq:function kq(a){this.a=a},
kr:function kr(a){this.a=a},
ks:function ks(a){this.a=a},
ke:function ke(a,b){this.a=a
this.b=b},
kf:function kf(a){this.a=a},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kL.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gJ:function(a){return H.cv(a)},
i:function(a){return"Instance of '"+H.bW(a)+"'"}}
J.fQ.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iac:1}
J.dr.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iD:1}
J.ds.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.hu.prototype={}
J.bD.prototype={}
J.bi.prototype={
i:function(a){var u=a[$.mv()]
if(u==null)return this.f6(a)
return"JavaScript function for "+H.n(J.at(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ikI:1}
J.aG.prototype={
h:function(a,b){H.A(b,H.v(a,0))
if(!!a.fixed$length)H.r(P.E("add"))
a.push(b)},
kf:function(a,b){var u
if(!!a.fixed$length)H.r(P.E("removeAt"))
u=a.length
if(b>=u)throw H.c(P.dL(b,null,null))
return a.splice(b,1)[0]},
L:function(a,b){var u
if(!!a.fixed$length)H.r(P.E("remove"))
for(u=0;u<a.length;++u)if(J.Q(a[u],b)){a.splice(u,1)
return!0}return!1},
I:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bu(a))}},
D:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.l(u,t,H.n(a[t]))
return u.join(b)},
jM:function(a){return this.D(a,"")},
jE:function(a,b,c,d){var u,t,s
H.A(b,d)
H.m(c,{func:1,ret:d,args:[d,H.v(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bu(a))}return t},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
f4:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ab(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ab(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.v(a,0)])
return H.e(a.slice(b,c),[H.v(a,0)])},
gjD:function(a){if(a.length>0)return a[0]
throw H.c(H.lr())},
gaA:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.lr())},
f2:function(a,b,c,d,e){var u,t,s
u=H.v(a,0)
H.l(d,"$ij",[u],"$aj")
if(!!a.immutable$list)H.r(P.E("setRange"))
P.bp(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.l(d,"$ib",[u],"$ab")
u=J.c7(d)
if(e+t>u.gk(d))throw H.c(H.n4())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bg:function(a,b,c,d){return this.f2(a,b,c,d,0)},
aN:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Q(a[u],b))return!0
return!1},
i:function(a){return P.kJ(a,"[","]")},
gZ:function(a){return new J.aq(a,a.length,0,[H.v(a,0)])},
gJ:function(a){return H.cv(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.E("set length"))
if(b<0)throw H.c(P.ab(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.c5(a,b))
return a[b]},
l:function(a,b,c){H.A(c,H.v(a,0))
if(!!a.immutable$list)H.r(P.E("indexed set"))
if(b>=a.length||b<0)throw H.c(H.c5(a,b))
a[b]=c},
n:function(a,b){var u,t
u=[H.v(a,0)]
H.l(b,"$ib",u,"$ab")
t=C.f.n(a.length,b.gk(b))
u=H.e([],u)
this.sk(u,t)
this.bg(u,0,a.length,a)
this.bg(u,a.length,t,b)
return u},
$ij:1,
$ib:1}
J.kK.prototype={}
J.aq.prototype={
gM:function(a){return this.d},
E:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.F(u))
s=this.c
if(s>=t){this.sdq(null)
return!1}this.sdq(u[s]);++this.c
return!0},
sdq:function(a){this.d=H.A(a,H.v(this,0))},
$iaY:1}
J.by.prototype={
ks:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.E(""+a+".toInt()"))},
b2:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.E(""+a+".floor()"))},
aj:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.E(""+a+".round()"))},
eM:function(a,b){var u,t
if(b>20)throw H.c(P.ab(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bc:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ab(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.Y(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.r(P.E("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.m("0",r)},
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
n:function(a,b){if(typeof b!=="number")throw H.c(H.ah(b))
return a+b},
p:function(a,b){if(typeof b!=="number")throw H.c(H.ah(b))
return a-b},
m:function(a,b){if(typeof b!=="number")throw H.c(H.ah(b))
return a*b},
ak:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ah(b))
u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
f9:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dM(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.dM(a,b)},
dM:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.E("Result of truncating division is "+H.n(u)+": "+H.n(a)+" ~/ "+b))},
aL:function(a,b){var u
if(a>0)u=this.dL(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ip:function(a,b){if(b<0)throw H.c(H.ah(b))
return this.dL(a,b)},
dL:function(a,b){return b>31?0:a>>>b},
$iu:1,
$ia0:1}
J.dq.prototype={$ip:1}
J.dp.prototype={}
J.bh.prototype={
Y:function(a,b){if(b<0)throw H.c(H.c5(a,b))
if(b>=a.length)H.r(H.c5(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.c(H.c5(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.c(P.kD(b,null,null))
return a+b},
aR:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ah(b))
c=P.bp(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aa:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ah(c))
if(typeof c!=="number")return c.V()
if(c<0||c>a.length)throw H.c(P.ab(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a9:function(a,b){return this.aa(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ah(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.V()
if(b<0)throw H.c(P.dL(b,null,null))
if(b>c)throw H.c(P.dL(b,null,null))
if(c>a.length)throw H.c(P.dL(c,null,null))
return a.substring(b,c)},
aC:function(a,b){return this.t(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
k5:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.m(c,u)+a},
ae:function(a,b){return this.k5(a,b," ")},
er:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ab(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eq:function(a,b){return this.er(a,b,0)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ily:1,
$ih:1}
H.a5.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.c.Y(this.a,b)},
$acJ:function(){return[P.p]},
$ax:function(){return[P.p]},
$aj:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.fA.prototype={}
H.dw.prototype={
gM:function(a){return this.d},
E:function(){var u,t,s,r
u=this.a
t=J.c7(u)
s=t.gk(u)
if(this.b!==s)throw H.c(P.bu(u))
r=this.c
if(r>=s){this.saT(null)
return!1}this.saT(t.K(u,r));++this.c
return!0},
saT:function(a){this.d=H.A(a,H.v(this,0))},
$iaY:1}
H.h5.prototype={
gZ:function(a){return new H.h6(J.bH(this.a),this.b,this.$ti)},
gk:function(a){return J.aE(this.a)},
K:function(a,b){return this.b.$1(J.kC(this.a,b))},
$aj:function(a,b){return[b]}}
H.h6.prototype={
E:function(){var u=this.b
if(u.E()){this.saT(this.c.$1(u.gM(u)))
return!0}this.saT(null)
return!1},
gM:function(a){return this.a},
saT:function(a){this.a=H.A(a,H.v(this,1))},
$aaY:function(a,b){return[b]}}
H.j_.prototype={
gZ:function(a){return new H.j0(J.bH(this.a),this.b,this.$ti)}}
H.j0.prototype={
E:function(){var u,t
for(u=this.a,t=this.b;u.E();)if(t.$1(u.gM(u)))return!0
return!1},
gM:function(a){var u=this.a
return u.gM(u)}}
H.bQ.prototype={}
H.cJ.prototype={
l:function(a,b,c){H.A(c,H.aC(this,"cJ",0))
throw H.c(P.E("Cannot modify an unmodifiable list"))}}
H.e3.prototype={}
H.fn.prototype={
i:function(a){return P.kO(this)},
l:function(a,b,c){H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
return H.mX()},
$iC:1}
H.fo.prototype={
gk:function(a){return this.a},
bn:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bn(0,b))return
return this.dr(b)},
dr:function(a){return this.b[H.J(a)]},
I:function(a,b){var u,t,s,r,q
u=H.v(this,1)
H.m(b,{func:1,ret:-1,args:[H.v(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.A(this.dr(q),u))}}}
H.hA.prototype={}
H.ik.prototype={
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
H.hq.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.n(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fS.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.n(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.n(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.n(this.a)+")"}}
H.iz.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kz.prototype={
$1:function(a){if(!!J.V(a).$ibw)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:22}
H.eG.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iar:1}
H.ce.prototype={
i:function(a){return"Closure '"+H.bW(this).trim()+"'"},
$ikI:1,
gkF:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i1.prototype={}
H.hU.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ca(u)+"'"}}
H.cc.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cc))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ:function(a){var u,t
u=this.c
if(u==null)t=H.cv(this.a)
else t=typeof u!=="object"?J.d5(u):H.cv(u)
return(t^H.cv(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.n(this.d)+"' of "+("Instance of '"+H.bW(u)+"'")}}
H.im.prototype={
i:function(a){return this.a}}
H.fj.prototype={
i:function(a){return this.a}}
H.hH.prototype={
i:function(a){return"RuntimeError: "+H.n(this.a)}}
H.aH.prototype={
gk:function(a){return this.a},
gaq:function(a){return new H.fX(this,[H.v(this,0)])},
bn:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dl(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dl(t,b)}else return this.jJ(b)},
jJ:function(a){var u=this.d
if(u==null)return!1
return this.cK(this.bY(u,this.cJ(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bh(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bh(r,b)
s=t==null?null:t.b
return s}else return this.jK(b)},
jK:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bY(u,this.cJ(a))
s=this.cK(t,a)
if(s<0)return
return t[s].b},
l:function(a,b,c){var u,t
H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.c6()
this.b=u}this.dd(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.c6()
this.c=t}this.dd(t,b,c)}else this.jL(b,c)},
jL:function(a,b){var u,t,s,r
H.A(a,H.v(this,0))
H.A(b,H.v(this,1))
u=this.d
if(u==null){u=this.c6()
this.d=u}t=this.cJ(a)
s=this.bY(u,t)
if(s==null)this.ce(u,t,[this.c7(a,b)])
else{r=this.cK(s,a)
if(r>=0)s[r].b=b
else s.push(this.c7(a,b))}},
I:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.bu(this))
u=u.c}},
dd:function(a,b,c){var u
H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
u=this.bh(a,b)
if(u==null)this.ce(a,b,this.c7(b,c))
else u.b=c},
c7:function(a,b){var u,t
u=new H.fW(H.A(a,H.v(this,0)),H.A(b,H.v(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
cJ:function(a){return J.d5(a)&0x3ffffff},
cK:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1},
i:function(a){return P.kO(this)},
bh:function(a,b){return a[b]},
bY:function(a,b){return a[b]},
ce:function(a,b,c){a[b]=c},
fK:function(a,b){delete a[b]},
dl:function(a,b){return this.bh(a,b)!=null},
c6:function(){var u=Object.create(null)
this.ce(u,"<non-identifier-key>",u)
this.fK(u,"<non-identifier-key>")
return u}}
H.fW.prototype={}
H.fX.prototype={
gk:function(a){return this.a.a},
gZ:function(a){var u,t
u=this.a
t=new H.fY(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fY.prototype={
gM:function(a){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bu(u))
else{u=this.c
if(u==null){this.sdc(null)
return!1}else{this.sdc(u.a)
this.c=this.c.c
return!0}}},
sdc:function(a){this.d=H.A(a,H.v(this,0))},
$iaY:1}
H.k4.prototype={
$1:function(a){return this.a(a)},
$S:22}
H.k5.prototype={
$2:function(a,b){return this.a(a,b)},
$S:40}
H.k6.prototype={
$1:function(a){return this.a(H.J(a))},
$S:41}
H.fR.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ily:1,
$ins:1}
H.cq.prototype={$icq:1}
H.bz.prototype={$ibz:1,$inA:1}
H.dD.prototype={
gk:function(a){return a.length},
$iH:1,
$aH:function(){}}
H.cr.prototype={
j:function(a,b){H.b9(b,a,a.length)
return a[b]},
l:function(a,b,c){H.on(c)
H.b9(b,a,a.length)
a[b]=c},
$abQ:function(){return[P.u]},
$ax:function(){return[P.u]},
$ij:1,
$aj:function(){return[P.u]},
$ib:1,
$ab:function(){return[P.u]}}
H.dE.prototype={
l:function(a,b,c){H.ae(c)
H.b9(b,a,a.length)
a[b]=c},
$abQ:function(){return[P.p]},
$ax:function(){return[P.p]},
$ij:1,
$aj:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hk.prototype={
j:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.hl.prototype={
j:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.hm.prototype={
j:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.hn.prototype={
j:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.ho.prototype={
j:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.dF.prototype={
gk:function(a){return a.length},
j:function(a,b){H.b9(b,a,a.length)
return a[b]},
$ip6:1}
H.cs.prototype={
gk:function(a){return a.length},
j:function(a,b){H.b9(b,a,a.length)
return a[b]},
$ics:1,
$iN:1}
H.cO.prototype={}
H.cP.prototype={}
H.cQ.prototype={}
H.cR.prototype={}
P.j2.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:24}
P.j1.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:32}
P.j3.prototype={
$0:function(){this.a.$0()},
$S:0}
P.j4.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eN.prototype={
fs:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.c4(new P.jC(this,b),0),a)
else throw H.c(P.E("`setTimeout()` not found."))},
ft:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.c4(new P.jB(this,a,Date.now(),b),0),a)
else throw H.c(P.E("Periodic timer."))},
$ib4:1}
P.jC.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.jB.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.f9(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.b8.prototype={
jR:function(a){if(this.c!==6)return!0
return this.b.b.cX(H.m(this.d,{func:1,ret:P.ac,args:[P.M]}),a.a,P.ac,P.M)},
jI:function(a){var u,t,s,r
u=this.e
t=P.M
s={futureOr:1,type:H.v(this,1)}
r=this.b.b
if(H.f3(u,{func:1,args:[P.M,P.ar]}))return H.l4(r.km(u,a.a,a.b,null,t,P.ar),s)
else return H.l4(r.cX(H.m(u,{func:1,args:[P.M]}),a.a,null,t),s)}}
P.aA.prototype={
eL:function(a,b,c){var u,t,s,r
u=H.v(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.Y
if(t!==C.k){t.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.o7(b,t)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aA(0,$.Y,[c])
r=b==null?1:3
this.de(new P.b8(s,r,a,b,[u,c]))
return s},
kr:function(a,b){return this.eL(a,null,b)},
de:function(a){var u,t
u=this.a
if(u<=1){a.a=H.f(this.c,"$ib8")
this.c=a}else{if(u===2){t=H.f(this.c,"$iaA")
u=t.a
if(u<4){t.de(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.jV(null,null,u,H.m(new P.jc(this,a),{func:1,ret:-1}))}},
dG:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.f(this.c,"$ib8")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.f(this.c,"$iaA")
t=p.a
if(t<4){p.dG(a)
return}this.a=t
this.c=p.c}u.a=this.bi(a)
t=this.b
t.toString
P.jV(null,null,t,H.m(new P.jg(u,this),{func:1,ret:-1}))}},
ca:function(){var u=H.f(this.c,"$ib8")
this.c=null
return this.bi(u)},
bi:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dh:function(a){var u,t,s
u=H.v(this,0)
H.l4(a,{futureOr:1,type:u})
t=this.$ti
if(H.d0(a,"$ick",t,"$ack"))if(H.d0(a,"$iaA",t,null))P.lX(a,this)
else P.nM(a,this)
else{s=this.ca()
H.A(a,u)
this.a=4
this.c=a
P.cM(this,s)}},
di:function(a,b){var u
H.f(b,"$iar")
u=this.ca()
this.a=8
this.c=new P.ai(a,b)
P.cM(this,u)},
$ick:1}
P.jc.prototype={
$0:function(){P.cM(this.a,this.b)},
$S:0}
P.jg.prototype={
$0:function(){P.cM(this.b,this.a.a)},
$S:0}
P.jd.prototype={
$1:function(a){var u=this.a
u.a=0
u.dh(a)},
$S:24}
P.je.prototype={
$2:function(a,b){H.f(b,"$iar")
this.a.di(a,b)},
$1:function(a){return this.$2(a,null)},
$S:46}
P.jf.prototype={
$0:function(){this.a.di(this.b,this.c)},
$S:0}
P.jj.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eJ(H.m(r.d,{func:1}),null)}catch(q){t=H.aD(q)
s=H.c8(q)
if(this.d){r=H.f(this.a.a.c,"$iai").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.f(this.a.a.c,"$iai")
else p.b=new P.ai(t,s)
p.a=!0
return}if(!!J.V(u).$ick){if(u instanceof P.aA&&u.a>=4){if(u.a===8){r=this.b
r.b=H.f(u.c,"$iai")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.kr(new P.jk(o),null)
r.a=!1}},
$S:3}
P.jk.prototype={
$1:function(a){return this.a},
$S:52}
P.ji.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.v(s,0)
q=H.A(this.c,r)
p=H.v(s,1)
this.a.b=s.b.b.cX(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aD(o)
t=H.c8(o)
s=this.a
s.b=new P.ai(u,t)
s.a=!0}},
$S:3}
P.jh.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.f(this.a.a.c,"$iai")
r=this.c
if(r.jR(u)&&r.e!=null){q=this.b
q.b=r.jI(u)
q.a=!1}}catch(p){t=H.aD(p)
s=H.c8(p)
r=H.f(this.a.a.c,"$iai")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ai(t,s)
n.a=!0}},
$S:3}
P.ea.prototype={}
P.hX.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.aA(0,$.Y,[P.p])
u.a=0
s=H.v(this,0)
r=H.m(new P.hZ(u,this),{func:1,ret:-1,args:[s]})
H.m(new P.i_(u,t),{func:1,ret:-1})
W.a7(this.a,this.b,r,!1,s)
return t}}
P.hZ.prototype={
$1:function(a){H.A(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.v(this.b,0)]}}}
P.i_.prototype={
$0:function(){this.b.dh(this.a.a)},
$S:0}
P.cy.prototype={}
P.hY.prototype={}
P.b4.prototype={}
P.ai.prototype={
i:function(a){return H.n(this.a)},
$ibw:1}
P.jM.prototype={$ipk:1}
P.jU.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dG()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.jr.prototype={
kn:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
try{if(C.k===$.Y){a.$0()
return}P.m8(null,null,this,a,-1)}catch(s){u=H.aD(s)
t=H.c8(s)
P.jT(null,null,this,u,H.f(t,"$iar"))}},
ko:function(a,b,c){var u,t,s
H.m(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.k===$.Y){a.$1(b)
return}P.m9(null,null,this,a,b,-1,c)}catch(s){u=H.aD(s)
t=H.c8(s)
P.jT(null,null,this,u,H.f(t,"$iar"))}},
ja:function(a,b){return new P.jt(this,H.m(a,{func:1,ret:b}),b)},
co:function(a){return new P.js(this,H.m(a,{func:1,ret:-1}))},
dR:function(a,b){return new P.ju(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
eJ:function(a,b){H.m(a,{func:1,ret:b})
if($.Y===C.k)return a.$0()
return P.m8(null,null,this,a,b)},
cX:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.Y===C.k)return a.$1(b)
return P.m9(null,null,this,a,b,c,d)},
km:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.Y===C.k)return a.$2(b,c)
return P.o8(null,null,this,a,b,c,d,e,f)}}
P.jt.prototype={
$0:function(){return this.a.eJ(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.js.prototype={
$0:function(){return this.a.kn(this.b)},
$S:3}
P.ju.prototype={
$1:function(a){var u=this.c
return this.a.ko(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jo.prototype={
gZ:function(a){return P.lZ(this,this.r,H.v(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u
H.A(b,H.v(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.m_()
this.c=u}return this.fG(u,b)}else return this.fv(0,b)},
fv:function(a,b){var u,t,s
H.A(b,H.v(this,0))
u=this.d
if(u==null){u=P.m_()
this.d=u}t=this.dj(b)
s=u[t]
if(s==null)u[t]=[this.bU(b)]
else{if(this.ds(s,b)>=0)return!1
s.push(this.bU(b))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.i6(this.c,b)
else return this.i5(0,b)},
i5:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.fU(u,b)
s=this.ds(t,b)
if(s<0)return!1
this.dN(t.splice(s,1)[0])
return!0},
fG:function(a,b){H.A(b,H.v(this,0))
if(H.f(a[b],"$icN")!=null)return!1
a[b]=this.bU(b)
return!0},
i6:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icN")
if(u==null)return!1
this.dN(u)
delete a[b]
return!0},
dA:function(){this.r=1073741823&this.r+1},
bU:function(a){var u,t
u=new P.cN(H.A(a,H.v(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dA()
return u},
dN:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dA()},
dj:function(a){return J.d5(a)&1073741823},
fU:function(a,b){return a[this.dj(b)]},
ds:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cN.prototype={}
P.jp.prototype={
gM:function(a){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bu(u))
else{u=this.c
if(u==null){this.sdg(null)
return!1}else{this.sdg(H.A(u.a,H.v(this,0)))
this.c=this.c.b
return!0}}},
sdg:function(a){this.d=H.A(a,H.v(this,0))},
$iaY:1}
P.fZ.prototype={
$2:function(a,b){this.a.l(0,H.A(a,this.b),H.A(b,this.c))},
$S:7}
P.h_.prototype={$ij:1,$ib:1}
P.x.prototype={
gZ:function(a){return new H.dw(a,this.gk(a),0,[H.bs(this,a,"x",0)])},
K:function(a,b){return this.j(a,b)},
I:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.bs(this,a,"x",0)]})
u=this.gk(a)
for(t=0;t<u;++t){b.$1(this.j(a,t))
if(u!==this.gk(a))throw H.c(P.bu(a))}},
ku:function(a,b){var u,t
u=H.e([],[H.bs(this,a,"x",0)])
C.a.sk(u,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.l(u,t,this.j(a,t))
return u},
kt:function(a){return this.ku(a,!0)},
n:function(a,b){var u,t
u=[H.bs(this,a,"x",0)]
H.l(b,"$ib",u,"$ab")
t=H.e([],u)
C.a.sk(t,C.f.n(this.gk(a),b.gk(b)))
C.a.bg(t,0,this.gk(a),a)
C.a.bg(t,this.gk(a),t.length,b)
return t},
jB:function(a,b,c,d){var u
H.A(d,H.bs(this,a,"x",0))
P.bp(b,c,this.gk(a),null,null,null)
for(u=b;u<c;++u)this.l(a,u,d)},
i:function(a){return P.kJ(a,"[","]")}}
P.h2.prototype={}
P.h3.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.n(a)
u.a=t+": "
u.a+=H.n(b)},
$S:7}
P.af.prototype={
I:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.bs(this,a,"af",0),H.bs(this,a,"af",1)]})
for(u=J.bH(this.gaq(a));u.E();){t=u.gM(u)
b.$2(t,this.j(a,t))}},
gk:function(a){return J.aE(this.gaq(a))},
i:function(a){return P.kO(a)},
$iC:1}
P.jD.prototype={
l:function(a,b,c){H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
throw H.c(P.E("Cannot modify unmodifiable map"))}}
P.h4.prototype={
j:function(a,b){return J.lf(this.a,b)},
l:function(a,b,c){J.kA(this.a,H.A(b,H.v(this,0)),H.A(c,H.v(this,1)))},
I:function(a,b){J.lh(this.a,H.m(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]}))},
gk:function(a){return J.aE(this.a)},
i:function(a){return J.at(this.a)},
$iC:1}
P.e4.prototype={}
P.jv.prototype={
i:function(a){return P.kJ(this,"{","}")},
K:function(a,b){var u,t,s
if(b<0)H.r(P.ab(b,0,null,"index",null))
for(u=P.lZ(this,this.r,H.v(this,0)),t=0;u.E();){s=u.d
if(b===t)return s;++t}throw H.c(P.X(b,this,"index",null,t))},
$ij:1,
$ilH:1}
P.ep.prototype={}
P.eT.prototype={}
P.ff.prototype={
jT:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bp(c,a0,b.length,null,null,null)
u=$.mI()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.c.G(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.k3(C.c.G(b,n))
j=H.k3(C.c.G(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.c.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.am("")
g=r.a+=C.c.t(b,s,t)
r.a=g+H.dJ(m)
s=n
continue}}throw H.c(P.a3("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.c.t(b,s,a0)
f=g.length
if(q>=0)P.li(b,p,a0,q,o,f)
else{e=C.f.ak(f-1,4)+1
if(e===1)throw H.c(P.a3("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.aR(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.li(b,p,a0,q,o,d)
else{e=C.f.ak(d,4)
if(e===1)throw H.c(P.a3("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.c.aR(b,a0,a0,e===2?"==":"=")}return b},
$abM:function(){return[[P.b,P.p],P.h]}}
P.fg.prototype={
$abO:function(){return[[P.b,P.p],P.h]}}
P.bM.prototype={}
P.bO.prototype={}
P.fB.prototype={
$abM:function(){return[P.h,[P.b,P.p]]}}
P.iI.prototype={
gjA:function(){return C.N}}
P.iK.prototype={
b_:function(a,b,c){var u,t,s
c=P.bp(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jL(t)
if(s.fT(a,b,c)!==c)s.dO(J.mP(a,c-1),0)
return new Uint8Array(t.subarray(0,H.o2(0,s.b,t.length)))},
cv:function(a){return this.b_(a,0,null)},
$abO:function(){return[P.h,[P.b,P.p]]}}
P.jL.prototype={
dO:function(a,b){var u,t,s,r,q
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
fT:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.Y(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.G(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dO(r,C.c.G(a,p)))s=p}else if(r<=2047){q=this.b
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
P.iJ.prototype={
b_:function(a,b,c){var u,t,s,r
H.l(a,"$ib",[P.p],"$ab")
u=P.nD(!1,a,b,c)
if(u!=null)return u
c=P.bp(b,c,J.aE(a),null,null,null)
t=new P.am("")
s=new P.jJ(!1,t)
s.b_(a,b,c)
if(s.e>0){H.r(P.a3("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.dJ(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cv:function(a){return this.b_(a,0,null)},
$abO:function(){return[[P.b,P.p],P.h]}}
P.jJ.prototype={
b_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.l(a,"$ib",[P.p],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.jK(this,b,c,a)
$label0$0:for(q=J.c7(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.bM()
if((n&192)!==128){m=P.a3("Bad UTF-8 encoding 0x"+C.f.bc(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.d(C.D,m)
if(u<=C.D[m]){m=P.a3("Overlong encoding of 0x"+C.f.bc(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a3("Character outside valid Unicode range: 0x"+C.f.bc(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.dJ(u)
this.c=!1}for(m=o<c;m;){l=P.o9(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.V()
if(n<0){i=P.a3("Negative UTF-8 code unit: -0x"+C.f.bc(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a3("Bad UTF-8 encoding 0x"+C.f.bc(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.jK.prototype={
$2:function(a,b){this.a.b.a+=P.dR(this.d,a,b)},
$S:45}
P.ac.prototype={}
P.aj.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.aj&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.f.aL(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.mY(H.nn(this))
t=P.df(H.nl(this))
s=P.df(H.nh(this))
r=P.df(H.ni(this))
q=P.df(H.nk(this))
p=P.df(H.nm(this))
o=P.mZ(H.nj(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.u.prototype={}
P.aX.prototype={
n:function(a,b){return new P.aX(C.f.n(this.a,b.gfM()))},
p:function(a,b){return new P.aX(C.f.p(this.a,b.gfM()))},
u:function(a,b){if(b==null)return!1
return b instanceof P.aX&&this.a===b.a},
gJ:function(a){return C.f.gJ(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fz()
t=this.a
if(t<0)return"-"+new P.aX(0-t).i(0)
s=u.$1(C.f.a3(t,6e7)%60)
r=u.$1(C.f.a3(t,1e6)%60)
q=new P.fy().$1(t%1e6)
return""+C.f.a3(t,36e8)+":"+H.n(s)+":"+H.n(r)+"."+H.n(q)}}
P.fy.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.fz.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.bw.prototype={}
P.dG.prototype={
i:function(a){return"Throw of null."}}
P.aT.prototype={
gbW:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbV:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbW()+t+s
if(!this.a)return r
q=this.gbV()
p=P.fD(this.b)
return r+q+": "+p}}
P.bX.prototype={
gbW:function(){return"RangeError"},
gbV:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.n(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.n(u)
else if(s>u)t=": Not in range "+H.n(u)+".."+H.n(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.n(u)}return t}}
P.fO.prototype={
gbW:function(){return"RangeError"},
gbV:function(){var u,t
u=H.ae(this.b)
if(typeof u!=="number")return u.V()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.n(t)},
gk:function(a){return this.f}}
P.iA.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ix.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.dQ.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fm.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fD(u)+"."}}
P.ht.prototype={
i:function(a){return"Out of Memory"},
$ibw:1}
P.dP.prototype={
i:function(a){return"Stack Overflow"},
$ibw:1}
P.ft.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ei.prototype={
i:function(a){return"Exception: "+this.a}}
P.fM.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.t(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.G(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.Y(r,m)
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
g=""}f=C.c.t(r,i,j)
return t+h+f+g+"\n"+C.c.m(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.n(s)+")"):t}}
P.p.prototype={}
P.j.prototype={
gk:function(a){var u,t
u=this.gZ(this)
for(t=0;u.E();)++t
return t},
K:function(a,b){var u,t,s
if(b<0)H.r(P.ab(b,0,null,"index",null))
for(u=this.gZ(this),t=0;u.E();){s=u.gM(u)
if(b===t)return s;++t}throw H.c(P.X(b,this,"index",null,t))},
i:function(a){return P.n3(this,"(",")")}}
P.aY.prototype={}
P.b.prototype={$ij:1}
P.C.prototype={}
P.D.prototype={
gJ:function(a){return P.M.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.a0.prototype={}
P.M.prototype={constructor:P.M,$iM:1,
u:function(a,b){return this===b},
gJ:function(a){return H.cv(this)},
i:function(a){return"Instance of '"+H.bW(this)+"'"},
toString:function(){return this.i(this)}}
P.ar.prototype={}
P.h.prototype={$ily:1}
P.am.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ioV:1}
P.iG.prototype={
$2:function(a,b){var u,t,s,r
u=P.h
H.l(a,"$iC",[u,u],"$aC")
H.J(b)
t=J.l5(b).eq(b,"=")
if(t===-1){if(b!=="")J.kA(a,P.kY(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.t(b,0,t)
r=C.c.aC(b,t+1)
u=this.a
J.kA(a,P.kY(s,0,s.length,u,!0),P.kY(r,0,r.length,u,!0))}return a},
$S:42}
P.iC.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv4 address, "+a,this.a,b))},
$S:39}
P.iE.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:38}
P.iF.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.d1(C.c.t(this.b,a,b),null,16)
if(typeof u!=="number")return u.V()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:37}
P.c0.prototype={
geS:function(){return this.b},
gcI:function(a){var u=this.c
if(u==null)return""
if(C.c.a9(u,"["))return C.c.t(u,1,u.length-1)
return u},
gbF:function(a){var u=this.d
if(u==null)return P.m0(this.a)
return u},
gcS:function(a){var u=this.f
return u==null?"":u},
gel:function(){var u=this.r
return u==null?"":u},
cW:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.l(h,"$iC",[P.h,null],"$aC")
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
if(s&&!C.c.a9(d,"/"))d="/"+d
g=P.kX(g,0,0,h)
return new P.c0(i,j,c,f,d,g,this.r)},
cV:function(a,b){return this.cW(a,null,null,null,null,null,null,b,null,null)},
gba:function(){var u,t
if(this.Q==null){u=this.f
t=P.h
this.si3(new P.e4(P.lP(u==null?"":u,C.m),[t,t]))}return this.Q},
gem:function(){return this.c!=null},
gep:function(){return this.f!=null},
gen:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.n(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.n(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.n(t)}else u=t
u+=this.e
t=this.f
if(t!=null)u=u+"?"+t
t=this.r
if(t!=null)u=u+"#"+t
u=u.charCodeAt(0)==0?u:u
this.y=u}return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.V(b).$ikS)if(this.a==b.gbQ())if(this.c!=null===b.gem())if(this.b==b.geS())if(this.gcI(this)==b.gcI(b))if(this.gbF(this)==b.gbF(b))if(this.e===b.geE(b)){u=this.f
t=u==null
if(!t===b.gep()){if(t)u=""
if(u===b.gcS(b)){u=this.r
t=u==null
if(!t===b.gen()){if(t)u=""
u=u===b.gel()}else u=!1}else u=!1}else u=!1}else u=!1
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
si3:function(a){var u=P.h
this.Q=H.l(a,"$iC",[u,u],"$aC")},
$ikS:1,
gbQ:function(){return this.a},
geE:function(a){return this.e}}
P.jE.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.n()
throw H.c(P.a3("Invalid port",this.a,u+1))},
$S:21}
P.jF.prototype={
$1:function(a){return P.jI(C.a0,a,C.m,!1)},
$S:35}
P.jH.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.n(P.jI(C.t,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.n(P.jI(C.t,b,C.m,!0))}},
$S:26}
P.jG.prototype={
$2:function(a,b){var u,t
H.J(a)
if(b==null||typeof b==="string")this.a.$2(a,H.J(b))
else for(u=J.bH(H.mn(b,"$ij")),t=this.a;u.E();)t.$2(a,H.J(u.gM(u)))},
$S:34}
P.iB.prototype={
geQ:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.d(u,0)
t=this.a
u=u[0]+1
s=C.c.er(t,"?",u)
r=t.length
if(s>=0){q=P.cX(t,s+1,r,C.q,!1)
r=s}else q=null
u=new P.j8(this,"data",null,null,null,P.cX(t,u,r,C.F,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.d(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.jQ.prototype={
$1:function(a){return new Uint8Array(96)},
$S:33}
P.jP.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mQ(u,0,96,b)
return u},
$S:31}
P.jR.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.G(b,t)^96
if(s>=a.length)return H.d(a,s)
a[s]=c}}}
P.jS.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.G(b,0),t=C.c.G(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.d(a,s)
a[s]=c}}}
P.jw.prototype={
gem:function(){return this.c>0},
geo:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.t(t)
t=u+1<t
u=t}else u=!1
return u},
gep:function(){var u=this.f
if(typeof u!=="number")return u.V()
return u<this.r},
gen:function(){return this.r<this.a.length},
gdw:function(){return this.b===4&&C.c.a9(this.a,"http")},
gdz:function(){return this.b===5&&C.c.a9(this.a,"https")},
gbQ:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdw()){this.x="http"
u="http"}else if(this.gdz()){this.x="https"
u="https"}else if(u===4&&C.c.a9(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a9(this.a,"package")){this.x="package"
u="package"}else{u=C.c.t(this.a,0,u)
this.x=u}return u},
geS:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.t(this.a,t,u-1):""},
gcI:function(a){var u=this.c
return u>0?C.c.t(this.a,u,this.d):""},
gbF:function(a){var u
if(this.geo()){u=this.d
if(typeof u!=="number")return u.n()
return P.d1(C.c.t(this.a,u+1,this.e),null,null)}if(this.gdw())return 80
if(this.gdz())return 443
return 0},
geE:function(a){return C.c.t(this.a,this.e,this.f)},
gcS:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.V()
return u<t?C.c.t(this.a,u+1,t):""},
gel:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.aC(t,u+1):""},
gba:function(){var u=this.f
if(typeof u!=="number")return u.V()
if(u>=this.r)return C.a1
u=P.h
return new P.e4(P.lP(this.gcS(this),C.m),[u,u])},
cW:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.l(h,"$iC",[P.h,null],"$aC")
i=this.gbQ()
u=i==="file"
t=this.c
j=t>0?C.c.t(this.a,this.b+3,t):""
f=this.geo()?this.gbF(this):null
t=this.c
if(t>0)c=C.c.t(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.t(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a9(d,"/"))d="/"+d
g=P.kX(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.aC(t,s+1)
return new P.c0(i,j,c,f,d,g,b)},
cV:function(a,b){return this.cW(a,null,null,null,null,null,null,b,null,null)},
gJ:function(a){var u=this.y
if(u==null){u=C.c.gJ(this.a)
this.y=u}return u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.V(b).$ikS&&this.a===b.i(0)},
i:function(a){return this.a},
$ikS:1}
P.j8.prototype={}
W.y.prototype={}
W.f6.prototype={
gk:function(a){return a.length}}
W.f8.prototype={
i:function(a){return String(a)}}
W.f9.prototype={
i:function(a){return String(a)}}
W.bJ.prototype={$ibJ:1}
W.d8.prototype={}
W.bK.prototype={
d0:function(a,b,c){if(c!=null)return this.fV(a,b,P.og(c,null))
return this.fW(a,b)},
eX:function(a,b){return this.d0(a,b,null)},
fV:function(a,b,c){return a.getContext(b,c)},
fW:function(a,b){return a.getContext(b)},
$ibK:1,
$ill:1}
W.bL.prototype={
fX:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jv:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibL:1}
W.bt.prototype={
gk:function(a){return a.length}}
W.cf.prototype={$icf:1}
W.fp.prototype={
gk:function(a){return a.length}}
W.T.prototype={$iT:1}
W.cg.prototype={
gk:function(a){return a.length}}
W.fq.prototype={}
W.aV.prototype={}
W.aW.prototype={}
W.fr.prototype={
gk:function(a){return a.length}}
W.fs.prototype={
gk:function(a){return a.length}}
W.fu.prototype={
gk:function(a){return a.length}}
W.ch.prototype={$ich:1}
W.ci.prototype={
bN:function(a,b){return a.getElementById(b)}}
W.fv.prototype={
i:function(a){return String(a)}}
W.dg.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.l(c,"$ia8",[P.a0],"$aa8")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iH:1,
$aH:function(){return[[P.a8,P.a0]]},
$ax:function(){return[[P.a8,P.a0]]},
$ij:1,
$aj:function(){return[[P.a8,P.a0]]},
$ib:1,
$ab:function(){return[[P.a8,P.a0]]},
$aB:function(){return[[P.a8,P.a0]]}}
W.dh.prototype={
i:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(this.gaB(a))+" x "+H.n(this.gaz(a))},
u:function(a,b){var u
if(b==null)return!1
if(!H.d0(b,"$ia8",[P.a0],"$aa8"))return!1
u=J.br(b)
return a.left===u.gbD(b)&&a.top===u.gbJ(b)&&this.gaB(a)===u.gaB(b)&&this.gaz(a)===u.gaz(b)},
gJ:function(a){return W.lY(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(this.gaB(a)),C.e.gJ(this.gaz(a)))},
gdS:function(a){return a.bottom},
gaz:function(a){return a.height},
gbD:function(a){return a.left},
gbH:function(a){return a.right},
gbJ:function(a){return a.top},
gaB:function(a){return a.width},
$ia8:1,
$aa8:function(){return[P.a0]}}
W.fw.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.J(c)
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iH:1,
$aH:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aB:function(){return[P.h]}}
W.fx.prototype={
gk:function(a){return a.length}}
W.j6.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.f(u[b],"$iW")},
l:function(a,b,c){var u
H.f(c,"$iW")
u=this.b
if(b<0||b>=u.length)return H.d(u,b)
J.kB(this.a,c,u[b])},
h:function(a,b){J.lg(this.a,b)
return b},
gZ:function(a){var u=this.kt(this)
return new J.aq(u,u.length,0,[H.v(u,0)])},
$ax:function(){return[W.W]},
$aj:function(){return[W.W]},
$ab:function(){return[W.W]}}
W.W.prototype={
gcu:function(a){return new W.j6(a,a.children)},
gdU:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.V()
if(s<0)s=-s*0
if(typeof r!=="number")return r.V()
if(r<0)r=-r*0
return new P.a8(u,t,s,r,[P.a0])},
i:function(a){return a.localName},
$iW:1}
W.o.prototype={$io:1}
W.i.prototype={
j4:function(a,b,c,d){H.m(c,{func:1,args:[W.o]})
if(c!=null)this.fw(a,b,c,!1)},
fw:function(a,b,c,d){return a.addEventListener(b,H.c4(H.m(c,{func:1,args:[W.o]}),1),!1)},
$ii:1}
W.aw.prototype={$iaw:1}
W.cj.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaw")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aw]},
$ax:function(){return[W.aw]},
$ij:1,
$aj:function(){return[W.aw]},
$ib:1,
$ab:function(){return[W.aw]},
$icj:1,
$aB:function(){return[W.aw]}}
W.fH.prototype={
gk:function(a){return a.length}}
W.fL.prototype={
gk:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.dm.prototype={
dH:function(a,b,c,d){return a.replaceState(b,c,d)},
gk:function(a){return a.length}}
W.bR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iG")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.G]},
$ax:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ibR:1,
$aB:function(){return[W.G]}}
W.dn.prototype={}
W.bg.prototype={$ibg:1,
gdV:function(a){return a.data}}
W.bS.prototype={$ibS:1,$ill:1}
W.cm.prototype={$icm:1}
W.aZ.prototype={$iaZ:1}
W.du.prototype={}
W.h0.prototype={
i:function(a){return String(a)}}
W.co.prototype={}
W.hd.prototype={
gk:function(a){return a.length}}
W.he.prototype={
j:function(a,b){return P.bq(a.get(H.J(b)))},
I:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gaq:function(a){var u=H.e([],[P.h])
this.I(a,new W.hf(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aaf:function(){return[P.h,null]},
$iC:1,
$aC:function(){return[P.h,null]}}
W.hf.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hg.prototype={
j:function(a,b){return P.bq(a.get(H.J(b)))},
I:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gaq:function(a){var u=H.e([],[P.h])
this.I(a,new W.hh(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aaf:function(){return[P.h,null]},
$iC:1,
$aC:function(){return[P.h,null]}}
W.hh.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aI.prototype={$iaI:1}
W.hi.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaI")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aI]},
$ax:function(){return[W.aI]},
$ij:1,
$aj:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aB:function(){return[W.aI]}}
W.a4.prototype={$ia4:1}
W.j5.prototype={
l:function(a,b,c){var u,t
H.f(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
J.kB(u,c,t[b])},
gZ:function(a){var u=this.a.childNodes
return new W.dk(u,u.length,-1,[H.bs(C.a2,u,"B",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$ax:function(){return[W.G]},
$aj:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
kj:function(a,b){var u,t
try{u=a.parentNode
J.kB(u,b,a)}catch(t){H.aD(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.f5(a):u},
X:function(a,b){return a.appendChild(b)},
i9:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.ct.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iG")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.G]},
$ax:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aB:function(){return[W.G]}}
W.aJ.prototype={$iaJ:1,
gk:function(a){return a.length}}
W.hv.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaJ")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aJ]},
$ax:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aB:function(){return[W.aJ]}}
W.hF.prototype={
j:function(a,b){return P.bq(a.get(H.J(b)))},
I:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gaq:function(a){var u=H.e([],[P.h])
this.I(a,new W.hG(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aaf:function(){return[P.h,null]},
$iC:1,
$aC:function(){return[P.h,null]}}
W.hG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hI.prototype={
gk:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.hR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaK")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aK]},
$ax:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aB:function(){return[W.aK]}}
W.aL.prototype={$iaL:1}
W.hS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaL")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aL]},
$ax:function(){return[W.aL]},
$ij:1,
$aj:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aB:function(){return[W.aL]}}
W.aM.prototype={$iaM:1,
gk:function(a){return a.length}}
W.hV.prototype={
j:function(a,b){return this.dt(a,H.J(b))},
l:function(a,b,c){this.ih(a,b,c)},
I:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=this.h0(a,u)
if(t==null)return
b.$2(t,this.dt(a,t))}},
gaq:function(a){var u=H.e([],[P.h])
this.I(a,new W.hW(u))
return u},
gk:function(a){return a.length},
dt:function(a,b){return a.getItem(b)},
h0:function(a,b){return a.key(b)},
ih:function(a,b,c){return a.setItem(b,c)},
$aaf:function(){return[P.h,P.h]},
$iC:1,
$aC:function(){return[P.h,P.h]}}
W.hW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:26}
W.ax.prototype={$iax:1}
W.b3.prototype={$ib3:1}
W.dS.prototype={
fZ:function(a,b){return a.insertRow(b)}}
W.dT.prototype={
dv:function(a,b){return a.insertCell(b)}}
W.aN.prototype={$iaN:1}
W.ay.prototype={$iay:1}
W.i2.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iay")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.ay]},
$ax:function(){return[W.ay]},
$ij:1,
$aj:function(){return[W.ay]},
$ib:1,
$ab:function(){return[W.ay]},
$aB:function(){return[W.ay]}}
W.i3.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaN")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aN]},
$ax:function(){return[W.aN]},
$ij:1,
$aj:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aB:function(){return[W.aN]}}
W.id.prototype={
gk:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.aP.prototype={$iaP:1}
W.ih.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaO")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aO]},
$ax:function(){return[W.aO]},
$ij:1,
$aj:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aB:function(){return[W.aO]}}
W.ii.prototype={
gk:function(a){return a.length}}
W.bC.prototype={}
W.iH.prototype={
i:function(a){return String(a)}}
W.iX.prototype={$ill:1}
W.iY.prototype={
gk:function(a){return a.length}}
W.b7.prototype={
gjq:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.E("deltaY is not supported"))},
gjp:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.E("deltaX is not supported"))},
$ib7:1}
W.cL.prototype={
ia:function(a,b){return a.requestAnimationFrame(H.c4(H.m(b,{func:1,ret:-1,args:[P.a0]}),1))},
fN:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.j7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iT")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.T]},
$ax:function(){return[W.T]},
$ij:1,
$aj:function(){return[W.T]},
$ib:1,
$ab:function(){return[W.T]},
$aB:function(){return[W.T]}}
W.ed.prototype={
i:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(a.width)+" x "+H.n(a.height)},
u:function(a,b){var u
if(b==null)return!1
if(!H.d0(b,"$ia8",[P.a0],"$aa8"))return!1
u=J.br(b)
return a.left===u.gbD(b)&&a.top===u.gbJ(b)&&a.width===u.gaB(b)&&a.height===u.gaz(b)},
gJ:function(a){return W.lY(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(a.width),C.e.gJ(a.height))},
gaz:function(a){return a.height},
gaB:function(a){return a.width}}
W.jl.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaF")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aF]},
$ax:function(){return[W.aF]},
$ij:1,
$aj:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$aB:function(){return[W.aF]}}
W.eu.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iG")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.G]},
$ax:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aB:function(){return[W.G]}}
W.jx.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaM")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aM]},
$ax:function(){return[W.aM]},
$ij:1,
$aj:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aB:function(){return[W.aM]}}
W.jA.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iax")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.ax]},
$ax:function(){return[W.ax]},
$ij:1,
$aj:function(){return[W.ax]},
$ib:1,
$ab:function(){return[W.ax]},
$aB:function(){return[W.ax]}}
W.j9.prototype={}
W.kW.prototype={}
W.ja.prototype={}
W.jb.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:30}
W.B.prototype={
gZ:function(a){return new W.dk(a,this.gk(a),-1,[H.bs(this,a,"B",0)])}}
W.dk.prototype={
E:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdu(J.lf(this.a,u))
this.c=u
return!0}this.sdu(null)
this.c=t
return!1},
gM:function(a){return this.d},
sdu:function(a){this.d=H.A(a,H.v(this,0))},
$iaY:1}
W.ec.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eH.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
P.jy.prototype={
ej:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
bL:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.V(a)
if(!!t.$iaj)return new Date(a.a)
if(!!t.$ins)throw H.c(P.iy("structured clone of RegExp"))
if(!!t.$iaw)return a
if(!!t.$ibJ)return a
if(!!t.$icj)return a
if(!!t.$ibg)return a
if(!!t.$icq||!!t.$ibz)return a
if(!!t.$iC){s=this.ej(a)
r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.l(r,s,q)
t.I(a,new P.jz(u,this))
return u.a}if(!!t.$ib){s=this.ej(a)
u=this.b
if(s>=u.length)return H.d(u,s)
q=u[s]
if(q!=null)return q
return this.jk(a,s)}throw H.c(P.iy("structured clone of other type"))},
jk:function(a,b){var u,t,s,r
u=J.c7(a)
t=u.gk(a)
s=new Array(t)
C.a.l(this.b,b,s)
for(r=0;r<t;++r)C.a.l(s,r,this.bL(u.j(a,r)))
return s}}
P.jz.prototype={
$2:function(a,b){this.a.a[a]=this.b.bL(b)},
$S:7}
P.eS.prototype={$ibg:1,
gdV:function(a){return this.a}}
P.jW.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.eK.prototype={}
P.fI.prototype={
gaV:function(){var u,t,s
u=this.b
t=H.aC(u,"x",0)
s=W.W
return new H.h5(new H.j_(u,H.m(new P.fJ(),{func:1,ret:P.ac,args:[t]}),[t]),H.m(new P.fK(),{func:1,ret:s,args:[t]}),[t,s])},
I:function(a,b){H.m(b,{func:1,ret:-1,args:[W.W]})
C.a.I(P.kN(this.gaV(),!1,W.W),b)},
l:function(a,b,c){var u
H.f(c,"$iW")
u=this.gaV()
J.mR(u.b.$1(J.kC(u.a,b)),c)},
h:function(a,b){J.lg(this.b.a,b)},
gk:function(a){return J.aE(this.gaV().a)},
j:function(a,b){var u=this.gaV()
return u.b.$1(J.kC(u.a,b))},
gZ:function(a){var u=P.kN(this.gaV(),!1,W.W)
return new J.aq(u,u.length,0,[H.v(u,0)])},
$ax:function(){return[W.W]},
$aj:function(){return[W.W]},
$ab:function(){return[W.W]}}
P.fJ.prototype={
$1:function(a){return!!J.V(H.f(a,"$iG")).$iW},
$S:28}
P.fK.prototype={
$1:function(a){return H.k(H.f(a,"$iG"),"$iW")},
$S:27}
P.jq.prototype={
gbH:function(a){var u=this.a
if(typeof u!=="number")return u.n()
return H.A(u+this.c,H.v(this,0))},
gdS:function(a){var u=this.b
if(typeof u!=="number")return u.n()
return H.A(u+this.d,H.v(this,0))},
i:function(a){return"Rectangle ("+H.n(this.a)+", "+H.n(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.d0(b,"$ia8",[P.a0],"$aa8")){u=this.a
t=J.br(b)
if(u==t.gbD(b)){s=this.b
if(s==t.gbJ(b)){if(typeof u!=="number")return u.n()
r=H.v(this,0)
if(H.A(u+this.c,r)===t.gbH(b)){if(typeof s!=="number")return s.n()
u=H.A(s+this.d,r)===t.gdS(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t,s,r,q
u=this.a
t=J.d5(u)
s=this.b
r=J.d5(s)
if(typeof u!=="number")return u.n()
q=H.v(this,0)
u=C.f.gJ(H.A(u+this.c,q))
if(typeof s!=="number")return s.n()
q=C.f.gJ(H.A(s+this.d,q))
return P.nN(P.jn(P.jn(P.jn(P.jn(0,t),r),u),q))}}
P.a8.prototype={
gbD:function(a){return this.a},
gbJ:function(a){return this.b},
gaB:function(a){return this.c},
gaz:function(a){return this.d}}
P.b_.prototype={$ib_:1}
P.fU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return this.as(a,b)},
l:function(a,b,c){H.f(c,"$ib_")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
as:function(a,b){return a.getItem(b)},
$ax:function(){return[P.b_]},
$ij:1,
$aj:function(){return[P.b_]},
$ib:1,
$ab:function(){return[P.b_]},
$aB:function(){return[P.b_]}}
P.b2.prototype={$ib2:1}
P.hr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return this.as(a,b)},
l:function(a,b,c){H.f(c,"$ib2")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
as:function(a,b){return a.getItem(b)},
$ax:function(){return[P.b2]},
$ij:1,
$aj:function(){return[P.b2]},
$ib:1,
$ab:function(){return[P.b2]},
$aB:function(){return[P.b2]}}
P.hx.prototype={
gk:function(a){return a.length}}
P.i0.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return this.as(a,b)},
l:function(a,b,c){H.J(c)
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
as:function(a,b){return a.getItem(b)},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aB:function(){return[P.h]}}
P.q.prototype={
gcu:function(a){return new P.fI(a,new W.j5(a))}}
P.b5.prototype={$ib5:1}
P.ij.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return this.as(a,b)},
l:function(a,b,c){H.f(c,"$ib5")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
as:function(a,b){return a.getItem(b)},
$ax:function(){return[P.b5]},
$ij:1,
$aj:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aB:function(){return[P.b5]}}
P.en.prototype={}
P.eo.prototype={}
P.ex.prototype={}
P.ey.prototype={}
P.eI.prototype={}
P.eJ.prototype={}
P.eQ.prototype={}
P.eR.prototype={}
P.N.prototype={$ij:1,
$aj:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]},
$inA:1}
P.fb.prototype={
gk:function(a){return a.length}}
P.fc.prototype={
j:function(a,b){return P.bq(a.get(H.J(b)))},
I:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gaq:function(a){var u=H.e([],[P.h])
this.I(a,new P.fd(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aaf:function(){return[P.h,null]},
$iC:1,
$aC:function(){return[P.h,null]}}
P.fd.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fe.prototype={
gk:function(a){return a.length}}
P.bI.prototype={}
P.hs.prototype={
gk:function(a){return a.length}}
P.eb.prototype={}
P.d9.prototype={$id9:1}
P.dl.prototype={$idl:1}
P.dK.prototype={$idK:1}
P.bY.prototype={
dQ:function(a,b,c){return a.attachShader(b,c)},
an:function(a,b,c){return a.bindBuffer(b,c)},
cp:function(a,b,c){return a.bindFramebuffer(b,c)},
bm:function(a,b,c){return a.bindTexture(b,c)},
jb:function(a,b,c){return a.blendFunc(b,c)},
dT:function(a,b,c,d){return a.bufferData(b,c,d)},
je:function(a,b){return a.clear(b)},
jf:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jg:function(a,b){return a.clearDepth(b)},
ji:function(a,b){return a.compileShader(b)},
jl:function(a,b){return a.createShader(b)},
jn:function(a,b){return a.deleteProgram(b)},
jo:function(a,b){return a.deleteShader(b)},
jr:function(a,b){return a.depthFunc(b)},
js:function(a,b){return a.disable(b)},
dW:function(a,b){return a.disableVertexAttribArray(b)},
ju:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cB:function(a,b){return a.enable(b)},
dY:function(a,b){return a.enableVertexAttribArray(b)},
jH:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
eT:function(a,b){return a.generateMipmap(b)},
eU:function(a,b,c){return a.getActiveAttrib(b,c)},
eV:function(a,b,c){return a.getActiveUniform(b,c)},
eW:function(a,b,c){return a.getAttribLocation(b,c)},
d1:function(a,b){return a.getParameter(b)},
eY:function(a,b){return a.getProgramInfoLog(b)},
bO:function(a,b,c){return a.getProgramParameter(b,c)},
eZ:function(a,b){return a.getShaderInfoLog(b)},
f_:function(a,b,c){return a.getShaderParameter(b,c)},
f0:function(a,b,c){return a.getUniformLocation(b,c)},
jN:function(a,b){return a.linkProgram(b)},
kd:function(a,b,c){return a.pixelStorei(b,c)},
i4:function(a,b,c,d,e,f,g,h){return a.readPixels(b,c,d,e,f,g,h)},
f3:function(a,b,c){return a.shaderSource(b,c)},
kq:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.V(g)
if(!!u.$ibg)t=!0
else t=!1
if(t){this.it(a,b,c,d,e,f,P.oh(g))
return}if(!!u.$ibS)u=!0
else u=!1
if(u){this.iu(a,b,c,d,e,f,g)
return}throw H.c(P.d6("Incorrect number or type of arguments"))},
kp:function(a,b,c,d,e,f,g){return this.kq(a,b,c,d,e,f,g,null,null,null)},
it:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
iu:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bI:function(a,b,c,d){return a.texParameteri(b,c,d)},
O:function(a,b,c){return a.uniform1f(b,c)},
T:function(a,b,c){return a.uniform1i(b,c)},
v:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eO:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eP:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
eR:function(a,b){return a.useProgram(b)},
kz:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kA:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibY:1}
P.dN.prototype={$idN:1}
P.dV.prototype={$idV:1}
P.e2.prototype={$ie2:1}
P.hT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return P.bq(this.h_(a,b))},
l:function(a,b,c){H.f(c,"$iC")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
h_:function(a,b){return a.item(b)},
$ax:function(){return[[P.C,,,]]},
$ij:1,
$aj:function(){return[[P.C,,,]]},
$ib:1,
$ab:function(){return[[P.C,,,]]},
$aB:function(){return[[P.C,,,]]}}
P.eE.prototype={}
P.eF.prototype={}
O.a1.prototype={
bS:function(a){this.sh4(H.e([],[a]))
this.sdE(null)
this.sdB(null)
this.sdF(null)},
d3:function(a,b,c){var u=H.aC(this,"a1",0)
H.m(b,{func:1,ret:P.ac,args:[[P.j,u]]})
u={func:1,ret:-1,args:[P.p,[P.j,u]]}
H.m(a,u)
H.m(c,u)
this.sdE(b)
this.sdB(a)
this.sdF(c)},
bf:function(a,b){return this.d3(a,null,b)},
hP:function(a){var u
H.l(a,"$ij",[H.aC(this,"a1",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
ff:function(a,b){var u
H.l(b,"$ij",[H.aC(this,"a1",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gZ:function(a){var u=this.a
return new J.aq(u,u.length,0,[H.v(u,0)])},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.aC(this,"a1",0)
H.A(b,u)
u=[u]
if(this.hP(H.e([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.ff(s,H.e([b],u))}},
sh4:function(a){this.a=H.l(a,"$ib",[H.aC(this,"a1",0)],"$ab")},
sdE:function(a){this.b=H.m(a,{func:1,ret:P.ac,args:[[P.j,H.aC(this,"a1",0)]]})},
sdB:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.p,[P.j,H.aC(this,"a1",0)]]})},
sdF:function(a){this.d=H.m(a,{func:1,ret:-1,args:[P.p,[P.j,H.aC(this,"a1",0)]]})},
$ij:1}
O.cn.prototype={
gk:function(a){return this.a.length},
gB:function(){var u=this.b
if(u==null){u=D.R()
this.b=u}return u},
fg:function(a){var u=this.b
if(u!=null)u.H(a)},
aD:function(){return this.fg(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.a.gaA(u)
else return V.dC()},
eG:function(a){var u=this.a
if(a==null)C.a.h(u,V.dC())
else C.a.h(u,a)
this.aD()},
cR:function(){var u=this.a
if(u.length>0){u.pop()
this.aD()}},
sbZ:function(a){this.a=H.l(a,"$ib",[V.al],"$ab")}}
E.fh.prototype={}
E.ak.prototype={
df:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.aq(u,u.length,0,[H.v(u,0)]);u.E();){t=u.d
if(t.f==null)t.df()}},
sd4:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gB().L(0,this.geA())
t=this.c
if(t!=null)t.gB().h(0,this.geA())
s=new D.O("shape",u,this.c,this,[F.bZ])
s.b=!0
this.a7(s)}},
seK:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gB().L(0,this.geC())
t=this.f
this.f=a
if(a!=null)a.gB().h(0,this.geC())
this.df()
s=new D.O("technique",t,this.f,this,[O.c_])
s.b=!0
this.a7(s)}},
sb6:function(a){var u,t
if(!J.Q(this.r,a)){u=this.r
if(u!=null)u.gB().L(0,this.gey())
if(a!=null)a.gB().h(0,this.gey())
this.r=a
t=new D.O("mover",u,a,this,[U.aa])
t.b=!0
this.a7(t)}},
ar:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.aS(0,b,this):null
if(!J.Q(t,this.x)){s=this.x
this.x=t
r=new D.O("matrix",s,t,this,[V.al])
r.b=!0
this.a7(r)}u=this.f
if(u!=null)u.ar(0,b)
for(u=this.y.a,u=new J.aq(u,u.length,0,[H.v(u,0)]);u.E();)u.d.ar(0,b)},
aQ:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga0(u))
else C.a.h(u.a,t.m(0,u.ga0(u)))
u.aD()
a.eH(this.f)
u=a.dy
s=(u&&C.a).gaA(u)
if(s!=null&&this.d!=null)s.ki(a,this)
for(u=this.y.a,u=new J.aq(u,u.length,0,[H.v(u,0)]);u.E();)u.d.aQ(a)
a.eF()
a.dx.cR()},
gB:function(){var u=this.z
if(u==null){u=D.R()
this.z=u}return u},
a7:function(a){var u=this.z
if(u!=null)u.H(a)},
a2:function(){return this.a7(null)},
eB:function(a){H.f(a,"$iz")
this.e=null
this.a7(a)},
k_:function(){return this.eB(null)},
eD:function(a){this.a7(H.f(a,"$iz"))},
k0:function(){return this.eD(null)},
ez:function(a){this.a7(H.f(a,"$iz"))},
jZ:function(){return this.ez(null)},
ex:function(a){this.a7(H.f(a,"$iz"))},
jW:function(){return this.ex(null)},
jV:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ij",[E.ak],"$aj")
for(u=b.length,t=this.gew(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bP()
o.sag(null)
o.saW(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sag(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a2()},
jY:function(a,b){var u,t
H.l(b,"$ij",[E.ak],"$aj")
for(u=b.gZ(b),t=this.gew();u.E();)u.gM(u).gB().L(0,t)
this.a2()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfh:function(a,b){this.y=H.l(b,"$ia1",[E.ak],"$aa1")},
$ibm:1}
E.hB.prototype={
fb:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.aj(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cn()
t=[V.al]
u.sbZ(H.e([],t))
u.b=null
u.gB().h(0,new E.hC(this))
this.cy=u
u=new O.cn()
u.sbZ(H.e([],t))
u.b=null
u.gB().h(0,new E.hD(this))
this.db=u
u=new O.cn()
u.sbZ(H.e([],t))
u.b=null
u.gB().h(0,new E.hE(this))
this.dx=u
this.sis(H.e([],[O.c_]))
u=this.dy;(u&&C.a).h(u,null)
this.sio(new H.aH([P.h,A.cw]))},
gke:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga0(u)
t=this.db
t=u.m(0,t.ga0(t))
this.z=t
u=t}return u},
eH:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaA(u):a;(u&&C.a).h(u,t)},
eF:function(){var u=this.dy
if(u.length>1)u.pop()},
sis:function(a){this.dy=H.l(a,"$ib",[O.c_],"$ab")},
sio:function(a){this.fr=H.l(a,"$iC",[P.h,A.cw],"$aC")}}
E.hC.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.z=null
u.ch=null},
$S:9}
E.hD.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:9}
E.hE.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.ch=null
u.cx=null},
$S:9}
E.dZ.prototype={
d9:function(a){H.f(a,"$iz")
this.eI()},
d8:function(){return this.d9(null)},
gjG:function(){var u,t,s
u=Date.now()
t=C.f.a3(P.lo(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aj(u,!1)
return s/t},
dJ:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.m()
if(typeof u!=="number")return H.t(u)
s=C.e.b2(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.m()
r=C.e.b2(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.lK(C.u,this.gkk())}},
eI:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.ic(this),{func:1,ret:-1,args:[P.a0]})
C.J.fN(u)
C.J.ia(u,W.md(t,P.a0))}},
kh:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dJ()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aj(r,!1)
s.y=P.lo(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aD()
r=s.db
C.a.sk(r.a,0)
r.aD()
r=s.dx
C.a.sk(r.a,0)
r.aD()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aQ(this.e)}}catch(q){u=H.aD(q)
t=H.c8(q)
P.as("Error: "+H.n(u))
P.as("Stack: "+H.n(t))
throw H.c(u)}}}
E.ic.prototype={
$1:function(a){var u
H.oD(a)
u=this.a
if(u.ch){u.ch=!1
u.kh()}},
$S:29}
Z.e9.prototype={$ioN:1}
Z.da.prototype={
bl:function(a){var u,t,s
try{t=a.a
C.b.dY(t,this.e)
C.b.kz(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.aD(s)
t=P.w('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.n(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.n(this.e)+"]"}}
Z.iZ.prototype={$ioO:1}
Z.db.prototype={
aO:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bl:function(a){var u,t
u=this.a
C.b.an(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].bl(a)},
eN:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dW(s,u[t].e)
C.b.an(s,this.a.a,null)},
aQ:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.c
p=r.a
C.b.an(t,p,r.b)
C.b.ju(t,q.a,q.b,5123,0)
C.b.an(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.h]
t=H.e([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.F)(s),++q)C.a.h(t,s[q].i(0))
p=H.e([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.at(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(t,", ")+"\nAttrs:   "+C.a.D(p,", ")},
sfY:function(a){this.b=H.l(a,"$ib",[Z.bx],"$ab")},
$ioW:1}
Z.bx.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bW(this.c)+"'")+"]"}}
Z.aR.prototype={
gd5:function(a){var u,t
u=this.a
t=(u&$.bc().a)!==0?3:0
if((u&$.aS().a)!==0)t+=3
if((u&$.bb().a)!==0)t+=3
if((u&$.bd().a)!==0)t+=2
if((u&$.be().a)!==0)t+=3
if((u&$.d2().a)!==0)t+=3
if((u&$.d3().a)!==0)t+=4
if((u&$.bG().a)!==0)++t
return(u&$.ba().a)!==0?t+4:t},
j9:function(a){var u,t,s
u=$.bc()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aS()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bb()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bd()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.be()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d2()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d3()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bG()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ba()
if((t&u.a)!==0)if(s===a)return u
return $.mH()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aR))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.e([],[P.h])
t=this.a
if((t&$.bc().a)!==0)C.a.h(u,"Pos")
if((t&$.aS().a)!==0)C.a.h(u,"Norm")
if((t&$.bb().a)!==0)C.a.h(u,"Binm")
if((t&$.bd().a)!==0)C.a.h(u,"Txt2D")
if((t&$.be().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d2().a)!==0)C.a.h(u,"Clr3")
if((t&$.d3().a)!==0)C.a.h(u,"Clr4")
if((t&$.bG().a)!==0)C.a.h(u,"Weight")
if((t&$.ba().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.D(u,"|")}}
D.fk.prototype={}
D.bP.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.m(b,u)
if(this.a==null)this.sag(H.e([],[u]))
u=this.a;(u&&C.a).h(u,b)},
L:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[D.z]})
u=this.a
u=u==null?null:C.a.aN(u,b)
if(u===!0){u=this.a
t=(u&&C.a).L(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.aN(u,b)
if(u===!0){u=this.b
t=(u&&C.a).L(u,b)||t}return t},
H:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.z(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.I(P.kN(t,!0,{func:1,ret:-1,args:[D.z]}),new D.fE(u))
t=this.b
if(t!=null){this.saW(H.e([],[{func:1,ret:-1,args:[D.z]}]))
C.a.I(t,new D.fF(u))}return!0},
jy:function(){return this.H(null)},
kl:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.H(t)}}},
a8:function(a){return this.kl(a,!0,!1)},
sag:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")},
saW:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")}}
D.fE.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.fF.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.z.prototype={}
D.bT.prototype={}
D.bU.prototype={}
D.O.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.n(this.d)+" => "+H.n(this.e)}}
X.dc.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dc))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.n(this.a)}}
X.dt.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dt))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.n(this.a)}}
X.fT.prototype={
ka:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
k6:function(a){this.c=a.b
this.d.L(0,a.a)
return!1},
si2:function(a){this.d=H.l(a,"$ilH",[P.p],"$alH")}}
X.dx.prototype={}
X.h1.prototype={
aU:function(a,b){var u,t,s,r,q,p,o,n
u=new P.aj(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.m()
q=b.b
p=this.ch
if(typeof q!=="number")return q.m()
o=new V.ad(t.a+s*r,t.b+q*p)
p=this.a.gaM()
n=new X.bl(a,V.bB(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cQ:function(a,b){this.r=a.a
return!1},
b8:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.f1()
if(typeof u!=="number")return u.bM()
this.r=(u&~t)>>>0
return!1},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.aU(a,b))
return!0},
kb:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaM()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.m()
o=a.b
n=this.cy
if(typeof o!=="number")return o.m()
r=new X.cp(new V.S(q*p,o*n),t,s,new P.aj(r,!1),this)
r.b=!0
u.H(r)
return!0},
hE:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.aj(Date.now(),!1)
t=this.f
s=new X.dx(c,a,this.a.gaM(),b,u,this)
s.b=!0
t.H(s)
this.y=u
this.x=V.bB()}}
X.au.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.au))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bl.prototype={}
X.hj.prototype={
bX:function(a,b,c){var u,t,s
u=new P.aj(Date.now(),!1)
t=this.a.gaM()
s=new X.bl(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cQ:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.H(this.bX(a,b,!0))
return!0},
b8:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.f1()
if(typeof u!=="number")return u.bM()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.H(this.bX(a,b,!0))
return!0},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.bX(a,b,!1))
return!0},
kc:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaM()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.m()
p=a.b
o=this.ch
if(typeof p!=="number")return p.m()
s=new X.cp(new V.S(r*q,p*o),t,b,new P.aj(s,!1),this)
s.b=!0
u.H(s)
return!0},
gdX:function(){var u=this.b
if(u==null){u=D.R()
this.b=u}return u},
gbK:function(){var u=this.c
if(u==null){u=D.R()
this.c=u}return u},
gev:function(){var u=this.d
if(u==null){u=D.R()
this.d=u}return u}}
X.cp.prototype={}
X.hw.prototype={}
X.e0.prototype={}
X.ig.prototype={
aU:function(a,b){var u,t,s,r
H.l(a,"$ib",[V.ad],"$ab")
u=new P.aj(Date.now(),!1)
t=a.length>0?a[0]:V.bB()
s=this.a.gaM()
r=new X.e0(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
k9:function(a){var u
H.l(a,"$ib",[V.ad],"$ab")
u=this.b
if(u==null)return!1
u.H(this.aU(a,!0))
return!0},
k7:function(a){var u
H.l(a,"$ib",[V.ad],"$ab")
u=this.c
if(u==null)return!1
u.H(this.aU(a,!0))
return!0},
k8:function(a){var u
H.l(a,"$ib",[V.ad],"$ab")
u=this.d
if(u==null)return!1
u.H(this.aU(a,!1))
return!0}}
X.e5.prototype={
gaM:function(){var u=this.a
return V.lF(0,0,C.n.gdU(u).c,C.n.gdU(u).d)},
dm:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dt(u,new X.au(t,a.altKey,a.shiftKey))},
aK:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.au(t,a.altKey,a.shiftKey)},
cf:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.au(t,a.altKey,a.shiftKey)},
ax:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.p()
q=u.top
if(typeof s!=="number")return s.p()
return new V.ad(t-r,s-q)},
aX:function(a){return new V.S(a.movementX,a.movementY)},
c9:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.e([],[V.ad])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.F)(s),++q){p=s[q]
o=C.e.aj(p.pageX)
C.e.aj(p.pageY)
n=u.left
C.e.aj(p.pageX)
C.a.h(t,new V.ad(o-n,C.e.aj(p.pageY)-u.top))}return t},
au:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dc(u,new X.au(t,a.altKey,a.shiftKey))},
c_:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.p()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.p()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
hy:function(a){this.f=!0},
hk:function(a){this.f=!1},
hs:function(a){H.f(a,"$ia4")
if(this.f&&this.c_(a))a.preventDefault()},
hC:function(a){var u
H.f(a,"$iaZ")
if(!this.f)return
u=this.dm(a)
this.b.ka(u)},
hA:function(a){var u
H.f(a,"$iaZ")
if(!this.f)return
u=this.dm(a)
this.b.k6(u)},
hG:function(a){var u,t,s,r
H.f(a,"$ia4")
u=this.a
u.focus()
this.f=!0
this.aK(a)
if(this.x){t=this.au(a)
s=this.aX(a)
if(this.d.cQ(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.au(a)
r=this.ax(a)
if(this.c.cQ(t,r))a.preventDefault()},
hK:function(a){var u,t,s
H.f(a,"$ia4")
this.aK(a)
u=this.au(a)
if(this.x){t=this.aX(a)
if(this.d.b8(u,t))a.preventDefault()
return}if(this.r)return
s=this.ax(a)
if(this.c.b8(u,s))a.preventDefault()},
hw:function(a){var u,t,s
H.f(a,"$ia4")
if(!this.c_(a)){this.aK(a)
u=this.au(a)
if(this.x){t=this.aX(a)
if(this.d.b8(u,t))a.preventDefault()
return}if(this.r)return
s=this.ax(a)
if(this.c.b8(u,s))a.preventDefault()}},
hI:function(a){var u,t,s
H.f(a,"$ia4")
this.aK(a)
u=this.au(a)
if(this.x){t=this.aX(a)
if(this.d.b7(u,t))a.preventDefault()
return}if(this.r)return
s=this.ax(a)
if(this.c.b7(u,s))a.preventDefault()},
hu:function(a){var u,t,s
H.f(a,"$ia4")
if(!this.c_(a)){this.aK(a)
u=this.au(a)
if(this.x){t=this.aX(a)
if(this.d.b7(u,t))a.preventDefault()
return}if(this.r)return
s=this.ax(a)
if(this.c.b7(u,s))a.preventDefault()}},
hM:function(a){var u,t
H.f(a,"$ib7")
this.aK(a)
u=new V.S((a&&C.I).gjp(a),C.I.gjq(a)).w(0,180)
if(this.x){if(this.d.kb(u))a.preventDefault()
return}if(this.r)return
t=this.ax(a)
if(this.c.kc(u,t))a.preventDefault()},
hO:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.au(this.y)
s=this.ax(this.y)
this.d.hE(t,s,u)}},
i0:function(a){var u
H.f(a,"$iaP")
this.a.focus()
this.f=!0
this.cf(a)
u=this.c9(a)
if(this.e.k9(u))a.preventDefault()},
hX:function(a){var u
H.f(a,"$iaP")
this.cf(a)
u=this.c9(a)
if(this.e.k7(u))a.preventDefault()},
hZ:function(a){var u
H.f(a,"$iaP")
this.cf(a)
u=this.c9(a)
if(this.e.k8(u))a.preventDefault()},
sfO:function(a){this.z=H.l(a,"$ib",[[P.cy,P.M]],"$ab")}}
D.bv.prototype={
gB:function(){var u=this.d
if(u==null){u=D.R()
this.d=u}return u},
at:function(a){var u
H.f(a,"$iz")
u=this.d
if(u!=null)u.H(a)},
fj:function(){return this.at(null)},
$ia6:1,
$ibm:1}
D.a6.prototype={$ibm:1}
D.dv.prototype={
gB:function(){var u=this.Q
if(u==null){u=D.R()
this.Q=u}return u},
at:function(a){var u=this.Q
if(u!=null)u.H(a)},
dD:function(a){var u
H.f(a,"$iz")
u=this.ch
if(u!=null)u.H(a)},
hD:function(){return this.dD(null)},
hR:function(a){var u,t,s
H.l(a,"$ij",[D.a6],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.F)(a),++t){s=a[t]
if(s==null||this.fH(s))return!1}return!0},
he:function(a,b){var u,t,s,r,q,p,o,n
u=D.a6
H.l(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gdC(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.F)(b),++p){o=H.f(b[p],"$ia6")
if(o instanceof D.bv)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bP()
n.sag(null)
n.saW(null)
n.c=null
n.d=0
o.d=n}H.m(s,r)
if(n.a==null)n.sag(H.e([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bT(a,b,this,[u])
u.b=!0
this.at(u)},
hV:function(a,b){var u,t,s,r
u=D.a6
H.l(b,"$ij",[u],"$aj")
for(t=b.gZ(b),s=this.gdC();t.E();){r=t.gM(t)
C.a.L(this.e,r)
r.gB().L(0,s)}u=new D.bU(a,b,this,[u])
u.b=!0
this.at(u)},
fH:function(a){var u=C.a.aN(this.e,a)
return u},
sfL:function(a){this.e=H.l(a,"$ib",[D.bv],"$ab")},
si1:function(a){this.f=H.l(a,"$ib",[D.dI],"$ab")},
siq:function(a){this.r=H.l(a,"$ib",[D.dO],"$ab")},
siD:function(a){this.x=H.l(a,"$ib",[D.dW],"$ab")},
siE:function(a){this.y=H.l(a,"$ib",[D.dX],"$ab")},
siF:function(a){this.z=H.l(a,"$ib",[D.dY],"$ab")},
$aj:function(){return[D.a6]},
$aa1:function(){return[D.a6]}}
D.dI.prototype={$ia6:1,$ibm:1}
D.dO.prototype={$ia6:1,$ibm:1}
D.dW.prototype={$ia6:1,$ibm:1}
D.dX.prototype={$ia6:1,$ibm:1}
D.dY.prototype={$ia6:1,$ibm:1}
V.a2.prototype={
n:function(a,b){var u,t,s
u=C.e.n(this.a,b.gcT())
t=C.e.n(this.b,b.gbP())
s=C.e.n(this.c,b.gcq())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a2(u,t,s)},
p:function(a,b){var u,t,s
u=C.e.p(this.a,b.gcT())
t=C.e.p(this.b,b.gbP())
s=C.e.p(this.c,b.gcq())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a2(u,t,s)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.bf.prototype={
n:function(a,b){var u,t,s,r
u=C.e.n(this.a,b.gcT())
t=C.e.n(this.b,b.gbP())
s=C.e.n(this.c,b.gcq())
r=C.e.n(this.d,b.gj7(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.bf(u,t,s,r)},
p:function(a,b){var u,t,s,r
u=C.e.p(this.a,b.gcT())
t=C.e.p(this.b,b.gbP())
s=C.e.p(this.c,b.gcq())
r=C.e.p(this.d,b.gj7(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.bf(u,t,s,r)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bf))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"}}
V.fC.prototype={}
V.dB.prototype={
af:function(a,b){var u=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.u])
return u},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dB))return!1
u=b.a
t=$.P()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
if(!(Math.abs(b.c-this.c)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
if(!(Math.abs(b.e-this.e)<s))return!1
if(!(Math.abs(b.f-this.f)<s))return!1
u=b.r
r=this.r
t.toString
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.t(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=this.x
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q,p,o,n
u=[P.u]
t=V.c6(H.e([this.a,this.d,this.r],u),3,0)
s=V.c6(H.e([this.b,this.e,this.x],u),3,0)
r=V.c6(H.e([this.c,this.f,this.y],u),3,0)
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
V.al.prototype={
af:function(a,b){var u=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.u])
return u},
es:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(typeof g!=="number")return g.m()
e=this.z
d=this.cx
if(typeof e!=="number")return e.m()
c=g*f-e*d
b=this.db
a=this.Q
if(typeof a!=="number")return a.m()
a0=g*b-a*d
a1=this.dx
a2=this.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
if(Math.abs(a7-0)<$.P().a)return V.dC()
a8=1/a7
a9=-r
b0=-d
return V.b1((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
m:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
if(typeof p!=="number")return H.t(p)
o=this.d
n=b2.cx
m=b2.b
l=b2.f
k=b2.z
if(typeof k!=="number")return H.t(k)
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
if(typeof g!=="number")return H.t(g)
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
if(typeof a3!=="number")return a3.m()
a4=this.z
if(typeof a4!=="number")return a4.m()
a5=this.Q
if(typeof a5!=="number")return a5.m()
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.b1(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cZ:function(a){var u,t,s,r,q,p
u=a.a
t=a.b
s=a.c
if(typeof s!=="number")return H.t(s)
r=this.y
if(typeof r!=="number")return r.m()
q=this.z
if(typeof q!=="number")return q.m()
p=this.Q
if(typeof p!=="number")return p.m()
return new V.I(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,r*u+q*t+p*s)},
be:function(a){var u,t,s,r,q,p
u=a.a
t=a.b
s=a.c
if(typeof s!=="number")return H.t(s)
r=this.y
if(typeof r!=="number")return r.m()
q=this.z
if(typeof q!=="number")return q.m()
p=this.Q
if(typeof p!=="number")return p.m()
return new V.a_(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,r*u+q*t+p*s+this.ch)},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.P()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
if(!(Math.abs(b.c-this.c)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
if(!(Math.abs(b.e-this.e)<s))return!1
if(!(Math.abs(b.f-this.f)<s))return!1
if(!(Math.abs(b.r-this.r)<s))return!1
if(!(Math.abs(b.x-this.x)<s))return!1
u=b.y
r=this.y
t.toString
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.t(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=this.z
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=this.Q
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-this.ch)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
i:function(a){return this.N()},
ek:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.u]
t=V.c6(H.e([this.a,this.e,this.y,this.cx],u),b,c)
s=V.c6(H.e([this.b,this.f,this.z,this.cy],u),b,c)
r=V.c6(H.e([this.c,this.r,this.Q,this.db],u),b,c)
q=V.c6(H.e([this.d,this.x,this.ch,this.dx],u),b,c)
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
N:function(){return this.ek("",3,0)},
C:function(a){return this.ek(a,3,0)}}
V.ad.prototype={
n:function(a,b){return new V.ad(this.a+b.a,this.b+b.b)},
p:function(a,b){return new V.ad(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.a_.prototype={
n:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.t(t)
return new V.a_(this.a+b.a,this.b+b.b,u+t)},
p:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.t(t)
return new V.a_(this.a-b.a,this.b-b.b,u-t)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.a_(this.a*b,this.b*b,u*b)},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.P()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.t(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.bo.prototype={
n:function(a,b){return new V.bo(C.e.n(this.a,b.gkC(b)),C.e.n(this.b,b.gkD(b)),C.e.n(this.c,b.gkE(b)),C.e.n(this.d,b.gkB(b)))},
p:function(a,b){return new V.bo(C.e.p(this.a,b.gkC(b)),C.e.p(this.b,b.gkD(b)),C.e.p(this.c,b.gkE(b)),C.e.p(this.d,b.gkB(b)))},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bo))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"}}
V.dM.prototype={
ga6:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dM))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"}}
V.S.prototype={
cL:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.t(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.t(r)
return u*t+s*r},
n:function(a,b){var u,t,s
u=this.a
t=b.gjw(b)
if(typeof u!=="number")return u.n()
t=C.e.n(u,t)
u=this.b
s=b.gjx(b)
if(typeof u!=="number")return u.n()
return new V.S(t,C.e.n(u,s))},
p:function(a,b){var u,t,s
u=this.a
t=b.gjw(b)
if(typeof u!=="number")return u.p()
t=C.e.p(u,t)
u=this.b
s=b.gjx(b)
if(typeof u!=="number")return u.p()
return new V.S(t,C.e.p(u,s))},
m:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.m()
t=this.b
if(typeof t!=="number")return t.m()
return new V.S(u*b,t*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.P().a){u=$.lQ
if(u==null){u=new V.S(0,0)
$.lQ=u}return u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.S(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.t(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.I.prototype={
cL:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t
u=this.c
t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.t(t)
return this.a*a.a+this.b*a.b+u*t},
cM:function(a,b){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=a.c
if(typeof r!=="number")return r.p()
if(typeof s!=="number")return H.t(s)
return new V.I(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
ay:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
if(typeof t!=="number")return H.t(t)
s=this.c
r=a.b
if(typeof s!=="number")return s.m()
q=a.a
p=this.a
return new V.I(u*t-s*r,s*q-p*t,p*r-u*q)},
n:function(a,b){var u,t,s,r
u=b.a
t=b.b
s=this.c
r=b.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.t(r)
return new V.I(this.a+u,this.b+t,s+r)},
p:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.t(t)
return new V.I(this.a-b.a,this.b-b.b,u-t)},
S:function(a){var u=this.c
if(typeof u!=="number")return u.S()
return new V.I(-this.a,-this.b,-u)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.I(this.a*b,this.b*b,u*b)},
w:function(a,b){var u
if(Math.abs(b-0)<$.P().a)return V.cK()
u=this.c
if(typeof u!=="number")return u.w()
return new V.I(this.a/b,this.b/b,u/b)},
eu:function(){var u,t,s
u=$.P()
t=u.a
if(!(Math.abs(0-this.a)<t))return!1
if(!(Math.abs(0-this.b)<t))return!1
s=this.c
u.toString
if(typeof s!=="number")return H.t(s)
if(!(Math.abs(0-s)<t))return!1
return!0},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
u=b.a
t=$.P()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.t(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
U.fl.prototype={
bT:function(a){var u=V.oM(a,this.c,this.b)
return u},
gB:function(){var u=this.y
if(u==null){u=D.R()
this.y=u}return u},
R:function(a){var u=this.y
if(u!=null)u.H(a)},
sd_:function(a,b){},
scN:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.P().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bT(t)}u=new D.O("maximumLocation",u,this.b,this,[P.u])
u.b=!0
this.R(u)}},
scP:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.P().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bT(t)}u=new D.O("minimumLocation",u,this.c,this,[P.u])
u.b=!0
this.R(u)}},
sa_:function(a,b){var u
b=this.bT(b)
u=this.d
if(!(Math.abs(u-b)<$.P().a)){this.d=b
u=new D.O("location",u,b,this,[P.u])
u.b=!0
this.R(u)}},
scO:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.P().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.O("maximumVelocity",u,a,this,[P.u])
u.b=!0
this.R(u)}},
sU:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.P().a)){this.f=a
u=new D.O("velocity",u,a,this,[P.u])
u.b=!0
this.R(u)}},
scz:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.P().a)){this.x=a
u=new D.O("dampening",u,a,this,[P.u])
u.b=!0
this.R(u)}},
ar:function(a,b){var u,t,s,r,q
u=this.f
t=$.P().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa_(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.P().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sU(s)}}}
U.de.prototype={
gB:function(){var u=this.b
if(u==null){u=D.R()
this.b=u}return u},
aS:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.de))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.cl.prototype={
gB:function(){var u=this.e
if(u==null){u=D.R()
this.e=u}return u},
R:function(a){var u
H.f(a,"$iz")
u=this.e
if(u!=null)u.H(a)},
a4:function(){return this.R(null)},
hc:function(a,b){var u,t,s,r,q,p,o,n
u=U.aa
H.l(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gaE(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.F)(b),++p){o=b[p]
if(o!=null){n=o.gB()
n.toString
H.m(s,r)
if(n.a==null)n.sag(H.e([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bT(a,b,this,[u])
u.b=!0
this.R(u)},
hT:function(a,b){var u,t,s
u=U.aa
H.l(b,"$ij",[u],"$aj")
for(t=b.gZ(b),s=this.gaE();t.E();)t.gM(t).gB().L(0,s)
u=new D.bU(a,b,this,[u])
u.b=!0
this.R(u)},
aS:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.V()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.aq(u,u.length,0,[H.v(u,0)]),s=null;u.E();){t=u.d
if(t!=null){r=t.aS(0,b,c)
if(r!=null)s=s==null?r:r.m(0,s)}}this.f=s==null?V.dC():s
u=this.e
if(u!=null)u.a8(0)}return this.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cl))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.Q(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.aa]},
$aa1:function(){return[U.aa]},
$iaa:1}
U.aa.prototype={}
U.e6.prototype={
gB:function(){var u=this.cy
if(u==null){u=D.R()
this.cy=u}return u},
R:function(a){var u
H.f(a,"$iz")
u=this.cy
if(u!=null)u.H(a)},
a4:function(){return this.R(null)},
aZ:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdX().h(0,this.gc0())
this.a.c.gev().h(0,this.gc2())
this.a.c.gbK().h(0,this.gc4())
return!0},
c1:function(a){H.f(a,"$iz")
if(!J.Q(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
c3:function(a){var u,t,s,r,q,p,o
a=H.k(H.f(a,"$iz"),"$ibl")
if(!this.y)return
if(this.x){u=a.d.p(0,a.y)
u=new V.S(u.a,u.b)
u=u.F(u)
t=this.r
if(typeof t!=="number")return H.t(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.p(0,a.y)
u=new V.S(t.a,t.b).m(0,2).w(0,u.ga6())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.m()
s=this.e
if(typeof s!=="number")return H.t(s)
t.sU(u*10*s)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=new V.S(s.a,s.b).m(0,2).w(0,u.ga6())
s=this.b
q=r.a
if(typeof q!=="number")return q.S()
p=this.e
if(typeof p!=="number")return H.t(p)
o=this.z
if(typeof o!=="number")return H.t(o)
s.sa_(0,-q*p+o)
this.b.sU(0)
t=t.p(0,a.z)
this.Q=new V.S(t.a,t.b).m(0,2).w(0,u.ga6())}this.a4()},
c5:function(a){var u,t,s
H.f(a,"$iz")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.F(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.m()
s=this.e
if(typeof s!=="number")return H.t(s)
u.sU(t*10*s)
this.a4()}},
aS:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.V()
if(u<t){this.ch=t
s=b.y
this.b.ar(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.b1(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iaa:1}
U.e7.prototype={
gB:function(){var u=this.fx
if(u==null){u=D.R()
this.fx=u}return u},
R:function(a){var u
H.f(a,"$iz")
u=this.fx
if(u!=null)u.H(a)},
a4:function(){return this.R(null)},
aZ:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdX().h(0,this.gc0())
this.a.c.gev().h(0,this.gc2())
this.a.c.gbK().h(0,this.gc4())
u=this.a.d
t=u.f
if(t==null){t=D.R()
u.f=t
u=t}else u=t
u.h(0,this.gh5())
u=this.a.d
t=u.d
if(t==null){t=D.R()
u.d=t
u=t}else u=t
u.h(0,this.gh7())
u=this.a.e
t=u.b
if(t==null){t=D.R()
u.b=t
u=t}else u=t
u.h(0,this.giA())
u=this.a.e
t=u.d
if(t==null){t=D.R()
u.d=t
u=t}else u=t
u.h(0,this.giy())
u=this.a.e
t=u.c
if(t==null){t=D.R()
u.c=t
u=t}else u=t
u.h(0,this.giw())
return!0},
am:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.S()
u=-u}if(this.r){if(typeof t!=="number")return t.S()
t=-t}return new V.S(u,t)},
c1:function(a){a=H.k(H.f(a,"$iz"),"$ibl")
if(!J.Q(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
c3:function(a){var u,t,s,r,q,p,o
a=H.k(H.f(a,"$iz"),"$ibl")
if(!this.cx)return
if(this.ch){u=a.d.p(0,a.y)
u=new V.S(u.a,u.b)
u=u.F(u)
t=this.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.p(0,a.y)
u=this.am(new V.S(t.a,t.b).m(0,2).w(0,u.ga6()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.S()
s=this.y
if(typeof s!=="number")return H.t(s)
t.sU(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.S()
t=this.x
if(typeof t!=="number")return H.t(t)
s.sU(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=this.am(new V.S(s.a,s.b).m(0,2).w(0,u.ga6()))
s=this.c
q=r.a
if(typeof q!=="number")return q.S()
p=this.y
if(typeof p!=="number")return H.t(p)
o=this.cy
if(typeof o!=="number")return H.t(o)
s.sa_(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.S()
q=this.x
if(typeof q!=="number")return H.t(q)
s=this.db
if(typeof s!=="number")return H.t(s)
o.sa_(0,-p*q+s)
this.b.sU(0)
this.c.sU(0)
t=t.p(0,a.z)
this.dx=this.am(new V.S(t.a,t.b).m(0,2).w(0,u.ga6()))}this.a4()},
c5:function(a){var u,t,s
H.f(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.F(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.S()
s=this.y
if(typeof s!=="number")return H.t(s)
u.sU(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.S()
u=this.x
if(typeof u!=="number")return H.t(u)
s.sU(-t*10*u)
this.a4()}},
h6:function(a){if(H.k(H.f(a,"$iz"),"$idx").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
h8:function(a){var u,t,s,r,q,p,o
a=H.k(H.f(a,"$iz"),"$ibl")
if(!J.Q(this.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=this.am(new V.S(s.a,s.b).m(0,2).w(0,u.ga6()))
s=this.c
q=r.a
if(typeof q!=="number")return q.S()
p=this.y
if(typeof p!=="number")return H.t(p)
o=this.cy
if(typeof o!=="number")return H.t(o)
s.sa_(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.S()
q=this.x
if(typeof q!=="number")return H.t(q)
s=this.db
if(typeof s!=="number")return H.t(s)
o.sa_(0,-p*q+s)
this.b.sU(0)
this.c.sU(0)
t=t.p(0,a.z)
this.dx=this.am(new V.S(t.a,t.b).m(0,2).w(0,u.ga6()))
this.a4()},
iB:function(a){H.f(a,"$iz")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
iz:function(a){var u,t,s,r,q,p,o
a=H.k(H.f(a,"$iz"),"$ie0")
if(!this.cx)return
if(this.ch){u=a.d.p(0,a.y)
u=new V.S(u.a,u.b)
u=u.F(u)
t=this.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.p(0,a.y)
u=this.am(new V.S(t.a,t.b).m(0,2).w(0,u.ga6()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.S()
s=this.y
if(typeof s!=="number")return H.t(s)
t.sU(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.S()
t=this.x
if(typeof t!=="number")return H.t(t)
s.sU(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=this.am(new V.S(s.a,s.b).m(0,2).w(0,u.ga6()))
s=this.c
q=r.a
if(typeof q!=="number")return q.S()
p=this.y
if(typeof p!=="number")return H.t(p)
o=this.cy
if(typeof o!=="number")return H.t(o)
s.sa_(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.S()
q=this.x
if(typeof q!=="number")return H.t(q)
s=this.db
if(typeof s!=="number")return H.t(s)
o.sa_(0,-p*q+s)
this.b.sU(0)
this.c.sU(0)
t=t.p(0,a.z)
this.dx=this.am(new V.S(t.a,t.b).m(0,2).w(0,u.ga6()))}this.a4()},
ix:function(a){var u,t,s
H.f(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.F(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.S()
s=this.y
if(typeof s!=="number")return H.t(s)
u.sU(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.S()
u=this.x
if(typeof u!=="number")return H.t(u)
s.sU(-t*10*u)
this.a4()}},
aS:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.V()
if(u<t){this.dy=t
s=b.y
this.c.ar(0,s)
this.b.ar(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.b1(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.m(0,V.b1(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iaa:1}
U.e8.prototype={
gB:function(){var u=this.r
if(u==null){u=D.R()
this.r=u}return u},
R:function(a){var u=this.r
if(u!=null)u.H(a)},
aZ:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.R()
u.e=t
u=t}else u=t
t=this.gh9()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.R()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
ha:function(a){var u,t,s,r
H.f(a,"$iz")
if(!J.Q(this.b,this.a.b.c))return
H.k(a,"$icp")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){this.d=r
u=new D.O("zoom",u,r,this,[P.u])
u.b=!0
this.R(u)}},
aS:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.b1(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iaa:1}
M.di.prototype={
aG:function(a){var u
H.f(a,"$iz")
u=this.x
if(u!=null)u.H(a)},
fk:function(){return this.aG(null)},
ho:function(a,b){var u,t,s,r,q,p,o,n
u=E.ak
H.l(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gaF(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.F)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bP()
n.sag(null)
n.saW(null)
n.c=null
n.d=0
o.z=n}H.m(s,r)
if(n.a==null)n.sag(H.e([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bT(a,b,this,[u])
u.b=!0
this.aG(u)},
hq:function(a,b){var u,t,s
u=E.ak
H.l(b,"$ij",[u],"$aj")
for(t=b.gZ(b),s=this.gaF();t.E();)t.gM(t).gB().L(0,s)
u=new D.bU(a,b,this,[u])
u.b=!0
this.aG(u)},
gB:function(){var u=this.x
if(u==null){u=D.R()
this.x=u}return u},
aQ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.eH(this.c)
u=this.b
u.toString
t=a.a
C.b.cp(t,36160,null)
C.b.cB(t,2884)
C.b.cB(t,2929)
C.b.jr(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.t(s)
o=C.e.aj(p*s)
p=q.b
if(typeof r!=="number")return H.t(r)
n=C.e.aj(p*r)
p=C.e.aj(q.c*s)
a.c=p
q=C.e.aj(q.d*r)
a.d=q
C.b.kA(t,o,n,p,q)
C.b.jg(t,u.c)
u=u.a
C.b.jf(t,u.a,u.b,u.c,u.d)
C.b.je(t,16640)
u=this.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.b1(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.eG(i)
t=$.lz
if(t==null){t=V.lB()
q=V.lV()
p=$.lR
if(p==null){p=new V.I(0,0,-1)
$.lR=p}p=V.lv(t,q,p)
$.lz=p
h=p}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.m(0,h)}a.db.eG(h)
for(u=this.d.a,u=new J.aq(u,u.length,0,[H.v(u,0)]);u.E();)u.d.ar(0,a)
for(u=this.d.a,u=new J.aq(u,u.length,0,[H.v(u,0)]);u.E();)u.d.aQ(a)
this.a.toString
a.cy.cR()
a.db.cR()
this.b.toString
a.eF()},
sfF:function(a,b){this.d=H.l(b,"$ia1",[E.ak],"$aa1")},
$ioT:1}
A.d7.prototype={}
A.fa.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jz:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
C.b.dY(r.a,r.c)}},
jt:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
C.b.dW(r.a,r.c)}}}
A.h7.prototype={
fa:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.am("")
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
a7.iJ(u)
a7.iQ(u)
a7.iK(u)
a7.iY(u)
a7.iZ(u)
a7.iS(u)
a7.j2(u)
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
u=new P.am("")
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
s.iN(u)
s.iI(u)
s.iL(u)
s.iO(u)
s.iW(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.iU(u)
s.iV(u)}s.iR(u)
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
k=H.e([],[P.h])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.D(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.iM(u)
s.iT(u)
s.iX(u)
s.j_(u)
s.j0(u)
s.j1(u)
s.iP(u)}m=u.a+="// === Main ===\n"
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
j=H.e([],[P.h])
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
i="vec4("+C.a.D(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.dn(n,35633)
this.f=this.dn(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.dQ(s,q,this.e)
C.b.dQ(s,this.r,this.f)
C.b.jN(s,this.r)
if(!H.mh(C.b.bO(s,this.r,35714))){h=C.b.eY(s,this.r)
C.b.jn(s,this.r)
H.r(P.w("Failed to link shader: "+H.n(h)))}this.ik()
this.im()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a7.fr)this.id=H.k(this.y.q(0,"invViewMat"),"$iav")
if(t)this.dy=H.k(this.y.q(0,"objMat"),"$iav")
if(r)this.fr=H.k(this.y.q(0,"viewObjMat"),"$iav")
this.fy=H.k(this.y.q(0,"projViewObjMat"),"$iav")
if(a7.x2)this.k1=H.k(this.y.q(0,"txt2DMat"),"$icD")
if(a7.y1)this.k2=H.k(this.y.q(0,"txtCubeMat"),"$iav")
if(a7.y2)this.k3=H.k(this.y.q(0,"colorMat"),"$iav")
this.sfB(H.e([],[A.av]))
t=a7.ap
if(t>0){this.k4=H.f(this.y.q(0,"bendMatCount"),"$iL")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.r(P.w("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.k(f,"$iav"))}}t=a7.a
if(t!==C.d){this.r2=H.k(this.y.q(0,"emissionClr"),"$iK")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.k(this.y.q(0,"emissionTxt"),"$ian")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$iL")
break
case C.i:this.ry=H.k(this.y.q(0,"emissionTxt"),"$iao")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$iL")
break}}t=a7.b
if(t!==C.d){this.x2=H.k(this.y.q(0,"ambientClr"),"$iK")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.k(this.y.q(0,"ambientTxt"),"$ian")
this.ap=H.k(this.y.q(0,"nullAmbientTxt"),"$iL")
break
case C.i:this.y2=H.k(this.y.q(0,"ambientTxt"),"$iao")
this.ap=H.k(this.y.q(0,"nullAmbientTxt"),"$iL")
break}}t=a7.c
if(t!==C.d){this.ai=H.k(this.y.q(0,"diffuseClr"),"$iK")
switch(t){case C.d:break
case C.j:break
case C.h:this.bo=H.k(this.y.q(0,"diffuseTxt"),"$ian")
this.bp=H.k(this.y.q(0,"nullDiffuseTxt"),"$iL")
break
case C.i:this.dZ=H.k(this.y.q(0,"diffuseTxt"),"$iao")
this.bp=H.k(this.y.q(0,"nullDiffuseTxt"),"$iL")
break}}t=a7.d
if(t!==C.d){this.bq=H.k(this.y.q(0,"invDiffuseClr"),"$iK")
switch(t){case C.d:break
case C.j:break
case C.h:this.e_=H.k(this.y.q(0,"invDiffuseTxt"),"$ian")
this.br=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$iL")
break
case C.i:this.e0=H.k(this.y.q(0,"invDiffuseTxt"),"$iao")
this.br=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$iL")
break}}t=a7.e
if(t!==C.d){this.bu=H.k(this.y.q(0,"shininess"),"$iZ")
this.bs=H.k(this.y.q(0,"specularClr"),"$iK")
switch(t){case C.d:break
case C.j:break
case C.h:this.e1=H.k(this.y.q(0,"specularTxt"),"$ian")
this.bt=H.k(this.y.q(0,"nullSpecularTxt"),"$iL")
break
case C.i:this.e2=H.k(this.y.q(0,"specularTxt"),"$iao")
this.bt=H.k(this.y.q(0,"nullSpecularTxt"),"$iL")
break}}switch(a7.f){case C.d:break
case C.j:break
case C.h:this.e3=H.k(this.y.q(0,"bumpTxt"),"$ian")
this.bv=H.k(this.y.q(0,"nullBumpTxt"),"$iL")
break
case C.i:this.e4=H.k(this.y.q(0,"bumpTxt"),"$iao")
this.bv=H.k(this.y.q(0,"nullBumpTxt"),"$iL")
break}if(a7.dy){this.e5=H.k(this.y.q(0,"envSampler"),"$iao")
this.e6=H.k(this.y.q(0,"nullEnvTxt"),"$iL")
t=a7.r
if(t!==C.d){this.bw=H.k(this.y.q(0,"reflectClr"),"$iK")
switch(t){case C.d:break
case C.j:break
case C.h:this.e7=H.k(this.y.q(0,"reflectTxt"),"$ian")
this.bx=H.k(this.y.q(0,"nullReflectTxt"),"$iL")
break
case C.i:this.e8=H.k(this.y.q(0,"reflectTxt"),"$iao")
this.bx=H.k(this.y.q(0,"nullReflectTxt"),"$iL")
break}}t=a7.x
if(t!==C.d){this.by=H.k(this.y.q(0,"refraction"),"$iZ")
this.bz=H.k(this.y.q(0,"refractClr"),"$iK")
switch(t){case C.d:break
case C.j:break
case C.h:this.e9=H.k(this.y.q(0,"refractTxt"),"$ian")
this.bA=H.k(this.y.q(0,"nullRefractTxt"),"$iL")
break
case C.i:this.ea=H.k(this.y.q(0,"refractTxt"),"$iao")
this.bA=H.k(this.y.q(0,"nullRefractTxt"),"$iL")
break}}}t=a7.y
if(t!==C.d){this.bB=H.k(this.y.q(0,"alpha"),"$iZ")
switch(t){case C.d:break
case C.j:break
case C.h:this.eb=H.k(this.y.q(0,"alphaTxt"),"$ian")
this.bC=H.k(this.y.q(0,"nullAlphaTxt"),"$iL")
break
case C.i:this.ec=H.k(this.y.q(0,"alphaTxt"),"$iao")
this.bC=H.k(this.y.q(0,"nullAlphaTxt"),"$iL")
break}}this.sfl(H.e([],[A.cC]))
this.sfm(H.e([],[A.cE]))
this.sfn(H.e([],[A.cF]))
this.sfo(H.e([],[A.cG]))
this.sfp(H.e([],[A.cH]))
this.sfq(H.e([],[A.cI]))
if(a7.k2){t=a7.z
if(t>0){this.ed=H.f(this.y.q(0,"dirLightCount"),"$iL")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iK")
s=this.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iK")
s=this.cC;(s&&C.a).h(s,new A.cC(g,f,e))}}t=a7.Q
if(t>0){this.ee=H.f(this.y.q(0,"pntLightCount"),"$iL")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iK")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iK")
s=this.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iK")
s=this.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iZ")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$iZ")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$iZ")
s=this.cD;(s&&C.a).h(s,new A.cE(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.ef=H.f(this.y.q(0,"spotLightCount"),"$iL")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iK")
s=this.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iK")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iK")
s=this.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iK")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$iZ")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$iZ")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a0,"$iZ")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a1,"$iZ")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a2,"$iZ")
s=this.cE;(s&&C.a).h(s,new A.cF(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.eg=H.f(this.y.q(0,"txtDirLightCount"),"$iL")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iK")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iK")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iK")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iK")
s=this.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$iK")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$iL")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a0,"$ian")
s=this.cF;(s&&C.a).h(s,new A.cG(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.eh=H.f(this.y.q(0,"txtPntLightCount"),"$iL")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iK")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iK")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$icD")
s=this.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iK")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$iL")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$iZ")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a0,"$iZ")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a1,"$iZ")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a2,"$iao")
s=this.cG;(s&&C.a).h(s,new A.cH(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.ei=H.f(this.y.q(0,"txtSpotLightCount"),"$iL")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iK")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iK")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iK")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iK")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$iK")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$iL")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a0,"$iK")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a1,"$iZ")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a2,"$iZ")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a3,"$iZ")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a4,"$iZ")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a5,"$iZ")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a6,"$ian")
s=this.cH;(s&&C.a).h(s,new A.cI(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ah:function(a,b,c){C.b.T(b.a,b.d,1)},
ac:function(a,b,c){C.b.T(b.a,b.d,1)},
sfB:function(a){this.r1=H.l(a,"$ib",[A.av],"$ab")},
sfl:function(a){this.cC=H.l(a,"$ib",[A.cC],"$ab")},
sfm:function(a){this.cD=H.l(a,"$ib",[A.cE],"$ab")},
sfn:function(a){this.cE=H.l(a,"$ib",[A.cF],"$ab")},
sfo:function(a){this.cF=H.l(a,"$ib",[A.cG],"$ab")},
sfp:function(a){this.cG=H.l(a,"$ib",[A.cH],"$ab")},
sfq:function(a){this.cH=H.l(a,"$ib",[A.cI],"$ab")}}
A.ha.prototype={
iJ:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.ap+"];\n"
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
iQ:function(a){var u
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
iK:function(a){var u
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
iY:function(a){var u,t
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
iZ:function(a){var u,t
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
iS:function(a){var u
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
j2:function(a){var u
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
av:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.d(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.aC(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iN:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.av(a,u,"emission")
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
iI:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.av(a,u,"ambient")
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
iL:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.av(a,u,"diffuse")
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
iO:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.av(a,u,"invDiffuse")
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
iW:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.av(a,u,"specular")
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
iR:function(a){var u,t
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
iU:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.av(a,u,"reflect")
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
iV:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.av(a,u,"refract")
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
iM:function(a){var u,t
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
iT:function(a){var u,t
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
iX:function(a){var u,t
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
j_:function(a){var u,t,s
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
j0:function(a){var u,t,s
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
j1:function(a){var u,t,s
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
iP:function(a){var u
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
i:function(a){return this.ai}}
A.cC.prototype={}
A.cG.prototype={}
A.cE.prototype={}
A.cH.prototype={}
A.cF.prototype={}
A.cI.prototype={}
A.cw.prototype={
fd:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dn:function(a,b){var u,t,s
u=this.a
t=C.b.jl(u,b)
C.b.f3(u,t,a)
C.b.ji(u,t)
if(!H.mh(C.b.f_(u,t,35713))){s=C.b.eZ(u,t)
C.b.jo(u,t)
throw H.c(P.w("Error compiling shader '"+H.n(t)+"': "+H.n(s)))}return t},
ik:function(){var u,t,s,r,q,p
u=H.e([],[A.d7])
t=this.a
s=H.ae(C.b.bO(t,this.r,35721))
if(typeof s!=="number")return H.t(s)
r=0
for(;r<s;++r){q=C.b.eU(t,this.r,r)
p=C.b.eW(t,this.r,q.name)
C.a.h(u,new A.d7(t,q.name,p))}this.x=new A.fa(u)},
im:function(){var u,t,s,r,q,p
u=H.e([],[A.e1])
t=this.a
s=H.ae(C.b.bO(t,this.r,35718))
if(typeof s!=="number")return H.t(s)
r=0
for(;r<s;++r){q=C.b.eV(t,this.r,r)
p=C.b.f0(t,this.r,q.name)
C.a.h(u,this.jm(q.type,q.size,q.name,p))}this.y=new A.iv(u)},
aI:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.L(u,t,b,c)
else return A.kR(u,t,b,a,c)},
fI:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.an(u,t,b,c)
else return A.kR(u,t,b,a,c)},
fJ:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ao(u,t,b,c)
else return A.kR(u,t,b,a,c)},
bj:function(a,b){return new P.ei(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.n(b)+"."))},
jm:function(a,b,c,d){switch(a){case 5120:return this.aI(b,c,d)
case 5121:return this.aI(b,c,d)
case 5122:return this.aI(b,c,d)
case 5123:return this.aI(b,c,d)
case 5124:return this.aI(b,c,d)
case 5125:return this.aI(b,c,d)
case 5126:return new A.Z(this.a,this.r,c,d)
case 35664:return new A.iq(this.a,this.r,c,d)
case 35665:return new A.K(this.a,this.r,c,d)
case 35666:return new A.it(this.a,this.r,c,d)
case 35667:return new A.ir(this.a,this.r,c,d)
case 35668:return new A.is(this.a,this.r,c,d)
case 35669:return new A.iu(this.a,this.r,c,d)
case 35674:return new A.iw(this.a,this.r,c,d)
case 35675:return new A.cD(this.a,this.r,c,d)
case 35676:return new A.av(this.a,this.r,c,d)
case 35678:return this.fI(b,c,d)
case 35680:return this.fJ(b,c,d)
case 35670:throw H.c(this.bj("BOOL",c))
case 35671:throw H.c(this.bj("BOOL_VEC2",c))
case 35672:throw H.c(this.bj("BOOL_VEC3",c))
case 35673:throw H.c(this.bj("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.n(a)+" for "+H.n(c)+"."))}}}
A.bN.prototype={
i:function(a){return this.b}}
A.e1.prototype={}
A.iv.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
jF:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.F)(u),++r)s+=u[r].i(0)+a
return s},
N:function(){return this.jF("\n")}}
A.L.prototype={
i:function(a){return"Uniform1i: "+H.n(this.c)}}
A.ir.prototype={
i:function(a){return"Uniform2i: "+H.n(this.c)}}
A.is.prototype={
i:function(a){return"Uniform3i: "+H.n(this.c)}}
A.iu.prototype={
i:function(a){return"Uniform4i: "+H.n(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform1iv: "+H.n(this.c)},
siG:function(a){this.e=H.l(a,"$ib",[P.p],"$ab")}}
A.Z.prototype={
i:function(a){return"Uniform1f: "+H.n(this.c)}}
A.iq.prototype={
i:function(a){return"Uniform2f: "+H.n(this.c)}}
A.K.prototype={
i:function(a){return"Uniform3f: "+H.n(this.c)}}
A.it.prototype={
i:function(a){return"Uniform4f: "+H.n(this.c)}}
A.iw.prototype={
i:function(a){return"Uniform1Mat2 "+H.n(this.c)}}
A.cD.prototype={
al:function(a){var u=new Float32Array(H.c1(H.l(a,"$ib",[P.u],"$ab")))
C.b.eO(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.n(this.c)}}
A.av.prototype={
al:function(a){var u=new Float32Array(H.c1(H.l(a,"$ib",[P.u],"$ab")))
C.b.eP(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.n(this.c)}}
A.an.prototype={
i:function(a){return"UniformSampler2D: "+H.n(this.c)}}
A.ao.prototype={
i:function(a){return"UniformSamplerCube: "+H.n(this.c)}}
F.jN.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cM(u.b,b).cM(u.d.cM(u.c,b),c)
a.sa_(0,new V.a_(t.a,t.b,t.c))
a.scY(t.w(0,Math.sqrt(t.F(t))))
u=1-b
s=1-c
a.scn(new V.bo(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:4}
F.jX.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:12}
F.jZ.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.t(q)
t=-t*q
p=s*q
a.sa_(0,new V.a_(t,p,r))
p=new V.I(t,p,r)
a.scY(p.w(0,Math.sqrt(p.F(p))))
a.scn(new V.bo(1-c,2+c,-1,-1))},
$S:4}
F.k8.prototype={
$3:function(a,b,c){var u,t,s,r
u=c*3.141592653589793
t=Math.sin(u)
s=b*6.283185307179586
r=new V.I(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.w(0,Math.sqrt(r.F(r)))
a.sa_(0,new V.a_(s.a,s.b,s.c))},
$S:4}
F.kw.prototype={
$2:function(a,b){return 0},
$S:12}
F.kx.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.t(u)
t=a.f
s=new V.I(t.a,t.b,t.c)
u=s.w(0,Math.sqrt(s.F(s))).m(0,this.b+u)
a.sa_(0,new V.a_(u.a,u.b,u.c))},
$S:4}
F.ky.prototype={
$1:function(a){return new V.a_(Math.cos(a),Math.sin(a),0)},
$S:43}
F.jY.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=b*6.283185307179586
t=this.a
s=this.b
r=J.le(t.$1(u),s)
s=J.mM(J.le(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.I(s.a,s.b,s.c)
q=s.w(0,Math.sqrt(s.F(s)))
t=$.lS
if(t==null){t=new V.I(1,0,0)
$.lS=t
p=t}else p=t
t=q.ay(!J.Q(q,p)?V.lW():p)
o=t.w(0,Math.sqrt(t.F(t)))
t=o.ay(q)
p=t.w(0,Math.sqrt(t.F(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.m(0,t*s)
s=o.m(0,m*s)
m=t.c
l=s.c
if(typeof m!=="number")return m.p()
if(typeof l!=="number")return H.t(l)
a.sa_(0,J.mL(r,new V.a_(t.a-s.a,t.b-s.b,m-l)))},
$S:4}
F.k1.prototype={
$2:function(a,b){return 0},
$S:12}
F.k2.prototype={
$3:function(a,b,c){var u,t,s,r
u=b*2-1
t=c*2-1
a.sa_(0,new V.a_(u,t,this.a.a.$2(b,c)))
s=new V.I(u,t,1)
a.scY(s.w(0,Math.sqrt(s.F(s))))
s=1-b
r=1-c
a.scn(new V.bo(b*c,2+s*c,4+b*r,6+s*r))},
$S:4}
F.a9.prototype={
b0:function(){if(!this.gb1()){C.a.L(this.a.a.d.b,this)
this.a.a.a2()}this.cb()
this.cc()
this.i7()},
cg:function(a){this.a=a
C.a.h(a.d.b,this)},
ci:function(a){this.b=a
C.a.h(a.d.c,this)},
ij:function(a){this.c=a
C.a.h(a.d.d,this)},
cb:function(){var u=this.a
if(u!=null){C.a.L(u.d.b,this)
this.a=null}},
cc:function(){var u=this.b
if(u!=null){C.a.L(u.d.c,this)
this.b=null}},
i7:function(){var u=this.c
if(u!=null){C.a.L(u.d.d,this)
this.c=null}},
gb1:function(){return this.a==null||this.b==null||this.c==null},
fA:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cK()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.eu())return
return q.w(0,Math.sqrt(q.F(q)))},
fE:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.p(0,t)
u=new V.I(u.a,u.b,u.c)
q=u.w(0,Math.sqrt(u.F(u)))
u=r.p(0,t)
u=new V.I(u.a,u.b,u.c)
u=q.ay(u.w(0,Math.sqrt(u.F(u))))
return u.w(0,Math.sqrt(u.F(u)))},
ct:function(){if(this.d!=null)return!0
var u=this.fA()
if(u==null){u=this.fE()
if(u==null)return!1}this.d=u
this.a.a.a2()
return!0},
fz:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cK()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.eu())return
return q.w(0,Math.sqrt(q.F(q)))},
fD:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.P().a){u=m.p(0,p)
u=new V.I(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.F(u)))
if(j.a-k.a<0)h=h.S(0)}else{g=(u-l.b)/i
u=m.p(0,p).m(0,g).n(0,p).p(0,s)
u=new V.I(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.F(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.S(0)}u=this.d
if(u!=null){f=u.w(0,Math.sqrt(u.F(u)))
u=f.ay(h)
u=u.w(0,Math.sqrt(u.F(u))).ay(f)
h=u.w(0,Math.sqrt(u.F(u)))}return h},
cr:function(){if(this.e!=null)return!0
var u=this.fz()
if(u==null){u=this.fD()
if(u==null)return!1}this.e=u
this.a.a.a2()
return!0},
gjh:function(a){if(J.Q(this.a,this.b))return!0
if(J.Q(this.b,this.c))return!0
if(J.Q(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var u,t
if(this.gb1())return a+"disposed"
u=a+C.c.ae(J.at(this.a.e),0)+", "+C.c.ae(J.at(this.b.e),0)+", "+C.c.ae(J.at(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
N:function(){return this.C("")}}
F.fG.prototype={}
F.hQ.prototype={
b5:function(a,b,c){var u,t
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
F.bj.prototype={
b0:function(){if(!this.gb1()){C.a.L(this.a.a.c.b,this)
this.a.a.a2()}this.cb()
this.cc()},
cg:function(a){this.a=a
C.a.h(a.c.b,this)},
ci:function(a){this.b=a
C.a.h(a.c.c,this)},
cb:function(){var u=this.a
if(u!=null){C.a.L(u.c.b,this)
this.a=null}},
cc:function(){var u=this.b
if(u!=null){C.a.L(u.c.c,this)
this.b=null}},
gb1:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){if(this.gb1())return a+"disposed"
return a+C.c.ae(J.at(this.a.e),0)+", "+C.c.ae(J.at(this.b.e),0)},
N:function(){return this.C("")}}
F.fV.prototype={}
F.io.prototype={
b5:function(a,b,c){var u,t
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
F.bA.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ae(J.at(u.e),0)},
N:function(){return this.C("")}}
F.bZ.prototype={
gB:function(){var u=this.e
if(u==null){u=D.R()
this.e=u}return u},
bE:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.A()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.F)(u),++r){q=u[r]
this.a.h(0,q.jj())}this.a.A()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.F)(u),++r){p=u[r]
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
n=new F.bA()
if(m.a==null)H.r(P.w("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.H(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.F)(u),++r){l=u[r]
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
F.n7(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.F)(u),++r){i=u[r]
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
F.dj(k,j,h)}u=this.e
if(u!=null)u.a8(0)},
a5:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.a5()||!1
if(!this.a.a5())t=!1
u=this.e
if(u!=null)u.a8(0)
return t},
j8:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
u=this.e
if(u!=null)++u.d
for(t=this.a.c.length-1,u=a.b,s=a.a,r=s.length,q=a.c,p=u-1;t>=0;--t){o=this.a.c
if(t>=o.length)return H.d(o,t)
n=o[t]
o=n.y
m=C.e.b2(o.a*p)
o=o.b
if(typeof q!=="number")return q.p()
l=C.e.b2(o*(q-1))
m=m>=0?C.f.ak(m,u):u+C.f.ak(m,u)
k=(m+(l>=0?C.f.ak(l,q):q+C.f.ak(l,q))*u)*4
if(k<0||k>=r)return H.d(s,k)
o=s[k]/255
j=k+1
if(j>=r)return H.d(s,j)
j=s[j]/255
i=k+2
if(i>=r)return H.d(s,i)
i=s[i]/255
h=k+3
if(h>=r)return H.d(s,h)
h=s[h]/255
if(o<0)o=0
else if(o>1)o=1
if(j<0)j=0
else if(j>1)j=1
if(i<0)i=0
else if(i>1)i=1
if(!(h<0))if(h>1)h=1
g=(o+j+i)*b/3
o=n.f
j=n.r
i=j.a
h=j.b
j=j.c
if(typeof j!=="number")return j.m()
f=o.a
e=o.b
d=o.c
if(typeof d!=="number")return d.n()
j=new V.a_(f+i*g,e+h*g,d+j*g)
if(!J.Q(o,j)){n.f=j
o=n.a
if(o!=null){o=o.e
if(o!=null)o.H(null)}}}u=this.e
if(u!=null)u.a8(0)},
ky:function(a){var u,t,s,r,q
u=this.e
if(u!=null)++u.d
for(u=this.a,t=u.c.length-1,s=a.a;t>=0;--t){r=u.c
if(t>=r.length)return H.d(r,t)
q=r[t]
if((s&$.bc().a)===0)q.f=null
if((s&$.aS().a)===0)q.r=null
if((s&$.bb().a)===0)q.x=null
if((s&$.bd().a)===0)q.y=null
if((s&$.be().a)===0)q.z=null
if((s&$.lc().a)===0)q.Q=null
if((s&$.bG().a)===0)q.ch=0
if((s&$.ba().a)===0)q.cx=null}u=this.e
if(u!=null)u.a8(0)},
kx:function(a,b){var u,t,s,r
u=this.e
if(u!=null)++u.d
for(u=this.d,t=u.b.length-1;t>=0;--t){s=u.b
if(t>=s.length)return H.d(s,t)
r=s[t]
r.d=null}u=this.e
if(u!=null)u.a8(0)},
kw:function(a){return this.kx(!0,a)},
jS:function(a,b){var u,t,s,r,q,p,o
P.as("FLAG 1\n")
u=this.e
if(u!=null)++u.d
P.as("FLAG 2\n")
u=this.a.c
t=H.e(u.slice(0),[H.v(u,0)])
P.as("FLAG 3\n")
for(u=[F.ap];t.length!==0;){s=C.a.gjD(t)
C.a.kf(t,0)
if(s!=null){r=H.e([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.F)(t),++p){o=t[p]
if(o!=null&&a.b5(0,s,o)){C.a.h(r,o)
C.a.L(t,o)}}if(r.length>1)b.bE(r)}}P.as("FLAG 4\n")
this.a.A()
P.as("FLAG 5\n")
this.c.bG()
P.as("FLAG 6\n")
this.d.bG()
P.as("FLAG 7\n")
this.b.kg()
P.as("FLAG 8\n")
this.c.cU(new F.io())
P.as("FLAG 9\n")
this.d.cU(new F.hQ())
P.as("FLAG 10\n")
u=this.e
if(u!=null)u.a8(0)
P.as("FLAG 11\n")},
j6:function(a){this.jS(new F.iR(),new F.hp())},
bk:function(){return this.j6(null)},
jc:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.bc()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.aS().a)!==0)++r
if((s&$.bb().a)!==0)++r
if((s&$.bd().a)!==0)++r
if((s&$.be().a)!==0)++r
if((s&$.d2().a)!==0)++r
if((s&$.d3().a)!==0)++r
if((s&$.bG().a)!==0)++r
if((s&$.ba().a)!==0)++r
q=a1.gd5(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.u
o=H.e(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.e(t,[Z.da])
for(m=0,l=0;l<r;++l){k=a1.j9(l)
j=k.gd5(k)
C.a.l(n,l,new Z.da(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.d(t,i)
h=t[i].jO(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.l(o,g,h[f]);++g}}m+=j}H.l(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.an(t,34962,e)
C.b.dT(t,34962,new Float32Array(H.c1(o)),35044)
C.b.an(t,34962,null)
d=new Z.db(new Z.e9(34962,e),n,a1)
d.sfY(H.e([],[Z.bx]))
if(this.b.b.length!==0){s=P.p
c=H.e([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)}a=Z.kV(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bx(0,c.length,a))}if(this.c.b.length!==0){s=P.p
c=H.e([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.d(b,l)
b=b[l].b
b.a.a.A()
C.a.h(c,b.e)}a=Z.kV(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bx(1,c.length,a))}if(this.d.b.length!==0){s=P.p
c=H.e([],[s])
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
C.a.h(c,b.e)}a=Z.kV(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bx(4,c.length,a))}return d},
i:function(a){var u=H.e([],[P.h])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.C("   "))}return C.a.D(u,"\n")},
a7:function(a){var u=this.e
if(u!=null)u.H(a)},
a2:function(){return this.a7(null)},
$ioU:1}
F.hK.prototype={
j5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.ap],"$ab")
u=H.e([],[F.a9])
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
C.a.h(u,F.dj(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dj(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dj(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dj(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
cU:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b5(0,p,n)){p.b0()
break}}}}},
bG:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gjh(s)
if(t)s.b0()}},
a5:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.F)(u),++r)if(!u[r].ct())s=!1
return s},
cs:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.F)(u),++r)if(!u[r].cr())s=!1
return s},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.e([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
N:function(){return this.C("")},
sfP:function(a){this.b=H.l(a,"$ib",[F.a9],"$ab")}}
F.hL.prototype={
gk:function(a){return this.b.length},
cU:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b5(0,p,n)){p.b0()
break}}}}},
bG:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.Q(s.a,s.b)
if(t)s.b0()}},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.e([],[P.h])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.d(r,s)
C.a.h(u,r[s].C(a+(""+s+". ")))}return C.a.D(u,"\n")},
N:function(){return this.C("")},
sh1:function(a){this.b=H.l(a,"$ib",[F.bj],"$ab")}}
F.hM.prototype={
gk:function(a){return this.b.length},
kg:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.L(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.H(null)}s=t.a
if(s!=null){C.a.L(s.b.b,t)
t.a=null}}}},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.e([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
N:function(){return this.C("")},
sc8:function(a){this.b=H.l(a,"$ib",[F.bA],"$ab")}}
F.ap.prototype={
cw:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.kU(this.cx,s,p,u,t,r,q,a,o)},
jj:function(){return this.cw(null)},
sa_:function(a,b){var u
if(!J.Q(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a2()}},
scY:function(a){var u
if(!J.Q(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a2()}},
scn:function(a){var u
if(!J.Q(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a2()}},
jO:function(a){var u,t
if(a.u(0,$.bc())){u=this.f
t=[P.u]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.u(0,$.aS())){u=this.r
t=[P.u]
if(u==null)return H.e([0,1,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.u(0,$.bb())){u=this.x
t=[P.u]
if(u==null)return H.e([0,0,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.u(0,$.bd())){u=this.y
t=[P.u]
if(u==null)return H.e([0,0],t)
else return H.e([u.a,u.b],t)}else if(a.u(0,$.be())){u=this.z
t=[P.u]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.u(0,$.d2())){u=this.Q
t=[P.u]
if(u==null)return H.e([1,1,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.u(0,$.d3())){u=this.Q
t=[P.u]
if(u==null)return H.e([1,1,1,1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.bG()))return H.e([this.ch],[P.u])
else if(a.u(0,$.ba())){u=this.cx
t=[P.u]
if(u==null)return H.e([-1,-1,-1,-1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else return H.e([],[P.u])},
ct:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cK()
this.d.I(0,new F.iW(u))
u=u.a
this.r=u.w(0,Math.sqrt(u.F(u)))
u=this.a
if(u!=null){u.a2()
u=this.a.e
if(u!=null)u.a8(0)}return!0},
cr:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cK()
this.d.I(0,new F.iV(u))
u=u.a
this.x=u.w(0,Math.sqrt(u.F(u)))
u=this.a
if(u!=null){u.a2()
u=this.a.e
if(u!=null)u.a8(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var u,t,s
u=H.e([],[P.h])
C.a.h(u,C.c.ae(J.at(this.e),0))
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
C.a.h(u,V.U(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.D(u,", ")
return a+"{"+s+"}"},
N:function(){return this.C("")}}
F.iW.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:6}
F.iV.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:6}
F.iM.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.w("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a2()
return!0},
gk:function(a){return this.c.length},
a5:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)u[s].ct()
return!0},
cs:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)u[s].cr()
return!0},
jd:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Q(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.H(null)}}}}return!0},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
this.A()
u=H.e([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
N:function(){return this.C("")},
siH:function(a){this.c=H.l(a,"$ib",[F.ap],"$ab")}}
F.iN.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
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
I:function(a,b){H.m(b,{func:1,ret:-1,args:[F.a9]})
C.a.I(this.b,b)
C.a.I(this.c,new F.iO(this,b))
C.a.I(this.d,new F.iP(this,b))},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.e([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
N:function(){return this.C("")},
sfQ:function(a){this.b=H.l(a,"$ib",[F.a9],"$ab")},
sfR:function(a){this.c=H.l(a,"$ib",[F.a9],"$ab")},
sfS:function(a){this.d=H.l(a,"$ib",[F.a9],"$ab")}}
F.iO.prototype={
$1:function(a){H.f(a,"$ia9")
if(!J.Q(a.a,this.a))this.b.$1(a)},
$S:6}
F.iP.prototype={
$1:function(a){var u
H.f(a,"$ia9")
u=this.a
if(!J.Q(a.a,u)&&!J.Q(a.b,u))this.b.$1(a)},
$S:6}
F.iQ.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.d(u,s)
return u[s]}else{if(b<0)return H.d(u,b)
return u[b]}},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.e([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
N:function(){return this.C("")},
sh2:function(a){this.b=H.l(a,"$ib",[F.bj],"$ab")},
sh3:function(a){this.c=H.l(a,"$ib",[F.bj],"$ab")}}
F.iS.prototype={}
F.iR.prototype={
b5:function(a,b,c){return J.Q(b.f,c.f)}}
F.iT.prototype={}
F.hp.prototype={
bE:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[F.ap],"$ab")
u=V.cK()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null){q=u.a
p=r.a
o=u.b
n=r.b
m=u.c
r=r.c
if(typeof m!=="number")return m.n()
if(typeof r!=="number")return H.t(r)
u=new V.I(q+p,o+n,m+r)}}u=u.w(0,Math.sqrt(u.F(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.F)(a),++s){l=a[s]
if(r)k=null
else{q=u.a
p=u.b
o=u.c
if(typeof o!=="number")return o.m()
k=u.w(0,Math.sqrt(q*q+p*p+o*o))}if(!J.Q(l.r,k)){l.r=k
q=l.a
if(q!=null){q=q.e
if(q!=null)q.H(null)}}}return}}
F.iU.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.e([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
N:function(){return this.C("")},
sc8:function(a){this.b=H.l(a,"$ib",[F.bA],"$ab")}}
O.dz.prototype={
gB:function(){var u=this.dy
if(u==null){u=D.R()
this.dy=u}return u},
ab:function(a){var u
H.f(a,"$iz")
u=this.dy
if(u!=null)u.H(a)},
hm:function(){return this.ab(null)},
dI:function(a){H.f(a,"$iz")
this.a=null
this.ab(a)},
ic:function(){return this.dI(null)},
hg:function(a,b){var u=V.al
u=new D.bT(a,H.l(b,"$ij",[u],"$aj"),this,[u])
u.b=!0
this.ab(u)},
hi:function(a,b){var u=V.al
u=new D.bU(a,H.l(b,"$ij",[u],"$aj"),this,[u])
u.b=!0
this.ab(u)},
dk:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.f.a3(u.e.length+3,4)*4
s=C.f.a3(u.f.length+3,4)*4
r=C.f.a3(u.r.length+3,4)*4
q=C.f.a3(u.x.length+3,4)*4
p=C.f.a3(u.y.length+3,4)*4
o=C.f.a3(u.z.length+3,4)*4
n=C.f.a3(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.f.i(u.a)+C.f.i(m.a)+C.f.i(l.a)+C.f.i(k.a)+C.f.i(j.a)+C.f.i(i.a)+C.f.i(h.a)+C.f.i(g.a)+C.f.i(f.a)
e+"_"
e+"_0"
e+"_00"
e+"_000"
e=e+"_000_"+n+"_"+t+"_"+s+"_"+r+"_"+q+"_"+p+"_"+o
d=h!==C.d||g!==C.d
c=m!==C.d||l!==C.d||k!==C.d||j!==C.d
b=j===C.d
a=!b||d
a0=l!==C.d||k!==C.d||!b||i!==C.d||d
b=i===C.d
a1=!b
a2=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a3=u===C.i||m===C.i||l===C.i||k===C.i||j===C.i||i===C.i||h===C.i||g===C.i||f===C.i
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.bc()
if(a0){b=$.aS()
a7=new Z.aR(a7.a|b.a)}if(a1){b=$.bb()
a7=new Z.aR(a7.a|b.a)}if(a2){b=$.bd()
a7=new Z.aR(a7.a|b.a)}if(a3){b=$.be()
a7=new Z.aR(a7.a|b.a)}if(a5){b=$.ba()
a7=new Z.aR(a7.a|b.a)}return new A.ha(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
W:function(a,b){H.l(a,"$ib",[T.cz],"$ab")},
ar:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.aq(u,u.length,0,[H.v(u,0)]);u.E();){t=u.d
t.toString
s=$.iL
if(s==null){s=new V.I(0,0,1)
$.iL=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cZ(s)}}},
ki:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.dk()
t=a4.fr.j(0,u.ai)
if(t==null){t=A.nd(u,a4.a)
s=t.b
if(s.length===0)H.r(P.w("May not cache a shader with no name."))
if(a4.fr.bn(0,s))H.r(P.w('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.l(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bo
u=a5.e
if(!(u instanceof Z.db)){a5.e=null
u=null}if(u==null||!u.d.u(0,q)){u=r.r1
if(u)a5.d.a5()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cs()
o.a.cs()
o=o.e
if(o!=null)o.a8(0)}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.jd()
n=n.e
if(n!=null)n.a8(0)}l=a5.d.jc(new Z.iZ(a4.a),q)
l.aO($.bc()).e=this.a.Q.c
if(u)l.aO($.aS()).e=this.a.cx.c
if(p)l.aO($.bb()).e=this.a.ch.c
if(r.rx)l.aO($.bd()).e=this.a.cy.c
if(o)l.aO($.be()).e=this.a.db.c
if(r.x1)l.aO($.ba()).e=this.a.dx.c
a5.e=l}u=T.cz
k=H.e([],[u])
p=this.a
o=a4.a
C.b.eR(o,p.r)
p.x.jz()
if(r.fx){p=this.a
n=a4.dx
n=n.ga0(n)
p=p.dy
p.toString
p.al(n.af(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db
n=n.ga0(n)
m=a4.dx
m=n.m(0,m.ga0(m))
a4.cx=m
n=m}p=p.fr
p.toString
p.al(n.af(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gke()
m=a4.dx
m=n.m(0,m.ga0(m))
a4.ch=m
n=m}p=p.fy
p.toString
p.al(n.af(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.al(C.o.af(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.al(C.o.af(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.al(C.o.af(n,!0))}if(r.ap>0){j=this.e.a.length
p=this.a.k4
C.b.T(p.a,p.d,j)
for(p=[P.u],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.d(m,i)
m=m[i]
n.toString
H.f(m,"$ial")
n=n.r1
if(i>=n.length)return H.d(n,i)
n=n[i]
h=new Float32Array(H.c1(H.l(m.af(0,!0),"$ib",p,"$ab")))
C.b.eP(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.j:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.v(p.a,p.d,m,g,n)
break
case C.h:this.W(k,this.f.d)
p=this.a
n=this.f.d
p.ah(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
break
case C.i:this.W(k,this.f.e)
p=this.a
n=this.f.e
p.ac(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.d:break
case C.j:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.b.v(p.a,p.d,m,g,n)
break
case C.h:this.W(k,this.r.d)
p=this.a
n=this.r.d
p.ah(p.y1,p.ap,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
break
case C.i:this.W(k,this.r.e)
p=this.a
n=this.r.e
p.ac(p.y2,p.ap,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
break}switch(r.c){case C.d:break
case C.j:p=this.a
n=this.x.f
p=p.ai
p.toString
m=n.a
g=n.b
n=n.c
C.b.v(p.a,p.d,m,g,n)
break
case C.h:this.W(k,this.x.d)
p=this.a
n=this.x.d
p.ah(p.bo,p.bp,n)
n=this.a
p=this.x.f
n=n.ai
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
break
case C.i:this.W(k,this.x.e)
p=this.a
n=this.x.e
p.ac(p.dZ,p.bp,n)
n=this.a
p=this.x.f
n=n.ai
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
break}switch(r.d){case C.d:break
case C.j:p=this.a
n=this.y.f
p=p.bq
p.toString
m=n.a
g=n.b
n=n.c
C.b.v(p.a,p.d,m,g,n)
break
case C.h:this.W(k,this.y.d)
p=this.a
n=this.y.d
p.ah(p.e_,p.br,n)
n=this.a
p=this.y.f
n=n.bq
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
break
case C.i:this.W(k,this.y.e)
p=this.a
n=this.y.e
p.ac(p.e0,p.br,n)
n=this.a
p=this.y.f
n=n.bq
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
break}switch(r.e){case C.d:break
case C.j:p=this.a
n=this.z.f
p=p.bs
p.toString
m=n.a
g=n.b
n=n.c
C.b.v(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bu
C.b.O(n.a,n.d,g)
break
case C.h:this.W(k,this.z.d)
p=this.a
n=this.z.d
p.ah(p.e1,p.bt,n)
n=this.a
p=this.z.f
n=n.bs
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bu
C.b.O(p.a,p.d,g)
break
case C.i:this.W(k,this.z.e)
p=this.a
n=this.z.e
p.ac(p.e2,p.bt,n)
n=this.a
p=this.z.f
n=n.bs
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bu
C.b.O(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.ed
C.b.T(p.a,p.d,j)
p=a4.db
f=p.ga0(p)
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.F)(p),++d){c=p[d]
m=this.a.cC
if(e>=m.length)return H.d(m,e)
b=m[e]
m=f.cZ(c.a)
g=m.a
a=m.b
a0=m.c
if(typeof a0!=="number")return a0.m()
a0=m.w(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.v(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.b.v(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.ee
C.b.T(p.a,p.d,j)
p=a4.db
f=p.ga0(p)
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.F)(p),++d){c=p[d]
m=this.a.cD
if(e>=m.length)return H.d(m,e)
b=m[e]
m=c.gb9(c)
g=b.b
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=f.be(c.gb9(c))
g=b.c
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gao(c)
g=b.d
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gck()
g=b.e
C.b.O(g.a,g.d,m)
m=c.gcl()
g=b.f
C.b.O(g.a,g.d,m)
m=c.gcm()
g=b.r
C.b.O(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.ef
C.b.T(p.a,p.d,j)
p=a4.db
f=p.ga0(p)
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.F)(p),++d){c=p[d]
m=this.a.cE
if(e>=m.length)return H.d(m,e)
b=m[e]
m=c.gb9(c)
g=b.b
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gcA(c).kK()
g=b.c
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=f.be(c.gb9(c))
g=b.d
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gao(c)
g=b.e
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gkI()
g=b.f
C.b.O(g.a,g.d,m)
m=c.gkH()
g=b.r
C.b.O(g.a,g.d,m)
m=c.gck()
g=b.x
C.b.O(g.a,g.d,m)
m=c.gcl()
g=b.y
C.b.O(g.a,g.d,m)
m=c.gcm()
g=b.z
C.b.O(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.eg
C.b.T(p.a,p.d,j)
p=a4.db
f=p.ga0(p)
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.F)(p),++d){c=p[d]
g=this.a.cF
if(e>=g.length)return H.d(g,e)
b=g[e]
g=c.gbb()
H.l(k,"$ib",m,"$ab")
if(!C.a.aN(k,g)){g.sb3(0,k.length)
C.a.h(k,g)}g=c.gcA(c)
a=b.d
C.b.v(a.a,a.d,g.a,g.b,g.c)
g=c.gbK()
a=b.b
C.b.v(a.a,a.d,g.a,g.b,g.c)
g=c.gbH(c)
a=b.c
C.b.v(a.a,a.d,g.a,g.b,g.c)
g=f.cZ(c.gcA(c))
a=g.a
a0=g.b
a1=g.c
if(typeof a1!=="number")return a1.m()
a1=g.w(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.v(a0.a,a0.d,a,g,a1)
a1=c.gao(c)
g=b.f
C.b.v(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gbb()
g=a1.gb4(a1)
if(!g){g=b.x
C.b.T(g.a,g.d,1)}else{g=b.r
a=a1.gb4(a1)
a0=g.a
g=g.d
if(!a)C.b.T(a0,g,0)
else C.b.T(a0,g,a1.gb3(a1))
g=b.x
C.b.T(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.eh
C.b.T(p.a,p.d,j)
p=a4.db
f=p.ga0(p)
for(p=this.dx.y,n=p.length,m=[P.u],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.F)(p),++d){c=p[d]
a=this.a.cG
if(e>=a.length)return H.d(a,e)
b=a[e]
a=c.gbb()
H.l(k,"$ib",g,"$ab")
if(!C.a.aN(k,a)){a.sb3(0,k.length)
C.a.h(k,a)}a2=f.m(0,c.ga0(c))
a=c.ga0(c)
a0=$.cu
if(a0==null){a0=new V.a_(0,0,0)
$.cu=a0}a0=a.be(a0)
a=b.b
C.b.v(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cu
if(a==null){a=new V.a_(0,0,0)
$.cu=a}a=a2.be(a)
a0=b.c
C.b.v(a0.a,a0.d,a.a,a.b,a.c)
a=a2.es(0)
a0=b.d
h=new Float32Array(H.c1(H.l(new V.dB(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).af(0,!0),"$ib",m,"$ab")))
C.b.eO(a0.a,a0.d,!1,h)
a0=c.gao(c)
a=b.e
C.b.v(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gbb()
a=a0.gb4(a0)
if(!a){a=b.r
C.b.T(a.a,a.d,1)}else{a=b.f
a1=a0.gb4(a0)
a3=a.a
a=a.d
if(!a1)C.b.T(a3,a,0)
else C.b.T(a3,a,a0.gb3(a0))
a=b.r
C.b.T(a.a,a.d,0)}a=c.gck()
a0=b.x
C.b.O(a0.a,a0.d,a)
a=c.gcl()
a0=b.y
C.b.O(a0.a,a0.d,a)
a=c.gcm()
a0=b.z
C.b.O(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.ei
C.b.T(p.a,p.d,j)
p=a4.db
f=p.ga0(p)
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.F)(p),++d){c=p[d]
m=this.a.cH
if(e>=m.length)return H.d(m,e)
b=m[e]
m=c.gbb()
H.l(k,"$ib",u,"$ab")
if(!C.a.aN(k,m)){m.sb3(0,k.length)
C.a.h(k,m)}m=c.gb9(c)
g=b.b
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gcA(c)
g=b.c
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gbK()
g=b.d
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gbH(c)
g=b.e
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=f.be(c.gb9(c))
g=b.f
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gbb()
g=m.gb4(m)
if(!g){m=b.x
C.b.T(m.a,m.d,1)}else{g=b.r
a=m.gb4(m)
a0=g.a
g=g.d
if(!a)C.b.T(a0,g,0)
else C.b.T(a0,g,m.gb3(m))
m=b.x
C.b.T(m.a,m.d,0)}m=c.gao(c)
g=b.y
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gkL()
g=b.z
C.b.O(g.a,g.d,m)
m=c.gkM()
g=b.Q
C.b.O(g.a,g.d,m)
m=c.gck()
g=b.ch
C.b.O(g.a,g.d,m)
m=c.gcl()
g=b.cx
C.b.O(g.a,g.d,m)
m=c.gcm()
g=b.cy
C.b.O(g.a,g.d,m);++e}}}switch(r.f){case C.d:break
case C.j:break
case C.h:this.W(k,this.Q.d)
u=this.a
p=this.Q.d
u.ah(u.e3,u.bv,p)
break
case C.i:this.W(k,this.Q.e)
u=this.a
p=this.Q.e
u.ac(u.e4,u.bv,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db
p=p.ga0(p).es(0)
a4.Q=p}u=u.id
u.toString
u.al(p.af(0,!0))}if(r.dy){this.W(k,this.ch)
u=this.a
p=this.ch
u.ac(u.e5,u.e6,p)
switch(r.r){case C.d:break
case C.j:u=this.a
p=this.cx.f
u=u.bw
u.toString
n=p.a
m=p.b
p=p.c
C.b.v(u.a,u.d,n,m,p)
break
case C.h:this.W(k,this.cx.d)
u=this.a
p=this.cx.d
u.ah(u.e7,u.bx,p)
p=this.a
u=this.cx.f
p=p.bw
p.toString
n=u.a
m=u.b
u=u.c
C.b.v(p.a,p.d,n,m,u)
break
case C.i:this.W(k,this.cx.e)
u=this.a
p=this.cx.e
u.ac(u.e8,u.bx,p)
p=this.a
u=this.cx.f
p=p.bw
p.toString
n=u.a
m=u.b
u=u.c
C.b.v(p.a,p.d,n,m,u)
break}switch(r.x){case C.d:break
case C.j:u=this.a
p=this.cy.f
u=u.bz
u.toString
n=p.a
m=p.b
p=p.c
C.b.v(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.by
C.b.O(p.a,p.d,m)
break
case C.h:this.W(k,this.cy.d)
u=this.a
p=this.cy.d
u.ah(u.e9,u.bA,p)
p=this.a
u=this.cy.f
p=p.bz
p.toString
n=u.a
m=u.b
u=u.c
C.b.v(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.by
C.b.O(u.a,u.d,m)
break
case C.i:this.W(k,this.cy.e)
u=this.a
p=this.cy.e
u.ac(u.ea,u.bA,p)
p=this.a
u=this.cy.f
p=p.bz
p.toString
n=u.a
m=u.b
u=u.c
C.b.v(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.by
C.b.O(u.a,u.d,m)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.j:u=this.a
n=this.db.f
u=u.bB
C.b.O(u.a,u.d,n)
break
case C.h:this.W(k,this.db.d)
u=this.a
n=this.db.d
u.ah(u.eb,u.bC,n)
n=this.a
u=this.db.f
n=n.bB
C.b.O(n.a,n.d,u)
break
case C.i:this.W(k,this.db.e)
u=this.a
n=this.db.e
u.ac(u.ec,u.bC,n)
n=this.a
u=this.db.f
n=n.bB
C.b.O(n.a,n.d,u)
break}C.b.cB(o,3042)
C.b.jb(o,770,771)}for(i=0;i<k.length;++i)k[i].bl(a4)
u=a5.e
u.bl(a4)
u.aQ(a4)
u.eN(a4)
if(p)C.b.js(o,3042)
for(i=0;i<k.length;++i)k[i].eN(a4)
u=this.a
u.toString
C.b.eR(o,null)
u.x.jt()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dk().ai},
sfC:function(a){this.e=H.l(a,"$ia1",[V.al],"$aa1")}}
O.h8.prototype={}
O.dA.prototype={
aJ:function(){}}
O.h9.prototype={}
O.b0.prototype={
dK:function(a){var u,t
if(!J.Q(this.f,a)){u=this.f
this.f=a
t=new D.O(this.b+".color",u,a,this,[V.a2])
t.b=!0
this.a.ab(t)}},
aJ:function(){this.f8()
this.dK(new V.a2(1,1,1))},
sao:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aJ()
u=this.a
u.a=null
u.ab(null)}this.dK(b)}}
O.hb.prototype={
ii:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.P().a)){this.ch=a
u=new D.O(this.b+".refraction",u,a,this,[P.u])
u.b=!0
this.a.ab(u)}},
aJ:function(){this.bR()
this.ii(1)}}
O.hc.prototype={
cd:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.P().a)){this.ch=a
u=new D.O(this.b+".shininess",u,a,this,[P.u])
u.b=!0
this.a.ab(u)}},
aJ:function(){this.bR()
this.cd(100)}}
O.c_.prototype={}
T.cz.prototype={}
T.i4.prototype={}
T.i8.prototype={
gB:function(){var u=this.y
if(u==null){u=D.R()
this.y=u}return u}}
T.i9.prototype={
jQ:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.bm(u,3553,t)
C.b.bI(u,3553,10242,33071)
C.b.bI(u,3553,10243,33071)
C.b.bI(u,3553,10241,9729)
C.b.bI(u,3553,10240,9729)
C.b.bm(u,3553,null);++this.d
s=W.lq(null,a,null)
r=new T.i8()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.o
W.a7(s,"load",H.m(new T.ia(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
jP:function(a){return this.jQ(a,!1,!1,!1,!1)},
ie:function(a,b,c){var u,t,s,r
b=V.l9(b,2)
u=V.l9(a.width,2)
t=V.l9(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kF(null,null)
s.width=u
s.height=t
r=H.f(C.n.eX(s,"2d"),"$ibL")
r.imageSmoothingEnabled=!1;(r&&C.y).jv(r,a,0,0,s.width,s.height)
return P.oi(C.y.fX(r,0,0,s.width,s.height))}}}
T.ia.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.ie(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.bm(t,3553,this.e)
C.b.kd(t,37440,this.f?1:0)
C.b.kp(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.eT(t,3553)
C.b.bm(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.jy()}++s.e},
$S:11}
T.ib.prototype={}
V.f7.prototype={
aP:function(a,b){return!0},
i:function(a){return"all"},
$ibk:1}
V.bk.prototype={}
V.dy.prototype={
aP:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)if(u[s].aP(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.F)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saw:function(a){this.a=H.l(a,"$ib",[V.bk],"$ab")},
$ibk:1}
V.bn.prototype={
aP:function(a,b){return!this.f7(0,b)},
i:function(a){return"!["+this.d6(0)+"]"}}
V.hJ.prototype={
fc:function(a){var u,t
if(a.a.length<=0)throw H.c(P.w("May not create a SetMatcher with zero characters."))
u=new H.aH([P.p,P.ac])
for(t=new H.dw(a,a.gk(a),0,[H.aC(a,"x",0)]);t.E();)u.l(0,t.d,!0)
this.sig(u)},
aP:function(a,b){return this.a.bn(0,b)},
i:function(a){var u=this.a
return P.dR(u.gaq(u),0,null)},
sig:function(a){this.a=H.l(a,"$iC",[P.p,P.ac],"$aC")},
$ibk:1}
V.cx.prototype={
D:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cB(this.a.P(0,b))
r.saw(H.e([],[V.bk]))
r.c=!1
C.a.h(this.c,r)
return r},
jC:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
if(r.aP(0,a))return r}return},
i:function(a){return this.b},
siC:function(a){this.c=H.l(a,"$ib",[V.cB],"$ab")}}
V.e_.prototype={
i:function(a){var u,t
u=H.ms(this.b,"\n","\\n")
t=H.ms(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cA.prototype={
i:function(a){return this.b},
si8:function(a){var u=P.h
this.c=H.l(a,"$iC",[u,u],"$aC")}}
V.ie.prototype={
P:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cx(this,b)
u.siC(H.e([],[V.cB]))
u.d=null
this.a.l(0,b,u)}return u},
bd:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cA(this,a)
t=P.h
u.si8(new H.aH([t,t]))
this.b.l(0,a,u)}return u},
kv:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.e([],[V.e_])
t=this.c
s=[P.p]
r=H.e([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.G(a,o)
m=t.jC(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dR(r,0,null)
throw H.c(P.w("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.e([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dR(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.e_(j==null?k.b:j,l,o)}++o}}},
sir:function(a){this.a=H.l(a,"$iC",[P.h,V.cx],"$aC")},
siv:function(a){this.b=H.l(a,"$iC",[P.h,V.cA],"$aC")}}
V.cB.prototype={
i:function(a){return this.b.b+": "+this.d6(0)}}
X.dd.prototype={$ibm:1}
X.fN.prototype={
gB:function(){var u=this.x
if(u==null){u=D.R()
this.x=u}return u}}
X.dH.prototype={
gB:function(){var u=this.f
if(u==null){u=D.R()
this.f=u}return u},
aH:function(a){var u
H.f(a,"$iz")
u=this.f
if(u!=null)u.H(a)},
fu:function(){return this.aH(null)},
sb6:function(a){var u,t
if(!J.Q(this.b,a)){u=this.b
if(u!=null)u.gB().L(0,this.gda())
t=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gda())
u=new D.O("mover",t,this.b,this,[U.aa])
u.b=!0
this.aH(u)}},
$ibm:1,
$idd:1}
X.dU.prototype={}
V.kv.prototype={
$1:function(a){H.f(a,"$ib4")
P.as(C.e.eM(this.a.gjG(),2)+" fps")},
$S:47}
V.hy.prototype={
cj:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.m(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.iD().gba().j(0,H.n(u))
if(t==null)if(d){c.$0()
this.aY(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.cb(this.c).h(0,q)
o=W.n2("radio")
o.checked=s
o.name=u
u=W.o
W.a7(o,"change",H.m(new V.hz(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.C.X(q,o)
n=r.createElement("span")
n.textContent=b
C.C.X(q,n)
J.cb(this.c).h(0,r.createElement("br"))},
a1:function(a,b,c){return this.cj(a,b,c,!1)},
aY:function(a){var u,t,s,r,q
u=P.iD()
t=P.h
s=P.lu(u.gba(),t,t)
s.l(0,this.a,a)
r=u.cV(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.z).dH(t,new P.eK([],[]).bL(""),"",q)}}
V.hz.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.aY(this.d)}},
$S:11}
V.hN.prototype={
fe:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.x).X(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.x.X(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.X(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.X(q,p)}o=u.createElement("div")
this.a=o
C.l.X(q,o)
this.b=null
o=W.o
W.a7(u,"scroll",H.m(new V.hP(s),{func:1,ret:-1,args:[o]}),!1,o)},
dP:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.h],"$ab")
this.il()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.kv(C.a.jM(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.F)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.X(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.X(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.X(t,o)
break
case"Link":n=p.b
if(H.oJ(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.J(m[1])
l.textContent=H.J(m[0])
C.l.X(t,l)}else{k=P.jI(C.a_,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.n(k)
l.textContent=n
C.l.X(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.X(t,o)
break}}C.l.X(this.a,t)},
j3:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[P.h],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.l.X(this.a,t)
r=C.a4.fZ(t,-1)
s=H.f((r&&C.H).dv(r,-1),"$ib3").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto"
for(q=0;q<3;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.f(C.H.dv(r,-1),"$ib3")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.a3).X(o,p)}},
il:function(){var u,t,s,r
if(this.b!=null)return
u=new V.ie()
t=P.h
u.sir(new H.aH([t,V.cx]))
u.siv(new H.aH([t,V.cA]))
u.c=null
u.c=u.P(0,"Start")
t=u.P(0,"Start").D(0,"Bold")
s=V.ag(new H.a5("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"Bold").D(0,"Bold")
s=new V.bn()
r=[V.bk]
s.saw(H.e([],r))
C.a.h(t.a,s)
t=V.ag(new H.a5("*"))
C.a.h(s.a,t)
t=u.P(0,"Bold").D(0,"BoldEnd")
s=V.ag(new H.a5("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"Start").D(0,"Italic")
s=V.ag(new H.a5("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"Italic").D(0,"Italic")
s=new V.bn()
s.saw(H.e([],r))
C.a.h(t.a,s)
t=V.ag(new H.a5("_"))
C.a.h(s.a,t)
t=u.P(0,"Italic").D(0,"ItalicEnd")
s=V.ag(new H.a5("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"Start").D(0,"Code")
s=V.ag(new H.a5("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"Code").D(0,"Code")
s=new V.bn()
s.saw(H.e([],r))
C.a.h(t.a,s)
t=V.ag(new H.a5("`"))
C.a.h(s.a,t)
t=u.P(0,"Code").D(0,"CodeEnd")
s=V.ag(new H.a5("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"Start").D(0,"LinkHead")
s=V.ag(new H.a5("["))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"LinkHead").D(0,"LinkTail")
s=V.ag(new H.a5("|"))
C.a.h(t.a,s)
s=u.P(0,"LinkHead").D(0,"LinkEnd")
t=V.ag(new H.a5("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,"LinkHead").D(0,"LinkHead")
t=new V.bn()
t.saw(H.e([],r))
C.a.h(s.a,t)
s=V.ag(new H.a5("|]"))
C.a.h(t.a,s)
s=u.P(0,"LinkTail").D(0,"LinkEnd")
t=V.ag(new H.a5("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,"LinkTail").D(0,"LinkTail")
t=new V.bn()
t.saw(H.e([],r))
C.a.h(s.a,t)
s=V.ag(new H.a5("|]"))
C.a.h(t.a,s)
C.a.h(u.P(0,"Start").D(0,"Other").a,new V.f7())
s=u.P(0,"Other").D(0,"Other")
t=new V.bn()
t.saw(H.e([],r))
C.a.h(s.a,t)
s=V.ag(new H.a5("*_`["))
C.a.h(t.a,s)
s=u.P(0,"BoldEnd")
s.d=s.a.bd("Bold")
s=u.P(0,"ItalicEnd")
s.d=s.a.bd("Italic")
s=u.P(0,"CodeEnd")
s.d=s.a.bd("Code")
s=u.P(0,"LinkEnd")
s.d=s.a.bd("Link")
s=u.P(0,"Other")
s.d=s.a.bd("Other")
this.b=u}}
V.hP.prototype={
$1:function(a){P.lK(C.u,new V.hO(this.a))},
$S:11}
V.hO.prototype={
$0:function(){var u,t,s
u=C.e.aj(document.documentElement.scrollTop)
t=this.a.style
s=H.n(-0.01*u)+"px"
t.top=s},
$S:0}
V.i5.prototype={
a1:function(a,b,c){var u,t,s,r,q
u=W.lq(null,null,null)
u.src=b
u.width=64
u.height=64
t=u.style
t.border="solid 2px white"
t=J.cb(this.c)
s=t.gk(t)
t=W.a4
W.a7(u,"click",H.m(new V.i7(this,u,b,s),{func:1,ret:-1,args:[t]}),!1,t)
J.cb(this.c).h(0,u)
J.cb(this.c).h(0,document.createElement("br"))
r=P.iD().gba().j(0,H.n(this.a))
if(r==null){this.aY(s)
q=c}else q=P.d1(r,null,null)===s
if(q)u.click()},
h:function(a,b){return this.a1(a,b,!1)},
aY:function(a){var u,t,s,r,q
u=P.iD()
t=P.h
s=P.lu(u.gba(),t,t)
s.l(0,this.a,""+a)
r=u.cV(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.z).dH(t,new P.eK([],[]).bL(""),"",q)}}
V.i7.prototype={
$1:function(a){var u,t
H.f(a,"$ia4")
u=this.a
t=J.cb(u.c)
t.I(t,new V.i6())
t=this.b.style
t.border="solid 2px black"
u.d.$1(this.c)
u.aY(this.d)},
$S:48}
V.i6.prototype={
$1:function(a){var u
H.f(a,"$iW")
if(!!J.V(a).$ibS){u=a.style
u.border="solid 2px white"}},
$S:49}
K.kb.prototype={
$0:function(){var u,t,s,r
u=this.a
if(u.a!=null&&u.b.length!==0){t=this.b
s=t.f.jP(u.b)
r=s.y
if(r==null){r=D.R()
s.y=r}r.h(0,new K.ka(u,t,s,this.c))}},
$S:0}
K.ka.prototype={
$1:function(a){var u,t,s,r,q,p
H.f(a,"$iz")
u=this.b.f
t=this.c
s=t.r
r=t.x
u=u.a
C.b.cp(u,36160,u.createFramebuffer())
C.b.jH(u,36160,36064,3553,t.b,0)
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.t(r)
q=new Uint8Array(s*r*4)
C.b.i4(u,0,0,s,r,6408,5121,q)
C.b.cp(u,36160,null)
u=this.a
t=u.a
p=F.kP()
p.bE(t)
p.a5()
p.j8(new T.ib(q,s,r),u.c)
u=$.aS()
u.toString
p.ky(new Z.aR($.lb().a&~u.a))
p.kw(!1)
p.a5()
this.d.sd4(0,p)},
$S:9}
K.kc.prototype={
$1:function(a){this.a.b=a
this.b.$0()},
$S:21}
K.kd.prototype={
$1:function(a){this.a.a=a
this.b.$0()},
$S:50}
K.kl.prototype={
$0:function(){this.a.$1(F.mi(50,null,null,50))},
$S:0}
K.km.prototype={
$0:function(){this.a.$1(F.oj(1,!1,!1,80,80,1))},
$S:0}
K.kn.prototype={
$0:function(){this.a.$1(F.oz(80,80))},
$S:0}
K.ko.prototype={
$0:function(){this.a.$1(F.oI(50,null,1,50))},
$S:0}
K.kp.prototype={
$0:function(){this.a.$1(F.oL(50,1,50,0.5))},
$S:0}
K.kq.prototype={
$0:function(){this.a.$1(F.l6(50,null,50))},
$S:0}
K.kr.prototype={
$0:function(){this.a.$1(F.l6(100,null,100))},
$S:0}
K.ks.prototype={
$0:function(){this.a.$1(F.l6(150,null,150))},
$S:0}
K.ke.prototype={
$1:function(a){this.a.c=a
this.b.$0()},
$S:51}
K.kf.prototype={
$0:function(){this.a.$1(0.1)},
$S:0}
K.kg.prototype={
$0:function(){this.a.$1(0.2)},
$S:0}
K.kh.prototype={
$0:function(){this.a.$1(0.4)},
$S:0}
K.ki.prototype={
$0:function(){this.a.$1(0.6)},
$S:0}
K.kj.prototype={
$0:function(){this.a.$1(0.8)},
$S:0}
K.kk.prototype={
$0:function(){this.a.$1(1)},
$S:0};(function aliases(){var u=J.a.prototype
u.f5=u.i
u=J.ds.prototype
u.f6=u.i
u=O.dA.prototype
u.f8=u.aJ
u=O.b0.prototype
u.bR=u.aJ
u=V.dy.prototype
u.f7=u.aP
u.d6=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"oc","nJ",14)
u(P,"od","nK",14)
u(P,"oe","nL",14)
t(P,"mg","ob",3)
var n
s(n=E.ak.prototype,"geA",0,0,null,["$1","$0"],["eB","k_"],1,0)
s(n,"geC",0,0,null,["$1","$0"],["eD","k0"],1,0)
s(n,"gey",0,0,null,["$1","$0"],["ez","jZ"],1,0)
s(n,"gew",0,0,null,["$1","$0"],["ex","jW"],1,0)
r(n,"gjU","jV",10)
r(n,"gjX","jY",10)
s(n=E.dZ.prototype,"gd7",0,0,null,["$1","$0"],["d9","d8"],1,0)
q(n,"gkk","eI",3)
p(n=X.e5.prototype,"ghx","hy",15)
p(n,"ghj","hk",15)
p(n,"ghr","hs",5)
p(n,"ghB","hC",23)
p(n,"ghz","hA",23)
p(n,"ghF","hG",5)
p(n,"ghJ","hK",5)
p(n,"ghv","hw",5)
p(n,"ghH","hI",5)
p(n,"ght","hu",5)
p(n,"ghL","hM",44)
p(n,"ghN","hO",15)
p(n,"gi_","i0",13)
p(n,"ghW","hX",13)
p(n,"ghY","hZ",13)
s(D.bv.prototype,"gfi",0,0,null,["$1","$0"],["at","fj"],1,0)
s(n=D.dv.prototype,"gdC",0,0,null,["$1","$0"],["dD","hD"],1,0)
p(n,"ghQ","hR",36)
r(n,"ghd","he",20)
r(n,"ghU","hV",20)
o(V.S.prototype,"gk","cL",19)
o(V.I.prototype,"gk","cL",19)
s(n=U.cl.prototype,"gaE",0,0,null,["$1","$0"],["R","a4"],1,0)
r(n,"ghb","hc",18)
r(n,"ghS","hT",18)
s(n=U.e6.prototype,"gaE",0,0,null,["$1","$0"],["R","a4"],1,0)
p(n,"gc0","c1",2)
p(n,"gc2","c3",2)
p(n,"gc4","c5",2)
s(n=U.e7.prototype,"gaE",0,0,null,["$1","$0"],["R","a4"],1,0)
p(n,"gc0","c1",2)
p(n,"gc2","c3",2)
p(n,"gc4","c5",2)
p(n,"gh5","h6",2)
p(n,"gh7","h8",2)
p(n,"giA","iB",2)
p(n,"giy","iz",2)
p(n,"giw","ix",2)
p(U.e8.prototype,"gh9","ha",2)
s(n=M.di.prototype,"gaF",0,0,null,["$1","$0"],["aG","fk"],1,0)
r(n,"ghn","ho",10)
r(n,"ghp","hq",10)
s(n=O.dz.prototype,"ghl",0,0,null,["$1","$0"],["ab","hm"],1,0)
s(n,"gib",0,0,null,["$1","$0"],["dI","ic"],1,0)
r(n,"ghf","hg",16)
r(n,"ghh","hi",16)
s(X.dH.prototype,"gda",0,0,null,["$1","$0"],["aH","fu"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.M,null)
s(P.M,[H.kL,J.a,J.aq,P.ep,P.j,H.dw,P.aY,H.bQ,H.cJ,H.fn,H.hA,H.ik,P.bw,H.ce,H.eG,P.af,H.fW,H.fY,H.fR,P.eN,P.b8,P.aA,P.ea,P.hX,P.cy,P.hY,P.b4,P.ai,P.jM,P.jv,P.cN,P.jp,P.x,P.jD,P.h4,P.bM,P.jL,P.jJ,P.ac,P.aj,P.a0,P.aX,P.ht,P.dP,P.ei,P.fM,P.b,P.C,P.D,P.ar,P.h,P.am,P.c0,P.iB,P.jw,W.fq,W.B,W.dk,P.jy,P.eS,P.jq,P.N,O.a1,O.cn,E.fh,E.ak,E.hB,E.dZ,Z.e9,Z.iZ,Z.db,Z.bx,Z.aR,D.fk,D.bP,D.z,X.dc,X.dt,X.fT,X.h1,X.au,X.hj,X.ig,X.e5,D.bv,D.a6,D.dI,D.dO,D.dW,D.dX,D.dY,V.a2,V.bf,V.fC,V.dB,V.al,V.ad,V.a_,V.bo,V.dM,V.S,V.I,U.e6,U.e7,U.e8,M.di,A.d7,A.fa,A.ha,A.cC,A.cG,A.cE,A.cH,A.cF,A.cI,A.bN,A.e1,A.iv,F.a9,F.fG,F.bj,F.fV,F.bA,F.bZ,F.hK,F.hL,F.hM,F.ap,F.iM,F.iN,F.iQ,F.iS,F.iT,F.iU,O.c_,O.dA,T.i9,T.ib,V.f7,V.bk,V.dy,V.hJ,V.cx,V.e_,V.cA,V.ie,X.dd,X.dU,X.dH,V.hy,V.hN,V.i5])
s(J.a,[J.fQ,J.dr,J.ds,J.aG,J.by,J.bh,H.cq,H.bz,W.i,W.f6,W.bJ,W.bL,W.aV,W.aW,W.T,W.ec,W.fu,W.fv,W.ee,W.dh,W.eg,W.fx,W.o,W.ej,W.aF,W.dm,W.el,W.bg,W.h0,W.hd,W.eq,W.er,W.aI,W.es,W.ev,W.aJ,W.ez,W.eB,W.aL,W.eC,W.aM,W.eH,W.ax,W.eL,W.id,W.aO,W.eO,W.ii,W.iH,W.eU,W.eW,W.eY,W.f_,W.f1,P.b_,P.en,P.b2,P.ex,P.hx,P.eI,P.b5,P.eQ,P.fb,P.eb,P.d9,P.dl,P.dK,P.bY,P.dN,P.dV,P.e2,P.eE])
s(J.ds,[J.hu,J.bD,J.bi])
t(J.kK,J.aG)
s(J.by,[J.dq,J.dp])
t(P.h_,P.ep)
s(P.h_,[H.e3,W.j6,W.j5,P.fI])
t(H.a5,H.e3)
s(P.j,[H.fA,H.h5,H.j_])
s(P.aY,[H.h6,H.j0])
t(H.fo,H.fn)
s(P.bw,[H.hq,H.fS,H.iz,H.im,H.fj,H.hH,P.dG,P.aT,P.iA,P.ix,P.dQ,P.fm,P.ft])
s(H.ce,[H.kz,H.i1,H.k4,H.k5,H.k6,P.j2,P.j1,P.j3,P.j4,P.jC,P.jB,P.jc,P.jg,P.jd,P.je,P.jf,P.jj,P.jk,P.ji,P.jh,P.hZ,P.i_,P.jU,P.jt,P.js,P.ju,P.fZ,P.h3,P.jK,P.fy,P.fz,P.iG,P.iC,P.iE,P.iF,P.jE,P.jF,P.jH,P.jG,P.jQ,P.jP,P.jR,P.jS,W.hf,W.hh,W.hG,W.hW,W.jb,P.jz,P.jW,P.fJ,P.fK,P.fd,E.hC,E.hD,E.hE,E.ic,D.fE,D.fF,F.jN,F.jX,F.jZ,F.k8,F.kw,F.kx,F.ky,F.jY,F.k1,F.k2,F.iW,F.iV,F.iO,F.iP,T.ia,V.kv,V.hz,V.hP,V.hO,V.i7,V.i6,K.kb,K.ka,K.kc,K.kd,K.kl,K.km,K.kn,K.ko,K.kp,K.kq,K.kr,K.ks,K.ke,K.kf,K.kg,K.kh,K.ki,K.kj,K.kk])
s(H.i1,[H.hU,H.cc])
t(P.h2,P.af)
t(H.aH,P.h2)
t(H.fX,H.fA)
t(H.dD,H.bz)
s(H.dD,[H.cO,H.cQ])
t(H.cP,H.cO)
t(H.cr,H.cP)
t(H.cR,H.cQ)
t(H.dE,H.cR)
s(H.dE,[H.hk,H.hl,H.hm,H.hn,H.ho,H.dF,H.cs])
t(P.jr,P.jM)
t(P.jo,P.jv)
t(P.eT,P.h4)
t(P.e4,P.eT)
s(P.bM,[P.ff,P.fB])
t(P.bO,P.hY)
s(P.bO,[P.fg,P.iK,P.iJ])
t(P.iI,P.fB)
s(P.a0,[P.u,P.p])
s(P.aT,[P.bX,P.fO])
t(P.j8,P.c0)
s(W.i,[W.G,W.fH,W.aK,W.cS,W.aN,W.ay,W.cU,W.iY,W.cL,P.fe,P.bI])
s(W.G,[W.W,W.bt,W.ci])
s(W.W,[W.y,P.q])
s(W.y,[W.f8,W.f9,W.d8,W.bK,W.ch,W.fL,W.bS,W.cm,W.du,W.co,W.hI,W.b3,W.dS,W.dT])
s(W.aV,[W.cf,W.fr,W.fs])
t(W.fp,W.aW)
t(W.cg,W.ec)
t(W.ef,W.ee)
t(W.dg,W.ef)
t(W.eh,W.eg)
t(W.fw,W.eh)
t(W.aw,W.bJ)
t(W.ek,W.ej)
t(W.cj,W.ek)
t(W.em,W.el)
t(W.bR,W.em)
t(W.dn,W.ci)
t(W.bC,W.o)
s(W.bC,[W.aZ,W.a4,W.aP])
t(W.he,W.eq)
t(W.hg,W.er)
t(W.et,W.es)
t(W.hi,W.et)
t(W.ew,W.ev)
t(W.ct,W.ew)
t(W.eA,W.ez)
t(W.hv,W.eA)
t(W.hF,W.eB)
t(W.cT,W.cS)
t(W.hR,W.cT)
t(W.eD,W.eC)
t(W.hS,W.eD)
t(W.hV,W.eH)
t(W.eM,W.eL)
t(W.i2,W.eM)
t(W.cV,W.cU)
t(W.i3,W.cV)
t(W.eP,W.eO)
t(W.ih,W.eP)
t(W.iX,W.co)
t(W.b7,W.a4)
t(W.eV,W.eU)
t(W.j7,W.eV)
t(W.ed,W.dh)
t(W.eX,W.eW)
t(W.jl,W.eX)
t(W.eZ,W.eY)
t(W.eu,W.eZ)
t(W.f0,W.f_)
t(W.jx,W.f0)
t(W.f2,W.f1)
t(W.jA,W.f2)
t(W.j9,P.hX)
t(W.kW,W.j9)
t(W.ja,P.cy)
t(P.eK,P.jy)
t(P.a8,P.jq)
t(P.eo,P.en)
t(P.fU,P.eo)
t(P.ey,P.ex)
t(P.hr,P.ey)
t(P.eJ,P.eI)
t(P.i0,P.eJ)
t(P.eR,P.eQ)
t(P.ij,P.eR)
t(P.fc,P.eb)
t(P.hs,P.bI)
t(P.eF,P.eE)
t(P.hT,P.eF)
s(E.fh,[Z.da,A.cw,T.cz])
s(D.z,[D.bT,D.bU,D.O,X.hw])
s(X.hw,[X.dx,X.bl,X.cp,X.e0])
s(O.a1,[D.dv,U.cl])
s(D.fk,[U.fl,U.aa])
t(U.de,U.aa)
t(A.h7,A.cw)
s(A.e1,[A.L,A.ir,A.is,A.iu,A.ip,A.Z,A.iq,A.K,A.it,A.iw,A.cD,A.av,A.an,A.ao])
t(F.hQ,F.fG)
t(F.io,F.fV)
t(F.iR,F.iS)
t(F.hp,F.iT)
t(O.dz,O.c_)
s(O.dA,[O.h8,O.h9,O.b0])
s(O.b0,[O.hb,O.hc])
t(T.i4,T.cz)
t(T.i8,T.i4)
s(V.dy,[V.bn,V.cB])
t(X.fN,X.dU)
u(H.e3,H.cJ)
u(H.cO,P.x)
u(H.cP,H.bQ)
u(H.cQ,P.x)
u(H.cR,H.bQ)
u(P.ep,P.x)
u(P.eT,P.jD)
u(W.ec,W.fq)
u(W.ee,P.x)
u(W.ef,W.B)
u(W.eg,P.x)
u(W.eh,W.B)
u(W.ej,P.x)
u(W.ek,W.B)
u(W.el,P.x)
u(W.em,W.B)
u(W.eq,P.af)
u(W.er,P.af)
u(W.es,P.x)
u(W.et,W.B)
u(W.ev,P.x)
u(W.ew,W.B)
u(W.ez,P.x)
u(W.eA,W.B)
u(W.eB,P.af)
u(W.cS,P.x)
u(W.cT,W.B)
u(W.eC,P.x)
u(W.eD,W.B)
u(W.eH,P.af)
u(W.eL,P.x)
u(W.eM,W.B)
u(W.cU,P.x)
u(W.cV,W.B)
u(W.eO,P.x)
u(W.eP,W.B)
u(W.eU,P.x)
u(W.eV,W.B)
u(W.eW,P.x)
u(W.eX,W.B)
u(W.eY,P.x)
u(W.eZ,W.B)
u(W.f_,P.x)
u(W.f0,W.B)
u(W.f1,P.x)
u(W.f2,W.B)
u(P.en,P.x)
u(P.eo,W.B)
u(P.ex,P.x)
u(P.ey,W.B)
u(P.eI,P.x)
u(P.eJ,W.B)
u(P.eQ,P.x)
u(P.eR,W.B)
u(P.eb,P.af)
u(P.eE,P.x)
u(P.eF,W.B)})();(function constants(){var u=hunkHelpers.makeConstList
C.x=W.d8.prototype
C.n=W.bK.prototype
C.y=W.bL.prototype
C.l=W.ch.prototype
C.z=W.dm.prototype
C.v=W.dn.prototype
C.P=J.a.prototype
C.a=J.aG.prototype
C.Q=J.dp.prototype
C.f=J.dq.prototype
C.o=J.dr.prototype
C.e=J.by.prototype
C.c=J.bh.prototype
C.X=J.bi.prototype
C.C=W.du.prototype
C.a2=W.ct.prototype
C.G=J.hu.prototype
C.b=P.bY.prototype
C.a3=W.b3.prototype
C.a4=W.dS.prototype
C.H=W.dT.prototype
C.w=J.bD.prototype
C.I=W.b7.prototype
C.J=W.cL.prototype
C.L=new P.fg(!1)
C.K=new P.ff(C.L)
C.M=new P.ht()
C.N=new P.iK()
C.k=new P.jr()
C.d=new A.bN(0,"ColorSourceType.None")
C.j=new A.bN(1,"ColorSourceType.Solid")
C.h=new A.bN(2,"ColorSourceType.Texture2D")
C.i=new A.bN(3,"ColorSourceType.TextureCube")
C.u=new P.aX(0)
C.O=new P.aX(5e6)
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
C.A=function(hooks) { return hooks; }

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
C.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.D=H.e(u([127,2047,65535,1114111]),[P.p])
C.p=H.e(u([0,0,32776,33792,1,10240,0,0]),[P.p])
C.q=H.e(u([0,0,65490,45055,65535,34815,65534,18431]),[P.p])
C.r=H.e(u([0,0,26624,1023,65534,2047,65534,2047]),[P.p])
C.Z=H.e(u([0,0,32722,12287,65534,34815,65534,18431]),[P.p])
C.a_=H.e(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.t=H.e(u([0,0,24576,1023,65534,34815,65534,18431]),[P.p])
C.E=H.e(u([0,0,32754,11263,65534,34815,65534,18431]),[P.p])
C.a0=H.e(u([0,0,32722,12287,65535,34815,65534,18431]),[P.p])
C.F=H.e(u([0,0,65490,12287,65535,34815,65534,18431]),[P.p])
C.Y=H.e(u([]),[P.h])
C.a1=new H.fo(0,{},C.Y,[P.h,P.h])
C.m=new P.iI(!1)})();(function staticFields(){$.aU=0
$.cd=null
$.lj=null
$.kZ=!1
$.ml=null
$.me=null
$.mr=null
$.k_=null
$.k7=null
$.l7=null
$.c2=null
$.cZ=null
$.d_=null
$.l_=!1
$.Y=C.k
$.lw=null
$.lA=null
$.cu=null
$.lG=null
$.lQ=null
$.lU=null
$.lS=null
$.lT=null
$.iL=null
$.lR=null
$.lz=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oR","mv",function(){return H.mk("_$dart_dartClosure")})
u($,"oS","la",function(){return H.mk("_$dart_js")})
u($,"oX","mw",function(){return H.b6(H.il({
toString:function(){return"$receiver$"}}))})
u($,"oY","mx",function(){return H.b6(H.il({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oZ","my",function(){return H.b6(H.il(null))})
u($,"p_","mz",function(){return H.b6(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p2","mC",function(){return H.b6(H.il(void 0))})
u($,"p3","mD",function(){return H.b6(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p1","mB",function(){return H.b6(H.lM(null))})
u($,"p0","mA",function(){return H.b6(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"p5","mF",function(){return H.b6(H.lM(void 0))})
u($,"p4","mE",function(){return H.b6(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pl","ld",function(){return P.nI()})
u($,"pp","d4",function(){return[]})
u($,"p7","mG",function(){return P.nF()})
u($,"pm","mI",function(){return H.ne(H.c1(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.p])))})
u($,"pn","mJ",function(){return P.nt("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"po","mK",function(){return P.o3()})
u($,"pe","mH",function(){return Z.az(0)})
u($,"p8","lb",function(){return Z.az(511)})
u($,"pg","bc",function(){return Z.az(1)})
u($,"pf","aS",function(){return Z.az(2)})
u($,"pa","bb",function(){return Z.az(4)})
u($,"ph","bd",function(){return Z.az(8)})
u($,"pi","be",function(){return Z.az(16)})
u($,"pb","d2",function(){return Z.az(32)})
u($,"pc","d3",function(){return Z.az(64)})
u($,"pd","lc",function(){return Z.az(96)})
u($,"pj","bG",function(){return Z.az(128)})
u($,"p9","ba",function(){return Z.az(256)})
u($,"oQ","mu",function(){return new V.fC(1e-9)})
u($,"oP","P",function(){return $.mu()})})()
var v={mangledGlobalNames:{p:"int",u:"double",a0:"num",h:"String",ac:"bool",D:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.D},{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:-1},{func:1,ret:P.D,args:[F.ap,P.u,P.u]},{func:1,ret:-1,args:[W.a4]},{func:1,ret:P.D,args:[F.a9]},{func:1,ret:P.D,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:P.D,args:[D.z]},{func:1,ret:-1,args:[P.p,[P.j,E.ak]]},{func:1,ret:P.D,args:[W.o]},{func:1,ret:P.u,args:[P.u,P.u]},{func:1,ret:-1,args:[W.aP]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[P.p,[P.j,V.al]]},{func:1,ret:P.h,args:[P.p]},{func:1,ret:-1,args:[P.p,[P.j,U.aa]]},{func:1,ret:P.u},{func:1,ret:-1,args:[P.p,[P.j,D.a6]]},{func:1,ret:P.D,args:[P.h]},{func:1,args:[,]},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:P.D,args:[,]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:W.W,args:[W.G]},{func:1,ret:P.ac,args:[W.G]},{func:1,ret:P.D,args:[P.a0]},{func:1,args:[W.o]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[P.p]},{func:1,ret:P.D,args:[P.h,,]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.ac,args:[[P.j,D.a6]]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.p]},{func:1,args:[,P.h]},{func:1,args:[P.h]},{func:1,ret:[P.C,P.h,P.h],args:[[P.C,P.h,P.h],P.h]},{func:1,ret:V.a_,args:[P.u]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:-1,args:[P.p,P.p]},{func:1,ret:P.D,args:[,],opt:[P.ar]},{func:1,ret:P.D,args:[P.b4]},{func:1,ret:P.D,args:[W.a4]},{func:1,ret:P.D,args:[W.W]},{func:1,ret:P.D,args:[F.bZ]},{func:1,ret:P.D,args:[P.u]},{func:1,ret:[P.aA,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cq,DataView:H.bz,ArrayBufferView:H.bz,Float32Array:H.cr,Float64Array:H.cr,Int16Array:H.hk,Int32Array:H.hl,Int8Array:H.hm,Uint16Array:H.hn,Uint32Array:H.ho,Uint8ClampedArray:H.dF,CanvasPixelArray:H.dF,Uint8Array:H.cs,HTMLBRElement:W.y,HTMLBaseElement:W.y,HTMLButtonElement:W.y,HTMLContentElement:W.y,HTMLDListElement:W.y,HTMLDataElement:W.y,HTMLDataListElement:W.y,HTMLDetailsElement:W.y,HTMLDialogElement:W.y,HTMLEmbedElement:W.y,HTMLFieldSetElement:W.y,HTMLHRElement:W.y,HTMLHeadElement:W.y,HTMLHeadingElement:W.y,HTMLHtmlElement:W.y,HTMLIFrameElement:W.y,HTMLLIElement:W.y,HTMLLegendElement:W.y,HTMLLinkElement:W.y,HTMLMapElement:W.y,HTMLMenuElement:W.y,HTMLMetaElement:W.y,HTMLMeterElement:W.y,HTMLModElement:W.y,HTMLOListElement:W.y,HTMLObjectElement:W.y,HTMLOptGroupElement:W.y,HTMLOptionElement:W.y,HTMLOutputElement:W.y,HTMLParagraphElement:W.y,HTMLParamElement:W.y,HTMLPictureElement:W.y,HTMLPreElement:W.y,HTMLProgressElement:W.y,HTMLQuoteElement:W.y,HTMLScriptElement:W.y,HTMLShadowElement:W.y,HTMLSlotElement:W.y,HTMLSourceElement:W.y,HTMLSpanElement:W.y,HTMLStyleElement:W.y,HTMLTableCaptionElement:W.y,HTMLTableColElement:W.y,HTMLTableSectionElement:W.y,HTMLTemplateElement:W.y,HTMLTextAreaElement:W.y,HTMLTimeElement:W.y,HTMLTitleElement:W.y,HTMLTrackElement:W.y,HTMLUListElement:W.y,HTMLUnknownElement:W.y,HTMLDirectoryElement:W.y,HTMLFontElement:W.y,HTMLFrameElement:W.y,HTMLFrameSetElement:W.y,HTMLMarqueeElement:W.y,HTMLElement:W.y,AccessibleNodeList:W.f6,HTMLAnchorElement:W.f8,HTMLAreaElement:W.f9,Blob:W.bJ,HTMLBodyElement:W.d8,HTMLCanvasElement:W.bK,CanvasRenderingContext2D:W.bL,CDATASection:W.bt,CharacterData:W.bt,Comment:W.bt,ProcessingInstruction:W.bt,Text:W.bt,CSSNumericValue:W.cf,CSSUnitValue:W.cf,CSSPerspective:W.fp,CSSCharsetRule:W.T,CSSConditionRule:W.T,CSSFontFaceRule:W.T,CSSGroupingRule:W.T,CSSImportRule:W.T,CSSKeyframeRule:W.T,MozCSSKeyframeRule:W.T,WebKitCSSKeyframeRule:W.T,CSSKeyframesRule:W.T,MozCSSKeyframesRule:W.T,WebKitCSSKeyframesRule:W.T,CSSMediaRule:W.T,CSSNamespaceRule:W.T,CSSPageRule:W.T,CSSRule:W.T,CSSStyleRule:W.T,CSSSupportsRule:W.T,CSSViewportRule:W.T,CSSStyleDeclaration:W.cg,MSStyleCSSProperties:W.cg,CSS2Properties:W.cg,CSSImageValue:W.aV,CSSKeywordValue:W.aV,CSSPositionValue:W.aV,CSSResourceValue:W.aV,CSSURLImageValue:W.aV,CSSStyleValue:W.aV,CSSMatrixComponent:W.aW,CSSRotation:W.aW,CSSScale:W.aW,CSSSkew:W.aW,CSSTranslation:W.aW,CSSTransformComponent:W.aW,CSSTransformValue:W.fr,CSSUnparsedValue:W.fs,DataTransferItemList:W.fu,HTMLDivElement:W.ch,XMLDocument:W.ci,Document:W.ci,DOMException:W.fv,ClientRectList:W.dg,DOMRectList:W.dg,DOMRectReadOnly:W.dh,DOMStringList:W.fw,DOMTokenList:W.fx,Element:W.W,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.i,Accelerometer:W.i,AccessibleNode:W.i,AmbientLightSensor:W.i,Animation:W.i,ApplicationCache:W.i,DOMApplicationCache:W.i,OfflineResourceList:W.i,BackgroundFetchRegistration:W.i,BatteryManager:W.i,BroadcastChannel:W.i,CanvasCaptureMediaStreamTrack:W.i,DedicatedWorkerGlobalScope:W.i,EventSource:W.i,FileReader:W.i,FontFaceSet:W.i,Gyroscope:W.i,XMLHttpRequest:W.i,XMLHttpRequestEventTarget:W.i,XMLHttpRequestUpload:W.i,LinearAccelerationSensor:W.i,Magnetometer:W.i,MediaDevices:W.i,MediaKeySession:W.i,MediaQueryList:W.i,MediaRecorder:W.i,MediaSource:W.i,MediaStream:W.i,MediaStreamTrack:W.i,MessagePort:W.i,MIDIAccess:W.i,MIDIInput:W.i,MIDIOutput:W.i,MIDIPort:W.i,NetworkInformation:W.i,Notification:W.i,OffscreenCanvas:W.i,OrientationSensor:W.i,PaymentRequest:W.i,Performance:W.i,PermissionStatus:W.i,PresentationAvailability:W.i,PresentationConnection:W.i,PresentationConnectionList:W.i,PresentationRequest:W.i,RelativeOrientationSensor:W.i,RemotePlayback:W.i,RTCDataChannel:W.i,DataChannel:W.i,RTCDTMFSender:W.i,RTCPeerConnection:W.i,webkitRTCPeerConnection:W.i,mozRTCPeerConnection:W.i,ScreenOrientation:W.i,Sensor:W.i,ServiceWorker:W.i,ServiceWorkerContainer:W.i,ServiceWorkerGlobalScope:W.i,ServiceWorkerRegistration:W.i,SharedWorker:W.i,SharedWorkerGlobalScope:W.i,SpeechRecognition:W.i,SpeechSynthesis:W.i,SpeechSynthesisUtterance:W.i,VR:W.i,VRDevice:W.i,VRDisplay:W.i,VRSession:W.i,VisualViewport:W.i,WebSocket:W.i,Worker:W.i,WorkerGlobalScope:W.i,WorkerPerformance:W.i,BluetoothDevice:W.i,BluetoothRemoteGATTCharacteristic:W.i,Clipboard:W.i,MojoInterfaceInterceptor:W.i,USB:W.i,IDBDatabase:W.i,IDBOpenDBRequest:W.i,IDBVersionChangeRequest:W.i,IDBRequest:W.i,IDBTransaction:W.i,AnalyserNode:W.i,RealtimeAnalyserNode:W.i,AudioBufferSourceNode:W.i,AudioDestinationNode:W.i,AudioNode:W.i,AudioScheduledSourceNode:W.i,AudioWorkletNode:W.i,BiquadFilterNode:W.i,ChannelMergerNode:W.i,AudioChannelMerger:W.i,ChannelSplitterNode:W.i,AudioChannelSplitter:W.i,ConstantSourceNode:W.i,ConvolverNode:W.i,DelayNode:W.i,DynamicsCompressorNode:W.i,GainNode:W.i,AudioGainNode:W.i,IIRFilterNode:W.i,MediaElementAudioSourceNode:W.i,MediaStreamAudioDestinationNode:W.i,MediaStreamAudioSourceNode:W.i,OscillatorNode:W.i,Oscillator:W.i,PannerNode:W.i,AudioPannerNode:W.i,webkitAudioPannerNode:W.i,ScriptProcessorNode:W.i,JavaScriptAudioNode:W.i,StereoPannerNode:W.i,WaveShaperNode:W.i,EventTarget:W.i,File:W.aw,FileList:W.cj,FileWriter:W.fH,HTMLFormElement:W.fL,Gamepad:W.aF,History:W.dm,HTMLCollection:W.bR,HTMLFormControlsCollection:W.bR,HTMLOptionsCollection:W.bR,HTMLDocument:W.dn,ImageData:W.bg,HTMLImageElement:W.bS,HTMLInputElement:W.cm,KeyboardEvent:W.aZ,HTMLLabelElement:W.du,Location:W.h0,HTMLAudioElement:W.co,HTMLMediaElement:W.co,MediaList:W.hd,MIDIInputMap:W.he,MIDIOutputMap:W.hg,MimeType:W.aI,MimeTypeArray:W.hi,PointerEvent:W.a4,MouseEvent:W.a4,DragEvent:W.a4,DocumentFragment:W.G,ShadowRoot:W.G,Attr:W.G,DocumentType:W.G,Node:W.G,NodeList:W.ct,RadioNodeList:W.ct,Plugin:W.aJ,PluginArray:W.hv,RTCStatsReport:W.hF,HTMLSelectElement:W.hI,SourceBuffer:W.aK,SourceBufferList:W.hR,SpeechGrammar:W.aL,SpeechGrammarList:W.hS,SpeechRecognitionResult:W.aM,Storage:W.hV,CSSStyleSheet:W.ax,StyleSheet:W.ax,HTMLTableCellElement:W.b3,HTMLTableDataCellElement:W.b3,HTMLTableHeaderCellElement:W.b3,HTMLTableElement:W.dS,HTMLTableRowElement:W.dT,TextTrack:W.aN,TextTrackCue:W.ay,VTTCue:W.ay,TextTrackCueList:W.i2,TextTrackList:W.i3,TimeRanges:W.id,Touch:W.aO,TouchEvent:W.aP,TouchList:W.ih,TrackDefaultList:W.ii,CompositionEvent:W.bC,FocusEvent:W.bC,TextEvent:W.bC,UIEvent:W.bC,URL:W.iH,HTMLVideoElement:W.iX,VideoTrackList:W.iY,WheelEvent:W.b7,Window:W.cL,DOMWindow:W.cL,CSSRuleList:W.j7,ClientRect:W.ed,DOMRect:W.ed,GamepadList:W.jl,NamedNodeMap:W.eu,MozNamedAttrMap:W.eu,SpeechRecognitionResultList:W.jx,StyleSheetList:W.jA,SVGLength:P.b_,SVGLengthList:P.fU,SVGNumber:P.b2,SVGNumberList:P.hr,SVGPointList:P.hx,SVGStringList:P.i0,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGScriptElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGTransform:P.b5,SVGTransformList:P.ij,AudioBuffer:P.fb,AudioParamMap:P.fc,AudioTrackList:P.fe,AudioContext:P.bI,webkitAudioContext:P.bI,BaseAudioContext:P.bI,OfflineAudioContext:P.hs,WebGLBuffer:P.d9,WebGLFramebuffer:P.dl,WebGLProgram:P.dK,WebGL2RenderingContext:P.bY,WebGLShader:P.dN,WebGLTexture:P.dV,WebGLUniformLocation:P.e2,SQLResultSetRowList:P.hT})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dD.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.dE.$nativeSuperclassTag="ArrayBufferView"
W.cS.$nativeSuperclassTag="EventTarget"
W.cT.$nativeSuperclassTag="EventTarget"
W.cU.$nativeSuperclassTag="EventTarget"
W.cV.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.mo,[])
else K.mo([])})})()
//# sourceMappingURL=test.dart.js.map
