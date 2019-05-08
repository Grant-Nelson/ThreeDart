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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jV(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jC:function jC(a){this.a=a},
j3:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
fb:function(){return new P.bS("No element")},
ma:function(){return new P.bS("Too many elements")},
m9:function(){return new P.bS("Too few elements")},
u:function u(a){this.a=a},
eT:function eT(){},
bK:function bK(){},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fr:function fr(a,b,c){this.a=a
this.b=b
this.$ti=c},
fs:function fs(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ft:function ft(a,b,c){this.a=a
this.b=b
this.$ti=c},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
hX:function hX(a,b,c){this.a=a
this.b=b
this.$ti=c},
bF:function bF(){},
cG:function cG(){},
e2:function e2(){},
m0:function(){throw H.c(P.Z("Cannot modify unmodifiable Map"))},
c5:function(a){var u,t
u=H.F(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
nB:function(a){return v.types[H.ad(a)]},
nI:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iaI},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ap(a)
if(typeof u!=="string")throw H.c(H.ao(a))
return u},
my:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fc(u)
t=u[0]
s=u[1]
return new H.fQ(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cq:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mv:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.e(u,3)
t=H.F(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a8(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.J(r,p)|32)>s)return}return parseInt(a,b)},
bO:function(a){return H.mm(a)+H.jS(H.bw(a),0,null)},
mm:function(a){var u,t,s,r,q,p,o,n,m
u=J.S(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Z||!!u.$ibt){p=C.F(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c5(r.length>1&&C.c.J(r,0)===36?C.c.ap(r,1):r)},
mn:function(){if(!!self.location)return self.location.href
return},
ku:function(a){var u,t,s,r,q
H.ey(a)
u=J.aF(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mw:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.ao(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aS(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.ao(r))}return H.ku(u)},
kv:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ao(s))
if(s<0)throw H.c(H.ao(s))
if(s>65535)return H.mw(a)}return H.ku(a)},
mx:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bP:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aS(u,10))>>>0,56320|u&1023)}}throw H.c(P.a8(a,0,1114111,null,null))},
bN:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mu:function(a){var u=H.bN(a).getFullYear()+0
return u},
ms:function(a){var u=H.bN(a).getMonth()+1
return u},
mo:function(a){var u=H.bN(a).getDate()+0
return u},
mp:function(a){var u=H.bN(a).getHours()+0
return u},
mr:function(a){var u=H.bN(a).getMinutes()+0
return u},
mt:function(a){var u=H.bN(a).getSeconds()+0
return u},
mq:function(a){var u=H.bN(a).getMilliseconds()+0
return u},
B:function(a){throw H.c(H.ao(a))},
e:function(a,b){if(a==null)J.aF(a)
throw H.c(H.c0(a,b))},
c0:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
u=H.ad(J.aF(a))
if(!(b<0)){if(typeof u!=="number")return H.B(u)
t=b>=u}else t=!0
if(t)return P.bH(b,a,"index",null,u)
return P.dJ(b,"index",null)},
nu:function(a,b,c){if(a>c)return new P.bQ(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bQ(a,c,!0,b,"end","Invalid value")
return new P.aG(!0,b,"end",null)},
ao:function(a){return new P.aG(!0,a,null,null)},
np:function(a){if(typeof a!=="number")throw H.c(H.ao(a))
return a},
c:function(a){var u
if(a==null)a=new P.dE()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lo})
u.name=""}else u.toString=H.lo
return u},
lo:function(){return J.ap(this.dartException)},
o:function(a){throw H.c(a)},
A:function(a){throw H.c(P.b1(a))},
aX:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hl(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hm:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kE:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kq:function(a,b){return new H.fI(a,b==null?null:b.method)},
jD:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.ff(a,t,u?null:b.receiver)},
ae:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jr(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aS(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jD(H.j(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kq(H.j(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lr()
p=$.ls()
o=$.lt()
n=$.lu()
m=$.lx()
l=$.ly()
k=$.lw()
$.lv()
j=$.lA()
i=$.lz()
h=q.af(t)
if(h!=null)return u.$1(H.jD(H.F(t),h))
else{h=p.af(t)
if(h!=null){h.method="call"
return u.$1(H.jD(H.F(t),h))}else{h=o.af(t)
if(h==null){h=n.af(t)
if(h==null){h=m.af(t)
if(h==null){h=l.af(t)
if(h==null){h=k.af(t)
if(h==null){h=n.af(t)
if(h==null){h=j.af(t)
if(h==null){h=i.af(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kq(H.F(t),h))}}return u.$1(new H.hz(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dO()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aG(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dO()
return a},
c3:function(a){var u
if(a==null)return new H.el(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.el(a)},
nx:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.q(0,a[t],a[s])}return b},
nH:function(a,b,c,d,e,f){H.d(a,"$ibo")
switch(H.ad(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.q("Unsupported number of arguments for wrapped closure"))},
c_:function(a,b){var u
H.ad(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nH)
a.$identity=u
return u},
m_:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.S(d).$ia){u.$reflectionInfo=d
s=H.my(u).r}else s=d
r=e?Object.create(new H.h6().constructor.prototype):Object.create(new H.c8(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aO
if(typeof p!=="number")return p.n()
$.aO=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.kf(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.nB,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.kd:H.jv
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.kf(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
lX:function(a,b,c,d){var u=H.jv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kf:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lZ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lX(t,!r,u,b)
if(t===0){r=$.aO
if(typeof r!=="number")return r.n()
$.aO=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c9
if(q==null){q=H.eG("self")
$.c9=q}return new Function(r+H.j(q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aO
if(typeof r!=="number")return r.n()
$.aO=r+1
o+=r
r="return function("+o+"){return this."
q=$.c9
if(q==null){q=H.eG("self")
$.c9=q}return new Function(r+H.j(q)+"."+H.j(u)+"("+o+");}")()},
lY:function(a,b,c,d){var u,t
u=H.jv
t=H.kd
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
lZ:function(a,b){var u,t,s,r,q,p,o,n
u=$.c9
if(u==null){u=H.eG("self")
$.c9=u}t=$.kc
if(t==null){t=H.eG("receiver")
$.kc=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lY(r,!p,s,b)
if(r===1){u="return function(){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+");"
t=$.aO
if(typeof t!=="number")return t.n()
$.aO=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+", "+n+");"
t=$.aO
if(typeof t!=="number")return t.n()
$.aO=t+1
return new Function(u+t+"}")()},
jV:function(a,b,c,d,e,f,g){return H.m_(a,b,H.ad(c),d,!!e,!!f,g)},
jv:function(a){return a.a},
kd:function(a){return a.c},
eG:function(a){var u,t,s,r,q
u=new H.c8("self","target","receiver","name")
t=J.fc(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
F:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aM(a,"String"))},
nv:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aM(a,"double"))},
nO:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aM(a,"num"))},
jT:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aM(a,"bool"))},
ad:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aM(a,"int"))},
ll:function(a,b){throw H.c(H.aM(a,H.c5(H.F(b).substring(2))))},
nQ:function(a,b){throw H.c(H.lW(a,H.c5(H.F(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.S(a)[b])return a
H.ll(a,b)},
i:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.nQ(a,b)},
ey:function(a){if(a==null)return a
if(!!J.S(a).$ia)return a
throw H.c(H.aM(a,"List<dynamic>"))},
li:function(a,b){var u
if(a==null)return a
u=J.S(a)
if(!!u.$ia)return a
if(u[b])return a
H.ll(a,b)},
le:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ad(u)]
else return a.$S()}return},
ev:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.le(J.S(a))
if(u==null)return!1
return H.l1(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.jP)return a
$.jP=!0
try{if(H.ev(a,b))return a
u=H.jl(b)
t=H.aM(a,u)
throw H.c(t)}finally{$.jP=!1}},
jX:function(a,b){if(a!=null&&!H.jU(a,b))H.o(H.aM(a,H.jl(b)))
return a},
aM:function(a,b){return new H.hn("TypeError: "+P.eX(a)+": type '"+H.l6(a)+"' is not a subtype of type '"+b+"'")},
lW:function(a,b){return new H.eH("CastError: "+P.eX(a)+": type '"+H.l6(a)+"' is not a subtype of type '"+b+"'")},
l6:function(a){var u,t
u=J.S(a)
if(!!u.$ica){t=H.le(u)
if(t!=null)return H.jl(t)
return"Closure"}return H.bO(a)},
nU:function(a){throw H.c(new P.eO(H.F(a)))},
mC:function(a){return new H.fV(a)},
lf:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bw:function(a){if(a==null)return
return a.$ti},
oG:function(a,b,c){return H.c4(a["$a"+H.j(c)],H.bw(b))},
cY:function(a,b,c,d){var u
H.F(c)
H.ad(d)
u=H.c4(a["$a"+H.j(c)],H.bw(b))
return u==null?null:u[d]},
ac:function(a,b,c){var u
H.F(b)
H.ad(c)
u=H.c4(a["$a"+H.j(b)],H.bw(a))
return u==null?null:u[c]},
t:function(a,b){var u
H.ad(b)
u=H.bw(a)
return u==null?null:u[b]},
jl:function(a){return H.bv(a,null)},
bv:function(a,b){var u,t
H.h(b,"$ia",[P.f],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c5(a[0].name)+H.jS(a,1,b)
if(typeof a=="function")return H.c5(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ad(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.j(b[t])}if('func' in a)return H.ne(a,b)
if('futureOr' in a)return"FutureOr<"+H.bv("type" in a?a.type:null,b)+">"
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
if(m<0)return H.e(b,m)
o=C.c.n(o,b[m])
l=t[p]
if(l!=null&&l!==P.K)o+=" extends "+H.bv(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bv(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bv(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bv(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.nw(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.F(u[g])
i=i+h+H.bv(d[c],b)+(" "+H.j(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jS:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ia",[P.f],"$aa")
if(a==null)return""
u=new P.af("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bv(p,c)}return"<"+u.i(0)+">"},
c4:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cW:function(a,b,c,d){var u,t
H.F(b)
H.ey(c)
H.F(d)
if(a==null)return!1
u=H.bw(a)
t=J.S(a)
if(t[b]==null)return!1
return H.l9(H.c4(t[d],u),null,c,null)},
h:function(a,b,c,d){H.F(b)
H.ey(c)
H.F(d)
if(a==null)return a
if(H.cW(a,b,c,d))return a
throw H.c(H.aM(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c5(b.substring(2))+H.jS(c,0,null),v.mangledGlobalNames)))},
l9:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aE(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aE(a[t],b,c[t],d))return!1
return!0},
oE:function(a,b,c){return a.apply(b,H.c4(J.S(b)["$a"+H.j(c)],H.bw(b)))},
lh:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="K"||a.name==="E"||a===-1||a===-2||H.lh(u)}return!1},
jU:function(a,b){var u,t
if(a==null)return b==null||b.name==="K"||b.name==="E"||b===-1||b===-2||H.lh(b)
if(b==null||b===-1||b.name==="K"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jU(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ev(a,b)}u=J.S(a).constructor
t=H.bw(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aE(u,null,b,null)},
x:function(a,b){if(a!=null&&!H.jU(a,b))throw H.c(H.aM(a,H.jl(b)))
return a},
aE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="K"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="K"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aE(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="E")return!0
if('func' in c)return H.l1(a,b,c,d)
if('func' in a)return c.name==="bo"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aE("type" in a?a.type:null,b,s,d)
else if(H.aE(a,b,s,d))return!0
else{if(!('$i'+"ce" in t.prototype))return!1
r=t.prototype["$a"+"ce"]
q=H.c4(r,u?a.slice(1):null)
return H.aE(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.l9(H.c4(m,u),b,p,d)},
l1:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aE(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aE(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aE(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aE(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nN(h,b,g,d)},
nN:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aE(c[r],d,a[r],b))return!1}return!0},
oF:function(a,b,c){Object.defineProperty(a,H.F(b),{value:c,enumerable:false,writable:true,configurable:true})},
nL:function(a){var u,t,s,r,q,p
u=H.F($.lg.$1(a))
t=$.j2[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j7[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.F($.l8.$2(a,u))
if(u!=null){t=$.j2[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j7[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jk(s)
$.j2[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.j7[u]=s
return s}if(q==="-"){p=H.jk(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.lk(a,s)
if(q==="*")throw H.c(P.hy(u))
if(v.leafTags[u]===true){p=H.jk(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.lk(a,s)},
lk:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.k_(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jk:function(a){return J.k_(a,!1,null,!!a.$iaI)},
nM:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jk(u)
else return J.k_(u,c,null,null)},
nF:function(){if(!0===$.jZ)return
$.jZ=!0
H.nG()},
nG:function(){var u,t,s,r,q,p,o,n
$.j2=Object.create(null)
$.j7=Object.create(null)
H.nE()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lm.$1(q)
if(p!=null){o=H.nM(q,u[q],p)
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
u=H.bZ(C.a0,H.bZ(C.a5,H.bZ(C.E,H.bZ(C.E,H.bZ(C.a4,H.bZ(C.a1,H.bZ(C.a2(C.F),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.lg=new H.j4(q)
$.l8=new H.j5(p)
$.lm=new H.j6(o)},
bZ:function(a,b){return a(b)||b},
mc:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a1("Illegal RegExp pattern ("+String(r)+")",a,null))},
nT:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
k2:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eL:function eL(){},
eM:function eM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fQ:function fQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
hl:function hl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fI:function fI(a,b){this.a=a
this.b=b},
ff:function ff(a,b,c){this.a=a
this.b=b
this.c=c},
hz:function hz(a){this.a=a},
jr:function jr(a){this.a=a},
el:function el(a){this.a=a
this.b=null},
ca:function ca(){},
hc:function hc(){},
h6:function h6(){},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hn:function hn(a){this.a=a},
eH:function eH(a){this.a=a},
fV:function fV(a){this.a=a},
aJ:function aJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fi:function fi(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fj:function fj(a,b){this.a=a
this.$ti=b},
fk:function fk(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
fe:function fe(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bX:function(a){return a},
ml:function(a){return new Int8Array(a)},
bb:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.c0(b,a))},
nc:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.nu(a,b,c))
return b},
bM:function bM(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
dC:function dC(){},
cn:function cn(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
nw:function(a){return J.kk(a?Object.keys(a):[],null)},
nP:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k_:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ew:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jZ==null){H.nF()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.hy("Return interceptor for "+H.j(t(a,u))))}r=a.constructor
q=r==null?null:r[$.k3()]
if(q!=null)return q
q=H.nL(a)
if(q!=null)return q
if(typeof a=="function")return C.a6
t=Object.getPrototypeOf(a)
if(t==null)return C.M
if(t===Object.prototype)return C.M
if(typeof r=="function"){Object.defineProperty(r,$.k3(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
mb:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ju(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a8(a,0,4294967295,"length",null))
return J.kk(new Array(a),b)},
kk:function(a,b){return J.fc(H.b(a,[b]))},
fc:function(a){H.ey(a)
a.fixed$length=Array
return a},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dl.prototype
return J.dk.prototype}if(typeof a=="string")return J.b4.prototype
if(a==null)return J.dm.prototype
if(typeof a=="boolean")return J.fd.prototype
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.K)return a
return J.ew(a)},
ny:function(a){if(typeof a=="number")return J.bq.prototype
if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.K)return a
return J.ew(a)},
c2:function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.K)return a
return J.ew(a)},
jY:function(a){if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.K)return a
return J.ew(a)},
nz:function(a){if(typeof a=="number")return J.bq.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bt.prototype
return a},
nA:function(a){if(typeof a=="number")return J.bq.prototype
if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bt.prototype
return a},
cX:function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bt.prototype
return a},
a6:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.K)return a
return J.ew(a)},
lJ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ny(a).n(a,b)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).A(a,b)},
k6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nA(a).v(a,b)},
lK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.nz(a).t(a,b)},
lL:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nI(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c2(a).k(a,b)},
lM:function(a,b,c,d){return J.a6(a).h7(a,b,c,d)},
lN:function(a,b){return J.cX(a).J(a,b)},
ez:function(a,b){return J.a6(a).iE(a,b)},
js:function(a,b,c){return J.a6(a).iI(a,b,c)},
k7:function(a,b){return J.a6(a).F(a,b)},
lO:function(a,b){return J.cX(a).a2(a,b)},
eA:function(a,b){return J.jY(a).a9(a,b)},
lP:function(a,b,c,d){return J.a6(a).ki(a,b,c,d)},
lQ:function(a){return J.a6(a).gjL(a)},
k8:function(a){return J.a6(a).gcI(a)},
d1:function(a){return J.S(a).gL(a)},
bx:function(a){return J.jY(a).gV(a)},
aF:function(a){return J.c2(a).gm(a)},
lR:function(a){return J.a6(a).gl4(a)},
jt:function(a,b){return J.a6(a).b2(a,b)},
k9:function(a){return J.jY(a).kU(a)},
lS:function(a,b){return J.a6(a).kZ(a,b)},
lT:function(a,b,c){return J.a6(a).fu(a,b,c)},
lU:function(a,b,c){return J.cX(a).w(a,b,c)},
lV:function(a){return J.cX(a).la(a)},
ap:function(a){return J.S(a).i(a)},
a9:function a9(){},
fd:function fd(){},
dm:function dm(){},
dn:function dn(){},
fK:function fK(){},
bt:function bt(){},
b5:function b5(){},
aH:function aH(a){this.$ti=a},
jB:function jB(a){this.$ti=a},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bq:function bq(){},
dl:function dl(){},
dk:function dk(){},
b4:function b4(){}},P={
mP:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.nm()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.c_(new P.hZ(u),1)).observe(t,{childList:true})
return new P.hY(u,t,s)}else if(self.setImmediate!=null)return P.nn()
return P.no()},
mQ:function(a){self.scheduleImmediate(H.c_(new P.i_(H.k(a,{func:1,ret:-1})),0))},
mR:function(a){self.setImmediate(H.c_(new P.i0(H.k(a,{func:1,ret:-1})),0))},
mS:function(a){P.jG(C.y,H.k(a,{func:1,ret:-1}))},
jG:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.f.a6(a.a,1000)
return P.mY(u<0?0:u,b)},
kD:function(a,b){var u
H.k(b,{func:1,ret:-1,args:[P.aW]})
u=C.f.a6(a.a,1000)
return P.mZ(u<0?0:u,b)},
mY:function(a,b){var u=new P.em(!0)
u.h2(a,b)
return u},
mZ:function(a,b){var u=new P.em(!1)
u.h3(a,b)
return u},
mT:function(a,b){var u,t,s
b.a=1
try{a.f7(new P.i9(b),new P.ia(b),null)}catch(s){u=H.ae(s)
t=H.c3(s)
P.nR(new P.ib(b,u,t))}},
kR:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iaD")
if(u>=4){t=b.cq()
b.a=a.a
b.c=a.c
P.cM(b,t)}else{t=H.d(b.c,"$ib_")
b.a=2
b.c=a
a.dV(t)}},
cM:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.d(t.c,"$iah")
t=t.b
p=q.a
o=q.b
t.toString
P.iU(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
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
if(k){H.d(m,"$iah")
t=t.b
p=m.a
o=m.b
t.toString
P.iU(null,null,t,p,o)
return}j=$.W
if(j!=l)$.W=l
else j=null
t=b.c
if(t===8)new P.ig(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.ie(s,b,m).$0()}else if((t&2)!==0)new P.id(u,s,b).$0()
if(j!=null)$.W=j
t=s.b
if(!!J.S(t).$ice){if(t.a>=4){i=H.d(o.c,"$ib_")
o.c=null
b=o.br(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.kR(t,o)
return}}h=b.b
i=H.d(h.c,"$ib_")
h.c=null
b=h.br(i)
t=s.a
p=s.b
if(!t){H.x(p,H.t(h,0))
h.a=4
h.c=p}else{H.d(p,"$iah")
h.a=8
h.c=p}u.a=h
t=h}},
nh:function(a,b){if(H.ev(a,{func:1,args:[P.K,P.as]}))return H.k(a,{func:1,ret:null,args:[P.K,P.as]})
if(H.ev(a,{func:1,args:[P.K]}))return H.k(a,{func:1,ret:null,args:[P.K]})
throw H.c(P.ju(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ng:function(){var u,t
for(;u=$.bY,u!=null;){$.cV=null
t=u.b
$.bY=t
if(t==null)$.cU=null
u.a.$0()}},
nl:function(){$.jQ=!0
try{P.ng()}finally{$.cV=null
$.jQ=!1
if($.bY!=null)$.k4().$1(P.la())}},
l5:function(a){var u=new P.e9(H.k(a,{func:1,ret:-1}))
if($.bY==null){$.cU=u
$.bY=u
if(!$.jQ)$.k4().$1(P.la())}else{$.cU.b=u
$.cU=u}},
nk:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.bY
if(u==null){P.l5(a)
$.cV=$.cU
return}t=new P.e9(a)
s=$.cV
if(s==null){t.b=u
$.cV=t
$.bY=t}else{t.b=s.b
s.b=t
$.cV=t
if(t.b==null)$.cU=t}},
nR:function(a){var u,t
u={func:1,ret:-1}
H.k(a,u)
t=$.W
if(C.l===t){P.iW(null,null,C.l,a)
return}t.toString
P.iW(null,null,t,H.k(t.cD(a),u))},
kC:function(a,b){var u,t
u={func:1,ret:-1}
H.k(b,u)
t=$.W
if(t===C.l){t.toString
return P.jG(a,b)}return P.jG(a,H.k(t.cD(b),u))},
mG:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aW]}
H.k(b,u)
t=$.W
if(t===C.l){t.toString
return P.kD(a,b)}s=t.e8(b,P.aW)
$.W.toString
return P.kD(a,H.k(s,u))},
iU:function(a,b,c,d,e){var u={}
u.a=d
P.nk(new P.iV(u,e))},
l2:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.W
if(t===c)return d.$0()
$.W=c
u=t
try{t=d.$0()
return t}finally{$.W=u}},
l3:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.x(e,g)
t=$.W
if(t===c)return d.$1(e)
$.W=c
u=t
try{t=d.$1(e)
return t}finally{$.W=u}},
ni:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
t=$.W
if(t===c)return d.$2(e,f)
$.W=c
u=t
try{t=d.$2(e,f)
return t}finally{$.W=u}},
iW:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cD(d):c.jM(d,-1)
P.l5(d)},
hZ:function hZ(a){this.a=a},
hY:function hY(a,b,c){this.a=a
this.b=b
this.c=c},
i_:function i_(a){this.a=a},
i0:function i0(a){this.a=a},
em:function em(a){this.a=a
this.b=null
this.c=0},
iD:function iD(a,b){this.a=a
this.b=b},
iC:function iC(a,b,c,d){var _=this
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
aD:function aD(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
i8:function i8(a,b){this.a=a
this.b=b},
ic:function ic(a,b){this.a=a
this.b=b},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
ib:function ib(a,b,c){this.a=a
this.b=b
this.c=c},
ig:function ig(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ih:function ih(a){this.a=a},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(a,b,c){this.a=a
this.b=b
this.c=c},
e9:function e9(a){this.a=a
this.b=null},
h7:function h7(){},
h9:function h9(a,b){this.a=a
this.b=b},
ha:function ha(a,b){this.a=a
this.b=b},
cu:function cu(){},
h8:function h8(){},
aW:function aW(){},
ah:function ah(a,b){this.a=a
this.b=b},
iN:function iN(){},
iV:function iV(a,b){this.a=a
this.b=b},
im:function im(){},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
io:function io(a,b){this.a=a
this.b=b},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
me:function(a,b,c,d,e){return new H.aJ([d,e])},
mf:function(a,b,c){H.ey(a)
return H.h(H.nx(a,new H.aJ([b,c])),"$ikl",[b,c],"$akl")},
km:function(a,b){return new H.aJ([a,b])},
ds:function(a,b,c,d){return new P.ik([d])},
jM:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mX:function(a,b,c){var u=new P.ef(a,b,[c])
u.c=a.e
return u},
m8:function(a,b,c){var u,t
if(P.jR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.f])
t=$.d0()
C.a.h(t,a)
try{P.nf(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.kA(b,H.li(u,"$in"),", ")+c
return t.charCodeAt(0)==0?t:t},
jA:function(a,b,c){var u,t,s
if(P.jR(a))return b+"..."+c
u=new P.af(b)
t=$.d0()
C.a.h(t,a)
try{s=u
s.a=P.kA(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jR:function(a){var u,t
for(u=0;t=$.d0(),u<t.length;++u)if(a===t[u])return!0
return!1},
nf:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ia",[P.f],"$aa")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.G())return
r=H.j(u.gM())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.G()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gM();++s
if(!u.G()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM();++s
for(;u.G();o=n,n=m){m=u.gM();++s
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
mg:function(a,b,c){var u=P.me(null,null,null,b,c)
a.a0(0,new P.fl(u,b,c))
return u},
kn:function(a,b){var u,t,s
u=P.ds(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s)u.h(0,H.x(a[s],b))
return u},
jE:function(a){var u,t
u={}
if(P.jR(a))return"{...}"
t=new P.af("")
try{C.a.h($.d0(),a)
t.a+="{"
u.a=!0
a.a0(0,new P.fp(u,t))
t.a+="}"}finally{u=$.d0()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
ik:function ik(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bV:function bV(a){this.a=a
this.c=this.b=null},
ef:function ef(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fl:function fl(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(){},
T:function T(){},
fo:function fo(){},
fp:function fp(a,b){this.a=a
this.b=b},
bL:function bL(){},
iE:function iE(){},
fq:function fq(){},
e3:function e3(a,b){this.a=a
this.$ti=b},
is:function is(){},
eg:function eg(){},
eq:function eq(){},
mK:function(a,b,c,d){H.h(b,"$ia",[P.l],"$aa")
if(b instanceof Uint8Array)return P.mL(!1,b,c,d)
return},
mL:function(a,b,c,d){var u,t,s
u=$.lB()
if(u==null)return
t=0===c
if(t&&!0)return P.jJ(u,b)
s=b.length
d=P.ba(c,d,s,null,null,null)
if(t&&d===s)return P.jJ(u,b)
return P.jJ(u,b.subarray(c,d))},
jJ:function(a,b){if(P.mN(b))return
return P.mO(a,b)},
mO:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ae(t)}return},
mN:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
mM:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ae(t)}return},
nj:function(a,b,c){var u,t,s
H.h(a,"$ia",[P.l],"$aa")
for(u=J.c2(a),t=b;t<c;++t){s=u.k(a,t)
if(typeof s!=="number")return s.bY()
if((s&127)!==s)return t-b}return c-b},
kb:function(a,b,c,d,e,f){if(C.f.bk(f,4)!==0)throw H.c(P.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a1("Invalid base64 padding, more than two '=' characters",a,b))},
eD:function eD(a){this.a=a},
eE:function eE(a){this.a=a},
bA:function bA(){},
bl:function bl(){},
eV:function eV(){},
f9:function f9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f8:function f8(a){this.a=a},
hG:function hG(a){this.a=a},
hI:function hI(){},
iL:function iL(a){this.b=this.a=0
this.c=a},
hH:function hH(a){this.a=a},
iJ:function iJ(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
iK:function iK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ex:function(a,b,c){var u
H.k(b,{func:1,ret:P.l,args:[P.f]})
u=H.mv(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a1(a,null,null))},
m5:function(a){if(a instanceof H.ca)return a.i(0)
return"Instance of '"+H.bO(a)+"'"},
mh:function(a,b,c,d){var u,t
H.x(b,d)
u=J.mb(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.q(u,t,b)
return H.h(u,"$ia",[d],"$aa")},
mi:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gV(a);s.G();)C.a.h(t,H.x(s.gM(),c))
if(b)return t
return H.h(J.fc(t),"$ia",u,"$aa")},
dP:function(a,b,c){var u,t
u=P.l
H.h(a,"$in",[u],"$an")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.h(a,"$iaH",[u],"$aaH")
t=a.length
c=P.ba(b,c,t,null,null,null)
return H.kv(b>0||c<t?C.a.fC(a,b,c):a)}if(!!J.S(a).$icn)return H.mx(a,b,P.ba(b,c,a.length,null,null,null))
return P.mE(a,b,c)},
mE:function(a,b,c){var u,t,s,r
H.h(a,"$in",[P.l],"$an")
if(b<0)throw H.c(P.a8(b,0,J.aF(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.a8(c,b,J.aF(a),null,null))
t=J.bx(a)
for(s=0;s<b;++s)if(!t.G())throw H.c(P.a8(b,0,s,null,null))
r=[]
if(u)for(;t.G();)r.push(t.gM())
else for(s=b;s<c;++s){if(!t.G())throw H.c(P.a8(c,b,s,null,null))
r.push(t.gM())}return H.kv(r)},
mA:function(a,b,c){return new H.fe(a,H.mc(a,!1,!0,!1))},
kA:function(a,b,c){var u=J.bx(b)
if(!u.G())return a
if(c.length===0){do a+=H.j(u.gM())
while(u.G())}else{a+=H.j(u.gM())
for(;u.G();)a=a+c+H.j(u.gM())}return a},
kG:function(){var u=H.mn()
if(u!=null)return P.mJ(u,0,null)
throw H.c(P.Z("'Uri.base' is not supported"))},
er:function(a,b,c,d){var u,t,s,r,q,p
H.h(a,"$ia",[P.l],"$aa")
if(c===C.m){u=$.lH().b
if(typeof b!=="string")H.o(H.ao(b))
u=u.test(b)}else u=!1
if(u)return b
H.x(b,H.ac(c,"bA",0))
t=c.gkh().cJ(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bP(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
m1:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
m2:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
db:function(a){if(a>=10)return""+a
return"0"+a},
kh:function(a,b,c,d,e,f){return new P.aP(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eX:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ap(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m5(a)},
d3:function(a){return new P.aG(!1,null,null,a)},
ju:function(a,b,c){return new P.aG(!0,a,b,c)},
dJ:function(a,b,c){return new P.bQ(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.bQ(b,c,!0,a,d,"Invalid value")},
ba:function(a,b,c,d,e,f){if(typeof a!=="number")return H.B(a)
if(0>a||a>c)throw H.c(P.a8(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.a8(b,a,c,"end",f))
return b}return c},
bH:function(a,b,c,d,e){var u=H.ad(e==null?J.aF(b):e)
return new P.fa(b,u,!0,a,c,"Index out of range")},
Z:function(a){return new P.hA(a)},
hy:function(a){return new P.hx(a)},
kz:function(a){return new P.bS(a)},
b1:function(a){return new P.eK(a)},
q:function(a){return new P.ec(a)},
a1:function(a,b,c){return new P.f4(a,b,c)},
mj:function(a,b,c,d){var u,t
H.k(b,{func:1,ret:d,args:[P.l]})
u=H.b([],[d])
C.a.sm(u,a)
for(t=0;t<a;++t)C.a.q(u,t,b.$1(t))
return u},
k1:function(a){H.nP(a)},
mJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.J(a,b+4)^58)*3|C.c.J(a,b)^100|C.c.J(a,b+1)^97|C.c.J(a,b+2)^116|C.c.J(a,b+3)^97)>>>0
if(t===0)return P.kF(b>0||c<c?C.c.w(a,b,c):a,5,null).gfc()
else if(t===32)return P.kF(C.c.w(a,u,c),0,null).gfc()}s=new Array(8)
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
if(P.l4(a,b,c,0,r)>=14)C.a.q(r,7,c)
q=r[1]
if(typeof q!=="number")return q.lj()
if(q>=b)if(P.l4(a,b,q,20,r)===20)r[7]=q
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
k=!1}else{if(!(m<c&&m===n+2&&C.c.ac(a,"..",n)))i=m>n+2&&C.c.ac(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.ac(a,"file",b)){if(p<=b){if(!C.c.ac(a,"/",n)){h="file:///"
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
n=7}else if(n===m)if(b===0&&!0){a=C.c.b_(a,n,m,"/");++m;++l;++c}else{a=C.c.w(a,b,n)+"/"+C.c.w(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.ac(a,"http",b)){if(s&&o+3===n&&C.c.ac(a,"80",o+1))if(b===0&&!0){a=C.c.b_(a,o,n,"")
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
else if(q===u&&C.c.ac(a,"https",b)){if(s&&o+4===n&&C.c.ac(a,"443",o+1))if(b===0&&!0){a=C.c.b_(a,o,n,"")
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
l-=b}return new P.iv(a,q,p,o,n,m,l,j)}return P.n_(a,b,c,q,p,o,n,m,l,j)},
kI:function(a,b){var u=P.f
return C.a.kp(H.b(a.split("&"),[u]),P.km(u,u),new P.hF(b),[P.H,P.f,P.f])},
mI:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.hC(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a2(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.ex(C.c.w(a,q,r),null,null)
if(typeof n!=="number")return n.fq()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.e(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.ex(C.c.w(a,q,c),null,null)
if(typeof n!=="number")return n.fq()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.e(t,p)
t[p]=n
return t},
kH:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.hD(a)
t=new P.hE(u,a)
if(a.length<2)u.$1("address is too short")
s=H.b([],[P.l])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a2(a,r)
if(n===58){if(r===b){++r
if(C.c.a2(a,r)!==58)u.$2("invalid start colon.",r)
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
n_:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.n6(a,b,d)
else{if(d===b)P.cR(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.n7(a,u,e-1):""
s=P.n3(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.B(g)
q=r<g?P.n5(P.ex(C.c.w(a,r,g),new P.iF(a,f),null),j):null}else{t=""
s=null
q=null}p=P.n4(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.Z()
o=h<i?P.jN(a,h+1,i,null):null
return new P.bW(j,t,s,q,p,o,i<c?P.n2(a,i+1,c):null)},
kV:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cR:function(a,b,c){throw H.c(P.a1(c,a,b))},
n5:function(a,b){if(a!=null&&a===P.kV(b))return
return a},
n3:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a2(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.c.a2(a,u)!==93)P.cR(a,b,"Missing end `]` to match `[` in host")
P.kH(a,b+1,u)
return C.c.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.B(c)
t=b
for(;t<c;++t)if(C.c.a2(a,t)===58){P.kH(a,b,c)
return"["+a+"]"}return P.n9(a,b,c)},
n9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.B(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a2(a,u)
if(q===37){p=P.l0(a,u,!0)
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
if(o)P.cR(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a2(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.af("")
n=C.c.w(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kW(q)
u+=l
t=u}}}}if(s==null)return C.c.w(a,b,c)
if(t<c){n=C.c.w(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
n6:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kY(C.c.J(a,b)))P.cR(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.J(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cR(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.w(a,b,c)
return P.n0(t?a.toLowerCase():a)},
n0:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
n7:function(a,b,c){return P.cS(a,b,c,C.a9,!1)},
n4:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cS(a,b,c,C.L,!0):C.r.lp(d,new P.iG(),P.f).l(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a5(r,"/"))r="/"+r
return P.n8(r,e,f)},
n8:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a5(a,"/"))return P.na(a,!u||c)
return P.nb(a)},
jN:function(a,b,c,d){var u,t
u={}
H.h(d,"$iH",[P.f,null],"$aH")
if(a!=null){if(d!=null)throw H.c(P.d3("Both query and queryParameters specified"))
return P.cS(a,b,c,C.u,!0)}if(d==null)return
t=new P.af("")
u.a=""
d.a0(0,new P.iH(new P.iI(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
n2:function(a,b,c){return P.cS(a,b,c,C.u,!0)},
l0:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a2(a,b+1)
s=C.c.a2(a,u)
r=H.j3(t)
q=H.j3(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aS(p,4)
if(u>=8)return H.e(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.bP(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.w(a,b,b+3).toUpperCase()
return},
kW:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.l])
C.a.q(t,0,37)
C.a.q(t,1,C.c.J("0123456789ABCDEF",a>>>4))
C.a.q(t,2,C.c.J("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.f.iX(a,6*r)&63|s
C.a.q(t,q,37)
C.a.q(t,q+1,C.c.J("0123456789ABCDEF",p>>>4))
C.a.q(t,q+2,C.c.J("0123456789ABCDEF",p&15))
q+=3}}return P.dP(t,0,null)},
cS:function(a,b,c,d,e){var u=P.l_(a,b,c,H.h(d,"$ia",[P.l],"$aa"),e)
return u==null?C.c.w(a,b,c):u},
l_:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.h(d,"$ia",[P.l],"$aa")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Z()
if(typeof c!=="number")return H.B(c)
if(!(t<c))break
c$0:{q=C.c.a2(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.l0(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cR(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a2(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.kW(q)}}if(r==null)r=new P.af("")
r.a+=C.c.w(a,s,t)
r.a+=H.j(o)
if(typeof n!=="number")return H.B(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Z()
if(s<c)r.a+=C.c.w(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
kZ:function(a){if(C.c.a5(a,"."))return!0
return C.c.eM(a,"/.")!==-1},
nb:function(a){var u,t,s,r,q,p,o
if(!P.kZ(a))return a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.D(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.l(u,"/")},
na:function(a,b){var u,t,s,r,q,p
if(!P.kZ(a))return!b?P.kX(a):a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaz(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaz(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.q(u,0,P.kX(u[0]))}return C.a.l(u,"/")},
kX:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.kY(J.lN(a,0)))for(t=1;t<u;++t){s=C.c.J(a,t)
if(s===58)return C.c.w(a,0,t)+"%3A"+C.c.ap(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.e(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
n1:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.J(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.d3("Invalid URL encoding"))}}return u},
jO:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.J(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.w(a,b,c)
else q=new H.u(C.c.w(a,b,c))}else{q=H.b([],[P.l])
for(r=a.length,t=b;t<c;++t){s=C.c.J(a,t)
if(s>127)throw H.c(P.d3("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.d3("Truncated URI"))
C.a.h(q,P.n1(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.h(q,"$ia",[P.l],"$aa")
return new P.hH(!1).cJ(q)},
kY:function(a){var u=a|32
return 97<=u&&u<=122},
kF:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.b([b-1],[P.l])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.J(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a1("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a1("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.J(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaz(u)
if(q!==44||s!==o+7||!C.c.ac(a,"base64",o+1))throw H.c(P.a1("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.Q.kC(a,n,t)
else{m=P.l_(a,n,t,C.u,!0)
if(m!=null)a=C.c.b_(a,n,t,m)}return new P.hB(a,u,c)},
nd:function(){var u,t,s,r,q
u=P.mj(22,new P.iR(),!0,P.M)
t=new P.iQ(u)
s=new P.iS()
r=new P.iT()
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
l4:function(a,b,c,d,e){var u,t,s,r,q
H.h(e,"$ia",[P.l],"$aa")
u=$.lI()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.c.J(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.q(e,q>>>5,t)}return d},
N:function N(){},
ai:function ai(a,b){this.a=a
this.b=b},
r:function r(){},
aP:function aP(a){this.a=a},
eR:function eR(){},
eS:function eS(){},
bn:function bn(){},
dE:function dE(){},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bQ:function bQ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fa:function fa(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hA:function hA(a){this.a=a},
hx:function hx(a){this.a=a},
bS:function bS(a){this.a=a},
eK:function eK(a){this.a=a},
fJ:function fJ(){},
dO:function dO(){},
eO:function eO(a){this.a=a},
ec:function ec(a){this.a=a},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
bo:function bo(){},
l:function l(){},
n:function n(){},
aQ:function aQ(){},
a:function a(){},
H:function H(){},
E:function E(){},
ag:function ag(){},
K:function K(){},
as:function as(){},
f:function f(){},
af:function af(a){this.a=a},
hF:function hF(a){this.a=a},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
hE:function hE(a,b){this.a=a
this.b=b},
bW:function bW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(){},
iI:function iI(a,b){this.a=a
this.b=b},
iH:function iH(a){this.a=a},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
iR:function iR(){},
iQ:function iQ(a){this.a=a},
iS:function iS(){},
iT:function iT(){},
iv:function iv(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
i3:function i3(a,b,c,d,e,f,g,h){var _=this
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
u=J.S(a)
if(!!u.$ib3){t=u.ged(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.ep(a.data,a.height,a.width)},
nr:function(a){if(a instanceof P.ep)return{data:a.a,height:a.b,width:a.c}
return a},
nq:function(a,b){var u={}
a.a0(0,new P.iX(u))
return u},
iw:function iw(){},
iy:function iy(a,b){this.a=a
this.b=b},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a){this.a=a},
ix:function ix(a,b){this.a=a
this.b=b},
f0:function f0(a,b){this.a=a
this.b=b},
f1:function f1(){},
f2:function f2(){},
ij:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mW:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
il:function il(){},
aB:function aB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cr:function cr(){},
p:function p(){},
M:function M(){},
d5:function d5(){},
dg:function dg(){},
dH:function dH(){},
bR:function bR(){},
dL:function dL(){},
dT:function dT(){},
e1:function e1(){}},W={
ka:function(a){var u=document.createElement("a")
return u},
jw:function(a,b){var u=document.createElement("canvas")
return u},
m3:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ae(u,a,b,c)
t.toString
u=W.C
u=new H.cJ(new W.am(t),H.k(new W.eU(),{func:1,ret:P.N,args:[u]}),[u])
return H.d(u.gaL(u),"$iP")},
m4:function(a){H.d(a,"$ibD")
return"wheel"},
cd:function(a){var u,t,s
u="element tag unavailable"
try{t=J.lR(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ae(s)}return u},
m7:function(a){var u,t,s
t=document.createElement("input")
u=H.d(t,"$ich")
try{u.type=a}catch(s){H.ae(s)}return u},
ii:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kT:function(a,b,c,d){var u,t
u=W.ii(W.ii(W.ii(W.ii(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a5:function(a,b,c,d,e){var u,t
u=W.l7(new W.i7(c),W.m)
t=u!=null
if(t&&!0){H.k(u,{func:1,args:[W.m]})
if(t)J.lM(a,b,u,!1)}return new W.i6(a,b,u,!1,[e])},
kS:function(a){var u,t
u=W.ka(null)
t=window.location
u=new W.bu(new W.ir(u,t))
u.fQ(a)
return u},
mU:function(a,b,c,d){H.d(a,"$iP")
H.F(b)
H.F(c)
H.d(d,"$ibu")
return!0},
mV:function(a,b,c,d){var u,t,s
H.d(a,"$iP")
H.F(b)
H.F(c)
u=H.d(d,"$ibu").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kU:function(){var u,t,s,r,q
u=P.f
t=P.kn(C.A,u)
s=H.t(C.A,0)
r=H.k(new W.iB(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.iA(t,P.ds(null,null,null,u),P.ds(null,null,null,u),P.ds(null,null,null,u),null)
t.h1(null,new H.ft(C.A,r,[s,u]),q,null)
return t},
l7:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.W
if(u===C.l)return a
return u.e8(a,b)},
w:function w(){},
d2:function d2(){},
eB:function eB(){},
c7:function c7(){},
bi:function bi(){},
by:function by(){},
bz:function bz(){},
bj:function bj(){},
cb:function cb(){},
eN:function eN(){},
aA:function aA(){},
cc:function cc(){},
eQ:function eQ(){},
dc:function dc(){},
dd:function dd(){},
i2:function i2(a,b){this.a=a
this.b=b},
P:function P(){},
eU:function eU(){},
m:function m(){},
bD:function bD(){},
f3:function f3(){},
dh:function dh(){},
di:function di(){},
bG:function bG(){},
dj:function dj(){},
b3:function b3(){},
cg:function cg(){},
ch:function ch(){},
aR:function aR(){},
dq:function dq(){},
dt:function dt(){},
cl:function cl(){},
aa:function aa(){},
am:function am(a){this.a=a},
C:function C(){},
co:function co(){},
dI:function dI(){},
fW:function fW(){},
aV:function aV(){},
dQ:function dQ(){},
dR:function dR(){},
hb:function hb(){},
cv:function cv(){},
aK:function aK(){},
aL:function aL(){},
hk:function hk(){},
bs:function bs(){},
hV:function hV(){},
aZ:function aZ(){},
cK:function cK(){},
cL:function cL(){},
eb:function eb(){},
eh:function eh(){},
i1:function i1(){},
i4:function i4(a){this.a=a},
i5:function i5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jL:function jL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i6:function i6(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
i7:function i7(a){this.a=a},
bu:function bu(a){this.a=a},
av:function av(){},
dD:function dD(a){this.a=a},
fG:function fG(a){this.a=a},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(){},
it:function it(){},
iu:function iu(){},
iA:function iA(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iB:function iB(){},
iz:function iz(){},
df:function df(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ay:function ay(){},
ir:function ir(a,b){this.a=a
this.b=b},
es:function es(a){this.a=a},
iM:function iM(a){this.a=a},
ea:function ea(){},
ed:function ed(){},
ee:function ee(){},
ei:function ei(){},
ej:function ej(){},
en:function en(){},
eo:function eo(){},
et:function et(){},
eu:function eu(){}},O={
jx:function(a){var u=new O.a0([a])
u.c3(a)
return u},
a0:function a0(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
ck:function ck(){this.b=this.a=null},
dw:function dw(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fv:function fv(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cj:function cj(){},
fw:function fw(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aS:function aS(a,b){var _=this
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
bT:function bT(){}},E={
mB:function(a,b){var u=new E.fR(a,b)
u.fK(a,b)
return u},
mF:function(a,b,c,d,e){var u,t,s,r
u=J.S(a)
if(!!u.$iby)return E.kB(a,!0,!0,!0,!1)
t=W.jw(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcI(a).h(0,t)
r=E.kB(t,!0,!0,!0,!1)
r.a=a
return r},
kB:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dY()
t=P.mf(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
s=C.q.bZ(a,"webgl",t)
s=H.d(s==null?C.q.bZ(a,"experimental-webgl",t):s,"$ibR")
if(s==null)H.o(P.q("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.mB(s,a)
r=new T.he(s)
r.b=H.ad((s&&C.b).dh(s,3379))
r.c=H.ad(C.b.dh(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.e4(a)
q=new X.fg()
q.c=new X.ax(!1,!1,!1)
q.siA(P.ds(null,null,null,P.l))
r.b=q
q=new X.fA(r)
q.f=0
q.r=V.b9()
q.x=V.b9()
q.Q=1
q.ch=1
r.c=q
q=new X.fn(r)
q.r=0
q.x=V.b9()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.hj(r)
q.e=0
q.f=V.b9()
q.r=V.b9()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.shn(H.b([],[[P.cu,P.K]]))
q=r.z
p=document
o=W.aa
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a5(p,"contextmenu",H.k(r.ghW(),n),!1,o))
q=r.z
m=W.m
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a5(a,"focus",H.k(r.gi1(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a5(a,"blur",H.k(r.ghQ(),l),!1,m))
q=r.z
k=W.aR
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a5(p,"keyup",H.k(r.gi5(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a5(p,"keydown",H.k(r.gi3(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a5(a,"mousedown",H.k(r.gi9(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a5(a,"mouseup",H.k(r.gie(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a5(a,"mousemove",H.k(r.gib(),n),!1,o))
k=r.z
j=W.aZ;(k&&C.a).h(k,W.a5(a,H.F(W.m4(a)),H.k(r.gih(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a5(p,"mousemove",H.k(r.ghY(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a5(p,"mouseup",H.k(r.gi_(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a5(p,"pointerlockchange",H.k(r.gij(),l),!1,m))
m=r.z
l=W.aL
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a5(a,"touchstart",H.k(r.gix(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a5(a,"touchend",H.k(r.git(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a5(a,"touchmove",H.k(r.giv(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ai(Date.now(),!1)
u.cy=0
u.dX()
return u},
eF:function eF(){},
aq:function aq(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fR:function fR(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fS:function fS(a){this.a=a},
fT:function fT(a){this.a=a},
fU:function fU(a){this.a=a},
dY:function dY(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hg:function hg(a){this.a=a}},Z={
jK:function(a,b,c){var u
H.h(c,"$ia",[P.l],"$aa")
u=a.createBuffer()
C.b.av(a,b,u)
C.b.eb(a,b,new Int16Array(H.bX(c)),35044)
C.b.av(a,b,null)
return new Z.e8(b,u)},
aC:function(a){return new Z.aY(a)},
e8:function e8(a,b){this.a=a
this.b=b},
d6:function d6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hW:function hW(a){this.a=a},
d7:function d7(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bp:function bp(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a){this.a=a}},D={
Q:function(){var u=new D.bC()
u.sai(null)
u.sb5(null)
u.c=null
u.d=0
return u},
eI:function eI(){},
bC:function bC(){var _=this
_.d=_.c=_.b=_.a=null},
eY:function eY(a){this.a=a},
eZ:function eZ(a){this.a=a},
y:function y(a){this.a=a
this.b=null},
bI:function bI(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bJ:function bJ(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
L:function L(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bm:function bm(){var _=this
_.d=_.c=_.b=_.a=null},
a2:function a2(){},
dr:function dr(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dG:function dG(){},
dN:function dN(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){}},X={d8:function d8(a,b){this.a=a
this.b=b},dp:function dp(a,b){this.a=a
this.b=b},fg:function fg(){var _=this
_.d=_.c=_.b=_.a=null},du:function du(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fn:function fn(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ax:function ax(a,b,c){this.a=a
this.b=b
this.c=c},b7:function b7(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fA:function fA(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cm:function cm(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},fM:function fM(){},e_:function e_(a,b,c,d,e,f,g,h,i){var _=this
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
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},e4:function e4(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
m6:function(a,b,c,d,e,f,g){var u,t
u=new X.f5()
t=new V.au(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.kx
if(t==null){t=V.kw(0,0,1,1)
$.kx=t}u.r=t
return u},
d9:function d9(){},
f5:function f5(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dF:function dF(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dS:function dS(){}},V={
nW:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bk(a-b,u)
return(a<0?a+u:a)+b},
O:function(a,b,c){if(a==null)return C.c.ag("null",c)
return C.c.ag(C.e.f8(Math.abs(a-0)<$.G().a?0:a,b),c+b+1)},
c1:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ia",[P.r],"$aa")
u=H.b([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=V.O(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.q(u,p,C.c.ag(u[p],s))}return u},
k0:function(a,b){return C.e.l8(Math.pow(b,C.a_.cU(Math.log(H.np(a))/Math.log(b))))},
dy:function(){var u=$.kp
if(u==null){u=V.aT(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kp=u}return u},
aT:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ko:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.u(0,Math.sqrt(c.E(c)))
t=b.aI(u)
s=t.u(0,Math.sqrt(t.E(t)))
r=u.aI(s)
q=new V.z(a.a,a.b,a.c)
p=s.U(0).E(q)
o=r.U(0).E(q)
n=u.U(0).E(q)
return V.aT(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b9:function(){var u=$.kt
if(u==null){u=new V.a_(0,0)
$.kt=u}return u},
jF:function(){var u=$.cp
if(u==null){u=new V.U(0,0,0)
$.cp=u}return u},
kw:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dK(a,b,c,d)},
cH:function(){var u=$.kN
if(u==null){u=new V.z(0,0,0)
$.kN=u}return u},
kO:function(){var u=$.kM
if(u==null){u=new V.z(0,1,0)
$.kM=u}return u},
kP:function(){var u=$.hJ
if(u==null){u=new V.z(0,0,1)
$.hJ=u}return u},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eW:function eW(a){this.a=a},
dx:function dx(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aj:function aj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a_:function a_(a,b){this.a=a
this.b=b},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dK:function dK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
V:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.q("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.J(a,0)
t=C.c.J(b,0)
s=new V.fP()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.fX()
u.fL(a)
return u},
hi:function(){var u,t
u=new V.hh()
t=P.f
u.siZ(new H.aJ([t,V.ct]))
u.sj2(new H.aJ([t,V.cx]))
u.c=null
return u},
b0:function b0(){},
aw:function aw(){},
dv:function dv(){},
ar:function ar(){this.a=null},
fP:function fP(){this.b=this.a=null},
fX:function fX(){this.a=null},
ct:function ct(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dZ:function dZ(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(a,b){this.a=a
this.b=b
this.c=null},
hh:function hh(){this.c=this.b=this.a=null},
cy:function cy(a){this.b=a
this.a=this.c=null},
nS:function(a){P.mG(C.V,new V.jm(a))},
mD:function(a,b){var u=new V.h1()
u.fN(a,!0)
return u},
bk:function bk(){},
jm:function jm(a){this.a=a},
eP:function eP(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f6:function f6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f7:function f7(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fL:function fL(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fN:function fN(a,b){this.a=a
this.b=b
this.c=null},
fO:function fO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h1:function h1(){this.b=this.a=null},
h3:function h3(a){this.a=a},
h2:function h2(a){this.a=a},
h4:function h4(a){this.a=a}},U={
jy:function(){var u=new U.eJ()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
kg:function(a){var u=new U.da()
u.a=a
return u},
eJ:function eJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
da:function da(){this.b=this.a=null},
cf:function cf(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ab:function ab(){},
e5:function e5(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e6:function e6(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e7:function e7(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={de:function de(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
lj:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
u=V.mD("Test 018",!0)
t=W.jw(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.F(u.a,t)
s=[P.f]
u.e4(H.b(["A test of the Material Lighting shader where a diffuse textue and ","inverse diffuse texture are used. Grass is only shown in the dark. ","Dirt is shown where the directional light is shining."],s))
u.jB(H.b(["shapes"],s))
u.e4(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.dg(s,"testCanvas")
if(r==null)H.o(P.q("Failed to find an element with the identifier, testCanvas."))
q=E.mF(r,!0,!0,!0,!1)
p=new E.aq()
p.a=""
p.b=!0
o=E.aq
p.she(0,O.jx(o))
p.y.bl(p.gkD(),p.gkG())
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
p.saa(0,null)
p.sbd(null)
p.saa(0,F.ln(8,null,1,8))
n=new U.cf()
m=U.ab
n.c3(m)
n.bl(n.ghI(),n.gip())
n.e=null
n.f=V.dy()
n.r=0
l=q.r
k=new U.e6()
j=U.jy()
j.sdf(0,!0)
j.sd_(6.283185307179586)
j.sd1(0)
j.sa1(0,0)
j.sd0(100)
j.sX(0)
j.scL(0.5)
k.b=j
i=k.gaQ()
j.gC().h(0,i)
j=U.jy()
j.sdf(0,!0)
j.sd_(6.283185307179586)
j.sd1(0)
j.sa1(0,0)
j.sd0(100)
j.sX(0)
j.scL(0.5)
k.c=j
j.gC().h(0,i)
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
h=new X.ax(!1,!1,!1)
g=k.d
k.d=h
j=[X.ax]
i=new D.L("modifiers",g,h,k,j)
i.b=!0
k.S(i)
i=k.f
if(i!==!1){k.f=!1
i=new D.L("invertX",i,!1,k,[P.N])
i.b=!0
k.S(i)}i=k.r
if(i!==!1){k.r=!1
i=new D.L("invertY",i,!1,k,[P.N])
i.b=!0
k.S(i)}k.b8(l)
n.h(0,k)
l=q.r
k=new U.e5()
i=U.jy()
i.sdf(0,!0)
i.sd_(6.283185307179586)
i.sd1(0)
i.sa1(0,0)
i.sd0(100)
i.sX(0)
i.scL(0.2)
k.b=i
i.gC().h(0,k.gaQ())
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
h=new X.ax(!0,!1,!1)
g=k.c
k.c=h
i=new D.L("modifiers",g,h,k,j)
i.b=!0
k.S(i)
k.b8(l)
n.h(0,k)
l=q.r
k=new U.e7()
k.c=0.01
k.d=0
k.e=0
h=new X.ax(!1,!1,!1)
k.b=h
j=new D.L("modifiers",null,h,k,j)
j.b=!0
k.S(j)
k.b8(l)
n.h(0,k)
p.sbd(n)
f=q.f.eQ("../resources/Dirt.png")
e=q.f.eQ("../resources/Grass.png")
d=new O.dw()
d.shb(O.jx(V.aj))
d.e.bl(d.ghM(),d.ghO())
n=new O.aS(d,"emission")
n.c=C.d
n.f=new V.a7(0,0,0)
d.f=n
n=new O.aS(d,"ambient")
n.c=C.d
n.f=new V.a7(0,0,0)
d.r=n
n=new O.aS(d,"diffuse")
n.c=C.d
n.f=new V.a7(0,0,0)
d.x=n
n=new O.aS(d,"invDiffuse")
n.c=C.d
n.f=new V.a7(0,0,0)
d.y=n
n=new O.fz(d,"specular")
n.c=C.d
n.f=new V.a7(0,0,0)
n.ch=100
d.z=n
n=new O.fw(d,"bump")
n.c=C.d
d.Q=n
d.ch=null
n=new O.aS(d,"reflect")
n.c=C.d
n.f=new V.a7(0,0,0)
d.cx=n
n=new O.fy(d,"refract")
n.c=C.d
n.f=new V.a7(0,0,0)
n.ch=1
d.cy=n
n=new O.fv(d,"alpha")
n.c=C.d
n.f=1
d.db=n
n=new D.dr()
n.c3(D.a2)
n.shk(H.b([],[D.bm]))
n.siz(H.b([],[D.dG]))
n.siY(H.b([],[D.dN]))
n.sja(H.b([],[D.dV]))
n.sjb(H.b([],[D.dW]))
n.sjc(H.b([],[D.dX]))
n.Q=null
n.ch=null
n.dj(n.ghK(),n.gim(),n.gir())
d.dx=n
l=n.Q
if(l==null){l=D.Q()
n.Q=l
n=l}else n=l
n.h(0,d.giM())
n=d.dx
l=n.ch
if(l==null){l=D.Q()
n.ch=l
n=l}else n=l
n.h(0,d.gbo())
d.dy=null
n=d.dx
c=V.kO()
l=U.kg(V.ko(V.jF(),c,new V.z(-1,-1,-1)))
b=new V.a7(1,1,1)
k=new D.bm()
k.c=new V.a7(1,1,1)
k.a=V.kP()
g=k.b
k.b=l
l.gC().h(0,k.gfS())
m=new D.L("mover",g,k.b,k,[m])
m.b=!0
k.aC(m)
if(!k.c.A(0,b)){g=k.c
k.c=b
m=new D.L("color",g,b,k,[V.a7])
m.b=!0
k.aC(m)}n.h(0,k)
d.x.sb0(f)
d.y.sb0(e)
n=new M.de()
n.sfU(0,O.jx(o))
n.d.bl(n.ghS(),n.ghU())
n.e=null
n.f=null
n.r=null
n.x=null
a=X.m6(!0,!0,!1,null,2000,null,0)
a0=new X.dF()
a0.c=1.0471975511965976
a0.d=0.1
a0.e=2000
a0.sbd(null)
o=a0.c
if(!(Math.abs(o-1.0471975511965976)<$.G().a)){a0.c=1.0471975511965976
o=new D.L("fov",o,1.0471975511965976,a0,[P.r])
o.b=!0
a0.aN(o)}o=a0.d
if(!(Math.abs(o-0.1)<$.G().a)){a0.d=0.1
o=new D.L("near",o,0.1,a0,[P.r])
o.b=!0
a0.aN(o)}o=a0.e
if(!(Math.abs(o-2000)<$.G().a)){a0.e=2000
o=new D.L("far",o,2000,a0,[P.r])
o.b=!0
a0.aN(o)}o=n.a
if(o!==a0){if(o!=null)o.gC().I(0,n.gaq())
g=n.a
n.a=a0
a0.gC().h(0,n.gaq())
o=new D.L("camera",g,n.a,n,[X.d9])
o.b=!0
n.aD(o)}o=n.b
if(o!==a){if(o!=null)o.gC().I(0,n.gaq())
g=n.b
n.b=a
a.gC().h(0,n.gaq())
o=new D.L("target",g,n.b,n,[X.dS])
o.b=!0
n.aD(o)}n.sf6(null)
n.sf6(d)
n.d.h(0,p)
n.a.sbd(U.kg(V.aT(1,0,0,0,0,1,0,0,0,0,1,3,0,0,0,1)))
o=q.d
if(o!==n){if(o!=null)o.gC().I(0,q.gdq())
q.d=n
n.gC().h(0,q.gdq())
q.dr()}o=new V.fN("shapes",!0)
s=C.z.dg(s,"shapes")
o.c=s
if(s==null)H.o("Failed to find shapes for RadioGroup")
o.as(0,"Cube",new M.ja(p))
o.as(0,"Cuboid",new M.jb(p))
o.as(0,"Cylinder",new M.jc(p))
o.as(0,"Cone",new M.jd(p))
o.as(0,"LatLonSphere",new M.je(p))
o.as(0,"IsoSphere",new M.jf(p))
o.bt(0,"Sphere",new M.jg(p),!0)
o.as(0,"Toroid",new M.jh(p))
o.as(0,"Knot",new M.ji(p))
s=q.z
if(s==null){s=D.Q()
q.z=s}o={func:1,ret:-1,args:[D.y]}
n=H.k(new M.jj(u,d),o)
if(s.b==null)s.sb5(H.b([],[o]))
s=s.b;(s&&C.a).h(s,n)
V.nS(q)},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
jj:function jj(a,b){this.a=a
this.b=b}},A={
mk:function(a,b){var u,t
u=a.al
t=new A.fu(b,u)
t.fM(b,u)
t.fJ(a,b)
return t},
jH:function(a,b,c,d,e){var u=new A.hp(a,b,c,e)
u.f=d
u.sjd(P.mh(d,0,!1,P.l))
return u},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a){this.a=a},
fu:function fu(a,b){var _=this
_.by=_.ej=_.bx=_.al=_.ax=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eA=_.cO=_.ez=_.bL=_.ey=_.ex=_.bK=_.bJ=_.ew=_.ev=_.bI=_.bH=_.bG=_.eu=_.es=_.bF=_.er=_.eq=_.bE=_.ep=_.eo=_.bD=_.bC=_.en=_.em=_.bB=_.bA=_.el=_.ek=_.bz=null
_.cT=_.eE=_.cS=_.eD=_.cR=_.eC=_.cQ=_.eB=_.cP=null
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
_.ax=b3
_.al=b4
_.bx=b5},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cB:function cB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cE:function cE(a,b,c,d,e,f,g,h,i,j){var _=this
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
cF:function cF(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cs:function cs(){},
bB:function bB(a,b){this.a=a
this.b=b},
e0:function e0(){},
hv:function hv(a){this.a=a},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hr:function hr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hs:function hs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hu:function hu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hp:function hp(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hq:function hq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ht:function ht(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hw:function hw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cA:function cA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
az:function az(a,b,c,d){var _=this
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
jW:function(a,b,c,d){var u
H.k(c,{func:1,ret:-1,args:[F.a4,P.r,P.r]})
u=F.fY()
F.cT(u,b,c,d,a,1,0,0,1)
F.cT(u,b,c,d,a,0,1,0,3)
F.cT(u,b,c,d,a,0,0,1,2)
F.cT(u,b,c,d,a,-1,0,0,0)
F.cT(u,b,c,d,a,0,-1,0,0)
F.cT(u,b,c,d,a,0,0,-1,3)
u.ak()
return u},
iP:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cT:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.k(c,{func:1,ret:-1,args:[F.a4,P.r,P.r]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.z(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.z(o+a3,n+a1,m+a2)
u.b=l
k=new V.z(o-a3,n-a1,m-a2)
u.c=k
j=new V.z(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.iP(t)
f=F.iP(u.b)
e=F.jp(d,a0,new F.iO(u,F.iP(u.c),F.iP(u.d),f,g,c),b)
if(e!=null)a.aY(e)},
ld:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.k(e,{func:1,ret:P.r,args:[P.r]})
if(a0<3)return
u=F.fY()
t=b?-1:1
s=-6.283185307179586/a0
r=H.b([],[F.a4])
q=u.a
p=new V.z(0,0,t)
p=p.u(0,Math.sqrt(p.E(p)))
C.a.h(r,q.jE(new V.aU(a,-1,-1,-1),new V.au(1,1,1,1),new V.U(0,0,d),new V.z(0,0,t),new V.a_(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.B(k)
j=new V.z(m,l,t).u(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.bU(new V.aU(a,-1,-1,-1),null,new V.au(i,g,h,1),new V.U(m*k,l*k,d),new V.z(0,0,t),new V.a_(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.jC(r)
return u},
lb:function(a,b,c,d,e,f){return F.nt(!0,c,d,new F.iY(a,f),e)},
nt:function(a,b,c,d,e){var u
H.k(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
u=F.jp(c,e,new F.j_(d),null)
if(u==null)return
u.ak()
u.bu()
if(b)u.aY(F.ld(3,!1,!1,1,new F.j0(d),e))
u.aY(F.ld(1,!0,!1,-1,new F.j1(d),e))
return u},
nK:function(a,b){var u=F.jp(a,b,new F.j9(),null)
u.d.bQ()
u.ak()
u.bu()
return u},
an:function(a,b){var u,t,s,r,q,p,o,n,m,l,k
b=b.u(0,Math.sqrt(b.E(b)))
u=b.a
t=b.b
s=b.c
r=F.bU(null,null,null,new V.U(u,t,s),b,null,null,null,0)
q=a.kj(r,new F.cI())
if(q!=null)return q
p=u*0.5+0.5
o=t*0.5+0.5
n=s*0.5+0.5
if(p<0)p=0
else if(p>1)p=1
if(o<0)o=0
else if(o>1)o=1
if(n<0)n=0
else if(n>1)n=1
r.saw(0,new V.au(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.sb0(new V.a_(l,k<0?-k:k))
a.a.h(0,r)
return r},
X:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.bt(0,b,d,c)
else{u=F.an(a,b.r.n(0,c.r).v(0,0.5))
t=F.an(a,c.r.n(0,d.r).v(0,0.5))
s=F.an(a,d.r.n(0,b.r).v(0,0.5))
r=e-1
F.X(a,b,u,s,r)
F.X(a,u,c,t,r)
F.X(a,t,s,u,r)
F.X(a,s,t,d,r)}},
ln:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.jn()
t=F.jW(a,null,new F.jo(u,c),d)
t.bu()
return t},
nV:function(a,b,c,d){return F.lc(c,a,d,b,new F.jq())},
nJ:function(a,b,c,d,e,f){return F.lc(d,a,e,b,new F.j8(f,c))},
lc:function(a,b,c,d,e){var u=F.jp(a,b,new F.iZ(H.k(e,{func:1,ret:V.U,args:[P.r]}),d,b,c),null)
if(u==null)return
u.ak()
u.bu()
return u},
jp:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.a4,P.r,P.r]})
if(a<1)return
if(b<1)return
u=F.fY()
t=H.b([],[F.a4])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.bU(null,null,new V.au(p,0,0,1),null,null,new V.a_(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cK(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.bU(null,null,new V.au(j,i,h,1),null,null,new V.a_(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cK(d))}}u.d.jD(a+1,b+1,t)
return u},
bE:function(a,b,c){var u,t
u=new F.a3()
t=a.a
if(t==null)H.o(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.o(P.q("May not create a face with vertices attached to different shapes."))
u.cv(a)
u.cw(b)
u.iS(c)
C.a.h(u.a.a.d.b,u)
u.a.a.W()
return u},
md:function(a,b){var u,t
u=new F.b6()
t=a.a
if(t==null)H.o(P.q("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.o(P.q("May not create a line with vertices attached to different shapes."))
u.cv(a)
u.cw(b)
C.a.h(u.a.a.c.b,u)
u.a.a.W()
return u},
fY:function(){var u,t
u=new F.dM()
t=new F.hK(u)
t.b=!1
t.sje(H.b([],[F.a4]))
u.a=t
t=new F.h0(u)
t.sco(H.b([],[F.br]))
u.b=t
t=new F.h_(u)
t.shy(H.b([],[F.b6]))
u.c=t
t=new F.fZ(u)
t.sho(H.b([],[F.a3]))
u.d=t
u.e=null
return u},
bU:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.a4()
t=new F.hS(u)
t.sco(H.b([],[F.br]))
u.b=t
t=new F.hP(u)
s=[F.b6]
t.shz(H.b([],s))
t.shA(H.b([],s))
u.c=t
t=new F.hL(u)
s=[F.a3]
t.shp(H.b([],s))
t.shq(H.b([],s))
t.shr(H.b([],s))
u.d=t
h=$.lC()
u.e=0
t=$.bf()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.be().a)!==0?e:null
u.x=(s&$.bd().a)!==0?b:null
u.y=(s&$.bg().a)!==0?f:null
u.z=(s&$.bh().a)!==0?g:null
u.Q=(s&$.lD().a)!==0?c:null
u.ch=(s&$.c6().a)!==0?i:0
u.cx=(s&$.bc().a)!==0?a:null
return u},
iO:function iO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iY:function iY(a,b){this.a=a
this.b=b},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
j9:function j9(){},
jn:function jn(){},
jo:function jo(a,b){this.a=a
this.b=b},
jq:function jq(){},
j8:function j8(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f_:function f_(){},
h5:function h5(){},
b6:function b6(){this.b=this.a=null},
fh:function fh(){},
ho:function ho(){},
br:function br(){this.a=null},
dM:function dM(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fZ:function fZ(a){this.a=a
this.b=null},
h_:function h_(a){this.a=a
this.b=null},
h0:function h0(a){this.a=a
this.b=null},
a4:function a4(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hU:function hU(a){this.a=a},
hT:function hT(a){this.a=a},
hK:function hK(a){this.a=a
this.c=this.b=null},
hL:function hL(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hM:function hM(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
hP:function hP(a){this.a=a
this.c=this.b=null},
hQ:function hQ(){},
cI:function cI(){},
hR:function hR(){},
hO:function hO(){},
fH:function fH(){},
hS:function hS(a){this.a=a
this.b=null}},T={cw:function cw(){},dU:function dU(){},hd:function hd(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},he:function he(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},hf:function hf(a,b,c,d,e,f,g){var _=this
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
H.jC.prototype={}
J.a9.prototype={
A:function(a,b){return a===b},
gL:function(a){return H.cq(a)},
i:function(a){return"Instance of '"+H.bO(a)+"'"}}
J.fd.prototype={
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$iN:1}
J.dm.prototype={
A:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$iE:1}
J.dn.prototype={
gL:function(a){return 0},
i:function(a){return String(a)}}
J.fK.prototype={}
J.bt.prototype={}
J.b5.prototype={
i:function(a){var u=a[$.lq()]
if(u==null)return this.fF(a)
return"JavaScript function for "+H.j(J.ap(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibo:1}
J.aH.prototype={
h:function(a,b){H.x(b,H.t(a,0))
if(!!a.fixed$length)H.o(P.Z("add"))
a.push(b)},
kV:function(a,b){var u
if(!!a.fixed$length)H.o(P.Z("removeAt"))
u=a.length
if(b>=u)throw H.c(P.dJ(b,null,null))
return a.splice(b,1)[0]},
I:function(a,b){var u
if(!!a.fixed$length)H.o(P.Z("remove"))
for(u=0;u<a.length;++u)if(J.D(a[u],b)){a.splice(u,1)
return!0}return!1},
a0:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.b1(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.q(u,t,H.j(a[t]))
return u.join(b)},
kx:function(a){return this.l(a,"")},
kp:function(a,b,c,d){var u,t,s
H.x(b,d)
H.k(c,{func:1,ret:d,args:[d,H.t(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.b1(a))}return t},
ko:function(a,b,c){var u,t,s
H.k(b,{func:1,ret:P.N,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.b1(a))}throw H.c(H.fb())},
kn:function(a,b){return this.ko(a,b,null)},
a9:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
fC:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a8(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.a8(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.t(a,0)])
return H.b(a.slice(b,c),[H.t(a,0)])},
gkm:function(a){if(a.length>0)return a[0]
throw H.c(H.fb())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fb())},
fz:function(a,b,c,d,e){var u,t,s
u=H.t(a,0)
H.h(d,"$in",[u],"$an")
if(!!a.immutable$list)H.o(P.Z("setRange"))
P.ba(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.h(d,"$ia",[u],"$aa")
u=J.c2(d)
if(e+t>u.gm(d))throw H.c(H.m9())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.k(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.k(d,e+s)},
bm:function(a,b,c,d){return this.fz(a,b,c,d,0)},
e5:function(a,b){var u,t
H.k(b,{func:1,ret:P.N,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.b1(a))}return!1},
Y:function(a,b){var u
for(u=0;u<a.length;++u)if(J.D(a[u],b))return!0
return!1},
i:function(a){return P.jA(a,"[","]")},
gV:function(a){return new J.at(a,a.length,0,[H.t(a,0)])},
gL:function(a){return H.cq(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.o(P.Z("set length"))
if(b<0)throw H.c(P.a8(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(b>=a.length||b<0)throw H.c(H.c0(a,b))
return a[b]},
q:function(a,b,c){H.x(c,H.t(a,0))
if(!!a.immutable$list)H.o(P.Z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.c0(a,b))
a[b]=c},
n:function(a,b){var u,t
u=[H.t(a,0)]
H.h(b,"$ia",u,"$aa")
t=C.f.n(a.length,b.gm(b))
u=H.b([],u)
this.sm(u,t)
this.bm(u,0,a.length,a)
this.bm(u,a.length,t,b)
return u},
$in:1,
$ia:1}
J.jB.prototype={}
J.at.prototype={
gM:function(){return this.d},
G:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.A(u))
s=this.c
if(s>=t){this.sdI(null)
return!1}this.sdI(u[s]);++this.c
return!0},
sdI:function(a){this.d=H.x(a,H.t(this,0))},
$iaQ:1}
J.bq.prototype={
l8:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.Z(""+a+".toInt()"))},
cU:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.Z(""+a+".floor()"))},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.Z(""+a+".round()"))},
f8:function(a,b){var u,t
if(b>20)throw H.c(P.a8(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bi:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a8(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a2(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.o(P.Z("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.v("0",r)},
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
n:function(a,b){if(typeof b!=="number")throw H.c(H.ao(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.ao(b))
return a-b},
v:function(a,b){if(typeof b!=="number")throw H.c(H.ao(b))
return a*b},
bk:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fI:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dZ(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dZ(a,b)},
dZ:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.Z("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
aS:function(a,b){var u
if(a>0)u=this.dY(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iX:function(a,b){if(b<0)throw H.c(H.ao(b))
return this.dY(a,b)},
dY:function(a,b){return b>31?0:a>>>b},
$ir:1,
$iag:1}
J.dl.prototype={$il:1}
J.dk.prototype={}
J.b4.prototype={
a2:function(a,b){if(b<0)throw H.c(H.c0(a,b))
if(b>=a.length)H.o(H.c0(a,b))
return a.charCodeAt(b)},
J:function(a,b){if(b>=a.length)throw H.c(H.c0(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.c(P.ju(b,null,null))
return a+b},
b_:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.o(H.ao(b))
c=P.ba(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ac:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.o(H.ao(c))
if(typeof c!=="number")return c.Z()
if(c<0||c>a.length)throw H.c(P.a8(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.ac(a,b,0)},
w:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.o(H.ao(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Z()
if(b<0)throw H.c(P.dJ(b,null,null))
if(b>c)throw H.c(P.dJ(b,null,null))
if(c>a.length)throw H.c(P.dJ(c,null,null))
return a.substring(b,c)},
ap:function(a,b){return this.w(a,b,null)},
la:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.S)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kK:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.v(c,u)+a},
ag:function(a,b){return this.kK(a,b," ")},
eN:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a8(c,0,a.length,null,null))
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
$ikr:1,
$if:1}
H.u.prototype={
gm:function(a){return this.a.length},
k:function(a,b){return C.c.a2(this.a,b)},
$acG:function(){return[P.l]},
$aT:function(){return[P.l]},
$an:function(){return[P.l]},
$aa:function(){return[P.l]}}
H.eT.prototype={}
H.bK.prototype={
gV:function(a){return new H.ci(this,this.gm(this),0,[H.ac(this,"bK",0)])},
bW:function(a,b){return this.fE(0,H.k(b,{func:1,ret:P.N,args:[H.ac(this,"bK",0)]}))}}
H.ci.prototype={
gM:function(){return this.d},
G:function(){var u,t,s,r
u=this.a
t=J.c2(u)
s=t.gm(u)
if(this.b!==s)throw H.c(P.b1(u))
r=this.c
if(r>=s){this.sb3(null)
return!1}this.sb3(t.a9(u,r));++this.c
return!0},
sb3:function(a){this.d=H.x(a,H.t(this,0))},
$iaQ:1}
H.fr.prototype={
gV:function(a){return new H.fs(J.bx(this.a),this.b,this.$ti)},
gm:function(a){return J.aF(this.a)},
a9:function(a,b){return this.b.$1(J.eA(this.a,b))},
$an:function(a,b){return[b]}}
H.fs.prototype={
G:function(){var u=this.b
if(u.G()){this.sb3(this.c.$1(u.gM()))
return!0}this.sb3(null)
return!1},
gM:function(){return this.a},
sb3:function(a){this.a=H.x(a,H.t(this,1))},
$aaQ:function(a,b){return[b]}}
H.ft.prototype={
gm:function(a){return J.aF(this.a)},
a9:function(a,b){return this.b.$1(J.eA(this.a,b))},
$abK:function(a,b){return[b]},
$an:function(a,b){return[b]}}
H.cJ.prototype={
gV:function(a){return new H.hX(J.bx(this.a),this.b,this.$ti)}}
H.hX.prototype={
G:function(){var u,t
for(u=this.a,t=this.b;u.G();)if(t.$1(u.gM()))return!0
return!1},
gM:function(){return this.a.gM()}}
H.bF.prototype={}
H.cG.prototype={
q:function(a,b,c){H.x(c,H.ac(this,"cG",0))
throw H.c(P.Z("Cannot modify an unmodifiable list"))}}
H.e2.prototype={}
H.eL.prototype={
i:function(a){return P.jE(this)},
q:function(a,b,c){H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
return H.m0()},
$iH:1}
H.eM.prototype={
gm:function(a){return this.a},
bv:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k:function(a,b){if(!this.bv(b))return
return this.dJ(b)},
dJ:function(a){return this.b[H.F(a)]},
a0:function(a,b){var u,t,s,r,q
u=H.t(this,1)
H.k(b,{func:1,ret:-1,args:[H.t(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.x(this.dJ(q),u))}}}
H.fQ.prototype={}
H.hl.prototype={
af:function(a){var u,t,s
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
H.fI.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ff.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.j(this.a)+")"}}
H.hz.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jr.prototype={
$1:function(a){if(!!J.S(a).$ibn)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.el.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$ias:1}
H.ca.prototype={
i:function(a){return"Closure '"+H.bO(this).trim()+"'"},
$ibo:1,
gli:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hc.prototype={}
H.h6.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c5(u)+"'"}}
H.c8.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c8))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var u,t
u=this.c
if(u==null)t=H.cq(this.a)
else t=typeof u!=="object"?J.d1(u):H.cq(u)
return(t^H.cq(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bO(u)+"'")}}
H.hn.prototype={
i:function(a){return this.a}}
H.eH.prototype={
i:function(a){return this.a}}
H.fV.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.aJ.prototype={
gm:function(a){return this.a},
gkw:function(a){return this.a===0},
gay:function(){return new H.fj(this,[H.t(this,0)])},
bv:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.dF(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dF(t,a)}else return this.kt(a)},
kt:function(a){var u=this.d
if(u==null)return!1
return this.cX(this.cb(u,this.cW(a)),a)>=0},
k:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bp(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bp(r,b)
s=t==null?null:t.b
return s}else return this.ku(b)},
ku:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.cb(u,this.cW(a))
s=this.cX(t,a)
if(s<0)return
return t[s].b},
q:function(a,b,c){var u,t
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cm()
this.b=u}this.du(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cm()
this.c=t}this.du(t,b,c)}else this.kv(b,c)},
kv:function(a,b){var u,t,s,r
H.x(a,H.t(this,0))
H.x(b,H.t(this,1))
u=this.d
if(u==null){u=this.cm()
this.d=u}t=this.cW(a)
s=this.cb(u,t)
if(s==null)this.ct(u,t,[this.c5(a,b)])
else{r=this.cX(s,a)
if(r>=0)s[r].b=b
else s.push(this.c5(a,b))}},
a0:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.b1(this))
u=u.c}},
du:function(a,b,c){var u
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
u=this.bp(a,b)
if(u==null)this.ct(a,b,this.c5(b,c))
else u.b=c},
h5:function(){this.r=this.r+1&67108863},
c5:function(a,b){var u,t
u=new H.fi(H.x(a,H.t(this,0)),H.x(b,H.t(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.h5()
return u},
cW:function(a){return J.d1(a)&0x3ffffff},
cX:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1},
i:function(a){return P.jE(this)},
bp:function(a,b){return a[b]},
cb:function(a,b){return a[b]},
ct:function(a,b,c){a[b]=c},
hj:function(a,b){delete a[b]},
dF:function(a,b){return this.bp(a,b)!=null},
cm:function(){var u=Object.create(null)
this.ct(u,"<non-identifier-key>",u)
this.hj(u,"<non-identifier-key>")
return u},
$ikl:1}
H.fi.prototype={}
H.fj.prototype={
gm:function(a){return this.a.a},
gV:function(a){var u,t
u=this.a
t=new H.fk(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fk.prototype={
gM:function(){return this.d},
G:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.b1(u))
else{u=this.c
if(u==null){this.sdv(null)
return!1}else{this.sdv(u.a)
this.c=this.c.c
return!0}}},
sdv:function(a){this.d=H.x(a,H.t(this,0))},
$iaQ:1}
H.j4.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.j5.prototype={
$2:function(a,b){return this.a(a,b)},
$S:52}
H.j6.prototype={
$1:function(a){return this.a(H.F(a))},
$S:49}
H.fe.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikr:1,
$imz:1}
H.bM.prototype={$ibM:1,$imH:1}
H.dz.prototype={
gm:function(a){return a.length},
$iaI:1,
$aaI:function(){}}
H.dA.prototype={
k:function(a,b){H.bb(b,a,a.length)
return a[b]},
q:function(a,b,c){H.nv(c)
H.bb(b,a,a.length)
a[b]=c},
$abF:function(){return[P.r]},
$aT:function(){return[P.r]},
$in:1,
$an:function(){return[P.r]},
$ia:1,
$aa:function(){return[P.r]}}
H.dB.prototype={
q:function(a,b,c){H.ad(c)
H.bb(b,a,a.length)
a[b]=c},
$abF:function(){return[P.l]},
$aT:function(){return[P.l]},
$in:1,
$an:function(){return[P.l]},
$ia:1,
$aa:function(){return[P.l]}}
H.fB.prototype={
k:function(a,b){H.bb(b,a,a.length)
return a[b]}}
H.fC.prototype={
k:function(a,b){H.bb(b,a,a.length)
return a[b]}}
H.fD.prototype={
k:function(a,b){H.bb(b,a,a.length)
return a[b]}}
H.fE.prototype={
k:function(a,b){H.bb(b,a,a.length)
return a[b]}}
H.dC.prototype={
gm:function(a){return a.length},
k:function(a,b){H.bb(b,a,a.length)
return a[b]},
$ioh:1}
H.cn.prototype={
gm:function(a){return a.length},
k:function(a,b){H.bb(b,a,a.length)
return a[b]},
$icn:1,
$iM:1}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
H.cQ.prototype={}
P.hZ.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:21}
P.hY.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:48}
P.i_.prototype={
$0:function(){this.a.$0()},
$S:0}
P.i0.prototype={
$0:function(){this.a.$0()},
$S:0}
P.em.prototype={
h2:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.c_(new P.iD(this,b),0),a)
else throw H.c(P.Z("`setTimeout()` not found."))},
h3:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.c_(new P.iC(this,a,Date.now(),b),0),a)
else throw H.c(P.Z("Periodic timer."))},
$iaW:1}
P.iD.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.iC.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fI(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.b_.prototype={
kB:function(a){if(this.c!==6)return!0
return this.b.b.da(H.k(this.d,{func:1,ret:P.N,args:[P.K]}),a.a,P.N,P.K)},
ks:function(a){var u,t,s,r
u=this.e
t=P.K
s={futureOr:1,type:H.t(this,1)}
r=this.b.b
if(H.ev(u,{func:1,args:[P.K,P.as]}))return H.jX(r.l1(u,a.a,a.b,null,t,P.as),s)
else return H.jX(r.da(H.k(u,{func:1,args:[P.K]}),a.a,null,t),s)}}
P.aD.prototype={
f7:function(a,b,c){var u,t,s,r
u=H.t(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.W
if(t!==C.l){t.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.nh(b,t)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aD(0,$.W,[c])
r=b==null?1:3
this.dz(new P.b_(s,r,a,b,[u,c]))
return s},
l7:function(a,b){return this.f7(a,null,b)},
dz:function(a){var u,t
u=this.a
if(u<=1){a.a=H.d(this.c,"$ib_")
this.c=a}else{if(u===2){t=H.d(this.c,"$iaD")
u=t.a
if(u<4){t.dz(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.iW(null,null,u,H.k(new P.i8(this,a),{func:1,ret:-1}))}},
dV:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.d(this.c,"$ib_")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.d(this.c,"$iaD")
t=p.a
if(t<4){p.dV(a)
return}this.a=t
this.c=p.c}u.a=this.br(a)
t=this.b
t.toString
P.iW(null,null,t,H.k(new P.ic(u,this),{func:1,ret:-1}))}},
cq:function(){var u=H.d(this.c,"$ib_")
this.c=null
return this.br(u)},
br:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dB:function(a){var u,t,s
u=H.t(this,0)
H.jX(a,{futureOr:1,type:u})
t=this.$ti
if(H.cW(a,"$ice",t,"$ace"))if(H.cW(a,"$iaD",t,null))P.kR(a,this)
else P.mT(a,this)
else{s=this.cq()
H.x(a,u)
this.a=4
this.c=a
P.cM(this,s)}},
dC:function(a,b){var u
H.d(b,"$ias")
u=this.cq()
this.a=8
this.c=new P.ah(a,b)
P.cM(this,u)},
$ice:1}
P.i8.prototype={
$0:function(){P.cM(this.a,this.b)},
$S:0}
P.ic.prototype={
$0:function(){P.cM(this.b,this.a.a)},
$S:0}
P.i9.prototype={
$1:function(a){var u=this.a
u.a=0
u.dB(a)},
$S:21}
P.ia.prototype={
$2:function(a,b){H.d(b,"$ias")
this.a.dC(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.ib.prototype={
$0:function(){this.a.dC(this.b,this.c)},
$S:0}
P.ig.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.f5(H.k(r.d,{func:1}),null)}catch(q){t=H.ae(q)
s=H.c3(q)
if(this.d){r=H.d(this.a.a.c,"$iah").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.d(this.a.a.c,"$iah")
else p.b=new P.ah(t,s)
p.a=!0
return}if(!!J.S(u).$ice){if(u instanceof P.aD&&u.a>=4){if(u.a===8){r=this.b
r.b=H.d(u.c,"$iah")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.l7(new P.ih(o),null)
r.a=!1}},
$S:3}
P.ih.prototype={
$1:function(a){return this.a},
$S:46}
P.ie.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.t(s,0)
q=H.x(this.c,r)
p=H.t(s,1)
this.a.b=s.b.b.da(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ae(o)
t=H.c3(o)
s=this.a
s.b=new P.ah(u,t)
s.a=!0}},
$S:3}
P.id.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.d(this.a.a.c,"$iah")
r=this.c
if(r.kB(u)&&r.e!=null){q=this.b
q.b=r.ks(u)
q.a=!1}}catch(p){t=H.ae(p)
s=H.c3(p)
r=H.d(this.a.a.c,"$iah")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ah(t,s)
n.a=!0}},
$S:3}
P.e9.prototype={}
P.h7.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.aD(0,$.W,[P.l])
u.a=0
s=H.t(this,0)
r=H.k(new P.h9(u,this),{func:1,ret:-1,args:[s]})
H.k(new P.ha(u,t),{func:1,ret:-1})
W.a5(this.a,this.b,r,!1,s)
return t}}
P.h9.prototype={
$1:function(a){H.x(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.t(this.b,0)]}}}
P.ha.prototype={
$0:function(){this.b.dB(this.a.a)},
$S:0}
P.cu.prototype={}
P.h8.prototype={}
P.aW.prototype={}
P.ah.prototype={
i:function(a){return H.j(this.a)},
$ibn:1}
P.iN.prototype={$iow:1}
P.iV.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dE()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.im.prototype={
l2:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
try{if(C.l===$.W){a.$0()
return}P.l2(null,null,this,a,-1)}catch(s){u=H.ae(s)
t=H.c3(s)
P.iU(null,null,this,u,H.d(t,"$ias"))}},
l3:function(a,b,c){var u,t,s
H.k(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.l===$.W){a.$1(b)
return}P.l3(null,null,this,a,b,-1,c)}catch(s){u=H.ae(s)
t=H.c3(s)
P.iU(null,null,this,u,H.d(t,"$ias"))}},
jM:function(a,b){return new P.ip(this,H.k(a,{func:1,ret:b}),b)},
cD:function(a){return new P.io(this,H.k(a,{func:1,ret:-1}))},
e8:function(a,b){return new P.iq(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
f5:function(a,b){H.k(a,{func:1,ret:b})
if($.W===C.l)return a.$0()
return P.l2(null,null,this,a,b)},
da:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.W===C.l)return a.$1(b)
return P.l3(null,null,this,a,b,c,d)},
l1:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.W===C.l)return a.$2(b,c)
return P.ni(null,null,this,a,b,c,d,e,f)}}
P.ip.prototype={
$0:function(){return this.a.f5(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.io.prototype={
$0:function(){return this.a.l2(this.b)},
$S:3}
P.iq.prototype={
$1:function(a){var u=this.c
return this.a.l3(this.b,H.x(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ik.prototype={
gV:function(a){var u=new P.ef(this,this.r,this.$ti)
u.c=this.e
return u},
gm:function(a){return this.a},
Y:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.d(u[b],"$ibV")!=null}else{t=this.hf(b)
return t}},
hf:function(a){var u=this.d
if(u==null)return!1
return this.c9(this.dK(u,a),a)>=0},
h:function(a,b){var u,t
H.x(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.jM()
this.b=u}return this.dw(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.jM()
this.c=t}return this.dw(t,b)}else return this.h6(b)},
h6:function(a){var u,t,s
H.x(a,H.t(this,0))
u=this.d
if(u==null){u=P.jM()
this.d=u}t=this.dD(a)
s=u[t]
if(s==null)u[t]=[this.cn(a)]
else{if(this.c9(s,a)>=0)return!1
s.push(this.cn(a))}return!0},
I:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iF(this.c,b)
else return this.iC(b)},
iC:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.dK(u,a)
s=this.c9(t,a)
if(s<0)return!1
this.e_(t.splice(s,1)[0])
return!0},
dw:function(a,b){H.x(b,H.t(this,0))
if(H.d(a[b],"$ibV")!=null)return!1
a[b]=this.cn(b)
return!0},
iF:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$ibV")
if(u==null)return!1
this.e_(u)
delete a[b]
return!0},
dP:function(){this.r=1073741823&this.r+1},
cn:function(a){var u,t
u=new P.bV(H.x(a,H.t(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dP()
return u},
e_:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dP()},
dD:function(a){return J.d1(a)&1073741823},
dK:function(a,b){return a[this.dD(b)]},
c9:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1}}
P.bV.prototype={}
P.ef.prototype={
gM:function(){return this.d},
G:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.b1(u))
else{u=this.c
if(u==null){this.sdA(null)
return!1}else{this.sdA(H.x(u.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
sdA:function(a){this.d=H.x(a,H.t(this,0))},
$iaQ:1}
P.fl.prototype={
$2:function(a,b){this.a.q(0,H.x(a,this.b),H.x(b,this.c))},
$S:8}
P.fm.prototype={$in:1,$ia:1}
P.T.prototype={
gV:function(a){return new H.ci(a,this.gm(a),0,[H.cY(this,a,"T",0)])},
a9:function(a,b){return this.k(a,b)},
l9:function(a,b){var u,t
u=H.b([],[H.cY(this,a,"T",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.q(u,t,this.k(a,t))
return u},
dc:function(a){return this.l9(a,!0)},
n:function(a,b){var u,t
u=[H.cY(this,a,"T",0)]
H.h(b,"$ia",u,"$aa")
t=H.b([],u)
C.a.sm(t,C.f.n(this.gm(a),b.gm(b)))
C.a.bm(t,0,this.gm(a),a)
C.a.bm(t,this.gm(a),t.length,b)
return t},
ki:function(a,b,c,d){var u
H.x(d,H.cY(this,a,"T",0))
P.ba(b,c,this.gm(a),null,null,null)
for(u=b;u<c;++u)this.q(a,u,d)},
i:function(a){return P.jA(a,"[","]")}}
P.fo.prototype={}
P.fp.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.j(a)
u.a=t+": "
u.a+=H.j(b)},
$S:8}
P.bL.prototype={
a0:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.ac(this,"bL",0),H.ac(this,"bL",1)]})
for(u=J.bx(this.gay());u.G();){t=u.gM()
b.$2(t,this.k(0,t))}},
gm:function(a){return J.aF(this.gay())},
i:function(a){return P.jE(this)},
$iH:1}
P.iE.prototype={
q:function(a,b,c){H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
throw H.c(P.Z("Cannot modify unmodifiable map"))}}
P.fq.prototype={
k:function(a,b){return this.a.k(0,b)},
q:function(a,b,c){this.a.q(0,H.x(b,H.t(this,0)),H.x(c,H.t(this,1)))},
a0:function(a,b){this.a.a0(0,H.k(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gm:function(a){var u=this.a
return u.gm(u)},
i:function(a){return J.ap(this.a)},
$iH:1}
P.e3.prototype={}
P.is.prototype={
at:function(a,b){var u
for(u=J.bx(H.h(b,"$in",this.$ti,"$an"));u.G();)this.h(0,u.gM())},
i:function(a){return P.jA(this,"{","}")},
a9:function(a,b){var u,t,s
if(b<0)H.o(P.a8(b,0,null,"index",null))
for(u=P.mX(this,this.r,H.t(this,0)),t=0;u.G();){s=u.d
if(b===t)return s;++t}throw H.c(P.bH(b,this,"index",null,t))},
$in:1,
$iky:1}
P.eg.prototype={}
P.eq.prototype={}
P.eD.prototype={
kC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.ba(b,c,a.length,null,null,null)
u=$.lF()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.c.J(a,t)
if(m===37){l=n+2
if(l<=c){k=H.j3(C.c.J(a,n))
j=H.j3(C.c.J(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.c.a2("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.af("")
g=r.a+=C.c.w(a,s,t)
r.a=g+H.bP(m)
s=n
continue}}throw H.c(P.a1("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.c.w(a,s,c)
f=g.length
if(q>=0)P.kb(a,p,c,q,o,f)
else{e=C.f.bk(f-1,4)+1
if(e===1)throw H.c(P.a1("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.b_(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.kb(a,p,c,q,o,d)
else{e=C.f.bk(d,4)
if(e===1)throw H.c(P.a1("Invalid base64 encoding length ",a,c))
if(e>1)a=C.c.b_(a,c,c,e===2?"==":"=")}return a},
$abA:function(){return[[P.a,P.l],P.f]}}
P.eE.prototype={
$abl:function(){return[[P.a,P.l],P.f]}}
P.bA.prototype={}
P.bl.prototype={}
P.eV.prototype={
$abA:function(){return[P.f,[P.a,P.l]]}}
P.f9.prototype={
i:function(a){return this.a}}
P.f8.prototype={
hg:function(a,b,c){var u,t,s,r,q,p
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
if(c>b)q.a+=J.lU(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abl:function(){return[P.f,P.f]}}
P.hG.prototype={
gkh:function(){return C.T}}
P.hI.prototype={
b9:function(a,b,c){var u,t,s
c=P.ba(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iL(t)
if(s.hs(a,b,c)!==c)s.e1(J.lO(a,c-1),0)
return new Uint8Array(t.subarray(0,H.nc(0,s.b,t.length)))},
cJ:function(a){return this.b9(a,0,null)},
$abl:function(){return[P.f,[P.a,P.l]]}}
P.iL.prototype={
e1:function(a,b){var u,t,s,r,q
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
hs:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a2(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.J(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.e1(r,C.c.J(a,p)))s=p}else if(r<=2047){q=this.b
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
P.hH.prototype={
b9:function(a,b,c){var u,t,s,r
H.h(a,"$ia",[P.l],"$aa")
u=P.mK(!1,a,b,c)
if(u!=null)return u
c=P.ba(b,c,J.aF(a),null,null,null)
t=new P.af("")
s=new P.iJ(!1,t)
s.b9(a,b,c)
if(s.e>0){H.o(P.a1("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.bP(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cJ:function(a){return this.b9(a,0,null)},
$abl:function(){return[[P.a,P.l],P.f]}}
P.iJ.prototype={
b9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.h(a,"$ia",[P.l],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.iK(this,b,c,a)
$label0$0:for(q=J.c2(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.k(a,o)
if(typeof n!=="number")return n.bY()
if((n&192)!==128){m=P.a1("Bad UTF-8 encoding 0x"+C.f.bi(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.e(C.H,m)
if(u<=C.H[m]){m=P.a1("Overlong encoding of 0x"+C.f.bi(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a1("Character outside valid Unicode range: 0x"+C.f.bi(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.bP(u)
this.c=!1}for(m=o<c;m;){l=P.nj(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.k(a,k)
if(typeof n!=="number")return n.Z()
if(n<0){i=P.a1("Negative UTF-8 code unit: -0x"+C.f.bi(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a1("Bad UTF-8 encoding 0x"+C.f.bi(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.iK.prototype={
$2:function(a,b){this.a.b.a+=P.dP(this.d,a,b)},
$S:45}
P.N.prototype={}
P.ai.prototype={
A:function(a,b){if(b==null)return!1
return b instanceof P.ai&&this.a===b.a&&!0},
gL:function(a){var u=this.a
return(u^C.f.aS(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.m1(H.mu(this))
t=P.db(H.ms(this))
s=P.db(H.mo(this))
r=P.db(H.mp(this))
q=P.db(H.mr(this))
p=P.db(H.mt(this))
o=P.m2(H.mq(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.r.prototype={}
P.aP.prototype={
n:function(a,b){return new P.aP(C.f.n(this.a,b.ghl()))},
t:function(a,b){return new P.aP(C.f.t(this.a,b.ghl()))},
A:function(a,b){if(b==null)return!1
return b instanceof P.aP&&this.a===b.a},
gL:function(a){return C.f.gL(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eS()
t=this.a
if(t<0)return"-"+new P.aP(0-t).i(0)
s=u.$1(C.f.a6(t,6e7)%60)
r=u.$1(C.f.a6(t,1e6)%60)
q=new P.eR().$1(t%1e6)
return""+C.f.a6(t,36e8)+":"+H.j(s)+":"+H.j(r)+"."+H.j(q)}}
P.eR.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:20}
P.eS.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:20}
P.bn.prototype={}
P.dE.prototype={
i:function(a){return"Throw of null."}}
P.aG.prototype={
gc8:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc7:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gc8()+t+s
if(!this.a)return r
q=this.gc7()
p=P.eX(this.b)
return r+q+": "+p}}
P.bQ.prototype={
gc8:function(){return"RangeError"},
gc7:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.j(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.j(u)
else if(s>u)t=": Not in range "+H.j(u)+".."+H.j(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.j(u)}return t}}
P.fa.prototype={
gc8:function(){return"RangeError"},
gc7:function(){var u,t
u=H.ad(this.b)
if(typeof u!=="number")return u.Z()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.j(t)},
gm:function(a){return this.f}}
P.hA.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hx.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bS.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eK.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eX(u)+"."}}
P.fJ.prototype={
i:function(a){return"Out of Memory"},
$ibn:1}
P.dO.prototype={
i:function(a){return"Stack Overflow"},
$ibn:1}
P.eO.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ec.prototype={
i:function(a){return"Exception: "+this.a}}
P.f4.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.w(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.J(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.a2(r,m)
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
return t+h+f+g+"\n"+C.c.v(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.j(s)+")"):t}}
P.bo.prototype={}
P.l.prototype={}
P.n.prototype={
bW:function(a,b){var u=H.ac(this,"n",0)
return new H.cJ(this,H.k(b,{func:1,ret:P.N,args:[u]}),[u])},
gm:function(a){var u,t
u=this.gV(this)
for(t=0;u.G();)++t
return t},
gaL:function(a){var u,t
u=this.gV(this)
if(!u.G())throw H.c(H.fb())
t=u.gM()
if(u.G())throw H.c(H.ma())
return t},
a9:function(a,b){var u,t,s
if(b<0)H.o(P.a8(b,0,null,"index",null))
for(u=this.gV(this),t=0;u.G();){s=u.gM()
if(b===t)return s;++t}throw H.c(P.bH(b,this,"index",null,t))},
i:function(a){return P.m8(this,"(",")")}}
P.aQ.prototype={}
P.a.prototype={$in:1}
P.H.prototype={}
P.E.prototype={
gL:function(a){return P.K.prototype.gL.call(this,this)},
i:function(a){return"null"}}
P.ag.prototype={}
P.K.prototype={constructor:P.K,$iK:1,
A:function(a,b){return this===b},
gL:function(a){return H.cq(this)},
i:function(a){return"Instance of '"+H.bO(this)+"'"},
toString:function(){return this.i(this)}}
P.as.prototype={}
P.f.prototype={$ikr:1}
P.af.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$io5:1}
P.hF.prototype={
$2:function(a,b){var u,t,s,r
u=P.f
H.h(a,"$iH",[u,u],"$aH")
H.F(b)
t=J.cX(b).eM(b,"=")
if(t===-1){if(b!=="")a.q(0,P.jO(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.w(b,0,t)
r=C.c.ap(b,t+1)
u=this.a
a.q(0,P.jO(s,0,s.length,u,!0),P.jO(r,0,r.length,u,!0))}return a},
$S:43}
P.hC.prototype={
$2:function(a,b){throw H.c(P.a1("Illegal IPv4 address, "+a,this.a,b))},
$S:42}
P.hD.prototype={
$2:function(a,b){throw H.c(P.a1("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:41}
P.hE.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.ex(C.c.w(this.b,a,b),null,16)
if(typeof u!=="number")return u.Z()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:40}
P.bW.prototype={
gfe:function(){return this.b},
gcV:function(a){var u=this.c
if(u==null)return""
if(C.c.a5(u,"["))return C.c.w(u,1,u.length-1)
return u},
gbO:function(a){var u=this.d
if(u==null)return P.kV(this.a)
return u},
gd5:function(){var u=this.f
return u==null?"":u},
geH:function(){var u=this.r
return u==null?"":u},
d9:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
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
g=P.jN(g,0,0,h)
return new P.bW(i,j,c,f,d,g,this.r)},
f3:function(a,b){return this.d9(a,null,null,null,null,null,null,b,null,null)},
gd6:function(){var u,t
if(this.Q==null){u=this.f
t=P.f
this.siB(new P.e3(P.kI(u==null?"":u,C.m),[t,t]))}return this.Q},
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
if(!!J.S(b).$ijI)if(this.a==b.gc1())if(this.c!=null===b.geI())if(this.b==b.gfe())if(this.gcV(this)==b.gcV(b))if(this.gbO(this)==b.gbO(b))if(this.e===b.gf_(b)){u=this.f
t=u==null
if(!t===b.geL()){if(t)u=""
if(u===b.gd5()){u=this.r
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
siB:function(a){var u=P.f
this.Q=H.h(a,"$iH",[u,u],"$aH")},
$ijI:1,
gc1:function(){return this.a},
gf_:function(a){return this.e}}
P.iF.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.n()
throw H.c(P.a1("Invalid port",this.a,u+1))},
$S:39}
P.iG.prototype={
$1:function(a){return P.er(C.aa,a,C.m,!1)},
$S:15}
P.iI.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.er(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.er(C.w,b,C.m,!0))}},
$S:37}
P.iH.prototype={
$2:function(a,b){var u,t
H.F(a)
if(b==null||typeof b==="string")this.a.$2(a,H.F(b))
else for(u=J.bx(H.li(b,"$in")),t=this.a;u.G();)t.$2(a,H.F(u.gM()))},
$S:35}
P.hB.prototype={
gfc:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
u=u[0]+1
s=C.c.eN(t,"?",u)
r=t.length
if(s>=0){q=P.cS(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.i3(this,"data",null,null,null,P.cS(t,u,r,C.L,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.iR.prototype={
$1:function(a){return new Uint8Array(96)},
$S:34}
P.iQ.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.lP(u,0,96,b)
return u},
$S:33}
P.iS.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.J(b,t)^96
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.iT.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.J(b,0),t=C.c.J(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.iv.prototype={
geI:function(){return this.c>0},
geK:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.B(t)
t=u+1<t
u=t}else u=!1
return u},
geL:function(){var u=this.f
if(typeof u!=="number")return u.Z()
return u<this.r},
geJ:function(){return this.r<this.a.length},
gdN:function(){return this.b===4&&C.c.a5(this.a,"http")},
gdO:function(){return this.b===5&&C.c.a5(this.a,"https")},
gc1:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdN()){this.x="http"
u="http"}else if(this.gdO()){this.x="https"
u="https"}else if(u===4&&C.c.a5(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a5(this.a,"package")){this.x="package"
u="package"}else{u=C.c.w(this.a,0,u)
this.x=u}return u},
gfe:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.w(this.a,t,u-1):""},
gcV:function(a){var u=this.c
return u>0?C.c.w(this.a,u,this.d):""},
gbO:function(a){var u
if(this.geK()){u=this.d
if(typeof u!=="number")return u.n()
return P.ex(C.c.w(this.a,u+1,this.e),null,null)}if(this.gdN())return 80
if(this.gdO())return 443
return 0},
gf_:function(a){return C.c.w(this.a,this.e,this.f)},
gd5:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.Z()
return u<t?C.c.w(this.a,u+1,t):""},
geH:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.ap(t,u+1):""},
gd6:function(){var u=this.f
if(typeof u!=="number")return u.Z()
if(u>=this.r)return C.ab
u=P.f
return new P.e3(P.kI(this.gd5(),C.m),[u,u])},
d9:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.h(h,"$iH",[P.f,null],"$aH")
i=this.gc1()
u=i==="file"
t=this.c
j=t>0?C.c.w(this.a,this.b+3,t):""
f=this.geK()?this.gbO(this):null
t=this.c
if(t>0)c=C.c.w(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.w(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a5(d,"/"))d="/"+d
g=P.jN(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.ap(t,s+1)
return new P.bW(i,j,c,f,d,g,b)},
f3:function(a,b){return this.d9(a,null,null,null,null,null,null,b,null,null)},
gL:function(a){var u=this.y
if(u==null){u=C.c.gL(this.a)
this.y=u}return u},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.S(b).$ijI&&this.a===b.i(0)},
i:function(a){return this.a},
$ijI:1}
P.i3.prototype={}
W.w.prototype={}
W.d2.prototype={
i:function(a){return String(a)},
$id2:1}
W.eB.prototype={
i:function(a){return String(a)}}
W.c7.prototype={$ic7:1}
W.bi.prototype={$ibi:1}
W.by.prototype={
bZ:function(a,b,c){if(c!=null)return this.ht(a,b,P.nq(c,null))
return this.hu(a,b)},
fl:function(a,b){return this.bZ(a,b,null)},
ht:function(a,b,c){return a.getContext(b,c)},
hu:function(a,b){return a.getContext(b)},
$iby:1,
$ike:1}
W.bz.prototype={
hv:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
ke:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibz:1}
W.bj.prototype={
gm:function(a){return a.length}}
W.cb.prototype={
gm:function(a){return a.length}}
W.eN.prototype={}
W.aA.prototype={$iaA:1}
W.cc.prototype={
jH:function(a,b){return a.adoptNode(b)},
dg:function(a,b){return a.getElementById(b)}}
W.eQ.prototype={
i:function(a){return String(a)}}
W.dc.prototype={
k_:function(a,b){return a.createHTMLDocument(b)}}
W.dd.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
A:function(a,b){var u
if(b==null)return!1
if(!H.cW(b,"$iaB",[P.ag],"$aaB"))return!1
u=J.a6(b)
return a.left===u.gbN(b)&&a.top===u.gbU(b)&&a.width===u.gbX(b)&&a.height===u.gbM(b)},
gL:function(a){return W.kT(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
gea:function(a){return a.bottom},
gbM:function(a){return a.height},
gbN:function(a){return a.left},
gbR:function(a){return a.right},
gbU:function(a){return a.top},
gbX:function(a){return a.width},
$iaB:1,
$aaB:function(){return[P.ag]}}
W.i2.prototype={
gm:function(a){return this.b.length},
k:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.d(u[b],"$iP")},
q:function(a,b,c){var u
H.d(c,"$iP")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
J.js(this.a,c,u[b])},
h:function(a,b){J.k7(this.a,b)
return b},
gV:function(a){var u=this.dc(this)
return new J.at(u,u.length,0,[H.t(u,0)])},
$aT:function(){return[W.P]},
$an:function(){return[W.P]},
$aa:function(){return[W.P]}}
W.P.prototype={
gjL:function(a){return new W.i4(a)},
gcI:function(a){return new W.i2(a,a.children)},
gec:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.Z()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Z()
if(r<0)r=-r*0
return new P.aB(u,t,s,r,[P.ag])},
i:function(a){return a.localName},
ae:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kj
if(u==null){u=H.b([],[W.ay])
t=new W.dD(u)
C.a.h(u,W.kS(null))
C.a.h(u,W.kU())
$.kj=t
d=t}else d=u
u=$.ki
if(u==null){u=new W.es(d)
$.ki=u
c=u}else{u.a=d
c=u}}if($.b2==null){u=document
t=u.implementation
t=(t&&C.U).k_(t,"")
$.b2=t
$.jz=t.createRange()
t=$.b2
t.toString
t=t.createElement("base")
H.d(t,"$ic7")
t.href=u.baseURI
u=$.b2.head;(u&&C.W).F(u,t)}u=$.b2
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.d(t,"$ibi")}u=$.b2
if(!!this.$ibi)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b2.body;(u&&C.p).F(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Y(C.a8,a.tagName)){u=$.jz;(u&&C.N).ft(u,s)
u=$.jz
r=(u&&C.N).jY(u,b)}else{s.innerHTML=b
r=$.b2.createDocumentFragment()
for(u=J.a6(r);t=s.firstChild,t!=null;)u.F(r,t)}u=$.b2.body
if(s==null?u!=null:s!==u)J.k9(s)
c.di(r)
C.z.jH(document,r)
return r},
jZ:function(a,b,c){return this.ae(a,b,c,null)},
fw:function(a,b,c,d){a.textContent=null
this.F(a,this.ae(a,b,c,d))},
fv:function(a,b){return this.fw(a,b,null,null)},
b2:function(a,b){return a.getAttribute(b)},
iD:function(a,b){return a.removeAttribute(b)},
fu:function(a,b,c){return a.setAttribute(b,c)},
$iP:1,
gl4:function(a){return a.tagName}}
W.eU.prototype={
$1:function(a){return!!J.S(H.d(a,"$iC")).$iP},
$S:22}
W.m.prototype={$im:1}
W.bD.prototype={
h7:function(a,b,c,d){return a.addEventListener(b,H.c_(H.k(c,{func:1,args:[W.m]}),1),!1)},
$ibD:1}
W.f3.prototype={
gm:function(a){return a.length}}
W.dh.prototype={}
W.di.prototype={
iJ:function(a,b,c,d){return a.replaceState(b,c,d)},
gm:function(a){return a.length}}
W.bG.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bH(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iC")
throw H.c(P.Z("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.C]},
$aT:function(){return[W.C]},
$in:1,
$an:function(){return[W.C]},
$ia:1,
$aa:function(){return[W.C]},
$ibG:1,
$aav:function(){return[W.C]}}
W.dj.prototype={}
W.b3.prototype={$ib3:1,
ged:function(a){return a.data}}
W.cg.prototype={$icg:1,$ike:1}
W.ch.prototype={$ich:1}
W.aR.prototype={$iaR:1}
W.dq.prototype={}
W.dt.prototype={
i:function(a){return String(a)},
$idt:1}
W.cl.prototype={}
W.aa.prototype={$iaa:1}
W.am.prototype={
gaL:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.kz("No elements"))
if(t>1)throw H.c(P.kz("More than one element"))
return u.firstChild},
at:function(a,b){var u,t,s,r,q
H.h(b,"$in",[W.C],"$an")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.a6(t),q=0;q<s;++q)r.F(t,u.firstChild)
return},
q:function(a,b,c){var u,t
H.d(c,"$iC")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
J.js(u,c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.df(u,u.length,-1,[H.cY(C.ac,u,"av",0)])},
gm:function(a){return this.a.childNodes.length},
k:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aT:function(){return[W.C]},
$an:function(){return[W.C]},
$aa:function(){return[W.C]}}
W.C.prototype={
kU:function(a){var u=a.parentNode
if(u!=null)J.ez(u,a)},
kZ:function(a,b){var u,t
try{u=a.parentNode
J.js(u,b,a)}catch(t){H.ae(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fD(a):u},
F:function(a,b){return a.appendChild(H.d(b,"$iC"))},
iE:function(a,b){return a.removeChild(b)},
iI:function(a,b,c){return a.replaceChild(b,c)},
$iC:1}
W.co.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bH(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iC")
throw H.c(P.Z("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.C]},
$aT:function(){return[W.C]},
$in:1,
$an:function(){return[W.C]},
$ia:1,
$aa:function(){return[W.C]},
$aav:function(){return[W.C]}}
W.dI.prototype={
jY:function(a,b){return a.createContextualFragment(b)},
ft:function(a,b){return a.selectNodeContents(b)}}
W.fW.prototype={
gm:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.dQ.prototype={
ae:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.c2(a,b,c,d)
u=W.m3("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.am(t).at(0,new W.am(u))
return t},
hx:function(a,b){return a.insertRow(b)}}
W.dR.prototype={
ae:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.c2(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.am(u)
s=u.gaL(u)
s.toString
u=new W.am(s)
r=u.gaL(u)
t.toString
r.toString
new W.am(t).at(0,new W.am(r))
return t},
dM:function(a,b){return a.insertCell(b)}}
W.hb.prototype={
ae:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.c2(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.am(u)
s=u.gaL(u)
t.toString
s.toString
new W.am(t).at(0,new W.am(s))
return t}}
W.cv.prototype={$icv:1}
W.aK.prototype={$iaK:1}
W.aL.prototype={$iaL:1}
W.hk.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bH(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iaK")
throw H.c(P.Z("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.aK]},
$aT:function(){return[W.aK]},
$in:1,
$an:function(){return[W.aK]},
$ia:1,
$aa:function(){return[W.aK]},
$aav:function(){return[W.aK]}}
W.bs.prototype={}
W.hV.prototype={$ike:1}
W.aZ.prototype={
gk9:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.Z("deltaY is not supported"))},
gk8:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.Z("deltaX is not supported"))},
$iaZ:1}
W.cK.prototype={
iL:function(a,b){return a.requestAnimationFrame(H.c_(H.k(b,{func:1,ret:-1,args:[P.ag]}),1))},
hm:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cL.prototype={$icL:1}
W.eb.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
A:function(a,b){var u
if(b==null)return!1
if(!H.cW(b,"$iaB",[P.ag],"$aaB"))return!1
u=J.a6(b)
return a.left===u.gbN(b)&&a.top===u.gbU(b)&&a.width===u.gbX(b)&&a.height===u.gbM(b)},
gL:function(a){return W.kT(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
gbM:function(a){return a.height},
gbX:function(a){return a.width}}
W.eh.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bH(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iC")
throw H.c(P.Z("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.C]},
$aT:function(){return[W.C]},
$in:1,
$an:function(){return[W.C]},
$ia:1,
$aa:function(){return[W.C]},
$aav:function(){return[W.C]}}
W.i1.prototype={
a0:function(a,b){var u,t,s,r,q,p
H.k(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gay(),t=u.length,s=this.a,r=J.a6(s),q=0;q<u.length;u.length===t||(0,H.A)(u),++q){p=u[q]
b.$2(p,r.b2(s,p))}},
gay:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
q=H.d(u[r],"$icL")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abL:function(){return[P.f,P.f]},
$aH:function(){return[P.f,P.f]}}
W.i4.prototype={
k:function(a,b){return J.jt(this.a,H.F(b))},
q:function(a,b,c){J.lT(this.a,b,c)},
gm:function(a){return this.gay().length}}
W.i5.prototype={}
W.jL.prototype={}
W.i6.prototype={}
W.i7.prototype={
$1:function(a){return this.a.$1(H.d(a,"$im"))},
$S:32}
W.bu.prototype={
fQ:function(a){var u,t
u=$.k5()
if(u.gkw(u)){for(t=0;t<262;++t)u.q(0,C.a7[t],W.nC())
for(t=0;t<12;++t)u.q(0,C.B[t],W.nD())}},
aT:function(a){return $.lG().Y(0,W.cd(a))},
au:function(a,b,c){var u,t,s
u=W.cd(a)
t=$.k5()
s=t.k(0,H.j(u)+"::"+b)
if(s==null)s=t.k(0,"*::"+b)
if(s==null)return!1
return H.jT(s.$4(a,b,c,this))},
$iay:1}
W.av.prototype={
gV:function(a){return new W.df(a,this.gm(a),-1,[H.cY(this,a,"av",0)])}}
W.dD.prototype={
aT:function(a){return C.a.e5(this.a,new W.fG(a))},
au:function(a,b,c){return C.a.e5(this.a,new W.fF(a,b,c))},
$iay:1}
W.fG.prototype={
$1:function(a){return H.d(a,"$iay").aT(this.a)},
$S:24}
W.fF.prototype={
$1:function(a){return H.d(a,"$iay").au(this.a,this.b,this.c)},
$S:24}
W.ek.prototype={
h1:function(a,b,c,d){var u,t,s
this.a.at(0,c)
u=b.bW(0,new W.it())
t=b.bW(0,new W.iu())
this.b.at(0,u)
s=this.c
s.at(0,C.I)
s.at(0,t)},
aT:function(a){return this.a.Y(0,W.cd(a))},
au:function(a,b,c){var u,t
u=W.cd(a)
t=this.c
if(t.Y(0,H.j(u)+"::"+b))return this.d.jI(c)
else if(t.Y(0,"*::"+b))return this.d.jI(c)
else{t=this.b
if(t.Y(0,H.j(u)+"::"+b))return!0
else if(t.Y(0,"*::"+b))return!0
else if(t.Y(0,H.j(u)+"::*"))return!0
else if(t.Y(0,"*::*"))return!0}return!1},
$iay:1}
W.it.prototype={
$1:function(a){return!C.a.Y(C.B,H.F(a))},
$S:25}
W.iu.prototype={
$1:function(a){return C.a.Y(C.B,H.F(a))},
$S:25}
W.iA.prototype={
au:function(a,b,c){if(this.fH(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jt(a,"template")==="")return this.e.Y(0,b)
return!1}}
W.iB.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.F(a))},
$S:15}
W.iz.prototype={
aT:function(a){var u=J.S(a)
if(!!u.$icr)return!1
u=!!u.$ip
if(u&&W.cd(a)==="foreignObject")return!1
if(u)return!0
return!1},
au:function(a,b,c){if(b==="is"||C.c.a5(b,"on"))return!1
return this.aT(a)},
$iay:1}
W.df.prototype={
G:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdL(J.lL(this.a,u))
this.c=u
return!0}this.sdL(null)
this.c=t
return!1},
gM:function(){return this.d},
sdL:function(a){this.d=H.x(a,H.t(this,0))},
$iaQ:1}
W.ay.prototype={}
W.ir.prototype={$ioi:1}
W.es.prototype={
di:function(a){new W.iM(this).$2(a,null)},
b7:function(a,b){if(b==null)J.k9(a)
else J.ez(b,a)},
iQ:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.lQ(a)
s=J.jt(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ae(o)}q="element unprintable"
try{q=J.ap(a)}catch(o){H.ae(o)}try{p=W.cd(a)
this.iP(H.d(a,"$iP"),b,u,q,p,H.d(t,"$iH"),H.F(s))}catch(o){if(H.ae(o) instanceof P.aG)throw o
else{this.b7(a,b)
window
n="Removing corrupted element "+H.j(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iP:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b7(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aT(a)){this.b7(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.au(a,"is",g)){this.b7(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gay()
t=H.b(u.slice(0),[H.t(u,0)])
for(s=f.gay().length-1,u=f.a,r=J.a6(u);s>=0;--s){if(s>=t.length)return H.e(t,s)
q=t[s]
if(!this.a.au(a,J.lV(q),r.b2(u,q))){window
p="Removing disallowed attribute <"+H.j(e)+" "+q+'="'+H.j(r.b2(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b2(u,q)
r.iD(u,q)}}if(!!J.S(a).$icv)this.di(a.content)},
$io2:1}
W.iM.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iQ(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b7(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ae(r)
q=H.d(u,"$iC")
if(s){p=q.parentNode
if(p!=null)J.ez(p,q)}else J.ez(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.d(t,"$iC")}},
$S:44}
W.ea.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.et.prototype={}
W.eu.prototype={}
P.iw.prototype={
eF:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
de:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.S(a)
if(!!t.$iai)return new Date(a.a)
if(!!t.$imz)throw H.c(P.hy("structured clone of RegExp"))
if(!!t.$ib3)return a
if(!!t.$ibM)return a
if(!!t.$iH){s=this.eF(a)
t=this.b
if(s>=t.length)return H.e(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.q(t,s,r)
a.a0(0,new P.iy(u,this))
return u.a}if(!!t.$ia){s=this.eF(a)
u=this.b
if(s>=u.length)return H.e(u,s)
r=u[s]
if(r!=null)return r
return this.jX(a,s)}throw H.c(P.hy("structured clone of other type"))},
jX:function(a,b){var u,t,s,r
u=J.c2(a)
t=u.gm(a)
s=new Array(t)
C.a.q(this.b,b,s)
for(r=0;r<t;++r)C.a.q(s,r,this.de(u.k(a,r)))
return s}}
P.iy.prototype={
$2:function(a,b){this.a.a[a]=this.b.de(b)},
$S:8}
P.ep.prototype={$ib3:1,
ged:function(a){return this.a}}
P.iX.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.ix.prototype={}
P.f0.prototype={
gbq:function(){var u,t,s
u=this.b
t=H.ac(u,"T",0)
s=W.P
return new H.fr(new H.cJ(u,H.k(new P.f1(),{func:1,ret:P.N,args:[t]}),[t]),H.k(new P.f2(),{func:1,ret:s,args:[t]}),[t,s])},
q:function(a,b,c){var u
H.d(c,"$iP")
u=this.gbq()
J.lS(u.b.$1(J.eA(u.a,b)),c)},
h:function(a,b){J.k7(this.b.a,b)},
gm:function(a){return J.aF(this.gbq().a)},
k:function(a,b){var u=this.gbq()
return u.b.$1(J.eA(u.a,b))},
gV:function(a){var u=P.mi(this.gbq(),!1,W.P)
return new J.at(u,u.length,0,[H.t(u,0)])},
$aT:function(){return[W.P]},
$an:function(){return[W.P]},
$aa:function(){return[W.P]}}
P.f1.prototype={
$1:function(a){return!!J.S(H.d(a,"$iC")).$iP},
$S:22}
P.f2.prototype={
$1:function(a){return H.i(H.d(a,"$iC"),"$iP")},
$S:53}
P.il.prototype={
gbR:function(a){var u=this.a
if(typeof u!=="number")return u.n()
return H.x(u+this.c,H.t(this,0))},
gea:function(a){var u=this.b
if(typeof u!=="number")return u.n()
return H.x(u+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cW(b,"$iaB",[P.ag],"$aaB")){u=this.a
t=J.a6(b)
if(u==t.gbN(b)){s=this.b
if(s==t.gbU(b)){if(typeof u!=="number")return u.n()
r=H.t(this,0)
if(H.x(u+this.c,r)===t.gbR(b)){if(typeof s!=="number")return s.n()
u=H.x(s+this.d,r)===t.gea(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gL:function(a){var u,t,s,r,q
u=this.a
t=J.d1(u)
s=this.b
r=J.d1(s)
if(typeof u!=="number")return u.n()
q=H.t(this,0)
u=C.f.gL(H.x(u+this.c,q))
if(typeof s!=="number")return s.n()
q=C.f.gL(H.x(s+this.d,q))
return P.mW(P.ij(P.ij(P.ij(P.ij(0,t),r),u),q))}}
P.aB.prototype={
gbN:function(a){return this.a},
gbU:function(a){return this.b},
gbX:function(a){return this.c},
gbM:function(a){return this.d}}
P.cr.prototype={$icr:1}
P.p.prototype={
gcI:function(a){return new P.f0(a,new W.am(a))},
ae:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.ay])
C.a.h(u,W.kS(null))
C.a.h(u,W.kU())
C.a.h(u,new W.iz())
c=new W.es(new W.dD(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).jZ(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.am(r)
p=u.gaL(u)
for(u=J.a6(q);s=p.firstChild,s!=null;)u.F(q,s)
return q},
$ip:1}
P.M.prototype={$in:1,
$an:function(){return[P.l]},
$ia:1,
$aa:function(){return[P.l]},
$imH:1}
P.d5.prototype={$id5:1}
P.dg.prototype={$idg:1}
P.dH.prototype={$idH:1}
P.bR.prototype={
e2:function(a,b){return a.activeTexture(b)},
e6:function(a,b,c){return a.attachShader(b,c)},
av:function(a,b,c){return a.bindBuffer(b,c)},
jN:function(a,b,c){return a.bindFramebuffer(b,c)},
aU:function(a,b,c){return a.bindTexture(b,c)},
jO:function(a,b,c){return a.blendFunc(b,c)},
eb:function(a,b,c,d){return a.bufferData(b,c,d)},
jR:function(a,b){return a.clear(b)},
jS:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jT:function(a,b){return a.clearDepth(b)},
jV:function(a,b){return a.compileShader(b)},
k0:function(a,b){return a.createShader(b)},
k6:function(a,b){return a.deleteProgram(b)},
k7:function(a,b){return a.deleteShader(b)},
ka:function(a,b){return a.depthFunc(b)},
kb:function(a,b){return a.disable(b)},
ee:function(a,b){return a.disableVertexAttribArray(b)},
kd:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cN:function(a,b){return a.enable(b)},
ei:function(a,b){return a.enableVertexAttribArray(b)},
fg:function(a,b){return a.generateMipmap(b)},
fh:function(a,b,c){return a.getActiveAttrib(b,c)},
fi:function(a,b,c){return a.getActiveUniform(b,c)},
fj:function(a,b,c){return a.getAttribLocation(b,c)},
dh:function(a,b){return a.getParameter(b)},
fm:function(a,b){return a.getProgramInfoLog(b)},
c_:function(a,b,c){return a.getProgramParameter(b,c)},
fn:function(a,b){return a.getShaderInfoLog(b)},
fo:function(a,b,c){return a.getShaderParameter(b,c)},
fp:function(a,b,c){return a.getUniformLocation(b,c)},
ky:function(a,b){return a.linkProgram(b)},
kS:function(a,b,c){return a.pixelStorei(b,c)},
fB:function(a,b,c){return a.shaderSource(b,c)},
l6:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.S(g)
if(!!u.$ib3)t=!0
else t=!1
if(t){this.j0(a,b,c,d,e,f,P.nr(g))
return}if(!!u.$icg)u=!0
else u=!1
if(u){this.j1(a,b,c,d,e,f,g)
return}throw H.c(P.d3("Incorrect number or type of arguments"))},
l5:function(a,b,c,d,e,f,g){return this.l6(a,b,c,d,e,f,g,null,null,null)},
j0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
j1:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bS:function(a,b,c,d){return a.texParameteri(b,c,d)},
R:function(a,b,c){return a.uniform1f(b,c)},
T:function(a,b,c){return a.uniform1i(b,c)},
B:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fa:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fb:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
fd:function(a,b){return a.useProgram(b)},
lc:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ld:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibR:1}
P.dL.prototype={$idL:1}
P.dT.prototype={$idT:1}
P.e1.prototype={$ie1:1}
O.a0.prototype={
c3:function(a){this.shB(H.b([],[a]))
this.sdT(null)
this.sdQ(null)
this.sdU(null)},
dj:function(a,b,c){var u=H.ac(this,"a0",0)
H.k(b,{func:1,ret:P.N,args:[[P.n,u]]})
u={func:1,ret:-1,args:[P.l,[P.n,u]]}
H.k(a,u)
H.k(c,u)
this.sdT(b)
this.sdQ(a)
this.sdU(c)},
bl:function(a,b){return this.dj(a,null,b)},
il:function(a){var u
H.h(a,"$in",[H.ac(this,"a0",0)],"$an")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fO:function(a,b){var u
H.h(b,"$in",[H.ac(this,"a0",0)],"$an")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.at(u,u.length,0,[H.t(u,0)])},
a9:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ac(this,"a0",0)
H.x(b,u)
u=[u]
if(this.il(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.fO(s,H.b([b],u))}},
shB:function(a){this.a=H.h(a,"$ia",[H.ac(this,"a0",0)],"$aa")},
sdT:function(a){this.b=H.k(a,{func:1,ret:P.N,args:[[P.n,H.ac(this,"a0",0)]]})},
sdQ:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.l,[P.n,H.ac(this,"a0",0)]]})},
sdU:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.l,[P.n,H.ac(this,"a0",0)]]})},
$in:1}
O.ck.prototype={
gm:function(a){return this.a.length},
gC:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
fP:function(a){var u=this.b
if(u!=null)u.K(a)},
aM:function(){return this.fP(null)},
ga3:function(){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.dy()},
f1:function(a){var u=this.a
if(a==null)C.a.h(u,V.dy())
else C.a.h(u,a)
this.aM()},
d4:function(){var u=this.a
if(u.length>0){u.pop()
this.aM()}},
scd:function(a){this.a=H.h(a,"$ia",[V.aj],"$aa")}}
E.eF.prototype={}
E.aq.prototype={
saa:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gC().I(0,this.geX())
t=this.c
if(t!=null)t.gC().h(0,this.geX())
s=new D.L("shape",u,this.c,this,[F.dM])
s.b=!0
this.am(s)}},
sbd:function(a){var u,t
if(!J.D(this.r,a)){u=this.r
if(u!=null)u.gC().I(0,this.geV())
if(a!=null)a.gC().h(0,this.geV())
this.r=a
t=new D.L("mover",u,a,this,[U.ab])
t.b=!0
this.am(t)}},
aB:function(a){var u,t,s,r
u=this.r
t=u!=null?u.b1(a,this):null
if(!J.D(t,this.x)){s=this.x
this.x=t
r=new D.L("matrix",s,t,this,[V.aj])
r.b=!0
this.am(r)}for(u=this.y.a,u=new J.at(u,u.length,0,[H.t(u,0)]);u.G();)u.d.aB(a)},
aZ:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga3())
else C.a.h(u.a,t.v(0,u.ga3()))
u.aM()
a.f2(this.f)
u=a.dy
s=(u&&C.a).gaz(u)
if(s!=null&&this.d!=null)s.kY(a,this)
for(u=this.y.a,u=new J.at(u,u.length,0,[H.t(u,0)]);u.G();)u.d.aZ(a)
a.f0()
a.dx.d4()},
gC:function(){var u=this.z
if(u==null){u=D.Q()
this.z=u}return u},
am:function(a){var u=this.z
if(u!=null)u.K(a)},
W:function(){return this.am(null)},
eY:function(a){H.d(a,"$iy")
this.e=null
this.am(a)},
kJ:function(){return this.eY(null)},
eW:function(a){this.am(H.d(a,"$iy"))},
kI:function(){return this.eW(null)},
eU:function(a){this.am(H.d(a,"$iy"))},
kF:function(){return this.eU(null)},
kE:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$in",[E.aq],"$an")
for(u=b.length,t=this.geT(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bC()
o.sai(null)
o.sb5(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sai(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.W()},
kH:function(a,b){var u,t
H.h(b,"$in",[E.aq],"$an")
for(u=b.gV(b),t=this.geT();u.G();)u.gM().gC().I(0,t)
this.W()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
she:function(a,b){this.y=H.h(b,"$ia0",[E.aq],"$aa0")},
$ib8:1}
E.fR.prototype={
fK:function(a,b){var u,t
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
u=new O.ck()
t=[V.aj]
u.scd(H.b([],t))
u.b=null
u.gC().h(0,new E.fS(this))
this.cy=u
u=new O.ck()
u.scd(H.b([],t))
u.b=null
u.gC().h(0,new E.fT(this))
this.db=u
u=new O.ck()
u.scd(H.b([],t))
u.b=null
u.gC().h(0,new E.fU(this))
this.dx=u
this.sj_(H.b([],[O.bT]))
u=this.dy;(u&&C.a).h(u,null)
this.siW(new H.aJ([P.f,A.cs]))},
gkT:function(){var u=this.z
if(u==null){u=this.cy.ga3().v(0,this.db.ga3())
this.z=u}return u},
f2:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaz(u):a;(u&&C.a).h(u,t)},
f0:function(){var u=this.dy
if(u.length>1)u.pop()},
sj_:function(a){this.dy=H.h(a,"$ia",[O.bT],"$aa")},
siW:function(a){this.fr=H.h(a,"$iH",[P.f,A.cs],"$aH")}}
E.fS.prototype={
$1:function(a){var u
H.d(a,"$iy")
u=this.a
u.z=null
u.ch=null},
$S:9}
E.fT.prototype={
$1:function(a){var u
H.d(a,"$iy")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:9}
E.fU.prototype={
$1:function(a){var u
H.d(a,"$iy")
u=this.a
u.ch=null
u.cx=null},
$S:9}
E.dY.prototype={
ds:function(a){H.d(a,"$iy")
this.f4()},
dr:function(){return this.ds(null)},
gkr:function(){var u,t,s
u=Date.now()
t=C.f.a6(P.kh(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ai(u,!1)
return s/t},
dX:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.v()
if(typeof u!=="number")return H.B(u)
s=C.e.cU(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.v()
r=C.e.cU(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kC(C.y,this.gl_())}},
f4:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.hg(this),{func:1,ret:-1,args:[P.ag]})
C.P.hm(u)
C.P.iL(u,W.l7(t,P.ag))}},
kX:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dX()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ai(r,!1)
s.y=P.kh(0,0,0,r-s.r.a,0,0).a*0.000001
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
this.d.aZ(this.e)}s=this.z
if(s!=null)s.K(null)}catch(q){u=H.ae(q)
t=H.c3(q)
P.k1("Error: "+H.j(u))
P.k1("Stack: "+H.j(t))
throw H.c(u)}}}
E.hg.prototype={
$1:function(a){var u
H.nO(a)
u=this.a
if(u.ch){u.ch=!1
u.kX()}},
$S:31}
Z.e8.prototype={$inX:1}
Z.d6.prototype={
cC:function(a){var u,t,s
try{t=a.a
C.b.ei(t,this.e)
C.b.lc(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ae(s)
t=P.q('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}}
Z.hW.prototype={$inY:1}
Z.d7.prototype={
aW:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
cC:function(a){var u,t
u=this.a
C.b.av(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].cC(a)},
lb:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.ee(s,u[t].e)
C.b.av(s,this.a.a,null)},
aZ:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.b.av(t,p,r.b)
C.b.kd(t,q.a,q.b,5123,0)
C.b.av(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.f]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ap(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
shw:function(a){this.b=H.h(a,"$ia",[Z.bp],"$aa")},
$io6:1}
Z.bp.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bO(this.c)+"'")+"]"}}
Z.aY.prototype={
gdk:function(a){var u,t
u=this.a
t=(u&$.bf().a)!==0?3:0
if((u&$.be().a)!==0)t+=3
if((u&$.bd().a)!==0)t+=3
if((u&$.bg().a)!==0)t+=2
if((u&$.bh().a)!==0)t+=3
if((u&$.cZ().a)!==0)t+=3
if((u&$.d_().a)!==0)t+=4
if((u&$.c6().a)!==0)++t
return(u&$.bc().a)!==0?t+4:t},
jK:function(a){var u,t,s
u=$.bf()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.be()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bd()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bg()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bh()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cZ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d_()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c6()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bc()
if((t&u.a)!==0)if(s===a)return u
return $.lE()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aY))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.f])
t=this.a
if((t&$.bf().a)!==0)C.a.h(u,"Pos")
if((t&$.be().a)!==0)C.a.h(u,"Norm")
if((t&$.bd().a)!==0)C.a.h(u,"Binm")
if((t&$.bg().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bh().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cZ().a)!==0)C.a.h(u,"Clr3")
if((t&$.d_().a)!==0)C.a.h(u,"Clr4")
if((t&$.c6().a)!==0)C.a.h(u,"Weight")
if((t&$.bc().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.eI.prototype={}
D.bC.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.y]}
H.k(b,u)
if(this.a==null)this.sai(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
I:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[D.y]})
u=this.a
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=this.a
t=(u&&C.a).I(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=this.b
t=(u&&C.a).I(u,b)||t}return t},
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
return!0}if(!s)C.a.a0(t,new D.eY(u))
t=this.b
if(t!=null)C.a.a0(t,new D.eZ(u))
u=this.b
if(u!=null)C.a.sm(u,0)
return!0},
kf:function(){return this.K(null)},
l0:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.K(t)}}},
aA:function(){return this.l0(!0,!1)},
sai:function(a){this.a=H.h(a,"$ia",[{func:1,ret:-1,args:[D.y]}],"$aa")},
sb5:function(a){this.b=H.h(a,"$ia",[{func:1,ret:-1,args:[D.y]}],"$aa")}}
D.eY.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.eZ.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.y.prototype={}
D.bI.prototype={}
D.bJ.prototype={}
D.L.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.d8.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d8))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dp.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dp))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.fg.prototype={
kP:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kL:function(a){this.c=a.b
this.d.I(0,a.a)
return!1},
siA:function(a){this.d=H.h(a,"$iky",[P.l],"$aky")}}
X.du.prototype={}
X.fn.prototype={
b4:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ai(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.v()
q=b.b
p=this.ch
if(typeof q!=="number")return q.v()
o=t.n(0,new V.a_(s*r,q*p))
p=this.a.gaV()
n=new X.b7(a,V.b9(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
d3:function(a,b){this.r=a.a
return!1},
bf:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fs()
if(typeof u!=="number")return u.bY()
this.r=(u&~t)>>>0
return!1},
be:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.b4(a,b))
return!0},
kQ:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaV()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.v()
o=a.b
n=this.cy
if(typeof o!=="number")return o.v()
r=new X.cm(new V.R(q*p,o*n),t,s,new P.ai(r,!1),this)
r.b=!0
u.K(r)
return!0},
i8:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ai(Date.now(),!1)
t=this.f
s=new X.du(c,a,this.a.gaV(),b,u,this)
s.b=!0
t.K(s)
this.y=u
this.x=V.b9()}}
X.ax.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ax))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b7.prototype={}
X.fA.prototype={
ca:function(a,b,c){var u,t,s
u=new P.ai(Date.now(),!1)
t=this.a.gaV()
s=new X.b7(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
d3:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.K(this.ca(a,b,!0))
return!0},
bf:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fs()
if(typeof u!=="number")return u.bY()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.K(this.ca(a,b,!0))
return!0},
be:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.ca(a,b,!1))
return!0},
kR:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaV()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.v()
p=a.b
o=this.ch
if(typeof p!=="number")return p.v()
s=new X.cm(new V.R(r*q,p*o),t,b,new P.ai(s,!1),this)
s.b=!0
u.K(s)
return!0},
gef:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
gbV:function(){var u=this.c
if(u==null){u=D.Q()
this.c=u}return u},
geS:function(){var u=this.d
if(u==null){u=D.Q()
this.d=u}return u}}
X.cm.prototype={}
X.fM.prototype={}
X.e_.prototype={}
X.hj.prototype={
b4:function(a,b){var u,t,s,r
H.h(a,"$ia",[V.a_],"$aa")
u=new P.ai(Date.now(),!1)
t=a.length>0?a[0]:V.b9()
s=this.a.gaV()
r=new X.e_(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kO:function(a){var u
H.h(a,"$ia",[V.a_],"$aa")
u=this.b
if(u==null)return!1
u.K(this.b4(a,!0))
return!0},
kM:function(a){var u
H.h(a,"$ia",[V.a_],"$aa")
u=this.c
if(u==null)return!1
u.K(this.b4(a,!0))
return!0},
kN:function(a){var u
H.h(a,"$ia",[V.a_],"$aa")
u=this.d
if(u==null)return!1
u.K(this.b4(a,!1))
return!0}}
X.e4.prototype={
gaV:function(){var u=this.a
return V.kw(0,0,C.q.gec(u).c,C.q.gec(u).d)},
dG:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dp(u,new X.ax(t,a.altKey,a.shiftKey))},
aR:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ax(t,a.altKey,a.shiftKey)},
cu:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ax(t,a.altKey,a.shiftKey)},
aH:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.t()
q=u.top
if(typeof s!=="number")return s.t()
return new V.a_(t-r,s-q)},
b6:function(a){return new V.R(a.movementX,a.movementY)},
cp:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a_])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
o=C.e.an(p.pageX)
C.e.an(p.pageY)
n=u.left
C.e.an(p.pageX)
C.a.h(t,new V.a_(o-n,C.e.an(p.pageY)-u.top))}return t},
aE:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d8(u,new X.ax(t,a.altKey,a.shiftKey))},
ce:function(a){var u,t,s,r,q,p
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
i2:function(a){this.f=!0},
hR:function(a){this.f=!1},
hX:function(a){H.d(a,"$iaa")
if(this.f&&this.ce(a))a.preventDefault()},
i6:function(a){var u
H.d(a,"$iaR")
if(!this.f)return
u=this.dG(a)
this.b.kP(u)},
i4:function(a){var u
H.d(a,"$iaR")
if(!this.f)return
u=this.dG(a)
this.b.kL(u)},
ia:function(a){var u,t,s,r
H.d(a,"$iaa")
u=this.a
u.focus()
this.f=!0
this.aR(a)
if(this.x){t=this.aE(a)
s=this.b6(a)
if(this.d.d3(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aE(a)
r=this.aH(a)
if(this.c.d3(t,r))a.preventDefault()},
ig:function(a){var u,t,s
H.d(a,"$iaa")
this.aR(a)
u=this.aE(a)
if(this.x){t=this.b6(a)
if(this.d.bf(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.bf(u,s))a.preventDefault()},
i0:function(a){var u,t,s
H.d(a,"$iaa")
if(!this.ce(a)){this.aR(a)
u=this.aE(a)
if(this.x){t=this.b6(a)
if(this.d.bf(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.bf(u,s))a.preventDefault()}},
ic:function(a){var u,t,s
H.d(a,"$iaa")
this.aR(a)
u=this.aE(a)
if(this.x){t=this.b6(a)
if(this.d.be(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.be(u,s))a.preventDefault()},
hZ:function(a){var u,t,s
H.d(a,"$iaa")
if(!this.ce(a)){this.aR(a)
u=this.aE(a)
if(this.x){t=this.b6(a)
if(this.d.be(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.be(u,s))a.preventDefault()}},
ii:function(a){var u,t
H.d(a,"$iaZ")
this.aR(a)
u=new V.R((a&&C.O).gk8(a),C.O.gk9(a)).u(0,180)
if(this.x){if(this.d.kQ(u))a.preventDefault()
return}if(this.r)return
t=this.aH(a)
if(this.c.kR(u,t))a.preventDefault()},
ik:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aE(this.y)
s=this.aH(this.y)
this.d.i8(t,s,u)}},
iy:function(a){var u
H.d(a,"$iaL")
this.a.focus()
this.f=!0
this.cu(a)
u=this.cp(a)
if(this.e.kO(u))a.preventDefault()},
iu:function(a){var u
H.d(a,"$iaL")
this.cu(a)
u=this.cp(a)
if(this.e.kM(u))a.preventDefault()},
iw:function(a){var u
H.d(a,"$iaL")
this.cu(a)
u=this.cp(a)
if(this.e.kN(u))a.preventDefault()},
shn:function(a){this.z=H.h(a,"$ia",[[P.cu,P.K]],"$aa")}}
D.bm.prototype={
gC:function(){var u=this.d
if(u==null){u=D.Q()
this.d=u}return u},
aC:function(a){var u
H.d(a,"$iy")
u=this.d
if(u!=null)u.K(a)},
fT:function(){return this.aC(null)},
$ia2:1,
$ib8:1}
D.a2.prototype={$ib8:1}
D.dr.prototype={
gC:function(){var u=this.Q
if(u==null){u=D.Q()
this.Q=u}return u},
aC:function(a){var u=this.Q
if(u!=null)u.K(a)},
dS:function(a){var u
H.d(a,"$iy")
u=this.ch
if(u!=null)u.K(a)},
i7:function(){return this.dS(null)},
io:function(a){var u,t,s
H.h(a,"$in",[D.a2],"$an")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(s==null||this.fR(s))return!1}return!0},
hL:function(a,b){var u,t,s,r,q,p,o,n
u=D.a2
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gdR(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=H.d(b[p],"$ia2")
if(o instanceof D.bm)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bC()
n.sai(null)
n.sb5(null)
n.c=null
n.d=0
o.d=n}H.k(s,r)
if(n.a==null)n.sai(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bI(a,b,this,[u])
u.b=!0
this.aC(u)},
is:function(a,b){var u,t,s,r
u=D.a2
H.h(b,"$in",[u],"$an")
for(t=b.gV(b),s=this.gdR();t.G();){r=t.gM()
C.a.I(this.e,r)
r.gC().I(0,s)}u=new D.bJ(a,b,this,[u])
u.b=!0
this.aC(u)},
fR:function(a){var u=C.a.Y(this.e,a)
return u},
shk:function(a){this.e=H.h(a,"$ia",[D.bm],"$aa")},
siz:function(a){this.f=H.h(a,"$ia",[D.dG],"$aa")},
siY:function(a){this.r=H.h(a,"$ia",[D.dN],"$aa")},
sja:function(a){this.x=H.h(a,"$ia",[D.dV],"$aa")},
sjb:function(a){this.y=H.h(a,"$ia",[D.dW],"$aa")},
sjc:function(a){this.z=H.h(a,"$ia",[D.dX],"$aa")},
$an:function(){return[D.a2]},
$aa0:function(){return[D.a2]}}
D.dG.prototype={$ia2:1,$ib8:1}
D.dN.prototype={$ia2:1,$ib8:1}
D.dV.prototype={$ia2:1,$ib8:1}
D.dW.prototype={$ia2:1,$ib8:1}
D.dX.prototype={$ia2:1,$ib8:1}
V.a7.prototype={
n:function(a,b){var u,t,s
u=C.e.n(this.a,b.gd7())
t=C.e.n(this.b,b.gc0())
s=C.e.n(this.c,b.gcE())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a7(u,t,s)},
t:function(a,b){var u,t,s
u=C.e.t(this.a,b.gd7())
t=C.e.t(this.b,b.gc0())
s=C.e.t(this.c,b.gcE())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a7(u,t,s)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.au.prototype={
dc:function(a){return H.b([this.a,this.b,this.c,this.d],[P.r])},
n:function(a,b){var u,t,s,r
u=C.e.n(this.a,b.gd7())
t=C.e.n(this.b,b.gc0())
s=C.e.n(this.c,b.gcE())
r=C.e.n(this.d,b.gjJ(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.au(u,t,s,r)},
t:function(a,b){var u,t,s,r
u=C.e.t(this.a,b.gd7())
t=C.e.t(this.b,b.gc0())
s=C.e.t(this.c,b.gcE())
r=C.e.t(this.d,b.gjJ(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.au(u,t,s,r)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.au))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.eW.prototype={}
V.dx.prototype={
ah:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.r])
return u},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dx))return!1
u=b.a
t=$.G().a
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
u=[P.r]
t=V.c1(H.b([this.a,this.d,this.r],u),3,0)
s=V.c1(H.b([this.b,this.e,this.x],u),3,0)
r=V.c1(H.b([this.c,this.f,this.y],u),3,0)
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
V.aj.prototype={
ah:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
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
if(Math.abs(a7-0)<$.G().a)return V.dy()
a8=1/a7
a9=-r
b0=-d
return V.aT((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
v:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aT(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
dd:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.z(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bj:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.U(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aj))return!1
u=b.a
t=$.G().a
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
eG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.r]
t=V.c1(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.c1(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.c1(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.c1(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
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
O:function(){return this.eG("",3,0)},
H:function(a){return this.eG(a,3,0)}}
V.a_.prototype={
n:function(a,b){return new V.a_(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.a_(this.a-b.a,this.b-b.b)},
u:function(a,b){if(Math.abs(b-0)<$.G().a)return V.b9()
return new V.a_(this.a/b,this.b/b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.U.prototype={
n:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){return new V.U(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.G().a)return V.jF()
return new V.U(this.a/b,this.b/b,this.c/b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.aU.prototype={
n:function(a,b){return new V.aU(C.e.n(this.a,b.glf(b)),C.e.n(this.b,b.glg(b)),C.e.n(this.c,b.glh(b)),C.e.n(this.d,b.gle()))},
t:function(a,b){return new V.aU(C.e.t(this.a,b.glf(b)),C.e.t(this.b,b.glg(b)),C.e.t(this.c,b.glh(b)),C.e.t(this.d,b.gle()))},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aU))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.dK.prototype={
gab:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dK))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.R.prototype={
bc:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.B(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.B(r)
return u*t+s*r},
n:function(a,b){var u,t,s
u=this.a
t=b.geg(b)
if(typeof u!=="number")return u.n()
t=C.e.n(u,t)
u=this.b
s=b.geh(b)
if(typeof u!=="number")return u.n()
return new V.R(t,C.e.n(u,s))},
t:function(a,b){var u,t,s
u=this.a
t=b.geg(b)
if(typeof u!=="number")return u.t()
t=C.e.t(u,t)
u=this.b
s=b.geh(b)
if(typeof u!=="number")return u.t()
return new V.R(t,C.e.t(u,s))},
v:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.R(u*b,t*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.G().a){u=$.kJ
if(u==null){u=new V.R(0,0)
$.kJ=u}return u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.R(u/b,t/b)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=this.a
s=$.G()
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
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.z.prototype={
bc:function(a){return Math.sqrt(this.E(this))},
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cY:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.z(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aI:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.z(u*t-s*r,s*q-p*t,p*r-u*q)},
n:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.z(this.a-b.a,this.b-b.b,this.c-b.c)},
U:function(a){return new V.z(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.z(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.G().a)return V.cH()
return new V.z(this.a/b,this.b/b,this.c/b)},
eP:function(){var u=$.G().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.aN.prototype={
bc:function(a){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=this.d
return Math.sqrt(u*u+t*t+s*s+r*r)},
n:function(a,b){return new V.aN(this.a+b.a,this.b+b.b,this.c+b.c,this.d+b.d)},
t:function(a,b){return new V.aN(C.e.t(this.a,b.geg(b)),C.e.t(this.b,b.geh(b)),C.e.t(this.c,b.gln()),C.e.t(this.d,b.glm()))},
u:function(a,b){var u
if(Math.abs(b-0)<$.G().a){u=$.kQ
if(u==null){u=new V.aN(0,0,0,0)
$.kQ=u}return u}return new V.aN(this.a/b,this.b/b,this.c/b,this.d/b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aN))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
U.eJ.prototype={
c6:function(a){var u=V.nW(a,this.c,this.b)
return u},
gC:function(){var u=this.y
if(u==null){u=D.Q()
this.y=u}return u},
S:function(a){var u=this.y
if(u!=null)u.K(a)},
sdf:function(a,b){},
sd_:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.G().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.c6(t)}u=new D.L("maximumLocation",u,this.b,this,[P.r])
u.b=!0
this.S(u)}},
sd1:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.G().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.c6(t)}u=new D.L("minimumLocation",u,this.c,this,[P.r])
u.b=!0
this.S(u)}},
sa1:function(a,b){var u
b=this.c6(b)
u=this.d
if(!(Math.abs(u-b)<$.G().a)){this.d=b
u=new D.L("location",u,b,this,[P.r])
u.b=!0
this.S(u)}},
sd0:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.G().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.L("maximumVelocity",u,a,this,[P.r])
u.b=!0
this.S(u)}},
sX:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.G().a)){this.f=a
u=new D.L("velocity",u,a,this,[P.r])
u.b=!0
this.S(u)}},
scL:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.G().a)){this.x=a
u=new D.L("dampening",u,a,this,[P.r])
u.b=!0
this.S(u)}},
aB:function(a){var u,t,s,r,q
u=this.f
t=$.G().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa1(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.G().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sX(s)}}}
U.da.prototype={
gC:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
b1:function(a,b){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.da))return!1
return J.D(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.cf.prototype={
gC:function(){var u=this.e
if(u==null){u=D.Q()
this.e=u}return u},
S:function(a){var u
H.d(a,"$iy")
u=this.e
if(u!=null)u.K(a)},
a8:function(){return this.S(null)},
hJ:function(a,b){var u,t,s,r,q,p,o,n
u=U.ab
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gaQ(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gC()
n.toString
H.k(s,r)
if(n.a==null)n.sai(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bI(a,b,this,[u])
u.b=!0
this.S(u)},
iq:function(a,b){var u,t,s
u=U.ab
H.h(b,"$in",[u],"$an")
for(t=b.gV(b),s=this.gaQ();t.G();)t.gM().gC().I(0,s)
u=new D.bJ(a,b,this,[u])
u.b=!0
this.S(u)},
b1:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.Z()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.at(u,u.length,0,[H.t(u,0)]),s=null;u.G();){t=u.d
if(t!=null){r=t.b1(a,b)
if(r!=null)s=s==null?r:r.v(0,s)}}this.f=s==null?V.dy():s
u=this.e
if(u!=null)u.aA()}return this.f},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cf))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.D(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$an:function(){return[U.ab]},
$aa0:function(){return[U.ab]},
$iab:1}
U.ab.prototype={}
U.e5.prototype={
gC:function(){var u=this.cy
if(u==null){u=D.Q()
this.cy=u}return u},
S:function(a){var u
H.d(a,"$iy")
u=this.cy
if(u!=null)u.K(a)},
a8:function(){return this.S(null)},
b8:function(a){if(this.a!=null)return!1
this.a=a
a.c.gef().h(0,this.gcf())
this.a.c.geS().h(0,this.gci())
this.a.c.gbV().h(0,this.gck())
return!0},
cg:function(a){H.d(a,"$iy")
if(!J.D(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
cj:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$ib7")
if(!this.y)return
if(this.x){u=a.d.t(0,a.y)
u=new V.R(u.a,u.b)
u=u.E(u)
t=this.r
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.t(0,a.y)
u=new V.R(t.a,t.b).v(0,2).u(0,u.gab())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.v()
s=this.e
if(typeof s!=="number")return H.B(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=new V.R(s.a,s.b).v(0,2).u(0,u.gab())
s=this.b
q=r.a
if(typeof q!=="number")return q.U()
p=this.e
if(typeof p!=="number")return H.B(p)
o=this.z
if(typeof o!=="number")return H.B(o)
s.sa1(0,-q*p+o)
this.b.sX(0)
t=t.t(0,a.z)
this.Q=new V.R(t.a,t.b).v(0,2).u(0,u.gab())}this.a8()},
cl:function(a){var u,t,s
H.d(a,"$iy")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.E(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.v()
s=this.e
if(typeof s!=="number")return H.B(s)
u.sX(t*10*s)
this.a8()}},
b1:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.Z()
if(u<t){this.ch=t
s=a.y
this.b.aB(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aT(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iab:1}
U.e6.prototype={
gC:function(){var u=this.fx
if(u==null){u=D.Q()
this.fx=u}return u},
S:function(a){var u
H.d(a,"$iy")
u=this.fx
if(u!=null)u.K(a)},
a8:function(){return this.S(null)},
b8:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gef().h(0,this.gcf())
this.a.c.geS().h(0,this.gci())
this.a.c.gbV().h(0,this.gck())
u=this.a.d
t=u.f
if(t==null){t=D.Q()
u.f=t
u=t}else u=t
u.h(0,this.ghC())
u=this.a.d
t=u.d
if(t==null){t=D.Q()
u.d=t
u=t}else u=t
u.h(0,this.ghE())
u=this.a.e
t=u.b
if(t==null){t=D.Q()
u.b=t
u=t}else u=t
u.h(0,this.gj7())
u=this.a.e
t=u.d
if(t==null){t=D.Q()
u.d=t
u=t}else u=t
u.h(0,this.gj5())
u=this.a.e
t=u.c
if(t==null){t=D.Q()
u.c=t
u=t}else u=t
u.h(0,this.gj3())
return!0},
ar:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.U()
u=-u}if(this.r){if(typeof t!=="number")return t.U()
t=-t}return new V.R(u,t)},
cg:function(a){a=H.i(H.d(a,"$iy"),"$ib7")
if(!J.D(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
cj:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$ib7")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.R(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.ar(new V.R(t.a,t.b).v(0,2).u(0,u.gab()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.U()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sX(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.U()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.ar(new V.R(s.a,s.b).v(0,2).u(0,u.gab()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa1(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa1(0,-p*q+s)
this.b.sX(0)
this.c.sX(0)
t=t.t(0,a.z)
this.dx=this.ar(new V.R(t.a,t.b).v(0,2).u(0,u.gab()))}this.a8()},
cl:function(a){var u,t,s
H.d(a,"$iy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.U()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sX(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.U()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sX(-t*10*u)
this.a8()}},
hD:function(a){if(H.i(H.d(a,"$iy"),"$idu").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hF:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$ib7")
if(!J.D(this.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=this.ar(new V.R(s.a,s.b).v(0,2).u(0,u.gab()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa1(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa1(0,-p*q+s)
this.b.sX(0)
this.c.sX(0)
t=t.t(0,a.z)
this.dx=this.ar(new V.R(t.a,t.b).v(0,2).u(0,u.gab()))
this.a8()},
j8:function(a){H.d(a,"$iy")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
j6:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$ie_")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.R(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.ar(new V.R(t.a,t.b).v(0,2).u(0,u.gab()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.U()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sX(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.U()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.ar(new V.R(s.a,s.b).v(0,2).u(0,u.gab()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa1(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa1(0,-p*q+s)
this.b.sX(0)
this.c.sX(0)
t=t.t(0,a.z)
this.dx=this.ar(new V.R(t.a,t.b).v(0,2).u(0,u.gab()))}this.a8()},
j4:function(a){var u,t,s
H.d(a,"$iy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.U()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sX(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.U()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sX(-t*10*u)
this.a8()}},
b1:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.Z()
if(u<t){this.dy=t
s=a.y
this.c.aB(s)
this.b.aB(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aT(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.v(0,V.aT(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iab:1}
U.e7.prototype={
gC:function(){var u=this.r
if(u==null){u=D.Q()
this.r=u}return u},
S:function(a){var u=this.r
if(u!=null)u.K(a)},
b8:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.Q()
u.e=t
u=t}else u=t
t=this.ghG()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.Q()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hH:function(a){var u,t,s,r
H.d(a,"$iy")
if(!J.D(this.b,this.a.b.c))return
H.i(a,"$icm")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){this.d=r
u=new D.L("zoom",u,r,this,[P.r])
u.b=!0
this.S(u)}},
b1:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aT(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iab:1}
M.de.prototype={
aD:function(a){var u
H.d(a,"$iy")
u=this.x
if(u!=null)u.K(a)},
fV:function(){return this.aD(null)},
hT:function(a,b){var u,t,s,r,q,p,o,n
u=E.aq
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gaq(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bC()
n.sai(null)
n.sb5(null)
n.c=null
n.d=0
o.z=n}H.k(s,r)
if(n.a==null)n.sai(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bI(a,b,this,[u])
u.b=!0
this.aD(u)},
hV:function(a,b){var u,t,s
u=E.aq
H.h(b,"$in",[u],"$an")
for(t=b.gV(b),s=this.gaq();t.G();)t.gM().gC().I(0,s)
u=new D.bJ(a,b,this,[u])
u.b=!0
this.aD(u)},
sf6:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gC().I(0,this.gaq())
t=this.c
this.c=a
if(a!=null)a.gC().h(0,this.gaq())
u=new D.L("technique",t,this.c,this,[O.bT])
u.b=!0
this.aD(u)}},
gC:function(){var u=this.x
if(u==null){u=D.Q()
this.x=u}return u},
aZ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.f2(this.c)
u=this.b
u.toString
t=a.a
C.b.jN(t,36160,null)
C.b.cN(t,2884)
C.b.cN(t,2929)
C.b.ka(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.B(s)
o=C.e.an(p*s)
p=q.b
if(typeof r!=="number")return H.B(r)
n=C.e.an(p*r)
p=C.e.an(q.c*s)
a.c=p
q=C.e.an(q.d*r)
a.d=q
C.b.ld(t,o,n,p,q)
C.b.jT(t,u.c)
u=u.a
C.b.jS(t,u.a,u.b,u.c,u.d)
C.b.jR(t,16640)
u=this.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aT(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.f1(i)
t=$.ks
if(t==null){t=V.jF()
q=V.kO()
p=$.kK
if(p==null){p=new V.z(0,0,-1)
$.kK=p}p=V.ko(t,q,p)
$.ks=p
h=p}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.v(0,h)}a.db.f1(h)
u=this.c
if(u!=null)u.aB(a)
for(u=this.d.a,u=new J.at(u,u.length,0,[H.t(u,0)]);u.G();)u.d.aB(a)
for(u=this.d.a,u=new J.at(u,u.length,0,[H.t(u,0)]);u.G();)u.d.aZ(a)
this.a.toString
a.cy.d4()
a.db.d4()
this.b.toString
a.f0()},
sfU:function(a,b){this.d=H.h(b,"$ia0",[E.aq],"$aa0")},
$io3:1}
A.d4.prototype={}
A.eC.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
kg:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.ei(r.a,r.c)}},
kc:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.ee(r.a,r.c)}}}
A.fu.prototype={
fJ:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
a7.jg(u)
a7.jn(u)
a7.jh(u)
a7.jv(u)
a7.jw(u)
a7.jp(u)
a7.jA(u)
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
s.jk(u)
s.jf(u)
s.ji(u)
s.jl(u)
s.jt(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.jr(u)
s.js(u)}s.jo(u)
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
s.jj(u)
s.jq(u)
s.ju(u)
s.jx(u)
s.jy(u)
s.jz(u)
s.jm(u)}m=u.a+="// === Main ===\n"
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
this.e=this.dH(n,35633)
this.f=this.dH(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.e6(s,q,this.e)
C.b.e6(s,this.r,this.f)
C.b.ky(s,this.r)
if(!H.jT(C.b.c_(s,this.r,35714))){h=C.b.fm(s,this.r)
C.b.k6(s,this.r)
H.o(P.q("Failed to link shader: "+H.j(h)))}this.iT()
this.iV()
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a7.fr)this.id=H.i(this.y.p(0,"invViewMat"),"$iaz")
if(t)this.dy=H.i(this.y.p(0,"objMat"),"$iaz")
if(r)this.fr=H.i(this.y.p(0,"viewObjMat"),"$iaz")
this.fy=H.i(this.y.p(0,"projViewObjMat"),"$iaz")
if(a7.x2)this.k1=H.i(this.y.p(0,"txt2DMat"),"$icA")
if(a7.y1)this.k2=H.i(this.y.p(0,"txtCubeMat"),"$iaz")
if(a7.y2)this.k3=H.i(this.y.p(0,"colorMat"),"$iaz")
this.sha(H.b([],[A.az]))
t=a7.ax
if(t>0){this.k4=H.d(this.y.p(0,"bendMatCount"),"$iJ")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.k(0,q)
if(f==null)H.o(P.q("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.i(f,"$iaz"))}}t=a7.a
if(t!==C.d){this.r2=H.i(this.y.p(0,"emissionClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.i(this.y.p(0,"emissionTxt"),"$iak")
this.x1=H.i(this.y.p(0,"nullEmissionTxt"),"$iJ")
break
case C.i:this.ry=H.i(this.y.p(0,"emissionTxt"),"$ial")
this.x1=H.i(this.y.p(0,"nullEmissionTxt"),"$iJ")
break}}t=a7.b
if(t!==C.d){this.x2=H.i(this.y.p(0,"ambientClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.i(this.y.p(0,"ambientTxt"),"$iak")
this.ax=H.i(this.y.p(0,"nullAmbientTxt"),"$iJ")
break
case C.i:this.y2=H.i(this.y.p(0,"ambientTxt"),"$ial")
this.ax=H.i(this.y.p(0,"nullAmbientTxt"),"$iJ")
break}}t=a7.c
if(t!==C.d){this.al=H.i(this.y.p(0,"diffuseClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.bx=H.i(this.y.p(0,"diffuseTxt"),"$iak")
this.by=H.i(this.y.p(0,"nullDiffuseTxt"),"$iJ")
break
case C.i:this.ej=H.i(this.y.p(0,"diffuseTxt"),"$ial")
this.by=H.i(this.y.p(0,"nullDiffuseTxt"),"$iJ")
break}}t=a7.d
if(t!==C.d){this.bz=H.i(this.y.p(0,"invDiffuseClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.ek=H.i(this.y.p(0,"invDiffuseTxt"),"$iak")
this.bA=H.i(this.y.p(0,"nullInvDiffuseTxt"),"$iJ")
break
case C.i:this.el=H.i(this.y.p(0,"invDiffuseTxt"),"$ial")
this.bA=H.i(this.y.p(0,"nullInvDiffuseTxt"),"$iJ")
break}}t=a7.e
if(t!==C.d){this.bD=H.i(this.y.p(0,"shininess"),"$iY")
this.bB=H.i(this.y.p(0,"specularClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.em=H.i(this.y.p(0,"specularTxt"),"$iak")
this.bC=H.i(this.y.p(0,"nullSpecularTxt"),"$iJ")
break
case C.i:this.en=H.i(this.y.p(0,"specularTxt"),"$ial")
this.bC=H.i(this.y.p(0,"nullSpecularTxt"),"$iJ")
break}}switch(a7.f){case C.d:break
case C.j:break
case C.h:this.eo=H.i(this.y.p(0,"bumpTxt"),"$iak")
this.bE=H.i(this.y.p(0,"nullBumpTxt"),"$iJ")
break
case C.i:this.ep=H.i(this.y.p(0,"bumpTxt"),"$ial")
this.bE=H.i(this.y.p(0,"nullBumpTxt"),"$iJ")
break}if(a7.dy){this.eq=H.i(this.y.p(0,"envSampler"),"$ial")
this.er=H.i(this.y.p(0,"nullEnvTxt"),"$iJ")
t=a7.r
if(t!==C.d){this.bF=H.i(this.y.p(0,"reflectClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.es=H.i(this.y.p(0,"reflectTxt"),"$iak")
this.bG=H.i(this.y.p(0,"nullReflectTxt"),"$iJ")
break
case C.i:this.eu=H.i(this.y.p(0,"reflectTxt"),"$ial")
this.bG=H.i(this.y.p(0,"nullReflectTxt"),"$iJ")
break}}t=a7.x
if(t!==C.d){this.bH=H.i(this.y.p(0,"refraction"),"$iY")
this.bI=H.i(this.y.p(0,"refractClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.ev=H.i(this.y.p(0,"refractTxt"),"$iak")
this.bJ=H.i(this.y.p(0,"nullRefractTxt"),"$iJ")
break
case C.i:this.ew=H.i(this.y.p(0,"refractTxt"),"$ial")
this.bJ=H.i(this.y.p(0,"nullRefractTxt"),"$iJ")
break}}}t=a7.y
if(t!==C.d){this.bK=H.i(this.y.p(0,"alpha"),"$iY")
switch(t){case C.d:break
case C.j:break
case C.h:this.ex=H.i(this.y.p(0,"alphaTxt"),"$iak")
this.bL=H.i(this.y.p(0,"nullAlphaTxt"),"$iJ")
break
case C.i:this.ey=H.i(this.y.p(0,"alphaTxt"),"$ial")
this.bL=H.i(this.y.p(0,"nullAlphaTxt"),"$iJ")
break}}this.sfW(H.b([],[A.cz]))
this.sfX(H.b([],[A.cB]))
this.sfY(H.b([],[A.cC]))
this.sfZ(H.b([],[A.cD]))
this.sh_(H.b([],[A.cE]))
this.sh0(H.b([],[A.cF]))
if(a7.k2){t=a7.z
if(t>0){this.ez=H.d(this.y.p(0,"dirLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.k(0,r)
if(f==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="dirLights["+g+"].color"
e=s.k(0,r)
if(e==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.cO;(s&&C.a).h(s,new A.cz(g,f,e))}}t=a7.Q
if(t>0){this.eA=H.d(this.y.p(0,"pntLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.k(0,r)
if(f==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.k(0,r)
if(e==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="pntLights["+g+"].color"
d=s.k(0,r)
if(d==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="pntLights["+g+"].att0"
c=s.k(0,r)
if(c==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iY")
s=this.y
r="pntLights["+g+"].att1"
b=s.k(0,r)
if(b==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iY")
s=this.y
r="pntLights["+g+"].att2"
a=s.k(0,r)
if(a==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iY")
s=this.cP;(s&&C.a).h(s,new A.cB(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.eB=H.d(this.y.p(0,"spotLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.k(0,r)
if(f==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="spotLights["+g+"].objDir"
e=s.k(0,r)
if(e==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.k(0,r)
if(d==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="spotLights["+g+"].color"
c=s.k(0,r)
if(c==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.k(0,r)
if(b==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iY")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.k(0,r)
if(a==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iY")
s=this.y
r="spotLights["+g+"].att0"
a0=s.k(0,r)
if(a0==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iY")
s=this.y
r="spotLights["+g+"].att1"
a1=s.k(0,r)
if(a1==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iY")
s=this.y
r="spotLights["+g+"].att2"
a2=s.k(0,r)
if(a2==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$iY")
s=this.cQ;(s&&C.a).h(s,new A.cC(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.eC=H.d(this.y.p(0,"txtDirLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.k(0,r)
if(f==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.k(0,r)
if(e==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.k(0,r)
if(d==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.k(0,r)
if(c==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="txtDirLights["+g+"].color"
b=s.k(0,r)
if(b==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iI")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.k(0,r)
if(a==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iJ")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.k(0,r)
if(a0==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iak")
s=this.cR;(s&&C.a).h(s,new A.cD(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.eD=H.d(this.y.p(0,"txtPntLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.k(0,r)
if(f==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.k(0,r)
if(e==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.k(0,r)
if(d==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$icA")
s=this.y
r="txtPntLights["+g+"].color"
c=s.k(0,r)
if(c==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.k(0,r)
if(b==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iJ")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.k(0,r)
if(a==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iY")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.k(0,r)
if(a0==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iY")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.k(0,r)
if(a1==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iY")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.k(0,r)
if(a2==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$ial")
s=this.cS;(s&&C.a).h(s,new A.cE(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.eE=H.d(this.y.p(0,"txtSpotLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.k(0,r)
if(f==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.k(0,r)
if(e==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.k(0,r)
if(d==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.k(0,r)
if(c==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.k(0,r)
if(b==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iI")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.k(0,r)
if(a==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iJ")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.k(0,r)
if(a0==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iI")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.k(0,r)
if(a1==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iY")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.k(0,r)
if(a2==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$iY")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.k(0,r)
if(a3==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a3,"$iY")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.k(0,r)
if(a4==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a4,"$iY")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.k(0,r)
if(a5==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a5,"$iY")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.k(0,r)
if(a6==null)H.o(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a6,"$iak")
s=this.cT;(s&&C.a).h(s,new A.cF(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
aj:function(a,b,c){if(c==null||!c.d)C.b.T(b.a,b.d,1)
else{a.fA(c)
C.b.T(b.a,b.d,0)}},
ad:function(a,b,c){C.b.T(b.a,b.d,1)},
sha:function(a){this.r1=H.h(a,"$ia",[A.az],"$aa")},
sfW:function(a){this.cO=H.h(a,"$ia",[A.cz],"$aa")},
sfX:function(a){this.cP=H.h(a,"$ia",[A.cB],"$aa")},
sfY:function(a){this.cQ=H.h(a,"$ia",[A.cC],"$aa")},
sfZ:function(a){this.cR=H.h(a,"$ia",[A.cD],"$aa")},
sh_:function(a){this.cS=H.h(a,"$ia",[A.cE],"$aa")},
sh0:function(a){this.cT=H.h(a,"$ia",[A.cF],"$aa")}}
A.fx.prototype={
jg:function(a){var u,t,s
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
jn:function(a){var u
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
jh:function(a){var u
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
jv:function(a){var u,t
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
jw:function(a){var u,t
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
jp:function(a){var u
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
jA:function(a){var u
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
u+="uniform int null"+(c[0].toUpperCase()+C.c.ap(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jk:function(a){var u,t
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
jf:function(a){var u,t
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
ji:function(a){var u,t
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
jl:function(a){var u,t
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
jt:function(a){var u,t
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
jo:function(a){var u,t
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
jr:function(a){var u,t
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
js:function(a){var u,t
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
jj:function(a){var u,t
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
jq:function(a){var u,t
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
ju:function(a){var u,t
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
jx:function(a){var u,t,s
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
jy:function(a){var u,t,s
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
jz:function(a){var u,t,s
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
jm:function(a){var u
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
A.cz.prototype={}
A.cD.prototype={}
A.cB.prototype={}
A.cE.prototype={}
A.cC.prototype={}
A.cF.prototype={}
A.cs.prototype={
fM:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dH:function(a,b){var u,t,s
u=this.a
t=C.b.k0(u,b)
C.b.fB(u,t,a)
C.b.jV(u,t)
if(!H.jT(C.b.fo(u,t,35713))){s=C.b.fn(u,t)
C.b.k7(u,t)
throw H.c(P.q("Error compiling shader '"+H.j(t)+"': "+H.j(s)))}return t},
iT:function(){var u,t,s,r,q,p
u=H.b([],[A.d4])
t=this.a
s=H.ad(C.b.c_(t,this.r,35721))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.b.fh(t,this.r,r)
p=C.b.fj(t,this.r,q.name)
C.a.h(u,new A.d4(t,q.name,p))}this.x=new A.eC(u)},
iV:function(){var u,t,s,r,q,p
u=H.b([],[A.e0])
t=this.a
s=H.ad(C.b.c_(t,this.r,35718))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.b.fi(t,this.r,r)
p=C.b.fp(t,this.r,q.name)
C.a.h(u,this.k5(q.type,q.size,q.name,p))}this.y=new A.hv(u)},
aP:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.J(u,t,b,c)
else return A.jH(u,t,b,a,c)},
hh:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ak(u,t,b,c)
else return A.jH(u,t,b,a,c)},
hi:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.al(u,t,b,c)
else return A.jH(u,t,b,a,c)},
bs:function(a,b){return new P.ec(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
k5:function(a,b,c,d){switch(a){case 5120:return this.aP(b,c,d)
case 5121:return this.aP(b,c,d)
case 5122:return this.aP(b,c,d)
case 5123:return this.aP(b,c,d)
case 5124:return this.aP(b,c,d)
case 5125:return this.aP(b,c,d)
case 5126:return new A.Y(this.a,this.r,c,d)
case 35664:return new A.hq(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.ht(this.a,this.r,c,d)
case 35667:return new A.hr(this.a,this.r,c,d)
case 35668:return new A.hs(this.a,this.r,c,d)
case 35669:return new A.hu(this.a,this.r,c,d)
case 35674:return new A.hw(this.a,this.r,c,d)
case 35675:return new A.cA(this.a,this.r,c,d)
case 35676:return new A.az(this.a,this.r,c,d)
case 35678:return this.hh(b,c,d)
case 35680:return this.hi(b,c,d)
case 35670:throw H.c(this.bs("BOOL",c))
case 35671:throw H.c(this.bs("BOOL_VEC2",c))
case 35672:throw H.c(this.bs("BOOL_VEC3",c))
case 35673:throw H.c(this.bs("BOOL_VEC4",c))
default:throw H.c(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.bB.prototype={
i:function(a){return this.b}}
A.e0.prototype={}
A.hv.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.k(0,b)
if(u==null)throw H.c(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
kq:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r)s+=u[r].i(0)+a
return s},
O:function(){return this.kq("\n")}}
A.J.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.hr.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.hs.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.hu.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.hp.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
sjd:function(a){this.e=H.h(a,"$ia",[P.l],"$aa")}}
A.Y.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.hq.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.I.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.ht.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.hw.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.cA.prototype={
ao:function(a){var u=new Float32Array(H.bX(H.h(a,"$ia",[P.r],"$aa")))
C.b.fa(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.az.prototype={
ao:function(a){var u=new Float32Array(H.bX(H.h(a,"$ia",[P.r],"$aa")))
C.b.fb(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.ak.prototype={
fA:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.T(t,s,0)
else C.b.T(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.al.prototype={
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.iO.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cY(u.b,b).cY(u.d.cY(u.c,b),c)
a.sa1(0,new V.U(t.a,t.b,t.c))
a.sbT(t.u(0,Math.sqrt(t.E(t))))
u=1-b
s=1-c
a.se7(new V.aU(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:5}
F.iY.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:30}
F.j_.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.B(q)
t=-t*q
p=s*q
a.sa1(0,new V.U(t,p,r))
p=new V.z(t,p,r)
a.sbT(p.u(0,Math.sqrt(p.E(p))))
a.se7(new V.aU(1-c,2+c,-1,-1))},
$S:5}
F.j0.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:18}
F.j1.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:18}
F.j9.prototype={
$3:function(a,b,c){var u,t,s,r
u=c*3.141592653589793
t=Math.sin(u)
s=b*6.283185307179586
r=new V.z(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.u(0,Math.sqrt(r.E(r)))
a.sa1(0,new V.U(s.a,s.b,s.c))},
$S:5}
F.jn.prototype={
$2:function(a,b){return 0},
$S:30}
F.jo.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.B(u)
t=a.f
s=new V.z(t.a,t.b,t.c)
u=s.u(0,Math.sqrt(s.E(s))).v(0,this.b+u)
a.sa1(0,new V.U(u.a,u.b,u.c))},
$S:5}
F.jq.prototype={
$1:function(a){return new V.U(Math.cos(a),Math.sin(a),0)},
$S:27}
F.j8.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.U(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:27}
F.iZ.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.k6(t.$1(u),s)
s=J.lK(J.k6(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.z(s.a,s.b,s.c)
q=s.u(0,Math.sqrt(s.E(s)))
t=$.kL
if(t==null){t=new V.z(1,0,0)
$.kL=t
p=t}else p=t
t=q.aI(!J.D(q,p)?V.kP():p)
o=t.u(0,Math.sqrt(t.E(t)))
t=o.aI(q)
p=t.u(0,Math.sqrt(t.E(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.v(0,t*s)
s=o.v(0,m*s)
a.sa1(0,J.lJ(r,new V.U(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:5}
F.a3.prototype={
ba:function(){if(!this.gbb()){C.a.I(this.a.a.d.b,this)
this.a.a.W()}this.cr()
this.cs()
this.iG()},
cv:function(a){this.a=a
C.a.h(a.d.b,this)},
cw:function(a){this.b=a
C.a.h(a.d.c,this)},
iS:function(a){this.c=a
C.a.h(a.d.d,this)},
cr:function(){var u=this.a
if(u!=null){C.a.I(u.d.b,this)
this.a=null}},
cs:function(){var u=this.b
if(u!=null){C.a.I(u.d.c,this)
this.b=null}},
iG:function(){var u=this.c
if(u!=null){C.a.I(u.d.d,this)
this.c=null}},
gbb:function(){return this.a==null||this.b==null||this.c==null},
h9:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cH()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.eP())return
return q.u(0,Math.sqrt(q.E(q)))},
hd:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.t(0,t)
u=new V.z(u.a,u.b,u.c)
q=u.u(0,Math.sqrt(u.E(u)))
u=r.t(0,t)
u=new V.z(u.a,u.b,u.c)
u=q.aI(u.u(0,Math.sqrt(u.E(u))))
return u.u(0,Math.sqrt(u.E(u)))},
cH:function(){if(this.d!=null)return!0
var u=this.h9()
if(u==null){u=this.hd()
if(u==null)return!1}this.d=u
this.a.a.W()
return!0},
h8:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cH()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.eP())return
return q.u(0,Math.sqrt(q.E(q)))},
hc:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.G().a){u=m.t(0,p)
u=new V.z(u.a,u.b,u.c)
h=u.u(0,Math.sqrt(u.E(u)))
if(j.a-k.a<0)h=h.U(0)}else{g=(u-l.b)/i
u=m.t(0,p).v(0,g).n(0,p).t(0,s)
u=new V.z(u.a,u.b,u.c)
h=u.u(0,Math.sqrt(u.E(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.U(0)}u=this.d
if(u!=null){f=u.u(0,Math.sqrt(u.E(u)))
u=f.aI(h)
u=u.u(0,Math.sqrt(u.E(u))).aI(f)
h=u.u(0,Math.sqrt(u.E(u)))}return h},
cF:function(){if(this.e!=null)return!0
var u=this.h8()
if(u==null){u=this.hc()
if(u==null)return!1}this.e=u
this.a.a.W()
return!0},
aO:function(a,b){var u=b.a
if(u==null)throw H.c(P.q("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.q("May not replace a face's vertex with a vertex attached to a different shape."))},
gjU:function(a){if(J.D(this.a,this.b))return!0
if(J.D(this.b,this.c))return!0
if(J.D(this.c,this.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u,t
if(this.gbb())return a+"disposed"
u=a+C.c.ag(J.ap(this.a.e),0)+", "+C.c.ag(J.ap(this.b.e),0)+", "+C.c.ag(J.ap(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.H("")}}
F.f_.prototype={}
F.h5.prototype={
aX:function(a,b,c){var u,t
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
F.b6.prototype={
ba:function(){if(!this.gbb()){C.a.I(this.a.a.c.b,this)
this.a.a.W()}this.cr()
this.cs()},
cv:function(a){this.a=a
C.a.h(a.c.b,this)},
cw:function(a){this.b=a
C.a.h(a.c.c,this)},
cr:function(){var u=this.a
if(u!=null){C.a.I(u.c.b,this)
this.a=null}},
cs:function(){var u=this.b
if(u!=null){C.a.I(u.c.c,this)
this.b=null}},
gbb:function(){return this.a==null||this.b==null},
aO:function(a,b){var u=b.a
if(u==null)throw H.c(P.q("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.q("May not replace a line's vertex with a vertex attached to a different shape."))},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){if(this.gbb())return a+"disposed"
return a+C.c.ag(J.ap(this.a.e),0)+", "+C.c.ag(J.ap(this.b.e),0)},
O:function(){return this.H("")}}
F.fh.prototype={}
F.ho.prototype={
aX:function(a,b,c){var u,t
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
F.br.prototype={
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ag(J.ap(u.e),0)},
O:function(){return this.H("")}}
F.dM.prototype={
gC:function(){var u=this.e
if(u==null){u=D.Q()
this.e=u}return u},
aY:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.D()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){q=u[r]
this.a.h(0,q.jW())}this.a.D()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){p=u[r]
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
n=new F.br()
if(m.a==null)H.o(P.q("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.K(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){l=u[r]
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
F.md(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){i=u[r]
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
F.bE(k,j,h)}u=this.e
if(u!=null)u.aA()},
ak:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.ak()||!1
if(!this.a.ak())t=!1
u=this.e
if(u!=null)u.aA()
return t},
kk:function(a,b,c){var u,t,s,r
u=this.a.c.length
for(t=c;t<u;++t){s=this.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
if(b.aX(0,a,r))return r}return},
kj:function(a,b){return this.kk(a,b,0)},
iK:function(a,b){var u,t,s,r,q,p
H.h(b,"$ia",[F.a4],"$aa")
this.a.h(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.A)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.k(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.o(P.q("May not replace a face's vertex when the point has been disposed."))
if(J.D(q,s)){r.aO(s,a)
q=r.a
if(q!=null){C.a.I(q.d.b,r)
r.a=null}r.a=a
C.a.h(a.d.b,r)
p=1}else p=0
if(J.D(r.b,s)){r.aO(s,a)
q=r.b
if(q!=null){C.a.I(q.d.c,r)
r.b=null}r.b=a
C.a.h(a.d.c,r);++p}if(J.D(r.c,s)){r.aO(s,a)
q=r.c
if(q!=null){C.a.I(q.d.d,r)
r.c=null}r.c=a
C.a.h(a.d.d,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.K(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.k(0,0)
q=r.a
if(q==null||r.b==null)H.o(P.q("May not replace a line's vertex when the point has been disposed."))
if(J.D(q,s)){r.aO(s,a)
q=r.a
if(q!=null){C.a.I(q.c.b,r)
r.a=null}r.a=a
C.a.h(a.c.b,r)
p=1}else p=0
if(J.D(r.b,s)){r.aO(s,a)
q=r.b
if(q!=null){C.a.I(q.c.c,r)
r.b=null}r.b=a
C.a.h(a.c.c,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.K(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.o(P.q("May not replace a point's vertex when the point has been disposed."))
if(J.D(q,s)){if(a.a==null)H.o(P.q("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.a.I(q.b.b,r)
r.a=null}r.a=a
C.a.h(a.b.b,r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.K(null)}}this.a.I(0,s)}},
eR:function(a,b){var u,t,s,r,q,p,o,n
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.t(u,0)])
for(u=[F.a4];t.length!==0;){s=C.a.gkm(t)
C.a.kV(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.A)(t),++p){o=t[p]
if(o!=null&&a.aX(0,s,o)){C.a.h(r,o)
C.a.I(t,o)}}if(r.length>1){n=b.aY(r)
if(n!=null){this.iK(n,r)
C.a.h(t,n)}}}}this.a.D()
this.c.bQ()
this.d.bQ()
this.b.kW()
this.c.d8(new F.ho())
this.d.d8(new F.h5())
u=this.e
if(u!=null)u.aA()},
jG:function(a){this.eR(new F.cI(),new F.fH())},
bu:function(){return this.jG(null)},
jP:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.bf()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.be().a)!==0)++r
if((s&$.bd().a)!==0)++r
if((s&$.bg().a)!==0)++r
if((s&$.bh().a)!==0)++r
if((s&$.cZ().a)!==0)++r
if((s&$.d_().a)!==0)++r
if((s&$.c6().a)!==0)++r
if((s&$.bc().a)!==0)++r
q=a1.gdk(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.r
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.d6])
for(m=0,l=0;l<r;++l){k=a1.jK(l)
j=k.gdk(k)
C.a.q(n,l,new Z.d6(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].kz(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.q(o,g,h[f]);++g}}m+=j}H.h(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.av(t,34962,e)
C.b.eb(t,34962,new Float32Array(H.bX(o)),35044)
C.b.av(t,34962,null)
d=new Z.d7(new Z.e8(34962,e),n,a1)
d.shw(H.b([],[Z.bp]))
if(this.b.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)}a=Z.jK(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bp(0,c.length,a))}if(this.c.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.D()
C.a.h(c,b.e)}a=Z.jK(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bp(1,c.length,a))}if(this.d.b.length!==0){s=P.l
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
C.a.h(c,b.e)}a=Z.jK(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bp(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.H("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.H("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.H("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.H("   "))}return C.a.l(u,"\n")},
am:function(a){var u=this.e
if(u!=null)u.K(a)},
W:function(){return this.am(null)},
$io4:1}
F.fZ.prototype={
bt:function(a,b,c,d){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
u.a.h(0,d)
return F.bE(b,c,d)},
jC:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[F.a4],"$aa")
u=H.b([],[F.a3])
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
C.a.h(u,F.bE(s,p,o))}}return u},
jD:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.h(c,"$ia",[F.a4],"$aa")
u=H.b([],[F.a3])
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
C.a.h(u,F.bE(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.bE(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.bE(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.bE(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
d8:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.k(0,q)
for(o=q-1;o>=0;--o){n=r.d.k(0,o)
if(a.aX(0,p,n)){p.ba()
break}}}}},
bQ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gjU(s)
if(t)s.ba()}},
ak:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cH())s=!1
return s},
cG:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cF())s=!1
return s},
i:function(a){return this.O()},
H:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].H(a))
return C.a.l(u,"\n")},
O:function(){return this.H("")},
sho:function(a){this.b=H.h(a,"$ia",[F.a3],"$aa")}}
F.h_.prototype={
gm:function(a){return this.b.length},
d8:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.k(0,q)
for(o=q-1;o>=0;--o){n=r.c.k(0,o)
if(a.aX(0,p,n)){p.ba()
break}}}}},
bQ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.D(s.a,s.b)
if(t)s.ba()}},
i:function(a){return this.O()},
H:function(a){var u,t,s,r
u=H.b([],[P.f])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].H(a+(""+s+". ")))}return C.a.l(u,"\n")},
O:function(){return this.H("")},
shy:function(a){this.b=H.h(a,"$ia",[F.b6],"$aa")}}
F.h0.prototype={
gm:function(a){return this.b.length},
kW:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.I(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.K(null)}s=t.a
if(s!=null){C.a.I(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
H:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].H(a))
return C.a.l(u,"\n")},
O:function(){return this.H("")},
sco:function(a){this.b=H.h(a,"$ia",[F.br],"$aa")}}
F.a4.prototype={
cK:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.bU(this.cx,s,p,u,t,r,q,a,o)},
jW:function(){return this.cK(null)},
sa1:function(a,b){var u
if(!J.D(this.f,b)){this.f=b
u=this.a
if(u!=null)u.W()}},
sd2:function(a){var u
a=a==null?null:a.u(0,Math.sqrt(a.E(a)))
if(!J.D(this.r,a)){this.r=a
u=this.a
if(u!=null)u.W()}},
se9:function(a){var u
a=a==null?null:a.u(0,Math.sqrt(a.E(a)))
if(!J.D(this.x,a)){this.x=a
u=this.a
if(u!=null)u.W()}},
sb0:function(a){var u
if(!J.D(this.y,a)){this.y=a
u=this.a
if(u!=null)u.W()}},
sbT:function(a){var u
if(!J.D(this.z,a)){this.z=a
u=this.a
if(u!=null)u.W()}},
saw:function(a,b){var u
if(!J.D(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.W()}},
sff:function(a){var u
if(this.ch!==a){this.ch=a
u=this.a
if(u!=null)u.W()}},
se7:function(a){var u
if(!J.D(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.W()}},
kz:function(a){var u,t
if(a.A(0,$.bf())){u=this.f
t=[P.r]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.be())){u=this.r
t=[P.r]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.bd())){u=this.x
t=[P.r]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.bg())){u=this.y
t=[P.r]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.A(0,$.bh())){u=this.z
t=[P.r]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.cZ())){u=this.Q
t=[P.r]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.d_())){u=this.Q
if(u==null)return H.b([1,1,1,1],[P.r])
else return u.dc(0)}else if(a.A(0,$.c6()))return H.b([this.ch],[P.r])
else if(a.A(0,$.bc())){u=this.cx
t=[P.r]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.r])},
cH:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cH()
this.d.a0(0,new F.hU(u))
u=u.a
this.r=u.u(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.W()
u=this.a.e
if(u!=null)u.aA()}return!0},
cF:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cH()
this.d.a0(0,new F.hT(u))
u=u.a
this.x=u.u(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.W()
u=this.a.e
if(u!=null)u.aA()}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u,t,s
u=H.b([],[P.f])
C.a.h(u,C.c.ag(J.ap(this.e),0))
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
C.a.h(u,V.O(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.l(u,", ")
return a+"{"+s+"}"},
O:function(){return this.H("")}}
F.hU.prototype={
$1:function(a){var u,t
H.d(a,"$ia3")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:7}
F.hT.prototype={
$1:function(a){var u,t
H.d(a,"$ia3")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:7}
F.hK.prototype={
D:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.q("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.W()
return!0},
jF:function(a,b,c,d,e,f,g,h,i){var u=F.bU(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
jE:function(a,b,c,d,e,f){return this.jF(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
I:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.c(P.q("May not remove a vertex without first making it empty."))
b.a=null
C.a.I(this.c,b)
u.W()
this.b=!0
return!0},
ak:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cH()
return!0},
cG:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cF()
return!0},
jQ:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.D(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.K(null)}}}}return!0},
i:function(a){return this.O()},
H:function(a){var u,t,s,r
this.D()
u=H.b([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].H(a))
return C.a.l(u,"\n")},
O:function(){return this.H("")},
sje:function(a){this.c=H.h(a,"$ia",[F.a4],"$aa")}}
F.hL.prototype={
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
a0:function(a,b){H.k(b,{func:1,ret:-1,args:[F.a3]})
C.a.a0(this.b,b)
C.a.a0(this.c,new F.hM(this,b))
C.a.a0(this.d,new F.hN(this,b))},
i:function(a){return this.O()},
H:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].H(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].H(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].H(a))
return C.a.l(u,"\n")},
O:function(){return this.H("")},
shp:function(a){this.b=H.h(a,"$ia",[F.a3],"$aa")},
shq:function(a){this.c=H.h(a,"$ia",[F.a3],"$aa")},
shr:function(a){this.d=H.h(a,"$ia",[F.a3],"$aa")}}
F.hM.prototype={
$1:function(a){H.d(a,"$ia3")
if(!J.D(a.a,this.a))this.b.$1(a)},
$S:7}
F.hN.prototype={
$1:function(a){var u
H.d(a,"$ia3")
u=this.a
if(!J.D(a.a,u)&&!J.D(a.b,u))this.b.$1(a)},
$S:7}
F.hP.prototype={
gm:function(a){return this.b.length+this.c.length},
k:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.e(u,s)
return u[s]}else{if(b<0)return H.e(u,b)
return u[b]}},
i:function(a){return this.O()},
H:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].H(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].H(a))
return C.a.l(u,"\n")},
O:function(){return this.H("")},
shz:function(a){this.b=H.h(a,"$ia",[F.b6],"$aa")},
shA:function(a){this.c=H.h(a,"$ia",[F.b6],"$aa")}}
F.hQ.prototype={}
F.cI.prototype={
aX:function(a,b,c){return J.D(b.f,c.f)}}
F.hR.prototype={}
F.hO.prototype={
aY:function(a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a4,"$ia",[F.a4],"$aa")
for(u=a4.length,t=0,s=null,r=null,q=null,p=0,o=null,n=0,m=null,l=0,k=null,j=0,i=0,h=0;h<u;++h){g=a4[h]
f=g.f
if(f!=null){s=s==null?f:new V.U(s.a+f.a,s.b+f.b,s.c+f.c);++t}e=g.r
if(e!=null)r=r==null?e:new V.z(r.a+e.a,r.b+e.b,r.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.z(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){m=m==null?c:new V.a_(m.a+c.a,m.b+c.b);++n}b=g.z
if(b!=null){k=k==null?b:new V.z(k.a+b.a,k.b+b.b,k.c+b.c);++l}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(o==null){a=[a0,a1,a2,a]
o=new V.aN(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
o=new V.aN(o.a+a0,o.b+a1,o.c+a2,o.d+a)}++p}a=g.ch
if(typeof a!=="number")return H.B(a)
i+=a;++j}a3=F.bU(null,null,null,null,null,null,null,null,0)
if(t<=0||s==null)a3.sa1(0,null)
else a3.sa1(0,s.u(0,t))
if(r==null)a3.sd2(null)
else a3.sd2(r.u(0,Math.sqrt(r.E(r))))
if(q==null)a3.se9(null)
else a3.se9(q.u(0,Math.sqrt(q.E(q))))
if(n<=0||m==null)a3.sb0(null)
else a3.sb0(m.u(0,n))
if(l<=0||k==null)a3.sbT(null)
else a3.sbT(k.u(0,l))
if(p<=0||o==null)a3.saw(0,null)
else{u=o.u(0,p)
u=[u.a,u.b,u.c,u.d]
a=u[0]
a0=u[1]
a1=u[2]
u=u[3]
if(a<0)a=0
else if(a>1)a=1
if(a0<0)a0=0
else if(a0>1)a0=1
if(a1<0)a1=0
else if(a1>1)a1=1
if(u<0)u=0
else if(u>1)u=1
a3.saw(0,new V.au(a,a0,a1,u))}if(j<=0)a3.sff(0)
else a3.sff(i/j)
return a3}}
F.fH.prototype={
aY:function(a){var u,t,s,r
H.h(a,"$ia",[F.a4],"$aa")
u=V.cH()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.z(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.u(0,Math.sqrt(u.E(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s)a[s].sd2(u)
return}}
F.hS.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.O()},
H:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].H(a))
return C.a.l(u,"\n")},
O:function(){return this.H("")},
sco:function(a){this.b=H.h(a,"$ia",[F.br],"$aa")}}
O.dw.prototype={
gC:function(){var u=this.dy
if(u==null){u=D.Q()
this.dy=u}return u},
a4:function(a){var u
H.d(a,"$iy")
u=this.dy
if(u!=null)u.K(a)},
c4:function(){return this.a4(null)},
dW:function(a){H.d(a,"$iy")
this.a=null
this.a4(a)},
iN:function(){return this.dW(null)},
hN:function(a,b){var u=V.aj
u=new D.bI(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.a4(u)},
hP:function(a,b){var u=V.aj
u=new D.bJ(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.a4(u)},
dE:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
a2=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a3=u===C.i||m===C.i||l===C.i||k===C.i||j===C.i||i===C.i||h===C.i||g===C.i||f===C.i
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.bf()
if(a0){b=$.be()
a7=new Z.aY(a7.a|b.a)}if(a1){b=$.bd()
a7=new Z.aY(a7.a|b.a)}if(a2){b=$.bg()
a7=new Z.aY(a7.a|b.a)}if(a3){b=$.bh()
a7=new Z.aY(a7.a|b.a)}if(a5){b=$.bc()
a7=new Z.aY(a7.a|b.a)}return new A.fx(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
a_:function(a,b){H.h(a,"$ia",[T.cw],"$aa")
if(b!=null)if(!C.a.Y(a,b)){b.a=a.length
C.a.h(a,b)}},
aB:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.at(u,u.length,0,[H.t(u,0)]);u.G();){t=u.d
t.toString
s=$.hJ
if(s==null){s=new V.z(0,0,1)
$.hJ=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.dd(s)}}},
kY:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.dE()
t=a4.fr.k(0,u.al)
if(t==null){t=A.mk(u,a4.a)
s=t.b
if(s.length===0)H.o(P.q("May not cache a shader with no name."))
if(a4.fr.bv(s))H.o(P.q('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.q(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bx
u=a5.e
if(!(u instanceof Z.d7)){a5.e=null
u=null}if(u==null||!u.d.A(0,q)){u=r.r1
if(u)a5.d.ak()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cG()
o.a.cG()
o=o.e
if(o!=null)o.aA()}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.jQ()
n=n.e
if(n!=null)n.aA()}l=a5.d.jP(new Z.hW(a4.a),q)
l.aW($.bf()).e=this.a.Q.c
if(u)l.aW($.be()).e=this.a.cx.c
if(p)l.aW($.bd()).e=this.a.ch.c
if(r.rx)l.aW($.bg()).e=this.a.cy.c
if(o)l.aW($.bh()).e=this.a.db.c
if(r.x1)l.aW($.bc()).e=this.a.dx.c
a5.e=l}u=T.cw
k=H.b([],[u])
p=this.a
o=a4.a
C.b.fd(o,p.r)
p.x.kg()
if(r.fx){p=this.a
n=a4.dx.ga3()
p=p.dy
p.toString
p.ao(n.ah(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db.ga3().v(0,a4.dx.ga3())
a4.cx=n}p=p.fr
p.toString
p.ao(n.ah(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gkT().v(0,a4.dx.ga3())
a4.ch=n}p=p.fy
p.toString
p.ao(n.ah(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.ao(C.r.ah(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.ao(C.r.ah(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.ao(C.r.ah(n,!0))}if(r.ax>0){j=this.e.a.length
p=this.a.k4
C.b.T(p.a,p.d,j)
for(p=[P.r],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.e(m,i)
m=m[i]
n.toString
H.d(m,"$iaj")
n=n.r1
if(i>=n.length)return H.e(n,i)
n=n[i]
h=new Float32Array(H.bX(H.h(m.ah(0,!0),"$ia",p,"$aa")))
C.b.fb(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.j:p=this.a
n=this.f.f
p=p.r2
C.b.B(p.a,p.d,n.a,n.b,n.c)
break
case C.h:this.a_(k,this.f.d)
p=this.a
n=this.f.d
p.aj(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
C.b.B(n.a,n.d,p.a,p.b,p.c)
break
case C.i:this.a_(k,this.f.e)
p=this.a
n=this.f.e
p.ad(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
C.b.B(n.a,n.d,p.a,p.b,p.c)
break}if(r.k2){switch(r.b){case C.d:break
case C.j:p=this.a
n=this.r.f
p=p.x2
C.b.B(p.a,p.d,n.a,n.b,n.c)
break
case C.h:this.a_(k,this.r.d)
p=this.a
n=this.r.d
p.aj(p.y1,p.ax,n)
n=this.a
p=this.r.f
n=n.x2
C.b.B(n.a,n.d,p.a,p.b,p.c)
break
case C.i:this.a_(k,this.r.e)
p=this.a
n=this.r.e
p.ad(p.y2,p.ax,n)
n=this.a
p=this.r.f
n=n.x2
C.b.B(n.a,n.d,p.a,p.b,p.c)
break}switch(r.c){case C.d:break
case C.j:p=this.a
n=this.x.f
p=p.al
C.b.B(p.a,p.d,n.a,n.b,n.c)
break
case C.h:this.a_(k,this.x.d)
p=this.a
n=this.x.d
p.aj(p.bx,p.by,n)
n=this.a
p=this.x.f
n=n.al
C.b.B(n.a,n.d,p.a,p.b,p.c)
break
case C.i:this.a_(k,this.x.e)
p=this.a
n=this.x.e
p.ad(p.ej,p.by,n)
n=this.a
p=this.x.f
n=n.al
C.b.B(n.a,n.d,p.a,p.b,p.c)
break}switch(r.d){case C.d:break
case C.j:p=this.a
n=this.y.f
p=p.bz
C.b.B(p.a,p.d,n.a,n.b,n.c)
break
case C.h:this.a_(k,this.y.d)
p=this.a
n=this.y.d
p.aj(p.ek,p.bA,n)
n=this.a
p=this.y.f
n=n.bz
C.b.B(n.a,n.d,p.a,p.b,p.c)
break
case C.i:this.a_(k,this.y.e)
p=this.a
n=this.y.e
p.ad(p.el,p.bA,n)
n=this.a
p=this.y.f
n=n.bz
C.b.B(n.a,n.d,p.a,p.b,p.c)
break}switch(r.e){case C.d:break
case C.j:p=this.a
n=this.z.f
p=p.bB
C.b.B(p.a,p.d,n.a,n.b,n.c)
n=this.a
p=this.z.ch
n=n.bD
C.b.R(n.a,n.d,p)
break
case C.h:this.a_(k,this.z.d)
p=this.a
n=this.z.d
p.aj(p.em,p.bC,n)
n=this.a
p=this.z.f
n=n.bB
C.b.B(n.a,n.d,p.a,p.b,p.c)
p=this.a
n=this.z.ch
p=p.bD
C.b.R(p.a,p.d,n)
break
case C.i:this.a_(k,this.z.e)
p=this.a
n=this.z.e
p.ad(p.en,p.bC,n)
n=this.a
p=this.z.f
n=n.bB
C.b.B(n.a,n.d,p.a,p.b,p.c)
p=this.a
n=this.z.ch
p=p.bD
C.b.R(p.a,p.d,n)
break}if(r.z>0){j=this.dx.e.length
p=this.a.ez
C.b.T(p.a,p.d,j)
g=a4.db.ga3()
for(p=this.dx.e,n=p.length,f=0,e=0;e<p.length;p.length===n||(0,H.A)(p),++e){d=p[e]
m=this.a.cO
if(f>=m.length)return H.e(m,f)
c=m[f]
m=g.dd(d.a)
b=m.a
a=m.b
a0=m.c
a0=m.u(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.b
b=a0.a
m=a0.b
a0=a0.c
C.b.B(a.a,a.d,b,m,a0)
a0=d.c
m=c.c
C.b.B(m.a,m.d,a0.a,a0.b,a0.c);++f}}if(r.Q>0){j=this.dx.f.length
p=this.a.eA
C.b.T(p.a,p.d,j)
g=a4.db.ga3()
for(p=this.dx.f,n=p.length,f=0,e=0;e<p.length;p.length===n||(0,H.A)(p),++e){d=p[e]
m=this.a.cP
if(f>=m.length)return H.e(m,f)
c=m[f]
m=d.gbg(d)
b=c.b
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=g.bj(d.gbg(d))
b=c.c
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.gaw(d)
b=c.d
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.gcz()
b=c.e
C.b.R(b.a,b.d,m)
m=d.gcA()
b=c.f
C.b.R(b.a,b.d,m)
m=d.gcB()
b=c.r
C.b.R(b.a,b.d,m);++f}}if(r.ch>0){j=this.dx.r.length
p=this.a.eB
C.b.T(p.a,p.d,j)
g=a4.db.ga3()
for(p=this.dx.r,n=p.length,f=0,e=0;e<p.length;p.length===n||(0,H.A)(p),++e){d=p[e]
m=this.a.cQ
if(f>=m.length)return H.e(m,f)
c=m[f]
m=d.gbg(d)
b=c.b
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.gcM(d).lq()
b=c.c
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=g.bj(d.gbg(d))
b=c.d
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.gaw(d)
b=c.e
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.gll()
b=c.f
C.b.R(b.a,b.d,m)
m=d.glk()
b=c.r
C.b.R(b.a,b.d,m)
m=d.gcz()
b=c.x
C.b.R(b.a,b.d,m)
m=d.gcA()
b=c.y
C.b.R(b.a,b.d,m)
m=d.gcB()
b=c.z
C.b.R(b.a,b.d,m);++f}}if(r.cx>0){j=this.dx.x.length
p=this.a.eC
C.b.T(p.a,p.d,j)
g=a4.db.ga3()
for(p=this.dx.x,n=p.length,m=[u],f=0,e=0;e<p.length;p.length===n||(0,H.A)(p),++e){d=p[e]
b=this.a.cR
if(f>=b.length)return H.e(b,f)
c=b[f]
b=d.gbh()
H.h(k,"$ia",m,"$aa")
if(!C.a.Y(k,b)){b.a=k.length
C.a.h(k,b)}b=d.gcM(d)
a=c.d
C.b.B(a.a,a.d,b.a,b.b,b.c)
b=d.gbV()
a=c.b
C.b.B(a.a,a.d,b.a,b.b,b.c)
b=d.gbR(d)
a=c.c
C.b.B(a.a,a.d,b.a,b.b,b.c)
b=g.dd(d.gcM(d))
a=b.a
a0=b.b
a1=b.c
a1=b.u(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=c.e
a=a1.a
b=a1.b
a1=a1.c
C.b.B(a0.a,a0.d,a,b,a1)
a1=d.gaw(d)
b=c.f
C.b.B(b.a,b.d,a1.a,a1.b,a1.c)
a1=d.gbh()
b=a1.gcZ(a1)
if(!b){b=c.x
C.b.T(b.a,b.d,1)}else{b=c.r
a=a1.d
a0=b.a
b=b.d
if(!a)C.b.T(a0,b,0)
else C.b.T(a0,b,a1.a)
b=c.x
C.b.T(b.a,b.d,0)}++f}}if(r.cy>0){j=this.dx.y.length
p=this.a.eD
C.b.T(p.a,p.d,j)
g=a4.db.ga3()
for(p=this.dx.y,n=p.length,m=[P.r],b=[u],f=0,e=0;e<p.length;p.length===n||(0,H.A)(p),++e){d=p[e]
a=this.a.cS
if(f>=a.length)return H.e(a,f)
c=a[f]
a=d.gbh()
H.h(k,"$ia",b,"$aa")
if(!C.a.Y(k,a)){a.a=k.length
C.a.h(k,a)}a2=g.v(0,d.ga3())
a=d.ga3()
a0=$.cp
if(a0==null){a0=new V.U(0,0,0)
$.cp=a0}a0=a.bj(a0)
a=c.b
C.b.B(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cp
if(a==null){a=new V.U(0,0,0)
$.cp=a}a=a2.bj(a)
a0=c.c
C.b.B(a0.a,a0.d,a.a,a.b,a.c)
a=a2.eO()
a0=c.d
h=new Float32Array(H.bX(H.h(new V.dx(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).ah(0,!0),"$ia",m,"$aa")))
C.b.fa(a0.a,a0.d,!1,h)
a0=d.gaw(d)
a=c.e
C.b.B(a.a,a.d,a0.a,a0.b,a0.c)
a0=d.gbh()
a=a0.gcZ(a0)
if(!a){a=c.r
C.b.T(a.a,a.d,1)}else{a=c.f
a1=a0.gcZ(a0)
a3=a.a
a=a.d
if(!a1)C.b.T(a3,a,0)
else C.b.T(a3,a,a0.glo(a0))
a=c.r
C.b.T(a.a,a.d,0)}a=d.gcz()
a0=c.x
C.b.R(a0.a,a0.d,a)
a=d.gcA()
a0=c.y
C.b.R(a0.a,a0.d,a)
a=d.gcB()
a0=c.z
C.b.R(a0.a,a0.d,a);++f}}if(r.db>0){j=this.dx.z.length
p=this.a.eE
C.b.T(p.a,p.d,j)
g=a4.db.ga3()
for(p=this.dx.z,n=p.length,u=[u],f=0,e=0;e<p.length;p.length===n||(0,H.A)(p),++e){d=p[e]
m=this.a.cT
if(f>=m.length)return H.e(m,f)
c=m[f]
m=d.gbh()
H.h(k,"$ia",u,"$aa")
if(!C.a.Y(k,m)){m.a=k.length
C.a.h(k,m)}m=d.gbg(d)
b=c.b
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.gcM(d)
b=c.c
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.gbV()
b=c.d
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.gbR(d)
b=c.e
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=g.bj(d.gbg(d))
b=c.f
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.gbh()
b=m.gcZ(m)
if(!b){m=c.x
C.b.T(m.a,m.d,1)}else{b=c.r
a=m.d
a0=b.a
b=b.d
if(!a)C.b.T(a0,b,0)
else C.b.T(a0,b,m.a)
m=c.x
C.b.T(m.a,m.d,0)}m=d.gaw(d)
b=c.y
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.glr()
b=c.z
C.b.R(b.a,b.d,m)
m=d.gls()
b=c.Q
C.b.R(b.a,b.d,m)
m=d.gcz()
b=c.ch
C.b.R(b.a,b.d,m)
m=d.gcA()
b=c.cx
C.b.R(b.a,b.d,m)
m=d.gcB()
b=c.cy
C.b.R(b.a,b.d,m);++f}}}switch(r.f){case C.d:break
case C.j:break
case C.h:this.a_(k,this.Q.d)
u=this.a
p=this.Q.d
u.aj(u.eo,u.bE,p)
break
case C.i:this.a_(k,this.Q.e)
u=this.a
p=this.Q.e
u.ad(u.ep,u.bE,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db.ga3().eO()
a4.Q=p}u=u.id
u.toString
u.ao(p.ah(0,!0))}if(r.dy){this.a_(k,this.ch)
u=this.a
p=this.ch
u.ad(u.eq,u.er,p)
switch(r.r){case C.d:break
case C.j:u=this.a
p=this.cx.f
u=u.bF
C.b.B(u.a,u.d,p.a,p.b,p.c)
break
case C.h:this.a_(k,this.cx.d)
u=this.a
p=this.cx.d
u.aj(u.es,u.bG,p)
p=this.a
u=this.cx.f
p=p.bF
C.b.B(p.a,p.d,u.a,u.b,u.c)
break
case C.i:this.a_(k,this.cx.e)
u=this.a
p=this.cx.e
u.ad(u.eu,u.bG,p)
p=this.a
u=this.cx.f
p=p.bF
C.b.B(p.a,p.d,u.a,u.b,u.c)
break}switch(r.x){case C.d:break
case C.j:u=this.a
p=this.cy.f
u=u.bI
C.b.B(u.a,u.d,p.a,p.b,p.c)
p=this.a
u=this.cy.ch
p=p.bH
C.b.R(p.a,p.d,u)
break
case C.h:this.a_(k,this.cy.d)
u=this.a
p=this.cy.d
u.aj(u.ev,u.bJ,p)
p=this.a
u=this.cy.f
p=p.bI
C.b.B(p.a,p.d,u.a,u.b,u.c)
u=this.a
p=this.cy.ch
u=u.bH
C.b.R(u.a,u.d,p)
break
case C.i:this.a_(k,this.cy.e)
u=this.a
p=this.cy.e
u.ad(u.ew,u.bJ,p)
p=this.a
u=this.cy.f
p=p.bI
C.b.B(p.a,p.d,u.a,u.b,u.c)
u=this.a
p=this.cy.ch
u=u.bH
C.b.R(u.a,u.d,p)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.j:u=this.a
n=this.db.f
u=u.bK
C.b.R(u.a,u.d,n)
break
case C.h:this.a_(k,this.db.d)
u=this.a
n=this.db.d
u.aj(u.ex,u.bL,n)
n=this.a
u=this.db.f
n=n.bK
C.b.R(n.a,n.d,u)
break
case C.i:this.a_(k,this.db.e)
u=this.a
n=this.db.e
u.ad(u.ey,u.bL,n)
n=this.a
u=this.db.f
n=n.bK
C.b.R(n.a,n.d,u)
break}C.b.cN(o,3042)
C.b.jO(o,770,771)}for(i=0;i<k.length;++i){u=k[i]
if(!u.c&&u.d){u.c=!0
C.b.e2(o,33984+u.a)
C.b.aU(o,3553,u.b)}}u=a5.e
u.cC(a4)
u.aZ(a4)
u.lb(a4)
if(p)C.b.kb(o,3042)
for(i=0;i<k.length;++i){u=k[i]
if(u.c){u.c=!1
C.b.e2(o,33984+u.a)
C.b.aU(o,3553,null)}}u=this.a
u.toString
C.b.fd(o,null)
u.x.kc()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dE().al},
shb:function(a){this.e=H.h(a,"$ia0",[V.aj],"$aa0")}}
O.fv.prototype={
aG:function(){this.dm()
var u=this.f
if(!(Math.abs(u-1)<$.G().a)){this.f=1
u=new D.L(this.b,u,1,this,[P.r])
u.b=!0
this.a.a4(u)}}}
O.cj.prototype={
a4:function(a){this.a.a4(H.d(a,"$iy"))},
c4:function(){return this.a4(null)},
aG:function(){},
sb0:function(a){var u,t
u=this.c
if(u!==C.h){if(u===C.d)this.aG()
this.c=C.h
u=this.a
u.a=null
u.a4(null)}u=this.d
if(u!==a){if(u!=null)u.gC().I(0,this.gbo())
t=this.d
this.d=a
a.gC().h(0,this.gbo())
u=new D.L(this.b+".texture2D",t,this.d,this,[T.dU])
u.b=!0
this.a.a4(u)}}}
O.fw.prototype={}
O.aS.prototype={
aG:function(){var u,t
this.dm()
u=new V.a7(1,1,1)
if(!this.f.A(0,u)){t=this.f
this.f=u
u=new D.L(this.b+".color",t,u,this,[V.a7])
u.b=!0
this.a.a4(u)}}}
O.fy.prototype={
aG:function(){this.dn()
var u=this.ch
if(!(Math.abs(u-1)<$.G().a)){this.ch=1
u=new D.L(this.b+".refraction",u,1,this,[P.r])
u.b=!0
this.a.a4(u)}}}
O.fz.prototype={
aG:function(){this.dn()
var u=this.ch
if(!(Math.abs(u-100)<$.G().a)){this.ch=100
u=new D.L(this.b+".shininess",u,100,this,[P.r])
u.b=!0
this.a.a4(u)}}}
O.bT.prototype={}
T.cw.prototype={}
T.dU.prototype={}
T.hd.prototype={
gC:function(){var u=this.y
if(u==null){u=D.Q()
this.y=u}return u}}
T.he.prototype={
kA:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.aU(u,3553,t)
C.b.bS(u,3553,10242,33071)
C.b.bS(u,3553,10243,33071)
C.b.bS(u,3553,10241,9729)
C.b.bS(u,3553,10240,9729)
C.b.aU(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.hd()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.m
W.a5(s,"load",H.k(new T.hf(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
eQ:function(a){return this.kA(a,!1,!1,!1,!1)},
iO:function(a,b,c){var u,t,s,r
b=V.k0(b,2)
u=V.k0(a.width,2)
t=V.k0(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jw(null,null)
s.width=u
s.height=t
r=H.d(C.q.fl(s,"2d"),"$ibz")
r.imageSmoothingEnabled=!1;(r&&C.D).ke(r,a,0,0,s.width,s.height)
return P.ns(C.D.hv(r,0,0,s.width,s.height))}}}
T.hf.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.iO(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.aU(t,3553,this.e)
C.b.kS(t,37440,this.f?1:0)
C.b.l5(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.fg(t,3553)
C.b.aU(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.kf()}++s.e},
$S:11}
V.b0.prototype={
aJ:function(a){return!0},
i:function(a){return"all"},
$iaw:1}
V.aw.prototype={}
V.dv.prototype={
aJ:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)if(u[s].aJ(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa7:function(a){this.a=H.h(a,"$ia",[V.aw],"$aa")},
$iaw:1}
V.ar.prototype={
aJ:function(a){return!this.fG(a)},
i:function(a){return"!["+this.dl(0)+"]"}}
V.fP.prototype={
aJ:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.bP(this.a)
t=H.bP(this.b)
return u+".."+t},
$iaw:1}
V.fX.prototype={
fL:function(a){var u,t
if(a.a.length<=0)throw H.c(P.q("May not create a SetMatcher with zero characters."))
u=new H.aJ([P.l,P.N])
for(t=new H.ci(a,a.gm(a),0,[H.ac(a,"T",0)]);t.G();)u.q(0,t.d,!0)
this.siR(u)},
aJ:function(a){return this.a.bv(a)},
i:function(a){return P.dP(this.a.gay(),0,null)},
siR:function(a){this.a=H.h(a,"$iH",[P.l,P.N],"$aH")},
$iaw:1}
V.ct.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cy(this.a.j(0,b))
r.sa7(H.b([],[V.aw]))
r.c=!1
C.a.h(this.c,r)
return r},
kl:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.aJ(a))return r}return},
i:function(a){return this.b},
sj9:function(a){this.c=H.h(a,"$ia",[V.cy],"$aa")}}
V.dZ.prototype={
i:function(a){var u,t
u=H.k2(this.b,"\n","\\n")
t=H.k2(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cx.prototype={
aK:function(a,b,c){var u,t,s
H.h(c,"$ia",[P.f],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.A)(c),++t){s=c[t]
this.c.q(0,s,b)}},
i:function(a){return this.b},
siH:function(a){var u=P.f
this.c=H.h(a,"$iH",[u,u],"$aH")}}
V.hh.prototype={
j:function(a,b){var u=this.a.k(0,b)
if(u==null){u=new V.ct(this,b)
u.sj9(H.b([],[V.cy]))
u.d=null
this.a.q(0,b,u)}return u},
P:function(a){var u,t
u=this.b.k(0,a)
if(u==null){u=new V.cx(this,a)
t=P.f
u.siH(new H.aJ([t,t]))
this.b.q(0,a,u)}return u},
f9:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dZ])
t=this.c
s=[P.l]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.J(a,o)
m=t.kl(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dP(r,0,null)
throw H.c(P.q("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dP(r,0,null)
k=t.d
j=k.c.k(0,l)
p=new V.dZ(j==null?k.b:j,l,o)}++o}}},
siZ:function(a){this.a=H.h(a,"$iH",[P.f,V.ct],"$aH")},
sj2:function(a){this.b=H.h(a,"$iH",[P.f,V.cx],"$aH")}}
V.cy.prototype={
i:function(a){return this.b.b+": "+this.dl(0)}}
X.d9.prototype={$ib8:1}
X.f5.prototype={
gC:function(){var u=this.x
if(u==null){u=D.Q()
this.x=u}return u}}
X.dF.prototype={
gC:function(){var u=this.f
if(u==null){u=D.Q()
this.f=u}return u},
aN:function(a){var u
H.d(a,"$iy")
u=this.f
if(u!=null)u.K(a)},
h4:function(){return this.aN(null)},
sbd:function(a){var u,t
if(!J.D(this.b,a)){u=this.b
if(u!=null)u.gC().I(0,this.gdt())
t=this.b
this.b=a
if(a!=null)a.gC().h(0,this.gdt())
u=new D.L("mover",t,this.b,this,[U.ab])
u.b=!0
this.aN(u)}},
$ib8:1,
$id9:1}
X.dS.prototype={}
V.bk.prototype={
bn:function(a){this.b=new P.f8(C.Y)
this.c=null
this.scc(H.b([],[[P.a,W.aA]]))},
N:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.aA]))
t=a.split("\n")
for(u=t.length,s=[W.aA],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.F(p)
n=this.b.hg(p,0,p.length)
m=n==null?p:n
C.k.fv(o,H.k2(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaz(this.d),o)}},
eZ:function(a){var u,t,s,r
H.h(a,"$ia",[P.f],"$aa")
this.scc(H.b([],[[P.a,W.aA]]))
u=C.a.l(a,"\n")
t=this.c
if(t==null){t=this.bw()
this.c=t}for(t=t.f9(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)this.bP(t[r])},
scc:function(a){this.d=H.h(a,"$ia",[[P.a,W.aA]],"$aa")}}
V.jm.prototype={
$1:function(a){H.d(a,"$iaW")
P.k1(C.e.f8(this.a.gkr(),2)+" fps")},
$S:50}
V.eP.prototype={
bP:function(a){switch(a.a){case"Class":this.N(a.b,"#551")
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
bw:function(){var u,t,s,r
u=V.hi()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.u("_"))
C.a.h(t.a,s)
s=V.V("a","z")
C.a.h(t.a,s)
s=V.V("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.u("_"))
C.a.h(s.a,t)
t=V.V("0","9")
C.a.h(s.a,t)
t=V.V("a","z")
C.a.h(s.a,t)
t=V.V("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.V("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.V("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.v(new H.u("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.V("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.V("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.v(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.v(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"OpenDoubleStr")
t=V.v(new H.u('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
s=V.v(new H.u('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
t=V.v(new H.u("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
s=V.v(new H.u('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.b0())
s=u.j(0,"Start").l(0,"OpenSingleStr")
t=V.v(new H.u("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
s=V.v(new H.u("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").l(0,"EscSingleStr")
t=V.v(new H.u("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").l(0,"OpenSingleStr")
s=V.v(new H.u("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.b0())
s=u.j(0,"Start").l(0,"Slash")
t=V.v(new H.u("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.v(new H.u("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").l(0,"EndComment")
t=V.v(new H.u("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ar()
r=[V.aw]
s.sa7(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.u("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"MLComment")
s=V.v(new H.u("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").l(0,"MLCStar")
t=V.v(new H.u("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"MLComment")
s=new V.ar()
s.sa7(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.u("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"EndComment")
s=V.v(new H.u("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Whitespace")
t=V.v(new H.u(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").l(0,"Whitespace")
s=V.v(new H.u(" \n\t"))
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
V.f6.prototype={
bP:function(a){switch(a.a){case"Builtin":this.N(a.b,"#411")
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
bw:function(){var u,t,s,r
u=V.hi()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.u("_"))
C.a.h(t.a,s)
s=V.V("a","z")
C.a.h(t.a,s)
s=V.V("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.u("_"))
C.a.h(s.a,t)
t=V.V("0","9")
C.a.h(s.a,t)
t=V.V("a","z")
C.a.h(s.a,t)
t=V.V("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.V("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.V("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.v(new H.u("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.V("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.V("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.v(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.v(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Slash")
t=V.v(new H.u("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.v(new H.u("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").l(0,"Sym").a,new V.b0())
s=u.j(0,"Comment").l(0,"EndComment")
t=V.v(new H.u("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ar()
r=[V.aw]
s.sa7(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.u("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Preprocess")
s=V.v(new H.u("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"Preprocess")
t=new V.ar()
t.sa7(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.u("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"EndPreprocess")
t=V.v(new H.u("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Whitespace")
s=V.v(new H.u(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").l(0,"Whitespace")
t=V.v(new H.u(" \n\t"))
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
V.f7.prototype={
bP:function(a){switch(a.a){case"Attr":this.N(a.b,"#911")
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
bw:function(){var u,t,s
u=V.hi()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.u("_"))
C.a.h(t.a,s)
s=V.V("a","z")
C.a.h(t.a,s)
s=V.V("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.u("_"))
C.a.h(s.a,t)
t=V.V("0","9")
C.a.h(s.a,t)
t=V.V("a","z")
C.a.h(s.a,t)
t=V.V("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").l(0,"Attr")
s=V.v(new H.u("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Sym")
s=V.v(new H.u("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").l(0,"Sym")
t=V.v(new H.u("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"OpenStr")
s=V.v(new H.u('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").l(0,"CloseStr")
t=V.v(new H.u('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").l(0,"EscStr")
s=V.v(new H.u("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").l(0,"OpenStr")
t=V.v(new H.u('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").l(0,"OpenStr").a,new V.b0())
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.b0())
t=u.j(0,"Other").l(0,"Other")
s=new V.ar()
s.sa7(H.b([],[V.aw]))
C.a.h(t.a,s)
t=V.v(new H.u('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.V("a","z")
C.a.h(s.a,t)
t=V.V("A","Z")
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
V.fL.prototype={
eZ:function(a){H.h(a,"$ia",[P.f],"$aa")
this.scc(H.b([],[[P.a,W.aA]]))
this.N(C.a.l(a,"\n"),"#111")},
bP:function(a){},
bw:function(){return}}
V.fN.prototype={
bt:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.k(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.kG().gd6().k(0,H.j(u))
if(t==null)if(d){c.$0()
this.e0(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.k8(this.c).h(0,q)
o=W.m7("radio")
o.checked=s
o.name=u
u=W.m
W.a5(o,"change",H.k(new V.fO(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.G.F(q,o)
n=r.createElement("span")
n.textContent=b
C.G.F(q,n)
J.k8(this.c).h(0,r.createElement("br"))},
as:function(a,b,c){return this.bt(a,b,c,!1)},
e0:function(a){var u,t,s,r,q
u=P.kG()
t=P.f
s=P.mg(u.gd6(),t,t)
s.q(0,this.a,a)
r=u.f3(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.X).iJ(t,new P.ix([],[]).de(""),"",q)}}
V.fO.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.e0(this.d)}},
$S:11}
V.h1.prototype={
fN:function(a,b){var u,t,s,r,q,p,o
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
W.a5(u,"scroll",H.k(new V.h3(s),{func:1,ret:-1,args:[o]}),!1,o)},
e4:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[P.f],"$aa")
this.iU()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.f9(C.a.kx(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
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
if(H.nT(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.F(m[1])
l.textContent=H.F(m[0])
C.k.F(t,l)}else{k=P.er(C.J,n,C.m,!1)
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
fk:function(a){var u,t,s,r
u=new V.eP("dart")
u.bn("dart")
t=new V.f6("glsl")
t.bn("glsl")
s=new V.f7("html")
s.bn("html")
r=C.a.kn(H.b([u,t,s],[V.bk]),new V.h4(a))
if(r!=null)return r
u=new V.fL("plain")
u.bn("plain")
return u},
e3:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a7,"$ia",[P.f],"$aa")
u=H.b([],[P.l])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.cX(r).a5(r,"+")){C.a.q(a7,s,C.c.ap(r,1))
C.a.h(u,1)
t=!0}else if(C.c.a5(r,"-")){C.a.q(a7,s,C.c.ap(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fk(a5)
q.eZ(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.F(o,n)
C.k.F(this.a,o)
m=P.er(C.J,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.ka(null)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.A)(r),++a0)C.x.F(a,r[a0])
C.n.F(e,d)
C.n.F(e,c)
C.n.F(e,a)
C.o.F(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.A)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gV(r);a3.G();)C.x.F(c,a3.gM())
C.n.F(e,d)
C.n.F(e,c)
C.o.F(n,e)}},
jB:function(a){var u,t,s,r,q,p,o
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
r=C.o.hx(t,-1)
s=H.d((r&&C.n).dM(r,-1),"$iaV").style
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
o=H.d(C.n.dM(r,-1),"$iaV")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.x).F(o,p)}},
iU:function(){var u,t,s,r
if(this.b!=null)return
u=V.hi()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Bold")
s=V.v(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").l(0,"Bold")
s=new V.ar()
r=[V.aw]
s.sa7(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.u("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").l(0,"BoldEnd")
s=V.v(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Italic")
s=V.v(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").l(0,"Italic")
s=new V.ar()
s.sa7(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.u("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").l(0,"ItalicEnd")
s=V.v(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Code")
s=V.v(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").l(0,"Code")
s=new V.ar()
s.sa7(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.u("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").l(0,"CodeEnd")
s=V.v(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"LinkHead")
s=V.v(new H.u("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").l(0,"LinkTail")
s=V.v(new H.u("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").l(0,"LinkEnd")
t=V.v(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").l(0,"LinkHead")
t=new V.ar()
t.sa7(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.u("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").l(0,"LinkEnd")
t=V.v(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").l(0,"LinkTail")
t=new V.ar()
t.sa7(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.u("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.b0())
s=u.j(0,"Other").l(0,"Other")
t=new V.ar()
t.sa7(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.u("*_`["))
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
V.h3.prototype={
$1:function(a){P.kC(C.y,new V.h2(this.a))},
$S:11}
V.h2.prototype={
$0:function(){var u,t,s
u=C.e.an(document.documentElement.scrollTop)
t=this.a.style
s=H.j(-0.01*u)+"px"
t.top=s},
$S:0}
V.h4.prototype={
$1:function(a){return H.d(a,"$ibk").a===this.a},
$S:51}
M.ja.prototype={
$0:function(){this.a.saa(0,F.jW(1,null,null,1))},
$S:0}
M.jb.prototype={
$0:function(){this.a.saa(0,F.jW(8,null,null,8))},
$S:0}
M.jc.prototype={
$0:function(){this.a.saa(0,F.lb(1,!0,!0,1,40,1))},
$S:0}
M.jd.prototype={
$0:function(){this.a.saa(0,F.lb(1,!0,!1,1,40,0))},
$S:0}
M.je.prototype={
$0:function(){this.a.saa(0,F.nK(10,20))},
$S:0}
M.jf.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=F.fY()
t=Math.sqrt(5)/2+0.5
s=F.an(u,new V.z(-1,t,0))
r=F.an(u,new V.z(1,t,0))
q=-t
p=F.an(u,new V.z(-1,q,0))
o=F.an(u,new V.z(1,q,0))
n=F.an(u,new V.z(0,-1,q))
m=F.an(u,new V.z(0,1,q))
l=F.an(u,new V.z(0,-1,t))
k=F.an(u,new V.z(0,1,t))
j=F.an(u,new V.z(t,0,1))
i=F.an(u,new V.z(t,0,-1))
h=F.an(u,new V.z(q,0,1))
g=F.an(u,new V.z(q,0,-1))
F.X(u,s,g,m,2)
F.X(u,s,m,r,2)
F.X(u,s,r,k,2)
F.X(u,s,k,h,2)
F.X(u,s,h,g,2)
F.X(u,r,m,i,2)
F.X(u,m,g,n,2)
F.X(u,g,h,p,2)
F.X(u,h,k,l,2)
F.X(u,k,r,j,2)
F.X(u,o,i,n,2)
F.X(u,o,n,p,2)
F.X(u,o,p,l,2)
F.X(u,o,l,j,2)
F.X(u,o,j,i,2)
F.X(u,n,i,m,2)
F.X(u,p,n,g,2)
F.X(u,l,p,h,2)
F.X(u,j,l,k,2)
F.X(u,i,j,r,2)
u.eR(new F.cI(),new F.hO())
this.a.saa(0,u)},
$S:0}
M.jg.prototype={
$0:function(){this.a.saa(0,F.ln(6,null,1,6))},
$S:0}
M.jh.prototype={
$0:function(){this.a.saa(0,F.nV(30,1,15,0.5))},
$S:0}
M.ji.prototype={
$0:function(){this.a.saa(0,F.nJ(120,1,2,12,0.3,3))},
$S:0}
M.jj.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iy")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.e3("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.e3("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))},
$S:9};(function aliases(){var u=J.a9.prototype
u.fD=u.i
u=J.dn.prototype
u.fF=u.i
u=P.n.prototype
u.fE=u.bW
u=W.P.prototype
u.c2=u.ae
u=W.ek.prototype
u.fH=u.au
u=O.cj.prototype
u.dm=u.aG
u=O.aS.prototype
u.dn=u.aG
u=V.dv.prototype
u.fG=u.aJ
u.dl=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"nm","mQ",10)
u(P,"nn","mR",10)
u(P,"no","mS",10)
t(P,"la","nl",3)
s(W,"nC",4,null,["$4"],["mU"],19,0)
s(W,"nD",4,null,["$4"],["mV"],19,0)
var m
r(m=E.aq.prototype,"geX",0,0,null,["$1","$0"],["eY","kJ"],1,0)
r(m,"geV",0,0,null,["$1","$0"],["eW","kI"],1,0)
r(m,"geT",0,0,null,["$1","$0"],["eU","kF"],1,0)
q(m,"gkD","kE",6)
q(m,"gkG","kH",6)
r(m=E.dY.prototype,"gdq",0,0,null,["$1","$0"],["ds","dr"],1,0)
p(m,"gl_","f4",3)
o(m=X.e4.prototype,"gi1","i2",14)
o(m,"ghQ","hR",14)
o(m,"ghW","hX",4)
o(m,"gi5","i6",26)
o(m,"gi3","i4",26)
o(m,"gi9","ia",4)
o(m,"gie","ig",4)
o(m,"gi_","i0",4)
o(m,"gib","ic",4)
o(m,"ghY","hZ",4)
o(m,"gih","ii",36)
o(m,"gij","ik",14)
o(m,"gix","iy",13)
o(m,"git","iu",13)
o(m,"giv","iw",13)
r(D.bm.prototype,"gfS",0,0,null,["$1","$0"],["aC","fT"],1,0)
r(m=D.dr.prototype,"gdR",0,0,null,["$1","$0"],["dS","i7"],1,0)
o(m,"gim","io",38)
q(m,"ghK","hL",16)
q(m,"gir","is",16)
n(V.R.prototype,"gm","bc",12)
n(V.z.prototype,"gm","bc",12)
n(V.aN.prototype,"gm","bc",12)
r(m=U.cf.prototype,"gaQ",0,0,null,["$1","$0"],["S","a8"],1,0)
q(m,"ghI","hJ",28)
q(m,"gip","iq",28)
r(m=U.e5.prototype,"gaQ",0,0,null,["$1","$0"],["S","a8"],1,0)
o(m,"gcf","cg",2)
o(m,"gci","cj",2)
o(m,"gck","cl",2)
r(m=U.e6.prototype,"gaQ",0,0,null,["$1","$0"],["S","a8"],1,0)
o(m,"gcf","cg",2)
o(m,"gci","cj",2)
o(m,"gck","cl",2)
o(m,"ghC","hD",2)
o(m,"ghE","hF",2)
o(m,"gj7","j8",2)
o(m,"gj5","j6",2)
o(m,"gj3","j4",2)
o(U.e7.prototype,"ghG","hH",2)
r(m=M.de.prototype,"gaq",0,0,null,["$1","$0"],["aD","fV"],1,0)
q(m,"ghS","hT",6)
q(m,"ghU","hV",6)
r(m=O.dw.prototype,"gbo",0,0,null,["$1","$0"],["a4","c4"],1,0)
r(m,"giM",0,0,null,["$1","$0"],["dW","iN"],1,0)
q(m,"ghM","hN",29)
q(m,"ghO","hP",29)
r(O.cj.prototype,"gbo",0,0,null,["$1","$0"],["a4","c4"],1,0)
r(X.dF.prototype,"gdt",0,0,null,["$1","$0"],["aN","h4"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.K,null)
s(P.K,[H.jC,J.a9,J.at,P.eg,P.n,H.ci,P.aQ,H.bF,H.cG,H.eL,H.fQ,H.hl,P.bn,H.ca,H.el,P.bL,H.fi,H.fk,H.fe,P.em,P.b_,P.aD,P.e9,P.h7,P.cu,P.h8,P.aW,P.ah,P.iN,P.is,P.bV,P.ef,P.T,P.iE,P.fq,P.bA,P.f9,P.iL,P.iJ,P.N,P.ai,P.ag,P.aP,P.fJ,P.dO,P.ec,P.f4,P.bo,P.a,P.H,P.E,P.as,P.f,P.af,P.bW,P.hB,P.iv,W.eN,W.bu,W.av,W.dD,W.ek,W.iz,W.df,W.ay,W.ir,W.es,P.iw,P.ep,P.il,P.M,O.a0,O.ck,E.eF,E.aq,E.fR,E.dY,Z.e8,Z.hW,Z.d7,Z.bp,Z.aY,D.eI,D.bC,D.y,X.d8,X.dp,X.fg,X.fn,X.ax,X.fA,X.hj,X.e4,D.bm,D.a2,D.dG,D.dN,D.dV,D.dW,D.dX,V.a7,V.au,V.eW,V.dx,V.aj,V.a_,V.U,V.aU,V.dK,V.R,V.z,V.aN,U.e5,U.e6,U.e7,M.de,A.d4,A.eC,A.fx,A.cz,A.cD,A.cB,A.cE,A.cC,A.cF,A.bB,A.e0,A.hv,F.a3,F.f_,F.b6,F.fh,F.br,F.dM,F.fZ,F.h_,F.h0,F.a4,F.hK,F.hL,F.hP,F.hQ,F.hR,F.hS,O.bT,O.cj,T.he,V.b0,V.aw,V.dv,V.fP,V.fX,V.ct,V.dZ,V.cx,V.hh,X.d9,X.dS,X.dF,V.bk,V.fN,V.h1])
s(J.a9,[J.fd,J.dm,J.dn,J.aH,J.bq,J.b4,H.bM,W.bD,W.bz,W.ea,W.eQ,W.dc,W.dd,W.m,W.di,W.ed,W.b3,W.dt,W.ei,W.dI,W.aK,W.en,W.et,P.d5,P.dg,P.dH,P.bR,P.dL,P.dT,P.e1])
s(J.dn,[J.fK,J.bt,J.b5])
t(J.jB,J.aH)
s(J.bq,[J.dl,J.dk])
t(P.fm,P.eg)
s(P.fm,[H.e2,W.i2,W.am,P.f0])
t(H.u,H.e2)
s(P.n,[H.eT,H.fr,H.cJ])
s(H.eT,[H.bK,H.fj])
s(P.aQ,[H.fs,H.hX])
t(H.ft,H.bK)
t(H.eM,H.eL)
s(P.bn,[H.fI,H.ff,H.hz,H.hn,H.eH,H.fV,P.dE,P.aG,P.hA,P.hx,P.bS,P.eK,P.eO])
s(H.ca,[H.jr,H.hc,H.j4,H.j5,H.j6,P.hZ,P.hY,P.i_,P.i0,P.iD,P.iC,P.i8,P.ic,P.i9,P.ia,P.ib,P.ig,P.ih,P.ie,P.id,P.h9,P.ha,P.iV,P.ip,P.io,P.iq,P.fl,P.fp,P.iK,P.eR,P.eS,P.hF,P.hC,P.hD,P.hE,P.iF,P.iG,P.iI,P.iH,P.iR,P.iQ,P.iS,P.iT,W.eU,W.i7,W.fG,W.fF,W.it,W.iu,W.iB,W.iM,P.iy,P.iX,P.f1,P.f2,E.fS,E.fT,E.fU,E.hg,D.eY,D.eZ,F.iO,F.iY,F.j_,F.j0,F.j1,F.j9,F.jn,F.jo,F.jq,F.j8,F.iZ,F.hU,F.hT,F.hM,F.hN,T.hf,V.jm,V.fO,V.h3,V.h2,V.h4,M.ja,M.jb,M.jc,M.jd,M.je,M.jf,M.jg,M.jh,M.ji,M.jj])
s(H.hc,[H.h6,H.c8])
t(P.fo,P.bL)
s(P.fo,[H.aJ,W.i1])
t(H.dz,H.bM)
s(H.dz,[H.cN,H.cP])
t(H.cO,H.cN)
t(H.dA,H.cO)
t(H.cQ,H.cP)
t(H.dB,H.cQ)
s(H.dB,[H.fB,H.fC,H.fD,H.fE,H.dC,H.cn])
t(P.im,P.iN)
t(P.ik,P.is)
t(P.eq,P.fq)
t(P.e3,P.eq)
s(P.bA,[P.eD,P.eV])
t(P.bl,P.h8)
s(P.bl,[P.eE,P.f8,P.hI,P.hH])
t(P.hG,P.eV)
s(P.ag,[P.r,P.l])
s(P.aG,[P.bQ,P.fa])
t(P.i3,P.bW)
s(W.bD,[W.C,W.cK])
s(W.C,[W.P,W.bj,W.cc,W.cL])
s(W.P,[W.w,P.p])
s(W.w,[W.d2,W.eB,W.c7,W.bi,W.by,W.aA,W.f3,W.dh,W.cg,W.ch,W.dq,W.cl,W.fW,W.aV,W.dQ,W.dR,W.hb,W.cv])
t(W.cb,W.ea)
t(W.ee,W.ed)
t(W.bG,W.ee)
t(W.dj,W.cc)
t(W.bs,W.m)
s(W.bs,[W.aR,W.aa,W.aL])
t(W.ej,W.ei)
t(W.co,W.ej)
t(W.eo,W.en)
t(W.hk,W.eo)
t(W.hV,W.cl)
t(W.aZ,W.aa)
t(W.eb,W.dd)
t(W.eu,W.et)
t(W.eh,W.eu)
t(W.i4,W.i1)
t(W.i5,P.h7)
t(W.jL,W.i5)
t(W.i6,P.cu)
t(W.iA,W.ek)
t(P.ix,P.iw)
t(P.aB,P.il)
t(P.cr,P.p)
s(E.eF,[Z.d6,A.cs,T.cw])
s(D.y,[D.bI,D.bJ,D.L,X.fM])
s(X.fM,[X.du,X.b7,X.cm,X.e_])
s(O.a0,[D.dr,U.cf])
s(D.eI,[U.eJ,U.ab])
t(U.da,U.ab)
t(A.fu,A.cs)
s(A.e0,[A.J,A.hr,A.hs,A.hu,A.hp,A.Y,A.hq,A.I,A.ht,A.hw,A.cA,A.az,A.ak,A.al])
t(F.h5,F.f_)
t(F.ho,F.fh)
t(F.cI,F.hQ)
s(F.hR,[F.hO,F.fH])
t(O.dw,O.bT)
s(O.cj,[O.fv,O.fw,O.aS])
s(O.aS,[O.fy,O.fz])
t(T.dU,T.cw)
t(T.hd,T.dU)
s(V.dv,[V.ar,V.cy])
t(X.f5,X.dS)
s(V.bk,[V.eP,V.f6,V.f7,V.fL])
u(H.e2,H.cG)
u(H.cN,P.T)
u(H.cO,H.bF)
u(H.cP,P.T)
u(H.cQ,H.bF)
u(P.eg,P.T)
u(P.eq,P.iE)
u(W.ea,W.eN)
u(W.ed,P.T)
u(W.ee,W.av)
u(W.ei,P.T)
u(W.ej,W.av)
u(W.en,P.T)
u(W.eo,W.av)
u(W.et,P.T)
u(W.eu,W.av)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bi.prototype
C.q=W.by.prototype
C.D=W.bz.prototype
C.k=W.aA.prototype
C.U=W.dc.prototype
C.W=W.dh.prototype
C.X=W.di.prototype
C.z=W.dj.prototype
C.Z=J.a9.prototype
C.a=J.aH.prototype
C.a_=J.dk.prototype
C.f=J.dl.prototype
C.r=J.dm.prototype
C.e=J.bq.prototype
C.c=J.b4.prototype
C.a6=J.b5.prototype
C.G=W.dq.prototype
C.ac=W.co.prototype
C.M=J.fK.prototype
C.N=W.dI.prototype
C.b=P.bR.prototype
C.x=W.aV.prototype
C.o=W.dQ.prototype
C.n=W.dR.prototype
C.C=J.bt.prototype
C.O=W.aZ.prototype
C.P=W.cK.prototype
C.R=new P.eE(!1)
C.Q=new P.eD(C.R)
C.S=new P.fJ()
C.T=new P.hI()
C.l=new P.im()
C.d=new A.bB(0,"ColorSourceType.None")
C.j=new A.bB(1,"ColorSourceType.Solid")
C.h=new A.bB(2,"ColorSourceType.Texture2D")
C.i=new A.bB(3,"ColorSourceType.TextureCube")
C.y=new P.aP(0)
C.V=new P.aP(5e6)
C.Y=new P.f9("element",!0,!1,!1,!1)
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
C.ab=new H.eM(0,{},C.I,[P.f,P.f])
C.m=new P.hG(!1)})();(function staticFields(){$.aO=0
$.c9=null
$.kc=null
$.jP=!1
$.lg=null
$.l8=null
$.lm=null
$.j2=null
$.j7=null
$.jZ=null
$.bY=null
$.cU=null
$.cV=null
$.jQ=!1
$.W=C.l
$.b2=null
$.jz=null
$.kj=null
$.ki=null
$.kp=null
$.kt=null
$.cp=null
$.kx=null
$.kJ=null
$.kN=null
$.kL=null
$.kM=null
$.hJ=null
$.kK=null
$.kQ=null
$.ks=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"o0","lq",function(){return H.lf("_$dart_dartClosure")})
u($,"o1","k3",function(){return H.lf("_$dart_js")})
u($,"o7","lr",function(){return H.aX(H.hm({
toString:function(){return"$receiver$"}}))})
u($,"o8","ls",function(){return H.aX(H.hm({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"o9","lt",function(){return H.aX(H.hm(null))})
u($,"oa","lu",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"od","lx",function(){return H.aX(H.hm(void 0))})
u($,"oe","ly",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oc","lw",function(){return H.aX(H.kE(null))})
u($,"ob","lv",function(){return H.aX(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"og","lA",function(){return H.aX(H.kE(void 0))})
u($,"of","lz",function(){return H.aX(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ox","k4",function(){return P.mP()})
u($,"oD","d0",function(){return[]})
u($,"oj","lB",function(){return P.mM()})
u($,"oy","lF",function(){return H.ml(H.bX(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"oB","lH",function(){return P.mA("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"oC","lI",function(){return P.nd()})
u($,"oz","lG",function(){return P.kn(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"oA","k5",function(){return P.km(P.f,P.bo)})
u($,"oq","lE",function(){return Z.aC(0)})
u($,"ok","lC",function(){return Z.aC(511)})
u($,"os","bf",function(){return Z.aC(1)})
u($,"or","be",function(){return Z.aC(2)})
u($,"om","bd",function(){return Z.aC(4)})
u($,"ot","bg",function(){return Z.aC(8)})
u($,"ou","bh",function(){return Z.aC(16)})
u($,"on","cZ",function(){return Z.aC(32)})
u($,"oo","d_",function(){return Z.aC(64)})
u($,"op","lD",function(){return Z.aC(96)})
u($,"ov","c6",function(){return Z.aC(128)})
u($,"ol","bc",function(){return Z.aC(256)})
u($,"o_","lp",function(){return new V.eW(1e-9)})
u($,"nZ","G",function(){return $.lp()})})()
var v={mangledGlobalNames:{l:"int",r:"double",ag:"num",f:"String",N:"bool",E:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.E},{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aa]},{func:1,ret:P.E,args:[F.a4,P.r,P.r]},{func:1,ret:-1,args:[P.l,[P.n,E.aq]]},{func:1,ret:P.E,args:[F.a3]},{func:1,ret:P.E,args:[,,]},{func:1,ret:P.E,args:[D.y]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.E,args:[W.m]},{func:1,ret:P.r},{func:1,ret:-1,args:[W.aL]},{func:1,ret:-1,args:[W.m]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.l,[P.n,D.a2]]},{func:1,args:[,]},{func:1,ret:P.r,args:[P.r]},{func:1,ret:P.N,args:[W.P,P.f,P.f,W.bu]},{func:1,ret:P.f,args:[P.l]},{func:1,ret:P.E,args:[,]},{func:1,ret:P.N,args:[W.C]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:P.N,args:[W.ay]},{func:1,ret:P.N,args:[P.f]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:V.U,args:[P.r]},{func:1,ret:-1,args:[P.l,[P.n,U.ab]]},{func:1,ret:-1,args:[P.l,[P.n,V.aj]]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:P.E,args:[P.ag]},{func:1,args:[W.m]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.M,args:[P.l]},{func:1,ret:P.E,args:[P.f,,]},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.N,args:[[P.n,D.a2]]},{func:1,ret:P.E,args:[P.f]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.l]},{func:1,ret:[P.H,P.f,P.f],args:[[P.H,P.f,P.f],P.f]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:[P.aD,,],args:[,]},{func:1,ret:P.E,args:[,],opt:[P.as]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,args:[P.f]},{func:1,ret:P.E,args:[P.aW]},{func:1,ret:P.N,args:[V.bk]},{func:1,args:[,P.f]},{func:1,ret:W.P,args:[W.C]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.a9,MediaError:J.a9,Navigator:J.a9,NavigatorConcurrentHardware:J.a9,NavigatorUserMediaError:J.a9,OverconstrainedError:J.a9,PositionError:J.a9,WebGLActiveInfo:J.a9,WebGLRenderbuffer:J.a9,WebGL2RenderingContext:J.a9,SQLError:J.a9,ArrayBufferView:H.bM,Float32Array:H.dA,Int16Array:H.fB,Int32Array:H.fC,Int8Array:H.fD,Uint32Array:H.fE,Uint8ClampedArray:H.dC,CanvasPixelArray:H.dC,Uint8Array:H.cn,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLLIElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,HTMLAnchorElement:W.d2,HTMLAreaElement:W.eB,HTMLBaseElement:W.c7,HTMLBodyElement:W.bi,HTMLCanvasElement:W.by,CanvasRenderingContext2D:W.bz,CDATASection:W.bj,CharacterData:W.bj,Comment:W.bj,ProcessingInstruction:W.bj,Text:W.bj,CSSStyleDeclaration:W.cb,MSStyleCSSProperties:W.cb,CSS2Properties:W.cb,HTMLDivElement:W.aA,XMLDocument:W.cc,Document:W.cc,DOMException:W.eQ,DOMImplementation:W.dc,DOMRectReadOnly:W.dd,Element:W.P,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,EventTarget:W.bD,HTMLFormElement:W.f3,HTMLHeadElement:W.dh,History:W.di,HTMLCollection:W.bG,HTMLFormControlsCollection:W.bG,HTMLOptionsCollection:W.bG,HTMLDocument:W.dj,ImageData:W.b3,HTMLImageElement:W.cg,HTMLInputElement:W.ch,KeyboardEvent:W.aR,HTMLLabelElement:W.dq,Location:W.dt,HTMLAudioElement:W.cl,HTMLMediaElement:W.cl,PointerEvent:W.aa,MouseEvent:W.aa,DragEvent:W.aa,DocumentFragment:W.C,ShadowRoot:W.C,DocumentType:W.C,Node:W.C,NodeList:W.co,RadioNodeList:W.co,Range:W.dI,HTMLSelectElement:W.fW,HTMLTableCellElement:W.aV,HTMLTableDataCellElement:W.aV,HTMLTableHeaderCellElement:W.aV,HTMLTableElement:W.dQ,HTMLTableRowElement:W.dR,HTMLTableSectionElement:W.hb,HTMLTemplateElement:W.cv,Touch:W.aK,TouchEvent:W.aL,TouchList:W.hk,CompositionEvent:W.bs,FocusEvent:W.bs,TextEvent:W.bs,UIEvent:W.bs,HTMLVideoElement:W.hV,WheelEvent:W.aZ,Window:W.cK,DOMWindow:W.cK,Attr:W.cL,ClientRect:W.eb,DOMRect:W.eb,NamedNodeMap:W.eh,MozNamedAttrMap:W.eh,SVGScriptElement:P.cr,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,WebGLBuffer:P.d5,WebGLFramebuffer:P.dg,WebGLProgram:P.dH,WebGLRenderingContext:P.bR,WebGLShader:P.dL,WebGLTexture:P.dT,WebGLUniformLocation:P.e1})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.dz.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.dA.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.dB.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.lj,[])
else M.lj([])})})()
//# sourceMappingURL=test.dart.js.map
