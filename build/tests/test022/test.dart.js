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
a[c]=function(){a[c]=function(){H.nR(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jQ(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jw:function jw(a){this.a=a},
j_:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
f9:function(){return new P.bP("No element")},
m7:function(){return new P.bP("Too many elements")},
m6:function(){return new P.bP("Too few elements")},
t:function t(a){this.a=a},
eR:function eR(){},
bH:function bH(){},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fp:function fp(a,b,c){this.a=a
this.b=b
this.$ti=c},
fq:function fq(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fr:function fr(a,b,c){this.a=a
this.b=b
this.$ti=c},
cG:function cG(a,b,c){this.a=a
this.b=b
this.$ti=c},
hT:function hT(a,b,c){this.a=a
this.b=b
this.$ti=c},
bC:function bC(){},
cE:function cE(){},
dZ:function dZ(){},
lY:function(){throw H.c(P.X("Cannot modify unmodifiable Map"))},
c0:function(a){var u,t
u=H.G(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
nz:function(a){return v.types[H.ac(a)]},
nG:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iaG},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ao(a)
if(typeof u!=="string")throw H.c(H.an(a))
return u},
mw:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fa(u)
t=u[0]
s=u[1]
return new H.fP(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cn:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mt:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.e(u,3)
t=H.G(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a7(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.I(r,p)|32)>s)return}return parseInt(a,b)},
bL:function(a){return H.mk(a)+H.jN(H.bu(a),0,null)},
mk:function(a){var u,t,s,r,q,p,o,n,m
u=J.S(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Z||!!u.$ibr){p=C.F(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c0(r.length>1&&C.c.I(r,0)===36?C.c.as(r,1):r)},
ml:function(){if(!!self.location)return self.location.href
return},
ks:function(a){var u,t,s,r,q
H.ev(a)
u=J.aC(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mu:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.an(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aS(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.an(r))}return H.ks(u)},
kt:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.an(s))
if(s<0)throw H.c(H.an(s))
if(s>65535)return H.mu(a)}return H.ks(a)},
mv:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bM:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aS(u,10))>>>0,56320|u&1023)}}throw H.c(P.a7(a,0,1114111,null,null))},
bK:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ms:function(a){var u=H.bK(a).getFullYear()+0
return u},
mq:function(a){var u=H.bK(a).getMonth()+1
return u},
mm:function(a){var u=H.bK(a).getDate()+0
return u},
mn:function(a){var u=H.bK(a).getHours()+0
return u},
mp:function(a){var u=H.bK(a).getMinutes()+0
return u},
mr:function(a){var u=H.bK(a).getSeconds()+0
return u},
mo:function(a){var u=H.bK(a).getMilliseconds()+0
return u},
A:function(a){throw H.c(H.an(a))},
e:function(a,b){if(a==null)J.aC(a)
throw H.c(H.bW(a,b))},
bW:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aD(!0,b,"index",null)
u=H.ac(J.aC(a))
if(!(b<0)){if(typeof u!=="number")return H.A(u)
t=b>=u}else t=!0
if(t)return P.bE(b,a,"index",null,u)
return P.dG(b,"index",null)},
ns:function(a,b,c){if(a>c)return new P.bN(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bN(a,c,!0,b,"end","Invalid value")
return new P.aD(!0,b,"end",null)},
an:function(a){return new P.aD(!0,a,null,null)},
nn:function(a){if(typeof a!=="number")throw H.c(H.an(a))
return a},
c:function(a){var u
if(a==null)a=new P.dB()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lk})
u.name=""}else u.toString=H.lk
return u},
lk:function(){return J.ao(this.dartException)},
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
return new H.hi(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hj:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kC:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ko:function(a,b){return new H.fH(a,b==null?null:b.method)},
jx:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fd(a,t,u?null:b.receiver)},
ad:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.ji(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aS(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jx(H.j(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.ko(H.j(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lo()
p=$.lp()
o=$.lq()
n=$.lr()
m=$.lu()
l=$.lv()
k=$.lt()
$.ls()
j=$.lx()
i=$.lw()
h=q.ah(t)
if(h!=null)return u.$1(H.jx(H.G(t),h))
else{h=p.ah(t)
if(h!=null){h.method="call"
return u.$1(H.jx(H.G(t),h))}else{h=o.ah(t)
if(h==null){h=n.ah(t)
if(h==null){h=m.ah(t)
if(h==null){h=l.ah(t)
if(h==null){h=k.ah(t)
if(h==null){h=n.ah(t)
if(h==null){h=j.ah(t)
if(h==null){h=i.ah(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.ko(H.G(t),h))}}return u.$1(new H.hw(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dM()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aD(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dM()
return a},
bZ:function(a){var u
if(a==null)return new H.ei(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ei(a)},
nv:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.q(0,a[t],a[s])}return b},
nF:function(a,b,c,d,e,f){H.d(a,"$ibj")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
bV:function(a,b){var u
H.ac(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nF)
a.$identity=u
return u},
lX:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.S(d).$ia){u.$reflectionInfo=d
s=H.mw(u).r}else s=d
r=e?Object.create(new H.h4().constructor.prototype):Object.create(new H.c3(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aL
if(typeof p!=="number")return p.n()
$.aL=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.kb(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.nz,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.k9:H.jn
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.kb(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
lU:function(a,b,c,d){var u=H.jn
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kb:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lW(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lU(t,!r,u,b)
if(t===0){r=$.aL
if(typeof r!=="number")return r.n()
$.aL=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c4
if(q==null){q=H.eD("self")
$.c4=q}return new Function(r+H.j(q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aL
if(typeof r!=="number")return r.n()
$.aL=r+1
o+=r
r="return function("+o+"){return this."
q=$.c4
if(q==null){q=H.eD("self")
$.c4=q}return new Function(r+H.j(q)+"."+H.j(u)+"("+o+");}")()},
lV:function(a,b,c,d){var u,t
u=H.jn
t=H.k9
switch(b?-1:a){case 0:throw H.c(H.mA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lW:function(a,b){var u,t,s,r,q,p,o,n
u=$.c4
if(u==null){u=H.eD("self")
$.c4=u}t=$.k8
if(t==null){t=H.eD("receiver")
$.k8=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lV(r,!p,s,b)
if(r===1){u="return function(){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+");"
t=$.aL
if(typeof t!=="number")return t.n()
$.aL=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+", "+n+");"
t=$.aL
if(typeof t!=="number")return t.n()
$.aL=t+1
return new Function(u+t+"}")()},
jQ:function(a,b,c,d,e,f,g){return H.lX(a,b,H.ac(c),d,!!e,!!f,g)},
jn:function(a){return a.a},
k9:function(a){return a.c},
eD:function(a){var u,t,s,r,q
u=new H.c3("self","target","receiver","name")
t=J.fa(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
G:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aK(a,"String"))},
nt:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aK(a,"double"))},
nL:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aK(a,"num"))},
jO:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aK(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aK(a,"int"))},
lh:function(a,b){throw H.c(H.aK(a,H.c0(H.G(b).substring(2))))},
nN:function(a,b){throw H.c(H.lT(a,H.c0(H.G(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.S(a)[b])return a
H.lh(a,b)},
i:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.nN(a,b)},
ev:function(a){if(a==null)return a
if(!!J.S(a).$ia)return a
throw H.c(H.aK(a,"List<dynamic>"))},
le:function(a,b){var u
if(a==null)return a
u=J.S(a)
if(!!u.$ia)return a
if(u[b])return a
H.lh(a,b)},
la:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
es:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.la(J.S(a))
if(u==null)return!1
return H.kY(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.jK)return a
$.jK=!0
try{if(H.es(a,b))return a
u=H.jd(b)
t=H.aK(a,u)
throw H.c(t)}finally{$.jK=!1}},
jS:function(a,b){if(a!=null&&!H.jP(a,b))H.q(H.aK(a,H.jd(b)))
return a},
aK:function(a,b){return new H.hk("TypeError: "+P.eV(a)+": type '"+H.l2(a)+"' is not a subtype of type '"+b+"'")},
lT:function(a,b){return new H.eE("CastError: "+P.eV(a)+": type '"+H.l2(a)+"' is not a subtype of type '"+b+"'")},
l2:function(a){var u,t
u=J.S(a)
if(!!u.$ic5){t=H.la(u)
if(t!=null)return H.jd(t)
return"Closure"}return H.bL(a)},
nR:function(a){throw H.c(new P.eM(H.G(a)))},
mA:function(a){return new H.fU(a)},
lb:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bu:function(a){if(a==null)return
return a.$ti},
oB:function(a,b,c){return H.c_(a["$a"+H.j(c)],H.bu(b))},
cV:function(a,b,c,d){var u
H.G(c)
H.ac(d)
u=H.c_(a["$a"+H.j(c)],H.bu(b))
return u==null?null:u[d]},
ab:function(a,b,c){var u
H.G(b)
H.ac(c)
u=H.c_(a["$a"+H.j(b)],H.bu(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.ac(b)
u=H.bu(a)
return u==null?null:u[b]},
jd:function(a){return H.bt(a,null)},
bt:function(a,b){var u,t
H.h(b,"$ia",[P.f],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c0(a[0].name)+H.jN(a,1,b)
if(typeof a=="function")return H.c0(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.j(b[t])}if('func' in a)return H.nc(a,b)
if('futureOr' in a)return"FutureOr<"+H.bt("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nc:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
if(m<0)return H.e(b,m)
o=C.c.n(o,b[m])
l=t[p]
if(l!=null&&l!==P.L)o+=" extends "+H.bt(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bt(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bt(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bt(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.nu(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.G(u[g])
i=i+h+H.bt(d[c],b)+(" "+H.j(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jN:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ia",[P.f],"$aa")
if(a==null)return""
u=new P.af("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bt(p,c)}return"<"+u.i(0)+">"},
c_:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cT:function(a,b,c,d){var u,t
H.G(b)
H.ev(c)
H.G(d)
if(a==null)return!1
u=H.bu(a)
t=J.S(a)
if(t[b]==null)return!1
return H.l5(H.c_(t[d],u),null,c,null)},
h:function(a,b,c,d){H.G(b)
H.ev(c)
H.G(d)
if(a==null)return a
if(H.cT(a,b,c,d))return a
throw H.c(H.aK(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c0(b.substring(2))+H.jN(c,0,null),v.mangledGlobalNames)))},
l5:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aB(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aB(a[t],b,c[t],d))return!1
return!0},
oz:function(a,b,c){return a.apply(b,H.c_(J.S(b)["$a"+H.j(c)],H.bu(b)))},
ld:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="F"||a===-1||a===-2||H.ld(u)}return!1},
jP:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="F"||b===-1||b===-2||H.ld(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jP(a,"type" in b?b.type:null))return!0
if('func' in b)return H.es(a,b)}u=J.S(a).constructor
t=H.bu(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aB(u,null,b,null)},
x:function(a,b){if(a!=null&&!H.jP(a,b))throw H.c(H.aK(a,H.jd(b)))
return a},
aB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="L"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="L"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aB(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="F")return!0
if('func' in c)return H.kY(a,b,c,d)
if('func' in a)return c.name==="bj"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aB("type" in a?a.type:null,b,s,d)
else if(H.aB(a,b,s,d))return!0
else{if(!('$i'+"ca" in t.prototype))return!1
r=t.prototype["$a"+"ca"]
q=H.c_(r,u?a.slice(1):null)
return H.aB(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.l5(H.c_(m,u),b,p,d)},
kY:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.nK(h,b,g,d)},
nK:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aB(c[r],d,a[r],b))return!1}return!0},
oA:function(a,b,c){Object.defineProperty(a,H.G(b),{value:c,enumerable:false,writable:true,configurable:true})},
nI:function(a){var u,t,s,r,q,p
u=H.G($.lc.$1(a))
t=$.iZ[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j3[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.G($.l4.$2(a,u))
if(u!=null){t=$.iZ[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j3[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jc(s)
$.iZ[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.j3[u]=s
return s}if(q==="-"){p=H.jc(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.lg(a,s)
if(q==="*")throw H.c(P.hv(u))
if(v.leafTags[u]===true){p=H.jc(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.lg(a,s)},
lg:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jV(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jc:function(a){return J.jV(a,!1,null,!!a.$iaG)},
nJ:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jc(u)
else return J.jV(u,c,null,null)},
nD:function(){if(!0===$.jU)return
$.jU=!0
H.nE()},
nE:function(){var u,t,s,r,q,p,o,n
$.iZ=Object.create(null)
$.j3=Object.create(null)
H.nC()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.li.$1(q)
if(p!=null){o=H.nJ(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nC:function(){var u,t,s,r,q,p,o
u=C.a3()
u=H.bU(C.a0,H.bU(C.a5,H.bU(C.E,H.bU(C.E,H.bU(C.a4,H.bU(C.a1,H.bU(C.a2(C.F),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.lc=new H.j0(q)
$.l4=new H.j1(p)
$.li=new H.j2(o)},
bU:function(a,b){return a(b)||b},
m9:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a0("Illegal RegExp pattern ("+String(r)+")",a,null))},
nQ:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
jY:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eJ:function eJ(){},
eK:function eK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fP:function fP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
hi:function hi(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fH:function fH(a,b){this.a=a
this.b=b},
fd:function fd(a,b,c){this.a=a
this.b=b
this.c=c},
hw:function hw(a){this.a=a},
ji:function ji(a){this.a=a},
ei:function ei(a){this.a=a
this.b=null},
c5:function c5(){},
ha:function ha(){},
h4:function h4(){},
c3:function c3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hk:function hk(a){this.a=a},
eE:function eE(a){this.a=a},
fU:function fU(a){this.a=a},
aH:function aH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fg:function fg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fh:function fh(a,b){this.a=a
this.$ti=b},
fi:function fi(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
j2:function j2(a){this.a=a},
fc:function fc(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bS:function(a){return a},
mi:function(a){return new Int8Array(a)},
b7:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bW(b,a))},
na:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.ns(a,b,c))
return b},
bJ:function bJ(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
dz:function dz(){},
ck:function ck(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
nu:function(a){return J.kf(a?Object.keys(a):[],null)},
nM:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jV:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
et:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jU==null){H.nD()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.hv("Return interceptor for "+H.j(t(a,u))))}r=a.constructor
q=r==null?null:r[$.k_()]
if(q!=null)return q
q=H.nI(a)
if(q!=null)return q
if(typeof a=="function")return C.a6
t=Object.getPrototypeOf(a)
if(t==null)return C.M
if(t===Object.prototype)return C.M
if(typeof r=="function"){Object.defineProperty(r,$.k_(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
m8:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.jm(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a7(a,0,4294967295,"length",null))
return J.kf(new Array(a),b)},
kf:function(a,b){return J.fa(H.b(a,[b]))},
fa:function(a){H.ev(a)
a.fixed$length=Array
return a},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dj.prototype
return J.di.prototype}if(typeof a=="string")return J.b1.prototype
if(a==null)return J.dk.prototype
if(typeof a=="boolean")return J.fb.prototype
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.L)return a
return J.et(a)},
nw:function(a){if(typeof a=="number")return J.bl.prototype
if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.L)return a
return J.et(a)},
bY:function(a){if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.L)return a
return J.et(a)},
jT:function(a){if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.L)return a
return J.et(a)},
nx:function(a){if(typeof a=="number")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.br.prototype
return a},
ny:function(a){if(typeof a=="number")return J.bl.prototype
if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.br.prototype
return a},
cU:function(a){if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.br.prototype
return a},
a5:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.L)return a
return J.et(a)},
lG:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nw(a).n(a,b)},
O:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).A(a,b)},
k2:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ny(a).t(a,b)},
lH:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.nx(a).u(a,b)},
lI:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nG(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bY(a).k(a,b)},
lJ:function(a,b,c,d){return J.a5(a).hb(a,b,c,d)},
lK:function(a,b){return J.cU(a).I(a,b)},
ew:function(a,b){return J.a5(a).iH(a,b)},
jk:function(a,b,c){return J.a5(a).iL(a,b,c)},
k3:function(a,b){return J.a5(a).F(a,b)},
lL:function(a,b){return J.cU(a).a0(a,b)},
ex:function(a,b){return J.jT(a).a9(a,b)},
lM:function(a,b,c,d){return J.a5(a).kn(a,b,c,d)},
lN:function(a){return J.a5(a).gjQ(a)},
k4:function(a){return J.a5(a).gcG(a)},
cZ:function(a){return J.S(a).gL(a)},
bv:function(a){return J.jT(a).gV(a)},
aC:function(a){return J.bY(a).gm(a)},
lO:function(a){return J.a5(a).gl9(a)},
jl:function(a,b){return J.a5(a).b_(a,b)},
k5:function(a){return J.jT(a).kZ(a)},
lP:function(a,b){return J.a5(a).l3(a,b)},
lQ:function(a,b,c){return J.a5(a).fz(a,b,c)},
lR:function(a,b,c){return J.cU(a).w(a,b,c)},
lS:function(a){return J.cU(a).lg(a)},
ao:function(a){return J.S(a).i(a)},
a8:function a8(){},
fb:function fb(){},
dk:function dk(){},
dl:function dl(){},
fJ:function fJ(){},
br:function br(){},
b2:function b2(){},
aF:function aF(a){this.$ti=a},
jv:function jv(a){this.$ti=a},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bl:function bl(){},
dj:function dj(){},
di:function di(){},
b1:function b1(){}},P={
mN:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.nk()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bV(new P.hV(u),1)).observe(t,{childList:true})
return new P.hU(u,t,s)}else if(self.setImmediate!=null)return P.nl()
return P.nm()},
mO:function(a){self.scheduleImmediate(H.bV(new P.hW(H.k(a,{func:1,ret:-1})),0))},
mP:function(a){self.setImmediate(H.bV(new P.hX(H.k(a,{func:1,ret:-1})),0))},
mQ:function(a){P.jB(C.y,H.k(a,{func:1,ret:-1}))},
jB:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.f.a6(a.a,1000)
return P.mW(u<0?0:u,b)},
kB:function(a,b){var u
H.k(b,{func:1,ret:-1,args:[P.aT]})
u=C.f.a6(a.a,1000)
return P.mX(u<0?0:u,b)},
mW:function(a,b){var u=new P.ej(!0)
u.h6(a,b)
return u},
mX:function(a,b){var u=new P.ej(!1)
u.h7(a,b)
return u},
mR:function(a,b){var u,t,s
b.a=1
try{a.fa(new P.i5(b),new P.i6(b),null)}catch(s){u=H.ad(s)
t=H.bZ(s)
P.nO(new P.i7(b,u,t))}},
kN:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iaA")
if(u>=4){t=b.cp()
b.a=a.a
b.c=a.c
P.cJ(b,t)}else{t=H.d(b.c,"$iaX")
b.a=2
b.c=a
a.dS(t)}},
cJ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.d(t.c,"$iah")
t=t.b
p=q.a
o=q.b
t.toString
P.iQ(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cJ(u.a,b)}t=u.a
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
if(k){H.d(m,"$iah")
t=t.b
p=m.a
o=m.b
t.toString
P.iQ(null,null,t,p,o)
return}j=$.V
if(j!=l)$.V=l
else j=null
t=b.c
if(t===8)new P.ib(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.ia(s,b,m).$0()}else if((t&2)!==0)new P.i9(u,s,b).$0()
if(j!=null)$.V=j
t=s.b
if(!!J.S(t).$ica){if(t.a>=4){i=H.d(o.c,"$iaX")
o.c=null
b=o.bp(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.kN(t,o)
return}}h=b.b
i=H.d(h.c,"$iaX")
h.c=null
b=h.bp(i)
t=s.a
p=s.b
if(!t){H.x(p,H.r(h,0))
h.a=4
h.c=p}else{H.d(p,"$iah")
h.a=8
h.c=p}u.a=h
t=h}},
nf:function(a,b){if(H.es(a,{func:1,args:[P.L,P.ar]}))return H.k(a,{func:1,ret:null,args:[P.L,P.ar]})
if(H.es(a,{func:1,args:[P.L]}))return H.k(a,{func:1,ret:null,args:[P.L]})
throw H.c(P.jm(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ne:function(){var u,t
for(;u=$.bT,u!=null;){$.cS=null
t=u.b
$.bT=t
if(t==null)$.cR=null
u.a.$0()}},
nj:function(){$.jL=!0
try{P.ne()}finally{$.cS=null
$.jL=!1
if($.bT!=null)$.k0().$1(P.l6())}},
l1:function(a){var u=new P.e6(H.k(a,{func:1,ret:-1}))
if($.bT==null){$.cR=u
$.bT=u
if(!$.jL)$.k0().$1(P.l6())}else{$.cR.b=u
$.cR=u}},
ni:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.bT
if(u==null){P.l1(a)
$.cS=$.cR
return}t=new P.e6(a)
s=$.cS
if(s==null){t.b=u
$.cS=t
$.bT=t}else{t.b=s.b
s.b=t
$.cS=t
if(t.b==null)$.cR=t}},
nO:function(a){var u,t
u={func:1,ret:-1}
H.k(a,u)
t=$.V
if(C.l===t){P.iS(null,null,C.l,a)
return}t.toString
P.iS(null,null,t,H.k(t.cB(a),u))},
kA:function(a,b){var u,t
u={func:1,ret:-1}
H.k(b,u)
t=$.V
if(t===C.l){t.toString
return P.jB(a,b)}return P.jB(a,H.k(t.cB(b),u))},
mE:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aT]}
H.k(b,u)
t=$.V
if(t===C.l){t.toString
return P.kB(a,b)}s=t.ea(b,P.aT)
$.V.toString
return P.kB(a,H.k(s,u))},
iQ:function(a,b,c,d,e){var u={}
u.a=d
P.ni(new P.iR(u,e))},
kZ:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.V
if(t===c)return d.$0()
$.V=c
u=t
try{t=d.$0()
return t}finally{$.V=u}},
l_:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.x(e,g)
t=$.V
if(t===c)return d.$1(e)
$.V=c
u=t
try{t=d.$1(e)
return t}finally{$.V=u}},
ng:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
t=$.V
if(t===c)return d.$2(e,f)
$.V=c
u=t
try{t=d.$2(e,f)
return t}finally{$.V=u}},
iS:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cB(d):c.jR(d,-1)
P.l1(d)},
hV:function hV(a){this.a=a},
hU:function hU(a,b,c){this.a=a
this.b=b
this.c=c},
hW:function hW(a){this.a=a},
hX:function hX(a){this.a=a},
ej:function ej(a){this.a=a
this.b=null
this.c=0},
iz:function iz(a,b){this.a=a
this.b=b},
iy:function iy(a,b,c,d){var _=this
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
aA:function aA(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
i4:function i4(a,b){this.a=a
this.b=b},
i8:function i8(a,b){this.a=a
this.b=b},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
i7:function i7(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ic:function ic(a){this.a=a},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(a){this.a=a
this.b=null},
h5:function h5(){},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(a,b){this.a=a
this.b=b},
cr:function cr(){},
h6:function h6(){},
aT:function aT(){},
ah:function ah(a,b){this.a=a
this.b=b},
iJ:function iJ(){},
iR:function iR(a,b){this.a=a
this.b=b},
ii:function ii(){},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
ij:function ij(a,b){this.a=a
this.b=b},
il:function il(a,b,c){this.a=a
this.b=b
this.c=c},
mb:function(a,b,c,d,e){return new H.aH([d,e])},
mc:function(a,b,c){H.ev(a)
return H.h(H.nv(a,new H.aH([b,c])),"$ikg",[b,c],"$akg")},
kh:function(a,b){return new H.aH([a,b])},
dq:function(a,b,c,d){return new P.ig([d])},
jH:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mV:function(a,b,c){var u=new P.ec(a,b,[c])
u.c=a.e
return u},
m5:function(a,b,c){var u,t
if(P.jM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.f])
t=$.cY()
C.a.h(t,a)
try{P.nd(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.ky(b,H.le(u,"$in"),", ")+c
return t.charCodeAt(0)==0?t:t},
ju:function(a,b,c){var u,t,s
if(P.jM(a))return b+"..."+c
u=new P.af(b)
t=$.cY()
C.a.h(t,a)
try{s=u
s.a=P.ky(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jM:function(a){var u,t
for(u=0;t=$.cY(),u<t.length;++u)if(a===t[u])return!0
return!1},
nd:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ia",[P.f],"$aa")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.E())return
r=H.j(u.gN())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.E()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gN();++s
if(!u.E()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gN();++s
for(;u.E();o=n,n=m){m=u.gN();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.j(o)
q=H.j(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
md:function(a,b,c){var u=P.mb(null,null,null,b,c)
a.a_(0,new P.fj(u,b,c))
return u},
ki:function(a,b){var u,t,s
u=P.dq(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s)u.h(0,H.x(a[s],b))
return u},
jy:function(a){var u,t
u={}
if(P.jM(a))return"{...}"
t=new P.af("")
try{C.a.h($.cY(),a)
t.a+="{"
u.a=!0
a.a_(0,new P.fn(u,t))
t.a+="}"}finally{u=$.cY()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
ig:function ig(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bQ:function bQ(a){this.a=a
this.c=this.b=null},
ec:function ec(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
fk:function fk(){},
T:function T(){},
fm:function fm(){},
fn:function fn(a,b){this.a=a
this.b=b},
bI:function bI(){},
iA:function iA(){},
fo:function fo(){},
e_:function e_(a,b){this.a=a
this.$ti=b},
io:function io(){},
ed:function ed(){},
en:function en(){},
mI:function(a,b,c,d){H.h(b,"$ia",[P.l],"$aa")
if(b instanceof Uint8Array)return P.mJ(!1,b,c,d)
return},
mJ:function(a,b,c,d){var u,t,s
u=$.ly()
if(u==null)return
t=0===c
if(t&&!0)return P.jE(u,b)
s=b.length
d=P.b6(c,d,s,null,null,null)
if(t&&d===s)return P.jE(u,b)
return P.jE(u,b.subarray(c,d))},
jE:function(a,b){if(P.mL(b))return
return P.mM(a,b)},
mM:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ad(t)}return},
mL:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
mK:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ad(t)}return},
nh:function(a,b,c){var u,t,s
H.h(a,"$ia",[P.l],"$aa")
for(u=J.bY(a),t=b;t<c;++t){s=u.k(a,t)
if(typeof s!=="number")return s.bV()
if((s&127)!==s)return t-b}return c-b},
k7:function(a,b,c,d,e,f){if(C.f.bi(f,4)!==0)throw H.c(P.a0("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a0("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a0("Invalid base64 padding, more than two '=' characters",a,b))},
eA:function eA(a){this.a=a},
eB:function eB(a){this.a=a},
by:function by(){},
bh:function bh(){},
eT:function eT(){},
f7:function f7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f6:function f6(a){this.a=a},
hD:function hD(a){this.a=a},
hF:function hF(){},
iH:function iH(a){this.b=this.a=0
this.c=a},
hE:function hE(a){this.a=a},
iF:function iF(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
iG:function iG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eu:function(a,b,c){var u
H.k(b,{func:1,ret:P.l,args:[P.f]})
u=H.mt(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a0(a,null,null))},
m2:function(a){if(a instanceof H.c5)return a.i(0)
return"Instance of '"+H.bL(a)+"'"},
me:function(a,b,c,d){var u,t
H.x(b,d)
u=J.m8(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.q(u,t,b)
return H.h(u,"$ia",[d],"$aa")},
mf:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gV(a);s.E();)C.a.h(t,H.x(s.gN(),c))
if(b)return t
return H.h(J.fa(t),"$ia",u,"$aa")},
dN:function(a,b,c){var u,t
u=P.l
H.h(a,"$in",[u],"$an")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.h(a,"$iaF",[u],"$aaF")
t=a.length
c=P.b6(b,c,t,null,null,null)
return H.kt(b>0||c<t?C.a.fF(a,b,c):a)}if(!!J.S(a).$ick)return H.mv(a,b,P.b6(b,c,a.length,null,null,null))
return P.mC(a,b,c)},
mC:function(a,b,c){var u,t,s,r
H.h(a,"$in",[P.l],"$an")
if(b<0)throw H.c(P.a7(b,0,J.aC(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.a7(c,b,J.aC(a),null,null))
t=J.bv(a)
for(s=0;s<b;++s)if(!t.E())throw H.c(P.a7(b,0,s,null,null))
r=[]
if(u)for(;t.E();)r.push(t.gN())
else for(s=b;s<c;++s){if(!t.E())throw H.c(P.a7(c,b,s,null,null))
r.push(t.gN())}return H.kt(r)},
my:function(a,b,c){return new H.fc(a,H.m9(a,!1,!0,!1))},
ky:function(a,b,c){var u=J.bv(b)
if(!u.E())return a
if(c.length===0){do a+=H.j(u.gN())
while(u.E())}else{a+=H.j(u.gN())
for(;u.E();)a=a+c+H.j(u.gN())}return a},
kE:function(){var u=H.ml()
if(u!=null)return P.mH(u,0,null)
throw H.c(P.X("'Uri.base' is not supported"))},
eo:function(a,b,c,d){var u,t,s,r,q,p
H.h(a,"$ia",[P.l],"$aa")
if(c===C.m){u=$.lE().b
if(typeof b!=="string")H.q(H.an(b))
u=u.test(b)}else u=!1
if(u)return b
H.x(b,H.ab(c,"by",0))
t=c.gkm().cH(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bM(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
lZ:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
m_:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d8:function(a){if(a>=10)return""+a
return"0"+a},
kc:function(a,b,c,d,e,f){return new P.aM(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eV:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ao(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m2(a)},
d0:function(a){return new P.aD(!1,null,null,a)},
jm:function(a,b,c){return new P.aD(!0,a,b,c)},
dG:function(a,b,c){return new P.bN(null,null,!0,a,b,"Value not in range")},
a7:function(a,b,c,d,e){return new P.bN(b,c,!0,a,d,"Invalid value")},
b6:function(a,b,c,d,e,f){if(typeof a!=="number")return H.A(a)
if(0>a||a>c)throw H.c(P.a7(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.a7(b,a,c,"end",f))
return b}return c},
bE:function(a,b,c,d,e){var u=H.ac(e==null?J.aC(b):e)
return new P.f8(b,u,!0,a,c,"Index out of range")},
X:function(a){return new P.hx(a)},
hv:function(a){return new P.hu(a)},
kx:function(a){return new P.bP(a)},
aZ:function(a){return new P.eH(a)},
u:function(a){return new P.e9(a)},
a0:function(a,b,c){return new P.f2(a,b,c)},
mg:function(a,b,c,d){var u,t
H.k(b,{func:1,ret:d,args:[P.l]})
u=H.b([],[d])
C.a.sm(u,a)
for(t=0;t<a;++t)C.a.q(u,t,b.$1(t))
return u},
jX:function(a){H.nM(a)},
mH:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.I(a,b+4)^58)*3|C.c.I(a,b)^100|C.c.I(a,b+1)^97|C.c.I(a,b+2)^116|C.c.I(a,b+3)^97)>>>0
if(t===0)return P.kD(b>0||c<c?C.c.w(a,b,c):a,5,null).gfg()
else if(t===32)return P.kD(C.c.w(a,u,c),0,null).gfg()}s=new Array(8)
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
if(P.l0(a,b,c,0,r)>=14)C.a.q(r,7,c)
q=r[1]
if(typeof q!=="number")return q.lp()
if(q>=b)if(P.l0(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.n()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.Y()
if(typeof m!=="number")return H.A(m)
if(l<m)m=l
if(typeof n!=="number")return n.Y()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.Y()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.Y()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.ae(a,"..",n)))i=m>n+2&&C.c.ae(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.ae(a,"file",b)){if(p<=b){if(!C.c.ae(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.w(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.aZ(a,n,m,"/");++m;++l;++c}else{a=C.c.w(a,b,n)+"/"+C.c.w(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.ae(a,"http",b)){if(s&&o+3===n&&C.c.ae(a,"80",o+1))if(b===0&&!0){a=C.c.aZ(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.w(a,b,o)+C.c.w(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.ae(a,"https",b)){if(s&&o+4===n&&C.c.ae(a,"443",o+1))if(b===0&&!0){a=C.c.aZ(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.w(a,b,o)+C.c.w(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.w(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.ir(a,q,p,o,n,m,l,j)}return P.mY(a,b,c,q,p,o,n,m,l,j)},
kG:function(a,b){var u=P.f
return C.a.ks(H.b(a.split("&"),[u]),P.kh(u,u),new P.hC(b),[P.H,P.f,P.f])},
mG:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.hz(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a0(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.eu(C.c.w(a,q,r),null,null)
if(typeof n!=="number")return n.fu()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.e(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.eu(C.c.w(a,q,c),null,null)
if(typeof n!=="number")return n.fu()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.e(t,p)
t[p]=n
return t},
kF:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.hA(a)
t=new P.hB(u,a)
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
l=C.a.gaC(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.mG(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.f.aS(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
mY:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.n4(a,b,d)
else{if(d===b)P.cO(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.n5(a,u,e-1):""
s=P.n1(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.A(g)
q=r<g?P.n3(P.eu(C.c.w(a,r,g),new P.iB(a,f),null),j):null}else{t=""
s=null
q=null}p=P.n2(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.Y()
o=h<i?P.jI(a,h+1,i,null):null
return new P.bR(j,t,s,q,p,o,i<c?P.n0(a,i+1,c):null)},
kR:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cO:function(a,b,c){throw H.c(P.a0(c,a,b))},
n3:function(a,b){if(a!=null&&a===P.kR(b))return
return a},
n1:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a0(a,b)===91){if(typeof c!=="number")return c.u()
u=c-1
if(C.c.a0(a,u)!==93)P.cO(a,b,"Missing end `]` to match `[` in host")
P.kF(a,b+1,u)
return C.c.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.A(c)
t=b
for(;t<c;++t)if(C.c.a0(a,t)===58){P.kF(a,b,c)
return"["+a+"]"}return P.n7(a,b,c)},
n7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.A(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a0(a,u)
if(q===37){p=P.kX(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.af("")
n=C.c.w(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.w(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.K,o)
o=(C.K[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.af("")
if(t<u){s.a+=C.c.w(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o)P.cO(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a0(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.af("")
n=C.c.w(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kS(q)
u+=l
t=u}}}}if(s==null)return C.c.w(a,b,c)
if(t<c){n=C.c.w(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
n4:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kU(C.c.I(a,b)))P.cO(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.I(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cO(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.w(a,b,c)
return P.mZ(t?a.toLowerCase():a)},
mZ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
n5:function(a,b,c){return P.cP(a,b,c,C.a9,!1)},
n2:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cP(a,b,c,C.L,!0):C.r.ls(d,new P.iC(),P.f).l(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a5(r,"/"))r="/"+r
return P.n6(r,e,f)},
n6:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a5(a,"/"))return P.n8(a,!u||c)
return P.n9(a)},
jI:function(a,b,c,d){var u,t
u={}
H.h(d,"$iH",[P.f,null],"$aH")
if(a!=null){if(d!=null)throw H.c(P.d0("Both query and queryParameters specified"))
return P.cP(a,b,c,C.u,!0)}if(d==null)return
t=new P.af("")
u.a=""
d.a_(0,new P.iD(new P.iE(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
n0:function(a,b,c){return P.cP(a,b,c,C.u,!0)},
kX:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a0(a,b+1)
s=C.c.a0(a,u)
r=H.j_(t)
q=H.j_(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aS(p,4)
if(u>=8)return H.e(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.bM(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.w(a,b,b+3).toUpperCase()
return},
kS:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.l])
C.a.q(t,0,37)
C.a.q(t,1,C.c.I("0123456789ABCDEF",a>>>4))
C.a.q(t,2,C.c.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.f.j1(a,6*r)&63|s
C.a.q(t,q,37)
C.a.q(t,q+1,C.c.I("0123456789ABCDEF",p>>>4))
C.a.q(t,q+2,C.c.I("0123456789ABCDEF",p&15))
q+=3}}return P.dN(t,0,null)},
cP:function(a,b,c,d,e){var u=P.kW(a,b,c,H.h(d,"$ia",[P.l],"$aa"),e)
return u==null?C.c.w(a,b,c):u},
kW:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.h(d,"$ia",[P.l],"$aa")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Y()
if(typeof c!=="number")return H.A(c)
if(!(t<c))break
c$0:{q=C.c.a0(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.kX(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cO(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a0(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.kS(q)}}if(r==null)r=new P.af("")
r.a+=C.c.w(a,s,t)
r.a+=H.j(o)
if(typeof n!=="number")return H.A(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Y()
if(s<c)r.a+=C.c.w(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
kV:function(a){if(C.c.a5(a,"."))return!0
return C.c.eM(a,"/.")!==-1},
n9:function(a){var u,t,s,r,q,p,o
if(!P.kV(a))return a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.O(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.l(u,"/")},
n8:function(a,b){var u,t,s,r,q,p
if(!P.kV(a))return!b?P.kT(a):a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaC(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaC(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.q(u,0,P.kT(u[0]))}return C.a.l(u,"/")},
kT:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.kU(J.lK(a,0)))for(t=1;t<u;++t){s=C.c.I(a,t)
if(s===58)return C.c.w(a,0,t)+"%3A"+C.c.as(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.e(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
n_:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.I(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.d0("Invalid URL encoding"))}}return u},
jJ:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.I(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.w(a,b,c)
else q=new H.t(C.c.w(a,b,c))}else{q=H.b([],[P.l])
for(r=a.length,t=b;t<c;++t){s=C.c.I(a,t)
if(s>127)throw H.c(P.d0("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.d0("Truncated URI"))
C.a.h(q,P.n_(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.h(q,"$ia",[P.l],"$aa")
return new P.hE(!1).cH(q)},
kU:function(a){var u=a|32
return 97<=u&&u<=122},
kD:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.b([b-1],[P.l])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.I(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a0("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a0("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.I(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaC(u)
if(q!==44||s!==o+7||!C.c.ae(a,"base64",o+1))throw H.c(P.a0("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.Q.kG(a,n,t)
else{m=P.kW(a,n,t,C.u,!0)
if(m!=null)a=C.c.aZ(a,n,t,m)}return new P.hy(a,u,c)},
nb:function(){var u,t,s,r,q
u=P.mg(22,new P.iN(),!0,P.M)
t=new P.iM(u)
s=new P.iO()
r=new P.iP()
q=H.d(t.$2(0,225),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(14,225),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(15,225),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(1,225),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(2,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(3,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(4,229),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(5,229),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(6,231),"$iM")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(7,231),"$iM")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.d(t.$2(8,8),"$iM"),"]",5)
q=H.d(t.$2(9,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(16,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(17,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(10,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(18,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(19,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(11,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(12,236),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.d(t.$2(13,237),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.d(t.$2(20,245),"$iM"),"az",21)
q=H.d(t.$2(21,245),"$iM")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
l0:function(a,b,c,d,e){var u,t,s,r,q
H.h(e,"$ia",[P.l],"$aa")
u=$.lF()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.c.I(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.q(e,q>>>5,t)}return d},
N:function N(){},
ai:function ai(a,b){this.a=a
this.b=b},
o:function o(){},
aM:function aM(a){this.a=a},
eP:function eP(){},
eQ:function eQ(){},
bi:function bi(){},
dB:function dB(){},
aD:function aD(a,b,c,d){var _=this
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
f8:function f8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hx:function hx(a){this.a=a},
hu:function hu(a){this.a=a},
bP:function bP(a){this.a=a},
eH:function eH(a){this.a=a},
fI:function fI(){},
dM:function dM(){},
eM:function eM(a){this.a=a},
e9:function e9(a){this.a=a},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(){},
l:function l(){},
n:function n(){},
aN:function aN(){},
a:function a(){},
H:function H(){},
F:function F(){},
ag:function ag(){},
L:function L(){},
ar:function ar(){},
f:function f(){},
af:function af(a){this.a=a},
hC:function hC(a){this.a=a},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
hB:function hB(a,b){this.a=a
this.b=b},
bR:function bR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
iB:function iB(a,b){this.a=a
this.b=b},
iC:function iC(){},
iE:function iE(a,b){this.a=a
this.b=b},
iD:function iD(a){this.a=a},
hy:function hy(a,b,c){this.a=a
this.b=b
this.c=c},
iN:function iN(){},
iM:function iM(a){this.a=a},
iO:function iO(){},
iP:function iP(){},
ir:function ir(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
i_:function i_(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
nq:function(a){var u,t
u=J.S(a)
if(!!u.$ib0){t=u.gee(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.em(a.data,a.height,a.width)},
np:function(a){if(a instanceof P.em)return{data:a.a,height:a.b,width:a.c}
return a},
no:function(a,b){var u={}
a.a_(0,new P.iT(u))
return u},
is:function is(){},
iu:function iu(a,b){this.a=a
this.b=b},
em:function em(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a){this.a=a},
it:function it(a,b){this.a=a
this.b=b},
eZ:function eZ(a,b){this.a=a
this.b=b},
f_:function f_(){},
f0:function f0(){},
ie:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mU:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ih:function ih(){},
ay:function ay(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
co:function co(){},
p:function p(){},
M:function M(){},
d2:function d2(){},
de:function de(){},
dE:function dE(){},
bO:function bO(){},
dJ:function dJ(){},
dR:function dR(){},
dY:function dY(){}},W={
k6:function(a){var u=document.createElement("a")
return u},
jo:function(a,b){var u=document.createElement("canvas")
return u},
m0:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ag(u,a,b,c)
t.toString
u=W.B
u=new H.cG(new W.am(t),H.k(new W.eS(),{func:1,ret:P.N,args:[u]}),[u])
return H.d(u.gaL(u),"$iQ")},
m1:function(a){H.d(a,"$ibB")
return"wheel"},
c8:function(a){var u,t,s
u="element tag unavailable"
try{t=J.lO(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ad(s)}return u},
m4:function(a){var u,t,s
t=document.createElement("input")
u=H.d(t,"$icd")
try{u.type=a}catch(s){H.ad(s)}return u},
id:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kP:function(a,b,c,d){var u,t
u=W.id(W.id(W.id(W.id(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a4:function(a,b,c,d,e){var u,t
u=W.l3(new W.i3(c),W.m)
t=u!=null
if(t&&!0){H.k(u,{func:1,args:[W.m]})
if(t)J.lJ(a,b,u,!1)}return new W.i2(a,b,u,!1,[e])},
kO:function(a){var u,t
u=W.k6(null)
t=window.location
u=new W.bs(new W.im(u,t))
u.fU(a)
return u},
mS:function(a,b,c,d){H.d(a,"$iQ")
H.G(b)
H.G(c)
H.d(d,"$ibs")
return!0},
mT:function(a,b,c,d){var u,t,s
H.d(a,"$iQ")
H.G(b)
H.G(c)
u=H.d(d,"$ibs").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kQ:function(){var u,t,s,r,q
u=P.f
t=P.ki(C.A,u)
s=H.r(C.A,0)
r=H.k(new W.ix(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.iw(t,P.dq(null,null,null,u),P.dq(null,null,null,u),P.dq(null,null,null,u),null)
t.h5(null,new H.fr(C.A,r,[s,u]),q,null)
return t},
l3:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.V
if(u===C.l)return a
return u.ea(a,b)},
w:function w(){},
d_:function d_(){},
ey:function ey(){},
c2:function c2(){},
be:function be(){},
bw:function bw(){},
bx:function bx(){},
bf:function bf(){},
c6:function c6(){},
eL:function eL(){},
ax:function ax(){},
c7:function c7(){},
eO:function eO(){},
da:function da(){},
db:function db(){},
hZ:function hZ(a,b){this.a=a
this.b=b},
Q:function Q(){},
eS:function eS(){},
m:function m(){},
bB:function bB(){},
f1:function f1(){},
df:function df(){},
dg:function dg(){},
bD:function bD(){},
dh:function dh(){},
b0:function b0(){},
cc:function cc(){},
cd:function cd(){},
aO:function aO(){},
dn:function dn(){},
dr:function dr(){},
ci:function ci(){},
a9:function a9(){},
am:function am(a){this.a=a},
B:function B(){},
cl:function cl(){},
dF:function dF(){},
fV:function fV(){},
aS:function aS(){},
dO:function dO(){},
dP:function dP(){},
h9:function h9(){},
cs:function cs(){},
aI:function aI(){},
aJ:function aJ(){},
hh:function hh(){},
bq:function bq(){},
hR:function hR(){},
aW:function aW(){},
cH:function cH(){},
cI:function cI(){},
e8:function e8(){},
ee:function ee(){},
hY:function hY(){},
i0:function i0(a){this.a=a},
i1:function i1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jG:function jG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i2:function i2(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
i3:function i3(a){this.a=a},
bs:function bs(a){this.a=a},
as:function as(){},
dA:function dA(a){this.a=a},
fF:function fF(a){this.a=a},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
eh:function eh(){},
ip:function ip(){},
iq:function iq(){},
iw:function iw(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ix:function ix(){},
iv:function iv(){},
dd:function dd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
av:function av(){},
im:function im(a,b){this.a=a
this.b=b},
ep:function ep(a){this.a=a},
iI:function iI(a){this.a=a},
e7:function e7(){},
ea:function ea(){},
eb:function eb(){},
ef:function ef(){},
eg:function eg(){},
ek:function ek(){},
el:function el(){},
eq:function eq(){},
er:function er(){}},O={
jp:function(a){var u=new O.Z([a])
u.c1(a)
return u},
Z:function Z(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cg:function cg(){this.b=this.a=null},
kj:function(){var u,t,s
u=new O.du()
u.shf(O.jp(V.ae))
u.e.bj(u.ghP(),u.ghR())
t=new O.aP(u,"emission")
t.c=C.d
t.f=new V.a_(0,0,0)
u.f=t
t=new O.aP(u,"ambient")
t.c=C.d
t.f=new V.a_(0,0,0)
u.r=t
t=new O.aP(u,"diffuse")
t.c=C.d
t.f=new V.a_(0,0,0)
u.x=t
t=new O.aP(u,"invDiffuse")
t.c=C.d
t.f=new V.a_(0,0,0)
u.y=t
t=new O.fx(u,"specular")
t.c=C.d
t.f=new V.a_(0,0,0)
t.ch=100
u.z=t
t=new O.fu(u,"bump")
t.c=C.d
u.Q=t
u.ch=null
t=new O.aP(u,"reflect")
t.c=C.d
t.f=new V.a_(0,0,0)
u.cx=t
t=new O.fw(u,"refract")
t.c=C.d
t.f=new V.a_(0,0,0)
t.ch=1
u.cy=t
t=new O.ft(u,"alpha")
t.c=C.d
t.f=1
u.db=t
t=new D.dp()
t.c1(D.a1)
t.sfW(H.b([],[D.d9]))
t.sfY(H.b([],[D.dD]))
t.sfZ(H.b([],[D.dL]))
t.sh_(H.b([],[D.dS]))
t.sh0(H.b([],[D.bp]))
t.sh1(H.b([],[D.dT]))
t.Q=null
t.ch=null
t.dh(t.ghN(),t.giq(),t.giu())
u.dx=t
s=t.Q
if(s==null){s=D.P()
t.Q=s
t=s}else t=s
t.h(0,u.giO())
t=u.dx
s=t.ch
if(s==null){s=D.P()
t.ch=s
t=s}else t=s
t.h(0,u.gbm())
u.dy=null
return u},
du:function du(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ft:function ft(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cf:function cf(){},
fu:function fu(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aP:function aP(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fw:function fw(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fx:function fx(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bo:function bo(){}},E={
js:function(a,b,c,d,e,f){var u=new E.aj()
u.a=d
u.b=!0
u.sfT(0,O.jp(E.aj))
u.y.bj(u.gkH(),u.gkK())
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
u.sad(0,e)
u.sbf(f)
u.saX(c)
return u},
mz:function(a,b){var u=new E.fQ(a,b)
u.fO(a,b)
return u},
mD:function(a,b,c,d,e){var u,t,s,r
u=J.S(a)
if(!!u.$ibw)return E.kz(a,!0,!0,!0,!1)
t=W.jo(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcG(a).h(0,t)
r=E.kz(t,!0,!0,!0,!1)
r.a=a
return r},
kz:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dU()
t=P.mc(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
s=C.q.bW(a,"webgl",t)
s=H.d(s==null?C.q.bW(a,"experimental-webgl",t):s,"$ibO")
if(s==null)H.q(P.u("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.mz(s,a)
r=new T.hb(s)
r.b=H.ac((s&&C.b).df(s,3379))
r.c=H.ac(C.b.df(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.e0(a)
q=new X.fe()
q.c=new X.au(!1,!1,!1)
q.siD(P.dq(null,null,null,P.l))
r.b=q
q=new X.fz(r)
q.f=0
q.r=V.bn()
q.x=V.bn()
q.Q=1
q.ch=1
r.c=q
q=new X.fl(r)
q.r=0
q.x=V.bn()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.hg(r)
q.e=0
q.f=V.bn()
q.r=V.bn()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.shr(H.b([],[[P.cr,P.L]]))
q=r.z
p=document
o=W.a9
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a4(p,"contextmenu",H.k(r.ghZ(),n),!1,o))
q=r.z
m=W.m
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a4(a,"focus",H.k(r.gi4(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a4(a,"blur",H.k(r.ghT(),l),!1,m))
q=r.z
k=W.aO
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a4(p,"keyup",H.k(r.gi8(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a4(p,"keydown",H.k(r.gi6(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a4(a,"mousedown",H.k(r.gic(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a4(a,"mouseup",H.k(r.gii(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a4(a,"mousemove",H.k(r.gig(),n),!1,o))
k=r.z
j=W.aW;(k&&C.a).h(k,W.a4(a,H.G(W.m1(a)),H.k(r.gik(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a4(p,"mousemove",H.k(r.gi0(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a4(p,"mouseup",H.k(r.gi2(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a4(p,"pointerlockchange",H.k(r.gim(),l),!1,m))
m=r.z
l=W.aJ
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a4(a,"touchstart",H.k(r.giA(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a4(a,"touchend",H.k(r.giw(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a4(a,"touchmove",H.k(r.giy(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ai(Date.now(),!1)
u.cy=0
u.dU()
return u},
eC:function eC(){},
aj:function aj(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fQ:function fQ(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fR:function fR(a){this.a=a},
fS:function fS(a){this.a=a},
fT:function fT(a){this.a=a},
dU:function dU(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hd:function hd(a){this.a=a}},Z={
jF:function(a,b,c){var u
H.h(c,"$ia",[P.l],"$aa")
u=a.createBuffer()
C.b.ax(a,b,u)
C.b.ec(a,b,new Int16Array(H.bS(c)),35044)
C.b.ax(a,b,null)
return new Z.e5(b,u)},
az:function(a){return new Z.aV(a)},
e5:function e5(a,b){this.a=a
this.b=b},
d3:function d3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hS:function hS(a){this.a=a},
d4:function d4(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
aV:function aV(a){this.a=a}},D={
P:function(){var u=new D.bA()
u.sal(null)
u.sb2(null)
u.c=null
u.d=0
return u},
eF:function eF(){},
bA:function bA(){var _=this
_.d=_.c=_.b=_.a=null},
eW:function eW(a){this.a=a},
eX:function eX(a){this.a=a},
y:function y(a){this.a=a
this.b=null},
bF:function bF(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bG:function bG(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
C:function C(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
d9:function d9(){},
a1:function a1(){},
dp:function dp(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dD:function dD(){},
dL:function dL(){},
dS:function dS(){},
bp:function bp(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dT:function dT(){}},X={d5:function d5(a,b){this.a=a
this.b=b},dm:function dm(a,b){this.a=a
this.b=b},fe:function fe(){var _=this
_.d=_.c=_.b=_.a=null},ds:function ds(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fl:function fl(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},au:function au(a,b,c){this.a=a
this.b=b
this.c=c},b4:function b4(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fz:function fz(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cj:function cj(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},fL:function fL(){},dW:function dW(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hg:function hg(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},e0:function e0(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
m3:function(a,b,c,d,e,f,g){var u,t
u=new X.f3()
t=new V.aE(0,0,0,1)
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
d6:function d6(){},
f3:function f3(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dC:function dC(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dQ:function dQ(){}},V={
jj:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bi(a-b,u)
return(a<0?a+u:a)+b},
K:function(a,b,c){if(a==null)return C.c.ai("null",c)
return C.c.ai(C.e.fb(Math.abs(a-0)<$.D().a?0:a,b),c+b+1)},
bX:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ia",[P.o],"$aa")
u=H.b([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.z)(a),++r){q=V.K(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.q(u,p,C.c.ai(u[p],s))}return u},
jW:function(a,b){return C.e.ld(Math.pow(b,C.a_.cS(Math.log(H.nn(a))/Math.log(b))))},
ch:function(){var u=$.fy
if(u==null){u=V.aQ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.fy=u}return u},
aQ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ae(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kn:function(a,b,c){return V.aQ(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
jz:function(a,b,c,d){return V.aQ(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
kk:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aQ(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
kl:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aQ(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
km:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aQ(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
bn:function(){var u=$.kr
if(u==null){u=new V.a3(0,0)
$.kr=u}return u},
mj:function(){var u=$.cm
if(u==null){u=new V.Y(0,0,0)
$.cm=u}return u},
ku:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dH(a,b,c,d)},
cF:function(){var u=$.kM
if(u==null){u=new V.E(0,0,0)
$.kM=u}return u},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eU:function eU(a){this.a=a},
dv:function dv(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ae:function ae(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dH:function dH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a,b){this.a=a
this.b=b},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
U:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.I(a,0)
t=C.c.I(b,0)
s=new V.fO()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.fW()
u.fP(a)
return u},
hf:function(){var u,t
u=new V.he()
t=P.f
u.sj3(new H.aH([t,V.cq]))
u.sj7(new H.aH([t,V.cv]))
u.c=null
return u},
aY:function aY(){},
at:function at(){},
dt:function dt(){},
aq:function aq(){this.a=null},
fO:function fO(){this.b=this.a=null},
fW:function fW(){this.a=null},
cq:function cq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
cv:function cv(a,b){this.a=a
this.b=b
this.c=null},
he:function he(){this.c=this.b=this.a=null},
cw:function cw(a){this.b=a
this.a=this.c=null},
nP:function(a){P.mE(C.V,new V.je(a))},
mB:function(a,b){var u=new V.h_()
u.fR(a,!0)
return u},
bg:function bg(){},
je:function je(a){this.a=a},
eN:function eN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f4:function f4(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f5:function f5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fK:function fK(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fM:function fM(a,b){this.a=a
this.b=b
this.c=null},
fN:function fN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h_:function h_(){this.b=this.a=null},
h1:function h1(a){this.a=a},
h0:function h0(a){this.a=a},
h2:function h2(a){this.a=a}},U={
jq:function(){var u=new U.eG()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
eI:function(a){var u=new U.d7()
u.a=a
return u},
jt:function(a){var u=new U.cb()
u.c1(U.a6)
u.bj(u.gh2(),u.gis())
u.e=null
u.f=V.ch()
u.r=0
return u},
eG:function eG(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){this.b=this.a=null},
cb:function cb(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a6:function a6(){},
dI:function dI(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e1:function e1(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e3:function e3(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dc:function dc(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mh:function(a,b){var u,t
u=a.an
t=new A.fs(b,u)
t.fQ(b,u)
t.fN(a,b)
return t},
jC:function(a,b,c,d,e){var u=new A.hm(a,b,c,e)
u.f=d
u.sji(P.me(d,0,!1,P.l))
return u},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
ez:function ez(a){this.a=a},
fs:function fs(a,b){var _=this
_.bx=_.ej=_.bw=_.an=_.aA=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eA=_.cL=_.ez=_.bK=_.ey=_.ex=_.bJ=_.bI=_.ew=_.ev=_.bH=_.bG=_.bF=_.eu=_.es=_.bE=_.er=_.eq=_.bD=_.ep=_.eo=_.bC=_.bB=_.en=_.em=_.bA=_.bz=_.el=_.ek=_.by=null
_.cQ=_.eE=_.cP=_.eD=_.cO=_.eC=_.cN=_.eB=_.cM=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fv:function fv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aA=b3
_.an=b4
_.bw=b5},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cz:function cz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cC:function cC(a,b,c,d,e,f,g,h,i,j){var _=this
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
cD:function cD(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bz:function bz(a,b){this.a=a
this.b=b},
dX:function dX(){},
hs:function hs(a){this.a=a},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ho:function ho(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hp:function hp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hr:function hr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hm:function hm(a,b,c,d){var _=this
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
hn:function hn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hq:function hq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ht:function ht(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
jR:function(a,b,c,d){var u
H.k(c,{func:1,ret:-1,args:[F.aa,P.o,P.o]})
u=F.jA()
F.cQ(u,b,c,d,a,1,0,0,1)
F.cQ(u,b,c,d,a,0,1,0,3)
F.cQ(u,b,c,d,a,0,0,1,2)
F.cQ(u,b,c,d,a,-1,0,0,0)
F.cQ(u,b,c,d,a,0,-1,0,0)
F.cQ(u,b,c,d,a,0,0,-1,3)
u.ay()
return u},
iL:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cQ:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.k(c,{func:1,ret:-1,args:[F.aa,P.o,P.o]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.E(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.E(o+a3,n+a1,m+a2)
u.b=l
k=new V.E(o-a3,n-a1,m-a2)
u.c=k
j=new V.E(t-a3,r-a1,q-a2)
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
e=F.jZ(d,a0,new F.iK(u,F.iL(u.c),F.iL(u.d),f,g,c),b)
if(e!=null)a.bb(e)},
l9:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.k(e,{func:1,ret:P.o,args:[P.o]})
if(a0<3)return
u=F.jA()
t=b?-1:1
s=-6.283185307179586/a0
r=H.b([],[F.aa])
q=u.a
p=new V.E(0,0,t)
p=p.C(0,Math.sqrt(p.H(p)))
C.a.h(r,q.jJ(new V.aR(a,-1,-1,-1),new V.aE(1,1,1,1),new V.Y(0,0,d),new V.E(0,0,t),new V.a3(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.A(k)
j=new V.E(m,l,t).C(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.e4(new V.aR(a,-1,-1,-1),null,new V.aE(i,g,h,1),new V.Y(m*k,l*k,d),new V.E(0,0,t),new V.a3(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.jH(r)
return u},
l7:function(a,b,c,d,e,f){return F.nr(!0,c,d,new F.iU(a,f),e)},
nr:function(a,b,c,d,e){var u
H.k(d,{func:1,ret:P.o,args:[P.o,P.o]})
if(e<3)return
if(c<1)return
u=F.jZ(c,e,new F.iW(d),null)
if(u==null)return
u.ay()
u.cz()
if(b)u.bb(F.l9(3,!1,!1,1,new F.iX(d),e))
u.bb(F.l9(1,!0,!1,-1,new F.iY(d),e))
return u},
lj:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.jf()
t=F.jR(a,null,new F.jg(u,c),d)
t.cz()
return t},
ll:function(a,b,c,d){return F.l8(c,a,d,b,new F.jh())},
nH:function(a,b,c,d,e,f){return F.l8(d,a,e,b,new F.j4(f,c))},
l8:function(a,b,c,d,e){var u=F.jZ(a,b,new F.iV(H.k(e,{func:1,ret:V.Y,args:[P.o]}),d,b,c),null)
if(u==null)return
u.ay()
u.cz()
return u},
jZ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.aa,P.o,P.o]})
if(a<1)return
if(b<1)return
u=F.jA()
t=H.b([],[F.aa])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.e4(null,null,new V.aE(p,0,0,1),null,null,new V.a3(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cI(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.e4(null,null,new V.aE(j,i,h,1),null,null,new V.a3(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cI(d))}}u.d.jI(a+1,b+1,t)
return u},
c9:function(a,b,c){var u,t
u=new F.a2()
t=a.a
if(t==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
u.cv(a)
u.cw(b)
u.iX(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a3()
return u},
ma:function(a,b){var u,t
u=new F.b3()
t=a.a
if(t==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
u.cv(a)
u.cw(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a3()
return u},
jA:function(){var u,t
u=new F.dK()
t=new F.hG(u)
t.b=!1
t.sjj(H.b([],[F.aa]))
u.a=t
t=new F.fZ(u)
t.scn(H.b([],[F.bm]))
u.b=t
t=new F.fY(u)
t.shC(H.b([],[F.b3]))
u.c=t
t=new F.fX(u)
t.shs(H.b([],[F.a2]))
u.d=t
u.e=null
return u},
e4:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.aa()
t=new F.hO(u)
t.scn(H.b([],[F.bm]))
u.b=t
t=new F.hK(u)
s=[F.b3]
t.shD(H.b([],s))
t.shE(H.b([],s))
u.c=t
t=new F.hH(u)
s=[F.a2]
t.sht(H.b([],s))
t.shu(H.b([],s))
t.shv(H.b([],s))
u.d=t
h=$.lz()
u.e=0
t=$.bb()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.ba().a)!==0?e:null
u.x=(s&$.b9().a)!==0?b:null
u.y=(s&$.bc().a)!==0?f:null
u.z=(s&$.bd().a)!==0?g:null
u.Q=(s&$.lA().a)!==0?c:null
u.ch=(s&$.c1().a)!==0?i:0
u.cx=(s&$.b8().a)!==0?a:null
return u},
iK:function iK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iU:function iU(a,b){this.a=a
this.b=b},
iW:function iW(a){this.a=a},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
jf:function jf(){},
jg:function jg(a,b){this.a=a
this.b=b},
jh:function jh(){},
j4:function j4(a,b){this.a=a
this.b=b},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eY:function eY(){},
h3:function h3(){},
b3:function b3(){this.b=this.a=null},
ff:function ff(){},
hl:function hl(){},
bm:function bm(){this.a=null},
dK:function dK(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fX:function fX(a){this.a=a
this.b=null},
fY:function fY(a){this.a=a
this.b=null},
fZ:function fZ(a){this.a=a
this.b=null},
aa:function aa(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hQ:function hQ(a){this.a=a},
hP:function hP(a){this.a=a},
hG:function hG(a){this.a=a
this.c=this.b=null},
hH:function hH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hI:function hI(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b){this.a=a
this.b=b},
hK:function hK(a){this.a=a
this.c=this.b=null},
hM:function hM(){},
hL:function hL(){},
hN:function hN(){},
fG:function fG(){},
hO:function hO(a){this.a=a
this.b=null}},T={ct:function ct(){},cu:function cu(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hb:function hb(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},hc:function hc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lf:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
u=V.mB("Test 022",!0)
t=W.jo(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.F(u.a,t)
s=[P.f]
u.e3(H.b(["Test of the Material Lighting shader with a textured point light."],s))
u.jG(H.b(["shapes"],s))
u.e3(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.de(s,"testCanvas")
if(r==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
q=E.mD(r,!0,!0,!0,!1)
p=q.f
o=p.a
n=o.createTexture()
C.b.aU(o,34067,n)
C.b.bQ(o,34067,10242,10497)
C.b.bQ(o,34067,10243,10497)
C.b.bQ(o,34067,10241,9729)
C.b.bQ(o,34067,10240,9729)
C.b.aU(o,34067,null)
m=new T.cu()
m.a=0
m.b=n
m.c=!1
m.d=0
p.aP(m,n,"../resources/earthColor/posx.png",34069,!1,!1)
p.aP(m,n,"../resources/earthColor/negx.png",34070,!1,!1)
p.aP(m,n,"../resources/earthColor/posy.png",34071,!1,!1)
p.aP(m,n,"../resources/earthColor/negy.png",34072,!1,!1)
p.aP(m,n,"../resources/earthColor/posz.png",34073,!1,!1)
p.aP(m,n,"../resources/earthColor/negz.png",34074,!1,!1)
l=U.jt(null)
l.h(0,U.eI(V.kn(0,0,2)))
p=new U.dI()
p.a=0
p.b=0
p.c=0
p.d=0
p.e=0
p.f=0
p.r=0
p.sfj(0)
p.sf1(0)
p.sf7(0)
o=p.d
if(!(Math.abs(o-0.5)<$.D().a)){p.d=0.5
o=new D.C("deltaYaw",o,0.5,p,[P.o])
o.b=!0
p.K(o)}o=p.e
if(!(Math.abs(o-0.5)<$.D().a)){p.e=0.5
o=new D.C("deltaPitch",o,0.5,p,[P.o])
o.b=!0
p.K(o)}o=p.f
if(!(Math.abs(o-0)<$.D().a)){p.f=0
o=new D.C("deltaRoll",o,0,p,[P.o])
o.b=!0
p.K(o)}l.h(0,p)
k=E.js(null,!0,null,"",null,null)
p=U.jt(null)
p.h(0,U.eI(V.jz(0.2,0.2,0.2,1)))
p.h(0,l)
k.saX(p)
k.sad(0,F.lj(8,null,1,8))
p=O.kj()
o=p.f
j=o.c
if(j!==C.h){if(j===C.d)o.aG()
o.c=C.h
o.iV(null)
j=o.a
j.a=null
j.a1(null)}o.iW(m)
k.sbf(p)
i=new D.bp()
i.c=new V.a_(1,1,1)
i.e=1
i.f=0
i.r=0
i.a=V.ch()
h=i.b
i.b=l
l.gv().h(0,i.gc2())
p=new D.C("mover",h,i.b,i,[U.a6])
p.b=!0
i.aa(p)
g=new V.a_(1,1,1)
if(!i.c.A(0,g)){h=i.c
i.c=g
p=new D.C("color",h,g,i,[V.a_])
p.b=!0
i.aa(p)}p=i.d
if(p!==m){if(p!=null)p.gv().M(0,i.gc2())
h=i.d
i.d=m
m.gv().h(0,i.gc2())
p=new D.C("texture",h,i.d,i,[T.cu])
p.b=!0
i.aa(p)}p=i.e
if(!(Math.abs(p-1)<$.D().a)){i.e=1
p=new D.C("attenuation0",p,1,i,[P.o])
p.b=!0
i.aa(p)}p=i.f
if(!(Math.abs(p-0.15)<$.D().a)){i.f=0.15
p=new D.C("attenuation1",p,0.15,i,[P.o])
p.b=!0
i.aa(p)}p=i.r
if(!(Math.abs(p-0.05)<$.D().a)){i.r=0.05
p=new D.C("attenuation2",p,0.05,i,[P.o])
p.b=!0
i.aa(p)}f=O.kj()
f.dx.h(0,i)
p=f.r
p.saz(0,new V.a_(0.2,0.2,0.2))
p=f.x
p.saz(0,new V.a_(1,1,1))
p=f.z
p.saz(0,new V.a_(1,1,1))
p=f.z
if(p.c===C.d){p.c=C.j
p.c0()
p.cs(100)
o=p.a
o.a=null
o.a1(null)}p.cs(100)
e=E.js(null,!0,null,"",null,null)
e.saX(U.eI(V.jz(3,3,3,1)))
p=F.jR(1,null,null,1)
p.cR()
e.sad(0,p)
d=E.js(null,!0,null,"",null,null)
d.sad(0,F.ll(30,1,15,0.5))
c=U.jt(null)
p=q.r
o=new U.e2()
j=U.jq()
j.sdd(0,!0)
j.scZ(6.283185307179586)
j.sd0(0)
j.sa2(0,0)
j.sd_(100)
j.sW(0)
j.scJ(0.5)
o.b=j
b=o.gaQ()
j.gv().h(0,b)
j=U.jq()
j.sdd(0,!0)
j.scZ(6.283185307179586)
j.sd0(0)
j.sa2(0,0)
j.sd_(100)
j.sW(0)
j.scJ(0.5)
o.c=j
j.gv().h(0,b)
o.d=null
o.e=!1
o.f=!1
o.r=!1
o.x=2.5
o.y=2.5
o.z=2
o.Q=4
o.cx=!1
o.ch=!1
o.cy=0
o.db=0
o.dx=null
o.dy=0
o.fr=null
o.fx=null
a=new X.au(!1,!1,!1)
h=o.d
o.d=a
j=[X.au]
b=new D.C("modifiers",h,a,o,j)
b.b=!0
o.K(b)
b=o.f
if(b!==!1){o.f=!1
b=new D.C("invertX",b,!1,o,[P.N])
b.b=!0
o.K(b)}b=o.r
if(b!==!1){o.r=!1
b=new D.C("invertY",b,!1,o,[P.N])
b.b=!0
o.K(b)}o.b6(p)
c.h(0,o)
p=q.r
o=new U.e1()
b=U.jq()
b.sdd(0,!0)
b.scZ(6.283185307179586)
b.sd0(0)
b.sa2(0,0)
b.sd_(100)
b.sW(0)
b.scJ(0.2)
o.b=b
b.gv().h(0,o.gaQ())
o.c=null
o.d=!1
o.e=2.5
o.f=2
o.r=4
o.y=!1
o.x=!1
o.z=0
o.Q=null
o.ch=0
o.cx=null
o.cy=null
a=new X.au(!0,!1,!1)
h=o.c
o.c=a
b=new D.C("modifiers",h,a,o,j)
b.b=!0
o.K(b)
o.b6(p)
c.h(0,o)
p=q.r
o=new U.e3()
o.c=0.01
o.d=0
o.e=0
a=new X.au(!1,!1,!1)
o.b=a
j=new D.C("modifiers",null,a,o,j)
j.b=!0
o.K(j)
o.b6(p)
c.h(0,o)
c.h(0,U.eI(V.kn(0,0,5)))
a0=new M.dc()
a0.shi(0,O.jp(E.aj))
a0.d.bj(a0.ghV(),a0.ghX())
a0.e=null
a0.f=null
a0.r=null
a0.x=null
a1=X.m3(!0,!0,!1,null,2000,null,0)
a2=new X.dC()
a2.c=1.0471975511965976
a2.d=0.1
a2.e=2000
a2.saX(null)
p=a2.c
if(!(Math.abs(p-1.0471975511965976)<$.D().a)){a2.c=1.0471975511965976
p=new D.C("fov",p,1.0471975511965976,a2,[P.o])
p.b=!0
a2.aN(p)}p=a2.d
if(!(Math.abs(p-0.1)<$.D().a)){a2.d=0.1
p=new D.C("near",p,0.1,a2,[P.o])
p.b=!0
a2.aN(p)}p=a2.e
if(!(Math.abs(p-2000)<$.D().a)){a2.e=2000
p=new D.C("far",p,2000,a2,[P.o])
p.b=!0
a2.aN(p)}p=a0.a
if(p!==a2){if(p!=null)p.gv().M(0,a0.gat())
h=a0.a
a0.a=a2
a2.gv().h(0,a0.gat())
p=new D.C("camera",h,a0.a,a0,[X.d6])
p.b=!0
a0.aD(p)}p=a0.b
if(p!==a1){if(p!=null)p.gv().M(0,a0.gat())
h=a0.b
a0.b=a1
a1.gv().h(0,a0.gat())
p=new D.C("target",h,a0.b,a0,[X.dQ])
p.b=!0
a0.aD(p)}a0.sbf(null)
a0.sbf(f)
a0.d.h(0,e)
a0.d.h(0,d)
a0.d.h(0,k)
a0.a.saX(c)
p=q.d
if(p!==a0){if(p!=null)p.gv().M(0,q.gdk())
q.d=a0
a0.gv().h(0,q.gdk())
q.dl()}p=new V.fM("shapes",!0)
s=C.z.de(s,"shapes")
p.c=s
if(s==null)H.q("Failed to find shapes for RadioGroup")
p.b5(0,"Cube",new T.j5(d))
p.b5(0,"Cylinder",new T.j6(d))
p.b5(0,"Cone",new T.j7(d))
p.b5(0,"Sphere",new T.j8(d))
p.e1(0,"Toroid",new T.j9(d),!0)
p.b5(0,"Knot",new T.ja(d))
s=q.z
if(s==null){s=D.P()
q.z=s}p={func:1,ret:-1,args:[D.y]}
o=H.k(new T.jb(u,f),p)
if(s.b==null)s.sb2(H.b([],[p]))
s=s.b;(s&&C.a).h(s,o)
V.nP(q)},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
jb:function jb(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jw.prototype={}
J.a8.prototype={
A:function(a,b){return a===b},
gL:function(a){return H.cn(a)},
i:function(a){return"Instance of '"+H.bL(a)+"'"}}
J.fb.prototype={
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$iN:1}
J.dk.prototype={
A:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$iF:1}
J.dl.prototype={
gL:function(a){return 0},
i:function(a){return String(a)}}
J.fJ.prototype={}
J.br.prototype={}
J.b2.prototype={
i:function(a){var u=a[$.ln()]
if(u==null)return this.fI(a)
return"JavaScript function for "+H.j(J.ao(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibj:1}
J.aF.prototype={
h:function(a,b){H.x(b,H.r(a,0))
if(!!a.fixed$length)H.q(P.X("add"))
a.push(b)},
l_:function(a,b){var u
if(!!a.fixed$length)H.q(P.X("removeAt"))
u=a.length
if(b>=u)throw H.c(P.dG(b,null,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.q(P.X("remove"))
for(u=0;u<a.length;++u)if(J.O(a[u],b)){a.splice(u,1)
return!0}return!1},
a_:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.aZ(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.q(u,t,H.j(a[t]))
return u.join(b)},
kB:function(a){return this.l(a,"")},
ks:function(a,b,c,d){var u,t,s
H.x(b,d)
H.k(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.aZ(a))}return t},
kr:function(a,b,c){var u,t,s
H.k(b,{func:1,ret:P.N,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.aZ(a))}throw H.c(H.f9())},
kq:function(a,b){return this.kr(a,b,null)},
a9:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
fF:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a7(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.a7(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.r(a,0)])
return H.b(a.slice(b,c),[H.r(a,0)])},
gkp:function(a){if(a.length>0)return a[0]
throw H.c(H.f9())},
gaC:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.f9())},
fC:function(a,b,c,d,e){var u,t,s
u=H.r(a,0)
H.h(d,"$in",[u],"$an")
if(!!a.immutable$list)H.q(P.X("setRange"))
P.b6(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.h(d,"$ia",[u],"$aa")
u=J.bY(d)
if(e+t>u.gm(d))throw H.c(H.m6())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.k(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.k(d,e+s)},
bk:function(a,b,c,d){return this.fC(a,b,c,d,0)},
e4:function(a,b){var u,t
H.k(b,{func:1,ret:P.N,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.aZ(a))}return!1},
X:function(a,b){var u
for(u=0;u<a.length;++u)if(J.O(a[u],b))return!0
return!1},
i:function(a){return P.ju(a,"[","]")},
gV:function(a){return new J.ap(a,a.length,0,[H.r(a,0)])},
gL:function(a){return H.cn(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.X("set length"))
if(b<0)throw H.c(P.a7(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(b>=a.length||b<0)throw H.c(H.bW(a,b))
return a[b]},
q:function(a,b,c){H.x(c,H.r(a,0))
if(!!a.immutable$list)H.q(P.X("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bW(a,b))
a[b]=c},
n:function(a,b){var u,t
u=[H.r(a,0)]
H.h(b,"$ia",u,"$aa")
t=C.f.n(a.length,b.gm(b))
u=H.b([],u)
this.sm(u,t)
this.bk(u,0,a.length,a)
this.bk(u,a.length,t,b)
return u},
$in:1,
$ia:1}
J.jv.prototype={}
J.ap.prototype={
gN:function(){return this.d},
E:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.z(u))
s=this.c
if(s>=t){this.sdF(null)
return!1}this.sdF(u[s]);++this.c
return!0},
sdF:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
J.bl.prototype={
ld:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.X(""+a+".toInt()"))},
cS:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.X(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.X(""+a+".round()"))},
fb:function(a,b){var u,t
if(b>20)throw H.c(P.a7(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bg:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a7(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a0(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.q(P.X("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.t("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
n:function(a,b){if(typeof b!=="number")throw H.c(H.an(b))
return a+b},
u:function(a,b){if(typeof b!=="number")throw H.c(H.an(b))
return a-b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.an(b))
return a*b},
bi:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fM:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dX(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dX(a,b)},
dX:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.X("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
aS:function(a,b){var u
if(a>0)u=this.dW(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
j1:function(a,b){if(b<0)throw H.c(H.an(b))
return this.dW(a,b)},
dW:function(a,b){return b>31?0:a>>>b},
$io:1,
$iag:1}
J.dj.prototype={$il:1}
J.di.prototype={}
J.b1.prototype={
a0:function(a,b){if(b<0)throw H.c(H.bW(a,b))
if(b>=a.length)H.q(H.bW(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.c(H.bW(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.c(P.jm(b,null,null))
return a+b},
aZ:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.an(b))
c=P.b6(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ae:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.an(c))
if(typeof c!=="number")return c.Y()
if(c<0||c>a.length)throw H.c(P.a7(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.ae(a,b,0)},
w:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.an(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Y()
if(b<0)throw H.c(P.dG(b,null,null))
if(b>c)throw H.c(P.dG(b,null,null))
if(c>a.length)throw H.c(P.dG(c,null,null))
return a.substring(b,c)},
as:function(a,b){return this.w(a,b,null)},
lg:function(a){return a.toLowerCase()},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.S)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kP:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.t(c,u)+a},
ai:function(a,b){return this.kP(a,b," ")},
eN:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a7(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eM:function(a,b){return this.eN(a,b,0)},
i:function(a){return a},
gL:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikp:1,
$if:1}
H.t.prototype={
gm:function(a){return this.a.length},
k:function(a,b){return C.c.a0(this.a,b)},
$acE:function(){return[P.l]},
$aT:function(){return[P.l]},
$an:function(){return[P.l]},
$aa:function(){return[P.l]}}
H.eR.prototype={}
H.bH.prototype={
gV:function(a){return new H.ce(this,this.gm(this),0,[H.ab(this,"bH",0)])},
bT:function(a,b){return this.fH(0,H.k(b,{func:1,ret:P.N,args:[H.ab(this,"bH",0)]}))}}
H.ce.prototype={
gN:function(){return this.d},
E:function(){var u,t,s,r
u=this.a
t=J.bY(u)
s=t.gm(u)
if(this.b!==s)throw H.c(P.aZ(u))
r=this.c
if(r>=s){this.sb0(null)
return!1}this.sb0(t.a9(u,r));++this.c
return!0},
sb0:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
H.fp.prototype={
gV:function(a){return new H.fq(J.bv(this.a),this.b,this.$ti)},
gm:function(a){return J.aC(this.a)},
a9:function(a,b){return this.b.$1(J.ex(this.a,b))},
$an:function(a,b){return[b]}}
H.fq.prototype={
E:function(){var u=this.b
if(u.E()){this.sb0(this.c.$1(u.gN()))
return!0}this.sb0(null)
return!1},
gN:function(){return this.a},
sb0:function(a){this.a=H.x(a,H.r(this,1))},
$aaN:function(a,b){return[b]}}
H.fr.prototype={
gm:function(a){return J.aC(this.a)},
a9:function(a,b){return this.b.$1(J.ex(this.a,b))},
$abH:function(a,b){return[b]},
$an:function(a,b){return[b]}}
H.cG.prototype={
gV:function(a){return new H.hT(J.bv(this.a),this.b,this.$ti)}}
H.hT.prototype={
E:function(){var u,t
for(u=this.a,t=this.b;u.E();)if(t.$1(u.gN()))return!0
return!1},
gN:function(){return this.a.gN()}}
H.bC.prototype={}
H.cE.prototype={
q:function(a,b,c){H.x(c,H.ab(this,"cE",0))
throw H.c(P.X("Cannot modify an unmodifiable list"))}}
H.dZ.prototype={}
H.eJ.prototype={
i:function(a){return P.jy(this)},
q:function(a,b,c){H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
return H.lY()},
$iH:1}
H.eK.prototype={
gm:function(a){return this.a},
br:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k:function(a,b){if(!this.br(b))return
return this.dG(b)},
dG:function(a){return this.b[H.G(a)]},
a_:function(a,b){var u,t,s,r,q
u=H.r(this,1)
H.k(b,{func:1,ret:-1,args:[H.r(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.x(this.dG(q),u))}}}
H.fP.prototype={}
H.hi.prototype={
ah:function(a){var u,t,s
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
H.fH.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fd.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.j(this.a)+")"}}
H.hw.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ji.prototype={
$1:function(a){if(!!J.S(a).$ibi)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.ei.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iar:1}
H.c5.prototype={
i:function(a){return"Closure '"+H.bL(this).trim()+"'"},
$ibj:1,
glo:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ha.prototype={}
H.h4.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c0(u)+"'"}}
H.c3.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c3))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var u,t
u=this.c
if(u==null)t=H.cn(this.a)
else t=typeof u!=="object"?J.cZ(u):H.cn(u)
return(t^H.cn(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bL(u)+"'")}}
H.hk.prototype={
i:function(a){return this.a}}
H.eE.prototype={
i:function(a){return this.a}}
H.fU.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.aH.prototype={
gm:function(a){return this.a},
gkA:function(a){return this.a===0},
gaB:function(){return new H.fh(this,[H.r(this,0)])},
br:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.dC(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dC(t,a)}else return this.kx(a)},
kx:function(a){var u=this.d
if(u==null)return!1
return this.cV(this.ca(u,this.cU(a)),a)>=0},
k:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bn(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bn(r,b)
s=t==null?null:t.b
return s}else return this.ky(b)},
ky:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.ca(u,this.cU(a))
s=this.cV(t,a)
if(s<0)return
return t[s].b},
q:function(a,b,c){var u,t
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cl()
this.b=u}this.dq(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cl()
this.c=t}this.dq(t,b,c)}else this.kz(b,c)},
kz:function(a,b){var u,t,s,r
H.x(a,H.r(this,0))
H.x(b,H.r(this,1))
u=this.d
if(u==null){u=this.cl()
this.d=u}t=this.cU(a)
s=this.ca(u,t)
if(s==null)this.ct(u,t,[this.c4(a,b)])
else{r=this.cV(s,a)
if(r>=0)s[r].b=b
else s.push(this.c4(a,b))}},
a_:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.aZ(this))
u=u.c}},
dq:function(a,b,c){var u
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
u=this.bn(a,b)
if(u==null)this.ct(a,b,this.c4(b,c))
else u.b=c},
h9:function(){this.r=this.r+1&67108863},
c4:function(a,b){var u,t
u=new H.fg(H.x(a,H.r(this,0)),H.x(b,H.r(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.h9()
return u},
cU:function(a){return J.cZ(a)&0x3ffffff},
cV:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1},
i:function(a){return P.jy(this)},
bn:function(a,b){return a[b]},
ca:function(a,b){return a[b]},
ct:function(a,b,c){a[b]=c},
hn:function(a,b){delete a[b]},
dC:function(a,b){return this.bn(a,b)!=null},
cl:function(){var u=Object.create(null)
this.ct(u,"<non-identifier-key>",u)
this.hn(u,"<non-identifier-key>")
return u},
$ikg:1}
H.fg.prototype={}
H.fh.prototype={
gm:function(a){return this.a.a},
gV:function(a){var u,t
u=this.a
t=new H.fi(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fi.prototype={
gN:function(){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.aZ(u))
else{u=this.c
if(u==null){this.sdr(null)
return!1}else{this.sdr(u.a)
this.c=this.c.c
return!0}}},
sdr:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
H.j0.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.j1.prototype={
$2:function(a,b){return this.a(a,b)},
$S:52}
H.j2.prototype={
$1:function(a){return this.a(H.G(a))},
$S:49}
H.fc.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikp:1,
$imx:1}
H.bJ.prototype={$ibJ:1,$imF:1}
H.dw.prototype={
gm:function(a){return a.length},
$iaG:1,
$aaG:function(){}}
H.dx.prototype={
k:function(a,b){H.b7(b,a,a.length)
return a[b]},
q:function(a,b,c){H.nt(c)
H.b7(b,a,a.length)
a[b]=c},
$abC:function(){return[P.o]},
$aT:function(){return[P.o]},
$in:1,
$an:function(){return[P.o]},
$ia:1,
$aa:function(){return[P.o]}}
H.dy.prototype={
q:function(a,b,c){H.ac(c)
H.b7(b,a,a.length)
a[b]=c},
$abC:function(){return[P.l]},
$aT:function(){return[P.l]},
$in:1,
$an:function(){return[P.l]},
$ia:1,
$aa:function(){return[P.l]}}
H.fA.prototype={
k:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.fB.prototype={
k:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.fC.prototype={
k:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.fD.prototype={
k:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.dz.prototype={
gm:function(a){return a.length},
k:function(a,b){H.b7(b,a,a.length)
return a[b]},
$ioc:1}
H.ck.prototype={
gm:function(a){return a.length},
k:function(a,b){H.b7(b,a,a.length)
return a[b]},
$ick:1,
$iM:1}
H.cK.prototype={}
H.cL.prototype={}
H.cM.prototype={}
H.cN.prototype={}
P.hV.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:27}
P.hU.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:48}
P.hW.prototype={
$0:function(){this.a.$0()},
$S:0}
P.hX.prototype={
$0:function(){this.a.$0()},
$S:0}
P.ej.prototype={
h6:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bV(new P.iz(this,b),0),a)
else throw H.c(P.X("`setTimeout()` not found."))},
h7:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bV(new P.iy(this,a,Date.now(),b),0),a)
else throw H.c(P.X("Periodic timer."))},
$iaT:1}
P.iz.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.iy.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fM(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.aX.prototype={
kE:function(a){if(this.c!==6)return!0
return this.b.b.d9(H.k(this.d,{func:1,ret:P.N,args:[P.L]}),a.a,P.N,P.L)},
kv:function(a){var u,t,s,r
u=this.e
t=P.L
s={futureOr:1,type:H.r(this,1)}
r=this.b.b
if(H.es(u,{func:1,args:[P.L,P.ar]}))return H.jS(r.l6(u,a.a,a.b,null,t,P.ar),s)
else return H.jS(r.d9(H.k(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
P.aA.prototype={
fa:function(a,b,c){var u,t,s,r
u=H.r(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.V
if(t!==C.l){t.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.nf(b,t)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aA(0,$.V,[c])
r=b==null?1:3
this.dt(new P.aX(s,r,a,b,[u,c]))
return s},
lc:function(a,b){return this.fa(a,null,b)},
dt:function(a){var u,t
u=this.a
if(u<=1){a.a=H.d(this.c,"$iaX")
this.c=a}else{if(u===2){t=H.d(this.c,"$iaA")
u=t.a
if(u<4){t.dt(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.iS(null,null,u,H.k(new P.i4(this,a),{func:1,ret:-1}))}},
dS:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.d(this.c,"$iaX")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.d(this.c,"$iaA")
t=p.a
if(t<4){p.dS(a)
return}this.a=t
this.c=p.c}u.a=this.bp(a)
t=this.b
t.toString
P.iS(null,null,t,H.k(new P.i8(u,this),{func:1,ret:-1}))}},
cp:function(){var u=H.d(this.c,"$iaX")
this.c=null
return this.bp(u)},
bp:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dw:function(a){var u,t,s
u=H.r(this,0)
H.jS(a,{futureOr:1,type:u})
t=this.$ti
if(H.cT(a,"$ica",t,"$aca"))if(H.cT(a,"$iaA",t,null))P.kN(a,this)
else P.mR(a,this)
else{s=this.cp()
H.x(a,u)
this.a=4
this.c=a
P.cJ(this,s)}},
dz:function(a,b){var u
H.d(b,"$iar")
u=this.cp()
this.a=8
this.c=new P.ah(a,b)
P.cJ(this,u)},
$ica:1}
P.i4.prototype={
$0:function(){P.cJ(this.a,this.b)},
$S:0}
P.i8.prototype={
$0:function(){P.cJ(this.b,this.a.a)},
$S:0}
P.i5.prototype={
$1:function(a){var u=this.a
u.a=0
u.dw(a)},
$S:27}
P.i6.prototype={
$2:function(a,b){H.d(b,"$iar")
this.a.dz(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.i7.prototype={
$0:function(){this.a.dz(this.b,this.c)},
$S:0}
P.ib.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.f8(H.k(r.d,{func:1}),null)}catch(q){t=H.ad(q)
s=H.bZ(q)
if(this.d){r=H.d(this.a.a.c,"$iah").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.d(this.a.a.c,"$iah")
else p.b=new P.ah(t,s)
p.a=!0
return}if(!!J.S(u).$ica){if(u instanceof P.aA&&u.a>=4){if(u.a===8){r=this.b
r.b=H.d(u.c,"$iah")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.lc(new P.ic(o),null)
r.a=!1}},
$S:3}
P.ic.prototype={
$1:function(a){return this.a},
$S:46}
P.ia.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.r(s,0)
q=H.x(this.c,r)
p=H.r(s,1)
this.a.b=s.b.b.d9(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ad(o)
t=H.bZ(o)
s=this.a
s.b=new P.ah(u,t)
s.a=!0}},
$S:3}
P.i9.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.d(this.a.a.c,"$iah")
r=this.c
if(r.kE(u)&&r.e!=null){q=this.b
q.b=r.kv(u)
q.a=!1}}catch(p){t=H.ad(p)
s=H.bZ(p)
r=H.d(this.a.a.c,"$iah")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ah(t,s)
n.a=!0}},
$S:3}
P.e6.prototype={}
P.h5.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.aA(0,$.V,[P.l])
u.a=0
s=H.r(this,0)
r=H.k(new P.h7(u,this),{func:1,ret:-1,args:[s]})
H.k(new P.h8(u,t),{func:1,ret:-1})
W.a4(this.a,this.b,r,!1,s)
return t}}
P.h7.prototype={
$1:function(a){H.x(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.r(this.b,0)]}}}
P.h8.prototype={
$0:function(){this.b.dw(this.a.a)},
$S:0}
P.cr.prototype={}
P.h6.prototype={}
P.aT.prototype={}
P.ah.prototype={
i:function(a){return H.j(this.a)},
$ibi:1}
P.iJ.prototype={$ior:1}
P.iR.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dB()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.ii.prototype={
l7:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
try{if(C.l===$.V){a.$0()
return}P.kZ(null,null,this,a,-1)}catch(s){u=H.ad(s)
t=H.bZ(s)
P.iQ(null,null,this,u,H.d(t,"$iar"))}},
l8:function(a,b,c){var u,t,s
H.k(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.l===$.V){a.$1(b)
return}P.l_(null,null,this,a,b,-1,c)}catch(s){u=H.ad(s)
t=H.bZ(s)
P.iQ(null,null,this,u,H.d(t,"$iar"))}},
jR:function(a,b){return new P.ik(this,H.k(a,{func:1,ret:b}),b)},
cB:function(a){return new P.ij(this,H.k(a,{func:1,ret:-1}))},
ea:function(a,b){return new P.il(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
f8:function(a,b){H.k(a,{func:1,ret:b})
if($.V===C.l)return a.$0()
return P.kZ(null,null,this,a,b)},
d9:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.V===C.l)return a.$1(b)
return P.l_(null,null,this,a,b,c,d)},
l6:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.V===C.l)return a.$2(b,c)
return P.ng(null,null,this,a,b,c,d,e,f)}}
P.ik.prototype={
$0:function(){return this.a.f8(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ij.prototype={
$0:function(){return this.a.l7(this.b)},
$S:3}
P.il.prototype={
$1:function(a){var u=this.c
return this.a.l8(this.b,H.x(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ig.prototype={
gV:function(a){var u=new P.ec(this,this.r,this.$ti)
u.c=this.e
return u},
gm:function(a){return this.a},
X:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.d(u[b],"$ibQ")!=null}else{t=this.hj(b)
return t}},
hj:function(a){var u=this.d
if(u==null)return!1
return this.c8(this.dH(u,a),a)>=0},
h:function(a,b){var u,t
H.x(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.jH()
this.b=u}return this.ds(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.jH()
this.c=t}return this.ds(t,b)}else return this.ha(b)},
ha:function(a){var u,t,s
H.x(a,H.r(this,0))
u=this.d
if(u==null){u=P.jH()
this.d=u}t=this.dA(a)
s=u[t]
if(s==null)u[t]=[this.cm(a)]
else{if(this.c8(s,a)>=0)return!1
s.push(this.cm(a))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iI(this.c,b)
else return this.iF(b)},
iF:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.dH(u,a)
s=this.c8(t,a)
if(s<0)return!1
this.dY(t.splice(s,1)[0])
return!0},
ds:function(a,b){H.x(b,H.r(this,0))
if(H.d(a[b],"$ibQ")!=null)return!1
a[b]=this.cm(b)
return!0},
iI:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$ibQ")
if(u==null)return!1
this.dY(u)
delete a[b]
return!0},
dM:function(){this.r=1073741823&this.r+1},
cm:function(a){var u,t
u=new P.bQ(H.x(a,H.r(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dM()
return u},
dY:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dM()},
dA:function(a){return J.cZ(a)&1073741823},
dH:function(a,b){return a[this.dA(b)]},
c8:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1}}
P.bQ.prototype={}
P.ec.prototype={
gN:function(){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.aZ(u))
else{u=this.c
if(u==null){this.sdv(null)
return!1}else{this.sdv(H.x(u.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
sdv:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
P.fj.prototype={
$2:function(a,b){this.a.q(0,H.x(a,this.b),H.x(b,this.c))},
$S:7}
P.fk.prototype={$in:1,$ia:1}
P.T.prototype={
gV:function(a){return new H.ce(a,this.gm(a),0,[H.cV(this,a,"T",0)])},
a9:function(a,b){return this.k(a,b)},
lf:function(a,b){var u,t
u=H.b([],[H.cV(this,a,"T",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.q(u,t,this.k(a,t))
return u},
le:function(a){return this.lf(a,!0)},
n:function(a,b){var u,t
u=[H.cV(this,a,"T",0)]
H.h(b,"$ia",u,"$aa")
t=H.b([],u)
C.a.sm(t,C.f.n(this.gm(a),b.gm(b)))
C.a.bk(t,0,this.gm(a),a)
C.a.bk(t,this.gm(a),t.length,b)
return t},
kn:function(a,b,c,d){var u
H.x(d,H.cV(this,a,"T",0))
P.b6(b,c,this.gm(a),null,null,null)
for(u=b;u<c;++u)this.q(a,u,d)},
i:function(a){return P.ju(a,"[","]")}}
P.fm.prototype={}
P.fn.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.j(a)
u.a=t+": "
u.a+=H.j(b)},
$S:7}
P.bI.prototype={
a_:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.ab(this,"bI",0),H.ab(this,"bI",1)]})
for(u=J.bv(this.gaB());u.E();){t=u.gN()
b.$2(t,this.k(0,t))}},
gm:function(a){return J.aC(this.gaB())},
i:function(a){return P.jy(this)},
$iH:1}
P.iA.prototype={
q:function(a,b,c){H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
throw H.c(P.X("Cannot modify unmodifiable map"))}}
P.fo.prototype={
k:function(a,b){return this.a.k(0,b)},
q:function(a,b,c){this.a.q(0,H.x(b,H.r(this,0)),H.x(c,H.r(this,1)))},
a_:function(a,b){this.a.a_(0,H.k(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gm:function(a){var u=this.a
return u.gm(u)},
i:function(a){return J.ao(this.a)},
$iH:1}
P.e_.prototype={}
P.io.prototype={
av:function(a,b){var u
for(u=J.bv(H.h(b,"$in",this.$ti,"$an"));u.E();)this.h(0,u.gN())},
i:function(a){return P.ju(this,"{","}")},
a9:function(a,b){var u,t,s
if(b<0)H.q(P.a7(b,0,null,"index",null))
for(u=P.mV(this,this.r,H.r(this,0)),t=0;u.E();){s=u.d
if(b===t)return s;++t}throw H.c(P.bE(b,this,"index",null,t))},
$in:1,
$ikw:1}
P.ed.prototype={}
P.en.prototype={}
P.eA.prototype={
kG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.b6(b,c,a.length,null,null,null)
u=$.lC()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.c.I(a,t)
if(m===37){l=n+2
if(l<=c){k=H.j_(C.c.I(a,n))
j=H.j_(C.c.I(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.c.a0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.af("")
g=r.a+=C.c.w(a,s,t)
r.a=g+H.bM(m)
s=n
continue}}throw H.c(P.a0("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.c.w(a,s,c)
f=g.length
if(q>=0)P.k7(a,p,c,q,o,f)
else{e=C.f.bi(f-1,4)+1
if(e===1)throw H.c(P.a0("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.aZ(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.k7(a,p,c,q,o,d)
else{e=C.f.bi(d,4)
if(e===1)throw H.c(P.a0("Invalid base64 encoding length ",a,c))
if(e>1)a=C.c.aZ(a,c,c,e===2?"==":"=")}return a},
$aby:function(){return[[P.a,P.l],P.f]}}
P.eB.prototype={
$abh:function(){return[[P.a,P.l],P.f]}}
P.by.prototype={}
P.bh.prototype={}
P.eT.prototype={
$aby:function(){return[P.f,[P.a,P.l]]}}
P.f7.prototype={
i:function(a){return this.a}}
P.f6.prototype={
hk:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.e(a,r)
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
if(r>b)q.a+=C.c.w(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lR(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abh:function(){return[P.f,P.f]}}
P.hD.prototype={
gkm:function(){return C.T}}
P.hF.prototype={
b7:function(a,b,c){var u,t,s
c=P.b6(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iH(t)
if(s.hw(a,b,c)!==c)s.e_(J.lL(a,c-1),0)
return new Uint8Array(t.subarray(0,H.na(0,s.b,t.length)))},
cH:function(a){return this.b7(a,0,null)},
$abh:function(){return[P.f,[P.a,P.l]]}}
P.iH.prototype={
e_:function(a,b){var u,t,s,r,q
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
hw:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a0(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.I(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.e_(r,C.c.I(a,p)))s=p}else if(r<=2047){q=this.b
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
P.hE.prototype={
b7:function(a,b,c){var u,t,s,r
H.h(a,"$ia",[P.l],"$aa")
u=P.mI(!1,a,b,c)
if(u!=null)return u
c=P.b6(b,c,J.aC(a),null,null,null)
t=new P.af("")
s=new P.iF(!1,t)
s.b7(a,b,c)
if(s.e>0){H.q(P.a0("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.bM(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cH:function(a){return this.b7(a,0,null)},
$abh:function(){return[[P.a,P.l],P.f]}}
P.iF.prototype={
b7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.h(a,"$ia",[P.l],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.iG(this,b,c,a)
$label0$0:for(q=J.bY(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.k(a,o)
if(typeof n!=="number")return n.bV()
if((n&192)!==128){m=P.a0("Bad UTF-8 encoding 0x"+C.f.bg(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.e(C.H,m)
if(u<=C.H[m]){m=P.a0("Overlong encoding of 0x"+C.f.bg(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a0("Character outside valid Unicode range: 0x"+C.f.bg(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.bM(u)
this.c=!1}for(m=o<c;m;){l=P.nh(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.k(a,k)
if(typeof n!=="number")return n.Y()
if(n<0){i=P.a0("Negative UTF-8 code unit: -0x"+C.f.bg(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a0("Bad UTF-8 encoding 0x"+C.f.bg(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.iG.prototype={
$2:function(a,b){this.a.b.a+=P.dN(this.d,a,b)},
$S:45}
P.N.prototype={}
P.ai.prototype={
A:function(a,b){if(b==null)return!1
return b instanceof P.ai&&this.a===b.a&&!0},
gL:function(a){var u=this.a
return(u^C.f.aS(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.lZ(H.ms(this))
t=P.d8(H.mq(this))
s=P.d8(H.mm(this))
r=P.d8(H.mn(this))
q=P.d8(H.mp(this))
p=P.d8(H.mr(this))
o=P.m_(H.mo(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.o.prototype={}
P.aM.prototype={
n:function(a,b){return new P.aM(C.f.n(this.a,b.ghp()))},
u:function(a,b){return new P.aM(C.f.u(this.a,b.ghp()))},
A:function(a,b){if(b==null)return!1
return b instanceof P.aM&&this.a===b.a},
gL:function(a){return C.f.gL(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eQ()
t=this.a
if(t<0)return"-"+new P.aM(0-t).i(0)
s=u.$1(C.f.a6(t,6e7)%60)
r=u.$1(C.f.a6(t,1e6)%60)
q=new P.eP().$1(t%1e6)
return""+C.f.a6(t,36e8)+":"+H.j(s)+":"+H.j(r)+"."+H.j(q)}}
P.eP.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.eQ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.bi.prototype={}
P.dB.prototype={
i:function(a){return"Throw of null."}}
P.aD.prototype={
gc7:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc6:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gc7()+t+s
if(!this.a)return r
q=this.gc6()
p=P.eV(this.b)
return r+q+": "+p}}
P.bN.prototype={
gc7:function(){return"RangeError"},
gc6:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.j(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.j(u)
else if(s>u)t=": Not in range "+H.j(u)+".."+H.j(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.j(u)}return t}}
P.f8.prototype={
gc7:function(){return"RangeError"},
gc6:function(){var u,t
u=H.ac(this.b)
if(typeof u!=="number")return u.Y()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.j(t)},
gm:function(a){return this.f}}
P.hx.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hu.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bP.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eH.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eV(u)+"."}}
P.fI.prototype={
i:function(a){return"Out of Memory"},
$ibi:1}
P.dM.prototype={
i:function(a){return"Stack Overflow"},
$ibi:1}
P.eM.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e9.prototype={
i:function(a){return"Exception: "+this.a}}
P.f2.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.w(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.I(r,m)
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
g=""}f=C.c.w(r,i,j)
return t+h+f+g+"\n"+C.c.t(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.j(s)+")"):t}}
P.bj.prototype={}
P.l.prototype={}
P.n.prototype={
bT:function(a,b){var u=H.ab(this,"n",0)
return new H.cG(this,H.k(b,{func:1,ret:P.N,args:[u]}),[u])},
gm:function(a){var u,t
u=this.gV(this)
for(t=0;u.E();)++t
return t},
gaL:function(a){var u,t
u=this.gV(this)
if(!u.E())throw H.c(H.f9())
t=u.gN()
if(u.E())throw H.c(H.m7())
return t},
a9:function(a,b){var u,t,s
if(b<0)H.q(P.a7(b,0,null,"index",null))
for(u=this.gV(this),t=0;u.E();){s=u.gN()
if(b===t)return s;++t}throw H.c(P.bE(b,this,"index",null,t))},
i:function(a){return P.m5(this,"(",")")}}
P.aN.prototype={}
P.a.prototype={$in:1}
P.H.prototype={}
P.F.prototype={
gL:function(a){return P.L.prototype.gL.call(this,this)},
i:function(a){return"null"}}
P.ag.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
A:function(a,b){return this===b},
gL:function(a){return H.cn(this)},
i:function(a){return"Instance of '"+H.bL(this)+"'"},
toString:function(){return this.i(this)}}
P.ar.prototype={}
P.f.prototype={$ikp:1}
P.af.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$io0:1}
P.hC.prototype={
$2:function(a,b){var u,t,s,r
u=P.f
H.h(a,"$iH",[u,u],"$aH")
H.G(b)
t=J.cU(b).eM(b,"=")
if(t===-1){if(b!=="")a.q(0,P.jJ(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.w(b,0,t)
r=C.c.as(b,t+1)
u=this.a
a.q(0,P.jJ(s,0,s.length,u,!0),P.jJ(r,0,r.length,u,!0))}return a},
$S:43}
P.hz.prototype={
$2:function(a,b){throw H.c(P.a0("Illegal IPv4 address, "+a,this.a,b))},
$S:42}
P.hA.prototype={
$2:function(a,b){throw H.c(P.a0("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:41}
P.hB.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eu(C.c.w(this.b,a,b),null,16)
if(typeof u!=="number")return u.Y()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:40}
P.bR.prototype={
gfi:function(){return this.b},
gcT:function(a){var u=this.c
if(u==null)return""
if(C.c.a5(u,"["))return C.c.w(u,1,u.length-1)
return u},
gbN:function(a){var u=this.d
if(u==null)return P.kR(this.a)
return u},
gd3:function(){var u=this.f
return u==null?"":u},
geH:function(){var u=this.r
return u==null?"":u},
d8:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
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
g=P.jI(g,0,0,h)
return new P.bR(i,j,c,f,d,g,this.r)},
f5:function(a,b){return this.d8(a,null,null,null,null,null,null,b,null,null)},
gd4:function(){var u,t
if(this.Q==null){u=this.f
t=P.f
this.siE(new P.e_(P.kG(u==null?"":u,C.m),[t,t]))}return this.Q},
geI:function(){return this.c!=null},
geL:function(){return this.f!=null},
geJ:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.j(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.j(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.j(t)}else u=t
u+=this.e
t=this.f
if(t!=null)u=u+"?"+t
t=this.r
if(t!=null)u=u+"#"+t
u=u.charCodeAt(0)==0?u:u
this.y=u}return u},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.S(b).$ijD)if(this.a==b.gbZ())if(this.c!=null===b.geI())if(this.b==b.gfi())if(this.gcT(this)==b.gcT(b))if(this.gbN(this)==b.gbN(b))if(this.e===b.gf0(b)){u=this.f
t=u==null
if(!t===b.geL()){if(t)u=""
if(u===b.gd3()){u=this.r
t=u==null
if(!t===b.geJ()){if(t)u=""
u=u===b.geH()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gL:function(a){var u=this.z
if(u==null){u=C.c.gL(this.i(0))
this.z=u}return u},
siE:function(a){var u=P.f
this.Q=H.h(a,"$iH",[u,u],"$aH")},
$ijD:1,
gbZ:function(){return this.a},
gf0:function(a){return this.e}}
P.iB.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.n()
throw H.c(P.a0("Invalid port",this.a,u+1))},
$S:39}
P.iC.prototype={
$1:function(a){return P.eo(C.aa,a,C.m,!1)},
$S:14}
P.iE.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.eo(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.eo(C.w,b,C.m,!0))}},
$S:37}
P.iD.prototype={
$2:function(a,b){var u,t
H.G(a)
if(b==null||typeof b==="string")this.a.$2(a,H.G(b))
else for(u=J.bv(H.le(b,"$in")),t=this.a;u.E();)t.$2(a,H.G(u.gN()))},
$S:35}
P.hy.prototype={
gfg:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
u=u[0]+1
s=C.c.eN(t,"?",u)
r=t.length
if(s>=0){q=P.cP(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.i_(this,"data",null,null,null,P.cP(t,u,r,C.L,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.iN.prototype={
$1:function(a){return new Uint8Array(96)},
$S:34}
P.iM.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.lM(u,0,96,b)
return u},
$S:33}
P.iO.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.I(b,t)^96
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.iP.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.I(b,0),t=C.c.I(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.ir.prototype={
geI:function(){return this.c>0},
geK:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.A(t)
t=u+1<t
u=t}else u=!1
return u},
geL:function(){var u=this.f
if(typeof u!=="number")return u.Y()
return u<this.r},
geJ:function(){return this.r<this.a.length},
gdK:function(){return this.b===4&&C.c.a5(this.a,"http")},
gdL:function(){return this.b===5&&C.c.a5(this.a,"https")},
gbZ:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdK()){this.x="http"
u="http"}else if(this.gdL()){this.x="https"
u="https"}else if(u===4&&C.c.a5(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a5(this.a,"package")){this.x="package"
u="package"}else{u=C.c.w(this.a,0,u)
this.x=u}return u},
gfi:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.w(this.a,t,u-1):""},
gcT:function(a){var u=this.c
return u>0?C.c.w(this.a,u,this.d):""},
gbN:function(a){var u
if(this.geK()){u=this.d
if(typeof u!=="number")return u.n()
return P.eu(C.c.w(this.a,u+1,this.e),null,null)}if(this.gdK())return 80
if(this.gdL())return 443
return 0},
gf0:function(a){return C.c.w(this.a,this.e,this.f)},
gd3:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.Y()
return u<t?C.c.w(this.a,u+1,t):""},
geH:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.as(t,u+1):""},
gd4:function(){var u=this.f
if(typeof u!=="number")return u.Y()
if(u>=this.r)return C.ab
u=P.f
return new P.e_(P.kG(this.gd3(),C.m),[u,u])},
d8:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.h(h,"$iH",[P.f,null],"$aH")
i=this.gbZ()
u=i==="file"
t=this.c
j=t>0?C.c.w(this.a,this.b+3,t):""
f=this.geK()?this.gbN(this):null
t=this.c
if(t>0)c=C.c.w(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.w(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a5(d,"/"))d="/"+d
g=P.jI(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.as(t,s+1)
return new P.bR(i,j,c,f,d,g,b)},
f5:function(a,b){return this.d8(a,null,null,null,null,null,null,b,null,null)},
gL:function(a){var u=this.y
if(u==null){u=C.c.gL(this.a)
this.y=u}return u},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.S(b).$ijD&&this.a===b.i(0)},
i:function(a){return this.a},
$ijD:1}
P.i_.prototype={}
W.w.prototype={}
W.d_.prototype={
i:function(a){return String(a)},
$id_:1}
W.ey.prototype={
i:function(a){return String(a)}}
W.c2.prototype={$ic2:1}
W.be.prototype={$ibe:1}
W.bw.prototype={
bW:function(a,b,c){if(c!=null)return this.hx(a,b,P.no(c,null))
return this.hy(a,b)},
fo:function(a,b){return this.bW(a,b,null)},
hx:function(a,b,c){return a.getContext(b,c)},
hy:function(a,b){return a.getContext(b)},
$ibw:1,
$ika:1}
W.bx.prototype={
hz:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
kj:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibx:1}
W.bf.prototype={
gm:function(a){return a.length}}
W.c6.prototype={
gm:function(a){return a.length}}
W.eL.prototype={}
W.ax.prototype={$iax:1}
W.c7.prototype={
jM:function(a,b){return a.adoptNode(b)},
de:function(a,b){return a.getElementById(b)}}
W.eO.prototype={
i:function(a){return String(a)}}
W.da.prototype={
k8:function(a,b){return a.createHTMLDocument(b)}}
W.db.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
A:function(a,b){var u
if(b==null)return!1
if(!H.cT(b,"$iay",[P.ag],"$aay"))return!1
u=J.a5(b)
return a.left===u.gbM(b)&&a.top===u.gbR(b)&&a.width===u.gbU(b)&&a.height===u.gbL(b)},
gL:function(a){return W.kP(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
geb:function(a){return a.bottom},
gbL:function(a){return a.height},
gbM:function(a){return a.left},
gbP:function(a){return a.right},
gbR:function(a){return a.top},
gbU:function(a){return a.width},
$iay:1,
$aay:function(){return[P.ag]}}
W.hZ.prototype={
gm:function(a){return this.b.length},
k:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.d(u[b],"$iQ")},
q:function(a,b,c){var u
H.d(c,"$iQ")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
J.jk(this.a,c,u[b])},
h:function(a,b){J.k3(this.a,b)
return b},
gV:function(a){var u=this.le(this)
return new J.ap(u,u.length,0,[H.r(u,0)])},
$aT:function(){return[W.Q]},
$an:function(){return[W.Q]},
$aa:function(){return[W.Q]}}
W.Q.prototype={
gjQ:function(a){return new W.i0(a)},
gcG:function(a){return new W.hZ(a,a.children)},
ged:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.Y()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Y()
if(r<0)r=-r*0
return new P.ay(u,t,s,r,[P.ag])},
i:function(a){return a.localName},
ag:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.ke
if(u==null){u=H.b([],[W.av])
t=new W.dA(u)
C.a.h(u,W.kO(null))
C.a.h(u,W.kQ())
$.ke=t
d=t}else d=u
u=$.kd
if(u==null){u=new W.ep(d)
$.kd=u
c=u}else{u.a=d
c=u}}if($.b_==null){u=document
t=u.implementation
t=(t&&C.U).k8(t,"")
$.b_=t
$.jr=t.createRange()
t=$.b_
t.toString
t=t.createElement("base")
H.d(t,"$ic2")
t.href=u.baseURI
u=$.b_.head;(u&&C.W).F(u,t)}u=$.b_
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.d(t,"$ibe")}u=$.b_
if(!!this.$ibe)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b_.body;(u&&C.p).F(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.X(C.a8,a.tagName)){u=$.jr;(u&&C.N).fw(u,s)
u=$.jr
r=(u&&C.N).k6(u,b)}else{s.innerHTML=b
r=$.b_.createDocumentFragment()
for(u=J.a5(r);t=s.firstChild,t!=null;)u.F(r,t)}u=$.b_.body
if(s==null?u!=null:s!==u)J.k5(s)
c.dg(r)
C.z.jM(document,r)
return r},
k7:function(a,b,c){return this.ag(a,b,c,null)},
fB:function(a,b,c,d){a.textContent=null
this.F(a,this.ag(a,b,c,d))},
fA:function(a,b){return this.fB(a,b,null,null)},
b_:function(a,b){return a.getAttribute(b)},
iG:function(a,b){return a.removeAttribute(b)},
fz:function(a,b,c){return a.setAttribute(b,c)},
$iQ:1,
gl9:function(a){return a.tagName}}
W.eS.prototype={
$1:function(a){return!!J.S(H.d(a,"$iB")).$iQ},
$S:22}
W.m.prototype={$im:1}
W.bB.prototype={
hb:function(a,b,c,d){return a.addEventListener(b,H.bV(H.k(c,{func:1,args:[W.m]}),1),!1)},
$ibB:1}
W.f1.prototype={
gm:function(a){return a.length}}
W.df.prototype={}
W.dg.prototype={
iM:function(a,b,c,d){return a.replaceState(b,c,d)},
gm:function(a){return a.length}}
W.bD.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bE(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iB")
throw H.c(P.X("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaG:1,
$aaG:function(){return[W.B]},
$aT:function(){return[W.B]},
$in:1,
$an:function(){return[W.B]},
$ia:1,
$aa:function(){return[W.B]},
$ibD:1,
$aas:function(){return[W.B]}}
W.dh.prototype={}
W.b0.prototype={$ib0:1,
gee:function(a){return a.data}}
W.cc.prototype={$icc:1,$ika:1}
W.cd.prototype={$icd:1}
W.aO.prototype={$iaO:1}
W.dn.prototype={}
W.dr.prototype={
i:function(a){return String(a)},
$idr:1}
W.ci.prototype={}
W.a9.prototype={$ia9:1}
W.am.prototype={
gaL:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.kx("No elements"))
if(t>1)throw H.c(P.kx("More than one element"))
return u.firstChild},
av:function(a,b){var u,t,s,r,q
H.h(b,"$in",[W.B],"$an")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.a5(t),q=0;q<s;++q)r.F(t,u.firstChild)
return},
q:function(a,b,c){var u,t
H.d(c,"$iB")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
J.jk(u,c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dd(u,u.length,-1,[H.cV(C.ac,u,"as",0)])},
gm:function(a){return this.a.childNodes.length},
k:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aT:function(){return[W.B]},
$an:function(){return[W.B]},
$aa:function(){return[W.B]}}
W.B.prototype={
kZ:function(a){var u=a.parentNode
if(u!=null)J.ew(u,a)},
l3:function(a,b){var u,t
try{u=a.parentNode
J.jk(u,b,a)}catch(t){H.ad(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fG(a):u},
F:function(a,b){return a.appendChild(H.d(b,"$iB"))},
iH:function(a,b){return a.removeChild(b)},
iL:function(a,b,c){return a.replaceChild(b,c)},
$iB:1}
W.cl.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bE(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iB")
throw H.c(P.X("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaG:1,
$aaG:function(){return[W.B]},
$aT:function(){return[W.B]},
$in:1,
$an:function(){return[W.B]},
$ia:1,
$aa:function(){return[W.B]},
$aas:function(){return[W.B]}}
W.dF.prototype={
k6:function(a,b){return a.createContextualFragment(b)},
fw:function(a,b){return a.selectNodeContents(b)}}
W.fV.prototype={
gm:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.dO.prototype={
ag:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.c_(a,b,c,d)
u=W.m0("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.am(t).av(0,new W.am(u))
return t},
hB:function(a,b){return a.insertRow(b)}}
W.dP.prototype={
ag:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.c_(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ag(u.createElement("table"),b,c,d)
u.toString
u=new W.am(u)
s=u.gaL(u)
s.toString
u=new W.am(s)
r=u.gaL(u)
t.toString
r.toString
new W.am(t).av(0,new W.am(r))
return t},
dJ:function(a,b){return a.insertCell(b)}}
W.h9.prototype={
ag:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.c_(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ag(u.createElement("table"),b,c,d)
u.toString
u=new W.am(u)
s=u.gaL(u)
t.toString
s.toString
new W.am(t).av(0,new W.am(s))
return t}}
W.cs.prototype={$ics:1}
W.aI.prototype={$iaI:1}
W.aJ.prototype={$iaJ:1}
W.hh.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bE(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iaI")
throw H.c(P.X("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaG:1,
$aaG:function(){return[W.aI]},
$aT:function(){return[W.aI]},
$in:1,
$an:function(){return[W.aI]},
$ia:1,
$aa:function(){return[W.aI]},
$aas:function(){return[W.aI]}}
W.bq.prototype={}
W.hR.prototype={$ika:1}
W.aW.prototype={
gke:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.X("deltaY is not supported"))},
gkd:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.X("deltaX is not supported"))},
$iaW:1}
W.cH.prototype={
iN:function(a,b){return a.requestAnimationFrame(H.bV(H.k(b,{func:1,ret:-1,args:[P.ag]}),1))},
hq:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cI.prototype={$icI:1}
W.e8.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
A:function(a,b){var u
if(b==null)return!1
if(!H.cT(b,"$iay",[P.ag],"$aay"))return!1
u=J.a5(b)
return a.left===u.gbM(b)&&a.top===u.gbR(b)&&a.width===u.gbU(b)&&a.height===u.gbL(b)},
gL:function(a){return W.kP(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
gbL:function(a){return a.height},
gbU:function(a){return a.width}}
W.ee.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bE(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iB")
throw H.c(P.X("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaG:1,
$aaG:function(){return[W.B]},
$aT:function(){return[W.B]},
$in:1,
$an:function(){return[W.B]},
$ia:1,
$aa:function(){return[W.B]},
$aas:function(){return[W.B]}}
W.hY.prototype={
a_:function(a,b){var u,t,s,r,q,p
H.k(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gaB(),t=u.length,s=this.a,r=J.a5(s),q=0;q<u.length;u.length===t||(0,H.z)(u),++q){p=u[q]
b.$2(p,r.b_(s,p))}},
gaB:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
q=H.d(u[r],"$icI")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abI:function(){return[P.f,P.f]},
$aH:function(){return[P.f,P.f]}}
W.i0.prototype={
k:function(a,b){return J.jl(this.a,H.G(b))},
q:function(a,b,c){J.lQ(this.a,b,c)},
gm:function(a){return this.gaB().length}}
W.i1.prototype={}
W.jG.prototype={}
W.i2.prototype={}
W.i3.prototype={
$1:function(a){return this.a.$1(H.d(a,"$im"))},
$S:32}
W.bs.prototype={
fU:function(a){var u,t
u=$.k1()
if(u.gkA(u)){for(t=0;t<262;++t)u.q(0,C.a7[t],W.nA())
for(t=0;t<12;++t)u.q(0,C.B[t],W.nB())}},
aT:function(a){return $.lD().X(0,W.c8(a))},
aw:function(a,b,c){var u,t,s
u=W.c8(a)
t=$.k1()
s=t.k(0,H.j(u)+"::"+b)
if(s==null)s=t.k(0,"*::"+b)
if(s==null)return!1
return H.jO(s.$4(a,b,c,this))},
$iav:1}
W.as.prototype={
gV:function(a){return new W.dd(a,this.gm(a),-1,[H.cV(this,a,"as",0)])}}
W.dA.prototype={
aT:function(a){return C.a.e4(this.a,new W.fF(a))},
aw:function(a,b,c){return C.a.e4(this.a,new W.fE(a,b,c))},
$iav:1}
W.fF.prototype={
$1:function(a){return H.d(a,"$iav").aT(this.a)},
$S:24}
W.fE.prototype={
$1:function(a){return H.d(a,"$iav").aw(this.a,this.b,this.c)},
$S:24}
W.eh.prototype={
h5:function(a,b,c,d){var u,t,s
this.a.av(0,c)
u=b.bT(0,new W.ip())
t=b.bT(0,new W.iq())
this.b.av(0,u)
s=this.c
s.av(0,C.I)
s.av(0,t)},
aT:function(a){return this.a.X(0,W.c8(a))},
aw:function(a,b,c){var u,t
u=W.c8(a)
t=this.c
if(t.X(0,H.j(u)+"::"+b))return this.d.jN(c)
else if(t.X(0,"*::"+b))return this.d.jN(c)
else{t=this.b
if(t.X(0,H.j(u)+"::"+b))return!0
else if(t.X(0,"*::"+b))return!0
else if(t.X(0,H.j(u)+"::*"))return!0
else if(t.X(0,"*::*"))return!0}return!1},
$iav:1}
W.ip.prototype={
$1:function(a){return!C.a.X(C.B,H.G(a))},
$S:25}
W.iq.prototype={
$1:function(a){return C.a.X(C.B,H.G(a))},
$S:25}
W.iw.prototype={
aw:function(a,b,c){if(this.fL(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jl(a,"template")==="")return this.e.X(0,b)
return!1}}
W.ix.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.G(a))},
$S:14}
W.iv.prototype={
aT:function(a){var u=J.S(a)
if(!!u.$ico)return!1
u=!!u.$ip
if(u&&W.c8(a)==="foreignObject")return!1
if(u)return!0
return!1},
aw:function(a,b,c){if(b==="is"||C.c.a5(b,"on"))return!1
return this.aT(a)},
$iav:1}
W.dd.prototype={
E:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdI(J.lI(this.a,u))
this.c=u
return!0}this.sdI(null)
this.c=t
return!1},
gN:function(){return this.d},
sdI:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
W.av.prototype={}
W.im.prototype={$iod:1}
W.ep.prototype={
dg:function(a){new W.iI(this).$2(a,null)},
b4:function(a,b){if(b==null)J.k5(a)
else J.ew(b,a)},
iS:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.lN(a)
s=J.jl(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ad(o)}q="element unprintable"
try{q=J.ao(a)}catch(o){H.ad(o)}try{p=W.c8(a)
this.iR(H.d(a,"$iQ"),b,u,q,p,H.d(t,"$iH"),H.G(s))}catch(o){if(H.ad(o) instanceof P.aD)throw o
else{this.b4(a,b)
window
n="Removing corrupted element "+H.j(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iR:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b4(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aT(a)){this.b4(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.aw(a,"is",g)){this.b4(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gaB()
t=H.b(u.slice(0),[H.r(u,0)])
for(s=f.gaB().length-1,u=f.a,r=J.a5(u);s>=0;--s){if(s>=t.length)return H.e(t,s)
q=t[s]
if(!this.a.aw(a,J.lS(q),r.b_(u,q))){window
p="Removing disallowed attribute <"+H.j(e)+" "+q+'="'+H.j(r.b_(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b_(u,q)
r.iG(u,q)}}if(!!J.S(a).$ics)this.dg(a.content)},
$inY:1}
W.iI.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iS(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b4(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ad(r)
q=H.d(u,"$iB")
if(s){p=q.parentNode
if(p!=null)J.ew(p,q)}else J.ew(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.d(t,"$iB")}},
$S:44}
W.e7.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.eq.prototype={}
W.er.prototype={}
P.is.prototype={
eF:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
dc:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.S(a)
if(!!t.$iai)return new Date(a.a)
if(!!t.$imx)throw H.c(P.hv("structured clone of RegExp"))
if(!!t.$ib0)return a
if(!!t.$ibJ)return a
if(!!t.$iH){s=this.eF(a)
t=this.b
if(s>=t.length)return H.e(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.q(t,s,r)
a.a_(0,new P.iu(u,this))
return u.a}if(!!t.$ia){s=this.eF(a)
u=this.b
if(s>=u.length)return H.e(u,s)
r=u[s]
if(r!=null)return r
return this.k5(a,s)}throw H.c(P.hv("structured clone of other type"))},
k5:function(a,b){var u,t,s,r
u=J.bY(a)
t=u.gm(a)
s=new Array(t)
C.a.q(this.b,b,s)
for(r=0;r<t;++r)C.a.q(s,r,this.dc(u.k(a,r)))
return s}}
P.iu.prototype={
$2:function(a,b){this.a.a[a]=this.b.dc(b)},
$S:7}
P.em.prototype={$ib0:1,
gee:function(a){return this.a}}
P.iT.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.it.prototype={}
P.eZ.prototype={
gbo:function(){var u,t,s
u=this.b
t=H.ab(u,"T",0)
s=W.Q
return new H.fp(new H.cG(u,H.k(new P.f_(),{func:1,ret:P.N,args:[t]}),[t]),H.k(new P.f0(),{func:1,ret:s,args:[t]}),[t,s])},
q:function(a,b,c){var u
H.d(c,"$iQ")
u=this.gbo()
J.lP(u.b.$1(J.ex(u.a,b)),c)},
h:function(a,b){J.k3(this.b.a,b)},
gm:function(a){return J.aC(this.gbo().a)},
k:function(a,b){var u=this.gbo()
return u.b.$1(J.ex(u.a,b))},
gV:function(a){var u=P.mf(this.gbo(),!1,W.Q)
return new J.ap(u,u.length,0,[H.r(u,0)])},
$aT:function(){return[W.Q]},
$an:function(){return[W.Q]},
$aa:function(){return[W.Q]}}
P.f_.prototype={
$1:function(a){return!!J.S(H.d(a,"$iB")).$iQ},
$S:22}
P.f0.prototype={
$1:function(a){return H.i(H.d(a,"$iB"),"$iQ")},
$S:53}
P.ih.prototype={
gbP:function(a){var u=this.a
if(typeof u!=="number")return u.n()
return H.x(u+this.c,H.r(this,0))},
geb:function(a){var u=this.b
if(typeof u!=="number")return u.n()
return H.x(u+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cT(b,"$iay",[P.ag],"$aay")){u=this.a
t=J.a5(b)
if(u==t.gbM(b)){s=this.b
if(s==t.gbR(b)){if(typeof u!=="number")return u.n()
r=H.r(this,0)
if(H.x(u+this.c,r)===t.gbP(b)){if(typeof s!=="number")return s.n()
u=H.x(s+this.d,r)===t.geb(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gL:function(a){var u,t,s,r,q
u=this.a
t=J.cZ(u)
s=this.b
r=J.cZ(s)
if(typeof u!=="number")return u.n()
q=H.r(this,0)
u=C.f.gL(H.x(u+this.c,q))
if(typeof s!=="number")return s.n()
q=C.f.gL(H.x(s+this.d,q))
return P.mU(P.ie(P.ie(P.ie(P.ie(0,t),r),u),q))}}
P.ay.prototype={
gbM:function(a){return this.a},
gbR:function(a){return this.b},
gbU:function(a){return this.c},
gbL:function(a){return this.d}}
P.co.prototype={$ico:1}
P.p.prototype={
gcG:function(a){return new P.eZ(a,new W.am(a))},
ag:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.av])
C.a.h(u,W.kO(null))
C.a.h(u,W.kQ())
C.a.h(u,new W.iv())
c=new W.ep(new W.dA(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).k7(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.am(r)
p=u.gaL(u)
for(u=J.a5(q);s=p.firstChild,s!=null;)u.F(q,s)
return q},
$ip:1}
P.M.prototype={$in:1,
$an:function(){return[P.l]},
$ia:1,
$aa:function(){return[P.l]},
$imF:1}
P.d2.prototype={$id2:1}
P.de.prototype={$ide:1}
P.dE.prototype={$idE:1}
P.bO.prototype={
e0:function(a,b){return a.activeTexture(b)},
e5:function(a,b,c){return a.attachShader(b,c)},
ax:function(a,b,c){return a.bindBuffer(b,c)},
jS:function(a,b,c){return a.bindFramebuffer(b,c)},
aU:function(a,b,c){return a.bindTexture(b,c)},
jT:function(a,b,c){return a.blendFunc(b,c)},
ec:function(a,b,c,d){return a.bufferData(b,c,d)},
jW:function(a,b){return a.clear(b)},
jX:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jY:function(a,b){return a.clearDepth(b)},
k_:function(a,b){return a.compileShader(b)},
k9:function(a,b){return a.createShader(b)},
kb:function(a,b){return a.deleteProgram(b)},
kc:function(a,b){return a.deleteShader(b)},
kf:function(a,b){return a.depthFunc(b)},
kg:function(a,b){return a.disable(b)},
ef:function(a,b){return a.disableVertexAttribArray(b)},
ki:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cK:function(a,b){return a.enable(b)},
ei:function(a,b){return a.enableVertexAttribArray(b)},
fk:function(a,b,c){return a.getActiveAttrib(b,c)},
fl:function(a,b,c){return a.getActiveUniform(b,c)},
fm:function(a,b,c){return a.getAttribLocation(b,c)},
df:function(a,b){return a.getParameter(b)},
fp:function(a,b){return a.getProgramInfoLog(b)},
bX:function(a,b,c){return a.getProgramParameter(b,c)},
fq:function(a,b){return a.getShaderInfoLog(b)},
fs:function(a,b,c){return a.getShaderParameter(b,c)},
ft:function(a,b,c){return a.getUniformLocation(b,c)},
kC:function(a,b){return a.linkProgram(b)},
kX:function(a,b,c){return a.pixelStorei(b,c)},
fE:function(a,b,c){return a.shaderSource(b,c)},
lb:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.S(g)
if(!!u.$ib0)t=!0
else t=!1
if(t){this.j5(a,b,c,d,e,f,P.np(g))
return}if(!!u.$icc)u=!0
else u=!1
if(u){this.j6(a,b,c,d,e,f,g)
return}throw H.c(P.d0("Incorrect number or type of arguments"))},
la:function(a,b,c,d,e,f,g){return this.lb(a,b,c,d,e,f,g,null,null,null)},
j5:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
j6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bQ:function(a,b,c,d){return a.texParameteri(b,c,d)},
S:function(a,b,c){return a.uniform1f(b,c)},
T:function(a,b,c){return a.uniform1i(b,c)},
B:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fe:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ff:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
fh:function(a,b){return a.useProgram(b)},
li:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
lj:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibO:1}
P.dJ.prototype={$idJ:1}
P.dR.prototype={$idR:1}
P.dY.prototype={$idY:1}
O.Z.prototype={
c1:function(a){this.shF(H.b([],[a]))
this.sdQ(null)
this.sdN(null)
this.sdR(null)},
dh:function(a,b,c){var u=H.ab(this,"Z",0)
H.k(b,{func:1,ret:P.N,args:[[P.n,u]]})
u={func:1,ret:-1,args:[P.l,[P.n,u]]}
H.k(a,u)
H.k(c,u)
this.sdQ(b)
this.sdN(a)
this.sdR(c)},
bj:function(a,b){return this.dh(a,null,b)},
ip:function(a){var u
H.h(a,"$in",[H.ab(this,"Z",0)],"$an")
u=this.b
if(u!=null)return u.$1(a)
return!0},
hM:function(a,b){var u
H.h(b,"$in",[H.ab(this,"Z",0)],"$an")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.ap(u,u.length,0,[H.r(u,0)])},
a9:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ab(this,"Z",0)
H.x(b,u)
u=[u]
if(this.ip(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.hM(s,H.b([b],u))}},
shF:function(a){this.a=H.h(a,"$ia",[H.ab(this,"Z",0)],"$aa")},
sdQ:function(a){this.b=H.k(a,{func:1,ret:P.N,args:[[P.n,H.ab(this,"Z",0)]]})},
sdN:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.l,[P.n,H.ab(this,"Z",0)]]})},
sdR:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.l,[P.n,H.ab(this,"Z",0)]]})},
$in:1}
O.cg.prototype={
gm:function(a){return this.a.length},
gv:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
fS:function(a){var u=this.b
if(u!=null)u.J(a)},
aM:function(){return this.fS(null)},
ga4:function(){var u=this.a
if(u.length>0)return C.a.gaC(u)
else return V.ch()},
f3:function(a){var u=this.a
if(a==null)C.a.h(u,V.ch())
else C.a.h(u,a)
this.aM()},
d2:function(){var u=this.a
if(u.length>0){u.pop()
this.aM()}},
scc:function(a){this.a=H.h(a,"$ia",[V.ae],"$aa")}}
E.eC.prototype={}
E.aj.prototype={
du:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.r(u,0)]);u.E();){t=u.d
if(t.f==null)t.du()}},
sad:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gv().M(0,this.geW())
t=this.c
if(t!=null)t.gv().h(0,this.geW())
s=new D.C("shape",u,this.c,this,[F.dK])
s.b=!0
this.ac(s)}},
sbf:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gv().M(0,this.geY())
t=this.f
this.f=a
if(a!=null)a.gv().h(0,this.geY())
this.du()
s=new D.C("technique",t,this.f,this,[O.bo])
s.b=!0
this.ac(s)}},
saX:function(a){var u,t
if(!J.O(this.r,a)){u=this.r
if(u!=null)u.gv().M(0,this.geU())
if(a!=null)a.gv().h(0,this.geU())
this.r=a
t=new D.C("mover",u,a,this,[U.a6])
t.b=!0
this.ac(t)}},
ap:function(a){var u,t,s,r
u=this.r
t=u!=null?u.aq(a,this):null
if(!J.O(t,this.x)){s=this.x
this.x=t
r=new D.C("matrix",s,t,this,[V.ae])
r.b=!0
this.ac(r)}u=this.f
if(u!=null)u.ap(a)
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.r(u,0)]);u.E();)u.d.ap(a)},
aY:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga4())
else C.a.h(u.a,t.t(0,u.ga4()))
u.aM()
a.f4(this.f)
u=a.dy
s=(u&&C.a).gaC(u)
if(s!=null&&this.d!=null)s.l2(a,this)
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.r(u,0)]);u.E();)u.d.aY(a)
a.f2()
a.dx.d2()},
gv:function(){var u=this.z
if(u==null){u=D.P()
this.z=u}return u},
ac:function(a){var u=this.z
if(u!=null)u.J(a)},
a3:function(){return this.ac(null)},
eX:function(a){H.d(a,"$iy")
this.e=null
this.ac(a)},
kN:function(){return this.eX(null)},
eZ:function(a){this.ac(H.d(a,"$iy"))},
kO:function(){return this.eZ(null)},
eV:function(a){this.ac(H.d(a,"$iy"))},
kM:function(){return this.eV(null)},
eT:function(a){this.ac(H.d(a,"$iy"))},
kJ:function(){return this.eT(null)},
kI:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$in",[E.aj],"$an")
for(u=b.length,t=this.geS(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bA()
o.sal(null)
o.sb2(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sal(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
kL:function(a,b){var u,t
H.h(b,"$in",[E.aj],"$an")
for(u=b.gV(b),t=this.geS();u.E();)u.gN().gv().M(0,t)
this.a3()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfT:function(a,b){this.y=H.h(b,"$iZ",[E.aj],"$aZ")},
$ib5:1}
E.fQ.prototype={
fO:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ai(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cg()
t=[V.ae]
u.scc(H.b([],t))
u.b=null
u.gv().h(0,new E.fR(this))
this.cy=u
u=new O.cg()
u.scc(H.b([],t))
u.b=null
u.gv().h(0,new E.fS(this))
this.db=u
u=new O.cg()
u.scc(H.b([],t))
u.b=null
u.gv().h(0,new E.fT(this))
this.dx=u
this.sj4(H.b([],[O.bo]))
u=this.dy;(u&&C.a).h(u,null)
this.sj0(new H.aH([P.f,A.cp]))},
gkY:function(){var u=this.z
if(u==null){u=this.cy.ga4().t(0,this.db.ga4())
this.z=u}return u},
f4:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaC(u):a;(u&&C.a).h(u,t)},
f2:function(){var u=this.dy
if(u.length>1)u.pop()},
sj4:function(a){this.dy=H.h(a,"$ia",[O.bo],"$aa")},
sj0:function(a){this.fr=H.h(a,"$iH",[P.f,A.cp],"$aH")}}
E.fR.prototype={
$1:function(a){var u
H.d(a,"$iy")
u=this.a
u.z=null
u.ch=null},
$S:9}
E.fS.prototype={
$1:function(a){var u
H.d(a,"$iy")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:9}
E.fT.prototype={
$1:function(a){var u
H.d(a,"$iy")
u=this.a
u.ch=null
u.cx=null},
$S:9}
E.dU.prototype={
dm:function(a){H.d(a,"$iy")
this.f6()},
dl:function(){return this.dm(null)},
gku:function(){var u,t,s
u=Date.now()
t=C.f.a6(P.kc(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ai(u,!1)
return s/t},
dU:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.t()
if(typeof u!=="number")return H.A(u)
s=C.e.cS(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.t()
r=C.e.cS(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kA(C.y,this.gl4())}},
f6:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.hd(this),{func:1,ret:-1,args:[P.ag]})
C.P.hq(u)
C.P.iN(u,W.l3(t,P.ag))}},
l1:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dU()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ai(r,!1)
s.y=P.kc(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aM()
r=s.db
C.a.sm(r.a,0)
r.aM()
r=s.dx
C.a.sm(r.a,0)
r.aM()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aY(this.e)}s=this.z
if(s!=null)s.J(null)}catch(q){u=H.ad(q)
t=H.bZ(q)
P.jX("Error: "+H.j(u))
P.jX("Stack: "+H.j(t))
throw H.c(u)}}}
E.hd.prototype={
$1:function(a){var u
H.nL(a)
u=this.a
if(u.ch){u.ch=!1
u.l1()}},
$S:31}
Z.e5.prototype={$inS:1}
Z.d3.prototype={
cA:function(a){var u,t,s
try{t=a.a
C.b.ei(t,this.e)
C.b.li(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ad(s)
t=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}}
Z.hS.prototype={$inT:1}
Z.d4.prototype={
aW:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
cA:function(a){var u,t
u=this.a
C.b.ax(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].cA(a)},
lh:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.ef(s,u[t].e)
C.b.ax(s,this.a.a,null)},
aY:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ax(t,p,r.b)
C.b.ki(t,q.a,q.b,5123,0)
C.b.ax(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.f]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ao(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
shA:function(a){this.b=H.h(a,"$ia",[Z.bk],"$aa")},
$io1:1}
Z.bk.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bL(this.c)+"'")+"]"}}
Z.aV.prototype={
gdi:function(a){var u,t
u=this.a
t=(u&$.bb().a)!==0?3:0
if((u&$.ba().a)!==0)t+=3
if((u&$.b9().a)!==0)t+=3
if((u&$.bc().a)!==0)t+=2
if((u&$.bd().a)!==0)t+=3
if((u&$.cW().a)!==0)t+=3
if((u&$.cX().a)!==0)t+=4
if((u&$.c1().a)!==0)++t
return(u&$.b8().a)!==0?t+4:t},
jP:function(a){var u,t,s
u=$.bb()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.ba()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b9()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bc()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bd()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cW()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cX()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c1()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b8()
if((t&u.a)!==0)if(s===a)return u
return $.lB()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aV))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.f])
t=this.a
if((t&$.bb().a)!==0)C.a.h(u,"Pos")
if((t&$.ba().a)!==0)C.a.h(u,"Norm")
if((t&$.b9().a)!==0)C.a.h(u,"Binm")
if((t&$.bc().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bd().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cW().a)!==0)C.a.h(u,"Clr3")
if((t&$.cX().a)!==0)C.a.h(u,"Clr4")
if((t&$.c1().a)!==0)C.a.h(u,"Weight")
if((t&$.b8().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.eF.prototype={}
D.bA.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.y]}
H.k(b,u)
if(this.a==null)this.sal(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
M:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[D.y]})
u=this.a
u=u==null?null:C.a.X(u,b)
if(u===!0){u=this.a
t=(u&&C.a).M(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.X(u,b)
if(u===!0){u=this.b
t=(u&&C.a).M(u,b)||t}return t},
J:function(a){var u,t,s,r
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
return!0}if(!s)C.a.a_(t,new D.eW(u))
t=this.b
if(t!=null)C.a.a_(t,new D.eX(u))
u=this.b
if(u!=null)C.a.sm(u,0)
return!0},
kk:function(){return this.J(null)},
l5:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.J(t)}}},
aj:function(){return this.l5(!0,!1)},
sal:function(a){this.a=H.h(a,"$ia",[{func:1,ret:-1,args:[D.y]}],"$aa")},
sb2:function(a){this.b=H.h(a,"$ia",[{func:1,ret:-1,args:[D.y]}],"$aa")}}
D.eW.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.eX.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.y.prototype={}
D.bF.prototype={}
D.bG.prototype={}
D.C.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.d5.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d5))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dm.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dm))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.fe.prototype={
kU:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kQ:function(a){this.c=a.b
this.d.M(0,a.a)
return!1},
siD:function(a){this.d=H.h(a,"$ikw",[P.l],"$akw")}}
X.ds.prototype={}
X.fl.prototype={
b1:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ai(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.t()
q=b.b
p=this.ch
if(typeof q!=="number")return q.t()
o=new V.a3(t.a+s*r,t.b+q*p)
p=this.a.gaV()
n=new X.b4(a,V.bn(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
d1:function(a,b){this.r=a.a
return!1},
bd:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fv()
if(typeof u!=="number")return u.bV()
this.r=(u&~t)>>>0
return!1},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.b1(a,b))
return!0},
kV:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaV()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.t()
o=a.b
n=this.cy
if(typeof o!=="number")return o.t()
r=new X.cj(new V.R(q*p,o*n),t,s,new P.ai(r,!1),this)
r.b=!0
u.J(r)
return!0},
ib:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ai(Date.now(),!1)
t=this.f
s=new X.ds(c,a,this.a.gaV(),b,u,this)
s.b=!0
t.J(s)
this.y=u
this.x=V.bn()}}
X.au.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.au))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b4.prototype={}
X.fz.prototype={
c9:function(a,b,c){var u,t,s
u=new P.ai(Date.now(),!1)
t=this.a.gaV()
s=new X.b4(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
d1:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.c9(a,b,!0))
return!0},
bd:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fv()
if(typeof u!=="number")return u.bV()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.J(this.c9(a,b,!0))
return!0},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.c9(a,b,!1))
return!0},
kW:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaV()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.t()
p=a.b
o=this.ch
if(typeof p!=="number")return p.t()
s=new X.cj(new V.R(r*q,p*o),t,b,new P.ai(s,!1),this)
s.b=!0
u.J(s)
return!0},
geg:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
gbS:function(){var u=this.c
if(u==null){u=D.P()
this.c=u}return u},
geQ:function(){var u=this.d
if(u==null){u=D.P()
this.d=u}return u}}
X.cj.prototype={}
X.fL.prototype={}
X.dW.prototype={}
X.hg.prototype={
b1:function(a,b){var u,t,s,r
H.h(a,"$ia",[V.a3],"$aa")
u=new P.ai(Date.now(),!1)
t=a.length>0?a[0]:V.bn()
s=this.a.gaV()
r=new X.dW(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kT:function(a){var u
H.h(a,"$ia",[V.a3],"$aa")
u=this.b
if(u==null)return!1
u.J(this.b1(a,!0))
return!0},
kR:function(a){var u
H.h(a,"$ia",[V.a3],"$aa")
u=this.c
if(u==null)return!1
u.J(this.b1(a,!0))
return!0},
kS:function(a){var u
H.h(a,"$ia",[V.a3],"$aa")
u=this.d
if(u==null)return!1
u.J(this.b1(a,!1))
return!0}}
X.e0.prototype={
gaV:function(){var u=this.a
return V.ku(0,0,C.q.ged(u).c,C.q.ged(u).d)},
dD:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dm(u,new X.au(t,a.altKey,a.shiftKey))},
aR:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.au(t,a.altKey,a.shiftKey)},
cu:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.au(t,a.altKey,a.shiftKey)},
aH:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.u()
q=u.top
if(typeof s!=="number")return s.u()
return new V.a3(t-r,s-q)},
b3:function(a){return new V.R(a.movementX,a.movementY)},
co:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a3])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
o=C.e.ao(p.pageX)
C.e.ao(p.pageY)
n=u.left
C.e.ao(p.pageX)
C.a.h(t,new V.a3(o-n,C.e.ao(p.pageY)-u.top))}return t},
aE:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d5(u,new X.au(t,a.altKey,a.shiftKey))},
cd:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.u()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.u()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
i5:function(a){this.f=!0},
hU:function(a){this.f=!1},
i_:function(a){H.d(a,"$ia9")
if(this.f&&this.cd(a))a.preventDefault()},
i9:function(a){var u
H.d(a,"$iaO")
if(!this.f)return
u=this.dD(a)
this.b.kU(u)},
i7:function(a){var u
H.d(a,"$iaO")
if(!this.f)return
u=this.dD(a)
this.b.kQ(u)},
ie:function(a){var u,t,s,r
H.d(a,"$ia9")
u=this.a
u.focus()
this.f=!0
this.aR(a)
if(this.x){t=this.aE(a)
s=this.b3(a)
if(this.d.d1(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aE(a)
r=this.aH(a)
if(this.c.d1(t,r))a.preventDefault()},
ij:function(a){var u,t,s
H.d(a,"$ia9")
this.aR(a)
u=this.aE(a)
if(this.x){t=this.b3(a)
if(this.d.bd(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.bd(u,s))a.preventDefault()},
i3:function(a){var u,t,s
H.d(a,"$ia9")
if(!this.cd(a)){this.aR(a)
u=this.aE(a)
if(this.x){t=this.b3(a)
if(this.d.bd(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.bd(u,s))a.preventDefault()}},
ih:function(a){var u,t,s
H.d(a,"$ia9")
this.aR(a)
u=this.aE(a)
if(this.x){t=this.b3(a)
if(this.d.bc(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.bc(u,s))a.preventDefault()},
i1:function(a){var u,t,s
H.d(a,"$ia9")
if(!this.cd(a)){this.aR(a)
u=this.aE(a)
if(this.x){t=this.b3(a)
if(this.d.bc(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.bc(u,s))a.preventDefault()}},
il:function(a){var u,t
H.d(a,"$iaW")
this.aR(a)
u=new V.R((a&&C.O).gkd(a),C.O.gke(a)).C(0,180)
if(this.x){if(this.d.kV(u))a.preventDefault()
return}if(this.r)return
t=this.aH(a)
if(this.c.kW(u,t))a.preventDefault()},
io:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aE(this.y)
s=this.aH(this.y)
this.d.ib(t,s,u)}},
iB:function(a){var u
H.d(a,"$iaJ")
this.a.focus()
this.f=!0
this.cu(a)
u=this.co(a)
if(this.e.kT(u))a.preventDefault()},
ix:function(a){var u
H.d(a,"$iaJ")
this.cu(a)
u=this.co(a)
if(this.e.kR(u))a.preventDefault()},
iz:function(a){var u
H.d(a,"$iaJ")
this.cu(a)
u=this.co(a)
if(this.e.kS(u))a.preventDefault()},
shr:function(a){this.z=H.h(a,"$ia",[[P.cr,P.L]],"$aa")}}
D.d9.prototype={$ia1:1,$ib5:1}
D.a1.prototype={$ib5:1}
D.dp.prototype={
gv:function(){var u=this.Q
if(u==null){u=D.P()
this.Q=u}return u},
aa:function(a){var u=this.Q
if(u!=null)u.J(a)},
dP:function(a){var u
H.d(a,"$iy")
u=this.ch
if(u!=null)u.J(a)},
ia:function(){return this.dP(null)},
ir:function(a){var u,t,s
H.h(a,"$in",[D.a1],"$an")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(s==null||this.fV(s))return!1}return!0},
hO:function(a,b){var u,t,s,r,q,p,o,n
u=D.a1
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gdO(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=H.d(b[p],"$ia1")
if(o instanceof D.bp)C.a.h(this.y,o)
n=o.x
if(n==null){n=new D.bA()
n.sal(null)
n.sb2(null)
n.c=null
n.d=0
o.x=n}H.k(s,r)
if(n.a==null)n.sal(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bF(a,b,this,[u])
u.b=!0
this.aa(u)},
iv:function(a,b){var u,t,s,r
u=D.a1
H.h(b,"$in",[u],"$an")
for(t=b.gV(b),s=this.gdO();t.E();){r=t.gN()
C.a.M(this.e,r)
r.gv().M(0,s)}u=new D.bG(a,b,this,[u])
u.b=!0
this.aa(u)},
fV:function(a){var u=C.a.X(this.y,a)
return u},
sfW:function(a){this.e=H.h(a,"$ia",[D.d9],"$aa")},
sfY:function(a){this.f=H.h(a,"$ia",[D.dD],"$aa")},
sfZ:function(a){this.r=H.h(a,"$ia",[D.dL],"$aa")},
sh_:function(a){this.x=H.h(a,"$ia",[D.dS],"$aa")},
sh0:function(a){this.y=H.h(a,"$ia",[D.bp],"$aa")},
sh1:function(a){this.z=H.h(a,"$ia",[D.dT],"$aa")},
$an:function(){return[D.a1]},
$aZ:function(){return[D.a1]}}
D.dD.prototype={$ia1:1,$ib5:1}
D.dL.prototype={$ia1:1,$ib5:1}
D.dS.prototype={$ia1:1,$ib5:1}
D.bp.prototype={
gv:function(){var u=this.x
if(u==null){u=D.P()
this.x=u}return u},
aa:function(a){var u
H.d(a,"$iy")
u=this.x
if(u!=null)u.J(a)},
fX:function(){return this.aa(null)},
$ia1:1,
$ib5:1}
D.dT.prototype={$ia1:1,$ib5:1}
V.a_.prototype={
n:function(a,b){var u,t,s
u=C.e.n(this.a,b.gd5())
t=C.e.n(this.b,b.gbY())
s=C.e.n(this.c,b.gcC())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a_(u,t,s)},
u:function(a,b){var u,t,s
u=C.e.u(this.a,b.gd5())
t=C.e.u(this.b,b.gbY())
s=C.e.u(this.c,b.gcC())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a_(u,t,s)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.aE.prototype={
n:function(a,b){var u,t,s,r
u=C.e.n(this.a,b.gd5())
t=C.e.n(this.b,b.gbY())
s=C.e.n(this.c,b.gcC())
r=C.e.n(this.d,b.gjO(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aE(u,t,s,r)},
u:function(a,b){var u,t,s,r
u=C.e.u(this.a,b.gd5())
t=C.e.u(this.b,b.gbY())
s=C.e.u(this.c,b.gcC())
r=C.e.u(this.d,b.gjO(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aE(u,t,s,r)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aE))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}}
V.eU.prototype={}
V.dv.prototype={
ak:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.o])
return u},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dv))return!1
u=b.a
t=$.D().a
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
u=[P.o]
t=V.bX(H.b([this.a,this.d,this.r],u),3,0)
s=V.bX(H.b([this.b,this.e,this.x],u),3,0)
r=V.bX(H.b([this.c,this.f,this.y],u),3,0)
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
V.ae.prototype={
ak:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.o])
return u},
eO:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.D().a)return V.ch()
a8=1/a7
a9=-r
b0=-d
return V.aQ((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
t:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
fd:function(a){return new V.E(C.e.t(this.a,a.gbu(a))+C.e.t(this.b,a.gbv(a))+C.e.t(this.c,a.geh()),C.e.t(this.e,a.gbu(a))+C.e.t(this.f,a.gbv(a))+C.e.t(this.r,a.geh()),C.e.t(this.y,a.gbu(a))+C.e.t(this.z,a.gbv(a))+C.e.t(this.Q,a.geh()))},
bh:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.Y(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ae))return!1
u=b.a
t=$.D().a
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
i:function(a){return this.P()},
eG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.o]
t=V.bX(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bX(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bX(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bX(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
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
P:function(){return this.eG("",3,0)},
G:function(a){return this.eG(a,3,0)}}
V.a3.prototype={
n:function(a,b){return new V.a3(this.a+b.a,this.b+b.b)},
u:function(a,b){return new V.a3(this.a-b.a,this.b-b.b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.Y.prototype={
n:function(a,b){return new V.Y(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.Y(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){return new V.Y(this.a*b,this.b*b,this.c*b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.aR.prototype={
n:function(a,b){return new V.aR(C.e.n(this.a,b.gll(b)),C.e.n(this.b,b.glm(b)),C.e.n(this.c,b.gln(b)),C.e.n(this.d,b.glk()))},
u:function(a,b){return new V.aR(C.e.u(this.a,b.gll(b)),C.e.u(this.b,b.glm(b)),C.e.u(this.c,b.gln(b)),C.e.u(this.d,b.glk()))},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aR))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}}
V.dH.prototype={
gab:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dH))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}}
V.R.prototype={
cW:function(a){return Math.sqrt(this.H(this))},
H:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.A(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.A(r)
return u*t+s*r},
n:function(a,b){var u,t,s
u=this.a
t=b.gbu(b)
if(typeof u!=="number")return u.n()
t=C.e.n(u,t)
u=this.b
s=b.gbv(b)
if(typeof u!=="number")return u.n()
return new V.R(t,C.e.n(u,s))},
u:function(a,b){var u,t,s
u=this.a
t=b.gbu(b)
if(typeof u!=="number")return u.u()
t=C.e.u(u,t)
u=this.b
s=b.gbv(b)
if(typeof u!=="number")return u.u()
return new V.R(t,C.e.u(u,s))},
t:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.R(u*b,t*b)},
C:function(a,b){var u,t
if(Math.abs(b-0)<$.D().a){u=$.kH
if(u==null){u=new V.R(0,0)
$.kH=u}return u}u=this.a
if(typeof u!=="number")return u.C()
t=this.b
if(typeof t!=="number")return t.C()
return new V.R(u/b,t/b)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=this.a
s=$.D()
s.toString
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.A(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.A(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.E.prototype={
cW:function(a){return Math.sqrt(this.H(this))},
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cX:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.E(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aI:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.E(u*t-s*r,s*q-p*t,p*r-u*q)},
n:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.E(this.a-b.a,this.b-b.b,this.c-b.c)},
U:function(a){return new V.E(-this.a,-this.b,-this.c)},
t:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
C:function(a,b){if(Math.abs(b-0)<$.D().a)return V.cF()
return new V.E(this.a/b,this.b/b,this.c/b)},
eP:function(){var u=$.D().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
U.eG.prototype={
c5:function(a){var u=V.jj(a,this.c,this.b)
return u},
gv:function(){var u=this.y
if(u==null){u=D.P()
this.y=u}return u},
K:function(a){var u=this.y
if(u!=null)u.J(a)},
sdd:function(a,b){},
scZ:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.D().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.c5(t)}u=new D.C("maximumLocation",u,this.b,this,[P.o])
u.b=!0
this.K(u)}},
sd0:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.D().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.c5(t)}u=new D.C("minimumLocation",u,this.c,this,[P.o])
u.b=!0
this.K(u)}},
sa2:function(a,b){var u
b=this.c5(b)
u=this.d
if(!(Math.abs(u-b)<$.D().a)){this.d=b
u=new D.C("location",u,b,this,[P.o])
u.b=!0
this.K(u)}},
sd_:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.D().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.C("maximumVelocity",u,a,this,[P.o])
u.b=!0
this.K(u)}},
sW:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.D().a)){this.f=a
u=new D.C("velocity",u,a,this,[P.o])
u.b=!0
this.K(u)}},
scJ:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.D().a)){this.x=a
u=new D.C("dampening",u,a,this,[P.o])
u.b=!0
this.K(u)}},
ap:function(a){var u,t,s,r,q
u=this.f
t=$.D().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa2(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.D().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sW(s)}}}
U.d7.prototype={
gv:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
aq:function(a,b){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d7))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cb.prototype={
gv:function(){var u=this.e
if(u==null){u=D.P()
this.e=u}return u},
K:function(a){var u
H.d(a,"$iy")
u=this.e
if(u!=null)u.J(a)},
a8:function(){return this.K(null)},
h3:function(a,b){var u,t,s,r,q,p,o,n
u=U.a6
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gaQ(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.gv()
n.toString
H.k(s,r)
if(n.a==null)n.sal(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bF(a,b,this,[u])
u.b=!0
this.K(u)},
it:function(a,b){var u,t,s
u=U.a6
H.h(b,"$in",[u],"$an")
for(t=b.gV(b),s=this.gaQ();t.E();)t.gN().gv().M(0,s)
u=new D.bG(a,b,this,[u])
u.b=!0
this.K(u)},
aq:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.Y()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ap(u,u.length,0,[H.r(u,0)]),s=null;u.E();){t=u.d
if(t!=null){r=t.aq(a,b)
if(r!=null)s=s==null?r:r.t(0,s)}}this.f=s==null?V.ch():s
u=this.e
if(u!=null)u.aj()}return this.f},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cb))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.O(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$an:function(){return[U.a6]},
$aZ:function(){return[U.a6]},
$ia6:1}
U.a6.prototype={}
U.dI.prototype={
gv:function(){var u=this.y
if(u==null){u=D.P()
this.y=u}return u},
K:function(a){var u=this.y
if(u!=null)u.J(a)},
sfj:function(a){var u
a=V.jj(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.D().a)){this.a=a
u=new D.C("yaw",u,a,this,[P.o])
u.b=!0
this.K(u)}},
sf1:function(a){var u
a=V.jj(a,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-a)<$.D().a)){this.b=a
u=new D.C("pitch",u,a,this,[P.o])
u.b=!0
this.K(u)}},
sf7:function(a){var u
a=V.jj(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.D().a)){this.c=a
u=new D.C("roll",u,a,this,[P.o])
u.b=!0
this.K(u)}},
aq:function(a,b){var u,t
u=this.r
t=a.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.sfj(this.a+this.d*a.y)
this.sf1(this.b+this.e*a.y)
this.sf7(this.c+this.f*a.y)
this.x=V.km(this.c).t(0,V.kl(this.b)).t(0,V.kk(this.a))
u=this.y
if(u!=null)u.aj()}return this.x},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dI))return!1
u=this.a
t=b.a
s=$.D().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"], ["+V.K(this.d,3,0)+", "+V.K(this.e,3,0)+", "+V.K(this.f,3,0)+"]"}}
U.e1.prototype={
gv:function(){var u=this.cy
if(u==null){u=D.P()
this.cy=u}return u},
K:function(a){var u
H.d(a,"$iy")
u=this.cy
if(u!=null)u.J(a)},
a8:function(){return this.K(null)},
b6:function(a){if(this.a!=null)return!1
this.a=a
a.c.geg().h(0,this.gce())
this.a.c.geQ().h(0,this.gcg())
this.a.c.gbS().h(0,this.gcj())
return!0},
cf:function(a){H.d(a,"$iy")
if(!J.O(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
ci:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$ib4")
if(!this.y)return
if(this.x){u=a.d.u(0,a.y)
u=new V.R(u.a,u.b)
u=u.H(u)
t=this.r
if(typeof t!=="number")return H.A(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.u(0,a.y)
u=new V.R(t.a,t.b).t(0,2).C(0,u.gab())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.t()
s=this.e
if(typeof s!=="number")return H.A(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=new V.R(s.a,s.b).t(0,2).C(0,u.gab())
s=this.b
q=r.a
if(typeof q!=="number")return q.U()
p=this.e
if(typeof p!=="number")return H.A(p)
o=this.z
if(typeof o!=="number")return H.A(o)
s.sa2(0,-q*p+o)
this.b.sW(0)
t=t.u(0,a.z)
this.Q=new V.R(t.a,t.b).t(0,2).C(0,u.gab())}this.a8()},
ck:function(a){var u,t,s
H.d(a,"$iy")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.H(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.t()
s=this.e
if(typeof s!=="number")return H.A(s)
u.sW(t*10*s)
this.a8()}},
aq:function(a,b){var u,t,s
u=this.ch
t=a.e
if(typeof u!=="number")return u.Y()
if(u<t){this.ch=t
s=a.y
this.b.ap(s)
this.cx=V.km(this.b.d)}return this.cx},
$ia6:1}
U.e2.prototype={
gv:function(){var u=this.fx
if(u==null){u=D.P()
this.fx=u}return u},
K:function(a){var u
H.d(a,"$iy")
u=this.fx
if(u!=null)u.J(a)},
a8:function(){return this.K(null)},
b6:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.geg().h(0,this.gce())
this.a.c.geQ().h(0,this.gcg())
this.a.c.gbS().h(0,this.gcj())
u=this.a.d
t=u.f
if(t==null){t=D.P()
u.f=t
u=t}else u=t
u.h(0,this.ghG())
u=this.a.d
t=u.d
if(t==null){t=D.P()
u.d=t
u=t}else u=t
u.h(0,this.ghI())
u=this.a.e
t=u.b
if(t==null){t=D.P()
u.b=t
u=t}else u=t
u.h(0,this.gjc())
u=this.a.e
t=u.d
if(t==null){t=D.P()
u.d=t
u=t}else u=t
u.h(0,this.gja())
u=this.a.e
t=u.c
if(t==null){t=D.P()
u.c=t
u=t}else u=t
u.h(0,this.gj8())
return!0},
au:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.U()
u=-u}if(this.r){if(typeof t!=="number")return t.U()
t=-t}return new V.R(u,t)},
cf:function(a){a=H.i(H.d(a,"$iy"),"$ib4")
if(!J.O(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ci:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$ib4")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.R(u.a,u.b)
u=u.H(u)
t=this.Q
if(typeof t!=="number")return H.A(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.au(new V.R(t.a,t.b).t(0,2).C(0,u.gab()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.U()
s=this.y
if(typeof s!=="number")return H.A(s)
t.sW(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.U()
t=this.x
if(typeof t!=="number")return H.A(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=this.au(new V.R(s.a,s.b).t(0,2).C(0,u.gab()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.A(p)
o=this.cy
if(typeof o!=="number")return H.A(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.A(q)
s=this.db
if(typeof s!=="number")return H.A(s)
o.sa2(0,-p*q+s)
this.b.sW(0)
this.c.sW(0)
t=t.u(0,a.z)
this.dx=this.au(new V.R(t.a,t.b).t(0,2).C(0,u.gab()))}this.a8()},
ck:function(a){var u,t,s
H.d(a,"$iy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.H(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.U()
s=this.y
if(typeof s!=="number")return H.A(s)
u.sW(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.U()
u=this.x
if(typeof u!=="number")return H.A(u)
s.sW(-t*10*u)
this.a8()}},
hH:function(a){if(H.i(H.d(a,"$iy"),"$ids").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hJ:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$ib4")
if(!J.O(this.d,a.x.b))return
u=a.c
t=a.d
s=t.u(0,a.y)
r=this.au(new V.R(s.a,s.b).t(0,2).C(0,u.gab()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.A(p)
o=this.cy
if(typeof o!=="number")return H.A(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.A(q)
s=this.db
if(typeof s!=="number")return H.A(s)
o.sa2(0,-p*q+s)
this.b.sW(0)
this.c.sW(0)
t=t.u(0,a.z)
this.dx=this.au(new V.R(t.a,t.b).t(0,2).C(0,u.gab()))
this.a8()},
jd:function(a){H.d(a,"$iy")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
jb:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$idW")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.R(u.a,u.b)
u=u.H(u)
t=this.Q
if(typeof t!=="number")return H.A(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.au(new V.R(t.a,t.b).t(0,2).C(0,u.gab()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.U()
s=this.y
if(typeof s!=="number")return H.A(s)
t.sW(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.U()
t=this.x
if(typeof t!=="number")return H.A(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=this.au(new V.R(s.a,s.b).t(0,2).C(0,u.gab()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.A(p)
o=this.cy
if(typeof o!=="number")return H.A(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.A(q)
s=this.db
if(typeof s!=="number")return H.A(s)
o.sa2(0,-p*q+s)
this.b.sW(0)
this.c.sW(0)
t=t.u(0,a.z)
this.dx=this.au(new V.R(t.a,t.b).t(0,2).C(0,u.gab()))}this.a8()},
j9:function(a){var u,t,s
H.d(a,"$iy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.H(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.U()
s=this.y
if(typeof s!=="number")return H.A(s)
u.sW(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.U()
u=this.x
if(typeof u!=="number")return H.A(u)
s.sW(-t*10*u)
this.a8()}},
aq:function(a,b){var u,t,s
u=this.dy
t=a.e
if(typeof u!=="number")return u.Y()
if(u<t){this.dy=t
s=a.y
this.c.ap(s)
this.b.ap(s)
this.fr=V.kk(this.b.d).t(0,V.kl(this.c.d))}return this.fr},
$ia6:1}
U.e3.prototype={
gv:function(){var u=this.r
if(u==null){u=D.P()
this.r=u}return u},
K:function(a){var u=this.r
if(u!=null)u.J(a)},
b6:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.P()
u.e=t
u=t}else u=t
t=this.ghK()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.P()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hL:function(a){var u,t,s,r
H.d(a,"$iy")
if(!J.O(this.b,this.a.b.c))return
H.i(a,"$icj")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){this.d=r
u=new D.C("zoom",u,r,this,[P.o])
u.b=!0
this.K(u)}},
aq:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.jz(s,s,s,1)}return this.f},
$ia6:1}
M.dc.prototype={
aD:function(a){var u
H.d(a,"$iy")
u=this.x
if(u!=null)u.J(a)},
h4:function(){return this.aD(null)},
hW:function(a,b){var u,t,s,r,q,p,o,n
u=E.aj
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gat(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bA()
n.sal(null)
n.sb2(null)
n.c=null
n.d=0
o.z=n}H.k(s,r)
if(n.a==null)n.sal(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bF(a,b,this,[u])
u.b=!0
this.aD(u)},
hY:function(a,b){var u,t,s
u=E.aj
H.h(b,"$in",[u],"$an")
for(t=b.gV(b),s=this.gat();t.E();)t.gN().gv().M(0,s)
u=new D.bG(a,b,this,[u])
u.b=!0
this.aD(u)},
sbf:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gv().M(0,this.gat())
t=this.c
this.c=a
if(a!=null)a.gv().h(0,this.gat())
u=new D.C("technique",t,this.c,this,[O.bo])
u.b=!0
this.aD(u)}},
gv:function(){var u=this.x
if(u==null){u=D.P()
this.x=u}return u},
aY:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.f4(this.c)
u=this.b
u.toString
t=a1.a
C.b.jS(t,36160,null)
C.b.cK(t,2884)
C.b.cK(t,2929)
C.b.kf(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.A(s)
o=C.e.ao(p*s)
p=q.b
if(typeof r!=="number")return H.A(r)
n=C.e.ao(p*r)
p=C.e.ao(q.c*s)
a1.c=p
q=C.e.ao(q.d*r)
a1.d=q
C.b.lj(t,o,n,p,q)
C.b.jY(t,u.c)
u=u.a
C.b.jX(t,u.a,u.b,u.c,u.d)
C.b.jW(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aQ(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.f3(i)
t=$.kq
if(t==null){t=V.mj()
q=$.kK
if(q==null){q=new V.E(0,1,0)
$.kK=q}p=$.kI
if(p==null){p=new V.E(0,0,-1)
$.kI=p}h=p.C(0,Math.sqrt(p.H(p)))
q=q.aI(h)
g=q.C(0,Math.sqrt(q.H(q)))
f=h.aI(g)
e=new V.E(t.a,t.b,t.c)
d=g.U(0).H(e)
c=f.U(0).H(e)
b=h.U(0).H(e)
t=V.aQ(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.kq=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.aq(a1,u)
if(a0!=null)a=a0.t(0,a)}a1.db.f3(a)
u=this.c
if(u!=null)u.ap(a1)
for(u=this.d.a,u=new J.ap(u,u.length,0,[H.r(u,0)]);u.E();)u.d.ap(a1)
for(u=this.d.a,u=new J.ap(u,u.length,0,[H.r(u,0)]);u.E();)u.d.aY(a1)
this.a.toString
a1.cy.d2()
a1.db.d2()
this.b.toString
a1.f2()},
shi:function(a,b){this.d=H.h(b,"$iZ",[E.aj],"$aZ")},
$inZ:1}
A.d1.prototype={}
A.ez.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
kl:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.b.ei(r.a,r.c)}},
kh:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.b.ef(r.a,r.c)}}}
A.fs.prototype={
fN:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
a7.jl(u)
a7.js(u)
a7.jm(u)
a7.jA(u)
a7.jB(u)
a7.ju(u)
a7.jF(u)
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
s.jp(u)
s.jk(u)
s.jn(u)
s.jq(u)
s.jy(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.jw(u)
s.jx(u)}s.jt(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=s.y
if(l!==C.d){m+="uniform float alpha;\n"
u.a=m
if(l!==C.j){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.i){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.h){m+="uniform samplerCube alphaTxt;\n"
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
case C.i:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.h:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
s.jo(u)
s.jv(u)
s.jz(u)
s.jC(u)
s.jD(u)
s.jE(u)
s.jr(u)}m=u.a+="// === Main ===\n"
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
this.e=this.dE(n,35633)
this.f=this.dE(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.e5(s,q,this.e)
C.b.e5(s,this.r,this.f)
C.b.kC(s,this.r)
if(!H.jO(C.b.bX(s,this.r,35714))){h=C.b.fp(s,this.r)
C.b.kb(s,this.r)
H.q(P.u("Failed to link shader: "+H.j(h)))}this.iY()
this.j_()
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a7.fr)this.id=H.i(this.y.p(0,"invViewMat"),"$iaw")
if(t)this.dy=H.i(this.y.p(0,"objMat"),"$iaw")
if(r)this.fr=H.i(this.y.p(0,"viewObjMat"),"$iaw")
this.fy=H.i(this.y.p(0,"projViewObjMat"),"$iaw")
if(a7.x2)this.k1=H.i(this.y.p(0,"txt2DMat"),"$icy")
if(a7.y1)this.k2=H.i(this.y.p(0,"txtCubeMat"),"$iaw")
if(a7.y2)this.k3=H.i(this.y.p(0,"colorMat"),"$iaw")
this.she(H.b([],[A.aw]))
t=a7.aA
if(t>0){this.k4=H.d(this.y.p(0,"bendMatCount"),"$iJ")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.k(0,q)
if(f==null)H.q(P.u("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.i(f,"$iaw"))}}t=a7.a
if(t!==C.d){this.r2=H.i(this.y.p(0,"emissionClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.i:this.rx=H.i(this.y.p(0,"emissionTxt"),"$iak")
this.x1=H.i(this.y.p(0,"nullEmissionTxt"),"$iJ")
break
case C.h:this.ry=H.i(this.y.p(0,"emissionTxt"),"$ial")
this.x1=H.i(this.y.p(0,"nullEmissionTxt"),"$iJ")
break}}t=a7.b
if(t!==C.d){this.x2=H.i(this.y.p(0,"ambientClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.i:this.y1=H.i(this.y.p(0,"ambientTxt"),"$iak")
this.aA=H.i(this.y.p(0,"nullAmbientTxt"),"$iJ")
break
case C.h:this.y2=H.i(this.y.p(0,"ambientTxt"),"$ial")
this.aA=H.i(this.y.p(0,"nullAmbientTxt"),"$iJ")
break}}t=a7.c
if(t!==C.d){this.an=H.i(this.y.p(0,"diffuseClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.i:this.bw=H.i(this.y.p(0,"diffuseTxt"),"$iak")
this.bx=H.i(this.y.p(0,"nullDiffuseTxt"),"$iJ")
break
case C.h:this.ej=H.i(this.y.p(0,"diffuseTxt"),"$ial")
this.bx=H.i(this.y.p(0,"nullDiffuseTxt"),"$iJ")
break}}t=a7.d
if(t!==C.d){this.by=H.i(this.y.p(0,"invDiffuseClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.i:this.ek=H.i(this.y.p(0,"invDiffuseTxt"),"$iak")
this.bz=H.i(this.y.p(0,"nullInvDiffuseTxt"),"$iJ")
break
case C.h:this.el=H.i(this.y.p(0,"invDiffuseTxt"),"$ial")
this.bz=H.i(this.y.p(0,"nullInvDiffuseTxt"),"$iJ")
break}}t=a7.e
if(t!==C.d){this.bC=H.i(this.y.p(0,"shininess"),"$iW")
this.bA=H.i(this.y.p(0,"specularClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.i:this.em=H.i(this.y.p(0,"specularTxt"),"$iak")
this.bB=H.i(this.y.p(0,"nullSpecularTxt"),"$iJ")
break
case C.h:this.en=H.i(this.y.p(0,"specularTxt"),"$ial")
this.bB=H.i(this.y.p(0,"nullSpecularTxt"),"$iJ")
break}}switch(a7.f){case C.d:break
case C.j:break
case C.i:this.eo=H.i(this.y.p(0,"bumpTxt"),"$iak")
this.bD=H.i(this.y.p(0,"nullBumpTxt"),"$iJ")
break
case C.h:this.ep=H.i(this.y.p(0,"bumpTxt"),"$ial")
this.bD=H.i(this.y.p(0,"nullBumpTxt"),"$iJ")
break}if(a7.dy){this.eq=H.i(this.y.p(0,"envSampler"),"$ial")
this.er=H.i(this.y.p(0,"nullEnvTxt"),"$iJ")
t=a7.r
if(t!==C.d){this.bE=H.i(this.y.p(0,"reflectClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.i:this.es=H.i(this.y.p(0,"reflectTxt"),"$iak")
this.bF=H.i(this.y.p(0,"nullReflectTxt"),"$iJ")
break
case C.h:this.eu=H.i(this.y.p(0,"reflectTxt"),"$ial")
this.bF=H.i(this.y.p(0,"nullReflectTxt"),"$iJ")
break}}t=a7.x
if(t!==C.d){this.bG=H.i(this.y.p(0,"refraction"),"$iW")
this.bH=H.i(this.y.p(0,"refractClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.i:this.ev=H.i(this.y.p(0,"refractTxt"),"$iak")
this.bI=H.i(this.y.p(0,"nullRefractTxt"),"$iJ")
break
case C.h:this.ew=H.i(this.y.p(0,"refractTxt"),"$ial")
this.bI=H.i(this.y.p(0,"nullRefractTxt"),"$iJ")
break}}}t=a7.y
if(t!==C.d){this.bJ=H.i(this.y.p(0,"alpha"),"$iW")
switch(t){case C.d:break
case C.j:break
case C.i:this.ex=H.i(this.y.p(0,"alphaTxt"),"$iak")
this.bK=H.i(this.y.p(0,"nullAlphaTxt"),"$iJ")
break
case C.h:this.ey=H.i(this.y.p(0,"alphaTxt"),"$ial")
this.bK=H.i(this.y.p(0,"nullAlphaTxt"),"$iJ")
break}}this.sho(H.b([],[A.cx]))
this.siC(H.b([],[A.cz]))
this.sj2(H.b([],[A.cA]))
this.sjf(H.b([],[A.cB]))
this.sjg(H.b([],[A.cC]))
this.sjh(H.b([],[A.cD]))
if(a7.k2){t=a7.z
if(t>0){this.ez=H.d(this.y.p(0,"dirLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="dirLights["+g+"].color"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.cL;(s&&C.a).h(s,new A.cx(g,f,e))}}t=a7.Q
if(t>0){this.eA=H.d(this.y.p(0,"pntLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="pntLights["+g+"].color"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="pntLights["+g+"].att0"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iW")
s=this.y
r="pntLights["+g+"].att1"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iW")
s=this.y
r="pntLights["+g+"].att2"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iW")
s=this.cM;(s&&C.a).h(s,new A.cz(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.eB=H.d(this.y.p(0,"spotLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="spotLights["+g+"].objDir"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="spotLights["+g+"].color"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iW")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iW")
s=this.y
r="spotLights["+g+"].att0"
a0=s.k(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iW")
s=this.y
r="spotLights["+g+"].att1"
a1=s.k(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iW")
s=this.y
r="spotLights["+g+"].att2"
a2=s.k(0,r)
if(a2==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$iW")
s=this.cN;(s&&C.a).h(s,new A.cA(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.eC=H.d(this.y.p(0,"txtDirLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="txtDirLights["+g+"].color"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iI")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iJ")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.k(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iak")
s=this.cO;(s&&C.a).h(s,new A.cB(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.eD=H.d(this.y.p(0,"txtPntLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$icy")
s=this.y
r="txtPntLights["+g+"].color"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iJ")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iW")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.k(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iW")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.k(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iW")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.k(0,r)
if(a2==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$ial")
s=this.cP;(s&&C.a).h(s,new A.cC(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.eE=H.d(this.y.p(0,"txtSpotLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iI")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iJ")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.k(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iI")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.k(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iW")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.k(0,r)
if(a2==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$iW")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.k(0,r)
if(a3==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a3,"$iW")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.k(0,r)
if(a4==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a4,"$iW")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.k(0,r)
if(a5==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a5,"$iW")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.k(0,r)
if(a6==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a6,"$iak")
s=this.cQ;(s&&C.a).h(s,new A.cD(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
am:function(a,b,c){C.b.T(b.a,b.d,1)},
af:function(a,b,c){if(c==null||c.d<6)C.b.T(b.a,b.d,1)
else{a.fD(c)
C.b.T(b.a,b.d,0)}},
she:function(a){this.r1=H.h(a,"$ia",[A.aw],"$aa")},
sho:function(a){this.cL=H.h(a,"$ia",[A.cx],"$aa")},
siC:function(a){this.cM=H.h(a,"$ia",[A.cz],"$aa")},
sj2:function(a){this.cN=H.h(a,"$ia",[A.cA],"$aa")},
sjf:function(a){this.cO=H.h(a,"$ia",[A.cB],"$aa")},
sjg:function(a){this.cP=H.h(a,"$ia",[A.cC],"$aa")},
sjh:function(a){this.cQ=H.h(a,"$ia",[A.cD],"$aa")}}
A.fv.prototype={
jl:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aA+"];\n"
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
js:function(a){var u
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
jm:function(a){var u
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
jA:function(a){var u,t
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
jB:function(a){var u,t
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
ju:function(a){var u
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
jF:function(a){var u
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
if(0>=c.length)return H.e(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.as(c,1))+"Txt;\n"
a.a=u
if(b===C.i)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jp:function(a){var u,t
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
case C.i:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
jk:function(a){var u,t
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
case C.i:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
jn:function(a){var u,t
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
case C.i:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
jq:function(a){var u,t
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
case C.i:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
jy:function(a){var u,t
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
case C.i:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
jt:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.d:break
case C.j:break
case C.i:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.h:u+="uniform samplerCube bumpTxt;\n"
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
case C.i:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.h:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
jw:function(a){var u,t
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
case C.i:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jx:function(a){var u,t
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
case C.i:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jo:function(a){var u,t
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
jv:function(a){var u,t
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
jz:function(a){var u,t
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
jC:function(a){var u,t,s
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
jD:function(a){var u,t,s
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
jE:function(a){var u,t,s
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
jr:function(a){var u
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
i:function(a){return this.an}}
A.cx.prototype={}
A.cB.prototype={}
A.cz.prototype={}
A.cC.prototype={}
A.cA.prototype={}
A.cD.prototype={}
A.cp.prototype={
fQ:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dE:function(a,b){var u,t,s
u=this.a
t=C.b.k9(u,b)
C.b.fE(u,t,a)
C.b.k_(u,t)
if(!H.jO(C.b.fs(u,t,35713))){s=C.b.fq(u,t)
C.b.kc(u,t)
throw H.c(P.u("Error compiling shader '"+H.j(t)+"': "+H.j(s)))}return t},
iY:function(){var u,t,s,r,q,p
u=H.b([],[A.d1])
t=this.a
s=H.ac(C.b.bX(t,this.r,35721))
if(typeof s!=="number")return H.A(s)
r=0
for(;r<s;++r){q=C.b.fk(t,this.r,r)
p=C.b.fm(t,this.r,q.name)
C.a.h(u,new A.d1(t,q.name,p))}this.x=new A.ez(u)},
j_:function(){var u,t,s,r,q,p
u=H.b([],[A.dX])
t=this.a
s=H.ac(C.b.bX(t,this.r,35718))
if(typeof s!=="number")return H.A(s)
r=0
for(;r<s;++r){q=C.b.fl(t,this.r,r)
p=C.b.ft(t,this.r,q.name)
C.a.h(u,this.ka(q.type,q.size,q.name,p))}this.y=new A.hs(u)},
aO:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.J(u,t,b,c)
else return A.jC(u,t,b,a,c)},
hl:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ak(u,t,b,c)
else return A.jC(u,t,b,a,c)},
hm:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.al(u,t,b,c)
else return A.jC(u,t,b,a,c)},
bq:function(a,b){return new P.e9(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
ka:function(a,b,c,d){switch(a){case 5120:return this.aO(b,c,d)
case 5121:return this.aO(b,c,d)
case 5122:return this.aO(b,c,d)
case 5123:return this.aO(b,c,d)
case 5124:return this.aO(b,c,d)
case 5125:return this.aO(b,c,d)
case 5126:return new A.W(this.a,this.r,c,d)
case 35664:return new A.hn(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.hq(this.a,this.r,c,d)
case 35667:return new A.ho(this.a,this.r,c,d)
case 35668:return new A.hp(this.a,this.r,c,d)
case 35669:return new A.hr(this.a,this.r,c,d)
case 35674:return new A.ht(this.a,this.r,c,d)
case 35675:return new A.cy(this.a,this.r,c,d)
case 35676:return new A.aw(this.a,this.r,c,d)
case 35678:return this.hl(b,c,d)
case 35680:return this.hm(b,c,d)
case 35670:throw H.c(this.bq("BOOL",c))
case 35671:throw H.c(this.bq("BOOL_VEC2",c))
case 35672:throw H.c(this.bq("BOOL_VEC3",c))
case 35673:throw H.c(this.bq("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.bz.prototype={
i:function(a){return this.b}}
A.dX.prototype={}
A.hs.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.k(0,b)
if(u==null)throw H.c(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
kt:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r)s+=u[r].i(0)+a
return s},
P:function(){return this.kt("\n")}}
A.J.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.ho.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.hp.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.hr.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.hm.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
sji:function(a){this.e=H.h(a,"$ia",[P.l],"$aa")}}
A.W.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.hn.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.I.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.hq.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.ht.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.cy.prototype={
ar:function(a){var u=new Float32Array(H.bS(H.h(a,"$ia",[P.o],"$aa")))
C.b.fe(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.aw.prototype={
ar:function(a){var u=new Float32Array(H.bS(H.h(a,"$ia",[P.o],"$aa")))
C.b.ff(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.ak.prototype={
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.al.prototype={
fD:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(u<6)C.b.T(t,s,0)
else C.b.T(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.iK.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cX(u.b,b).cX(u.d.cX(u.c,b),c)
a.sa2(0,new V.Y(t.a,t.b,t.c))
a.sf9(t.C(0,Math.sqrt(t.H(t))))
u=1-b
s=1-c
a.se9(new V.aR(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:8}
F.iU.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:30}
F.iW.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.A(q)
t=-t*q
p=s*q
a.sa2(0,new V.Y(t,p,r))
p=new V.E(t,p,r)
a.sf9(p.C(0,Math.sqrt(p.H(p))))
a.se9(new V.aR(1-c,2+c,-1,-1))},
$S:8}
F.iX.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:20}
F.iY.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:20}
F.jf.prototype={
$2:function(a,b){return 0},
$S:30}
F.jg.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.A(u)
t=a.f
s=new V.E(t.a,t.b,t.c)
u=s.C(0,Math.sqrt(s.H(s))).t(0,this.b+u)
a.sa2(0,new V.Y(u.a,u.b,u.c))},
$S:8}
F.jh.prototype={
$1:function(a){return new V.Y(Math.cos(a),Math.sin(a),0)},
$S:28}
F.j4.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.Y(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:28}
F.iV.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.k2(t.$1(u),s)
s=J.lH(J.k2(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.E(s.a,s.b,s.c)
q=s.C(0,Math.sqrt(s.H(s)))
t=$.kJ
if(t==null){t=new V.E(1,0,0)
$.kJ=t
p=t}else p=t
if(!J.O(q,p)){t=$.kL
if(t==null){t=new V.E(0,0,1)
$.kL=t
p=t}else p=t}t=q.aI(p)
o=t.C(0,Math.sqrt(t.H(t)))
t=o.aI(q)
p=t.C(0,Math.sqrt(t.H(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.t(0,t*s)
s=o.t(0,m*s)
a.sa2(0,J.lG(r,new V.Y(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:8}
F.a2.prototype={
b8:function(){if(!this.gb9()){C.a.M(this.a.a.d.b,this)
this.a.a.a3()}this.cq()
this.cr()
this.iJ()},
cv:function(a){this.a=a
C.a.h(a.d.b,this)},
cw:function(a){this.b=a
C.a.h(a.d.c,this)},
iX:function(a){this.c=a
C.a.h(a.d.d,this)},
cq:function(){var u=this.a
if(u!=null){C.a.M(u.d.b,this)
this.a=null}},
cr:function(){var u=this.b
if(u!=null){C.a.M(u.d.c,this)
this.b=null}},
iJ:function(){var u=this.c
if(u!=null){C.a.M(u.d.d,this)
this.c=null}},
gb9:function(){return this.a==null||this.b==null||this.c==null},
hd:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cF()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.eP())return
return q.C(0,Math.sqrt(q.H(q)))},
hh:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.u(0,t)
u=new V.E(u.a,u.b,u.c)
q=u.C(0,Math.sqrt(u.H(u)))
u=r.u(0,t)
u=new V.E(u.a,u.b,u.c)
u=q.aI(u.C(0,Math.sqrt(u.H(u))))
return u.C(0,Math.sqrt(u.H(u)))},
cF:function(){if(this.d!=null)return!0
var u=this.hd()
if(u==null){u=this.hh()
if(u==null)return!1}this.d=u
this.a.a.a3()
return!0},
hc:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cF()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.eP())return
return q.C(0,Math.sqrt(q.H(q)))},
hg:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.D().a){u=m.u(0,p)
u=new V.E(u.a,u.b,u.c)
h=u.C(0,Math.sqrt(u.H(u)))
if(j.a-k.a<0)h=h.U(0)}else{g=(u-l.b)/i
u=m.u(0,p).t(0,g).n(0,p).u(0,s)
u=new V.E(u.a,u.b,u.c)
h=u.C(0,Math.sqrt(u.H(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.U(0)}u=this.d
if(u!=null){f=u.C(0,Math.sqrt(u.H(u)))
u=f.aI(h)
u=u.C(0,Math.sqrt(u.H(u))).aI(f)
h=u.C(0,Math.sqrt(u.H(u)))}return h},
cD:function(){if(this.e!=null)return!0
var u=this.hc()
if(u==null){u=this.hg()
if(u==null)return!1}this.e=u
this.a.a.a3()
return!0},
gjZ:function(a){if(J.O(this.a,this.b))return!0
if(J.O(this.b,this.c))return!0
if(J.O(this.c,this.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t
if(this.gb9())return a+"disposed"
u=a+C.c.ai(J.ao(this.a.e),0)+", "+C.c.ai(J.ao(this.b.e),0)+", "+C.c.ai(J.ao(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.G("")}}
F.eY.prototype={}
F.h3.prototype={
ba:function(a,b,c){var u,t
u=b.a
u.a.a.D()
u=u.e
t=c.a
t.a.a.D()
if(u==t.e){u=b.b
u.a.a.D()
u=u.e
t=c.b
t.a.a.D()
if(u==t.e){u=b.c
u.a.a.D()
u=u.e
t=c.c
t.a.a.D()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.D()
u=u.e
t=c.b
t.a.a.D()
if(u==t.e){u=b.b
u.a.a.D()
u=u.e
t=c.c
t.a.a.D()
if(u==t.e){u=b.c
u.a.a.D()
u=u.e
t=c.a
t.a.a.D()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.D()
u=u.e
t=c.c
t.a.a.D()
if(u==t.e){u=b.b
u.a.a.D()
u=u.e
t=c.a
t.a.a.D()
if(u==t.e){u=b.c
u.a.a.D()
u=u.e
t=c.b
t.a.a.D()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.b3.prototype={
b8:function(){if(!this.gb9()){C.a.M(this.a.a.c.b,this)
this.a.a.a3()}this.cq()
this.cr()},
cv:function(a){this.a=a
C.a.h(a.c.b,this)},
cw:function(a){this.b=a
C.a.h(a.c.c,this)},
cq:function(){var u=this.a
if(u!=null){C.a.M(u.c.b,this)
this.a=null}},
cr:function(){var u=this.b
if(u!=null){C.a.M(u.c.c,this)
this.b=null}},
gb9:function(){return this.a==null||this.b==null},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){if(this.gb9())return a+"disposed"
return a+C.c.ai(J.ao(this.a.e),0)+", "+C.c.ai(J.ao(this.b.e),0)},
P:function(){return this.G("")}}
F.ff.prototype={}
F.hl.prototype={
ba:function(a,b,c){var u,t
u=b.a
u.a.a.D()
u=u.e
t=c.a
t.a.a.D()
if(u==t.e){u=b.b
u.a.a.D()
u=u.e
t=c.b
t.a.a.D()
return u==t.e}else{u=b.a
u.a.a.D()
u=u.e
t=c.b
t.a.a.D()
if(u==t.e){u=b.b
u.a.a.D()
u=u.e
t=c.a
t.a.a.D()
return u==t.e}else return!1}}}
F.bm.prototype={
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ai(J.ao(u.e),0)},
P:function(){return this.G("")}}
F.dK.prototype={
gv:function(){var u=this.e
if(u==null){u=D.P()
this.e=u}return u},
bb:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.D()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){q=u[r]
this.a.h(0,q.k0())}this.a.D()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.D()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bm()
if(m.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.J(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.D()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.D()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.ma(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.D()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.D()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.D()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.c9(k,j,h)}u=this.e
if(u!=null)u.aj()},
ay:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.ay()||!1
if(!this.a.ay())t=!1
u=this.e
if(u!=null)u.aj()
return t},
kF:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.r(u,0)])
for(u=[F.aa];t.length!==0;){s=C.a.gkp(t)
C.a.l_(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.z)(t),++p){o=t[p]
if(o!=null&&a.ba(0,s,o)){C.a.h(r,o)
C.a.M(t,o)}}if(r.length>1)b.bb(r)}}this.a.D()
this.c.d6()
this.d.d6()
this.b.l0()
this.c.d7(new F.hl())
this.d.d7(new F.h3())
u=this.e
if(u!=null)u.aj()},
jL:function(a){this.kF(new F.hL(),new F.fG())},
cz:function(){return this.jL(null)},
cR:function(){var u,t,s,r,q,p
u=this.e
if(u!=null)++u.d
this.d.cR()
for(t=this.a.c.length-1;t>=0;--t){u=this.a.c
if(t>=u.length)return H.e(u,t)
s=u[t]
u=s.r
if(u!=null)s.seR(new V.E(-u.a,-u.b,-u.c))
u=s.x
if(u!=null){r=-u.a
q=-u.b
u=-u.c
p=new V.E(r,q,u).C(0,Math.sqrt(r*r+q*q+u*u))
if(!J.O(s.x,p)){s.x=p
u=s.a
if(u!=null){u=u.e
if(u!=null)u.J(null)}}}}u=this.e
if(u!=null)u.aj()},
jU:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.bb()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.ba().a)!==0)++r
if((s&$.b9().a)!==0)++r
if((s&$.bc().a)!==0)++r
if((s&$.bd().a)!==0)++r
if((s&$.cW().a)!==0)++r
if((s&$.cX().a)!==0)++r
if((s&$.c1().a)!==0)++r
if((s&$.b8().a)!==0)++r
q=a1.gdi(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.o
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.d3])
for(m=0,l=0;l<r;++l){k=a1.jP(l)
j=k.gdi(k)
C.a.q(n,l,new Z.d3(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].kD(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.q(o,g,h[f]);++g}}m+=j}H.h(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.ax(t,34962,e)
C.b.ec(t,34962,new Float32Array(H.bS(o)),35044)
C.b.ax(t,34962,null)
d=new Z.d4(new Z.e5(34962,e),n,a1)
d.shA(H.b([],[Z.bk]))
if(this.b.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)}a=Z.jF(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bk(0,c.length,a))}if(this.c.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.D()
C.a.h(c,b.e)}a=Z.jF(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bk(1,c.length,a))}if(this.d.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.D()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].c
b.a.a.D()
C.a.h(c,b.e)}a=Z.jF(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bk(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.G("   "))}return C.a.l(u,"\n")},
ac:function(a){var u=this.e
if(u!=null)u.J(a)},
a3:function(){return this.ac(null)},
$io_:1}
F.fX.prototype={
jH:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[F.aa],"$aa")
u=H.b([],[F.a2])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.e(a,p)
p=a[p]
if(q>=o)return H.e(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.c9(s,p,o))}}return u},
jI:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.h(c,"$ia",[F.aa],"$aa")
u=H.b([],[F.a2])
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
C.a.h(u,F.c9(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c9(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c9(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.c9(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
d7:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.k(0,q)
for(o=q-1;o>=0;--o){n=r.d.k(0,o)
if(a.ba(0,p,n)){p.b8()
break}}}}},
d6:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gjZ(s)
if(t)s.b8()}},
ay:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].cF())s=!1
return s},
cE:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].cD())s=!1
return s},
cR:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.E(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.E(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.J(null)}},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
P:function(){return this.G("")},
shs:function(a){this.b=H.h(a,"$ia",[F.a2],"$aa")}}
F.fY.prototype={
gm:function(a){return this.b.length},
d7:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.k(0,q)
for(o=q-1;o>=0;--o){n=r.c.k(0,o)
if(a.ba(0,p,n)){p.b8()
break}}}}},
d6:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.O(s.a,s.b)
if(t)s.b8()}},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].G(a+(""+s+". ")))}return C.a.l(u,"\n")},
P:function(){return this.G("")},
shC:function(a){this.b=H.h(a,"$ia",[F.b3],"$aa")}}
F.fZ.prototype={
gm:function(a){return this.b.length},
l0:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.M(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.J(null)}s=t.a
if(s!=null){C.a.M(s.b.b,t)
t.a=null}}}},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
P:function(){return this.G("")},
scn:function(a){this.b=H.h(a,"$ia",[F.bm],"$aa")}}
F.aa.prototype={
cI:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.e4(this.cx,s,p,u,t,r,q,a,o)},
k0:function(){return this.cI(null)},
sa2:function(a,b){var u
if(!J.O(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a3()}},
seR:function(a){var u
a=a==null?null:a.C(0,Math.sqrt(a.H(a)))
if(!J.O(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a3()}},
sf9:function(a){var u
if(!J.O(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a3()}},
se9:function(a){var u
if(!J.O(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a3()}},
kD:function(a){var u,t
if(a.A(0,$.bb())){u=this.f
t=[P.o]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.ba())){u=this.r
t=[P.o]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.b9())){u=this.x
t=[P.o]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.bc())){u=this.y
t=[P.o]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.A(0,$.bd())){u=this.z
t=[P.o]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.cW())){u=this.Q
t=[P.o]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.cX())){u=this.Q
t=[P.o]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.A(0,$.c1()))return H.b([this.ch],[P.o])
else if(a.A(0,$.b8())){u=this.cx
t=[P.o]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.o])},
cF:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cF()
this.d.a_(0,new F.hQ(u))
u=u.a
this.r=u.C(0,Math.sqrt(u.H(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.aj()}return!0},
cD:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cF()
this.d.a_(0,new F.hP(u))
u=u.a
this.x=u.C(0,Math.sqrt(u.H(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.aj()}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t,s
u=H.b([],[P.f])
C.a.h(u,C.c.ai(J.ao(this.e),0))
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
P:function(){return this.G("")}}
F.hQ.prototype={
$1:function(a){var u,t
H.d(a,"$ia2")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:6}
F.hP.prototype={
$1:function(a){var u,t
H.d(a,"$ia2")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:6}
F.hG.prototype={
D:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
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
jK:function(a,b,c,d,e,f,g,h,i){var u=F.e4(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
jJ:function(a,b,c,d,e,f){return this.jK(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
ay:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].cF()
return!0},
cE:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].cD()
return!0},
jV:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.C(0,Math.sqrt(p*p+o*o+n*n))
if(!J.O(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
this.D()
u=H.b([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
P:function(){return this.G("")},
sjj:function(a){this.c=H.h(a,"$ia",[F.aa],"$aa")}}
F.hH.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var u,t,s
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
a_:function(a,b){H.k(b,{func:1,ret:-1,args:[F.a2]})
C.a.a_(this.b,b)
C.a.a_(this.c,new F.hI(this,b))
C.a.a_(this.d,new F.hJ(this,b))},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
P:function(){return this.G("")},
sht:function(a){this.b=H.h(a,"$ia",[F.a2],"$aa")},
shu:function(a){this.c=H.h(a,"$ia",[F.a2],"$aa")},
shv:function(a){this.d=H.h(a,"$ia",[F.a2],"$aa")}}
F.hI.prototype={
$1:function(a){H.d(a,"$ia2")
if(!J.O(a.a,this.a))this.b.$1(a)},
$S:6}
F.hJ.prototype={
$1:function(a){var u
H.d(a,"$ia2")
u=this.a
if(!J.O(a.a,u)&&!J.O(a.b,u))this.b.$1(a)},
$S:6}
F.hK.prototype={
gm:function(a){return this.b.length+this.c.length},
k:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.e(u,s)
return u[s]}else{if(b<0)return H.e(u,b)
return u[b]}},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
P:function(){return this.G("")},
shD:function(a){this.b=H.h(a,"$ia",[F.b3],"$aa")},
shE:function(a){this.c=H.h(a,"$ia",[F.b3],"$aa")}}
F.hM.prototype={}
F.hL.prototype={
ba:function(a,b,c){return J.O(b.f,c.f)}}
F.hN.prototype={}
F.fG.prototype={
bb:function(a){var u,t,s,r
H.h(a,"$ia",[F.aa],"$aa")
u=V.cF()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.E(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.C(0,Math.sqrt(u.H(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s)a[s].seR(u)
return}}
F.hO.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
P:function(){return this.G("")},
scn:function(a){this.b=H.h(a,"$ia",[F.bm],"$aa")}}
O.du.prototype={
gv:function(){var u=this.dy
if(u==null){u=D.P()
this.dy=u}return u},
a1:function(a){var u
H.d(a,"$iy")
u=this.dy
if(u!=null)u.J(a)},
c3:function(){return this.a1(null)},
dT:function(a){H.d(a,"$iy")
this.a=null
this.a1(a)},
iP:function(){return this.dT(null)},
hQ:function(a,b){var u=V.ae
u=new D.bF(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.a1(u)},
hS:function(a,b){var u=V.ae
u=new D.bG(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.a1(u)},
dB:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.f.a6(u.e.length+3,4)*4
s=C.f.a6(u.f.length+3,4)*4
r=C.f.a6(u.r.length+3,4)*4
q=C.f.a6(u.x.length+3,4)*4
p=C.f.a6(u.y.length+3,4)*4
o=C.f.a6(u.z.length+3,4)*4
n=C.f.a6(this.e.a.length+3,4)*4
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
a2=u===C.i||m===C.i||l===C.i||k===C.i||j===C.i||i===C.i||h===C.i||g===C.i||f===C.i
a3=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.bb()
if(a0){b=$.ba()
a7=new Z.aV(a7.a|b.a)}if(a1){b=$.b9()
a7=new Z.aV(a7.a|b.a)}if(a2){b=$.bc()
a7=new Z.aV(a7.a|b.a)}if(a3){b=$.bd()
a7=new Z.aV(a7.a|b.a)}if(a5){b=$.b8()
a7=new Z.aV(a7.a|b.a)}return new A.fv(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
Z:function(a,b){H.h(a,"$ia",[T.ct],"$aa")
if(b!=null)if(!C.a.X(a,b)){b.a=a.length
C.a.h(a,b)}},
ap:function(a){var u,t,s
for(u=this.dx.a,u=new J.ap(u,u.length,0,[H.r(u,0)]);u.E();){t=u.d
t.toString
s=$.fy
if(s==null){s=new V.ae(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.fy=s}t.a=s
s=t.b
if(s!=null)t.a=s.aq(a,t)}},
l2:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.dB()
t=a4.fr.k(0,u.an)
if(t==null){t=A.mh(u,a4.a)
s=t.b
if(s.length===0)H.q(P.u("May not cache a shader with no name."))
if(a4.fr.br(s))H.q(P.u('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.q(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bw
u=a5.e
if(!(u instanceof Z.d4)){a5.e=null
u=null}if(u==null||!u.d.A(0,q)){u=r.r1
if(u)a5.d.ay()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cE()
o.a.cE()
o=o.e
if(o!=null)o.aj()}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.jV()
n=n.e
if(n!=null)n.aj()}l=a5.d.jU(new Z.hS(a4.a),q)
l.aW($.bb()).e=this.a.Q.c
if(u)l.aW($.ba()).e=this.a.cx.c
if(p)l.aW($.b9()).e=this.a.ch.c
if(r.rx)l.aW($.bc()).e=this.a.cy.c
if(o)l.aW($.bd()).e=this.a.db.c
if(r.x1)l.aW($.b8()).e=this.a.dx.c
a5.e=l}u=T.ct
k=H.b([],[u])
p=this.a
o=a4.a
C.b.fh(o,p.r)
p.x.kl()
if(r.fx){p=this.a
n=a4.dx.ga4()
p=p.dy
p.toString
p.ar(n.ak(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db.ga4().t(0,a4.dx.ga4())
a4.cx=n}p=p.fr
p.toString
p.ar(n.ak(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gkY().t(0,a4.dx.ga4())
a4.ch=n}p=p.fy
p.toString
p.ar(n.ak(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.ar(C.r.ak(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.ar(C.r.ak(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.ar(C.r.ak(n,!0))}if(r.aA>0){j=this.e.a.length
p=this.a.k4
C.b.T(p.a,p.d,j)
for(p=[P.o],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.e(m,i)
m=m[i]
n.toString
H.d(m,"$iae")
n=n.r1
if(i>=n.length)return H.e(n,i)
n=n[i]
h=new Float32Array(H.bS(H.h(m.ak(0,!0),"$ia",p,"$aa")))
C.b.ff(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.j:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.B(p.a,p.d,m,g,n)
break
case C.i:this.Z(k,this.f.d)
p=this.a
n=this.f.d
p.am(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
break
case C.h:this.Z(k,this.f.e)
p=this.a
n=this.f.e
p.af(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.d:break
case C.j:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.b.B(p.a,p.d,m,g,n)
break
case C.i:this.Z(k,this.r.d)
p=this.a
n=this.r.d
p.am(p.y1,p.aA,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
break
case C.h:this.Z(k,this.r.e)
p=this.a
n=this.r.e
p.af(p.y2,p.aA,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
break}switch(r.c){case C.d:break
case C.j:p=this.a
n=this.x.f
p=p.an
p.toString
m=n.a
g=n.b
n=n.c
C.b.B(p.a,p.d,m,g,n)
break
case C.i:this.Z(k,this.x.d)
p=this.a
n=this.x.d
p.am(p.bw,p.bx,n)
n=this.a
p=this.x.f
n=n.an
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
break
case C.h:this.Z(k,this.x.e)
p=this.a
n=this.x.e
p.af(p.ej,p.bx,n)
n=this.a
p=this.x.f
n=n.an
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
break}switch(r.d){case C.d:break
case C.j:p=this.a
n=this.y.f
p=p.by
p.toString
m=n.a
g=n.b
n=n.c
C.b.B(p.a,p.d,m,g,n)
break
case C.i:this.Z(k,this.y.d)
p=this.a
n=this.y.d
p.am(p.ek,p.bz,n)
n=this.a
p=this.y.f
n=n.by
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
break
case C.h:this.Z(k,this.y.e)
p=this.a
n=this.y.e
p.af(p.el,p.bz,n)
n=this.a
p=this.y.f
n=n.by
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
break}switch(r.e){case C.d:break
case C.j:p=this.a
n=this.z.f
p=p.bA
p.toString
m=n.a
g=n.b
n=n.c
C.b.B(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bC
C.b.S(n.a,n.d,g)
break
case C.i:this.Z(k,this.z.d)
p=this.a
n=this.z.d
p.am(p.em,p.bB,n)
n=this.a
p=this.z.f
n=n.bA
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bC
C.b.S(p.a,p.d,g)
break
case C.h:this.Z(k,this.z.e)
p=this.a
n=this.z.e
p.af(p.en,p.bB,n)
n=this.a
p=this.z.f
n=n.bA
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bC
C.b.S(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.ez
C.b.T(p.a,p.d,j)
f=a4.db.ga4()
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cL
if(e>=m.length)return H.e(m,e)
b=m[e]
m=f.fd(c.gbt(c))
g=m.a
a=m.b
a0=m.c
a0=m.C(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.B(a.a,a.d,g,m,a0)
a0=c.gaz(c)
m=b.c
C.b.B(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.eA
C.b.T(p.a,p.d,j)
f=a4.db.ga4()
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cM
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gbe(c)
g=b.b
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=f.bh(c.gbe(c))
g=b.c
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.gaz(c)
g=b.d
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.ge6()
g=b.e
C.b.S(g.a,g.d,m)
m=c.ge7()
g=b.f
C.b.S(g.a,g.d,m)
m=c.ge8()
g=b.r
C.b.S(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.eB
C.b.T(p.a,p.d,j)
f=a4.db.ga4()
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cN
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gbe(c)
g=b.b
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.gbt(c).lt()
g=b.c
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=f.bh(c.gbe(c))
g=b.d
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.gaz(c)
g=b.e
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.glr()
g=b.f
C.b.S(g.a,g.d,m)
m=c.glq()
g=b.r
C.b.S(g.a,g.d,m)
m=c.ge6()
g=b.x
C.b.S(g.a,g.d,m)
m=c.ge7()
g=b.y
C.b.S(g.a,g.d,m)
m=c.ge8()
g=b.z
C.b.S(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.eC
C.b.T(p.a,p.d,j)
f=a4.db.ga4()
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
g=this.a.cO
if(e>=g.length)return H.e(g,e)
b=g[e]
g=c.gda()
H.h(k,"$ia",m,"$aa")
if(!C.a.X(k,g)){g.a=k.length
C.a.h(k,g)}g=c.gbt(c)
a=b.d
C.b.B(a.a,a.d,g.a,g.b,g.c)
g=c.gbS()
a=b.b
C.b.B(a.a,a.d,g.a,g.b,g.c)
g=c.gbP(c)
a=b.c
C.b.B(a.a,a.d,g.a,g.b,g.c)
g=f.fd(c.gbt(c))
a=g.a
a0=g.b
a1=g.c
a1=g.C(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.B(a0.a,a0.d,a,g,a1)
a1=c.gaz(c)
g=b.f
C.b.B(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gda()
g=a1.gcY(a1)
if(!g){g=b.x
C.b.T(g.a,g.d,1)}else{g=b.r
a=a1.gcY(a1)
a0=g.a
g=g.d
if(!a)C.b.T(a0,g,0)
else C.b.T(a0,g,a1.gkw(a1))
g=b.x
C.b.T(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.eD
C.b.T(p.a,p.d,j)
f=a4.db.ga4()
for(p=this.dx.y,n=p.length,m=[P.o],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
a=this.a.cP
if(e>=a.length)return H.e(a,e)
b=a[e]
a=c.d
H.h(k,"$ia",g,"$aa")
if(a!=null)if(!C.a.X(k,a)){a.a=k.length
C.a.h(k,a)}a2=f.t(0,c.a)
a=c.a
a0=$.cm
if(a0==null){a0=new V.Y(0,0,0)
$.cm=a0}a0=a.bh(a0)
a=b.b
C.b.B(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cm
if(a==null){a=new V.Y(0,0,0)
$.cm=a}a=a2.bh(a)
a0=b.c
C.b.B(a0.a,a0.d,a.a,a.b,a.c)
a=a2.eO()
a0=b.d
h=new Float32Array(H.bS(H.h(new V.dv(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).ak(0,!0),"$ia",m,"$aa")))
C.b.fe(a0.a,a0.d,!1,h)
a0=c.c
a=b.e
C.b.B(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.d
a=a0!=null
if(!a||a0.d<6){a=b.r
C.b.T(a.a,a.d,1)}else{a1=b.f
a=!a||a0.d<6
a3=a1.a
a1=a1.d
if(a)C.b.T(a3,a1,0)
else C.b.T(a3,a1,a0.a)
a=b.r
C.b.T(a.a,a.d,0)}a=c.e
a0=b.x
C.b.S(a0.a,a0.d,a)
a=c.f
a0=b.y
C.b.S(a0.a,a0.d,a)
a=c.r
a0=b.z
C.b.S(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.eE
C.b.T(p.a,p.d,j)
f=a4.db.ga4()
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cQ
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gda()
H.h(k,"$ia",u,"$aa")
if(!C.a.X(k,m)){m.a=k.length
C.a.h(k,m)}m=c.gbe(c)
g=b.b
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.gbt(c)
g=b.c
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.gbS()
g=b.d
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.gbP(c)
g=b.e
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=f.bh(c.gbe(c))
g=b.f
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.gda()
g=m.gcY(m)
if(!g){m=b.x
C.b.T(m.a,m.d,1)}else{g=b.r
a=m.gcY(m)
a0=g.a
g=g.d
if(!a)C.b.T(a0,g,0)
else C.b.T(a0,g,m.gkw(m))
m=b.x
C.b.T(m.a,m.d,0)}m=c.gaz(c)
g=b.y
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.glu()
g=b.z
C.b.S(g.a,g.d,m)
m=c.glv()
g=b.Q
C.b.S(g.a,g.d,m)
m=c.ge6()
g=b.ch
C.b.S(g.a,g.d,m)
m=c.ge7()
g=b.cx
C.b.S(g.a,g.d,m)
m=c.ge8()
g=b.cy
C.b.S(g.a,g.d,m);++e}}}switch(r.f){case C.d:break
case C.j:break
case C.i:this.Z(k,this.Q.d)
u=this.a
p=this.Q.d
u.am(u.eo,u.bD,p)
break
case C.h:this.Z(k,this.Q.e)
u=this.a
p=this.Q.e
u.af(u.ep,u.bD,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db.ga4().eO()
a4.Q=p}u=u.id
u.toString
u.ar(p.ak(0,!0))}if(r.dy){this.Z(k,this.ch)
u=this.a
p=this.ch
u.af(u.eq,u.er,p)
switch(r.r){case C.d:break
case C.j:u=this.a
p=this.cx.f
u=u.bE
u.toString
n=p.a
m=p.b
p=p.c
C.b.B(u.a,u.d,n,m,p)
break
case C.i:this.Z(k,this.cx.d)
u=this.a
p=this.cx.d
u.am(u.es,u.bF,p)
p=this.a
u=this.cx.f
p=p.bE
p.toString
n=u.a
m=u.b
u=u.c
C.b.B(p.a,p.d,n,m,u)
break
case C.h:this.Z(k,this.cx.e)
u=this.a
p=this.cx.e
u.af(u.eu,u.bF,p)
p=this.a
u=this.cx.f
p=p.bE
p.toString
n=u.a
m=u.b
u=u.c
C.b.B(p.a,p.d,n,m,u)
break}switch(r.x){case C.d:break
case C.j:u=this.a
p=this.cy.f
u=u.bH
u.toString
n=p.a
m=p.b
p=p.c
C.b.B(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bG
C.b.S(p.a,p.d,m)
break
case C.i:this.Z(k,this.cy.d)
u=this.a
p=this.cy.d
u.am(u.ev,u.bI,p)
p=this.a
u=this.cy.f
p=p.bH
p.toString
n=u.a
m=u.b
u=u.c
C.b.B(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bG
C.b.S(u.a,u.d,m)
break
case C.h:this.Z(k,this.cy.e)
u=this.a
p=this.cy.e
u.af(u.ew,u.bI,p)
p=this.a
u=this.cy.f
p=p.bH
p.toString
n=u.a
m=u.b
u=u.c
C.b.B(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bG
C.b.S(u.a,u.d,m)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.j:u=this.a
n=this.db.f
u=u.bJ
C.b.S(u.a,u.d,n)
break
case C.i:this.Z(k,this.db.d)
u=this.a
n=this.db.d
u.am(u.ex,u.bK,n)
n=this.a
u=this.db.f
n=n.bJ
C.b.S(n.a,n.d,u)
break
case C.h:this.Z(k,this.db.e)
u=this.a
n=this.db.e
u.af(u.ey,u.bK,n)
n=this.a
u=this.db.f
n=n.bJ
C.b.S(n.a,n.d,u)
break}C.b.cK(o,3042)
C.b.jT(o,770,771)}for(i=0;i<k.length;++i){u=k[i]
if(!u.c&&u.d>=6){u.c=!0
C.b.e0(o,33984+u.a)
C.b.aU(o,34067,u.b)}}u=a5.e
u.cA(a4)
u.aY(a4)
u.lh(a4)
if(p)C.b.kg(o,3042)
for(i=0;i<k.length;++i){u=k[i]
if(u.c){u.c=!1
C.b.e0(o,33984+u.a)
C.b.aU(o,34067,null)}}u=this.a
u.toString
C.b.fh(o,null)
u.x.kh()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dB().an},
shf:function(a){this.e=H.h(a,"$iZ",[V.ae],"$aZ")}}
O.ft.prototype={}
O.cf.prototype={
a1:function(a){this.a.a1(H.d(a,"$iy"))},
c3:function(){return this.a1(null)},
aG:function(){},
iV:function(a){},
iW:function(a){var u,t
u=this.e
if(u!=a){if(u!=null)u.gv().M(0,this.gbm())
t=this.e
this.e=a
if(a!=null)a.gv().h(0,this.gbm())
u=new D.C(this.b+".textureCube",t,this.e,this,[T.cu])
u.b=!0
this.a.a1(u)}}}
O.fu.prototype={}
O.aP.prototype={
dV:function(a){var u,t
if(!J.O(this.f,a)){u=this.f
this.f=a
t=new D.C(this.b+".color",u,a,this,[V.a_])
t.b=!0
this.a.a1(t)}},
aG:function(){this.fK()
this.dV(new V.a_(1,1,1))},
saz:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aG()
u=this.a
u.a=null
u.a1(null)}this.dV(b)}}
O.fw.prototype={
iU:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.D().a)){this.ch=a
u=new D.C(this.b+".refraction",u,a,this,[P.o])
u.b=!0
this.a.a1(u)}},
aG:function(){this.c0()
this.iU(1)}}
O.fx.prototype={
cs:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.D().a)){this.ch=a
u=new D.C(this.b+".shininess",u,a,this,[P.o])
u.b=!0
this.a.a1(u)}},
aG:function(){this.c0()
this.cs(100)}}
O.bo.prototype={}
T.ct.prototype={}
T.cu.prototype={
gv:function(){var u=this.e
if(u==null){u=D.P()
this.e=u}return u}}
T.hb.prototype={
aP:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.m
W.a4(u,"load",H.k(new T.hc(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
iQ:function(a,b,c){var u,t,s,r
b=V.jW(b,2)
u=V.jW(a.width,2)
t=V.jW(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jo(null,null)
s.width=u
s.height=t
r=H.d(C.q.fo(s,"2d"),"$ibx")
r.imageSmoothingEnabled=!1;(r&&C.D).kj(r,a,0,0,s.width,s.height)
return P.nq(C.D.hz(r,0,0,s.width,s.height))}}}
T.hc.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.iQ(this.b,u.c,this.c)
s=u.a
C.b.aU(s,34067,this.d)
C.b.kX(s,37440,this.e?1:0)
C.b.la(s,this.f,0,6408,6408,5121,t)
C.b.aU(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.kk()}++u.e},
$S:11}
V.aY.prototype={
aJ:function(a){return!0},
i:function(a){return"all"},
$iat:1}
V.at.prototype={}
V.dt.prototype={
aJ:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)if(u[s].aJ(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa7:function(a){this.a=H.h(a,"$ia",[V.at],"$aa")},
$iat:1}
V.aq.prototype={
aJ:function(a){return!this.fJ(a)},
i:function(a){return"!["+this.dj(0)+"]"}}
V.fO.prototype={
aJ:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.bM(this.a)
t=H.bM(this.b)
return u+".."+t},
$iat:1}
V.fW.prototype={
fP:function(a){var u,t
if(a.a.length<=0)throw H.c(P.u("May not create a SetMatcher with zero characters."))
u=new H.aH([P.l,P.N])
for(t=new H.ce(a,a.gm(a),0,[H.ab(a,"T",0)]);t.E();)u.q(0,t.d,!0)
this.siT(u)},
aJ:function(a){return this.a.br(a)},
i:function(a){return P.dN(this.a.gaB(),0,null)},
siT:function(a){this.a=H.h(a,"$iH",[P.l,P.N],"$aH")},
$iat:1}
V.cq.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cw(this.a.j(0,b))
r.sa7(H.b([],[V.at]))
r.c=!1
C.a.h(this.c,r)
return r},
ko:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.aJ(a))return r}return},
i:function(a){return this.b},
sje:function(a){this.c=H.h(a,"$ia",[V.cw],"$aa")}}
V.dV.prototype={
i:function(a){var u,t
u=H.jY(this.b,"\n","\\n")
t=H.jY(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cv.prototype={
aK:function(a,b,c){var u,t,s
H.h(c,"$ia",[P.f],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.z)(c),++t){s=c[t]
this.c.q(0,s,b)}},
i:function(a){return this.b},
siK:function(a){var u=P.f
this.c=H.h(a,"$iH",[u,u],"$aH")}}
V.he.prototype={
j:function(a,b){var u=this.a.k(0,b)
if(u==null){u=new V.cq(this,b)
u.sje(H.b([],[V.cw]))
u.d=null
this.a.q(0,b,u)}return u},
R:function(a){var u,t
u=this.b.k(0,a)
if(u==null){u=new V.cv(this,a)
t=P.f
u.siK(new H.aH([t,t]))
this.b.q(0,a,u)}return u},
fc:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dV])
t=this.c
s=[P.l]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.I(a,o)
m=t.ko(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dN(r,0,null)
throw H.c(P.u("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dN(r,0,null)
k=t.d
j=k.c.k(0,l)
p=new V.dV(j==null?k.b:j,l,o)}++o}}},
sj3:function(a){this.a=H.h(a,"$iH",[P.f,V.cq],"$aH")},
sj7:function(a){this.b=H.h(a,"$iH",[P.f,V.cv],"$aH")}}
V.cw.prototype={
i:function(a){return this.b.b+": "+this.dj(0)}}
X.d6.prototype={$ib5:1}
X.f3.prototype={
gv:function(){var u=this.x
if(u==null){u=D.P()
this.x=u}return u}}
X.dC.prototype={
gv:function(){var u=this.f
if(u==null){u=D.P()
this.f=u}return u},
aN:function(a){var u
H.d(a,"$iy")
u=this.f
if(u!=null)u.J(a)},
h8:function(){return this.aN(null)},
saX:function(a){var u,t
if(!J.O(this.b,a)){u=this.b
if(u!=null)u.gv().M(0,this.gdn())
t=this.b
this.b=a
if(a!=null)a.gv().h(0,this.gdn())
u=new D.C("mover",t,this.b,this,[U.a6])
u.b=!0
this.aN(u)}},
$ib5:1,
$id6:1}
X.dQ.prototype={}
V.bg.prototype={
bl:function(a){this.b=new P.f6(C.Y)
this.c=null
this.scb(H.b([],[[P.a,W.ax]]))},
O:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.ax]))
t=a.split("\n")
for(u=t.length,s=[W.ax],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.G(p)
n=this.b.hk(p,0,p.length)
m=n==null?p:n
C.k.fA(o,H.jY(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaC(this.d),o)}},
f_:function(a){var u,t,s,r
H.h(a,"$ia",[P.f],"$aa")
this.scb(H.b([],[[P.a,W.ax]]))
u=C.a.l(a,"\n")
t=this.c
if(t==null){t=this.bs()
this.c=t}for(t=t.fc(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)this.bO(t[r])},
scb:function(a){this.d=H.h(a,"$ia",[[P.a,W.ax]],"$aa")}}
V.je.prototype={
$1:function(a){H.d(a,"$iaT")
P.jX(C.e.fb(this.a.gku(),2)+" fps")},
$S:50}
V.eN.prototype={
bO:function(a){switch(a.a){case"Class":this.O(a.b,"#551")
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
bs:function(){var u,t,s,r
u=V.hf()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
s=V.U("a","z")
C.a.h(t.a,s)
s=V.U("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=V.U("0","9")
C.a.h(s.a,t)
t=V.U("a","z")
C.a.h(s.a,t)
t=V.U("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.U("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.U("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.v(new H.t("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.U("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.U("0","9")
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
s=new V.aq()
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
s=new V.aq()
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
s.d=s.a.R("Num")
s=u.j(0,"Float")
s.d=s.a.R("Num")
s=u.j(0,"Sym")
s.d=s.a.R("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.R("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.R("String")
s=u.j(0,"EndComment")
s.d=s.a.R("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.R("Whitespace")
s=u.j(0,"Id")
t=s.a.R("Id")
s.d=t
s=[P.f]
t.aK(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aK(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aK(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.f4.prototype={
bO:function(a){switch(a.a){case"Builtin":this.O(a.b,"#411")
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
bs:function(){var u,t,s,r
u=V.hf()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
s=V.U("a","z")
C.a.h(t.a,s)
s=V.U("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=V.U("0","9")
C.a.h(s.a,t)
t=V.U("a","z")
C.a.h(s.a,t)
t=V.U("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.U("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.U("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.v(new H.t("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.U("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.U("0","9")
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
s=new V.aq()
r=[V.at]
s.sa7(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Preprocess")
s=V.v(new H.t("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"Preprocess")
t=new V.aq()
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
t.d=t.a.R("Num")
t=u.j(0,"Float")
t.d=t.a.R("Num")
t=u.j(0,"Sym")
t.d=t.a.R("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.R("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.R("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.R("Whitespace")
t=u.j(0,"Id")
s=t.a.R("Id")
t.d=s
t=[P.f]
s.aK(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aK(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aK(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.f5.prototype={
bO:function(a){switch(a.a){case"Attr":this.O(a.b,"#911")
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
bs:function(){var u,t,s
u=V.hf()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
s=V.U("a","z")
C.a.h(t.a,s)
s=V.U("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=V.U("0","9")
C.a.h(s.a,t)
t=V.U("a","z")
C.a.h(s.a,t)
t=V.U("A","Z")
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
s=new V.aq()
s.sa7(H.b([],[V.at]))
C.a.h(t.a,s)
t=V.v(new H.t('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.U("a","z")
C.a.h(s.a,t)
t=V.U("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.R("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.R("String")
t=u.j(0,"Id")
s=t.a.R("Id")
t.d=s
s.aK(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
s=u.j(0,"Attr")
s.d=s.a.R("Attr")
s=u.j(0,"Other")
s.d=s.a.R("Other")
return u}}
V.fK.prototype={
f_:function(a){H.h(a,"$ia",[P.f],"$aa")
this.scb(H.b([],[[P.a,W.ax]]))
this.O(C.a.l(a,"\n"),"#111")},
bO:function(a){},
bs:function(){return}}
V.fM.prototype={
e1:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.k(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.kE().gd4().k(0,H.j(u))
if(t==null)if(d){c.$0()
this.dZ(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.k4(this.c).h(0,q)
o=W.m4("radio")
o.checked=s
o.name=u
u=W.m
W.a4(o,"change",H.k(new V.fN(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.G.F(q,o)
n=r.createElement("span")
n.textContent=b
C.G.F(q,n)
J.k4(this.c).h(0,r.createElement("br"))},
b5:function(a,b,c){return this.e1(a,b,c,!1)},
dZ:function(a){var u,t,s,r,q
u=P.kE()
t=P.f
s=P.md(u.gd4(),t,t)
s.q(0,this.a,a)
r=u.f5(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.X).iM(t,new P.it([],[]).dc(""),"",q)}}
V.fN.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dZ(this.d)}},
$S:11}
V.h_.prototype={
fR:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.p).F(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.p.F(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.F(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.F(q,p)}o=u.createElement("div")
this.a=o
C.k.F(q,o)
this.b=null
o=W.m
W.a4(u,"scroll",H.k(new V.h1(s),{func:1,ret:-1,args:[o]}),!1,o)},
e3:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[P.f],"$aa")
this.iZ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.fc(C.a.kB(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.F(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.F(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.F(t,o)
break
case"Link":n=p.b
if(H.nQ(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.G(m[1])
l.textContent=H.G(m[0])
C.k.F(t,l)}else{k=P.eo(C.J,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.j(k)
l.textContent=n
C.k.F(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.F(t,o)
break}}C.k.F(this.a,t)},
fn:function(a){var u,t,s,r
u=new V.eN("dart")
u.bl("dart")
t=new V.f4("glsl")
t.bl("glsl")
s=new V.f5("html")
s.bl("html")
r=C.a.kq(H.b([u,t,s],[V.bg]),new V.h2(a))
if(r!=null)return r
u=new V.fK("plain")
u.bl("plain")
return u},
e2:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a7,"$ia",[P.f],"$aa")
u=H.b([],[P.l])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.cU(r).a5(r,"+")){C.a.q(a7,s,C.c.as(r,1))
C.a.h(u,1)
t=!0}else if(C.c.a5(r,"-")){C.a.q(a7,s,C.c.as(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fn(a5)
q.f_(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.F(o,n)
C.k.F(this.a,o)
m=P.eo(C.J,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.k6(null)
i.href="#"+H.j(m)
i.textContent=a4
C.k.F(j,i)
C.x.F(k,j)
C.n.F(l,k)
C.o.F(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.e(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.z)(r),++a0)C.x.F(a,r[a0])
C.n.F(e,d)
C.n.F(e,c)
C.n.F(e,a)
C.o.F(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.z)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gV(r);a3.E();)C.x.F(c,a3.gN())
C.n.F(e,d)
C.n.F(e,c)
C.o.F(n,e)}},
jG:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[P.f],"$aa")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.F(this.a,t)
r=C.o.hB(t,-1)
s=H.d((r&&C.n).dJ(r,-1),"$iaS").style
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
o=H.d(C.n.dJ(r,-1),"$iaS")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.x).F(o,p)}},
iZ:function(){var u,t,s,r
if(this.b!=null)return
u=V.hf()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Bold")
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").l(0,"Bold")
s=new V.aq()
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
s=new V.aq()
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
s=new V.aq()
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
t=new V.aq()
t.sa7(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").l(0,"LinkEnd")
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").l(0,"LinkTail")
t=new V.aq()
t.sa7(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.aY())
s=u.j(0,"Other").l(0,"Other")
t=new V.aq()
t.sa7(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.R("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.R("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.R("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.R("Link")
s=u.j(0,"Other")
s.d=s.a.R("Other")
this.b=u}}
V.h1.prototype={
$1:function(a){P.kA(C.y,new V.h0(this.a))},
$S:11}
V.h0.prototype={
$0:function(){var u,t,s
u=C.e.ao(document.documentElement.scrollTop)
t=this.a.style
s=H.j(-0.01*u)+"px"
t.top=s},
$S:0}
V.h2.prototype={
$1:function(a){return H.d(a,"$ibg").a===this.a},
$S:51}
T.j5.prototype={
$0:function(){this.a.sad(0,F.jR(1,null,null,1))},
$S:0}
T.j6.prototype={
$0:function(){this.a.sad(0,F.l7(1,!0,!0,1,40,1))},
$S:0}
T.j7.prototype={
$0:function(){this.a.sad(0,F.l7(1,!0,!1,1,40,0))},
$S:0}
T.j8.prototype={
$0:function(){this.a.sad(0,F.lj(6,null,1,6))},
$S:0}
T.j9.prototype={
$0:function(){this.a.sad(0,F.ll(30,1,15,0.5))},
$S:0}
T.ja.prototype={
$0:function(){this.a.sad(0,F.nH(120,1,2,12,0.3,3))},
$S:0}
T.jb.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iy")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.e2("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.e2("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))},
$S:9};(function aliases(){var u=J.a8.prototype
u.fG=u.i
u=J.dl.prototype
u.fI=u.i
u=P.n.prototype
u.fH=u.bT
u=W.Q.prototype
u.c_=u.ag
u=W.eh.prototype
u.fL=u.aw
u=O.cf.prototype
u.fK=u.aG
u=O.aP.prototype
u.c0=u.aG
u=V.dt.prototype
u.fJ=u.aJ
u.dj=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"nk","mO",10)
u(P,"nl","mP",10)
u(P,"nm","mQ",10)
t(P,"l6","nj",3)
s(W,"nA",4,null,["$4"],["mS"],19,0)
s(W,"nB",4,null,["$4"],["mT"],19,0)
var m
r(m=E.aj.prototype,"geW",0,0,null,["$1","$0"],["eX","kN"],1,0)
r(m,"geY",0,0,null,["$1","$0"],["eZ","kO"],1,0)
r(m,"geU",0,0,null,["$1","$0"],["eV","kM"],1,0)
r(m,"geS",0,0,null,["$1","$0"],["eT","kJ"],1,0)
q(m,"gkH","kI",5)
q(m,"gkK","kL",5)
r(m=E.dU.prototype,"gdk",0,0,null,["$1","$0"],["dm","dl"],1,0)
p(m,"gl4","f6",3)
o(m=X.e0.prototype,"gi4","i5",13)
o(m,"ghT","hU",13)
o(m,"ghZ","i_",4)
o(m,"gi8","i9",26)
o(m,"gi6","i7",26)
o(m,"gic","ie",4)
o(m,"gii","ij",4)
o(m,"gi2","i3",4)
o(m,"gig","ih",4)
o(m,"gi0","i1",4)
o(m,"gik","il",36)
o(m,"gim","io",13)
o(m,"giA","iB",12)
o(m,"giw","ix",12)
o(m,"giy","iz",12)
r(m=D.dp.prototype,"gdO",0,0,null,["$1","$0"],["dP","ia"],1,0)
o(m,"giq","ir",38)
q(m,"ghN","hO",16)
q(m,"giu","iv",16)
r(D.bp.prototype,"gc2",0,0,null,["$1","$0"],["aa","fX"],1,0)
n(V.R.prototype,"gm","cW",15)
n(V.E.prototype,"gm","cW",15)
r(m=U.cb.prototype,"gaQ",0,0,null,["$1","$0"],["K","a8"],1,0)
q(m,"gh2","h3",29)
q(m,"gis","it",29)
r(m=U.e1.prototype,"gaQ",0,0,null,["$1","$0"],["K","a8"],1,0)
o(m,"gce","cf",2)
o(m,"gcg","ci",2)
o(m,"gcj","ck",2)
r(m=U.e2.prototype,"gaQ",0,0,null,["$1","$0"],["K","a8"],1,0)
o(m,"gce","cf",2)
o(m,"gcg","ci",2)
o(m,"gcj","ck",2)
o(m,"ghG","hH",2)
o(m,"ghI","hJ",2)
o(m,"gjc","jd",2)
o(m,"gja","jb",2)
o(m,"gj8","j9",2)
o(U.e3.prototype,"ghK","hL",2)
r(m=M.dc.prototype,"gat",0,0,null,["$1","$0"],["aD","h4"],1,0)
q(m,"ghV","hW",5)
q(m,"ghX","hY",5)
r(m=O.du.prototype,"gbm",0,0,null,["$1","$0"],["a1","c3"],1,0)
r(m,"giO",0,0,null,["$1","$0"],["dT","iP"],1,0)
q(m,"ghP","hQ",18)
q(m,"ghR","hS",18)
r(O.cf.prototype,"gbm",0,0,null,["$1","$0"],["a1","c3"],1,0)
r(X.dC.prototype,"gdn",0,0,null,["$1","$0"],["aN","h8"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.jw,J.a8,J.ap,P.ed,P.n,H.ce,P.aN,H.bC,H.cE,H.eJ,H.fP,H.hi,P.bi,H.c5,H.ei,P.bI,H.fg,H.fi,H.fc,P.ej,P.aX,P.aA,P.e6,P.h5,P.cr,P.h6,P.aT,P.ah,P.iJ,P.io,P.bQ,P.ec,P.T,P.iA,P.fo,P.by,P.f7,P.iH,P.iF,P.N,P.ai,P.ag,P.aM,P.fI,P.dM,P.e9,P.f2,P.bj,P.a,P.H,P.F,P.ar,P.f,P.af,P.bR,P.hy,P.ir,W.eL,W.bs,W.as,W.dA,W.eh,W.iv,W.dd,W.av,W.im,W.ep,P.is,P.em,P.ih,P.M,O.Z,O.cg,E.eC,E.aj,E.fQ,E.dU,Z.e5,Z.hS,Z.d4,Z.bk,Z.aV,D.eF,D.bA,D.y,X.d5,X.dm,X.fe,X.fl,X.au,X.fz,X.hg,X.e0,D.d9,D.a1,D.dD,D.dL,D.dS,D.bp,D.dT,V.a_,V.aE,V.eU,V.dv,V.ae,V.a3,V.Y,V.aR,V.dH,V.R,V.E,U.e1,U.e2,U.e3,M.dc,A.d1,A.ez,A.fv,A.cx,A.cB,A.cz,A.cC,A.cA,A.cD,A.bz,A.dX,A.hs,F.a2,F.eY,F.b3,F.ff,F.bm,F.dK,F.fX,F.fY,F.fZ,F.aa,F.hG,F.hH,F.hK,F.hM,F.hN,F.hO,O.bo,O.cf,T.hb,V.aY,V.at,V.dt,V.fO,V.fW,V.cq,V.dV,V.cv,V.he,X.d6,X.dQ,X.dC,V.bg,V.fM,V.h_])
s(J.a8,[J.fb,J.dk,J.dl,J.aF,J.bl,J.b1,H.bJ,W.bB,W.bx,W.e7,W.eO,W.da,W.db,W.m,W.dg,W.ea,W.b0,W.dr,W.ef,W.dF,W.aI,W.ek,W.eq,P.d2,P.de,P.dE,P.bO,P.dJ,P.dR,P.dY])
s(J.dl,[J.fJ,J.br,J.b2])
t(J.jv,J.aF)
s(J.bl,[J.dj,J.di])
t(P.fk,P.ed)
s(P.fk,[H.dZ,W.hZ,W.am,P.eZ])
t(H.t,H.dZ)
s(P.n,[H.eR,H.fp,H.cG])
s(H.eR,[H.bH,H.fh])
s(P.aN,[H.fq,H.hT])
t(H.fr,H.bH)
t(H.eK,H.eJ)
s(P.bi,[H.fH,H.fd,H.hw,H.hk,H.eE,H.fU,P.dB,P.aD,P.hx,P.hu,P.bP,P.eH,P.eM])
s(H.c5,[H.ji,H.ha,H.j0,H.j1,H.j2,P.hV,P.hU,P.hW,P.hX,P.iz,P.iy,P.i4,P.i8,P.i5,P.i6,P.i7,P.ib,P.ic,P.ia,P.i9,P.h7,P.h8,P.iR,P.ik,P.ij,P.il,P.fj,P.fn,P.iG,P.eP,P.eQ,P.hC,P.hz,P.hA,P.hB,P.iB,P.iC,P.iE,P.iD,P.iN,P.iM,P.iO,P.iP,W.eS,W.i3,W.fF,W.fE,W.ip,W.iq,W.ix,W.iI,P.iu,P.iT,P.f_,P.f0,E.fR,E.fS,E.fT,E.hd,D.eW,D.eX,F.iK,F.iU,F.iW,F.iX,F.iY,F.jf,F.jg,F.jh,F.j4,F.iV,F.hQ,F.hP,F.hI,F.hJ,T.hc,V.je,V.fN,V.h1,V.h0,V.h2,T.j5,T.j6,T.j7,T.j8,T.j9,T.ja,T.jb])
s(H.ha,[H.h4,H.c3])
t(P.fm,P.bI)
s(P.fm,[H.aH,W.hY])
t(H.dw,H.bJ)
s(H.dw,[H.cK,H.cM])
t(H.cL,H.cK)
t(H.dx,H.cL)
t(H.cN,H.cM)
t(H.dy,H.cN)
s(H.dy,[H.fA,H.fB,H.fC,H.fD,H.dz,H.ck])
t(P.ii,P.iJ)
t(P.ig,P.io)
t(P.en,P.fo)
t(P.e_,P.en)
s(P.by,[P.eA,P.eT])
t(P.bh,P.h6)
s(P.bh,[P.eB,P.f6,P.hF,P.hE])
t(P.hD,P.eT)
s(P.ag,[P.o,P.l])
s(P.aD,[P.bN,P.f8])
t(P.i_,P.bR)
s(W.bB,[W.B,W.cH])
s(W.B,[W.Q,W.bf,W.c7,W.cI])
s(W.Q,[W.w,P.p])
s(W.w,[W.d_,W.ey,W.c2,W.be,W.bw,W.ax,W.f1,W.df,W.cc,W.cd,W.dn,W.ci,W.fV,W.aS,W.dO,W.dP,W.h9,W.cs])
t(W.c6,W.e7)
t(W.eb,W.ea)
t(W.bD,W.eb)
t(W.dh,W.c7)
t(W.bq,W.m)
s(W.bq,[W.aO,W.a9,W.aJ])
t(W.eg,W.ef)
t(W.cl,W.eg)
t(W.el,W.ek)
t(W.hh,W.el)
t(W.hR,W.ci)
t(W.aW,W.a9)
t(W.e8,W.db)
t(W.er,W.eq)
t(W.ee,W.er)
t(W.i0,W.hY)
t(W.i1,P.h5)
t(W.jG,W.i1)
t(W.i2,P.cr)
t(W.iw,W.eh)
t(P.it,P.is)
t(P.ay,P.ih)
t(P.co,P.p)
s(E.eC,[Z.d3,A.cp,T.ct])
s(D.y,[D.bF,D.bG,D.C,X.fL])
s(X.fL,[X.ds,X.b4,X.cj,X.dW])
s(O.Z,[D.dp,U.cb])
s(D.eF,[U.eG,U.a6])
s(U.a6,[U.d7,U.dI])
t(A.fs,A.cp)
s(A.dX,[A.J,A.ho,A.hp,A.hr,A.hm,A.W,A.hn,A.I,A.hq,A.ht,A.cy,A.aw,A.ak,A.al])
t(F.h3,F.eY)
t(F.hl,F.ff)
t(F.hL,F.hM)
t(F.fG,F.hN)
t(O.du,O.bo)
s(O.cf,[O.ft,O.fu,O.aP])
s(O.aP,[O.fw,O.fx])
t(T.cu,T.ct)
s(V.dt,[V.aq,V.cw])
t(X.f3,X.dQ)
s(V.bg,[V.eN,V.f4,V.f5,V.fK])
u(H.dZ,H.cE)
u(H.cK,P.T)
u(H.cL,H.bC)
u(H.cM,P.T)
u(H.cN,H.bC)
u(P.ed,P.T)
u(P.en,P.iA)
u(W.e7,W.eL)
u(W.ea,P.T)
u(W.eb,W.as)
u(W.ef,P.T)
u(W.eg,W.as)
u(W.ek,P.T)
u(W.el,W.as)
u(W.eq,P.T)
u(W.er,W.as)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.be.prototype
C.q=W.bw.prototype
C.D=W.bx.prototype
C.k=W.ax.prototype
C.U=W.da.prototype
C.W=W.df.prototype
C.X=W.dg.prototype
C.z=W.dh.prototype
C.Z=J.a8.prototype
C.a=J.aF.prototype
C.a_=J.di.prototype
C.f=J.dj.prototype
C.r=J.dk.prototype
C.e=J.bl.prototype
C.c=J.b1.prototype
C.a6=J.b2.prototype
C.G=W.dn.prototype
C.ac=W.cl.prototype
C.M=J.fJ.prototype
C.N=W.dF.prototype
C.b=P.bO.prototype
C.x=W.aS.prototype
C.o=W.dO.prototype
C.n=W.dP.prototype
C.C=J.br.prototype
C.O=W.aW.prototype
C.P=W.cH.prototype
C.R=new P.eB(!1)
C.Q=new P.eA(C.R)
C.S=new P.fI()
C.T=new P.hF()
C.l=new P.ii()
C.d=new A.bz(0,"ColorSourceType.None")
C.j=new A.bz(1,"ColorSourceType.Solid")
C.i=new A.bz(2,"ColorSourceType.Texture2D")
C.h=new A.bz(3,"ColorSourceType.TextureCube")
C.y=new P.aM(0)
C.V=new P.aM(5e6)
C.Y=new P.f7("element",!0,!1,!1,!1)
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
C.t=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.a7=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.u=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.v=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.a8=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.I=H.b(u([]),[P.f])
C.a9=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.J=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.w=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.K=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.aa=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.L=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.A=H.b(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.B=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.ab=new H.eK(0,{},C.I,[P.f,P.f])
C.m=new P.hD(!1)})();(function staticFields(){$.aL=0
$.c4=null
$.k8=null
$.jK=!1
$.lc=null
$.l4=null
$.li=null
$.iZ=null
$.j3=null
$.jU=null
$.bT=null
$.cR=null
$.cS=null
$.jL=!1
$.V=C.l
$.b_=null
$.jr=null
$.ke=null
$.kd=null
$.fy=null
$.kr=null
$.cm=null
$.kv=null
$.kH=null
$.kM=null
$.kJ=null
$.kK=null
$.kL=null
$.kI=null
$.kq=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nW","ln",function(){return H.lb("_$dart_dartClosure")})
u($,"nX","k_",function(){return H.lb("_$dart_js")})
u($,"o2","lo",function(){return H.aU(H.hj({
toString:function(){return"$receiver$"}}))})
u($,"o3","lp",function(){return H.aU(H.hj({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"o4","lq",function(){return H.aU(H.hj(null))})
u($,"o5","lr",function(){return H.aU(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o8","lu",function(){return H.aU(H.hj(void 0))})
u($,"o9","lv",function(){return H.aU(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o7","lt",function(){return H.aU(H.kC(null))})
u($,"o6","ls",function(){return H.aU(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"ob","lx",function(){return H.aU(H.kC(void 0))})
u($,"oa","lw",function(){return H.aU(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"os","k0",function(){return P.mN()})
u($,"oy","cY",function(){return[]})
u($,"oe","ly",function(){return P.mK()})
u($,"ot","lC",function(){return H.mi(H.bS(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"ow","lE",function(){return P.my("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"ox","lF",function(){return P.nb()})
u($,"ou","lD",function(){return P.ki(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"ov","k1",function(){return P.kh(P.f,P.bj)})
u($,"ol","lB",function(){return Z.az(0)})
u($,"of","lz",function(){return Z.az(511)})
u($,"on","bb",function(){return Z.az(1)})
u($,"om","ba",function(){return Z.az(2)})
u($,"oh","b9",function(){return Z.az(4)})
u($,"oo","bc",function(){return Z.az(8)})
u($,"op","bd",function(){return Z.az(16)})
u($,"oi","cW",function(){return Z.az(32)})
u($,"oj","cX",function(){return Z.az(64)})
u($,"ok","lA",function(){return Z.az(96)})
u($,"oq","c1",function(){return Z.az(128)})
u($,"og","b8",function(){return Z.az(256)})
u($,"nV","lm",function(){return new V.eU(1e-9)})
u($,"nU","D",function(){return $.lm()})})()
var v={mangledGlobalNames:{l:"int",o:"double",ag:"num",f:"String",N:"bool",F:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.F},{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a9]},{func:1,ret:-1,args:[P.l,[P.n,E.aj]]},{func:1,ret:P.F,args:[F.a2]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.F,args:[F.aa,P.o,P.o]},{func:1,ret:P.F,args:[D.y]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[W.m]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:-1,args:[W.m]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:P.o},{func:1,ret:-1,args:[P.l,[P.n,D.a1]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.l,[P.n,V.ae]]},{func:1,ret:P.N,args:[W.Q,P.f,P.f,W.bs]},{func:1,ret:P.o,args:[P.o]},{func:1,ret:P.f,args:[P.l]},{func:1,ret:P.N,args:[W.B]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:P.N,args:[W.av]},{func:1,ret:P.N,args:[P.f]},{func:1,ret:-1,args:[W.aO]},{func:1,ret:P.F,args:[,]},{func:1,ret:V.Y,args:[P.o]},{func:1,ret:-1,args:[P.l,[P.n,U.a6]]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:P.F,args:[P.ag]},{func:1,args:[W.m]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.M,args:[P.l]},{func:1,ret:P.F,args:[P.f,,]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.N,args:[[P.n,D.a1]]},{func:1,ret:P.F,args:[P.f]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.l]},{func:1,ret:[P.H,P.f,P.f],args:[[P.H,P.f,P.f],P.f]},{func:1,ret:-1,args:[W.B,W.B]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:[P.aA,,],args:[,]},{func:1,ret:P.F,args:[,],opt:[P.ar]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,args:[P.f]},{func:1,ret:P.F,args:[P.aT]},{func:1,ret:P.N,args:[V.bg]},{func:1,args:[,P.f]},{func:1,ret:W.Q,args:[W.B]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.a8,MediaError:J.a8,Navigator:J.a8,NavigatorConcurrentHardware:J.a8,NavigatorUserMediaError:J.a8,OverconstrainedError:J.a8,PositionError:J.a8,WebGLActiveInfo:J.a8,WebGLRenderbuffer:J.a8,WebGL2RenderingContext:J.a8,SQLError:J.a8,ArrayBufferView:H.bJ,Float32Array:H.dx,Int16Array:H.fA,Int32Array:H.fB,Int8Array:H.fC,Uint32Array:H.fD,Uint8ClampedArray:H.dz,CanvasPixelArray:H.dz,Uint8Array:H.ck,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLLIElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,HTMLAnchorElement:W.d_,HTMLAreaElement:W.ey,HTMLBaseElement:W.c2,HTMLBodyElement:W.be,HTMLCanvasElement:W.bw,CanvasRenderingContext2D:W.bx,CDATASection:W.bf,CharacterData:W.bf,Comment:W.bf,ProcessingInstruction:W.bf,Text:W.bf,CSSStyleDeclaration:W.c6,MSStyleCSSProperties:W.c6,CSS2Properties:W.c6,HTMLDivElement:W.ax,XMLDocument:W.c7,Document:W.c7,DOMException:W.eO,DOMImplementation:W.da,DOMRectReadOnly:W.db,Element:W.Q,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,EventTarget:W.bB,HTMLFormElement:W.f1,HTMLHeadElement:W.df,History:W.dg,HTMLCollection:W.bD,HTMLFormControlsCollection:W.bD,HTMLOptionsCollection:W.bD,HTMLDocument:W.dh,ImageData:W.b0,HTMLImageElement:W.cc,HTMLInputElement:W.cd,KeyboardEvent:W.aO,HTMLLabelElement:W.dn,Location:W.dr,HTMLAudioElement:W.ci,HTMLMediaElement:W.ci,PointerEvent:W.a9,MouseEvent:W.a9,DragEvent:W.a9,DocumentFragment:W.B,ShadowRoot:W.B,DocumentType:W.B,Node:W.B,NodeList:W.cl,RadioNodeList:W.cl,Range:W.dF,HTMLSelectElement:W.fV,HTMLTableCellElement:W.aS,HTMLTableDataCellElement:W.aS,HTMLTableHeaderCellElement:W.aS,HTMLTableElement:W.dO,HTMLTableRowElement:W.dP,HTMLTableSectionElement:W.h9,HTMLTemplateElement:W.cs,Touch:W.aI,TouchEvent:W.aJ,TouchList:W.hh,CompositionEvent:W.bq,FocusEvent:W.bq,TextEvent:W.bq,UIEvent:W.bq,HTMLVideoElement:W.hR,WheelEvent:W.aW,Window:W.cH,DOMWindow:W.cH,Attr:W.cI,ClientRect:W.e8,DOMRect:W.e8,NamedNodeMap:W.ee,MozNamedAttrMap:W.ee,SVGScriptElement:P.co,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,WebGLBuffer:P.d2,WebGLFramebuffer:P.de,WebGLProgram:P.dE,WebGLRenderingContext:P.bO,WebGLShader:P.dJ,WebGLTexture:P.dR,WebGLUniformLocation:P.dY})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.dw.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.dx.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.dy.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.lf,[])
else T.lf([])})})()
//# sourceMappingURL=test.dart.js.map
