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
a[c]=function(){a[c]=function(){H.oG(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.l1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.l1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.l1(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kI:function kI(a){this.a=a},
kd:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
lq:function(){return new P.ib("No element")},
a4:function a4(a){this.a=a},
fT:function fT(){},
dN:function dN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hp:function hp(a,b,c){this.a=a
this.b=b
this.$ti=c},
hq:function hq(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ja:function ja(a,b,c){this.a=a
this.b=b
this.$ti=c},
jb:function jb(a,b,c){this.a=a
this.b=b
this.$ti=c},
bZ:function bZ(){},
cV:function cV(){},
ek:function ek(){},
mU:function(){throw H.c(P.G("Cannot modify unmodifiable Map"))},
ch:function(a){var u,t
u=H.N(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
op:function(a){return v.types[H.ae(a)]},
ov:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iK},
n:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aw(a)
if(typeof u!=="string")throw H.c(H.au(a))
return u},
nr:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.h8(u)
t=u[0]
s=u[1]
return new H.hS(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cF:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
no:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.e(u,3)
t=H.N(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ad(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.K(r,p)|32)>s)return}return parseInt(a,b)},
c2:function(a){return H.nf(a)+H.l_(H.bN(a),0,null)},
nf:function(a){var u,t,s,r,q,p,o,n,m
u=J.V(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.P||!!u.$icU){p=C.A(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.ch(r.length>1&&C.c.K(r,0)===36?C.c.aJ(r,1):r)},
ng:function(){if(!!self.location)return self.location.href
return},
lF:function(a){var u,t,s,r,q
H.ki(a)
u=J.aK(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
np:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.E)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.au(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.e.aW(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.au(r))}return H.lF(u)},
lG:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.au(s))
if(s<0)throw H.c(H.au(s))
if(s>65535)return H.np(a)}return H.lF(a)},
nq:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dX:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aW(u,10))>>>0,56320|u&1023)}}throw H.c(P.ad(a,0,1114111,null,null))},
c1:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nn:function(a){var u=H.c1(a).getFullYear()+0
return u},
nl:function(a){var u=H.c1(a).getMonth()+1
return u},
nh:function(a){var u=H.c1(a).getDate()+0
return u},
ni:function(a){var u=H.c1(a).getHours()+0
return u},
nk:function(a){var u=H.c1(a).getMinutes()+0
return u},
nm:function(a){var u=H.c1(a).getSeconds()+0
return u},
nj:function(a){var u=H.c1(a).getMilliseconds()+0
return u},
w:function(a){throw H.c(H.au(a))},
e:function(a,b){if(a==null)J.aK(a)
throw H.c(H.cc(a,b))},
cc:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aY(!0,b,"index",null)
u=H.ae(J.aK(a))
if(!(b<0)){if(typeof u!=="number")return H.w(u)
t=b>=u}else t=!0
if(t)return P.X(b,a,"index",null,u)
return P.dZ(b,"index",null)},
ol:function(a,b,c){if(a>c)return new P.c3(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c3(a,c,!0,b,"end","Invalid value")
return new P.aY(!0,b,"end",null)},
au:function(a){return new P.aY(!0,a,null,null)},
oh:function(a){if(typeof a!=="number")throw H.c(H.au(a))
return a},
c:function(a){var u
if(a==null)a=new P.dV()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ms})
u.name=""}else u.toString=H.ms
return u},
ms:function(){return J.aw(this.dartException)},
q:function(a){throw H.c(a)},
E:function(a){throw H.c(P.bX(a))},
bd:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.j])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iA(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iB:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lN:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lz:function(a,b){return new H.hK(a,b==null?null:b.method)},
kJ:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.hb(a,t,u?null:b.receiver)},
aI:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.kv(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.aW(s,16)&8191)===10)switch(r){case 438:return u.$1(H.kJ(H.n(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.lz(H.n(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.mv()
p=$.mw()
o=$.mx()
n=$.my()
m=$.mB()
l=$.mC()
k=$.mA()
$.mz()
j=$.mE()
i=$.mD()
h=q.aq(t)
if(h!=null)return u.$1(H.kJ(H.N(t),h))
else{h=p.aq(t)
if(h!=null){h.method="call"
return u.$1(H.kJ(H.N(t),h))}else{h=o.aq(t)
if(h==null){h=n.aq(t)
if(h==null){h=m.aq(t)
if(h==null){h=l.aq(t)
if(h==null){h=k.aq(t)
if(h==null){h=n.aq(t)
if(h==null){h=j.aq(t)
if(h==null){h=i.aq(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.lz(H.N(t),h))}}return u.$1(new H.iM(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.e4()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aY(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.e4()
return a},
cf:function(a){var u
if(a==null)return new H.eW(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eW(a)},
oo:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.l(0,a[t],a[s])}return b},
ou:function(a,b,c,d,e,f){H.f(a,"$ikF")
switch(H.ae(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
cb:function(a,b){var u
H.ae(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ou)
a.$identity=u
return u},
mT:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.V(d).$ib){u.$reflectionInfo=d
s=H.nr(u).r}else s=d
r=e?Object.create(new H.ic().constructor.prototype):Object.create(new H.ci(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aZ
if(typeof p!=="number")return p.C()
$.aZ=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.lj(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.op,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.lh:H.kB
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.lj(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
mQ:function(a,b,c,d){var u=H.kB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lj:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mS(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mQ(t,!r,u,b)
if(t===0){r=$.aZ
if(typeof r!=="number")return r.C()
$.aZ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cj
if(q==null){q=H.fx("self")
$.cj=q}return new Function(r+H.n(q)+";return "+p+"."+H.n(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aZ
if(typeof r!=="number")return r.C()
$.aZ=r+1
o+=r
r="return function("+o+"){return this."
q=$.cj
if(q==null){q=H.fx("self")
$.cj=q}return new Function(r+H.n(q)+"."+H.n(u)+"("+o+");}")()},
mR:function(a,b,c,d){var u,t
u=H.kB
t=H.lh
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
mS:function(a,b){var u,t,s,r,q,p,o,n
u=$.cj
if(u==null){u=H.fx("self")
$.cj=u}t=$.lg
if(t==null){t=H.fx("receiver")
$.lg=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.mR(r,!p,s,b)
if(r===1){u="return function(){return this."+H.n(u)+"."+H.n(s)+"(this."+H.n(t)+");"
t=$.aZ
if(typeof t!=="number")return t.C()
$.aZ=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.n(u)+"."+H.n(s)+"(this."+H.n(t)+", "+n+");"
t=$.aZ
if(typeof t!=="number")return t.C()
$.aZ=t+1
return new Function(u+t+"}")()},
l1:function(a,b,c,d,e,f,g){return H.mT(a,b,H.ae(c),d,!!e,!!f,g)},
kB:function(a){return a.a},
lh:function(a){return a.c},
fx:function(a){var u,t,s,r,q
u=new H.ci("self","target","receiver","name")
t=J.h8(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aW(a,"String"))},
om:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aW(a,"double"))},
oz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aW(a,"num"))},
mf:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aW(a,"bool"))},
ae:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aW(a,"int"))},
mn:function(a,b){throw H.c(H.aW(a,H.ch(H.N(b).substring(2))))},
oB:function(a,b){throw H.c(H.mP(a,H.ch(H.N(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.mn(a,b)},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.oB(a,b)},
ki:function(a){if(a==null)return a
if(!!J.V(a).$ib)return a
throw H.c(H.aW(a,"List<dynamic>"))},
mk:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.mn(a,b)},
mg:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ae(u)]
else return a.$S()}return},
fi:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.mg(J.V(a))
if(u==null)return!1
return H.m5(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.kX)return a
$.kX=!0
try{if(H.fi(a,b))return a
u=H.kr(b)
t=H.aW(a,u)
throw H.c(t)}finally{$.kX=!1}},
l2:function(a,b){if(a!=null&&!H.l0(a,b))H.q(H.aW(a,H.kr(b)))
return a},
aW:function(a,b){return new H.iC("TypeError: "+P.fW(a)+": type '"+H.ma(a)+"' is not a subtype of type '"+b+"'")},
mP:function(a,b){return new H.fy("CastError: "+P.fW(a)+": type '"+H.ma(a)+"' is not a subtype of type '"+b+"'")},
ma:function(a){var u,t
u=J.V(a)
if(!!u.$icl){t=H.mg(u)
if(t!=null)return H.kr(t)
return"Closure"}return H.c2(a)},
oG:function(a){throw H.c(new P.fL(H.N(a)))},
nv:function(a){return new H.hZ(a)},
mh:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bN:function(a){if(a==null)return
return a.$ti},
pl:function(a,b,c){return H.cg(a["$a"+H.n(c)],H.bN(b))},
ce:function(a,b,c,d){var u
H.N(c)
H.ae(d)
u=H.cg(a["$a"+H.n(c)],H.bN(b))
return u==null?null:u[d]},
az:function(a,b,c){var u
H.N(b)
H.ae(c)
u=H.cg(a["$a"+H.n(b)],H.bN(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.ae(b)
u=H.bN(a)
return u==null?null:u[b]},
kr:function(a){return H.bM(a,null)},
bM:function(a,b){var u,t
H.l(b,"$ib",[P.j],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ch(a[0].name)+H.l_(a,1,b)
if(typeof a=="function")return H.ch(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ae(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.n(b[t])}if('func' in a)return H.o6(a,b)
if('futureOr' in a)return"FutureOr<"+H.bM("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
o6:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.j]
H.l(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.d([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.e(b,m)
o=C.c.C(o,b[m])
l=t[p]
if(l!=null&&l!==P.S)o+=" extends "+H.bM(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bM(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bM(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bM(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.on(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.N(u[g])
i=i+h+H.bM(d[c],b)+(" "+H.n(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
l_:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.j],"$ab")
if(a==null)return""
u=new P.aq("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bM(p,c)}return"<"+u.j(0)+">"},
cg:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dc:function(a,b,c,d){var u,t
H.N(b)
H.ki(c)
H.N(d)
if(a==null)return!1
u=H.bN(a)
t=J.V(a)
if(t[b]==null)return!1
return H.md(H.cg(t[d],u),null,c,null)},
l:function(a,b,c,d){H.N(b)
H.ki(c)
H.N(d)
if(a==null)return a
if(H.dc(a,b,c,d))return a
throw H.c(H.aW(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ch(b.substring(2))+H.l_(c,0,null),v.mangledGlobalNames)))},
md:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aH(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aH(a[t],b,c[t],d))return!1
return!0},
pj:function(a,b,c){return a.apply(b,H.cg(J.V(b)["$a"+H.n(c)],H.bN(b)))},
mj:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="S"||a.name==="I"||a===-1||a===-2||H.mj(u)}return!1},
l0:function(a,b){var u,t
if(a==null)return b==null||b.name==="S"||b.name==="I"||b===-1||b===-2||H.mj(b)
if(b==null||b===-1||b.name==="S"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.l0(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fi(a,b)}u=J.V(a).constructor
t=H.bN(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aH(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.l0(a,b))throw H.c(H.aW(a,H.kr(b)))
return a},
aH:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="S"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="S"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aH(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="I")return!0
if('func' in c)return H.m5(a,b,c,d)
if('func' in a)return c.name==="kF"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aH("type" in a?a.type:null,b,s,d)
else if(H.aH(a,b,s,d))return!0
else{if(!('$i'+"cs" in t.prototype))return!1
r=t.prototype["$a"+"cs"]
q=H.cg(r,u?a.slice(1):null)
return H.aH(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.md(H.cg(m,u),b,p,d)},
m5:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aH(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aH(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aH(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aH(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.oy(h,b,g,d)},
oy:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aH(c[r],d,a[r],b))return!1}return!0},
pk:function(a,b,c){Object.defineProperty(a,H.N(b),{value:c,enumerable:false,writable:true,configurable:true})},
ow:function(a){var u,t,s,r,q,p
u=H.N($.mi.$1(a))
t=$.k8[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kh[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.N($.mc.$2(a,u))
if(u!=null){t=$.k8[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kh[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.kq(s)
$.k8[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kh[u]=s
return s}if(q==="-"){p=H.kq(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.mm(a,s)
if(q==="*")throw H.c(P.iL(u))
if(v.leafTags[u]===true){p=H.kq(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.mm(a,s)},
mm:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.l5(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kq:function(a){return J.l5(a,!1,null,!!a.$iK)},
ox:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kq(u)
else return J.l5(u,c,null,null)},
os:function(){if(!0===$.l4)return
$.l4=!0
H.ot()},
ot:function(){var u,t,s,r,q,p,o,n
$.k8=Object.create(null)
$.kh=Object.create(null)
H.or()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mo.$1(q)
if(p!=null){o=H.ox(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
or:function(){var u,t,s,r,q,p,o
u=C.U()
u=H.ca(C.R,H.ca(C.W,H.ca(C.z,H.ca(C.z,H.ca(C.V,H.ca(C.S,H.ca(C.T(C.A),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.mi=new H.ke(q)
$.mc=new H.kf(p)
$.mo=new H.kg(o)},
ca:function(a,b){return a(b)||b},
n5:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a3("Illegal RegExp pattern ("+String(r)+")",a,null))},
oF:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mq:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fF:function fF(){},
fG:function fG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hS:function hS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
iA:function iA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hK:function hK(a,b){this.a=a
this.b=b},
hb:function hb(a,b,c){this.a=a
this.b=b
this.c=c},
iM:function iM(a){this.a=a},
kv:function kv(a){this.a=a},
eW:function eW(a){this.a=a
this.b=null},
cl:function cl(){},
il:function il(){},
ic:function ic(){},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iC:function iC(a){this.a=a},
fy:function fy(a){this.a=a},
hZ:function hZ(a){this.a=a},
aM:function aM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hf:function hf(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hg:function hg(a,b){this.a=a
this.$ti=b},
hh:function hh(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a){this.a=a},
ha:function ha(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bL:function(a){return a},
ne:function(a){return new Int8Array(a)},
bg:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cc(b,a))},
o4:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.ol(a,b,c))
return b},
cB:function cB(){},
bE:function bE(){},
dS:function dS(){},
cC:function cC(){},
dT:function dT(){},
hE:function hE(){},
hF:function hF(){},
hG:function hG(){},
hH:function hH(){},
hI:function hI(){},
dU:function dU(){},
cD:function cD(){},
d_:function d_(){},
d0:function d0(){},
d1:function d1(){},
d2:function d2(){},
on:function(a){return J.lr(a?Object.keys(a):[],null)},
oA:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l5:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ka:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.l4==null){H.os()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.iL("Return interceptor for "+H.n(t(a,u))))}r=a.constructor
q=r==null?null:r[$.l6()]
if(q!=null)return q
q=H.ow(a)
if(q!=null)return q
if(typeof a=="function")return C.X
t=Object.getPrototypeOf(a)
if(t==null)return C.F
if(t===Object.prototype)return C.F
if(typeof r=="function"){Object.defineProperty(r,$.l6(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
n4:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kA(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ad(a,0,4294967295,"length",null))
return J.lr(new Array(a),b)},
lr:function(a,b){return J.h8(H.d(a,[b]))},
h8:function(a){H.ki(a)
a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dG.prototype
return J.dF.prototype}if(typeof a=="string")return J.c0.prototype
if(a==null)return J.dH.prototype
if(typeof a=="boolean")return J.h9.prototype
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.S)return a
return J.ka(a)},
dd:function(a){if(typeof a=="string")return J.c0.prototype
if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.S)return a
return J.ka(a)},
k9:function(a){if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.S)return a
return J.ka(a)},
l3:function(a){if(typeof a=="string")return J.c0.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.cU.prototype
return a},
bs:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.S)return a
return J.ka(a)},
P:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).u(a,b)},
la:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ov(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dd(a).i(a,b)},
kx:function(a,b,c){return J.k9(a).l(a,b,c)},
mK:function(a,b){return J.l3(a).K(a,b)},
ky:function(a,b,c){return J.bs(a).iL(a,b,c)},
mL:function(a,b,c,d){return J.bs(a).jL(a,b,c,d)},
lb:function(a,b){return J.bs(a).a_(a,b)},
mM:function(a,b){return J.l3(a).a0(a,b)},
kz:function(a,b){return J.k9(a).N(a,b)},
mN:function(a,b,c,d){return J.bs(a).kc(a,b,c,d)},
lc:function(a,b){return J.k9(a).R(a,b)},
ld:function(a){return J.bs(a).gcw(a)},
di:function(a){return J.V(a).gL(a)},
bP:function(a){return J.k9(a).gW(a)},
aK:function(a){return J.dd(a).gk(a)},
mO:function(a,b){return J.bs(a).kR(a,b)},
aw:function(a){return J.V(a).j(a)},
a:function a(){},
h9:function h9(){},
dH:function dH(){},
dJ:function dJ(){},
hO:function hO(){},
cU:function cU(){},
bB:function bB(){},
b2:function b2(a){this.$ti=a},
kH:function kH(a){this.$ti=a},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dI:function dI(){},
dG:function dG(){},
dF:function dF(){},
c0:function c0(){}},P={
nK:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.oe()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.cb(new P.jd(u),1)).observe(t,{childList:true})
return new P.jc(u,t,s)}else if(self.setImmediate!=null)return P.of()
return P.og()},
nL:function(a){self.scheduleImmediate(H.cb(new P.je(H.m(a,{func:1,ret:-1})),0))},
nM:function(a){self.setImmediate(H.cb(new P.jf(H.m(a,{func:1,ret:-1})),0))},
nN:function(a){P.kO(C.u,H.m(a,{func:1,ret:-1}))},
kO:function(a,b){var u
H.m(b,{func:1,ret:-1})
u=C.e.a8(a.a,1000)
return P.nQ(u<0?0:u,b)},
lM:function(a,b){var u
H.m(b,{func:1,ret:-1,args:[P.bb]})
u=C.e.a8(a.a,1000)
return P.nR(u<0?0:u,b)},
nQ:function(a,b){var u=new P.f1(!0)
u.fP(a,b)
return u},
nR:function(a,b){var u=new P.f1(!1)
u.fQ(a,b)
return u},
nO:function(a,b){var u,t,s
b.a=1
try{a.f5(new P.jo(b),new P.jp(b),null)}catch(s){u=H.aI(s)
t=H.cf(s)
P.oC(new P.jq(b,u,t))}},
lV:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaG")
if(u>=4){t=b.ci()
b.a=a.a
b.c=a.c
P.cY(b,t)}else{t=H.f(b.c,"$ibf")
b.a=2
b.c=a
a.dH(t)}},
cY:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.f(t.c,"$iao")
t=t.b
p=q.a
o=q.b
t.toString
P.k4(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cY(u.a,b)}t=u.a
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
if(k){H.f(m,"$iao")
t=t.b
p=m.a
o=m.b
t.toString
P.k4(null,null,t,p,o)
return}j=$.Y
if(j!=l)$.Y=l
else j=null
t=b.c
if(t===8)new P.ju(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jt(s,b,m).$0()}else if((t&2)!==0)new P.js(u,s,b).$0()
if(j!=null)$.Y=j
t=s.b
if(!!J.V(t).$ics){if(t.a>=4){i=H.f(o.c,"$ibf")
o.c=null
b=o.br(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.lV(t,o)
return}}h=b.b
i=H.f(h.c,"$ibf")
h.c=null
b=h.br(i)
t=s.a
p=s.b
if(!t){H.B(p,H.v(h,0))
h.a=4
h.c=p}else{H.f(p,"$iao")
h.a=8
h.c=p}u.a=h
t=h}},
o9:function(a,b){if(H.fi(a,{func:1,args:[P.S,P.at]}))return H.m(a,{func:1,ret:null,args:[P.S,P.at]})
if(H.fi(a,{func:1,args:[P.S]}))return H.m(a,{func:1,ret:null,args:[P.S]})
throw H.c(P.kA(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
o8:function(){var u,t
for(;u=$.c9,u!=null;){$.db=null
t=u.b
$.c9=t
if(t==null)$.da=null
u.a.$0()}},
od:function(){$.kY=!0
try{P.o8()}finally{$.db=null
$.kY=!1
if($.c9!=null)$.l9().$1(P.me())}},
m9:function(a){var u=new P.eq(H.m(a,{func:1,ret:-1}))
if($.c9==null){$.da=u
$.c9=u
if(!$.kY)$.l9().$1(P.me())}else{$.da.b=u
$.da=u}},
oc:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
u=$.c9
if(u==null){P.m9(a)
$.db=$.da
return}t=new P.eq(a)
s=$.db
if(s==null){t.b=u
$.db=t
$.c9=t}else{t.b=s.b
s.b=t
$.db=t
if(t.b==null)$.da=t}},
oC:function(a){var u,t
u={func:1,ret:-1}
H.m(a,u)
t=$.Y
if(C.k===t){P.k6(null,null,C.k,a)
return}t.toString
P.k6(null,null,t,H.m(t.cr(a),u))},
lL:function(a,b){var u,t
u={func:1,ret:-1}
H.m(b,u)
t=$.Y
if(t===C.k){t.toString
return P.kO(a,b)}return P.kO(a,H.m(t.cr(b),u))},
nB:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.bb]}
H.m(b,u)
t=$.Y
if(t===C.k){t.toString
return P.lM(a,b)}s=t.dY(b,P.bb)
$.Y.toString
return P.lM(a,H.m(s,u))},
k4:function(a,b,c,d,e){var u={}
u.a=d
P.oc(new P.k5(u,e))},
m6:function(a,b,c,d,e){var u,t
H.m(d,{func:1,ret:e})
t=$.Y
if(t===c)return d.$0()
$.Y=c
u=t
try{t=d.$0()
return t}finally{$.Y=u}},
m7:function(a,b,c,d,e,f,g){var u,t
H.m(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
oa:function(a,b,c,d,e,f,g,h,i){var u,t
H.m(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.Y
if(t===c)return d.$2(e,f)
$.Y=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Y=u}},
k6:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cr(d):c.jR(d,-1)
P.m9(d)},
jd:function jd(a){this.a=a},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
je:function je(a){this.a=a},
jf:function jf(a){this.a=a},
f1:function f1(a){this.a=a
this.b=null
this.c=0},
jO:function jO(a,b){this.a=a
this.b=b},
jN:function jN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bf:function bf(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aG:function aG(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jn:function jn(a,b){this.a=a
this.b=b},
jr:function jr(a,b){this.a=a
this.b=b},
jo:function jo(a){this.a=a},
jp:function jp(a){this.a=a},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
ju:function ju(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jv:function jv(a){this.a=a},
jt:function jt(a,b,c){this.a=a
this.b=b
this.c=c},
js:function js(a,b,c){this.a=a
this.b=b
this.c=c},
eq:function eq(a){this.a=a
this.b=null},
ig:function ig(){},
ii:function ii(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.b=b},
cK:function cK(){},
ih:function ih(){},
bb:function bb(){},
ao:function ao(a,b){this.a=a
this.b=b},
jY:function jY(){},
k5:function k5(a,b){this.a=a
this.b=b},
jC:function jC(){},
jE:function jE(a,b,c){this.a=a
this.b=b
this.c=c},
jD:function jD(a,b){this.a=a
this.b=b},
jF:function jF(a,b,c){this.a=a
this.b=b
this.c=c},
n7:function(a,b,c,d,e){return new H.aM([d,e])},
ls:function(a,b){return new H.aM([a,b])},
n9:function(a){return H.oo(a,new H.aM([null,null]))},
na:function(a,b,c,d){return new P.jz([d])},
lY:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lX:function(a,b,c){var u=new P.jA(a,b,[c])
u.c=a.e
return u},
n3:function(a,b,c){var u,t
if(P.kZ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.j])
t=$.dh()
C.a.h(t,a)
try{P.o7(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.lI(b,H.mk(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
kG:function(a,b,c){var u,t,s
if(P.kZ(a))return b+"..."+c
u=new P.aq(b)
t=$.dh()
C.a.h(t,a)
try{s=u
s.a=P.lI(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kZ:function(a){var u,t
for(u=0;t=$.dh(),u<t.length;++u)if(a===t[u])return!0
return!1},
o7:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.j],"$ab")
u=a.gW(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.n(u.gO(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gO(u);++s
if(!u.B()){if(s<=4){C.a.h(b,H.n(o))
return}q=H.n(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gO(u);++s
for(;u.B();o=n,n=m){m=u.gO(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.n(o)
q=H.n(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
n8:function(a,b,c){var u=P.n7(null,null,null,b,c)
a.R(0,new P.hi(u,b,c))
return u},
kK:function(a){var u,t
u={}
if(P.kZ(a))return"{...}"
t=new P.aq("")
try{C.a.h($.dh(),a)
t.a+="{"
u.a=!0
J.lc(a,new P.hn(u,t))
t.a+="}"}finally{u=$.dh()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jz:function jz(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cZ:function cZ(a){this.a=a
this.c=this.b=null},
jA:function jA(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
hj:function hj(){},
z:function z(){},
hm:function hm(){},
hn:function hn(a,b){this.a=a
this.b=b},
aj:function aj(){},
jP:function jP(){},
ho:function ho(){},
el:function el(a,b){this.a=a
this.$ti=b},
jG:function jG(){},
eF:function eF(){},
f7:function f7(){},
nF:function(a,b,c,d){H.l(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.nG(!1,b,c,d)
return},
nG:function(a,b,c,d){var u,t,s
u=$.mF()
if(u==null)return
t=0===c
if(t&&!0)return P.kS(u,b)
s=b.length
d=P.bI(c,d,s,null,null,null)
if(t&&d===s)return P.kS(u,b)
return P.kS(u,b.subarray(c,d))},
kS:function(a,b){if(P.nI(b))return
return P.nJ(a,b)},
nJ:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aI(t)}return},
nI:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
nH:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aI(t)}return},
ob:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.o],"$ab")
for(u=J.dd(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.c_()
if((s&127)!==s)return t-b}return c-b},
lf:function(a,b,c,d,e,f){if(C.e.ax(f,4)!==0)throw H.c(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
fu:function fu(a){this.a=a},
fv:function fv(a){this.a=a},
bV:function bV(){},
bY:function bY(){},
fU:function fU(){},
iU:function iU(a){this.a=a},
iW:function iW(){},
jX:function jX(a){this.b=this.a=0
this.c=a},
iV:function iV(a){this.a=a},
jV:function jV(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
jW:function jW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fj:function(a,b,c){var u
H.m(b,{func:1,ret:P.o,args:[P.j]})
u=H.no(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a3(a,null,null))},
n_:function(a){if(a instanceof H.cl)return a.j(0)
return"Instance of '"+H.c2(a)+"'"},
nb:function(a,b,c,d){var u,t
H.B(b,d)
u=J.n4(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.l(u,t,b)
return H.l(u,"$ib",[d],"$ab")},
lt:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=J.bP(a);s.B();)C.a.h(t,H.B(s.gO(s),c))
if(b)return t
return H.l(J.h8(t),"$ib",u,"$ab")},
e5:function(a,b,c){var u,t
u=P.o
H.l(a,"$ii",[u],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$ib2",[u],"$ab2")
t=a.length
c=P.bI(b,c,t,null,null,null)
return H.lG(b>0||c<t?C.a.fq(a,b,c):a)}if(!!J.V(a).$icD)return H.nq(a,b,P.bI(b,c,a.length,null,null,null))
return P.nx(a,b,c)},
nx:function(a,b,c){var u,t,s,r
H.l(a,"$ii",[P.o],"$ai")
if(b<0)throw H.c(P.ad(b,0,J.aK(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.ad(c,b,J.aK(a),null,null))
t=J.bP(a)
for(s=0;s<b;++s)if(!t.B())throw H.c(P.ad(b,0,s,null,null))
r=[]
if(u)for(;t.B();)r.push(t.gO(t))
else for(s=b;s<c;++s){if(!t.B())throw H.c(P.ad(c,b,s,null,null))
r.push(t.gO(t))}return H.lG(r)},
nt:function(a,b,c){return new H.ha(a,H.n5(a,!1,!0,!1))},
lI:function(a,b,c){var u=J.bP(b)
if(!u.B())return a
if(c.length===0){do a+=H.n(u.gO(u))
while(u.B())}else{a+=H.n(u.gO(u))
for(;u.B();)a=a+c+H.n(u.gO(u))}return a},
kR:function(){var u=H.ng()
if(u!=null)return P.nE(u,0,null)
throw H.c(P.G("'Uri.base' is not supported"))},
jU:function(a,b,c,d){var u,t,s,r,q,p
H.l(a,"$ib",[P.o],"$ab")
if(c===C.m){u=$.mI().b
if(typeof b!=="string")H.q(H.au(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.az(c,"bV",0))
t=c.gkb().cz(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dX(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
mV:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mW:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dt:function(a){if(a>=10)return""+a
return"0"+a},
ln:function(a,b,c,d,e,f){return new P.bv(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fW:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n_(a)},
dj:function(a){return new P.aY(!1,null,null,a)},
kA:function(a,b,c){return new P.aY(!0,a,b,c)},
dZ:function(a,b,c){return new P.c3(null,null,!0,a,b,"Value not in range")},
ad:function(a,b,c,d,e){return new P.c3(b,c,!0,a,d,"Invalid value")},
bI:function(a,b,c,d,e,f){if(typeof a!=="number")return H.w(a)
if(0>a||a>c)throw H.c(P.ad(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.ad(b,a,c,"end",f))
return b}return c},
X:function(a,b,c,d,e){var u=H.ae(e==null?J.aK(b):e)
return new P.h7(b,u,!0,a,c,"Index out of range")},
G:function(a){return new P.iN(a)},
iL:function(a){return new P.iK(a)},
bX:function(a){return new P.fE(a)},
u:function(a){return new P.ey(a)},
a3:function(a,b,c){return new P.h4(a,b,c)},
nc:function(a,b,c,d){var u,t
H.m(b,{func:1,ret:d,args:[P.o]})
u=H.d([],[d])
C.a.sk(u,a)
for(t=0;t<a;++t)C.a.l(u,t,b.$1(t))
return u},
av:function(a){H.oA(a)},
nE:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.K(a,b+4)^58)*3|C.c.K(a,b)^100|C.c.K(a,b+1)^97|C.c.K(a,b+2)^116|C.c.K(a,b+3)^97)>>>0
if(t===0)return P.lO(b>0||c<c?C.c.q(a,b,c):a,5,null).gf9()
else if(t===32)return P.lO(C.c.q(a,u,c),0,null).gf9()}s=new Array(8)
s.fixed$length=Array
r=H.d(s,[P.o])
C.a.l(r,0,0)
s=b-1
C.a.l(r,1,s)
C.a.l(r,2,s)
C.a.l(r,7,s)
C.a.l(r,3,b)
C.a.l(r,4,b)
C.a.l(r,5,c)
C.a.l(r,6,c)
if(P.m8(a,b,c,0,r)>=14)C.a.l(r,7,c)
q=r[1]
if(typeof q!=="number")return q.l9()
if(q>=b)if(P.m8(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.C()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.Y()
if(typeof m!=="number")return H.w(m)
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
k=!1}else{if(!(m<c&&m===n+2&&C.c.al(a,"..",n)))i=m>n+2&&C.c.al(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.al(a,"file",b)){if(p<=b){if(!C.c.al(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.q(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.b_(a,n,m,"/");++m;++l;++c}else{a=C.c.q(a,b,n)+"/"+C.c.q(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.al(a,"http",b)){if(s&&o+3===n&&C.c.al(a,"80",o+1))if(b===0&&!0){a=C.c.b_(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.q(a,b,o)+C.c.q(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.al(a,"https",b)){if(s&&o+4===n&&C.c.al(a,"443",o+1))if(b===0&&!0){a=C.c.b_(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.q(a,b,o)+C.c.q(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.q(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.jH(a,q,p,o,n,m,l,j)}return P.nS(a,b,c,q,p,o,n,m,l,j)},
lQ:function(a,b){var u=P.j
return C.a.kf(H.d(a.split("&"),[u]),P.ls(u,u),new P.iS(b),[P.D,P.j,P.j])},
nD:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.iP(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a0(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.fj(C.c.q(a,q,r),null,null)
if(typeof n!=="number")return n.d0()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.e(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.fj(C.c.q(a,q,c),null,null)
if(typeof n!=="number")return n.d0()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.e(t,p)
t[p]=n
return t},
lP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.iQ(a)
t=new P.iR(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a0(a,r)
if(n===58){if(r===b){++r
if(C.c.a0(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaP(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.nD(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.e.aW(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
nS:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.nZ(a,b,d)
else{if(d===b)P.d7(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.o_(a,u,e-1):""
s=P.nW(a,e,f,!1)
if(typeof f!=="number")return f.C()
r=f+1
if(typeof g!=="number")return H.w(g)
q=r<g?P.nY(P.fj(C.c.q(a,r,g),new P.jQ(a,f),null),j):null}else{t=""
s=null
q=null}p=P.nX(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.Y()
o=h<i?P.kV(a,h+1,i,null):null
return new P.c8(j,t,s,q,p,o,i<c?P.nV(a,i+1,c):null)},
lZ:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
d7:function(a,b,c){throw H.c(P.a3(c,a,b))},
nY:function(a,b){if(a!=null&&a===P.lZ(b))return
return a},
nW:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a0(a,b)===91){if(typeof c!=="number")return c.H()
u=c-1
if(C.c.a0(a,u)!==93)P.d7(a,b,"Missing end `]` to match `[` in host")
P.lP(a,b+1,u)
return C.c.q(a,b,c).toLowerCase()}if(typeof c!=="number")return H.w(c)
t=b
for(;t<c;++t)if(C.c.a0(a,t)===58){P.lP(a,b,c)
return"["+a+"]"}return P.o1(a,b,c)},
o1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a0(a,u)
if(q===37){p=P.m4(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.aq("")
n=C.c.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.D,o)
o=(C.D[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.aq("")
if(t<u){s.a+=C.c.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.p,o)
o=(C.p[o]&1<<(q&15))!==0}else o=!1
if(o)P.d7(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a0(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.aq("")
n=C.c.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.m_(q)
u+=l
t=u}}}}if(s==null)return C.c.q(a,b,c)
if(t<c){n=C.c.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nZ:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.m1(C.c.K(a,b)))P.d7(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.K(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.r,r)
r=(C.r[r]&1<<(s&15))!==0}else r=!1
if(!r)P.d7(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.q(a,b,c)
return P.nT(t?a.toLowerCase():a)},
nT:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
o_:function(a,b,c){return P.d8(a,b,c,C.Z,!1)},
nX:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.d8(a,b,c,C.E,!0):C.o.ld(d,new P.jR(),P.j).F(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.ak(r,"/"))r="/"+r
return P.o0(r,e,f)},
o0:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.ak(a,"/"))return P.o2(a,!u||c)
return P.o3(a)},
kV:function(a,b,c,d){var u,t
u={}
H.l(d,"$iD",[P.j,null],"$aD")
if(a!=null){if(d!=null)throw H.c(P.dj("Both query and queryParameters specified"))
return P.d8(a,b,c,C.q,!0)}if(d==null)return
t=new P.aq("")
u.a=""
d.R(0,new P.jS(new P.jT(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
nV:function(a,b,c){return P.d8(a,b,c,C.q,!0)},
m4:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a0(a,b+1)
s=C.c.a0(a,u)
r=H.kd(t)
q=H.kd(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.e.aW(p,4)
if(u>=8)return H.e(C.t,u)
u=(C.t[u]&1<<(p&15))!==0}else u=!1
if(u)return H.dX(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.q(a,b,b+3).toUpperCase()
return},
m_:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.o])
C.a.l(t,0,37)
C.a.l(t,1,C.c.K("0123456789ABCDEF",a>>>4))
C.a.l(t,2,C.c.K("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.e.j1(a,6*r)&63|s
C.a.l(t,q,37)
C.a.l(t,q+1,C.c.K("0123456789ABCDEF",p>>>4))
C.a.l(t,q+2,C.c.K("0123456789ABCDEF",p&15))
q+=3}}return P.e5(t,0,null)},
d8:function(a,b,c,d,e){var u=P.m3(a,b,c,H.l(d,"$ib",[P.o],"$ab"),e)
return u==null?C.c.q(a,b,c):u},
m3:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Y()
if(typeof c!=="number")return H.w(c)
if(!(t<c))break
c$0:{q=C.c.a0(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.m4(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.p,p)
p=(C.p[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.d7(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a0(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.m_(q)}}if(r==null)r=new P.aq("")
r.a+=C.c.q(a,s,t)
r.a+=H.n(o)
if(typeof n!=="number")return H.w(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Y()
if(s<c)r.a+=C.c.q(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
m2:function(a){if(C.c.ak(a,"."))return!0
return C.c.eI(a,"/.")!==-1},
o3:function(a){var u,t,s,r,q,p,o
if(!P.m2(a))return a
u=H.d([],[P.j])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.P(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.F(u,"/")},
o2:function(a,b){var u,t,s,r,q,p
if(!P.m2(a))return!b?P.m0(a):a
u=H.d([],[P.j])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaP(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaP(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.l(u,0,P.m0(u[0]))}return C.a.F(u,"/")},
m0:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.m1(J.mK(a,0)))for(t=1;t<u;++t){s=C.c.K(a,t)
if(s===58)return C.c.q(a,0,t)+"%3A"+C.c.aJ(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.e(C.r,r)
r=(C.r[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
nU:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.K(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dj("Invalid URL encoding"))}}return u},
kW:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.K(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.q(a,b,c)
else q=new H.a4(C.c.q(a,b,c))}else{q=H.d([],[P.o])
for(r=a.length,t=b;t<c;++t){s=C.c.K(a,t)
if(s>127)throw H.c(P.dj("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.dj("Truncated URI"))
C.a.h(q,P.nU(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.l(q,"$ib",[P.o],"$ab")
return new P.iV(!1).cz(q)},
m1:function(a){var u=a|32
return 97<=u&&u<=122},
lO:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.d([b-1],[P.o])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.K(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a3("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a3("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.K(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaP(u)
if(q!==44||s!==o+7||!C.c.al(a,"base64",o+1))throw H.c(P.a3("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.J.kt(0,a,n,t)
else{m=P.m3(a,n,t,C.q,!0)
if(m!=null)a=C.c.b_(a,n,t,m)}return new P.iO(a,u,c)},
o5:function(){var u,t,s,r,q
u=P.nc(22,new P.k1(),!0,P.Q)
t=new P.k0(u)
s=new P.k2()
r=new P.k3()
q=H.f(t.$2(0,225),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(14,225),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(15,225),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(1,225),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(2,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(3,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(4,229),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(5,229),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(6,231),"$iQ")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(7,231),"$iQ")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.f(t.$2(8,8),"$iQ"),"]",5)
q=H.f(t.$2(9,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(16,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(17,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(10,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(18,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(19,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(11,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(12,236),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.f(t.$2(13,237),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.f(t.$2(20,245),"$iQ"),"az",21)
q=H.f(t.$2(21,245),"$iQ")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
m8:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.o],"$ab")
u=$.mJ()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.c.K(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.l(e,q>>>5,t)}return d},
a1:function a1(){},
ap:function ap(a,b){this.a=a
this.b=b},
t:function t(){},
bv:function bv(a){this.a=a},
fR:function fR(){},
fS:function fS(){},
bw:function bw(){},
dV:function dV(){},
aY:function aY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c3:function c3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h7:function h7(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iN:function iN(a){this.a=a},
iK:function iK(a){this.a=a},
ib:function ib(a){this.a=a},
fE:function fE(a){this.a=a},
hN:function hN(){},
e4:function e4(){},
fL:function fL(a){this.a=a},
ey:function ey(a){this.a=a},
h4:function h4(a,b,c){this.a=a
this.b=b
this.c=c},
o:function o(){},
i:function i(){},
b1:function b1(){},
b:function b(){},
D:function D(){},
I:function I(){},
a2:function a2(){},
S:function S(){},
at:function at(){},
j:function j(){},
aq:function aq(a){this.a=a},
iS:function iS(a){this.a=a},
iP:function iP(a){this.a=a},
iQ:function iQ(a){this.a=a},
iR:function iR(a,b){this.a=a
this.b=b},
c8:function c8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
jQ:function jQ(a,b){this.a=a
this.b=b},
jR:function jR(){},
jT:function jT(a,b){this.a=a
this.b=b},
jS:function jS(a){this.a=a},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(){},
k0:function k0(a){this.a=a},
k2:function k2(){},
k3:function k3(){},
jH:function jH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jj:function jj(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
ok:function(a){var u,t
u=J.V(a)
if(!!u.$ibk){t=u.ge5(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.f6(a.data,a.height,a.width)},
oj:function(a){if(a instanceof P.f6)return{data:a.a,height:a.b,width:a.c}
return a},
br:function(a){var u,t,s,r,q
if(a==null)return
u=P.ls(P.j,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r){q=H.N(t[r])
u.l(0,q,a[q])}return u},
oi:function(a,b){var u={}
a.R(0,new P.k7(u))
return u},
jJ:function jJ(){},
jL:function jL(a,b){this.a=a
this.b=b},
f6:function f6(a,b,c){this.a=a
this.b=b
this.c=c},
k7:function k7(a){this.a=a},
jK:function jK(a,b){this.a=a
this.b=b},
h0:function h0(a,b){this.a=a
this.b=b},
h1:function h1(){},
h2:function h2(){},
jy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nP:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jB:function jB(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b4:function b4(){},
hd:function hd(){},
b8:function b8(){},
hL:function hL(){},
hR:function hR(){},
ik:function ik(){},
r:function r(){},
bc:function bc(){},
iz:function iz(){},
eD:function eD(){},
eE:function eE(){},
eN:function eN(){},
eO:function eO(){},
eY:function eY(){},
eZ:function eZ(){},
f4:function f4(){},
f5:function f5(){},
Q:function Q(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(a){this.a=a},
fs:function fs(){},
bQ:function bQ(){},
hM:function hM(){},
er:function er(){},
dm:function dm(){},
dA:function dA(){},
dY:function dY(){},
e_:function e_(){},
c5:function c5(){},
e1:function e1(){},
e8:function e8(){},
ej:function ej(){},
ia:function ia(){},
eU:function eU(){},
eV:function eV(){}},W={
kC:function(a,b){var u=document.createElement("canvas")
return u},
mZ:function(a){H.f(a,"$ik")
return"wheel"},
n2:function(a){var u,t,s
t=document.createElement("input")
u=H.f(t,"$icv")
try{u.type=a}catch(s){H.aI(s)}return u},
jx:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lW:function(a,b,c,d){var u,t
u=W.jx(W.jx(W.jx(W.jx(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ac:function(a,b,c,d,e){var u=W.mb(new W.jm(c),W.p)
if(u!=null&&!0)J.mL(a,b,u,!1)
return new W.jl(a,b,u,!1,[e])},
mb:function(a,b){var u
H.m(a,{func:1,ret:-1,args:[b]})
u=$.Y
if(u===C.k)return a
return u.dY(a,b)},
y:function y(){},
fk:function fk(){},
fm:function fm(){},
fn:function fn(){},
bR:function bR(){},
dl:function dl(){},
bT:function bT(){},
bU:function bU(){},
bu:function bu(){},
cm:function cm(){},
fH:function fH(){},
U:function U(){},
cn:function cn(){},
fI:function fI(){},
b_:function b_(){},
b0:function b0(){},
fJ:function fJ(){},
fK:function fK(){},
fM:function fM(){},
co:function co(){},
cp:function cp(){},
fO:function fO(){},
dw:function dw(){},
dx:function dx(){},
fP:function fP(){},
fQ:function fQ(){},
jh:function jh(a,b){this.a=a
this.b=b},
a0:function a0(){},
p:function p(){},
k:function k(){},
aA:function aA(){},
cr:function cr(){},
h_:function h_(){},
h3:function h3(){},
aL:function aL(){},
dD:function dD(){},
c_:function c_(){},
dE:function dE(){},
bk:function bk(){},
cu:function cu(){},
cv:function cv(){},
ck:function ck(){},
b3:function b3(){},
dL:function dL(){},
hk:function hk(){},
cz:function cz(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(a){this.a=a},
hA:function hA(){},
hB:function hB(a){this.a=a},
aN:function aN(){},
hC:function hC(){},
ag:function ag(){},
jg:function jg(a){this.a=a},
H:function H(){},
cE:function cE(){},
aO:function aO(){},
hP:function hP(){},
hX:function hX(){},
hY:function hY(a){this.a=a},
i_:function i_(){},
aP:function aP(){},
i8:function i8(){},
aQ:function aQ(){},
i9:function i9(){},
aR:function aR(){},
id:function id(){},
ie:function ie(a){this.a=a},
aC:function aC(){},
ba:function ba(){},
e6:function e6(){},
e7:function e7(){},
aS:function aS(){},
aD:function aD(){},
im:function im(){},
io:function io(){},
iu:function iu(){},
aU:function aU(){},
aV:function aV(){},
ix:function ix(){},
iy:function iy(){},
bK:function bK(){},
iT:function iT(){},
j8:function j8(){},
j9:function j9(){},
be:function be(){},
cX:function cX(){},
ji:function ji(){},
et:function et(){},
jw:function jw(){},
eK:function eK(){},
jI:function jI(){},
jM:function jM(){},
jk:function jk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kU:function kU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jl:function jl(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jm:function jm(a){this.a=a},
C:function C(){},
dz:function dz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
es:function es(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eL:function eL(){},
eM:function eM(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
d3:function d3(){},
d4:function d4(){},
eS:function eS(){},
eT:function eT(){},
eX:function eX(){},
f_:function f_(){},
f0:function f0(){},
d5:function d5(){},
d6:function d6(){},
f2:function f2(){},
f3:function f3(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){}},O={
fC:function(a){var u=new O.W([a])
u.bm(a)
return u},
W:function W(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cy:function cy(){this.b=this.a=null},
lu:function(){var u,t,s
u=new O.dR()
u.sfX(O.fC(V.af))
u.e.aR(u.ghJ(),u.ghL())
t=new O.b5(u,"emission")
t.c=C.d
t.f=new V.a_(0,0,0)
u.f=t
t=new O.b5(u,"ambient")
t.c=C.d
t.f=new V.a_(0,0,0)
u.r=t
t=new O.b5(u,"diffuse")
t.c=C.d
t.f=new V.a_(0,0,0)
u.x=t
t=new O.b5(u,"invDiffuse")
t.c=C.d
t.f=new V.a_(0,0,0)
u.y=t
t=new O.hv(u,"specular")
t.c=C.d
t.f=new V.a_(0,0,0)
t.ch=100
u.z=t
t=new O.hs(u,"bump")
t.c=C.d
u.Q=t
u.ch=null
t=new O.b5(u,"reflect")
t.c=C.d
t.f=new V.a_(0,0,0)
u.cx=t
t=new O.hu(u,"refract")
t.c=C.d
t.f=new V.a_(0,0,0)
t.ch=1
u.cy=t
t=new O.hr(u,"alpha")
t.c=C.d
t.f=1
u.db=t
t=new D.dM()
t.bm(D.a5)
t.sfF(H.d([],[D.dv]))
t.sfI(H.d([],[D.bF]))
t.sfJ(H.d([],[D.e3]))
t.sfK(H.d([],[D.eb]))
t.sfL(H.d([],[D.ec]))
t.sfM(H.d([],[D.ed]))
t.Q=null
t.ch=null
t.d1(t.ghH(),t.gim(),t.gir())
u.dx=t
s=t.Q
if(s==null){s=D.L()
t.Q=s
t=s}else t=s
t.h(0,u.giO())
t=u.dx
s=t.ch
if(s==null){s=D.L()
t.ch=s
t=s}else t=s
t.h(0,u.ga7())
u.dy=null
return u},
lJ:function(a,b,c,d,e){var u,t,s,r,q
u=new O.aT()
t=u.a
u.a=e
e.gn().h(0,u.ga7())
s=new D.x("texture",t,u.a,u,[T.bJ])
s.b=!0
u.v(s)
r=V.bC()
if(!J.P(u.b,r)){t=u.b
u.b=r
s=new D.x("colorMatrix",t,r,u,[V.af])
s.b=!0
u.v(s)}q=V.kL()
if(!J.P(u.c,q)){t=u.c
u.c=q
s=new D.x("source",t,q,u,[V.c4])
s.b=!0
u.v(s)}if(!J.P(u.d,b)){t=u.d
u.d=b
s=new D.x("destination",t,b,u,[V.c4])
s.b=!0
u.v(s)}if(u.e!==!1){u.e=!1
s=new D.x("flip",!0,!1,u,[P.a1])
s.b=!0
u.v(s)}u.f=null
return u},
fN:function fN(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dB:function dB(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dR:function dR(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hr:function hr(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cw:function cw(){},
hs:function hs(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b5:function b5(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hu:function hu(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hv:function hv(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bp:function bp(){},
e9:function e9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aT:function aT(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
kD:function(a,b,c,d,e,f){var u=new E.ai()
u.a=d
u.b=!0
u.sfE(0,O.fC(E.ai))
u.y.aR(u.gku(),u.gkx())
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
u.sc3(0,e)
u.saj(f)
u.sbe(c)
return u},
nu:function(a,b){var u=new E.hT(a,b)
u.fz(a,b)
return u},
nA:function(a,b,c,d,e){var u,t,s,r
u=J.V(a)
if(!!u.$ibT)return E.lK(a,!0,!0,!0,!1)
t=W.kC(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcw(a).h(0,t)
r=E.lK(t,!0,!0,!0,!1)
r.a=a
return r},
lK:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.ee()
t=H.f(C.n.cZ(a,"webgl2",P.n9(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic5")
if(t==null)H.q(P.u("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.nu(t,a)
s=new T.iq(t)
s.b=H.ae((t&&C.b).c0(t,3379))
s.c=H.ae(C.b.c0(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.em(a)
r=new X.hc()
r.c=new X.aB(!1,!1,!1)
r.siE(P.na(null,null,null,P.o))
s.b=r
r=new X.hD(s)
r.f=0
r.r=V.bo()
r.x=V.bo()
r.Q=1
r.ch=1
s.c=r
r=new X.hl(s)
r.r=0
r.x=V.bo()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.iw(s)
r.e=0
r.f=V.bo()
r.r=V.bo()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.shc(H.d([],[[P.cK,P.S]]))
r=s.z
q=document
p=W.ag
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ac(q,"contextmenu",H.m(s.ghT(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ac(a,"focus",H.m(s.gi2(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ac(a,"blur",H.m(s.ghN(),m),!1,n))
r=s.z
l=W.b3
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ac(q,"keyup",H.m(s.gi6(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ac(q,"keydown",H.m(s.gi4(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousedown",H.m(s.gia(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mouseup",H.m(s.gig(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousemove",H.m(s.gic(),o),!1,p))
l=s.z
k=W.be;(l&&C.a).h(l,W.ac(a,H.N(W.mZ(a)),H.m(s.gii(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.ac(q,"mousemove",H.m(s.ghV(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.ac(q,"mouseup",H.m(s.ghX(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.ac(q,"pointerlockchange",H.m(s.gik(),m),!1,n))
n=s.z
m=W.aV
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.ac(a,"touchstart",H.m(s.giB(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ac(a,"touchend",H.m(s.gix(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ac(a,"touchmove",H.m(s.giz(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.ap(Date.now(),!1)
u.cy=0
u.dJ()
return u},
fw:function fw(){},
ai:function ai(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hT:function hT(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hU:function hU(a){this.a=a},
hV:function hV(a){this.a=a},
hW:function hW(a){this.a=a},
ee:function ee(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
it:function it(a){this.a=a}},Z={
kT:function(a,b,c){var u
H.l(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
C.b.aB(a,b,u)
C.b.e_(a,b,new Int16Array(H.bL(c)),35044)
C.b.aB(a,b,null)
return new Z.ep(b,u)},
aF:function(a){return new Z.aE(a)},
ep:function ep(a,b){this.a=a
this.b=b},
dn:function dn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
c7:function c7(a){this.a=a},
bt:function bt(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a){this.a=a}},D={
L:function(){var u=new D.bx()
u.sad(null)
u.saU(null)
u.c=null
u.d=0
return u},
fz:function fz(){},
bx:function bx(){var _=this
_.d=_.c=_.b=_.a=null},
fX:function fX(a){this.a=a},
fY:function fY(a){this.a=a},
A:function A(a){this.a=a
this.b=null},
bz:function bz(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bA:function bA(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
x:function x(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
dv:function dv(){},
a5:function a5(){},
dM:function dM(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
bF:function bF(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e3:function e3(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){}},X={dp:function dp(a,b){this.a=a
this.b=b},dK:function dK(a,b){this.a=a
this.b=b},hc:function hc(){var _=this
_.d=_.c=_.b=_.a=null},dO:function dO(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hl:function hl(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aB:function aB(a,b,c){this.a=a
this.b=b
this.c=c},bD:function bD(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hD:function hD(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cA:function cA(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},hQ:function hQ(){},eg:function eg(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},iw:function iw(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},em:function em(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
le:function(a,b,c,d,e,f){var u=new X.ft()
u.a=512
u.b=512
u.c=512
u.d=512
u.e=!0
u.f=!0
u.r=d
u.x=e
u.ch=T.kN(0,null)
u.cx=new V.as(0,0,0,1)
u.cy=!0
u.db=2000
u.dx=!0
u.dy=V.kL()
u.sas(0,a)
u.sap(0,b)
return u},
kE:function(a,b,c,d,e,f,g){var u,t
u=new X.h5()
t=new V.as(0,0,0,1)
u.a=t
u.b=a
u.c=e
u.d=!0
u.e=g
u.f=!1
t=V.kL()
u.r=t
return u},
lB:function(a,b,c,d,e){var u,t
u=new X.dW()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
u.sbe(c)
t=u.c
if(!(Math.abs(t-b)<$.F().a)){u.c=b
t=new D.x("fov",t,b,u,[P.t])
t.b=!0
u.at(t)}t=u.d
if(!(Math.abs(t-d)<$.F().a)){u.d=d
t=new D.x("near",t,d,u,[P.t])
t.b=!0
u.at(t)}t=u.e
if(!(Math.abs(t-a)<$.F().a)){u.e=a
t=new D.x("far",t,a,u,[P.t])
t.b=!0
u.at(t)}return u},
ft:function ft(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bS:function bS(){},
h5:function h5(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h6:function h6(){this.b=this.a=null},
dW:function dW(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cL:function cL(){}},V={
kw:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.h.ax(a-b,u)
return(a<0?a+u:a)+b},
O:function(a,b,c){if(a==null)return C.c.ar("null",c)
return C.c.ar(C.h.f6(Math.abs(a-0)<$.F().a?0:a,b),c+b+1)},
cd:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.t],"$ab")
u=H.d([],[P.j])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.E)(a),++r){q=V.O(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.l(u,p,C.c.ar(u[p],s))}return u},
de:function(a,b){return C.h.kZ(Math.pow(b,C.Q.bc(Math.log(H.oh(a))/Math.log(b))))},
bC:function(){var u=$.hw
if(u==null){u=V.b6(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.hw=u}return u},
b6:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.af(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ly:function(a,b,c){return V.b6(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lw:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b6(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lx:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b6(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
bo:function(){var u=$.lD
if(u==null){u=new V.a9(0,0)
$.lD=u}return u},
lE:function(){var u=$.bH
if(u==null){u=new V.a6(0,0,0)
$.bH=u}return u},
kL:function(){var u=$.cH
if(u==null){u=V.cG(0,0,1,1)
$.cH=u}return u},
cG:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.c4(a,b,c,d)},
cW:function(){var u=$.lU
if(u==null){u=new V.R(0,0,0)
$.lU=u}return u},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fV:function fV(a){this.a=a},
cx:function cx(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
af:function af(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a9:function a9(a,b){this.a=a
this.b=b},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
b9:function b9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
ak:function(a){var u=new V.i0()
u.fA(a)
return u},
fl:function fl(){},
bm:function bm(){},
dP:function dP(){},
bn:function bn(){this.a=null},
i0:function i0(){this.a=null},
cJ:function cJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a,b){this.a=a
this.b=b
this.c=null},
iv:function iv(){this.c=this.b=this.a=null},
cN:function cN(a){this.b=a
this.a=this.c=null},
oD:function(a){P.nB(C.N,new V.ks(a))},
nw:function(a,b){var u=new V.i4()
u.fB(a,!0)
return u},
fA:function fA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fB:function fB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ks:function ks(a){this.a=a},
i4:function i4(){this.b=this.a=null},
i6:function i6(a){this.a=a},
i5:function i5(a){this.a=a}},U={
lk:function(){var u=new U.fD()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
ll:function(a){var u=new U.dr()
u.a=a
return u},
lp:function(a){var u=new U.ct()
u.bm(U.ah)
u.aR(u.gfN(),u.gip())
u.b6(0,a)
u.e=null
u.f=V.bC()
u.r=0
return u},
fD:function fD(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dr:function dr(){this.b=this.a=null},
ct:function ct(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ah:function ah(){},
e0:function e0(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
en:function en(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eo:function eo(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
lm:function(a,b,c){var u,t,s
u=new M.ds()
a=new X.h6()
t=u.a
u.a=a
a.gn().h(0,u.ga2())
s=new D.x("camera",t,u.a,u,[X.bS])
s.b=!0
u.Z(s)
u.sb0(0,b)
u.saj(c)
s=E.kD(null,!0,null,"",null,null)
s.sc3(0,F.mp(!1,2,null,2,0))
u.d=s
u.e=null
return u},
lo:function(a,b,c,d,e){var u=new M.dy()
u.sh0(0,O.fC(E.ai))
u.d.aR(u.ghP(),u.ghR())
u.e=null
u.f=null
u.r=null
u.x=null
d=X.kE(!0,!0,!1,c,2000,null,0)
u.scv(a)
u.sb0(0,d)
u.saj(e)
u.d.b6(0,b)
return u},
dq:function dq(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},
ds:function ds(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dy:function dy(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ax:function ax(){}},A={
nd:function(a,b){var u,t
u=a.aw
t=new A.dQ(b,u)
t.bn(b,u)
t.fw(a,b)
return t},
nz:function(a){var u,t
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+"\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n"
t+="\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n   vec4 clrAccum = backClr;\n"
for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return clrAccum;\n")+("   clrAccum = layout(clrAccum, txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+"   return clrAccum;\n"
t+"   return clrAccum;\n}\n"
t+"   return clrAccum;\n}\n\n"
t+"   return clrAccum;\n}\n\nvoid main()\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n"
t+="   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n}\n"
return t.charCodeAt(0)==0?t:t},
ny:function(a,b){var u,t
u="TextureLayout_"+a
t=new A.ea(b,u)
t.bn(b,u)
t.fC(a,b)
return t},
kP:function(a,b,c,d,e){var u=new A.iE(a,b,c,e)
u.f=d
u.sjm(P.nb(d,0,!1,P.o))
return u},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
fo:function fo(a){this.a=a},
du:function du(a,b){var _=this
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dC:function dC(a,b){var _=this
_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dQ:function dQ(a,b){var _=this
_.bB=_.ee=_.bA=_.aw=_.aD=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ev=_.cB=_.eu=_.bO=_.es=_.er=_.bN=_.bM=_.eq=_.ep=_.bL=_.bK=_.bJ=_.eo=_.en=_.bI=_.em=_.el=_.bH=_.ek=_.ej=_.bG=_.bF=_.ei=_.eh=_.bE=_.bD=_.eg=_.ef=_.bC=null
_.cG=_.ez=_.cF=_.ey=_.cE=_.ex=_.cD=_.ew=_.cC=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ht:function ht(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aD=b3
_.aw=b4
_.bA=b5},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cP:function cP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cS:function cS(a,b,c,d,e,f,g,h,i,j){var _=this
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
cQ:function cQ(a,b,c,d,e,f,g,h,i,j){var _=this
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
cT:function cT(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cI:function cI(){},
bW:function bW(a,b){this.a=a
this.b=b},
ea:function ea(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eh:function eh(){},
iI:function iI(a){this.a=a},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iF:function iF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iG:function iG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iE:function iE(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ei:function ei(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iJ:function iJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c6:function c6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
mp:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l
u=F.kM()
t=u.a
s=-d*0.5
r=-b*0.5
q=new V.R(-1,-1,1)
q=q.A(0,Math.sqrt(q.I(q)))
p=t.bu(new V.b9(1,2,4,6),new V.as(1,0,0,1),new V.a6(s,r,e),new V.a9(0,1),q,c)
t=u.a
q=d*0.5
o=new V.R(1,-1,1)
o=o.A(0,Math.sqrt(o.I(o)))
n=t.bu(new V.b9(0,3,4,6),new V.as(0,0,1,1),new V.a6(q,r,e),new V.a9(1,1),o,c)
t=u.a
r=b*0.5
o=new V.R(1,1,1)
o=o.A(0,Math.sqrt(o.I(o)))
m=t.bu(new V.b9(0,2,5,6),new V.as(0,1,0,1),new V.a6(q,r,e),new V.a9(1,0),o,c)
t=u.a
q=V.bo()
o=new V.R(-1,1,1)
o=o.A(0,Math.sqrt(o.I(o)))
l=t.bu(new V.b9(0,2,4,7),new V.as(1,1,0,1),new V.a6(s,r,e),q,o,c)
u.d.jM(H.d([p,n,m,l],[F.al]))
u.au()
return u},
k_:function(a){var u,t
u=a.a>0?1:0
if(a.b>0)u+=2
t=a.c
if(typeof t!=="number")return t.d0()
return(t>0?u+4:u)*2},
d9:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.m(c,{func:1,ret:-1,args:[F.al,P.t,P.t]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.R(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.R(o+a3,n+a1,m+a2)
u.b=l
k=new V.R(o-a3,n-a1,m-a2)
u.c=k
j=new V.R(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.k_(t)
f=F.k_(u.b)
e=F.mr(d,a0,new F.jZ(u,F.k_(u.c),F.k_(u.d),f,g,c),b)
if(e!=null)a.cN(e)},
oE:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.kt()
u=new F.ku(u,c)
t=F.kM()
F.d9(t,null,u,d,a,1,0,0,1)
F.d9(t,null,u,d,a,0,1,0,3)
F.d9(t,null,u,d,a,0,0,1,2)
F.d9(t,null,u,d,a,-1,0,0,0)
F.d9(t,null,u,d,a,0,-1,0,0)
F.d9(t,null,u,d,a,0,0,-1,3)
t.au()
t.ks(new F.j2(),new F.hJ())
return t},
oq:function(a,b,c){var u={}
u.a=b
u.a=new F.kb()
return F.mr(c,a,new F.kc(u),null)},
mr:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,{func:1,ret:-1,args:[F.al,P.t,P.t]})
if(a<1)return
if(b<1)return
u=F.kM()
t=H.d([],[F.al])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iX(null,null,new V.as(p,0,0,1),null,null,new V.a9(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cA(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iX(null,null,new V.as(j,i,h,1),null,null,new V.a9(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cA(d))}}u.d.jN(a+1,b+1,t)
return u},
cq:function(a,b,c){var u,t
u=new F.a8()
t=a.a
if(t==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
u.co(a)
u.cp(b)
u.iX(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a5()
return u},
n6:function(a,b){var u,t
u=new F.bl()
t=a.a
if(t==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
u.co(a)
u.cp(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a5()
return u},
kM:function(){var u,t
u=new F.e2()
t=new F.iY(u)
t.b=!1
t.sjn(H.d([],[F.al]))
u.a=t
t=new F.i3(u)
t.scf(H.d([],[F.bG]))
u.b=t
t=new F.i2(u)
t.shr(H.d([],[F.bl]))
u.c=t
t=new F.i1(u)
t.shd(H.d([],[F.a8]))
u.d=t
u.e=null
return u},
iX:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.al()
t=new F.j5(u)
t.scf(H.d([],[F.bG]))
u.b=t
t=new F.j1(u)
s=[F.bl]
t.shs(H.d([],s))
t.sht(H.d([],s))
u.c=t
t=new F.iZ(u)
s=[F.a8]
t.she(H.d([],s))
t.shf(H.d([],s))
t.shg(H.d([],s))
u.d=t
h=$.l7()
u.e=0
t=$.am()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aX().a)!==0?e:null
u.x=(s&$.bi().a)!==0?b:null
u.y=(s&$.aJ().a)!==0?f:null
u.z=(s&$.bj().a)!==0?g:null
u.Q=(s&$.l8().a)!==0?c:null
u.ch=(s&$.bO().a)!==0?i:0
u.cx=(s&$.bh().a)!==0?a:null
return u},
jZ:function jZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kt:function kt(){},
ku:function ku(a,b){this.a=a
this.b=b},
kb:function kb(){},
kc:function kc(a){this.a=a},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fZ:function fZ(){},
i7:function i7(){},
bl:function bl(){this.b=this.a=null},
he:function he(){},
iD:function iD(){},
bG:function bG(){this.a=null},
e2:function e2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i1:function i1(a){this.a=a
this.b=null},
i2:function i2(a){this.a=a
this.b=null},
i3:function i3(a){this.a=a
this.b=null},
al:function al(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j7:function j7(a){this.a=a},
j6:function j6(a){this.a=a},
iY:function iY(a){this.a=a
this.c=this.b=null},
iZ:function iZ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
j_:function j_(a,b){this.a=a
this.b=b},
j0:function j0(a,b){this.a=a
this.b=b},
j1:function j1(a){this.a=a
this.c=this.b=null},
j3:function j3(){},
j2:function j2(){},
j4:function j4(){},
hJ:function hJ(){},
j5:function j5(a){this.a=a
this.b=null}},T={
kN:function(a,b){var u=new T.ip()
u.a=a
u.b=b
u.c=!1
u.d=!1
u.e=0
u.f=0
u.r=0
u.x=0
return u},
bq:function bq(){},
bJ:function bJ(){},
ip:function ip(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iq:function iq(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
ir:function ir(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c}},K={
ml:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
u={}
t=V.nw("Test 040",!0)
s=W.kC(null,null)
s.className="pageLargeCanvas"
s.id="testCanvas"
C.l.a_(t.a,s)
r=[P.j]
t.dR(H.d(["A combination of bump mapping with height map and specular map."],r))
t.jK(H.d(["controls"],r))
t.dR(H.d(["\xab[Back to Tests|../]"],r))
r=document
q=C.y.d_(r,"testCanvas")
if(q==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
p=E.nA(q,!0,!0,!0,!1)
o=p.f.bR("../resources/gravel/colorLarge.png")
n=p.f.bR("../resources/gravel/bumpLarge.png")
m=p.f.bR("../resources/gravel/specularSmall.png")
l=p.f.bR("../resources/gravel/heightSmall.png")
t=U.ll(V.ly(0,0,2))
k=new U.e0()
k.a=0
k.b=0
k.c=0
k.d=0
k.e=0
k.f=0
k.r=0
k.sfe(0)
k.seY(0,0)
k.sf1(0)
j=k.d
if(!(Math.abs(j-0.6)<$.F().a)){k.d=0.6
j=new D.x("deltaYaw",j,0.6,k,[P.t])
j.b=!0
k.P(j)}j=k.e
if(!(Math.abs(j-0.1)<$.F().a)){k.e=0.1
j=new D.x("deltaPitch",j,0.1,k,[P.t])
j.b=!0
k.P(j)}j=k.f
if(!(Math.abs(j-0)<$.F().a)){k.f=0
j=new D.x("deltaRoll",j,0,k,[P.t])
j.b=!0
k.P(j)}j=U.ah
i=[j]
h=U.lp(H.d([t,k],i))
g=E.kD(null,!0,null,"",F.oE(8,null,0.03,8),null)
g.sbe(h)
k=O.lu()
t=k.f
t.saC(0,new V.a_(1,1,1))
g.saj(k)
t=new V.a_(1,1,1)
f=new D.bF()
f.c=new V.a_(1,1,1)
f.d=1
f.e=0
f.f=0
f.a=V.lE()
e=f.b
f.b=h
h.gn().h(0,f.gfG())
k=new D.x("mover",e,f.b,f,[j])
k.b=!0
f.am(k)
f.c=t
if(!t.u(0,t)){e=f.c
f.c=t
t=new D.x("color",e,t,f,[V.a_])
t.b=!0
f.am(t)}t=f.d
if(!(Math.abs(t-0.5)<$.F().a)){f.d=0.5
t=new D.x("attenuation0",t,0.5,f,[P.t])
t.b=!0
f.am(t)}t=f.e
if(!(Math.abs(t-0.1)<$.F().a)){f.e=0.1
t=new D.x("attenuation1",t,0.1,f,[P.t])
t.b=!0
f.am(t)}t=f.f
if(!(Math.abs(t-0)<$.F().a)){f.f=0
t=new D.x("attenuation2",t,0,f,[P.t])
t.b=!0
f.am(t)}d=F.mp(!1,2,null,2,0)
c=E.kD(null,!0,null,"",d,null)
u.a=null
l.gn().h(0,new K.kj(u,p,l))
b=X.lB(2000,1.0471975511965976,null,0.1,null)
t=p.r
k=new U.en()
j=U.lk()
j.sfd(0,!0)
j.seM(6.283185307179586)
j.seO(0)
j.sa9(0,0)
j.seN(100)
j.sa4(0)
j.se4(0.5)
k.b=j
a=k.gbq()
j.gn().h(0,a)
j=U.lk()
j.sfd(0,!0)
j.seM(6.283185307179586)
j.seO(0)
j.sa9(0,0)
j.seN(100)
j.sa4(0)
j.se4(0.5)
k.c=j
j.gn().h(0,a)
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
a0=new X.aB(!1,!1,!1)
e=k.d
k.d=a0
j=[X.aB]
a=new D.x("modifiers",e,a0,k,j)
a.b=!0
k.P(a)
a=k.f
if(a!==!1){k.f=!1
a=new D.x("invertX",a,!1,k,[P.a1])
a.b=!0
k.P(a)}a=k.r
if(a!==!1){k.r=!1
a=new D.x("invertY",a,!1,k,[P.a1])
a.b=!0
k.P(a)}k.cq(t)
t=p.r
a=new U.eo()
a.c=0.01
a.d=0
a.e=0
a0=new X.aB(!1,!1,!1)
a.b=a0
j=new D.x("modifiers",null,a0,a,j)
j.b=!0
a.P(j)
a.cq(t)
b.sbe(U.lp(H.d([k,a,U.ll(V.ly(0,0,5))],i)))
a1=O.lu()
a1.dx.h(0,f)
t=a1.r
t.saC(0,new V.a_(0.3,0.3,0.3))
a1.x.saC(0,new V.a_(1,1,1))
t=a1.z
if(t.c===C.d){t.c=C.j
t.c4()
t.cl(100)
k=t.a
k.a=null
k.v(null)}t.cl(40)
a2=X.le(800,600,!0,1,1,!0)
t=[E.ai]
a3=M.lo(null,H.d([c,g],t),null,null,null)
a3.saj(a1)
a3.scv(b)
a3.sb0(0,a2)
a4=X.le(400,300,!0,0.5,0.5,!0)
a5=M.lo(null,H.d([c,g],t),null,null,null)
a5.scv(b)
a5.sb0(0,a4)
t=new O.fN()
t.d=1
t.e=10
a6=new V.a_(1,1,1)
t.b=a6
k=[V.a_]
j=new D.x("objectColor",null,a6,t,k)
j.b=!0
t.v(j)
a6=new V.a_(0,0,0)
if(!J.P(t.c,a6)){e=t.c
t.c=a6
k=new D.x("fogColor",e,a6,t,k)
k.b=!0
t.v(k)}k=t.d
if(!(Math.abs(k-1)<$.F().a)){t.d=1
k=new D.x("fogStart",k,1,t,[P.t])
k.b=!0
t.v(k)}k=t.e
if(!(Math.abs(k-4)<$.F().a)){t.e=4
k=new D.x("fogStop",k,4,t,[P.t])
k.b=!0
t.v(k)}a5.saj(t)
t=a2.ch
k=a4.ch
a7=new O.dB()
a7.e=0
a7.f=4
a7.r=0.001
j=$.lv
if(j==null){j=new V.cx(1,0,0,0,1,0,0,0,1)
$.lv=j
a8=j}else a8=j
a7.b=a8
j=new D.x("textureMatrix",null,null,a7,[P.S])
j.b=!0
a7.v(j)
j=a7.c
if(j!==t){if(j!=null)j.gn().G(0,a7.ga7())
e=a7.c
a7.c=t
t.gn().h(0,a7.ga7())
t=new D.x("colorTexture",e,a7.c,a7,[T.bJ])
t.b=!0
a7.v(t)}a7.se7(k)
t=a7.e
if(!(Math.abs(t-0)<$.F().a)){a7.e=0
t=new D.x("highOffset",t,0,a7,[P.t])
t.b=!0
a7.v(t)}t=a7.f
if(!(Math.abs(t-3)<$.F().a)){a7.f=3
t=new D.x("lowOffset",t,3,a7,[P.t])
t.b=!0
a7.v(t)}t=a7.r
if(!(Math.abs(t-0.001)<$.F().a)){a7.r=0.001
t=new D.x("depthLimit",t,0.001,a7,[P.t])
t.b=!0
a7.v(t)}a9=M.lm(null,null,null)
a9.saj(a7)
b0=new O.e9()
a6=new V.as(0,0,0,0)
b0.a=a6
t=new D.x("backColor",null,a6,b0,[V.as])
t.b=!0
b0.v(t)
b0.b=null
b0.shb(O.fC(O.aT))
b0.c.aR(b0.ghZ(),b0.gi0())
b0.d=0
b0.e=null
t=b0.c
k=a4.ch
t.h(0,O.lJ(null,V.cG(0,0.8,0.2,0.2),!1,null,k))
k=b0.c
t=a2.ch
k.h(0,O.lJ(null,V.cG(0,0.6,0.2,0.2),!1,null,t))
b1=M.lm(null,null,null)
b1.sb0(0,X.kE(!1,!0,!1,null,2000,null,0))
b1.saj(b0)
t=M.ax
k=H.d([a3,a5,a9,b1],[t])
j=new M.dq()
j.bm(t)
j.e=!1
j.f=null
j.aR(j.git(),j.giv())
j.b6(0,k)
t=p.d
if(t!==j){if(t!=null)t.gn().G(0,p.gd6())
p.d=j
j.gn().h(0,p.gd6())
p.d7()}t=new V.fA("controls",!0)
r=C.y.d_(r,"controls")
t.c=r
if(r==null)H.q("Failed to find controls for CheckGroup")
t.sh_(H.d([],[W.ck]))
t.aX(0,"Color",new K.kk(a1,o),!0)
t.aX(0,"Specular",new K.kl(a1,m),!1)
t.aX(0,"Bump",new K.km(a1,n),!1)
t.aX(0,"Height",new K.kn(u,c,d),!1)
t.aX(0,"Blur",new K.ko(a7,a4),!1)
t.aX(0,"Passes",new K.kp(b1,b0),!1)
V.oD(p)},
kj:function kj(a,b,c){this.a=a
this.b=b
this.c=c},
kk:function kk(a,b){this.a=a
this.b=b},
kl:function kl(a,b){this.a=a
this.b=b},
km:function km(a,b){this.a=a
this.b=b},
kn:function kn(a,b,c){this.a=a
this.b=b
this.c=c},
ko:function ko(a,b){this.a=a
this.b=b},
kp:function kp(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kI.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gL:function(a){return H.cF(a)},
j:function(a){return"Instance of '"+H.c2(a)+"'"}}
J.h9.prototype={
j:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$ia1:1}
J.dH.prototype={
u:function(a,b){return null==b},
j:function(a){return"null"},
gL:function(a){return 0},
$iI:1}
J.dJ.prototype={
gL:function(a){return 0},
j:function(a){return String(a)}}
J.hO.prototype={}
J.cU.prototype={}
J.bB.prototype={
j:function(a){var u=a[$.mu()]
if(u==null)return this.ft(a)
return"JavaScript function for "+H.n(J.aw(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ikF:1}
J.b2.prototype={
h:function(a,b){H.B(b,H.v(a,0))
if(!!a.fixed$length)H.q(P.G("add"))
a.push(b)},
kN:function(a,b){var u
if(!!a.fixed$length)H.q(P.G("removeAt"))
u=a.length
if(b>=u)throw H.c(P.dZ(b,null,null))
return a.splice(b,1)[0]},
G:function(a,b){var u
if(!!a.fixed$length)H.q(P.G("remove"))
for(u=0;u<a.length;++u)if(J.P(a[u],b)){a.splice(u,1)
return!0}return!1},
b6:function(a,b){var u,t
H.l(b,"$ii",[H.v(a,0)],"$ai")
if(!!a.fixed$length)H.q(P.G("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.E)(b),++t)a.push(b[t])},
R:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bX(a))}},
F:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.l(u,t,H.n(a[t]))
return u.join(b)},
kn:function(a){return this.F(a,"")},
kf:function(a,b,c,d){var u,t,s
H.B(b,d)
H.m(c,{func:1,ret:d,args:[d,H.v(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bX(a))}return t},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
fq:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ad(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ad(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.v(a,0)])
return H.d(a.slice(b,c),[H.v(a,0)])},
gke:function(a){if(a.length>0)return a[0]
throw H.c(H.lq())},
gaP:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.lq())},
av:function(a,b){var u
for(u=0;u<a.length;++u)if(J.P(a[u],b))return!0
return!1},
j:function(a){return P.kG(a,"[","]")},
gW:function(a){return new J.an(a,a.length,0,[H.v(a,0)])},
gL:function(a){return H.cF(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.q(P.G("set length"))
if(b<0)throw H.c(P.ad(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.c(H.cc(a,b))
return a[b]},
l:function(a,b,c){H.B(c,H.v(a,0))
if(!!a.immutable$list)H.q(P.G("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cc(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.kH.prototype={}
J.an.prototype={
gO:function(a){return this.d},
B:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.E(u))
s=this.c
if(s>=t){this.sdn(null)
return!1}this.sdn(u[s]);++this.c
return!0},
sdn:function(a){this.d=H.B(a,H.v(this,0))},
$ib1:1}
J.dI.prototype={
kZ:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.G(""+a+".toInt()"))},
bc:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.G(""+a+".floor()"))},
a3:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.G(""+a+".round()"))},
f6:function(a,b){var u,t
if(b>20)throw H.c(P.ad(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bj:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ad(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a0(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.q(P.G("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.m("0",r)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
m:function(a,b){if(typeof b!=="number")throw H.c(H.au(b))
return a*b},
ax:function(a,b){var u
if(typeof b!=="number")throw H.c(H.au(b))
u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fv:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dN(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.dN(a,b)},
dN:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.G("Result of truncating division is "+H.n(u)+": "+H.n(a)+" ~/ "+b))},
aW:function(a,b){var u
if(a>0)u=this.dM(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
j1:function(a,b){if(b<0)throw H.c(H.au(b))
return this.dM(a,b)},
dM:function(a,b){return b>31?0:a>>>b},
$it:1,
$ia2:1}
J.dG.prototype={$io:1}
J.dF.prototype={}
J.c0.prototype={
a0:function(a,b){if(b<0)throw H.c(H.cc(a,b))
if(b>=a.length)H.q(H.cc(a,b))
return a.charCodeAt(b)},
K:function(a,b){if(b>=a.length)throw H.c(H.cc(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.c(P.kA(b,null,null))
return a+b},
b_:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.au(b))
c=P.bI(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
al:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.au(c))
if(typeof c!=="number")return c.Y()
if(c<0||c>a.length)throw H.c(P.ad(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ak:function(a,b){return this.al(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.au(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Y()
if(b<0)throw H.c(P.dZ(b,null,null))
if(b>c)throw H.c(P.dZ(b,null,null))
if(c>a.length)throw H.c(P.dZ(c,null,null))
return a.substring(b,c)},
aJ:function(a,b){return this.q(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kC:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.m(c,u)+a},
ar:function(a,b){return this.kC(a,b," ")},
kD:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.m(c,u)},
eJ:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ad(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eI:function(a,b){return this.eJ(a,b,0)},
j:function(a){return a},
gL:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ilA:1,
$ij:1}
H.a4.prototype={
gk:function(a){return this.a.length},
i:function(a,b){return C.c.a0(this.a,b)},
$acV:function(){return[P.o]},
$az:function(){return[P.o]},
$ai:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.fT.prototype={}
H.dN.prototype={
gO:function(a){return this.d},
B:function(){var u,t,s,r
u=this.a
t=J.dd(u)
s=t.gk(u)
if(this.b!==s)throw H.c(P.bX(u))
r=this.c
if(r>=s){this.sb3(null)
return!1}this.sb3(t.N(u,r));++this.c
return!0},
sb3:function(a){this.d=H.B(a,H.v(this,0))},
$ib1:1}
H.hp.prototype={
gW:function(a){return new H.hq(J.bP(this.a),this.b,this.$ti)},
gk:function(a){return J.aK(this.a)},
N:function(a,b){return this.b.$1(J.kz(this.a,b))},
$ai:function(a,b){return[b]}}
H.hq.prototype={
B:function(){var u=this.b
if(u.B()){this.sb3(this.c.$1(u.gO(u)))
return!0}this.sb3(null)
return!1},
gO:function(a){return this.a},
sb3:function(a){this.a=H.B(a,H.v(this,1))},
$ab1:function(a,b){return[b]}}
H.ja.prototype={
gW:function(a){return new H.jb(J.bP(this.a),this.b,this.$ti)}}
H.jb.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(t.$1(u.gO(u)))return!0
return!1},
gO:function(a){var u=this.a
return u.gO(u)}}
H.bZ.prototype={}
H.cV.prototype={
l:function(a,b,c){H.B(c,H.az(this,"cV",0))
throw H.c(P.G("Cannot modify an unmodifiable list"))}}
H.ek.prototype={}
H.fF.prototype={
j:function(a){return P.kK(this)},
l:function(a,b,c){H.B(b,H.v(this,0))
H.B(c,H.v(this,1))
return H.mU()},
$iD:1}
H.fG.prototype={
gk:function(a){return this.a},
bx:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bx(0,b))return
return this.dq(b)},
dq:function(a){return this.b[H.N(a)]},
R:function(a,b){var u,t,s,r,q
u=H.v(this,1)
H.m(b,{func:1,ret:-1,args:[H.v(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.B(this.dq(q),u))}}}
H.hS.prototype={}
H.iA.prototype={
aq:function(a){var u,t,s
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
H.hK.prototype={
j:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.n(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hb.prototype={
j:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.n(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.n(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.n(this.a)+")"}}
H.iM.prototype={
j:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kv.prototype={
$1:function(a){if(!!J.V(a).$ibw)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.eW.prototype={
j:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iat:1}
H.cl.prototype={
j:function(a){return"Closure '"+H.c2(this).trim()+"'"},
$ikF:1,
gl8:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.il.prototype={}
H.ic.prototype={
j:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ch(u)+"'"}}
H.ci.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ci))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var u,t
u=this.c
if(u==null)t=H.cF(this.a)
else t=typeof u!=="object"?J.di(u):H.cF(u)
return(t^H.cF(this.b))>>>0},
j:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.n(this.d)+"' of "+("Instance of '"+H.c2(u)+"'")}}
H.iC.prototype={
j:function(a){return this.a}}
H.fy.prototype={
j:function(a){return this.a}}
H.hZ.prototype={
j:function(a){return"RuntimeError: "+H.n(this.a)}}
H.aM.prototype={
gk:function(a){return this.a},
gaE:function(a){return new H.hg(this,[H.v(this,0)])},
bx:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dk(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dk(t,b)}else return this.kk(b)},
kk:function(a){var u=this.d
if(u==null)return!1
return this.cJ(this.ca(u,this.cI(a)),a)>=0},
i:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bo(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bo(r,b)
s=t==null?null:t.b
return s}else return this.kl(b)},
kl:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.ca(u,this.cI(a))
s=this.cJ(t,a)
if(s<0)return
return t[s].b},
l:function(a,b,c){var u,t
H.B(b,H.v(this,0))
H.B(c,H.v(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cd()
this.b=u}this.dc(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cd()
this.c=t}this.dc(t,b,c)}else this.km(b,c)},
km:function(a,b){var u,t,s,r
H.B(a,H.v(this,0))
H.B(b,H.v(this,1))
u=this.d
if(u==null){u=this.cd()
this.d=u}t=this.cI(a)
s=this.ca(u,t)
if(s==null)this.cm(u,t,[this.ce(a,b)])
else{r=this.cJ(s,a)
if(r>=0)s[r].b=b
else s.push(this.ce(a,b))}},
R:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.bX(this))
u=u.c}},
dc:function(a,b,c){var u
H.B(b,H.v(this,0))
H.B(c,H.v(this,1))
u=this.bo(a,b)
if(u==null)this.cm(a,b,this.ce(b,c))
else u.b=c},
ce:function(a,b){var u,t
u=new H.hf(H.B(a,H.v(this,0)),H.B(b,H.v(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
cI:function(a){return J.di(a)&0x3ffffff},
cJ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1},
j:function(a){return P.kK(this)},
bo:function(a,b){return a[b]},
ca:function(a,b){return a[b]},
cm:function(a,b,c){a[b]=c},
h6:function(a,b){delete a[b]},
dk:function(a,b){return this.bo(a,b)!=null},
cd:function(){var u=Object.create(null)
this.cm(u,"<non-identifier-key>",u)
this.h6(u,"<non-identifier-key>")
return u}}
H.hf.prototype={}
H.hg.prototype={
gk:function(a){return this.a.a},
gW:function(a){var u,t
u=this.a
t=new H.hh(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hh.prototype={
gO:function(a){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bX(u))
else{u=this.c
if(u==null){this.sda(null)
return!1}else{this.sda(u.a)
this.c=this.c.c
return!0}}},
sda:function(a){this.d=H.B(a,H.v(this,0))},
$ib1:1}
H.ke.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.kf.prototype={
$2:function(a,b){return this.a(a,b)},
$S:32}
H.kg.prototype={
$1:function(a){return this.a(H.N(a))},
$S:36}
H.ha.prototype={
j:function(a){return"RegExp/"+this.a+"/"},
$ilA:1,
$ins:1}
H.cB.prototype={$icB:1}
H.bE.prototype={$ibE:1,$inC:1}
H.dS.prototype={
gk:function(a){return a.length},
$iK:1,
$aK:function(){}}
H.cC.prototype={
i:function(a,b){H.bg(b,a,a.length)
return a[b]},
l:function(a,b,c){H.om(c)
H.bg(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.t]},
$az:function(){return[P.t]},
$ii:1,
$ai:function(){return[P.t]},
$ib:1,
$ab:function(){return[P.t]}}
H.dT.prototype={
l:function(a,b,c){H.ae(c)
H.bg(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.o]},
$az:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.hE.prototype={
i:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hF.prototype={
i:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hG.prototype={
i:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hH.prototype={
i:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hI.prototype={
i:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.dU.prototype={
gk:function(a){return a.length},
i:function(a,b){H.bg(b,a,a.length)
return a[b]},
$ip_:1}
H.cD.prototype={
gk:function(a){return a.length},
i:function(a,b){H.bg(b,a,a.length)
return a[b]},
$icD:1,
$iQ:1}
H.d_.prototype={}
H.d0.prototype={}
H.d1.prototype={}
H.d2.prototype={}
P.jd.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:19}
P.jc.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:39}
P.je.prototype={
$0:function(){this.a.$0()},
$S:1}
P.jf.prototype={
$0:function(){this.a.$0()},
$S:1}
P.f1.prototype={
fP:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.cb(new P.jO(this,b),0),a)
else throw H.c(P.G("`setTimeout()` not found."))},
fQ:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.cb(new P.jN(this,a,Date.now(),b),0),a)
else throw H.c(P.G("Periodic timer."))},
$ibb:1}
P.jO.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.jN.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.e.fv(r,s)}u.c=t
this.d.$1(u)},
$S:1}
P.bf.prototype={
kr:function(a){if(this.c!==6)return!0
return this.b.b.cW(H.m(this.d,{func:1,ret:P.a1,args:[P.S]}),a.a,P.a1,P.S)},
kj:function(a){var u,t,s,r
u=this.e
t=P.S
s={futureOr:1,type:H.v(this,1)}
r=this.b.b
if(H.fi(u,{func:1,args:[P.S,P.at]}))return H.l2(r.kU(u,a.a,a.b,null,t,P.at),s)
else return H.l2(r.cW(H.m(u,{func:1,args:[P.S]}),a.a,null,t),s)}}
P.aG.prototype={
f5:function(a,b,c){var u,t,s,r
u=H.v(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.Y
if(t!==C.k){t.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.o9(b,t)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aG(0,$.Y,[c])
r=b==null?1:3
this.dd(new P.bf(s,r,a,b,[u,c]))
return s},
kY:function(a,b){return this.f5(a,null,b)},
dd:function(a){var u,t
u=this.a
if(u<=1){a.a=H.f(this.c,"$ibf")
this.c=a}else{if(u===2){t=H.f(this.c,"$iaG")
u=t.a
if(u<4){t.dd(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.k6(null,null,u,H.m(new P.jn(this,a),{func:1,ret:-1}))}},
dH:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.f(this.c,"$ibf")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.f(this.c,"$iaG")
t=p.a
if(t<4){p.dH(a)
return}this.a=t
this.c=p.c}u.a=this.br(a)
t=this.b
t.toString
P.k6(null,null,t,H.m(new P.jr(u,this),{func:1,ret:-1}))}},
ci:function(){var u=H.f(this.c,"$ibf")
this.c=null
return this.br(u)},
br:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dg:function(a){var u,t,s
u=H.v(this,0)
H.l2(a,{futureOr:1,type:u})
t=this.$ti
if(H.dc(a,"$ics",t,"$acs"))if(H.dc(a,"$iaG",t,null))P.lV(a,this)
else P.nO(a,this)
else{s=this.ci()
H.B(a,u)
this.a=4
this.c=a
P.cY(this,s)}},
dh:function(a,b){var u
H.f(b,"$iat")
u=this.ci()
this.a=8
this.c=new P.ao(a,b)
P.cY(this,u)},
$ics:1}
P.jn.prototype={
$0:function(){P.cY(this.a,this.b)},
$S:1}
P.jr.prototype={
$0:function(){P.cY(this.b,this.a.a)},
$S:1}
P.jo.prototype={
$1:function(a){var u=this.a
u.a=0
u.dg(a)},
$S:19}
P.jp.prototype={
$2:function(a,b){H.f(b,"$iat")
this.a.dh(a,b)},
$1:function(a){return this.$2(a,null)},
$S:37}
P.jq.prototype={
$0:function(){this.a.dh(this.b,this.c)},
$S:1}
P.ju.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.f2(H.m(r.d,{func:1}),null)}catch(q){t=H.aI(q)
s=H.cf(q)
if(this.d){r=H.f(this.a.a.c,"$iao").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.f(this.a.a.c,"$iao")
else p.b=new P.ao(t,s)
p.a=!0
return}if(!!J.V(u).$ics){if(u instanceof P.aG&&u.a>=4){if(u.a===8){r=this.b
r.b=H.f(u.c,"$iao")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.kY(new P.jv(o),null)
r.a=!1}},
$S:3}
P.jv.prototype={
$1:function(a){return this.a},
$S:50}
P.jt.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.v(s,0)
q=H.B(this.c,r)
p=H.v(s,1)
this.a.b=s.b.b.cW(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aI(o)
t=H.cf(o)
s=this.a
s.b=new P.ao(u,t)
s.a=!0}},
$S:3}
P.js.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.f(this.a.a.c,"$iao")
r=this.c
if(r.kr(u)&&r.e!=null){q=this.b
q.b=r.kj(u)
q.a=!1}}catch(p){t=H.aI(p)
s=H.cf(p)
r=H.f(this.a.a.c,"$iao")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ao(t,s)
n.a=!0}},
$S:3}
P.eq.prototype={}
P.ig.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.aG(0,$.Y,[P.o])
u.a=0
s=H.v(this,0)
r=H.m(new P.ii(u,this),{func:1,ret:-1,args:[s]})
H.m(new P.ij(u,t),{func:1,ret:-1})
W.ac(this.a,this.b,r,!1,s)
return t}}
P.ii.prototype={
$1:function(a){H.B(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.v(this.b,0)]}}}
P.ij.prototype={
$0:function(){this.b.dg(this.a.a)},
$S:1}
P.cK.prototype={}
P.ih.prototype={}
P.bb.prototype={}
P.ao.prototype={
j:function(a){return H.n(this.a)},
$ibw:1}
P.jY.prototype={$ipd:1}
P.k5.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dV()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.j(0)
throw s},
$S:1}
P.jC.prototype={
kV:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
try{if(C.k===$.Y){a.$0()
return}P.m6(null,null,this,a,-1)}catch(s){u=H.aI(s)
t=H.cf(s)
P.k4(null,null,this,u,H.f(t,"$iat"))}},
kW:function(a,b,c){var u,t,s
H.m(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.k===$.Y){a.$1(b)
return}P.m7(null,null,this,a,b,-1,c)}catch(s){u=H.aI(s)
t=H.cf(s)
P.k4(null,null,this,u,H.f(t,"$iat"))}},
jR:function(a,b){return new P.jE(this,H.m(a,{func:1,ret:b}),b)},
cr:function(a){return new P.jD(this,H.m(a,{func:1,ret:-1}))},
dY:function(a,b){return new P.jF(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
f2:function(a,b){H.m(a,{func:1,ret:b})
if($.Y===C.k)return a.$0()
return P.m6(null,null,this,a,b)},
cW:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.Y===C.k)return a.$1(b)
return P.m7(null,null,this,a,b,c,d)},
kU:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.Y===C.k)return a.$2(b,c)
return P.oa(null,null,this,a,b,c,d,e,f)}}
P.jE.prototype={
$0:function(){return this.a.f2(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jD.prototype={
$0:function(){return this.a.kV(this.b)},
$S:3}
P.jF.prototype={
$1:function(a){var u=this.c
return this.a.kW(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jz.prototype={
gW:function(a){return P.lX(this,this.r,H.v(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u
H.B(b,H.v(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.lY()
this.c=u}return this.h2(u,b)}else return this.fS(0,b)},
fS:function(a,b){var u,t,s
H.B(b,H.v(this,0))
u=this.d
if(u==null){u=P.lY()
this.d=u}t=this.di(b)
s=u[t]
if(s==null)u[t]=[this.c6(b)]
else{if(this.dr(s,b)>=0)return!1
s.push(this.c6(b))}return!0},
G:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iI(this.c,b)
else return this.iH(0,b)},
iH:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.hj(u,b)
s=this.dr(t,b)
if(s<0)return!1
this.dO(t.splice(s,1)[0])
return!0},
h2:function(a,b){H.B(b,H.v(this,0))
if(H.f(a[b],"$icZ")!=null)return!1
a[b]=this.c6(b)
return!0},
iI:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icZ")
if(u==null)return!1
this.dO(u)
delete a[b]
return!0},
dz:function(){this.r=1073741823&this.r+1},
c6:function(a){var u,t
u=new P.cZ(H.B(a,H.v(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dz()
return u},
dO:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dz()},
di:function(a){return J.di(a)&1073741823},
hj:function(a,b){return a[this.di(b)]},
dr:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cZ.prototype={}
P.jA.prototype={
gO:function(a){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bX(u))
else{u=this.c
if(u==null){this.sdf(null)
return!1}else{this.sdf(H.B(u.a,H.v(this,0)))
this.c=this.c.b
return!0}}},
sdf:function(a){this.d=H.B(a,H.v(this,0))},
$ib1:1}
P.hi.prototype={
$2:function(a,b){this.a.l(0,H.B(a,this.b),H.B(b,this.c))},
$S:6}
P.hj.prototype={$ii:1,$ib:1}
P.z.prototype={
gW:function(a){return new H.dN(a,this.gk(a),0,[H.ce(this,a,"z",0)])},
N:function(a,b){return this.i(a,b)},
l0:function(a,b){var u,t
u=H.d([],[H.ce(this,a,"z",0)])
C.a.sk(u,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.l(u,t,this.i(a,t))
return u},
l_:function(a){return this.l0(a,!0)},
kc:function(a,b,c,d){var u
H.B(d,H.ce(this,a,"z",0))
P.bI(b,c,this.gk(a),null,null,null)
for(u=b;u<c;++u)this.l(a,u,d)},
j:function(a){return P.kG(a,"[","]")}}
P.hm.prototype={}
P.hn.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.n(a)
u.a=t+": "
u.a+=H.n(b)},
$S:6}
P.aj.prototype={
R:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.ce(this,a,"aj",0),H.ce(this,a,"aj",1)]})
for(u=J.bP(this.gaE(a));u.B();){t=u.gO(u)
b.$2(t,this.i(a,t))}},
gk:function(a){return J.aK(this.gaE(a))},
j:function(a){return P.kK(a)},
$iD:1}
P.jP.prototype={
l:function(a,b,c){H.B(b,H.v(this,0))
H.B(c,H.v(this,1))
throw H.c(P.G("Cannot modify unmodifiable map"))}}
P.ho.prototype={
i:function(a,b){return J.la(this.a,b)},
l:function(a,b,c){J.kx(this.a,H.B(b,H.v(this,0)),H.B(c,H.v(this,1)))},
R:function(a,b){J.lc(this.a,H.m(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]}))},
gk:function(a){return J.aK(this.a)},
j:function(a){return J.aw(this.a)},
$iD:1}
P.el.prototype={}
P.jG.prototype={
j:function(a){return P.kG(this,"{","}")},
N:function(a,b){var u,t,s
if(b<0)H.q(P.ad(b,0,null,"index",null))
for(u=P.lX(this,this.r,H.v(this,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.c(P.X(b,this,"index",null,t))},
$ii:1,
$ilH:1}
P.eF.prototype={}
P.f7.prototype={}
P.fu.prototype={
kt:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bI(c,a0,b.length,null,null,null)
u=$.mH()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.c.K(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.kd(C.c.K(b,n))
j=H.kd(C.c.K(b,n+1))
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
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.aq("")
g=r.a+=C.c.q(b,s,t)
r.a=g+H.dX(m)
s=n
continue}}throw H.c(P.a3("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.c.q(b,s,a0)
f=g.length
if(q>=0)P.lf(b,p,a0,q,o,f)
else{e=C.e.ax(f-1,4)+1
if(e===1)throw H.c(P.a3("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.b_(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.lf(b,p,a0,q,o,d)
else{e=C.e.ax(d,4)
if(e===1)throw H.c(P.a3("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.c.b_(b,a0,a0,e===2?"==":"=")}return b},
$abV:function(){return[[P.b,P.o],P.j]}}
P.fv.prototype={
$abY:function(){return[[P.b,P.o],P.j]}}
P.bV.prototype={}
P.bY.prototype={}
P.fU.prototype={
$abV:function(){return[P.j,[P.b,P.o]]}}
P.iU.prototype={
gkb:function(){return C.M}}
P.iW.prototype={
b7:function(a,b,c){var u,t,s
c=P.bI(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jX(t)
if(s.hh(a,b,c)!==c)s.dQ(J.mM(a,c-1),0)
return new Uint8Array(t.subarray(0,H.o4(0,s.b,t.length)))},
cz:function(a){return this.b7(a,0,null)},
$abY:function(){return[P.j,[P.b,P.o]]}}
P.jX.prototype={
dQ:function(a,b){var u,t,s,r,q
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
hh:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a0(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.K(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dQ(r,C.c.K(a,p)))s=p}else if(r<=2047){q=this.b
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
P.iV.prototype={
b7:function(a,b,c){var u,t,s,r
H.l(a,"$ib",[P.o],"$ab")
u=P.nF(!1,a,b,c)
if(u!=null)return u
c=P.bI(b,c,J.aK(a),null,null,null)
t=new P.aq("")
s=new P.jV(!1,t)
s.b7(a,b,c)
if(s.e>0){H.q(P.a3("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.dX(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cz:function(a){return this.b7(a,0,null)},
$abY:function(){return[[P.b,P.o],P.j]}}
P.jV.prototype={
b7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.l(a,"$ib",[P.o],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.jW(this,b,c,a)
$label0$0:for(q=J.dd(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.i(a,o)
if(typeof n!=="number")return n.c_()
if((n&192)!==128){m=P.a3("Bad UTF-8 encoding 0x"+C.e.bj(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.e(C.C,m)
if(u<=C.C[m]){m=P.a3("Overlong encoding of 0x"+C.e.bj(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a3("Character outside valid Unicode range: 0x"+C.e.bj(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.dX(u)
this.c=!1}for(m=o<c;m;){l=P.ob(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.i(a,k)
if(typeof n!=="number")return n.Y()
if(n<0){i=P.a3("Negative UTF-8 code unit: -0x"+C.e.bj(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a3("Bad UTF-8 encoding 0x"+C.e.bj(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.jW.prototype={
$2:function(a,b){this.a.b.a+=P.e5(this.d,a,b)},
$S:40}
P.a1.prototype={}
P.ap.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.ap&&this.a===b.a&&!0},
gL:function(a){var u=this.a
return(u^C.e.aW(u,30))&1073741823},
j:function(a){var u,t,s,r,q,p,o,n
u=P.mV(H.nn(this))
t=P.dt(H.nl(this))
s=P.dt(H.nh(this))
r=P.dt(H.ni(this))
q=P.dt(H.nk(this))
p=P.dt(H.nm(this))
o=P.mW(H.nj(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.t.prototype={}
P.bv.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.bv&&this.a===b.a},
gL:function(a){return C.e.gL(this.a)},
j:function(a){var u,t,s,r,q
u=new P.fS()
t=this.a
if(t<0)return"-"+new P.bv(0-t).j(0)
s=u.$1(C.e.a8(t,6e7)%60)
r=u.$1(C.e.a8(t,1e6)%60)
q=new P.fR().$1(t%1e6)
return""+C.e.a8(t,36e8)+":"+H.n(s)+":"+H.n(r)+"."+H.n(q)}}
P.fR.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.fS.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.bw.prototype={}
P.dV.prototype={
j:function(a){return"Throw of null."}}
P.aY.prototype={
gc8:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc7:function(){return""},
j:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gc8()+t+s
if(!this.a)return r
q=this.gc7()
p=P.fW(this.b)
return r+q+": "+p}}
P.c3.prototype={
gc8:function(){return"RangeError"},
gc7:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.n(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.n(u)
else if(s>u)t=": Not in range "+H.n(u)+".."+H.n(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.n(u)}return t}}
P.h7.prototype={
gc8:function(){return"RangeError"},
gc7:function(){var u,t
u=H.ae(this.b)
if(typeof u!=="number")return u.Y()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.n(t)},
gk:function(a){return this.f}}
P.iN.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.iK.prototype={
j:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ib.prototype={
j:function(a){return"Bad state: "+this.a}}
P.fE.prototype={
j:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fW(u)+"."}}
P.hN.prototype={
j:function(a){return"Out of Memory"},
$ibw:1}
P.e4.prototype={
j:function(a){return"Stack Overflow"},
$ibw:1}
P.fL.prototype={
j:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ey.prototype={
j:function(a){return"Exception: "+this.a}}
P.h4.prototype={
j:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.q(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.K(r,m)
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
g=""}f=C.c.q(r,i,j)
return t+h+f+g+"\n"+C.c.m(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.n(s)+")"):t}}
P.o.prototype={}
P.i.prototype={
gk:function(a){var u,t
u=this.gW(this)
for(t=0;u.B();)++t
return t},
N:function(a,b){var u,t,s
if(b<0)H.q(P.ad(b,0,null,"index",null))
for(u=this.gW(this),t=0;u.B();){s=u.gO(u)
if(b===t)return s;++t}throw H.c(P.X(b,this,"index",null,t))},
j:function(a){return P.n3(this,"(",")")}}
P.b1.prototype={}
P.b.prototype={$ii:1}
P.D.prototype={}
P.I.prototype={
gL:function(a){return P.S.prototype.gL.call(this,this)},
j:function(a){return"null"}}
P.a2.prototype={}
P.S.prototype={constructor:P.S,$iS:1,
u:function(a,b){return this===b},
gL:function(a){return H.cF(this)},
j:function(a){return"Instance of '"+H.c2(this)+"'"},
toString:function(){return this.j(this)}}
P.at.prototype={}
P.j.prototype={$ilA:1}
P.aq.prototype={
gk:function(a){return this.a.length},
j:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ioO:1}
P.iS.prototype={
$2:function(a,b){var u,t,s,r
u=P.j
H.l(a,"$iD",[u,u],"$aD")
H.N(b)
t=J.l3(b).eI(b,"=")
if(t===-1){if(b!=="")J.kx(a,P.kW(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.q(b,0,t)
r=C.c.aJ(b,t+1)
u=this.a
J.kx(a,P.kW(s,0,s.length,u,!0),P.kW(r,0,r.length,u,!0))}return a},
$S:42}
P.iP.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.iQ.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:46}
P.iR.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fj(C.c.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.Y()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:47}
P.c8.prototype={
gfa:function(){return this.b},
gcH:function(a){var u=this.c
if(u==null)return""
if(C.c.ak(u,"["))return C.c.q(u,1,u.length-1)
return u},
gbS:function(a){var u=this.d
if(u==null)return P.lZ(this.a)
return u},
gcS:function(a){var u=this.f
return u==null?"":u},
geC:function(){var u=this.r
return u==null?"":u},
cV:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.l(h,"$iD",[P.j,null],"$aD")
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
if(s&&!C.c.ak(d,"/"))d="/"+d
g=P.kV(g,0,0,h)
return new P.c8(i,j,c,f,d,g,this.r)},
f_:function(a,b){return this.cV(a,null,null,null,null,null,null,b,null,null)},
gbU:function(){var u,t
if(this.Q==null){u=this.f
t=P.j
this.siF(new P.el(P.lQ(u==null?"":u,C.m),[t,t]))}return this.Q},
geE:function(){return this.c!=null},
geH:function(){return this.f!=null},
geF:function(){return this.r!=null},
j:function(a){var u,t,s,r
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
if(!!J.V(b).$ikQ)if(this.a==b.gc2())if(this.c!=null===b.geE())if(this.b==b.gfa())if(this.gcH(this)==b.gcH(b))if(this.gbS(this)==b.gbS(b))if(this.e===b.geX(b)){u=this.f
t=u==null
if(!t===b.geH()){if(t)u=""
if(u===b.gcS(b)){u=this.r
t=u==null
if(!t===b.geF()){if(t)u=""
u=u===b.geC()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gL:function(a){var u=this.z
if(u==null){u=C.c.gL(this.j(0))
this.z=u}return u},
siF:function(a){var u=P.j
this.Q=H.l(a,"$iD",[u,u],"$aD")},
$ikQ:1,
gc2:function(){return this.a},
geX:function(a){return this.e}}
P.jQ.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.C()
throw H.c(P.a3("Invalid port",this.a,u+1))},
$S:49}
P.jR.prototype={
$1:function(a){return P.jU(C.a0,a,C.m,!1)},
$S:45}
P.jT.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.n(P.jU(C.t,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.n(P.jU(C.t,b,C.m,!0))}},
$S:18}
P.jS.prototype={
$2:function(a,b){var u,t
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(u=J.bP(H.mk(b,"$ii")),t=this.a;u.B();)t.$2(a,H.N(u.gO(u)))},
$S:29}
P.iO.prototype={
gf9:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
u=u[0]+1
s=C.c.eJ(t,"?",u)
r=t.length
if(s>=0){q=P.d8(t,s+1,r,C.q,!1)
r=s}else q=null
u=new P.jj(this,"data",null,null,null,P.d8(t,u,r,C.E,!1),q,null)
this.c=u
return u},
j:function(a){var u,t
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.k1.prototype={
$1:function(a){return new Uint8Array(96)},
$S:30}
P.k0.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.mN(u,0,96,b)
return u},
$S:31}
P.k2.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.K(b,t)^96
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.k3.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.K(b,0),t=C.c.K(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.jH.prototype={
geE:function(){return this.c>0},
geG:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.C()
t=this.e
if(typeof t!=="number")return H.w(t)
t=u+1<t
u=t}else u=!1
return u},
geH:function(){var u=this.f
if(typeof u!=="number")return u.Y()
return u<this.r},
geF:function(){return this.r<this.a.length},
gdv:function(){return this.b===4&&C.c.ak(this.a,"http")},
gdw:function(){return this.b===5&&C.c.ak(this.a,"https")},
gc2:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdv()){this.x="http"
u="http"}else if(this.gdw()){this.x="https"
u="https"}else if(u===4&&C.c.ak(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.ak(this.a,"package")){this.x="package"
u="package"}else{u=C.c.q(this.a,0,u)
this.x=u}return u},
gfa:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.q(this.a,t,u-1):""},
gcH:function(a){var u=this.c
return u>0?C.c.q(this.a,u,this.d):""},
gbS:function(a){var u
if(this.geG()){u=this.d
if(typeof u!=="number")return u.C()
return P.fj(C.c.q(this.a,u+1,this.e),null,null)}if(this.gdv())return 80
if(this.gdw())return 443
return 0},
geX:function(a){return C.c.q(this.a,this.e,this.f)},
gcS:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.Y()
return u<t?C.c.q(this.a,u+1,t):""},
geC:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.aJ(t,u+1):""},
gbU:function(){var u=this.f
if(typeof u!=="number")return u.Y()
if(u>=this.r)return C.a1
u=P.j
return new P.el(P.lQ(this.gcS(this),C.m),[u,u])},
cV:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.l(h,"$iD",[P.j,null],"$aD")
i=this.gc2()
u=i==="file"
t=this.c
j=t>0?C.c.q(this.a,this.b+3,t):""
f=this.geG()?this.gbS(this):null
t=this.c
if(t>0)c=C.c.q(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.q(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.ak(d,"/"))d="/"+d
g=P.kV(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.aJ(t,s+1)
return new P.c8(i,j,c,f,d,g,b)},
f_:function(a,b){return this.cV(a,null,null,null,null,null,null,b,null,null)},
gL:function(a){var u=this.y
if(u==null){u=C.c.gL(this.a)
this.y=u}return u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.V(b).$ikQ&&this.a===b.j(0)},
j:function(a){return this.a},
$ikQ:1}
P.jj.prototype={}
W.y.prototype={}
W.fk.prototype={
gk:function(a){return a.length}}
W.fm.prototype={
j:function(a){return String(a)}}
W.fn.prototype={
j:function(a){return String(a)}}
W.bR.prototype={$ibR:1}
W.dl.prototype={}
W.bT.prototype={
cZ:function(a,b,c){if(c!=null)return this.hk(a,b,P.oi(c,null))
return this.hl(a,b)},
fj:function(a,b){return this.cZ(a,b,null)},
hk:function(a,b,c){return a.getContext(b,c)},
hl:function(a,b){return a.getContext(b)},
$ibT:1,
$ili:1}
W.bU.prototype={
hm:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
k9:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibU:1}
W.bu.prototype={
gk:function(a){return a.length}}
W.cm.prototype={$icm:1}
W.fH.prototype={
gk:function(a){return a.length}}
W.U.prototype={$iU:1}
W.cn.prototype={
gk:function(a){return a.length}}
W.fI.prototype={}
W.b_.prototype={}
W.b0.prototype={}
W.fJ.prototype={
gk:function(a){return a.length}}
W.fK.prototype={
gk:function(a){return a.length}}
W.fM.prototype={
gk:function(a){return a.length}}
W.co.prototype={$ico:1}
W.cp.prototype={
d_:function(a,b){return a.getElementById(b)}}
W.fO.prototype={
j:function(a){return String(a)}}
W.dw.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.l(c,"$iaa",[P.a2],"$aaa")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[[P.aa,P.a2]]},
$az:function(){return[[P.aa,P.a2]]},
$ii:1,
$ai:function(){return[[P.aa,P.a2]]},
$ib:1,
$ab:function(){return[[P.aa,P.a2]]},
$aC:function(){return[[P.aa,P.a2]]}}
W.dx.prototype={
j:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(this.gas(a))+" x "+H.n(this.gap(a))},
u:function(a,b){var u
if(b==null)return!1
if(!H.dc(b,"$iaa",[P.a2],"$aaa"))return!1
u=J.bs(b)
return a.left===u.gbQ(b)&&a.top===u.gbY(b)&&this.gas(a)===u.gas(b)&&this.gap(a)===u.gap(b)},
gL:function(a){return W.lW(C.h.gL(a.left),C.h.gL(a.top),C.h.gL(this.gas(a)),C.h.gL(this.gap(a)))},
gdZ:function(a){return a.bottom},
gap:function(a){return a.height},
gbQ:function(a){return a.left},
gbW:function(a){return a.right},
gbY:function(a){return a.top},
gas:function(a){return a.width},
$iaa:1,
$aaa:function(){return[P.a2]}}
W.fP.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.N(c)
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[P.j]},
$az:function(){return[P.j]},
$ii:1,
$ai:function(){return[P.j]},
$ib:1,
$ab:function(){return[P.j]},
$aC:function(){return[P.j]}}
W.fQ.prototype={
gk:function(a){return a.length}}
W.jh.prototype={
gk:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.f(u[b],"$ia0")},
l:function(a,b,c){var u
H.f(c,"$ia0")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
J.ky(this.a,c,u[b])},
h:function(a,b){J.lb(this.a,b)
return b},
gW:function(a){var u=this.l_(this)
return new J.an(u,u.length,0,[H.v(u,0)])},
$az:function(){return[W.a0]},
$ai:function(){return[W.a0]},
$ab:function(){return[W.a0]}}
W.a0.prototype={
gcw:function(a){return new W.jh(a,a.children)},
ge3:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.Y()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Y()
if(r<0)r=-r*0
return new P.aa(u,t,s,r,[P.a2])},
j:function(a){return a.localName},
$ia0:1}
W.p.prototype={$ip:1}
W.k.prototype={
jL:function(a,b,c,d){H.m(c,{func:1,args:[W.p]})
if(c!=null)this.fT(a,b,c,!1)},
fT:function(a,b,c,d){return a.addEventListener(b,H.cb(H.m(c,{func:1,args:[W.p]}),1),!1)},
$ik:1}
W.aA.prototype={$iaA:1}
W.cr.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaA")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aA]},
$az:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$icr:1,
$aC:function(){return[W.aA]}}
W.h_.prototype={
gk:function(a){return a.length}}
W.h3.prototype={
gk:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.dD.prototype={
iM:function(a,b,c,d){return a.replaceState(b,c,d)},
gk:function(a){return a.length}}
W.c_.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iH")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.H]},
$az:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ic_:1,
$aC:function(){return[W.H]}}
W.dE.prototype={}
W.bk.prototype={$ibk:1,
ge5:function(a){return a.data}}
W.cu.prototype={$icu:1,$ili:1}
W.cv.prototype={$icv:1,$ick:1}
W.ck.prototype={$ia0:1,$ik:1,$iH:1}
W.b3.prototype={$ib3:1}
W.dL.prototype={}
W.hk.prototype={
j:function(a){return String(a)}}
W.cz.prototype={}
W.hx.prototype={
gk:function(a){return a.length}}
W.hy.prototype={
i:function(a,b){return P.br(a.get(H.N(b)))},
R:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.j,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
gaE:function(a){var u=H.d([],[P.j])
this.R(a,new W.hz(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaj:function(){return[P.j,null]},
$iD:1,
$aD:function(){return[P.j,null]}}
W.hz.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hA.prototype={
i:function(a,b){return P.br(a.get(H.N(b)))},
R:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.j,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
gaE:function(a){var u=H.d([],[P.j])
this.R(a,new W.hB(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaj:function(){return[P.j,null]},
$iD:1,
$aD:function(){return[P.j,null]}}
W.hB.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.aN.prototype={$iaN:1}
W.hC.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaN")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aN]},
$az:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aC:function(){return[W.aN]}}
W.ag.prototype={$iag:1}
W.jg.prototype={
l:function(a,b,c){var u,t
H.f(c,"$iH")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
J.ky(u,c,t[b])},
gW:function(a){var u=this.a.childNodes
return new W.dz(u,u.length,-1,[H.ce(C.a2,u,"C",0)])},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$az:function(){return[W.H]},
$ai:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
kR:function(a,b){var u,t
try{u=a.parentNode
J.ky(u,b,a)}catch(t){H.aI(t)}return a},
j:function(a){var u=a.nodeValue
return u==null?this.fs(a):u},
a_:function(a,b){return a.appendChild(b)},
iL:function(a,b,c){return a.replaceChild(b,c)},
$iH:1}
W.cE.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iH")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.H]},
$az:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aC:function(){return[W.H]}}
W.aO.prototype={$iaO:1,
gk:function(a){return a.length}}
W.hP.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaO")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aO]},
$az:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aC:function(){return[W.aO]}}
W.hX.prototype={
i:function(a,b){return P.br(a.get(H.N(b)))},
R:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.j,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
gaE:function(a){var u=H.d([],[P.j])
this.R(a,new W.hY(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaj:function(){return[P.j,null]},
$iD:1,
$aD:function(){return[P.j,null]}}
W.hY.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.i_.prototype={
gk:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.i8.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaP")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aP]},
$az:function(){return[W.aP]},
$ii:1,
$ai:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aC:function(){return[W.aP]}}
W.aQ.prototype={$iaQ:1}
W.i9.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaQ")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aQ]},
$az:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aC:function(){return[W.aQ]}}
W.aR.prototype={$iaR:1,
gk:function(a){return a.length}}
W.id.prototype={
i:function(a,b){return this.ds(a,H.N(b))},
l:function(a,b,c){this.iT(a,b,c)},
R:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.j,P.j]})
for(u=0;!0;++u){t=this.hq(a,u)
if(t==null)return
b.$2(t,this.ds(a,t))}},
gaE:function(a){var u=H.d([],[P.j])
this.R(a,new W.ie(u))
return u},
gk:function(a){return a.length},
ds:function(a,b){return a.getItem(b)},
hq:function(a,b){return a.key(b)},
iT:function(a,b,c){return a.setItem(b,c)},
$aaj:function(){return[P.j,P.j]},
$iD:1,
$aD:function(){return[P.j,P.j]}}
W.ie.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:18}
W.aC.prototype={$iaC:1}
W.ba.prototype={$iba:1}
W.e6.prototype={
ho:function(a,b){return a.insertRow(b)}}
W.e7.prototype={
du:function(a,b){return a.insertCell(b)}}
W.aS.prototype={$iaS:1}
W.aD.prototype={$iaD:1}
W.im.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaD")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aD]},
$az:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$aC:function(){return[W.aD]}}
W.io.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaS")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aS]},
$az:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aC:function(){return[W.aS]}}
W.iu.prototype={
gk:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.aV.prototype={$iaV:1}
W.ix.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaU")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aU]},
$az:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aC:function(){return[W.aU]}}
W.iy.prototype={
gk:function(a){return a.length}}
W.bK.prototype={}
W.iT.prototype={
j:function(a){return String(a)}}
W.j8.prototype={$ili:1}
W.j9.prototype={
gk:function(a){return a.length}}
W.be.prototype={
gk6:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.G("deltaY is not supported"))},
gk5:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.G("deltaX is not supported"))},
$ibe:1}
W.cX.prototype={
iN:function(a,b){return a.requestAnimationFrame(H.cb(H.m(b,{func:1,ret:-1,args:[P.a2]}),1))},
ha:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ji.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iU")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.U]},
$az:function(){return[W.U]},
$ii:1,
$ai:function(){return[W.U]},
$ib:1,
$ab:function(){return[W.U]},
$aC:function(){return[W.U]}}
W.et.prototype={
j:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(a.width)+" x "+H.n(a.height)},
u:function(a,b){var u
if(b==null)return!1
if(!H.dc(b,"$iaa",[P.a2],"$aaa"))return!1
u=J.bs(b)
return a.left===u.gbQ(b)&&a.top===u.gbY(b)&&a.width===u.gas(b)&&a.height===u.gap(b)},
gL:function(a){return W.lW(C.h.gL(a.left),C.h.gL(a.top),C.h.gL(a.width),C.h.gL(a.height))},
gap:function(a){return a.height},
gas:function(a){return a.width}}
W.jw.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaL")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aL]},
$az:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aC:function(){return[W.aL]}}
W.eK.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iH")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.H]},
$az:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aC:function(){return[W.H]}}
W.jI.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaR")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aR]},
$az:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aC:function(){return[W.aR]}}
W.jM.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaC")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aC]},
$az:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$ib:1,
$ab:function(){return[W.aC]},
$aC:function(){return[W.aC]}}
W.jk.prototype={}
W.kU.prototype={}
W.jl.prototype={}
W.jm.prototype={
$1:function(a){return this.a.$1(H.f(a,"$ip"))},
$S:33}
W.C.prototype={
gW:function(a){return new W.dz(a,this.gk(a),-1,[H.ce(this,a,"C",0)])}}
W.dz.prototype={
B:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdt(J.la(this.a,u))
this.c=u
return!0}this.sdt(null)
this.c=t
return!1},
gO:function(a){return this.d},
sdt:function(a){this.d=H.B(a,H.v(this,0))},
$ib1:1}
W.es.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.d3.prototype={}
W.d4.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eX.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
P.jJ.prototype={
eA:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
cY:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.V(a)
if(!!t.$iap)return new Date(a.a)
if(!!t.$ins)throw H.c(P.iL("structured clone of RegExp"))
if(!!t.$iaA)return a
if(!!t.$ibR)return a
if(!!t.$icr)return a
if(!!t.$ibk)return a
if(!!t.$icB||!!t.$ibE)return a
if(!!t.$iD){s=this.eA(a)
r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.l(r,s,q)
t.R(a,new P.jL(u,this))
return u.a}if(!!t.$ib){s=this.eA(a)
u=this.b
if(s>=u.length)return H.e(u,s)
q=u[s]
if(q!=null)return q
return this.jX(a,s)}throw H.c(P.iL("structured clone of other type"))},
jX:function(a,b){var u,t,s,r
u=J.dd(a)
t=u.gk(a)
s=new Array(t)
C.a.l(this.b,b,s)
for(r=0;r<t;++r)C.a.l(s,r,this.cY(u.i(a,r)))
return s}}
P.jL.prototype={
$2:function(a,b){this.a.a[a]=this.b.cY(b)},
$S:6}
P.f6.prototype={$ibk:1,
ge5:function(a){return this.a}}
P.k7.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.jK.prototype={}
P.h0.prototype={
gbp:function(){var u,t,s
u=this.b
t=H.az(u,"z",0)
s=W.a0
return new H.hp(new H.ja(u,H.m(new P.h1(),{func:1,ret:P.a1,args:[t]}),[t]),H.m(new P.h2(),{func:1,ret:s,args:[t]}),[t,s])},
l:function(a,b,c){var u
H.f(c,"$ia0")
u=this.gbp()
J.mO(u.b.$1(J.kz(u.a,b)),c)},
h:function(a,b){J.lb(this.b.a,b)},
gk:function(a){return J.aK(this.gbp().a)},
i:function(a,b){var u=this.gbp()
return u.b.$1(J.kz(u.a,b))},
gW:function(a){var u=P.lt(this.gbp(),!1,W.a0)
return new J.an(u,u.length,0,[H.v(u,0)])},
$az:function(){return[W.a0]},
$ai:function(){return[W.a0]},
$ab:function(){return[W.a0]}}
P.h1.prototype={
$1:function(a){return!!J.V(H.f(a,"$iH")).$ia0},
$S:34}
P.h2.prototype={
$1:function(a){return H.h(H.f(a,"$iH"),"$ia0")},
$S:35}
P.jB.prototype={
gbW:function(a){var u=this.a
if(typeof u!=="number")return u.C()
return H.B(u+this.c,H.v(this,0))},
gdZ:function(a){var u=this.b
if(typeof u!=="number")return u.C()
return H.B(u+this.d,H.v(this,0))},
j:function(a){return"Rectangle ("+H.n(this.a)+", "+H.n(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.dc(b,"$iaa",[P.a2],"$aaa")){u=this.a
t=J.bs(b)
if(u==t.gbQ(b)){s=this.b
if(s==t.gbY(b)){if(typeof u!=="number")return u.C()
r=H.v(this,0)
if(H.B(u+this.c,r)===t.gbW(b)){if(typeof s!=="number")return s.C()
u=H.B(s+this.d,r)===t.gdZ(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gL:function(a){var u,t,s,r,q
u=this.a
t=J.di(u)
s=this.b
r=J.di(s)
if(typeof u!=="number")return u.C()
q=H.v(this,0)
u=C.e.gL(H.B(u+this.c,q))
if(typeof s!=="number")return s.C()
q=C.e.gL(H.B(s+this.d,q))
return P.nP(P.jy(P.jy(P.jy(P.jy(0,t),r),u),q))}}
P.aa.prototype={
gbQ:function(a){return this.a},
gbY:function(a){return this.b},
gas:function(a){return this.c},
gap:function(a){return this.d}}
P.b4.prototype={$ib4:1}
P.hd.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return this.aI(a,b)},
l:function(a,b,c){H.f(c,"$ib4")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){return this.i(a,b)},
aI:function(a,b){return a.getItem(b)},
$az:function(){return[P.b4]},
$ii:1,
$ai:function(){return[P.b4]},
$ib:1,
$ab:function(){return[P.b4]},
$aC:function(){return[P.b4]}}
P.b8.prototype={$ib8:1}
P.hL.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return this.aI(a,b)},
l:function(a,b,c){H.f(c,"$ib8")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){return this.i(a,b)},
aI:function(a,b){return a.getItem(b)},
$az:function(){return[P.b8]},
$ii:1,
$ai:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aC:function(){return[P.b8]}}
P.hR.prototype={
gk:function(a){return a.length}}
P.ik.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return this.aI(a,b)},
l:function(a,b,c){H.N(c)
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){return this.i(a,b)},
aI:function(a,b){return a.getItem(b)},
$az:function(){return[P.j]},
$ii:1,
$ai:function(){return[P.j]},
$ib:1,
$ab:function(){return[P.j]},
$aC:function(){return[P.j]}}
P.r.prototype={
gcw:function(a){return new P.h0(a,new W.jg(a))}}
P.bc.prototype={$ibc:1}
P.iz.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return this.aI(a,b)},
l:function(a,b,c){H.f(c,"$ibc")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){return this.i(a,b)},
aI:function(a,b){return a.getItem(b)},
$az:function(){return[P.bc]},
$ii:1,
$ai:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aC:function(){return[P.bc]}}
P.eD.prototype={}
P.eE.prototype={}
P.eN.prototype={}
P.eO.prototype={}
P.eY.prototype={}
P.eZ.prototype={}
P.f4.prototype={}
P.f5.prototype={}
P.Q.prototype={$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$inC:1}
P.fp.prototype={
gk:function(a){return a.length}}
P.fq.prototype={
i:function(a,b){return P.br(a.get(H.N(b)))},
R:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.j,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
gaE:function(a){var u=H.d([],[P.j])
this.R(a,new P.fr(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaj:function(){return[P.j,null]},
$iD:1,
$aD:function(){return[P.j,null]}}
P.fr.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.fs.prototype={
gk:function(a){return a.length}}
P.bQ.prototype={}
P.hM.prototype={
gk:function(a){return a.length}}
P.er.prototype={}
P.dm.prototype={$idm:1}
P.dA.prototype={$idA:1}
P.dY.prototype={$idY:1}
P.e_.prototype={$ie_:1}
P.c5.prototype={
bt:function(a,b){return a.activeTexture(b)},
dS:function(a,b,c){return a.attachShader(b,c)},
aB:function(a,b,c){return a.bindBuffer(b,c)},
aO:function(a,b,c){return a.bindFramebuffer(b,c)},
dX:function(a,b,c){return a.bindRenderbuffer(b,c)},
af:function(a,b,c){return a.bindTexture(b,c)},
jS:function(a,b,c){return a.blendFunc(b,c)},
e_:function(a,b,c,d){return a.bufferData(b,c,d)},
e0:function(a,b){return a.clear(b)},
e1:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
e2:function(a,b){return a.clearDepth(b)},
jV:function(a,b){return a.compileShader(b)},
jY:function(a,b){return a.createShader(b)},
k_:function(a,b){return a.deleteProgram(b)},
k0:function(a,b){return a.deleteShader(b)},
e6:function(a,b){return a.depthFunc(b)},
k7:function(a,b){return a.disable(b)},
e8:function(a,b){return a.disableVertexAttribArray(b)},
k8:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bb:function(a,b){return a.enable(b)},
ed:function(a,b){return a.enableVertexAttribArray(b)},
ki:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
eD:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ff:function(a,b){return a.generateMipmap(b)},
fg:function(a,b,c){return a.getActiveAttrib(b,c)},
fh:function(a,b,c){return a.getActiveUniform(b,c)},
fi:function(a,b,c){return a.getAttribLocation(b,c)},
c0:function(a,b){return a.getParameter(b)},
fk:function(a,b){return a.getProgramInfoLog(b)},
c1:function(a,b,c){return a.getProgramParameter(b,c)},
fl:function(a,b){return a.getShaderInfoLog(b)},
fm:function(a,b,c){return a.getShaderParameter(b,c)},
fn:function(a,b,c){return a.getUniformLocation(b,c)},
ko:function(a,b){return a.linkProgram(b)},
kL:function(a,b,c){return a.pixelStorei(b,c)},
iG:function(a,b,c,d,e,f,g,h){return a.readPixels(b,c,d,e,f,g,h)},
kQ:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
fp:function(a,b,c){return a.shaderSource(b,c)},
f3:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=i==null
if(!u&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.j7(a,b,c,d,e,f,g,h,i,j)
return}t=J.V(g)
if(!!t.$ibk&&h==null&&u&&!0){this.j8(a,b,c,d,e,f,P.oj(g))
return}if(!!t.$icu&&h==null&&u&&!0){this.j9(a,b,c,d,e,f,g)
return}throw H.c(P.dj("Incorrect number or type of arguments"))},
kX:function(a,b,c,d,e,f,g){return this.f3(a,b,c,d,e,f,g,null,null,null)},
j7:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
j8:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
j9:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aG:function(a,b,c,d){return a.texParameteri(b,c,d)},
J:function(a,b,c){return a.uniform1f(b,c)},
M:function(a,b,c){return a.uniform1i(b,c)},
bZ:function(a,b,c,d){return a.uniform2f(b,c,d)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
l5:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
f8:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cX:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bl:function(a,b){return a.useProgram(b)},
l7:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
fc:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ic5:1}
P.e1.prototype={$ie1:1}
P.e8.prototype={$ie8:1}
P.ej.prototype={$iej:1}
P.ia.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return P.br(this.hp(a,b))},
l:function(a,b,c){H.f(c,"$iD")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){return this.i(a,b)},
hp:function(a,b){return a.item(b)},
$az:function(){return[[P.D,,,]]},
$ii:1,
$ai:function(){return[[P.D,,,]]},
$ib:1,
$ab:function(){return[[P.D,,,]]},
$aC:function(){return[[P.D,,,]]}}
P.eU.prototype={}
P.eV.prototype={}
O.W.prototype={
bm:function(a){this.shu(H.d([],[a]))
this.sdF(null)
this.sdB(null)
this.sdG(null)},
d1:function(a,b,c){var u=H.az(this,"W",0)
H.m(b,{func:1,ret:P.a1,args:[[P.i,u]]})
u={func:1,ret:-1,args:[P.o,[P.i,u]]}
H.m(a,u)
H.m(c,u)
this.sdF(b)
this.sdB(a)
this.sdG(c)},
aR:function(a,b){return this.d1(a,null,b)},
dE:function(a){var u
H.l(a,"$ii",[H.az(this,"W",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dA:function(a,b){var u
H.l(b,"$ii",[H.az(this,"W",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gW:function(a){var u=this.a
return new J.an(u,u.length,0,[H.v(u,0)])},
N:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.az(this,"W",0)
H.B(b,u)
u=[u]
if(this.dE(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.dA(s,H.d([b],u))}},
b6:function(a,b){var u,t
H.l(b,"$ii",[H.az(this,"W",0)],"$ai")
if(this.dE(b)){u=this.a
t=u.length
C.a.b6(u,b)
this.dA(t,b)}},
shu:function(a){this.a=H.l(a,"$ib",[H.az(this,"W",0)],"$ab")},
sdF:function(a){this.b=H.m(a,{func:1,ret:P.a1,args:[[P.i,H.az(this,"W",0)]]})},
sdB:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.o,[P.i,H.az(this,"W",0)]]})},
sdG:function(a){this.d=H.m(a,{func:1,ret:-1,args:[P.o,[P.i,H.az(this,"W",0)]]})},
$ii:1}
O.cy.prototype={
gk:function(a){return this.a.length},
gn:function(){var u=this.b
if(u==null){u=D.L()
this.b=u}return u},
fD:function(a){var u=this.b
if(u!=null)u.D(a)},
aS:function(){return this.fD(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.a.gaP(u)
else return V.bC()},
bT:function(a){var u=this.a
if(a==null)C.a.h(u,V.bC())
else C.a.h(u,a)
this.aS()},
bh:function(){var u=this.a
if(u.length>0){u.pop()
this.aS()}},
scb:function(a){this.a=H.l(a,"$ib",[V.af],"$ab")}}
E.fw.prototype={}
E.ai.prototype={
de:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.an(u,u.length,0,[H.v(u,0)]);u.B();){t=u.d
if(t.f==null)t.de()}},
sc3:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gn().G(0,this.geT())
t=this.c
if(t!=null)t.gn().h(0,this.geT())
s=new D.x("shape",u,this.c,this,[F.e2])
s.b=!0
this.ai(s)}},
saj:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gn().G(0,this.geV())
t=this.f
this.f=a
if(a!=null)a.gn().h(0,this.geV())
this.de()
s=new D.x("technique",t,this.f,this,[O.bp])
s.b=!0
this.ai(s)}},
sbe:function(a){var u,t
if(!J.P(this.r,a)){u=this.r
if(u!=null)u.gn().G(0,this.geR())
if(a!=null)a.gn().h(0,this.geR())
this.r=a
t=new D.x("mover",u,a,this,[U.ah])
t.b=!0
this.ai(t)}},
ab:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.aH(0,b,this):null
if(!J.P(t,this.x)){s=this.x
this.x=t
r=new D.x("matrix",s,t,this,[V.af])
r.b=!0
this.ai(r)}u=this.f
if(u!=null)u.ab(0,b)
for(u=this.y.a,u=new J.an(u,u.length,0,[H.v(u,0)]);u.B();)u.d.ab(0,b)},
aa:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga1(u))
else C.a.h(u.a,t.m(0,u.ga1(u)))
u.aS()
a.cR(this.f)
u=a.dy
s=(u&&C.a).gaP(u)
if(s!=null&&this.d!=null)s.bV(a,this)
for(u=this.y.a,u=new J.an(u,u.length,0,[H.v(u,0)]);u.B();)u.d.aa(a)
a.cP()
a.dx.bh()},
gn:function(){var u=this.z
if(u==null){u=D.L()
this.z=u}return u},
ai:function(a){var u=this.z
if(u!=null)u.D(a)},
a5:function(){return this.ai(null)},
eU:function(a){H.f(a,"$iA")
this.e=null
this.ai(a)},
kA:function(){return this.eU(null)},
eW:function(a){this.ai(H.f(a,"$iA"))},
kB:function(){return this.eW(null)},
eS:function(a){this.ai(H.f(a,"$iA"))},
kz:function(){return this.eS(null)},
eQ:function(a){this.ai(H.f(a,"$iA"))},
kw:function(){return this.eQ(null)},
kv:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ii",[E.ai],"$ai")
for(u=b.length,t=this.geP(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bx()
o.sad(null)
o.saU(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sad(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a5()},
ky:function(a,b){var u,t
H.l(b,"$ii",[E.ai],"$ai")
for(u=b.gW(b),t=this.geP();u.B();)u.gO(u).gn().G(0,t)
this.a5()},
j:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfE:function(a,b){this.y=H.l(b,"$iW",[E.ai],"$aW")},
$ib7:1}
E.hT.prototype={
fz:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ap(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cy()
t=[V.af]
u.scb(H.d([],t))
u.b=null
u.gn().h(0,new E.hU(this))
this.cy=u
u=new O.cy()
u.scb(H.d([],t))
u.b=null
u.gn().h(0,new E.hV(this))
this.db=u
u=new O.cy()
u.scb(H.d([],t))
u.b=null
u.gn().h(0,new E.hW(this))
this.dx=u
this.sj6(H.d([],[O.bp]))
u=this.dy;(u&&C.a).h(u,null)
this.sj0(new H.aM([P.j,A.cI]))},
gkM:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga1(u)
t=this.db
t=u.m(0,t.ga1(t))
this.z=t
u=t}return u},
geZ:function(){var u,t
u=this.ch
if(u==null){u=this.gkM()
t=this.dx
t=u.m(0,t.ga1(t))
this.ch=t
u=t}return u},
gfb:function(){var u,t
u=this.cx
if(u==null){u=this.db
u=u.ga1(u)
t=this.dx
t=u.m(0,t.ga1(t))
this.cx=t
u=t}return u},
cR:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaP(u):a;(u&&C.a).h(u,t)},
cP:function(){var u=this.dy
if(u.length>1)u.pop()},
bv:function(a){var u=a.b
if(u.length===0)throw H.c(P.u("May not cache a shader with no name."))
if(this.fr.bx(0,u))throw H.c(P.u('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)},
sj6:function(a){this.dy=H.l(a,"$ib",[O.bp],"$ab")},
sj0:function(a){this.fr=H.l(a,"$iD",[P.j,A.cI],"$aD")}}
E.hU.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.z=null
u.ch=null},
$S:9}
E.hV.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:9}
E.hW.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.ch=null
u.cx=null},
$S:9}
E.ee.prototype={
d8:function(a){H.f(a,"$iA")
this.f0()},
d7:function(){return this.d8(null)},
gkh:function(){var u,t,s
u=Date.now()
t=C.e.a8(P.ln(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ap(u,!1)
return s/t},
dJ:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.m()
if(typeof u!=="number")return H.w(u)
s=C.h.bc(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.m()
r=C.h.bc(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.lL(C.u,this.gkS())}},
f0:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.it(this),{func:1,ret:-1,args:[P.a2]})
C.I.ha(u)
C.I.iN(u,W.mb(t,P.a2))}},
kP:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dJ()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ap(r,!1)
s.y=P.ln(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aS()
r=s.db
C.a.sk(r.a,0)
r.aS()
r=s.dx
C.a.sk(r.a,0)
r.aS()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aa(this.e)}}catch(q){u=H.aI(q)
t=H.cf(q)
P.av("Error: "+H.n(u))
P.av("Stack: "+H.n(t))
throw H.c(u)}}}
E.it.prototype={
$1:function(a){var u
H.oz(a)
u=this.a
if(u.ch){u.ch=!1
u.kP()}},
$S:38}
Z.ep.prototype={$ioH:1}
Z.dn.prototype={
X:function(a){var u,t,s
try{t=a.a
C.b.ed(t,this.e)
C.b.l7(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.aI(s)
t=P.u('Failed to bind buffer attribute "'+this.a.j(0)+'": '+H.n(u))
throw H.c(t)}},
j:function(a){return"["+this.a.j(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.n(this.e)+"]"}}
Z.c7.prototype={$ioI:1}
Z.bt.prototype={
ao:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
X:function(a){var u,t
u=this.a
C.b.aB(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].X(a)},
aQ:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.e8(s,u[t].e)
C.b.aB(s,this.a.a,null)},
aa:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aB(t,p,r.b)
C.b.k8(t,q.a,q.b,5123,0)
C.b.aB(t,p,null)}},
j:function(a){var u,t,s,r,q,p
u=[P.j]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q)C.a.h(t,s[q].j(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aw(u[q]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.F(t,", ")+"\nAttrs:   "+C.a.F(p,", ")},
shn:function(a){this.b=H.l(a,"$ib",[Z.by],"$ab")},
$ioP:1}
Z.by.prototype={
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c2(this.c)+"'")+"]"}}
Z.aE.prototype={
gd3:function(a){var u,t
u=this.a
t=(u&$.am().a)!==0?3:0
if((u&$.aX().a)!==0)t+=3
if((u&$.bi().a)!==0)t+=3
if((u&$.aJ().a)!==0)t+=2
if((u&$.bj().a)!==0)t+=3
if((u&$.df().a)!==0)t+=3
if((u&$.dg().a)!==0)t+=4
if((u&$.bO().a)!==0)++t
return(u&$.bh().a)!==0?t+4:t},
jQ:function(a){var u,t,s
u=$.am()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aX()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bi()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aJ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bj()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.df()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dg()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bO()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bh()
if((t&u.a)!==0)if(s===a)return u
return $.mG()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aE))return!1
return this.a===b.a},
j:function(a){var u,t
u=H.d([],[P.j])
t=this.a
if((t&$.am().a)!==0)C.a.h(u,"Pos")
if((t&$.aX().a)!==0)C.a.h(u,"Norm")
if((t&$.bi().a)!==0)C.a.h(u,"Binm")
if((t&$.aJ().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bj().a)!==0)C.a.h(u,"TxtCube")
if((t&$.df().a)!==0)C.a.h(u,"Clr3")
if((t&$.dg().a)!==0)C.a.h(u,"Clr4")
if((t&$.bO().a)!==0)C.a.h(u,"Weight")
if((t&$.bh().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.F(u,"|")}}
D.fz.prototype={}
D.bx.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.m(b,u)
if(this.a==null)this.sad(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
G:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[D.A]})
u=this.a
u=u==null?null:C.a.av(u,b)
if(u===!0){u=this.a
t=(u&&C.a).G(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.av(u,b)
if(u===!0){u=this.b
t=(u&&C.a).G(u,b)||t}return t},
D:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.A(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.R(P.lt(t,!0,{func:1,ret:-1,args:[D.A]}),new D.fX(u))
t=this.b
if(t!=null){this.saU(H.d([],[{func:1,ret:-1,args:[D.A]}]))
C.a.R(t,new D.fY(u))}return!0},
ec:function(){return this.D(null)},
kT:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.D(t)}}},
ag:function(a){return this.kT(a,!0,!1)},
sad:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")},
saU:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")}}
D.fX.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.fY.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.A.prototype={}
D.bz.prototype={}
D.bA.prototype={}
D.x.prototype={
j:function(a){return"ValueChanged: "+this.c+", "+H.n(this.d)+" => "+H.n(this.e)}}
X.dp.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dp))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.n(this.a)}}
X.dK.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dK))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.n(this.a)}}
X.hc.prototype={
kI:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kE:function(a){this.c=a.b
this.d.G(0,a.a)
return!1},
siE:function(a){this.d=H.l(a,"$ilH",[P.o],"$alH")}}
X.dO.prototype={}
X.hl.prototype={
b4:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ap(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.m()
q=b.b
p=this.ch
if(typeof q!=="number")return q.m()
o=new V.a9(t.a+s*r,t.b+q*p)
p=this.a.gaY()
n=new X.bD(a,V.bo(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cO:function(a,b){this.r=a.a
return!1},
bg:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fo()
if(typeof u!=="number")return u.c_()
this.r=(u&~t)>>>0
return!1},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.b4(a,b))
return!0},
kJ:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaY()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.m()
o=a.b
n=this.cy
if(typeof o!=="number")return o.m()
r=new X.cA(new V.Z(q*p,o*n),t,s,new P.ap(r,!1),this)
r.b=!0
u.D(r)
return!0},
i9:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ap(Date.now(),!1)
t=this.f
s=new X.dO(c,a,this.a.gaY(),b,u,this)
s.b=!0
t.D(s)
this.y=u
this.x=V.bo()}}
X.aB.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aB))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
j:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bD.prototype={}
X.hD.prototype={
c9:function(a,b,c){var u,t,s
u=new P.ap(Date.now(),!1)
t=this.a.gaY()
s=new X.bD(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cO:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.D(this.c9(a,b,!0))
return!0},
bg:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fo()
if(typeof u!=="number")return u.c_()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.D(this.c9(a,b,!0))
return!0},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.c9(a,b,!1))
return!0},
kK:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaY()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.m()
p=a.b
o=this.ch
if(typeof p!=="number")return p.m()
s=new X.cA(new V.Z(r*q,p*o),t,b,new P.ap(s,!1),this)
s.b=!0
u.D(s)
return!0}}
X.cA.prototype={}
X.hQ.prototype={}
X.eg.prototype={}
X.iw.prototype={
b4:function(a,b){var u,t,s,r
H.l(a,"$ib",[V.a9],"$ab")
u=new P.ap(Date.now(),!1)
t=a.length>0?a[0]:V.bo()
s=this.a.gaY()
r=new X.eg(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kH:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.b
if(u==null)return!1
u.D(this.b4(a,!0))
return!0},
kF:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.c
if(u==null)return!1
u.D(this.b4(a,!0))
return!0},
kG:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.d
if(u==null)return!1
u.D(this.b4(a,!1))
return!0}}
X.em.prototype={
gaY:function(){var u=this.a
return V.cG(0,0,C.n.ge3(u).c,C.n.ge3(u).d)},
dl:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dK(u,new X.aB(t,a.altKey,a.shiftKey))},
aV:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aB(t,a.altKey,a.shiftKey)},
cn:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aB(t,a.altKey,a.shiftKey)},
aN:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.H()
q=u.top
if(typeof s!=="number")return s.H()
return new V.a9(t-r,s-q)},
b5:function(a){return new V.Z(a.movementX,a.movementY)},
cg:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.a9])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
o=C.h.a3(p.pageX)
C.h.a3(p.pageY)
n=u.left
C.h.a3(p.pageX)
C.a.h(t,new V.a9(o-n,C.h.a3(p.pageY)-u.top))}return t},
aK:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dp(u,new X.aB(t,a.altKey,a.shiftKey))},
cc:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.H()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.H()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
i3:function(a){this.f=!0},
hO:function(a){this.f=!1},
hU:function(a){H.f(a,"$iag")
if(this.f&&this.cc(a))a.preventDefault()},
i7:function(a){var u
H.f(a,"$ib3")
if(!this.f)return
u=this.dl(a)
this.b.kI(u)},
i5:function(a){var u
H.f(a,"$ib3")
if(!this.f)return
u=this.dl(a)
this.b.kE(u)},
ib:function(a){var u,t,s,r
H.f(a,"$iag")
u=this.a
u.focus()
this.f=!0
this.aV(a)
if(this.x){t=this.aK(a)
s=this.b5(a)
if(this.d.cO(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aK(a)
r=this.aN(a)
if(this.c.cO(t,r))a.preventDefault()},
ih:function(a){var u,t,s
H.f(a,"$iag")
this.aV(a)
u=this.aK(a)
if(this.x){t=this.b5(a)
if(this.d.bg(u,t))a.preventDefault()
return}if(this.r)return
s=this.aN(a)
if(this.c.bg(u,s))a.preventDefault()},
hY:function(a){var u,t,s
H.f(a,"$iag")
if(!this.cc(a)){this.aV(a)
u=this.aK(a)
if(this.x){t=this.b5(a)
if(this.d.bg(u,t))a.preventDefault()
return}if(this.r)return
s=this.aN(a)
if(this.c.bg(u,s))a.preventDefault()}},
ie:function(a){var u,t,s
H.f(a,"$iag")
this.aV(a)
u=this.aK(a)
if(this.x){t=this.b5(a)
if(this.d.bf(u,t))a.preventDefault()
return}if(this.r)return
s=this.aN(a)
if(this.c.bf(u,s))a.preventDefault()},
hW:function(a){var u,t,s
H.f(a,"$iag")
if(!this.cc(a)){this.aV(a)
u=this.aK(a)
if(this.x){t=this.b5(a)
if(this.d.bf(u,t))a.preventDefault()
return}if(this.r)return
s=this.aN(a)
if(this.c.bf(u,s))a.preventDefault()}},
ij:function(a){var u,t
H.f(a,"$ibe")
this.aV(a)
u=new V.Z((a&&C.H).gk5(a),C.H.gk6(a)).A(0,180)
if(this.x){if(this.d.kJ(u))a.preventDefault()
return}if(this.r)return
t=this.aN(a)
if(this.c.kK(u,t))a.preventDefault()},
il:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aK(this.y)
s=this.aN(this.y)
this.d.i9(t,s,u)}},
iC:function(a){var u
H.f(a,"$iaV")
this.a.focus()
this.f=!0
this.cn(a)
u=this.cg(a)
if(this.e.kH(u))a.preventDefault()},
iy:function(a){var u
H.f(a,"$iaV")
this.cn(a)
u=this.cg(a)
if(this.e.kF(u))a.preventDefault()},
iA:function(a){var u
H.f(a,"$iaV")
this.cn(a)
u=this.cg(a)
if(this.e.kG(u))a.preventDefault()},
shc:function(a){this.z=H.l(a,"$ib",[[P.cK,P.S]],"$ab")}}
D.dv.prototype={$ia5:1,$ib7:1}
D.a5.prototype={$ib7:1}
D.dM.prototype={
gn:function(){var u=this.Q
if(u==null){u=D.L()
this.Q=u}return u},
am:function(a){var u=this.Q
if(u!=null)u.D(a)},
dD:function(a){var u
H.f(a,"$iA")
u=this.ch
if(u!=null)u.D(a)},
i8:function(){return this.dD(null)},
io:function(a){var u,t,s
H.l(a,"$ii",[D.a5],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.E)(a),++t){s=a[t]
if(s==null||this.h3(s))return!1}return!0},
hI:function(a,b){var u,t,s,r,q,p,o,n
u=D.a5
H.l(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gdC(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.E)(b),++p){o=H.f(b[p],"$ia5")
if(o instanceof D.bF)C.a.h(this.f,o)
n=o.r
if(n==null){n=new D.bx()
n.sad(null)
n.saU(null)
n.c=null
n.d=0
o.r=n}H.m(s,r)
if(n.a==null)n.sad(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bz(a,b,this,[u])
u.b=!0
this.am(u)},
is:function(a,b){var u,t,s,r
u=D.a5
H.l(b,"$ii",[u],"$ai")
for(t=b.gW(b),s=this.gdC();t.B();){r=t.gO(t)
C.a.G(this.e,r)
r.gn().G(0,s)}u=new D.bA(a,b,this,[u])
u.b=!0
this.am(u)},
h3:function(a){var u=C.a.av(this.f,a)
return u},
sfF:function(a){this.e=H.l(a,"$ib",[D.dv],"$ab")},
sfI:function(a){this.f=H.l(a,"$ib",[D.bF],"$ab")},
sfJ:function(a){this.r=H.l(a,"$ib",[D.e3],"$ab")},
sfK:function(a){this.x=H.l(a,"$ib",[D.eb],"$ab")},
sfL:function(a){this.y=H.l(a,"$ib",[D.ec],"$ab")},
sfM:function(a){this.z=H.l(a,"$ib",[D.ed],"$ab")},
$ai:function(){return[D.a5]},
$aW:function(){return[D.a5]}}
D.bF.prototype={
gn:function(){var u=this.r
if(u==null){u=D.L()
this.r=u}return u},
am:function(a){var u
H.f(a,"$iA")
u=this.r
if(u!=null)u.D(a)},
fH:function(){return this.am(null)},
$ia5:1,
$ib7:1}
D.e3.prototype={$ia5:1,$ib7:1}
D.eb.prototype={$ia5:1,$ib7:1}
D.ec.prototype={$ia5:1,$ib7:1}
D.ed.prototype={$ia5:1,$ib7:1}
V.a_.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
j:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.as.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.as))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
j:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.fV.prototype={}
V.cx.prototype={
a6:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return u},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cx))return!1
u=b.a
t=$.F()
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
if(typeof u!=="number")return u.H()
if(typeof r!=="number")return H.w(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=this.x
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){var u,t,s,r,q,p,o,n
u=[P.t]
t=V.cd(H.d([this.a,this.d,this.r],u),3,0)
s=V.cd(H.d([this.b,this.e,this.x],u),3,0)
r=V.cd(H.d([this.c,this.f,this.y],u),3,0)
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
V.af.prototype={
a6:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return u},
eK:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.F().a)return V.bC()
a8=1/a7
a9=-r
b0=-d
return V.b6((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
m:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
if(typeof p!=="number")return H.w(p)
o=this.d
n=b2.cx
m=b2.b
l=b2.f
k=b2.z
if(typeof k!=="number")return H.w(k)
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
if(typeof g!=="number")return H.w(g)
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
return V.b6(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
f7:function(a){var u,t,s,r,q,p,o,n,m,l
u=C.h.m(this.a,a.ge9(a))
t=C.h.m(this.b,a.gea(a))
s=C.h.m(this.c,a.geb())
r=C.h.m(this.e,a.ge9(a))
q=C.h.m(this.f,a.gea(a))
p=C.h.m(this.r,a.geb())
o=this.y
n=a.ge9(a)
if(typeof o!=="number")return o.m()
n=C.h.m(o,n)
o=this.z
m=a.gea(a)
if(typeof o!=="number")return o.m()
m=C.h.m(o,m)
o=this.Q
l=a.geb()
if(typeof o!=="number")return o.m()
return new V.R(u+t+s,r+q+p,n+m+C.h.m(o,l))},
b1:function(a){var u,t,s,r,q,p
u=a.a
t=a.b
s=a.c
if(typeof s!=="number")return H.w(s)
r=this.y
if(typeof r!=="number")return r.m()
q=this.z
if(typeof q!=="number")return q.m()
p=this.Q
if(typeof p!=="number")return p.m()
return new V.a6(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,r*u+q*t+p*s+this.ch)},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=$.F()
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
if(typeof u!=="number")return u.H()
if(typeof r!=="number")return H.w(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=this.z
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=this.Q
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-this.ch)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
j:function(a){return this.S()},
eB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.t]
t=V.cd(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.cd(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.cd(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.cd(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
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
S:function(){return this.eB("",3,0)},
E:function(a){return this.eB(a,3,0)}}
V.a9.prototype={
H:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
j:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.a6.prototype={
C:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.w(t)
return new V.a6(this.a+b.a,this.b+b.b,u+t)},
H:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.w(t)
return new V.a6(this.a-b.a,this.b-b.b,u-t)},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.F()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.H()
if(typeof r!=="number")return H.w(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
j:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.b9.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b9))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
j:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.c4.prototype={
gaF:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c4))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
j:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.Z.prototype={
cK:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.w(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.w(r)
return u*t+s*r},
m:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.m()
t=this.b
if(typeof t!=="number")return t.m()
return new V.Z(u*b,t*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.F().a){u=$.lR
if(u==null){u=new V.Z(0,0)
$.lR=u}return u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.Z(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=this.a
s=$.F()
s.toString
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.w(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.R.prototype={
cK:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t
u=this.c
t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.w(t)
return this.a*a.a+this.b*a.b+u*t},
cL:function(a,b){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=a.c
if(typeof r!=="number")return r.H()
if(typeof s!=="number")return H.w(s)
return new V.R(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
b8:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
if(typeof t!=="number")return H.w(t)
s=this.c
r=a.b
if(typeof s!=="number")return s.m()
q=a.a
p=this.a
return new V.R(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){var u,t,s,r
u=b.a
t=b.b
s=this.c
r=b.c
if(typeof s!=="number")return s.C()
if(typeof r!=="number")return H.w(r)
return new V.R(this.a+u,this.b+t,s+r)},
U:function(a){var u=this.c
if(typeof u!=="number")return u.U()
return new V.R(-this.a,-this.b,-u)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.R(this.a*b,this.b*b,u*b)},
A:function(a,b){var u
if(Math.abs(b-0)<$.F().a)return V.cW()
u=this.c
if(typeof u!=="number")return u.A()
return new V.R(this.a/b,this.b/b,u/b)},
eL:function(){var u,t,s
u=$.F()
t=u.a
if(!(Math.abs(0-this.a)<t))return!1
if(!(Math.abs(0-this.b)<t))return!1
s=this.c
u.toString
if(typeof s!=="number")return H.w(s)
if(!(Math.abs(0-s)<t))return!1
return!0},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.F()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.H()
if(typeof r!=="number")return H.w(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
j:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
U.fD.prototype={
c5:function(a){var u=V.kw(a,this.c,this.b)
return u},
gn:function(){var u=this.y
if(u==null){u=D.L()
this.y=u}return u},
P:function(a){var u=this.y
if(u!=null)u.D(a)},
sfd:function(a,b){},
seM:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.F().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.c5(t)}u=new D.x("maximumLocation",u,this.b,this,[P.t])
u.b=!0
this.P(u)}},
seO:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.F().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.c5(t)}u=new D.x("minimumLocation",u,this.c,this,[P.t])
u.b=!0
this.P(u)}},
sa9:function(a,b){var u
b=this.c5(b)
u=this.d
if(!(Math.abs(u-b)<$.F().a)){this.d=b
u=new D.x("location",u,b,this,[P.t])
u.b=!0
this.P(u)}},
seN:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.F().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.x("maximumVelocity",u,a,this,[P.t])
u.b=!0
this.P(u)}},
sa4:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.F().a)){this.f=a
u=new D.x("velocity",u,a,this,[P.t])
u.b=!0
this.P(u)}},
se4:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.F().a)){this.x=a
u=new D.x("dampening",u,a,this,[P.t])
u.b=!0
this.P(u)}},
ab:function(a,b){var u,t,s,r,q
u=this.f
t=$.F().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa9(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.F().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sa4(s)}}}
U.dr.prototype={
gn:function(){var u=this.b
if(u==null){u=D.L()
this.b=u}return u},
aH:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dr))return!1
return J.P(this.a,b.a)},
j:function(a){return"Constant: "+this.a.E("          ")}}
U.ct.prototype={
gn:function(){var u=this.e
if(u==null){u=D.L()
this.e=u}return u},
P:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.D(a)},
az:function(){return this.P(null)},
fO:function(a,b){var u,t,s,r,q,p,o,n
u=U.ah
H.l(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gbq(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.E)(b),++p){o=b[p]
if(o!=null){n=o.gn()
n.toString
H.m(s,r)
if(n.a==null)n.sad(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bz(a,b,this,[u])
u.b=!0
this.P(u)},
iq:function(a,b){var u,t,s
u=U.ah
H.l(b,"$ii",[u],"$ai")
for(t=b.gW(b),s=this.gbq();t.B();)t.gO(t).gn().G(0,s)
u=new D.bA(a,b,this,[u])
u.b=!0
this.P(u)},
aH:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.Y()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.an(u,u.length,0,[H.v(u,0)]),s=null;u.B();){t=u.d
if(t!=null){r=t.aH(0,b,c)
if(r!=null)s=s==null?r:r.m(0,s)}}this.f=s==null?V.bC():s
u=this.e
if(u!=null)u.ag(0)}return this.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ct))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.P(s,r[t]))return!1}return!0},
j:function(a){return"Group"},
$ai:function(){return[U.ah]},
$aW:function(){return[U.ah]},
$iah:1}
U.ah.prototype={}
U.e0.prototype={
gn:function(){var u=this.y
if(u==null){u=D.L()
this.y=u}return u},
P:function(a){var u=this.y
if(u!=null)u.D(a)},
sfe:function(a){var u
a=V.kw(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.F().a)){this.a=a
u=new D.x("yaw",u,a,this,[P.t])
u.b=!0
this.P(u)}},
seY:function(a,b){var u
b=V.kw(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.F().a)){this.b=b
u=new D.x("pitch",u,b,this,[P.t])
u.b=!0
this.P(u)}},
sf1:function(a){var u
a=V.kw(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.F().a)){this.c=a
u=new D.x("roll",u,a,this,[P.t])
u.b=!0
this.P(u)}},
aH:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.sfe(this.a+this.d*b.y)
this.seY(0,this.b+this.e*b.y)
this.sf1(this.c+this.f*b.y)
u=this.c
s=Math.cos(u)
r=Math.sin(u)
this.x=V.b6(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1).m(0,V.lx(this.b)).m(0,V.lw(this.a))
u=this.y
if(u!=null)u.ag(0)}return this.x},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e0))return!1
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
j:function(a){return"Rotater: ["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"], ["+V.O(this.d,3,0)+", "+V.O(this.e,3,0)+", "+V.O(this.f,3,0)+"]"}}
U.en.prototype={
gn:function(){var u=this.fx
if(u==null){u=D.L()
this.fx=u}return u},
P:function(a){var u
H.f(a,"$iA")
u=this.fx
if(u!=null)u.D(a)},
az:function(){return this.P(null)},
cq:function(a){var u,t
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.b
if(t==null){t=D.L()
u.b=t
u=t}else u=t
u.h(0,this.ghz())
u=this.a.c
t=u.d
if(t==null){t=D.L()
u.d=t
u=t}else u=t
u.h(0,this.ghB())
u=this.a.c
t=u.c
if(t==null){t=D.L()
u.c=t
u=t}else u=t
u.h(0,this.ghD())
u=this.a.d
t=u.f
if(t==null){t=D.L()
u.f=t
u=t}else u=t
u.h(0,this.ghv())
u=this.a.d
t=u.d
if(t==null){t=D.L()
u.d=t
u=t}else u=t
u.h(0,this.ghx())
u=this.a.e
t=u.b
if(t==null){t=D.L()
u.b=t
u=t}else u=t
u.h(0,this.gjf())
u=this.a.e
t=u.d
if(t==null){t=D.L()
u.d=t
u=t}else u=t
u.h(0,this.gjd())
u=this.a.e
t=u.c
if(t==null){t=D.L()
u.c=t
u=t}else u=t
u.h(0,this.gjb())
return!0},
ay:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.U()
u=-u}if(this.r){if(typeof t!=="number")return t.U()
t=-t}return new V.Z(u,t)},
hA:function(a){a=H.h(H.f(a,"$iA"),"$ibD")
if(!J.P(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
hC:function(a){var u,t,s,r,q,p,o
a=H.h(H.f(a,"$iA"),"$ibD")
if(!this.cx)return
if(this.ch){u=a.d.H(0,a.y)
u=new V.Z(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.H(0,a.y)
u=this.ay(new V.Z(t.a,t.b).m(0,2).A(0,u.gaF()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.U()
s=this.y
if(typeof s!=="number")return H.w(s)
t.sa4(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.U()
t=this.x
if(typeof t!=="number")return H.w(t)
s.sa4(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=this.ay(new V.Z(s.a,s.b).m(0,2).A(0,u.gaF()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.w(p)
o=this.cy
if(typeof o!=="number")return H.w(o)
s.sa9(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.w(q)
s=this.db
if(typeof s!=="number")return H.w(s)
o.sa9(0,-p*q+s)
this.b.sa4(0)
this.c.sa4(0)
t=t.H(0,a.z)
this.dx=this.ay(new V.Z(t.a,t.b).m(0,2).A(0,u.gaF()))}this.az()},
hE:function(a){var u,t,s
H.f(a,"$iA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.U()
s=this.y
if(typeof s!=="number")return H.w(s)
u.sa4(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.U()
u=this.x
if(typeof u!=="number")return H.w(u)
s.sa4(-t*10*u)
this.az()}},
hw:function(a){if(H.h(H.f(a,"$iA"),"$idO").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hy:function(a){var u,t,s,r,q,p,o
a=H.h(H.f(a,"$iA"),"$ibD")
if(!J.P(this.d,a.x.b))return
u=a.c
t=a.d
s=t.H(0,a.y)
r=this.ay(new V.Z(s.a,s.b).m(0,2).A(0,u.gaF()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.w(p)
o=this.cy
if(typeof o!=="number")return H.w(o)
s.sa9(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.w(q)
s=this.db
if(typeof s!=="number")return H.w(s)
o.sa9(0,-p*q+s)
this.b.sa4(0)
this.c.sa4(0)
t=t.H(0,a.z)
this.dx=this.ay(new V.Z(t.a,t.b).m(0,2).A(0,u.gaF()))
this.az()},
jg:function(a){H.f(a,"$iA")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
je:function(a){var u,t,s,r,q,p,o
a=H.h(H.f(a,"$iA"),"$ieg")
if(!this.cx)return
if(this.ch){u=a.d.H(0,a.y)
u=new V.Z(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.H(0,a.y)
u=this.ay(new V.Z(t.a,t.b).m(0,2).A(0,u.gaF()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.U()
s=this.y
if(typeof s!=="number")return H.w(s)
t.sa4(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.U()
t=this.x
if(typeof t!=="number")return H.w(t)
s.sa4(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=this.ay(new V.Z(s.a,s.b).m(0,2).A(0,u.gaF()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.w(p)
o=this.cy
if(typeof o!=="number")return H.w(o)
s.sa9(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.w(q)
s=this.db
if(typeof s!=="number")return H.w(s)
o.sa9(0,-p*q+s)
this.b.sa4(0)
this.c.sa4(0)
t=t.H(0,a.z)
this.dx=this.ay(new V.Z(t.a,t.b).m(0,2).A(0,u.gaF()))}this.az()},
jc:function(a){var u,t,s
H.f(a,"$iA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.U()
s=this.y
if(typeof s!=="number")return H.w(s)
u.sa4(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.U()
u=this.x
if(typeof u!=="number")return H.w(u)
s.sa4(-t*10*u)
this.az()}},
aH:function(a,b,c){var u,t,s
u=this.dy
t=b.e
if(typeof u!=="number")return u.Y()
if(u<t){this.dy=t
s=b.y
this.c.ab(0,s)
this.b.ab(0,s)
this.fr=V.lw(this.b.d).m(0,V.lx(this.c.d))}return this.fr},
$iah:1}
U.eo.prototype={
gn:function(){var u=this.r
if(u==null){u=D.L()
this.r=u}return u},
P:function(a){var u=this.r
if(u!=null)u.D(a)},
cq:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.L()
u.e=t
u=t}else u=t
t=this.ghF()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.L()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hG:function(a){var u,t,s,r
H.f(a,"$iA")
if(!J.P(this.b,this.a.b.c))return
H.h(a,"$icA")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){this.d=r
u=new D.x("zoom",u,r,this,[P.t])
u.b=!0
this.P(u)}},
aH:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.b6(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iah:1}
M.dq.prototype={
gn:function(){var u=this.f
if(u==null){u=D.L()
this.f=u}return u},
Z:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.D(a)},
b2:function(){return this.Z(null)},
iu:function(a,b){var u,t,s,r,q,p,o,n
u=M.ax
H.l(b,"$ii",[u],"$ai")
for(t=b.length,s=this.ga2(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.E)(b),++p){o=b[p]
if(o!=null){n=o.gn()
n.toString
H.m(s,r)
if(n.a==null)n.sad(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bz(a,b,this,[u])
u.b=!0
this.Z(u)},
iw:function(a,b){var u,t,s
u=M.ax
H.l(b,"$ii",[u],"$ai")
for(t=b.gW(b),s=this.ga2();t.B();)t.gO(t).gn().G(0,s)
u=new D.bA(a,b,this,[u])
u.b=!0
this.Z(u)},
aa:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.an(u,u.length,0,[H.v(u,0)]);u.B();){t=u.d
if(t!=null)t.aa(a)}this.e=!1},
$ai:function(){return[M.ax]},
$aW:function(){return[M.ax]},
$iax:1}
M.ds.prototype={
gn:function(){var u=this.f
if(u==null){u=D.L()
this.f=u}return u},
Z:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.D(a)},
b2:function(){return this.Z(null)},
sb0:function(a,b){var u,t
if(b==null)b=X.kE(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gn().G(0,this.ga2())
t=this.b
this.b=b
b.gn().h(0,this.ga2())
u=new D.x("target",t,this.b,this,[X.cL])
u.b=!0
this.Z(u)}},
saj:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gn().G(0,this.ga2())
t=this.c
this.c=a
if(a!=null)a.gn().h(0,this.ga2())
u=new D.x("technique",t,this.c,this,[O.bp])
u.b=!0
this.Z(u)}},
aa:function(a){var u,t
a.cR(this.c)
this.b.X(a)
u=this.a
u.toString
a.cy.bT(V.bC())
t=V.bC()
u.a
a.db.bT(t)
u=this.c
if(u!=null)u.ab(0,a)
this.d.ab(0,a)
this.d.aa(a)
this.a.toString
a.cy.bh()
a.db.bh()
this.b.toString
a.cP()},
$iax:1}
M.dy.prototype={
Z:function(a){var u
H.f(a,"$iA")
u=this.x
if(u!=null)u.D(a)},
b2:function(){return this.Z(null)},
hQ:function(a,b){var u,t,s,r,q,p,o,n
u=E.ai
H.l(b,"$ii",[u],"$ai")
for(t=b.length,s=this.ga2(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.E)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bx()
n.sad(null)
n.saU(null)
n.c=null
n.d=0
o.z=n}H.m(s,r)
if(n.a==null)n.sad(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bz(a,b,this,[u])
u.b=!0
this.Z(u)},
hS:function(a,b){var u,t,s
u=E.ai
H.l(b,"$ii",[u],"$ai")
for(t=b.gW(b),s=this.ga2();t.B();)t.gO(t).gn().G(0,s)
u=new D.bA(a,b,this,[u])
u.b=!0
this.Z(u)},
scv:function(a){var u,t
if(a==null)a=X.lB(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gn().G(0,this.ga2())
t=this.a
this.a=a
a.gn().h(0,this.ga2())
u=new D.x("camera",t,this.a,this,[X.bS])
u.b=!0
this.Z(u)}},
sb0:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gn().G(0,this.ga2())
t=this.b
this.b=b
b.gn().h(0,this.ga2())
u=new D.x("target",t,this.b,this,[X.cL])
u.b=!0
this.Z(u)}},
saj:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gn().G(0,this.ga2())
t=this.c
this.c=a
if(a!=null)a.gn().h(0,this.ga2())
u=new D.x("technique",t,this.c,this,[O.bp])
u.b=!0
this.Z(u)}},
gn:function(){var u=this.x
if(u==null){u=D.L()
this.x=u}return u},
aa:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a.cR(this.c)
this.b.X(a)
u=this.a
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.b6(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.bT(m)
t=$.lC
if(t==null){t=V.lE()
s=$.lT
if(s==null){s=new V.R(0,1,0)
$.lT=s}r=$.lS
if(r==null){r=new V.R(0,0,-1)
$.lS=r}l=r.A(0,Math.sqrt(r.I(r)))
s=s.b8(l)
k=s.A(0,Math.sqrt(s.I(s)))
j=l.b8(k)
i=new V.R(t.a,t.b,t.c)
h=k.U(0).I(i)
g=j.U(0).I(i)
f=l.U(0).I(i)
t=V.b6(k.a,j.a,l.a,h,k.b,j.b,l.b,g,k.c,j.c,l.c,f,0,0,0,1)
$.lC=t
e=t}else e=t
t=u.b
if(t!=null){d=t.aH(0,a,u)
if(d!=null)e=d.m(0,e)}a.db.bT(e)
u=this.c
if(u!=null)u.ab(0,a)
for(u=this.d.a,u=new J.an(u,u.length,0,[H.v(u,0)]);u.B();)u.d.ab(0,a)
for(u=this.d.a,u=new J.an(u,u.length,0,[H.v(u,0)]);u.B();)u.d.aa(a)
this.a.toString
a.cy.bh()
a.db.bh()
this.b.aQ(a)
a.cP()},
sh0:function(a,b){this.d=H.l(b,"$iW",[E.ai],"$aW")},
$iax:1}
M.ax.prototype={}
A.dk.prototype={}
A.fo.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ka:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
C.b.ed(r.a,r.c)}},
bz:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
C.b.e8(r.a,r.c)}}}
A.du.prototype={}
A.dC.prototype={
ae:function(a,b,c){if(c==null||!c.d)C.b.M(b.a,b.d,1)
else{a.d2(c)
C.b.M(b.a,b.d,0)}}}
A.dQ.prototype={
fw:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.aq("")
t=a6.fx
if(t){u.a="uniform mat4 objMat;\n"
s="uniform mat4 objMat;\n"}else s=""
r=a6.fy
if(r){s+="uniform mat4 viewObjMat;\n"
u.a=s}s+="uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s+="attribute vec3 posAttr;\n"
u.a=s
q=a6.r1
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=a6.r2
if(p){s+="attribute vec3 binmAttr;\n"
u.a=s}u.a=s+"\n"
a6.jp(u)
a6.jw(u)
a6.jq(u)
a6.jE(u)
a6.jF(u)
a6.jy(u)
a6.jJ(u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=a6.x1
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
u.a=s}if(a6.rx){s+="   txt2D = getTxt2D();\n"
u.a=s}if(a6.ry){s+="   txtCube = getTxtCube();\n"
u.a=s}if(a6.k3){s+="   objPos = getObjPos();\n"
u.a=s}if(a6.k4){s+="   viewPos = getViewPos();\n"
u.a=s}s+="   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
q=this.z
u=new P.aq("")
u.a="precision mediump float;\n"
u.a="precision mediump float;\n\n"
p=q.r1
if(p){u.a="precision mediump float;\n\nvarying vec3 normalVec;\n"
o="precision mediump float;\n\nvarying vec3 normalVec;\n"}else o="precision mediump float;\n\n"
if(q.r2){o+="varying vec3 binormalVec;\n"
u.a=o}if(q.rx){o+="varying vec2 txt2D;\n"
u.a=o}if(q.ry){o+="varying vec3 txtCube;\n"
u.a=o}if(q.k3){o+="varying vec3 objPos;\n"
u.a=o}if(q.k4){o+="varying vec3 viewPos;\n"
u.a=o}o+="\n"
u.a=o
n=q.y2
if(n){o+="uniform mat4 colorMat;\n"
u.a=o}if(q.fr){o+="uniform mat4 invViewMat;\n"
u.a=o}u.a=o+"\n"
q.jt(u)
q.jo(u)
q.jr(u)
q.ju(u)
q.jC(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.jA(u)
q.jB(u)}q.jx(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
if(l!==C.d){m+="uniform float alpha;\n"
u.a=m
if(l!==C.j){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.f){m+="uniform sampler2D alphaTxt;\n"
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
case C.f:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.d([],[P.j])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.F(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.js(u)
q.jz(u)
q.jD(u)
q.jG(u)
q.jH(u)
q.jI(u)
q.jv(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m+="   float alpha = alphaValue();\n"
u.a=m
if(p){p=m+"   vec3 norm = normal();\n"
u.a=p}else p=m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.d([],[P.j])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(q.c!==C.d)u.a+="   setDiffuseColor();\n"
if(q.d!==C.d)u.a+="   setInvDiffuseColor();\n"
if(q.e!==C.d)u.a+="   setSpecularColor();\n"
if(q.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(q.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(q.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(q.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(q.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(q.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(q.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(q.a!==C.d)C.a.h(j,"emission()")
if(q.r!==C.d)C.a.h(j,"reflect(refl)")
if(q.x!==C.d)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.F(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.bP(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.i(0,"posAttr")
this.cx=this.x.i(0,"normAttr")
this.ch=this.x.i(0,"binmAttr")
this.cy=this.x.i(0,"txt2DAttr")
this.db=this.x.i(0,"txtCubeAttr")
this.dx=this.x.i(0,"bendAttr")
if(a6.fr)this.id=H.h(this.y.p(0,"invViewMat"),"$iab")
if(t)this.dy=H.h(this.y.p(0,"objMat"),"$iab")
if(r)this.fr=H.h(this.y.p(0,"viewObjMat"),"$iab")
this.fy=H.h(this.y.p(0,"projViewObjMat"),"$iab")
if(a6.x2)this.k1=H.h(this.y.p(0,"txt2DMat"),"$ic6")
if(a6.y1)this.k2=H.h(this.y.p(0,"txtCubeMat"),"$iab")
if(a6.y2)this.k3=H.h(this.y.p(0,"colorMat"),"$iab")
this.sfW(H.d([],[A.ab]))
t=a6.aD
if(t>0){this.k4=H.f(this.y.p(0,"bendMatCount"),"$iJ")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.i(0,q)
if(g==null)H.q(P.u("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.h(g,"$iab"))}}t=a6.a
if(t!==C.d){this.r2=H.h(this.y.p(0,"emissionClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.f:this.rx=H.h(this.y.p(0,"emissionTxt"),"$ia7")
this.x1=H.h(this.y.p(0,"nullEmissionTxt"),"$iJ")
break
case C.i:this.ry=H.h(this.y.p(0,"emissionTxt"),"$iar")
this.x1=H.h(this.y.p(0,"nullEmissionTxt"),"$iJ")
break}}t=a6.b
if(t!==C.d){this.x2=H.h(this.y.p(0,"ambientClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.f:this.y1=H.h(this.y.p(0,"ambientTxt"),"$ia7")
this.aD=H.h(this.y.p(0,"nullAmbientTxt"),"$iJ")
break
case C.i:this.y2=H.h(this.y.p(0,"ambientTxt"),"$iar")
this.aD=H.h(this.y.p(0,"nullAmbientTxt"),"$iJ")
break}}t=a6.c
if(t!==C.d){this.aw=H.h(this.y.p(0,"diffuseClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.f:this.bA=H.h(this.y.p(0,"diffuseTxt"),"$ia7")
this.bB=H.h(this.y.p(0,"nullDiffuseTxt"),"$iJ")
break
case C.i:this.ee=H.h(this.y.p(0,"diffuseTxt"),"$iar")
this.bB=H.h(this.y.p(0,"nullDiffuseTxt"),"$iJ")
break}}t=a6.d
if(t!==C.d){this.bC=H.h(this.y.p(0,"invDiffuseClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.f:this.ef=H.h(this.y.p(0,"invDiffuseTxt"),"$ia7")
this.bD=H.h(this.y.p(0,"nullInvDiffuseTxt"),"$iJ")
break
case C.i:this.eg=H.h(this.y.p(0,"invDiffuseTxt"),"$iar")
this.bD=H.h(this.y.p(0,"nullInvDiffuseTxt"),"$iJ")
break}}t=a6.e
if(t!==C.d){this.bG=H.h(this.y.p(0,"shininess"),"$iT")
this.bE=H.h(this.y.p(0,"specularClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.f:this.eh=H.h(this.y.p(0,"specularTxt"),"$ia7")
this.bF=H.h(this.y.p(0,"nullSpecularTxt"),"$iJ")
break
case C.i:this.ei=H.h(this.y.p(0,"specularTxt"),"$iar")
this.bF=H.h(this.y.p(0,"nullSpecularTxt"),"$iJ")
break}}switch(a6.f){case C.d:break
case C.j:break
case C.f:this.ej=H.h(this.y.p(0,"bumpTxt"),"$ia7")
this.bH=H.h(this.y.p(0,"nullBumpTxt"),"$iJ")
break
case C.i:this.ek=H.h(this.y.p(0,"bumpTxt"),"$iar")
this.bH=H.h(this.y.p(0,"nullBumpTxt"),"$iJ")
break}if(a6.dy){this.el=H.h(this.y.p(0,"envSampler"),"$iar")
this.em=H.h(this.y.p(0,"nullEnvTxt"),"$iJ")
t=a6.r
if(t!==C.d){this.bI=H.h(this.y.p(0,"reflectClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.f:this.en=H.h(this.y.p(0,"reflectTxt"),"$ia7")
this.bJ=H.h(this.y.p(0,"nullReflectTxt"),"$iJ")
break
case C.i:this.eo=H.h(this.y.p(0,"reflectTxt"),"$iar")
this.bJ=H.h(this.y.p(0,"nullReflectTxt"),"$iJ")
break}}t=a6.x
if(t!==C.d){this.bK=H.h(this.y.p(0,"refraction"),"$iT")
this.bL=H.h(this.y.p(0,"refractClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.f:this.ep=H.h(this.y.p(0,"refractTxt"),"$ia7")
this.bM=H.h(this.y.p(0,"nullRefractTxt"),"$iJ")
break
case C.i:this.eq=H.h(this.y.p(0,"refractTxt"),"$iar")
this.bM=H.h(this.y.p(0,"nullRefractTxt"),"$iJ")
break}}}t=a6.y
if(t!==C.d){this.bN=H.h(this.y.p(0,"alpha"),"$iT")
switch(t){case C.d:break
case C.j:break
case C.f:this.er=H.h(this.y.p(0,"alphaTxt"),"$ia7")
this.bO=H.h(this.y.p(0,"nullAlphaTxt"),"$iJ")
break
case C.i:this.es=H.h(this.y.p(0,"alphaTxt"),"$iar")
this.bO=H.h(this.y.p(0,"nullAlphaTxt"),"$iJ")
break}}this.sh9(H.d([],[A.cO]))
this.siD(H.d([],[A.cP]))
this.sj2(H.d([],[A.cQ]))
this.sji(H.d([],[A.cR]))
this.sjj(H.d([],[A.cS]))
this.sjk(H.d([],[A.cT]))
if(a6.k2){t=a6.z
if(t>0){this.eu=H.f(this.y.p(0,"dirLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.i(0,r)
if(g==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iM")
s=this.y
r="dirLights["+h+"].color"
f=s.i(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iM")
s=this.cB;(s&&C.a).h(s,new A.cO(h,g,f))}}t=a6.Q
if(t>0){this.ev=H.f(this.y.p(0,"pntLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.i(0,r)
if(g==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iM")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.i(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iM")
s=this.y
r="pntLights["+h+"].color"
e=s.i(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iM")
s=this.y
r="pntLights["+h+"].att0"
d=s.i(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iT")
s=this.y
r="pntLights["+h+"].att1"
c=s.i(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iT")
s=this.y
r="pntLights["+h+"].att2"
b=s.i(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iT")
s=this.cC;(s&&C.a).h(s,new A.cP(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.ew=H.f(this.y.p(0,"spotLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.i(0,r)
if(g==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iM")
s=this.y
r="spotLights["+h+"].objDir"
f=s.i(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iM")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.i(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iM")
s=this.y
r="spotLights["+h+"].color"
d=s.i(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iM")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.i(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iT")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.i(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iT")
s=this.y
r="spotLights["+h+"].att0"
a=s.i(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iT")
s=this.y
r="spotLights["+h+"].att1"
a0=s.i(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a0,"$iT")
s=this.y
r="spotLights["+h+"].att2"
a1=s.i(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a1,"$iT")
s=this.cD;(s&&C.a).h(s,new A.cQ(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.ex=H.f(this.y.p(0,"txtDirLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.i(0,r)
if(g==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iM")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.i(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iM")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.i(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iM")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.i(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iM")
s=this.y
r="txtDirLights["+h+"].color"
c=s.i(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iM")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.i(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iJ")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.i(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$ia7")
s=this.cE;(s&&C.a).h(s,new A.cR(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.ey=H.f(this.y.p(0,"txtPntLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.i(0,r)
if(g==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iM")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.i(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iM")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.i(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$ic6")
s=this.y
r="txtPntLights["+h+"].color"
d=s.i(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iM")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.i(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iJ")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.i(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iT")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.i(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iT")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.i(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a0,"$iT")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.i(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a1,"$iar")
s=this.cF;(s&&C.a).h(s,new A.cS(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.ez=H.f(this.y.p(0,"txtSpotLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.i(0,r)
if(g==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iM")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.i(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iM")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.i(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iM")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.i(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iM")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.i(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iM")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.i(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iJ")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.i(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iM")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.i(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a0,"$iT")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.i(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a1,"$iT")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.i(0,r)
if(a2==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a2,"$iT")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.i(0,r)
if(a3==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a3,"$iT")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.i(0,r)
if(a4==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a4,"$iT")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.i(0,r)
if(a5==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a5,"$ia7")
s=this.cG;(s&&C.a).h(s,new A.cT(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ae:function(a,b,c){if(c==null||!c.d)C.b.M(b.a,b.d,1)
else{a.d2(c)
C.b.M(b.a,b.d,0)}},
an:function(a,b,c){C.b.M(b.a,b.d,1)},
sfW:function(a){this.r1=H.l(a,"$ib",[A.ab],"$ab")},
sh9:function(a){this.cB=H.l(a,"$ib",[A.cO],"$ab")},
siD:function(a){this.cC=H.l(a,"$ib",[A.cP],"$ab")},
sj2:function(a){this.cD=H.l(a,"$ib",[A.cQ],"$ab")},
sji:function(a){this.cE=H.l(a,"$ib",[A.cR],"$ab")},
sjj:function(a){this.cF=H.l(a,"$ib",[A.cS],"$ab")},
sjk:function(a){this.cG=H.l(a,"$ib",[A.cT],"$ab")}}
A.ht.prototype={
jp:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aD+"];\n"
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
jw:function(a){var u
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
jq:function(a){var u
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
jE:function(a){var u,t
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
jF:function(a){var u,t
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
jy:function(a){var u
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
jJ:function(a){var u
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
aL:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.e(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.aJ(c,1))+"Txt;\n"
a.a=u
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jt:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aL(a,u,"emission")
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
case C.f:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
jo:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aL(a,u,"ambient")
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
case C.f:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
jr:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aL(a,u,"diffuse")
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
case C.f:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
ju:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aL(a,u,"invDiffuse")
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
case C.f:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
jC:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aL(a,u,"specular")
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
case C.f:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
jx:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.d:break
case C.j:break
case C.f:u+="uniform sampler2D bumpTxt;\n"
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
case C.f:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
jA:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aL(a,u,"reflect")
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
case C.f:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jB:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aL(a,u,"refract")
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
case C.f:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
js:function(a){var u,t
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
jz:function(a){var u,t
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
jD:function(a){var u,t
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
jG:function(a){var u,t,s
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
jH:function(a){var u,t,s
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
jI:function(a){var u,t,s
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
jv:function(a){var u
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
j:function(a){return this.aw}}
A.cO.prototype={}
A.cR.prototype={}
A.cP.prototype={}
A.cS.prototype={}
A.cQ.prototype={}
A.cT.prototype={}
A.cI.prototype={
bn:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bP:function(a,b,c){var u,t,s
this.c=b
this.d=c
this.e=this.dm(b,35633)
this.f=this.dm(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dS(u,t,this.e)
C.b.dS(u,this.r,this.f)
C.b.ko(u,this.r)
if(!H.mf(C.b.c1(u,this.r,35714))){s=C.b.fk(u,this.r)
C.b.k_(u,this.r)
H.q(P.u("Failed to link shader: "+H.n(s)))}this.iY()
this.j_()},
X:function(a){C.b.bl(a.a,this.r)
this.x.ka()},
dm:function(a,b){var u,t,s
u=this.a
t=C.b.jY(u,b)
C.b.fp(u,t,a)
C.b.jV(u,t)
if(!H.mf(C.b.fm(u,t,35713))){s=C.b.fl(u,t)
C.b.k0(u,t)
throw H.c(P.u("Error compiling shader '"+H.n(t)+"': "+H.n(s)))}return t},
iY:function(){var u,t,s,r,q,p
u=H.d([],[A.dk])
t=this.a
s=H.ae(C.b.c1(t,this.r,35721))
if(typeof s!=="number")return H.w(s)
r=0
for(;r<s;++r){q=C.b.fg(t,this.r,r)
p=C.b.fi(t,this.r,q.name)
C.a.h(u,new A.dk(t,q.name,p))}this.x=new A.fo(u)},
j_:function(){var u,t,s,r,q,p
u=H.d([],[A.eh])
t=this.a
s=H.ae(C.b.c1(t,this.r,35718))
if(typeof s!=="number")return H.w(s)
r=0
for(;r<s;++r){q=C.b.fh(t,this.r,r)
p=C.b.fn(t,this.r,q.name)
C.a.h(u,this.jZ(q.type,q.size,q.name,p))}this.y=new A.iI(u)},
aT:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.J(u,t,b,c)
else return A.kP(u,t,b,a,c)},
h4:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a7(u,t,b,c)
else return A.kP(u,t,b,a,c)},
h5:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ar(u,t,b,c)
else return A.kP(u,t,b,a,c)},
bs:function(a,b){return new P.ey(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.n(b)+"."))},
jZ:function(a,b,c,d){switch(a){case 5120:return this.aT(b,c,d)
case 5121:return this.aT(b,c,d)
case 5122:return this.aT(b,c,d)
case 5123:return this.aT(b,c,d)
case 5124:return this.aT(b,c,d)
case 5125:return this.aT(b,c,d)
case 5126:return new A.T(this.a,this.r,c,d)
case 35664:return new A.ay(this.a,this.r,c,d)
case 35665:return new A.M(this.a,this.r,c,d)
case 35666:return new A.ei(this.a,this.r,c,d)
case 35667:return new A.iF(this.a,this.r,c,d)
case 35668:return new A.iG(this.a,this.r,c,d)
case 35669:return new A.iH(this.a,this.r,c,d)
case 35674:return new A.iJ(this.a,this.r,c,d)
case 35675:return new A.c6(this.a,this.r,c,d)
case 35676:return new A.ab(this.a,this.r,c,d)
case 35678:return this.h4(b,c,d)
case 35680:return this.h5(b,c,d)
case 35670:throw H.c(this.bs("BOOL",c))
case 35671:throw H.c(this.bs("BOOL_VEC2",c))
case 35672:throw H.c(this.bs("BOOL_VEC3",c))
case 35673:throw H.c(this.bs("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.n(a)+" for "+H.n(c)+"."))}}}
A.bW.prototype={
j:function(a){return this.b}}
A.ea.prototype={
fC:function(a,b){var u,t,s,r,q
this.bP(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.nz(a))
this.z=this.x.i(0,"posAttr")
this.Q=H.h(this.y.p(0,"txtCount"),"$iJ")
this.ch=H.h(this.y.p(0,"backClr"),"$iei")
this.sjl(H.d([],[A.a7]))
this.sh1(H.d([],[A.ab]))
u=[A.ay]
this.sj3(H.d([],u))
this.sj4(H.d([],u))
this.sh7(H.d([],u))
this.sh8(H.d([],u))
this.shi(H.d([],[A.J]))
for(t=0;t<a;++t){u=this.cx
s=this.y
r="txt"+t
q=s.i(0,r)
if(q==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.h(q,"$ia7"))
u=this.cy
s=this.y
r="clrMat"+t
q=s.i(0,r)
if(q==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.h(q,"$iab"))
u=this.db
s=this.y
r="srcLoc"+t
q=s.i(0,r)
if(q==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.h(q,"$iay"))
u=this.dx
s=this.y
r="srcSize"+t
q=s.i(0,r)
if(q==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.h(q,"$iay"))
u=this.dy
s=this.y
r="destLoc"+t
q=s.i(0,r)
if(q==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.h(q,"$iay"))
u=this.fr
s=this.y
r="destSize"+t
q=s.i(0,r)
if(q==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.h(q,"$iay"))
u=this.fx
s=this.y
r="flip"+t
q=s.i(0,r)
if(q==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.h(q,"$iJ"))}},
sjl:function(a){this.cx=H.l(a,"$ib",[A.a7],"$ab")},
sh1:function(a){this.cy=H.l(a,"$ib",[A.ab],"$ab")},
sj3:function(a){this.db=H.l(a,"$ib",[A.ay],"$ab")},
sj4:function(a){this.dx=H.l(a,"$ib",[A.ay],"$ab")},
sh7:function(a){this.dy=H.l(a,"$ib",[A.ay],"$ab")},
sh8:function(a){this.fr=H.l(a,"$ib",[A.ay],"$ab")},
shi:function(a){this.fx=H.l(a,"$ib",[A.J],"$ab")}}
A.eh.prototype={}
A.iI.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.i(0,b)
if(u==null)throw H.c(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
j:function(a){return this.S()},
kg:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r)s+=u[r].j(0)+a
return s},
S:function(){return this.kg("\n")}}
A.J.prototype={
j:function(a){return"Uniform1i: "+H.n(this.c)}}
A.iF.prototype={
j:function(a){return"Uniform2i: "+H.n(this.c)}}
A.iG.prototype={
j:function(a){return"Uniform3i: "+H.n(this.c)}}
A.iH.prototype={
j:function(a){return"Uniform4i: "+H.n(this.c)}}
A.iE.prototype={
j:function(a){return"Uniform1iv: "+H.n(this.c)},
sjm:function(a){this.e=H.l(a,"$ib",[P.o],"$ab")}}
A.T.prototype={
j:function(a){return"Uniform1f: "+H.n(this.c)}}
A.ay.prototype={
j:function(a){return"Uniform2f: "+H.n(this.c)}}
A.M.prototype={
j:function(a){return"Uniform3f: "+H.n(this.c)}}
A.ei.prototype={
j:function(a){return"Uniform4f: "+H.n(this.c)}}
A.iJ.prototype={
j:function(a){return"Uniform1Mat2 "+H.n(this.c)}}
A.c6.prototype={
ac:function(a){var u=new Float32Array(H.bL(H.l(a,"$ib",[P.t],"$ab")))
C.b.f8(this.a,this.d,!1,u)},
j:function(a){return"UniformMat3: "+H.n(this.c)}}
A.ab.prototype={
ac:function(a){var u=new Float32Array(H.bL(H.l(a,"$ib",[P.t],"$ab")))
C.b.cX(this.a,this.d,!1,u)},
j:function(a){return"UniformMat4: "+H.n(this.c)}}
A.a7.prototype={
d2:function(a){var u,t,s
u=a==null||!a.d
t=this.a
s=this.d
if(u)C.b.M(t,s,0)
else C.b.M(t,s,a.a)},
j:function(a){return"UniformSampler2D: "+H.n(this.c)}}
A.ar.prototype={
j:function(a){return"UniformSamplerCube: "+H.n(this.c)}}
F.jZ.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cL(u.b,b).cL(u.d.cL(u.c,b),c)
a.sa9(0,new V.a6(t.a,t.b,t.c))
a.sf4(t.A(0,Math.sqrt(t.I(t))))
u=1-b
s=1-c
a.sdW(new V.b9(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
this.f.$3(a,b,c)},
$S:11}
F.kt.prototype={
$2:function(a,b){return 0},
$S:26}
F.ku.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.w(u)
t=a.f
s=new V.R(t.a,t.b,t.c)
u=s.A(0,Math.sqrt(s.I(s))).m(0,this.b+u)
a.sa9(0,new V.a6(u.a,u.b,u.c))},
$S:11}
F.kb.prototype={
$2:function(a,b){return 0},
$S:26}
F.kc.prototype={
$3:function(a,b,c){var u,t,s,r
u=b*2-1
t=c*2-1
a.sa9(0,new V.a6(u,t,this.a.a.$2(b,c)))
s=new V.R(u,t,1)
a.sf4(s.A(0,Math.sqrt(s.I(s))))
s=1-b
r=1-c
a.sdW(new V.b9(b*c,2+s*c,4+b*r,6+s*r))},
$S:11}
F.a8.prototype={
b9:function(){if(!this.gba()){C.a.G(this.a.a.d.b,this)
this.a.a.a5()}this.cj()
this.ck()
this.iJ()},
co:function(a){this.a=a
C.a.h(a.d.b,this)},
cp:function(a){this.b=a
C.a.h(a.d.c,this)},
iX:function(a){this.c=a
C.a.h(a.d.d,this)},
cj:function(){var u=this.a
if(u!=null){C.a.G(u.d.b,this)
this.a=null}},
ck:function(){var u=this.b
if(u!=null){C.a.G(u.d.c,this)
this.b=null}},
iJ:function(){var u=this.c
if(u!=null){C.a.G(u.d.d,this)
this.c=null}},
gba:function(){return this.a==null||this.b==null||this.c==null},
fV:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cW()
if(t!=null)q=q.C(0,t)
if(s!=null)q=q.C(0,s)
if(r!=null)q=q.C(0,r)
if(q.eL())return
return q.A(0,Math.sqrt(q.I(q)))},
fZ:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.H(0,t)
u=new V.R(u.a,u.b,u.c)
q=u.A(0,Math.sqrt(u.I(u)))
u=r.H(0,t)
u=new V.R(u.a,u.b,u.c)
u=q.b8(u.A(0,Math.sqrt(u.I(u))))
return u.A(0,Math.sqrt(u.I(u)))},
cu:function(){if(this.d!=null)return!0
var u=this.fV()
if(u==null){u=this.fZ()
if(u==null)return!1}this.d=u
this.a.a.a5()
return!0},
fU:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cW()
if(t!=null)q=q.C(0,t)
if(s!=null)q=q.C(0,s)
if(r!=null)q=q.C(0,r)
if(q.eL())return
return q.A(0,Math.sqrt(q.I(q)))},
fY:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.F().a){u=m.H(0,p)
u=new V.R(u.a,u.b,u.c)
h=u.A(0,Math.sqrt(u.I(u)))
if(j.a-k.a<0)h=h.U(0)}else{g=(u-l.b)/i
u=m.H(0,p)
t=u.c
if(typeof t!=="number")return t.m()
t=new V.a6(u.a*g,u.b*g,t*g).C(0,p).H(0,s)
t=new V.R(t.a,t.b,t.c)
h=t.A(0,Math.sqrt(t.I(t)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.U(0)}u=this.d
if(u!=null){f=u.A(0,Math.sqrt(u.I(u)))
u=f.b8(h)
u=u.A(0,Math.sqrt(u.I(u))).b8(f)
h=u.A(0,Math.sqrt(u.I(u)))}return h},
cs:function(){if(this.e!=null)return!0
var u=this.fU()
if(u==null){u=this.fY()
if(u==null)return!1}this.e=u
this.a.a.a5()
return!0},
gjU:function(a){if(J.P(this.a,this.b))return!0
if(J.P(this.b,this.c))return!0
if(J.P(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.S()},
E:function(a){var u,t
if(this.gba())return a+"disposed"
u=a+C.c.ar(J.aw(this.a.e),0)+", "+C.c.ar(J.aw(this.b.e),0)+", "+C.c.ar(J.aw(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.j(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.j(0)+"}"):u+"-}"},
S:function(){return this.E("")}}
F.fZ.prototype={}
F.i7.prototype={
bd:function(a,b,c){var u,t
u=b.a
u.a.a.w()
u=u.e
t=c.a
t.a.a.w()
if(u==t.e){u=b.b
u.a.a.w()
u=u.e
t=c.b
t.a.a.w()
if(u==t.e){u=b.c
u.a.a.w()
u=u.e
t=c.c
t.a.a.w()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.w()
u=u.e
t=c.b
t.a.a.w()
if(u==t.e){u=b.b
u.a.a.w()
u=u.e
t=c.c
t.a.a.w()
if(u==t.e){u=b.c
u.a.a.w()
u=u.e
t=c.a
t.a.a.w()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.w()
u=u.e
t=c.c
t.a.a.w()
if(u==t.e){u=b.b
u.a.a.w()
u=u.e
t=c.a
t.a.a.w()
if(u==t.e){u=b.c
u.a.a.w()
u=u.e
t=c.b
t.a.a.w()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.bl.prototype={
b9:function(){if(!this.gba()){C.a.G(this.a.a.c.b,this)
this.a.a.a5()}this.cj()
this.ck()},
co:function(a){this.a=a
C.a.h(a.c.b,this)},
cp:function(a){this.b=a
C.a.h(a.c.c,this)},
cj:function(){var u=this.a
if(u!=null){C.a.G(u.c.b,this)
this.a=null}},
ck:function(){var u=this.b
if(u!=null){C.a.G(u.c.c,this)
this.b=null}},
gba:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.S()},
E:function(a){if(this.gba())return a+"disposed"
return a+C.c.ar(J.aw(this.a.e),0)+", "+C.c.ar(J.aw(this.b.e),0)},
S:function(){return this.E("")}}
F.he.prototype={}
F.iD.prototype={
bd:function(a,b,c){var u,t
u=b.a
u.a.a.w()
u=u.e
t=c.a
t.a.a.w()
if(u==t.e){u=b.b
u.a.a.w()
u=u.e
t=c.b
t.a.a.w()
return u==t.e}else{u=b.a
u.a.a.w()
u=u.e
t=c.b
t.a.a.w()
if(u==t.e){u=b.b
u.a.a.w()
u=u.e
t=c.a
t.a.a.w()
return u==t.e}else return!1}}}
F.bG.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.S()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ar(J.aw(u.e),0)},
S:function(){return this.E("")}}
F.e2.prototype={
gn:function(){var u=this.e
if(u==null){u=D.L()
this.e=u}return u},
cN:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.w()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){q=u[r]
this.a.h(0,q.jW())}this.a.w()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bG()
if(m.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.D(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.C()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.n6(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.C()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cq(k,j,h)}u=this.e
if(u!=null)u.ag(0)},
au:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.au()||!1
if(!this.a.au())t=!1
u=this.e
if(u!=null)u.ag(0)
return t},
jP:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
u=this.e
if(u!=null)++u.d
for(t=this.a.c.length-1,u=a.b,s=a.a,r=s.length,q=a.c,p=u-1;t>=0;--t){o=this.a.c
if(t>=o.length)return H.e(o,t)
n=o[t]
o=n.y
m=C.h.bc(o.a*p)
o=o.b
if(typeof q!=="number")return q.H()
l=C.h.bc(o*(q-1))
m=m>=0?C.e.ax(m,u):u+C.e.ax(m,u)
k=(m+(l>=0?C.e.ax(l,q):q+C.e.ax(l,q))*u)*4
if(k<0||k>=r)return H.e(s,k)
o=s[k]/255
j=k+1
if(j>=r)return H.e(s,j)
j=s[j]/255
i=k+2
if(i>=r)return H.e(s,i)
i=s[i]/255
h=k+3
if(h>=r)return H.e(s,h)
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
if(typeof d!=="number")return d.C()
j=new V.a6(f+i*g,e+h*g,d+j*g)
if(!J.P(o,j)){n.f=j
o=n.a
if(o!=null){o=o.e
if(o!=null)o.D(null)}}}u=this.e
if(u!=null)u.ag(0)},
l4:function(a){var u,t,s,r,q
u=this.e
if(u!=null)++u.d
for(u=this.a,t=u.c.length-1,s=a.a;t>=0;--t){r=u.c
if(t>=r.length)return H.e(r,t)
q=r[t]
if((s&$.am().a)===0)q.f=null
if((s&$.aX().a)===0)q.r=null
if((s&$.bi().a)===0)q.x=null
if((s&$.aJ().a)===0)q.y=null
if((s&$.bj().a)===0)q.z=null
if((s&$.l8().a)===0)q.Q=null
if((s&$.bO().a)===0)q.ch=0
if((s&$.bh().a)===0)q.cx=null}u=this.e
if(u!=null)u.ag(0)},
l3:function(a,b){var u,t,s,r
u=this.e
if(u!=null)++u.d
for(u=this.d,t=u.b.length-1;t>=0;--t){s=u.b
if(t>=s.length)return H.e(s,t)
r=s[t]
r.d=null}u=this.e
if(u!=null)u.ag(0)},
l2:function(a){return this.l3(!0,a)},
ks:function(a,b){var u,t,s,r,q,p
P.av("FLAG 1\n")
u=this.e
if(u!=null)++u.d
P.av("FLAG 2\n")
u=this.a.c
t=H.d(u.slice(0),[H.v(u,0)])
P.av("FLAG 3\n")
for(u=[F.al];t.length!==0;){s=C.a.gke(t)
C.a.kN(t,0)
if(s!=null){r=H.d([],u)
C.a.h(r,s)
for(q=t.length-1;q>=0;--q){if(q>=t.length)return H.e(t,q)
p=t[q]
if(p!=null&&a.bd(0,s,p)){C.a.h(r,p)
C.a.G(t,p)}}if(r.length>1)b.cN(r)}}P.av("FLAG 4\n")
this.a.w()
P.av("FLAG 5\n")
this.c.cT()
P.av("FLAG 6\n")
this.d.cT()
P.av("FLAG 7\n")
this.b.kO()
P.av("FLAG 8\n")
this.c.cU(new F.iD())
P.av("FLAG 9\n")
this.d.cU(new F.i7())
P.av("FLAG 10\n")
u=this.e
if(u!=null)u.ag(0)
P.av("FLAG 11\n")},
bw:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.am()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.aX().a)!==0)++r
if((s&$.bi().a)!==0)++r
if((s&$.aJ().a)!==0)++r
if((s&$.bj().a)!==0)++r
if((s&$.df().a)!==0)++r
if((s&$.dg().a)!==0)++r
if((s&$.bO().a)!==0)++r
if((s&$.bh().a)!==0)++r
q=a1.gd3(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.t
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.dn])
for(m=0,l=0;l<r;++l){k=a1.jQ(l)
j=k.gd3(k)
C.a.l(n,l,new Z.dn(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].kp(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.l(o,g,h[f]);++g}}m+=j}H.l(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.aB(t,34962,e)
C.b.e_(t,34962,new Float32Array(H.bL(o)),35044)
C.b.aB(t,34962,null)
d=new Z.bt(new Z.ep(34962,e),n,a1)
d.shn(H.d([],[Z.by]))
if(this.b.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.w()
C.a.h(c,b.e)}a=Z.kT(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.by(0,c.length,a))}if(this.c.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.w()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.w()
C.a.h(c,b.e)}a=Z.kT(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.by(1,c.length,a))}if(this.d.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.w()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.w()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].c
b.a.a.w()
C.a.h(c,b.e)}a=Z.kT(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.by(4,c.length,a))}return d},
j:function(a){var u=H.d([],[P.j])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.E("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.E("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.E("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.E("   "))}return C.a.F(u,"\n")},
ai:function(a){var u=this.e
if(u!=null)u.D(a)},
a5:function(){return this.ai(null)},
$ioN:1}
F.i1.prototype={
jM:function(a){var u,t,s,r,q,p
H.l(a,"$ib",[F.al],"$ab")
u=H.d([],[F.a8])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cq(t,q,p))}return u},
jN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.al],"$ab")
u=H.d([],[F.a8])
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
C.a.h(u,F.cq(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cq(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cq(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cq(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
cU:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.bd(0,p,n)){p.b9()
break}}}}},
cT:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gjU(s)
if(t)s.b9()}},
au:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cu())s=!1
return s},
ct:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cs())s=!1
return s},
j:function(a){return this.S()},
E:function(a){var u,t,s,r
u=H.d([],[P.j])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
return C.a.F(u,"\n")},
S:function(){return this.E("")},
shd:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")}}
F.i2.prototype={
gk:function(a){return this.b.length},
cU:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.bd(0,p,n)){p.b9()
break}}}}},
cT:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.P(s.a,s.b)
if(t)s.b9()}},
j:function(a){return this.S()},
E:function(a){var u,t,s,r
u=H.d([],[P.j])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].E(a+(""+s+". ")))}return C.a.F(u,"\n")},
S:function(){return this.E("")},
shr:function(a){this.b=H.l(a,"$ib",[F.bl],"$ab")}}
F.i3.prototype={
gk:function(a){return this.b.length},
kO:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.G(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.D(null)}s=t.a
if(s!=null){C.a.G(s.b.b,t)
t.a=null}}}},
j:function(a){return this.S()},
E:function(a){var u,t,s,r
u=H.d([],[P.j])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
return C.a.F(u,"\n")},
S:function(){return this.E("")},
scf:function(a){this.b=H.l(a,"$ib",[F.bG],"$ab")}}
F.al.prototype={
cA:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.iX(this.cx,s,p,u,t,r,q,a,o)},
jW:function(){return this.cA(null)},
sa9:function(a,b){var u
if(!J.P(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a5()}},
sf4:function(a){var u
if(!J.P(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a5()}},
sdW:function(a){var u
if(!J.P(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a5()}},
kp:function(a){var u,t
if(a.u(0,$.am())){u=this.f
t=[P.t]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.aX())){u=this.r
t=[P.t]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.bi())){u=this.x
t=[P.t]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.aJ())){u=this.y
t=[P.t]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.u(0,$.bj())){u=this.z
t=[P.t]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.df())){u=this.Q
t=[P.t]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.dg())){u=this.Q
t=[P.t]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.bO()))return H.d([this.ch],[P.t])
else if(a.u(0,$.bh())){u=this.cx
t=[P.t]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.t])},
cu:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cW()
this.d.R(0,new F.j7(u))
u=u.a
this.r=u.A(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a5()
u=this.a.e
if(u!=null)u.ag(0)}return!0},
cs:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cW()
this.d.R(0,new F.j6(u))
u=u.a
this.x=u.A(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a5()
u=this.a.e
if(u!=null)u.ag(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.S()},
E:function(a){var u,t,s
u=H.d([],[P.j])
C.a.h(u,C.c.ar(J.aw(this.e),0))
t=this.f
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
t=this.r
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
t=this.x
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
t=this.y
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
t=this.z
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
t=this.Q
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
C.a.h(u,V.O(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
s=C.a.F(u,", ")
return a+"{"+s+"}"},
S:function(){return this.E("")}}
F.j7.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:10}
F.j6.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:10}
F.iY.prototype={
w:function(){var u,t,s,r
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
t.a5()
return!0},
jO:function(a,b,c,d,e,f,g,h,i){var u=F.iX(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bu:function(a,b,c,d,e,f){return this.jO(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
au:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].cu()
return!0},
ct:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].cs()
return!0},
jT:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.P(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}}return!0},
j:function(a){return this.S()},
E:function(a){var u,t,s,r
this.w()
u=H.d([],[P.j])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
return C.a.F(u,"\n")},
S:function(){return this.E("")},
sjn:function(a){this.c=H.l(a,"$ib",[F.al],"$ab")}}
F.iZ.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var u,t,s
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
R:function(a,b){H.m(b,{func:1,ret:-1,args:[F.a8]})
C.a.R(this.b,b)
C.a.R(this.c,new F.j_(this,b))
C.a.R(this.d,new F.j0(this,b))},
j:function(a){return this.S()},
E:function(a){var u,t,s,r
u=H.d([],[P.j])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
return C.a.F(u,"\n")},
S:function(){return this.E("")},
she:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")},
shf:function(a){this.c=H.l(a,"$ib",[F.a8],"$ab")},
shg:function(a){this.d=H.l(a,"$ib",[F.a8],"$ab")}}
F.j_.prototype={
$1:function(a){H.f(a,"$ia8")
if(!J.P(a.a,this.a))this.b.$1(a)},
$S:10}
F.j0.prototype={
$1:function(a){var u
H.f(a,"$ia8")
u=this.a
if(!J.P(a.a,u)&&!J.P(a.b,u))this.b.$1(a)},
$S:10}
F.j1.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.e(u,s)
return u[s]}else{if(b<0)return H.e(u,b)
return u[b]}},
j:function(a){return this.S()},
E:function(a){var u,t,s,r
u=H.d([],[P.j])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
return C.a.F(u,"\n")},
S:function(){return this.E("")},
shs:function(a){this.b=H.l(a,"$ib",[F.bl],"$ab")},
sht:function(a){this.c=H.l(a,"$ib",[F.bl],"$ab")}}
F.j3.prototype={}
F.j2.prototype={
bd:function(a,b,c){return J.P(b.f,c.f)}}
F.j4.prototype={}
F.hJ.prototype={
cN:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[F.al],"$ab")
u=V.cW()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null){q=u.a
p=r.a
o=u.b
n=r.b
m=u.c
r=r.c
if(typeof m!=="number")return m.C()
if(typeof r!=="number")return H.w(r)
u=new V.R(q+p,o+n,m+r)}}u=u.A(0,Math.sqrt(u.I(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.E)(a),++s){l=a[s]
if(r)k=null
else{q=u.a
p=u.b
o=u.c
if(typeof o!=="number")return o.m()
k=u.A(0,Math.sqrt(q*q+p*p+o*o))}if(!J.P(l.r,k)){l.r=k
q=l.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}return}}
F.j5.prototype={
gk:function(a){return this.b.length},
j:function(a){return this.S()},
E:function(a){var u,t,s,r
u=H.d([],[P.j])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
return C.a.F(u,"\n")},
S:function(){return this.E("")},
scf:function(a){this.b=H.l(a,"$ib",[F.bG],"$ab")}}
O.fN.prototype={
gn:function(){var u=this.f
if(u==null){u=D.L()
this.f=u}return u},
v:function(a){var u=this.f
if(u!=null)u.D(a)},
ab:function(a,b){},
bV:function(a,b){var u,t,s,r,q,p
u=this.a
if(u==null){t=H.f(a.fr.i(0,"Depth"),"$idu")
if(t==null){u=a.a
t=new A.du(u,"Depth")
t.bn(u,"Depth")
t.bP(0,$.mY,$.mX)
t.z=t.x.i(0,"posAttr")
t.Q=H.h(t.y.i(0,"objClr"),"$iM")
t.ch=H.h(t.y.i(0,"fogClr"),"$iM")
t.cx=H.h(t.y.i(0,"fogStart"),"$iT")
t.cy=H.h(t.y.i(0,"fogStop"),"$iT")
t.db=H.h(t.y.i(0,"viewObjMat"),"$iab")
t.dx=H.h(t.y.i(0,"projMat"),"$iab")
a.bv(t)}this.a=t
u=t}s=b.e
if(!(s instanceof Z.bt)){b.e=null
s=null}if(s==null){u=b.d.bw(new Z.c7(a.a),$.am())
s=u.ao($.am())
r=this.a
s.e=r.z.c
b.e=u
u=r}u.X(a)
s=this.b
r=u.Q
r.toString
q=s.a
p=s.b
s=s.c
C.b.t(r.a,r.d,q,p,s)
s=this.c
p=u.ch
p.toString
q=s.a
r=s.b
s=s.c
C.b.t(p.a,p.d,q,r,s)
s=this.d
r=u.cx
C.b.J(r.a,r.d,s)
s=this.e
r=u.cy
C.b.J(r.a,r.d,s)
s=a.cy
s=s.ga1(s)
r=u.dx
r.toString
r.ac(s.a6(0,!0))
s=a.gfb()
u=u.db
u.toString
u.ac(s.a6(0,!0))
s=b.e
s.X(a)
s.aa(a)
s.aQ(a)
s=this.a
s.toString
C.b.bl(a.a,null)
s.x.bz()}}
O.dB.prototype={
gn:function(){var u=this.x
if(u==null){u=D.L()
this.x=u}return u},
v:function(a){var u
H.f(a,"$iA")
u=this.x
if(u!=null)u.D(a)},
ah:function(){return this.v(null)},
se7:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gn().G(0,this.ga7())
t=this.d
this.d=a
if(a!=null)a.gn().h(0,this.ga7())
u=new D.x("depthTexture",t,this.d,this,[T.bJ])
u.b=!0
this.v(u)}},
ab:function(a,b){},
V:function(a,b){H.l(a,"$ib",[T.bq],"$ab")
if(b!=null)if(!C.a.av(a,b)){b.a=a.length
C.a.h(a,b)}},
bV:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.f(a.fr.i(0,"GaussianBlur"),"$idC")
if(u==null){t=a.a
u=new A.dC(t,"GaussianBlur")
u.bn(t,"GaussianBlur")
u.bP(0,$.n1,$.n0)
u.z=u.x.i(0,"posAttr")
u.Q=u.x.i(0,"txtAttr")
u.ch=H.h(u.y.i(0,"projViewObjMat"),"$iab")
u.cx=H.h(u.y.i(0,"txt2DMat"),"$ic6")
u.cy=H.h(u.y.i(0,"colorTxt"),"$ia7")
u.db=H.h(u.y.i(0,"depthTxt"),"$ia7")
u.dx=H.h(u.y.i(0,"nullColorTxt"),"$iJ")
u.dy=H.h(u.y.i(0,"nullDepthTxt"),"$iJ")
u.fr=H.h(u.y.i(0,"width"),"$iT")
u.fx=H.h(u.y.i(0,"height"),"$iT")
u.fy=H.h(u.y.i(0,"highOffset"),"$iT")
u.go=H.h(u.y.i(0,"lowOffset"),"$iT")
u.id=H.h(u.y.i(0,"depthLimit"),"$iT")
a.bv(u)}this.a=u}if(b.e==null){t=b.d
s=$.am()
r=$.aJ()
r=t.bw(new Z.c7(a.a),new Z.aE(s.a|r.a))
r.ao($.am()).e=this.a.z.c
r.ao($.aJ()).e=this.a.Q.c
b.e=r}q=H.d([],[T.bq])
this.V(q,this.c)
this.V(q,this.d)
for(p=0;p<q.length;++p)q[p].X(a)
t=this.a
t.X(a)
s=this.c
t.ae(t.cy,t.dx,s)
s=this.d
t.ae(t.db,t.dy,s)
s=this.b
r=t.cx
r.toString
r.ac(s.a6(0,!0))
s=a.geZ()
r=t.ch
r.toString
r.ac(s.a6(0,!0))
s=a.c
r=t.fr
C.b.J(r.a,r.d,s)
s=a.d
r=t.fx
C.b.J(r.a,r.d,s)
s=this.e
r=t.fy
C.b.J(r.a,r.d,s)
s=this.f
r=t.go
C.b.J(r.a,r.d,s)
s=this.r
t=t.id
C.b.J(t.a,t.d,s)
t=b.e
if(t instanceof Z.bt){t.X(a)
t.aa(a)
t.aQ(a)}else b.e=null
t=this.a
t.toString
s=a.a
C.b.bl(s,null)
t.x.bz()
for(p=0;p<q.length;++p){t=q[p]
if(t.c){t.c=!1
C.b.bt(s,33984+t.a)
C.b.af(s,3553,null)}}}}
O.dR.prototype={
gn:function(){var u=this.dy
if(u==null){u=D.L()
this.dy=u}return u},
v:function(a){var u
H.f(a,"$iA")
u=this.dy
if(u!=null)u.D(a)},
ah:function(){return this.v(null)},
dI:function(a){H.f(a,"$iA")
this.a=null
this.v(a)},
iP:function(){return this.dI(null)},
hK:function(a,b){var u=V.af
u=new D.bz(a,H.l(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.v(u)},
hM:function(a,b){var u=V.af
u=new D.bA(a,H.l(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.v(u)},
dj:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.e.a8(u.e.length+3,4)*4
s=C.e.a8(u.f.length+3,4)*4
r=C.e.a8(u.r.length+3,4)*4
q=C.e.a8(u.x.length+3,4)*4
p=C.e.a8(u.y.length+3,4)*4
o=C.e.a8(u.z.length+3,4)*4
n=C.e.a8(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.e.j(u.a)+C.e.j(m.a)+C.e.j(l.a)+C.e.j(k.a)+C.e.j(j.a)+C.e.j(i.a)+C.e.j(h.a)+C.e.j(g.a)+C.e.j(f.a)
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
a2=u===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f||h===C.f||g===C.f||f===C.f
a3=u===C.i||m===C.i||l===C.i||k===C.i||j===C.i||i===C.i||h===C.i||g===C.i||f===C.i
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.am()
if(a0){b=$.aX()
a7=new Z.aE(a7.a|b.a)}if(a1){b=$.bi()
a7=new Z.aE(a7.a|b.a)}if(a2){b=$.aJ()
a7=new Z.aE(a7.a|b.a)}if(a3){b=$.bj()
a7=new Z.aE(a7.a|b.a)}if(a5){b=$.bh()
a7=new Z.aE(a7.a|b.a)}return new A.ht(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
V:function(a,b){H.l(a,"$ib",[T.bq],"$ab")
if(b!=null)if(!C.a.av(a,b)){b.a=a.length
C.a.h(a,b)}},
ab:function(a,b){var u,t,s,r
for(u=this.dx.a,u=new J.an(u,u.length,0,[H.v(u,0)]);u.B();){t=u.d
t.toString
s=$.bH
if(s==null){s=new V.a6(0,0,0)
$.bH=s}t.a=s
s=t.b
if(s!=null){r=s.aH(0,b,t)
if(r!=null)t.a=r.b1(t.a)}}},
bV:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dj()
t=H.f(a2.fr.i(0,u.aw),"$idQ")
if(t==null){t=A.nd(u,a2.a)
a2.bv(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bA
u=a3.e
if(!(u instanceof Z.bt)){a3.e=null
u=null}if(u==null||!u.d.u(0,r)){u=s.r1
if(u)a3.d.au()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.ct()
p.a.ct()
p=p.e
if(p!=null)p.ag(0)}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.jT()
o=o.e
if(o!=null)o.ag(0)}m=a3.d.bw(new Z.c7(a2.a),r)
m.ao($.am()).e=this.a.Q.c
if(u)m.ao($.aX()).e=this.a.cx.c
if(q)m.ao($.bi()).e=this.a.ch.c
if(s.rx)m.ao($.aJ()).e=this.a.cy.c
if(p)m.ao($.bj()).e=this.a.db.c
if(s.x1)m.ao($.bh()).e=this.a.dx.c
a3.e=m}u=T.bq
l=H.d([],[u])
this.a.X(a2)
if(s.fx){q=this.a
p=a2.dx
p=p.ga1(p)
q=q.dy
q.toString
q.ac(p.a6(0,!0))}if(s.fy){q=this.a
p=a2.gfb()
q=q.fr
q.toString
q.ac(p.a6(0,!0))}q=this.a
p=a2.geZ()
q=q.fy
q.toString
q.ac(p.a6(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ac(C.o.a6(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ac(C.o.a6(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ac(C.o.a6(p,!0))}if(s.aD>0){k=this.e.a.length
q=this.a.k4
C.b.M(q.a,q.d,k)
for(q=[P.t],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.e(o,j)
o=o[j]
p.toString
H.f(o,"$iaf")
p=p.r1
if(j>=p.length)return H.e(p,j)
p=p[j]
i=new Float32Array(H.bL(H.l(o.a6(0,!0),"$ib",q,"$ab")))
C.b.cX(p.a,p.d,!1,i)}}switch(s.a){case C.d:break
case C.j:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.V(l,this.f.d)
q=this.a
p=this.f.d
q.ae(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.i:this.V(l,this.f.e)
q=this.a
p=this.f.e
q.an(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.j:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.V(l,this.r.d)
q=this.a
p=this.r.d
q.ae(q.y1,q.aD,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.i:this.V(l,this.r.e)
q=this.a
p=this.r.e
q.an(q.y2,q.aD,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.c){case C.d:break
case C.j:q=this.a
p=this.x.f
q=q.aw
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.V(l,this.x.d)
q=this.a
p=this.x.d
q.ae(q.bA,q.bB,p)
p=this.a
q=this.x.f
p=p.aw
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.i:this.V(l,this.x.e)
q=this.a
p=this.x.e
q.an(q.ee,q.bB,p)
p=this.a
q=this.x.f
p=p.aw
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.d){case C.d:break
case C.j:q=this.a
p=this.y.f
q=q.bC
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.V(l,this.y.d)
q=this.a
p=this.y.d
q.ae(q.ef,q.bD,p)
p=this.a
q=this.y.f
p=p.bC
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.i:this.V(l,this.y.e)
q=this.a
p=this.y.e
q.an(q.eg,q.bD,p)
p=this.a
q=this.y.f
p=p.bC
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.e){case C.d:break
case C.j:q=this.a
p=this.z.f
q=q.bE
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bG
C.b.J(p.a,p.d,n)
break
case C.f:this.V(l,this.z.d)
q=this.a
p=this.z.d
q.ae(q.eh,q.bF,p)
p=this.a
q=this.z.f
p=p.bE
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bG
C.b.J(q.a,q.d,n)
break
case C.i:this.V(l,this.z.e)
q=this.a
p=this.z.e
q.an(q.ei,q.bF,p)
p=this.a
q=this.z.f
p=p.bE
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bG
C.b.J(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.eu
C.b.M(q.a,q.d,k)
q=a2.db
h=q.ga1(q)
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.E)(q),++f){e=q[f]
o=this.a.cB
if(g>=o.length)return H.e(o,g)
d=o[g]
o=h.f7(e.gby(e))
n=o.a
c=o.b
b=o.c
if(typeof b!=="number")return b.m()
b=o.A(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.t(c.a,c.d,n,o,b)
b=e.gaC(e)
o=d.c
C.b.t(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.ev
C.b.M(q.a,q.d,k)
q=a2.db
h=q.ga1(q)
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.E)(q),++f){e=q[f]
o=this.a.cC
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.a
n=d.b
c=o.a
b=o.b
o=o.c
C.b.t(n.a,n.d,c,b,o)
o=h.b1(e.a)
b=d.c
C.b.t(b.a,b.d,o.a,o.b,o.c)
o=e.c
b=d.d
C.b.t(b.a,b.d,o.a,o.b,o.c)
o=e.d
b=d.e
C.b.J(b.a,b.d,o)
o=e.e
b=d.f
C.b.J(b.a,b.d,o)
o=e.f
b=d.r
C.b.J(b.a,b.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.ew
C.b.M(q.a,q.d,k)
q=a2.db
h=q.ga1(q)
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.E)(q),++f){e=q[f]
o=this.a.cD
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gcQ(e)
n=d.b
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gby(e).le()
n=d.c
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=h.b1(e.gcQ(e))
n=d.d
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gaC(e)
n=d.e
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.glb()
n=d.f
C.b.J(n.a,n.d,o)
o=e.gla()
n=d.r
C.b.J(n.a,n.d,o)
o=e.gdT()
n=d.x
C.b.J(n.a,n.d,o)
o=e.gdU()
n=d.y
C.b.J(n.a,n.d,o)
o=e.gdV()
n=d.z
C.b.J(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.ex
C.b.M(q.a,q.d,k)
q=a2.db
h=q.ga1(q)
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.E)(q),++f){e=q[f]
n=this.a.cE
if(g>=n.length)return H.e(n,g)
d=n[g]
n=e.gbi()
H.l(l,"$ib",o,"$ab")
if(!C.a.av(l,n)){n.a=l.length
C.a.h(l,n)}n=e.gby(e)
c=d.d
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=e.gl6()
c=d.b
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=e.gbW(e)
c=d.c
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=h.f7(e.gby(e))
c=n.a
b=n.b
a=n.c
if(typeof a!=="number")return a.m()
a=n.A(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.t(b.a,b.d,c,n,a)
a=e.gaC(e)
n=d.f
C.b.t(n.a,n.d,a.a,a.b,a.c)
a=e.gbi()
n=a.gcM(a)
if(!n){n=d.x
C.b.M(n.a,n.d,1)}else{n=d.r
c=a.d
b=n.a
n=n.d
if(!c)C.b.M(b,n,0)
else C.b.M(b,n,a.a)
n=d.x
C.b.M(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.ey
C.b.M(q.a,q.d,k)
q=a2.db
h=q.ga1(q)
for(q=this.dx.y,p=q.length,o=[P.t],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.E)(q),++f){e=q[f]
c=this.a.cF
if(g>=c.length)return H.e(c,g)
d=c[g]
c=e.gbi()
H.l(l,"$ib",n,"$ab")
if(!C.a.av(l,c)){c.a=l.length
C.a.h(l,c)}a0=h.m(0,e.ga1(e))
c=e.ga1(e)
b=$.bH
if(b==null){b=new V.a6(0,0,0)
$.bH=b}b=c.b1(b)
c=d.b
C.b.t(c.a,c.d,b.a,b.b,b.c)
c=$.bH
if(c==null){c=new V.a6(0,0,0)
$.bH=c}c=a0.b1(c)
b=d.c
C.b.t(b.a,b.d,c.a,c.b,c.c)
c=a0.eK(0)
b=d.d
i=new Float32Array(H.bL(H.l(new V.cx(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).a6(0,!0),"$ib",o,"$ab")))
C.b.f8(b.a,b.d,!1,i)
b=e.gaC(e)
c=d.e
C.b.t(c.a,c.d,b.a,b.b,b.c)
b=e.gbi()
c=b.gcM(b)
if(!c){c=d.r
C.b.M(c.a,c.d,1)}else{c=d.f
a=b.gcM(b)
a1=c.a
c=c.d
if(!a)C.b.M(a1,c,0)
else C.b.M(a1,c,b.glc(b))
c=d.r
C.b.M(c.a,c.d,0)}c=e.gdT()
b=d.x
C.b.J(b.a,b.d,c)
c=e.gdU()
b=d.y
C.b.J(b.a,b.d,c)
c=e.gdV()
b=d.z
C.b.J(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.ez
C.b.M(q.a,q.d,k)
q=a2.db
h=q.ga1(q)
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.E)(q),++f){e=q[f]
o=this.a.cG
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gbi()
H.l(l,"$ib",u,"$ab")
if(!C.a.av(l,o)){o.a=l.length
C.a.h(l,o)}o=e.gcQ(e)
n=d.b
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gby(e)
n=d.c
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gl6()
n=d.d
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gbW(e)
n=d.e
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=h.b1(e.gcQ(e))
n=d.f
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gbi()
n=o.gcM(o)
if(!n){o=d.x
C.b.M(o.a,o.d,1)}else{n=d.r
c=o.d
b=n.a
n=n.d
if(!c)C.b.M(b,n,0)
else C.b.M(b,n,o.a)
o=d.x
C.b.M(o.a,o.d,0)}o=e.gaC(e)
n=d.y
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.glf()
n=d.z
C.b.J(n.a,n.d,o)
o=e.glg()
n=d.Q
C.b.J(n.a,n.d,o)
o=e.gdT()
n=d.ch
C.b.J(n.a,n.d,o)
o=e.gdU()
n=d.cx
C.b.J(n.a,n.d,o)
o=e.gdV()
n=d.cy
C.b.J(n.a,n.d,o);++g}}}switch(s.f){case C.d:break
case C.j:break
case C.f:this.V(l,this.Q.d)
u=this.a
q=this.Q.d
u.ae(u.ej,u.bH,q)
break
case C.i:this.V(l,this.Q.e)
u=this.a
q=this.Q.e
u.an(u.ek,u.bH,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db
q=q.ga1(q).eK(0)
a2.Q=q}u=u.id
u.toString
u.ac(q.a6(0,!0))}if(s.dy){this.V(l,this.ch)
u=this.a
q=this.ch
u.an(u.el,u.em,q)
switch(s.r){case C.d:break
case C.j:u=this.a
q=this.cx.f
u=u.bI
u.toString
p=q.a
o=q.b
q=q.c
C.b.t(u.a,u.d,p,o,q)
break
case C.f:this.V(l,this.cx.d)
u=this.a
q=this.cx.d
u.ae(u.en,u.bJ,q)
q=this.a
u=this.cx.f
q=q.bI
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
break
case C.i:this.V(l,this.cx.e)
u=this.a
q=this.cx.e
u.an(u.eo,u.bJ,q)
q=this.a
u=this.cx.f
q=q.bI
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
break}switch(s.x){case C.d:break
case C.j:u=this.a
q=this.cy.f
u=u.bL
u.toString
p=q.a
o=q.b
q=q.c
C.b.t(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bK
C.b.J(q.a,q.d,o)
break
case C.f:this.V(l,this.cy.d)
u=this.a
q=this.cy.d
u.ae(u.ep,u.bM,q)
q=this.a
u=this.cy.f
q=q.bL
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bK
C.b.J(u.a,u.d,o)
break
case C.i:this.V(l,this.cy.e)
u=this.a
q=this.cy.e
u.an(u.eq,u.bM,q)
q=this.a
u=this.cy.f
q=q.bL
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bK
C.b.J(u.a,u.d,o)
break}}u=s.y
q=u!==C.d
if(q){switch(u){case C.d:break
case C.j:u=this.a
p=this.db.f
u=u.bN
C.b.J(u.a,u.d,p)
break
case C.f:this.V(l,this.db.d)
u=this.a
p=this.db.d
u.ae(u.er,u.bO,p)
p=this.a
u=this.db.f
p=p.bN
C.b.J(p.a,p.d,u)
break
case C.i:this.V(l,this.db.e)
u=this.a
p=this.db.e
u.an(u.es,u.bO,p)
p=this.a
u=this.db.f
p=p.bN
C.b.J(p.a,p.d,u)
break}u=a2.a
C.b.bb(u,3042)
C.b.jS(u,770,771)}for(j=0;j<l.length;++j)l[j].X(a2)
u=a3.e
u.X(a2)
u.aa(a2)
u.aQ(a2)
if(q)C.b.k7(a2.a,3042)
for(u=a2.a,j=0;j<l.length;++j){q=l[j]
if(q.c){q.c=!1
C.b.bt(u,33984+q.a)
C.b.af(u,3553,null)}}q=this.a
q.toString
C.b.bl(u,null)
q.x.bz()},
j:function(a){var u=this.a
if(u!=null)return u.b
else return this.dj().aw},
sfX:function(a){this.e=H.l(a,"$iW",[V.af],"$aW")}}
O.hr.prototype={
iS:function(a){var u=this.f
if(!(Math.abs(u-a)<$.F().a)){this.f=a
u=new D.x(this.b,u,a,this,[P.t])
u.b=!0
this.a.v(u)}},
aA:function(){this.d5()
this.iS(1)}}
O.cw.prototype={
v:function(a){this.a.v(H.f(a,"$iA"))},
ah:function(){return this.v(null)},
aA:function(){},
iV:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gn().G(0,this.ga7())
t=this.d
this.d=a
if(a!=null)a.gn().h(0,this.ga7())
u=new D.x(this.b+".texture2D",t,this.d,this,[T.bJ])
u.b=!0
this.a.v(u)}},
iW:function(a){},
sbX:function(a){var u
if(a==null){if(this.c===C.f){this.c=C.j
u=this.a
u.a=null
u.v(null)}}else{u=this.c
if(u!==C.f){if(u===C.d)this.aA()
this.c=C.f
this.iW(null)
u=this.a
u.a=null
u.v(null)}}this.iV(a)}}
O.hs.prototype={}
O.b5.prototype={
dK:function(a){var u,t
if(!J.P(this.f,a)){u=this.f
this.f=a
t=new D.x(this.b+".color",u,a,this,[V.a_])
t.b=!0
this.a.v(t)}},
aA:function(){this.d5()
this.dK(new V.a_(1,1,1))},
saC:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aA()
u=this.a
u.a=null
u.v(null)}this.dK(b)}}
O.hu.prototype={
iU:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.F().a)){this.ch=a
u=new D.x(this.b+".refraction",u,a,this,[P.t])
u.b=!0
this.a.v(u)}},
aA:function(){this.c4()
this.iU(1)}}
O.hv.prototype={
cl:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.F().a)){this.ch=a
u=new D.x(this.b+".shininess",u,a,this,[P.t])
u.b=!0
this.a.v(u)}},
aA:function(){this.c4()
this.cl(100)}}
O.bp.prototype={}
O.e9.prototype={
gn:function(){var u=this.e
if(u==null){u=D.L()
this.e=u}return u},
v:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.D(a)},
ah:function(){return this.v(null)},
i_:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ii",[O.aT],"$ai")
for(u=b.length,t=this.ga7(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.bx()
o.sad(null)
o.saU(null)
o.c=null
o.d=0
p.f=o}H.m(t,s)
if(o.a==null)o.sad(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ah()},
i1:function(a,b){var u,t
H.l(b,"$ii",[O.aT],"$ai")
for(u=b.gW(b),t=this.ga7();u.B();)u.gO(u).gn().G(0,t)
this.ah()},
ab:function(a,b){},
bV:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=C.e.a8(this.c.a.length+3,4)*4
if(u!==this.d){this.d=u
this.b=null}t=this.b
if(t==null){t="TextureLayout_"+u
s=H.f(a.fr.i(0,t),"$iea")
if(s==null){s=A.ny(u,a.a)
a.bv(s)}this.b=s
t=s}if(b.e==null){t=b.d.bw(new Z.c7(a.a),$.am())
r=t.ao($.am())
q=this.b
r.e=q.z.c
b.e=t
t=q}t.X(a)
t=T.bq
p=H.d([],[t])
for(r=[P.t],t=[t],o=0,n=0;q=this.c.a,n<q.length;++n){m=q[n]
if(m!=null&&m.a!=null){q=m.a
H.l(p,"$ib",t,"$ab")
if(q!=null)if(!C.a.av(p,q)){q.a=p.length
C.a.h(p,q)}q=this.b
l=m.a
q=q.cx
if(o>=q.length)return H.e(q,o)
q=q[o]
k=l==null||!l.d
j=q.a
q=q.d
if(k)C.b.M(j,q,0)
else C.b.M(j,q,l.a)
q=this.b
l=m.b
q=q.cy
if(o>=q.length)return H.e(q,o)
q=q[o]
if(l==null){l=$.hw
if(l==null){l=new V.af(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.hw=l}}i=new Float32Array(H.bL(H.l(l.a6(0,!0),"$ib",r,"$ab")))
C.b.cX(q.a,q.d,!1,i)
q=this.b
h=m.c
q.toString
if(h==null){l=$.cH
if(l==null){l=V.cG(0,0,1,1)
$.cH=l
h=l}else h=l}l=q.db
if(o>=l.length)return H.e(l,o)
l=l[o]
C.b.bZ(l.a,l.d,h.a,h.b)
q=q.dx
if(o>=q.length)return H.e(q,o)
q=q[o]
C.b.bZ(q.a,q.d,h.c,h.d)
q=this.b
h=m.d
q.toString
if(h==null){l=$.cH
if(l==null){l=V.cG(0,0,1,1)
$.cH=l
h=l}else h=l}l=q.dy
if(o>=l.length)return H.e(l,o)
l=l[o]
C.b.bZ(l.a,l.d,h.a,h.b)
q=q.fr
if(o>=q.length)return H.e(q,o)
q=q[o]
C.b.bZ(q.a,q.d,h.c,h.d)
q=this.b
l=m.e
q=q.fx
if(o>=q.length)return H.e(q,o)
q=q[o]
l=l?1:0
C.b.M(q.a,q.d,l);++o}}t=this.b.Q
C.b.M(t.a,t.d,o)
t=this.b
r=this.a
t=t.ch
t.toString
q=r.a
l=r.b
k=r.c
r=r.d
C.b.l5(t.a,t.d,q,l,k,r)
for(n=0;n<p.length;++n)p[n].X(a)
t=b.e
if(t instanceof Z.bt){t.X(a)
t.aa(a)
t.aQ(a)}else b.e=null
t=this.b
t.toString
r=a.a
C.b.bl(r,null)
t.x.bz()
for(n=0;n<p.length;++n){t=p[n]
if(t.c){t.c=!1
C.b.bt(r,33984+t.a)
C.b.af(r,3553,null)}}},
shb:function(a){this.c=H.l(a,"$iW",[O.aT],"$aW")}}
O.aT.prototype={
gn:function(){var u=this.f
if(u==null){u=D.L()
this.f=u}return u},
v:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.D(a)},
ah:function(){return this.v(null)}}
T.bq.prototype={}
T.bJ.prototype={}
T.ip.prototype={
dL:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.ec()}},
gn:function(){var u=this.y
if(u==null){u=D.L()
this.y=u}return u},
X:function(a){var u
if(!this.c&&this.d){this.c=!0
u=a.a
C.b.bt(u,33984+this.a)
C.b.af(u,3553,this.b)}}}
T.iq.prototype={
kq:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.af(u,3553,t)
C.b.aG(u,3553,10242,33071)
C.b.aG(u,3553,10243,33071)
C.b.aG(u,3553,10241,9729)
C.b.aG(u,3553,10240,9729)
C.b.af(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=T.kN(0,t)
u=W.p
W.ac(s,"load",H.m(new T.ir(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
bR:function(a){return this.kq(a,!1,!1,!1,!1)},
iQ:function(a,b,c){var u,t,s,r
b=V.de(b,2)
u=V.de(a.width,2)
t=V.de(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kC(null,null)
s.width=u
s.height=t
r=H.f(C.n.fj(s,"2d"),"$ibU")
r.imageSmoothingEnabled=!1;(r&&C.x).k9(r,a,0,0,s.width,s.height)
return P.ok(C.x.hm(r,0,0,s.width,s.height))}}}
T.ir.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.iQ(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.af(t,3553,this.e)
C.b.kL(t,37440,this.f?1:0)
C.b.kX(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.ff(t,3553)
C.b.af(t,3553,null)
u.dL();++s.e},
$S:15}
T.is.prototype={}
V.fl.prototype={
aZ:function(a,b){return!0},
j:function(a){return"all"},
$ibm:1}
V.bm.prototype={}
V.dP.prototype={
aZ:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)if(u[s].aZ(0,b))return!0
return!1},
j:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.j(0)}return s},
saM:function(a){this.a=H.l(a,"$ib",[V.bm],"$ab")},
$ibm:1}
V.bn.prototype={
aZ:function(a,b){return!this.fu(0,b)},
j:function(a){return"!["+this.d4(0)+"]"}}
V.i0.prototype={
fA:function(a){var u,t
if(a.a.length<=0)throw H.c(P.u("May not create a SetMatcher with zero characters."))
u=new H.aM([P.o,P.a1])
for(t=new H.dN(a,a.gk(a),0,[H.az(a,"z",0)]);t.B();)u.l(0,t.d,!0)
this.siR(u)},
aZ:function(a,b){return this.a.bx(0,b)},
j:function(a){var u=this.a
return P.e5(u.gaE(u),0,null)},
siR:function(a){this.a=H.l(a,"$iD",[P.o,P.a1],"$aD")},
$ibm:1}
V.cJ.prototype={
F:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cN(this.a.T(0,b))
r.saM(H.d([],[V.bm]))
r.c=!1
C.a.h(this.c,r)
return r},
kd:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.aZ(0,a))return r}return},
j:function(a){return this.b},
sjh:function(a){this.c=H.l(a,"$ib",[V.cN],"$ab")}}
V.ef.prototype={
j:function(a){var u,t
u=H.mq(this.b,"\n","\\n")
t=H.mq(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cM.prototype={
j:function(a){return this.b},
siK:function(a){var u=P.j
this.c=H.l(a,"$iD",[u,u],"$aD")}}
V.iv.prototype={
T:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new V.cJ(this,b)
u.sjh(H.d([],[V.cN]))
u.d=null
this.a.l(0,b,u)}return u},
bk:function(a){var u,t
u=this.b.i(0,a)
if(u==null){u=new V.cM(this,a)
t=P.j
u.siK(new H.aM([t,t]))
this.b.l(0,a,u)}return u},
l1:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.ef])
t=this.c
s=[P.o]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.K(a,o)
m=t.kd(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.e5(r,0,null)
throw H.c(P.u("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.e5(r,0,null)
k=t.d
j=k.c.i(0,l)
p=new V.ef(j==null?k.b:j,l,o)}++o}}},
sj5:function(a){this.a=H.l(a,"$iD",[P.j,V.cJ],"$aD")},
sja:function(a){this.b=H.l(a,"$iD",[P.j,V.cM],"$aD")}}
V.cN.prototype={
j:function(a){return this.b.b+": "+this.d4(0)}}
X.ft.prototype={
gn:function(){var u=this.fr
if(u==null){u=D.L()
this.fr=u}return u},
at:function(a){var u=this.fr
if(u!=null)u.D(a)},
sas:function(a,b){var u
if(b<1)b=1
u=this.a
if(u!==b){this.y=null
this.a=b
this.c=b
u=new D.x("width",u,b,this,[P.o])
u.b=!0
this.at(u)}},
sap:function(a,b){var u
if(b<1)b=1
u=this.b
if(u!==b){this.y=null
this.b=b
this.d=b
u=new D.x("height",u,b,this,[P.o])
u.b=!0
this.at(u)}},
X:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
if(this.f){u=a.a
t=u.drawingBufferWidth
s=this.r
if(typeof t!=="number")return t.m()
this.sas(0,C.h.a3(t*s))
u=u.drawingBufferHeight
s=this.x
if(typeof u!=="number")return u.m()
this.sap(0,C.h.a3(u*s))}if(this.y==null){u=a.a
t=this.ch
s=this.a
r=this.b
q=H.ae(C.b.c0(u,3379))
p=V.de(s,2)
o=V.de(r,2)
q=V.de(q,2)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
C.b.af(u,3553,n)
C.b.aG(u,3553,10242,33071)
C.b.aG(u,3553,10243,33071)
C.b.aG(u,3553,10241,9729)
C.b.aG(u,3553,10240,9729)
C.b.f3(u,3553,0,6408,p,o,0,6408,5121,null)
C.b.af(u,3553,null)
m=T.kN(0,n)
m.e=s
m.f=r
m.r=p
m.x=o
m.dL()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.ec()
t=this.ch
s=t.b
this.z=s
this.c=t.r
this.d=t.x
C.b.af(u,3553,s)
t=u.createRenderbuffer()
this.Q=t
C.b.dX(u,36161,t)
C.b.kQ(u,36161,33189,this.c,this.d)
t=u.createFramebuffer()
this.y=t
C.b.aO(u,36160,t)
C.b.eD(u,36160,36064,3553,this.z,0)
C.b.ki(u,36160,36096,36161,this.Q)
C.b.af(u,3553,null)
C.b.dX(u,36161,null)
C.b.aO(u,36160,null)}u=a.a
C.b.aO(u,36160,this.y)
C.b.bb(u,2884)
C.b.bb(u,2929)
C.b.e6(u,513)
t=this.dy
s=t.c
a.c=C.h.a3(s*this.a)
r=t.d
a.d=C.h.a3(r*this.b)
l=t.a
k=this.c
if(typeof k!=="number")return H.w(k)
j=C.h.a3(l*k)
t=t.b
l=this.d
if(typeof l!=="number")return H.w(l)
C.b.fc(u,j,C.h.a3(t*l),C.h.a3(s*k),C.h.a3(r*l))
C.b.e2(u,this.db)
t=this.cx
C.b.e1(u,t.a,t.b,t.c,t.d)
C.b.e0(u,16640)},
aQ:function(a){C.b.aO(a.a,36160,null)}}
X.bS.prototype={$ib7:1}
X.h5.prototype={
gn:function(){var u=this.x
if(u==null){u=D.L()
this.x=u}return u},
X:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.aO(u,36160,null)
C.b.bb(u,2884)
C.b.bb(u,2929)
C.b.e6(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.w(t)
p=C.h.a3(q*t)
q=r.b
if(typeof s!=="number")return H.w(s)
o=C.h.a3(q*s)
q=C.h.a3(r.c*t)
a.c=q
r=C.h.a3(r.d*s)
a.d=r
C.b.fc(u,p,o,q,r)
C.b.e2(u,this.c)
if(this.b){r=this.a
C.b.e1(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.e0(u,n)},
aQ:function(a){}}
X.h6.prototype={
gn:function(){var u=this.b
if(u==null){u=D.L()
this.b=u}return u},
$ib7:1,
$ibS:1}
X.dW.prototype={
gn:function(){var u=this.f
if(u==null){u=D.L()
this.f=u}return u},
at:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.D(a)},
fR:function(){return this.at(null)},
sbe:function(a){var u,t
if(!J.P(this.b,a)){u=this.b
if(u!=null)u.gn().G(0,this.gd9())
t=this.b
this.b=a
if(a!=null)a.gn().h(0,this.gd9())
u=new D.x("mover",t,this.b,this,[U.ah])
u.b=!0
this.at(u)}},
$ib7:1,
$ibS:1}
X.cL.prototype={}
V.fA.prototype={
aX:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
H.m(c,{func:1,ret:-1,args:[P.a1]})
if(this.c==null)return
u=this.d.length
t=P.kR().gbU().i(0,this.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.e(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.ld(this.c).h(0,p)
n=W.n2("checkbox")
n.checked=s
o=W.p
W.ac(n,"change",H.m(new V.fB(this,c,n,u),{func:1,ret:-1,args:[o]}),!1,o)
C.B.a_(p,n)
m=q.createElement("span")
m.textContent=b
C.B.a_(p,m)
J.ld(this.c).h(0,q.createElement("br"))
C.a.h(this.d,n)
if(r)this.dP(u,s)},
dP:function(a,b){var u,t,s,r,q,p,o
u=this.a
t=P.kR().gbU().i(0,u)
if(t==null)t=""
s=t.length
if(s<a)t=C.c.kD(t,a-s+1,"0")
r=a>0?C.c.q(t,0,a):""
r+=b?"1":"0"
s=a+1
if(s<t.length)r+=C.c.aJ(t,s)
q=P.kR()
s=P.j
p=P.n8(q.gbU(),s,s)
p.l(0,u,r)
o=q.f_(0,p)
u=window.history
s=o.j(0)
u.toString;(u&&C.O).iM(u,new P.jK([],[]).cY(""),"",s)},
sh_:function(a){this.d=H.l(a,"$ib",[W.ck],"$ab")}}
V.fB.prototype={
$1:function(a){var u=this.c
this.b.$1(u.checked)
this.a.dP(this.d,u.checked)},
$S:15}
V.ks.prototype={
$1:function(a){H.f(a,"$ibb")
P.av(C.h.f6(this.a.gkh(),2)+" fps")},
$S:48}
V.i4.prototype={
fB:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.w).a_(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.w.a_(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.a_(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.a_(q,p)}o=u.createElement("div")
this.a=o
C.l.a_(q,o)
this.b=null
o=W.p
W.ac(u,"scroll",H.m(new V.i6(s),{func:1,ret:-1,args:[o]}),!1,o)},
dR:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.j],"$ab")
this.iZ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.l1(C.a.kn(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.a_(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.a_(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.a_(t,o)
break
case"Link":n=p.b
if(H.oF(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.N(m[1])
l.textContent=H.N(m[0])
C.l.a_(t,l)}else{k=P.jU(C.a_,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.n(k)
l.textContent=n
C.l.a_(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.a_(t,o)
break}}C.l.a_(this.a,t)},
jK:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[P.j],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.l.a_(this.a,t)
r=C.a4.ho(t,-1)
s=H.f((r&&C.G).du(r,-1),"$iba").style
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
o=H.f(C.G.du(r,-1),"$iba")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.a3).a_(o,p)}},
iZ:function(){var u,t,s,r
if(this.b!=null)return
u=new V.iv()
t=P.j
u.sj5(new H.aM([t,V.cJ]))
u.sja(new H.aM([t,V.cM]))
u.c=null
u.c=u.T(0,"Start")
t=u.T(0,"Start").F(0,"Bold")
s=V.ak(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"Bold").F(0,"Bold")
s=new V.bn()
r=[V.bm]
s.saM(H.d([],r))
C.a.h(t.a,s)
t=V.ak(new H.a4("*"))
C.a.h(s.a,t)
t=u.T(0,"Bold").F(0,"BoldEnd")
s=V.ak(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"Start").F(0,"Italic")
s=V.ak(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"Italic").F(0,"Italic")
s=new V.bn()
s.saM(H.d([],r))
C.a.h(t.a,s)
t=V.ak(new H.a4("_"))
C.a.h(s.a,t)
t=u.T(0,"Italic").F(0,"ItalicEnd")
s=V.ak(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"Start").F(0,"Code")
s=V.ak(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"Code").F(0,"Code")
s=new V.bn()
s.saM(H.d([],r))
C.a.h(t.a,s)
t=V.ak(new H.a4("`"))
C.a.h(s.a,t)
t=u.T(0,"Code").F(0,"CodeEnd")
s=V.ak(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"Start").F(0,"LinkHead")
s=V.ak(new H.a4("["))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"LinkHead").F(0,"LinkTail")
s=V.ak(new H.a4("|"))
C.a.h(t.a,s)
s=u.T(0,"LinkHead").F(0,"LinkEnd")
t=V.ak(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.T(0,"LinkHead").F(0,"LinkHead")
t=new V.bn()
t.saM(H.d([],r))
C.a.h(s.a,t)
s=V.ak(new H.a4("|]"))
C.a.h(t.a,s)
s=u.T(0,"LinkTail").F(0,"LinkEnd")
t=V.ak(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.T(0,"LinkTail").F(0,"LinkTail")
t=new V.bn()
t.saM(H.d([],r))
C.a.h(s.a,t)
s=V.ak(new H.a4("|]"))
C.a.h(t.a,s)
C.a.h(u.T(0,"Start").F(0,"Other").a,new V.fl())
s=u.T(0,"Other").F(0,"Other")
t=new V.bn()
t.saM(H.d([],r))
C.a.h(s.a,t)
s=V.ak(new H.a4("*_`["))
C.a.h(t.a,s)
s=u.T(0,"BoldEnd")
s.d=s.a.bk("Bold")
s=u.T(0,"ItalicEnd")
s.d=s.a.bk("Italic")
s=u.T(0,"CodeEnd")
s.d=s.a.bk("Code")
s=u.T(0,"LinkEnd")
s.d=s.a.bk("Link")
s=u.T(0,"Other")
s.d=s.a.bk("Other")
this.b=u}}
V.i6.prototype={
$1:function(a){P.lL(C.u,new V.i5(this.a))},
$S:15}
V.i5.prototype={
$0:function(){var u,t,s
u=C.h.a3(document.documentElement.scrollTop)
t=this.a.style
s=H.n(-0.01*u)+"px"
t.top=s},
$S:1}
K.kj.prototype={
$1:function(a){var u,t,s,r,q,p
H.f(a,"$iA")
u=this.b.f
t=this.c
s=t.r
r=t.x
u=u.a
C.b.aO(u,36160,u.createFramebuffer())
C.b.eD(u,36160,36064,3553,t.b,0)
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.w(r)
q=new Uint8Array(s*r*4)
C.b.iG(u,0,0,s,r,6408,5121,q)
C.b.aO(u,36160,null)
p=F.oq(150,null,150)
u=this.a
u.a=p
p.au()
u.a.jP(new T.is(q,s,r),0.05)
r=u.a
s=$.aX()
s.toString
r.l4(new Z.aE($.l7().a&~s.a))
u.a.l2(!1)
u.a.au()},
$S:9}
K.kk.prototype={
$1:function(a){var u,t
u=this.a
t=u.r
t.sbX(a?this.b:null)
u=u.x
u.sbX(a?this.b:null)},
$S:4}
K.kl.prototype={
$1:function(a){var u=this.a.z
u.sbX(a?this.b:null)},
$S:4}
K.km.prototype={
$1:function(a){var u=this.a.Q
u.sbX(a?this.b:null)},
$S:4}
K.kn.prototype={
$1:function(a){var u=a?this.a.a:this.c
this.b.sc3(0,u)},
$S:4}
K.ko.prototype={
$1:function(a){var u=a?this.b.ch:null
this.a.se7(u)},
$S:4}
K.kp.prototype={
$1:function(a){var u=a?this.b:null
this.a.saj(u)},
$S:4};(function aliases(){var u=J.a.prototype
u.fs=u.j
u=J.dJ.prototype
u.ft=u.j
u=O.cw.prototype
u.d5=u.aA
u=O.b5.prototype
u.c4=u.aA
u=V.dP.prototype
u.fu=u.aZ
u.d4=u.j})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"oe","nL",13)
u(P,"of","nM",13)
u(P,"og","nN",13)
t(P,"me","od",3)
var n
s(n=E.ai.prototype,"geT",0,0,null,["$1","$0"],["eU","kA"],0,0)
s(n,"geV",0,0,null,["$1","$0"],["eW","kB"],0,0)
s(n,"geR",0,0,null,["$1","$0"],["eS","kz"],0,0)
s(n,"geP",0,0,null,["$1","$0"],["eQ","kw"],0,0)
r(n,"gku","kv",8)
r(n,"gkx","ky",8)
s(n=E.ee.prototype,"gd6",0,0,null,["$1","$0"],["d8","d7"],0,0)
q(n,"gkS","f0",3)
p(n=X.em.prototype,"gi2","i3",12)
p(n,"ghN","hO",12)
p(n,"ghT","hU",5)
p(n,"gi6","i7",16)
p(n,"gi4","i5",16)
p(n,"gia","ib",5)
p(n,"gig","ih",5)
p(n,"ghX","hY",5)
p(n,"gic","ie",5)
p(n,"ghV","hW",5)
p(n,"gii","ij",41)
p(n,"gik","il",12)
p(n,"giB","iC",14)
p(n,"gix","iy",14)
p(n,"giz","iA",14)
s(n=D.dM.prototype,"gdC",0,0,null,["$1","$0"],["dD","i8"],0,0)
p(n,"gim","io",43)
r(n,"ghH","hI",22)
r(n,"gir","is",22)
s(D.bF.prototype,"gfG",0,0,null,["$1","$0"],["am","fH"],0,0)
o(V.Z.prototype,"gk","cK",23)
o(V.R.prototype,"gk","cK",23)
s(n=U.ct.prototype,"gbq",0,0,null,["$1","$0"],["P","az"],0,0)
r(n,"gfN","fO",24)
r(n,"gip","iq",24)
s(n=U.en.prototype,"gbq",0,0,null,["$1","$0"],["P","az"],0,0)
p(n,"ghz","hA",2)
p(n,"ghB","hC",2)
p(n,"ghD","hE",2)
p(n,"ghv","hw",2)
p(n,"ghx","hy",2)
p(n,"gjf","jg",2)
p(n,"gjd","je",2)
p(n,"gjb","jc",2)
p(U.eo.prototype,"ghF","hG",2)
s(n=M.dq.prototype,"ga2",0,0,null,["$1","$0"],["Z","b2"],0,0)
r(n,"git","iu",25)
r(n,"giv","iw",25)
s(M.ds.prototype,"ga2",0,0,null,["$1","$0"],["Z","b2"],0,0)
s(n=M.dy.prototype,"ga2",0,0,null,["$1","$0"],["Z","b2"],0,0)
r(n,"ghP","hQ",8)
r(n,"ghR","hS",8)
s(O.dB.prototype,"ga7",0,0,null,["$1","$0"],["v","ah"],0,0)
s(n=O.dR.prototype,"ga7",0,0,null,["$1","$0"],["v","ah"],0,0)
s(n,"giO",0,0,null,["$1","$0"],["dI","iP"],0,0)
r(n,"ghJ","hK",27)
r(n,"ghL","hM",27)
s(O.cw.prototype,"ga7",0,0,null,["$1","$0"],["v","ah"],0,0)
s(n=O.e9.prototype,"ga7",0,0,null,["$1","$0"],["v","ah"],0,0)
r(n,"ghZ","i_",28)
r(n,"gi0","i1",28)
s(O.aT.prototype,"ga7",0,0,null,["$1","$0"],["v","ah"],0,0)
s(X.dW.prototype,"gd9",0,0,null,["$1","$0"],["at","fR"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.S,null)
s(P.S,[H.kI,J.a,J.an,P.eF,P.i,H.dN,P.b1,H.bZ,H.cV,H.fF,H.hS,H.iA,P.bw,H.cl,H.eW,P.aj,H.hf,H.hh,H.ha,P.f1,P.bf,P.aG,P.eq,P.ig,P.cK,P.ih,P.bb,P.ao,P.jY,P.jG,P.cZ,P.jA,P.z,P.jP,P.ho,P.bV,P.jX,P.jV,P.a1,P.ap,P.a2,P.bv,P.hN,P.e4,P.ey,P.h4,P.b,P.D,P.I,P.at,P.j,P.aq,P.c8,P.iO,P.jH,W.fI,W.ck,W.C,W.dz,P.jJ,P.f6,P.jB,P.Q,O.W,O.cy,E.fw,E.ai,E.hT,E.ee,Z.ep,Z.c7,Z.bt,Z.by,Z.aE,D.fz,D.bx,D.A,X.dp,X.dK,X.hc,X.hl,X.aB,X.hD,X.iw,X.em,D.dv,D.a5,D.bF,D.e3,D.eb,D.ec,D.ed,V.a_,V.as,V.fV,V.cx,V.af,V.a9,V.a6,V.b9,V.c4,V.Z,V.R,U.en,U.eo,M.ds,M.dy,M.ax,A.dk,A.fo,A.ht,A.cO,A.cR,A.cP,A.cS,A.cQ,A.cT,A.bW,A.eh,A.iI,F.a8,F.fZ,F.bl,F.he,F.bG,F.e2,F.i1,F.i2,F.i3,F.al,F.iY,F.iZ,F.j1,F.j3,F.j4,F.j5,O.bp,O.cw,O.aT,T.iq,T.is,V.fl,V.bm,V.dP,V.i0,V.cJ,V.ef,V.cM,V.iv,X.cL,X.bS,X.h6,X.dW,V.fA,V.i4])
s(J.a,[J.h9,J.dH,J.dJ,J.b2,J.dI,J.c0,H.cB,H.bE,W.k,W.fk,W.bR,W.bU,W.b_,W.b0,W.U,W.es,W.fM,W.fO,W.eu,W.dx,W.ew,W.fQ,W.p,W.ez,W.aL,W.dD,W.eB,W.bk,W.hk,W.hx,W.eG,W.eH,W.aN,W.eI,W.eL,W.aO,W.eP,W.eR,W.aQ,W.eS,W.aR,W.eX,W.aC,W.f_,W.iu,W.aU,W.f2,W.iy,W.iT,W.f8,W.fa,W.fc,W.fe,W.fg,P.b4,P.eD,P.b8,P.eN,P.hR,P.eY,P.bc,P.f4,P.fp,P.er,P.dm,P.dA,P.dY,P.e_,P.c5,P.e1,P.e8,P.ej,P.eU])
s(J.dJ,[J.hO,J.cU,J.bB])
t(J.kH,J.b2)
s(J.dI,[J.dG,J.dF])
t(P.hj,P.eF)
s(P.hj,[H.ek,W.jh,W.jg,P.h0])
t(H.a4,H.ek)
s(P.i,[H.fT,H.hp,H.ja])
s(P.b1,[H.hq,H.jb])
t(H.fG,H.fF)
s(P.bw,[H.hK,H.hb,H.iM,H.iC,H.fy,H.hZ,P.dV,P.aY,P.iN,P.iK,P.ib,P.fE,P.fL])
s(H.cl,[H.kv,H.il,H.ke,H.kf,H.kg,P.jd,P.jc,P.je,P.jf,P.jO,P.jN,P.jn,P.jr,P.jo,P.jp,P.jq,P.ju,P.jv,P.jt,P.js,P.ii,P.ij,P.k5,P.jE,P.jD,P.jF,P.hi,P.hn,P.jW,P.fR,P.fS,P.iS,P.iP,P.iQ,P.iR,P.jQ,P.jR,P.jT,P.jS,P.k1,P.k0,P.k2,P.k3,W.hz,W.hB,W.hY,W.ie,W.jm,P.jL,P.k7,P.h1,P.h2,P.fr,E.hU,E.hV,E.hW,E.it,D.fX,D.fY,F.jZ,F.kt,F.ku,F.kb,F.kc,F.j7,F.j6,F.j_,F.j0,T.ir,V.fB,V.ks,V.i6,V.i5,K.kj,K.kk,K.kl,K.km,K.kn,K.ko,K.kp])
s(H.il,[H.ic,H.ci])
t(P.hm,P.aj)
t(H.aM,P.hm)
t(H.hg,H.fT)
t(H.dS,H.bE)
s(H.dS,[H.d_,H.d1])
t(H.d0,H.d_)
t(H.cC,H.d0)
t(H.d2,H.d1)
t(H.dT,H.d2)
s(H.dT,[H.hE,H.hF,H.hG,H.hH,H.hI,H.dU,H.cD])
t(P.jC,P.jY)
t(P.jz,P.jG)
t(P.f7,P.ho)
t(P.el,P.f7)
s(P.bV,[P.fu,P.fU])
t(P.bY,P.ih)
s(P.bY,[P.fv,P.iW,P.iV])
t(P.iU,P.fU)
s(P.a2,[P.t,P.o])
s(P.aY,[P.c3,P.h7])
t(P.jj,P.c8)
s(W.k,[W.H,W.h_,W.aP,W.d3,W.aS,W.aD,W.d5,W.j9,W.cX,P.fs,P.bQ])
s(W.H,[W.a0,W.bu,W.cp])
s(W.a0,[W.y,P.r])
s(W.y,[W.fm,W.fn,W.dl,W.bT,W.co,W.h3,W.cu,W.cv,W.dL,W.cz,W.i_,W.ba,W.e6,W.e7])
s(W.b_,[W.cm,W.fJ,W.fK])
t(W.fH,W.b0)
t(W.cn,W.es)
t(W.ev,W.eu)
t(W.dw,W.ev)
t(W.ex,W.ew)
t(W.fP,W.ex)
t(W.aA,W.bR)
t(W.eA,W.ez)
t(W.cr,W.eA)
t(W.eC,W.eB)
t(W.c_,W.eC)
t(W.dE,W.cp)
t(W.bK,W.p)
s(W.bK,[W.b3,W.ag,W.aV])
t(W.hy,W.eG)
t(W.hA,W.eH)
t(W.eJ,W.eI)
t(W.hC,W.eJ)
t(W.eM,W.eL)
t(W.cE,W.eM)
t(W.eQ,W.eP)
t(W.hP,W.eQ)
t(W.hX,W.eR)
t(W.d4,W.d3)
t(W.i8,W.d4)
t(W.eT,W.eS)
t(W.i9,W.eT)
t(W.id,W.eX)
t(W.f0,W.f_)
t(W.im,W.f0)
t(W.d6,W.d5)
t(W.io,W.d6)
t(W.f3,W.f2)
t(W.ix,W.f3)
t(W.j8,W.cz)
t(W.be,W.ag)
t(W.f9,W.f8)
t(W.ji,W.f9)
t(W.et,W.dx)
t(W.fb,W.fa)
t(W.jw,W.fb)
t(W.fd,W.fc)
t(W.eK,W.fd)
t(W.ff,W.fe)
t(W.jI,W.ff)
t(W.fh,W.fg)
t(W.jM,W.fh)
t(W.jk,P.ig)
t(W.kU,W.jk)
t(W.jl,P.cK)
t(P.jK,P.jJ)
t(P.aa,P.jB)
t(P.eE,P.eD)
t(P.hd,P.eE)
t(P.eO,P.eN)
t(P.hL,P.eO)
t(P.eZ,P.eY)
t(P.ik,P.eZ)
t(P.f5,P.f4)
t(P.iz,P.f5)
t(P.fq,P.er)
t(P.hM,P.bQ)
t(P.eV,P.eU)
t(P.ia,P.eV)
s(E.fw,[Z.dn,A.cI,T.bq])
s(D.A,[D.bz,D.bA,D.x,X.hQ])
s(X.hQ,[X.dO,X.bD,X.cA,X.eg])
s(O.W,[D.dM,U.ct,M.dq])
s(D.fz,[U.fD,U.ah])
s(U.ah,[U.dr,U.e0])
s(A.cI,[A.du,A.dC,A.dQ,A.ea])
s(A.eh,[A.J,A.iF,A.iG,A.iH,A.iE,A.T,A.ay,A.M,A.ei,A.iJ,A.c6,A.ab,A.a7,A.ar])
t(F.i7,F.fZ)
t(F.iD,F.he)
t(F.j2,F.j3)
t(F.hJ,F.j4)
s(O.bp,[O.fN,O.dB,O.dR,O.e9])
s(O.cw,[O.hr,O.hs,O.b5])
s(O.b5,[O.hu,O.hv])
t(T.bJ,T.bq)
t(T.ip,T.bJ)
s(V.dP,[V.bn,V.cN])
s(X.cL,[X.ft,X.h5])
u(H.ek,H.cV)
u(H.d_,P.z)
u(H.d0,H.bZ)
u(H.d1,P.z)
u(H.d2,H.bZ)
u(P.eF,P.z)
u(P.f7,P.jP)
u(W.es,W.fI)
u(W.eu,P.z)
u(W.ev,W.C)
u(W.ew,P.z)
u(W.ex,W.C)
u(W.ez,P.z)
u(W.eA,W.C)
u(W.eB,P.z)
u(W.eC,W.C)
u(W.eG,P.aj)
u(W.eH,P.aj)
u(W.eI,P.z)
u(W.eJ,W.C)
u(W.eL,P.z)
u(W.eM,W.C)
u(W.eP,P.z)
u(W.eQ,W.C)
u(W.eR,P.aj)
u(W.d3,P.z)
u(W.d4,W.C)
u(W.eS,P.z)
u(W.eT,W.C)
u(W.eX,P.aj)
u(W.f_,P.z)
u(W.f0,W.C)
u(W.d5,P.z)
u(W.d6,W.C)
u(W.f2,P.z)
u(W.f3,W.C)
u(W.f8,P.z)
u(W.f9,W.C)
u(W.fa,P.z)
u(W.fb,W.C)
u(W.fc,P.z)
u(W.fd,W.C)
u(W.fe,P.z)
u(W.ff,W.C)
u(W.fg,P.z)
u(W.fh,W.C)
u(P.eD,P.z)
u(P.eE,W.C)
u(P.eN,P.z)
u(P.eO,W.C)
u(P.eY,P.z)
u(P.eZ,W.C)
u(P.f4,P.z)
u(P.f5,W.C)
u(P.er,P.aj)
u(P.eU,P.z)
u(P.eV,W.C)})();(function constants(){var u=hunkHelpers.makeConstList
C.w=W.dl.prototype
C.n=W.bT.prototype
C.x=W.bU.prototype
C.l=W.co.prototype
C.O=W.dD.prototype
C.y=W.dE.prototype
C.P=J.a.prototype
C.a=J.b2.prototype
C.Q=J.dF.prototype
C.e=J.dG.prototype
C.o=J.dH.prototype
C.h=J.dI.prototype
C.c=J.c0.prototype
C.X=J.bB.prototype
C.B=W.dL.prototype
C.a2=W.cE.prototype
C.F=J.hO.prototype
C.b=P.c5.prototype
C.a3=W.ba.prototype
C.a4=W.e6.prototype
C.G=W.e7.prototype
C.v=J.cU.prototype
C.H=W.be.prototype
C.I=W.cX.prototype
C.K=new P.fv(!1)
C.J=new P.fu(C.K)
C.L=new P.hN()
C.M=new P.iW()
C.k=new P.jC()
C.d=new A.bW(0,"ColorSourceType.None")
C.j=new A.bW(1,"ColorSourceType.Solid")
C.f=new A.bW(2,"ColorSourceType.Texture2D")
C.i=new A.bW(3,"ColorSourceType.TextureCube")
C.u=new P.bv(0)
C.N=new P.bv(5e6)
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
C.C=H.d(u([127,2047,65535,1114111]),[P.o])
C.p=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.o])
C.q=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.r=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.Z=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.a_=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.t=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.D=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.a0=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.E=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.Y=H.d(u([]),[P.j])
C.a1=new H.fG(0,{},C.Y,[P.j,P.j])
C.m=new P.iU(!1)})();(function staticFields(){$.aZ=0
$.cj=null
$.lg=null
$.kX=!1
$.mi=null
$.mc=null
$.mo=null
$.k8=null
$.kh=null
$.l4=null
$.c9=null
$.da=null
$.db=null
$.kY=!1
$.Y=C.k
$.lv=null
$.hw=null
$.lD=null
$.bH=null
$.cH=null
$.lR=null
$.lU=null
$.lT=null
$.lS=null
$.mY="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.mX="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.n1="uniform mat4 projViewObjMat;                                 \nuniform mat3 txt2DMat;                                       \n                                                             \nattribute vec3 posAttr;                                      \nattribute vec2 txtAttr;                                      \n                                                             \nvarying vec2 txt2D;                                          \n                                                             \nvoid main()                                                  \n{                                                            \n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy; \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);           \n}                                                            \n"
$.n0="precision mediump float;                                  \n                                                          \n#define MAX_BLUR_RANGE 10.0                               \n#define BLUR_STEP 0.3333                                  \n                                                          \nuniform sampler2D colorTxt;                               \nuniform sampler2D depthTxt;                               \nuniform int nullColorTxt;                                 \nuniform int nullDepthTxt;                                 \nuniform float width;                                      \nuniform float height;                                     \nuniform float highOffset;                                 \nuniform float lowOffset;                                  \nuniform float depthLimit;                                 \n                                                          \nvarying vec2 txt2D;                                       \n                                                          \nfloat div;                                                \nvec4 color;                                               \n                                                          \nvoid offsetColor(float baseDepth, float tu, float tv)     \n{                                                         \n   vec2 txtOffset = vec2(txt2D.x + tu/width,              \n                         txt2D.y + tv/height);            \n   float depth = texture2D(depthTxt, txtOffset).r;        \n   if (depth - depthLimit > baseDepth) return;            \n   div += 1.0;                                            \n   color += texture2D(colorTxt, txtOffset);               \n}                                                         \n                                                          \nvoid main()                                               \n{                                                         \n   if(nullColorTxt > 0)                                   \n   {                                                      \n      gl_FragColor = vec4(1.0);                           \n      return;                                             \n   }                                                      \n   color = texture2D(colorTxt, txt2D);                    \n   float baseDepth;                                       \n   if(nullDepthTxt > 0) baseDepth = 1.0;                  \n   else baseDepth = texture2D(depthTxt, txt2D).r;         \n   float offset = mix(lowOffset, highOffset, baseDepth);  \n   offset = abs(offset);                                  \n   div = 1.0;                                             \n   if(offset >= 1.0)                                      \n   {                                                      \n      for(float x=0.0; x<MAX_BLUR_RANGE; x+=BLUR_STEP)    \n      {                                                   \n         if(x > offset) break;                            \n         for(float y=0.0; y<MAX_BLUR_RANGE; y+=BLUR_STEP) \n         {                                                \n            if(y > offset) break;                         \n            offsetColor(baseDepth,  x,  y);               \n            offsetColor(baseDepth,  x, -y);               \n            offsetColor(baseDepth, -x,  y);               \n            offsetColor(baseDepth, -x, -y);               \n         }                                                \n      }                                                   \n   }                                                      \n   gl_FragColor = color / div;                            \n}                                                         \n"
$.lC=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oL","mu",function(){return H.mh("_$dart_dartClosure")})
u($,"oM","l6",function(){return H.mh("_$dart_js")})
u($,"oQ","mv",function(){return H.bd(H.iB({
toString:function(){return"$receiver$"}}))})
u($,"oR","mw",function(){return H.bd(H.iB({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oS","mx",function(){return H.bd(H.iB(null))})
u($,"oT","my",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oW","mB",function(){return H.bd(H.iB(void 0))})
u($,"oX","mC",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oV","mA",function(){return H.bd(H.lN(null))})
u($,"oU","mz",function(){return H.bd(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oZ","mE",function(){return H.bd(H.lN(void 0))})
u($,"oY","mD",function(){return H.bd(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pe","l9",function(){return P.nK()})
u($,"pi","dh",function(){return[]})
u($,"p0","mF",function(){return P.nH()})
u($,"pf","mH",function(){return H.ne(H.bL(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"pg","mI",function(){return P.nt("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"ph","mJ",function(){return P.o5()})
u($,"p7","mG",function(){return Z.aF(0)})
u($,"p1","l7",function(){return Z.aF(511)})
u($,"p9","am",function(){return Z.aF(1)})
u($,"p8","aX",function(){return Z.aF(2)})
u($,"p3","bi",function(){return Z.aF(4)})
u($,"pa","aJ",function(){return Z.aF(8)})
u($,"pb","bj",function(){return Z.aF(16)})
u($,"p4","df",function(){return Z.aF(32)})
u($,"p5","dg",function(){return Z.aF(64)})
u($,"p6","l8",function(){return Z.aF(96)})
u($,"pc","bO",function(){return Z.aF(128)})
u($,"p2","bh",function(){return Z.aF(256)})
u($,"oK","mt",function(){return new V.fV(1e-9)})
u($,"oJ","F",function(){return $.mt()})})()
var v={mangledGlobalNames:{o:"int",t:"double",a2:"num",j:"String",a1:"bool",I:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.A]},{func:1,ret:P.I},{func:1,ret:-1,args:[D.A]},{func:1,ret:-1},{func:1,ret:P.I,args:[P.a1]},{func:1,ret:-1,args:[W.ag]},{func:1,ret:P.I,args:[,,]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[P.o,[P.i,E.ai]]},{func:1,ret:P.I,args:[D.A]},{func:1,ret:P.I,args:[F.a8]},{func:1,ret:P.I,args:[F.al,P.t,P.t]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aV]},{func:1,ret:P.I,args:[W.p]},{func:1,ret:-1,args:[W.b3]},{func:1,args:[,]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:P.I,args:[,]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.j,args:[P.o]},{func:1,ret:-1,args:[P.o,[P.i,D.a5]]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.o,[P.i,U.ah]]},{func:1,ret:-1,args:[P.o,[P.i,M.ax]]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:-1,args:[P.o,[P.i,V.af]]},{func:1,ret:-1,args:[P.o,[P.i,O.aT]]},{func:1,ret:P.I,args:[P.j,,]},{func:1,ret:P.Q,args:[P.o]},{func:1,ret:P.Q,args:[,,]},{func:1,args:[,P.j]},{func:1,args:[W.p]},{func:1,ret:P.a1,args:[W.H]},{func:1,ret:W.a0,args:[W.H]},{func:1,args:[P.j]},{func:1,ret:P.I,args:[,],opt:[P.at]},{func:1,ret:P.I,args:[P.a2]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:-1,args:[W.be]},{func:1,ret:[P.D,P.j,P.j],args:[[P.D,P.j,P.j],P.j]},{func:1,ret:P.a1,args:[[P.i,D.a5]]},{func:1,ret:-1,args:[P.j,P.o]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:-1,args:[P.j],opt:[,]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:P.I,args:[P.bb]},{func:1,ret:P.I,args:[P.j]},{func:1,ret:[P.aG,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cB,DataView:H.bE,ArrayBufferView:H.bE,Float32Array:H.cC,Float64Array:H.cC,Int16Array:H.hE,Int32Array:H.hF,Int8Array:H.hG,Uint16Array:H.hH,Uint32Array:H.hI,Uint8ClampedArray:H.dU,CanvasPixelArray:H.dU,Uint8Array:H.cD,HTMLBRElement:W.y,HTMLBaseElement:W.y,HTMLButtonElement:W.y,HTMLContentElement:W.y,HTMLDListElement:W.y,HTMLDataElement:W.y,HTMLDataListElement:W.y,HTMLDetailsElement:W.y,HTMLDialogElement:W.y,HTMLEmbedElement:W.y,HTMLFieldSetElement:W.y,HTMLHRElement:W.y,HTMLHeadElement:W.y,HTMLHeadingElement:W.y,HTMLHtmlElement:W.y,HTMLIFrameElement:W.y,HTMLLIElement:W.y,HTMLLegendElement:W.y,HTMLLinkElement:W.y,HTMLMapElement:W.y,HTMLMenuElement:W.y,HTMLMetaElement:W.y,HTMLMeterElement:W.y,HTMLModElement:W.y,HTMLOListElement:W.y,HTMLObjectElement:W.y,HTMLOptGroupElement:W.y,HTMLOptionElement:W.y,HTMLOutputElement:W.y,HTMLParagraphElement:W.y,HTMLParamElement:W.y,HTMLPictureElement:W.y,HTMLPreElement:W.y,HTMLProgressElement:W.y,HTMLQuoteElement:W.y,HTMLScriptElement:W.y,HTMLShadowElement:W.y,HTMLSlotElement:W.y,HTMLSourceElement:W.y,HTMLSpanElement:W.y,HTMLStyleElement:W.y,HTMLTableCaptionElement:W.y,HTMLTableColElement:W.y,HTMLTableSectionElement:W.y,HTMLTemplateElement:W.y,HTMLTextAreaElement:W.y,HTMLTimeElement:W.y,HTMLTitleElement:W.y,HTMLTrackElement:W.y,HTMLUListElement:W.y,HTMLUnknownElement:W.y,HTMLDirectoryElement:W.y,HTMLFontElement:W.y,HTMLFrameElement:W.y,HTMLFrameSetElement:W.y,HTMLMarqueeElement:W.y,HTMLElement:W.y,AccessibleNodeList:W.fk,HTMLAnchorElement:W.fm,HTMLAreaElement:W.fn,Blob:W.bR,HTMLBodyElement:W.dl,HTMLCanvasElement:W.bT,CanvasRenderingContext2D:W.bU,CDATASection:W.bu,CharacterData:W.bu,Comment:W.bu,ProcessingInstruction:W.bu,Text:W.bu,CSSNumericValue:W.cm,CSSUnitValue:W.cm,CSSPerspective:W.fH,CSSCharsetRule:W.U,CSSConditionRule:W.U,CSSFontFaceRule:W.U,CSSGroupingRule:W.U,CSSImportRule:W.U,CSSKeyframeRule:W.U,MozCSSKeyframeRule:W.U,WebKitCSSKeyframeRule:W.U,CSSKeyframesRule:W.U,MozCSSKeyframesRule:W.U,WebKitCSSKeyframesRule:W.U,CSSMediaRule:W.U,CSSNamespaceRule:W.U,CSSPageRule:W.U,CSSRule:W.U,CSSStyleRule:W.U,CSSSupportsRule:W.U,CSSViewportRule:W.U,CSSStyleDeclaration:W.cn,MSStyleCSSProperties:W.cn,CSS2Properties:W.cn,CSSImageValue:W.b_,CSSKeywordValue:W.b_,CSSPositionValue:W.b_,CSSResourceValue:W.b_,CSSURLImageValue:W.b_,CSSStyleValue:W.b_,CSSMatrixComponent:W.b0,CSSRotation:W.b0,CSSScale:W.b0,CSSSkew:W.b0,CSSTranslation:W.b0,CSSTransformComponent:W.b0,CSSTransformValue:W.fJ,CSSUnparsedValue:W.fK,DataTransferItemList:W.fM,HTMLDivElement:W.co,XMLDocument:W.cp,Document:W.cp,DOMException:W.fO,ClientRectList:W.dw,DOMRectList:W.dw,DOMRectReadOnly:W.dx,DOMStringList:W.fP,DOMTokenList:W.fQ,Element:W.a0,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MessagePort:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aA,FileList:W.cr,FileWriter:W.h_,HTMLFormElement:W.h3,Gamepad:W.aL,History:W.dD,HTMLCollection:W.c_,HTMLFormControlsCollection:W.c_,HTMLOptionsCollection:W.c_,HTMLDocument:W.dE,ImageData:W.bk,HTMLImageElement:W.cu,HTMLInputElement:W.cv,KeyboardEvent:W.b3,HTMLLabelElement:W.dL,Location:W.hk,HTMLAudioElement:W.cz,HTMLMediaElement:W.cz,MediaList:W.hx,MIDIInputMap:W.hy,MIDIOutputMap:W.hA,MimeType:W.aN,MimeTypeArray:W.hC,PointerEvent:W.ag,MouseEvent:W.ag,DragEvent:W.ag,DocumentFragment:W.H,ShadowRoot:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cE,RadioNodeList:W.cE,Plugin:W.aO,PluginArray:W.hP,RTCStatsReport:W.hX,HTMLSelectElement:W.i_,SourceBuffer:W.aP,SourceBufferList:W.i8,SpeechGrammar:W.aQ,SpeechGrammarList:W.i9,SpeechRecognitionResult:W.aR,Storage:W.id,CSSStyleSheet:W.aC,StyleSheet:W.aC,HTMLTableCellElement:W.ba,HTMLTableDataCellElement:W.ba,HTMLTableHeaderCellElement:W.ba,HTMLTableElement:W.e6,HTMLTableRowElement:W.e7,TextTrack:W.aS,TextTrackCue:W.aD,VTTCue:W.aD,TextTrackCueList:W.im,TextTrackList:W.io,TimeRanges:W.iu,Touch:W.aU,TouchEvent:W.aV,TouchList:W.ix,TrackDefaultList:W.iy,CompositionEvent:W.bK,FocusEvent:W.bK,TextEvent:W.bK,UIEvent:W.bK,URL:W.iT,HTMLVideoElement:W.j8,VideoTrackList:W.j9,WheelEvent:W.be,Window:W.cX,DOMWindow:W.cX,CSSRuleList:W.ji,ClientRect:W.et,DOMRect:W.et,GamepadList:W.jw,NamedNodeMap:W.eK,MozNamedAttrMap:W.eK,SpeechRecognitionResultList:W.jI,StyleSheetList:W.jM,SVGLength:P.b4,SVGLengthList:P.hd,SVGNumber:P.b8,SVGNumberList:P.hL,SVGPointList:P.hR,SVGStringList:P.ik,SVGAElement:P.r,SVGAnimateElement:P.r,SVGAnimateMotionElement:P.r,SVGAnimateTransformElement:P.r,SVGAnimationElement:P.r,SVGCircleElement:P.r,SVGClipPathElement:P.r,SVGDefsElement:P.r,SVGDescElement:P.r,SVGDiscardElement:P.r,SVGEllipseElement:P.r,SVGFEBlendElement:P.r,SVGFEColorMatrixElement:P.r,SVGFEComponentTransferElement:P.r,SVGFECompositeElement:P.r,SVGFEConvolveMatrixElement:P.r,SVGFEDiffuseLightingElement:P.r,SVGFEDisplacementMapElement:P.r,SVGFEDistantLightElement:P.r,SVGFEFloodElement:P.r,SVGFEFuncAElement:P.r,SVGFEFuncBElement:P.r,SVGFEFuncGElement:P.r,SVGFEFuncRElement:P.r,SVGFEGaussianBlurElement:P.r,SVGFEImageElement:P.r,SVGFEMergeElement:P.r,SVGFEMergeNodeElement:P.r,SVGFEMorphologyElement:P.r,SVGFEOffsetElement:P.r,SVGFEPointLightElement:P.r,SVGFESpecularLightingElement:P.r,SVGFESpotLightElement:P.r,SVGFETileElement:P.r,SVGFETurbulenceElement:P.r,SVGFilterElement:P.r,SVGForeignObjectElement:P.r,SVGGElement:P.r,SVGGeometryElement:P.r,SVGGraphicsElement:P.r,SVGImageElement:P.r,SVGLineElement:P.r,SVGLinearGradientElement:P.r,SVGMarkerElement:P.r,SVGMaskElement:P.r,SVGMetadataElement:P.r,SVGPathElement:P.r,SVGPatternElement:P.r,SVGPolygonElement:P.r,SVGPolylineElement:P.r,SVGRadialGradientElement:P.r,SVGRectElement:P.r,SVGScriptElement:P.r,SVGSetElement:P.r,SVGStopElement:P.r,SVGStyleElement:P.r,SVGElement:P.r,SVGSVGElement:P.r,SVGSwitchElement:P.r,SVGSymbolElement:P.r,SVGTSpanElement:P.r,SVGTextContentElement:P.r,SVGTextElement:P.r,SVGTextPathElement:P.r,SVGTextPositioningElement:P.r,SVGTitleElement:P.r,SVGUseElement:P.r,SVGViewElement:P.r,SVGGradientElement:P.r,SVGComponentTransferFunctionElement:P.r,SVGFEDropShadowElement:P.r,SVGMPathElement:P.r,SVGTransform:P.bc,SVGTransformList:P.iz,AudioBuffer:P.fp,AudioParamMap:P.fq,AudioTrackList:P.fs,AudioContext:P.bQ,webkitAudioContext:P.bQ,BaseAudioContext:P.bQ,OfflineAudioContext:P.hM,WebGLBuffer:P.dm,WebGLFramebuffer:P.dA,WebGLProgram:P.dY,WebGLRenderbuffer:P.e_,WebGL2RenderingContext:P.c5,WebGLShader:P.e1,WebGLTexture:P.e8,WebGLUniformLocation:P.ej,SQLResultSetRowList:P.ia})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dS.$nativeSuperclassTag="ArrayBufferView"
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.d0.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.d1.$nativeSuperclassTag="ArrayBufferView"
H.d2.$nativeSuperclassTag="ArrayBufferView"
H.dT.$nativeSuperclassTag="ArrayBufferView"
W.d3.$nativeSuperclassTag="EventTarget"
W.d4.$nativeSuperclassTag="EventTarget"
W.d5.$nativeSuperclassTag="EventTarget"
W.d6.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.ml,[])
else K.ml([])})})()
//# sourceMappingURL=test.dart.js.map
