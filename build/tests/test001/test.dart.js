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
a[c]=function(){a[c]=function(){H.kJ(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.hH"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.hH"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.hH(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={hr:function hr(a){this.a=a},
dW:function(){return new P.bM("No element")},
jz:function(){return new P.bM("Too many elements")},
l:function l(a){this.a=a},
dA:function dA(){},
b3:function b3(){},
bE:function bE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ea:function ea(a,b,c){this.a=a
this.b=b
this.$ti=c},
eb:function eb(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ec:function ec(a,b,c){this.a=a
this.b=b
this.$ti=c},
bU:function bU(a,b,c){this.a=a
this.b=b
this.$ti=c},
fp:function fp(a,b,c){this.a=a
this.b=b
this.$ti=c},
b_:function b_(){},
cU:function cU(){},
cT:function cT(){},
bk:function(a){var u,t
u=H.y(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
kq:function(a){return v.types[H.Q(a)]},
kx:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.J(a).$iae},
c:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ah(a)
if(typeof u!=="string")throw H.d(H.aT(a))
return u},
jP:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.dX(u)
t=u[0]
s=u[1]
return new H.eq(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
bI:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
b7:function(a){return H.jG(a)+H.hE(H.aV(a),0,null)},
jG:function(a){var u,t,s,r,q,p,o,n,m
u=J.J(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.H||!!u.$iaQ){p=C.v(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bk(r.length>1&&C.d.aa(r,0)===36?C.d.aI(r,1):r)},
ii:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
jO:function(a){var u,t,s,r
u=H.a([],[P.u])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.B)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.d(H.aT(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.ax(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.d(H.aT(r))}return H.ii(u)},
ij:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aT(s))
if(s<0)throw H.d(H.aT(s))
if(s>65535)return H.jO(a)}return H.ii(a)},
ht:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.ax(u,10))>>>0,56320|u&1023)}throw H.d(P.a7(a,0,1114111,null,null))},
b6:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jN:function(a){var u=H.b6(a).getFullYear()+0
return u},
jL:function(a){var u=H.b6(a).getMonth()+1
return u},
jH:function(a){var u=H.b6(a).getDate()+0
return u},
jI:function(a){var u=H.b6(a).getHours()+0
return u},
jK:function(a){var u=H.b6(a).getMinutes()+0
return u},
jM:function(a){var u=H.b6(a).getSeconds()+0
return u},
jJ:function(a){var u=H.b6(a).getMilliseconds()+0
return u},
aW:function(a){throw H.d(H.aT(a))},
i:function(a,b){if(a==null)J.aX(a)
throw H.d(H.c3(a,b))},
c3:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ai(!0,b,"index",null)
u=H.Q(J.aX(a))
if(!(b<0)){if(typeof u!=="number")return H.aW(u)
t=b>=u}else t=!0
if(t)return P.b1(b,a,"index",null,u)
return P.cF(b,"index",null)},
kl:function(a,b,c){if(a>c)return new P.b8(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.b8(a,c,!0,b,"end","Invalid value")
return new P.ai(!0,b,"end",null)},
aT:function(a){return new P.ai(!0,a,null,null)},
d:function(a){var u
if(a==null)a=new P.cA()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.iX})
u.name=""}else u.toString=H.iX
return u},
iX:function(){return J.ah(this.dartException)},
T:function(a){throw H.d(a)},
B:function(a){throw H.d(P.aG(a))},
aq:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.a([],[P.j])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.eT(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
eU:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
it:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ic:function(a,b){return new H.el(a,b==null?null:b.method)},
hs:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.e1(a,t,u?null:b.receiver)},
a3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.hj(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.ax(s,16)&8191)===10)switch(r){case 438:return u.$1(H.hs(H.c(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.ic(H.c(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.j_()
p=$.j0()
o=$.j1()
n=$.j2()
m=$.j5()
l=$.j6()
k=$.j4()
$.j3()
j=$.j8()
i=$.j7()
h=q.T(t)
if(h!=null)return u.$1(H.hs(H.y(t),h))
else{h=p.T(t)
if(h!=null){h.method="call"
return u.$1(H.hs(H.y(t),h))}else{h=o.T(t)
if(h==null){h=n.T(t)
if(h==null){h=m.T(t)
if(h==null){h=l.T(t)
if(h==null){h=k.T(t)
if(h==null){h=n.T(t)
if(h==null){h=j.T(t)
if(h==null){h=i.T(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.ic(H.y(t),h))}}return u.$1(new H.f9(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.cL()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.ai(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.cL()
return a},
bh:function(a){var u
if(a==null)return new H.d9(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.d9(a)},
kn:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.H(0,a[t],a[s])}return b},
kw:function(a,b,c,d,e,f){H.k(a,"$iaJ")
switch(H.Q(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.V("Unsupported number of arguments for wrapped closure"))},
bg:function(a,b){var u
H.Q(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kw)
a.$identity=u
return u},
jp:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.J(d).$ib){u.$reflectionInfo=d
s=H.jP(u).r}else s=d
r=e?Object.create(new H.eG().constructor.prototype):Object.create(new H.bt(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aj
if(typeof p!=="number")return p.P()
$.aj=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.i0(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.kq,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.hZ:H.hn
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.d("Error in reflectionInfo.")
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
jm:function(a,b,c,d){var u=H.hn
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
i0:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.jo(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.jm(t,!r,u,b)
if(t===0){r=$.aj
if(typeof r!=="number")return r.P()
$.aj=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bu
if(q==null){q=H.dn("self")
$.bu=q}return new Function(r+H.c(q)+";return "+p+"."+H.c(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aj
if(typeof r!=="number")return r.P()
$.aj=r+1
o+=r
r="return function("+o+"){return this."
q=$.bu
if(q==null){q=H.dn("self")
$.bu=q}return new Function(r+H.c(q)+"."+H.c(u)+"("+o+");}")()},
jn:function(a,b,c,d){var u,t
u=H.hn
t=H.hZ
switch(b?-1:a){case 0:throw H.d(H.jT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
jo:function(a,b){var u,t,s,r,q,p,o,n
u=$.bu
if(u==null){u=H.dn("self")
$.bu=u}t=$.hY
if(t==null){t=H.dn("receiver")
$.hY=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.jn(r,!p,s,b)
if(r===1){u="return function(){return this."+H.c(u)+"."+H.c(s)+"(this."+H.c(t)+");"
t=$.aj
if(typeof t!=="number")return t.P()
$.aj=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.c(u)+"."+H.c(s)+"(this."+H.c(t)+", "+n+");"
t=$.aj
if(typeof t!=="number")return t.P()
$.aj=t+1
return new Function(u+t+"}")()},
hH:function(a,b,c,d,e,f,g){return H.jp(a,b,H.Q(c),d,!!e,!!f,g)},
hn:function(a){return a.a},
hZ:function(a){return a.c},
dn:function(a){var u,t,s,r,q
u=new H.bt("self","target","receiver","name")
t=J.dX(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
y:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.ag(a,"String"))},
lp:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ag(a,"double"))},
kC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ag(a,"num"))},
hF:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.ag(a,"bool"))},
Q:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.ag(a,"int"))},
iV:function(a,b){throw H.d(H.ag(a,H.bk(H.y(b).substring(2))))},
kE:function(a,b){throw H.d(H.jl(a,H.bk(H.y(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.iV(a,b)},
bi:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else u=!0
if(u)return a
H.kE(a,b)},
hd:function(a){if(a==null)return a
if(!!J.J(a).$ib)return a
throw H.d(H.ag(a,"List<dynamic>"))},
ky:function(a,b){var u
if(a==null)return a
u=J.J(a)
if(!!u.$ib)return a
if(u[b])return a
H.iV(a,b)},
iP:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.Q(u)]
else return a.$S()}return},
di:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.iP(J.J(a))
if(u==null)return!1
return H.iG(u,null,b,null)},
f:function(a,b){var u,t
if(a==null)return a
if($.hB)return a
$.hB=!0
try{if(H.di(a,b))return a
u=H.hg(b)
t=H.ag(a,u)
throw H.d(t)}finally{$.hB=!1}},
hI:function(a,b){if(a!=null&&!H.hG(a,b))H.T(H.ag(a,H.hg(b)))
return a},
ag:function(a,b){return new H.eV("TypeError: "+P.dE(a)+": type '"+H.iK(a)+"' is not a subtype of type '"+b+"'")},
jl:function(a,b){return new H.dp("CastError: "+P.dE(a)+": type '"+H.iK(a)+"' is not a subtype of type '"+b+"'")},
iK:function(a){var u,t
u=J.J(a)
if(!!u.$ibv){t=H.iP(u)
if(t!=null)return H.hg(t)
return"Closure"}return H.b7(a)},
kJ:function(a){throw H.d(new P.dt(H.y(a)))},
jT:function(a){return new H.ev(a)},
iQ:function(a){return v.getIsolateTag(a)},
a:function(a,b){a.$ti=b
return a},
aV:function(a){if(a==null)return
return a.$ti},
lq:function(a,b,c){return H.bj(a["$a"+H.c(c)],H.aV(b))},
h8:function(a,b,c,d){var u
H.y(c)
H.Q(d)
u=H.bj(a["$a"+H.c(c)],H.aV(b))
return u==null?null:u[d]},
aU:function(a,b,c){var u
H.y(b)
H.Q(c)
u=H.bj(a["$a"+H.c(b)],H.aV(a))
return u==null?null:u[c]},
q:function(a,b){var u
H.Q(b)
u=H.aV(a)
return u==null?null:u[b]},
hg:function(a){return H.aS(a,null)},
aS:function(a,b){var u,t
H.o(b,"$ib",[P.j],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bk(a[0].name)+H.hE(a,1,b)
if(typeof a=="function")return H.bk(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Q(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.i(b,t)
return H.c(b[t])}if('func' in a)return H.k9(a,b)
if('futureOr' in a)return"FutureOr<"+H.aS("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k9:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.j]
H.o(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.a([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.i(b,m)
o=C.d.P(o,b[m])
l=t[p]
if(l!=null&&l!==P.x)o+=" extends "+H.aS(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.aS(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.aS(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.aS(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.km(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.y(u[g])
i=i+h+H.aS(d[c],b)+(" "+H.c(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
hE:function(a,b,c){var u,t,s,r,q,p
H.o(c,"$ib",[P.j],"$ab")
if(a==null)return""
u=new P.ba("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aS(p,c)}return"<"+u.i(0)+">"},
bj:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dh:function(a,b,c,d){var u,t
H.y(b)
H.hd(c)
H.y(d)
if(a==null)return!1
u=H.aV(a)
t=J.J(a)
if(t[b]==null)return!1
return H.iN(H.bj(t[d],u),null,c,null)},
o:function(a,b,c,d){H.y(b)
H.hd(c)
H.y(d)
if(a==null)return a
if(H.dh(a,b,c,d))return a
throw H.d(H.ag(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bk(b.substring(2))+H.hE(c,0,null),v.mangledGlobalNames)))},
iN:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ac(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ac(a[t],b,c[t],d))return!1
return!0},
ln:function(a,b,c){return a.apply(b,H.bj(J.J(b)["$a"+H.c(c)],H.aV(b)))},
iS:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="x"||a.name==="w"||a===-1||a===-2||H.iS(u)}return!1},
hG:function(a,b){var u,t
if(a==null)return b==null||b.name==="x"||b.name==="w"||b===-1||b===-2||H.iS(b)
if(b==null||b===-1||b.name==="x"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.hG(a,"type" in b?b.type:null))return!0
if('func' in b)return H.di(a,b)}u=J.J(a).constructor
t=H.aV(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ac(u,null,b,null)},
v:function(a,b){if(a!=null&&!H.hG(a,b))throw H.d(H.ag(a,H.hg(b)))
return a},
ac:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="x"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="x"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ac(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="w")return!0
if('func' in c)return H.iG(a,b,c,d)
if('func' in a)return c.name==="aJ"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ac("type" in a?a.type:null,b,s,d)
else if(H.ac(a,b,s,d))return!0
else{if(!('$i'+"bC" in t.prototype))return!1
r=t.prototype["$a"+"bC"]
q=H.bj(r,u?a.slice(1):null)
return H.ac(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.iN(H.bj(m,u),b,p,d)},
iG:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ac(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ac(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ac(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ac(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.kB(h,b,g,d)},
kB:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ac(c[r],d,a[r],b))return!1}return!0},
lo:function(a,b,c){Object.defineProperty(a,H.y(b),{value:c,enumerable:false,writable:true,configurable:true})},
kz:function(a){var u,t,s,r,q,p
u=H.y($.iR.$1(a))
t=$.h5[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hc[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.y($.iM.$2(a,u))
if(u!=null){t=$.h5[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hc[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.hf(s)
$.h5[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.hc[u]=s
return s}if(q==="-"){p=H.hf(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.iU(a,s)
if(q==="*")throw H.d(P.iu(u))
if(v.leafTags[u]===true){p=H.hf(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.iU(a,s)},
iU:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.hN(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
hf:function(a){return J.hN(a,!1,null,!!a.$iae)},
kA:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.hf(u)
else return J.hN(u,c,null,null)},
ku:function(){if(!0===$.hM)return
$.hM=!0
H.kv()},
kv:function(){var u,t,s,r,q,p,o,n
$.h5=Object.create(null)
$.hc=Object.create(null)
H.kt()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.iW.$1(q)
if(p!=null){o=H.kA(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
kt:function(){var u,t,s,r,q,p,o
u=C.L()
u=H.bf(C.I,H.bf(C.N,H.bf(C.u,H.bf(C.u,H.bf(C.M,H.bf(C.J,H.bf(C.K(C.v),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.iR=new H.h9(q)
$.iM=new H.ha(p)
$.iW=new H.hb(o)},
bf:function(a,b){return a(b)||b},
jB:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.d(new P.dN("Illegal RegExp pattern ("+String(r)+")",a,null))},
kH:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
hP:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eq:function eq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
eT:function eT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
el:function el(a,b){this.a=a
this.b=b},
e1:function e1(a,b,c){this.a=a
this.b=b
this.c=c},
f9:function f9(a){this.a=a},
hj:function hj(a){this.a=a},
d9:function d9(a){this.a=a
this.b=null},
bv:function bv(){},
eM:function eM(){},
eG:function eG(){},
bt:function bt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eV:function eV(a){this.a=a},
dp:function dp(a){this.a=a},
ev:function ev(a){this.a=a},
am:function am(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
e4:function e4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cr:function cr(a,b){this.a=a
this.$ti=b},
e5:function e5(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h9:function h9(a){this.a=a},
ha:function ha(a){this.a=a},
hb:function hb(a){this.a=a},
e0:function e0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hA:function(a){return a},
dg:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.c3(b,a))},
k8:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.kl(a,b,c))
return b},
cy:function cy(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
bY:function bY(){},
bZ:function bZ(){},
c_:function c_(){},
c0:function c0(){},
km:function(a){return J.i5(a?Object.keys(a):[],null)},
kD:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
hN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
h7:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.hM==null){H.ku()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.d(P.iu("Return interceptor for "+H.c(t(a,u))))}r=a.constructor
q=r==null?null:r[$.hR()]
if(q!=null)return q
q=H.kz(a)
if(q!=null)return q
if(typeof a=="function")return C.O
t=Object.getPrototypeOf(a)
if(t==null)return C.x
if(t===Object.prototype)return C.x
if(typeof r=="function"){Object.defineProperty(r,$.hR(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
jA:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.hm(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a7(a,0,4294967295,"length",null))
return J.i5(new Array(a),b)},
i5:function(a,b){return J.dX(H.a(a,[b]))},
dX:function(a){H.hd(a)
a.fixed$length=Array
return a},
J:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.co.prototype
return J.dZ.prototype}if(typeof a=="string")return J.aK.prototype
if(a==null)return J.e_.prototype
if(typeof a=="boolean")return J.dY.prototype
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.x)return a
return J.h7(a)},
hJ:function(a){if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.x)return a
return J.h7(a)},
hK:function(a){if(a==null)return a
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.x)return a
return J.h7(a)},
ko:function(a){if(typeof a=="number")return J.b2.prototype
if(a==null)return a
if(!(a instanceof P.x))return J.aQ.prototype
return a},
kp:function(a){if(typeof a=="number")return J.b2.prototype
if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(!(a instanceof P.x))return J.aQ.prototype
return a},
hL:function(a){if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(!(a instanceof P.x))return J.aQ.prototype
return a},
a2:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.x)return a
return J.h7(a)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).n(a,b)},
hU:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kp(a).I(a,b)},
je:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.ko(a).u(a,b)},
jf:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kx(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.hJ(a).m(a,b)},
jg:function(a,b,c,d){return J.a2(a).d8(a,b,c,d)},
dj:function(a,b){return J.a2(a).ec(a,b)},
hV:function(a,b){return J.a2(a).p(a,b)},
hk:function(a,b){return J.hK(a).N(a,b)},
jh:function(a){return J.a2(a).geF(a)},
c7:function(a){return J.J(a).gC(a)},
br:function(a){return J.hK(a).gF(a)},
aX:function(a){return J.hJ(a).gl(a)},
ji:function(a){return J.a2(a).gfL(a)},
hl:function(a,b){return J.a2(a).ai(a,b)},
hW:function(a){return J.hK(a).fC(a)},
jj:function(a,b,c){return J.hL(a).ar(a,b,c)},
jk:function(a){return J.hL(a).fP(a)},
ah:function(a){return J.J(a).i(a)},
M:function M(){},
dY:function dY(){},
e_:function e_(){},
cp:function cp(){},
en:function en(){},
aQ:function aQ(){},
aL:function aL(){},
al:function al(a){this.$ti=a},
hq:function hq(a){this.$ti=a},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
b2:function b2(){},
co:function co(){},
dZ:function dZ(){},
aK:function aK(){}},P={
jZ:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.kg()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bg(new P.fr(u),1)).observe(t,{childList:true})
return new P.fq(u,t,s)}else if(self.setImmediate!=null)return P.kh()
return P.ki()},
k_:function(a){self.scheduleImmediate(H.bg(new P.fs(H.f(a,{func:1,ret:-1})),0))},
k0:function(a){self.setImmediate(H.bg(new P.ft(H.f(a,{func:1,ret:-1})),0))},
k1:function(a){P.hv(C.l,H.f(a,{func:1,ret:-1}))},
hv:function(a,b){var u
H.f(b,{func:1,ret:-1})
u=C.h.af(a.a,1000)
return P.k6(u<0?0:u,b)},
is:function(a,b){var u
H.f(b,{func:1,ret:-1,args:[P.ao]})
u=C.h.af(a.a,1000)
return P.k7(u<0?0:u,b)},
k6:function(a,b){var u=new P.da(!0)
u.d3(a,b)
return u},
k7:function(a,b){var u=new P.da(!1)
u.d4(a,b)
return u},
k2:function(a,b){var u,t,s
b.a=1
try{a.cj(new P.fB(b),new P.fC(b),null)}catch(s){u=H.a3(s)
t=H.bh(s)
P.kF(new P.fD(b,u,t))}},
iB:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iab")
if(u>=4){t=b.aX()
b.a=a.a
b.c=a.c
P.bX(b,t)}else{t=H.k(b.c,"$iat")
b.a=2
b.c=a
a.bI(t)}},
bX:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.k(t.c,"$iR")
t=t.b
p=q.a
o=q.b
t.toString
P.h0(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bX(u.a,b)}t=u.a
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
if(k){H.k(m,"$iR")
t=t.b
p=m.a
o=m.b
t.toString
P.h0(null,null,t,p,o)
return}j=$.F
if(j!=l)$.F=l
else j=null
t=b.c
if(t===8)new P.fH(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.fG(s,b,m).$0()}else if((t&2)!==0)new P.fF(u,s,b).$0()
if(j!=null)$.F=j
t=s.b
if(!!J.J(t).$ibC){if(t.a>=4){i=H.k(o.c,"$iat")
o.c=null
b=o.aw(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.iB(t,o)
return}}h=b.b
i=H.k(h.c,"$iat")
h.c=null
b=h.aw(i)
t=s.a
p=s.b
if(!t){H.v(p,H.q(h,0))
h.a=4
h.c=p}else{H.k(p,"$iR")
h.a=8
h.c=p}u.a=h
t=h}},
kc:function(a,b){if(H.di(a,{func:1,args:[P.x,P.Y]}))return H.f(a,{func:1,ret:null,args:[P.x,P.Y]})
if(H.di(a,{func:1,args:[P.x]}))return H.f(a,{func:1,ret:null,args:[P.x]})
throw H.d(P.hm(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kb:function(){var u,t
for(;u=$.be,u!=null;){$.c2=null
t=u.b
$.be=t
if(t==null)$.c1=null
u.a.$0()}},
kf:function(){$.hC=!0
try{P.kb()}finally{$.c2=null
$.hC=!1
if($.be!=null)$.hS().$1(P.iO())}},
iJ:function(a){var u=new P.cY(H.f(a,{func:1,ret:-1}))
if($.be==null){$.c1=u
$.be=u
if(!$.hC)$.hS().$1(P.iO())}else{$.c1.b=u
$.c1=u}},
ke:function(a){var u,t,s
H.f(a,{func:1,ret:-1})
u=$.be
if(u==null){P.iJ(a)
$.c2=$.c1
return}t=new P.cY(a)
s=$.c2
if(s==null){t.b=u
$.c2=t
$.be=t}else{t.b=s.b
s.b=t
$.c2=t
if(t.b==null)$.c1=t}},
kF:function(a){var u,t
u={func:1,ret:-1}
H.f(a,u)
t=$.F
if(C.f===t){P.h2(null,null,C.f,a)
return}t.toString
P.h2(null,null,t,H.f(t.b0(a),u))},
ir:function(a,b){var u,t
u={func:1,ret:-1}
H.f(b,u)
t=$.F
if(t===C.f){t.toString
return P.hv(a,b)}return P.hv(a,H.f(t.b0(b),u))},
jX:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.ao]}
H.f(b,u)
t=$.F
if(t===C.f){t.toString
return P.is(a,b)}s=t.bR(b,P.ao)
$.F.toString
return P.is(a,H.f(s,u))},
h0:function(a,b,c,d,e){var u={}
u.a=d
P.ke(new P.h1(u,e))},
iH:function(a,b,c,d,e){var u,t
H.f(d,{func:1,ret:e})
t=$.F
if(t===c)return d.$0()
$.F=c
u=t
try{t=d.$0()
return t}finally{$.F=u}},
iI:function(a,b,c,d,e,f,g){var u,t
H.f(d,{func:1,ret:f,args:[g]})
H.v(e,g)
t=$.F
if(t===c)return d.$1(e)
$.F=c
u=t
try{t=d.$1(e)
return t}finally{$.F=u}},
kd:function(a,b,c,d,e,f,g,h,i){var u,t
H.f(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
t=$.F
if(t===c)return d.$2(e,f)
$.F=c
u=t
try{t=d.$2(e,f)
return t}finally{$.F=u}},
h2:function(a,b,c,d){var u
H.f(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.b0(d):c.eG(d,-1)
P.iJ(d)},
fr:function fr(a){this.a=a},
fq:function fq(a,b,c){this.a=a
this.b=b
this.c=c},
fs:function fs(a){this.a=a},
ft:function ft(a){this.a=a},
da:function da(a){this.a=a
this.b=null
this.c=0},
fX:function fX(a,b){this.a=a
this.b=b},
fW:function fW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
at:function at(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ab:function ab(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
fA:function fA(a,b){this.a=a
this.b=b},
fE:function fE(a,b){this.a=a
this.b=b},
fB:function fB(a){this.a=a},
fC:function fC(a){this.a=a},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
fH:function fH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fI:function fI(a){this.a=a},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
cY:function cY(a){this.a=a
this.b=null},
eH:function eH(){},
eJ:function eJ(a,b){this.a=a
this.b=b},
eK:function eK(a,b){this.a=a
this.b=b},
bN:function bN(){},
eI:function eI(){},
ao:function ao(){},
R:function R(a,b){this.a=a
this.b=b},
h_:function h_(){},
h1:function h1(a,b){this.a=a
this.b=b},
fL:function fL(){},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
fM:function fM(a,b){this.a=a
this.b=b},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
jD:function(a,b,c){H.hd(a)
return H.o(H.kn(a,new H.am([b,c])),"$ii6",[b,c],"$ai6")},
jC:function(a,b){return new H.am([a,b])},
cs:function(a,b,c,d){return new P.fK([d])},
hz:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
k5:function(a,b,c){var u=new P.d3(a,b,[c])
u.c=a.e
return u},
jy:function(a,b,c){var u,t
if(P.hD(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.a([],[P.j])
t=$.c6()
C.a.h(t,a)
try{P.ka(a,u)}finally{if(0>=t.length)return H.i(t,-1)
t.pop()}t=P.ip(b,H.ky(u,"$ip"),", ")+c
return t.charCodeAt(0)==0?t:t},
hp:function(a,b,c){var u,t,s
if(P.hD(a))return b+"..."+c
u=new P.ba(b)
t=$.c6()
C.a.h(t,a)
try{s=u
s.a=P.ip(s.a,a,", ")}finally{if(0>=t.length)return H.i(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
hD:function(a){var u,t
for(u=0;t=$.c6(),u<t.length;++u)if(a===t[u])return!0
return!1},
ka:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.o(b,"$ib",[P.j],"$ab")
u=a.gF(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.q())return
r=H.c(u.gA())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.q()){if(s<=5)return
if(0>=b.length)return H.i(b,-1)
q=b.pop()
if(0>=b.length)return H.i(b,-1)
p=b.pop()}else{o=u.gA();++s
if(!u.q()){if(s<=4){C.a.h(b,H.c(o))
return}q=H.c(o)
if(0>=b.length)return H.i(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gA();++s
for(;u.q();o=n,n=m){m=u.gA();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.c(o)
q=H.c(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
i7:function(a,b){var u,t,s
u=P.cs(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.B)(a),++s)u.h(0,H.v(a[s],b))
return u},
i8:function(a){var u,t
u={}
if(P.hD(a))return"{...}"
t=new P.ba("")
try{C.a.h($.c6(),a)
t.a+="{"
u.a=!0
a.O(0,new P.e9(u,t))
t.a+="}"}finally{u=$.c6()
if(0>=u.length)return H.i(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
fK:function fK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bd:function bd(a){this.a=a
this.c=this.b=null},
d3:function d3(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
e6:function e6(){},
H:function H(){},
e8:function e8(){},
e9:function e9(a,b){this.a=a
this.b=b},
b4:function b4(){},
fQ:function fQ(){},
d4:function d4(){},
bw:function bw(){},
bx:function bx(){},
dC:function dC(){},
dS:function dS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dR:function dR(a){this.a=a},
fb:function fb(a){this.a=a},
fc:function fc(){},
fY:function fY(a){this.b=this.a=0
this.c=a},
jw:function(a){if(a instanceof H.bv)return a.i(0)
return"Instance of '"+H.b7(a)+"'"},
jE:function(a,b,c,d){var u,t
H.v(b,d)
u=J.jA(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.H(u,t,b)
return H.o(u,"$ib",[d],"$ab")},
jF:function(a,b,c){var u,t,s
u=[c]
t=H.a([],u)
for(s=a.gF(a);s.q();)C.a.h(t,H.v(s.gA(),c))
if(b)return t
return H.o(J.dX(t),"$ib",u,"$ab")},
hu:function(a,b,c){var u,t
u=P.u
H.o(a,"$ip",[u],"$ap")
if(a.constructor===Array){H.o(a,"$ial",[u],"$aal")
t=a.length
c=P.ik(b,c,t,null,null,null)
return H.ij(b>0||c<t?C.a.cO(a,b,c):a)}return P.jV(a,b,c)},
jV:function(a,b,c){var u,t,s
H.o(a,"$ip",[P.u],"$ap")
u=J.br(a)
for(t=0;t<b;++t)if(!u.q())throw H.d(P.a7(b,0,t,null,null))
s=[]
for(;u.q();)s.push(u.gA())
return H.ij(s)},
jQ:function(a,b,c){return new H.e0(a,H.jB(a,!1,!0,!1))},
ip:function(a,b,c){var u=J.br(b)
if(!u.q())return a
if(c.length===0){do a+=H.c(u.gA())
while(u.q())}else{a+=H.c(u.gA())
for(;u.q();)a=a+c+H.c(u.gA())}return a},
iF:function(a,b,c,d){var u,t,s,r,q,p
H.o(a,"$ib",[P.u],"$ab")
if(c===C.q){u=$.jd().b
u=u.test(b)}else u=!1
if(u)return b
t=C.C.eO(H.v(b,H.aU(c,"bw",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.i(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.ht(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
jq:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
jr:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cg:function(a){if(a>=10)return""+a
return"0"+a},
i2:function(a,b,c,d,e,f){return new P.av(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
dE:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ah(a)
if(typeof a==="string")return JSON.stringify(a)
return P.jw(a)},
hm:function(a,b,c){return new P.ai(!0,a,b,c)},
cF:function(a,b,c){return new P.b8(null,null,!0,a,b,"Value not in range")},
a7:function(a,b,c,d,e){return new P.b8(b,c,!0,a,d,"Invalid value")},
ik:function(a,b,c,d,e,f){if(0>a||a>c)throw H.d(P.a7(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.d(P.a7(b,a,c,"end",f))
return b}return c},
b1:function(a,b,c,d,e){var u=H.Q(e==null?J.aX(b):e)
return new P.dT(b,u,!0,a,c,"Index out of range")},
a8:function(a){return new P.fa(a)},
iu:function(a){return new P.f8(a)},
io:function(a){return new P.bM(a)},
aG:function(a){return new P.dr(a)},
V:function(a){return new P.d0(a)},
hO:function(a){H.kD(a)},
D:function D(){},
aH:function aH(a,b){this.a=a
this.b=b},
r:function r(){},
av:function av(a){this.a=a},
dy:function dy(){},
dz:function dz(){},
aI:function aI(){},
cA:function cA(){},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b8:function b8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dT:function dT(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fa:function fa(a){this.a=a},
f8:function f8(a){this.a=a},
bM:function bM(a){this.a=a},
dr:function dr(a){this.a=a},
em:function em(){},
cL:function cL(){},
dt:function dt(a){this.a=a},
d0:function d0(a){this.a=a},
dN:function dN(a,b,c){this.a=a
this.b=b
this.c=c},
aJ:function aJ(){},
u:function u(){},
p:function p(){},
ak:function ak(){},
b:function b(){},
w:function w(){},
Z:function Z(){},
x:function x(){},
Y:function Y(){},
j:function j(){},
ba:function ba(a){this.a=a},
kj:function(a,b){var u={}
a.O(0,new P.h3(u))
return u},
h3:function h3(a){this.a=a},
dJ:function dJ(a,b){this.a=a
this.b=b},
dK:function dK(){},
dL:function dL(){},
bJ:function bJ(){},
h:function h(){},
ca:function ca(){},
cl:function cl(){},
cD:function cD(){},
b9:function b9(){},
cJ:function cJ(){},
cS:function cS(){}},W={
hX:function(a){var u=document.createElement("a")
return u},
i_:function(a,b){var u=document.createElement("canvas")
return u},
ju:function(a,b,c){var u,t
u=document.body
t=(u&&C.j).R(u,a,b,c)
t.toString
u=W.t
u=new H.bU(new W.S(t),H.f(new W.dB(),{func:1,ret:P.D,args:[u]}),[u])
return H.k(u.ga7(u),"$iC")},
jv:function(a){H.k(a,"$iaZ")
return"wheel"},
bA:function(a){var u,t,s
u="element tag unavailable"
try{t=J.ji(a)
if(typeof t==="string")u=a.tagName}catch(s){H.a3(s)}return u},
fJ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iD:function(a,b,c,d){var u,t
u=W.fJ(W.fJ(W.fJ(W.fJ(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
P:function(a,b,c,d,e){var u,t
u=W.iL(new W.fz(c),W.e)
t=u!=null
if(t&&!0){H.f(u,{func:1,args:[W.e]})
if(t)J.jg(a,b,u,!1)}return new W.fy(a,b,u,!1,[e])},
iC:function(a){var u,t
u=W.hX(null)
t=window.location
u=new W.aR(new W.fP(u,t))
u.d_(a)
return u},
k3:function(a,b,c,d){H.k(a,"$iC")
H.y(b)
H.y(c)
H.k(d,"$iaR")
return!0},
k4:function(a,b,c,d){var u,t,s
H.k(a,"$iC")
H.y(b)
H.y(c)
u=H.k(d,"$iaR").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
iE:function(){var u,t,s,r,q
u=P.j
t=P.i7(C.m,u)
s=H.q(C.m,0)
r=H.f(new W.fV(),{func:1,ret:u,args:[s]})
q=H.a(["TEMPLATE"],[u])
t=new W.fU(t,P.cs(null,null,null,u),P.cs(null,null,null,u),P.cs(null,null,null,u),null)
t.d2(null,new H.ec(C.m,r,[s,u]),q,null)
return t},
iL:function(a,b){var u
H.f(a,{func:1,ret:-1,args:[b]})
u=$.F
if(u===C.f)return a
return u.bR(a,b)},
m:function m(){},
c8:function c8(){},
dk:function dk(){},
bs:function bs(){},
aA:function aA(){},
aY:function aY(){},
aB:function aB(){},
by:function by(){},
ds:function ds(){},
a4:function a4(){},
bz:function bz(){},
dx:function dx(){},
ch:function ch(){},
ci:function ci(){},
fv:function fv(a,b){this.a=a
this.b=b},
C:function C(){},
dB:function dB(){},
e:function e(){},
aZ:function aZ(){},
dM:function dM(){},
cm:function cm(){},
b0:function b0(){},
cn:function cn(){},
an:function an(){},
ct:function ct(){},
O:function O(){},
S:function S(a){this.a=a},
t:function t(){},
bH:function bH(){},
cE:function cE(){},
ew:function ew(){},
bb:function bb(){},
cM:function cM(){},
cN:function cN(){},
eL:function eL(){},
bO:function bO(){},
ap:function ap(){},
af:function af(){},
eS:function eS(){},
aP:function aP(){},
as:function as(){},
bV:function bV(){},
bW:function bW(){},
d_:function d_(){},
d5:function d5(){},
fu:function fu(){},
fw:function fw(a){this.a=a},
fx:function fx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hy:function hy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fy:function fy(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
fz:function fz(a){this.a=a},
aR:function aR(a){this.a=a},
a_:function a_(){},
cz:function cz(a){this.a=a},
ej:function ej(a){this.a=a},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(){},
fR:function fR(){},
fS:function fS(){},
fU:function fU(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
fV:function fV(){},
fT:function fT(){},
ck:function ck(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
a1:function a1(){},
fP:function fP(a,b){this.a=a
this.b=b},
dd:function dd(a){this.a=a},
fZ:function fZ(a){this.a=a},
cZ:function cZ(){},
d1:function d1(){},
d2:function d2(){},
d6:function d6(){},
d7:function d7(){},
db:function db(){},
dc:function dc(){},
de:function de(){},
df:function df(){}},O={
i1:function(a){var u=new O.aD([a])
u.sdw(H.a([],[a]))
u.sbG(null)
u.sbF(null)
u.sbH(null)
return u},
aD:function aD(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bF:function bF(){this.b=this.a=null},
dv:function dv(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
bc:function bc(){}},E={
jS:function(a,b){var u=new E.er(a,b)
u.cV(a,b)
return u},
jW:function(a,b,c,d,e){var u,t,s,r
u=J.J(a)
if(!!u.$iaY)return E.iq(a,!0,!0,!0,!1)
t=W.i_(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gbT(a).h(0,t)
r=E.iq(t,!0,!0,!0,!1)
r.a=a
return r},
iq:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.cP()
t=P.jD(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
s=C.r.be(a,"webgl",t)
s=H.k(s==null?C.r.be(a,"experimental-webgl",t):s,"$ib9")
if(s==null)H.T(P.V("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.jS(s,a)
r=new T.eN(s)
r.b=H.Q((s&&C.b).bf(s,3379))
r.c=H.Q(C.b.bf(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.cV(a)
q=new X.e2()
q.c=new X.ay(!1,!1,!1)
q.se9(P.cs(null,null,null,P.u))
r.b=q
q=new X.ed(r)
q.f=0
q.r=V.cC()
q.x=V.cC()
q.Q=1
q.ch=1
r.c=q
q=new X.e7(r)
q.r=0
q.x=V.cC()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.eR(r)
q.e=0
q.f=V.cC()
q.r=V.cC()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sdj(H.a([],[[P.bN,P.x]]))
q=r.z
p=document
o=W.O
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.P(p,"contextmenu",H.f(r.gdG(),n),!1,o))
q=r.z
m=W.e
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.P(a,"focus",H.f(r.gdM(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.P(a,"blur",H.f(r.gdA(),l),!1,m))
q=r.z
k=W.an
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.P(p,"keyup",H.f(r.gdQ(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.P(p,"keydown",H.f(r.gdO(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.P(a,"mousedown",H.f(r.gdT(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.P(a,"mouseup",H.f(r.gdX(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.P(a,"mousemove",H.f(r.gdV(),n),!1,o))
k=r.z
j=W.as;(k&&C.a).h(k,W.P(a,H.y(W.jv(a)),H.f(r.gdZ(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.P(p,"mousemove",H.f(r.gdI(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.P(p,"mouseup",H.f(r.gdK(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.P(p,"pointerlockchange",H.f(r.ge0(),l),!1,m))
m=r.z
l=W.af
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.P(a,"touchstart",H.f(r.ge7(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.P(a,"touchend",H.f(r.ge3(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.P(a,"touchmove",H.f(r.ge5(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.aH(Date.now(),!1)
u.cy=0
u.bJ()
return u},
dm:function dm(){},
U:function U(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
er:function er(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
es:function es(a){this.a=a},
et:function et(a){this.a=a},
eu:function eu(a){this.a=a},
cP:function cP(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eO:function eO(a){this.a=a}},Z={
jY:function(a,b,c){var u
H.o(c,"$ib",[P.u],"$ab")
u=a.createBuffer()
C.b.a_(a,b,u)
C.b.bS(a,b,new Int16Array(H.hA(c)),35044)
C.b.a_(a,b,null)
return new Z.cX(b,u)},
aa:function(a){return new Z.cW(a)},
cX:function cX(a,b){this.a=a
this.b=b},
cb:function cb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fo:function fo(a){this.a=a},
cc:function cc(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a){this.a=a}},D={
ax:function(){var u=new D.bB()
u.sac(null)
u.sav(null)
u.c=null
u.d=0
return u},
dq:function dq(){},
bB:function bB(){var _=this
_.d=_.c=_.b=_.a=null},
dF:function dF(a){this.a=a},
dG:function dG(a){this.a=a},
z:function z(a){this.a=a
this.b=null},
dU:function dU(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
dV:function dV(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
I:function I(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e}},X={cd:function cd(a,b){this.a=a
this.b=b},cq:function cq(a,b){this.a=a
this.b=b},e2:function e2(){var _=this
_.d=_.c=_.b=_.a=null},e7:function e7(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ay:function ay(a,b,c){this.a=a
this.b=b
this.c=c},ed:function ed(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},eR:function eR(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cV:function cV(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jx:function(a,b,c,d,e,f,g){var u,t
u=new X.dO()
t=new V.aF(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.il
if(t==null){t=V.jR(0,0,1,1)
$.il=t}u.r=t
return u},
ce:function ce(){},
dO:function dO(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cB:function cB(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cO:function cO(){}},V={
hQ:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.cG(a-b,u)
return(a<0?a+u:a)+b},
A:function(a,b,c){if(a==null)return C.d.a5("null",c)
return C.d.a5(C.c.cl(Math.abs(a-0)<$.G().a?0:a,b),c+b+1)},
h6:function(a,b,c){var u,t,s,r,q
H.o(a,"$ib",[P.r],"$ab")
u=H.a([],[P.j])
for(t=0,s=0;s<4;++s){r=V.A(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(u,r)}for(q=u.length-1;q>=0;--q){if(q>=u.length)return H.i(u,q)
C.a.H(u,q,C.d.a5(u[q],t))}return u},
ia:function(){var u=$.i9
if(u==null){u=V.aO(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.i9=u}return u},
aO:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cC:function(){var u=$.ig
if(u==null){u=new V.X(0,0)
$.ig=u}return u},
jR:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cH(a,b,c,d)},
fd:function(){var u=$.iA
if(u==null){u=new V.K(0,0,0)
$.iA=u}return u},
aE:function aE(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dD:function dD(a){this.a=a},
aN:function aN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ar:function ar(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
E:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.V("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.d.aa(a,0)
t=C.d.aa(b,0)
s=new V.ep()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
n:function(a){var u=new V.ex()
u.cW(a)
return u},
eQ:function(){var u,t
u=new V.eP()
t=P.j
u.sev(new H.am([t,V.bL]))
u.sex(new H.am([t,V.bP]))
u.c=null
return u},
au:function au(){},
a0:function a0(){},
cu:function cu(){},
W:function W(){this.a=null},
ep:function ep(){this.b=this.a=null},
ex:function ex(){this.a=null},
bL:function bL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
bP:function bP(a,b){this.a=a
this.b=b
this.c=null},
eP:function eP(){this.c=this.b=this.a=null},
bQ:function bQ(a){this.b=a
this.a=this.c=null},
kG:function(a){P.jX(C.E,new V.hh(a))},
jU:function(a,b){var u=new V.eB()
u.cY(a,!0)
return u},
aC:function aC(){},
hh:function hh(a){this.a=a},
du:function du(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dP:function dP(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dQ:function dQ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eo:function eo(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eB:function eB(){this.b=this.a=null},
eD:function eD(a){this.a=a},
eC:function eC(a){this.a=a},
eE:function eE(a){this.a=a}},U={cf:function cf(){this.b=this.a=null},bG:function bG(){},cI:function cI(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cj:function cj(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
hw:function(a,b,c,d,e){var u=new A.eY(a,b,c,e)
u.f=d
u.sez(P.jE(d,0,!1,P.u))
return u},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
dl:function dl(a){this.a=a},
dw:function dw(a,b){var _=this
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
bK:function bK(){},
cR:function cR(){},
f3:function f3(a){this.a=a},
eX:function eX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f0:function f0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f2:function f2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eY:function eY(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eZ:function eZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f4:function f4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f5:function f5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f6:function f6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f7:function f7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
kK:function(a,b,c,d){return F.kk(c,a,d,b,new F.hi())},
kk:function(a,b,c,d,e){var u,t
u=F.kI(a,b,new F.h4(H.f(e,{func:1,ret:V.a6,args:[P.r]}),d,b,c),null)
if(u==null)return
t=u.e
if(t!=null)++t.d
u.d.b2()
u.a.b2()
t=u.e
if(t!=null)t.aD()
u.fi(new F.fj(),new F.ek())
return u},
kI:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.f(c,{func:1,ret:-1,args:[F.a9,P.r,P.r]})
if(a<1)return
if(b<1)return
u=new F.cK()
t=new F.fe(u)
t.b=!1
s=[F.a9]
t.seA(H.a([],s))
u.a=t
t=new F.eA(u)
t.saV(H.a([],[F.b5]))
u.b=t
t=new F.ez(u)
t.sdt(H.a([],[F.aM]))
u.c=t
t=new F.ey(u)
t.sdk(H.a([],[F.N]))
u.d=t
u.e=null
r=H.a([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
t.toString
o=F.hx(null,null,new V.aF(s,0,0,1),null,null,new V.X(p,1),null,null,0)
t.h(0,o)
c.$3(o,p,0)
C.a.h(r,o.bW(d))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
k.toString
o=F.hx(null,null,new V.aF(j,i,h,1),null,null,new V.X(p,m),null,null,0)
k.h(0,o)
c.$3(o,p,n)
C.a.h(r,o.bW(d))}}u.d.eB(a+1,b+1,r)
return u},
dH:function(a,b,c){var u,t
u=new F.N()
t=a.a
if(t==null)H.T(P.V("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.T(P.V("May not create a face with vertices attached to different shapes."))
u.em(a)
u.en(b)
u.eo(c)
C.a.h(u.a.a.d.b,u)
u.a.a.U()
return u},
hx:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.a9()
t=new F.fm(u)
t.saV(H.a([],[F.b5]))
u.b=t
t=new F.fi(u)
s=[F.aM]
t.sdu(H.a([],s))
t.sdv(H.a([],s))
u.c=t
t=new F.ff(u)
s=[F.N]
t.sdl(H.a([],s))
t.sdm(H.a([],s))
t.sdn(H.a([],s))
u.d=t
h=$.j9()
u.e=0
t=$.az()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bn().a)!==0?e:null
u.x=(s&$.bm().a)!==0?b:null
u.y=(s&$.bo().a)!==0?f:null
u.z=(s&$.bp().a)!==0?g:null
u.Q=(s&$.ja().a)!==0?c:null
u.ch=(s&$.bq().a)!==0?i:0
u.cx=(s&$.bl().a)!==0?a:null
return u},
hi:function hi(){},
h4:function h4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
N:function N(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dI:function dI(){},
eF:function eF(){},
aM:function aM(){},
e3:function e3(){},
eW:function eW(){},
b5:function b5(){},
cK:function cK(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ey:function ey(a){this.a=a
this.b=null},
ez:function ez(a){this.a=a
this.b=null},
eA:function eA(a){this.a=a
this.b=null},
a9:function a9(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fn:function fn(a){this.a=a},
fe:function fe(a){this.a=a
this.c=this.b=null},
ff:function ff(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fg:function fg(a,b){this.a=a
this.b=b},
fh:function fh(a,b){this.a=a
this.b=b},
fi:function fi(a){this.a=a
this.c=this.b=null},
fk:function fk(){},
fj:function fj(){},
fl:function fl(){},
ek:function ek(){},
fm:function fm(a){this.a=a
this.b=null}},T={eN:function eN(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}},Y={
iT:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=V.jU("Test 001",!0)
t=W.i_(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.e.p(u.a,t)
s=[P.j]
u.bO(H.a(["Test of the Depth shader, a basic fog shader with a single auto-rotating shape."],s))
u.bO(H.a(["\xab[Back to Tests|../]"],s))
r=new E.U()
r.a=""
r.b=!0
s=E.U
r.sdc(0,O.i1(s))
r.y.bh(r.gfj(),r.gfm())
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
r.sbj(0,null)
r.sao(null)
r.sbj(0,F.kK(30,1,15,0.5))
q=new U.cI()
q.a=0
q.b=0
q.c=0
q.d=0
q.e=0
q.f=0
q.r=0
q.scs(0)
q.sca(0)
q.scf(0)
p=q.d
if(!(Math.abs(p-0.1)<$.G().a)){q.d=0.1
p=new D.I("deltaYaw",p,0.1,q,[P.r])
p.b=!0
q.ad(p)}p=q.e
if(!(Math.abs(p-0.21)<$.G().a)){q.e=0.21
p=new D.I("deltaPitch",p,0.21,q,[P.r])
p.b=!0
q.ad(p)}p=q.f
if(!(Math.abs(p-0.32)<$.G().a)){q.f=0.32
p=new D.I("deltaRoll",p,0.32,q,[P.r])
p.b=!0
q.ad(p)}r.sao(q)
o=new O.dv()
o.d=1
o.e=10
n=new V.aE(1,1,1)
o.b=n
q=[V.aE]
p=new D.I("objectColor",null,n,o,q)
p.b=!0
o.at(p)
n=new V.aE(0,0,0)
if(!J.L(o.c,n)){m=o.c
o.c=n
q=new D.I("fogColor",m,n,o,q)
q.b=!0
o.at(q)}q=o.d
if(!(Math.abs(q-3)<$.G().a)){o.d=3
q=new D.I("fogStart",q,3,o,[P.r])
q.b=!0
o.at(q)}q=o.e
if(!(Math.abs(q-6)<$.G().a)){o.e=6
q=new D.I("fogStop",q,6,o,[P.r])
q.b=!0
o.at(q)}l=new M.cj()
l.sd0(0,O.i1(s))
l.d.bh(l.gdC(),l.gdE())
l.e=null
l.f=null
l.r=null
l.x=null
k=X.jx(!0,!0,!1,null,2000,null,0)
j=new X.cB()
j.c=1.0471975511965976
j.d=0.1
j.e=2000
j.sao(null)
s=j.c
if(!(Math.abs(s-1.0471975511965976)<$.G().a)){j.c=1.0471975511965976
s=new D.I("fov",s,1.0471975511965976,j,[P.r])
s.b=!0
j.a9(s)}s=j.d
if(!(Math.abs(s-0.1)<$.G().a)){j.d=0.1
s=new D.I("near",s,0.1,j,[P.r])
s.b=!0
j.a9(s)}s=j.e
if(!(Math.abs(s-2000)<$.G().a)){j.e=2000
s=new D.I("far",s,2000,j,[P.r])
s.b=!0
j.a9(s)}s=l.a
if(s!==j){if(s!=null)s.gw().G(0,l.gX())
m=l.a
l.a=j
j.gw().h(0,l.gX())
s=new D.I("camera",m,l.a,l,[X.ce])
s.b=!0
l.a0(s)}s=l.b
if(s!==k){if(s!=null)s.gw().G(0,l.gX())
m=l.b
l.b=k
k.gw().h(0,l.gX())
s=new D.I("target",m,l.b,l,[X.cO])
s.b=!0
l.a0(s)}l.sci(null)
s=l.d
q=H.q(s,0)
H.v(r,q)
q=[q]
if(s.e2(H.a([r],q))){p=s.a
i=p.length
C.a.h(p,r)
s.dz(i,H.a([r],q))}l.sci(o)
s=l.a
h=V.aO(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
q=new U.cf()
q.a=h
s.sao(q)
g=C.t.cA(document,"testCanvas")
if(g==null)H.T(P.V("Failed to find an element with the identifier, testCanvas."))
f=E.jW(g,!0,!0,!0,!1)
s=f.d
if(s!==l){if(s!=null)s.gw().G(0,f.gbm())
f.d=l
l.gw().h(0,f.gbm())
f.bn()}s=f.z
if(s==null){s=D.ax()
f.z=s}q={func:1,ret:-1,args:[D.z]}
p=H.f(new Y.he(u,o),q)
if(s.b==null)s.sav(H.a([],[q]))
s=s.b;(s&&C.a).h(s,p)
V.kG(f)},
he:function he(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,Y]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.hr.prototype={}
J.M.prototype={
n:function(a,b){return a===b},
gC:function(a){return H.bI(a)},
i:function(a){return"Instance of '"+H.b7(a)+"'"}}
J.dY.prototype={
i:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$iD:1}
J.e_.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gC:function(a){return 0},
$iw:1}
J.cp.prototype={
gC:function(a){return 0},
i:function(a){return String(a)}}
J.en.prototype={}
J.aQ.prototype={}
J.aL.prototype={
i:function(a){var u=a[$.iZ()]
if(u==null)return this.cR(a)
return"JavaScript function for "+H.c(J.ah(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iaJ:1}
J.al.prototype={
h:function(a,b){H.v(b,H.q(a,0))
if(!!a.fixed$length)H.T(P.a8("add"))
a.push(b)},
fD:function(a,b){var u
if(!!a.fixed$length)H.T(P.a8("removeAt"))
u=a.length
if(b>=u)throw H.d(P.cF(b,null,null))
return a.splice(b,1)[0]},
G:function(a,b){var u
if(!!a.fixed$length)H.T(P.a8("remove"))
for(u=0;u<a.length;++u)if(J.L(a[u],b)){a.splice(u,1)
return!0}return!1},
O:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.aG(a))}},
k:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.H(u,t,H.c(a[t]))
return u.join(b)},
fd:function(a){return this.k(a,"")},
f6:function(a,b,c){var u,t,s
H.f(b,{func:1,ret:P.D,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.d(P.aG(a))}throw H.d(H.dW())},
f5:function(a,b){return this.f6(a,b,null)},
N:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
cO:function(a,b,c){var u=a.length
if(b>u)throw H.d(P.a7(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.a7(c,b,a.length,"end",null))
if(b===c)return H.a([],[H.q(a,0)])
return H.a(a.slice(b,c),[H.q(a,0)])},
gf4:function(a){if(a.length>0)return a[0]
throw H.d(H.dW())},
gaB:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.dW())},
bP:function(a,b){var u,t
H.f(b,{func:1,ret:P.D,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.d(P.aG(a))}return!1},
K:function(a,b){var u
for(u=0;u<a.length;++u)if(J.L(a[u],b))return!0
return!1},
i:function(a){return P.hp(a,"[","]")},
gF:function(a){return new J.ad(a,a.length,0,[H.q(a,0)])},
gC:function(a){return H.bI(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.T(P.a8("set length"))
if(b<0)throw H.d(P.a7(b,0,null,"newLength",null))
a.length=b},
H:function(a,b,c){H.v(c,H.q(a,0))
if(!!a.immutable$list)H.T(P.a8("indexed set"))
if(b>=a.length||b<0)throw H.d(H.c3(a,b))
a[b]=c},
$ip:1,
$ib:1}
J.hq.prototype={}
J.ad.prototype={
gA:function(){return this.d},
q:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.d(H.B(u))
s=this.c
if(s>=t){this.sbq(null)
return!1}this.sbq(u[s]);++this.c
return!0},
sbq:function(a){this.d=H.v(a,H.q(this,0))},
$iak:1}
J.b2.prototype={
c0:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.a8(""+a+".floor()"))},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.a8(""+a+".round()"))},
cl:function(a,b){var u,t
if(b>20)throw H.d(P.a7(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
u:function(a,b){if(typeof b!=="number")throw H.d(H.aT(b))
return a-b},
I:function(a,b){if(typeof b!=="number")throw H.d(H.aT(b))
return a*b},
cG:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
cU:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bK(a,b)},
af:function(a,b){return(a|0)===a?a/b|0:this.bK(a,b)},
bK:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.a8("Result of truncating division is "+H.c(u)+": "+H.c(a)+" ~/ "+b))},
ax:function(a,b){var u
if(a>0)u=this.eu(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
eu:function(a,b){return b>31?0:a>>>b},
$ir:1,
$iZ:1}
J.co.prototype={$iu:1}
J.dZ.prototype={}
J.aK.prototype={
b3:function(a,b){if(b<0)throw H.d(H.c3(a,b))
if(b>=a.length)H.T(H.c3(a,b))
return a.charCodeAt(b)},
aa:function(a,b){if(b>=a.length)throw H.d(H.c3(a,b))
return a.charCodeAt(b)},
P:function(a,b){if(typeof b!=="string")throw H.d(P.hm(b,null,null))
return a+b},
cN:function(a,b,c){var u
if(c>a.length)throw H.d(P.a7(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
aH:function(a,b){return this.cN(a,b,0)},
ar:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.cF(b,null,null))
if(b>c)throw H.d(P.cF(b,null,null))
if(c>a.length)throw H.d(P.cF(c,null,null))
return a.substring(b,c)},
aI:function(a,b){return this.ar(a,b,null)},
fP:function(a){return a.toLowerCase()},
I:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.B)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
fq:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.I(c,u)+a},
a5:function(a,b){return this.fq(a,b," ")},
i:function(a){return a},
gC:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$iid:1,
$ij:1}
H.l.prototype={
gl:function(a){return this.a.length},
m:function(a,b){return C.d.b3(this.a,b)},
$acU:function(){return[P.u]},
$aH:function(){return[P.u]},
$ap:function(){return[P.u]},
$ab:function(){return[P.u]}}
H.dA.prototype={}
H.b3.prototype={
gF:function(a){return new H.bE(this,this.gl(this),0,[H.aU(this,"b3",0)])},
aE:function(a,b){return this.cQ(0,H.f(b,{func:1,ret:P.D,args:[H.aU(this,"b3",0)]}))}}
H.bE.prototype={
gA:function(){return this.d},
q:function(){var u,t,s,r
u=this.a
t=J.hJ(u)
s=t.gl(u)
if(this.b!==s)throw H.d(P.aG(u))
r=this.c
if(r>=s){this.saj(null)
return!1}this.saj(t.N(u,r));++this.c
return!0},
saj:function(a){this.d=H.v(a,H.q(this,0))},
$iak:1}
H.ea.prototype={
gF:function(a){return new H.eb(J.br(this.a),this.b,this.$ti)},
gl:function(a){return J.aX(this.a)},
N:function(a,b){return this.b.$1(J.hk(this.a,b))},
$ap:function(a,b){return[b]}}
H.eb.prototype={
q:function(){var u=this.b
if(u.q()){this.saj(this.c.$1(u.gA()))
return!0}this.saj(null)
return!1},
gA:function(){return this.a},
saj:function(a){this.a=H.v(a,H.q(this,1))},
$aak:function(a,b){return[b]}}
H.ec.prototype={
gl:function(a){return J.aX(this.a)},
N:function(a,b){return this.b.$1(J.hk(this.a,b))},
$ab3:function(a,b){return[b]},
$ap:function(a,b){return[b]}}
H.bU.prototype={
gF:function(a){return new H.fp(J.br(this.a),this.b,this.$ti)}}
H.fp.prototype={
q:function(){var u,t
for(u=this.a,t=this.b;u.q();)if(t.$1(u.gA()))return!0
return!1},
gA:function(){return this.a.gA()}}
H.b_.prototype={}
H.cU.prototype={}
H.cT.prototype={}
H.eq.prototype={}
H.eT.prototype={
T:function(a){var u,t,s
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
H.el.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.c(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.e1.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.c(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.c(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.c(this.a)+")"}}
H.f9.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.hj.prototype={
$1:function(a){if(!!J.J(a).$iaI)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.d9.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iY:1}
H.bv.prototype={
i:function(a){return"Closure '"+H.b7(this).trim()+"'"},
$iaJ:1,
gfU:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.eM.prototype={}
H.eG.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bk(u)+"'"}}
H.bt.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bt))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gC:function(a){var u,t
u=this.c
if(u==null)t=H.bI(this.a)
else t=typeof u!=="object"?J.c7(u):H.bI(u)
return(t^H.bI(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.b7(u)+"'")}}
H.eV.prototype={
i:function(a){return this.a}}
H.dp.prototype={
i:function(a){return this.a}}
H.ev.prototype={
i:function(a){return"RuntimeError: "+H.c(this.a)}}
H.am.prototype={
gl:function(a){return this.a},
ga3:function(){return new H.cr(this,[H.q(this,0)])},
bV:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.bz(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.bz(t,a)}else return this.fa(a)},
fa:function(a){var u=this.d
if(u==null)return!1
return this.b5(this.aO(u,J.c7(a)&0x3ffffff),a)>=0},
m:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.au(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.au(r,b)
s=t==null?null:t.b
return s}else return this.fb(b)},
fb:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.aO(u,J.c7(a)&0x3ffffff)
s=this.b5(t,a)
if(s<0)return
return t[s].b},
H:function(a,b,c){var u,t,s,r,q,p
H.v(b,H.q(this,0))
H.v(c,H.q(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.aT()
this.b=u}this.br(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.aT()
this.c=t}this.br(t,b,c)}else{s=this.d
if(s==null){s=this.aT()
this.d=s}r=J.c7(b)&0x3ffffff
q=this.aO(s,r)
if(q==null)this.aY(s,r,[this.aK(b,c)])
else{p=this.b5(q,b)
if(p>=0)q[p].b=c
else q.push(this.aK(b,c))}}},
O:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.d(P.aG(this))
u=u.c}},
br:function(a,b,c){var u
H.v(b,H.q(this,0))
H.v(c,H.q(this,1))
u=this.au(a,b)
if(u==null)this.aY(a,b,this.aK(b,c))
else u.b=c},
d6:function(){this.r=this.r+1&67108863},
aK:function(a,b){var u,t
u=new H.e4(H.v(a,H.q(this,0)),H.v(b,H.q(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.d6()
return u},
b5:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1},
i:function(a){return P.i8(this)},
au:function(a,b){return a[b]},
aO:function(a,b){return a[b]},
aY:function(a,b,c){a[b]=c},
dh:function(a,b){delete a[b]},
bz:function(a,b){return this.au(a,b)!=null},
aT:function(){var u=Object.create(null)
this.aY(u,"<non-identifier-key>",u)
this.dh(u,"<non-identifier-key>")
return u},
$ii6:1}
H.e4.prototype={}
H.cr.prototype={
gl:function(a){return this.a.a},
gF:function(a){var u,t
u=this.a
t=new H.e5(u,u.r,this.$ti)
t.c=u.e
return t}}
H.e5.prototype={
gA:function(){return this.d},
q:function(){var u=this.a
if(this.b!==u.r)throw H.d(P.aG(u))
else{u=this.c
if(u==null){this.sbs(null)
return!1}else{this.sbs(u.a)
this.c=this.c.c
return!0}}},
sbs:function(a){this.d=H.v(a,H.q(this,0))},
$iak:1}
H.h9.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.ha.prototype={
$2:function(a,b){return this.a(a,b)},
$S:31}
H.hb.prototype={
$1:function(a){return this.a(H.y(a))},
$S:28}
H.e0.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$iid:1}
H.cy.prototype={}
H.cv.prototype={
gl:function(a){return a.length},
$iae:1,
$aae:function(){}}
H.cw.prototype={
m:function(a,b){H.dg(b,a,a.length)
return a[b]},
$ab_:function(){return[P.r]},
$aH:function(){return[P.r]},
$ip:1,
$ap:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.cx.prototype={
$ab_:function(){return[P.u]},
$aH:function(){return[P.u]},
$ip:1,
$ap:function(){return[P.u]},
$ib:1,
$ab:function(){return[P.u]}}
H.ee.prototype={
m:function(a,b){H.dg(b,a,a.length)
return a[b]}}
H.ef.prototype={
m:function(a,b){H.dg(b,a,a.length)
return a[b]}}
H.eg.prototype={
m:function(a,b){H.dg(b,a,a.length)
return a[b]}}
H.eh.prototype={
gl:function(a){return a.length},
m:function(a,b){H.dg(b,a,a.length)
return a[b]}}
H.bY.prototype={}
H.bZ.prototype={}
H.c_.prototype={}
H.c0.prototype={}
P.fr.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:20}
P.fq.prototype={
$1:function(a){var u,t
this.a.a=H.f(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:35}
P.fs.prototype={
$0:function(){this.a.$0()},
$S:0}
P.ft.prototype={
$0:function(){this.a.$0()},
$S:0}
P.da.prototype={
d3:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bg(new P.fX(this,b),0),a)
else throw H.d(P.a8("`setTimeout()` not found."))},
d4:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bg(new P.fW(this,a,Date.now(),b),0),a)
else throw H.d(P.a8("Periodic timer."))},
$iao:1}
P.fX.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:1}
P.fW.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.cU(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.at.prototype={
fg:function(a){if(this.c!==6)return!0
return this.b.b.bc(H.f(this.d,{func:1,ret:P.D,args:[P.x]}),a.a,P.D,P.x)},
f9:function(a){var u,t,s,r
u=this.e
t=P.x
s={futureOr:1,type:H.q(this,1)}
r=this.b.b
if(H.di(u,{func:1,args:[P.x,P.Y]}))return H.hI(r.fI(u,a.a,a.b,null,t,P.Y),s)
else return H.hI(r.bc(H.f(u,{func:1,args:[P.x]}),a.a,null,t),s)}}
P.ab.prototype={
cj:function(a,b,c){var u,t,s,r
u=H.q(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.F
if(t!==C.f){t.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.kc(b,t)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.ab(0,$.F,[c])
r=b==null?1:3
this.bu(new P.at(s,r,a,b,[u,c]))
return s},
fM:function(a,b){return this.cj(a,null,b)},
bu:function(a){var u,t
u=this.a
if(u<=1){a.a=H.k(this.c,"$iat")
this.c=a}else{if(u===2){t=H.k(this.c,"$iab")
u=t.a
if(u<4){t.bu(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.h2(null,null,u,H.f(new P.fA(this,a),{func:1,ret:-1}))}},
bI:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.k(this.c,"$iat")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.k(this.c,"$iab")
t=p.a
if(t<4){p.bI(a)
return}this.a=t
this.c=p.c}u.a=this.aw(a)
t=this.b
t.toString
P.h2(null,null,t,H.f(new P.fE(u,this),{func:1,ret:-1}))}},
aX:function(){var u=H.k(this.c,"$iat")
this.c=null
return this.aw(u)},
aw:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
bw:function(a){var u,t,s
u=H.q(this,0)
H.hI(a,{futureOr:1,type:u})
t=this.$ti
if(H.dh(a,"$ibC",t,"$abC"))if(H.dh(a,"$iab",t,null))P.iB(a,this)
else P.k2(a,this)
else{s=this.aX()
H.v(a,u)
this.a=4
this.c=a
P.bX(this,s)}},
bx:function(a,b){var u
H.k(b,"$iY")
u=this.aX()
this.a=8
this.c=new P.R(a,b)
P.bX(this,u)},
$ibC:1}
P.fA.prototype={
$0:function(){P.bX(this.a,this.b)},
$S:0}
P.fE.prototype={
$0:function(){P.bX(this.b,this.a.a)},
$S:0}
P.fB.prototype={
$1:function(a){var u=this.a
u.a=0
u.bw(a)},
$S:20}
P.fC.prototype={
$2:function(a,b){H.k(b,"$iY")
this.a.bx(a,b)},
$1:function(a){return this.$2(a,null)},
$S:27}
P.fD.prototype={
$0:function(){this.a.bx(this.b,this.c)},
$S:0}
P.fH.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.cg(H.f(r.d,{func:1}),null)}catch(q){t=H.a3(q)
s=H.bh(q)
if(this.d){r=H.k(this.a.a.c,"$iR").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.k(this.a.a.c,"$iR")
else p.b=new P.R(t,s)
p.a=!0
return}if(!!J.J(u).$ibC){if(u instanceof P.ab&&u.a>=4){if(u.a===8){r=this.b
r.b=H.k(u.c,"$iR")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.fM(new P.fI(o),null)
r.a=!1}},
$S:1}
P.fI.prototype={
$1:function(a){return this.a},
$S:25}
P.fG.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.q(s,0)
q=H.v(this.c,r)
p=H.q(s,1)
this.a.b=s.b.b.bc(H.f(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.a3(o)
t=H.bh(o)
s=this.a
s.b=new P.R(u,t)
s.a=!0}},
$S:1}
P.fF.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.k(this.a.a.c,"$iR")
r=this.c
if(r.fg(u)&&r.e!=null){q=this.b
q.b=r.f9(u)
q.a=!1}}catch(p){t=H.a3(p)
s=H.bh(p)
r=H.k(this.a.a.c,"$iR")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.R(t,s)
n.a=!0}},
$S:1}
P.cY.prototype={}
P.eH.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.ab(0,$.F,[P.u])
u.a=0
s=H.q(this,0)
r=H.f(new P.eJ(u,this),{func:1,ret:-1,args:[s]})
H.f(new P.eK(u,t),{func:1,ret:-1})
W.P(this.a,this.b,r,!1,s)
return t}}
P.eJ.prototype={
$1:function(a){H.v(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.w,args:[H.q(this.b,0)]}}}
P.eK.prototype={
$0:function(){this.b.bw(this.a.a)},
$S:0}
P.bN.prototype={}
P.eI.prototype={}
P.ao.prototype={}
P.R.prototype={
i:function(a){return H.c(this.a)},
$iaI:1}
P.h_.prototype={$ilh:1}
P.h1.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.cA()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.d(u)
s=H.d(u)
s.stack=t.i(0)
throw s},
$S:0}
P.fL.prototype={
fJ:function(a){var u,t,s
H.f(a,{func:1,ret:-1})
try{if(C.f===$.F){a.$0()
return}P.iH(null,null,this,a,-1)}catch(s){u=H.a3(s)
t=H.bh(s)
P.h0(null,null,this,u,H.k(t,"$iY"))}},
fK:function(a,b,c){var u,t,s
H.f(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.f===$.F){a.$1(b)
return}P.iI(null,null,this,a,b,-1,c)}catch(s){u=H.a3(s)
t=H.bh(s)
P.h0(null,null,this,u,H.k(t,"$iY"))}},
eG:function(a,b){return new P.fN(this,H.f(a,{func:1,ret:b}),b)},
b0:function(a){return new P.fM(this,H.f(a,{func:1,ret:-1}))},
bR:function(a,b){return new P.fO(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
cg:function(a,b){H.f(a,{func:1,ret:b})
if($.F===C.f)return a.$0()
return P.iH(null,null,this,a,b)},
bc:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.F===C.f)return a.$1(b)
return P.iI(null,null,this,a,b,c,d)},
fI:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.F===C.f)return a.$2(b,c)
return P.kd(null,null,this,a,b,c,d,e,f)}}
P.fN.prototype={
$0:function(){return this.a.cg(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.fM.prototype={
$0:function(){return this.a.fJ(this.b)},
$S:1}
P.fO.prototype={
$1:function(a){var u=this.c
return this.a.fK(this.b,H.v(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.fK.prototype={
gF:function(a){var u=new P.d3(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
K:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$ibd")!=null}else{t=this.dd(b)
return t}},
dd:function(a){var u=this.d
if(u==null)return!1
return this.aN(this.bC(u,a),a)>=0},
h:function(a,b){var u,t
H.v(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.hz()
this.b=u}return this.bt(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.hz()
this.c=t}return this.bt(t,b)}else return this.d7(b)},
d7:function(a){var u,t,s
H.v(a,H.q(this,0))
u=this.d
if(u==null){u=P.hz()
this.d=u}t=this.by(a)
s=u[t]
if(s==null)u[t]=[this.aU(a)]
else{if(this.aN(s,a)>=0)return!1
s.push(this.aU(a))}return!0},
G:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ed(this.c,b)
else return this.ea(b)},
ea:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.bC(u,a)
s=this.aN(t,a)
if(s<0)return!1
this.bL(t.splice(s,1)[0])
return!0},
bt:function(a,b){H.v(b,H.q(this,0))
if(H.k(a[b],"$ibd")!=null)return!1
a[b]=this.aU(b)
return!0},
ed:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$ibd")
if(u==null)return!1
this.bL(u)
delete a[b]
return!0},
bE:function(){this.r=1073741823&this.r+1},
aU:function(a){var u,t
u=new P.bd(H.v(a,H.q(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.bE()
return u},
bL:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.bE()},
by:function(a){return J.c7(a)&1073741823},
bC:function(a,b){return a[this.by(b)]},
aN:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1}}
P.bd.prototype={}
P.d3.prototype={
gA:function(){return this.d},
q:function(){var u=this.a
if(this.b!==u.r)throw H.d(P.aG(u))
else{u=this.c
if(u==null){this.sbv(null)
return!1}else{this.sbv(H.v(u.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
sbv:function(a){this.d=H.v(a,H.q(this,0))},
$iak:1}
P.e6.prototype={$ip:1,$ib:1}
P.H.prototype={
gF:function(a){return new H.bE(a,this.gl(a),0,[H.h8(this,a,"H",0)])},
N:function(a,b){return this.m(a,b)},
fO:function(a,b){var u,t
u=H.a([],[H.h8(this,a,"H",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.H(u,t,this.m(a,t))
return u},
fN:function(a){return this.fO(a,!0)},
i:function(a){return P.hp(a,"[","]")}}
P.e8.prototype={}
P.e9.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.c(a)
u.a=t+": "
u.a+=H.c(b)},
$S:12}
P.b4.prototype={
O:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.aU(this,"b4",0),H.aU(this,"b4",1)]})
for(u=J.br(this.ga3());u.q();){t=u.gA()
b.$2(t,this.m(0,t))}},
gl:function(a){return J.aX(this.ga3())},
i:function(a){return P.i8(this)},
$ia5:1}
P.fQ.prototype={
Y:function(a,b){var u
for(u=J.br(H.o(b,"$ip",this.$ti,"$ap"));u.q();)this.h(0,u.gA())},
i:function(a){return P.hp(this,"{","}")},
N:function(a,b){var u,t,s
if(b<0)H.T(P.a7(b,0,null,"index",null))
for(u=P.k5(this,this.r,H.q(this,0)),t=0;u.q();){s=u.d
if(b===t)return s;++t}throw H.d(P.b1(b,this,"index",null,t))},
$ip:1,
$iim:1}
P.d4.prototype={}
P.bw.prototype={}
P.bx.prototype={}
P.dC.prototype={
$abw:function(){return[P.j,[P.b,P.u]]}}
P.dS.prototype={
i:function(a){return this.a}}
P.dR.prototype={
de:function(a,b,c){var u,t,s,r,q,p
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
if(r>b)q.a+=C.d.ar(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.jj(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abx:function(){return[P.j,P.j]}}
P.fb.prototype={}
P.fc.prototype={
eP:function(a,b,c){var u,t,s
c=P.ik(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.fY(t)
if(s.dq(a,b,c)!==c)s.bM(C.d.b3(a,c-1),0)
return new Uint8Array(t.subarray(0,H.k8(0,s.b,t.length)))},
eO:function(a){return this.eP(a,0,null)},
$abx:function(){return[P.j,[P.b,P.u]]}}
P.fY.prototype={
bM:function(a,b){var u,t,s,r,q
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
dq:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.d.b3(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.d.aa(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.bM(r,C.d.aa(a,p)))s=p}else if(r<=2047){q=this.b
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
P.D.prototype={}
P.aH.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aH&&this.a===b.a&&!0},
gC:function(a){var u=this.a
return(u^C.h.ax(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.jq(H.jN(this))
t=P.cg(H.jL(this))
s=P.cg(H.jH(this))
r=P.cg(H.jI(this))
q=P.cg(H.jK(this))
p=P.cg(H.jM(this))
o=P.jr(H.jJ(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.r.prototype={}
P.av.prototype={
u:function(a,b){return new P.av(C.h.u(this.a,b.gfX()))},
n:function(a,b){if(b==null)return!1
return b instanceof P.av&&this.a===b.a},
gC:function(a){return C.h.gC(this.a)},
i:function(a){var u,t,s,r,q
u=new P.dz()
t=this.a
if(t<0)return"-"+new P.av(0-t).i(0)
s=u.$1(C.h.af(t,6e7)%60)
r=u.$1(C.h.af(t,1e6)%60)
q=new P.dy().$1(t%1e6)
return""+C.h.af(t,36e8)+":"+H.c(s)+":"+H.c(r)+"."+H.c(q)}}
P.dy.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:13}
P.dz.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:13}
P.aI.prototype={}
P.cA.prototype={
i:function(a){return"Throw of null."}}
P.ai.prototype={
gaM:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaL:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gaM()+t+s
if(!this.a)return r
q=this.gaL()
p=P.dE(this.b)
return r+q+": "+p}}
P.b8.prototype={
gaM:function(){return"RangeError"},
gaL:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.c(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.c(u)
else if(s>u)t=": Not in range "+H.c(u)+".."+H.c(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.c(u)}return t}}
P.dT.prototype={
gaM:function(){return"RangeError"},
gaL:function(){var u,t
u=H.Q(this.b)
if(typeof u!=="number")return u.fW()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.c(t)},
gl:function(a){return this.f}}
P.fa.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.f8.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bM.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dr.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dE(u)+"."}}
P.em.prototype={
i:function(a){return"Out of Memory"},
$iaI:1}
P.cL.prototype={
i:function(a){return"Stack Overflow"},
$iaI:1}
P.dt.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.d0.prototype={
i:function(a){return"Exception: "+this.a}}
P.dN.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.d.ar(s,0,75)+"...":s
return t+"\n"+r}}
P.aJ.prototype={}
P.u.prototype={}
P.p.prototype={
aE:function(a,b){var u=H.aU(this,"p",0)
return new H.bU(this,H.f(b,{func:1,ret:P.D,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gF(this)
for(t=0;u.q();)++t
return t},
ga7:function(a){var u,t
u=this.gF(this)
if(!u.q())throw H.d(H.dW())
t=u.gA()
if(u.q())throw H.d(H.jz())
return t},
N:function(a,b){var u,t,s
if(b<0)H.T(P.a7(b,0,null,"index",null))
for(u=this.gF(this),t=0;u.q();){s=u.gA()
if(b===t)return s;++t}throw H.d(P.b1(b,this,"index",null,t))},
i:function(a){return P.jy(this,"(",")")}}
P.ak.prototype={}
P.b.prototype={$ip:1}
P.w.prototype={
gC:function(a){return P.x.prototype.gC.call(this,this)},
i:function(a){return"null"}}
P.Z.prototype={}
P.x.prototype={constructor:P.x,$ix:1,
n:function(a,b){return this===b},
gC:function(a){return H.bI(this)},
i:function(a){return"Instance of '"+H.b7(this)+"'"},
toString:function(){return this.i(this)}}
P.Y.prototype={}
P.j.prototype={$iid:1}
P.ba.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.m.prototype={}
W.c8.prototype={
i:function(a){return String(a)},
$ic8:1}
W.dk.prototype={
i:function(a){return String(a)}}
W.bs.prototype={$ibs:1}
W.aA.prototype={$iaA:1}
W.aY.prototype={
be:function(a,b,c){var u=this.dr(a,b,P.kj(c,null))
return u},
dr:function(a,b,c){return a.getContext(b,c)},
$iaY:1}
W.aB.prototype={
gl:function(a){return a.length}}
W.by.prototype={
gl:function(a){return a.length}}
W.ds.prototype={}
W.a4.prototype={$ia4:1}
W.bz.prototype={
eC:function(a,b){return a.adoptNode(b)},
cA:function(a,b){return a.getElementById(b)}}
W.dx.prototype={
i:function(a){return String(a)}}
W.ch.prototype={
eS:function(a,b){return a.createHTMLDocument(b)}}
W.ci.prototype={
i:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
n:function(a,b){var u
if(b==null)return!1
if(!H.dh(b,"$icG",[P.Z],"$acG"))return!1
u=J.a2(b)
return a.left===u.gc2(b)&&a.top===u.gcn(b)&&a.width===u.gbd(b)&&a.height===u.gb4(b)},
gC:function(a){return W.iD(C.c.gC(a.left),C.c.gC(a.top),C.c.gC(a.width),C.c.gC(a.height))},
gb4:function(a){return a.height},
gc2:function(a){return a.left},
gcn:function(a){return a.top},
gbd:function(a){return a.width},
$icG:1,
$acG:function(){return[P.Z]}}
W.fv.prototype={
gl:function(a){return this.b.length},
m:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.i(u,b)
return H.k(u[b],"$iC")},
h:function(a,b){J.hV(this.a,b)
return b},
gF:function(a){var u=this.fN(this)
return new J.ad(u,u.length,0,[H.q(u,0)])},
$aH:function(){return[W.C]},
$ap:function(){return[W.C]},
$ab:function(){return[W.C]}}
W.C.prototype={
geF:function(a){return new W.fw(a)},
gbT:function(a){return new W.fv(a,a.children)},
i:function(a){return a.localName},
R:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.i4
if(u==null){u=H.a([],[W.a1])
t=new W.cz(u)
C.a.h(u,W.iC(null))
C.a.h(u,W.iE())
$.i4=t
d=t}else d=u
u=$.i3
if(u==null){u=new W.dd(d)
$.i3=u
c=u}else{u.a=d
c=u}}if($.aw==null){u=document
t=u.implementation
t=(t&&C.D).eS(t,"")
$.aw=t
$.ho=t.createRange()
t=$.aw
t.toString
t=t.createElement("base")
H.k(t,"$ibs")
t.href=u.baseURI
u=$.aw.head;(u&&C.F).p(u,t)}u=$.aw
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.k(t,"$iaA")}u=$.aw
if(!!this.$iaA)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.aw.body;(u&&C.j).p(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.K(C.Q,a.tagName)){u=$.ho;(u&&C.y).cI(u,s)
u=$.ho
r=(u&&C.y).eQ(u,b)}else{s.innerHTML=b
r=$.aw.createDocumentFragment()
for(u=J.a2(r);t=s.firstChild,t!=null;)u.p(r,t)}u=$.aw.body
if(s==null?u!=null:s!==u)J.hW(s)
c.bg(r)
C.t.eC(document,r)
return r},
eR:function(a,b,c){return this.R(a,b,c,null)},
cL:function(a,b,c,d){a.textContent=null
this.p(a,this.R(a,b,c,d))},
cK:function(a,b){return this.cL(a,b,null,null)},
ai:function(a,b){return a.getAttribute(b)},
eb:function(a,b){return a.removeAttribute(b)},
$iC:1,
gfL:function(a){return a.tagName}}
W.dB.prototype={
$1:function(a){return!!J.J(H.k(a,"$it")).$iC},
$S:14}
W.e.prototype={$ie:1}
W.aZ.prototype={
d8:function(a,b,c,d){return a.addEventListener(b,H.bg(H.f(c,{func:1,args:[W.e]}),1),!1)},
$iaZ:1}
W.dM.prototype={
gl:function(a){return a.length}}
W.cm.prototype={}
W.b0.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b1(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iae:1,
$aae:function(){return[W.t]},
$aH:function(){return[W.t]},
$ip:1,
$ap:function(){return[W.t]},
$ib:1,
$ab:function(){return[W.t]},
$ib0:1,
$aa_:function(){return[W.t]}}
W.cn.prototype={}
W.an.prototype={$ian:1}
W.ct.prototype={
i:function(a){return String(a)},
$ict:1}
W.O.prototype={$iO:1}
W.S.prototype={
ga7:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.d(P.io("No elements"))
if(t>1)throw H.d(P.io("More than one element"))
return u.firstChild},
Y:function(a,b){var u,t,s,r,q
H.o(b,"$ip",[W.t],"$ap")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.a2(t),q=0;q<s;++q)r.p(t,u.firstChild)
return},
gF:function(a){var u=this.a.childNodes
return new W.ck(u,u.length,-1,[H.h8(C.S,u,"a_",0)])},
gl:function(a){return this.a.childNodes.length},
m:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
$aH:function(){return[W.t]},
$ap:function(){return[W.t]},
$ab:function(){return[W.t]}}
W.t.prototype={
fC:function(a){var u=a.parentNode
if(u!=null)J.dj(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.cP(a):u},
p:function(a,b){return a.appendChild(b)},
ec:function(a,b){return a.removeChild(b)},
$it:1}
W.bH.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b1(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iae:1,
$aae:function(){return[W.t]},
$aH:function(){return[W.t]},
$ip:1,
$ap:function(){return[W.t]},
$ib:1,
$ab:function(){return[W.t]},
$aa_:function(){return[W.t]}}
W.cE.prototype={
eQ:function(a,b){return a.createContextualFragment(b)},
cI:function(a,b){return a.selectNodeContents(b)}}
W.ew.prototype={
gl:function(a){return a.length}}
W.bb.prototype={}
W.cM.prototype={
R:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
u=W.ju("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.S(t).Y(0,new W.S(u))
return t}}
W.cN.prototype={
R:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.k.R(u.createElement("table"),b,c,d)
u.toString
u=new W.S(u)
s=u.ga7(u)
s.toString
u=new W.S(s)
r=u.ga7(u)
t.toString
r.toString
new W.S(t).Y(0,new W.S(r))
return t}}
W.eL.prototype={
R:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.k.R(u.createElement("table"),b,c,d)
u.toString
u=new W.S(u)
s=u.ga7(u)
t.toString
s.toString
new W.S(t).Y(0,new W.S(s))
return t}}
W.bO.prototype={$ibO:1}
W.ap.prototype={$iap:1}
W.af.prototype={$iaf:1}
W.eS.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b1(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iae:1,
$aae:function(){return[W.ap]},
$aH:function(){return[W.ap]},
$ip:1,
$ap:function(){return[W.ap]},
$ib:1,
$ab:function(){return[W.ap]},
$aa_:function(){return[W.ap]}}
W.aP.prototype={}
W.as.prototype={
geY:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.a8("deltaY is not supported"))},
geX:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.a8("deltaX is not supported"))},
$ias:1}
W.bV.prototype={
ei:function(a,b){return a.requestAnimationFrame(H.bg(H.f(b,{func:1,ret:-1,args:[P.Z]}),1))},
di:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bW.prototype={$ibW:1}
W.d_.prototype={
i:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
n:function(a,b){var u
if(b==null)return!1
if(!H.dh(b,"$icG",[P.Z],"$acG"))return!1
u=J.a2(b)
return a.left===u.gc2(b)&&a.top===u.gcn(b)&&a.width===u.gbd(b)&&a.height===u.gb4(b)},
gC:function(a){return W.iD(C.c.gC(a.left),C.c.gC(a.top),C.c.gC(a.width),C.c.gC(a.height))},
gb4:function(a){return a.height},
gbd:function(a){return a.width}}
W.d5.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b1(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iae:1,
$aae:function(){return[W.t]},
$aH:function(){return[W.t]},
$ip:1,
$ap:function(){return[W.t]},
$ib:1,
$ab:function(){return[W.t]},
$aa_:function(){return[W.t]}}
W.fu.prototype={
O:function(a,b){var u,t,s,r,q,p
H.f(b,{func:1,ret:-1,args:[P.j,P.j]})
for(u=this.ga3(),t=u.length,s=this.a,r=J.a2(s),q=0;q<u.length;u.length===t||(0,H.B)(u),++q){p=u[q]
b.$2(p,r.ai(s,p))}},
ga3:function(){var u,t,s,r,q
u=this.a.attributes
t=H.a([],[P.j])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.i(u,r)
q=H.k(u[r],"$ibW")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$ab4:function(){return[P.j,P.j]},
$aa5:function(){return[P.j,P.j]}}
W.fw.prototype={
m:function(a,b){return J.hl(this.a,H.y(b))},
gl:function(a){return this.ga3().length}}
W.fx.prototype={}
W.hy.prototype={}
W.fy.prototype={}
W.fz.prototype={
$1:function(a){return this.a.$1(H.k(a,"$ie"))},
$S:36}
W.aR.prototype={
d_:function(a){var u,t
u=$.hT()
if(u.a===0){for(t=0;t<262;++t)u.H(0,C.P[t],W.kr())
for(t=0;t<12;++t)u.H(0,C.n[t],W.ks())}},
ag:function(a){return $.jc().K(0,W.bA(a))},
Z:function(a,b,c){var u,t,s
u=W.bA(a)
t=$.hT()
s=t.m(0,H.c(u)+"::"+b)
if(s==null)s=t.m(0,"*::"+b)
if(s==null)return!1
return H.hF(s.$4(a,b,c,this))},
$ia1:1}
W.a_.prototype={
gF:function(a){return new W.ck(a,this.gl(a),-1,[H.h8(this,a,"a_",0)])}}
W.cz.prototype={
ag:function(a){return C.a.bP(this.a,new W.ej(a))},
Z:function(a,b,c){return C.a.bP(this.a,new W.ei(a,b,c))},
$ia1:1}
W.ej.prototype={
$1:function(a){return H.k(a,"$ia1").ag(this.a)},
$S:16}
W.ei.prototype={
$1:function(a){return H.k(a,"$ia1").Z(this.a,this.b,this.c)},
$S:16}
W.d8.prototype={
d2:function(a,b,c,d){var u,t,s
this.a.Y(0,c)
u=b.aE(0,new W.fR())
t=b.aE(0,new W.fS())
this.b.Y(0,u)
s=this.c
s.Y(0,C.R)
s.Y(0,t)},
ag:function(a){return this.a.K(0,W.bA(a))},
Z:function(a,b,c){var u,t
u=W.bA(a)
t=this.c
if(t.K(0,H.c(u)+"::"+b))return this.d.eD(c)
else if(t.K(0,"*::"+b))return this.d.eD(c)
else{t=this.b
if(t.K(0,H.c(u)+"::"+b))return!0
else if(t.K(0,"*::"+b))return!0
else if(t.K(0,H.c(u)+"::*"))return!0
else if(t.K(0,"*::*"))return!0}return!1},
$ia1:1}
W.fR.prototype={
$1:function(a){return!C.a.K(C.n,H.y(a))},
$S:17}
W.fS.prototype={
$1:function(a){return C.a.K(C.n,H.y(a))},
$S:17}
W.fU.prototype={
Z:function(a,b,c){if(this.cT(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.hl(a,"template")==="")return this.e.K(0,b)
return!1}}
W.fV.prototype={
$1:function(a){return"TEMPLATE::"+H.c(H.y(a))},
$S:24}
W.fT.prototype={
ag:function(a){var u=J.J(a)
if(!!u.$ibJ)return!1
u=!!u.$ih
if(u&&W.bA(a)==="foreignObject")return!1
if(u)return!0
return!1},
Z:function(a,b,c){if(b==="is"||C.d.aH(b,"on"))return!1
return this.ag(a)},
$ia1:1}
W.ck.prototype={
q:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sbD(J.jf(this.a,u))
this.c=u
return!0}this.sbD(null)
this.c=t
return!1},
gA:function(){return this.d},
sbD:function(a){this.d=H.v(a,H.q(this,0))},
$iak:1}
W.a1.prototype={}
W.fP.prototype={$il4:1}
W.dd.prototype={
bg:function(a){new W.fZ(this).$2(a,null)},
al:function(a,b){if(b==null)J.hW(a)
else J.dj(b,a)},
ek:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.jh(a)
s=J.hl(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.a3(o)}q="element unprintable"
try{q=J.ah(a)}catch(o){H.a3(o)}try{p=W.bA(a)
this.ej(H.k(a,"$iC"),b,u,q,p,H.k(t,"$ia5"),H.y(s))}catch(o){if(H.a3(o) instanceof P.ai)throw o
else{this.al(a,b)
window
n="Removing corrupted element "+H.c(q)
if(typeof console!="undefined")window.console.warn(n)}}},
ej:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.al(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.ag(a)){this.al(a,b)
window
u="Removing disallowed element <"+H.c(e)+"> from "+H.c(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.Z(a,"is",g)){this.al(a,b)
window
u="Removing disallowed type extension <"+H.c(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga3()
t=H.a(u.slice(0),[H.q(u,0)])
for(s=f.ga3().length-1,u=f.a,r=J.a2(u);s>=0;--s){if(s>=t.length)return H.i(t,s)
q=t[s]
if(!this.a.Z(a,J.jk(q),r.ai(u,q))){window
p="Removing disallowed attribute <"+H.c(e)+" "+q+'="'+H.c(r.ai(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.ai(u,q)
r.eb(u,q)}}if(!!J.J(a).$ibO)this.bg(a.content)},
$ikR:1}
W.fZ.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.ek(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.al(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.a3(r)
q=H.k(u,"$it")
if(s){p=q.parentNode
if(p!=null)J.dj(p,q)}else J.dj(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$it")}},
$S:23}
W.cZ.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.de.prototype={}
W.df.prototype={}
P.h3.prototype={
$2:function(a,b){this.a[a]=b},
$S:12}
P.dJ.prototype={
gaP:function(){var u,t,s
u=this.b
t=H.aU(u,"H",0)
s=W.C
return new H.ea(new H.bU(u,H.f(new P.dK(),{func:1,ret:P.D,args:[t]}),[t]),H.f(new P.dL(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.hV(this.b.a,b)},
gl:function(a){return J.aX(this.gaP().a)},
m:function(a,b){var u=this.gaP()
return u.b.$1(J.hk(u.a,b))},
gF:function(a){var u=P.jF(this.gaP(),!1,W.C)
return new J.ad(u,u.length,0,[H.q(u,0)])},
$aH:function(){return[W.C]},
$ap:function(){return[W.C]},
$ab:function(){return[W.C]}}
P.dK.prototype={
$1:function(a){return!!J.J(H.k(a,"$it")).$iC},
$S:14}
P.dL.prototype={
$1:function(a){return H.bi(H.k(a,"$it"),"$iC")},
$S:22}
P.bJ.prototype={$ibJ:1}
P.h.prototype={
gbT:function(a){return new P.dJ(a,new W.S(a))},
R:function(a,b,c,d){var u,t,s,r,q,p
u=H.a([],[W.a1])
C.a.h(u,W.iC(null))
C.a.h(u,W.iE())
C.a.h(u,new W.fT())
c=new W.dd(new W.cz(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.j).eR(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.S(r)
p=u.ga7(u)
for(u=J.a2(q);s=p.firstChild,s!=null;)u.p(q,s)
return q},
$ih:1}
P.ca.prototype={$ica:1}
P.cl.prototype={$icl:1}
P.cD.prototype={$icD:1}
P.b9.prototype={
bQ:function(a,b,c){return a.attachShader(b,c)},
a_:function(a,b,c){return a.bindBuffer(b,c)},
eH:function(a,b,c){return a.bindFramebuffer(b,c)},
bS:function(a,b,c,d){return a.bufferData(b,c,d)},
eK:function(a,b){return a.clear(b)},
eL:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
eM:function(a,b){return a.clearDepth(b)},
eN:function(a,b){return a.compileShader(b)},
eT:function(a,b){return a.createShader(b)},
eV:function(a,b){return a.deleteProgram(b)},
eW:function(a,b){return a.deleteShader(b)},
eZ:function(a,b){return a.depthFunc(b)},
bX:function(a,b){return a.disableVertexAttribArray(b)},
f0:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bZ:function(a,b){return a.enable(b)},
c_:function(a,b){return a.enableVertexAttribArray(b)},
cu:function(a,b,c){return a.getActiveAttrib(b,c)},
cv:function(a,b,c){return a.getActiveUniform(b,c)},
cw:function(a,b,c){return a.getAttribLocation(b,c)},
bf:function(a,b){return a.getParameter(b)},
cB:function(a,b){return a.getProgramInfoLog(b)},
aF:function(a,b,c){return a.getProgramParameter(b,c)},
cC:function(a,b){return a.getShaderInfoLog(b)},
cD:function(a,b,c){return a.getShaderParameter(b,c)},
cE:function(a,b,c){return a.getUniformLocation(b,c)},
fe:function(a,b){return a.linkProgram(b)},
cM:function(a,b,c){return a.shaderSource(b,c)},
co:function(a,b,c){return a.uniform1f(b,c)},
cp:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fR:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cr:function(a,b){return a.useProgram(b)},
fS:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
fT:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ib9:1}
P.cJ.prototype={$icJ:1}
P.cS.prototype={$icS:1}
O.aD.prototype={
cJ:function(a,b,c){var u={func:1,ret:-1,args:[P.u,[P.p,H.q(this,0)]]}
H.f(a,u)
H.f(c,u)
this.sbG(b)
this.sbF(a)
this.sbH(c)},
bh:function(a,b){return this.cJ(a,null,b)},
e2:function(a){H.o(a,"$ip",this.$ti,"$ap")
return!0},
dz:function(a,b){var u
H.o(b,"$ip",this.$ti,"$ap")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gF:function(a){var u=this.a
return new J.ad(u,u.length,0,[H.q(u,0)])},
N:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
sdw:function(a){this.a=H.o(a,"$ib",this.$ti,"$ab")},
sbG:function(a){this.b=H.f(a,{func:1,ret:P.D,args:[[P.p,H.q(this,0)]]})},
sbF:function(a){this.c=H.f(a,{func:1,ret:-1,args:[P.u,[P.p,H.q(this,0)]]})},
sbH:function(a){this.d=H.f(a,{func:1,ret:-1,args:[P.u,[P.p,H.q(this,0)]]})},
$ip:1}
O.bF.prototype={
gl:function(a){return this.a.length},
gw:function(){var u=this.b
if(u==null){u=D.ax()
this.b=u}return u},
cZ:function(a){var u=this.b
if(u!=null)u.S(a)},
a8:function(){return this.cZ(null)},
gan:function(){var u=this.a
if(u.length>0)return C.a.gaB(u)
else return V.ia()},
cc:function(a){var u=this.a
if(a==null)C.a.h(u,V.ia())
else C.a.h(u,a)
this.a8()},
b9:function(){var u=this.a
if(u.length>0){u.pop()
this.a8()}},
saR:function(a){this.a=H.o(a,"$ib",[V.aN],"$ab")}}
E.dm.prototype={}
E.U.prototype={
sbj:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gw().G(0,this.gc7())
t=this.c
if(t!=null)t.gw().h(0,this.gc7())
s=new D.I("shape",u,this.c,this,[F.cK])
s.b=!0
this.V(s)}},
sao:function(a){var u,t
if(!J.L(this.r,a)){u=this.r
if(u!=null)u.gw().G(0,this.gc5())
if(a!=null)a.gw().h(0,this.gc5())
this.r=a
t=new D.I("mover",u,a,this,[U.bG])
t.b=!0
this.V(t)}},
cq:function(a){var u,t,s,r,q,p,o,n
u=this.r
if(u!=null){t=u.r
s=a.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.scs(u.a+u.d*a.y)
u.sca(u.b+u.e*a.y)
u.scf(u.c+u.f*a.y)
t=u.c
r=Math.cos(t)
q=Math.sin(t)
t=V.aO(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)
s=u.b
r=Math.cos(s)
q=Math.sin(s)
t=t.I(0,V.aO(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))
s=u.a
r=Math.cos(s)
q=Math.sin(s)
u.x=t.I(0,V.aO(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1))
t=u.y
if(t!=null)t.aD()}p=u.x}else p=null
if(!J.L(p,this.x)){o=this.x
this.x=p
n=new D.I("matrix",o,p,this,[V.aN])
n.b=!0
this.V(n)}for(u=this.y.a,u=new J.ad(u,u.length,0,[H.q(u,0)]);u.q();)u.d.cq(a)},
ah:function(a){var u,t,s,r,q,p,o,n,m
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gan())
else C.a.h(u.a,t.I(0,u.gan()))
u.a8()
a.cd(this.f)
u=a.dy
s=(u&&C.a).gaB(u)
if(s!=null&&this.d!=null){u=s.a
if(u==null){r=a.fr.m(0,"Depth")
if(r==null){u=a.a
r=new A.dw(u,"Depth")
r.cX(u,"Depth")
t=$.jt
q=$.js
r.c=t
r.d=q
r.e=r.bB(t,35633)
r.f=r.bB(r.d,35632)
t=u.createProgram()
r.r=t
C.b.bQ(u,t,r.e)
C.b.bQ(u,r.r,r.f)
C.b.fe(u,r.r)
if(!H.hF(C.b.aF(u,r.r,35714))){p=C.b.cB(u,r.r)
C.b.eV(u,r.r)
H.T(P.V("Failed to link shader: "+H.c(p)))}r.ep()
r.er()
r.z=r.x.m(0,"posAttr")
r.Q=H.bi(r.y.m(0,"objClr"),"$ibS")
r.ch=H.bi(r.y.m(0,"fogClr"),"$ibS")
r.cx=H.bi(r.y.m(0,"fogStart"),"$ibR")
r.cy=H.bi(r.y.m(0,"fogStop"),"$ibR")
r.db=H.bi(r.y.m(0,"viewObjMat"),"$ibT")
r.dx=H.bi(r.y.m(0,"projMat"),"$ibT")
if(a.fr.bV("Depth"))H.T(P.V('Shader cache already contains a shader by the name "Depth".'))
a.fr.H(0,"Depth",r)}s.a=r
u=r}t=this.e
if(!(t instanceof Z.cc)){this.e=null
t=null}if(t==null){u=this.d.eJ(new Z.fo(a.a),$.az())
t=u.f2($.az())
q=s.a
t.e=q.z.c
this.e=u
u=q}t=a.a
C.b.cr(t,u.r)
u.x.f1()
q=s.b
o=u.Q
o.toString
n=q.a
m=q.b
q=q.c
C.b.cp(o.a,o.d,n,m,q)
q=s.c
m=u.ch
m.toString
n=q.a
o=q.b
q=q.c
C.b.cp(m.a,m.d,n,o,q)
q=s.d
o=u.cx
C.b.co(o.a,o.d,q)
q=s.e
o=u.cy
C.b.co(o.a,o.d,q)
q=a.cy.gan()
o=u.dx
o.toString
o.bi(q.ck(0,!0))
q=a.cx
if(q==null){q=a.db.gan().I(0,a.dx.gan())
a.cx=q}u=u.db
u.toString
u.bi(q.ck(0,!0))
q=this.e
q.b_(a)
q.ah(a)
q.fQ(a)
q=s.a
q.toString
C.b.cr(t,null)
q.x.f_()}for(u=this.y.a,u=new J.ad(u,u.length,0,[H.q(u,0)]);u.q();)u.d.ah(a)
a.cb()
a.dx.b9()},
V:function(a){var u=this.z
if(u!=null)u.S(a)},
U:function(){return this.V(null)},
c8:function(a){H.k(a,"$iz")
this.e=null
this.V(a)},
fp:function(){return this.c8(null)},
c6:function(a){this.V(H.k(a,"$iz"))},
fo:function(){return this.c6(null)},
c4:function(a){this.V(H.k(a,"$iz"))},
fl:function(){return this.c4(null)},
fk:function(a,b){var u,t,s,r,q,p,o
H.o(b,"$ip",[E.U],"$ap")
for(u=b.length,t=this.gc3(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bB()
o.sac(null)
o.sav(null)
o.c=null
o.d=0
p.z=o}H.f(t,s)
if(o.a==null)o.sac(H.a([],r))
o=o.a;(o&&C.a).h(o,t)}}this.U()},
fn:function(a,b){var u,t
H.o(b,"$ip",[E.U],"$ap")
for(u=b.gF(b),t=this.gc3();u.q();)u.gA().gw().G(0,t)
this.U()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sdc:function(a,b){this.y=H.o(b,"$iaD",[E.U],"$aaD")},
$iib:1}
E.er.prototype={
cV:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.aH(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.bF()
t=[V.aN]
u.saR(H.a([],t))
u.b=null
u.gw().h(0,new E.es(this))
this.cy=u
u=new O.bF()
u.saR(H.a([],t))
u.b=null
u.gw().h(0,new E.et(this))
this.db=u
u=new O.bF()
u.saR(H.a([],t))
u.b=null
u.gw().h(0,new E.eu(this))
this.dx=u
this.sew(H.a([],[O.bc]))
u=this.dy;(u&&C.a).h(u,null)
this.ses(new H.am([P.j,A.bK]))},
cd:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaB(u):a;(u&&C.a).h(u,t)},
cb:function(){var u=this.dy
if(u.length>1)u.pop()},
sew:function(a){this.dy=H.o(a,"$ib",[O.bc],"$ab")},
ses:function(a){this.fr=H.o(a,"$ia5",[P.j,A.bK],"$aa5")}}
E.es.prototype={
$1:function(a){var u
H.k(a,"$iz")
u=this.a
u.z=null
u.ch=null},
$S:5}
E.et.prototype={
$1:function(a){var u
H.k(a,"$iz")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:5}
E.eu.prototype={
$1:function(a){var u
H.k(a,"$iz")
u=this.a
u.ch=null
u.cx=null},
$S:5}
E.cP.prototype={
bo:function(a){H.k(a,"$iz")
this.ce()},
bn:function(){return this.bo(null)},
gf8:function(){var u,t,s
u=Date.now()
t=C.h.af(P.i2(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aH(u,!1)
return s/t},
bJ:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.I()
if(typeof u!=="number")return H.aW(u)
s=C.c.c0(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.I()
r=C.c.c0(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.ir(C.l,this.gfG())}},
ce:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.f(new E.eO(this),{func:1,ret:-1,args:[P.Z]})
C.A.di(u)
C.A.ei(u,W.iL(t,P.Z))}},
fF:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.bJ()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aH(r,!1)
s.y=P.i2(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.a8()
r=s.db
C.a.sl(r.a,0)
r.a8()
r=s.dx
C.a.sl(r.a,0)
r.a8()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.ah(this.e)}s=this.z
if(s!=null)s.S(null)}catch(q){u=H.a3(q)
t=H.bh(q)
P.hO("Error: "+H.c(u))
P.hO("Stack: "+H.c(t))
throw H.d(u)}}}
E.eO.prototype={
$1:function(a){var u
H.kC(a)
u=this.a
if(u.ch){u.ch=!1
u.fF()}},
$S:21}
Z.cX.prototype={$ikL:1}
Z.cb.prototype={
b_:function(a){var u,t,s
try{t=a.a
C.b.c_(t,this.e)
C.b.fS(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.a3(s)
t=P.V('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.c(u))
throw H.d(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.c(this.e)+"]"}}
Z.fo.prototype={$ikM:1}
Z.cc.prototype={
f2:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
b_:function(a){var u,t
u=this.a
C.b.a_(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].b_(a)},
fQ:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.bX(s,u[t].e)
C.b.a_(s,this.a.a,null)},
ah:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.i(r,s)
q=r[s]
r=q.c
p=r.a
C.b.a_(t,p,r.b)
C.b.f0(t,q.a,q.b,5123,0)
C.b.a_(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.j]
t=H.a([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q)C.a.h(t,s[q].i(0))
p=H.a([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ah(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(t,", ")+"\nAttrs:   "+C.a.k(p,", ")},
sds:function(a){this.b=H.o(a,"$ib",[Z.bD],"$ab")},
$ikU:1}
Z.bD.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b7(this.c)+"'")+"]"}}
Z.cW.prototype={
gbk:function(a){var u,t
u=this.a
t=(u&$.az().a)!==0?3:0
if((u&$.bn().a)!==0)t+=3
if((u&$.bm().a)!==0)t+=3
if((u&$.bo().a)!==0)t+=2
if((u&$.bp().a)!==0)t+=3
if((u&$.c4().a)!==0)t+=3
if((u&$.c5().a)!==0)t+=4
if((u&$.bq().a)!==0)++t
return(u&$.bl().a)!==0?t+4:t},
eE:function(a){var u,t,s
u=$.az()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bn()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bm()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bo()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bp()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c4()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c5()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bq()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bl()
if((t&u.a)!==0)if(s===a)return u
return $.jb()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.cW))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.a([],[P.j])
t=this.a
if((t&$.az().a)!==0)C.a.h(u,"Pos")
if((t&$.bn().a)!==0)C.a.h(u,"Norm")
if((t&$.bm().a)!==0)C.a.h(u,"Binm")
if((t&$.bo().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bp().a)!==0)C.a.h(u,"TxtCube")
if((t&$.c4().a)!==0)C.a.h(u,"Clr3")
if((t&$.c5().a)!==0)C.a.h(u,"Clr4")
if((t&$.bq().a)!==0)C.a.h(u,"Weight")
if((t&$.bl().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.dq.prototype={}
D.bB.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.f(b,u)
if(this.a==null)this.sac(H.a([],[u]))
u=this.a;(u&&C.a).h(u,b)},
G:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[D.z]})
u=this.a
u=u==null?null:C.a.K(u,b)
if(u===!0){u=this.a
t=(u&&C.a).G(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.K(u,b)
if(u===!0){u=this.b
t=(u&&C.a).G(u,b)||t}return t},
S:function(a){var u,t,s,r
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
return!0}if(!s)C.a.O(t,new D.dF(u))
t=this.b
if(t!=null)C.a.O(t,new D.dG(u))
u=this.b
if(u!=null)C.a.sl(u,0)
return!0},
fH:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.S(t)}}},
aD:function(){return this.fH(!0,!1)},
sac:function(a){this.a=H.o(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")},
sav:function(a){this.b=H.o(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")}}
D.dF.prototype={
$1:function(a){var u
H.f(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.dG.prototype={
$1:function(a){var u
H.f(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.z.prototype={}
D.dU.prototype={}
D.dV.prototype={}
D.I.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.c(this.d)+" => "+H.c(this.e)}}
X.cd.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cd))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.c(this.a)}}
X.cq.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cq))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.c(this.a)}}
X.e2.prototype={
fw:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
fs:function(a){this.c=a.b
this.d.G(0,a.a)
return!1},
se9:function(a){this.d=H.o(a,"$iim",[P.u],"$aim")}}
X.e7.prototype={
b8:function(a,b){this.r=a.a
return!1},
aq:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.cH()
if(typeof u!=="number")return u.ct()
this.r=(u&~t)>>>0
return!1},
ap:function(a,b){return!1},
fz:function(a){return!1},
dS:function(a,b,c){return}}
X.ay.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ay))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.ed.prototype={
b8:function(a,b){this.f=a.a
return!1},
aq:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.cH()
if(typeof u!=="number")return u.ct()
this.f=(u&~t)>>>0
return!1},
ap:function(a,b){return!1},
fA:function(a,b){return!1}}
X.eR.prototype={
fv:function(a){H.o(a,"$ib",[V.X],"$ab")
return!1},
ft:function(a){H.o(a,"$ib",[V.X],"$ab")
return!1},
fu:function(a){H.o(a,"$ib",[V.X],"$ab")
return!1}}
X.cV.prototype={
bA:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cq(u,new X.ay(t,a.altKey,a.shiftKey))},
ae:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ay(t,a.altKey,a.shiftKey)},
aZ:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ay(t,a.altKey,a.shiftKey)},
a2:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.u()
q=u.top
if(typeof s!=="number")return s.u()
return new V.X(t-r,s-q)},
ak:function(a){return new V.ar(a.movementX,a.movementY)},
aW:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.a([],[V.X])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q){p=s[q]
o=C.c.W(p.pageX)
C.c.W(p.pageY)
n=u.left
C.c.W(p.pageX)
C.a.h(t,new V.X(o-n,C.c.W(p.pageY)-u.top))}return t},
a1:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cd(u,new X.ay(t,a.altKey,a.shiftKey))},
aS:function(a){var u,t,s,r,q,p
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
dN:function(a){this.f=!0},
dB:function(a){this.f=!1},
dH:function(a){H.k(a,"$iO")
if(this.f&&this.aS(a))a.preventDefault()},
dR:function(a){var u
H.k(a,"$ian")
if(!this.f)return
u=this.bA(a)
this.b.fw(u)},
dP:function(a){var u
H.k(a,"$ian")
if(!this.f)return
u=this.bA(a)
this.b.fs(u)},
dU:function(a){var u,t,s,r
H.k(a,"$iO")
u=this.a
u.focus()
this.f=!0
this.ae(a)
if(this.x){t=this.a1(a)
s=this.ak(a)
if(this.d.b8(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.a1(a)
r=this.a2(a)
if(this.c.b8(t,r))a.preventDefault()},
dY:function(a){var u,t,s
H.k(a,"$iO")
this.ae(a)
u=this.a1(a)
if(this.x){t=this.ak(a)
if(this.d.aq(u,t))a.preventDefault()
return}if(this.r)return
s=this.a2(a)
if(this.c.aq(u,s))a.preventDefault()},
dL:function(a){var u,t,s
H.k(a,"$iO")
if(!this.aS(a)){this.ae(a)
u=this.a1(a)
if(this.x){t=this.ak(a)
if(this.d.aq(u,t))a.preventDefault()
return}if(this.r)return
s=this.a2(a)
if(this.c.aq(u,s))a.preventDefault()}},
dW:function(a){var u,t,s
H.k(a,"$iO")
this.ae(a)
u=this.a1(a)
if(this.x){t=this.ak(a)
if(this.d.ap(u,t))a.preventDefault()
return}if(this.r)return
s=this.a2(a)
if(this.c.ap(u,s))a.preventDefault()},
dJ:function(a){var u,t,s
H.k(a,"$iO")
if(!this.aS(a)){this.ae(a)
u=this.a1(a)
if(this.x){t=this.ak(a)
if(this.d.ap(u,t))a.preventDefault()
return}if(this.r)return
s=this.a2(a)
if(this.c.ap(u,s))a.preventDefault()}},
e_:function(a){var u,t
H.k(a,"$ias")
this.ae(a)
u=new V.ar((a&&C.z).geX(a),C.z.geY(a)).J(0,180)
if(this.x){if(this.d.fz(u))a.preventDefault()
return}if(this.r)return
t=this.a2(a)
if(this.c.fA(u,t))a.preventDefault()},
e1:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.a1(this.y)
s=this.a2(this.y)
this.d.dS(t,s,u)}},
e8:function(a){var u
H.k(a,"$iaf")
this.a.focus()
this.f=!0
this.aZ(a)
u=this.aW(a)
if(this.e.fv(u))a.preventDefault()},
e4:function(a){var u
H.k(a,"$iaf")
this.aZ(a)
u=this.aW(a)
if(this.e.ft(u))a.preventDefault()},
e6:function(a){var u
H.k(a,"$iaf")
this.aZ(a)
u=this.aW(a)
if(this.e.fu(u))a.preventDefault()},
sdj:function(a){this.z=H.o(a,"$ib",[[P.bN,P.x]],"$ab")}}
V.aE.prototype={
u:function(a,b){var u,t,s
u=C.c.u(this.a,b.gfB())
t=C.c.u(this.b,b.gcF())
s=C.c.u(this.c,b.geI())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.aE(u,t,s)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aE))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.aF.prototype={
u:function(a,b){var u,t,s,r
u=C.c.u(this.a,b.gfB())
t=C.c.u(this.b,b.gcF())
s=C.c.u(this.c,b.geI())
r=C.c.u(this.d,b.gfY(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aF(u,t,s,r)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aF))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+"]"}}
V.dD.prototype={}
V.aN.prototype={
ck:function(a,b){var u=H.a([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return u},
I:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aO(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aN))return!1
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
i:function(a){return this.E()},
c1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.r]
t=V.h6(H.a([this.a,this.e,this.y,this.cx],u),b,c)
s=V.h6(H.a([this.b,this.f,this.z,this.cy],u),b,c)
r=V.h6(H.a([this.c,this.r,this.Q,this.db],u),b,c)
q=V.h6(H.a([this.d,this.x,this.ch,this.dx],u),b,c)
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
E:function(){return this.c1("",3,0)},
t:function(a){return this.c1(a,3,0)}}
V.X.prototype={
u:function(a,b){return new V.X(C.c.u(this.a,b.gh2(b)),C.c.u(this.b,b.gh3(b)))},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.a6.prototype={
u:function(a,b){return new V.a6(this.a-b.a,this.b-b.b,this.c-b.c)},
I:function(a,b){return new V.a6(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.cH.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cH))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+"]"}}
V.ar.prototype={
b6:function(a){var u,t
u=this.a
if(typeof u!=="number")return u.I()
t=this.b
if(typeof t!=="number")return t.I()
return Math.sqrt(u*u+t*t)},
u:function(a,b){var u,t,s
u=this.a
t=b.gfZ(b)
if(typeof u!=="number")return u.u()
t=C.c.u(u,t)
u=this.b
s=b.gh_(b)
if(typeof u!=="number")return u.u()
return new V.ar(t,C.c.u(u,s))},
J:function(a,b){var u,t
if(Math.abs(b-0)<$.G().a){u=$.iv
if(u==null){u=new V.ar(0,0)
$.iv=u}return u}u=this.a
if(typeof u!=="number")return u.J()
t=this.b
if(typeof t!=="number")return t.J()
return new V.ar(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ar))return!1
u=b.a
t=this.a
s=$.G()
s.toString
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.aW(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.aW(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.K.prototype={
b6:function(a){return Math.sqrt(this.L(this))},
L:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
am:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
P:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.K(this.a-b.a,this.b-b.b,this.c-b.c)},
aG:function(a){return new V.K(-this.a,-this.b,-this.c)},
I:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
J:function(a,b){if(Math.abs(b-0)<$.G().a)return V.fd()
return new V.K(this.a/b,this.b/b,this.c/b)},
fc:function(){var u=$.G().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
U.cf.prototype={
gw:function(){var u=this.b
if(u==null){u=D.ax()
this.b=u}return u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cf))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.t("          ")}}
U.bG.prototype={}
U.cI.prototype={
gw:function(){var u=this.y
if(u==null){u=D.ax()
this.y=u}return u},
ad:function(a){var u=this.y
if(u!=null)u.S(a)},
scs:function(a){var u
a=V.hQ(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.G().a)){this.a=a
u=new D.I("yaw",u,a,this,[P.r])
u.b=!0
this.ad(u)}},
sca:function(a){var u
a=V.hQ(a,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-a)<$.G().a)){this.b=a
u=new D.I("pitch",u,a,this,[P.r])
u.b=!0
this.ad(u)}},
scf:function(a){var u
a=V.hQ(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.G().a)){this.c=a
u=new D.I("roll",u,a,this,[P.r])
u.b=!0
this.ad(u)}},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cI))return!1
u=this.a
t=b.a
s=$.G().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"], ["+V.A(this.d,3,0)+", "+V.A(this.e,3,0)+", "+V.A(this.f,3,0)+"]"}}
M.cj.prototype={
a0:function(a){var u
H.k(a,"$iz")
u=this.x
if(u!=null)u.S(a)},
d1:function(){return this.a0(null)},
dD:function(a,b){var u,t,s,r,q,p,o,n
u=E.U
H.o(b,"$ip",[u],"$ap")
for(t=b.length,s=this.gX(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.B)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bB()
n.sac(null)
n.sav(null)
n.c=null
n.d=0
o.z=n}H.f(s,r)
if(n.a==null)n.sac(H.a([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.dU(a,b,this,[u])
u.b=!0
this.a0(u)},
dF:function(a,b){var u,t,s
u=E.U
H.o(b,"$ip",[u],"$ap")
for(t=b.gF(b),s=this.gX();t.q();)t.gA().gw().G(0,s)
u=new D.dV(a,b,this,[u])
u.b=!0
this.a0(u)},
sci:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gw().G(0,this.gX())
t=this.c
this.c=a
if(a!=null)a.gw().h(0,this.gX())
u=new D.I("technique",t,this.c,this,[O.bc])
u.b=!0
this.a0(u)}},
gw:function(){var u=this.x
if(u==null){u=D.ax()
this.x=u}return u},
ah:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.cd(this.c)
u=this.b
u.toString
t=a1.a
C.b.eH(t,36160,null)
C.b.bZ(t,2884)
C.b.bZ(t,2929)
C.b.eZ(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.aW(s)
o=C.c.W(p*s)
p=q.b
if(typeof r!=="number")return H.aW(r)
n=C.c.W(p*r)
p=C.c.W(q.c*s)
a1.c=p
q=C.c.W(q.d*r)
a1.d=q
C.b.fT(t,o,n,p,q)
C.b.eM(t,u.c)
u=u.a
C.b.eL(t,u.a,u.b,u.c,u.d)
C.b.eK(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aO(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.cc(i)
t=$.ie
if(t==null){t=$.ih
if(t==null){t=new V.a6(0,0,0)
$.ih=t}q=$.iy
if(q==null){q=new V.K(0,1,0)
$.iy=q}p=$.iw
if(p==null){p=new V.K(0,0,-1)
$.iw=p}h=p.J(0,Math.sqrt(p.L(p)))
q=q.am(h)
g=q.J(0,Math.sqrt(q.L(q)))
f=h.am(g)
e=new V.K(t.a,t.b,t.c)
d=g.aG(0).L(e)
c=f.aG(0).L(e)
b=h.aG(0).L(e)
t=V.aO(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.ie=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.I(0,a)}a1.db.cc(a)
for(u=this.d.a,u=new J.ad(u,u.length,0,[H.q(u,0)]);u.q();)u.d.cq(a1)
for(u=this.d.a,u=new J.ad(u,u.length,0,[H.q(u,0)]);u.q();)u.d.ah(a1)
this.a.toString
a1.cy.b9()
a1.db.b9()
this.b.toString
a1.cb()},
sd0:function(a,b){this.d=H.o(b,"$iaD",[E.U],"$aaD")},
$ikS:1}
A.c9.prototype={}
A.dl.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
f1:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
C.b.c_(r.a,r.c)}},
f_:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
C.b.bX(r.a,r.c)}}}
A.dw.prototype={}
A.bK.prototype={
cX:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bB:function(a,b){var u,t,s
u=this.a
t=C.b.eT(u,b)
C.b.cM(u,t,a)
C.b.eN(u,t)
if(!H.hF(C.b.cD(u,t,35713))){s=C.b.cC(u,t)
C.b.eW(u,t)
throw H.d(P.V("Error compiling shader '"+H.c(t)+"': "+H.c(s)))}return t},
ep:function(){var u,t,s,r,q,p
u=H.a([],[A.c9])
t=this.a
s=H.Q(C.b.aF(t,this.r,35721))
if(typeof s!=="number")return H.aW(s)
r=0
for(;r<s;++r){q=C.b.cu(t,this.r,r)
p=C.b.cw(t,this.r,q.name)
C.a.h(u,new A.c9(t,q.name,p))}this.x=new A.dl(u)},
er:function(){var u,t,s,r,q,p
u=H.a([],[A.cR])
t=this.a
s=H.Q(C.b.aF(t,this.r,35718))
if(typeof s!=="number")return H.aW(s)
r=0
for(;r<s;++r){q=C.b.cv(t,this.r,r)
p=C.b.cE(t,this.r,q.name)
C.a.h(u,this.eU(q.type,q.size,q.name,p))}this.y=new A.f3(u)},
ab:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.eX(u,t,b,c)
else return A.hw(u,t,b,a,c)},
df:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.f6(u,t,b,c)
else return A.hw(u,t,b,a,c)},
dg:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.f7(u,t,b,c)
else return A.hw(u,t,b,a,c)},
ay:function(a,b){return new P.d0(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.c(b)+"."))},
eU:function(a,b,c,d){switch(a){case 5120:return this.ab(b,c,d)
case 5121:return this.ab(b,c,d)
case 5122:return this.ab(b,c,d)
case 5123:return this.ab(b,c,d)
case 5124:return this.ab(b,c,d)
case 5125:return this.ab(b,c,d)
case 5126:return new A.bR(this.a,this.r,c,d)
case 35664:return new A.eZ(this.a,this.r,c,d)
case 35665:return new A.bS(this.a,this.r,c,d)
case 35666:return new A.f1(this.a,this.r,c,d)
case 35667:return new A.f_(this.a,this.r,c,d)
case 35668:return new A.f0(this.a,this.r,c,d)
case 35669:return new A.f2(this.a,this.r,c,d)
case 35674:return new A.f4(this.a,this.r,c,d)
case 35675:return new A.f5(this.a,this.r,c,d)
case 35676:return new A.bT(this.a,this.r,c,d)
case 35678:return this.df(b,c,d)
case 35680:return this.dg(b,c,d)
case 35670:throw H.d(this.ay("BOOL",c))
case 35671:throw H.d(this.ay("BOOL_VEC2",c))
case 35672:throw H.d(this.ay("BOOL_VEC3",c))
case 35673:throw H.d(this.ay("BOOL_VEC4",c))
default:throw H.d(P.V("Unknown uniform variable type "+H.c(a)+" for "+H.c(c)+"."))}}}
A.cR.prototype={}
A.f3.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
i:function(a){return this.E()},
f7:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r)s+=u[r].i(0)+a
return s},
E:function(){return this.f7("\n")}}
A.eX.prototype={
i:function(a){return"Uniform1i: "+H.c(this.c)}}
A.f_.prototype={
i:function(a){return"Uniform2i: "+H.c(this.c)}}
A.f0.prototype={
i:function(a){return"Uniform3i: "+H.c(this.c)}}
A.f2.prototype={
i:function(a){return"Uniform4i: "+H.c(this.c)}}
A.eY.prototype={
i:function(a){return"Uniform1iv: "+H.c(this.c)},
sez:function(a){this.e=H.o(a,"$ib",[P.u],"$ab")}}
A.bR.prototype={
i:function(a){return"Uniform1f: "+H.c(this.c)}}
A.eZ.prototype={
i:function(a){return"Uniform2f: "+H.c(this.c)}}
A.bS.prototype={
i:function(a){return"Uniform3f: "+H.c(this.c)}}
A.f1.prototype={
i:function(a){return"Uniform4f: "+H.c(this.c)}}
A.f4.prototype={
i:function(a){return"Uniform1Mat2 "+H.c(this.c)}}
A.f5.prototype={
i:function(a){return"UniformMat3: "+H.c(this.c)}}
A.bT.prototype={
bi:function(a){var u=new Float32Array(H.hA(H.o(a,"$ib",[P.r],"$ab")))
C.b.fR(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.c(this.c)}}
A.f6.prototype={
i:function(a){return"UniformSampler2D: "+H.c(this.c)}}
A.f7.prototype={
i:function(a){return"UniformSamplerCube: "+H.c(this.c)}}
F.hi.prototype={
$1:function(a){return new V.a6(Math.cos(a),Math.sin(a),0)},
$S:29}
F.h4.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.hU(t.$1(u),s)
s=J.je(J.hU(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.K(s.a,s.b,s.c)
q=s.J(0,Math.sqrt(s.L(s)))
t=$.ix
if(t==null){t=new V.K(1,0,0)
$.ix=t
p=t}else p=t
if(!J.L(q,p)){t=$.iz
if(t==null){t=new V.K(0,0,1)
$.iz=t
p=t}else p=t}t=q.am(p)
o=t.J(0,Math.sqrt(t.L(t)))
t=o.am(q)
p=t.J(0,Math.sqrt(t.L(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.I(0,t*s)
s=o.I(0,m*s)
s=new V.a6(r.a+(t.a-s.a),r.b+(t.b-s.b),r.c+(t.c-s.c))
if(!J.L(a.f,s)){a.f=s
t=a.a
if(t!=null)t.U()}},
$S:30}
F.N.prototype={
aA:function(){if(!this.gbY()){C.a.G(this.a.a.d.b,this)
this.a.a.U()}this.ee()
this.ef()
this.eg()},
em:function(a){this.a=a
C.a.h(a.d.b,this)},
en:function(a){this.b=a
C.a.h(a.d.c,this)},
eo:function(a){this.c=a
C.a.h(a.d.d,this)},
ee:function(){var u=this.a
if(u!=null){C.a.G(u.d.b,this)
this.a=null}},
ef:function(){var u=this.b
if(u!=null){C.a.G(u.d.c,this)
this.b=null}},
eg:function(){var u=this.c
if(u!=null){C.a.G(u.d.d,this)
this.c=null}},
gbY:function(){return this.a==null||this.b==null||this.c==null},
d9:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.fd()
if(t!=null)q=q.P(0,t)
if(s!=null)q=q.P(0,s)
if(r!=null)q=q.P(0,r)
if(q.fc())return
return q.J(0,Math.sqrt(q.L(q)))},
da:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.u(0,t)
u=new V.K(u.a,u.b,u.c)
q=u.J(0,Math.sqrt(u.L(u)))
u=r.u(0,t)
u=new V.K(u.a,u.b,u.c)
u=q.am(u.J(0,Math.sqrt(u.L(u))))
return u.J(0,Math.sqrt(u.L(u)))},
b1:function(){if(this.d!=null)return!0
var u=this.d9()
if(u==null){u=this.da()
if(u==null)return!1}this.d=u
this.a.a.U()
return!0},
gbU:function(a){if(J.L(this.a,this.b))return!0
if(J.L(this.b,this.c))return!0
if(J.L(this.c,this.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
t:function(a){var u,t
if(this.gbY())return a+"disposed"
u=a+C.d.a5(J.ah(this.a.e),0)+", "+C.d.a5(J.ah(this.b.e),0)+", "+C.d.a5(J.ah(this.c.e),0)+" {"
t=this.d
u=(t!=null?u+(t.i(0)+", "):u+"-, ")+"-}"
return u},
E:function(){return this.t("")}}
F.dI.prototype={}
F.eF.prototype={
b7:function(a,b,c){var u,t
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
F.aM.prototype={}
F.e3.prototype={}
F.eW.prototype={}
F.b5.prototype={}
F.cK.prototype={
gw:function(){var u=this.e
if(u==null){u=D.ax()
this.e=u}return u},
fi:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.a(u.slice(0),[H.q(u,0)])
for(u=[F.a9];t.length!==0;){s=C.a.gf4(t)
C.a.fD(t,0)
if(s!=null){r=H.a([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.B)(t),++p){o=t[p]
if(o!=null&&a.b7(0,s,o)){C.a.h(r,o)
C.a.G(t,o)}}if(r.length>1)b.fh(r)}}this.a.D()
this.c.ba()
this.d.ba()
this.b.fE()
this.c.bb(new F.eW())
this.d.bb(new F.eF())
u=this.e
if(u!=null)u.aD()},
eJ:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.az()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bn().a)!==0)++r
if((s&$.bm().a)!==0)++r
if((s&$.bo().a)!==0)++r
if((s&$.bp().a)!==0)++r
if((s&$.c4().a)!==0)++r
if((s&$.c5().a)!==0)++r
if((s&$.bq().a)!==0)++r
if((s&$.bl().a)!==0)++r
q=a1.gbk(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.r
o=H.a(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.a(t,[Z.cb])
for(m=0,l=0;l<r;++l){k=a1.eE(l)
j=k.gbk(k)
C.a.H(n,l,new Z.cb(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.i(t,i)
h=t[i].ff(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.H(o,g,h[f]);++g}}m+=j}H.o(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.a_(t,34962,e)
C.b.bS(t,34962,new Float32Array(H.hA(o)),35044)
C.b.a_(t,34962,null)
d=new Z.cc(new Z.cX(34962,e),n,a1)
d.sds(H.a([],[Z.bD]))
this.b.b
this.c.b
if(this.d.b.length!==0){s=P.u
c=H.a([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.i(b,l)
b=b[l].b
b.a.a.D()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.i(b,l)
b=b[l].c
b.a.a.D()
C.a.h(c,b.e)}a=Z.jY(t,34963,H.o(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bD(4,c.length,a))}return d},
i:function(a){var u=H.a([],[P.j])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.t("   "))}this.b.b
this.c.b
if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.t("   "))}return C.a.k(u,"\n")},
V:function(a){var u=this.e
if(u!=null)u.S(a)},
U:function(){return this.V(null)},
$ikT:1}
F.ey.prototype={
eB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.o(c,"$ib",[F.a9],"$ab")
u=H.a([],[F.N])
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
C.a.h(u,F.dH(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dH(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dH(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dH(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
bb:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.i(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.m(0,q)
for(o=q-1;o>=0;--o){n=r.d.m(0,o)
if(a.b7(0,p,n)){p.aA()
break}}}}},
ba:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.i(t,u)
s=t[u]
t=s.gbU(s)
if(t)s.aA()}},
b2:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].b1())s=!1
return s},
i:function(a){return this.E()},
t:function(a){var u,t,s,r
u=H.a([],[P.j])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].t(a))
return C.a.k(u,"\n")},
E:function(){return this.t("")},
sdk:function(a){this.b=H.o(a,"$ib",[F.N],"$ab")}}
F.ez.prototype={
gl:function(a){return 0},
bb:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.i(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.m(0,q)}},
ba:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.i(t,u)
s=t[u]
t=s.gbU(s)
if(t)s.aA()}},
i:function(a){return this.E()},
t:function(a){var u,t,s
u=H.a([],[P.j])
for(t=0;!1;++t){s=this.b
if(t>=0)return H.i(s,t)
C.a.h(u,s[t].t(a+(""+t+". ")))}return C.a.k(u,"\n")},
E:function(){return this.t("")},
sdt:function(a){this.b=H.o(a,"$ib",[F.aM],"$ab")}}
F.eA.prototype={
gl:function(a){return 0},
fE:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.i(t,u)
t=t[u].gh1()
t=t.gh0(t)
if(t.gl(t).fV(0,1)){t=this.b
return H.i(t,u)
t[u].aA()}}},
i:function(a){return this.E()},
t:function(a){var u,t,s
u=H.a([],[P.j])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.i(t,s)
C.a.h(u,t[s].t(a))}return C.a.k(u,"\n")},
E:function(){return this.t("")},
saV:function(a){this.b=H.o(a,"$ib",[F.b5],"$ab")}}
F.a9.prototype={
bW:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.hx(this.cx,s,p,u,t,r,q,a,o)},
ff:function(a){var u,t
if(a.n(0,$.az())){u=this.f
t=[P.r]
if(u==null)return H.a([0,0,0],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.n(0,$.bn())){u=this.r
t=[P.r]
if(u==null)return H.a([0,1,0],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.n(0,$.bm())){u=H.a([0,0,1],[P.r])
return u}else if(a.n(0,$.bo())){u=this.y
t=[P.r]
if(u==null)return H.a([0,0],t)
else return H.a([u.a,u.b],t)}else if(a.n(0,$.bp())){u=H.a([0,0,0],[P.r])
return u}else if(a.n(0,$.c4())){u=this.Q
t=[P.r]
if(u==null)return H.a([1,1,1],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.n(0,$.c5())){u=this.Q
t=[P.r]
if(u==null)return H.a([1,1,1,1],t)
else return H.a([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bq()))return H.a([this.ch],[P.r])
else if(a.n(0,$.bl())){u=H.a([-1,-1,-1,-1],[P.r])
return u}else return H.a([],[P.r])},
b1:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.fd()
this.d.O(0,new F.fn(u))
u=u.a
this.r=u.J(0,Math.sqrt(u.L(u)))
u=this.a
if(u!=null){u.U()
u=this.a.e
if(u!=null)u.aD()}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
t:function(a){var u,t,s
u=H.a([],[P.j])
C.a.h(u,C.d.a5(J.ah(this.e),0))
t=this.f
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.r
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
C.a.h(u,"-")
t=this.y
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
C.a.h(u,"-")
t=this.Q
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
C.a.h(u,V.A(this.ch,3,0))
C.a.h(u,"-")
s=C.a.k(u,", ")
return a+"{"+s+"}"},
E:function(){return this.t("")}}
F.fn.prototype={
$1:function(a){var u,t
H.k(a,"$iN")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.P(0,u)}},
$S:7}
F.fe.prototype={
D:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.i(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.d(P.V("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.U()
return!0},
gl:function(a){return this.c.length},
b2:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].b1()
return!0},
i:function(a){return this.E()},
t:function(a){var u,t,s,r
this.D()
u=H.a([],[P.j])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].t(a))
return C.a.k(u,"\n")},
E:function(){return this.t("")},
seA:function(a){this.c=H.o(a,"$ib",[F.a9],"$ab")}}
F.ff.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
m:function(a,b){var u,t,s
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
O:function(a,b){H.f(b,{func:1,ret:-1,args:[F.N]})
C.a.O(this.b,b)
C.a.O(this.c,new F.fg(this,b))
C.a.O(this.d,new F.fh(this,b))},
i:function(a){return this.E()},
t:function(a){var u,t,s,r
u=H.a([],[P.j])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].t(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].t(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].t(a))
return C.a.k(u,"\n")},
E:function(){return this.t("")},
sdl:function(a){this.b=H.o(a,"$ib",[F.N],"$ab")},
sdm:function(a){this.c=H.o(a,"$ib",[F.N],"$ab")},
sdn:function(a){this.d=H.o(a,"$ib",[F.N],"$ab")}}
F.fg.prototype={
$1:function(a){H.k(a,"$iN")
if(!J.L(a.a,this.a))this.b.$1(a)},
$S:7}
F.fh.prototype={
$1:function(a){var u
H.k(a,"$iN")
u=this.a
if(!J.L(a.a,u)&&!J.L(a.b,u))this.b.$1(a)},
$S:7}
F.fi.prototype={
gl:function(a){return 0},
m:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.i(u,t)
return u[t]}else{u=this.b
return H.i(u,b)
return u[b]}},
i:function(a){return this.E()},
t:function(a){var u,t,s
u=H.a([],[P.j])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.i(t,s)
C.a.h(u,t[s].t(a))}for(t=this.c,s=0;!1;++s){if(s>=0)return H.i(t,s)
C.a.h(u,t[s].t(a))}return C.a.k(u,"\n")},
E:function(){return this.t("")},
sdu:function(a){this.b=H.o(a,"$ib",[F.aM],"$ab")},
sdv:function(a){this.c=H.o(a,"$ib",[F.aM],"$ab")}}
F.fk.prototype={}
F.fj.prototype={
b7:function(a,b,c){return J.L(b.f,c.f)}}
F.fl.prototype={}
F.ek.prototype={
fh:function(a){var u,t,s,r,q,p,o,n,m
H.o(a,"$ib",[F.a9],"$ab")
u=V.fd()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.K(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.J(0,Math.sqrt(u.L(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.B)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.J(0,Math.sqrt(o*o+n*n+m*m))}if(!J.L(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.S(null)}}}return}}
F.fm.prototype={
gl:function(a){return 0},
i:function(a){return this.E()},
t:function(a){var u,t,s
u=H.a([],[P.j])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.i(t,s)
C.a.h(u,t[s].t(a))}return C.a.k(u,"\n")},
E:function(){return this.t("")},
saV:function(a){this.b=H.o(a,"$ib",[F.b5],"$ab")}}
O.dv.prototype={
gw:function(){var u=this.f
if(u==null){u=D.ax()
this.f=u}return u},
at:function(a){var u=this.f
if(u!=null)u.S(a)}}
O.bc.prototype={}
T.eN.prototype={}
V.au.prototype={
a4:function(a){return!0},
i:function(a){return"all"},
$ia0:1}
V.a0.prototype={}
V.cu.prototype={
a4:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)if(u[s].a4(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sM:function(a){this.a=H.o(a,"$ib",[V.a0],"$ab")},
$ia0:1}
V.W.prototype={
a4:function(a){return!this.cS(a)},
i:function(a){return"!["+this.bl(0)+"]"}}
V.ep.prototype={
a4:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.ht(this.a)
t=H.ht(this.b)
return u+".."+t},
$ia0:1}
V.ex.prototype={
cW:function(a){var u,t
if(a.a.length<=0)throw H.d(P.V("May not create a SetMatcher with zero characters."))
u=new H.am([P.u,P.D])
for(t=new H.bE(a,a.gl(a),0,[H.aU(a,"H",0)]);t.q();)u.H(0,t.d,!0)
this.sel(u)},
a4:function(a){return this.a.bV(a)},
i:function(a){var u=this.a
return P.hu(new H.cr(u,[H.q(u,0)]),0,null)},
sel:function(a){this.a=H.o(a,"$ia5",[P.u,P.D],"$aa5")},
$ia0:1}
V.bL.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.bQ(this.a.j(0,b))
r.sM(H.a([],[V.a0]))
r.c=!1
C.a.h(this.c,r)
return r},
f3:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.a4(a))return r}return},
i:function(a){return this.b},
sey:function(a){this.c=H.o(a,"$ib",[V.bQ],"$ab")}}
V.cQ.prototype={
i:function(a){var u,t
u=H.hP(this.b,"\n","\\n")
t=H.hP(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.bP.prototype={
a6:function(a,b,c){var u,t,s
H.o(c,"$ib",[P.j],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.B)(c),++t){s=c[t]
this.c.H(0,s,b)}},
i:function(a){return this.b},
seh:function(a){var u=P.j
this.c=H.o(a,"$ia5",[u,u],"$aa5")}}
V.eP.prototype={
j:function(a,b){var u=this.a.m(0,b)
if(u==null){u=new V.bL(this,b)
u.sey(H.a([],[V.bQ]))
u.d=null
this.a.H(0,b,u)}return u},
B:function(a){var u,t
u=this.b.m(0,a)
if(u==null){u=new V.bP(this,a)
t=P.j
u.seh(new H.am([t,t]))
this.b.H(0,a,u)}return u},
cm:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.a([],[V.cQ])
t=this.c
s=[P.u]
r=H.a([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.d.aa(a,o)
m=t.f3(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.hu(r,0,null)
throw H.d(P.V("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.a([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.hu(r,0,null)
k=t.d
j=k.c.m(0,l)
p=new V.cQ(j==null?k.b:j,l,o)}++o}}},
sev:function(a){this.a=H.o(a,"$ia5",[P.j,V.bL],"$aa5")},
sex:function(a){this.b=H.o(a,"$ia5",[P.j,V.bP],"$aa5")}}
V.bQ.prototype={
i:function(a){return this.b.b+": "+this.bl(0)}}
X.ce.prototype={$iib:1}
X.dO.prototype={
gw:function(){var u=this.x
if(u==null){u=D.ax()
this.x=u}return u}}
X.cB.prototype={
gw:function(){var u=this.f
if(u==null){u=D.ax()
this.f=u}return u},
a9:function(a){var u
H.k(a,"$iz")
u=this.f
if(u!=null)u.S(a)},
d5:function(){return this.a9(null)},
sao:function(a){var u,t
if(!J.L(this.b,a)){u=this.b
if(u!=null)u.gw().G(0,this.gbp())
t=this.b
this.b=a
if(a!=null)a.gw().h(0,this.gbp())
u=new D.I("mover",t,this.b,this,[U.bG])
u.b=!0
this.a9(u)}},
$iib:1,
$ice:1}
X.cO.prototype={}
V.aC.prototype={
as:function(a){this.b=new P.dR(C.G)
this.c=null
this.saQ(H.a([],[[P.b,W.a4]]))},
v:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.a([],[W.a4]))
t=a.split("\n")
for(u=t.length,s=[W.a4],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.a([],s))
o=document.createElement("div")
o.className="codePart"
H.y(p)
n=this.b.de(p,0,p.length)
m=n==null?p:n
C.e.cK(o,H.hP(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaB(this.d),o)}},
c9:function(a){var u,t,s,r
H.o(a,"$ib",[P.j],"$ab")
this.saQ(H.a([],[[P.b,W.a4]]))
u=C.a.k(a,"\n")
t=this.c
if(t==null){t=this.az()
this.c=t}for(t=t.cm(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)this.aC(t[r])},
saQ:function(a){this.d=H.o(a,"$ib",[[P.b,W.a4]],"$ab")}}
V.hh.prototype={
$1:function(a){H.k(a,"$iao")
P.hO(C.c.cl(this.a.gf8(),2)+" fps")},
$S:32}
V.du.prototype={
aC:function(a){switch(a.a){case"Class":this.v(a.b,"#551")
break
case"Comment":this.v(a.b,"#777")
break
case"Id":this.v(a.b,"#111")
break
case"Num":this.v(a.b,"#191")
break
case"Reserved":this.v(a.b,"#119")
break
case"String":this.v(a.b,"#171")
break
case"Symbol":this.v(a.b,"#616")
break
case"Type":this.v(a.b,"#B11")
break
case"Whitespace":this.v(a.b,"#111")
break}},
az:function(){var u,t,s,r
u=V.eQ()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.n(new H.l("_"))
C.a.h(t.a,s)
s=V.E("a","z")
C.a.h(t.a,s)
s=V.E("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.n(new H.l("_"))
C.a.h(s.a,t)
t=V.E("0","9")
C.a.h(s.a,t)
t=V.E("a","z")
C.a.h(s.a,t)
t=V.E("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.E("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.E("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.n(new H.l("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.E("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.E("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.n(new H.l("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.n(new H.l("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"OpenDoubleStr")
t=V.n(new H.l('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
s=V.n(new H.l('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
t=V.n(new H.l("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
s=V.n(new H.l('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.au())
s=u.j(0,"Start").k(0,"OpenSingleStr")
t=V.n(new H.l("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
s=V.n(new H.l("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").k(0,"EscSingleStr")
t=V.n(new H.l("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").k(0,"OpenSingleStr")
s=V.n(new H.l("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.au())
s=u.j(0,"Start").k(0,"Slash")
t=V.n(new H.l("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.n(new H.l("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").k(0,"EndComment")
t=V.n(new H.l("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.W()
r=[V.a0]
s.sM(H.a([],r))
C.a.h(t.a,s)
t=V.n(new H.l("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"MLComment")
s=V.n(new H.l("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").k(0,"MLCStar")
t=V.n(new H.l("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"MLComment")
s=new V.W()
s.sM(H.a([],r))
C.a.h(t.a,s)
t=V.n(new H.l("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"EndComment")
s=V.n(new H.l("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Whitespace")
t=V.n(new H.l(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").k(0,"Whitespace")
s=V.n(new H.l(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.B("Num")
s=u.j(0,"Float")
s.d=s.a.B("Num")
s=u.j(0,"Sym")
s.d=s.a.B("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.B("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.B("String")
s=u.j(0,"EndComment")
s.d=s.a.B("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.B("Whitespace")
s=u.j(0,"Id")
t=s.a.B("Id")
s.d=t
s=[P.j]
t.a6(0,"Class",H.a(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.a6(0,"Type",H.a(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.a6(0,"Reserved",H.a(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.dP.prototype={
aC:function(a){switch(a.a){case"Builtin":this.v(a.b,"#411")
break
case"Comment":this.v(a.b,"#777")
break
case"Id":this.v(a.b,"#111")
break
case"Num":this.v(a.b,"#191")
break
case"Preprocess":this.v(a.b,"#737")
break
case"Reserved":this.v(a.b,"#119")
break
case"Symbol":this.v(a.b,"#611")
break
case"Type":this.v(a.b,"#171")
break
case"Whitespace":this.v(a.b,"#111")
break}},
az:function(){var u,t,s,r
u=V.eQ()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.n(new H.l("_"))
C.a.h(t.a,s)
s=V.E("a","z")
C.a.h(t.a,s)
s=V.E("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.n(new H.l("_"))
C.a.h(s.a,t)
t=V.E("0","9")
C.a.h(s.a,t)
t=V.E("a","z")
C.a.h(s.a,t)
t=V.E("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.E("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.E("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.n(new H.l("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.E("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.E("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.n(new H.l("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.n(new H.l("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Slash")
t=V.n(new H.l("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.n(new H.l("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").k(0,"Sym").a,new V.au())
s=u.j(0,"Comment").k(0,"EndComment")
t=V.n(new H.l("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.W()
r=[V.a0]
s.sM(H.a([],r))
C.a.h(t.a,s)
t=V.n(new H.l("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Preprocess")
s=V.n(new H.l("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"Preprocess")
t=new V.W()
t.sM(H.a([],r))
C.a.h(s.a,t)
s=V.n(new H.l("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"EndPreprocess")
t=V.n(new H.l("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Whitespace")
s=V.n(new H.l(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").k(0,"Whitespace")
t=V.n(new H.l(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.B("Num")
t=u.j(0,"Float")
t.d=t.a.B("Num")
t=u.j(0,"Sym")
t.d=t.a.B("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.B("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.B("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.B("Whitespace")
t=u.j(0,"Id")
s=t.a.B("Id")
t.d=s
t=[P.j]
s.a6(0,"Type",H.a(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.a6(0,"Reserved",H.a(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.a6(0,"Builtin",H.a(["gl_FragColor","gl_Position"],t))
return u}}
V.dQ.prototype={
aC:function(a){switch(a.a){case"Attr":this.v(a.b,"#911")
this.v("=","#111")
break
case"Id":this.v(a.b,"#111")
break
case"Other":this.v(a.b,"#111")
break
case"Reserved":this.v(a.b,"#119")
break
case"String":this.v(a.b,"#171")
break
case"Symbol":this.v(a.b,"#616")
break}},
az:function(){var u,t,s
u=V.eQ()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.n(new H.l("_"))
C.a.h(t.a,s)
s=V.E("a","z")
C.a.h(t.a,s)
s=V.E("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.n(new H.l("_"))
C.a.h(s.a,t)
t=V.E("0","9")
C.a.h(s.a,t)
t=V.E("a","z")
C.a.h(s.a,t)
t=V.E("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").k(0,"Attr")
s=V.n(new H.l("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Sym")
s=V.n(new H.l("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").k(0,"Sym")
t=V.n(new H.l("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"OpenStr")
s=V.n(new H.l('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").k(0,"CloseStr")
t=V.n(new H.l('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").k(0,"EscStr")
s=V.n(new H.l("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").k(0,"OpenStr")
t=V.n(new H.l('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").k(0,"OpenStr").a,new V.au())
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.au())
t=u.j(0,"Other").k(0,"Other")
s=new V.W()
s.sM(H.a([],[V.a0]))
C.a.h(t.a,s)
t=V.n(new H.l('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.E("a","z")
C.a.h(s.a,t)
t=V.E("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.B("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.B("String")
t=u.j(0,"Id")
s=t.a.B("Id")
t.d=s
s.a6(0,"Reserved",H.a(["DOCTYPE","html","head","meta","link","title","body","script"],[P.j]))
s=u.j(0,"Attr")
s.d=s.a.B("Attr")
s=u.j(0,"Other")
s.d=s.a.B("Other")
return u}}
V.eo.prototype={
c9:function(a){H.o(a,"$ib",[P.j],"$ab")
this.saQ(H.a([],[[P.b,W.a4]]))
this.v(C.a.k(a,"\n"),"#111")},
aC:function(a){},
az:function(){return}}
V.eB.prototype={
cY:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.j).p(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.j.p(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.e.p(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.e.p(q,p)}o=u.createElement("div")
this.a=o
C.e.p(q,o)
this.b=null
o=W.e
W.P(u,"scroll",H.f(new V.eD(s),{func:1,ret:-1,args:[o]}),!1,o)},
bO:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.o(a,"$ib",[P.j],"$ab")
this.eq()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.cm(C.a.fd(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.e.p(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.e.p(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.e.p(t,o)
break
case"Link":n=p.b
if(H.kH(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.i(m,1)
l.href=H.y(m[1])
l.textContent=H.y(m[0])
C.e.p(t,l)}else{k=P.iF(C.w,n,C.q,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.e.p(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.e.p(t,o)
break}}C.e.p(this.a,t)},
cz:function(a){var u,t,s,r
u=new V.du("dart")
u.as("dart")
t=new V.dP("glsl")
t.as("glsl")
s=new V.dQ("html")
s.as("html")
r=C.a.f5(H.a([u,t,s],[V.aC]),new V.eE(a))
if(r!=null)return r
u=new V.eo("plain")
u.as("plain")
return u},
bN:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.o(a7,"$ib",[P.j],"$ab")
u=H.a([],[P.u])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.hL(r).aH(r,"+")){C.a.H(a7,s,C.d.aI(r,1))
C.a.h(u,1)
t=!0}else if(C.d.aH(r,"-")){C.a.H(a7,s,C.d.aI(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.cz(a5)
q.c9(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.e.p(o,n)
C.e.p(this.a,o)
m=P.iF(C.w,a4,C.q,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.hX(null)
i.href="#"+m
i.textContent=a4
C.e.p(j,i)
C.o.p(k,j)
C.i.p(l,k)
C.k.p(n,l)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.B)(r),++a0)C.o.p(a,r[a0])
C.i.p(e,d)
C.i.p(e,c)
C.i.p(e,a)
C.k.p(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.B)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gF(r);a3.q();)C.o.p(c,a3.gA())
C.i.p(e,d)
C.i.p(e,c)
C.k.p(n,e)}},
eq:function(){var u,t,s,r
if(this.b!=null)return
u=V.eQ()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Bold")
s=V.n(new H.l("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").k(0,"Bold")
s=new V.W()
r=[V.a0]
s.sM(H.a([],r))
C.a.h(t.a,s)
t=V.n(new H.l("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").k(0,"BoldEnd")
s=V.n(new H.l("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Italic")
s=V.n(new H.l("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").k(0,"Italic")
s=new V.W()
s.sM(H.a([],r))
C.a.h(t.a,s)
t=V.n(new H.l("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").k(0,"ItalicEnd")
s=V.n(new H.l("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Code")
s=V.n(new H.l("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").k(0,"Code")
s=new V.W()
s.sM(H.a([],r))
C.a.h(t.a,s)
t=V.n(new H.l("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").k(0,"CodeEnd")
s=V.n(new H.l("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"LinkHead")
s=V.n(new H.l("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").k(0,"LinkTail")
s=V.n(new H.l("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").k(0,"LinkEnd")
t=V.n(new H.l("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").k(0,"LinkHead")
t=new V.W()
t.sM(H.a([],r))
C.a.h(s.a,t)
s=V.n(new H.l("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").k(0,"LinkEnd")
t=V.n(new H.l("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").k(0,"LinkTail")
t=new V.W()
t.sM(H.a([],r))
C.a.h(s.a,t)
s=V.n(new H.l("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.au())
s=u.j(0,"Other").k(0,"Other")
t=new V.W()
t.sM(H.a([],r))
C.a.h(s.a,t)
s=V.n(new H.l("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.B("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.B("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.B("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.B("Link")
s=u.j(0,"Other")
s.d=s.a.B("Other")
this.b=u}}
V.eD.prototype={
$1:function(a){P.ir(C.l,new V.eC(this.a))},
$S:33}
V.eC.prototype={
$0:function(){var u,t,s
u=C.c.W(document.documentElement.scrollTop)
t=this.a.style
s=H.c(-0.01*u)+"px"
t.top=s},
$S:0}
V.eE.prototype={
$1:function(a){return H.k(a,"$iaC").a===this.a},
$S:34}
Y.he.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$iz")
u=this.a
t=this.b
s=t.a
r=[P.j]
u.bN("Vertex Shader","glsl",0,H.a((s==null?null:s.c).split("\n"),r))
t=t.a
u.bN("Fragment Shader","glsl",0,H.a((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.M.prototype
u.cP=u.i
u=J.cp.prototype
u.cR=u.i
u=P.p.prototype
u.cQ=u.aE
u=W.C.prototype
u.aJ=u.R
u=W.d8.prototype
u.cT=u.Z
u=V.cu.prototype
u.cS=u.a4
u.bl=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"kg","k_",6)
u(P,"kh","k0",6)
u(P,"ki","k1",6)
t(P,"iO","kf",1)
s(W,"kr",4,null,["$4"],["k3"],18,0)
s(W,"ks",4,null,["$4"],["k4"],18,0)
var m
r(m=E.U.prototype,"gc7",0,0,null,["$1","$0"],["c8","fp"],2,0)
r(m,"gc5",0,0,null,["$1","$0"],["c6","fo"],2,0)
r(m,"gc3",0,0,null,["$1","$0"],["c4","fl"],2,0)
q(m,"gfj","fk",4)
q(m,"gfm","fn",4)
r(m=E.cP.prototype,"gbm",0,0,null,["$1","$0"],["bo","bn"],2,0)
p(m,"gfG","ce",1)
o(m=X.cV.prototype,"gdM","dN",9)
o(m,"gdA","dB",9)
o(m,"gdG","dH",3)
o(m,"gdQ","dR",11)
o(m,"gdO","dP",11)
o(m,"gdT","dU",3)
o(m,"gdX","dY",3)
o(m,"gdK","dL",3)
o(m,"gdV","dW",3)
o(m,"gdI","dJ",3)
o(m,"gdZ","e_",26)
o(m,"ge0","e1",9)
o(m,"ge7","e8",8)
o(m,"ge3","e4",8)
o(m,"ge5","e6",8)
n(V.ar.prototype,"gl","b6",10)
n(V.K.prototype,"gl","b6",10)
r(m=M.cj.prototype,"gX",0,0,null,["$1","$0"],["a0","d1"],2,0)
q(m,"gdC","dD",4)
q(m,"gdE","dF",4)
r(X.cB.prototype,"gbp",0,0,null,["$1","$0"],["a9","d5"],2,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.x,null)
s(P.x,[H.hr,J.M,J.ad,P.d4,P.p,H.bE,P.ak,H.b_,H.cU,H.eq,H.eT,P.aI,H.bv,H.d9,P.b4,H.e4,H.e5,H.e0,P.da,P.at,P.ab,P.cY,P.eH,P.bN,P.eI,P.ao,P.R,P.h_,P.fQ,P.bd,P.d3,P.H,P.bw,P.dS,P.fY,P.D,P.aH,P.Z,P.av,P.em,P.cL,P.d0,P.dN,P.aJ,P.b,P.w,P.Y,P.j,P.ba,W.ds,W.aR,W.a_,W.cz,W.d8,W.fT,W.ck,W.a1,W.fP,W.dd,O.aD,O.bF,E.dm,E.U,E.er,E.cP,Z.cX,Z.fo,Z.cc,Z.bD,Z.cW,D.dq,D.bB,D.z,X.cd,X.cq,X.e2,X.e7,X.ay,X.ed,X.eR,X.cV,V.aE,V.aF,V.dD,V.aN,V.X,V.a6,V.cH,V.ar,V.K,M.cj,A.c9,A.dl,A.cR,A.f3,F.N,F.dI,F.aM,F.e3,F.b5,F.cK,F.ey,F.ez,F.eA,F.a9,F.fe,F.ff,F.fi,F.fk,F.fl,F.fm,O.bc,T.eN,V.au,V.a0,V.cu,V.ep,V.ex,V.bL,V.cQ,V.bP,V.eP,X.ce,X.cO,X.cB,V.aC,V.eB])
s(J.M,[J.dY,J.e_,J.cp,J.al,J.b2,J.aK,H.cy,W.aZ,W.cZ,W.dx,W.ch,W.ci,W.e,W.d1,W.ct,W.d6,W.cE,W.ap,W.db,W.de,P.ca,P.cl,P.cD,P.b9,P.cJ,P.cS])
s(J.cp,[J.en,J.aQ,J.aL])
t(J.hq,J.al)
s(J.b2,[J.co,J.dZ])
t(P.e6,P.d4)
s(P.e6,[H.cT,W.fv,W.S,P.dJ])
t(H.l,H.cT)
s(P.p,[H.dA,H.ea,H.bU])
s(H.dA,[H.b3,H.cr])
s(P.ak,[H.eb,H.fp])
t(H.ec,H.b3)
s(P.aI,[H.el,H.e1,H.f9,H.eV,H.dp,H.ev,P.cA,P.ai,P.fa,P.f8,P.bM,P.dr,P.dt])
s(H.bv,[H.hj,H.eM,H.h9,H.ha,H.hb,P.fr,P.fq,P.fs,P.ft,P.fX,P.fW,P.fA,P.fE,P.fB,P.fC,P.fD,P.fH,P.fI,P.fG,P.fF,P.eJ,P.eK,P.h1,P.fN,P.fM,P.fO,P.e9,P.dy,P.dz,W.dB,W.fz,W.ej,W.ei,W.fR,W.fS,W.fV,W.fZ,P.h3,P.dK,P.dL,E.es,E.et,E.eu,E.eO,D.dF,D.dG,F.hi,F.h4,F.fn,F.fg,F.fh,V.hh,V.eD,V.eC,V.eE,Y.he])
s(H.eM,[H.eG,H.bt])
t(P.e8,P.b4)
s(P.e8,[H.am,W.fu])
t(H.cv,H.cy)
s(H.cv,[H.bY,H.c_])
t(H.bZ,H.bY)
t(H.cw,H.bZ)
t(H.c0,H.c_)
t(H.cx,H.c0)
s(H.cx,[H.ee,H.ef,H.eg,H.eh])
t(P.fL,P.h_)
t(P.fK,P.fQ)
t(P.bx,P.eI)
t(P.dC,P.bw)
s(P.bx,[P.dR,P.fc])
t(P.fb,P.dC)
s(P.Z,[P.r,P.u])
s(P.ai,[P.b8,P.dT])
s(W.aZ,[W.t,W.bV])
s(W.t,[W.C,W.aB,W.bz,W.bW])
s(W.C,[W.m,P.h])
s(W.m,[W.c8,W.dk,W.bs,W.aA,W.aY,W.a4,W.dM,W.cm,W.ew,W.bb,W.cM,W.cN,W.eL,W.bO])
t(W.by,W.cZ)
t(W.d2,W.d1)
t(W.b0,W.d2)
t(W.cn,W.bz)
t(W.aP,W.e)
s(W.aP,[W.an,W.O,W.af])
t(W.d7,W.d6)
t(W.bH,W.d7)
t(W.dc,W.db)
t(W.eS,W.dc)
t(W.as,W.O)
t(W.d_,W.ci)
t(W.df,W.de)
t(W.d5,W.df)
t(W.fw,W.fu)
t(W.fx,P.eH)
t(W.hy,W.fx)
t(W.fy,P.bN)
t(W.fU,W.d8)
t(P.bJ,P.h)
s(E.dm,[Z.cb,A.bK])
s(D.z,[D.dU,D.dV,D.I])
t(U.bG,D.dq)
s(U.bG,[U.cf,U.cI])
t(A.dw,A.bK)
s(A.cR,[A.eX,A.f_,A.f0,A.f2,A.eY,A.bR,A.eZ,A.bS,A.f1,A.f4,A.f5,A.bT,A.f6,A.f7])
t(F.eF,F.dI)
t(F.eW,F.e3)
t(F.fj,F.fk)
t(F.ek,F.fl)
t(O.dv,O.bc)
s(V.cu,[V.W,V.bQ])
t(X.dO,X.cO)
s(V.aC,[V.du,V.dP,V.dQ,V.eo])
u(H.cT,H.cU)
u(H.bY,P.H)
u(H.bZ,H.b_)
u(H.c_,P.H)
u(H.c0,H.b_)
u(P.d4,P.H)
u(W.cZ,W.ds)
u(W.d1,P.H)
u(W.d2,W.a_)
u(W.d6,P.H)
u(W.d7,W.a_)
u(W.db,P.H)
u(W.dc,W.a_)
u(W.de,P.H)
u(W.df,W.a_)})();(function constants(){var u=hunkHelpers.makeConstList
C.j=W.aA.prototype
C.r=W.aY.prototype
C.e=W.a4.prototype
C.D=W.ch.prototype
C.F=W.cm.prototype
C.t=W.cn.prototype
C.H=J.M.prototype
C.a=J.al.prototype
C.h=J.co.prototype
C.c=J.b2.prototype
C.d=J.aK.prototype
C.O=J.aL.prototype
C.S=W.bH.prototype
C.x=J.en.prototype
C.y=W.cE.prototype
C.b=P.b9.prototype
C.o=W.bb.prototype
C.k=W.cM.prototype
C.i=W.cN.prototype
C.p=J.aQ.prototype
C.z=W.as.prototype
C.A=W.bV.prototype
C.B=new P.em()
C.C=new P.fc()
C.f=new P.fL()
C.l=new P.av(0)
C.E=new P.av(5e6)
C.G=new P.dS("element",!0,!1,!1,!1)
C.I=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.J=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.K=function(getTagFallback) {
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
C.L=function() {
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
C.M=function(hooks) {
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
C.N=function(hooks) {
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
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.P=H.a(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.j])
C.Q=H.a(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.j])
C.R=H.a(u([]),[P.j])
C.w=H.a(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.m=H.a(u(["bind","if","ref","repeat","syntax"]),[P.j])
C.n=H.a(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.j])
C.q=new P.fb(!1)})();(function staticFields(){$.aj=0
$.bu=null
$.hY=null
$.hB=!1
$.iR=null
$.iM=null
$.iW=null
$.h5=null
$.hc=null
$.hM=null
$.be=null
$.c1=null
$.c2=null
$.hC=!1
$.F=C.f
$.aw=null
$.ho=null
$.i4=null
$.i3=null
$.i9=null
$.ig=null
$.ih=null
$.il=null
$.iv=null
$.iA=null
$.ix=null
$.iy=null
$.iz=null
$.iw=null
$.jt="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.js="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.ie=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"kP","iZ",function(){return H.iQ("_$dart_dartClosure")})
u($,"kQ","hR",function(){return H.iQ("_$dart_js")})
u($,"kV","j_",function(){return H.aq(H.eU({
toString:function(){return"$receiver$"}}))})
u($,"kW","j0",function(){return H.aq(H.eU({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"kX","j1",function(){return H.aq(H.eU(null))})
u($,"kY","j2",function(){return H.aq(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"l0","j5",function(){return H.aq(H.eU(void 0))})
u($,"l1","j6",function(){return H.aq(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"l_","j4",function(){return H.aq(H.it(null))})
u($,"kZ","j3",function(){return H.aq(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"l3","j8",function(){return H.aq(H.it(void 0))})
u($,"l2","j7",function(){return H.aq(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"li","hS",function(){return P.jZ()})
u($,"lm","c6",function(){return[]})
u($,"ll","jd",function(){return P.jQ("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"lj","jc",function(){return P.i7(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.j)})
u($,"lk","hT",function(){return P.jC(P.j,P.aJ)})
u($,"lb","jb",function(){return Z.aa(0)})
u($,"l5","j9",function(){return Z.aa(511)})
u($,"ld","az",function(){return Z.aa(1)})
u($,"lc","bn",function(){return Z.aa(2)})
u($,"l7","bm",function(){return Z.aa(4)})
u($,"le","bo",function(){return Z.aa(8)})
u($,"lf","bp",function(){return Z.aa(16)})
u($,"l8","c4",function(){return Z.aa(32)})
u($,"l9","c5",function(){return Z.aa(64)})
u($,"la","ja",function(){return Z.aa(96)})
u($,"lg","bq",function(){return Z.aa(128)})
u($,"l6","bl",function(){return Z.aa(256)})
u($,"kO","iY",function(){return new V.dD(1e-9)})
u($,"kN","G",function(){return $.iY()})})()
var v={mangledGlobalNames:{u:"int",r:"double",Z:"num",j:"String",D:"bool",w:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.w},{func:1,ret:-1},{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[W.O]},{func:1,ret:-1,args:[P.u,[P.p,E.U]]},{func:1,ret:P.w,args:[D.z]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.w,args:[F.N]},{func:1,ret:-1,args:[W.af]},{func:1,ret:-1,args:[W.e]},{func:1,ret:P.r},{func:1,ret:-1,args:[W.an]},{func:1,ret:P.w,args:[,,]},{func:1,ret:P.j,args:[P.u]},{func:1,ret:P.D,args:[W.t]},{func:1,args:[,]},{func:1,ret:P.D,args:[W.a1]},{func:1,ret:P.D,args:[P.j]},{func:1,ret:P.D,args:[W.C,P.j,P.j,W.aR]},{func:1,ret:P.w,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:P.w,args:[,]},{func:1,ret:P.w,args:[P.Z]},{func:1,ret:W.C,args:[W.t]},{func:1,ret:-1,args:[W.t,W.t]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:[P.ab,,],args:[,]},{func:1,ret:-1,args:[W.as]},{func:1,ret:P.w,args:[,],opt:[P.Y]},{func:1,args:[P.j]},{func:1,ret:V.a6,args:[P.r]},{func:1,ret:P.w,args:[F.a9,P.r,P.r]},{func:1,args:[,P.j]},{func:1,ret:P.w,args:[P.ao]},{func:1,ret:P.w,args:[W.e]},{func:1,ret:P.D,args:[V.aC]},{func:1,ret:P.w,args:[{func:1,ret:-1}]},{func:1,args:[W.e]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.M,DOMError:J.M,MediaError:J.M,Navigator:J.M,NavigatorConcurrentHardware:J.M,NavigatorUserMediaError:J.M,OverconstrainedError:J.M,PositionError:J.M,WebGLActiveInfo:J.M,WebGLRenderbuffer:J.M,WebGL2RenderingContext:J.M,WebGLTexture:J.M,SQLError:J.M,ArrayBufferView:H.cy,Float32Array:H.cw,Int16Array:H.ee,Int32Array:H.ef,Uint32Array:H.eg,Uint8Array:H.eh,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLImageElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,HTMLAnchorElement:W.c8,HTMLAreaElement:W.dk,HTMLBaseElement:W.bs,HTMLBodyElement:W.aA,HTMLCanvasElement:W.aY,CDATASection:W.aB,CharacterData:W.aB,Comment:W.aB,ProcessingInstruction:W.aB,Text:W.aB,CSSStyleDeclaration:W.by,MSStyleCSSProperties:W.by,CSS2Properties:W.by,HTMLDivElement:W.a4,XMLDocument:W.bz,Document:W.bz,DOMException:W.dx,DOMImplementation:W.ch,DOMRectReadOnly:W.ci,Element:W.C,AbortPaymentEvent:W.e,AnimationEvent:W.e,AnimationPlaybackEvent:W.e,ApplicationCacheErrorEvent:W.e,BackgroundFetchClickEvent:W.e,BackgroundFetchEvent:W.e,BackgroundFetchFailEvent:W.e,BackgroundFetchedEvent:W.e,BeforeInstallPromptEvent:W.e,BeforeUnloadEvent:W.e,BlobEvent:W.e,CanMakePaymentEvent:W.e,ClipboardEvent:W.e,CloseEvent:W.e,CustomEvent:W.e,DeviceMotionEvent:W.e,DeviceOrientationEvent:W.e,ErrorEvent:W.e,ExtendableEvent:W.e,ExtendableMessageEvent:W.e,FetchEvent:W.e,FontFaceSetLoadEvent:W.e,ForeignFetchEvent:W.e,GamepadEvent:W.e,HashChangeEvent:W.e,InstallEvent:W.e,MediaEncryptedEvent:W.e,MediaKeyMessageEvent:W.e,MediaQueryListEvent:W.e,MediaStreamEvent:W.e,MediaStreamTrackEvent:W.e,MessageEvent:W.e,MIDIConnectionEvent:W.e,MIDIMessageEvent:W.e,MutationEvent:W.e,NotificationEvent:W.e,PageTransitionEvent:W.e,PaymentRequestEvent:W.e,PaymentRequestUpdateEvent:W.e,PopStateEvent:W.e,PresentationConnectionAvailableEvent:W.e,PresentationConnectionCloseEvent:W.e,ProgressEvent:W.e,PromiseRejectionEvent:W.e,PushEvent:W.e,RTCDataChannelEvent:W.e,RTCDTMFToneChangeEvent:W.e,RTCPeerConnectionIceEvent:W.e,RTCTrackEvent:W.e,SecurityPolicyViolationEvent:W.e,SensorErrorEvent:W.e,SpeechRecognitionError:W.e,SpeechRecognitionEvent:W.e,SpeechSynthesisEvent:W.e,StorageEvent:W.e,SyncEvent:W.e,TrackEvent:W.e,TransitionEvent:W.e,WebKitTransitionEvent:W.e,VRDeviceEvent:W.e,VRDisplayEvent:W.e,VRSessionEvent:W.e,MojoInterfaceRequestEvent:W.e,ResourceProgressEvent:W.e,USBConnectionEvent:W.e,IDBVersionChangeEvent:W.e,AudioProcessingEvent:W.e,OfflineAudioCompletionEvent:W.e,WebGLContextEvent:W.e,Event:W.e,InputEvent:W.e,EventTarget:W.aZ,HTMLFormElement:W.dM,HTMLHeadElement:W.cm,HTMLCollection:W.b0,HTMLFormControlsCollection:W.b0,HTMLOptionsCollection:W.b0,HTMLDocument:W.cn,KeyboardEvent:W.an,Location:W.ct,PointerEvent:W.O,MouseEvent:W.O,DragEvent:W.O,DocumentFragment:W.t,ShadowRoot:W.t,DocumentType:W.t,Node:W.t,NodeList:W.bH,RadioNodeList:W.bH,Range:W.cE,HTMLSelectElement:W.ew,HTMLTableCellElement:W.bb,HTMLTableDataCellElement:W.bb,HTMLTableHeaderCellElement:W.bb,HTMLTableElement:W.cM,HTMLTableRowElement:W.cN,HTMLTableSectionElement:W.eL,HTMLTemplateElement:W.bO,Touch:W.ap,TouchEvent:W.af,TouchList:W.eS,CompositionEvent:W.aP,FocusEvent:W.aP,TextEvent:W.aP,UIEvent:W.aP,WheelEvent:W.as,Window:W.bV,DOMWindow:W.bV,Attr:W.bW,ClientRect:W.d_,DOMRect:W.d_,NamedNodeMap:W.d5,MozNamedAttrMap:W.d5,SVGScriptElement:P.bJ,SVGAElement:P.h,SVGAnimateElement:P.h,SVGAnimateMotionElement:P.h,SVGAnimateTransformElement:P.h,SVGAnimationElement:P.h,SVGCircleElement:P.h,SVGClipPathElement:P.h,SVGDefsElement:P.h,SVGDescElement:P.h,SVGDiscardElement:P.h,SVGEllipseElement:P.h,SVGFEBlendElement:P.h,SVGFEColorMatrixElement:P.h,SVGFEComponentTransferElement:P.h,SVGFECompositeElement:P.h,SVGFEConvolveMatrixElement:P.h,SVGFEDiffuseLightingElement:P.h,SVGFEDisplacementMapElement:P.h,SVGFEDistantLightElement:P.h,SVGFEFloodElement:P.h,SVGFEFuncAElement:P.h,SVGFEFuncBElement:P.h,SVGFEFuncGElement:P.h,SVGFEFuncRElement:P.h,SVGFEGaussianBlurElement:P.h,SVGFEImageElement:P.h,SVGFEMergeElement:P.h,SVGFEMergeNodeElement:P.h,SVGFEMorphologyElement:P.h,SVGFEOffsetElement:P.h,SVGFEPointLightElement:P.h,SVGFESpecularLightingElement:P.h,SVGFESpotLightElement:P.h,SVGFETileElement:P.h,SVGFETurbulenceElement:P.h,SVGFilterElement:P.h,SVGForeignObjectElement:P.h,SVGGElement:P.h,SVGGeometryElement:P.h,SVGGraphicsElement:P.h,SVGImageElement:P.h,SVGLineElement:P.h,SVGLinearGradientElement:P.h,SVGMarkerElement:P.h,SVGMaskElement:P.h,SVGMetadataElement:P.h,SVGPathElement:P.h,SVGPatternElement:P.h,SVGPolygonElement:P.h,SVGPolylineElement:P.h,SVGRadialGradientElement:P.h,SVGRectElement:P.h,SVGSetElement:P.h,SVGStopElement:P.h,SVGStyleElement:P.h,SVGSVGElement:P.h,SVGSwitchElement:P.h,SVGSymbolElement:P.h,SVGTSpanElement:P.h,SVGTextContentElement:P.h,SVGTextElement:P.h,SVGTextPathElement:P.h,SVGTextPositioningElement:P.h,SVGTitleElement:P.h,SVGUseElement:P.h,SVGViewElement:P.h,SVGGradientElement:P.h,SVGComponentTransferFunctionElement:P.h,SVGFEDropShadowElement:P.h,SVGMPathElement:P.h,SVGElement:P.h,WebGLBuffer:P.ca,WebGLFramebuffer:P.cl,WebGLProgram:P.cD,WebGLRenderingContext:P.b9,WebGLShader:P.cJ,WebGLUniformLocation:P.cS})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLTexture:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,KeyboardEvent:true,Location:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLUniformLocation:true})
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.bY.$nativeSuperclassTag="ArrayBufferView"
H.bZ.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.c_.$nativeSuperclassTag="ArrayBufferView"
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Y.iT,[])
else Y.iT([])})})()
//# sourceMappingURL=test.dart.js.map
