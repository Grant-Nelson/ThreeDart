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
a[c]=function(){a[c]=function(){H.kO(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.i3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.i3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.i3(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={hP:function hP(a){this.a=a},
ij:function(){return new P.f5("No element")},
a0:function a0(a){this.a=a},
e2:function e2(){},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eB:function eB(a,b,c){this.a=a
this.b=b
this.$ti=c},
eC:function eC(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fI:function fI(a,b,c){this.a=a
this.b=b
this.$ti=c},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
bq:function bq(){},
dq:function dq(){},
dp:function dp(){},
bF:function(a){var u,t
u=H.X(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
kv:function(a){return v.types[H.a6(a)]},
kA:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.a_(a).$iaW},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ao(a)
if(typeof u!=="string")throw H.h(H.bg(a))
return u},
k1:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.em(u)
t=u[0]
s=u[1]
return new H.eR(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
c1:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bw:function(a){return H.jS(a)+H.i1(H.bi(a),0,null)},
jS:function(a){var u,t,s,r,q,p,o,n,m
u=J.a_(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.C||!!u.$idn){p=C.u(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bF(r.length>1&&C.j.bf(r,0)===36?C.j.d_(r,1):r)},
iu:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
k0:function(a){var u,t,s,r
u=H.b([],[P.v])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.x)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.h(H.bg(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.bi(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.h(H.bg(r))}return H.iu(u)},
iv:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bg(s))
if(s<0)throw H.h(H.bg(s))
if(s>65535)return H.k0(a)}return H.iu(a)},
k_:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.bi(u,10))>>>0,56320|u&1023)}throw H.h(P.aB(a,0,1114111,null,null))},
bv:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jZ:function(a){var u=H.bv(a).getFullYear()+0
return u},
jX:function(a){var u=H.bv(a).getMonth()+1
return u},
jT:function(a){var u=H.bv(a).getDate()+0
return u},
jU:function(a){var u=H.bv(a).getHours()+0
return u},
jW:function(a){var u=H.bv(a).getMinutes()+0
return u},
jY:function(a){var u=H.bv(a).getSeconds()+0
return u},
jV:function(a){var u=H.bv(a).getMilliseconds()+0
return u},
y:function(a){throw H.h(H.bg(a))},
d:function(a,b){if(a==null)J.cu(a)
throw H.h(H.bh(a,b))},
bh:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aV(!0,b,"index",null)
u=H.a6(J.cu(a))
if(!(b<0)){if(typeof u!=="number")return H.y(u)
t=b>=u}else t=!0
if(t)return P.bU(b,a,"index",null,u)
return P.d8(b,"index",null)},
ks:function(a,b,c){if(a>c)return new P.bx(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bx(a,c,!0,b,"end","Invalid value")
return new P.aV(!0,b,"end",null)},
bg:function(a){return new P.aV(!0,a,null,null)},
h:function(a){var u
if(a==null)a=new P.d4()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jd})
u.name=""}else u.toString=H.jd
return u},
jd:function(){return J.ao(this.dartException)},
n:function(a){throw H.h(a)},
x:function(a){throw H.h(P.bL(a))},
aS:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.w])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fh(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fi:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
iD:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ip:function(a,b){return new H.eN(a,b==null?null:b.method)},
hQ:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.eq(a,t,u?null:b.receiver)},
bj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.hG(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.bi(s,16)&8191)===10)switch(r){case 438:return u.$1(H.hQ(H.j(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.ip(H.j(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.jg()
p=$.jh()
o=$.ji()
n=$.jj()
m=$.jm()
l=$.jn()
k=$.jl()
$.jk()
j=$.jp()
i=$.jo()
h=q.af(t)
if(h!=null)return u.$1(H.hQ(H.X(t),h))
else{h=p.af(t)
if(h!=null){h.method="call"
return u.$1(H.hQ(H.X(t),h))}else{h=o.af(t)
if(h==null){h=n.af(t)
if(h==null){h=m.af(t)
if(h==null){h=l.af(t)
if(h==null){h=k.af(t)
if(h==null){h=n.af(t)
if(h==null){h=j.af(t)
if(h==null){h=i.af(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.ip(H.X(t),h))}}return u.$1(new H.ft(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dc()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aV(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dc()
return a},
bD:function(a){var u
if(a==null)return new H.dH(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dH(a)},
ku:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.a1(0,a[t],a[s])}return b},
kz:function(a,b,c,d,e,f){H.e(a,"$ihM")
switch(H.a6(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.l("Unsupported number of arguments for wrapped closure"))},
cr:function(a,b){var u
H.a6(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kz)
a.$identity=u
return u},
jB:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.a_(d).$ia){u.$reflectionInfo=d
s=H.k1(u).r}else s=d
r=e?Object.create(new H.f6().constructor.prototype):Object.create(new H.bH(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aJ
if(typeof p!=="number")return p.C()
$.aJ=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.ih(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.kv,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.ie:H.hI
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.h("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.ih(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
jy:function(a,b,c,d){var u=H.hI
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ih:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.jA(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.jy(t,!r,u,b)
if(t===0){r=$.aJ
if(typeof r!=="number")return r.C()
$.aJ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bI
if(q==null){q=H.dT("self")
$.bI=q}return new Function(r+H.j(q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aJ
if(typeof r!=="number")return r.C()
$.aJ=r+1
o+=r
r="return function("+o+"){return this."
q=$.bI
if(q==null){q=H.dT("self")
$.bI=q}return new Function(r+H.j(q)+"."+H.j(u)+"("+o+");}")()},
jz:function(a,b,c,d){var u,t
u=H.hI
t=H.ie
switch(b?-1:a){case 0:throw H.h(H.k4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
jA:function(a,b){var u,t,s,r,q,p,o,n
u=$.bI
if(u==null){u=H.dT("self")
$.bI=u}t=$.id
if(t==null){t=H.dT("receiver")
$.id=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.jz(r,!p,s,b)
if(r===1){u="return function(){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+");"
t=$.aJ
if(typeof t!=="number")return t.C()
$.aJ=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+", "+n+");"
t=$.aJ
if(typeof t!=="number")return t.C()
$.aJ=t+1
return new Function(u+t+"}")()},
i3:function(a,b,c,d,e,f,g){return H.jB(a,b,H.a6(c),d,!!e,!!f,g)},
hI:function(a){return a.a},
ie:function(a){return a.c},
dT:function(a){var u,t,s,r,q
u=new H.bH("self","target","receiver","name")
t=J.em(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
X:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aE(a,"String"))},
lo:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aE(a,"double"))},
kF:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aE(a,"num"))},
iZ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aE(a,"bool"))},
a6:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aE(a,"int"))},
ja:function(a,b){throw H.h(H.aE(a,H.bF(H.X(b).substring(2))))},
kH:function(a,b){throw H.h(H.jx(a,H.bF(H.X(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.a_(a)[b])return a
H.ja(a,b)},
c:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.a_(a)[b]
else u=!0
if(u)return a
H.kH(a,b)},
ht:function(a){if(a==null)return a
if(!!J.a_(a).$ia)return a
throw H.h(H.aE(a,"List<dynamic>"))},
kB:function(a,b){var u
if(a==null)return a
u=J.a_(a)
if(!!u.$ia)return a
if(u[b])return a
H.ja(a,b)},
j1:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a6(u)]
else return a.$S()}return},
dL:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.j1(J.a_(a))
if(u==null)return!1
return H.iQ(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.hZ)return a
$.hZ=!0
try{if(H.dL(a,b))return a
u=H.hv(b)
t=H.aE(a,u)
throw H.h(t)}finally{$.hZ=!1}},
i4:function(a,b){if(a!=null&&!H.i2(a,b))H.n(H.aE(a,H.hv(b)))
return a},
aE:function(a,b){return new H.fj("TypeError: "+P.e5(a)+": type '"+H.iU(a)+"' is not a subtype of type '"+b+"'")},
jx:function(a,b){return new H.dU("CastError: "+P.e5(a)+": type '"+H.iU(a)+"' is not a subtype of type '"+b+"'")},
iU:function(a){var u,t
u=J.a_(a)
if(!!u.$ibJ){t=H.j1(u)
if(t!=null)return H.hv(t)
return"Closure"}return H.bw(a)},
kO:function(a){throw H.h(new P.dZ(H.X(a)))},
k4:function(a){return new H.eW(a)},
j3:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bi:function(a){if(a==null)return
return a.$ti},
lp:function(a,b,c){return H.bE(a["$a"+H.j(c)],H.bi(b))},
ho:function(a,b,c,d){var u
H.X(c)
H.a6(d)
u=H.bE(a["$a"+H.j(c)],H.bi(b))
return u==null?null:u[d]},
ay:function(a,b,c){var u
H.X(b)
H.a6(c)
u=H.bE(a["$a"+H.j(b)],H.bi(a))
return u==null?null:u[c]},
t:function(a,b){var u
H.a6(b)
u=H.bi(a)
return u==null?null:u[b]},
hv:function(a){return H.bf(a,null)},
bf:function(a,b){var u,t
H.f(b,"$ia",[P.w],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bF(a[0].name)+H.i1(a,1,b)
if(typeof a=="function")return H.bF(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a6(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.j(b[t])}if('func' in a)return H.kh(a,b)
if('futureOr' in a)return"FutureOr<"+H.bf("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kh:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.w]
H.f(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.d(b,m)
o=C.j.C(o,b[m])
l=t[p]
if(l!=null&&l!==P.N)o+=" extends "+H.bf(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bf(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bf(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bf(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.kt(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.X(u[g])
i=i+h+H.bf(d[c],b)+(" "+H.j(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
i1:function(a,b,c){var u,t,s,r,q,p
H.f(c,"$ia",[P.w],"$aa")
if(a==null)return""
u=new P.bb("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bf(p,c)}return"<"+u.i(0)+">"},
bE:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cq:function(a,b,c,d){var u,t
H.X(b)
H.ht(c)
H.X(d)
if(a==null)return!1
u=H.bi(a)
t=J.a_(a)
if(t[b]==null)return!1
return H.iX(H.bE(t[d],u),null,c,null)},
f:function(a,b,c,d){H.X(b)
H.ht(c)
H.X(d)
if(a==null)return a
if(H.cq(a,b,c,d))return a
throw H.h(H.aE(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bF(b.substring(2))+H.i1(c,0,null),v.mangledGlobalNames)))},
iX:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ax(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ax(a[t],b,c[t],d))return!1
return!0},
lm:function(a,b,c){return a.apply(b,H.bE(J.a_(b)["$a"+H.j(c)],H.bi(b)))},
j5:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="N"||a.name==="C"||a===-1||a===-2||H.j5(u)}return!1},
i2:function(a,b){var u,t
if(a==null)return b==null||b.name==="N"||b.name==="C"||b===-1||b===-2||H.j5(b)
if(b==null||b===-1||b.name==="N"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.i2(a,"type" in b?b.type:null))return!0
if('func' in b)return H.dL(a,b)}u=J.a_(a).constructor
t=H.bi(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ax(u,null,b,null)},
z:function(a,b){if(a!=null&&!H.i2(a,b))throw H.h(H.aE(a,H.hv(b)))
return a},
ax:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="N"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="N"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ax(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="C")return!0
if('func' in c)return H.iQ(a,b,c,d)
if('func' in a)return c.name==="hM"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ax("type" in a?a.type:null,b,s,d)
else if(H.ax(a,b,s,d))return!0
else{if(!('$i'+"bS" in t.prototype))return!1
r=t.prototype["$a"+"bS"]
q=H.bE(r,u?a.slice(1):null)
return H.ax(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.iX(H.bE(m,u),b,p,d)},
iQ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ax(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ax(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ax(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ax(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.kE(h,b,g,d)},
kE:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ax(c[r],d,a[r],b))return!1}return!0},
ln:function(a,b,c){Object.defineProperty(a,H.X(b),{value:c,enumerable:false,writable:true,configurable:true})},
kC:function(a){var u,t,s,r,q,p
u=H.X($.j4.$1(a))
t=$.hm[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hs[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.X($.iW.$2(a,u))
if(u!=null){t=$.hm[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hs[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.hu(s)
$.hm[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.hs[u]=s
return s}if(q==="-"){p=H.hu(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.j8(a,s)
if(q==="*")throw H.h(P.iE(u))
if(v.leafTags[u]===true){p=H.hu(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.j8(a,s)},
j8:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.i8(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
hu:function(a){return J.i8(a,!1,null,!!a.$iaW)},
kD:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.hu(u)
else return J.i8(u,c,null,null)},
kx:function(){if(!0===$.i6)return
$.i6=!0
H.ky()},
ky:function(){var u,t,s,r,q,p,o,n
$.hm=Object.create(null)
$.hs=Object.create(null)
H.kw()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jb.$1(q)
if(p!=null){o=H.kD(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
kw:function(){var u,t,s,r,q,p,o
u=C.G()
u=H.bB(C.D,H.bB(C.I,H.bB(C.t,H.bB(C.t,H.bB(C.H,H.bB(C.E,H.bB(C.F(C.u),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.j4=new H.hp(q)
$.iW=new H.hq(p)
$.jb=new H.hr(o)},
bB:function(a,b){return a(b)||b},
jL:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.ec("Illegal RegExp pattern ("+String(r)+")",a,null))},
kM:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
jc:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eR:function eR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
fh:function fh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eN:function eN(a,b){this.a=a
this.b=b},
eq:function eq(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function ft(a){this.a=a},
hG:function hG(a){this.a=a},
dH:function dH(a){this.a=a
this.b=null},
bJ:function bJ(){},
fb:function fb(){},
f6:function f6(){},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fj:function fj(a){this.a=a},
dU:function dU(a){this.a=a},
eW:function eW(a){this.a=a},
aN:function aN(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
et:function et(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eu:function eu(a,b){this.a=a
this.$ti=b},
ev:function ev(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hp:function hp(a){this.a=a},
hq:function hq(a){this.a=a},
hr:function hr(a){this.a=a},
ep:function ep(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cn:function(a){return a},
dK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bh(b,a))},
kg:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.ks(a,b,c))
return b},
d3:function d3(){},
d0:function d0(){},
d1:function d1(){},
d2:function d2(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
ci:function ci(){},
cj:function cj(){},
ck:function ck(){},
cl:function cl(){},
kt:function(a){return J.ik(a?Object.keys(a):[],null)},
kG:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
i8:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hn:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.i6==null){H.kx()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.h(P.iE("Return interceptor for "+H.j(t(a,u))))}r=a.constructor
q=r==null?null:r[$.i9()]
if(q!=null)return q
q=H.kC(a)
if(q!=null)return q
if(typeof a=="function")return C.J
t=Object.getPrototypeOf(a)
if(t==null)return C.w
if(t===Object.prototype)return C.w
if(typeof r=="function"){Object.defineProperty(r,$.i9(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
jK:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.hH(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.aB(a,0,4294967295,"length",null))
return J.ik(new Array(a),b)},
ik:function(a,b){return J.em(H.b(a,[b]))},
em:function(a){H.ht(a)
a.fixed$length=Array
return a},
a_:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cO.prototype
return J.eo.prototype}if(typeof a=="string")return J.bV.prototype
if(a==null)return J.cP.prototype
if(typeof a=="boolean")return J.en.prototype
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.N)return a
return J.hn(a)},
i5:function(a){if(typeof a=="string")return J.bV.prototype
if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.N)return a
return J.hn(a)},
j2:function(a){if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.N)return a
return J.hn(a)},
dM:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.N)return a
return J.hn(a)},
A:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a_(a).u(a,b)},
ju:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kA(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.i5(a).j(a,b)},
jv:function(a,b,c,d){return J.dM(a).fq(a,b,c,d)},
ib:function(a,b){return J.dM(a).Y(a,b)},
ic:function(a,b){return J.j2(a).ad(a,b)},
bl:function(a){return J.a_(a).gG(a)},
dN:function(a){return J.j2(a).gS(a)},
cu:function(a){return J.i5(a).gp(a)},
ao:function(a){return J.a_(a).i(a)},
a2:function a2(){},
en:function en(){},
cP:function cP(){},
cR:function cR(){},
eP:function eP(){},
dn:function dn(){},
b9:function b9(){},
aM:function aM(a){this.$ti=a},
hO:function hO(a){this.$ti=a},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cQ:function cQ(){},
cO:function cO(){},
eo:function eo(){},
bV:function bV(){}},P={
k9:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.ko()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.cr(new P.fL(u),1)).observe(t,{childList:true})
return new P.fK(u,t,s)}else if(self.setImmediate!=null)return P.kp()
return P.kq()},
ka:function(a){self.scheduleImmediate(H.cr(new P.fM(H.m(a,{func:1,ret:-1})),0))},
kb:function(a){self.setImmediate(H.cr(new P.fN(H.m(a,{func:1,ret:-1})),0))},
kc:function(a){P.hV(C.n,H.m(a,{func:1,ret:-1}))},
hV:function(a,b){var u
H.m(b,{func:1,ret:-1})
u=C.h.a9(a.a,1000)
return P.kf(u<0?0:u,b)},
kf:function(a,b){var u=new P.hb(!0)
u.fn(a,b)
return u},
kd:function(a,b){var u,t,s
b.a=1
try{a.eM(new P.fU(b),new P.fV(b),null)}catch(s){u=H.bj(s)
t=H.bD(s)
P.kI(new P.fW(b,u,t))}},
iL:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaw")
if(u>=4){t=b.c6()
b.a=a.a
b.c=a.c
P.cg(b,t)}else{t=H.e(b.c,"$iaU")
b.a=2
b.c=a
a.dD(t)}},
cg:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.e(t.c,"$iae")
t=t.b
p=q.a
o=q.b
t.toString
P.hh(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cg(u.a,b)}t=u.a
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
if(k){H.e(m,"$iae")
t=t.b
p=m.a
o=m.b
t.toString
P.hh(null,null,t,p,o)
return}j=$.U
if(j!=l)$.U=l
else j=null
t=b.c
if(t===8)new P.h_(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.fZ(s,b,m).$0()}else if((t&2)!==0)new P.fY(u,s,b).$0()
if(j!=null)$.U=j
t=s.b
if(!!J.a_(t).$ibS){if(t.a>=4){i=H.e(o.c,"$iaU")
o.c=null
b=o.bh(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.iL(t,o)
return}}h=b.b
i=H.e(h.c,"$iaU")
h.c=null
b=h.bh(i)
t=s.a
p=s.b
if(!t){H.z(p,H.t(h,0))
h.a=4
h.c=p}else{H.e(p,"$iae")
h.a=8
h.c=p}u.a=h
t=h}},
kk:function(a,b){if(H.dL(a,{func:1,args:[P.N,P.al]}))return H.m(a,{func:1,ret:null,args:[P.N,P.al]})
if(H.dL(a,{func:1,args:[P.N]}))return H.m(a,{func:1,ret:null,args:[P.N]})
throw H.h(P.hH(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kj:function(){var u,t
for(;u=$.bA,u!=null;){$.cp=null
t=u.b
$.bA=t
if(t==null)$.co=null
u.a.$0()}},
kn:function(){$.i_=!0
try{P.kj()}finally{$.cp=null
$.i_=!1
if($.bA!=null)$.ia().$1(P.iY())}},
iT:function(a){var u=new P.dy(H.m(a,{func:1,ret:-1}))
if($.bA==null){$.co=u
$.bA=u
if(!$.i_)$.ia().$1(P.iY())}else{$.co.b=u
$.co=u}},
km:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
u=$.bA
if(u==null){P.iT(a)
$.cp=$.co
return}t=new P.dy(a)
s=$.cp
if(s==null){t.b=u
$.cp=t
$.bA=t}else{t.b=s.b
s.b=t
$.cp=t
if(t.b==null)$.co=t}},
kI:function(a){var u,t
u={func:1,ret:-1}
H.m(a,u)
t=$.U
if(C.l===t){P.hj(null,null,C.l,a)
return}t.toString
P.hj(null,null,t,H.m(t.cl(a),u))},
iC:function(a,b){var u,t
u={func:1,ret:-1}
H.m(b,u)
t=$.U
if(t===C.l){t.toString
return P.hV(a,b)}return P.hV(a,H.m(t.cl(b),u))},
hh:function(a,b,c,d,e){var u={}
u.a=d
P.km(new P.hi(u,e))},
iR:function(a,b,c,d,e){var u,t
H.m(d,{func:1,ret:e})
t=$.U
if(t===c)return d.$0()
$.U=c
u=t
try{t=d.$0()
return t}finally{$.U=u}},
iS:function(a,b,c,d,e,f,g){var u,t
H.m(d,{func:1,ret:f,args:[g]})
H.z(e,g)
t=$.U
if(t===c)return d.$1(e)
$.U=c
u=t
try{t=d.$1(e)
return t}finally{$.U=u}},
kl:function(a,b,c,d,e,f,g,h,i){var u,t
H.m(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
t=$.U
if(t===c)return d.$2(e,f)
$.U=c
u=t
try{t=d.$2(e,f)
return t}finally{$.U=u}},
hj:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cl(d):c.iY(d,-1)
P.iT(d)},
fL:function fL(a){this.a=a},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
fM:function fM(a){this.a=a},
fN:function fN(a){this.a=a},
hb:function hb(a){this.a=a
this.b=null
this.c=0},
hc:function hc(a,b){this.a=a
this.b=b},
aU:function aU(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aw:function aw(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
fT:function fT(a,b){this.a=a
this.b=b},
fX:function fX(a,b){this.a=a
this.b=b},
fU:function fU(a){this.a=a},
fV:function fV(a){this.a=a},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h0:function h0(a){this.a=a},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
fY:function fY(a,b,c){this.a=a
this.b=b
this.c=c},
dy:function dy(a){this.a=a
this.b=null},
f7:function f7(){},
f9:function f9(a,b){this.a=a
this.b=b},
fa:function fa(a,b){this.a=a
this.b=b},
c4:function c4(){},
f8:function f8(){},
ae:function ae(a,b){this.a=a
this.b=b},
he:function he(){},
hi:function hi(a,b){this.a=a
this.b=b},
h6:function h6(){},
h8:function h8(a,b,c){this.a=a
this.b=b
this.c=c},
h7:function h7(a,b){this.a=a
this.b=b},
h9:function h9(a,b,c){this.a=a
this.b=b
this.c=c},
jM:function(a,b,c){H.ht(a)
return H.f(H.ku(a,new H.aN([b,c])),"$iil",[b,c],"$ail")},
jN:function(a,b,c,d){return new P.h3([d])},
iO:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
iN:function(a,b,c){var u=new P.h4(a,b,[c])
u.c=a.e
return u},
jJ:function(a,b,c){var u,t
if(P.i0(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.w])
t=$.ct()
C.a.h(t,a)
try{P.ki(a,u)}finally{if(0>=t.length)return H.d(t,-1)
t.pop()}t=P.iA(b,H.kB(u,"$ik"),", ")+c
return t.charCodeAt(0)==0?t:t},
hN:function(a,b,c){var u,t,s
if(P.i0(a))return b+"..."+c
u=new P.bb(b)
t=$.ct()
C.a.h(t,a)
try{s=u
s.a=P.iA(s.a,a,", ")}finally{if(0>=t.length)return H.d(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
i0:function(a){var u,t
for(u=0;t=$.ct(),u<t.length;++u)if(a===t[u])return!0
return!1},
ki:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.f(b,"$ia",[P.w],"$aa")
u=a.gS(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.j(u.gM())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gM();++s
if(!u.B()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM();++s
for(;u.B();o=n,n=m){m=u.gM();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.j(o)
q=H.j(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
im:function(a){var u,t
u={}
if(P.i0(a))return"{...}"
t=new P.bb("")
try{C.a.h($.ct(),a)
t.a+="{"
u.a=!0
a.Z(0,new P.ez(u,t))
t.a+="}"}finally{u=$.ct()
if(0>=u.length)return H.d(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
h3:function h3(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ch:function ch(a){this.a=a
this.c=this.b=null},
h4:function h4(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ew:function ew(){},
V:function V(){},
ey:function ey(){},
ez:function ez(a,b){this.a=a
this.b=b},
eA:function eA(){},
ha:function ha(){},
dE:function dE(){},
bK:function bK(){},
cE:function cE(){},
e3:function e3(){},
fv:function fv(a){this.a=a},
fw:function fw(){},
hd:function hd(a){this.b=this.a=0
this.c=a},
jG:function(a){if(a instanceof H.bJ)return a.i(0)
return"Instance of '"+H.bw(a)+"'"},
jO:function(a,b,c,d){var u,t
H.z(b,d)
u=J.jK(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.a1(u,t,b)
return H.f(u,"$ia",[d],"$aa")},
jP:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gS(a);s.B();)C.a.h(t,H.z(s.gM(),c))
if(b)return t
return H.f(J.em(t),"$ia",u,"$aa")},
hT:function(a,b,c){var u,t
u=P.v
H.f(a,"$ik",[u],"$ak")
if(a.constructor===Array){H.f(a,"$iaM",[u],"$aaM")
t=a.length
c=P.iw(b,c,t,null,null,null)
return H.iv(b>0||c<t?C.a.f3(a,b,c):a)}return P.k6(a,b,c)},
k6:function(a,b,c){var u,t,s
H.f(a,"$ik",[P.v],"$ak")
u=J.dN(a)
for(t=0;t<b;++t)if(!u.B())throw H.h(P.aB(b,0,t,null,null))
s=[]
for(;u.B();)s.push(u.gM())
return H.iv(s)},
k2:function(a,b,c){return new H.ep(a,H.jL(a,!1,!0,!1))},
iA:function(a,b,c){var u=J.dN(b)
if(!u.B())return a
if(c.length===0){do a+=H.j(u.gM())
while(u.B())}else{a+=H.j(u.gM())
for(;u.B();)a=a+c+H.j(u.gM())}return a},
iP:function(a,b,c,d){var u,t,s,r,q,p
H.f(a,"$ia",[P.v],"$aa")
if(c===C.q){u=$.jt().b
u=u.test(b)}else u=!1
if(u)return b
t=C.A.j7(H.z(b,H.ay(c,"bK",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.k_(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
jC:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
jD:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cF:function(a){if(a>=10)return""+a
return"0"+a},
jE:function(a,b,c,d,e,f){return new P.bo(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
e5:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ao(a)
if(typeof a==="string")return JSON.stringify(a)
return P.jG(a)},
hH:function(a,b,c){return new P.aV(!0,a,b,c)},
d8:function(a,b,c){return new P.bx(null,null,!0,a,b,"Value not in range")},
aB:function(a,b,c,d,e){return new P.bx(b,c,!0,a,d,"Invalid value")},
iw:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.aB(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.h(P.aB(b,a,c,"end",f))
return b}return c},
bU:function(a,b,c,d,e){var u=H.a6(e==null?J.cu(b):e)
return new P.ef(b,u,!0,a,c,"Index out of range")},
au:function(a){return new P.fu(a)},
iE:function(a){return new P.fs(a)},
bL:function(a){return new P.dX(a)},
l:function(a){return new P.dB(a)},
j9:function(a){H.kG(a)},
Z:function Z(){},
am:function am(a,b){this.a=a
this.b=b},
r:function r(){},
bo:function bo(a){this.a=a},
e0:function e0(){},
e1:function e1(){},
b5:function b5(){},
d4:function d4(){},
aV:function aV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bx:function bx(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ef:function ef(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fu:function fu(a){this.a=a},
fs:function fs(a){this.a=a},
f5:function f5(a){this.a=a},
dX:function dX(a){this.a=a},
eO:function eO(){},
dc:function dc(){},
dZ:function dZ(a){this.a=a},
dB:function dB(a){this.a=a},
ec:function ec(a,b,c){this.a=a
this.b=b
this.c=c},
v:function v(){},
k:function k(){},
aL:function aL(){},
a:function a(){},
C:function C(){},
ac:function ac(){},
N:function N(){},
al:function al(){},
w:function w(){},
bb:function bb(a){this.a=a},
kr:function(a,b){var u={}
a.Z(0,new P.hk(u))
return u},
hk:function hk(a){this.a=a},
e8:function e8(a,b){this.a=a
this.b=b},
e9:function e9(){},
ea:function ea(){},
h2:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ke:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
h5:function h5(){},
at:function at(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
o:function o(){},
cx:function cx(){},
cK:function cK(){},
d7:function d7(){},
by:function by(){},
da:function da(){},
dm:function dm(){}},W={
jw:function(a){var u=document.createElement("a")
return u},
ig:function(a,b){var u=document.createElement("canvas")
return u},
jF:function(a){H.e(a,"$ibp")
return"wheel"},
h1:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iM:function(a,b,c,d){var u,t
u=W.h1(W.h1(W.h1(W.h1(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a5:function(a,b,c,d,e){var u,t
u=W.iV(new W.fS(c),W.i)
t=u!=null
if(t&&!0){H.m(u,{func:1,args:[W.i]})
if(t)J.jv(a,b,u,!1)}return new W.fR(a,b,u,!1,[e])},
iV:function(a,b){var u
H.m(a,{func:1,ret:-1,args:[b]})
u=$.U
if(u===C.l)return a
return u.j_(a,b)},
p:function p(){},
dP:function dP(){},
dQ:function dQ(){},
cw:function cw(){},
bm:function bm(){},
b4:function b4(){},
bM:function bM(){},
dY:function dY(){},
bN:function bN(){},
bO:function bO(){},
e_:function e_(){},
cH:function cH(){},
fP:function fP(a,b){this.a=a
this.b=b},
a1:function a1(){},
i:function i(){},
bp:function bp(){},
eb:function eb(){},
br:function br(){},
cL:function cL(){},
aO:function aO(){},
a4:function a4(){},
fO:function fO(a){this.a=a},
L:function L(){},
c_:function c_(){},
eX:function eX(){},
aR:function aR(){},
aD:function aD(){},
fg:function fg(){},
bd:function bd(){},
aT:function aT(){},
cf:function cf(){},
dA:function dA(){},
fQ:function fQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hY:function hY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fR:function fR(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
fS:function fS(a){this.a=a},
az:function az(){},
cJ:function cJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dz:function dz(){},
dC:function dC(){},
dD:function dD(){},
dF:function dF(){},
dG:function dG(){},
dI:function dI(){},
dJ:function dJ(){}},O={
hJ:function(a){var u=new O.S([a])
u.bd(a)
return u},
S:function S(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bW:function bW(){this.b=this.a=null},
ii:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var u=new O.cN()
u.b=V.iJ()
u.c=new V.F(0.2,0.3,0.4,1)
u.d=new V.F(0.1,0.2,0.3,1)
u.e=new V.F(0.7,0.7,0.7,1)
u.f=new V.F(0.3,0.3,0.3,1)
u.r=new V.F(0.5,0.5,0.5,1)
u.x=new V.F(0.5,0.5,0.5,1)
u.y=new V.F(1,1,1,1)
u.z=new V.F(0.8,0.8,0.8,1)
u.Q=!1
u.ch=!1
u.cx=!1
u.cy=!1
u.db=!1
u.dx=!1
u.dy=!1
u.fr=!1
u.fx=!1
u.fy=!1
u.go=!1
u.id=!1
u.k1=!1
u.k2=!1
u.k3=!1
u.k4=!1
u.r1=!1
u.r2=r
return u},
bs:function(){var u,t,s
u=new O.cY()
u.sfv(O.hJ(V.a8))
u.e.aS(u.gh4(),u.gh6())
t=new O.aP(u,"emission")
t.c=C.c
t.f=new V.W(0,0,0)
u.f=t
t=new O.aP(u,"ambient")
t.c=C.c
t.f=new V.W(0,0,0)
u.r=t
t=new O.aP(u,"diffuse")
t.c=C.c
t.f=new V.W(0,0,0)
u.x=t
t=new O.aP(u,"invDiffuse")
t.c=C.c
t.f=new V.W(0,0,0)
u.y=t
t=new O.eH(u,"specular")
t.c=C.c
t.f=new V.W(0,0,0)
t.ch=100
u.z=t
t=new O.eE(u,"bump")
t.c=C.c
u.Q=t
u.ch=null
t=new O.aP(u,"reflect")
t.c=C.c
t.f=new V.W(0,0,0)
u.cx=t
t=new O.eG(u,"refract")
t.c=C.c
t.f=new V.W(0,0,0)
t.ch=1
u.cy=t
t=new O.eD(u,"alpha")
t.c=C.c
t.f=1
u.db=t
t=new D.cT()
t.bd(D.Y)
t.sfd(H.b([],[D.cG]))
t.sfe(H.b([],[D.d6]))
t.sff(H.b([],[D.db]))
t.sfg(H.b([],[D.df]))
t.sfh(H.b([],[D.dg]))
t.sfi(H.b([],[D.dh]))
t.Q=null
t.ch=null
t.cW(t.gh2(),t.ghC(),t.ghG())
u.dx=t
s=t.Q
if(s==null){s=D.M()
t.Q=s
t=s}else t=s
t.h(0,u.gi_())
t=u.dx
s=t.ch
if(s==null){s=D.M()
t.ch=s
t=s}else t=s
t.h(0,u.gfl())
u.dy=null
return u},
cN:function cN(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eg:function eg(a,b){this.a=a
this.b=b},
eh:function eh(a){this.a=a},
ej:function ej(a,b){this.a=a
this.b=b},
ei:function ei(a){this.a=a},
ek:function ek(a,b){this.a=a
this.b=b},
el:function el(a,b){this.a=a
this.b=b},
cY:function cY(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eD:function eD(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cZ:function cZ(){},
eE:function eE(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aP:function aP(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eG:function eG(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eH:function eH(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bc:function bc(){}},E={
ap:function(a,b,c,d,e,f){var u=new E.af()
u.a=d
u.b=!0
u.sfc(0,O.hJ(E.af))
u.y.aS(u.gjw(),u.gjz())
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
u.sa2(0,e)
u.sa6(f)
u.sV(c)
return u},
k3:function(a,b){var u=new E.eS(a,b)
u.f8(a,b)
return u},
hU:function(a,b,c,d,e){var u=C.B.eW(document,a)
if(u==null)throw H.h(P.l("Failed to find an element with the identifier, "+a+"."))
return E.k8(u,!0,!0,!0,!1)},
k8:function(a,b,c,d,e){var u,t,s,r
u=J.a_(a)
if(!!u.$ibm)return E.iB(a,!0,!0,!0,!1)
t=W.ig(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdV(a).h(0,t)
r=E.iB(t,!0,!0,!0,!1)
r.a=a
return r},
iB:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.di()
t=P.jM(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.w,null)
s=C.m.cT(a,"webgl",t)
s=H.e(s==null?C.m.cT(a,"experimental-webgl",t):s,"$iby")
if(s==null)H.n(P.l("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.k3(s,a)
r=new T.fc(s)
r.b=H.a6((s&&C.b).cU(s,3379))
r.c=H.a6(C.b.cU(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dr(a)
q=new X.er()
q.c=new X.an(!1,!1,!1)
q.shT(P.jN(null,null,null,P.v))
r.b=q
q=new X.eI(r)
q.f=0
q.r=V.aA()
q.x=V.aA()
q.Q=1
q.ch=1
r.c=q
q=new X.ex(r)
q.r=0
q.x=V.aA()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.ff(r)
q.e=0
q.f=V.aA()
q.r=V.aA()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sfJ(H.b([],[[P.c4,P.N]]))
q=r.z
p=document
o=W.a4
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a5(p,"contextmenu",H.m(r.ghe(),n),!1,o))
q=r.z
m=W.i
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a5(a,"focus",H.m(r.ghk(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a5(a,"blur",H.m(r.gh8(),l),!1,m))
q=r.z
k=W.aO
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a5(p,"keyup",H.m(r.gho(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a5(p,"keydown",H.m(r.ghm(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a5(a,"mousedown",H.m(r.ghs(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a5(a,"mouseup",H.m(r.ghw(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a5(a,"mousemove",H.m(r.ghu(),n),!1,o))
k=r.z
j=W.aT;(k&&C.a).h(k,W.a5(a,H.X(W.jF(a)),H.m(r.ghy(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a5(p,"mousemove",H.m(r.ghg(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a5(p,"mouseup",H.m(r.ghi(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a5(p,"pointerlockchange",H.m(r.ghA(),l),!1,m))
m=r.z
l=W.aD
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a5(a,"touchstart",H.m(r.ghQ(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a5(a,"touchend",H.m(r.ghM(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a5(a,"touchmove",H.m(r.ghO(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.am(Date.now(),!1)
u.cy=0
u.dG()
return u},
dS:function dS(){},
af:function af(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eS:function eS(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eT:function eT(a){this.a=a},
eU:function eU(a){this.a=a},
eV:function eV(a){this.a=a},
di:function di(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fd:function fd(a){this.a=a}},Z={
hX:function(a,b,c){var u
H.f(c,"$ia",[P.v],"$aa")
u=a.createBuffer()
C.b.ap(a,b,u)
C.b.dT(a,b,new Int16Array(H.cn(c)),35044)
C.b.ap(a,b,null)
return new Z.dw(b,u)},
av:function(a){return new Z.aF(a)},
dw:function dw(a,b){this.a=a
this.b=b},
cy:function cy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dx:function dx(a){this.a=a},
b3:function b3(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cz:function cz(){this.a=null},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a){this.a=a}},D={
M:function(){var u=new D.bQ()
u.san(null)
u.sc3(null)
u.c=null
u.d=0
return u},
dV:function dV(){},
bQ:function bQ(){var _=this
_.d=_.c=_.b=_.a=null},
e6:function e6(a){this.a=a},
q:function q(a){this.a=a
this.b=null},
b7:function b7(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
b8:function b8(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
B:function B(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
cG:function cG(){},
Y:function Y(){},
cT:function cT(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
d6:function d6(){},
db:function db(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){}},X={cA:function cA(a,b){this.a=a
this.b=b},cS:function cS(a,b){this.a=a
this.b=b},er:function er(){var _=this
_.d=_.c=_.b=_.a=null},cV:function cV(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},ex:function ex(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},an:function an(a,b,c){this.a=a
this.b=b
this.c=c},ar:function ar(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},eI:function eI(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bZ:function bZ(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},eQ:function eQ(){},dk:function dk(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},ff:function ff(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dr:function dr(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ee:function(a,b,c,d,e,f,g){var u,t
u=new X.ed()
t=new V.F(0,0,0,1)
u.a=t
u.b=a
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.iy
if(t==null){t=V.ix(0,0,1,1)
$.iy=t}u.r=t
return u},
bu:function(a,b,c,d,e){var u,t
u=new X.d5()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
u.saD(e)
u.sV(c)
t=u.c
if(!(Math.abs(t-b)<$.E().a)){u.c=b
t=new D.B("fov",t,b,u,[P.r])
t.b=!0
u.au(t)}t=u.d
if(!(Math.abs(t-d)<$.E().a)){u.d=d
t=new D.B("near",t,d,u,[P.r])
t.b=!0
u.au(t)}t=u.e
if(!(Math.abs(t-a)<$.E().a)){u.e=a
t=new D.B("far",t,a,u,[P.r])
t.b=!0
u.au(t)}return u},
cB:function cB(){},
ed:function ed(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d5:function d5(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dd:function dd(){}},V={
kP:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.i.f0(a-b,u)
return(a<0?a+u:a)+b},
H:function(a,b,c){if(a==null)return C.j.ag("null",c)
return C.j.ag(C.i.jY(Math.abs(a-0)<$.E().a?0:a,b),c+b+1)},
bC:function(a,b,c){var u,t,s,r,q,p
H.f(a,"$ia",[P.r],"$aa")
u=H.b([],[P.w])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.x)(a),++r){q=V.H(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.a1(u,p,C.j.ag(u[p],s))}return u},
bY:function(){var u=$.io
if(u==null){u=V.aQ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.io=u}return u},
aQ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
a9:function(a,b,c){return V.aQ(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
bt:function(a,b,c,d){return V.aQ(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
bX:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aQ(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
hS:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aQ(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
aA:function(){var u=$.is
if(u==null){u=new V.O(0,0)
$.is=u}return u},
it:function(){var u=$.c0
if(u==null){u=new V.T(0,0,0)
$.c0=u}return u},
ix:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d9(a,b,c,d)},
bz:function(){var u=$.iI
if(u==null){u=new V.u(0,0,0)
$.iI=u}return u},
iJ:function(){var u=$.iG
if(u==null){u=new V.u(0,0,-1)
$.iG=u}return u},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
F:function F(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e4:function e4(a){this.a=a},
d_:function d_(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a8:function a8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
O:function O(a,b){this.a=a
this.b=b},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d9:function d9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b){this.a=a
this.b=b},
u:function u(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function(a){var u=new V.eY()
u.f9(a)
return u},
dO:function dO(){},
aX:function aX(){},
cW:function cW(){},
aZ:function aZ(){this.a=null},
eY:function eY(){this.a=null},
c3:function c3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dj:function dj(a,b,c){this.a=a
this.b=b
this.c=c},
c5:function c5(a,b){this.a=a
this.b=b
this.c=null},
fe:function fe(){this.c=this.b=this.a=null},
c6:function c6(a){this.b=a
this.a=this.c=null},
k5:function(a,b){var u=new V.f1()
u.fa(a,!0)
return u},
f1:function f1(){this.b=this.a=null},
f3:function f3(a){this.a=a},
f2:function f2(a){this.a=a}},U={
hK:function(){var u=new U.dW()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
K:function(a){var u=new U.cD()
u.sH(a)
return u},
aK:function(a){var u=new U.bT()
u.bd(U.a3)
u.aS(u.gfj(),u.ghE())
u.e=null
u.f=V.bY()
u.r=0
return u},
dW:function dW(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cD:function cD(){this.b=this.a=null},
bT:function bT(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a3:function a3(){},
ds:function ds(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dt:function dt(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
du:function du(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
hL:function(a){var u=new M.cC()
u.bd(M.ag)
u.e=!1
u.f=null
u.aS(u.ghI(),u.ghK())
u.ce(0,a)
return u},
bP:function(a,b,c,d,e){var u=new M.cI()
u.sfB(0,O.hJ(E.af))
u.d.aS(u.gha(),u.ghc())
u.e=null
u.f=null
u.r=null
u.x=null
d=X.ee(!0,!0,!1,c,2000,null,0)
u.saB(a)
u.sbG(0,d)
u.sa6(e)
return u},
cC:function cC(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},
cI:function cI(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ag:function ag(){},
kJ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
t=E.hU(a,!0,!0,!0,!1)
s=O.bs()
r=s.f
r.sU(0,new V.W(0.4,0.6,0.8))
q=O.bs()
r=q.f
r.sU(0,new V.W(0.8,0.6,0.4))
q.db.sbI(0,0.3)
p=O.bs()
r=p.f
r.sU(0,new V.W(0.4,0.6,0.8))
p.db.sbI(0,0.3)
o=U.K(null)
n=U.K(null)
m=E.ap(null,!0,null,"",null,null)
m.sa6(s)
r=F.aC()
r.aC(F.hw(!0,2,null,2,0))
r.aC(F.j0(-1,!1,!0,0,null,36))
m.sa2(0,r)
l=E.ap(null,!0,null,"",null,null)
l.sa6(q)
l.sa2(0,F.i7(null))
r=U.aK(null)
r.h(0,U.K(V.bt(1.3,1.3,1.3,1)))
r.h(0,U.K(V.bX(-1.5707963267948966)))
r.h(0,o)
l.sV(r)
k=E.ap(null,!0,null,"",null,null)
k.sa2(0,F.i7(null))
r=U.aK(null)
r.h(0,U.K(V.a9(0,0,0.1)))
k.sV(r)
j=E.ap(null,!0,null,"",null,null)
j.sa2(0,F.i7(null))
r=U.aK(null)
r.h(0,n)
j.sV(r)
i=M.bP(null,null,null,null,null)
i.sbG(0,X.ee(!1,!0,!1,null,2000,null,0))
r=X.bu(2000,1.0471975511965976,null,0.1,null)
r.saD(U.K(V.a9(-0.5,0,0)))
r.sV(U.K(V.a9(0,0,5)))
i.saB(r)
i.d.h(0,l)
i.d.h(0,m)
h=M.bP(null,null,null,null,null)
r=X.bu(2000,1.0471975511965976,null,0.1,null)
r.saD(U.K(V.a9(0.5,0,0)))
r.sV(U.K(V.a9(0,0,5)))
h.saB(r)
h.sa6(p)
h.d.h(0,j)
h.d.h(0,k)
u.a=0.5
u.b=!1
t.r.c.gb2().h(0,new M.hx(u))
t.r.c.gaE().h(0,new M.hy(u))
t.r.c.gb6().h(0,new M.hz(u,o,k,j,n))
t.sbL(M.hL(H.b([h,i],[M.ag])))},
kK:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u={}
t=E.hU(a,!0,!0,!0,!1)
s=O.ii(!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,1)
s.scY(!0)
s.scX(!0)
s.sdY(new V.F(0.2,0.3,0.4,0.2))
s.sdQ(new V.F(0.1,0.2,0.3,0.2))
r=O.bs()
q=r.f
q.sU(0,new V.W(0.8,0.6,0.4))
r.db.sbI(0,0.3)
p=O.bs()
q=p.f
q.sU(0,new V.W(0.4,0.6,0.8))
o=U.K(null)
n=U.K(null)
m=U.aK(null)
m.h(0,U.K(V.bX(0.4)))
m.h(0,U.K(V.hS(0.4)))
l=E.ap(null,!0,null,"",null,null)
l.sa6(s)
q=F.aC()
q.aC(F.j_(1,null,null,1))
q.aC(F.j6(2))
l.sa2(0,q)
l.sV(m)
k=E.ap(null,!0,null,"",null,null)
k.sa6(r)
k.sa2(0,F.hw(!1,2,null,2,0))
q=U.aK(null)
q.h(0,U.K(V.bt(1.3,1.3,1.3,1)))
q.h(0,U.K(V.bX(-1.5707963267948966)))
q.h(0,o)
q.h(0,m)
k.sV(q)
j=E.ap(null,!0,null,"",null,null)
j.sa2(0,F.hw(!0,2,null,2,0))
i=E.ap(null,!0,null,"",null,null)
i.sa2(0,F.j0(-1,!1,!0,0,null,36))
q=U.aK(null)
q.h(0,n)
i.sV(q)
h=M.bP(null,null,null,null,null)
h.sbG(0,X.ee(!1,!0,!1,null,2000,null,0))
q=X.bu(2000,1.0471975511965976,null,0.1,null)
q.saD(U.K(V.a9(-0.5,0,0)))
q.sV(U.K(V.a9(0,0,5)))
h.saB(q)
h.d.h(0,k)
h.d.h(0,l)
g=M.bP(null,null,null,null,null)
q=X.bu(2000,1.0471975511965976,null,0.1,null)
q.saD(U.K(V.a9(0.5,0,0)))
q.sV(U.K(V.a9(0,0,5)))
g.saB(q)
g.sa6(p)
g.d.h(0,i)
g.d.h(0,j)
u.a=0.5
u.b=!1
t.r.c.gb2().h(0,new M.hA(u))
t.r.c.gaE().h(0,new M.hB(u))
t.r.c.gb6().h(0,new M.hC(u,o,j,i,n))
t.sbL(M.hL(H.b([g,h],[M.ag])))},
kL:function(b6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
u={}
t=E.hU(b6,!0,!0,!0,!1)
s=O.bs()
r=s.f
r.sU(0,new V.W(0.4,0.6,0.8))
q=O.bs()
r=q.f
r.sU(0,new V.W(0.8,0.6,0.4))
q.db.sbI(0,0.3)
p=O.ii(!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,1)
p.scY(!0)
p.scX(!0)
p.sdY(new V.F(0.2,0.3,0.4,0.2))
p.sdQ(new V.F(0.1,0.2,0.3,0.2))
o=U.K(null)
n=U.K(null)
m=U.aK(null)
m.h(0,U.K(V.bX(0.4)))
m.h(0,U.K(V.hS(0.4)))
l=U.aK(null)
k=F.aC()
j=k.a.X(1,-1,1)
i=k.a.X(1,1,1)
h=k.a.X(1,1,-1)
g=k.a.X(1,-1,-1)
f=k.a.X(-1,-1,1)
e=k.a.X(-1,1,1)
d=k.a.X(-1,1,-1)
c=k.a.X(-1,-1,-1)
b=k.a.X(0.5,-0.5,0.5)
a=k.a.X(0.5,0.5,0.5)
a0=k.a.X(0.5,0.5,-0.5)
a1=k.a.X(0.5,-0.5,-0.5)
a2=k.a.X(-0.5,-0.5,0.5)
a3=k.a.X(-0.5,0.5,0.5)
a4=k.a.X(-0.5,0.5,-0.5)
a5=k.a.X(-0.5,-0.5,-0.5)
k.c.iV(H.b([j,i,i,h,h,g,g,j,f,e,e,d,d,c,c,f,b,a,a,a0,a0,a1,a1,b,a2,a3,a3,a4,a4,a5,a5,a2,j,f,i,e,h,d,g,c,b,a2,a,a3,a0,a4,a1,a5,j,b,i,a,h,a0,g,a1,f,a2,e,a3,d,a4,c,a5],[F.J]))
a6=E.ap(null,!0,null,"",null,null)
a6.sa6(s)
a6.sa2(0,k)
a6.sV(m)
a7=E.ap(null,!0,null,"",null,null)
a7.sa6(q)
a7.sa2(0,F.hw(!1,2,null,2,0))
r=U.aK(null)
r.h(0,U.K(V.bt(1.1,1.1,1.1,1)))
r.h(0,U.K(V.bX(-1.5707963267948966)))
r.h(0,o)
r.h(0,m)
a7.sV(r)
a8=E.ap(null,!0,null,"",null,null)
a8.sa2(0,F.j_(1,null,null,1))
a8.sV(l)
a9=E.ap(null,!0,null,"",null,null)
a9.sa2(0,F.j6(2))
r=U.aK(null)
r.h(0,n)
r.h(0,l)
a9.sV(r)
b0=M.bP(null,null,null,null,null)
b0.sbG(0,X.ee(!1,!0,!1,null,2000,null,0))
r=X.bu(2000,1.0471975511965976,null,0.1,null)
r.saD(U.K(V.a9(-0.5,0,0)))
r.sV(U.K(V.a9(0,0,5)))
b0.saB(r)
b0.d.h(0,a6)
b0.d.h(0,a7)
b1=M.bP(null,null,null,null,null)
r=X.bu(2000,1.0471975511965976,null,0.1,null)
r.saD(U.K(V.a9(0.5,0,0)))
r.sV(U.K(V.a9(0,0,5)))
b1.saB(r)
b1.sa6(p)
b1.d.h(0,a9)
b1.d.h(0,a8)
u.a=0.5
u.b=!1
t.r.c.gb2().h(0,new M.hD(u))
t.r.c.gaE().h(0,new M.hE(u))
t.r.c.gb6().h(0,new M.hF(u,o,a8,a9,n))
u=t.r
r=new U.dt()
b2=U.hK()
b2.scS(0,!0)
b2.scF(6.283185307179586)
b2.scH(0)
b2.sa_(0,0)
b2.scG(100)
b2.sR(0)
b2.scs(0.5)
r.b=b2
b3=r.gaI()
b2.gq().h(0,b3)
b2=U.hK()
b2.scS(0,!0)
b2.scF(6.283185307179586)
b2.scH(0)
b2.sa_(0,0)
b2.scG(100)
b2.sR(0)
b2.scs(0.5)
r.c=b2
b2.gq().h(0,b3)
r.d=null
r.e=!1
r.f=!1
r.r=!1
r.x=2.5
r.y=2.5
r.z=2
r.Q=4
r.cx=!1
r.ch=!1
r.cy=0
r.db=0
r.dx=null
r.dy=0
r.fr=null
r.fx=null
b4=new X.an(!1,!1,!1)
b5=r.d
r.d=b4
b2=[X.an]
b3=new D.B("modifiers",b5,b4,r,b2)
b3.b=!0
r.L(b3)
b3=r.f
if(b3!==!1){r.f=!1
b3=new D.B("invertX",b3,!1,r,[P.Z])
b3.b=!0
r.L(b3)}b3=r.r
if(b3!==!0){r.r=!0
b3=new D.B("invertY",b3,!0,r,[P.Z])
b3.b=!0
r.L(b3)}r.aY(u)
l.h(0,r)
u=t.r
r=new U.ds()
b3=U.hK()
b3.scS(0,!0)
b3.scF(6.283185307179586)
b3.scH(0)
b3.sa_(0,0)
b3.scG(100)
b3.sR(0)
b3.scs(0.2)
r.b=b3
b3.gq().h(0,r.gaI())
r.c=null
r.d=!1
r.e=2.5
r.f=2
r.r=4
r.y=!1
r.x=!1
r.z=0
r.Q=null
r.ch=0
r.cx=null
r.cy=null
b4=new X.an(!0,!1,!1)
b5=r.c
r.c=b4
b3=new D.B("modifiers",b5,b4,r,b2)
b3.b=!0
r.L(b3)
r.aY(u)
l.h(0,r)
u=t.r
r=new U.du()
r.c=0.01
r.d=0
r.e=0
b4=new X.an(!1,!1,!1)
r.b=b4
b2=new D.B("modifiers",null,b4,r,b2)
b2.b=!0
r.L(b2)
r.aY(u)
l.h(0,r)
t.sbL(M.hL(H.b([b1,b0],[M.ag])))},
j7:function(){var u,t
u=V.k5("Hypersphere",!0)
t=[P.w]
u.ai(H.b(["This is a simple example to help demonstrate why a hypersphere takes up ","so little space of the hypercube."],t))
u.cf(3,"2D: circle and square")
u.ai(H.b(["Imagine taking slices out of a circle inscribed in a square. Each slice is ","two lines, one from the circle and one from the square. When the slices ","are near the top, the line caused by the circle is small compared to the square. ","The corners of the square aren't covered by the circle."],t))
u.cg("target2D")
u.ai(H.b(["_Click and drag to move the location of the slice._"],t))
u.cf(3,"3D: sphere and cube")
u.ai(H.b(["Now imagine taking slices out of a sphere inscribed in a cube. Each slice is ","a circle inside a square. When the slice is in the middle, the circle touches ","the sides of the square. When the slice is near a side, the circle is almost a ","point but the square is still the same size. That is a lot of extra space for ","for the square not used by the circle."],t))
u.cg("target3D")
u.ai(H.b(["_Click and drag to move the location of the slice._"],t))
u.cf(3,"4D: hypersphere and hypercube")
u.ai(H.b(["Now imagine taking a slice out of a hypersphere inscribed in a hypercube. ","Each slice is a sphere and a cube (as shown in the graphics below). ","When the slice is near the edges, the sphere is a small point in the middle ","of a cube. As the slice moves down the sphere gets bigger until it touches all ","the sides of the cube, then it shrinks again. Once again, that's a lot of ","space in the cube not filled by the sphere."],t))
u.cg("target4D")
u.ai(H.b(["_The shape on the left is an artistic representation of a 4D hypercube._ ","_Click and drag on the left to move the location of the slice._","_Click and drag on the right to rotate the resulting 3D slice._"],t))
u.ai(H.b(["With each new dimension the hypersphere is small near the edges and only touching ","the sides of the hypersphere in the very middle."],t))
u.ai(H.b(["\xab[Back to Examples|../]"],t))
M.kJ("target2D")
M.kK("target3D")
M.kL("target4D")},
hx:function hx(a){this.a=a},
hy:function hy(a){this.a=a},
hz:function hz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
hC:function hC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
hF:function hF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}},A={
jQ:function(a,b){var u,t
u=a.aj
t=new A.cX(b,u)
t.d6(b,u)
t.f7(a,b)
return t},
hW:function(a,b,c,d,e){var u=new A.fl(a,b,c,e)
u.f=d
u.sis(P.jO(d,0,!1,P.v))
return u},
cv:function cv(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(a){this.a=a},
cM:function cM(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cX:function cX(a,b){var _=this
_.bo=_.e4=_.bn=_.aj=_.as=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ek=_.cu=_.ej=_.bB=_.ei=_.eh=_.bA=_.bz=_.eg=_.ef=_.by=_.bx=_.bw=_.ee=_.ed=_.bv=_.ec=_.eb=_.bu=_.ea=_.e9=_.bt=_.bs=_.e8=_.e7=_.br=_.bq=_.e6=_.e5=_.bp=null
_.cB=_.eo=_.cA=_.en=_.cz=_.em=_.cw=_.el=_.cv=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eF:function eF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.as=b3
_.aj=b4
_.bn=b5},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
cc:function cc(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
ca:function ca(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cd:function cd(a,b,c,d,e,f,g,h,i,j){var _=this
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
cb:function cb(a,b,c,d,e,f,g,h,i,j){var _=this
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
ce:function ce(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
c2:function c2(){},
bn:function bn(a,b){this.a=a
this.b=b},
dl:function dl(){},
fq:function fq(a){this.a=a},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fn:function fn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fo:function fo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fp:function fp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fl:function fl(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
Q:function Q(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fm:function fm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
D:function D(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c7:function c7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fr:function fr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c9:function c9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
i7:function(a){var u,t,s,r,q,p
u=F.aC()
t=u.a
s=V.aA()
r=new V.u(-1,-1,0)
r=r.l(0,Math.sqrt(r.v(r)))
q=t.aL(new V.as(1,2,4,6),new V.F(1,0,0,1),new V.T(-1,0,0),s,r,a)
t=u.a
s=new V.u(1,-1,0)
s=s.l(0,Math.sqrt(s.v(s)))
p=t.aL(new V.as(0,3,4,6),new V.F(0,0,1,1),new V.T(1,0,0),new V.O(1,0),s,a)
u.c.cd(0,q,p)
return u},
hw:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l
u=F.aC()
t=u.a
s=-d*0.5
r=-b*0.5
q=new V.u(-1,-1,1)
q=q.l(0,Math.sqrt(q.v(q)))
p=t.aL(new V.as(1,2,4,6),new V.F(1,0,0,1),new V.T(s,r,e),new V.O(0,1),q,c)
t=u.a
q=d*0.5
o=new V.u(1,-1,1)
o=o.l(0,Math.sqrt(o.v(o)))
n=t.aL(new V.as(0,3,4,6),new V.F(0,0,1,1),new V.T(q,r,e),new V.O(1,1),o,c)
t=u.a
r=b*0.5
o=new V.u(1,1,1)
o=o.l(0,Math.sqrt(o.v(o)))
m=t.aL(new V.as(0,2,5,6),new V.F(0,1,0,1),new V.T(q,r,e),new V.O(1,0),o,c)
t=u.a
q=V.aA()
o=new V.u(-1,1,1)
o=o.l(0,Math.sqrt(o.v(o)))
l=t.aL(new V.as(0,2,4,7),new V.F(1,1,0,1),new V.T(s,r,e),q,o,c)
t=[F.J]
if(a)u.c.dO(H.b([p,n,m,l],t))
else u.d.iS(H.b([p,n,m,l],t))
u.aq()
return u},
j_:function(a,b,c,d){var u=F.aC()
F.cm(u,b,c,d,a,1,0,0,1)
F.cm(u,b,c,d,a,0,1,0,3)
F.cm(u,b,c,d,a,0,0,1,2)
F.cm(u,b,c,d,a,-1,0,0,0)
F.cm(u,b,c,d,a,0,-1,0,0)
F.cm(u,b,c,d,a,0,0,-1,3)
u.aq()
return u},
hg:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cm:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.u(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.u(o+a3,n+a1,m+a2)
u.b=l
k=new V.u(o-a3,n-a1,m-a2)
u.c=k
j=new V.u(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.hg(t)
f=F.hg(u.b)
e=F.kN(d,a0,new F.hf(u,F.hg(u.c),F.hg(u.d),f,g,c),b)
if(e!=null)a.aC(e)},
j0:function(a,b,c,d,e,f){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
e=new F.hl()
if(f<3)return
u=F.aC()
t=-6.283185307179586/f
s=H.b([],[F.J])
for(r=0;r<=f;++r){q=t*r
p=Math.sin(q)
o=Math.cos(q)
n=e.$1(r/f)
m=u.a
if(typeof n!=="number")return H.y(n)
l=new V.u(p,o,1).l(0,Math.sqrt(p*p+o*o+1))
if(p<0)k=0
else k=p>1?1:p
j=o<0
if(j)i=0
else i=o>1?1:o
if(j)j=0
else j=o>1?1:o
m.toString
h=F.be(new V.as(a,-1,-1,-1),null,new V.F(k,i,j,1),new V.T(p*n,o*n,d),new V.u(0,0,1),new V.O(p*0.5+0.5,o*0.5+0.5),l,null,0)
m.h(0,h)
C.a.h(s,h)}u.c.dO(s)
return u},
j6:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=F.aC()
t=Math.sqrt(5)/2+0.5
s=F.ak(u,new V.u(-1,t,0))
r=F.ak(u,new V.u(1,t,0))
q=-t
p=F.ak(u,new V.u(-1,q,0))
o=F.ak(u,new V.u(1,q,0))
n=F.ak(u,new V.u(0,-1,q))
m=F.ak(u,new V.u(0,1,q))
l=F.ak(u,new V.u(0,-1,t))
k=F.ak(u,new V.u(0,1,t))
j=F.ak(u,new V.u(t,0,1))
i=F.ak(u,new V.u(t,0,-1))
h=F.ak(u,new V.u(q,0,1))
g=F.ak(u,new V.u(q,0,-1))
F.R(u,s,g,m,a)
F.R(u,s,m,r,a)
F.R(u,s,r,k,a)
F.R(u,s,k,h,a)
F.R(u,s,h,g,a)
F.R(u,r,m,i,a)
F.R(u,m,g,n,a)
F.R(u,g,h,p,a)
F.R(u,h,k,l,a)
F.R(u,k,r,j,a)
F.R(u,o,i,n,a)
F.R(u,o,n,p,a)
F.R(u,o,p,l,a)
F.R(u,o,l,j,a)
F.R(u,o,j,i,a)
F.R(u,n,i,m,a)
F.R(u,p,n,g,a)
F.R(u,l,p,h,a)
F.R(u,j,l,k,a)
F.R(u,i,j,r,a)
u.jv(new F.dv(),new F.fB())
return u},
ak:function(a,b){var u,t,s,r,q,p,o,n,m,l,k
b=b.l(0,Math.sqrt(b.v(b)))
u=b.a
t=b.b
s=b.c
r=F.be(null,null,null,new V.T(u,t,s),b,null,null,null,0)
q=a.ji(r,new F.dv())
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
r.sU(0,new V.F(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.scN(new V.O(l,k<0?-k:k))
a.a.h(0,r)
return r},
R:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.dN(0,b,d,c)
else{u=F.ak(a,b.r.C(0,c.r).m(0,0.5))
t=F.ak(a,c.r.C(0,d.r).m(0,0.5))
s=F.ak(a,d.r.C(0,b.r).m(0,0.5))
r=e-1
F.R(a,b,u,s,r)
F.R(a,u,c,t,r)
F.R(a,t,s,u,r)
F.R(a,s,t,d,r)}},
kN:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,{func:1,ret:-1,args:[F.J,P.r,P.r]})
if(a<1)return
if(b<1)return
u=F.aC()
t=H.b([],[F.J])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.be(null,null,new V.F(p,0,0,1),null,null,new V.O(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cr(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.be(null,null,new V.F(j,i,h,1),null,null,new V.O(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cr(d))}}u.d.iT(a+1,b+1,t)
return u},
bR:function(a,b,c){var u,t
u=new F.P()
t=a.a
if(t==null)H.n(P.l("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.n(P.l("May not create a face with vertices attached to different shapes."))
u.aW(a)
u.aX(b)
u.dJ(c)
C.a.h(u.a.a.d.b,u)
u.a.a.N()
return u},
hR:function(a,b){var u,t
u=new F.a7()
if(a==null)H.n(P.l("May not create a line with a null start vertex."))
if(b==null)H.n(P.l("May not create a line with a null end vertex."))
t=a.a
if(t==null)H.n(P.l("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.n(P.l("May not create a line with vertices attached to different shapes."))
u.aW(a)
u.aX(b)
C.a.h(u.a.a.c.b,u)
u.a.a.N()
return u},
jR:function(a){var u=new F.ba()
if(a.a==null)H.n(P.l("May not create a point with a vertex which is not attached to a shape."))
u.i2(a)
C.a.h(u.a.a.b.b,u)
u.a.a.N()
return u},
aC:function(){var u,t
u=new F.ah()
t=new F.fx(u)
t.b=!1
t.sit(H.b([],[F.J]))
u.a=t
t=new F.f0(u)
t.sc4(H.b([],[F.ba]))
u.b=t
t=new F.f_(u)
t.sfS(H.b([],[F.a7]))
u.c=t
t=new F.eZ(u)
t.sfK(H.b([],[F.P]))
u.d=t
u.e=null
return u},
be:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.J()
t=new F.fF(u)
t.sc4(H.b([],[F.ba]))
u.b=t
t=new F.fC(u)
s=[F.a7]
t.sfT(H.b([],s))
t.sfU(H.b([],s))
u.c=t
t=new F.fy(u)
s=[F.P]
t.sfL(H.b([],s))
t.sfM(H.b([],s))
t.sfN(H.b([],s))
u.d=t
h=$.jq()
u.e=0
t=$.aI()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aH().a)!==0?e:null
u.x=(s&$.aG().a)!==0?b:null
u.y=(s&$.b1().a)!==0?f:null
u.z=(s&$.b2().a)!==0?g:null
u.Q=(s&$.jr().a)!==0?c:null
u.ch=(s&$.bG().a)!==0?i:0
u.cx=(s&$.b0().a)!==0?a:null
return u},
hf:function hf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hl:function hl(){},
P:function P(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
e7:function e7(){},
f4:function f4(){},
a7:function a7(){this.b=this.a=null},
es:function es(){},
fk:function fk(){},
ba:function ba(){this.a=null},
ah:function ah(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eZ:function eZ(a){this.a=a
this.b=null},
f_:function f_(a){this.a=a
this.b=null},
f0:function f0(a){this.a=a
this.b=null},
J:function J(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fH:function fH(a){this.a=a},
fG:function fG(a){this.a=a},
fx:function fx(a){this.a=a
this.c=this.b=null},
fy:function fy(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fz:function fz(a,b){this.a=a
this.b=b},
fA:function fA(a,b){this.a=a
this.b=b},
fC:function fC(a){this.a=a
this.c=this.b=null},
fD:function fD(){},
dv:function dv(){},
fE:function fE(){},
fB:function fB(){},
fF:function fF(a){this.a=a
this.b=null}},T={de:function de(){},fc:function fc(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.hP.prototype={}
J.a2.prototype={
u:function(a,b){return a===b},
gG:function(a){return H.c1(a)},
i:function(a){return"Instance of '"+H.bw(a)+"'"}}
J.en.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iZ:1}
J.cP.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0},
$iC:1}
J.cR.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.eP.prototype={}
J.dn.prototype={}
J.b9.prototype={
i:function(a){var u=a[$.jf()]
if(u==null)return this.f5(a)
return"JavaScript function for "+H.j(J.ao(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ihM:1}
J.aM.prototype={
h:function(a,b){H.z(b,H.t(a,0))
if(!!a.fixed$length)H.n(P.au("add"))
a.push(b)},
jO:function(a,b){var u
if(!!a.fixed$length)H.n(P.au("removeAt"))
u=a.length
if(b>=u)throw H.h(P.d8(b,null,null))
return a.splice(b,1)[0]},
w:function(a,b){var u
if(!!a.fixed$length)H.n(P.au("remove"))
for(u=0;u<a.length;++u)if(J.A(a[u],b)){a.splice(u,1)
return!0}return!1},
ce:function(a,b){var u,t
H.f(b,"$ik",[H.t(a,0)],"$ak")
if(!!a.fixed$length)H.n(P.au("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.x)(b),++t)a.push(b[t])},
Z:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.bL(a))}},
D:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.a1(u,t,H.j(a[t]))
return u.join(b)},
jr:function(a){return this.D(a,"")},
ad:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
f3:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.aB(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.aB(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.t(a,0)])
return H.b(a.slice(b,c),[H.t(a,0)])},
gjl:function(a){if(a.length>0)return a[0]
throw H.h(H.ij())},
gcD:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.ij())},
aZ:function(a,b){var u
for(u=0;u<a.length;++u)if(J.A(a[u],b))return!0
return!1},
i:function(a){return P.hN(a,"[","]")},
gS:function(a){return new J.ad(a,a.length,0,[H.t(a,0)])},
gG:function(a){return H.c1(a)},
gp:function(a){return a.length},
sp:function(a,b){if(!!a.fixed$length)H.n(P.au("set length"))
if(b<0)throw H.h(P.aB(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.bh(a,b))
if(b>=a.length||b<0)throw H.h(H.bh(a,b))
return a[b]},
a1:function(a,b,c){H.z(c,H.t(a,0))
if(!!a.immutable$list)H.n(P.au("indexed set"))
if(b>=a.length||b<0)throw H.h(H.bh(a,b))
a[b]=c},
$ik:1,
$ia:1}
J.hO.prototype={}
J.ad.prototype={
gM:function(){return this.d},
B:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.h(H.x(u))
s=this.c
if(s>=t){this.sdc(null)
return!1}this.sdc(u[s]);++this.c
return!0},
sdc:function(a){this.d=H.z(a,H.t(this,0))},
$iaL:1}
J.cQ.prototype={
cp:function(a,b){var u
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=C.h.gbD(b)
if(this.gbD(a)===u)return 0
if(this.gbD(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbD:function(a){return a===0?1/a<0:a<0},
eq:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.au(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.au(""+a+".round()"))},
j0:function(a,b,c){if(C.h.cp(b,c)>0)throw H.h(H.bg(b))
if(this.cp(a,b)<0)return b
if(this.cp(a,c)>0)return c
return a},
jY:function(a,b){var u
if(b>20)throw H.h(P.aB(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbD(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
m:function(a,b){if(typeof b!=="number")throw H.h(H.bg(b))
return a*b},
f0:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
a9:function(a,b){return(a|0)===a?a/b|0:this.ic(a,b)},
ic:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.au("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
bi:function(a,b){var u
if(a>0)u=this.i9(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
i9:function(a,b){return b>31?0:a>>>b},
$ir:1,
$iac:1}
J.cO.prototype={$iv:1}
J.eo.prototype={}
J.bV.prototype={
co:function(a,b){if(b<0)throw H.h(H.bh(a,b))
if(b>=a.length)H.n(H.bh(a,b))
return a.charCodeAt(b)},
bf:function(a,b){if(b>=a.length)throw H.h(H.bh(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.h(P.hH(b,null,null))
return a+b},
d0:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.d8(b,null,null))
if(b>c)throw H.h(P.d8(b,null,null))
if(c>a.length)throw H.h(P.d8(c,null,null))
return a.substring(b,c)},
d_:function(a,b){return this.d0(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.z)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jF:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.m(c,u)+a},
ag:function(a,b){return this.jF(a,b," ")},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gp:function(a){return a.length},
$iiq:1,
$iw:1}
H.a0.prototype={
gp:function(a){return this.a.length},
j:function(a,b){return C.j.co(this.a,b)},
$adq:function(){return[P.v]},
$aV:function(){return[P.v]},
$ak:function(){return[P.v]},
$aa:function(){return[P.v]}}
H.e2.prototype={}
H.cU.prototype={
gM:function(){return this.d},
B:function(){var u,t,s,r
u=this.a
t=J.i5(u)
s=t.gp(u)
if(this.b!==s)throw H.h(P.bL(u))
r=this.c
if(r>=s){this.saT(null)
return!1}this.saT(t.ad(u,r));++this.c
return!0},
saT:function(a){this.d=H.z(a,H.t(this,0))},
$iaL:1}
H.eB.prototype={
gS:function(a){return new H.eC(J.dN(this.a),this.b,this.$ti)},
gp:function(a){return J.cu(this.a)},
ad:function(a,b){return this.b.$1(J.ic(this.a,b))},
$ak:function(a,b){return[b]}}
H.eC.prototype={
B:function(){var u=this.b
if(u.B()){this.saT(this.c.$1(u.gM()))
return!0}this.saT(null)
return!1},
gM:function(){return this.a},
saT:function(a){this.a=H.z(a,H.t(this,1))},
$aaL:function(a,b){return[b]}}
H.fI.prototype={
gS:function(a){return new H.fJ(J.dN(this.a),this.b,this.$ti)}}
H.fJ.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(t.$1(u.gM()))return!0
return!1},
gM:function(){return this.a.gM()}}
H.bq.prototype={}
H.dq.prototype={}
H.dp.prototype={}
H.eR.prototype={}
H.fh.prototype={
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
H.eN.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eq.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.j(this.a)+")"}}
H.ft.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.hG.prototype={
$1:function(a){if(!!J.a_(a).$ib5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:12}
H.dH.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$ial:1}
H.bJ.prototype={
i:function(a){return"Closure '"+H.bw(this).trim()+"'"},
$ihM:1,
gk6:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fb.prototype={}
H.f6.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bF(u)+"'"}}
H.bH.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bH))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gG:function(a){var u,t
u=this.c
if(u==null)t=H.c1(this.a)
else t=typeof u!=="object"?J.bl(u):H.c1(u)
return(t^H.c1(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bw(u)+"'")}}
H.fj.prototype={
i:function(a){return this.a}}
H.dU.prototype={
i:function(a){return this.a}}
H.eW.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.aN.prototype={
gp:function(a){return this.a},
dX:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.dm(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dm(t,a)}else return this.jp(a)},
jp:function(a){var u=this.d
if(u==null)return!1
return this.cC(this.bS(u,J.bl(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bg(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bg(r,b)
s=t==null?null:t.b
return s}else return this.jq(b)},
jq:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bS(u,J.bl(a)&0x3ffffff)
s=this.cC(t,a)
if(s<0)return
return t[s].b},
a1:function(a,b,c){var u,t,s,r,q,p
H.z(b,H.t(this,0))
H.z(c,H.t(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.c1()
this.b=u}this.de(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.c1()
this.c=t}this.de(t,b,c)}else{s=this.d
if(s==null){s=this.c1()
this.d=s}r=J.bl(b)&0x3ffffff
q=this.bS(s,r)
if(q==null)this.cb(s,r,[this.c2(b,c)])
else{p=this.cC(q,b)
if(p>=0)q[p].b=c
else q.push(this.c2(b,c))}}},
Z:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.h(P.bL(this))
u=u.c}},
de:function(a,b,c){var u
H.z(b,H.t(this,0))
H.z(c,H.t(this,1))
u=this.bg(a,b)
if(u==null)this.cb(a,b,this.c2(b,c))
else u.b=c},
c2:function(a,b){var u,t
u=new H.et(H.z(a,H.t(this,0)),H.z(b,H.t(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
cC:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.A(a[t].a,b))return t
return-1},
i:function(a){return P.im(this)},
bg:function(a,b){return a[b]},
bS:function(a,b){return a[b]},
cb:function(a,b,c){a[b]=c},
fG:function(a,b){delete a[b]},
dm:function(a,b){return this.bg(a,b)!=null},
c1:function(){var u=Object.create(null)
this.cb(u,"<non-identifier-key>",u)
this.fG(u,"<non-identifier-key>")
return u},
$iil:1}
H.et.prototype={}
H.eu.prototype={
gp:function(a){return this.a.a},
gS:function(a){var u,t
u=this.a
t=new H.ev(u,u.r,this.$ti)
t.c=u.e
return t}}
H.ev.prototype={
gM:function(){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.bL(u))
else{u=this.c
if(u==null){this.sdd(null)
return!1}else{this.sdd(u.a)
this.c=this.c.c
return!0}}},
sdd:function(a){this.d=H.z(a,H.t(this,0))},
$iaL:1}
H.hp.prototype={
$1:function(a){return this.a(a)},
$S:12}
H.hq.prototype={
$2:function(a,b){return this.a(a,b)},
$S:34}
H.hr.prototype={
$1:function(a){return this.a(H.X(a))},
$S:31}
H.ep.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$iiq:1}
H.d3.prototype={}
H.d0.prototype={
gp:function(a){return a.length},
$iaW:1,
$aaW:function(){}}
H.d1.prototype={
j:function(a,b){H.dK(b,a,a.length)
return a[b]},
$abq:function(){return[P.r]},
$aV:function(){return[P.r]},
$ik:1,
$ak:function(){return[P.r]},
$ia:1,
$aa:function(){return[P.r]}}
H.d2.prototype={
$abq:function(){return[P.v]},
$aV:function(){return[P.v]},
$ik:1,
$ak:function(){return[P.v]},
$ia:1,
$aa:function(){return[P.v]}}
H.eJ.prototype={
j:function(a,b){H.dK(b,a,a.length)
return a[b]}}
H.eK.prototype={
j:function(a,b){H.dK(b,a,a.length)
return a[b]}}
H.eL.prototype={
j:function(a,b){H.dK(b,a,a.length)
return a[b]}}
H.eM.prototype={
gp:function(a){return a.length},
j:function(a,b){H.dK(b,a,a.length)
return a[b]}}
H.ci.prototype={}
H.cj.prototype={}
H.ck.prototype={}
H.cl.prototype={}
P.fL.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:17}
P.fK.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:29}
P.fM.prototype={
$0:function(){this.a.$0()},
$S:3}
P.fN.prototype={
$0:function(){this.a.$0()},
$S:3}
P.hb.prototype={
fn:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.cr(new P.hc(this,b),0),a)
else throw H.h(P.au("`setTimeout()` not found."))}}
P.hc.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:4}
P.aU.prototype={
ju:function(a){if(this.c!==6)return!0
return this.b.b.cM(H.m(this.d,{func:1,ret:P.Z,args:[P.N]}),a.a,P.Z,P.N)},
jo:function(a){var u,t,s,r
u=this.e
t=P.N
s={futureOr:1,type:H.t(this,1)}
r=this.b.b
if(H.dL(u,{func:1,args:[P.N,P.al]}))return H.i4(r.jT(u,a.a,a.b,null,t,P.al),s)
else return H.i4(r.cM(H.m(u,{func:1,args:[P.N]}),a.a,null,t),s)}}
P.aw.prototype={
eM:function(a,b,c){var u,t,s,r
u=H.t(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.U
if(t!==C.l){t.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.kk(b,t)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aw(0,$.U,[c])
r=b==null?1:3
this.df(new P.aU(s,r,a,b,[u,c]))
return s},
jW:function(a,b){return this.eM(a,null,b)},
df:function(a){var u,t
u=this.a
if(u<=1){a.a=H.e(this.c,"$iaU")
this.c=a}else{if(u===2){t=H.e(this.c,"$iaw")
u=t.a
if(u<4){t.df(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.hj(null,null,u,H.m(new P.fT(this,a),{func:1,ret:-1}))}},
dD:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.e(this.c,"$iaU")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.e(this.c,"$iaw")
t=p.a
if(t<4){p.dD(a)
return}this.a=t
this.c=p.c}u.a=this.bh(a)
t=this.b
t.toString
P.hj(null,null,t,H.m(new P.fX(u,this),{func:1,ret:-1}))}},
c6:function(){var u=H.e(this.c,"$iaU")
this.c=null
return this.bh(u)},
bh:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
di:function(a){var u,t,s
u=H.t(this,0)
H.i4(a,{futureOr:1,type:u})
t=this.$ti
if(H.cq(a,"$ibS",t,"$abS"))if(H.cq(a,"$iaw",t,null))P.iL(a,this)
else P.kd(a,this)
else{s=this.c6()
H.z(a,u)
this.a=4
this.c=a
P.cg(this,s)}},
dj:function(a,b){var u
H.e(b,"$ial")
u=this.c6()
this.a=8
this.c=new P.ae(a,b)
P.cg(this,u)},
$ibS:1}
P.fT.prototype={
$0:function(){P.cg(this.a,this.b)},
$S:3}
P.fX.prototype={
$0:function(){P.cg(this.b,this.a.a)},
$S:3}
P.fU.prototype={
$1:function(a){var u=this.a
u.a=0
u.di(a)},
$S:17}
P.fV.prototype={
$2:function(a,b){H.e(b,"$ial")
this.a.dj(a,b)},
$1:function(a){return this.$2(a,null)},
$S:27}
P.fW.prototype={
$0:function(){this.a.dj(this.b,this.c)},
$S:3}
P.h_.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eL(H.m(r.d,{func:1}),null)}catch(q){t=H.bj(q)
s=H.bD(q)
if(this.d){r=H.e(this.a.a.c,"$iae").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.e(this.a.a.c,"$iae")
else p.b=new P.ae(t,s)
p.a=!0
return}if(!!J.a_(u).$ibS){if(u instanceof P.aw&&u.a>=4){if(u.a===8){r=this.b
r.b=H.e(u.c,"$iae")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.jW(new P.h0(o),null)
r.a=!1}},
$S:4}
P.h0.prototype={
$1:function(a){return this.a},
$S:26}
P.fZ.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.t(s,0)
q=H.z(this.c,r)
p=H.t(s,1)
this.a.b=s.b.b.cM(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bj(o)
t=H.bD(o)
s=this.a
s.b=new P.ae(u,t)
s.a=!0}},
$S:4}
P.fY.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.e(this.a.a.c,"$iae")
r=this.c
if(r.ju(u)&&r.e!=null){q=this.b
q.b=r.jo(u)
q.a=!1}}catch(p){t=H.bj(p)
s=H.bD(p)
r=H.e(this.a.a.c,"$iae")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ae(t,s)
n.a=!0}},
$S:4}
P.dy.prototype={}
P.f7.prototype={
gp:function(a){var u,t,s,r
u={}
t=new P.aw(0,$.U,[P.v])
u.a=0
s=H.t(this,0)
r=H.m(new P.f9(u,this),{func:1,ret:-1,args:[s]})
H.m(new P.fa(u,t),{func:1,ret:-1})
W.a5(this.a,this.b,r,!1,s)
return t}}
P.f9.prototype={
$1:function(a){H.z(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.C,args:[H.t(this.b,0)]}}}
P.fa.prototype={
$0:function(){this.b.di(this.a.a)},
$S:3}
P.c4.prototype={}
P.f8.prototype={}
P.ae.prototype={
i:function(a){return H.j(this.a)},
$ib5:1}
P.he.prototype={$ili:1}
P.hi.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.d4()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.h(u)
s=H.h(u)
s.stack=t.i(0)
throw s},
$S:3}
P.h6.prototype={
jU:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
try{if(C.l===$.U){a.$0()
return}P.iR(null,null,this,a,-1)}catch(s){u=H.bj(s)
t=H.bD(s)
P.hh(null,null,this,u,H.e(t,"$ial"))}},
jV:function(a,b,c){var u,t,s
H.m(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.l===$.U){a.$1(b)
return}P.iS(null,null,this,a,b,-1,c)}catch(s){u=H.bj(s)
t=H.bD(s)
P.hh(null,null,this,u,H.e(t,"$ial"))}},
iY:function(a,b){return new P.h8(this,H.m(a,{func:1,ret:b}),b)},
cl:function(a){return new P.h7(this,H.m(a,{func:1,ret:-1}))},
j_:function(a,b){return new P.h9(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
eL:function(a,b){H.m(a,{func:1,ret:b})
if($.U===C.l)return a.$0()
return P.iR(null,null,this,a,b)},
cM:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.U===C.l)return a.$1(b)
return P.iS(null,null,this,a,b,c,d)},
jT:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.U===C.l)return a.$2(b,c)
return P.kl(null,null,this,a,b,c,d,e,f)}}
P.h8.prototype={
$0:function(){return this.a.eL(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.h7.prototype={
$0:function(){return this.a.jU(this.b)},
$S:4}
P.h9.prototype={
$1:function(a){var u=this.c
return this.a.jV(this.b,H.z(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.h3.prototype={
gS:function(a){return P.iN(this,this.r,H.t(this,0))},
gp:function(a){return this.a},
h:function(a,b){var u
H.z(b,H.t(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.iO()
this.c=u}return this.fC(u,b)}else return this.fp(b)},
fp:function(a){var u,t,s
H.z(a,H.t(this,0))
u=this.d
if(u==null){u=P.iO()
this.d=u}t=this.dk(a)
s=u[t]
if(s==null)u[t]=[this.bO(a)]
else{if(this.ds(s,a)>=0)return!1
s.push(this.bO(a))}return!0},
w:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hV(this.c,b)
else return this.hU(b)},
hU:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.fP(u,a)
s=this.ds(t,a)
if(s<0)return!1
this.dK(t.splice(s,1)[0])
return!0},
fC:function(a,b){H.z(b,H.t(this,0))
if(H.e(a[b],"$ich")!=null)return!1
a[b]=this.bO(b)
return!0},
hV:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$ich")
if(u==null)return!1
this.dK(u)
delete a[b]
return!0},
dt:function(){this.r=1073741823&this.r+1},
bO:function(a){var u,t
u=new P.ch(H.z(a,H.t(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dt()
return u},
dK:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dt()},
dk:function(a){return J.bl(a)&1073741823},
fP:function(a,b){return a[this.dk(b)]},
ds:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.ch.prototype={}
P.h4.prototype={
gM:function(){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.bL(u))
else{u=this.c
if(u==null){this.sdh(null)
return!1}else{this.sdh(H.z(u.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
sdh:function(a){this.d=H.z(a,H.t(this,0))},
$iaL:1}
P.ew.prototype={$ik:1,$ia:1}
P.V.prototype={
gS:function(a){return new H.cU(a,this.gp(a),0,[H.ho(this,a,"V",0)])},
ad:function(a,b){return this.j(a,b)},
jX:function(a,b){var u,t
u=H.b([],[H.ho(this,a,"V",0)])
C.a.sp(u,this.gp(a))
for(t=0;t<this.gp(a);++t)C.a.a1(u,t,this.j(a,t))
return u},
cP:function(a){return this.jX(a,!0)},
i:function(a){return P.hN(a,"[","]")}}
P.ey.prototype={}
P.ez.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.j(a)
u.a=t+": "
u.a+=H.j(b)},
$S:14}
P.eA.prototype={
gp:function(a){return this.a},
i:function(a){return P.im(this)},
$iaq:1}
P.ha.prototype={
i:function(a){return P.hN(this,"{","}")},
ad:function(a,b){var u,t,s
if(b<0)H.n(P.aB(b,0,null,"index",null))
for(u=P.iN(this,this.r,H.t(this,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.h(P.bU(b,this,"index",null,t))},
$ik:1,
$iiz:1}
P.dE.prototype={}
P.bK.prototype={}
P.cE.prototype={}
P.e3.prototype={
$abK:function(){return[P.w,[P.a,P.v]]}}
P.fv.prototype={}
P.fw.prototype={
j8:function(a,b,c){var u,t,s
c=P.iw(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.hd(t)
if(s.fO(a,b,c)!==c)s.dM(C.j.co(a,c-1),0)
return new Uint8Array(t.subarray(0,H.kg(0,s.b,t.length)))},
j7:function(a){return this.j8(a,0,null)},
$acE:function(){return[P.w,[P.a,P.v]]}}
P.hd.prototype={
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
fO:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.co(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.bf(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dM(r,C.j.bf(a,p)))s=p}else if(r<=2047){q=this.b
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
P.Z.prototype={}
P.am.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.am&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.h.bi(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.jC(H.jZ(this))
t=P.cF(H.jX(this))
s=P.cF(H.jT(this))
r=P.cF(H.jU(this))
q=P.cF(H.jW(this))
p=P.cF(H.jY(this))
o=P.jD(H.jV(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.r.prototype={}
P.bo.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.bo&&this.a===b.a},
gG:function(a){return C.h.gG(this.a)},
i:function(a){var u,t,s,r,q
u=new P.e1()
t=this.a
if(t<0)return"-"+new P.bo(0-t).i(0)
s=u.$1(C.h.a9(t,6e7)%60)
r=u.$1(C.h.a9(t,1e6)%60)
q=new P.e0().$1(t%1e6)
return""+C.h.a9(t,36e8)+":"+H.j(s)+":"+H.j(r)+"."+H.j(q)}}
P.e0.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:13}
P.e1.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:13}
P.b5.prototype={}
P.d4.prototype={
i:function(a){return"Throw of null."}}
P.aV.prototype={
gbQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbP:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbQ()+t+s
if(!this.a)return r
q=this.gbP()
p=P.e5(this.b)
return r+q+": "+p}}
P.bx.prototype={
gbQ:function(){return"RangeError"},
gbP:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.j(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.j(u)
else if(s>u)t=": Not in range "+H.j(u)+".."+H.j(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.j(u)}return t}}
P.ef.prototype={
gbQ:function(){return"RangeError"},
gbP:function(){var u,t
u=H.a6(this.b)
if(typeof u!=="number")return u.aR()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.j(t)},
gp:function(a){return this.f}}
P.fu.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fs.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.f5.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dX.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.e5(u)+"."}}
P.eO.prototype={
i:function(a){return"Out of Memory"},
$ib5:1}
P.dc.prototype={
i:function(a){return"Stack Overflow"},
$ib5:1}
P.dZ.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dB.prototype={
i:function(a){return"Exception: "+this.a}}
P.ec.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.d0(s,0,75)+"...":s
return t+"\n"+r}}
P.v.prototype={}
P.k.prototype={
gp:function(a){var u,t
u=this.gS(this)
for(t=0;u.B();)++t
return t},
ad:function(a,b){var u,t,s
if(b<0)H.n(P.aB(b,0,null,"index",null))
for(u=this.gS(this),t=0;u.B();){s=u.gM()
if(b===t)return s;++t}throw H.h(P.bU(b,this,"index",null,t))},
i:function(a){return P.jJ(this,"(",")")}}
P.aL.prototype={}
P.a.prototype={$ik:1}
P.C.prototype={
gG:function(a){return P.N.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
u:function(a,b){return this===b},
gG:function(a){return H.c1(this)},
i:function(a){return"Instance of '"+H.bw(this)+"'"},
toString:function(){return this.i(this)}}
P.al.prototype={}
P.w.prototype={$iiq:1}
P.bb.prototype={
gp:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.p.prototype={}
W.dP.prototype={
i:function(a){return String(a)}}
W.dQ.prototype={
i:function(a){return String(a)}}
W.cw.prototype={}
W.bm.prototype={
cT:function(a,b,c){var u=this.fQ(a,b,P.kr(c,null))
return u},
fQ:function(a,b,c){return a.getContext(b,c)},
$ibm:1}
W.b4.prototype={
gp:function(a){return a.length}}
W.bM.prototype={
gp:function(a){return a.length}}
W.dY.prototype={}
W.bN.prototype={$ibN:1}
W.bO.prototype={
eW:function(a,b){return a.getElementById(b)}}
W.e_.prototype={
i:function(a){return String(a)}}
W.cH.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var u
if(b==null)return!1
if(!H.cq(b,"$iat",[P.ac],"$aat"))return!1
u=J.dM(b)
return a.left===u.gbE(b)&&a.top===u.gbH(b)&&a.width===u.gbJ(b)&&a.height===u.gbC(b)},
gG:function(a){return W.iM(C.i.gG(a.left),C.i.gG(a.top),C.i.gG(a.width),C.i.gG(a.height))},
gdS:function(a){return a.bottom},
gbC:function(a){return a.height},
gbE:function(a){return a.left},
gbF:function(a){return a.right},
gbH:function(a){return a.top},
gbJ:function(a){return a.width},
$iat:1,
$aat:function(){return[P.ac]}}
W.fP.prototype={
gp:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.e(u[b],"$ia1")},
h:function(a,b){J.ib(this.a,b)
return b},
gS:function(a){var u=this.cP(this)
return new J.ad(u,u.length,0,[H.t(u,0)])},
$aV:function(){return[W.a1]},
$ak:function(){return[W.a1]},
$aa:function(){return[W.a1]}}
W.a1.prototype={
gdV:function(a){return new W.fP(a,a.children)},
gdW:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aR()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aR()
if(r<0)r=-r*0
return new P.at(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
$ia1:1}
W.i.prototype={$ii:1}
W.bp.prototype={
fq:function(a,b,c,d){return a.addEventListener(b,H.cr(H.m(c,{func:1,args:[W.i]}),1),!1)},
$ibp:1}
W.eb.prototype={
gp:function(a){return a.length}}
W.br.prototype={
gp:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bU(b,a,null,null,null))
return a[b]},
ad:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iaW:1,
$aaW:function(){return[W.L]},
$aV:function(){return[W.L]},
$ik:1,
$ak:function(){return[W.L]},
$ia:1,
$aa:function(){return[W.L]},
$ibr:1,
$aaz:function(){return[W.L]}}
W.cL.prototype={}
W.aO.prototype={$iaO:1}
W.a4.prototype={$ia4:1}
W.fO.prototype={
gS:function(a){var u=this.a.childNodes
return new W.cJ(u,u.length,-1,[H.ho(C.K,u,"az",0)])},
gp:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aV:function(){return[W.L]},
$ak:function(){return[W.L]},
$aa:function(){return[W.L]}}
W.L.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.f4(a):u},
Y:function(a,b){return a.appendChild(b)},
$iL:1}
W.c_.prototype={
gp:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bU(b,a,null,null,null))
return a[b]},
ad:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iaW:1,
$aaW:function(){return[W.L]},
$aV:function(){return[W.L]},
$ik:1,
$ak:function(){return[W.L]},
$ia:1,
$aa:function(){return[W.L]},
$aaz:function(){return[W.L]}}
W.eX.prototype={
gp:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.aD.prototype={$iaD:1}
W.fg.prototype={
gp:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bU(b,a,null,null,null))
return a[b]},
ad:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iaW:1,
$aaW:function(){return[W.aR]},
$aV:function(){return[W.aR]},
$ik:1,
$ak:function(){return[W.aR]},
$ia:1,
$aa:function(){return[W.aR]},
$aaz:function(){return[W.aR]}}
W.bd.prototype={}
W.aT.prototype={
gje:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.au("deltaY is not supported"))},
gjd:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.au("deltaX is not supported"))},
$iaT:1}
W.cf.prototype={
hZ:function(a,b){return a.requestAnimationFrame(H.cr(H.m(b,{func:1,ret:-1,args:[P.ac]}),1))},
fI:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dA.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var u
if(b==null)return!1
if(!H.cq(b,"$iat",[P.ac],"$aat"))return!1
u=J.dM(b)
return a.left===u.gbE(b)&&a.top===u.gbH(b)&&a.width===u.gbJ(b)&&a.height===u.gbC(b)},
gG:function(a){return W.iM(C.i.gG(a.left),C.i.gG(a.top),C.i.gG(a.width),C.i.gG(a.height))},
gbC:function(a){return a.height},
gbJ:function(a){return a.width}}
W.fQ.prototype={}
W.hY.prototype={}
W.fR.prototype={}
W.fS.prototype={
$1:function(a){return this.a.$1(H.e(a,"$ii"))},
$S:40}
W.az.prototype={
gS:function(a){return new W.cJ(a,this.gp(a),-1,[H.ho(this,a,"az",0)])}}
W.cJ.prototype={
B:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdr(J.ju(this.a,u))
this.c=u
return!0}this.sdr(null)
this.c=t
return!1},
gM:function(){return this.d},
sdr:function(a){this.d=H.z(a,H.t(this,0))},
$iaL:1}
W.dz.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
P.hk.prototype={
$2:function(a,b){this.a[a]=b},
$S:14}
P.e8.prototype={
gbT:function(){var u,t,s
u=this.b
t=H.ay(u,"V",0)
s=W.a1
return new H.eB(new H.fI(u,H.m(new P.e9(),{func:1,ret:P.Z,args:[t]}),[t]),H.m(new P.ea(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.ib(this.b.a,b)},
gp:function(a){return J.cu(this.gbT().a)},
j:function(a,b){var u=this.gbT()
return u.b.$1(J.ic(u.a,b))},
gS:function(a){var u=P.jP(this.gbT(),!1,W.a1)
return new J.ad(u,u.length,0,[H.t(u,0)])},
$aV:function(){return[W.a1]},
$ak:function(){return[W.a1]},
$aa:function(){return[W.a1]}}
P.e9.prototype={
$1:function(a){return!!J.a_(H.e(a,"$iL")).$ia1},
$S:22}
P.ea.prototype={
$1:function(a){return H.c(H.e(a,"$iL"),"$ia1")},
$S:23}
P.h5.prototype={
gbF:function(a){var u=this.a
if(typeof u!=="number")return u.C()
return H.z(u+this.c,H.t(this,0))},
gdS:function(a){var u=this.b
if(typeof u!=="number")return u.C()
return H.z(u+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cq(b,"$iat",[P.ac],"$aat")){u=this.a
t=J.dM(b)
if(u==t.gbE(b)){s=this.b
if(s==t.gbH(b)){if(typeof u!=="number")return u.C()
r=H.t(this,0)
if(H.z(u+this.c,r)===t.gbF(b)){if(typeof s!=="number")return s.C()
u=H.z(s+this.d,r)===t.gdS(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t,s,r,q
u=this.a
t=J.bl(u)
s=this.b
r=J.bl(s)
if(typeof u!=="number")return u.C()
q=H.t(this,0)
u=C.h.gG(H.z(u+this.c,q))
if(typeof s!=="number")return s.C()
q=C.h.gG(H.z(s+this.d,q))
return P.ke(P.h2(P.h2(P.h2(P.h2(0,t),r),u),q))}}
P.at.prototype={
gbE:function(a){return this.a},
gbH:function(a){return this.b},
gbJ:function(a){return this.c},
gbC:function(a){return this.d}}
P.o.prototype={
gdV:function(a){return new P.e8(a,new W.fO(a))}}
P.cx.prototype={$icx:1}
P.cK.prototype={$icK:1}
P.d7.prototype={$id7:1}
P.by.prototype={
dR:function(a,b,c){return a.attachShader(b,c)},
ap:function(a,b,c){return a.bindBuffer(b,c)},
iZ:function(a,b,c){return a.bindFramebuffer(b,c)},
aA:function(a,b,c){return a.blendFunc(b,c)},
dT:function(a,b,c,d){return a.bufferData(b,c,d)},
j2:function(a,b){return a.clear(b)},
j3:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
j4:function(a,b){return a.clearDepth(b)},
j6:function(a,b){return a.compileShader(b)},
j9:function(a,b){return a.createShader(b)},
jb:function(a,b){return a.deleteProgram(b)},
jc:function(a,b){return a.deleteShader(b)},
jf:function(a,b){return a.depthFunc(b)},
ct:function(a,b){return a.disable(b)},
e_:function(a,b){return a.disableVertexAttribArray(b)},
jg:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ar:function(a,b){return a.enable(b)},
e3:function(a,b){return a.enableVertexAttribArray(b)},
eT:function(a,b,c){return a.getActiveAttrib(b,c)},
eU:function(a,b,c){return a.getActiveUniform(b,c)},
eV:function(a,b,c){return a.getAttribLocation(b,c)},
cU:function(a,b){return a.getParameter(b)},
eX:function(a,b){return a.getProgramInfoLog(b)},
bK:function(a,b,c){return a.getProgramParameter(b,c)},
eY:function(a,b){return a.getShaderInfoLog(b)},
eZ:function(a,b,c){return a.getShaderParameter(b,c)},
f_:function(a,b,c){return a.getUniformLocation(b,c)},
js:function(a,b){return a.linkProgram(b)},
f2:function(a,b,c){return a.shaderSource(b,c)},
I:function(a,b,c){return a.uniform1f(b,c)},
P:function(a,b,c){return a.uniform1i(b,c)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
k_:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eO:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eP:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cR:function(a,b){return a.useProgram(b)},
k0:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
k5:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iby:1}
P.da.prototype={$ida:1}
P.dm.prototype={$idm:1}
O.S.prototype={
bd:function(a){this.sfV(H.b([],[a]))
this.sdB(null)
this.sdv(null)
this.sdC(null)},
cW:function(a,b,c){var u=H.ay(this,"S",0)
H.m(b,{func:1,ret:P.Z,args:[[P.k,u]]})
u={func:1,ret:-1,args:[P.v,[P.k,u]]}
H.m(a,u)
H.m(c,u)
this.sdB(b)
this.sdv(a)
this.sdC(c)},
aS:function(a,b){return this.cW(a,null,b)},
dA:function(a){var u
H.f(a,"$ik",[H.ay(this,"S",0)],"$ak")
u=this.b
if(u!=null)return u.$1(a)
return!0},
du:function(a,b){var u
H.f(b,"$ik",[H.ay(this,"S",0)],"$ak")
u=this.c
if(u!=null)u.$2(a,b)},
gp:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.ad(u,u.length,0,[H.t(u,0)])},
ad:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ay(this,"S",0)
H.z(b,u)
u=[u]
if(this.dA(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.du(s,H.b([b],u))}},
ce:function(a,b){var u,t
H.f(b,"$ik",[H.ay(this,"S",0)],"$ak")
if(this.dA(b)){u=this.a
t=u.length
C.a.ce(u,b)
this.du(t,b)}},
sfV:function(a){this.a=H.f(a,"$ia",[H.ay(this,"S",0)],"$aa")},
sdB:function(a){this.b=H.m(a,{func:1,ret:P.Z,args:[[P.k,H.ay(this,"S",0)]]})},
sdv:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.v,[P.k,H.ay(this,"S",0)]]})},
sdC:function(a){this.d=H.m(a,{func:1,ret:-1,args:[P.v,[P.k,H.ay(this,"S",0)]]})},
$ik:1}
O.bW.prototype={
gp:function(a){return this.a.length},
gq:function(){var u=this.b
if(u==null){u=D.M()
this.b=u}return u},
fb:function(a){var u=this.b
if(u!=null)u.E(a)},
aF:function(){return this.fb(null)},
gH:function(){var u=this.a
if(u.length>0)return C.a.gcD(u)
else return V.bY()},
eH:function(a){var u=this.a
if(a==null)C.a.h(u,V.bY())
else C.a.h(u,a)
this.aF()},
cJ:function(){var u=this.a
if(u.length>0){u.pop()
this.aF()}},
sbU:function(a){this.a=H.f(a,"$ia",[V.a8],"$aa")}}
E.dS.prototype={}
E.af.prototype={
dg:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ad(u,u.length,0,[H.t(u,0)]);u.B();){t=u.d
if(t.f==null)t.dg()}},
sa2:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gq().w(0,this.geB())
t=this.c
if(t!=null)t.gq().h(0,this.geB())
s=new D.B("shape",u,this.c,this,[F.ah])
s.b=!0
this.aa(s)}},
sa6:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gq().w(0,this.geD())
t=this.f
this.f=a
if(a!=null)a.gq().h(0,this.geD())
this.dg()
s=new D.B("technique",t,this.f,this,[O.bc])
s.b=!0
this.aa(s)}},
sV:function(a){var u,t
if(!J.A(this.r,a)){u=this.r
if(u!=null)u.gq().w(0,this.gez())
if(a!=null)a.gq().h(0,this.gez())
this.r=a
t=new D.B("mover",u,a,this,[U.a3])
t.b=!0
this.aa(t)}},
ab:function(a){var u,t,s,r
u=this.r
t=u!=null?u.aQ(a,this):null
if(!J.A(t,this.x)){s=this.x
this.x=t
r=new D.B("matrix",s,t,this,[V.a8])
r.b=!0
this.aa(r)}u=this.f
if(u!=null)u.ab(a)
for(u=this.y.a,u=new J.ad(u,u.length,0,[H.t(u,0)]);u.B();)u.d.ab(a)},
ak:function(a){var u,t,s
if(!this.b)return
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gH())
else C.a.h(u.a,t.m(0,u.gH()))
u.aF()
a.eI(this.f)
u=a.dy
s=(u&&C.a).gcD(u)
if(s!=null&&this.d!=null)s.eJ(a,this)
for(u=this.y.a,u=new J.ad(u,u.length,0,[H.t(u,0)]);u.B();)u.d.ak(a)
a.eF()
a.dx.cJ()},
gq:function(){var u=this.z
if(u==null){u=D.M()
this.z=u}return u},
aa:function(a){var u=this.z
if(u!=null)u.E(a)},
N:function(){return this.aa(null)},
eC:function(a){H.e(a,"$iq")
this.e=null
this.aa(a)},
jC:function(){return this.eC(null)},
eE:function(a){this.aa(H.e(a,"$iq"))},
jD:function(){return this.eE(null)},
eA:function(a){this.aa(H.e(a,"$iq"))},
jB:function(){return this.eA(null)},
ey:function(a){this.aa(H.e(a,"$iq"))},
jy:function(){return this.ey(null)},
jx:function(a,b){var u,t,s,r,q,p,o
H.f(b,"$ik",[E.af],"$ak")
for(u=b.length,t=this.gex(),s={func:1,ret:-1,args:[D.q]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bQ()
o.san(null)
o.sc3(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.san(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.N()},
jA:function(a,b){var u,t
H.f(b,"$ik",[E.af],"$ak")
for(u=b.gS(b),t=this.gex();u.B();)u.gM().gq().w(0,t)
this.N()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfc:function(a,b){this.y=H.f(b,"$iS",[E.af],"$aS")},
$iaY:1}
E.eS.prototype={
f8:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.am(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.bW()
t=[V.a8]
u.sbU(H.b([],t))
u.b=null
u.gq().h(0,new E.eT(this))
this.cy=u
u=new O.bW()
u.sbU(H.b([],t))
u.b=null
u.gq().h(0,new E.eU(this))
this.db=u
u=new O.bW()
u.sbU(H.b([],t))
u.b=null
u.gq().h(0,new E.eV(this))
this.dx=u
this.sie(H.b([],[O.bc]))
u=this.dy;(u&&C.a).h(u,null)
this.si6(new H.aN([P.w,A.c2]))},
gjN:function(){var u=this.z
if(u==null){u=this.cy.gH().m(0,this.db.gH())
this.z=u}return u},
geG:function(){var u=this.ch
if(u==null){u=this.gjN().m(0,this.dx.gH())
this.ch=u}return u},
geQ:function(){var u=this.cx
if(u==null){u=this.db.gH().m(0,this.dx.gH())
this.cx=u}return u},
eI:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gcD(u):a;(u&&C.a).h(u,t)},
eF:function(){var u=this.dy
if(u.length>1)u.pop()},
dP:function(a){var u=a.b
if(u.length===0)throw H.h(P.l("May not cache a shader with no name."))
if(this.fr.dX(u))throw H.h(P.l('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.a1(0,u,a)},
sie:function(a){this.dy=H.f(a,"$ia",[O.bc],"$aa")},
si6:function(a){this.fr=H.f(a,"$iaq",[P.w,A.c2],"$aaq")}}
E.eT.prototype={
$1:function(a){var u
H.e(a,"$iq")
u=this.a
u.z=null
u.ch=null},
$S:1}
E.eU.prototype={
$1:function(a){var u
H.e(a,"$iq")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:1}
E.eV.prototype={
$1:function(a){var u
H.e(a,"$iq")
u=this.a
u.ch=null
u.cx=null},
$S:1}
E.di.prototype={
d9:function(a){H.e(a,"$iq")
this.eK()},
d8:function(){return this.d9(null)},
sbL:function(a){var u=this.d
if(u!==a){if(u!=null)u.gq().w(0,this.gd7())
this.d=a
a.gq().h(0,this.gd7())
this.d8()}},
dG:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.m()
if(typeof u!=="number")return H.y(u)
s=C.i.eq(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.m()
r=C.i.eq(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.iC(C.n,this.gjR())}},
eK:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.fd(this),{func:1,ret:-1,args:[P.ac]})
C.y.fI(u)
C.y.hZ(u,W.iV(t,P.ac))}},
jQ:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dG()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.am(r,!1)
s.y=P.jE(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sp(r.a,0)
r.aF()
r=s.db
C.a.sp(r.a,0)
r.aF()
r=s.dx
C.a.sp(r.a,0)
r.aF()
r=s.dy;(r&&C.a).sp(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.ak(this.e)}}catch(q){u=H.bj(q)
t=H.bD(q)
P.j9("Error: "+H.j(u))
P.j9("Stack: "+H.j(t))
throw H.h(u)}}}
E.fd.prototype={
$1:function(a){var u
H.kF(a)
u=this.a
if(u.ch){u.ch=!1
u.jQ()}},
$S:24}
Z.dw.prototype={$ikQ:1}
Z.cy.prototype={
ao:function(a){var u,t,s
try{t=a.a
C.b.e3(t,this.e)
C.b.k0(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.bj(s)
t=P.l('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(u))
throw H.h(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}}
Z.dx.prototype={$ikR:1}
Z.b3.prototype={
ae:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
ao:function(a){var u,t
u=this.a
C.b.ap(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].ao(a)},
cQ:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.e_(s,u[t].e)
C.b.ap(s,this.a.a,null)},
ak:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ap(t,p,r.b)
C.b.jg(t,q.a,q.b,5123,0)
C.b.ap(t,p,null)}},
jE:function(a){this.ao(a)
this.ak(a)
this.cQ(a)},
i:function(a){var u,t,s,r,q,p
u=[P.w]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ao(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(t,", ")+"\nAttrs:   "+C.a.D(p,", ")},
sfR:function(a){this.b=H.f(a,"$ia",[Z.b6],"$aa")},
$ik7:1}
Z.cz.prototype={
sh_:function(a){this.a=H.f(a,"$iaq",[P.w,Z.b3],"$aaq")},
$ik7:1}
Z.b6.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bw(this.c)+"'")+"]"}}
Z.aF.prototype={
gcZ:function(a){var u,t
u=this.a
t=(u&$.aI().a)!==0?3:0
if((u&$.aH().a)!==0)t+=3
if((u&$.aG().a)!==0)t+=3
if((u&$.b1().a)!==0)t+=2
if((u&$.b2().a)!==0)t+=3
if((u&$.bk().a)!==0)t+=3
if((u&$.cs().a)!==0)t+=4
if((u&$.bG().a)!==0)++t
return(u&$.b0().a)!==0?t+4:t},
iX:function(a){var u,t,s
u=$.aI()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aH()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aG()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b1()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b2()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bk()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cs()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bG()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b0()
if((t&u.a)!==0)if(s===a)return u
return $.js()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aF))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.w])
t=this.a
if((t&$.aI().a)!==0)C.a.h(u,"Pos")
if((t&$.aH().a)!==0)C.a.h(u,"Norm")
if((t&$.aG().a)!==0)C.a.h(u,"Binm")
if((t&$.b1().a)!==0)C.a.h(u,"Txt2D")
if((t&$.b2().a)!==0)C.a.h(u,"TxtCube")
if((t&$.bk().a)!==0)C.a.h(u,"Clr3")
if((t&$.cs().a)!==0)C.a.h(u,"Clr4")
if((t&$.bG().a)!==0)C.a.h(u,"Weight")
if((t&$.b0().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.D(u,"|")}}
D.dV.prototype={}
D.bQ.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.q]}
H.m(b,u)
if(this.a==null)this.san(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
w:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[D.q]})
u=this.a
u=u==null?null:C.a.aZ(u,b)
if(u===!0){u=this.a
t=(u&&C.a).w(u,b)||!1}else t=!1
return t},
E:function(a){var u,t,s,r
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
return!0}if(!s)C.a.Z(t,new D.e6(u))
return!0},
jS:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.E(t)}}},
at:function(){return this.jS(!0,!1)},
san:function(a){this.a=H.f(a,"$ia",[{func:1,ret:-1,args:[D.q]}],"$aa")},
sc3:function(a){this.b=H.f(a,"$ia",[{func:1,ret:-1,args:[D.q]}],"$aa")}}
D.e6.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.q]})
u=this.a.a
if(u.b)a.$1(u)},
$S:25}
D.q.prototype={}
D.b7.prototype={}
D.b8.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.cA.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cA))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.cS.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cS))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.er.prototype={
jK:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jG:function(a){this.c=a.b
this.d.w(0,a.a)
return!1},
shT:function(a){this.d=H.f(a,"$iiz",[P.v],"$aiz")}}
X.cV.prototype={}
X.ex.prototype={
aU:function(a,b){var u,t,s,r,q,p,o,n
u=new P.am(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.m()
q=b.b
p=this.ch
if(typeof q!=="number")return q.m()
o=t.C(0,new V.O(s*r,q*p))
p=this.a.gaN()
n=new X.ar(a,V.aA(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cI:function(a,b){this.r=a.a
return!1},
b8:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.f1()
if(typeof u!=="number")return u.eS()
this.r=(u&~t)>>>0
return!1},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.aU(a,b))
return!0},
jL:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaN()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.m()
o=a.b
n=this.cy
if(typeof o!=="number")return o.m()
r=new X.bZ(new V.I(q*p,o*n),t,s,new P.am(r,!1),this)
r.b=!0
u.E(r)
return!0},
hr:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.am(Date.now(),!1)
t=this.f
s=new X.cV(c,a,this.a.gaN(),b,u,this)
s.b=!0
t.E(s)
this.y=u
this.x=V.aA()}}
X.an.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.an))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.ar.prototype={}
X.eI.prototype={
bR:function(a,b,c){var u,t,s
u=new P.am(Date.now(),!1)
t=this.a.gaN()
s=new X.ar(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cI:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bR(a,b,!0))
return!0},
b8:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.f1()
if(typeof u!=="number")return u.eS()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.E(this.bR(a,b,!0))
return!0},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bR(a,b,!1))
return!0},
jM:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaN()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.m()
p=a.b
o=this.ch
if(typeof p!=="number")return p.m()
s=new X.bZ(new V.I(r*q,p*o),t,b,new P.am(s,!1),this)
s.b=!0
u.E(s)
return!0},
gb2:function(){var u=this.b
if(u==null){u=D.M()
this.b=u}return u},
gaE:function(){var u=this.c
if(u==null){u=D.M()
this.c=u}return u},
gb6:function(){var u=this.d
if(u==null){u=D.M()
this.d=u}return u}}
X.bZ.prototype={}
X.eQ.prototype={}
X.dk.prototype={}
X.ff.prototype={
aU:function(a,b){var u,t,s,r
H.f(a,"$ia",[V.O],"$aa")
u=new P.am(Date.now(),!1)
t=a.length>0?a[0]:V.aA()
s=this.a.gaN()
r=new X.dk(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jJ:function(a){var u
H.f(a,"$ia",[V.O],"$aa")
u=this.b
if(u==null)return!1
u.E(this.aU(a,!0))
return!0},
jH:function(a){var u
H.f(a,"$ia",[V.O],"$aa")
u=this.c
if(u==null)return!1
u.E(this.aU(a,!0))
return!0},
jI:function(a){var u
H.f(a,"$ia",[V.O],"$aa")
u=this.d
if(u==null)return!1
u.E(this.aU(a,!1))
return!0}}
X.dr.prototype={
gaN:function(){var u=this.a
return V.ix(0,0,C.m.gdW(u).c,C.m.gdW(u).d)},
dn:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cS(u,new X.an(t,a.altKey,a.shiftKey))},
aK:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.an(t,a.altKey,a.shiftKey)},
cc:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.an(t,a.altKey,a.shiftKey)},
az:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.F()
q=u.top
if(typeof s!=="number")return s.F()
return new V.O(t-r,s-q)},
aV:function(a){return new V.I(a.movementX,a.movementY)},
c5:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.O])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
o=C.i.al(p.pageX)
C.i.al(p.pageY)
n=u.left
C.i.al(p.pageX)
C.a.h(t,new V.O(o-n,C.i.al(p.pageY)-u.top))}return t},
av:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cA(u,new X.an(t,a.altKey,a.shiftKey))},
bV:function(a){var u,t,s,r,q,p
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
hl:function(a){this.f=!0},
h9:function(a){this.f=!1},
hf:function(a){H.e(a,"$ia4")
if(this.f&&this.bV(a))a.preventDefault()},
hp:function(a){var u
H.e(a,"$iaO")
if(!this.f)return
u=this.dn(a)
this.b.jK(u)},
hn:function(a){var u
H.e(a,"$iaO")
if(!this.f)return
u=this.dn(a)
this.b.jG(u)},
ht:function(a){var u,t,s,r
H.e(a,"$ia4")
u=this.a
u.focus()
this.f=!0
this.aK(a)
if(this.x){t=this.av(a)
s=this.aV(a)
if(this.d.cI(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.av(a)
r=this.az(a)
if(this.c.cI(t,r))a.preventDefault()},
hx:function(a){var u,t,s
H.e(a,"$ia4")
this.aK(a)
u=this.av(a)
if(this.x){t=this.aV(a)
if(this.d.b8(u,t))a.preventDefault()
return}if(this.r)return
s=this.az(a)
if(this.c.b8(u,s))a.preventDefault()},
hj:function(a){var u,t,s
H.e(a,"$ia4")
if(!this.bV(a)){this.aK(a)
u=this.av(a)
if(this.x){t=this.aV(a)
if(this.d.b8(u,t))a.preventDefault()
return}if(this.r)return
s=this.az(a)
if(this.c.b8(u,s))a.preventDefault()}},
hv:function(a){var u,t,s
H.e(a,"$ia4")
this.aK(a)
u=this.av(a)
if(this.x){t=this.aV(a)
if(this.d.b7(u,t))a.preventDefault()
return}if(this.r)return
s=this.az(a)
if(this.c.b7(u,s))a.preventDefault()},
hh:function(a){var u,t,s
H.e(a,"$ia4")
if(!this.bV(a)){this.aK(a)
u=this.av(a)
if(this.x){t=this.aV(a)
if(this.d.b7(u,t))a.preventDefault()
return}if(this.r)return
s=this.az(a)
if(this.c.b7(u,s))a.preventDefault()}},
hz:function(a){var u,t
H.e(a,"$iaT")
this.aK(a)
u=new V.I((a&&C.x).gjd(a),C.x.gje(a)).l(0,180)
if(this.x){if(this.d.jL(u))a.preventDefault()
return}if(this.r)return
t=this.az(a)
if(this.c.jM(u,t))a.preventDefault()},
hB:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.av(this.y)
s=this.az(this.y)
this.d.hr(t,s,u)}},
hR:function(a){var u
H.e(a,"$iaD")
this.a.focus()
this.f=!0
this.cc(a)
u=this.c5(a)
if(this.e.jJ(u))a.preventDefault()},
hN:function(a){var u
H.e(a,"$iaD")
this.cc(a)
u=this.c5(a)
if(this.e.jH(u))a.preventDefault()},
hP:function(a){var u
H.e(a,"$iaD")
this.cc(a)
u=this.c5(a)
if(this.e.jI(u))a.preventDefault()},
sfJ:function(a){this.z=H.f(a,"$ia",[[P.c4,P.N]],"$aa")}}
D.cG.prototype={$iY:1,$iaY:1}
D.Y.prototype={$iaY:1}
D.cT.prototype={
gq:function(){var u=this.Q
if(u==null){u=D.M()
this.Q=u}return u},
da:function(a){var u=this.Q
if(u!=null)u.E(a)},
dz:function(a){var u=this.ch
if(u!=null)u.E(a)},
hq:function(){return this.dz(null)},
hD:function(a){var u,t,s
H.f(a,"$ik",[D.Y],"$ak")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(s==null||this.fD(s))return!1}return!0},
h3:function(a,b){var u,t,s,r,q
u=D.Y
H.f(b,"$ik",[u],"$ak")
for(t=b.length,s=this.gdw(),r=0;r<b.length;b.length===t||(0,H.x)(b),++r){q=H.e(b[r],"$iY")
q.gq().h(0,s)}u=new D.b7(a,b,this,[u])
u.b=!0
this.da(u)},
hH:function(a,b){var u,t,s,r
u=D.Y
H.f(b,"$ik",[u],"$ak")
for(t=b.gS(b),s=this.gdw();t.B();){r=t.gM()
C.a.w(this.e,r)
r.gq().w(0,s)}u=new D.b8(a,b,this,[u])
u.b=!0
this.da(u)},
fD:function(a){var u=C.a.aZ(this.e,a)
return u},
sfd:function(a){this.e=H.f(a,"$ia",[D.cG],"$aa")},
sfe:function(a){this.f=H.f(a,"$ia",[D.d6],"$aa")},
sff:function(a){this.r=H.f(a,"$ia",[D.db],"$aa")},
sfg:function(a){this.x=H.f(a,"$ia",[D.df],"$aa")},
sfh:function(a){this.y=H.f(a,"$ia",[D.dg],"$aa")},
sfi:function(a){this.z=H.f(a,"$ia",[D.dh],"$aa")},
$ak:function(){return[D.Y]},
$aS:function(){return[D.Y]}}
D.d6.prototype={$iY:1,$iaY:1}
D.db.prototype={$iY:1,$iaY:1}
D.df.prototype={$iY:1,$iaY:1}
D.dg.prototype={$iY:1,$iaY:1}
D.dh.prototype={$iY:1,$iaY:1}
V.W.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.F.prototype={
cP:function(a){return H.b([this.a,this.b,this.c,this.d],[P.r])},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}}
V.e4.prototype={}
V.d_.prototype={
a3:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.r])
return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d_))return!1
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
u=[P.r]
t=V.bC(H.b([this.a,this.d,this.r],u),3,0)
s=V.bC(H.b([this.b,this.e,this.x],u),3,0)
r=V.bC(H.b([this.c,this.f,this.y],u),3,0)
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
V.a8.prototype={
a3:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return u},
eu:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.E().a)return V.bY()
a8=1/a7
a9=-r
b0=-d
return V.aQ((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
m:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
eN:function(a){return new V.u(C.i.m(this.a,a.ge0(a))+C.i.m(this.b,a.ge1(a))+C.i.m(this.c,a.ge2()),C.i.m(this.e,a.ge0(a))+C.i.m(this.f,a.ge1(a))+C.i.m(this.r,a.ge2()),C.i.m(this.y,a.ge0(a))+C.i.m(this.z,a.ge1(a))+C.i.m(this.Q,a.ge2()))},
bc:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.T(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
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
i:function(a){return this.J()},
er:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.r]
t=V.bC(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bC(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bC(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bC(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
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
J:function(){return this.er("",3,0)},
A:function(a){return this.er(a,3,0)}}
V.O.prototype={
C:function(a,b){return new V.O(this.a+b.a,this.b+b.b)},
F:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
l:function(a,b){if(Math.abs(b-0)<$.E().a)return V.aA()
return new V.O(this.a/b,this.b/b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.T.prototype={
C:function(a,b){return new V.T(this.a+b.a,this.b+b.b,this.c+b.c)},
F:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
l:function(a,b){if(Math.abs(b-0)<$.E().a)return V.it()
return new V.T(this.a/b,this.b/b,this.c/b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.as.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.as))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}}
V.d9.prototype={
ga0:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d9))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}}
V.I.prototype={
b4:function(a){return Math.sqrt(this.v(this))},
v:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.y(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.y(r)
return u*t+s*r},
m:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.m()
t=this.b
if(typeof t!=="number")return t.m()
return new V.I(u*b,t*b)},
l:function(a,b){var u,t
if(Math.abs(b-0)<$.E().a){u=$.iF
if(u==null){u=new V.I(0,0)
$.iF=u}return u}u=this.a
if(typeof u!=="number")return u.l()
t=this.b
if(typeof t!=="number")return t.l()
return new V.I(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
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
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.u.prototype={
b4:function(a){return Math.sqrt(this.v(this))},
v:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cE:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.u(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b_:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.u(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.u(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.u(-this.a,-this.b,-this.c)},
m:function(a,b){return new V.u(this.a*b,this.b*b,this.c*b)},
l:function(a,b){if(Math.abs(b-0)<$.E().a)return V.bz()
return new V.u(this.a/b,this.b/b,this.c/b)},
ev:function(){var u=$.E().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.u))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.b_.prototype={
b4:function(a){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=this.d
return Math.sqrt(u*u+t*t+s*s+r*r)},
l:function(a,b){var u
if(Math.abs(b-0)<$.E().a){u=$.iK
if(u==null){u=new V.b_(0,0,0,0)
$.iK=u}return u}return new V.b_(this.a/b,this.b/b,this.c/b,this.d/b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b_))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}}
U.dW.prototype={
bN:function(a){var u=V.kP(a,this.c,this.b)
return u},
gq:function(){var u=this.y
if(u==null){u=D.M()
this.y=u}return u},
L:function(a){var u=this.y
if(u!=null)u.E(a)},
scS:function(a,b){},
scF:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.E().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bN(t)}u=new D.B("maximumLocation",u,this.b,this,[P.r])
u.b=!0
this.L(u)}},
scH:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.E().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bN(t)}u=new D.B("minimumLocation",u,this.c,this,[P.r])
u.b=!0
this.L(u)}},
sa_:function(a,b){var u
b=this.bN(b)
u=this.d
if(!(Math.abs(u-b)<$.E().a)){this.d=b
u=new D.B("location",u,b,this,[P.r])
u.b=!0
this.L(u)}},
scG:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.E().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.B("maximumVelocity",u,a,this,[P.r])
u.b=!0
this.L(u)}},
sR:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.E().a)){this.f=a
u=new D.B("velocity",u,a,this,[P.r])
u.b=!0
this.L(u)}},
scs:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.E().a)){this.x=a
u=new D.B("dampening",u,a,this,[P.r])
u.b=!0
this.L(u)}},
ab:function(a){var u,t,s,r,q
u=this.f
t=$.E().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa_(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.E().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sR(s)}}}
U.cD.prototype={
gq:function(){var u=this.b
if(u==null){u=D.M()
this.b=u}return u},
sH:function(a){var u,t,s
if(a==null)a=V.bY()
if(!J.A(this.a,a)){u=this.a
this.a=a
t=new D.B("matrix",u,a,this,[V.a8])
t.b=!0
s=this.b
if(s!=null)s.E(t)}},
aQ:function(a,b){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cD))return!1
return J.A(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.bT.prototype={
gq:function(){var u=this.e
if(u==null){u=D.M()
this.e=u}return u},
L:function(a){var u
H.e(a,"$iq")
u=this.e
if(u!=null)u.E(a)},
a5:function(){return this.L(null)},
fk:function(a,b){var u,t,s,r,q,p,o,n
u=U.a3
H.f(b,"$ik",[u],"$ak")
for(t=b.length,s=this.gaI(),r={func:1,ret:-1,args:[D.q]},q=[r],p=0;p<b.length;b.length===t||(0,H.x)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.m(s,r)
if(n.a==null)n.san(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.b7(a,b,this,[u])
u.b=!0
this.L(u)},
hF:function(a,b){var u,t,s
u=U.a3
H.f(b,"$ik",[u],"$ak")
for(t=b.gS(b),s=this.gaI();t.B();)t.gM().gq().w(0,s)
u=new D.b8(a,b,this,[u])
u.b=!0
this.L(u)},
aQ:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.aR()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ad(u,u.length,0,[H.t(u,0)]),s=null;u.B();){t=u.d
if(t!=null){r=t.aQ(a,b)
if(r!=null)s=s==null?r:r.m(0,s)}}this.f=s==null?V.bY():s
u=this.e
if(u!=null)u.at()}return this.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bT))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.A(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ak:function(){return[U.a3]},
$aS:function(){return[U.a3]},
$ia3:1}
U.a3.prototype={}
U.ds.prototype={
gq:function(){var u=this.cy
if(u==null){u=D.M()
this.cy=u}return u},
L:function(a){var u
H.e(a,"$iq")
u=this.cy
if(u!=null)u.E(a)},
a5:function(){return this.L(null)},
aY:function(a){if(this.a!=null)return!1
this.a=a
a.c.gb2().h(0,this.gbW())
this.a.c.gb6().h(0,this.gbY())
this.a.c.gaE().h(0,this.gc_())
return!0},
bX:function(a){H.e(a,"$iq")
if(!J.A(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
bZ:function(a){var u,t,s,r,q,p,o
a=H.c(H.e(a,"$iq"),"$iar")
if(!this.y)return
if(this.x){u=a.d.F(0,a.y)
u=new V.I(u.a,u.b)
u=u.v(u)
t=this.r
if(typeof t!=="number")return H.y(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.F(0,a.y)
u=new V.I(t.a,t.b).m(0,2).l(0,u.ga0())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.m()
s=this.e
if(typeof s!=="number")return H.y(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=new V.I(s.a,s.b).m(0,2).l(0,u.ga0())
s=this.b
q=r.a
if(typeof q!=="number")return q.O()
p=this.e
if(typeof p!=="number")return H.y(p)
o=this.z
if(typeof o!=="number")return H.y(o)
s.sa_(0,-q*p+o)
this.b.sR(0)
t=t.F(0,a.z)
this.Q=new V.I(t.a,t.b).m(0,2).l(0,u.ga0())}this.a5()},
c0:function(a){var u,t,s
H.e(a,"$iq")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.v(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.m()
s=this.e
if(typeof s!=="number")return H.y(s)
u.sR(t*10*s)
this.a5()}},
aQ:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.aR()
if(u<t){this.ch=t
s=a.y
this.b.ab(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aQ(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ia3:1}
U.dt.prototype={
gq:function(){var u=this.fx
if(u==null){u=D.M()
this.fx=u}return u},
L:function(a){var u
H.e(a,"$iq")
u=this.fx
if(u!=null)u.E(a)},
a5:function(){return this.L(null)},
aY:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gb2().h(0,this.gbW())
this.a.c.gb6().h(0,this.gbY())
this.a.c.gaE().h(0,this.gc_())
u=this.a.d
t=u.f
if(t==null){t=D.M()
u.f=t
u=t}else u=t
u.h(0,this.gfW())
u=this.a.d
t=u.d
if(t==null){t=D.M()
u.d=t
u=t}else u=t
u.h(0,this.gfY())
u=this.a.e
t=u.b
if(t==null){t=D.M()
u.b=t
u=t}else u=t
u.h(0,this.gil())
u=this.a.e
t=u.d
if(t==null){t=D.M()
u.d=t
u=t}else u=t
u.h(0,this.gij())
u=this.a.e
t=u.c
if(t==null){t=D.M()
u.c=t
u=t}else u=t
u.h(0,this.gih())
return!0},
am:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.I(u,t)},
bX:function(a){a=H.c(H.e(a,"$iq"),"$iar")
if(!J.A(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bZ:function(a){var u,t,s,r,q,p,o
a=H.c(H.e(a,"$iq"),"$iar")
if(!this.cx)return
if(this.ch){u=a.d.F(0,a.y)
u=new V.I(u.a,u.b)
u=u.v(u)
t=this.Q
if(typeof t!=="number")return H.y(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.F(0,a.y)
u=this.am(new V.I(t.a,t.b).m(0,2).l(0,u.ga0()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.O()
s=this.y
if(typeof s!=="number")return H.y(s)
t.sR(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.O()
t=this.x
if(typeof t!=="number")return H.y(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=this.am(new V.I(s.a,s.b).m(0,2).l(0,u.ga0()))
s=this.c
q=r.a
if(typeof q!=="number")return q.O()
p=this.y
if(typeof p!=="number")return H.y(p)
o=this.cy
if(typeof o!=="number")return H.y(o)
s.sa_(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.O()
q=this.x
if(typeof q!=="number")return H.y(q)
s=this.db
if(typeof s!=="number")return H.y(s)
o.sa_(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.F(0,a.z)
this.dx=this.am(new V.I(t.a,t.b).m(0,2).l(0,u.ga0()))}this.a5()},
c0:function(a){var u,t,s
H.e(a,"$iq")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.v(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.O()
s=this.y
if(typeof s!=="number")return H.y(s)
u.sR(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.O()
u=this.x
if(typeof u!=="number")return H.y(u)
s.sR(-t*10*u)
this.a5()}},
fX:function(a){if(H.c(H.e(a,"$iq"),"$icV").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fZ:function(a){var u,t,s,r,q,p,o
a=H.c(H.e(a,"$iq"),"$iar")
if(!J.A(this.d,a.x.b))return
u=a.c
t=a.d
s=t.F(0,a.y)
r=this.am(new V.I(s.a,s.b).m(0,2).l(0,u.ga0()))
s=this.c
q=r.a
if(typeof q!=="number")return q.O()
p=this.y
if(typeof p!=="number")return H.y(p)
o=this.cy
if(typeof o!=="number")return H.y(o)
s.sa_(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.O()
q=this.x
if(typeof q!=="number")return H.y(q)
s=this.db
if(typeof s!=="number")return H.y(s)
o.sa_(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.F(0,a.z)
this.dx=this.am(new V.I(t.a,t.b).m(0,2).l(0,u.ga0()))
this.a5()},
im:function(a){H.e(a,"$iq")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ik:function(a){var u,t,s,r,q,p,o
a=H.c(H.e(a,"$iq"),"$idk")
if(!this.cx)return
if(this.ch){u=a.d.F(0,a.y)
u=new V.I(u.a,u.b)
u=u.v(u)
t=this.Q
if(typeof t!=="number")return H.y(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.F(0,a.y)
u=this.am(new V.I(t.a,t.b).m(0,2).l(0,u.ga0()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.O()
s=this.y
if(typeof s!=="number")return H.y(s)
t.sR(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.O()
t=this.x
if(typeof t!=="number")return H.y(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=this.am(new V.I(s.a,s.b).m(0,2).l(0,u.ga0()))
s=this.c
q=r.a
if(typeof q!=="number")return q.O()
p=this.y
if(typeof p!=="number")return H.y(p)
o=this.cy
if(typeof o!=="number")return H.y(o)
s.sa_(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.O()
q=this.x
if(typeof q!=="number")return H.y(q)
s=this.db
if(typeof s!=="number")return H.y(s)
o.sa_(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.F(0,a.z)
this.dx=this.am(new V.I(t.a,t.b).m(0,2).l(0,u.ga0()))}this.a5()},
ii:function(a){var u,t,s
H.e(a,"$iq")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.v(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.O()
s=this.y
if(typeof s!=="number")return H.y(s)
u.sR(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.O()
u=this.x
if(typeof u!=="number")return H.y(u)
s.sR(-t*10*u)
this.a5()}},
aQ:function(a,b){var u,t,s
u=this.dy
t=a.e
if(typeof u!=="number")return u.aR()
if(u<t){this.dy=t
s=a.y
this.c.ab(s)
this.b.ab(s)
this.fr=V.bX(this.b.d).m(0,V.hS(this.c.d))}return this.fr},
$ia3:1}
U.du.prototype={
gq:function(){var u=this.r
if(u==null){u=D.M()
this.r=u}return u},
L:function(a){var u=this.r
if(u!=null)u.E(a)},
aY:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.M()
u.e=t
u=t}else u=t
t=this.gh0()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.M()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
h1:function(a){var u,t,s,r
H.e(a,"$iq")
if(!J.A(this.b,this.a.b.c))return
H.c(a,"$ibZ")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){this.d=r
u=new D.B("zoom",u,r,this,[P.r])
u.b=!0
this.L(u)}},
aQ:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.bt(s,s,s,1)}return this.f},
$ia3:1}
M.cC.prototype={
gq:function(){var u=this.f
if(u==null){u=D.M()
this.f=u}return u},
a4:function(a){var u
H.e(a,"$iq")
u=this.f
if(u!=null)u.E(a)},
bM:function(){return this.a4(null)},
hJ:function(a,b){var u,t,s,r,q,p,o,n
u=M.ag
H.f(b,"$ik",[u],"$ak")
for(t=b.length,s=this.ga8(),r={func:1,ret:-1,args:[D.q]},q=[r],p=0;p<b.length;b.length===t||(0,H.x)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.m(s,r)
if(n.a==null)n.san(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.b7(a,b,this,[u])
u.b=!0
this.a4(u)},
hL:function(a,b){var u,t,s
u=M.ag
H.f(b,"$ik",[u],"$ak")
for(t=b.gS(b),s=this.ga8();t.B();)t.gM().gq().w(0,s)
u=new D.b8(a,b,this,[u])
u.b=!0
this.a4(u)},
ak:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.ad(u,u.length,0,[H.t(u,0)]);u.B();){t=u.d
if(t!=null)t.ak(a)}this.e=!1},
$ak:function(){return[M.ag]},
$aS:function(){return[M.ag]},
$iag:1}
M.cI.prototype={
a4:function(a){var u
H.e(a,"$iq")
u=this.x
if(u!=null)u.E(a)},
bM:function(){return this.a4(null)},
hb:function(a,b){var u,t,s,r,q,p,o,n
u=E.af
H.f(b,"$ik",[u],"$ak")
for(t=b.length,s=this.ga8(),r={func:1,ret:-1,args:[D.q]},q=[r],p=0;p<b.length;b.length===t||(0,H.x)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bQ()
n.san(null)
n.sc3(null)
n.c=null
n.d=0
o.z=n}H.m(s,r)
if(n.a==null)n.san(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.b7(a,b,this,[u])
u.b=!0
this.a4(u)},
hd:function(a,b){var u,t,s
u=E.af
H.f(b,"$ik",[u],"$ak")
for(t=b.gS(b),s=this.ga8();t.B();)t.gM().gq().w(0,s)
u=new D.b8(a,b,this,[u])
u.b=!0
this.a4(u)},
saB:function(a){var u,t
if(a==null)a=X.bu(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gq().w(0,this.ga8())
t=this.a
this.a=a
a.gq().h(0,this.ga8())
u=new D.B("camera",t,this.a,this,[X.cB])
u.b=!0
this.a4(u)}},
sbG:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gq().w(0,this.ga8())
t=this.b
this.b=b
b.gq().h(0,this.ga8())
u=new D.B("target",t,this.b,this,[X.dd])
u.b=!0
this.a4(u)}},
sa6:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gq().w(0,this.ga8())
t=this.c
this.c=a
if(a!=null)a.gq().h(0,this.ga8())
u=new D.B("technique",t,this.c,this,[O.bc])
u.b=!0
this.a4(u)}},
gq:function(){var u=this.x
if(u==null){u=D.M()
this.x=u}return u},
ak:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
a2.eI(this.c)
u=this.b
u.toString
t=a2.a
C.b.iZ(t,36160,null)
C.b.ar(t,2884)
C.b.ar(t,2929)
C.b.jf(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.y(s)
o=C.i.al(p*s)
p=q.b
if(typeof r!=="number")return H.y(r)
n=C.i.al(p*r)
p=C.i.al(q.c*s)
a2.c=p
q=C.i.al(q.d*r)
a2.d=q
C.b.k5(t,o,n,p,q)
C.b.j4(t,u.c)
if(u.b){u=u.a
C.b.j3(t,u.a,u.b,u.c,u.d)
m=16640}else m=256
C.b.j2(t,m)
u=this.a
t=a2.c
q=a2.d
p=u.c
l=u.d
k=u.e
j=k-l
i=1/Math.tan(p*0.5)
h=V.aQ(-i/(t/q),0,0,0,0,i,0,0,0,0,k/j,-k*l/j,0,0,1,0)
t=u.a
if(t!=null){g=t.a
if(g!=null)h=g.m(0,h)}a2.cy.eH(h)
t=$.ir
if(t==null){t=V.it()
q=$.iH
if(q==null){q=new V.u(0,1,0)
$.iH=q}p=V.iJ()
f=p.l(0,Math.sqrt(p.v(p)))
q=q.b_(f)
e=q.l(0,Math.sqrt(q.v(q)))
d=f.b_(e)
c=new V.u(t.a,t.b,t.c)
b=e.O(0).v(c)
a=d.O(0).v(c)
a0=f.O(0).v(c)
t=V.aQ(e.a,d.a,f.a,b,e.b,d.b,f.b,a,e.c,d.c,f.c,a0,0,0,0,1)
$.ir=t
a1=t}else a1=t
u=u.b
if(u!=null){g=u.a
if(g!=null)a1=g.m(0,a1)}a2.db.eH(a1)
u=this.c
if(u!=null)u.ab(a2)
for(u=this.d.a,u=new J.ad(u,u.length,0,[H.t(u,0)]);u.B();)u.d.ab(a2)
for(u=this.d.a,u=new J.ad(u,u.length,0,[H.t(u,0)]);u.B();)u.d.ak(a2)
this.a.toString
a2.cy.cJ()
a2.db.cJ()
this.b.toString
a2.eF()},
sfB:function(a,b){this.d=H.f(b,"$iS",[E.af],"$aS")},
$iag:1}
M.ag.prototype={}
A.cv.prototype={}
A.dR.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jh:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
C.b.e3(r.a,r.c)}},
dZ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
C.b.e_(r.a,r.c)}}}
A.cM.prototype={}
A.cX.prototype={
f7:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.bb("")
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
a6.ix(u)
a6.iE(u)
a6.iy(u)
a6.iM(u)
a6.iN(u)
a6.iG(u)
a6.iR(u)
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
u=new P.bb("")
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
q.iB(u)
q.iw(u)
q.iz(u)
q.iC(u)
q.iK(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iI(u)
q.iJ(u)}q.iF(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
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
k=H.b([],[P.w])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.D(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.iA(u)
q.iH(u)
q.iL(u)
q.iO(u)
q.iP(u)
q.iQ(u)
q.iD(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.w])
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
i="vec4("+C.a.D(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.es(s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.c(this.y.k(0,"invViewMat"),"$iab")
if(t)this.dy=H.c(this.y.k(0,"objMat"),"$iab")
if(r)this.fr=H.c(this.y.k(0,"viewObjMat"),"$iab")
this.fy=H.c(this.y.k(0,"projViewObjMat"),"$iab")
if(a6.x2)this.k1=H.c(this.y.k(0,"txt2DMat"),"$ic9")
if(a6.y1)this.k2=H.c(this.y.k(0,"txtCubeMat"),"$iab")
if(a6.y2)this.k3=H.c(this.y.k(0,"colorMat"),"$iab")
this.sfu(H.b([],[A.ab]))
t=a6.as
if(t>0){this.k4=H.e(this.y.k(0,"bendMatCount"),"$iG")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.n(P.l("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.c(g,"$iab"))}}t=a6.a
if(t!==C.c){this.r2=H.c(this.y.k(0,"emissionClr"),"$iD")
switch(t){case C.c:break
case C.f:break
case C.d:this.rx=H.c(this.y.k(0,"emissionTxt"),"$iai")
this.x1=H.c(this.y.k(0,"nullEmissionTxt"),"$iG")
break
case C.e:this.ry=H.c(this.y.k(0,"emissionTxt"),"$iaj")
this.x1=H.c(this.y.k(0,"nullEmissionTxt"),"$iG")
break}}t=a6.b
if(t!==C.c){this.x2=H.c(this.y.k(0,"ambientClr"),"$iD")
switch(t){case C.c:break
case C.f:break
case C.d:this.y1=H.c(this.y.k(0,"ambientTxt"),"$iai")
this.as=H.c(this.y.k(0,"nullAmbientTxt"),"$iG")
break
case C.e:this.y2=H.c(this.y.k(0,"ambientTxt"),"$iaj")
this.as=H.c(this.y.k(0,"nullAmbientTxt"),"$iG")
break}}t=a6.c
if(t!==C.c){this.aj=H.c(this.y.k(0,"diffuseClr"),"$iD")
switch(t){case C.c:break
case C.f:break
case C.d:this.bn=H.c(this.y.k(0,"diffuseTxt"),"$iai")
this.bo=H.c(this.y.k(0,"nullDiffuseTxt"),"$iG")
break
case C.e:this.e4=H.c(this.y.k(0,"diffuseTxt"),"$iaj")
this.bo=H.c(this.y.k(0,"nullDiffuseTxt"),"$iG")
break}}t=a6.d
if(t!==C.c){this.bp=H.c(this.y.k(0,"invDiffuseClr"),"$iD")
switch(t){case C.c:break
case C.f:break
case C.d:this.e5=H.c(this.y.k(0,"invDiffuseTxt"),"$iai")
this.bq=H.c(this.y.k(0,"nullInvDiffuseTxt"),"$iG")
break
case C.e:this.e6=H.c(this.y.k(0,"invDiffuseTxt"),"$iaj")
this.bq=H.c(this.y.k(0,"nullInvDiffuseTxt"),"$iG")
break}}t=a6.e
if(t!==C.c){this.bt=H.c(this.y.k(0,"shininess"),"$iQ")
this.br=H.c(this.y.k(0,"specularClr"),"$iD")
switch(t){case C.c:break
case C.f:break
case C.d:this.e7=H.c(this.y.k(0,"specularTxt"),"$iai")
this.bs=H.c(this.y.k(0,"nullSpecularTxt"),"$iG")
break
case C.e:this.e8=H.c(this.y.k(0,"specularTxt"),"$iaj")
this.bs=H.c(this.y.k(0,"nullSpecularTxt"),"$iG")
break}}switch(a6.f){case C.c:break
case C.f:break
case C.d:this.e9=H.c(this.y.k(0,"bumpTxt"),"$iai")
this.bu=H.c(this.y.k(0,"nullBumpTxt"),"$iG")
break
case C.e:this.ea=H.c(this.y.k(0,"bumpTxt"),"$iaj")
this.bu=H.c(this.y.k(0,"nullBumpTxt"),"$iG")
break}if(a6.dy){this.eb=H.c(this.y.k(0,"envSampler"),"$iaj")
this.ec=H.c(this.y.k(0,"nullEnvTxt"),"$iG")
t=a6.r
if(t!==C.c){this.bv=H.c(this.y.k(0,"reflectClr"),"$iD")
switch(t){case C.c:break
case C.f:break
case C.d:this.ed=H.c(this.y.k(0,"reflectTxt"),"$iai")
this.bw=H.c(this.y.k(0,"nullReflectTxt"),"$iG")
break
case C.e:this.ee=H.c(this.y.k(0,"reflectTxt"),"$iaj")
this.bw=H.c(this.y.k(0,"nullReflectTxt"),"$iG")
break}}t=a6.x
if(t!==C.c){this.bx=H.c(this.y.k(0,"refraction"),"$iQ")
this.by=H.c(this.y.k(0,"refractClr"),"$iD")
switch(t){case C.c:break
case C.f:break
case C.d:this.ef=H.c(this.y.k(0,"refractTxt"),"$iai")
this.bz=H.c(this.y.k(0,"nullRefractTxt"),"$iG")
break
case C.e:this.eg=H.c(this.y.k(0,"refractTxt"),"$iaj")
this.bz=H.c(this.y.k(0,"nullRefractTxt"),"$iG")
break}}}t=a6.y
if(t!==C.c){this.bA=H.c(this.y.k(0,"alpha"),"$iQ")
switch(t){case C.c:break
case C.f:break
case C.d:this.eh=H.c(this.y.k(0,"alphaTxt"),"$iai")
this.bB=H.c(this.y.k(0,"nullAlphaTxt"),"$iG")
break
case C.e:this.ei=H.c(this.y.k(0,"alphaTxt"),"$iaj")
this.bB=H.c(this.y.k(0,"nullAlphaTxt"),"$iG")
break}}this.sfH(H.b([],[A.c8]))
this.shS(H.b([],[A.ca]))
this.sia(H.b([],[A.cb]))
this.sip(H.b([],[A.cc]))
this.siq(H.b([],[A.cd]))
this.sir(H.b([],[A.ce]))
if(a6.k2){t=a6.z
if(t>0){this.ej=H.e(this.y.k(0,"dirLightCount"),"$iG")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iD")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iD")
s=this.cu;(s&&C.a).h(s,new A.c8(h,g,f))}}t=a6.Q
if(t>0){this.ek=H.e(this.y.k(0,"pntLightCount"),"$iG")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iD")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iD")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iD")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iQ")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iQ")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iQ")
s=this.cv;(s&&C.a).h(s,new A.ca(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.el=H.e(this.y.k(0,"spotLightCount"),"$iG")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iD")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iD")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iD")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iD")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iQ")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iQ")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iQ")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iQ")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iQ")
s=this.cw;(s&&C.a).h(s,new A.cb(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.em=H.e(this.y.k(0,"txtDirLightCount"),"$iG")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iD")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iD")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iD")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iD")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iD")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iG")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iai")
s=this.cz;(s&&C.a).h(s,new A.cc(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.en=H.e(this.y.k(0,"txtPntLightCount"),"$iG")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iD")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iD")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$ic9")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iD")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iG")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iQ")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iQ")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iQ")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iaj")
s=this.cA;(s&&C.a).h(s,new A.cd(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.eo=H.e(this.y.k(0,"txtSpotLightCount"),"$iG")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iD")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iD")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iD")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iD")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iD")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iG")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iD")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iQ")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iQ")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$iQ")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a3,"$iQ")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a4,"$iQ")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.n(P.l("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a5,"$iai")
s=this.cB;(s&&C.a).h(s,new A.ce(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ah:function(a,b,c){C.b.P(b.a,b.d,1)},
ac:function(a,b,c){C.b.P(b.a,b.d,1)},
sfu:function(a){this.r1=H.f(a,"$ia",[A.ab],"$aa")},
sfH:function(a){this.cu=H.f(a,"$ia",[A.c8],"$aa")},
shS:function(a){this.cv=H.f(a,"$ia",[A.ca],"$aa")},
sia:function(a){this.cw=H.f(a,"$ia",[A.cb],"$aa")},
sip:function(a){this.cz=H.f(a,"$ia",[A.cc],"$aa")},
siq:function(a){this.cA=H.f(a,"$ia",[A.cd],"$aa")},
sir:function(a){this.cB=H.f(a,"$ia",[A.ce],"$aa")}}
A.eF.prototype={
ix:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.as+"];\n"
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
iE:function(a){var u
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
iy:function(a){var u
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
iM:function(a){var u,t
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
iN:function(a){var u,t
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
iG:function(a){var u
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
iR:function(a){var u
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
aw:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.d(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.d_(c,1))+"Txt;\n"
a.a=u
if(b===C.d)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iB:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aw(a,u,"emission")
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
iw:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aw(a,u,"ambient")
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
iz:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aw(a,u,"diffuse")
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
iC:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aw(a,u,"invDiffuse")
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
iK:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aw(a,u,"specular")
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
iF:function(a){var u,t
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
iI:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aw(a,u,"reflect")
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
iJ:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aw(a,u,"refract")
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
iA:function(a){var u,t
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
iH:function(a){var u,t
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
iL:function(a){var u,t
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
iO:function(a){var u,t,s
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
iP:function(a){var u,t,s
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
iQ:function(a){var u,t,s
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
iD:function(a){var u
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
i:function(a){return this.aj}}
A.c8.prototype={}
A.cc.prototype={}
A.ca.prototype={}
A.cd.prototype={}
A.cb.prototype={}
A.ce.prototype={}
A.c2.prototype={
d6:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
es:function(a,b){var u,t,s
this.c=a
this.d=b
this.e=this.dq(a,35633)
this.f=this.dq(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dR(u,t,this.e)
C.b.dR(u,this.r,this.f)
C.b.js(u,this.r)
if(!H.iZ(C.b.bK(u,this.r,35714))){s=C.b.eX(u,this.r)
C.b.jb(u,this.r)
H.n(P.l("Failed to link shader: "+H.j(s)))}this.i3()
this.i5()},
ao:function(a){C.b.cR(a.a,this.r)
this.x.jh()},
dq:function(a,b){var u,t,s
u=this.a
t=C.b.j9(u,b)
C.b.f2(u,t,a)
C.b.j6(u,t)
if(!H.iZ(C.b.eZ(u,t,35713))){s=C.b.eY(u,t)
C.b.jc(u,t)
throw H.h(P.l("Error compiling shader '"+H.j(t)+"': "+H.j(s)))}return t},
i3:function(){var u,t,s,r,q,p
u=H.b([],[A.cv])
t=this.a
s=H.a6(C.b.bK(t,this.r,35721))
if(typeof s!=="number")return H.y(s)
r=0
for(;r<s;++r){q=C.b.eT(t,this.r,r)
p=C.b.eV(t,this.r,q.name)
C.a.h(u,new A.cv(t,q.name,p))}this.x=new A.dR(u)},
i5:function(){var u,t,s,r,q,p
u=H.b([],[A.dl])
t=this.a
s=H.a6(C.b.bK(t,this.r,35718))
if(typeof s!=="number")return H.y(s)
r=0
for(;r<s;++r){q=C.b.eU(t,this.r,r)
p=C.b.f_(t,this.r,q.name)
C.a.h(u,this.ja(q.type,q.size,q.name,p))}this.y=new A.fq(u)},
aH:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.G(u,t,b,c)
else return A.hW(u,t,b,a,c)},
fE:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ai(u,t,b,c)
else return A.hW(u,t,b,a,c)},
fF:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aj(u,t,b,c)
else return A.hW(u,t,b,a,c)},
bj:function(a,b){return new P.dB(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
ja:function(a,b,c,d){switch(a){case 5120:return this.aH(b,c,d)
case 5121:return this.aH(b,c,d)
case 5122:return this.aH(b,c,d)
case 5123:return this.aH(b,c,d)
case 5124:return this.aH(b,c,d)
case 5125:return this.aH(b,c,d)
case 5126:return new A.Q(this.a,this.r,c,d)
case 35664:return new A.fm(this.a,this.r,c,d)
case 35665:return new A.D(this.a,this.r,c,d)
case 35666:return new A.c7(this.a,this.r,c,d)
case 35667:return new A.fn(this.a,this.r,c,d)
case 35668:return new A.fo(this.a,this.r,c,d)
case 35669:return new A.fp(this.a,this.r,c,d)
case 35674:return new A.fr(this.a,this.r,c,d)
case 35675:return new A.c9(this.a,this.r,c,d)
case 35676:return new A.ab(this.a,this.r,c,d)
case 35678:return this.fE(b,c,d)
case 35680:return this.fF(b,c,d)
case 35670:throw H.h(this.bj("BOOL",c))
case 35671:throw H.h(this.bj("BOOL_VEC2",c))
case 35672:throw H.h(this.bj("BOOL_VEC3",c))
case 35673:throw H.h(this.bj("BOOL_VEC4",c))
default:throw H.h(P.l("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.bn.prototype={
i:function(a){return this.b}}
A.dl.prototype={}
A.fq.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
k:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.l("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.J()},
jn:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r)s+=u[r].i(0)+a
return s},
J:function(){return this.jn("\n")}}
A.G.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.fn.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.fo.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.fp.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.fl.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
sis:function(a){this.e=H.f(a,"$ia",[P.v],"$aa")}}
A.Q.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.fm.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.D.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.c7.prototype={
cV:function(a){return C.b.k_(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.fr.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.c9.prototype={
a7:function(a){var u=new Float32Array(H.cn(H.f(a,"$ia",[P.r],"$aa")))
C.b.eO(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.ab.prototype={
a7:function(a){var u=new Float32Array(H.cn(H.f(a,"$ia",[P.r],"$aa")))
C.b.eP(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.ai.prototype={
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.aj.prototype={
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.hf.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cE(u.b,b).cE(u.d.cE(u.c,b),c)
a.sa_(0,new V.T(t.a,t.b,t.c))
a.scO(t.l(0,Math.sqrt(t.v(t))))
u=1-b
s=1-c
s=new V.as(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.A(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.N()}},
$S:32}
F.hl.prototype={
$1:function(a){return 1},
$S:33}
F.P.prototype={
b0:function(){if(!this.gb1()){C.a.w(this.a.a.d.b,this)
this.a.a.N()}this.c7()
this.c8()
this.hW()},
aW:function(a){this.a=a
C.a.h(a.d.b,this)},
aX:function(a){this.b=a
C.a.h(a.d.c,this)},
dJ:function(a){this.c=a
C.a.h(a.d.d,this)},
c7:function(){var u=this.a
if(u!=null){C.a.w(u.d.b,this)
this.a=null}},
c8:function(){var u=this.b
if(u!=null){C.a.w(u.d.c,this)
this.b=null}},
hW:function(){var u=this.c
if(u!=null){C.a.w(u.d.d,this)
this.c=null}},
gb1:function(){return this.a==null||this.b==null||this.c==null},
ft:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.bz()
if(t!=null)q=q.C(0,t)
if(s!=null)q=q.C(0,s)
if(r!=null)q=q.C(0,r)
if(q.ev())return
return q.l(0,Math.sqrt(q.v(q)))},
fA:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.F(0,t)
u=new V.u(u.a,u.b,u.c)
q=u.l(0,Math.sqrt(u.v(u)))
u=r.F(0,t)
u=new V.u(u.a,u.b,u.c)
u=q.b_(u.l(0,Math.sqrt(u.v(u))))
return u.l(0,Math.sqrt(u.v(u)))},
cn:function(){if(this.d!=null)return!0
var u=this.ft()
if(u==null){u=this.fA()
if(u==null)return!1}this.d=u
this.a.a.N()
return!0},
fs:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.bz()
if(t!=null)q=q.C(0,t)
if(s!=null)q=q.C(0,s)
if(r!=null)q=q.C(0,r)
if(q.ev())return
return q.l(0,Math.sqrt(q.v(q)))},
fz:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
u=new V.u(u.a,u.b,u.c)
h=u.l(0,Math.sqrt(u.v(u)))
if(j.a-k.a<0)h=h.O(0)}else{g=(u-l.b)/i
u=m.F(0,p)
u=new V.T(u.a*g,u.b*g,u.c*g).C(0,p).F(0,s)
u=new V.u(u.a,u.b,u.c)
h=u.l(0,Math.sqrt(u.v(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.O(0)}u=this.d
if(u!=null){f=u.l(0,Math.sqrt(u.v(u)))
u=f.b_(h)
u=u.l(0,Math.sqrt(u.v(u))).b_(f)
h=u.l(0,Math.sqrt(u.v(u)))}return h},
cm:function(){if(this.e!=null)return!0
var u=this.fs()
if(u==null){u=this.fz()
if(u==null)return!1}this.e=u
this.a.a.N()
return!0},
aG:function(a,b){var u=b.a
if(u==null)throw H.h(P.l("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.h(P.l("May not replace a face's vertex with a vertex attached to a different shape."))},
gj5:function(){if(J.A(this.a,this.b))return!0
if(J.A(this.b,this.c))return!0
if(J.A(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var u,t
if(this.gb1())return a+"disposed"
u=a+C.j.ag(J.ao(this.a.e),0)+", "+C.j.ag(J.ao(this.b.e),0)+", "+C.j.ag(J.ao(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
J:function(){return this.A("")}}
F.e7.prototype={}
F.f4.prototype={
aP:function(a,b,c){var u,t
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
F.a7.prototype={
b0:function(){if(!this.gb1()){C.a.w(this.a.a.c.b,this)
this.a.a.N()}this.c7()
this.c8()},
aW:function(a){this.a=a
C.a.h(a.c.b,this)},
aX:function(a){this.b=a
C.a.h(a.c.c,this)},
c7:function(){var u=this.a
if(u!=null){C.a.w(u.c.b,this)
this.a=null}},
c8:function(){var u=this.b
if(u!=null){C.a.w(u.c.c,this)
this.b=null}},
gb1:function(){return this.a==null||this.b==null},
aG:function(a,b){var u=b.a
if(u==null)throw H.h(P.l("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.h(P.l("May not replace a line's vertex with a vertex attached to a different shape."))},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){if(this.gb1())return a+"disposed"
return a+C.j.ag(J.ao(this.a.e),0)+", "+C.j.ag(J.ao(this.b.e),0)},
J:function(){return this.A("")}}
F.es.prototype={}
F.fk.prototype={
aP:function(a,b,c){var u,t
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
F.ba.prototype={
i2:function(a){this.a=a
C.a.h(a.b.b,this)},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.ag(J.ao(u.e),0)},
J:function(){return this.A("")}}
F.ah.prototype={
gq:function(){var u=this.e
if(u==null){u=D.M()
this.e=u}return u},
aC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.n()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){q=u[r]
this.a.h(0,q.cq())}this.a.n()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.n()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
m=o[n]
this.b.a.a.h(0,m)
F.jR(m)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.n()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.C()
o+=t
n=n.c
if(o>=n.length)return H.d(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.hR(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.n()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.C()
o+=t
n=n.c
if(o>=n.length)return H.d(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.n()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.bR(k,j,h)}u=this.e
if(u!=null)u.at()},
aq:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aq()||!1
if(!this.a.aq())t=!1
u=this.e
if(u!=null)u.at()
return t},
aM:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aM()||!1
if(!this.a.aM())t=!1
u=this.e
if(u!=null)u.at()
return t},
bl:function(){var u=this.e
if(u!=null)++u.d
this.a.bl()
u=this.e
if(u!=null)u.at()
return!0},
jj:function(a,b,c){var u,t,s,r
u=this.a.c.length
for(t=c;t<u;++t){s=this.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
if(b.aP(0,a,r))return r}return},
ji:function(a,b){return this.jj(a,b,0)},
hY:function(a,b){var u,t,s,r,q,p
H.f(b,"$ia",[F.J],"$aa")
this.a.h(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.x)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.n(P.l("May not replace a face's vertex when the point has been disposed."))
if(J.A(q,s)){r.aG(s,a)
q=r.a
if(q!=null){C.a.w(q.d.b,r)
r.a=null}r.a=a
C.a.h(a.d.b,r)
p=1}else p=0
if(J.A(r.b,s)){r.aG(s,a)
q=r.b
if(q!=null){C.a.w(q.d.c,r)
r.b=null}r.b=a
C.a.h(a.d.c,r);++p}if(J.A(r.c,s)){r.aG(s,a)
q=r.c
if(q!=null){C.a.w(q.d.d,r)
r.c=null}r.c=a
C.a.h(a.d.d,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.E(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null)H.n(P.l("May not replace a line's vertex when the point has been disposed."))
if(J.A(q,s)){r.aG(s,a)
q=r.a
if(q!=null){C.a.w(q.c.b,r)
r.a=null}r.a=a
C.a.h(a.c.b,r)
p=1}else p=0
if(J.A(r.b,s)){r.aG(s,a)
q=r.b
if(q!=null){C.a.w(q.c.c,r)
r.b=null}r.b=a
C.a.h(a.c.c,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.E(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.n(P.l("May not replace a point's vertex when the point has been disposed."))
if(J.A(q,s)){if(a.a==null)H.n(P.l("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.a.w(q.b.b,r)
r.a=null}r.a=a
C.a.h(a.b.b,r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.E(null)}}this.a.w(0,s)}},
jv:function(a,b){var u,t,s,r,q,p,o,n
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.t(u,0)])
for(u=[F.J];t.length!==0;){s=C.a.gjl(t)
C.a.jO(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.x)(t),++p){o=t[p]
if(o!=null&&a.aP(0,s,o)){C.a.h(r,o)
C.a.w(t,o)}}if(r.length>1){n=b.aC(r)
this.hY(n,r)
C.a.h(t,n)}}}this.a.n()
this.c.cK()
this.d.cK()
this.b.jP()
this.c.cL(new F.fk())
this.d.cL(new F.f4())
u=this.e
if(u!=null)u.at()},
dU:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aI()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.aH().a)!==0)++r
if((s&$.aG().a)!==0)++r
if((s&$.b1().a)!==0)++r
if((s&$.b2().a)!==0)++r
if((s&$.bk().a)!==0)++r
if((s&$.cs().a)!==0)++r
if((s&$.bG().a)!==0)++r
if((s&$.b0().a)!==0)++r
q=a1.gcZ(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.r
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.cy])
for(m=0,l=0;l<r;++l){k=a1.iX(l)
j=k.gcZ(k)
C.a.a1(n,l,new Z.cy(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.d(t,i)
h=t[i].jt(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.a1(o,g,h[f]);++g}}m+=j}H.f(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.ap(t,34962,e)
C.b.dT(t,34962,new Float32Array(H.cn(o)),35044)
C.b.ap(t,34962,null)
d=new Z.b3(new Z.dw(34962,e),n,a1)
d.sfR(H.b([],[Z.b6]))
if(this.b.b.length!==0){s=P.v
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.n()
C.a.h(c,b.e)}a=Z.hX(t,34963,H.f(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b6(0,c.length,a))}if(this.c.b.length!==0){s=P.v
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.n()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.d(b,l)
b=b[l].b
b.a.a.n()
C.a.h(c,b.e)}a=Z.hX(t,34963,H.f(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b6(1,c.length,a))}if(this.d.b.length!==0){s=P.v
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.n()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.d(b,l)
b=b[l].b
b.a.a.n()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.d(b,l)
b=b[l].c
b.a.a.n()
C.a.h(c,b.e)}a=Z.hX(t,34963,H.f(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b6(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.w])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.A("   "))}return C.a.D(u,"\n")},
aa:function(a){var u=this.e
if(u!=null)u.E(a)},
N:function(){return this.aa(null)},
$ikW:1}
F.eZ.prototype={
dN:function(a,b,c,d){var u,t
u=this.a
u.a.h(0,b)
u.a.h(0,c)
u.a.h(0,d)
t=new F.P()
u=b.a
if(u==null)H.n(P.l("May not create a face with a first vertex which is not attached to a shape."))
if(u!=c.a||u!=d.a)H.n(P.l("May not create a face with vertices attached to different shapes."))
t.aW(b)
t.aX(c)
t.dJ(d)
C.a.h(t.a.a.d.b,t)
t.a.a.N()
return t},
iS:function(a){var u,t,s,r,q,p,o
H.f(a,"$ia",[F.J],"$aa")
u=H.b([],[F.P])
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
C.a.h(u,F.bR(s,p,o))}}return u},
iT:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.f(c,"$ia",[F.J],"$aa")
u=H.b([],[F.P])
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
C.a.h(u,F.bR(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.bR(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.bR(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.bR(k,h,l))}o=!o}q=!q}return u},
gp:function(a){return this.b.length},
cL:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aP(0,p,n)){p.b0()
break}}}}},
cK:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gj5()
if(t)s.b0()}},
aq:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].cn())s=!1
return s},
aM:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].cm())s=!1
return s},
i:function(a){return this.J()},
A:function(a){var u,t,s,r
u=H.b([],[P.w])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].A(a))
return C.a.D(u,"\n")},
J:function(){return this.A("")},
sfK:function(a){this.b=H.f(a,"$ia",[F.P],"$aa")}}
F.f_.prototype={
cd:function(a,b,c){var u,t
u=this.a
u.a.h(0,b)
u.a.h(0,c)
u=new F.a7()
if(b==null)H.n(P.l("May not create a line with a null start vertex."))
if(c==null)H.n(P.l("May not create a line with a null end vertex."))
t=b.a
if(t==null)H.n(P.l("May not create a line with a start vertex which is not attached to a shape."))
if(t!=c.a)H.n(P.l("May not create a line with vertices attached to different shapes."))
u.aW(b)
u.aX(c)
C.a.h(u.a.a.c.b,u)
u.a.a.N()
return u},
dO:function(a){var u,t,s,r,q,p
H.f(a,"$ia",[F.J],"$aa")
u=H.b([],[F.a7])
t=a.length
if(t>0){for(s=this.a,r=1;r<t;++r){q=r-1
p=a.length
if(q>=p)return H.d(a,q)
q=a[q]
if(r>=p)return H.d(a,r)
p=a[r]
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.hR(q,p))}s=t-1
q=a.length
if(s>=q)return H.d(a,s)
s=a[s]
if(0>=q)return H.d(a,0)
C.a.h(u,this.cd(0,s,a[0]))}return u},
iV:function(a){var u,t,s,r,q
H.f(a,"$ia",[F.J],"$aa")
u=H.b([],[F.a7])
for(t=this.a,s=1;s<64;s+=2){r=a[s-1]
q=a[s]
t.a.h(0,r)
t.a.h(0,q)
C.a.h(u,F.hR(r,q))}return u},
gp:function(a){return this.b.length},
cL:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aP(0,p,n)){p.b0()
break}}}}},
cK:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.A(s.a,s.b)
if(t)s.b0()}},
i:function(a){return this.J()},
A:function(a){var u,t,s,r
u=H.b([],[P.w])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.d(r,s)
C.a.h(u,r[s].A(a+(""+s+". ")))}return C.a.D(u,"\n")},
J:function(){return this.A("")},
sfS:function(a){this.b=H.f(a,"$ia",[F.a7],"$aa")}}
F.f0.prototype={
gp:function(a){return this.b.length},
jP:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.w(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.E(null)}s=t.a
if(s!=null){C.a.w(s.b.b,t)
t.a=null}}}},
i:function(a){return this.J()},
A:function(a){var u,t,s,r
u=H.b([],[P.w])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].A(a))
return C.a.D(u,"\n")},
J:function(){return this.A("")},
sc4:function(a){this.b=H.f(a,"$ia",[F.ba],"$aa")}}
F.J.prototype={
cr:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.be(this.cx,s,p,u,t,r,q,a,o)},
cq:function(){return this.cr(null)},
sa_:function(a,b){var u
if(!J.A(this.f,b)){this.f=b
u=this.a
if(u!=null)u.N()}},
sew:function(a){var u
a=a==null?null:a.l(0,Math.sqrt(a.v(a)))
if(!J.A(this.r,a)){this.r=a
u=this.a
if(u!=null)u.N()}},
sbk:function(a){var u
a=a==null?null:a.l(0,Math.sqrt(a.v(a)))
if(!J.A(this.x,a)){this.x=a
u=this.a
if(u!=null)u.N()}},
scN:function(a){var u
if(!J.A(this.y,a)){this.y=a
u=this.a
if(u!=null)u.N()}},
scO:function(a){var u
if(!J.A(this.z,a)){this.z=a
u=this.a
if(u!=null)u.N()}},
sU:function(a,b){var u
if(!J.A(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.N()}},
seR:function(a){var u
if(this.ch!==a){this.ch=a
u=this.a
if(u!=null)u.N()}},
jt:function(a){var u,t
if(a.u(0,$.aI())){u=this.f
t=[P.r]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.aH())){u=this.r
t=[P.r]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.aG())){u=this.x
t=[P.r]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.b1())){u=this.y
t=[P.r]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.u(0,$.b2())){u=this.z
t=[P.r]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.bk())){u=this.Q
t=[P.r]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.cs())){u=this.Q
if(u==null)return H.b([1,1,1,1],[P.r])
else return u.cP(0)}else if(a.u(0,$.bG()))return H.b([this.ch],[P.r])
else if(a.u(0,$.b0())){u=this.cx
t=[P.r]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.r])},
cn:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.bz()
this.d.Z(0,new F.fH(u))
u=u.a
this.r=u.l(0,Math.sqrt(u.v(u)))
u=this.a
if(u!=null){u.N()
u=this.a.e
if(u!=null)u.at()}return!0},
cm:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.bz()
this.d.Z(0,new F.fG(u))
u=u.a
this.x=u.l(0,Math.sqrt(u.v(u)))
u=this.a
if(u!=null){u.N()
u=this.a.e
if(u!=null)u.at()}return!0},
ep:function(a){var u,t,s,r
u=this.c.b.length
for(t=0;t<u;++t){s=this.c.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.b
s.a.a.n()
s=s.e
a.a.a.n()
if(s==a.e)return r}return},
jm:function(a){var u=this.ep(a)
if(u!=null)return u
return a.ep(this)},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var u,t,s
u=H.b([],[P.w])
C.a.h(u,C.j.ag(J.ao(this.e),0))
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
s=C.a.D(u,", ")
return a+"{"+s+"}"},
J:function(){return this.A("")}}
F.fH.prototype={
$1:function(a){var u,t
H.e(a,"$iP")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:5}
F.fG.prototype={
$1:function(a){var u,t
H.e(a,"$iP")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:5}
F.fx.prototype={
n:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.h(P.l("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.N()
return!0},
iW:function(a,b,c,d,e,f,g,h,i){var u=F.be(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
aL:function(a,b,c,d,e,f){return this.iW(a,null,b,c,null,d,e,f,0)},
X:function(a,b,c){var u=F.be(null,null,null,new V.T(a,b,c),null,null,null,null,0)
this.h(0,u)
return u},
gp:function(a){return this.c.length},
w:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.h(P.l("May not remove a vertex without first making it empty."))
b.a=null
C.a.w(this.c,b)
u.N()
this.b=!0
return!0},
aq:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].cn()
return!0},
aM:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].cm()
return!0},
bl:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.l(0,Math.sqrt(p*p+o*o+n*n))
if(!J.A(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.J()},
A:function(a){var u,t,s,r
this.n()
u=H.b([],[P.w])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].A(a))
return C.a.D(u,"\n")},
J:function(){return this.A("")},
sit:function(a){this.c=H.f(a,"$ia",[F.J],"$aa")}}
F.fy.prototype={
gp:function(a){return this.b.length+this.c.length+this.d.length},
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
Z:function(a,b){H.m(b,{func:1,ret:-1,args:[F.P]})
C.a.Z(this.b,b)
C.a.Z(this.c,new F.fz(this,b))
C.a.Z(this.d,new F.fA(this,b))},
i:function(a){return this.J()},
A:function(a){var u,t,s,r
u=H.b([],[P.w])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].A(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].A(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].A(a))
return C.a.D(u,"\n")},
J:function(){return this.A("")},
sfL:function(a){this.b=H.f(a,"$ia",[F.P],"$aa")},
sfM:function(a){this.c=H.f(a,"$ia",[F.P],"$aa")},
sfN:function(a){this.d=H.f(a,"$ia",[F.P],"$aa")}}
F.fz.prototype={
$1:function(a){H.e(a,"$iP")
if(!J.A(a.a,this.a))this.b.$1(a)},
$S:5}
F.fA.prototype={
$1:function(a){var u
H.e(a,"$iP")
u=this.a
if(!J.A(a.a,u)&&!J.A(a.b,u))this.b.$1(a)},
$S:5}
F.fC.prototype={
gp:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.d(u,s)
return u[s]}else{if(b<0)return H.d(u,b)
return u[b]}},
i:function(a){return this.J()},
A:function(a){var u,t,s,r
u=H.b([],[P.w])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].A(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].A(a))
return C.a.D(u,"\n")},
J:function(){return this.A("")},
sfT:function(a){this.b=H.f(a,"$ia",[F.a7],"$aa")},
sfU:function(a){this.c=H.f(a,"$ia",[F.a7],"$aa")}}
F.fD.prototype={}
F.dv.prototype={
aP:function(a,b,c){return J.A(b.f,c.f)}}
F.fE.prototype={}
F.fB.prototype={
aC:function(a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.f(a4,"$ia",[F.J],"$aa")
for(u=a4.length,t=0,s=null,r=null,q=null,p=0,o=null,n=0,m=null,l=0,k=null,j=0,i=0,h=0;h<u;++h){g=a4[h]
f=g.f
if(f!=null){s=s==null?f:new V.T(s.a+f.a,s.b+f.b,s.c+f.c);++t}e=g.r
if(e!=null)r=r==null?e:new V.u(r.a+e.a,r.b+e.b,r.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.u(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){m=m==null?c:new V.O(m.a+c.a,m.b+c.b);++n}b=g.z
if(b!=null){k=k==null?b:new V.u(k.a+b.a,k.b+b.b,k.c+b.c);++l}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(o==null){a=[a0,a1,a2,a]
o=new V.b_(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
o=new V.b_(o.a+a0,o.b+a1,o.c+a2,o.d+a)}++p}a=g.ch
if(typeof a!=="number")return H.y(a)
i+=a;++j}a3=F.be(null,null,null,null,null,null,null,null,0)
if(t<=0||s==null)a3.sa_(0,null)
else a3.sa_(0,s.l(0,t))
if(r==null)a3.sew(null)
else a3.sew(r.l(0,Math.sqrt(r.v(r))))
if(q==null)a3.sbk(null)
else a3.sbk(q.l(0,Math.sqrt(q.v(q))))
if(n<=0||m==null)a3.scN(null)
else a3.scN(m.l(0,n))
if(l<=0||k==null)a3.scO(null)
else a3.scO(k.l(0,l))
if(p<=0||o==null)a3.sU(0,null)
else{u=o.l(0,p)
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
a3.sU(0,new V.F(a,a0,a1,u))}if(j<=0)a3.seR(0)
else a3.seR(i/j)
return a3}}
F.fF.prototype={
gp:function(a){return this.b.length},
i:function(a){return this.J()},
A:function(a){var u,t,s,r
u=H.b([],[P.w])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].A(a))
return C.a.D(u,"\n")},
J:function(){return this.A("")},
sc4:function(a){this.b=H.f(a,"$ia",[F.ba],"$aa")}}
O.cN.prototype={
gq:function(){var u=this.rx
if(u==null){u=D.M()
this.rx=u}return u},
W:function(a){var u=this.rx
if(u!=null)u.E(a)},
scX:function(a){var u
if(!this.Q){this.Q=!0
u=new D.B("showFilled",!1,!0,this,[P.Z])
u.b=!0
this.W(u)}},
scY:function(a){var u
if(!this.ch){this.ch=!0
u=new D.B("showWireFrame",!1,!0,this,[P.Z])
u.b=!0
this.W(u)}},
sdY:function(a){var u,t
if(!this.c.u(0,a)){u=this.c
this.c=a
t=new D.B("diffuse1",u,a,this,[V.F])
t.b=!0
this.W(t)}},
sdQ:function(a){var u,t
if(!this.d.u(0,a)){u=this.d
this.d=a
t=new D.B("ambient1",u,a,this,[V.F])
t.b=!0
this.W(t)}},
ab:function(a){},
eJ:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.e(a.fr.j(0,"Inspection"),"$icM")
if(u==null){t=a.a
u=new A.cM(t,"Inspection")
u.d6(t,"Inspection")
u.es($.jI,$.jH)
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"normAttr")
u.ch=u.x.j(0,"clrAttr")
u.cx=u.x.j(0,"binmAttr")
u.cy=H.c(u.y.j(0,"lightVec"),"$iD")
u.db=H.c(u.y.j(0,"ambientClr"),"$ic7")
u.dx=H.c(u.y.j(0,"diffuseClr"),"$ic7")
u.dy=H.c(u.y.j(0,"weightScalar"),"$iQ")
u.fr=H.c(u.y.j(0,"viewMat"),"$iab")
u.fx=H.c(u.y.j(0,"viewObjMatrix"),"$iab")
u.fy=H.c(u.y.j(0,"projViewObjMatrix"),"$iab")
a.dP(u)}this.a=u}if(b.e==null){b.d.aq()
b.d.aM()
b.d.bl()
t=new Z.cz()
t.sh_(new H.aN([P.w,Z.b3]))
b.e=t}t=this.a
t.ao(a)
s=this.r2
r=t.dy
C.b.I(r.a,r.d,s)
s=this.b
r=t.cy
r.toString
q=s.a
p=s.b
s=s.c
C.b.t(r.a,r.d,q,p,s)
s=a.db.gH()
p=t.fr
p.toString
p.a7(s.a3(0,!0))
s=a.geQ()
p=t.fx
p.toString
p.a7(s.a3(0,!0))
s=a.geG()
t=t.fy
t.toString
t.a7(s.a3(0,!0))
t=b.e
if(t instanceof Z.cz){s=a.a
C.b.aA(s,1,1)
if(b.c==null){C.b.ct(s,2929)
C.b.ar(s,3042)
C.b.aA(s,1,1)
C.b.ar(s,2929)
C.b.aA(s,770,771)}else{C.b.ar(s,2929)
C.b.ar(s,3042)
C.b.aA(s,770,771)
if(this.Q)this.dE(a,t,b.c,"shapeFill",this.gi7(),this.d,this.c)
C.b.ct(s,2929)
C.b.aA(s,1,1)
if(this.ch)this.dE(a,t,b.c,"wireFrame",this.giu(),this.f,this.e)
C.b.ar(s,2929)
C.b.aA(s,770,771)}}else b.e=null
t=this.a
t.toString
C.b.cR(a.a,null)
t.x.dZ()},
dE:function(a,b,c,d,e,f,g){var u,t
H.m(e,{func:1,ret:F.ah,args:[F.ah]})
u=b.a.j(0,d)
if(u==null){u=this.fw(a,e.$1(c))
b.a.a1(0,d,u)}t=this.a
t.db.cV(f)
t.dx.cV(g)
u.jE(a)},
fw:function(a,b){var u,t,s
u=$.aI()
t=$.aH()
s=b.dU(new Z.dx(a.a),new Z.aF(u.a|t.a|$.aG().a|$.bk().a))
s.ae($.aI()).e=this.a.z.c
s.ae($.aH()).e=this.a.Q.c
s.ae($.bk()).e=this.a.ch.c
s.ae($.aG()).e=this.a.cx.c
return s},
i8:function(a){var u,t,s
u=F.aC()
t=a.a
t.toString
s=H.m(new O.eg(u,new V.F(1,1,1,1)),{func:1,ret:-1,args:[F.J]})
C.a.Z(t.c,s)
s=a.d
s.toString
t=H.m(new O.eh(u),{func:1,ret:-1,args:[F.P]})
C.a.Z(s.b,t)
return u},
dL:function(a,b){var u,t,s,r
u={}
u.a=b
t=F.aC()
u.a=new V.F(0,0.7,1,1)
s=a.a
s.toString
u=H.m(new O.ej(u,t),{func:1,ret:-1,args:[F.J]})
C.a.Z(s.c,u)
u=new O.ei(t)
s=a.c
s.toString
r=H.m(new O.ek(t,u),{func:1,ret:-1,args:[F.a7]})
C.a.Z(s.b,r)
r=a.d
r.toString
u=H.m(new O.el(t,u),{func:1,ret:-1,args:[F.P]})
C.a.Z(r.b,u)
return t},
iv:function(a){return this.dL(a,null)}}
O.eg.prototype={
$1:function(a){var u,t
H.e(a,"$iJ")
u=this.a.a
t=a.cq()
t.sU(0,this.b)
t.sbk(V.bz())
u.h(0,t)},
$S:20}
O.eh.prototype={
$1:function(a){var u,t,s,r,q,p
H.e(a,"$iP")
u=this.a
t=u.a
s=a.a
s.a.a.n()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.n()
t=t.e
q=C.a.j(s.c,t)
t=u.a
s=a.c
s.a.a.n()
s=s.e
p=C.a.j(t.c,s)
u.d.dN(0,r,q,p)},
$S:5}
O.ej.prototype={
$1:function(a){var u,t
H.e(a,"$iJ")
u=this.b.a
t=a.cq()
t.sU(0,this.a.a)
t.sbk(V.bz())
u.h(0,t)},
$S:20}
O.ei.prototype={
$2:function(a,b){if(a.jm(b)==null)this.a.c.cd(0,a,b)},
$S:37}
O.ek.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$ia7")
u=this.a
t=u.a
s=a.a
s.a.a.n()
s=s.e
r=C.a.j(t.c,s)
u=u.a
s=a.b
s.a.a.n()
s=s.e
this.b.$2(r,C.a.j(u.c,s))},
$S:38}
O.el.prototype={
$1:function(a){var u,t,s,r,q,p
H.e(a,"$iP")
u=this.a
t=u.a
s=a.a
s.a.a.n()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.n()
t=t.e
q=C.a.j(s.c,t)
u=u.a
t=a.c
t.a.a.n()
t=t.e
p=C.a.j(u.c,t)
t=this.b
t.$2(r,q)
t.$2(q,p)
t.$2(p,r)},
$S:5}
O.cY.prototype={
gq:function(){var u=this.dy
if(u==null){u=D.M()
this.dy=u}return u},
W:function(a){var u
H.e(a,"$iq")
u=this.dy
if(u!=null)u.E(a)},
fm:function(){return this.W(null)},
dF:function(a){H.e(a,"$iq")
this.a=null
this.W(a)},
i0:function(){return this.dF(null)},
h5:function(a,b){var u=V.a8
u=new D.b7(a,H.f(b,"$ik",[u],"$ak"),this,[u])
u.b=!0
this.W(u)},
h7:function(a,b){var u=V.a8
u=new D.b8(a,H.f(b,"$ik",[u],"$ak"),this,[u])
u.b=!0
this.W(u)},
dl:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.h.a9(u.e.length+3,4)*4
s=C.h.a9(u.f.length+3,4)*4
r=C.h.a9(u.r.length+3,4)*4
q=C.h.a9(u.x.length+3,4)*4
p=C.h.a9(u.y.length+3,4)*4
o=C.h.a9(u.z.length+3,4)*4
n=C.h.a9(this.e.a.length+3,4)*4
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
a7=$.aI()
if(a0){b=$.aH()
a7=new Z.aF(a7.a|b.a)}if(a1){b=$.aG()
a7=new Z.aF(a7.a|b.a)}if(a2){b=$.b1()
a7=new Z.aF(a7.a|b.a)}if(a3){b=$.b2()
a7=new Z.aF(a7.a|b.a)}if(a5){b=$.b0()
a7=new Z.aF(a7.a|b.a)}return new A.eF(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
T:function(a,b){H.f(a,"$ia",[T.de],"$aa")},
ab:function(a){var u
for(u=this.dx.a,u=new J.ad(u,u.length,0,[H.t(u,0)]);u.B();)u.d.ab(a)},
eJ:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dl()
t=H.e(a2.fr.j(0,u.aj),"$icX")
if(t==null){t=A.jQ(u,a2.a)
a2.dP(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bn
u=a3.e
if(!(u instanceof Z.b3)){a3.e=null
u=null}if(u==null||!u.d.u(0,r)){u=s.r1
if(u)a3.d.aq()
q=s.r2
if(q)a3.d.aM()
p=s.ry
if(p)a3.d.bl()
o=a3.d.dU(new Z.dx(a2.a),r)
o.ae($.aI()).e=this.a.Q.c
if(u)o.ae($.aH()).e=this.a.cx.c
if(q)o.ae($.aG()).e=this.a.ch.c
if(s.rx)o.ae($.b1()).e=this.a.cy.c
if(p)o.ae($.b2()).e=this.a.db.c
if(s.x1)o.ae($.b0()).e=this.a.dx.c
a3.e=o}u=T.de
n=H.b([],[u])
this.a.ao(a2)
if(s.fx){q=this.a
p=a2.dx.gH()
q=q.dy
q.toString
q.a7(p.a3(0,!0))}if(s.fy){q=this.a
p=a2.geQ()
q=q.fr
q.toString
q.a7(p.a3(0,!0))}q=this.a
p=a2.geG()
q=q.fy
q.toString
q.a7(p.a3(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.a7(C.o.a3(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.a7(C.o.a3(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.a7(C.o.a3(p,!0))}if(s.as>0){m=this.e.a.length
q=this.a.k4
C.b.P(q.a,q.d,m)
for(q=[P.r],l=0;l<m;++l){p=this.a
k=this.e.a
if(l>=k.length)return H.d(k,l)
k=k[l]
p.toString
H.e(k,"$ia8")
p=p.r1
if(l>=p.length)return H.d(p,l)
p=p[l]
j=new Float32Array(H.cn(H.f(k.a3(0,!0),"$ia",q,"$aa")))
C.b.eP(p.a,p.d,!1,j)}}switch(s.a){case C.c:break
case C.f:q=this.a
p=this.f.f
q=q.r2
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
break
case C.d:this.T(n,this.f.d)
q=this.a
p=this.f.d
q.ah(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break
case C.e:this.T(n,this.f.e)
q=this.a
p=this.f.e
q.ac(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.f:q=this.a
p=this.r.f
q=q.x2
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
break
case C.d:this.T(n,this.r.d)
q=this.a
p=this.r.d
q.ah(q.y1,q.as,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break
case C.e:this.T(n,this.r.e)
q=this.a
p=this.r.e
q.ac(q.y2,q.as,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break}switch(s.c){case C.c:break
case C.f:q=this.a
p=this.x.f
q=q.aj
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
break
case C.d:this.T(n,this.x.d)
q=this.a
p=this.x.d
q.ah(q.bn,q.bo,p)
p=this.a
q=this.x.f
p=p.aj
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break
case C.e:this.T(n,this.x.e)
q=this.a
p=this.x.e
q.ac(q.e4,q.bo,p)
p=this.a
q=this.x.f
p=p.aj
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break}switch(s.d){case C.c:break
case C.f:q=this.a
p=this.y.f
q=q.bp
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
break
case C.d:this.T(n,this.y.d)
q=this.a
p=this.y.d
q.ah(q.e5,q.bq,p)
p=this.a
q=this.y.f
p=p.bp
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break
case C.e:this.T(n,this.y.e)
q=this.a
p=this.y.e
q.ac(q.e6,q.bq,p)
p=this.a
q=this.y.f
p=p.bp
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break}switch(s.e){case C.c:break
case C.f:q=this.a
p=this.z.f
q=q.br
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
p=this.a
i=this.z.ch
p=p.bt
C.b.I(p.a,p.d,i)
break
case C.d:this.T(n,this.z.d)
q=this.a
p=this.z.d
q.ah(q.e7,q.bs,p)
p=this.a
q=this.z.f
p=p.br
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
q=this.a
i=this.z.ch
q=q.bt
C.b.I(q.a,q.d,i)
break
case C.e:this.T(n,this.z.e)
q=this.a
p=this.z.e
q.ac(q.e8,q.bs,p)
p=this.a
q=this.z.f
p=p.br
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
q=this.a
i=this.z.ch
q=q.bt
C.b.I(q.a,q.d,i)
break}if(s.z>0){m=this.dx.e.length
q=this.a.ej
C.b.P(q.a,q.d,m)
h=a2.db.gH()
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.x)(q),++f){e=q[f]
k=this.a.cu
if(g>=k.length)return H.d(k,g)
d=k[g]
k=h.eN(e.gbm(e))
i=k.a
c=k.b
b=k.c
b=k.l(0,Math.sqrt(i*i+c*c+b*b))
c=d.b
i=b.a
k=b.b
b=b.c
C.b.t(c.a,c.d,i,k,b)
b=e.gU(e)
k=d.c
C.b.t(k.a,k.d,b.a,b.b,b.c);++g}}if(s.Q>0){m=this.dx.f.length
q=this.a.ek
C.b.P(q.a,q.d,m)
h=a2.db.gH()
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.x)(q),++f){e=q[f]
k=this.a.cv
if(g>=k.length)return H.d(k,g)
d=k[g]
k=e.gb9(e)
i=d.b
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=h.bc(e.gb9(e))
i=d.c
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gU(e)
i=d.d
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gci()
i=d.e
C.b.I(i.a,i.d,k)
k=e.gcj()
i=d.f
C.b.I(i.a,i.d,k)
k=e.gck()
i=d.r
C.b.I(i.a,i.d,k);++g}}if(s.ch>0){m=this.dx.r.length
q=this.a.el
C.b.P(q.a,q.d,m)
h=a2.db.gH()
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.x)(q),++f){e=q[f]
k=this.a.cw
if(g>=k.length)return H.d(k,g)
d=k[g]
k=e.gb9(e)
i=d.b
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gbm(e).k9()
i=d.c
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=h.bc(e.gb9(e))
i=d.d
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gU(e)
i=d.e
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gk8()
i=d.f
C.b.I(i.a,i.d,k)
k=e.gk7()
i=d.r
C.b.I(i.a,i.d,k)
k=e.gci()
i=d.x
C.b.I(i.a,i.d,k)
k=e.gcj()
i=d.y
C.b.I(i.a,i.d,k)
k=e.gck()
i=d.z
C.b.I(i.a,i.d,k);++g}}if(s.cx>0){m=this.dx.x.length
q=this.a.em
C.b.P(q.a,q.d,m)
h=a2.db.gH()
for(q=this.dx.x,p=q.length,k=[u],g=0,f=0;f<q.length;q.length===p||(0,H.x)(q),++f){e=q[f]
i=this.a.cz
if(g>=i.length)return H.d(i,g)
d=i[g]
i=e.gba()
H.f(n,"$ia",k,"$aa")
if(!C.a.aZ(n,i)){i.sb3(0,n.length)
C.a.h(n,i)}i=e.gbm(e)
c=d.d
C.b.t(c.a,c.d,i.a,i.b,i.c)
i=e.gaE()
c=d.b
C.b.t(c.a,c.d,i.a,i.b,i.c)
i=e.gbF(e)
c=d.c
C.b.t(c.a,c.d,i.a,i.b,i.c)
i=h.eN(e.gbm(e))
c=i.a
b=i.b
a=i.c
a=i.l(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
i=a.b
a=a.c
C.b.t(b.a,b.d,c,i,a)
a=e.gU(e)
i=d.f
C.b.t(i.a,i.d,a.a,a.b,a.c)
a=e.gba()
i=a.gb5(a)
if(!i){i=d.x
C.b.P(i.a,i.d,1)}else{i=d.r
c=a.gb5(a)
b=i.a
i=i.d
if(!c)C.b.P(b,i,0)
else C.b.P(b,i,a.gb3(a))
i=d.x
C.b.P(i.a,i.d,0)}++g}}if(s.cy>0){m=this.dx.y.length
q=this.a.en
C.b.P(q.a,q.d,m)
h=a2.db.gH()
for(q=this.dx.y,p=q.length,k=[P.r],i=[u],g=0,f=0;f<q.length;q.length===p||(0,H.x)(q),++f){e=q[f]
c=this.a.cA
if(g>=c.length)return H.d(c,g)
d=c[g]
c=e.gba()
H.f(n,"$ia",i,"$aa")
if(!C.a.aZ(n,c)){c.sb3(0,n.length)
C.a.h(n,c)}a0=h.m(0,e.gH())
c=e.gH()
b=$.c0
if(b==null){b=new V.T(0,0,0)
$.c0=b}b=c.bc(b)
c=d.b
C.b.t(c.a,c.d,b.a,b.b,b.c)
c=$.c0
if(c==null){c=new V.T(0,0,0)
$.c0=c}c=a0.bc(c)
b=d.c
C.b.t(b.a,b.d,c.a,c.b,c.c)
c=a0.eu()
b=d.d
j=new Float32Array(H.cn(H.f(new V.d_(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).a3(0,!0),"$ia",k,"$aa")))
C.b.eO(b.a,b.d,!1,j)
b=e.gU(e)
c=d.e
C.b.t(c.a,c.d,b.a,b.b,b.c)
b=e.gba()
c=b.gb5(b)
if(!c){c=d.r
C.b.P(c.a,c.d,1)}else{c=d.f
a=b.gb5(b)
a1=c.a
c=c.d
if(!a)C.b.P(a1,c,0)
else C.b.P(a1,c,b.gb3(b))
c=d.r
C.b.P(c.a,c.d,0)}c=e.gci()
b=d.x
C.b.I(b.a,b.d,c)
c=e.gcj()
b=d.y
C.b.I(b.a,b.d,c)
c=e.gck()
b=d.z
C.b.I(b.a,b.d,c);++g}}if(s.db>0){m=this.dx.z.length
q=this.a.eo
C.b.P(q.a,q.d,m)
h=a2.db.gH()
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.x)(q),++f){e=q[f]
k=this.a.cB
if(g>=k.length)return H.d(k,g)
d=k[g]
k=e.gba()
H.f(n,"$ia",u,"$aa")
if(!C.a.aZ(n,k)){k.sb3(0,n.length)
C.a.h(n,k)}k=e.gb9(e)
i=d.b
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gbm(e)
i=d.c
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gaE()
i=d.d
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gbF(e)
i=d.e
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=h.bc(e.gb9(e))
i=d.f
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gba()
i=k.gb5(k)
if(!i){k=d.x
C.b.P(k.a,k.d,1)}else{i=d.r
c=k.gb5(k)
b=i.a
i=i.d
if(!c)C.b.P(b,i,0)
else C.b.P(b,i,k.gb3(k))
k=d.x
C.b.P(k.a,k.d,0)}k=e.gU(e)
i=d.y
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gka()
i=d.z
C.b.I(i.a,i.d,k)
k=e.gkb()
i=d.Q
C.b.I(i.a,i.d,k)
k=e.gci()
i=d.ch
C.b.I(i.a,i.d,k)
k=e.gcj()
i=d.cx
C.b.I(i.a,i.d,k)
k=e.gck()
i=d.cy
C.b.I(i.a,i.d,k);++g}}}switch(s.f){case C.c:break
case C.f:break
case C.d:this.T(n,this.Q.d)
u=this.a
q=this.Q.d
u.ah(u.e9,u.bu,q)
break
case C.e:this.T(n,this.Q.e)
u=this.a
q=this.Q.e
u.ac(u.ea,u.bu,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db.gH().eu()
a2.Q=q}u=u.id
u.toString
u.a7(q.a3(0,!0))}if(s.dy){this.T(n,this.ch)
u=this.a
q=this.ch
u.ac(u.eb,u.ec,q)
switch(s.r){case C.c:break
case C.f:u=this.a
q=this.cx.f
u=u.bv
u.toString
p=q.a
k=q.b
q=q.c
C.b.t(u.a,u.d,p,k,q)
break
case C.d:this.T(n,this.cx.d)
u=this.a
q=this.cx.d
u.ah(u.ed,u.bw,q)
q=this.a
u=this.cx.f
q=q.bv
q.toString
p=u.a
k=u.b
u=u.c
C.b.t(q.a,q.d,p,k,u)
break
case C.e:this.T(n,this.cx.e)
u=this.a
q=this.cx.e
u.ac(u.ee,u.bw,q)
q=this.a
u=this.cx.f
q=q.bv
q.toString
p=u.a
k=u.b
u=u.c
C.b.t(q.a,q.d,p,k,u)
break}switch(s.x){case C.c:break
case C.f:u=this.a
q=this.cy.f
u=u.by
u.toString
p=q.a
k=q.b
q=q.c
C.b.t(u.a,u.d,p,k,q)
q=this.a
k=this.cy.ch
q=q.bx
C.b.I(q.a,q.d,k)
break
case C.d:this.T(n,this.cy.d)
u=this.a
q=this.cy.d
u.ah(u.ef,u.bz,q)
q=this.a
u=this.cy.f
q=q.by
q.toString
p=u.a
k=u.b
u=u.c
C.b.t(q.a,q.d,p,k,u)
u=this.a
k=this.cy.ch
u=u.bx
C.b.I(u.a,u.d,k)
break
case C.e:this.T(n,this.cy.e)
u=this.a
q=this.cy.e
u.ac(u.eg,u.bz,q)
q=this.a
u=this.cy.f
q=q.by
q.toString
p=u.a
k=u.b
u=u.c
C.b.t(q.a,q.d,p,k,u)
u=this.a
k=this.cy.ch
u=u.bx
C.b.I(u.a,u.d,k)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.f:u=this.a
p=this.db.f
u=u.bA
C.b.I(u.a,u.d,p)
break
case C.d:this.T(n,this.db.d)
u=this.a
p=this.db.d
u.ah(u.eh,u.bB,p)
p=this.a
u=this.db.f
p=p.bA
C.b.I(p.a,p.d,u)
break
case C.e:this.T(n,this.db.e)
u=this.a
p=this.db.e
u.ac(u.ei,u.bB,p)
p=this.a
u=this.db.f
p=p.bA
C.b.I(p.a,p.d,u)
break}u=a2.a
C.b.ar(u,3042)
C.b.aA(u,770,771)}for(l=0;l<n.length;++l)n[l].ao(a2)
u=H.c(a3.e,"$ib3")
u.ao(a2)
u.ak(a2)
u.cQ(a2)
if(q)C.b.ct(a2.a,3042)
for(l=0;l<n.length;++l)n[l].cQ(a2)
u=this.a
u.toString
C.b.cR(a2.a,null)
u.x.dZ()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dl().aj},
sfv:function(a){this.e=H.f(a,"$iS",[V.a8],"$aS")}}
O.eD.prototype={
c9:function(a){var u=this.f
if(!(Math.abs(u-a)<$.E().a)){this.f=a
u=new D.B(this.b,u,a,this,[P.r])
u.b=!0
this.a.W(u)}},
ay:function(){this.d2()
this.c9(1)},
sbI:function(a,b){var u
if(b<=0)this.j1(0)
else if(this.c===C.c){this.c=C.f
this.d3()
this.c9(1)
u=this.a
u.a=null
u.W(null)}this.c9(b)}}
O.cZ.prototype={
ay:function(){},
aJ:function(){},
j1:function(a){var u
if(this.c!==C.c){this.c=C.c
u=this.a
u.a=null
u.W(null)}this.ay()
this.a.W(null)}}
O.eE.prototype={}
O.aP.prototype={
ca:function(a){var u,t
if(!J.A(this.f,a)){u=this.f
this.f=a
t=new D.B(this.b+".color",u,a,this,[V.W])
t.b=!0
this.a.W(t)}},
ay:function(){this.d2()
this.ca(new V.W(0,0,0))},
aJ:function(){this.d3()
this.ca(new V.W(1,1,1))},
sU:function(a,b){var u
if(this.c===C.c){this.c=C.f
this.aJ()
u=this.a
u.a=null
u.W(null)}this.ca(b)}}
O.eG.prototype={
dH:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.E().a)){this.ch=a
u=new D.B(this.b+".refraction",u,a,this,[P.r])
u.b=!0
this.a.W(u)}},
ay:function(){this.d4()
this.dH(1)},
aJ:function(){this.d5()
this.dH(1)}}
O.eH.prototype={
dI:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.E().a)){this.ch=a
u=new D.B(this.b+".shininess",u,a,this,[P.r])
u.b=!0
this.a.W(u)}},
ay:function(){this.d4()
this.dI(100)},
aJ:function(){this.d5()
this.dI(100)}}
O.bc.prototype={}
T.de.prototype={}
T.fc.prototype={}
V.dO.prototype={
aO:function(a){return!0},
i:function(a){return"all"},
$iaX:1}
V.aX.prototype={}
V.cW.prototype={
aO:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)if(u[s].aO(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sax:function(a){this.a=H.f(a,"$ia",[V.aX],"$aa")},
$iaX:1}
V.aZ.prototype={
aO:function(a){return!this.f6(a)},
i:function(a){return"!["+this.d1(0)+"]"}}
V.eY.prototype={
f9:function(a){var u,t
if(a.a.length<=0)throw H.h(P.l("May not create a SetMatcher with zero characters."))
u=new H.aN([P.v,P.Z])
for(t=new H.cU(a,a.gp(a),0,[H.ay(a,"V",0)]);t.B();)u.a1(0,t.d,!0)
this.si1(u)},
aO:function(a){return this.a.dX(a)},
i:function(a){var u=this.a
return P.hT(new H.eu(u,[H.t(u,0)]),0,null)},
si1:function(a){this.a=H.f(a,"$iaq",[P.v,P.Z],"$aaq")},
$iaX:1}
V.c3.prototype={
D:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.c6(this.a.K(0,b))
r.sax(H.b([],[V.aX]))
r.c=!1
C.a.h(this.c,r)
return r},
jk:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.aO(a))return r}return},
i:function(a){return this.b},
sio:function(a){this.c=H.f(a,"$ia",[V.c6],"$aa")}}
V.dj.prototype={
i:function(a){var u,t
u=H.jc(this.b,"\n","\\n")
t=H.jc(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.c5.prototype={
i:function(a){return this.b},
shX:function(a){var u=P.w
this.c=H.f(a,"$iaq",[u,u],"$aaq")}}
V.fe.prototype={
K:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.c3(this,b)
u.sio(H.b([],[V.c6]))
u.d=null
this.a.a1(0,b,u)}return u},
bb:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.c5(this,a)
t=P.w
u.shX(new H.aN([t,t]))
this.b.a1(0,a,u)}return u},
jZ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dj])
t=this.c
s=[P.v]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.bf(a,o)
m=t.jk(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.hT(r,0,null)
throw H.h(P.l("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.hT(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dj(j==null?k.b:j,l,o)}++o}}},
sib:function(a){this.a=H.f(a,"$iaq",[P.w,V.c3],"$aaq")},
sig:function(a){this.b=H.f(a,"$iaq",[P.w,V.c5],"$aaq")}}
V.c6.prototype={
i:function(a){return this.b.b+": "+this.d1(0)}}
X.cB.prototype={$iaY:1}
X.ed.prototype={
gq:function(){var u=this.x
if(u==null){u=D.M()
this.x=u}return u}}
X.d5.prototype={
gq:function(){var u=this.f
if(u==null){u=D.M()
this.f=u}return u},
au:function(a){var u
H.e(a,"$iq")
u=this.f
if(u!=null)u.E(a)},
fo:function(){return this.au(null)},
sV:function(a){var u,t
if(!J.A(this.b,a)){u=this.b
if(u!=null)u.gq().w(0,this.gbe())
t=this.b
this.b=a
if(a!=null)a.gq().h(0,this.gbe())
u=new D.B("mover",t,this.b,this,[U.a3])
u.b=!0
this.au(u)}},
saD:function(a){var u,t
if(!J.A(this.a,a)){u=this.a
if(u!=null)u.gq().w(0,this.gbe())
t=this.a
this.a=a
if(a!=null)a.gq().h(0,this.gbe())
u=new D.B("premover",t,this.a,this,[U.a3])
u.b=!0
this.au(u)}},
$iaY:1,
$icB:1}
X.dd.prototype={}
V.f1.prototype={
fa:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.r).Y(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.r.Y(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.Y(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.Y(q,p)}o=u.createElement("div")
this.a=o
C.k.Y(q,o)
this.b=null
o=W.i
W.a5(u,"scroll",H.m(new V.f3(s),{func:1,ret:-1,args:[o]}),!1,o)},
iU:function(a,b,c){var u,t,s,r
a=H.a6(C.h.j0(a,0,4))
if(c.length===0)c=P.iP(C.v,b,C.q,!1)
u=document.createElement("div")
u.className="textHeader"
u.id=c
t=u.style
s=""+(28-a*3)+"px"
t.fontSize=s
r=W.jw(null)
r.href="#"+c
r.textContent=b
C.k.Y(u,r)
C.k.Y(this.a,u)},
cf:function(a,b){return this.iU(a,b,"")},
ai:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.f(a,"$ia",[P.w],"$aa")
this.i4()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jZ(C.a.jr(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.Y(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.Y(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.Y(t,o)
break
case"Link":n=p.b
if(H.kM(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.X(m[1])
l.textContent=H.X(m[0])
C.k.Y(t,l)}else{k=P.iP(C.v,n,C.q,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.k.Y(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.Y(t,o)
break}}C.k.Y(this.a,t)},
cg:function(a){var u=W.ig(null,null)
u.className="pageLargeCanvas"
u.id=a
C.k.Y(this.a,u)},
i4:function(){var u,t,s,r
if(this.b!=null)return
u=new V.fe()
t=P.w
u.sib(new H.aN([t,V.c3]))
u.sig(new H.aN([t,V.c5]))
u.c=null
u.c=u.K(0,"Start")
t=u.K(0,"Start").D(0,"Bold")
s=V.aa(new H.a0("*"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,"Bold").D(0,"Bold")
s=new V.aZ()
r=[V.aX]
s.sax(H.b([],r))
C.a.h(t.a,s)
t=V.aa(new H.a0("*"))
C.a.h(s.a,t)
t=u.K(0,"Bold").D(0,"BoldEnd")
s=V.aa(new H.a0("*"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,"Start").D(0,"Italic")
s=V.aa(new H.a0("_"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,"Italic").D(0,"Italic")
s=new V.aZ()
s.sax(H.b([],r))
C.a.h(t.a,s)
t=V.aa(new H.a0("_"))
C.a.h(s.a,t)
t=u.K(0,"Italic").D(0,"ItalicEnd")
s=V.aa(new H.a0("_"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,"Start").D(0,"Code")
s=V.aa(new H.a0("`"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,"Code").D(0,"Code")
s=new V.aZ()
s.sax(H.b([],r))
C.a.h(t.a,s)
t=V.aa(new H.a0("`"))
C.a.h(s.a,t)
t=u.K(0,"Code").D(0,"CodeEnd")
s=V.aa(new H.a0("`"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,"Start").D(0,"LinkHead")
s=V.aa(new H.a0("["))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,"LinkHead").D(0,"LinkTail")
s=V.aa(new H.a0("|"))
C.a.h(t.a,s)
s=u.K(0,"LinkHead").D(0,"LinkEnd")
t=V.aa(new H.a0("]"))
C.a.h(s.a,t)
s.c=!0
s=u.K(0,"LinkHead").D(0,"LinkHead")
t=new V.aZ()
t.sax(H.b([],r))
C.a.h(s.a,t)
s=V.aa(new H.a0("|]"))
C.a.h(t.a,s)
s=u.K(0,"LinkTail").D(0,"LinkEnd")
t=V.aa(new H.a0("]"))
C.a.h(s.a,t)
s.c=!0
s=u.K(0,"LinkTail").D(0,"LinkTail")
t=new V.aZ()
t.sax(H.b([],r))
C.a.h(s.a,t)
s=V.aa(new H.a0("|]"))
C.a.h(t.a,s)
C.a.h(u.K(0,"Start").D(0,"Other").a,new V.dO())
s=u.K(0,"Other").D(0,"Other")
t=new V.aZ()
t.sax(H.b([],r))
C.a.h(s.a,t)
s=V.aa(new H.a0("*_`["))
C.a.h(t.a,s)
s=u.K(0,"BoldEnd")
s.d=s.a.bb("Bold")
s=u.K(0,"ItalicEnd")
s.d=s.a.bb("Italic")
s=u.K(0,"CodeEnd")
s.d=s.a.bb("Code")
s=u.K(0,"LinkEnd")
s.d=s.a.bb("Link")
s=u.K(0,"Other")
s.d=s.a.bb("Other")
this.b=u}}
V.f3.prototype={
$1:function(a){P.iC(C.n,new V.f2(this.a))},
$S:39}
V.f2.prototype={
$0:function(){var u,t,s
u=C.i.al(document.documentElement.scrollTop)
t=this.a.style
s=H.j(-0.01*u)+"px"
t.top=s},
$S:3}
M.hx.prototype={
$1:function(a){H.e(a,"$iq")
this.a.b=!0},
$S:1}
M.hy.prototype={
$1:function(a){H.e(a,"$iq")
this.a.b=!1},
$S:1}
M.hz.prototype={
$1:function(a){var u,t,s,r,q,p
a=H.c(H.e(a,"$iq"),"$iar")
u=this.a
if(!u.b)return
t=u.a
s=a.c
r=a.d.F(0,a.z)
s=new V.I(r.a,r.b).m(0,2).l(0,s.ga0()).b
if(typeof s!=="number")return H.y(s)
q=t+s
u.a=q
if(q<-0.1)q=-0.1
else if(q>1.1)q=1.1
u.a=q
this.b.sH(V.a9(0,1-2*q,0))
u=u.a
t=u<=0||u>=1
s=this.c
r=this.d
if(t){s.b=!1
r.b=!1}else{p=Math.sin(u*3.141592653589793)
this.e.sH(V.bt(p,p,p,1))
s.b=!0
r.b=!0}},
$S:1}
M.hA.prototype={
$1:function(a){H.e(a,"$iq")
this.a.b=!0},
$S:1}
M.hB.prototype={
$1:function(a){H.e(a,"$iq")
this.a.b=!1},
$S:1}
M.hC.prototype={
$1:function(a){var u,t,s,r,q,p
a=H.c(H.e(a,"$iq"),"$iar")
u=this.a
if(!u.b)return
t=u.a
s=a.c
r=a.d.F(0,a.z)
s=new V.I(r.a,r.b).m(0,2).l(0,s.ga0()).b
if(typeof s!=="number")return H.y(s)
q=t+s
u.a=q
if(q<-0.1)q=-0.1
else if(q>1.1)q=1.1
u.a=q
this.b.sH(V.a9(0,1-2*q,0))
u=u.a
t=u<=0||u>=1
s=this.c
r=this.d
if(t){s.b=!1
r.b=!1}else{p=Math.sin(u*3.141592653589793)
this.e.sH(V.bt(p,p,p,1))
s.b=!0
r.b=!0}},
$S:1}
M.hD.prototype={
$1:function(a){H.e(a,"$iq")
this.a.b=!0},
$S:1}
M.hE.prototype={
$1:function(a){H.e(a,"$iq")
this.a.b=!1},
$S:1}
M.hF.prototype={
$1:function(a){var u,t,s,r,q,p
a=H.c(H.e(a,"$iq"),"$iar")
u=this.a
if(!u.b)return
t=a.c
s=a.d
if(new V.O((s.a-t.a-t.c*0.5)*2,(s.b-t.b-t.d*0.5)*2).l(0,t.ga0()).a>0)return
r=u.a
s=s.F(0,a.z)
t=new V.I(s.a,s.b).m(0,2).l(0,t.ga0()).b
if(typeof t!=="number")return H.y(t)
q=r+t
u.a=q
if(q<-0.1)q=-0.1
else if(q>1.1)q=1.1
u.a=q
this.b.sH(V.a9(0,1-2*q,0))
u=u.a
t=u<=0||u>=1
s=this.c
r=this.d
if(t){s.b=!1
r.b=!1}else{p=Math.sin(u*3.141592653589793)
this.e.sH(V.bt(p,p,p,1))
s.b=!0
r.b=!0}a.b=!1},
$S:1};(function aliases(){var u=J.a2.prototype
u.f4=u.i
u=J.cR.prototype
u.f5=u.i
u=O.cZ.prototype
u.d2=u.ay
u.d3=u.aJ
u=O.aP.prototype
u.d4=u.ay
u.d5=u.aJ
u=V.cW.prototype
u.f6=u.aO
u.d1=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"ko","ka",8)
u(P,"kp","kb",8)
u(P,"kq","kc",8)
t(P,"iY","kn",4)
var n
s(n=E.af.prototype,"geB",0,0,null,["$1","$0"],["eC","jC"],0,0)
s(n,"geD",0,0,null,["$1","$0"],["eE","jD"],0,0)
s(n,"gez",0,0,null,["$1","$0"],["eA","jB"],0,0)
s(n,"gex",0,0,null,["$1","$0"],["ey","jy"],0,0)
r(n,"gjw","jx",7)
r(n,"gjz","jA",7)
s(n=E.di.prototype,"gd7",0,0,null,["$1","$0"],["d9","d8"],0,0)
q(n,"gjR","eK",4)
p(n=X.dr.prototype,"ghk","hl",9)
p(n,"gh8","h9",9)
p(n,"ghe","hf",6)
p(n,"gho","hp",15)
p(n,"ghm","hn",15)
p(n,"ghs","ht",6)
p(n,"ghw","hx",6)
p(n,"ghi","hj",6)
p(n,"ghu","hv",6)
p(n,"ghg","hh",6)
p(n,"ghy","hz",28)
p(n,"ghA","hB",9)
p(n,"ghQ","hR",10)
p(n,"ghM","hN",10)
p(n,"ghO","hP",10)
s(n=D.cT.prototype,"gdw",0,0,null,["$1","$0"],["dz","hq"],0,0)
p(n,"ghC","hD",30)
r(n,"gh2","h3",16)
r(n,"ghG","hH",16)
o(V.I.prototype,"gp","b4",11)
o(V.u.prototype,"gp","b4",11)
o(V.b_.prototype,"gp","b4",11)
s(n=U.bT.prototype,"gaI",0,0,null,["$1","$0"],["L","a5"],0,0)
r(n,"gfj","fk",18)
r(n,"ghE","hF",18)
s(n=U.ds.prototype,"gaI",0,0,null,["$1","$0"],["L","a5"],0,0)
p(n,"gbW","bX",2)
p(n,"gbY","bZ",2)
p(n,"gc_","c0",2)
s(n=U.dt.prototype,"gaI",0,0,null,["$1","$0"],["L","a5"],0,0)
p(n,"gbW","bX",2)
p(n,"gbY","bZ",2)
p(n,"gc_","c0",2)
p(n,"gfW","fX",2)
p(n,"gfY","fZ",2)
p(n,"gil","im",2)
p(n,"gij","ik",2)
p(n,"gih","ii",2)
p(U.du.prototype,"gh0","h1",2)
s(n=M.cC.prototype,"ga8",0,0,null,["$1","$0"],["a4","bM"],0,0)
r(n,"ghI","hJ",19)
r(n,"ghK","hL",19)
s(n=M.cI.prototype,"ga8",0,0,null,["$1","$0"],["a4","bM"],0,0)
r(n,"gha","hb",7)
r(n,"ghc","hd",7)
p(n=O.cN.prototype,"gi7","i8",35)
s(n,"giu",0,1,null,["$2$color","$1"],["dL","iv"],36,0)
s(n=O.cY.prototype,"gfl",0,0,null,["$1","$0"],["W","fm"],0,0)
s(n,"gi_",0,0,null,["$1","$0"],["dF","i0"],0,0)
r(n,"gh4","h5",21)
r(n,"gh6","h7",21)
s(X.d5.prototype,"gbe",0,0,null,["$1","$0"],["au","fo"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.N,null)
s(P.N,[H.hP,J.a2,J.ad,P.dE,P.k,H.cU,P.aL,H.bq,H.dq,H.eR,H.fh,P.b5,H.bJ,H.dH,P.eA,H.et,H.ev,H.ep,P.hb,P.aU,P.aw,P.dy,P.f7,P.c4,P.f8,P.ae,P.he,P.ha,P.ch,P.h4,P.V,P.bK,P.hd,P.Z,P.am,P.ac,P.bo,P.eO,P.dc,P.dB,P.ec,P.a,P.C,P.al,P.w,P.bb,W.dY,W.az,W.cJ,P.h5,O.S,O.bW,E.dS,E.af,E.eS,E.di,Z.dw,Z.dx,Z.b3,Z.cz,Z.b6,Z.aF,D.dV,D.bQ,D.q,X.cA,X.cS,X.er,X.ex,X.an,X.eI,X.ff,X.dr,D.cG,D.Y,D.d6,D.db,D.df,D.dg,D.dh,V.W,V.F,V.e4,V.d_,V.a8,V.O,V.T,V.as,V.d9,V.I,V.u,V.b_,U.ds,U.dt,U.du,M.cI,M.ag,A.cv,A.dR,A.eF,A.c8,A.cc,A.ca,A.cd,A.cb,A.ce,A.bn,A.dl,A.fq,F.P,F.e7,F.a7,F.es,F.ba,F.ah,F.eZ,F.f_,F.f0,F.J,F.fx,F.fy,F.fC,F.fD,F.fE,F.fF,O.bc,O.cZ,T.fc,V.dO,V.aX,V.cW,V.eY,V.c3,V.dj,V.c5,V.fe,X.cB,X.dd,X.d5,V.f1])
s(J.a2,[J.en,J.cP,J.cR,J.aM,J.cQ,J.bV,H.d3,W.bp,W.dz,W.e_,W.cH,W.i,W.dC,W.dF,W.aR,W.dI,P.cx,P.cK,P.d7,P.by,P.da,P.dm])
s(J.cR,[J.eP,J.dn,J.b9])
t(J.hO,J.aM)
s(J.cQ,[J.cO,J.eo])
t(P.ew,P.dE)
s(P.ew,[H.dp,W.fP,W.fO,P.e8])
t(H.a0,H.dp)
s(P.k,[H.e2,H.eB,H.fI])
s(P.aL,[H.eC,H.fJ])
s(P.b5,[H.eN,H.eq,H.ft,H.fj,H.dU,H.eW,P.d4,P.aV,P.fu,P.fs,P.f5,P.dX,P.dZ])
s(H.bJ,[H.hG,H.fb,H.hp,H.hq,H.hr,P.fL,P.fK,P.fM,P.fN,P.hc,P.fT,P.fX,P.fU,P.fV,P.fW,P.h_,P.h0,P.fZ,P.fY,P.f9,P.fa,P.hi,P.h8,P.h7,P.h9,P.ez,P.e0,P.e1,W.fS,P.hk,P.e9,P.ea,E.eT,E.eU,E.eV,E.fd,D.e6,F.hf,F.hl,F.fH,F.fG,F.fz,F.fA,O.eg,O.eh,O.ej,O.ei,O.ek,O.el,V.f3,V.f2,M.hx,M.hy,M.hz,M.hA,M.hB,M.hC,M.hD,M.hE,M.hF])
s(H.fb,[H.f6,H.bH])
t(P.ey,P.eA)
t(H.aN,P.ey)
t(H.eu,H.e2)
t(H.d0,H.d3)
s(H.d0,[H.ci,H.ck])
t(H.cj,H.ci)
t(H.d1,H.cj)
t(H.cl,H.ck)
t(H.d2,H.cl)
s(H.d2,[H.eJ,H.eK,H.eL,H.eM])
t(P.h6,P.he)
t(P.h3,P.ha)
t(P.cE,P.f8)
t(P.e3,P.bK)
t(P.fv,P.e3)
t(P.fw,P.cE)
s(P.ac,[P.r,P.v])
s(P.aV,[P.bx,P.ef])
s(W.bp,[W.L,W.cf])
s(W.L,[W.a1,W.b4,W.bO])
s(W.a1,[W.p,P.o])
s(W.p,[W.dP,W.dQ,W.cw,W.bm,W.bN,W.eb,W.eX])
t(W.bM,W.dz)
t(W.dD,W.dC)
t(W.br,W.dD)
t(W.cL,W.bO)
t(W.bd,W.i)
s(W.bd,[W.aO,W.a4,W.aD])
t(W.dG,W.dF)
t(W.c_,W.dG)
t(W.dJ,W.dI)
t(W.fg,W.dJ)
t(W.aT,W.a4)
t(W.dA,W.cH)
t(W.fQ,P.f7)
t(W.hY,W.fQ)
t(W.fR,P.c4)
t(P.at,P.h5)
s(E.dS,[Z.cy,A.c2,T.de])
s(D.q,[D.b7,D.b8,D.B,X.eQ])
s(X.eQ,[X.cV,X.ar,X.bZ,X.dk])
s(O.S,[D.cT,U.bT,M.cC])
s(D.dV,[U.dW,U.a3])
t(U.cD,U.a3)
s(A.c2,[A.cM,A.cX])
s(A.dl,[A.G,A.fn,A.fo,A.fp,A.fl,A.Q,A.fm,A.D,A.c7,A.fr,A.c9,A.ab,A.ai,A.aj])
t(F.f4,F.e7)
t(F.fk,F.es)
t(F.dv,F.fD)
t(F.fB,F.fE)
s(O.bc,[O.cN,O.cY])
s(O.cZ,[O.eD,O.eE,O.aP])
s(O.aP,[O.eG,O.eH])
s(V.cW,[V.aZ,V.c6])
t(X.ed,X.dd)
u(H.dp,H.dq)
u(H.ci,P.V)
u(H.cj,H.bq)
u(H.ck,P.V)
u(H.cl,H.bq)
u(P.dE,P.V)
u(W.dz,W.dY)
u(W.dC,P.V)
u(W.dD,W.az)
u(W.dF,P.V)
u(W.dG,W.az)
u(W.dI,P.V)
u(W.dJ,W.az)})();(function constants(){var u=hunkHelpers.makeConstList
C.r=W.cw.prototype
C.m=W.bm.prototype
C.k=W.bN.prototype
C.B=W.cL.prototype
C.C=J.a2.prototype
C.a=J.aM.prototype
C.h=J.cO.prototype
C.o=J.cP.prototype
C.i=J.cQ.prototype
C.j=J.bV.prototype
C.J=J.b9.prototype
C.K=W.c_.prototype
C.w=J.eP.prototype
C.b=P.by.prototype
C.p=J.dn.prototype
C.x=W.aT.prototype
C.y=W.cf.prototype
C.z=new P.eO()
C.A=new P.fw()
C.l=new P.h6()
C.c=new A.bn(0,"ColorSourceType.None")
C.f=new A.bn(1,"ColorSourceType.Solid")
C.d=new A.bn(2,"ColorSourceType.Texture2D")
C.e=new A.bn(3,"ColorSourceType.TextureCube")
C.n=new P.bo(0)
C.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.E=function(hooks) {
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

C.F=function(getTagFallback) {
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
C.G=function() {
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
C.H=function(hooks) {
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
C.I=function(hooks) {
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
C.v=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.q=new P.fv(!1)})();(function staticFields(){$.aJ=0
$.bI=null
$.id=null
$.hZ=!1
$.j4=null
$.iW=null
$.jb=null
$.hm=null
$.hs=null
$.i6=null
$.bA=null
$.co=null
$.cp=null
$.i_=!1
$.U=C.l
$.io=null
$.is=null
$.c0=null
$.iy=null
$.iF=null
$.iI=null
$.iH=null
$.iG=null
$.iK=null
$.jI="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.jH="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
$.ir=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"kU","jf",function(){return H.j3("_$dart_dartClosure")})
u($,"kV","i9",function(){return H.j3("_$dart_js")})
u($,"kX","jg",function(){return H.aS(H.fi({
toString:function(){return"$receiver$"}}))})
u($,"kY","jh",function(){return H.aS(H.fi({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"kZ","ji",function(){return H.aS(H.fi(null))})
u($,"l_","jj",function(){return H.aS(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"l2","jm",function(){return H.aS(H.fi(void 0))})
u($,"l3","jn",function(){return H.aS(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"l1","jl",function(){return H.aS(H.iD(null))})
u($,"l0","jk",function(){return H.aS(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"l5","jp",function(){return H.aS(H.iD(void 0))})
u($,"l4","jo",function(){return H.aS(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"lj","ia",function(){return P.k9()})
u($,"ll","ct",function(){return[]})
u($,"lk","jt",function(){return P.k2("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"lc","js",function(){return Z.av(0)})
u($,"l6","jq",function(){return Z.av(511)})
u($,"le","aI",function(){return Z.av(1)})
u($,"ld","aH",function(){return Z.av(2)})
u($,"l8","aG",function(){return Z.av(4)})
u($,"lf","b1",function(){return Z.av(8)})
u($,"lg","b2",function(){return Z.av(16)})
u($,"l9","bk",function(){return Z.av(32)})
u($,"la","cs",function(){return Z.av(64)})
u($,"lb","jr",function(){return Z.av(96)})
u($,"lh","bG",function(){return Z.av(128)})
u($,"l7","b0",function(){return Z.av(256)})
u($,"kT","je",function(){return new V.e4(1e-9)})
u($,"kS","E",function(){return $.je()})})()
var v={mangledGlobalNames:{v:"int",r:"double",ac:"num",w:"String",Z:"bool",C:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.q]},{func:1,ret:P.C,args:[D.q]},{func:1,ret:-1,args:[D.q]},{func:1,ret:P.C},{func:1,ret:-1},{func:1,ret:P.C,args:[F.P]},{func:1,ret:-1,args:[W.a4]},{func:1,ret:-1,args:[P.v,[P.k,E.af]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.aD]},{func:1,ret:P.r},{func:1,args:[,]},{func:1,ret:P.w,args:[P.v]},{func:1,ret:P.C,args:[,,]},{func:1,ret:-1,args:[W.aO]},{func:1,ret:-1,args:[P.v,[P.k,D.Y]]},{func:1,ret:P.C,args:[,]},{func:1,ret:-1,args:[P.v,[P.k,U.a3]]},{func:1,ret:-1,args:[P.v,[P.k,M.ag]]},{func:1,ret:P.C,args:[F.J]},{func:1,ret:-1,args:[P.v,[P.k,V.a8]]},{func:1,ret:P.Z,args:[W.L]},{func:1,ret:W.a1,args:[W.L]},{func:1,ret:P.C,args:[P.ac]},{func:1,ret:P.C,args:[{func:1,ret:-1,args:[D.q]}]},{func:1,ret:[P.aw,,],args:[,]},{func:1,ret:P.C,args:[,],opt:[P.al]},{func:1,ret:-1,args:[W.aT]},{func:1,ret:P.C,args:[{func:1,ret:-1}]},{func:1,ret:P.Z,args:[[P.k,D.Y]]},{func:1,args:[P.w]},{func:1,ret:P.C,args:[F.J,P.r,P.r]},{func:1,ret:P.r,args:[P.r]},{func:1,args:[,P.w]},{func:1,ret:F.ah,args:[F.ah]},{func:1,ret:F.ah,args:[F.ah],named:{color:V.F}},{func:1,ret:-1,args:[F.J,F.J]},{func:1,ret:P.C,args:[F.a7]},{func:1,ret:P.C,args:[W.i]},{func:1,args:[W.i]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.a2,DOMError:J.a2,MediaError:J.a2,Navigator:J.a2,NavigatorConcurrentHardware:J.a2,NavigatorUserMediaError:J.a2,OverconstrainedError:J.a2,PositionError:J.a2,WebGLActiveInfo:J.a2,WebGLRenderbuffer:J.a2,WebGL2RenderingContext:J.a2,WebGLTexture:J.a2,SQLError:J.a2,ArrayBufferView:H.d3,Float32Array:H.d1,Int16Array:H.eJ,Int32Array:H.eK,Uint32Array:H.eL,Uint8Array:H.eM,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLBaseElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLImageElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableCellElement:W.p,HTMLTableDataCellElement:W.p,HTMLTableHeaderCellElement:W.p,HTMLTableColElement:W.p,HTMLTableElement:W.p,HTMLTableRowElement:W.p,HTMLTableSectionElement:W.p,HTMLTemplateElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,HTMLAnchorElement:W.dP,HTMLAreaElement:W.dQ,HTMLBodyElement:W.cw,HTMLCanvasElement:W.bm,CDATASection:W.b4,CharacterData:W.b4,Comment:W.b4,ProcessingInstruction:W.b4,Text:W.b4,CSSStyleDeclaration:W.bM,MSStyleCSSProperties:W.bM,CSS2Properties:W.bM,HTMLDivElement:W.bN,XMLDocument:W.bO,Document:W.bO,DOMException:W.e_,DOMRectReadOnly:W.cH,Element:W.a1,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,EventTarget:W.bp,HTMLFormElement:W.eb,HTMLCollection:W.br,HTMLFormControlsCollection:W.br,HTMLOptionsCollection:W.br,HTMLDocument:W.cL,KeyboardEvent:W.aO,PointerEvent:W.a4,MouseEvent:W.a4,DragEvent:W.a4,DocumentFragment:W.L,ShadowRoot:W.L,Attr:W.L,DocumentType:W.L,Node:W.L,NodeList:W.c_,RadioNodeList:W.c_,HTMLSelectElement:W.eX,Touch:W.aR,TouchEvent:W.aD,TouchList:W.fg,CompositionEvent:W.bd,FocusEvent:W.bd,TextEvent:W.bd,UIEvent:W.bd,WheelEvent:W.aT,Window:W.cf,DOMWindow:W.cf,ClientRect:W.dA,DOMRect:W.dA,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGScriptElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,WebGLBuffer:P.cx,WebGLFramebuffer:P.cK,WebGLProgram:P.d7,WebGLRenderingContext:P.by,WebGLShader:P.da,WebGLUniformLocation:P.dm})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLTexture:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,KeyboardEvent:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLUniformLocation:true})
H.d0.$nativeSuperclassTag="ArrayBufferView"
H.ci.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.d1.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.cl.$nativeSuperclassTag="ArrayBufferView"
H.d2.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.j7,[])
else M.j7([])})})()
//# sourceMappingURL=main.dart.js.map
