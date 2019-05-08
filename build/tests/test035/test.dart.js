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
a[c]=function(){a[c]=function(){H.mB(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iW(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={iE:function iE(a){this.a=a},
i4:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
jc:function(){return new P.df("No element")},
kY:function(){return new P.df("Too few elements")},
Z:function Z(a){this.a=a},
ee:function ee(){},
cW:function cW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eI:function eI(a,b,c){this.a=a
this.b=b
this.$ti=c},
eJ:function eJ(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
h2:function h2(a,b,c){this.a=a
this.b=b
this.$ti=c},
h3:function h3(a,b,c){this.a=a
this.b=b
this.$ti=c},
bq:function bq(){},
cg:function cg(){},
dv:function dv(){},
kQ:function(){throw H.d(P.Y("Cannot modify unmodifiable Map"))},
bL:function(a){var u,t
u=H.N(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
mj:function(a){return v.types[H.a8(a)]},
mp:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iaV},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.al(a)
if(typeof u!=="string")throw H.d(H.ak(a))
return u},
ln:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.er(u)
t=u[0]
s=u[1]
return new H.f2(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
c2:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
lk:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.c(u,3)
t=H.N(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.a3(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.G(r,p)|32)>s)return}return parseInt(a,b)},
bw:function(a){return H.lb(a)+H.iU(H.bi(a),0,null)},
lb:function(a){var u,t,s,r,q,p,o,n,m
u=J.Q(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.O||!!u.$ibf){p=C.z(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bL(r.length>1&&C.c.G(r,0)===36?C.c.aA(r,1):r)},
lc:function(){if(!!self.location)return self.location.href
return},
jo:function(a){var u,t,s,r,q
H.dU(a)
u=J.aR(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
ll:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.y)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.d(H.ak(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aH(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.d(H.ak(r))}return H.jo(u)},
jp:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ak(s))
if(s<0)throw H.d(H.ak(s))
if(s>65535)return H.ll(a)}return H.jo(a)},
lm:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
d7:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aH(u,10))>>>0,56320|u&1023)}}throw H.d(P.a3(a,0,1114111,null,null))},
bv:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lj:function(a){var u=H.bv(a).getFullYear()+0
return u},
lh:function(a){var u=H.bv(a).getMonth()+1
return u},
ld:function(a){var u=H.bv(a).getDate()+0
return u},
le:function(a){var u=H.bv(a).getHours()+0
return u},
lg:function(a){var u=H.bv(a).getMinutes()+0
return u},
li:function(a){var u=H.bv(a).getSeconds()+0
return u},
lf:function(a){var u=H.bv(a).getMilliseconds()+0
return u},
r:function(a){throw H.d(H.ak(a))},
c:function(a,b){if(a==null)J.aR(a)
throw H.d(H.bG(a,b))},
bG:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aD(!0,b,"index",null)
u=H.a8(J.aR(a))
if(!(b<0)){if(typeof u!=="number")return H.r(u)
t=b>=u}else t=!0
if(t)return P.bW(b,a,"index",null,u)
return P.d9(b,"index",null)},
mc:function(a,b,c){if(a>c)return new P.bx(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bx(a,c,!0,b,"end","Invalid value")
return new P.aD(!0,b,"end",null)},
ak:function(a){return new P.aD(!0,a,null,null)},
d:function(a){var u
if(a==null)a=new P.d4()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kj})
u.name=""}else u.toString=H.kj
return u},
kj:function(){return J.al(this.dartException)},
q:function(a){throw H.d(a)},
y:function(a){throw H.d(P.bm(a))},
aN:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fs(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ft:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jx:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jj:function(a,b){return new H.eX(a,b==null?null:b.method)},
iF:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.ev(a,t,u?null:b.receiver)},
au:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.is(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aH(s,16)&8191)===10)switch(r){case 438:return u.$1(H.iF(H.i(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.jj(H.i(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.km()
p=$.kn()
o=$.ko()
n=$.kp()
m=$.ks()
l=$.kt()
k=$.kr()
$.kq()
j=$.kv()
i=$.ku()
h=q.aa(t)
if(h!=null)return u.$1(H.iF(H.N(t),h))
else{h=p.aa(t)
if(h!=null){h.method="call"
return u.$1(H.iF(H.N(t),h))}else{h=o.aa(t)
if(h==null){h=n.aa(t)
if(h==null){h=m.aa(t)
if(h==null){h=l.aa(t)
if(h==null){h=k.aa(t)
if(h==null){h=n.aa(t)
if(h==null){h=j.aa(t)
if(h==null){h=i.aa(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.jj(H.N(t),h))}}return u.$1(new H.fG(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.de()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aD(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.de()
return a},
bJ:function(a){var u
if(a==null)return new H.dM(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dM(a)},
mf:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.q(0,a[t],a[s])}return b},
mo:function(a,b,c,d,e,f){H.e(a,"$iiA")
switch(H.a8(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.u("Unsupported number of arguments for wrapped closure"))},
bF:function(a,b){var u
H.a8(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mo)
a.$identity=u
return u},
kP:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.Q(d).$ia){u.$reflectionInfo=d
s=H.ln(u).r}else s=d
r=e?Object.create(new H.fh().constructor.prototype):Object.create(new H.bN(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aE
if(typeof p!=="number")return p.l()
$.aE=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.ja(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.mj,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.j8:H.ix
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.d("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.ja(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
kM:function(a,b,c,d){var u=H.ix
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ja:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kO(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kM(t,!r,u,b)
if(t===0){r=$.aE
if(typeof r!=="number")return r.l()
$.aE=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bO
if(q==null){q=H.e2("self")
$.bO=q}return new Function(r+H.i(q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aE
if(typeof r!=="number")return r.l()
$.aE=r+1
o+=r
r="return function("+o+"){return this."
q=$.bO
if(q==null){q=H.e2("self")
$.bO=q}return new Function(r+H.i(q)+"."+H.i(u)+"("+o+");}")()},
kN:function(a,b,c,d){var u,t
u=H.ix
t=H.j8
switch(b?-1:a){case 0:throw H.d(H.lr("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kO:function(a,b){var u,t,s,r,q,p,o,n
u=$.bO
if(u==null){u=H.e2("self")
$.bO=u}t=$.j7
if(t==null){t=H.e2("receiver")
$.j7=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.kN(r,!p,s,b)
if(r===1){u="return function(){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+");"
t=$.aE
if(typeof t!=="number")return t.l()
$.aE=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+", "+n+");"
t=$.aE
if(typeof t!=="number")return t.l()
$.aE=t+1
return new Function(u+t+"}")()},
iW:function(a,b,c,d,e,f,g){return H.kP(a,b,H.a8(c),d,!!e,!!f,g)},
ix:function(a){return a.a},
j8:function(a){return a.c},
e2:function(a){var u,t,s,r,q
u=new H.bN("self","target","receiver","name")
t=J.er(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.aC(a,"String"))},
md:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aC(a,"double"))},
mu:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aC(a,"num"))},
k3:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.aC(a,"bool"))},
a8:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.aC(a,"int"))},
kg:function(a,b){throw H.d(H.aC(a,H.bL(H.N(b).substring(2))))},
mw:function(a,b){throw H.d(H.kL(a,H.bL(H.N(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Q(a)[b])return a
H.kg(a,b)},
f:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.mw(a,b)},
dU:function(a){if(a==null)return a
if(!!J.Q(a).$ia)return a
throw H.d(H.aC(a,"List<dynamic>"))},
kd:function(a,b){var u
if(a==null)return a
u=J.Q(a)
if(!!u.$ia)return a
if(u[b])return a
H.kg(a,b)},
k8:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a8(u)]
else return a.$S()}return},
dR:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.k8(J.Q(a))
if(u==null)return!1
return H.jU(u,null,b,null)},
j:function(a,b){var u,t
if(a==null)return a
if($.iR)return a
$.iR=!0
try{if(H.dR(a,b))return a
u=H.il(b)
t=H.aC(a,u)
throw H.d(t)}finally{$.iR=!1}},
iX:function(a,b){if(a!=null&&!H.iV(a,b))H.q(H.aC(a,H.il(b)))
return a},
aC:function(a,b){return new H.fu("TypeError: "+P.eh(a)+": type '"+H.jZ(a)+"' is not a subtype of type '"+b+"'")},
kL:function(a,b){return new H.e3("CastError: "+P.eh(a)+": type '"+H.jZ(a)+"' is not a subtype of type '"+b+"'")},
jZ:function(a){var u,t
u=J.Q(a)
if(!!u.$ibP){t=H.k8(u)
if(t!=null)return H.il(t)
return"Closure"}return H.bw(a)},
mB:function(a){throw H.d(new P.ea(H.N(a)))},
lr:function(a){return new H.f7(a)},
ka:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bi:function(a){if(a==null)return
return a.$ti},
nh:function(a,b,c){return H.bK(a["$a"+H.i(c)],H.bi(b))},
cv:function(a,b,c,d){var u
H.N(c)
H.a8(d)
u=H.bK(a["$a"+H.i(c)],H.bi(b))
return u==null?null:u[d]},
ap:function(a,b,c){var u
H.N(b)
H.a8(c)
u=H.bK(a["$a"+H.i(b)],H.bi(a))
return u==null?null:u[c]},
t:function(a,b){var u
H.a8(b)
u=H.bi(a)
return u==null?null:u[b]},
il:function(a){return H.bh(a,null)},
bh:function(a,b){var u,t
H.h(b,"$ia",[P.k],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bL(a[0].name)+H.iU(a,1,b)
if(typeof a=="function")return H.bL(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a8(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.i(b[t])}if('func' in a)return H.m_(a,b)
if('futureOr' in a)return"FutureOr<"+H.bh("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m_:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.k]
H.h(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.c(b,m)
o=C.c.l(o,b[m])
l=t[p]
if(l!=null&&l!==P.I)o+=" extends "+H.bh(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bh(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bh(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bh(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.me(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.N(u[g])
i=i+h+H.bh(d[c],b)+(" "+H.i(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
iU:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ia",[P.k],"$aa")
if(a==null)return""
u=new P.ae("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bh(p,c)}return"<"+u.i(0)+">"},
bK:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cu:function(a,b,c,d){var u,t
H.N(b)
H.dU(c)
H.N(d)
if(a==null)return!1
u=H.bi(a)
t=J.Q(a)
if(t[b]==null)return!1
return H.k1(H.bK(t[d],u),null,c,null)},
h:function(a,b,c,d){H.N(b)
H.dU(c)
H.N(d)
if(a==null)return a
if(H.cu(a,b,c,d))return a
throw H.d(H.aC(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bL(b.substring(2))+H.iU(c,0,null),v.mangledGlobalNames)))},
k1:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.at(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.at(a[t],b,c[t],d))return!1
return!0},
nf:function(a,b,c){return a.apply(b,H.bK(J.Q(b)["$a"+H.i(c)],H.bi(b)))},
kc:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="I"||a.name==="A"||a===-1||a===-2||H.kc(u)}return!1},
iV:function(a,b){var u,t
if(a==null)return b==null||b.name==="I"||b.name==="A"||b===-1||b===-2||H.kc(b)
if(b==null||b===-1||b.name==="I"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.iV(a,"type" in b?b.type:null))return!0
if('func' in b)return H.dR(a,b)}u=J.Q(a).constructor
t=H.bi(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.at(u,null,b,null)},
w:function(a,b){if(a!=null&&!H.iV(a,b))throw H.d(H.aC(a,H.il(b)))
return a},
at:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="I"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="I"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.at(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="A")return!0
if('func' in c)return H.jU(a,b,c,d)
if('func' in a)return c.name==="iA"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.at("type" in a?a.type:null,b,s,d)
else if(H.at(a,b,s,d))return!0
else{if(!('$i'+"bU" in t.prototype))return!1
r=t.prototype["$a"+"bU"]
q=H.bK(r,u?a.slice(1):null)
return H.at(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.k1(H.bK(m,u),b,p,d)},
jU:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.at(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.at(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.at(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.at(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mt(h,b,g,d)},
mt:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.at(c[r],d,a[r],b))return!1}return!0},
ng:function(a,b,c){Object.defineProperty(a,H.N(b),{value:c,enumerable:false,writable:true,configurable:true})},
mr:function(a){var u,t,s,r,q,p
u=H.N($.kb.$1(a))
t=$.i1[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.i8[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.N($.k0.$2(a,u))
if(u!=null){t=$.i1[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.i8[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.ik(s)
$.i1[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.i8[u]=s
return s}if(q==="-"){p=H.ik(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.kf(a,s)
if(q==="*")throw H.d(P.fF(u))
if(v.leafTags[u]===true){p=H.ik(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.kf(a,s)},
kf:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.j_(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ik:function(a){return J.j_(a,!1,null,!!a.$iaV)},
ms:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ik(u)
else return J.j_(u,c,null,null)},
mm:function(){if(!0===$.iZ)return
$.iZ=!0
H.mn()},
mn:function(){var u,t,s,r,q,p,o,n
$.i1=Object.create(null)
$.i8=Object.create(null)
H.ml()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kh.$1(q)
if(p!=null){o=H.ms(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ml:function(){var u,t,s,r,q,p,o
u=C.S()
u=H.bE(C.P,H.bE(C.U,H.bE(C.y,H.bE(C.y,H.bE(C.T,H.bE(C.Q,H.bE(C.R(C.z),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.kb=new H.i5(q)
$.k0=new H.i6(p)
$.kh=new H.i7(o)},
bE:function(a,b){return a(b)||b},
l_:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.d(P.W("Illegal RegExp pattern ("+String(r)+")",a,null))},
mA:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ki:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
e7:function e7(){},
e8:function e8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
f2:function f2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
fs:function fs(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eX:function eX(a,b){this.a=a
this.b=b},
ev:function ev(a,b,c){this.a=a
this.b=b
this.c=c},
fG:function fG(a){this.a=a},
is:function is(a){this.a=a},
dM:function dM(a){this.a=a
this.b=null},
bP:function bP(){},
fm:function fm(){},
fh:function fh(){},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fu:function fu(a){this.a=a},
e3:function e3(a){this.a=a},
f7:function f7(a){this.a=a},
ay:function ay(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ey:function ey(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ez:function ez(a,b){this.a=a
this.$ti=b},
eA:function eA(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
eu:function eu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bC:function(a){return a},
la:function(a){return new Int8Array(a)},
bg:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bG(b,a))},
lY:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.mc(a,b,c))
return b},
bu:function bu(){},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
c_:function c_(){},
cl:function cl(){},
cm:function cm(){},
cn:function cn(){},
co:function co(){},
me:function(a){return J.jd(a?Object.keys(a):[],null)},
mv:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
j_:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dS:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.iZ==null){H.mm()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.d(P.fF("Return interceptor for "+H.i(t(a,u))))}r=a.constructor
q=r==null?null:r[$.j1()]
if(q!=null)return q
q=H.mr(a)
if(q!=null)return q
if(typeof a=="function")return C.V
t=Object.getPrototypeOf(a)
if(t==null)return C.E
if(t===Object.prototype)return C.E
if(typeof r=="function"){Object.defineProperty(r,$.j1(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
kZ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.iw(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a3(a,0,4294967295,"length",null))
return J.jd(new Array(a),b)},
jd:function(a,b){return J.er(H.b(a,[b]))},
er:function(a){H.dU(a)
a.fixed$length=Array
return a},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cQ.prototype
return J.et.prototype}if(typeof a=="string")return J.aT.prototype
if(a==null)return J.cR.prototype
if(typeof a=="boolean")return J.es.prototype
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.I)return a
return J.dS(a)},
mg:function(a){if(typeof a=="number")return J.bb.prototype
if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.I)return a
return J.dS(a)},
bI:function(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.I)return a
return J.dS(a)},
k9:function(a){if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.I)return a
return J.dS(a)},
mh:function(a){if(typeof a=="number")return J.bb.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.bf.prototype
return a},
mi:function(a){if(typeof a=="number")return J.bb.prototype
if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.bf.prototype
return a},
iY:function(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.bf.prototype
return a},
b1:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.I)return a
return J.dS(a)},
kD:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.mg(a).l(a,b)},
K:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).t(a,b)},
j3:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mi(a).k(a,b)},
kE:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.mh(a).m(a,b)},
kF:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mp(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bI(a).j(a,b)},
kG:function(a,b,c,d){return J.b1(a).fp(a,b,c,d)},
kH:function(a,b){return J.iY(a).G(a,b)},
iu:function(a,b,c){return J.b1(a).hW(a,b,c)},
j4:function(a,b){return J.b1(a).V(a,b)},
kI:function(a,b){return J.iY(a).W(a,b)},
iv:function(a,b){return J.k9(a).a9(a,b)},
kJ:function(a,b,c,d){return J.b1(a).jk(a,b,c,d)},
j5:function(a){return J.b1(a).gci(a)},
cz:function(a){return J.Q(a).gI(a)},
cA:function(a){return J.k9(a).ga_(a)},
aR:function(a){return J.bI(a).gn(a)},
kK:function(a,b){return J.b1(a).jU(a,b)},
al:function(a){return J.Q(a).i(a)},
a0:function a0(){},
es:function es(){},
cR:function cR(){},
cS:function cS(){},
eZ:function eZ(){},
bf:function bf(){},
aU:function aU(){},
ax:function ax(a){this.$ti=a},
iD:function iD(a){this.$ti=a},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bb:function bb(){},
cQ:function cQ(){},
et:function et(){},
aT:function aT(){}},P={
lD:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.m7()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bF(new P.h5(u),1)).observe(t,{childList:true})
return new P.h4(u,t,s)}else if(self.setImmediate!=null)return P.m8()
return P.m9()},
lE:function(a){self.scheduleImmediate(H.bF(new P.h6(H.j(a,{func:1,ret:-1})),0))},
lF:function(a){self.setImmediate(H.bF(new P.h7(H.j(a,{func:1,ret:-1})),0))},
lG:function(a){P.iJ(C.u,H.j(a,{func:1,ret:-1}))},
iJ:function(a,b){var u
H.j(b,{func:1,ret:-1})
u=C.f.a1(a.a,1000)
return P.lJ(u<0?0:u,b)},
jw:function(a,b){var u
H.j(b,{func:1,ret:-1,args:[P.aM]})
u=C.f.a1(a.a,1000)
return P.lK(u<0?0:u,b)},
lJ:function(a,b){var u=new P.dN(!0)
u.fl(a,b)
return u},
lK:function(a,b){var u=new P.dN(!1)
u.fm(a,b)
return u},
lH:function(a,b){var u,t,s
b.a=1
try{a.eF(new P.hf(b),new P.hg(b),null)}catch(s){u=H.au(s)
t=H.bJ(s)
P.mx(new P.hh(b,u,t))}},
jJ:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$ias")
if(u>=4){t=b.c_()
b.a=a.a
b.c=a.c
P.cj(b,t)}else{t=H.e(b.c,"$iaQ")
b.a=2
b.c=a
a.dw(t)}},
cj:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.e(t.c,"$iab")
t=t.b
p=q.a
o=q.b
t.toString
P.hT(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cj(u.a,b)}t=u.a
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
if(k){H.e(m,"$iab")
t=t.b
p=m.a
o=m.b
t.toString
P.hT(null,null,t,p,o)
return}j=$.O
if(j!=l)$.O=l
else j=null
t=b.c
if(t===8)new P.hl(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.hk(s,b,m).$0()}else if((t&2)!==0)new P.hj(u,s,b).$0()
if(j!=null)$.O=j
t=s.b
if(!!J.Q(t).$ibU){if(t.a>=4){i=H.e(o.c,"$iaQ")
o.c=null
b=o.bc(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.jJ(t,o)
return}}h=b.b
i=H.e(h.c,"$iaQ")
h.c=null
b=h.bc(i)
t=s.a
p=s.b
if(!t){H.w(p,H.t(h,0))
h.a=4
h.c=p}else{H.e(p,"$iab")
h.a=8
h.c=p}u.a=h
t=h}},
m2:function(a,b){if(H.dR(a,{func:1,args:[P.I,P.aj]}))return H.j(a,{func:1,ret:null,args:[P.I,P.aj]})
if(H.dR(a,{func:1,args:[P.I]}))return H.j(a,{func:1,ret:null,args:[P.I]})
throw H.d(P.iw(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
m1:function(){var u,t
for(;u=$.bD,u!=null;){$.ct=null
t=u.b
$.bD=t
if(t==null)$.cs=null
u.a.$0()}},
m6:function(){$.iS=!0
try{P.m1()}finally{$.ct=null
$.iS=!1
if($.bD!=null)$.j2().$1(P.k2())}},
jY:function(a){var u=new P.dD(H.j(a,{func:1,ret:-1}))
if($.bD==null){$.cs=u
$.bD=u
if(!$.iS)$.j2().$1(P.k2())}else{$.cs.b=u
$.cs=u}},
m5:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
u=$.bD
if(u==null){P.jY(a)
$.ct=$.cs
return}t=new P.dD(a)
s=$.ct
if(s==null){t.b=u
$.ct=t
$.bD=t}else{t.b=s.b
s.b=t
$.ct=t
if(t.b==null)$.cs=t}},
mx:function(a){var u,t
u={func:1,ret:-1}
H.j(a,u)
t=$.O
if(C.k===t){P.hV(null,null,C.k,a)
return}t.toString
P.hV(null,null,t,H.j(t.cc(a),u))},
jv:function(a,b){var u,t
u={func:1,ret:-1}
H.j(b,u)
t=$.O
if(t===C.k){t.toString
return P.iJ(a,b)}return P.iJ(a,H.j(t.cc(b),u))},
lv:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aM]}
H.j(b,u)
t=$.O
if(t===C.k){t.toString
return P.jw(a,b)}s=t.dK(b,P.aM)
$.O.toString
return P.jw(a,H.j(s,u))},
hT:function(a,b,c,d,e){var u={}
u.a=d
P.m5(new P.hU(u,e))},
jV:function(a,b,c,d,e){var u,t
H.j(d,{func:1,ret:e})
t=$.O
if(t===c)return d.$0()
$.O=c
u=t
try{t=d.$0()
return t}finally{$.O=u}},
jW:function(a,b,c,d,e,f,g){var u,t
H.j(d,{func:1,ret:f,args:[g]})
H.w(e,g)
t=$.O
if(t===c)return d.$1(e)
$.O=c
u=t
try{t=d.$1(e)
return t}finally{$.O=u}},
m3:function(a,b,c,d,e,f,g,h,i){var u,t
H.j(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
t=$.O
if(t===c)return d.$2(e,f)
$.O=c
u=t
try{t=d.$2(e,f)
return t}finally{$.O=u}},
hV:function(a,b,c,d){var u
H.j(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cc(d):c.iV(d,-1)
P.jY(d)},
h5:function h5(a){this.a=a},
h4:function h4(a,b,c){this.a=a
this.b=b
this.c=c},
h6:function h6(a){this.a=a},
h7:function h7(a){this.a=a},
dN:function dN(a){this.a=a
this.b=null
this.c=0},
hC:function hC(a,b){this.a=a
this.b=b},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aQ:function aQ(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
he:function he(a,b){this.a=a
this.b=b},
hi:function hi(a,b){this.a=a
this.b=b},
hf:function hf(a){this.a=a},
hg:function hg(a){this.a=a},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hm:function hm(a){this.a=a},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a){this.a=a
this.b=null},
fi:function fi(){},
fk:function fk(a,b){this.a=a
this.b=b},
fl:function fl(a,b){this.a=a
this.b=b},
c6:function c6(){},
fj:function fj(){},
aM:function aM(){},
ab:function ab(a,b){this.a=a
this.b=b},
hM:function hM(){},
hU:function hU(a,b){this.a=a
this.b=b},
hs:function hs(){},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
ht:function ht(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
l1:function(a,b,c,d,e){return new H.ay([d,e])},
l3:function(a,b,c){H.dU(a)
return H.h(H.mf(a,new H.ay([b,c])),"$ije",[b,c],"$aje")},
l2:function(a,b){return new H.ay([a,b])},
l5:function(a,b,c,d){return new P.hp([d])},
jM:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
jL:function(a,b,c){var u=new P.hq(a,b,[c])
u.c=a.e
return u},
kX:function(a,b,c){var u,t
if(P.iT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.k])
t=$.cy()
C.a.h(t,a)
try{P.m0(a,u)}finally{if(0>=t.length)return H.c(t,-1)
t.pop()}t=P.jt(b,H.kd(u,"$in"),", ")+c
return t.charCodeAt(0)==0?t:t},
iC:function(a,b,c){var u,t,s
if(P.iT(a))return b+"..."+c
u=new P.ae(b)
t=$.cy()
C.a.h(t,a)
try{s=u
s.a=P.jt(s.a,a,", ")}finally{if(0>=t.length)return H.c(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iT:function(a){var u,t
for(u=0;t=$.cy(),u<t.length;++u)if(a===t[u])return!0
return!1},
m0:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ia",[P.k],"$aa")
u=a.ga_(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.J())return
r=H.i(u.gP())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.J()){if(s<=5)return
if(0>=b.length)return H.c(b,-1)
q=b.pop()
if(0>=b.length)return H.c(b,-1)
p=b.pop()}else{o=u.gP();++s
if(!u.J()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.c(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gP();++s
for(;u.J();o=n,n=m){m=u.gP();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.c(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.i(o)
q=H.i(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
l4:function(a,b,c){var u=P.l1(null,null,null,b,c)
a.X(0,new P.eB(u,b,c))
return u},
iG:function(a){var u,t
u={}
if(P.iT(a))return"{...}"
t=new P.ae("")
try{C.a.h($.cy(),a)
t.a+="{"
u.a=!0
a.X(0,new P.eF(u,t))
t.a+="}"}finally{u=$.cy()
if(0>=u.length)return H.c(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
hp:function hp(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ck:function ck(a){this.a=a
this.c=this.b=null},
hq:function hq(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(){},
P:function P(){},
eE:function eE(){},
eF:function eF(a,b){this.a=a
this.b=b},
eG:function eG(){},
hD:function hD(){},
eH:function eH(){},
dw:function dw(a,b){this.a=a
this.$ti=b},
hw:function hw(){},
dJ:function dJ(){},
dQ:function dQ(){},
ly:function(a,b,c,d){H.h(b,"$ia",[P.l],"$aa")
if(b instanceof Uint8Array)return P.lz(!1,b,c,d)
return},
lz:function(a,b,c,d){var u,t,s
u=$.kw()
if(u==null)return
t=0===c
if(t&&!0)return P.iM(u,b)
s=b.length
d=P.b0(c,d,s,null,null,null)
if(t&&d===s)return P.iM(u,b)
return P.iM(u,b.subarray(c,d))},
iM:function(a,b){if(P.lB(b))return
return P.lC(a,b)},
lC:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.au(t)}return},
lB:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
lA:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.au(t)}return},
m4:function(a,b,c){var u,t,s
H.h(a,"$ia",[P.l],"$aa")
for(u=J.bI(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bC()
if((s&127)!==s)return t-b}return c-b},
j6:function(a,b,c,d,e,f){if(C.f.b7(f,4)!==0)throw H.d(P.W("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.W("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.W("Invalid base64 padding, more than two '=' characters",a,b))},
e_:function e_(a){this.a=a},
e0:function e0(a){this.a=a},
bk:function bk(){},
bo:function bo(){},
ef:function ef(){},
fN:function fN(a){this.a=a},
fP:function fP(){},
hL:function hL(a){this.b=this.a=0
this.c=a},
fO:function fO(a){this.a=a},
hJ:function hJ(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dT:function(a,b,c){var u
H.j(b,{func:1,ret:P.l,args:[P.k]})
u=H.lk(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.W(a,null,null))},
kU:function(a){if(a instanceof H.bP)return a.i(0)
return"Instance of '"+H.bw(a)+"'"},
l6:function(a,b,c,d){var u,t
H.w(b,d)
u=J.kZ(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.q(u,t,b)
return H.h(u,"$ia",[d],"$aa")},
l7:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.ga_(a);s.J();)C.a.h(t,H.w(s.gP(),c))
if(b)return t
return H.h(J.er(t),"$ia",u,"$aa")},
dh:function(a,b,c){var u,t
u=P.l
H.h(a,"$in",[u],"$an")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.h(a,"$iax",[u],"$aax")
t=a.length
c=P.b0(b,c,t,null,null,null)
return H.jp(b>0||c<t?C.a.eY(a,b,c):a)}if(!!J.Q(a).$ic_)return H.lm(a,b,P.b0(b,c,a.length,null,null,null))
return P.lt(a,b,c)},
lt:function(a,b,c){var u,t,s,r
H.h(a,"$in",[P.l],"$an")
if(b<0)throw H.d(P.a3(b,0,J.aR(a),null,null))
u=c==null
if(!u&&c<b)throw H.d(P.a3(c,b,J.aR(a),null,null))
t=J.cA(a)
for(s=0;s<b;++s)if(!t.J())throw H.d(P.a3(b,0,s,null,null))
r=[]
if(u)for(;t.J();)r.push(t.gP())
else for(s=b;s<c;++s){if(!t.J())throw H.d(P.a3(c,b,s,null,null))
r.push(t.gP())}return H.jp(r)},
lp:function(a,b,c){return new H.eu(a,H.l_(a,!1,!0,!1))},
jt:function(a,b,c){var u=J.cA(b)
if(!u.J())return a
if(c.length===0){do a+=H.i(u.gP())
while(u.J())}else{a+=H.i(u.gP())
for(;u.J();)a=a+c+H.i(u.gP())}return a},
jz:function(){var u=H.lc()
if(u!=null)return P.lx(u,0,null)
throw H.d(P.Y("'Uri.base' is not supported"))},
hI:function(a,b,c,d){var u,t,s,r,q,p
H.h(a,"$ia",[P.l],"$aa")
if(c===C.m){u=$.kB().b
if(typeof b!=="string")H.q(H.ak(b))
u=u.test(b)}else u=!1
if(u)return b
H.w(b,H.ap(c,"bk",0))
t=c.gjj().cj(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.d7(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
kR:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kS:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cJ:function(a){if(a>=10)return""+a
return"0"+a},
jb:function(a,b,c,d,e,f){return new P.aF(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eh:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.al(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kU(a)},
dY:function(a){return new P.aD(!1,null,null,a)},
iw:function(a,b,c){return new P.aD(!0,a,b,c)},
d9:function(a,b,c){return new P.bx(null,null,!0,a,b,"Value not in range")},
a3:function(a,b,c,d,e){return new P.bx(b,c,!0,a,d,"Invalid value")},
b0:function(a,b,c,d,e,f){if(typeof a!=="number")return H.r(a)
if(0>a||a>c)throw H.d(P.a3(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.d(P.a3(b,a,c,"end",f))
return b}return c},
bW:function(a,b,c,d,e){var u=H.a8(e==null?J.aR(b):e)
return new P.eq(b,u,!0,a,c,"Index out of range")},
Y:function(a){return new P.fH(a)},
fF:function(a){return new P.fE(a)},
bm:function(a){return new P.e6(a)},
u:function(a){return new P.dG(a)},
W:function(a,b,c){return new P.eo(a,b,c)},
l8:function(a,b,c,d){var u,t
H.j(b,{func:1,ret:d,args:[P.l]})
u=H.b([],[d])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.q(u,t,b.$1(t))
return u},
j0:function(a){H.mv(a)},
lx:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.G(a,b+4)^58)*3|C.c.G(a,b)^100|C.c.G(a,b+1)^97|C.c.G(a,b+2)^116|C.c.G(a,b+3)^97)>>>0
if(t===0)return P.jy(b>0||c<c?C.c.u(a,b,c):a,5,null).geK()
else if(t===32)return P.jy(C.c.u(a,u,c),0,null).geK()}s=new Array(8)
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
if(P.jX(a,b,c,0,r)>=14)C.a.q(r,7,c)
q=r[1]
if(typeof q!=="number")return q.ke()
if(q>=b)if(P.jX(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.l()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.T()
if(typeof m!=="number")return H.r(m)
if(l<m)m=l
if(typeof n!=="number")return n.T()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.T()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.T()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.a6(a,"..",n)))i=m>n+2&&C.c.a6(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.a6(a,"file",b)){if(p<=b){if(!C.c.a6(a,"/",n)){h="file:///"
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
n=7}else if(n===m)if(b===0&&!0){a=C.c.aN(a,n,m,"/");++m;++l;++c}else{a=C.c.u(a,b,n)+"/"+C.c.u(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.a6(a,"http",b)){if(s&&o+3===n&&C.c.a6(a,"80",o+1))if(b===0&&!0){a=C.c.aN(a,o,n,"")
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
else if(q===u&&C.c.a6(a,"https",b)){if(s&&o+4===n&&C.c.a6(a,"443",o+1))if(b===0&&!0){a=C.c.aN(a,o,n,"")
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
l-=b}return new P.hx(a,q,p,o,n,m,l,j)}return P.lL(a,b,c,q,p,o,n,m,l,j)},
jB:function(a,b){var u=P.k
return C.a.jn(H.b(a.split("&"),[u]),P.l2(u,u),new P.fM(b),[P.G,P.k,P.k])},
lw:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.fJ(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.W(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.dT(C.c.u(a,q,r),null,null)
if(typeof n!=="number")return n.cV()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.c(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.dT(C.c.u(a,q,c),null,null)
if(typeof n!=="number")return n.cV()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.c(t,p)
t[p]=n
return t},
jA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.fK(a)
t=new P.fL(u,a)
if(a.length<2)u.$1("address is too short")
s=H.b([],[P.l])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.W(a,r)
if(n===58){if(r===b){++r
if(C.c.W(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaz(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.lw(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.c(j,g)
j[g]=0
d=g+1
if(d>=i)return H.c(j,d)
j[d]=0
g+=2}else{d=C.f.aH(f,8)
if(g<0||g>=i)return H.c(j,g)
j[g]=d
d=g+1
if(d>=i)return H.c(j,d)
j[d]=f&255
g+=2}}return j},
lL:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.lS(a,b,d)
else{if(d===b)P.cp(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.lT(a,u,e-1):""
s=P.lP(a,e,f,!1)
if(typeof f!=="number")return f.l()
r=f+1
if(typeof g!=="number")return H.r(g)
q=r<g?P.lR(P.dT(C.c.u(a,r,g),new P.hE(a,f),null),j):null}else{t=""
s=null
q=null}p=P.lQ(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.T()
o=h<i?P.iP(a,h+1,i,null):null
return new P.bB(j,t,s,q,p,o,i<c?P.lO(a,i+1,c):null)},
jN:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cp:function(a,b,c){throw H.d(P.W(c,a,b))},
lR:function(a,b){if(a!=null&&a===P.jN(b))return
return a},
lP:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.W(a,b)===91){if(typeof c!=="number")return c.m()
u=c-1
if(C.c.W(a,u)!==93)P.cp(a,b,"Missing end `]` to match `[` in host")
P.jA(a,b+1,u)
return C.c.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.r(c)
t=b
for(;t<c;++t)if(C.c.W(a,t)===58){P.jA(a,b,c)
return"["+a+"]"}return P.lV(a,b,c)},
lV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.r(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.W(a,u)
if(q===37){p=P.jT(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ae("")
n=C.c.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.c(C.C,o)
o=(C.C[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ae("")
if(t<u){s.a+=C.c.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.c(C.p,o)
o=(C.p[o]&1<<(q&15))!==0}else o=!1
if(o)P.cp(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.W(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ae("")
n=C.c.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.jO(q)
u+=l
t=u}}}}if(s==null)return C.c.u(a,b,c)
if(t<c){n=C.c.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
lS:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.jQ(C.c.G(a,b)))P.cp(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.c(C.r,r)
r=(C.r[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cp(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.u(a,b,c)
return P.lM(t?a.toLowerCase():a)},
lM:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lT:function(a,b,c){return P.cq(a,b,c,C.X,!1)},
lQ:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cq(a,b,c,C.D,!0):C.o.kh(d,new P.hF(),P.k).D(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a5(r,"/"))r="/"+r
return P.lU(r,e,f)},
lU:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a5(a,"/"))return P.lW(a,!u||c)
return P.lX(a)},
iP:function(a,b,c,d){var u,t
u={}
H.h(d,"$iG",[P.k,null],"$aG")
if(a!=null){if(d!=null)throw H.d(P.dY("Both query and queryParameters specified"))
return P.cq(a,b,c,C.q,!0)}if(d==null)return
t=new P.ae("")
u.a=""
d.X(0,new P.hG(new P.hH(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
lO:function(a,b,c){return P.cq(a,b,c,C.q,!0)},
jT:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.W(a,b+1)
s=C.c.W(a,u)
r=H.i4(t)
q=H.i4(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aH(p,4)
if(u>=8)return H.c(C.t,u)
u=(C.t[u]&1<<(p&15))!==0}else u=!1
if(u)return H.d7(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.u(a,b,b+3).toUpperCase()
return},
jO:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.l])
C.a.q(t,0,37)
C.a.q(t,1,C.c.G("0123456789ABCDEF",a>>>4))
C.a.q(t,2,C.c.G("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.f.i7(a,6*r)&63|s
C.a.q(t,q,37)
C.a.q(t,q+1,C.c.G("0123456789ABCDEF",p>>>4))
C.a.q(t,q+2,C.c.G("0123456789ABCDEF",p&15))
q+=3}}return P.dh(t,0,null)},
cq:function(a,b,c,d,e){var u=P.jS(a,b,c,H.h(d,"$ia",[P.l],"$aa"),e)
return u==null?C.c.u(a,b,c):u},
jS:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.h(d,"$ia",[P.l],"$aa")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.T()
if(typeof c!=="number")return H.r(c)
if(!(t<c))break
c$0:{q=C.c.W(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.c(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.jT(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.c(C.p,p)
p=(C.p[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cp(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.W(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.jO(q)}}if(r==null)r=new P.ae("")
r.a+=C.c.u(a,s,t)
r.a+=H.i(o)
if(typeof n!=="number")return H.r(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.T()
if(s<c)r.a+=C.c.u(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
jR:function(a){if(C.c.a5(a,"."))return!0
return C.c.ej(a,"/.")!==-1},
lX:function(a){var u,t,s,r,q,p,o
if(!P.jR(a))return a
u=H.b([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.K(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.c(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.D(u,"/")},
lW:function(a,b){var u,t,s,r,q,p
if(!P.jR(a))return!b?P.jP(a):a
u=H.b([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaz(u)!==".."){if(0>=u.length)return H.c(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.c(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaz(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.c(u,0)
C.a.q(u,0,P.jP(u[0]))}return C.a.D(u,"/")},
jP:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.jQ(J.kH(a,0)))for(t=1;t<u;++t){s=C.c.G(a,t)
if(s===58)return C.c.u(a,0,t)+"%3A"+C.c.aA(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.c(C.r,r)
r=(C.r[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
lN:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.dY("Invalid URL encoding"))}}return u},
iQ:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.G(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.u(a,b,c)
else q=new H.Z(C.c.u(a,b,c))}else{q=H.b([],[P.l])
for(r=a.length,t=b;t<c;++t){s=C.c.G(a,t)
if(s>127)throw H.d(P.dY("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.d(P.dY("Truncated URI"))
C.a.h(q,P.lN(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.h(q,"$ia",[P.l],"$aa")
return new P.fO(!1).cj(q)},
jQ:function(a){var u=a|32
return 97<=u&&u<=122},
jy:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.b([b-1],[P.l])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.G(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.d(P.W("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.d(P.W("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.G(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaz(u)
if(q!==44||s!==o+7||!C.c.a6(a,"base64",o+1))throw H.d(P.W("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.I.jz(a,n,t)
else{m=P.jS(a,n,t,C.q,!0)
if(m!=null)a=C.c.aN(a,n,t,m)}return new P.fI(a,u,c)},
lZ:function(){var u,t,s,r,q
u=P.l8(22,new P.hQ(),!0,P.J)
t=new P.hP(u)
s=new P.hR()
r=new P.hS()
q=H.e(t.$2(0,225),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(14,225),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(15,225),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(1,225),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(2,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(3,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(4,229),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(5,229),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(6,231),"$iJ")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(7,231),"$iJ")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.e(t.$2(8,8),"$iJ"),"]",5)
q=H.e(t.$2(9,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(16,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(17,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(10,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(18,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(19,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(11,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(12,236),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.e(t.$2(13,237),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.e(t.$2(20,245),"$iJ"),"az",21)
q=H.e(t.$2(21,245),"$iJ")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
jX:function(a,b,c,d,e){var u,t,s,r,q
H.h(e,"$ia",[P.l],"$aa")
u=$.kC()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.c(u,d)
s=u[d]
r=C.c.G(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.c(s,r)
q=s[r]
d=q&31
C.a.q(e,q>>>5,t)}return d},
a5:function a5(){},
ac:function ac(a,b){this.a=a
this.b=b},
o:function o(){},
aF:function aF(a){this.a=a},
ec:function ec(){},
ed:function ed(){},
b9:function b9(){},
d4:function d4(){},
aD:function aD(a,b,c,d){var _=this
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
eq:function eq(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fH:function fH(a){this.a=a},
fE:function fE(a){this.a=a},
df:function df(a){this.a=a},
e6:function e6(a){this.a=a},
eY:function eY(){},
de:function de(){},
ea:function ea(a){this.a=a},
dG:function dG(a){this.a=a},
eo:function eo(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
n:function n(){},
aH:function aH(){},
a:function a(){},
G:function G(){},
A:function A(){},
aa:function aa(){},
I:function I(){},
aj:function aj(){},
k:function k(){},
ae:function ae(a){this.a=a},
fM:function fM(a){this.a=a},
fJ:function fJ(a){this.a=a},
fK:function fK(a){this.a=a},
fL:function fL(a,b){this.a=a
this.b=b},
bB:function bB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
hE:function hE(a,b){this.a=a
this.b=b},
hF:function hF(){},
hH:function hH(a,b){this.a=a
this.b=b},
hG:function hG(a){this.a=a},
fI:function fI(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(){},
hP:function hP(a){this.a=a},
hR:function hR(){},
hS:function hS(){},
hx:function hx(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
ha:function ha(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
ma:function(a,b){var u={}
a.X(0,new P.hW(u))
return u},
hy:function hy(){},
hA:function hA(a,b){this.a=a
this.b=b},
hW:function hW(a){this.a=a},
hz:function hz(a,b){this.a=a
this.b=b},
ek:function ek(a,b){this.a=a
this.b=b},
el:function el(){},
em:function em(){},
ho:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lI:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hr:function hr(){},
aq:function aq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
p:function p(){},
J:function J(){},
cD:function cD(){},
cN:function cN(){},
d8:function d8(){},
by:function by(){},
dc:function dc(){},
du:function du(){}},W={
j9:function(a,b){var u=document.createElement("canvas")
return u},
kT:function(a){H.e(a,"$ibp")
return"wheel"},
kW:function(a){var u,t,s
t=document.createElement("input")
u=H.e(t,"$ibX")
try{u.type=a}catch(s){H.au(s)}return u},
hn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jK:function(a,b,c,d){var u,t
u=W.hn(W.hn(W.hn(W.hn(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a4:function(a,b,c,d,e){var u,t
u=W.k_(new W.hd(c),W.m)
t=u!=null
if(t&&!0){H.j(u,{func:1,args:[W.m]})
if(t)J.kG(a,b,u,!1)}return new W.hc(a,b,u,!1,[e])},
k_:function(a,b){var u
H.j(a,{func:1,ret:-1,args:[b]})
u=$.O
if(u===C.k)return a
return u.dK(a,b)},
v:function v(){},
dW:function dW(){},
dX:function dX(){},
cC:function cC(){},
bj:function bj(){},
b8:function b8(){},
bQ:function bQ(){},
e9:function e9(){},
bR:function bR(){},
bS:function bS(){},
eb:function eb(){},
cK:function cK(){},
h9:function h9(a,b){this.a=a
this.b=b},
V:function V(){},
m:function m(){},
bp:function bp(){},
en:function en(){},
cO:function cO(){},
br:function br(){},
cP:function cP(){},
bX:function bX(){},
aI:function aI(){},
cU:function cU(){},
a6:function a6(){},
h8:function h8(a){this.a=a},
H:function H(){},
c0:function c0(){},
f8:function f8(){},
aL:function aL(){},
di:function di(){},
dj:function dj(){},
aA:function aA(){},
aB:function aB(){},
fr:function fr(){},
be:function be(){},
aP:function aP(){},
ci:function ci(){},
dF:function dF(){},
hb:function hb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iO:function iO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hc:function hc(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hd:function hd(a){this.a=a},
aw:function aw(){},
cM:function cM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dE:function dE(){},
dH:function dH(){},
dI:function dI(){},
dK:function dK(){},
dL:function dL(){},
dO:function dO(){},
dP:function dP(){}},O={
iy:function(a){var u=new O.T([a])
u.bH(a)
return u},
T:function T(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bY:function bY(){this.b=this.a=null},
cZ:function cZ(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eL:function eL(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d_:function d_(){},
eM:function eM(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aJ:function aJ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eO:function eO(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eP:function eP(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bA:function bA(){}},E={
lq:function(a,b){var u=new E.f3(a,b)
u.f4(a,b)
return u},
lu:function(a,b,c,d,e){var u,t,s,r
u=J.Q(a)
if(!!u.$ibj)return E.ju(a,!0,!0,!0,!1)
t=W.j9(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gci(a).h(0,t)
r=E.ju(t,!0,!0,!0,!1)
r.a=a
return r},
ju:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dq()
t=P.l3(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.k,null)
s=C.n.cS(a,"webgl",t)
s=H.e(s==null?C.n.cS(a,"experimental-webgl",t):s,"$iby")
if(s==null)H.q(P.u("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.lq(s,a)
r=new T.fn(s)
r.b=H.a8((s&&C.b).cU(s,3379))
r.c=H.a8(C.b.cU(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dx(a)
q=new X.ew()
q.c=new X.an(!1,!1,!1)
q.shQ(P.l5(null,null,null,P.l))
r.b=q
q=new X.eR(r)
q.f=0
q.r=V.bd()
q.x=V.bd()
q.Q=1
q.ch=1
r.c=q
q=new X.eD(r)
q.r=0
q.x=V.bd()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.fq(r)
q.e=0
q.f=V.bd()
q.r=V.bd()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sfI(H.b([],[[P.c6,P.I]]))
q=r.z
p=document
o=W.a6
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a4(p,"contextmenu",H.j(r.ghf(),n),!1,o))
q=r.z
m=W.m
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a4(a,"focus",H.j(r.ghl(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a4(a,"blur",H.j(r.gh7(),l),!1,m))
q=r.z
k=W.aI
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a4(p,"keyup",H.j(r.ghp(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a4(p,"keydown",H.j(r.ghn(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a4(a,"mousedown",H.j(r.ght(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a4(a,"mouseup",H.j(r.ghx(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a4(a,"mousemove",H.j(r.ghv(),n),!1,o))
k=r.z
j=W.aP;(k&&C.a).h(k,W.a4(a,H.N(W.kT(a)),H.j(r.ghz(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a4(p,"mousemove",H.j(r.ghh(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a4(p,"mouseup",H.j(r.ghj(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a4(p,"pointerlockchange",H.j(r.ghB(),l),!1,m))
m=r.z
l=W.aB
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a4(a,"touchstart",H.j(r.ghN(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a4(a,"touchend",H.j(r.ghJ(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a4(a,"touchmove",H.j(r.ghL(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ac(Date.now(),!1)
u.cy=0
u.dA()
return u},
e1:function e1(){},
ah:function ah(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f3:function f3(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
f4:function f4(a){this.a=a},
f5:function f5(a){this.a=a},
f6:function f6(a){this.a=a},
dg:function dg(a,b){this.c=a
this.a=b
this.b=null},
dq:function dq(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fo:function fo(a){this.a=a}},Z={
iN:function(a,b,c){var u
H.h(c,"$ia",[P.l],"$aa")
u=a.createBuffer()
C.b.an(a,b,u)
C.b.dM(a,b,new Int16Array(H.bC(c)),35044)
C.b.an(a,b,null)
return new Z.dC(b,u)},
ar:function(a){return new Z.aO(a)},
dC:function dC(a,b){this.a=a
this.b=b},
cE:function cE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h1:function h1(a){this.a=a},
cF:function cF(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
ba:function ba(a,b,c){this.a=a
this.b=b
this.c=c},
aO:function aO(a){this.a=a}},D={
L:function(){var u=new D.aG()
u.sa3(null)
u.saw(null)
u.c=null
u.d=0
return u},
e4:function e4(){},
aG:function aG(){var _=this
_.d=_.c=_.b=_.a=null},
ei:function ei(a){this.a=a},
x:function x(a){this.a=a
this.b=null},
bs:function bs(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bt:function bt(a,b,c,d){var _=this
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
aS:function aS(){var _=this
_.d=_.c=_.b=_.a=null},
X:function X(){},
cV:function cV(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
d6:function d6(){},
dd:function dd(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){}},X={cG:function cG(a,b){this.a=a
this.b=b},cT:function cT(a,b){this.a=a
this.b=b},ew:function ew(){var _=this
_.d=_.c=_.b=_.a=null},cX:function cX(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},eD:function eD(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},an:function an(a,b,c){this.a=a
this.b=b
this.c=c},aY:function aY(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},eR:function eR(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bZ:function bZ(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},f_:function f_(){},ds:function ds(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fq:function fq(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dx:function dx(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kV:function(a,b,c,d,e,f,g){var u,t
u=new X.ep()
t=new V.av(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.jr
if(t==null){t=V.jq(0,0,1,1)
$.jr=t}u.r=t
return u},
cH:function cH(){},
ep:function ep(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d5:function d5(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dk:function dk(){}},V={
it:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.b7(a-b,u)
return(a<0?a+u:a)+b},
F:function(a,b,c){if(a==null)return C.c.ab("null",c)
return C.c.ab(C.e.eG(Math.abs(a-0)<$.B().a?0:a,b),c+b+1)},
bH:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ia",[P.o],"$aa")
u=H.b([],[P.k])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.y)(a),++r){q=V.F(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.c(u,p)
C.a.q(u,p,C.c.ab(u[p],s))}return u},
ai:function(){var u=$.ji
if(u==null){u=V.aK(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.ji=u}return u},
aK:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ad(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eQ:function(a,b,c){return V.aK(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
iH:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aK(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
jg:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aK(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
jh:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aK(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
jf:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.v(0,Math.sqrt(c.E(c)))
t=b.ay(u)
s=t.v(0,Math.sqrt(t.E(t)))
r=u.ay(s)
q=new V.z(a.a,a.b,a.c)
p=s.O(0).E(q)
o=r.O(0).E(q)
n=u.O(0).E(q)
return V.aK(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bd:function(){var u=$.jm
if(u==null){u=new V.a1(0,0)
$.jm=u}return u},
jn:function(){var u=$.c1
if(u==null){u=new V.R(0,0,0)
$.c1=u}return u},
jq:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.da(a,b,c,d)},
ch:function(){var u=$.jG
if(u==null){u=new V.z(0,0,0)
$.jG=u}return u},
jH:function(){var u=$.jF
if(u==null){u=new V.z(0,1,0)
$.jF=u}return u},
jI:function(){var u=$.fQ
if(u==null){u=new V.z(0,0,1)
$.fQ=u}return u},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eg:function eg(a){this.a=a},
d0:function d0(a,b,c,d,e,f,g,h,i){var _=this
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
a1:function a1(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
da:function da(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
M:function M(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
a9:function(a){var u=new V.f9()
u.f5(a)
return u},
dV:function dV(){},
aX:function aX(){},
cY:function cY(){},
b_:function b_(){this.a=null},
f9:function f9(){this.a=null},
c5:function c5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
c7:function c7(a,b){this.a=a
this.b=b
this.c=null},
fp:function fp(){this.c=this.b=this.a=null},
c8:function c8(a){this.b=a
this.a=this.c=null},
my:function(a){P.lv(C.M,new V.im(a))},
ls:function(a,b){var u=new V.fd()
u.f7(a,!0)
return u},
im:function im(a){this.a=a},
f0:function f0(a,b){this.a=a
this.b=b
this.c=null},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fd:function fd(){this.b=this.a=null},
ff:function ff(a){this.a=a},
fe:function fe(a){this.a=a}},U={
iz:function(){var u=new U.e5()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
bn:function(a){var u=new U.cI()
if(a==null)a=V.ai()
if(null!=a)u.a=a
return u},
iB:function(a){var u=new U.bV()
u.bH(U.a2)
u.b8(u.gfb(),u.ghF())
u.e=null
u.f=V.ai()
u.r=0
return u},
c3:function(a,b,c,d,e,f){var u,t
u=new U.db()
u.a=0
u.b=0
u.c=0
u.d=0
u.e=0
u.f=0
u.r=0
u.seN(f)
u.sew(d)
u.seC(e)
t=u.d
if(!(Math.abs(t-c)<$.B().a)){u.d=c
t=new D.C("deltaYaw",t,c,u,[P.o])
t.b=!0
u.F(t)}t=u.e
if(!(Math.abs(t-a)<$.B().a)){u.e=a
t=new D.C("deltaPitch",t,a,u,[P.o])
t.b=!0
u.F(t)}t=u.f
if(!(Math.abs(t-b)<$.B().a)){u.f=b
t=new D.C("deltaRoll",t,b,u,[P.o])
t.b=!0
u.F(t)}return u},
e5:function e5(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cI:function cI(){this.b=this.a=null},
bV:function bV(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a2:function a2(){},
db:function db(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dy:function dy(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dz:function dz(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dA:function dA(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cL:function cL(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
l9:function(a,b){var u,t
u=a.af
t=new A.eK(b,u)
t.f6(b,u)
t.f3(a,b)
return t},
iK:function(a,b,c,d,e){var u=new A.fw(a,b,c,e)
u.f=d
u.sip(P.l6(d,0,!1,P.l))
return u},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(a){this.a=a},
eK:function eK(a,b){var _=this
_.bh=_.dR=_.bg=_.af=_.ap=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.e6=_.co=_.e5=_.bu=_.e4=_.e3=_.bt=_.bs=_.e2=_.e1=_.br=_.bq=_.bp=_.e0=_.e_=_.bo=_.dZ=_.dY=_.bn=_.dX=_.dW=_.bm=_.bl=_.dV=_.dU=_.bk=_.bj=_.dT=_.dS=_.bi=null
_.ct=_.ea=_.cs=_.e9=_.cr=_.e8=_.cq=_.e7=_.cp=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eN:function eN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.af=b4
_.bg=b5},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
cd:function cd(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cb:function cb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ce:function ce(a,b,c,d,e,f,g,h,i,j){var _=this
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
cc:function cc(a,b,c,d,e,f,g,h,i,j){var _=this
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
cf:function cf(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
c4:function c4(){},
bl:function bl(a,b){this.a=a
this.b=b},
dt:function dt(){},
fC:function fC(a){this.a=a},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fy:function fy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fz:function fz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fB:function fB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fw:function fw(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
S:function S(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fx:function fx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
D:function D(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fA:function fA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fD:function fD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ca:function ca(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
k4:function(a,b,c,d){var u
H.j(c,{func:1,ret:-1,args:[F.a7,P.o,P.o]})
u=F.iI()
F.cr(u,b,c,d,a,1,0,0,1)
F.cr(u,b,c,d,a,0,1,0,3)
F.cr(u,b,c,d,a,0,0,1,2)
F.cr(u,b,c,d,a,-1,0,0,0)
F.cr(u,b,c,d,a,0,-1,0,0)
F.cr(u,b,c,d,a,0,0,-1,3)
u.ae()
return u},
hO:function(a){var u,t
u=a.a>0?1:0
if(a.b>0)u+=2
t=a.c
if(typeof t!=="number")return t.cV()
return(t>0?u+4:u)*2},
cr:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.j(c,{func:1,ret:-1,args:[F.a7,P.o,P.o]})
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
u.d=t}g=F.hO(t)
f=F.hO(u.b)
e=F.iq(d,a0,new F.hN(u,F.hO(u.c),F.hO(u.d),f,g,c),b)
if(e!=null)a.aZ(e)},
k7:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.j(e,{func:1,ret:P.o,args:[P.o]})
if(a0<3)return
u=F.iI()
t=b?-1:1
s=-6.283185307179586/a0
r=H.b([],[F.a7])
q=u.a
p=new V.z(0,0,t)
p=p.v(0,Math.sqrt(p.E(p)))
C.a.h(r,q.iQ(new V.az(a,-1,-1,-1),new V.av(1,1,1,1),new V.R(0,0,d),new V.z(0,0,t),new V.a1(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.r(k)
j=new V.z(m,l,t).v(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dB(new V.az(a,-1,-1,-1),null,new V.av(i,g,h,1),new V.R(m*k,l*k,d),new V.z(0,0,t),new V.a1(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.iO(r)
return u},
k5:function(a,b,c,d,e,f){return F.mb(!0,c,d,new F.hX(a,f),e)},
mb:function(a,b,c,d,e){var u
H.j(d,{func:1,ret:P.o,args:[P.o,P.o]})
if(e<3)return
if(c<1)return
u=F.iq(c,e,new F.hZ(d),null)
if(u==null)return
u.ae()
u.c7()
if(b)u.aZ(F.k7(3,!1,!1,1,new F.i_(d),e))
u.aZ(F.k7(1,!0,!1,-1,new F.i0(d),e))
return u},
mz:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.io()
t=F.k4(a,null,new F.ip(u,c),d)
t.c7()
return t},
mC:function(a,b,c,d){return F.k6(c,a,d,b,new F.ir())},
mq:function(a,b,c,d,e,f){return F.k6(d,a,e,b,new F.i9(f,c))},
k6:function(a,b,c,d,e){var u=F.iq(a,b,new F.hY(H.j(e,{func:1,ret:V.R,args:[P.o]}),d,b,c),null)
if(u==null)return
u.ae()
u.c7()
return u},
mk:function(a,b,c){var u={}
u.a=b
u.a=new F.i2()
return F.iq(c,a,new F.i3(u),null)},
iq:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,{func:1,ret:-1,args:[F.a7,P.o,P.o]})
if(a<1)return
if(b<1)return
u=F.iI()
t=H.b([],[F.a7])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dB(null,null,new V.av(p,0,0,1),null,null,new V.a1(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.ck(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dB(null,null,new V.av(j,i,h,1),null,null,new V.a1(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.ck(d))}}u.d.iP(a+1,b+1,t)
return u},
bT:function(a,b,c){var u,t
u=new F.a_()
t=a.a
if(t==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
u.c5(a)
u.c6(b)
u.i2(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a0()
return u},
l0:function(a,b){var u,t
u=new F.aW()
t=a.a
if(t==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
u.c5(a)
u.c6(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a0()
return u},
iI:function(){var u,t
u=new F.bz()
t=new F.fR(u)
t.b=!1
t.siq(H.b([],[F.a7]))
u.a=t
t=new F.fc(u)
t.sbY(H.b([],[F.bc]))
u.b=t
t=new F.fb(u)
t.sfS(H.b([],[F.aW]))
u.c=t
t=new F.fa(u)
t.sfJ(H.b([],[F.a_]))
u.d=t
u.e=null
return u},
dB:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.a7()
t=new F.fZ(u)
t.sbY(H.b([],[F.bc]))
u.b=t
t=new F.fV(u)
s=[F.aW]
t.sfT(H.b([],s))
t.sfU(H.b([],s))
u.c=t
t=new F.fS(u)
s=[F.a_]
t.sfK(H.b([],s))
t.sfL(H.b([],s))
t.sfM(H.b([],s))
u.d=t
h=$.kx()
u.e=0
t=$.b5()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.b4().a)!==0?e:null
u.x=(s&$.b3().a)!==0?b:null
u.y=(s&$.b6().a)!==0?f:null
u.z=(s&$.b7().a)!==0?g:null
u.Q=(s&$.ky().a)!==0?c:null
u.ch=(s&$.bM().a)!==0?i:0
u.cx=(s&$.b2().a)!==0?a:null
return u},
hN:function hN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hX:function hX(a,b){this.a=a
this.b=b},
hZ:function hZ(a){this.a=a},
i_:function i_(a){this.a=a},
i0:function i0(a){this.a=a},
io:function io(){},
ip:function ip(a,b){this.a=a
this.b=b},
ir:function ir(){},
i9:function i9(a,b){this.a=a
this.b=b},
hY:function hY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i2:function i2(){},
i3:function i3(a){this.a=a},
a_:function a_(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ej:function ej(){},
fg:function fg(){},
aW:function aW(){this.b=this.a=null},
ex:function ex(){},
fv:function fv(){},
bc:function bc(){this.a=null},
bz:function bz(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fa:function fa(a){this.a=a
this.b=null},
fb:function fb(a){this.a=a
this.b=null},
fc:function fc(a){this.a=a
this.b=null},
a7:function a7(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h0:function h0(a){this.a=a},
h_:function h_(a){this.a=a},
fR:function fR(a){this.a=a
this.c=this.b=null},
fS:function fS(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fT:function fT(a,b){this.a=a
this.b=b},
fU:function fU(a,b){this.a=a
this.b=b},
fV:function fV(a){this.a=a
this.c=this.b=null},
fX:function fX(){},
fW:function fW(){},
fY:function fY(){},
eW:function eW(){},
fZ:function fZ(a){this.a=a
this.b=null}},T={dl:function dl(){},fn:function fn(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}},K={
ke:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=V.ls("Test 035",!0)
t=W.j9(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.l.V(u.a,t)
s=[P.k]
u.dI(H.b(["A test of the bending a shape with the Material Light Shader. ","Not all of the shapes have predefined bend values."],s))
u.iN(H.b(["shapes"],s))
u.dI(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=C.x.cT(s,"testCanvas")
if(r==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
q=E.lu(r,!0,!0,!0,!1)
p=new E.ah()
p.a=""
p.b=!0
u=E.ah
p.sfz(0,O.iy(u))
p.y.b8(p.gjA(),p.gjD())
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
p.scX(0,null)
p.sb_(null)
p.sb_(U.bn(null))
o=new O.cZ()
o.sfu(O.iy(V.ad))
o.e.b8(o.gh3(),o.gh5())
n=new O.aJ(o,"emission")
n.c=C.d
n.f=new V.U(0,0,0)
o.f=n
n=new O.aJ(o,"ambient")
n.c=C.d
n.f=new V.U(0,0,0)
o.r=n
n=new O.aJ(o,"diffuse")
n.c=C.d
n.f=new V.U(0,0,0)
o.x=n
n=new O.aJ(o,"invDiffuse")
n.c=C.d
n.f=new V.U(0,0,0)
o.y=n
n=new O.eP(o,"specular")
n.c=C.d
n.f=new V.U(0,0,0)
n.ch=100
o.z=n
n=new O.eM(o,"bump")
n.c=C.d
o.Q=n
o.ch=null
n=new O.aJ(o,"reflect")
n.c=C.d
n.f=new V.U(0,0,0)
o.cx=n
n=new O.eO(o,"refract")
n.c=C.d
n.f=new V.U(0,0,0)
n.ch=1
o.cy=n
n=new O.eL(o,"alpha")
n.c=C.d
n.f=1
o.db=n
n=new D.cV()
n.bH(D.X)
n.sfF(H.b([],[D.aS]))
n.shP(H.b([],[D.d6]))
n.si8(H.b([],[D.dd]))
n.sil(H.b([],[D.dm]))
n.sim(H.b([],[D.dn]))
n.sio(H.b([],[D.dp]))
n.Q=null
n.ch=null
n.cW(n.gh1(),n.ghD(),n.ghH())
o.dx=n
m=n.Q
if(m==null){m=D.L()
n.Q=m
n=m}else n=m
n.h(0,o.ghZ())
n=o.dx
m=n.ch
if(m==null){m=D.L()
n.ch=m
n=m}else n=m
n.h(0,o.gh9())
o.dy=null
n=o.dx
l=V.jH()
m=U.bn(V.jf(V.jn(),l,new V.z(1,1,-3)))
k=new V.U(1,1,1)
j=new D.aS()
j.c=new V.U(1,1,1)
j.a=V.jI()
i=j.b
j.b=m
m.gB().h(0,j.gf9())
m=new D.C("mover",i,j.b,j,[U.a2])
m.b=!0
j.ar(m)
if(!j.c.t(0,k)){i=j.c
j.c=k
m=new D.C("color",i,k,j,[V.U])
m.b=!0
j.ar(m)}n.h(0,j)
n=o.r
n.sao(0,new V.U(0,0,1))
n=o.x
n.sao(0,new V.U(0,1,0))
n=o.z
n.sao(0,new V.U(1,0,0))
n=o.z
if(n.c===C.d){n.c=C.j
n.bG()
n.c2(100)
m=n.a
m.a=null
m.a7(null)}n.c2(10)
o.e.h(0,V.ai())
o.e.h(0,V.ai())
o.e.h(0,V.ai())
o.e.h(0,V.ai())
o.e.h(0,V.ai())
o.e.h(0,V.ai())
o.e.h(0,V.ai())
o.e.h(0,V.ai())
h=U.iB(null)
n=q.r
m=new U.dz()
j=U.iz()
j.scR(0,!0)
j.scC(6.283185307179586)
j.scE(0)
j.sY(0,0)
j.scD(100)
j.sS(0)
j.scl(0.5)
m.b=j
g=m.gaC()
j.gB().h(0,g)
j=U.iz()
j.scR(0,!0)
j.scC(6.283185307179586)
j.scE(0)
j.sY(0,0)
j.scD(100)
j.sS(0)
j.scl(0.5)
m.c=j
j.gB().h(0,g)
m.d=null
m.e=!1
m.f=!1
m.r=!1
m.x=2.5
m.y=2.5
m.z=2
m.Q=4
m.cx=!1
m.ch=!1
m.cy=0
m.db=0
m.dx=null
m.dy=0
m.fr=null
m.fx=null
f=new X.an(!1,!1,!1)
i=m.d
m.d=f
j=[X.an]
g=new D.C("modifiers",i,f,m,j)
g.b=!0
m.F(g)
g=m.f
if(g!==!1){m.f=!1
g=new D.C("invertX",g,!1,m,[P.a5])
g.b=!0
m.F(g)}g=m.r
if(g!==!1){m.r=!1
g=new D.C("invertY",g,!1,m,[P.a5])
g.b=!0
m.F(g)}m.aR(n)
h.h(0,m)
n=q.r
m=new U.dy()
g=U.iz()
g.scR(0,!0)
g.scC(6.283185307179586)
g.scE(0)
g.sY(0,0)
g.scD(100)
g.sS(0)
g.scl(0.2)
m.b=g
g.gB().h(0,m.gaC())
m.c=null
m.d=!1
m.e=2.5
m.f=2
m.r=4
m.y=!1
m.x=!1
m.z=0
m.Q=null
m.ch=0
m.cx=null
m.cy=null
f=new X.an(!0,!1,!1)
i=m.c
m.c=f
g=new D.C("modifiers",i,f,m,j)
g.b=!0
m.F(g)
m.aR(n)
h.h(0,m)
n=q.r
m=new U.dA()
m.c=0.01
m.d=0
m.e=0
f=new X.an(!1,!1,!1)
m.b=f
j=new D.C("modifiers",null,f,m,j)
j.b=!0
m.F(j)
m.aR(n)
h.h(0,m)
h.h(0,U.bn(V.eQ(0,0,5)))
e=U.iB(null)
e.h(0,U.bn(V.eQ(0.5,0,0)))
e.h(0,U.c3(0,1.7,0,0,0,0))
e.h(0,U.c3(0.5,0,0,0,0,0))
e.h(0,U.bn(V.iH(0.35)))
e.h(0,U.c3(-0.5,0,0,0,0,0))
e.h(0,U.c3(0,-1.7,0,0,0,0))
e.h(0,U.bn(V.eQ(-0.5,0,0)))
d=U.iB(null)
d.h(0,U.c3(0,-1.4,0,0,0,0))
d.h(0,U.bn(V.eQ(0.5,0,0)))
d.h(0,U.c3(0,1.4,0,0,0,0))
c=new M.cL()
c.sfd(0,O.iy(u))
c.d.b8(c.ghb(),c.ghd())
c.e=null
c.f=null
c.r=null
c.x=null
b=X.kV(!0,!0,!1,null,2000,null,0)
a=new X.d5()
a.c=1.0471975511965976
a.d=0.1
a.e=2000
a.sb_(null)
u=a.c
if(!(Math.abs(u-1.0471975511965976)<$.B().a)){a.c=1.0471975511965976
u=new D.C("fov",u,1.0471975511965976,a,[P.o])
u.b=!0
a.aD(u)}u=a.d
if(!(Math.abs(u-0.1)<$.B().a)){a.d=0.1
u=new D.C("near",u,0.1,a,[P.o])
u.b=!0
a.aD(u)}u=a.e
if(!(Math.abs(u-2000)<$.B().a)){a.e=2000
u=new D.C("far",u,2000,a,[P.o])
u.b=!0
a.aD(u)}u=c.a
if(u!==a){if(u!=null)u.gB().K(0,c.gal())
i=c.a
c.a=a
a.gB().h(0,c.gal())
u=new D.C("camera",i,c.a,c,[X.cH])
u.b=!0
c.as(u)}u=c.b
if(u!==b){if(u!=null)u.gB().K(0,c.gal())
i=c.b
c.b=b
b.gB().h(0,c.gal())
u=new D.C("target",i,c.b,c,[X.dk])
u.b=!0
c.as(u)}c.seE(null)
c.seE(o)
c.d.h(0,p)
c.a.sb_(h)
u=c.e
if(u==null){u=D.L()
c.e=u}u.h(0,new K.ia(e,d,o))
u=q.d
if(u!==c){if(u!=null)u.gB().K(0,q.gd_())
q.d=c
c.gB().h(0,q.gd_())
q.d0()}u=new K.ij(p)
n=new V.f0("shapes",!0)
s=C.x.cT(s,"shapes")
n.c=s
if(s==null)H.q("Failed to find shapes for RadioGroup")
n.dH(0,"Cuboid",new K.ib(u),!0)
n.aI(0,"Cylinder",new K.ic(u))
n.aI(0,"Cone",new K.id(u))
n.aI(0,"Sphere",new K.ie(u))
n.aI(0,"Toroid",new K.ig(u))
n.aI(0,"Knot",new K.ih(u))
n.aI(0,"Grid",new K.ii(u))
V.my(q)},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
ij:function ij(a){this.a=a},
ib:function ib(a){this.a=a},
ic:function ic(a){this.a=a},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
ig:function ig(a){this.a=a},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iE.prototype={}
J.a0.prototype={
t:function(a,b){return a===b},
gI:function(a){return H.c2(a)},
i:function(a){return"Instance of '"+H.bw(a)+"'"}}
J.es.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$ia5:1}
J.cR.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0},
$iA:1}
J.cS.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.eZ.prototype={}
J.bf.prototype={}
J.aU.prototype={
i:function(a){var u=a[$.kl()]
if(u==null)return this.f_(a)
return"JavaScript function for "+H.i(J.al(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iiA:1}
J.ax.prototype={
h:function(a,b){H.w(b,H.t(a,0))
if(!!a.fixed$length)H.q(P.Y("add"))
a.push(b)},
jQ:function(a,b){var u
if(!!a.fixed$length)H.q(P.Y("removeAt"))
u=a.length
if(b>=u)throw H.d(P.d9(b,null,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.q(P.Y("remove"))
for(u=0;u<a.length;++u)if(J.K(a[u],b)){a.splice(u,1)
return!0}return!1},
X:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.bm(a))}},
D:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.q(u,t,H.i(a[t]))
return u.join(b)},
ju:function(a){return this.D(a,"")},
jn:function(a,b,c,d){var u,t,s
H.w(b,d)
H.j(c,{func:1,ret:d,args:[d,H.t(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.d(P.bm(a))}return t},
a9:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
eY:function(a,b,c){if(b<0||b>a.length)throw H.d(P.a3(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.a3(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.t(a,0)])
return H.b(a.slice(b,c),[H.t(a,0)])},
gjm:function(a){if(a.length>0)return a[0]
throw H.d(H.jc())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.jc())},
eW:function(a,b,c,d,e){var u,t,s
u=H.t(a,0)
H.h(d,"$in",[u],"$an")
if(!!a.immutable$list)H.q(P.Y("setRange"))
P.b0(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.h(d,"$ia",[u],"$aa")
u=J.bI(d)
if(e+t>u.gn(d))throw H.d(H.kY())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
b9:function(a,b,c,d){return this.eW(a,b,c,d,0)},
aS:function(a,b){var u
for(u=0;u<a.length;++u)if(J.K(a[u],b))return!0
return!1},
i:function(a){return P.iC(a,"[","]")},
ga_:function(a){return new J.am(a,a.length,0,[H.t(a,0)])},
gI:function(a){return H.c2(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.q(P.Y("set length"))
if(b<0)throw H.d(P.a3(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.d(H.bG(a,b))
return a[b]},
q:function(a,b,c){H.w(c,H.t(a,0))
if(!!a.immutable$list)H.q(P.Y("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bG(a,b))
a[b]=c},
l:function(a,b){var u,t
u=[H.t(a,0)]
H.h(b,"$ia",u,"$aa")
t=C.f.l(a.length,b.gn(b))
u=H.b([],u)
this.sn(u,t)
this.b9(u,0,a.length,a)
this.b9(u,a.length,t,b)
return u},
$in:1,
$ia:1}
J.iD.prototype={}
J.am.prototype={
gP:function(){return this.d},
J:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.d(H.y(u))
s=this.c
if(s>=t){this.sdf(null)
return!1}this.sdf(u[s]);++this.c
return!0},
sdf:function(a){this.d=H.w(a,H.t(this,0))},
$iaH:1}
J.bb.prototype={
ec:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.Y(""+a+".floor()"))},
ai:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.Y(""+a+".round()"))},
eG:function(a,b){var u,t
if(b>20)throw H.d(P.a3(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
b4:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.a3(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.W(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.q(P.Y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.c(t,1)
u=t[1]
if(3>=s)return H.c(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.k("0",r)},
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
l:function(a,b){if(typeof b!=="number")throw H.d(H.ak(b))
return a+b},
m:function(a,b){if(typeof b!=="number")throw H.d(H.ak(b))
return a-b},
k:function(a,b){if(typeof b!=="number")throw H.d(H.ak(b))
return a*b},
b7:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
f2:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dD(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.dD(a,b)},
dD:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.Y("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aH:function(a,b){var u
if(a>0)u=this.dC(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
i7:function(a,b){if(b<0)throw H.d(H.ak(b))
return this.dC(a,b)},
dC:function(a,b){return b>31?0:a>>>b},
$io:1,
$iaa:1}
J.cQ.prototype={$il:1}
J.et.prototype={}
J.aT.prototype={
W:function(a,b){if(b<0)throw H.d(H.bG(a,b))
if(b>=a.length)H.q(H.bG(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.d(H.bG(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.d(P.iw(b,null,null))
return a+b},
aN:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ak(b))
c=P.b0(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a6:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.ak(c))
if(typeof c!=="number")return c.T()
if(c<0||c>a.length)throw H.d(P.a3(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.a6(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ak(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.T()
if(b<0)throw H.d(P.d9(b,null,null))
if(b>c)throw H.d(P.d9(b,null,null))
if(c>a.length)throw H.d(P.d9(c,null,null))
return a.substring(b,c)},
aA:function(a,b){return this.u(a,b,null)},
k:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.K)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jH:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.k(c,u)+a},
ab:function(a,b){return this.jH(a,b," ")},
ek:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.a3(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
ej:function(a,b){return this.ek(a,b,0)},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$ijk:1,
$ik:1}
H.Z.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.c.W(this.a,b)},
$acg:function(){return[P.l]},
$aP:function(){return[P.l]},
$an:function(){return[P.l]},
$aa:function(){return[P.l]}}
H.ee.prototype={}
H.cW.prototype={
gP:function(){return this.d},
J:function(){var u,t,s,r
u=this.a
t=J.bI(u)
s=t.gn(u)
if(this.b!==s)throw H.d(P.bm(u))
r=this.c
if(r>=s){this.saO(null)
return!1}this.saO(t.a9(u,r));++this.c
return!0},
saO:function(a){this.d=H.w(a,H.t(this,0))},
$iaH:1}
H.eI.prototype={
ga_:function(a){return new H.eJ(J.cA(this.a),this.b,this.$ti)},
gn:function(a){return J.aR(this.a)},
a9:function(a,b){return this.b.$1(J.iv(this.a,b))},
$an:function(a,b){return[b]}}
H.eJ.prototype={
J:function(){var u=this.b
if(u.J()){this.saO(this.c.$1(u.gP()))
return!0}this.saO(null)
return!1},
gP:function(){return this.a},
saO:function(a){this.a=H.w(a,H.t(this,1))},
$aaH:function(a,b){return[b]}}
H.h2.prototype={
ga_:function(a){return new H.h3(J.cA(this.a),this.b,this.$ti)}}
H.h3.prototype={
J:function(){var u,t
for(u=this.a,t=this.b;u.J();)if(t.$1(u.gP()))return!0
return!1},
gP:function(){return this.a.gP()}}
H.bq.prototype={}
H.cg.prototype={
q:function(a,b,c){H.w(c,H.ap(this,"cg",0))
throw H.d(P.Y("Cannot modify an unmodifiable list"))}}
H.dv.prototype={}
H.e7.prototype={
i:function(a){return P.iG(this)},
q:function(a,b,c){H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
return H.kQ()},
$iG:1}
H.e8.prototype={
gn:function(a){return this.a},
bf:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j:function(a,b){if(!this.bf(b))return
return this.dg(b)},
dg:function(a){return this.b[H.N(a)]},
X:function(a,b){var u,t,s,r,q
u=H.t(this,1)
H.j(b,{func:1,ret:-1,args:[H.t(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.w(this.dg(q),u))}}}
H.f2.prototype={}
H.fs.prototype={
aa:function(a){var u,t,s
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
H.eX.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ev.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.i(this.a)+")"}}
H.fG.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.is.prototype={
$1:function(a){if(!!J.Q(a).$ib9)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.dM.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaj:1}
H.bP.prototype={
i:function(a){return"Closure '"+H.bw(this).trim()+"'"},
$iiA:1,
gkd:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fm.prototype={}
H.fh.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bL(u)+"'"}}
H.bN.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bN))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gI:function(a){var u,t
u=this.c
if(u==null)t=H.c2(this.a)
else t=typeof u!=="object"?J.cz(u):H.c2(u)
return(t^H.c2(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.bw(u)+"'")}}
H.fu.prototype={
i:function(a){return this.a}}
H.e3.prototype={
i:function(a){return this.a}}
H.f7.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.ay.prototype={
gn:function(a){return this.a},
gcz:function(){return new H.ez(this,[H.t(this,0)])},
bf:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.dc(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dc(t,a)}else return this.jr(a)},
jr:function(a){var u=this.d
if(u==null)return!1
return this.cw(this.bN(u,this.cv(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.ba(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.ba(r,b)
s=t==null?null:t.b
return s}else return this.js(b)},
js:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bN(u,this.cv(a))
s=this.cw(t,a)
if(s<0)return
return t[s].b},
q:function(a,b,c){var u,t
H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bW()
this.b=u}this.d4(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bW()
this.c=t}this.d4(t,b,c)}else this.jt(b,c)},
jt:function(a,b){var u,t,s,r
H.w(a,H.t(this,0))
H.w(b,H.t(this,1))
u=this.d
if(u==null){u=this.bW()
this.d=u}t=this.cv(a)
s=this.bN(u,t)
if(s==null)this.c3(u,t,[this.bX(a,b)])
else{r=this.cw(s,a)
if(r>=0)s[r].b=b
else s.push(this.bX(a,b))}},
X:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.d(P.bm(this))
u=u.c}},
d4:function(a,b,c){var u
H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
u=this.ba(a,b)
if(u==null)this.c3(a,b,this.bX(b,c))
else u.b=c},
bX:function(a,b){var u,t
u=new H.ey(H.w(a,H.t(this,0)),H.w(b,H.t(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
cv:function(a){return J.cz(a)&0x3ffffff},
cw:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1},
i:function(a){return P.iG(this)},
ba:function(a,b){return a[b]},
bN:function(a,b){return a[b]},
c3:function(a,b,c){a[b]=c},
fE:function(a,b){delete a[b]},
dc:function(a,b){return this.ba(a,b)!=null},
bW:function(){var u=Object.create(null)
this.c3(u,"<non-identifier-key>",u)
this.fE(u,"<non-identifier-key>")
return u},
$ije:1}
H.ey.prototype={}
H.ez.prototype={
gn:function(a){return this.a.a},
ga_:function(a){var u,t
u=this.a
t=new H.eA(u,u.r,this.$ti)
t.c=u.e
return t}}
H.eA.prototype={
gP:function(){return this.d},
J:function(){var u=this.a
if(this.b!==u.r)throw H.d(P.bm(u))
else{u=this.c
if(u==null){this.sd3(null)
return!1}else{this.sd3(u.a)
this.c=this.c.c
return!0}}},
sd3:function(a){this.d=H.w(a,H.t(this,0))},
$iaH:1}
H.i5.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.i6.prototype={
$2:function(a,b){return this.a(a,b)},
$S:25}
H.i7.prototype={
$1:function(a){return this.a(H.N(a))},
$S:43}
H.eu.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ijk:1,
$ilo:1}
H.bu.prototype={$ibu:1}
H.d1.prototype={
gn:function(a){return a.length},
$iaV:1,
$aaV:function(){}}
H.d2.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
q:function(a,b,c){H.md(c)
H.bg(b,a,a.length)
a[b]=c},
$abq:function(){return[P.o]},
$aP:function(){return[P.o]},
$in:1,
$an:function(){return[P.o]},
$ia:1,
$aa:function(){return[P.o]}}
H.d3.prototype={
q:function(a,b,c){H.a8(c)
H.bg(b,a,a.length)
a[b]=c},
$abq:function(){return[P.l]},
$aP:function(){return[P.l]},
$in:1,
$an:function(){return[P.l]},
$ia:1,
$aa:function(){return[P.l]}}
H.eS.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.eT.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.eU.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.eV.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.c_.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
$ic_:1,
$iJ:1}
H.cl.prototype={}
H.cm.prototype={}
H.cn.prototype={}
H.co.prototype={}
P.h5.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:24}
P.h4.prototype={
$1:function(a){var u,t
this.a.a=H.j(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:31}
P.h6.prototype={
$0:function(){this.a.$0()},
$S:0}
P.h7.prototype={
$0:function(){this.a.$0()},
$S:0}
P.dN.prototype={
fl:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bF(new P.hC(this,b),0),a)
else throw H.d(P.Y("`setTimeout()` not found."))},
fm:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bF(new P.hB(this,a,Date.now(),b),0),a)
else throw H.d(P.Y("Periodic timer."))},
$iaM:1}
P.hC.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.hB.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.f2(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.aQ.prototype={
jx:function(a){if(this.c!==6)return!0
return this.b.b.cN(H.j(this.d,{func:1,ret:P.a5,args:[P.I]}),a.a,P.a5,P.I)},
jq:function(a){var u,t,s,r
u=this.e
t=P.I
s={futureOr:1,type:H.t(this,1)}
r=this.b.b
if(H.dR(u,{func:1,args:[P.I,P.aj]}))return H.iX(r.jX(u,a.a,a.b,null,t,P.aj),s)
else return H.iX(r.cN(H.j(u,{func:1,args:[P.I]}),a.a,null,t),s)}}
P.as.prototype={
eF:function(a,b,c){var u,t,s,r
u=H.t(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.O
if(t!==C.k){t.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.m2(b,t)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.as(0,$.O,[c])
r=b==null?1:3
this.d5(new P.aQ(s,r,a,b,[u,c]))
return s},
k_:function(a,b){return this.eF(a,null,b)},
d5:function(a){var u,t
u=this.a
if(u<=1){a.a=H.e(this.c,"$iaQ")
this.c=a}else{if(u===2){t=H.e(this.c,"$ias")
u=t.a
if(u<4){t.d5(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.hV(null,null,u,H.j(new P.he(this,a),{func:1,ret:-1}))}},
dw:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.e(this.c,"$iaQ")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.e(this.c,"$ias")
t=p.a
if(t<4){p.dw(a)
return}this.a=t
this.c=p.c}u.a=this.bc(a)
t=this.b
t.toString
P.hV(null,null,t,H.j(new P.hi(u,this),{func:1,ret:-1}))}},
c_:function(){var u=H.e(this.c,"$iaQ")
this.c=null
return this.bc(u)},
bc:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d7:function(a){var u,t,s
u=H.t(this,0)
H.iX(a,{futureOr:1,type:u})
t=this.$ti
if(H.cu(a,"$ibU",t,"$abU"))if(H.cu(a,"$ias",t,null))P.jJ(a,this)
else P.lH(a,this)
else{s=this.c_()
H.w(a,u)
this.a=4
this.c=a
P.cj(this,s)}},
d8:function(a,b){var u
H.e(b,"$iaj")
u=this.c_()
this.a=8
this.c=new P.ab(a,b)
P.cj(this,u)},
$ibU:1}
P.he.prototype={
$0:function(){P.cj(this.a,this.b)},
$S:0}
P.hi.prototype={
$0:function(){P.cj(this.b,this.a.a)},
$S:0}
P.hf.prototype={
$1:function(a){var u=this.a
u.a=0
u.d7(a)},
$S:24}
P.hg.prototype={
$2:function(a,b){H.e(b,"$iaj")
this.a.d8(a,b)},
$1:function(a){return this.$2(a,null)},
$S:27}
P.hh.prototype={
$0:function(){this.a.d8(this.b,this.c)},
$S:0}
P.hl.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eD(H.j(r.d,{func:1}),null)}catch(q){t=H.au(q)
s=H.bJ(q)
if(this.d){r=H.e(this.a.a.c,"$iab").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.e(this.a.a.c,"$iab")
else p.b=new P.ab(t,s)
p.a=!0
return}if(!!J.Q(u).$ibU){if(u instanceof P.as&&u.a>=4){if(u.a===8){r=this.b
r.b=H.e(u.c,"$iab")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.k_(new P.hm(o),null)
r.a=!1}},
$S:3}
P.hm.prototype={
$1:function(a){return this.a},
$S:49}
P.hk.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.t(s,0)
q=H.w(this.c,r)
p=H.t(s,1)
this.a.b=s.b.b.cN(H.j(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.au(o)
t=H.bJ(o)
s=this.a
s.b=new P.ab(u,t)
s.a=!0}},
$S:3}
P.hj.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.e(this.a.a.c,"$iab")
r=this.c
if(r.jx(u)&&r.e!=null){q=this.b
q.b=r.jq(u)
q.a=!1}}catch(p){t=H.au(p)
s=H.bJ(p)
r=H.e(this.a.a.c,"$iab")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ab(t,s)
n.a=!0}},
$S:3}
P.dD.prototype={}
P.fi.prototype={
gn:function(a){var u,t,s,r
u={}
t=new P.as(0,$.O,[P.l])
u.a=0
s=H.t(this,0)
r=H.j(new P.fk(u,this),{func:1,ret:-1,args:[s]})
H.j(new P.fl(u,t),{func:1,ret:-1})
W.a4(this.a,this.b,r,!1,s)
return t}}
P.fk.prototype={
$1:function(a){H.w(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.A,args:[H.t(this.b,0)]}}}
P.fl.prototype={
$0:function(){this.b.d7(this.a.a)},
$S:0}
P.c6.prototype={}
P.fj.prototype={}
P.aM.prototype={}
P.ab.prototype={
i:function(a){return H.i(this.a)},
$ib9:1}
P.hM.prototype={$in9:1}
P.hU.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.d4()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.d(u)
s=H.d(u)
s.stack=t.i(0)
throw s},
$S:0}
P.hs.prototype={
jY:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
try{if(C.k===$.O){a.$0()
return}P.jV(null,null,this,a,-1)}catch(s){u=H.au(s)
t=H.bJ(s)
P.hT(null,null,this,u,H.e(t,"$iaj"))}},
jZ:function(a,b,c){var u,t,s
H.j(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.k===$.O){a.$1(b)
return}P.jW(null,null,this,a,b,-1,c)}catch(s){u=H.au(s)
t=H.bJ(s)
P.hT(null,null,this,u,H.e(t,"$iaj"))}},
iV:function(a,b){return new P.hu(this,H.j(a,{func:1,ret:b}),b)},
cc:function(a){return new P.ht(this,H.j(a,{func:1,ret:-1}))},
dK:function(a,b){return new P.hv(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
eD:function(a,b){H.j(a,{func:1,ret:b})
if($.O===C.k)return a.$0()
return P.jV(null,null,this,a,b)},
cN:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.O===C.k)return a.$1(b)
return P.jW(null,null,this,a,b,c,d)},
jX:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.O===C.k)return a.$2(b,c)
return P.m3(null,null,this,a,b,c,d,e,f)}}
P.hu.prototype={
$0:function(){return this.a.eD(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ht.prototype={
$0:function(){return this.a.jY(this.b)},
$S:3}
P.hv.prototype={
$1:function(a){var u=this.c
return this.a.jZ(this.b,H.w(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hp.prototype={
ga_:function(a){return P.jL(this,this.r,H.t(this,0))},
gn:function(a){return this.a},
h:function(a,b){var u
H.w(b,H.t(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.jM()
this.c=u}return this.fA(u,b)}else return this.fo(b)},
fo:function(a){var u,t,s
H.w(a,H.t(this,0))
u=this.d
if(u==null){u=P.jM()
this.d=u}t=this.d9(a)
s=u[t]
if(s==null)u[t]=[this.bJ(a)]
else{if(this.dh(s,a)>=0)return!1
s.push(this.bJ(a))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hT(this.c,b)
else return this.hS(b)},
hS:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.fO(u,a)
s=this.dh(t,a)
if(s<0)return!1
this.dE(t.splice(s,1)[0])
return!0},
fA:function(a,b){H.w(b,H.t(this,0))
if(H.e(a[b],"$ick")!=null)return!1
a[b]=this.bJ(b)
return!0},
hT:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$ick")
if(u==null)return!1
this.dE(u)
delete a[b]
return!0},
dm:function(){this.r=1073741823&this.r+1},
bJ:function(a){var u,t
u=new P.ck(H.w(a,H.t(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dm()
return u},
dE:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dm()},
d9:function(a){return J.cz(a)&1073741823},
fO:function(a,b){return a[this.d9(b)]},
dh:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.ck.prototype={}
P.hq.prototype={
gP:function(){return this.d},
J:function(){var u=this.a
if(this.b!==u.r)throw H.d(P.bm(u))
else{u=this.c
if(u==null){this.sd6(null)
return!1}else{this.sd6(H.w(u.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
sd6:function(a){this.d=H.w(a,H.t(this,0))},
$iaH:1}
P.eB.prototype={
$2:function(a,b){this.a.q(0,H.w(a,this.b),H.w(b,this.c))},
$S:7}
P.eC.prototype={$in:1,$ia:1}
P.P.prototype={
ga_:function(a){return new H.cW(a,this.gn(a),0,[H.cv(this,a,"P",0)])},
a9:function(a,b){return this.j(a,b)},
k5:function(a,b){var u,t
u=H.b([],[H.cv(this,a,"P",0)])
C.a.sn(u,this.gn(a))
for(t=0;t<this.gn(a);++t)C.a.q(u,t,this.j(a,t))
return u},
k0:function(a){return this.k5(a,!0)},
l:function(a,b){var u,t
u=[H.cv(this,a,"P",0)]
H.h(b,"$ia",u,"$aa")
t=H.b([],u)
C.a.sn(t,C.f.l(this.gn(a),b.gn(b)))
C.a.b9(t,0,this.gn(a),a)
C.a.b9(t,this.gn(a),t.length,b)
return t},
jk:function(a,b,c,d){var u
H.w(d,H.cv(this,a,"P",0))
P.b0(b,c,this.gn(a),null,null,null)
for(u=b;u<c;++u)this.q(a,u,d)},
i:function(a){return P.iC(a,"[","]")}}
P.eE.prototype={}
P.eF.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.i(a)
u.a=t+": "
u.a+=H.i(b)},
$S:7}
P.eG.prototype={
X:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
for(u=this.gcz(),u=u.ga_(u);u.J();){t=u.gP()
b.$2(t,this.j(0,t))}},
gn:function(a){var u=this.gcz()
return u.gn(u)},
i:function(a){return P.iG(this)},
$iG:1}
P.hD.prototype={
q:function(a,b,c){H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
throw H.d(P.Y("Cannot modify unmodifiable map"))}}
P.eH.prototype={
j:function(a,b){return this.a.j(0,b)},
q:function(a,b,c){this.a.q(0,H.w(b,H.t(this,0)),H.w(c,H.t(this,1)))},
X:function(a,b){this.a.X(0,H.j(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gn:function(a){var u=this.a
return u.gn(u)},
i:function(a){return J.al(this.a)},
$iG:1}
P.dw.prototype={}
P.hw.prototype={
i:function(a){return P.iC(this,"{","}")},
a9:function(a,b){var u,t,s
if(b<0)H.q(P.a3(b,0,null,"index",null))
for(u=P.jL(this,this.r,H.t(this,0)),t=0;u.J();){s=u.d
if(b===t)return s;++t}throw H.d(P.bW(b,this,"index",null,t))},
$in:1,
$ijs:1}
P.dJ.prototype={}
P.dQ.prototype={}
P.e_.prototype={
jz:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.b0(b,c,a.length,null,null,null)
u=$.kA()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.c.G(a,t)
if(m===37){l=n+2
if(l<=c){k=H.i4(C.c.G(a,n))
j=H.i4(C.c.G(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.c(u,i)
h=u[i]
if(h>=0){i=C.c.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ae("")
g=r.a+=C.c.u(a,s,t)
r.a=g+H.d7(m)
s=n
continue}}throw H.d(P.W("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.c.u(a,s,c)
f=g.length
if(q>=0)P.j6(a,p,c,q,o,f)
else{e=C.f.b7(f-1,4)+1
if(e===1)throw H.d(P.W("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.aN(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.j6(a,p,c,q,o,d)
else{e=C.f.b7(d,4)
if(e===1)throw H.d(P.W("Invalid base64 encoding length ",a,c))
if(e>1)a=C.c.aN(a,c,c,e===2?"==":"=")}return a},
$abk:function(){return[[P.a,P.l],P.k]}}
P.e0.prototype={
$abo:function(){return[[P.a,P.l],P.k]}}
P.bk.prototype={}
P.bo.prototype={}
P.ef.prototype={
$abk:function(){return[P.k,[P.a,P.l]]}}
P.fN.prototype={
gjj:function(){return C.L}}
P.fP.prototype={
aT:function(a,b,c){var u,t,s
c=P.b0(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.hL(t)
if(s.fN(a,b,c)!==c)s.dG(J.kI(a,c-1),0)
return new Uint8Array(t.subarray(0,H.lY(0,s.b,t.length)))},
cj:function(a){return this.aT(a,0,null)},
$abo:function(){return[P.k,[P.a,P.l]]}}
P.hL.prototype={
dG:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.c(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.c(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.c(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.c(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.c(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.c(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.c(u,t)
u[t]=128|a&63
return!1}},
fN:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.W(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.G(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dG(r,C.c.G(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.c(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.c(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.c(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.c(u,q)
u[q]=128|r&63}}return s}}
P.fO.prototype={
aT:function(a,b,c){var u,t,s,r
H.h(a,"$ia",[P.l],"$aa")
u=P.ly(!1,a,b,c)
if(u!=null)return u
c=P.b0(b,c,J.aR(a),null,null,null)
t=new P.ae("")
s=new P.hJ(!1,t)
s.aT(a,b,c)
if(s.e>0){H.q(P.W("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.d7(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cj:function(a){return this.aT(a,0,null)},
$abo:function(){return[[P.a,P.l],P.k]}}
P.hJ.prototype={
aT:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.h(a,"$ia",[P.l],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.hK(this,b,c,a)
$label0$0:for(q=J.bI(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.bC()
if((n&192)!==128){m=P.W("Bad UTF-8 encoding 0x"+C.f.b4(n,16),a,o)
throw H.d(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.c(C.B,m)
if(u<=C.B[m]){m=P.W("Overlong encoding of 0x"+C.f.b4(u,16),a,o-s-1)
throw H.d(m)}if(u>1114111){m=P.W("Character outside valid Unicode range: 0x"+C.f.b4(u,16),a,o-s-1)
throw H.d(m)}if(!this.c||u!==65279)p.a+=H.d7(u)
this.c=!1}for(m=o<c;m;){l=P.m4(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.T()
if(n<0){i=P.W("Negative UTF-8 code unit: -0x"+C.f.b4(-n,16),a,j-1)
throw H.d(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.W("Bad UTF-8 encoding 0x"+C.f.b4(n,16),a,j-1)
throw H.d(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.hK.prototype={
$2:function(a,b){this.a.b.a+=P.dh(this.d,a,b)},
$S:32}
P.a5.prototype={}
P.ac.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.ac&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.f.aH(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.kR(H.lj(this))
t=P.cJ(H.lh(this))
s=P.cJ(H.ld(this))
r=P.cJ(H.le(this))
q=P.cJ(H.lg(this))
p=P.cJ(H.li(this))
o=P.kS(H.lf(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.o.prototype={}
P.aF.prototype={
l:function(a,b){return new P.aF(C.f.l(this.a,b.gfG()))},
m:function(a,b){return new P.aF(C.f.m(this.a,b.gfG()))},
t:function(a,b){if(b==null)return!1
return b instanceof P.aF&&this.a===b.a},
gI:function(a){return C.f.gI(this.a)},
i:function(a){var u,t,s,r,q
u=new P.ed()
t=this.a
if(t<0)return"-"+new P.aF(0-t).i(0)
s=u.$1(C.f.a1(t,6e7)%60)
r=u.$1(C.f.a1(t,1e6)%60)
q=new P.ec().$1(t%1e6)
return""+C.f.a1(t,36e8)+":"+H.i(s)+":"+H.i(r)+"."+H.i(q)}}
P.ec.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:23}
P.ed.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:23}
P.b9.prototype={}
P.d4.prototype={
i:function(a){return"Throw of null."}}
P.aD.prototype={
gbL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbK:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbL()+t+s
if(!this.a)return r
q=this.gbK()
p=P.eh(this.b)
return r+q+": "+p}}
P.bx.prototype={
gbL:function(){return"RangeError"},
gbK:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.i(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.i(u)
else if(s>u)t=": Not in range "+H.i(u)+".."+H.i(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.i(u)}return t}}
P.eq.prototype={
gbL:function(){return"RangeError"},
gbK:function(){var u,t
u=H.a8(this.b)
if(typeof u!=="number")return u.T()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gn:function(a){return this.f}}
P.fH.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fE.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.df.prototype={
i:function(a){return"Bad state: "+this.a}}
P.e6.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eh(u)+"."}}
P.eY.prototype={
i:function(a){return"Out of Memory"},
$ib9:1}
P.de.prototype={
i:function(a){return"Stack Overflow"},
$ib9:1}
P.ea.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dG.prototype={
i:function(a){return"Exception: "+this.a}}
P.eo.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.u(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.G(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.W(r,m)
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
return t+h+f+g+"\n"+C.c.k(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.i(s)+")"):t}}
P.l.prototype={}
P.n.prototype={
gn:function(a){var u,t
u=this.ga_(this)
for(t=0;u.J();)++t
return t},
a9:function(a,b){var u,t,s
if(b<0)H.q(P.a3(b,0,null,"index",null))
for(u=this.ga_(this),t=0;u.J();){s=u.gP()
if(b===t)return s;++t}throw H.d(P.bW(b,this,"index",null,t))},
i:function(a){return P.kX(this,"(",")")}}
P.aH.prototype={}
P.a.prototype={$in:1}
P.G.prototype={}
P.A.prototype={
gI:function(a){return P.I.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.I.prototype={constructor:P.I,$iI:1,
t:function(a,b){return this===b},
gI:function(a){return H.c2(this)},
i:function(a){return"Instance of '"+H.bw(this)+"'"},
toString:function(){return this.i(this)}}
P.aj.prototype={}
P.k.prototype={$ijk:1}
P.ae.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$imL:1}
P.fM.prototype={
$2:function(a,b){var u,t,s,r
u=P.k
H.h(a,"$iG",[u,u],"$aG")
H.N(b)
t=J.iY(b).ej(b,"=")
if(t===-1){if(b!=="")a.q(0,P.iQ(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.u(b,0,t)
r=C.c.aA(b,t+1)
u=this.a
a.q(0,P.iQ(s,0,s.length,u,!0),P.iQ(r,0,r.length,u,!0))}return a},
$S:39}
P.fJ.prototype={
$2:function(a,b){throw H.d(P.W("Illegal IPv4 address, "+a,this.a,b))},
$S:40}
P.fK.prototype={
$2:function(a,b){throw H.d(P.W("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:44}
P.fL.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.dT(C.c.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.T()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:26}
P.bB.prototype={
geM:function(){return this.b},
gcu:function(a){var u=this.c
if(u==null)return""
if(C.c.a5(u,"["))return C.c.u(u,1,u.length-1)
return u},
gbx:function(a){var u=this.d
if(u==null)return P.jN(this.a)
return u},
gcH:function(){var u=this.f
return u==null?"":u},
gee:function(){var u=this.r
return u==null?"":u},
cM:function(a,b,c,d,e,f,g,h,i){var u,t,s
H.h(g,"$iG",[P.k,null],"$aG")
h=this.a
u=h==="file"
i=this.b
e=this.d
t=this.c
if(t!=null)b=t
else if(i.length!==0||e!=null||u)b=""
c=this.e
if(!u)s=b!=null&&c.length!==0
else s=!0
if(s&&!C.c.a5(c,"/"))c="/"+c
f=P.iP(f,0,0,g)
return new P.bB(h,i,b,e,c,f,this.r)},
eA:function(a){return this.cM(null,null,null,null,null,null,a,null,null)},
gcI:function(){var u,t
if(this.Q==null){u=this.f
t=P.k
this.shR(new P.dw(P.jB(u==null?"":u,C.m),[t,t]))}return this.Q},
gef:function(){return this.c!=null},
gei:function(){return this.f!=null},
geg:function(){return this.r!=null},
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
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.Q(b).$iiL)if(this.a==b.gbF())if(this.c!=null===b.gef())if(this.b==b.geM())if(this.gcu(this)==b.gcu(b))if(this.gbx(this)==b.gbx(b))if(this.e===b.gev(b)){u=this.f
t=u==null
if(!t===b.gei()){if(t)u=""
if(u===b.gcH()){u=this.r
t=u==null
if(!t===b.geg()){if(t)u=""
u=u===b.gee()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
if(u==null){u=C.c.gI(this.i(0))
this.z=u}return u},
shR:function(a){var u=P.k
this.Q=H.h(a,"$iG",[u,u],"$aG")},
$iiL:1,
gbF:function(){return this.a},
gev:function(a){return this.e}}
P.hE.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.l()
throw H.d(P.W("Invalid port",this.a,u+1))},
$S:41}
P.hF.prototype={
$1:function(a){return P.hI(C.Z,a,C.m,!1)},
$S:47}
P.hH.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.hI(C.t,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.hI(C.t,b,C.m,!0))}},
$S:45}
P.hG.prototype={
$2:function(a,b){var u,t
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(u=J.cA(H.kd(b,"$in")),t=this.a;u.J();)t.$2(a,H.N(u.gP()))},
$S:42}
P.fI.prototype={
geK:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.c(u,0)
t=this.a
u=u[0]+1
s=C.c.ek(t,"?",u)
r=t.length
if(s>=0){q=P.cq(t,s+1,r,C.q,!1)
r=s}else q=null
u=new P.ha(this,"data",null,null,null,P.cq(t,u,r,C.D,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.c(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.hQ.prototype={
$1:function(a){return new Uint8Array(96)},
$S:48}
P.hP.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.c(u,a)
u=u[a]
J.kJ(u,0,96,b)
return u},
$S:38}
P.hR.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.G(b,t)^96
if(s>=a.length)return H.c(a,s)
a[s]=c}}}
P.hS.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.G(b,0),t=C.c.G(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.c(a,s)
a[s]=c}}}
P.hx.prototype={
gef:function(){return this.c>0},
geh:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.l()
t=this.e
if(typeof t!=="number")return H.r(t)
t=u+1<t
u=t}else u=!1
return u},
gei:function(){var u=this.f
if(typeof u!=="number")return u.T()
return u<this.r},
geg:function(){return this.r<this.a.length},
gdk:function(){return this.b===4&&C.c.a5(this.a,"http")},
gdl:function(){return this.b===5&&C.c.a5(this.a,"https")},
gbF:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdk()){this.x="http"
u="http"}else if(this.gdl()){this.x="https"
u="https"}else if(u===4&&C.c.a5(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a5(this.a,"package")){this.x="package"
u="package"}else{u=C.c.u(this.a,0,u)
this.x=u}return u},
geM:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.u(this.a,t,u-1):""},
gcu:function(a){var u=this.c
return u>0?C.c.u(this.a,u,this.d):""},
gbx:function(a){var u
if(this.geh()){u=this.d
if(typeof u!=="number")return u.l()
return P.dT(C.c.u(this.a,u+1,this.e),null,null)}if(this.gdk())return 80
if(this.gdl())return 443
return 0},
gev:function(a){return C.c.u(this.a,this.e,this.f)},
gcH:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.T()
return u<t?C.c.u(this.a,u+1,t):""},
gee:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.aA(t,u+1):""},
gcI:function(){var u=this.f
if(typeof u!=="number")return u.T()
if(u>=this.r)return C.a_
u=P.k
return new P.dw(P.jB(this.gcH(),C.m),[u,u])},
cM:function(a,b,c,d,e,f,g,h,i){var u,t,s
H.h(g,"$iG",[P.k,null],"$aG")
h=this.gbF()
u=h==="file"
t=this.c
i=t>0?C.c.u(this.a,this.b+3,t):""
e=this.geh()?this.gbx(this):null
t=this.c
if(t>0)b=C.c.u(this.a,t,this.d)
else if(i.length!==0||e!=null||u)b=""
t=this.a
c=C.c.u(t,this.e,this.f)
if(!u)s=b!=null&&c.length!==0
else s=!0
if(s&&!C.c.a5(c,"/"))c="/"+c
f=P.iP(f,0,0,g)
s=this.r
if(s<t.length)a=C.c.aA(t,s+1)
return new P.bB(h,i,b,e,c,f,a)},
eA:function(a){return this.cM(null,null,null,null,null,null,a,null,null)},
gI:function(a){var u=this.y
if(u==null){u=C.c.gI(this.a)
this.y=u}return u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.Q(b).$iiL&&this.a===b.i(0)},
i:function(a){return this.a},
$iiL:1}
P.ha.prototype={}
W.v.prototype={}
W.dW.prototype={
i:function(a){return String(a)}}
W.dX.prototype={
i:function(a){return String(a)}}
W.cC.prototype={}
W.bj.prototype={
cS:function(a,b,c){var u=this.fP(a,b,P.ma(c,null))
return u},
fP:function(a,b,c){return a.getContext(b,c)},
$ibj:1}
W.b8.prototype={
gn:function(a){return a.length}}
W.bQ.prototype={
gn:function(a){return a.length}}
W.e9.prototype={}
W.bR.prototype={$ibR:1}
W.bS.prototype={
cT:function(a,b){return a.getElementById(b)}}
W.eb.prototype={
i:function(a){return String(a)}}
W.cK.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.cu(b,"$iaq",[P.aa],"$aaq"))return!1
u=J.b1(b)
return a.left===u.gbw(b)&&a.top===u.gbz(b)&&a.width===u.gbB(b)&&a.height===u.gbv(b)},
gI:function(a){return W.jK(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(a.width),C.e.gI(a.height))},
gdL:function(a){return a.bottom},
gbv:function(a){return a.height},
gbw:function(a){return a.left},
gby:function(a){return a.right},
gbz:function(a){return a.top},
gbB:function(a){return a.width},
$iaq:1,
$aaq:function(){return[P.aa]}}
W.h9.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.e(u[b],"$iV")},
q:function(a,b,c){var u
H.e(c,"$iV")
u=this.b
if(b<0||b>=u.length)return H.c(u,b)
J.iu(this.a,c,u[b])},
h:function(a,b){J.j4(this.a,b)
return b},
ga_:function(a){var u=this.k0(this)
return new J.am(u,u.length,0,[H.t(u,0)])},
$aP:function(){return[W.V]},
$an:function(){return[W.V]},
$aa:function(){return[W.V]}}
W.V.prototype={
gci:function(a){return new W.h9(a,a.children)},
gdN:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.T()
if(s<0)s=-s*0
if(typeof r!=="number")return r.T()
if(r<0)r=-r*0
return new P.aq(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
$iV:1}
W.m.prototype={$im:1}
W.bp.prototype={
fp:function(a,b,c,d){return a.addEventListener(b,H.bF(H.j(c,{func:1,args:[W.m]}),1),!1)},
$ibp:1}
W.en.prototype={
gn:function(a){return a.length}}
W.cO.prototype={
hX:function(a,b,c,d){return a.replaceState(b,c,d)},
gn:function(a){return a.length}}
W.br.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bW(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$iH")
throw H.d(P.Y("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iaV:1,
$aaV:function(){return[W.H]},
$aP:function(){return[W.H]},
$in:1,
$an:function(){return[W.H]},
$ia:1,
$aa:function(){return[W.H]},
$ibr:1,
$aaw:function(){return[W.H]}}
W.cP.prototype={}
W.bX.prototype={$ibX:1}
W.aI.prototype={$iaI:1}
W.cU.prototype={}
W.a6.prototype={$ia6:1}
W.h8.prototype={
q:function(a,b,c){var u,t
H.e(c,"$iH")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
J.iu(u,c,t[b])},
ga_:function(a){var u=this.a.childNodes
return new W.cM(u,u.length,-1,[H.cv(C.a0,u,"aw",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$aP:function(){return[W.H]},
$an:function(){return[W.H]},
$aa:function(){return[W.H]}}
W.H.prototype={
jU:function(a,b){var u,t
try{u=a.parentNode
J.iu(u,b,a)}catch(t){H.au(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eZ(a):u},
V:function(a,b){return a.appendChild(b)},
hW:function(a,b,c){return a.replaceChild(b,c)},
$iH:1}
W.c0.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bW(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$iH")
throw H.d(P.Y("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iaV:1,
$aaV:function(){return[W.H]},
$aP:function(){return[W.H]},
$in:1,
$an:function(){return[W.H]},
$ia:1,
$aa:function(){return[W.H]},
$aaw:function(){return[W.H]}}
W.f8.prototype={
gn:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.di.prototype={
fR:function(a,b){return a.insertRow(b)}}
W.dj.prototype={
dj:function(a,b){return a.insertCell(b)}}
W.aA.prototype={$iaA:1}
W.aB.prototype={$iaB:1}
W.fr.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bW(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$iaA")
throw H.d(P.Y("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iaV:1,
$aaV:function(){return[W.aA]},
$aP:function(){return[W.aA]},
$in:1,
$an:function(){return[W.aA]},
$ia:1,
$aa:function(){return[W.aA]},
$aaw:function(){return[W.aA]}}
W.be.prototype={}
W.aP.prototype={
gjb:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.Y("deltaY is not supported"))},
gja:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.Y("deltaX is not supported"))},
$iaP:1}
W.ci.prototype={
hY:function(a,b){return a.requestAnimationFrame(H.bF(H.j(b,{func:1,ret:-1,args:[P.aa]}),1))},
fH:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dF.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.cu(b,"$iaq",[P.aa],"$aaq"))return!1
u=J.b1(b)
return a.left===u.gbw(b)&&a.top===u.gbz(b)&&a.width===u.gbB(b)&&a.height===u.gbv(b)},
gI:function(a){return W.jK(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(a.width),C.e.gI(a.height))},
gbv:function(a){return a.height},
gbB:function(a){return a.width}}
W.hb.prototype={}
W.iO.prototype={}
W.hc.prototype={}
W.hd.prototype={
$1:function(a){return this.a.$1(H.e(a,"$im"))},
$S:37}
W.aw.prototype={
ga_:function(a){return new W.cM(a,this.gn(a),-1,[H.cv(this,a,"aw",0)])}}
W.cM.prototype={
J:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdi(J.kF(this.a,u))
this.c=u
return!0}this.sdi(null)
this.c=t
return!1},
gP:function(){return this.d},
sdi:function(a){this.d=H.w(a,H.t(this,0))},
$iaH:1}
W.dE.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dO.prototype={}
W.dP.prototype={}
P.hy.prototype={
eb:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
cQ:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.Q(a)
if(!!t.$iac)return new Date(a.a)
if(!!t.$ilo)throw H.d(P.fF("structured clone of RegExp"))
if(!!t.$ibu)return a
if(!!t.$iG){s=this.eb(a)
t=this.b
if(s>=t.length)return H.c(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.q(t,s,r)
a.X(0,new P.hA(u,this))
return u.a}if(!!t.$ia){s=this.eb(a)
u=this.b
if(s>=u.length)return H.c(u,s)
r=u[s]
if(r!=null)return r
return this.j5(a,s)}throw H.d(P.fF("structured clone of other type"))},
j5:function(a,b){var u,t,s,r
u=J.bI(a)
t=u.gn(a)
s=new Array(t)
C.a.q(this.b,b,s)
for(r=0;r<t;++r)C.a.q(s,r,this.cQ(u.j(a,r)))
return s}}
P.hA.prototype={
$2:function(a,b){this.a.a[a]=this.b.cQ(b)},
$S:7}
P.hW.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.hz.prototype={}
P.ek.prototype={
gbb:function(){var u,t,s
u=this.b
t=H.ap(u,"P",0)
s=W.V
return new H.eI(new H.h2(u,H.j(new P.el(),{func:1,ret:P.a5,args:[t]}),[t]),H.j(new P.em(),{func:1,ret:s,args:[t]}),[t,s])},
q:function(a,b,c){var u
H.e(c,"$iV")
u=this.gbb()
J.kK(u.b.$1(J.iv(u.a,b)),c)},
h:function(a,b){J.j4(this.b.a,b)},
gn:function(a){return J.aR(this.gbb().a)},
j:function(a,b){var u=this.gbb()
return u.b.$1(J.iv(u.a,b))},
ga_:function(a){var u=P.l7(this.gbb(),!1,W.V)
return new J.am(u,u.length,0,[H.t(u,0)])},
$aP:function(){return[W.V]},
$an:function(){return[W.V]},
$aa:function(){return[W.V]}}
P.el.prototype={
$1:function(a){return!!J.Q(H.e(a,"$iH")).$iV},
$S:34}
P.em.prototype={
$1:function(a){return H.f(H.e(a,"$iH"),"$iV")},
$S:30}
P.hr.prototype={
gby:function(a){var u=this.a
if(typeof u!=="number")return u.l()
return H.w(u+this.c,H.t(this,0))},
gdL:function(a){var u=this.b
if(typeof u!=="number")return u.l()
return H.w(u+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cu(b,"$iaq",[P.aa],"$aaq")){u=this.a
t=J.b1(b)
if(u==t.gbw(b)){s=this.b
if(s==t.gbz(b)){if(typeof u!=="number")return u.l()
r=H.t(this,0)
if(H.w(u+this.c,r)===t.gby(b)){if(typeof s!=="number")return s.l()
u=H.w(s+this.d,r)===t.gdL(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t,s,r,q
u=this.a
t=J.cz(u)
s=this.b
r=J.cz(s)
if(typeof u!=="number")return u.l()
q=H.t(this,0)
u=C.f.gI(H.w(u+this.c,q))
if(typeof s!=="number")return s.l()
q=C.f.gI(H.w(s+this.d,q))
return P.lI(P.ho(P.ho(P.ho(P.ho(0,t),r),u),q))}}
P.aq.prototype={
gbw:function(a){return this.a},
gbz:function(a){return this.b},
gbB:function(a){return this.c},
gbv:function(a){return this.d}}
P.p.prototype={
gci:function(a){return new P.ek(a,new W.h8(a))}}
P.J.prototype={$in:1,
$an:function(){return[P.l]},
$ia:1,
$aa:function(){return[P.l]}}
P.cD.prototype={$icD:1}
P.cN.prototype={$icN:1}
P.d8.prototype={$id8:1}
P.by.prototype={
dJ:function(a,b,c){return a.attachShader(b,c)},
an:function(a,b,c){return a.bindBuffer(b,c)},
iW:function(a,b,c){return a.bindFramebuffer(b,c)},
iX:function(a,b,c){return a.blendFunc(b,c)},
dM:function(a,b,c,d){return a.bufferData(b,c,d)},
j_:function(a,b){return a.clear(b)},
j0:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
j1:function(a,b){return a.clearDepth(b)},
j3:function(a,b){return a.compileShader(b)},
j6:function(a,b){return a.createShader(b)},
j8:function(a,b){return a.deleteProgram(b)},
j9:function(a,b){return a.deleteShader(b)},
jc:function(a,b){return a.depthFunc(b)},
jd:function(a,b){return a.disable(b)},
dO:function(a,b){return a.disableVertexAttribArray(b)},
jf:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cn:function(a,b){return a.enable(b)},
dQ:function(a,b){return a.enableVertexAttribArray(b)},
eO:function(a,b,c){return a.getActiveAttrib(b,c)},
eP:function(a,b,c){return a.getActiveUniform(b,c)},
eQ:function(a,b,c){return a.getAttribLocation(b,c)},
cU:function(a,b){return a.getParameter(b)},
eR:function(a,b){return a.getProgramInfoLog(b)},
bD:function(a,b,c){return a.getProgramParameter(b,c)},
eS:function(a,b){return a.getShaderInfoLog(b)},
eT:function(a,b,c){return a.getShaderParameter(b,c)},
eU:function(a,b,c){return a.getUniformLocation(b,c)},
jv:function(a,b){return a.linkProgram(b)},
eX:function(a,b,c){return a.shaderSource(b,c)},
M:function(a,b,c){return a.uniform1f(b,c)},
R:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eI:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eJ:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
eL:function(a,b){return a.useProgram(b)},
k7:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
k8:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iby:1}
P.dc.prototype={$idc:1}
P.du.prototype={$idu:1}
O.T.prototype={
bH:function(a){this.sfV(H.b([],[a]))
this.sdu(null)
this.sdq(null)
this.sdv(null)},
cW:function(a,b,c){var u=H.ap(this,"T",0)
H.j(b,{func:1,ret:P.a5,args:[[P.n,u]]})
u={func:1,ret:-1,args:[P.l,[P.n,u]]}
H.j(a,u)
H.j(c,u)
this.sdu(b)
this.sdq(a)
this.sdv(c)},
b8:function(a,b){return this.cW(a,null,b)},
dt:function(a){var u
H.h(a,"$in",[H.ap(this,"T",0)],"$an")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dn:function(a,b){var u
H.h(b,"$in",[H.ap(this,"T",0)],"$an")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
ga_:function(a){var u=this.a
return new J.am(u,u.length,0,[H.t(u,0)])},
a9:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ap(this,"T",0)
H.w(b,u)
u=[u]
if(this.dt(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.dn(s,H.b([b],u))}},
q:function(a,b,c){var u,t,s,r
u=H.ap(this,"T",0)
H.w(c,u)
t=this.a
if(b>=t.length)return H.c(t,b)
s=t[b]
if(!J.K(s,c)&&this.dt(H.b([c],[u]))){C.a.q(this.a,b,c)
t=[u]
u=H.h(H.b([s],t),"$in",[u],"$an")
r=this.d
if(r!=null)r.$2(b,u)
this.dn(b,H.b([c],t))}},
sfV:function(a){this.a=H.h(a,"$ia",[H.ap(this,"T",0)],"$aa")},
sdu:function(a){this.b=H.j(a,{func:1,ret:P.a5,args:[[P.n,H.ap(this,"T",0)]]})},
sdq:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.l,[P.n,H.ap(this,"T",0)]]})},
sdv:function(a){this.d=H.j(a,{func:1,ret:-1,args:[P.l,[P.n,H.ap(this,"T",0)]]})},
$in:1}
O.bY.prototype={
gn:function(a){return this.a.length},
gB:function(){var u=this.b
if(u==null){u=D.L()
this.b=u}return u},
f8:function(a){var u=this.b
if(u!=null)u.H(a)},
aB:function(){return this.f8(null)},
gZ:function(){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.ai()},
ey:function(a){var u=this.a
if(a==null)C.a.h(u,V.ai())
else C.a.h(u,a)
this.aB()},
cG:function(){var u=this.a
if(u.length>0){u.pop()
this.aB()}},
sbO:function(a){this.a=H.h(a,"$ia",[V.ad],"$aa")}}
E.e1.prototype={}
E.ah.prototype={
scX:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gB().K(0,this.ges())
t=this.c
if(t!=null)t.gB().h(0,this.ges())
s=new D.C("shape",u,this.c,this,[F.bz])
s.b=!0
this.ag(s)}},
sb_:function(a){var u,t
if(!J.K(this.r,a)){u=this.r
if(u!=null)u.gB().K(0,this.geq())
if(a!=null)a.gB().h(0,this.geq())
this.r=a
t=new D.C("mover",u,a,this,[U.a2])
t.b=!0
this.ag(t)}},
aq:function(a){var u,t,s,r
u=this.r
t=u!=null?u.a:null
if(!J.K(t,this.x)){s=this.x
this.x=t
r=new D.C("matrix",s,t,this,[V.ad])
r.b=!0
this.ag(r)}for(u=this.y.a,u=new J.am(u,u.length,0,[H.t(u,0)]);u.J();)u.d.aq(a)},
aM:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gZ())
else C.a.h(u.a,t.k(0,u.gZ()))
u.aB()
a.ez(this.f)
u=a.dy
s=(u&&C.a).gaz(u)
if(s!=null&&this.d!=null)s.jT(a,this)
for(u=this.y.a,u=new J.am(u,u.length,0,[H.t(u,0)]);u.J();)u.d.aM(a)
a.ex()
a.dx.cG()},
gB:function(){var u=this.z
if(u==null){u=D.L()
this.z=u}return u},
ag:function(a){var u=this.z
if(u!=null)u.H(a)},
a0:function(){return this.ag(null)},
eu:function(a){H.e(a,"$ix")
this.e=null
this.ag(a)},
jG:function(){return this.eu(null)},
er:function(a){this.ag(H.e(a,"$ix"))},
jF:function(){return this.er(null)},
ep:function(a){this.ag(H.e(a,"$ix"))},
jC:function(){return this.ep(null)},
jB:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$in",[E.ah],"$an")
for(u=b.length,t=this.geo(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aG()
o.sa3(null)
o.saw(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sa3(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a0()},
jE:function(a,b){var u,t,s,r,q
H.h(b,"$in",[E.ah],"$an")
for(u=b.length,t=this.geo(),s=0;s<b.length;b.length===u||(0,H.y)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.aG()
q.sa3(null)
q.saw(null)
q.c=null
q.d=0
r.z=q}q.K(0,t)}}this.a0()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfz:function(a,b){this.y=H.h(b,"$iT",[E.ah],"$aT")},
$iaZ:1}
E.f3.prototype={
f4:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ac(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.bY()
t=[V.ad]
u.sbO(H.b([],t))
u.b=null
u.gB().h(0,new E.f4(this))
this.cy=u
u=new O.bY()
u.sbO(H.b([],t))
u.b=null
u.gB().h(0,new E.f5(this))
this.db=u
u=new O.bY()
u.sbO(H.b([],t))
u.b=null
u.gB().h(0,new E.f6(this))
this.dx=u
this.sia(H.b([],[O.bA]))
u=this.dy;(u&&C.a).h(u,null)
this.si6(new H.ay([P.k,A.c4]))},
gjP:function(){var u=this.z
if(u==null){u=this.cy.gZ().k(0,this.db.gZ())
this.z=u}return u},
ez:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaz(u):a;(u&&C.a).h(u,t)},
ex:function(){var u=this.dy
if(u.length>1)u.pop()},
sia:function(a){this.dy=H.h(a,"$ia",[O.bA],"$aa")},
si6:function(a){this.fr=H.h(a,"$iG",[P.k,A.c4],"$aG")}}
E.f4.prototype={
$1:function(a){var u
H.e(a,"$ix")
u=this.a
u.z=null
u.ch=null},
$S:9}
E.f5.prototype={
$1:function(a){var u
H.e(a,"$ix")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:9}
E.f6.prototype={
$1:function(a){var u
H.e(a,"$ix")
u=this.a
u.ch=null
u.cx=null},
$S:9}
E.dg.prototype={}
E.dq.prototype={
d1:function(a){H.e(a,"$ix")
this.eB()},
d0:function(){return this.d1(null)},
gjp:function(){var u,t,s
u=Date.now()
t=C.f.a1(P.jb(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ac(u,!1)
return s/t},
dA:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.k()
if(typeof u!=="number")return H.r(u)
s=C.e.ec(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.k()
r=C.e.ec(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.jv(C.u,this.gjV())}},
eB:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.j(new E.fo(this),{func:1,ret:-1,args:[P.aa]})
C.H.fH(u)
C.H.hY(u,W.k_(t,P.aa))}},
jS:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dA()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ac(r,!1)
s.y=P.jb(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aB()
r=s.db
C.a.sn(r.a,0)
r.aB()
r=s.dx
C.a.sn(r.a,0)
r.aB()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aM(this.e)}}catch(q){u=H.au(q)
t=H.bJ(q)
P.j0("Error: "+H.i(u))
P.j0("Stack: "+H.i(t))
throw H.d(u)}}}
E.fo.prototype={
$1:function(a){var u
H.mu(a)
u=this.a
if(u.ch){u.ch=!1
u.jS()}},
$S:28}
Z.dC.prototype={$imD:1}
Z.cE.prototype={
be:function(a){var u,t,s
try{t=a.a
C.b.dQ(t,this.e)
C.b.k7(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.au(s)
t=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(u))
throw H.d(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}}
Z.h1.prototype={$imE:1}
Z.cF.prototype={
aK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
be:function(a){var u,t
u=this.a
C.b.an(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].be(a)},
eH:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dO(s,u[t].e)
C.b.an(s,this.a.a,null)},
aM:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.c(r,s)
q=r[s]
r=q.c
p=r.a
C.b.an(t,p,r.b)
C.b.jf(t,q.a,q.b,5123,0)
C.b.an(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.k]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.al(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(t,", ")+"\nAttrs:   "+C.a.D(p,", ")},
sfQ:function(a){this.b=H.h(a,"$ia",[Z.ba],"$aa")},
$imM:1}
Z.ba.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bw(this.c)+"'")+"]"}}
Z.aO.prototype={
gcY:function(a){var u,t
u=this.a
t=(u&$.b5().a)!==0?3:0
if((u&$.b4().a)!==0)t+=3
if((u&$.b3().a)!==0)t+=3
if((u&$.b6().a)!==0)t+=2
if((u&$.b7().a)!==0)t+=3
if((u&$.cw().a)!==0)t+=3
if((u&$.cx().a)!==0)t+=4
if((u&$.bM().a)!==0)++t
return(u&$.b2().a)!==0?t+4:t},
iU:function(a){var u,t,s
u=$.b5()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.b4()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b3()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b6()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b7()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cw()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cx()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bM()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b2()
if((t&u.a)!==0)if(s===a)return u
return $.kz()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aO))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.k])
t=this.a
if((t&$.b5().a)!==0)C.a.h(u,"Pos")
if((t&$.b4().a)!==0)C.a.h(u,"Norm")
if((t&$.b3().a)!==0)C.a.h(u,"Binm")
if((t&$.b6().a)!==0)C.a.h(u,"Txt2D")
if((t&$.b7().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cw().a)!==0)C.a.h(u,"Clr3")
if((t&$.cx().a)!==0)C.a.h(u,"Clr4")
if((t&$.bM().a)!==0)C.a.h(u,"Weight")
if((t&$.b2().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.D(u,"|")}}
D.e4.prototype={}
D.aG.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.j(b,u)
if(this.a==null)this.sa3(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
K:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[D.x]})
u=this.a
u=u==null?null:C.a.aS(u,b)
if(u===!0){u=this.a
t=(u&&C.a).K(u,b)||!1}else t=!1
return t},
H:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1)r=!0
else r=!1
if(r)return!1
if(a==null){a=new D.x(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.X(t,new D.ei(u))
return!0},
jW:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.H(t)}}},
ah:function(){return this.jW(!0,!1)},
sa3:function(a){this.a=H.h(a,"$ia",[{func:1,ret:-1,args:[D.x]}],"$aa")},
saw:function(a){this.b=H.h(a,"$ia",[{func:1,ret:-1,args:[D.x]}],"$aa")}}
D.ei.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:29}
D.x.prototype={}
D.bs.prototype={}
D.bt.prototype={}
D.C.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.cG.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cG))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.cT.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cT))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.ew.prototype={
jM:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jI:function(a){this.c=a.b
this.d.K(0,a.a)
return!1},
shQ:function(a){this.d=H.h(a,"$ijs",[P.l],"$ajs")}}
X.cX.prototype={}
X.eD.prototype={
aP:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ac(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.k()
q=b.b
p=this.ch
if(typeof q!=="number")return q.k()
o=new V.a1(t.a+s*r,t.b+q*p)
p=this.a.gaJ()
n=new X.aY(a,V.bd(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cF:function(a,b){this.r=a.a
return!1},
b1:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.eV()
if(typeof u!=="number")return u.bC()
this.r=(u&~t)>>>0
return!1},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.aP(a,b))
return!0},
jN:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaJ()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.k()
o=a.b
n=this.cy
if(typeof o!=="number")return o.k()
r=new X.bZ(new V.M(q*p,o*n),t,s,new P.ac(r,!1),this)
r.b=!0
u.H(r)
return!0},
hs:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ac(Date.now(),!1)
t=this.f
s=new X.cX(c,a,this.a.gaJ(),b,u,this)
s.b=!0
t.H(s)
this.y=u
this.x=V.bd()}}
X.an.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.an))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aY.prototype={}
X.eR.prototype={
bM:function(a,b,c){var u,t,s
u=new P.ac(Date.now(),!1)
t=this.a.gaJ()
s=new X.aY(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cF:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.H(this.bM(a,b,!0))
return!0},
b1:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.eV()
if(typeof u!=="number")return u.bC()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.H(this.bM(a,b,!0))
return!0},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.bM(a,b,!1))
return!0},
jO:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaJ()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.k()
p=a.b
o=this.ch
if(typeof p!=="number")return p.k()
s=new X.bZ(new V.M(r*q,p*o),t,b,new P.ac(s,!1),this)
s.b=!0
u.H(s)
return!0},
gdP:function(){var u=this.b
if(u==null){u=D.L()
this.b=u}return u},
gbA:function(){var u=this.c
if(u==null){u=D.L()
this.c=u}return u},
gen:function(){var u=this.d
if(u==null){u=D.L()
this.d=u}return u}}
X.bZ.prototype={}
X.f_.prototype={}
X.ds.prototype={}
X.fq.prototype={
aP:function(a,b){var u,t,s,r
H.h(a,"$ia",[V.a1],"$aa")
u=new P.ac(Date.now(),!1)
t=a.length>0?a[0]:V.bd()
s=this.a.gaJ()
r=new X.ds(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jL:function(a){var u
H.h(a,"$ia",[V.a1],"$aa")
u=this.b
if(u==null)return!1
u.H(this.aP(a,!0))
return!0},
jJ:function(a){var u
H.h(a,"$ia",[V.a1],"$aa")
u=this.c
if(u==null)return!1
u.H(this.aP(a,!0))
return!0},
jK:function(a){var u
H.h(a,"$ia",[V.a1],"$aa")
u=this.d
if(u==null)return!1
u.H(this.aP(a,!1))
return!0}}
X.dx.prototype={
gaJ:function(){var u=this.a
return V.jq(0,0,C.n.gdN(u).c,C.n.gdN(u).d)},
dd:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cT(u,new X.an(t,a.altKey,a.shiftKey))},
aG:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.an(t,a.altKey,a.shiftKey)},
c4:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.an(t,a.altKey,a.shiftKey)},
ax:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.m()
q=u.top
if(typeof s!=="number")return s.m()
return new V.a1(t-r,s-q)},
aQ:function(a){return new V.M(a.movementX,a.movementY)},
bZ:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a1])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
o=C.e.ai(p.pageX)
C.e.ai(p.pageY)
n=u.left
C.e.ai(p.pageX)
C.a.h(t,new V.a1(o-n,C.e.ai(p.pageY)-u.top))}return t},
at:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cG(u,new X.an(t,a.altKey,a.shiftKey))},
bP:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.m()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.m()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
hm:function(a){this.f=!0},
h8:function(a){this.f=!1},
hg:function(a){H.e(a,"$ia6")
if(this.f&&this.bP(a))a.preventDefault()},
hq:function(a){var u
H.e(a,"$iaI")
if(!this.f)return
u=this.dd(a)
this.b.jM(u)},
ho:function(a){var u
H.e(a,"$iaI")
if(!this.f)return
u=this.dd(a)
this.b.jI(u)},
hu:function(a){var u,t,s,r
H.e(a,"$ia6")
u=this.a
u.focus()
this.f=!0
this.aG(a)
if(this.x){t=this.at(a)
s=this.aQ(a)
if(this.d.cF(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.at(a)
r=this.ax(a)
if(this.c.cF(t,r))a.preventDefault()},
hy:function(a){var u,t,s
H.e(a,"$ia6")
this.aG(a)
u=this.at(a)
if(this.x){t=this.aQ(a)
if(this.d.b1(u,t))a.preventDefault()
return}if(this.r)return
s=this.ax(a)
if(this.c.b1(u,s))a.preventDefault()},
hk:function(a){var u,t,s
H.e(a,"$ia6")
if(!this.bP(a)){this.aG(a)
u=this.at(a)
if(this.x){t=this.aQ(a)
if(this.d.b1(u,t))a.preventDefault()
return}if(this.r)return
s=this.ax(a)
if(this.c.b1(u,s))a.preventDefault()}},
hw:function(a){var u,t,s
H.e(a,"$ia6")
this.aG(a)
u=this.at(a)
if(this.x){t=this.aQ(a)
if(this.d.b0(u,t))a.preventDefault()
return}if(this.r)return
s=this.ax(a)
if(this.c.b0(u,s))a.preventDefault()},
hi:function(a){var u,t,s
H.e(a,"$ia6")
if(!this.bP(a)){this.aG(a)
u=this.at(a)
if(this.x){t=this.aQ(a)
if(this.d.b0(u,t))a.preventDefault()
return}if(this.r)return
s=this.ax(a)
if(this.c.b0(u,s))a.preventDefault()}},
hA:function(a){var u,t
H.e(a,"$iaP")
this.aG(a)
u=new V.M((a&&C.G).gja(a),C.G.gjb(a)).v(0,180)
if(this.x){if(this.d.jN(u))a.preventDefault()
return}if(this.r)return
t=this.ax(a)
if(this.c.jO(u,t))a.preventDefault()},
hC:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.at(this.y)
s=this.ax(this.y)
this.d.hs(t,s,u)}},
hO:function(a){var u
H.e(a,"$iaB")
this.a.focus()
this.f=!0
this.c4(a)
u=this.bZ(a)
if(this.e.jL(u))a.preventDefault()},
hK:function(a){var u
H.e(a,"$iaB")
this.c4(a)
u=this.bZ(a)
if(this.e.jJ(u))a.preventDefault()},
hM:function(a){var u
H.e(a,"$iaB")
this.c4(a)
u=this.bZ(a)
if(this.e.jK(u))a.preventDefault()},
sfI:function(a){this.z=H.h(a,"$ia",[[P.c6,P.I]],"$aa")}}
D.aS.prototype={
gB:function(){var u=this.d
if(u==null){u=D.L()
this.d=u}return u},
ar:function(a){var u
H.e(a,"$ix")
u=this.d
if(u!=null)u.H(a)},
fa:function(){return this.ar(null)},
$iX:1,
$iaZ:1}
D.X.prototype={$iaZ:1}
D.cV.prototype={
gB:function(){var u=this.Q
if(u==null){u=D.L()
this.Q=u}return u},
ar:function(a){var u=this.Q
if(u!=null)u.H(a)},
ds:function(a){var u
H.e(a,"$ix")
u=this.ch
if(u!=null)u.H(a)},
hr:function(){return this.ds(null)},
hE:function(a){var u,t,s
H.h(a,"$in",[D.X],"$an")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t){s=a[t]
if(s==null||this.fB(s))return!1}return!0},
h2:function(a,b){var u,t,s,r,q,p,o,n
u=D.X
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gdr(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=H.e(b[p],"$iX")
if(o instanceof D.aS)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.aG()
n.sa3(null)
n.saw(null)
n.c=null
n.d=0
o.d=n}H.j(s,r)
if(n.a==null)n.sa3(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bs(a,b,this,[u])
u.b=!0
this.ar(u)},
hI:function(a,b){var u,t,s,r,q,p
u=D.X
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gdr(),r=0;r<b.length;b.length===t||(0,H.y)(b),++r){q=H.e(b[r],"$iX")
if(q instanceof D.aS)C.a.K(this.e,q)
p=q.d
if(p==null){p=new D.aG()
p.sa3(null)
p.saw(null)
p.c=null
p.d=0
q.d=p}p.K(0,s)}u=new D.bt(a,b,this,[u])
u.b=!0
this.ar(u)},
fB:function(a){var u=C.a.aS(this.e,a)
return u},
sfF:function(a){this.e=H.h(a,"$ia",[D.aS],"$aa")},
shP:function(a){this.f=H.h(a,"$ia",[D.d6],"$aa")},
si8:function(a){this.r=H.h(a,"$ia",[D.dd],"$aa")},
sil:function(a){this.x=H.h(a,"$ia",[D.dm],"$aa")},
sim:function(a){this.y=H.h(a,"$ia",[D.dn],"$aa")},
sio:function(a){this.z=H.h(a,"$ia",[D.dp],"$aa")},
$an:function(){return[D.X]},
$aT:function(){return[D.X]}}
D.d6.prototype={$iX:1,$iaZ:1}
D.dd.prototype={$iX:1,$iaZ:1}
D.dm.prototype={$iX:1,$iaZ:1}
D.dn.prototype={$iX:1,$iaZ:1}
D.dp.prototype={$iX:1,$iaZ:1}
V.U.prototype={
l:function(a,b){var u,t,s
u=C.e.l(this.a,b.gcJ())
t=C.e.l(this.b,b.gbE())
s=C.e.l(this.c,b.gcd())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.U(u,t,s)},
m:function(a,b){var u,t,s
u=C.e.m(this.a,b.gcJ())
t=C.e.m(this.b,b.gbE())
s=C.e.m(this.c,b.gcd())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.U(u,t,s)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.av.prototype={
l:function(a,b){var u,t,s,r
u=C.e.l(this.a,b.gcJ())
t=C.e.l(this.b,b.gbE())
s=C.e.l(this.c,b.gcd())
r=C.e.l(this.d,b.giT(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.av(u,t,s,r)},
m:function(a,b){var u,t,s,r
u=C.e.m(this.a,b.gcJ())
t=C.e.m(this.b,b.gbE())
s=C.e.m(this.c,b.gcd())
r=C.e.m(this.d,b.giT(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.av(u,t,s,r)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}}
V.eg.prototype={}
V.d0.prototype={
ac:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.o])
return u},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d0))return!1
u=b.a
t=$.B()
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
if(typeof u!=="number")return u.m()
if(typeof r!=="number")return H.r(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=this.x
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q,p,o,n
u=[P.o]
t=V.bH(H.b([this.a,this.d,this.r],u),3,0)
s=V.bH(H.b([this.b,this.e,this.x],u),3,0)
r=V.bH(H.b([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.c(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.c(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.c(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.c(t,1)
n=" "+t[1]+", "
if(1>=p)return H.c(s,1)
n=n+s[1]+", "
if(1>=o)return H.c(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.c(t,2)
u=" "+t[2]+", "
if(2>=p)return H.c(s,2)
u=u+s[2]+", "
if(2>=o)return H.c(r,2)
return n+(u+r[2]+"]")}}
V.ad.prototype={
ac:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.o])
return u},
el:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(typeof g!=="number")return g.k()
e=this.z
d=this.cx
if(typeof e!=="number")return e.k()
c=g*f-e*d
b=this.db
a=this.Q
if(typeof a!=="number")return a.k()
a0=g*b-a*d
a1=this.dx
a2=this.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
if(Math.abs(a7-0)<$.B().a)return V.ai()
a8=1/a7
a9=-r
b0=-d
return V.aK((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
k:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
if(typeof p!=="number")return H.r(p)
o=this.d
n=b2.cx
m=b2.b
l=b2.f
k=b2.z
if(typeof k!=="number")return H.r(k)
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
if(typeof g!=="number")return H.r(g)
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
if(typeof a3!=="number")return a3.k()
a4=this.z
if(typeof a4!=="number")return a4.k()
a5=this.Q
if(typeof a5!=="number")return a5.k()
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.aK(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cP:function(a){var u,t,s,r,q,p
u=a.a
t=a.b
s=a.c
if(typeof s!=="number")return H.r(s)
r=this.y
if(typeof r!=="number")return r.k()
q=this.z
if(typeof q!=="number")return q.k()
p=this.Q
if(typeof p!=="number")return p.k()
return new V.z(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,r*u+q*t+p*s)},
b6:function(a){var u,t,s,r,q,p
u=a.a
t=a.b
s=a.c
if(typeof s!=="number")return H.r(s)
r=this.y
if(typeof r!=="number")return r.k()
q=this.z
if(typeof q!=="number")return q.k()
p=this.Q
if(typeof p!=="number")return p.k()
return new V.R(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,r*u+q*t+p*s+this.ch)},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.B()
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
if(typeof u!=="number")return u.m()
if(typeof r!=="number")return H.r(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=this.z
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=this.Q
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-this.ch)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
i:function(a){return this.L()},
ed:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.o]
t=V.bH(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bH(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bH(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bH(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.c(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.c(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.c(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.c(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.c(t,1)
l=l+t[1]+", "
if(1>=o)return H.c(s,1)
l=l+s[1]+", "
if(1>=n)return H.c(r,1)
l=l+r[1]+", "
if(1>=m)return H.c(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.c(t,2)
p=p+t[2]+", "
if(2>=o)return H.c(s,2)
p=p+s[2]+", "
if(2>=n)return H.c(r,2)
p=p+r[2]+", "
if(2>=m)return H.c(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.c(t,3)
l=l+t[3]+", "
if(3>=o)return H.c(s,3)
l=l+s[3]+", "
if(3>=n)return H.c(r,3)
l=l+r[3]+", "
if(3>=m)return H.c(q,3)
return p+(l+q[3]+"]")},
L:function(){return this.ed("",3,0)},
C:function(a){return this.ed(a,3,0)}}
V.a1.prototype={
l:function(a,b){return new V.a1(this.a+b.a,this.b+b.b)},
m:function(a,b){return new V.a1(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.R.prototype={
l:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.r(t)
return new V.R(this.a+b.a,this.b+b.b,u+t)},
m:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.r(t)
return new V.R(this.a-b.a,this.b-b.b,u-t)},
k:function(a,b){var u=this.c
if(typeof u!=="number")return u.k()
return new V.R(this.a*b,this.b*b,u*b)},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.B()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.m()
if(typeof r!=="number")return H.r(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.az.prototype={
l:function(a,b){return new V.az(C.e.l(this.a,b.gka(b)),C.e.l(this.b,b.gkb(b)),C.e.l(this.c,b.gkc(b)),C.e.l(this.d,b.gk9()))},
m:function(a,b){return new V.az(C.e.m(this.a,b.gka(b)),C.e.m(this.b,b.gkb(b)),C.e.m(this.c,b.gkc(b)),C.e.m(this.d,b.gk9()))},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.az))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}}
V.da.prototype={
ga4:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.da))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}}
V.M.prototype={
cA:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.r(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.r(r)
return u*t+s*r},
l:function(a,b){var u,t,s
u=this.a
t=b.gjg(b)
if(typeof u!=="number")return u.l()
t=C.e.l(u,t)
u=this.b
s=b.gjh(b)
if(typeof u!=="number")return u.l()
return new V.M(t,C.e.l(u,s))},
m:function(a,b){var u,t,s
u=this.a
t=b.gjg(b)
if(typeof u!=="number")return u.m()
t=C.e.m(u,t)
u=this.b
s=b.gjh(b)
if(typeof u!=="number")return u.m()
return new V.M(t,C.e.m(u,s))},
k:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.k()
t=this.b
if(typeof t!=="number")return t.k()
return new V.M(u*b,t*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.B().a){u=$.jC
if(u==null){u=new V.M(0,0)
$.jC=u}return u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.M(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.r(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.z.prototype={
cA:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t
u=this.c
t=a.c
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.r(t)
return this.a*a.a+this.b*a.b+u*t},
cB:function(a,b){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=a.c
if(typeof r!=="number")return r.m()
if(typeof s!=="number")return H.r(s)
return new V.z(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
ay:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
if(typeof t!=="number")return H.r(t)
s=this.c
r=a.b
if(typeof s!=="number")return s.k()
q=a.a
p=this.a
return new V.z(u*t-s*r,s*q-p*t,p*r-u*q)},
l:function(a,b){var u,t,s,r
u=b.a
t=b.b
s=this.c
r=b.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.r(r)
return new V.z(this.a+u,this.b+t,s+r)},
m:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.r(t)
return new V.z(this.a-b.a,this.b-b.b,u-t)},
O:function(a){var u=this.c
if(typeof u!=="number")return u.O()
return new V.z(-this.a,-this.b,-u)},
k:function(a,b){var u=this.c
if(typeof u!=="number")return u.k()
return new V.z(this.a*b,this.b*b,u*b)},
v:function(a,b){var u
if(Math.abs(b-0)<$.B().a)return V.ch()
u=this.c
if(typeof u!=="number")return u.v()
return new V.z(this.a/b,this.b/b,u/b)},
em:function(){var u,t,s
u=$.B()
t=u.a
if(!(Math.abs(0-this.a)<t))return!1
if(!(Math.abs(0-this.b)<t))return!1
s=this.c
u.toString
if(typeof s!=="number")return H.r(s)
if(!(Math.abs(0-s)<t))return!1
return!0},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.B()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.m()
if(typeof r!=="number")return H.r(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
U.e5.prototype={
bI:function(a){var u=V.it(a,this.c,this.b)
return u},
gB:function(){var u=this.y
if(u==null){u=D.L()
this.y=u}return u},
F:function(a){var u=this.y
if(u!=null)u.H(a)},
scR:function(a,b){},
scC:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.B().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bI(t)}u=new D.C("maximumLocation",u,this.b,this,[P.o])
u.b=!0
this.F(u)}},
scE:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.B().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bI(t)}u=new D.C("minimumLocation",u,this.c,this,[P.o])
u.b=!0
this.F(u)}},
sY:function(a,b){var u
b=this.bI(b)
u=this.d
if(!(Math.abs(u-b)<$.B().a)){this.d=b
u=new D.C("location",u,b,this,[P.o])
u.b=!0
this.F(u)}},
scD:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.B().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.C("maximumVelocity",u,a,this,[P.o])
u.b=!0
this.F(u)}},
sS:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.B().a)){this.f=a
u=new D.C("velocity",u,a,this,[P.o])
u.b=!0
this.F(u)}},
scl:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.B().a)){this.x=a
u=new D.C("dampening",u,a,this,[P.o])
u.b=!0
this.F(u)}},
aq:function(a){var u,t,s,r,q
u=this.f
t=$.B().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sY(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.B().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sS(s)}}}
U.cI.prototype={
gB:function(){var u=this.b
if(u==null){u=D.L()
this.b=u}return u},
aj:function(a,b){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cI))return!1
return J.K(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.bV.prototype={
gB:function(){var u=this.e
if(u==null){u=D.L()
this.e=u}return u},
F:function(a){var u
H.e(a,"$ix")
u=this.e
if(u!=null)u.H(a)},
a2:function(){return this.F(null)},
fc:function(a,b){var u,t,s,r,q,p,o,n
u=U.a2
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gaC(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=b[p]
if(o!=null){n=o.gB()
n.toString
H.j(s,r)
if(n.a==null)n.sa3(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bs(a,b,this,[u])
u.b=!0
this.F(u)},
hG:function(a,b){var u,t,s,r,q
u=U.a2
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gaC(),r=0;r<b.length;b.length===t||(0,H.y)(b),++r){q=b[r]
if(q!=null)q.gB().K(0,s)}u=new D.bt(a,b,this,[u])
u.b=!0
this.F(u)},
aj:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.T()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.am(u,u.length,0,[H.t(u,0)]),s=null;u.J();){t=u.d
if(t!=null){r=t.aj(a,b)
if(r!=null)s=s==null?r:r.k(0,s)}}this.f=s==null?V.ai():s
u=this.e
if(u!=null)u.ah()}return this.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bV))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.K(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$an:function(){return[U.a2]},
$aT:function(){return[U.a2]},
$ia2:1}
U.a2.prototype={}
U.db.prototype={
gB:function(){var u=this.y
if(u==null){u=D.L()
this.y=u}return u},
F:function(a){var u=this.y
if(u!=null)u.H(a)},
seN:function(a){var u
a=V.it(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.B().a)){this.a=a
u=new D.C("yaw",u,a,this,[P.o])
u.b=!0
this.F(u)}},
sew:function(a){var u
a=V.it(a,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-a)<$.B().a)){this.b=a
u=new D.C("pitch",u,a,this,[P.o])
u.b=!0
this.F(u)}},
seC:function(a){var u
a=V.it(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.B().a)){this.c=a
u=new D.C("roll",u,a,this,[P.o])
u.b=!0
this.F(u)}},
aj:function(a,b){var u,t
u=this.r
t=a.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.seN(this.a+this.d*a.y)
this.sew(this.b+this.e*a.y)
this.seC(this.c+this.f*a.y)
this.x=V.jh(this.c).k(0,V.jg(this.b)).k(0,V.iH(this.a))
u=this.y
if(u!=null)u.ah()}return this.x},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.db))return!1
u=this.a
t=b.a
s=$.B().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"], ["+V.F(this.d,3,0)+", "+V.F(this.e,3,0)+", "+V.F(this.f,3,0)+"]"}}
U.dy.prototype={
gB:function(){var u=this.cy
if(u==null){u=D.L()
this.cy=u}return u},
F:function(a){var u
H.e(a,"$ix")
u=this.cy
if(u!=null)u.H(a)},
a2:function(){return this.F(null)},
aR:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdP().h(0,this.gbQ())
this.a.c.gen().h(0,this.gbS())
this.a.c.gbA().h(0,this.gbU())
return!0},
bR:function(a){H.e(a,"$ix")
if(!J.K(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
bT:function(a){var u,t,s,r,q,p,o
a=H.f(H.e(a,"$ix"),"$iaY")
if(!this.y)return
if(this.x){u=a.d.m(0,a.y)
u=new V.M(u.a,u.b)
u=u.E(u)
t=this.r
if(typeof t!=="number")return H.r(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.m(0,a.y)
u=new V.M(t.a,t.b).k(0,2).v(0,u.ga4())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.k()
s=this.e
if(typeof s!=="number")return H.r(s)
t.sS(u*10*s)}else{u=a.c
t=a.d
s=t.m(0,a.y)
r=new V.M(s.a,s.b).k(0,2).v(0,u.ga4())
s=this.b
q=r.a
if(typeof q!=="number")return q.O()
p=this.e
if(typeof p!=="number")return H.r(p)
o=this.z
if(typeof o!=="number")return H.r(o)
s.sY(0,-q*p+o)
this.b.sS(0)
t=t.m(0,a.z)
this.Q=new V.M(t.a,t.b).k(0,2).v(0,u.ga4())}this.a2()},
bV:function(a){var u,t,s
H.e(a,"$ix")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.E(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.k()
s=this.e
if(typeof s!=="number")return H.r(s)
u.sS(t*10*s)
this.a2()}},
aj:function(a,b){var u,t,s
u=this.ch
t=a.e
if(typeof u!=="number")return u.T()
if(u<t){this.ch=t
s=a.y
this.b.aq(s)
this.cx=V.jh(this.b.d)}return this.cx},
$ia2:1}
U.dz.prototype={
gB:function(){var u=this.fx
if(u==null){u=D.L()
this.fx=u}return u},
F:function(a){var u
H.e(a,"$ix")
u=this.fx
if(u!=null)u.H(a)},
a2:function(){return this.F(null)},
aR:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdP().h(0,this.gbQ())
this.a.c.gen().h(0,this.gbS())
this.a.c.gbA().h(0,this.gbU())
u=this.a.d
t=u.f
if(t==null){t=D.L()
u.f=t
u=t}else u=t
u.h(0,this.gfW())
u=this.a.d
t=u.d
if(t==null){t=D.L()
u.d=t
u=t}else u=t
u.h(0,this.gfY())
u=this.a.e
t=u.b
if(t==null){t=D.L()
u.b=t
u=t}else u=t
u.h(0,this.gii())
u=this.a.e
t=u.d
if(t==null){t=D.L()
u.d=t
u=t}else u=t
u.h(0,this.gig())
u=this.a.e
t=u.c
if(t==null){t=D.L()
u.c=t
u=t}else u=t
u.h(0,this.gic())
return!0},
am:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.M(u,t)},
bR:function(a){a=H.f(H.e(a,"$ix"),"$iaY")
if(!J.K(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bT:function(a){var u,t,s,r,q,p,o
a=H.f(H.e(a,"$ix"),"$iaY")
if(!this.cx)return
if(this.ch){u=a.d.m(0,a.y)
u=new V.M(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.m(0,a.y)
u=this.am(new V.M(t.a,t.b).k(0,2).v(0,u.ga4()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.O()
s=this.y
if(typeof s!=="number")return H.r(s)
t.sS(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.O()
t=this.x
if(typeof t!=="number")return H.r(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.m(0,a.y)
r=this.am(new V.M(s.a,s.b).k(0,2).v(0,u.ga4()))
s=this.c
q=r.a
if(typeof q!=="number")return q.O()
p=this.y
if(typeof p!=="number")return H.r(p)
o=this.cy
if(typeof o!=="number")return H.r(o)
s.sY(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.O()
q=this.x
if(typeof q!=="number")return H.r(q)
s=this.db
if(typeof s!=="number")return H.r(s)
o.sY(0,-p*q+s)
this.b.sS(0)
this.c.sS(0)
t=t.m(0,a.z)
this.dx=this.am(new V.M(t.a,t.b).k(0,2).v(0,u.ga4()))}this.a2()},
bV:function(a){var u,t,s
H.e(a,"$ix")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.O()
s=this.y
if(typeof s!=="number")return H.r(s)
u.sS(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.O()
u=this.x
if(typeof u!=="number")return H.r(u)
s.sS(-t*10*u)
this.a2()}},
fX:function(a){if(H.f(H.e(a,"$ix"),"$icX").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fZ:function(a){var u,t,s,r,q,p,o
a=H.f(H.e(a,"$ix"),"$iaY")
if(!J.K(this.d,a.x.b))return
u=a.c
t=a.d
s=t.m(0,a.y)
r=this.am(new V.M(s.a,s.b).k(0,2).v(0,u.ga4()))
s=this.c
q=r.a
if(typeof q!=="number")return q.O()
p=this.y
if(typeof p!=="number")return H.r(p)
o=this.cy
if(typeof o!=="number")return H.r(o)
s.sY(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.O()
q=this.x
if(typeof q!=="number")return H.r(q)
s=this.db
if(typeof s!=="number")return H.r(s)
o.sY(0,-p*q+s)
this.b.sS(0)
this.c.sS(0)
t=t.m(0,a.z)
this.dx=this.am(new V.M(t.a,t.b).k(0,2).v(0,u.ga4()))
this.a2()},
ij:function(a){H.e(a,"$ix")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ih:function(a){var u,t,s,r,q,p,o
a=H.f(H.e(a,"$ix"),"$ids")
if(!this.cx)return
if(this.ch){u=a.d.m(0,a.y)
u=new V.M(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.m(0,a.y)
u=this.am(new V.M(t.a,t.b).k(0,2).v(0,u.ga4()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.O()
s=this.y
if(typeof s!=="number")return H.r(s)
t.sS(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.O()
t=this.x
if(typeof t!=="number")return H.r(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.m(0,a.y)
r=this.am(new V.M(s.a,s.b).k(0,2).v(0,u.ga4()))
s=this.c
q=r.a
if(typeof q!=="number")return q.O()
p=this.y
if(typeof p!=="number")return H.r(p)
o=this.cy
if(typeof o!=="number")return H.r(o)
s.sY(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.O()
q=this.x
if(typeof q!=="number")return H.r(q)
s=this.db
if(typeof s!=="number")return H.r(s)
o.sY(0,-p*q+s)
this.b.sS(0)
this.c.sS(0)
t=t.m(0,a.z)
this.dx=this.am(new V.M(t.a,t.b).k(0,2).v(0,u.ga4()))}this.a2()},
ie:function(a){var u,t,s
H.e(a,"$ix")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.O()
s=this.y
if(typeof s!=="number")return H.r(s)
u.sS(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.O()
u=this.x
if(typeof u!=="number")return H.r(u)
s.sS(-t*10*u)
this.a2()}},
aj:function(a,b){var u,t,s
u=this.dy
t=a.e
if(typeof u!=="number")return u.T()
if(u<t){this.dy=t
s=a.y
this.c.aq(s)
this.b.aq(s)
this.fr=V.iH(this.b.d).k(0,V.jg(this.c.d))}return this.fr},
$ia2:1}
U.dA.prototype={
gB:function(){var u=this.r
if(u==null){u=D.L()
this.r=u}return u},
F:function(a){var u=this.r
if(u!=null)u.H(a)},
aR:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.L()
u.e=t
u=t}else u=t
t=this.gh_()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.L()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
h0:function(a){var u,t,s,r
H.e(a,"$ix")
if(!J.K(this.b,this.a.b.c))return
H.f(a,"$ibZ")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.k()
r=u+t*s
if(u!==r){this.d=r
u=new D.C("zoom",u,r,this,[P.o])
u.b=!0
this.F(u)}},
aj:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aK(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ia2:1}
M.cL.prototype={
as:function(a){var u
H.e(a,"$ix")
u=this.x
if(u!=null)u.H(a)},
fe:function(){return this.as(null)},
hc:function(a,b){var u,t,s,r,q,p,o,n
u=E.ah
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gal(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.aG()
n.sa3(null)
n.saw(null)
n.c=null
n.d=0
o.z=n}H.j(s,r)
if(n.a==null)n.sa3(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bs(a,b,this,[u])
u.b=!0
this.as(u)},
he:function(a,b){var u,t,s,r,q,p
u=E.ah
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gal(),r=0;r<b.length;b.length===t||(0,H.y)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aG()
p.sa3(null)
p.saw(null)
p.c=null
p.d=0
q.z=p}p.K(0,s)}}u=new D.bt(a,b,this,[u])
u.b=!0
this.as(u)},
seE:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gB().K(0,this.gal())
t=this.c
this.c=a
if(a!=null)a.gB().h(0,this.gal())
u=new D.C("technique",t,this.c,this,[O.bA])
u.b=!0
this.as(u)}},
gB:function(){var u=this.x
if(u==null){u=D.L()
this.x=u}return u},
aM:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=new E.dg(a,this)
u.b=!0
t=this.e
if(t!=null)t.H(u)
a.ez(this.c)
t=this.b
t.toString
s=a.a
C.b.iW(s,36160,null)
C.b.cn(s,2884)
C.b.cn(s,2929)
C.b.jc(s,513)
r=s.drawingBufferWidth
q=s.drawingBufferHeight
p=t.r
o=p.a
if(typeof r!=="number")return H.r(r)
n=C.e.ai(o*r)
o=p.b
if(typeof q!=="number")return H.r(q)
m=C.e.ai(o*q)
o=C.e.ai(p.c*r)
a.c=o
p=C.e.ai(p.d*q)
a.d=p
C.b.k8(s,n,m,o,p)
C.b.j1(s,t.c)
t=t.a
C.b.j0(s,t.a,t.b,t.c,t.d)
C.b.j_(s,16640)
t=this.a
s=a.c
p=a.d
o=t.c
l=t.d
k=t.e
j=k-l
i=1/Math.tan(o*0.5)
h=V.aK(-i/(s/p),0,0,0,0,i,0,0,0,0,k/j,-k*l/j,0,0,1,0)
t.a
a.cy.ey(h)
s=$.jl
if(s==null){s=V.jn()
p=V.jH()
o=$.jD
if(o==null){o=new V.z(0,0,-1)
$.jD=o}o=V.jf(s,p,o)
$.jl=o
g=o}else g=s
s=t.b
if(s!=null){f=s.aj(a,t)
if(f!=null)g=f.k(0,g)}a.db.ey(g)
t=this.c
if(t!=null)t.aq(a)
for(t=this.d.a,t=new J.am(t,t.length,0,[H.t(t,0)]);t.J();)t.d.aq(a)
for(t=this.d.a,t=new J.am(t,t.length,0,[H.t(t,0)]);t.J();)t.d.aM(a)
this.a.toString
a.cy.cG()
a.db.cG()
this.b.toString
a.ex()},
sfd:function(a,b){this.d=H.h(b,"$iT",[E.ah],"$aT")},
$imJ:1}
A.cB.prototype={}
A.dZ.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ji:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
C.b.dQ(r.a,r.c)}},
je:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
C.b.dO(r.a,r.c)}}}
A.eK.prototype={
f3:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.ae("")
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
a7.is(u)
a7.iz(u)
a7.it(u)
a7.iH(u)
a7.iI(u)
a7.iB(u)
a7.iM(u)
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
u=new P.ae("")
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
s.iw(u)
s.ir(u)
s.iu(u)
s.ix(u)
s.iF(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.iD(u)
s.iE(u)}s.iA(u)
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
k=H.b([],[P.k])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.D(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.iv(u)
s.iC(u)
s.iG(u)
s.iJ(u)
s.iK(u)
s.iL(u)
s.iy(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.k])
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
this.e=this.de(n,35633)
this.f=this.de(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.dJ(s,q,this.e)
C.b.dJ(s,this.r,this.f)
C.b.jv(s,this.r)
if(!H.k3(C.b.bD(s,this.r,35714))){h=C.b.eR(s,this.r)
C.b.j8(s,this.r)
H.q(P.u("Failed to link shader: "+H.i(h)))}this.i3()
this.i5()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a7.fr)this.id=H.f(this.y.p(0,"invViewMat"),"$iao")
if(t)this.dy=H.f(this.y.p(0,"objMat"),"$iao")
if(r)this.fr=H.f(this.y.p(0,"viewObjMat"),"$iao")
this.fy=H.f(this.y.p(0,"projViewObjMat"),"$iao")
if(a7.x2)this.k1=H.f(this.y.p(0,"txt2DMat"),"$ica")
if(a7.y1)this.k2=H.f(this.y.p(0,"txtCubeMat"),"$iao")
if(a7.y2)this.k3=H.f(this.y.p(0,"colorMat"),"$iao")
this.sft(H.b([],[A.ao]))
t=a7.ap
if(t>0){this.k4=H.e(this.y.p(0,"bendMatCount"),"$iE")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.q(P.u("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.f(f,"$iao"))}}t=a7.a
if(t!==C.d){this.r2=H.f(this.y.p(0,"emissionClr"),"$iD")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.f(this.y.p(0,"emissionTxt"),"$iaf")
this.x1=H.f(this.y.p(0,"nullEmissionTxt"),"$iE")
break
case C.i:this.ry=H.f(this.y.p(0,"emissionTxt"),"$iag")
this.x1=H.f(this.y.p(0,"nullEmissionTxt"),"$iE")
break}}t=a7.b
if(t!==C.d){this.x2=H.f(this.y.p(0,"ambientClr"),"$iD")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.f(this.y.p(0,"ambientTxt"),"$iaf")
this.ap=H.f(this.y.p(0,"nullAmbientTxt"),"$iE")
break
case C.i:this.y2=H.f(this.y.p(0,"ambientTxt"),"$iag")
this.ap=H.f(this.y.p(0,"nullAmbientTxt"),"$iE")
break}}t=a7.c
if(t!==C.d){this.af=H.f(this.y.p(0,"diffuseClr"),"$iD")
switch(t){case C.d:break
case C.j:break
case C.h:this.bg=H.f(this.y.p(0,"diffuseTxt"),"$iaf")
this.bh=H.f(this.y.p(0,"nullDiffuseTxt"),"$iE")
break
case C.i:this.dR=H.f(this.y.p(0,"diffuseTxt"),"$iag")
this.bh=H.f(this.y.p(0,"nullDiffuseTxt"),"$iE")
break}}t=a7.d
if(t!==C.d){this.bi=H.f(this.y.p(0,"invDiffuseClr"),"$iD")
switch(t){case C.d:break
case C.j:break
case C.h:this.dS=H.f(this.y.p(0,"invDiffuseTxt"),"$iaf")
this.bj=H.f(this.y.p(0,"nullInvDiffuseTxt"),"$iE")
break
case C.i:this.dT=H.f(this.y.p(0,"invDiffuseTxt"),"$iag")
this.bj=H.f(this.y.p(0,"nullInvDiffuseTxt"),"$iE")
break}}t=a7.e
if(t!==C.d){this.bm=H.f(this.y.p(0,"shininess"),"$iS")
this.bk=H.f(this.y.p(0,"specularClr"),"$iD")
switch(t){case C.d:break
case C.j:break
case C.h:this.dU=H.f(this.y.p(0,"specularTxt"),"$iaf")
this.bl=H.f(this.y.p(0,"nullSpecularTxt"),"$iE")
break
case C.i:this.dV=H.f(this.y.p(0,"specularTxt"),"$iag")
this.bl=H.f(this.y.p(0,"nullSpecularTxt"),"$iE")
break}}switch(a7.f){case C.d:break
case C.j:break
case C.h:this.dW=H.f(this.y.p(0,"bumpTxt"),"$iaf")
this.bn=H.f(this.y.p(0,"nullBumpTxt"),"$iE")
break
case C.i:this.dX=H.f(this.y.p(0,"bumpTxt"),"$iag")
this.bn=H.f(this.y.p(0,"nullBumpTxt"),"$iE")
break}if(a7.dy){this.dY=H.f(this.y.p(0,"envSampler"),"$iag")
this.dZ=H.f(this.y.p(0,"nullEnvTxt"),"$iE")
t=a7.r
if(t!==C.d){this.bo=H.f(this.y.p(0,"reflectClr"),"$iD")
switch(t){case C.d:break
case C.j:break
case C.h:this.e_=H.f(this.y.p(0,"reflectTxt"),"$iaf")
this.bp=H.f(this.y.p(0,"nullReflectTxt"),"$iE")
break
case C.i:this.e0=H.f(this.y.p(0,"reflectTxt"),"$iag")
this.bp=H.f(this.y.p(0,"nullReflectTxt"),"$iE")
break}}t=a7.x
if(t!==C.d){this.bq=H.f(this.y.p(0,"refraction"),"$iS")
this.br=H.f(this.y.p(0,"refractClr"),"$iD")
switch(t){case C.d:break
case C.j:break
case C.h:this.e1=H.f(this.y.p(0,"refractTxt"),"$iaf")
this.bs=H.f(this.y.p(0,"nullRefractTxt"),"$iE")
break
case C.i:this.e2=H.f(this.y.p(0,"refractTxt"),"$iag")
this.bs=H.f(this.y.p(0,"nullRefractTxt"),"$iE")
break}}}t=a7.y
if(t!==C.d){this.bt=H.f(this.y.p(0,"alpha"),"$iS")
switch(t){case C.d:break
case C.j:break
case C.h:this.e3=H.f(this.y.p(0,"alphaTxt"),"$iaf")
this.bu=H.f(this.y.p(0,"nullAlphaTxt"),"$iE")
break
case C.i:this.e4=H.f(this.y.p(0,"alphaTxt"),"$iag")
this.bu=H.f(this.y.p(0,"nullAlphaTxt"),"$iE")
break}}this.sff(H.b([],[A.c9]))
this.sfg(H.b([],[A.cb]))
this.sfh(H.b([],[A.cc]))
this.sfi(H.b([],[A.cd]))
this.sfj(H.b([],[A.ce]))
this.sfk(H.b([],[A.cf]))
if(a7.k2){t=a7.z
if(t>0){this.e5=H.e(this.y.p(0,"dirLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iD")
s=this.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iD")
s=this.co;(s&&C.a).h(s,new A.c9(g,f,e))}}t=a7.Q
if(t>0){this.e6=H.e(this.y.p(0,"pntLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iD")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iD")
s=this.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iD")
s=this.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iS")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iS")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iS")
s=this.cp;(s&&C.a).h(s,new A.cb(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.e7=H.e(this.y.p(0,"spotLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iD")
s=this.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iD")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iD")
s=this.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iD")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iS")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iS")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iS")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iS")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a2,"$iS")
s=this.cq;(s&&C.a).h(s,new A.cc(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.e8=H.e(this.y.p(0,"txtDirLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iD")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iD")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iD")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iD")
s=this.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iD")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iE")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iaf")
s=this.cr;(s&&C.a).h(s,new A.cd(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.e9=H.e(this.y.p(0,"txtPntLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iD")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iD")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$ica")
s=this.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iD")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iE")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iS")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iS")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iS")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a2,"$iag")
s=this.cs;(s&&C.a).h(s,new A.ce(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.ea=H.e(this.y.p(0,"txtSpotLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iD")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iD")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iD")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iD")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iD")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iE")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iD")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iS")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a2,"$iS")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a3,"$iS")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a4,"$iS")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a5,"$iS")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a6,"$iaf")
s=this.ct;(s&&C.a).h(s,new A.cf(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ad:function(a,b,c){C.b.R(b.a,b.d,1)},
a8:function(a,b,c){C.b.R(b.a,b.d,1)},
sft:function(a){this.r1=H.h(a,"$ia",[A.ao],"$aa")},
sff:function(a){this.co=H.h(a,"$ia",[A.c9],"$aa")},
sfg:function(a){this.cp=H.h(a,"$ia",[A.cb],"$aa")},
sfh:function(a){this.cq=H.h(a,"$ia",[A.cc],"$aa")},
sfi:function(a){this.cr=H.h(a,"$ia",[A.cd],"$aa")},
sfj:function(a){this.cs=H.h(a,"$ia",[A.ce],"$aa")},
sfk:function(a){this.ct=H.h(a,"$ia",[A.cf],"$aa")}}
A.eN.prototype={
is:function(a){var u,t,s
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
iz:function(a){var u
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
it:function(a){var u
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
iH:function(a){var u,t
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
iI:function(a){var u,t
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
iB:function(a){var u
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
iM:function(a){var u
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
au:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.c(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.aA(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iw:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.au(a,u,"emission")
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
ir:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.au(a,u,"ambient")
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
iu:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.au(a,u,"diffuse")
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
ix:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.au(a,u,"invDiffuse")
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
iF:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.au(a,u,"specular")
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
iA:function(a){var u,t
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
iD:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.au(a,u,"reflect")
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
iE:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.au(a,u,"refract")
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
iv:function(a){var u,t
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
iC:function(a){var u,t
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
iG:function(a){var u,t
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
iJ:function(a){var u,t,s
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
iK:function(a){var u,t,s
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
iL:function(a){var u,t,s
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
iy:function(a){var u
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
i:function(a){return this.af}}
A.c9.prototype={}
A.cd.prototype={}
A.cb.prototype={}
A.ce.prototype={}
A.cc.prototype={}
A.cf.prototype={}
A.c4.prototype={
f6:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
de:function(a,b){var u,t,s
u=this.a
t=C.b.j6(u,b)
C.b.eX(u,t,a)
C.b.j3(u,t)
if(!H.k3(C.b.eT(u,t,35713))){s=C.b.eS(u,t)
C.b.j9(u,t)
throw H.d(P.u("Error compiling shader '"+H.i(t)+"': "+H.i(s)))}return t},
i3:function(){var u,t,s,r,q,p
u=H.b([],[A.cB])
t=this.a
s=H.a8(C.b.bD(t,this.r,35721))
if(typeof s!=="number")return H.r(s)
r=0
for(;r<s;++r){q=C.b.eO(t,this.r,r)
p=C.b.eQ(t,this.r,q.name)
C.a.h(u,new A.cB(t,q.name,p))}this.x=new A.dZ(u)},
i5:function(){var u,t,s,r,q,p
u=H.b([],[A.dt])
t=this.a
s=H.a8(C.b.bD(t,this.r,35718))
if(typeof s!=="number")return H.r(s)
r=0
for(;r<s;++r){q=C.b.eP(t,this.r,r)
p=C.b.eU(t,this.r,q.name)
C.a.h(u,this.j7(q.type,q.size,q.name,p))}this.y=new A.fC(u)},
aE:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.E(u,t,b,c)
else return A.iK(u,t,b,a,c)},
fC:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.af(u,t,b,c)
else return A.iK(u,t,b,a,c)},
fD:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ag(u,t,b,c)
else return A.iK(u,t,b,a,c)},
bd:function(a,b){return new P.dG(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
j7:function(a,b,c,d){switch(a){case 5120:return this.aE(b,c,d)
case 5121:return this.aE(b,c,d)
case 5122:return this.aE(b,c,d)
case 5123:return this.aE(b,c,d)
case 5124:return this.aE(b,c,d)
case 5125:return this.aE(b,c,d)
case 5126:return new A.S(this.a,this.r,c,d)
case 35664:return new A.fx(this.a,this.r,c,d)
case 35665:return new A.D(this.a,this.r,c,d)
case 35666:return new A.fA(this.a,this.r,c,d)
case 35667:return new A.fy(this.a,this.r,c,d)
case 35668:return new A.fz(this.a,this.r,c,d)
case 35669:return new A.fB(this.a,this.r,c,d)
case 35674:return new A.fD(this.a,this.r,c,d)
case 35675:return new A.ca(this.a,this.r,c,d)
case 35676:return new A.ao(this.a,this.r,c,d)
case 35678:return this.fC(b,c,d)
case 35680:return this.fD(b,c,d)
case 35670:throw H.d(this.bd("BOOL",c))
case 35671:throw H.d(this.bd("BOOL_VEC2",c))
case 35672:throw H.d(this.bd("BOOL_VEC3",c))
case 35673:throw H.d(this.bd("BOOL_VEC4",c))
default:throw H.d(P.u("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.bl.prototype={
i:function(a){return this.b}}
A.dt.prototype={}
A.fC.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.j(0,b)
if(u==null)throw H.d(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.L()},
jo:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r)s+=u[r].i(0)+a
return s},
L:function(){return this.jo("\n")}}
A.E.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.fy.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.fz.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.fB.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.fw.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
sip:function(a){this.e=H.h(a,"$ia",[P.l],"$aa")}}
A.S.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.fx.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.D.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.fA.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.fD.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.ca.prototype={
ak:function(a){var u=new Float32Array(H.bC(H.h(a,"$ia",[P.o],"$aa")))
C.b.eI(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.ao.prototype={
ak:function(a){var u=new Float32Array(H.bC(H.h(a,"$ia",[P.o],"$aa")))
C.b.eJ(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.af.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.ag.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.hN.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cB(u.b,b).cB(u.d.cB(u.c,b),c)
a.sY(0,new V.R(t.a,t.b,t.c))
a.scO(t.v(0,Math.sqrt(t.E(t))))
u=1-b
s=1-c
a.scb(new V.az(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:5}
F.hX.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:10}
F.hZ.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.r(q)
t=-t*q
p=s*q
a.sY(0,new V.R(t,p,r))
p=new V.z(t,p,r)
a.scO(p.v(0,Math.sqrt(p.E(p))))
a.scb(new V.az(1-c,2+c,-1,-1))},
$S:5}
F.i_.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:19}
F.i0.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:19}
F.io.prototype={
$2:function(a,b){return 0},
$S:10}
F.ip.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.r(u)
t=a.f
s=new V.z(t.a,t.b,t.c)
u=s.v(0,Math.sqrt(s.E(s))).k(0,this.b+u)
a.sY(0,new V.R(u.a,u.b,u.c))},
$S:5}
F.ir.prototype={
$1:function(a){return new V.R(Math.cos(a),Math.sin(a),0)},
$S:15}
F.i9.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.R(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:15}
F.hY.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=b*6.283185307179586
t=this.a
s=this.b
r=J.j3(t.$1(u),s)
s=J.kE(J.j3(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.z(s.a,s.b,s.c)
q=s.v(0,Math.sqrt(s.E(s)))
t=$.jE
if(t==null){t=new V.z(1,0,0)
$.jE=t
p=t}else p=t
t=q.ay(!J.K(q,p)?V.jI():p)
o=t.v(0,Math.sqrt(t.E(t)))
t=o.ay(q)
p=t.v(0,Math.sqrt(t.E(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.k(0,t*s)
s=o.k(0,m*s)
m=t.c
l=s.c
if(typeof m!=="number")return m.m()
if(typeof l!=="number")return H.r(l)
a.sY(0,J.kD(r,new V.R(t.a-s.a,t.b-s.b,m-l)))},
$S:5}
F.i2.prototype={
$2:function(a,b){return 0},
$S:10}
F.i3.prototype={
$3:function(a,b,c){var u,t,s,r
u=b*2-1
t=c*2-1
a.sY(0,new V.R(u,t,this.a.a.$2(b,c)))
s=new V.z(u,t,1)
a.scO(s.v(0,Math.sqrt(s.E(s))))
s=1-b
r=1-c
a.scb(new V.az(b*c,2+s*c,4+b*r,6+s*r))},
$S:5}
F.a_.prototype={
aU:function(){if(!this.gaV()){C.a.K(this.a.a.d.b,this)
this.a.a.a0()}this.c0()
this.c1()
this.hU()},
c5:function(a){this.a=a
C.a.h(a.d.b,this)},
c6:function(a){this.b=a
C.a.h(a.d.c,this)},
i2:function(a){this.c=a
C.a.h(a.d.d,this)},
c0:function(){var u=this.a
if(u!=null){C.a.K(u.d.b,this)
this.a=null}},
c1:function(){var u=this.b
if(u!=null){C.a.K(u.d.c,this)
this.b=null}},
hU:function(){var u=this.c
if(u!=null){C.a.K(u.d.d,this)
this.c=null}},
gaV:function(){return this.a==null||this.b==null||this.c==null},
fs:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.ch()
if(t!=null)q=q.l(0,t)
if(s!=null)q=q.l(0,s)
if(r!=null)q=q.l(0,r)
if(q.em())return
return q.v(0,Math.sqrt(q.E(q)))},
fw:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.m(0,t)
u=new V.z(u.a,u.b,u.c)
q=u.v(0,Math.sqrt(u.E(u)))
u=r.m(0,t)
u=new V.z(u.a,u.b,u.c)
u=q.ay(u.v(0,Math.sqrt(u.E(u))))
return u.v(0,Math.sqrt(u.E(u)))},
cg:function(){if(this.d!=null)return!0
var u=this.fs()
if(u==null){u=this.fw()
if(u==null)return!1}this.d=u
this.a.a.a0()
return!0},
fq:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.ch()
if(t!=null)q=q.l(0,t)
if(s!=null)q=q.l(0,s)
if(r!=null)q=q.l(0,r)
if(q.em())return
return q.v(0,Math.sqrt(q.E(q)))},
fv:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.B().a){u=m.m(0,p)
u=new V.z(u.a,u.b,u.c)
h=u.v(0,Math.sqrt(u.E(u)))
if(j.a-k.a<0)h=h.O(0)}else{g=(u-l.b)/i
u=m.m(0,p).k(0,g).l(0,p).m(0,s)
u=new V.z(u.a,u.b,u.c)
h=u.v(0,Math.sqrt(u.E(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.O(0)}u=this.d
if(u!=null){f=u.v(0,Math.sqrt(u.E(u)))
u=f.ay(h)
u=u.v(0,Math.sqrt(u.E(u))).ay(f)
h=u.v(0,Math.sqrt(u.E(u)))}return h},
ce:function(){if(this.e!=null)return!0
var u=this.fq()
if(u==null){u=this.fv()
if(u==null)return!1}this.e=u
this.a.a.a0()
return!0},
gj2:function(){if(J.K(this.a,this.b))return!0
if(J.K(this.b,this.c))return!0
if(J.K(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u,t
if(this.gaV())return a+"disposed"
u=a+C.c.ab(J.al(this.a.e),0)+", "+C.c.ab(J.al(this.b.e),0)+", "+C.c.ab(J.al(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
L:function(){return this.C("")}}
F.ej.prototype={}
F.fg.prototype={
aY:function(a,b,c){var u,t
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
F.aW.prototype={
aU:function(){if(!this.gaV()){C.a.K(this.a.a.c.b,this)
this.a.a.a0()}this.c0()
this.c1()},
c5:function(a){this.a=a
C.a.h(a.c.b,this)},
c6:function(a){this.b=a
C.a.h(a.c.c,this)},
c0:function(){var u=this.a
if(u!=null){C.a.K(u.c.b,this)
this.a=null}},
c1:function(){var u=this.b
if(u!=null){C.a.K(u.c.c,this)
this.b=null}},
gaV:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){if(this.gaV())return a+"disposed"
return a+C.c.ab(J.al(this.a.e),0)+", "+C.c.ab(J.al(this.b.e),0)},
L:function(){return this.C("")}}
F.ex.prototype={}
F.fv.prototype={
aY:function(a,b,c){var u,t
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
F.bc.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ab(J.al(u.e),0)},
L:function(){return this.C("")}}
F.bz.prototype={
gB:function(){var u=this.e
if(u==null){u=D.L()
this.e=u}return u},
aZ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.A()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.y)(u),++r){q=u[r]
this.a.h(0,q.j4())}this.a.A()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.y)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.l()
n+=t
o=o.c
if(n>=o.length)return H.c(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bc()
if(m.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.H(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.y)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.l()
n+=t
o=o.c
if(n>=o.length)return H.c(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.l()
o+=t
n=n.c
if(o>=n.length)return H.c(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.l0(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.y)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.l()
n+=t
o=o.c
if(n>=o.length)return H.c(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.l()
o+=t
n=n.c
if(o>=n.length)return H.c(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.l()
n+=t
o=o.c
if(n>=o.length)return H.c(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.bT(k,j,h)}u=this.e
if(u!=null)u.ah()},
ae:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.ae()||!1
if(!this.a.ae())t=!1
u=this.e
if(u!=null)u.ah()
return t},
jy:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.t(u,0)])
for(u=[F.a7];t.length!==0;){s=C.a.gjm(t)
C.a.jQ(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.y)(t),++p){o=t[p]
if(o!=null&&a.aY(0,s,o)){C.a.h(r,o)
C.a.K(t,o)}}if(r.length>1)b.aZ(r)}}this.a.A()
this.c.cK()
this.d.cK()
this.b.jR()
this.c.cL(new F.fv())
this.d.cL(new F.fg())
u=this.e
if(u!=null)u.ah()},
iS:function(a){this.jy(new F.fW(),new F.eW())},
c7:function(){return this.iS(null)},
iY:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.b5()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.b4().a)!==0)++r
if((s&$.b3().a)!==0)++r
if((s&$.b6().a)!==0)++r
if((s&$.b7().a)!==0)++r
if((s&$.cw().a)!==0)++r
if((s&$.cx().a)!==0)++r
if((s&$.bM().a)!==0)++r
if((s&$.b2().a)!==0)++r
q=a1.gcY(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.o
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.cE])
for(m=0,l=0;l<r;++l){k=a1.iU(l)
j=k.gcY(k)
C.a.q(n,l,new Z.cE(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.c(t,i)
h=t[i].jw(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.q(o,g,h[f]);++g}}m+=j}H.h(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.an(t,34962,e)
C.b.dM(t,34962,new Float32Array(H.bC(o)),35044)
C.b.an(t,34962,null)
d=new Z.cF(new Z.dC(34962,e),n,a1)
d.sfQ(H.b([],[Z.ba]))
if(this.b.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)}a=Z.iN(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.ba(0,c.length,a))}if(this.c.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.c(b,l)
b=b[l].b
b.a.a.A()
C.a.h(c,b.e)}a=Z.iN(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.ba(1,c.length,a))}if(this.d.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.c(b,l)
b=b[l].b
b.a.a.A()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.c(b,l)
b=b[l].c
b.a.a.A()
C.a.h(c,b.e)}a=Z.iN(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.ba(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.k])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.C("   "))}return C.a.D(u,"\n")},
ag:function(a){var u=this.e
if(u!=null)u.H(a)},
a0:function(){return this.ag(null)},
$imK:1}
F.fa.prototype={
iO:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[F.a7],"$aa")
u=H.b([],[F.a_])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.c(a,p)
p=a[p]
if(q>=o)return H.c(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.bT(s,p,o))}}return u},
iP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.h(c,"$ia",[F.a7],"$aa")
u=H.b([],[F.a_])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.c(c,r)
l=c[r];++r
if(r>=m)return H.c(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.c(c,j)
i=c[j]
if(s<0||s>=m)return H.c(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.bT(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.bT(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.bT(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.bT(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
cL:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aY(0,p,n)){p.aU()
break}}}}},
cK:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.gj2()
if(t)s.aU()}},
ae:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].cg())s=!1
return s},
cf:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].ce())s=!1
return s},
i:function(a){return this.L()},
C:function(a){var u,t,s,r
u=H.b([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
L:function(){return this.C("")},
sfJ:function(a){this.b=H.h(a,"$ia",[F.a_],"$aa")}}
F.fb.prototype={
gn:function(a){return this.b.length},
cL:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aY(0,p,n)){p.aU()
break}}}}},
cK:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.K(s.a,s.b)
if(t)s.aU()}},
i:function(a){return this.L()},
C:function(a){var u,t,s,r
u=H.b([],[P.k])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.c(r,s)
C.a.h(u,r[s].C(a+(""+s+". ")))}return C.a.D(u,"\n")},
L:function(){return this.C("")},
sfS:function(a){this.b=H.h(a,"$ia",[F.aW],"$aa")}}
F.fc.prototype={
gn:function(a){return this.b.length},
jR:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.H(null)}s=t.a
if(s!=null){C.a.K(s.b.b,t)
t.a=null}}}},
i:function(a){return this.L()},
C:function(a){var u,t,s,r
u=H.b([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
L:function(){return this.C("")},
sbY:function(a){this.b=H.h(a,"$ia",[F.bc],"$aa")}}
F.a7.prototype={
ck:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.dB(this.cx,s,p,u,t,r,q,a,o)},
j4:function(){return this.ck(null)},
sY:function(a,b){var u
if(!J.K(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a0()}},
scO:function(a){var u
if(!J.K(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a0()}},
scb:function(a){var u
if(!J.K(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a0()}},
jw:function(a){var u,t
if(a.t(0,$.b5())){u=this.f
t=[P.o]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b4())){u=this.r
t=[P.o]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b3())){u=this.x
t=[P.o]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b6())){u=this.y
t=[P.o]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.t(0,$.b7())){u=this.z
t=[P.o]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cw())){u=this.Q
t=[P.o]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cx())){u=this.Q
t=[P.o]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.bM()))return H.b([this.ch],[P.o])
else if(a.t(0,$.b2())){u=this.cx
t=[P.o]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.o])},
cg:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ch()
this.d.X(0,new F.h0(u))
u=u.a
this.r=u.v(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.a0()
u=this.a.e
if(u!=null)u.ah()}return!0},
ce:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ch()
this.d.X(0,new F.h_(u))
u=u.a
this.x=u.v(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.a0()
u=this.a.e
if(u!=null)u.ah()}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u,t,s
u=H.b([],[P.k])
C.a.h(u,C.c.ab(J.al(this.e),0))
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
C.a.h(u,V.F(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.D(u,", ")
return a+"{"+s+"}"},
L:function(){return this.C("")}}
F.h0.prototype={
$1:function(a){var u,t
H.e(a,"$ia_")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.l(0,u)}},
$S:6}
F.h_.prototype={
$1:function(a){var u,t
H.e(a,"$ia_")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.l(0,u)}},
$S:6}
F.fR.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.d(P.u("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a0()
return!0},
iR:function(a,b,c,d,e,f,g,h,i){var u=F.dB(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
iQ:function(a,b,c,d,e,f){return this.iR(a,null,b,c,d,e,f,null,0)},
gn:function(a){return this.c.length},
ae:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].cg()
return!0},
cf:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].ce()
return!0},
iZ:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.k()
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.K(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.H(null)}}}}return!0},
i:function(a){return this.L()},
C:function(a){var u,t,s,r
this.A()
u=H.b([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
L:function(){return this.C("")},
siq:function(a){this.c=H.h(a,"$ia",[F.a7],"$aa")}}
F.fS.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.c(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.c(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
X:function(a,b){H.j(b,{func:1,ret:-1,args:[F.a_]})
C.a.X(this.b,b)
C.a.X(this.c,new F.fT(this,b))
C.a.X(this.d,new F.fU(this,b))},
i:function(a){return this.L()},
C:function(a){var u,t,s,r
u=H.b([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
L:function(){return this.C("")},
sfK:function(a){this.b=H.h(a,"$ia",[F.a_],"$aa")},
sfL:function(a){this.c=H.h(a,"$ia",[F.a_],"$aa")},
sfM:function(a){this.d=H.h(a,"$ia",[F.a_],"$aa")}}
F.fT.prototype={
$1:function(a){H.e(a,"$ia_")
if(!J.K(a.a,this.a))this.b.$1(a)},
$S:6}
F.fU.prototype={
$1:function(a){var u
H.e(a,"$ia_")
u=this.a
if(!J.K(a.a,u)&&!J.K(a.b,u))this.b.$1(a)},
$S:6}
F.fV.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.c(u,s)
return u[s]}else{if(b<0)return H.c(u,b)
return u[b]}},
i:function(a){return this.L()},
C:function(a){var u,t,s,r
u=H.b([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
L:function(){return this.C("")},
sfT:function(a){this.b=H.h(a,"$ia",[F.aW],"$aa")},
sfU:function(a){this.c=H.h(a,"$ia",[F.aW],"$aa")}}
F.fX.prototype={}
F.fW.prototype={
aY:function(a,b,c){return J.K(b.f,c.f)}}
F.fY.prototype={}
F.eW.prototype={
aZ:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[F.a7],"$aa")
u=V.ch()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null){q=u.a
p=r.a
o=u.b
n=r.b
m=u.c
r=r.c
if(typeof m!=="number")return m.l()
if(typeof r!=="number")return H.r(r)
u=new V.z(q+p,o+n,m+r)}}u=u.v(0,Math.sqrt(u.E(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.y)(a),++s){l=a[s]
if(r)k=null
else{q=u.a
p=u.b
o=u.c
if(typeof o!=="number")return o.k()
k=u.v(0,Math.sqrt(q*q+p*p+o*o))}if(!J.K(l.r,k)){l.r=k
q=l.a
if(q!=null){q=q.e
if(q!=null)q.H(null)}}}return}}
F.fZ.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.L()},
C:function(a){var u,t,s,r
u=H.b([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
L:function(){return this.C("")},
sbY:function(a){this.b=H.h(a,"$ia",[F.bc],"$aa")}}
O.cZ.prototype={
gB:function(){var u=this.dy
if(u==null){u=D.L()
this.dy=u}return u},
a7:function(a){var u
H.e(a,"$ix")
u=this.dy
if(u!=null)u.H(a)},
ha:function(){return this.a7(null)},
dz:function(a){H.e(a,"$ix")
this.a=null
this.a7(a)},
i_:function(){return this.dz(null)},
h4:function(a,b){var u=V.ad
u=new D.bs(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.a7(u)},
h6:function(a,b){var u=V.ad
u=new D.bt(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.a7(u)},
da:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.f.a1(u.e.length+3,4)*4
s=C.f.a1(u.f.length+3,4)*4
r=C.f.a1(u.r.length+3,4)*4
q=C.f.a1(u.x.length+3,4)*4
p=C.f.a1(u.y.length+3,4)*4
o=C.f.a1(u.z.length+3,4)*4
n=C.f.a1(this.e.a.length+3,4)*4
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
a7=$.b5()
if(a0){b=$.b4()
a7=new Z.aO(a7.a|b.a)}if(a1){b=$.b3()
a7=new Z.aO(a7.a|b.a)}if(a2){b=$.b6()
a7=new Z.aO(a7.a|b.a)}if(a3){b=$.b7()
a7=new Z.aO(a7.a|b.a)}if(a5){b=$.b2()
a7=new Z.aO(a7.a|b.a)}return new A.eN(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
U:function(a,b){H.h(a,"$ia",[T.dl],"$aa")},
aq:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.am(u,u.length,0,[H.t(u,0)]);u.J();){t=u.d
t.toString
s=$.fQ
if(s==null){s=new V.z(0,0,1)
$.fQ=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cP(s)}}},
jT:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.da()
t=a4.fr.j(0,u.af)
if(t==null){t=A.l9(u,a4.a)
s=t.b
if(s.length===0)H.q(P.u("May not cache a shader with no name."))
if(a4.fr.bf(s))H.q(P.u('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.q(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bg
u=a5.e
if(!(u instanceof Z.cF)){a5.e=null
u=null}if(u==null||!u.d.t(0,q)){u=r.r1
if(u)a5.d.ae()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cf()
o.a.cf()
o=o.e
if(o!=null)o.ah()}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.iZ()
n=n.e
if(n!=null)n.ah()}l=a5.d.iY(new Z.h1(a4.a),q)
l.aK($.b5()).e=this.a.Q.c
if(u)l.aK($.b4()).e=this.a.cx.c
if(p)l.aK($.b3()).e=this.a.ch.c
if(r.rx)l.aK($.b6()).e=this.a.cy.c
if(o)l.aK($.b7()).e=this.a.db.c
if(r.x1)l.aK($.b2()).e=this.a.dx.c
a5.e=l}u=T.dl
k=H.b([],[u])
p=this.a
o=a4.a
C.b.eL(o,p.r)
p.x.ji()
if(r.fx){p=this.a
n=a4.dx.gZ()
p=p.dy
p.toString
p.ak(n.ac(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db.gZ().k(0,a4.dx.gZ())
a4.cx=n}p=p.fr
p.toString
p.ak(n.ac(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gjP().k(0,a4.dx.gZ())
a4.ch=n}p=p.fy
p.toString
p.ak(n.ac(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.ak(C.o.ac(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.ak(C.o.ac(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.ak(C.o.ac(n,!0))}if(r.ap>0){j=this.e.a.length
p=this.a.k4
C.b.R(p.a,p.d,j)
for(p=[P.o],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.c(m,i)
m=m[i]
n.toString
H.e(m,"$iad")
n=n.r1
if(i>=n.length)return H.c(n,i)
n=n[i]
h=new Float32Array(H.bC(H.h(m.ac(0,!0),"$ia",p,"$aa")))
C.b.eJ(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.j:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.U(k,this.f.d)
p=this.a
n=this.f.d
p.ad(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.U(k,this.f.e)
p=this.a
n=this.f.e
p.a8(p.ry,p.x1,n)
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
case C.h:this.U(k,this.r.d)
p=this.a
n=this.r.d
p.ad(p.y1,p.ap,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.U(k,this.r.e)
p=this.a
n=this.r.e
p.a8(p.y2,p.ap,n)
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
p=p.af
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.U(k,this.x.d)
p=this.a
n=this.x.d
p.ad(p.bg,p.bh,n)
n=this.a
p=this.x.f
n=n.af
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.U(k,this.x.e)
p=this.a
n=this.x.e
p.a8(p.dR,p.bh,n)
n=this.a
p=this.x.f
n=n.af
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}switch(r.d){case C.d:break
case C.j:p=this.a
n=this.y.f
p=p.bi
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.U(k,this.y.d)
p=this.a
n=this.y.d
p.ad(p.dS,p.bj,n)
n=this.a
p=this.y.f
n=n.bi
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.U(k,this.y.e)
p=this.a
n=this.y.e
p.a8(p.dT,p.bj,n)
n=this.a
p=this.y.f
n=n.bi
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}switch(r.e){case C.d:break
case C.j:p=this.a
n=this.z.f
p=p.bk
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bm
C.b.M(n.a,n.d,g)
break
case C.h:this.U(k,this.z.d)
p=this.a
n=this.z.d
p.ad(p.dU,p.bl,n)
n=this.a
p=this.z.f
n=n.bk
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bm
C.b.M(p.a,p.d,g)
break
case C.i:this.U(k,this.z.e)
p=this.a
n=this.z.e
p.a8(p.dV,p.bl,n)
n=this.a
p=this.z.f
n=n.bk
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bm
C.b.M(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.e5
C.b.R(p.a,p.d,j)
f=a4.db.gZ()
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.co
if(e>=m.length)return H.c(m,e)
b=m[e]
m=f.cP(c.a)
g=m.a
a=m.b
a0=m.c
if(typeof a0!=="number")return a0.k()
a0=m.v(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.w(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.b.w(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.e6
C.b.R(p.a,p.d,j)
f=a4.db.gZ()
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.cp
if(e>=m.length)return H.c(m,e)
b=m[e]
m=c.gb2(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.b6(c.gb2(c))
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gao(c)
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gc8()
g=b.e
C.b.M(g.a,g.d,m)
m=c.gc9()
g=b.f
C.b.M(g.a,g.d,m)
m=c.gca()
g=b.r
C.b.M(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.e7
C.b.R(p.a,p.d,j)
f=a4.db.gZ()
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.cq
if(e>=m.length)return H.c(m,e)
b=m[e]
m=c.gb2(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gcm(c).ki()
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.b6(c.gb2(c))
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gao(c)
g=b.e
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gkg()
g=b.f
C.b.M(g.a,g.d,m)
m=c.gkf()
g=b.r
C.b.M(g.a,g.d,m)
m=c.gc8()
g=b.x
C.b.M(g.a,g.d,m)
m=c.gc9()
g=b.y
C.b.M(g.a,g.d,m)
m=c.gca()
g=b.z
C.b.M(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.e8
C.b.R(p.a,p.d,j)
f=a4.db.gZ()
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
g=this.a.cr
if(e>=g.length)return H.c(g,e)
b=g[e]
g=c.gb3()
H.h(k,"$ia",m,"$aa")
if(!C.a.aS(k,g)){g.saW(0,k.length)
C.a.h(k,g)}g=c.gcm(c)
a=b.d
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=c.gbA()
a=b.b
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=c.gby(c)
a=b.c
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=f.cP(c.gcm(c))
a=g.a
a0=g.b
a1=g.c
if(typeof a1!=="number")return a1.k()
a1=g.v(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.w(a0.a,a0.d,a,g,a1)
a1=c.gao(c)
g=b.f
C.b.w(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gb3()
g=a1.gaX(a1)
if(!g){g=b.x
C.b.R(g.a,g.d,1)}else{g=b.r
a=a1.gaX(a1)
a0=g.a
g=g.d
if(!a)C.b.R(a0,g,0)
else C.b.R(a0,g,a1.gaW(a1))
g=b.x
C.b.R(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.e9
C.b.R(p.a,p.d,j)
f=a4.db.gZ()
for(p=this.dx.y,n=p.length,m=[P.o],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
a=this.a.cs
if(e>=a.length)return H.c(a,e)
b=a[e]
a=c.gb3()
H.h(k,"$ia",g,"$aa")
if(!C.a.aS(k,a)){a.saW(0,k.length)
C.a.h(k,a)}a2=f.k(0,c.gZ())
a=c.gZ()
a0=$.c1
if(a0==null){a0=new V.R(0,0,0)
$.c1=a0}a0=a.b6(a0)
a=b.b
C.b.w(a.a,a.d,a0.a,a0.b,a0.c)
a=$.c1
if(a==null){a=new V.R(0,0,0)
$.c1=a}a=a2.b6(a)
a0=b.c
C.b.w(a0.a,a0.d,a.a,a.b,a.c)
a=a2.el()
a0=b.d
h=new Float32Array(H.bC(H.h(new V.d0(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).ac(0,!0),"$ia",m,"$aa")))
C.b.eI(a0.a,a0.d,!1,h)
a0=c.gao(c)
a=b.e
C.b.w(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gb3()
a=a0.gaX(a0)
if(!a){a=b.r
C.b.R(a.a,a.d,1)}else{a=b.f
a1=a0.gaX(a0)
a3=a.a
a=a.d
if(!a1)C.b.R(a3,a,0)
else C.b.R(a3,a,a0.gaW(a0))
a=b.r
C.b.R(a.a,a.d,0)}a=c.gc8()
a0=b.x
C.b.M(a0.a,a0.d,a)
a=c.gc9()
a0=b.y
C.b.M(a0.a,a0.d,a)
a=c.gca()
a0=b.z
C.b.M(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.ea
C.b.R(p.a,p.d,j)
f=a4.db.gZ()
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.ct
if(e>=m.length)return H.c(m,e)
b=m[e]
m=c.gb3()
H.h(k,"$ia",u,"$aa")
if(!C.a.aS(k,m)){m.saW(0,k.length)
C.a.h(k,m)}m=c.gb2(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gcm(c)
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gbA()
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gby(c)
g=b.e
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.b6(c.gb2(c))
g=b.f
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gb3()
g=m.gaX(m)
if(!g){m=b.x
C.b.R(m.a,m.d,1)}else{g=b.r
a=m.gaX(m)
a0=g.a
g=g.d
if(!a)C.b.R(a0,g,0)
else C.b.R(a0,g,m.gaW(m))
m=b.x
C.b.R(m.a,m.d,0)}m=c.gao(c)
g=b.y
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gkj()
g=b.z
C.b.M(g.a,g.d,m)
m=c.gkk()
g=b.Q
C.b.M(g.a,g.d,m)
m=c.gc8()
g=b.ch
C.b.M(g.a,g.d,m)
m=c.gc9()
g=b.cx
C.b.M(g.a,g.d,m)
m=c.gca()
g=b.cy
C.b.M(g.a,g.d,m);++e}}}switch(r.f){case C.d:break
case C.j:break
case C.h:this.U(k,this.Q.d)
u=this.a
p=this.Q.d
u.ad(u.dW,u.bn,p)
break
case C.i:this.U(k,this.Q.e)
u=this.a
p=this.Q.e
u.a8(u.dX,u.bn,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db.gZ().el()
a4.Q=p}u=u.id
u.toString
u.ak(p.ac(0,!0))}if(r.dy){this.U(k,this.ch)
u=this.a
p=this.ch
u.a8(u.dY,u.dZ,p)
switch(r.r){case C.d:break
case C.j:u=this.a
p=this.cx.f
u=u.bo
u.toString
n=p.a
m=p.b
p=p.c
C.b.w(u.a,u.d,n,m,p)
break
case C.h:this.U(k,this.cx.d)
u=this.a
p=this.cx.d
u.ad(u.e_,u.bp,p)
p=this.a
u=this.cx.f
p=p.bo
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
break
case C.i:this.U(k,this.cx.e)
u=this.a
p=this.cx.e
u.a8(u.e0,u.bp,p)
p=this.a
u=this.cx.f
p=p.bo
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
break}switch(r.x){case C.d:break
case C.j:u=this.a
p=this.cy.f
u=u.br
u.toString
n=p.a
m=p.b
p=p.c
C.b.w(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bq
C.b.M(p.a,p.d,m)
break
case C.h:this.U(k,this.cy.d)
u=this.a
p=this.cy.d
u.ad(u.e1,u.bs,p)
p=this.a
u=this.cy.f
p=p.br
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bq
C.b.M(u.a,u.d,m)
break
case C.i:this.U(k,this.cy.e)
u=this.a
p=this.cy.e
u.a8(u.e2,u.bs,p)
p=this.a
u=this.cy.f
p=p.br
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bq
C.b.M(u.a,u.d,m)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.j:u=this.a
n=this.db.f
u=u.bt
C.b.M(u.a,u.d,n)
break
case C.h:this.U(k,this.db.d)
u=this.a
n=this.db.d
u.ad(u.e3,u.bu,n)
n=this.a
u=this.db.f
n=n.bt
C.b.M(n.a,n.d,u)
break
case C.i:this.U(k,this.db.e)
u=this.a
n=this.db.e
u.a8(u.e4,u.bu,n)
n=this.a
u=this.db.f
n=n.bt
C.b.M(n.a,n.d,u)
break}C.b.cn(o,3042)
C.b.iX(o,770,771)}for(i=0;i<k.length;++i)k[i].be(a4)
u=a5.e
u.be(a4)
u.aM(a4)
u.eH(a4)
if(p)C.b.jd(o,3042)
for(i=0;i<k.length;++i)k[i].eH(a4)
u=this.a
u.toString
C.b.eL(o,null)
u.x.je()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.da().af},
sfu:function(a){this.e=H.h(a,"$iT",[V.ad],"$aT")}}
O.eL.prototype={}
O.d_.prototype={
aF:function(){}}
O.eM.prototype={}
O.aJ.prototype={
dB:function(a){var u,t
if(!J.K(this.f,a)){u=this.f
this.f=a
t=new D.C(this.b+".color",u,a,this,[V.U])
t.b=!0
this.a.a7(t)}},
aF:function(){this.f1()
this.dB(new V.U(1,1,1))},
sao:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aF()
u=this.a
u.a=null
u.a7(null)}this.dB(b)}}
O.eO.prototype={
i1:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.B().a)){this.ch=a
u=new D.C(this.b+".refraction",u,a,this,[P.o])
u.b=!0
this.a.a7(u)}},
aF:function(){this.bG()
this.i1(1)}}
O.eP.prototype={
c2:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.B().a)){this.ch=a
u=new D.C(this.b+".shininess",u,a,this,[P.o])
u.b=!0
this.a.a7(u)}},
aF:function(){this.bG()
this.c2(100)}}
O.bA.prototype={}
T.dl.prototype={}
T.fn.prototype={}
V.dV.prototype={
aL:function(a){return!0},
i:function(a){return"all"},
$iaX:1}
V.aX.prototype={}
V.cY.prototype={
aL:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)if(u[s].aL(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sav:function(a){this.a=H.h(a,"$ia",[V.aX],"$aa")},
$iaX:1}
V.b_.prototype={
aL:function(a){return!this.f0(a)},
i:function(a){return"!["+this.cZ(0)+"]"}}
V.f9.prototype={
f5:function(a){var u,t
if(a.a.length<=0)throw H.d(P.u("May not create a SetMatcher with zero characters."))
u=new H.ay([P.l,P.a5])
for(t=new H.cW(a,a.gn(a),0,[H.ap(a,"P",0)]);t.J();)u.q(0,t.d,!0)
this.si0(u)},
aL:function(a){return this.a.bf(a)},
i:function(a){return P.dh(this.a.gcz(),0,null)},
si0:function(a){this.a=H.h(a,"$iG",[P.l,P.a5],"$aG")},
$iaX:1}
V.c5.prototype={
D:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.c8(this.a.N(0,b))
r.sav(H.b([],[V.aX]))
r.c=!1
C.a.h(this.c,r)
return r},
jl:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.aL(a))return r}return},
i:function(a){return this.b},
sik:function(a){this.c=H.h(a,"$ia",[V.c8],"$aa")}}
V.dr.prototype={
i:function(a){var u,t
u=H.ki(this.b,"\n","\\n")
t=H.ki(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.c7.prototype={
i:function(a){return this.b},
shV:function(a){var u=P.k
this.c=H.h(a,"$iG",[u,u],"$aG")}}
V.fp.prototype={
N:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.c5(this,b)
u.sik(H.b([],[V.c8]))
u.d=null
this.a.q(0,b,u)}return u},
b5:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.c7(this,a)
t=P.k
u.shV(new H.ay([t,t]))
this.b.q(0,a,u)}return u},
k6:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dr])
t=this.c
s=[P.l]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.G(a,o)
m=t.jl(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dh(r,0,null)
throw H.d(P.u("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dh(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dr(j==null?k.b:j,l,o)}++o}}},
si9:function(a){this.a=H.h(a,"$iG",[P.k,V.c5],"$aG")},
sib:function(a){this.b=H.h(a,"$iG",[P.k,V.c7],"$aG")}}
V.c8.prototype={
i:function(a){return this.b.b+": "+this.cZ(0)}}
X.cH.prototype={$iaZ:1}
X.ep.prototype={
gB:function(){var u=this.x
if(u==null){u=D.L()
this.x=u}return u}}
X.d5.prototype={
gB:function(){var u=this.f
if(u==null){u=D.L()
this.f=u}return u},
aD:function(a){var u
H.e(a,"$ix")
u=this.f
if(u!=null)u.H(a)},
fn:function(){return this.aD(null)},
sb_:function(a){var u,t
if(!J.K(this.b,a)){u=this.b
if(u!=null)u.gB().K(0,this.gd2())
t=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gd2())
u=new D.C("mover",t,this.b,this,[U.a2])
u.b=!0
this.aD(u)}},
$iaZ:1,
$icH:1}
X.dk.prototype={}
V.im.prototype={
$1:function(a){H.e(a,"$iaM")
P.j0(C.e.eG(this.a.gjp(),2)+" fps")},
$S:46}
V.f0.prototype={
dH:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.j(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.jz().gcI().j(0,H.i(u))
if(t==null)if(d){c.$0()
this.dF(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.j5(this.c).h(0,q)
o=W.kW("radio")
o.checked=s
o.name=u
u=W.m
W.a4(o,"change",H.j(new V.f1(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.A.V(q,o)
n=r.createElement("span")
n.textContent=b
C.A.V(q,n)
J.j5(this.c).h(0,r.createElement("br"))},
aI:function(a,b,c){return this.dH(a,b,c,!1)},
dF:function(a){var u,t,s,r,q
u=P.jz()
t=P.k
s=P.l4(u.gcI(),t,t)
s.q(0,this.a,a)
r=u.eA(s)
t=window.history
q=r.i(0)
t.toString;(t&&C.N).hX(t,new P.hz([],[]).cQ(""),"",q)}}
V.f1.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dF(this.d)}},
$S:20}
V.fd.prototype={
f7:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.w).V(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.w.V(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.V(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.V(q,p)}o=u.createElement("div")
this.a=o
C.l.V(q,o)
this.b=null
o=W.m
W.a4(u,"scroll",H.j(new V.ff(s),{func:1,ret:-1,args:[o]}),!1,o)},
dI:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[P.k],"$aa")
this.i4()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.k6(C.a.ju(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.V(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.V(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.V(t,o)
break
case"Link":n=p.b
if(H.mA(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=H.N(m[1])
l.textContent=H.N(m[0])
C.l.V(t,l)}else{k=P.hI(C.Y,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.i(k)
l.textContent=n
C.l.V(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.V(t,o)
break}}C.l.V(this.a,t)},
iN:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[P.k],"$aa")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.l.V(this.a,t)
r=C.a2.fR(t,-1)
s=H.e((r&&C.F).dj(r,-1),"$iaL").style
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
o=H.e(C.F.dj(r,-1),"$iaL")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.a1).V(o,p)}},
i4:function(){var u,t,s,r
if(this.b!=null)return
u=new V.fp()
t=P.k
u.si9(new H.ay([t,V.c5]))
u.sib(new H.ay([t,V.c7]))
u.c=null
u.c=u.N(0,"Start")
t=u.N(0,"Start").D(0,"Bold")
s=V.a9(new H.Z("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Bold").D(0,"Bold")
s=new V.b_()
r=[V.aX]
s.sav(H.b([],r))
C.a.h(t.a,s)
t=V.a9(new H.Z("*"))
C.a.h(s.a,t)
t=u.N(0,"Bold").D(0,"BoldEnd")
s=V.a9(new H.Z("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Start").D(0,"Italic")
s=V.a9(new H.Z("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Italic").D(0,"Italic")
s=new V.b_()
s.sav(H.b([],r))
C.a.h(t.a,s)
t=V.a9(new H.Z("_"))
C.a.h(s.a,t)
t=u.N(0,"Italic").D(0,"ItalicEnd")
s=V.a9(new H.Z("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Start").D(0,"Code")
s=V.a9(new H.Z("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Code").D(0,"Code")
s=new V.b_()
s.sav(H.b([],r))
C.a.h(t.a,s)
t=V.a9(new H.Z("`"))
C.a.h(s.a,t)
t=u.N(0,"Code").D(0,"CodeEnd")
s=V.a9(new H.Z("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Start").D(0,"LinkHead")
s=V.a9(new H.Z("["))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"LinkHead").D(0,"LinkTail")
s=V.a9(new H.Z("|"))
C.a.h(t.a,s)
s=u.N(0,"LinkHead").D(0,"LinkEnd")
t=V.a9(new H.Z("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,"LinkHead").D(0,"LinkHead")
t=new V.b_()
t.sav(H.b([],r))
C.a.h(s.a,t)
s=V.a9(new H.Z("|]"))
C.a.h(t.a,s)
s=u.N(0,"LinkTail").D(0,"LinkEnd")
t=V.a9(new H.Z("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,"LinkTail").D(0,"LinkTail")
t=new V.b_()
t.sav(H.b([],r))
C.a.h(s.a,t)
s=V.a9(new H.Z("|]"))
C.a.h(t.a,s)
C.a.h(u.N(0,"Start").D(0,"Other").a,new V.dV())
s=u.N(0,"Other").D(0,"Other")
t=new V.b_()
t.sav(H.b([],r))
C.a.h(s.a,t)
s=V.a9(new H.Z("*_`["))
C.a.h(t.a,s)
s=u.N(0,"BoldEnd")
s.d=s.a.b5("Bold")
s=u.N(0,"ItalicEnd")
s.d=s.a.b5("Italic")
s=u.N(0,"CodeEnd")
s.d=s.a.b5("Code")
s=u.N(0,"LinkEnd")
s.d=s.a.b5("Link")
s=u.N(0,"Other")
s.d=s.a.b5("Other")
this.b=u}}
V.ff.prototype={
$1:function(a){P.jv(C.u,new V.fe(this.a))},
$S:20}
V.fe.prototype={
$0:function(){var u,t,s
u=C.e.ai(document.documentElement.scrollTop)
t=this.a.style
s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
K.ia.prototype={
$1:function(a){var u,t,s,r
u=H.f(H.e(a,"$ix"),"$idg").c
t=this.a.aj(u,null)
s=this.b.aj(u,null)
r=this.c
r.e.q(0,0,t)
r.e.q(0,1,s)
r.e.q(0,2,t)
r.e.q(0,3,s)
r.e.q(0,4,t)
r.e.q(0,5,s)
r.e.q(0,6,t)
r.e.q(0,7,s)},
$S:9}
K.ij.prototype={
$1:function(a){a.ae()
this.a.scX(0,a)},
$S:36}
K.ib.prototype={
$0:function(){this.a.$1(F.k4(30,null,null,30))},
$S:0}
K.ic.prototype={
$0:function(){this.a.$1(F.k5(1,!0,!0,100,20,1))},
$S:0}
K.id.prototype={
$0:function(){this.a.$1(F.k5(1,!0,!1,30,12,0))},
$S:0}
K.ie.prototype={
$0:function(){this.a.$1(F.mz(20,null,1,20))},
$S:0}
K.ig.prototype={
$0:function(){this.a.$1(F.mC(30,1.5,15,0.25))},
$S:0}
K.ih.prototype={
$0:function(){this.a.$1(F.mq(120,1,2,12,0.1,3))},
$S:0}
K.ii.prototype={
$0:function(){this.a.$1(F.mk(4,null,4))},
$S:0};(function aliases(){var u=J.a0.prototype
u.eZ=u.i
u=J.cS.prototype
u.f_=u.i
u=O.d_.prototype
u.f1=u.aF
u=O.aJ.prototype
u.bG=u.aF
u=V.cY.prototype
u.f0=u.aL
u.cZ=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"m7","lE",12)
u(P,"m8","lF",12)
u(P,"m9","lG",12)
t(P,"k2","m6",3)
var n
s(n=E.ah.prototype,"ges",0,0,null,["$1","$0"],["eu","jG"],1,0)
s(n,"geq",0,0,null,["$1","$0"],["er","jF"],1,0)
s(n,"geo",0,0,null,["$1","$0"],["ep","jC"],1,0)
r(n,"gjA","jB",8)
r(n,"gjD","jE",8)
s(n=E.dq.prototype,"gd_",0,0,null,["$1","$0"],["d1","d0"],1,0)
q(n,"gjV","eB",3)
p(n=X.dx.prototype,"ghl","hm",11)
p(n,"gh7","h8",11)
p(n,"ghf","hg",4)
p(n,"ghp","hq",14)
p(n,"ghn","ho",14)
p(n,"ght","hu",4)
p(n,"ghx","hy",4)
p(n,"ghj","hk",4)
p(n,"ghv","hw",4)
p(n,"ghh","hi",4)
p(n,"ghz","hA",33)
p(n,"ghB","hC",11)
p(n,"ghN","hO",13)
p(n,"ghJ","hK",13)
p(n,"ghL","hM",13)
s(D.aS.prototype,"gf9",0,0,null,["$1","$0"],["ar","fa"],1,0)
s(n=D.cV.prototype,"gdr",0,0,null,["$1","$0"],["ds","hr"],1,0)
p(n,"ghD","hE",35)
r(n,"gh1","h2",17)
r(n,"ghH","hI",17)
o(V.M.prototype,"gn","cA",22)
o(V.z.prototype,"gn","cA",22)
s(n=U.bV.prototype,"gaC",0,0,null,["$1","$0"],["F","a2"],1,0)
r(n,"gfb","fc",21)
r(n,"ghF","hG",21)
s(n=U.dy.prototype,"gaC",0,0,null,["$1","$0"],["F","a2"],1,0)
p(n,"gbQ","bR",2)
p(n,"gbS","bT",2)
p(n,"gbU","bV",2)
s(n=U.dz.prototype,"gaC",0,0,null,["$1","$0"],["F","a2"],1,0)
p(n,"gbQ","bR",2)
p(n,"gbS","bT",2)
p(n,"gbU","bV",2)
p(n,"gfW","fX",2)
p(n,"gfY","fZ",2)
p(n,"gii","ij",2)
p(n,"gig","ih",2)
p(n,"gic","ie",2)
p(U.dA.prototype,"gh_","h0",2)
s(n=M.cL.prototype,"gal",0,0,null,["$1","$0"],["as","fe"],1,0)
r(n,"ghb","hc",8)
r(n,"ghd","he",8)
s(n=O.cZ.prototype,"gh9",0,0,null,["$1","$0"],["a7","ha"],1,0)
s(n,"ghZ",0,0,null,["$1","$0"],["dz","i_"],1,0)
r(n,"gh3","h4",18)
r(n,"gh5","h6",18)
s(X.d5.prototype,"gd2",0,0,null,["$1","$0"],["aD","fn"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.I,null)
s(P.I,[H.iE,J.a0,J.am,P.dJ,P.n,H.cW,P.aH,H.bq,H.cg,H.e7,H.f2,H.fs,P.b9,H.bP,H.dM,P.eG,H.ey,H.eA,H.eu,P.dN,P.aQ,P.as,P.dD,P.fi,P.c6,P.fj,P.aM,P.ab,P.hM,P.hw,P.ck,P.hq,P.P,P.hD,P.eH,P.bk,P.hL,P.hJ,P.a5,P.ac,P.aa,P.aF,P.eY,P.de,P.dG,P.eo,P.a,P.G,P.A,P.aj,P.k,P.ae,P.bB,P.fI,P.hx,W.e9,W.aw,W.cM,P.hy,P.hr,P.J,O.T,O.bY,E.e1,E.ah,E.f3,D.x,E.dq,Z.dC,Z.h1,Z.cF,Z.ba,Z.aO,D.e4,D.aG,X.cG,X.cT,X.ew,X.eD,X.an,X.eR,X.fq,X.dx,D.aS,D.X,D.d6,D.dd,D.dm,D.dn,D.dp,V.U,V.av,V.eg,V.d0,V.ad,V.a1,V.R,V.az,V.da,V.M,V.z,U.dy,U.dz,U.dA,M.cL,A.cB,A.dZ,A.eN,A.c9,A.cd,A.cb,A.ce,A.cc,A.cf,A.bl,A.dt,A.fC,F.a_,F.ej,F.aW,F.ex,F.bc,F.bz,F.fa,F.fb,F.fc,F.a7,F.fR,F.fS,F.fV,F.fX,F.fY,F.fZ,O.bA,O.d_,T.fn,V.dV,V.aX,V.cY,V.f9,V.c5,V.dr,V.c7,V.fp,X.cH,X.dk,X.d5,V.f0,V.fd])
s(J.a0,[J.es,J.cR,J.cS,J.ax,J.bb,J.aT,H.bu,W.bp,W.dE,W.eb,W.cK,W.m,W.cO,W.dH,W.dK,W.aA,W.dO,P.cD,P.cN,P.d8,P.by,P.dc,P.du])
s(J.cS,[J.eZ,J.bf,J.aU])
t(J.iD,J.ax)
s(J.bb,[J.cQ,J.et])
t(P.eC,P.dJ)
s(P.eC,[H.dv,W.h9,W.h8,P.ek])
t(H.Z,H.dv)
s(P.n,[H.ee,H.eI,H.h2])
s(P.aH,[H.eJ,H.h3])
t(H.e8,H.e7)
s(P.b9,[H.eX,H.ev,H.fG,H.fu,H.e3,H.f7,P.d4,P.aD,P.fH,P.fE,P.df,P.e6,P.ea])
s(H.bP,[H.is,H.fm,H.i5,H.i6,H.i7,P.h5,P.h4,P.h6,P.h7,P.hC,P.hB,P.he,P.hi,P.hf,P.hg,P.hh,P.hl,P.hm,P.hk,P.hj,P.fk,P.fl,P.hU,P.hu,P.ht,P.hv,P.eB,P.eF,P.hK,P.ec,P.ed,P.fM,P.fJ,P.fK,P.fL,P.hE,P.hF,P.hH,P.hG,P.hQ,P.hP,P.hR,P.hS,W.hd,P.hA,P.hW,P.el,P.em,E.f4,E.f5,E.f6,E.fo,D.ei,F.hN,F.hX,F.hZ,F.i_,F.i0,F.io,F.ip,F.ir,F.i9,F.hY,F.i2,F.i3,F.h0,F.h_,F.fT,F.fU,V.im,V.f1,V.ff,V.fe,K.ia,K.ij,K.ib,K.ic,K.id,K.ie,K.ig,K.ih,K.ii])
s(H.fm,[H.fh,H.bN])
t(P.eE,P.eG)
t(H.ay,P.eE)
t(H.ez,H.ee)
t(H.d1,H.bu)
s(H.d1,[H.cl,H.cn])
t(H.cm,H.cl)
t(H.d2,H.cm)
t(H.co,H.cn)
t(H.d3,H.co)
s(H.d3,[H.eS,H.eT,H.eU,H.eV,H.c_])
t(P.hs,P.hM)
t(P.hp,P.hw)
t(P.dQ,P.eH)
t(P.dw,P.dQ)
s(P.bk,[P.e_,P.ef])
t(P.bo,P.fj)
s(P.bo,[P.e0,P.fP,P.fO])
t(P.fN,P.ef)
s(P.aa,[P.o,P.l])
s(P.aD,[P.bx,P.eq])
t(P.ha,P.bB)
s(W.bp,[W.H,W.ci])
s(W.H,[W.V,W.b8,W.bS])
s(W.V,[W.v,P.p])
s(W.v,[W.dW,W.dX,W.cC,W.bj,W.bR,W.en,W.bX,W.cU,W.f8,W.aL,W.di,W.dj])
t(W.bQ,W.dE)
t(W.dI,W.dH)
t(W.br,W.dI)
t(W.cP,W.bS)
t(W.be,W.m)
s(W.be,[W.aI,W.a6,W.aB])
t(W.dL,W.dK)
t(W.c0,W.dL)
t(W.dP,W.dO)
t(W.fr,W.dP)
t(W.aP,W.a6)
t(W.dF,W.cK)
t(W.hb,P.fi)
t(W.iO,W.hb)
t(W.hc,P.c6)
t(P.hz,P.hy)
t(P.aq,P.hr)
s(D.x,[E.dg,D.bs,D.bt,D.C,X.f_])
s(E.e1,[Z.cE,A.c4,T.dl])
s(X.f_,[X.cX,X.aY,X.bZ,X.ds])
s(O.T,[D.cV,U.bV])
s(D.e4,[U.e5,U.a2])
s(U.a2,[U.cI,U.db])
t(A.eK,A.c4)
s(A.dt,[A.E,A.fy,A.fz,A.fB,A.fw,A.S,A.fx,A.D,A.fA,A.fD,A.ca,A.ao,A.af,A.ag])
t(F.fg,F.ej)
t(F.fv,F.ex)
t(F.fW,F.fX)
t(F.eW,F.fY)
t(O.cZ,O.bA)
s(O.d_,[O.eL,O.eM,O.aJ])
s(O.aJ,[O.eO,O.eP])
s(V.cY,[V.b_,V.c8])
t(X.ep,X.dk)
u(H.dv,H.cg)
u(H.cl,P.P)
u(H.cm,H.bq)
u(H.cn,P.P)
u(H.co,H.bq)
u(P.dJ,P.P)
u(P.dQ,P.hD)
u(W.dE,W.e9)
u(W.dH,P.P)
u(W.dI,W.aw)
u(W.dK,P.P)
u(W.dL,W.aw)
u(W.dO,P.P)
u(W.dP,W.aw)})();(function constants(){var u=hunkHelpers.makeConstList
C.w=W.cC.prototype
C.n=W.bj.prototype
C.l=W.bR.prototype
C.N=W.cO.prototype
C.x=W.cP.prototype
C.O=J.a0.prototype
C.a=J.ax.prototype
C.f=J.cQ.prototype
C.o=J.cR.prototype
C.e=J.bb.prototype
C.c=J.aT.prototype
C.V=J.aU.prototype
C.A=W.cU.prototype
C.a0=W.c0.prototype
C.E=J.eZ.prototype
C.b=P.by.prototype
C.a1=W.aL.prototype
C.a2=W.di.prototype
C.F=W.dj.prototype
C.v=J.bf.prototype
C.G=W.aP.prototype
C.H=W.ci.prototype
C.J=new P.e0(!1)
C.I=new P.e_(C.J)
C.K=new P.eY()
C.L=new P.fP()
C.k=new P.hs()
C.d=new A.bl(0,"ColorSourceType.None")
C.j=new A.bl(1,"ColorSourceType.Solid")
C.h=new A.bl(2,"ColorSourceType.Texture2D")
C.i=new A.bl(3,"ColorSourceType.TextureCube")
C.u=new P.aF(0)
C.M=new P.aF(5e6)
C.P=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.Q=function(hooks) {
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

C.R=function(getTagFallback) {
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
C.S=function() {
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
C.T=function(hooks) {
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
C.U=function(hooks) {
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
C.B=H.b(u([127,2047,65535,1114111]),[P.l])
C.p=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.q=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.r=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.X=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.Y=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.t=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.C=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.Z=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.D=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.W=H.b(u([]),[P.k])
C.a_=new H.e8(0,{},C.W,[P.k,P.k])
C.m=new P.fN(!1)})();(function staticFields(){$.aE=0
$.bO=null
$.j7=null
$.iR=!1
$.kb=null
$.k0=null
$.kh=null
$.i1=null
$.i8=null
$.iZ=null
$.bD=null
$.cs=null
$.ct=null
$.iS=!1
$.O=C.k
$.ji=null
$.jm=null
$.c1=null
$.jr=null
$.jC=null
$.jG=null
$.jE=null
$.jF=null
$.fQ=null
$.jD=null
$.jl=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mH","kl",function(){return H.ka("_$dart_dartClosure")})
u($,"mI","j1",function(){return H.ka("_$dart_js")})
u($,"mN","km",function(){return H.aN(H.ft({
toString:function(){return"$receiver$"}}))})
u($,"mO","kn",function(){return H.aN(H.ft({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mP","ko",function(){return H.aN(H.ft(null))})
u($,"mQ","kp",function(){return H.aN(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mT","ks",function(){return H.aN(H.ft(void 0))})
u($,"mU","kt",function(){return H.aN(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mS","kr",function(){return H.aN(H.jx(null))})
u($,"mR","kq",function(){return H.aN(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mW","kv",function(){return H.aN(H.jx(void 0))})
u($,"mV","ku",function(){return H.aN(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"na","j2",function(){return P.lD()})
u($,"ne","cy",function(){return[]})
u($,"mX","kw",function(){return P.lA()})
u($,"nb","kA",function(){return H.la(H.bC(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"nc","kB",function(){return P.lp("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"nd","kC",function(){return P.lZ()})
u($,"n3","kz",function(){return Z.ar(0)})
u($,"mY","kx",function(){return Z.ar(511)})
u($,"n5","b5",function(){return Z.ar(1)})
u($,"n4","b4",function(){return Z.ar(2)})
u($,"n_","b3",function(){return Z.ar(4)})
u($,"n6","b6",function(){return Z.ar(8)})
u($,"n7","b7",function(){return Z.ar(16)})
u($,"n0","cw",function(){return Z.ar(32)})
u($,"n1","cx",function(){return Z.ar(64)})
u($,"n2","ky",function(){return Z.ar(96)})
u($,"n8","bM",function(){return Z.ar(128)})
u($,"mZ","b2",function(){return Z.ar(256)})
u($,"mG","kk",function(){return new V.eg(1e-9)})
u($,"mF","B",function(){return $.kk()})})()
var v={mangledGlobalNames:{l:"int",o:"double",aa:"num",k:"String",a5:"bool",A:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.A},{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a6]},{func:1,ret:P.A,args:[F.a7,P.o,P.o]},{func:1,ret:P.A,args:[F.a_]},{func:1,ret:P.A,args:[,,]},{func:1,ret:-1,args:[P.l,[P.n,E.ah]]},{func:1,ret:P.A,args:[D.x]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[W.m]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aB]},{func:1,ret:-1,args:[W.aI]},{func:1,ret:V.R,args:[P.o]},{func:1,args:[,]},{func:1,ret:-1,args:[P.l,[P.n,D.X]]},{func:1,ret:-1,args:[P.l,[P.n,V.ad]]},{func:1,ret:P.o,args:[P.o]},{func:1,ret:P.A,args:[W.m]},{func:1,ret:-1,args:[P.l,[P.n,U.a2]]},{func:1,ret:P.o},{func:1,ret:P.k,args:[P.l]},{func:1,ret:P.A,args:[,]},{func:1,args:[,P.k]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:P.A,args:[,],opt:[P.aj]},{func:1,ret:P.A,args:[P.aa]},{func:1,ret:P.A,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:W.V,args:[W.H]},{func:1,ret:P.A,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:-1,args:[W.aP]},{func:1,ret:P.a5,args:[W.H]},{func:1,ret:P.a5,args:[[P.n,D.X]]},{func:1,ret:-1,args:[F.bz]},{func:1,args:[W.m]},{func:1,ret:P.J,args:[,,]},{func:1,ret:[P.G,P.k,P.k],args:[[P.G,P.k,P.k],P.k]},{func:1,ret:-1,args:[P.k,P.l]},{func:1,ret:P.A,args:[P.k]},{func:1,ret:P.A,args:[P.k,,]},{func:1,args:[P.k]},{func:1,ret:-1,args:[P.k],opt:[,]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:P.A,args:[P.aM]},{func:1,ret:P.k,args:[P.k]},{func:1,ret:P.J,args:[P.l]},{func:1,ret:[P.as,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.a0,DOMError:J.a0,MediaError:J.a0,Navigator:J.a0,NavigatorConcurrentHardware:J.a0,NavigatorUserMediaError:J.a0,OverconstrainedError:J.a0,PositionError:J.a0,WebGLActiveInfo:J.a0,WebGLRenderbuffer:J.a0,WebGL2RenderingContext:J.a0,WebGLTexture:J.a0,SQLError:J.a0,ArrayBufferView:H.bu,Float32Array:H.d2,Int16Array:H.eS,Int32Array:H.eT,Int8Array:H.eU,Uint32Array:H.eV,Uint8Array:H.c_,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLBaseElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLImageElement:W.v,HTMLLIElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTableSectionElement:W.v,HTMLTemplateElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,HTMLAnchorElement:W.dW,HTMLAreaElement:W.dX,HTMLBodyElement:W.cC,HTMLCanvasElement:W.bj,CDATASection:W.b8,CharacterData:W.b8,Comment:W.b8,ProcessingInstruction:W.b8,Text:W.b8,CSSStyleDeclaration:W.bQ,MSStyleCSSProperties:W.bQ,CSS2Properties:W.bQ,HTMLDivElement:W.bR,XMLDocument:W.bS,Document:W.bS,DOMException:W.eb,DOMRectReadOnly:W.cK,Element:W.V,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,EventTarget:W.bp,HTMLFormElement:W.en,History:W.cO,HTMLCollection:W.br,HTMLFormControlsCollection:W.br,HTMLOptionsCollection:W.br,HTMLDocument:W.cP,HTMLInputElement:W.bX,KeyboardEvent:W.aI,HTMLLabelElement:W.cU,PointerEvent:W.a6,MouseEvent:W.a6,DragEvent:W.a6,DocumentFragment:W.H,ShadowRoot:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.c0,RadioNodeList:W.c0,HTMLSelectElement:W.f8,HTMLTableCellElement:W.aL,HTMLTableDataCellElement:W.aL,HTMLTableHeaderCellElement:W.aL,HTMLTableElement:W.di,HTMLTableRowElement:W.dj,Touch:W.aA,TouchEvent:W.aB,TouchList:W.fr,CompositionEvent:W.be,FocusEvent:W.be,TextEvent:W.be,UIEvent:W.be,WheelEvent:W.aP,Window:W.ci,DOMWindow:W.ci,ClientRect:W.dF,DOMRect:W.dF,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,WebGLBuffer:P.cD,WebGLFramebuffer:P.cN,WebGLProgram:P.d8,WebGLRenderingContext:P.by,WebGLShader:P.dc,WebGLUniformLocation:P.du})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLTexture:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLUniformLocation:true})
H.d1.$nativeSuperclassTag="ArrayBufferView"
H.cl.$nativeSuperclassTag="ArrayBufferView"
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.d2.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.ke,[])
else K.ke([])})})()
//# sourceMappingURL=test.dart.js.map
