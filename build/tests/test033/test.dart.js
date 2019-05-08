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
a[c]=function(){a[c]=function(){H.kA(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.hN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.hN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.hN(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={hx:function hx(a){this.a=a},
jn:function(){return new P.eX("No element")},
T:function T(a){this.a=a},
e_:function e_(){},
cO:function cO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
er:function er(a,b,c){this.a=a
this.b=b
this.$ti=c},
es:function es(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fA:function fA(a,b,c){this.a=a
this.b=b
this.$ti=c},
fB:function fB(a,b,c){this.a=a
this.b=b
this.$ti=c},
bj:function bj(){},
dk:function dk(){},
dj:function dj(){},
by:function(a){var u,t
u=H.S(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
kj:function(a){return v.types[H.a0(a)]},
ko:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$iaL},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ai(a)
if(typeof u!=="string")throw H.k(H.bt(a))
return u},
jH:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.ee(u)
t=u[0]
s=u[1]
return new H.eI(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
bW:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bm:function(a){return H.jx(a)+H.hL(H.bb(a),0,null)},
jx:function(a){var u,t,s,r,q,p,o,n,m
u=J.P(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.D||!!u.$idi){p=C.u(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.by(r.length>1&&C.j.b3(r,0)===36?C.j.cF(r,1):r)},
ie:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
jG:function(a){var u,t,s,r
u=H.b([],[P.v])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.u)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.k(H.bt(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.b6(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.k(H.bt(r))}return H.ie(u)},
ig:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.k(H.bt(s))
if(s<0)throw H.k(H.bt(s))
if(s>65535)return H.jG(a)}return H.ie(a)},
jF:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.b6(u,10))>>>0,56320|u&1023)}throw H.k(P.ap(a,0,1114111,null,null))},
bl:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jE:function(a){var u=H.bl(a).getFullYear()+0
return u},
jC:function(a){var u=H.bl(a).getMonth()+1
return u},
jy:function(a){var u=H.bl(a).getDate()+0
return u},
jz:function(a){var u=H.bl(a).getHours()+0
return u},
jB:function(a){var u=H.bl(a).getMinutes()+0
return u},
jD:function(a){var u=H.bl(a).getSeconds()+0
return u},
jA:function(a){var u=H.bl(a).getMilliseconds()+0
return u},
z:function(a){throw H.k(H.bt(a))},
j:function(a,b){if(a==null)J.cs(a)
throw H.k(H.co(a,b))},
co:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.au(!0,b,"index",null)
u=H.a0(J.cs(a))
if(!(b<0)){if(typeof u!=="number")return H.z(u)
t=b>=u}else t=!0
if(t)return P.bO(b,a,"index",null,u)
return P.eH(b,"index",null)},
kg:function(a,b,c){if(a>c)return new P.bn(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bn(a,c,!0,b,"end","Invalid value")
return new P.au(!0,b,"end",null)},
bt:function(a){return new P.au(!0,a,null,null)},
kc:function(a){if(typeof a!=="number")throw H.k(H.bt(a))
return a},
k:function(a){var u
if(a==null)a=new P.cZ()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.iU})
u.name=""}else u.toString=H.iU
return u},
iU:function(){return J.ai(this.dartException)},
p:function(a){throw H.k(a)},
u:function(a){throw H.k(P.bF(a))},
aG:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.x])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.f9(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fa:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ip:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
i9:function(a,b){return new H.eD(a,b==null?null:b.method)},
hy:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.eh(a,t,u?null:b.receiver)},
bc:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.ho(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.b6(s,16)&8191)===10)switch(r){case 438:return u.$1(H.hy(H.i(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.i9(H.i(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.iX()
p=$.iY()
o=$.iZ()
n=$.j_()
m=$.j2()
l=$.j3()
k=$.j1()
$.j0()
j=$.j5()
i=$.j4()
h=q.a9(t)
if(h!=null)return u.$1(H.hy(H.S(t),h))
else{h=p.a9(t)
if(h!=null){h.method="call"
return u.$1(H.hy(H.S(t),h))}else{h=o.a9(t)
if(h==null){h=n.a9(t)
if(h==null){h=m.a9(t)
if(h==null){h=l.a9(t)
if(h==null){h=k.a9(t)
if(h==null){h=n.a9(t)
if(h==null){h=j.a9(t)
if(h==null){h=i.a9(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.i9(H.S(t),h))}}return u.$1(new H.fl(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.d7()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.au(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.d7()
return a},
bw:function(a){var u
if(a==null)return new H.dC(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dC(a)},
ki:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.V(0,a[t],a[s])}return b},
kn:function(a,b,c,d,e,f){H.e(a,"$iht")
switch(H.a0(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.k(P.o("Unsupported number of arguments for wrapped closure"))},
bu:function(a,b){var u
H.a0(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kn)
a.$identity=u
return u},
jh:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.P(d).$ia){u.$reflectionInfo=d
s=H.jH(u).r}else s=d
r=e?Object.create(new H.eY().constructor.prototype):Object.create(new H.bA(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.av
if(typeof p!=="number")return p.C()
$.av=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.i0(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.kj,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.hZ:H.hq
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.k("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.i0(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
je:function(a,b,c,d){var u=H.hq
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
i0:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.jg(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.je(t,!r,u,b)
if(t===0){r=$.av
if(typeof r!=="number")return r.C()
$.av=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bB
if(q==null){q=H.dP("self")
$.bB=q}return new Function(r+H.i(q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.av
if(typeof r!=="number")return r.C()
$.av=r+1
o+=r
r="return function("+o+"){return this."
q=$.bB
if(q==null){q=H.dP("self")
$.bB=q}return new Function(r+H.i(q)+"."+H.i(u)+"("+o+");}")()},
jf:function(a,b,c,d){var u,t
u=H.hq
t=H.hZ
switch(b?-1:a){case 0:throw H.k(H.jL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
jg:function(a,b){var u,t,s,r,q,p,o,n
u=$.bB
if(u==null){u=H.dP("self")
$.bB=u}t=$.hY
if(t==null){t=H.dP("receiver")
$.hY=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.jf(r,!p,s,b)
if(r===1){u="return function(){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+");"
t=$.av
if(typeof t!=="number")return t.C()
$.av=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+", "+n+");"
t=$.av
if(typeof t!=="number")return t.C()
$.av=t+1
return new Function(u+t+"}")()},
hN:function(a,b,c,d,e,f,g){return H.jh(a,b,H.a0(c),d,!!e,!!f,g)},
hq:function(a){return a.a},
hZ:function(a){return a.c},
dP:function(a){var u,t,s,r,q
u=new H.bA("self","target","receiver","name")
t=J.ee(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
S:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.k(H.as(a,"String"))},
ld:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.k(H.as(a,"double"))},
kt:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.k(H.as(a,"num"))},
iJ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.k(H.as(a,"bool"))},
a0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.k(H.as(a,"int"))},
iR:function(a,b){throw H.k(H.as(a,H.by(H.S(b).substring(2))))},
kv:function(a,b){throw H.k(H.jd(a,H.by(H.S(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.P(a)[b])return a
H.iR(a,b)},
c:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.kv(a,b)},
hk:function(a){if(a==null)return a
if(!!J.P(a).$ia)return a
throw H.k(H.as(a,"List<dynamic>"))},
kp:function(a,b){var u
if(a==null)return a
u=J.P(a)
if(!!u.$ia)return a
if(u[b])return a
H.iR(a,b)},
iK:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a0(u)]
else return a.$S()}return},
dH:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.iK(J.P(a))
if(u==null)return!1
return H.iA(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.hI)return a
$.hI=!0
try{if(H.dH(a,b))return a
u=H.hm(b)
t=H.as(a,u)
throw H.k(t)}finally{$.hI=!1}},
hO:function(a,b){if(a!=null&&!H.hM(a,b))H.p(H.as(a,H.hm(b)))
return a},
as:function(a,b){return new H.fb("TypeError: "+P.e3(a)+": type '"+H.iE(a)+"' is not a subtype of type '"+b+"'")},
jd:function(a,b){return new H.dQ("CastError: "+P.e3(a)+": type '"+H.iE(a)+"' is not a subtype of type '"+b+"'")},
iE:function(a){var u,t
u=J.P(a)
if(!!u.$ibD){t=H.iK(u)
if(t!=null)return H.hm(t)
return"Closure"}return H.bm(a)},
kA:function(a){throw H.k(new P.dW(H.S(a)))},
jL:function(a){return new H.eO(a)},
iM:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bb:function(a){if(a==null)return
return a.$ti},
le:function(a,b,c){return H.bx(a["$a"+H.i(c)],H.bb(b))},
hf:function(a,b,c,d){var u
H.S(c)
H.a0(d)
u=H.bx(a["$a"+H.i(c)],H.bb(b))
return u==null?null:u[d]},
ah:function(a,b,c){var u
H.S(b)
H.a0(c)
u=H.bx(a["$a"+H.i(b)],H.bb(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.a0(b)
u=H.bb(a)
return u==null?null:u[b]},
hm:function(a){return H.ba(a,null)},
ba:function(a,b){var u,t
H.d(b,"$ia",[P.x],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.by(a[0].name)+H.hL(a,1,b)
if(typeof a=="function")return H.by(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a0(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.j(b,t)
return H.i(b[t])}if('func' in a)return H.k2(a,b)
if('futureOr' in a)return"FutureOr<"+H.ba("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.x]
H.d(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.j(b,m)
o=C.j.C(o,b[m])
l=t[p]
if(l!=null&&l!==P.H)o+=" extends "+H.ba(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.ba(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.ba(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.ba(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.kh(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.S(u[g])
i=i+h+H.ba(d[c],b)+(" "+H.i(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
hL:function(a,b,c){var u,t,s,r,q,p
H.d(c,"$ia",[P.x],"$aa")
if(a==null)return""
u=new P.b7("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.ba(p,c)}return"<"+u.i(0)+">"},
bx:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cn:function(a,b,c,d){var u,t
H.S(b)
H.hk(c)
H.S(d)
if(a==null)return!1
u=H.bb(a)
t=J.P(a)
if(t[b]==null)return!1
return H.iH(H.bx(t[d],u),null,c,null)},
d:function(a,b,c,d){H.S(b)
H.hk(c)
H.S(d)
if(a==null)return a
if(H.cn(a,b,c,d))return a
throw H.k(H.as(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.by(b.substring(2))+H.hL(c,0,null),v.mangledGlobalNames)))},
iH:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.am(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.am(a[t],b,c[t],d))return!1
return!0},
lb:function(a,b,c){return a.apply(b,H.bx(J.P(b)["$a"+H.i(c)],H.bb(b)))},
iO:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="H"||a.name==="B"||a===-1||a===-2||H.iO(u)}return!1},
hM:function(a,b){var u,t
if(a==null)return b==null||b.name==="H"||b.name==="B"||b===-1||b===-2||H.iO(b)
if(b==null||b===-1||b.name==="H"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.hM(a,"type" in b?b.type:null))return!0
if('func' in b)return H.dH(a,b)}u=J.P(a).constructor
t=H.bb(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.am(u,null,b,null)},
w:function(a,b){if(a!=null&&!H.hM(a,b))throw H.k(H.as(a,H.hm(b)))
return a},
am:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="H"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="H"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.am(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="B")return!0
if('func' in c)return H.iA(a,b,c,d)
if('func' in a)return c.name==="ht"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.am("type" in a?a.type:null,b,s,d)
else if(H.am(a,b,s,d))return!0
else{if(!('$i'+"bL" in t.prototype))return!1
r=t.prototype["$a"+"bL"]
q=H.bx(r,u?a.slice(1):null)
return H.am(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.iH(H.bx(m,u),b,p,d)},
iA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.am(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.am(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.am(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.am(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.ks(h,b,g,d)},
ks:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.am(c[r],d,a[r],b))return!1}return!0},
lc:function(a,b,c){Object.defineProperty(a,H.S(b),{value:c,enumerable:false,writable:true,configurable:true})},
kq:function(a){var u,t,s,r,q,p
u=H.S($.iN.$1(a))
t=$.hd[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hj[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.S($.iG.$2(a,u))
if(u!=null){t=$.hd[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hj[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.hl(s)
$.hd[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.hj[u]=s
return s}if(q==="-"){p=H.hl(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.iQ(a,s)
if(q==="*")throw H.k(P.iq(u))
if(v.leafTags[u]===true){p=H.hl(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.iQ(a,s)},
iQ:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.hR(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
hl:function(a){return J.hR(a,!1,null,!!a.$iaL)},
kr:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.hl(u)
else return J.hR(u,c,null,null)},
kl:function(){if(!0===$.hQ)return
$.hQ=!0
H.km()},
km:function(){var u,t,s,r,q,p,o,n
$.hd=Object.create(null)
$.hj=Object.create(null)
H.kk()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.iS.$1(q)
if(p!=null){o=H.kr(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
kk:function(){var u,t,s,r,q,p,o
u=C.I()
u=H.bs(C.F,H.bs(C.K,H.bs(C.t,H.bs(C.t,H.bs(C.J,H.bs(C.G,H.bs(C.H(C.u),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.iN=new H.hg(q)
$.iG=new H.hh(p)
$.iS=new H.hi(o)},
bs:function(a,b){return a(b)||b},
jp:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.k(new P.e9("Illegal RegExp pattern ("+String(r)+")",a,null))},
ky:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
iT:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eI:function eI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
f9:function f9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eD:function eD(a,b){this.a=a
this.b=b},
eh:function eh(a,b,c){this.a=a
this.b=b
this.c=c},
fl:function fl(a){this.a=a},
ho:function ho(a){this.a=a},
dC:function dC(a){this.a=a
this.b=null},
bD:function bD(){},
f2:function f2(){},
eY:function eY(){},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fb:function fb(a){this.a=a},
dQ:function dQ(a){this.a=a},
eO:function eO(a){this.a=a},
aM:function aM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ej:function ej(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ek:function ek(a,b){this.a=a
this.$ti=b},
el:function el(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hg:function hg(a){this.a=a},
hh:function hh(a){this.a=a},
hi:function hi(a){this.a=a},
eg:function eg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ck:function(a){return a},
cj:function(a,b,c){if(a>>>0!==a||a>=c)throw H.k(H.co(b,a))},
k1:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.k(H.kg(a,b,c))
return b},
cX:function cX(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
cY:function cY(){},
eC:function eC(){},
ce:function ce(){},
cf:function cf(){},
cg:function cg(){},
ch:function ch(){},
kh:function(a){return J.i3(a?Object.keys(a):[],null)},
ku:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
hR:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
he:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.hQ==null){H.kl()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.k(P.iq("Return interceptor for "+H.i(t(a,u))))}r=a.constructor
q=r==null?null:r[$.hU()]
if(q!=null)return q
q=H.kq(a)
if(q!=null)return q
if(typeof a=="function")return C.L
t=Object.getPrototypeOf(a)
if(t==null)return C.v
if(t===Object.prototype)return C.v
if(typeof r=="function"){Object.defineProperty(r,$.hU(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
jo:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(P.hp(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.k(P.ap(a,0,4294967295,"length",null))
return J.i3(new Array(a),b)},
i3:function(a,b){return J.ee(H.b(a,[b]))},
ee:function(a){H.hk(a)
a.fixed$length=Array
return a},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cI.prototype
return J.cH.prototype}if(typeof a=="string")return J.bP.prototype
if(a==null)return J.cJ.prototype
if(typeof a=="boolean")return J.ef.prototype
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.H)return a
return J.he(a)},
hP:function(a){if(typeof a=="string")return J.bP.prototype
if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.H)return a
return J.he(a)},
iL:function(a){if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.H)return a
return J.he(a)},
dI:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.H)return a
return J.he(a)},
N:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).p(a,b)},
ja:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ko(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.hP(a).j(a,b)},
jb:function(a,b,c,d){return J.dI(a).eQ(a,b,c,d)},
hW:function(a,b){return J.dI(a).Y(a,b)},
hX:function(a,b){return J.iL(a).a7(a,b)},
bd:function(a){return J.P(a).gE(a)},
dJ:function(a){return J.iL(a).gX(a)},
cs:function(a){return J.hP(a).gm(a)},
ai:function(a){return J.P(a).i(a)},
a1:function a1(){},
ef:function ef(){},
cJ:function cJ(){},
cL:function cL(){},
eF:function eF(){},
di:function di(){},
b4:function b4(){},
ay:function ay(a){this.$ti=a},
hw:function hw(a){this.$ti=a},
a6:function a6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cK:function cK(){},
cI:function cI(){},
cH:function cH(){},
bP:function bP(){}},P={
jT:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.k9()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bu(new P.fD(u),1)).observe(t,{childList:true})
return new P.fC(u,t,s)}else if(self.setImmediate!=null)return P.ka()
return P.kb()},
jU:function(a){self.scheduleImmediate(H.bu(new P.fE(H.l(a,{func:1,ret:-1})),0))},
jV:function(a){self.setImmediate(H.bu(new P.fF(H.l(a,{func:1,ret:-1})),0))},
jW:function(a){P.hE(C.n,H.l(a,{func:1,ret:-1}))},
hE:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.h.a_(a.a,1000)
return P.jZ(u<0?0:u,b)},
io:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.aE]})
u=C.h.a_(a.a,1000)
return P.k_(u<0?0:u,b)},
jZ:function(a,b){var u=new P.dD(!0)
u.eL(a,b)
return u},
k_:function(a,b){var u=new P.dD(!1)
u.eM(a,b)
return u},
jX:function(a,b){var u,t,s
b.a=1
try{a.e8(new P.fM(b),new P.fN(b),null)}catch(s){u=H.bc(s)
t=H.bw(s)
P.kw(new P.fO(b,u,t))}},
iw:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$ial")
if(u>=4){t=b.bV()
b.a=a.a
b.c=a.c
P.cc(b,t)}else{t=H.e(b.c,"$iaJ")
b.a=2
b.c=a
a.d6(t)}},
cc:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.e(t.c,"$ia7")
t=t.b
p=q.a
o=q.b
t.toString
P.h9(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cc(u.a,b)}t=u.a
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
if(k){H.e(m,"$ia7")
t=t.b
p=m.a
o=m.b
t.toString
P.h9(null,null,t,p,o)
return}j=$.M
if(j!=l)$.M=l
else j=null
t=b.c
if(t===8)new P.fS(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.fR(s,b,m).$0()}else if((t&2)!==0)new P.fQ(u,s,b).$0()
if(j!=null)$.M=j
t=s.b
if(!!J.P(t).$ibL){if(t.a>=4){i=H.e(o.c,"$iaJ")
o.c=null
b=o.b5(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.iw(t,o)
return}}h=b.b
i=H.e(h.c,"$iaJ")
h.c=null
b=h.b5(i)
t=s.a
p=s.b
if(!t){H.w(p,H.r(h,0))
h.a=4
h.c=p}else{H.e(p,"$ia7")
h.a=8
h.c=p}u.a=h
t=h}},
k5:function(a,b){if(H.dH(a,{func:1,args:[P.H,P.ac]}))return H.l(a,{func:1,ret:null,args:[P.H,P.ac]})
if(H.dH(a,{func:1,args:[P.H]}))return H.l(a,{func:1,ret:null,args:[P.H]})
throw H.k(P.hp(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k4:function(){var u,t
for(;u=$.br,u!=null;){$.cm=null
t=u.b
$.br=t
if(t==null)$.cl=null
u.a.$0()}},
k8:function(){$.hJ=!0
try{P.k4()}finally{$.cm=null
$.hJ=!1
if($.br!=null)$.hV().$1(P.iI())}},
iD:function(a){var u=new P.dt(H.l(a,{func:1,ret:-1}))
if($.br==null){$.cl=u
$.br=u
if(!$.hJ)$.hV().$1(P.iI())}else{$.cl.b=u
$.cl=u}},
k7:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.br
if(u==null){P.iD(a)
$.cm=$.cl
return}t=new P.dt(a)
s=$.cm
if(s==null){t.b=u
$.cm=t
$.br=t}else{t.b=s.b
s.b=t
$.cm=t
if(t.b==null)$.cl=t}},
kw:function(a){var u,t
u={func:1,ret:-1}
H.l(a,u)
t=$.M
if(C.k===t){P.hb(null,null,C.k,a)
return}t.toString
P.hb(null,null,t,H.l(t.c2(a),u))},
im:function(a,b){var u,t
u={func:1,ret:-1}
H.l(b,u)
t=$.M
if(t===C.k){t.toString
return P.hE(a,b)}return P.hE(a,H.l(t.c2(b),u))},
jR:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aE]}
H.l(b,u)
t=$.M
if(t===C.k){t.toString
return P.io(a,b)}s=t.dh(b,P.aE)
$.M.toString
return P.io(a,H.l(s,u))},
h9:function(a,b,c,d,e){var u={}
u.a=d
P.k7(new P.ha(u,e))},
iB:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.M
if(t===c)return d.$0()
$.M=c
u=t
try{t=d.$0()
return t}finally{$.M=u}},
iC:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.w(e,g)
t=$.M
if(t===c)return d.$1(e)
$.M=c
u=t
try{t=d.$1(e)
return t}finally{$.M=u}},
k6:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
t=$.M
if(t===c)return d.$2(e,f)
$.M=c
u=t
try{t=d.$2(e,f)
return t}finally{$.M=u}},
hb:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.c2(d):c.ik(d,-1)
P.iD(d)},
fD:function fD(a){this.a=a},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a){this.a=a},
fF:function fF(a){this.a=a},
dD:function dD(a){this.a=a
this.b=null
this.c=0},
h4:function h4(a,b){this.a=a
this.b=b},
h3:function h3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aJ:function aJ(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
al:function al(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
fL:function fL(a,b){this.a=a
this.b=b},
fP:function fP(a,b){this.a=a
this.b=b},
fM:function fM(a){this.a=a},
fN:function fN(a){this.a=a},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
fS:function fS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fT:function fT(a){this.a=a},
fR:function fR(a,b,c){this.a=a
this.b=b
this.c=c},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.c=c},
dt:function dt(a){this.a=a
this.b=null},
eZ:function eZ(){},
f0:function f0(a,b){this.a=a
this.b=b},
f1:function f1(a,b){this.a=a
this.b=b},
c_:function c_(){},
f_:function f_(){},
aE:function aE(){},
a7:function a7(a,b){this.a=a
this.b=b},
h6:function h6(){},
ha:function ha(a,b){this.a=a
this.b=b},
fZ:function fZ(){},
h0:function h0(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a,b){this.a=a
this.b=b},
h1:function h1(a,b,c){this.a=a
this.b=b
this.c=c},
jr:function(a,b,c){H.hk(a)
return H.d(H.ki(a,new H.aM([b,c])),"$ii4",[b,c],"$ai4")},
js:function(a,b,c,d){return new P.fW([d])},
iz:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
iy:function(a,b,c){var u=new P.fX(a,b,[c])
u.c=a.e
return u},
jm:function(a,b,c){var u,t
if(P.hK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.x])
t=$.cr()
C.a.h(t,a)
try{P.k3(a,u)}finally{if(0>=t.length)return H.j(t,-1)
t.pop()}t=P.ik(b,H.kp(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
hv:function(a,b,c){var u,t,s
if(P.hK(a))return b+"..."+c
u=new P.b7(b)
t=$.cr()
C.a.h(t,a)
try{s=u
s.a=P.ik(s.a,a,", ")}finally{if(0>=t.length)return H.j(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
hK:function(a){var u,t
for(u=0;t=$.cr(),u<t.length;++u)if(a===t[u])return!0
return!1},
k3:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.d(b,"$ia",[P.x],"$aa")
u=a.gX(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.i(u.gT())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.j(b,-1)
q=b.pop()
if(0>=b.length)return H.j(b,-1)
p=b.pop()}else{o=u.gT();++s
if(!u.B()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.j(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gT();++s
for(;u.B();o=n,n=m){m=u.gT();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.j(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.i(o)
q=H.i(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
i5:function(a){var u,t
u={}
if(P.hK(a))return"{...}"
t=new P.b7("")
try{C.a.h($.cr(),a)
t.a+="{"
u.a=!0
a.a8(0,new P.ep(u,t))
t.a+="}"}finally{u=$.cr()
if(0>=u.length)return H.j(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
fW:function fW(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cd:function cd(a){this.a=a
this.c=this.b=null},
fX:function fX(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
em:function em(){},
O:function O(){},
eo:function eo(){},
ep:function ep(a,b){this.a=a
this.b=b},
eq:function eq(){},
h2:function h2(){},
dz:function dz(){},
bE:function bE(){},
cz:function cz(){},
e0:function e0(){},
fn:function fn(a){this.a=a},
fo:function fo(){},
h5:function h5(a){this.b=this.a=0
this.c=a},
jl:function(a){if(a instanceof H.bD)return a.i(0)
return"Instance of '"+H.bm(a)+"'"},
jt:function(a,b,c,d){var u,t
H.w(b,d)
u=J.jo(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.V(u,t,b)
return H.d(u,"$ia",[d],"$aa")},
ju:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gX(a);s.B();)C.a.h(t,H.w(s.gT(),c))
if(b)return t
return H.d(J.ee(t),"$ia",u,"$aa")},
hD:function(a,b,c){var u,t
u=P.v
H.d(a,"$ih",[u],"$ah")
if(a.constructor===Array){H.d(a,"$iay",[u],"$aay")
t=a.length
c=P.ih(b,c,t,null,null,null)
return H.ig(b>0||c<t?C.a.ep(a,b,c):a)}return P.jP(a,b,c)},
jP:function(a,b,c){var u,t,s
H.d(a,"$ih",[P.v],"$ah")
u=J.dJ(a)
for(t=0;t<b;++t)if(!u.B())throw H.k(P.ap(b,0,t,null,null))
s=[]
for(;u.B();)s.push(u.gT())
return H.ig(s)},
jI:function(a,b,c){return new H.eg(a,H.jp(a,!1,!0,!1))},
ik:function(a,b,c){var u=J.dJ(b)
if(!u.B())return a
if(c.length===0){do a+=H.i(u.gT())
while(u.B())}else{a+=H.i(u.gT())
for(;u.B();)a=a+c+H.i(u.gT())}return a},
k0:function(a,b,c,d){var u,t,s,r,q,p
H.d(a,"$ia",[P.v],"$aa")
if(c===C.w){u=$.j9().b
u=u.test(b)}else u=!1
if(u)return b
t=C.A.it(H.w(b,H.ah(c,"bE",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.j(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jF(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
ji:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
jj:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cB:function(a){if(a>=10)return""+a
return"0"+a},
i2:function(a,b,c,d,e,f){return new P.aZ(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
e3:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ai(a)
if(typeof a==="string")return JSON.stringify(a)
return P.jl(a)},
jc:function(a){return new P.au(!1,null,null,a)},
hp:function(a,b,c){return new P.au(!0,a,b,c)},
eH:function(a,b,c){return new P.bn(null,null,!0,a,b,"Value not in range")},
ap:function(a,b,c,d,e){return new P.bn(b,c,!0,a,d,"Invalid value")},
ih:function(a,b,c,d,e,f){if(0>a||a>c)throw H.k(P.ap(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.k(P.ap(b,a,c,"end",f))
return b}return c},
bO:function(a,b,c,d,e){var u=H.a0(e==null?J.cs(b):e)
return new P.ed(b,u,!0,a,c,"Index out of range")},
af:function(a){return new P.fm(a)},
iq:function(a){return new P.fk(a)},
bF:function(a){return new P.dU(a)},
o:function(a){return new P.dw(a)},
hT:function(a){H.ku(a)},
Y:function Y(){},
ab:function ab(a,b){this.a=a
this.b=b},
t:function t(){},
aZ:function aZ(a){this.a=a},
dY:function dY(){},
dZ:function dZ(){},
b_:function b_(){},
cZ:function cZ(){},
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
ed:function ed(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fm:function fm(a){this.a=a},
fk:function fk(a){this.a=a},
eX:function eX(a){this.a=a},
dU:function dU(a){this.a=a},
eE:function eE(){},
d7:function d7(){},
dW:function dW(a){this.a=a},
dw:function dw(a){this.a=a},
e9:function e9(a,b,c){this.a=a
this.b=b
this.c=c},
v:function v(){},
h:function h(){},
ax:function ax(){},
a:function a(){},
B:function B(){},
a5:function a5(){},
H:function H(){},
ac:function ac(){},
x:function x(){},
b7:function b7(a){this.a=a},
kf:function(a){var u,t
u=J.P(a)
if(!!u.$ib0){t=u.gdq(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.dG(a.data,a.height,a.width)},
ke:function(a){if(a instanceof P.dG)return{data:a.a,height:a.b,width:a.c}
return a},
kd:function(a,b){var u={}
a.a8(0,new P.hc(u))
return u},
dG:function dG(a,b,c){this.a=a
this.b=b
this.c=c},
hc:function hc(a){this.a=a},
e5:function e5(a,b){this.a=a
this.b=b},
e6:function e6(){},
e7:function e7(){},
fV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jY:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fY:function fY(){},
aj:function aj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
m:function m(){},
cv:function cv(){},
cF:function cF(){},
d1:function d1(){},
bo:function bo(){},
d2:function d2(){},
d9:function d9(){},
dh:function dh(){}},W={
hr:function(a,b){var u=document.createElement("canvas")
return u},
jk:function(a){H.e(a,"$ibi")
return"wheel"},
fU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ix:function(a,b,c,d){var u,t
u=W.fU(W.fU(W.fU(W.fU(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a_:function(a,b,c,d,e){var u,t
u=W.iF(new W.fK(c),W.f)
t=u!=null
if(t&&!0){H.l(u,{func:1,args:[W.f]})
if(t)J.jb(a,b,u,!1)}return new W.fJ(a,b,u,!1,[e])},
iF:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.M
if(u===C.k)return a
return u.dh(a,b)},
n:function n(){},
dL:function dL(){},
dM:function dM(){},
cu:function cu(){},
bf:function bf(){},
bg:function bg(){},
aY:function aY(){},
bH:function bH(){},
dV:function dV(){},
bI:function bI(){},
bJ:function bJ(){},
dX:function dX(){},
cC:function cC(){},
fH:function fH(a,b){this.a=a
this.b=b},
U:function U(){},
f:function f(){},
bi:function bi(){},
e8:function e8(){},
bk:function bk(){},
cG:function cG(){},
b0:function b0(){},
bN:function bN(){},
az:function az(){},
bS:function bS(){},
a2:function a2(){},
fG:function fG(a){this.a=a},
G:function G(){},
bU:function bU(){},
eP:function eP(){},
aF:function aF(){},
ar:function ar(){},
f8:function f8(){},
b9:function b9(){},
fz:function fz(){},
aI:function aI(){},
cb:function cb(){},
dv:function dv(){},
fI:function fI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hH:function hH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fJ:function fJ(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
fK:function fK(a){this.a=a},
ao:function ao(){},
cE:function cE(a,b,c,d){var _=this
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
dS:function(a){var u=new O.K([a])
u.bA(a)
return u},
K:function K(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bR:function bR(){this.b=this.a=null},
cR:function cR(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
et:function et(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bQ:function bQ(){},
eu:function eu(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aB:function aB(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ew:function ew(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ex:function ex(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d4:function d4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
b8:function b8(){}},E={
e1:function(a,b,c,d,e,f){var u=new E.a8()
u.a=d
u.b=!0
u.seA(0,O.dS(E.a8))
u.y.aK(u.giV(),u.giY())
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
u.scD(0,e)
u.sdY(c)
return u},
jK:function(a,b){var u=new E.eK(a,b)
u.ew(a,b)
return u},
jQ:function(a,b,c,d,e){var u,t,s,r
u=J.P(a)
if(!!u.$ibf)return E.il(a,!0,!0,!0,!1)
t=W.hr(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdl(a).h(0,t)
r=E.il(t,!0,!0,!0,!1)
r.a=a
return r},
il:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dd()
t=P.jr(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.x,null)
s=C.m.bx(a,"webgl",t)
s=H.e(s==null?C.m.bx(a,"experimental-webgl",t):s,"$ibo")
if(s==null)H.p(P.o("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.jK(s,a)
r=new T.f3(s)
r.b=H.a0((s&&C.b).cA(s,3379))
r.c=H.a0(C.b.cA(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dl(a)
q=new X.ei()
q.c=new X.ae(!1,!1,!1)
q.shj(P.js(null,null,null,P.v))
r.b=q
q=new X.ey(r)
q.f=0
q.r=V.aR()
q.x=V.aR()
q.Q=1
q.ch=1
r.c=q
q=new X.en(r)
q.r=0
q.x=V.aR()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.f7(r)
q.e=0
q.f=V.aR()
q.r=V.aR()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sf4(H.b([],[[P.c_,P.H]]))
q=r.z
p=document
o=W.a2
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a_(p,"contextmenu",H.l(r.gfG(),n),!1,o))
q=r.z
m=W.f
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a_(a,"focus",H.l(r.gfM(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a_(a,"blur",H.l(r.gfA(),l),!1,m))
q=r.z
k=W.az
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a_(p,"keyup",H.l(r.gfQ(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a_(p,"keydown",H.l(r.gfO(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a_(a,"mousedown",H.l(r.gfU(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a_(a,"mouseup",H.l(r.gfY(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a_(a,"mousemove",H.l(r.gfW(),n),!1,o))
k=r.z
j=W.aI;(k&&C.a).h(k,W.a_(a,H.S(W.jk(a)),H.l(r.gh_(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a_(p,"mousemove",H.l(r.gfI(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a_(p,"mouseup",H.l(r.gfK(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a_(p,"pointerlockchange",H.l(r.gh1(),l),!1,m))
m=r.z
l=W.ar
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a_(a,"touchstart",H.l(r.ghf(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a_(a,"touchend",H.l(r.ghb(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a_(a,"touchmove",H.l(r.ghd(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ab(Date.now(),!1)
u.cy=0
u.d8()
return u},
dO:function dO(){},
a8:function a8(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eK:function eK(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eL:function eL(a){this.a=a},
eM:function eM(a){this.a=a},
eN:function eN(a){this.a=a},
dd:function dd(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f5:function f5(a){this.a=a}},Z={
hG:function(a,b,c){var u
H.d(c,"$ia",[P.v],"$aa")
u=a.createBuffer()
C.b.ak(a,b,u)
C.b.dj(a,b,new Int16Array(H.ck(c)),35044)
C.b.ak(a,b,null)
return new Z.dr(b,u)},
ak:function(a){return new Z.aH(a)},
dr:function dr(a,b){this.a=a
this.b=b},
cw:function cw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ds:function ds(a){this.a=a},
bC:function bC(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
b1:function b1(a,b,c){this.a=a
this.b=b
this.c=c},
aH:function aH(a){this.a=a}},D={
D:function(){var u=new D.aw()
u.sZ(null)
u.sar(null)
u.c=null
u.d=0
return u},
dR:function dR(){},
aw:function aw(){var _=this
_.d=_.c=_.b=_.a=null},
e4:function e4(a){this.a=a},
q:function q(a){this.a=a
this.b=null},
b2:function b2(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
b3:function b3(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
y:function y(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
i1:function(a,b){var u,t,s
u=new D.aK()
u.c=new V.Q(1,1,1)
u.a=V.jS()
t=u.b
u.b=b
b.gl().h(0,u.geB())
s=new D.y("mover",t,u.b,u,[U.W])
s.b=!0
u.an(s)
if(!u.c.p(0,a)){t=u.c
u.c=a
s=new D.y("color",t,a,u,[V.Q])
s.b=!0
u.an(s)}return u},
aK:function aK(){var _=this
_.d=_.c=_.b=_.a=null},
R:function R(){},
cN:function cN(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
d0:function d0(){},
d6:function d6(){},
da:function da(){},
db:function db(){},
dc:function dc(){}},X={cx:function cx(a,b){this.a=a
this.b=b},cM:function cM(a,b){this.a=a
this.b=b},ei:function ei(){var _=this
_.d=_.c=_.b=_.a=null},cP:function cP(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},en:function en(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},aP:function aP(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},ey:function ey(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bT:function bT(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},eG:function eG(){},df:function df(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},f7:function f7(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dl:function dl(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
eb:function(a,b,c,d,e,f,g){var u,t
u=new X.ea()
t=new V.an(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=V.jJ()
u.r=t
return u},
hB:function(a,b,c,d,e){var u,t,s
u=new X.d_()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gl().h(0,u.geN())
s=new D.y("mover",t,u.b,u,[U.W])
s.b=!0
u.ac(s)}s=u.c
if(!(Math.abs(s-b)<$.E().a)){u.c=b
s=new D.y("fov",s,b,u,[P.t])
s.b=!0
u.ac(s)}s=u.d
if(!(Math.abs(s-d)<$.E().a)){u.d=d
s=new D.y("near",s,d,u,[P.t])
s.b=!0
u.ac(s)}s=u.e
if(!(Math.abs(s-a)<$.E().a)){u.e=a
s=new D.y("far",s,a,u,[P.t])
s.b=!0
u.ac(s)}return u},
be:function be(){},
ea:function ea(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ec:function ec(){this.b=this.a=null},
d_:function d_(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
bq:function bq(){}},V={
kB:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.i.em(a-b,u)
return(a<0?a+u:a)+b},
J:function(a,b,c){if(a==null)return C.j.aa("null",c)
return C.j.aa(C.i.e9(Math.abs(a-0)<$.E().a?0:a,b),c+b+1)},
bv:function(a,b,c){var u,t,s,r,q,p
H.d(a,"$ia",[P.t],"$aa")
u=H.b([],[P.x])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.u)(a),++r){q=V.J(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.j(u,p)
C.a.V(u,p,C.j.aa(u[p],s))}return u},
hS:function(a,b){return C.i.jk(Math.pow(b,C.E.ci(Math.log(H.kc(a))/Math.log(b))))},
b5:function(){var u=$.i8
if(u==null){u=V.aC(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.i8=u}return u},
aC:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.Z(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
hA:function(a,b,c){return V.aC(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
jw:function(a,b,c,d){return V.aC(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
hz:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aC(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
i7:function(a,b,c,d){d=V.iv()
return V.i6(V.id(),d,new V.F(a,b,c))},
i6:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.t(0,Math.sqrt(c.A(c)))
t=b.aU(u)
s=t.t(0,Math.sqrt(t.A(t)))
r=u.aU(s)
q=new V.F(a.a,a.b,a.c)
p=s.K(0).A(q)
o=r.K(0).A(q)
n=u.K(0).A(q)
return V.aC(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aR:function(){var u=$.ic
if(u==null){u=new V.X(0,0)
$.ic=u}return u},
id:function(){var u=$.bV
if(u==null){u=new V.a9(0,0,0)
$.bV=u}return u},
jJ:function(){var u=$.ii
if(u==null){u=V.eJ(0,0,1,1)
$.ii=u}return u},
eJ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bX(a,b,c,d)},
dq:function(){var u=$.iu
if(u==null){u=new V.F(0,0,0)
$.iu=u}return u},
iv:function(){var u=$.it
if(u==null){u=new V.F(0,1,0)
$.it=u}return u},
jS:function(){var u=$.fp
if(u==null){u=new V.F(0,0,1)
$.fp=u}return u},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e2:function e2(a){this.a=a},
cT:function cT(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
Z:function Z(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
X:function X(a,b){this.a=a
this.b=b},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
aS:function aS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bX:function bX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b){this.a=a
this.b=b},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function(a){var u=new V.eQ()
u.ex(a)
return u},
dK:function dK(){},
aO:function aO(){},
cQ:function cQ(){},
aQ:function aQ(){this.a=null},
eQ:function eQ(){this.a=null},
bZ:function bZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
de:function de(a,b,c){this.a=a
this.b=b
this.c=c},
c2:function c2(a,b){this.a=a
this.b=b
this.c=null},
f6:function f6(){this.c=this.b=this.a=null},
c3:function c3(a){this.b=a
this.a=this.c=null},
kx:function(a){P.jR(C.B,new V.hn(a))},
jM:function(a,b){var u=new V.eU()
u.ey(a,!0)
return u},
hn:function hn(a){this.a=a},
eU:function eU(){this.b=this.a=null},
eW:function eW(a){this.a=a},
eV:function eV(a){this.a=a}},U={
hs:function(){var u=new U.dT()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
cy:function(a){var u=new U.bG()
u.sL(a)
return u},
hu:function(a){var u=new U.bM()
u.bA(U.W)
u.aK(u.geD(),u.gh5())
if(a!=null)u.aR(0,a)
u.e=null
u.f=V.b5()
u.r=0
return u},
dT:function dT(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bG:function bG(){this.b=this.a=null},
bM:function bM(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
W:function W(){},
dm:function dm(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dn:function dn(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dp:function dp(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cA:function cA(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},cD:function cD(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aq:function aq(){},bp:function bp(){},d8:function d8(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
jv:function(a,b){var u,t
u=a.ae
t=new A.cS(b,u)
t.cJ(b,u)
t.ev(a,b)
return t},
hF:function(a,b,c,d,e){var u=new A.fc(a,b,c,e)
u.f=d
u.shR(P.jt(d,0,!1,P.v))
return u},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
dN:function dN(a){this.a=a},
cS:function cS(a,b){var _=this
_.ba=_.dv=_.b9=_.ae=_.am=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dN=_.cb=_.dM=_.bn=_.dL=_.dK=_.bm=_.bl=_.dJ=_.dI=_.bk=_.bj=_.bi=_.dH=_.dG=_.bh=_.dF=_.dE=_.bg=_.dD=_.dC=_.bf=_.be=_.dB=_.dA=_.bd=_.bc=_.dz=_.dw=_.bb=null
_.cg=_.dR=_.cf=_.dQ=_.ce=_.dP=_.cd=_.dO=_.cc=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ev:function ev(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.am=b3
_.ae=b4
_.b9=b5},
c4:function c4(a,b,c){this.a=a
this.b=b
this.c=c},
c8:function c8(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
c6:function c6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
c9:function c9(a,b,c,d,e,f,g,h,i,j){var _=this
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
c7:function c7(a,b,c,d,e,f,g,h,i,j){var _=this
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
ca:function ca(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bY:function bY(){},
bh:function bh(a,b){this.a=a
this.b=b},
d5:function d5(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dg:function dg(){},
fi:function fi(a){this.a=a},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fe:function fe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ff:function ff(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fh:function fh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fc:function fc(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fd:function fd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
A:function A(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fg:function fg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fj:function fj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c5:function c5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
h8:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
ci:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.F(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.F(o+a3,n+a1,m+a2)
u.b=l
k=new V.F(o-a3,n-a1,m-a2)
u.c=k
j=new V.F(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.h8(t)
f=F.h8(u.b)
e=F.kz(d,a0,new F.h7(u,F.h8(u.c),F.h8(u.d),f,g,c),b)
if(e!=null)a.iU(e)},
kz:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,{func:1,ret:-1,args:[F.ag,P.t,P.t]})
if(a<1)return
if(b<1)return
u=F.hC()
t=H.b([],[F.ag])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.fq(null,null,new V.an(p,0,0,1),null,null,new V.X(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c7(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.fq(null,null,new V.an(j,i,h,1),null,null,new V.X(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c7(d))}}u.d.ih(a+1,b+1,t)
return u},
bK:function(a,b,c){var u,t
u=new F.V()
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
u.a.a.a0()
return u},
jq:function(a,b){var u,t
u=new F.aN()
t=a.a
if(t==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.o("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a0()
return u},
hC:function(){var u,t
u=new F.d3()
t=new F.fr(u)
t.b=!1
t.shS(H.b([],[F.ag]))
u.a=t
t=new F.eT(u)
t.sbT(H.b([],[F.b6]))
u.b=t
t=new F.eS(u)
t.sff(H.b([],[F.aN]))
u.c=t
t=new F.eR(u)
t.sf5(H.b([],[F.V]))
u.d=t
u.e=null
return u},
fq:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ag()
t=new F.fw(u)
t.sbT(H.b([],[F.b6]))
u.b=t
t=new F.fv(u)
s=[F.aN]
t.sfg(H.b([],s))
t.sfh(H.b([],s))
u.c=t
t=new F.fs(u)
s=[F.V]
t.sf6(H.b([],s))
t.sf7(H.b([],s))
t.sf8(H.b([],s))
u.d=t
h=$.j6()
u.e=0
t=$.at()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aV().a)!==0?e:null
u.x=(s&$.aU().a)!==0?b:null
u.y=(s&$.aW().a)!==0?f:null
u.z=(s&$.aX().a)!==0?g:null
u.Q=(s&$.j7().a)!==0?c:null
u.ch=(s&$.bz().a)!==0?i:0
u.cx=(s&$.aT().a)!==0?a:null
return u},
h7:function h7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
V:function V(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aN:function aN(){this.b=this.a=null},
b6:function b6(){this.a=null},
d3:function d3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eR:function eR(a){this.a=a
this.b=null},
eS:function eS(a){this.a=a
this.b=null},
eT:function eT(a){this.a=a
this.b=null},
ag:function ag(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fy:function fy(a){this.a=a},
fx:function fx(a){this.a=a},
fr:function fr(a){this.a=a
this.c=this.b=null},
fs:function fs(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ft:function ft(a,b){this.a=a
this.b=b},
fu:function fu(a,b){this.a=a
this.b=b},
fv:function fv(a){this.a=a
this.c=this.b=null},
fw:function fw(a){this.a=a
this.b=null}},T={c0:function c0(){},c1:function c1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},f3:function f3(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},f4:function f4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},K={
iP:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
u=V.jM("Test 033",!0)
t=W.hr(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.l.Y(u.a,t)
s=[P.x]
u.de(H.b(["Test of a sterioscopic scene."],s))
u.de(H.b(["\xab[Back to Tests|../]"],s))
r=C.C.eh(document,"testCanvas")
if(r==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
q=E.jQ(r,!0,!0,!0,!1)
p=F.hC()
F.ci(p,null,null,1,1,1,0,0,1)
F.ci(p,null,null,1,1,0,1,0,3)
F.ci(p,null,null,1,1,0,0,1,2)
F.ci(p,null,null,1,1,-1,0,0,0)
F.ci(p,null,null,1,1,0,-1,0,0)
F.ci(p,null,null,1,1,0,0,-1,3)
p.au()
o=E.e1(null,!0,null,"",p,null)
n=E.e1(null,!0,null,"",null,null)
for(m=-1.6;m<=1.7;m+=0.8)for(l=-1.6;l<=1.7;l+=0.8)for(k=-1.6;k<=1.7;k+=0.8){j=new V.Z(1,0,0,m,0,1,0,l,0,0,1,k,0,0,0,1).q(0,new V.Z(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
i=E.e1(null,!0,null,"",null,null)
u=new U.bG()
u.sL(j)
i.sdY(u)
u=i.y
s=H.r(u,0)
H.w(o,s)
h=[s]
if(u.aP(H.b([o],h))){g=u.a
f=g.length
C.a.h(g,o)
s=H.d(H.b([o],h),"$ih",[s],"$ah")
u=u.c
if(u!=null)u.$2(f,s)}u=n.y
s=H.r(u,0)
H.w(i,s)
h=[s]
if(u.aP(H.b([i],h))){g=u.a
f=g.length
C.a.h(g,i)
s=H.d(H.b([i],h),"$ih",[s],"$ah")
u=u.c
if(u!=null)u.$2(f,s)}}e=q.f.dV("../resources/diceColor")
d=new O.cR()
d.seU(O.dS(V.Z))
d.e.aK(d.gfu(),d.gfw())
u=new O.aB(d,"emission")
u.c=C.c
u.f=new V.Q(0,0,0)
d.f=u
u=new O.aB(d,"ambient")
u.c=C.c
u.f=new V.Q(0,0,0)
d.r=u
u=new O.aB(d,"diffuse")
u.c=C.c
u.f=new V.Q(0,0,0)
d.x=u
u=new O.aB(d,"invDiffuse")
u.c=C.c
u.f=new V.Q(0,0,0)
d.y=u
u=new O.ex(d,"specular")
u.c=C.c
u.f=new V.Q(0,0,0)
u.ch=100
d.z=u
u=new O.eu(d,"bump")
u.c=C.c
d.Q=u
d.ch=null
u=new O.aB(d,"reflect")
u.c=C.c
u.f=new V.Q(0,0,0)
d.cx=u
u=new O.ew(d,"refract")
u.c=C.c
u.f=new V.Q(0,0,0)
u.ch=1
d.cy=u
u=new O.et(d,"alpha")
u.c=C.c
u.f=1
d.db=u
u=new D.cN()
u.bA(D.R)
u.sf2(H.b([],[D.aK]))
u.shi(H.b([],[D.d0]))
u.shB(H.b([],[D.d6]))
u.shO(H.b([],[D.da]))
u.shP(H.b([],[D.db]))
u.shQ(H.b([],[D.dc]))
u.Q=null
u.ch=null
u.cB(u.gfp(),u.gh3(),u.gh7())
d.dx=u
s=u.Q
if(s==null){s=D.D()
u.Q=s
u=s}else u=s
u.h(0,d.gho())
u=d.dx
s=u.ch
if(s==null){s=D.D()
u.ch=s
u=s}else u=s
u.h(0,d.gaD())
d.dy=null
u=d.dx
s=U.cy(V.i7(-1,-1,-1,null))
u.h(0,D.i1(new V.Q(1,0.9,0.9),s))
u=d.dx
s=U.cy(V.i7(1,1,2,null))
u.h(0,D.i1(new V.Q(0.2,0.2,0.35),s))
u=d.r
u.sal(0,new V.Q(0.2,0.2,0.2))
d.r.sb0(e)
u=d.x
u.sal(0,new V.Q(0.8,0.8,0.8))
d.x.sb0(e)
u=d.z
u.sal(0,new V.Q(0.7,0.7,0.7))
u=d.z
if(u.c===C.c){u.c=C.f
u.bz()
u.bW(100)
s=u.a
s.a=null
s.M(null)}u.bW(10)
d.Q.sb0(q.f.dV("../resources/diceBumpMap"))
c=U.hu(null)
u=q.r
s=new U.dn()
h=U.hs()
h.scz(0,!0)
h.sco(6.283185307179586)
h.scq(0)
h.sa3(0,0)
h.scp(100)
h.sO(0)
h.sc8(0.5)
s.b=h
g=s.gaA()
h.gl().h(0,g)
h=U.hs()
h.scz(0,!0)
h.sco(6.283185307179586)
h.scq(0)
h.sa3(0,0)
h.scp(100)
h.sO(0)
h.sc8(0.5)
s.c=h
h.gl().h(0,g)
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
b=new X.ae(!1,!1,!1)
a=s.d
s.d=b
h=[X.ae]
g=new D.y("modifiers",a,b,s,h)
g.b=!0
s.I(g)
g=s.f
if(g!==!1){s.f=!1
g=new D.y("invertX",g,!1,s,[P.Y])
g.b=!0
s.I(g)}g=s.r
if(g!==!1){s.r=!1
g=new D.y("invertY",g,!1,s,[P.Y])
g.b=!0
s.I(g)}s.aS(u)
c.h(0,s)
u=q.r
s=new U.dm()
g=U.hs()
g.scz(0,!0)
g.sco(6.283185307179586)
g.scq(0)
g.sa3(0,0)
g.scp(100)
g.sO(0)
g.sc8(0.2)
s.b=g
g.gl().h(0,s.gaA())
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
b=new X.ae(!0,!1,!1)
a=s.c
s.c=b
g=new D.y("modifiers",a,b,s,h)
g.b=!0
s.I(g)
s.aS(u)
c.h(0,s)
u=q.r
s=new U.dp()
s.c=0.01
s.d=0
s.e=0
b=new X.ae(!1,!1,!1)
s.b=b
h=new D.y("modifiers",null,b,s,h)
h.b=!0
s.I(h)
s.aS(u)
c.h(0,s)
c.h(0,U.cy(V.hA(0,0,6)))
a0=X.eb(!0,!0,!1,null,2000,null,0)
if(a0.b){a0.b=!1
u=new D.y("clearColor",!0,!1,a0,[P.Y])
u.b=!0
a0.ac(u)}u=q.f.iS("../resources/maskonaive",".jpg")
a1=new M.cA()
a1.saT(null)
a1.saY(0,null)
a1.saZ(null)
s=E.e1(null,!0,null,"",null,null)
p=F.hC()
h=p.a
g=new V.F(-1,-1,1)
g=g.t(0,Math.sqrt(g.A(g)))
a2=h.b8(new V.aS(1,2,4,6),new V.an(1,0,0,1),new V.a9(-1,-1,0),new V.X(0,1),g,null)
h=p.a
g=new V.F(1,-1,1)
g=g.t(0,Math.sqrt(g.A(g)))
a3=h.b8(new V.aS(0,3,4,6),new V.an(0,0,1,1),new V.a9(1,-1,0),new V.X(1,1),g,null)
h=p.a
g=new V.F(1,1,1)
g=g.t(0,Math.sqrt(g.A(g)))
a4=h.b8(new V.aS(0,2,5,6),new V.an(0,1,0,1),new V.a9(1,1,0),new V.X(1,0),g,null)
h=p.a
g=V.aR()
a5=new V.F(-1,1,1)
a5=a5.t(0,Math.sqrt(a5.A(a5)))
a6=h.b8(new V.aS(0,2,4,7),new V.an(1,1,0,1),new V.a9(-1,1,0),g,a5,null)
p.d.ig(H.b([a2,a3,a4,a6],[F.ag]))
p.au()
s.scD(0,p)
a1.d=s
a1.e=null
s=new O.d4()
s.b=1.0471975511965976
s.d=new V.Q(1,1,1)
a=s.c
s.c=u
u.gl().h(0,s.gaD())
u=new D.y("boxTexture",a,s.c,s,[T.c1])
u.b=!0
s.M(u)
a1.saZ(s)
a7=new M.cD()
a7.seX(0,O.dS(E.a8))
a7.d.aK(a7.gfC(),a7.gfE())
a7.e=null
a7.f=null
a7.r=null
a7.x=null
a8=X.eb(!0,!0,!1,null,2000,null,0)
a7.saT(null)
a7.saY(0,a8)
a7.saZ(null)
a7.saZ(d)
a7.d.h(0,n)
u=M.aq
s=H.b([a1,a7],[u])
h=new M.d8()
g=U.cy(null)
h.a=g
a5=U.cy(null)
h.b=a5
a9=U.W
b0=[a9]
g=U.hu(H.b([null,g],b0))
h.c=g
b0=U.hu(H.b([null,a5],b0))
h.d=b0
h.e=X.hB(2000,1.0471975511965976,g,0.1,null)
h.f=X.hB(2000,1.0471975511965976,b0,0.1,null)
h.r=V.eJ(0,0,0.5,1)
h.x=V.eJ(0.5,0,0.5,1)
h.shh(O.dS(u))
h.z.aK(h.gfs(),h.gh9())
h.z.aR(0,s)
h.Q=0.1
h.ch=12
h.cx=null
h.cy=null
u=h.c.a
if(0>=u.length)return H.j(u,0)
if(!J.N(u[0],c)){u=h.c
g=u.a
if(0>=g.length)return H.j(g,0)
a=g[0]
u.V(0,0,c)
h.d.V(0,0,c)
a9=new D.y("cameraMover",a,c,h,[a9])
a9.b=!0
h.R(a9)}u=h.y
if(u!==a0){if(u!=null)u.gl().N(0,h.gP())
a=h.y
h.y=a0
a0.gl().h(0,h.gP())
u=new D.y("target",a,h.y,h,[X.bq])
u.b=!0
h.R(u)}h.z.aR(0,s)
h.Q=0.1
h.ch=12
b1=Math.atan2(0.1,12)
u=h.a
s=h.Q
if(typeof s!=="number")return s.K()
u.sL(V.hA(-s,0,0).q(0,V.hz(b1)))
h.b.sL(V.hA(h.Q,0,0).q(0,V.hz(-b1)))
u=q.d
if(u!==h){if(u!=null)u.gl().N(0,q.gcK())
q.d=h
h.gl().h(0,q.gcK())
q.cL()}V.kx(q)}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.hx.prototype={}
J.a1.prototype={
p:function(a,b){return a===b},
gE:function(a){return H.bW(a)},
i:function(a){return"Instance of '"+H.bm(a)+"'"}}
J.ef.prototype={
i:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$iY:1}
J.cJ.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gE:function(a){return 0},
$iB:1}
J.cL.prototype={
gE:function(a){return 0},
i:function(a){return String(a)}}
J.eF.prototype={}
J.di.prototype={}
J.b4.prototype={
i:function(a){var u=a[$.iW()]
if(u==null)return this.er(a)
return"JavaScript function for "+H.i(J.ai(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iht:1}
J.ay.prototype={
h:function(a,b){H.w(b,H.r(a,0))
if(!!a.fixed$length)H.p(P.af("add"))
a.push(b)},
N:function(a,b){var u
if(!!a.fixed$length)H.p(P.af("remove"))
for(u=0;u<a.length;++u)if(J.N(a[u],b)){a.splice(u,1)
return!0}return!1},
aR:function(a,b){var u,t
H.d(b,"$ih",[H.r(a,0)],"$ah")
if(!!a.fixed$length)H.p(P.af("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.u)(b),++t)a.push(b[t])},
a8:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.k(P.bF(a))}},
w:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.V(u,t,H.i(a[t]))
return u.join(b)},
iP:function(a){return this.w(a,"")},
a7:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
ep:function(a,b,c){var u=a.length
if(b>u)throw H.k(P.ap(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.k(P.ap(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.r(a,0)])
return H.b(a.slice(b,c),[H.r(a,0)])},
gcl:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.k(H.jn())},
aG:function(a,b){var u
for(u=0;u<a.length;++u)if(J.N(a[u],b))return!0
return!1},
i:function(a){return P.hv(a,"[","]")},
gX:function(a){return new J.a6(a,a.length,0,[H.r(a,0)])},
gE:function(a){return H.bW(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.p(P.af("set length"))
if(b<0)throw H.k(P.ap(b,0,null,"newLength",null))
a.length=b},
V:function(a,b,c){H.w(c,H.r(a,0))
if(!!a.immutable$list)H.p(P.af("indexed set"))
if(b>=a.length||b<0)throw H.k(H.co(a,b))
a[b]=c},
$ih:1,
$ia:1}
J.hw.prototype={}
J.a6.prototype={
gT:function(){return this.d},
B:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.k(H.u(u))
s=this.c
if(s>=t){this.scN(null)
return!1}this.scN(u[s]);++this.c
return!0},
scN:function(a){this.d=H.w(a,H.r(this,0))},
$iax:1}
J.cK.prototype={
jk:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.k(P.af(""+a+".toInt()"))},
ci:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.k(P.af(""+a+".floor()"))},
ag:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.k(P.af(""+a+".round()"))},
e9:function(a,b){var u,t
if(b>20)throw H.k(P.ap(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
em:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eu:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.da(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.da(a,b)},
da:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.k(P.af("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
b6:function(a,b){var u
if(a>0)u=this.hA(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hA:function(a,b){return b>31?0:a>>>b},
$it:1,
$ia5:1}
J.cI.prototype={$iv:1}
J.cH.prototype={}
J.bP.prototype={
c6:function(a,b){if(b<0)throw H.k(H.co(a,b))
if(b>=a.length)H.p(H.co(a,b))
return a.charCodeAt(b)},
b3:function(a,b){if(b>=a.length)throw H.k(H.co(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.k(P.hp(b,null,null))
return a+b},
cG:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.k(P.eH(b,null,null))
if(b>c)throw H.k(P.eH(b,null,null))
if(c>a.length)throw H.k(P.eH(c,null,null))
return a.substring(b,c)},
cF:function(a,b){return this.cG(a,b,null)},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.k(C.z)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
j1:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.q(c,u)+a},
aa:function(a,b){return this.j1(a,b," ")},
i:function(a){return a},
gE:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$iia:1,
$ix:1}
H.T.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.j.c6(this.a,b)},
$adk:function(){return[P.v]},
$aO:function(){return[P.v]},
$ah:function(){return[P.v]},
$aa:function(){return[P.v]}}
H.e_.prototype={}
H.cO.prototype={
gT:function(){return this.d},
B:function(){var u,t,s,r
u=this.a
t=J.hP(u)
s=t.gm(u)
if(this.b!==s)throw H.k(P.bF(u))
r=this.c
if(r>=s){this.saM(null)
return!1}this.saM(t.a7(u,r));++this.c
return!0},
saM:function(a){this.d=H.w(a,H.r(this,0))},
$iax:1}
H.er.prototype={
gX:function(a){return new H.es(J.dJ(this.a),this.b,this.$ti)},
gm:function(a){return J.cs(this.a)},
a7:function(a,b){return this.b.$1(J.hX(this.a,b))},
$ah:function(a,b){return[b]}}
H.es.prototype={
B:function(){var u=this.b
if(u.B()){this.saM(this.c.$1(u.gT()))
return!0}this.saM(null)
return!1},
gT:function(){return this.a},
saM:function(a){this.a=H.w(a,H.r(this,1))},
$aax:function(a,b){return[b]}}
H.fA.prototype={
gX:function(a){return new H.fB(J.dJ(this.a),this.b,this.$ti)}}
H.fB.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(t.$1(u.gT()))return!0
return!1},
gT:function(){return this.a.gT()}}
H.bj.prototype={}
H.dk.prototype={}
H.dj.prototype={}
H.eI.prototype={}
H.f9.prototype={
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
H.eD.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eh.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.i(this.a)+")"}}
H.fl.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ho.prototype={
$1:function(a){if(!!J.P(a).$ib_)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:13}
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
H.bD.prototype={
i:function(a){return"Closure '"+H.bm(this).trim()+"'"},
$iht:1,
gjq:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.f2.prototype={}
H.eY.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.by(u)+"'"}}
H.bA.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bA))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gE:function(a){var u,t
u=this.c
if(u==null)t=H.bW(this.a)
else t=typeof u!=="object"?J.bd(u):H.bW(u)
return(t^H.bW(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.bm(u)+"'")}}
H.fb.prototype={
i:function(a){return this.a}}
H.dQ.prototype={
i:function(a){return this.a}}
H.eO.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.aM.prototype={
gm:function(a){return this.a},
dn:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.cW(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.cW(t,a)}else return this.iN(a)},
iN:function(a){var u=this.d
if(u==null)return!1
return this.cj(this.bG(u,J.bd(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.b4(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.b4(r,b)
s=t==null?null:t.b
return s}else return this.iO(b)},
iO:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bG(u,J.bd(a)&0x3ffffff)
s=this.cj(t,a)
if(s<0)return
return t[s].b},
V:function(a,b,c){var u,t,s,r,q,p
H.w(b,H.r(this,0))
H.w(c,H.r(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bQ()
this.b=u}this.cP(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bQ()
this.c=t}this.cP(t,b,c)}else{s=this.d
if(s==null){s=this.bQ()
this.d=s}r=J.bd(b)&0x3ffffff
q=this.bG(s,r)
if(q==null)this.bX(s,r,[this.bR(b,c)])
else{p=this.cj(q,b)
if(p>=0)q[p].b=c
else q.push(this.bR(b,c))}}},
a8:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.k(P.bF(this))
u=u.c}},
cP:function(a,b,c){var u
H.w(b,H.r(this,0))
H.w(c,H.r(this,1))
u=this.b4(a,b)
if(u==null)this.bX(a,b,this.bR(b,c))
else u.b=c},
bR:function(a,b){var u,t
u=new H.ej(H.w(a,H.r(this,0)),H.w(b,H.r(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
cj:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.N(a[t].a,b))return t
return-1},
i:function(a){return P.i5(this)},
b4:function(a,b){return a[b]},
bG:function(a,b){return a[b]},
bX:function(a,b,c){a[b]=c},
f1:function(a,b){delete a[b]},
cW:function(a,b){return this.b4(a,b)!=null},
bQ:function(){var u=Object.create(null)
this.bX(u,"<non-identifier-key>",u)
this.f1(u,"<non-identifier-key>")
return u},
$ii4:1}
H.ej.prototype={}
H.ek.prototype={
gm:function(a){return this.a.a},
gX:function(a){var u,t
u=this.a
t=new H.el(u,u.r,this.$ti)
t.c=u.e
return t}}
H.el.prototype={
gT:function(){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.k(P.bF(u))
else{u=this.c
if(u==null){this.scO(null)
return!1}else{this.scO(u.a)
this.c=this.c.c
return!0}}},
scO:function(a){this.d=H.w(a,H.r(this,0))},
$iax:1}
H.hg.prototype={
$1:function(a){return this.a(a)},
$S:13}
H.hh.prototype={
$2:function(a,b){return this.a(a,b)},
$S:27}
H.hi.prototype={
$1:function(a){return this.a(H.S(a))},
$S:30}
H.eg.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$iia:1}
H.cX.prototype={$ikU:1}
H.cU.prototype={
gm:function(a){return a.length},
$iaL:1,
$aaL:function(){}}
H.cV.prototype={
j:function(a,b){H.cj(b,a,a.length)
return a[b]},
$abj:function(){return[P.t]},
$aO:function(){return[P.t]},
$ih:1,
$ah:function(){return[P.t]},
$ia:1,
$aa:function(){return[P.t]}}
H.cW.prototype={
$abj:function(){return[P.v]},
$aO:function(){return[P.v]},
$ih:1,
$ah:function(){return[P.v]},
$ia:1,
$aa:function(){return[P.v]}}
H.ez.prototype={
j:function(a,b){H.cj(b,a,a.length)
return a[b]}}
H.eA.prototype={
j:function(a,b){H.cj(b,a,a.length)
return a[b]}}
H.eB.prototype={
j:function(a,b){H.cj(b,a,a.length)
return a[b]}}
H.cY.prototype={
gm:function(a){return a.length},
j:function(a,b){H.cj(b,a,a.length)
return a[b]},
$ikV:1}
H.eC.prototype={
gm:function(a){return a.length},
j:function(a,b){H.cj(b,a,a.length)
return a[b]}}
H.ce.prototype={}
H.cf.prototype={}
H.cg.prototype={}
H.ch.prototype={}
P.fD.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:14}
P.fC.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:25}
P.fE.prototype={
$0:function(){this.a.$0()},
$S:2}
P.fF.prototype={
$0:function(){this.a.$0()},
$S:2}
P.dD.prototype={
eL:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bu(new P.h4(this,b),0),a)
else throw H.k(P.af("`setTimeout()` not found."))},
eM:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bu(new P.h3(this,a,Date.now(),b),0),a)
else throw H.k(P.af("Periodic timer."))},
$iaE:1}
P.h4.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.h3.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.eu(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.aJ.prototype={
iT:function(a){if(this.c!==6)return!0
return this.b.b.cu(H.l(this.d,{func:1,ret:P.Y,args:[P.H]}),a.a,P.Y,P.H)},
iL:function(a){var u,t,s,r
u=this.e
t=P.H
s={futureOr:1,type:H.r(this,1)}
r=this.b.b
if(H.dH(u,{func:1,args:[P.H,P.ac]}))return H.hO(r.je(u,a.a,a.b,null,t,P.ac),s)
else return H.hO(r.cu(H.l(u,{func:1,args:[P.H]}),a.a,null,t),s)}}
P.al.prototype={
e8:function(a,b,c){var u,t,s,r
u=H.r(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.M
if(t!==C.k){t.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.k5(b,t)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.al(0,$.M,[c])
r=b==null?1:3
this.cQ(new P.aJ(s,r,a,b,[u,c]))
return s},
jj:function(a,b){return this.e8(a,null,b)},
cQ:function(a){var u,t
u=this.a
if(u<=1){a.a=H.e(this.c,"$iaJ")
this.c=a}else{if(u===2){t=H.e(this.c,"$ial")
u=t.a
if(u<4){t.cQ(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.hb(null,null,u,H.l(new P.fL(this,a),{func:1,ret:-1}))}},
d6:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.e(this.c,"$iaJ")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.e(this.c,"$ial")
t=p.a
if(t<4){p.d6(a)
return}this.a=t
this.c=p.c}u.a=this.b5(a)
t=this.b
t.toString
P.hb(null,null,t,H.l(new P.fP(u,this),{func:1,ret:-1}))}},
bV:function(){var u=H.e(this.c,"$iaJ")
this.c=null
return this.b5(u)},
b5:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cS:function(a){var u,t,s
u=H.r(this,0)
H.hO(a,{futureOr:1,type:u})
t=this.$ti
if(H.cn(a,"$ibL",t,"$abL"))if(H.cn(a,"$ial",t,null))P.iw(a,this)
else P.jX(a,this)
else{s=this.bV()
H.w(a,u)
this.a=4
this.c=a
P.cc(this,s)}},
cT:function(a,b){var u
H.e(b,"$iac")
u=this.bV()
this.a=8
this.c=new P.a7(a,b)
P.cc(this,u)},
$ibL:1}
P.fL.prototype={
$0:function(){P.cc(this.a,this.b)},
$S:2}
P.fP.prototype={
$0:function(){P.cc(this.b,this.a.a)},
$S:2}
P.fM.prototype={
$1:function(a){var u=this.a
u.a=0
u.cS(a)},
$S:14}
P.fN.prototype={
$2:function(a,b){H.e(b,"$iac")
this.a.cT(a,b)},
$1:function(a){return this.$2(a,null)},
$S:33}
P.fO.prototype={
$0:function(){this.a.cT(this.b,this.c)},
$S:2}
P.fS.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.e7(H.l(r.d,{func:1}),null)}catch(q){t=H.bc(q)
s=H.bw(q)
if(this.d){r=H.e(this.a.a.c,"$ia7").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.e(this.a.a.c,"$ia7")
else p.b=new P.a7(t,s)
p.a=!0
return}if(!!J.P(u).$ibL){if(u instanceof P.al&&u.a>=4){if(u.a===8){r=this.b
r.b=H.e(u.c,"$ia7")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.jj(new P.fT(o),null)
r.a=!1}},
$S:3}
P.fT.prototype={
$1:function(a){return this.a},
$S:22}
P.fR.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.r(s,0)
q=H.w(this.c,r)
p=H.r(s,1)
this.a.b=s.b.b.cu(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bc(o)
t=H.bw(o)
s=this.a
s.b=new P.a7(u,t)
s.a=!0}},
$S:3}
P.fQ.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.e(this.a.a.c,"$ia7")
r=this.c
if(r.iT(u)&&r.e!=null){q=this.b
q.b=r.iL(u)
q.a=!1}}catch(p){t=H.bc(p)
s=H.bw(p)
r=H.e(this.a.a.c,"$ia7")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a7(t,s)
n.a=!0}},
$S:3}
P.dt.prototype={}
P.eZ.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.al(0,$.M,[P.v])
u.a=0
s=H.r(this,0)
r=H.l(new P.f0(u,this),{func:1,ret:-1,args:[s]})
H.l(new P.f1(u,t),{func:1,ret:-1})
W.a_(this.a,this.b,r,!1,s)
return t}}
P.f0.prototype={
$1:function(a){H.w(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.B,args:[H.r(this.b,0)]}}}
P.f1.prototype={
$0:function(){this.b.cS(this.a.a)},
$S:2}
P.c_.prototype={}
P.f_.prototype={}
P.aE.prototype={}
P.a7.prototype={
i:function(a){return H.i(this.a)},
$ib_:1}
P.h6.prototype={$il7:1}
P.ha.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.cZ()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.k(u)
s=H.k(u)
s.stack=t.i(0)
throw s},
$S:2}
P.fZ.prototype={
jf:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
try{if(C.k===$.M){a.$0()
return}P.iB(null,null,this,a,-1)}catch(s){u=H.bc(s)
t=H.bw(s)
P.h9(null,null,this,u,H.e(t,"$iac"))}},
jg:function(a,b,c){var u,t,s
H.l(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.k===$.M){a.$1(b)
return}P.iC(null,null,this,a,b,-1,c)}catch(s){u=H.bc(s)
t=H.bw(s)
P.h9(null,null,this,u,H.e(t,"$iac"))}},
ik:function(a,b){return new P.h0(this,H.l(a,{func:1,ret:b}),b)},
c2:function(a){return new P.h_(this,H.l(a,{func:1,ret:-1}))},
dh:function(a,b){return new P.h1(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
e7:function(a,b){H.l(a,{func:1,ret:b})
if($.M===C.k)return a.$0()
return P.iB(null,null,this,a,b)},
cu:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.M===C.k)return a.$1(b)
return P.iC(null,null,this,a,b,c,d)},
je:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.M===C.k)return a.$2(b,c)
return P.k6(null,null,this,a,b,c,d,e,f)}}
P.h0.prototype={
$0:function(){return this.a.e7(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.h_.prototype={
$0:function(){return this.a.jf(this.b)},
$S:3}
P.h1.prototype={
$1:function(a){var u=this.c
return this.a.jg(this.b,H.w(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.fW.prototype={
gX:function(a){return P.iy(this,this.r,H.r(this,0))},
gm:function(a){return this.a},
h:function(a,b){var u
H.w(b,H.r(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.iz()
this.c=u}return this.eY(u,b)}else return this.eP(b)},
eP:function(a){var u,t,s
H.w(a,H.r(this,0))
u=this.d
if(u==null){u=P.iz()
this.d=u}t=this.cU(a)
s=u[t]
if(s==null)u[t]=[this.bC(a)]
else{if(this.d_(s,a)>=0)return!1
s.push(this.bC(a))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hl(this.c,b)
else return this.hk(b)},
hk:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.fa(u,a)
s=this.d_(t,a)
if(s<0)return!1
this.dc(t.splice(s,1)[0])
return!0},
eY:function(a,b){H.w(b,H.r(this,0))
if(H.e(a[b],"$icd")!=null)return!1
a[b]=this.bC(b)
return!0},
hl:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$icd")
if(u==null)return!1
this.dc(u)
delete a[b]
return!0},
d0:function(){this.r=1073741823&this.r+1},
bC:function(a){var u,t
u=new P.cd(H.w(a,H.r(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.d0()
return u},
dc:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.d0()},
cU:function(a){return J.bd(a)&1073741823},
fa:function(a,b){return a[this.cU(b)]},
d_:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cd.prototype={}
P.fX.prototype={
gT:function(){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.k(P.bF(u))
else{u=this.c
if(u==null){this.scR(null)
return!1}else{this.scR(H.w(u.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
scR:function(a){this.d=H.w(a,H.r(this,0))},
$iax:1}
P.em.prototype={$ih:1,$ia:1}
P.O.prototype={
gX:function(a){return new H.cO(a,this.gm(a),0,[H.hf(this,a,"O",0)])},
a7:function(a,b){return this.j(a,b)},
jm:function(a,b){var u,t
u=H.b([],[H.hf(this,a,"O",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.V(u,t,this.j(a,t))
return u},
jl:function(a){return this.jm(a,!0)},
i:function(a){return P.hv(a,"[","]")}}
P.eo.prototype={}
P.ep.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.i(a)
u.a=t+": "
u.a+=H.i(b)},
$S:11}
P.eq.prototype={
gm:function(a){return this.a},
i:function(a){return P.i5(this)},
$iaA:1}
P.h2.prototype={
i:function(a){return P.hv(this,"{","}")},
a7:function(a,b){var u,t,s
if(b<0)H.p(P.ap(b,0,null,"index",null))
for(u=P.iy(this,this.r,H.r(this,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.k(P.bO(b,this,"index",null,t))},
$ih:1,
$iij:1}
P.dz.prototype={}
P.bE.prototype={}
P.cz.prototype={}
P.e0.prototype={
$abE:function(){return[P.x,[P.a,P.v]]}}
P.fn.prototype={}
P.fo.prototype={
iu:function(a,b,c){var u,t,s
c=P.ih(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.h5(t)
if(s.f9(a,b,c)!==c)s.dd(C.j.c6(a,c-1),0)
return new Uint8Array(t.subarray(0,H.k1(0,s.b,t.length)))},
it:function(a){return this.iu(a,0,null)},
$acz:function(){return[P.x,[P.a,P.v]]}}
P.h5.prototype={
dd:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.j(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.j(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.j(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.j(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.j(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.j(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.j(u,t)
u[t]=128|a&63
return!1}},
f9:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.c6(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.b3(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dd(r,C.j.b3(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.j(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.j(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.j(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.j(u,q)
u[q]=128|r&63}}return s}}
P.Y.prototype={}
P.ab.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ab&&this.a===b.a&&!0},
gE:function(a){var u=this.a
return(u^C.h.b6(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.ji(H.jE(this))
t=P.cB(H.jC(this))
s=P.cB(H.jy(this))
r=P.cB(H.jz(this))
q=P.cB(H.jB(this))
p=P.cB(H.jD(this))
o=P.jj(H.jA(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.t.prototype={}
P.aZ.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aZ&&this.a===b.a},
gE:function(a){return C.h.gE(this.a)},
i:function(a){var u,t,s,r,q
u=new P.dZ()
t=this.a
if(t<0)return"-"+new P.aZ(0-t).i(0)
s=u.$1(C.h.a_(t,6e7)%60)
r=u.$1(C.h.a_(t,1e6)%60)
q=new P.dY().$1(t%1e6)
return""+C.h.a_(t,36e8)+":"+H.i(s)+":"+H.i(r)+"."+H.i(q)}}
P.dY.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:12}
P.dZ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:12}
P.b_.prototype={}
P.cZ.prototype={
i:function(a){return"Throw of null."}}
P.au.prototype={
gbE:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbD:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbE()+t+s
if(!this.a)return r
q=this.gbD()
p=P.e3(this.b)
return r+q+": "+p}}
P.bn.prototype={
gbE:function(){return"RangeError"},
gbD:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.i(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.i(u)
else if(s>u)t=": Not in range "+H.i(u)+".."+H.i(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.i(u)}return t}}
P.ed.prototype={
gbE:function(){return"RangeError"},
gbD:function(){var u,t
u=H.a0(this.b)
if(typeof u!=="number")return u.aJ()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gm:function(a){return this.f}}
P.fm.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fk.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.eX.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dU.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.e3(u)+"."}}
P.eE.prototype={
i:function(a){return"Out of Memory"},
$ib_:1}
P.d7.prototype={
i:function(a){return"Stack Overflow"},
$ib_:1}
P.dW.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dw.prototype={
i:function(a){return"Exception: "+this.a}}
P.e9.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.cG(s,0,75)+"...":s
return t+"\n"+r}}
P.v.prototype={}
P.h.prototype={
gm:function(a){var u,t
u=this.gX(this)
for(t=0;u.B();)++t
return t},
a7:function(a,b){var u,t,s
if(b<0)H.p(P.ap(b,0,null,"index",null))
for(u=this.gX(this),t=0;u.B();){s=u.gT()
if(b===t)return s;++t}throw H.k(P.bO(b,this,"index",null,t))},
i:function(a){return P.jm(this,"(",")")}}
P.ax.prototype={}
P.a.prototype={$ih:1}
P.B.prototype={
gE:function(a){return P.H.prototype.gE.call(this,this)},
i:function(a){return"null"}}
P.a5.prototype={}
P.H.prototype={constructor:P.H,$iH:1,
p:function(a,b){return this===b},
gE:function(a){return H.bW(this)},
i:function(a){return"Instance of '"+H.bm(this)+"'"},
toString:function(){return this.i(this)}}
P.ac.prototype={}
P.x.prototype={$iia:1}
P.b7.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.n.prototype={}
W.dL.prototype={
i:function(a){return String(a)}}
W.dM.prototype={
i:function(a){return String(a)}}
W.cu.prototype={}
W.bf.prototype={
bx:function(a,b,c){if(c!=null)return this.fb(a,b,P.kd(c,null))
return this.fc(a,b)},
eg:function(a,b){return this.bx(a,b,null)},
fb:function(a,b,c){return a.getContext(b,c)},
fc:function(a,b){return a.getContext(b)},
$ibf:1,
$ii_:1}
W.bg.prototype={
fd:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
iF:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibg:1}
W.aY.prototype={
gm:function(a){return a.length}}
W.bH.prototype={
gm:function(a){return a.length}}
W.dV.prototype={}
W.bI.prototype={$ibI:1}
W.bJ.prototype={
eh:function(a,b){return a.getElementById(b)}}
W.dX.prototype={
i:function(a){return String(a)}}
W.cC.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
p:function(a,b){var u
if(b==null)return!1
if(!H.cn(b,"$iaj",[P.a5],"$aaj"))return!1
u=J.dI(b)
return a.left===u.gbp(b)&&a.top===u.gbu(b)&&a.width===u.gbw(b)&&a.height===u.gbo(b)},
gE:function(a){return W.ix(C.i.gE(a.left),C.i.gE(a.top),C.i.gE(a.width),C.i.gE(a.height))},
gdi:function(a){return a.bottom},
gbo:function(a){return a.height},
gbp:function(a){return a.left},
gbs:function(a){return a.right},
gbu:function(a){return a.top},
gbw:function(a){return a.width},
$iaj:1,
$aaj:function(){return[P.a5]}}
W.fH.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.j(u,b)
return H.e(u[b],"$iU")},
h:function(a,b){J.hW(this.a,b)
return b},
gX:function(a){var u=this.jl(this)
return new J.a6(u,u.length,0,[H.r(u,0)])},
$aO:function(){return[W.U]},
$ah:function(){return[W.U]},
$aa:function(){return[W.U]}}
W.U.prototype={
gdl:function(a){return new W.fH(a,a.children)},
gdm:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aJ()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aJ()
if(r<0)r=-r*0
return new P.aj(u,t,s,r,[P.a5])},
i:function(a){return a.localName},
$iU:1}
W.f.prototype={$if:1}
W.bi.prototype={
eQ:function(a,b,c,d){return a.addEventListener(b,H.bu(H.l(c,{func:1,args:[W.f]}),1),!1)},
$ibi:1}
W.e8.prototype={
gm:function(a){return a.length}}
W.bk.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bO(b,a,null,null,null))
return a[b]},
a7:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iaL:1,
$aaL:function(){return[W.G]},
$aO:function(){return[W.G]},
$ih:1,
$ah:function(){return[W.G]},
$ia:1,
$aa:function(){return[W.G]},
$ibk:1,
$aao:function(){return[W.G]}}
W.cG.prototype={}
W.b0.prototype={$ib0:1,
gdq:function(a){return a.data}}
W.bN.prototype={$ibN:1,$ii_:1}
W.az.prototype={$iaz:1}
W.bS.prototype={}
W.a2.prototype={$ia2:1}
W.fG.prototype={
gX:function(a){var u=this.a.childNodes
return new W.cE(u,u.length,-1,[H.hf(C.N,u,"ao",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.j(u,b)
return u[b]},
$aO:function(){return[W.G]},
$ah:function(){return[W.G]},
$aa:function(){return[W.G]}}
W.G.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.eq(a):u},
Y:function(a,b){return a.appendChild(b)},
$iG:1}
W.bU.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bO(b,a,null,null,null))
return a[b]},
a7:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iaL:1,
$aaL:function(){return[W.G]},
$aO:function(){return[W.G]},
$ih:1,
$ah:function(){return[W.G]},
$ia:1,
$aa:function(){return[W.G]},
$aao:function(){return[W.G]}}
W.eP.prototype={
gm:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.ar.prototype={$iar:1}
W.f8.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bO(b,a,null,null,null))
return a[b]},
a7:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iaL:1,
$aaL:function(){return[W.aF]},
$aO:function(){return[W.aF]},
$ih:1,
$ah:function(){return[W.aF]},
$ia:1,
$aa:function(){return[W.aF]},
$aao:function(){return[W.aF]}}
W.b9.prototype={}
W.fz.prototype={$ii_:1}
W.aI.prototype={
giB:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.k(P.af("deltaY is not supported"))},
giA:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.k(P.af("deltaX is not supported"))},
$iaI:1}
W.cb.prototype={
hn:function(a,b){return a.requestAnimationFrame(H.bu(H.l(b,{func:1,ret:-1,args:[P.a5]}),1))},
f3:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dv.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
p:function(a,b){var u
if(b==null)return!1
if(!H.cn(b,"$iaj",[P.a5],"$aaj"))return!1
u=J.dI(b)
return a.left===u.gbp(b)&&a.top===u.gbu(b)&&a.width===u.gbw(b)&&a.height===u.gbo(b)},
gE:function(a){return W.ix(C.i.gE(a.left),C.i.gE(a.top),C.i.gE(a.width),C.i.gE(a.height))},
gbo:function(a){return a.height},
gbw:function(a){return a.width}}
W.fI.prototype={}
W.hH.prototype={}
W.fJ.prototype={}
W.fK.prototype={
$1:function(a){return this.a.$1(H.e(a,"$if"))},
$S:31}
W.ao.prototype={
gX:function(a){return new W.cE(a,this.gm(a),-1,[H.hf(this,a,"ao",0)])}}
W.cE.prototype={
B:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.scZ(J.ja(this.a,u))
this.c=u
return!0}this.scZ(null)
this.c=t
return!1},
gT:function(){return this.d},
scZ:function(a){this.d=H.w(a,H.r(this,0))},
$iax:1}
W.du.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dE.prototype={}
W.dF.prototype={}
P.dG.prototype={$ib0:1,
gdq:function(a){return this.a}}
P.hc.prototype={
$2:function(a,b){this.a[a]=b},
$S:11}
P.e5.prototype={
gbH:function(){var u,t,s
u=this.b
t=H.ah(u,"O",0)
s=W.U
return new H.er(new H.fA(u,H.l(new P.e6(),{func:1,ret:P.Y,args:[t]}),[t]),H.l(new P.e7(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.hW(this.b.a,b)},
gm:function(a){return J.cs(this.gbH().a)},
j:function(a,b){var u=this.gbH()
return u.b.$1(J.hX(u.a,b))},
gX:function(a){var u=P.ju(this.gbH(),!1,W.U)
return new J.a6(u,u.length,0,[H.r(u,0)])},
$aO:function(){return[W.U]},
$ah:function(){return[W.U]},
$aa:function(){return[W.U]}}
P.e6.prototype={
$1:function(a){return!!J.P(H.e(a,"$iG")).$iU},
$S:23}
P.e7.prototype={
$1:function(a){return H.c(H.e(a,"$iG"),"$iU")},
$S:24}
P.fY.prototype={
gbs:function(a){var u=this.a
if(typeof u!=="number")return u.C()
return H.w(u+this.c,H.r(this,0))},
gdi:function(a){var u=this.b
if(typeof u!=="number")return u.C()
return H.w(u+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cn(b,"$iaj",[P.a5],"$aaj")){u=this.a
t=J.dI(b)
if(u==t.gbp(b)){s=this.b
if(s==t.gbu(b)){if(typeof u!=="number")return u.C()
r=H.r(this,0)
if(H.w(u+this.c,r)===t.gbs(b)){if(typeof s!=="number")return s.C()
u=H.w(s+this.d,r)===t.gdi(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gE:function(a){var u,t,s,r,q
u=this.a
t=J.bd(u)
s=this.b
r=J.bd(s)
if(typeof u!=="number")return u.C()
q=H.r(this,0)
u=C.h.gE(H.w(u+this.c,q))
if(typeof s!=="number")return s.C()
q=C.h.gE(H.w(s+this.d,q))
return P.jY(P.fV(P.fV(P.fV(P.fV(0,t),r),u),q))}}
P.aj.prototype={
gbp:function(a){return this.a},
gbu:function(a){return this.b},
gbw:function(a){return this.c},
gbo:function(a){return this.d}}
P.m.prototype={
gdl:function(a){return new P.e5(a,new W.fG(a))}}
P.cv.prototype={$icv:1}
P.cF.prototype={$icF:1}
P.d1.prototype={$id1:1}
P.bo.prototype={
bZ:function(a,b){return a.activeTexture(b)},
dg:function(a,b,c){return a.attachShader(b,c)},
ak:function(a,b,c){return a.bindBuffer(b,c)},
il:function(a,b,c){return a.bindFramebuffer(b,c)},
at:function(a,b,c){return a.bindTexture(b,c)},
im:function(a,b,c){return a.blendFunc(b,c)},
dj:function(a,b,c,d){return a.bufferData(b,c,d)},
ip:function(a,b){return a.clear(b)},
iq:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
ir:function(a,b){return a.clearDepth(b)},
is:function(a,b){return a.compileShader(b)},
iw:function(a,b){return a.createShader(b)},
iy:function(a,b){return a.deleteProgram(b)},
iz:function(a,b){return a.deleteShader(b)},
iC:function(a,b){return a.depthFunc(b)},
iD:function(a,b){return a.disable(b)},
ds:function(a,b){return a.disableVertexAttribArray(b)},
iE:function(a,b,c,d,e){return a.drawElements(b,c,H.a0(d),H.a0(e))},
ca:function(a,b){return a.enable(b)},
du:function(a,b){return a.enableVertexAttribArray(b)},
ed:function(a,b,c){return a.getActiveAttrib(b,c)},
ee:function(a,b,c){return a.getActiveUniform(b,c)},
ef:function(a,b,c){return a.getAttribLocation(b,c)},
cA:function(a,b){return a.getParameter(b)},
ei:function(a,b){return a.getProgramInfoLog(b)},
by:function(a,b,c){return a.getProgramParameter(b,c)},
ej:function(a,b){return a.getShaderInfoLog(b)},
ek:function(a,b,c){return a.getShaderParameter(b,c)},
el:function(a,b,c){return a.getUniformLocation(b,c)},
iQ:function(a,b){return a.linkProgram(b)},
j9:function(a,b,c){return a.pixelStorei(b,c)},
eo:function(a,b,c){return a.shaderSource(b,c)},
ji:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.P(g)
if(!!u.$ib0)t=!0
else t=!1
if(t){this.hE(a,b,c,d,e,f,P.ke(g))
return}if(!!u.$ibN)u=!0
else u=!1
if(u){this.hF(a,b,c,d,e,f,g)
return}throw H.k(P.jc("Incorrect number or type of arguments"))},
jh:function(a,b,c,d,e,f,g){return this.ji(a,b,c,d,e,f,g,null,null,null)},
hE:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
hF:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bt:function(a,b,c,d){return a.texParameteri(b,c,d)},
F:function(a,b,c){return a.uniform1f(b,c)},
J:function(a,b,c){return a.uniform1i(b,c)},
n:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ea:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eb:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cw:function(a,b){return a.useProgram(b)},
jo:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jp:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibo:1}
P.d2.prototype={$id2:1}
P.d9.prototype={$id9:1}
P.dh.prototype={$idh:1}
O.K.prototype={
bA:function(a){this.sfi(H.b([],[a]))
this.sd4(null)
this.sd1(null)
this.sd5(null)},
cB:function(a,b,c){var u=H.ah(this,"K",0)
H.l(b,{func:1,ret:P.Y,args:[[P.h,u]]})
u={func:1,ret:-1,args:[P.v,[P.h,u]]}
H.l(a,u)
H.l(c,u)
this.sd4(b)
this.sd1(a)
this.sd5(c)},
aK:function(a,b){return this.cB(a,null,b)},
aP:function(a){var u
H.d(a,"$ih",[H.ah(this,"K",0)],"$ah")
u=this.b
if(u!=null)return u.$1(a)
return!0},
bS:function(a,b){var u
H.d(b,"$ih",[H.ah(this,"K",0)],"$ah")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gX:function(a){var u=this.a
return new J.a6(u,u.length,0,[H.r(u,0)])},
a7:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.j(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ah(this,"K",0)
H.w(b,u)
u=[u]
if(this.aP(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.bS(s,H.b([b],u))}},
aR:function(a,b){var u,t
H.d(b,"$ih",[H.ah(this,"K",0)],"$ah")
if(this.aP(b)){u=this.a
t=u.length
C.a.aR(u,b)
this.bS(t,b)}},
V:function(a,b,c){var u,t,s,r
u=H.ah(this,"K",0)
H.w(c,u)
t=this.a
if(b>=t.length)return H.j(t,b)
s=t[b]
if(!J.N(s,c)&&this.aP(H.b([c],[u]))){C.a.V(this.a,b,c)
t=[u]
u=H.d(H.b([s],t),"$ih",[u],"$ah")
r=this.d
if(r!=null)r.$2(b,u)
this.bS(b,H.b([c],t))}},
sfi:function(a){this.a=H.d(a,"$ia",[H.ah(this,"K",0)],"$aa")},
sd4:function(a){this.b=H.l(a,{func:1,ret:P.Y,args:[[P.h,H.ah(this,"K",0)]]})},
sd1:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.v,[P.h,H.ah(this,"K",0)]]})},
sd5:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.v,[P.h,H.ah(this,"K",0)]]})},
$ih:1}
O.bR.prototype={
gm:function(a){return this.a.length},
gl:function(){var u=this.b
if(u==null){u=D.D()
this.b=u}return u},
ez:function(a){var u=this.b
if(u!=null)u.v(a)},
az:function(){return this.ez(null)},
gL:function(){var u=this.a
if(u.length>0)return C.a.gcl(u)
else return V.b5()},
br:function(a){var u=this.a
if(a==null)C.a.h(u,V.b5())
else C.a.h(u,a)
this.az()},
aw:function(){var u=this.a
if(u.length>0){u.pop()
this.az()}},
sbI:function(a){this.a=H.d(a,"$ia",[V.Z],"$aa")}}
E.dO.prototype={}
E.a8.prototype={
scD:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gl().N(0,this.ge2())
t=this.c
if(t!=null)t.gl().h(0,this.ge2())
s=new D.y("shape",u,this.c,this,[F.d3])
s.b=!0
this.af(s)}},
sdY:function(a){var u,t
if(!J.N(this.r,a)){u=this.r
if(u!=null)u.gl().N(0,this.ge0())
if(a!=null)a.gl().h(0,this.ge0())
this.r=a
t=new D.y("mover",u,a,this,[U.W])
t.b=!0
this.af(t)}},
ah:function(a){var u,t,s,r
u=this.r
t=u!=null?u.a:null
if(!J.N(t,this.x)){s=this.x
this.x=t
r=new D.y("matrix",s,t,this,[V.Z])
r.b=!0
this.af(r)}for(u=this.y.a,u=new J.a6(u,u.length,0,[H.r(u,0)]);u.B();)u.d.ah(a)},
a2:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gL())
else C.a.h(u.a,t.q(0,u.gL()))
u.az()
a.ct(this.f)
u=a.dy
s=(u&&C.a).gcl(u)
if(s!=null&&this.d!=null)s.e5(a,this)
for(u=this.y.a,u=new J.a6(u,u.length,0,[H.r(u,0)]);u.B();)u.d.a2(a)
a.cs()
a.dx.aw()},
gl:function(){var u=this.z
if(u==null){u=D.D()
this.z=u}return u},
af:function(a){var u=this.z
if(u!=null)u.v(a)},
a0:function(){return this.af(null)},
e3:function(a){H.e(a,"$iq")
this.e=null
this.af(a)},
j0:function(){return this.e3(null)},
e1:function(a){this.af(H.e(a,"$iq"))},
j_:function(){return this.e1(null)},
e_:function(a){this.af(H.e(a,"$iq"))},
iX:function(){return this.e_(null)},
iW:function(a,b){var u,t,s,r,q,p,o
H.d(b,"$ih",[E.a8],"$ah")
for(u=b.length,t=this.gdZ(),s={func:1,ret:-1,args:[D.q]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aw()
o.sZ(null)
o.sar(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sZ(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a0()},
iZ:function(a,b){var u,t,s,r,q
H.d(b,"$ih",[E.a8],"$ah")
for(u=b.length,t=this.gdZ(),s=0;s<b.length;b.length===u||(0,H.u)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.aw()
q.sZ(null)
q.sar(null)
q.c=null
q.d=0
r.z=q}q.N(0,t)}}this.a0()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
seA:function(a,b){this.y=H.d(b,"$iK",[E.a8],"$aK")},
$iaD:1}
E.eK.prototype={
ew:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ab(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.bR()
t=[V.Z]
u.sbI(H.b([],t))
u.b=null
u.gl().h(0,new E.eL(this))
this.cy=u
u=new O.bR()
u.sbI(H.b([],t))
u.b=null
u.gl().h(0,new E.eM(this))
this.db=u
u=new O.bR()
u.sbI(H.b([],t))
u.b=null
u.gl().h(0,new E.eN(this))
this.dx=u
this.shD(H.b([],[O.b8]))
u=this.dy;(u&&C.a).h(u,null)
this.shz(new H.aM([P.x,A.bY]))},
gja:function(){var u=this.z
if(u==null){u=this.cy.gL().q(0,this.db.gL())
this.z=u}return u},
ct:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gcl(u):a;(u&&C.a).h(u,t)},
cs:function(){var u=this.dy
if(u.length>1)u.pop()},
df:function(a){var u=a.b
if(u.length===0)throw H.k(P.o("May not cache a shader with no name."))
if(this.fr.dn(u))throw H.k(P.o('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.V(0,u,a)},
shD:function(a){this.dy=H.d(a,"$ia",[O.b8],"$aa")},
shz:function(a){this.fr=H.d(a,"$iaA",[P.x,A.bY],"$aaA")}}
E.eL.prototype={
$1:function(a){var u
H.e(a,"$iq")
u=this.a
u.z=null
u.ch=null},
$S:8}
E.eM.prototype={
$1:function(a){var u
H.e(a,"$iq")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:8}
E.eN.prototype={
$1:function(a){var u
H.e(a,"$iq")
u=this.a
u.ch=null
u.cx=null},
$S:8}
E.dd.prototype={
cM:function(a){H.e(a,"$iq")
this.e6()},
cL:function(){return this.cM(null)},
giK:function(){var u,t,s
u=Date.now()
t=C.h.a_(P.i2(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ab(u,!1)
return s/t},
d8:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.q()
if(typeof u!=="number")return H.z(u)
s=C.i.ci(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.q()
r=C.i.ci(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.im(C.n,this.gjc())}},
e6:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.f5(this),{func:1,ret:-1,args:[P.a5]})
C.y.f3(u)
C.y.hn(u,W.iF(t,P.a5))}},
jb:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.d8()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ab(r,!1)
s.y=P.i2(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.az()
r=s.db
C.a.sm(r.a,0)
r.az()
r=s.dx
C.a.sm(r.a,0)
r.az()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.a2(this.e)}}catch(q){u=H.bc(q)
t=H.bw(q)
P.hT("Error: "+H.i(u))
P.hT("Stack: "+H.i(t))
throw H.k(u)}}}
E.f5.prototype={
$1:function(a){var u
H.kt(a)
u=this.a
if(u.ch){u.ch=!1
u.jb()}},
$S:35}
Z.dr.prototype={$ikC:1}
Z.cw.prototype={
U:function(a){var u,t,s
try{t=a.a
C.b.du(t,this.e)
C.b.jo(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.bc(s)
t=P.o('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(u))
throw H.k(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}}
Z.ds.prototype={$ikD:1}
Z.bC.prototype={
av:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
U:function(a){var u,t
u=this.a
C.b.ak(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].U(a)},
ay:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.ds(s,u[t].e)
C.b.ak(s,this.a.a,null)},
a2:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.j(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ak(t,p,r.b)
C.b.iE(t,q.a,q.b,5123,0)
C.b.ak(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.x]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ai(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.w(t,", ")+"\nAttrs:   "+C.a.w(p,", ")},
sfe:function(a){this.b=H.d(a,"$ia",[Z.b1],"$aa")},
$ikJ:1}
Z.b1.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bm(this.c)+"'")+"]"}}
Z.aH.prototype={
gcE:function(a){var u,t
u=this.a
t=(u&$.at().a)!==0?3:0
if((u&$.aV().a)!==0)t+=3
if((u&$.aU().a)!==0)t+=3
if((u&$.aW().a)!==0)t+=2
if((u&$.aX().a)!==0)t+=3
if((u&$.cp().a)!==0)t+=3
if((u&$.cq().a)!==0)t+=4
if((u&$.bz().a)!==0)++t
return(u&$.aT().a)!==0?t+4:t},
ij:function(a){var u,t,s
u=$.at()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aV()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aU()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aW()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aX()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cp()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cq()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bz()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aT()
if((t&u.a)!==0)if(s===a)return u
return $.j8()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aH))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.x])
t=this.a
if((t&$.at().a)!==0)C.a.h(u,"Pos")
if((t&$.aV().a)!==0)C.a.h(u,"Norm")
if((t&$.aU().a)!==0)C.a.h(u,"Binm")
if((t&$.aW().a)!==0)C.a.h(u,"Txt2D")
if((t&$.aX().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cp().a)!==0)C.a.h(u,"Clr3")
if((t&$.cq().a)!==0)C.a.h(u,"Clr4")
if((t&$.bz().a)!==0)C.a.h(u,"Weight")
if((t&$.aT().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.w(u,"|")}}
D.dR.prototype={}
D.aw.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.q]}
H.l(b,u)
if(this.a==null)this.sZ(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[D.q]})
u=this.a
u=u==null?null:C.a.aG(u,b)
if(u===!0){u=this.a
t=(u&&C.a).N(u,b)||!1}else t=!1
return t},
v:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1)r=!0
else r=!1
if(r)return!1
if(a==null){a=new D.q(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.a8(t,new D.e4(u))
return!0},
iG:function(){return this.v(null)},
jd:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.v(t)}}},
ax:function(){return this.jd(!0,!1)},
sZ:function(a){this.a=H.d(a,"$ia",[{func:1,ret:-1,args:[D.q]}],"$aa")},
sar:function(a){this.b=H.d(a,"$ia",[{func:1,ret:-1,args:[D.q]}],"$aa")}}
D.e4.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.q]})
u=this.a.a
u.b
a.$1(u)},
$S:26}
D.q.prototype={}
D.b2.prototype={}
D.b3.prototype={}
D.y.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.cx.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cx))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.cM.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cM))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.ei.prototype={
j6:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j2:function(a){this.c=a.b
this.d.N(0,a.a)
return!1},
shj:function(a){this.d=H.d(a,"$iij",[P.v],"$aij")}}
X.cP.prototype={}
X.en.prototype={
aN:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ab(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.q()
q=b.b
p=this.ch
if(typeof q!=="number")return q.q()
o=new V.X(t.a+s*r,t.b+q*p)
p=this.a.gaF()
n=new X.aP(a,V.aR(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cr:function(a,b){this.r=a.a
return!1},
aW:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.en()
if(typeof u!=="number")return u.ec()
this.r=(u&~t)>>>0
return!1},
aV:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.aN(a,b))
return!0},
j7:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaF()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.q()
o=a.b
n=this.cy
if(typeof o!=="number")return o.q()
r=new X.bT(new V.I(q*p,o*n),t,s,new P.ab(r,!1),this)
r.b=!0
u.v(r)
return!0},
fT:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ab(Date.now(),!1)
t=this.f
s=new X.cP(c,a,this.a.gaF(),b,u,this)
s.b=!0
t.v(s)
this.y=u
this.x=V.aR()}}
X.ae.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ae))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aP.prototype={}
X.ey.prototype={
bF:function(a,b,c){var u,t,s
u=new P.ab(Date.now(),!1)
t=this.a.gaF()
s=new X.aP(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cr:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.v(this.bF(a,b,!0))
return!0},
aW:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.en()
if(typeof u!=="number")return u.ec()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.v(this.bF(a,b,!0))
return!0},
aV:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.bF(a,b,!1))
return!0},
j8:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaF()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.q()
p=a.b
o=this.ch
if(typeof p!=="number")return p.q()
s=new X.bT(new V.I(r*q,p*o),t,b,new P.ab(s,!1),this)
s.b=!0
u.v(s)
return!0},
gdt:function(){var u=this.b
if(u==null){u=D.D()
this.b=u}return u},
gbv:function(){var u=this.c
if(u==null){u=D.D()
this.c=u}return u},
gdX:function(){var u=this.d
if(u==null){u=D.D()
this.d=u}return u}}
X.bT.prototype={}
X.eG.prototype={}
X.df.prototype={}
X.f7.prototype={
aN:function(a,b){var u,t,s,r
H.d(a,"$ia",[V.X],"$aa")
u=new P.ab(Date.now(),!1)
t=a.length>0?a[0]:V.aR()
s=this.a.gaF()
r=new X.df(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
j5:function(a){var u
H.d(a,"$ia",[V.X],"$aa")
u=this.b
if(u==null)return!1
u.v(this.aN(a,!0))
return!0},
j3:function(a){var u
H.d(a,"$ia",[V.X],"$aa")
u=this.c
if(u==null)return!1
u.v(this.aN(a,!0))
return!0},
j4:function(a){var u
H.d(a,"$ia",[V.X],"$aa")
u=this.d
if(u==null)return!1
u.v(this.aN(a,!1))
return!0}}
X.dl.prototype={
gaF:function(){var u=this.a
return V.eJ(0,0,C.m.gdm(u).c,C.m.gdm(u).d)},
cX:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cM(u,new X.ae(t,a.altKey,a.shiftKey))},
aE:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ae(t,a.altKey,a.shiftKey)},
bY:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ae(t,a.altKey,a.shiftKey)},
as:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.D()
q=u.top
if(typeof s!=="number")return s.D()
return new V.X(t-r,s-q)},
aQ:function(a){return new V.I(a.movementX,a.movementY)},
bU:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.X])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
o=C.i.ag(p.pageX)
C.i.ag(p.pageY)
n=u.left
C.i.ag(p.pageX)
C.a.h(t,new V.X(o-n,C.i.ag(p.pageY)-u.top))}return t},
ao:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cx(u,new X.ae(t,a.altKey,a.shiftKey))},
bJ:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.D()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.D()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
fN:function(a){this.f=!0},
fB:function(a){this.f=!1},
fH:function(a){H.e(a,"$ia2")
if(this.f&&this.bJ(a))a.preventDefault()},
fR:function(a){var u
H.e(a,"$iaz")
if(!this.f)return
u=this.cX(a)
this.b.j6(u)},
fP:function(a){var u
H.e(a,"$iaz")
if(!this.f)return
u=this.cX(a)
this.b.j2(u)},
fV:function(a){var u,t,s,r
H.e(a,"$ia2")
u=this.a
u.focus()
this.f=!0
this.aE(a)
if(this.x){t=this.ao(a)
s=this.aQ(a)
if(this.d.cr(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.ao(a)
r=this.as(a)
if(this.c.cr(t,r))a.preventDefault()},
fZ:function(a){var u,t,s
H.e(a,"$ia2")
this.aE(a)
u=this.ao(a)
if(this.x){t=this.aQ(a)
if(this.d.aW(u,t))a.preventDefault()
return}if(this.r)return
s=this.as(a)
if(this.c.aW(u,s))a.preventDefault()},
fL:function(a){var u,t,s
H.e(a,"$ia2")
if(!this.bJ(a)){this.aE(a)
u=this.ao(a)
if(this.x){t=this.aQ(a)
if(this.d.aW(u,t))a.preventDefault()
return}if(this.r)return
s=this.as(a)
if(this.c.aW(u,s))a.preventDefault()}},
fX:function(a){var u,t,s
H.e(a,"$ia2")
this.aE(a)
u=this.ao(a)
if(this.x){t=this.aQ(a)
if(this.d.aV(u,t))a.preventDefault()
return}if(this.r)return
s=this.as(a)
if(this.c.aV(u,s))a.preventDefault()},
fJ:function(a){var u,t,s
H.e(a,"$ia2")
if(!this.bJ(a)){this.aE(a)
u=this.ao(a)
if(this.x){t=this.aQ(a)
if(this.d.aV(u,t))a.preventDefault()
return}if(this.r)return
s=this.as(a)
if(this.c.aV(u,s))a.preventDefault()}},
h0:function(a){var u,t
H.e(a,"$iaI")
this.aE(a)
u=new V.I((a&&C.x).giA(a),C.x.giB(a)).t(0,180)
if(this.x){if(this.d.j7(u))a.preventDefault()
return}if(this.r)return
t=this.as(a)
if(this.c.j8(u,t))a.preventDefault()},
h2:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.ao(this.y)
s=this.as(this.y)
this.d.fT(t,s,u)}},
hg:function(a){var u
H.e(a,"$iar")
this.a.focus()
this.f=!0
this.bY(a)
u=this.bU(a)
if(this.e.j5(u))a.preventDefault()},
hc:function(a){var u
H.e(a,"$iar")
this.bY(a)
u=this.bU(a)
if(this.e.j3(u))a.preventDefault()},
he:function(a){var u
H.e(a,"$iar")
this.bY(a)
u=this.bU(a)
if(this.e.j4(u))a.preventDefault()},
sf4:function(a){this.z=H.d(a,"$ia",[[P.c_,P.H]],"$aa")}}
D.aK.prototype={
gl:function(){var u=this.d
if(u==null){u=D.D()
this.d=u}return u},
an:function(a){var u
H.e(a,"$iq")
u=this.d
if(u!=null)u.v(a)},
eC:function(){return this.an(null)},
$iR:1,
$iaD:1}
D.R.prototype={$iaD:1}
D.cN.prototype={
gl:function(){var u=this.Q
if(u==null){u=D.D()
this.Q=u}return u},
an:function(a){var u=this.Q
if(u!=null)u.v(a)},
d3:function(a){var u
H.e(a,"$iq")
u=this.ch
if(u!=null)u.v(a)},
fS:function(){return this.d3(null)},
h4:function(a){var u,t,s
H.d(a,"$ih",[D.R],"$ah")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.eZ(s))return!1}return!0},
fq:function(a,b){var u,t,s,r,q,p,o,n
u=D.R
H.d(b,"$ih",[u],"$ah")
for(t=b.length,s=this.gd2(),r={func:1,ret:-1,args:[D.q]},q=[r],p=0;p<b.length;b.length===t||(0,H.u)(b),++p){o=H.e(b[p],"$iR")
if(o instanceof D.aK)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.aw()
n.sZ(null)
n.sar(null)
n.c=null
n.d=0
o.d=n}H.l(s,r)
if(n.a==null)n.sZ(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.b2(a,b,this,[u])
u.b=!0
this.an(u)},
h8:function(a,b){var u,t,s,r,q,p
u=D.R
H.d(b,"$ih",[u],"$ah")
for(t=b.length,s=this.gd2(),r=0;r<b.length;b.length===t||(0,H.u)(b),++r){q=H.e(b[r],"$iR")
if(q instanceof D.aK)C.a.N(this.e,q)
p=q.d
if(p==null){p=new D.aw()
p.sZ(null)
p.sar(null)
p.c=null
p.d=0
q.d=p}p.N(0,s)}u=new D.b3(a,b,this,[u])
u.b=!0
this.an(u)},
eZ:function(a){var u=C.a.aG(this.e,a)
return u},
sf2:function(a){this.e=H.d(a,"$ia",[D.aK],"$aa")},
shi:function(a){this.f=H.d(a,"$ia",[D.d0],"$aa")},
shB:function(a){this.r=H.d(a,"$ia",[D.d6],"$aa")},
shO:function(a){this.x=H.d(a,"$ia",[D.da],"$aa")},
shP:function(a){this.y=H.d(a,"$ia",[D.db],"$aa")},
shQ:function(a){this.z=H.d(a,"$ia",[D.dc],"$aa")},
$ah:function(){return[D.R]},
$aK:function(){return[D.R]}}
D.d0.prototype={$iR:1,$iaD:1}
D.d6.prototype={$iR:1,$iaD:1}
D.da.prototype={$iR:1,$iaD:1}
D.db.prototype={$iR:1,$iaD:1}
D.dc.prototype={$iR:1,$iaD:1}
V.Q.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
V.an.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.an))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}}
V.e2.prototype={}
V.cT.prototype={
a5:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return u},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cT))return!1
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
t=V.bv(H.b([this.a,this.d,this.r],u),3,0)
s=V.bv(H.b([this.b,this.e,this.x],u),3,0)
r=V.bv(H.b([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.j(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.j(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.j(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.j(t,1)
n=" "+t[1]+", "
if(1>=p)return H.j(s,1)
n=n+s[1]+", "
if(1>=o)return H.j(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.j(t,2)
u=" "+t[2]+", "
if(2>=p)return H.j(s,2)
u=u+s[2]+", "
if(2>=o)return H.j(r,2)
return n+(u+r[2]+"]")}}
V.Z.prototype={
a5:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return u},
ck:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(typeof l!=="number")return l.q()
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
if(Math.abs(a7-0)<$.E().a)return V.b5()
a8=1/a7
a9=-r
b0=-d
return V.aC((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
q:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
o=this.d
n=b2.cx
if(typeof o!=="number")return o.q()
m=b2.b
l=b2.f
k=b2.z
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
f=b2.db
e=b2.d
if(typeof e!=="number")return H.z(e)
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
return V.aC(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cv:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.F(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
b2:function(a){var u,t,s,r
u=a.a
t=a.b
s=a.c
r=this.d
if(typeof r!=="number")return H.z(r)
return new V.a9(this.a*u+this.b*t+this.c*s+r,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.E()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
if(!(Math.abs(b.c-this.c)<s))return!1
u=b.d
r=this.d
t.toString
if(typeof u!=="number")return u.D()
if(typeof r!=="number")return H.z(r)
if(!(Math.abs(u-r)<s))return!1
if(!(Math.abs(b.e-this.e)<s))return!1
if(!(Math.abs(b.f-this.f)<s))return!1
if(!(Math.abs(b.r-this.r)<s))return!1
if(!(Math.abs(b.x-this.x)<s))return!1
if(!(Math.abs(b.y-this.y)<s))return!1
if(!(Math.abs(b.z-this.z)<s))return!1
if(!(Math.abs(b.Q-this.Q)<s))return!1
if(!(Math.abs(b.ch-this.ch)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
i:function(a){return this.G()},
dS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.t]
t=V.bv(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bv(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bv(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bv(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.j(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.j(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.j(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.j(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.j(t,1)
l=l+t[1]+", "
if(1>=o)return H.j(s,1)
l=l+s[1]+", "
if(1>=n)return H.j(r,1)
l=l+r[1]+", "
if(1>=m)return H.j(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.j(t,2)
p=p+t[2]+", "
if(2>=o)return H.j(s,2)
p=p+s[2]+", "
if(2>=n)return H.j(r,2)
p=p+r[2]+", "
if(2>=m)return H.j(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.j(t,3)
l=l+t[3]+", "
if(3>=o)return H.j(s,3)
l=l+s[3]+", "
if(3>=n)return H.j(r,3)
l=l+r[3]+", "
if(3>=m)return H.j(q,3)
return p+(l+q[3]+"]")},
u:function(a){return this.dS(a,3,0)},
G:function(){return this.dS("",3,0)}}
V.X.prototype={
D:function(a,b){return new V.X(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}}
V.a9.prototype={
D:function(a,b){return new V.a9(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
V.aS.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aS))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}}
V.bX.prototype={
ga4:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bX))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}}
V.I.prototype={
cm:function(a){return Math.sqrt(this.A(this))},
A:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.z(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.z(r)
return u*t+s*r},
q:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.I(u*b,t*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.E().a){u=$.ir
if(u==null){u=new V.I(0,0)
$.ir=u}return u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.I(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
u=b.a
t=this.a
s=$.E()
s.toString
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.z(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.z(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}}
V.F.prototype={
cm:function(a){return Math.sqrt(this.A(this))},
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cn:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.F(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aU:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.F(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a){return new V.F(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.E().a)return V.dq()
return new V.F(this.a/b,this.b/b,this.c/b)},
dU:function(){var u=$.E().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
U.dT.prototype={
bB:function(a){var u=V.kB(a,this.c,this.b)
return u},
gl:function(){var u=this.y
if(u==null){u=D.D()
this.y=u}return u},
I:function(a){var u=this.y
if(u!=null)u.v(a)},
scz:function(a,b){},
sco:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.E().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bB(t)}u=new D.y("maximumLocation",u,this.b,this,[P.t])
u.b=!0
this.I(u)}},
scq:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.E().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bB(t)}u=new D.y("minimumLocation",u,this.c,this,[P.t])
u.b=!0
this.I(u)}},
sa3:function(a,b){var u
b=this.bB(b)
u=this.d
if(!(Math.abs(u-b)<$.E().a)){this.d=b
u=new D.y("location",u,b,this,[P.t])
u.b=!0
this.I(u)}},
scp:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.E().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.y("maximumVelocity",u,a,this,[P.t])
u.b=!0
this.I(u)}},
sO:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.E().a)){this.f=a
u=new D.y("velocity",u,a,this,[P.t])
u.b=!0
this.I(u)}},
sc8:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.E().a)){this.x=a
u=new D.y("dampening",u,a,this,[P.t])
u.b=!0
this.I(u)}},
ah:function(a){var u,t,s,r,q
u=this.f
t=$.E().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa3(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.E().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sO(s)}}}
U.bG.prototype={
gl:function(){var u=this.b
if(u==null){u=D.D()
this.b=u}return u},
sL:function(a){var u,t,s
if(a==null)a=V.b5()
if(!J.N(this.a,a)){u=this.a
this.a=a
t=new D.y("matrix",u,a,this,[V.Z])
t.b=!0
s=this.b
if(s!=null)s.v(t)}},
aI:function(a,b){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bG))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")}}
U.bM.prototype={
gl:function(){var u=this.e
if(u==null){u=D.D()
this.e=u}return u},
I:function(a){var u
H.e(a,"$iq")
u=this.e
if(u!=null)u.v(a)},
a1:function(){return this.I(null)},
eE:function(a,b){var u,t,s,r,q,p,o,n
u=U.W
H.d(b,"$ih",[u],"$ah")
for(t=b.length,s=this.gaA(),r={func:1,ret:-1,args:[D.q]},q=[r],p=0;p<b.length;b.length===t||(0,H.u)(b),++p){o=b[p]
if(o!=null){n=o.gl()
n.toString
H.l(s,r)
if(n.a==null)n.sZ(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.b2(a,b,this,[u])
u.b=!0
this.I(u)},
h6:function(a,b){var u,t,s,r,q
u=U.W
H.d(b,"$ih",[u],"$ah")
for(t=b.length,s=this.gaA(),r=0;r<b.length;b.length===t||(0,H.u)(b),++r){q=b[r]
if(q!=null)q.gl().N(0,s)}u=new D.b3(a,b,this,[u])
u.b=!0
this.I(u)},
aI:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.aJ()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.a6(u,u.length,0,[H.r(u,0)]),s=null;u.B();){t=u.d
if(t!=null){r=t.aI(a,b)
if(r!=null)s=s==null?r:r.q(0,s)}}this.f=s==null?V.b5():s
u=this.e
if(u!=null)u.ax()}return this.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bM))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.j(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.j(r,t)
if(!J.N(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ah:function(){return[U.W]},
$aK:function(){return[U.W]},
$iW:1}
U.W.prototype={}
U.dm.prototype={
gl:function(){var u=this.cy
if(u==null){u=D.D()
this.cy=u}return u},
I:function(a){var u
H.e(a,"$iq")
u=this.cy
if(u!=null)u.v(a)},
a1:function(){return this.I(null)},
aS:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdt().h(0,this.gbK())
this.a.c.gdX().h(0,this.gbM())
this.a.c.gbv().h(0,this.gbO())
return!0},
bL:function(a){H.e(a,"$iq")
if(!J.N(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
bN:function(a){var u,t,s,r,q,p,o
a=H.c(H.e(a,"$iq"),"$iaP")
if(!this.y)return
if(this.x){u=a.d.D(0,a.y)
u=new V.I(u.a,u.b)
u=u.A(u)
t=this.r
if(typeof t!=="number")return H.z(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.D(0,a.y)
u=new V.I(t.a,t.b).q(0,2).t(0,u.ga4())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.q()
s=this.e
if(typeof s!=="number")return H.z(s)
t.sO(u*10*s)}else{u=a.c
t=a.d
s=t.D(0,a.y)
r=new V.I(s.a,s.b).q(0,2).t(0,u.ga4())
s=this.b
q=r.a
if(typeof q!=="number")return q.K()
p=this.e
if(typeof p!=="number")return H.z(p)
o=this.z
if(typeof o!=="number")return H.z(o)
s.sa3(0,-q*p+o)
this.b.sO(0)
t=t.D(0,a.z)
this.Q=new V.I(t.a,t.b).q(0,2).t(0,u.ga4())}this.a1()},
bP:function(a){var u,t,s
H.e(a,"$iq")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.A(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.q()
s=this.e
if(typeof s!=="number")return H.z(s)
u.sO(t*10*s)
this.a1()}},
aI:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.aJ()
if(u<t){this.ch=t
s=a.y
this.b.ah(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aC(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iW:1}
U.dn.prototype={
gl:function(){var u=this.fx
if(u==null){u=D.D()
this.fx=u}return u},
I:function(a){var u
H.e(a,"$iq")
u=this.fx
if(u!=null)u.v(a)},
a1:function(){return this.I(null)},
aS:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdt().h(0,this.gbK())
this.a.c.gdX().h(0,this.gbM())
this.a.c.gbv().h(0,this.gbO())
u=this.a.d
t=u.f
if(t==null){t=D.D()
u.f=t
u=t}else u=t
u.h(0,this.gfj())
u=this.a.d
t=u.d
if(t==null){t=D.D()
u.d=t
u=t}else u=t
u.h(0,this.gfl())
u=this.a.e
t=u.b
if(t==null){t=D.D()
u.b=t
u=t}else u=t
u.h(0,this.ghL())
u=this.a.e
t=u.d
if(t==null){t=D.D()
u.d=t
u=t}else u=t
u.h(0,this.ghJ())
u=this.a.e
t=u.c
if(t==null){t=D.D()
u.c=t
u=t}else u=t
u.h(0,this.ghH())
return!0},
ai:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.K()
u=-u}if(this.r){if(typeof t!=="number")return t.K()
t=-t}return new V.I(u,t)},
bL:function(a){a=H.c(H.e(a,"$iq"),"$iaP")
if(!J.N(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bN:function(a){var u,t,s,r,q,p,o
a=H.c(H.e(a,"$iq"),"$iaP")
if(!this.cx)return
if(this.ch){u=a.d.D(0,a.y)
u=new V.I(u.a,u.b)
u=u.A(u)
t=this.Q
if(typeof t!=="number")return H.z(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.D(0,a.y)
u=this.ai(new V.I(t.a,t.b).q(0,2).t(0,u.ga4()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.K()
s=this.y
if(typeof s!=="number")return H.z(s)
t.sO(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.K()
t=this.x
if(typeof t!=="number")return H.z(t)
s.sO(-u*10*t)}else{u=a.c
t=a.d
s=t.D(0,a.y)
r=this.ai(new V.I(s.a,s.b).q(0,2).t(0,u.ga4()))
s=this.c
q=r.a
if(typeof q!=="number")return q.K()
p=this.y
if(typeof p!=="number")return H.z(p)
o=this.cy
if(typeof o!=="number")return H.z(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.K()
q=this.x
if(typeof q!=="number")return H.z(q)
s=this.db
if(typeof s!=="number")return H.z(s)
o.sa3(0,-p*q+s)
this.b.sO(0)
this.c.sO(0)
t=t.D(0,a.z)
this.dx=this.ai(new V.I(t.a,t.b).q(0,2).t(0,u.ga4()))}this.a1()},
bP:function(a){var u,t,s
H.e(a,"$iq")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.A(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.K()
s=this.y
if(typeof s!=="number")return H.z(s)
u.sO(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.K()
u=this.x
if(typeof u!=="number")return H.z(u)
s.sO(-t*10*u)
this.a1()}},
fk:function(a){if(H.c(H.e(a,"$iq"),"$icP").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fm:function(a){var u,t,s,r,q,p,o
a=H.c(H.e(a,"$iq"),"$iaP")
if(!J.N(this.d,a.x.b))return
u=a.c
t=a.d
s=t.D(0,a.y)
r=this.ai(new V.I(s.a,s.b).q(0,2).t(0,u.ga4()))
s=this.c
q=r.a
if(typeof q!=="number")return q.K()
p=this.y
if(typeof p!=="number")return H.z(p)
o=this.cy
if(typeof o!=="number")return H.z(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.K()
q=this.x
if(typeof q!=="number")return H.z(q)
s=this.db
if(typeof s!=="number")return H.z(s)
o.sa3(0,-p*q+s)
this.b.sO(0)
this.c.sO(0)
t=t.D(0,a.z)
this.dx=this.ai(new V.I(t.a,t.b).q(0,2).t(0,u.ga4()))
this.a1()},
hM:function(a){H.e(a,"$iq")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
hK:function(a){var u,t,s,r,q,p,o
a=H.c(H.e(a,"$iq"),"$idf")
if(!this.cx)return
if(this.ch){u=a.d.D(0,a.y)
u=new V.I(u.a,u.b)
u=u.A(u)
t=this.Q
if(typeof t!=="number")return H.z(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.D(0,a.y)
u=this.ai(new V.I(t.a,t.b).q(0,2).t(0,u.ga4()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.K()
s=this.y
if(typeof s!=="number")return H.z(s)
t.sO(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.K()
t=this.x
if(typeof t!=="number")return H.z(t)
s.sO(-u*10*t)}else{u=a.c
t=a.d
s=t.D(0,a.y)
r=this.ai(new V.I(s.a,s.b).q(0,2).t(0,u.ga4()))
s=this.c
q=r.a
if(typeof q!=="number")return q.K()
p=this.y
if(typeof p!=="number")return H.z(p)
o=this.cy
if(typeof o!=="number")return H.z(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.K()
q=this.x
if(typeof q!=="number")return H.z(q)
s=this.db
if(typeof s!=="number")return H.z(s)
o.sa3(0,-p*q+s)
this.b.sO(0)
this.c.sO(0)
t=t.D(0,a.z)
this.dx=this.ai(new V.I(t.a,t.b).q(0,2).t(0,u.ga4()))}this.a1()},
hI:function(a){var u,t,s
H.e(a,"$iq")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.A(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.K()
s=this.y
if(typeof s!=="number")return H.z(s)
u.sO(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.K()
u=this.x
if(typeof u!=="number")return H.z(u)
s.sO(-t*10*u)
this.a1()}},
aI:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.aJ()
if(u<t){this.dy=t
s=a.y
this.c.ah(s)
this.b.ah(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.fr=V.aC(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1).q(0,V.hz(this.c.d))}return this.fr},
$iW:1}
U.dp.prototype={
gl:function(){var u=this.r
if(u==null){u=D.D()
this.r=u}return u},
I:function(a){var u=this.r
if(u!=null)u.v(a)},
aS:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.D()
u.e=t
u=t}else u=t
t=this.gfn()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.D()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
fo:function(a){var u,t,s,r
H.e(a,"$iq")
if(!J.N(this.b,this.a.b.c))return
H.c(a,"$ibT")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){this.d=r
u=new D.y("zoom",u,r,this,[P.t])
u.b=!0
this.I(u)}},
aI:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.jw(s,s,s,1)}return this.f},
$iW:1}
M.cA.prototype={
gl:function(){var u=this.f
if(u==null){u=D.D()
this.f=u}return u},
R:function(a){var u
H.e(a,"$iq")
u=this.f
if(u!=null)u.v(a)},
aL:function(){return this.R(null)},
saT:function(a){var u,t
if(a==null)a=new X.ec()
u=this.a
if(u!==a){if(u!=null)u.gl().N(0,this.gP())
t=this.a
this.a=a
a.gl().h(0,this.gP())
u=new D.y("camera",t,this.a,this,[X.be])
u.b=!0
this.R(u)}},
saY:function(a,b){var u,t
if(b==null)b=X.eb(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gl().N(0,this.gP())
t=this.b
this.b=b
b.gl().h(0,this.gP())
u=new D.y("target",t,this.b,this,[X.bq])
u.b=!0
this.R(u)}},
saZ:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gl().N(0,this.gP())
t=this.c
this.c=a
if(a!=null)a.gl().h(0,this.gP())
u=new D.y("technique",t,this.c,this,[O.b8])
u.b=!0
this.R(u)}},
a2:function(a){a.ct(this.c)
this.b.U(a)
this.a.U(a)
this.d.ah(a)
this.d.a2(a)
this.a.ay(a)
this.b.toString
a.cs()},
$iaq:1,
$ibp:1}
M.cD.prototype={
R:function(a){var u
H.e(a,"$iq")
u=this.x
if(u!=null)u.v(a)},
aL:function(){return this.R(null)},
fD:function(a,b){var u,t,s,r,q,p,o,n
u=E.a8
H.d(b,"$ih",[u],"$ah")
for(t=b.length,s=this.gP(),r={func:1,ret:-1,args:[D.q]},q=[r],p=0;p<b.length;b.length===t||(0,H.u)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.aw()
n.sZ(null)
n.sar(null)
n.c=null
n.d=0
o.z=n}H.l(s,r)
if(n.a==null)n.sZ(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.b2(a,b,this,[u])
u.b=!0
this.R(u)},
fF:function(a,b){var u,t,s,r,q,p
u=E.a8
H.d(b,"$ih",[u],"$ah")
for(t=b.length,s=this.gP(),r=0;r<b.length;b.length===t||(0,H.u)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aw()
p.sZ(null)
p.sar(null)
p.c=null
p.d=0
q.z=p}p.N(0,s)}}u=new D.b3(a,b,this,[u])
u.b=!0
this.R(u)},
saT:function(a){var u,t
if(a==null)a=X.hB(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gl().N(0,this.gP())
t=this.a
this.a=a
a.gl().h(0,this.gP())
u=new D.y("camera",t,this.a,this,[X.be])
u.b=!0
this.R(u)}},
saY:function(a,b){var u,t
if(b==null)b=X.eb(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gl().N(0,this.gP())
t=this.b
this.b=b
b.gl().h(0,this.gP())
u=new D.y("target",t,this.b,this,[X.bq])
u.b=!0
this.R(u)}},
saZ:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gl().N(0,this.gP())
t=this.c
this.c=a
if(a!=null)a.gl().h(0,this.gP())
u=new D.y("technique",t,this.c,this,[O.b8])
u.b=!0
this.R(u)}},
gl:function(){var u=this.x
if(u==null){u=D.D()
this.x=u}return u},
a2:function(a){var u
a.ct(this.c)
this.b.U(a)
this.a.U(a)
u=this.c
if(u!=null)u.ah(a)
for(u=this.d.a,u=new J.a6(u,u.length,0,[H.r(u,0)]);u.B();)u.d.ah(a)
for(u=this.d.a,u=new J.a6(u,u.length,0,[H.r(u,0)]);u.B();)u.d.a2(a)
this.a.toString
a.cy.aw()
a.db.aw()
this.b.toString
a.cs()},
seX:function(a,b){this.d=H.d(b,"$iK",[E.a8],"$aK")},
$iaq:1,
$ibp:1}
M.aq.prototype={}
M.bp.prototype={}
M.d8.prototype={
gl:function(){var u=this.cy
if(u==null){u=D.D()
this.cy=u}return u},
R:function(a){var u
H.e(a,"$iq")
u=this.cy
if(u!=null)u.v(a)},
aL:function(){return this.R(null)},
ft:function(a,b){var u,t,s,r,q,p,o,n
u=M.aq
H.d(b,"$ih",[u],"$ah")
for(t=b.length,s=this.gP(),r={func:1,ret:-1,args:[D.q]},q=[r],p=0;p<b.length;b.length===t||(0,H.u)(b),++p){o=b[p]
if(o!=null){n=o.gl()
n.toString
H.l(s,r)
if(n.a==null)n.sZ(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.b2(a,b,this,[u])
u.b=!0
this.R(u)},
ha:function(a,b){var u,t,s,r,q
u=M.aq
H.d(b,"$ih",[u],"$ah")
for(t=b.length,s=this.gP(),r=0;r<b.length;b.length===t||(0,H.u)(b),++r){q=b[r]
if(q!=null)q.gl().N(0,s)}u=new D.b3(a,b,this,[u])
u.b=!0
this.R(u)},
a2:function(a){var u,t
this.y.se4(0,this.r)
for(u=this.z.a,u=new J.a6(u,u.length,0,[H.r(u,0)]);u.B();){t=u.d
t.saY(0,this.y)
t.saT(this.e)
t.a2(a)}this.y.se4(0,this.x)
for(u=this.z.a,u=new J.a6(u,u.length,0,[H.r(u,0)]);u.B();){t=u.d
t.saY(0,this.y)
t.saT(this.f)
t.a2(a)}},
shh:function(a){this.z=H.d(a,"$iK",[M.aq],"$aK")},
$ibp:1}
A.ct.prototype={}
A.dN.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iH:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
C.b.du(r.a,r.c)}},
dr:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
C.b.ds(r.a,r.c)}}}
A.cS.prototype={
ev:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.b7("")
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
a6.hU(u)
a6.i0(u)
a6.hV(u)
a6.i8(u)
a6.i9(u)
a6.i2(u)
a6.ie(u)
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
u=new P.b7("")
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
q.hY(u)
q.hT(u)
q.hW(u)
q.hZ(u)
q.i6(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.i4(u)
q.i5(u)}q.i1(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
if(l!==C.c){m+="uniform float alpha;\n"
u.a=m
if(l!==C.f){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.d){m+="uniform samplerCube alphaTxt;\n"
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
case C.e:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.d:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.b([],[P.x])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.w(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.hX(u)
q.i3(u)
q.i7(u)
q.ia(u)
q.ib(u)
q.ic(u)
q.i_(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.x])
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
if(a6.x2)this.k1=H.c(this.y.k(0,"txt2DMat"),"$ic5")
if(a6.y1)this.k2=H.c(this.y.k(0,"txtCubeMat"),"$iad")
if(a6.y2)this.k3=H.c(this.y.k(0,"colorMat"),"$iad")
this.seT(H.b([],[A.ad]))
t=a6.am
if(t>0){this.k4=H.e(this.y.k(0,"bendMatCount"),"$iC")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.p(P.o("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.c(g,"$iad"))}}t=a6.a
if(t!==C.c){this.r2=H.c(this.y.k(0,"emissionClr"),"$iA")
switch(t){case C.c:break
case C.f:break
case C.e:this.rx=H.c(this.y.k(0,"emissionTxt"),"$iaa")
this.x1=H.c(this.y.k(0,"nullEmissionTxt"),"$iC")
break
case C.d:this.ry=H.c(this.y.k(0,"emissionTxt"),"$ia4")
this.x1=H.c(this.y.k(0,"nullEmissionTxt"),"$iC")
break}}t=a6.b
if(t!==C.c){this.x2=H.c(this.y.k(0,"ambientClr"),"$iA")
switch(t){case C.c:break
case C.f:break
case C.e:this.y1=H.c(this.y.k(0,"ambientTxt"),"$iaa")
this.am=H.c(this.y.k(0,"nullAmbientTxt"),"$iC")
break
case C.d:this.y2=H.c(this.y.k(0,"ambientTxt"),"$ia4")
this.am=H.c(this.y.k(0,"nullAmbientTxt"),"$iC")
break}}t=a6.c
if(t!==C.c){this.ae=H.c(this.y.k(0,"diffuseClr"),"$iA")
switch(t){case C.c:break
case C.f:break
case C.e:this.b9=H.c(this.y.k(0,"diffuseTxt"),"$iaa")
this.ba=H.c(this.y.k(0,"nullDiffuseTxt"),"$iC")
break
case C.d:this.dv=H.c(this.y.k(0,"diffuseTxt"),"$ia4")
this.ba=H.c(this.y.k(0,"nullDiffuseTxt"),"$iC")
break}}t=a6.d
if(t!==C.c){this.bb=H.c(this.y.k(0,"invDiffuseClr"),"$iA")
switch(t){case C.c:break
case C.f:break
case C.e:this.dw=H.c(this.y.k(0,"invDiffuseTxt"),"$iaa")
this.bc=H.c(this.y.k(0,"nullInvDiffuseTxt"),"$iC")
break
case C.d:this.dz=H.c(this.y.k(0,"invDiffuseTxt"),"$ia4")
this.bc=H.c(this.y.k(0,"nullInvDiffuseTxt"),"$iC")
break}}t=a6.e
if(t!==C.c){this.bf=H.c(this.y.k(0,"shininess"),"$iL")
this.bd=H.c(this.y.k(0,"specularClr"),"$iA")
switch(t){case C.c:break
case C.f:break
case C.e:this.dA=H.c(this.y.k(0,"specularTxt"),"$iaa")
this.be=H.c(this.y.k(0,"nullSpecularTxt"),"$iC")
break
case C.d:this.dB=H.c(this.y.k(0,"specularTxt"),"$ia4")
this.be=H.c(this.y.k(0,"nullSpecularTxt"),"$iC")
break}}switch(a6.f){case C.c:break
case C.f:break
case C.e:this.dC=H.c(this.y.k(0,"bumpTxt"),"$iaa")
this.bg=H.c(this.y.k(0,"nullBumpTxt"),"$iC")
break
case C.d:this.dD=H.c(this.y.k(0,"bumpTxt"),"$ia4")
this.bg=H.c(this.y.k(0,"nullBumpTxt"),"$iC")
break}if(a6.dy){this.dE=H.c(this.y.k(0,"envSampler"),"$ia4")
this.dF=H.c(this.y.k(0,"nullEnvTxt"),"$iC")
t=a6.r
if(t!==C.c){this.bh=H.c(this.y.k(0,"reflectClr"),"$iA")
switch(t){case C.c:break
case C.f:break
case C.e:this.dG=H.c(this.y.k(0,"reflectTxt"),"$iaa")
this.bi=H.c(this.y.k(0,"nullReflectTxt"),"$iC")
break
case C.d:this.dH=H.c(this.y.k(0,"reflectTxt"),"$ia4")
this.bi=H.c(this.y.k(0,"nullReflectTxt"),"$iC")
break}}t=a6.x
if(t!==C.c){this.bj=H.c(this.y.k(0,"refraction"),"$iL")
this.bk=H.c(this.y.k(0,"refractClr"),"$iA")
switch(t){case C.c:break
case C.f:break
case C.e:this.dI=H.c(this.y.k(0,"refractTxt"),"$iaa")
this.bl=H.c(this.y.k(0,"nullRefractTxt"),"$iC")
break
case C.d:this.dJ=H.c(this.y.k(0,"refractTxt"),"$ia4")
this.bl=H.c(this.y.k(0,"nullRefractTxt"),"$iC")
break}}}t=a6.y
if(t!==C.c){this.bm=H.c(this.y.k(0,"alpha"),"$iL")
switch(t){case C.c:break
case C.f:break
case C.e:this.dK=H.c(this.y.k(0,"alphaTxt"),"$iaa")
this.bn=H.c(this.y.k(0,"nullAlphaTxt"),"$iC")
break
case C.d:this.dL=H.c(this.y.k(0,"alphaTxt"),"$ia4")
this.bn=H.c(this.y.k(0,"nullAlphaTxt"),"$iC")
break}}this.seF(H.b([],[A.c4]))
this.seG(H.b([],[A.c6]))
this.seH(H.b([],[A.c7]))
this.seI(H.b([],[A.c8]))
this.seJ(H.b([],[A.c9]))
this.seK(H.b([],[A.ca]))
if(a6.k2){t=a6.z
if(t>0){this.dM=H.e(this.y.k(0,"dirLightCount"),"$iC")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iA")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iA")
s=this.cb;(s&&C.a).h(s,new A.c4(h,g,f))}}t=a6.Q
if(t>0){this.dN=H.e(this.y.k(0,"pntLightCount"),"$iC")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iA")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iA")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iA")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iL")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iL")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iL")
s=this.cc;(s&&C.a).h(s,new A.c6(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.dO=H.e(this.y.k(0,"spotLightCount"),"$iC")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iA")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iA")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iA")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iA")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iL")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iL")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iL")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iL")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iL")
s=this.cd;(s&&C.a).h(s,new A.c7(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.dP=H.e(this.y.k(0,"txtDirLightCount"),"$iC")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iA")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iA")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iA")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iA")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iA")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iC")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iaa")
s=this.ce;(s&&C.a).h(s,new A.c8(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.dQ=H.e(this.y.k(0,"txtPntLightCount"),"$iC")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iA")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iA")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$ic5")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iA")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iC")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iL")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iL")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iL")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$ia4")
s=this.cf;(s&&C.a).h(s,new A.c9(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.dR=H.e(this.y.k(0,"txtSpotLightCount"),"$iC")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iA")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iA")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iA")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iA")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iA")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iC")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iA")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iL")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iL")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$iL")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a3,"$iL")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a4,"$iL")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a5,"$iaa")
s=this.cg;(s&&C.a).h(s,new A.ca(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ad:function(a,b,c){C.b.J(b.a,b.d,1)},
a6:function(a,b,c){if(c==null||c.d<6)C.b.J(b.a,b.d,1)
else{a.cC(c)
C.b.J(b.a,b.d,0)}},
seT:function(a){this.r1=H.d(a,"$ia",[A.ad],"$aa")},
seF:function(a){this.cb=H.d(a,"$ia",[A.c4],"$aa")},
seG:function(a){this.cc=H.d(a,"$ia",[A.c6],"$aa")},
seH:function(a){this.cd=H.d(a,"$ia",[A.c7],"$aa")},
seI:function(a){this.ce=H.d(a,"$ia",[A.c8],"$aa")},
seJ:function(a){this.cf=H.d(a,"$ia",[A.c9],"$aa")},
seK:function(a){this.cg=H.d(a,"$ia",[A.ca],"$aa")}}
A.ev.prototype={
hU:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.am+"];\n"
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
i0:function(a){var u
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
hV:function(a){var u
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
i8:function(a){var u,t
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
i9:function(a){var u,t
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
i2:function(a){var u
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
ie:function(a){var u
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
ap:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.j(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.cF(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
hY:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.ap(a,u,"emission")
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
case C.e:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
hT:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.ap(a,u,"ambient")
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
case C.e:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
hW:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.ap(a,u,"diffuse")
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
case C.e:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
hZ:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.ap(a,u,"invDiffuse")
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
case C.e:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
i6:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.ap(a,u,"specular")
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
case C.e:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
i1:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.c:break
case C.f:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.d:u+="uniform samplerCube bumpTxt;\n"
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
case C.d:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
i4:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.ap(a,u,"reflect")
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
case C.e:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
i5:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.ap(a,u,"refract")
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
case C.e:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hX:function(a){var u,t
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
i3:function(a){var u,t
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
i7:function(a){var u,t
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
ia:function(a){var u,t,s
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
ib:function(a){var u,t,s
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
ic:function(a){var u,t,s
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
i_:function(a){var u
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
A.c4.prototype={}
A.c8.prototype={}
A.c6.prototype={}
A.c9.prototype={}
A.c7.prototype={}
A.ca.prototype={}
A.bY.prototype={
cJ:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dT:function(a,b){var u,t,s
this.c=a
this.d=b
this.e=this.cY(a,35633)
this.f=this.cY(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dg(u,t,this.e)
C.b.dg(u,this.r,this.f)
C.b.iQ(u,this.r)
if(!H.iJ(C.b.by(u,this.r,35714))){s=C.b.ei(u,this.r)
C.b.iy(u,this.r)
H.p(P.o("Failed to link shader: "+H.i(s)))}this.hw()
this.hy()},
U:function(a){C.b.cw(a.a,this.r)
this.x.iH()},
cY:function(a,b){var u,t,s
u=this.a
t=C.b.iw(u,b)
C.b.eo(u,t,a)
C.b.is(u,t)
if(!H.iJ(C.b.ek(u,t,35713))){s=C.b.ej(u,t)
C.b.iz(u,t)
throw H.k(P.o("Error compiling shader '"+H.i(t)+"': "+H.i(s)))}return t},
hw:function(){var u,t,s,r,q,p
u=H.b([],[A.ct])
t=this.a
s=H.a0(C.b.by(t,this.r,35721))
if(typeof s!=="number")return H.z(s)
r=0
for(;r<s;++r){q=C.b.ed(t,this.r,r)
p=C.b.ef(t,this.r,q.name)
C.a.h(u,new A.ct(t,q.name,p))}this.x=new A.dN(u)},
hy:function(){var u,t,s,r,q,p
u=H.b([],[A.dg])
t=this.a
s=H.a0(C.b.by(t,this.r,35718))
if(typeof s!=="number")return H.z(s)
r=0
for(;r<s;++r){q=C.b.ee(t,this.r,r)
p=C.b.el(t,this.r,q.name)
C.a.h(u,this.ix(q.type,q.size,q.name,p))}this.y=new A.fi(u)},
aB:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.C(u,t,b,c)
else return A.hF(u,t,b,a,c)},
f_:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aa(u,t,b,c)
else return A.hF(u,t,b,a,c)},
f0:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a4(u,t,b,c)
else return A.hF(u,t,b,a,c)},
b7:function(a,b){return new P.dw(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
ix:function(a,b,c,d){switch(a){case 5120:return this.aB(b,c,d)
case 5121:return this.aB(b,c,d)
case 5122:return this.aB(b,c,d)
case 5123:return this.aB(b,c,d)
case 5124:return this.aB(b,c,d)
case 5125:return this.aB(b,c,d)
case 5126:return new A.L(this.a,this.r,c,d)
case 35664:return new A.fd(this.a,this.r,c,d)
case 35665:return new A.A(this.a,this.r,c,d)
case 35666:return new A.fg(this.a,this.r,c,d)
case 35667:return new A.fe(this.a,this.r,c,d)
case 35668:return new A.ff(this.a,this.r,c,d)
case 35669:return new A.fh(this.a,this.r,c,d)
case 35674:return new A.fj(this.a,this.r,c,d)
case 35675:return new A.c5(this.a,this.r,c,d)
case 35676:return new A.ad(this.a,this.r,c,d)
case 35678:return this.f_(b,c,d)
case 35680:return this.f0(b,c,d)
case 35670:throw H.k(this.b7("BOOL",c))
case 35671:throw H.k(this.b7("BOOL_VEC2",c))
case 35672:throw H.k(this.b7("BOOL_VEC3",c))
case 35673:throw H.k(this.b7("BOOL_VEC4",c))
default:throw H.k(P.o("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.bh.prototype={
i:function(a){return this.b}}
A.d5.prototype={}
A.dg.prototype={}
A.fi.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
k:function(a,b){var u=this.j(0,b)
if(u==null)throw H.k(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.G()},
iJ:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+a
return s},
G:function(){return this.iJ("\n")}}
A.C.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.fe.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.ff.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.fh.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.fc.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
shR:function(a){this.e=H.d(a,"$ia",[P.v],"$aa")}}
A.L.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.fd.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.A.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.fg.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.fj.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.c5.prototype={
ab:function(a){var u=new Float32Array(H.ck(H.d(a,"$ia",[P.t],"$aa")))
C.b.ea(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.ad.prototype={
ab:function(a){var u=new Float32Array(H.ck(H.d(a,"$ia",[P.t],"$aa")))
C.b.eb(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.aa.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.a4.prototype={
cC:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.J(t,s,0)
else C.b.J(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.h7.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cn(u.b,b).cn(u.d.cn(u.c,b),c)
u=new V.a9(t.a,t.b,t.c)
if(!J.N(a.f,u)){a.f=u
u=a.a
if(u!=null)u.a0()}a.sb0(t.t(0,Math.sqrt(t.A(t))))
u=1-b
s=1-c
s=new V.aS(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.N(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.a0()}},
$S:32}
F.V.prototype={
eS:function(){var u,t,s,r,q
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
eW:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.D(0,t)
u=new V.F(u.a,u.b,u.c)
q=u.t(0,Math.sqrt(u.A(u)))
u=r.D(0,t)
u=new V.F(u.a,u.b,u.c)
u=q.aU(u.t(0,Math.sqrt(u.A(u))))
return u.t(0,Math.sqrt(u.A(u)))},
c5:function(){if(this.d!=null)return!0
var u=this.eS()
if(u==null){u=this.eW()
if(u==null)return!1}this.d=u
this.a.a.a0()
return!0},
eR:function(){var u,t,s,r,q
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
eV:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.E().a){u=m.D(0,p)
u=new V.F(u.a,u.b,u.c)
h=u.t(0,Math.sqrt(u.A(u)))
if(j.a-k.a<0)h=h.K(0)}else{g=(u-l.b)/i
u=m.D(0,p)
u=new V.a9(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).D(0,s)
u=new V.F(u.a,u.b,u.c)
h=u.t(0,Math.sqrt(u.A(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.K(0)}u=this.d
if(u!=null){f=u.t(0,Math.sqrt(u.A(u)))
u=f.aU(h)
u=u.t(0,Math.sqrt(u.A(u))).aU(f)
h=u.t(0,Math.sqrt(u.A(u)))}return h},
c3:function(){if(this.e!=null)return!0
var u=this.eR()
if(u==null){u=this.eV()
if(u==null)return!1}this.e=u
this.a.a.a0()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
u:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.j.aa(J.ai(u.e),0)+", "+C.j.aa(J.ai(this.b.e),0)+", "+C.j.aa(J.ai(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
G:function(){return this.u("")}}
F.aN.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
u:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.j.aa(J.ai(u.e),0)+", "+C.j.aa(J.ai(this.b.e),0)},
G:function(){return this.u("")}}
F.b6.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
u:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.aa(J.ai(u.e),0)},
G:function(){return this.u("")}}
F.d3.prototype={
gl:function(){var u=this.e
if(u==null){u=D.D()
this.e=u}return u},
iU:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.W()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.u)(u),++r){q=u[r]
this.a.h(0,q.iv())}this.a.W()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.u)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.W()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.j(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.b6()
if(m.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.v(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.u)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.W()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.j(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.W()
o=o.e
if(typeof o!=="number")return o.C()
o+=t
n=n.c
if(o>=n.length)return H.j(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.jq(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.u)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.W()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.j(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.W()
o=o.e
if(typeof o!=="number")return o.C()
o+=t
n=n.c
if(o>=n.length)return H.j(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.W()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.j(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.bK(k,j,h)}u=this.e
if(u!=null)u.ax()},
au:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.au()||!1
if(!this.a.au())t=!1
u=this.e
if(u!=null)u.ax()
return t},
dk:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.at()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.aV().a)!==0)++r
if((s&$.aU().a)!==0)++r
if((s&$.aW().a)!==0)++r
if((s&$.aX().a)!==0)++r
if((s&$.cp().a)!==0)++r
if((s&$.cq().a)!==0)++r
if((s&$.bz().a)!==0)++r
if((s&$.aT().a)!==0)++r
q=a1.gcE(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.t
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.cw])
for(m=0,l=0;l<r;++l){k=a1.ij(l)
j=k.gcE(k)
C.a.V(n,l,new Z.cw(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.j(t,i)
h=t[i].iR(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.V(o,g,h[f]);++g}}m+=j}H.d(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.ak(t,34962,e)
C.b.dj(t,34962,new Float32Array(H.ck(o)),35044)
C.b.ak(t,34962,null)
d=new Z.bC(new Z.dr(34962,e),n,a1)
d.sfe(H.b([],[Z.b1]))
if(this.b.b.length!==0){s=P.v
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.W()
C.a.h(c,b.e)}a=Z.hG(t,34963,H.d(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b1(0,c.length,a))}if(this.c.b.length!==0){s=P.v
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.W()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.j(b,l)
b=b[l].b
b.a.a.W()
C.a.h(c,b.e)}a=Z.hG(t,34963,H.d(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b1(1,c.length,a))}if(this.d.b.length!==0){s=P.v
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.W()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.j(b,l)
b=b[l].b
b.a.a.W()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.j(b,l)
b=b[l].c
b.a.a.W()
C.a.h(c,b.e)}a=Z.hG(t,34963,H.d(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b1(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.x])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.u("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.u("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.u("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.u("   "))}return C.a.w(u,"\n")},
af:function(a){var u=this.e
if(u!=null)u.v(a)},
a0:function(){return this.af(null)},
$ikI:1}
F.eR.prototype={
ig:function(a){var u,t,s,r,q,p
H.d(a,"$ia",[F.ag],"$aa")
u=H.b([],[F.V])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.bK(t,q,p))}return u},
ih:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.d(c,"$ia",[F.ag],"$aa")
u=H.b([],[F.V])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.j(c,r)
l=c[r];++r
if(r>=m)return H.j(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.j(c,j)
i=c[j]
if(s<0||s>=m)return H.j(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.bK(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.bK(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.bK(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.bK(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
au:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c5())s=!1
return s},
c4:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c3())s=!1
return s},
i:function(a){return this.G()},
u:function(a){var u,t,s,r
u=H.b([],[P.x])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
G:function(){return this.u("")},
sf5:function(a){this.b=H.d(a,"$ia",[F.V],"$aa")}}
F.eS.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.G()},
u:function(a){var u,t,s,r
u=H.b([],[P.x])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.j(r,s)
C.a.h(u,r[s].u(a+(""+s+". ")))}return C.a.w(u,"\n")},
G:function(){return this.u("")},
sff:function(a){this.b=H.d(a,"$ia",[F.aN],"$aa")}}
F.eT.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.G()},
u:function(a){var u,t,s,r
u=H.b([],[P.x])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
G:function(){return this.u("")},
sbT:function(a){this.b=H.d(a,"$ia",[F.b6],"$aa")}}
F.ag.prototype={
c7:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.fq(this.cx,s,p,u,t,r,q,a,o)},
iv:function(){return this.c7(null)},
sb0:function(a){var u
if(!J.N(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a0()}},
iR:function(a){var u,t
if(a.p(0,$.at())){u=this.f
t=[P.t]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aV())){u=this.r
t=[P.t]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aU())){u=this.x
t=[P.t]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aW())){u=this.y
t=[P.t]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.p(0,$.aX())){u=this.z
t=[P.t]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cp())){u=this.Q
t=[P.t]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cq())){u=this.Q
t=[P.t]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bz()))return H.b([this.ch],[P.t])
else if(a.p(0,$.aT())){u=this.cx
t=[P.t]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.t])},
c5:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dq()
this.d.a8(0,new F.fy(u))
u=u.a
this.r=u.t(0,Math.sqrt(u.A(u)))
u=this.a
if(u!=null){u.a0()
u=this.a.e
if(u!=null)u.ax()}return!0},
c3:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dq()
this.d.a8(0,new F.fx(u))
u=u.a
this.x=u.t(0,Math.sqrt(u.A(u)))
u=this.a
if(u!=null){u.a0()
u=this.a.e
if(u!=null)u.ax()}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
u:function(a){var u,t,s
u=H.b([],[P.x])
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
G:function(){return this.u("")}}
F.fy.prototype={
$1:function(a){var u,t
H.e(a,"$iV")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:5}
F.fx.prototype={
$1:function(a){var u,t
H.e(a,"$iV")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:5}
F.fr.prototype={
W:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.k(P.o("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a0()
return!0},
ii:function(a,b,c,d,e,f,g,h,i){var u=F.fq(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
b8:function(a,b,c,d,e,f){return this.ii(a,null,b,c,null,d,e,f,0)},
gm:function(a){return this.c.length},
au:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c5()
return!0},
c4:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c3()
return!0},
io:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.N(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.v(null)}}}}return!0},
i:function(a){return this.G()},
u:function(a){var u,t,s,r
this.W()
u=H.b([],[P.x])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
G:function(){return this.u("")},
shS:function(a){this.c=H.d(a,"$ia",[F.ag],"$aa")}}
F.fs.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
a8:function(a,b){H.l(b,{func:1,ret:-1,args:[F.V]})
C.a.a8(this.b,b)
C.a.a8(this.c,new F.ft(this,b))
C.a.a8(this.d,new F.fu(this,b))},
i:function(a){return this.G()},
u:function(a){var u,t,s,r
u=H.b([],[P.x])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].u(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].u(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
G:function(){return this.u("")},
sf6:function(a){this.b=H.d(a,"$ia",[F.V],"$aa")},
sf7:function(a){this.c=H.d(a,"$ia",[F.V],"$aa")},
sf8:function(a){this.d=H.d(a,"$ia",[F.V],"$aa")}}
F.ft.prototype={
$1:function(a){H.e(a,"$iV")
if(!J.N(a.a,this.a))this.b.$1(a)},
$S:5}
F.fu.prototype={
$1:function(a){var u
H.e(a,"$iV")
u=this.a
if(!J.N(a.a,u)&&!J.N(a.b,u))this.b.$1(a)},
$S:5}
F.fv.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.G()},
u:function(a){var u,t,s,r
u=H.b([],[P.x])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].u(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
G:function(){return this.u("")},
sfg:function(a){this.b=H.d(a,"$ia",[F.aN],"$aa")},
sfh:function(a){this.c=H.d(a,"$ia",[F.aN],"$aa")}}
F.fw.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.G()},
u:function(a){var u,t,s,r
u=H.b([],[P.x])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
G:function(){return this.u("")},
sbT:function(a){this.b=H.d(a,"$ia",[F.b6],"$aa")}}
O.cR.prototype={
gl:function(){var u=this.dy
if(u==null){u=D.D()
this.dy=u}return u},
M:function(a){var u
H.e(a,"$iq")
u=this.dy
if(u!=null)u.v(a)},
aO:function(){return this.M(null)},
d7:function(a){H.e(a,"$iq")
this.a=null
this.M(a)},
hp:function(){return this.d7(null)},
fv:function(a,b){var u=V.Z
u=new D.b2(a,H.d(b,"$ih",[u],"$ah"),this,[u])
u.b=!0
this.M(u)},
fz:function(a,b){var u=V.Z
u=new D.b3(a,H.d(b,"$ih",[u],"$ah"),this,[u])
u.b=!0
this.M(u)},
cV:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.h.a_(u.e.length+3,4)*4
s=C.h.a_(u.f.length+3,4)*4
r=C.h.a_(u.r.length+3,4)*4
q=C.h.a_(u.x.length+3,4)*4
p=C.h.a_(u.y.length+3,4)*4
o=C.h.a_(u.z.length+3,4)*4
n=C.h.a_(this.e.a.length+3,4)*4
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
a2=u===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e||g===C.e||f===C.e
a3=u===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d||h===C.d||g===C.d||f===C.d
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.at()
if(a0){b=$.aV()
a7=new Z.aH(a7.a|b.a)}if(a1){b=$.aU()
a7=new Z.aH(a7.a|b.a)}if(a2){b=$.aW()
a7=new Z.aH(a7.a|b.a)}if(a3){b=$.aX()
a7=new Z.aH(a7.a|b.a)}if(a5){b=$.aT()
a7=new Z.aH(a7.a|b.a)}return new A.ev(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
S:function(a,b){H.d(a,"$ia",[T.c0],"$aa")
if(b!=null)if(!C.a.aG(a,b)){b.a=a.length
C.a.h(a,b)}},
ah:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.a6(u,u.length,0,[H.r(u,0)]);u.B();){t=u.d
t.toString
s=$.fp
if(s==null){s=new V.F(0,0,1)
$.fp=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cv(s)}}},
e5:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.cV()
t=H.e(a2.fr.j(0,u.ae),"$icS")
if(t==null){t=A.jv(u,a2.a)
a2.df(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.b9
u=a3.e
if(!(u instanceof Z.bC)){a3.e=null
u=null}if(u==null||!u.d.p(0,r)){u=s.r1
if(u)a3.d.au()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.c4()
p.a.c4()
p=p.e
if(p!=null)p.ax()}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.io()
o=o.e
if(o!=null)o.ax()}m=a3.d.dk(new Z.ds(a2.a),r)
m.av($.at()).e=this.a.Q.c
if(u)m.av($.aV()).e=this.a.cx.c
if(q)m.av($.aU()).e=this.a.ch.c
if(s.rx)m.av($.aW()).e=this.a.cy.c
if(p)m.av($.aX()).e=this.a.db.c
if(s.x1)m.av($.aT()).e=this.a.dx.c
a3.e=m}u=T.c0
l=H.b([],[u])
this.a.U(a2)
if(s.fx){q=this.a
p=a2.dx.gL()
q=q.dy
q.toString
q.ab(p.a5(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db.gL().q(0,a2.dx.gL())
a2.cx=p}q=q.fr
q.toString
q.ab(p.a5(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gja().q(0,a2.dx.gL())
a2.ch=p}q=q.fy
q.toString
q.ab(p.a5(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ab(C.o.a5(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ab(C.o.a5(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ab(C.o.a5(p,!0))}if(s.am>0){k=this.e.a.length
q=this.a.k4
C.b.J(q.a,q.d,k)
for(q=[P.t],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.j(o,j)
o=o[j]
p.toString
H.e(o,"$iZ")
p=p.r1
if(j>=p.length)return H.j(p,j)
p=p[j]
i=new Float32Array(H.ck(H.d(o.a5(0,!0),"$ia",q,"$aa")))
C.b.eb(p.a,p.d,!1,i)}}switch(s.a){case C.c:break
case C.f:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.n(q.a,q.d,o,n,p)
break
case C.e:this.S(l,this.f.d)
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
C.b.n(p.a,p.d,o,n,q)
break
case C.d:this.S(l,this.f.e)
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
C.b.n(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.f:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.n(q.a,q.d,o,n,p)
break
case C.e:this.S(l,this.r.d)
q=this.a
p=this.r.d
q.ad(q.y1,q.am,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.n(p.a,p.d,o,n,q)
break
case C.d:this.S(l,this.r.e)
q=this.a
p=this.r.e
q.a6(q.y2,q.am,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.n(p.a,p.d,o,n,q)
break}switch(s.c){case C.c:break
case C.f:q=this.a
p=this.x.f
q=q.ae
q.toString
o=p.a
n=p.b
p=p.c
C.b.n(q.a,q.d,o,n,p)
break
case C.e:this.S(l,this.x.d)
q=this.a
p=this.x.d
q.ad(q.b9,q.ba,p)
p=this.a
q=this.x.f
p=p.ae
p.toString
o=q.a
n=q.b
q=q.c
C.b.n(p.a,p.d,o,n,q)
break
case C.d:this.S(l,this.x.e)
q=this.a
p=this.x.e
q.a6(q.dv,q.ba,p)
p=this.a
q=this.x.f
p=p.ae
p.toString
o=q.a
n=q.b
q=q.c
C.b.n(p.a,p.d,o,n,q)
break}switch(s.d){case C.c:break
case C.f:q=this.a
p=this.y.f
q=q.bb
q.toString
o=p.a
n=p.b
p=p.c
C.b.n(q.a,q.d,o,n,p)
break
case C.e:this.S(l,this.y.d)
q=this.a
p=this.y.d
q.ad(q.dw,q.bc,p)
p=this.a
q=this.y.f
p=p.bb
p.toString
o=q.a
n=q.b
q=q.c
C.b.n(p.a,p.d,o,n,q)
break
case C.d:this.S(l,this.y.e)
q=this.a
p=this.y.e
q.a6(q.dz,q.bc,p)
p=this.a
q=this.y.f
p=p.bb
p.toString
o=q.a
n=q.b
q=q.c
C.b.n(p.a,p.d,o,n,q)
break}switch(s.e){case C.c:break
case C.f:q=this.a
p=this.z.f
q=q.bd
q.toString
o=p.a
n=p.b
p=p.c
C.b.n(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bf
C.b.F(p.a,p.d,n)
break
case C.e:this.S(l,this.z.d)
q=this.a
p=this.z.d
q.ad(q.dA,q.be,p)
p=this.a
q=this.z.f
p=p.bd
p.toString
o=q.a
n=q.b
q=q.c
C.b.n(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bf
C.b.F(q.a,q.d,n)
break
case C.d:this.S(l,this.z.e)
q=this.a
p=this.z.e
q.a6(q.dB,q.be,p)
p=this.a
q=this.z.f
p=p.bd
p.toString
o=q.a
n=q.b
q=q.c
C.b.n(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bf
C.b.F(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.dM
C.b.J(q.a,q.d,k)
h=a2.db.gL()
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.u)(q),++f){e=q[f]
o=this.a.cb
if(g>=o.length)return H.j(o,g)
d=o[g]
o=h.cv(e.a)
n=o.a
c=o.b
b=o.c
b=o.t(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.n(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.n(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.dN
C.b.J(q.a,q.d,k)
h=a2.db.gL()
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.u)(q),++f){e=q[f]
o=this.a.cc
if(g>=o.length)return H.j(o,g)
d=o[g]
o=e.gaX(e)
n=d.b
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=h.b2(e.gaX(e))
n=d.c
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gal(e)
n=d.d
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gc_()
n=d.e
C.b.F(n.a,n.d,o)
o=e.gc0()
n=d.f
C.b.F(n.a,n.d,o)
o=e.gc1()
n=d.r
C.b.F(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.dO
C.b.J(q.a,q.d,k)
h=a2.db.gL()
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.u)(q),++f){e=q[f]
o=this.a.cd
if(g>=o.length)return H.j(o,g)
d=o[g]
o=e.gaX(e)
n=d.b
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gc9(e).jt()
n=d.c
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=h.b2(e.gaX(e))
n=d.d
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gal(e)
n=d.e
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gjs()
n=d.f
C.b.F(n.a,n.d,o)
o=e.gjr()
n=d.r
C.b.F(n.a,n.d,o)
o=e.gc_()
n=d.x
C.b.F(n.a,n.d,o)
o=e.gc0()
n=d.y
C.b.F(n.a,n.d,o)
o=e.gc1()
n=d.z
C.b.F(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.dP
C.b.J(q.a,q.d,k)
h=a2.db.gL()
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.u)(q),++f){e=q[f]
n=this.a.ce
if(g>=n.length)return H.j(n,g)
d=n[g]
n=e.gb_()
H.d(l,"$ia",o,"$aa")
if(!C.a.aG(l,n)){n.a=l.length
C.a.h(l,n)}n=e.gc9(e)
c=d.d
C.b.n(c.a,c.d,n.a,n.b,n.c)
n=e.gbv()
c=d.b
C.b.n(c.a,c.d,n.a,n.b,n.c)
n=e.gbs(e)
c=d.c
C.b.n(c.a,c.d,n.a,n.b,n.c)
n=h.cv(e.gc9(e))
c=n.a
b=n.b
a=n.c
a=n.t(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.n(b.a,b.d,c,n,a)
a=e.gal(e)
n=d.f
C.b.n(n.a,n.d,a.a,a.b,a.c)
a=e.gb_()
n=a.gbq(a)
if(!n){n=d.x
C.b.J(n.a,n.d,1)}else{n=d.r
c=a.gbq(a)
b=n.a
n=n.d
if(!c)C.b.J(b,n,0)
else C.b.J(b,n,a.giM(a))
n=d.x
C.b.J(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.dQ
C.b.J(q.a,q.d,k)
h=a2.db.gL()
for(q=this.dx.y,p=q.length,o=[P.t],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.u)(q),++f){e=q[f]
c=this.a.cf
if(g>=c.length)return H.j(c,g)
d=c[g]
c=e.gb_()
H.d(l,"$ia",n,"$aa")
if(!C.a.aG(l,c)){c.a=l.length
C.a.h(l,c)}a0=h.q(0,e.gL())
c=e.gL()
b=$.bV
if(b==null){b=new V.a9(0,0,0)
$.bV=b}b=c.b2(b)
c=d.b
C.b.n(c.a,c.d,b.a,b.b,b.c)
c=$.bV
if(c==null){c=new V.a9(0,0,0)
$.bV=c}c=a0.b2(c)
b=d.c
C.b.n(b.a,b.d,c.a,c.b,c.c)
c=a0.ck()
b=d.d
i=new Float32Array(H.ck(H.d(new V.cT(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).a5(0,!0),"$ia",o,"$aa")))
C.b.ea(b.a,b.d,!1,i)
b=e.gal(e)
c=d.e
C.b.n(c.a,c.d,b.a,b.b,b.c)
b=e.gb_()
c=b.gbq(b)
if(!c){c=d.r
C.b.J(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.J(a1,c,0)
else C.b.J(a1,c,b.a)
c=d.r
C.b.J(c.a,c.d,0)}c=e.gc_()
b=d.x
C.b.F(b.a,b.d,c)
c=e.gc0()
b=d.y
C.b.F(b.a,b.d,c)
c=e.gc1()
b=d.z
C.b.F(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.dR
C.b.J(q.a,q.d,k)
h=a2.db.gL()
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.u)(q),++f){e=q[f]
o=this.a.cg
if(g>=o.length)return H.j(o,g)
d=o[g]
o=e.gb_()
H.d(l,"$ia",u,"$aa")
if(!C.a.aG(l,o)){o.a=l.length
C.a.h(l,o)}o=e.gaX(e)
n=d.b
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gc9(e)
n=d.c
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gbv()
n=d.d
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gbs(e)
n=d.e
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=h.b2(e.gaX(e))
n=d.f
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gb_()
n=o.gbq(o)
if(!n){o=d.x
C.b.J(o.a,o.d,1)}else{n=d.r
c=o.gbq(o)
b=n.a
n=n.d
if(!c)C.b.J(b,n,0)
else C.b.J(b,n,o.giM(o))
o=d.x
C.b.J(o.a,o.d,0)}o=e.gal(e)
n=d.y
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gju()
n=d.z
C.b.F(n.a,n.d,o)
o=e.gjv()
n=d.Q
C.b.F(n.a,n.d,o)
o=e.gc_()
n=d.ch
C.b.F(n.a,n.d,o)
o=e.gc0()
n=d.cx
C.b.F(n.a,n.d,o)
o=e.gc1()
n=d.cy
C.b.F(n.a,n.d,o);++g}}}switch(s.f){case C.c:break
case C.f:break
case C.e:this.S(l,this.Q.d)
u=this.a
q=this.Q.d
u.ad(u.dC,u.bg,q)
break
case C.d:this.S(l,this.Q.e)
u=this.a
q=this.Q.e
u.a6(u.dD,u.bg,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db.gL().ck()
a2.Q=q}u=u.id
u.toString
u.ab(q.a5(0,!0))}if(s.dy){this.S(l,this.ch)
u=this.a
q=this.ch
u.a6(u.dE,u.dF,q)
switch(s.r){case C.c:break
case C.f:u=this.a
q=this.cx.f
u=u.bh
u.toString
p=q.a
o=q.b
q=q.c
C.b.n(u.a,u.d,p,o,q)
break
case C.e:this.S(l,this.cx.d)
u=this.a
q=this.cx.d
u.ad(u.dG,u.bi,q)
q=this.a
u=this.cx.f
q=q.bh
q.toString
p=u.a
o=u.b
u=u.c
C.b.n(q.a,q.d,p,o,u)
break
case C.d:this.S(l,this.cx.e)
u=this.a
q=this.cx.e
u.a6(u.dH,u.bi,q)
q=this.a
u=this.cx.f
q=q.bh
q.toString
p=u.a
o=u.b
u=u.c
C.b.n(q.a,q.d,p,o,u)
break}switch(s.x){case C.c:break
case C.f:u=this.a
q=this.cy.f
u=u.bk
u.toString
p=q.a
o=q.b
q=q.c
C.b.n(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bj
C.b.F(q.a,q.d,o)
break
case C.e:this.S(l,this.cy.d)
u=this.a
q=this.cy.d
u.ad(u.dI,u.bl,q)
q=this.a
u=this.cy.f
q=q.bk
q.toString
p=u.a
o=u.b
u=u.c
C.b.n(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bj
C.b.F(u.a,u.d,o)
break
case C.d:this.S(l,this.cy.e)
u=this.a
q=this.cy.e
u.a6(u.dJ,u.bl,q)
q=this.a
u=this.cy.f
q=q.bk
q.toString
p=u.a
o=u.b
u=u.c
C.b.n(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bj
C.b.F(u.a,u.d,o)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.f:u=this.a
p=this.db.f
u=u.bm
C.b.F(u.a,u.d,p)
break
case C.e:this.S(l,this.db.d)
u=this.a
p=this.db.d
u.ad(u.dK,u.bn,p)
p=this.a
u=this.db.f
p=p.bm
C.b.F(p.a,p.d,u)
break
case C.d:this.S(l,this.db.e)
u=this.a
p=this.db.e
u.a6(u.dL,u.bn,p)
p=this.a
u=this.db.f
p=p.bm
C.b.F(p.a,p.d,u)
break}u=a2.a
C.b.ca(u,3042)
C.b.im(u,770,771)}for(j=0;j<l.length;++j)l[j].U(a2)
u=a3.e
u.U(a2)
u.a2(a2)
u.ay(a2)
if(q)C.b.iD(a2.a,3042)
for(u=a2.a,j=0;j<l.length;++j){q=l[j]
if(q.c){q.c=!1
C.b.bZ(u,33984+q.a)
C.b.at(u,34067,null)}}q=this.a
q.toString
C.b.cw(u,null)
q.x.dr()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cV().ae},
seU:function(a){this.e=H.d(a,"$iK",[V.Z],"$aK")}}
O.et.prototype={
hs:function(a){var u=this.f
if(!(Math.abs(u-a)<$.E().a)){this.f=a
u=new D.y(this.b,u,a,this,[P.t])
u.b=!0
this.a.M(u)}},
aj:function(){this.cI()
this.hs(1)}}
O.bQ.prototype={
M:function(a){this.a.M(H.e(a,"$iq"))},
aO:function(){return this.M(null)},
aj:function(){},
hu:function(a){},
hv:function(a){var u,t
u=this.e
if(u!=a){if(u!=null)u.gl().N(0,this.gaD())
t=this.e
this.e=a
if(a!=null)a.gl().h(0,this.gaD())
u=new D.y(this.b+".textureCube",t,this.e,this,[T.c1])
u.b=!0
this.a.M(u)}},
sb0:function(a){var u=this.c
if(u!==C.d){if(u===C.c)this.aj()
this.c=C.d
this.hu(null)
u=this.a
u.a=null
u.M(null)}this.hv(a)}}
O.eu.prototype={}
O.aB.prototype={
d9:function(a){var u,t
if(!J.N(this.f,a)){u=this.f
this.f=a
t=new D.y(this.b+".color",u,a,this,[V.Q])
t.b=!0
this.a.M(t)}},
aj:function(){this.cI()
this.d9(new V.Q(1,1,1))},
sal:function(a,b){var u
if(this.c===C.c){this.c=C.f
this.aj()
u=this.a
u.a=null
u.M(null)}this.d9(b)}}
O.ew.prototype={
ht:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.E().a)){this.ch=a
u=new D.y(this.b+".refraction",u,a,this,[P.t])
u.b=!0
this.a.M(u)}},
aj:function(){this.bz()
this.ht(1)}}
O.ex.prototype={
bW:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.E().a)){this.ch=a
u=new D.y(this.b+".shininess",u,a,this,[P.t])
u.b=!0
this.a.M(u)}},
aj:function(){this.bz()
this.bW(100)}}
O.d4.prototype={
gl:function(){var u=this.e
if(u==null){u=D.D()
this.e=u}return u},
M:function(a){var u
H.e(a,"$iq")
u=this.e
if(u!=null)u.v(a)},
aO:function(){return this.M(null)},
e5:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.e(a.fr.j(0,"Skybox"),"$id5")
if(u==null){t=a.a
u=new A.d5(t,"Skybox")
u.cJ(t,"Skybox")
u.dT($.jO,$.jN)
u.z=u.x.j(0,"posAttr")
u.Q=H.c(u.y.j(0,"fov"),"$iL")
u.ch=H.c(u.y.j(0,"ratio"),"$iL")
u.cx=H.c(u.y.j(0,"boxClr"),"$iA")
u.cy=H.c(u.y.j(0,"boxTxt"),"$ia4")
u.db=H.c(u.y.j(0,"viewMat"),"$iad")
a.df(u)}this.a=u}if(b.e==null){t=b.d.dk(new Z.ds(a.a),$.at())
t.av($.at()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
t.U(a)}t=a.d
s=a.c
r=this.a
r.U(a)
q=this.b
p=r.Q
C.b.F(p.a,p.d,q)
q=r.ch
C.b.F(q.a,q.d,t/s)
s=this.c
r.cy.cC(s)
s=this.d
t=r.cx
C.b.n(t.a,t.d,s.a,s.b,s.c)
s=a.db.gL().ck()
r=r.db
r.toString
r.ab(s.a5(0,!0))
t=b.e
if(t instanceof Z.bC){t.U(a)
t.a2(a)
t.ay(a)}else b.e=null
t=this.a
t.toString
C.b.cw(a.a,null)
t.x.dr()
t=this.c
if(t!=null)t.ay(a)}}
O.b8.prototype={}
T.c0.prototype={}
T.c1.prototype={
gl:function(){var u=this.e
if(u==null){u=D.D()
this.e=u}return u},
U:function(a){var u
if(!this.c&&this.d>=6){this.c=!0
u=a.a
C.b.bZ(u,33984+this.a)
C.b.at(u,34067,this.b)}},
ay:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.bZ(u,33984+this.a)
C.b.at(u,34067,null)}}}
T.f3.prototype={
dW:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
u=a+"/"+d+"posx"+b
t=a+"/"+d+"posy"+b
s=a+"/"+d+"posz"+b
r=a+"/"+d+"negx"+b
q=a+"/"+d+"negy"+b
p=a+"/"+d+"negz"+b
o=this.a
n=o.createTexture()
C.b.at(o,34067,n)
C.b.bt(o,34067,10242,10497)
C.b.bt(o,34067,10243,10497)
C.b.bt(o,34067,10241,9729)
C.b.bt(o,34067,10240,9729)
C.b.at(o,34067,null)
m=new T.c1()
m.a=0
m.b=n
m.c=!1
m.d=0
this.aC(m,n,u,34069,!1,!1)
this.aC(m,n,r,34070,!1,!1)
this.aC(m,n,t,34071,!1,!1)
this.aC(m,n,q,34072,!1,!1)
this.aC(m,n,s,34073,!1,!1)
this.aC(m,n,p,34074,!1,!1)
return m},
dV:function(a){return this.dW(a,".png",!1,"")},
iS:function(a,b){return this.dW(a,b,!1,"")},
aC:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.f
W.a_(u,"load",H.l(new T.f4(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
hq:function(a,b,c){var u,t,s,r
b=V.hS(b,2)
u=V.hS(a.width,2)
t=V.hS(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.hr(null,null)
s.width=u
s.height=t
r=H.e(C.m.eg(s,"2d"),"$ibg")
r.imageSmoothingEnabled=!1;(r&&C.r).iF(r,a,0,0,s.width,s.height)
return P.kf(C.r.fd(r,0,0,s.width,s.height))}}}
T.f4.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.hq(this.b,u.c,this.c)
s=u.a
C.b.at(s,34067,this.d)
C.b.j9(s,37440,this.e?1:0)
C.b.jh(s,this.f,0,6408,6408,5121,t)
C.b.at(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.iG()}++u.e},
$S:21}
V.dK.prototype={
aH:function(a){return!0},
i:function(a){return"all"},
$iaO:1}
V.aO.prototype={}
V.cQ.prototype={
aH:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aH(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saq:function(a){this.a=H.d(a,"$ia",[V.aO],"$aa")},
$iaO:1}
V.aQ.prototype={
aH:function(a){return!this.es(a)},
i:function(a){return"!["+this.cH(0)+"]"}}
V.eQ.prototype={
ex:function(a){var u,t
if(a.a.length<=0)throw H.k(P.o("May not create a SetMatcher with zero characters."))
u=new H.aM([P.v,P.Y])
for(t=new H.cO(a,a.gm(a),0,[H.ah(a,"O",0)]);t.B();)u.V(0,t.d,!0)
this.shr(u)},
aH:function(a){return this.a.dn(a)},
i:function(a){var u=this.a
return P.hD(new H.ek(u,[H.r(u,0)]),0,null)},
shr:function(a){this.a=H.d(a,"$iaA",[P.v,P.Y],"$aaA")},
$iaO:1}
V.bZ.prototype={
w:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.c3(this.a.H(0,b))
r.saq(H.b([],[V.aO]))
r.c=!1
C.a.h(this.c,r)
return r},
iI:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aH(a))return r}return},
i:function(a){return this.b},
shN:function(a){this.c=H.d(a,"$ia",[V.c3],"$aa")}}
V.de.prototype={
i:function(a){var u,t
u=H.iT(this.b,"\n","\\n")
t=H.iT(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.c2.prototype={
i:function(a){return this.b},
shm:function(a){var u=P.x
this.c=H.d(a,"$iaA",[u,u],"$aaA")}}
V.f6.prototype={
H:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.bZ(this,b)
u.shN(H.b([],[V.c3]))
u.d=null
this.a.V(0,b,u)}return u},
b1:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.c2(this,a)
t=P.x
u.shm(new H.aM([t,t]))
this.b.V(0,a,u)}return u},
jn:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.de])
t=this.c
s=[P.v]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.b3(a,o)
m=t.iI(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.hD(r,0,null)
throw H.k(P.o("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.hD(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.de(j==null?k.b:j,l,o)}++o}}},
shC:function(a){this.a=H.d(a,"$iaA",[P.x,V.bZ],"$aaA")},
shG:function(a){this.b=H.d(a,"$iaA",[P.x,V.c2],"$aaA")}}
V.c3.prototype={
i:function(a){return this.b.b+": "+this.cH(0)}}
X.be.prototype={$iaD:1}
X.ea.prototype={
gl:function(){var u=this.x
if(u==null){u=D.D()
this.x=u}return u},
ac:function(a){var u=this.x
if(u!=null)u.v(a)},
se4:function(a,b){var u,t
if(!J.N(this.r,b)){u=this.r
this.r=b
t=new D.y("region",u,b,this,[V.bX])
t.b=!0
this.ac(t)}},
U:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.il(u,36160,null)
C.b.ca(u,2884)
C.b.ca(u,2929)
C.b.iC(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.z(t)
p=C.i.ag(q*t)
q=r.b
if(typeof s!=="number")return H.z(s)
o=C.i.ag(q*s)
q=C.i.ag(r.c*t)
a.c=q
r=C.i.ag(r.d*s)
a.d=r
C.b.jp(u,p,o,q,r)
C.b.ir(u,this.c)
if(this.b){r=this.a
C.b.iq(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.ip(u,n)}}
X.ec.prototype={
gl:function(){var u=this.b
if(u==null){u=D.D()
this.b=u}return u},
U:function(a){var u
a.cy.br(V.b5())
u=V.b5()
a.db.br(u)},
ay:function(a){a.cy.aw()
a.db.aw()},
$iaD:1,
$ibe:1}
X.d_.prototype={
gl:function(){var u=this.f
if(u==null){u=D.D()
this.f=u}return u},
ac:function(a){var u
H.e(a,"$iq")
u=this.f
if(u!=null)u.v(a)},
eO:function(){return this.ac(null)},
U:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aC(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.br(n)
u=$.ib
if(u==null){u=V.id()
t=V.iv()
s=$.is
if(s==null){s=new V.F(0,0,-1)
$.is=s}s=V.i6(u,t,s)
$.ib=s
m=s}else m=u
u=this.b
if(u!=null){l=u.aI(a,this)
if(l!=null)m=l.q(0,m)}a.db.br(m)},
ay:function(a){a.cy.aw()
a.db.aw()},
$iaD:1,
$ibe:1}
X.bq.prototype={}
V.hn.prototype={
$1:function(a){H.e(a,"$iaE")
P.hT(C.i.e9(this.a.giK(),2)+" fps")},
$S:34}
V.eU.prototype={
ey:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.q).Y(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.q.Y(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.Y(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.Y(q,p)}o=u.createElement("div")
this.a=o
C.l.Y(q,o)
this.b=null
o=W.f
W.a_(u,"scroll",H.l(new V.eW(s),{func:1,ret:-1,args:[o]}),!1,o)},
de:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.d(a,"$ia",[P.x],"$aa")
this.hx()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jn(C.a.iP(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.Y(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.Y(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.Y(t,o)
break
case"Link":n=p.b
if(H.ky(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.j(m,1)
l.href=H.S(m[1])
l.textContent=H.S(m[0])
C.l.Y(t,l)}else{k=P.k0(C.M,n,C.w,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.l.Y(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.Y(t,o)
break}}C.l.Y(this.a,t)},
hx:function(){var u,t,s,r
if(this.b!=null)return
u=new V.f6()
t=P.x
u.shC(new H.aM([t,V.bZ]))
u.shG(new H.aM([t,V.c2]))
u.c=null
u.c=u.H(0,"Start")
t=u.H(0,"Start").w(0,"Bold")
s=V.a3(new H.T("*"))
C.a.h(t.a,s)
t.c=!0
t=u.H(0,"Bold").w(0,"Bold")
s=new V.aQ()
r=[V.aO]
s.saq(H.b([],r))
C.a.h(t.a,s)
t=V.a3(new H.T("*"))
C.a.h(s.a,t)
t=u.H(0,"Bold").w(0,"BoldEnd")
s=V.a3(new H.T("*"))
C.a.h(t.a,s)
t.c=!0
t=u.H(0,"Start").w(0,"Italic")
s=V.a3(new H.T("_"))
C.a.h(t.a,s)
t.c=!0
t=u.H(0,"Italic").w(0,"Italic")
s=new V.aQ()
s.saq(H.b([],r))
C.a.h(t.a,s)
t=V.a3(new H.T("_"))
C.a.h(s.a,t)
t=u.H(0,"Italic").w(0,"ItalicEnd")
s=V.a3(new H.T("_"))
C.a.h(t.a,s)
t.c=!0
t=u.H(0,"Start").w(0,"Code")
s=V.a3(new H.T("`"))
C.a.h(t.a,s)
t.c=!0
t=u.H(0,"Code").w(0,"Code")
s=new V.aQ()
s.saq(H.b([],r))
C.a.h(t.a,s)
t=V.a3(new H.T("`"))
C.a.h(s.a,t)
t=u.H(0,"Code").w(0,"CodeEnd")
s=V.a3(new H.T("`"))
C.a.h(t.a,s)
t.c=!0
t=u.H(0,"Start").w(0,"LinkHead")
s=V.a3(new H.T("["))
C.a.h(t.a,s)
t.c=!0
t=u.H(0,"LinkHead").w(0,"LinkTail")
s=V.a3(new H.T("|"))
C.a.h(t.a,s)
s=u.H(0,"LinkHead").w(0,"LinkEnd")
t=V.a3(new H.T("]"))
C.a.h(s.a,t)
s.c=!0
s=u.H(0,"LinkHead").w(0,"LinkHead")
t=new V.aQ()
t.saq(H.b([],r))
C.a.h(s.a,t)
s=V.a3(new H.T("|]"))
C.a.h(t.a,s)
s=u.H(0,"LinkTail").w(0,"LinkEnd")
t=V.a3(new H.T("]"))
C.a.h(s.a,t)
s.c=!0
s=u.H(0,"LinkTail").w(0,"LinkTail")
t=new V.aQ()
t.saq(H.b([],r))
C.a.h(s.a,t)
s=V.a3(new H.T("|]"))
C.a.h(t.a,s)
C.a.h(u.H(0,"Start").w(0,"Other").a,new V.dK())
s=u.H(0,"Other").w(0,"Other")
t=new V.aQ()
t.saq(H.b([],r))
C.a.h(s.a,t)
s=V.a3(new H.T("*_`["))
C.a.h(t.a,s)
s=u.H(0,"BoldEnd")
s.d=s.a.b1("Bold")
s=u.H(0,"ItalicEnd")
s.d=s.a.b1("Italic")
s=u.H(0,"CodeEnd")
s.d=s.a.b1("Code")
s=u.H(0,"LinkEnd")
s.d=s.a.b1("Link")
s=u.H(0,"Other")
s.d=s.a.b1("Other")
this.b=u}}
V.eW.prototype={
$1:function(a){P.im(C.n,new V.eV(this.a))},
$S:21}
V.eV.prototype={
$0:function(){var u,t,s
u=C.i.ag(document.documentElement.scrollTop)
t=this.a.style
s=H.i(-0.01*u)+"px"
t.top=s},
$S:2};(function aliases(){var u=J.a1.prototype
u.eq=u.i
u=J.cL.prototype
u.er=u.i
u=O.bQ.prototype
u.cI=u.aj
u=O.aB.prototype
u.bz=u.aj
u=V.cQ.prototype
u.es=u.aH
u.cH=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"k9","jU",10)
u(P,"ka","jV",10)
u(P,"kb","jW",10)
t(P,"iI","k8",3)
var n
s(n=E.a8.prototype,"ge2",0,0,null,["$1","$0"],["e3","j0"],0,0)
s(n,"ge0",0,0,null,["$1","$0"],["e1","j_"],0,0)
s(n,"gdZ",0,0,null,["$1","$0"],["e_","iX"],0,0)
r(n,"giV","iW",6)
r(n,"giY","iZ",6)
s(n=E.dd.prototype,"gcK",0,0,null,["$1","$0"],["cM","cL"],0,0)
q(n,"gjc","e6",3)
p(n=X.dl.prototype,"gfM","fN",9)
p(n,"gfA","fB",9)
p(n,"gfG","fH",4)
p(n,"gfQ","fR",16)
p(n,"gfO","fP",16)
p(n,"gfU","fV",4)
p(n,"gfY","fZ",4)
p(n,"gfK","fL",4)
p(n,"gfW","fX",4)
p(n,"gfI","fJ",4)
p(n,"gh_","h0",28)
p(n,"gh1","h2",9)
p(n,"ghf","hg",7)
p(n,"ghb","hc",7)
p(n,"ghd","he",7)
s(D.aK.prototype,"geB",0,0,null,["$1","$0"],["an","eC"],0,0)
s(n=D.cN.prototype,"gd2",0,0,null,["$1","$0"],["d3","fS"],0,0)
p(n,"gh3","h4",29)
r(n,"gfp","fq",17)
r(n,"gh7","h8",17)
o(V.I.prototype,"gm","cm",18)
o(V.F.prototype,"gm","cm",18)
s(n=U.bM.prototype,"gaA",0,0,null,["$1","$0"],["I","a1"],0,0)
r(n,"geD","eE",19)
r(n,"gh5","h6",19)
s(n=U.dm.prototype,"gaA",0,0,null,["$1","$0"],["I","a1"],0,0)
p(n,"gbK","bL",1)
p(n,"gbM","bN",1)
p(n,"gbO","bP",1)
s(n=U.dn.prototype,"gaA",0,0,null,["$1","$0"],["I","a1"],0,0)
p(n,"gbK","bL",1)
p(n,"gbM","bN",1)
p(n,"gbO","bP",1)
p(n,"gfj","fk",1)
p(n,"gfl","fm",1)
p(n,"ghL","hM",1)
p(n,"ghJ","hK",1)
p(n,"ghH","hI",1)
p(U.dp.prototype,"gfn","fo",1)
s(M.cA.prototype,"gP",0,0,null,["$1","$0"],["R","aL"],0,0)
s(n=M.cD.prototype,"gP",0,0,null,["$1","$0"],["R","aL"],0,0)
r(n,"gfC","fD",6)
r(n,"gfE","fF",6)
s(n=M.d8.prototype,"gP",0,0,null,["$1","$0"],["R","aL"],0,0)
r(n,"gfs","ft",15)
r(n,"gh9","ha",15)
s(n=O.cR.prototype,"gaD",0,0,null,["$1","$0"],["M","aO"],0,0)
s(n,"gho",0,0,null,["$1","$0"],["d7","hp"],0,0)
r(n,"gfu","fv",20)
r(n,"gfw","fz",20)
s(O.bQ.prototype,"gaD",0,0,null,["$1","$0"],["M","aO"],0,0)
s(O.d4.prototype,"gaD",0,0,null,["$1","$0"],["M","aO"],0,0)
s(X.d_.prototype,"geN",0,0,null,["$1","$0"],["ac","eO"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.H,null)
s(P.H,[H.hx,J.a1,J.a6,P.dz,P.h,H.cO,P.ax,H.bj,H.dk,H.eI,H.f9,P.b_,H.bD,H.dC,P.eq,H.ej,H.el,H.eg,P.dD,P.aJ,P.al,P.dt,P.eZ,P.c_,P.f_,P.aE,P.a7,P.h6,P.h2,P.cd,P.fX,P.O,P.bE,P.h5,P.Y,P.ab,P.a5,P.aZ,P.eE,P.d7,P.dw,P.e9,P.a,P.B,P.ac,P.x,P.b7,W.dV,W.ao,W.cE,P.dG,P.fY,O.K,O.bR,E.dO,E.a8,E.eK,E.dd,Z.dr,Z.ds,Z.bC,Z.b1,Z.aH,D.dR,D.aw,D.q,X.cx,X.cM,X.ei,X.en,X.ae,X.ey,X.f7,X.dl,D.aK,D.R,D.d0,D.d6,D.da,D.db,D.dc,V.Q,V.an,V.e2,V.cT,V.Z,V.X,V.a9,V.aS,V.bX,V.I,V.F,U.dm,U.dn,U.dp,M.cA,M.cD,M.bp,M.d8,A.ct,A.dN,A.ev,A.c4,A.c8,A.c6,A.c9,A.c7,A.ca,A.bh,A.dg,A.fi,F.V,F.aN,F.b6,F.d3,F.eR,F.eS,F.eT,F.ag,F.fr,F.fs,F.fv,F.fw,O.b8,O.bQ,T.f3,V.dK,V.aO,V.cQ,V.eQ,V.bZ,V.de,V.c2,V.f6,X.be,X.bq,X.ec,X.d_,V.eU])
s(J.a1,[J.ef,J.cJ,J.cL,J.ay,J.cK,J.bP,H.cX,W.bi,W.bg,W.du,W.dX,W.cC,W.f,W.dx,W.b0,W.dA,W.aF,W.dE,P.cv,P.cF,P.d1,P.bo,P.d2,P.d9,P.dh])
s(J.cL,[J.eF,J.di,J.b4])
t(J.hw,J.ay)
s(J.cK,[J.cI,J.cH])
t(P.em,P.dz)
s(P.em,[H.dj,W.fH,W.fG,P.e5])
t(H.T,H.dj)
s(P.h,[H.e_,H.er,H.fA])
s(P.ax,[H.es,H.fB])
s(P.b_,[H.eD,H.eh,H.fl,H.fb,H.dQ,H.eO,P.cZ,P.au,P.fm,P.fk,P.eX,P.dU,P.dW])
s(H.bD,[H.ho,H.f2,H.hg,H.hh,H.hi,P.fD,P.fC,P.fE,P.fF,P.h4,P.h3,P.fL,P.fP,P.fM,P.fN,P.fO,P.fS,P.fT,P.fR,P.fQ,P.f0,P.f1,P.ha,P.h0,P.h_,P.h1,P.ep,P.dY,P.dZ,W.fK,P.hc,P.e6,P.e7,E.eL,E.eM,E.eN,E.f5,D.e4,F.h7,F.fy,F.fx,F.ft,F.fu,T.f4,V.hn,V.eW,V.eV])
s(H.f2,[H.eY,H.bA])
t(P.eo,P.eq)
t(H.aM,P.eo)
t(H.ek,H.e_)
t(H.cU,H.cX)
s(H.cU,[H.ce,H.cg])
t(H.cf,H.ce)
t(H.cV,H.cf)
t(H.ch,H.cg)
t(H.cW,H.ch)
s(H.cW,[H.ez,H.eA,H.eB,H.cY,H.eC])
t(P.fZ,P.h6)
t(P.fW,P.h2)
t(P.cz,P.f_)
t(P.e0,P.bE)
t(P.fn,P.e0)
t(P.fo,P.cz)
s(P.a5,[P.t,P.v])
s(P.au,[P.bn,P.ed])
s(W.bi,[W.G,W.cb])
s(W.G,[W.U,W.aY,W.bJ])
s(W.U,[W.n,P.m])
s(W.n,[W.dL,W.dM,W.cu,W.bf,W.bI,W.e8,W.bN,W.bS,W.eP])
t(W.bH,W.du)
t(W.dy,W.dx)
t(W.bk,W.dy)
t(W.cG,W.bJ)
t(W.b9,W.f)
s(W.b9,[W.az,W.a2,W.ar])
t(W.dB,W.dA)
t(W.bU,W.dB)
t(W.dF,W.dE)
t(W.f8,W.dF)
t(W.fz,W.bS)
t(W.aI,W.a2)
t(W.dv,W.cC)
t(W.fI,P.eZ)
t(W.hH,W.fI)
t(W.fJ,P.c_)
t(P.aj,P.fY)
s(E.dO,[Z.cw,A.bY,T.c0])
s(D.q,[D.b2,D.b3,D.y,X.eG])
s(X.eG,[X.cP,X.aP,X.bT,X.df])
s(O.K,[D.cN,U.bM])
s(D.dR,[U.dT,U.W])
t(U.bG,U.W)
t(M.aq,M.bp)
s(A.bY,[A.cS,A.d5])
s(A.dg,[A.C,A.fe,A.ff,A.fh,A.fc,A.L,A.fd,A.A,A.fg,A.fj,A.c5,A.ad,A.aa,A.a4])
s(O.b8,[O.cR,O.d4])
s(O.bQ,[O.et,O.eu,O.aB])
s(O.aB,[O.ew,O.ex])
t(T.c1,T.c0)
s(V.cQ,[V.aQ,V.c3])
t(X.ea,X.bq)
u(H.dj,H.dk)
u(H.ce,P.O)
u(H.cf,H.bj)
u(H.cg,P.O)
u(H.ch,H.bj)
u(P.dz,P.O)
u(W.du,W.dV)
u(W.dx,P.O)
u(W.dy,W.ao)
u(W.dA,P.O)
u(W.dB,W.ao)
u(W.dE,P.O)
u(W.dF,W.ao)})();(function constants(){var u=hunkHelpers.makeConstList
C.q=W.cu.prototype
C.m=W.bf.prototype
C.r=W.bg.prototype
C.l=W.bI.prototype
C.C=W.cG.prototype
C.D=J.a1.prototype
C.a=J.ay.prototype
C.E=J.cH.prototype
C.h=J.cI.prototype
C.o=J.cJ.prototype
C.i=J.cK.prototype
C.j=J.bP.prototype
C.L=J.b4.prototype
C.N=W.bU.prototype
C.v=J.eF.prototype
C.b=P.bo.prototype
C.p=J.di.prototype
C.x=W.aI.prototype
C.y=W.cb.prototype
C.z=new P.eE()
C.A=new P.fo()
C.k=new P.fZ()
C.c=new A.bh(0,"ColorSourceType.None")
C.f=new A.bh(1,"ColorSourceType.Solid")
C.e=new A.bh(2,"ColorSourceType.Texture2D")
C.d=new A.bh(3,"ColorSourceType.TextureCube")
C.n=new P.aZ(0)
C.B=new P.aZ(5e6)
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
C.M=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.w=new P.fn(!1)})();(function staticFields(){$.av=0
$.bB=null
$.hY=null
$.hI=!1
$.iN=null
$.iG=null
$.iS=null
$.hd=null
$.hj=null
$.hQ=null
$.br=null
$.cl=null
$.cm=null
$.hJ=!1
$.M=C.k
$.i8=null
$.ic=null
$.bV=null
$.ii=null
$.ir=null
$.iu=null
$.it=null
$.fp=null
$.is=null
$.jO="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.jN="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.ib=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"kG","iW",function(){return H.iM("_$dart_dartClosure")})
u($,"kH","hU",function(){return H.iM("_$dart_js")})
u($,"kK","iX",function(){return H.aG(H.fa({
toString:function(){return"$receiver$"}}))})
u($,"kL","iY",function(){return H.aG(H.fa({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"kM","iZ",function(){return H.aG(H.fa(null))})
u($,"kN","j_",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"kQ","j2",function(){return H.aG(H.fa(void 0))})
u($,"kR","j3",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"kP","j1",function(){return H.aG(H.ip(null))})
u($,"kO","j0",function(){return H.aG(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"kT","j5",function(){return H.aG(H.ip(void 0))})
u($,"kS","j4",function(){return H.aG(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"l8","hV",function(){return P.jT()})
u($,"la","cr",function(){return[]})
u($,"l9","j9",function(){return P.jI("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"l1","j8",function(){return Z.ak(0)})
u($,"kW","j6",function(){return Z.ak(511)})
u($,"l3","at",function(){return Z.ak(1)})
u($,"l2","aV",function(){return Z.ak(2)})
u($,"kY","aU",function(){return Z.ak(4)})
u($,"l4","aW",function(){return Z.ak(8)})
u($,"l5","aX",function(){return Z.ak(16)})
u($,"kZ","cp",function(){return Z.ak(32)})
u($,"l_","cq",function(){return Z.ak(64)})
u($,"l0","j7",function(){return Z.ak(96)})
u($,"l6","bz",function(){return Z.ak(128)})
u($,"kX","aT",function(){return Z.ak(256)})
u($,"kF","iV",function(){return new V.e2(1e-9)})
u($,"kE","E",function(){return $.iV()})})()
var v={mangledGlobalNames:{v:"int",t:"double",a5:"num",x:"String",Y:"bool",B:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.q]},{func:1,ret:-1,args:[D.q]},{func:1,ret:P.B},{func:1,ret:-1},{func:1,ret:-1,args:[W.a2]},{func:1,ret:P.B,args:[F.V]},{func:1,ret:-1,args:[P.v,[P.h,E.a8]]},{func:1,ret:-1,args:[W.ar]},{func:1,ret:P.B,args:[D.q]},{func:1,ret:-1,args:[W.f]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.B,args:[,,]},{func:1,ret:P.x,args:[P.v]},{func:1,args:[,]},{func:1,ret:P.B,args:[,]},{func:1,ret:-1,args:[P.v,[P.h,M.aq]]},{func:1,ret:-1,args:[W.az]},{func:1,ret:-1,args:[P.v,[P.h,D.R]]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.v,[P.h,U.W]]},{func:1,ret:-1,args:[P.v,[P.h,V.Z]]},{func:1,ret:P.B,args:[W.f]},{func:1,ret:[P.al,,],args:[,]},{func:1,ret:P.Y,args:[W.G]},{func:1,ret:W.U,args:[W.G]},{func:1,ret:P.B,args:[{func:1,ret:-1}]},{func:1,ret:P.B,args:[{func:1,ret:-1,args:[D.q]}]},{func:1,args:[,P.x]},{func:1,ret:-1,args:[W.aI]},{func:1,ret:P.Y,args:[[P.h,D.R]]},{func:1,args:[P.x]},{func:1,args:[W.f]},{func:1,ret:P.B,args:[F.ag,P.t,P.t]},{func:1,ret:P.B,args:[,],opt:[P.ac]},{func:1,ret:P.B,args:[P.aE]},{func:1,ret:P.B,args:[P.a5]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.a1,MediaError:J.a1,Navigator:J.a1,NavigatorConcurrentHardware:J.a1,NavigatorUserMediaError:J.a1,OverconstrainedError:J.a1,PositionError:J.a1,WebGLActiveInfo:J.a1,WebGLRenderbuffer:J.a1,WebGL2RenderingContext:J.a1,SQLError:J.a1,ArrayBufferView:H.cX,Float32Array:H.cV,Int16Array:H.ez,Int32Array:H.eA,Uint32Array:H.eB,Uint8ClampedArray:H.cY,CanvasPixelArray:H.cY,Uint8Array:H.eC,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTableElement:W.n,HTMLTableRowElement:W.n,HTMLTableSectionElement:W.n,HTMLTemplateElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,HTMLAnchorElement:W.dL,HTMLAreaElement:W.dM,HTMLBodyElement:W.cu,HTMLCanvasElement:W.bf,CanvasRenderingContext2D:W.bg,CDATASection:W.aY,CharacterData:W.aY,Comment:W.aY,ProcessingInstruction:W.aY,Text:W.aY,CSSStyleDeclaration:W.bH,MSStyleCSSProperties:W.bH,CSS2Properties:W.bH,HTMLDivElement:W.bI,XMLDocument:W.bJ,Document:W.bJ,DOMException:W.dX,DOMRectReadOnly:W.cC,Element:W.U,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,EventTarget:W.bi,HTMLFormElement:W.e8,HTMLCollection:W.bk,HTMLFormControlsCollection:W.bk,HTMLOptionsCollection:W.bk,HTMLDocument:W.cG,ImageData:W.b0,HTMLImageElement:W.bN,KeyboardEvent:W.az,HTMLAudioElement:W.bS,HTMLMediaElement:W.bS,PointerEvent:W.a2,MouseEvent:W.a2,DragEvent:W.a2,DocumentFragment:W.G,ShadowRoot:W.G,Attr:W.G,DocumentType:W.G,Node:W.G,NodeList:W.bU,RadioNodeList:W.bU,HTMLSelectElement:W.eP,Touch:W.aF,TouchEvent:W.ar,TouchList:W.f8,CompositionEvent:W.b9,FocusEvent:W.b9,TextEvent:W.b9,UIEvent:W.b9,HTMLVideoElement:W.fz,WheelEvent:W.aI,Window:W.cb,DOMWindow:W.cb,ClientRect:W.dv,DOMRect:W.dv,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGScriptElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,WebGLBuffer:P.cv,WebGLFramebuffer:P.cF,WebGLProgram:P.d1,WebGLRenderingContext:P.bo,WebGLShader:P.d2,WebGLTexture:P.d9,WebGLUniformLocation:P.dh})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.cf.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.iP,[])
else K.iP([])})})()
//# sourceMappingURL=test.dart.js.map
