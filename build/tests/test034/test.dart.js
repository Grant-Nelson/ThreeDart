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
a[c]=function(){a[c]=function(){H.kB(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.hJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.hJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.hJ(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={hw:function hw(a){this.a=a},
jr:function(){return new P.eS("No element")},
R:function R(a){this.a=a},
dY:function dY(){},
cM:function cM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
en:function en(a,b,c){this.a=a
this.b=b
this.$ti=c},
eo:function eo(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fw:function fw(a,b,c){this.a=a
this.b=b
this.$ti=c},
fx:function fx(a,b,c){this.a=a
this.b=b
this.$ti=c},
bi:function bi(){},
dk:function dk(){},
dj:function dj(){},
bw:function(a){var u,t
u=H.P(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
kl:function(a){return v.types[H.X(a)]},
kq:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.O(a).$iaJ},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ai(a)
if(typeof u!=="string")throw H.i(H.b9(a))
return u},
jL:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.ea(u)
t=u[0]
s=u[1]
return new H.eE(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
bT:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bm:function(a){return H.jB(a)+H.hH(H.ba(a),0,null)},
jB:function(a){var u,t,s,r,q,p,o,n,m
u=J.O(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.E||!!u.$idi){p=C.w(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bw(r.length>1&&C.j.b0(r,0)===36?C.j.cv(r,1):r)},
id:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
jK:function(a){var u,t,s,r
u=H.b([],[P.u])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.w)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.i(H.b9(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.i.b3(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.i(H.b9(r))}return H.id(u)},
ie:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.b9(s))
if(s<0)throw H.i(H.b9(s))
if(s>65535)return H.jK(a)}return H.id(a)},
jJ:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.i.b3(u,10))>>>0,56320|u&1023)}throw H.i(P.aj(a,0,1114111,null,null))},
bl:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jI:function(a){var u=H.bl(a).getFullYear()+0
return u},
jG:function(a){var u=H.bl(a).getMonth()+1
return u},
jC:function(a){var u=H.bl(a).getDate()+0
return u},
jD:function(a){var u=H.bl(a).getHours()+0
return u},
jF:function(a){var u=H.bl(a).getMinutes()+0
return u},
jH:function(a){var u=H.bl(a).getSeconds()+0
return u},
jE:function(a){var u=H.bl(a).getMilliseconds()+0
return u},
y:function(a){throw H.i(H.b9(a))},
k:function(a,b){if(a==null)J.co(a)
throw H.i(H.ck(a,b))},
ck:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.au(!0,b,"index",null)
u=H.X(J.co(a))
if(!(b<0)){if(typeof u!=="number")return H.y(u)
t=b>=u}else t=!0
if(t)return P.bL(b,a,"index",null,u)
return P.eD(b,"index",null)},
ki:function(a,b,c){if(a>c)return new P.bn(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bn(a,c,!0,b,"end","Invalid value")
return new P.au(!0,b,"end",null)},
b9:function(a){return new P.au(!0,a,null,null)},
ke:function(a){if(typeof a!=="number")throw H.i(H.b9(a))
return a},
i:function(a){var u
if(a==null)a=new P.cX()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.iU})
u.name=""}else u.toString=H.iU
return u},
iU:function(){return J.ai(this.dartException)},
p:function(a){throw H.i(a)},
w:function(a){throw H.i(P.bD(a))},
aF:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.v])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.f6(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
f7:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ip:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
i8:function(a,b){return new H.ez(a,b==null?null:b.method)},
hx:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.ed(a,t,u?null:b.receiver)},
aR:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.hl(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.i.b3(s,16)&8191)===10)switch(r){case 438:return u.$1(H.hx(H.f(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.i8(H.f(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.iY()
p=$.iZ()
o=$.j_()
n=$.j0()
m=$.j3()
l=$.j4()
k=$.j2()
$.j1()
j=$.j6()
i=$.j5()
h=q.a9(t)
if(h!=null)return u.$1(H.hx(H.P(t),h))
else{h=p.a9(t)
if(h!=null){h.method="call"
return u.$1(H.hx(H.P(t),h))}else{h=o.a9(t)
if(h==null){h=n.a9(t)
if(h==null){h=m.a9(t)
if(h==null){h=l.a9(t)
if(h==null){h=k.a9(t)
if(h==null){h=n.a9(t)
if(h==null){h=j.a9(t)
if(h==null){h=i.a9(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.i8(H.P(t),h))}}return u.$1(new H.fi(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.d6()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.au(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.d6()
return a},
bu:function(a){var u
if(a==null)return new H.dC(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dC(a)},
kk:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.a_(0,a[t],a[s])}return b},
kp:function(a,b,c,d,e,f){H.h(a,"$iht")
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.o("Unsupported number of arguments for wrapped closure"))},
br:function(a,b){var u
H.X(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kp)
a.$identity=u
return u},
jk:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.O(d).$ia){u.$reflectionInfo=d
s=H.jL(u).r}else s=d
r=e?Object.create(new H.eT().constructor.prototype):Object.create(new H.by(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.av
if(typeof p!=="number")return p.C()
$.av=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.hW(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.kl,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.hU:H.ho
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.i("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.hW(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
jh:function(a,b,c,d){var u=H.ho
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
hW:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.jj(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.jh(t,!r,u,b)
if(t===0){r=$.av
if(typeof r!=="number")return r.C()
$.av=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bz
if(q==null){q=H.dO("self")
$.bz=q}return new Function(r+H.f(q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.av
if(typeof r!=="number")return r.C()
$.av=r+1
o+=r
r="return function("+o+"){return this."
q=$.bz
if(q==null){q=H.dO("self")
$.bz=q}return new Function(r+H.f(q)+"."+H.f(u)+"("+o+");}")()},
ji:function(a,b,c,d){var u,t
u=H.ho
t=H.hU
switch(b?-1:a){case 0:throw H.i(H.jO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
jj:function(a,b){var u,t,s,r,q,p,o,n
u=$.bz
if(u==null){u=H.dO("self")
$.bz=u}t=$.hT
if(t==null){t=H.dO("receiver")
$.hT=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.ji(r,!p,s,b)
if(r===1){u="return function(){return this."+H.f(u)+"."+H.f(s)+"(this."+H.f(t)+");"
t=$.av
if(typeof t!=="number")return t.C()
$.av=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.f(u)+"."+H.f(s)+"(this."+H.f(t)+", "+n+");"
t=$.av
if(typeof t!=="number")return t.C()
$.av=t+1
return new Function(u+t+"}")()},
hJ:function(a,b,c,d,e,f,g){return H.jk(a,b,H.X(c),d,!!e,!!f,g)},
ho:function(a){return a.a},
hU:function(a){return a.c},
dO:function(a){var u,t,s,r,q
u=new H.by("self","target","receiver","name")
t=J.ea(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
P:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.as(a,"String"))},
lf:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.as(a,"double"))},
kv:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.as(a,"num"))},
iI:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.as(a,"bool"))},
X:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.as(a,"int"))},
iQ:function(a,b){throw H.i(H.as(a,H.bw(H.P(b).substring(2))))},
kx:function(a,b){throw H.i(H.jg(a,H.bw(H.P(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.iQ(a,b)},
c:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else u=!0
if(u)return a
H.kx(a,b)},
hh:function(a){if(a==null)return a
if(!!J.O(a).$ia)return a
throw H.i(H.as(a,"List<dynamic>"))},
kr:function(a,b){var u
if(a==null)return a
u=J.O(a)
if(!!u.$ia)return a
if(u[b])return a
H.iQ(a,b)},
iJ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.X(u)]
else return a.$S()}return},
dH:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.iJ(J.O(a))
if(u==null)return!1
return H.iz(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.hE)return a
$.hE=!0
try{if(H.dH(a,b))return a
u=H.hj(b)
t=H.as(a,u)
throw H.i(t)}finally{$.hE=!1}},
hK:function(a,b){if(a!=null&&!H.hI(a,b))H.p(H.as(a,H.hj(b)))
return a},
as:function(a,b){return new H.f8("TypeError: "+P.e0(a)+": type '"+H.iD(a)+"' is not a subtype of type '"+b+"'")},
jg:function(a,b){return new H.dP("CastError: "+P.e0(a)+": type '"+H.iD(a)+"' is not a subtype of type '"+b+"'")},
iD:function(a){var u,t
u=J.O(a)
if(!!u.$ibB){t=H.iJ(u)
if(t!=null)return H.hj(t)
return"Closure"}return H.bm(a)},
kB:function(a){throw H.i(new P.dU(H.P(a)))},
jO:function(a){return new H.eJ(a)},
iL:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
ba:function(a){if(a==null)return
return a.$ti},
lg:function(a,b,c){return H.bv(a["$a"+H.f(c)],H.ba(b))},
hc:function(a,b,c,d){var u
H.P(c)
H.X(d)
u=H.bv(a["$a"+H.f(c)],H.ba(b))
return u==null?null:u[d]},
ao:function(a,b,c){var u
H.P(b)
H.X(c)
u=H.bv(a["$a"+H.f(b)],H.ba(a))
return u==null?null:u[c]},
q:function(a,b){var u
H.X(b)
u=H.ba(a)
return u==null?null:u[b]},
hj:function(a){return H.b8(a,null)},
b8:function(a,b){var u,t
H.d(b,"$ia",[P.v],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bw(a[0].name)+H.hH(a,1,b)
if(typeof a=="function")return H.bw(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.X(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.k(b,t)
return H.f(b[t])}if('func' in a)return H.k4(a,b)
if('futureOr' in a)return"FutureOr<"+H.b8("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k4:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.v]
H.d(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.k(b,m)
o=C.j.C(o,b[m])
l=t[p]
if(l!=null&&l!==P.G)o+=" extends "+H.b8(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.b8(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.b8(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.b8(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.kj(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.P(u[g])
i=i+h+H.b8(d[c],b)+(" "+H.f(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
hH:function(a,b,c){var u,t,s,r,q,p
H.d(c,"$ia",[P.v],"$aa")
if(a==null)return""
u=new P.b5("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b8(p,c)}return"<"+u.i(0)+">"},
bv:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cj:function(a,b,c,d){var u,t
H.P(b)
H.hh(c)
H.P(d)
if(a==null)return!1
u=H.ba(a)
t=J.O(a)
if(t[b]==null)return!1
return H.iG(H.bv(t[d],u),null,c,null)},
d:function(a,b,c,d){H.P(b)
H.hh(c)
H.P(d)
if(a==null)return a
if(H.cj(a,b,c,d))return a
throw H.i(H.as(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bw(b.substring(2))+H.hH(c,0,null),v.mangledGlobalNames)))},
iG:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.an(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.an(a[t],b,c[t],d))return!1
return!0},
ld:function(a,b,c){return a.apply(b,H.bv(J.O(b)["$a"+H.f(c)],H.ba(b)))},
iN:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="G"||a.name==="A"||a===-1||a===-2||H.iN(u)}return!1},
hI:function(a,b){var u,t
if(a==null)return b==null||b.name==="G"||b.name==="A"||b===-1||b===-2||H.iN(b)
if(b==null||b===-1||b.name==="G"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.hI(a,"type" in b?b.type:null))return!0
if('func' in b)return H.dH(a,b)}u=J.O(a).constructor
t=H.ba(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.an(u,null,b,null)},
x:function(a,b){if(a!=null&&!H.hI(a,b))throw H.i(H.as(a,H.hj(b)))
return a},
an:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="G"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="G"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.an(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="A")return!0
if('func' in c)return H.iz(a,b,c,d)
if('func' in a)return c.name==="ht"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.an("type" in a?a.type:null,b,s,d)
else if(H.an(a,b,s,d))return!0
else{if(!('$i'+"bI" in t.prototype))return!1
r=t.prototype["$a"+"bI"]
q=H.bv(r,u?a.slice(1):null)
return H.an(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.iG(H.bv(m,u),b,p,d)},
iz:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.ku(h,b,g,d)},
ku:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.an(c[r],d,a[r],b))return!1}return!0},
le:function(a,b,c){Object.defineProperty(a,H.P(b),{value:c,enumerable:false,writable:true,configurable:true})},
ks:function(a){var u,t,s,r,q,p
u=H.P($.iM.$1(a))
t=$.h9[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hg[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.P($.iF.$2(a,u))
if(u!=null){t=$.h9[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hg[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.hi(s)
$.h9[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.hg[u]=s
return s}if(q==="-"){p=H.hi(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.iP(a,s)
if(q==="*")throw H.i(P.iq(u))
if(v.leafTags[u]===true){p=H.hi(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.iP(a,s)},
iP:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.hM(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
hi:function(a){return J.hM(a,!1,null,!!a.$iaJ)},
kt:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.hi(u)
else return J.hM(u,c,null,null)},
kn:function(){if(!0===$.hL)return
$.hL=!0
H.ko()},
ko:function(){var u,t,s,r,q,p,o,n
$.h9=Object.create(null)
$.hg=Object.create(null)
H.km()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.iR.$1(q)
if(p!=null){o=H.kt(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
km:function(){var u,t,s,r,q,p,o
u=C.J()
u=H.bq(C.G,H.bq(C.L,H.bq(C.v,H.bq(C.v,H.bq(C.K,H.bq(C.H,H.bq(C.I(C.w),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.iM=new H.hd(q)
$.iF=new H.he(p)
$.iR=new H.hf(o)},
bq:function(a,b){return a(b)||b},
jt:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.i(new P.e6("Illegal RegExp pattern ("+String(r)+")",a,null))},
iS:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
iT:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eE:function eE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
f6:function f6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ez:function ez(a,b){this.a=a
this.b=b},
ed:function ed(a,b,c){this.a=a
this.b=b
this.c=c},
fi:function fi(a){this.a=a},
hl:function hl(a){this.a=a},
dC:function dC(a){this.a=a
this.b=null},
bB:function bB(){},
eY:function eY(){},
eT:function eT(){},
by:function by(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f8:function f8(a){this.a=a},
dP:function dP(a){this.a=a},
eJ:function eJ(a){this.a=a},
aK:function aK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ef:function ef(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eg:function eg(a,b){this.a=a
this.$ti=b},
eh:function eh(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hd:function hd(a){this.a=a},
he:function he(a){this.a=a},
hf:function hf(a){this.a=a},
ec:function ec(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cg:function(a){return a},
cf:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.ck(b,a))},
k3:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.ki(a,b,c))
return b},
cV:function cV(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
cW:function cW(){},
ey:function ey(){},
ca:function ca(){},
cb:function cb(){},
cc:function cc(){},
cd:function cd(){},
kj:function(a){return J.i4(a?Object.keys(a):[],null)},
kw:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
hM:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hb:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.hL==null){H.kn()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.i(P.iq("Return interceptor for "+H.f(t(a,u))))}r=a.constructor
q=r==null?null:r[$.hP()]
if(q!=null)return q
q=H.ks(a)
if(q!=null)return q
if(typeof a=="function")return C.M
t=Object.getPrototypeOf(a)
if(t==null)return C.x
if(t===Object.prototype)return C.x
if(typeof r=="function"){Object.defineProperty(r,$.hP(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
js:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.hn(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.aj(a,0,4294967295,"length",null))
return J.i4(new Array(a),b)},
i4:function(a,b){return J.ea(H.b(a,[b]))},
ea:function(a){H.hh(a)
a.fixed$length=Array
return a},
O:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cG.prototype
return J.cF.prototype}if(typeof a=="string")return J.bM.prototype
if(a==null)return J.cH.prototype
if(typeof a=="boolean")return J.eb.prototype
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
return a}if(a instanceof P.G)return a
return J.hb(a)},
ha:function(a){if(typeof a=="string")return J.bM.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
return a}if(a instanceof P.G)return a
return J.hb(a)},
iK:function(a){if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
return a}if(a instanceof P.G)return a
return J.hb(a)},
bt:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
return a}if(a instanceof P.G)return a
return J.hb(a)},
Y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).q(a,b)},
jb:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kq(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ha(a).j(a,b)},
jc:function(a,b,c,d){return J.bt(a).eN(a,b,c,d)},
jd:function(a,b,c){return J.bt(a).hm(a,b,c)},
hR:function(a,b){return J.bt(a).W(a,b)},
hm:function(a,b,c){return J.ha(a).iu(a,b,c)},
hS:function(a,b){return J.iK(a).a7(a,b)},
bb:function(a){return J.O(a).gD(a)},
dI:function(a){return J.iK(a).gN(a)},
co:function(a){return J.ha(a).gm(a)},
je:function(a,b){return J.bt(a).jb(a,b)},
ai:function(a){return J.O(a).i(a)},
Z:function Z(){},
eb:function eb(){},
cH:function cH(){},
cJ:function cJ(){},
eB:function eB(){},
di:function di(){},
b3:function b3(){},
ax:function ax(a){this.$ti=a},
hv:function hv(a){this.$ti=a},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cI:function cI(){},
cG:function cG(){},
cF:function cF(){},
bM:function bM(){}},P={
jV:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.kb()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.br(new P.fz(u),1)).observe(t,{childList:true})
return new P.fy(u,t,s)}else if(self.setImmediate!=null)return P.kc()
return P.kd()},
jW:function(a){self.scheduleImmediate(H.br(new P.fA(H.l(a,{func:1,ret:-1})),0))},
jX:function(a){self.setImmediate(H.br(new P.fB(H.l(a,{func:1,ret:-1})),0))},
jY:function(a){P.hA(C.n,H.l(a,{func:1,ret:-1}))},
hA:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.i.Y(a.a,1000)
return P.k0(u<0?0:u,b)},
io:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.aD]})
u=C.i.Y(a.a,1000)
return P.k1(u<0?0:u,b)},
k0:function(a,b){var u=new P.dD(!0)
u.eI(a,b)
return u},
k1:function(a,b){var u=new P.dD(!1)
u.eJ(a,b)
return u},
jZ:function(a,b){var u,t,s
b.a=1
try{a.e5(new P.fI(b),new P.fJ(b),null)}catch(s){u=H.aR(s)
t=H.bu(s)
P.ky(new P.fK(b,u,t))}},
iv:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iam")
if(u>=4){t=b.bR()
b.a=a.a
b.c=a.c
P.c8(b,t)}else{t=H.h(b.c,"$iaI")
b.a=2
b.c=a
a.d1(t)}},
c8:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.h(t.c,"$ia5")
t=t.b
p=q.a
o=q.b
t.toString
P.h5(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.c8(u.a,b)}t=u.a
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
if(k){H.h(m,"$ia5")
t=t.b
p=m.a
o=m.b
t.toString
P.h5(null,null,t,p,o)
return}j=$.L
if(j!=l)$.L=l
else j=null
t=b.c
if(t===8)new P.fO(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.fN(s,b,m).$0()}else if((t&2)!==0)new P.fM(u,s,b).$0()
if(j!=null)$.L=j
t=s.b
if(!!J.O(t).$ibI){if(t.a>=4){i=H.h(o.c,"$iaI")
o.c=null
b=o.b2(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.iv(t,o)
return}}h=b.b
i=H.h(h.c,"$iaI")
h.c=null
b=h.b2(i)
t=s.a
p=s.b
if(!t){H.x(p,H.q(h,0))
h.a=4
h.c=p}else{H.h(p,"$ia5")
h.a=8
h.c=p}u.a=h
t=h}},
k7:function(a,b){if(H.dH(a,{func:1,args:[P.G,P.ac]}))return H.l(a,{func:1,ret:null,args:[P.G,P.ac]})
if(H.dH(a,{func:1,args:[P.G]}))return H.l(a,{func:1,ret:null,args:[P.G]})
throw H.i(P.hn(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k6:function(){var u,t
for(;u=$.bp,u!=null;){$.ci=null
t=u.b
$.bp=t
if(t==null)$.ch=null
u.a.$0()}},
ka:function(){$.hF=!0
try{P.k6()}finally{$.ci=null
$.hF=!1
if($.bp!=null)$.hQ().$1(P.iH())}},
iC:function(a){var u=new P.dt(H.l(a,{func:1,ret:-1}))
if($.bp==null){$.ch=u
$.bp=u
if(!$.hF)$.hQ().$1(P.iH())}else{$.ch.b=u
$.ch=u}},
k9:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.bp
if(u==null){P.iC(a)
$.ci=$.ch
return}t=new P.dt(a)
s=$.ci
if(s==null){t.b=u
$.ci=t
$.bp=t}else{t.b=s.b
s.b=t
$.ci=t
if(t.b==null)$.ch=t}},
ky:function(a){var u,t
u={func:1,ret:-1}
H.l(a,u)
t=$.L
if(C.k===t){P.h7(null,null,C.k,a)
return}t.toString
P.h7(null,null,t,H.l(t.bY(a),u))},
im:function(a,b){var u,t
u={func:1,ret:-1}
H.l(b,u)
t=$.L
if(t===C.k){t.toString
return P.hA(a,b)}return P.hA(a,H.l(t.bY(b),u))},
jU:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aD]}
H.l(b,u)
t=$.L
if(t===C.k){t.toString
return P.io(a,b)}s=t.dd(b,P.aD)
$.L.toString
return P.io(a,H.l(s,u))},
h5:function(a,b,c,d,e){var u={}
u.a=d
P.k9(new P.h6(u,e))},
iA:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.L
if(t===c)return d.$0()
$.L=c
u=t
try{t=d.$0()
return t}finally{$.L=u}},
iB:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.x(e,g)
t=$.L
if(t===c)return d.$1(e)
$.L=c
u=t
try{t=d.$1(e)
return t}finally{$.L=u}},
k8:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
t=$.L
if(t===c)return d.$2(e,f)
$.L=c
u=t
try{t=d.$2(e,f)
return t}finally{$.L=u}},
h7:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.bY(d):c.il(d,-1)
P.iC(d)},
fz:function fz(a){this.a=a},
fy:function fy(a,b,c){this.a=a
this.b=b
this.c=c},
fA:function fA(a){this.a=a},
fB:function fB(a){this.a=a},
dD:function dD(a){this.a=a
this.b=null
this.c=0},
h0:function h0(a,b){this.a=a
this.b=b},
h_:function h_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aI:function aI(a,b,c,d,e){var _=this
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
fH:function fH(a,b){this.a=a
this.b=b},
fL:function fL(a,b){this.a=a
this.b=b},
fI:function fI(a){this.a=a},
fJ:function fJ(a){this.a=a},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
fO:function fO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fP:function fP(a){this.a=a},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
fM:function fM(a,b,c){this.a=a
this.b=b
this.c=c},
dt:function dt(a){this.a=a
this.b=null},
eU:function eU(){},
eW:function eW(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
bW:function bW(){},
eV:function eV(){},
aD:function aD(){},
a5:function a5(a,b){this.a=a
this.b=b},
h2:function h2(){},
h6:function h6(a,b){this.a=a
this.b=b},
fV:function fV(){},
fX:function fX(a,b,c){this.a=a
this.b=b
this.c=c},
fW:function fW(a,b){this.a=a
this.b=b},
fY:function fY(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function(a,b,c){H.hh(a)
return H.d(H.kk(a,new H.aK([b,c])),"$ii5",[b,c],"$ai5")},
jw:function(a,b,c,d){return new P.fS([d])},
iy:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ix:function(a,b,c){var u=new P.fT(a,b,[c])
u.c=a.e
return u},
jq:function(a,b,c){var u,t
if(P.hG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.v])
t=$.cn()
C.a.h(t,a)
try{P.k5(a,u)}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}t=P.ik(b,H.kr(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
hu:function(a,b,c){var u,t,s
if(P.hG(a))return b+"..."+c
u=new P.b5(b)
t=$.cn()
C.a.h(t,a)
try{s=u
s.a=P.ik(s.a,a,", ")}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
hG:function(a){var u,t
for(u=0;t=$.cn(),u<t.length;++u)if(a===t[u])return!0
return!1},
k5:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.d(b,"$ia",[P.v],"$aa")
u=a.gN(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.v())return
r=H.f(u.gK())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.v()){if(s<=5)return
if(0>=b.length)return H.k(b,-1)
q=b.pop()
if(0>=b.length)return H.k(b,-1)
p=b.pop()}else{o=u.gK();++s
if(!u.v()){if(s<=4){C.a.h(b,H.f(o))
return}q=H.f(o)
if(0>=b.length)return H.k(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gK();++s
for(;u.v();o=n,n=m){m=u.gK();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.f(o)
q=H.f(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
i6:function(a){var u,t
u={}
if(P.hG(a))return"{...}"
t=new P.b5("")
try{C.a.h($.cn(),a)
t.a+="{"
u.a=!0
a.a8(0,new P.el(u,t))
t.a+="}"}finally{u=$.cn()
if(0>=u.length)return H.k(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
fS:function fS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c9:function c9(a){this.a=a
this.c=this.b=null},
fT:function fT(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ei:function ei(){},
N:function N(){},
ek:function ek(){},
el:function el(a,b){this.a=a
this.b=b},
em:function em(){},
fZ:function fZ(){},
dz:function dz(){},
bC:function bC(){},
cw:function cw(){},
dZ:function dZ(){},
fk:function fk(a){this.a=a},
fl:function fl(){},
h1:function h1(a){this.b=this.a=0
this.c=a},
jp:function(a){if(a instanceof H.bB)return a.i(0)
return"Instance of '"+H.bm(a)+"'"},
jx:function(a,b,c,d){var u,t
H.x(b,d)
u=J.js(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.a_(u,t,b)
return H.d(u,"$ia",[d],"$aa")},
jy:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gN(a);s.v();)C.a.h(t,H.x(s.gK(),c))
if(b)return t
return H.d(J.ea(t),"$ia",u,"$aa")},
hz:function(a,b,c){var u,t
u=P.u
H.d(a,"$ij",[u],"$aj")
if(a.constructor===Array){H.d(a,"$iax",[u],"$aax")
t=a.length
c=P.ig(b,c,t,null,null,null)
return H.ie(b>0||c<t?C.a.ep(a,b,c):a)}return P.jS(a,b,c)},
jS:function(a,b,c){var u,t,s
H.d(a,"$ij",[P.u],"$aj")
u=J.dI(a)
for(t=0;t<b;++t)if(!u.v())throw H.i(P.aj(b,0,t,null,null))
s=[]
for(;u.v();)s.push(u.gK())
return H.ie(s)},
jM:function(a,b,c){return new H.ec(a,H.jt(a,!1,!0,!1))},
ik:function(a,b,c){var u=J.dI(b)
if(!u.v())return a
if(c.length===0){do a+=H.f(u.gK())
while(u.v())}else{a+=H.f(u.gK())
for(;u.v();)a=a+c+H.f(u.gK())}return a},
k2:function(a,b,c,d){var u,t,s,r,q,p
H.d(a,"$ia",[P.u],"$aa")
if(c===C.y){u=$.ja().b
u=u.test(b)}else u=!1
if(u)return b
t=C.C.iv(H.x(b,H.ao(c,"bC",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.k(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jJ(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
jl:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
jm:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cy:function(a){if(a>=10)return""+a
return"0"+a},
i1:function(a,b,c,d,e,f){return new P.aY(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
e0:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ai(a)
if(typeof a==="string")return JSON.stringify(a)
return P.jp(a)},
jf:function(a){return new P.au(!1,null,null,a)},
hn:function(a,b,c){return new P.au(!0,a,b,c)},
eD:function(a,b,c){return new P.bn(null,null,!0,a,b,"Value not in range")},
aj:function(a,b,c,d,e){return new P.bn(b,c,!0,a,d,"Invalid value")},
ig:function(a,b,c,d,e,f){if(0>a||a>c)throw H.i(P.aj(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.i(P.aj(b,a,c,"end",f))
return b}return c},
bL:function(a,b,c,d,e){var u=H.X(e==null?J.co(b):e)
return new P.e9(b,u,!0,a,c,"Index out of range")},
ag:function(a){return new P.fj(a)},
iq:function(a){return new P.fh(a)},
bD:function(a){return new P.dS(a)},
o:function(a){return new P.dw(a)},
hO:function(a){H.kw(a)},
W:function W(){},
aa:function aa(a,b){this.a=a
this.b=b},
t:function t(){},
aY:function aY(a){this.a=a},
dW:function dW(){},
dX:function dX(){},
aZ:function aZ(){},
cX:function cX(){},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bn:function bn(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e9:function e9(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fj:function fj(a){this.a=a},
fh:function fh(a){this.a=a},
eS:function eS(a){this.a=a},
dS:function dS(a){this.a=a},
eA:function eA(){},
d6:function d6(){},
dU:function dU(a){this.a=a},
dw:function dw(a){this.a=a},
e6:function e6(a,b,c){this.a=a
this.b=b
this.c=c},
u:function u(){},
j:function j(){},
aw:function aw(){},
a:function a(){},
A:function A(){},
a4:function a4(){},
G:function G(){},
ac:function ac(){},
v:function v(){},
b5:function b5(a){this.a=a},
kh:function(a){var u,t
u=J.O(a)
if(!!u.$ib_){t=u.gdk(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.dG(a.data,a.height,a.width)},
kg:function(a){if(a instanceof P.dG)return{data:a.a,height:a.b,width:a.c}
return a},
kf:function(a,b){var u={}
a.a8(0,new P.h8(u))
return u},
i0:function(){var u=$.i_
if(u==null){u=J.hm(window.navigator.userAgent,"Opera",0)
$.i_=u}return u},
jn:function(){var u,t
u=$.hX
if(u!=null)return u
t=$.hY
if(t==null){t=J.hm(window.navigator.userAgent,"Firefox",0)
$.hY=t}if(t)u="-moz-"
else{t=$.hZ
if(t==null){t=!P.i0()&&J.hm(window.navigator.userAgent,"Trident/",0)
$.hZ=t}if(t)u="-ms-"
else u=P.i0()?"-o-":"-webkit-"}$.hX=u
return u},
dG:function dG(a,b,c){this.a=a
this.b=b
this.c=c},
h8:function h8(a){this.a=a},
e2:function e2(a,b){this.a=a
this.b=b},
e3:function e3(){},
e4:function e4(){},
fR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k_:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fU:function fU(){},
ak:function ak(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
m:function m(){},
cr:function cr(){},
cD:function cD(){},
d_:function d_(){},
bo:function bo(){},
d1:function d1(){},
d7:function d7(){},
dh:function dh(){}},W={
hp:function(a,b){var u=document.createElement("canvas")
return u},
jo:function(a){H.h(a,"$ibh")
return"wheel"},
i3:function(a,b,c){var u=document.createElement("img")
u.src=b
return u},
fQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iw:function(a,b,c,d){var u,t
u=W.fQ(W.fQ(W.fQ(W.fQ(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
V:function(a,b,c,d,e){var u,t
u=W.iE(new W.fG(c),W.e)
t=u!=null
if(t&&!0){H.l(u,{func:1,args:[W.e]})
if(t)J.jc(a,b,u,!1)}return new W.fF(a,b,u,!1,[e])},
iE:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.L
if(u===C.k)return a
return u.dd(a,b)},
n:function n(){},
dK:function dK(){},
dL:function dL(){},
cq:function cq(){},
bd:function bd(){},
be:function be(){},
aX:function aX(){},
bg:function bg(){},
dT:function dT(){},
bE:function bE(){},
bF:function bF(){},
dV:function dV(){},
cA:function cA(){},
fD:function fD(a,b){this.a=a
this.b=b},
S:function S(){},
e:function e(){},
bh:function bh(){},
e5:function e5(){},
bj:function bj(){},
cE:function cE(){},
b_:function b_(){},
bK:function bK(){},
ay:function ay(){},
bP:function bP(){},
a_:function a_(){},
fC:function fC(a){this.a=a},
F:function F(){},
bR:function bR(){},
eK:function eK(){},
aE:function aE(){},
ar:function ar(){},
f5:function f5(){},
b7:function b7(){},
fv:function fv(){},
aH:function aH(){},
c7:function c7(){},
dv:function dv(){},
fE:function fE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fF:function fF(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
fG:function fG(a){this.a=a},
aq:function aq(){},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
du:function du(){},
dx:function dx(){},
dy:function dy(){},
dA:function dA(){},
dB:function dB(){},
dE:function dE(){},
dF:function dF(){}},O={
hq:function(a){var u=new O.M([a])
u.b_(a)
return u},
M:function M(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bO:function bO(){this.b=this.a=null},
cP:function cP(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ep:function ep(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bN:function bN(){},
eq:function eq(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aA:function aA(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
es:function es(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
et:function et(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d3:function d3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
b6:function b6(){}},E={
i2:function(a,b,c,d,e,f){var u=new E.a6()
u.a=d
u.b=!0
u.seB(0,O.hq(E.a6))
u.y.aI(u.giW(),u.giZ())
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
u.sbw(0,e)
return u},
jN:function(a,b){var u=new E.eF(a,b)
u.ex(a,b)
return u},
jT:function(a,b,c,d,e){var u,t,s,r
u=J.O(a)
if(!!u.$ibd)return E.il(a,!0,!0,!0,!1)
t=W.hp(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdh(a).h(0,t)
r=E.il(t,!0,!0,!0,!1)
r.a=a
return r},
il:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dd()
t=P.jv(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.v,null)
s=C.m.bu(a,"webgl",t)
s=H.h(s==null?C.m.bu(a,"experimental-webgl",t):s,"$ibo")
if(s==null)H.p(P.o("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.jN(s,a)
r=new T.f_(s)
r.b=H.X((s&&C.b).cs(s,3379))
r.c=H.X(C.b.cs(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dl(a)
q=new X.ee()
q.c=new X.ae(!1,!1,!1)
q.shi(P.jw(null,null,null,P.u))
r.b=q
q=new X.eu(r)
q.f=0
q.r=V.aP()
q.x=V.aP()
q.Q=1
q.ch=1
r.c=q
q=new X.ej(r)
q.r=0
q.x=V.aP()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.f4(r)
q.e=0
q.f=V.aP()
q.r=V.aP()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sf2(H.b([],[[P.bW,P.G]]))
q=r.z
p=document
o=W.a_
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.V(p,"contextmenu",H.l(r.gfE(),n),!1,o))
q=r.z
m=W.e
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.V(a,"focus",H.l(r.gfK(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.V(a,"blur",H.l(r.gfw(),l),!1,m))
q=r.z
k=W.ay
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.V(p,"keyup",H.l(r.gfO(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.V(p,"keydown",H.l(r.gfM(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.V(a,"mousedown",H.l(r.gfS(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.V(a,"mouseup",H.l(r.gfW(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.V(a,"mousemove",H.l(r.gfU(),n),!1,o))
k=r.z
j=W.aH;(k&&C.a).h(k,W.V(a,H.P(W.jo(a)),H.l(r.gfY(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.V(p,"mousemove",H.l(r.gfG(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.V(p,"mouseup",H.l(r.gfI(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.V(p,"pointerlockchange",H.l(r.gh_(),l),!1,m))
m=r.z
l=W.ar
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.V(a,"touchstart",H.l(r.ghf(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.V(a,"touchend",H.l(r.ghb(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.V(a,"touchmove",H.l(r.ghd(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.aa(Date.now(),!1)
u.cy=0
u.d3()
return u},
dN:function dN(){},
a6:function a6(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eF:function eF(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eG:function eG(a){this.a=a},
eH:function eH(a){this.a=a},
eI:function eI(a){this.a=a},
dd:function dd(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f2:function f2(a){this.a=a}},Z={
hC:function(a,b,c){var u
H.d(c,"$ia",[P.u],"$aa")
u=a.createBuffer()
C.b.aj(a,b,u)
C.b.df(a,b,new Int16Array(H.cg(c)),35044)
C.b.aj(a,b,null)
return new Z.dr(b,u)},
al:function(a){return new Z.aG(a)},
dr:function dr(a,b){this.a=a
this.b=b},
cs:function cs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ds:function ds(a){this.a=a},
bA:function bA(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
b0:function b0(a,b,c){this.a=a
this.b=b
this.c=c},
aG:function aG(a){this.a=a}},D={
C:function(){var u=new D.bG()
u.sai(null)
u.sbO(null)
u.c=null
u.d=0
return u},
dQ:function dQ(){},
bG:function bG(){var _=this
_.d=_.c=_.b=_.a=null},
e1:function e1(a){this.a=a},
r:function r(a){this.a=a
this.b=null},
b1:function b1(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
b2:function b2(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
D:function D(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
cz:function cz(){},
Q:function Q(){},
cL:function cL(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
cZ:function cZ(){},
d5:function d5(){},
da:function da(){},
db:function db(){},
dc:function dc(){}},X={ct:function ct(a,b){this.a=a
this.b=b},cK:function cK(a,b){this.a=a
this.b=b},ee:function ee(){var _=this
_.d=_.c=_.b=_.a=null},cN:function cN(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},ej:function ej(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},aN:function aN(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},eu:function eu(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bQ:function bQ(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},eC:function eC(){},df:function df(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},f4:function f4(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dl:function dl(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hs:function(a,b,c,d,e,f,g){var u,t
u=new X.e7()
t=new V.ap(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.ii
if(t==null){t=V.ih(0,0,1,1)
$.ii=t}u.r=t
return u},
ia:function(a,b,c,d,e){var u,t,s
u=new X.cY()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gl().h(0,u.geK())
s=new D.D("mover",t,u.b,u,[U.a1])
s.b=!0
u.ag(s)}s=u.c
if(!(Math.abs(s-b)<$.E().a)){u.c=b
s=new D.D("fov",s,b,u,[P.t])
s.b=!0
u.ag(s)}s=u.d
if(!(Math.abs(s-d)<$.E().a)){u.d=d
s=new D.D("near",s,d,u,[P.t])
s.b=!0
u.ag(s)}s=u.e
if(!(Math.abs(s-a)<$.E().a)){u.e=a
s=new D.D("far",s,a,u,[P.t])
s.b=!0
u.ag(s)}return u},
bc:function bc(){},
e7:function e7(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){this.b=this.a=null},
cY:function cY(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
bX:function bX(){}},V={
kC:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.f.ek(a-b,u)
return(a<0?a+u:a)+b},
J:function(a,b,c){if(a==null)return C.j.aa("null",c)
return C.j.aa(C.f.e6(Math.abs(a-0)<$.E().a?0:a,b),c+b+1)},
bs:function(a,b,c){var u,t,s,r,q,p
H.d(a,"$ia",[P.t],"$aa")
u=H.b([],[P.v])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.w)(a),++r){q=V.J(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.k(u,p)
C.a.a_(u,p,C.j.aa(u[p],s))}return u},
hN:function(a,b){return C.f.jk(Math.pow(b,C.F.cb(Math.log(H.ke(a))/Math.log(b))))},
bk:function(){var u=$.i7
if(u==null){u=V.aB(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.i7=u}return u},
aB:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ab(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aP:function(){var u=$.ic
if(u==null){u=new V.U(0,0)
$.ic=u}return u},
jA:function(){var u=$.bS
if(u==null){u=new V.a7(0,0,0)
$.bS=u}return u},
ih:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d0(a,b,c,d)},
dq:function(){var u=$.iu
if(u==null){u=new V.I(0,0,0)
$.iu=u}return u},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e_:function e_(a){this.a=a},
cR:function cR(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ab:function ab(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
U:function U(a,b){this.a=a
this.b=b},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d0:function d0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
H:function H(a,b){this.a=a
this.b=b},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
a2:function(a){var u=new V.eL()
u.ey(a)
return u},
dJ:function dJ(){},
aM:function aM(){},
cO:function cO(){},
aO:function aO(){this.a=null},
eL:function eL(){this.a=null},
bV:function bV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
de:function de(a,b,c){this.a=a
this.b=b
this.c=c},
bZ:function bZ(a,b){this.a=a
this.b=b
this.c=null},
f3:function f3(){this.c=this.b=this.a=null},
c_:function c_(a){this.b=a
this.a=this.c=null},
kz:function(a){P.jU(C.D,new V.hk(a))},
jP:function(a,b){var u=new V.eP()
u.ez(a,!0)
return u},
hk:function hk(a){this.a=a},
eP:function eP(){this.b=this.a=null},
eR:function eR(a){this.a=a},
eQ:function eQ(a){this.a=a}},U={
hr:function(){var u=new U.dR()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
dR:function dR(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cv:function cv(){this.b=this.a=null},
bJ:function bJ(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a1:function a1(){},
dm:function dm(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dn:function dn(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dp:function dp(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cu:function cu(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},cx:function cx(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},cB:function cB(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},af:function af(){},
iO:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
u=V.jP("Test 034",!0)
t=W.hp(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.l.W(u.a,t)
s=[P.v]
u.d9(H.b(["Test of resizing the render target. ","Resizing the canvas works better in Chrome."],s))
u.d9(H.b(["\xab[Back to Tests|../]"],s))
s=document
t=C.u.cr(s,"testCanvas")
u=t.style
u.width="100%"
u.height="100%"
u.margin="-4px"
r=s.createElement("div")
u=r.style
u.border="2px solid"
u.padding="10px"
C.t.hr(u,(u&&C.t).eS(u,"resize"),"both","")
u.overflow="auto"
J.je(t,r)
C.l.W(r,t)
q=C.u.cr(s,"testCanvas")
if(q==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
p=E.jT(q,!0,!0,!0,!1)
o=new U.bJ()
o.b_(U.a1)
o.aI(o.gfn(),o.gh3())
o.e=null
o.f=V.bk()
o.r=0
u=p.r
s=new U.dn()
n=U.hr()
n.scq(0,!0)
n.sci(6.283185307179586)
n.sck(0)
n.sa2(0,0)
n.scj(100)
n.sM(0)
n.sc3(0.5)
s.b=n
m=s.gaA()
n.gl().h(0,m)
n=U.hr()
n.scq(0,!0)
n.sci(6.283185307179586)
n.sck(0)
n.sa2(0,0)
n.scj(100)
n.sM(0)
n.sc3(0.5)
s.c=n
n.gl().h(0,m)
s.d=null
s.e=!1
s.f=!1
s.r=!1
s.x=2.5
s.y=2.5
s.z=2
s.Q=4
s.cx=!1
s.ch=!1
s.cy=0
s.db=0
s.dx=null
s.dy=0
s.fr=null
s.fx=null
l=new X.ae(!1,!1,!1)
k=s.d
s.d=l
n=[X.ae]
m=new D.D("modifiers",k,l,s,n)
m.b=!0
s.J(m)
m=s.f
if(m!==!1){s.f=!1
m=new D.D("invertX",m,!1,s,[P.W])
m.b=!0
s.J(m)}m=s.r
if(m!==!1){s.r=!1
m=new D.D("invertY",m,!1,s,[P.W])
m.b=!0
s.J(m)}s.aO(u)
o.h(0,s)
u=p.r
s=new U.dm()
m=U.hr()
m.scq(0,!0)
m.sci(6.283185307179586)
m.sck(0)
m.sa2(0,0)
m.scj(100)
m.sM(0)
m.sc3(0.2)
s.b=m
m.gl().h(0,s.gaA())
s.c=null
s.d=!1
s.e=2.5
s.f=2
s.r=4
s.y=!1
s.x=!1
s.z=0
s.Q=null
s.ch=0
s.cx=null
s.cy=null
l=new X.ae(!0,!1,!1)
k=s.c
s.c=l
m=new D.D("modifiers",k,l,s,n)
m.b=!0
s.J(m)
s.aO(u)
o.h(0,s)
u=p.r
s=new U.dp()
s.c=0.01
s.d=0
s.e=0
l=new X.ae(!1,!1,!1)
s.b=l
n=new D.D("modifiers",null,l,s,n)
n.b=!0
s.J(n)
s.aO(u)
o.h(0,s)
j=V.aB(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
u=new U.cv()
u.a=j
o.h(0,u)
i=X.ia(2000,1.0471975511965976,o,0.1,null)
h=new O.cP()
h.seR(O.hq(V.ab))
h.e.aI(h.gfs(),h.gfu())
u=new O.aA(h,"emission")
u.c=C.c
u.f=new V.a0(0,0,0)
h.f=u
u=new O.aA(h,"ambient")
u.c=C.c
u.f=new V.a0(0,0,0)
h.r=u
u=new O.aA(h,"diffuse")
u.c=C.c
u.f=new V.a0(0,0,0)
h.x=u
u=new O.aA(h,"invDiffuse")
u.c=C.c
u.f=new V.a0(0,0,0)
h.y=u
u=new O.et(h,"specular")
u.c=C.c
u.f=new V.a0(0,0,0)
u.ch=100
h.z=u
u=new O.eq(h,"bump")
u.c=C.c
h.Q=u
h.ch=null
u=new O.aA(h,"reflect")
u.c=C.c
u.f=new V.a0(0,0,0)
h.cx=u
u=new O.es(h,"refract")
u.c=C.c
u.f=new V.a0(0,0,0)
u.ch=1
h.cy=u
u=new O.ep(h,"alpha")
u.c=C.c
u.f=1
h.db=u
u=new D.cL()
u.b_(D.Q)
u.sf0(H.b([],[D.cz]))
u.shh(H.b([],[D.cZ]))
u.shB(H.b([],[D.d5]))
u.shP(H.b([],[D.da]))
u.shQ(H.b([],[D.db]))
u.shR(H.b([],[D.dc]))
u.Q=null
u.ch=null
u.ct(u.gfp(),u.gh1(),u.gh5())
h.dx=u
s=u.Q
if(s==null){s=D.C()
u.Q=s
u=s}else u=s
u.h(0,h.gho())
u=h.dx
s=u.ch
if(s==null){s=D.C()
u.ch=s
u=s}else u=s
u.h(0,h.gax())
h.dy=null
u=h.r
u.sak(0,new V.a0(0.3,0.3,0.3))
u=h.x
u.sak(0,new V.a0(0.8,0.8,0.8))
u=h.x
s=p.f.iS("../resources/Test.png")
n=u.c
if(n!==C.d){if(n===C.c)u.aq()
u.c=C.d
u.hv(null)
n=u.a
n.a=null
n.O(null)}u.hu(s)
g=X.hs(!0,!0,!1,null,2000,null,0)
if(g.b){g.b=!1
u=new D.D("clearColor",!0,!1,g,[P.W])
u.b=!0
g.ag(u)}f=E.i2(null,!0,null,"",null,null)
e=F.hy()
F.ce(e,null,null,1,1,1,0,0,1)
F.ce(e,null,null,1,1,0,1,0,3)
F.ce(e,null,null,1,1,0,0,1,2)
F.ce(e,null,null,1,1,-1,0,0,0)
F.ce(e,null,null,1,1,0,-1,0,0)
F.ce(e,null,null,1,1,0,0,-1,3)
e.as()
f.sbw(0,e)
d=new M.cB()
d.seV(0,O.hq(E.a6))
d.d.aI(d.gfA(),d.gfC())
d.e=null
d.f=null
d.r=null
d.x=null
c=X.hs(!0,!0,!1,null,2000,null,0)
d.saP(null)
d.saU(0,c)
d.saV(null)
d.d.h(0,f)
d.saV(h)
d.saU(0,g)
d.saP(i)
u=p.f
s=u.a
b=s.createTexture()
C.b.a1(s,34067,b)
C.b.am(s,34067,10242,10497)
C.b.am(s,34067,10243,10497)
C.b.am(s,34067,10241,9729)
C.b.am(s,34067,10240,9729)
C.b.a1(s,34067,null)
a=new T.d9()
a.a=0
a.b=b
a.c=!1
a.d=0
u.az(a,b,"../resources/maskonaive/posx.jpg",34069,!1,!1)
u.az(a,b,"../resources/maskonaive/negx.jpg",34070,!1,!1)
u.az(a,b,"../resources/maskonaive/posy.jpg",34071,!1,!1)
u.az(a,b,"../resources/maskonaive/negy.jpg",34072,!1,!1)
u.az(a,b,"../resources/maskonaive/posz.jpg",34073,!1,!1)
u.az(a,b,"../resources/maskonaive/negz.jpg",34074,!1,!1)
a0=new M.cx()
a0.saP(null)
a0.saU(0,null)
a0.saV(null)
u=E.i2(null,!0,null,"",null,null)
e=F.hy()
s=e.a
n=new V.I(-1,-1,1)
n=n.t(0,Math.sqrt(n.A(n)))
a1=s.b6(new V.aQ(1,2,4,6),new V.ap(1,0,0,1),new V.a7(-1,-1,0),new V.U(0,1),n,null)
s=e.a
n=new V.I(1,-1,1)
n=n.t(0,Math.sqrt(n.A(n)))
a2=s.b6(new V.aQ(0,3,4,6),new V.ap(0,0,1,1),new V.a7(1,-1,0),new V.U(1,1),n,null)
s=e.a
n=new V.I(1,1,1)
n=n.t(0,Math.sqrt(n.A(n)))
a3=s.b6(new V.aQ(0,2,5,6),new V.ap(0,1,0,1),new V.a7(1,1,0),new V.U(1,0),n,null)
s=e.a
n=V.aP()
m=new V.I(-1,1,1)
m=m.t(0,Math.sqrt(m.A(m)))
a4=s.b6(new V.aQ(0,2,4,7),new V.ap(1,1,0,1),new V.a7(-1,1,0),n,m,null)
e.d.ih(H.b([a1,a2,a3,a4],[F.ah]))
e.as()
u.sbw(0,e)
a0.d=u
a0.e=null
u=new O.d3()
u.b=1.0471975511965976
u.d=new V.a0(1,1,1)
k=u.c
u.c=a
a.gl().h(0,u.gax())
s=new D.D("boxTexture",k,u.c,u,[T.d9])
s.b=!0
u.O(s)
a0.saV(u)
a0.saU(0,g)
a0.saP(i)
u=M.af
s=H.b([a0,d],[u])
n=new M.cu()
n.b_(u)
n.e=!1
n.f=null
n.aI(n.gh7(),n.gh9())
n.bU(0,s)
u=p.d
if(u!==n){if(u!=null)u.gl().R(0,p.gcD())
p.d=n
n.gl().h(0,p.gcD())
p.cE()}V.kz(p)}},A={
jz:function(a,b){var u,t
u=a.ae
t=new A.cQ(b,u)
t.cB(b,u)
t.ew(a,b)
return t},
hB:function(a,b,c,d,e){var u=new A.f9(a,b,c,e)
u.f=d
u.shS(P.jx(d,0,!1,P.u))
return u},
cp:function cp(a,b,c){this.a=a
this.b=b
this.c=c},
dM:function dM(a){this.a=a},
cQ:function cQ(a,b){var _=this
_.b9=_.dv=_.b8=_.ae=_.al=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dN=_.c5=_.dM=_.bm=_.dL=_.dK=_.bl=_.bk=_.dJ=_.dI=_.bj=_.bi=_.bh=_.dH=_.dG=_.bg=_.dF=_.dE=_.bf=_.dD=_.dC=_.be=_.bd=_.dB=_.dA=_.bc=_.bb=_.dz=_.dw=_.ba=null
_.ca=_.dR=_.c9=_.dQ=_.c8=_.dP=_.c7=_.dO=_.c6=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
er:function er(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.al=b3
_.ae=b4
_.b8=b5},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
c2:function c2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
c5:function c5(a,b,c,d,e,f,g,h,i,j){var _=this
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
c3:function c3(a,b,c,d,e,f,g,h,i,j){var _=this
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
c6:function c6(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bU:function bU(){},
bf:function bf(a,b){this.a=a
this.b=b},
d4:function d4(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dg:function dg(){},
ff:function ff(a){this.a=a},
B:function B(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fb:function fb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fc:function fc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fe:function fe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f9:function f9(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fa:function fa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
z:function z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fd:function fd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fg:function fg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
h4:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
ce:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
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
u.d=t}g=F.h4(t)
f=F.h4(u.b)
e=F.kA(d,a0,new F.h3(u,F.h4(u.c),F.h4(u.d),f,g,c),b)
if(e!=null)a.iV(e)},
kA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,{func:1,ret:-1,args:[F.ah,P.t,P.t]})
if(a<1)return
if(b<1)return
u=F.hy()
t=H.b([],[F.ah])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.fm(null,null,new V.ap(p,0,0,1),null,null,new V.U(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c2(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.fm(null,null,new V.ap(j,i,h,1),null,null,new V.U(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c2(d))}}u.d.ii(a+1,b+1,t)
return u},
bH:function(a,b,c){var u,t
u=new F.T()
t=a.a
if(t==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.o("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.Z()
return u},
ju:function(a,b){var u,t
u=new F.aL()
t=a.a
if(t==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.o("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.Z()
return u},
hy:function(){var u,t
u=new F.d2()
t=new F.fn(u)
t.b=!1
t.shT(H.b([],[F.ah]))
u.a=t
t=new F.eO(u)
t.sbP(H.b([],[F.b4]))
u.b=t
t=new F.eN(u)
t.sfd(H.b([],[F.aL]))
u.c=t
t=new F.eM(u)
t.sf3(H.b([],[F.T]))
u.d=t
u.e=null
return u},
fm:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ah()
t=new F.fs(u)
t.sbP(H.b([],[F.b4]))
u.b=t
t=new F.fr(u)
s=[F.aL]
t.sfe(H.b([],s))
t.sff(H.b([],s))
u.c=t
t=new F.fo(u)
s=[F.T]
t.sf4(H.b([],s))
t.sf5(H.b([],s))
t.sf6(H.b([],s))
u.d=t
h=$.j7()
u.e=0
t=$.at()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aU().a)!==0?e:null
u.x=(s&$.aT().a)!==0?b:null
u.y=(s&$.aV().a)!==0?f:null
u.z=(s&$.aW().a)!==0?g:null
u.Q=(s&$.j8().a)!==0?c:null
u.ch=(s&$.bx().a)!==0?i:0
u.cx=(s&$.aS().a)!==0?a:null
return u},
h3:function h3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
T:function T(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aL:function aL(){this.b=this.a=null},
b4:function b4(){this.a=null},
d2:function d2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eM:function eM(a){this.a=a
this.b=null},
eN:function eN(a){this.a=a
this.b=null},
eO:function eO(a){this.a=a
this.b=null},
ah:function ah(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fu:function fu(a){this.a=a},
ft:function ft(a){this.a=a},
fn:function fn(a){this.a=a
this.c=this.b=null},
fo:function fo(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fp:function fp(a,b){this.a=a
this.b=b},
fq:function fq(a,b){this.a=a
this.b=b},
fr:function fr(a){this.a=a
this.c=this.b=null},
fs:function fs(a){this.a=a
this.b=null}},T={bY:function bY(){},d8:function d8(){},eZ:function eZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},d9:function d9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},f_:function f_(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},f1:function f1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},f0:function f0(a,b,c,d,e,f,g){var _=this
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
H.hw.prototype={}
J.Z.prototype={
q:function(a,b){return a===b},
gD:function(a){return H.bT(a)},
i:function(a){return"Instance of '"+H.bm(a)+"'"}}
J.eb.prototype={
i:function(a){return String(a)},
gD:function(a){return a?519018:218159},
$iW:1}
J.cH.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gD:function(a){return 0},
$iA:1}
J.cJ.prototype={
gD:function(a){return 0},
i:function(a){return String(a)}}
J.eB.prototype={}
J.di.prototype={}
J.b3.prototype={
i:function(a){var u=a[$.iX()]
if(u==null)return this.er(a)
return"JavaScript function for "+H.f(J.ai(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iht:1}
J.ax.prototype={
h:function(a,b){H.x(b,H.q(a,0))
if(!!a.fixed$length)H.p(P.ag("add"))
a.push(b)},
R:function(a,b){var u
if(!!a.fixed$length)H.p(P.ag("remove"))
for(u=0;u<a.length;++u)if(J.Y(a[u],b)){a.splice(u,1)
return!0}return!1},
bU:function(a,b){var u,t
H.d(b,"$ij",[H.q(a,0)],"$aj")
if(!!a.fixed$length)H.p(P.ag("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.w)(b),++t)a.push(b[t])},
a8:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.bD(a))}},
w:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.a_(u,t,H.f(a[t]))
return u.join(b)},
iP:function(a){return this.w(a,"")},
a7:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
ep:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.aj(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.aj(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.q(a,0)])
return H.b(a.slice(b,c),[H.q(a,0)])},
gce:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.jr())},
aD:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Y(a[u],b))return!0
return!1},
i:function(a){return P.hu(a,"[","]")},
gN:function(a){return new J.a9(a,a.length,0,[H.q(a,0)])},
gD:function(a){return H.bT(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.p(P.ag("set length"))
if(b<0)throw H.i(P.aj(b,0,null,"newLength",null))
a.length=b},
a_:function(a,b,c){H.x(c,H.q(a,0))
if(!!a.immutable$list)H.p(P.ag("indexed set"))
if(b>=a.length||b<0)throw H.i(H.ck(a,b))
a[b]=c},
$ij:1,
$ia:1}
J.hv.prototype={}
J.a9.prototype={
gK:function(){return this.d},
v:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.i(H.w(u))
s=this.c
if(s>=t){this.scH(null)
return!1}this.scH(u[s]);++this.c
return!0},
scH:function(a){this.d=H.x(a,H.q(this,0))},
$iaw:1}
J.cI.prototype={
jk:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.i(P.ag(""+a+".toInt()"))},
cb:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.ag(""+a+".floor()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.ag(""+a+".round()"))},
e6:function(a,b){var u,t
if(b>20)throw H.i(P.aj(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gD:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
n:function(a,b){if(typeof b!=="number")throw H.i(H.b9(b))
return a*b},
ek:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ev:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d6(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.d6(a,b)},
d6:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.ag("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
b3:function(a,b){var u
if(a>0)u=this.hA(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hA:function(a,b){return b>31?0:a>>>b},
$it:1,
$ia4:1}
J.cG.prototype={$iu:1}
J.cF.prototype={}
J.bM.prototype={
c1:function(a,b){if(b<0)throw H.i(H.ck(a,b))
if(b>=a.length)H.p(H.ck(a,b))
return a.charCodeAt(b)},
b0:function(a,b){if(b>=a.length)throw H.i(H.ck(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.i(P.hn(b,null,null))
return a+b},
cw:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.eD(b,null,null))
if(b>c)throw H.i(P.eD(b,null,null))
if(c>a.length)throw H.i(P.eD(c,null,null))
return a.substring(b,c)},
cv:function(a,b){return this.cw(a,b,null)},
n:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.B)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
j1:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.n(c,u)+a},
aa:function(a,b){return this.j1(a,b," ")},
iu:function(a,b,c){if(c>a.length)throw H.i(P.aj(c,0,a.length,null,null))
return H.iS(a,b,c)},
i:function(a){return a},
gD:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ii9:1,
$iv:1}
H.R.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.j.c1(this.a,b)},
$adk:function(){return[P.u]},
$aN:function(){return[P.u]},
$aj:function(){return[P.u]},
$aa:function(){return[P.u]}}
H.dY.prototype={}
H.cM.prototype={
gK:function(){return this.d},
v:function(){var u,t,s,r
u=this.a
t=J.ha(u)
s=t.gm(u)
if(this.b!==s)throw H.i(P.bD(u))
r=this.c
if(r>=s){this.saL(null)
return!1}this.saL(t.a7(u,r));++this.c
return!0},
saL:function(a){this.d=H.x(a,H.q(this,0))},
$iaw:1}
H.en.prototype={
gN:function(a){return new H.eo(J.dI(this.a),this.b,this.$ti)},
gm:function(a){return J.co(this.a)},
a7:function(a,b){return this.b.$1(J.hS(this.a,b))},
$aj:function(a,b){return[b]}}
H.eo.prototype={
v:function(){var u=this.b
if(u.v()){this.saL(this.c.$1(u.gK()))
return!0}this.saL(null)
return!1},
gK:function(){return this.a},
saL:function(a){this.a=H.x(a,H.q(this,1))},
$aaw:function(a,b){return[b]}}
H.fw.prototype={
gN:function(a){return new H.fx(J.dI(this.a),this.b,this.$ti)}}
H.fx.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gK()))return!0
return!1},
gK:function(){return this.a.gK()}}
H.bi.prototype={}
H.dk.prototype={}
H.dj.prototype={}
H.eE.prototype={}
H.f6.prototype={
a9:function(a){var u,t,s
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
H.ez.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ed.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.f(this.a)+")"}}
H.fi.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.hl.prototype={
$1:function(a){if(!!J.O(a).$iaZ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:14}
H.dC.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iac:1}
H.bB.prototype={
i:function(a){return"Closure '"+H.bm(this).trim()+"'"},
$iht:1,
gjq:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.eY.prototype={}
H.eT.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bw(u)+"'"}}
H.by.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.by))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gD:function(a){var u,t
u=this.c
if(u==null)t=H.bT(this.a)
else t=typeof u!=="object"?J.bb(u):H.bT(u)
return(t^H.bT(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.bm(u)+"'")}}
H.f8.prototype={
i:function(a){return this.a}}
H.dP.prototype={
i:function(a){return this.a}}
H.eJ.prototype={
i:function(a){return"RuntimeError: "+H.f(this.a)}}
H.aK.prototype={
gm:function(a){return this.a},
dj:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.cQ(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.cQ(t,a)}else return this.iN(a)},
iN:function(a){var u=this.d
if(u==null)return!1
return this.cc(this.bC(u,J.bb(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.b1(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.b1(r,b)
s=t==null?null:t.b
return s}else return this.iO(b)},
iO:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bC(u,J.bb(a)&0x3ffffff)
s=this.cc(t,a)
if(s<0)return
return t[s].b},
a_:function(a,b,c){var u,t,s,r,q,p
H.x(b,H.q(this,0))
H.x(c,H.q(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bM()
this.b=u}this.cJ(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bM()
this.c=t}this.cJ(t,b,c)}else{s=this.d
if(s==null){s=this.bM()
this.d=s}r=J.bb(b)&0x3ffffff
q=this.bC(s,r)
if(q==null)this.bS(s,r,[this.bN(b,c)])
else{p=this.cc(q,b)
if(p>=0)q[p].b=c
else q.push(this.bN(b,c))}}},
a8:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.i(P.bD(this))
u=u.c}},
cJ:function(a,b,c){var u
H.x(b,H.q(this,0))
H.x(c,H.q(this,1))
u=this.b1(a,b)
if(u==null)this.bS(a,b,this.bN(b,c))
else u.b=c},
bN:function(a,b){var u,t
u=new H.ef(H.x(a,H.q(this,0)),H.x(b,H.q(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
cc:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1},
i:function(a){return P.i6(this)},
b1:function(a,b){return a[b]},
bC:function(a,b){return a[b]},
bS:function(a,b,c){a[b]=c},
f_:function(a,b){delete a[b]},
cQ:function(a,b){return this.b1(a,b)!=null},
bM:function(){var u=Object.create(null)
this.bS(u,"<non-identifier-key>",u)
this.f_(u,"<non-identifier-key>")
return u},
$ii5:1}
H.ef.prototype={}
H.eg.prototype={
gm:function(a){return this.a.a},
gN:function(a){var u,t
u=this.a
t=new H.eh(u,u.r,this.$ti)
t.c=u.e
return t}}
H.eh.prototype={
gK:function(){return this.d},
v:function(){var u=this.a
if(this.b!==u.r)throw H.i(P.bD(u))
else{u=this.c
if(u==null){this.scI(null)
return!1}else{this.scI(u.a)
this.c=this.c.c
return!0}}},
scI:function(a){this.d=H.x(a,H.q(this,0))},
$iaw:1}
H.hd.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.he.prototype={
$2:function(a,b){return this.a(a,b)},
$S:27}
H.hf.prototype={
$1:function(a){return this.a(H.P(a))},
$S:30}
H.ec.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ii9:1}
H.cV.prototype={$ikW:1}
H.cS.prototype={
gm:function(a){return a.length},
$iaJ:1,
$aaJ:function(){}}
H.cT.prototype={
j:function(a,b){H.cf(b,a,a.length)
return a[b]},
$abi:function(){return[P.t]},
$aN:function(){return[P.t]},
$ij:1,
$aj:function(){return[P.t]},
$ia:1,
$aa:function(){return[P.t]}}
H.cU.prototype={
$abi:function(){return[P.u]},
$aN:function(){return[P.u]},
$ij:1,
$aj:function(){return[P.u]},
$ia:1,
$aa:function(){return[P.u]}}
H.ev.prototype={
j:function(a,b){H.cf(b,a,a.length)
return a[b]}}
H.ew.prototype={
j:function(a,b){H.cf(b,a,a.length)
return a[b]}}
H.ex.prototype={
j:function(a,b){H.cf(b,a,a.length)
return a[b]}}
H.cW.prototype={
gm:function(a){return a.length},
j:function(a,b){H.cf(b,a,a.length)
return a[b]},
$ikX:1}
H.ey.prototype={
gm:function(a){return a.length},
j:function(a,b){H.cf(b,a,a.length)
return a[b]}}
H.ca.prototype={}
H.cb.prototype={}
H.cc.prototype={}
H.cd.prototype={}
P.fz.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:15}
P.fy.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:25}
P.fA.prototype={
$0:function(){this.a.$0()},
$S:2}
P.fB.prototype={
$0:function(){this.a.$0()},
$S:2}
P.dD.prototype={
eI:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.br(new P.h0(this,b),0),a)
else throw H.i(P.ag("`setTimeout()` not found."))},
eJ:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.br(new P.h_(this,a,Date.now(),b),0),a)
else throw H.i(P.ag("Periodic timer."))},
$iaD:1}
P.h0.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.h_.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.i.ev(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.aI.prototype={
iU:function(a){if(this.c!==6)return!0
return this.b.b.co(H.l(this.d,{func:1,ret:P.W,args:[P.G]}),a.a,P.W,P.G)},
iM:function(a){var u,t,s,r
u=this.e
t=P.G
s={futureOr:1,type:H.q(this,1)}
r=this.b.b
if(H.dH(u,{func:1,args:[P.G,P.ac]}))return H.hK(r.je(u,a.a,a.b,null,t,P.ac),s)
else return H.hK(r.co(H.l(u,{func:1,args:[P.G]}),a.a,null,t),s)}}
P.am.prototype={
e5:function(a,b,c){var u,t,s,r
u=H.q(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.L
if(t!==C.k){t.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.k7(b,t)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.am(0,$.L,[c])
r=b==null?1:3
this.cK(new P.aI(s,r,a,b,[u,c]))
return s},
jj:function(a,b){return this.e5(a,null,b)},
cK:function(a){var u,t
u=this.a
if(u<=1){a.a=H.h(this.c,"$iaI")
this.c=a}else{if(u===2){t=H.h(this.c,"$iam")
u=t.a
if(u<4){t.cK(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.h7(null,null,u,H.l(new P.fH(this,a),{func:1,ret:-1}))}},
d1:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.h(this.c,"$iaI")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.h(this.c,"$iam")
t=p.a
if(t<4){p.d1(a)
return}this.a=t
this.c=p.c}u.a=this.b2(a)
t=this.b
t.toString
P.h7(null,null,t,H.l(new P.fL(u,this),{func:1,ret:-1}))}},
bR:function(){var u=H.h(this.c,"$iaI")
this.c=null
return this.b2(u)},
b2:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cM:function(a){var u,t,s
u=H.q(this,0)
H.hK(a,{futureOr:1,type:u})
t=this.$ti
if(H.cj(a,"$ibI",t,"$abI"))if(H.cj(a,"$iam",t,null))P.iv(a,this)
else P.jZ(a,this)
else{s=this.bR()
H.x(a,u)
this.a=4
this.c=a
P.c8(this,s)}},
cN:function(a,b){var u
H.h(b,"$iac")
u=this.bR()
this.a=8
this.c=new P.a5(a,b)
P.c8(this,u)},
$ibI:1}
P.fH.prototype={
$0:function(){P.c8(this.a,this.b)},
$S:2}
P.fL.prototype={
$0:function(){P.c8(this.b,this.a.a)},
$S:2}
P.fI.prototype={
$1:function(a){var u=this.a
u.a=0
u.cM(a)},
$S:15}
P.fJ.prototype={
$2:function(a,b){H.h(b,"$iac")
this.a.cN(a,b)},
$1:function(a){return this.$2(a,null)},
$S:33}
P.fK.prototype={
$0:function(){this.a.cN(this.b,this.c)},
$S:2}
P.fO.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.e3(H.l(r.d,{func:1}),null)}catch(q){t=H.aR(q)
s=H.bu(q)
if(this.d){r=H.h(this.a.a.c,"$ia5").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.h(this.a.a.c,"$ia5")
else p.b=new P.a5(t,s)
p.a=!0
return}if(!!J.O(u).$ibI){if(u instanceof P.am&&u.a>=4){if(u.a===8){r=this.b
r.b=H.h(u.c,"$ia5")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.jj(new P.fP(o),null)
r.a=!1}},
$S:3}
P.fP.prototype={
$1:function(a){return this.a},
$S:22}
P.fN.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.q(s,0)
q=H.x(this.c,r)
p=H.q(s,1)
this.a.b=s.b.b.co(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aR(o)
t=H.bu(o)
s=this.a
s.b=new P.a5(u,t)
s.a=!0}},
$S:3}
P.fM.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.h(this.a.a.c,"$ia5")
r=this.c
if(r.iU(u)&&r.e!=null){q=this.b
q.b=r.iM(u)
q.a=!1}}catch(p){t=H.aR(p)
s=H.bu(p)
r=H.h(this.a.a.c,"$ia5")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a5(t,s)
n.a=!0}},
$S:3}
P.dt.prototype={}
P.eU.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.am(0,$.L,[P.u])
u.a=0
s=H.q(this,0)
r=H.l(new P.eW(u,this),{func:1,ret:-1,args:[s]})
H.l(new P.eX(u,t),{func:1,ret:-1})
W.V(this.a,this.b,r,!1,s)
return t}}
P.eW.prototype={
$1:function(a){H.x(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.A,args:[H.q(this.b,0)]}}}
P.eX.prototype={
$0:function(){this.b.cM(this.a.a)},
$S:2}
P.bW.prototype={}
P.eV.prototype={}
P.aD.prototype={}
P.a5.prototype={
i:function(a){return H.f(this.a)},
$iaZ:1}
P.h2.prototype={$il9:1}
P.h6.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.cX()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.i(u)
s=H.i(u)
s.stack=t.i(0)
throw s},
$S:2}
P.fV.prototype={
jf:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
try{if(C.k===$.L){a.$0()
return}P.iA(null,null,this,a,-1)}catch(s){u=H.aR(s)
t=H.bu(s)
P.h5(null,null,this,u,H.h(t,"$iac"))}},
jg:function(a,b,c){var u,t,s
H.l(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.k===$.L){a.$1(b)
return}P.iB(null,null,this,a,b,-1,c)}catch(s){u=H.aR(s)
t=H.bu(s)
P.h5(null,null,this,u,H.h(t,"$iac"))}},
il:function(a,b){return new P.fX(this,H.l(a,{func:1,ret:b}),b)},
bY:function(a){return new P.fW(this,H.l(a,{func:1,ret:-1}))},
dd:function(a,b){return new P.fY(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
e3:function(a,b){H.l(a,{func:1,ret:b})
if($.L===C.k)return a.$0()
return P.iA(null,null,this,a,b)},
co:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.L===C.k)return a.$1(b)
return P.iB(null,null,this,a,b,c,d)},
je:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.L===C.k)return a.$2(b,c)
return P.k8(null,null,this,a,b,c,d,e,f)}}
P.fX.prototype={
$0:function(){return this.a.e3(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.fW.prototype={
$0:function(){return this.a.jf(this.b)},
$S:3}
P.fY.prototype={
$1:function(a){var u=this.c
return this.a.jg(this.b,H.x(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.fS.prototype={
gN:function(a){return P.ix(this,this.r,H.q(this,0))},
gm:function(a){return this.a},
h:function(a,b){var u
H.x(b,H.q(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.iy()
this.c=u}return this.eW(u,b)}else return this.eM(b)},
eM:function(a){var u,t,s
H.x(a,H.q(this,0))
u=this.d
if(u==null){u=P.iy()
this.d=u}t=this.cO(a)
s=u[t]
if(s==null)u[t]=[this.by(a)]
else{if(this.cU(s,a)>=0)return!1
s.push(this.by(a))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hk(this.c,b)
else return this.hj(b)},
hj:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.f8(u,a)
s=this.cU(t,a)
if(s<0)return!1
this.d7(t.splice(s,1)[0])
return!0},
eW:function(a,b){H.x(b,H.q(this,0))
if(H.h(a[b],"$ic9")!=null)return!1
a[b]=this.by(b)
return!0},
hk:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$ic9")
if(u==null)return!1
this.d7(u)
delete a[b]
return!0},
cV:function(){this.r=1073741823&this.r+1},
by:function(a){var u,t
u=new P.c9(H.x(a,H.q(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.cV()
return u},
d7:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.cV()},
cO:function(a){return J.bb(a)&1073741823},
f8:function(a,b){return a[this.cO(b)]},
cU:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.c9.prototype={}
P.fT.prototype={
gK:function(){return this.d},
v:function(){var u=this.a
if(this.b!==u.r)throw H.i(P.bD(u))
else{u=this.c
if(u==null){this.scL(null)
return!1}else{this.scL(H.x(u.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
scL:function(a){this.d=H.x(a,H.q(this,0))},
$iaw:1}
P.ei.prototype={$ij:1,$ia:1}
P.N.prototype={
gN:function(a){return new H.cM(a,this.gm(a),0,[H.hc(this,a,"N",0)])},
a7:function(a,b){return this.j(a,b)},
jm:function(a,b){var u,t
u=H.b([],[H.hc(this,a,"N",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.a_(u,t,this.j(a,t))
return u},
jl:function(a){return this.jm(a,!0)},
i:function(a){return P.hu(a,"[","]")}}
P.ek.prototype={}
P.el.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.f(a)
u.a=t+": "
u.a+=H.f(b)},
$S:12}
P.em.prototype={
gm:function(a){return this.a},
i:function(a){return P.i6(this)},
$iaz:1}
P.fZ.prototype={
i:function(a){return P.hu(this,"{","}")},
a7:function(a,b){var u,t,s
if(b<0)H.p(P.aj(b,0,null,"index",null))
for(u=P.ix(this,this.r,H.q(this,0)),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.i(P.bL(b,this,"index",null,t))},
$ij:1,
$iij:1}
P.dz.prototype={}
P.bC.prototype={}
P.cw.prototype={}
P.dZ.prototype={
$abC:function(){return[P.v,[P.a,P.u]]}}
P.fk.prototype={}
P.fl.prototype={
iw:function(a,b,c){var u,t,s
c=P.ig(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.h1(t)
if(s.f7(a,b,c)!==c)s.d8(C.j.c1(a,c-1),0)
return new Uint8Array(t.subarray(0,H.k3(0,s.b,t.length)))},
iv:function(a){return this.iw(a,0,null)},
$acw:function(){return[P.v,[P.a,P.u]]}}
P.h1.prototype={
d8:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.k(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.k(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.k(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.k(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.k(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.k(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.k(u,t)
u[t]=128|a&63
return!1}},
f7:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.c1(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.b0(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.d8(r,C.j.b0(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.k(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.k(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.k(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.k(u,q)
u[q]=128|r&63}}return s}}
P.W.prototype={}
P.aa.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aa&&this.a===b.a&&!0},
gD:function(a){var u=this.a
return(u^C.i.b3(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.jl(H.jI(this))
t=P.cy(H.jG(this))
s=P.cy(H.jC(this))
r=P.cy(H.jD(this))
q=P.cy(H.jF(this))
p=P.cy(H.jH(this))
o=P.jm(H.jE(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.t.prototype={}
P.aY.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aY&&this.a===b.a},
gD:function(a){return C.i.gD(this.a)},
i:function(a){var u,t,s,r,q
u=new P.dX()
t=this.a
if(t<0)return"-"+new P.aY(0-t).i(0)
s=u.$1(C.i.Y(t,6e7)%60)
r=u.$1(C.i.Y(t,1e6)%60)
q=new P.dW().$1(t%1e6)
return""+C.i.Y(t,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.dW.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:13}
P.dX.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:13}
P.aZ.prototype={}
P.cX.prototype={
i:function(a){return"Throw of null."}}
P.au.prototype={
gbA:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbz:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbA()+t+s
if(!this.a)return r
q=this.gbz()
p=P.e0(this.b)
return r+q+": "+p}}
P.bn.prototype={
gbA:function(){return"RangeError"},
gbz:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.f(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.f(u)
else if(s>u)t=": Not in range "+H.f(u)+".."+H.f(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.f(u)}return t}}
P.e9.prototype={
gbA:function(){return"RangeError"},
gbz:function(){var u,t
u=H.X(this.b)
if(typeof u!=="number")return u.aH()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gm:function(a){return this.f}}
P.fj.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fh.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.eS.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dS.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.e0(u)+"."}}
P.eA.prototype={
i:function(a){return"Out of Memory"},
$iaZ:1}
P.d6.prototype={
i:function(a){return"Stack Overflow"},
$iaZ:1}
P.dU.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dw.prototype={
i:function(a){return"Exception: "+this.a}}
P.e6.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.cw(s,0,75)+"...":s
return t+"\n"+r}}
P.u.prototype={}
P.j.prototype={
gm:function(a){var u,t
u=this.gN(this)
for(t=0;u.v();)++t
return t},
a7:function(a,b){var u,t,s
if(b<0)H.p(P.aj(b,0,null,"index",null))
for(u=this.gN(this),t=0;u.v();){s=u.gK()
if(b===t)return s;++t}throw H.i(P.bL(b,this,"index",null,t))},
i:function(a){return P.jq(this,"(",")")}}
P.aw.prototype={}
P.a.prototype={$ij:1}
P.A.prototype={
gD:function(a){return P.G.prototype.gD.call(this,this)},
i:function(a){return"null"}}
P.a4.prototype={}
P.G.prototype={constructor:P.G,$iG:1,
q:function(a,b){return this===b},
gD:function(a){return H.bT(this)},
i:function(a){return"Instance of '"+H.bm(this)+"'"},
toString:function(){return this.i(this)}}
P.ac.prototype={}
P.v.prototype={$ii9:1}
P.b5.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.n.prototype={}
W.dK.prototype={
i:function(a){return String(a)}}
W.dL.prototype={
i:function(a){return String(a)}}
W.cq.prototype={}
W.bd.prototype={
bu:function(a,b,c){if(c!=null)return this.f9(a,b,P.kf(c,null))
return this.fa(a,b)},
ef:function(a,b){return this.bu(a,b,null)},
f9:function(a,b,c){return a.getContext(b,c)},
fa:function(a,b){return a.getContext(b)},
$ibd:1,
$ihV:1}
W.be.prototype={
fb:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
iH:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibe:1}
W.aX.prototype={
gm:function(a){return a.length}}
W.bg.prototype={
eS:function(a,b){var u,t
u=$.iW()
t=u[b]
if(typeof t==="string")return t
t=this.hD(a,b)
u[b]=t
return t},
hD:function(a,b){var u
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
u=P.jn()+b
if(u in a)return u
return b},
hr:function(a,b,c,d){a.setProperty(b,c,d)},
gm:function(a){return a.length}}
W.dT.prototype={}
W.bE.prototype={$ibE:1}
W.bF.prototype={
cr:function(a,b){return a.getElementById(b)}}
W.dV.prototype={
i:function(a){return String(a)}}
W.cA.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
q:function(a,b){var u
if(b==null)return!1
if(!H.cj(b,"$iak",[P.a4],"$aak"))return!1
u=J.bt(b)
return a.left===u.gbo(b)&&a.top===u.gbr(b)&&a.width===u.gbt(b)&&a.height===u.gbn(b)},
gD:function(a){return W.iw(C.f.gD(a.left),C.f.gD(a.top),C.f.gD(a.width),C.f.gD(a.height))},
gde:function(a){return a.bottom},
gbn:function(a){return a.height},
gbo:function(a){return a.left},
gbq:function(a){return a.right},
gbr:function(a){return a.top},
gbt:function(a){return a.width},
$iak:1,
$aak:function(){return[P.a4]}}
W.fD.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.k(u,b)
return H.h(u[b],"$iS")},
h:function(a,b){J.hR(this.a,b)
return b},
gN:function(a){var u=this.jl(this)
return new J.a9(u,u.length,0,[H.q(u,0)])},
$aN:function(){return[W.S]},
$aj:function(){return[W.S]},
$aa:function(){return[W.S]}}
W.S.prototype={
gdh:function(a){return new W.fD(a,a.children)},
gdi:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aH()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aH()
if(r<0)r=-r*0
return new P.ak(u,t,s,r,[P.a4])},
i:function(a){return a.localName},
$iS:1}
W.e.prototype={$ie:1}
W.bh.prototype={
eN:function(a,b,c,d){return a.addEventListener(b,H.br(H.l(c,{func:1,args:[W.e]}),1),!1)},
$ibh:1}
W.e5.prototype={
gm:function(a){return a.length}}
W.bj.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.bL(b,a,null,null,null))
return a[b]},
a7:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iaJ:1,
$aaJ:function(){return[W.F]},
$aN:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]},
$ia:1,
$aa:function(){return[W.F]},
$ibj:1,
$aaq:function(){return[W.F]}}
W.cE.prototype={}
W.b_.prototype={$ib_:1,
gdk:function(a){return a.data}}
W.bK.prototype={$ibK:1,$ihV:1}
W.ay.prototype={$iay:1}
W.bP.prototype={}
W.a_.prototype={$ia_:1}
W.fC.prototype={
gN:function(a){var u=this.a.childNodes
return new W.cC(u,u.length,-1,[H.hc(C.O,u,"aq",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
$aN:function(){return[W.F]},
$aj:function(){return[W.F]},
$aa:function(){return[W.F]}}
W.F.prototype={
jb:function(a,b){var u,t
try{u=a.parentNode
J.jd(u,b,a)}catch(t){H.aR(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eq(a):u},
W:function(a,b){return a.appendChild(b)},
hm:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.bR.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.bL(b,a,null,null,null))
return a[b]},
a7:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iaJ:1,
$aaJ:function(){return[W.F]},
$aN:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]},
$ia:1,
$aa:function(){return[W.F]},
$aaq:function(){return[W.F]}}
W.eK.prototype={
gm:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.ar.prototype={$iar:1}
W.f5.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.bL(b,a,null,null,null))
return a[b]},
a7:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iaJ:1,
$aaJ:function(){return[W.aE]},
$aN:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]},
$ia:1,
$aa:function(){return[W.aE]},
$aaq:function(){return[W.aE]}}
W.b7.prototype={}
W.fv.prototype={$ihV:1}
W.aH.prototype={
giD:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.ag("deltaY is not supported"))},
giC:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.ag("deltaX is not supported"))},
$iaH:1}
W.c7.prototype={
hn:function(a,b){return a.requestAnimationFrame(H.br(H.l(b,{func:1,ret:-1,args:[P.a4]}),1))},
f1:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dv.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
q:function(a,b){var u
if(b==null)return!1
if(!H.cj(b,"$iak",[P.a4],"$aak"))return!1
u=J.bt(b)
return a.left===u.gbo(b)&&a.top===u.gbr(b)&&a.width===u.gbt(b)&&a.height===u.gbn(b)},
gD:function(a){return W.iw(C.f.gD(a.left),C.f.gD(a.top),C.f.gD(a.width),C.f.gD(a.height))},
gbn:function(a){return a.height},
gbt:function(a){return a.width}}
W.fE.prototype={}
W.hD.prototype={}
W.fF.prototype={}
W.fG.prototype={
$1:function(a){return this.a.$1(H.h(a,"$ie"))},
$S:31}
W.aq.prototype={
gN:function(a){return new W.cC(a,this.gm(a),-1,[H.hc(this,a,"aq",0)])}}
W.cC.prototype={
v:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.scT(J.jb(this.a,u))
this.c=u
return!0}this.scT(null)
this.c=t
return!1},
gK:function(){return this.d},
scT:function(a){this.d=H.x(a,H.q(this,0))},
$iaw:1}
W.du.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dE.prototype={}
W.dF.prototype={}
P.dG.prototype={$ib_:1,
gdk:function(a){return this.a}}
P.h8.prototype={
$2:function(a,b){this.a[a]=b},
$S:12}
P.e2.prototype={
gbD:function(){var u,t,s
u=this.b
t=H.ao(u,"N",0)
s=W.S
return new H.en(new H.fw(u,H.l(new P.e3(),{func:1,ret:P.W,args:[t]}),[t]),H.l(new P.e4(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.hR(this.b.a,b)},
gm:function(a){return J.co(this.gbD().a)},
j:function(a,b){var u=this.gbD()
return u.b.$1(J.hS(u.a,b))},
gN:function(a){var u=P.jy(this.gbD(),!1,W.S)
return new J.a9(u,u.length,0,[H.q(u,0)])},
$aN:function(){return[W.S]},
$aj:function(){return[W.S]},
$aa:function(){return[W.S]}}
P.e3.prototype={
$1:function(a){return!!J.O(H.h(a,"$iF")).$iS},
$S:23}
P.e4.prototype={
$1:function(a){return H.c(H.h(a,"$iF"),"$iS")},
$S:24}
P.fU.prototype={
gbq:function(a){var u=this.a
if(typeof u!=="number")return u.C()
return H.x(u+this.c,H.q(this,0))},
gde:function(a){var u=this.b
if(typeof u!=="number")return u.C()
return H.x(u+this.d,H.q(this,0))},
i:function(a){return"Rectangle ("+H.f(this.a)+", "+H.f(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cj(b,"$iak",[P.a4],"$aak")){u=this.a
t=J.bt(b)
if(u==t.gbo(b)){s=this.b
if(s==t.gbr(b)){if(typeof u!=="number")return u.C()
r=H.q(this,0)
if(H.x(u+this.c,r)===t.gbq(b)){if(typeof s!=="number")return s.C()
u=H.x(s+this.d,r)===t.gde(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gD:function(a){var u,t,s,r,q
u=this.a
t=J.bb(u)
s=this.b
r=J.bb(s)
if(typeof u!=="number")return u.C()
q=H.q(this,0)
u=C.i.gD(H.x(u+this.c,q))
if(typeof s!=="number")return s.C()
q=C.i.gD(H.x(s+this.d,q))
return P.k_(P.fR(P.fR(P.fR(P.fR(0,t),r),u),q))}}
P.ak.prototype={
gbo:function(a){return this.a},
gbr:function(a){return this.b},
gbt:function(a){return this.c},
gbn:function(a){return this.d}}
P.m.prototype={
gdh:function(a){return new P.e2(a,new W.fC(a))}}
P.cr.prototype={$icr:1}
P.cD.prototype={$icD:1}
P.d_.prototype={$id_:1}
P.bo.prototype={
b5:function(a,b){return a.activeTexture(b)},
dc:function(a,b,c){return a.attachShader(b,c)},
aj:function(a,b,c){return a.bindBuffer(b,c)},
im:function(a,b,c){return a.bindFramebuffer(b,c)},
a1:function(a,b,c){return a.bindTexture(b,c)},
io:function(a,b,c){return a.blendFunc(b,c)},
df:function(a,b,c,d){return a.bufferData(b,c,d)},
iq:function(a,b){return a.clear(b)},
ir:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
is:function(a,b){return a.clearDepth(b)},
it:function(a,b){return a.compileShader(b)},
iy:function(a,b){return a.createShader(b)},
iA:function(a,b){return a.deleteProgram(b)},
iB:function(a,b){return a.deleteShader(b)},
iE:function(a,b){return a.depthFunc(b)},
iF:function(a,b){return a.disable(b)},
dm:function(a,b){return a.disableVertexAttribArray(b)},
iG:function(a,b,c,d,e){return a.drawElements(b,c,H.X(d),H.X(e))},
c4:function(a,b){return a.enable(b)},
du:function(a,b){return a.enableVertexAttribArray(b)},
eb:function(a,b){return a.generateMipmap(b)},
ec:function(a,b,c){return a.getActiveAttrib(b,c)},
ed:function(a,b,c){return a.getActiveUniform(b,c)},
ee:function(a,b,c){return a.getAttribLocation(b,c)},
cs:function(a,b){return a.getParameter(b)},
eg:function(a,b){return a.getProgramInfoLog(b)},
bv:function(a,b,c){return a.getProgramParameter(b,c)},
eh:function(a,b){return a.getShaderInfoLog(b)},
ei:function(a,b,c){return a.getShaderParameter(b,c)},
ej:function(a,b,c){return a.getUniformLocation(b,c)},
iQ:function(a,b){return a.linkProgram(b)},
e0:function(a,b,c){return a.pixelStorei(b,c)},
eo:function(a,b,c){return a.shaderSource(b,c)},
jh:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.O(g)
if(!!u.$ib_)t=!0
else t=!1
if(t){this.hF(a,b,c,d,e,f,P.kg(g))
return}if(!!u.$ibK)u=!0
else u=!1
if(u){this.hG(a,b,c,d,e,f,g)
return}throw H.i(P.jf("Incorrect number or type of arguments"))},
e4:function(a,b,c,d,e,f,g){return this.jh(a,b,c,d,e,f,g,null,null,null)},
hF:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
hG:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
am:function(a,b,c,d){return a.texParameteri(b,c,d)},
E:function(a,b,c){return a.uniform1f(b,c)},
G:function(a,b,c){return a.uniform1i(b,c)},
p:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
e8:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
e9:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cp:function(a,b){return a.useProgram(b)},
jo:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jp:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibo:1}
P.d1.prototype={$id1:1}
P.d7.prototype={$id7:1}
P.dh.prototype={$idh:1}
O.M.prototype={
b_:function(a){this.sfg(H.b([],[a]))
this.sd_(null)
this.scW(null)
this.sd0(null)},
ct:function(a,b,c){var u=H.ao(this,"M",0)
H.l(b,{func:1,ret:P.W,args:[[P.j,u]]})
u={func:1,ret:-1,args:[P.u,[P.j,u]]}
H.l(a,u)
H.l(c,u)
this.sd_(b)
this.scW(a)
this.sd0(c)},
aI:function(a,b){return this.ct(a,null,b)},
cZ:function(a){var u
H.d(a,"$ij",[H.ao(this,"M",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cC:function(a,b){var u
H.d(b,"$ij",[H.ao(this,"M",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gN:function(a){var u=this.a
return new J.a9(u,u.length,0,[H.q(u,0)])},
a7:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ao(this,"M",0)
H.x(b,u)
u=[u]
if(this.cZ(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.cC(s,H.b([b],u))}},
bU:function(a,b){var u,t
H.d(b,"$ij",[H.ao(this,"M",0)],"$aj")
if(this.cZ(b)){u=this.a
t=u.length
C.a.bU(u,b)
this.cC(t,b)}},
sfg:function(a){this.a=H.d(a,"$ia",[H.ao(this,"M",0)],"$aa")},
sd_:function(a){this.b=H.l(a,{func:1,ret:P.W,args:[[P.j,H.ao(this,"M",0)]]})},
scW:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.u,[P.j,H.ao(this,"M",0)]]})},
sd0:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.u,[P.j,H.ao(this,"M",0)]]})},
$ij:1}
O.bO.prototype={
gm:function(a){return this.a.length},
gl:function(){var u=this.b
if(u==null){u=D.C()
this.b=u}return u},
eA:function(a){var u=this.b
if(u!=null)u.B(a)},
aw:function(){return this.eA(null)},
gU:function(){var u=this.a
if(u.length>0)return C.a.gce(u)
else return V.bk()},
bp:function(a){var u=this.a
if(a==null)C.a.h(u,V.bk())
else C.a.h(u,a)
this.aw()},
au:function(){var u=this.a
if(u.length>0){u.pop()
this.aw()}},
sbE:function(a){this.a=H.d(a,"$ia",[V.ab],"$aa")}}
E.dN.prototype={}
E.a6.prototype={
sbw:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gl().R(0,this.gdZ())
t=this.c
if(t!=null)t.gl().h(0,this.gdZ())
s=new D.D("shape",u,this.c,this,[F.d2])
s.b=!0
this.aF(s)}},
ab:function(a){var u
for(u=this.y.a,u=new J.a9(u,u.length,0,[H.q(u,0)]);u.v();)u.d.ab(a)},
a4:function(a){var u,t
u=a.dx
C.a.h(u.a,u.gU())
u.aw()
a.cn(this.f)
u=a.dy
t=(u&&C.a).gce(u)
if(t!=null&&this.d!=null)t.e1(a,this)
for(u=this.y.a,u=new J.a9(u,u.length,0,[H.q(u,0)]);u.v();)u.d.a4(a)
a.cm()
a.dx.au()},
gl:function(){var u=this.z
if(u==null){u=D.C()
this.z=u}return u},
aF:function(a){var u=this.z
if(u!=null)u.B(a)},
Z:function(){return this.aF(null)},
e_:function(a){H.h(a,"$ir")
this.e=null
this.aF(a)},
j0:function(){return this.e_(null)},
dY:function(a){this.aF(H.h(a,"$ir"))},
iY:function(){return this.dY(null)},
iX:function(a,b){var u,t,s,r,q,p,o
H.d(b,"$ij",[E.a6],"$aj")
for(u=b.length,t=this.gdX(),s={func:1,ret:-1,args:[D.r]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bG()
o.sai(null)
o.sbO(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sai(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Z()},
j_:function(a,b){var u,t
H.d(b,"$ij",[E.a6],"$aj")
for(u=b.gN(b),t=this.gdX();u.v();)u.gK().gl().R(0,t)
this.Z()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
seB:function(a,b){this.y=H.d(b,"$iM",[E.a6],"$aM")},
$iaC:1}
E.eF.prototype={
ex:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.aa(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.bO()
t=[V.ab]
u.sbE(H.b([],t))
u.b=null
u.gl().h(0,new E.eG(this))
this.cy=u
u=new O.bO()
u.sbE(H.b([],t))
u.b=null
u.gl().h(0,new E.eH(this))
this.db=u
u=new O.bO()
u.sbE(H.b([],t))
u.b=null
u.gl().h(0,new E.eI(this))
this.dx=u
this.shE(H.b([],[O.b6]))
u=this.dy;(u&&C.a).h(u,null)
this.shz(new H.aK([P.v,A.bU]))},
gj9:function(){var u=this.z
if(u==null){u=this.cy.gU().n(0,this.db.gU())
this.z=u}return u},
cn:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gce(u):a;(u&&C.a).h(u,t)},
cm:function(){var u=this.dy
if(u.length>1)u.pop()},
da:function(a){var u=a.b
if(u.length===0)throw H.i(P.o("May not cache a shader with no name."))
if(this.fr.dj(u))throw H.i(P.o('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.a_(0,u,a)},
shE:function(a){this.dy=H.d(a,"$ia",[O.b6],"$aa")},
shz:function(a){this.fr=H.d(a,"$iaz",[P.v,A.bU],"$aaz")}}
E.eG.prototype={
$1:function(a){var u
H.h(a,"$ir")
u=this.a
u.z=null
u.ch=null},
$S:8}
E.eH.prototype={
$1:function(a){var u
H.h(a,"$ir")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:8}
E.eI.prototype={
$1:function(a){var u
H.h(a,"$ir")
u=this.a
u.ch=null
u.cx=null},
$S:8}
E.dd.prototype={
cF:function(a){H.h(a,"$ir")
this.e2()},
cE:function(){return this.cF(null)},
giL:function(){var u,t,s
u=Date.now()
t=C.i.Y(P.i1(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aa(u,!1)
return s/t},
d3:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.n()
if(typeof u!=="number")return H.y(u)
s=C.f.cb(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.n()
r=C.f.cb(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.im(C.n,this.gjc())}},
e2:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.f2(this),{func:1,ret:-1,args:[P.a4]})
C.A.f1(u)
C.A.hn(u,W.iE(t,P.a4))}},
ja:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.d3()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aa(r,!1)
s.y=P.i1(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aw()
r=s.db
C.a.sm(r.a,0)
r.aw()
r=s.dx
C.a.sm(r.a,0)
r.aw()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.a4(this.e)}}catch(q){u=H.aR(q)
t=H.bu(q)
P.hO("Error: "+H.f(u))
P.hO("Stack: "+H.f(t))
throw H.i(u)}}}
E.f2.prototype={
$1:function(a){var u
H.kv(a)
u=this.a
if(u.ch){u.ch=!1
u.ja()}},
$S:35}
Z.dr.prototype={$ikD:1}
Z.cs.prototype={
X:function(a){var u,t,s
try{t=a.a
C.b.du(t,this.e)
C.b.jo(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.aR(s)
t=P.o('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.f(u))
throw H.i(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.f(this.e)+"]"}}
Z.ds.prototype={$ikE:1}
Z.bA.prototype={
at:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
X:function(a){var u,t
u=this.a
C.b.aj(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].X(a)},
aZ:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dm(s,u[t].e)
C.b.aj(s,this.a.a,null)},
a4:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.k(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aj(t,p,r.b)
C.b.iG(t,q.a,q.b,5123,0)
C.b.aj(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.v]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.w)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ai(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.w(t,", ")+"\nAttrs:   "+C.a.w(p,", ")},
sfc:function(a){this.b=H.d(a,"$ia",[Z.b0],"$aa")},
$ikL:1}
Z.b0.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bm(this.c)+"'")+"]"}}
Z.aG.prototype={
gcu:function(a){var u,t
u=this.a
t=(u&$.at().a)!==0?3:0
if((u&$.aU().a)!==0)t+=3
if((u&$.aT().a)!==0)t+=3
if((u&$.aV().a)!==0)t+=2
if((u&$.aW().a)!==0)t+=3
if((u&$.cl().a)!==0)t+=3
if((u&$.cm().a)!==0)t+=4
if((u&$.bx().a)!==0)++t
return(u&$.aS().a)!==0?t+4:t},
ik:function(a){var u,t,s
u=$.at()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aU()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aT()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aV()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aW()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cl()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cm()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bx()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aS()
if((t&u.a)!==0)if(s===a)return u
return $.j9()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aG))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.v])
t=this.a
if((t&$.at().a)!==0)C.a.h(u,"Pos")
if((t&$.aU().a)!==0)C.a.h(u,"Norm")
if((t&$.aT().a)!==0)C.a.h(u,"Binm")
if((t&$.aV().a)!==0)C.a.h(u,"Txt2D")
if((t&$.aW().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cl().a)!==0)C.a.h(u,"Clr3")
if((t&$.cm().a)!==0)C.a.h(u,"Clr4")
if((t&$.bx().a)!==0)C.a.h(u,"Weight")
if((t&$.aS().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.w(u,"|")}}
D.dQ.prototype={}
D.bG.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.r]}
H.l(b,u)
if(this.a==null)this.sai(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
R:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[D.r]})
u=this.a
u=u==null?null:C.a.aD(u,b)
if(u===!0){u=this.a
t=(u&&C.a).R(u,b)||!1}else t=!1
return t},
B:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1)r=!0
else r=!1
if(r)return!1
if(a==null){a=new D.r(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.a8(t,new D.e1(u))
return!0},
dt:function(){return this.B(null)},
jd:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.B(t)}}},
av:function(){return this.jd(!0,!1)},
sai:function(a){this.a=H.d(a,"$ia",[{func:1,ret:-1,args:[D.r]}],"$aa")},
sbO:function(a){this.b=H.d(a,"$ia",[{func:1,ret:-1,args:[D.r]}],"$aa")}}
D.e1.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.r]})
u=this.a.a
u.b
a.$1(u)},
$S:26}
D.r.prototype={}
D.b1.prototype={}
D.b2.prototype={}
D.D.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.ct.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ct))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.cK.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cK))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ee.prototype={
j6:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j2:function(a){this.c=a.b
this.d.R(0,a.a)
return!1},
shi:function(a){this.d=H.d(a,"$iij",[P.u],"$aij")}}
X.cN.prototype={}
X.ej.prototype={
aM:function(a,b){var u,t,s,r,q,p,o,n
u=new P.aa(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.n()
q=b.b
p=this.ch
if(typeof q!=="number")return q.n()
o=new V.U(t.a+s*r,t.b+q*p)
p=this.a.gaC()
n=new X.aN(a,V.aP(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cl:function(a,b){this.r=a.a
return!1},
aS:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.el()
if(typeof u!=="number")return u.ea()
this.r=(u&~t)>>>0
return!1},
aR:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aM(a,b))
return!0},
j7:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaC()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.n()
o=a.b
n=this.cy
if(typeof o!=="number")return o.n()
r=new X.bQ(new V.H(q*p,o*n),t,s,new P.aa(r,!1),this)
r.b=!0
u.B(r)
return!0},
fR:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.aa(Date.now(),!1)
t=this.f
s=new X.cN(c,a,this.a.gaC(),b,u,this)
s.b=!0
t.B(s)
this.y=u
this.x=V.aP()}}
X.ae.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ae))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aN.prototype={}
X.eu.prototype={
bB:function(a,b,c){var u,t,s
u=new P.aa(Date.now(),!1)
t=this.a.gaC()
s=new X.aN(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cl:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bB(a,b,!0))
return!0},
aS:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.el()
if(typeof u!=="number")return u.ea()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.B(this.bB(a,b,!0))
return!0},
aR:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bB(a,b,!1))
return!0},
j8:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaC()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.n()
p=a.b
o=this.ch
if(typeof p!=="number")return p.n()
s=new X.bQ(new V.H(r*q,p*o),t,b,new P.aa(s,!1),this)
s.b=!0
u.B(s)
return!0},
gdn:function(){var u=this.b
if(u==null){u=D.C()
this.b=u}return u},
gbs:function(){var u=this.c
if(u==null){u=D.C()
this.c=u}return u},
gdW:function(){var u=this.d
if(u==null){u=D.C()
this.d=u}return u}}
X.bQ.prototype={}
X.eC.prototype={}
X.df.prototype={}
X.f4.prototype={
aM:function(a,b){var u,t,s,r
H.d(a,"$ia",[V.U],"$aa")
u=new P.aa(Date.now(),!1)
t=a.length>0?a[0]:V.aP()
s=this.a.gaC()
r=new X.df(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
j5:function(a){var u
H.d(a,"$ia",[V.U],"$aa")
u=this.b
if(u==null)return!1
u.B(this.aM(a,!0))
return!0},
j3:function(a){var u
H.d(a,"$ia",[V.U],"$aa")
u=this.c
if(u==null)return!1
u.B(this.aM(a,!0))
return!0},
j4:function(a){var u
H.d(a,"$ia",[V.U],"$aa")
u=this.d
if(u==null)return!1
u.B(this.aM(a,!1))
return!0}}
X.dl.prototype={
gaC:function(){var u=this.a
return V.ih(0,0,C.m.gdi(u).c,C.m.gdi(u).d)},
cR:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cK(u,new X.ae(t,a.altKey,a.shiftKey))},
aB:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ae(t,a.altKey,a.shiftKey)},
bT:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ae(t,a.altKey,a.shiftKey)},
ar:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.F()
q=u.top
if(typeof s!=="number")return s.F()
return new V.U(t-r,s-q)},
aN:function(a){return new V.H(a.movementX,a.movementY)},
bQ:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.U])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.w)(s),++q){p=s[q]
o=C.f.af(p.pageX)
C.f.af(p.pageY)
n=u.left
C.f.af(p.pageX)
C.a.h(t,new V.U(o-n,C.f.af(p.pageY)-u.top))}return t},
an:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.ct(u,new X.ae(t,a.altKey,a.shiftKey))},
bF:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.F()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.F()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
fL:function(a){this.f=!0},
fz:function(a){this.f=!1},
fF:function(a){H.h(a,"$ia_")
if(this.f&&this.bF(a))a.preventDefault()},
fP:function(a){var u
H.h(a,"$iay")
if(!this.f)return
u=this.cR(a)
this.b.j6(u)},
fN:function(a){var u
H.h(a,"$iay")
if(!this.f)return
u=this.cR(a)
this.b.j2(u)},
fT:function(a){var u,t,s,r
H.h(a,"$ia_")
u=this.a
u.focus()
this.f=!0
this.aB(a)
if(this.x){t=this.an(a)
s=this.aN(a)
if(this.d.cl(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.an(a)
r=this.ar(a)
if(this.c.cl(t,r))a.preventDefault()},
fX:function(a){var u,t,s
H.h(a,"$ia_")
this.aB(a)
u=this.an(a)
if(this.x){t=this.aN(a)
if(this.d.aS(u,t))a.preventDefault()
return}if(this.r)return
s=this.ar(a)
if(this.c.aS(u,s))a.preventDefault()},
fJ:function(a){var u,t,s
H.h(a,"$ia_")
if(!this.bF(a)){this.aB(a)
u=this.an(a)
if(this.x){t=this.aN(a)
if(this.d.aS(u,t))a.preventDefault()
return}if(this.r)return
s=this.ar(a)
if(this.c.aS(u,s))a.preventDefault()}},
fV:function(a){var u,t,s
H.h(a,"$ia_")
this.aB(a)
u=this.an(a)
if(this.x){t=this.aN(a)
if(this.d.aR(u,t))a.preventDefault()
return}if(this.r)return
s=this.ar(a)
if(this.c.aR(u,s))a.preventDefault()},
fH:function(a){var u,t,s
H.h(a,"$ia_")
if(!this.bF(a)){this.aB(a)
u=this.an(a)
if(this.x){t=this.aN(a)
if(this.d.aR(u,t))a.preventDefault()
return}if(this.r)return
s=this.ar(a)
if(this.c.aR(u,s))a.preventDefault()}},
fZ:function(a){var u,t
H.h(a,"$iaH")
this.aB(a)
u=new V.H((a&&C.z).giC(a),C.z.giD(a)).t(0,180)
if(this.x){if(this.d.j7(u))a.preventDefault()
return}if(this.r)return
t=this.ar(a)
if(this.c.j8(u,t))a.preventDefault()},
h0:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.an(this.y)
s=this.ar(this.y)
this.d.fR(t,s,u)}},
hg:function(a){var u
H.h(a,"$iar")
this.a.focus()
this.f=!0
this.bT(a)
u=this.bQ(a)
if(this.e.j5(u))a.preventDefault()},
hc:function(a){var u
H.h(a,"$iar")
this.bT(a)
u=this.bQ(a)
if(this.e.j3(u))a.preventDefault()},
he:function(a){var u
H.h(a,"$iar")
this.bT(a)
u=this.bQ(a)
if(this.e.j4(u))a.preventDefault()},
sf2:function(a){this.z=H.d(a,"$ia",[[P.bW,P.G]],"$aa")}}
D.cz.prototype={$iQ:1,$iaC:1}
D.Q.prototype={$iaC:1}
D.cL.prototype={
gl:function(){var u=this.Q
if(u==null){u=D.C()
this.Q=u}return u},
cG:function(a){var u=this.Q
if(u!=null)u.B(a)},
cY:function(a){var u=this.ch
if(u!=null)u.B(a)},
fQ:function(){return this.cY(null)},
h2:function(a){var u,t,s
H.d(a,"$ij",[D.Q],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.w)(a),++t){s=a[t]
if(s==null||this.eX(s))return!1}return!0},
fq:function(a,b){var u,t,s,r,q
u=D.Q
H.d(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gcX(),r=0;r<b.length;b.length===t||(0,H.w)(b),++r){q=H.h(b[r],"$iQ")
q.gl().h(0,s)}u=new D.b1(a,b,this,[u])
u.b=!0
this.cG(u)},
h6:function(a,b){var u,t,s,r
u=D.Q
H.d(b,"$ij",[u],"$aj")
for(t=b.gN(b),s=this.gcX();t.v();){r=t.gK()
C.a.R(this.e,r)
r.gl().R(0,s)}u=new D.b2(a,b,this,[u])
u.b=!0
this.cG(u)},
eX:function(a){var u=C.a.aD(this.e,a)
return u},
sf0:function(a){this.e=H.d(a,"$ia",[D.cz],"$aa")},
shh:function(a){this.f=H.d(a,"$ia",[D.cZ],"$aa")},
shB:function(a){this.r=H.d(a,"$ia",[D.d5],"$aa")},
shP:function(a){this.x=H.d(a,"$ia",[D.da],"$aa")},
shQ:function(a){this.y=H.d(a,"$ia",[D.db],"$aa")},
shR:function(a){this.z=H.d(a,"$ia",[D.dc],"$aa")},
$aj:function(){return[D.Q]},
$aM:function(){return[D.Q]}}
D.cZ.prototype={$iQ:1,$iaC:1}
D.d5.prototype={$iQ:1,$iaC:1}
D.da.prototype={$iQ:1,$iaC:1}
D.db.prototype={$iQ:1,$iaC:1}
D.dc.prototype={$iQ:1,$iaC:1}
V.a0.prototype={
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
V.ap.prototype={
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ap))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}}
V.e_.prototype={}
V.cR.prototype={
a5:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return u},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cR))return!1
u=b.a
t=$.E().a
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
u=[P.t]
t=V.bs(H.b([this.a,this.d,this.r],u),3,0)
s=V.bs(H.b([this.b,this.e,this.x],u),3,0)
r=V.bs(H.b([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.k(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.k(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.k(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.k(t,1)
n=" "+t[1]+", "
if(1>=p)return H.k(s,1)
n=n+s[1]+", "
if(1>=o)return H.k(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.k(t,2)
u=" "+t[2]+", "
if(2>=p)return H.k(s,2)
u=u+s[2]+", "
if(2>=o)return H.k(r,2)
return n+(u+r[2]+"]")}}
V.ab.prototype={
a5:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return u},
cd:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.E().a)return V.bk()
a8=1/a7
a9=-r
b0=-d
return V.aB((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
n:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aB(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
e7:function(a){return new V.I(C.f.n(this.a,a.gdq(a))+C.f.n(this.b,a.gdr(a))+C.f.n(this.c,a.gds()),C.f.n(this.e,a.gdq(a))+C.f.n(this.f,a.gdr(a))+C.f.n(this.r,a.gds()),C.f.n(this.y,a.gdq(a))+C.f.n(this.z,a.gdr(a))+C.f.n(this.Q,a.gds()))},
aY:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.a7(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.E().a
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
i:function(a){return this.H()},
dS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.t]
t=V.bs(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bs(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bs(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bs(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.k(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.k(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.k(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.k(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.k(t,1)
l=l+t[1]+", "
if(1>=o)return H.k(s,1)
l=l+s[1]+", "
if(1>=n)return H.k(r,1)
l=l+r[1]+", "
if(1>=m)return H.k(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.k(t,2)
p=p+t[2]+", "
if(2>=o)return H.k(s,2)
p=p+s[2]+", "
if(2>=n)return H.k(r,2)
p=p+r[2]+", "
if(2>=m)return H.k(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.k(t,3)
l=l+t[3]+", "
if(3>=o)return H.k(s,3)
l=l+s[3]+", "
if(3>=n)return H.k(r,3)
l=l+r[3]+", "
if(3>=m)return H.k(q,3)
return p+(l+q[3]+"]")},
H:function(){return this.dS("",3,0)},
u:function(a){return this.dS(a,3,0)}}
V.U.prototype={
F:function(a,b){return new V.U(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}}
V.a7.prototype={
F:function(a,b){return new V.a7(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
V.aQ.prototype={
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aQ))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}}
V.d0.prototype={
ga3:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d0))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}}
V.H.prototype={
cf:function(a){return Math.sqrt(this.A(this))},
A:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.y(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.y(r)
return u*t+s*r},
n:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.n()
t=this.b
if(typeof t!=="number")return t.n()
return new V.H(u*b,t*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.E().a){u=$.ir
if(u==null){u=new V.H(0,0)
$.ir=u}return u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.H(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
u=b.a
t=this.a
s=$.E()
s.toString
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.y(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.y(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}}
V.I.prototype={
cf:function(a){return Math.sqrt(this.A(this))},
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cg:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.I(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aQ:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.I(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.I(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.I(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.E().a)return V.dq()
return new V.I(this.a/b,this.b/b,this.c/b)},
dU:function(){var u=$.E().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
U.dR.prototype={
bx:function(a){var u=V.kC(a,this.c,this.b)
return u},
gl:function(){var u=this.y
if(u==null){u=D.C()
this.y=u}return u},
J:function(a){var u=this.y
if(u!=null)u.B(a)},
scq:function(a,b){},
sci:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.E().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bx(t)}u=new D.D("maximumLocation",u,this.b,this,[P.t])
u.b=!0
this.J(u)}},
sck:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.E().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bx(t)}u=new D.D("minimumLocation",u,this.c,this,[P.t])
u.b=!0
this.J(u)}},
sa2:function(a,b){var u
b=this.bx(b)
u=this.d
if(!(Math.abs(u-b)<$.E().a)){this.d=b
u=new D.D("location",u,b,this,[P.t])
u.b=!0
this.J(u)}},
scj:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.E().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.D("maximumVelocity",u,a,this,[P.t])
u.b=!0
this.J(u)}},
sM:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.E().a)){this.f=a
u=new D.D("velocity",u,a,this,[P.t])
u.b=!0
this.J(u)}},
sc3:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.E().a)){this.x=a
u=new D.D("dampening",u,a,this,[P.t])
u.b=!0
this.J(u)}},
ab:function(a){var u,t,s,r,q
u=this.f
t=$.E().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa2(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.E().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sM(s)}}}
U.cv.prototype={
gl:function(){var u=this.b
if(u==null){u=D.C()
this.b=u}return u},
aG:function(a,b){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cv))return!1
return J.Y(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")}}
U.bJ.prototype={
gl:function(){var u=this.e
if(u==null){u=D.C()
this.e=u}return u},
J:function(a){var u
H.h(a,"$ir")
u=this.e
if(u!=null)u.B(a)},
a0:function(){return this.J(null)},
fo:function(a,b){var u,t,s,r,q,p,o,n
u=U.a1
H.d(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gaA(),r={func:1,ret:-1,args:[D.r]},q=[r],p=0;p<b.length;b.length===t||(0,H.w)(b),++p){o=b[p]
if(o!=null){n=o.gl()
n.toString
H.l(s,r)
if(n.a==null)n.sai(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.b1(a,b,this,[u])
u.b=!0
this.J(u)},
h4:function(a,b){var u,t,s
u=U.a1
H.d(b,"$ij",[u],"$aj")
for(t=b.gN(b),s=this.gaA();t.v();)t.gK().gl().R(0,s)
u=new D.b2(a,b,this,[u])
u.b=!0
this.J(u)},
aG:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.aH()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.a9(u,u.length,0,[H.q(u,0)]),s=null;u.v();){t=u.d
if(t!=null){r=t.aG(a,b)
if(r!=null)s=s==null?r:r.n(0,s)}}this.f=s==null?V.bk():s
u=this.e
if(u!=null)u.av()}return this.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bJ))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.k(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.k(r,t)
if(!J.Y(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.a1]},
$aM:function(){return[U.a1]},
$ia1:1}
U.a1.prototype={}
U.dm.prototype={
gl:function(){var u=this.cy
if(u==null){u=D.C()
this.cy=u}return u},
J:function(a){var u
H.h(a,"$ir")
u=this.cy
if(u!=null)u.B(a)},
a0:function(){return this.J(null)},
aO:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdn().h(0,this.gbG())
this.a.c.gdW().h(0,this.gbI())
this.a.c.gbs().h(0,this.gbK())
return!0},
bH:function(a){H.h(a,"$ir")
if(!J.Y(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
bJ:function(a){var u,t,s,r,q,p,o
a=H.c(H.h(a,"$ir"),"$iaN")
if(!this.y)return
if(this.x){u=a.d.F(0,a.y)
u=new V.H(u.a,u.b)
u=u.A(u)
t=this.r
if(typeof t!=="number")return H.y(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.F(0,a.y)
u=new V.H(t.a,t.b).n(0,2).t(0,u.ga3())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.n()
s=this.e
if(typeof s!=="number")return H.y(s)
t.sM(u*10*s)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=new V.H(s.a,s.b).n(0,2).t(0,u.ga3())
s=this.b
q=r.a
if(typeof q!=="number")return q.L()
p=this.e
if(typeof p!=="number")return H.y(p)
o=this.z
if(typeof o!=="number")return H.y(o)
s.sa2(0,-q*p+o)
this.b.sM(0)
t=t.F(0,a.z)
this.Q=new V.H(t.a,t.b).n(0,2).t(0,u.ga3())}this.a0()},
bL:function(a){var u,t,s
H.h(a,"$ir")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.A(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.n()
s=this.e
if(typeof s!=="number")return H.y(s)
u.sM(t*10*s)
this.a0()}},
aG:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.aH()
if(u<t){this.ch=t
s=a.y
this.b.ab(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aB(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ia1:1}
U.dn.prototype={
gl:function(){var u=this.fx
if(u==null){u=D.C()
this.fx=u}return u},
J:function(a){var u
H.h(a,"$ir")
u=this.fx
if(u!=null)u.B(a)},
a0:function(){return this.J(null)},
aO:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdn().h(0,this.gbG())
this.a.c.gdW().h(0,this.gbI())
this.a.c.gbs().h(0,this.gbK())
u=this.a.d
t=u.f
if(t==null){t=D.C()
u.f=t
u=t}else u=t
u.h(0,this.gfh())
u=this.a.d
t=u.d
if(t==null){t=D.C()
u.d=t
u=t}else u=t
u.h(0,this.gfj())
u=this.a.e
t=u.b
if(t==null){t=D.C()
u.b=t
u=t}else u=t
u.h(0,this.ghM())
u=this.a.e
t=u.d
if(t==null){t=D.C()
u.d=t
u=t}else u=t
u.h(0,this.ghK())
u=this.a.e
t=u.c
if(t==null){t=D.C()
u.c=t
u=t}else u=t
u.h(0,this.ghI())
return!0},
ah:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.L()
u=-u}if(this.r){if(typeof t!=="number")return t.L()
t=-t}return new V.H(u,t)},
bH:function(a){a=H.c(H.h(a,"$ir"),"$iaN")
if(!J.Y(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bJ:function(a){var u,t,s,r,q,p,o
a=H.c(H.h(a,"$ir"),"$iaN")
if(!this.cx)return
if(this.ch){u=a.d.F(0,a.y)
u=new V.H(u.a,u.b)
u=u.A(u)
t=this.Q
if(typeof t!=="number")return H.y(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.F(0,a.y)
u=this.ah(new V.H(t.a,t.b).n(0,2).t(0,u.ga3()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.L()
s=this.y
if(typeof s!=="number")return H.y(s)
t.sM(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.L()
t=this.x
if(typeof t!=="number")return H.y(t)
s.sM(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=this.ah(new V.H(s.a,s.b).n(0,2).t(0,u.ga3()))
s=this.c
q=r.a
if(typeof q!=="number")return q.L()
p=this.y
if(typeof p!=="number")return H.y(p)
o=this.cy
if(typeof o!=="number")return H.y(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.L()
q=this.x
if(typeof q!=="number")return H.y(q)
s=this.db
if(typeof s!=="number")return H.y(s)
o.sa2(0,-p*q+s)
this.b.sM(0)
this.c.sM(0)
t=t.F(0,a.z)
this.dx=this.ah(new V.H(t.a,t.b).n(0,2).t(0,u.ga3()))}this.a0()},
bL:function(a){var u,t,s
H.h(a,"$ir")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.A(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.L()
s=this.y
if(typeof s!=="number")return H.y(s)
u.sM(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.L()
u=this.x
if(typeof u!=="number")return H.y(u)
s.sM(-t*10*u)
this.a0()}},
fi:function(a){if(H.c(H.h(a,"$ir"),"$icN").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fk:function(a){var u,t,s,r,q,p,o
a=H.c(H.h(a,"$ir"),"$iaN")
if(!J.Y(this.d,a.x.b))return
u=a.c
t=a.d
s=t.F(0,a.y)
r=this.ah(new V.H(s.a,s.b).n(0,2).t(0,u.ga3()))
s=this.c
q=r.a
if(typeof q!=="number")return q.L()
p=this.y
if(typeof p!=="number")return H.y(p)
o=this.cy
if(typeof o!=="number")return H.y(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.L()
q=this.x
if(typeof q!=="number")return H.y(q)
s=this.db
if(typeof s!=="number")return H.y(s)
o.sa2(0,-p*q+s)
this.b.sM(0)
this.c.sM(0)
t=t.F(0,a.z)
this.dx=this.ah(new V.H(t.a,t.b).n(0,2).t(0,u.ga3()))
this.a0()},
hN:function(a){H.h(a,"$ir")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
hL:function(a){var u,t,s,r,q,p,o
a=H.c(H.h(a,"$ir"),"$idf")
if(!this.cx)return
if(this.ch){u=a.d.F(0,a.y)
u=new V.H(u.a,u.b)
u=u.A(u)
t=this.Q
if(typeof t!=="number")return H.y(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.F(0,a.y)
u=this.ah(new V.H(t.a,t.b).n(0,2).t(0,u.ga3()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.L()
s=this.y
if(typeof s!=="number")return H.y(s)
t.sM(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.L()
t=this.x
if(typeof t!=="number")return H.y(t)
s.sM(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=this.ah(new V.H(s.a,s.b).n(0,2).t(0,u.ga3()))
s=this.c
q=r.a
if(typeof q!=="number")return q.L()
p=this.y
if(typeof p!=="number")return H.y(p)
o=this.cy
if(typeof o!=="number")return H.y(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.L()
q=this.x
if(typeof q!=="number")return H.y(q)
s=this.db
if(typeof s!=="number")return H.y(s)
o.sa2(0,-p*q+s)
this.b.sM(0)
this.c.sM(0)
t=t.F(0,a.z)
this.dx=this.ah(new V.H(t.a,t.b).n(0,2).t(0,u.ga3()))}this.a0()},
hJ:function(a){var u,t,s
H.h(a,"$ir")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.A(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.L()
s=this.y
if(typeof s!=="number")return H.y(s)
u.sM(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.L()
u=this.x
if(typeof u!=="number")return H.y(u)
s.sM(-t*10*u)
this.a0()}},
aG:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.aH()
if(u<t){this.dy=t
s=a.y
this.c.ab(s)
this.b.ab(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aB(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.n(0,V.aB(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$ia1:1}
U.dp.prototype={
gl:function(){var u=this.r
if(u==null){u=D.C()
this.r=u}return u},
J:function(a){var u=this.r
if(u!=null)u.B(a)},
aO:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.C()
u.e=t
u=t}else u=t
t=this.gfl()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.C()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
fm:function(a){var u,t,s,r
H.h(a,"$ir")
if(!J.Y(this.b,this.a.b.c))return
H.c(a,"$ibQ")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.n()
r=u+t*s
if(u!==r){this.d=r
u=new D.D("zoom",u,r,this,[P.t])
u.b=!0
this.J(u)}},
aG:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aB(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ia1:1}
M.cu.prototype={
gl:function(){var u=this.f
if(u==null){u=D.C()
this.f=u}return u},
T:function(a){var u
H.h(a,"$ir")
u=this.f
if(u!=null)u.B(a)},
aJ:function(){return this.T(null)},
h8:function(a,b){var u,t,s,r,q,p,o,n
u=M.af
H.d(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gS(),r={func:1,ret:-1,args:[D.r]},q=[r],p=0;p<b.length;b.length===t||(0,H.w)(b),++p){o=b[p]
if(o!=null){n=o.gl()
n.toString
H.l(s,r)
if(n.a==null)n.sai(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.b1(a,b,this,[u])
u.b=!0
this.T(u)},
ha:function(a,b){var u,t,s
u=M.af
H.d(b,"$ij",[u],"$aj")
for(t=b.gN(b),s=this.gS();t.v();)t.gK().gl().R(0,s)
u=new D.b2(a,b,this,[u])
u.b=!0
this.T(u)},
a4:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.a9(u,u.length,0,[H.q(u,0)]);u.v();){t=u.d
if(t!=null)t.a4(a)}this.e=!1},
$aj:function(){return[M.af]},
$aM:function(){return[M.af]},
$iaf:1}
M.cx.prototype={
gl:function(){var u=this.f
if(u==null){u=D.C()
this.f=u}return u},
T:function(a){var u
H.h(a,"$ir")
u=this.f
if(u!=null)u.B(a)},
aJ:function(){return this.T(null)},
saP:function(a){var u,t
if(a==null)a=new X.e8()
u=this.a
if(u!==a){if(u!=null)u.gl().R(0,this.gS())
t=this.a
this.a=a
a.gl().h(0,this.gS())
u=new D.D("camera",t,this.a,this,[X.bc])
u.b=!0
this.T(u)}},
saU:function(a,b){var u,t
if(b==null)b=X.hs(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gl().R(0,this.gS())
t=this.b
this.b=b
b.gl().h(0,this.gS())
u=new D.D("target",t,this.b,this,[X.bX])
u.b=!0
this.T(u)}},
saV:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gl().R(0,this.gS())
t=this.c
this.c=a
if(a!=null)a.gl().h(0,this.gS())
u=new D.D("technique",t,this.c,this,[O.b6])
u.b=!0
this.T(u)}},
a4:function(a){a.cn(this.c)
this.b.X(a)
this.a.X(a)
this.d.ab(a)
this.d.a4(a)
this.a.aZ(a)
this.b.toString
a.cm()},
$iaf:1}
M.cB.prototype={
T:function(a){var u
H.h(a,"$ir")
u=this.x
if(u!=null)u.B(a)},
aJ:function(){return this.T(null)},
fB:function(a,b){var u,t,s,r,q,p,o,n
u=E.a6
H.d(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gS(),r={func:1,ret:-1,args:[D.r]},q=[r],p=0;p<b.length;b.length===t||(0,H.w)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bG()
n.sai(null)
n.sbO(null)
n.c=null
n.d=0
o.z=n}H.l(s,r)
if(n.a==null)n.sai(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.b1(a,b,this,[u])
u.b=!0
this.T(u)},
fD:function(a,b){var u,t,s
u=E.a6
H.d(b,"$ij",[u],"$aj")
for(t=b.gN(b),s=this.gS();t.v();)t.gK().gl().R(0,s)
u=new D.b2(a,b,this,[u])
u.b=!0
this.T(u)},
saP:function(a){var u,t
if(a==null)a=X.ia(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gl().R(0,this.gS())
t=this.a
this.a=a
a.gl().h(0,this.gS())
u=new D.D("camera",t,this.a,this,[X.bc])
u.b=!0
this.T(u)}},
saU:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gl().R(0,this.gS())
t=this.b
this.b=b
b.gl().h(0,this.gS())
u=new D.D("target",t,this.b,this,[X.bX])
u.b=!0
this.T(u)}},
saV:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gl().R(0,this.gS())
t=this.c
this.c=a
if(a!=null)a.gl().h(0,this.gS())
u=new D.D("technique",t,this.c,this,[O.b6])
u.b=!0
this.T(u)}},
gl:function(){var u=this.x
if(u==null){u=D.C()
this.x=u}return u},
a4:function(a){var u
a.cn(this.c)
this.b.X(a)
this.a.X(a)
u=this.c
if(u!=null)u.ab(a)
for(u=this.d.a,u=new J.a9(u,u.length,0,[H.q(u,0)]);u.v();)u.d.ab(a)
for(u=this.d.a,u=new J.a9(u,u.length,0,[H.q(u,0)]);u.v();)u.d.a4(a)
this.a.toString
a.cy.au()
a.db.au()
this.b.toString
a.cm()},
seV:function(a,b){this.d=H.d(b,"$iM",[E.a6],"$aM")},
$iaf:1}
M.af.prototype={}
A.cp.prototype={}
A.dM.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iI:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
C.b.du(r.a,r.c)}},
dl:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
C.b.dm(r.a,r.c)}}}
A.cQ.prototype={
ew:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.b5("")
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
a6.hV(u)
a6.i1(u)
a6.hW(u)
a6.i9(u)
a6.ia(u)
a6.i3(u)
a6.ig(u)
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
u=new P.b5("")
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
q.hZ(u)
q.hU(u)
q.hX(u)
q.i_(u)
q.i7(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.i5(u)
q.i6(u)}q.i2(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
if(l!==C.c){m+="uniform float alpha;\n"
u.a=m
if(l!==C.h){m+="uniform int nullAlphaTxt;\n"
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
case C.h:m+="   return alpha;\n"
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
k=H.b([],[P.v])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.w(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.hY(u)
q.i4(u)
q.i8(u)
q.ib(u)
q.ic(u)
q.ie(u)
q.i0(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.v])
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
i="vec4("+C.a.w(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.dT(s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.c(this.y.k(0,"invViewMat"),"$iad")
if(t)this.dy=H.c(this.y.k(0,"objMat"),"$iad")
if(r)this.fr=H.c(this.y.k(0,"viewObjMat"),"$iad")
this.fy=H.c(this.y.k(0,"projViewObjMat"),"$iad")
if(a6.x2)this.k1=H.c(this.y.k(0,"txt2DMat"),"$ic1")
if(a6.y1)this.k2=H.c(this.y.k(0,"txtCubeMat"),"$iad")
if(a6.y2)this.k3=H.c(this.y.k(0,"colorMat"),"$iad")
this.seQ(H.b([],[A.ad]))
t=a6.al
if(t>0){this.k4=H.h(this.y.k(0,"bendMatCount"),"$iB")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.p(P.o("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.c(g,"$iad"))}}t=a6.a
if(t!==C.c){this.r2=H.c(this.y.k(0,"emissionClr"),"$iz")
switch(t){case C.c:break
case C.h:break
case C.d:this.rx=H.c(this.y.k(0,"emissionTxt"),"$ia8")
this.x1=H.c(this.y.k(0,"nullEmissionTxt"),"$iB")
break
case C.e:this.ry=H.c(this.y.k(0,"emissionTxt"),"$ia3")
this.x1=H.c(this.y.k(0,"nullEmissionTxt"),"$iB")
break}}t=a6.b
if(t!==C.c){this.x2=H.c(this.y.k(0,"ambientClr"),"$iz")
switch(t){case C.c:break
case C.h:break
case C.d:this.y1=H.c(this.y.k(0,"ambientTxt"),"$ia8")
this.al=H.c(this.y.k(0,"nullAmbientTxt"),"$iB")
break
case C.e:this.y2=H.c(this.y.k(0,"ambientTxt"),"$ia3")
this.al=H.c(this.y.k(0,"nullAmbientTxt"),"$iB")
break}}t=a6.c
if(t!==C.c){this.ae=H.c(this.y.k(0,"diffuseClr"),"$iz")
switch(t){case C.c:break
case C.h:break
case C.d:this.b8=H.c(this.y.k(0,"diffuseTxt"),"$ia8")
this.b9=H.c(this.y.k(0,"nullDiffuseTxt"),"$iB")
break
case C.e:this.dv=H.c(this.y.k(0,"diffuseTxt"),"$ia3")
this.b9=H.c(this.y.k(0,"nullDiffuseTxt"),"$iB")
break}}t=a6.d
if(t!==C.c){this.ba=H.c(this.y.k(0,"invDiffuseClr"),"$iz")
switch(t){case C.c:break
case C.h:break
case C.d:this.dw=H.c(this.y.k(0,"invDiffuseTxt"),"$ia8")
this.bb=H.c(this.y.k(0,"nullInvDiffuseTxt"),"$iB")
break
case C.e:this.dz=H.c(this.y.k(0,"invDiffuseTxt"),"$ia3")
this.bb=H.c(this.y.k(0,"nullInvDiffuseTxt"),"$iB")
break}}t=a6.e
if(t!==C.c){this.be=H.c(this.y.k(0,"shininess"),"$iK")
this.bc=H.c(this.y.k(0,"specularClr"),"$iz")
switch(t){case C.c:break
case C.h:break
case C.d:this.dA=H.c(this.y.k(0,"specularTxt"),"$ia8")
this.bd=H.c(this.y.k(0,"nullSpecularTxt"),"$iB")
break
case C.e:this.dB=H.c(this.y.k(0,"specularTxt"),"$ia3")
this.bd=H.c(this.y.k(0,"nullSpecularTxt"),"$iB")
break}}switch(a6.f){case C.c:break
case C.h:break
case C.d:this.dC=H.c(this.y.k(0,"bumpTxt"),"$ia8")
this.bf=H.c(this.y.k(0,"nullBumpTxt"),"$iB")
break
case C.e:this.dD=H.c(this.y.k(0,"bumpTxt"),"$ia3")
this.bf=H.c(this.y.k(0,"nullBumpTxt"),"$iB")
break}if(a6.dy){this.dE=H.c(this.y.k(0,"envSampler"),"$ia3")
this.dF=H.c(this.y.k(0,"nullEnvTxt"),"$iB")
t=a6.r
if(t!==C.c){this.bg=H.c(this.y.k(0,"reflectClr"),"$iz")
switch(t){case C.c:break
case C.h:break
case C.d:this.dG=H.c(this.y.k(0,"reflectTxt"),"$ia8")
this.bh=H.c(this.y.k(0,"nullReflectTxt"),"$iB")
break
case C.e:this.dH=H.c(this.y.k(0,"reflectTxt"),"$ia3")
this.bh=H.c(this.y.k(0,"nullReflectTxt"),"$iB")
break}}t=a6.x
if(t!==C.c){this.bi=H.c(this.y.k(0,"refraction"),"$iK")
this.bj=H.c(this.y.k(0,"refractClr"),"$iz")
switch(t){case C.c:break
case C.h:break
case C.d:this.dI=H.c(this.y.k(0,"refractTxt"),"$ia8")
this.bk=H.c(this.y.k(0,"nullRefractTxt"),"$iB")
break
case C.e:this.dJ=H.c(this.y.k(0,"refractTxt"),"$ia3")
this.bk=H.c(this.y.k(0,"nullRefractTxt"),"$iB")
break}}}t=a6.y
if(t!==C.c){this.bl=H.c(this.y.k(0,"alpha"),"$iK")
switch(t){case C.c:break
case C.h:break
case C.d:this.dK=H.c(this.y.k(0,"alphaTxt"),"$ia8")
this.bm=H.c(this.y.k(0,"nullAlphaTxt"),"$iB")
break
case C.e:this.dL=H.c(this.y.k(0,"alphaTxt"),"$ia3")
this.bm=H.c(this.y.k(0,"nullAlphaTxt"),"$iB")
break}}this.seC(H.b([],[A.c0]))
this.seD(H.b([],[A.c2]))
this.seE(H.b([],[A.c3]))
this.seF(H.b([],[A.c4]))
this.seG(H.b([],[A.c5]))
this.seH(H.b([],[A.c6]))
if(a6.k2){t=a6.z
if(t>0){this.dM=H.h(this.y.k(0,"dirLightCount"),"$iB")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iz")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iz")
s=this.c5;(s&&C.a).h(s,new A.c0(h,g,f))}}t=a6.Q
if(t>0){this.dN=H.h(this.y.k(0,"pntLightCount"),"$iB")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iz")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iz")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iz")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iK")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iK")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iK")
s=this.c6;(s&&C.a).h(s,new A.c2(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.dO=H.h(this.y.k(0,"spotLightCount"),"$iB")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iz")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iz")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iz")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iz")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iK")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iK")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iK")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iK")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iK")
s=this.c7;(s&&C.a).h(s,new A.c3(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.dP=H.h(this.y.k(0,"txtDirLightCount"),"$iB")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iz")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iz")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iz")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iz")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iz")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iB")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$ia8")
s=this.c8;(s&&C.a).h(s,new A.c4(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.dQ=H.h(this.y.k(0,"txtPntLightCount"),"$iB")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iz")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iz")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$ic1")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iz")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iB")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iK")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iK")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iK")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$ia3")
s=this.c9;(s&&C.a).h(s,new A.c5(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.dR=H.h(this.y.k(0,"txtSpotLightCount"),"$iB")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iz")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iz")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iz")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iz")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iz")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iB")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iz")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iK")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iK")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$iK")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a3,"$iK")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a4,"$iK")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a5,"$ia8")
s=this.ca;(s&&C.a).h(s,new A.c6(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ad:function(a,b,c){if(c==null||!c.d)C.b.G(b.a,b.d,1)
else{a.em(c)
C.b.G(b.a,b.d,0)}},
a6:function(a,b,c){C.b.G(b.a,b.d,1)},
seQ:function(a){this.r1=H.d(a,"$ia",[A.ad],"$aa")},
seC:function(a){this.c5=H.d(a,"$ia",[A.c0],"$aa")},
seD:function(a){this.c6=H.d(a,"$ia",[A.c2],"$aa")},
seE:function(a){this.c7=H.d(a,"$ia",[A.c3],"$aa")},
seF:function(a){this.c8=H.d(a,"$ia",[A.c4],"$aa")},
seG:function(a){this.c9=H.d(a,"$ia",[A.c5],"$aa")},
seH:function(a){this.ca=H.d(a,"$ia",[A.c6],"$aa")}}
A.er.prototype={
hV:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.al+"];\n"
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
i1:function(a){var u
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
hW:function(a){var u
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
i9:function(a){var u,t
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
ia:function(a){var u,t
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
i3:function(a){var u
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
ig:function(a){var u
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
ao:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.k(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.cv(c,1))+"Txt;\n"
a.a=u
if(b===C.d)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
hZ:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.ao(a,u,"emission")
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
hU:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.ao(a,u,"ambient")
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
hX:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.ao(a,u,"diffuse")
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
i_:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.ao(a,u,"invDiffuse")
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
i7:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.ao(a,u,"specular")
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
i2:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.c:break
case C.h:break
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
case C.h:u+="   return normalize(normalVec);\n"
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
i5:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.ao(a,u,"reflect")
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
i6:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.ao(a,u,"refract")
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
hY:function(a){var u,t
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
i4:function(a){var u,t
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
i8:function(a){var u,t
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
ib:function(a){var u,t,s
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
ic:function(a){var u,t,s
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
ie:function(a){var u,t,s
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
i0:function(a){var u
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
i:function(a){return this.ae}}
A.c0.prototype={}
A.c4.prototype={}
A.c2.prototype={}
A.c5.prototype={}
A.c3.prototype={}
A.c6.prototype={}
A.bU.prototype={
cB:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dT:function(a,b){var u,t,s
this.c=a
this.d=b
this.e=this.cS(a,35633)
this.f=this.cS(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dc(u,t,this.e)
C.b.dc(u,this.r,this.f)
C.b.iQ(u,this.r)
if(!H.iI(C.b.bv(u,this.r,35714))){s=C.b.eg(u,this.r)
C.b.iA(u,this.r)
H.p(P.o("Failed to link shader: "+H.f(s)))}this.hw()
this.hy()},
X:function(a){C.b.cp(a.a,this.r)
this.x.iI()},
cS:function(a,b){var u,t,s
u=this.a
t=C.b.iy(u,b)
C.b.eo(u,t,a)
C.b.it(u,t)
if(!H.iI(C.b.ei(u,t,35713))){s=C.b.eh(u,t)
C.b.iB(u,t)
throw H.i(P.o("Error compiling shader '"+H.f(t)+"': "+H.f(s)))}return t},
hw:function(){var u,t,s,r,q,p
u=H.b([],[A.cp])
t=this.a
s=H.X(C.b.bv(t,this.r,35721))
if(typeof s!=="number")return H.y(s)
r=0
for(;r<s;++r){q=C.b.ec(t,this.r,r)
p=C.b.ee(t,this.r,q.name)
C.a.h(u,new A.cp(t,q.name,p))}this.x=new A.dM(u)},
hy:function(){var u,t,s,r,q,p
u=H.b([],[A.dg])
t=this.a
s=H.X(C.b.bv(t,this.r,35718))
if(typeof s!=="number")return H.y(s)
r=0
for(;r<s;++r){q=C.b.ed(t,this.r,r)
p=C.b.ej(t,this.r,q.name)
C.a.h(u,this.iz(q.type,q.size,q.name,p))}this.y=new A.ff(u)},
ay:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.B(u,t,b,c)
else return A.hB(u,t,b,a,c)},
eY:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a8(u,t,b,c)
else return A.hB(u,t,b,a,c)},
eZ:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a3(u,t,b,c)
else return A.hB(u,t,b,a,c)},
b4:function(a,b){return new P.dw(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
iz:function(a,b,c,d){switch(a){case 5120:return this.ay(b,c,d)
case 5121:return this.ay(b,c,d)
case 5122:return this.ay(b,c,d)
case 5123:return this.ay(b,c,d)
case 5124:return this.ay(b,c,d)
case 5125:return this.ay(b,c,d)
case 5126:return new A.K(this.a,this.r,c,d)
case 35664:return new A.fa(this.a,this.r,c,d)
case 35665:return new A.z(this.a,this.r,c,d)
case 35666:return new A.fd(this.a,this.r,c,d)
case 35667:return new A.fb(this.a,this.r,c,d)
case 35668:return new A.fc(this.a,this.r,c,d)
case 35669:return new A.fe(this.a,this.r,c,d)
case 35674:return new A.fg(this.a,this.r,c,d)
case 35675:return new A.c1(this.a,this.r,c,d)
case 35676:return new A.ad(this.a,this.r,c,d)
case 35678:return this.eY(b,c,d)
case 35680:return this.eZ(b,c,d)
case 35670:throw H.i(this.b4("BOOL",c))
case 35671:throw H.i(this.b4("BOOL_VEC2",c))
case 35672:throw H.i(this.b4("BOOL_VEC3",c))
case 35673:throw H.i(this.b4("BOOL_VEC4",c))
default:throw H.i(P.o("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.bf.prototype={
i:function(a){return this.b}}
A.d4.prototype={}
A.dg.prototype={}
A.ff.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
k:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.H()},
iK:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r)s+=u[r].i(0)+a
return s},
H:function(){return this.iK("\n")}}
A.B.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.fb.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.fc.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.fe.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.f9.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)},
shS:function(a){this.e=H.d(a,"$ia",[P.u],"$aa")}}
A.K.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.fa.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.z.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.fd.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.fg.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.c1.prototype={
ac:function(a){var u=new Float32Array(H.cg(H.d(a,"$ia",[P.t],"$aa")))
C.b.e8(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.ad.prototype={
ac:function(a){var u=new Float32Array(H.cg(H.d(a,"$ia",[P.t],"$aa")))
C.b.e9(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.a8.prototype={
em:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.G(t,s,0)
else C.b.G(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.a3.prototype={
en:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.G(t,s,0)
else C.b.G(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.h3.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cg(u.b,b).cg(u.d.cg(u.c,b),c)
u=new V.a7(t.a,t.b,t.c)
if(!J.Y(a.f,u)){a.f=u
u=a.a
if(u!=null)u.Z()}a.sji(t.t(0,Math.sqrt(t.A(t))))
u=1-b
s=1-c
s=new V.aQ(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.Y(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.Z()}},
$S:32}
F.T.prototype={
eP:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.dq()
if(t!=null)q=q.C(0,t)
if(s!=null)q=q.C(0,s)
if(r!=null)q=q.C(0,r)
if(q.dU())return
return q.t(0,Math.sqrt(q.A(q)))},
eU:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.F(0,t)
u=new V.I(u.a,u.b,u.c)
q=u.t(0,Math.sqrt(u.A(u)))
u=r.F(0,t)
u=new V.I(u.a,u.b,u.c)
u=q.aQ(u.t(0,Math.sqrt(u.A(u))))
return u.t(0,Math.sqrt(u.A(u)))},
c0:function(){if(this.d!=null)return!0
var u=this.eP()
if(u==null){u=this.eU()
if(u==null)return!1}this.d=u
this.a.a.Z()
return!0},
eO:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.dq()
if(t!=null)q=q.C(0,t)
if(s!=null)q=q.C(0,s)
if(r!=null)q=q.C(0,r)
if(q.dU())return
return q.t(0,Math.sqrt(q.A(q)))},
eT:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.E().a){u=m.F(0,p)
u=new V.I(u.a,u.b,u.c)
h=u.t(0,Math.sqrt(u.A(u)))
if(j.a-k.a<0)h=h.L(0)}else{g=(u-l.b)/i
u=m.F(0,p)
u=new V.a7(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).F(0,s)
u=new V.I(u.a,u.b,u.c)
h=u.t(0,Math.sqrt(u.A(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.L(0)}u=this.d
if(u!=null){f=u.t(0,Math.sqrt(u.A(u)))
u=f.aQ(h)
u=u.t(0,Math.sqrt(u.A(u))).aQ(f)
h=u.t(0,Math.sqrt(u.A(u)))}return h},
bZ:function(){if(this.e!=null)return!0
var u=this.eO()
if(u==null){u=this.eT()
if(u==null)return!1}this.e=u
this.a.a.Z()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.j.aa(J.ai(u.e),0)+", "+C.j.aa(J.ai(this.b.e),0)+", "+C.j.aa(J.ai(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
H:function(){return this.u("")}}
F.aL.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.j.aa(J.ai(u.e),0)+", "+C.j.aa(J.ai(this.b.e),0)},
H:function(){return this.u("")}}
F.b4.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.aa(J.ai(u.e),0)},
H:function(){return this.u("")}}
F.d2.prototype={
gl:function(){var u=this.e
if(u==null){u=D.C()
this.e=u}return u},
iV:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.V()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.w)(u),++r){q=u[r]
this.a.h(0,q.ix())}this.a.V()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.w)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.V()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.b4()
if(m.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.B(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.w)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.V()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.C()
o+=t
n=n.c
if(o>=n.length)return H.k(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.ju(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.w)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.V()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.C()
o+=t
n=n.c
if(o>=n.length)return H.k(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.V()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.bH(k,j,h)}u=this.e
if(u!=null)u.av()},
as:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.as()||!1
if(!this.a.as())t=!1
u=this.e
if(u!=null)u.av()
return t},
dg:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.at()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.aU().a)!==0)++r
if((s&$.aT().a)!==0)++r
if((s&$.aV().a)!==0)++r
if((s&$.aW().a)!==0)++r
if((s&$.cl().a)!==0)++r
if((s&$.cm().a)!==0)++r
if((s&$.bx().a)!==0)++r
if((s&$.aS().a)!==0)++r
q=a1.gcu(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.t
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.cs])
for(m=0,l=0;l<r;++l){k=a1.ik(l)
j=k.gcu(k)
C.a.a_(n,l,new Z.cs(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.k(t,i)
h=t[i].iR(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.a_(o,g,h[f]);++g}}m+=j}H.d(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.aj(t,34962,e)
C.b.df(t,34962,new Float32Array(H.cg(o)),35044)
C.b.aj(t,34962,null)
d=new Z.bA(new Z.dr(34962,e),n,a1)
d.sfc(H.b([],[Z.b0]))
if(this.b.b.length!==0){s=P.u
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.V()
C.a.h(c,b.e)}a=Z.hC(t,34963,H.d(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b0(0,c.length,a))}if(this.c.b.length!==0){s=P.u
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.V()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.k(b,l)
b=b[l].b
b.a.a.V()
C.a.h(c,b.e)}a=Z.hC(t,34963,H.d(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b0(1,c.length,a))}if(this.d.b.length!==0){s=P.u
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.V()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.k(b,l)
b=b[l].b
b.a.a.V()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.k(b,l)
b=b[l].c
b.a.a.V()
C.a.h(c,b.e)}a=Z.hC(t,34963,H.d(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b0(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.v])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.u("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.u("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.u("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.u("   "))}return C.a.w(u,"\n")},
aF:function(a){var u=this.e
if(u!=null)u.B(a)},
Z:function(){return this.aF(null)},
$ikK:1}
F.eM.prototype={
ih:function(a){var u,t,s,r,q,p
H.d(a,"$ia",[F.ah],"$aa")
u=H.b([],[F.T])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.bH(t,q,p))}return u},
ii:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.d(c,"$ia",[F.ah],"$aa")
u=H.b([],[F.T])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.k(c,r)
l=c[r];++r
if(r>=m)return H.k(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.k(c,j)
i=c[j]
if(s<0||s>=m)return H.k(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.bH(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.bH(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.bH(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.bH(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
as:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.w)(u),++r)if(!u[r].c0())s=!1
return s},
c_:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.w)(u),++r)if(!u[r].bZ())s=!1
return s},
i:function(a){return this.H()},
u:function(a){var u,t,s,r
u=H.b([],[P.v])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
H:function(){return this.u("")},
sf3:function(a){this.b=H.d(a,"$ia",[F.T],"$aa")}}
F.eN.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.H()},
u:function(a){var u,t,s,r
u=H.b([],[P.v])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.k(r,s)
C.a.h(u,r[s].u(a+(""+s+". ")))}return C.a.w(u,"\n")},
H:function(){return this.u("")},
sfd:function(a){this.b=H.d(a,"$ia",[F.aL],"$aa")}}
F.eO.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.H()},
u:function(a){var u,t,s,r
u=H.b([],[P.v])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
H:function(){return this.u("")},
sbP:function(a){this.b=H.d(a,"$ia",[F.b4],"$aa")}}
F.ah.prototype={
c2:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.fm(this.cx,s,p,u,t,r,q,a,o)},
ix:function(){return this.c2(null)},
sji:function(a){var u
if(!J.Y(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
iR:function(a){var u,t
if(a.q(0,$.at())){u=this.f
t=[P.t]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aU())){u=this.r
t=[P.t]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aT())){u=this.x
t=[P.t]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aV())){u=this.y
t=[P.t]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.q(0,$.aW())){u=this.z
t=[P.t]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cl())){u=this.Q
t=[P.t]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cm())){u=this.Q
t=[P.t]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bx()))return H.b([this.ch],[P.t])
else if(a.q(0,$.aS())){u=this.cx
t=[P.t]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.t])},
c0:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dq()
this.d.a8(0,new F.fu(u))
u=u.a
this.r=u.t(0,Math.sqrt(u.A(u)))
u=this.a
if(u!=null){u.Z()
u=this.a.e
if(u!=null)u.av()}return!0},
bZ:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dq()
this.d.a8(0,new F.ft(u))
u=u.a
this.x=u.t(0,Math.sqrt(u.A(u)))
u=this.a
if(u!=null){u.Z()
u=this.a.e
if(u!=null)u.av()}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){var u,t,s
u=H.b([],[P.v])
C.a.h(u,C.j.aa(J.ai(this.e),0))
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
C.a.h(u,V.J(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.w(u,", ")
return a+"{"+s+"}"},
H:function(){return this.u("")}}
F.fu.prototype={
$1:function(a){var u,t
H.h(a,"$iT")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:5}
F.ft.prototype={
$1:function(a){var u,t
H.h(a,"$iT")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:5}
F.fn.prototype={
V:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.i(P.o("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.Z()
return!0},
ij:function(a,b,c,d,e,f,g,h,i){var u=F.fm(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
b6:function(a,b,c,d,e,f){return this.ij(a,null,b,c,null,d,e,f,0)},
gm:function(a){return this.c.length},
as:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)u[s].c0()
return!0},
c_:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)u[s].bZ()
return!0},
ip:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Y(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
i:function(a){return this.H()},
u:function(a){var u,t,s,r
this.V()
u=H.b([],[P.v])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
H:function(){return this.u("")},
shT:function(a){this.c=H.d(a,"$ia",[F.ah],"$aa")}}
F.fo.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
a8:function(a,b){H.l(b,{func:1,ret:-1,args:[F.T]})
C.a.a8(this.b,b)
C.a.a8(this.c,new F.fp(this,b))
C.a.a8(this.d,new F.fq(this,b))},
i:function(a){return this.H()},
u:function(a){var u,t,s,r
u=H.b([],[P.v])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].u(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].u(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
H:function(){return this.u("")},
sf4:function(a){this.b=H.d(a,"$ia",[F.T],"$aa")},
sf5:function(a){this.c=H.d(a,"$ia",[F.T],"$aa")},
sf6:function(a){this.d=H.d(a,"$ia",[F.T],"$aa")}}
F.fp.prototype={
$1:function(a){H.h(a,"$iT")
if(!J.Y(a.a,this.a))this.b.$1(a)},
$S:5}
F.fq.prototype={
$1:function(a){var u
H.h(a,"$iT")
u=this.a
if(!J.Y(a.a,u)&&!J.Y(a.b,u))this.b.$1(a)},
$S:5}
F.fr.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.H()},
u:function(a){var u,t,s,r
u=H.b([],[P.v])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].u(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
H:function(){return this.u("")},
sfe:function(a){this.b=H.d(a,"$ia",[F.aL],"$aa")},
sff:function(a){this.c=H.d(a,"$ia",[F.aL],"$aa")}}
F.fs.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.H()},
u:function(a){var u,t,s,r
u=H.b([],[P.v])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
H:function(){return this.u("")},
sbP:function(a){this.b=H.d(a,"$ia",[F.b4],"$aa")}}
O.cP.prototype={
gl:function(){var u=this.dy
if(u==null){u=D.C()
this.dy=u}return u},
O:function(a){var u
H.h(a,"$ir")
u=this.dy
if(u!=null)u.B(a)},
aK:function(){return this.O(null)},
d2:function(a){H.h(a,"$ir")
this.a=null
this.O(a)},
hp:function(){return this.d2(null)},
ft:function(a,b){var u=V.ab
u=new D.b1(a,H.d(b,"$ij",[u],"$aj"),this,[u])
u.b=!0
this.O(u)},
fv:function(a,b){var u=V.ab
u=new D.b2(a,H.d(b,"$ij",[u],"$aj"),this,[u])
u.b=!0
this.O(u)},
cP:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.i.Y(u.e.length+3,4)*4
s=C.i.Y(u.f.length+3,4)*4
r=C.i.Y(u.r.length+3,4)*4
q=C.i.Y(u.x.length+3,4)*4
p=C.i.Y(u.y.length+3,4)*4
o=C.i.Y(u.z.length+3,4)*4
n=C.i.Y(this.e.a.length+3,4)*4
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
a2=u===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d||h===C.d||g===C.d||f===C.d
a3=u===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e||g===C.e||f===C.e
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.at()
if(a0){b=$.aU()
a7=new Z.aG(a7.a|b.a)}if(a1){b=$.aT()
a7=new Z.aG(a7.a|b.a)}if(a2){b=$.aV()
a7=new Z.aG(a7.a|b.a)}if(a3){b=$.aW()
a7=new Z.aG(a7.a|b.a)}if(a5){b=$.aS()
a7=new Z.aG(a7.a|b.a)}return new A.er(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
P:function(a,b){H.d(a,"$ia",[T.bY],"$aa")
if(b!=null)if(!C.a.aD(a,b)){b.a=a.length
C.a.h(a,b)}},
ab:function(a){var u
for(u=this.dx.a,u=new J.a9(u,u.length,0,[H.q(u,0)]);u.v();)u.d.ab(a)},
e1:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.cP()
t=H.h(a2.fr.j(0,u.ae),"$icQ")
if(t==null){t=A.jz(u,a2.a)
a2.da(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.b8
u=a3.e
if(!(u instanceof Z.bA)){a3.e=null
u=null}if(u==null||!u.d.q(0,r)){u=s.r1
if(u)a3.d.as()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.c_()
p.a.c_()
p=p.e
if(p!=null)p.av()}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.ip()
o=o.e
if(o!=null)o.av()}m=a3.d.dg(new Z.ds(a2.a),r)
m.at($.at()).e=this.a.Q.c
if(u)m.at($.aU()).e=this.a.cx.c
if(q)m.at($.aT()).e=this.a.ch.c
if(s.rx)m.at($.aV()).e=this.a.cy.c
if(p)m.at($.aW()).e=this.a.db.c
if(s.x1)m.at($.aS()).e=this.a.dx.c
a3.e=m}u=T.bY
l=H.b([],[u])
this.a.X(a2)
if(s.fx){q=this.a
p=a2.dx.gU()
q=q.dy
q.toString
q.ac(p.a5(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db.gU().n(0,a2.dx.gU())
a2.cx=p}q=q.fr
q.toString
q.ac(p.a5(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gj9().n(0,a2.dx.gU())
a2.ch=p}q=q.fy
q.toString
q.ac(p.a5(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ac(C.o.a5(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ac(C.o.a5(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ac(C.o.a5(p,!0))}if(s.al>0){k=this.e.a.length
q=this.a.k4
C.b.G(q.a,q.d,k)
for(q=[P.t],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.k(o,j)
o=o[j]
p.toString
H.h(o,"$iab")
p=p.r1
if(j>=p.length)return H.k(p,j)
p=p[j]
i=new Float32Array(H.cg(H.d(o.a5(0,!0),"$ia",q,"$aa")))
C.b.e9(p.a,p.d,!1,i)}}switch(s.a){case C.c:break
case C.h:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.p(q.a,q.d,o,n,p)
break
case C.d:this.P(l,this.f.d)
q=this.a
p=this.f.d
q.ad(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.p(p.a,p.d,o,n,q)
break
case C.e:this.P(l,this.f.e)
q=this.a
p=this.f.e
q.a6(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.p(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.h:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.p(q.a,q.d,o,n,p)
break
case C.d:this.P(l,this.r.d)
q=this.a
p=this.r.d
q.ad(q.y1,q.al,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.p(p.a,p.d,o,n,q)
break
case C.e:this.P(l,this.r.e)
q=this.a
p=this.r.e
q.a6(q.y2,q.al,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.p(p.a,p.d,o,n,q)
break}switch(s.c){case C.c:break
case C.h:q=this.a
p=this.x.f
q=q.ae
q.toString
o=p.a
n=p.b
p=p.c
C.b.p(q.a,q.d,o,n,p)
break
case C.d:this.P(l,this.x.d)
q=this.a
p=this.x.d
q.ad(q.b8,q.b9,p)
p=this.a
q=this.x.f
p=p.ae
p.toString
o=q.a
n=q.b
q=q.c
C.b.p(p.a,p.d,o,n,q)
break
case C.e:this.P(l,this.x.e)
q=this.a
p=this.x.e
q.a6(q.dv,q.b9,p)
p=this.a
q=this.x.f
p=p.ae
p.toString
o=q.a
n=q.b
q=q.c
C.b.p(p.a,p.d,o,n,q)
break}switch(s.d){case C.c:break
case C.h:q=this.a
p=this.y.f
q=q.ba
q.toString
o=p.a
n=p.b
p=p.c
C.b.p(q.a,q.d,o,n,p)
break
case C.d:this.P(l,this.y.d)
q=this.a
p=this.y.d
q.ad(q.dw,q.bb,p)
p=this.a
q=this.y.f
p=p.ba
p.toString
o=q.a
n=q.b
q=q.c
C.b.p(p.a,p.d,o,n,q)
break
case C.e:this.P(l,this.y.e)
q=this.a
p=this.y.e
q.a6(q.dz,q.bb,p)
p=this.a
q=this.y.f
p=p.ba
p.toString
o=q.a
n=q.b
q=q.c
C.b.p(p.a,p.d,o,n,q)
break}switch(s.e){case C.c:break
case C.h:q=this.a
p=this.z.f
q=q.bc
q.toString
o=p.a
n=p.b
p=p.c
C.b.p(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.be
C.b.E(p.a,p.d,n)
break
case C.d:this.P(l,this.z.d)
q=this.a
p=this.z.d
q.ad(q.dA,q.bd,p)
p=this.a
q=this.z.f
p=p.bc
p.toString
o=q.a
n=q.b
q=q.c
C.b.p(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.be
C.b.E(q.a,q.d,n)
break
case C.e:this.P(l,this.z.e)
q=this.a
p=this.z.e
q.a6(q.dB,q.bd,p)
p=this.a
q=this.z.f
p=p.bc
p.toString
o=q.a
n=q.b
q=q.c
C.b.p(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.be
C.b.E(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.dM
C.b.G(q.a,q.d,k)
h=a2.db.gU()
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.w)(q),++f){e=q[f]
o=this.a.c5
if(g>=o.length)return H.k(o,g)
d=o[g]
o=h.e7(e.gb7(e))
n=o.a
c=o.b
b=o.c
b=o.t(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.p(c.a,c.d,n,o,b)
b=e.gak(e)
o=d.c
C.b.p(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.dN
C.b.G(q.a,q.d,k)
h=a2.db.gU()
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.w)(q),++f){e=q[f]
o=this.a.c6
if(g>=o.length)return H.k(o,g)
d=o[g]
o=e.gaT(e)
n=d.b
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=h.aY(e.gaT(e))
n=d.c
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gak(e)
n=d.d
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gbV()
n=d.e
C.b.E(n.a,n.d,o)
o=e.gbW()
n=d.f
C.b.E(n.a,n.d,o)
o=e.gbX()
n=d.r
C.b.E(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.dO
C.b.G(q.a,q.d,k)
h=a2.db.gU()
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.w)(q),++f){e=q[f]
o=this.a.c7
if(g>=o.length)return H.k(o,g)
d=o[g]
o=e.gaT(e)
n=d.b
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gb7(e).jt()
n=d.c
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=h.aY(e.gaT(e))
n=d.d
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gak(e)
n=d.e
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gjs()
n=d.f
C.b.E(n.a,n.d,o)
o=e.gjr()
n=d.r
C.b.E(n.a,n.d,o)
o=e.gbV()
n=d.x
C.b.E(n.a,n.d,o)
o=e.gbW()
n=d.y
C.b.E(n.a,n.d,o)
o=e.gbX()
n=d.z
C.b.E(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.dP
C.b.G(q.a,q.d,k)
h=a2.db.gU()
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.w)(q),++f){e=q[f]
n=this.a.c8
if(g>=n.length)return H.k(n,g)
d=n[g]
n=e.gaW()
H.d(l,"$ia",o,"$aa")
if(!C.a.aD(l,n)){n.a=l.length
C.a.h(l,n)}n=e.gb7(e)
c=d.d
C.b.p(c.a,c.d,n.a,n.b,n.c)
n=e.gbs()
c=d.b
C.b.p(c.a,c.d,n.a,n.b,n.c)
n=e.gbq(e)
c=d.c
C.b.p(c.a,c.d,n.a,n.b,n.c)
n=h.e7(e.gb7(e))
c=n.a
b=n.b
a=n.c
a=n.t(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.p(b.a,b.d,c,n,a)
a=e.gak(e)
n=d.f
C.b.p(n.a,n.d,a.a,a.b,a.c)
a=e.gaW()
n=a.gdV(a)
if(!n){n=d.x
C.b.G(n.a,n.d,1)}else{n=d.r
c=a.d
b=n.a
n=n.d
if(!c)C.b.G(b,n,0)
else C.b.G(b,n,a.a)
n=d.x
C.b.G(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.dQ
C.b.G(q.a,q.d,k)
h=a2.db.gU()
for(q=this.dx.y,p=q.length,o=[P.t],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.w)(q),++f){e=q[f]
c=this.a.c9
if(g>=c.length)return H.k(c,g)
d=c[g]
c=e.gaW()
H.d(l,"$ia",n,"$aa")
if(!C.a.aD(l,c)){c.a=l.length
C.a.h(l,c)}a0=h.n(0,e.gU())
c=e.gU()
b=$.bS
if(b==null){b=new V.a7(0,0,0)
$.bS=b}b=c.aY(b)
c=d.b
C.b.p(c.a,c.d,b.a,b.b,b.c)
c=$.bS
if(c==null){c=new V.a7(0,0,0)
$.bS=c}c=a0.aY(c)
b=d.c
C.b.p(b.a,b.d,c.a,c.b,c.c)
c=a0.cd()
b=d.d
i=new Float32Array(H.cg(H.d(new V.cR(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).a5(0,!0),"$ia",o,"$aa")))
C.b.e8(b.a,b.d,!1,i)
b=e.gak(e)
c=d.e
C.b.p(c.a,c.d,b.a,b.b,b.c)
b=e.gaW()
c=b.gdV(b)
if(!c){c=d.r
C.b.G(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.G(a1,c,0)
else C.b.G(a1,c,b.a)
c=d.r
C.b.G(c.a,c.d,0)}c=e.gbV()
b=d.x
C.b.E(b.a,b.d,c)
c=e.gbW()
b=d.y
C.b.E(b.a,b.d,c)
c=e.gbX()
b=d.z
C.b.E(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.dR
C.b.G(q.a,q.d,k)
h=a2.db.gU()
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.w)(q),++f){e=q[f]
o=this.a.ca
if(g>=o.length)return H.k(o,g)
d=o[g]
o=e.gaW()
H.d(l,"$ia",u,"$aa")
if(!C.a.aD(l,o)){o.a=l.length
C.a.h(l,o)}o=e.gaT(e)
n=d.b
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gb7(e)
n=d.c
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gbs()
n=d.d
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gbq(e)
n=d.e
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=h.aY(e.gaT(e))
n=d.f
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gaW()
n=o.gdV(o)
if(!n){o=d.x
C.b.G(o.a,o.d,1)}else{n=d.r
c=o.d
b=n.a
n=n.d
if(!c)C.b.G(b,n,0)
else C.b.G(b,n,o.a)
o=d.x
C.b.G(o.a,o.d,0)}o=e.gak(e)
n=d.y
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gju()
n=d.z
C.b.E(n.a,n.d,o)
o=e.gjv()
n=d.Q
C.b.E(n.a,n.d,o)
o=e.gbV()
n=d.ch
C.b.E(n.a,n.d,o)
o=e.gbW()
n=d.cx
C.b.E(n.a,n.d,o)
o=e.gbX()
n=d.cy
C.b.E(n.a,n.d,o);++g}}}switch(s.f){case C.c:break
case C.h:break
case C.d:this.P(l,this.Q.d)
u=this.a
q=this.Q.d
u.ad(u.dC,u.bf,q)
break
case C.e:this.P(l,this.Q.e)
u=this.a
q=this.Q.e
u.a6(u.dD,u.bf,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db.gU().cd()
a2.Q=q}u=u.id
u.toString
u.ac(q.a5(0,!0))}if(s.dy){this.P(l,this.ch)
u=this.a
q=this.ch
u.a6(u.dE,u.dF,q)
switch(s.r){case C.c:break
case C.h:u=this.a
q=this.cx.f
u=u.bg
u.toString
p=q.a
o=q.b
q=q.c
C.b.p(u.a,u.d,p,o,q)
break
case C.d:this.P(l,this.cx.d)
u=this.a
q=this.cx.d
u.ad(u.dG,u.bh,q)
q=this.a
u=this.cx.f
q=q.bg
q.toString
p=u.a
o=u.b
u=u.c
C.b.p(q.a,q.d,p,o,u)
break
case C.e:this.P(l,this.cx.e)
u=this.a
q=this.cx.e
u.a6(u.dH,u.bh,q)
q=this.a
u=this.cx.f
q=q.bg
q.toString
p=u.a
o=u.b
u=u.c
C.b.p(q.a,q.d,p,o,u)
break}switch(s.x){case C.c:break
case C.h:u=this.a
q=this.cy.f
u=u.bj
u.toString
p=q.a
o=q.b
q=q.c
C.b.p(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bi
C.b.E(q.a,q.d,o)
break
case C.d:this.P(l,this.cy.d)
u=this.a
q=this.cy.d
u.ad(u.dI,u.bk,q)
q=this.a
u=this.cy.f
q=q.bj
q.toString
p=u.a
o=u.b
u=u.c
C.b.p(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bi
C.b.E(u.a,u.d,o)
break
case C.e:this.P(l,this.cy.e)
u=this.a
q=this.cy.e
u.a6(u.dJ,u.bk,q)
q=this.a
u=this.cy.f
q=q.bj
q.toString
p=u.a
o=u.b
u=u.c
C.b.p(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bi
C.b.E(u.a,u.d,o)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.h:u=this.a
p=this.db.f
u=u.bl
C.b.E(u.a,u.d,p)
break
case C.d:this.P(l,this.db.d)
u=this.a
p=this.db.d
u.ad(u.dK,u.bm,p)
p=this.a
u=this.db.f
p=p.bl
C.b.E(p.a,p.d,u)
break
case C.e:this.P(l,this.db.e)
u=this.a
p=this.db.e
u.a6(u.dL,u.bm,p)
p=this.a
u=this.db.f
p=p.bl
C.b.E(p.a,p.d,u)
break}u=a2.a
C.b.c4(u,3042)
C.b.io(u,770,771)}for(u=a2.a,j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d){p.c=!0
C.b.b5(u,33984+p.a)
C.b.a1(u,3553,p.b)}}p=a3.e
p.X(a2)
p.a4(a2)
p.aZ(a2)
if(q)C.b.iF(u,3042)
for(j=0;j<l.length;++j){q=l[j]
if(q.c){q.c=!1
C.b.b5(u,33984+q.a)
C.b.a1(u,3553,null)}}q=this.a
q.toString
C.b.cp(u,null)
q.x.dl()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cP().ae},
seR:function(a){this.e=H.d(a,"$iM",[V.ab],"$aM")}}
O.ep.prototype={}
O.bN.prototype={
O:function(a){this.a.O(H.h(a,"$ir"))},
aK:function(){return this.O(null)},
aq:function(){},
hu:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gl().R(0,this.gax())
t=this.d
this.d=a
if(a!=null)a.gl().h(0,this.gax())
u=new D.D(this.b+".texture2D",t,this.d,this,[T.d8])
u.b=!0
this.a.O(u)}},
hv:function(a){}}
O.eq.prototype={}
O.aA.prototype={
d5:function(a){var u,t
if(!J.Y(this.f,a)){u=this.f
this.f=a
t=new D.D(this.b+".color",u,a,this,[V.a0])
t.b=!0
this.a.O(t)}},
aq:function(){this.eu()
this.d5(new V.a0(1,1,1))},
sak:function(a,b){var u
if(this.c===C.c){this.c=C.h
this.aq()
u=this.a
u.a=null
u.O(null)}this.d5(b)}}
O.es.prototype={
hs:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.E().a)){this.ch=a
u=new D.D(this.b+".refraction",u,a,this,[P.t])
u.b=!0
this.a.O(u)}},
aq:function(){this.cA()
this.hs(1)}}
O.et.prototype={
ht:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.E().a)){this.ch=a
u=new D.D(this.b+".shininess",u,a,this,[P.t])
u.b=!0
this.a.O(u)}},
aq:function(){this.cA()
this.ht(100)}}
O.d3.prototype={
gl:function(){var u=this.e
if(u==null){u=D.C()
this.e=u}return u},
O:function(a){var u
H.h(a,"$ir")
u=this.e
if(u!=null)u.B(a)},
aK:function(){return this.O(null)},
e1:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.h(a.fr.j(0,"Skybox"),"$id4")
if(u==null){t=a.a
u=new A.d4(t,"Skybox")
u.cB(t,"Skybox")
u.dT($.jR,$.jQ)
u.z=u.x.j(0,"posAttr")
u.Q=H.c(u.y.j(0,"fov"),"$iK")
u.ch=H.c(u.y.j(0,"ratio"),"$iK")
u.cx=H.c(u.y.j(0,"boxClr"),"$iz")
u.cy=H.c(u.y.j(0,"boxTxt"),"$ia3")
u.db=H.c(u.y.j(0,"viewMat"),"$iad")
a.da(u)}this.a=u}if(b.e==null){t=b.d.dg(new Z.ds(a.a),$.at())
t.at($.at()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
C.b.b5(s,33985)
C.b.a1(s,34067,t.b)}}t=a.d
s=a.c
r=this.a
r.X(a)
q=this.b
p=r.Q
C.b.E(p.a,p.d,q)
q=r.ch
C.b.E(q.a,q.d,t/s)
s=this.c
r.cy.en(s)
s=this.d
t=r.cx
C.b.p(t.a,t.d,s.a,s.b,s.c)
s=a.db.gU().cd()
r=r.db
r.toString
r.ac(s.a5(0,!0))
t=b.e
if(t instanceof Z.bA){t.X(a)
t.a4(a)
t.aZ(a)}else b.e=null
t=this.a
t.toString
s=a.a
C.b.cp(s,null)
t.x.dl()
t=this.c
if(t!=null)if(t.c){t.c=!1
C.b.b5(s,33984+t.a)
C.b.a1(s,34067,null)}}}
O.b6.prototype={}
T.bY.prototype={}
T.d8.prototype={}
T.eZ.prototype={
gl:function(){var u=this.y
if(u==null){u=D.C()
this.y=u}return u}}
T.d9.prototype={
gl:function(){var u=this.e
if(u==null){u=D.C()
this.e=u}return u}}
T.f_.prototype={
iT:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.a1(u,3553,t)
C.b.am(u,3553,10242,33071)
C.b.am(u,3553,10243,33071)
C.b.am(u,3553,10241,9729)
C.b.am(u,3553,10240,9729)
C.b.a1(u,3553,null);++this.d
s=W.i3(null,a,null)
r=new T.eZ()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.e
W.V(s,"load",H.l(new T.f1(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
iS:function(a){return this.iT(a,!1,!1,!1,!1)},
az:function(a,b,c,d,e,f){var u,t
u=W.i3(null,c,null);++this.d
t=W.e
W.V(u,"load",H.l(new T.f0(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
d4:function(a,b,c){var u,t,s,r
b=V.hN(b,2)
u=V.hN(a.width,2)
t=V.hN(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.hp(null,null)
s.width=u
s.height=t
r=H.h(C.m.ef(s,"2d"),"$ibe")
r.imageSmoothingEnabled=!1;(r&&C.r).iH(r,a,0,0,s.width,s.height)
return P.kh(C.r.fb(r,0,0,s.width,s.height))}}}
T.f1.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.d4(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.a1(t,3553,this.e)
C.b.e0(t,37440,this.f?1:0)
C.b.e4(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.eb(t,3553)
C.b.a1(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.dt()}++s.e},
$S:11}
T.f0.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.d4(this.b,u.c,this.c)
s=u.a
C.b.a1(s,34067,this.d)
C.b.e0(s,37440,this.e?1:0)
C.b.e4(s,this.f,0,6408,6408,5121,t)
C.b.a1(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.dt()}++u.e},
$S:11}
V.dJ.prototype={
aE:function(a){return!0},
i:function(a){return"all"},
$iaM:1}
V.aM.prototype={}
V.cO.prototype={
aE:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)if(u[s].aE(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sap:function(a){this.a=H.d(a,"$ia",[V.aM],"$aa")},
$iaM:1}
V.aO.prototype={
aE:function(a){return!this.es(a)},
i:function(a){return"!["+this.cz(0)+"]"}}
V.eL.prototype={
ey:function(a){var u,t
if(a.a.length<=0)throw H.i(P.o("May not create a SetMatcher with zero characters."))
u=new H.aK([P.u,P.W])
for(t=new H.cM(a,a.gm(a),0,[H.ao(a,"N",0)]);t.v();)u.a_(0,t.d,!0)
this.shq(u)},
aE:function(a){return this.a.dj(a)},
i:function(a){var u=this.a
return P.hz(new H.eg(u,[H.q(u,0)]),0,null)},
shq:function(a){this.a=H.d(a,"$iaz",[P.u,P.W],"$aaz")},
$iaM:1}
V.bV.prototype={
w:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.c_(this.a.I(0,b))
r.sap(H.b([],[V.aM]))
r.c=!1
C.a.h(this.c,r)
return r},
iJ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
if(r.aE(a))return r}return},
i:function(a){return this.b},
shO:function(a){this.c=H.d(a,"$ia",[V.c_],"$aa")}}
V.de.prototype={
i:function(a){var u,t
u=H.iT(this.b,"\n","\\n")
t=H.iT(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.bZ.prototype={
i:function(a){return this.b},
shl:function(a){var u=P.v
this.c=H.d(a,"$iaz",[u,u],"$aaz")}}
V.f3.prototype={
I:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.bV(this,b)
u.shO(H.b([],[V.c_]))
u.d=null
this.a.a_(0,b,u)}return u},
aX:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.bZ(this,a)
t=P.v
u.shl(new H.aK([t,t]))
this.b.a_(0,a,u)}return u},
jn:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.de])
t=this.c
s=[P.u]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.b0(a,o)
m=t.iJ(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.hz(r,0,null)
throw H.i(P.o("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.hz(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.de(j==null?k.b:j,l,o)}++o}}},
shC:function(a){this.a=H.d(a,"$iaz",[P.v,V.bV],"$aaz")},
shH:function(a){this.b=H.d(a,"$iaz",[P.v,V.bZ],"$aaz")}}
V.c_.prototype={
i:function(a){return this.b.b+": "+this.cz(0)}}
X.bc.prototype={$iaC:1}
X.e7.prototype={
gl:function(){var u=this.x
if(u==null){u=D.C()
this.x=u}return u},
ag:function(a){var u=this.x
if(u!=null)u.B(a)},
X:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.im(u,36160,null)
C.b.c4(u,2884)
C.b.c4(u,2929)
C.b.iE(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.y(t)
p=C.f.af(q*t)
q=r.b
if(typeof s!=="number")return H.y(s)
o=C.f.af(q*s)
q=C.f.af(r.c*t)
a.c=q
r=C.f.af(r.d*s)
a.d=r
C.b.jp(u,p,o,q,r)
C.b.is(u,this.c)
if(this.b){r=this.a
C.b.ir(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.iq(u,n)}}
X.e8.prototype={
gl:function(){var u=this.b
if(u==null){u=D.C()
this.b=u}return u},
X:function(a){var u
a.cy.bp(V.bk())
u=V.bk()
a.db.bp(u)},
aZ:function(a){a.cy.au()
a.db.au()},
$iaC:1,
$ibc:1}
X.cY.prototype={
gl:function(){var u=this.f
if(u==null){u=D.C()
this.f=u}return u},
ag:function(a){var u
H.h(a,"$ir")
u=this.f
if(u!=null)u.B(a)},
eL:function(){return this.ag(null)},
X:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aB(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.bp(n)
u=$.ib
if(u==null){u=V.jA()
t=$.it
if(t==null){t=new V.I(0,1,0)
$.it=t}s=$.is
if(s==null){s=new V.I(0,0,-1)
$.is=s}m=s.t(0,Math.sqrt(s.A(s)))
t=t.aQ(m)
l=t.t(0,Math.sqrt(t.A(t)))
k=m.aQ(l)
j=new V.I(u.a,u.b,u.c)
i=l.L(0).A(j)
h=k.L(0).A(j)
g=m.L(0).A(j)
u=V.aB(l.a,k.a,m.a,i,l.b,k.b,m.b,h,l.c,k.c,m.c,g,0,0,0,1)
$.ib=u
f=u}else f=u
u=this.b
if(u!=null){e=u.aG(a,this)
if(e!=null)f=e.n(0,f)}a.db.bp(f)},
aZ:function(a){a.cy.au()
a.db.au()},
$iaC:1,
$ibc:1}
X.bX.prototype={}
V.hk.prototype={
$1:function(a){H.h(a,"$iaD")
P.hO(C.f.e6(this.a.giL(),2)+" fps")},
$S:34}
V.eP.prototype={
ez:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.q).W(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.q.W(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.W(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.W(q,p)}o=u.createElement("div")
this.a=o
C.l.W(q,o)
this.b=null
o=W.e
W.V(u,"scroll",H.l(new V.eR(s),{func:1,ret:-1,args:[o]}),!1,o)},
d9:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.d(a,"$ia",[P.v],"$aa")
this.hx()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jn(C.a.iP(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.w)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.W(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.W(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.W(t,o)
break
case"Link":n=p.b
if(H.iS(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.k(m,1)
l.href=H.P(m[1])
l.textContent=H.P(m[0])
C.l.W(t,l)}else{k=P.k2(C.N,n,C.y,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.l.W(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.W(t,o)
break}}C.l.W(this.a,t)},
hx:function(){var u,t,s,r
if(this.b!=null)return
u=new V.f3()
t=P.v
u.shC(new H.aK([t,V.bV]))
u.shH(new H.aK([t,V.bZ]))
u.c=null
u.c=u.I(0,"Start")
t=u.I(0,"Start").w(0,"Bold")
s=V.a2(new H.R("*"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,"Bold").w(0,"Bold")
s=new V.aO()
r=[V.aM]
s.sap(H.b([],r))
C.a.h(t.a,s)
t=V.a2(new H.R("*"))
C.a.h(s.a,t)
t=u.I(0,"Bold").w(0,"BoldEnd")
s=V.a2(new H.R("*"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,"Start").w(0,"Italic")
s=V.a2(new H.R("_"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,"Italic").w(0,"Italic")
s=new V.aO()
s.sap(H.b([],r))
C.a.h(t.a,s)
t=V.a2(new H.R("_"))
C.a.h(s.a,t)
t=u.I(0,"Italic").w(0,"ItalicEnd")
s=V.a2(new H.R("_"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,"Start").w(0,"Code")
s=V.a2(new H.R("`"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,"Code").w(0,"Code")
s=new V.aO()
s.sap(H.b([],r))
C.a.h(t.a,s)
t=V.a2(new H.R("`"))
C.a.h(s.a,t)
t=u.I(0,"Code").w(0,"CodeEnd")
s=V.a2(new H.R("`"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,"Start").w(0,"LinkHead")
s=V.a2(new H.R("["))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,"LinkHead").w(0,"LinkTail")
s=V.a2(new H.R("|"))
C.a.h(t.a,s)
s=u.I(0,"LinkHead").w(0,"LinkEnd")
t=V.a2(new H.R("]"))
C.a.h(s.a,t)
s.c=!0
s=u.I(0,"LinkHead").w(0,"LinkHead")
t=new V.aO()
t.sap(H.b([],r))
C.a.h(s.a,t)
s=V.a2(new H.R("|]"))
C.a.h(t.a,s)
s=u.I(0,"LinkTail").w(0,"LinkEnd")
t=V.a2(new H.R("]"))
C.a.h(s.a,t)
s.c=!0
s=u.I(0,"LinkTail").w(0,"LinkTail")
t=new V.aO()
t.sap(H.b([],r))
C.a.h(s.a,t)
s=V.a2(new H.R("|]"))
C.a.h(t.a,s)
C.a.h(u.I(0,"Start").w(0,"Other").a,new V.dJ())
s=u.I(0,"Other").w(0,"Other")
t=new V.aO()
t.sap(H.b([],r))
C.a.h(s.a,t)
s=V.a2(new H.R("*_`["))
C.a.h(t.a,s)
s=u.I(0,"BoldEnd")
s.d=s.a.aX("Bold")
s=u.I(0,"ItalicEnd")
s.d=s.a.aX("Italic")
s=u.I(0,"CodeEnd")
s.d=s.a.aX("Code")
s=u.I(0,"LinkEnd")
s.d=s.a.aX("Link")
s=u.I(0,"Other")
s.d=s.a.aX("Other")
this.b=u}}
V.eR.prototype={
$1:function(a){P.im(C.n,new V.eQ(this.a))},
$S:11}
V.eQ.prototype={
$0:function(){var u,t,s
u=C.f.af(document.documentElement.scrollTop)
t=this.a.style
s=H.f(-0.01*u)+"px"
t.top=s},
$S:2};(function aliases(){var u=J.Z.prototype
u.eq=u.i
u=J.cJ.prototype
u.er=u.i
u=O.bN.prototype
u.eu=u.aq
u=O.aA.prototype
u.cA=u.aq
u=V.cO.prototype
u.es=u.aE
u.cz=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"kb","jW",10)
u(P,"kc","jX",10)
u(P,"kd","jY",10)
t(P,"iH","ka",3)
var n
s(n=E.a6.prototype,"gdZ",0,0,null,["$1","$0"],["e_","j0"],0,0)
s(n,"gdX",0,0,null,["$1","$0"],["dY","iY"],0,0)
r(n,"giW","iX",6)
r(n,"giZ","j_",6)
s(n=E.dd.prototype,"gcD",0,0,null,["$1","$0"],["cF","cE"],0,0)
q(n,"gjc","e2",3)
p(n=X.dl.prototype,"gfK","fL",9)
p(n,"gfw","fz",9)
p(n,"gfE","fF",4)
p(n,"gfO","fP",17)
p(n,"gfM","fN",17)
p(n,"gfS","fT",4)
p(n,"gfW","fX",4)
p(n,"gfI","fJ",4)
p(n,"gfU","fV",4)
p(n,"gfG","fH",4)
p(n,"gfY","fZ",28)
p(n,"gh_","h0",9)
p(n,"ghf","hg",7)
p(n,"ghb","hc",7)
p(n,"ghd","he",7)
s(n=D.cL.prototype,"gcX",0,0,null,["$1","$0"],["cY","fQ"],0,0)
p(n,"gh1","h2",29)
r(n,"gfp","fq",18)
r(n,"gh5","h6",18)
o(V.H.prototype,"gm","cf",19)
o(V.I.prototype,"gm","cf",19)
s(n=U.bJ.prototype,"gaA",0,0,null,["$1","$0"],["J","a0"],0,0)
r(n,"gfn","fo",20)
r(n,"gh3","h4",20)
s(n=U.dm.prototype,"gaA",0,0,null,["$1","$0"],["J","a0"],0,0)
p(n,"gbG","bH",1)
p(n,"gbI","bJ",1)
p(n,"gbK","bL",1)
s(n=U.dn.prototype,"gaA",0,0,null,["$1","$0"],["J","a0"],0,0)
p(n,"gbG","bH",1)
p(n,"gbI","bJ",1)
p(n,"gbK","bL",1)
p(n,"gfh","fi",1)
p(n,"gfj","fk",1)
p(n,"ghM","hN",1)
p(n,"ghK","hL",1)
p(n,"ghI","hJ",1)
p(U.dp.prototype,"gfl","fm",1)
s(n=M.cu.prototype,"gS",0,0,null,["$1","$0"],["T","aJ"],0,0)
r(n,"gh7","h8",16)
r(n,"gh9","ha",16)
s(M.cx.prototype,"gS",0,0,null,["$1","$0"],["T","aJ"],0,0)
s(n=M.cB.prototype,"gS",0,0,null,["$1","$0"],["T","aJ"],0,0)
r(n,"gfA","fB",6)
r(n,"gfC","fD",6)
s(n=O.cP.prototype,"gax",0,0,null,["$1","$0"],["O","aK"],0,0)
s(n,"gho",0,0,null,["$1","$0"],["d2","hp"],0,0)
r(n,"gfs","ft",21)
r(n,"gfu","fv",21)
s(O.bN.prototype,"gax",0,0,null,["$1","$0"],["O","aK"],0,0)
s(O.d3.prototype,"gax",0,0,null,["$1","$0"],["O","aK"],0,0)
s(X.cY.prototype,"geK",0,0,null,["$1","$0"],["ag","eL"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.G,null)
s(P.G,[H.hw,J.Z,J.a9,P.dz,P.j,H.cM,P.aw,H.bi,H.dk,H.eE,H.f6,P.aZ,H.bB,H.dC,P.em,H.ef,H.eh,H.ec,P.dD,P.aI,P.am,P.dt,P.eU,P.bW,P.eV,P.aD,P.a5,P.h2,P.fZ,P.c9,P.fT,P.N,P.bC,P.h1,P.W,P.aa,P.a4,P.aY,P.eA,P.d6,P.dw,P.e6,P.a,P.A,P.ac,P.v,P.b5,W.dT,W.aq,W.cC,P.dG,P.fU,O.M,O.bO,E.dN,E.a6,E.eF,E.dd,Z.dr,Z.ds,Z.bA,Z.b0,Z.aG,D.dQ,D.bG,D.r,X.ct,X.cK,X.ee,X.ej,X.ae,X.eu,X.f4,X.dl,D.cz,D.Q,D.cZ,D.d5,D.da,D.db,D.dc,V.a0,V.ap,V.e_,V.cR,V.ab,V.U,V.a7,V.aQ,V.d0,V.H,V.I,U.dm,U.dn,U.dp,M.cx,M.cB,M.af,A.cp,A.dM,A.er,A.c0,A.c4,A.c2,A.c5,A.c3,A.c6,A.bf,A.dg,A.ff,F.T,F.aL,F.b4,F.d2,F.eM,F.eN,F.eO,F.ah,F.fn,F.fo,F.fr,F.fs,O.b6,O.bN,T.f_,V.dJ,V.aM,V.cO,V.eL,V.bV,V.de,V.bZ,V.f3,X.bc,X.bX,X.e8,X.cY,V.eP])
s(J.Z,[J.eb,J.cH,J.cJ,J.ax,J.cI,J.bM,H.cV,W.bh,W.be,W.du,W.dV,W.cA,W.e,W.dx,W.b_,W.dA,W.aE,W.dE,P.cr,P.cD,P.d_,P.bo,P.d1,P.d7,P.dh])
s(J.cJ,[J.eB,J.di,J.b3])
t(J.hv,J.ax)
s(J.cI,[J.cG,J.cF])
t(P.ei,P.dz)
s(P.ei,[H.dj,W.fD,W.fC,P.e2])
t(H.R,H.dj)
s(P.j,[H.dY,H.en,H.fw])
s(P.aw,[H.eo,H.fx])
s(P.aZ,[H.ez,H.ed,H.fi,H.f8,H.dP,H.eJ,P.cX,P.au,P.fj,P.fh,P.eS,P.dS,P.dU])
s(H.bB,[H.hl,H.eY,H.hd,H.he,H.hf,P.fz,P.fy,P.fA,P.fB,P.h0,P.h_,P.fH,P.fL,P.fI,P.fJ,P.fK,P.fO,P.fP,P.fN,P.fM,P.eW,P.eX,P.h6,P.fX,P.fW,P.fY,P.el,P.dW,P.dX,W.fG,P.h8,P.e3,P.e4,E.eG,E.eH,E.eI,E.f2,D.e1,F.h3,F.fu,F.ft,F.fp,F.fq,T.f1,T.f0,V.hk,V.eR,V.eQ])
s(H.eY,[H.eT,H.by])
t(P.ek,P.em)
t(H.aK,P.ek)
t(H.eg,H.dY)
t(H.cS,H.cV)
s(H.cS,[H.ca,H.cc])
t(H.cb,H.ca)
t(H.cT,H.cb)
t(H.cd,H.cc)
t(H.cU,H.cd)
s(H.cU,[H.ev,H.ew,H.ex,H.cW,H.ey])
t(P.fV,P.h2)
t(P.fS,P.fZ)
t(P.cw,P.eV)
t(P.dZ,P.bC)
t(P.fk,P.dZ)
t(P.fl,P.cw)
s(P.a4,[P.t,P.u])
s(P.au,[P.bn,P.e9])
s(W.bh,[W.F,W.c7])
s(W.F,[W.S,W.aX,W.bF])
s(W.S,[W.n,P.m])
s(W.n,[W.dK,W.dL,W.cq,W.bd,W.bE,W.e5,W.bK,W.bP,W.eK])
t(W.bg,W.du)
t(W.dy,W.dx)
t(W.bj,W.dy)
t(W.cE,W.bF)
t(W.b7,W.e)
s(W.b7,[W.ay,W.a_,W.ar])
t(W.dB,W.dA)
t(W.bR,W.dB)
t(W.dF,W.dE)
t(W.f5,W.dF)
t(W.fv,W.bP)
t(W.aH,W.a_)
t(W.dv,W.cA)
t(W.fE,P.eU)
t(W.hD,W.fE)
t(W.fF,P.bW)
t(P.ak,P.fU)
s(E.dN,[Z.cs,A.bU,T.bY])
s(D.r,[D.b1,D.b2,D.D,X.eC])
s(X.eC,[X.cN,X.aN,X.bQ,X.df])
s(O.M,[D.cL,U.bJ,M.cu])
s(D.dQ,[U.dR,U.a1])
t(U.cv,U.a1)
s(A.bU,[A.cQ,A.d4])
s(A.dg,[A.B,A.fb,A.fc,A.fe,A.f9,A.K,A.fa,A.z,A.fd,A.fg,A.c1,A.ad,A.a8,A.a3])
s(O.b6,[O.cP,O.d3])
s(O.bN,[O.ep,O.eq,O.aA])
s(O.aA,[O.es,O.et])
s(T.bY,[T.d8,T.d9])
t(T.eZ,T.d8)
s(V.cO,[V.aO,V.c_])
t(X.e7,X.bX)
u(H.dj,H.dk)
u(H.ca,P.N)
u(H.cb,H.bi)
u(H.cc,P.N)
u(H.cd,H.bi)
u(P.dz,P.N)
u(W.du,W.dT)
u(W.dx,P.N)
u(W.dy,W.aq)
u(W.dA,P.N)
u(W.dB,W.aq)
u(W.dE,P.N)
u(W.dF,W.aq)})();(function constants(){var u=hunkHelpers.makeConstList
C.q=W.cq.prototype
C.m=W.bd.prototype
C.r=W.be.prototype
C.t=W.bg.prototype
C.l=W.bE.prototype
C.u=W.cE.prototype
C.E=J.Z.prototype
C.a=J.ax.prototype
C.F=J.cF.prototype
C.i=J.cG.prototype
C.o=J.cH.prototype
C.f=J.cI.prototype
C.j=J.bM.prototype
C.M=J.b3.prototype
C.O=W.bR.prototype
C.x=J.eB.prototype
C.b=P.bo.prototype
C.p=J.di.prototype
C.z=W.aH.prototype
C.A=W.c7.prototype
C.B=new P.eA()
C.C=new P.fl()
C.k=new P.fV()
C.c=new A.bf(0,"ColorSourceType.None")
C.h=new A.bf(1,"ColorSourceType.Solid")
C.d=new A.bf(2,"ColorSourceType.Texture2D")
C.e=new A.bf(3,"ColorSourceType.TextureCube")
C.n=new P.aY(0)
C.D=new P.aY(5e6)
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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
C.v=function(hooks) { return hooks; }

C.I=function(getTagFallback) {
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
C.J=function() {
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
C.K=function(hooks) {
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
C.L=function(hooks) {
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
C.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.N=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.y=new P.fk(!1)})();(function staticFields(){$.av=0
$.bz=null
$.hT=null
$.hE=!1
$.iM=null
$.iF=null
$.iR=null
$.h9=null
$.hg=null
$.hL=null
$.bp=null
$.ch=null
$.ci=null
$.hF=!1
$.L=C.k
$.i_=null
$.hZ=null
$.hY=null
$.hX=null
$.i7=null
$.ic=null
$.bS=null
$.ii=null
$.ir=null
$.iu=null
$.it=null
$.is=null
$.jR="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.jQ="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.ib=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"kI","iX",function(){return H.iL("_$dart_dartClosure")})
u($,"kJ","hP",function(){return H.iL("_$dart_js")})
u($,"kM","iY",function(){return H.aF(H.f7({
toString:function(){return"$receiver$"}}))})
u($,"kN","iZ",function(){return H.aF(H.f7({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"kO","j_",function(){return H.aF(H.f7(null))})
u($,"kP","j0",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"kS","j3",function(){return H.aF(H.f7(void 0))})
u($,"kT","j4",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"kR","j2",function(){return H.aF(H.ip(null))})
u($,"kQ","j1",function(){return H.aF(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"kV","j6",function(){return H.aF(H.ip(void 0))})
u($,"kU","j5",function(){return H.aF(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"la","hQ",function(){return P.jV()})
u($,"lc","cn",function(){return[]})
u($,"lb","ja",function(){return P.jM("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"kH","iW",function(){return{}})
u($,"l3","j9",function(){return Z.al(0)})
u($,"kY","j7",function(){return Z.al(511)})
u($,"l5","at",function(){return Z.al(1)})
u($,"l4","aU",function(){return Z.al(2)})
u($,"l_","aT",function(){return Z.al(4)})
u($,"l6","aV",function(){return Z.al(8)})
u($,"l7","aW",function(){return Z.al(16)})
u($,"l0","cl",function(){return Z.al(32)})
u($,"l1","cm",function(){return Z.al(64)})
u($,"l2","j8",function(){return Z.al(96)})
u($,"l8","bx",function(){return Z.al(128)})
u($,"kZ","aS",function(){return Z.al(256)})
u($,"kG","iV",function(){return new V.e_(1e-9)})
u($,"kF","E",function(){return $.iV()})})()
var v={mangledGlobalNames:{u:"int",t:"double",a4:"num",v:"String",W:"bool",A:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.r]},{func:1,ret:-1,args:[D.r]},{func:1,ret:P.A},{func:1,ret:-1},{func:1,ret:-1,args:[W.a_]},{func:1,ret:P.A,args:[F.T]},{func:1,ret:-1,args:[P.u,[P.j,E.a6]]},{func:1,ret:-1,args:[W.ar]},{func:1,ret:P.A,args:[D.r]},{func:1,ret:-1,args:[W.e]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.A,args:[W.e]},{func:1,ret:P.A,args:[,,]},{func:1,ret:P.v,args:[P.u]},{func:1,args:[,]},{func:1,ret:P.A,args:[,]},{func:1,ret:-1,args:[P.u,[P.j,M.af]]},{func:1,ret:-1,args:[W.ay]},{func:1,ret:-1,args:[P.u,[P.j,D.Q]]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.u,[P.j,U.a1]]},{func:1,ret:-1,args:[P.u,[P.j,V.ab]]},{func:1,ret:[P.am,,],args:[,]},{func:1,ret:P.W,args:[W.F]},{func:1,ret:W.S,args:[W.F]},{func:1,ret:P.A,args:[{func:1,ret:-1}]},{func:1,ret:P.A,args:[{func:1,ret:-1,args:[D.r]}]},{func:1,args:[,P.v]},{func:1,ret:-1,args:[W.aH]},{func:1,ret:P.W,args:[[P.j,D.Q]]},{func:1,args:[P.v]},{func:1,args:[W.e]},{func:1,ret:P.A,args:[F.ah,P.t,P.t]},{func:1,ret:P.A,args:[,],opt:[P.ac]},{func:1,ret:P.A,args:[P.aD]},{func:1,ret:P.A,args:[P.a4]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.Z,MediaError:J.Z,Navigator:J.Z,NavigatorConcurrentHardware:J.Z,NavigatorUserMediaError:J.Z,OverconstrainedError:J.Z,PositionError:J.Z,WebGLActiveInfo:J.Z,WebGLRenderbuffer:J.Z,WebGL2RenderingContext:J.Z,SQLError:J.Z,ArrayBufferView:H.cV,Float32Array:H.cT,Int16Array:H.ev,Int32Array:H.ew,Uint32Array:H.ex,Uint8ClampedArray:H.cW,CanvasPixelArray:H.cW,Uint8Array:H.ey,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTableElement:W.n,HTMLTableRowElement:W.n,HTMLTableSectionElement:W.n,HTMLTemplateElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,HTMLAnchorElement:W.dK,HTMLAreaElement:W.dL,HTMLBodyElement:W.cq,HTMLCanvasElement:W.bd,CanvasRenderingContext2D:W.be,CDATASection:W.aX,CharacterData:W.aX,Comment:W.aX,ProcessingInstruction:W.aX,Text:W.aX,CSSStyleDeclaration:W.bg,MSStyleCSSProperties:W.bg,CSS2Properties:W.bg,HTMLDivElement:W.bE,XMLDocument:W.bF,Document:W.bF,DOMException:W.dV,DOMRectReadOnly:W.cA,Element:W.S,AbortPaymentEvent:W.e,AnimationEvent:W.e,AnimationPlaybackEvent:W.e,ApplicationCacheErrorEvent:W.e,BackgroundFetchClickEvent:W.e,BackgroundFetchEvent:W.e,BackgroundFetchFailEvent:W.e,BackgroundFetchedEvent:W.e,BeforeInstallPromptEvent:W.e,BeforeUnloadEvent:W.e,BlobEvent:W.e,CanMakePaymentEvent:W.e,ClipboardEvent:W.e,CloseEvent:W.e,CustomEvent:W.e,DeviceMotionEvent:W.e,DeviceOrientationEvent:W.e,ErrorEvent:W.e,ExtendableEvent:W.e,ExtendableMessageEvent:W.e,FetchEvent:W.e,FontFaceSetLoadEvent:W.e,ForeignFetchEvent:W.e,GamepadEvent:W.e,HashChangeEvent:W.e,InstallEvent:W.e,MediaEncryptedEvent:W.e,MediaKeyMessageEvent:W.e,MediaQueryListEvent:W.e,MediaStreamEvent:W.e,MediaStreamTrackEvent:W.e,MessageEvent:W.e,MIDIConnectionEvent:W.e,MIDIMessageEvent:W.e,MutationEvent:W.e,NotificationEvent:W.e,PageTransitionEvent:W.e,PaymentRequestEvent:W.e,PaymentRequestUpdateEvent:W.e,PopStateEvent:W.e,PresentationConnectionAvailableEvent:W.e,PresentationConnectionCloseEvent:W.e,ProgressEvent:W.e,PromiseRejectionEvent:W.e,PushEvent:W.e,RTCDataChannelEvent:W.e,RTCDTMFToneChangeEvent:W.e,RTCPeerConnectionIceEvent:W.e,RTCTrackEvent:W.e,SecurityPolicyViolationEvent:W.e,SensorErrorEvent:W.e,SpeechRecognitionError:W.e,SpeechRecognitionEvent:W.e,SpeechSynthesisEvent:W.e,StorageEvent:W.e,SyncEvent:W.e,TrackEvent:W.e,TransitionEvent:W.e,WebKitTransitionEvent:W.e,VRDeviceEvent:W.e,VRDisplayEvent:W.e,VRSessionEvent:W.e,MojoInterfaceRequestEvent:W.e,ResourceProgressEvent:W.e,USBConnectionEvent:W.e,IDBVersionChangeEvent:W.e,AudioProcessingEvent:W.e,OfflineAudioCompletionEvent:W.e,WebGLContextEvent:W.e,Event:W.e,InputEvent:W.e,EventTarget:W.bh,HTMLFormElement:W.e5,HTMLCollection:W.bj,HTMLFormControlsCollection:W.bj,HTMLOptionsCollection:W.bj,HTMLDocument:W.cE,ImageData:W.b_,HTMLImageElement:W.bK,KeyboardEvent:W.ay,HTMLAudioElement:W.bP,HTMLMediaElement:W.bP,PointerEvent:W.a_,MouseEvent:W.a_,DragEvent:W.a_,DocumentFragment:W.F,ShadowRoot:W.F,Attr:W.F,DocumentType:W.F,Node:W.F,NodeList:W.bR,RadioNodeList:W.bR,HTMLSelectElement:W.eK,Touch:W.aE,TouchEvent:W.ar,TouchList:W.f5,CompositionEvent:W.b7,FocusEvent:W.b7,TextEvent:W.b7,UIEvent:W.b7,HTMLVideoElement:W.fv,WheelEvent:W.aH,Window:W.c7,DOMWindow:W.c7,ClientRect:W.dv,DOMRect:W.dv,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGScriptElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,WebGLBuffer:P.cr,WebGLFramebuffer:P.cD,WebGLProgram:P.d_,WebGLRenderingContext:P.bo,WebGLShader:P.d1,WebGLTexture:P.d7,WebGLUniformLocation:P.dh})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.cb.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.cc.$nativeSuperclassTag="ArrayBufferView"
H.cd.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.iO,[])
else M.iO([])})})()
//# sourceMappingURL=test.dart.js.map
